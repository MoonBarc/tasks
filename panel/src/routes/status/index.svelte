<script>
    import StatusDot from "../../components/StatusDot.svelte";
    import { nodesdata } from "../../stores/ws";
    import Main from "../../components/Main.svelte"
    import Header from "../../components/Header.svelte";
</script>

<Header/>

<Main>
    <h1>Status</h1>
    <StatusDot color="#6ad478">Nodes online: {$nodesdata.online}</StatusDot>
    <StatusDot color="#fcba03">Faulty nodes: {$nodesdata.faulty}</StatusDot>
</Main>