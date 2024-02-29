<script lang="ts">

  //export let quiz: { question: string; choices: string[]; correctAnswer: string } = { question: '', choices: [], correctAnswer: '' };
  //export let questionNum: string = '';
  export let questions: any = {};

 
</script>

<div class="card">
  <h1>{questions.question}</h1>
  <h2>{questions.correctAnswer}</h2>
</div>

<style>
  .card {
    animation: fadeInOut 2s ease-in-out;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 15vh;
    margin-left: 3vh;
    margin-right: 3vh;
    width: 800px;
    height: 450px;
    padding: 20px;
    box-shadow: 0ch 0ch 10ch 0ch rgba(0, 0, 0, 0.2);
    border-radius: 40px;
    background-color: #f3bc7e;
    box-shadow: rgba(0, 0, 0, 0.2);
  }

</style>
