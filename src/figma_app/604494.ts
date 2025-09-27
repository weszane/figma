import { atomWithReset } from 'jotai/utils'
import { useCallback } from 'react'
import { generateUUIDv4 } from '../905/871474'
import { AssetTabType } from '../905/946805'
import { atom, createRemovableAtomFamily, useResetAtom } from '../figma_app/27355'

let $$o1 = atomWithReset({})
let $$l10 = atomWithReset(null)
let $$d8 = atomWithReset('')
let $$c9 = atom(generateUUIDv4())
let $$u7 = atom({
  loaded: !1,
  extensions: [],
})
let $$p6 = atomWithReset(AssetTabType.ALL)
let $$_13 = atomWithReset(null)
let $$h4 = atom(null)
let $$m11 = atomWithReset([])
let $$g16 = createRemovableAtomFamily(e => atom((t) => {
  let [r] = t($$m11)
  return r?.name === e
}))
let $$f0 = atom(!1)
let $$E18 = atom(null)
let $$y14 = atom(0)
let $$b12 = atom(!1)
export function $$T5() {
  let e = useResetAtom($$l10)
  return useCallback(() => {
    e()
  }, [e])
}
export function $$I17() {
  let e = useResetAtom($$l10)
  let t = useResetAtom($$d8)
  let r = useResetAtom($$m11)
  let a = useResetAtom($$p6)
  return useCallback(() => {
    e()
    t()
    r()
    a()
  }, [r, t, e, a])
}
export function $$S15() {
  let e = useResetAtom($$d8)
  return useCallback(() => {
    e()
  }, [e])
}
let $$v3 = atom(null)
let $$A2 = atom(null)
export const Bu = $$f0
export const Bw = $$o1
export const DZ = $$A2
export const F3 = $$v3
export const IH = $$h4
export const JB = $$T5
export const Lk = $$p6
export const P_ = $$u7
export const Q8 = $$d8
export const Rt = $$c9
export const TT = $$l10
export const YH = $$m11
export const ZG = $$b12
export const dd = $$_13
export const fq = $$y14
export const hw = $$S15
export const iV = $$g16
export const jh = $$I17
export const rE = $$E18
