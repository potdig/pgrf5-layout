<script lang="ts">
  import { fly, type FlyParams } from 'svelte/transition'
  import { sineInOut } from 'svelte/easing'
  import type { FullSocial, SocialName } from '~/types/player-with-social'
  import { socialOf } from '~/browser/store/speedcontrol/run'

  export let userId: string = ''
  export let account: FullSocial | undefined = undefined

  $: accountFromUserId = userId ? socialOf(userId) : undefined
  $: accountFromProp = account
  $: acc = accountFromProp ? accountFromProp : $accountFromUserId
  $: socialNames = acc ? (Object.keys(acc) as SocialName[]) : []

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
      if (socialNames.length > 0) {
        currentIndex = ++currentIndex % socialNames.length
      }
    }, 10000)
  }
</script>

{#if acc}
  <div class="account">
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
          <p>{acc[social]}</p>
        </div>
      {/if}
    {/each}
  </div>
{/if}

<style lang="scss">
  $accountHeight: 1.3em;

  .account {
    display: flex;
    justify-content: flex-end;
    font-size: 0.8em;
    height: $accountHeight;
    line-height: $accountHeight;
    font-weight: bold;
    position: relative;
    overflow: hidden;
  }

  .account-content {
    position: absolute;
    display: flex;
    align-items: center;

    img {
      margin-right: 0.5em;
      position: relative;
      width: calc(18pt * 0.9);
    }
  }
</style>
