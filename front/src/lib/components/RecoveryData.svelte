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
<div class="card">
  {#if indexQuestion < data.post.length}

    <!--  {#each data.post as questions} -->
      <h1>{data.post[indexQuestion].question}</h1>
      <div class="status">
        <Timer onTimeout={nextQuestion} bind:resetTimer />
        <Score />
      </div>
      {#if choices && choices.length > 0}
      {#each choices.slice(0, 4) as choice, index}
      <Button text={choice} key={index} />
      {/each}
      {/if}
      {#if answerIsCorrect}
      <AddPoint value="+1" bgColor={{ style: "background-color: green;" }} />
      {:else if incorrectChoice}
      <AddPoint value="-1" bgColor={{ style: "background-color: red;" }} />
      
      {/if}
      
      <!-- {/each} -->
      {:else}
      <div class="result">
        <h2>Quiz terminé !</h2>
        <p class="displayScore"><Score /></p>
      </div>
      {/if}
    </div>
{:else}
  <p>Aucune question trouvée.</p>
{/if}

<style>
  .status {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .card {
    animation: fadeInOut 2s ease-in-out;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 15vh;
    /* width: 800px;
    height: 450px; */
    padding: 20px;
    box-shadow: 0ch 0ch 10ch 0ch rgba(0, 0, 0, 0.2);
    border-radius: 40px;
    background-color: #f3bc7e;
    box-shadow: rgba(0, 0, 0, 0.2);
  }
</style>
