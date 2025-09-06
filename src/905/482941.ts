import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useImperativeHandle } from "react";
import { throwTypeError } from "../figma_app/465776";
import { o as _$$o } from "../905/821217";
import o from "classnames";
import { ks } from "../figma_app/637027";
import { getI18nString } from "../905/303541";
import { U } from "../905/331038";
import { w } from "../905/113805";
import { Lz, Zc } from "../905/497882";
import { Bs } from "../905/772769";
import { A as _$$A } from "../905/567946";
import { _Z, z3 } from "../905/235660";
var l = o;
let _ = e => {
  if (e && "validation" === e.type) {
    let t = e.key;
    switch (t) {
      case "SUPPORT_CONTACT_MISSING":
        return getI18nString("community.publishing.support_contact_must_not_be_empty");
      case "INVALID_SUPPORT_CONTACT":
        return getI18nString("community.publishing.support_contact_must_be_a_valid_email_or_url");
      case "SUPPORT_CONTACT_TOO_LONG":
        return getI18nString("community.publishing.support_contact_must_be_at_most_n_characters_long", {
          maxLength: e.data.maxLength
        });
      default:
        return throwTypeError(t);
    }
  }
};
let $$A0 = forwardRef(function ({
  priceField: e,
  supportContactField: t,
  touched: i,
  onTouched: a
}, o) {
  let A = w(t, !i);
  let y = U(A, _);
  let b = useRef(null);
  useImperativeHandle(o, () => ({
    focus: e => {
      b.current?.focus(e);
    }
  }), []);
  return jsx(_$$A, {
    label: getI18nString("community.publishing.support_contact"),
    error: y,
    required: Bs(t.deps.valueRequired, e),
    children: jsx(_$$o, {
      display: "contents",
      eventListeners: ["onKeyDown"],
      children: jsx(ks, {
        ref: b,
        className: l()(_Z, {
          [z3]: !!y
        }),
        onChange: e => {
          a?.();
          t.setValue?.(e.currentTarget.value);
        },
        value: Lz(t, void 0) ?? "",
        placeholder: getI18nString("community.publishing.email_or_website_where_users_can_contact_you"),
        disabled: !Zc(t)
      })
    })
  });
});
export const a = $$A0;