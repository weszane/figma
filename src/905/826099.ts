import { jsx } from "react/jsx-runtime";
import r from "classnames";
import { BigTextInputForwardRef } from "../figma_app/637027";
import { getI18nString } from "../905/303541";
import { Tm } from "../905/772769";
import { A as _$$A } from "../905/794518";
import { xe, e0 } from "../905/599844";
var a = r;
export function $$u0({
  value: e,
  onChange: t,
  error: i,
  required: r
}) {
  return jsx(_$$A, {
    label: getI18nString("community.publishing.support_contact"),
    error: i,
    required: r,
    children: jsx(BigTextInputForwardRef, {
      maxLength: Tm,
      className: a()(xe, {
        [e0]: !!i
      }),
      onChange: t,
      value: e,
      spellCheck: !1,
      placeholder: getI18nString("community.seller.email_where_users_can_contact_you")
    })
  });
}
export const A = $$u0;