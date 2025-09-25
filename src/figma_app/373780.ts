import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, createContext, useMemo, useRef, useContext, useCallback, memo, useSyncExternalStore, useLayoutEffect, useId, Children } from "react";
import { useSelector, useStore, useDispatch, shallowEqual } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import o from "classnames";
import { mergeRefs } from "../figma_app/706870";
import { useDebounce } from 'use-debounce';
import { h as _$$h, f as _$$f } from "../905/693155";
import { conditionalFeatureFlag } from "../figma_app/169182";
import { isAnyMobile } from "../figma_app/778880";
import { formatList } from "../figma_app/930338";
import { ErrorBoundaryCrash } from "../905/751457";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { mC } from "../905/193529";
import { e as _$$e } from "../905/810168";
import { k4 } from "../figma_app/290668";
import { EditorPreferencesApi } from "../figma_app/740163";
import { recordAccessibilityDomActive } from "../figma_app/682945";
import { computeFullscreenViewportForNode, getViewportInfo } from "../figma_app/62612";
import { getObservableValue, subscribeObservable, getObservableOrFallback } from "../figma_app/84367";
import { FEditorType } from "../figma_app/53721";
import { noop } from 'lodash-es';
import { useDebouncedCallback } from "use-debounce";
import { c1 } from "../figma_app/357047";
import { Q as _$$Q } from "../905/249555";
import { useIsCanvasEditDisabled } from "../905/595131";
import { EO, q4, dl, xR, U3, sh, qJ, ZG, it } from "../figma_app/536669";
import { documentStateTsApi, AccessibilityHelpers, AppMode, AppStateTsApi, SelectionMode, DesignGraphElements, CustomFocusHelpers, Fullscreen, SceneGraphHelpers, SceneNodeCpp, NodeTsApi, StateSourceType, LayoutTabType } from "../figma_app/763686";
import { deepEqual } from "../905/382883";
import { EventEmitter } from "../905/690073";
import { isNotNullish } from "../figma_app/95419";
import { debugState } from "../905/407919";
import { useDeepEqualSceneValue, useStrictDeepEqualSceneValue } from "../figma_app/167249";
import { selectSceneGraph, selectSceneGraphSelection } from "../figma_app/889655";
import { useAppModelProperty, useSceneGraphSelection } from "../figma_app/722362";
import { _ as _$$_, W as _$$W } from "../905/898204";
import { vF } from "../figma_app/290870";
import { a0, RG, rs } from "../figma_app/440994";
import { throwTypeError } from "../figma_app/465776";
import { AffineTransform } from "../905/583953";
import { selectWithShallowEqual } from "../905/103090";
import { Z as _$$Z } from "../905/104740";
import { g as _$$g } from "../905/88169";
import { x as _$$x } from "../905/97817";
import { g as _$$g2 } from "../905/388772";
import { x as _$$x2 } from "../905/520155";
import { showDropdownThunk } from "../905/929976";
import { K9 } from "../figma_app/8833";
import { fullscreenValue } from "../figma_app/455680";
import { replaceSelection } from "../figma_app/741237";
import { B5, tp, cU, cH, Z3 } from "../figma_app/80462";
import { s as _$$s2, w as _$$w } from "../figma_app/154255";
import { rp, d2, Dm } from "../905/845277";
import { useIsFullscreenOverview, useDevModeFocusId } from "../figma_app/88239";
import { of, Gl } from "../figma_app/297733";
import { logger } from "../905/651849";
import { getSelectedEditorType } from "../figma_app/976749";
import { IM } from "../905/687477";
import { kL, Qg } from "../figma_app/404319";
var l = o;
function O({
  children: e
}) {
  let [t, r] = useState(null);
  let a = useDebouncedCallback(() => r(!0), 500);
  let s = t ? noop : a;
  useEffect(s);
  return t && jsx("div", {
    className: _$$Q,
    role: "status",
    children: e
  });
}
function R() {
  let e = useSelector(e => e.mirror.appModel.keyboardShortcuts);
  if (useSelector(e => e.screenreader.enabled)) return null;
  let t = c1(e, "open-shortcuts").replace("?", getI18nString("general.question_mark"));
  let r = c1(e, "toggle-menu");
  return jsx(O, {
    children: renderI18nText("fullscreen.toolbar.screenreader_notice_figjam", {
      shortcut: t,
      quickActionsShortcut: r
    })
  });
}
let $$G = Symbol("SingleSelection");
let V = Symbol("MultipleSelection");
let H = createContext({
  emitter: new EventEmitter("AccessibleNodeChangeContext.default"),
  navigationTelemetryTag: void 0
});
function z({
  navigationTelemetryTag: e,
  nodeMapping: t,
  children: r
}) {
  let s = useMemo(() => new EventEmitter("AccessibleNodeChangeContext.initialized"), []);
  let o = useStore();
  let l = useSelector(selectSceneGraph);
  let d = useSelector(selectSceneGraphSelection);
  let c = useDeepEqualSceneValue(e => e.getCurrentPage()?.guid);
  let u = c ? documentStateTsApi.getActiveDocument() : void 0;
  let p = useRef({});
  let _ = useDebouncedCallback(() => {
    if (!c) return;
    let e = documentStateTsApi.getActiveDocument();
    let t = AccessibilityHelpers.flushChangedNodes(e);
    for (let e of (s.trigger("invalidate-accessible-nodes", [l, t]), t)) l.get(e) && s.trigger(`node-changed-${e}`, [l]);
  }, 500, {
    leading: !0,
    trailing: !0,
    maxWait: 1e3
  });
  useEffect(() => {
    if (deepEqual(d, p.current)) return;
    let e = Object.keys(d);
    let t = Object.keys(p.current);
    let r = e.length;
    let n = t.length;
    let i = new Set(t.filter(e => !(e in d)));
    let a = new Set(e.filter(e => !(e in p.current)));
    let o = 1 === r ? $$G : V;
    if (1 === r && 1 !== n) for (let e of Object.keys(d)) e in p.current && s.trigger(`selection-changed-${e}`, [o]);else if (1 === n && 1 !== r) for (let e of Object.keys(p.current)) e in d && s.trigger(`selection-changed-${e}`, [o]);
    for (let e of i) s.trigger(`selection-changed-${e}`, [void 0]);
    for (let e of a) s.trigger(`selection-changed-${e}`, [o]);
    p.current = d;
  }, [s, d]);
  useEffect(_);
  useEffect(() => {
    if (void 0 !== u) {
      AccessibilityHelpers.setMapping(u, t);
      return () => {
        AccessibilityHelpers.flushChangedNodes(u);
        AccessibilityHelpers.setMapping(u, AppMode.NONE);
      };
    }
  }, [u, t]);
  useEffect(() => {
    if (!c) return;
    let e = o.getState().mirror.sceneGraph;
    let t = e.get(c);
    t && s.trigger("invalidate-accessible-nodes", [e, [t.guid]]);
  }, [c, s, o]);
  let h = useMemo(() => ({
    emitter: s,
    navigationTelemetryTag: e
  }), [s, e]);
  return jsx(H.Provider, {
    value: h,
    children: r
  });
}
function W(e, t) {
  let r = useContext(H).emitter;
  let n = useRef(e);
  deepEqual(e, n.current) ? e = n.current : n.current = e;
  let a = useRef(t);
  a.current = t;
  let s = useCallback(t => {
    let r = e.map(e => isNotNullish(e) ? t.get(e) : null);
    return a.current.call(null, ...r);
  }, [e]);
  let [o, l] = useState(() => s(selectSceneGraph(debugState.getState())));
  useEffect(() => {
    let t = ([e]) => {
      let t = s(e);
      l(e => deepEqual(e, t) ? e : t);
    };
    for (let n of (t([selectSceneGraph(debugState.getState())]), e)) r.on(`node-changed-${n}`, t);
    return () => {};
  }, [s, r, e]);
  return o;
}
function K(e) {
  let t = useContext(H).emitter;
  let [r, n] = useState(() => {
    let t = selectSceneGraphSelection(debugState.getState());
    if (!t[e]) return;
    let r = 0;
    for (let e in t) if (Object.prototype.hasOwnProperty.call(t, e) && ++r > 1) break;
    return 1 === r ? $$G : V;
  });
  useEffect(() => {
    let r = ([e]) => n(e);
    t.on(`selection-changed-${e}`, r);
    return () => t.removeListener(`selection-changed-${e}`, r);
  }, [t, e]);
  return r;
}
function Y() {
  return useContext(H).navigationTelemetryTag;
}
function J({
  logAction: e,
  extractorCtor: t
}) {
  let r = useStore();
  let n = useMemo(() => new t(r), [r, t]);
  let s = _$$_(n, e);
  !function (e) {
    let t = useContext(H).emitter;
    let r = useRef(e);
    r.current = e;
    useEffect(() => {
      let e = e => r.current.call(null, ...e);
      t.on("invalidate-accessible-nodes", e);
      return () => t.removeListener("invalidate-accessible-nodes", e);
    }, [e, t]);
  }((e, t) => {
    let r = t.map(t => e.get(t)).filter(isNotNullish);
    s.updateDirtyNodes(r);
  });
  return s;
}
let Z = memo(function ({
  accessibilityLogAction: e,
  extractorCtor: t
}) {
  let r = J({
    extractorCtor: t,
    logAction: e
  });
  let {
    self,
    parent,
    child,
    next,
    prev,
    siblingCount,
    positionAmongSiblings
  } = function (e, t) {
    let {
      parentId,
      childId,
      prevId,
      nextId,
      selfId,
      siblingCount: _siblingCount,
      positionAmongSiblings: _positionAmongSiblings
    } = useStrictDeepEqualSceneValue((e, t, r) => {
      let n;
      let i;
      let a;
      let s = e.get(t);
      let o = s ? function (e, t) {
        let r = e?.parentNode ?? null;
        for (; r && t.adjacencies.get(r.guid)?.inclusion !== vF.INCLUDE;) r = r.parentNode;
        return r;
      }(s, r) : null;
      let l = o ? r.adjacencies.get(o.guid)?.childIds : [];
      l?.length && ((a = l.indexOf(t)) > 0 && (n = l[a - 1]), a < l.length - 1 && (i = l[a + 1]));
      let d = r.adjacencies.get(t)?.childIds?.[0];
      return {
        selfId: s?.guid,
        parentId: o?.type === "CANVAS" ? void 0 : o?.guid,
        prevId: n,
        nextId: i,
        childId: d,
        siblingCount: l?.length,
        positionAmongSiblings: a
      };
    }, e, t);
    return {
      parent: _$$W(parentId, t),
      child: _$$W(childId, t),
      next: _$$W(nextId, t),
      prev: _$$W(prevId, t),
      self: _$$W(selfId, t),
      siblingCount: _siblingCount,
      positionAmongSiblings: _positionAmongSiblings
    };
  }(function () {
    let e = AppStateTsApi?.accessibilityState().pickCursorFocusedNode;
    let t = getObservableValue(e, null);
    let r = useSelector(e => {
      let t = e.mirror.appModel.currentPage;
      return Object.keys(e.mirror.sceneGraphSelection)[0] || t;
    });
    return t || r || "-1:-1";
  }(), r);
  if (function () {
    let e = useAppModelProperty("currentTool");
    let t = getObservableValue(AppStateTsApi?.editorState().keyboardSelectMode, SelectionMode.BOX);
    return e === DesignGraphElements.KEYBOARD_SELECT && t === SelectionMode.BOX;
  }()) return null;
  let p = void 0 === positionAmongSiblings ? void 0 : positionAmongSiblings + 1;
  if (!self) return null;
  let _ = jsxs(Fragment, {
    children: [prev && jsx(prev.display, {
      nodeId: prev.guid,
      parentId: parent?.guid,
      setSize: siblingCount,
      posInSet: void 0 === p ? void 0 : p - 1
    }, prev.guid), jsx(self.display, {
      nodeId: self.guid,
      parentId: parent?.guid,
      setSize: siblingCount,
      posInSet: p,
      children: child && jsx(child.display, {
        nodeId: child.guid,
        parentId: self.guid
      }, child.guid)
    }, self.guid), next && jsx(next.display, {
      nodeId: next.guid,
      parentId: parent?.guid,
      setSize: siblingCount,
      posInSet: void 0 === p ? void 0 : p + 1
    }, next.guid)]
  });
  return parent ? jsx(parent.display, {
    nodeId: parent.guid,
    children: _
  }, parent.guid) : _;
});
class ee {
  constructor(e) {
    this.store = e;
  }
  get graph() {
    return this.store.getState().mirror.sceneGraph;
  }
  id(e) {
    return e.guid;
  }
  isRoot(e) {
    let t = this.parent(e);
    return !t || "DOCUMENT" === t.type;
  }
  parent(e) {
    let t = e.parentNode;
    return t && "DOCUMENT" !== t.type ? t : void 0;
  }
}
function ed({
  guid: e
}) {
  let {
    showResolved,
    showComments
  } = selectWithShallowEqual(e => ({
    showResolved: e.comments.showResolved,
    showComments: e.mirror.appModel.showComments
  }));
  let {
    absoluteTransform,
    size
  } = W([e], e => ({
    size: e?.size,
    absoluteTransform: e?.absoluteTransform
  }));
  let s = _$$x(e, showResolved);
  return showComments && s?.length ? jsx("div", {
    role: "group",
    "aria-label": getI18nString("fullscreen.accessibility.design.comments"),
    children: jsx(ec, {
      containerSize: size,
      containerTransform: absoluteTransform,
      threads: s
    })
  }) : null;
}
function ec({
  containerSize: e,
  containerTransform: t,
  threads: r
}) {
  let a = Y();
  let s = _$$Z(a);
  let o = _$$g2(s);
  let l = _$$x2(s);
  let d = useMemo(() => [...new Set(r.map(e => e.comments[0]?.client_meta?.stable_path).filter(isNotNullish))], [r]);
  let c = useStrictDeepEqualSceneValue((e, t) => {
    let r = JSON.parse(t);
    let n = new Map();
    for (let t of r) {
      let r = e.getFromStablePath(t);
      r && n.set(JSON.stringify(t), r.absoluteBoundingBox);
    }
    return n;
  }, JSON.stringify(d));
  return jsx(Fragment, {
    children: r.map((i, a) => {
      let s;
      let d = i.comments[0]?.client_meta;
      let u = d?.node_offset;
      let p = d?.selection_box_anchor ?? {
        x: 24,
        y: 24
      };
      let _ = c.get(JSON.stringify(d?.stable_path));
      if (u && _) {
        let r = AffineTransform.identity();
        r.translate(_.x, _.y);
        r.translate(u.x, u.y);
        s = EO(p, r.toFigMatrix(), e, t);
      } else s = {
        position: "absolute",
        inset: 0
      };
      return jsx(_$$g, {
        threadId: i.id,
        isDebugMode: !1,
        setPos: a + 1,
        setSize: r.length,
        onShowPin: () => o(i),
        onShowThread: () => l(i),
        pinStyles: s
      }, i.id);
    })
  });
}
function eu(e, t) {
  return t ? EO(t.size, t.absoluteTransform, e?.size, e?.absoluteTransform) : {};
}
function eE({
  nodeId: e
}) {
  let t = K(e) === $$G;
  let r = function (e) {
    let t = K(e) === $$G;
    let {
      isPickCursorFocusedOnNode,
      isPickCursorActive
    } = function (e) {
      let t = AppStateTsApi?.accessibilityState().pickCursorFocusedNode;
      let r = useCallback(() => t?.getCopy() === e, [t, e]);
      let n = useCallback(() => !!t?.getCopy(), [t]);
      let a = useCallback(e => t ? subscribeObservable(t, {
        onChangeImmediate: e
      }) : noop, [t]);
      let s = useSyncExternalStore(a, r);
      return {
        isPickCursorActive: useSyncExternalStore(a, n),
        isPickCursorFocusedOnNode: s
      };
    }(e);
    return isPickCursorActive ? isPickCursorFocusedOnNode : t;
  }(e);
  let n = conditionalFeatureFlag("fpl_canvas_keyboard_controls", r, t);
  let s = useDispatch();
  let o = Y();
  let l = _$$Z(o);
  let d = useRef(null);
  let c = _$$s2();
  let u = useCallback(t => {
    t.target !== t.currentTarget || t.relatedTarget === t.currentTarget || n || (replaceSelection([e]), fullscreenValue.commit(), l(computeFullscreenViewportForNode({
      nodeId: e,
      ...B5
    }), tp));
  }, [e, n, l]);
  let _ = useCallback(e => {
    e.preventDefault();
    s(showDropdownThunk({
      type: K9,
      data: {
        clientX: e.clientX,
        clientY: e.clientY
      }
    }));
  }, [s]);
  useLayoutEffect(() => {
    c.suppressed && document.activeElement !== document.body || !n || CustomFocusHelpers?.getExpectingTextInput() || d.current?.focus();
  }, [n, c]);
  let h = n ? 0 : -1;
  return useMemo(() => ({
    "data-fullscreen-intercept-dangerously-include-tab": !0,
    id: e,
    onContextMenu: _,
    onFocus: u,
    ref: d,
    tabIndex: h
  }), [e, _, u, h]);
}
function ey(e, t) {
  let r = function () {
    let e = AppStateTsApi?.accessibilityState().pickCursorFocusedNode;
    let t = useCallback(() => !!e?.getCopy(), [e]);
    let r = useCallback(t => e ? subscribeObservable(e, {
      onChangeImmediate: t
    }) : noop, [e]);
    return useSyncExternalStore(r, t);
  }();
  let n = void 0 !== K(t || "-1:-1");
  return useMemo(() => {
    let t = r && n ? getI18nString("fullscreen.accessibility_dom.selected") : void 0;
    let i = e ? Array.isArray(e) ? e : [e] : [];
    return formatList(t ? [...i, t] : i, "unit");
  }, [r, e, n]);
}
function eb({
  parentId: e,
  nodeId: t,
  children: r
}) {
  let {
    ariaLabel,
    style
  } = W([e, t], (e, t) => ({
    ariaLabel: function (e) {
      if (!e) return [getI18nString("fullscreen.accessibility.design.fallback")];
      let t = function (e) {
        switch (e.type) {
          case "FRAME":
            return getI18nString("fullscreen.accessibility.design.frame");
          case "SECTION":
            return getI18nString("fullscreen.accessibility.design.section");
          case "BOOLEAN_OPERATION":
            return function (e) {
              switch (e.booleanOperation) {
                case "UNION":
                  return getI18nString("fullscreen.accessibility.design.boolean_union");
                case "INTERSECT":
                  return getI18nString("fullscreen.accessibility.design.boolean_intersect");
                case "SUBTRACT":
                  return getI18nString("fullscreen.accessibility.design.boolean_subtract");
                case "XOR":
                  return getI18nString("fullscreen.accessibility.design.boolean_xor");
                case null:
                  return getI18nString("fullscreen.accessibility.design.boolean_group");
                default:
                  throwTypeError(e.booleanOperation);
              }
            }(e);
          case "SYMBOL":
            return getI18nString("fullscreen.accessibility.design.component");
          case "GROUP":
            if (e.frameMaskDisabled) return getI18nString("fullscreen.accessibility.design.group");
            return getI18nString("fullscreen.accessibility.design.mask_group");
          default:
            return;
        }
      }(e);
      return t ? [e.name, t] : [e.name];
    }(t),
    style: eu(e, t)
  }));
  let s = eE({
    nodeId: t
  });
  let o = ey(ariaLabel, t);
  return jsxs("div", {
    role: "group",
    "aria-label": o,
    "data-nodeid": t,
    "data-parentid": e,
    style,
    ...s,
    children: [r, jsx(ed, {
      guid: t
    })]
  });
}
function eT({
  parentId: e,
  nodeId: t,
  children: r
}) {
  let {
    ariaDescription,
    ariaLabel,
    style
  } = W([e, t], (e, t) => ({
    ariaLabel: t ? [t.name, getI18nString("fullscreen.accessibility.design.instance")] : [getI18nString("fullscreen.accessibility.design.fallback")],
    ariaDescription: function (e) {
      if (e) return `Component defined by ${e.mainComponent?.name}`;
    }(t),
    style: eu(e, t)
  }));
  let l = eE({
    nodeId: t
  });
  let d = useId();
  let c = ey(ariaLabel, t);
  return jsxs("div", {
    role: "group",
    "aria-label": c,
    "aria-describedby": d,
    "data-nodeid": t,
    "data-parentid": e,
    style,
    ...l,
    children: [jsx("span", {
      style: {
        display: "none"
      },
      id: d,
      children: ariaDescription
    }), r, jsx(ed, {
      guid: t
    })]
  });
}
function eS({
  parentId: e,
  nodeId: t
}) {
  let {
    name,
    style,
    textChildren
  } = W([e, t], (e, t) => {
    let r = q4(t);
    let n = t?.name;
    if (void 0 !== n && t?.autoRename) {
      let e = n.match(RegExp("(?:.+(?<=\\w)\\b){0,5}\\p{P}*", "u"));
      e && (n = e[0]);
    }
    return {
      name: n,
      style: eu(e, t),
      textChildren: rp(r, d2.SEMANTIC)
    };
  });
  let s = eE({
    nodeId: t
  });
  let o = ey(name, t);
  return jsxs("article", {
    "aria-label": o,
    style,
    ...s,
    children: [textChildren, jsx(ed, {
      guid: t
    })]
  });
}
function ev({
  parentId: e,
  nodeId: t,
  children: r
}) {
  let {
    name,
    style
  } = W([e, t], (e, t) => ({
    name: function (e) {
      if (!e) return [getI18nString("fullscreen.accessibility.design.fallback")];
      let t = function (e) {
        switch (e.type) {
          case "ELLIPSE":
            return getI18nString("fullscreen.accessibility.design.ellipse");
          case "RECTANGLE":
          case "ROUNDED_RECTANGLE":
            return getI18nString("fullscreen.accessibility.design.rectangle");
          case "WASHI_TAPE":
            return getI18nString("fullscreen.accessibility.design.washi_tape");
          case "HIGHLIGHT":
            return getI18nString("fullscreen.accessibility.design.highlight");
          case "STAR":
            return getI18nString("fullscreen.accessibility.design.star");
          case "REGULAR_POLYGON":
            return getI18nString("fullscreen.accessibility.design.regular_polygon");
          case "LINE":
            return getI18nString("fullscreen.accessibility.design.line");
          default:
            return getI18nString("fullscreen.accessibility.design.vector");
        }
      }(e);
      return [e.name, t];
    }(t),
    style: eu(e, t)
  }));
  let s = eE({
    nodeId: t
  });
  let o = ey(name, t);
  return jsxs("div", {
    role: "img",
    "aria-label": o,
    "data-nodeid": t,
    "data-parentid": e,
    style,
    ...s,
    children: [r, jsx(ed, {
      guid: t
    })]
  });
}
class eA extends ee {
  children(e) {
    return e.uiOrderedChildren.map(e => this.graph.get(e)).filter(isNotNullish);
  }
  interpret(e) {
    let t = this.decide(e);
    switch (t) {
      case a0:
        return {
          inclusion: vF.CHILDREN
        };
      case RG:
        return {
          inclusion: vF.OMIT
        };
      default:
        return {
          inclusion: vF.INCLUDE,
          display: t,
          guid: e.guid
        };
    }
  }
  decide(e) {
    if (!e.visible) return RG;
    switch (e.type) {
      case "SECTION_OVERLAY":
        return RG;
      case "SECTION":
      case "GROUP":
      case "FRAME":
      case "BOOLEAN_OPERATION":
      case "SYMBOL":
      case "CONNECTOR":
      case "WIDGET":
      case "STAMP":
      case "MEDIA":
      case "TABLE":
      case "TABLE_CELL":
      default:
        return eb;
      case "VECTOR":
      case "STAR":
      case "LINE":
      case "ELLIPSE":
      case "RECTANGLE":
      case "REGULAR_POLYGON":
      case "ROUNDED_RECTANGLE":
      case "HIGHLIGHT":
      case "WASHI_TAPE":
        return ev;
      case "CODE_BLOCK":
      case "TEXT":
      case "STICKY":
      case "SHAPE_WITH_TEXT":
        return eS;
      case "INSTANCE":
        return eT;
    }
  }
}
let ex = memo(function () {
  return jsx(z, {
    nodeMapping: AppMode.DESIGN,
    navigationTelemetryTag: "design_navigate",
    children: jsx(Z, {
      accessibilityLogAction: _$$h.DESIGN_UPDATE_NODE,
      extractorCtor: eA
    })
  });
});
let eC = memo(function () {
  let e = useIsFullscreenOverview();
  return useDevModeFocusId() && !e ? jsx(z, {
    nodeMapping: AppMode.DESIGN,
    navigationTelemetryTag: "devmode_navigate",
    children: jsx(Z, {
      accessibilityLogAction: _$$h.DEVMODE_UPDATE_NODE,
      extractorCtor: eA
    })
  }) : null;
});
class ew extends ee {
  children(e) {
    return dl(this.graph, e) ? [] : Fullscreen.getSortedChildGuids(e.guid).map(e => this.graph.get(e)).filter(isNotNullish);
  }
  interpret(e) {
    if (!e) return {
      inclusion: vF.OMIT
    };
    let t = "SECTION_OVERLAY" === e.type ? vF.OMIT : e.resizeToFit ? vF.CHILDREN : vF.INCLUDE;
    return t !== vF.INCLUDE ? {
      inclusion: t
    } : {
      ...eO(e),
      inclusion: t
    };
  }
  id(e) {
    return e.guid;
  }
  comparePayloads(e, t) {
    if (eR(e) && eR(t)) return shallowEqual(e.inclusion, t.inclusion);
    if (eR(e) || eR(t)) return !1;
    {
      let {
        transformProperties,
        directTextContent,
        innerTextContent,
        stampFrequencies,
        accessibleLabel,
        dimensions,
        absoluteTransform,
        ...c
      } = e;
      let {
        transformProperties: _transformProperties,
        directTextContent: _directTextContent,
        innerTextContent: _innerTextContent,
        stampFrequencies: _stampFrequencies,
        accessibleLabel: _accessibleLabel,
        dimensions: _dimensions,
        absoluteTransform: _absoluteTransform,
        ...E
      } = t;
      return shallowEqual(c, E) && shallowEqual(dimensions, _dimensions) && shallowEqual(absoluteTransform, _absoluteTransform) && shallowEqual(transformProperties, _transformProperties) && shallowEqual(stampFrequencies, _stampFrequencies) && shallowEqual(accessibleLabel, _accessibleLabel) && deepEqual(directTextContent, _directTextContent) && deepEqual(innerTextContent, _innerTextContent);
    }
  }
}
function eO(e) {
  let t = xR(SceneGraphHelpers.getNodeTransformProperties(e.guid));
  let r = U3(e);
  let n = sh({
    type: e.type,
    name: e.name
  });
  let i = q4(e);
  let a = q4(e.textSublayer);
  let s = SceneGraphHelpers.getStickableFrequencies(e.guid) || {};
  let o = e.accessibleLabel;
  let l = "TABLE" === e.type ? qJ(e) : null;
  let d = "SECTION" === e.type && e.sectionContentsHidden;
  return {
    guid: e.guid,
    type: e.type,
    author: e.authorVisible && e.authorName ? e.authorName : null,
    directTextContent: i,
    innerTextContent: a,
    tableCells: l,
    transformProperties: t,
    ariaRole: r,
    name: e.name,
    headerLabel: n,
    shapeType: "SHAPE_WITH_TEXT" === e.type ? e.shapeWithTextType : null,
    stampFrequencies: s,
    accessibleLabel: o,
    contentsHidden: d,
    absoluteTransform: e.absoluteTransform,
    dimensions: e.size
  };
}
function eR(e) {
  return void 0 !== e && "inclusion" in e && 1 === Object.keys(e).length;
}
function eL({
  accessibilityLogAction: e,
  extractorCtor: t,
  navigationTelemetryTag: r
}) {
  let i = useDeepEqualSceneValue(e => e.getCurrentPage()?.guid);
  let a = _$$Z(r);
  let s = getObservableOrFallback(EditorPreferencesApi().accessibilityDomDebug);
  let o = J({
    extractorCtor: t,
    logAction: e
  });
  return jsx(cU, {
    nodeId: i || "",
    accessibilityScope: o,
    navigate: a,
    isDebugMode: s,
    parent: void 0
  });
}
let eP = memo(function () {
  return jsx(z, {
    navigationTelemetryTag: "figjam_navigate",
    nodeMapping: AppMode.FIGJAM,
    children: jsx(eL, {
      accessibilityLogAction: _$$h.FIGJAM_UPDATE_NODE,
      extractorCtor: ew,
      navigationTelemetryTag: "figjam_navigate"
    })
  });
});
let eD = createContext({
  getLastEventWasTab: () => !1
});
function ek({
  children: e
}) {
  let t = useRef(!1);
  useEffect(() => {
    let e = () => {
      t.current = !1;
    };
    let r = ({
      key: e
    }) => {
      t.current = "Tab" === e;
    };
    document.addEventListener("pointerdown", e);
    document.addEventListener("pointermove", e);
    document.addEventListener("keydown", r);
    return () => {
      document.removeEventListener("pointerdown", e);
      document.removeEventListener("pointermove", e);
      document.removeEventListener("keydown", r);
    };
  }, []);
  let r = useCallback(() => t.current, []);
  let a = useMemo(() => ({
    getLastEventWasTab: r
  }), [r]);
  return jsx(eD.Provider, {
    value: a,
    children: e
  });
}
function eM({
  parentId: e,
  nodeId: t
}) {
  let {
    style,
    codeContent,
    lineNumbers
  } = W([e, t], (e, t) => {
    if (!t) return {
      style: eu(e, null),
      codeContent: "",
      lineNumbers: []
    };
    let r = t.childrenGuids?.[0];
    if (!r) return {
      style: eu(e, null),
      codeContent: "",
      lineNumbers: []
    };
    let n = t.sceneGraph.get(r);
    let i = "";
    let a = [];
    if (n) for (let e of n.childrenGuids) {
      let t = n.sceneGraph.get(e);
      t && ("Text" === t.name ? i = q4(t).characters || "" : "Line numbers" === t.name && (a = (q4(t).characters || "").split("\n").filter(e => "" !== e.trim())));
    }
    return {
      style: eu(e, t),
      codeContent: i,
      lineNumbers: a
    };
  });
  let s = eE({
    nodeId: t
  });
  return jsxs("figure", {
    style,
    ...s,
    children: [jsx("pre", {
      children: jsx("code", {
        children: codeContent
      })
    }), jsx("div", {
      className: "line-numbers",
      children: lineNumbers.map((e, t) => jsx("span", {
        children: e
      }, t))
    })]
  });
}
function eF({
  parentId: e,
  nodeId: t,
  children: r
}) {
  let {
    ariaLabel,
    style
  } = W([e, t], (e, t) => ({
    ariaLabel: function (e) {
      if (!e) return [getI18nString("fullscreen.accessibility.design.fallback")];
      let t = function (e) {
        if ("SLIDE" === e.type) return getI18nString("slides.a11y.node_type.slide", {
          orderNum: e.name
        });
      }(e);
      return t ? "SLIDE" === e.type ? [t] : [e.name, t] : [e.name];
    }(t),
    style: eu(e, t)
  }));
  let s = eE({
    nodeId: t
  });
  let o = ey(ariaLabel, t);
  return jsx("div", {
    role: "group",
    "aria-label": o,
    "data-nodeid": t,
    "data-testid": t,
    "data-parentid": e,
    style,
    ...s,
    children: r
  });
}
function ej({
  parentId: e,
  nodeId: t
}) {
  let {
    name,
    style,
    textChildren
  } = W([e, t], (e, t) => {
    if (!t) return {
      name: getI18nString("fullscreen.accessibility.design.fallback"),
      style: eu(e, null),
      textChildren: []
    };
    let r = t.shapeWithTextType;
    let n = q4(t.textSublayer);
    let i = rp(n, d2.SEMANTIC);
    return {
      name: r ? ZG(r) : getI18nString("fullscreen.accessibility_dom.node_name_shape"),
      style: eu(e, t),
      textChildren: i
    };
  });
  let s = eE({
    nodeId: t
  });
  return jsx("section", {
    "aria-label": name,
    "data-nodeid": t,
    "data-parentid": e,
    style,
    ...s,
    children: textChildren
  });
}
function eU({
  parentId: e,
  nodeId: t
}) {
  let r = useStore();
  let i = eE({
    nodeId: t
  });
  let {
    style,
    tableCellNodes
  } = W([e, t], (e, n) => {
    if (!n || "TABLE" !== n.type) return {
      style: eu(e, null),
      tableCellNodes: []
    };
    let i = qJ(n);
    let a = r.getState().mirror.sceneGraph;
    let s = Dm(a, t, i);
    return {
      style: eu(e, n),
      tableCellNodes: s
    };
  });
  return jsx("div", {
    role: "table",
    "aria-label": getI18nString("fullscreen.accessibility_dom.node_name_table"),
    style,
    ...i,
    children: tableCellNodes
  });
}
function eB({
  parentId: e,
  nodeId: t
}) {
  let {
    style
  } = W([e, t], (e, t) => t ? {
    style: eu(e, t)
  } : {
    style: eu(e, null)
  });
  let i = eE({
    nodeId: t
  });
  return jsx("figure", {
    "aria-label": getI18nString("slides.a11y.node_type.video"),
    "data-nodeid": t,
    "data-parentid": e,
    style,
    ...i
  });
}
class eG extends eA {
  interpret(e) {
    let t = this.decide(e);
    switch (t) {
      case a0:
        return {
          inclusion: vF.CHILDREN
        };
      case RG:
        return {
          inclusion: vF.OMIT
        };
      default:
        return {
          inclusion: vF.INCLUDE,
          display: t,
          guid: e.guid
        };
    }
  }
  children(e) {
    return !Fullscreen || dl(this.graph, e) ? [] : Fullscreen.getSortedChildGuids(e.guid).map(e => this.graph.get(e)).filter(isNotNullish);
  }
  decide(e) {
    if (!getFeatureFlags().slides_editor_a11y) return super.decide(e);
    switch (e.type) {
      case "SLIDE":
        return eF;
      case "CODE_BLOCK":
        return eM;
      case "TABLE":
        return eU;
      case "SHAPE_WITH_TEXT":
        return ej;
      case "ROUNDED_RECTANGLE":
        if (e.hasEnabledVideoPaint) return eB;
        return super.decide(e);
      default:
        return super.decide(e);
    }
  }
}
let eV = memo(function () {
  return jsx(z, {
    nodeMapping: AppMode.SLIDES,
    navigationTelemetryTag: "slides_navigate",
    children: jsx(Z, {
      accessibilityLogAction: _$$h.SLIDES_UPDATE_NODE,
      extractorCtor: eG
    })
  });
});
let eY = !1;
function e$({
  headingDepth: e,
  nodeId: t,
  parentId: r,
  posInSet: a,
  setSize: s,
  children: o
}) {
  let l = W([r], e => e ? eO(e) : void 0);
  let d = W([t], e => e ? eO(e) : void 0);
  let c = _$$Z("figjam_navigate");
  return d ? jsx(cH, {
    size: Children.count(o),
    nodeId: t,
    isDebugMode: !1,
    accessibilityScope: void 0,
    parent: l,
    setSize: s ?? 1,
    headingLevel: (e ?? 0) + 1,
    setPosition: a ?? 1,
    navigate: c,
    ...d,
    children: o
  }) : null;
}
function eX({
  nodeId: e,
  children: t
}) {
  let r = _$$Z("figjam_navigate");
  let i = getObservableOrFallback(EditorPreferencesApi().accessibilityDomDebug);
  let s = useSelector(e => e.mirror.appModel.showComments);
  return jsx(Z3, {
    nodeId: e,
    isDebugMode: i,
    navigate: r,
    commentsShown: s,
    children: t
  });
}
class eq extends ee {
  interpret(e) {
    let t = this.decide(e);
    switch (t) {
      case a0:
        return {
          inclusion: vF.CHILDREN
        };
      case RG:
        return {
          inclusion: vF.OMIT
        };
      default:
        return {
          inclusion: vF.INCLUDE,
          display: t,
          guid: e.guid
        };
    }
  }
  children(e) {
    return dl(this.graph, e) ? [] : Fullscreen.getSortedChildGuids(e.guid).map(e => this.graph.get(e)).filter(isNotNullish);
  }
  decide(e) {
    return "CANVAS" === e.type ? eX : e$;
  }
}
let eJ = memo(function () {
  return jsx(z, {
    nodeMapping: AppMode.FIGJAM,
    navigationTelemetryTag: "figjam_navigate",
    children: jsx(Z, {
      accessibilityLogAction: _$$h.FIGJAM_UPDATE_NODE,
      extractorCtor: eq
    })
  });
});
let $$eQ1 = createContext({
  loggerEventName: "uninit_navigate"
});
let e0 = {
  loadAction: _$$h.FIGJAM_INITIAL_TREE_LOAD,
  RootComponent: eP
};
let e1 = {
  loadAction: _$$h.FIGJAM_INITIAL_TREE_LOAD,
  RootComponent: eJ
};
let e2 = {
  loadAction: _$$h.DESIGN_INITIAL_TREE_LOAD,
  RootComponent: ex
};
let e5 = {
  loadAction: _$$h.DEVMODE_INITIAL_TREE_LOAD,
  RootComponent: eC
};
let e3 = {
  loadAction: _$$h.SLIDES_INITIAL_TREE_LOAD,
  RootComponent: eV
};
let $$e40 = memo(function () {
  return jsx(ek, {
    children: jsx(e8, {})
  });
});
function e8() {
  let e = useSelector(e => e.selectedView.editorType);
  let {
    loggerEventName
  } = useContext($$eQ1);
  !function ({
    loggerEvent: e
  }) {
    let t = _$$Z(e);
    let {
      getLastEventWasTab
    } = useContext(eD);
    let n = useSelector(e => 1 === Object.keys(e.mirror.sceneGraphSelection).length ? Object.keys(e.mirror.sceneGraphSelection)[0] : null);
    let s = useMemo(() => SceneNodeCpp && NodeTsApi?.exists(StateSourceType.REDUX) ? SceneNodeCpp.getSelectedTextRange(StateSourceType.REDUX)?.textNodeId : null, []);
    let o = n || s;
    useEffect(() => {
      o && getLastEventWasTab() && t(computeFullscreenViewportForNode({
        nodeId: o,
        ...B5
      }), tp);
    }, [t, getLastEventWasTab, o]);
  }({
    loggerEvent: loggerEventName
  });
  let r = _$$e();
  of(e);
  let s = useDispatch();
  let o = useSelector(e => !!e.modalShown);
  useEffect(() => {
    r && isAnyMobile && (o || s(VisualBellActions.enqueue({
      message: getI18nString("fullscreen.accessibility.platform_error"),
      role: "alert",
      type: "accessibility-dom-react-error"
    })), s(mC({
      errorType: "platform_error"
    })));
  }, [s, o, r]);
  let l = useRef(null);
  k4(l);
  let d = function (e) {
    switch (e) {
      case FEditorType.Design:
        return conditionalFeatureFlag("a11y_design_dom_mirror", e2, void 0);
      case FEditorType.DevHandoff:
        return conditionalFeatureFlag("a11y_design_dom_mirror", e5, void 0);
      case FEditorType.Whiteboard:
        return conditionalFeatureFlag("fpl_windowed_figjam_srdom", e1, e0);
      case FEditorType.Slides:
        return conditionalFeatureFlag("slides_editor_a11y", e3, void 0);
      default:
        return;
    }
  }(e);
  if (!(d && !isAnyMobile)) return null;
  if (!r) return jsx(R, {});
  {
    let {
      loadAction,
      RootComponent
    } = d;
    return jsx(ErrorBoundaryCrash, {
      onError: () => {
        o || s(VisualBellActions.enqueue({
          message: getI18nString("fullscreen.accessibility.dom_error"),
          role: "alert",
          type: "accessibility-dom-react-error"
        }));
        s(mC({
          errorType: "render_error"
        }));
      },
      fallback: jsx("div", {}),
      boundaryKey: "FigjamAccessibilityTreeInnerWithViewport",
      children: jsx(e6, {
        loadAction,
        accessibleAreaRef: l,
        children: jsx(RootComponent, {})
      })
    });
  }
}
function e6({
  children: e,
  accessibleAreaRef: t,
  loadAction: r
}) {
  let o = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  !function () {
    let e = getSelectedEditorType();
    let t = useAppModelProperty("activeCanvasEditModeType");
    let r = useSceneGraphSelection();
    let n = Object.keys(r);
    let a = t !== LayoutTabType.TEXT || 0 === n.length ? void 0 : n[n.length - 1];
    let {
      textValue,
      selectionStart,
      selectionEnd,
      label
    } = useStrictDeepEqualSceneValue((t, n) => {
      let i = n ? t.get(n) : void 0;
      if (null == i) return {
        textValue: null,
        selectionStart: null,
        selectionEnd: null,
        label: null
      };
      {
        let n = i.textContent;
        let a = i.containingCanvas;
        let s = a ? t.get(a)?.getSelectedTextRange() : null;
        "" === n && (s = {
          start: 0,
          end: 0,
          textNodeId: i.guid
        });
        return {
          textValue: n,
          selectionStart: s?.start,
          selectionEnd: s?.end,
          label: function (e, t, r) {
            let n = Object.keys(t);
            let i = n.length > 0 ? e.get(n[0]) : null;
            if (!i) return "";
            let {
              type,
              shapeWithTextType
            } = i;
            if ("SHAPE_WITH_TEXT" === type) return ZG(shapeWithTextType);
            if ("TABLE" === type) {
              let t = e.get(n[n.length - 1]);
              if (null == t) return rs(type, r);
              {
                let {
                  tableCellRowIndex,
                  tableCellColumnIndex
                } = t;
                return getI18nString("fullscreen.accessibility_dom.node_name_table_cell", {
                  r: tableCellRowIndex,
                  c: tableCellColumnIndex
                });
              }
            }
            return i?.isSymbolSublayer || i?.isInstanceSublayer ? getI18nString("fullscreen.accessibility_dom.node_name_instance") : rs(type, r);
          }(t, r, e)
        };
      }
    }, a);
    let c = useCallback((e, t, r) => {
      if (IM.globalWindowState?.isComposing || IM.globalWindowState?.lastKeydown === "Dead" || IM.globalWindowState?.lastKeydown === "Process") return;
      let n = IM.customFocusElementReadWrite;
      n && (n instanceof HTMLTextAreaElement ? (null !== e && (n.value = e), void 0 !== t && void 0 !== r && (n.selectionStart = t, n.selectionEnd = r)) : n && n instanceof HTMLElement && (null !== e && (n.textContent = e), void 0 !== t && void 0 !== r && document.getSelection()?.setBaseAndExtent(n.firstChild ?? n, t, n.firstChild ?? n, r)));
    }, []);
    useEffect(() => void c(textValue, selectionStart ?? void 0, selectionEnd ?? void 0), [c, textValue, selectionStart, selectionEnd]);
    useEffect(() => (eY && logger.error("Input mirror hook registered multiple times"), eY = !0, () => void (eY = !1)), []);
    useEffect(() => {
      let e = IM.customFocusElementReadWrite;
      if (e) {
        e.ariaLabel = label;
        return () => void (e.ariaLabel = null);
      }
    }, [label]);
  }();
  let [p] = useDebounce(o, 500, {
    trailing: !0
  });
  let _ = getObservableOrFallback(EditorPreferencesApi().accessibilityDomDebug);
  let m = useIsCanvasEditDisabled();
  recordAccessibilityDomActive();
  let f = useDispatch();
  useEffect(() => {
    f(mC({
      errorType: null
    }));
  }, [f]);
  useEffect(() => {
    _$$f(r);
  }, [r]);
  let y = e => {
    t.current = e;
  };
  let b = useMemo(() => m ? formatList([getI18nString("fullscreen.accessibility.main_region"), getI18nString("fullscreen.filename_view.view-only")], "unit") : getI18nString("fullscreen.accessibility.main_region"), [m]);
  let A = useMemo(() => it(p), [p]);
  let x = l()(kL, {
    [Qg]: !_
  });
  let N = r => jsx("div", {
    className: x,
    ref: r,
    id: Gl,
    "aria-label": b,
    role: "main",
    tabIndex: 0,
    "data-fullscreen-intercept-dangerously-include-tab": !0,
    onFocusCapture: () => {
      t.current?.setAttribute("aria-hidden", "false");
    },
    children: jsx("div", {
      style: A,
      children: e
    })
  });
  return getFeatureFlags().fpl_srdom_careful_focus ? jsx(_$$w, {
    children: e => N(mergeRefs([e, y]))
  }) : N(y);
}
export const T = $$e40;
export const G = $$eQ1;
