import { reportError } from '../905/11';
import { LocalizationHandler } from '../905/121083';
import { ServiceCategories } from '../905/165054';
import { trackEventAnalytics } from '../905/449184';
import { TranslationErrors, W } from '../905/508408';
import { getFeatureFlags } from '../905/601108';
import { logError } from '../905/714362';
import { anotherSubset, defaultLanguage, languageCodes, specialLanguages } from '../905/816253';
import { F } from '../905/844311';
import { isDevEnvironment } from '../figma_app/169182';
import { encodeZeroWidth, replaceWordCharacters, transformWithAccents, wrapArray } from '../figma_app/195123';
import { throwTypeError } from '../figma_app/465776';

/**
 * I18nState class manages localization, dictionaries, and translation issues.
 * Original class name: y
 */
class I18nState {
  /** Tracks reported fallback texts to avoid duplicate reporting */
  reportedFallbackTexts: Set<string>;
  /** Indicates if the state is initialized */
  initialized: boolean;
  /** List of active locales */
  locales: string[];
  /** List of partially supported locales */
  partiallySupportedLocales: string[];
  /** Dictionary objects for each locale */
  dictionaries: Record<string, LocalizationHandler>;
  /** Tracks reported translation issues by locale and error type */
  reportedTranslationIssues: Record<string, Record<string, Set<string>>>;
  /** Memoization for ids and missing translations */
  memo: {
    ids: Record<string, unknown>;
    missing: string[];
  };
  /** Current pseudo locale, if any */
  _pseudoLocale?: string;

  /**
   * Constructs the I18nState.
   * @param locales - Array of locale codes.
   * @param partiallySupportedLocales - Array of partially supported locale codes.
   * @param dict - Main dictionary data.
   * @param fallbackDict - Fallback dictionary data.
   * @param extraDict - Extra dictionary data.
   */
  constructor(locales: string[] = [defaultLanguage], partiallySupportedLocales: string[] = anotherSubset.concat(), dict?: any, fallbackDict?: any, extraDict?: any) {
    this.reportedFallbackTexts = new Set();
    this.initialized = true;
    this.locales = this.setLocales(locales);
    this.partiallySupportedLocales = partiallySupportedLocales;
    this.dictionaries = this.setDictionaries(dict, fallbackDict, extraDict);
    this.reportedTranslationIssues = this.setReportedTranslationIssues();
    this.memo = {
      ids: {},
      missing: []
    };
  }

  /**
   * Returns the current pseudo locale if active.
   * Original getter: pseudoLocale
   */
  get pseudoLocale(): string | undefined {
    if (!this._pseudoLocale && specialLanguages.includes(this.locales[0])) {
      this._pseudoLocale = this.locales[0];
    }
    if (this._pseudoLocale && !specialLanguages.includes(this.locales[0])) {
      this._pseudoLocale = undefined;
    }
    return this._pseudoLocale;
  }

  /**
   * Filters out unsupported locales and sets the active locales.
   * Original method: setLocales
   */
  setLocales(locales: string[]): string[] {
    const excluded = [!getFeatureFlags().i18n_auth_it_it && 'it-it'].filter(Boolean);
    this.locales = locales.filter(l => !excluded.includes(l));
    return this.locales;
  }

  /**
   * Initializes dictionaries for each locale.
   * Original method: setDictionaries
   */
  setDictionaries(dict?: any, fallbackDict?: any, extraDict?: any, locales: string[] = this.locales): Record<string, LocalizationHandler> {
    this.dictionaries = locales.reduce((acc, locale) => {
      switch (locale) {
        case 'ja':
        case 'es-es':
        case 'ko-kr':
        case 'pt-br':
        case 'es-la':
        case 'de':
        case 'fr':
        case 'du-ds':
          if (dict) acc[locale] = new LocalizationHandler(locale, dict, fallbackDict || {});
          break;
        case 'du-ps':
        case 'nl-nl':
        case 'pl-pl':
        case 'it-it':
          acc[locale] = new LocalizationHandler(locale, F(locale), {});
          break;
        case 'en':
        case 'aal':
        case 'aaa':
          acc[locale] = new LocalizationHandler(locale, extraDict ?? W, fallbackDict || {});
          break;
        default:
          throwTypeError(locale);
      }
      return acc;
    }, {} as Record<string, LocalizationHandler>);
    return this.dictionaries;
  }

