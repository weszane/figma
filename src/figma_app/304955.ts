import { getSingletonSceneGraph } from "../905/700578";
import { kv, iD } from "../figma_app/735943";
export function $$a3(e) {
  return $$m7(getSingletonSceneGraph().getInternalCanvas(), t => u(e, t.codeFileFullPathWithoutScheme) && kv(t));
}
export function $$s1(e, t) {
  let r = $$m7(getSingletonSceneGraph().getInternalCanvas(), e => u(t, e.codeFileFullPathWithoutScheme) && kv(e));
  let a = {};
  for (let e of r) a[e.codeFileFullPathWithoutScheme] = e;
  e(r);
  return a;
}
export function $$o2(e) {
  if ("string" == typeof e) {
    e.startsWith("file://") && (e = e.slice(7));
    let t = e.split("/").filter(Boolean);
    if (t.length > 1) return t[0];
  }
  return "";
}
export function $$l0(e, t) {
  if ("string" == typeof e && "" !== e) {
    if (t.startsWith(`/${e}/`)) return t.slice(e.length + 1);
    if (t.startsWith(`file:///${e}/`)) return t.replace(`file:///${e}/`, "file:///");
  }
  return t;
}
export function $$d6(e, t) {
  if ("" === e) return t;
  let r = {};
  for (let [n, i] of Object.entries(t)) r[$$l0(e, n)] = i;
  return r;
}
export function $$c8(e, t) {
  return "string" == typeof e && "" !== e ? "/" + (e = e.replace(/^\/+|\/+$/g, "")) + "/" + (t = t.replace(/^\/+/, "")) : t;
}
function u(e, t) {
  return "string" == typeof t && "" !== t && ("string" != typeof e || "" === e || (e = e.replace(/^\/+|\/+$/g, ""), t.startsWith("/" + e + "/")));
}
export function $$p4(e, t, r) {
  if (r in e && e[r]) return e[r];
  let a = function e(t, r) {
    if (r(t)) return t;
    if (t.childrenNodes) for (let n of t.childrenNodes) {
      let t = e(n, r);
      if (t) return t;
    }
  }(getSingletonSceneGraph().getInternalCanvas(), e => e.isCodeFile && iD(e.codeFileFullPathWithoutScheme, r));
  a && t(a);
  return a;
}
export function $$_9(e, t) {
  let r = $$m7(e, e => e.isCodeFile && !e.isSoftDeleted);
  let n = {};
  for (let e of r) n[e.codeFileFullPathWithoutScheme] = e;
  t(r);
  return n;
}
export function $$h5(e) {
  return $$m7(e, e => e.isCodeFile && !e.isSoftDeleted);
}
export function $$m7(e, t, {
  depth: r = 1 / 0
} = {}) {
  let n = [];
  if (!e) return n;
  if (t(e) && n.push(e), e.childrenNodes && r > 0) for (let i of e.childrenNodes) n.push(...$$m7(i, t, {
    depth: r - 1
  }));
  return n;
}
export const F$ = $$l0;
export const Hg = $$s1;
export const RM = $$o2;
export const V = $$a3;
export const W = $$p4;
export const Yg = $$h5;
export const es = $$d6;
export const is = $$m7;
export const mJ = $$c8;
export const o9 = $$_9;