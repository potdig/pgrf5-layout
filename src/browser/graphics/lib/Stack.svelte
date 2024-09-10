<script lang="ts">
  import { slide } from 'svelte/transition'

  export let size = 10
  export let stop = false

  const brickHeight = 70
  $: stackHeight = brickHeight * (size + 1)
  $: gradientRate = (1 / (size + 1)) * 100

  console.log(size)
  let bricks = [...Array(size)].map((_, i) => i)

  const interval = Math.floor(Math.random() * 3000) + 1000

  if (!stop) {
    setInterval(() => {
      bricks = [...bricks, Math.max(...bricks) + 1]
      setTimeout(() => {
        bricks = [...bricks.slice(1)]
      }, 500)
    }, interval)
  }
</script>

<div class="stack">
  <div
    class="filter"
    style="height: {stackHeight}px; background: linear-gradient(white {gradientRate}%, rgba(0, 0, 0, 0))"
  ></div>
  {#each bricks as brick}
    <div class="brick" in:slide={{ duration: 500 }}></div>
  {/each}
</div>

<style lang="scss">
  .stack {
    position: relative;
    bottom: 0;
    height: fit-content;
  }

  .filter {
    position: absolute;
    bottom: 0;
    left: -2%;
    width: 104%;
    z-index: 1;
  }

  .brick {
    background-color: gray;
    width: 180px;
    height: 60px;
    border-radius: 12px;
    margin-top: 10px;
  }
</style>
