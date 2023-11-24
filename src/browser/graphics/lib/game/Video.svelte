<script lang="ts">
  export let width: string
  export let height: string
</script>

<div class="video" style="width: {width}; height: {height}" />

<style lang="scss">
  div {
    background-color: rgba($color: black, $alpha: 0.2);
  }
</style>
