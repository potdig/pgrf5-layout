<script lang="ts">
  import { fly, type FlyParams } from 'svelte/transition'
  import { sineInOut } from 'svelte/easing'
  import type { FullSocial, SocialName } from '~/types/player-with-social'

  export let oneLine: boolean = false
  export let value: string = ''
  export let account: FullSocial | undefined = undefined

  $: socialNames = account ? (Object.keys(account) as SocialName[]) : []

  let currentIndex = 0
  $: currentSocial = socialNames[currentIndex]

  const flyOption: FlyParams = {
    duration: 500,
    easing: sineInOut,
  }

  let timerId: number
  $: {
    if (timerId) {
      window.clearInterval(timerId)
    }
    timerId = window.setInterval(() => {
      console.log(socialNames)
      if (socialNames.length > 0) {
        currentIndex = ++currentIndex % socialNames.length
      }
    }, 10000)
  }
</script>

<div>
  <div class={oneLine ? 'one-line' : ''}>
    <p class="value">{value}</p>
    {#if account}
      <div class="account {oneLine ? 'one-line' : ''}">
        {#each socialNames as social}
          {#if currentSocial === social}
            <div
              class="account-content"
              in:fly={{ y: '-100%', ...flyOption }}
              out:fly={{ y: '100%', ...flyOption }}
            >
              <img
                src="/assets/pgrf4-layout/materials/{social}.svg"
                alt="logo for {social}"
              />
              <p>{account[social]}</p>
            </div>
          {/if}
        {/each}
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  $accountHeight: 1.3em;
  $sinWave: cubic-bezier(0.37, 0, 0.63, 1);

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

  .account {
    font-size: 0.8em;
    height: $accountHeight;
    line-height: $accountHeight;
    font-weight: bold;
    position: relative;
    overflow: hidden;

    &.one-line {
      width: 100%;
    }
  }

  .account-content {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    img {
      margin-right: 0.5em;
      position: relative;
      width: calc(18pt * 0.9);
    }
  }
</style>
