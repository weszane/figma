import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { AppStateTsApi, SceneGraphHelpers, Fullscreen, ViewType } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { defaultSessionLocalIDString } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { useAtomValueAndSetter, atom } from "../figma_app/27355";
import c from "../vendor/128080";
import { trackFileEventWithStore } from "../figma_app/901889";
import { initializeStub } from "../figma_app/757801";
import { Ns, isInteractionPathCheck } from "../figma_app/897289";
import { kG } from "../figma_app/327588";
import { fullscreenValue } from "../figma_app/455680";
import { useSceneGraphSelection, useAppModelProperty } from "../figma_app/722362";
import { useSyncedRef } from "../905/633914";
import { U3 } from "../figma_app/412189";
import { getObservableValue, getObservableOrFallback } from "../figma_app/84367";
import { useStrictDeepEqualSceneValue, useDeepEqualSceneValue } from "../figma_app/167249";
import { I as _$$I } from "../figma_app/827540";
import { _j as _$$_j, Wh } from "../figma_app/524655";
import { N8 } from "../figma_app/784857";
var u = c;
export function $$w2({
  shouldIndentChildren: e,
  focusedItemId: t,
  exclusivelySelectItemId: i,
  isInFocusView: l,
  initialSelectedItemIds: c,
  focusNodeInView: f,
  collapsedStatesDisabled: C,
  explicitlyToggledRef: w
}) {
  let j = getObservableValue(AppStateTsApi?.canvasGrid().canvasGridArray, []);
  let {
    carouselItemsById,
    carouselItemGuids,
    toggleCollapsed,
    expandParent
  } = $$A3(j, e, C, w);
  let {
    selectedItemIds,
    onMouseDownItem,
    onMouseUpItem
  } = function (e, t, i, l, c, u, p, h) {
    let m = useSceneGraphSelection();
    let [f, x] = useState(l);
    let C = e.indexOf(f);
    let w = getObservableOrFallback(AppStateTsApi.singleSlideView().isCarouselFocused);
    let j = useSelector(e => e.isRenaming);
    useEffect(() => {
      1 === Object.keys(m).length && (u ? x(l) : x(Object.keys(m)[0]));
    }, [l, w, u, m]);
    let [I, k] = useAtomValueAndSetter(S);
    useEffect(() => () => {
      k("");
    }, [k]);
    let A = useCallback(e => {
      if (1 === p.length) return;
      let t = p.filter(t => t !== e);
      if (e === l) {
        let i = p.indexOf(e);
        let r = i > t.length - 1 ? t.length - 1 : i;
        h(t[r], !0);
        SceneGraphHelpers.addToSelection(p);
      }
      k("");
      SceneGraphHelpers.removeFromSelection([e]);
    }, [p, l, k, h]);
    let O = useCallback(e => {
      k("");
      e === l || p.includes(e) || SceneGraphHelpers.addToSelection([e]);
    }, [l, p, k]);
    let L = useCallback(e => {
      p.includes(e) ? A(e) : O(e);
    }, [p, A, O]);
    let R = _$$I();
    U3("keydown", r => {
      if (!N8() || Fullscreen.isInCursorChat() || !w || R || j || function (e, t, i, r) {
        if (1 === t.length && "string" == typeof t[0]) {
          let n = t[0];
          let a = i[n];
          if (a) {
            let t = "ArrowRight" === e.key && a.isCollapsed;
            let i = "ArrowLeft" === e.key && !a.isCollapsed;
            if ((t || i) && a.children.length > 0) {
              e.preventDefault();
              r(n);
              return !0;
            }
          }
        }
        return !1;
      }(r, p, t, i) || function (e, t, i, r, n) {
        if (e.metaKey && ("[" === e.key || "]" === e.key)) {
          let o = t[r];
          if (!o) {
            e.stopPropagation();
            return !1;
          }
          let l = t.filter((e, t) => !i.includes(e) || t === r);
          let d = "[" === e.key ? -1 : 1;
          l = function (e, t, i) {
            let r = [...e];
            if (e.length < 2) return r;
            let n = r.indexOf(t);
            if (-1 === n || 0 === n && -1 === i || n === e.length - 1 && 1 === i) return r;
            let a = n + i;
            if (void 0 === r[n] || void 0 === r[a]) return r;
            let s = r[n];
            r[n] = r[a];
            r[a] = s;
            return r;
          }(l, o, d);
          permissionScopeHandler.user("reorder-slides-ssv", () => {
            if (AppStateTsApi) {
              let e = _$$_j(i, l, 0, n, t);
              AppStateTsApi.canvasGrid().setGridOrder(e);
              fullscreenValue.commit();
            }
          });
          e.stopPropagation();
          return !0;
        }
        return !1;
      }(r, e, p, C, t)) return;
      let n = $$N1(r);
      if (!n) return;
      r.stopPropagation();
      let o = e.indexOf(I);
      let l = -1 !== o ? o : C;
      let d = l + ("BACK" === n ? -1 : 1);
      if (d < 0 ? d = 0 : d >= e.length && (d = e.length - 1), r.shiftKey && "N" !== r.key) {
        let t = !1;
        C < l ? t = "BACK" === n : C > l && (t = "NEXT" === n);
        t ? A(e[l]) : O(e[d]);
        k(e[d]);
      } else {
        c(e[d]);
        x(e[d]);
      }
    });
    return {
      selectedItemIds: p,
      onMouseDownItem: (t, i) => {
        if (t.metaKey || f === defaultSessionLocalIDString) {
          p.includes(i) || x(i);
          L(i);
        } else if (t.shiftKey) {
          let t = e.indexOf(f);
          let r = e.indexOf(i);
          if (I) {
            let i = e.indexOf(I);
            let r = e.slice(Math.min(t, i), Math.max(t, i) + 1);
            SceneGraphHelpers.removeFromSelection(r);
          }
          let n = e.slice(Math.min(t, r), Math.max(t, r) + 1);
          SceneGraphHelpers.addToSelection(n);
          k(i);
        } else p.includes(i) || (c(i), x(i));
      },
      onMouseUpItem: (e, t, i, r) => {
        t || e.metaKey || e.shiftKey || !i || c(r);
      }
    };
  }(carouselItemGuids, carouselItemsById, toggleCollapsed, t, i, l, c, f);
  let [P, F] = useState("");
  let {
    onMouseDown,
    onMouseMove,
    onCarouselItemReorder,
    isDraggingCarouselItems,
    isClickingCarouselItems,
    detachedCarouselItemGuids,
    indentSelectionBy
  } = function (e, t, i, n, o, l) {
    let [d, c] = useState([]);
    let [f, _, b] = useSyncedRef(!1);
    let [C, v] = useState(null);
    let [T, w] = useState(!1);
    let [S, j] = useState(0);
    let I = trackFileEventWithStore();
    let k = "DRAGGING" === _ || "PENDING_CANVAS_GRID_UPDATE" === _;
    let N = "CLICKING" === _;
    let A = e => {
      initializeStub("slide.onMouseDown", {
        pageX: e.pageX,
        pageY: e.pageY
      });
      b("CLICKING");
      v([e.pageX, e.pageY]);
    };
    let O = r => {
      r.button && 0 !== r.button || c(t.filter(t => !e.includes(t) || t === i));
    };
    let L = e => {
      Ns() && initializeStub("slides.reorder", {
        indices: e.map(e => "number" == typeof n[e].number ? n[e].number - 1 : null)
      });
      c(t => u()(e, t) ? t : e);
      w(!0);
      fullscreenValue.commit();
    };
    let R = e => {
      e !== S && j(e);
    };
    let D = () => {
      k ? permissionScopeHandler.user("reorder-slides-ssv", () => {
        I("reorder_slides", {
          num_slides: e.length
        });
        let i = _$$_j(e, d, S, n, t);
        u()(i, o) ? b(!1) : (b("PENDING_CANVAS_GRID_UPDATE"), AppStateTsApi.canvasGrid().setGridOrder(i), fullscreenValue.commit());
      }) : b(!1);
    };
    return (useEffect(() => {
      "PENDING_CANVAS_GRID_UPDATE" === f.current && b(!1);
    }, [o, b, f]), isInteractionPathCheck() && (Wh.reorder = e => {
      L(e.map(e => t[e]));
    }, Wh.onMouseDown = A), U3("mouseup", () => {
      initializeStub("slide.onMouseUp", {});
      v(null);
      w(!1);
      D();
    }), l) ? {
      onMouseDown: () => {},
      onMouseMove: () => {},
      onCarouselItemReorder: () => {},
      isDraggingCarouselItems: !1,
      isClickingCarouselItems: !1,
      detachedCarouselItemGuids: [],
      indentSelectionBy: 0
    } : {
      onMouseDown: A,
      onMouseMove: e => {
        if (C && initializeStub("slide.onMouseMove", {
          pageX: e.pageX,
          pageY: e.pageY
        }), N && C && (Math.abs(C[0] - e.pageX) >= 20 || Math.abs(C[1] - e.pageY) >= 20) && (b("DRAGGING"), O(e)), k && C) {
          let t = d[d.indexOf(i) - 1];
          let r = T ? 50 : 20;
          let a = void 0 === t ? void 0 : n[t];
          let s = void 0 !== a && !a.isCollapsed;
          let o = C[0] - e.pageX;
          R(o < -r && s ? 1 : o > r ? -1 : 0);
        }
      },
      onCarouselItemReorder: L,
      isDraggingCarouselItems: k,
      isClickingCarouselItems: N,
      detachedCarouselItemGuids: d,
      indentSelectionBy: S
    };
  }(selectedItemIds, carouselItemGuids, P, carouselItemsById, j, useAppModelProperty("isReadOnly"));
  return useMemo(() => ({
    carouselItemsById,
    carouselItemGuids,
    toggleCollapsed,
    expandParent,
    selectedItemIds,
    onMouseUpItem,
    onMouseDownItem,
    onMouseDown,
    onMouseMove,
    onCarouselItemReorder,
    isDraggingCarouselItems,
    isClickingCarouselItems,
    detachedCarouselItemGuids,
    indentSelectionBy,
    hoveredItemId: P,
    setHoveredItemId: F
  }), [carouselItemsById, carouselItemGuids, toggleCollapsed, expandParent, selectedItemIds, onMouseUpItem, onMouseDownItem, onMouseDown, onMouseMove, onCarouselItemReorder, isDraggingCarouselItems, isClickingCarouselItems, detachedCarouselItemGuids, indentSelectionBy, P, F]);
}
let S = atom("");
export function $$j5() {
  let [e, t] = useAtomValueAndSetter(S);
  return useCallback(e => {
    t("");
    AppStateTsApi.singleSlideView().isFocusedNodeViewEnabled() ? AppStateTsApi.singleSlideView().focusNodeInFocusedNodeView(e, !0) : AppStateTsApi.singleSlideView().panToNode(e, .6);
    SceneGraphHelpers.replaceSelection([e], !0);
  }, [t]);
}
export function $$I4() {
  let [e, t] = useAtomValueAndSetter(S);
  let i = getObservableOrFallback(AppStateTsApi.cooperFocusView().focusedNodeId);
  let n = kG();
  return useCallback(e => {
    if (t(""), n) {
      if (i === e) {
        SceneGraphHelpers.replaceSelection([e], !0);
        return;
      }
      AppStateTsApi.cooperFocusView().focusNodeInFocusedNodeView(e, !0);
      SceneGraphHelpers.replaceSelection([e], !0);
    } else AppStateTsApi.cooperFocusView().panToNode(e, .6);
    SceneGraphHelpers.replaceSelection([e], !0);
  }, [t, i, n]);
}
export var $$k0 = (e => (e.NEXT = "NEXT", e.BACK = "BACK", e))($$k0 || {});
export function $$N1(e) {
  switch (e.key) {
    case "ArrowUp":
    case "ArrowLeft":
    case "N":
      return "BACK";
    case "ArrowDown":
    case "ArrowRight":
    case "n":
      return "NEXT";
    default:
      return null;
  }
}
export function $$A3(e, t, i, d) {
  var c;
  var u;
  var p;
  let h;
  let m;
  let f = useRef(e);
  useEffect(() => {
    f.current.flat().forEach(e => {
      let t = getSingletonSceneGraph().get(e);
      t && (t.isExpanded = !0);
    });
  }, []);
  let _ = useSelector(e => e.mirror.appModel.topLevelMode === ViewType.HISTORY);
  let {
    collapsedCarouselItemIds,
    skippedCarouselItemIds
  } = useStrictDeepEqualSceneValue((e, t) => t.flat().reduce((t, i) => {
    let r = e.get(i);
    r && !r.isExpanded && (t.collapsedCarouselItemIds[i] = !0);
    r && r?.isSkippedSlide && (t.skippedCarouselItemIds[i] = !0);
    return t;
  }, {
    collapsedCarouselItemIds: {},
    skippedCarouselItemIds: {}
  }), e);
  let b = AppStateTsApi?.canvasGrid().gridGUID();
  let v = useDeepEqualSceneValue((e, t) => !!b && (e.get(t)?.areSlidesManuallyIndented || !1), b ?? "");
  c = e;
  u = _ || i ? {} : collapsedCarouselItemIds;
  p = _ || i ? {} : skippedCarouselItemIds;
  h = 1;
  m = !1;
  1 === c.length && !v && t && (m = !0, c = c[0].map(e => [e]));
  let E = c.map((e, i) => {
    let [r, ...n] = e;
    return {
      guid: r,
      parentGuid: "",
      coord: m ? {
        row: 0,
        col: i
      } : {
        row: i,
        col: 0
      },
      number: p[r] ? null : h++,
      indent: 0,
      isCollapsed: !!u[r],
      children: n.map((e, n) => ({
        guid: e,
        parentGuid: r,
        coord: {
          row: i,
          col: n + 1
        },
        number: p[e] ? null : h++,
        indent: t ? 1 : 0,
        isCollapsed: !!u[e],
        children: []
      }))
    };
  });
  let {
    carouselItemsById,
    carouselItemGuids
  } = useMemo(() => {
    let t = {};
    E.forEach(e => {
      t[e.guid] = e;
      e.children.forEach(e => {
        t[e.guid] = e;
      });
    });
    let i = e.flat().filter(e => {
      let i = t[e];
      if (!i) return !1;
      let r = i.parentGuid ? getSingletonSceneGraph().get(i.parentGuid) : void 0;
      return 0 === i.indent || r?.isExpanded;
    });
    return {
      carouselItemsById: t,
      carouselItemGuids: i
    };
  }, [E, e]);
  useRef(carouselItemsById).current = carouselItemsById;
  let S = useCallback(e => {
    let t = getSingletonSceneGraph();
    let i = t.get(e);
    if (i) {
      if (i.isExpanded) {
        i.isExpanded = !1;
        let r = carouselItemsById[e];
        if (r && r.children && r.children.length > 0) {
          let e = r.children.map(e => e.guid);
          if (e.length > 0) {
            let i = t.getCurrentPage();
            let r = i?.directlySelectedNodes?.map(e => e.guid) || [];
            let n = e.filter(e => r.includes(e));
            n.length > 0 && SceneGraphHelpers?.removeFromSelection(n);
          }
        }
      } else i.isExpanded = !0;
      fullscreenValue.commit();
    }
  }, [carouselItemsById]);
  let j = useCallback(e => {
    if (i) return;
    let t = carouselItemsById[e];
    if (t && t.parentGuid && t.parentGuid !== defaultSessionLocalIDString) {
      let e = carouselItemsById[t.parentGuid];
      if (e && e.isCollapsed) {
        if (d && d.current && d.current.has(t.parentGuid)) return;
        permissionScopeHandler.user("expand-row-ssv", () => {
          let e = getSingletonSceneGraph().get(t.parentGuid);
          e && (e.isExpanded = !0, fullscreenValue.commit());
        });
      }
    }
  }, [carouselItemsById, i, d]);
  return {
    carouselItemsById,
    carouselItemGuids,
    toggleCollapsed: S,
    expandParent: j
  };
}
export const kV = $$k0;
export const _j = $$N1;
export const gU = $$w2;
export const EW = $$A3;
export const cm = $$I4;
export const po = $$j5;