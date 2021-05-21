<script>
    import { nodesdata, statusdata, taskdata } from "../stores/ws";

    import { onMount } from "svelte"

    function setStatus(status) {
        statusdata.set({ status })
    }

    onMount(() => {
        console.log("Connecting to socket...")

        setStatus("connecting")

        const ws = new WebSocket("ws://" + window.location.hostname + ":3001")
        ws.addEventListener("open", () => {
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
                        running: d.tasks.running || 0
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
            setStatus("unknown")
        })

        ws.addEventListener("close", () => {
            setStatus("disconnected")
        })

        /*
         * Conviniently labeled easter egg
        */
        Object.defineProperty(window, 'unicorn', { get: function() { setStatus("unicorn"); return "unicorn override enabled 🦄"; } });
    })
</script>

<slot></slot>