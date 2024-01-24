<script lang="ts">
    import { onMount, afterUpdate } from 'svelte';

    export let question: { text: string; choices: string[]; response: string };
    export let onSelect: (choice: string, isCorrect: boolean) => void;
    export let onTimeout: () => void;

    let visible = true;
    let key = 0;

    function resetTimerAndAnimation() {
        visible = true;
        key += 1;
        clearTimeout(timer);
        startTimer();
    }

    function startTimer() {
        return setTimeout(() => {
            visible = false;
            onTimeout();
        }, 2000);
    }

    let timer = startTimer();

    onMount(() => {
        return () => {
            clearTimeout(timer);
        };
    });

    afterUpdate(() => {
        resetTimerAndAnimation();
    });

    function handleSelect(choice: string, isCorrect: boolean) {
        onSelect(choice, isCorrect);
        resetTimerAndAnimation();
    }
</script>

{#if visible}
    <div class="card">
        <p>{question.text}</p>
        <ul>
            {#each question.choices as choice (choice)}
                <button
                    type="button"
                    on:click={() => handleSelect(choice, choice === question.response)}
                >
                    {choice}
                </button>
            {/each}
        </ul>
    </div>
{/if}

<style>
    .card {
        animation: fadeInOut 2s ease-in-out;
        margin-top: 15vh;
        width: 800px;
        height: auto;
        padding: 20px;
        box-shadow: 0ch 0ch 10ch 0ch rgba(0, 0, 0, 0.2);
        border-radius: 40px;
        background-color: #f3bc7e;
    }

    @keyframes fadeInOut {
        0% {
            opacity: 0;
            transform: translateX(1000px);
        }
        50% {
            opacity: 1;
            transform: translateX(0);
        }
        100% {
            opacity: 0;
            transform: translateX(-1000px);
        }
    }

    p {
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        color: #4a0857;
    }

    button {
        width: 100%;
        height: 50px;
        margin: 10px;
        border: none;
        border-radius: 10px;
        background-color: #4a0857;
        color: #f3bc7e;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
    }
</style>
