import { memo } from 'react';
import { Fragment, jsx } from 'react/jsx-runtime';
import { reportError } from '../905/11';
import { ServiceCategories } from '../905/165054';
import { delay } from '../905/236856';
import { performanceMetricsTracker } from '../905/414972';
import { analyticsEventManager, trackEventAnalytics } from '../905/449184';
import { getFeatureFlags } from '../905/601108';
import { measureAsyncDuration } from '../905/670985';
import { logError } from '../905/714362';
import { anotherSubset, defaultLanguage, languageCodes } from '../905/816253';
import { getInitialOptions, getLocaleFallbacks, isDevEnvironment } from '../figma_app/169182';
import { getI18nState, initializeI18nState } from '../figma_app/363242';
import { flatten } from '../figma_app/656233';
import { desktopAPIInstance } from '../figma_app/876459';

/**
 * Returns i18n content for a given id and options.
 * @param id - The content id
 * @param options - Options for content retrieval
 * @returns The content array
 * (original: y)
 */
const getI18nContent = (id: string, options?: any) => getI18nState().getContent(id, options);

/**
 * Memoized i18n text component.
 * @param props - Component props
 * @returns JSX.Element | null
 * (original: $$v4)
 */
export const I18nTextComponent = memo(({
  id,
  options
}: {
  id: string;
  options?: any;
}) => {
  const content = flatten(getI18nContent(id, options));
  if (!content || content.length === 0) return null;
  const children = content.map((item, idx) => jsx(Fragment, {
    children: item
  }, idx));
  if (!getFeatureFlags().i18n_wrapper_element) {
    return jsx(Fragment, {
      children
    });
  }
  const attrs: Record<string, string> = isDevEnvironment() ? {
    'data-tx-id': id
  } : {};
  if (getFeatureFlags().datadog_rum_action_ids) {
    attrs['data-dd-action-name'] = id;
  }
  return jsx('i18n-text', {
    ...attrs,
    children
  });
});

/**
 * Renders i18n text as a React component.
 * @param id - The content id
 * @param options - Options for content retrieval
 * @returns JSX.Element
 * (original: $$b6)
 */
export function renderI18nText(id: string, ...[options]: any[]) {
  return jsx(I18nTextComponent, {
    id,
    options
  });
}

/**
 * Flattens i18n content and joins as string.
 * @param id - The content id
 * @param options - Options for content retrieval
 * @returns string
 * (original: $$I5)
 */
export function getI18nString(id: string, ...[options]: any[]) {
  return flatten(getI18nContent(id, options)).join('');
}

/**
 * Alias for getI18nString.
 * @param id - The content id
 * @param options - Options for content retrieval
 * @returns string
 * (original: $$E0)
 */
export function getI18nStringAlias(id: string, options?: any) {
  return getI18nString(id, options);
}

/**
 * Gets translated dynamic content.
 * @param id - The content id
 * @param options - Options for content retrieval
 * @returns any
 * (original: $$x1)
 */
export function getTranslatedDynamicContent(id: string, options?: any) {
  return getI18nState().getTranslatedDynamicContent(id, options);
}

/**
 * Fetches dictionary by environment.
 * @param env - Environment string
 * @returns Promise<any>
 * (original: S)
 */
async function fetchDictionaryByEnv(env: string) {
  const elementId = env === 'web' ? 'dictionaryUrl' : env === 'web_english' ? 'englishDictionaryUrl' : 'dbDictionaryUrl';
  const url = document.getElementById(elementId)?.getAttribute('href');
  if (url) return await fetchDictionary(url, env);
}

/**
 * Fetches and parses dictionary JSON.
 * @param url - Dictionary URL
 * @param env - Environment string
 * @returns Promise<any>
 * (original: C)
 */
