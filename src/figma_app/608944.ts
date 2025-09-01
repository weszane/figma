import { useCallback, useMemo } from "react";
import { wA, d4 } from "../vendor/514228";
import { eU, fp, zl } from "../figma_app/27355";
import { ES } from "../905/156213";
let $$o2 = "ComponentFlyoutModal";
let $$l0 = "ComponentFlyoutModalContent";
let d = eU(null);
export function $$c1() {
  let e = wA();
  let t = d4(e => e.modalShown);
  let [r, l] = fp(d);
  let c = useCallback(e => {
    null === e && l(null);
    l(t => null === t ? null : {
      ...t,
      ...e
    });
  }, [l]);
  let u = useCallback(() => {
    c(null);
    e(ES({
      type: $$o2
    }));
  }, [e, c]);
  let p = useMemo(() => null !== r || t?.type === $$o2, [r, t?.type]);
  return {
    flyoutProps: r,
    setFlyoutProps: l,
    updateFlyoutProps: c,
    closeFlyout: u,
    isFlyoutOpen: p
  };
}
export function $$u3(e) {
  zl.set(d, null);
  e(ES({
    type: $$o2
  }));
}
export const Ev = $$l0;
export const JA = $$c1;
export const VI = $$o2;
export const qr = $$u3;