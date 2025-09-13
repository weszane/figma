import { jsx, jsxs } from "react/jsx-runtime";
import { KeyCodes } from "../905/63728";
import { generateRecordingKey } from "../figma_app/878298";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { P } from "../905/994270";
import { nP, LU } from "../905/487011";
import { Ek } from "../905/278499";
import { r as _$$r } from "../905/189361";
import { B } from "../905/222272";
import { R } from "../905/240644";
import { y as _$$y } from "../905/236825";
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
  let v = g ? jsx(_$$r, {
    variant: "secondary",
    shortcuts: [{
      key: KeyCodes.ESCAPE
    }],
    recordingKey: generateRecordingKey(A, "cancel"),
    onAction: e => {
      _ && nP({
        ..._,
        ...LU(e),
        interaction: Ek.STOP
      });
      b();
    },
    children: renderI18nText("ai.cancel")
  }) : i ? jsx(_$$r, {
    variant: "secondary",
    shortcuts: [{
      key: KeyCodes.ESCAPE
    }],
    recordingKey: generateRecordingKey(A, "stop"),
    onAction: e => {
      _ && nP({
        ..._,
        ...LU(e),
        interaction: Ek.STOP
      });
      y();
    },
    children: renderI18nText("ai.stop")
  }) : void 0;
  return jsx(_$$y, {
    content: f,
    extra: !!f && jsx(B, {
      justify: "end",
      fullWidth: !0,
      children: v
    }),
    dataTestId: "runningView",
    children: jsxs(B, {
      justify: "space-between",
      align: "center",
      fullWidth: !0,
      children: [jsx(R, {
        children: jsxs(B, {
          gap: 8,
          children: [jsx("span", {
            className: _$$s.textBodyMediumStrong.$,
            children: e
          }), !!t && jsx("span", {
            className: _$$s.textBodyMedium.colorTextSecondary.$,
            children: t
          })]
        })
      }), !f && v]
    })
  });
}
export const F = $$g0;