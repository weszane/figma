function n(e) {
  return e.match(/[\p{Letter}\p{Mark}]/gu)?.length === 1;
}
export function $$r0(e) {
  let t = [];
  let i = e.split(/(\s+)/).filter(e => e);
  let r = 0;
  let a = "";
  for (let e of i) if (e.length > 50 || e.includes("@") || e.includes("://") || e.match(RegExp("\\p{Number}", "gu"))) {
    t.push({
      text: e,
      index: r,
      skipSpellCheck: !0
    });
    r += e.length;
  } else {
    let i = !1;
    for (let s = 0; s < e.length; s++) {
      let o = e[s];
      let l = !1;
      n(o) ? (a += o, !function (e) {
        try {
          if (e.match(/[\p{Script_Extensions=Latin}\p{Script_Extensions=Cyrillic}\p{Mark}]/gu)?.length === 1) return !0;
          return !1;
        } catch (e) {
          return !0;
        }
      }(o) && (i = !0)) : (o.match(/[\u2019\u0027]/gu) || "-" === o) && s > 0 && s < e.length - 1 && n(e[s - 1]) && n(e[s + 1]) ? a += o : l = !0;
      (l || s === e.length - 1) && (a && (t.push({
        text: a,
        index: r,
        skipSpellCheck: i
      }), r += a.length, a = ""), l && (r += 1));
    }
  }
  return t;
}
export const B = $$r0;