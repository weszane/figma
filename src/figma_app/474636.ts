import type { PrimitiveAtom } from 'jotai'
import { atom } from 'jotai'

export let $$i7 = atom(!1) as PrimitiveAtom<any>
export let $$a5 = atom(!1) as PrimitiveAtom<any>
export let isSetCurrentPageAsyncAtom = atom(!1) as PrimitiveAtom<any>
export let pluginIdAtom = atom<any>(null) as PrimitiveAtom<any>
export let $$l4 = atom(null) as PrimitiveAtom<any>
export let pluginTriggeredFromAtom = atom(null) as PrimitiveAtom<any>
export let runModeAtom = atom(null) as PrimitiveAtom<any>
export let $$u2 = atom(!1) as PrimitiveAtom<any>
export let $$p3 = atom(e => e($$l4) ? e(pluginIdAtom) : null)
export const Lx = $$u2
export const be = $$p3
export const d4 = $$l4
export const nc = $$a5
export const s6 = $$i7
export const $f = runModeAtom
export const GR = pluginIdAtom
export const rp = isSetCurrentPageAsyncAtom
export const vT = pluginTriggeredFromAtom
