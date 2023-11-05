import type { BundleNodeCG } from './nodecg'
import type { SpeedControlNodeCG } from './speedcontrol'

declare global {
  interface Window {
    nodecg: BundleNodeCG & SpeedControlNodeCG
  }
}
