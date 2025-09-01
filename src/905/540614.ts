import { glU } from "../figma_app/763686";
import { DS } from "../figma_app/387100";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { I2 } from "../905/70369";
import { nF } from "../905/350402";
import { Aw } from "../figma_app/383828";
let c = "return_to_variant";
let u = null;
let p = ["-1:-1"];
export function $$m0(e, t, i) {
  if (!u) {
    let n = {};
    let r = {};
    n[e] = t;
    r[i] = [e];
    u = {
      selectedNotSwappedNodeIds: [],
      selectedSwappedNodeIds: n,
      sourceStates: r
    };
  }
  glU.selectInstances(Object.keys(u.selectedSwappedNodeIds).join(","), !1);
}
export let $$h1 = nF(e => {
  let t = e.getState();
  let i = Object.keys(t.mirror.sceneGraphSelection);
  I2(t.visualBell, c) ? function (e) {
    return p.length !== e.length || e.some(e => -1 === p.indexOf(e));
  }(i) && (f(t.mirror.sceneGraph, i) ? function (e, t) {
    if (!u) return !1;
    let i = _();
    if (t.length !== i.length || t.some(e => -1 === i.indexOf(e))) return !1;
    for (let t of Object.keys(u.sourceStates)) for (let i of u.sourceStates[t]) {
      let n = e.get(i);
      if (!n || !n.symbolId || n.symbolId !== t) return !1;
    }
    return !0;
  }(t.mirror.sceneGraph, i) && g(e) : (A(), g(e))) : f(t.mirror.sceneGraph, i) && e.dispatch(F.enqueue({
    type: c,
    message: _$$t("design_systems.actions.variant_changed"),
    button: {
      text: _$$t("design_systems.actions.return_to_variant"),
      action: A,
      editScope: "return-to-initial-variant"
    }
  }));
  p = i;
});
function g(e) {
  e.dispatch(F.dequeue({
    matchType: c
  }));
  u = null;
}
function f(e, t) {
  if (!u) return !1;
  let i = new Set();
  let n = Object.keys(u.selectedSwappedNodeIds);
  for (let a of t) for (let t of DS(e, a).map(e => e.guid).concat(a)) -1 !== n.indexOf(t) && i.add(t);
  return i.size === n.length;
}
function _() {
  if (!u) return [];
  let e = [...u.selectedNotSwappedNodeIds];
  for (let t of Object.keys(u.selectedSwappedNodeIds)) {
    let i = u.selectedSwappedNodeIds[t].slice(1, -1);
    if (i.split(",").length < 1) e.push(t);else {
      let r = glU.getInstanceSublayerNodeId(t, i);
      if (!r) return [];
      e.push(r);
    }
  }
  return e;
}
function A() {
  if (u) {
    Aw(u.sourceStates);
    let e = _();
    glU.selectInstances(e.join(","), !1);
    u = null;
  }
}
export const P = $$m0;
export const q = $$h1;