import EventEmitter = require("events")
import { nanoid } from "nanoid"
import * as WebSocket from "ws"
import levels from "../class/Logger"
import { APISocketError } from "../enum/SocketError"
// import { APISocketError } from "../enum/SocketError"
import Socket from "../interface/Socket"
import TaskStatistics from "../stats/TaskStatistics"
import Task from "../task/Task"
import TaskType from "../task/TaskType"
import StatsPacket from "./StatsPacket"

declare interface PanelServer {
    on(event: "task", listener: (task: Task, nodeId: string) => void)
}

class PanelServer extends EventEmitter {
    server: WebSocket.Server

    constructor(port: number) {
        super()
        this.server = new WebSocket.Server({ port })

        this.server.on("connection", (con: Socket) => {
            if(con.readyState != WebSocket.OPEN) return;
            con.send(
                JSON.stringify(new StatsPacket(TaskStatistics))
            )
            con.id = nanoid()
            con.activated = false;
            con.on("message", (d) => {
                try {
                    const data = JSON.parse(d.toString())
                    if(typeof data.type == "string") {
                        if(data.type == "runtask") {
                            if(
                                typeof data.image == "string" &&
                                data.cmd instanceof Array &&
                                data.cmd.length > 0 &&
                                typeof data.cmd[0] == "string" &&
                                typeof data.node == "string"
                            ) {
                                con.send(JSON.stringify({
                                    status: "okay"
                                }))
                                levels.INFO.log("Sending task to nodeserver...")
                                this.emit("task",new Task(
                                    TaskType.JOB, data.image, data.cmd
                                ), data.node)
                            }else{
                                con.send(JSON.stringify(APISocketError.BAD_ARGUMENTS))
                            }
                        }else{
                            con.send(JSON.stringify(APISocketError.BAD_ARGUMENTS))
                        }
                    }
                }catch(e) {
                    con.send(JSON.stringify(APISocketError.BAD_JSON))
                }
            })
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