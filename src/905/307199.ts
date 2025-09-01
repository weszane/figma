import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useRef, useState, useEffect, useLayoutEffect, createElement } from "react";
import { wY } from "../figma_app/708845";
let s = "center_truncated_text--fixedSize--7beVW";
let $$o0 = memo(function ({
  text: e,
  className: t,
  maxWidth: i,
  postfix: o,
  postElement: l,
  tooltipPropsWhenTruncated: d,
  onTruncationChange: c,
  element: u,
  id: p
}) {
  let m = useRef(null);
  let h = useRef(null);
  let g = useRef(null);
  let f = useRef(null);
  let _ = wY(m);
  let [A, y] = useState(!1);
  useEffect(() => {
    c?.(A);
  }, [c, A]);
  useLayoutEffect(() => {
    if (h.current && _) {
      let e = g.current?.getBoundingClientRect()?.width ?? 0;
      let t = f.current?.getBoundingClientRect()?.width ?? 0;
      y(h.current.scrollWidth > Math.ceil(_.width - e - t));
    }
  }, [e, _]);
  let b = i ? `${i}px` : "100%";
  return jsx("div", {
    ref: m,
    style: {
      width: b
    },
    className: `${t} center_truncated_text--truncateContainer--N-24F`,
    ...(A ? d : {}),
    children: createElement(u || "p", {
      className: "center_truncated_text--truncateGroup--Fw18Y",
      id: p
    }, [jsxs(Fragment, {
      children: [jsx("span", {
        ref: h,
        className: l ? "center_truncated_text--truncateLeftWithPostElem--a-9Fx" : "center_truncated_text--truncateLeft--zdylN",
        children: e
      }), A && jsxs("span", {
        className: "center_truncated_text--truncateRight--YK15u",
        "aria-hidden": "true",
        children: ["\u200B", jsx("span", {
          className: "center_truncated_text--truncateRightContent--v1ra4",
          children: e
        })]
      }), o && jsx("span", {
        ref: g,
        className: s,
        children: o
      }), l && jsx("span", {
        ref: f,
        className: s,
        children: l
      })]
    })])
  });
});
export const R = $$o0;