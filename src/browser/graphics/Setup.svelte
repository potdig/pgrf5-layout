<script lang="ts">
  import { runDataArray } from '../store/speedcontrol'
  import Container from './lib/Container.svelte'

  // 9*7
  const boxes = [...Array(63)].map((_, i) => i)

  let titleUpNext: HTMLElement
  let titleComingSoon1: HTMLElement
  let titleComingSoon2: HTMLElement

  $: runNames = $runDataArray.map(runDatum => runDatum.game)
  $: scale(titleUpNext, 1100)
  $: scale(titleComingSoon1, 900)
  $: scale(titleComingSoon2, 900)

  function scale(e: HTMLElement, maxWidth: number) {
    if (!e) {
      return
    }

    const titleWidth = e.getBoundingClientRect().width
    if (titleWidth > maxWidth) {
      e.style.transform = `scale(${maxWidth / titleWidth})`
    } else {
      e.style.transform = ''
    }
  }
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
      <div class="box" />
    {/each}
    <div id="up-next-label" class="box">
      <p>Up</p>
      <p>next</p>
    </div>
    <div id="up-next">
      <p class="title">
        <span bind:this={titleUpNext}>
          Untitled Goose Game 〜いたずらガチョウがやって来た！〜
        </span>
      </p>
      <p class="category">Clear 40 Green</p>
      <div class="row">
        <p class="runner"><span class="label">Runner: </span>seri</p>
        <p class="commentator">
          <span class="label">Commentator: </span>hebo-MAI
        </p>
      </div>
      <!-- {#each runNames as runName}
        <li>{runName}</li>
      {/each} -->
    </div>
    <div id="coming-soon-label" class="box">
      <p>Coming</p>
      <p>soon</p>
    </div>
    <div id="coming-soon">
      <p class="title">
        <span bind:this={titleComingSoon1}
          >Untitled Goose Game 〜いたずらガチョウがやって来た！〜</span
        >
      </p>
      <p class="category">パズルボブル vs インベーダー</p>
      <div class="divider" />
      <p class="title">
        <span bind:this={titleComingSoon2}>
          Untitled Goose Game 〜いたずらガチョウがやって来た！〜
        </span>
      </p>
      <p class="category">All Stages</p>
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
  }

  .box {
    width: $boxSize - $boxMargin * 2;
    height: $boxSize - $boxMargin * 2;
    margin: $boxMargin;
    background-color: gray;
    border-radius: 24px;
  }

  #up-next-label,
  #coming-soon-label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #555555;
    font-family: 'Staatliches';
    line-height: 1em;
  }

  #up-next-label {
    font-size: 4.8em;
    grid-row: 3;
    grid-column: 2;
  }

  #coming-soon-label {
    font-size: 3.6em;
    grid-row: 4;
    grid-column: 3;
  }

  img {
    width: $boxSize;
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

  .row {
    display: flex;
    gap: 1.2em;
  }

  .title {
    white-space: nowrap;

    span {
      transform-origin: left;
      display: inline-block;
    }
  }

  #up-next {
    grid-row: 3;
    grid-column: 3 / 8;
    margin-inline: 50px;
    font-size: 1.8em;

    .title {
      font-size: 2em;
      font-weight: bold;
      line-height: 1.2em;
    }

    .label {
      font-family: 'Staatliches';
    }
  }

  #coming-soon {
    grid-row: 4;
    grid-column: 4 / 8;
    margin-inline: 30px;
    font-size: 1.4em;

    .title {
      font-size: 1.6em;
      font-weight: bold;
      line-height: 1.2em;
    }
  }

  .divider {
    width: 100%;
    margin-block: 8px;
    border-bottom: 1px solid gray;
  }
</style>
