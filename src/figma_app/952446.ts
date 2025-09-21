import { createReduxSubscriptionAtomWithState } from '../905/270322'
import { atom, atomStoreManager, setupAtomWithInitialValue, setupAtomWithMount, um } from '../figma_app/27355'
import { MEMORY_WARNING_MODAL } from '../figma_app/453508'
import { getTotalUsedHeapMemory } from '../figma_app/527873'
import { CorePerfInfo, figmaScopeBindings, Fullscreen, VariantType } from '../figma_app/763686'

let $$l8 = 75
let $$d11 = 60
let $$c7 = 90
export var $$u4 = (e => (e[e.SAFE = 0] = 'SAFE', e[e.WARNING = 1] = 'WARNING', e[e.ERROR = 2] = 'ERROR', e[e.OOM = 3] = 'OOM', e))($$u4 || {})
let p = atom(null)
let $$_3 = atom(e => !!e(p))
export function $$h10(e) {}
let m = setupAtomWithMount(um({
  mallocLevelBytes: 0,
  heapMemoryLimit: 1 / 0,
}, () => ({
  mallocLevelBytes: getTotalUsedHeapMemory(),
  heapMemoryLimit: CorePerfInfo.getHeapMemoryLimit(),
})), ({
  setSelf: e,
}) => {
  e()
  let t = setInterval(e, 5e3)
  return () => clearInterval(t)
})
let $$g2 = atom((e) => {
  let {
    mallocLevelBytes,
    heapMemoryLimit,
  } = e(m)
  let n = e(p)
  let i = mallocLevelBytes / heapMemoryLimit * 100
  n && (i = n)
  return i = Math.round(100 * (i = Math.max(0, i = Math.min(100, i))) + Number.EPSILON) / 100
}, (e, t) => {
  t(m)
})
export function $$f1() {
  atomStoreManager.set($$g2)
  return atomStoreManager.get($$g2)
}
let E = createReduxSubscriptionAtomWithState(e => e.modalShown?.type === MEMORY_WARNING_MODAL)
let y = atom((e) => {
  let t = e($$g2)
  return e(E) ? 3 : t >= $$l8 ? 2 : t >= $$d11 ? 1 : 0
}, (e, t) => {
  t($$g2)
})
let $$b6 = setupAtomWithInitialValue(y, e => Fullscreen.setMemoryWarningLevel(e))
export function $$T0(e, t) {
  return getTotalUsedHeapMemory() / t * e / CorePerfInfo.getHeapMemoryLimit()
}
export function $$I9(e, t, r) {
  let n = 100 * $$T0(e, t)
  return r ? n >= 0.1 ? `${n.toFixed(1)}%` : '--' : n >= 10 ? `${n.toFixed(1)}%` : `${n.toFixed(2)}%`
}
export function $$S5() {
  let e = figmaScopeBindings?.getSubtreeMemoryUsage(['0:2'], VariantType.PRIMARY) ?? 0
  return getTotalUsedHeapMemory() / figmaScopeBindings.getSubtreeMemoryUsage(['0:0'], VariantType.PRIMARY) * e * 100 / CorePerfInfo.getHeapMemoryLimit()
}
export const KV = $$T0
export const P3 = $$f1
export const Tm = $$g2
export const Vu = $$_3
export const Wy = $$u4
export const Zz = $$S5
export const eE = $$b6
export const im = $$c7
export const pl = $$l8
export const pr = $$I9
export const rq = $$h10
export const xk = $$d11
