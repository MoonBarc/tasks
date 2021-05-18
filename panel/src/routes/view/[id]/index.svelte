<script>
    import UserPage from "../../../components/UserPage.svelte";
    import Main from "../../../components/Main.svelte";
    let loaded = true;
    let resource = {
        type: "user"
    }
</script>
<Main>
    {#if loaded}
        {#if resource.type == "user"}
            <UserPage/>
        {/if}
    {:else}
        <h1>Loading resource...</h1>
    {/if}
</Main>