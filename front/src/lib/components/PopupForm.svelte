<script>
    export let show = false;
    export let message = "";
</script>

{#if show}
    <div class="popup">
        <div class="popup-content">
            <h2>{message}</h2>
            <button class="button" on:click={() => (show = false)}>Fermer</button>
        </div>
    </div>
{/if}

<style>
    .popup {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);
    }
    .popup-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }
    .button {
        margin-top: 20px;
        font-size: 20px;
        padding: 10px 20px;
        background-color: #9c11b8;
        border-radius: 50px;
        color: white;
    }
    button:hover {
        background-color: #4a0857;
    }
</style>
