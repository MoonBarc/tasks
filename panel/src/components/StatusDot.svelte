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
</style>

<div style={
    `background-color: ${color};`
} class="dot"></div>