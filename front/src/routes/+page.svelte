<script lang="ts">
    import QuizPage from "../components/QuizPage.svelte";
    import Header from "../components/Header.svelte";   
</script>
<header>
    <Header />
</header>
<main>
   <QuizPage />
</main>

<style>
    header{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
