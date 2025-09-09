import { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { isNotNullish, isNullish } from "../figma_app/95419";
import { Multiplayer } from "../figma_app/763686";
import { useAtomWithSubscription } from "../figma_app/27355";
import { useLatestRef } from "../figma_app/922077";
import { getIsMobile, isInFigmaMobile, isIpadDevice } from "../figma_app/778880";
import { Dv, Fj, jI } from "../905/763714";
import { isInteractionPathCheck } from "../figma_app/897289";
import { hk } from "../figma_app/632319";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { e as _$$e } from "../905/383776";
import { hA, l7, ZO } from "../figma_app/88239";
import { createOptimistThunk } from "../905/350402";
import { J4 } from "../figma_app/91703";
import { z4 } from "../905/37051";
import { clearSelection } from "../figma_app/741237";
import { XM, e2 } from "../905/486443";
import { useIsSelectedFigmakeFullscreen } from "../figma_app/552876";
import { z3 } from "../figma_app/386952";
import { Z } from "../905/116724";
var $$x2 = (e => (e.INITIAL = "initial", e.NEXT = "next", e))($$x2 || {});
let $$N10 = createOptimistThunk((e, t) => {
  let r = e.getState().multiplayer.allUsers.find(e => e.sessionID === t.presenterSessionID);
  let n = r?.name ?? "";
  let i = r ? getI18nString("collaboration.spotlight.visual_bell.user_left_the_spotlight", {
    userName: n
  }) : getI18nString("collaboration.spotlight.visual_bell.the_presenter_left_the_spotlight");
  e.dispatch(VisualBellActions.enqueue({
    message: i,
    type: "presentation_stopped_alert"
  }));
});
let $$C5 = createOptimistThunk((e, t) => {
  e.dispatch(VisualBellActions.dequeue({
    matchType: "presentation_stopped_alert"
  }));
});
let w = (e, t, r, n) => {
  let i = isNotNullish(t) && e !== t;
  let a = r === t;
  let o = n === t;
  return i && !a && !o;
};
function O() {
  let e = z3();
  let t = useDispatch();
  let r = useSelector(e => e.multiplayer);
  let a = useCallback(e => {
    t(J4({
      ...r,
      observingSessionID: e
    }));
  }, [r, t]);
  let s = useCallback(e => {
    Multiplayer.observeUser(e);
  }, []);
  return "prototype" === e ? a : s;
}
export function $$R12(e) {
  let {
    multiplayer: {
      observingSessionID,
      presenterSessionID,
      sessionID
    }
  } = e;
  let c = useDispatch();
  let _ = z3();
  let h = useAtomWithSubscription(Dv);
  let [m, g] = useState("initial");
  let f = useLatestRef(presenterSessionID);
  let E = observingSessionID === presenterSessionID;
  let y = sessionID === presenterSessionID || h;
  let b = w(f, presenterSessionID, observingSessionID, sessionID);
  let I = useAtomWithSubscription(Fj);
  let S = isInteractionPathCheck() ? 0 : I;
  let x = useAtomWithSubscription(jI);
  let [R, L] = useState(null);
  useEffect(() => {
    let e = null;
    null != R && (e = setTimeout(() => L(null), 1e3));
    return () => {
      e && clearTimeout(e);
    };
  }, [R]);
  let P = O();
  let D = useCallback(() => {
    isNotNullish(presenterSessionID) && ("prototype" !== _ && clearSelection(), P(presenterSessionID));
  }, [presenterSessionID, P, _]);
  let k = useCallback(() => {
    D();
    presenterSessionID && L(presenterSessionID);
  }, [presenterSessionID, D]);
  R === observingSessionID && L(null);
  let {
    isActive,
    start,
    cancel,
    complete
  } = Z(k);
  let B = useCallback(() => {
    cancel();
    L(null);
  }, [cancel]);
  let G = b && observingSessionID === f;
  let V = b && !G;
  let H = isNullish(presenterSessionID) && isNotNullish(f) && observingSessionID === f;
  isActive && y && B();
  useEffect(() => {
    G && (c($$C5()), start(x), g("next"));
  }, [x, c, G, start]);
  useEffect(() => {
    V && (c($$C5()), start(S), g("initial"));
  }, [S, c, V, start]);
  useEffect(() => {
    H && (P(-1), B(), c($$N10({
      presenterSessionID: f
    })));
  }, [B, c, f, H, e.multiplayer, P]);
  useEffect(() => {
    isActive && E && B();
  }, [E, B, isActive]);
  let z = (() => {
    switch (m) {
      case "next":
        return x;
      case "initial":
        return S;
      default:
        throwTypeError(m);
    }
  })();
  return {
    isAutoFollowPending: !y && (V || G || isActive || null != R),
    cancelAutoFollowCallback: B,
    completeAutoFollowCallback: complete,
    observeCurrentPresenter: D,
    autoFollowType: m,
    autoFollowDelayMs: z
  };
}
export function $$L4() {
  return useSelector(({
    multiplayer: {
      sessionID: e
    }
  }) => e);
}
export function $$P9() {
  return useSelector(({
    multiplayer: {
      observingSessionID: e
    }
  }) => e);
}
export function $$D8() {
  let e = useSelector(e => e.multiplayer);
  return e.allUsers.find(t => t.sessionID === e.sessionID) ?? null;
}
export function $$k0() {
  let e = useSelector(e => e.multiplayer);
  return e.allUsers.find(t => t.sessionID === e.observingSessionID) ?? null;
}
export function $$M11() {
  let e = useSelector(e => e.multiplayer);
  return e.allUsers.find(t => t.sessionID === e.presenterSessionID) ?? null;
}
export function $$F7({
  multiplayer: e
}) {
  let t = function () {
    let e = useIsSelectedFigmakeFullscreen();
    let t = $$U3();
    let r = XM();
    let n = hA();
    let i = l7();
    let a = _$$e();
    let s = ZO();
    return !!t && !r && !n && !i && !a && !s && !e;
  }();
  let r = e.presenterSessionID === e.sessionID;
  let i = z3();
  let a = useCallback(() => {
    "prototype" === i ? hk()?.stopPresenting() : Multiplayer.stopPresenting();
  }, [i]);
  useEffect(() => {
    !t && r && a();
  }, [t, r, a]);
}
export function $$j6({
  multiplayer: e
}) {
  let t = O();
  let r = !$$B1();
  let i = -1 !== e.observingSessionID;
  useEffect(() => {
    !r && i && t(-1);
  }, [r, i, t]);
}
export function $$U3() {
  let e = useIsSelectedFigmakeFullscreen();
  return !(getIsMobile() && isInFigmaMobile() && !isIpadDevice() || z4?.getIsExtension()) && !e;
}
export function $$B1() {
  let e = useIsSelectedFigmakeFullscreen();
  let t = XM();
  let r = e2();
  let n = hA();
  let i = l7();
  return !!t || !!r || !!n || !!i || !!e;
}
export function $$G13() {
  let e = useSelector(e => e.multiplayer);
  let t = e.sessionsNominatingCurrentUser[0];
  return t ? e.allUsers.find(e => e.sessionID === t) ?? null : null;
}
export const $0 = $$k0;
export const By = $$B1;
export const D_ = $$x2;
export const HG = $$U3;
export const KP = $$L4;
export const Lt = $$C5;
export const Pi = $$j6;
export const VA = $$F7;
export const Ww = $$D8;
export const _E = $$P9;
export const c3 = $$N10;
export const dR = $$M11;
export const oW = $$R12;
export const y = $$G13;