import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { L, M } from '../905/151578'
import { D } from '../905/347702'
import { getFeatureFlags } from '../905/601108'
import { getSingletonSceneGraph } from '../905/700578'
import { hk } from '../figma_app/632319'

export function $$l1(e, ...t) {
  return p({
    deepEqual: f(),
  }, e, ...t)
}
export function $$d0(e, ...t) {
  return p({
    deepEqual: !1,
  }, e, ...t)
}
export function $$c2(e, ...t) {
  return p({
    deepEqual: !1,
    allowDeferral: !1,
  }, e, ...t)
}
export function $$u6(e, ...t) {
  return p({
    deepEqual: !0,
  }, e, ...t)
}
function p(e, t, ...r) {
  let s = useRef(new M(getSingletonSceneGraph(), t, e))
  let o = useCallback(() => s.current.readValue(...r), [s, ...r])
  return useSyncExternalStore(e => s.current.subscribe(e), o)
}
export let $$_5 = D((e, ...t) => {
  let r = useRef(new L(getSingletonSceneGraph(), e))
  let [s, o] = useState(() => r.current.readValue(...t))
  useEffect(() => {
    let e = r.current.readValue(...t)
    e !== s && o(e)
  }, [t, s])
  return s
})
export function $$h3(e) {
  return p({
    deepEqual: !1,
    allowDeferral: !1,
  }, (e, t) => t ? t.map(t => e.get(t)).filter(e => e !== null) : [], e)
}
export function $$m4(e) {
  return p({
    deepEqual: !1,
    allowDeferral: !1,
  }, (e, t) => t ? e.get(t) : null, e)
}
export function $$g7(e, ...t) {
  let r = hk()
  let a = useRef(r
    ? new M(r, e, {
      deepEqual: f(),
    })
    : null)
  let s = useCallback(() => a.current ? a.current.readValue(...t) : null, [a, ...t])
  return useSyncExternalStore(e => a.current ? a.current.subscribe(e) : () => {}, s)
}
function f() {
  return !!getFeatureFlags().use_scene_selector_deep_equals
}
export const $y = $$d0
export const Fk = $$l1
export const Gj = $$c2
export const dB = $$h3
export const g0 = $$m4
export const hr = $$_5
export const wA = $$u6
export const x3 = $$g7
