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

<style lang="scss">
    .userpanel {
        @media screen and (max-width: 600px) {
            width: 100%;
            display: flex;
            justify-content: center;
            text-align: center;
        }
    }
</style>

<div class="userpanel">
    <div class="innerpanel">
        <h1>{resource.name}</h1>
        <RoleGroup>
            {#each (resource.roles.sort((a,b) => {
                // sort roles by height
                if(a.height < b.height) {
                    return 1
                }else {
                    return -1
                }
            })) as role}
                <Role color={role.color}>{role.name}</Role>
            {/each}
        </RoleGroup>
    </div>
</div>