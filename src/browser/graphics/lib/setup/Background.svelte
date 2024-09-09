<script>
  import Stack from '../Stack.svelte'

  const stackSizes = [...Array(12)].map(() => Math.ceil(Math.random() * 10) + 5)
</script>

<div id="bg">
  <div>
    {#each stackSizes as size}
      <Stack {size} />
    {/each}
  </div>
</div>

<style lang="scss">
  #bg {
    position: absolute;
    width: 100vw;
    height: 100vh;
    perspective: 1000px;
    z-index: -1;

    & > div {
      position: relative;
      width: 100%;
      height: 100%;
      bottom: -80px;
      left: -80px;
      display: flex;
      align-items: end;
      gap: 10px;
      transform: rotate3d(1, 0, 0, 30deg);
    }
  }
</style>
