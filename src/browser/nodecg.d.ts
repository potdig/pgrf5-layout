import { CreateNodecgInstance } from 'ts-nodecg/browser'
import type { BundleConfig } from '~/types/bundle-config'
import type { MessageMap } from '~/types/message'
import type { ReplicantMap } from '~/types/replicant'

export type NodeCG = CreateNodecgInstance<
  'pgrf4-layout',
  BundleConfig,
  ReplicantMap,
  MessageMap
>
