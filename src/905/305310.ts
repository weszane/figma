import { ErrorCode } from "../vendor/73080";
import { flatten } from "../905/55640";
import { I18nDictionary } from "../905/236323";
import { pseudoLocalizeAAA, pseudoLocalizeAAL, wrapChunksWithTokens } from "../905/348027";
import { Locale, I18nTranslationIssueType, PseudoLocales, PseudoLocale } from "../905/631683";
(function (e, t) {
  for (var i in t) Object.defineProperty(e, i, {
    enumerable: !0,
    get: t[i]
  });
})(exports, {
  getI18nState: function () {
    return u;
  },
  initI18nState: function () {
    return c;
  },
  translate: function () {
    return p;
  }
});
let l = class {
  locale = Locale.DEFAULT;
  dictionaries = {};
  reportTranslationIssue;
  reportedTranslationIssues = {};
  constructor(e, t, i) {
    this.setLocale(e);
    this.addDictionary(Locale.DEFAULT, t);
    this.reportTranslationIssue = i;
  }
  getLocale() {
    return this.locale;
  }
  setLocale(e) {
    this.locale = e;
    this.reportedTranslationIssues[e] || (this.reportedTranslationIssues[e] = Object.values(I18nTranslationIssueType).reduce((e, t) => (e[t] = new Set(), e), {}));
  }
  addDictionary(e, t) {
    this.dictionaries[e] = new I18nDictionary(e, t);
  }
  hasDictionary(e) {
    return e in this.dictionaries || PseudoLocales.includes(e);
  }
  getContent(e, t = {}) {
    let i;
    for (let r of this.locale === Locale.DEFAULT ? [Locale.DEFAULT] : [this.locale, Locale.DEFAULT]) {
      let a = this.dictionaries[r];
      if (!a) {
        this.handleTranslationIssue(r, e, I18nTranslationIssueType.DICT_NOT_LOADED);
        continue;
      }
      try {
        i = a?.getCompiled(e, t);
      } catch (t) {
        t.code === ErrorCode.MISSING_VALUE ? this.handleTranslationIssue(r, e, I18nTranslationIssueType.MISSING_ARGS, t.message) : this.handleTranslationIssue(r, e, I18nTranslationIssueType.BAD, t.message);
        continue;
      }
      if (i) break;
      this.handleTranslationIssue(r, e, I18nTranslationIssueType.MISSING);
    }
    i || (i = []);
    return this.runGlobalTransforms(i);
  }
  runGlobalTransforms(e) {
    if (this.locale === PseudoLocale.AAA) {
      let t = e => e.map(e => "string" == typeof e ? pseudoLocalizeAAA(e) : Array.isArray(e) ? t(e) : e);
      return t(e);
    }
    if (this.locale === PseudoLocale.AAL) {
      let t = e => e.map(e => "string" == typeof e ? pseudoLocalizeAAL(e) : Array.isArray(e) ? t(e) : e);
      return wrapChunksWithTokens(t(e));
    }
    return e;
  }
  handleTranslationIssue(e, t, i, n) {
    this.reportedTranslationIssues[e][i].has(t) || i === I18nTranslationIssueType.DICT_NOT_LOADED && this.reportedTranslationIssues[e][i].size > 0 || (this.reportedTranslationIssues[e][i].add(t), this.reportTranslationIssue({
      locale: e,
      primaryLocale: this.locale,
      id: t,
      issueType: i,
      errorMessage: n
    }));
  }
};
let d = null;
function c(e, t, i) {
  d = new l(e, t, i);
}
function u() {
  return d;
}
function p(e, t = {}) {
  return flatten(d.getContent(e, t));
}