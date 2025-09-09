import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { c2 } from "../905/382883";
import { useLatestRef } from "../figma_app/922077";
import { B } from "../905/714743";
import { Hj, W$ } from "../9410/534867";
import { ON } from "../figma_app/627977";
import { VU, D6 } from "../figma_app/575164";
import { A } from "../6828/70690";
export function $$p1({
  itemPath: e
}) {
  let t = useRef(null);
  let i = useRef(null);
  let l = useRef(null);
  let d = useRef(null);
  let [p, h] = useState("full");
  let m = useLatestRef(e);
  useLayoutEffect(() => {
    c2(e, m) || "full" === p || h("full");
    "full" === p && f();
  }, [m, e, p]);
  let f = () => {
    let e = i.current?.offsetWidth;
    let r = d.current?.offsetWidth;
    let n = l.current?.offsetWidth;
    let a = t.current?.scrollWidth;
    let s = t.current?.clientWidth;
    void 0 !== e && void 0 !== r && void 0 !== n && a && s && s < a && (e + r > s ? h("plugin") : h("path"));
  };
  if (1 === e.length) return jsx("span", {
    ref: d,
    children: e[0]
  });
  let g = e.slice(1, e.length - 1);
  let _ = jsx(B, {
    svg: A,
    className: VU,
    dataTestId: "rightChevron"
  });
  let x = jsxs("span", {
    ref: i,
    children: ["plugin" === p ? "..." : e[0], _]
  });
  let y = jsx("span", {
    ref: l,
    children: "plugin" !== p && jsx(Fragment, {
      children: "path" === p ? jsxs(Fragment, {
        children: ["...", _]
      }) : g.map((e, t) => jsxs("span", {
        children: [e, " ", _]
      }, t))
    })
  });
  return jsxs("div", {
    ref: t,
    className: D6,
    ...("full" !== p ? {
      "data-tooltip-type": "text",
      "data-tooltip": e.join(" > "),
      "data-tooltip-show-above": !0
    } : {}),
    children: [x, y, jsx("span", {
      ref: d,
      children: e[e.length - 1]
    })]
  });
}
export function $$h0({
  runPluginArgs: e,
  itemParameterArgs: t
}) {
  let [i, a] = useState(!1);
  let s = useRef(null);
  useEffect(() => {
    let e = s.current;
    e && e.offsetWidth < e.scrollWidth && !i && a(!0);
  }, [i]);
  let o = e.parameterValues;
  if (o) {
    let e = t.parameters;
    let n = Hj(e, o);
    return jsxs("div", {
      className: ON,
      ref: s,
      "data-testid": "parameter-display",
      children: [jsx(W$, {
        value: i ? void 0 : t.displayName
      }, "plugin-name"), n]
    });
  }
  return jsx(Fragment, {});
}
export const _ = $$h0;
export const h = $$p1;