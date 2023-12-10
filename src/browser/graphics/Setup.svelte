<script lang="ts">
  import type { RunData } from '~/types/speedcontrol/run-data'
  import { commentatorsOf } from '../store/additions'
  import { runsOnSetup } from '../store/speedcontrol/run'
  import Box from './lib/Box.svelte'
  import Container from './lib/Container.svelte'
  import SlideBox from './lib/SlideBox.svelte'
  import Clock from './lib/setup/Clock.svelte'
  import TextFitSnugly from './lib/setup/TextFitSnugly.svelte'

  // 9*7
  const boxes = [...Array(63)].map((_, i) => i)

  let divUpNext: HTMLElement
  let divComingSoon: HTMLElement

  $: runUpNext = $runsOnSetup[0]
  $: runComingSoon1 = $runsOnSetup[1]
  $: runComingSoon2 = $runsOnSetup[2]

  $: commentatorsUpNext = commentatorsOf(runUpNext?.externalID ?? '')
  $: commentatorNamesUpNext = $commentatorsUpNext
    .map(commentator => commentator.name)
    .join(' / ')

  const runnersOf = (run: RunData) =>
    run?.teams.flatMap(team => team.players.map(player => player.name))

  let maxWidthUpNext: number
  let maxWidthComingSoon: number

  $: {
    maxWidthUpNext = divUpNext?.getBoundingClientRect().width
    maxWidthComingSoon = divComingSoon?.getBoundingClientRect().width
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
        <TextFitSnugly maxWidth={maxWidthUpNext}>
          {runUpNext?.game}
        </TextFitSnugly>
      </p>
      {#if runUpNext?.category}
        <p class="category">{runUpNext?.category}</p>
        <div class="row">
          <p class="runner">
            <span class="label">Runner: </span>
            {runnersOf(runUpNext)?.join(' / ')}
          </p>
          {#if commentatorNamesUpNext.length > 0}
            <p class="commentator">
              <span class="label">Commentator: </span>{commentatorNamesUpNext}
            </p>
          {/if}
        </div>
      {/if}
    </div>
    <div id="coming-soon-label" class="box">
      {#if runComingSoon1}
        <p>Coming</p>
        <p>soon</p>
      {/if}
    </div>
    {#if runComingSoon1}
      <div id="coming-soon" bind:this={divComingSoon}>
        <div>
          <p class="title">
            <TextFitSnugly maxWidth={maxWidthComingSoon}>
              {runComingSoon1?.game}
            </TextFitSnugly>
          </p>
          {#if runComingSoon1?.category}
            <p class="category">{runComingSoon1?.category}</p>
          {/if}
        </div>
        <div class="divider" />
        {#if runComingSoon2}
          <div>
            <p class="title">
              <TextFitSnugly maxWidth={maxWidthComingSoon}>
                {runComingSoon2?.game}
              </TextFitSnugly>
            </p>
            {#if runComingSoon2?.category}
              <p class="category">{runComingSoon2?.category}</p>
            {/if}
          </div>
        {/if}
      </div>
    {:else}
      <Box />
      <Box />
      <Box />
      <Box />
    {/if}
    <div id="clock" class="box">
      <Clock />
    </div>
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

  #clock {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row: 2;
    grid-column: 9;
    color: white;
    font-family: 'Nova Mono', sans-serif;
    font-size: 3.6em;
  }

  .row {
    display: flex;
    gap: 1.2em;
  }

  .title {
    white-space: nowrap;
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
