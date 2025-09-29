import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VideoCppBindings, StateManagementCPPBindings, PrototypingTsApi, Fullscreen } from "../figma_app/763686";
import { defaultSessionLocalID, sessionLocalIDToString } from "../905/871411";
import { getFeatureFlags } from "../905/601108";
import { atom, useAtomWithSubscription } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { selectWithShallowEqual } from "../905/103090";
import { useIsSelectedViewFullscreenCooper } from "../figma_app/828186";
import { showModalHandler } from "../905/156213";
import { isWhiteboardFileType } from "../figma_app/976749";
import { consumptionPaywallUtils } from "../905/224";
import { isValidValue, MIXED_MARKER, normalizeValue } from "../905/216495";
import { dq } from "../figma_app/316316";
import { selectCurrentFile, openFileTeamAtom } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { UpsellModalType } from "../905/165519";
import { FeatureFlag } from "../905/652992";
import { uQ } from "../figma_app/151869";
import { zZ } from "../figma_app/299859";
import { R as _$$R } from "../905/550439";
import { P } from "../905/498777";
import { ConsumptionPaywallModalPlansPricing } from "../905/739964";
import { zL, pL } from "../figma_app/369750";
import { useIsFullscreenSlidesView } from "../figma_app/21029";
import { HS, Ay } from "../figma_app/976110";
let $$w10 = "prototypeInteractionEditModal";
let $$O7 = "interactionPanel";
let $$R11 = "action-row";
let $$L15 = atom(!0);
export function $$P14(e, t, r, n, i, a, s, o, l, d) {
  return {
    behavior: function (e) {
      if (e) {
        if (!isValidValue(e)) return MIXED_MARKER;
        if ("INSTANT_TRANSITION" === e) ;else if ("DISSOLVE" === e) return "DISSOLVE";else if ("FADE" === e) return "FADE";else if (e.startsWith("SLIDE_OUT")) return "SLIDE_OUT";else if (e.startsWith("SLIDE")) return "SLIDE";else if (e.startsWith("PUSH")) return "PUSH";else if (e.startsWith("MOVE_OUT")) return "MOVE_OUT";else if (e.startsWith("MOVE")) return "MOVE";else if ("SMART_ANIMATE" === e || "MAGIC_MOVE" === e) return "SMART_ANIMATE";else if ("SCROLL_ANIMATE" === e) return "SCROLL_ANIMATE";
      }
      return "INSTANT";
    }(e),
    direction: function (e) {
      if (e && isValidValue(e)) {
        for (let t of k) if (e.indexOf(t) >= 0) return t;
      }
      return null;
    }(e),
    easing: function (e) {
      if (e) {
        if (!isValidValue(e)) return MIXED_MARKER;
        if ("IN_CUBIC" === e) return "EASE_IN";
        if ("OUT_CUBIC" === e) ;else if ("INOUT_CUBIC" === e) return "EASE_IN_AND_OUT";else if ("LINEAR" === e) return "LINEAR";else if ("IN_BACK_CUBIC" === e) return "EASE_IN_BACK";else if ("OUT_BACK_CUBIC" === e) return "EASE_OUT_BACK";else if ("INOUT_BACK_CUBIC" === e) return "EASE_IN_AND_OUT_BACK";else if ("CUSTOM_CUBIC" === e) return "CUSTOM_BEZIER";else if ("GENTLE_SPRING" === e) return "GENTLE";else if ("SPRING_PRESET_ONE" === e) return "QUICK";else if ("SPRING_PRESET_TWO" === e) return "BOUNCY";else if ("SPRING_PRESET_THREE" === e) return "SLOW";else if ("CUSTOM_SPRING" === e) return "CUSTOM_SPRING";
      }
      return "EASE_OUT";
    }(t),
    isSpringTransition: $$M22(t),
    easingFunction: r ? isValidValue(r) ? r : MIXED_MARKER : D,
    duration: n ? isValidValue(n) ? n : MIXED_MARKER : .3,
    shouldSmartAnimate: F(i, !1),
    preserveScroll: F(a, !1),
    resetVideoPosition: F(s, !1),
    openUrlInNewTab: F(o, !1),
    resetScrollPosition: F(l, !1),
    resetInteractiveComponents: F(d, !1)
  };
}
let D = [0, 0, .58, 1];
let k = ["LEFT", "RIGHT", "TOP", "BOTTOM"];
export function $$M22(e) {
  return !!e && ("GENTLE_SPRING" === e || "SPRING_PRESET_ONE" === e || "SPRING_PRESET_TWO" === e || "SPRING_PRESET_THREE" === e || "CUSTOM_SPRING" === e);
}
function F(e, t) {
  return e ? isValidValue(e) ? e : MIXED_MARKER : t;
}
export function $$j16(e) {
  return e.length ? e.reduce((e, t) => e && e !== t.stateManagementVersion || !e && 1 === t.stateManagementVersion ? MIXED_MARKER : void 0 === e ? 0 : e, e[0].stateManagementVersion) : void 0;
}
export function $$U17(e) {
  return $$B20(e) || e === MIXED_MARKER;
}
export function $$B20(e) {
  return void 0 === e || 0 === e;
}
export function $$G5(e) {
  return 1 === e;
}
export function $$V2(e, t, r) {
  if (e === MIXED_MARKER) return !0;
  let n = normalizeValue(t);
  let i = normalizeValue(r);
  return !("CLOSE" === n || "URL" === n || "INTERNAL_NODE" === n && "SCROLL_TO" === i || "SET_VARIABLE" === n || "CONDITIONAL" === n || "SET_VARIABLE_MODE" === n || "NONE" === n || "UPDATE_MEDIA_RUNTIME" === n);
}
export function $$H19(e) {
  if ("BACK" === e.connectionType) return !0;
  let t = normalizeValue(e.transitionNodeID);
  if (null == t || t === defaultSessionLocalID) return !0;
  let r = sessionLocalIDToString(t);
  return !!VideoCppBindings.subtreeContainsVideoPaint(r);
}
export function $$z3(e) {
  if ("BACK" === e.connectionType) return !0;
  let t = normalizeValue(e.transitionNodeID);
  if (null == t || t === defaultSessionLocalID) return !0;
  let r = sessionLocalIDToString(t);
  return !!StateManagementCPPBindings.subtreeContainsInteractiveComponent(r);
}
export function $$W13() {
  let {
    selectionProperties
  } = selectWithShallowEqual(e => ({
    selectionProperties: e.mirror.selectionProperties
  }));
  let t = uQ();
  let r = [];
  let n = [];
  if (t) {
    let {
      viableIds,
      disabledIds
    } = PrototypingTsApi.getVideoNodesOnSameTlfAsNode(t);
    r = viableIds;
    n = disabledIds;
  }
  let i = selectionProperties?.numSelected === 1 && (r.length > 0 || n.length > 0);
  return dq(selectionProperties) || i;
}
let K = ["OPEN_OVERLAY", "SWAP_WITH", "CLOSE_OVERLAY"];
let Y = ["SET_VARIABLE", "SET_VARIABLE_MODE", "CONDITIONAL"];
let $ = ["UPDATE_MEDIA_PLAY_PAUSE_OPTIONS", "UPDATE_MEDIA_MUTE_UNMUTE_OPTIONS", "UPDATE_MEDIA_SKIP_TO", "UPDATE_MEDIA_SKIP_BY_OPTIONS"];
let X = "SEPARATOR";
let q = X + "_MEDIA";
let $$J8 = "_PRESET_PLACEHOLDER";
let $$Z21 = e => e.startsWith(X);
let Q = ["NAVIGATE_TO", "SWAP_STATE_TO", "GO_BACK", X, ...Y, "SCROLL_TO", "OPEN_URL", X, ...K, q, ...$];
let ee = ["NAVIGATE_TO", "SWAP_STATE_TO", "GO_BACK", "SCROLL_TO", "OPEN_URL", X, ...K, X, ...Y, q, ...$];
let et = ["SWAP_STATE_TO", "GO_BACK", "SCROLL_TO", "CONDITIONAL", "SET_VARIABLE", X, $$J8];
let er = [$$J8];
export function $$en4({
  showVideoActions: e,
  isNestedInConditional: t,
  isSites: r,
  isUI3: n,
  showPresetActions: i,
  isLayoutNodeSelected: s
}) {
  return (r ? et : n ? ee : Q).filter(n => s ? er.includes(n) : !!("SWAP_STATE_TO" !== n || Fullscreen.isSelectionContainedInStateOrStateInstance()) && (n !== q || !!e) && (n !== $$J8 || !!i && !!r) && ("UPDATE_MEDIA_PLAY_PAUSE_OPTIONS" === n || "UPDATE_MEDIA_MUTE_UNMUTE_OPTIONS" === n || "UPDATE_MEDIA_SKIP_TO" === n || "UPDATE_MEDIA_SKIP_BY_OPTIONS" === n ? e : ("CONDITIONAL" !== n || !t) && ("SET_VARIABLE_MODE" !== n || !!getFeatureFlags().prototype_set_mode_action)));
}
export function $$ei1(e) {
  let t = {
    connectionType: "NONE"
  };
  switch (e) {
    case "NAVIGATE_TO":
      t.connectionType = "INTERNAL_NODE";
      t.navigationType = "NAVIGATE";
      break;
    case "OPEN_OVERLAY":
      t.connectionType = "INTERNAL_NODE";
      t.navigationType = "OVERLAY";
      break;
    case "SCROLL_TO":
      t.connectionType = "INTERNAL_NODE";
      t.navigationType = "SCROLL_TO";
      break;
    case "SWAP_WITH":
      t.connectionType = "INTERNAL_NODE";
      t.navigationType = "SWAP";
      break;
    case "SWAP_STATE_TO":
      t.connectionType = "INTERNAL_NODE";
      t.navigationType = "SWAP_STATE";
      break;
    case "GO_BACK":
      t.connectionType = "BACK";
      break;
    case "CLOSE_OVERLAY":
      t.connectionType = "CLOSE";
      break;
    case "OPEN_URL":
      t.connectionType = "URL";
      break;
    case "SET_VARIABLE":
      t.connectionType = "SET_VARIABLE";
      break;
    case "SET_VARIABLE_MODE":
      t.connectionType = "SET_VARIABLE_MODE";
      break;
    case "UPDATE_MEDIA_PLAY":
      t.connectionType = "UPDATE_MEDIA_RUNTIME";
      t.mediaAction = "PLAY";
      break;
    case "UPDATE_MEDIA_PAUSE":
      t.connectionType = "UPDATE_MEDIA_RUNTIME";
      t.mediaAction = "PAUSE";
      break;
    case "UPDATE_MEDIA_PLAY_PAUSE_OPTIONS":
    case "UPDATE_MEDIA_TOGGLE_PLAY_PAUSE":
      t.connectionType = "UPDATE_MEDIA_RUNTIME";
      t.mediaAction = "TOGGLE_PLAY_PAUSE";
      break;
    case "UPDATE_MEDIA_MUTE":
      t.connectionType = "UPDATE_MEDIA_RUNTIME";
      t.mediaAction = "MUTE";
      break;
    case "UPDATE_MEDIA_UNMUTE":
      t.connectionType = "UPDATE_MEDIA_RUNTIME";
      t.mediaAction = "UNMUTE";
      break;
    case "UPDATE_MEDIA_MUTE_UNMUTE_OPTIONS":
    case "UPDATE_MEDIA_TOGGLE_MUTE_UNMUTE":
      t.connectionType = "UPDATE_MEDIA_RUNTIME";
      t.mediaAction = "TOGGLE_MUTE_UNMUTE";
      break;
    case "UPDATE_MEDIA_SKIP_BY_OPTIONS":
    case "UPDATE_MEDIA_SKIP_FORWARD":
      t.connectionType = "UPDATE_MEDIA_RUNTIME";
      t.mediaAction = "SKIP_FORWARD";
      break;
    case "UPDATE_MEDIA_SKIP_BACKWARD":
      t.connectionType = "UPDATE_MEDIA_RUNTIME";
      t.mediaAction = "SKIP_BACKWARD";
      break;
    case "UPDATE_MEDIA_SKIP_TO":
      t.connectionType = "UPDATE_MEDIA_RUNTIME";
      t.mediaAction = "SKIP_TO";
      break;
    case "CONDITIONAL":
      t.connectionType = "CONDITIONAL";
  }
  return t;
}
function ea(e, t) {
  let r;
  let a = useDispatch();
  switch (e) {
    case FeatureFlag.PROTOTYPING_MULTIPLE_ACTIONS:
      r = UpsellModalType.PROTOTYPING_MULTIPLE_ACTIONS;
      break;
    case FeatureFlag.PROTOTYPING_CONDITIONAL_ACTIONS:
      r = UpsellModalType.PROTOTYPING_CONDITIONAL_ACTIONS;
      break;
    case FeatureFlag.PROTOTYPING_VARIABLES:
      r = UpsellModalType.PROTOTYPING_VARIABLES;
      break;
    case FeatureFlag.VIDEOS_IN_PROTOTYPES:
      r = UpsellModalType.ADD_VIDEO;
      break;
    default:
      r = void 0;
  }
  return useCallback(() => {
    a(showModalHandler({
      type: ConsumptionPaywallModalPlansPricing,
      data: {
        team: t,
        resource: e,
        editorType: FFileType.DESIGN,
        currentPlan: consumptionPaywallUtils.Plan.STARTER,
        upsellPlan: consumptionPaywallUtils.Plan.PRO,
        upsellSource: r
      }
    }));
    trackEventAnalytics("prototype.payment_upsell_modal_shown", {
      paywallFeature: e
    });
  }, [a, e, t, r]);
}
export function $$es23() {
  let {
    canUseAdvancedPrototyping,
    canMoveFileToProPlus,
    showMoveToProTeam
  } = _$$R();
  let n = getFeatureFlags().prototype_multi_path_paywall && !canUseAdvancedPrototyping;
  let a = selectCurrentFile();
  let s = useSelector(e => a && a.teamId ? e.teams[a.teamId] : null);
  let d = useAtomWithSubscription(openFileTeamAtom);
  let c = useIsFullscreenSlidesView();
  let p = isWhiteboardFileType();
  let h = useIsSelectedViewFullscreenCooper();
  let m = ea(FeatureFlag.PROTOTYPING_MULTIPLE_ACTIONS, s);
  let g = ea(FeatureFlag.PROTOTYPING_CONDITIONAL_ACTIONS, s);
  let E = ea(FeatureFlag.PROTOTYPING_VARIABLES, s);
  let y = ea(P(c, p, h), s);
  return {
    shouldShowAdvancedPrototypingPaywall: n,
    showAdvancedPrototypinglMultipleActionsModal: canMoveFileToProPlus ? showMoveToProTeam : m,
    showAdvancedPrototypingConditionalActionsModal: canMoveFileToProPlus ? showMoveToProTeam : g,
    showAdvancedPrototypingVariablesModal: canMoveFileToProPlus ? showMoveToProTeam : E,
    showVideosModal: canMoveFileToProPlus && !d ? showMoveToProTeam : y
  };
}
export var $$eo6 = (e => (e[e.SINGLE_COL = 0] = "SINGLE_COL", e[e.TWO_COL = 1] = "TWO_COL", e))($$eo6 || {});
function el(e) {
  return e.some(e => e.actions?.some(e => "CONDITIONAL" === e.connectionType));
}
export function $$ed9() {
  let e = HS();
  let {
    selectedInteractions,
    differentLengthActions
  } = Ay(e);
  let n = el(selectedInteractions) || selectedInteractions.some(e => void 0 !== e.actions && e.actions?.length > 1);
  let i = selectedInteractions.length > 1 && !differentLengthActions && selectedInteractions[0].actions?.length === 1 && el(selectedInteractions) && !selectedInteractions.every(e => e.actions?.every(e => "CONDITIONAL" === e.connectionType));
  return !n || differentLengthActions || i ? 0 : 1;
}
export function $$ec18(e, t, r) {
  let {
    navigationType = "NAVIGATE",
    connectionType = "NONE",
    transitionType,
    easingType,
    easingFunction,
    transitionDuration,
    transitionShouldSmartAnimate,
    transitionPreserveScroll,
    transitionResetVideoPosition,
    openUrlInNewTab,
    transitionResetScrollPosition,
    transitionResetInteractiveComponents
  } = e;
  let m = $$P14(transitionType, easingType, easingFunction, transitionDuration, transitionShouldSmartAnimate, transitionPreserveScroll, transitionResetVideoPosition, openUrlInNewTab, transitionResetScrollPosition, transitionResetInteractiveComponents);
  let g = $$j16(r);
  let f = $$G5(g) && zZ.haveInteractionsBeenUpgraded(r);
  return {
    showPanel: (t.interactionActions.length > 1 || $$V2(g, connectionType, navigationType)) && ($$U17(g) || f),
    transition: m
  };
}
export function $$eu12(e) {
  switch (e) {
    case "AFTER_TIMEOUT":
      return "loading";
    case "MOUSE_IN":
    case "MOUSE_OUT":
    case "ON_HOVER":
    case "MOUSE_DOWN":
    case "MOUSE_UP":
    case "MOUSE_ENTER":
    case "ON_PRESS":
    case "ON_CLICK":
    case "MOUSE_LEAVE":
    case "DRAG":
      return "mouse";
    case "ON_KEY_DOWN":
      return "keyboard";
    case "ON_VOICE":
    case "ON_MEDIA_HIT":
    case "ON_MEDIA_END":
      return "video";
    default:
      console.warn(`Unknown interaction type: ${e}`);
      return "none";
  }
}
export function $$ep0(e, t, r) {
  for (let n of e) {
    let e = n.event.interactionType;
    if (e) {
      let i = $$eu12(e);
      if ("mouse" === i && zL(n.interactions) || r && pL(n.interactions)) continue;
      if (i === t) return !0;
    }
  }
  return !1;
}
export const $5 = $$ep0;
export const Bs = $$ei1;
export const Fp = $$V2;
export const GB = $$z3;
export const He = $$en4;
export const LH = $$G5;
export const Oz = $$eo6;
export const Qe = $$O7;
export const Xk = $$J8;
export const YT = $$ed9;
export const dJ = $$w10;
export const eG = $$R11;
export const hD = $$eu12;
export const hP = $$W13;
export const hU = $$P14;
export const hV = $$L15;
export const iC = $$j16;
export const kM = $$U17;
export const n6 = $$ec18;
export const oc = $$H19;
export const uU = $$B20;
export const vc = $$Z21;
export const x6 = $$M22;
export const zt = $$es23;