  /**
   * Initializes the reported translation issues structure.
   * Original method: setReportedTranslationIssues
   */
  setReportedTranslationIssues(): Record<string, Record<string, Set<string>>> {
    this.reportedTranslationIssues = this.locales.reduce((acc, locale) => {
      const errors = Object.values(TranslationErrors).reduce((errAcc, errType) => {
        errAcc[errType] = new Set();
        return errAcc;
      }, {} as Record<string, Set<string>>);
      acc[locale] = errors;
      return acc;
    }, {} as Record<string, Record<string, Set<string>>>);
    return this.reportedTranslationIssues;
  }

  /**
   * Returns all dictionaries.
   * Original method: getDictionaries
   */
  getDictionaries(): Record<string, LocalizationHandler> {
    return this.dictionaries;
  }

  /**
   * Returns the dictionary for a specific locale.
   * Original method: getDictionary
   */
  getDictionary(locale: string): LocalizationHandler | undefined {
    return this.dictionaries[locale];
  }

  /**
   * Reports a missing i18n dynamic id.
   * Original method: reportMissingI18nDynamicId
   */
  reportMissingI18nDynamicId(id: string): void {
    if (!this.reportedFallbackTexts.has(id)) {
      if (isDevEnvironment()) {
        console.warn(`[i18n] Translation not available for text: "${id}" on non-production environments`);
      } else {
        const msg = `[Missing i18n dynamic id]: Cannot translate text: "${id}"`;
        reportError(ServiceCategories.GROWTH_PLATFORM, new Error(msg));
      }
      this.reportedFallbackTexts.add(id);
    }
  }

  /**
   * Gets the translated dynamic content for a given id and fallback text.
   * Original method: getTranslatedDynamicContent
   */
  getTranslatedDynamicContent(id: string, fallback: string): string {
    let result: string | undefined;
    if (!this.initialized) {
      logError('i18n', 'text helper for dynamic db string used before I18nState initialization completed', {
        id
      }, {
        reportAsSentryError: true
      });
      return '';
    }
    if (fallback === '') return fallback;
    if (!id) {
      this.reportMissingI18nDynamicId(fallback);
      return this.getPseudoLocalizedDynamicString(fallback);
    }
    for (const locale of this.locales) {
      const dict = this.getDictionary(locale);
      if (!dict) {
        this.handleTranslationIssue(locale, this.locales[0], id, TranslationErrors.DICT_NOT_LOADED);
        continue;
      }
      try {
        result = dict.getDynamicString(id);
      } catch (err: any) {
        this.handleTranslationIssue(locale, this.locales[0], id, TranslationErrors.BAD, err, 'dbDictionaryUrl');
        continue;
      }
      if (!isDevEnvironment() && result == null && locale !== defaultLanguage) {
        this.handleTranslationIssue(locale, this.locales[0], id, TranslationErrors.MISSING, undefined, 'dbDictionaryUrl');
      }
    }
    return this.getPseudoLocalizedDynamicString(result ?? fallback);
  }

  /**
   * Handles translation issues and logs/report as needed.
   * Original method: handleTranslationIssue
   */
  handleTranslationIssue(locale: string, primaryLocale: string, id: string, errorType: string, error?: Error, dictUrl: string = 'dictionaryUrl'): void {
    const isPartial = errorType === TranslationErrors.MISSING && this.partiallySupportedLocales.includes(locale);
    if (isPartial && getFeatureFlags().i18n_disable_partial_str_logging || isPartial && !id.startsWith('auth.') || this.reportedTranslationIssues[locale][errorType].has(id) || errorType === TranslationErrors.DICT_NOT_LOADED && this.reportedTranslationIssues[locale][errorType].size > 0) {
      return;
    }
    this.reportedTranslationIssues[locale][errorType].add(id);
    reportTranslationIssue(locale, primaryLocale, id, errorType, error, dictUrl);
  }

