import { readable, type Readable } from 'svelte/store'
import type { RunData } from '~/types/speedcontrol/run-data'
import type { SpeedControlNodeCG } from '../speedcontrol'

const speedcontrol = window.nodecg as SpeedControlNodeCG

const runDataArray: Readable<RunData[]> = readable<RunData[]>([], set => {
  speedcontrol
    .Replicant('runDataArray', 'nodecg-speedcontrol')
    .on('change', value => {
      set(value)
    })
})

export { runDataArray }
