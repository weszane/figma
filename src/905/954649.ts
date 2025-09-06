import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { K as _$$K } from "../905/443068";
import { f as _$$f } from "../905/54715";
import { L } from "../905/408237";
import { ne } from "../figma_app/563413";
import { getI18nString } from "../905/303541";
export let $$c0 = forwardRef((e, t) => {
  let {
    searchInputRef,
    onMouseDown,
    onMouseUp,
    onFocus,
    onBlur,
    onClick,
    onSearchKeyDown,
    onSearchChange
  } = ne(e, t);
  let f = e.placeholder ?? getI18nString("design_systems.assets_panel.search_all_libraries");
  return jsxs("div", {
    "data-onboarding-key": e["data-onboarding-key"],
    className: "asset_panel_search_bar--inputWrapper--NcEYI asset_panel_search_bar--horizontalFlex--VBaAx",
    children: [jsx(L, {
      ref: searchInputRef,
      "aria-label": f,
      dataTestId: "asset-panel-search-bar-input",
      maxInputLength: e.maxInputLength,
      onBlur,
      onChange: onSearchChange,
      onClick,
      onFocus,
      onKeyDown: onSearchKeyDown,
      onMouseDown,
      onMouseUp,
      placeholder: f,
      spellCheck: !1,
      tabIndex: 0,
      value: e.query
    }), !!e.query && jsx(_$$K, {
      onClick: e.clearSearch,
      "aria-label": getI18nString("design_systems.assets_panel.clear_search"),
      htmlAttributes: {
        "data-testid": "search-x-icon"
      },
      children: jsx(_$$f, {
        className: "asset_panel_search_bar--xIcon--zVMI4"
      })
    })]
  });
});
export const K = $$c0;