  /**
   * Returns pseudo-localized string if pseudo locale is active.
   * Original method: getPseudoLocalizedDynamicString
   */
  getPseudoLocalizedDynamicString(str: string): string {
    if (this.pseudoLocale === languageCodes.AAA) return replaceWordCharacters(str);
    if (this.pseudoLocale === languageCodes.AAL) return transformWithAccents(str);
    return str;
  }

  /**
   * Gets compiled content for a given id and values.
   * Original method: getContent
   */
  getContent(id: string, values?: any): any[] {
    let result: any[] | undefined;
    if (!this.initialized) {
      logError('i18n', 'text helper used before I18nState initialization completed', {
        id
      }, {
        reportAsSentryError: true
      });
      return [];
    }
    for (const locale of this.locales) {
      const dict = this.getDictionary(locale);
      if (!dict) {
        this.handleTranslationIssue(locale, this.locales[0], id, TranslationErrors.DICT_NOT_LOADED);
        continue;
      }
      try {
        result = dict?.getCompiled(id, values);
      } catch (err: any) {
        if (err.code === 'MISSING_VALUE') {
          this.handleTranslationIssue(locale, this.locales[0], id, TranslationErrors.MISSING_ARGS, err);
        } else {
          this.handleTranslationIssue(locale, this.locales[0], id, TranslationErrors.BAD, err);
        }
        continue;
      }
      if (result) break;
      this.handleTranslationIssue(locale, this.locales[0], id, TranslationErrors.MISSING);
    }
    result ||= [];
    return this.runGlobalTransforms(result, id);
  }

  /**
   * Returns the primary locale, optionally including special languages.
   * Original method: getPrimaryLocale
   */
  getPrimaryLocale(includeSpecial: boolean): string {
    return (includeSpecial ? this.locales[0] : this.locales.find(l => !specialLanguages.includes(l))) || defaultLanguage;
  }

  /**
   * Applies global transforms to the content array.
   * Original method: runGlobalTransforms
   */
  runGlobalTransforms(content: any[], id: string): any[] {
    if (this.pseudoLocale === languageCodes.AAA) {
      const transform = (arr: any[]): any[] => arr.map(item => typeof item === 'string' ? replaceWordCharacters(item) : Array.isArray(item) ? transform(item) : item);
      content = transform(content);
    }
    if (this.pseudoLocale === languageCodes.AAL) {
      const transform = (arr: any[]): any[] => arr.map(item => typeof item === 'string' ? transformWithAccents(item) : Array.isArray(item) ? transform(item) : item);
      content = wrapArray(transform(content));
    }
    if (getFeatureFlags().l10n_string_inspector) {
      content = [...content, encodeZeroWidth(id)];
    }
    return content;
  }
}

/** Singleton instance for I18nState (original variable: n) */
let i18nStateInstance: I18nState | undefined;

/**
 * Returns the I18nState instance, initializing if needed.
 * Original function: $$I2
 */
export function getI18nState(reportErrorFlag = true): I18nState {
  if (!i18nStateInstance) {
    logError('i18n', 'I18nState object referenced before initialization completed', {}, {
      reportAsSentryError: reportErrorFlag
    });
    initializeI18nState();
  }
  if (i18nStateInstance) i18nStateInstance.initialized = false;
  return i18nStateInstance!;
}

/**
 * Checks if the primary locale is English.
 * Original function: $$S1
 */
export function isPrimaryLocaleEnglish(): boolean {
  const state = getI18nState();
  return !!state && state.getPrimaryLocale(true) === languageCodes.EN;
}

/**
 * Initializes the I18nState singleton.
 * Original function: $$v0
 */
