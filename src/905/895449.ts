import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import a from "classnames";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { p } from "../905/133304";
import { _ } from "../905/614936";
import { T } from "../905/172092";
var s = a;
export function $$u0(e) {
  let t = void 0 !== e.height;
  let i = {
    recordingKey: e.recordingKey
  };
  return jsxs(T.Provider, {
    value: i,
    children: [jsxs("div", {
      className: cssBuilderInstance.flex.wFull.flexColumn.borderBox.$,
      style: {
        width: e.width,
        height: e.height
      },
      "data-testid": e.dataTestId,
      children: [jsx("div", {
        className: s()(cssBuilderInstance.wFull.flex1.$, {
          "module--bodyFontMedium--37-oM text--fontPos11--2LvXf text--_fontBase--QdLsd": e.bodyFontMedium
        }),
        children: jsx(_, {
          fillHeight: !0,
          children: e.children
        })
      }), t && !e.hideActionPanel && jsx(p, {
        gatherFeedback: e.gatherFeedback,
        aiTrackingContext: e.aiTrackingContext,
        rateOutputStrOverride: e.rateOutputStrOverride,
        sentimentFeedbackCallback: e.sentimentFeedbackCallback,
        additionalFeedbackCallback: e.additionalFeedbackCallback
      })]
    }), !t && !e.hideActionPanel && jsx(p, {
      gatherFeedback: e.gatherFeedback,
      aiTrackingContext: e.aiTrackingContext,
      rateOutputStrOverride: e.rateOutputStrOverride,
      sentimentFeedbackCallback: e.sentimentFeedbackCallback,
      additionalFeedbackCallback: e.additionalFeedbackCallback
    })]
  });
}
(e => {
  e.Header = function (e) {
    return jsx("div", {
      className: cssBuilderInstance.relative.zIndex1.$,
      children: e.children
    });
  };
  e.Body = function (e) {
    return jsx("div", {
      className: cssBuilderInstance.flex1.relative.$,
      children: e.children
    });
  };
  e.Footer = function (e) {
    return jsx("div", {
      className: cssBuilderInstance.relative.zIndex1.$,
      children: e.children
    });
  };
  e.Stretch = forwardRef((e, t) => jsx("div", {
    ref: t,
    className: cssBuilderInstance.absolute.left0.right0.top0.bottom0.$,
    children: e.children
  }));
})($$u0 || ($$u0 = {}));
export const n = $$u0;