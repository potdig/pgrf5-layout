<script lang="ts">
  import type { TeamResult, TimerState } from '~/types/speedcontrol/timer'

  export let value: string
  export let status: TimerState | TeamResult | '' = ''

  let statusClass: '' | 'suspend' | 'complete'
  $: {
    switch (status) {
      case 'stopped':
        statusClass = 'suspend'
        break
      case 'running':
        statusClass = ''
        break
      case 'paused':
        statusClass = 'suspend'
        break
      case 'finished':
        statusClass = 'complete'
        break
      case 'forfeit':
        statusClass = 'suspend'
        break
      case 'completed':
        statusClass = 'complete'
        break
      default:
        statusClass = ''
    }
  }
</script>

<span class="value time {statusClass}">{value}</span>

<style lang="scss" scoped>
  .time {
    margin-top: auto;
    font-size: 2em;
    line-height: 1em;
    text-align: right;
    font-family: 'Nova Mono', sans-serif;
    font-weight: bold;

    &.suspend {
      color: rgba(0, 0, 0, 50%);
    }

    &.complete {
      color: rgb(0, 65, 255);
      animation: blink 1s 3 linear;
    }
  }

  @keyframes blink {
    0%,
    49.999%,
    100% {
      opacity: 1;
    }

    50%,
    99.999% {
      opacity: 0;
    }
  }
</style>
