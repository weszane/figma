import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useRef, useMemo, useEffect, useCallback, useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonWide } from "../905/521428";
import { Axis, Fullscreen, VariableResolvedDataType, SceneGraphHelpers, StackBindingsCpp, SpacingConstants, SnapMode, documentStateTsApi, AppStateTsApi } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { trackFileEventWithUser } from "../figma_app/901889";
import { selectWithShallowEqual } from "../905/103090";
import { generateRecordingKey, useHandleMouseEvent, useHandleKeyboardEvent } from "../figma_app/878298";
import { E as _$$E } from "../905/277716";
import { k as _$$k2 } from "../905/582200";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { Kl } from "../figma_app/175258";
import { fullscreenValue } from "../figma_app/455680";
import { Zr } from "../figma_app/678782";
import { kl, lJ } from "../905/275640";
import { KH, f4 } from "../figma_app/722362";
import { Sh, F4 } from "../figma_app/889655";
import { KindEnum } from "../905/129884";
import { hw } from "../figma_app/359943";
import { b7, aW } from "../figma_app/803054";
import { Zk, fI } from "../figma_app/626177";
import { u as _$$u } from "../figma_app/6978";
import { O as _$$O } from "../905/587457";
import { normalizeValue, isInvalidValue, isValidValue, MIXED_MARKER, getCommonValue } from "../905/216495";
import { F as _$$F } from "../905/258517";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { gq } from "../figma_app/178475";
import { fn, DE } from "../figma_app/811257";
import { Xs, Df } from "../figma_app/98483";
import { BP, hF, QK, sC, BG, Kw, X8 } from "../figma_app/100987";
import { l as _$$l } from "../figma_app/603241";
import { R as _$$R2 } from "../905/726507";
import { getSingletonSceneGraph } from "../905/700578";
import { useAtomValueAndSetter, useAtomWithSubscription, Xr } from "../figma_app/27355";
import X from "../vendor/415955";
import $ from "../vendor/128080";
import { M as _$$M } from "../figma_app/634148";
import { ow } from "../905/188421";
import { c$, tV } from "../905/794875";
import { O as _$$O2, S as _$$S } from "../figma_app/375482";
import { Wr, Kl as _$$Kl, Md, Fp, tH, Nu, qi, vC, Bn, VY, jz, rO, c4, mx, Wx, Y9, rX, o0 } from "../figma_app/409807";
import { pW, gm, KI } from "../figma_app/335781";
import { W as _$$W } from "../figma_app/521665";
import { t as _$$t2 } from "../905/1946";
import { Ws } from "../figma_app/938628";
import { SA, fB } from "../figma_app/473317";
import { Wv } from "../figma_app/711157";
import { W7, iZ } from "../figma_app/473914";
import { W as _$$W2 } from "../figma_app/605682";
import { N as _$$N } from "../905/438674";
import { customHistory } from "../905/612521";
import { ignoreCommandOrShift, KeyCodes, isCommandEvent } from "../905/63728";
import { ex as _$$ex } from "../905/524523";
import { clamp } from "../figma_app/492908";
import { jr, W0, VA } from "../figma_app/896988";
import { getSelectedView } from "../figma_app/386952";
import { isFullscreenSitesView, useIsFullscreenSitesView } from "../905/561485";
import eC from "classnames";
import { sR, uV } from "../figma_app/694588";
import { tL as _$$tL } from "../8826/642528";
import { q as _$$q2 } from "../642/649844";
import { o as _$$o } from "../8826/796619";
import { bL, c$ as _$$c$ } from "../905/867927";
import { q as _$$q3 } from "../905/932270";
import { setupToggleButton } from "../905/167712";
import { E as _$$E2 } from "../905/53857";
import { C as _$$C } from "../8826/771306";
import { g as _$$g } from "../8826/914688";
import { setupThemeContext } from "../905/614223";
import { p as _$$p } from "../figma_app/353099";
import { A as _$$A } from "../905/920142";
import { h as _$$h } from "../905/207101";
import { buildUploadUrl } from "../figma_app/169182";
import { UpgradeAction } from "../905/370443";
import { e as _$$e } from "../905/621515";
import { Fy, mp } from "../figma_app/579169";
import { N as _$$N2 } from "../figma_app/268271";
import { y as _$$y } from "../905/129046";
import { rq } from "../905/425180";
import { F_ } from "../905/858282";
import { c$$ } from "../figma_app/6204";
import { e as _$$e2 } from "../905/810361";
import { Yh } from "../figma_app/357047";
import { m7, Hh } from "../figma_app/386160";
import { A as _$$A2 } from "../svg/179975";
import { A as _$$A3 } from "../svg/299062";
import { d as _$$d } from "../905/976845";
import { s as _$$s } from "../8826/112372";
import { U as _$$U, s as _$$s2 } from "../642/632766";
import { Q as _$$Q } from "../905/567676";
import { v as _$$v } from "../905/343590";
import { A5, Yv, QP, zp, Z6 } from "../figma_app/960598";
import { A as _$$A4 } from "../5724/388041";
let A = memo(function (e) {
  return _$$O() ? jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M12 6a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11A.5.5 0 0 1 12 6M9 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm0 2V9H7v6h2zm9-1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm-1 0v6h-2V9z",
      clipRule: "evenodd"
    })
  }) : jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M11.5 6a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5M9 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm0 2V9H7v6h2zm8-1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm-1 0v6h-2V9z",
      clipRule: "evenodd"
    })
  });
});
let E = memo(function (e) {
  return _$$O() ? jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M16 9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-2 0h1V7H9v2zm4 2.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1 0-1h11a.5.5 0 0 1 .5.5M15 17a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1zm0-1H9v-2h6z",
      clipRule: "evenodd"
    })
  }) : jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M16 9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-2 0h1V7H9v2zm4 3a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1 0-1h11a.5.5 0 0 1 .5.5m-3 6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1zm0-1H9v-2h6z",
      clipRule: "evenodd"
    })
  });
});
function B(e) {
  let t = useDispatch();
  let n = Xs();
  let a = kl("detectedList");
  let s = kl("detectableListAxis");
  let c = normalizeValue(a);
  let d = Zr("arrange-as-grid");
  let u = useRef(null);
  if (!c && null == u.current && !d && null == s) return null;
  let h = c?.canvasSpacingBetweenItemsX != null || "X" === s || d || u.current === Axis.X;
  let g = c?.canvasSpacingBetweenItemsY != null || "Y" === s || d || u.current === Axis.Y;
  let m = jsx(gq, {
    dispatch: t,
    min: F(c, "X"),
    mixedMathHandler: new G(Axis.X),
    onScrubBegin: () => {
      u.current = Axis.X;
    },
    onScrubEnd: () => {
      u.current = null;
    },
    onValueChange: z(c, "X"),
    value: c?.canvasSpacingBetweenItemsX,
    ...n,
    className: BP,
    "data-tooltip": getI18nString("fullscreen.properties_panel.transform_panel.list_spacing_x"),
    "data-tooltip-type": KindEnum.TEXT,
    dataTestId: "list-spacing-x",
    inputClassName: hF,
    recordingKey: generateRecordingKey(e, "listSpacingX"),
    tooltipForScreenReadersOnly: !0,
    children: jsx(A, {
      className: QK
    })
  });
  let x = jsx(gq, {
    dispatch: t,
    min: F(c, "Y"),
    mixedMathHandler: new G(Axis.Y),
    onScrubBegin: () => {
      u.current = Axis.Y;
    },
    onScrubEnd: () => {
      u.current = null;
    },
    onValueChange: z(c, "Y"),
    value: c?.canvasSpacingBetweenItemsY,
    ...n,
    className: h ? sC : BP,
    "data-tooltip": getI18nString("fullscreen.properties_panel.transform_panel.list_spacing_y"),
    "data-tooltip-type": KindEnum.TEXT,
    dataTestId: "list-spacing-y",
    inputClassName: hF,
    recordingKey: generateRecordingKey(e, "listSpacingY"),
    tooltipForScreenReadersOnly: !0,
    children: jsx(E, {
      className: QK
    })
  });
  return jsx(fn, {
    leftLabel: renderI18nText("properties.label.spacing"),
    leftInput: h ? m : x,
    rightInput: g && h ? x : null,
    icon: null,
    rightLabel: null
  });
}
function F(e, t) {
  return e ? e.minItemSize ? -e.minItemSize["X" === t ? 0 : 1] + 1 : 0 : -1 / 0;
}
let z = (e, t) => (n, l) => {
  let i = "X" === t ? "canvasSpacingBetweenItemsX" : "canvasSpacingBetweenItemsY";
  fullscreenValue.updateSelectionProperties({
    detectedList: {
      [i]: Math.max(n, F(e, t))
    }
  }, {
    shouldCommit: l
  });
  let r = "number" == typeof e?.canvasSpacingBetweenItemsX && "number" == typeof e?.canvasSpacingBetweenItemsY;
  l && _$$F.trackFromFullscreen("magic_collections_list_spacing_changed", {
    source: "panel",
    spacing_did_change: !e || n !== e[i],
    was_mixed: !e,
    type: r ? "grid" : "list"
  });
};
class G {
  constructor(e) {
    this.axis = e;
  }
  getValue() {
    return Fullscreen.getCurrentListSpacing(this.axis);
  }
  onChange(e, t, n) {
    let l = e.spacings.map(t);
    permissionScopeHandler.user("update-list-spacing", () => {
      Fullscreen.setCurrentListSpacing({
        ...e,
        spacings: l
      }, this.axis);
      n !== yesNoTrackingEnum.NO && Fullscreen.triggerAction("commit", {});
    });
  }
}
let D = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "m11.854 10.854 2-2a.5.5 0 0 0-.708-.708L12 9.293V5.5a.5.5 0 0 0-1 0v3.793L9.854 8.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0m0 3.292 2 2a.5.5 0 0 1-.708.708L12 15.707V19.5a.5.5 0 0 1-1 0v-3.793l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0M5.5 12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1z",
      clipRule: "evenodd"
    })
  });
});
let U = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M6.5 5a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1zm0 13a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1zm4.646-10.854a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1-.708.708L12 8.707v6.586l1.646-1.647a.5.5 0 0 1 .708.708l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 0 1 .708-.708L11 15.293V8.707l-1.646 1.647a.5.5 0 0 1-.708-.708z",
      clipRule: "evenodd"
    })
  });
});
var Q = X;
var Z = $;
function ea(e) {
  let t = Wr();
  let n = function () {
    let [e, t] = useAtomValueAndSetter(_$$Kl);
    let n = Wr();
    let l = KH();
    let r = useMemo(() => ({
      selection: l,
      height: {
        max: n.height.max.value,
        min: n.height.min.value
      },
      width: {
        max: n.width.max.value,
        min: n.width.min.value
      },
      visibleState: e
    }), [n.height.max.value, n.height.min.value, n.width.max.value, n.width.min.value, l, e]);
    let a = function (e) {
      let t = useRef(e);
      let n = t.current;
      t.current = e;
      return n;
    }(r);
    let o = kl("aspectRatioLockToggled");
    let s = useMemo(() => {
      if (a.selection !== r.selection || !o) return e;
      let t = Q()(e);
      for (let e of ["min", "max"]) {
        let n = !r.visibleState.height[e] && a.visibleState.height[e] || !r.visibleState.width[e] && a.visibleState.width[e];
        if (o && n) {
          t.height[e] = !1;
          t.width[e] = !1;
          continue;
        }
        let l = r.visibleState.width[e] || r.visibleState.height[e];
        if (o && l) {
          t.height[e] = !0;
          t.width[e] = !0;
          continue;
        }
        let i = r.height[e] && r.height[e] !== a.height[e] && !r.visibleState.height[e];
        let s = r.width[e] && r.width[e] !== a.width[e] && !r.visibleState.width[e];
        if (i || s) {
          t.height[e] = !0;
          t.width[e] = !0;
          continue;
        }
      }
      return t;
    }, [r, a, o, e]);
    useEffect(() => {
      Z()(s, e) || t(s);
    }, [s, e, t]);
    return s;
  }();
  let r = useAtomWithSubscription(Md);
  let a = Fp();
  let o = useRef(null);
  let s = !e.visible || !tH(n);
  let c = kl("aspectRatioLockToggled");
  if (Nu(!s, () => a("minmax", null, qi.YES), o, e.widthHeightRowRef), s) return null;
  let d = 0;
  let u = 0;
  let p = [];
  function h(e) {
    let t = null != r && r.widthOrHeight === e.widthOrHeight && r.minOrMax === e.minOrMax;
    return "width" === e.widthOrHeight && c ? jsxs("div", {
      className: BG,
      children: [jsx(_$$W, {
        shouldAnimateIn: !1
      }), jsx(es, {
        minMaxApi: e,
        shouldFocus: t,
        recordingKey: `minMaxDropdown.${e.minOrMax}${e.widthOrHeight}`
      }, `${e.widthOrHeight}-${e.minOrMax}`)]
    }) : jsx(es, {
      minMaxApi: e,
      shouldFocus: t,
      recordingKey: `minMaxDropdown.${e.minOrMax}${e.widthOrHeight}`
    }, `${e.widthOrHeight}-${e.minOrMax}`);
  }
  function g(e) {
    switch (e.minOrMaxWidthOrHeight) {
      case "minWidth":
        return renderI18nText("properties.label.min_width");
      case "maxWidth":
        return renderI18nText("properties.label.max_width");
      case "minHeight":
        return renderI18nText("properties.label.min_height");
      case "maxHeight":
        return renderI18nText("properties.label.max_height");
    }
  }
  n.width.min && (d++, p.push(t.width.min));
  n.width.max && (d++, p.push(t.width.max));
  n.height.min && (u++, p.push(t.height.min));
  n.height.max && (u++, p.push(t.height.max));
  let m = p.map(h);
  let x = p.map(g);
  if (d + u === 1) {
    let e = 1 === d;
    return jsx(fn, {
      ref: o,
      leftLabel: e ? x[0] : null,
      leftInput: e ? m[0] : null,
      rightLabel: e ? null : x[0],
      rightInput: e ? null : m[0],
      icon: null
    });
  }
  if (1 === d && 1 === u) return jsx(fn, {
    ref: o,
    leftLabel: x[0],
    leftInput: m[0],
    rightLabel: x[1],
    rightInput: m[1],
    icon: null
  });
  if (d + u === 2) {
    let e = 2 === d;
    return jsxs("div", {
      ref: o,
      children: [jsx(fn, {
        ref: o,
        leftLabel: e ? x[0] : null,
        leftInput: e ? m[0] : null,
        rightLabel: e ? null : x[0],
        rightInput: e ? null : m[0],
        icon: null
      }), jsx(fn, {
        ref: o,
        leftLabel: e ? x[1] : null,
        leftInput: e ? m[1] : null,
        rightLabel: e ? null : x[1],
        rightInput: e ? null : m[1],
        icon: null
      })]
    });
  }
  return jsxs("div", {
    ref: o,
    children: [jsx(fn, {
      leftLabel: g(t.width.min),
      leftInput: h(t.width.min),
      rightLabel: g(t.height.min),
      rightInput: h(t.height.min),
      icon: null
    }), jsx(fn, {
      leftLabel: g(t.width.max),
      leftInput: h(t.width.max),
      rightLabel: g(t.height.max),
      rightInput: h(t.height.max),
      icon: null
    })]
  });
}
function eo(e) {
  switch (e.widthOrHeight) {
    case "width":
      return "min" === e.minOrMax ? getI18nString("fullscreen.properties_panel.stack_panel.minmax.min_width_tt") : getI18nString("fullscreen.properties_panel.stack_panel.minmax.max_width_tt");
    case "height":
      return "min" === e.minOrMax ? getI18nString("fullscreen.properties_panel.stack_panel.minmax.min_height_tt") : getI18nString("fullscreen.properties_panel.stack_panel.minmax.max_height_tt");
  }
}
function es(e) {
  let t;
  let {
    minMaxApi,
    shouldFocus
  } = e;
  let a = kl("isNonEditableInstanceSublayerSelected");
  let s = kl(minMaxApi.widthOrHeight);
  let c = kl(minMaxApi.minOrMaxWidthOrHeight);
  let d = Fp();
  let u = useRef(0);
  let h = useRef(new Map());
  let g = Xr(Md);
  let [m, x] = useAtomValueAndSetter(_$$Kl);
  let f = [];
  s !== minMaxApi.value && f.push(vC);
  f.push(Bn);
  let w = f.map(t => {
    let n = isInvalidValue(s);
    return jsx(c$, {
      recordingKey: generateRecordingKey(e.recordingKey, "select", t),
      value: t,
      disabled: !!a || t === vC && n
    }, t);
  });
  let y = useRef(null);
  let C = function (e) {
    switch (e.widthOrHeight) {
      case "width":
        return "min" === e.minOrMax ? "MIN_WIDTH" : "MAX_WIDTH";
      case "height":
        return "min" === e.minOrMax ? "MIN_HEIGHT" : "MAX_HEIGHT";
    }
  }(minMaxApi);
  switch (minMaxApi.widthOrHeight) {
    case "width":
      t = "min" === minMaxApi.minOrMax ? jsx(_$$l, {}) : jsx(_$$R2, {});
      break;
    case "height":
      t = "min" === minMaxApi.minOrMax ? jsx(D, {}) : jsx(U, {});
  }
  let S = "width" === minMaxApi.widthOrHeight ? Axis.X : Axis.Y;
  useEffect(() => {
    shouldFocus && (y.current?.focus(), y.current?.select());
  }, [shouldFocus]);
  let j = VY(minMaxApi);
  let {
    clearVariableConsumption
  } = _$$O2(C, VariableResolvedDataType.FLOAT);
  let N = useCallback((e, t = yesNoTrackingEnum.YES) => {
    if (clearVariableConsumption(yesNoTrackingEnum.NO), e === vC) "number" == typeof s && minMaxApi.set(s || null, yesNoTrackingEnum.NO);else if (e === Bn) {
      minMaxApi.set(null, yesNoTrackingEnum.NO);
      let e = {
        [minMaxApi.widthOrHeight]: {
          ...m[minMaxApi.widthOrHeight],
          [minMaxApi.minOrMax]: !1
        }
      };
      x({
        ...m,
        ...e
      });
      g(null);
    } else ("number" == typeof e || null == e) && minMaxApi.set(e, yesNoTrackingEnum.NO, u.current);
    t === yesNoTrackingEnum.YES && fullscreenValue.triggerAction("commit");
  }, [clearVariableConsumption, s, minMaxApi, m, x, g]);
  class I extends _$$M {
    getValueForNode(e) {
      return SceneGraphHelpers.getNodeTransformProperties(e.guid)[minMaxApi.minOrMaxWidthOrHeight];
    }
    setValueForNode(e, t, l) {
      let i = {
        [minMaxApi.minOrMaxWidthOrHeight]: t
      };
      if (l && h.current.has(e.guid)) {
        let l = h.current.get(e.guid);
        i[minMaxApi.widthOrHeight] = l;
        let r = jz(e, l, t, minMaxApi.widthOrHeight);
        r !== l && (i[minMaxApi.widthOrHeight] = r);
        i.sizeChangeIsAutomatic = !0;
      }
      SceneGraphHelpers.setNodeTransformProperties(e.guid, i);
    }
  }
  return jsx(ow, {
    value: {
      select: pW,
      inputComponent: gm
    },
    children: jsx(tV, {
      value: {
        chevron: _$$t2
      },
      children: jsx(_$$S, {
        allowEmpty: !0,
        "aria-label": eo(minMaxApi),
        "data-tooltip-max-width": 200,
        dropdownAlignment: "width" === minMaxApi.widthOrHeight ? "left" : "right",
        dropdownWidth: 162,
        formatter: j,
        icon: t,
        iconId: `icon-${e.minMaxApi.widthOrHeight}-${e.minMaxApi.minOrMax}`,
        id: `minMaxDropdown.${e.minMaxApi.minOrMax}${e.minMaxApi.widthOrHeight}`,
        inputRef: y,
        inputTestId: `transform-${e.minMaxApi.widthOrHeight}-${e.minMaxApi.minOrMax}`,
        mixedMathHandler: new I(),
        noBorderOnFocus: !0,
        omitValueFromDropdown: !0,
        onBlur: () => {
          d("minmax", {
            axis: S,
            renderLabels: !0
          }, qi.YES_ONLY_MIN_MAX);
          g(null);
        },
        onChange: N,
        onFocus: () => d("minmax", {
          axis: S,
          renderLabels: !0
        }, qi.YES),
        onMouseEnter: () => d("minmax", {
          axis: S,
          renderLabels: !0
        }),
        onMouseLeave: () => d("minmax", null),
        onScrubBegin: () => {
          isInvalidValue(c) ? getSingletonSceneGraph().getDirectlySelectedNodes().forEach(e => {
            h.current.set(e.guid, e.size[S === Axis.X ? "x" : "y"]);
          }) : "number" == typeof s ? u.current = s : u.current = 0;
        },
        onScrubEnd: () => {
          h.current.clear();
          u.current = 0;
        },
        openBelowTarget: !0,
        options: w,
        outerClassName: "width" === minMaxApi.widthOrHeight ? Kw : X8,
        placeholder: function (e) {
          switch (e.widthOrHeight) {
            case "width":
              return "min" === e.minOrMax ? getI18nString("fullscreen.properties_panel.stack_panel.minmax.min_width_short") : getI18nString("fullscreen.properties_panel.stack_panel.minmax.max_width_short");
            case "height":
              return "min" === e.minOrMax ? getI18nString("fullscreen.properties_panel.stack_panel.minmax.min_height_short") : getI18nString("fullscreen.properties_panel.stack_panel.minmax.max_height_short");
          }
        }(minMaxApi),
        recordingKey: e.recordingKey,
        shiftVariableOptionToAlign: !0,
        shouldFocus,
        showTooltipOnTargetOnly: !0,
        source: "panel",
        tooltipText: eo(minMaxApi),
        value: minMaxApi.value,
        variableField: C
      })
    })
  });
}
let ev = _$$ex("autolayout_v3_migration_info", function (e) {
  let {
    tooltipText
  } = e;
  let n = ignoreCommandOrShift(e => {
    e.stopPropagation();
    customHistory.unsafeRedirect("https://help.figma.com/hc/articles/360040451373#Updates_to_Auto_Layout", "_blank");
  });
  return jsxs("div", {
    className: "autolayout_v3_migration_info_tooltip--autolayoutMigration--OQ8zC",
    children: [tooltipText, jsx(_$$N, {
      newTab: !0,
      trusted: !0,
      href: "https://help.figma.com/hc/articles/360040451373#Updates_to_Auto_Layout",
      htmlAttributes: {
        onMouseDown: n
      },
      children: renderI18nText("fullscreen.properties_panel.migration_tooltip_learn_more")
    })]
  });
}, e => ({
  tooltipText: e.getAttribute("data-tooltip-text")
}));
var eS = eC;
let ej = "alignment_view_v4_ui3--indicatorBaseline--NUe6M";
let eb = "alignment_view_v4_ui3--counterCenter--QC-B7";
function eN({
  onClick: e,
  onDoubleClick: t,
  onHover: n,
  ...r
}) {
  let a = rO(r.stackPrimaryAlignItems);
  let o = "BASELINE" === r.stackCounterAlignItems;
  let s = c4(normalizeValue(r.stackMode)) ? "HORIZONTAL" : "VERTICAL";
  let c = "WRAP" === r.stackWrap;
  let d = "HORIZONTAL" === s ? "alignment_view_v4_ui3--horizontal--2Shqc" : "alignment_view_v4_ui3--vertical--zGQMJ";
  let u = a ? "alignment_view_v4_ui3--spaceBetween--o3EAq" : "alignment_view_v4_ui3--packed--EvdQi";
  let p = isValidValue(r.stackPrimaryAlignItems) && isValidValue(r.stackCounterAlignItems);
  let h = r.primaryHover && r.counterHover;
  let g = useCallback(e => {
    let [n, l] = eH(e.target);
    if (a) {
      let t = e.target.getBoundingClientRect();
      "HORIZONTAL" === s ? n = Math.floor((e.clientX - t.x) / t.width * 3) : l = Math.floor((e.clientY - t.y) / t.height * 3);
    }
    t(n, l);
  }, [t, a, s]);
  let m = useCallback(e => n(...eH(e.target)), [n]);
  let _ = useCallback(e => n(null, null), [n]);
  return jsxs("div", {
    className: eS()(r.className, "alignment_view_v4_ui3--mainContainer---0NcS", d, u, {
      "alignment_view_v4_ui3--baselineAlign--OxyzT": o
    }),
    tabIndex: 0,
    onKeyDown: r.onKeyDown,
    "data-testid": "alignment-view",
    children: [jsx(eM, {}), jsx(eO, {
      stackMode: s,
      spaceBetween: a,
      baselineAlign: o,
      onMouseMove: m,
      onMouseOut: _,
      onClick: e,
      onDoubleClick: g
    }), h && jsx(eI, {
      hover: !0,
      primaryAlign: r.primaryHover,
      counterAlign: r.counterHover,
      isStackWrap: c
    }), p && jsx(eI, {
      primaryAlign: r.stackPrimaryAlignItems,
      counterAlign: r.stackCounterAlignItems,
      isStackWrap: c
    }), o && jsx("div", {
      className: "alignment_view_v4_ui3--grid3x3--306xj alignment_view_v4_ui3--_centered--MV2if",
      children: jsx(eL, {
        onClick: r.onRemoveBaseline
      })
    })]
  });
}
function eI({
  hover: e,
  primaryAlign: t,
  counterAlign: n,
  isStackWrap: i
}) {
  function r() {
    let e = rO(t);
    if ("BASELINE" === n) return e ? jsxs(Fragment, {
      children: [jsx("span", {
        className: ej,
        children: "A"
      }), jsx("span", {
        className: ej,
        children: "A"
      }), jsx("span", {
        className: ej,
        children: "A"
      })]
    }) : jsx("span", {
      className: ej,
      children: "A"
    });
    let r = i && !e ? 5 : 3;
    return jsx(eA, {
      n: r
    });
  }
  return jsx("div", {
    className: eS()("alignment_view_v4_ui3--indicatorContainer--napq- alignment_view_v4_ui3--tooltipGrid--HBKLD alignment_view_v4_ui3--grid3x3--306xj alignment_view_v4_ui3--_centered--MV2if", t ? eR[t] : void 0, n ? eE[n] : void 0, {
      "alignment_view_v4_ui3--hover--ypG6x": e
    }),
    children: "BASELINE" === n ? r() : jsx("div", {
      className: "alignment_view_v4_ui3--indicatorGridCell--lp1lH",
      children: jsx("div", {
        className: eS()("alignment_view_v4_ui3--indicatorGroup--urXG2", {
          "alignment_view_v4_ui3--wrap--JWwtI": i
        }),
        children: r()
      })
    })
  });
}
function eA({
  n: e
}) {
  return jsx(Fragment, {
    children: Array.from({
      length: e
    }, (e, t) => jsx("div", {
      className: "alignment_view_v4_ui3--indicator--82j5F"
    }, t))
  });
}
let eE = {
  MIN: "alignment_view_v4_ui3--counterMin--aOx1R",
  CENTER: eb,
  MAX: "alignment_view_v4_ui3--counterMax--cCtqr",
  BASELINE: eb
};
let eR = {
  MIN: "alignment_view_v4_ui3--primaryMin--Q8O6a",
  CENTER: "alignment_view_v4_ui3--primaryCenter--RzFRC",
  MAX: "alignment_view_v4_ui3--primaryMax--eMvqL",
  SPACE_EVENLY: "",
  SPACE_BETWEEN: ""
};
function eL({
  onClick: e
}) {
  return jsx("button", {
    className: "alignment_view_v4_ui3--baselineControls--xazGW alignment_view_v4_ui3--_centered--MV2if",
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("fullscreen.properties_panel.stack_panel.remove_baseline_align"),
    onClick: e,
    children: jsx("div", {
      className: "alignment_view_v4_ui3--baselineControlLine--6BBmA"
    })
  });
}
function eO({
  spaceBetween: e,
  stackMode: t,
  baselineAlign: n,
  onMouseMove: i,
  onMouseOut: r,
  onClick: a,
  onDoubleClick: o
}) {
  let s = function ({
    baselineAlign: e,
    spaceBetween: t,
    stackMode: n,
    isUi3: l
  }) {
    return e && t ? l ? [{
      tooltip: getI18nString("fullscreen.properties_panel.stack_panel.align_text_baseline"),
      below: !0
    }] : [getI18nString("fullscreen.properties_panel.stack_panel.align_baseline")] : e ? [{
      tooltip: getI18nString("fullscreen.properties_panel.stack_panel.align_left_baseline"),
      below: l
    }, {
      tooltip: getI18nString("fullscreen.properties_panel.stack_panel.align_center_baseline"),
      below: l
    }, {
      tooltip: getI18nString("fullscreen.properties_panel.stack_panel.align_right_baseline"),
      below: l
    }] : t ? "HORIZONTAL" === n ? l ? [getI18nString("fullscreen.properties_panel.stack_panel.align_top"), getI18nString("fullscreen.properties_panel.stack_panel.align_center"), {
      tooltip: getI18nString("fullscreen.properties_panel.stack_panel.align_bottom"),
      below: !0
    }] : [getI18nString("fullscreen.properties_panel.stack_panel.align_auto_top_gap"), getI18nString("fullscreen.properties_panel.stack_panel.align_auto_center_gap"), {
      tooltip: getI18nString("fullscreen.properties_panel.stack_panel.align_auto_bottom_gap"),
      below: !0
    }] : l ? [getI18nString("fullscreen.properties_panel.stack_panel.align_left"), getI18nString("fullscreen.properties_panel.stack_panel.align_center"), getI18nString("fullscreen.properties_panel.stack_panel.align_right")] : [getI18nString("fullscreen.properties_panel.stack_panel.align_auto_left_gap"), getI18nString("fullscreen.properties_panel.stack_panel.align_auto_center_gap"), getI18nString("fullscreen.properties_panel.stack_panel.align_auto_right_gap")] : [getI18nString("fullscreen.properties_panel.stack_panel.align_top_left"), getI18nString("fullscreen.properties_panel.stack_panel.align_top_center"), getI18nString("fullscreen.properties_panel.stack_panel.align_top_right"), getI18nString("fullscreen.properties_panel.stack_panel.align_left"), getI18nString("fullscreen.properties_panel.stack_panel.align_center"), getI18nString("fullscreen.properties_panel.stack_panel.align_right"), {
      tooltip: getI18nString("fullscreen.properties_panel.stack_panel.align_bottom_left"),
      below: !0
    }, {
      tooltip: getI18nString("fullscreen.properties_panel.stack_panel.align_bottom_center"),
      below: !0
    }, {
      tooltip: getI18nString("fullscreen.properties_panel.stack_panel.align_bottom_right"),
      below: !0
    }];
  }({
    stackMode: t,
    baselineAlign: n,
    spaceBetween: e,
    isUi3: !0
  });
  return jsx("div", {
    className: "alignment_view_v4_ui3--tooltipGrid--HBKLD alignment_view_v4_ui3--grid3x3--306xj alignment_view_v4_ui3--_centered--MV2if",
    onMouseMove: i,
    onMouseOut: r,
    onClick: a,
    onDoubleClick: o,
    children: "HORIZONTAL" === t && n && e ? jsx(eT, {
      tooltips: s
    }) : s.map((n, i) => {
      let r = i % 3;
      let a = Math.floor(i / 3);
      "HORIZONTAL" === t && e && (a = r, r = 0);
      return jsx(eP, {
        x: r,
        y: a,
        ...("string" == typeof n ? {
          tooltip: n
        } : n)
      }, i);
    })
  });
}
function eT({
  tooltips: e
}) {
  let t = useId();
  let n = e[0];
  return null == n ? null : jsxs(Fragment, {
    children: [jsx("div", {
      "data-tooltip-proxy-element-id": t
    }), jsx(eP, {
      id: t,
      x: 1,
      y: 1,
      ...("string" == typeof n ? {
        tooltip: n
      } : n)
    }), jsx("div", {
      "data-tooltip-proxy-element-id": t
    })]
  });
}
function eP({
  id: e,
  x: t,
  y: n,
  tooltip: i,
  below: r
}) {
  return jsx("div", {
    id: e,
    "data-x": t,
    "data-y": n,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": i,
    "data-tooltip-show-above": !r || void 0
  });
}
function eM() {
  return jsx("div", {
    className: "alignment_view_v4_ui3--dotGrid--N6RPe alignment_view_v4_ui3--grid3x3--306xj alignment_view_v4_ui3--_centered--MV2if",
    children: Array.from({
      length: 9
    }, (e, t) => jsx("div", {
      className: "alignment_view_v4_ui3--dotGridCell--r7m5y",
      children: jsx("div", {
        className: "alignment_view_v4_ui3--dot--d5NQx"
      }, t)
    }, t))
  });
}
function eH(e) {
  let {
    x,
    y
  } = e.dataset;
  return [parseInt(x), parseInt(y)];
}
let eF = ["MIN", "CENTER", "MAX"];
function ez({
  className: e,
  recordingKey: t
}) {
  let n = kl("stackMode");
  let a = kl("stackWrap");
  let [s, c] = lJ("stackPrimaryAlignItems");
  let [u, g] = lJ("stackCounterAlignItems");
  let [m, _] = useState(void 0);
  let [x, v] = useState(void 0);
  let f = sR();
  let w = uV();
  let C = trackFileEventWithUser();
  let S = useSelector(Sh);
  let j = isFullscreenSitesView(getSelectedView());
  let b = rO(s);
  let N = "BASELINE" === u;
  let I = useCallback((e, t) => {
    if (null == e || null == t) {
      _(void 0);
      v(void 0);
      return;
    }
    let l = eG(e, t, n, b, j);
    let i = eK(e, t, n, N);
    _(l);
    v(i);
  }, [n, N, b, _, v, j]);
  let A = useHandleMouseEvent(t, "click", useCallback(e => {
    let t = m;
    let n = x;
    e && e.__interactionTest && (t = e.primaryAlignItems, n = e.counterAlignItems);
    t && n && (b || c(t, yesNoTrackingEnum.NO), g(n), C("Autolayout alignment grid used", {
      nodeIds: S
    }));
  }, [m, x, b, g, C, c, S]), {
    recordMetadata: () => ({
      primaryAlignItems: m,
      counterAlignItems: x
    }),
    playbackMetadata: e => ({
      ...e,
      __interactionTest: !0
    })
  });
  let {
    clearVariableConsumption
  } = _$$O2("STACK_SPACING", VariableResolvedDataType.FLOAT);
  let L = useCallback((e, t) => {
    w(void 0 === t || t, e, yesNoTrackingEnum.NO);
    clearVariableConsumption();
  }, [w, clearVariableConsumption]);
  let T = useCallback((e, t) => {
    if (b) {
      w(!1, "alignment double click", yesNoTrackingEnum.NO);
      let l = eG(e, t, n, !1, j);
      let i = eK(e, t, n, N);
      _(l);
      v(i);
      c(l, yesNoTrackingEnum.NO);
      g(i);
      C("Autolayout spacing mode changed", {
        mode: l,
        doubleClick: !0
      });
    } else {
      L("alignment double click");
      g(eK(e, t, n, N));
    }
  }, [L, N, b, g, c, w, n, C, j]);
  let P = useCallback(() => {
    g("CENTER");
    C("Disable baseline alignment", {
      source: "alignment grid"
    });
  }, [g, C]);
  let M = useHandleKeyboardEvent(t, "keydown", useCallback(e => {
    function t(e) {
      c4(normalizeValue(n)) ? c(e) : g(e);
    }
    function l(e) {
      "VERTICAL" === n ? c(e) : g(e);
    }
    function i(e, t) {
      if (isInvalidValue(e)) return "CENTER";
      let n = eF.indexOf(e);
      if (-1 === n) return null;
      let l = clamp(n + t, 0, eF.length - 1);
      return eF[l];
    }
    let r = c4(normalizeValue(n)) ? s : u;
    let a = "VERTICAL" === n ? s : u;
    switch (e.keyCode) {
      case KeyCodes.ESCAPE:
      case KeyCodes.ENTER:
        e.currentTarget.blur();
        break;
      case KeyCodes.UP_ARROW:
        {
          let e = i(a, -1);
          e && l(e);
          break;
        }
      case KeyCodes.DOWN_ARROW:
        {
          let e = i(a, 1);
          e && l(e);
          break;
        }
      case KeyCodes.LEFT_ARROW:
        {
          let e = i(r, -1);
          e && t(e);
          break;
        }
      case KeyCodes.RIGHT_ARROW:
        {
          let e = i(r, 1);
          e && t(e);
          break;
        }
      case KeyCodes.B:
        "HORIZONTAL" === n && f("BASELINE" !== u, "alignment keyboard");
        break;
      case KeyCodes.X:
        L("alignment keyboard", !rO(s));
        break;
      case KeyCodes.W:
        l("MIN");
        break;
      case KeyCodes.A:
        t("MIN");
        break;
      case KeyCodes.S:
        l("MAX");
        break;
      case KeyCodes.D:
        t("MAX");
        break;
      case KeyCodes.V:
        l("CENTER");
        break;
      case KeyCodes.H:
        t("CENTER");
        break;
      default:
        jr(e, W0.YES, VA.YES);
        return;
    }
    e.preventDefault();
  }, [L, u, s, f, g, c, n]));
  let H = jsx(eN, {
    className: e,
    counterHover: x,
    onClick: A,
    onDoubleClick: T,
    onHover: I,
    onKeyDown: M,
    onRemoveBaseline: P,
    primaryHover: m,
    stackCounterAlignItems: u,
    stackMode: n,
    stackPrimaryAlignItems: s,
    stackWrap: a
  });
  return jsx(_$$E, {
    name: "alignment_view",
    children: H
  });
}
function eG(e, t, n, l, i) {
  return l ? getFeatureFlags().ce_stack_justify_space_between || i ? "SPACE_BETWEEN" : "SPACE_EVENLY" : eF["VERTICAL" === n ? t : e];
}
function eK(e, t, n, l) {
  return l ? "BASELINE" : eF["VERTICAL" === n ? e : t];
}
let e$ = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M11.653 13.008A1.5 1.5 0 0 1 13 14.5v2l-.008.153a1.5 1.5 0 0 1-1.339 1.34L11.5 18h-2l-.153-.008a1.5 1.5 0 0 1-1.34-1.339L8 16.5v-2a1.5 1.5 0 0 1 1.347-1.492L9.5 13h2zM9.5 14a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zm7.153-5.992A1.5 1.5 0 0 1 18 9.5v2l-.008.153a1.5 1.5 0 0 1-1.339 1.34L16.5 13h-2l-.153-.008a1.5 1.5 0 0 1-1.34-1.339L13 11.5v-2a1.5 1.5 0 0 1 1.347-1.492L14.5 8h2zM14.5 9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM9.653 6.008A1.5 1.5 0 0 1 11 7.5v2l-.008.153a1.5 1.5 0 0 1-1.339 1.34L9.5 11h-2l-.153-.008a1.5 1.5 0 0 1-1.34-1.339L6 9.5v-2a1.5 1.5 0 0 1 1.347-1.492L7.5 6h2zM7.5 7a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"
    })
  });
});
let tn = "grid-onboarding-key";
function tl() {
  let e = useAtomWithSubscription(Fy);
  let t = useAtomWithSubscription(mp);
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: c$$,
    priority: _$$N2.SECONDARY_MODAL
  }, [e, t]);
  _$$h(() => {
    show({
      canShow: (e, t) => e && null != t && _$$A(t).isBefore("2025-05-07")
    });
  });
  let a = () => {
    complete();
  };
  return jsx(rq, {
    arrowPosition: F_.RIGHT_BODY,
    description: renderI18nText("fullscreen.grid_onboarding.body"),
    disableHighlight: !0,
    isShowing,
    media: jsx(_$$y, {
      src: buildUploadUrl("2e525d09f6957555822a1b327dea20c644cea10d"),
      alt: "A GIF demonstrating a frame with grid layout applied.",
      aspectRatio: 16 / 9
    }),
    onClose: a,
    onTargetLost: a,
    pointToLeftEdge: !0,
    primaryCta: {
      label: renderI18nText("general.got_it"),
      type: "button",
      onClick: a,
      ctaTrackingDescriptor: UpgradeAction.GOT_IT
    },
    secondaryCta: {
      label: renderI18nText("general.learn_more"),
      type: "link",
      href: "https://help.figma.com/hc/articles/31289469907863",
      ctaTrackingDescriptor: UpgradeAction.LEARN_MORE
    },
    targetKey: tn,
    title: jsx("p", {
      "data-testid": "grid-onboarding-title",
      children: renderI18nText("fullscreen.grid_onboarding.title")
    }),
    trackingContextName: "Grid Onboarding"
  });
}
function ta() {
  return selectWithShallowEqual(e => {
    let {
      mirror: {
        appModel,
        selectionProperties: {
          propertiesPanelShouldShowRemoveAutoLayout,
          propertiesPanelShouldShowAddAutoLayout,
          containsStacksNeedingAlignmentMigration,
          stackMode,
          stackWrap
        }
      }
    } = e;
    return {
      showMigrationUi: containsStacksNeedingAlignmentMigration,
      actionEnabledStackSelection: Yh(appModel, "stack-selection"),
      actionEnabledMultiStackSelection: Yh(appModel, "run-multi-stack-auto-layout"),
      actionEnabledUnstackSelection: Yh(appModel, "unstack-selection"),
      propertiesPanelShouldShowRemoveAutoLayout,
      propertiesPanelShouldShowAddAutoLayout,
      wrappingEnabled: ("HORIZONTAL" === stackMode || isInvalidValue(stackMode)) && ("WRAP" === stackWrap || isInvalidValue(stackWrap))
    };
  });
}
function td({
  recordingKey: e,
  isSelectionStackOrGrid: t
}) {
  let n = kl("stackMode");
  let i = useSelector(Sh);
  let a = b7();
  let o = useSelector(e => aW(void 0, e.mirror.selectionProperties, void 0));
  let s = kl("isInstanceSelected");
  let c = kl("isSlotSelected");
  let d = kl("nodesAllAcceptLayoutChanges");
  let u = i.length > 1;
  let {
    propertiesPanelShouldShowAddAutoLayout,
    propertiesPanelShouldShowRemoveAutoLayout
  } = ta();
  let {
    isNoLayoutControlReadOnly,
    isStackControlReadOnly,
    isGridControlReadOnly
  } = function () {
    let e = useIsFullscreenSitesView();
    let t = useSelector(F4);
    let n = getSingletonSceneGraph();
    let l = {
      isNoLayoutControlReadOnly: !1,
      isStackControlReadOnly: !1,
      isGridControlReadOnly: !1
    };
    if (!n || !e || !_$$e2) return l;
    for (let e of t) {
      if (e.isInPrimaryBreakpointFrame) return {
        isNoLayoutControlReadOnly: !1,
        isStackControlReadOnly: !1,
        isGridControlReadOnly: !1
      };
      {
        let t = e.primaryGluedNodeId;
        if (t) {
          let i = n.get(t);
          if (i && i.visible && (e.isGrid ? (l.isNoLayoutControlReadOnly = !0, l.isStackControlReadOnly = !0) : (e.isStack ? l.isNoLayoutControlReadOnly = !0 : l.isStackControlReadOnly = !0, l.isGridControlReadOnly = !0), l.isNoLayoutControlReadOnly && l.isStackControlReadOnly && l.isGridControlReadOnly)) break;
        }
      }
    }
    return l;
  }();
  return (o || t) && (d || s || c) ? jsxs(Fragment, {
    children: [jsx(DE, {
      input: jsxs(bL, {
        value: u && !a && propertiesPanelShouldShowAddAutoLayout && !propertiesPanelShouldShowRemoveAutoLayout ? MIXED_MARKER : n,
        readonly: !o,
        onChange: e => {
          "NONE" === e ? fullscreenValue.triggerActionInUserEditScope("unstack-selection", {
            source: "panel"
          }) : fullscreenValue.triggerActionInUserEditScope("stack-selected-nodes", {
            source: "panel",
            stackMode: e
          });
        },
        recordingKey: "layout",
        legend: jsx(_$$q3, {
          children: getI18nString("fullscreen.properties_panel.stack_panel.layout")
        }),
        htmlAttributes: {
          "data-onboarding-key": tn
        },
        children: [jsx(_$$c$, {
          value: "NONE",
          readonly: !o || isNoLayoutControlReadOnly || void 0,
          icon: jsx(e$, {
            "data-testid": "Icon24AlLayoutGridNoneSmall"
          }),
          "aria-label": getI18nString("fullscreen.properties_panel.stack_panel.freeform")
        }), jsx(_$$c$, {
          value: "VERTICAL",
          readonly: !o || isStackControlReadOnly || void 0,
          icon: jsx(_$$C, {
            "data-testid": "Icon24AlLayoutGridVerticalSmall"
          }),
          "aria-label": getI18nString("fullscreen.properties_panel.stack_panel.vertical")
        }), jsx(_$$c$, {
          value: "HORIZONTAL",
          readonly: !o || isStackControlReadOnly || void 0,
          icon: jsx(_$$g, {
            "data-testid": "Icon24AlLayoutGridHorizontalSmall"
          }),
          "aria-label": getI18nString("fullscreen.properties_panel.stack_panel.horizontal")
        }), jsx(_$$c$, {
          value: "GRID",
          readonly: !o || !a || isGridControlReadOnly || void 0,
          icon: jsx(SvgComponent, {
            svgClassName: m7,
            svg: _$$A2,
            dataTestId: "gridLayoutIcon"
          }),
          "aria-label": getI18nString("fullscreen.properties_panel.stack_panel.grid"),
          htmlAttributes: {
            "data-tooltip": tp,
            "data-tooltip-type": KindEnum.SPECIAL
          }
        })]
      }),
      icon: jsx(tu, {
        recordingKey: e
      }),
      label: getI18nString("fullscreen.properties_panel.grid.flow")
    }), jsx(_$$p, {
      children: jsx(tl, {})
    })]
  }) : null;
}
function tu(e) {
  let t = kl("stackMode");
  let n = kl("stackWrap");
  let i = trackFileEventWithUser();
  let a = useSelector(Sh);
  let c = useSelector(e => aW(void 0, e.mirror.selectionProperties, void 0));
  return "HORIZONTAL" !== t ? null : jsx(setupToggleButton, {
    variant: "highlighted",
    "aria-label": getI18nString("fullscreen.properties_panel.stack_panel.wrap"),
    checked: "WRAP" === n,
    disabled: !c,
    onIcon: jsx(SvgComponent, {
      svg: _$$A3
    }),
    offIcon: jsx(SvgComponent, {
      svg: _$$A3
    }),
    onChange: () => {
      let e = "WRAP" === n ? "HORIZONTAL" : "WRAP";
      i("Stack Mode Changed", {
        newStackWrap: e,
        nodeIds: a
      });
      permissionScopeHandler.user("set-stack-mode", () => StackBindingsCpp?.setStackModeAndFlipPrimaryAndCounterAxisValues(e));
    },
    recordingKey: generateRecordingKey(e, "stackWrap")
  });
}
let tp = _$$ex("grid_beta_special_tooltip", function ({
  gridString: e,
  betaString: t
}) {
  return jsxs("span", {
    className: Hh,
    children: [e, jsx(setupThemeContext, {
      mode: "light",
      children: jsx(_$$E2, {
        variant: "inverseFilled",
        children: t
      })
    })]
  });
}, e => ({
  gridString: getI18nString("fullscreen.properties_panel.stack_panel.grid"),
  betaString: getI18nString("general.beta")
}));
function t_({
  recordingKey: e
}) {
  let [t, n] = useState(!1);
  let [a, s] = useState(!1);
  let c = _$$U();
  f4(e => {
    let {
      stackHorizontalPadding,
      stackPaddingRight,
      stackVerticalPadding,
      stackPaddingBottom
    } = e.mirror.selectionProperties;
    let a = getCommonValue(stackHorizontalPadding, stackPaddingRight);
    let o = getCommonValue(stackVerticalPadding, stackPaddingBottom);
    n(isInvalidValue(a) || isInvalidValue(o) || c);
  });
  let u = trackFileEventWithUser();
  let g = useSelector(Sh);
  let m = jsx(_$$d, {
    onClick: () => {
      n(!t);
      StackBindingsCpp.setFocusStackPanelInput(SpacingConstants.PADDING_ALL, !1);
      u(t ? "Disable autolayout independent padding" : "Enable autolayout independent padding", {
        nodeIds: g
      });
    },
    "aria-expanded": t,
    actionOnPointerDown: !0,
    "aria-label": getI18nString("fullscreen.properties_panel.stack_panel.independent_paddings"),
    recordingKey: generateRecordingKey(e, "showAllPaddingControls"),
    htmlAttributes: {
      "data-tooltip": getI18nString("fullscreen.properties_panel.stack_panel.independent_paddings"),
      "data-tooltip-type": KindEnum.TEXT,
      "data-test-id": "stack-padding-toggle"
    },
    children: jsx(_$$s, {})
  });
  return jsx(_$$E, {
    name: "stack_padding_controls",
    children: jsx(tx, {
      showAllPaddingControls: t,
      showSinglePaddingControl: a,
      setShowSinglePaddingControl: s,
      recordingKey: e,
      handleClick: function (e) {
        isCommandEvent(e) && s(!0);
      },
      showAllPaddingControlsToggle: m
    })
  });
}
function tx({
  showAllPaddingControls: e,
  showSinglePaddingControl: t,
  setShowSinglePaddingControl: n,
  recordingKey: i,
  handleClick: r,
  showAllPaddingControlsToggle: a
}) {
  return jsx(W7, {
    bottomIcon: null,
    collapsedLeftInput: jsx(tv, {
      paddingSelection: mx.HORIZONTAL,
      onClick: r,
      recordingKey: i,
      inputTestId: "padding-horizontal"
    }),
    collapsedRightInput: jsx(tv, {
      paddingSelection: mx.VERTICAL,
      onClick: r,
      recordingKey: i,
      inputTestId: "padding-vertical"
    }),
    expandedBottomLeftInput: jsx(tv, {
      paddingSelection: mx.RIGHT,
      onClick: r,
      recordingKey: i
    }),
    expandedBottomRightInput: jsx(tv, {
      paddingSelection: mx.BOTTOM,
      onClick: r,
      recordingKey: i
    }),
    expandedTopLeftInput: jsx(tv, {
      paddingSelection: mx.LEFT,
      onClick: r,
      recordingKey: i
    }),
    expandedTopRightInput: jsx(tv, {
      paddingSelection: mx.TOP,
      onClick: r,
      recordingKey: i
    }),
    leftLabel: renderI18nText("fullscreen.properties_panel.section_autoLayout.label_padding"),
    rightLabel: null,
    showAllPaddingControls: e,
    showSinglePaddingControl: t,
    singleInput: jsx(tv, {
      paddingSelection: mx.ALL,
      focusOnMount: !0,
      recordingKey: i,
      setShowSinglePaddingControl: n
    }),
    topIcon: a
  });
}
function tv({
  className: e,
  paddingSelection: t,
  recordingKey: n,
  inputTestId: i,
  onClick: r,
  onBlur: a,
  focusOnMount: s,
  setShowSinglePaddingControl: c
}) {
  let d = Wx();
  let u = Y9();
  return jsx(_$$s2, {
    focusOnMount: s,
    inputTestId: i,
    onBlur: e => {
      StackBindingsCpp.setFocusStackPanelInput(t, !1);
      a?.(e);
    },
    onClick: r,
    onFocus: () => StackBindingsCpp.setFocusStackPanelInput(t, !0),
    onMouseEnter: () => u(t, !0),
    onMouseLeave: () => u(t, !1),
    onNudge: () => Fullscreen.temporarilyHideOverlay(SnapMode.SELECTION),
    onScrubBegin: () => d(t, !0),
    onScrubEnd: () => d(t, !1),
    outerClassName: e,
    paddingSelection: t,
    recordingKey: generateRecordingKey(n, "stackPadding", mx[t]),
    setShowSinglePaddingControl: c,
    source: "panel"
  });
}
function tw(e) {
  let {
    propertiesPanelShouldShowRemoveAutoLayout
  } = ta();
  let n = propertiesPanelShouldShowRemoveAutoLayout ? getI18nString("fullscreen.properties_panel.stack_panel.remove_auto_layout") : getI18nString("fullscreen.properties_panel.stack_panel.use_auto_layout");
  let {
    actionEnabledStackSelection,
    actionEnabledUnstackSelection
  } = ta();
  let o = propertiesPanelShouldShowRemoveAutoLayout ? actionEnabledUnstackSelection : actionEnabledStackSelection;
  let s = propertiesPanelShouldShowRemoveAutoLayout ? "unstack-selection" : "stack-selection";
  let c = useCallback(() => {
    fullscreenValue.triggerActionInUserEditScope(s, {
      source: "panel"
    });
  }, [s]);
  return jsx(setupToggleButton, {
    checked: propertiesPanelShouldShowRemoveAutoLayout,
    variant: "highlighted",
    "aria-label": n,
    onIcon: jsx(ty, {}),
    offIcon: jsx(ty, {}),
    onChange: c,
    disabled: !o,
    recordingKey: generateRecordingKey(e.recordingKey, propertiesPanelShouldShowRemoveAutoLayout ? "removeButton" : "addButton"),
    htmlAttributes: {
      "data-tooltip": n,
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip-shortcut-key": s
    }
  });
}
function ty() {
  let {
    propertiesPanelShouldShowRemoveAutoLayout
  } = ta();
  return propertiesPanelShouldShowRemoveAutoLayout ? jsx(_$$v, {}) : jsx(_$$Q, {});
}
export function $$tj0(e) {
  return jsx(_$$k2, {
    name: "stack_panel",
    children: jsx("div", {
      className: "displayContents",
      "data-test-id": "stack_panel",
      children: jsx(tb, {
        ...e
      })
    })
  });
}
let tb = memo(e => jsx(tN, {
  ...e
}));
function tN({
  onlyStacksAndGridsSelected: e,
  onlyShowResizingRow: t,
  hideToggleButton: n,
  recordingKey: i,
  disabled: a = !1
}) {
  let o = e ? renderI18nText("fullscreen.properties_panel.stack_panel.auto_layout") : renderI18nText("fullscreen.properties_panel.stack_panel.layout");
  let s = kl("numSelectedByType");
  let c = !!s && Kl(s, ["CODE_INSTANCE", "CODE_LAYER", "CODE_COMPONENT", "CODE_FILE", "CODE_LIBRARY"]);
  let d = useSelector(e => aW(void 0, e.mirror.selectionProperties, void 0));
  let u = kl("stackMode");
  let h = Zr("resize-to-fit") && "NONE" === u;
  return jsxs(Zk, {
    "data-onboarding-key": _$$W2,
    children: [jsxs(Wv, {
      titleTx: o,
      children: [h && jsx(hw, {
        recordingKey: generateRecordingKey(i, "frameFitButton")
      }), !n && d && jsx(tw, {
        recordingKey: i
      })]
    }), jsx(tI, {
      onlyStacksAndGridsSelected: e,
      onlyShowResizingRow: c || t,
      recordingKey: i,
      disabled: a
    })]
  });
}
let tI = memo(function ({
  onlyStacksAndGridsSelected: e,
  onlyShowResizingRow: t,
  recordingKey: n,
  disabled: a
}) {
  let {
    showMigrationUi,
    wrappingEnabled
  } = ta();
  let d = Df();
  let u = kl("stackMode");
  let h = useRef(null);
  let g = kl("nodesAreAllInsideStacks");
  let m = rX();
  let {
    hasSelectedText,
    disableFontControls,
    enabledTypePanelControls,
    textAutoResize
  } = SA();
  let y = getFeatureFlags().ce_tv_grid_min_max ? m : e || g;
  let C = useSelector(e => aW(void 0, e.mirror.selectionProperties, void 0));
  let S = "transformPanel";
  let b = jsxs(Fragment, {
    children: [jsx(Ws, {
      recordingKey: S,
      forwardedRef: h,
      disabled: a
    }), jsx(ea, {
      visible: !!y,
      widthHeightRowRef: h
    })]
  });
  let I = d.fixedFrameOptions && jsx(_$$u, {
    recordingKey: n
  });
  let A = hasSelectedText && jsx(fB, {
    disabled: disableFontControls,
    enabledTypePanelControls,
    textAutoResize,
    recordingKey: n
  });
  let E = o0();
  let R = jsx(B, {
    recordingKey: S
  });
  let L = jsx(_$$tL, {
    recordingKey: n,
    isSelectionStackOrGrid: e
  });
  let O = jsx(td, {
    recordingKey: n,
    isSelectionStackOrGrid: e
  });
  return !e || t ? jsxs(Fragment, {
    children: [C && O, A, b, L, R, I]
  }) : showMigrationUi ? jsx(tE, {}) : jsxs(Fragment, {
    children: [O, b, L, E && jsx(iZ, {
      leftLabel: renderI18nText("fullscreen.properties_panel.section_autoLayout.label_alignment"),
      leftInput: jsx(ez, {
        recordingKey: generateRecordingKey(n, "alignment")
      }),
      rightLabel: renderI18nText("fullscreen.properties_panel.section_autoLayout.label_gap"),
      topRightInput: jsx(tR, {
        recordingKey: n
      }),
      bottomRightInput: wrappingEnabled && jsx(tL, {
        recordingKey: n
      }),
      topIcon: e && jsx(_$$o, {
        recordingKey: generateRecordingKey(n, "stackLayoutDetails")
      }),
      bottomIcon: null
    }), "NONE" !== u && jsx(t_, {
      recordingKey: n
    }), R, jsx(_$$u, {
      recordingKey: n
    })]
  });
});
let tA = !1;
function tE() {
  let e;
  let t = trackFileEventWithUser();
  let [n, r] = useState(!1);
  let {
    isOrInInstance,
    containsComponents
  } = selectWithShallowEqual(e => {
    let {
      isInstanceSelected,
      isInstanceSublayerSelected,
      numSelectedByType
    } = e.mirror.selectionProperties;
    return {
      isOrInInstance: !!(isInstanceSelected || isInstanceSublayerSelected),
      containsComponents: !!numSelectedByType && !!numSelectedByType.SYMBOL
    };
  });
  useEffect(() => {
    tA || (t("stack_v2_migration_info_shown"), tA = !0);
  }, [t]);
  f4(() => {
    r(!1);
  });
  let h = useCallback(() => {
    let e = documentStateTsApi.getActiveCanvas();
    permissionScopeHandler.user("update-stack-to-alv3", () => {
      StackBindingsCpp.updateStackToAutoLayoutV3(e, AppStateTsApi.bigNudgeAmount());
    });
    fullscreenValue.triggerAction("commit");
    r(!0);
    t("stack_v2_migration_updated");
  }, [t]);
  let g = useCallback(e => {
    fullscreenValue.triggerActionInUserEditScope("undo");
    r(!1);
  }, []);
  if (n) return jsxs(fI, {
    className: A5,
    children: [jsx("span", {
      className: Yv,
      children: renderI18nText("fullscreen.properties_panel.stack_panel.auto_layout_updated")
    }), jsx("span", {
      className: QP,
      children: jsx(Button, {
        variant: "ghost",
        onClick: g,
        children: renderI18nText("fullscreen.properties_panel.stack_panel.undo")
      })
    })]
  });
  let x = documentStateTsApi.getActiveCanvas();
  let f = StackBindingsCpp.isOrInInstanceWithDeprecatedAlignmentOverride(x);
  e = isOrInInstance ? f ? getI18nString("fullscreen.properties_panel.stack_panel.tooltip_old_version_instance_overrides") : getI18nString("fullscreen.properties_panel.stack_panel.tooltip_old_version_instance") : containsComponents ? getI18nString("fullscreen.properties_panel.stack_panel.tooltip_old_version_components") : getI18nString("fullscreen.properties_panel.stack_panel.tooltip_old_version");
  return jsxs(fI, {
    className: A5,
    children: [jsxs("div", {
      className: Yv,
      children: [renderI18nText("fullscreen.properties_panel.stack_panel.new_auto_layout_version_available"), jsx(SvgComponent, {
        className: zp,
        svg: _$$A4,
        "data-tooltip-type": KindEnum.SPECIAL,
        "data-tooltip": ev,
        "data-tooltip-interactive": !0,
        "data-tooltip-show-immediately": !0,
        "data-tooltip-text": e
      })]
    }), jsx("span", {
      className: Z6,
      children: jsx(ButtonWide, {
        variant: "secondary",
        onClick: h,
        disabled: isOrInInstance && !f,
        children: renderI18nText("fullscreen.properties_panel.stack_panel.update")
      })
    })]
  });
}
function tR(e) {
  let t = Wx();
  let n = Y9();
  return jsx(_$$E, {
    name: "stack_spacing_control",
    children: jsx(KI, {
      onBlur: () => t(SpacingConstants.SPACING, !1),
      onFocus: () => t(SpacingConstants.SPACING, !0),
      onMouseEnter: () => n(SpacingConstants.SPACING, !0),
      onMouseLeave: () => n(SpacingConstants.SPACING, !1),
      onNudge: () => Fullscreen.temporarilyHideOverlay(SnapMode.SELECTION),
      onScrubBegin: () => t(SpacingConstants.SPACING, !0),
      onScrubEnd: () => t(SpacingConstants.SPACING, !1),
      onboardingKey: "stack-spacing-input",
      recordingKey: generateRecordingKey(e, "stackSpacing"),
      source: "panel"
    })
  });
}
function tL(e) {
  let t = Wx();
  let n = Y9();
  return jsx(_$$E, {
    name: "stack_counter_spacing_input",
    children: jsx(_$$q2, {
      inputTestId: "stack-counter-spacing",
      onBlur: () => t(SpacingConstants.COUNTER_SPACING, !1),
      onFocus: () => t(SpacingConstants.COUNTER_SPACING, !0),
      onMouseEnter: () => n(SpacingConstants.COUNTER_SPACING, !0),
      onMouseLeave: () => n(SpacingConstants.COUNTER_SPACING, !1),
      onNudge: () => Fullscreen.temporarilyHideOverlay(SnapMode.SELECTION),
      onScrubBegin: () => t(SpacingConstants.COUNTER_SPACING, !0),
      onScrubEnd: () => t(SpacingConstants.COUNTER_SPACING, !1),
      recordingKey: generateRecordingKey(e, "stackCounterSpacing"),
      source: "panel"
    })
  });
}
export const Vy = $$tj0;