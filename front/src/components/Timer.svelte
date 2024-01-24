<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    export let onTimeout: () => void;
    let visible = true;

    onMount(() => {
        const timer = setTimeout(() => {
            visible = false;
            onTimeout();
        }, 5000); 

        return () => {
            clearTimeout(timer);
        };
    });
</script>

{#if visible}
    <div in:fly={{ x: 1000, duration: 1000 }} out:fly={{ x: -1000, duration: 1000 }}>
        Timer
    </div>
{:else}
    <div />
{/if}