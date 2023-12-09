<script lang="ts">
  import { commentatorsOf } from '../store/additions'
  import { currentRun } from '../store/speedcontrol/run'
  import { timer } from '../store/speedcontrol/timer'
  import Container from './lib/Container.svelte'
  import Account from './lib/game/Account.svelte'
  import Background from './lib/game/Background.svelte'
  import Footer from './lib/game/Footer.svelte'
  import Header from './lib/game/Header.svelte'
  import InfoBox from './lib/game/InfoBox.svelte'
  import TextValue from './lib/game/TextValue.svelte'
  import TimeValue from './lib/game/TimeValue.svelte'
  import Video from './lib/game/Video.svelte'

  const width = `${1920 * 0.84}px`
  const height = `${1080 * 0.84}px`

  $: est = $currentRun?.estimate ?? ''
  $: time = $timer?.time
  $: timerStatus = $timer?.state
  $: runners = $currentRun?.teams[0]?.players
  $: commentators = commentatorsOf($currentRun?.externalID ?? '')
</script>

<Container>
  <Background />
  <Header />
  <main style="grid-template-columns: 1fr {width}">
    <div id="sidebar">
      <div id="infos">
        {#if runners}
          {#each runners as runner}
            <InfoBox label="Runner">
              <TextValue value={runner.name}></TextValue>
              <Account userId={runner.id}></Account>
            </InfoBox>
          {/each}
        {/if}
        {#if $commentators}
          {#each $commentators as commentator}
            <InfoBox label="Commentator">
              <TextValue value={commentator.name}></TextValue>
              <Account account={commentator.social}></Account>
            </InfoBox>
          {/each}
        {/if}
        <InfoBox label="EST">
          <TimeValue value={est}></TimeValue>
        </InfoBox>
        <InfoBox label="Current Time">
          <TimeValue value={time} status={timerStatus}></TimeValue>
        </InfoBox>
      </div>
    </div>
    <Video {width} {height}></Video>
  </main>
  <Footer></Footer>
</Container>

<style lang="scss">
  main {
    margin: 0 16px;
    display: grid;
  }

  #sidebar {
    margin-right: 16px;
    display: flex;
    flex-direction: column;
  }

  #infos {
    margin-top: auto;
  }
</style>
