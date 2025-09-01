export var $$n1;
export function $$i0(e, t) {
  return e > t ? 1 : e < t ? -1 : 0;
}
(e => {
  let t = (e, t) => e < t ? -1 : 1;
  let r = Intl.Collator().resolvedOptions().locale + "-u-co-emoji";
  e.LEXICOGRAPHICALLY = (e, n) => "string" != typeof e ? t(e, n) : RegExp("\\p{Extended_Pictographic}|\\p{Regional_Indicator}", "u").test(e) && RegExp("\\p{Extended_Pictographic}|\\p{Regional_Indicator}", "u").test(n) ? e.localeCompare(n, r) : e.localeCompare(n);
  e.BY_DATETIME = (e, r) => {
    if ("string" != typeof e) return t(e, r);
    let n = Date.parse(e);
    let i = Date.parse(r);
    return n && i ? i - n : t(e, r);
  };
  e.byProperty = function (e, r = t) {
    return (t, n) => t[e] === n[e] ? 0 : r(t[e], n[e]);
  };
  e.byComparators = function (...e) {
    return (t, r) => {
      for (let n = 0; n < e.length; n++) {
        let i = e[n](t, r);
        if (0 !== i) return i;
      }
      return 0;
    };
  };
  e.reverse = function (e) {
    return (t, r) => -1 * e(t, r);
  };
})($$n1 || ($$n1 = {}));
export const _ = $$i0;
export const f = $$n1;