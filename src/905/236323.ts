import _require2 from "../vendor/73080";
import _require from "../vendor/232664";
Object.defineProperty(exports, "I18nDictionary", {
  enumerable: !0,
  get: function () {
    return s;
  }
});
let n = a(_require);
let r = a(_require2);
function a(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}
let s = class {
  formatters;
  locale;
  entries;
  compiled;
  constructor(e, t) {
    this.locale = e;
    this.entries = t;
    this.formatters = this.formatters = {
      getNumberFormat: n.$$default((e, t) => new Intl.NumberFormat(e, t)),
      getDateTimeFormat: n.$$default((e, t) => new Intl.DateTimeFormat(e, t)),
      getPluralRules: n.$$default((e, t) => new Intl.PluralRules(e, t))
    };
    this.compiled = {};
  }
  compile(e) {
    return new r.$$default(e, this.locale, void 0, {
      formatters: this.formatters
    });
  }
  getCompiled(e, t = {}) {
    let i = this.entries[e];
    if (!i || !i.string) return;
    let n = this.compiled[e];
    n || (n = this.compile(i.string), this.compiled[e] = n);
    let r = n.format(t);
    return Array.isArray(r) ? r : [r];
  }
};