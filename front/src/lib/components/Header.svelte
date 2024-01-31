<script lang="ts">
  import logo from "$lib/img/logo.png";
</script>

<div class="header">
  <h1 class="title">QUIZZ APP</h1>
  <img src={logo} alt="Logo" />
</div>

<style>
  .header {
    display: flex;
    height: 200px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    background-color: #f3e5f5;
  }

  .title {
    display: flex;
    align-items: center;
    color: #ca3ae7;
    text-align: center;
    font-size: 75px;
  }

  img {
    width: 100px;
    height: 100px;
  }
</style>
