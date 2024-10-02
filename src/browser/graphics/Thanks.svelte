<script lang="ts">
  import Container from './lib/Container.svelte'
  import Background from './lib/setup/Background.svelte'
</script>

<Container>
  <Background />
  <div></div>
  <div id="messages">
    <p class="message">Thanks for all participators !</p>
    <p class="message">See you again on next PGRF !</p>
  </div>
  <div id="logos">
    <img id="ome" src="/assets/pgrf5-layout/materials/ome.png" alt="OME" />
    <img
      id="pgrf5"
      src="/assets/pgrf5-layout/materials/pgrf5.png"
      alt="pgrf5"
    />
  </div>
</Container>

<style lang="scss">
  .message {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: 'Staatliches', sans-serif;
    font-size: 4.8em;
    color: #505050;
  }

  #logos {
    align-self: flex-end;
    margin-bottom: 16px;
    margin-right: 16px;

    img {
      height: 160px;
    }
  }
</style>
