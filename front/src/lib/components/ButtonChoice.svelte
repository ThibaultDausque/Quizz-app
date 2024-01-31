<script lang="ts">
  import Button from "./Button.svelte";
  export let choice: string;
  export let onSelect: (choice: string, isCorrect: boolean) => void;
  export let isCorrect: boolean;
  export let isIncorrect: string;
</script>

<Button
  text={choice}
  onClick={() => onSelect(choice, isCorrect)}
  isIncorrect={choice === isIncorrect}
/>
