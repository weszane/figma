import { jsxs, jsx } from "react/jsx-runtime";
import { isValidElement } from "react";
import { K } from "../905/443068";
import { f as _$$f } from "../905/54715";
import o from "classnames";
import { B } from "../905/714743";
import { t as _$$t } from "../905/303541";
import { sx } from "../905/941192";
import { ZI, z3, $e, hh, pj, Ij, G, YE } from "../905/660757";
import { A } from "../5724/600086";
var l = o;
var $$h0 = (e => (e[e.INFORMATION = 0] = "INFORMATION", e[e.ERROR = 1] = "ERROR", e[e.WARNING = 2] = "WARNING", e[e.FIGJAM = 3] = "FIGJAM", e[e.PLAIN = 4] = "PLAIN", e))($$h0 || {});
export function $$m1({
  color: e,
  icon: t,
  fullWidth: r,
  rounded: o = !0,
  text: h,
  dataTestId: m,
  padding: g,
  onDismiss: f
}) {
  return jsxs("div", {
    "data-testid": m,
    style: sx.$$if(!o, {
      borderRadius: "0px"
    }).$$if(void 0 !== g, {
      padding: g + "px"
    }).$,
    className: l()({
      [ZI]: 0 === e,
      [z3]: 1 === e,
      [$e]: 2 === e,
      [hh]: 3 === e,
      [pj]: 4 === e,
      [Ij]: r
    }),
    children: [t && isValidElement(t) ? jsx("div", {
      className: G,
      children: t
    }) : jsx(B, {
      autosize: !0,
      className: G,
      width: "16px",
      height: "12px",
      svg: t ?? A
    }), jsx("p", {
      children: h
    }), f && jsx("div", {
      className: YE,
      children: jsx(K, {
        "aria-label": _$$t("common.dismiss"),
        onClick: f,
        children: jsx(_$$f, {})
      })
    })]
  });
}
export const S = $$h0;
export const _ = $$m1;