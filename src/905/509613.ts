import type { PrimitiveAtom } from 'jotai'
import { debugState } from '../905/407919'
import { analyticsEventManager } from '../905/449184'
import { atom, atomStoreManager } from '../figma_app/27355'
import { getInitialOptions } from '../figma_app/169182'

export let jubileeTentativePlanEligibilityAtom = atom<string | null>(null) as PrimitiveAtom<string>
export let jubileeTentativeUserEligibilityAtom = atom<string | null>(null) as PrimitiveAtom<string>
export let jubileeBAtom = atom<boolean | null>(null) as PrimitiveAtom<boolean>
export let jubileeEligibilitySAtom = atom<string | null>(null) as PrimitiveAtom<string>
export let setListAtom = atom(new Set())
export let grantlistCheckStatus = atom('unchecked')

export let checkEligibilityStatus = (caller: string) => {
  const planEligibility = atomStoreManager.get(jubileeTentativePlanEligibilityAtom)
  const userEligibility = atomStoreManager.get(jubileeTentativeUserEligibilityAtom)
  const checkedCallers = atomStoreManager.get(setListAtom)

  if (!checkedCallers.has(caller)) {
    // Update the set of checked callers
    atomStoreManager.set(setListAtom, new Set([...checkedCallers, caller]))

    // Get debug view information
    const selectedView = debugState && debugState.getState().selectedView
    const fileKey = selectedView?.view === 'fullscreen' ? selectedView.fileKey : undefined

    // Track analytics event for grantlist check
    analyticsEventManager.trackDefinedEvent('search_experience.ai_eligibility.grantlist_check', {
      newGrantlistPlanValue: planEligibility !== null ? planEligibility.toString() : 'null',
      newGrantlistUserValue: userEligibility !== null ? userEligibility.toString() : 'null',
      userId: getInitialOptions().user_data?.id,
      fileKey: fileKey || 'missing',
      caller,
    })
  }

  // Return eligibility status (plan or user eligible, or false if neither)
  return planEligibility || userEligibility || false
}
export const $7 = checkEligibilityStatus
export const Ac = grantlistCheckStatus
export const Jt = jubileeEligibilitySAtom
export const ag = jubileeTentativePlanEligibilityAtom
export const p9 = jubileeBAtom
export const u6 = jubileeTentativeUserEligibilityAtom
export const yf = setListAtom
