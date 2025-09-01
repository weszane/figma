import { k } from "../905/651849";
import { buildStaticUrl } from "../figma_app/169182";
import { ho } from "../figma_app/155287";
let s = RegExp("^(?:(https?:|wss?:)(?:[/][/]))?((?:[*][.])?(?:(?:(?:[-a-z\\d])+)[.])+[a-z]{2,})((?:[/][-a-zA-Z\\d%_.~+@]*)*$)");
let o = RegExp("^(?:(https?:|wss?:)(?:[/][/]))?((?:[*][.])?(?:(?:(?:[-a-z\\d])+)[.])+[a-z]{2,}|localhost)(?:[:](\\d+))?((?:[/][-a-zA-Z\\d%_.~+@]*)*$)");
let l = RegExp("^(?:(https?:|wss?:)(?:[/][/]))");
let d = e => !!o.test(e) || "*" === e;
function c(e) {
  if (0 === e.length) return {
    isValid: !1,
    validationErr: 'Invalid value for allowedDomains. To block all network access, set allowedDomains: ["none"]'
  };
  if (1 === e.length && "none" === e[0]) return {
    isValid: !0
  };
  if (e.includes("none")) return {
    isValid: !1,
    validationErr: "Invalid value for allowedDomains. 'none' must be the only value in the array."
  };
  for (let t of e) if (!d(t)) return {
    isValid: !1,
    validationErr: `Invalid value for allowedDomains. '${t}' must be a valid URL.`
  };
  let t = new Map();
  for (let i of e) {
    let e = t.get(i) || 0;
    t.set(i, e + 1);
  }
  for (let [e, i] of t) if (i > 1) return {
    isValid: !1,
    validationErr: `Invalid value for allowedDomains. '${e}' is duplicated.`
  };
  return {
    isValid: !0
  };
}
let u = 'Invalid value for networkAccess. If you want to allow all domains, please add a "reasoning" field to the networkAccess object.';
let p = 'Invalid value for networkAccess. If you want to allow localhost, please add a "reasoning" field to the networkAccess object. If you only need to access localhost for development, please add a "devAllowedDomains" field instead.';
export function $$m0(e) {
  return e.type === ho.VALIDATE && (e.text === u || e.text === p);
}
export function $$h2(e) {
  let {
    allowedDomains,
    devAllowedDomains,
    reasoning
  } = e;
  if (allowedDomains.includes("*") && !reasoning) return {
    isValid: !1,
    validationErr: u
  };
  if (allowedDomains.some(e => d(e) && !s.test(e) && "*" !== e) && !reasoning) return {
    isValid: !1,
    validationErr: p
  };
  if (reasoning && reasoning.length > 1e3) return {
    isValid: !1,
    validationErr: 'Invalid value for networkAccess. The "reasoning" field must be less than 1000 characters.'
  };
  let r = c(allowedDomains);
  if (!r.isValid) return r;
  for (let e of allowedDomains) if (!l.test(e) && "*" !== e && "none" !== e) return {
    isValid: !1,
    validationErr: `Invalid value for allowedDomains. '${e}' must include a scheme, such as https://.`
  };
  if (devAllowedDomains) {
    for (let e of devAllowedDomains) if (!d(e)) return {
      isValid: !1,
      validationErr: `Invalid value for devAllowedDomains. '${e}' must be a valid URL.`
    };
  }
  return {
    isValid: !0
  };
}
let g = (e, t = "") => {
  if (!t) return !0;
  let i = t.toLowerCase();
  let n = e.protocol.toLowerCase();
  return i === n || "http:" === i && "https:" === n || "ws:" === i && ("wss:" === n || "http:" === n || "https:" === n) || "wss:" === i && "https:" === n;
};
let f = (e, t = "") => {
  if (!t) return !1;
  let i = t.toLowerCase();
  let n = e.host.toLowerCase();
  if (i.startsWith("*")) {
    let e = i.slice(1);
    return !!n.endsWith(e);
  }
  return i === n;
};
let _ = (e, t = "") => {
  if (!t) return !0;
  let i = e.pathname;
  if ("/" === t && "" === i) return !0;
  let n = !t.endsWith("/");
  let r = t.split("/");
  let a = i.split("/");
  if (r.length > a.length) return !1;
  if (n) {
    if (r.length !== a.length) return !1;
  } else if ("" !== r.pop()) return !1;
  return !!r.every((e, t) => decodeURI(e) === decodeURI(a[t]));
};
export function $$A3(e, t) {
  let i = c(t);
  if (!i.isValid) {
    k.warn(i.validationErr);
    return !0;
  }
  if (t.includes("*")) return !0;
  if (1 === t.length && "none" === t[0]) return !1;
  try {
    let i = new Request(e).url;
    return t.some(e => function (e, t) {
      let i = t.match(s);
      if (!i) return !1;
      let [, n, r, a] = i;
      return g(e, n) && f(e, r) && _(e, a);
    }(new URL(i), e));
  } catch (e) {
    return !1;
  }
}
export function $$y1(e, t) {
  let i = e.contentDocument?.head;
  if (!i) return;
  let a = c(t);
  if (!a.isValid) {
    k.warn(a.validationErr);
    return;
  }
  if (t.includes("*")) return;
  let s = document.createElement("meta");
  s.httpEquiv = "Content-Security-Policy";
  s.content = function (e) {
    let t = e.join(" ");
    let i = "default-src data: blob:";
    let n = "script-src 'unsafe-inline' 'unsafe-eval' data: blob:";
    let a = "style-src 'unsafe-inline' 'unsafe-eval' data: blob:";
    let s = `font-src ${buildStaticUrl("webfont/")} data: blob:`;
    "none" !== t && (i += ` ${t}`, n += ` ${t}`, a += ` ${t}`, s += ` ${t}`);
    return `${i}; ${n}; ${a}; ${s};`;
  }(t);
  i.append(s);
}
export const jl = $$m0;
export const of = $$y1;
export const pI = $$h2;
export const pT = $$A3;