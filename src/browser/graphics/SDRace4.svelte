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

  const width = `${1920 * 0.28}px`
  const height = `${1440 * 0.28}px`

  $: est = $currentRun?.estimate ?? ''
  $: teams = $currentRun?.teams ?? []
  $: time = $timer?.time
  $: timerStatus = $timer?.state
  $: commentators = commentatorsOf($currentRun?.id ?? '')
</script>

<Container>
  <Background></Background>
  <Header dense={true} --marginX="64px"></Header>
  <main>
    <div id="others">
      <div id="info">
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
    </div>
    <div id="runners">
      {#each teams as team, index}
        <div class="runner">
          <Video {width} {height}></Video>
          <InfoBox label={rome(index + 1)} oneLine={true}>
            <TextValue value={team?.players[0].name} oneLine={true}></TextValue>
            <Account userId={team?.players[0].id}></Account>
          </InfoBox>
          <Split id={team?.id}></Split>
        </div>
      {/each}
    </div>
  </main>
  <Footer --marginX="64px"></Footer>
</Container>

<style lang="scss">
  $marginX: 64px;

  main {
    flex-grow: 1;
    margin: 0 $marginX;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 32px;
  }

  #runners {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    justify-content: center;
    row-gap: 8px;
    column-gap: 16px;
  }

  .runner {
    display: flex;
    flex-direction: column;
  }

  #others {
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 400px;
  }

  #info {
    width: 100%;
    margin-top: auto;
  }

  #commentators {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #times {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }
</style>
