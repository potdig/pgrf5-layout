<script lang="ts">
  import { slide } from 'svelte/transition'

  export let size = 10
  export let stop = false

  const brickHeight = 70
  $: stackHeight = brickHeight * (size + 1)
  $: gradientRate = (1 / (size + 1)) * 100

  let bricks = [...Array(size)].map((_, i) => i)

  const interval = Math.floor(Math.random() * 3000) + 1000

  if (!stop) {
    setInterval(() => {
      bricks = [Math.max(...bricks) + 1, ...bricks]
      setTimeout(() => {
        bricks = [...bricks.slice(0, size + 1)]
      }, 500)
    }, interval)
  }
</script>

<div class="stack">
  {#each bricks as brick, index (brick)}
    <div
      class="brick"
      style="opacity: {(size + 1 - index) / (size + 1)};"
      in:slide={{ duration: 500 }}
    ></div>
  {/each}
</div>

<style lang="scss">
  .stack {
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    bottom: 0;
    height: fit-content;
  }

  .brick {
    background-color: darkgray;
    width: 180px;
    height: 60px;
    border-radius: 12px;
    margin-top: 10px;
    transition: opacity 0.5s;
  }
</style>
