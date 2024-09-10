<script>
  export let justifyBetween = true
</script>

<div id="container" class:justify-between={justifyBetween}>
  <slot />
</div>

<style>
  #container {
    width: 1920px;
    height: 1080px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;
  }

  .justify-between {
    justify-content: space-between;
  }
</style>
