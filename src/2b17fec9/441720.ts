import { memo } from "react";
import { jsx } from "react/jsx-runtime";
import { H } from "../figma_app/7677";
import { y as _$$y } from "../905/175043";
import { t } from "../figma_app/532797";
import { O } from "../905/936515";
import { B } from "../figma_app/327027";
import { P } from "../figma_app/483257";
import { s as _$$s } from "../1291/549862";
import { X } from "../figma_app/668312";
import { f as _$$f } from "../905/809171";
import { P as _$$P } from "../figma_app/178683";
import { t as _$$t } from "../figma_app/700609";
import { V } from "../905/291719";
import { NLJ } from "../figma_app/763686";
import { Pt } from "../figma_app/806412";
import { N } from "../figma_app/176280";
import { I as _$$I } from "../figma_app/131348";
import { getI18nString } from "../905/303541";
import { D1 } from "../9410/67768";
import { N as _$$N } from "../figma_app/57000";
import { pN } from "../9410/983733";
import { y as _$$y2 } from "../figma_app/873852";
import { s2, BC, E$ } from "../figma_app/300024";
import { I1 } from "../9410/595754";
import { v0 } from "../9410/645772";
import { hj, fo, Ls } from "../9410/307066";
let u = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M9.5 13.123v-3a4 4 0 1 1 5 0v3l4.871 1.949A1 1 0 0 1 20 16v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 .629-.928zm1-.123h3V9.599a3 3 0 1 0-3 0zm-.5 1-5 2v2h14v-2l-5-2zm-3 6.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5",
      clipRule: "evenodd"
    })
  });
});
export let $$N0 = {
  SELECT: {
    toolId: NLJ.SELECT,
    getText: () => getI18nString("fullscreen_actions.set-tool-default-desc-figjam"),
    icon: jsx(H, {}),
    smallIcon: jsx(_$$y, {}),
    recordingKey: hj.SELECT
  },
  HAND: {
    toolId: NLJ.HAND,
    getText: () => getI18nString("fullscreen_actions.set-tool-hand"),
    icon: jsx(t, {}),
    smallIcon: jsx(O, {}),
    recordingKey: hj.HAND,
    onboardingKey: _$$N
  },
  STICKY: {
    toolId: NLJ.STICKY,
    getText: () => getI18nString("fullscreen_actions.set-tool-sticky"),
    recordingKey: hj.STICKY,
    onboardingKey: s2
  },
  SHAPE_COLLAGE: {
    toolId: NLJ.SHAPE_WHITEBOARD_SQUARE,
    getText: () => getI18nString("whiteboard.delightful_toolbar.shapes_and_connectors_label"),
    recordingKey: hj.SHAPES,
    onboardingKey: BC
  },
  TEXT: {
    toolId: NLJ.TYPE,
    getText: () => getI18nString("fullscreen_actions.set-tool-type"),
    icon: jsx(B, {}),
    recordingKey: hj.TEXT
  },
  SECTION: {
    toolId: NLJ.SECTION,
    getText: () => getI18nString("fullscreen_actions.set-tool-section"),
    icon: jsx(P, {}),
    recordingKey: hj.SECTION,
    onboardingKey: pN
  },
  TABLE: {
    toolId: NLJ.TABLE,
    getText: () => getI18nString("fullscreen_actions.set-tool-table"),
    icon: jsx(_$$s, {}),
    recordingKey: hj.TABLE
  },
  STAMP: {
    toolId: NLJ.STAMP,
    getText: () => getI18nString("fullscreen_actions.set-tool-stamp"),
    icon: jsx(u, {}),
    recordingKey: hj.STAMP,
    onboardingKey: E$
  },
  COMMENTS: {
    toolId: NLJ.COMMENTS,
    getText: e => e?.numUnreadComments != null && e.numUnreadComments > 0 ? getI18nString("fullscreen.accessibility.view_comments_with_unreads") : getI18nString("fullscreen.accessibility.view_comments"),
    getIcon: e => e?.numUnreadComments != null && e?.numUnreadComments > 0 ? jsx(X, {}) : jsx(_$$f, {}),
    recordingKey: hj.COMMENT
  },
  ACTIONS: {
    toolId: _$$y2,
    getText: () => getI18nString("qa.extensions.tooltip_actions"),
    getIcon: e => e?.hasAIPermission ? jsx(_$$P, {}) : jsx(_$$t, {}),
    recordingKey: hj.ACTIONS,
    onboardingKey: D1
  }
};
export function $$A2({
  staticToolConfig: e,
  toolbarState: t,
  forceToRenderActive: i,
  extendedData: r,
  disabled: a
}) {
  let {
    toolId,
    icon,
    getIcon,
    recordingKey,
    onboardingKey,
    getText
  } = e;
  let {
    handleToolAction,
    activeToolId
  } = t;
  let m = getIcon?.(r) ?? icon;
  let f = v0();
  return jsx(N, {
    toolId,
    icon: m ?? jsx(V, {}),
    tooltipText: getText(r),
    tooltipShortcut: f(toolId),
    onboardingKey,
    recordingKey: Pt(I1, recordingKey),
    disabled: a,
    onActivateTool: e => {
      e === _$$y2 ? handleToolAction({
        type: fo.TOGGLE_ACTIONS
      }) : e === NLJ.COMMENTS ? handleToolAction({
        type: fo.TOGGLE_COMMENTS
      }) : handleToolAction({
        type: fo.ACTIVATE_TOOL,
        toolId: e
      });
    },
    activeToolId: i ? toolId : activeToolId
  });
}
export let $$O1 = {
  MOVE: {
    overlayId: Ls.MoveTools,
    tools: [$$N0.SELECT, $$N0.HAND],
    recordingKey: "toolGroupMove",
    getTooltipText: () => getI18nString("fullscreen.flyout.move_tools")
  }
};
export function $$k3({
  staticToolGroupConfig: e,
  toolbarState: t
}) {
  let {
    overlayId,
    tools,
    getTooltipText,
    recordingKey,
    onboardingKey
  } = e;
  let {
    handleToolAction,
    activeToolId
  } = t;
  let c = v0();
  let u = tools.map(e => {
    let {
      toolId,
      icon,
      smallIcon,
      onboardingKey: _onboardingKey,
      recordingKey: _recordingKey,
      getText,
      getIcon
    } = e;
    return {
      toolId,
      icon: getIcon?.() ?? icon ?? jsx(V, {}),
      smallIcon,
      text: getText(),
      shortcutText: c(toolId),
      onboardingKey: _onboardingKey,
      recordingKey: _recordingKey ?? ""
    };
  });
  return jsx(_$$I, {
    activeToolId,
    items: u,
    onActivateTool: e => {
      handleToolAction({
        type: fo.ACTIVATE_TOOL,
        toolId: e
      });
    },
    onboardingKey,
    overlayId,
    recordingKey: Pt(I1, recordingKey),
    tooltipText: getTooltipText()
  });
}
export const Yk = $$N0;
export const AO = $$O1;
export const iy = $$A2;
export const Z9 = $$k3;