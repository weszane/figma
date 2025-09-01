import { useMemo, useEffect } from "react";
import { M3 } from "../figma_app/119475";
import { tm } from "../905/479155";
import { a as _$$a, i as _$$i } from "../905/44915";
export function $$o0({
  ref: e,
  navigationOptions: t,
  itemsPerRow: i,
  debug: o,
  focusOptions: l,
  itemOverrides: d
}) {
  let {
    itemIndex,
    layoutIndex,
    inPrimaryLayout
  } = tm(e);
  let m = [layoutIndex, null != i ? Math.floor(itemIndex / i) : 0];
  let h = d?.column || (null != i ? itemIndex % i : itemIndex);
  let {
    isFauxFocused,
    setKeyboardNavigationElement,
    keyboardNavigationItem
  } = M3({
    path: m,
    column: h,
    navigationOptions: "function" == typeof t ? t({
      itemIndex,
      layoutIndex,
      inPrimaryLayout
    }) : t
  });
  let A = _$$a({
    isPrimaryLayout: inPrimaryLayout,
    layoutIndex,
    itemIndex,
    debug: o,
    ...l
  });
  let {
    focus,
    blur
  } = _$$i({
    keyboardNavigationItem,
    shouldAutoFocus: A,
    enableFauxFocus: !0
  });
  let v = useMemo(() => keyboardNavigationItem ? {
    item: keyboardNavigationItem,
    index: itemIndex,
    element: e.current
  } : null, [itemIndex, keyboardNavigationItem, e]);
  useEffect(() => {
    e.current && !keyboardNavigationItem && setKeyboardNavigationElement(e.current);
  }, [keyboardNavigationItem, e, setKeyboardNavigationElement]);
  return {
    focus,
    active: isFauxFocused,
    target: v,
    blur
  };
}
export const H = $$o0;