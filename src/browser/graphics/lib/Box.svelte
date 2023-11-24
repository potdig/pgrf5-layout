<script lang="ts">
  let opacity = Math.random() * 0.7 + 0.3
</script>

<div class="box" style="opacity: {opacity};" />

<style lang="scss">
  @use '~/browser/graphics/stylesheets/box';
</style>
