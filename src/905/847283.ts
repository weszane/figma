import { useCallback } from "react";
import { useStore } from "../vendor/514228";
import { ds } from "../figma_app/314264";
var $$s0 = (e => (e.START = "start", e.STOP = "stop", e.IGNORE = "ignore", e))($$s0 || {});
export function $$o1() {
  let e = useStore();
  return useCallback(t => {
    let i = e.getState();
    let n = i.openFile?.key;
    let r = i.multiplayer;
    let s = r.allUsers.find(e => e.sessionID === r.sessionID);
    let o = r.allUsers.length;
    let l = s?.userID;
    ds("Spotlight CTA Clicked", n, i, {
      userId: l,
      numFileUsers: o,
      eventType: t
    });
  }, [e]);
}
export const N = $$s0;
export const T = $$o1;