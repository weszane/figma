import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useRef, useId, useImperativeHandle } from "react";
import { throwTypeError } from "../figma_app/465776";
import { ScreenReaderOnly } from "../905/172252";
import { EventShield } from "../905/821217";
import l from "classnames";
import { BigTextInputForwardRef } from "../figma_app/637027";
import { getI18nString } from "../905/303541";
import { findFirstResult } from "../905/331038";
import { getValidationErrors } from "../905/113805";
import { getFieldValueOrDefault, canSetFieldValue } from "../905/497882";
import { EM } from "../905/175462";
import { trimOrEmpty } from "../figma_app/740025";
import { FieldContainer } from "../905/567946";
import { Dq, _Z, z3 } from "../905/235660";
var d = l;
let y = e => {
  if (e && "validation" === e.type) {
    let t = e.key;
    switch (t) {
      case "NAME_EMPTY":
        return getI18nString("community.publishing.name_must_not_be_empty");
      case "NAME_TOO_SHORT":
        return getI18nString("community.publishing.name_must_be_n_characters_long", {
          minLength: e.data.minLength
        });
      case "NAME_TOO_LONG":
        return getI18nString("community.publishing.name_must_be_at_most_n_characters_long", {
          maxLength: e.data.maxLength
        });
      default:
        return throwTypeError(t);
    }
  }
};
let $$b0 = forwardRef(function ({
  nameField: e,
  touched: t,
  onTouched: i
}, a) {
  let l = useRef(null);
  let b = getValidationErrors(e, !t);
  let v = findFirstResult(b, y);
  let I = trimOrEmpty(getFieldValueOrDefault(e, "")).length;
  let E = useId();
  let x = `${E}-input`;
  let S = `${E}-character-count`;
  let w = `${E}-error`;
  useImperativeHandle(a, () => ({
    focus: e => {
      l.current?.focus(e);
    }
  }), []);
  return jsx(FieldContainer, {
    label: getI18nString("community.general.name"),
    labelHtmlFor: x,
    afterLabelContent: jsxs("div", {
      id: S,
      className: Dq,
      "aria-live": "polite",
      "aria-atomic": !0,
      children: [jsx("span", {
        "aria-hidden": !0,
        children: `${I}/${EM}`
      }), jsx(ScreenReaderOnly, {
        children: getI18nString("community.publishing.character_count_status", {
          currentCount: I,
          maxCount: EM
        })
      })]
    }),
    error: v,
    errorId: w,
    required: !0,
    children: jsx(EventShield, {
      display: "contents",
      eventListeners: ["onKeyDown"],
      children: jsx(BigTextInputForwardRef, {
        ref: l,
        "aria-describedby": S,
        "aria-errormessage": v ? w : void 0,
        "aria-invalid": !!v,
        autoFocus: !0,
        className: d()(_Z, {
          [z3]: !!v
        }),
        dataTestId: "resource-publishing-name-input",
        disabled: !canSetFieldValue(e),
        id: x,
        onChange: t => {
          i?.();
          e.setValue?.(t.currentTarget.value);
        },
        value: getFieldValueOrDefault(e, "")
      })
    })
  });
});
export const A = $$b0;