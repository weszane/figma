import { atom, atomStoreManager } from "../figma_app/27355";
import i from "../vendor/946678";
import { analyticsEventManager } from "../905/449184";
import { WebLoggerTimer } from "../905/485103";
import { w0 } from "../figma_app/594947";
import { PW, Do } from "../figma_app/633080";
import { I } from "../figma_app/130633";
import { Ci } from "../figma_app/318590";
import { KK, AG, dm, ik, hH, Yl } from "../figma_app/707943";
var a = i;
let $$_5 = e => e.library.assetsPanelSearch;
let $$h11 = e => e.library.assetsPanelSearch.query;
export function $$m8(e) {
  return e.type === I.ALL || e.type === I.LOCAL || e.type === I.FILE || e.type === I.SITE_KIT;
}
export function $$g6(e) {
  return a()(e, e => e.type === PW.MODULE);
}
export async function $$f2(e, t, r, n, i, a, o, l) {
  let d = $$T0();
  let _ = await KK(e, t, r ?? "", n ?? "", i, a, o, l);
  let h = await Ci(!0);
  let m = AG([], _, I.FILE, h);
  let {
    elapsedTime,
    backgrounded
  } = d();
  analyticsEventManager.trackDefinedEvent("asset_search.get_search_results_for_file_time", {
    elapsedTime,
    searchSessionId: n ?? "",
    backgrounded
  });
  return {
    normalizedSearchResults: m,
    unsubscribedSearchResults: []
  };
}
export async function $$E1(e, t, r, n, i, a, o, l, d, c, _, h, m, g, f, b = !1, I) {
  let S = $$T0();
  let v = dm(c, e);
  let A = new Set(_);
  void 0 !== f && A.add(f);
  let x = ik(e, r, n, i, a, o, A, l ?? "", d, h, m, I);
  let N = hH(e, A, t, d, b, l ?? "");
  let C = Ci(!0);
  let [w, {
    subscribedSearchResults: O,
    unsubscribedSearchResults: R
  }, {
    communitySearchResults: L,
    unsubscribedCommunitySearchResults: P
  }, D] = await Promise.all([v, x, N, C]);
  let {
    elapsedTime,
    backgrounded
  } = S();
  analyticsEventManager.trackDefinedEvent("asset_search.get_search_results_for_all_promise_time", {
    elapsedTime,
    searchSessionId: l ?? "",
    backgrounded
  });
  let F = $$T0();
  let j = $$y3(w, O, R, L, P, e, g ?? !1, D);
  let {
    elapsedTime: _elapsedTime,
    backgrounded: _backgrounded
  } = F();
  analyticsEventManager.trackDefinedEvent("asset_search.combine_fuse_and_server_results_time", {
    elapsedTime: _elapsedTime,
    searchSessionId: l ?? "",
    backgrounded: _backgrounded
  });
  return j;
}
export function $$y3(e, t, r, n, i, a, s, o) {
  let l = e;
  let d = t;
  s ? (d = Yl(t, e, n || []), l = e.filter(e => !e.server_score && !e.ai_score && !e.lexical_score || (e.score = e.lexical_score || e.ai_score || e.server_score || e.score, d.push(e), !1))) : l = Yl(e, t, n || []);
  let u = AG(l, d, I.ALL, o);
  let _ = Yl(n || [], u);
  let h = Yl(r, l);
  let m = Yl(i || [], h);
  return {
    normalizedSearchResults: [...u, ..._],
    unsubscribedSearchResults: [...h, ...m]
  };
}
export function $$b10(e, t, r) {
  return t === e ? "LOCAL" : r.has(e) ? "SUBSCRIBED" : "UNSUBSCRIBED";
}
export function $$T0() {
  let e = new WebLoggerTimer();
  return () => {
    let t;
    e.stop(e => {
      t = e;
    }, {
      skipIfIdle: !1
    });
    return {
      elapsedTime: t,
      backgrounded: e.backgrounded || e.offlined
    };
  };
}
export async function $$I7(e) {
  let {
    results,
    subscribedLibraryKeys,
    sessionId,
    queryId,
    entryPoint,
    queryType,
    aiResultsEnabled,
    productType,
    libraryKey,
    fileKey,
    query,
    searchType
  } = e;
  let m = (await w0("max_asset_search_results_to_log")).get("count", 20);
  results.slice(0, m).forEach((e, t) => {
    let l = e.library_key;
    let m = $$b10(l, libraryKey, subscribedLibraryKeys);
    let g = e.server_score || e.ai_score || e.lexical_score ? "server" : "fuse";
    analyticsEventManager.trackDefinedEvent("asset_search.top_k_results", {
      sessionId,
      queryId,
      entryPoint,
      fileKey,
      position: t,
      aiResultsEnabled,
      assetKey: $$S12(e),
      assetLibraryKey: l,
      libraryType: m,
      assetType: e.type,
      queryType,
      isInSubscribedLibrary: !!l && subscribedLibraryKeys.has(l),
      productType,
      query,
      source: g,
      score: "score" in e ? e.score : void 0,
      scoreFuse: e.fuse_score ?? void 0,
      scoreServer: e.server_score ?? void 0,
      searchType
    });
  });
}
export function $$S12(e) {
  if (Do(e)) return "LOCAL" === e.subscriptionStatus ? e.keyForPublish : e.key;
  switch (e.type) {
    case PW.COMPONENT:
      return e.component_key;
    case PW.STATE_GROUP:
    case PW.MODULE:
      return e.key;
  }
}
export let $$v4 = atom(0);
export function $$A9(e) {
  atomStoreManager.set($$v4, e);
}
export const B0 = $$T0;
export const BG = $$E1;
export const Og = $$f2;
export const PS = $$y3;
export const Sv = $$v4;
export const UQ = $$_5;
export const _2 = $$g6;
export const eB = $$I7;
export const eu = $$m8;
export const hw = $$A9;
export const ko = $$b10;
export const q5 = $$h11;
export const u2 = $$S12;