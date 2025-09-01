import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { tx } from "../905/303541";
import { Cg } from "../figma_app/471982";
import s from "classnames";
import { s as _$$s } from "../cssbuilder/589278";
import { VA } from "../905/941408";
var o = s;
function c({
  address: e,
  isSecondaryText: t = !1
}) {
  let i = e.line1 + (e.line2 ? `, ${e.line2}` : "");
  let r = e.city;
  for (let t of ["region", "postal_code"]) {
    let i = e[t];
    i && (r += `, ${i}`);
  }
  let a = o()(VA, _$$s.$$if(t, _$$s.colorTextSecondary, _$$s.colorText).$);
  return jsxs("div", {
    className: _$$s.flex.itemsStart.flexColumn.$,
    children: [jsx("div", {
      className: a,
      children: i
    }), jsx("div", {
      className: a,
      children: r
    }), jsx("div", {
      className: a,
      children: e.country
    })]
  });
}
export function $$u0({
  shippingAddress: e,
  vatGstId: t
}) {
  return jsxs(Fragment, {
    children: [!Cg(e) && jsx(c, {
      address: e
    }), t && tx("community.community_account_settings.vat_gst_id", {
      vatGstId: t
    })]
  });
}
export const C = $$u0;