<script>
    import Main from "../components/Main.svelte";
    import Alert from "../components/Alert.svelte";
    import Button from "../components/Button.svelte";
    import Role from "../components/Role.svelte";
    import RoleGroup from "../components/RoleGroup.svelte";
    import Header from "../components/Header.svelte";
    let buttons = [ "primary", "secondary", "danger", "flat", "flat danger", "flat primary", "flat secondary"]
</script>

<style>
    .roles {
        margin-bottom: 1rem;
    }
</style>

<Header/>
<Alert>test</Alert>

<Main>
    <h1>User</h1>
    <div class="roles">
        <RoleGroup>
            <Role color="#fa2211">Admin</Role>
            <Role color="#f542f5">Mod</Role>
            <Role color="#ffcc00">Bot</Role>
        </RoleGroup>
    </div>
    {#each buttons as type}
        <Button style="margin-bottom: 1rem" type={type}>{type}</Button><br/>
    {/each}
    <Button isDisabled={true} style="margin-bottom: 1rem" type="flat">Flat (Disabled)</Button><br/>
    <Button isDisabled={true} style="margin-bottom: 1rem" type="primary">Full (Disabled)</Button><br/>
</Main>