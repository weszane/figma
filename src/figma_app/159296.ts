import { useRef, useEffect, useMemo } from "react";
import { Ez5 } from "../figma_app/763686";
import { Xr } from "../figma_app/27355";
import { aY } from "../figma_app/741237";
import { E7 } from "../905/216495";
import { kl } from "../905/275640";
import { p8 } from "../figma_app/722362";
import { iZ } from "../905/372672";
import { ut } from "../figma_app/84367";
import { Fk } from "../figma_app/167249";
import { b } from "../figma_app/203891";
import { GR } from "../figma_app/229710";
export function $$m0() {
  let e = p8("showUi");
  let t = p8("isReadOnly");
  return !!iZ() && e && t;
}
export function $$g1() {
  return ut(Ez5?.propertiesPanelState().shownPropertiesPanels, []);
}
export function $$f3() {
  let e = Xr(b);
  let t = useRef(null);
  let r = kl("productComponentGUIDBackingInstances");
  let i = E7(r);
  let s = Fk((e, t) => {
    if (t) {
      let r = e.get(t);
      return r?.simplifyInstancePanels ?? !1;
    }
    return !1;
  }, i);
  useEffect(() => {
    if (t.current !== i) {
      t.current = i;
      let r = GR.DEFAULT_EXPANDED;
      null !== i && s && (r = GR.DEFAULT_SIMPLIFIED);
      e(r);
    }
  }, [i, s, e]);
}
export function $$E2({
  defaultTab: e,
  getActiveTab: t
}) {
  let r = ut(aY(), e);
  let i = useMemo(() => t(r), [t, r]);
  useEffect(() => {
    i !== r && aY()?.set(i);
  }, [i, r]);
  return i;
}
export const G$ = $$m0;
export const GV = $$g1;
export const P5 = $$E2;
export const S2 = $$f3;