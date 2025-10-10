import { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { consentCounterAtom } from "../905/18800"
import { O as _$$O } from "../905/51985"
import { L } from "../905/453756"
import { getFeatureFlags } from "../905/601108"
import { AlertState } from "../905/638715"
import { isVsCodeEnvironment } from "../905/858738"
import { atom, useAtomWithSubscription } from "../figma_app/27355"
import { ea4, F6W, IuL, j4N, jl4, M$q, P4e, xEX, yNw } from "../figma_app/27776"
import { getViewportY } from "../figma_app/62612"
import { getObservableValue } from "../figma_app/84367"
import { useDevModeFocusId } from "../figma_app/88239"
import { _ as _$$_ } from "../figma_app/91620"
import { r as _$$r } from "../figma_app/375550"
import { zm } from "../figma_app/384673"
import { isInteractionReady } from "../figma_app/433958"
import { G } from "../figma_app/481531"
import { kd } from "../figma_app/546509"
import { lq } from "../figma_app/630194"
import { getDevHandoffInspectSplitPosition } from "../figma_app/740163"
import { AppStateTsApi } from "../figma_app/763686"
import { parsePxInt, parsePxNumber } from "../figma_app/783094"
import { gT } from "../figma_app/822177"
import { N as _$$N } from "../figma_app/910954"
import { isDevHandoffEditorType, isWhiteboardFileType } from "../figma_app/976749"

let w = parsePxInt(xEX)
let O = atom(0)
export function $$R4() {
  let e = useSelector(e => e.downtime.status === AlertState.Ongoing || e.downtime.status === AlertState.Imminent || e.showingDowntimeBanner)
  let t = getViewportY({
    subscribeToUpdates_expensive: !0,
  })
  e && (t += w)
  return t
}
export function $$L2() {
  let e = kd()
  return useCallback(async () => e?.toastBottomInset ? await e.toastBottomInset() : Promise.reject(), [e])
}
export function $$P0() {
  let e = isWhiteboardFileType()
  let t = useAtomWithSubscription(consentCounterAtom)
  let r = useAtomWithSubscription(O)
  let n = getObservableValue(AppStateTsApi?.editorPreferences()?.showFigmaScope, !1)
  let d = getDevHandoffInspectSplitPosition()
  let u = useSelector(e => e.mirror.appModel.showKeyboardShortcuts)
  let p = lq()
  let g = useAtomWithSubscription(_$$O)
  let E = !!useDevModeFocusId()
  let T = 0
  u && (T = parsePxNumber(yNw))
  T += (n ? g : 0) + r
  e && (T += t, p && (T -= parsePxNumber(ea4)))
  E && (T += 2 * parsePxNumber(M$q) - parsePxNumber(j4N))
  isVsCodeEnvironment() && getFeatureFlags().dt_vscode_ready_for_dev && (T += d)
  return T
}
export function $$D3() {
  let e = _$$N()
  let t = isInteractionReady()
  let r = isDevHandoffEditorType()
  let n = useSelector(e => !!e.prototype?.isFooterVisible)
  let a = zm() && !r ? parsePxNumber(F6W) : 0
  let s = useSelector(e => e.mirror?.appModel.showUi)
  let c = 64 + e + a
  let _ = isWhiteboardFileType()
  let m = L()
  let g = _$$_()
  let f = G()
  let E = useAtomWithSubscription(gT)
  let y = useAtomWithSubscription(_$$r)
  return _ && !m ? g && f ? parsePxNumber(IuL) + parsePxNumber(jl4) : g && E ? c : g ? parsePxNumber(IuL) : 0 : t ? c + (y ? 40 : 0) : n ? parsePxNumber(P4e) : s ? c : 0
}
export function $$k1(e) {
  let [t, r] = useState(null)
  useEffect(() => {
    function t() {
      let t = document.querySelector(e)
      r(t?.getBoundingClientRect() ?? null)
    }
    t()
    let n = setInterval(() => t(), 500)
    return () => clearInterval(n)
  }, [e])
  return t
}
export const xn = $$P0
export const hX = $$k1
export const uo = $$L2
export const Yk = $$D3
export const Ii = $$R4
