import { jsx, jsxs } from "react/jsx-runtime";
import { IconButton } from "../905/443068";
import { A } from "../905/251970";
import { generateRecordingKey } from "../figma_app/878298";
import o from "classnames";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { withTrackedClick } from "../figma_app/831799";
import { F } from "../905/759613";
import { Q6, nK, QC, aj, AH, Vs, b, Rf, uI, J, Lb } from "../905/856036";
var l = o;
export let $$g2 = withTrackedClick(({
  onClick: e,
  disabled: t,
  dataOnboardingKey: i,
  dataTestId: o = "close-button",
  emphasized: d,
  "aria-label": u = getI18nString("general.close"),
  ...p
}) => jsx(IconButton, {
  "aria-label": u,
  disabled: t,
  onClick: e,
  actionOnPointerDown: !0,
  htmlAttributes: {
    "data-onboarding-key": i,
    "data-testid": o,
    "data-not-draggable": !0
  },
  recordingKey: generateRecordingKey(p, "closeButton"),
  children: jsx(A, {
    className: l()({
      [Q6]: d
    })
  })
}));
export function $$f0(e) {
  return jsxs("div", {
    className: l()(cssBuilderInstance.flex.justifyBetween.itemsCenter.$, nK, {
      [QC]: e.emphasized,
      [aj]: !e.title
    }),
    children: [e.title ? jsx("div", {
      className: l()(cssBuilderInstance.font13.fontMedium.flexGrow1.$$if(!e.hideCloseButton, cssBuilderInstance.pr32).$, AH),
      style: styleBuilderInstance.add({
        letterSpacing: "-0.032px"
      }).$,
      children: e.title
    }) : jsx("div", {
      className: l()(cssBuilderInstance.font11.fontNormal.lh16.wFull.$$if(!e.hideCloseButton, cssBuilderInstance.pr32).$, Vs),
      style: styleBuilderInstance.add({
        letterSpacing: "0.055px"
      }).$,
      children: e.description
    }), !e.hideCloseButton && jsx("div", {
      className: l()(b, {
        [Rf]: e.emphasized,
        [uI]: e.isTooltip
      }),
      children: jsx($$g2, {
        onClick: () => e.onClose("close_button_clicked"),
        "aria-label": getI18nString("general.close"),
        innerText: "close",
        emphasized: e.emphasized
      })
    })]
  });
}
export function $$_1(e) {
  return jsxs("div", {
    className: l()(cssBuilderInstance.flex.itemsCenter.justifyBetween.font11.fontMedium.lh16.$, J, {
      [Lb]: e.emphasized
    }),
    children: [jsx("div", {
      className: cssBuilderInstance.$$if(e.emphasized, cssBuilderInstance.colorTextOnbrandSecondary, cssBuilderInstance.colorTextSecondary).$,
      style: styleBuilderInstance.add({
        letterSpacing: "0.055px"
      }).$,
      children: e.stepCounter && renderI18nText("rcs.rcs_shared.step_counter", {
        currentStepNum: e.stepCounter.stepNum,
        totalNumSteps: e.stepCounter.totalNumSteps
      })
    }), jsxs("div", {
      className: cssBuilderInstance.flex.flexWrap.gap8.$,
      children: [e.secondaryCta && jsx(F, {
        defaultVariant: "secondary",
        emphasized: e.emphasized,
        ctaButtonMeta: e.secondaryCta
      }), e.primaryCta && jsx(F, {
        defaultVariant: "primary",
        emphasized: e.emphasized,
        ctaButtonMeta: e.primaryCta
      })]
    })]
  });
}
export const AT = $$f0;
export const CJ = $$_1;
export const Jn = $$g2;