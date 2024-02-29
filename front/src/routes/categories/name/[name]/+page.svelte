<script lang="ts">
  // @ts-nocheck

  /**
     
      * @type { questions: any }
      */

  export let data: string;
  console.log(data);
  import RecoveryData from "$lib/components/RecoveryData.svelte";
</script>
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