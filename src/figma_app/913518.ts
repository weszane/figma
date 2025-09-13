import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SessionStatus } from "../figma_app/763686";
import { atom, Xr, useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import { trackFileEventWithUser } from "../figma_app/901889";
import { H1 } from "../figma_app/124493";
import { XM } from "../905/486443";
import { setupRemovableAtomFamily } from "../figma_app/615482";
import { jo } from "../figma_app/629335";
import { Qs, sx } from "../905/992395";
import { D } from "../905/80656";
import { C3 } from "../figma_app/587765";
export let $$m4 = setupRemovableAtomFamily(() => atom(!1));
var $$g0 = (e => (e.OPEN = "meetings_panel_open", e.CLOSE = "meetings_panel_close", e))($$g0 || {});
var $$f3 = (e => (e.MEETINGS_TOOLBAR = "meetings_toolbar", e.MEETINGS_MINIMIZED = "meetings_minimized", e.MEETINGS_PANEL = "meetings_panel", e.INSERTS_MENU = "inserts_menu", e.QUICK_ACTIONS = "quick_actions", e.IPAD_MENU = "ipad_menu", e.MAKE_SOMETHING_V2_ONBOARDING = "make_something_v2_onboarding", e))($$f3 || {});
let E = () => {
  let e = trackFileEventWithUser();
  return useCallback((t, r) => {
    e(t, {
      source: r
    });
  }, [e]);
};
export function $$y2() {
  let e = Xr(Qs);
  let t = E();
  let r = $$b5();
  let [i, a] = useAtomValueAndSetter($$m4);
  return useCallback(n => {
    n && t("meetings_panel_open", n.source);
    i && a(!1);
    D(() => {
      r();
    });
    e({
      type: "OPEN"
    });
  }, [t, e, r, i, a]);
}
export function $$b5() {
  let e = Xr(Qs);
  let t = E();
  let r = useDispatch();
  let o = useSelector(e => e.mirror.appModel.votingSessionInfo);
  return useCallback(n => {
    n && t("meetings_panel_close", n.source);
    e({
      type: "CLOSE"
    });
    o.votingStage === SessionStatus.ENDED && r(H1({
      votingStage: SessionStatus.NO_SESSION
    }));
  }, [t, e, r, o]);
}
export function $$T1() {
  let e = useAtomWithSubscription(jo);
  let t = useSelector(e => e.music);
  let r = C3();
  let n = XM();
  let a = null != e.time && 0 !== e.time.totalTimeMs;
  let o = !!t.music?.selectedSongID && !t.music?.isPaused;
  let l = [];
  a && l.push(sx.TIMER);
  n && void 0 !== r && l.push(sx.VOTING);
  o && l.push(sx.MUSIC);
  return l;
}
export const Fn = $$g0;
export const II = $$T1;
export const MR = $$y2;
export const OO = $$f3;
export const qM = $$m4;
export const qU = $$b5;