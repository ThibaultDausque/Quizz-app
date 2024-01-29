<script lang="ts">
  import Choice from "./Choice.svelte";
  export let question: { text: string; choices: string[]; response: string };
  export let onSelect: (choice: string, isCorrect: boolean) => void;
  export let isIncorrect: string;
</script>

{#each question.choices as choice}
  
  <Choice
    {choice}
    {onSelect}
    isCorrect={choice === question.response}
    {isIncorrect}
  />
{/each}
