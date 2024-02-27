<script lang="ts">
  import { onMount } from "svelte";
  import { load } from "$lib/utils";

  let categories: string | any[] = [];

  onMount(async () => {
    categories = await load();

  });
</script>

{#if categories.length === 0}
  <p>pas de quizz disponible</p>
  <p>Chargement retest</p>
{:else}
  <h1>Categories</h1>
  <ul>
    {#each categories as category (category.id)}
      <li>
        <a href={`./categories/name/${category.name}`}>
          <p>Nom: {category.name}</p>
        </a>
        <p>Description: {category.description}</p>
        <a href={"./" + category.id}>
          <p>ID: {category.id}</p>
        </a>
        <p>Nom: {category.name}</p>
        <p>Description: {category.description}</p>
        <p>Question : {category.questions}</p>
      </li>
    {/each}
    <button>
      <a href="./form">
        <p>proposer un quiz ?</p>
        <p>
          proposer un quiz ?
        </p>
      </a>
    </button>
  </ul>
{/if}
