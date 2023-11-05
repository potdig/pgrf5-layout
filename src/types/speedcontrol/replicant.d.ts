import type { RunData } from './run-data'
import type { Timer } from './timer'

export type ReplicantMap = {
  runDataArray: RunData[]
  runDataActiveRun: RunData[]
  timer: Timer
}
