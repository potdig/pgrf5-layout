<script lang="ts">
  export let row: number | undefined = undefined
  export let col: number | undefined = undefined

  const rotationCount = Math.floor(Math.random() * 4)
  $: gridRowCol = row && col ? `grid-row: ${row}; grid-column: ${col}` : ''

  $: rotation = `rotate(${90 * rotationCount}deg)`
  $: scaleX = `scaleX(${Math.random() > 0.5 ? 1 : -1})`
  $: transform = `transform: ${rotation} ${scaleX}`

  $: caseStyle = [gridRowCol, transform].join('; ')

  let box1 = 0
  let box2 = 1
  let box3 = 2

  const animationDuration = 1000 + Math.floor(Math.random() * 1000)

  window.setTimeout(
    () =>
      window.setInterval(() => {
        box1 = (box1 + 1) % 4
      }, animationDuration * 3),
    animationDuration * 3
  )
  window.setTimeout(
    () =>
      window.setInterval(() => {
        box2 = (box2 + 1) % 4
      }, animationDuration * 3),
    animationDuration * 2
  )
  window.setTimeout(
    () =>
      window.setInterval(() => {
        box3 = (box3 + 1) % 4
      }, animationDuration * 3),
    animationDuration
  )
</script>

<div class="case" style={caseStyle}>
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
