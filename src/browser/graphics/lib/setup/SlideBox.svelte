<script lang="ts">
  let box1 = 0
  let box2 = 1
  let box3 = 2

  setTimeout(
    () =>
      setInterval(() => {
        box1 = (box1 + 1) % 4
      }, 3000),
    3000
  )
  setTimeout(
    () =>
      setInterval(() => {
        box2 = (box2 + 1) % 4
      }, 3000),
    2000
  )
  setTimeout(
    () =>
      setInterval(() => {
        box3 = (box3 + 1) % 4
      }, 3000),
    1000
  )
</script>

<div class="case">
  <div class="start-area">
    <div class="box b{box1 + 1}" />
    <div class="box b{box2 + 1}" />
    <div class="box b{box3 + 1}" />
  </div>
</div>

<style lang="scss">
  @use '~/browser/graphics/stylesheets/box';

  $slideTime: 1s;
  $interval: 2s;
  $gap: 20px;

  .box {
    position: absolute;
    border-radius: 12px;
    transition: all 1s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .case {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: $gap;
    grid-row: var(--row, 1);
    grid-column: var(--col, 1);
  }

  .start-area {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .b1 {
    left: 0;
    top: 0;
  }

  .b2 {
    left: calc(100% + $gap);
    top: 0;
  }

  .b3 {
    left: calc(100% + $gap);
    top: calc(100% + $gap);
  }

  .b4 {
    left: 0;
    top: calc(100% + $gap);
  }
</style>
