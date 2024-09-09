import type { CreateNodecgInstance } from 'ts-nodecg/server'
import type { BundleConfig } from '~/types/bundle-config'
import type { MessageMap } from '~/types/message'
import type { ReplicantMap } from '~/types/replicant'

export type NodeCG = CreateNodecgInstance<
  'pgrf5-layout',
  BundleConfig,
  ReplicantMap,
  MessageMap
>
