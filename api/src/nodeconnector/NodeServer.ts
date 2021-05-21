import { nanoid } from "nanoid"
import * as WebSocket from "ws"
import levels from "../class/Logger"
import Node from "../class/Node"
import DistributionMethod from "../enum/DistributionMethod"
import { NodeSocketError } from "../enum/SocketError"
import Socket from "../interface/Socket"
import PanelServer from "../panelws/PanelServer"
import StatsPacket from "../panelws/StatsPacket"
import TaskStatistics from "../stats/TaskStatistics"

class NodeServer {
    server: WebSocket.Server
    panel: PanelServer
    registry: Node[]

    constructor(port: number, panel: PanelServer) {
        this.server = new WebSocket.Server({ port })
        this.panel = panel;
        this.registry = []

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
                        if(typeof d.details?.capacity?.cpu === "number" && typeof d.details?.capacity?.mem === "number") {
                            this.registry.push(
                                new Node(con, d.details.capacity)
                            )

                            TaskStatistics.nodes.online += 1
                            this.panel.statupdate()
                            con.activated = true
                        }else {
                            levels.VERBOSE.log(`socket ${con.id} sent no capacity details`)
                            con.send(NodeSocketError.BAD_ARGUMENTS)
                        }
                    }else {
                        levels.VERBOSE.log(`socket ${con.id} sent no details`)
                        con.send(NodeSocketError.BAD_ARGUMENTS)
                    }
                }catch(e) {
                    console.warn(e)
                    con.send(NodeSocketError.BAD_JSON)
                }
            })
            con.on("close", () => {
                if(!con.activated) return;
                TaskStatistics.nodes.online -= 1
                this.panel.statupdate()
            })
        }) 
    }


}

export default NodeServer