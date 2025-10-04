import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useCallback, useEffect, useMemo, Fragment } from "react";
import { useSelector } from "react-redux";
import { noop } from 'lodash-es';
import { Legend } from "../905/932270";
import { Fullscreen } from "../figma_app/763686";
import { props } from "@stylexjs/stylex";
import { getFeatureFlags } from "../905/601108";
import { generateRecordingKey } from "../figma_app/878298";
import { colorToHexString } from "../figma_app/191804";
import { generateUUIDv4 } from "../905/871474";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { isValidValue } from "../905/216495";
import { useSelectionProperty } from "../905/275640";
import { selectSceneGraphSelectionKeys } from "../figma_app/889655";
import { Yv } from "../figma_app/616107";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { Z9, iN } from "../figma_app/634656";
import { Ru } from "../figma_app/630194";
import { eQ, _W } from "../figma_app/285009";
import { TS } from "../figma_app/153399";
import { em } from "../figma_app/932285";
import { W1, K0, wv } from "../figma_app/439493";
import { Fn, SC } from "../figma_app/769101";
import { cd } from "../figma_app/650460";
import { v as _$$v } from "../figma_app/99807";
import { b as _$$b, c as _$$c } from "../figma_app/166989";
import { wv as _$$wv, uM, g5, Iz } from "../905/888175";
import { A as _$$A } from "../2854/77351";
import { A as _$$A2 } from "../svg/272644";
import { A as _$$A3 } from "../svg/566470";
import { A as _$$A4 } from "../svg/415614";
import { A as _$$A5 } from "../svg/684050";
import { A as _$$A6 } from "../svg/680110";
export function $$U1(e) {
  return useSelector(t => {
    let r = t.mirror.selectionProperties.whiteboardNumSelectedByType;
    return !!(r && r[e]);
  });
}
let B = (e, t) => (!e.strokeStyle || !t.strokeStyle || e.strokeStyle === t.strokeStyle) && (!e.strokeWeight || !t.strokeWeight || Ru(e.strokeWeight, e.strokeType) === Ru(t.strokeWeight, t.strokeType));
let G = e => String(e.strokeStyle ?? "") + String(e.strokeWeight ?? "");
export function $$V5() {
  let e = !$$U1("SHAPE_WITH_TEXT");
  let t = !$$U1("SECTION");
  return e && t;
}
export function $$H4() {
  let e = !$$U1("VECTOR");
  let t = !$$U1("HIGHLIGHT");
  let r = !function () {
    for (let e of useSelector(selectSceneGraphSelectionKeys)) {
      let t = Fullscreen?.isPlatformShape(e);
      let r = Fullscreen?.platformShapeHasStrokeControl(e);
      if (t && !r) return !0;
    }
    return !1;
  }();
  return e && t && r;
}
export function $$z0() {
  let e = $$H4();
  let t = !$$U1("CONNECTOR");
  return e && t;
}
export function $$W3() {
  let [e, t] = useSelectionProperty("whiteboardStrokeStyle");
  let [r, a] = useSelectionProperty("whiteboardStrokeWeight");
  let [l, d] = useState(!1);
  let c = $$U1("VECTOR");
  let p = $$U1("HIGHLIGHT");
  let y = $$U1("CONNECTOR");
  let b = $$U1("INSTANCE");
  let I = $$U1("SECTION");
  let S = ($$U1("SHAPE_WITH_TEXT") || I || b) && !y && !p && !c;
  let [v, A] = useSelectionProperty("whiteboardStrokeColor");
  let x = useCallback(e => {
    e && t(e, yesNoTrackingEnum.NO);
  }, [t]);
  let [w, O] = useState(e);
  useEffect(() => {
    l || O(e);
  }, [e, l]);
  let D = useCallback(e => {
    t(e);
    O(e);
  }, [t]);
  let k = useCallback(t => {
    A(t);
    "none" === e && D("solid");
  }, [A, D, e]);
  let M = useCallback(() => {
    x(w);
  }, [x, w]);
  let F = useCallback(e => {
    l && x(e.strokeStyle);
  }, [x, l]);
  let j = {
    strokeStyle: e,
    strokeWeight: r,
    strokeType: c ? "VECTOR" : p ? "HIGHLIGHT" : y ? "CONNECTOR" : "NONE"
  };
  let W = $$H4();
  let Y = $$V5();
  let Q = $$z0();
  let ee = generateUUIDv4();
  let et = [];
  Y && (c ? et.push({
    strokeWeight: _$$wv,
    strokeType: "VECTOR"
  }, {
    strokeWeight: uM,
    strokeType: "VECTOR"
  }) : p ? et.push({
    strokeWeight: g5,
    strokeType: "HIGHLIGHT"
  }, {
    strokeWeight: Iz,
    strokeType: "HIGHLIGHT"
  }) : y && et.push({
    strokeWeight: _$$wv,
    strokeType: "CONNECTOR"
  }, {
    strokeWeight: uM,
    strokeType: "CONNECTOR"
  }));
  W && (et.length > 0 && et.push("divider"), et.push({
    strokeStyle: "solid",
    strokeType: "SHAPE"
  }, {
    strokeStyle: "dashed",
    strokeType: "SHAPE"
  }));
  Q && et.push({
    strokeStyle: "none",
    strokeType: "VECTOR"
  });
  let er = 0 === et.length && S;
  let en = useMemo(() => S ? jsx($, {
    strokeColor: v && isValidValue(v) ? v : void 0,
    setWhiteboardStrokeColor: k,
    onlyShowingColorSwatches: er
  }) : void 0, [S, v, k, er]);
  if (0 === et.length && !S) return null;
  let ei = getI18nString("whiteboard.inline_menu.line_style");
  return jsx(Fn, {
    OptionWrapper: S ? function ({
      children: e
    }) {
      return jsx("div", {
        className: cssBuilderInstance.flex.flexRow.itemsCenter.itemsStart.h32.my4.px4.bb1.bSolid.colorBorderMenu.$,
        children: jsx(_$$b, {
          value: w,
          onChange: D,
          legend: jsx(Legend, {
            children: ei
          }),
          recordingKey: "whiteboardStrokeControlStrokeStyle",
          children: e
        })
      });
    } : SC(ei, ee),
    PopoverWrapper: er ? function () {
      return jsx(W1, {
        children: jsx("div", {
          style: {
            display: "flex",
            flexDirection: "column"
          },
          children: en
        })
      });
    } : void 0,
    additionalContentsBottom: en,
    onChange: e => {
      e.strokeStyle && D(e.strokeStyle);
      e.strokeWeight && a(e.strokeWeight);
    },
    onToggleMenuOpen: t => {
      l && !t && w !== e && x(w);
      d(t);
    },
    optionEquality: B,
    options: et,
    renderButton: ({
      onClick: e,
      onKeyDown: t,
      activeOptionId: r,
      ref: i,
      active: a
    }) => {
      let s;
      if (j.strokeStyle || j.strokeWeight) {
        if (j.strokeStyle && j.strokeWeight) {
          let e = Z(j.strokeStyle);
          let t = $$J2(j.strokeWeight);
          s = t ? getI18nString("whiteboard.inline_menu.line_style_label_both", {
            currentStrokeStyle: e.toLocaleLowerCase(),
            currentStrokeWeight: t.toLocaleLowerCase()
          }) : getI18nString("whiteboard.inline_menu.line_style_label_singular", {
            currentLineStyle: e.toLocaleLowerCase()
          });
        } else {
          let e = q(j);
          s = e ? getI18nString("whiteboard.inline_menu.line_style_label_singular", {
            currentLineStyle: e.toLocaleLowerCase()
          }) : void 0;
        }
      } else s = void 0;
      return jsx(K0, {
        ref: i,
        active: a ? "NORMAL" : "NONE",
        ariaActiveDescendant: r,
        ariaControls: ee,
        ariaLabel: s,
        caret: "down",
        onKeyDown: t,
        onPointerDown: e,
        recordingKey: generateRecordingKey("whiteboardStrokeControl", "strokeSelectorButton"),
        role: "combobox",
        svg: _$$A,
        tooltip: ei
      });
    },
    renderOption: ({
      value: e,
      onClick: t,
      isSelected: r,
      id: a,
      isFocused: o
    }) => {
      let d = e => {
        l && t(e);
      };
      return S && "divider" !== e ? jsx(_$$c, {
        icon: jsx(SvgComponent, {
          className: cssBuilderInstance.colorIconOnbrand.$,
          svg: X(e, c, p, y)
        }),
        value: G(e),
        htmlAttributes: {
          onPointerUp: l ? e => d(e) : noop,
          onMouseLeave: M,
          onMouseEnter: () => F(e)
        },
        children: Z(void 0 !== e.strokeStyle ? e.strokeStyle : "none")
      }, generateRecordingKey("whiteboardStrokeControlStrokeStyleKey", G(e))) : jsxs(Fragment, {
        children: ["divider" !== e && jsx(K, {
          value: e,
          id: a,
          svg: X(e, c, p, y),
          onOptionClick: d,
          isSelected: r,
          isFocused: o
        }), "divider" === e && jsx(wv, {})]
      }, "divider" !== e ? G(e) : "divider");
    },
    useDropdownZIndex: !0,
    value: j
  });
}
function K({
  value: e,
  id: t,
  svg: r,
  onOptionClick: i,
  isSelected: a,
  isFocused: s
}) {
  return jsx(K0, {
    id: t,
    svg: r,
    tooltip: q(e),
    onPointerUp: i,
    active: a ? "LOUD" : "NONE",
    recordingKey: generateRecordingKey("whiteboardStrokeControl", "strokeSelectorOption", G(e)),
    role: "option",
    focused: s
  });
}
let Y = {
  container: e => [{
    display: "xrvj5dj",
    marginBottom: "x1e56ztr",
    marginLeft: "xet2fuk",
    marginRight: "x1db2dqx",
    marginInlineStart: null,
    marginInlineEnd: null,
    gridTemplateRows: "x1bo5odz",
    gridTemplateColumns: "x7t9t1q",
    columnCount: null == e ? null : "x1o1jfqq",
    $$css: !0
  }, {
    "--gridTemplateColumns": `repeat(${e}, 32px)`,
    "--columnCount": null != e ? e : void 0
  }],
  withMarginTop: {
    marginTop: "x1xmf6yo",
    $$css: !0
  }
};
function $({
  strokeColor: e,
  setWhiteboardStrokeColor: t,
  onlyShowingColorSwatches: r = !1
}) {
  let a;
  let s;
  let o;
  let {
    variations,
    type
  } = Z9();
  let h = iN(e, "base");
  let m = iN(e, "baseLight");
  let [g, f] = useState(!1);
  if (getFeatureFlags().figjam_fixjam_colors) {
    let e = type === Yv.DEFAULT ? TS("base") : variations.base.slice();
    let t = type === Yv.DEFAULT ? TS("baseLight") : variations.baseLight.slice();
    a = [...e, ...t];
    o = e.length;
    s = Math.min(11, Math.max(e.length, t.length) + 1);
  } else {
    o = (a = TS("base")).length;
    s = a.length;
  }
  return jsxs("div", {
    ...props(Y.container(s), r && Y.withMarginTop),
    children: [a.map((r, i) => jsx(cd, {
      value: r,
      paletteType: i < o ? "base" : "baseLight",
      background: "dark",
      selectionState: e && colorToHexString(e) === colorToHexString(r) ? "selected" : "unselected",
      onClick: () => {
        t(r);
      },
      recordingKey: generateRecordingKey("whiteboardStrokeControl", "strokeSelectorOption", colorToHexString(r))
    }, colorToHexString(r))), getFeatureFlags().figjam_fixjam_colors ? jsx(_$$v, {
      isOpen: g,
      onColorChange: t,
      color: e ?? {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      },
      theme: "dark",
      onClose: () => f(!1),
      target: jsx(em, {
        id: "stroke-custom-color-selector-button",
        paletteType: h ? "baseLight" : "base",
        customColor: h && m ? e : void 0,
        onPointerUp: () => f(!0),
        recordingKey: generateRecordingKey("whiteboardStrokeControl", "strokeSelectorCustomOption")
      })
    }) : null]
  });
}
function X(e, t, r, n) {
  return e.strokeStyle ? function (e) {
    switch (e) {
      case "solid":
        return _$$A6;
      case "dashed":
        return _$$A3;
    }
    return _$$A2;
  }(e.strokeStyle) : e.strokeWeight ? function (e, t, r, n) {
    if (t) switch (e) {
      case _$$wv:
        break;
      case uM:
        return _$$A4;
    } else if (r) switch (e) {
      case g5:
        break;
      case Iz:
        return _$$A4;
    } else if (n) switch (e) {
      case eQ:
        break;
      case _W:
        return _$$A4;
    }
    return _$$A5;
  }(e.strokeWeight, t, r, n) : _$$A2;
}
function q(e) {
  return e.strokeStyle ? Z(e.strokeStyle) : e.strokeWeight ? $$J2(e.strokeWeight) : void 0;
}
export function $$J2(e) {
  switch (e) {
    case _$$wv:
      return getI18nString("whiteboard.delightful_toolbar.thin");
    case uM:
      return getI18nString("whiteboard.delightful_toolbar.thick");
    default:
      return;
  }
}
function Z(e) {
  switch (e) {
    case "solid":
      return getI18nString("whiteboard.inline_menu.stroke_solid");
    case "dashed":
      return getI18nString("whiteboard.inline_menu.stroke_dashed");
    default:
      return getI18nString("whiteboard.inline_menu.stroke_none");
  }
}
export const XH = $$z0;
export const eX = $$U1;
export const ng = $$J2;
export const nm = $$W3;
export const tA = $$H4;
export const w5 = $$V5;