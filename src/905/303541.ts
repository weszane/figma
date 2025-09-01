import { jsx, Fragment } from "react/jsx-runtime";
import { memo, Fragment as _$$Fragment } from "react";
import { languageCodes, defaultLanguage, anotherSubset } from "../905/816253";
import { Bq } from "../figma_app/656233";
import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { fm } from "../905/236856";
import { az, sx } from "../905/449184";
import { eD } from "../figma_app/876459";
import { isDevEnvironment, getLocaleFallbacks, getInitialOptions } from "../figma_app/169182";
import { $D } from "../905/11";
import { x1 } from "../905/714362";
import { ZO } from "../905/670985";
import { X } from "../905/414972";
import { D as _$$D } from "../905/347702";
import { Gq, Cq } from "../figma_app/363242";
let y = _$$D((e, t) => Gq().getContent(e, t));
export function $$b6(e, ...[t]) {
  return jsx($$v4, {
    id: e,
    options: t
  });
}
export let $$v4 = memo(function({
  id: e,
  options: t
}) {
  let i = Bq(y(e, t));
  if (!i || 0 === i.length) return null;
  let a = i.map((e, t) => jsx(_$$Fragment, {
    children: e
  }, t));
  if (!getFeatureFlags().i18n_wrapper_element) return jsx(Fragment, {
    children: a
  });
  {
    let t = isDevEnvironment() ? {
      "data-tx-id": e
    } : {};
    getFeatureFlags().datadog_rum_action_ids && (t["data-dd-action-name"] = e);
    return jsx("i18n-text", {
      ...t,
      children: a
    });
  }
});
export function $$I5(e, ...[t]) {
  return Bq(y(e, t)).join("");
}
export function $$E0(e, t) {
  return $$I5(e, t);
}
export function $$x1(e, t) {
  return Gq().getTranslatedDynamicContent(e, t);
}
let S = _$$D(async e => {
  let t = document.getElementById("web" === e ? "dictionaryUrl" : "web_english" === e ? "englishDictionaryUrl" : "dbDictionaryUrl")?.getAttribute("href");
  if (t) return await w(t, e);
});
let w = _$$D(C);
async function C(e, t) {
  let i;
  let n;
  let r = 0;
  let a = !1;
  let s = await T(async () => {
    let t;
    let n;
    r += 1;
    let s = {
      cache: a ? "reload" : "default"
    };
    try {
      t = await fetch(e, s);
    } catch (t) {
      let e = t instanceof Error ? t.message : "Unknown error";
      i = "network_error";
      return Error(`Unable to fetch dictionary: ${e}`);
    }
    if (!t.ok) {
      i = 403 === t.status ? "forbidden" : t.status >= 500 ? "internal_error" : "unknown";
      return Error(`Unable to fetch dictionary: ${t.statusText}`);
    }
    try {
      n = await t.text();
      return JSON.parse(n);
    } catch (t) {
      if (null != n && t instanceof SyntaxError) {
        a = !0;
        let r = n.length;
        let s = r < 200 ? n : `${n.substring(0, 100)} [...] ${n.substring(r - 100)}`;
        x1("i18n helpers", "Error parsing dictionary JSON", {
          error: t,
          dictUrl: e,
          responseTextLength: r,
          jsonString: s
        });
        i = "invalid_dict";
      } else i = "unknown";
      throw t;
    }
  });
  let o = r - 1;
  switch (o) {
    case 0:
    case 1:
    case 2:
      n = `${o}`;
      break;
    default:
      n = "3+";
  }
  if (az.trackDefinedMetric("i18n.dictionary_loaded", {
    failure_cause: i,
    project: t,
    retries: n,
    success: s.success
  }), s.success) return s.value;
  throw s.error;
}
async function T(e, t = {}) {
  let i;
  let n = t.maxRetries ?? 3;
  let r = t.retryBackoffs ?? [0, 100, 200];
  for (let t = n; t > 0; t -= 1) try {
    let i = r[t - 1];
    null != i && i > 0 && (await fm(i));
    let n = await e();
    return {
      success: !0,
      value: n
    };
  } catch (e) {
    i ??= e;
  }
  return {
    success: !1,
    error: i
  };
}
function k() {
  let e = navigator.userAgent;
  for (let t of ["PetalBot", "Naver", "lin.ee"]) if (e.includes(t)) return !0;
  return !1;
}
let R = _$$D(async () => {
  try {
    await fetch("/robots.txt", {
      cache: "no-store",
      method: "GET"
    });
    return !1;
  } catch {
    return !0;
  }
});
export async function $$N7(e = !1, t = null) {
  let i;
  let n;
  let r;
  L();
  let a = t ?? getLocaleFallbacks();
  X.i18nLocale = a[0];
  try {
    let [t, a, s] = await Promise.all([ZO("fetchI18nPreloadDict", _$$e.GROWTH_PLATFORM, async () => {
      i = await S("web");
    }).then(e => e.duration).catch(async e => {
      (await R()) || $D(_$$e.GROWTH_PLATFORM, e);
    }), ZO("fetchEnglishPreloadDict", _$$e.GROWTH_PLATFORM, async () => {
      try {
        n = await S("web_english");
      } catch (i) {
        if (k()) return;
        let e = "unknown";
        let t = document.getElementById("englishDictionaryUrl")?.getAttribute("href");
        if (t) {
          let i = t.split("/");
          e = i[i.length - 1];
        }
        sx("english_entry_dict_failure", {
          message: "string" == typeof i ? i : i instanceof Error ? i.message : "Unknown",
          dictionary: e
        });
        return i;
      }
    }).then(e => e.duration), e ? ZO("fetchI18nDbString", _$$e.GROWTH_PLATFORM, async () => {
      r = await S("db");
    }).then(e => e.duration) : 0]);
    t && (X.i18nFetchPreloadedDictMs = Math.round(t));
    X.i18nFetchPreloadedEnglishDictMs = Math.round(a);
    X.i18nFetchPreloadedDbDictMs = Math.round(s);
  } catch (e) {
    console.warn(e);
    i = void 0;
    r = void 0;
    return e;
  }
  Cq(a, void 0, i, r, n);
  return a[0];
}
export async function $$P3(e) {
  let t;
  let i;
  let n;
  let r;
  let s;
  L();
  let l = getInitialOptions().dictionary_url_by_locale;
  if (l && l[e]) {
    let t = l[e];
    r = t["figma-web"];
    s = t["figma-db"];
  }
  try {
    let [l, d, u] = await Promise.all([ZO("fetchI18nLocaleDict", _$$e.GROWTH_PLATFORM, async () => {
      if (e !== languageCodes.EN) {
        if (r) t = await w(r, "web"); else throw Error(`No web dictionary URL found for locale: ${e}`);
      }
    }).then(e => e.duration).catch(async e => {
      (await R()) || $D(_$$e.GROWTH_PLATFORM, e);
    }), ZO("fetchEnglishPreloadDict", _$$e.GROWTH_PLATFORM, async () => {
      try {
        i = await S("web_english");
      } catch (i) {
        if (k()) return;
        let e = "unknown";
        let t = document.getElementById("englishDictionaryUrl")?.getAttribute("href");
        if (t) {
          let i = t.split("/");
          e = i[i.length - 1];
        }
        sx("english_entry_dict_failure", {
          message: "string" == typeof i ? i : i instanceof Error ? i.message : "Unknown",
          dictionary: e
        });
        return i;
      }
    }).then(e => e.duration), ZO("fetchI18nDbString", _$$e.GROWTH_PLATFORM, async () => {
      s && (n = await w(s, "db"));
    }).then(e => e.duration)]);
    l && (X.i18nNonPreloadedFetchDictMs = Math.round(l));
    X.i18nFetchPreloadedEnglishDictMs = Math.round(d);
    X.i18nNonPreloadedFetchDbDictMs = Math.round(u);
  } catch (e) {
    console.warn(e);
    t = void 0;
    n = void 0;
    return e;
  }
  e === languageCodes.EN && (t = i);
  document.documentElement.lang = e;
  eD && eD.setLocales([e, defaultLanguage]);
  Cq([e, defaultLanguage], anotherSubset.concat(), t, n, i);
}
export function $$O2(e, t = Gq().getPrimaryLocale(!1)) {
  return t === languageCodes.EN ? e : `/${t}${e}`;
}
class D extends HTMLElement {
  constructor() {
    super();
  }
}
function L() {
  window.customElements.get("i18n-text") || window.customElements.define("i18n-text", D, {});
}
export const YD = $$E0;
export const Yd = $$x1;
export const dS = $$O2;
export const jL = $$P3;
export const qD = $$v4;
export const t = $$I5;
export const tx = $$b6;
export const yF = $$N7; 
