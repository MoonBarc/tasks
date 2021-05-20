<script>
    import { onMount } from "svelte"

    onMount(() => {
        const ws = new WebSocket(`ws://${location.host}`)
        ws.send(JSON.stringify({
            
        }))
    })
</script>

<slot></slot>