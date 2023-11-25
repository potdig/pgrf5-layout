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
  import Split from './lib/game/Split.svelte'
  import TextValue from './lib/game/TextValue.svelte'
  import TimeValue from './lib/game/TimeValue.svelte'
  import Video from './lib/game/Video.svelte'
  import { rome } from './lib/game/rome'

  const width = `${1920 * 0.48}px`
  const height = `${1080 * 0.48}px`

  $: est = $currentRun?.estimate ?? ''
  $: teams = $currentRun?.teams ?? []
  $: time = $timer?.time
  $: timerStatus = $timer?.state
  $: commentators = commentatorsOf($currentRun?.externalID ?? '')
</script>

<Container>
  <Background></Background>
  <Header></Header>
  <main>
    <div id="runners">
      <div class="runner">
        <Video {width} {height}></Video>
        <InfoBox dense={true} label={rome(1)}>
          <TextValue value={teams[0]?.players[0].name}></TextValue>
          <Account userId={teams[0]?.players[0].id}></Account>
        </InfoBox>
        <Split id={teams[0]?.id}></Split>
      </div>
      <div class="runner">
        <Video {width} {height}></Video>
        <InfoBox dense={true} label={rome(2)}>
          <TextValue value={teams[1]?.players[0].name}></TextValue>
          <Account userId={teams[1]?.players[0].id}></Account>
        </InfoBox>
        <Split id={teams[1]?.id}></Split>
      </div>
    </div>
    <div id="others">
      <div id="commentators">
        {#each $commentators as commentator}
          <InfoBox label="Commentator">
            <TextValue value={commentator.name}></TextValue>
            <Account account={commentator.social}></Account>
          </InfoBox>
        {/each}
      </div>
      <div id="times">
        <InfoBox label="EST">
          <TimeValue value={est}></TimeValue>
        </InfoBox>
        <InfoBox label="Current Time">
          <TimeValue value={time} status={timerStatus}></TimeValue>
        </InfoBox>
      </div>
    </div>
  </main>
  <Footer></Footer>
</Container>

<style lang="scss">
  main {
    flex-grow: 1;
    margin: 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  #runners {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .runner {
    display: flex;
    flex-direction: column;
  }

  #others {
    flex-grow: 1;
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    gap: 32px;
    align-items: end;
  }

  #commentators {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2%;
  }

  #times {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
</style>
