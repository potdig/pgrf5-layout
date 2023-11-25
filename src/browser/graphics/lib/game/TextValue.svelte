<script lang="ts">
  export let oneLine: boolean = false
  export let value: string = ''
</script>

<div>
  <div class={oneLine ? 'one-line' : ''}>
    <p class="value">{value}</p>
  </div>
</div>

<style lang="scss">
  div {
    width: 100%;
    text-align: right;

    &.one-line {
      display: grid;
      grid-template-columns: minmax(max-content, max-content) 1fr;
      align-items: center;
    }
  }

  .value {
    font-size: 1.15em;
    line-height: 1.2em;
    font-weight: bold;
    margin-top: auto;
  }
</style>
