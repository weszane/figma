import { getFeatureFlags } from '../905/601108'
import { getSingletonSceneGraph } from '../905/700578'
import { atom, atomStoreManager } from '../figma_app/27355'

export let $$s0 = atom(void 0)
export function $$o1() {
  if (!getFeatureFlags().anticipation_trigger_shadow)
    return
  let e = getSingletonSceneGraph().getDirectlySelectedNodes()
  let t = e.length > 1 ? void 0 : e[0]?.guid
  atomStoreManager.set($$s0, t)
}
export const W = $$s0
export const r = $$o1
