<script lang="ts">
  // @ts-nocheck

  /**
     
      * @type { questions: any }
      */

  export let data: string;
  console.log(data);
  import Card from "$lib/components/Card.svelte";
  import RecoveryData from "$lib/components/RecoveryData.svelte";
</script>

<RecoveryData {data} />
<Card {data} />