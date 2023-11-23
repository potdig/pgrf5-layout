import type { CreateNodecgInstance } from 'ts-nodecg/browser'
import type { ReplicantMap } from '~/types/additions/replicant'

export type AdditionsNodeCG = CreateNodecgInstance<
  'speedcontrol-additions',
  {},
  ReplicantMap,
  {},
  true
>
