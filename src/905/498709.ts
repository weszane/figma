import { useCallback, useEffect } from "react";
import { atom, atomStoreManager } from "../figma_app/27355";
import { createEventEmitter, useEventSubscription } from "../figma_app/516794";
export function $$s0() {
  let e = createEventEmitter();
  let t = createEventEmitter();
  let i = atom(!1);
  return {
    useRegisterMenu: s => function ({
      manager: e,
      openEvent: t,
      closeEvent: i,
      isOpenAtom: s
    }) {
      let {
        setOpen
      } = e;
      useEventSubscription(t, useCallback(() => {
        setOpen(!0);
      }, [setOpen]));
      useEventSubscription(i, useCallback(() => {
        setOpen(!1);
      }, [setOpen]));
      useEffect(() => {
        atomStoreManager.set(s, e.isOpen);
      }, [e.isOpen, s]);
    }({
      manager: s,
      openEvent: e,
      closeEvent: t,
      isOpenAtom: i
    }),
    open: () => e.emit(),
    close: () => t.emit(),
    isOpenAtom: i
  };
}
export const K = $$s0;