import { jsx } from "react/jsx-runtime";
import r from "classnames";
import { BigTextInputForwardRef } from "../figma_app/637027";
import { getI18nString } from "../905/303541";
import { MAX_IMAGE_DIMENSION } from "../figma_app/740025";
import { A as _$$A } from "../905/794518";
import { xe, e0 } from "../905/599844";
var a = r;
export function $$u0({
  value: e,
  onChange: t,
  error: i,
  autoFocus: r = !1,
  disabled: u = !1
}) {
  return jsx(_$$A, {
    label: getI18nString("community.general.name"),
    error: i,
    required: !0,
    children: jsx(BigTextInputForwardRef, {
      maxLength: MAX_IMAGE_DIMENSION,
      className: a()(xe, {
        [e0]: !!i
      }),
      onChange: t,
      value: e,
      spellCheck: !1,
      autoFocus: r,
      dataTestId: "publish-modal-name",
      disabled: u
    })
  });
}
export const A = $$u0;