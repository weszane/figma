import { xb } from "../figma_app/465776";
import { CWU, Z_n } from "../figma_app/763686";
import { md } from "../figma_app/27355";
import s from "../vendor/626715";
import { Ez } from "../figma_app/766708";
import { rh } from "../905/309735";
import { g } from "../905/578436";
import { F } from "../905/604606";
import { X } from "../905/456000";
import { U3, SG } from "../905/101482";
var o = s;
export let $$h16 = "Mode 1";
export function $$g10(e, t, i = "") {
  let n = e.map(e => e.name);
  let r = F(t).name;
  return g(i + r, n);
}
export function $$f4(e, t = "") {
  return A(e, t, e => e.name);
}
export function $$_17(e, t = "") {
  return A(e, t, e => e);
}
function A(e, t = "", i) {
  let n = t.slice(0, -1).split("/");
  let r = 1 === n.length ? "" : n.slice(0, -1).join("/") + "/";
  let a = Array.from(new Set(e.map(i).filter(e => e.startsWith(r) && e.replace(r, "").includes("/")).map(e => e.replace(r, "").split("/")[0])));
  return r + g(n[n.length - 1].replace(/\d+$/, "").trim(), a) + "/";
}
export function $$y7(e) {
  return function e(t) {
    let i = [t];
    for (let n of t.subgroups.sort(P)) i.push(...e(n));
    return i;
  }(function (e) {
    let t = {
      "": {
        name: "",
        subgroups: [],
        variables: []
      }
    };
    for (let i of e.sort((e, t) => -Ez(e.sortPosition, t.sortPosition))) {
      let e = $$w6(i.name);
      t.hasOwnProperty(e) || (t[e] = {
        name: e,
        subgroups: [],
        variables: []
      });
      t[e].variables.push(i);
    }
    for (let e of Object.keys(t)) {
      let i = e.split("/").slice(0, -1);
      for (let e = 1; e < i.length; e++) {
        let n = i.slice(0, e).join("/") + "/";
        t.hasOwnProperty(n) || (t[n] = {
          name: n,
          subgroups: [],
          variables: []
        });
      }
    }
    for (let [e, i] of Object.entries(t)) "" !== e && t[$$I11(e)].subgroups.push(i);
    return t[""];
  }(e));
}
export function $$b1(e, t) {
  let i = [];
  for (let n of e) t.includes(n.name) && i.push(...function e(t) {
    let i = [t.name];
    for (let n of t.subgroups) i.push(...e(n));
    return i;
  }(n));
  return o()(i);
}
export function $$v5(e) {
  return 0 === e.variables.length ? $$v5(e.subgroups[0]) : e.variables[0];
}
export function $$I11(e) {
  if (0 === e.length) return "";
  let t = e.split("/").slice(0, -1);
  return 1 === t.length ? "" : t.slice(0, -1).join("/") + "/";
}
export function $$E13(e, t) {
  return null === t ? 0 : e.filter(e => e.name.startsWith(t)).length;
}
export function $$x8(e, t) {
  return null === t ? [] : e.filter(e => e.name.startsWith(t));
}
export function $$S2(e, t, i) {
  return $$x8(e, t).every(e => CWU.renameVariable(e.node_id, rh(i + "/" + $$k14(e, t))));
}
export function $$w6(e) {
  return e.includes("/") ? e.split("/").slice(0, -1).join("/") + "/" : "";
}
export function $$C9(e, t) {
  let i = e.split("/");
  return rh(t + i[i.length - 1]);
}
export function $$T0(e) {
  let t = e.split("/");
  return t[t.length - 1];
}
export function $$k14(e, t) {
  return e.name.replace(t, "");
}
export function $$R15(e) {
  let t = e.slice(0, -1).split("/");
  return t[t.length - 1];
}
export function $$N12(e, t) {
  return $$I11(e) + t + "/";
}
function P(e, t) {
  let i = $$v5(e).sortPosition;
  let n = $$v5(t).sortPosition;
  return -Ez(i, n);
}
export function $$O19(e, t, i, n) {
  let a;
  let s;
  if (t) {
    let [i, n] = t;
    CWU.insertVariableBetween(e, i, n);
    return;
  }
  if (0 === n.length) return;
  let o = function (e, t) {
    if ("" === t) return [];
    let i = $$I11(t);
    let n = (i.match(RegExp("/", "g")) || []).length + 1;
    return e.filter(e => e.name.startsWith(i) && (e.name.match(RegExp("/", "g")) || []).length === n);
  }(n, i);
  let l = o.findIndex(e => e.name === i);
  if (-1 === l) return;
  let d = o[l];
  d && d.variables.length >= 1 ? a = d.variables[d.variables.length - 1] : l > 0 && (a = function e(t) {
    return 0 === t.variables.length ? e(t.subgroups[t.subgroups.length - 1]) : t.variables[t.variables.length - 1];
  }(o[l - 1]));
  l < o.length - 1 && (s = $$v5(o[l + 1]));
  CWU.insertVariableBetween(e, a?.node_id || "", s?.node_id || "");
}
export function $$D20(e, t) {
  return t ? e : null;
}
export function $$L21() {
  let e = md(X);
  return e.nameColumnWidth ? `${e.nameColumnWidth}px` : U3;
}
export function $$F22(e) {
  let t = md(X);
  return Array.from({
    length: e.length + 1
  }, (i, n) => {
    if (n === e.length) return `minmax(${SG}, 1fr)`;
    let r = t.valueColumnWidths?.get(e[n]?.id ?? "");
    return r ? `${r}px` : SG;
  }).join(" ");
}
export function $$M18(e) {
  switch (e.type) {
    case Z_n.STRING:
    case Z_n.FLOAT:
    case Z_n.BOOLEAN:
    case Z_n.COLOR:
      return e.value;
    case Z_n.ALIAS:
      return {
        type: "VARIABLE_ALIAS",
        id: e.value
      };
    case Z_n.NODE_FIELD_ALIAS:
    case Z_n.MAP:
    case Z_n.FONT_STYLE:
    case Z_n.EXPRESSION:
    case Z_n.SYMBOL_ID:
    case Z_n.TEXT_DATA:
    case Z_n.MANAGED_STRING_ALIAS:
    case Z_n.CMS_ALIAS:
    case Z_n.IMAGE:
    case Z_n.LINK:
    case Z_n.JS_RUNTIME_ALIAS:
    case Z_n.DATE:
    case Z_n.SLOT_CONTENT_ID:
      return;
    default:
      xb(e, "Unknown VariableDataType when converting to VariableModeValue");
  }
}
export const B9 = $$T0;
export const Ex = $$b1;
export const F$ = $$S2;
export const GC = function e(t) {
  let i = [...t.variables];
  for (let n of t.subgroups) i.push(...e(n));
  return i;
};
export const Lo = $$f4;
export const Od = $$v5;
export const Pf = $$w6;
export const Pw = $$y7;
export const Qo = $$x8;
export const US = $$C9;
export const Wc = $$g10;
export const Wx = $$I11;
export const ZR = $$N12;
export const cv = $$E13;
export const hF = $$k14;
export const ky = $$R15;
export const nm = $$h16;
export const om = $$_17;
export const pr = $$M18;
export const qQ = $$O19;
export const rN = $$D20;
export const x9 = $$L21;
export const yh = $$F22;