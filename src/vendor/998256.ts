import { Hd } from "../vendor/641395";
import { T } from "../vendor/570893";
import { bJ, xH, tH, vq, Qd } from "../vendor/314131";
import { vF } from "../vendor/150583";
import { xv } from "../vendor/108286";
export function $$u1(e, n, i) {
  if (!(n in e)) return;
  let t = e[n];
  let r = i(t);
  "function" == typeof r && $$d5(r, t);
  try {
    e[n] = r;
  } catch (i) {
    T && vF.log(`Failed to replace method "${n}" in object`, e);
  }
}
export function $$l4(e, n, i) {
  try {
    Object.defineProperty(e, n, {
      value: i,
      writable: !0,
      configurable: !0
    });
  } catch (i) {
    T && vF.log(`Failed to add non-enumerable property "${n}" to object`, e);
  }
}
export function $$d5(e, n) {
  try {
    let i = n.prototype || {};
    e.prototype = n.prototype = i;
    $$l4(e, "__sentry_original__", n);
  } catch (e) {}
}
export function $$s6(e) {
  return e.__sentry_original__;
}
export function $$c7(e) {
  return Object.keys(e).map(n => `${encodeURIComponent(n)}=${encodeURIComponent(e[n])}`).join("&");
}
export function $$h3(e) {
  if (bJ(e)) return {
    message: e.message,
    name: e.name,
    stack: e.stack,
    ...g(e)
  };
  if (!xH(e)) return e;
  {
    let n = {
      type: e.type,
      target: p(e.target),
      currentTarget: p(e.currentTarget),
      ...g(e)
    };
    "undefined" != typeof CustomEvent && tH(e, CustomEvent) && (n.detail = e.detail);
    return n;
  }
}
function p(e) {
  try {
    return vq(e) ? Hd(e) : Object.prototype.toString.call(e);
  } catch (e) {
    return "<unknown>";
  }
}
function g(e) {
  if ("object" != typeof e || null === e) return {};
  {
    let n = {};
    for (let i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
    return n;
  }
}
export function $$m2(e, n = 40) {
  let i = Object.keys($$h3(e));
  i.sort();
  let t = i[0];
  if (!t) return "[object has no keys]";
  if (t.length >= n) return xv(t, n);
  for (let e = i.length; e > 0; e--) {
    let t = i.slice(0, e).join(", ");
    if (!(t.length > n)) {
      if (e === i.length) return t;
      return xv(t, n);
    }
  }
  return "";
}
export function $$_0(e) {
  return function e(n, i) {
    if (function (e) {
      if (!Qd(e)) return !1;
      try {
        let n = Object.getPrototypeOf(e).constructor.name;
        return !n || "Object" === n;
      } catch (e) {
        return !0;
      }
    }(n)) {
      let t = i.get(n);
      if (void 0 !== t) return t;
      let f = {};
      for (let t of (i.set(n, f), Object.getOwnPropertyNames(n))) void 0 !== n[t] && (f[t] = e(n[t], i));
      return f;
    }
    if (Array.isArray(n)) {
      let t = i.get(n);
      if (void 0 !== t) return t;
      let f = [];
      i.set(n, f);
      n.forEach(n => {
        f.push(e(n, i));
      });
      return f;
    }
    return n;
  }(e, new Map());
}
export const Ce = $$_0;
export const GS = $$u1;
export const HF = $$m2;
export const W4 = $$h3;
export const my = $$l4;
export const pO = $$d5;
export const sp = $$s6;
export const u4 = $$c7;