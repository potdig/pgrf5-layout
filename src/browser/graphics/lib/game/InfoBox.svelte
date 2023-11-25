<script lang="ts">
  import TextValue from './TextValue.svelte'

  export let label: string
  export let value: string = ''
  export let dense: boolean = false
  export let oneLine: boolean = false
</script>

<div class="info-box {oneLine ? 'one-line' : ''}">
  <span class="label" class:dense>{label}</span>
  <div class="value-area {oneLine ? 'one-line' : ''}">
    <slot>
      <TextValue {value} {oneLine} />
    </slot>
  </div>
</div>

<style lang="scss" scoped>
  @use '~/browser/graphics/stylesheets/common.css';
  @use '~/browser/graphics/stylesheets/font-size.scss' as font;

  .info-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid gray;
    padding-bottom: 2px;
    margin-top: 8px;
    font-size: font.$baseFontSize;

    &.one-line {
      display: flex;
      flex-direction: row;
      gap: 0.5em;
      align-items: center;
    }
  }

  .label {
    font-size: 1.2em;
    line-height: 1em;
    color: rgba(0, 0, 0, 70%);

    &.dense {
      position: absolute;
    }
  }

  .value-area {
    width: 100%;
    text-align: right;

    &.one-line {
      display: flex;
      flex-direction: row;
      gap: 0.5em;
      align-items: center;
    }
  }
</style>
