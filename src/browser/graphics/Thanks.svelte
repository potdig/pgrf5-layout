<script lang="ts">
  import Box from './lib/Box.svelte'
  import Container from './lib/Container.svelte'
  import SlideBox from './lib/SlideBox.svelte'

  // 9*7
  const boxes = [...Array(63)].map((_, i) => i)
</script>

<Container>
  <div id="grid">
    <div id="message-1" class="message">
      <p>Thanks for all participators !</p>
    </div>
    <div id="message-2" class="message">
      <p>See you again on next PGRF !</p>
    </div>
    <img id="ome" src="/assets/pgrf4-layout/materials/ome.png" alt="OME" />
    <img
      id="pgrf4"
      src="/assets/pgrf4-layout/materials/pgrf4.png"
      alt="PGRF4"
    />
    {#each boxes as box}
      {#if Math.random() > 0.8}
        <SlideBox />
      {:else}
        <Box />
      {/if}
    {/each}
  </div>
</Container>

<style lang="scss">
  $columnSize: 9;
  $boxSize: 220px;
  $boxMargin: 10px;

  #grid {
    display: grid;
    position: relative;
    top: -200px;
    left: -200px;
    width: calc($boxSize * $columnSize);
    height: calc($boxSize * $columnSize);
    grid-template-rows: repeat($columnSize, $boxSize);
    grid-template-columns: repeat($columnSize, $boxSize);
    align-items: center;
    gap: $boxMargin * 2;
  }

  .message {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: 'Staatliches', sans-serif;
    color: #505050;
  }

  #message-1 {
    grid-row: 3;
    grid-column: 3 / 7;
    font-size: 4.2em;
  }

  #message-2 {
    grid-row: 4;
    grid-column: 4 / 8;
    font-size: 4.2em;
  }

  img {
    width: $boxSize;
  }

  #ome {
    grid-row: 5;
    grid-column: 7;
  }

  #pgrf4 {
    grid-row: 5;
    grid-column: 8;
  }
</style>
