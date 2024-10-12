import os
import uvicorn
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.endpoints import chat_with_knowledge_base, socket
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI(
    title="Chat with Knowledge Base API Documentation",
    version="0.0.1",
    description="API Documentation for Knowledge Base Chatbot",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(
    chat_with_knowledge_base.router,
    prefix="/v1/knowledge-base",
    tags=["Chat with Knowledge Base"],
)
app.include_router(
    socket.router,
    tags=["Socket"],
)

# Serving - static files
static_files_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "static")
app.mount("/static", StaticFiles(directory=static_files_path), name="static")
templates = Jinja2Templates(directory=static_files_path)


@app.get("/", response_class=HTMLResponse)
@app.get("/index.html", response_class=HTMLResponse)
def read_index(request: Request):
    """Serve the index.html file of front-end code at the root."""
    return templates.TemplateResponse("index.html", {"request": request})


def main():
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=False)


if __name__ == "__main__":
    main()