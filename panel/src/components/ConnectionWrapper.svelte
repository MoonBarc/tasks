<script>
    import { statusdata } from "../stores/ws";

    import { onMount } from "svelte"

    function setStatus(status) {
        statusdata.update(() => ({
            status
        }))
    }

    onMount(() => {
        console.log("Connecting to socket...")

        setStatus("connecting")

        const ws = new WebSocket("ws://" + window.location.host)
        ws.addEventListener("open", () => {
            setStatus("ok")
        })

        ws.addEventListener("error", () => {
            setStatus("unknown")
        })

        ws.addEventListener("close", () => {
            setStatus("connectfail")
        })

        /*
         * Conviniently labeled easter egg
        */
        Object.defineProperty(window, 'unicorn', { get: function() { setStatus("unicorn"); return "unicorn override enabled 🦄"; } });
    })
</script>

<slot></slot>