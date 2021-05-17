<script>
    import Button from "../components/Button.svelte";
    let buttons = [ "primary", "secondary", "danger", "flat", "flat danger", "flat primary", "flat secondary"]
</script>

{#each buttons as type}
    <Button style="margin-bottom: 1rem" type={type}>{type}</Button><br/>
{/each}