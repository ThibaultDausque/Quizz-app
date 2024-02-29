<script lang="ts">
  // @ts-nocheck

  /**
     
      * @type { questions: any }
      */

  export let data: any;
  console.log(data);

  import { choicesData } from "$lib/components/Store";
  import Card from "$lib/components/Card.svelte";
  import Timer from "$lib/components/Timer.svelte";
  import Score from "$lib/components/Score.svelte";
  import Button from "$lib/components/Button.svelte";
  import AddPoint from "$lib/components/AddPoint.svelte";

  let answerIsCorrect: boolean = false;
  let displayAddPoint: boolean = false;
  let incorrectChoice: string = "";
  let indexQuestion: number = 0;
  let choices: string;
  let resetTimer: () => void;

  choicesData.subscribe((value) => {
    choices = value;
  });

  function nextQuestion() {
    incorrectChoice = "";
    indexQuestion += 1;
    resetTimer();
    answerIsCorrect = false;
    displayAddPoint = false;
  }
</script>

{#if data.post && data.post.length > 0}
  {#each data.post as questions}
    <Card {questions}>
      <div class="status">
        <Timer onTimeout={nextQuestion} bind:resetTimer />
        <Score />
      </div>
      {#if choices && choices.length > 0}
        {#each choices as choice}
           <Button text={choice} />
        {/each}
      {/if}
      {#if answerIsCorrect}
        <AddPoint value="+1" bgColor={{ style: "background-color: green;" }} />
      {:else if incorrectChoice}
        <AddPoint value="-1" bgColor={{ style: "background-color: red;" }} />
      {/if}
    </Card>
  {/each}
{:else}

<div class="result">
  <h2>Quiz terminé !</h2>
  <p class="displayScore"><Score /></p>
</div>
{/if}

<style>
  .status {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
