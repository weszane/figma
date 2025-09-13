import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useState, useCallback, useRef, Fragment as _$$Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ButtonPrimitive } from "../905/632989";
import { r as _$$r } from "../905/571562";
import { C as _$$C } from "../905/504203";
import { l as _$$l } from "../905/479687";
import { J as _$$J } from "../905/614223";
import { CooperTemplateTypesTsBindings, SocialMediaFormats, AppStateTsApi } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { useAtomValueAndSetter } from "../figma_app/27355";
import m from "classnames";
import { trackFileEventWithStore } from "../figma_app/901889";
import { E as _$$E2 } from "../905/277716";
import { P as _$$P } from "../905/347284";
import { IW } from "../figma_app/563413";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { _ as _$$_ } from "../8618/537054";
import { j as _$$j } from "../8618/256463";
import { j as _$$j2, p as _$$p } from "../8618/896045";
import { R as _$$R } from "../7a72fc59/583347";
import { Ku } from "../figma_app/755939";
import { XH } from "../1250/322393";
import { Cl } from "../figma_app/334505";
import { UK } from "../figma_app/740163";
import { isInvalidValue, isValidValue, MIXED_MARKER } from "../905/216495";
import { lJ } from "../905/275640";
import { KindEnum } from "../905/129884";
import { $j } from "../figma_app/178475";
import { A as _$$A } from "../905/139173";
import { A as _$$A2 } from "../6828/364616";
import { A as _$$A3 } from "../6828/844411";
var g = m;
let R = "template_type_dropdown_button--templateTypeScrollContainer--hY4Ui";
let M = "template_type_dropdown_button--endSection--oLbxi";
let O = "template_type_dropdown_button--inactiveLabel--JLegd raw_components--iconInsideBorderFocusWithin--2g7fO";
let D = "template_type_dropdown_button--scrollIndicatorChevron--IVcq2";
let U = "cooperInlineMenuTemplateTypeControl";
export function $$G0() {
  return jsx(_$$R, {
    children: jsx(_$$E2, {
      name: _$$_.TemplateTypeSelector,
      children: jsx($$Q1, {})
    })
  });
}
export function $$Q1({
  isAssetPanel: e = !1
}) {
  let {
    isPopoverOpen,
    togglePopover,
    closePopover
  } = _$$j2(_$$p.TEMPLATE_TYPE);
  let a = XH();
  let c = useMemo(() => CooperTemplateTypesTsBindings?.getAllCooperTemplateTypeGroups() || [], []);
  let u = useMemo(() => ({
    format: e => {
      if (isInvalidValue(e)) return getI18nString("common.mixed");
      for (let t of c) {
        let n = t.types.find(t => t.type === e);
        if (n) return n.name;
      }
      return getI18nString("cooper.inline_menu.template_type.formatter_custom");
    }
  }), [c]);
  return jsx(_$$A, {
    positionY: _$$j,
    target: jsx("div", {
      className: "template_type_dropdown_button--templateTypeContainer--U6f-t",
      "data-testid": "cooper-inline-template-type-control",
      children: jsxs(ButtonPrimitive, {
        className: g()("template_type_dropdown_button--templateTypeDropdownButton--z6GN8", e && "template_type_dropdown_button--assetPanelTemplateTypeDropdownButtonOverride--1dFkU", {
          "template_type_dropdown_button--active--RcNoi": isPopoverOpen
        }),
        onClick: togglePopover,
        recordingKey: U,
        "aria-expanded": isPopoverOpen,
        "aria-label": getI18nString("cooper.inline_menu.template_type.dropdown_selection_button.aria_label"),
        children: [jsx("span", {
          className: "template_type_dropdown_button--templateTypeDropdownDisplayText--23o6m ellipsis--ellipsis--Tjyfa",
          children: u.format(a)
        }), jsx(_$$r, {})]
      })
    }),
    renderPopoverContents: () => jsx(_$$J, {
      brand: "cooper",
      mode: "dark",
      children: jsx(z, {
        templateGroups: c,
        isAssetPanel: e,
        onClose: closePopover
      })
    }),
    isOpen: isPopoverOpen,
    onClose: closePopover,
    useDropdownZIndex: !0
  });
}
function z({
  templateGroups: e,
  isAssetPanel: t,
  onClose: n
}) {
  let l = XH();
  let [s, o] = useState("");
  let [a, c] = useAtomValueAndSetter(Ku);
  let d = trackFileEventWithStore();
  let m = useCallback(e => {
    isValidValue(l) && e !== l && (d("cooper_template_asset_type_changed", {
      productType: "buzz",
      old_template_asset_type: isValidValue(l) ? l : null,
      new_template_asset_type: e
    }), permissionScopeHandler.user("Convert Template Type", () => {
      CooperTemplateTypesTsBindings?.convertSelectedNodesToCooperTemplateType(e);
      e === SocialMediaFormats.CUSTOM ? c(!0) : n();
      AppStateTsApi?.cooperFocusView().isFocusedNodeViewEnabled() && AppStateTsApi?.cooperFocusView().focusSelectedNodeInFocusedNodeView(!0);
    }));
  }, [c, l, d, n]);
  return jsxs("div", {
    className: g()(t ? "template_type_dropdown_button--assetPanelTemplateTypeDropdownContainerDimensions--MzrWe" : "template_type_dropdown_button--inlineToolbarTemplateTypeDropdownContainerDimensions--mDkn-", "template_type_dropdown_button--templateTypeDropdownContainer--S5J1p"),
    children: [jsx(W, {
      searchQuery: s,
      onChange: o,
      clearSearch: () => {
        o("");
      }
    }), s ? jsx(B, {
      currentTemplateType: l,
      templateTypeGroups: e,
      handleTemplateTypeChange: m,
      searchQuery: s,
      isAssetPanel: t
    }) : jsx(X, {
      currentTemplateType: l,
      templateTypeGroups: e,
      handleTemplateTypeChange: m,
      isAssetPanel: t
    })]
  });
}
function B({
  currentTemplateType: e,
  templateTypeGroups: t,
  handleTemplateTypeChange: n,
  searchQuery: l,
  isAssetPanel: s
}) {
  let o = useRef(null);
  let a = useRef(null);
  let c = q(e, t, s);
  let {
    showTopScrollIndicator,
    showBotScrollIndicator,
    handleScroll,
    onScroll
  } = ee(a, s);
  let m = RegExp(`${l.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")}`, "i");
  return jsxs(_$$P, {
    ref: a,
    scrollContainerRef: o,
    className: R,
    hideScrollbar: !0,
    initialScrollTop: c,
    onScroll: handleScroll,
    children: [t.map(t => {
      if ("Custom" !== t.groupName) return jsx(_$$Fragment, {
        children: t.types.map(t => {
          if (t.name.match(m)) return jsx(Y, {
            onClick: n,
            selected: t.type === e,
            metadata: t
          }, t.type);
        })
      }, t.groupName);
    }), jsx("div", {
      className: M
    }), jsx(J, {
      showTopIndicator: showTopScrollIndicator,
      showBottomIndicator: showBotScrollIndicator,
      onScroll
    })]
  });
}
function X({
  currentTemplateType: e,
  templateTypeGroups: t,
  handleTemplateTypeChange: n,
  isAssetPanel: l
}) {
  let s = useRef(null);
  let o = useRef(null);
  let {
    showTopScrollIndicator,
    showBotScrollIndicator,
    handleScroll,
    onScroll
  } = ee(o, l);
  let _ = q(e, t, l);
  let {
    hasInstanceSelected
  } = Cl();
  let g = hasInstanceSelected || e !== SocialMediaFormats.CUSTOM;
  return jsxs(_$$P, {
    ref: o,
    scrollContainerRef: s,
    className: R,
    hideScrollbar: !0,
    initialScrollTop: _,
    onScroll: handleScroll,
    children: [t.map(t => "Custom" === t.groupName ? t.types.map(l => jsxs(_$$Fragment, {
      children: [jsx(Y, {
        onClick: n,
        selected: l.type === e,
        metadata: l,
        hideDimensions: !0,
        isCustom: !0
      }), !g && jsx(Z, {})]
    }, t.groupName)) : jsxs(_$$Fragment, {
      children: [jsx($, {}), t.types.map(t => jsx(Y, {
        onClick: n,
        selected: t.type === e,
        metadata: t
      }, t.type))]
    }, t.groupName)), jsx("div", {
      className: M
    }), jsx(J, {
      showTopIndicator: showTopScrollIndicator,
      showBottomIndicator: showBotScrollIndicator,
      onScroll
    })]
  });
}
function W({
  searchQuery: e,
  onChange: t,
  clearSearch: n
}) {
  let [l, s] = useState(!1);
  return jsx("div", {
    className: "template_type_dropdown_button--templateTypeSearchBarContainer--r8D3B",
    children: jsx(IW, {
      className: g()("template_type_dropdown_button--templateTypeSearchBar--nQjXU", l && "template_type_dropdown_button--templateTypeSearchBarBorder--6C3JG"),
      clearSearch: n,
      customClearSearchIcon: jsx(_$$C, {
        style: {
          "--color-icon": "var(--color-icon-tertiary)",
          width: "16px",
          height: "16px"
        }
      }),
      focusOnMount: !0,
      onBlur: () => s(!1),
      onChange: t,
      onFocus: () => s(!0),
      query: e,
      withUI3Icon: !0
    })
  });
}
function Y({
  selected: e,
  hideDimensions: t = !1,
  metadata: n,
  onClick: r,
  isCustom: l
}) {
  var o;
  let a = n.dimension.x;
  let d = n.dimension.y;
  let u = n.name;
  let _ = "";
  let m = 1;
  o = n.type;
  [SocialMediaFormats.PRINT_US_LETTER, SocialMediaFormats.CARD_HORIZONTAL, SocialMediaFormats.CARD_VERTICAL, SocialMediaFormats.POSTER, SocialMediaFormats.NAME_TAG_LANDSCAPE, SocialMediaFormats.NAME_TAG_PORTRAIT].includes(o) && (UK().renderRulerUnitAsInches.getCopy() ? (_ = " in", m = 300, l && (u += " (inches)")) : UK().renderRulerUnitAsCentimeters.getCopy() && (_ = " cm", m = 300 / 2.54, l && (u += " (cm)")));
  1 !== m && (a = (a / m).toFixed(2) + _, d = (d / m).toFixed(2) + _);
  return jsxs(ButtonPrimitive, {
    onClick: () => r(n.type),
    className: "template_type_dropdown_button--templateTypeRow--KFvpj",
    recordingKey: `${U}-${n.type}`,
    "aria-label": getI18nString("cooper.inline_menu.template_type.dropdown_selection_button.aria_label"),
    children: [jsx("div", {
      className: "template_type_dropdown_button--selectedIconContainer--P5yNu",
      children: e && jsx(_$$l, {})
    }), jsxs("div", {
      className: "template_type_dropdown_button--metaDataContainer--XcLAD",
      children: [jsx("div", {
        className: "template_type_dropdown_button--nameContainer--M3j6X ellipsis--ellipsisAfter2Lines--Qo-Xh ellipsis--_ellipsisAfterNLines--LzI7k",
        children: u
      }), !t && jsx("div", {
        className: "template_type_dropdown_button--dimensionsContainer--ekqqu",
        children: `${a} x ${d}`
      })]
    })]
  }, n.type);
}
function $() {
  return jsx("div", {
    className: "template_type_dropdown_button--rowDividerContainer--XWDCP",
    children: jsx("div", {
      className: "template_type_dropdown_button--rowDivider--aNEXm"
    })
  });
}
let H = e => UK().renderRulerUnitAsInches.getCopy() ? 300 * e : UK().renderRulerUnitAsCentimeters.getCopy() ? 300 * e / 2.54 : e;
function Z() {
  let e = useDispatch();
  let [t, n] = lJ("width");
  let [s, o] = lJ("height");
  let a = 25;
  let c = 10;
  let d = "number" == typeof t ? t : 0;
  let _ = "number" == typeof s ? s : 0;
  let m = 1;
  UK().renderRulerUnitAsInches.getCopy() ? (m = 300, c = 1) : UK().renderRulerUnitAsCentimeters.getCopy() && (m = 300 / 2.54, c = 1);
  let g = 1 !== m ? d / m : d;
  let x = 1 !== m ? _ / m : _;
  1 !== m && (a /= m);
  let h = useCallback(e => {
    permissionScopeHandler.user("Update Template Height", () => {
      if (void 0 !== e) {
        let t = H(e);
        CooperTemplateTypesTsBindings?.resizeSelectedNodes(t, !1);
      }
    });
  }, []);
  let y = useCallback(e => {
    permissionScopeHandler.user("Update Template Width", () => {
      if (void 0 !== e) {
        let t = H(e);
        CooperTemplateTypesTsBindings?.resizeSelectedNodes(t, !0);
      }
    });
  }, []);
  return jsxs("div", {
    className: "template_type_dropdown_button--dimensionsControlContainer--IIY39",
    children: [jsx($j, {
      bigNudgeAmount: c,
      "data-tooltip": getI18nString("fullscreen.properties_panel.transform_panel.width"),
      "data-tooltip-type": KindEnum.TEXT,
      disabled: void 0 === t || t === MIXED_MARKER,
      dispatch: e,
      min: a,
      onValueChange: y,
      recordingKey: `${U}.width`,
      smallNudgeAmount: c,
      value: g,
      children: jsx("span", {
        className: `${O} svg`,
        children: renderI18nText("fullscreen.properties_panel.transform_panel.w")
      })
    }), jsx($j, {
      bigNudgeAmount: c,
      "data-tooltip": getI18nString("fullscreen.properties_panel.transform_panel.height"),
      "data-tooltip-type": KindEnum.TEXT,
      disabled: void 0 === s || s === MIXED_MARKER,
      dispatch: e,
      min: a,
      onValueChange: h,
      recordingKey: `${U}.height`,
      smallNudgeAmount: c,
      value: x,
      children: jsx("span", {
        className: `${O} svg`,
        children: renderI18nText("fullscreen.properties_panel.transform_panel.h")
      })
    })]
  });
}
function q(e, t, n) {
  let i = 0;
  let r = 0;
  let l = 0;
  let s = !1;
  t.forEach((t, n) => {
    0 !== n && !s && i++;
    t.types.forEach(t => {
      !s && (r++, t.type === e && (s = !0), t.name.length > 23 && l++);
    });
  });
  return Math.max(16 * i + 24 * r + 16 * l - (n ? 439 : 279) / 2, 0);
}
function J({
  showTopIndicator: e,
  showBottomIndicator: t,
  onScroll: n
}) {
  let l = useRef(null);
  let s = useCallback(e => t => {
    l.current && clearInterval(l.current);
    l.current = setInterval(() => {
      n(e);
    }, 25);
  }, [l, n]);
  let o = useCallback(() => {
    l.current && clearInterval(l.current);
  }, [l]);
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: "template_type_dropdown_button--topScrollIndicator--5YhMK template_type_dropdown_button--scrollIndicator--5bCW9",
      style: e ? {} : {
        display: "none"
      },
      onMouseEnter: s(-8),
      onMouseLeave: o,
      children: jsx(SvgComponent, {
        className: D,
        svg: _$$A3
      })
    }), jsx("div", {
      className: "template_type_dropdown_button--bottomScrollIndicator--5RgNk template_type_dropdown_button--scrollIndicator--5bCW9",
      style: t ? {} : {
        display: "none"
      },
      onMouseEnter: s(8),
      onMouseLeave: o,
      children: jsx(SvgComponent, {
        className: D,
        svg: _$$A2
      })
    })]
  });
}
function ee(e, t) {
  let [n, i] = useState(!1);
  let [l, s] = useState(!1);
  let o = useCallback(n => {
    n > 0 ? i(!0) : i(!1);
    let r = e.current?.getScrollHeight();
    let l = t ? 439 : 279;
    r && (n + l < r ? s(!0) : s(!1));
  }, [i, s, e, t]);
  let a = useCallback(n => {
    if (e.current) {
      let i = e.current.getScrollTop();
      let r = e.current.getScrollHeight();
      if (n > 0) {
        let l = Math.min(i + n, r - (t ? 439 : 279));
        e.current.scrollTo(l);
      } else {
        let t = Math.max(0, i + n);
        e.current.scrollTo(t);
      }
    }
  }, [e, t]);
  useEffect(() => {
    if (e.current) {
      let n = e.current.getScrollTop();
      let r = e.current.getScrollHeight();
      let l = t ? 439 : 279;
      n > 0 ? i(!0) : i(!1);
      r && (n + l < r ? s(!0) : s(!1));
    }
  }, [i, s, e, t]);
  return {
    showTopScrollIndicator: n,
    showBotScrollIndicator: l,
    handleScroll: o,
    onScroll: a
  };
}
export const _ = $$G0;
export const k = $$Q1;