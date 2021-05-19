<script>
    import StatusDot from "./StatusDot.svelte";

    import { onMount } from "svelte"

    // TODO: Use actual values
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    onMount(() => {
        setTimeout(() => {
            status = "All systems online"
            statusColor = "#6ad478"
            maxTasks = 100
            tasksRuning = getRandomInt(20,40)
            setInterval(() => {
                tasksRuning = getRandomInt(20,40)
            },1200)
        },1000)
    })

    export let bg = "#4f566f"
    export let color = "#fff"
    let tasksRuning = 0;
    let maxTasks = 0;
    let status = "Connecting..."
    let statusColor = "#fcba03"
</script>

<style lang="scss">
    .header {
        margin: 0;
        padding: 1rem;
    }

    .header h1 {
        margin: 0rem;
        font-size: 1.5rem;
    }
    .header-content {
        display: flex;
        align-items: center;
        @media screen and (max-width: 600px) {
            justify-content: center;
        }
        .status {
            @media screen and (max-width: 600px) {
                display: none
            }
            position: absolute;
            right: 1rem;
            display: flex;
            align-items: center;
        }
    }
</style>

<div class="header" style={`background-color: ${bg}; color: ${color}`} >
    <div class="header-content">
        <h1><!-- TODO: Dynamically update this from build config!-->Tasks</h1>
        <div class="status">
            <StatusDot color={statusColor}/><span>{status} {#if maxTasks != 0}({tasksRuning}/{maxTasks}){/if}</span>
        </div>
    </div>
</div>