import { colorProfiles, getMode, parsers } from "../vendor/284505";
let s = /[^\x00-\x7F]|[a-zA-Z_]/;
let o = /[^\x00-\x7F]|[-\w]/;
let Tok = {
  Function: "function",
  Ident: "ident",
  Number: "number",
  Percentage: "percentage",
  ParenClose: ")",
  None: "none",
  Hue: "hue",
  Alpha: "alpha"
};
let h = 0;
function d(e) {
  let r = e[h];
  let n = e[h + 1];
  return "-" === r || "+" === r ? /\d/.test(n) || "." === n && /\d/.test(e[h + 2]) : "." === r ? /\d/.test(n) : /\d/.test(r);
}
function p(e) {
  if (h >= e.length) return !1;
  let r = e[h];
  if (s.test(r)) return !0;
  if ("-" === r) {
    if (e.length - h < 2) return !1;
    let r = e[h + 1];
    if ("-" === r || s.test(r)) return !0;
  }
  return !1;
}
let g = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: .9,
  turn: 360
};
function m(e) {
  let r = "";
  if (("-" === e[h] || "+" === e[h]) && (r += e[h++]), r += v(e), "." === e[h] && /\d/.test(e[h + 1]) && (r += e[h++] + v(e)), ("e" === e[h] || "E" === e[h]) && (("-" === e[h + 1] || "+" === e[h + 1]) && /\d/.test(e[h + 2]) ? r += e[h++] + e[h++] + v(e) : /\d/.test(e[h + 1]) && (r += e[h++] + v(e))), p(e)) {
    let n = y(e);
    return "deg" === n || "rad" === n || "turn" === n || "grad" === n ? {
      type: Tok.Hue,
      value: r * g[n]
    } : void 0;
  }
  return "%" === e[h] ? (h++, {
    type: Tok.Percentage,
    value: +r
  }) : {
    type: Tok.Number,
    value: +r
  };
}
function v(e) {
  let r = "";
  for (; /\d/.test(e[h]);) r += e[h++];
  return r;
}
function y(e) {
  let r = "";
  for (; h < e.length && o.test(e[h]);) r += e[h++];
  return r;
}
function b(e) {
  let r = y(e);
  return "(" === e[h] ? (h++, {
    type: Tok.Function,
    value: r
  }) : "none" === r ? {
    type: Tok.None,
    value: void 0
  } : {
    type: Tok.Ident,
    value: r
  };
}
function O(e = "") {
  let r;
  let n = e.trim();
  let i = [];
  for (h = 0; h < n.length;) {
    if ("\n" === (r = n[h++]) || "	" === r || " " === r) {
      for (; h < n.length && ("\n" === n[h] || "	" === n[h] || " " === n[h]);) h++;
      continue;
    }
    if ("," === r) return;
    if (")" === r) {
      i.push({
        type: Tok.ParenClose
      });
      continue;
    }
    if ("+" === r) {
      if (h--, d(n)) {
        i.push(m(n));
        continue;
      }
      return;
    }
    if ("-" === r) {
      if (h--, d(n)) {
        i.push(m(n));
        continue;
      }
      if (p(n)) {
        i.push({
          type: Tok.Ident,
          value: y(n)
        });
        continue;
      }
      return;
    }
    if ("." === r) {
      if (h--, d(n)) {
        i.push(m(n));
        continue;
      }
      return;
    }
    if ("/" === r) {
      let e;
      for (; h < n.length && ("\n" === n[h] || "	" === n[h] || " " === n[h]);) h++;
      if (d(n) && (e = m(n)).type !== Tok.Hue) {
        i.push({
          type: Tok.Alpha,
          value: e
        });
        continue;
      }
      if (p(n) && "none" === y(n)) {
        i.push({
          type: Tok.Alpha,
          value: {
            type: Tok.None,
            value: void 0
          }
        });
        continue;
      }
      return;
    }
    if (/\d/.test(r)) {
      h--;
      i.push(m(n));
      continue;
    }
    if (s.test(r)) {
      h--;
      i.push(b(n));
      continue;
    }
    return;
  }
  return i;
}
function x(e) {
  e._i = 0;
  let r = e[e._i++];
  if (!r || r.type !== Tok.Function || "color" !== r.value || (r = e[e._i++]).type !== Tok.Ident) return;
  let n = colorProfiles[r.value];
  if (!n) return;
  let s = {
    mode: n
  };
  let o = w(e, !1);
  if (!o) return;
  let h = getMode(n).channels;
  for (function () {
    let e = 0;
    let r;
    let n;
  }(); e < h.length; e++) {
    r = o[e];
    n = h[e];
    r.type !== Tok.None && (s[n] = r.type === Tok.Number ? r.value : r.value / 100, "alpha" === n && (s[n] = Math.max(0, Math.min(1, s[n]))));
  }
  return s;
}
function w(e, r) {
  let n;
  let i = [];
  for (; e._i < e.length;) {
    if ((n = e[e._i++]).type === Tok.None || n.type === Tok.Number || n.type === Tok.Alpha || n.type === Tok.Percentage || r && n.type === Tok.Hue) {
      i.push(n);
      continue;
    }
    if (n.type === Tok.ParenClose) {
      if (e._i < e.length) return;
      continue;
    }
    return;
  }
  if (!(i.length < 3) && !(i.length > 4)) {
    if (4 === i.length) {
      if (i[3].type !== Tok.Alpha) return;
      i[3] = i[3].value;
    }
    3 === i.length && i.push({
      type: Tok.None,
      value: void 0
    });
    return i.every(e => e.type !== Tok.Alpha) ? i : void 0;
  }
}
function k(e, r) {
  e._i = 0;
  let n = e[e._i++];
  if (!n || n.type !== Tok.Function) return;
  let i = w(e, r);
  if (i) {
    i.unshift(n.value);
    return i;
  }
}
export let parse = e => {
  let r;
  if ("string" != typeof e) return;
  let n = O(e);
  let s = n ? k(n, !0) : void 0;
  let o = 0;
  let a = parsers.length;
  for (; o < a;) if (void 0 !== (r = parsers[o++](e, s))) return r;
  return n ? x(n) : void 0;
};
export const Ay = parse;
export const xW = Tok;
