import { derived, readable, type Readable } from 'svelte/store'
import type { RunData } from '~/types/speedcontrol/run-data'
import type { SpeedControlNodeCG } from '../speedcontrol'
import type { ActiveRunData } from '~/types/speedcontrol/replicant'

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
export { currentRun, runsOnSetup }
