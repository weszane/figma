import { useState, useEffect } from "react";
import { Multiplayer, SchemaJoinStatus } from "../figma_app/763686";
import { U } from "../figma_app/901889";
export function $$s1() {
  let [e, t] = useState(navigator.onLine);
  useEffect(() => {
    let e = () => t(navigator.onLine);
    window.addEventListener("online", e);
    window.addEventListener("offline", e);
    return () => {
      window.removeEventListener("online", e);
      window.removeEventListener("offline", e);
    };
  }, []);
  return e;
}
export function $$o2() {
  let e = U();
  let t = Multiplayer?.getSessionState();
  let i = $$s1();
  useEffect(() => {
    !i && t && t !== SchemaJoinStatus.DETACHED && e("offline_multiplayer_discrepancy", {
      isNavigatorOnline: navigator.onLine,
      isJoined: t === SchemaJoinStatus.JOINED,
      multiplayerSessionState: t.toString()
    });
  }, [i, t, e]);
  return i || t === SchemaJoinStatus.JOINED;
}
export function $$l0() {
  let e = Multiplayer?.getSessionState();
  return navigator.onLine || e === SchemaJoinStatus.JOINED;
}
export const Dn = $$l0;
export const wK = $$s1;
export const yZ = $$o2;