<script lang="ts">
  import { onMount } from "svelte";
  import { fetchQuestions } from "../lib/utils";
  import Timer from "./Timer.svelte";
  import Question from "./Question.svelte";
  import Score from "./Score.svelte";
  import Card from "./Card.svelte";
  import { score, totalQuestions } from "./Store.js";

  let questions: { text: string; choices: string[]; response: string }[] = [];
  let indexQuestion: number = 0;
  let incorrectChoice: string = "";
  let resetTimer: () => void;

  onMount(async () => {
    questions = await fetchQuestions();
    totalQuestions.set(questions.length);
  });

  function validAnswer(choice: string, isCorrect: boolean) {
    if (isCorrect) {
      score.update((currentScore) => currentScore + 1);
      nextQuestion();
      incorrectChoice = "";
    
    } else {
      incorrectChoice = choice;
    }
  }

  $: isCompleted = () => {
    return indexQuestion <= questions.length
  }

  function nextQuestion() {
      incorrectChoice = "";
      indexQuestion += 1;
      resetTimer();
  }

</script>

{#if questions.length > 0} 
  {#if indexQuestion < questions.length}
  <Card
    question={questions[indexQuestion]}
    currentQuestionInfo={`Question ${indexQuestion + 1} / ${questions.length}`}
  >
    <div class="status">
      <Timer onTimeout={nextQuestion} bind:resetTimer />
      <Score />
    </div>
    <div class="question">
      <Question
        question={questions[indexQuestion]}
        onSelect={validAnswer}
        isIncorrect={incorrectChoice}
      />
    </div>
  </Card>
  {:else if answeredLastQuestion} 
    
      <div class="result">
        <h2>Quiz terminé !</h2>
        <h3>Votre score est de : </h3>
        <p class="displayScore"> <Score />/{questions.length}</p>
      </div>
    
  {/if}
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

