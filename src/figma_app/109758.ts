import { jsx } from "react/jsx-runtime";
import { G1 } from "../figma_app/691470";
import { B9 } from "../905/125019";
import { l7 } from "../905/189185";
import { getI18nString } from "../905/303541";
import { UD } from "../figma_app/624361";
import { $, b as _$$b } from "../905/776478";
import { D } from "../905/629114";
import { xF } from "../905/866640";
import { A as _$$A } from "../905/929620";
import { Vm, ks } from "../figma_app/838407";
import { sF } from "../figma_app/193952";
export async function $$m0({
  node: e,
  description: t,
  background: r,
  clientLifecycleId: n,
  containingNodeId: i,
  endpoint: a
}) {
  await $$b1({
    node: e,
    description: t,
    background: r,
    clientLifecycleId: n,
    containingNodeId: i,
    endpoint: a
  });
}
async function g({
  node: e,
  base64: t,
  name: r,
  scaleMode: n,
  backgroundFill: i,
  shouldContinueStream: o
}) {
  if (!e.isAlive) return;
  let d = await xF(t, ["*"]);
  let c = await UD(d, "image/png", r);
  if (!e.isAlive || !o()) return;
  let p = [...e.fills];
  l7.ai("first-draft-set-image-fill", () => {
    e.insertImageInFillPaint(c);
  });
  let _ = e.fills[p.length];
  let h = B9(_.image?.hash || []);
  l7.ai("first-draft-set-image-fill", () => {
    _.imageScaleMode = n;
    e.fills = function (e, t) {
      let r = e.findIndex(e => "IMAGE" === e.type);
      return r >= 0 ? e.map((e, n) => n === r ? t : e).flat() : t;
    }(p, i ? [i, _] : [_]);
    e.name = r;
  });
  return h;
}
async function f({
  node: e,
  base64: t,
  foregroundBase64: r,
  background: n,
  metadata: i,
  shouldContinueStream: a
}) {
  "transparent" === n && (t = await T(t));
  let s = await g({
    node: e,
    base64: t,
    shouldContinueStream: a,
    name: i.description,
    scaleMode: "transparent" === n ? "FIT" : "FILL"
  });
  if (r) {
    let t = e.childrenNodes.find(e => "Foreground" === e.name);
    t && (await g({
      node: t,
      base64: r,
      shouldContinueStream: a,
      name: i.description,
      scaleMode: "FILL"
    }));
  }
  let o = D();
  o.skipInvisibleInstanceChildren = !0;
  let l = o.getNodeById(e.guid);
  l && (l.setSharedPluginData("jsx", "isImage", "true"), l.setSharedPluginData("jsx", "description", i.description), l.setSharedPluginData("jsx", "background", n), s && l.setSharedPluginData("jsx", "hash", s));
}
export async function $$E2({
  node: e,
  shouldContinueStream: t = () => !0
}) {
  await g({
    node: e,
    base64: $,
    shouldContinueStream: t,
    name: getI18nString("ai_image_tools.blocked"),
    scaleMode: "FIT",
    backgroundFill: {
      type: "SOLID",
      color: {
        r: 1,
        g: 1,
        b: 1,
        a: 1
      },
      visible: !0,
      opacity: 1,
      blendMode: "NORMAL"
    }
  });
}
async function y({
  id: e,
  desc: t,
  initialUserPrompt: r,
  jsxJSON: a,
  prompt: s,
  node: o,
  background: l,
  shouldContinueStream: c = () => !0,
  imagesTrace: u,
  description: m,
  clientLifecycleId: g,
  containingNodeId: f,
  endpoint: y
}) {
  let b = JSON.stringify(a, (e, t) => {
    if ("sharedPluginData" !== e && "isPartial" !== e && (!t || "object" != typeof t || 0 !== Object.keys(t).length)) return t;
  });
  let T = {
    width: o.size.x,
    height: o.size.y
  };
  try {
    Vm(o.guid, jsx(_$$A, {
      borderRadiusStyle: _$$b(o)
    }), {
      parentNodeId: f
    });
    let i = sF({
      clientLifecycleId: g
    });
    let {
      image,
      foregroundImage,
      description,
      trace
    } = await y({
      id: e,
      desc: t,
      initialUserPrompt: r,
      prompt: s,
      ...T,
      jsxJSON: b,
      background: l,
      description: m
    }, i);
    if (u && trace && (u[o.guid] = trace), !c()) return;
    let v = `data:image/png;base64,${image}`;
    let A = foregroundImage ? `data:image/png;base64,${foregroundImage}` : void 0;
    return {
      base64: v,
      foregroundBase64: A,
      background: l,
      metadata: {
        description,
        size: T
      }
    };
  } catch (e) {
    e instanceof G1 && u && e.trace && (u[o.guid] = e.trace);
    $$E2({
      node: o,
      shouldContinueStream: c
    });
    return e;
  } finally {
    ks(o.guid);
  }
}
export async function $$b1({
  id: e,
  desc: t,
  initialUserPrompt: r,
  jsxJSON: n,
  prompt: i,
  node: a,
  background: s,
  shouldContinueStream: o = () => !0,
  imagesTrace: l,
  description: d,
  clientLifecycleId: c,
  containingNodeId: u,
  endpoint: p
}) {
  let _ = await y({
    id: e,
    desc: t,
    initialUserPrompt: r,
    jsxJSON: n,
    prompt: i,
    node: a,
    background: s,
    shouldContinueStream: o,
    imagesTrace: l,
    description: d,
    clientLifecycleId: c,
    containingNodeId: u,
    endpoint: p
  });
  _ && (await f({
    ..._,
    node: a,
    shouldContinueStream: o
  }));
  return _;
}
async function T(e) {
  let t = document.createElement("canvas");
  let r = t.getContext("2d");
  await new Promise((n, i) => {
    let a = new Image();
    a.onload = function () {
      t.width = a.naturalWidth;
      t.height = a.naturalHeight;
      r.drawImage(a, 0, 0);
      n();
    };
    a.onerror = i;
    a.src = e;
  });
  let n = t.width;
  let i = t.height;
  let a = r.getImageData(0, 0, n, i);
  let s = 0;
  let o = i;
  let l = 0;
  let d = n;
  let c = (e, t) => 0 === a.data[t * n * 4 + 4 * e + 3];
  let u = e => {
    for (let t = l; t < d; t++) if (!c(t, e)) return !1;
    return !0;
  };
  let p = e => {
    for (let t = s; t < o; t++) if (!c(e, t)) return !1;
    return !0;
  };
  for (; s < o && u(s);) s++;
  for (; o - 1 > s && u(o - 1);) o--;
  for (; l < d && p(l);) l++;
  for (; d - 1 > l && p(d - 1);) d--;
  let _ = r.getImageData(l, s, d - l, o - s);
  let h = t.ownerDocument.createElement("canvas");
  h.width = _.width;
  h.height = _.height;
  h.getContext("2d").putImageData(_, 0, 0);
  return h.toDataURL();
}
export const Og = $$m0;
export const mF = $$b1;
export const zD = $$E2;