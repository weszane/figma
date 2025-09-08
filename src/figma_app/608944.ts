import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { atom, useAtomValueAndSetter, atomStoreManager } from "../figma_app/27355";
import { hideSpecificModal } from "../905/156213";
let $$o2 = "ComponentFlyoutModal";
let $$l0 = "ComponentFlyoutModalContent";
let d = atom(null);
export function $$c1() {
  let e = useDispatch();
  let t = useSelector(e => e.modalShown);
  let [r, l] = useAtomValueAndSetter(d);
  let c = useCallback(e => {
    null === e && l(null);
    l(t => null === t ? null : {
      ...t,
      ...e
    });
  }, [l]);
  let u = useCallback(() => {
    c(null);
    e(hideSpecificModal({
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
  atomStoreManager.set(d, null);
  e(hideSpecificModal({
    type: $$o2
  }));
}
export const Ev = $$l0;
export const JA = $$c1;
export const VI = $$o2;
export const qr = $$u3;