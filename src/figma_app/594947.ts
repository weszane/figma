import { useCallback, useContext, useMemo, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { DynamicConfig, EvaluationReason } from 'statsig-js'
import { getFeatureFlags } from '../905/601108'
import { w } from '../905/669698'
import { B } from '../905/749933'
import { b as _$$b } from '../905/985254'
import { B as _$$B } from '../3973/298076'
import { getExperimentConfig } from '../3973/663243'
import { initCompletedPromiseSelector, numericAtom, processSelector } from '../3973/697935'
import { atom, atomStoreManager, createRemovableAtomFamily, useAtomWithSubscription } from '../figma_app/27355'
import { r1 } from '../figma_app/545877'
import { useLatestRef } from '../figma_app/922077'

export async function $$E7(e, t, r, n = !1) {
  let i = atomStoreManager.get(processSelector);
  (r || getFeatureFlags().statsig_suspend) && (await i.initCompletedPromise)
  return getExperimentConfig(atomStoreManager.get(processSelector), e, 'getExperiment', t, n)
}
export function $$y10(e, t, r) {
  return $$E7(e, t, r, !0)
}
function b(e, t, r) {
  let {
    userVersion,
  } = useContext(B)
  let a = useLatestRef(userVersion)
  let l = useAtomWithSubscription(processSelector)
  let d = useRef(null)
  return {
    getConfig: useCallback(() => ((a !== userVersion || d.current == null) && (d.current = getExperimentConfig(l, e, 'useExperiment', t, r)), d.current), [e, t, a, l, userVersion, r]),
  }
}
export let $$T2 = getFeatureFlags().statsig_suspend
  ? function (e, t, r) {
    useAtomWithSubscription(initCompletedPromiseSelector)
    return b(e, t, r)
  }
  : b
export function $$I3(e, t, r) {
  let a = useMemo(() => r1(e), [e])
  let {
    getConfig,
  } = $$T2(t, r, useAtomWithSubscription(a).data || !1)
  let c = useDispatch()
  return {
    getConfig: useCallback(() => (c(_$$b({
      [e]: !0,
    })), getConfig()), [c, e, getConfig]),
  }
}
getFeatureFlags().statsig_suspend
createRemovableAtomFamily(({
  experimentName: e,
  keepDeviceValue: t,
  disableExposureLogging: r,
}) => atom(async (n) => {
  await n(initCompletedPromiseSelector)
  n(numericAtom)
  let i = n(processSelector)
  let a = null
  return () => (a == null && (a = getExperimentConfig(i, e, 'getExperiment', t, r)), a)
}), (e, t) => e.experimentName === t.experimentName && e.disableExposureLogging === t.disableExposureLogging && e.keepDeviceValue === t.keepDeviceValue)
export { Fj, gP, w0 } from '../3973/389215'
export { aH, sq } from '../3973/473379'
export const Bf = _$$B
export const I7 = $$T2
export const XV = $$I3
export const f6 = EvaluationReason
export const hW = $$E7
export const iO = DynamicConfig
export const vs = $$y10
export const w$ = w
