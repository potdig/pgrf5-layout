<script lang="ts">
  import type { RunData } from '~/types/speedcontrol/run-data'
  import { runsOnSetup } from '../store/speedcontrol'
  import Container from './lib/Container.svelte'
  import SlideBox from './lib/setup/SlideBox.svelte'
  import { beforeUpdate, onMount, tick } from 'svelte'

  // 9*7
  const boxes = [...Array(63)].map((_, i) => i)

  let titleUpNext: HTMLElement
  let titleComingSoon1: HTMLElement
  let titleComingSoon2: HTMLElement

  let divUpNext: HTMLElement
  let divComingSoon: HTMLElement

  $: runUpNext = $runsOnSetup[0]
  $: runComingSoon1 = $runsOnSetup[1]
  $: runComingSoon2 = $runsOnSetup[2]

  const runnersOf = (run: RunData) =>
    run?.teams.flatMap(team => team.players.map(player => player.name))

  beforeUpdate(async () => {
    await tick()

    const maxWidthUpNext = divUpNext.getBoundingClientRect().width
    const maxWidthComingSoon = divComingSoon.getBoundingClientRect().width

    scale(titleUpNext, maxWidthUpNext)
    scale(titleComingSoon1, maxWidthComingSoon)
    scale(titleComingSoon2, maxWidthComingSoon)
  })

  function scale(e: HTMLElement, maxWidth: number) {
    if (!e) {
      return
    }

    const currentScale = parseFloat(e.style.fontSize.replace('em', ''))
    const titleWidth = e.getBoundingClientRect().width
    if (titleWidth / currentScale > maxWidth) {
      return
    }

    const scale = maxWidth / titleWidth
    e.style.fontSize = scale > 1 ? '' : `${scale}em`
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
    <div id="up-next-label" class="box">
      <p>Up</p>
      <p>next</p>
    </div>
    <div id="up-next" bind:this={divUpNext}>
      <p class="title">
        <span bind:this={titleUpNext}>
          {runUpNext?.game}
        </span>
      </p>
      {#if runUpNext?.category}
        <p class="category">{runUpNext?.category}</p>
        <div class="row">
          <p class="runner">
            <span class="label">Runner: </span>
            {runnersOf(runUpNext)?.join(' / ')}
          </p>
          <p class="commentator">
            <span class="label">Commentator: </span>hebo-MAI
          </p>
        </div>
      {/if}
    </div>
    <div id="coming-soon-label" class="box">
      <p>Coming</p>
      <p>soon</p>
    </div>
    <div id="coming-soon" bind:this={divComingSoon}>
      <div>
        <p class="title">
          <span bind:this={titleComingSoon1}>{runComingSoon1?.game}</span>
        </p>
        {#if runComingSoon1?.category}
          <p class="category">{runComingSoon1?.category}</p>
        {/if}
      </div>
      <div class="divider" />
      {#if runComingSoon2}
        <div>
          <p class="title">
            <span bind:this={titleComingSoon2}>
              {runComingSoon2?.game}
            </span>
          </p>
          {#if runComingSoon2?.category}
            <p class="category">{runComingSoon2?.category}</p>
          {/if}
        </div>
      {/if}
    </div>
    <SlideBox --row="5" --col="8" />
    {#each boxes as box}
      <div class="box" />
    {/each}
  </div>
</Container>

<style lang="scss">
  @use './stylesheets/box';

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
    display: grid;
    grid-template-rows: 1fr max-content 1fr;

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
