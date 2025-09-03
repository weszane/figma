import { $D } from '../905/11';
import { v } from '../905/121083';
import { ServiceCategories as _$$e } from '../905/165054';
import { D } from '../905/347702';
import { sx } from '../905/449184';
import { tr, W } from '../905/508408';
import { getFeatureFlags } from '../905/601108';
import { x1 } from '../905/714362';
import { anotherSubset, languageCodes, specialLanguages, defaultLanguage } from '../905/816253';
import { F } from '../905/844311';
import { isDevEnvironment } from '../figma_app/169182';
import { Bs, Jq, Sv, Zs } from '../figma_app/195123';
import { Lg } from '../figma_app/257275';
import { throwTypeError } from '../figma_app/465776';
import { O4 } from '../vendor/338581';
let n;
class y {
  constructor(e = [defaultLanguage], t = anotherSubset.concat(), r, n, a) {
    this.reportedFallbackTexts = new Set();
    this.initialized = !0;
    this.locales = this.setLocales(e);
    this.partiallySupportedLocales = t;
    this.dictionaries = this.setDictionaries(r, n, a);
    this.reportedTranslationIssues = this.setReportedTranslationIssues();
    this.memo = {
      ids: {},
      missing: []
    };
  }
  get pseudoLocale() {
    !this._pseudoLocale && specialLanguages.includes(this.locales[0]) && (this._pseudoLocale = this.locales[0]);
    this._pseudoLocale && !specialLanguages.includes(this.locales[0]) && (this._pseudoLocale = void 0);
    return this._pseudoLocale;
  }
  setLocales(e) {
    let t = [!getFeatureFlags().i18n_auth_it_it && 'it-it'].filter(Boolean);
    return this.locales = e.filter(e => !t.includes(e));
  }
  setDictionaries(e, t, r, n = this.locales) {
    return this.dictionaries = n.reduce((n, i) => {
      switch (i) {
        case 'ja':
        case 'es-es':
        case 'ko-kr':
        case 'pt-br':
        case 'es-la':
        case 'de':
        case 'fr':
        case 'du-ds':
          e && (n[i] = new v(i, e, t || {}));
          break;
        case 'du-ps':
        case 'nl-nl':
        case 'pl-pl':
        case 'it-it':
          n[i] = new v(i, F(i), {});
          break;
        case 'en':
        case 'aal':
        case 'aaa':
          r ? n[i] = new v(i, r, t || {}) : n[i] = new v(i, W, t || {});
          break;
        default:
          throwTypeError(i);
      }
      return n;
    }, {});
  }
  setReportedTranslationIssues() {
    return this.reportedTranslationIssues = this.locales.reduce((e, t) => {
      let r = Object.values(tr).reduce((e, t) => (e[t] = new Set(), e), {});
      e[t] = r;
      return e;
    }, {});
  }
  getDictionaries() {
    return this.dictionaries;
  }
  getDictionary(e) {
    return this.dictionaries[e];
  }
  reportMissingI18nDynamicId(e) {
    if (!this.reportedFallbackTexts.has(e)) {
      if (isDevEnvironment()) {
        console.warn(`[i18n] Translation not available for text: "${e}" on non-production environments`);
      } else {
        let t = `[Missing i18n dynamic id]: Cannot translate text: "${e}"`;
        $D(_$$e.GROWTH_PLATFORM, new Error(t));
      }
      this.reportedFallbackTexts.add(e);
    }
  }
  getTranslatedDynamicContent(e, t) {
    let r;
    if (!this.initialized) {
      x1('i18n', 'text helper for dynamic db string used before I18nState initialization completed', {
        id: e
      }, {
        reportAsSentryError: !0
      });
      return '';
    }
    if (t === '') return t;
    if (!e) {
      this.reportMissingI18nDynamicId(t);
      return this.getPseudoLocalizedDynamicString(t);
    }
    for (let t = 0; t < this.locales.length; t++) {
      let n = this.locales[t];
      let a = this.getDictionary(this.locales[t]);
      if (!a) {
        this.handleTranslationIssue(n, this.locales[0], e, tr.DICT_NOT_LOADED);
        continue;
      }
      try {
        r = a.getDynamicString(e);
      } catch (t) {
        this.handleTranslationIssue(n, this.locales[0], e, tr.BAD, t, 'dbDictionaryUrl');
        continue;
      }
      isDevEnvironment() || r != null || n === defaultLanguage || this.handleTranslationIssue(n, this.locales[0], e, tr.MISSING, void 0, 'dbDictionaryUrl');
    }
    return this.getPseudoLocalizedDynamicString(r ?? t);
  }
  handleTranslationIssue(e, t, r, n, i, a = 'dictionaryUrl') {
    let s = n === tr.MISSING && this.partiallySupportedLocales.includes(e);
    s && getFeatureFlags().i18n_disable_partial_str_logging || s && !r.startsWith('auth.') || this.reportedTranslationIssues[e][n].has(r) || n === tr.DICT_NOT_LOADED && this.reportedTranslationIssues[e][n].size > 0 || (this.reportedTranslationIssues[e][n].add(r), $$T3(e, t, r, n, i, a));
  }
  getPseudoLocalizedDynamicString(e) {
    return this.pseudoLocale === languageCodes.AAA ? Zs(e) : this.pseudoLocale === languageCodes.AAL ? Sv(e) : e;
  }
  getContent(e, t) {
    let r;
    if (!this.initialized) {
      x1('i18n', 'text helper used before I18nState initialization completed', {
        id: e
      }, {
        reportAsSentryError: !0
      });
      return [];
    }
    for (let n = 0; n < this.locales.length; n++) {
      let i = this.locales[n];
      let a = this.getDictionary(this.locales[n]);
      if (!a) {
        this.handleTranslationIssue(i, this.locales[0], e, tr.DICT_NOT_LOADED);
        continue;
      }
      try {
        r = a?.getCompiled(e, t);
      } catch (t) {
        t.code === O4.MISSING_VALUE ? this.handleTranslationIssue(i, this.locales[0], e, tr.MISSING_ARGS, t) : this.handleTranslationIssue(i, this.locales[0], e, tr.BAD, t);
        continue;
      }
      if (r) break;
      this.handleTranslationIssue(i, this.locales[0], e, tr.MISSING);
    }
    r || (r = []);
    return this.runGlobalTransforms(r, e);
  }
  getPrimaryLocale(e) {
    return (e ? this.locales[0] : this.locales.filter(e => !specialLanguages.includes(e))[0]) || defaultLanguage;
  }
  runGlobalTransforms(e, t) {
    if (this.pseudoLocale === languageCodes.AAA) {
      let t = e => e.map(e => typeof e == 'string' ? Zs(e) : Array.isArray(e) ? t(e) : e);
      e = t(e);
    }
    if (this.pseudoLocale === languageCodes.AAL) {
      let t = e => e.map(e => typeof e == 'string' ? Sv(e) : Array.isArray(e) ? t(e) : e);
      e = Jq(t(e));
    }
    getFeatureFlags().l10n_string_inspector && (e = [...e, Bs(t)]);
    return e;
  }
}
let b = () => !(isDevEnvironment() || Lg());
let $$T3 = D((e, t, r, n, i, l = 'dictionaryUrl') => {
  let c = document.getElementById(l)?.getAttribute('href');
  let p = `${n} for id: ${r}`;
  if (n !== tr.MISSING_ARGS && (p += ` in locale: ${e}`), i && (p += `. Error: ${i.message}`), e === t && c && (p += `. Dictionary URL: ${c}`), b()) {
    switch (n) {
      case tr.BAD:
        if (getFeatureFlags().i18n_disable_bad_str_logging || getFeatureFlags().i18n_sample_string_sentry_errors && Math.random() > 0.01) return;
        $D(_$$e.GROWTH_PLATFORM, new Error(p));
        return;
      case tr.MISSING:
        if (getFeatureFlags().i18n_disable_missing_str_logging) return;
        getFeatureFlags().i18n_sample_string_sentry_errors && Math.random() <= 0.01 && $D(_$$e.GROWTH_PLATFORM, new Error(p));
        getFeatureFlags().i18n_sample_string_datadog && Math.random() <= 0.01 && sx('Missing i18n String', {
          i18nId: r,
          message: i?.message,
          locale: e,
          dictURL: c
        }, {
          forwardToDatadog: !0
        });
        return;
      case tr.DICT_NOT_LOADED:
        if (getFeatureFlags().i18n_disable_dict_logging || getFeatureFlags().i18n_sample_dict_unloaded && Math.random() > 0.01) return;
        sx('i18n Dict Not loaded at string evaluation', {
          i18nId: r,
          message: i?.message,
          locale: e,
          dictURL: c
        }, {
          forwardToDatadog: !0
        });
        return;
      case tr.MISSING_ARGS:
      case tr.UNKNOWN:
        if (getFeatureFlags().i18n_disable_miss_args_logging || getFeatureFlags().i18n_sample_string_sentry_errors && Math.random() > 0.01) return;
        $D(_$$e.GROWTH_PLATFORM, new Error(p));
        return;
      default:
        throwTypeError(n);
    }
  } else if (!b()) {
    switch (n) {
      case tr.BAD:
      case tr.MISSING_ARGS:
      case tr.UNKNOWN:
        console.warn(`Critical I18n Error: ${p}`);
        return;
      case tr.DICT_NOT_LOADED:
      case tr.MISSING:
        console.warn(`I18n Warning: ${p}`);
        return;
      default:
        throwTypeError(n);
    }
  }
});
export function $$I2(e = !0) {
  n || (x1('i18n', 'I18nState object referenced before initialization completed', {}, {
    reportAsSentryError: e
  }), $$v0(), n.initialized = !1);
  return n;
}
export function $$S1() {
  let e = $$I2();
  return !!e && e.getPrimaryLocale(!0) === languageCodes.EN;
}
export function $$v0(e = [defaultLanguage], t = anotherSubset.concat(), r, a, s) {
  n ? (n.setLocales(e), n.setDictionaries(r, a, s), n.setReportedTranslationIssues(), n.initialized = !0, n.partiallySupportedLocales = t) : n = new y(e, t, r, a, s);
}
export const Cq = $$v0;
export const EZ = $$S1;
export const Gq = $$I2;
export const tu = $$T3;