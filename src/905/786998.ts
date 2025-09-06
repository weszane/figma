import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { K } from "../905/443068";
import { f } from "../905/335032";
import { x } from "../905/587214";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { jT } from "../figma_app/626177";
export function $$u0({
  value: e,
  onChange: t,
  maxCount: i
}) {
  let u = useCallback(e => {
    if ("" === e.target.value) {
      t(0);
      return;
    }
    let n = parseInt(e.target.value);
    isNaN(n) || n < 0 || t(Math.min(n, i || n));
  }, [t, i]);
  let p = useCallback(() => {
    t(e => e - 1);
  }, [t]);
  let m = useCallback(() => {
    t(e => e + 1);
  }, [t]);
  return jsxs("div", {
    className: _$$s.flex.itemsCenter.wFitContent.colorBorder.b1.bRadius5.$,
    children: [jsx(K, {
      "aria-label": getI18nString("billing_modals.decrement_aria_label"),
      disabled: e <= 0,
      onClick: p,
      htmlAttributes: {
        "data-testid": "counter-input-decrement"
      },
      children: jsx(f, {})
    }), jsx(jT, {
      dataTestId: "counter-input-text-input",
      className: "counter_input--input--GSL4b",
      value: e,
      onChange: u,
      onFocus: e => e.target.select()
    }), jsx(K, {
      "aria-label": getI18nString("billing_modals.increment_aria_label"),
      onClick: m,
      disabled: !!i && e >= i,
      htmlAttributes: {
        "data-testid": "counter-input-increment"
      },
      children: jsx(x, {})
    })]
  });
}
export const r = $$u0;