import { useState, useEffect } from "react";
import { h3O, kul } from "../figma_app/763686";
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
  let t = h3O?.getSessionState();
  let i = $$s1();
  useEffect(() => {
    !i && t && t !== kul.DETACHED && e("offline_multiplayer_discrepancy", {
      isNavigatorOnline: navigator.onLine,
      isJoined: t === kul.JOINED,
      multiplayerSessionState: t.toString()
    });
  }, [i, t, e]);
  return i || t === kul.JOINED;
}
export function $$l0() {
  let e = h3O?.getSessionState();
  return navigator.onLine || e === kul.JOINED;
}
export const Dn = $$l0;
export const wK = $$s1;
export const yZ = $$o2;