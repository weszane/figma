import { asyncMap } from "../figma_app/656233";
import { ServiceCategories } from "../905/165054";
import { ActionType } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { a as _$$a, v as _$$v } from "../figma_app/163822";
import { getSingletonSceneGraph } from "../905/700578";
import { atomStoreManager } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { Timer } from "../905/609396";
import { reportError } from "../905/11";
import { trackFileEvent } from "../figma_app/314264";
import { cortexAPI } from "../figma_app/432652";
import { Ay as _$$Ay2 } from "../figma_app/948389";
import { BaseCustomError } from "../905/843553";
import { fullscreenValue } from "../figma_app/455680";
import { r8, uK, bK, oZ } from "../figma_app/178273";
import { z8 } from "../figma_app/862289";
let b = ["FIRST", "SECOND", "THIRD", "FOURTH", "FIFTH", "SIXTH", "SEVENTH", "EIGHTH", "NINTH", "TENTH", "ELEVENTH", "TWELFTH", "THIRTEENTH", "FOURTEENTH", "FIFTEENTH", "SIXTEENTH", "SEVENTEENTH", "EIGHTEENTH", "NINETEENTH", "TWENTIETH", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let v = e => {
  let t = "FRAME" === e.type;
  let i = e.parentNode;
  let n = i && ("CANVAS" === i.type || "SECTION" === i.type);
  return t && n;
};
let I = e => {
  let t;
  let i = [];
  for (t = e; !v(t); t = t.parentNode) {
    let e = t.name;
    let n = 0;
    let r = t.parentNode;
    if (!r) break;
    for (let i of r.childrenNodes) if (i.name === e) {
      if (i.guid === t.guid) break;
      n++;
    }
    i.push(e);
    i.push(n.toString());
  }
  return i.join("/");
};
export function $$E6(e) {
  switch (e) {
    case ActionType.CONTEXT_MENU:
      return "context_menu";
    case ActionType.QUICK_ACTIONS:
      return "quick_actions";
    case ActionType.CREATE_COMPONENT:
      return "create_component";
    case ActionType.CREATE_FRAME:
      return "create_frame";
    case ActionType.DRAW_FRAME_AROUND_NODES:
      return "draw_frame_around_nodes";
    case ActionType.STACK_SELECTION:
      return "stack_selection";
    case ActionType.FIRST_DRAFT_LINT:
      return "First Draft Lint";
    case ActionType.EXPORT_FRAME:
      return "export_frame";
    case ActionType.EXPORT_PICKER:
      return "export_picker";
    case ActionType.MAGIC_LINK:
      return "magic-link";
    case ActionType.READY_FOR_DEV:
      return "ready_for_dev";
    case ActionType.LAYERS_PANEL_ACTION_ROW:
      return "layers_panel_action_row";
    case ActionType.LAYERS_PANEL_OVERFLOW_MENU:
      return "layers_panel_overflow_menu";
  }
}
var x = (e => (e[e.ALL = 0] = "ALL", e[e.TOP_LEVEL = 1] = "TOP_LEVEL", e))(x || {});
let S = new Set([ActionType.CREATE_COMPONENT, ActionType.CREATE_FRAME, ActionType.DRAW_FRAME_AROUND_NODES, ActionType.STACK_SELECTION, ActionType.EXPORT_FRAME, ActionType.EXPORT_PICKER]);
export class $$w2 extends BaseCustomError {
  constructor() {
    super(!1);
    this.name = "NoNameableLayersError";
  }
}
export class $$C3 extends BaseCustomError {
  constructor() {
    super(!1);
    this.name = "NoSelectedLayersError";
  }
}
export class $$T1 extends BaseCustomError {
  constructor(e) {
    super(!1);
    this.name = "LayerLimitExceededError";
    this.layerCount = e;
  }
}
class k extends Error {
  constructor() {
    super();
    this.name = "LayerNotRenamedError";
  }
}
let R = {
  RECTANGLE: ["Rectangle", "Image", "image"],
  ROUNDED_RECTANGLE: ["Rectangle", "Image", "image"],
  TEXT: ["Text"],
  FRAME: ["Frame", "Group"],
  GROUP: ["Group"],
  REGULAR_POLYGON: ["Polygon", "Vector"],
  STAR: ["Star"],
  LINE: ["Line"],
  ELLIPSE: ["Ellipse"],
  VECTOR: ["Vector"],
  INSTANCE: ["Instance"]
};
let N = new Set(["RECTANGLE", "ROUNDED_RECTANGLE", "TEXT", "FRAME", "GROUP", "INSTANCE"]);
function P(e, t = !1) {
  let i;
  if (e.type in R) i = R[e.type];else if ("SYMBOL" === e.type && t) {
    let e = [];
    N.forEach(t => {
      t in R && R[t] && e.push(...R[t]);
    });
    e.push("Component");
    i = e;
  }
  if (i) for (let t of i) {
    let i = RegExp(`^${t} [()\\d]+[ ()\\d]*$`, "i");
    if (e.name.match(i)) return !0;
  }
  if ("INSTANCE" === e.type && e.symbolId) {
    let t = getSingletonSceneGraph().get(e.symbolId);
    if (t && e.name === t.name) return !0;
  }
  return "TEXT" === e.type && !!e.autoRename;
}
export function $$O5(e, t, i = !1) {
  if (e.locked || e.isInstanceSublayer) return !1;
  let n = i && "SYMBOL" === e.type;
  return !!((N.has(e.type) || n) && (t || P(e, i)));
}
export let $$D0 = 500;
function L(e) {
  permissionScopeHandler.ai("rename-layers", () => {
    for (let [t, {
      name: i,
      autoRename: n
    }] of e) {
      let e = getSingletonSceneGraph().get(t);
      e && (e.name = i, e.autoRename = n);
    }
  });
}
export let $$F4 = async ({
  abortController: e,
  onTasksUpdate: t,
  params: i,
  clientLifecycleId: f
}) => {
  let {
    source,
    overwriteNames,
    customNodeSelection,
    ignoreDescendants
  } = i;
  let M = new Timer();
  M.start();
  let j = null;
  let U = debugState.getState();
  let B = U.openFile?.key;
  let V = source === ActionType.CREATE_COMPONENT;
  let G = $$E6(source);
  let z = getSingletonSceneGraph().getCurrentPage()?.directlySelectedNodes;
  if (customNodeSelection) {
    let e = [];
    customNodeSelection.forEach(t => {
      let i = getSingletonSceneGraph().get(t);
      i && e.push(i);
    });
    z = e;
  }
  let H = z?.map(e => e.guid);
  if (!z || 0 === z.length) throw new $$C3();
  let W = 0;
  let K = 0;
  let Y = 0;
  let q = [];
  let $ = function (e, t) {
    let i = new Map();
    let n = new Map();
    let r = t => {
      if (!t.locked && t.visible) {
        if (!v(t)) {
          let r = t.guid === e.guid ? "" : I(t);
          i.has(r) || i.set(r, []);
          i.get(r).push(t);
          n.set(t.guid, i.get(r));
        }
        if (t.childrenNodes) for (let e of t.childrenNodes) r(e);
      }
    };
    for (let e of t) r(e);
    let a = t => {
      if (!(t.locked || !t.visible || n.has(t.guid))) {
        if (!v(t)) {
          let n = t.guid === e.guid ? "" : I(t);
          i.has(n) && i.get(n).push(t);
        }
        if (t.childrenNodes) for (let e of t.childrenNodes) a(e);
      }
    };
    a(e);
    return n;
  }(getSingletonSceneGraph().getCurrentPage(), z);
  let Z = new Map();
  let X = (await asyncMap(z, async e => {
    let t = function e({
      n: t,
      overwriteNames: i,
      renameComponents: n,
      includeNodeIds: r,
      relativeFrame: a
    }) {
      let s = $$O5(t, i, n);
      let d = P(t, n);
      a || (a = {
        x: Math.floor(t.absoluteBoundingBox.x),
        y: Math.floor(t.absoluteBoundingBox.y),
        w: Math.floor(t.absoluteBoundingBox.w),
        h: Math.floor(t.absoluteBoundingBox.h)
      });
      let c = t.fills.length > 0 && t.fills.some(e => "IMAGE" === e.type);
      let u = t.type;
      let p = !1;
      if (c) u = "IMAGE";else if ("INSTANCE" === t.type && t.symbolId) {
        let e = getSingletonSceneGraph().get(t.symbolId);
        e && !P(e, n) && (u = e.name, p = !0);
      } else "SYMBOL" === t.type && n && (u = "COMPONENT");
      let m = !d && !p;
      let h = _$$a(t);
      let g = a.w > h ? h / a.w : 1;
      let f = {
        name: m ? t.name : void 0,
        type: u,
        id: s ? t.guid : void 0,
        text: t.characters ? t.characters.trim().substring(0, 200) : void 0,
        autolayout: t.isStack && "GRID" !== t.stackMode ? t.stackMode : void 0,
        x: Math.floor((t.absoluteBoundingBox.x - a.x) * g),
        y: Math.floor((t.absoluteBoundingBox.y - a.y) * g),
        w: Math.floor(t.absoluteBoundingBox.w * g),
        h: Math.floor(t.absoluteBoundingBox.h * g)
      };
      "INSTANCE" !== t.type && 0 === r && (f.children = function (e) {
        let t = e.childrenNodes;
        return e.uiOrderedChildren.map(e => t.find(t => t.guid === e)).filter(e => void 0 !== e);
      }(t).filter(e => e.visible && e.opacity > 0).map(t => e({
        n: t,
        overwriteNames: i,
        renameComponents: !1,
        includeNodeIds: 0,
        relativeFrame: a
      })));
      return f;
    }({
      n: e,
      overwriteNames,
      renameComponents: !!V,
      includeNodeIds: ignoreDescendants ? 1 : 0
    });
    let i = [];
    !function e(t, i) {
      if (i.push(t), t.children) for (let n of t.children) e(n, i);
    }(t, i);
    let n = i.filter(e => void 0 !== e.id);
    if (0 === n.length) return null;
    for (let {
      id
    } of (W += i.length, n)) id && (q.push({
      taskId: id,
      state: z8.INCOMPLETE
    }), atomStoreManager.set(r8(id), {
      guid: id,
      boundingBox: e.absoluteBoundingBox,
      state: "pending",
      name: e.name
    }));
    return {
      rep: t,
      image: await _$$v(e)
    };
  })).filter(Boolean);
  let Q = q.length;
  if (0 === Q) throw new $$w2();
  if (W > $$D0) throw new $$T1(W);
  t && t(q);
  atomStoreManager.set(uK, {
    autoScroll: !0
  });
  trackFileEvent("ai_rename_layers_started", B, U, {
    numItemsTotal: W,
    numItemsNameable: Q,
    source: G,
    clientLifecycleId: f
  });
  let J = e => {
    q = q.map(t => (t.taskId === e && (t.state = z8.SUCCEEDED), t));
    t && t(q);
  };
  try {
    let t = {
      ..._$$Ay2(),
      clientLifecycleId: f
    };
    let i = await cortexAPI.design.generateRenameLayers({
      nodes: X,
      isMeteringRequest: !0,
      renameTopLayerOnly: !!ignoreDescendants
    }, t);
    let n = new Set();
    let r = new Promise(t => {
      e.signal.addEventListener("abort", t);
    });
    let a = i.getReader();
    let o = [];
    async function ee() {
      for (;;) {
        let t = await Promise.race([a.read(), r]);
        if (null === j && (j = M.getElapsedTime()), e.signal.aborted) {
          a.cancel();
          break;
        }
        let {
          done,
          value
        } = t;
        if (value) {
          let [t, i] = value.split(",");
          for (let e of (t = t.trim(), i = i.trim(), b)) if (i.toUpperCase().includes(e)) {
            Y++;
            break;
          }
          let r = getSingletonSceneGraph().get(t);
          if (r && $$O5(r, overwriteNames, V) && (!ignoreDescendants || H?.includes(r.guid))) {
            r.parentNode && function e(t, i) {
              "isExpanded" in t && (t.isExpanded || (t.isExpanded = !0, i.add(t.guid)), t.parentNode && e(t.parentNode, i));
            }(r.parentNode, n);
            let a = [{
              node: r,
              animate: !0
            }];
            for (let e of $.get(t) ?? []) e.guid !== t && $$O5(r, overwriteNames, V) && !Z.has(e.guid) && a.push({
              node: e,
              animate: !1
            });
            for (let {
              node,
              animate
            } of a) {
              if (animate) {
                let n = bK(node, i, e, S.has(source));
                o.push(n);
              }
              let r = {
                name: node.name,
                autoRename: node.autoRename
              };
              permissionScopeHandler.ai("rename-layers", () => {
                node.name = i;
              });
              Z.set(node.guid, r);
              J && J(node.guid);
            }
          } else !r && K++;
        }
        if (done) break;
      }
    }
    await ee();
    e.signal.aborted ? oZ() : await Promise.all(o);
    let d = M.getElapsedTime();
    M.stop();
    e.signal.aborted ? (trackFileEvent("ai_rename_layers_cancelled", B, U, {
      timeToFirstToken: j,
      timeToCompletion: d,
      numItemsTotal: W,
      numItemsNameable: Q,
      numItemsNamed: q.filter(e => e.state === z8.SUCCEEDED).length,
      numItemsHallucinated: K,
      numItemsWithOrdinals: Y,
      source: G,
      clientLifecycleId: f
    }), L(Z)) : trackFileEvent("ai_rename_layers_completed", B, U, {
      timeToFirstToken: j,
      timeToCompletion: d,
      numItemsTotal: W,
      numItemsNameable: Q,
      numItemsNamed: q.filter(e => e.state === z8.SUCCEEDED).length,
      numItemsHallucinated: K,
      numItemsWithOrdinals: Y,
      source: G,
      clientLifecycleId: f
    });
    fullscreenValue.triggerAction("commit");
  } catch (e) {
    oZ();
    L(Z);
    fullscreenValue.triggerAction("commit");
    reportError(ServiceCategories.AI_PRODUCTIVITY, e, {
      extra: {
        numItemsTotal: W,
        numItemsNameable: Q,
        source: G
      }
    });
    trackFileEvent("ai_rename_layers_failed", B, U, {
      error: e,
      numItemsTotal: W,
      numItemsNameable: Q,
      source: G,
      clientLifecycleId: f
    });
    return e;
  } finally {
    let e = q.map(e => (e.state === z8.INCOMPLETE && (e = {
      ...e,
      state: z8.FAILED,
      error: new k()
    }), e));
    t && t(e);
  }
};
export const NB = $$D0;
export const eJ = $$T1;
export const BT = $$w2;
export const tS = $$C3;
export const Ay = $$F4;
export const jX = $$O5;
export const Tr = $$E6;