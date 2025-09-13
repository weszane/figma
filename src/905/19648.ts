import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useMemo, useRef, useImperativeHandle } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonPrimitive } from "../905/632989";
import o from "classnames";
import { V } from "../figma_app/312987";
import { getI18nString } from "../905/303541";
import { aZ } from "../figma_app/405906";
import { U } from "../905/331038";
import { w as _$$w } from "../905/113805";
import { Zc, Lz } from "../905/497882";
import { j } from "../905/834956";
import { A as _$$A } from "../905/567946";
var l = o;
function _(e) {
  if (e && "exception" !== e.type) switch (e.key) {
    case "MISSING_CATEGORY":
      return getI18nString("community.publishing.category_cant_be_empty");
    case "CATEGORY_WITH_SUBCATEGORIES":
      return getI18nString("community.publishing.category_sub_cant_be_empty");
  }
}
let A = "RESOURCE_PUBLISHING_CATEGORY_SELECT_DROPDOWN";
function y(e, t) {
  return {
    displayText: aZ(e),
    isChecked: t?.id === e.id || t?.parent_category_id === e.id,
    args: {
      category: e
    }
  };
}
function b(e, t) {
  return "Other" === e.title ? 1 : "Other" === t.title ? -1 : 0;
}
export let $$v0 = forwardRef(function ({
  categoryFieldManager: e,
  touched: t,
  onTouched: i
}, o) {
  let v = useDispatch();
  let {
    setValue,
    validCategories
  } = e;
  let x = Zc(e);
  let S = _$$w(e, !t);
  let w = U(S, _);
  let C = Lz(e, void 0);
  let T = useSelector(e => e.dropdownShown?.type === A);
  let k = useSelector(e => e.dropdownShown?.data.targetRect);
  let R = useMemo(() => validCategories.filter(e => null === e.parent_category_id).sort(b).map(e => {
    let t = y(e, C);
    let i = validCategories.filter(t => t.parent_category_id === e.id).sort(b).map(e => y(e, C));
    return i.length > 0 ? {
      ...t,
      children: i
    } : t;
  }), [C, validCategories]);
  let N = useRef(null);
  useImperativeHandle(o, () => ({
    focus: e => {
      N.current?.focus(e);
    }
  }), []);
  return jsx(_$$A, {
    label: getI18nString("community.publishing.category"),
    error: w,
    required: !0,
    children: jsxs(V, {
      className: l()("category_select--dropdownSelector--7houN", {
        "category_select--error--jHste": !!w
      }),
      type: A,
      showingDropdown: T,
      dispatch: v,
      isMultilevelDropdown: !0,
      isDisabled: !x,
      children: [jsx(ButtonPrimitive, {
        ref: N,
        className: "category_select--selectedItem--1HVpe",
        "data-testid": "resource-publishing-category-select-dropdown-toggle",
        disabled: !x,
        children: C ? aZ(C) : jsx("span", {
          className: "category_select--selectedItemPlaceholder--Q5Gcm",
          children: getI18nString("community.publishing.select_a_category")
        })
      }), T && k && jsx(j, {
        showPoint: !1,
        lean: "right",
        leanPadding: 0,
        items: R,
        parentRect: k,
        onSelectItem: e => {
          i?.();
          setValue?.(e.args.category);
          N.current?.focus();
        },
        dispatch: v,
        dataTestId: "resource-publishing-category-select-dropdown"
      })]
    })
  });
});
export const P = $$v0;