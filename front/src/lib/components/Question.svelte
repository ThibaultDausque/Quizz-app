<script lang="ts">
  import Choice from "./ButtonChoice.svelte";
  export let quiz: { choices: string[]; correctAnswer: string };
  export let onSelect: (choice: string, isCorrect: boolean) => void;
  export let isIncorrect: string;
</script>
 
{#each quiz.choices as choice}
  
  <Choice
    data={choice}
    {choice}
    {onSelect}
    isCorrect={choice === quiz.correctAnswer}
    {isIncorrect}
  />
{/each} 
