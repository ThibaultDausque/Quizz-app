<script lang=ts>
    import { onDestroy } from "svelte";
    let elapsed = 0;
    let duration = 10000;

    let last_time = window.performance.now();
    let frame: number;

    (function update() {
        frame = requestAnimationFrame(update);

        const time = window.performance.now();
        elapsed += Math.min(time - last_time, duration - elapsed);

        last_time = time;
    })();

    onDestroy(() => {
        cancelAnimationFrame(frame);
    });
</script>

<label>
    elapsed time:
    <progress value={elapsed / duration} />
</label>

<div>{(elapsed / 1000).toFixed(1)}s</div>


    