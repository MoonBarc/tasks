<script>
    // @ts-nocheck
    import StatusDot from "../../components/StatusDot.svelte"
    import Button from "../../components/Button.svelte"
    import Header from "../../components/Header.svelte"
    import Main from "../../components/Main.svelte"
    import { apisocket } from "../../stores/ws"

    let status = "idle"

    function start(e) {
        e.preventDefault();
        const task = {
            image: document.querySelector("#image").value,
            cmd: document.querySelector("#command").value.split(" "),
            node: document.querySelector("#node").value
        }

        if(!$apisocket.websocket) {
            status = "disconnected"
            return;
        }

        $apisocket.websocket.send(JSON.stringify({
            type: "runtask",
            ...task
        }))

        status = "queued"
    }
</script>

<style>
    .status {
        margin-top: 1rem;
        max-width: 10rem;
        border: solid 1px #000;
        padding: 1rem
    }
</style>

<Header/>

<Main>
    <h1>Run Container</h1>
    <p>(experimental)</p>
    <input type="text" placeholder="image" id="image"><br/><br/>
    <input type="text" placeholder="command" id="command"><br/><br/>
    <input type="text" placeholder="node" id="node"><br/><br/>
    <Button on:click={start} type="primary">Run Container</Button>
    <div class="status">
        <StatusDot color="#6e6e6e">{status}</StatusDot>
    </div>
</Main>