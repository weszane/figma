import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { buildUploadUrl } from "../figma_app/169182";
import { B } from "../905/714743";
import { YQ } from "../905/502364";
import { renderI18nText } from "../905/303541";
import { D } from "../figma_app/861252";
import { J } from "../9410/591377";
import { O } from "../9410/241650";
import { P7 } from "../figma_app/598952";
import { hQ, ZS, IP, UD, Lx, xn } from "../9410/320848";
import { A } from "../svg/564866";
export let $$f0 = "FigJam Editor Onboarding";
export function $$g1(e) {
  return jsxs("div", {
    className: hQ,
    children: [e.svg && jsx("div", {
      className: ZS,
      children: jsx(B, {
        svg: e.svg,
        useOriginalSrcFills_DEPRECATED: !0
      })
    }), jsxs("div", {
      className: IP,
      children: [e.titleText ? e.titleText : "", e.bodyText]
    }), e.buttonText && e.onButtonClick && jsx("div", {
      className: UD,
      children: jsx(J, {
        onClick: e.onButtonClick,
        autoFocus: !0,
        children: e.buttonText
      })
    })]
  });
}
export let $$_2 = buildUploadUrl("8f3066fc3906f11f2601a390725f2b7af58e01a1");
export function $$x4(e) {
  let t = O();
  let i = D();
  return jsxs(Fragment, {
    children: [e.children, jsx("div", {
      className: Lx,
      style: {
        marginBottom: i + 32
      },
      children: jsxs(J, {
        onClick: () => {
          e.onSkipClick();
          YQ({
            id: P7
          });
          t({
            eventName: "msv2_skipped",
            useCase: e.useCase
          });
        },
        trackingProperties: {
          text: "Skip intro"
        },
        children: [renderI18nText("figjam_onboarding_make_something.all.skip_intro"), jsx(B, {
          svg: A
        })]
      })
    })]
  });
}
export function $$y5(e) {
  return jsx("div", {
    className: xn,
    children: jsx($$g1, {
      bodyText: e.bodyText,
      buttonText: e.buttonText,
      onButtonClick: e.onButtonClick,
      svg: e.svg
    })
  });
}
export function $$b3(e) {
  let {
    useCase,
    stepName,
    stepNum
  } = e;
  let a = O();
  useEffect(() => {
    a({
      eventName: "msv2_step_shown",
      useCase,
      stepName,
      stepNum
    });
  }, [stepName, stepNum, a, useCase]);
}
export const CM = $$f0;
export const mI = $$g1;
export const mN = $$_2;
export const rL = $$b3;
export const vX = $$x4;
export const wV = $$y5;