<script lang="ts">
  import { beforeUpdate, tick } from 'svelte'

  export let maxWidth: number

  let text: HTMLElement

  beforeUpdate(async () => {
    await tick()

    scale(text, maxWidth)
  })

  function scale(e: HTMLElement, maxWidth: number) {
    if (!e) {
      return
    }

    const currentScale = parseFloat(e.style.fontSize.replace('em', ''))
    const titleWidth = e.getBoundingClientRect().width
    if (titleWidth / currentScale > maxWidth) {
      return
    }

    const scale = maxWidth / titleWidth
    e.style.fontSize = scale > 1 ? '' : `${scale}em`
  }
</script>

<span bind:this={text}>
  <slot />
</span>
