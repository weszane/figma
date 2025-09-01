let u;
let n = Symbol.$$for("react-aria.i18n.locale");
let r = Symbol.$$for("react-aria.i18n.strings");
export class $$i0 {
  getStringForLocale(e, t) {
    let a = this.getStringsForLocale(t)[e];
    if (!a) throw Error(`Could not find intl message ${e} in ${t} locale`);
    return a;
  }
  getStringsForLocale(e) {
    let t = this.strings[e];
    t || (t = function (e, t, a = "en-US") {
      if (t[e]) return t[e];
      let u = Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
      if (t[u]) return t[u];
      for (let e in t) if (e.startsWith(u + "-")) return t[e];
      return t[a];
    }(e, this.strings, this.defaultLocale), this.strings[e] = t);
    return t;
  }
  static getGlobalDictionaryForPackage(e) {
    if ("undefined" == typeof window) return null;
    let t = window[n];
    if (void 0 === u) {
      let e = window[r];
      if (!e) return null;
      for (let a in u = {}, e) u[a] = new $$i0({
        [t]: e[a]
      }, t);
    }
    let a = u?.[e];
    if (!a) throw Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
    return a;
  }
  constructor(e, t = "en-US") {
    this.strings = Object.fromEntries(Object.entries(e).filter(([, e]) => e));
    this.defaultLocale = t;
  }
}
export const B = $$i0;