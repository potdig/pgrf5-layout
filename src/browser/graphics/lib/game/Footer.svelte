<script lang="ts">
  import { nextRun } from '~/browser/store/speedcontrol/run'
  $: game = $nextRun?.game
  $: category = $nextRun?.category
  $: displayedRun = category ? `${game} | ${category}` : game
</script>

<footer>
  {#if $nextRun}
    <p id="next-title">
      <span class="label">Next Title: </span>
      {displayedRun}
    </p>
  {/if}
</footer>

<style lang="scss">
  @use '~/browser/graphics/stylesheets/font-size.scss' as font;

  footer {
    margin-inline: var(--marginX, 16px);
    height: 1.6em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgba($color: black, $alpha: 0.7);
    font-size: font.$baseFontSize;
    line-height: 1em;
  }
</style>
