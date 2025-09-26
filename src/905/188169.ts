import { useMemo, useCallback, useState, useEffect } from "react";
import { FontSourceType, FontHelpers } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { desktopAPIInstance } from "../figma_app/876459";
import { logError } from "../905/714362";
import { isEditorTypeExcluded } from "../905/291654";
import { RE, Wp, x6, Aw, qV, uv, Qr } from "../905/690539";
import { getHighestPriorityFontKey } from "../905/714538";
export function $$u0(e) {
  return useMemo(() => {
    let t = e && e >= 22 || !1;
    return null != desktopAPIInstance || t;
  }, [e]);
}
export function $$p5(e, t, i, s, u) {
  let p = u && "fullscreen" === u.view ? u.editorType : void 0;
  return useMemo(() => {
    let n = [];
    for (let u in e) {
      let m;
      let h;
      if (!u) {
        logError("font picker recent fonts", "font family not found", {
          family: u
        });
        continue;
      }
      if (0 === Object.keys(t[u] || {}).length) continue;
      let g = getHighestPriorityFontKey(e[u]);
      let f = e[u][g].source;
      if (RE(u) && f === FontSourceType.GOOGLE) continue;
      let _ = u.toLowerCase().endsWith("charted") && f === FontSourceType.GOOGLE;
      let A = "Noto Color Emoji Compat Test" === u && f === FontSourceType.GOOGLE;
      let y = u.toLowerCase().startsWith("playwrite") && f === FontSourceType.GOOGLE && !["Playwrite US Modern", "Playwrite US Trad"].includes(u);
      let b = getFeatureFlags().ce_skip_misnamed_font && "?????" === u && f === FontSourceType.GOOGLE;
      let v = !1;
      if (getFeatureFlags().dse_sf_pro_font && p && (v = isEditorTypeExcluded(u, p)), y || _ || A || b || v) continue;
      let I = f === FontSourceType.LOCAL && Object.values(e[u][g].styles).some(e => e.userInstalled);
      let E = f === FontSourceType.LOCAL && Wp(e[u][g]);
      let x = Object.keys(e[u]).every(t => Object.values(e[u][t].styles).some(e => !!e.variationAxes));
      (f !== FontSourceType.LOCAL || i) && (m = x6(u, e[u], f), f === FontSourceType.GOOGLE && s && m && s.has(m) && (h = Aw(u, s.get(m) || "")));
      n.push({
        family: u,
        source: f,
        isVariableFont: x,
        userInstalled: I,
        recentlyInstalled: E,
        previewPath: m,
        previewSVG: h
      });
    }
    return n.sort(qV);
  }, [e, s, i, t, p]);
}
export function $$m1(e, t, i) {
  return useMemo(() => {
    let n = i.toLowerCase().match(/[^ ^\p{Punctuation}]+/gu);
    return n ? t.filter(e => uv(n, e)).sort((e, t) => {
      let i = e.family.toLowerCase().startsWith(n[0]);
      let r = t.family.toLowerCase().startsWith(n[0]);
      return i && !r ? -1 : !i && r ? 1 : qV(e, t);
    }) : e;
  }, [e, t, i]);
}
export function $$h2(e, t, i) {
  return useMemo(() => e || t !== Qr.DOCUMENT_FONTS ? [] : FontHelpers.collectDocumentFonts(), [e, t, i]);
}
export function $$g4(e, t, i) {
  let r = useCallback(e => e >= 0 ? Math.max(0, e * i.itemRowHeight - ((i.scrollContainerHeight + (t ? 0 : i.fontSetRowHeight)) / 2 - i.itemRowHeight)) : 0, [i, t]);
  return useCallback(t => e.scrollToOffset(r(t)), [e, r]);
}
export function $$f3({
  isModalHidden: e,
  searchQuery: t,
  focusAndSelectSearchBar: i,
  currentFont: r,
  isPreviewing: a,
  selectedFontBeforePreviews: s,
  selectedNodeIds: o
}) {
  let [l, d] = useState("");
  let [c, u] = useState(!1);
  useEffect(() => {
    u(!1);
  }, [e, o]);
  useEffect(() => {
    if (!c) {
      let e = l;
      a || (e = "string" == typeof r ? r : "");
      t || (d(e), u(!0));
    }
  }, [r, s, a, t, l, c]);
  useEffect(() => {
    l && i();
  }, [i, l]);
  return {
    searchQueryPlaceholderFontFamily: l,
    setSearchQueryPlaceholderFontFamily: d
  };
}
export const R4 = $$u0;
export const Z7 = $$m1;
export const jX = $$h2;
export const kh = $$f3;
export const oh = $$g4;
export const y8 = $$p5;