import { useState, useLayoutEffect, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "../905/915765";
import { useLatestRef } from "../figma_app/922077";
import { handlePinningState } from "../905/116101";
import { VU } from "../905/625959";
import { LR } from "../figma_app/120210";
import { PinningState } from "../905/192333";
export function $$u0(e, t, s, u, m, _) {
  let [g, p] = useState(e());
  let [x, h] = useState(!1);
  let [f, b] = useState(!1);
  useLayoutEffect(() => {
    let t = debounce(() => {
      s === PinningState.PINNED_AND_DOCKED_LEFT && b(!0);
      p(e());
    }, 100);
    window.addEventListener("resize", t);
    return () => {
      window.removeEventListener("resize", t);
    };
  }, [e, s]);
  let y = useDispatch<AppDispatch>();
  let j = useCallback(() => {
    y(handlePinningState({
      initialX: u.x,
      initialY: u.y,
      pinned: PinningState.PINNED_AND_DOCKED_LEFT
    }));
    b(!0);
    t(u);
    VU.get("set-tool-default", "toolbar")();
  }, [y, u, t, b]);
  useEffect(() => {
    s === PinningState.NOT_PINNED && m && _ && (y(handlePinningState({
      initialX: m.x,
      initialY: m.y,
      pinned: PinningState.NOT_PINNED
    })), b(!0), t(m));
  }, [y, t, s, m, _]);
  let S = useSelector(e => e.mirror?.appModel.showUi);
  let v = useLatestRef(S);
  let w = LR();
  useEffect(() => {
    v && !S ? w() : !v && S && s === PinningState.PINNED_AND_DOCKED_LEFT && j();
  }, [w, s, v, j, S]);
  useEffect(() => {
    f && b(!1);
  }, [f]);
  return {
    bounds: g,
    showLeftPinBound: x,
    setShowLeftPinBound: h,
    shouldSnapToPosition: f,
    setPinned: j
  };
}
export const C = $$u0;
