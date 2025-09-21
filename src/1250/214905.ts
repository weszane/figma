import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { setupMenu, MenuRootComp } from "../figma_app/860955";
import { IconButton } from "../905/443068";
import { e as _$$e } from "../905/149844";
import { xk } from "@stylexjs/stylex";
import { getFeatureFlags } from "../905/601108";
import { createEventEmitter, useEventSubscription } from "../figma_app/516794";
import { getI18nString } from "../905/303541";
import { Q } from "../1250/227834";
import { l as _$$l } from "../1250/135829";
import { f as _$$f } from "../figma_app/859253";
import { FileBrowserLocation } from "../figma_app/915202";
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
let f = createEventEmitter();
let h = createEventEmitter();
export function $$b2() {
  f.emit();
}
export function $$x1() {
  h.emit();
}
export function $$y0({
  folderId: e,
  isContainerHovered: t
}) {
  let {
    getTriggerProps,
    manager
  } = setupMenu({
    config2025CuratorHacks: getFeatureFlags().fpl_menu_under_curator
  });
  useEventSubscription(f, useCallback(() => manager.setOpen(!0), [manager]));
  useEventSubscription(h, useCallback(() => manager.setOpen(!1), [manager]));
  let x = Q({
    newFileFrom: FileBrowserLocation.FILE_BROWSER_SIDEBAR_DRAFTS,
    folderId: e,
    contextClicked: "file_browser_sidebar_drafts_new_file_created"
  });
  return jsx("div", {
    ...xk(!t && v.hidden),
    children: jsxs(MenuRootComp, {
      manager,
      children: [jsx(IconButton, {
        htmlAttributes: {
          "data-tooltip": getI18nString("sidebar.new_file"),
          "data-onboarding-key": "new-file-icon"
        },
        "aria-label": getI18nString("sidebar.new_file"),
        ...getTriggerProps(),
        children: jsx(_$$e, {})
      }), jsx(_$$f, {
        menuItems: x,
        "data-onboarding-key": _$$l
      })]
    })
  });
}
let v = {
  hidden: {
    opacity: "xg01cxk x1o7uuvo x1uxbtfk x4gyw5p x1euntei",
    $$css: !0
  }
};
export const iM = $$y0;
export const nz = $$x1;
export const pP = $$b2;