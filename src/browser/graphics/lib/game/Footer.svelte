<script lang="ts">
  import { nextRun } from '~/browser/store/speedcontrol/run'
</script>

<footer>
  {#if $nextRun}
    <p id="next-title">
      <span class="label">Next Title: </span>
      {$nextRun?.game} | {$nextRun?.category}
    </p>
  {/if}
</footer>

<style lang="scss">
  @use '~/browser/graphics/stylesheets/font-size.scss' as font;

  footer {
    margin: 0 16px;
    height: 1.6em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgba($color: black, $alpha: 0.7);
    font-size: font.$baseFontSize;
    line-height: 1em;
  }
</style>
