import { useRef, useCallback, useEffect } from "react";
import { PanelType } from "../figma_app/763686";
import { Xr, useAtomValueAndSetter } from "../figma_app/27355";
import { O1, KD } from "../figma_app/317394";
import { _4 } from "../figma_app/32128";
import { sitesViewSetterAtomFamily, genericAtomFamily1, booleanAtomFamily, ViewActionType } from "../figma_app/115923";
export function $$d0() {
  let e = Xr(sitesViewSetterAtomFamily);
  let [t, r] = useAtomValueAndSetter(genericAtomFamily1);
  let [d, c] = useAtomValueAndSetter(booleanAtomFamily);
  let u = useRef(null);
  let p = useCallback(() => {
    c(!0);
    u.current = setTimeout(() => {
      r(void 0);
      c(!1);
    }, 100);
  }, [c, r]);
  let _ = _4();
  let h = e => {
    u.current && (clearTimeout(u.current), c(!1));
    e === ViewActionType.FIND && _();
    r(e);
  };
  let m = () => {
    h(ViewActionType.INSERT);
  };
  let g = () => {
    h(ViewActionType.FIND);
  };
  useEffect(() => {
    t && e(PanelType.FILE);
  }, [t]);
  let f = useCallback(() => !!t && (p(), !0), [t, p]);
  O1(f, KD.SITES_NON_DEFAULT_LEFT_RAIL_VIEW);
  return {
    hasOverlay: !!t,
    overlayClosing: d,
    closeOverlay: p,
    inserts: {
      open: m,
      toggle: () => {
        t !== ViewActionType.INSERT || d ? m() : p();
      }
    },
    search: {
      open: g,
      toggle: () => {
        t !== ViewActionType.FIND || d ? g() : p();
      }
    }
  };
}
export const h = $$d0;