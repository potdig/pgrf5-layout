import { derived, readable, type Readable } from 'svelte/store'
import type { AdditionsNodeCG } from '../additions'
import type { Commentator } from '~/types/additions/commentatorArray'
import type { SpeedcontrolUserAddition } from '~/types/additions/speedcontrolUserAdditionArray'

const speedcontrolUserAdditions = window.nodecg as AdditionsNodeCG

const commentators: Readable<Commentator[]> = readable<Commentator[]>(
  [],
  set => {
    speedcontrolUserAdditions
      .Replicant('commentatorArray', 'speedcontrol-additions')
      .on('change', value => {
        set(value)
      })
  }
)

const commentatorsOf = (gameId: string) =>
  derived(commentators, $commentators =>
    $commentators.filter(commentator =>
      commentator.assignedRunIdArray.includes(gameId)
    )
  )

const additions: Readable<SpeedcontrolUserAddition[]> = readable([], set => {
  speedcontrolUserAdditions
    .Replicant('speedcontrolUserAdditionArray', 'speedcontrol-additions')
    .on('change', value => {
      set(value)
    })
})

export { commentatorsOf, additions }
