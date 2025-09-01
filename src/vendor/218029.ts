import n from "../vendor/243745";
let o = t => t.normalize("NFKD").split("");
let i = /^\s+$/;
let a = /^[`~!@#$%^&*()\-=_+{}[\]\|\\;':",./<>?]+$/;
let u = {
  insertOrder: "insertOrder",
  bestMatch: "bestMatch"
};
let c = {
  keySelector: t => t,
  threshold: .6,
  ignoreCase: !0,
  ignoreSymbols: !0,
  normalizeWhitespace: !0,
  returnMatchData: !1,
  useDamerau: !0,
  useSellers: !0,
  useSeparatedUnicode: !1,
  sortBy: u.bestMatch
};
let s = () => {};
let f = t => t instanceof Array ? t : [t];
function l(t, e) {
  let r = e.ignoreCase ? t.toLocaleLowerCase() : t;
  let u = [];
  let c = [];
  let s = !0;
  let f = 0;
  for (let t of e.useSeparatedUnicode ? o(r) : n(r)) {
    i.lastIndex = 0;
    a.lastIndex = 0;
    e.normalizeWhitespace && i.test(t) ? s || (u.push(" "), c.push(f), s = !0) : e.ignoreSymbols && a.test(t) || (e.useSeparatedUnicode ? u.push(t) : u.push(t.normalize()), c.push(f), s = !1);
    f += t.length;
  }
  for (c.push(t.length); " " === u[u.length - 1];) {
    u.pop();
    c.pop();
  }
  return {
    original: t,
    normal: u,
    map: c
  };
}
function d(t, e) {
  return {
    index: e[t.start],
    length: e[t.end + 1] - e[t.start]
  };
}
function h(t, e) {
  if (0 === e) return {
    index: 0,
    length: 0
  };
  let r = e;
  for (let e = t.length - 2; e > 0 && r > 1; e--) {
    let n = t[e];
    r = n[r] < n[r - 1] ? r : r - 1;
  }
  return {
    start: r - 1,
    end: e - 1
  };
}
function p() {
  return {
    start: 0,
    end: 0
  };
}
let g = () => !0;
let b = (t, e) => t < e;
function y(t, e) {
  let r = Array(t);
  for (let n = 0; n < t; n++) {
    r[n] = Array(e);
    r[n][0] = n;
  }
  for (let t = 0; t < e; t++) r[0][t] = t;
  return r;
}
function A(t, e) {
  let r = Array(t);
  r[0] = Array(e).fill(0);
  for (let n = 1; n < t; n++) {
    r[n] = Array(e);
    r[n][0] = n;
  }
  return r;
}
function x(t, e, r, n, o) {
  let i;
  let a = r[n];
  let u = r[n + 1];
  let c = t[n] === e[o] ? 0 : 1;
  let s = u[o] + 1;
  (i = a[o + 1] + 1) < s && (s = i);
  (i = a[o] + c) < s && (s = i);
  u[o + 1] = s;
}
function v(t, e, r, n) {
  for (let o = 0; o < t.length; o++) x(t, e, r, o, n);
}
function m(t, e, r, n) {
  if (0 === n) {
    v(t, e, r, n);
    return;
  }
  t.length > 0 && x(t, e, r, 0, n);
  for (let o = 1; o < t.length; o++) {
    let i;
    let a = r[o - 1];
    let u = r[o];
    let c = r[o + 1];
    let s = t[o] === e[n] ? 0 : 1;
    let f = c[n] + 1;
    (i = u[n + 1] + 1) < f && (f = i);
    (i = u[n] + s) < f && (f = i);
    t[o] === e[n - 1] && t[o - 1] === e[n] && (i = a[n - 1] + s) < f && (f = i);
    c[n + 1] = f;
  }
}
function S(t, e) {
  let r = e.score - t.score;
  if (0 !== r) return r;
  let n = t.match.start - e.match.start;
  if (0 !== n) return n;
  let o = t.keyIndex - e.keyIndex;
  if (0 !== o) return o;
  let i = t.lengthDiff - e.lengthDiff;
  return 0 !== i ? i : U(t, e);
}
function U(t, e) {
  return t.index - e.index;
}
function w(t, e, r, n, o, i, a) {
  let u = {
    item: r.item,
    normalized: r.normalized,
    score: n,
    match: o,
    index: r.index,
    keyIndex: r.keyIndex,
    lengthDiff: i
  };
  null == e[r.index] ? (e[r.index] = t.length, t.push(u)) : 0 > a(u, t[e[r.index]]) && (t[e[r.index]] = u);
}
let C = Math.max;
let B = t => t;
function L(t, e, r, n, o) {
  let i = Math.min(r.length, e + t.depth + 1);
  let a = Math.ceil((e + o + i) / 2);
  return 1 - (a - i) / a >= n;
}
function I(t, e, r, n, o, i) {
  return 1 - Math.min(o, i - (t.depth + 1)) / r.length >= n;
}
export function $$z0(t, e, r) {
  r = {
    ...c,
    ...r
  };
  let n = {
    children: {},
    candidates: [],
    depth: 0
  };
  !function (t, e, r, n) {
    for (let o of r) {
      let r = f(n.keySelector(o)).map((t, r) => ({
        index: e,
        keyIndex: r,
        item: o,
        normalized: l(t, n)
      }));
      for (let n of (e++, r)) !function (t, e, r) {
        let n = t;
        for (let t = 0; t < e.length; t++) {
          let r = e[t];
          null == n.children[r] && (n.children[r] = {
            children: {},
            candidates: [],
            depth: 0
          });
          n.depth = Math.max(n.depth, e.length - t);
          n = n.children[r];
        }
        n.candidates.push(r);
      }(t, n.normalized.normal, n);
    }
  }(n, 0, e, r);
  return function (t, e, r) {
    let n = r.useSellers ? A : y;
    let o = {
      score: r.useDamerau ? m : v,
      getLength: r.useSellers ? B : C,
      shouldUpdateScore: r.useSellers ? b : g,
      shouldContinue: r.useSellers ? I : L,
      walkBack: r.useSellers ? h : p,
      compareItems: function (t) {
        switch (t) {
          case u.bestMatch:
            return S;
          case u.insertOrder:
            return U;
          default:
            throw Error(`unknown sortBy method ${t}`);
        }
      }(r.sortBy)
    };
    let i = {};
    let a = [];
    let c = n(t.length + 1, e.depth + 1);
    if (r.threshold <= 0 || 0 === t.length) for (let r of e.candidates) w(a, i, r, 0, {
      index: 0,
      length: 0
    }, t.length, o.compareItems);
    !function (t, e, r, n, o, i, a) {
      let u = [];
      for (let r in t.children) {
        let n = t.children[r];
        u.push([n, 1, r, 0, e.length]);
      }
      let c = Array(t.depth);
      for (; 0 !== u.length;) {
        let [t, s, f, l, d] = u.pop();
        c[s - 1] = f;
        r.score(e, c, n, s - 1);
        let p = n[n.length - 1][s];
        let g = l;
        let b = d;
        if (r.shouldUpdateScore(p, d) && (g = s, b = p), t.candidates.length > 0) {
          let u = 1 - b / r.getLength(e.length, s);
          if (u >= a.threshold) {
            let a = h(n, g);
            let c = Math.abs(s - e.length);
            for (let e of t.candidates) w(o, i, e, u, a, c, r.compareItems);
          }
        }
        for (let n in t.children) {
          let o = t.children[n];
          r.shouldContinue(o, s, e, a.threshold, b, p) && u.push([o, s + 1, n, g, b]);
        }
      }
    }(e, t, o, c, a, i, r);
    let f = a.sort(o.compareItems);
    if (r.returnMatchData) {
      let t = r.useSellers ? d : s;
      return f.map(e => ({
        item: e.item,
        original: e.normalized.original,
        key: e.normalized.normal.join(""),
        score: e.score,
        match: t(e.match, e.normalized.map)
      }));
    }
    return f.map(t => t.item);
  }(l(t, r).normal, n, r);
}
export const $P = $$z0;