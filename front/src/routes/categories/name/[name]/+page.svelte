<script lang="ts">
  // @ts-nocheck

  /**
     
      * @type {{ questions: { name: string; id: string; correctAnswer: string; }[]; }}
      */
  export let data;
  console.log(data);
</script>

{#if data.post && data.post.length > 0}
  <h1>{data.post[0].question}</h1> 
  <h1>{data.post[0].correctAnswer}</h1>
{:else}
  <p>No data available.</p>
{/if}
