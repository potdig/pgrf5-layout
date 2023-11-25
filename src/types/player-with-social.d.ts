import type { AdditionSocial } from './additions/speedcontrolUserAdditionArray'
import type { RunDataPlayer } from './speedcontrol/run-data'

type PlayerWithSocial = RunDataPlayer & {
  social: AdditionSocial
}

type FullSocial = {
  [s in SocialName]?: string
}

type SocialName = 'twitch' | 'nico' | 'youtube' | 'twitter'

export { FullSocial, PlayerWithSocial, SocialName }
