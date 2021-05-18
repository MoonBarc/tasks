<script>
    import Icon from "./Icon.svelte";

    export let dissmissable = true;
    export let dismissed = false;
    export let bg = "#adbfff"
</script>

<style>
    .alert {
        margin: 0;
        padding: 1rem;
    }
    
    .alert .close-button {
        position: absolute;
        display: flex;
        right: 8px;
        cursor: pointer;
        border-radius: 6px;
        background-color: rgba(255,255,255,0);
        outline-offset: 2px;
    }

    .alert .close-button:hover {
        background-color: rgba(255,255,255,0.1);
    }
</style>

<div class="alert" style={`display: ${dismissed ? "none" : "flex"}; background-color: ${bg}`} >
    <div class="content">
        <slot></slot>
    </div>
    {#if dissmissable}
        <div class="close-button"><Icon name="times"/></div>
    {/if}
</div>