from app.llm.gemini import get_gemini_llm
from app.prompts.chat_with_knowledge_base import (
    answer_from_knowledge_base_prompt_template,
)
from langchain_community.vectorstores import FAISS
from langchain_google_genai import GoogleGenerativeAIEmbeddings
import os
from typing import Any

embeddings = GoogleGenerativeAIEmbeddings(
    model="models/embedding-001", google_api_key=os.getenv("GEMINI_API_KEY")
)

current_dir = os.path.dirname(os.path.realpath(__file__))
root_path = os.path.abspath(os.path.join(current_dir, "../../../"))
embeddings_path = os.path.abspath(os.path.join(root_path, "embeddings"))
index = FAISS.load_local(
    embeddings_path, embeddings, allow_dangerous_deserialization=True
)
retriever = index.as_retriever(
    search_type="similarity_score_threshold",
    search_kwargs={"k": 5, "score_threshold": 0.5},
)


def format_nodes(nodes):
    result = ""
    for node in nodes:
        result += node.metadata["filepath"] + "\n" + node.page_content + "\n"
    return result


def format_history(history):
    result = ""
    for message in history:
        result += message["sender"] + " : " + message["message"] + "\n"
    return result


def get_file_paths_from_nodes(nodes):
    github_repo_path = "https://github.com/Sudeeparyan/Sudeep_Knowledge_Base/tree/master/chatbot/client/docs{file}"
    return [github_repo_path.format(file=node.metadata["filepath"]) for node in nodes]


def get_answer(question: str, history: list[str] = []) -> dict[str, Any]:
    """Get answer from the knowledge base."""
    gemini = get_gemini_llm("gemini-pro")
    nodes = retriever.invoke(question)
    node_text = (
        format_nodes(nodes)
        if len(nodes) > 0
        else "No relevant information found in the knowledge base."
    )
    prompt = answer_from_knowledge_base_prompt_template.format(
        question=question, documentation=node_text, history=format_history(history)
    )
    response = gemini.invoke(prompt)
    return {
        "answer": response.content,
        "reference_filepaths": get_file_paths_from_nodes(nodes),
    }
