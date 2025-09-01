import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A as _$$A } from "../vendor/723372";
import { bL, Q6, bR, zi } from "../905/55068";
import { Lh } from "../figma_app/415899";
export let $$l0 = forwardRef(({
  style: e,
  rangeAnchor: t,
  mixed: i,
  ...r
}, l) => {
  let d = r.value !== r.defaultValue;
  let c = Lh("mixed");
  return jsxs(bL, {
    ...r,
    ref: l,
    className: "slider__root__9tITq",
    style: e,
    valueText: i ? c : void 0,
    "data-range": null != t || void 0,
    "data-mixed": i || void 0,
    children: [null != t && jsx(Q6, {
      className: "slider__range__2uem6",
      start: t,
      end: r.value
    }), r.hints?.map((e, t) => jsx(bR, {
      className: _$$A("slider__dot__sggOO", {
        slider__main__Q2Z7m: e === r.defaultValue
      }),
      value: e
    }, t)), jsx(zi, {
      className: _$$A("slider__thumb__621tr", {
        "slider__modified__7Bsu-": d
      })
    })]
  });
});
$$l0.displayName = "Slider";
export const A = $$l0;