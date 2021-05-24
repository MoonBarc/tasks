<script>
    import StatusDot from "../../components/StatusDot.svelte";
    import { nodesdata, taskdata } from "../../stores/ws";
    import Main from "../../components/Main.svelte"
    import Header from "../../components/Header.svelte";
</script>

<Header/>

<Main>
    <h1>Status</h1>
    <h3>Nodes</h3>
    <StatusDot color="#6ad478">Nodes online: {$nodesdata.online}</StatusDot>
    <StatusDot color="#fcba03">Faulty nodes: {$nodesdata.faulty}</StatusDot>
    <h3>Tasks</h3>
    <StatusDot color="#6ad478">Task Running: {$taskdata.running} / {$taskdata.max}</StatusDot>
    <StatusDot color="#fcba03">Queued: {$taskdata.queued}</StatusDot>
</Main>