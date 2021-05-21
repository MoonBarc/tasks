<script>
    export let color = "#f00"
</script>

<style lang="scss">
    .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 0.4rem;
    }

    .status-dot {
        display: flex;
        align-items: center;
    }
</style>

<div class="status-dot">
    <div style={
        `background-color: ${color};`
    } class="dot"></div><slot></slot>
</div>