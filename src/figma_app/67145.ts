import { jsx, Fragment } from "react/jsx-runtime";
import { useState, useMemo, useLayoutEffect, useCallback, useRef } from "react";
import a from "classnames";
import { c$ } from "../905/794875";
import { D, Z } from "../905/231639";
var s = a;
export function $$d1({
  setMaxWidth: e,
  render: t
}) {
  let [r, a] = useState(new Map());
  let s = useMemo(() => r.size ? Math.max(...r.values()) : void 0, [r]);
  useLayoutEffect(() => e(s), [s, e]);
  let o = useCallback((e, t) => a(r => {
    if (r.get(e) === t) return r;
    let n = new Map(r);
    "number" == typeof t ? n.set(e, t) : n.$$delete(e);
    return n;
  }), []);
  return jsx(Fragment, {
    children: t({
      reportWidthOfValue: o
    })
  });
}
export function $$c0(e) {
  return jsx($$d1, {
    setMaxWidth: e.setMaxWidth,
    render: ({
      reportWidthOfValue: t
    }) => jsx(Fragment, {
      children: e.options.map((r, i) => jsx(u, {
        reportWidth: t,
        value: r,
        optionProps: {
          fullWidth: !0,
          formattedValue: e.formatOption(r),
          selected: !0,
          icon: e.getIcon(r)
        }
      }, i))
    })
  });
}
function u({
  reportWidth: e,
  value: t,
  optionProps: r
}) {
  let a = useRef(null);
  useLayoutEffect(() => {
    let r = a.current;
    if (r) {
      let n = () => {
        e(t, r.getBoundingClientRect().width);
      };
      n();
      let i = new ResizeObserver(n);
      i.observe(r);
      return () => {
        i.disconnect();
        e(t, void 0);
      };
    }
  }, [t, e, r.svg]);
  return jsx("div", {
    className: D,
    "aria-hidden": !0,
    children: jsx(c$, {
      ...r,
      additionalStylesClassName: s()(r.additionalStylesClassName, Z),
      forwardedRef: a
    })
  });
}
export const Q = $$c0;
export const r = $$d1;