<script lang="ts">
  import Box from '../Box.svelte'
  import SlideBox from '../SlideBox.svelte'

  // 9*7
  const boxes = [...Array(63)].map((_, i) => i)
</script>

<div id="grid">
  {#each boxes as box}
    {#if Math.random() < 0.8}
      <Box />
    {:else}
      <SlideBox />
    {/if}
  {/each}
</div>

<style lang="scss">
  $columnSize: 9;
  $boxSize: 220px;
  $boxMargin: 10px;

  #grid {
    display: grid;
    position: absolute;
    z-index: -1;
    top: -200px;
    left: -200px;
    width: calc($boxSize * $columnSize);
    height: calc($boxSize * $columnSize);
    grid-template-rows: repeat($columnSize, $boxSize);
    grid-template-columns: repeat($columnSize, $boxSize);
    align-items: center;
    gap: $boxMargin * 2;
    opacity: 0.5;
    filter: blur(10px);
  }
</style>
