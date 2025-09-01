import { defaultLanguage } from "../905/816253";
import { $$default } from "../vendor/232664";
import { $$default as _$$$$default } from "../vendor/73080";
export class $$s0 {
  constructor(e = defaultLanguage, t, i, a = {}) {
    this.locale = e;
    this.formatters = {
      getNumberFormat: $$default((e, t) => new Intl.NumberFormat(e, t)),
      getDateTimeFormat: $$default((e, t) => new Intl.DateTimeFormat(e, t)),
      getPluralRules: $$default((e, t) => new Intl.PluralRules(e, t))
    };
    this.entries = this.processEntries(t, a.mergeEntries);
    this.dynamicEntries = this.processDynamicEntries(i, a.mergeEntries);
    this.compiled = {};
  }
  setEntries(e, t) {
    this.entries = this.processEntries(e, t);
  }
  setDynamicEntries(e, t) {
    this.dynamicEntries = this.processDynamicEntries(e, t);
  }
  processEntries(e, t = !1) {
    return this.entries && (t || !this.entries) ? {
      ...this.entries,
      ...e
    } : e;
  }
  processDynamicEntries(e, t = !1) {
    return this.dynamicEntries && (t || !this.dynamicEntries) ? {
      ...this.dynamicEntries,
      ...e
    } : e;
  }
  compile(e) {
    return new _$$$$default(e, this.locale, void 0, {
      formatters: this.formatters
    });
  }
  getCompiled(e, t) {
    let i = this.entries[e];
    if (!i || !i.string) return;
    let n = this.compiled[e];
    n || (n = this.compile(i.string), this.compiled[e] = n);
    let r = n.format(t);
    return Array.isArray(r) ? r : [r];
  }
  getDynamicString(e) {
    return this.dynamicEntries[e]?.string;
  }
}
export const v = $$s0;