import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { z } from 'zod'
import { trackEventAnalytics } from '../905/449184'
import { globalPerfTimer } from '../905/542194'
import { formatKeyboardShortcut } from '../905/783179'
import { AssetTabType, ExtensionFeatureKey } from '../905/946805'
import { atom, atomStoreManager, createValidatedLocalStorageAtom, useAtomWithSubscription } from '../figma_app/27355'
import { wg } from '../figma_app/101956'
import { isQaSearchFrecencyEnabled } from '../figma_app/144974'
import { hasJubileePermissionForDesign } from '../figma_app/251115'
import { getProductType } from '../figma_app/314264'
import { throwTypeError } from '../figma_app/465776'
import { openFileKeyAtom } from '../figma_app/516028'
import { rE } from '../figma_app/604494'
import { Be,  l4,  OW, qE, RA,  W3 } from '../figma_app/737746'

export function $$y10() {
  globalPerfTimer.tryStop('search-quick-actions')
  globalPerfTimer.start('search-quick-actions')
}
export function $$b0() {
  let e = useAtomWithSubscription(openFileKeyAtom) || ''
  let t = useSelector(e => e.selectedView)
  let r = useAtomWithSubscription(rE)
  let a = r?.source || ''
  let o = $$L14()
  let u = hasJubileePermissionForDesign()
  return useCallback(({
    quickActionsSessionId: r,
    quickActionsQueryId: n,
    searchQuery: i,
    numSearchResults: s,
    currentSelection: p,
    module: _,
    moduleFilters: h,
    qaVersion: m,
    searchQueryResults: g,
  }) => {
    let f
    f = {
      quickActionsSessionId: r,
      quickActionsQueryId: n,
      searchQuery: i,
      numSearchResults: s,
      currentSelection: p,
      module: _,
      moduleFilters: h,
      qaVersion: m,
      fileKey: e,
      searchLatencyMs: globalPerfTimer.tryStop('search-quick-actions'),
      searchQueryResults: g,
      source: a,
      rankingAlgorithm: $$T8(_),
      productType: getProductType(t, null),
      role: o,
      hasAiFeatureAccess: u,
    }
    trackEventAnalytics(RA, f, {
      forwardToDatadog: !0,
    })
  }, [e, u, o, t, a])
}
export function $$T8(e) {
  switch (e) {
    case AssetTabType.ALL:
      return isQaSearchFrecencyEnabled() ? 'frecency' : 'string-match'
    case AssetTabType.EXTENSIONS:
      return 'extensions'
    case AssetTabType.ASSETS:
    case ExtensionFeatureKey.ASSETS_TAB_DETAIL_VIEW:
      return 'assets'
    default:
      throwTypeError(e)
  }
}
export function $$I9(e) {
  let t = {}
  let r = 0
  for (let n of e) {
    for (let {
      key,
      isDisabled,
      resultType,
    } of n.actions) {
      r += 1
      key in t || (t[key] = {
        rank: r,
        section: n.name,
        executable: !isDisabled,
        resultType,
      })
    }
  }
  return JSON.stringify(t)
}
export function $$S3(e, t) {
  return {
    name: e,
    actions: t.map(e => ({
      key: e.key,
      isDisabled: !1,
      resultType: l4.EXTENSION,
    })),
  }
}
export function $$v6(e) {
  return {
    name: 'Extension Actions',
    actions: e.map(({
      itemKey: e,
    }) => ({
      key: e,
      isDisabled: !1,
      resultType: l4.ACTION,
    })),
  }
}
export function $$A1(e) {
  if (!e)
    return !1
  if (e === AssetTabType.ALL || e === AssetTabType.ASSETS || e === AssetTabType.EXTENSIONS)
    return !0
  switch (e) {
    case ExtensionFeatureKey.ASSETS_TAB_DETAIL_VIEW:
    case ExtensionFeatureKey.VISUAL_SEARCH:
      return !0
    case ExtensionFeatureKey.EXTENSION_DETAILS:
    case ExtensionFeatureKey.REGENERATE_TEXT_TOAST:
    case ExtensionFeatureKey.MAGIC_LINK_DONE_TOAST:
    case ExtensionFeatureKey.BACKGROUND_REMOVE_TOAST:
    case ExtensionFeatureKey.UPSCALE_IMAGE_TOAST:
    case ExtensionFeatureKey.RENAME_LAYERS_TOAST:
    case ExtensionFeatureKey.GENERATE_IMAGE:
    case ExtensionFeatureKey.EDIT_IMAGE:
    case ExtensionFeatureKey.IMAGE_TO_DESIGN:
    case ExtensionFeatureKey.IMAGE_TO_DESIGN_ORACLE:
    case ExtensionFeatureKey.MAGIC_LINK:
    case ExtensionFeatureKey.PLUGIN_PARAMETER_ENTRY:
    case ExtensionFeatureKey.PLUGIN_SUBMENU_ENTRY:
    case ExtensionFeatureKey.TRANSLATE:
    case ExtensionFeatureKey.REWRITE:
    case ExtensionFeatureKey.SHORTEN:
    case ExtensionFeatureKey.FIRST_DRAFT:
    case ExtensionFeatureKey.FIRST_DRAFT_KIT_PICKER:
    case ExtensionFeatureKey.FIRST_DRAFT_MAKE_CHANGES:
    case ExtensionFeatureKey.FIRST_DRAFT_LINT:
    case ExtensionFeatureKey.FIRST_DRAFT_DEBUG:
    case ExtensionFeatureKey.FIRST_DRAFT_MAKE_KIT_DEBUG:
    case ExtensionFeatureKey.FIRST_DRAFT_MAKE_KIT:
    case ExtensionFeatureKey.MAKE_EDITS:
    case ExtensionFeatureKey.MAKE_EDITS_DEBUG:
    case ExtensionFeatureKey.MAKE_EDITS_DEBUG_REVIEW:
    case ExtensionFeatureKey.FIRST_DRAFT_FINE_TUNE:
    case ExtensionFeatureKey.ASSISTANT_CHAT:
    case ExtensionFeatureKey.LINK_TO_COMPONENT:
    case ExtensionFeatureKey.FOR_TESTING:
    case ExtensionFeatureKey.FIGJAM_AI_CONTEXTUAL_FEATURES:
    case ExtensionFeatureKey.LIBRARY_CSS_EXTRACTION:
    case ExtensionFeatureKey.MERMAID_TO_DIAGRAM:
    case ExtensionFeatureKey.MAKE_VIDEO:
      return !1
    default:
      throwTypeError(e)
  }
}
export function $$x2({
  isQAV2: e,
  moduleToOpen: t,
}) {
  return !e || !t || (t.type === 'tab' ? $$A1(t.module) : t.type === 'custom' ? $$A1(t.name) : void throwTypeError(t))
}
export function $$N5(e) {
  trackEventAnalytics(W3, e, {
    forwardToDatadog: !0,
  })
}
export function $$C11(e) {
  trackEventAnalytics(OW, e, {
    forwardToDatadog: !0,
  })
}
export function $$w4(e, t) {
  return {
    ...e,
    onAction: (r) => {
      let n
      let i = r.shortcut
      n = {
        source: t,
        shortcutText: i ? formatKeyboardShortcut(i) : '',
        actionText: e.text || '',
      }
      trackEventAnalytics(Be, n)
      e.onAction && e.onAction(r)
    },
  }
}
export function $$O12(e) {
  let t = atomStoreManager.get($$D13)
  return !t.has(e) && (t.add(e), atomStoreManager.set($$D13, t), !0)
}
export function $$R7() {
  return atomStoreManager.get(wg) ? qE.EDITOR : qE.VIEWER
}
export function $$L14() {
  return useAtomWithSubscription(wg) ? qE.EDITOR : qE.VIEWER
}
let $$P15 = atom(null)
let $$D13 = createValidatedLocalStorageAtom('ai_actions_used', new Set(), z.set(z.string()))
export const Ev = $$b0
export const F$ = $$A1
export const Fi = $$x2
export const HD = $$S3
export const M$ = $$w4
export const Mq = $$N5
export const NH = $$v6
export const WZ = $$R7
export const eg = $$T8
export const i6 = $$I9
export const lw = $$y10
export const mi = $$C11
export const qM = $$O12
export const qz = $$D13
export const vI = $$L14
export const zF = $$P15
