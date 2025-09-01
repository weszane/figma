import { jsx } from "react/jsx-runtime";
import { memo, useRef, useState, useLayoutEffect, useEffect } from "react";
import { I, c } from "../905/468067";
export let $$s2 = memo(function ({
  text: e,
  className: t,
  tooltipPropsWhenTruncated: r,
  onTruncationChange: s,
  multiline: o
}) {
  let l = useRef(null);
  let d = function ({
    multiline: e,
    text: t,
    textRef: r,
    disabled: n
  }) {
    let [a, s] = useState(!1);
    useLayoutEffect(() => {
      !n && r.current && (e ? s(r.current.offsetHeight < r.current.scrollHeight) : s(r.current.offsetWidth < r.current.scrollWidth));
    }, [n, t, e, r]);
    return a;
  }({
    multiline: o,
    text: e,
    textRef: l
  });
  useEffect(() => {
    s?.(d);
  }, [s, d]);
  return jsx("span", {
    className: `${I} ${t ?? ""} ${o ? c : ""}`,
    ref: l,
    ...(d ? r : {}),
    children: e
  });
});
export function $$o0({
  multiline: e,
  text: t,
  textRef: r,
  disabled: n
}) {
  let [a, s] = useState(!1);
  useEffect(() => {
    let i = $$l1({
      multiline: e,
      text: t,
      textRef: r,
      disabled: n
    });
    void 0 !== i && s(i);
  }, [n, t, e, r]);
  return a;
}
export function $$l1({
  multiline: e,
  textRef: t,
  disabled: r
}) {
  if (!r && t.current) return e ? t.current.offsetHeight < t.current.scrollHeight : t.current.offsetWidth < t.current.scrollWidth;
}
export const NG = $$o0;
export const _C = $$l1;
export const ph = $$s2;