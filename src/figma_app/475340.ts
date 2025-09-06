import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { throwTypeError } from "../figma_app/465776";
import s from "classnames";
import { getFalseValue } from "../figma_app/897289";
import { s as _$$s } from "../cssbuilder/589278";
import { X } from "../905/538562";
var o = s;
export function $$u0({
  backgroundColor: e = "default",
  children: t,
  loaded: r,
  loadingElementId: s,
  loadingElementClassName: u,
  delay: p = 0
}) {
  let _ = useRef(null);
  let h = useRef(null);
  useEffect(() => {
    if (_.current && !h.current && !getFalseValue()) {
      let e = document.getElementById(s);
      h.current = e.cloneNode(!0) ?? null;
      _.current.appendChild(h.current);
    }
  }, [s, _]);
  let m = {
    animationDelay: `${p}ms`,
    backgroundColor: function (e) {
      if ("default" === e) return "var(--color-bg)";
      throwTypeError(e);
    }(e)
  };
  return jsxs(Fragment, {
    children: [r && t, jsx("div", {
      ref: _,
      className: o()(u, _$$s.eventsNone.absolute.top0.left0.right0.bottom0.overflowHidden.opacity1.$, {
        [X]: r
      }),
      style: m
    })]
  });
}
export function $$p1({
  loaded: e,
  loadingSkeletonElement: t,
  showElementBeforeLoaded: r,
  children: a
}) {
  let s = useRef(e);
  return jsxs("div", {
    className: _$$s.grid.$,
    children: [(e || r) && jsx("div", {
      className: o()(_$$s.gridRowEnd1.gridColumnEnd1.$),
      children: a
    }), jsx("div", {
      className: o()(_$$s.eventsNone.gridRowEnd1.gridColumnEnd1.overflowHidden.$, {
        [X]: e,
        [_$$s.opacity1.$]: !s.current
      }),
      children: t
    })]
  });
}
export const A = $$u0;
export const x = $$p1;