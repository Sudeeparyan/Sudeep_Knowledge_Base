import os
from pydantic_settings import BaseSettings, SettingsConfigDict
from dotenv import find_dotenv, load_dotenv

# Workaround to deploy in render
load_dotenv(find_dotenv())

# DOTENV_PATH = os.path.join(os.path.dirname(__file__), "..", ".env")


# class Settings(BaseSettings):
#     GEMINI_API_KEY: str
#     model_config = SettingsConfigDict(case_sensitive=True, env_file=DOTENV_PATH)


# settings = Settings()
