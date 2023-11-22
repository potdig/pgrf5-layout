import type { RunData } from './run-data'
import type { Timer } from './timer'

type ActiveRunData = RunData | undefined

export type ReplicantMap = {
  runDataArray: RunData[]
  runDataActiveRun: ActiveRunData
  timer: Timer
}
