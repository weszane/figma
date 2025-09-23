
import { debugState } from '../905/407919'
import { analyticsEventManager } from '../905/449184'
import { atom, atomStoreManager } from '../figma_app/27355'
import { getInitialOptions } from '../figma_app/169182'

let $$l3 = atom(null)
let $$d5 = atom(null)
let $$c4 = atom(null)
let $$u2 = atom(null)
let $$p6 = atom(new Set())
let $$m1 = atom('unchecked')
let $$h0 = (e): boolean => {
  let t = atomStoreManager.get($$l3)
  let i = atomStoreManager.get($$d5)
  let o = atomStoreManager.get($$p6)
  if (!atomStoreManager.get($$p6).has(e)) {
    atomStoreManager.set($$p6, new Set([...o, e]))
    let l = debugState && debugState.getState().selectedView
    let d = l?.view === 'fullscreen' && l.fileKey
    analyticsEventManager.trackDefinedEvent('search_experience.ai_eligibility.grantlist_check', {
      newGrantlistPlanValue: t !== null ? t.toString() : 'null',
      newGrantlistUserValue: i !== null ? i.toString() : 'null',
      userId: getInitialOptions().user_data?.id,
      fileKey: d || 'missing',
      caller: e,
    })
  }
  return t || i || !1
}
export const $7 = $$h0
export const Ac = $$m1
export const Jt = $$u2
export const ag = $$l3
export const p9 = $$c4
export const u6 = $$d5
export const yf = $$p6
