<script lang="ts">
  // @ts-nocheck

  /**
     
      * @type { questions: any }
      */

      export let data: any;
  console.log(data);
  
  import { onMount } from "svelte";
  import { load } from "../utils";
  import Timer from "./Timer.svelte";
  import Question from "./Question.svelte";
  import Score from "./Score.svelte";
  import Card from "./Card.svelte";
  import { score, totalQuestions } from "./Store.js";
  import AddPoint from "./AddPoint.svelte";

  let quiz: { question: string; choices: string[]; correctAnswer: string }[] = [];
  let indexQuestion: number = 0;
  let incorrectChoice: string = "";
  let resetTimer: () => void;
  let answerIsCorrect: boolean = false;
  let displayAddPoint: boolean = false;
  let isProcessing: boolean = false;
  let question: any = {};

  onMount(async () => {
    quiz = await load();
    console.log(quiz);
    totalQuestions.set(quiz.length);
  });

  async function validAnswer(choice: string, isCorrect: boolean) {
    if (isProcessing && (answerIsCorrect = true)) return; // Ignore les clics supplémentaires pendant le traitement
    isProcessing = true; // Indiquer que le traitement est en cours

    if (isCorrect) {
      score.update((currentScore) => currentScore + 1);
      answerIsCorrect = true;
      await new Promise((resolve) => setTimeout(resolve, 600));
      nextQuestion();
      incorrectChoice = "";
    
    } else {
      score.update((currentScore) =>
        currentScore > 0 ? currentScore - 1 : currentScore,
      );
      incorrectChoice = choice;
      answerIsCorrect = false;
    }
    isProcessing = false;
  }

  function nextQuestion() {
    incorrectChoice = "";
    indexQuestion += 1;
    resetTimer();
    answerIsCorrect = false;
    displayAddPoint = false;
  }
</script>

{#if quiz.length > 0 && indexQuestion < quiz.length}
  <Card
    quiz={quiz[indexQuestion]}
    questionNum={`Question ${indexQuestion + 1} / ${quiz.length}`}
  
  >
    <div class="status">
      <Timer onTimeout={nextQuestion} bind:resetTimer />
      <Score />
    </div>
    <div class="question">
       <Question
        quiz={quiz[indexQuestion]}
        onSelect={validAnswer}
        isIncorrect={incorrectChoice}
      />  
      {#if answerIsCorrect}
        <AddPoint value="+1" bgColor={{style: "background-color: green;"}}/>
      {:else if incorrectChoice}
        <AddPoint value="-1" bgColor={{style: "background-color: red;"}}/>
      {/if}
    </div>
  </Card>
{:else}
  <div class="result">
    <h2>Quiz terminé !</h2>
    <p class="displayScore"><Score />/{quiz.length}</p>
  </div>
{/if}

<style>
  
  .result {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 15vh;
    width: 800px;
    height: auto;
    padding: 20px;
    box-shadow: 0ch 0ch 10ch 0ch rgba(0, 0, 0, 0.2);
    border-radius: 40px;
    background-color: #f3bc7e;
    box-shadow: rgba(0, 0, 0, 0.2);
  }

  .status {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .question {
    width: 80%;
  }

  .displayScore {
    display: flex;
    align-items: center;
    text-align: center;
    border-radius: 40px;
    font-size: 30px;
    color: #4a0857;
    font-weight: bold;
  }

</style>

