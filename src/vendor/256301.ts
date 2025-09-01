function i(e, r) {
  return !!e.endsWith(r) && (e.length === r.length || "." === e[e.length - r.length - 1]);
}
function s(e, r) {
  let n = e.length - r.length - 2;
  let i = e.lastIndexOf(".", n);
  return -1 === i ? e : e.slice(i + 1);
}
function o(e, r, n) {
  if (null !== n.validHosts) {
    for (let e of n.validHosts) if (i(r, e)) return e;
  }
  let o = 0;
  if (r.startsWith(".")) for (; o < r.length && "." === r[o];) o += 1;
  return e.length === r.length - o ? null : s(r, e);
}
function a(e, r) {
  return e.slice(0, -r.length - 1);
}
function h(e, r) {
  let n = 0;
  let i = e.length;
  let s = !1;
  if (!r) {
    if (e.startsWith("data:")) return null;
    for (; n < e.length && 32 >= e.charCodeAt(n);) n += 1;
    for (; i > n + 1 && 32 >= e.charCodeAt(i - 1);) i -= 1;
    if (47 === e.charCodeAt(n) && 47 === e.charCodeAt(n + 1)) n += 2;else {
      let r = e.indexOf(":/", n);
      if (-1 !== r) {
        let i = r - n;
        let s = e.charCodeAt(n);
        let o = e.charCodeAt(n + 1);
        let a = e.charCodeAt(n + 2);
        let h = e.charCodeAt(n + 3);
        let d = e.charCodeAt(n + 4);
        if (5 === i && 104 === s && 116 === o && 116 === a && 112 === h && 115 === d) ;else if (4 === i && 104 === s && 116 === o && 116 === a && 112 === h) ;else if (3 === i && 119 === s && 115 === o && 115 === a) ;else if (2 === i && 119 === s && 115 === o) ;else for (let i = n; i < r; i += 1) {
          let r = 32 | e.charCodeAt(i);
          if (!(r >= 97 && r <= 122 || r >= 48 && r <= 57 || 46 === r || 45 === r || 43 === r)) return null;
        }
        for (n = r + 2; 47 === e.charCodeAt(n);) n += 1;
      }
    }
    let r = -1;
    let o = -1;
    let a = -1;
    for (let h = n; h < i; h += 1) {
      let n = e.charCodeAt(h);
      if (35 === n || 47 === n || 63 === n) {
        i = h;
        break;
      }
      64 === n ? r = h : 93 === n ? o = h : 58 === n ? a = h : n >= 65 && n <= 90 && (s = !0);
    }
    if (-1 !== r && r > n && r < i && (n = r + 1), 91 === e.charCodeAt(n)) return -1 !== o ? e.slice(n + 1, o).toLowerCase() : null;
    -1 !== a && a > n && a < i && (i = a);
  }
  for (; i > n + 1 && 46 === e.charCodeAt(i - 1);) i -= 1;
  let o = 0 !== n || i !== e.length ? e.slice(n, i) : e;
  return s ? o.toLowerCase() : o;
}
function d(e) {
  if (e.length < 7 || e.length > 15) return !1;
  let r = 0;
  for (let n = 0; n < e.length; n += 1) {
    let i = e.charCodeAt(n);
    if (46 === i) r += 1;else if (i < 48 || i > 57) return !1;
  }
  return 3 === r && 46 !== e.charCodeAt(0) && 46 !== e.charCodeAt(e.length - 1);
}
function p(e) {
  if (e.length < 3) return !1;
  let r = e.startsWith("[") ? 1 : 0;
  let n = e.length;
  if ("]" === e[n - 1] && (n -= 1), n - r > 39) return !1;
  let i = !1;
  for (; r < n; r += 1) {
    let n = e.charCodeAt(r);
    if (58 === n) i = !0;else if (!(n >= 48 && n <= 57 || n >= 97 && n <= 102 || n >= 65 && n <= 90)) return !1;
  }
  return i;
}
function g(e) {
  return p(e) || d(e);
}
function m(e) {
  return e >= 97 && e <= 122 || e >= 48 && e <= 57 || e > 127;
}
function v(e) {
  if (e.length > 255 || 0 === e.length || !m(e.charCodeAt(0)) && 46 !== e.charCodeAt(0) && 95 !== e.charCodeAt(0)) return !1;
  let r = -1;
  let n = -1;
  let i = e.length;
  for (let s = 0; s < i; s += 1) {
    let i = e.charCodeAt(s);
    if (46 === i) {
      if (s - r > 64 || 46 === n || 45 === n || 95 === n) return !1;
      r = s;
    } else if (!(m(i) || 45 === i || 95 === i)) return !1;
    n = i;
  }
  return i - r - 1 <= 63 && 45 !== n;
}
function y({
  allowIcannDomains: e = !0,
  allowPrivateDomains: r = !1,
  detectIp: n = !0,
  extractHostname: i = !0,
  mixedInputs: s = !0,
  validHosts: o = null,
  validateHostname: a = !0
}) {
  return {
    allowIcannDomains: e,
    allowPrivateDomains: r,
    detectIp: n,
    extractHostname: i,
    mixedInputs: s,
    validHosts: o,
    validateHostname: a
  };
}
let b = y({});
function O(e) {
  return void 0 === e ? b : y(e);
}
function x(e, r) {
  return r.length === e.length ? "" : e.slice(0, -r.length - 1);
}
export function $$w1() {
  return {
    domain: null,
    domainWithoutSuffix: null,
    hostname: null,
    isIcann: null,
    isIp: null,
    isPrivate: null,
    publicSuffix: null,
    subdomain: null
  };
}
export function $$k3(e) {
  e.domain = null;
  e.domainWithoutSuffix = null;
  e.hostname = null;
  e.isIcann = null;
  e.isIp = null;
  e.isPrivate = null;
  e.publicSuffix = null;
  e.subdomain = null;
}
export function $$_2(e, r, n, i, s) {
  let d = O(i);
  "string" != typeof e || (d.extractHostname ? d.mixedInputs ? s.hostname = h(e, v(e)) : s.hostname = h(e, !1) : s.hostname = e, 0 === r || null === s.hostname || d.detectIp && (s.isIp = g(s.hostname), s.isIp) || (d.validateHostname && d.extractHostname && !v(s.hostname) ? s.hostname = null : (n(s.hostname, d, s), 2 === r || null === s.publicSuffix || (s.domain = o(s.publicSuffix, s.hostname, d), 3 === r || null === s.domain || (s.subdomain = x(s.hostname, s.domain), 4 === r || (s.domainWithoutSuffix = a(s.domain, s.publicSuffix)))))));
  return s;
}
export function $$S0(e, r, n) {
  if (!r.allowPrivateDomains && e.length > 3) {
    let r = e.length - 1;
    let i = e.charCodeAt(r);
    let s = e.charCodeAt(r - 1);
    let o = e.charCodeAt(r - 2);
    let a = e.charCodeAt(r - 3);
    if (109 === i && 111 === s && 99 === o && 46 === a) {
      n.isIcann = !0;
      n.isPrivate = !1;
      n.publicSuffix = "com";
      return !0;
    }
    if (103 === i && 114 === s && 111 === o && 46 === a) {
      n.isIcann = !0;
      n.isPrivate = !1;
      n.publicSuffix = "org";
      return !0;
    }
    if (117 === i && 100 === s && 101 === o && 46 === a) {
      n.isIcann = !0;
      n.isPrivate = !1;
      n.publicSuffix = "edu";
      return !0;
    }
    if (118 === i && 111 === s && 103 === o && 46 === a) {
      n.isIcann = !0;
      n.isPrivate = !1;
      n.publicSuffix = "gov";
      return !0;
    } else if (116 === i && 101 === s && 110 === o && 46 === a) {
      n.isIcann = !0;
      n.isPrivate = !1;
      n.publicSuffix = "net";
      return !0;
    } else if (101 === i && 100 === s && 46 === o) {
      n.isIcann = !0;
      n.isPrivate = !1;
      n.publicSuffix = "de";
      return !0;
    }
  }
  return !1;
}
export const Ay = $$S0;
export const XP = $$w1;
export const I6 = $$_2;
export const FY = $$k3;