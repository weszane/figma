let u = new Map();
let n = new Map();
export class $$r0 {
  format(e, t) {
    let a = this.strings.getStringForLocale(e, this.locale);
    return "function" == typeof a ? a(t, this) : a;
  }
  plural(e, t, a = "cardinal") {
    let n = t["=" + e];
    if (n) return "function" == typeof n ? n() : n;
    let r = this.locale + ":" + a;
    let i = u.get(r);
    i || (i = new Intl.PluralRules(this.locale, {
      type: a
    }), u.set(r, i));
    return "function" == typeof (n = t[i.select(e)] || t.other) ? n() : n;
  }
  number(e) {
    let t = n.get(this.locale);
    t || (t = new Intl.NumberFormat(this.locale), n.set(this.locale, t));
    return t.format(e);
  }
  select(e, t) {
    let a = e[t] || e.other;
    return "function" == typeof a ? a() : a;
  }
  constructor(e, t) {
    this.locale = e;
    this.strings = t;
  }
}
export const J = $$r0;