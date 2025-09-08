import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useMemo, useLayoutEffect, useCallback } from "react";
import { E } from "../905/632989";
import s from "classnames";
import { At } from "../905/973142";
import { getI18nString, renderI18nText } from "../905/303541";
import { isInvalidValue } from "../905/216495";
var o = s;
export function $$u0({
  description: e,
  containerClassName: t,
  onExpand: i,
  dataTestId: s
}) {
  let [u, p] = useState(!0);
  let m = useRef(null);
  let h = useMemo(() => !e || isInvalidValue(e) ? "" : At(e), [e]);
  let g = useRef(void 0);
  useLayoutEffect(() => {
    let e = g.current;
    g.current = h;
    m.current && e !== h && p(m.current.scrollHeight > m.current.clientHeight);
  }, [h]);
  let f = useCallback(() => {
    i?.();
    p(!1);
  }, [i]);
  return h ? jsxs("div", {
    className: t,
    "data-testid": s,
    children: [jsx("div", {
      ref: m,
      className: o()("description--description--wc0EY ellipsis--ellipsisAfter2Lines--Qo-Xh ellipsis--_ellipsisAfterNLines--LzI7k", u ? "description--collapsed--3B1Bt" : "description--expanded--qZ3te"),
      children: h
    }), u && jsx(E, {
      "aria-label": getI18nString("design_systems.instance_panel.show_more"),
      onClick: f,
      className: "description--seeMore--8DFac blue_link--blueLink--9rlnd",
      children: renderI18nText("design_systems.instance_panel.show_more")
    })]
  }) : null;
}
export const X = $$u0;