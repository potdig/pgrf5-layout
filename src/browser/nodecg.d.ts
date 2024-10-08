import { CreateNodecgInstance } from 'ts-nodecg/browser'
import type { BundleConfig } from '~/types/bundle-config'
import type { MessageMap } from '~/types/message'
import type { ReplicantMap } from '~/types/replicant'

export type BundleNodeCG = CreateNodecgInstance<
  'pgrf5-layout',
  BundleConfig,
  ReplicantMap,
  MessageMap
>
