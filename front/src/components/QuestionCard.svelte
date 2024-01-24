<script lang="ts">
    export let question: { text: string; choices: string[]; response: string };
    export let onSelect: (choice: string, isCorrect: boolean) => void;
</script>

<div>
    <p>{question.text}</p>
    <ul>
        {#each question.choices as choice}
            <button
                type="button"
                on:click={() => onSelect(choice, choice === question.response)}
            >
                {choice}
            </button>
        {/each}
    </ul>
</div>
