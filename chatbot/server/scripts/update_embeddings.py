from dotenv import load_dotenv, find_dotenv
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter, Language
from langchain_core.documents import Document
from langchain_community.vectorstores import FAISS
from git import Repo
import os

load_dotenv(find_dotenv())


def get_docs_from_file_paths(filepaths):
    docs = []
    for filepath in filepaths:
        with open(os.path.join(knowledge_base_path, filepath), "r") as f:
            content = f.read()
        chunks = splitter.split_text(content)
        docs.extend(
            [
                Document(page_content=chunk, metadata={"filepath": filepath})
                for chunk in chunks
            ]
        )
    return docs


def get_doc_ids_from_filepaths(filepaths):
    doc_ids = []
    for doc_id in index.index_to_docstore_id.values():
        doc = index.docstore.search(doc_id)
        if doc.metadata["filepath"] in filepaths:
            doc_ids.append(doc_id)
    return doc_ids


def get_current_affected_files():
    current_affected_files = set()
    for root, dirs, files in os.walk(knowledge_base_path):
        for file in files:
            if not file.endswith(".md"):
                continue
            filepath = os.path.join(root, file)
            # get path relative to knowledge_base
            filepath = os.path.relpath(filepath, knowledge_base_path)
            if filepath in affected_markdown_files:
                current_affected_files.add(filepath)
    return current_affected_files


current_dir = os.path.dirname(os.path.realpath(__file__))
root_path = os.path.abspath(os.path.join(current_dir, "../../"))
repo_path = os.path.abspath(os.path.join(current_dir, "../../../"))
KNOWLEDGE_BASE_DIR_NAME = "docs"
knowledge_base_path = os.path.abspath(os.path.join(root_path,"client", KNOWLEDGE_BASE_DIR_NAME))

embeddings_path = os.path.abspath(os.path.join(root_path, "embeddings"))
commit_hash_file_path = os.path.join(embeddings_path, "commit_hash.txt")


embeddings = GoogleGenerativeAIEmbeddings(
    model="models/embedding-001", google_api_key=os.getenv("GEMINI_API_KEY")
)

index = FAISS.load_local(
    embeddings_path, embeddings, allow_dangerous_deserialization=True
)
repo = Repo(repo_path)

seperators = RecursiveCharacterTextSplitter.get_separators_for_language(
    Language.MARKDOWN
)
splitter = RecursiveCharacterTextSplitter(
    chunk_size=300, chunk_overlap=20, separators=seperators
)

# Read the last commit hash
with open(commit_hash_file_path, "r") as file:
    last_commit_hash = file.read().strip()

# Get the diff from the last commit hash to the current commit hash
diff_index = repo.commit(last_commit_hash).diff("HEAD")

# Get the diff file paths
affected_markdown_files = set(
    os.path.normpath(item.a_path.replace(f"{KNOWLEDGE_BASE_DIR_NAME}/", ""))
    for item in diff_index
    if item.a_path.startswith(KNOWLEDGE_BASE_DIR_NAME) and item.a_path.endswith(".md")
)

if not affected_markdown_files:
    print("No markdown files were affected.")
    exit()

print(f"{len(affected_markdown_files)} markdown files were affected.")

# Get the doc ids of the affected markdown files
doc_ids_to_delete = get_doc_ids_from_filepaths(affected_markdown_files)

print(
    f"Deleting {len(doc_ids_to_delete)} out of {len(index.index_to_docstore_id)} docs."
)

if len(doc_ids_to_delete) > 0:
    # Delete the affected doc ids
    index.delete(doc_ids_to_delete)

current_affected_files = get_current_affected_files()
docs_to_add = get_docs_from_file_paths(current_affected_files)

print(f"Re-embedding {len(current_affected_files)} files ({len(docs_to_add)} docs).")
if len(docs_to_add) > 0:
    index.add_documents(docs_to_add)

# Save the index
index.save_local(embeddings_path)

print("Saving the current commit hash.")
latest_commit_hash = repo.head.object.hexsha
with open(commit_hash_file_path, "w") as file:
    file.write(latest_commit_hash)
