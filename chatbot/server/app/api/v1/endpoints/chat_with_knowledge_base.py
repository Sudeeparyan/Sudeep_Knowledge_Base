from fastapi import APIRouter
from fastapi.responses import JSONResponse
from app.api.v1.models.chat_with_knowledge_base import (
    GetAnwerRequest,
    GetAnwerResponse,
)
from app.functions import chat_with_knowledge_base

router = APIRouter()


@router.post(
    "/get-answer", response_model=GetAnwerResponse, tags=["Chat with Knowledge Base"]
)
async def get_answer(request: GetAnwerRequest):
    return GetAnwerResponse(
        **chat_with_knowledge_base.get_answer(request.question)
    )
