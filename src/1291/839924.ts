import { useState, useLayoutEffect, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "../905/915765";
import { ZC } from "../figma_app/39751";
import { jy } from "../905/116101";
import { VU } from "../905/625959";
import { LR } from "../figma_app/120210";
import { t as _$$t } from "../905/192333";
export function $$u0(e, t, s, u, m, _) {
  let [g, p] = useState(e());
  let [x, h] = useState(!1);
  let [f, b] = useState(!1);
  useLayoutEffect(() => {
    let t = debounce(() => {
      s === _$$t.PINNED_AND_DOCKED_LEFT && b(!0);
      p(e());
    }, 100);
    window.addEventListener("resize", t);
    return () => {
      window.removeEventListener("resize", t);
    };
  }, [e, s]);
  let y = useDispatch();
  let j = useCallback(() => {
    y(jy({
      initialX: u.x,
      initialY: u.y,
      pinned: _$$t.PINNED_AND_DOCKED_LEFT
    }));
    b(!0);
    t(u);
    VU.get("set-tool-default", "toolbar")();
  }, [y, u, t, b]);
  useEffect(() => {
    s === _$$t.NOT_PINNED && m && _ && (y(jy({
      initialX: m.x,
      initialY: m.y,
      pinned: _$$t.NOT_PINNED
    })), b(!0), t(m));
  }, [y, t, s, m, _]);
  let S = useSelector(e => e.mirror?.appModel.showUi);
  let v = ZC(S);
  let w = LR();
  useEffect(() => {
    v && !S ? w() : !v && S && s === _$$t.PINNED_AND_DOCKED_LEFT && j();
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
