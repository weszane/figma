import { jsx, jsxs } from "react/jsx-runtime";
import r from "classnames";
import { tx, t } from "../905/303541";
import { Pc } from "../905/372672";
import { A as _$$A } from "../905/794518";
import { wk, r9, aK } from "../905/599844";
var a = r;
export function $$c0(e) {
  let {
    resource,
    disabled
  } = e;
  let r = Pc();
  let c = resource?.creator || r;
  let u = r.id === c.id ? tx("community.publishing.payee_name_annotation_for_current_owner") : tx("community.publishing.payee_name_annotation");
  return jsx(_$$A, {
    label: t("community.publishing.payee_label"),
    disabled,
    children: jsxs("div", {
      className: a()(wk, {
        [r9]: disabled
      }),
      children: [c.handle, "\xa0", jsx("span", {
        className: disabled ? r9 : aK,
        children: u
      })]
    })
  });
}
export const A = $$c0;