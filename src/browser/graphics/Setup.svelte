<script lang="ts">
  import type { RunData } from '~/types/speedcontrol/run-data'
  import { commentatorsOf } from '../store/additions'
  import { runsOnSetup } from '../store/speedcontrol/run'
  import Container from './lib/Container.svelte'
  import Background from './lib/setup/Background.svelte'
  import Clock from './lib/setup/Clock.svelte'
  import TextFitSnugly from './lib/setup/TextFitSnugly.svelte'

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
  <Background />
  <header>
    <div id="title">
      <img id="ome" src="/assets/pgrf5-layout/materials/ome.png" alt="OME" />
      <p id="presents">presents</p>
      <img
        id="pgrf5"
        src="/assets/pgrf5-layout/materials/pgrf5.png"
        alt="pgrf5"
      />
    </div>
    <Clock />
  </header>
  <main>
    <div id="up-next-label">
      <p>Up next</p>
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
    <div id="coming-soon-label">
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
    {/if}
  </main>
</Container>

<style lang="scss">
  $columnSize: 9;
  $boxSize: 220px;
  $boxMargin: 10px;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    #title {
      display: flex;
      align-items: center;
    }
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
  }

  #coming-soon-label {
    font-size: 3.6em;
  }

  img {
    width: $boxSize;
  }

  #presents {
    text-align: center;
    font-family: 'Staatliches';
    font-size: 3.3em;
  }

  .row {
    display: flex;
    gap: 1.2em;
  }

  .title {
    white-space: nowrap;
  }

  #up-next {
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
