import { derived, readable, type Readable } from 'svelte/store'
import type { AdditionsNodeCG } from '../additions'
import type { Commentator } from '~/types/additions/commentatorArray'

const additions = window.nodecg as AdditionsNodeCG

const commentators: Readable<Commentator[]> = readable<Commentator[]>(
  [],
  set => {
    additions
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

export { commentatorsOf }