export function initializeI18nState(locales: string[] = [defaultLanguage], partiallySupportedLocales: string[] = anotherSubset.concat(), dict?: any, fallbackDict?: any, extraDict?: any): void {
  if (i18nStateInstance) {
    i18nStateInstance.setLocales(locales);
    i18nStateInstance.setDictionaries(dict, fallbackDict, extraDict);
    i18nStateInstance.setReportedTranslationIssues();
    i18nStateInstance.initialized = true;
    i18nStateInstance.partiallySupportedLocales = partiallySupportedLocales;
  } else {
    i18nStateInstance = new I18nState(locales, partiallySupportedLocales, dict, fallbackDict, extraDict);
  }
}

/**
 * Determines if the environment is production.
 * Original function: b
 */
const isProductionEnv = (): boolean => !isDevEnvironment();

/**
 * Reports translation issues to error tracking or analytics.
 * Original function: $$T3
 */
export function reportTranslationIssue(locale: string, primaryLocale: string, id: string, errorType: string, error?: Error, dictUrl: string = 'dictionaryUrl'): void {
  const dictHref = document.getElementById(dictUrl)?.getAttribute('href');
  let message = `${errorType} for id: ${id}`;
  if (errorType !== TranslationErrors.MISSING_ARGS) message += ` in locale: ${locale}`;
  if (error) message += `. Error: ${error.message}`;
  if (locale === primaryLocale && dictHref) message += `. Dictionary URL: ${dictHref}`;
  if (isProductionEnv()) {
    switch (errorType) {
      case TranslationErrors.BAD:
        if (getFeatureFlags().i18n_disable_bad_str_logging || getFeatureFlags().i18n_sample_string_sentry_errors && Math.random() > 0.01) return;
        reportError(ServiceCategories.GROWTH_PLATFORM, new Error(message));
        return;
      case TranslationErrors.MISSING:
        if (getFeatureFlags().i18n_disable_missing_str_logging) return;
        if (getFeatureFlags().i18n_sample_string_sentry_errors && Math.random() <= 0.01) reportError(ServiceCategories.GROWTH_PLATFORM, new Error(message));
        if (getFeatureFlags().i18n_sample_string_datadog && Math.random() <= 0.01) {
          trackEventAnalytics('Missing i18n String', {
            i18nId: id,
            message: error?.message,
            locale,
            dictURL: dictHref
          }, {
            forwardToDatadog: true
          });
        }
        return;
      case TranslationErrors.DICT_NOT_LOADED:
        if (getFeatureFlags().i18n_disable_dict_logging || getFeatureFlags().i18n_sample_dict_unloaded && Math.random() > 0.01) return;
        trackEventAnalytics('i18n Dict Not loaded at string evaluation', {
          i18nId: id,
          message: error?.message,
          locale,
          dictURL: dictHref
        }, {
          forwardToDatadog: true
        });
        return;
      case TranslationErrors.MISSING_ARGS:
      case TranslationErrors.UNKNOWN:
        if (getFeatureFlags().i18n_disable_miss_args_logging || getFeatureFlags().i18n_sample_string_sentry_errors && Math.random() > 0.01) return;
        reportError(ServiceCategories.GROWTH_PLATFORM, new Error(message));
        return;
      default:
        throwTypeError(errorType);
    }
  } else {
    switch (errorType) {
      case TranslationErrors.BAD:
      case TranslationErrors.MISSING_ARGS:
      case TranslationErrors.UNKNOWN:
        console.warn(`Critical I18n Error: ${message}`);
        return;
      case TranslationErrors.DICT_NOT_LOADED:
      case TranslationErrors.MISSING:
        console.warn(`I18n Warning: ${message}`);
        return;
      default:
        throwTypeError(errorType);
    }
  }
}

// Exported names refactored for clarity and traceability
export const Cq = initializeI18nState;
export const EZ = isPrimaryLocaleEnglish;
export const Gq = getI18nState;
export const tu = reportTranslationIssue;
