<script>
    import { statusdata } from "../stores/ws";

    import { onMount } from "svelte"

    onMount(() => {
        console.log("Connected! (not)")
        statusdata.update(() => ({
            status: "ok"
        }))
    })
</script>

<slot></slot>