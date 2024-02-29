<script lang="ts">
  // @ts-nocheck

  /**
     
      * @type { questions: any }
      */
  
      export let data: string;
  console.log(data);

  import Button from "./Button.svelte";
  import { choicesData } from "$lib/components/Store";
  export let choice: string;
  export let onSelect: (choices: string, isCorrect: boolean) => void;
  export let isCorrect: boolean;
  export let isIncorrect: string;

  let choices: string;
    choicesData.subscribe((value) => {
    choices = value;
  });
</script>

<Button
  text={choices}
  onClick={() => onSelect(choice, isCorrect)}
  isIncorrect={choice === isIncorrect}
/>
