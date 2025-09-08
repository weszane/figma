import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useRef } from "react";
import { o as _$$o } from "../905/821217";
import { E as _$$E } from "../905/632989";
import { K } from "../905/851274";
import { LayoutTabType } from "../figma_app/763686";
import d from "classnames";
import { BK } from "../905/848862";
import { Ib } from "../905/129884";
import { J5, FM } from "../figma_app/835688";
import { useDispatch } from "../vendor/514228";
import { r as _$$r } from "../905/857502";
import { getInitialOptions } from "../figma_app/169182";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { F } from "../905/302958";
import { tS } from "../figma_app/516028";
import { LB } from "../figma_app/29089";
import { ZU } from "../figma_app/986347";
import { fullHeightSidebarFlyout, disabledFullHeightSidebarFlyout, fullHeightSidebarFlyoutButton } from "../figma_app/430407";
var c = d;
let $$v1 = "slides-presentation-flyout";
let $$A0 = {
  type: ZU.FLYOUT,
  name: $$v1,
  editModes: LB.concat([LayoutTabType.SLIDE_LAYOUT, LayoutTabType.PREVIEW]),
  nonEditorsAllowed: !0,
  loggedOutAllowed: !0,
  recordingKey: "slidesPresentationFlyout",
  onboardingKey: J5,
  flyoutDoNotStyleActiveItem: !0,
  largeDisplayMode: !0,
  children: [{
    action: "present-slides-audience-view",
    actionOnFlyoutItemClick: "set-slides-audience-view",
    recordingKey: "audienceViewPresent",
    description: "present-slides-description",
    isActive: () => !0
  }, {
    action: "present-slides-presenter-view",
    actionOnFlyoutItemClick: "set-slides-presenter-view",
    recordingKey: "presenterViewPresent",
    description: "present-slides-presenter-view-description"
  }],
  footer: jsx("div", {
    className: "slides_toolbar_items--copyPresentationLinkWrapper--wpxRz",
    "data-onboarding-key": FM,
    children: jsx(function () {
      let e = tS();
      let t = useDispatch();
      let r = useCallback(() => {
        let r = `${getInitialOptions().figma_url}/deck/${e}`;
        navigator.clipboard.writeText(r);
        t(F.enqueue({
          type: "copy-presentation-link-success",
          message: getI18nString("fullscreen_actions.copy-presentation-link-success")
        }));
      }, [e, t]);
      return jsx(_$$E, {
        onClick: r,
        children: jsxs("div", {
          className: _$$s.flex.flexRow.itemsCenter.justifyCenter.$,
          children: [jsx(_$$r, {}), renderI18nText("fullscreen_actions.copy-presentation-link")]
        })
      });
    }, {})
  })
};
export function $$x2({
  item: e,
  defaultItem: t,
  dropdownKey: r,
  tooltipText: l,
  additionalDispatchData: d,
  recordingKey: _,
  disabled: h
}) {
  let {
    toggle,
    showing
  } = BK(r);
  let f = useRef(null);
  let E = h ? void 0 : () => {
    let e = f.current;
    toggle({
      data: {
        ...d,
        targetRect: e.getBoundingClientRect()
      }
    });
  };
  return jsx("div", {
    ref: f,
    className: c()(fullHeightSidebarFlyout, {
      "slides_toolbar_items--flyoutDropdownShown--xV4l7": showing,
      [disabledFullHeightSidebarFlyout]: h
    }),
    "data-tooltip-type": Ib.LOOKUP,
    "data-tooltip": t.action,
    "data-onboarding-key": e.onboardingKey,
    "data-testid": t.action,
    children: jsx(_$$o, {
      eventListeners: ["onClick"],
      children: jsx(_$$E, {
        actionOnPointerDown: !0,
        htmlAttributes: {
          "data-testid": `${e.name}-button`
        },
        className: c()(fullHeightSidebarFlyoutButton, "slides_toolbar_items--flyoutButton--iXCH9", {
          "slides_toolbar_items--disabledFlyoutButton--o5Iom": h
        }),
        "aria-label": l,
        recordingKey: _,
        onClick: E,
        children: jsx(K, {})
      })
    })
  });
}
export const IS = $$A0;
export const MR = $$v1;
export const $0 = $$x2;