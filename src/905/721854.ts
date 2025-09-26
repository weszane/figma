import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { y as _$$y } from "../905/175043";
import { useSingleEffect } from "../905/791079";
import { handleUrlAction } from "../905/280005";
import { KeyCodes, ModifierKeyCodes } from "../905/63728";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { setupHyperlinkHandler } from "../figma_app/815170";
import { useSelectedNodesWithinBreakpointFrame } from "../905/913055";
import { Yh } from "../figma_app/357047";
import { Bf } from "../figma_app/249941";
import { cq } from "../905/794154";
import { ID, aK } from "../905/487011";
import { AIActionInstructionType, AIActionInstructionTrigger } from "../905/278499";
import { ActionButton } from "../905/189361";
import { FlexBox } from "../905/222272";
import { Panel } from "../905/236825";
function E({
  aiTrackingContext: e,
  children: t,
  action: i,
  shouldAutoFocus: o
}) {
  let {
    close
  } = cq();
  let h = useDispatch();
  let g = useCallback(t => {
    e && ID({
      ...e,
      ...aK(t),
      interaction: AIActionInstructionType.DISMISS
    });
    close();
  }, [e, close]);
  let f = useCallback(e => {
    handleUrlAction(e) || h(setupHyperlinkHandler({
      rawInput: e
    }));
  }, [h]);
  let E = i ? jsx(ActionButton, {
    onAction: "custom" === i.type ? i.onPerform : () => f(i.url),
    iconPrefix: "custom" === i.type ? i.iconPrefix : void 0,
    variant: "secondary",
    children: "custom" === i.type ? i.label : renderI18nText("ai.learn_more")
  }) : null;
  return jsx(Panel, {
    dataTestId: "instruction",
    shouldAutoFocus: o,
    children: jsxs(FlexBox, {
      justify: "space-between",
      align: "center",
      fullWidth: !0,
      children: [jsxs("div", {
        className: cssBuilderInstance.flex.gap4.itemsCenter.$,
        children: [jsx(_$$y, {}), jsx("span", {
          className: cssBuilderInstance.colorText.textBodyMediumStrong.$,
          children: t
        })]
      }), jsxs(FlexBox, {
        gap: 8,
        children: [E, jsx(ActionButton, {
          onAction: g,
          variant: "secondary",
          shortcuts: [{
            key: KeyCodes.ESCAPE
          }],
          recordingKey: "cancel-instruction",
          children: renderI18nText("ai.cancel")
        })]
      })]
    })
  });
}
export function $$x0({
  action: e,
  actionIcon: t,
  actionLabel: i,
  onPerform: l,
  aiTrackingContext: m,
  children: x,
  getCustomDisabledTextFromSelectedNodes: S,
  getCustomSelectedNodesAmount: w,
  instructionAction: C,
  customLayersIcon: T,
  shouldAutoFocus: k,
  customActionPrefix: R
}) {
  let N = useSelectedNodesWithinBreakpointFrame();
  let P = useSelector(t => Yh(t.mirror.appModel, e));
  let {
    close
  } = cq();
  let D = useCallback(() => {
    m && ID({
      ...m,
      interaction: AIActionInstructionType.DISMISS,
      interaction_type: AIActionInstructionTrigger.BUTTON_CLICK
    });
    close();
  }, [m, close]);
  let L = useCallback(e => {
    m && ID({
      ...m,
      ...aK(e),
      interaction: AIActionInstructionType.EXECUTE
    });
    l();
  }, [m, l]);
  return (useSingleEffect(() => {
    m && ID({
      ...m,
      interaction: AIActionInstructionType.VIEW,
      interaction_type: AIActionInstructionTrigger.VIEW
    });
  }), P) ? jsx(Panel, {
    onDismiss: D,
    dataTestId: "instructionView",
    shouldAutoFocus: k,
    children: jsxs(FlexBox, {
      justify: "space-between",
      align: "center",
      fullWidth: !0,
      children: [jsxs("div", {
        className: cssBuilderInstance.flex.itemsCenter.gap4.$,
        children: [jsx("div", {
          className: cssBuilderInstance.w24.h24.flex.itemsCenter.justifyCenter.$,
          children: N && 0 !== N.length ? T ? jsx("div", {
            style: {
              "--color-icon": "var(--color-icon-brand)"
            },
            className: cssBuilderInstance.flex.justifyCenter.itemsCenter.$,
            children: T
          }) : 1 === N.length ? jsx("div", {
            style: styleBuilderInstance.add({
              stroke: "var(--color-icon-brand)"
            }).$,
            children: jsx(Bf, {
              guid: N[0].guid,
              className: cssBuilderInstance.flex.justifyCenter.itemsCenter.colorIconBrand.$
            })
          }) : jsx(_$$y, {
            style: {
              "--color-icon": "var(--color-icon-brand)"
            }
          }) : null
        }), jsx("span", {
          className: cssBuilderInstance.textBodyMediumStrong.colorTextBrand.truncate.maxW150.$,
          children: function (e, t) {
            if (!e) return null;
            let i = t ? t(e) : e.length;
            return 0 === i ? null : 1 === i ? e[0].name : renderI18nText("ai.n_selected", {
              n: i
            });
          }(N, w)
        })]
      }), jsxs(FlexBox, {
        gap: 8,
        align: "center",
        children: [R, jsx(ActionButton, {
          onAction: L,
          variant: "secondary",
          iconPrefix: t,
          recordingKey: "instructionView",
          shortcuts: [{
            key: KeyCodes.ENTER,
            modifier: [ModifierKeyCodes.META]
          }],
          children: i
        })]
      })]
    })
  }) : N && S ? jsx(E, {
    aiTrackingContext: m,
    action: C,
    shouldAutoFocus: k,
    children: S(N) ?? x
  }) : jsx(E, {
    aiTrackingContext: m,
    action: C,
    shouldAutoFocus: k,
    children: x
  });
}
export const A = $$x0;