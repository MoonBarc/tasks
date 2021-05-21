import * as WebSocket from "ws"
import levels from "../Logger"

class ConnectionClient {
    client: WebSocket
    constructor(addr: string) {
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
            levels.VERBOSE.log(d.toString())
        })
    }
}

export default ConnectionClient