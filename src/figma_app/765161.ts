import { useState, useEffect } from "react";
import { useSelector } from "../vendor/514228";
import { BrowserInfo } from "../figma_app/778880";
import { Tc } from "../905/797478";
import { CB } from "../figma_app/442259";
import { l as _$$l } from "../905/831968";
import { NZ, HY, H1 } from "../figma_app/300024";
export function $$c3() {
  return Tc(NZ);
}
export function $$u0() {
  return Tc(HY);
}
export function $$p1({
  source: e,
  openedViaHover: t = !1,
  offsetFromToolbelt: r = H1
}) {
  let n = $$c3();
  let i = $$u0();
  let a = n || i;
  if (a) {
    let n = a.getBoundingClientRect();
    let i = n.x + n.width / 2;
    let s = n.y - (_$$l + 2) - r;
    CB.handleShortcutPressWithType({
      viewportX: i,
      viewportY: s,
      source: e,
      openedViaHover: t,
      wheelType: "STAMP"
    });
    CB.handleShortcutRelease(i, s);
  }
}
export function $$_5({
  isHidden: e,
  wheelRef: t
}) {
  let [r, i] = useState(!1);
  useEffect(() => {
    if (e) {
      i(!0);
      return;
    }
    let r = t.current;
    if (!r) {
      i(!1);
      return;
    }
    let n = () => {
      i(!1);
      r.removeEventListener("transitionend", n);
    };
    r.addEventListener("transitionend", n);
    return () => {
      r.removeEventListener("transitionend", n);
    };
  }, [e, t]);
  return e || r;
}
export function $$h4() {
  return useSelector(e => "WHEEL" === e.multiplayerEmoji.type && ["STAMP1", "STAMP2"].includes(e.multiplayerEmoji.wheelType));
}
export function $$m2() {
  return useSelector(e => "WHEEL" === e.multiplayerEmoji.type && ["REACTION1", "REACTION2", "STAMP1", "STAMP2"].includes(e.multiplayerEmoji.wheelType));
}
export function $$g6() {
  return !BrowserInfo.isIpad;
}
export const $R = $$u0;
export const X = $$p1;
export const Xc = $$m2;
export const b9 = $$c3;
export const iT = $$h4;
export const p3 = $$_5;
export const pZ = $$g6;