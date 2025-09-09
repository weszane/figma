import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { E as _$$E } from "../905/632989";
import { O } from "../905/969533";
import { e as _$$e } from "../905/149844";
import { scopeAwareFunction } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { Ay } from "@stylexjs/stylex";
import { useAtomWithSubscription } from "../figma_app/27355";
import { generateRecordingKey } from "../figma_app/878298";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { Ib } from "../905/129884";
import { oY } from "../figma_app/524655";
import { MB } from "../figma_app/835688";
import { Ei } from "../figma_app/60023";
import { uu } from "../7222/396421";
let $$b0 = "carousel-add-slide-button";
let $$C1 = forwardRef(function ({
  recordingKey: e
}, t) {
  let {
    toggleTemplatePicker,
    closeTemplatePicker
  } = uu();
  let C = useAtomWithSubscription(Ei);
  let E = scopeAwareFunction.user("ssv-carousel", () => {
    closeTemplatePicker();
    let e = getSingletonSceneGraph();
    oY(e, "carousel_add_slide_button");
  });
  return jsxs("div", {
    "data-element-target": $$b0,
    className: "xh8yej3 xxk0z11 x78zum5 xl56j7k",
    children: [jsxs(_$$E, {
      ref: t,
      ...Ay.props(v.addSlideButton, v.newSlideButton, C && v.buttonOpen),
      onClick: toggleTemplatePicker,
      htmlAttributes: {
        "data-fullscreen-intercept": !0,
        "data-tooltip": getI18nString("slides.carousel.add-slide-from-template"),
        "data-tooltip-type": Ib.TEXT,
        "data-onboarding-key": MB
      },
      "aria-label": getI18nString("slides.carousel.add-slide-from-template"),
      children: [jsx("p", {
        className: _$$s.noWrap.$,
        children: getI18nString("slides.carousel.new_slide")
      }), jsx(O, {})]
    }), jsx(_$$E, {
      className: "x15cczae x1icplyp x1bamp8i x78zum5 x6s0dn4 xww3pen",
      onClick: E,
      recordingKey: generateRecordingKey(e, "addSlideButton"),
      htmlAttributes: {
        "data-fullscreen-intercept": !0,
        "data-tooltip": getI18nString("slides.carousel.add-blank-slide"),
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip-shortcut-key": "create-slide",
        "data-testid": "addSlideButton"
      },
      "aria-label": getI18nString("slides.carousel.add-blank-slide"),
      children: jsx(_$$e, {})
    })]
  });
});
let v = {
  addSlideButton: {
    ":active_backgroundColor": "x15cczae",
    ":focus-visible_boxShadow": "x1icplyp",
    $$css: !0
  },
  newSlideButton: {
    backgroundColor: "x1yjdb4r",
    display: "x78zum5",
    justifyContent: "xl56j7k",
    alignItems: "x6s0dn4",
    flexGrow: "x1iyjqo2",
    boxSizing: "x9f619",
    height: "x5yr21d",
    pointerEvents: "x71s49j",
    border: "x1bamp8i",
    borderWidth: null,
    borderInlineWidth: null,
    borderLeftWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderLeftStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderLeftColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    borderRight: "x7956lj",
    borderRightWidth: null,
    borderInlineStartWidth: null,
    borderInlineEndWidth: null,
    borderRightStyle: null,
    borderInlineStartStyle: null,
    borderInlineEndStyle: null,
    borderRightColor: null,
    borderInlineStartColor: null,
    borderInlineEndColor: null,
    paddingLeft: "xd3ty66",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    borderRadius: "xy5cce4",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: !0
  },
  buttonOpen: {
    backgroundColor: "x30nh5c",
    $$css: !0
  }
};
export const G = $$b0;
export const V = $$C1;