<script lang="ts">
  import { onMount } from "svelte";
  import { fetchQuestions } from "../lib/utils";
  import Timer from "./Timer.svelte";
  import QuestionCard from "./QuestionCard.svelte";

  let questions: { text: string; choices: string[]; response: string }[] = [];
  let indexQuestion: number = 0;
  let incorrectChoice: string = "";
  let resetTimer: () => void;

  onMount(async () => {
    questions = await fetchQuestions();
  });

  function validAnswer(choice: string, isCorrect: boolean) {
    console.log(`Utilisateur a choisi : ${choice}, Correct : ${isCorrect}`);
    if (isCorrect) {
      nextQuestion();
    } else {
      incorrectChoice = choice;
    }
  }

  function nextQuestion() {
    if (indexQuestion < questions.length - 1) {
      incorrectChoice = "";
      indexQuestion += 1;
      resetTimer(); 
    }
  }
</script>



{#if questions.length > 0}
  <Timer onTimeout={nextQuestion} bind:resetTimer/>
  <QuestionCard
    question={questions[indexQuestion]}
    onSelect={validAnswer}
    {incorrectChoice}
  />
{/if}
