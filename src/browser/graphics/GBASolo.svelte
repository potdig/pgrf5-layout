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

  // 3:2
  const width = `${240 * 5.6}px`
  const height = `${160 * 5.6}px`

  $: est = $currentRun?.estimate ?? ''
  $: time = $timer?.time
  $: timerStatus = $timer?.state
  $: runners = $currentRun?.teams[0]?.players
  $: commentators = commentatorsOf($currentRun?.id ?? '')
</script>

<Container>
  <Background --marginX="64px"></Background>
  <Header></Header>
  <main>
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
  <Footer --marginX="64px"></Footer>
</Container>

<style lang="scss">
  $marginX: 64px;

  main {
    margin: 0 $marginX;
    display: flex;
    justify-content: space-evenly;
  }

  #sidebar {
    width: 420px;
    display: flex;
    flex-direction: column;
  }

  #infos {
    margin-top: auto;
  }
</style>
