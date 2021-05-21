<script>
    import StatusDot from "./StatusDot.svelte";

    import { onMount } from "svelte"
    import { taskdata, statusdata } from "../stores/ws";

    // TODO: Use actual values
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // onMount(() => {
    //     setTimeout(() => {
    //         status = "ok"
    //         maxTasks = 100
    //         tasksRuning = getRandomInt(20,40)
    //         setInterval(() => {
    //             tasksRuning = getRandomInt(20,40)
    //         },1200)
    //     },1000)
    // })

    const statuses = {
        connecting: ["#fcba03", "Connecting..."],
        ok: ["#6ad478", "All systems online"],
        badnode: ["#fcba03", "Faulty node"],
        nonodes: ["#fcba03", "No nodes online"],
        unicorn: ["#ff45f3", "unicorn override enabled 🦄"],
        disconnected: ["#ff5c5c", "Disconnected"],
        connectfail: ["#ff5c5c", "Couldn't connect"],
        unknown: ["#ff5c5c", "Unknown error"],
        loading: ["#adadad", "Loading..."]
    }

    export let bg = "#4f566f"
    export let color = "#fff"
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
            <StatusDot color={statuses[$statusdata.status][0]}/><span>{statuses[$statusdata.status][1]}{#if $taskdata.max != 0} ({$taskdata.running}/{$taskdata.max}){/if}</span>
        </div>
    </div>
</div>