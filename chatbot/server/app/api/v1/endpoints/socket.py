from fastapi import WebSocket, APIRouter
import asyncio
from typing import Dict, Any
import json
from app.functions import chat_with_knowledge_base

router = APIRouter()


@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    """Handle websocket connection."""
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        json_data = json.loads(data)
        if json_data["route"] == "request-answer":
            await handle_request_answer(websocket, json_data)
        else:
            raise ValueError(f"Invalid websocket route {json_data['route']}")


class Communicator:
    """This class is used to send messages to the client."""

    stopResponding: Dict[str, Any] = {}
    instance: bool = False

    def __init__(self, socket=None, socketID=None):
        """Initialize properties."""
        self.socket = socket
        self.socketID = socketID
        self.currentTaskID = ""
        # if not Communicator.instance:
        # self.socket_listener_init()
        Communicator.instance = self
        Communicator.stopResponding[socketID] = False

    def socket_listener_init(self):
        """Initialize socket listeners."""

        @self.socket.on("stop-responding")
        def handle_user_input(data):
            """Handle user input."""
            print("Got user input", data)
            sid = data["socketID"]
            Communicator.stopResponding[sid] = True

    async def emit(self, route, message: dict[str, Any]):
        """Emit a message to the client."""
        if self.socket:
            message["route"] = route
            await self.socket.send_text(json.dumps(message))
            await asyncio.sleep(0)

    def check_abort(self):
        """Check if the user has aborted the task."""
        abortflag = Communicator.stopResponding[self.socketID]
        if abortflag:
            Communicator.stopResponding[self.socketID] = False
        return abortflag


async def handle_request_answer(socket_object, data):
    """Handle request answer."""
    communicator = Communicator(socket=socket_object)
    try:
        response = {
            **chat_with_knowledge_base.get_answer(data["question"], data["history"]),
            "sessionID": data["sessionID"],
        }
        await communicator.emit("respond-answer", response)
    except Exception as error:
        print(repr(error))
        error_json = {
            "name": "INTERNAL_SERVER_ERROR",
            "message": "An unexpected error occurred while processing your request",
            "inner_errors": [repr(error)],
            "sessionID": data["sessionID"],
        }
        await communicator.emit("chat-assistant-error", error_json)
