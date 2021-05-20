import * as WebSocket from "ws";

interface Socket extends WebSocket {
    id?: string
    activated?: boolean
}

export default Socket