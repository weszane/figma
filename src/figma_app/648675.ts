import { useState, useEffect } from "react";
import { useSelector } from "../vendor/514228";
import { QOV } from "../figma_app/763686";
import { gl } from "../905/216495";
import { kl } from "../905/275640";
export function $$l0() {
  let e = kl("aspectRatioLockToggled");
  let t = useSelector(e => e.mirror.appModel.activeUserAction);
  let [r, l] = useState(!1);
  useEffect(() => {
    let e = e => {
      e.ctrlKey && l(!0);
    };
    let t = e => {
      e.ctrlKey || l(!1);
    };
    document.addEventListener("keydown", e);
    document.addEventListener("keyup", t);
    return () => {
      document.removeEventListener("keydown", e);
      document.removeEventListener("keyup", t);
    };
  }, []);
  return !!(!(t === QOV.RESIZING && r) && e && !gl(e));
}
export const h = $$l0;