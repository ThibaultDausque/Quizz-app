<script lang="ts">
  import { onMount } from "svelte";
  import { score} from "./Store.js";
  import Score from "../lib/img/score.svg";
  let currentScore = 0;
  
  onMount(() => {
    // listen change in store with methode subscribe
    const unsubscribeScore = score.subscribe((value) => {
      currentScore = value;
    });

    return () => {
      unsubscribeScore();
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
    border-radius: 40px;
  }

  .scoreNumber {
    font-size: 30px;
    font-weight: bold;
  }
</style>
