<script>
    import Icon from "./Icon.svelte";
    import StatusDot from "./StatusDot.svelte";

    import { onMount } from "svelte"

    // TODO: Use actual values
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    onMount(() => {
        setInterval(() => {
            tasksRuning = getRandomInt(20,40)
        },1200)
    })

    export let bg = "#4f566f"
    export let color = "#fff"
    let tasksRuning = 27;
    let maxTasks = 100;
    let status = "All systems online"
    let statusColor = "#6ad478"
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
            right: 10px;
            display: flex;
            align-items: center;
        }
    }
</style>

<div class="header" style={`background-color: ${bg}; color: ${color}`} >
    <div class="header-content">
        <h1><!-- TODO: Dynamically update this from build config!-->Tasks</h1>
        <div class="status">
            <StatusDot color={statusColor}/><span>{status} ({tasksRuning}/{maxTasks})</span>
        </div>
    </div>
</div>