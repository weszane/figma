import { Mz } from "../vendor/925040";
import { Ul } from "../905/973142";
import { p } from "../905/778115";
import { isInvalidValue } from "../905/216495";
import { LI, FS } from "../figma_app/646357";
import { dK, Sh, F4 } from "../figma_app/889655";
import { xP } from "../figma_app/164212";
let $$c0 = e => e.mirror.selectionProperties.componentProps;
let $$u12 = e => e.mirror.selectionProperties.resettableComponentPropAssignments;
let $$p21 = Mz([dK, Sh], F);
export function $$_14(e) {
  let {
    description,
    symbolDescription
  } = e.mirror.selectionProperties;
  return isInvalidValue(description) || isInvalidValue(symbolDescription) ? description ?? "" : description && description && (description.startsWith("<") && description.endsWith(">") || description.startsWith("{") && description.endsWith("}") || Ul(symbolDescription) === description) ? description : isInvalidValue(symbolDescription) ? symbolDescription : Ul(symbolDescription ?? "");
}
let $$h4 = Mz([dK, Sh], $$j17);
let $$m6 = Mz([dK, Sh], (e, t) => {
  let r = new Set();
  for (let n of t) {
    let t = e.get(n)?.containingSymbolId;
    t && r.add(t);
  }
  return Array.from(r);
});
let $$g10 = () => Mz([dK, (e, t) => t], $$f16);
export function $$f16(e, t) {
  return $$j17(e, t) ?? F(e, t);
}
let $$E1 = (() => {
  let e = $$g10();
  return t => e(t, Sh(t));
})();
let $$y7 = Mz([$$p21, $$h4], (e, t) => e ?? t);
let b = () => Mz([(e, t) => t, dK], (e, t) => {
  let r = p(e, e => {
    let r = t.get(e);
    return !!r && LI(r);
  });
  for (let n of e) {
    let e = t.get(n);
    let i = e?.containingStateGroupId ?? e?.containingSymbolId;
    if (i && i !== r) return;
  }
  return r ?? void 0;
});
let T = () => Mz([(e, t) => t, dK], (e, t) => p(e, e => {
  let r = t.get(e);
  return !!r && FS(r);
}) ?? void 0);
(() => {
  let e = b();
  return t => e(t, Sh(t));
})();
let $$I19 = () => Mz([$$g10(), b()], (e, t) => e ?? t);
let S = () => Mz([T()], e => e);
let v = (() => {
  let e = $$I19();
  return t => e(t, Sh(t));
})();
let $$A18 = Mz([v, dK], (e, t) => e ? t.get(e) : null);
let x = (() => {
  let e = S();
  return t => e(t, Sh(t));
})();
Mz([x, dK], (e, t) => e ? t.get(e) : null);
let $$N9 = Mz([$$c0, Sh], (e, t) => {
  if (e) return xP(t => e[t]?.containingInstance, t) ?? void 0;
});
let $$C20 = () => Mz([$$c0, (e, t) => t], (e, t) => {
  if (e) return xP(t => e[t]?.containingInstanceBackingSymbol, t) ?? void 0;
});
let $$w11 = () => Mz([$$c0, dK, (e, t) => t], (e, t, r) => {
  if (!e) return;
  let n = r.map(t => e[t]?.containingInstance || t);
  return U(e, n, t);
});
let O = Mz([$$c0, Sh], (e, t) => {
  if (e) return B(e, t);
});
let R = Mz([$$c0, Sh, dK], (e, t, r) => {
  if (e) return U(e, t, r);
});
let $$L15 = () => Mz([$$c0, (e, t) => t, dK], (e, t, r) => {
  if (!e) return;
  let n = [];
  for (let e of t) {
    let t = r.get(e);
    if (!t || t.isLooseComponent || t.isState || t.isStateGroup) return;
    t.symbolId && n.push(e);
  }
  return U(e, n, r) ?? B(e, n);
});
let $$P8 = Mz([R, O], (e, t) => t ?? e);
let $$D3 = () => Mz([dK, (e, t) => t], (e, t) => t.some(t => e.get(t)?.isInstanceSublayer ?? !1));
let $$k5 = (() => {
  let e = $$D3();
  return t => e(t, Sh(t));
})();
let $$M2 = Mz([F4], e => e.some(e => "SYMBOL" === e.type || !!e.isStateGroup));
function F(e, t) {
  return xP(t => e.get(t)?.containingSymbolId, t) ?? void 0;
}
export function $$j17(e, t) {
  return xP(t => e.get(t)?.containingStateGroupId, t) ?? void 0;
}
function U(e, t, r) {
  return xP(t => {
    let n = e[t]?.backingSymbol;
    if (n) return r.get(n)?.containingStateGroupId;
  }, t) ?? void 0;
}
function B(e, t) {
  return xP(t => e[t]?.backingSymbol ?? e[t]?.containingInstanceBackingSymbol, t) ?? void 0;
}
export let $$G13 = Mz([F4], e => e.every(e => "SYMBOL" === e.type || "INSTANCE" === e.type || !!e.isSymbolSublayer || !!e.isInstanceSublayer));
export const C1 = $$c0;
export const Lg = $$E1;
export const Ln = $$M2;
export const Ms = $$D3;
export const Nw = $$h4;
export const PY = $$k5;
export const QW = $$m6;
export const S8 = $$y7;
export const TJ = $$P8;
export const UR = $$N9;
export const VC = $$g10;
export const X9 = $$w11;
export const Yw = $$u12;
export const ZM = $$G13;
export const cv = $$_14;
export const d = $$L15;
export const fx = $$f16;
export const nM = $$j17;
export const od = $$A18;
export const tK = $$I19;
export const tc = $$C20;
export const y7 = $$p21;