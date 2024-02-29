<script lang="ts">
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
</script>

<header>
    <Header />
</header>

<slot />

<footer>
    <Footer />
</footer>

<style>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
