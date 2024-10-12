from pydantic import BaseModel, Field


class GetAnwerRequest(BaseModel):
    question: str = Field(description="Question to ask the knowledge base")


class GetAnwerResponse(BaseModel):
    answer: str = Field(description="Answer from the knowledge base")
    reference_filepaths: list[str] = Field(description="Reference filepaths from the knowledge base")
