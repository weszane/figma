import { useCallback, useEffect } from "react";
import { eU, zl } from "../figma_app/27355";
import { o, p } from "../figma_app/516794";
export function $$s0() {
  let e = o();
  let t = o();
  let i = eU(!1);
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
      p(t, useCallback(() => {
        setOpen(!0);
      }, [setOpen]));
      p(i, useCallback(() => {
        setOpen(!1);
      }, [setOpen]));
      useEffect(() => {
        zl.set(s, e.isOpen);
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