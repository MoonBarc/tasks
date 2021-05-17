<script>
    export let loading = false;
    export let isDisabled = false;
    export let type = "primary"
    export let style = ""
    let disabled = loading || isDisabled
</script>

<style>
    button {
        padding: 0.6rem 1.5rem;
        min-width: 10rem;
        border-radius: 6px;
        /* border: black solid 1px; */
        border: none;
        text-transform: uppercase;
        color: #FDFDFD;
        font-size: 1rem;
        background-color: #5292F1;
        transition: filter 200ms;
        cursor: pointer;
        font-family: 'Roboto', sans-serif;
    }

    .primary {
        background-color: #5292F1;
    }

    .primary.flat {
        color: #5292F1;
    }

    .danger {
        background-color: #F15252;
    }

    .danger.flat {
        color:#F15252;
    }

    .secondary {
        background-color: #4D6A95;
    }

    .secondary.flat {
        color: #4D6A95;
    }

    .flat {
        background: none;
        color: #000;
        border: solid 1px
    }
</style>


<button on:click style={style} class={type} disabled={disabled}><slot></slot></button>