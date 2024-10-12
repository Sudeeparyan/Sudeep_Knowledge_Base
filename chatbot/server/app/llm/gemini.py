from langchain_google_genai import ChatGoogleGenerativeAI
import os

import app.config


def get_gemini_llm(model_name):
    return ChatGoogleGenerativeAI(
        model=model_name, google_api_key=os.getenv("GEMINI_API_KEY")
    )
