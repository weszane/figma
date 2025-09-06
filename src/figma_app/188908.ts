import { useCallback, useMemo, useRef, useEffect, useState } from "react";
import { sortByPropertyWithOptions, sortByWithOptions } from "../figma_app/656233";
import { Et } from "../figma_app/397267";
import { atomStoreManager, useAtomWithSubscription, atom } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { NX, k9 } from "../figma_app/777207";
import { fd } from "../figma_app/255679";
import { q5, _G, tS } from "../figma_app/516028";
import { r6, CK } from "../figma_app/517115";
import { tM, k1 } from "../figma_app/984498";
import { I } from "../figma_app/130633";
import { k } from "../905/540025";
import { lj } from "../905/991973";
import { Nv } from "../figma_app/318590";
import { o8, yW } from "../figma_app/644808";
import { wV, S5 } from "../figma_app/647246";
import { AS } from "../figma_app/177636";
export function $$b9() {
  let e = q5();
  return useCallback((t, r) => {
    !function (e, t, r) {
      if (!t) return;
      let {
        view,
        libraryKey,
        ...a
      } = t;
      analyticsEventManager.trackDefinedEvent("assets_panel.navigation", {
        view,
        ...a,
        libraryKey,
        fileKey: r?.key,
        fileTeamId: r?.teamId ?? void 0,
        fileOrgId: r?.parentOrgId ?? void 0,
        entrypoint: e,
        componentSuggestionSessionId: r6()
      });
      let l = atomStoreManager.get(AS).libraryKeys;
      libraryKey && l.length > 0 && l.includes(libraryKey) && "Library" === view && ["libraryCard", "settingsMenu"].includes(e) && analyticsEventManager.trackDefinedEvent("assets_panel.view_site_kit", {
        fileKey: r?.key,
        fileTeamId: r?.teamId ?? void 0,
        fileOrgId: r?.parentOrgId ?? void 0,
        entrypoint: e,
        isSearching: t.isSearching
      });
    }(t, r, e);
  }, [e]);
}
export function $$T7() {
  let e = _G();
  let {
    libraryKey,
    currentView
  } = wV();
  return currentView === S5.Recents ? I.RECENT : libraryKey ? libraryKey === e ? I.LOCAL : I.FILE : I.ALL;
}
export function $$I12({
  moreSearchResults: e
} = {}) {
  let {
    libraryKey,
    pageId,
    currentView,
    isNavigatingVisualAssets,
    visualAssetsType
  } = wV();
  let l = _G();
  let u = useAtomWithSubscription(lj);
  let p = libraryKey && u.includes(libraryKey);
  let _ = fd(libraryKey);
  return useMemo(() => {
    switch (currentView) {
      case S5.Search:
        if (isNavigatingVisualAssets && visualAssetsType) return {
          componentSectionNameForTracking: "Visual assets panel search",
          templateSectionNameForTracking: "Visual assets panel search"
        };
        if (e) return {
          componentSectionNameForTracking: "More search results",
          templateSectionNameForTracking: "More search results"
        };
        return {
          componentSectionNameForTracking: "Primary search results",
          templateSectionNameForTracking: "Templates search results"
        };
      case S5.Recents:
        return {
          componentSectionNameForTracking: "Recently used",
          templateSectionNameForTracking: "Recently used templates"
        };
      default:
        if (libraryKey === l) {
          if (pageId === o8) return {
            componentSectionNameForTracking: "Local private components",
            templateSectionNameForTracking: "Local private templates"
          };
          return {
            componentSectionNameForTracking: "Local components",
            templateSectionNameForTracking: "Local templates"
          };
        }
        if (p && isNavigatingVisualAssets) return {
          componentSectionNameForTracking: "Visual asset libraries",
          templateSectionNameForTracking: "Visual asset libraries"
        };
        if (_) return {
          componentSectionNameForTracking: "Subscribed community libraries",
          templateSectionNameForTracking: "Subscribed community libraries"
        };
        return {
          componentSectionNameForTracking: "Subscribed libraries",
          templateSectionNameForTracking: "Subscribed libraries"
        };
    }
  }, [currentView, isNavigatingVisualAssets, visualAssetsType, e, libraryKey, l, p, _, pageId]);
}
export function $$S11(e, t) {
  let r = [...e];
  t && NX(t) ? k9({
    libraries: r,
    approvedLibraryKeysByResourceType: t
  }) : sortByPropertyWithOptions(r, "name");
  return r;
}
export function $$v8(e, t) {
  return $$S11(e.map(e => ({
    ...e,
    library_key: e.libraryKey
  })), t);
}
export function $$A0(e) {
  let t = [...e];
  sortByWithOptions(t, e => e.versions[e.current_hub_file_version_id].name);
  return t;
}
export function $$x1(e, {
  includeEmptyLibraries: t
} = {}) {
  let r = e.numComponents + e.numStateGroups;
  return t || r > 0 ? {
    name: e.name,
    libraryKey: e.libraryKey,
    numComponents: r,
    numTemplates: 0,
    thumbnailUrl: e.thumbnailUrlOverride ?? e.thumbnailUrl,
    thumbnailShouldCover: !!e.thumbnailGuid || "community" === e.libraryType,
    type: yW.DESIGN,
    libraryType: e.libraryType
  } : null;
}
export function $$N10(e, t, r = 10, i = 2, a = 30) {
  let s = useRef(void 0);
  useEffect(() => {
    if (!e.current) return;
    let n = e.current;
    let o = e => {
      let n = void 0 !== s.current && e.timeStamp - s.current < a;
      let o = e.deltaX;
      let l = e.deltaY;
      Math.abs(o) > (n ? i : r) && (s.current = e.timeStamp);
      !n && Math.abs(o) > r && Math.abs(o) > 1.5 * Math.abs(l) && t(o > 0 ? "right" : "left");
    };
    n.addEventListener("wheel", o, {
      passive: !0
    });
    return () => {
      n.removeEventListener("wheel", o);
    };
  }, [t, e, a, i, r]);
}
export function $$C2(e) {
  return (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e instanceof HTMLSelectElement) && "application" !== e.role;
}
export function $$w3(e, t = 8) {
  let [r, i] = useState(window.innerHeight);
  useEffect(() => {
    let e = () => {
      i(window.innerHeight);
    };
    window.addEventListener("resize", e);
    return () => window.removeEventListener("resize", e);
  }, []);
  let a = useMemo(() => r - (e ?? 0) - t, [t, e, r]);
  if (e) return a;
}
export let $$O5 = atom(!1);
export function $$R6(e) {
  atomStoreManager.set($$O5, !0);
  e();
  setTimeout(() => atomStoreManager.set($$O5, !1), 0);
}
export function $$L4(e) {
  let t = Nv(!0);
  let r = k();
  let i = tS();
  let s = CK();
  return useCallback(n => {
    let {
      type,
      sectionPosition,
      searchQuery,
      searchSessionId,
      ..._
    } = e;
    let h = {
      aiResultsEnabled: t,
      altKey: n.altKey,
      assetsPanelVersion: r,
      fileKey: i ?? void 0
    };
    analyticsEventManager.trackDefinedEvent("assets_panel.keyboard_insert", {
      ...e,
      ...h
    });
    e.source !== tM ? analyticsEventManager.trackDefinedEvent("asset_search.result_inserted", {
      ..._,
      ...h,
      assetType: type,
      position: sectionPosition,
      reciprocalRank: Et(sectionPosition) ? 1 / (1 + sectionPosition) : void 0,
      query: searchQuery,
      sessionId: searchSessionId,
      entryPoint: "assets-panel",
      componentSuggestionSessionId: s
    }) : k1({
      assetType: type,
      assetKey: _.assetKey,
      libraryKey: _.assetLibraryKey
    });
  }, [e, t, i, r, s]);
}
export const LH = $$A0;
export const Nh = $$x1;
export const Qk = $$C2;
export const R2 = $$w3;
export const ZV = $$L4;
export const h = $$O5;
export const hB = $$R6;
export const ht = $$T7;
export const mb = $$v8;
export const sN = $$b9;
export const t7 = $$N10;
export const uo = $$S11;
export const zf = $$I12;