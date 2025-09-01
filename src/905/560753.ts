import { jsx } from "react/jsx-runtime";
import r from "classnames";
import { useCallback } from "react";
import { A as _$$A } from "../vendor/90566";
import { X } from "../figma_app/313269";
import { t as _$$t } from "../905/303541";
import { bD } from "../figma_app/45218";
import { A as _$$A2 } from "../905/794518";
import { J7 } from "../905/599844";
var a = r;
let d = function ({
  bounds: e,
  debounceMs: t,
  defaultValue: i,
  flushOnBlur: r,
  placeholder: a,
  onBlur: d,
  mountBehavior: c,
  toolbarOptions: u,
  hideToolbar: p,
  onKeyDown: m,
  onEnterKeyPressed: h,
  toolbarProps: g,
  ...f
}) {
  let _ = _$$A(f.onInputChange, t ?? 200);
  let A = useCallback(() => {
    r && _.flush();
    d?.();
  }, [_, r, d]);
  return jsx(X, {
    bounds: e,
    defaultValue: i,
    errorFallback: null,
    fallback: null,
    hideToolbar: p,
    mountBehavior: c,
    onBlur: A,
    onEnterKeyPressed: h,
    onInputChange: e => {
      _(e);
    },
    onKeyDown: m,
    placeholder: a,
    toolbarOptions: u,
    toolbarProps: g
  });
};
export function $$h0({
  defaultValue: e,
  onChange: t,
  resourceType: i,
  error: r
}) {
  let s = {
    [bD.PLUGIN]: _$$t("community.publishing.add_your_policy_for_the_usage_of_this.plugin"),
    [bD.WIDGET]: _$$t("community.publishing.add_your_policy_for_the_usage_of_this.widget"),
    [bD.HUB_FILE]: _$$t("community.publishing.add_your_policy_for_the_usage_of_this_resource")
  };
  return jsx(_$$A2, {
    label: _$$t("community.publishing.creator_policy"),
    error: r,
    children: jsx("div", {
      className: a()({
        [J7]: !!r
      }),
      children: jsx(d, {
        fallback: null,
        errorFallback: null,
        placeholder: s[i],
        defaultValue: e,
        onInputChange: t,
        toolbarProps: {
          "aria-label": _$$t("community.publishing.creator_policy")
        }
      })
    })
  });
}
export const A = $$h0;