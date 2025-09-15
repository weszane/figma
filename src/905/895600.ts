import { Statsig } from "statsig-react";
import { getInitialOptions } from "../figma_app/169182";
import { liveStoreInstance } from "../905/713695";
import { a as _$$a } from "../905/425366";
import { m as _$$m } from "../905/325034";
import { StatsigTimer, trackClientValuesNetworkCall, trackContextSwitchCacheMiss, trackClientUpdateUserTime, trackPrefetchCalls, trackStatsigClientInitTime } from "../3973/890507";
import { ActionType, TimeoutError, OperationStatus, ProcessState, ErrorType, ProviderType, BootstrapType } from "../3973/473379";
import { fU, wj, et, vl, nK, pF, Xu, l2, Cj, me } from "../905/683495";
import { processAtom, isErroredTimeout, processSelector } from "../3973/697935";
import { PerfTimer } from "../905/609396";
import { createDeferredPromise } from "../905/874553";
import { atom, atomStoreManager } from "../figma_app/27355";
async function u(e, t, i, n) {
  if (null == e) return null;
  let a = n ?? fU(getInitialOptions().iso_code);
  let s = new StatsigTimer("relay_proxy_request");
  let u = _$$m.getStatsigRelayProxyBootstrap({
    orgId: i.customIDs?.orgID,
    teamId: i.customIDs?.teamID
  }, {
    prefetch: t === ActionType.PREFETCH
  }).then(e => e.data.meta ?? {});
  let p = wj(u, a).catch(e => (s.setCaughtError(e), null)).$$finally(() => {
    s.stopTimer();
    trackClientValuesNetworkCall(s, "relay_proxy", t);
  });
  s.startTimer();
  let m = await p;
  if (s.getTimedOut()) throw new TimeoutError();
  return m;
}
async function p({
  orgId: e,
  teamIds: t,
  timeout: i
}) {
  let n = i ?? fU(getInitialOptions().iso_code);
  let a = new StatsigTimer("relay_proxy_batched_request");
  let s = _$$m.getStatsigRelayProxyBootstrapV2({
    orgId: e,
    teamIds: t
  }).then(e => e.data.meta);
  let u = wj(s, n).catch(e => (a.setCaughtError(e), null)).$$finally(() => {
    a.stopTimer();
    trackClientValuesNetworkCall(a, "relay_proxy_v2_batched", ActionType.PREFETCH);
  });
  a.startTimer();
  let p = await u;
  if (a.getTimedOut()) throw new TimeoutError();
  return p;
}
let _ = atom(() => new Set());
let A = liveStoreInstance.Query({
  fetch: async e => {
    let t = e.__IGNORE__overrideValues;
    let {
      userId,
      teamId,
      orgId,
      planKey
    } = e;
    let s = atomStoreManager.get(_);
    let o = () => {
      let e = et({
        userId,
        teamId,
        orgId,
        planKey
      });
      s.add(e);
    };
    if (null != t) {
      o();
      return t;
    }
    let l = e.__IGNORE__reason;
    let d = e.__IGNORE__sdkKey;
    let p = e.__IGNORE__timeout;
    let m = vl(userId, teamId, orgId, planKey);
    let h = await u(d, l, m, p);
    if (null == h) throw Error("Call to retrieve Statsig user values failed");
    o();
    return h;
  },
  key: "statsig_user_values",
  stalenessPolicy: "never"
});
let y = liveStoreInstance.Query({
  fetch: async e => {
    let {
      userId,
      teamIds,
      orgId
    } = e;
    let r = e.__IGNORE__sdkKey;
    let s = e.__IGNORE__timeout;
    let o = await p({
      orgId,
      teamIds,
      timeout: s
    });
    if (null == o) throw Error("Call to retrieve Statsig batched user values failed");
    let l = o.map(e => {
      if (e.bootstrap_values) return function (e, t, i) {
        let n = A({
          __IGNORE__overrideValues: t,
          __IGNORE__reason: ActionType.PREFETCH,
          __IGNORE__sdkKey: i,
          __IGNORE__timeout: nK,
          ...e
        });
        return liveStoreInstance.fetch(n, {
          policy: "networkOnly"
        });
      }({
        userId,
        teamId: e.team_id ?? "",
        orgId: orgId ?? null,
        planKey: e.bootstrap_values?.evaluated_keys?.customIDs?.planKey ?? null ?? null
      }, e.bootstrap_values, r);
    });
    await Promise.all(l);
    return o;
  },
  key: "statsig_batched_user_values",
  stalenessPolicy: "never"
});
let $$b1 = atom(null, async (e, t, i, n, a) => {
  if (!pF()) return;
  let s = getInitialOptions().statsig_figma_app_client_api_key;
  if (null == s) return;
  let o = e(processAtom);
  if (o.status === OperationStatus.IN_PROGRESS) {
    await o.initCompletedPromise;
    return;
  }
  if (isErroredTimeout(o), o.status !== OperationStatus.NOT_STARTED) return;
  let l = createDeferredPromise();
  let u = Xu(E(s, i, n, a, () => e(processSelector))).then(async e => {
    await l.promise;
    t(processAtom, e);
  });
  t(processAtom, {
    type: ProcessState.START,
    payload: {
      initCompletedPromise: u,
      sdkKey: s
    }
  });
  l.resolve();
  await u;
});
let $$v0 = atom(null, async (e, t, i) => {
  if (!pF() || !l2()) return;
  let o = e(processAtom);
  if (o.status === OperationStatus.NOT_STARTED) return;
  if (o.status === OperationStatus.IN_PROGRESS) {
    await o.initCompletedPromise;
    return;
  }
  let u = o.sdkKey;
  let {
    userId,
    teamId,
    orgId,
    planKey
  } = i;
  let I = vl(userId, teamId, orgId, planKey);
  let E = fU(getInitialOptions().iso_code);
  let x = new PerfTimer("statsigContextSwitch", {});
  let S = null;
  let w = !1;
  let C = !1;
  async function T() {
    let t = null;
    let r = atomStoreManager.get(_);
    let o = r.size;
    let m = o > 20 ? null : [...r.values()];
    let h = Cj(i);
    try {
      if (null != h) {
        w = !0;
        t = h;
      } else {
        let i = A({
          __IGNORE__reason: ActionType.CONTEXT_SWITCH,
          __IGNORE__sdkKey: u,
          __IGNORE__timeout: E,
          userId,
          teamId,
          orgId,
          planKey
        });
        let n = e(i);
        t = (w = "loaded" === n.status) ? n.data : await liveStoreInstance.fetch(i, {
          policy: "networkOnly"
        });
      }
    } catch (t) {
      S = `Failed to retrieve user values from relay proxy when context switching: ${t}`;
      let e = t instanceof TimeoutError ? ErrorType.TIMEOUT : ErrorType.REQUEST_FAILED;
      return {
        type: ProcessState.ERROR,
        payload: {
          cause: e
        }
      };
    } finally {
      w || trackContextSwitchCacheMiss([userId, teamId, orgId], m, o);
    }
    let g = !1;
    try {
      null != t && (atomStoreManager.set(_$$a, t), g = Statsig.updateUserWithValues(I, t));
    } catch (e) {
      S = `Failed to update user with new values when context switching: ${e}`;
      g = !1;
    }
    return g ? {
      type: ProcessState.COMPLETE
    } : {
      type: ProcessState.ERROR,
      payload: {
        cause: ErrorType.SDK_METHOD_FAILED
      }
    };
  }
  x.start();
  t(processAtom, {
    type: ProcessState.RESET
  });
  let k = createDeferredPromise();
  let R = Xu(T()).catch(e => (S = e instanceof Error ? e.message : null, {
    type: ProcessState.ERROR,
    payload: {
      cause: ErrorType.UNKNOWN
    }
  })).then(e => k.promise.then(() => e)).then(e => {
    C = e.type === ProcessState.COMPLETE;
    t(processAtom, e);
  });
  t(processAtom, {
    type: ProcessState.START,
    payload: {
      initCompletedPromise: R,
      sdkKey: u
    }
  });
  k.resolve();
  await R;
  x.stop();
  trackClientUpdateUserTime(x.getElapsedTime(), C, w, S);
});
let $$I2 = atom(null, async (e, t, i) => {
  if (!pF() || 0 === i.length) return;
  let n = getInitialOptions().statsig_figma_app_client_api_key;
  if (null == n) return;
  let s = null;
  let o = atomStoreManager.get(_);
  let d = i.filter(e => {
    if (Cj(e)) return !1;
    let t = et(e);
    return !o.has(t);
  });
  try {
    if (d.length > 0) {
      let e = y({
        __IGNORE__sdkKey: n,
        __IGNORE__timeout: nK,
        userId: i[0].userId,
        teamIds: d.map(e => e.teamId),
        orgId: i[0].orgId ?? void 0
      });
      await liveStoreInstance.fetch(e, {
        policy: "networkOnly"
      });
    }
  } catch (e) {
    s = `Failed to prefetch users with relay proxy: ${e}`;
  } finally {
    let e = i.length - d.length;
    trackPrefetchCalls(i.length, e, s);
  }
});
async function E(e, t, i, o, u) {
  let p;
  let {
    userId,
    teamId,
    orgId,
    planKey
  } = t;
  let y = Cj(t);
  let b = new StatsigTimer("statsigInitialize");
  let v = null;
  let I = !1;
  function E(e, n, r) {
    b.isTimerRunning() && b.stopTimer();
    I || (trackStatsigClientInitTime(o === ProviderType.PROVIDER, null != y ? BootstrapType.BOOTSTRAP : BootstrapType.NETWORK, u().status, b.getElapsedTimeMs(), n && null === v, r, v, t, y, i), I = !0);
  }
  function x(e, t, i, r) {
    try {
      null != t ? (Statsig.bootstrap(e, t, i, r), atomStoreManager.set(_$$a, t)) : Statsig.bootstrap(e, {}, i, r);
      return {
        type: ProcessState.COMPLETE
      };
    } catch (e) {
      null === v && (v = ErrorType.SDK_METHOD_FAILED);
      E(null, !1, null);
      return {
        type: ProcessState.ERROR,
        payload: {
          cause: v
        }
      };
    }
  }
  let S = vl(userId, teamId, orgId, planKey);
  let w = me(E);
  let C = fU(getInitialOptions().iso_code);
  if (b.startTimer(), null != y) p = y;else try {
    let t = A({
      __IGNORE__reason: ActionType.INITIALIZE,
      __IGNORE__sdkKey: e,
      __IGNORE__timeout: C,
      userId,
      teamId,
      orgId,
      planKey
    });
    p = await liveStoreInstance.fetch(t, {
      policy: "networkOnly"
    });
  } catch (t) {
    v = t instanceof TimeoutError ? ErrorType.TIMEOUT : ErrorType.REQUEST_FAILED;
    x(e, {}, S, w);
    return {
      type: ProcessState.ERROR,
      payload: {
        cause: v
      }
    };
  }
  return x(e, p, S, w);
}
export const iz = $$v0;
export const r_ = $$b1;
export const oo = $$I2;