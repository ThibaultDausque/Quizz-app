<script lang="ts">
  // @ts-nocheck
  /**
     
      * @type { questions: any }
      */
  export let data: string;
  console.log(data);
  import RecoveryData from "$lib/components/RecoveryData.svelte";
  import { choicesData } from "$lib/components/Store";
  let choices: string;
  choicesData.subscribe(value => { choices = value; });
</script>

{#if data.post && data.post.length > 0}
  {#each data.post as question }
    <div>
      <h1>{question.question}</h1>
      <h2>{question.correctAnswer}</h2>
    </div>
  {/each}
  {#if choices && choices.length > 0}
        {#each choices as choice, index}
          <p>Choix {index + 1}: {choice}</p>
        {/each}
    {/if}
{:else}
  <p>No data available.</p>
{/if}

<main>
  <RecoveryData {data} />
</main>

<style>
  main {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>



