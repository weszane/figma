import { q4 } from "../905/294085"
import { atomStoreManager } from "../figma_app/27355"
import { isAssetSuggestionsEnabled } from "../figma_app/144974"
import { P5 } from "../figma_app/318590"
import { hO } from "../figma_app/545293"

export function $$l0() {
  atomStoreManager.set(q4)
  isAssetSuggestionsEnabled() && atomStoreManager.set(hO.currentSearchAtom, null)
  P5() && atomStoreManager.set(hO.currentCommunitySearchAtom, null)
}
export const R = $$l0
