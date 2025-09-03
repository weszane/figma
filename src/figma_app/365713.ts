import { _q } from "../905/293114";
import { HP } from "../905/482149";
import { sS, i9 } from "../905/776065";
import { gS } from "../905/866195";
import { w as _$$w } from "../905/847865";
import { glU, X3B } from "../figma_app/763686";
import { nc } from "../905/189185";
import { sH, Hr } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { zl } from "../figma_app/27355";
import { sx } from "../905/449184";
import { d as _$$d } from "../figma_app/429226";
import { Rw } from "../figma_app/930338";
import { tx } from "../905/303541";
import { Zl } from "../figma_app/311375";
import { Ay, hI } from "../figma_app/432652";
import { Ay as _$$Ay } from "../figma_app/948389";
import { Zh } from "../figma_app/2590";
import { A } from "../905/202425";
import { pD } from "../905/727576";
import { Ll } from "../figma_app/144974";
export class $$v8 extends Error {
  constructor() {
    super();
    this.name = "InvalidSelectionFromGenericLayers";
  }
}
export class $$A11 extends Error {
  constructor() {
    super();
    this.name = "NoInteractionsGenerated";
  }
}
export class $$x5 extends Error {
  constructor() {
    super();
    this.name = "NoInteractionsGeneratedExistingInteractions";
  }
}
export function $$N7(e, t, r, i) {
  let s = function (e, t) {
    let r = {
      name: "Dummy Page just to satisfy typescript so they have a parent",
      id: "0:1",
      type: "CANVAS",
      children: []
    };
    r.children = w(e, t, r);
    return r;
  }(e, t).children;
  let o = _q(s);
  return sS(s, r, o, i);
}
export function $$C9(e, t) {
  let r = t.get(e);
  let n = {
    name: r.name,
    id: r.guid,
    type: "CANVAS",
    children: []
  };
  n.children = w(r.childrenGuids, t, n);
  return n;
}
function w(e, t, r) {
  let n = [];
  for (let i of e) {
    let e = Zl(t, i);
    if (null !== e) {
      let i = {
        id: e.guid,
        name: e.name,
        type: e.type,
        visible: e.visible,
        x: e.absoluteBoundingBox.x,
        y: e.absoluteBoundingBox.y,
        w: e.absoluteBoundingBox.w,
        h: e.absoluteBoundingBox.h,
        parentNode: r,
        clipsContent: !e.frameMaskDisabled,
        fontSize: e.fontSize,
        textAlignHorizontal: e.textAlignHorizontal,
        layoutMode: e.stackMode,
        cornerRadius: e.cornerRadius
      };
      i.opacity = e.opacity;
      i.characters = e.characters;
      e.fills && (i.fills = e.fills.map(O).filter(e => !!e));
      e.prototypeInteractions && e.prototypeInteractions.length > 0 && (i.interactions = e.prototypeInteractions);
      let a = w(e.childrenGuids, t, i);
      a.length > 0 && (i.children = a);
      n.push(i);
    }
  }
  return n;
}
function O(e) {
  switch (e.type) {
    case "GRADIENT_ANGULAR":
    case "GRADIENT_DIAMOND":
    case "GRADIENT_LINEAR":
    case "GRADIENT_RADIAL":
      return {
        type: "GRADIENT",
        visible: e.visible
      };
    case "IMAGE":
      let t = e.image?.hash;
      let r = t ? Rw(t) : "";
      let n = e.imageThumbnail?.hash;
      return {
        type: "IMAGE",
        hash: r,
        thumbnailHash: n ? Rw(n) : "",
        visible: e.visible
      };
    case "SOLID":
      return {
        type: "SOLID",
        color: e.color ?? {
          r: 0,
          g: 0,
          b: 0
        },
        visible: e.visible
      };
  }
}
export function $$R1(e) {
  return null !== e;
}
let L = (e, t) => "BACK" === t ? "BACK" : "CLOSE" === t ? "CLOSE" : "OPEN_POPUP" === e ? "OVERLAY" : e;
let P = nc.ai("link-new-interaction", e => {
  let t = L(e.navigationType, "");
  let r = e.buttonID;
  let n = sH(r);
  if (null === n || n === Hr) {
    sx("prototype_interaction_added", {
      magicLinkGenerated: !0,
      magicLinkInteractionRemoved: !0,
      magicLinkInvalidSourceNode: !0,
      action_type: t
    });
    return;
  }
  let i = getSingletonSceneGraph().get(r);
  if (null == i) {
    sx("prototype_interaction_added", {
      magicLinkGenerated: !0,
      magicLinkInteractionRemoved: !0,
      magicLinkInvalidSourceNode: !0,
      action_type: t
    });
    return;
  }
  let a = function (e) {
    let t = e;
    for (; t.parentNode?.type !== "CANVAS" && t.parentNode?.type !== "SECTION" && null !== t.parentNode;) t = t.parentNode;
    return t;
  }(i);
  let s = e.destinationScreenID;
  let o = i?.prototypeInteractions;
  if (o) {
    for (let e of o) if (e.event?.interactionType === "ON_CLICK" && e.actions && e.actions.length > 0 && !(1 === e.actions.length && "NONE" === e.actions[0].connectionType)) {
      sx("prototype_interaction_added", {
        magicLinkGenerated: !0,
        sourceTlfIds: JSON.stringify([a.guid]),
        destinationTlfIds: JSON.stringify([s]),
        magicLinkInteractionRemoved: !0,
        magicLinkExistingInteractionOnSourceNode: !0,
        action_type: t
      });
      return {
        noInteractionGeneratedReason: "EXISTING_INTERACTION"
      };
    }
  }
  let d = sH(s);
  let p = {};
  let m = e.navigationType;
  if ("BACK" === m) p.connectionType = "BACK";else if ("CLOSE" === m) p.connectionType = "CLOSE";else {
    if (null === d || d === Hr || null === s) {
      sx("prototype_interaction_added", {
        magicLinkGenerated: !0,
        sourceTlfIds: JSON.stringify([a.guid]),
        destinationTlfIds: JSON.stringify([s]),
        magicLinkInteractionRemoved: !0,
        magicLinkInvalidDestinationNode: !0,
        action_type: t
      });
      return;
    }
    let e = getSingletonSceneGraph().get(s);
    if (!e) {
      sx("prototype_interaction_added", {
        magicLinkGenerated: !0,
        sourceTlfIds: JSON.stringify([a.guid]),
        destinationTlfIds: JSON.stringify([s]),
        magicLinkInteractionRemoved: !0,
        magicLinkInvalidDestinationNode: !0,
        action_type: t
      });
      return;
    }
    p.transitionNodeID = d;
    p.transitionType = "INSTANT_TRANSITION";
    "NAVIGATE" === m ? (p.connectionType = "INTERNAL_NODE", (i?.type === "SYMBOL" || i?.type === "INSTANCE") && (e?.type === "SYMBOL" || e?.type === "INSTANCE") ? p.navigationType = "SWAP_STATE" : p.navigationType = "NAVIGATE", a?.overlayBackground.type !== "NONE" && (p.navigationType = "SWAP")) : "OPEN_POPUP" === m && (p.connectionType = "INTERNAL_NODE", p.navigationType = "OVERLAY");
  }
  let g = glU.generateUniqueID();
  if (!g) return;
  let f = sH(g);
  if (!f) return;
  let E = {
    id: f,
    stateManagementVersion: 1
  };
  E.event = {
    interactionType: "ON_CLICK"
  };
  E.actions = [p];
  try {
    i.prototypeInteractions = [E];
  } catch (e) {
    return;
  }
  let y = _$$d({
    nodeID: n,
    interactionID: f
  });
  sx("prototype_interaction_added", {
    interactionCount: i?.prototypeInteractions.length ?? 0,
    magicLinkGenerated: !0,
    interactionID: y,
    sourceTlfIds: JSON.stringify([a.guid]),
    destinationTlfIds: JSON.stringify([s]),
    action_type: L(p.navigationType ?? "", p.connectionType ?? "")
  });
  return {
    noodleID: y
  };
});
export async function $$D0(e, t, r, n) {
  let i;
  let o;
  if ("TOPLEVEL" === e.type && function (e, t) {
    let r = i9(e.unfilteredScene.children);
    t(Zh({
      name: "prototype.ai_magic_link_input_existing_interactions",
      params: {
        existingInteractions: JSON.stringify(r.interactionIds)
      }
    }));
  }(e, n), "TOPLEVEL" === e.type && 0 === e.topLevelFrames.length) throw new $$v8();
  try {
    let r = await M(e, t);
    i = k(r);
  } catch (e) {
    if (e instanceof gS) {
      let t = {
        generatedInteractions: []
      };
      t.errorMessage = e.message;
      return t;
    }
    throw e;
  }
  let l = [];
  let d = !1;
  let c = [];
  let u = [];
  try {
    for await (let e of i) {
      if (r.signal.aborted) return {
        generatedInteractions: [],
        errorMessage: "aborted"
      };
      j("NAVIGATE");
      "OPEN_POPUP" === e.navigationType || "CLOSE" === e.navigationType ? u.push(e) : "BACK" === e.navigationType ? c.push(e) : d = F(e, l);
    }
  } catch (e) {
    o = e.message;
  }
  for (let e of u) {
    j("OPEN_POPUP");
    await new Promise(e => setTimeout(e, 200));
    d = F(e, l);
  }
  for (let e of c) {
    j("BACK");
    await new Promise(e => setTimeout(e, 200));
    d = F(e, l);
  }
  if (!o && 0 === l.length) {
    if (d) throw new $$x5();
    throw new $$A11();
  }
  return {
    generatedInteractions: l,
    errorMessage: o
  };
}
async function* k(e) {
  for await (let t of e) yield HP(t);
}
async function M(e, t) {
  let r = _$$w(e);
  let n = new Promise((e, t) => {
    setTimeout(() => {
      t(Error("Cortex timed out"));
    }, 6e4);
  });
  if ("EMPTY" === r.type) throw new gS("Empty selection");
  let i = Ay.design.generateMagicLinkV2(r, {
    ..._$$Ay(),
    clientLifecycleId: t
  });
  let a = await Promise.race([i, n]);
  return new hI(a, 6e4);
}
function F(e, t) {
  let r = P(e);
  if (r?.noodleID) t.push({
    id: r.noodleID,
    mapping: e
  });else if (r?.noInteractionGeneratedReason === "EXISTING_INTERACTION") return !0;
  return !1;
}
function j(e) {
  "BACK" === e ? zl.set(pD, tx("magic_link.running_and_adding_back_interactions")) : "OPEN_POPUP" === e ? zl.set(pD, tx("magic_link.running_and_adding_overlay_interactions")) : zl.set(pD, tx("magic_link.running_and_adding_navigate_interactions"));
}
export function $$U6() {
  zl.set(pD, tx("magic_link.running"));
}
export function $$B2() {
  return Ll();
}
export function $$G4(e) {
  if (!$$B2() || 0 === e.length) return !1;
  let t = X3B.getMagicLinkSelectionInfo();
  return !t.onlyNonTopLevelNodesSelected && !(t.topLevelFrameIds.length > 10) && !(t.topLevelFrameIds.length < 2);
}
export function $$V10(e, t, r) {
  let n = Object.fromEntries(r.map(e => [e, []]));
  t.forEach(t => {
    r.forEach(r => {
      n[r]?.push(...function e(t, r, n) {
        let i = t.get(r);
        return i ? "ICON" === n && i.isIconLike || i.type === n || "IMAGE" === n && A(i) ? [r] : i.childrenNodes.flatMap(r => e(t, r.guid, n)) : [];
      }(e, t, r));
    });
  });
  return n;
}
export const LI = $$D0;
export const Pe = $$R1;
export const YR = $$B2;
export const Yg = function e(t) {
  let r = 0;
  for (let n of (t.prototypeInteractions.length > 0 && (r += 1), t.childrenNodes)) r += e(n);
  return r;
};
export const Zj = $$G4;
export const _U = $$x5;
export const bA = $$U6;
export const dT = $$N7;
export const ft = $$v8;
export const k9 = $$C9;
export const kC = $$V10;
export const sT = $$A11;