<script lang="ts">
  export let text: string;
  export let isIncorrect: boolean = false;
  export let onClick: (event: MouseEvent) => void;
  export let isProcessing: boolean = false;
</script>

<button type="button" class:incorrect={isIncorrect} disabled={isProcessing} on:click={onClick}>
  {text}
</button>

<style>
  button {
    width: 300px;
    height: 50px;
    margin: 10px;
    border: none;
    border-radius: 10px;
    background-color: #4a0857;
    color: #f3bc7e;
    font-size: 25px;
    font-weight: bold;
    box-shadow:
      0px 10px 13px -7px #000000,
      -19px 50px 0px -7px rgba(0, 0, 0, 0);
  }
  button:hover {
    box-shadow: none;
  }
  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }

  .incorrect {
    animation: shake 0.3s;
    animation-iteration-count: 2;
  }
</style>
