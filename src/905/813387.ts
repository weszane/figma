import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useRef, useCallback, useId, useImperativeHandle } from "react";
import { throwTypeError } from "../figma_app/465776";
import { o as _$$o } from "../905/821217";
import { E as _$$E } from "../905/172252";
import { Y } from "../905/246212";
import d from "classnames";
import { _ as _$$_ } from "../905/142361";
import { X } from "../figma_app/313269";
import { getI18nString } from "../905/303541";
import { U } from "../905/331038";
import { w as _$$w } from "../905/113805";
import { Lz } from "../905/497882";
import { A as _$$A } from "../905/567946";
import { M4, z3 } from "../905/235660";
var c = d;
let y = e => {
  if (e && "validation" === e.type) switch (e.key) {
    case "DESCRIPTION_EMPTY":
      return getI18nString("community.publishing.description_cant_be_empty");
    case "DESCRIPTION_TOO_LONG":
      return getI18nString("community.publishing.description_must_be_at_most_n_characters_long", {
        maxLength: e.data.maxLength
      });
    default:
      return throwTypeError(e);
  }
};
let $$b0 = forwardRef(function ({
  descriptionField: e,
  publishScopeField: t,
  touched: i,
  onTouched: a
}, d) {
  let b = useRef(null);
  let v = _$$w(e, !i);
  let I = U(v, y);
  let E = Lz(e, "");
  let x = useCallback(t => {
    a?.();
    e.setValue?.(t);
  }, [e, a]);
  let S = t ? getI18nString("community.publishing.enter_a_brief_descrption_of_templates") : getI18nString("community.publishing.describe_your_file");
  let w = useId();
  let C = `${w}-textarea`;
  let T = `${w}-error`;
  useImperativeHandle(d, () => ({
    focus: e => {
      let t = b.current?.querySelector(".ql-editor");
      t?.focus(e);
    }
  }), []);
  let k = useRef(E);
  return jsx(_$$A, {
    label: getI18nString("community.publishing.description"),
    labelHtmlFor: C,
    error: I,
    errorId: T,
    required: e.deps.valueRequired,
    children: jsxs(_$$o, {
      display: "contents",
      eventListeners: ["onKeyDown"],
      children: [jsx("div", {
        ref: b,
        className: c()(M4, {
          [z3]: !!I
        }),
        "data-testid": "resource-publishing-description-input-container",
        "aria-hidden": !0,
        children: jsx(X, {
          fallback: null,
          errorFallback: null,
          placeholder: S,
          toolbarProps: {
            "aria-label": getI18nString("community.publishing.description")
          },
          value: E,
          onInputChange: x,
          toolbarOptions: [_$$_.Bold, _$$_.Italic, _$$_.Strikethrough, _$$_.BulletedList, _$$_.OrderedList, _$$_.Link, _$$_.Code, _$$_.CodeBlock]
        })
      }), jsx(_$$E, {
        children: jsx(Y, {
          id: C,
          placeholder: S,
          value: k.current,
          onChange: e => {
            k.current = e;
            x(e);
          },
          "aria-describedby": I ? T : void 0,
          "aria-invalid": !!I
        })
      })]
    })
  });
});
export const A = $$b0;