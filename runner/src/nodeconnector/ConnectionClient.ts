import EventEmitter = require("events")
import * as WebSocket from "ws"
import TaskType from "../enum/TaskType"
import levels from "../Logger"
import Task from "./Task"

declare interface ConnectionClient {
    on(name: "task", listener: (task: Task) => void);
}

class ConnectionClient extends EventEmitter {
    client: WebSocket
    constructor(addr: string) {
        super()
        this.client = new WebSocket(addr)
        this.client.on("open", (() => {
            levels.SUCCESS.log("WebSocket connection established, sending details.")
            this.client.send(JSON.stringify({
                details: {
                    capacity: {
                        cpu: 1,
                        mem: 1024
                    }
                }
            }))
        }))

        this.client.on("error", () => {
            levels.FATAL.log("Failed to connect!")
            process.exit(400)
        })

        this.client.on("close", () => {
            levels.WARN.log("Socket closed.")
        })

        this.client.on("message", (d) => {
            try {
                const data = JSON.parse(d.toString())
                if(data) {
                    if(data.type == "task") {
                        levels.INFO.log("TASK RECEIVED!")
                        this.emit("task", new Task(data.task.type, data.task.image, data.task.command))
                    }
                }
            } catch (e) {
                levels.WARN.log("Failed to parse JSON!")
            }
        })
    }
}

export default ConnectionClient