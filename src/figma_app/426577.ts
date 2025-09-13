import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo } from "react";
import { r as _$$r } from "../905/271565";
import { w as _$$w } from "../905/359860";
import { N as _$$N } from "../905/778966";
import { z as _$$z } from "../905/828520";
import { v as _$$v } from "../905/717395";
import { A as _$$A } from "../905/251970";
import { DesignGraphElements } from "../figma_app/763686";
import { analyticsEventManager } from "../905/449184";
import { debugState } from "../905/407919";
import { getFilteredFeatureFlags } from "../905/717445";
import { _o } from "../905/125333";
import { a as _$$a } from "../905/847494";
import { N as _$$N2 } from "../figma_app/176280";
import { C as _$$C } from "../figma_app/938538";
import { X } from "../905/350405";
import { renderI18nText, getI18nString } from "../905/303541";
import { vn } from "../figma_app/976749";
import { mapEditorTypeToProductType } from "../figma_app/314264";
import { AP } from "../figma_app/755783";
import { il, w6 } from "../figma_app/789050";
import { c as _$$c } from "../figma_app/765216";
import { hg, zk } from "../figma_app/947348";
import { getFeatureFlags } from "../905/601108";
import { h as _$$h } from "../905/207101";
import { handleAtomEvent } from "../905/502364";
import { c as _$$c2 } from "../905/370443";
import { e as _$$e } from "../905/621515";
import { f as _$$f } from "../905/940356";
import { N as _$$N3 } from "../figma_app/268271";
import { rq } from "../905/425180";
import { yc_, PXv } from "../figma_app/6204";
import { buildUploadUrl } from "../figma_app/169182";
import { E as _$$E } from "../905/453826";
import { y as _$$y } from "../905/129046";
let a = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M9.104 11.05c-.463-1.18.654-2.347 1.832-1.985l.114.04v.001l7.002 2.751.12.053c1.156.565 1.092 2.259-.105 2.734l-.123.043-2.492.765-.767 2.493c-.405 1.315-2.194 1.42-2.777.227l-.052-.12-2.75-7.001zm1.58-1.013a.5.5 0 0 0-.648.648l2.751 7.001a.5.5 0 0 0 .911.044l.032-.079.923-2.998 2.997-.922a.5.5 0 0 0 .037-.943zm-2.538 2.11a.5.5 0 0 1 .708.707l-.89.887A1 1 0 0 1 8 14v1a1 1 0 0 1-1 1H6l-.103-.005A1 1 0 0 1 5 15v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 .258.034zM6 15h1v-1H6zm9-10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1l-.102-.005a1 1 0 0 1-.157-.03l-.887.889a.5.5 0 0 1-.707-.708l.887-.888A1 1 0 0 1 13 7V6a1 1 0 0 1 1-1zm-1 2h1V6h-1z"
    })
  });
});
let o = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M8.281 11.401a.5.5 0 0 1 .936.352l-.609 1.625-.16.395A8 8 0 0 1 7.774 15h.001l-.006.008a8 8 0 0 1-.438.597l-.084.1-.113.135-.014.012a8 8 0 0 1-.347.374L6 17h3.535a5 5 0 0 0 3.328-1.274c.213-.19.542-.2.743.001a.47.47 0 0 1 0 .678A6 6 0 0 1 9.535 18H6a1 1 0 0 1-.707-1.707l.774-.774.258-.272.212-.247a7 7 0 0 0 1.135-1.974zm.32-5.393a.5.5 0 0 1 .399.49v1.793l1.985 1.985A2 2 0 0 1 14 11.998c0 .37-.104.716-.28 1.014l1.987 1.986H17.5l.1.01a.5.5 0 0 1 .4.49v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.793l-1.986-1.986a2 2 0 0 1-2.735-2.735L8.292 8.997H6.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h2zM16 16.998h1v-1h-1zm-4-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2m6.15-4.987a1 1 0 0 1 .655 1.583l-.098.113-.774.774a7 7 0 0 0-.24.254L17.464 9a7 7 0 0 0-.996 1.627l-.141.347-.61 1.624a.5.5 0 0 1-.936-.352l.61-1.624a8 8 0 0 1 1.04-1.922q.056-.074.113-.146a8 8 0 0 1 .68-.78L18 7h-3.535c-1.258 0-2.435.47-3.332 1.272-.212.19-.54.2-.741-.001a.47.47 0 0 1 0-.677A6 6 0 0 1 14.465 6H18zM7 7.998h1v-1H7z"
    })
  });
});
let G = "completed_initial_vem_onboarding";
function V(e) {
  let {
    show,
    isShowing,
    complete,
    uniqueId
  } = _$$e({
    overlay: yc_,
    priority: _$$N3.DEFAULT_MODAL
  });
  let s = (getFeatureFlags().ce_il_var_width_onboarding ?? !1) && !e.isVarWidthPointDisabled;
  let o = _$$f("seen_draw_secondary_toolbelt_onboarding");
  _$$h(() => {
    show({
      canShow: () => s && !!o?.createdAt
    });
  });
  _$$E(uniqueId, G, () => {
    show({
      canShow: () => s
    });
  });
  let l = {
    type: "button",
    label: renderI18nText("draw.onboarding.dismiss_button"),
    onClick: complete,
    ctaTrackingDescriptor: _$$c2.GOT_IT
  };
  let d = {
    type: "link",
    label: renderI18nText("draw.onboarding.first_time.learn_more"),
    href: "https://help.figma.com/hc/articles/360039957634",
    ctaTrackingDescriptor: _$$c2.LEARN_MORE
  };
  return jsx(rq, {
    description: renderI18nText("draw.onboarding.variable_width_stroke.description"),
    disableHighlight: !0,
    isShowing,
    media: jsx(_$$y, {
      src: buildUploadUrl("c6374c499cbe210652f58bcebbbdf3b61a64d8bc"),
      alt: "",
      aspectRatio: 1920 / 1080
    }),
    onClose: complete,
    onTargetLost: complete,
    primaryCta: l,
    secondaryCta: d,
    targetKey: hg,
    title: renderI18nText("draw.onboarding.variable_width_stroke.title"),
    trackingContextName: "draw_onboarding",
    userFlagOnShow: "seen_draw_variable_width_stroke_onboarding"
  });
}
function H() {
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: PXv,
    priority: _$$N3.DEFAULT_MODAL
  });
  _$$h(() => {
    show({
      canShow: () => getFeatureFlags().ce_il_onboarding ?? !1
    });
  });
  let i = _$$f("seen_draw_variable_width_stroke_onboarding");
  let a = () => {
    i?.createdAt || handleAtomEvent({
      id: G
    });
    complete();
  };
  let s = {
    type: "button",
    label: renderI18nText("draw.onboarding.dismiss_button"),
    onClick: a,
    ctaTrackingDescriptor: _$$c2.GOT_IT
  };
  return jsx(rq, {
    description: renderI18nText("draw.onboarding.secondary_toolbelt.description"),
    disableHighlight: !0,
    isShowing,
    onClose: a,
    onTargetLost: complete,
    primaryCta: s,
    targetKey: zk,
    title: renderI18nText("draw.onboarding.secondary_toolbelt.title"),
    trackingContextName: "draw_onboarding",
    userFlagOnShow: "seen_draw_secondary_toolbelt_onboarding"
  });
}
export function $$z0({
  activeToolId: e,
  activateTool: t,
  getShortcutTextForTool: r,
  closeSecondaryToolbelt: i
}) {
  let w = AP();
  let O = vn();
  let R = getFilteredFeatureFlags().ce_il_root ? () => {
    t(DesignGraphElements.SELECT);
  } : void 0;
  let L = getFilteredFeatureFlags().ce_il_vem_move && jsx(_$$N2, {
    recordingKey: "toolbarView.toolVemMove",
    toolId: DesignGraphElements.SELECT,
    icon: jsx(a, {}),
    onActivateTool: t,
    secondary: !0,
    activeToolId: e,
    tooltipText: getI18nString("fullscreen_actions.set-tool-default"),
    tooltipShortcut: r(DesignGraphElements.SELECT),
    disabled: !w
  });
  let P = jsx(_$$N2, {
    activeToolId: e,
    disabled: !w,
    icon: jsx(_$$r, {}),
    onActivateTool: t,
    onDeactivateTool: R,
    recordingKey: "toolbarView.toolBend",
    secondary: !0,
    toolId: DesignGraphElements.VECTOR_BEND,
    tooltipShortcut: r(DesignGraphElements.VECTOR_BEND),
    tooltipText: getI18nString("fullscreen_actions.bend-tool-tooltip")
  });
  let D = il();
  let k = w6();
  let M = !w || !D;
  let F = mapEditorTypeToProductType(debugState.getState().selectedView.editorType);
  let j = getFilteredFeatureFlags().ce_il_var_width_points && jsx(_$$N2, {
    activeToolId: e,
    disabled: M,
    icon: jsx(o, {}),
    onActivateTool: () => {
      e === DesignGraphElements.VECTOR_VAR_WIDTH_POINT ? (t(DesignGraphElements.SELECT), analyticsEventManager.trackDefinedEvent("illustration.web_variable_width_mode_untoggle", {
        productType: F
      })) : (t(DesignGraphElements.VECTOR_VAR_WIDTH_POINT), analyticsEventManager.trackDefinedEvent("illustration.web_variable_width_mode_toggle", {
        productType: F
      }));
    },
    onDeactivateTool: () => {
      R?.();
      analyticsEventManager.trackDefinedEvent("illustration.web_variable_width_mode_untoggle", {
        productType: F
      });
    },
    onboardingKey: hg,
    recordingKey: "toolbarView.toolVarWidthPoint",
    secondary: !0,
    toolId: DesignGraphElements.VECTOR_VAR_WIDTH_POINT,
    tooltipShortcut: r(DesignGraphElements.VECTOR_VAR_WIDTH_POINT),
    tooltipText: k
  });
  let U = jsx(_$$N2, {
    activeToolId: e,
    disabled: !w,
    icon: jsx(_$$w, {}),
    onActivateTool: t,
    onDeactivateTool: R,
    recordingKey: "toolbarView.toolPaintBucket",
    secondary: !0,
    toolId: DesignGraphElements.VECTOR_PAINT_BUCKET,
    tooltipShortcut: r(DesignGraphElements.VECTOR_PAINT_BUCKET),
    tooltipText: getI18nString("fullscreen_actions.set-tool-paint-bucket")
  });
  let B = jsx(_$$N2, {
    recordingKey: "toolbarView.toolVectorLasso",
    toolId: DesignGraphElements.VECTOR_LASSO,
    icon: jsx(_$$N, {}),
    onActivateTool: t,
    secondary: !0,
    onDeactivateTool: R,
    activeToolId: e,
    tooltipText: getI18nString("fullscreen_actions.set-tool-vector-lasso"),
    tooltipShortcut: r(DesignGraphElements.VECTOR_LASSO)
  });
  let G = getFilteredFeatureFlags().ce_il_vem_cut_tool && jsx(_$$N2, {
    activeToolId: e,
    disabled: !w,
    icon: jsx(_$$z, {}),
    onActivateTool: t,
    onDeactivateTool: R,
    recordingKey: "toolbarView.toolCut",
    secondary: !0,
    toolId: DesignGraphElements.VECTOR_CUT,
    tooltipShortcut: r(DesignGraphElements.VECTOR_CUT),
    tooltipText: getI18nString("fullscreen_actions.set-tool-cut")
  });
  let z = jsx(_$$N2, {
    activeToolId: e,
    disabled: !w,
    icon: jsx(_$$v, {}),
    onActivateTool: t,
    onDeactivateTool: R,
    onboardingKey: zk,
    recordingKey: "toolbarView.toolShapeBuilder",
    secondary: !0,
    toolId: DesignGraphElements.SHAPE_BUILDER,
    tooltipShortcut: r(DesignGraphElements.SHAPE_BUILDER),
    tooltipText: getI18nString("fullscreen_actions.shape_builder_tool")
  });
  let W = jsxs(Fragment, {
    children: [P, U, jsx(X, {})]
  });
  let K = w && jsxs(Fragment, {
    children: [jsx(H, {}), jsx(V, {
      isVarWidthPointDisabled: M
    }), L, B, jsx(X, {
      extended: !0
    }), z, U, P, G, j, jsx(X, {
      extended: !0
    })]
  });
  return getFilteredFeatureFlags().ce_il_pen_palette || w ? jsxs(_$$a, {
    ariaLabel: O ? getI18nString("fullscreen.toolbar.aria-label-pen") : getI18nString("fullscreen.toolbar.vector_editing_aria_label"),
    children: [O && !w && e === DesignGraphElements.VECTOR_PEN && jsxs(Fragment, {
      children: [jsx(_$$c, {
        atom: _o
      }), jsx(X, {})]
    }), getFilteredFeatureFlags().ce_il_root ? K : W, jsx(_$$C, {
      icon: jsx(_$$A, {}),
      secondary: !0,
      onClick: i,
      tooltipText: getI18nString("fullscreen.toolbar.secondary_toolbar.close"),
      recordingKey: "toolbarView.toolLeaveVectorEditMode"
    })]
  }) : jsx(Fragment, {});
}
export const A = $$z0;