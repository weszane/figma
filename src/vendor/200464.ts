function n(e, r) {
  return i(e, r);
}
function i(e, r, n) {
  let h;
  let d = {};
  for (let p = 0; p < e.length; p++) {
    let g = e[p];
    let m = s(g);
    let v = "";
    if (v = void 0 === n ? m : n + "." + m, m === r.textNodeName) void 0 === h ? h = g[m] : h += "" + g[m];else if (void 0 === m) continue;else if (g[m]) {
      let e = i(g[m], r, v);
      let n = a(e, r);
      g[":@"] ? o(e, g[":@"], v, r) : 1 !== Object.keys(e).length || void 0 === e[r.textNodeName] || r.alwaysCreateTextNode ? 0 === Object.keys(e).length && (r.alwaysCreateTextNode ? e[r.textNodeName] = "" : e = "") : e = e[r.textNodeName];
      void 0 !== d[m] && d.hasOwnProperty(m) ? (Array.isArray(d[m]) || (d[m] = [d[m]]), d[m].push(e)) : r.isArray(m, v, n) ? d[m] = [e] : d[m] = e;
    }
  }
  "string" == typeof h ? h.length > 0 && (d[r.textNodeName] = h) : void 0 !== h && (d[r.textNodeName] = h);
  return d;
}
function s(e) {
  let r = Object.keys(e);
  for (let e = 0; e < r.length; e++) {
    let n = r[e];
    if (":@" !== n) return n;
  }
}
function o(e, r, n, i) {
  if (r) {
    let s = Object.keys(r);
    let o = s.length;
    for (let a = 0; a < o; a++) {
      let o = s[a];
      i.isArray(o, n + "." + o, !0, !0) ? e[o] = [r[o]] : e[o] = r[o];
    }
  }
}
function a(e, r) {
  let {
    textNodeName
  } = r;
  let i = Object.keys(e).length;
  return 0 === i || 1 === i && (!!e[textNodeName] || "boolean" == typeof e[textNodeName] || 0 === e[textNodeName]);
}
exports.prettify = n;