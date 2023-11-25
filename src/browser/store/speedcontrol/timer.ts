import { derived, readable, type Readable } from 'svelte/store'
import type { SpeedControlNodeCG } from '~/browser/speedcontrol'
import type { Timer } from '~/types/speedcontrol/timer'

const speedcontrol = window.nodecg as SpeedControlNodeCG

const timer: Readable<Timer> = readable<Timer>(undefined, set => {
  speedcontrol.Replicant('timer', 'nodecg-speedcontrol').on('change', value => {
    set(value)
  })
})

const splitOf = (teamId: string) =>
  derived(timer, $timer => $timer?.teamFinishTimes[teamId]?.time)

export { timer, splitOf }
