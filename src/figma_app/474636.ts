import type { PrimitiveAtom } from 'jotai'
import { atom } from 'jotai'

let $$i7 = atom(!1) as PrimitiveAtom<any>
let $$a5 = atom(!1) as PrimitiveAtom<any>
let $$s6 = atom(!1) as PrimitiveAtom<any>
let pluginIdAtom = atom<any>(null) as PrimitiveAtom<any>
let $$l4 = atom(null) as PrimitiveAtom<any>
let pluginTriggeredFromAtom = atom(null) as PrimitiveAtom<any>
let $$c0 = atom(null) as PrimitiveAtom<any>
let $$u2 = atom(!1) as PrimitiveAtom<any>
let $$p3 = atom(e => e($$l4) ? e(pluginIdAtom) : null)
export const $f = $$c0
export const GR = pluginIdAtom
export const Lx = $$u2
export const be = $$p3
export const d4 = $$l4
export const nc = $$a5
export const rp = $$s6
export const s6 = $$i7
export const vT = pluginTriggeredFromAtom
