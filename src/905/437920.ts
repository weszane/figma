import { jsx, jsxs } from "react/jsx-runtime";
import r from "classnames";
import { renderI18nText, getI18nString } from "../905/303541";
import { selectUser } from "../905/372672";
import { A as _$$A } from "../905/794518";
import { wk, r9, aK } from "../905/599844";
var a = r;
export function $$c0(e) {
  let {
    resource,
    disabled
  } = e;
  let r = selectUser();
  let c = resource?.creator || r;
  let u = r.id === c.id ? renderI18nText("community.publishing.payee_name_annotation_for_current_owner") : renderI18nText("community.publishing.payee_name_annotation");
  return jsx(_$$A, {
    label: getI18nString("community.publishing.payee_label"),
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