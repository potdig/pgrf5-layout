<script lang="ts">
  import { onMount } from 'svelte'
  import { currentRun } from '~/browser/store/speedcontrol/run'
  import TextFitSnugly from '../setup/TextFitSnugly.svelte'

  export let dense: boolean = false

  let title: HTMLElement
  let maxWidth: number

  onMount(() => {
    maxWidth = title.getBoundingClientRect().width
  })
</script>

<header class:dense>
  <img
    id="logo"
    class:dense
    src="/assets/pgrf5-layout/materials/pgrf5.png"
    alt="pgrf5"
  />
  <div id="title" class:dense bind:this={title}>
    <p id="game-title" class:dense>
      <TextFitSnugly {maxWidth}>
        {$currentRun?.game}
      </TextFitSnugly>
    </p>
    <p id="category-platform">
      {$currentRun?.category} - {$currentRun?.system}
    </p>
  </div>
</header>

<style lang="scss">
  @use '~/browser/graphics/stylesheets/font-size.scss' as font;

  header {
    margin-inline: var(--marginX, 16px);
    padding: 8px 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100px;
    font-size: font.$baseFontSize;

    &.dense {
      height: 60px;
    }
  }

  #logo {
    height: 100%;
    margin-right: calc(1080px * 0.02);
  }

  #title {
    flex-grow: 1;

    &.dense {
      display: flex;
      align-items: center;
    }

    p {
      margin-top: -0.2em;
      margin-bottom: 0;
      line-height: 1.2em;
      white-space: nowrap;
    }
  }

  #game-title {
    font-size: 1.9em;
    font-weight: bolder;
    transform-origin: left;

    &.dense {
      font-size: 1.6em;
      margin-right: 1em;
    }
  }

  #category-platform {
    font-size: 1.2em;
  }
</style>
