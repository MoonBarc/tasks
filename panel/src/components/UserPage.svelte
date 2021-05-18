<script>
    import Role from "./Role.svelte";
    import RoleGroup from "./RoleGroup.svelte";

    export let resource = {
        name: "MoonBarc",
        roles: [
            {
                color: "#fa22fa",
                name: "Operator",
                height: 2
            },
            {
                color: "#fa2211",
                name: "Admin",
                height: 1
            },
        ]
    }
</script>

<h1>{resource.name}</h1>
<RoleGroup>
    {#each (resource.roles.sort((a,b) => {
        if(a.height < b.height) {
            return 1
        }else {
            return -1
        }
    })) as role}
        <Role color={role.color}>{role.name}</Role>
    {/each}
</RoleGroup>