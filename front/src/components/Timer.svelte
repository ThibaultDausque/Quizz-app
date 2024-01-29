<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import sabler from "$lib/img/sabler.svg";
  export let initialTime = 5;
  export let onTimeout: () => void;

  let timer: NodeJS.Timeout;
  let remainingTime = initialTime;
  let key: number = 0;

  $: remainingTime;

  function startTimer() {
    remainingTime = initialTime;
    timer = setInterval(() => {
      remainingTime -= 1;
      if (remainingTime <= 0) {
        clearInterval(timer);
        onTimeout();
      }
    }, 1000);
  }

  onMount(startTimer);

  onDestroy(() => {
    clearInterval(timer);
  });

  export function resetTimer() {
    clearInterval(timer);
    startTimer();
    key += 1;
  }
</script>

<div class="sabler">
  {#key key}
    <img src={sabler} alt="sablier" />
    <div class="time">{remainingTime}</div>
  {/key}
</div>

<style>
  .sabler {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 150px;
    min-width: 150px;
    height: auto;
    padding: 20px;
    border-radius: 40px;
  }

  .time {
    font-size: 30px;
    margin-left: 20px;
    color: #4a0857;
    font-weight: bold;
  }

  img {
    width: 40px;
    animation: rotate 0.3s linear;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
</style>
