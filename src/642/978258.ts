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
export function $$_0({
  children: e,
  isShown: t,
  centerInFrame: s,
  anchorToRect: l,
  showInReadOnly: o,
  respectPreferredPosition: d,
  disableAnimation: c,
  zIndex: u,
  obstacleMargin: p
}) {
  let f;
  let [x, _] = useState(!1);
  let [C, j] = useState(!1);
  let v = useRef(null);
  let {
    markPositionChanged,
    markSelectionChanged
  } = LP(v);
  let w = useSelector(({
    mirror: {
      appModel: e
    }
  }) => [UserActionState.DEFAULT, UserActionState.SELECTING_TEXT, UserActionState.CLICKING_TO_CHANGE_SELECTION].includes(e.activeUserAction));
  let T = useSelector(({
    mirror: {
      appModel: e
    }
  }) => e.isReadOnly);
  let N = _X({
    subscribeToUpdates_expensive: t
  });
  let I = getObservableOrFallback(AppStateTsApi.canvasViewState().selectionBoundingRect);
  let E = getObservableOrFallback(AppStateTsApi.canvasViewState().inlineMenuTarget);
  let M = l || E?.boundingBox || I;
  let A = JI();
  let P = useSelector(e => e.mirror.sceneGraphSelection);
  let L = kl("isTableSublayerSelected");
  f = Positioning.ABOVE;
  E?.preferredPosition ? f = E.preferredPosition : L && (f = Positioning.BELOW);
  let R = f;
  let O = !!A || !N || !M || !w || T && !o || !t;
  useEffect(() => {
    (O || C) && x && _(!1);
  }, [O, x, C]);
  let D = N?.offsetX || 0;
  let F = N?.offsetY || 0;
  return (useEffect(() => {
    _(!1);
  }, [P, D, F]), useEffect(() => {
    markSelectionChanged(P);
  }, [P, markSelectionChanged]), O) ? jsx(C_, {
    disableAnimation: c,
    ref: v,
    children: null
  }) : jsx(b, {
    animationContainerRef: v,
    boundingBox: M,
    centerInFrame: s,
    disableAnimation: c,
    isHovering: x,
    markPositionChanged,
    obstacleMargin: p,
    preferredRelativePosition: R,
    respectPreferredPosition: d,
    setIsHovering: _,
    setSizeChanged: j,
    viewport: N,
    zIndex: u,
    children: e
  });
}
function b({
  children: e,
  viewport: t,
  animationContainerRef: s,
  centerInFrame: i,
  boundingBox: h,
  preferredRelativePosition: g,
  setSizeChanged: _,
  isHovering: b,
  setIsHovering: C,
  markPositionChanged: j,
  respectPreferredPosition: v,
  disableAnimation: S,
  zIndex: k,
  obstacleMargin: w
}) {
  let [T, N] = useAtomValueAndSetter(_$$f);
  let I = T.positionRelativeToSelection;
  let E = useRef(null);
  let M = lg();
  let A = v2();
  let P = i ? 0 : A;
  let L = useRef(null);
  let R = FQ(L, w);
  let O = Yb(t, h);
  let D = useMemo(() => ({
    ...O,
    x: O.x + t.x,
    y: O.y + t.y
  }), [O, t]);
  let F = useCallback((e, s, r, n) => {
    if (t) {
      let i = e - t.x;
      let l = s - t.y;
      let o = $$(t, {
        x: i,
        y: l - n / window.devicePixelRatio
      });
      Fullscreen.figjamInlineMenuPositionUpdate(o.x, o.y, r.height);
    }
    j({
      x: e + r.width / 2,
      y: s + r.height / 2
    });
    let i = iv(D, e, s, g);
    I !== i && N({
      type: "SET_POS_RELATIVE_TO_SELECTION",
      payload: i
    });
  }, [t, j, D, I, N, g]);
  let B = useCallback((e, t, s) => {
    switch (s) {
      case Positioning.ABOVE:
        return [Al(e, t), i ? tJ(e, t) : T1(e, t, P)];
      case Positioning.BELOW:
        return [Al(e, t), i ? tJ(e, t) : DH(e, t, P)];
      case Positioning.LEFT:
        return [Dl(e, t, 20), i ? tJ(e, t) : e.y];
      case Positioning.RIGHT:
        return [Yh(e, 20), i ? tJ(e, t) : e.y];
      default:
        throwTypeError(s);
    }
  }, [P, i]);
  let K = useCallback((e, t, s) => {
    let [r, n] = B(e, t, s);
    return _$$r.fromOriginAndSize(r, n, t.width, t.height);
  }, [B]);
  let G = useCallback((e, t, s, r, n) => !i && s === Positioning.ABOVE && r.top() > n.top() ? K(e, t, Positioning.BELOW) : !i && s === Positioning.BELOW && r.top() < n.top() ? K(e, t, Positioning.ABOVE) : s === Positioning.LEFT && r.left() > n.left() ? K(e, t, Positioning.RIGHT) : s === Positioning.RIGHT && r.left() < n.left() ? K(e, t, Positioning.LEFT) : r, [K, i]);
  let H = useCallback((e, s, r, n) => {
    let i = _$$r.fromOriginAndSize(t.x, t.y, t.width, t.height);
    let l = K(e, s, g);
    let a = R(l, i, n);
    let d = G(e, s, g, a, l);
    d === a || v || (a = R(d, i, n));
    return [a.left(), a.top()];
  }, [g, v, t.height, t.width, t.x, t.y, R, K, G]);
  let [V] = _$$A(ZT(O, t), 500);
  if (!V) return jsx(C_, {
    disableAnimation: S,
    ref: s,
    children: null
  });
  let U = "whiteboard" === M && b ? {
    transition: "transform 0.1s"
  } : {};
  U.WebkitUserSelect = "none";
  return jsx(lM, {
    frozen: b,
    offset: P,
    onMouseEnter: () => {
      C(!0);
      E.current && clearTimeout(E.current);
      E.current = null;
    },
    onMouseLeave: () => {
      E.current = setTimeout(() => C(!1), 100);
    },
    onPosition: F,
    positionXY: H,
    setSizeChanged: _,
    style: U,
    targetRect: D,
    zIndex: k,
    children: jsx("div", {
      ref: L,
      children: jsx(C_, {
        disableAnimation: S,
        ref: s,
        children: e
      })
    })
  });
}
export const k = $$_0;