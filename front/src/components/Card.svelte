<script lang="ts">
  export let question: { text: string; choices: string[]; response: string };
  export let currentQuestionInfo: string;
</script>

<div class="card">
  <p>{currentQuestionInfo}</p>
  <p>{question.text}</p>
  <slot />
</div>

<style>
  .card {
    /*animation: fadeInOut 2s ease-in-out;*/
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 15vh;
    width: 800px;
    height: auto;
    padding: 20px;
    box-shadow: 0ch 0ch 10ch 0ch rgba(0, 0, 0, 0.2);
    border-radius: 40px;
    background-color: #f3bc7e;
    box-shadow: rgba(0, 0, 0, 0.2);
  }

  p {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #4a0857;
  }
</style>
