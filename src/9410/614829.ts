import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { ButtonPrimitive } from "../905/632989";
import { getFeatureFlags } from "../905/601108";
import o from "classnames";
import { generateRecordingKey } from "../figma_app/878298";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { useIsFullscreenOverview } from "../figma_app/88239";
import { jo } from "../figma_app/753501";
import { isDevHandoffEditorType } from "../figma_app/976749";
import { dh, nn } from "../figma_app/186343";
import { _ as _$$_ } from "../9410/218531";
import { B } from "../9410/966396";
import { H } from "../9410/195555";
import { i as _$$i } from "../9410/799000";
import { t as _$$t } from "../9410/254335";
import { g as _$$g } from "../9410/28544";
import { Rm, II, dK, W, Co } from "../9410/94839";
var l = o;
export function $$v0({
  isReadOnly: e,
  isPagesOpen: t,
  isComparingChanges: i,
  hasMultiplePageTypes: o,
  hasScrollLine: v,
  onClickNewPage: E,
  onTogglePages: T,
  onCanvasSearch: w,
  onPageContextMenu: S,
  recordingKey: j,
  title: I,
  tooltipText: k
}) {
  let N = dh();
  let A = nn();
  let O = isDevHandoffEditorType();
  let L = useIsFullscreenOverview();
  let R = O || L;
  let D = o || getFeatureFlags().interop_pages;
  let M = (e || R) && !!w;
  let P = useCallback(e => {
    jo(e);
    t || S?.({
      nodeId: N,
      clientX: e.clientX,
      clientY: e.clientY
    });
  }, [S, t, N]);
  return jsxs(B, {
    onClick: e ? T : void 0,
    hasScrollLine: v,
    children: [M ? jsxs(H, {
      children: [jsxs(ButtonPrimitive, {
        onClick: T,
        className: Rm,
        htmlAttributes: {
          onContextMenu: P
        },
        recordingKey: generateRecordingKey(j, "collapsedRow"),
        children: [jsx("span", {
          className: l()(II, {
            [dK]: L
          }),
          children: jsx(_$$g, {
            isExpanded: t
          })
        }), jsx("span", {
          className: W,
          "data-onboarding-key": "pages-panel-toggle",
          children: t ? jsx("span", {
            children: I
          }) : A || ""
        })]
      }), jsx("div", {
        className: l()(Co, {
          [dK]: i
        }),
        children: jsx(_$$_, {
          onClick: w
        })
      })]
    }) : jsx(H, {
      children: jsxs(ButtonPrimitive, {
        onClick: T,
        className: Rm,
        recordingKey: generateRecordingKey(j, "collapsedRow"),
        children: [jsx(_$$g, {
          isExpanded: t
        }), jsx("span", {
          children: I
        })]
      })
    }), !e && jsx("div", {
      className: cssBuilderInstance.flex.relative.mr8.justifyEnd.itemsCenter.$,
      children: D ? jsx(_$$t, {
        recordingKey: j
      }) : jsx(_$$i, {
        onClick: E,
        recordingKey: generateRecordingKey(j, "newPage"),
        tooltipText: k
      })
    })]
  });
}
export const J = $$v0;