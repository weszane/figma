import { jsx, Fragment } from "react/jsx-runtime";
import { createContext, useCallback, useRef, useState, useMemo, useLayoutEffect, useEffect } from "react";
import { d4, wA } from "../vendor/514228";
import { YEY, Lov, Ez5, h3O, _em, dNx, Z6A } from "../figma_app/763686";
import { Xy, AD } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { md, Xr, eU, fp } from "../figma_app/27355";
import { A as _$$A } from "../vendor/90566";
import { sn } from "../905/542194";
import { p as _$$p } from "../figma_app/516794";
import { am } from "../figma_app/901889";
import { Uz, Te } from "../905/63728";
import { yZ } from "../905/407352";
import { jN } from "../figma_app/930338";
import { Fk } from "../905/125333";
import { t as _$$t } from "../905/303541";
import { NY } from "../figma_app/712525";
import { lg } from "../figma_app/976749";
import { r as _$$r } from "../figma_app/860474";
import { jr, W0, VA } from "../figma_app/896988";
import { q } from "../905/807667";
import { Z } from "../905/104740";
import { Uc } from "../figma_app/741237";
import { L3 } from "../figma_app/701001";
import { p8 } from "../figma_app/722362";
import { lH } from "../figma_app/623300";
import { FFileType } from "../figma_app/191312";
import { H1 as _$$H } from "../figma_app/451700";
import { kM } from "../figma_app/421886";
import { iW } from "../figma_app/34798";
import { cJ } from "../905/561485";
import { Nl } from "../figma_app/115923";
import { H as _$$H2 } from "../9410/748457";
import { kH } from "../figma_app/463678";
export let $$P2 = createContext(!1);
export function $$F12({
  onChange: e,
  query: t,
  focusedByButtons: i,
  innerRef: n,
  onKeyDown: a,
  onKeyUp: s,
  onPasteCapture: o,
  onFocus: l,
  editorType: d
}) {
  return jsx(Fragment, {
    children: jsx(_$$H2, {
      ariaDescription: _$$t("canvas_search.results_will_update_as_you_type"),
      dataTestId: "canvas-search-input",
      innerRef: n,
      onChange: e,
      onFocus: e => {
        l && l(e);
        !i.current && e.target && e.target.select();
        i.current = !1;
      },
      onKeyDown: e => {
        e.keyCode === Uz.F ? Te(e) ? (e.currentTarget.select(), e.preventDefault()) : jr(e, W0.NO, VA.NO) && e.stopPropagation() : a(e);
      },
      onKeyUp: s,
      onPasteCapture: o,
      placeholder: _$$t("canvas_search.search_placeholder"),
      recordingKey: `${d}.canvas_search.search`,
      value: t
    })
  });
}
export function $$B0(e, t, i) {
  let r = useCallback(({
    direction: r,
    shouldSelectInput: n
  }) => {
    if (e && !e.current?.matches(":focus")) {
      let t = new IntersectionObserver(r => {
        let [a] = r;
        n ? e.current?.select() : (i.current = !0, e.current?.focus());
        a.isIntersecting && t.disconnect();
      });
      e.current && t.observe(e.current);
      return () => t.disconnect();
    }
    r && t(r, "keyboard");
  }, [i, e, t]);
  _$$p(_$$r.FocusEvent, r);
}
export function $$U1() {
  let e = useRef(!1);
  let [t, i] = useState(!0);
  let {
    query
  } = d4(e => e.canvasSearch);
  let {
    total
  } = md(Fk);
  return {
    focusedByButtons: e,
    hidden: t,
    setHidden: i,
    inputRef: useRef(null),
    navDisabled: !query || total <= 1,
    showUi: p8("showUi")
  };
}
export function $$G5() {
  let e = Z("canvas_search_navigate");
  let t = d4(e => e.canvasSearch.scope);
  return useCallback((i, r) => {
    e(YEY.setActiveResultAndGetViewportSettings(i, r), {
      additionalTrackEventParams: {
        searchScope: Lov[t]
      }
    });
  }, [e, t]);
}
export function $$K7() {
  let e = Z("canvas_search_navigate");
  let {
    query,
    scope,
    filters,
    mode
  } = d4(e => e.canvasSearch);
  let p = wA();
  let m = useRef(!1);
  let _ = p8("currentPage");
  let x = L3();
  let b = p8("pagesList");
  let [C, v] = useState(!1);
  let [k, N] = useState(Ez5.uiState().isRecovery.getCopy());
  let [A, O] = useState(!1);
  let D = H();
  let M = am();
  let P = yZ();
  let F = useMemo(() => P && lH(b), [P, b]) || P && h3O?.isValidatingIncremental();
  let B = useMemo(() => !P && lH(b), [P, b]);
  useLayoutEffect(() => {
    scope !== Lov.ALL_PAGES || A || !F && k ? YEY.setSearchScope(scope) : (O(!0), scheduler.postTask(async () => {
      F && (await q(_em.FIND_AND_REPLACE));
      YEY.setSearchScope(scope);
      N(!0);
    }, {
      priority: "user-blocking"
    }));
  }, [k, b, scope, A, F]);
  let U = useCallback(async (t, r = !0) => {
    sn.start("canvas_search_time_to_results");
    O(!0);
    let {
      nav,
      resultsByPage
    } = await D(t, r);
    Object.keys(resultsByPage).filter(e => e !== _ && e !== Xy).length ? v(!0) : v(!1);
    O(!1);
    r && e(nav, {
      additionalTrackEventParams: {
        searchScope: Lov[scope]
      }
    });
    let l = sn.tryStop("canvas_search_time_to_results");
    l && M("canvas_search_time_to_results", {
      timeElapsedMs: l,
      searchScope: Lov[scope],
      resultCount: Object.values(resultsByPage).reduce((e, t) => e += t.length, 0)
    });
  }, [_, e, scope, D, M]);
  let G = _$$A(U, 300);
  let K = useCallback((e, t = !0) => {
    p(NY(e));
    O(!!e && !jN(e));
    G(e, t);
  }, [p, G]);
  useEffect(() => {
    x && query && (scope !== Lov.ALL_PAGES || !F && k) && U(query, !1);
  }, [filters, mode, scope, x, b, k, F]);
  let z = useCallback((t, i) => {
    Uc("");
    YEY.setHoveredResult(AD, -1);
    let r = !m.current;
    m.current = !1;
    e(YEY.setNextSearchResultAndGetViewportSettings(t, r), {
      additionalTrackEventParams: {
        source: i
      }
    });
  }, [e]);
  let V = Xr(Nl);
  let W = cJ();
  return {
    query,
    showSearch: x,
    resultsOnOtherPages: C,
    search: K,
    next: z,
    exit: useCallback(() => {
      W ? V(void 0) : YEY?.exitSearchMode(dNx.NONE);
    }, [W, V]),
    setNavigateNearestOnce: function () {
      m.current = !0;
    },
    mode,
    isLoading: A,
    allInstancesExpanded: k,
    missingResultsOnSomePages: B
  };
}
function H() {
  let {
    scope,
    filters,
    mode
  } = d4(e => e.canvasSearch);
  let r = p8("currentPage");
  let l = am();
  let d = lg();
  let c = d4(e => e.mirror.appModel.pagesList);
  let u = iW();
  return useCallback(async (n, a = !0, p) => {
    let h = p ?? r;
    if (!n || jN(n)) {
      let {
        nav
      } = YEY.setSearchResultsAndGetViewportSettings([], h, "", {
        categories: [],
        mode
      });
      return {
        nav,
        resultsByPage: {}
      };
    }
    let m = !!filters[kM.MatchCase];
    let f = !!filters[kM.WholeWords];
    let {
      resultsByPage,
      metrics
    } = await _$$H.search(n, {
      searchLayerNames: [FFileType.DESIGN, FFileType.SLIDES, FFileType.SITES].includes(d),
      searchAnnotationTextContent: u,
      matchCase: m,
      wholeWords: f
    });
    let y = kH(filters);
    let b = scope === Lov.ACTIVE_PAGE ? resultsByPage[h] ? [{
      pageId: h,
      results: resultsByPage[h]
    }] : [] : Object.keys(resultsByPage).map(e => ({
      pageId: e,
      results: resultsByPage[e]
    }));
    if (scope === Lov.ACTIVE_PAGE && resultsByPage[Xy]) {
      let e = resultsByPage[Xy];
      e.length && b.push({
        pageId: Xy,
        results: e
      });
    }
    if (1 === n.length) {
      let e = 0;
      let t = [];
      let i = b.findIndex(e => e.pageId === Xy);
      for (let r of (i > -1 && t.push(b[i]), c)) {
        let i = b.findIndex(e => e.pageId === r.nodeId);
        if (-1 === i) continue;
        let n = b[i];
        if (n.results.length > 1e3 - e) {
          t.push({
            results: n.results.slice(0, 1e3 - e),
            pageId: n.pageId
          });
          break;
        }
        e += n.results.length;
        t.push(n);
      }
      b = t;
    }
    let {
      nav,
      ...v
    } = YEY.setSearchResultsAndGetViewportSettings(b, h, n, {
      categories: y,
      mode
    });
    let E = y.map(e => kM[e]);
    l("canvas_search_results", {
      ...metrics,
      ...v,
      nodeTypes: E,
      searchScope: Lov[scope],
      matchCase: m,
      wholeWords: f
    });
    return {
      nav,
      resultsByPage
    };
  }, [r, d, filters, mode, c, scope, u, l]);
}
export function $$z9() {
  let e = L3();
  let t = YEY.hasDirtyPrimaryInstances();
  let i = md(Fk);
  let r = useRef([]);
  let a = t && r.current.length;
  let o = useMemo(() => {
    if (!e || !i.total || a) return [];
    let t = YEY.getSearchResults();
    let n = [];
    t.forEach(e => {
      let t = e.results.map(e => {
        let t = getSingletonSceneGraph().get(e.guid);
        return t ? {
          ...e,
          textContent: t.textContent,
          name: t.name
        } : e;
      });
      n.push({
        results: t,
        pageId: e.pageId
      });
    });
    r.current = n;
    return n;
  }, [i, e, a]);
  return a ? r.current : o;
}
export function $$V6(e) {
  return !e.clientX && !e.clientY;
}
export function $$W4() {
  let {
    query,
    scope
  } = d4(e => e.canvasSearch);
  let i = H();
  return useCallback(r => {
    let n = YEY.getActiveResult();
    let a = n.type === Z6A.CANVAS;
    let o = r || a && n.guid;
    return !!o && (getSingletonSceneGraph().setCurrentPageAsync(o).then(() => {
      scope === Lov.ACTIVE_PAGE ? i(query, !1, o) : YEY.setActiveResultAndGetViewportSettings(o, 0);
    }), !0);
  }, [query, scope, i]);
}
let Y = eU(null);
export function $$J11() {
  return fp(Y);
}
export function $$q10() {
  let e = Xr(Y);
  return useCallback(t => {
    t?.detail && e(null);
  }, [e]);
}
export function $$X3() {
  let e = Xr(Y);
  return useCallback(t => {
    t?.detail || e(t.currentTarget);
  }, [e]);
}
export function $$Z8() {
  let [e, t] = $$J11();
  return useCallback(i => {
    i && e && i?.id === e?.id && (t(null), i?.focus());
  }, [e, t]);
}
export const A5 = $$B0;
export const CT = $$U1;
export const EA = $$P2;
export const H1 = $$X3;
export const II = $$W4;
export const L4 = $$G5;
export const SK = $$V6;
export const SQ = $$K7;
export const VK = $$Z8;
export const WB = $$z9;
export const aH = $$q10;
export const bL = $$J11;
export const ih = $$F12;