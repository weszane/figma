import { atom } from 'jotai'
import { atomWithDefault } from 'jotai/utils'
import { createReduxSubscriptionAtomWithState } from '../905/270322'

let s = createReduxSubscriptionAtomWithState(e => e.universalInsertModal.initialFdView)
let $$o1 = atom(void 0)
let $$l2 = atomWithDefault((e) => {
  let t = e(s)
  let r = e($$o1)
  return t || r || 'recents_and_saved'
})
let $$d0 = atom(null)
export const FP = $$d0
export const hO = $$o1
export const zM = $$l2
