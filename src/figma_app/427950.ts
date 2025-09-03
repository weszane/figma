import { useCallback, useMemo } from "react";
import { throwTypeError } from "../figma_app/465776";
import { isNotNullish } from "../figma_app/95419";
import { z2, PK } from "../figma_app/914216";
import { ZU } from "../figma_app/986347";
let s = Symbol("uniqueSymbol");
export function $$d0(e) {
  let t = function () {
    let e = function () {
      let e = z2();
      let t = PK();
      return useCallback(r => {
        let n = r.actions.filter(r => e(r) && t(r));
        return 0 === n.length ? null : {
          ...r,
          actions: n,
          [s]: "FilteredFlyoutConfig"
        };
      }, [e, t]);
    }();
    let {
      getMaybeEnabledItem,
      getMaybeSubmenuWithEnabledItems
    } = $$c1();
    return useCallback(n => {
      switch (n.type) {
        case ZU.ACTION:
          return getMaybeEnabledItem(n);
        case ZU.ACTION_SUBMENU:
          return getMaybeSubmenuWithEnabledItems(n);
        case ZU.FLYOUT:
          return e(n);
        case ZU.CUSTOM_ACTION:
          return n;
        default:
          throwTypeError(n);
      }
    }, [e, getMaybeEnabledItem, getMaybeSubmenuWithEnabledItems]);
  }();
  return useMemo(() => e.map(e => e.map(e => t(e)).filter(isNotNullish)).filter(e => e && e.length > 0), [e, t]);
}
export function $$c1() {
  let e = z2();
  let t = PK();
  let r = useCallback(r => r.type === ZU.CUSTOM_ACTION || e(r) && t(r), [e, t]);
  let i = useCallback(e => r(e) ? e : null, [r]);
  let a = useCallback(e => {
    let {
      items,
      ...n
    } = e;
    let i = items.filter(r);
    return i.length > 0 ? {
      ...n,
      items: i
    } : null;
  }, [r]);
  return useMemo(() => ({
    getMaybeEnabledItem: i,
    getMaybeSubmenuWithEnabledItems: a
  }), [i, a]);
}
export const U = $$d0;
export const n = $$c1;