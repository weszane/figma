import { jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { useSelector } from "../vendor/514228";
import { throwTypeError } from "../figma_app/465776";
import { UserActionState, AppStateTsApi, Positioning, Fullscreen } from "../figma_app/763686";
import { r as _$$r } from "../905/249071";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { A as _$$A } from "../vendor/850789";
import { FQ } from "../9410/571209";
import { lg } from "../figma_app/976749";
import { kl } from "../905/275640";
import { _X, Yb, $$, ZT } from "../figma_app/62612";
import { getObservableOrFallback } from "../figma_app/84367";
import { f as _$$f } from "../905/299537";
import { Al, tJ, T1, DH, Dl, Yh, lM } from "../figma_app/90441";
import { LP, JI, C_, v2, iv } from "../9410/43374";
export function $$j0({
  children: e,
  isShown: t,
  centerInFrame: i,
  anchorToRect: s,
  showInReadOnly: l,
  respectPreferredPosition: d,
  disableAnimation: c,
  zIndex: u,
  obstacleMargin: p
}) {
  let _;
  let [x, j] = useState(!1);
  let [y, v] = useState(!1);
  let C = useRef(null);
  let {
    markPositionChanged,
    markSelectionChanged
  } = LP(C);
  let S = useSelector(({
    mirror: {
      appModel: e
    }
  }) => [UserActionState.DEFAULT, UserActionState.SELECTING_TEXT, UserActionState.CLICKING_TO_CHANGE_SELECTION].includes(e.activeUserAction));
  let w = useSelector(({
    mirror: {
      appModel: e
    }
  }) => e.isReadOnly);
  let I = _X({
    subscribeToUpdates_expensive: t
  });
  let L = getObservableOrFallback(AppStateTsApi.canvasViewState().selectionBoundingRect);
  let N = getObservableOrFallback(AppStateTsApi.canvasViewState().inlineMenuTarget);
  let A = s || N?.boundingBox || L;
  let O = JI();
  let k = useSelector(e => e.mirror.sceneGraphSelection);
  let R = kl("isTableSublayerSelected");
  _ = Positioning.ABOVE;
  N?.preferredPosition ? _ = N.preferredPosition : R && (_ = Positioning.BELOW);
  let M = _;
  let D = !!O || !I || !A || !S || w && !l || !t;
  useEffect(() => {
    (D || y) && x && j(!1);
  }, [D, x, y]);
  let P = I?.offsetX || 0;
  let U = I?.offsetY || 0;
  return (useEffect(() => {
    j(!1);
  }, [k, P, U]), useEffect(() => {
    markSelectionChanged(k);
  }, [k, markSelectionChanged]), D) ? jsx(C_, {
    disableAnimation: c,
    ref: C,
    children: null
  }) : jsx(b, {
    animationContainerRef: C,
    boundingBox: A,
    centerInFrame: i,
    disableAnimation: c,
    isHovering: x,
    markPositionChanged,
    obstacleMargin: p,
    preferredRelativePosition: M,
    respectPreferredPosition: d,
    setIsHovering: j,
    setSizeChanged: v,
    viewport: I,
    zIndex: u,
    children: e
  });
}
function b({
  children: e,
  viewport: t,
  animationContainerRef: i,
  centerInFrame: a,
  boundingBox: h,
  preferredRelativePosition: f,
  setSizeChanged: j,
  isHovering: b,
  setIsHovering: y,
  markPositionChanged: v,
  respectPreferredPosition: C,
  disableAnimation: T,
  zIndex: E,
  obstacleMargin: S
}) {
  let [w, I] = useAtomValueAndSetter(_$$f);
  let L = w.positionRelativeToSelection;
  let N = useRef(null);
  let A = lg();
  let O = v2();
  let k = a ? 0 : O;
  let R = useRef(null);
  let M = FQ(R, S);
  let D = Yb(t, h);
  let P = useMemo(() => ({
    ...D,
    x: D.x + t.x,
    y: D.y + t.y
  }), [D, t]);
  let U = useCallback((e, i, n, r) => {
    if (t) {
      let a = e - t.x;
      let s = i - t.y;
      let l = $$(t, {
        x: a,
        y: s - r / window.devicePixelRatio
      });
      Fullscreen.figjamInlineMenuPositionUpdate(l.x, l.y, n.height);
    }
    v({
      x: e + n.width / 2,
      y: i + n.height / 2
    });
    let a = iv(P, e, i, f);
    L !== a && I({
      type: "SET_POS_RELATIVE_TO_SELECTION",
      payload: a
    });
  }, [t, v, P, L, I, f]);
  let F = useCallback((e, t, i) => {
    switch (i) {
      case Positioning.ABOVE:
        return [Al(e, t), a ? tJ(e, t) : T1(e, t, k)];
      case Positioning.BELOW:
        return [Al(e, t), a ? tJ(e, t) : DH(e, t, k)];
      case Positioning.LEFT:
        return [Dl(e, t, 20), a ? tJ(e, t) : e.y];
      case Positioning.RIGHT:
        return [Yh(e, 20), a ? tJ(e, t) : e.y];
      default:
        throwTypeError(i);
    }
  }, [k, a]);
  let H = useCallback((e, t, i) => {
    let [n, r] = F(e, t, i);
    return _$$r.fromOriginAndSize(n, r, t.width, t.height);
  }, [F]);
  let B = useCallback((e, t, i, n, r) => !a && i === Positioning.ABOVE && n.top() > r.top() ? H(e, t, Positioning.BELOW) : !a && i === Positioning.BELOW && n.top() < r.top() ? H(e, t, Positioning.ABOVE) : i === Positioning.LEFT && n.left() > r.left() ? H(e, t, Positioning.RIGHT) : i === Positioning.RIGHT && n.left() < r.left() ? H(e, t, Positioning.LEFT) : n, [H, a]);
  let V = useCallback((e, i, n, r) => {
    let a = _$$r.fromOriginAndSize(t.x, t.y, t.width, t.height);
    let s = H(e, i, f);
    let o = M(s, a, r);
    let d = B(e, i, f, o, s);
    d === o || C || (o = M(d, a, r));
    return [o.left(), o.top()];
  }, [f, C, t.height, t.width, t.x, t.y, M, H, B]);
  let [G] = _$$A(ZT(D, t), 500);
  if (!G) return jsx(C_, {
    disableAnimation: T,
    ref: i,
    children: null
  });
  let K = "whiteboard" === A && b ? {
    transition: "transform 0.1s"
  } : {};
  K.WebkitUserSelect = "none";
  return jsx(lM, {
    frozen: b,
    offset: k,
    onMouseEnter: () => {
      y(!0);
      N.current && clearTimeout(N.current);
      N.current = null;
    },
    onMouseLeave: () => {
      N.current = setTimeout(() => y(!1), 100);
    },
    onPosition: U,
    positionXY: V,
    setSizeChanged: j,
    style: K,
    targetRect: P,
    zIndex: E,
    children: jsx("div", {
      ref: R,
      children: jsx(C_, {
        disableAnimation: T,
        ref: i,
        children: e
      })
    })
  });
}
export const k = $$j0;