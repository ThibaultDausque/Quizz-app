<script lang="ts">
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
</script>

<header>
    <Header />
</header>

<main>
    <slot />
</main>
<footer>
    <Footer />
</footer>

<style>
    header {
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
