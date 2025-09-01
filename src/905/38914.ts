import { jsxs, jsx } from "react/jsx-runtime";
import { A as _$$A } from "../vendor/723372";
import { Jn, vo } from "../figma_app/272243";
import { bL as _$$bL } from "../905/437088";
import { Vg, W_ } from "../905/893109";
import { D, U } from "../905/270904";
import { P } from "../905/536340";
let d = "screen and (max-height: 20rem)";
let c = D(`screen and (max-width: 32rem), ${d}`);
let u = D(`screen and (max-width: 22rem), ${d}`);
let p = D(d);
let h = {
  "fit-content": void 0,
  sm: "modal__sm__izkk-",
  md: "modal__md__rrfZR",
  lg: "modal__lg__wd2Q-"
};
export function $$g1({
  children: e,
  width: t,
  height: i = "fixed",
  overrideCloseButtonColor: d,
  htmlAttributes: m,
  ...g
}) {
  var f;
  let _;
  let A;
  f = "number" == typeof t || "fit-content" === t ? "lg" : t;
  let y = U(function (e) {
    switch (e) {
      case "sm":
        return p;
      case "md":
        return u;
      case "lg":
        return c;
    }
  }(f));
  "number" == typeof t ? A = {
    [Vg("--fpl-modal-width")]: W_(t)
  } : _ = h[t];
  let b = g.manager.preventUserClose;
  return jsxs(_$$bL, {
    ...g,
    style: A,
    htmlAttributes: {
      ...m,
      "data-modal-fullscreen": y || void 0
    },
    theme: {
      root: _$$A("modal__root__37yc9", _, {
        modal__topAligned__Gtw5q: "dynamic" === i,
        modal__borderedFullscreen__3m9q3: "fullscreen" === i
      }),
      contents: _$$A("modal__contents__sJsR3", {
        modal__full__KNiPx: "full" === i
      }),
      backdrop: "modal__backdrop__PcWm1"
    },
    children: [e, !b && jsx(Jn, {
      overrideColor: d
    })]
  });
}
export function $$f0({
  children: e,
  htmlAttributes: t,
  onSubmit: i,
  ...r
}) {
  return jsx("form", {
    ...t,
    className: P,
    onSubmit: e => {
      i(e);
      e.preventDefault();
    },
    ...r,
    children: jsx(vo, {
      ...r,
      children: e
    })
  });
}
$$g1.displayName = "Modal.Root";
$$f0.displayName = "Modal.FormContents";
export const Rq = $$f0;
export const bL = $$g1;