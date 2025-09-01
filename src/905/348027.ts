function i(e, t = "A") {
  return e.replace(/\w/g, t);
}
(function (e, t) {
  for (var i in t) Object.defineProperty(e, i, {
    enumerable: !0,
    get: t[i]
  });
})(exports, {
  PSEUDOLOCALE_CHARACTER_MAP: function () {
    return o;
  },
  pseudoLocalizeAAA: function () {
    return i;
  },
  pseudoLocalizeAAL: function () {
    return a;
  },
  wrapChunksWithTokens: function () {
    return s;
  }
});
let n = "\uFEFF\u2005\uFEFF\xb7\uFEFF\u2005";
let r = e => Math.ceil(2.1 * e / 10.18);
let a = e => {
  let t = [];
  let i = e.split("");
  let a = 0;
  if (i.forEach(e => {
    if (" " === e) {
      for (let e = 0; e < r(a); e++) t.push(n);
      a = 0;
    } else a++;
    t.push(o[e] ?? e);
  }), a > 0) for (let e = 0; e < r(a); e++) t.push(n);
  return t.join("");
};
let s = (e, t = "[~", i = "~]") => [t, ...e, i];
let o = {
  a: "\u0105",
  e: "\u0117",
  i: "\u012F",
  o: "\u1E53",
  u: "\u0173",
  A: "\u1E00",
  E: "\u0118",
  I: "\u0128",
  O: "\xd4",
  U: "\u0168"
};