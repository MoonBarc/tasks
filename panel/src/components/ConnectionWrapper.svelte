<script>
    import { apisocket, nodesdata, statusdata, taskdata } from "../stores/ws";

    import { onMount } from "svelte"

    function setStatus(status) {
        statusdata.set({ status })
    }

    onMount(() => {
        let reconnectInterval = null

        function createSocket() {
            try {
                ws = new WebSocket("ws://" + window.location.hostname + ":3001")
                ws.addEventListener("open", () => {
                    $apisocket.websocket = ws;
                    clearInterval(reconnectInterval)
                    reconnectInterval = null
                    setStatus("ok")
                })

                ws.addEventListener("message", (m) => {
                    console.log(m.data)
                    try {
                        const data = JSON.parse(m.data)
                        if(data?.type === "stats") {
                            if(!data.stats) return;
                            const d = data.stats
                            taskdata.set({
                                max: d.tasks.max || 0,
                                running: d.tasks.running || 0,
                                queued: d.tasks.queued || 0
                            })
                            nodesdata.set({
                                online: d.nodes.online || 0,
                                faulty: d.nodes.faulty || 0
                            })
                        }
                        if(data?.type === "status") {
                            setStatus(data.status || "unknown")
                        }
                    }catch(e) {
                        console.warn("Failed to parse server message!")
                    }
                })

                ws.addEventListener("error", () => {
                    if(ws.readyState == WebSocket.OPEN) return;
                    setStatus("unknown")
                    console.log("Error!")
                })

                ws.addEventListener("close", () => {
                    reconnect()
                    setStatus("disconnected")
                })

            }catch(e) {
                console.log("Error connecting!")
                setStatus("unknown")
                reconnect()
                return null
            }
        }

        function reconnect() {
            if(reconnectInterval) return;
            reconnectInterval = setInterval(() => {
                setStatus("reconnecting")
                createSocket()
            },5000)
        }

        console.log("Connecting to socket...")

        setStatus("connecting")

        let ws = createSocket()
        /*
         * Conviniently labeled easter egg
        */
        Object.defineProperty(window, 'unicorn', { get: function() { setStatus("unicorn"); return "unicorn override enabled 🦄"; } });
    })
</script>

<slot></slot>