import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useCallback, useMemo, useState, useEffect, memo } from "react";
import { useSelector } from "react-redux";
import { eBU } from "../figma_app/822011";
import { LayoutSizingMode, StackBindingsCpp, HandoffBindingsCpp, AppStateTsApi, IAssertResource, UIVisibilitySetting } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { y6 } from "../figma_app/681951";
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from "../905/751457";
import { lerp, clamp } from "../figma_app/492908";
import { selectWithShallowEqual } from "../905/103090";
import { getI18nString, renderI18nText } from "../905/303541";
import { v4 } from "../figma_app/655139";
import { uQ } from "../figma_app/311375";
import { getScaledValueWithUnit } from "../figma_app/120227";
import { getCanvasViewState } from "../905/758967";
import { EditorPreferencesApi } from "../figma_app/740163";
import { currentSessionLocalIDString, clearSelection, addToSelection, setSelectedDevModePropertiesPanelTab } from "../figma_app/741237";
import { getObservableOrFallback, getObservableValue } from "../figma_app/84367";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { Bf } from "../figma_app/249941";
import { MO } from "../3682/618608";
import { pc } from "../figma_app/152690";
import { O as _$$O, w as _$$w } from "../3674/344857";
import { useCanAccessFullDevMode, useCanUseDevModeDemoFile } from "../figma_app/473493";
import { e as _$$e } from "../905/383776";
import { useIsFullscreenOverview, useIsFullscreenDevModeComponentBrowser } from "../figma_app/88239";
import { Gb } from "../figma_app/933328";
import { ED } from "../figma_app/504823";
import { isVsCodeEnvironment } from "../905/858738";
import { useIsProgressBarHiddenOrLocked, useAppModelProperty } from "../figma_app/722362";
import { W as _$$W } from "../441/503702";
import { Lk } from "../figma_app/122682";
import { FEditorType } from "../figma_app/53721";
import { A as _$$A } from "../9410/188255";
import { TrackingProvider } from "../figma_app/831799";
import { e as _$$e2 } from "../905/621515";
import { selectCurrentUser, getUserId } from "../905/372672";
import { getUserPlan } from "../figma_app/502247";
import { N as _$$N } from "../figma_app/268271";
import { Ypw } from "../figma_app/6204";
import { useAtomWithSubscription, useAtomValueAndSetter, Xr } from "../figma_app/27355";
import { PY, go, Px, Bl, kO, HO, aN } from "../figma_app/57551";
import { useSingleEffect } from "../905/791079";
import { buildUploadUrl } from "../figma_app/169182";
import { UpgradeAction } from "../905/370443";
import { Z as _$$Z } from "../905/104740";
import { getViewportInfo, viewportToScreen } from "../figma_app/62612";
import { INSPECT_PANEL } from "../figma_app/80938";
import { _o } from "../figma_app/701001";
import { GQ } from "../figma_app/32128";
import { findNodeByCriteria, findFirstNodeOfType, navigateAndSelect } from "../figma_app/202626";
import { w as _$$w2 } from "../905/129046";
import { rq } from "../905/425180";
import { NotModalType, Ui3PositionType } from "../905/11928";
import { F_ } from "../905/748636";
import { fullscreenValue } from "../figma_app/455680";
import { xT } from "../figma_app/195407";
import { uI, Ov, gh } from "../figma_app/598952";
import { X as _$$X } from "../905/482718";
import { b as _$$b } from "../3674/400466";
import { pO } from "../figma_app/42945";
import { G as _$$G } from "../9410/729166";
import { G as _$$G2, b as _$$b2 } from "../9410/59055";
import { _ as _$$_ } from "../441/351942";
import { c as _$$c2 } from "../9410/794676";
import { Nz, X5 } from "../9410/728210";
import { K as _$$K } from "../b2835def/230877";
import { l as _$$l } from "../9410/331071";
import { J as _$$J } from "../9410/165619";
import { s as _$$s } from "../3682/764731";
import { SI } from "../figma_app/856806";
import { u as _$$u } from "../441/357009";
import { G as _$$G3 } from "../figma_app/373780";
import { sk } from "../9410/973081";
import { qn, XI } from "../9410/793186";
import { v as _$$v } from "../9410/916286";
import { _q, PA } from "../figma_app/957070";
let k = "dev_handoff_canvas_pill--dimension--WEwpp";
let j = "dev_handoff_canvas_pill--size--9ZpSZ";
function N(e) {
  return e === LayoutSizingMode.HUG_CONTENT ? getI18nString("inspect_panel.properties.hug") : e === LayoutSizingMode.FILL_CONTAINER ? "100%" : e === LayoutSizingMode.FIXED ? getI18nString("inspect_panel.properties.fixed") : "";
}
function I(e) {
  return useDeepEqualSceneValue((e, t) => {
    let n = e?.get(t ?? "");
    if (!n) return null;
    let o = "INSTANCE" === n.type || "SYMBOL" === n.type || n.isStateGroup || n.isInstanceSublayer || n.isSymbolSublayer;
    let i = !0;
    "TEXT" === n.type && (n.autoRename || n.characters.substring(0, 10) === n.name.substring(0, 10)) && (i = !1);
    return {
      guid: n.guid,
      name: n.name,
      showName: i,
      type: n.type,
      isFigmaPurple: o,
      boundingBox: n.absoluteBoundingBox,
      hasEnabledStaticImagePaint: n.hasEnabledStaticImagePaint,
      isState: n.isState,
      isStateGroup: n.isStateGroup,
      isUIElement: !n.isSection && !n.isStateGroup,
      stackCounterAlignItems: n.stackCounterAlignItems,
      stackMode: n.stackMode,
      isGroup: n.isGroup,
      canHaveStatus: n.canHaveStatus,
      hasStatus: n.hasStatus,
      horizontalSizeMode: N(StackBindingsCpp?.stackHorizontalSize(n.guid)),
      verticalSizeMode: N(StackBindingsCpp?.stackVerticalSize(n.guid)),
      size: n.size,
      objectsPanelThumbnailId: n.objectsPanelThumbnailId
    };
  }, e);
}
function E(e) {
  let t = I(e.guid);
  let n = getObservableOrFallback(EditorPreferencesApi().showGuids);
  let r = uQ();
  let a = useRef(null);
  let l = useCallback(e => -function (e) {
    let t = lerp(0, 2, (e - .1) * 5);
    return clamp(t, 0, 2);
  }(e), []);
  let d = t && (t.hasStatus || t.canHaveStatus && t.guid === r) ? e => e - 20 : void 0;
  return t && "SECTION" !== t.type ? jsx(MO, {
    ref: a,
    node: t,
    offsetX: -2,
    offsetY: l,
    largeBorderRadius: !0,
    maxWidth: d,
    dataTestId: "devHandoffLayerNamePill",
    children: jsxs("div", {
      className: "dev_handoff_canvas_pill--layerName--eX5Zu",
      children: [jsx(Bf, {
        guid: e.guid,
        useUI3Icon: !0
      }), t.showName && jsxs("span", {
        className: "dev_handoff_canvas_pill--pillText--7B3-h ellipsis--ellipsis--Tjyfa",
        children: [t.name, n && ` (${e.guid})`]
      })]
    })
  }, e.guid) : null;
}
let R = e => e.toLocaleString("en", {
  maximumFractionDigits: 5,
  useGrouping: !1
});
function B(e, t = 0) {
  let n = v4();
  let o = getScaledValueWithUnit(n, t, R);
  let {
    variable,
    variableDisplayName
  } = pc(e, t);
  return variable ? {
    value: variableDisplayName
  } : {
    value: o
  };
}
function O(e) {
  let t = I(e.guid);
  let {
    value
  } = B("WIDTH", t?.size.x ?? 0);
  let {
    value: _value
  } = B("HEIGHT", t?.size.y ?? 0);
  let a = function (e) {
    let t = getObservableOrFallback(getCanvasViewState().activeCanvasCurrentZoom);
    return useMemo(() => !!e && HandoffBindingsCpp?.isTLFCanvasHighlightBoxShown(e, t), [e, t]);
  }(e.guid);
  let d = useCallback(e => function (e, t) {
    let n = t ? 12 : 2;
    let o = lerp(0, n, (e - .1) * 5);
    return clamp(o, 0, n);
  }(e, a), [a]);
  return t && t.isUIElement ? jsx(MO, {
    node: t,
    dataTestId: "devHandoffSizePill",
    centered: !0,
    bottom: !0,
    offsetY: d,
    largeBorderRadius: !0,
    children: jsxs("div", {
      className: "dev_handoff_canvas_pill--sizeInfo--pKiuc text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: [jsx("span", {
        className: k,
        children: renderI18nText("fullscreen.properties_panel.transform_panel.w")
      }), jsx("span", {
        children: t.horizontalSizeMode
      }), jsx("span", {
        className: j,
        "data-testid": "canvasPillWidth",
        children: value
      }), jsx("span", {}), jsx("span", {
        className: k,
        children: renderI18nText("fullscreen.properties_panel.transform_panel.h")
      }), jsx("span", {
        children: t.verticalSizeMode
      }), jsx("span", {
        className: j,
        "data-testid": "canvasPillHeight",
        children: _value
      }), jsx("span", {})]
    })
  }, e.guid) : null;
}
function w() {
  let {
    hoveredNode,
    selection
  } = selectWithShallowEqual(e => {
    let t = Object.keys(e.mirror.sceneGraphSelection)[0];
    let n = e.mirror.appModel.hoveredNode;
    return {
      hoveredNode: n === currentSessionLocalIDString ? null : n,
      selection: t === currentSessionLocalIDString ? null : t
    };
  });
  let n = getObservableValue(AppStateTsApi?.hoverState().isTLFHighlightHeaderHovered, !1);
  let r = useMemo(() => !!hoveredNode && HandoffBindingsCpp?.isTLFCanvasHighlightBoxEligible(hoveredNode) && (n || selection === hoveredNode), [hoveredNode, n, selection]);
  let [a, d] = useState(!1);
  let s = useCallback(e => {
    e.altKey !== a && d(e.altKey);
  }, [a]);
  return (useEffect(() => (document.addEventListener("pointermove", s), document.addEventListener("keyup", s), document.addEventListener("keydown", s), () => {
    document.removeEventListener("pointermove", s);
    document.removeEventListener("keyup", s);
    document.removeEventListener("keydown", s);
  })), a) ? null : jsxs(Fragment, {
    children: [selection && hoveredNode === selection && jsx(O, {
      guid: selection
    }), hoveredNode && !r && jsx(E, {
      guid: hoveredNode
    })]
  });
}
let es = "dev-mode-demo-file-tour-primary-cta";
let eu = "dev-mode-demo-file-tour-secondary-cta";
function ec({
  nodePosition: e,
  xOffset: t,
  yOffset: n
}) {
  let o = _o();
  let i = selectCurrentUser();
  let r = GQ();
  return {
    top: e.y + (n + o),
    left: e.x + (i ? t + r : t)
  };
}
let eg = {
  secondaryButton: {
    border: "x1iakgj3",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    borderRadius: "x19y5rnk",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    display: "x78zum5",
    padding: "xf67zum",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    justifyContent: "xl56j7k",
    alignItems: "x6s0dn4",
    minHeight: "x4wtjwi",
    background: "x11g6tue",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    fontWeight: "x1qxcl5b",
    color: "x1tk3asg",
    $$css: !0
  },
  primaryButton: {
    borderRadius: "x19y5rnk",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    display: "x78zum5",
    padding: "xf67zum",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    justifyContent: "xl56j7k",
    alignItems: "x6s0dn4",
    minHeight: "x4wtjwi",
    backgroundColor: "x1iirw1x",
    fontWeight: "x1qxcl5b",
    color: "x1a33sea",
    $$css: !0
  }
};
function ef(e) {
  var t;
  let [n, a] = useState(!1);
  let l = useSelector(e => e.mirror.sceneGraph);
  let d = _$$Z();
  t = l;
  let s = findNodeByCriteria({
    nodeType: "INSTANCE",
    sceneGraph: t,
    preferredName: "Hand Held Button",
    backupNames: [".Desktop / Asset / Visual Media / Key art"]
  }) || findFirstNodeOfType(t, "INSTANCE");
  let u = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  let {
    top,
    left
  } = ec({
    nodePosition: viewportToScreen(u, s ? s.absoluteBoundingBox : {
      x: 0,
      y: 0
    }, !0),
    xOffset: -55,
    yOffset: 50
  });
  let p = {
    top,
    left,
    pointerOffset: 20,
    pointerPosition: F_.TOP
  };
  return (useSingleEffect(() => {
    queueMicrotask(async function () {
      s && (await d({
        centerX: s.absoluteBoundingBox.x + 120,
        centerY: s.absoluteBoundingBox.y + 140,
        scale: 1
      }), a(!0));
    });
  }), s) ? jsx(rq, {
    description: renderI18nText("dev_mode_demo_file.tour.annotations_description"),
    emphasized: !0,
    fixedPosition: !0,
    isShowing: n,
    location: p,
    media: jsx(_$$w2, {
      src: buildUploadUrl("7e8f6ecac4e446628808f8f6476d3b921ea86e41"),
      aspectRatio: 16 / 9,
      hideBorder: !0
    }),
    onClose: e.onClose,
    primaryCta: {
      label: renderI18nText("dev_mode_demo_file.tour.next_button"),
      ctaTrackingDescriptor: UpgradeAction.NEXT,
      type: "button",
      onClick: e.onPrimaryCtaClick,
      dataTestId: es,
      variantOverride: "custom",
      customVariantStyles: eg.primaryButton
    },
    secondaryCta: {
      label: renderI18nText("dev_mode_demo_file.tour.back_button"),
      ctaTrackingDescriptor: UpgradeAction.BACK,
      type: "button",
      onClick: e.onSecondaryCtaClick,
      dataTestId: eu,
      variantOverride: "custom",
      customVariantStyles: eg.secondaryButton
    },
    stepCounter: {
      stepNum: 3,
      totalNumSteps: PY
    },
    title: renderI18nText("dev_mode_demo_file.tour.annotations_title"),
    trackingContextName: "Dev Mode Demo File Tour Annotations Tooltip",
    zIndex: NotModalType.UNSET
  }) : null;
}
function e_(e) {
  var t;
  let [n, a] = useState(!1);
  let d = useSelector(e => e.mirror.sceneGraph);
  let s = _$$Z();
  t = d;
  let u = findNodeByCriteria({
    nodeType: "INSTANCE",
    sceneGraph: t,
    preferredName: "Next Button",
    backupNames: ["Get Started Button"]
  }) || findFirstNodeOfType(t, "INSTANCE");
  useSingleEffect(() => {
    queueMicrotask(async function () {
      u && (clearSelection(), addToSelection([u.guid]), fullscreenValue.commit(), await s({
        centerX: u.absoluteBoundingBox.x + 165,
        centerY: u.absoluteBoundingBox.y + 50,
        scale: 1.2
      }), function (e) {
        let t = document.getElementById(INSPECT_PANEL);
        t.style.transition = "scroll 0.3s ease-in-out";
        setTimeout(() => {
          t.scrollTop = e;
          t.style.removeProperty("transition");
        }, 0);
      }(xT(uI)?.offsetTop ?? 0), a(!0));
    });
    setSelectedDevModePropertiesPanelTab(IAssertResource.PRIMARY);
  });
  return jsx(rq, {
    arrowPosition: F_.RIGHT_BODY,
    description: renderI18nText("dev_mode_demo_file.tour.code_connect_description"),
    disableHighlight: !0,
    emphasized: !0,
    isShowing: n,
    media: jsx(_$$w2, {
      src: buildUploadUrl("5134c24863057101ffd588119e4c85aeeee60126"),
      aspectRatio: 16 / 9,
      hideBorder: !0
    }),
    onClose: e.onPrimaryCtaClick,
    onTargetLost: e.onPrimaryCtaClick,
    pointToLeftEdge: !0,
    pointToTopEdge: !0,
    primaryCta: {
      label: renderI18nText("dev_mode_demo_file.tour.done_button"),
      ctaTrackingDescriptor: UpgradeAction.DONE,
      type: "button",
      onClick: e.onPrimaryCtaClick,
      dataTestId: es,
      variantOverride: "custom",
      customVariantStyles: eg.primaryButton
    },
    secondaryCta: {
      label: renderI18nText("dev_mode_demo_file.tour.back_button"),
      ctaTrackingDescriptor: UpgradeAction.BACK,
      type: "button",
      onClick: e.onSecondaryCtaClick
    },
    shouldRepositionOnTargetLost: !1,
    stepCounter: {
      stepNum: 4,
      totalNumSteps: PY
    },
    targetKey: uI,
    title: renderI18nText("dev_mode_demo_file.tour.code_connect_title"),
    trackingContextName: "Dev Mode Demo File Tour Code Connect Tooltip"
  });
}
function eC(e) {
  var t;
  let [n, a] = useState(!1);
  let d = useAtomWithSubscription(go);
  let s = useSelector(e => e.mirror.sceneGraph);
  let u = _$$Z();
  t = s;
  let c = findNodeByCriteria({
    nodeType: "FRAME",
    sceneGraph: t,
    preferredName: "Epoch / Mobile / Library A (Scrolled)",
    backupNames: ["Epoch / Mobile / Library A"]
  }) || findFirstNodeOfType(t, "FRAME");
  useSingleEffect(() => {
    queueMicrotask(async function () {
      c && (await navigateAndSelect({
        navigate: u,
        guidToFocus: c?.guid,
        guidToSelect: c.guid
      }), a(!0));
    });
    setSelectedDevModePropertiesPanelTab(IAssertResource.PRIMARY);
  });
  return jsx(rq, {
    arrowPosition: F_.RIGHT_BODY,
    description: renderI18nText("dev_mode_demo_file.tour.compare_changes_description"),
    disableHighlight: d,
    emphasized: !0,
    isShowing: n,
    media: jsx(_$$w2, {
      src: buildUploadUrl("a0d110312d2748672be288f2474344563c4dc5be"),
      aspectRatio: 16 / 9,
      hideBorder: !0
    }),
    onClose: e.onClose,
    onTargetLost: e.onClose,
    primaryCta: {
      label: renderI18nText("dev_mode_demo_file.tour.next_button"),
      ctaTrackingDescriptor: UpgradeAction.NEXT,
      type: "button",
      onClick: e.onPrimaryCtaClick,
      dataTestId: es,
      variantOverride: "custom",
      customVariantStyles: eg.primaryButton
    },
    secondaryCta: {
      label: renderI18nText("dev_mode_demo_file.tour.back_button"),
      ctaTrackingDescriptor: UpgradeAction.BACK,
      type: "button",
      onClick: e.onSecondaryCtaClick,
      dataTestId: eu,
      variantOverride: "custom",
      customVariantStyles: eg.secondaryButton
    },
    stepCounter: {
      stepNum: 2,
      totalNumSteps: PY
    },
    targetKey: Ov,
    title: renderI18nText("dev_mode_demo_file.tour.compare_changes_title"),
    trackingContextName: "Dev Mode Demo File Tour Compare Changes Tooltip"
  });
}
function eT(e) {
  return jsx(_$$X, {
    description: renderI18nText("dev_mode_demo_file.tour.intro_description"),
    emphasized: !0,
    hideCloseButton: !0,
    isShowing: !0,
    media: jsx(_$$w2, {
      src: buildUploadUrl("eb0bb37be7039cb1cf12baebc9f72f8cd74d6092"),
      aspectRatio: 16 / 9,
      hideBorder: !0
    }),
    onClose: e.onClose,
    position: Ui3PositionType.BOTTOM_RIGHT,
    primaryCta: {
      label: renderI18nText("dev_mode_demo_file.tour.start_button"),
      ctaTrackingDescriptor: UpgradeAction.TRY_IT_OUT,
      type: "button",
      onClick: e.onPrimaryCtaClick,
      dataTestId: es,
      variantOverride: "custom",
      customVariantStyles: eg.primaryButton
    },
    secondaryCta: {
      label: renderI18nText("dev_mode_demo_file.tour.not_now_button"),
      ctaTrackingDescriptor: UpgradeAction.NOT_NOW,
      type: "button",
      onClick: e.onClose,
      dataTestId: eu,
      variantOverride: "custom",
      customVariantStyles: eg.secondaryButton
    },
    title: renderI18nText("dev_mode_demo_file.tour.intro_title"),
    trackingContextName: "Dev Mode Demo File Tour Intro Tooltip",
    width: 250
  });
}
function ek(e) {
  return jsx(rq, {
    description: renderI18nText("dev_mode_demo_file.tour.outro_description"),
    emphasized: !0,
    targetKey: gh,
    isShowing: !0,
    trackingContextName: "Dev Mode Demo File Tour Outro Tooltip",
    onClose: e.onClose
  });
}
function ej(e) {
  var t;
  let [n, a] = useState(!1);
  let l = useSelector(e => e.mirror.sceneGraph);
  let d = _$$Z();
  t = l;
  let s = findNodeByCriteria({
    nodeType: "SECTION",
    sceneGraph: t,
    preferredName: "Creator",
    backupNames: ["Library Experience"]
  }) || findFirstNodeOfType(t, "SECTION");
  let u = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  let {
    top,
    left
  } = ec({
    nodePosition: viewportToScreen(u, s ? s.absoluteBoundingBox : {
      x: 0,
      y: 0
    }, !0),
    xOffset: 0,
    yOffset: 20
  });
  let p = {
    top,
    left,
    pointerOffset: 110,
    pointerPosition: F_.TOP
  };
  return (useSingleEffect(() => {
    queueMicrotask(async function () {
      s && (await d({
        centerX: s.absoluteBoundingBox.x + 280,
        centerY: s.absoluteBoundingBox.y + 280,
        scale: .3
      }), a(!0));
    });
  }), s) ? jsx(rq, {
    description: renderI18nText("dev_mode_demo_file.tour.statuses_description"),
    emphasized: !0,
    fixedPosition: !0,
    isShowing: n,
    location: p,
    media: jsx(_$$w2, {
      src: buildUploadUrl("6655cdd596a72f3028467f88af0c3ff46c22727c"),
      aspectRatio: 16 / 9,
      hideBorder: !0
    }),
    onClose: e.onClose,
    primaryCta: {
      label: renderI18nText("dev_mode_demo_file.tour.next_button"),
      ctaTrackingDescriptor: UpgradeAction.NEXT,
      type: "button",
      onClick: e.onPrimaryCtaClick,
      dataTestId: es,
      variantOverride: "custom",
      customVariantStyles: eg.primaryButton
    },
    stepCounter: {
      stepNum: 1,
      totalNumSteps: PY
    },
    title: renderI18nText("dev_mode_demo_file.tour.statuses_title"),
    trackingContextName: "Dev Mode Demo File Tour Statuses Tooltip",
    zIndex: NotModalType.UNSET
  }) : null;
}
function eN({
  testDelayMs: e
}) {
  let [t, n] = useAtomValueAndSetter(Px);
  let [r, a] = useAtomValueAndSetter(Bl);
  let [l, d] = useAtomValueAndSetter(kO);
  let s = Xr(HO);
  let u = useIsProgressBarHiddenOrLocked();
  let [c, m] = useState(!1);
  let x = useRef(0);
  let p = void 0 !== e ? e : 3e3;
  useEffect(() => {
    if (!u && !c) {
      x.current = setTimeout(() => {
        m(!0);
      }, p);
      return () => {
        clearTimeout(x.current);
        x.current = 0;
      };
    }
  }, [u, c, p]);
  let h = () => {
    l ? n(void 0) : n(aN.OUTRO);
    s(!0);
    a(!0);
  };
  if (!c) return null;
  if (r) return t !== aN.OUTRO || l ? null : jsx(ek, {
    onClose: () => {
      n(void 0);
      d(!0);
    }
  });
  switch (t) {
    case aN.INTRO:
      return jsx(eT, {
        onPrimaryCtaClick: () => {
          n(aN.STATUSES);
        },
        onClose: h
      });
    case aN.STATUSES:
      return jsx(ej, {
        onPrimaryCtaClick: () => {
          n(aN.COMPARE_CHANGES);
        },
        onClose: h
      });
    case aN.COMPARE_CHANGES:
      return jsx(eC, {
        onPrimaryCtaClick: () => {
          n(aN.ANNOTATIONS);
        },
        onSecondaryCtaClick: () => {
          n(aN.STATUSES);
        },
        onClose: h
      });
    case aN.ANNOTATIONS:
      return jsx(ef, {
        onPrimaryCtaClick: () => {
          n(aN.CODE_CONNECT);
        },
        onSecondaryCtaClick: () => {
          n(aN.COMPARE_CHANGES);
        },
        onClose: h
      });
    case aN.CODE_CONNECT:
      return jsx(e_, {
        onPrimaryCtaClick: h,
        onSecondaryCtaClick: () => {
          n(aN.ANNOTATIONS);
        }
      });
    default:
      return null;
  }
}
function eI() {
  let {
    isShowing,
    show
  } = _$$e2({
    overlay: Ypw,
    priority: _$$N.DEFAULT_MODAL
  });
  let n = getUserId();
  let [r, a] = getUserPlan(n || "") || [];
  return (useEffect(() => {
    let n = getFeatureFlags().dev_mode_demo_file || getFeatureFlags().logged_out_dev_mode_demo_file;
    !isShowing && n && show();
  }, [isShowing, show]), isShowing) ? jsx("div", {
    "data-testid": "dev-mode-demo-file-tooltips-overlay",
    children: jsx(TrackingProvider, {
      name: "DevModeDemoFileTour",
      properties: {
        planType: r,
        planId: a
      },
      children: jsx(eN, {})
    })
  }) : null;
}
function eG({
  children: e
}) {
  return jsx(_$$G3.Provider, {
    value: {
      loggerEventName: "dev_handoff_navigate"
    },
    children: e
  });
}
let eX = memo(({
  shouldShowDragAndDropBorder: e
}) => {
  let t = useSelector(e => e.progressBarState);
  let n = useAppModelProperty("loadingEmbeds");
  let c = !!useCanAccessFullDevMode();
  let m = useIsFullscreenOverview();
  let x = _$$e();
  let p = useIsFullscreenDevModeComponentBrowser();
  let h = Lk();
  let g = useCanUseDevModeDemoFile();
  let f = useRef(null);
  let v = useSelector(e => e.openFile);
  let _ = v ? v.key : "";
  SI();
  Gb(_);
  _$$W();
  let C = getObservableValue(EditorPreferencesApi().enableCodegenMcpServer, !1);
  return jsxs(eG, {
    children: [jsx(ED, {}), jsxs(sk, {
      children: [t.mode !== UIVisibilitySetting.OFF && jsx("div", {
        className: _q
      }), jsxs(pO, {
        initialFilterState: {
          currentPage: !0
        },
        children: [n.map(e => jsx(_$$_, {
          nodeId: e
        }, `loading-embed-${e}`)), jsx(qn, {}), jsx(_$$u, {}), g && jsx(eI, {}), c && jsx(w, {}), jsx(_$$G2, {}), jsx(_$$b2, {}), jsx(_$$J, {}), !m && !x && !p && jsx(_$$b, {}), getFeatureFlags().dt_mcp_auto_resources && C && jsx(y6, {}), jsx(XI, {
          commentsDetailContainerRef: f
        }), jsx(Nz, {}), jsx("div", {
          ref: f
        }), !isVsCodeEnvironment() && !p && jsx(ErrorBoundaryCrash, {
          boundaryKey: "DevModeLeftPanel",
          fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
          sentryTags: {
            area: eBU.DEVELOPER_TOOLS
          },
          children: jsx(_$$O, {})
        }), jsx(_$$G, {
          children: !m && !x && !p && jsx(_$$w, {})
        }), e && jsx(X5, {})]
      }), jsx(_$$A, {
        editorType: FEditorType.DevHandoff,
        openFile: v
      }), jsx(_$$l, {})]
    }), h && jsx(_$$K, {
      className: PA,
      children: jsx(_$$s, {})
    })]
  });
});
export function $$eY0() {
  let [e, t] = useState(!1);
  return jsx(_$$c2, {
    loadedCommentsProvider: !1,
    children: jsx(_$$v, {
      setShouldShowDragAndDropBorder: t,
      isDragTarget: !1,
      children: jsx(eX, {
        shouldShowDragAndDropBorder: e
      })
    })
  });
}
export const DevHandoffView = $$eY0;