import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch, shallowEqual } from "../vendor/514228";
import { c2 } from "../905/382883";
import { Op } from "../905/19536";
import { ZC } from "../figma_app/39751";
import { NS, Pp, a6 } from "../905/989765";
import { R9 } from "../905/977824";
import { _i } from "../figma_app/578768";
import { iZ } from "../905/372672";
import { h as _$$h } from "../figma_app/275739";
import { Lk } from "../figma_app/122682";
function h() {
  let e = useSelector(e => e.multiplayer).allUsers;
  let t = R9.useVoiceMetadataBySessionId();
  function r(e, t) {
    return e.sessionID === t.sessionID && e.sawMouse === t.sawMouse && e.deviceName === t.deviceName && e.name === t.name && e.imageURL === t.imageURL;
  }
  return {
    multiplayerUsersInVoiceCall: Op(() => e.filter(e => t[e.sessionID]?.connectedCallId), [e, t], r),
    multiplayerUsersNotInVoiceCall: Op(() => e.filter(e => !t[e.sessionID]?.connectedCallId), [e, t], r)
  };
}
export function $$m1(e, t) {
  let r = iZ();
  let a = useSelector(e => e.multiplayer.deviceNameFilter);
  let s = useSelector(t => e && t.voice.activeCall[e]);
  let {
    multiplayerUsersInVoiceCall,
    multiplayerUsersNotInVoiceCall
  } = h();
  let p = useSelector(e => e.voice.userIdsInCallFromProvider);
  let [_, m] = useState(new Set());
  let [g, f] = useState([]);
  let [E, y] = useState();
  let b = ZC(s);
  useEffect(() => {
    s && !b && !E && t && (y(!0), setTimeout(() => {
      y(!1);
    }, 2e3));
  }, [s, b, t, E]);
  useEffect(() => {
    !function () {
      if (s && p.length > 1 && !E) {
        let e = new Set(p);
        m(e);
        let t = [];
        for (let r of [...multiplayerUsersNotInVoiceCall, ...multiplayerUsersInVoiceCall]) e.has(r.userID) || t.push(r);
        f(_i(t, a));
      } else {
        m(new Set(multiplayerUsersInVoiceCall.map(e => e.userID)));
        f(_i(multiplayerUsersNotInVoiceCall, a));
      }
    }();
  }, [s, multiplayerUsersInVoiceCall, multiplayerUsersNotInVoiceCall, r, a, p, E]);
  return {
    userIdsInCall: _,
    usersNotInCall: g
  };
}
export function $$g0(e, t) {
  let r = useDispatch();
  let {
    multiplayerUsersInVoiceCall,
    multiplayerUsersNotInVoiceCall
  } = h();
  let d = useMemo(() => multiplayerUsersInVoiceCall.reduce((e, t) => ({
    ...e,
    [t.userID]: t.userID in e ? e[t.userID].add(t) : new Set([t])
  }), {}), [multiplayerUsersInVoiceCall]);
  let c = useMemo(() => multiplayerUsersNotInVoiceCall.reduce((e, t) => ({
    ...e,
    [t.userID]: t.userID in e ? e[t.userID].add(t) : new Set([t])
  }), {}), [multiplayerUsersNotInVoiceCall]);
  let u = useSelector(e => t && t in e.activeFileUsers ? e.activeFileUsers[t] : void 0, shallowEqual);
  let p = useSelector(e => e.voice.voiceUsersById);
  let [_, m] = useState([]);
  let [g, f] = useState([]);
  let [E, y] = useState([]);
  useEffect(() => {
    let t = [];
    let r = [];
    let n = [];
    for (let i of e) if (i in d) r.push(...d[i]);else if (i in c) r.push(...c[i]);else if (u && i in u) {
      let e = u[i];
      t.push({
        imageURL: e.imageUrl,
        name: e.handle,
        userID: e.id
      });
    } else i in p ? t.push(p[i]) : n.push(i);
    c2(E, r) || y(r);
    c2(g, t) || f(t);
    shallowEqual(_, n) || m(n);
  }, [u, e, d, c, p, _, E, g]);
  useEffect(() => {
    t && _.length > 0 && r(NS({
      fileKey: t,
      userIds: _
    }));
  }, [_, r, t]);
  return {
    voiceUsersInMultiplayer: E,
    voiceUsersNotInMultiplayer: g
  };
}
export function $$f2(e, t) {
  let {
    voiceUsersInMultiplayer,
    voiceUsersNotInMultiplayer
  } = $$g0(e, t);
  return useMemo(() => [...voiceUsersInMultiplayer, ...voiceUsersNotInMultiplayer], [voiceUsersInMultiplayer, voiceUsersNotInMultiplayer]);
}
export function $$E3(e) {
  let t = useDispatch();
  let r = Lk();
  let a = useSelector(t => e && e in t.voice.activeCall);
  useEffect(() => () => {
    r && a && (t(Pp(!1)), _$$h.leave(), e && t(a6({
      fileKey: e
    })));
  }, [r, a, t, e]);
}
export const Eo = $$g0;
export const W5 = $$m1;
export const bF = $$f2;
export const yB = $$E3;