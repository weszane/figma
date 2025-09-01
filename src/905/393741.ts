import { translate } from "../905/305310";
var n;
(function (e, t) {
  for (var i in t) Object.defineProperty(e, i, {
    enumerable: !0,
    get: t[i]
  });
})(exports, {
  FigmaURLType: function () {
    return n;
  },
  evaluateBooleanExpression: function () {
    return o;
  },
  evaluateSearchParamsExpression: function () {
    return function e(t, i, n) {
      switch (t[0]) {
        case "empty-params":
          return new URLSearchParams();
        case "original-params":
          return i.searchParams;
        case "merge":
          {
            let r = new URLSearchParams(e(t[1], i, n));
            for (let [e, a] of Object.entries(t[2])) {
              let t = l(a, i, n);
              r.set(e, t);
            }
            return r;
          }
        case "omit":
          {
            let r = new URLSearchParams(e(t[1], i, n));
            for (let e of t[2]) r.$$delete(e);
            return r;
          }
        case "if":
          {
            let [r, a] = o(t[1], i, n);
            return e(r ? t[2] : t[3], i, n);
          }
        default:
          a(t[0]);
          return Error(`evaluateSearchParamsExpression: unknown expression type: ${t[0]}`);
      }
    };
  },
  evaluateStringExpression: function () {
    return l;
  },
  evaluateURLTypeExpression: function () {
    return d;
  }
});
!function (e) {
  e.FILE_BROWSER = "FILE_BROWSER";
  e.COMMUNITY = "COMMUNITY";
  e.EDITOR = "EDITOR";
  e.PROTOTYPE = "PROTOTYPE";
  e.DECK = "DECK";
  e.PRESENTER = "PRESENTER";
  e.OTHER = "OTHER";
  e.OPEN_EXTERNAL = "OPEN_EXTERNAL";
  e.BELL_FEED = "BELL_FEED";
  e.POPOUT = "POPOUT";
  e.FIGJAM = "FIGJAM";
  e.SLIDES = "SLIDES";
}(n || (n = {}));
let a = e => {};
let s = e => e.slice(1);
function o(e, t, i) {
  if ("boolean" == typeof e) return [e, null];
  switch (e[0]) {
    case "pattern":
      {
        let i = t.pathname.match(RegExp(`^/?(?:${e[1]})`));
        return i ? [!0, i] : [!1, null];
      }
    case "has-param":
      return [t.searchParams.has(e[1]), null];
    case "and":
      {
        let n = null;
        for (let r of s(e)) {
          let [e, a] = o(r, t, i);
          if (!e) return [!1, null];
          n = a ?? n;
        }
        return [!0, n];
      }
    case "or":
      for (let n of s(e)) {
        let [e, r] = o(n, t, i);
        if (e) return [!0, r];
      }
      return [!1, null];
    case "not":
      {
        let [n, r] = o(e[1], t, i);
        return [!n, null];
      }
    case "empty":
      return [!l(e[1], t, i), null];
    case "non-empty":
      return [!!l(e[1], t, i), null];
    case "contains":
      {
        let n = l(e[1], t, i);
        let r = l(e[2], t, i);
        return [n.includes(r), null];
      }
    case "=":
      return [l(e[1], t, i) === l(e[2], t, i), null];
    case "!=":
      return [l(e[1], t, i) !== l(e[2], t, i), null];
    case "bool=":
      {
        let [n, r] = o(e[1], t, i);
        let [a, s] = o(e[2], t, i);
        return [n === a, null];
      }
    case "bool!=":
      {
        let [n, r] = o(e[1], t, i);
        let [a, s] = o(e[2], t, i);
        return [n !== a, null];
      }
    case "type=":
      return [d(e[1], t, i) === d(e[2], t, i), null];
    case "type!=":
      return [d(e[1], t, i) !== d(e[2], t, i), null];
    default:
      a(e[0]);
      return Error(`evaluateBooleanExpression: unknown expression type: ${e[0]}`);
  }
}
function l(e, t, i) {
  if ("string" == typeof e) return e;
  switch (e[0]) {
    case "pathname":
      return t.pathname;
    case "search":
      return t.search;
    case "hash":
      return t.hash;
    case "t":
      {
        if (null == e[2]) return translate(e[1], {}).join("");
        let n = {};
        for (let r of Object.keys(e[2])) n[r] = l(e[2][r], t, i) ?? "";
        return translate(e[1], n).join("");
      }
    case "match":
      if (null == i) throw Error("evaluateStringExpression: used match expression with no current match");
      return i[e[1]] ?? "";
    case "param":
      return t.searchParams.get(e[1]) ?? "";
    case "decode-uri-component":
      {
        let n = l(e[1], t, i);
        try {
          return n && decodeURIComponent(n);
        } catch {
          return n;
        }
      }
    case "encode-uri-component":
      {
        let n = l(e[1], t, i);
        return n && encodeURIComponent(n);
      }
    case "replace":
      {
        let n = l(e[1], t, i);
        let r = l(e[2], t, i);
        let a = l(e[3], t, i);
        try {
          return n.replace(RegExp(r, "g"), a);
        } catch (t) {
          let e = t instanceof Error ? t.message : String(t);
          throw Error(`evaluateStringExpression: replace: ${e}`);
        }
      }
    case "concat":
      return s(e).map(e => l(e, t, i)).join("");
    case "coalesce":
      for (let n of s(e)) {
        let e = l(n, t, i);
        if (e) return e;
      }
      return "";
    case "if":
      {
        let [n, r] = o(e[1], t, i);
        return l(n ? e[2] : e[3], t, i);
      }
    default:
      a(e[0]);
      return Error(`evaluateStringExpression: unknown expression type: ${e[0]}`);
  }
}
function d(e, t, i) {
  if ("string" == typeof e) return e;
  if ("if" === e[0]) {
    let [n, r] = o(e[1], t, i);
    return d(n ? e[2] : e[3], t, i);
  }
  a(e[0]);
  return Error(`evaluateURLTypeExpression: unknown expression type: ${e[0]}`);
}