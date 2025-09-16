import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { IconButton } from "../905/443068";
import { t as _$$t } from "../905/117577";
import { a as _$$a } from "../905/964520";
import l from "classnames";
import { isColorDarkByLuminance } from "../figma_app/191804";
import { BrowserInfo } from "../figma_app/778880";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
var d = l;
let h = "desktop_navigation_chevrons--darkBackgroundIcon--0W-DW";
let m = "desktop_navigation_chevrons--disabled--ABn98";
let g = "desktop_navigation_chevrons--lightBackgroundIcon---12nc";
export function $$$$f0(e) {
  let t = t => {
    if (t.target instanceof HTMLInputElement) return;
    let r = BrowserInfo.mac && t.metaKey && !t.shiftKey && !t.altKey || BrowserInfo.windows && !t.metaKey && !t.shiftKey && t.altKey;
    BrowserInfo.mac && e.isLeftEnabled && "[" === t.key && r ? e.onLeftClick() : BrowserInfo.mac && e.isRightEnabled && "]" === t.key && r ? e.onRightClick() : e.isLeftEnabled && "ArrowLeft" === t.key && r ? e.onLeftClick() : e.isRightEnabled && "ArrowRight" === t.key && r && e.onRightClick();
  };
  if (useEffect(() => (window.addEventListener("keydown", t), () => {
    window.removeEventListener("keydown", t);
  })), e.parentBackgroundColor) {
    let t = isColorDarkByLuminance(e.parentBackgroundColor);
    return jsxs("div", {
      className: _$$s.flex.flexRow.$,
      children: [jsx(IconButton, {
        "aria-label": getI18nString("file_browser.navigation.desktop_back_to_previous"),
        disabled: !e.isLeftEnabled,
        onClick: e.onLeftClick,
        children: jsx(_$$t, {
          className: d()(t ? h : g, {
            [m]: !e.isLeftEnabled
          })
        })
      }), jsx(IconButton, {
        "aria-label": getI18nString("file_browser.navigation.desktop_forward_in_browser"),
        disabled: !e.isRightEnabled,
        onClick: e.onRightClick,
        children: jsx(_$$a, {
          className: d()(t ? h : g, {
            [m]: !e.isRightEnabled
          })
        })
      })]
    });
  }
  return jsxs("div", {
    className: _$$s.flex.flexRow.$,
    children: [jsx(IconButton, {
      "aria-label": getI18nString("file_browser.navigation.desktop_back_to_previous"),
      disabled: !e.isLeftEnabled,
      onClick: e.onLeftClick,
      children: jsx(_$$t, {})
    }), jsx(IconButton, {
      "aria-label": getI18nString("file_browser.navigation.desktop_forward_in_browser"),
      disabled: !e.isRightEnabled,
      onClick: e.onRightClick,
      children: jsx(_$$a, {})
    })]
  });
}
export const f = $$$$f0;