<script lang="ts">
  import { onMount } from "svelte";
  import { fetchQuestions } from "../lib/utils";
  import Timer from "./Timer.svelte";
  import Question from "./Question.svelte";
  import Score from "./Score.svelte";
  import Card from "./Card.svelte";
  import { score, currentQuestionIndex, totalQuestions } from "./Store.js";

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

  function nextQuestion() {
    if (indexQuestion < questions.length - 1) {
      currentQuestionIndex.update((value) => value + 1);
      incorrectChoice = "";
      indexQuestion += 1;
      resetTimer();
    }
  }
</script>

{#if questions.length > 0}
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
{/if}

<style>
  .status {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .question {
    width: 80%;
  }
</style>
