import { useState, useRef, useCallback, useLayoutEffect, useMemo, useContext } from "react";
import { atom } from "../figma_app/27355";
import { F } from "../905/680873";
import { useLatestRef } from "../figma_app/922077";
import { useWindowDimensions } from "../905/745972";
import { getThemePx } from "../905/149328";
import { setupRemovableAtomFamily } from "../figma_app/615482";
import { y0 } from "../figma_app/718307";
import { fr, UA, Cg, uF, ym } from "../9410/398228";
import { m } from "../9410/298357";
export function $$h0({
  initialHeight: e,
  numberOfPages: t,
  upsellHeight: i,
  panelHeadersHeight: n,
  showingExtraControls: d,
  scrollContainerInnerRef: c,
  filterState: h,
  onHeightChange: f
}) {
  let [g, _] = useState(void 0);
  let x = useRef(!1);
  let {
    windowInnerHeight
  } = useWindowDimensions();
  let b = useCallback(function (e) {
    _(e);
    f?.(e);
  }, [f]);
  useLayoutEffect(() => {
    void 0 === e || x.current || (_(e), x.current = !0);
  }, [e]);
  let C = function ({
    numberOfPages: e,
    upsellHeight: t,
    panelHeadersHeight: i,
    showingExtraControls: n,
    windowInnerHeight: a
  }) {
    return useMemo(function () {
      let r = e * fr;
      r = Math.ceil(r / fr) * fr + t + UA;
      n && (r += fr);
      return Math.min(r, Math.round(.25 * (a - getThemePx() - Cg - i)));
    }, [i, t, a, e, n]);
  }({
    numberOfPages: t,
    upsellHeight: i,
    panelHeadersHeight: n,
    showingExtraControls: d,
    windowInnerHeight
  });
  let v = $$m1({
    scrollContainerInnerRef: c,
    windowInnerHeight
  });
  let E = g ? v(g) : C;
  (function ({
    filterState: e,
    computedHeight: t,
    defaultHeight: i,
    setHeight: n
  }) {
    let o = useLatestRef(t);
    let l = F({
      previousComputedHeight: o,
      defaultHeight: i,
      setHeight: n
    });
    useLayoutEffect(() => {
      if (void 0 === e) return;
      let {
        previousComputedHeight,
        defaultHeight,
        setHeight
      } = l.current;
      previousComputedHeight && setHeight(e === m.ALL ? Math.max(previousComputedHeight, defaultHeight) : Math.min(previousComputedHeight, defaultHeight));
    }, [e, l]);
  })({
    filterState: h,
    computedHeight: E,
    defaultHeight: C,
    setHeight: b
  });
  return {
    height: E,
    setHeight: b,
    defaultHeight: C
  };
}
export function $$m1({
  scrollContainerInnerRef: e,
  windowInnerHeight: t
}) {
  let {
    topLevelObjectRowHeight
  } = useContext(y0);
  return useCallback(function (r) {
    return Math.max(1.5 * fr, Math.min(r, t - (e.current?.getBoundingClientRect().top ?? 175) - (1.5 * topLevelObjectRowHeight + (uF + ym))));
  }, [e, t, topLevelObjectRowHeight]);
}
setupRemovableAtomFamily(() => atom(null));
export const k3 = $$h0;
export const q0 = $$m1;