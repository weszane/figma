import type { FeatureFlags } from '../../types/global'
import { getFeatureFlags } from '../905/601108'

export function $$r0(): FeatureFlags {
  let e = getFeatureFlags()
  return e.ce_il_lina ? {} as FeatureFlags : e
}
export const m = $$r0
