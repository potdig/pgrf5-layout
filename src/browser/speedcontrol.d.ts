import type { CreateNodecgInstance } from 'ts-nodecg/browser'
import type { ReplicantMap } from '../types/speedcontrol/replicant'

export type SpeedControlNodeCG = CreateNodecgInstance<
  'nodecg-speedcontrol',
  {},
  ReplicantMap,
  {},
  true
>
