import { useRef, useCallback } from "react";
import { md, zl } from "../figma_app/27355";
import { Statsig } from "../vendor/735621";
import { getInitialOptions } from "../figma_app/169182";
import { iO, f6 } from "../figma_app/594947";
import { sb } from "../3973/663243";
import { u_, ZJ } from "../3973/697935";
import { Uv } from "../3973/473379";
export function $$c0(e, t) {
  let r = useRef(null);
  md(u_);
  return {
    getDynamicConfig: useCallback(() => {
      if (zl.get(ZJ).status !== Uv.COMPLETED) return sb;
      if (null == r.current) try {
        t ? r.current = Statsig.getConfigWithExposureLoggingDisabled(e) : r.current = Statsig.getConfig(e);
      } catch (e) {
        r.current = sb;
      }
      return r.current;
    }, [e, t])
  };
}
export async function $$d2(e, t) {
  if (await zl.get(u_), zl.get(ZJ).status !== Uv.COMPLETED) return sb;
  try {
    if (t) return Statsig.getConfigWithExposureLoggingDisabled(e);
    return Statsig.getConfig(e);
  } catch (e) {
    return sb;
  }
}
export function $$g1(e) {
  let t = getInitialOptions()?.dynamic_configs?.[e];
  return t ? new iO(e, t, "", {
    reason: f6.Unrecognized,
    time: Date.now()
  }) : sb;
}
export const Fj = $$c0;
export const gP = $$g1;
export const w0 = $$d2;