import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import i from "classnames";
import { s as _$$s } from "../cssbuilder/589278";
import { styleBuilderInstance } from "../905/941192";
import { AT, CJ } from "../905/927294";
import { g } from "../905/939506";
var a = i;
export function $$c0(e) {
  let t = void 0 !== e.media;
  let r = void 0 !== e.title;
  let i = (e.stepCounter || e.primaryCta || e.secondaryCta || e.overrideFooter) !== void 0;
  return jsxs(Fragment, {
    children: [jsx(AT, {
      isTooltip: e.isTooltip,
      title: e.title,
      description: e.description,
      onClose: e.onClose,
      emphasized: e.emphasized,
      hideCloseButton: e.hideCloseButton
    }), t && e.media, r && jsx("div", {
      className: a()(_$$s.font11.fontNormal.lh16.$, g),
      style: styleBuilderInstance.add({
        letterSpacing: "0.055px"
      }).$,
      children: e.description
    }), i && jsx(Fragment, {
      children: e.overrideFooter ? e.overrideFooter : jsx(CJ, {
        stepCounter: e.stepCounter,
        primaryCta: e.primaryCta,
        secondaryCta: e.secondaryCta,
        emphasized: e.emphasized
      })
    })]
  });
}
export const b = $$c0;