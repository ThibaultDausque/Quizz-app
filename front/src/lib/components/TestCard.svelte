<script lang="ts">
  
  import ButtonChoice from "./TestButtonChoice.svelte";
  export let questions: any = {};
  export let choices:any = [];
  import Button from "./Button.svelte";

</script>

<div class="card">

  <h1>{questions.question}</h1>
  <h2>{questions.correctAnswer}</h2>
  {#if choices && choices.length > 0}
    {#each choices as choice, index}
      <p>Choix {index + 1}: {choice}</p>
    {/each}
  {/if}
 
  <slot />
</div>

<style>
  .card {
    animation: fadeInOut 2s ease-in-out;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 15vh;
    width: 800px;
    height: 450px;
    padding: 20px;
    box-shadow: 0ch 0ch 10ch 0ch rgba(0, 0, 0, 0.2);
    border-radius: 40px;
    background-color: #f3bc7e;
    box-shadow: rgba(0, 0, 0, 0.2);
  }

  p {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #4a0857;
  }
</style>
