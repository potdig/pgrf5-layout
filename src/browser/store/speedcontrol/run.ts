import { derived, readable, type Readable } from 'svelte/store'
import type { SpeedControlNodeCG } from '~/browser/speedcontrol'
import type { AdditionSocial } from '~/types/additions/speedcontrolUserAdditionArray'
import type { FullSocial } from '~/types/player-with-social'
import type { ActiveRunData } from '~/types/speedcontrol/replicant'
import type { RunData } from '~/types/speedcontrol/run-data'
import { additions } from '../additions'

const speedcontrol = window.nodecg as SpeedControlNodeCG

const runDataArray: Readable<RunData[]> = readable<RunData[]>([], set => {
  speedcontrol
    .Replicant('runDataArray', 'nodecg-speedcontrol')
    .on('change', value => {
      set(value)
    })
})

const currentRun: Readable<ActiveRunData> = readable<ActiveRunData>(
  undefined,
  set => {
    speedcontrol
      .Replicant('runDataActiveRun', 'nodecg-speedcontrol')
      .on('change', value => {
        set(value)
      })
  }
)

const nextRun: Readable<ActiveRunData> = derived(
  [runDataArray, currentRun],
  ([$runDataArray, $currentRun]) => {
    if (!$currentRun) {
      return undefined
    }
    const runIndex = $runDataArray.findIndex(
      runData => runData.id === $currentRun.id
    )
    return $runDataArray[runIndex + 1]
  }
)

const runsOnSetup: Readable<RunData[]> = derived(
  [runDataArray, currentRun],
  ([$runDataArray, $currentRun]) => {
    if (!$currentRun) {
      return []
    }
    const runIndex = $runDataArray.findIndex(
      runData => runData.id === $currentRun.id
    )
    return $runDataArray.slice(runIndex, runIndex + 3)
  }
)

const socialOf = (userId: string): Readable<FullSocial> =>
  derived([currentRun, additions], ([$currentRun, $additions]) => {
    const social: AdditionSocial =
      $additions.find(addition => addition.id === userId)?.social ?? {}
    const twitch = $currentRun?.teams
      .flatMap(team => team.players)
      .find(player => player.id === userId)?.social.twitch
    const fullSocial: FullSocial = { ...social }
    if (twitch) {
      fullSocial.twitch = twitch
    }
    return fullSocial
  })

export { currentRun, nextRun, runsOnSetup, socialOf }
