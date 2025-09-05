import { jsx } from "react/jsx-runtime";
import { createContext, useMemo, createRef, useState, useRef, useCallback, useLayoutEffect, useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { J } from "../905/614223";
import o from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { wY } from "../figma_app/708845";
import { j } from "../figma_app/469468";
import { Vn } from "../figma_app/795674";
import { jD } from "../905/765855";
import { L } from "../figma_app/717083";
import { fRM } from "../figma_app/27776";
var l = o;
let g = parsePxNumber(fRM);
let $$f0 = createContext(!1);
export function $$E2({
  children: e,
  editorTheme: t
}) {
  return jsx("div", {
    className: "toolbelt_left_side--leftSideRow--yovV-",
    children: jsx(J, {
      brand: t,
      children: e
    })
  });
}
let y = .5 * Vn;
let b = .3 * Vn;
export function $$T1(e) {
  let t = useDispatch();
  let r = useMemo(() => e.rows.map(e => createRef()), [e.rows]);
  let s = r[e.activeRowIndex];
  let [o, d] = useState();
  let [p, m] = useState(!1);
  let E = useRef();
  let T = useRef();
  let I = useCallback(({
    width: t
  }) => {
    if (void 0 === o) {
      d(t);
      return;
    }
    m(!0);
    let r = document.getElementById(L);
    let n = r?.matches(":hover");
    let i = () => {
      d(t);
      setTimeout(() => {
        m(!1);
      }, y);
      e.onAnimationCompletion && setTimeout(e.onAnimationCompletion, y);
      n && r?.removeEventListener("mouseleave", i);
      E.current && (clearTimeout(E.current), E.current = void 0);
    };
    T.current && (r?.removeEventListener("mouseleave", T.current), T.current = void 0);
    n && (r?.addEventListener("mouseleave", i), T.current = i);
    clearTimeout(E.current);
    E.current = setTimeout(i, n ? 550 : 200);
  }, [e.onAnimationCompletion, o]);
  wY(s, I);
  let [S, v] = useState(!1);
  useLayoutEffect(() => {
    v(!0);
    setTimeout(() => {
      v(!1);
    }, b);
  }, [e.activeRowIndex]);
  let A = j();
  return (useEffect(() => {
    t(jD());
  }, [t, e.activeRowIndex]), o) ? jsx("div", {
    className: l()("toolbelt_left_side--leftSideCarouselContainer--8qu6Z", {
      "toolbelt_left_side--hideOverflowY--gGCIT": S
    }),
    style: {
      width: o,
      willChange: p ? "width" : "auto",
      transition: A ? "none" : "0.5s"
    },
    children: jsx("div", {
      className: "toolbelt_left_side--leftSideCarouselRows--SWcpz",
      style: {
        transform: `translateY(${-1 * g * e.activeRowIndex}px)`
      },
      children: e.rows.map((t, i) => {
        let a = !S && e.activeRowIndex !== i;
        return jsx("div", {
          ref: r[i],
          className: a ? "toolbelt_left_side--hiddenCarouselRow--F-A2S" : "toolbelt_left_side--visibleCarouselRow--INm4B",
          children: jsx($$f0.Provider, {
            value: a,
            children: t
          })
        }, i);
      })
    })
  }) : jsx("div", {
    ref: r[e.activeRowIndex],
    children: e.rows[e.activeRowIndex]
  });
}
export const sg = $$f0;
export const Q6 = $$T1;
export const kF = $$E2;