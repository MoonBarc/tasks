<script>
    import UserPage from "../../../components/UserPage.svelte";
    import Header from "../../../components/Header.svelte";
    let loaded = true;
    let resource = {
        type: "user"
    }
</script>

<Header></Header>
{#if loaded}
    {#if resource.type == "user"}
        <UserPage/>
    {/if}
{:else}
    <h1>Loading resource...</h1>
{/if}