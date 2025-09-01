import { getInitialOptions } from "../figma_app/169182";
export let $$r0 = new class {
  constructor() {
    this.userStateXHRDuration = -1;
    this.userStateResourceEvents = {};
    this.domContentLoadedMs = -1;
    this.jsonParseDurationMs = 0;
    this.fileBrowserInitDurationMs = -1;
    this.hydrateDurationMs = -1;
    this.initialRenderDurationMs = -1;
    this.timeToLoadMs = -1;
    this.i18nFetchPreloadedDictMs = 0;
    this.i18nFetchPreloadedEnglishDictMs = 0;
    this.i18nFetchPreloadedDbDictMs = 0;
    this.i18nNonPreloadedFetchDictMs = 0;
    this.i18nNonPreloadedFetchDbDictMs = 0;
    this.i18nInitStateWithLocaleDurationMs = 0;
    this.i18nLocale = "en";
  }
  logUserStateInfo(e) {
    if (this.userStateXHRDuration = Math.round(window.userStateXHRDuration || 0), !performance.getEntriesByName) return;
    let t = performance.getEntriesByName(e.responseURL, "resource").pop();
    if (!t) return;
    this.userStateResourceEvents["apiUserState.status"] = e.status;
    let i = t.toJSON();
    for (let e in i) this.userStateResourceEvents[`apiUserState.${e}`] = i[e];
  }
  report(e) {
    e("React Load Time", {
      version: 1,
      timeToLoad: this.timeToLoadMs,
      timeToDOMContentLoaded: this.domContentLoadedMs,
      fileBrowserInitDuration: this.fileBrowserInitDurationMs,
      jsonParseDuration: this.jsonParseDurationMs,
      hydrateDuration: this.hydrateDurationMs,
      initialRenderDuration: this.initialRenderDurationMs,
      userStateXHRDuration: this.userStateXHRDuration,
      i18nDictLoadDuration: this.i18nFetchPreloadedDictMs,
      i18nInitStateWithLocaleDuration: this.i18nInitStateWithLocaleDurationMs,
      i18nNonPreloadedFetchDictMs: this.i18nNonPreloadedFetchDictMs,
      i18nNonPreloadedFetchDbDictMs: this.i18nNonPreloadedFetchDbDictMs,
      i18nLocale: this.i18nLocale,
      isFastma: !1,
      isStatsigBootstrapFlagOn: !0,
      hasStatsigBootstrapValues: !!getInitialOptions().statsig_bootstrap_values,
      isUsingStatsigClientSDK: !0,
      isUsingStatsigPrefetch: !0,
      ...this.userStateResourceEvents
    }, {
      forwardToDatadog: !0
    });
  }
}();
export const X = $$r0;