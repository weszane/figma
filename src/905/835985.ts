import { assert, throwTypeError } from "../figma_app/465776";
import { deepEqual } from "../905/382883";
import { m as _$$m } from "../905/18160";
import { TrackType, JSXRendererBindings } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getSceneGraphInstance } from "../905/830071";
import { trackEventAnalytics } from "../905/449184";
import { widgetErrorTracker } from "../905/250412";
import { getFullscreenViewEditorType } from "../figma_app/300692";
import { InternalError } from "../905/845428";
import { processChildren, isFrameType, handleElementSizing, handleConstraints } from "../905/757052";
import { TEXT_STYLE_KEYS } from "../905/285398";
let c = new class {
  constructor() {
    this._pluginID = null;
    this._componentCounts = {};
  }
  startReconciliation(e) {
    this._pluginID = e;
  }
  getCount(e) {
    return this._componentCounts[e] || 0;
  }
  incrementComponent(e) {
    this._componentCounts[e] = this.getCount(e) + 1;
  }
  logAndClear() {
    let e = {
      pluginID: this._pluginID,
      ...this._componentCounts
    };
    trackEventAnalytics("Widget Component Usage", e);
    this.clear();
  }
  clear() {
    this._componentCounts = {};
  }
}();
function f(e, t) {
  for (let i of TEXT_STYLE_KEYS) e.hasOwnProperty(i) && t(i, e[i]);
}
let _ = ["layoutMode", "wrap", "componentId", "componentProps", "nestedInstancesVisibility"];
let A = new Set(_);
let y = ["minWidth", "minHeight", "maxWidth", "maxHeight"];
let b = new Set(y);
export function $$v0({
  widgetNodeID: e,
  newVRoot: t,
  oldVRoot: i,
  propertyMenuDefinition: r,
  runtime: a,
  imgInfoMap: s,
  stickableState: o,
  shouldHideCursors: d
}) {
  let g = getSceneGraphInstance().get(e);
  if (!g) return;
  let f = function (e, t, i) {
    if (!e) return null;
    let r = t.children[0];
    return t.children.length > 1 ? {
      type: "more_than_one_root"
    } : !r && e.rootNode ? {
      type: "no_root"
    } : function e(t, r) {
      assert(!!r);
      let a = t.getType();
      if (!function (e, t) {
        if (!t) return !1;
        switch (e) {
          case "span":
          case "fragment":
            return !1;
          case "frame":
          case "autolayout":
          case "svg":
          case "inputframe":
            return "FRAME" === t;
          case "line":
            return "LINE" === t;
          case "input":
          case "text":
            return "TEXT" === t;
          case "rectangle":
            return "RECTANGLE" === t || "ROUNDED_RECTANGLE" === t;
          case "ellipse":
            return "ELLIPSE" === t;
          case "instance":
            return "INSTANCE" === t;
          default:
            throwTypeError(e);
        }
      }(r.type, a)) return {
        type: "node_type_mismatch",
        nodeID: t.getID(),
        expectedType: r.type,
        actualType: a ?? ""
      };
      if ("text" === r.type) {
        let e = t.getFontName();
        let i = function (e) {
          let t = e.renderMetaData.textStyle;
          if (!t) return null;
          let i = t.style.fontName ?? null;
          if (1 === t.ranges.length) {
            let e = t.ranges[0];
            if (0 === e.start && e.end === t.characters.length) return e.style.fontName ?? i;
          }
          return i;
        }(r);
        if (i && (i.family !== e.family || i.style !== e.style)) return {
          type: "node_font_mismatch",
          nodeID: t.getID(),
          expectedFont: i,
          actualFont: e
        };
      }
      if ("frame" === r.type || "autolayout" === r.type) {
        let n = processChildren(r.renderMetaData.children ?? [], i).filter(Boolean);
        let a = t.children;
        if (n.length !== a.length) return {
          type: "child_count_mismatch",
          nodeID: t.getID()
        };
        for (let t = 0; t < n.length; t++) {
          let i = e(a[t], n[t]);
          if (i) return i;
        }
      }
      return null;
    }(r, e.rootNode);
  }(i, a.getSceneNodeAdapter(g.guid), a);
  if (f) {
    i = null;
    let t = "Scene has diverged from the expected state. " + ("figma" === getFullscreenViewEditorType() ? "This is either because you have manually edited widget sublayers in Figma, or because of a bug in the widget. If the latter, your render function is likely non-deterministic. " : "This is likely a bug in the widget. Your render function is likely non-deterministic.") + "Here is more info: \n\n";
    let r = new InternalError(t + function (e) {
      switch (e.type) {
        case "more_than_one_root":
          return "Widget on canvas has more children at the root than expected";
        case "no_root":
          return "Widget on canvas is missing a child at the root";
        case "node_type_mismatch":
          return `Child of a widget node doesn't match the expected type from render. Expected ${e.expectedType} but got ${e.actualType}. Node ID: ${e.nodeID}`;
        case "node_font_mismatch":
          return `Child of a widget node doesn't match the expected font from render. Expected ${JSON.stringify(e.expectedFont)} but got ${JSON.stringify(e.actualFont)}. Node ID: ${e.nodeID}`;
        case "child_count_mismatch":
          return `Widget sub-node has different number of children than expected. Node ID: ${e.nodeID}`;
        default:
          throwTypeError(e);
      }
    }(f));
    let a = !g.widgetVersionId;
    console.warn(r);
    widgetErrorTracker.trackSceneDivergenceError(r, {
      isLocalWidget: a,
      widgetNodeID: e,
      pluginID: g.widgetId,
      widgetVersionID: g.widgetVersionId,
      widgetName: g.name
    });
  }
  if (!i) for (; g.reversedChildrenGuids.length;) {
    let e = getSceneGraphInstance().get(g.reversedChildrenGuids[0]);
    e?.removeSelfAndChildren();
  }
  let _ = g.reversedChildrenGuids[0] ? a.getSceneNodeAdapter(g.reversedChildrenGuids[0]) : null;
  c.startReconciliation(g.widgetId);
  let A = new Set();
  let y = new Set();
  S({
    widgetNodeID: e,
    oldVNode: i?.rootNode,
    newVNode: t.rootNode,
    indexInParent: 0,
    dataURIToImgInfo: s,
    newParentDirection: "NONE",
    oldParentDirection: "NONE",
    figmaParent: a.getSceneNodeAdapter(g.guid),
    figmaNode: _,
    runtime: a,
    forceReconcileProps: C(t.rootNode, null),
    tracking: g.tracking,
    isRootNode: !0,
    inputNodes: A,
    textNodes: y
  });
  "NONE" === g.stackMode && (g.stackMode = "VERTICAL", g.stackPrimarySizing = "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE", g.stackCounterSizing = "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE");
  E({
    inputNodes: A,
    textNodes: y
  });
  g.setWidgetPropertyMenuItems(r.map(e => ({
    ...e,
    itemType: e.itemType.toUpperCase().replace("-", "_")
  })));
  c.logAndClear();
  g.isForcedStickable = o?.isStickable ?? !1;
  g.shouldHideCursorsOnWidgetHover = d ?? !1;
  let b = [];
  o?.attachedStickablesChangedHandle && b.push("ATTACHED_STICKABLES_CHANGED");
  o?.stuckStatusChangedHandle && b.push("STUCK_STATUS_CHANGED");
  g.widgetEvents = b;
}
export function $$I1({
  imgInfoMap: e,
  runtime: t,
  parentId: i,
  vNode: n,
  oldVNode: r,
  currentNodeId: a,
  editScopeLabel: l
}) {
  let d = new Set();
  let c = new Set();
  let u = t.getSceneNodeAdapter(i);
  let p = a ? t.getSceneNodeAdapter(a) : null;
  let m = permissionScopeHandler.plugin(l ?? "widget-render", () => S({
    widgetNodeID: "",
    oldVNode: r ?? null,
    newVNode: n,
    indexInParent: u.children.length,
    dataURIToImgInfo: e,
    newParentDirection: "NONE",
    oldParentDirection: "NONE",
    figmaParent: u,
    figmaNode: p,
    runtime: t,
    forceReconcileProps: [],
    tracking: TrackType.TRACK,
    inputNodes: d,
    textNodes: c
  }));
  E({
    inputNodes: d,
    textNodes: c
  });
  return m;
}
function E({
  inputNodes: e,
  textNodes: t
}) {
  for (let t of e) permissionScopeHandler.plugin("adjust-widget-input-node", () => {
    JSXRendererBindings.adjustWidgetInputNodeAfterCreation(t);
  });
  for (let e of t) permissionScopeHandler.plugin("adjust-widget-text-node", () => {
    JSXRendererBindings.adjustTextNodeAfterCreation(e);
  });
}
function x(e) {
  let t = [];
  e.renderMetaData.onClick && t.push("CLICK");
  e.renderMetaData.onTextEditEnd && t.push("TEXT_EDIT_END");
  return t;
}
function S({
  widgetNodeID: e,
  oldVNode: t,
  newVNode: i,
  figmaNode: n,
  figmaParent: o,
  indexInParent: d,
  dataURIToImgInfo: p,
  newParentDirection: g,
  oldParentDirection: v,
  runtime: I,
  forceReconcileProps: E,
  tracking: T,
  isRootNode: k,
  inputNodes: R,
  textNodes: N
}) {
  var P;
  let O = () => {
    let t = I.createPluginNode(i, e, T ?? TrackType.TRACK, !!k);
    o.insertChild(d, t.id);
    return I.getSceneNodeAdapter(t.id);
  };
  if (!t && !i) return null;
  if (t || (t = null), !t && n && n.remove(), t && !i) {
    n?.remove();
    return null;
  }
  if (!t && i && (n = O()), !i || ((P = t) && (P.type !== i.type || P?.renderMetaData.key !== i.renderMetaData.key || isFrameType(i) && i.renderMetaData.direction !== P.renderMetaData.direction) && (t = null, n?.remove(), n = O()), n || (n = O()), function (e, t, i) {
    if ("inputframe" !== e.type) return !1;
    let n = t.children;
    if (!n || n.length < 2) return !1;
    let r = n[1];
    return i.getMultiplayerSelection().has(r.getID());
  }(i, n, I))) return null;
  c.incrementComponent(i.type);
  i.renderMetaData.src !== t?.renderMetaData.src && "svg" === i.type && t?.type === "svg" && (t = null, n.remove(), n = O());
  let D = t ? x(t) : [];
  let L = x(i);
  deepEqual(D, L) || n.writeProperty("widgetEvents", L);
  (function ({
    figmaNode: e,
    newVNode: t,
    oldVNode: i,
    imageInfoMap: n
  }) {
    let r = i?.renderMetaData.fillSrc;
    let a = t.renderMetaData.fillSrc;
    if (r && w(i, n.get(r)), a && w(t, n.get(a)), a) {
      let s = n.get(a);
      s ? t.props.fills[0].imageHash = s.hash : t.props.fills = [{
        type: "SOLID",
        color: {
          r: 1,
          g: 1,
          b: 1
        }
      }];
      i && r === a && (s && e.getImageFillHashOrNull() === s.hash ? i.props.fills[0].imageHash = s.hash : i.props.fills = [{
        type: "SOLID",
        color: {
          r: 1,
          g: 1,
          b: 1
        }
      }]);
    }
  })({
    figmaNode: n,
    newVNode: i,
    oldVNode: t,
    imageInfoMap: p
  });
  let F = _$$m();
  let M = (e, t) => {
    F.guard(() => {
      n.writeProperty(e, t);
    });
  };
  let j = e => {
    let n = i.props[e];
    let a = t ? t.props?.[e] : void 0;
    (E.includes(e) || !deepEqual(a, n)) && M(e, n);
  };
  !function ({
    sceneNode: e,
    oldVNode: t,
    newVNode: i,
    errorGuard: n,
    shouldForceReconcile: a
  }) {
    let s = t?.renderMetaData.textStyle;
    let o = i.renderMetaData.textStyle;
    if (!(!o || deepEqual(s, o) && !a)) for (let t of (f(o.style, (t, i) => {
      n.guard(() => {
        e.writeProperty(t, i);
      });
    }), null != o.characters && n.guard(() => {
      e.writeProperty("characters", o.characters);
    }), o.ranges)) {
      let {
        start,
        end,
        style
      } = t;
      f(style, (t, a) => {
        n.guard(() => {
          e.writeTextRange(t, a, start, end);
        });
      });
    }
  }({
    oldVNode: t,
    newVNode: i,
    sceneNode: n,
    errorGuard: F,
    shouldForceReconcile: E.includes("characters")
  });
  for (let e = 0; e < _.length; e++) {
    let t = _[e];
    t in i.props && j(t);
  }
  for (let e in i.props) A.has(e) || b.has(e) || j(e);
  if (!function (e, t) {
    if (0 === e.length) return;
    let i = getSceneGraphInstance().get(t);
    if (!i) return;
    let n = !i.widgetVersionId;
    if (n && 0 !== e.length) {
      let t = "\n\n * ";
      throw new InternalError(`Got the following errors when rendering the widget: ${t}${e.join(t)}`);
    }
    widgetErrorTracker.trackValidationErrors(e, {
      isLocalWidget: n,
      widgetNodeID: t,
      pluginID: i.widgetId,
      widgetVersionID: i.widgetVersionId,
      widgetName: i.name
    });
  }(F.errors, e), (i.renderMetaData.width !== t?.renderMetaData.width || i.renderMetaData.height !== t?.renderMetaData.height || g !== v || i.renderMetaData.direction !== t?.renderMetaData.direction) && handleElementSizing(i, n, g), ["x", "y"].forEach(e => {
    let n = i.renderMetaData?.[e];
    n !== (t ? t.renderMetaData?.[e] : void 0) && M(e, n);
  }), deepEqual(i.renderMetaData.constraints, t?.renderMetaData.constraints) || handleConstraints(i, n, o, !0), y.forEach(e => {
    i.props[e] !== (t ? t.props[e] : void 0) && M(e, i.props[e]);
  }), "text" === i.type && N.add(n.getID()), !i.renderMetaData.children) return n;
  let U = t?.renderMetaData?.children ? processChildren(t?.renderMetaData?.children) : [];
  let B = processChildren(i?.renderMetaData?.children, I);
  let V = n.children;
  for (let r = 0; r < B.length; r++) {
    let a = B[r];
    S({
      widgetNodeID: e,
      newVNode: a,
      oldVNode: U[r],
      figmaNode: V[r],
      indexInParent: r,
      dataURIToImgInfo: p,
      newParentDirection: i.props.layoutMode ?? g,
      oldParentDirection: t?.props?.layoutMode ?? v,
      figmaParent: n,
      runtime: I,
      forceReconcileProps: a ? C(a, i) : [],
      vNodeParentType: i.type,
      tracking: T,
      inputNodes: R,
      textNodes: N
    });
  }
  if ("inputframe" === i.type && R.add(n.getID()), V.length > B.length) {
    let e = V.length - B.length;
    for (; e > 0;) {
      n.children[n.children.length - 1].remove();
      e--;
    }
  }
  return n;
}
function w(e, t) {
  if (t) {
    let {
      width,
      height
    } = t;
    e.renderMetaData.width = e.renderMetaData.width ?? width;
    e.renderMetaData.height = e.renderMetaData.height ?? height;
  } else e.renderMetaData.width && e.renderMetaData.height ? (e.renderMetaData.width = e.renderMetaData.width, e.renderMetaData.height = e.renderMetaData.height) : e.props.visible = !1;
}
function C(e, t) {
  return "inputframe" === e.type || t?.type === "inputframe" ? ["characters", "visible"] : "instance" === e.type ? ["nestedInstancesVisibility"] : [];
}
export const Lb = $$v0;
export const _b = $$I1;