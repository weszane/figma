import { getSingletonSceneGraph } from "../905/700578";
export function $$r0(e, t) {
  if (!e) return [];
  let i = getSingletonSceneGraph();
  let r = i.get(e);
  if (!r) return [];
  let a = r.findAllWithCriteriaGUIDs(t);
  let s = [];
  for (let e of a) {
    let t = i.get(e);
    t && s.push(t);
  }
  return s;
}
export function $$a5(e) {
  let t = getSingletonSceneGraph().get(e);
  return t ? $$r0(t.guid, {
    types: ["INSTANCE"],
    recurseIfMatch: !1
  }) : [];
}
export function $$s7(e) {
  if (!e.symbolId) return null;
  let t = getSingletonSceneGraph().get(e.symbolId);
  return t ? t.isState ? t.parentGuid : t.guid : null;
}
export function $$o4(e) {
  return (e.isStateGroup ? e.sharedStateGroupVersion : e.sharedSymbolVersion) ?? "";
}
export function $$l3(e, t) {
  t && e.toLowerCase().startsWith(t.toLowerCase()) && (e = e.slice(t.length));
  let i = e.replace(/[^0-9a-z]/gi, " ").split(" ").filter(Boolean);
  let n = i[0];
  e = n && 1 === i.length ? n.charAt(0).toUpperCase() + n.slice(1) : i.map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join("");
  return t ? `${t}${e}` : e;
}
export function $$d1(e) {
  if (!e) return e;
  let t = e.replace(/[^0-9a-z]/gi, " ").split(" ").filter(Boolean);
  let i = t[0];
  return i && 1 === t.length ? i.charAt(0).toLowerCase() + i.slice(1) : t.map((e, t) => {
    let i = e.toLowerCase();
    return 0 === t ? i : i.charAt(0).toUpperCase() + i.slice(1);
  }).join("");
}
export function $$c6(e) {
  let t = e.match(/^\d+/);
  let i = e;
  if (t && t.length > 0) {
    let e = t[0];
    i = i.replace(e, "") + e;
  }
  return i;
}
export function $$u2(e) {
  if (!e) return [];
  let t = getSingletonSceneGraph();
  let i = t.get(e);
  if (!i) return [];
  let a = $$r0(i.guid, {
    types: ["COMPONENT", "INSTANCE"]
  });
  let s = new Set();
  let o = [];
  for (let e of a) if (!s.has(e.guid)) {
    if ("SYMBOL" === e.type) {
      o.push(e);
      s.add(e.guid);
      continue;
    }
    if ("INSTANCE" === e.type && !e.isInstanceSublayer && e.symbolId) {
      let i = t.get(e.symbolId);
      i && !s.has(i.guid) && (o.push(i), s.add(i.guid));
    }
  }
  return o;
}
export const Au = $$r0;
export const Cb = $$d1;
export const K = $$u2;
export const Sn = $$l3;
export const Uk = $$o4;
export const k4 = $$a5;
export const wP = $$c6;
export const yu = $$s7;