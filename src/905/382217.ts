import { jsx, jsxs } from "react/jsx-runtime";
import { KeyCodes } from "../905/63728";
import { generateRecordingKey } from "../figma_app/878298";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { P } from "../905/994270";
import { nP, LU } from "../905/487011";
import { AIActionProgressType } from "../905/278499";
import { ActionButton } from "../905/189361";
import { FlexBox } from "../905/222272";
import { R } from "../905/240644";
import { Panel } from "../905/236825";
export function $$g0({
  children: e,
  secondaryMessage: t,
  onStop: i,
  onCancel: g,
  content: f,
  aiTrackingContext: _,
  recordingKey: A
}) {
  P(!0);
  let y = () => {
    i && i();
  };
  let b = () => {
    g && g();
  };
  let v = g ? jsx(ActionButton, {
    variant: "secondary",
    shortcuts: [{
      key: KeyCodes.ESCAPE
    }],
    recordingKey: generateRecordingKey(A, "cancel"),
    onAction: e => {
      _ && nP({
        ..._,
        ...LU(e),
        interaction: AIActionProgressType.STOP
      });
      b();
    },
    children: renderI18nText("ai.cancel")
  }) : i ? jsx(ActionButton, {
    variant: "secondary",
    shortcuts: [{
      key: KeyCodes.ESCAPE
    }],
    recordingKey: generateRecordingKey(A, "stop"),
    onAction: e => {
      _ && nP({
        ..._,
        ...LU(e),
        interaction: AIActionProgressType.STOP
      });
      y();
    },
    children: renderI18nText("ai.stop")
  }) : void 0;
  return jsx(Panel, {
    content: f,
    extra: !!f && jsx(FlexBox, {
      justify: "end",
      fullWidth: !0,
      children: v
    }),
    dataTestId: "runningView",
    children: jsxs(FlexBox, {
      justify: "space-between",
      align: "center",
      fullWidth: !0,
      children: [jsx(R, {
        children: jsxs(FlexBox, {
          gap: 8,
          children: [jsx("span", {
            className: cssBuilderInstance.textBodyMediumStrong.$,
            children: e
          }), !!t && jsx("span", {
            className: cssBuilderInstance.textBodyMedium.colorTextSecondary.$,
            children: t
          })]
        })
      }), !f && v]
    })
  });
}
export const F = $$g0;