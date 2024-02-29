<script lang="ts">
  import { onMount } from "svelte";
  import { load } from "$lib/utils";
  import CardHome from "$lib/components/CardHome.svelte";
  import Button from "$lib/components/Button.svelte";
  let category: any = {};
  let categories: string | any[] = [];

  onMount(async () => {
    categories = await load();
  });
</script>

<header>
  {#if categories.length === 0}
    <p>pas de quizz disponible</p>
    <a href="./form">
      <h1>proposer un quiz ?</h1>
    </a>
  {:else}
    
    <a href="./form">
      <h1>proposer un quiz ?</h1>
    </a>
  {/if}
</header>
<main>
  {#if categories.length > 0}
    <ul>
      {#each categories as category (category.id)}
        <li>
          <a href={`./categories/name/${category.name}`}>
            <CardHome {category} />
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</main>

<style>
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  main {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-left: 3vh;
  }
  h1 {
    font-size: 50px;
    background-color: #9c11b8;
    color: white;
    padding: 20px 40px 20px 40px;
    border-radius: 50px;
    box-shadow: 5px 9px 11px 2px #000000;
  }
  h1:hover {
    background-color: #4a0857;
    box-shadow: none;
  }
  a {
    text-decoration: none;
    color: black;
  }

  ul
   {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
   
    gap: 30px;
    color: #4a0857;
    width: 100%;
    margin-left: 30px;
    margin-right: 30px;
  }
</style>
