import { derived, readable, type Readable } from 'svelte/store'
import type { RunData } from '~/types/speedcontrol/run-data'
import type { SpeedControlNodeCG } from '~/browser/speedcontrol'
import type { ActiveRunData } from '~/types/speedcontrol/replicant'
import type { PlayerWithSocial } from '~/types/player-with-social'
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

const currentRunners: Readable<PlayerWithSocial[]> = derived(
  [currentRun, additions],
  ([$currentRun, $additions]) =>
    $currentRun?.teams
      .flatMap(team => team.players)
      .map(player => {
        const addition = $additions.find(addition => addition.id === player.id)
        return {
          ...player,
          social: {
            ...player.social,
            ...addition?.social,
          },
        }
      }) ?? []
)

export { currentRun, currentRunners, nextRun, runsOnSetup }
