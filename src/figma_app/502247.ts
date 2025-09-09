import { k } from '../905/93362';
import { H } from '../905/202181';
import { g } from '../905/346780';
import { getCookieOrStorage } from '../905/414007';
import { sendBatchedMetrics } from '../905/485103';
import { O as _$$O } from '../905/833838';
import { createDeferredPromise } from '../905/874553';
import { getInitialOptions } from '../figma_app/169182';
import { bellFeedAPIInstance } from '../figma_app/876459';
import o from '../vendor/128080';
import a from '../vendor/415955';
let s = a;
let l = o;
let $$g7 = createDeferredPromise();
let $$f10 = createDeferredPromise();
let $$E5 = !window.EARLY_ARGS?.file_minimal_user_state;
let y = {
  REQUESTED: 'web.api_user_state.requested'
};
let b = new class {
  constructor() {
    this.batchedCustomEvents = [];
    this.onVisibilityChange = async () => {
      document.visibilityState === 'hidden' && (await this.sendBatchedEvents());
    };
    this._currentlySendingBatchedEvents = !1;
    this.sendBatchedEvents = async () => {
      if (this._currentlySendingBatchedEvents) return;
      this._currentlySendingBatchedEvents = !0;
      let e = this.batchedCustomEvents;
      this.batchedCustomEvents = [];
      try {
        await sendBatchedMetrics(e);
      } catch (e) {}
      this._currentlySendingBatchedEvents = !1;
    };
    document.addEventListener('visibilitychange', this.onVisibilityChange);
    window.addEventListener('pagehide', this.sendBatchedEvents);
    this.sendBatchedEventsInterval = setInterval(this.sendBatchedEvents, 5e3);
  }
  async cleanup() {
    document.removeEventListener('visibilitychange', this.onVisibilityChange);
    window.removeEventListener('pagehide', this.sendBatchedEvents);
    clearInterval(this.sendBatchedEventsInterval);
    await g();
  }
  reportUserStateCall(e) {
    this.batchedCustomEvents.push({
      metric: y.REQUESTED,
      tags: {
        source: e,
        client_visibility: document.visibilityState
      }
    });
  }
}();
let T = null;
let I = null;
let S = null;
export function $$v6(e, t) {
  $$E5 = !0;
  let r = $$N8();
  let n = $$w3();
  T && r === I && n === S || (b.reportUserStateCall(e), T = k.getState({
    orgId: r || void 0,
    teamId: n || void 0
  }, t), I = r, I = n, T.then(() => {
    T = null;
    I = null;
    S = null;
  }).catch(() => {
    T = null;
    I = null;
    S = null;
  }));
  return T;
}
export function $$A11(e) {
  return H.getState(e);
}
let x = null;
export function $$N8() {
  return x ? x === 'personal' ? null : x : x = getInitialOptions().org_id || null;
}
let C = null;
export function $$w3() {
  C || (C = getInitialOptions().team_id || null);
  return C;
}
let O = 'recent_user_data';
let R = e => btoa(JSON.stringify(e));
let L = e => JSON.parse(atob(e));
export function $$P0(e) {
  $$M4(e, !0);
}
export function $$D1(e) {
  let t = $$F12();
  let r = s()(t);
  let n = getCookieOrStorage();
  if (r.communityProfileId = e, !l()(t, r)) {
    try {
      n.set(O, R(r));
    } catch (e) {
      console.error('Failed to set community profile', e);
    }
  }
}
export function $$k9(e) {
  $$M4(e, !1);
}
export function $$M4(e, t, r, n, i) {
  if (bellFeedAPIInstance) return;
  let a = $$F12();
  let o = s()(a);
  let u = getCookieOrStorage();
  if (t ? o.communityUserId = e : o.fileBrowserUserId = e, void 0 !== r && (o.userIdToOrgId || (o.userIdToOrgId = {}), o.userIdToOrgId[e] = r), (void 0 !== r || void 0 !== i) && (o.userIdToPlan || (o.userIdToPlan = {}), r ? o.userIdToPlan[e] = [_$$O.ORG, r] : i && (o.userIdToPlan[e] = [_$$O.TEAM, i])), n && (o.communityProfileId = n), !l()(a, o)) {
    try {
      u.set(O, R(o));
    } catch (e) {
      console.error('Failed to set recent workspace', e);
    }
  }
}
export function $$F12() {
  let e = {
    communityUserId: null,
    communityProfileId: null,
    fileBrowserUserId: null,
    userIdToOrgId: {}
  };
  let t = getCookieOrStorage();
  try {
    let r = t.get(O);
    r && (e = L(r));
  } catch (e) {
    console.error('Failed to get recent workspace', e);
  }
  return e;
}
export function $$j2(e) {
  let t = $$F12();
  return t.userIdToPlan?.[e] ?? null;
}
export const I2 = $$P0;
export const Il = $$D1;
export const QF = $$j2;
export const Um = $$w3;
export const Y9 = $$M4;
export const YH = $$E5;
export const _X = $$v6;
export const kb = $$g7;
export const pk = $$N8;
export const tO = $$k9;
export const tb = $$f10;
export const tp = $$A11;
export const yk = $$F12;