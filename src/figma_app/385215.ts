import { useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { h3O } from "../figma_app/763686";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { HW } from "../figma_app/976749";
import { T as _$$T, N } from "../905/847283";
import { trackEventAnalytics } from "../905/449184";
import { hk } from "../figma_app/632319";
function p(e) {
  let {
    observingSessionID,
    presenterSessionID
  } = e;
  let n = e.allUsers.find(t => t.sessionID === e.sessionID);
  let i = presenterSessionID ? e.allUsers.find(e => e.sessionID === presenterSessionID) : null;
  let a = observingSessionID ? e.allUsers.find(e => e.sessionID === observingSessionID) : null;
  return {
    isPrototypeViewer: "prototype" === e.deviceNameFilter,
    presentingUserId: i?.userID,
    presentingSessionId: i?.sessionID,
    observingUserId: a?.userID,
    observingSessionId: a?.sessionID,
    currentUserId: n?.userID,
    currentUserSessionId: n?.sessionID
  };
}
export function $$_5() {
  let e = _$$T();
  let t = HW();
  return useCallback(() => {
    e(N.START);
    t ? hk()?.startPresenting() : h3O.startPresenting();
  }, [t, e]);
}
export function $$h1() {
  let e = HW();
  return useCallback(() => {
    e ? hk()?.stopPresenting() : h3O.stopPresenting();
  }, [e]);
}
export function $$m9() {
  let e = HW();
  let t = useDispatch();
  return useCallback((r, n) => {
    e ? y(r, n, hk(), t) : y(r, n, null, t);
  }, [e, t]);
}
export function $$g8() {
  let e = HW();
  let t = useDispatch();
  return useCallback((r, n) => {
    e ? T(r, n, hk(), t) : T(r, n, null, t);
  }, [e, t]);
}
export function $$f0() {
  let e = HW();
  let t = useDispatch();
  return useCallback(r => {
    e ? v(r, hk()) : v(r, null);
    t(F.enqueue({
      message: getI18nString("collaboration.spotlight.bell.stopped_following"),
      role: "status"
    }));
  }, [e, t]);
}
export function $$E10() {
  let e = HW();
  return useCallback(t => {
    e ? I(t, hk()) : I(t, null);
  }, [e]);
}
function y(e, t, r, n) {
  r ? r.nominatePresenter(e) : h3O.nominatePresenter(e);
  let i = t.allUsers.find(t => t.sessionID === e);
  if (i?.name) {
    let e = getI18nString("collaboration.spotlight.visual_bell.nominated_user_to_spotlight", {
      userName: i.name
    });
    n(F.enqueue({
      message: e,
      type: "nominated_presenter"
    }));
  }
  trackEventAnalytics("Spotlight Nomination Requested", {
    nominatedSessionID: e,
    nominatedUserID: i?.userID,
    ...p(t)
  });
}
export function $$b6(e, t) {
  t ? t.cancelPresenterNomination(e) : h3O.cancelPresenterNomination(e);
}
function T(e, t, r, n) {
  $$b6(e, r);
  let i = t.allUsers.find(t => t.sessionID === e);
  let a = getI18nString("collaboration.spotlight.visual_bell.stopped_nominating_user_to_spotlight");
  n(F.enqueue({
    message: a,
    type: "nominated_presenter"
  }));
  trackEventAnalytics("Spotlight Nomination Canceled", {
    cancelledNomineeSessionId: i?.sessionID,
    cancelledNomineeUserId: i?.userID,
    cancelledByNominee: e === t.sessionID,
    ...p(t)
  });
}
function I(e, t) {
  t ? t.startPresenting() : h3O.startPresenting();
  let r = e.sessionsNominatingCurrentUser[0];
  let n = e.allUsers.find(e => e.sessionID === r);
  trackEventAnalytics("Spotlight Nomination Accepted", {
    nominatorSessionId: n?.sessionID,
    nominatorUserId: n?.userID,
    ...p(e)
  });
}
export function $$S2(e, t, r, n) {
  let i = performance.now();
  e();
  n && trackEventAnalytics(r, {
    sessionId: t.sessionID,
    timeToActionSeconds: Math.trunc(i - n) / 1e3,
    ...p(t)
  });
}
function v(e, t) {
  t ? hk()?.setObservingSessionID(-1) : h3O.observeUser(-1);
  trackEventAnalytics("Spotlight Stop Following", {
    ...p(e)
  });
}
export function $$A7(e) {
  return e.presenterSessionID === e.sessionID;
}
export function $$x3(e) {
  return -1 !== e.observingSessionID;
}
export function $$N4(e) {
  return e.sessionsNominatingCurrentUser.length > 0;
}
export const $ = $$f0;
export const B4 = $$h1;
export const KI = $$S2;
export const L3 = $$x3;
export const NB = $$N4;
export const Vi = $$_5;
export const j$ = $$b6;
export const jA = $$A7;
export const oJ = $$g8;
export const tu = $$m9;
export const y7 = $$E10;