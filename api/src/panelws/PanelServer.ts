import { nanoid } from "nanoid"
import * as WebSocket from "ws"
// import { APISocketError } from "../enum/SocketError"
import Socket from "../interface/Socket"
import TaskStatistics from "../stats/TaskStatistics"
import StatsPacket from "./StatsPacket"

class PanelServer {
    server: WebSocket.Server

    constructor(port: number) {
        this.server = new WebSocket.Server({ port })

        this.server.on("connection", (con: Socket) => {
            if(con.readyState != WebSocket.OPEN) return;
            con.send(
                JSON.stringify(new StatsPacket(TaskStatistics))
            )
            con.id = nanoid()
            con.activated = false;
        })
    }

    statupdate() {
        this.server.clients.forEach(w => {
            w.send(JSON.stringify(
                new StatsPacket(TaskStatistics)
            ))
        })
    }
}

export default PanelServer