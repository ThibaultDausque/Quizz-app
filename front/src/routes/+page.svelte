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
{:else}
  <h1>Categories</h1>

  <ul>
    {#each categories as category (category.id)}
      <li>
        <a href={`./categories/name/${category.name}`}>
          <p>Nom: {category.name}</p>
        </a>
        <p>Description: {category.description}</p>
      </li>
    {/each}
    <button>
      <a href="./form">
        <p>proposer un quiz ?</p>
      </a>
    </button>
  </ul>
{/if}
