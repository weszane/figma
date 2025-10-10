import { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Multiplayer } from "../figma_app/763686";
import { postUserFlag } from "../905/985254";
import { VoiceCallManager } from "../figma_app/275739";
export let $$l0 = {
  MAIN_GUIDE: "https://help.figma.com/hc/articles/1500004414622",
  TROUBLESHOOT: "https://help.figma.com/hc/articles/4402390108951",
  ACCESSIBILITY: "https://help.figma.com/hc/articles/4402390110743",
  FEEDBACK_FORM: "https://form.asana.com?k=FPQgFCXUINQN6CmMtWiabQ&d=10497086658021"
};
export function $$d1() {
  let e = useDispatch<AppDispatch>();
  let t = useSelector(e => e.multiplayer.observingSessionID);
  let r = useSelector(e => e.multiplayer.sessionID);
  return useCallback(function (n) {
    if (n && n.sessionID) {
      try {
        Multiplayer?.observeUser(n.sessionID);
      } catch {
        return;
      }
      t !== n.sessionID && r !== n.sessionID && e(postUserFlag({
        aware_of_observation_mode: !0
      }));
    }
  }, [t, r, e]);
}
export function $$c2() {
  let [e, t] = useState(null);
  let r = useSelector(e => e.voice.showWidget);
  useEffect(() => {
    r && !e && t(VoiceCallManager.getInstance());
  }, [r, e]);
  return e;
}
export const AM = $$l0;
export const eo = $$d1;
export const qr = $$c2;