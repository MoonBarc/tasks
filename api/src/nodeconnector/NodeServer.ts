import { nanoid } from "nanoid"
import * as WebSocket from "ws"
import Node from "../class/Node"
import DistributionMethod from "../enum/DistributionMethod"
import { NodeSocketError } from "../enum/SocketError"
import Socket from "../interface/Socket"

class NodeServer {
    server: WebSocket.Server

    registry: Node[]

    constructor(port: number) {
        this.server = new WebSocket.Server({ port })

        this.server.on("connection", (con: Socket) => {
            if(con.readyState != WebSocket.OPEN) return;
            con.id = nanoid()
            con.activated = false;
            con.on("message", (d) => {
                if(con.activated) return;
                const s = d.toString()
                try {
                    const d = JSON.parse(s)
                    if(d.details) {
                        if(DistributionMethod[d.details.method] && typeof d.details.capacity?.cpu == "number" && d.details.capacity?.mem == "number") {
                            this.registry.push(
                                new Node(con, d.details.method, d.details.capacity)
                            )
                            con.activated = true
                        }else {
                            con.send(NodeSocketError.BAD_ARGUMENTS)
                        }
                    }else {
                        con.send(NodeSocketError.BAD_ARGUMENTS)
                    }
                }catch(e) {
                    con.send(NodeSocketError.BAD_JSON)
                }
            })
        }) 
    }
}

export default NodeServer