async function fetchDictionary(url: string, env: string) {
  let failureCause: string | undefined;
  let responseText: string | undefined;
  let retries = 0;
  let reloadCache = false;
  const result = await retryAsync(async () => {
    retries += 1;
    const fetchOptions: RequestInit = {
      cache: reloadCache ? 'reload' : 'default'
    };
    let response: Response;
    try {
      response = await fetch(url, fetchOptions);
    } catch (err) {
      failureCause = 'network_error';
      return new Error(`Unable to fetch dictionary: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
    if (!response.ok) {
      failureCause = response.status === 403 ? 'forbidden' : response.status >= 500 ? 'internal_error' : 'unknown';
      return new Error(`Unable to fetch dictionary: ${response.statusText}`);
    }
    try {
      responseText = await response.text();
      return JSON.parse(responseText);
    } catch (err) {
      if (responseText != null && err instanceof SyntaxError) {
        reloadCache = true;
        const len = responseText.length;
        const snippet = len < 200 ? responseText : `${responseText.substring(0, 100)} [...] ${responseText.substring(len - 100)}`;
        logError('i18n helpers', 'Error parsing dictionary JSON', {
          error: err,
          dictUrl: url,
          responseTextLength: len,
          jsonString: snippet
        });
        failureCause = 'invalid_dict';
      } else {
        failureCause = 'unknown';
      }
      throw err;
    }
  });
  const retryCount = retries - 1;
  const retryLabel = retryCount < 3 ? `${retryCount}` : '3+';
  analyticsEventManager.trackDefinedMetric('i18n.dictionary_loaded', {
    failure_cause: failureCause,
    project: env,
    retries: retryLabel,
    success: result.success
  });
  if (result.success) return result.value;
  throw result.error;
}

/**
 * Retries an async function with backoff.
 * @param fn - Async function to retry
 * @param options - Retry options
 * @returns Promise<{success: boolean, value?: any, error?: any}>
 * (original: T)
 */
async function retryAsync<T>(fn: () => Promise<T>, options: {
  maxRetries?: number;
  retryBackoffs?: number[];
} = {}): Promise<{
  success: boolean;
  value?: T;
  error?: any;
}> {
  let lastError;
  const maxRetries = options.maxRetries ?? 3;
  const backoffs = options.retryBackoffs ?? [0, 100, 200];
  for (let attempt = maxRetries; attempt > 0; attempt--) {
    try {
      const backoff = backoffs[attempt - 1];
      if (backoff != null && backoff > 0) await delay(backoff);
      const value = await fn();
      return {
        success: true,
        value
      };
    } catch (err) {
      lastError ??= err;
    }
  }
  return {
    success: false,
    error: lastError
  };
}

/**
 * Checks if the user agent is a known bot.
 * @returns boolean
 * (original: k)
 */
function isKnownBot(): boolean {
  const ua = navigator.userAgent;
  return ['PetalBot', 'Naver', 'lin.ee'].some(bot => ua.includes(bot));
}

/**
 * Checks robots.txt fetch status.
 * @returns Promise<boolean>
 * (original: R)
 */
async function checkRobotsTxt(): Promise<boolean> {
  try {
    await fetch('/robots.txt', {
      cache: 'no-store',
      method: 'GET'
    });
    return false;
  } catch {
    return true;
  }
}

/**
 * Loads i18n state and dictionaries.
 * @param fetchDb - Whether to fetch DB dictionary
 * @param localeFallbacks - Locale fallbacks
 * @returns Promise<string | unknown>
 * (original: $$N7)
 */
export async function loadI18nState(fetchDb = false, localeFallbacks: string[] | null = null) {
  let webDict, englishDict, dbDict;
  registerI18nTextElement();
  const fallbacks = localeFallbacks ?? getLocaleFallbacks();
  performanceMetricsTracker.i18nLocale = fallbacks[0];
  try {
    const [webMs, englishMs, dbMs] = await Promise.all([measureAsyncDuration('fetchI18nPreloadDict', ServiceCategories.GROWTH_PLATFORM, async () => {
      webDict = await fetchDictionaryByEnv('web');
    }).then(res => res.duration).catch(async err => {
      if (!(await checkRobotsTxt())) reportError(ServiceCategories.GROWTH_PLATFORM, err);
    }), measureAsyncDuration('fetchEnglishPreloadDict', ServiceCategories.GROWTH_PLATFORM, async () => {
      try {
        englishDict = await fetchDictionaryByEnv('web_english');
      } catch (err) {
        if (isKnownBot()) return;
        let dictName = 'unknown';
        const url = document.getElementById('englishDictionaryUrl')?.getAttribute('href');
        if (url) {
          const parts = url.split('/');
          dictName = parts[parts.length - 1];
        }
        trackEventAnalytics('english_entry_dict_failure', {
          message: typeof err === 'string' ? err : err instanceof Error ? err.message : 'Unknown',
          dictionary: dictName
        });
        return err;
      }
    }).then(res => res.duration), fetchDb ? measureAsyncDuration('fetchI18nDbString', ServiceCategories.GROWTH_PLATFORM, async () => {
      dbDict = await fetchDictionaryByEnv('db');
    }).then(res => res.duration) : 0]);
    if (webMs) performanceMetricsTracker.i18nFetchPreloadedDictMs = Math.round(webMs);
    performanceMetricsTracker.i18nFetchPreloadedEnglishDictMs = Math.round(englishMs);
    performanceMetricsTracker.i18nFetchPreloadedDbDictMs = Math.round(dbMs);
  } catch (err) {
    console.warn(err);
    webDict = undefined;
    dbDict = undefined;
    return err;
  }
  initializeI18nState(fallbacks, undefined, webDict, dbDict, englishDict);
  return fallbacks[0];
}

/**
 * Loads i18n state for a specific locale.
 * @param locale - Locale code
 * @returns Promise<void | unknown>
 * (original: $$P3)
 */
export async function loadI18nLocale(locale: string) {
  let webDict, englishDict, dbDict, dbUrl, webUrl;
  registerI18nTextElement();
  const dictUrls = getInitialOptions().dictionary_url_by_locale;
  if (dictUrls && dictUrls[locale]) {
    const urls = dictUrls[locale];
    webUrl = urls['figma-web'];
    dbUrl = urls['figma-db'];
  }
  try {
    const [webMs, englishMs, dbMs] = await Promise.all([measureAsyncDuration('fetchI18nLocaleDict', ServiceCategories.GROWTH_PLATFORM, async () => {
      if (locale !== languageCodes.EN) {
        if (webUrl) webDict = await fetchDictionary(webUrl, 'web');else throw new Error(`No web dictionary URL found for locale: ${locale}`);
      }
    }).then(res => res.duration).catch(async err => {
      if (!(await checkRobotsTxt())) reportError(ServiceCategories.GROWTH_PLATFORM, err);
    }), measureAsyncDuration('fetchEnglishPreloadDict', ServiceCategories.GROWTH_PLATFORM, async () => {
      try {
        englishDict = await fetchDictionaryByEnv('web_english');
      } catch (err) {
        if (isKnownBot()) return;
        let dictName = 'unknown';
        const url = document.getElementById('englishDictionaryUrl')?.getAttribute('href');
        if (url) {
          const parts = url.split('/');
          dictName = parts[parts.length - 1];
        }
        trackEventAnalytics('english_entry_dict_failure', {
          message: typeof err === 'string' ? err : err instanceof Error ? err.message : 'Unknown',
          dictionary: dictName
        });
        return err;
      }
    }).then(res => res.duration), measureAsyncDuration('fetchI18nDbString', ServiceCategories.GROWTH_PLATFORM, async () => {
      if (dbUrl) dbDict = await fetchDictionary(dbUrl, 'db');
    }).then(res => res.duration)]);
    if (webMs) performanceMetricsTracker.i18nNonPreloadedFetchDictMs = Math.round(webMs);
    performanceMetricsTracker.i18nFetchPreloadedEnglishDictMs = Math.round(englishMs);
    performanceMetricsTracker.i18nNonPreloadedFetchDbDictMs = Math.round(dbMs);
  } catch (err) {
    console.warn(err);
    webDict = undefined;
    dbDict = undefined;
    return err;
  }
  if (locale === languageCodes.EN) webDict = englishDict;
  document.documentElement.lang = locale;
  desktopAPIInstance?.setLocales([locale, defaultLanguage]);
  initializeI18nState([locale, defaultLanguage], anotherSubset.concat(), webDict, dbDict, englishDict);
}

/**
 * Returns a localized path.
 * @param path - The path
 * @param locale - Locale code
 * @returns string
 * (original: $$O2)
 */
export function getLocalizedPath(path: string, locale: string = getI18nState().getPrimaryLocale(false)) {
  return locale === languageCodes.EN ? path : `/${locale}${path}`;
}

/**
 * Custom element for i18n text.
 * (original: D)
 */
class I18nTextElement extends HTMLElement {
  constructor() {
    super();
  }
}

/**
 * Registers the i18n-text custom element if not already registered.
 * (original: L)
 */
function registerI18nTextElement() {
  if (!window.customElements.get('i18n-text')) {
    window.customElements.define('i18n-text', I18nTextElement, {});
  }
}

// Exported aliases for compatibility
export const YD = getI18nStringAlias;
export const Yd = getTranslatedDynamicContent;
export const dS = getLocalizedPath;
export const jL = loadI18nLocale;
export const qD = I18nTextComponent;
export const t = getI18nString;
export const tx = renderI18nText;
export const yF = loadI18nState;
