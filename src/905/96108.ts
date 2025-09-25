import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { memo, useRef } from "react";
import a from "classnames";
import { conditionalWrapper } from "../905/579635";
import { i as _$$i, m as _$$m } from "../905/186077";
var s = a;
export let $$d0 = memo(function ({
  text: e,
  className: t,
  lastClassName: i,
  showTooltip: a = _$$i.WHEN_TRUNCATED,
  truncate: d = "end"
}) {
  let c;
  let u = e.trim();
  let p = u.lastIndexOf("/");
  let m = u.lastIndexOf(" ");
  c = p > 0 ? p : m > 0 ? m : Math.round(.75 * u.length);
  let h = u.substring(0, c);
  let g = u.substring(c);
  let f = useRef(null);
  let _ = _$$m(e, a, f);
  return jsxs("div", {
    className: s()("segmented_truncated_text--container--UfrDb", t),
    "aria-label": e,
    ..._,
    children: [h.length > 0 && jsx("div", {
      ref: f,
      className: s()({
        "segmented_truncated_text--firstTruncateStart--GYFkA segmented_truncated_text--_first--T44MY": "start" === d,
        "segmented_truncated_text--firstTruncateEnd--NIilH segmented_truncated_text--_first--T44MY": "end" === d
      }),
      children: jsx(conditionalWrapper, {
        condition: "start" === d,
        wrapper: e => jsx("span", {
          className: "segmented_truncated_text--directionFix--tjJBa",
          children: e
        }),
        children: jsx(Fragment, {
          children: h
        })
      })
    }), jsx("div", {
      className: s()("segmented_truncated_text--last--a3vi9", i),
      children: g
    })]
  });
});
export const o = $$d0;