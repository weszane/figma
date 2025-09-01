import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { createPortal } from "../vendor/944059";
import { d4 } from "../vendor/514228";
import { parsePxInt } from "../figma_app/783094";
import { wY, cU } from "../figma_app/708845";
import { A as _$$A } from "../905/638715";
import { Wv, IA } from "../905/291714";
import { T1, DH, Gu, nm, Al, Mj } from "../figma_app/90441";
import { tui, xEX } from "../figma_app/27776";
let m = parsePxInt(tui);
let h = parsePxInt(xEX);
export function $$g0({
  target: e,
  renderPopoverContents: t,
  isOpen: i,
  onClose: o,
  positionX: p,
  positionY: g,
  responsivePositionY: f,
  className: _,
  portalNode: A,
  closeOnEsc: y = !1,
  useDropdownZIndex: b = !1
}) {
  let {
    dispatch
  } = Wv();
  let I = useRef(null);
  let E = useRef(null);
  let x = useRef(null);
  let S = wY(I) ?? cU;
  let [w, C] = useState({
    x: 0,
    y: 0,
    ...S
  });
  let [T, k] = useState("top");
  let [R, N] = useState("center");
  let P = d4(({
    mirror: {
      appModel: e
    }
  }) => e.showUi);
  let O = d4((e) => e.downtime.status === _$$A.Ongoing || e.downtime.status === _$$A.Imminent || e.showingDowntimeBanner);
  let [D, L] = useState(!1);
  let F = g ?? ("top" === T ? T1 : DH);
  f && (F = "top" === T ? f.aboveTargetPositionY : f.belowTargetPositionY);
  let M = p ?? ("left" === R ? Gu : "right" === R ? nm : Al);
  let j = (P ? m : 0) + (O ? h : 0) + 10;
  useEffect(() => (k("top"), N("center"), L(!i), dispatch({
    type: "set popover open",
    payload: i
  }), () => dispatch({
    type: "set popover open",
    payload: !1
  })), [i, dispatch]);
  useLayoutEffect(() => {
    if (I.current) {
      let e = I.current;
      if (A) {
        let t = A.getBoundingClientRect();
        let i = e.getBoundingClientRect();
        C({
          x: i.x - t.x,
          y: i.y - t.y,
          ...S
        });
      } else C({
        x: e.offsetLeft,
        y: e.offsetTop,
        ...S
      });
    }
  }, [S, I, i, A]);
  useLayoutEffect(() => {
    if (!window.IntersectionObserver) {
      requestAnimationFrame(() => L(!0));
      return;
    }
    let e = new IntersectionObserver(([e]) => {
      if (!e.rootBounds) {
        requestAnimationFrame(() => L(!0));
        return;
      }
      e.boundingClientRect.y < e.rootBounds.top ? k("bottom") : e.boundingClientRect.y + e.boundingClientRect.height > e.rootBounds.bottom && k("top");
      e.boundingClientRect.x < e.rootBounds.left ? N((e) => "right" === e ? "center" : "left") : e.boundingClientRect.x + e.boundingClientRect.width > e.rootBounds.right && N((e) => "left" === e ? "center" : "right");
      i && requestAnimationFrame(() => {
        L(!0);
      });
    }, {
      rootMargin: `-${j}px 0px`,
      threshold: [0, 1]
    });
    setTimeout(() => {
      E.current && e.observe(E.current);
    }, 60);
    return () => {
      e.disconnect();
    };
  }, [E, i, k, I, j]);
  let U = jsx(Mj, {
    targetRect: w,
    targetRef: x,
    onClose: o,
    style: {
      top: 0,
      left: 0,
      visibility: D ? "visible" : "hidden"
    },
    positionX: M,
    positionY: F,
    childRef: (e) => {
      E.current = e;
    },
    closeOnEsc: y,
    useDropdownZIndex: b,
    children: jsx(IA, {
      children: t(T)
    })
  });
  return jsxs("div", {
    ref: I,
    "data-popover-wrapper": !0,
    className: _,
    children: [jsx("div", {
      ref: x,
      children: e
    }), i ? A ? createPortal(U, A) : U : null]
  });
}
export const A = $$g0;