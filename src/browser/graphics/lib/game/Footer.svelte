<script lang="ts">
  import { nextRun } from '~/browser/store/speedcontrol/run'
</script>

<div>
  {#if $nextRun}
    <p id="next-title">
      <span class="label">Next Title: </span>
      {$nextRun?.game} | {$nextRun?.category}
    </p>
  {/if}
</div>

<style lang="scss">
  @use '~/browser/graphics/stylesheets/font-size.scss' as font;

  div {
    color: rgba($color: black, $alpha: 0.7);
    font-size: font.$baseFontSize;
  }
</style>
