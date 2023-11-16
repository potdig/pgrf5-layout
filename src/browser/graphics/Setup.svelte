<script lang="ts">
  import { runDataArray } from '../store/speedcontrol'
  import Container from './lib/Container.svelte'
  $: runNames = $runDataArray.map(runDatum => runDatum.game)

  // 9*7
  const boxes = [...Array(63)].map((_, i) => i)
</script>

<Container>
  <div id="grid">
    <img id="ome" src="/assets/pgrf4-layout/materials/ome.png" alt="OME" />
    <p id="presents">presents</p>
    <img
      id="pgrf4"
      src="/assets/pgrf4-layout/materials/pgrf4.png"
      alt="PGRF4"
    />
    {#each boxes as box}
      <div class="square" />
    {/each}
    <div id="up-next">
      <p id="title">Sandtrix</p>
      <p id="category">Clear 40 Green</p>
      <div id="people">
        <p id="runner"><span class="label">Runner: </span>seri</p>
        <p id="commentator"><span class="label">Commentator: </span>hebo-MAI</p>
      </div>
      <!-- {#each runNames as runName}
        <li>{runName}</li>
      {/each} -->
    </div>
  </div>
</Container>

<style lang="scss">
  $boxSize: 240px;
  $boxMargin: 10px;
  $columnSize: 9;

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

    // 5 boxes
    #up-next {
      grid-row: 3;
      grid-column: 3 / 8;
    }
  }

  #ome {
    grid-row: 2;
    grid-column: 2;
  }

  #presents {
    grid-row: 2;
    grid-column: 3;
    text-align: center;
    font-family: 'Staatliches';
    font-size: 3.3em;
  }

  #pgrf4 {
    grid-row: 2;
    grid-column: 4;
  }

  #up-next {
    margin-inline: 2em;
    font-size: 1.8em;

    #title {
      font-size: 2em;
      font-weight: bold;
      line-height: 1.2em;
    }

    #people {
      display: flex;
      gap: 1.2em;

      .label {
        font-family: 'Staatliches';
      }
    }
  }

  img {
    width: $boxSize;
  }

  .square {
    width: $boxSize - $boxMargin * 2;
    height: $boxSize - $boxMargin * 2;
    margin: $boxMargin;
    background-color: gray;
    border-radius: 24px;
  }
</style>
