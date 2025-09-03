import { throwTypeError } from "../figma_app/465776";
import { Cb, wP, yu, Sn, k4, Au } from "../905/327738";
import { getSingletonSceneGraph } from "../905/700578";
export let $$s0 = "Component";
export function $$o18(e) {
  e = g(e = function (e) {
    e.endsWith("?") && (e = e.substring(0, e.length - 1));
    let t = e.indexOf("{");
    -1 !== t && (e = e.substring(0, t));
    return e;
  }(e = h(e)));
  e = (e = Cb(e)).replace(/[^0-9a-z]/gi, "");
  return wP(e);
}
let l = /\[(\w+)(\: ?([^\[\]]+))?\]/;
let d = RegExp(`(${l.source})*$`);
let $$c4 = new RegExp(/^Image ?(\(.+\))?/.source + d.source);
export function $$u15({
  index: e,
  rawProp: t
}) {
  let [i, n] = t.split("#");
  if (!i || !n) throw Error(`Unexpected rawProp format: ${t}`);
  let r = $$o18(i);
  r.match(/\d+$/) && (r = r.replace(/\d+$/, ""));
  return [`${r}${e + 1}`, n].join("#");
}
export function $$p11(e, t) {
  let i = {};
  let n = {};
  let a = {};
  for (let t of e) {
    let e = t.guid;
    let r = t.containingSymbolId;
    r && (n[e] = t, a[e] = r, i[r] = i[r] || [], i[r].push(e));
  }
  let s = new Set();
  let c = {};
  for (let e of Object.values(i)) {
    let t = new Set();
    for (let i of e) {
      let e = n[i];
      if (!e) continue;
      let r = $$o18(e.name);
      t.has(r) && (r = $$x8({
        usageProp: r,
        usedUsageProps: t
      }));
      t.add(r);
      s.add(r);
      c[i] = r;
    }
  }
  let u = {};
  for (let i of e) {
    let e = a[i.guid];
    let n = c[i.guid];
    if (e && n) {
      let a = null;
      let s = n;
      if ("NESTED_INSTANCE" === t) {
        if ("INSTANCE" !== i.type || !(a = yu(i))) continue;
        s += "/" + a;
      }
      let o = function (e, t) {
        let i = e.replace(/#/g, "");
        return [i = g(i), t].join("#");
      }(i.name, s);
      u[o] || (u[o] = {
        componentIdOrNull: a,
        guidByParentComponentId: {},
        tagsByParentComponentId: {}
      });
      u[o].guidByParentComponentId[e] = i.guid;
      let c = function (e) {
        let t = h(e);
        let i = d.exec(t)?.[0];
        return i ? Object.fromEntries(i.match(RegExp(l, "g"))?.map(e => {
          let t = l.exec(e);
          return t ? [t[1], t[3] || "true"] : [];
        }).filter(e => 2 === e.length) || []) : {};
      }(i.name);
      Object.keys(c).length > 0 && (u[o].tagsByParentComponentId[e] = c);
    }
  }
  return u;
}
export function $$m19(e) {
  let t = e.match(/\{(.+)\}/);
  if (!t) return {};
  let i = t[1].split(",");
  return i[0].startsWith("-") ? {
    omit: i.map(e => e.replace("-", ""))
  } : {
    pick: i
  };
}
function h(e) {
  let [t] = e.split("#");
  return t;
}
function g(e) {
  let t = d.exec(e);
  return t?.[0] ? e.replace(t[0], "").trim() : e;
}
export function $$f7(e) {
  return h(e).endsWith("?");
}
export function $$_9({
  component: e,
  rawProp: t
}) {
  let i = $$o18(t);
  return Sn(e.name) + Sn(i);
}
export function $$A10(e) {
  return Sn(e, $$s0);
}
export function $$y5(e) {
  return Sn(e, $$s0) + "Props";
}
export function $$b17(e) {
  let t = {};
  if (!Array.isArray(e) || e.length < 2) return t;
  let i = e.map($$o18);
  for (let n = 0; n < i.length; n++) {
    let r = i[n].replace(/\d+$/, "");
    t[r] || (t[r] = []);
    -1 === t[r].indexOf(e[n]) && t[r].push(e[n]);
  }
  let n = {};
  for (let e in t) {
    let i = t[e].sort((e, t) => {
      let i = e.match(/\d+$/);
      let n = t.match(/\d+$/);
      return i && n ? parseInt(i[0], 10) - parseInt(n[0], 10) : e.localeCompare(t);
    });
    let r = function (e) {
      if (!Array.isArray(e) || e.length < 2) return null;
      let t = e[0].replace(/\d+$/, "");
      for (let i = 0; i < e.length; i++) if (!e[i].startsWith(t) || parseInt(e[i].slice(t.length)) !== i + 1) return null;
      return t + "s";
    }(i);
    r && (n[r] = i);
  }
  return n;
}
export function $$v6(e) {
  return "INSTANCE_SWAP" === e.type && "string" == typeof e.defaultValue ? e.defaultValue : "NESTED_INSTANCE" === e.type ? e.componentId : null;
}
export function $$I21(e) {
  if (0 === e.length) return !0;
  let t = e[0];
  let i = $$v6(t.def);
  return e.every(e => t.def.type === e.def.type && i === $$v6(e.def));
}
export function $$E20(e, t, i = {}) {
  let n = [];
  for (let a of k4(e)) !a.isInstanceSublayer && (("SLOT" === t.def.type || "INSTANCE_SWAP" === t.def.type || "GROUPED_INSTANCE_SWAP" === t.def.type) && a.componentPropertyReferences()?.mainComponent === t.rawProp && n.push(a.guid), "NESTED_INSTANCE" === t.def.type && (a.isBubbled || i.exposeAllNestedInstances) && Object.values(t.def.guidByParentComponentId).includes(a.guid) && t.def.componentId === yu(a) && n.push(a.guid));
  return n;
}
export function $$x8({
  usageProp: e,
  usedUsageProps: t
}) {
  if (!t.has(e)) return e;
  let i = e.match(/^(.*?)(\d*)$/);
  let n = i ? i[1] : e;
  let r = 1;
  t.forEach(e => {
    if (e.startsWith(n)) {
      let t = parseInt(e.slice(n.length), 10);
      !isNaN(t) && t > r && (r = t);
    }
  });
  return `${n}${r + 1}`;
}
export function $$S16(e) {
  let t = {};
  for (let i of Object.keys(e)) {
    let e = $$o18(i);
    t[e] = t[e] || [];
    t[e].push(i);
  }
  let i = [];
  for (let n of Object.values(t)) {
    let t = function (e) {
      if (e.length < 3) return [];
      let t = e[0];
      if (!t || !("guidByParentComponentId" in t.def) || !$$I21(e)) return [];
      let i = {};
      for (let t of e) {
        if (!("guidByParentComponentId" in t.def)) return [];
        for (let e of Object.keys(t.def.guidByParentComponentId)) {
          i[e] = i[e] || [];
          i[e].push(t);
        }
      }
      let n = null;
      for (let [t, r] of Object.entries(i)) if (r.length === e.length) {
        n = t;
        break;
      }
      if (!n) return [];
      let s = {};
      for (let t of e) {
        if (!("guidByParentComponentId" in t.def)) return [];
        let e = t.def.guidByParentComponentId[n];
        if (!e) return [];
        s[e] = t;
      }
      let o = {};
      for (let e of Object.keys(s)) {
        let t = getSingletonSceneGraph().get(e);
        let i = t?.parentNode;
        for (; i && "NONE" !== i.stackMode && (o[i.guid] = o[i.guid] || [], o[i.guid].push(e), i?.type !== "SYMBOL");) i = i.parentNode;
      }
      let l = Object.entries(o);
      for (let [e, t] of (l.sort((e, t) => t[1].length - e[1].length), l)) {
        if (t.length < 3) continue;
        let i = new Set(t);
        return Au(e, {
          types: ["INSTANCE"]
        }).filter(e => i.has(e.guid)).map(e => s[e.guid]);
      }
      return [];
    }(n.map(t => e[t]));
    t.length < 3 || i.push(t);
  }
  return i;
}
let w = e => $$c4.test(e.name) && !e.isInstanceSublayer;
export function $$C12(e) {
  let t = Au(e.guid, {
    types: ["FRAME", "INSTANCE"]
  }).filter(w);
  w(e) && t.push(e);
  return t;
}
function T(e) {
  switch (e) {
    case "VARIANT":
      return 0;
    case "TEXT":
      return 1;
    case "BOOLEAN":
      return 2;
    case "INSTANCE_SWAP":
      return 3;
    case "GROUPED_INSTANCE_SWAP":
      return 4;
    case "IMAGE":
      return 5;
    case "NESTED_INSTANCE":
      return 6;
    default:
      return 7;
    case "SLOT":
      return 8;
  }
}
export function $$k3(e, t) {
  let i = T(e.def.type);
  let n = T(t.def.type);
  return i !== n ? i - n : "ARRAY" === e.devFriendlyProp.type && "ARRAY" === t.devFriendlyProp.type ? e.devFriendlyProp.index - t.devFriendlyProp.index : 0;
}
export function $$R1(e, t = !0, i) {
  let r = e.devFriendlyProp;
  let a = t && e.isOptional ? "?" : "";
  switch (r.type) {
    case "SIMPLE":
    case "SIMPLE_CHOICE":
    case "IMAGE":
    case "GROUPED_INSTANCE_SWAP":
      return `${r.key}${a}`;
    case "ARRAY":
      if (i.enableTsArrays) return `${r.key}${a}`;
      return `${r.nonArrayKey}${a}`;
    case "DERIVED_BOOLEAN":
      return "";
    default:
      throwTypeError(r);
  }
}
export function $$N2(e, t) {
  switch (e.devFriendlyProp.type) {
    case "DERIVED_BOOLEAN":
      return "";
    case "SIMPLE":
    case "SIMPLE_CHOICE":
    case "IMAGE":
    case "GROUPED_INSTANCE_SWAP":
      return e.typeRepr.typeName;
    case "ARRAY":
      if (t.enableTsArrays) {
        if (e.typeRepr.typeName.startsWith("{")) return `(${e.typeRepr.typeName})[]`;
        return `${e.typeRepr.typeName}[]`;
      }
      return e.typeRepr.typeName;
    default:
      throwTypeError(e.devFriendlyProp);
  }
}
export function $$P14(e, t) {
  let i = [];
  let n = new Set();
  for (let r of e) {
    let e = $$R1(r, !1, t);
    !e || n.has(e) || (i.push(r), n.add(e));
  }
  return i;
}
export function $$O13(e) {
  return e.length && e[0] ? e[0].toUpperCase() + e.slice(1) : e;
}
export const FE = $$s0;
export const GN = $$R1;
export const Hd = $$N2;
export const Ho = $$k3;
export const Ii = $$c4;
export const L_ = $$y5;
export const O7 = $$v6;
export const QJ = $$f7;
export const R0 = $$x8;
export const Vv = $$_9;
export const WG = $$A10;
export const _e = $$p11;
export const _j = $$C12;
export const bi = $$O13;
export const ep = $$P14;
export const fy = $$u15;
export const go = $$S16;
export const hM = $$b17;
export const j3 = $$o18;
export const rB = $$m19;
export const wn = $$E20;
export const xb = $$I21;