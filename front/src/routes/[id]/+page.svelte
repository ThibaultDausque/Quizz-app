

<script>
  export let data;
  console.log(data);

  export let data;

</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div>

{#if data.questions && data.questions.length > 0}
  <ul>
      {#each data.questions as question (question.id)}
          <li>{question.title}</li>
      {/each}
  </ul>
{:else}
  <p>No questions available.</p>

{/if}

