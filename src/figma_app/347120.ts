import { xb } from "../figma_app/465776";
import { XJn } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { r as _$$r } from "../905/249071";
import { M } from "../905/512402";
import { UN } from "../905/700578";
import { C } from "../figma_app/193952";
import { Y5 } from "../figma_app/455680";
import { vh } from "../905/296461";
let $$p0 = 50;
let $$_1 = 20;
export function $$h4(e, t = !1) {
  let r = e[0];
  if (!r || "FRAME" !== r.type || r.isInstanceSublayer) return;
  let n = UN();
  if (t) {
    let t = E("icons");
    for (let r of e) $$y2(r, t);
  }
  let i = r.absoluteBoundingBox;
  let a = n.createComponentFromNode(r.clone());
  a.visible = !0;
  n.getCurrentPage()?.appendChild(a);
  a.x = i.x + i.w + 200;
  a.y = i.y;
  let s = $$m7(e, a);
  return {
    component: a,
    nodeMapping: s
  };
}
export function $$m7(e, t) {
  let r = new Map();
  for (let n of e) {
    let e = $$g8(n, t);
    e && (r = new Map([...r, ...e]));
  }
  Y5.commit();
  return r;
}
export function $$g8(e, t) {
  let r = e.parentNode;
  if (!r || r.isPrimaryInstance || r.isInstanceSublayer || "SYMBOL" !== t.type) return;
  let n = r.childrenGuids.findIndex(t => t === e.guid);
  let a = t.createInstance();
  if (!a) return;
  let s = XJn.applyOverridesToInstanceToMatchNode(a.guid, e.guid);
  r.insertChild(a, n + 1);
  "NONE" === r.stackMode && (a.x = e.x, a.y = e.y);
  a.visible = e.visible;
  e.removeSelfAndChildren();
  return s;
}
export function $$f6() {
  return {
    copiedDesigns: E("copiedDesigns"),
    buildingBlocks: E("buildingBlocks"),
    icons: E("icons"),
    atoms: E("atoms")
  };
}
function E(e) {
  let t = function (e) {
    switch (e) {
      case "buildingBlocks":
        return vh;
      case "icons":
        return C;
      case "atoms":
        return "Atoms";
      case "copiedDesigns":
        return "Copied Designs";
      default:
        xb(e);
    }
  }(e);
  let r = UN().getCurrentPage()?.childrenNodes.find(e => "SECTION" === e.type && e.name === t);
  if (r) return r;
  {
    let e = $$b3(UN().getCurrentPage());
    return l7.user("create-section", () => {
      let r = UN().createNode("SECTION");
      r.name = t;
      r.relativeTransform = {
        ...r.relativeTransform,
        m02: e.right() + 100,
        m12: e.top()
      };
      return r;
    });
  }
}
export function $$y2(e, t) {
  let r = XJn.findIcons(e.guid);
  let n = UN();
  let a = r.map(e => n.get(e));
  let s = {
    x: $$b3(t).right() + $$p0,
    y: $$p0
  };
  let o = {};
  for (let e of a) {
    if (!e) continue;
    let r = XJn.findSimilarNodes(e.guid, t.guid, !1, !0, !1);
    let a = r[0] ? n.get(r[0]) : null;
    a || ((a = n.createComponentFromNode(e.clone())).visible = !0, t.appendChild(a), a.relativeTransform = {
      ...a.relativeTransform,
      m02: s.x,
      m12: s.y
    }, s.y += a.size.y + $$_1);
    o[e.guid] = a.guid;
    $$g8(e, a);
  }
  return o;
}
export function $$b3(e) {
  let t = null;
  for (let r of e.childrenNodes) {
    let e = new _$$r(new M(r.x, r.y), new M(r.size.x, r.size.y));
    t = t ? t.unionWith(e) : e;
  }
  return t ?? new _$$r();
}
export function $$T5(e) {
  let t = $$b3(e.copiedDesigns);
  e.copiedDesigns.size = {
    x: t.right() + $$p0,
    y: t.bottom() + $$p0
  };
  let r = $$b3(e.buildingBlocks);
  e.buildingBlocks.size = {
    x: r.right() + $$p0,
    y: r.bottom() + $$p0
  };
  let n = $$b3(e.icons);
  e.icons.size = {
    x: n.right() + $$p0,
    y: n.bottom() + $$p0
  };
  let i = $$b3(e.atoms);
  e.atoms.size = {
    x: i.right() + $$p0,
    y: i.bottom() + $$p0
  };
  e.buildingBlocks.x = e.copiedDesigns.x + e.copiedDesigns.size.x + 100;
  e.icons.x = e.buildingBlocks.x + e.buildingBlocks.size.x + 100;
  e.atoms.x = e.icons.x + e.icons.size.x + 100;
}
export const CN = $$p0;
export const FL = $$_1;
export const MR = $$y2;
export const NY = $$b3;
export const Qy = $$h4;
export const Vl = $$T5;
export const Y6 = $$f6;
export const v$ = $$m7;
export const w8 = $$g8;