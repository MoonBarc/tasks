<script>
    export let color = "#fa2211"
</script>

<style>
    .role {
        border-radius: 7px;
        border: solid 1px;
        display: flex;
        align-items: center;
        padding: 5px;
    }

    .role .dot {
        border-radius: 50%;
        width: 15px;
        height: 15px;
        display: inline-block
    }

    .role .inner-role {
        margin-left: 6px;
    }

    .rolewrap {
        display: flex
    }
</style>

<div class="rolewrap">
    <div class="role" style={`color: ${color}`}>
        <span class="dot" style={`background-color: ${color}`}></span>
        <div class="inner-role">
            <slot></slot>
        </div>
    </div>
</div>