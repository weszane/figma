import { useCallback } from "react";
import { d4 } from "../vendor/514228";
import { throwTypeError } from "../figma_app/465776";
import { md, zl, eU, E2 } from "../figma_app/27355";
import { z } from "../905/239603";
import { sx } from "../905/449184";
import { sn } from "../905/542194";
import { v5 } from "../figma_app/314264";
import { wg } from "../figma_app/101956";
import { ze } from "../figma_app/516028";
import { PE } from "../figma_app/251115";
import { h8 } from "../figma_app/144974";
import { Jc, Sn } from "../905/946805";
import { rE } from "../figma_app/604494";
import { OZ } from "../905/783179";
import { gc, RA, Nv, NP, uP, tq, l4, W3, OW, Be, qE } from "../figma_app/737746";
export function $$y10() {
  sn.tryStop(gc);
  sn.start(gc);
}
export function $$b0() {
  let e = md(ze) || "";
  let t = d4(e => e.selectedView);
  let r = md(rE);
  let a = r?.source || "";
  let o = $$L14();
  let u = PE();
  return useCallback(({
    quickActionsSessionId: r,
    quickActionsQueryId: n,
    searchQuery: i,
    numSearchResults: s,
    currentSelection: p,
    module: _,
    moduleFilters: h,
    qaVersion: m,
    searchQueryResults: g
  }) => {
    var f;
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
      searchLatencyMs: sn.tryStop(gc),
      searchQueryResults: g,
      source: a,
      rankingAlgorithm: $$T8(_),
      productType: v5(t, null),
      role: o,
      hasAiFeatureAccess: u
    };
    sx(RA, f, {
      forwardToDatadog: !0
    });
  }, [e, u, o, t, a]);
}
export function $$T8(e) {
  switch (e) {
    case Jc.ALL:
      return h8() ? Nv : NP;
    case Jc.EXTENSIONS:
      return uP;
    case Jc.ASSETS:
    case Sn.ASSETS_TAB_DETAIL_VIEW:
      return tq;
    default:
      throwTypeError(e);
  }
}
export function $$I9(e) {
  let t = {};
  let r = 0;
  for (let n of e) for (let {
    key,
    isDisabled,
    resultType
  } of n.actions) {
    r += 1;
    key in t || (t[key] = {
      rank: r,
      section: n.name,
      executable: !isDisabled,
      resultType
    });
  }
  return JSON.stringify(t);
}
export function $$S3(e, t) {
  return {
    name: e,
    actions: t.map(e => ({
      key: e.key,
      isDisabled: !1,
      resultType: l4.EXTENSION
    }))
  };
}
export function $$v6(e) {
  return {
    name: "Extension Actions",
    actions: e.map(({
      itemKey: e
    }) => ({
      key: e,
      isDisabled: !1,
      resultType: l4.ACTION
    }))
  };
}
export function $$A1(e) {
  if (!e) return !1;
  if (e === Jc.ALL || e === Jc.ASSETS || e === Jc.EXTENSIONS) return !0;
  switch (e) {
    case Sn.ASSETS_TAB_DETAIL_VIEW:
    case Sn.VISUAL_SEARCH:
      return !0;
    case Sn.EXTENSION_DETAILS:
    case Sn.REGENERATE_TEXT_TOAST:
    case Sn.MAGIC_LINK_DONE_TOAST:
    case Sn.BACKGROUND_REMOVE_TOAST:
    case Sn.UPSCALE_IMAGE_TOAST:
    case Sn.RENAME_LAYERS_TOAST:
    case Sn.GENERATE_IMAGE:
    case Sn.EDIT_IMAGE:
    case Sn.IMAGE_TO_DESIGN:
    case Sn.IMAGE_TO_DESIGN_ORACLE:
    case Sn.MAGIC_LINK:
    case Sn.PLUGIN_PARAMETER_ENTRY:
    case Sn.PLUGIN_SUBMENU_ENTRY:
    case Sn.TRANSLATE:
    case Sn.REWRITE:
    case Sn.SHORTEN:
    case Sn.FIRST_DRAFT:
    case Sn.FIRST_DRAFT_KIT_PICKER:
    case Sn.FIRST_DRAFT_MAKE_CHANGES:
    case Sn.FIRST_DRAFT_LINT:
    case Sn.FIRST_DRAFT_DEBUG:
    case Sn.FIRST_DRAFT_MAKE_KIT_DEBUG:
    case Sn.FIRST_DRAFT_MAKE_KIT:
    case Sn.MAKE_EDITS:
    case Sn.MAKE_EDITS_DEBUG:
    case Sn.MAKE_EDITS_DEBUG_REVIEW:
    case Sn.FIRST_DRAFT_FINE_TUNE:
    case Sn.ASSISTANT_CHAT:
    case Sn.LINK_TO_COMPONENT:
    case Sn.FOR_TESTING:
    case Sn.FIGJAM_AI_CONTEXTUAL_FEATURES:
    case Sn.LIBRARY_CSS_EXTRACTION:
    case Sn.MERMAID_TO_DIAGRAM:
    case Sn.MAKE_VIDEO:
      return !1;
    default:
      throwTypeError(e);
  }
}
export function $$x2({
  isQAV2: e,
  moduleToOpen: t
}) {
  return !e || !t || ("tab" === t.type ? $$A1(t.module) : "custom" === t.type ? $$A1(t.name) : void throwTypeError(t));
}
export function $$N5(e) {
  sx(W3, e, {
    forwardToDatadog: !0
  });
}
export function $$C11(e) {
  sx(OW, e, {
    forwardToDatadog: !0
  });
}
export function $$w4(e, t) {
  return {
    ...e,
    onAction: r => {
      var n;
      let i = r.shortcut;
      n = {
        source: t,
        shortcutText: i ? OZ(i) : "",
        actionText: e.text || ""
      };
      sx(Be, n);
      e.onAction && e.onAction(r);
    }
  };
}
export function $$O12(e) {
  let t = zl.get($$D13);
  return !t.has(e) && (t.add(e), zl.set($$D13, t), !0);
}
export function $$R7() {
  return zl.get(wg) ? qE.EDITOR : qE.VIEWER;
}
export function $$L14() {
  return md(wg) ? qE.EDITOR : qE.VIEWER;
}
let $$P15 = eU(null);
let $$D13 = E2("ai_actions_used", new Set(), z.set(z.string()));
export const Ev = $$b0;
export const F$ = $$A1;
export const Fi = $$x2;
export const HD = $$S3;
export const M$ = $$w4;
export const Mq = $$N5;
export const NH = $$v6;
export const WZ = $$R7;
export const eg = $$T8;
export const i6 = $$I9;
export const lw = $$y10;
export const mi = $$C11;
export const qM = $$O12;
export const qz = $$D13;
export const vI = $$L14;
export const zF = $$P15;