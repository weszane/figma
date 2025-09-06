import { useMemo, useLayoutEffect } from "react";
import { useSelector } from "../vendor/514228";
import { DP } from "../905/158740";
import { aH, R0 } from "../figma_app/273493";
import { DV9, Ez5 } from "../figma_app/763686";
import { Bx } from "../figma_app/191804";
import { selectWithShallowEqual } from "../905/103090";
import { F } from "../905/989956";
import { ow } from "../figma_app/976749";
import { sO } from "../figma_app/21029";
import { DP as _$$DP } from "../905/640017";
export function $$h0() {
  let e = ow();
  let t = sO();
  let r = useSelector(e => e.mirror.appModel.currentPage);
  let a = selectWithShallowEqual(e => e.mirror.sceneGraph?.get(r)?.backgroundColor);
  let h = _$$DP();
  let m = useMemo(() => F.format(a), [a]);
  if (e) {
    let e = DV9?.getWhiteboardCanvasColor();
    return e ? F.format(aH(e)) : "#ffffff";
  }
  return t && Ez5 ? F.format(aH(R0(Ez5.getFSCanvasDefaultFill()))) : a ? m : Bx(h);
}
export function $$m1() {
  let e = "ui3" === DP().version;
  let t = $$h0();
  useLayoutEffect(() => {
    e && document.documentElement.style.setProperty("--canvas-color", t);
  }, [t, e]);
}
export const J = $$h0;
export const c = $$m1;