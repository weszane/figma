import { useState, useEffect, useMemo } from "react";
import { d4 } from "../vendor/514228";
import { isNotNullish } from "../figma_app/95419";
import { getFeatureFlags } from "../905/601108";
import { ZC } from "../figma_app/39751";
import { Rs } from "../figma_app/288654";
import { oA } from "../905/723791";
import { iT } from "../figma_app/74165";
import { JvY } from "../figma_app/43951";
import { q5 } from "../figma_app/516028";
let $$_0 = 8;
let $$h6 = 22;
export function $$m3(e, t) {
  (function () {
    let [e, t] = useState(4);
    useEffect(() => {
      let e = () => {
        window.innerWidth < 786 ? t(2) : t(4);
      };
      window.addEventListener("resize", e, !1);
      return () => {
        window.removeEventListener("resize", e, !1);
      };
    }, []);
  })();
  return function (e, t) {
    let {
      isPropertiesPanelCollapsed
    } = iT();
    return getFeatureFlags().avatar_threshold_calculation ? e && !isPropertiesPanelCollapsed && t ? Math.min(Math.floor(e / $$h6) + 1, $$_0) : 3 : !e || isPropertiesPanelCollapsed ? 3 : Math.max(3, Math.min(Math.floor(e / $$h6), $$_0));
  }(e, t);
}
export function $$g1(e) {
  return "sessionID" in e;
}
let f = e => {
  let {
    user,
    sessionID,
    presenterSessionID,
    lastObservedSessionID,
    fileCreatorID,
    mostActiveSpeakerID,
    observingSessionID
  } = e;
  return $$g1(user) && user.sessionID === sessionID ? 0 : $$g1(user) && presenterSessionID && user.sessionID === presenterSessionID ? 1 : $$g1(user) && observingSessionID && user.sessionID === observingSessionID ? 2 : getFeatureFlags().live_feedback_large_meetings && $$g1(user) && lastObservedSessionID && user.sessionID === lastObservedSessionID ? 3 : $$g1(user) && user.userID === fileCreatorID ? 4 : user.userID === mostActiveSpeakerID ? 5 : user.name.toLocaleLowerCase().startsWith("anonymous") ? Number.MAX_SAFE_INTEGER : 6;
};
export function $$E5(e, t) {
  let r = e;
  t && (r = r.filter(e => $$g1(e) && e.deviceName === t));
  return r = r.filter(e => !$$g1(e) || "editor" !== e.deviceName || void 0 === e.sawMouse || !0 === e.sawMouse);
}
export function $$y4(e, t, r, n, i) {
  let {
    deviceNameFilter
  } = i;
  let s = [];
  let o = [...e];
  return o && 0 !== o.length ? (o.sort((e, t) => {
    let r = f({
      ...i,
      user: e
    }) - f({
      ...i,
      user: t
    });
    if (0 !== r) return r;
    let n = e.name.toLocaleLowerCase();
    let a = t.name.toLocaleLowerCase();
    return $$g1(e) && $$g1(t) && n === a ? e.sessionID - t.sessionID : n > a ? 1 : -1;
  }), (o = $$E5(o, deviceNameFilter)).length >= n && (s = o.slice(n - 1), o = o.slice(0, n - 1)), {
    users: o,
    overflowUsers: s
  }) : t && !r ? {
    users: [t],
    overflowUsers: []
  } : {
    users: [],
    overflowUsers: []
  };
}
export function $$b7(e, t, r, s, l) {
  let d = d4(e => e.multiplayer.sessionID);
  let c = d4(e => e.multiplayer.observingSessionID);
  let u = d4(e => e.multiplayer.presenterSessionID);
  let _ = d4(e => e.multiplayer.deviceNameFilter);
  let h = q5();
  let [m, g] = useState(null);
  let f = ZC(c);
  f !== c && isNotNullish(f) && -1 !== f && f !== m && g(f);
  let E = useMemo(() => ({
    sessionID: d,
    observingSessionID: c,
    presenterSessionID: u,
    lastObservedSessionID: m,
    mostActiveSpeakerID: l,
    fileCreatorID: h?.creatorId,
    deviceNameFilter: _
  }), [d, c, u, m, l, h?.creatorId, _]);
  let {
    users,
    overflowUsers
  } = useMemo(() => $$y4(e, t, r, s, E), [e, t, r, s, E]);
  return {
    users,
    overflowUsers
  };
}
export function $$T8() {
  let e = q5();
  let t = e?.key;
  let r = Rs(JvY, {
    fileKey: t ?? ""
  }, {
    enabled: !!t
  });
  return useMemo(() => {
    if ("loaded" !== r.status) return;
    let e = oA(r.data?.file?.fileViewHistory);
    return (e?.map(e => ({
      userID: e.user.id,
      name: e.user.name,
      imageUrl: e.user.imgUrl,
      viewedAt: e.viewedAt
    })) || []).sort((e, t) => t.viewedAt.getTime() - e.viewedAt.getTime());
  }, [r]);
}
export function $$I2(e) {
  return "viewedAt" in e;
}
export const A8 = $$_0;
export const AD = $$g1;
export const Py = $$I2;
export const Wq = $$m3;
export const Yp = $$y4;
export const _i = $$E5;
export const pl = $$h6;
export const uC = $$b7;
export const wF = $$T8;