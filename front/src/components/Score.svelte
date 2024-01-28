<script lang="ts">
  import { onMount } from "svelte";
  import { score, currentQuestionIndex } from "./Store.js";
  import Score from "../lib/img/score.svg";
  let currentScore = 0;
  let index = 0;

  onMount(() => {
    // listen change in store with methode subscribe
    const unsubscribeScore = score.subscribe((value) => {
      currentScore = value;
    });

    const unsubscribeIndex = currentQuestionIndex.subscribe((value) => {
      index = value;
    });

    return () => {
      unsubscribeScore();
      unsubscribeIndex();
    };
  });
</script>

<div class="score">
  <img class="scoreIcone" src={Score} alt="icone de score" />
  <div class="scoreNumber">{currentScore}</div>
</div>

<style>
  .score {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
    max-width: 150px;
    min-width: 150px;
    height: auto;
    padding: 20px;
    border-radius: 40px;
  }

  .scoreNumber {
    font-size: 30px;
    font-weight: bold;
    color: #4a0857;
  }
</style>
