import { jsx, jsxs } from "react/jsx-runtime";
import { useAtomWithSubscription } from "../figma_app/27355";
import { generateRecordingKey } from "../figma_app/878298";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { styleBuilderInstance } from "../905/941192";
import { z } from "../905/788559";
import { ActionButton } from "../905/189361";
import { TT, Bw } from "../figma_app/604494";
import { U } from "../905/172092";
export function $$$$p0({
  horizontalPadding: e = 8,
  height: t,
  gatherFeedback: i,
  aiTrackingContext: a,
  rateOutputStrOverride: s,
  sentimentFeedbackCallback: o,
  additionalFeedbackCallback: l
}) {
  let d = useAtomWithSubscription(TT);
  let u = useAtomWithSubscription(Bw);
  let p = d ? u[d] ?? null : null;
  return p ? jsx(m, {
    actionLabel: p.label,
    additionalFeedbackCallback: l,
    aiTrackingContext: a,
    gatherFeedback: i,
    height: t,
    horizontalPadding: e,
    primaryAction: p.primaryAction,
    rateOutputStrOverride: s,
    secondaryAction: p.secondaryAction,
    sentimentFeedbackCallback: o,
    target: p.target,
    tertiaryAction: p.tertiaryAction
  }) : null;
}
function m({
  primaryAction: e,
  secondaryAction: t,
  tertiaryAction: i,
  actionLabel: r,
  horizontalPadding: c,
  target: p,
  height: m,
  gatherFeedback: h,
  aiTrackingContext: g,
  rateOutputStrOverride: f,
  sentimentFeedbackCallback: _,
  additionalFeedbackCallback: A
}) {
  let y = U() ?? "unknownModule";
  if (!r) return null;
  let b = e ? jsx(ActionButton, {
    ...e,
    target: p,
    recordingKey: generateRecordingKey(y, "actionPanel", "primaryAction"),
    disableKeyboardShortcuts: !0,
    children: e.text
  }, "primary-action") : null;
  let v = t ? jsx(ActionButton, {
    variant: "secondary",
    ...t,
    target: p,
    recordingKey: generateRecordingKey(y, "actionPanel", "secondaryAction"),
    disableKeyboardShortcuts: !0,
    children: t.text
  }, "secondary-action") : null;
  let I = i ? jsx(ActionButton, {
    variant: "secondary",
    ...i,
    recordingKey: generateRecordingKey(y, "actionPanel", "tertiaryAction"),
    disableKeyboardShortcuts: !0,
    children: i.text
  }, "tertiary-action") : null;
  return jsxs("div", {
    className: cssBuilderInstance.flex.flexRow.gap8.justifyBetween.py8.bSolid.colorBorder.bt1.itemsCenter.colorBg.$,
    style: styleBuilderInstance.add({
      minHeight: "28px",
      paddingLeft: `${c}px`,
      paddingRight: `${c}px`
    }).if(m, {
      height: `${m}px`
    }).$,
    children: [h && g && jsx("div", {
      className: cssBuilderInstance.flex.itemsCenter.gap8.$,
      children: jsx(z, {
        aiTrackingContext: g,
        rateOutputStrOverride: f,
        sentimentFeedbackCallback: _,
        additionalFeedbackCallback: A
      })
    }), jsxs("div", {
      className: cssBuilderInstance.flex.itemsCenter.gap8.mlAuto.$,
      children: [I, v, b]
    }), r]
  });
}
export const p = $$$$p0;
