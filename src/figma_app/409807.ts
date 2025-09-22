import { useCallback, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import { debug } from "../figma_app/465776";
import { z as _$$z } from "../905/639107";
import { M as _$$M } from "../905/702374";
import { v as _$$v } from "../905/181101";
import { R as _$$R } from "../905/912455";
import { K } from "../905/796744";
import { y as _$$y } from "../905/672706";
import { z as _$$z2 } from "../905/335547";
import { StackBindingsCpp, LayoutSizingMode, Axis, SpacingMode, SceneGraphHelpers } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { Vector2D } from "../905/512402";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { createAtomWithEquality, atom, useAtomValueAndSetter, Xr } from "../figma_app/27355";
import { useStableMemo } from "../905/19536";
import { useDebouncedCallback } from "use-debounce";
import { trackFileEventWithUser } from "../figma_app/901889";
import { selectWithShallowEqual } from "../905/103090";
import { getI18nString } from "../905/303541";
import { ak } from "../figma_app/8833";
import { PZ, Lk } from "../figma_app/975811";
import { fullscreenValue } from "../figma_app/455680";
import { getNudgeAmounts } from "../figma_app/740163";
import { isValidValue, arrayOrMixed, normalizeValue, AUTO_MARKER, isInvalidValue } from "../905/216495";
import { M as _$$M3 } from "../figma_app/634148";
import { zj, lJ, kl } from "../905/275640";
import { o as _$$o } from "../905/237202";
import { F as _$$F } from "../905/258517";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { selectSceneGraphSelectionKeys } from "../figma_app/889655";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { A as _$$A2 } from "../2854/975852";
import { A as _$$A3 } from "../2854/549639";
import { A as _$$A4 } from "../2854/181039";
import { A as _$$A5 } from "../2854/358268";
import { A as _$$A6 } from "../2854/873514";
import { A as _$$A7 } from "../2854/624650";
import { A as _$$A8 } from "../2854/831825";
import { A as _$$A9 } from "../2854/877366";
import { A as _$$A0 } from "../2854/772622";
import { A as _$$A1 } from "../2854/968945";
var $$K29 = (e => (e[e.TOP = 0] = "TOP", e[e.RIGHT = 1] = "RIGHT", e[e.BOTTOM = 2] = "BOTTOM", e[e.LEFT = 3] = "LEFT", e[e.HORIZONTAL = 4] = "HORIZONTAL", e[e.VERTICAL = 5] = "VERTICAL", e[e.ALL = 6] = "ALL", e))($$K29 || {});
let $$Y1 = {
  0: _$$z,
  1: _$$M,
  2: _$$v,
  3: _$$R,
  5: K,
  4: _$$y,
  6: _$$z2
};
let $$$15 = {
  minWidth: [_$$A8, _$$A9],
  maxWidth: [_$$A4, _$$A5],
  minHeight: [_$$A6, _$$A7],
  maxHeight: [_$$A2, _$$A3],
  removeWidthLimit: [_$$A1, _$$A1],
  removeHeightLimit: [_$$A0, _$$A0]
};
export function $$X34(e) {
  return "SPACE_EVENLY" === e || "SPACE_BETWEEN" === e;
}
export function $$q39(e) {
  switch (e) {
    case 0:
      return getI18nString("fullscreen.properties_panel.stack_panel.top_padding");
    case 1:
      return getI18nString("fullscreen.properties_panel.stack_panel.right_padding");
    case 2:
      return getI18nString("fullscreen.properties_panel.stack_panel.bottom_padding");
    case 3:
      return getI18nString("fullscreen.properties_panel.stack_panel.left_padding");
    case 4:
      return getI18nString("fullscreen.properties_panel.stack_panel.horizontal_padding");
    case 5:
      return getI18nString("fullscreen.properties_panel.stack_panel.vertical_padding");
    case 6:
      return getI18nString("fullscreen.properties_panel.stack_panel.all_paddings");
  }
}
function J(e, t) {
  let r = 1 === e.length;
  let n = e[0];
  let i = n;
  let a = n;
  switch (t) {
    case 0:
      return {
        stackVerticalPadding: n
      };
    case 1:
      return {
        stackPaddingRight: i
      };
    case 2:
      return {
        stackPaddingBottom: a
      };
    case 3:
      return {
        stackHorizontalPadding: n
      };
    case 4:
      r || (i = e[1]);
      return {
        stackHorizontalPadding: n,
        stackPaddingRight: i
      };
    case 5:
      r || (a = e[1]);
      return {
        stackVerticalPadding: n,
        stackPaddingBottom: a
      };
    case 6:
      return function (e) {
        let t = e[0];
        let r = e[0];
        let n = e[0];
        let i = e[0];
        e.length >= 2 && (r = e[1], i = e[1]);
        e.length >= 3 && (n = e[2]);
        e.length >= 4 && (i = e[3]);
        return {
          stackHorizontalPadding: i,
          stackVerticalPadding: t,
          stackPaddingRight: r,
          stackPaddingBottom: n
        };
      }(e);
  }
}
export function $$Z18() {
  return useDebouncedCallback(useCallback((e, t) => {
    null == e ? StackBindingsCpp.setHoverStackLayoutSize(LayoutSizingMode.FIXED, Axis.X, !1) : StackBindingsCpp.setHoverStackLayoutSize(e, t, !0);
  }, []), 100);
}
export function $$Q4(e) {
  let t = function () {
    let e = useSelector(selectSceneGraphSelectionKeys);
    let {
      stackPaddingBottom,
      stackVerticalPadding,
      stackPaddingRight,
      stackHorizontalPadding
    } = zj("stackPaddingBottom", "stackVerticalPadding", "stackPaddingRight", "stackHorizontalPadding");
    return useCallback((n, i) => {
      isValidValue(stackVerticalPadding) && isValidValue(stackPaddingBottom) && isValidValue(stackHorizontalPadding) && isValidValue(stackPaddingRight) && _$$F.trackFromFullscreen("Autolayout Padding Changed", {
        side: $$K29[n],
        top: stackVerticalPadding,
        bottom: stackPaddingBottom,
        left: stackHorizontalPadding,
        right: stackPaddingRight,
        nodeIds: e,
        ...i
      });
    }, [stackVerticalPadding, stackPaddingBottom, stackHorizontalPadding, stackPaddingRight, e]);
  }();
  let r = useSelector(t => {
    let r = function (e, t) {
      switch (e) {
        case 0:
          return [t.stackVerticalPadding];
        case 1:
          return [t.stackPaddingRight];
        case 2:
          return [t.stackPaddingBottom];
        case 3:
          return [t.stackHorizontalPadding];
        case 4:
          return [t.stackHorizontalPadding, t.stackPaddingRight];
        case 5:
          return [t.stackVerticalPadding, t.stackPaddingBottom];
        case 6:
          return [t.stackVerticalPadding, t.stackPaddingRight, t.stackPaddingBottom, t.stackHorizontalPadding];
      }
    }(e, t.mirror.selectionProperties);
    return arrayOrMixed(r);
  });
  return [useStableMemo(r), useCallback((r, n, i) => {
    n && i && t(e, i);
    let a = J(r, e);
    fullscreenValue.updateSelectionProperties(a, {
      shouldCommit: n
    });
  }, [e, t])];
}
export function $$ee36(e, t) {
  e === SpacingMode.SPACE_BETWEEN ? permissionScopeHandler.user("set-stack-distribution-mode", () => {
    StackBindingsCpp.setDistributeOnSelectedStacks();
  }) : e === SpacingMode.PACKED && t !== SpacingMode.PACKED && fullscreenValue.updateSelectionProperties({
    stackPrimaryAlignItems: "MIN"
  }, {
    shouldCommit: yesNoTrackingEnum.NO
  });
}
class et extends _$$M3 {
  getValueForNode(e) {
    return $$X34(e.stackPrimaryAlignItems) ? null : e.stackSpacing;
  }
  setValueForNode(e, t) {
    $$X34(e.stackPrimaryAlignItems) || e.stackSpacing === t || permissionScopeHandler.user("set-stack-spacing", () => {
      e.stackSpacing = t;
    });
  }
}
export let $$er26 = new et();
class en extends _$$M3 {
  getValueForNode(e) {
    return e.stackCounterSpacing;
  }
  setValueForNode(e, t) {
    e.stackCounterSpacing !== t && permissionScopeHandler.user("set-stack-counter-spacing", () => {
      e.stackSpacing = t;
    });
  }
}
export let $$ei19 = new en();
export function $$ea5(e) {
  let t = (e, t) => {
    es("stackTopPadding", "stackVerticalPadding", e, t);
    es("stackBottomPadding", "stackPaddingBottom", e, t);
    es("stackLeftPadding", "stackHorizontalPadding", e, t);
    es("stackRightPadding", "stackPaddingRight", e, t);
  };
  class r extends _$$M3 {
    getValueForNode(t) {
      return function (e, t) {
        switch (t) {
          case 0:
            return [e.stackTopPadding];
          case 1:
            return [e.stackRightPadding];
          case 2:
            return [e.stackBottomPadding];
          case 3:
            return [e.stackLeftPadding];
          case 4:
            return [e.stackLeftPadding, e.stackRightPadding];
          case 5:
            return [e.stackTopPadding, e.stackBottomPadding];
          case 6:
            return [e.stackTopPadding, e.stackRightPadding, e.stackBottomPadding, e.stackLeftPadding];
        }
      }(t, e);
    }
    setValueForNode(r, n) {
      permissionScopeHandler.user("set-stack-padding", () => {
        t(r, J(n, e));
      });
    }
  }
  return new r();
}
function es(e, t, r, n) {
  let i = n[t];
  null != i && r[e] !== i && (r[e] = i);
}
export function $$eo27(e) {
  let {
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount,
    allowUnformatted,
    allowEmpty
  } = e;
  return useMemo(() => new eI({
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount,
    allowUnformatted,
    allowEmpty
  }), [allowEmpty, allowUnformatted, bigNudgeAmount, max, min, smallNudgeAmount]);
}
export function $$el23(e, t) {
  let r = $$ep13();
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = getNudgeAmounts();
  return useMemo(() => new $$eS17({
    min: getFeatureFlags().editor_zero_width_input ? ak : 0,
    smallNudgeAmount,
    bigNudgeAmount,
    onEvaluateExpressionError: t
  }, r, e), [bigNudgeAmount, smallNudgeAmount, r, t, e]);
}
export function $$ed12(e) {
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = getNudgeAmounts();
  return useMemo(() => new ev({
    min: "max" === e.minOrMax ? 1 : 0,
    smallNudgeAmount,
    bigNudgeAmount
  }, e), [smallNudgeAmount, bigNudgeAmount, e]);
}
export function $$ec25(e, t, r, n) {
  let i;
  i = "width" === n ? new Vector2D(t, e.size.y) : new Vector2D(e.size.x, t);
  let a = StackBindingsCpp.sizeClampedToMinAndMaxIfFixed(i, e.guid);
  return _$$o(a.x, i.x, .1) && _$$o(a.y, i.y, .1) ? t : r;
}
function eu(e, t, r) {
  getSingletonSceneGraph().getDirectlySelectedNodes().forEach(n => {
    let i = $$ec25(n, e, t, r);
    i !== ("width" === r ? n.size.x : n.size.y) && permissionScopeHandler.system("dimension-change-during-min-max-scrub", () => SceneGraphHelpers.setNodeTransformProperties(n.guid, {
      [r]: i,
      sizeChangeIsAutomatic: !0
    }));
  });
}
export function $$ep13() {
  let e = trackFileEventWithUser();
  let [t, r] = lJ("minHeight");
  let [i, a] = lJ("maxHeight");
  let [s, o] = lJ("minWidth");
  let [l, d] = lJ("maxWidth");
  let c = kl("width");
  let u = kl("height");
  let p = $$eK32(kl("stackMode"));
  let _ = useMemo(() => ({
    minOrMax: "min",
    widthOrHeight: "height",
    minOrMaxWidthOrHeight: "minHeight",
    enabled: null != t,
    value: t,
    set: (n, i, a) => {
      e("Min max updated", {
        minOrMax: "min",
        axis: "height",
        oldValue: t?.toString(),
        newValue: n?.toString(),
        currentValueInAxis: u?.toString(),
        stackMode: p
      });
      r(n, i);
      a && eu(a, n, "height");
    }
  }), [t, r, p, u, e]);
  let h = useMemo(() => ({
    minOrMax: "max",
    widthOrHeight: "height",
    minOrMaxWidthOrHeight: "maxHeight",
    enabled: null != i,
    value: i,
    set: (t, r, n) => {
      e("Min max updated", {
        minOrMax: "max",
        axis: "height",
        oldValue: i?.toString(),
        newValue: t?.toString(),
        currentValueInAxis: u?.toString(),
        stackMode: p
      });
      a(t, r);
      n && eu(n, t, "height");
    }
  }), [i, a, p, u, e]);
  let m = useMemo(() => ({
    minOrMax: "min",
    widthOrHeight: "width",
    minOrMaxWidthOrHeight: "minWidth",
    enabled: null != s,
    value: s,
    set: (t, r, n) => {
      e("Min max updated", {
        minOrMax: "min",
        axis: "width",
        oldValue: s?.toString(),
        newValue: t?.toString(),
        currentValueInAxis: c?.toString(),
        stackMode: p
      });
      o(t, r);
      n && eu(n, t, "width");
    }
  }), [s, o, p, c, e]);
  let g = useMemo(() => ({
    minOrMax: "max",
    widthOrHeight: "width",
    minOrMaxWidthOrHeight: "maxWidth",
    enabled: null != l,
    value: l,
    set: (t, r, n) => {
      e("Min max updated", {
        minOrMax: "max",
        axis: "width",
        oldValue: l?.toString(),
        newValue: t?.toString(),
        currentValueInAxis: c?.toString(),
        stackMode: p
      });
      d(t, r);
      n && eu(n, t, "width");
    }
  }), [l, d, p, c, e]);
  return useMemo(() => ({
    width: {
      min: m,
      max: g,
      actual: {
        value: c
      }
    },
    height: {
      min: _,
      max: h,
      actual: {
        value: u
      }
    }
  }), [h, g, _, m, c, u]);
}
export function $$e_22() {
  let {
    minWidth,
    maxWidth,
    minHeight,
    maxHeight
  } = selectWithShallowEqual(e => {
    let {
      minWidth: _minWidth,
      maxWidth: _maxWidth,
      minHeight: _minHeight,
      maxHeight: _maxHeight
    } = e.mirror.selectionProperties;
    return {
      minWidth: _minWidth,
      maxWidth: _maxWidth,
      minHeight: _minHeight,
      maxHeight: _maxHeight
    };
  });
  return useMemo(() => ({
    width: {
      min: null != minWidth,
      max: null != maxWidth
    },
    height: {
      min: null != minHeight,
      max: null != maxHeight
    }
  }), [minWidth, maxWidth, minHeight, maxHeight]);
}
export function $$eh40() {
  return useDeepEqualSceneValue(e => {
    let t = e.getDirectlySelectedNodes();
    if (0 === t.length) return !1;
    for (let e of t) if (!e.isGridChild) return !1;
    return !0;
  });
}
export function $$em11() {
  return useDeepEqualSceneValue(e => {
    let t = e.getDirectlySelectedNodes();
    if (0 === t.length) return !1;
    for (let e of t) if (!e.isGrid) return !1;
    return !0;
  });
}
export function $$eg3() {
  return useDeepEqualSceneValue(e => {
    let t = e.getDirectlySelectedNodes();
    if (!t || 0 === t.length) return !1;
    for (let e of t) {
      let t = e.parentNode && e.parentNode.isStack && !e.isInImmutableFrame;
      if (!(e.isGridChild || t)) return !1;
    }
    return !0;
  });
}
export function $$ef21() {
  return useDeepEqualSceneValue(e => {
    let t = e.getDirectlySelectedNodes();
    if (0 === t.length) return !1;
    let r = !0;
    for (let e of t) {
      let t = e.parentNode && e.parentNode.isStack && "AUTO" === e.stackPositioning;
      e.isGridChild || t || (r = !1);
    }
    return r;
  });
}
export function $$eE42() {
  return useDeepEqualSceneValue(e => {
    for (let t of e.getDirectlySelectedNodes()) if ("ABSOLUTE" !== t.stackPositioning) return !1;
    return !0;
  });
}
export function $$ey30() {
  return useDeepEqualSceneValue(e => {
    for (let t of e.getDirectlySelectedNodes()) if (!t.isStack) return !1;
    return !0;
  });
}
export function $$eb35() {
  return useDeepEqualSceneValue(e => {
    for (let t of e.getDirectlySelectedNodes()) if (!t.isLayoutContainer && !t.isLayoutChild) return !1;
    return !0;
  });
}
export function $$eT8() {
  let e = $$eh40();
  let t = $$eb35();
  return useSelector(r => {
    let {
      stackMode,
      nodesAreAllInsideStacks,
      isNonEditableInstanceSublayerSelected
    } = r.mirror.selectionProperties;
    let s = "HORIZONTAL" === normalizeValue(stackMode) || "VERTICAL" === normalizeValue(stackMode) || "GRID" === normalizeValue(stackMode) && getFeatureFlags().ce_tv_grid_hug;
    if (getFeatureFlags().ce_tv_grid_min_max) {
      if (!t) return !1;
    } else if (!s && !nodesAreAllInsideStacks && !e) return !1;
    return !isNonEditableInstanceSublayerSelected;
  });
}
class eI extends PZ {
  format(e) {
    return null == e ? "" : "number" != typeof e && e !== AUTO_MARKER ? e === $$ew43 ? getI18nString("fullscreen.properties_panel.apply_variable_ellipses") : (debug(!0, "Unknown stack spacing dropdown option: '" + e + "'"), "") : super.format(e);
  }
}
export class $$eS17 extends Lk {
  constructor(e, t, r) {
    super(e);
    this.minmax = t;
    this.activeDimension = r;
  }
  format(e) {
    if (null == e) return "";
    if ("number" != typeof e) {
      let t = e => isInvalidValue(e) ? getI18nString("fullscreen.mixed") : e?.toFixed(0);
      switch (e) {
        case LayoutSizingMode[LayoutSizingMode.FILL_CONTAINER]:
          return getI18nString("fullscreen.properties_panel.stack_panel.al.fill");
        case LayoutSizingMode[LayoutSizingMode.FIXED]:
          return "width" === this.activeDimension ? getI18nString("fullscreen.properties_panel.stack_panel.al.fixed.width", {
            value: t(this.minmax.width.actual.value)
          }) : getI18nString("fullscreen.properties_panel.stack_panel.al.fixed.height", {
            value: t(this.minmax.height.actual.value)
          });
        case LayoutSizingMode[LayoutSizingMode.HUG_CONTENT]:
          return getI18nString("fullscreen.properties_panel.stack_panel.al.hug");
        case $$eA28:
          return this.minmax.width.min.enabled ? getI18nString("fullscreen.properties_panel.stack_panel.minmax.min_width_value", {
            value: t(this.minmax.width.min.value)
          }) : getI18nString("fullscreen.properties_panel.stack_panel.minmax.min_width_add");
        case $$ex10:
          return this.minmax.width.max.enabled ? getI18nString("fullscreen.properties_panel.stack_panel.minmax.max_width_value", {
            value: t(this.minmax.width.max.value)
          }) : getI18nString("fullscreen.properties_panel.stack_panel.minmax.max_width_add");
        case $$eN45:
          return this.minmax.height.min.enabled ? getI18nString("fullscreen.properties_panel.stack_panel.minmax.min_height_value", {
            value: t(this.minmax.height.min.value)
          }) : getI18nString("fullscreen.properties_panel.stack_panel.minmax.min_height_add");
        case $$eC24:
          return this.minmax.height.max.enabled ? getI18nString("fullscreen.properties_panel.stack_panel.minmax.max_height_value", {
            value: t(this.minmax.height.max.value)
          }) : getI18nString("fullscreen.properties_panel.stack_panel.minmax.max_height_add");
        case $$ew43:
          return getI18nString("fullscreen.properties_panel.apply_variable_ellipses");
        case $$eL44:
          let r = "width" === this.activeDimension && this.minmax.width.min.enabled || "height" === this.activeDimension && this.minmax.height.min.enabled;
          let n = "width" === this.activeDimension && this.minmax.width.max.enabled || "height" === this.activeDimension && this.minmax.height.max.enabled;
          return r && n ? getI18nString("fullscreen.properties_panel.stack_panel.remove_min_and_max") : r ? getI18nString("fullscreen.properties_panel.stack_panel.remove_min") : getI18nString("fullscreen.properties_panel.stack_panel.remove_max");
        default:
          debug(!0, "Unknown width/height dropdown option: '" + e + "'");
          return "";
      }
    }
    return super.format(e);
  }
}
class ev extends Lk {
  constructor(e, t) {
    super(e);
    this.minmaxApi = t;
  }
  format(e) {
    if (null == e) return "";
    if ("number" != typeof e) switch (e) {
      case $$eO38:
        return this.getCurrentSizeString();
      case $$eR0:
        return this.getRemoveLimitString();
      case $$ew43:
        return getI18nString("fullscreen.properties_panel.apply_variable_ellipses");
      default:
        debug(!0, "Unknown width/height dropdown option: '" + e + "'");
        return "";
    }
    return super.format(e);
  }
  getCurrentSizeString() {
    return "width" === this.minmaxApi.widthOrHeight ? getI18nString("fullscreen.properties_panel.stack_panel.minmax.apply_current_width") : getI18nString("fullscreen.properties_panel.stack_panel.minmax.apply_current_height");
  }
  getRemoveLimitString() {
    switch (this.minmaxApi.widthOrHeight) {
      case "width":
        return "min" === this.minmaxApi.minOrMax ? getI18nString("fullscreen.properties_panel.stack_panel.minmax.remove_min_width") : getI18nString("fullscreen.properties_panel.stack_panel.minmax.remove_max_width");
      case "height":
        return "min" === this.minmaxApi.minOrMax ? getI18nString("fullscreen.properties_panel.stack_panel.minmax.remove_min_height") : getI18nString("fullscreen.properties_panel.stack_panel.minmax.remove_max_height");
    }
  }
}
let $$eA28 = "minWidth";
let $$ex10 = "maxWidth";
let $$eN45 = "minHeight";
let $$eC24 = "maxHeight";
let $$ew43 = "apply-variable";
let $$eO38 = "set-to-current-size";
let $$eR0 = "remove-size-limit";
let $$eL44 = "remove-min-and-max";
let $$eP31 = {
  width: {
    min: !1,
    max: !1
  },
  height: {
    min: !1,
    max: !1
  }
};
let $$eD6 = createAtomWithEquality(atom($$eP31));
export function $$ek37(e) {
  return e.width.min || e.width.max || e.height.min || e.height.max;
}
export let $$eM7 = createAtomWithEquality(atom(null));
export function $$eF41(e) {
  let t = $$e_22();
  let [r, i] = useAtomValueAndSetter($$eD6);
  let a = Xr($$eM7);
  return useCallback(() => {
    a(null);
    let n = r[e];
    if (n.min || n.max) {
      i({
        ...r,
        [e]: $$eP31[e]
      });
      return;
    }
    i({
      ...r,
      [e]: t[e]
    });
  }, [t, r, a, i, e]);
}
let ej = createAtomWithEquality(atom(null));
export var $$eU33 = (e => (e[e.NO = 0] = "NO", e[e.YES = 1] = "YES", e[e.YES_ONLY_MIN_MAX = 2] = "YES_ONLY_MIN_MAX", e))($$eU33 || {});
let eB = {
  count: 0
};
export function $$eG2() {
  let [e, t] = useAtomValueAndSetter(ej);
  let r = useDebouncedCallback(useCallback((t, r, n, i) => {
    if (i !== eB.count) return;
    let a = !e?.minMaxOnly || "minmax" === t;
    StackBindingsCpp.setMinMaxVisuals(r || (1 !== n && a ? e?.visuals ?? null : r));
  }, [e]), 100);
  return useCallback((n, i, a = 0) => {
    let s = e?.minMaxOnly && "minmax" === n;
    if (0 !== a || !s) {
      let e = 0 !== a || s ? i : null;
      t(e ? {
        visuals: e,
        minMaxOnly: 2 === a
      } : null);
    }
    r(n, i, a, ++eB.count);
  }, [r, e?.minMaxOnly, t]);
}
export function $$eV14() {
  let e = $$eG2();
  return useCallback((t, r) => {
    r ? StackBindingsCpp.setMinMaxVisuals(null) : e("other", null);
    StackBindingsCpp.setFocusStackPanelInput(t, r);
  }, [e]);
}
export function $$eH16() {
  let e = $$eG2();
  return useCallback((t, r) => {
    r ? StackBindingsCpp.setMinMaxVisuals(null) : e("other", null);
    StackBindingsCpp.setHoverStackPanelInput(t, r);
  }, [e]);
}
export function $$ez9(e, t, ...r) {
  let i = useStableMemo(r);
  useEffect(() => {
    if (!e) return;
    let r = e => {
      i.some(t => t.current?.contains(e.target)) || t();
    };
    document.addEventListener("mousedown", r, !0);
    document.addEventListener("pointerdown", r, !0);
    document.addEventListener("keydown", r, !0);
    return () => {
      document.removeEventListener("mousedown", r, !0);
      document.removeEventListener("pointerdown", r, !0);
      document.removeEventListener("keydown", r, !0);
    };
  }, [t, e, i]);
}
export function $$eW20(e) {
  return "HORIZONTAL" === e || "GRID" === e;
}
export function $$eK32(e) {
  switch (e) {
    case "VERTICAL":
      return "vertical";
    case "HORIZONTAL":
      return "horizontal";
    case "GRID":
      return "grid";
    default:
      return;
  }
}
export const Bn = $$eR0;
export const C8 = $$Y1;
export const Fp = $$eG2;
export const G7 = $$eg3;
export const HF = $$Q4;
export const Jj = $$ea5;
export const Kl = $$eD6;
export const Md = $$eM7;
export const Ng = $$eT8;
export const Nu = $$ez9;
export const QG = $$ex10;
export const SC = $$em11;
export const VY = $$ed12;
export const Wr = $$ep13;
export const Wx = $$eV14;
export const XO = $$$15;
export const Y9 = $$eH16;
export const Zg = $$eS17;
export const aj = $$Z18;
export const bd = $$ei19;
export const c4 = $$eW20;
export const dr = $$ef21;
export const hl = $$e_22;
export const jQ = $$el23;
export const jw = $$eC24;
export const jz = $$ec25;
export const lL = $$er26;
export const lW = $$eo27;
export const mw = $$eA28;
export const mx = $$K29;
export const o0 = $$ey30;
export const p3 = $$eP31;
export const qU = $$eK32;
export const qi = $$eU33;
export const rO = $$X34;
export const rX = $$eb35;
export const s$ = $$ee36;
export const tH = $$ek37;
export const vC = $$eO38;
export const wH = $$q39;
export const wV = $$eh40;
export const wf = $$eF41;
export const wx = $$eE42;
export const y8 = $$ew43;
export const zg = $$eL44;
export const zn = $$eN45;