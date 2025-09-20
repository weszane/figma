import { useCallback, useMemo, useEffect } from "react";
import { atom, useAtomValueAndSetter, useAtomWithSubscription, atomStoreManager } from "../figma_app/27355";
import { usePreviousValue } from "../figma_app/922077";
import { selectedViewAtom } from "../figma_app/386952";
import { createTrackedAtom } from "../figma_app/615482";
import { ASSET_TYPE, ModeType } from "../figma_app/644808";
import { useAssetPanelContext } from "../figma_app/923271";
import { ZX, r6 } from "../figma_app/950074";
import { ye } from "../figma_app/134428";
import { lj } from "../905/991973";
import { isFullscreenSitesView } from "../905/561485";
import { q as _$$q } from "../figma_app/213525";
var $$m1 = (e => (e.IconSets = "icon_sets", e.Illustrations = "illustrations", e))($$m1 || {});
var $$g3 = (e => (e.Libraries = "All libraries", e.Pages = "Library", e.Assets = "Page", e.Search = "Search", e.Recents = "Recents", e.VisualAssets = "Visual assets", e))($$g3 || {});
var $$f9 = (e => (e.Blocks = "Blocks", e.Libraries = "Libraries", e))($$f9 || {});
let E = createTrackedAtom({});
let $$y4 = createTrackedAtom(!1);
let b = createTrackedAtom(!1);
let T = createTrackedAtom(!1);
let I = createTrackedAtom("Blocks");
let $$S6 = atom(e => {
  let t = e(I);
  let r = e(selectedViewAtom);
  return isFullscreenSitesView(r) ? t : "Libraries";
}, (e, t, r) => {
  t(I, r);
});
let v = (e, t) => {
  let r = t ? {
    currentView: ["Search", "Recents", "All libraries"].includes(e.currentView) ? e.currentView : "All libraries",
    libraryKey: void 0,
    pageId: void 0,
    folderPath: void 0,
    visualAssetsType: void 0
  } : e;
  return (e => {
    let {
      currentView,
      libraryKey,
      pageId,
      folderPath,
      visualAssetsType
    } = e;
    switch (currentView) {
      case "All libraries":
        if (libraryKey || pageId || folderPath) return !1;
        break;
      case "Library":
        if (!libraryKey || pageId || folderPath) return !1;
        break;
      case "Page":
        if (!libraryKey || !pageId) return !1;
        break;
      case "Visual assets":
        if (!visualAssetsType || libraryKey || pageId || folderPath) return !1;
    }
    return !0;
  })(r) ? r : {
    currentView: "All libraries",
    libraryKey: void 0,
    pageId: void 0,
    folderPath: void 0,
    visualAssetsType: void 0
  };
};
export function $$A10() {
  let {
    libraryKey,
    pageId,
    folderPath,
    currentView,
    visualAssetsType,
    setNavigationState,
    clearNavigationState,
    setIsSearching,
    setIsViewingRecents
  } = function () {
    let [e, t] = useAtomValueAndSetter(E);
    let [r, a] = useAtomValueAndSetter($$y4);
    let [s, o] = useAtomValueAndSetter(b);
    let {
      setLastNavAction
    } = ZX();
    let d = useAtomWithSubscription($$S6);
    let {
      libraryKey: _libraryKey,
      pageId: _pageId,
      folderPath: _folderPath,
      visualAssetsType: _visualAssetsType
    } = e;
    let [g] = ye();
    let f = g ? _folderPath : void 0;
    let T = useCallback(({
      libraryKey: e,
      pageId: r,
      folderPath: n,
      visualAssetsType: i
    }) => {
      t({
        libraryKey: e,
        pageId: r,
        folderPath: n,
        visualAssetsType: i
      });
    }, [t]);
    let I = useCallback(() => {
      setLastNavAction(r6.Back);
      s && o(!1);
      t({});
    }, [setLastNavAction, s, t, o]);
    let A = useMemo(() => r ? "Search" : s ? "Recents" : _visualAssetsType ? "Visual assets" : _libraryKey ? _pageId ? "Page" : "Library" : "All libraries", [r, s, _libraryKey, _pageId, _visualAssetsType]);
    return {
      ...useMemo(() => v({
        currentView: A,
        libraryKey: _libraryKey,
        pageId: _pageId,
        folderPath: f,
        visualAssetsType: _visualAssetsType
      }, "Blocks" === d), [d, A, f, _libraryKey, _pageId, _visualAssetsType]),
      setNavigationState: T,
      clearNavigationState: I,
      setIsViewingRecents: o,
      setIsSearching: a
    };
  }();
  let {
    getLibrary,
    getPage,
    getFolder
  } = useAssetPanelContext();
  let {
    setLastNavAction,
    lastActionWasBackSwipe
  } = ZX();
  let O = _$$q();
  let R = useAtomWithSubscription(lj);
  let [L, P] = useAtomValueAndSetter(T);
  let D = useAtomWithSubscription($$S6);
  let k = useMemo(() => !!libraryKey && R.includes(libraryKey), [libraryKey, R]);
  let M = useCallback(({
    newNavigationState: n,
    isViewingRecents: i,
    isSearching: a
  }) => {
    let {
      libraryKey: _libraryKey2,
      pageId: _pageId2,
      folderPath: _folderPath2,
      visualAssetsType: _visualAssetsType2
    } = n ?? {
      libraryKey,
      pageId,
      folderPath
    };
    let u = i ?? "Recents" === currentView;
    return a ?? "Search" === currentView ? _libraryKey2 ? {
      view: "Library",
      libraryKey: _libraryKey2,
      isSearching: !0
    } : _visualAssetsType2 ? {
      view: "Visual assets",
      visualAssetsType: _visualAssetsType2,
      isSearching: !0
    } : {
      view: "All libraries",
      isSearching: !0
    } : u ? {
      view: "Recents",
      isSearching: !1
    } : _visualAssetsType2 ? {
      view: "Visual assets",
      isSearching: !1,
      visualAssetsType: _visualAssetsType2
    } : _folderPath2 ? {
      view: "Folder",
      libraryKey: _libraryKey2,
      pageId: _pageId2,
      folderPath: _folderPath2.join(" / "),
      isSearching: !1
    } : _pageId2 ? {
      view: "Page",
      libraryKey: _libraryKey2,
      pageId: _pageId2,
      isSearching: !1
    } : _libraryKey2 ? {
      view: "Library",
      libraryKey: _libraryKey2,
      isSearching: !1
    } : {
      view: "All libraries",
      isSearching: !1
    };
  }, [currentView, folderPath, libraryKey, pageId]);
  let F = useMemo(() => v({
    currentView,
    libraryKey,
    pageId,
    folderPath,
    visualAssetsType
  }, "Blocks" === D), [currentView, libraryKey, pageId, folderPath, visualAssetsType, D]);
  let j = usePreviousValue(F);
  let U = useCallback(e => (clearNavigationState(), P(!1), setLastNavAction(r6.Back, e), M({
    newNavigationState: {}
  })), [clearNavigationState, M, setLastNavAction, P]);
  let [B, G] = useMemo(() => {
    if (!libraryKey) return [!1, !1];
    let n = getLibrary(libraryKey);
    if (!n) return [!1, !1];
    let i = getPage(libraryKey, pageId);
    return i ? [!!$$x0(n), !!$$N11(i.assets) && !!folderPath] : [!1, !1];
  }, [folderPath, getLibrary, getPage, libraryKey, pageId]);
  let V = useCallback((e, t = r6.Forward, r = !1) => (clearNavigationState(), setLastNavAction(t, r), setNavigationState({
    visualAssetsType: e
  }), P(!0), M({
    newNavigationState: {
      visualAssetsType: e
    }
  })), [clearNavigationState, setLastNavAction, M, setNavigationState, P]);
  let {
    navigateToLibrary,
    navigateToPage,
    navigateToPath
  } = useMemo(() => {
    let r = (e, t = r6.Forward, r) => {
      let i = getLibrary(e);
      if (O(e)) {
        setNavigationState({
          libraryKey: e
        });
        return M({
          newNavigationState: {
            libraryKey: e
          }
        });
      }
      if (i) {
        if (1 === i.pages.size) {
          let [a] = Array.from(i.pages.keys());
          return t === r6.Forward ? n(a, e, t, r) : k && t === r6.Back && L ? V(j?.visualAssetsType ?? "icon_sets", r6.Back, r) : U(r);
        }
        setLastNavAction(t, r);
        "Recents" === currentView && setIsViewingRecents(!1);
        setNavigationState({
          libraryKey: e
        });
        return M({
          newNavigationState: {
            libraryKey: e
          },
          isViewingRecents: !1
        });
      }
    };
    let n = (t, n = libraryKey, a = r6.Forward, o) => {
      let d = getPage(n, t);
      if (!d || !n) return;
      let u = $$N11(d.assets);
      return u ? a === r6.Forward ? i([u.name], t, n, a, o) : r(n, r6.Back, o) : (setLastNavAction(a, o), "Recents" === currentView && setIsViewingRecents(!1), setNavigationState({
        libraryKey: n,
        pageId: t
      }), M({
        newNavigationState: {
          libraryKey: n,
          pageId: t
        },
        isViewingRecents: !1
      }));
    };
    let i = (r, a = pageId, s = libraryKey, o = r6.Forward, d) => {
      if (!r || 0 === r.length) {
        if (!a) return;
        return n(a, s, o, d);
      }
      let u = getFolder(s, a, r);
      if (!u) return;
      let p = $$N11(u);
      return p ? o === r6.Forward ? i([...r, p.name], a, s, o, d) : i(r.slice(0, -1), a, s, r6.Back, d) : (setLastNavAction(o, d), setNavigationState({
        libraryKey: s,
        pageId: a,
        folderPath: r
      }), M({
        newNavigationState: {
          libraryKey: s,
          pageId: a,
          folderPath: r
        }
      }));
    };
    return {
      navigateToLibrary: r,
      navigateToPage: n,
      navigateToPath: i
    };
  }, [getLibrary, O, setLastNavAction, currentView, setNavigationState, M, k, L, U, V, j?.visualAssetsType, setIsViewingRecents, libraryKey, getPage, pageId, getFolder]);
  let K = useCallback(e => navigateToPath([...(folderPath ?? []), e]), [folderPath, navigateToPath]);
  let Y = useCallback(n => {
    if ("Blocks" !== D || !n) switch (setLastNavAction(r6.Back, n), currentView) {
      case "Search":
        setIsSearching(!1);
        return M({
          isSearching: !1
        });
      case "Recents":
        setIsViewingRecents(!1);
        return M({
          isViewingRecents: !1
        });
      case "Page":
        if (folderPath && folderPath.length > 0) return navigateToPath(folderPath.slice(0, -1), pageId, libraryKey, r6.Back, n);
        return navigateToLibrary(libraryKey, r6.Back, n);
      case "Library":
        if (L) {
          P(!1);
          return V(j?.visualAssetsType ?? "icon_sets");
        }
        return U(n);
      case "Visual assets":
        return U(n);
    }
  }, [D, setLastNavAction, currentView, setIsSearching, M, setIsViewingRecents, folderPath, navigateToLibrary, libraryKey, L, U, navigateToPath, pageId, P, V, j?.visualAssetsType]);
  let $ = useCallback(n => libraryKey && pageId ? -1 === n ? navigateToPage(pageId, libraryKey, r6.Back) : folderPath && !(n >= folderPath.length) ? navigateToPath(folderPath.slice(0, n + 1), pageId, libraryKey, r6.Back) : void 0 : void 0, [folderPath, libraryKey, navigateToPage, navigateToPath, pageId]);
  let X = useCallback(() => (setLastNavAction(r6.Forward), setIsViewingRecents(!0), M({
    isViewingRecents: !0
  })), [setLastNavAction, setIsViewingRecents, M]);
  let q = useCallback(() => {
    setLastNavAction(r6.Forward);
    setIsSearching(!0);
  }, [setLastNavAction, setIsSearching]);
  let J = useCallback(() => {
    if (j && lastActionWasBackSwipe) {
      let {
        currentView: _currentView,
        ...t
      } = j;
      setLastNavAction(r6.Forward);
      setNavigationState(t);
      "Recents" === _currentView ? setIsViewingRecents(!0) : setIsViewingRecents(!1);
      return M({
        newNavigationState: t,
        isViewingRecents: "Recents" === _currentView
      });
    }
  }, [M, lastActionWasBackSwipe, j, setIsViewingRecents, setLastNavAction, setNavigationState]);
  return {
    ...v({
      currentView,
      libraryKey,
      pageId,
      folderPath,
      visualAssetsType
    }, "Blocks" === D),
    isCurrentlySkippingPage: B,
    isCurrentlySkippingFirstFolder: G,
    onBack: Y,
    navigateBackToPathIndex: $,
    navigateToLibrary,
    navigateToPage,
    navigateToFolder: K,
    navigateToPath,
    navigateToRecents: X,
    navigateToVisualAssets: V,
    navigateToTop: U,
    startSearch: q,
    forwardSwipe: J,
    isNavigatingVisualAssets: L
  };
}
export function $$x0(e) {
  return 1 === e.pages.size ? Array.from(e.pages.values())[0] : void 0;
}
export function $$N11(e) {
  if (e.key === ASSET_TYPE && 1 === e.subtrees.size && 0 === e.items.length) {
    let t = Array.from(e.subtrees.values())[0];
    return t.name.toLowerCase() === e.name.toLowerCase() ? t : void 0;
  }
}
let C = createTrackedAtom(void 0);
export function $$w7(e) {
  atomStoreManager.set(C, e);
}
export function $$O8() {
  let [e, t] = useAtomValueAndSetter(C);
  let {
    getLibrary
  } = useAssetPanelContext();
  let a = useMemo(() => getLibrary(e), [getLibrary, e]);
  let s = _$$q();
  let {
    navigateToLibrary
  } = $$A10();
  useEffect(() => {
    e && (a || s(e)) && (navigateToLibrary(e), t(void 0));
  }, [s, a, e, navigateToLibrary, t]);
}
export function $$R2() {
  let {
    lastNavAction
  } = ZX();
  let {
    libraryKey,
    pageId,
    folderPath,
    visualAssetsType
  } = $$A10();
  let s = usePreviousValue(libraryKey);
  let o = usePreviousValue(pageId);
  let l = usePreviousValue(folderPath);
  let d = usePreviousValue(visualAssetsType);
  return lastNavAction === r6.Back ? {
    previousLibraryKey: s,
    previousPageId: o,
    previousFolderPath: l,
    previousVisualAssetsType: d
  } : {};
}
export function $$L5() {
  let {
    libraryKey
  } = $$A10();
  let {
    getLibrary
  } = useAssetPanelContext();
  return useMemo(() => getLibrary(libraryKey)?.type === ModeType.SITE, [getLibrary, libraryKey]);
}
export const Cg = $$x0;
export const G3 = $$m1;
export const RR = $$R2;
export const S5 = $$g3;
export const W9 = $$y4;
export const _m = $$L5;
export const aK = $$S6;
export const dH = $$w7;
export const sH = $$O8;
export const t6 = $$f9;
export const wV = $$A10;
export const xc = $$N11;