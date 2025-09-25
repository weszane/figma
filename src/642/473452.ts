import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { bL } from "../905/911410";
import { DialogContents, DialogHeader, DialogTitle, DialogBody } from "../figma_app/272243";
import { A } from "../905/920165";
import { generateRecordingKey } from "../figma_app/878298";
import { renderI18nText, getI18nString } from "../905/303541";
import { LN } from "../figma_app/975811";
import { fullscreenValue } from "../figma_app/455680";
import { valueOrFallback } from "../905/216495";
import { useSelectionPropertyValue } from "../905/275640";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { FormattedInputVariant1 } from "../905/203369";
import { Id, nV } from "../figma_app/626177";
export function $$x0(e) {
  return jsx(bL, {
    ...e,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText("fullscreen.properties_panel.transform_panel.corner_smoothing")
        })
      }), jsx(DialogBody, {
        padding: 0,
        children: jsx(Id, {
          children: jsx("div", {
            className: "corner_smoothing--modalControl--AXovi",
            children: jsx(y, {
              recordingKey: e.recordingKey
            })
          })
        })
      })]
    })
  });
}
function y({
  recordingKey: e
}) {
  let t = useMemo(() => new LN(), []);
  let s = valueOrFallback(useSelectionPropertyValue("cornerSmoothing"), 0);
  return jsxs("div", {
    className: "corner_smoothing--root--tqWdN",
    children: [jsx("div", {
      className: "corner_smoothing--sliderWrapper--j9nGR",
      children: jsx(A, {
        "aria-label": getI18nString("fullscreen.properties_panel.transform_panel.corner_smoothing"),
        bigStep: .1,
        defaultValue: 0,
        hints: [.6],
        max: 1,
        min: 0,
        onChange: (e, {
          commit: t
        }) => _(e, t),
        rangeAnchor: 0,
        recordingKey: generateRecordingKey(e, "slider"),
        step: .01,
        value: s
      })
    }), jsx(FormattedInputVariant1, {
      recordingKey: generateRecordingKey(e, "modal"),
      className: "corner_smoothing--cornerSmoothingInput--diqdz",
      formatter: t,
      property: s,
      onChange: e => void _(e, !0)
    }), jsx("div", {
      className: "corner_smoothing--labelWrapper--4qKuC",
      children: jsx(nV, {
        className: "corner_smoothing--label--WzFGN",
        onClick: () => {
          _(.6, !0);
        },
        children: renderI18nText("fullscreen.properties_panel.transform_panel.i_os")
      })
    })]
  });
}
function _(e, t) {
  e = Math.round(100 * e) / 100;
  fullscreenValue.updateSelectionProperties({
    cornerSmoothing: e
  }, {
    shouldCommit: t ? yesNoTrackingEnum.YES : yesNoTrackingEnum.NO
  });
}
export const K = $$x0;