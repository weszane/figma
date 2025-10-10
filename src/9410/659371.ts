import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { noop } from 'lodash-es';
import { O } from "../figma_app/114128";
import { D } from "../905/993374";
import { c as _$$c } from "../905/90943";
import { x as _$$x } from "../905/764527";
import { permissionScopeHandler } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { atom, useAtomValueAndSetter, useSetAtom, useAtomWithSubscription } from "../figma_app/27355";
import { KeyCodes } from "../905/63728";
import { isAIFeaturesEnabledForCurrentUser } from "../figma_app/459490";
import { getI18nString } from "../905/303541";
import { formatI18nMessage } from "../905/482208";
import { fullscreenValue } from "../figma_app/455680";
import { Zr } from "../figma_app/678782";
import { KindEnum } from "../905/129884";
import { w as _$$w } from "../figma_app/654279";
import { IR, iX } from "../figma_app/29287";
import { Gq, MS, bM, ON } from "../figma_app/101849";
import { f as _$$f, J } from "../figma_app/481968";
import { v1, V, cF } from "../figma_app/761984";
import { ss } from "../figma_app/402783";
import { f as _$$f2 } from "../905/299537";
import { A as _$$A } from "../svg/339098";
import { A as _$$A2 } from "../svg/796779";
import { A as _$$A3 } from "../svg/853229";
import { A as _$$A4 } from "../svg/371621";
var $$A8 = (e => (e.SUMMARIZE = "summarize", e.CLUSTER = "cluster_by_topic", e.TIDY_UP = "tidy_up", e.WRAP_IN_SECTION = "wrap_in_section", e.CLUSTER_BY_AUTHOR = "cluster_by_author", e.CLUSTER_BY_COLOR = "cluster_by_color", e.CLUSTER_BY_STAMP_COUNT = "cluster_by_stamp_count", e.CLUSTER_BY_STAMP_TYPE = "cluster_by_stamp_type", e.OPEN_CLUSTER_BY_MORE_MENU = "open_cluster_by_more_menu", e.CREATE_FIGMA_SLIDES_OUTLINE = "create_figma_slides_outline", e))($$A8 || {});
let $$O3 = {
  summarize: !0,
  cluster_by_topic: !0,
  create_figma_slides_outline: !0,
  tidy_up: !1,
  wrap_in_section: !1,
  cluster_by_author: !1,
  cluster_by_color: !1,
  cluster_by_stamp_count: !1,
  cluster_by_stamp_type: !1,
  open_cluster_by_more_menu: !1
};
let $$L7 = atom(!1);
let $$R13 = atom(null);
let $$D12 = atom(!1);
let $$M10 = atom(!1);
export function $$P9() {
  let e = $$F5();
  let [t, i] = useAtomValueAndSetter($$M10);
  let r = useSetAtom($$D12);
  return useCallback(() => {
    e();
    i(!1);
    r(!1);
  }, [e, i, r]);
}
export function $$F5() {
  let [e, t] = useAtomValueAndSetter($$R13);
  let [i, r] = useAtomValueAndSetter($$L7);
  return useCallback(() => {
    t(null);
    r(!1);
  }, [t, r]);
}
export function $$B2(e) {
  return !!e && ($$O3[e.type] || !1);
}
export function $$U1() {
  return v1();
}
export function $$G11() {
  let e = isAIFeaturesEnabledForCurrentUser();
  let t = getFeatureFlags().figjam_synthesize_handbrake || !1;
  let i = [];
  let n = V() && !e;
  let a = cF();
  let c = IR();
  let p = $$U1();
  let h = Zr("create-section-from-selection");
  let _ = Zr("tidy-up");
  let v = Zr("align-top");
  let E = {
    tooltip: _$$w,
    tooltipType: KindEnum.SPECIAL
  };
  p && i.push({
    type: "open_cluster_by_more_menu",
    disabled: !1,
    isInClusterSubmenu: !1,
    displayText: "",
    disabledTooltipText: ""
  });
  n && i.push({
    type: "summarize",
    disabled: !a || t,
    displayText: getI18nString("whiteboard.inline_menu.ai_quick_actions_summarize_button"),
    svgSrc: _$$A,
    fplIcon: jsx(O, {}),
    disabledTooltipText: getI18nString("whiteboard.inline_menu.ai_quick_actions_summarize_disabled_tooltip", {
      minSelectedStickies: 2
    }),
    tooltipOverrides: t ? E : void 0,
    isInClusterSubmenu: !1
  });
  _ && v && i.push({
    type: "tidy_up",
    disabled: !1,
    displayText: formatI18nMessage("tidy-up"),
    svgSrc: _$$A4,
    fplIcon: jsx(D, {}),
    tooltipOverrides: {
      tooltip: "tidy-up",
      tooltipType: KindEnum.LOOKUP
    }
  });
  h && i.push({
    type: "wrap_in_section",
    disabled: !1,
    displayText: formatI18nMessage("create-section-from-selection"),
    svgSrc: _$$A3,
    fplIcon: jsx(_$$c, {}),
    tooltipOverrides: {
      tooltip: "create-section-from-selection",
      tooltipType: KindEnum.LOOKUP
    }
  });
  c && i.push({
    type: "create_figma_slides_outline",
    disabled: t,
    displayText: getI18nString("whiteboard.inline_menu.ai_quick_actions_create_slides_outline"),
    svgSrc: _$$A2,
    fplIcon: jsx(_$$x, {}),
    disabledTooltipText: getI18nString("whiteboard.inline_menu.ai_quick_actions_create_slides_outline_disabled_tooltip", {
      minSelectedStickies: 2
    }),
    tooltipOverrides: t ? E : void 0,
    isInClusterSubmenu: !1
  });
  return i;
}
export function $$K6() {
  return [...function () {
    let e = isAIFeaturesEnabledForCurrentUser();
    let t = v1();
    if (e) return [];
    let i = !!getFeatureFlags().figjam_synthesize_handbrake;
    let r = [];
    let n = getI18nString("whiteboard.inline_menu.ai_quick_actions_sort_stickies_disabled_tooltip", {
      minSelectedStickies: 2
    });
    let a = {
      tooltip: _$$w,
      tooltipType: KindEnum.SPECIAL
    };
    r.push({
      type: "cluster_by_topic",
      disabled: !t || i,
      displayText: getI18nString("whiteboard.inline_menu.ai_quick_actions_sort_stickies_by_topic_2"),
      disabledTooltipText: n,
      tooltipOverrides: i ? a : void 0,
      isInClusterSubmenu: !0
    });
    return r;
  }(), ...function () {
    let e = v1();
    let t = getI18nString("whiteboard.inline_menu.ai_quick_actions_sort_stickies_disabled_tooltip", {
      minSelectedStickies: 2
    });
    let i = [];
    i.push({
      type: "cluster_by_color",
      disabled: !e,
      isInClusterSubmenu: !0,
      displayText: getI18nString("whiteboard.inline_menu.ai_quick_actions_sort_stickies_by_color_2"),
      disabledTooltipText: t
    });
    i.push({
      type: "cluster_by_author",
      disabled: !e,
      isInClusterSubmenu: !0,
      displayText: getI18nString("whiteboard.inline_menu.ai_quick_actions_sort_stickies_by_author_2"),
      disabledTooltipText: t
    });
    i.push({
      type: "cluster_by_stamp_count",
      disabled: !e,
      isInClusterSubmenu: !0,
      displayText: getI18nString("whiteboard.inline_menu.ai_quick_actions_sort_stickies_by_stamp_count_2"),
      disabledTooltipText: t
    });
    i.push({
      type: "cluster_by_stamp_type",
      disabled: !e,
      isInClusterSubmenu: !0,
      displayText: getI18nString("whiteboard.inline_menu.ai_quick_actions_sort_stickies_by_stamp_type_2"),
      disabledTooltipText: t
    });
    return i;
  }()].filter(e => e?.isInClusterSubmenu && "open_cluster_by_more_menu" !== e.type);
}
export function $$H0() {
  return !!$$G11().find(e => e?.type === "summarize" || e?.type === "cluster_by_topic" || e?.type === "open_cluster_by_more_menu");
}
export function $$z4() {
  let e = useAtomWithSubscription(_$$f2).positionRelativeToSelection;
  let {
    summarizeCanvasSelection
  } = ss(e, void 0, "INLINE_TOOLBAR");
  let {
    clusterCanvasSelection
  } = _$$f();
  let {
    cluster
  } = J(Gq, !1);
  let {
    cluster: _cluster
  } = J(MS, !1);
  let {
    cluster: _cluster2
  } = J(bM, !0);
  let {
    cluster: _cluster3
  } = J(ON, !1);
  let l = iX();
  let d = $$P9();
  return e => {
    let u = noop;
    let p = "";
    if (e) {
      switch (e.type) {
        case "cluster_by_author":
          u = cluster;
          p = "inline-menu-organize-cluster-by-author";
          break;
        case "cluster_by_color":
          u = _cluster;
          p = "inline-menu-organize-cluster-by-color";
          break;
        case "cluster_by_stamp_count":
          u = _cluster2;
          p = "inline-menu-organize-cluster-by-stamp-count";
          break;
        case "cluster_by_stamp_type":
          u = _cluster3;
          p = "inline-menu-organize-cluster-by-stamp-type";
          break;
        case "summarize":
          u = summarizeCanvasSelection;
          p = "inline-menu-organize-summarize";
          break;
        case "create_figma_slides_outline":
          u = l;
          p = "inline-menu-organize-create-figma-slides-outline";
          break;
        case "cluster_by_topic":
          u = clusterCanvasSelection;
          p = "inline-menu-organize-cluster";
          break;
        case "tidy_up":
          u = () => fullscreenValue.triggerActionInUserEditScope("tidy-up");
          p = "inline-menu-organize-tidy-up";
          break;
        case "wrap_in_section":
          u = () => fullscreenValue.triggerActionInUserEditScope("create-section-from-selection");
          p = "inline-menu-organize-wrap-in-section";
      }
      permissionScopeHandler.user(p, u);
      "open_cluster_by_more_menu" !== e.type && d();
    }
  };
}
export function $$V14() {
  let [e, t] = useAtomValueAndSetter($$L7);
  let [i, r] = useAtomValueAndSetter($$R13);
  let [n, a] = useAtomValueAndSetter($$D12);
  let s = $$K6();
  let o = $$z4();
  return (a, l) => {
    if (a.shiftKey || a.altKey || a.ctrlKey) {
      l(a);
      return;
    }
    if (e) switch (a.keyCode) {
      case KeyCodes.ESCAPE:
        t(!1);
        r(null);
        break;
      case KeyCodes.DOWN_ARROW:
        null === i ? r(0) : i + 1 < s.length && r(i + 1);
        break;
      case KeyCodes.UP_ARROW:
        null === i ? r(s.length - 1) : i - 1 >= 0 && r(i - 1);
        break;
      case KeyCodes.RIGHT_ARROW:
        null === i && r(0);
        break;
      case KeyCodes.LEFT_ARROW:
        r(null);
        t(!1);
        break;
      case KeyCodes.ENTER:
        null !== i && i < s.length && (a.preventDefault(), a.stopPropagation(), o(s[i]));
    } else if (n) switch (a.keyCode) {
      case KeyCodes.RIGHT_ARROW:
        t(!0);
        break;
      case KeyCodes.LEFT_ARROW:
        t(!1);
        break;
      default:
        l(a);
    } else l(a);
  };
}
export const Cb = $$H0;
export const E0 = $$U1;
export const Ef = $$B2;
export const IW = $$O3;
export const PX = $$z4;
export const Pn = $$F5;
export const QL = $$K6;
export const UI = $$L7;
export const Uj = $$A8;
export const Wb = $$P9;
export const Y = $$M10;
export const Yh = $$G11;
export const kw = $$D12;
export const u3 = $$R13;
export const z1 = $$V14;