import { jsx } from "react/jsx-runtime";
import { useState, useEffect, createElement, useRef } from "react";
import { generateRecordingKey } from "../figma_app/878298";
import s from "classnames";
import { whiteColor, areColorsEqual } from "../figma_app/191804";
import { selectWithShallowEqual } from "../905/103090";
import { RecordableButton } from "../905/511649";
import { generateUUIDv4 } from "../905/871474";
import { getI18nString } from "../905/303541";
import { F as _$$F } from "../905/989956";
import { z5 } from "../905/713722";
import { F as _$$F2 } from "../905/258517";
import { Yv } from "../figma_app/616107";
import { KindEnum } from "../905/129884";
import { Z9, iN } from "../figma_app/634656";
import { $n } from "../figma_app/439493";
import { Fn, wM } from "../figma_app/769101";
import { cd, ZI, Wj, lX } from "../figma_app/650460";
import { v as _$$v } from "../figma_app/99807";
import { nm, Gu } from "../figma_app/90441";
import { TS, V_, AF } from "../figma_app/153399";
import { R as _$$R } from "../905/168262";
import { H as _$$H } from "../905/270307";
import { s as _$$s } from "../905/788567";
var o = s;
function C(e) {
  return Array.isArray(e) ? 1 === e.length ? e[0] : void 0 : e;
}
let w = {
  right: nm,
  center: void 0,
  left: Gu
};
export function $$O0({
  value: e,
  onColorChange: t,
  onOpacityChange: r,
  recordingKey: i,
  paletteType: a,
  additionalContentsTop: s,
  buttonSize: o,
  buttonBackground: l,
  buttonClassName: c,
  buttonCaretType: u,
  dropperDisabled: p,
  optionSize: _,
  customOpacity: h,
  ariaLabel: m,
  alignment: f,
  inlineButtonTooltip: y,
  palettePickerPopoverWrapper: b,
  onlyShowCustomColorPopover: T,
  isColorPopoverOpen: I,
  shouldDisableDataTooltip: S,
  setIsColorPopoverOpen: A,
  positionX: x,
  positionY: N,
  colorButtonSizeOverride: C,
  swatchStyle: w,
  shouldRenderCirclesWithContentBoxSizing: O
}) {
  let L = selectWithShallowEqual(e => e.mirror.selectionProperties.whiteboardNumSelectedByType);
  let P = {
    name: "figjam_node_color_change",
    properties: {
      node_type: L && 1 === Object.keys(L).length && Object.keys(L).pop() || "MIXED",
      ...L
    }
  };
  let {
    variations,
    type
  } = Z9();
  let M = (type === Yv.DEFAULT ? TS(a) : variations[a].slice()).map((e, t) => ({
    option: e,
    tooltip: type === Yv.DEFAULT ? V_(e, a) : AF(t, a)
  }));
  let F = M.length;
  if ("base" === a) {
    let e = (type === Yv.DEFAULT ? TS("baseLight") : variations.baseLight).map((e, t) => ({
      option: e,
      tooltip: type === Yv.DEFAULT ? V_(e, "baseLight") : AF(t, "baseLight")
    }));
    M.push(...e);
  }
  return jsx($$R2, {
    additionalContentsTop: s,
    alignment: f,
    analytics: P,
    ariaLabel: m,
    buttonBackground: l,
    buttonCaretType: u,
    buttonClassName: c,
    buttonSize: o,
    colorButtonSizeOverride: C,
    customOpacity: h,
    dropperDisabled: p,
    fixedNumColumns: F,
    inlineButtonTooltip: y,
    isColorPopoverOpen: I,
    onColorChange: e => t(e.option),
    onOpacityChange: r,
    onlyShowCustomColorPopover: T,
    optionSize: _,
    options: M,
    palettePickerPopoverWrapper: b,
    paletteType: a,
    positionX: x,
    positionY: N,
    recordingKey: i,
    setIsColorPopoverOpen: A,
    shouldDisableDataTooltip: S,
    shouldRenderCirclesWithContentBoxSizing: O,
    swatchStyle: w,
    value: {
      option: e
    }
  });
}
export function $$R2({
  value: e,
  onColorChange: t,
  onOpacityChange: r,
  recordingKey: s,
  additionalContentsTop: o,
  additionalContentsBottom: d,
  options: c,
  inlineButtonTooltip: u,
  paletteType: _,
  fixedNumColumns: h,
  buttonSize: m,
  buttonBackground: g = "dark",
  buttonClassName: f,
  buttonCaretType: E = "down",
  dropperDisabled: b,
  optionSize: S,
  isDesignInlineMenu: A,
  analytics: x,
  customOpacity: N,
  ariaLabel: C,
  alignment: w,
  positionX: O,
  positionY: R,
  palettePickerPopoverWrapper: L,
  shouldDisableDataTooltip: D,
  isColorPopoverOpen: k,
  setIsColorPopoverOpen: M,
  shouldCustomColorPopoverCloseOnEscape: F,
  hasNonWhiteboardColors: j,
  onlyShowCustomColorPopover: U,
  customOptions: B,
  customOptionsHeader: G,
  swatchStyle: V,
  shouldRenderCirclesWithContentBoxSizing: H,
  colorButtonSizeOverride: z
}) {
  let [W, K] = useState(!1);
  let Y = {
    ...((Array.isArray(e.option) ? e.option[0] : e.option) ?? whiteColor)
  };
  N && (Y.a = N);
  useEffect(() => {
    M && M(W);
  }, [W, M]);
  return U || W ? jsx(_$$v, {
    alignment: w,
    analytics: x,
    color: Y,
    dropperDisabled: b,
    isOpen: W,
    onClose: () => {
      K(!1);
    },
    onColorChange: e => {
      t({
        option: e
      });
    },
    onOpacityChange: e => {
      r && r(e);
    },
    positionX: O,
    positionY: R,
    recordingKey: generateRecordingKey(s, "customColorPopover"),
    shouldCloseOnEscape: F,
    showOpacity: null != N,
    target: jsx($n, {
      active: "light" === g ? "LOUD" : "NORMAL",
      ariaLabel: getI18nString("whiteboard.inline_menu.color_selector_label", {
        currentColor: V_(e.option, _).toLocaleLowerCase()
      }),
      buttonChildrenStyle: z?.buttonChildrenSize,
      buttonStyle: z?.buttonSize,
      caret: E,
      className: f,
      onClick: () => K(!W),
      recordingKey: generateRecordingKey(s, "colorSelectorButton"),
      role: "combobox",
      tooltip: u || V_(e.option, _, getI18nString("whiteboard.inline_menu.color")),
      children: jsx(cd, {
        size: m,
        value: e.option,
        paletteType: _,
        background: g,
        shouldRenderCirclesWithContentBoxSizing: H,
        swatchStyle: V
      })
    }),
    theme: "dark"
  }) : jsx(P, {
    additionalContentsBottom: d,
    additionalContentsTop: o,
    alignment: w,
    analytics: x,
    ariaLabel: C,
    buttonBackground: g,
    buttonCaretType: E,
    buttonClassName: f,
    buttonSize: m,
    colorButtonSizeOverride: z,
    customOptions: B,
    customOptionsHeader: G,
    fixedNumColumns: h,
    hasNonWhiteboardColors: j,
    inlineButtonTooltip: u,
    isColorPopoverOpen: k,
    isDesignInlineMenu: A,
    onColorChange: t,
    onCustomColor: () => K(!0),
    optionSize: S,
    options: c,
    palettePickerPopoverWrapper: L,
    paletteType: _,
    positionX: O,
    positionY: R,
    recordingKey: s,
    setIsColorPopoverOpen: M,
    shouldDisableDataTooltip: D,
    shouldRenderCirclesWithContentBoxSizing: H,
    swatchStyle: V,
    value: e
  });
}
export function $$L1({
  id: e,
  shouldDisableDataTooltip: t,
  paletteType: r,
  customColor: a,
  onPointerUp: s,
  isFocused: l,
  recordingKey: d,
  shouldRenderCirclesWithContentBoxSizing: u
}) {
  return a ? createElement(RecordableButton, {
    id: e,
    ...(t ? {} : {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("whiteboard.colors.custom"),
      "data-tooltip-show-above": !0
    }),
    className: o()(_$$s, {
      [_$$H]: l
    }),
    key: "custom-color",
    role: "option",
    tabIndex: -1,
    "aria-label": getI18nString("whiteboard.colors.custom"),
    recordingKey: d,
    onPointerUp: s
  }, jsx(cd, {
    swatchStyle: {
      border: "1px solid rgba(0, 0, 0, 0.2)",
      boxSizing: "border-box",
      boxShadow: "none"
    },
    value: a,
    selectionState: "selected_custom",
    paletteType: r,
    background: "dark",
    size: "medium",
    shouldRenderCirclesWithContentBoxSizing: u
  })) : jsx(RecordableButton, {
    id: e,
    recordingKey: d,
    onPointerUp: s,
    role: "option",
    tabIndex: -1,
    "aria-label": getI18nString("whiteboard.colors.custom"),
    className: o()(_$$s, {
      [_$$H]: l
    }),
    children: jsx(ZI, {
      shouldDisableDataTooltip: t,
      shouldRenderCirclesWithContentBoxSizing: u
    })
  }, "custom-color");
}
function P({
  value: e,
  onColorChange: t,
  onCustomColor: r,
  recordingKey: s,
  additionalContentsTop: d,
  additionalContentsBottom: g,
  options: I,
  inlineButtonTooltip: S,
  paletteType: O,
  buttonSize: R,
  buttonClassName: P,
  buttonCaretType: D = "down",
  buttonBackground: k = "dark",
  optionSize: M,
  isDesignInlineMenu: F,
  fixedNumColumns: j,
  analytics: U,
  ariaLabel: B,
  alignment: G = "center",
  palettePickerPopoverWrapper: V,
  shouldDisableDataTooltip: H,
  positionX: z,
  positionY: W,
  isColorPopoverOpen: K,
  setIsColorPopoverOpen: Y,
  hasNonWhiteboardColors: $,
  customOptions: X,
  customOptionsHeader: q,
  colorButtonSizeOverride: J,
  swatchStyle: Z,
  shouldRenderCirclesWithContentBoxSizing: Q
}) {
  let ee = useRef(generateUUIDv4());
  let et = useRef(generateUUIDv4());
  let er = C(e.option);
  let en = iN(er, O);
  let ei = iN(er, "baseLight") && "base" === O;
  let ea = $ ? function (e, t) {
    try {
      return !t.find(t => {
        let r = C(t.option);
        let n = C(e.option);
        return r && n && areColorsEqual(r, n);
      });
    } catch (e) {
      console.error(e);
      return !1;
    }
  }(e, I) : en && ei;
  let es = () => {
    K && r();
  };
  let {
    derivedNumColumnsInGrid,
    swatchGrid
  } = (({
    fixedNumColumns: e
  }) => {
    if (e) return {
      swatchGrid: Wj(e, B, ee.current),
      derivedNumColumnsInGrid: e
    };
    let {
      swatchGrid: _swatchGrid,
      numColumns
    } = lX(I.length, B, ee.current);
    return {
      derivedNumColumnsInGrid: numColumns,
      swatchGrid: _swatchGrid
    };
  })({
    fixedNumColumns: j
  });
  return jsx(Fn, {
    OptionWrapper: swatchGrid,
    PopoverWrapper: V || wM,
    additionalContentsBottom: g,
    additionalContentsTop: d,
    additionalOptionId: et.current,
    additionalOptionOnChange: r,
    additionalOptions: (t = !1) => jsx(_$$R, {
      customOption: jsx($$L1, {
        id: et.current,
        paletteType: O,
        shouldDisableDataTooltip: H ?? !1,
        customColor: ea ? e.option : void 0,
        onPointerUp: es,
        isFocused: t,
        recordingKey: generateRecordingKey(s, "colorSelectorCustomOption"),
        shouldRenderCirclesWithContentBoxSizing: Q ?? !1
      }),
      paletteType: O,
      numOptions: I.length,
      numColumns: derivedNumColumnsInGrid
    }),
    customOptions: X,
    customOptionsHeader: q,
    onChange: e => {
      t(e);
      U && _$$F2.trackFromFullscreen("figjam_node_color_change", {
        source: "default",
        color: z5.format(e.option),
        ...U.properties
      });
    },
    onToggleMenuOpen: Y,
    optionEquality: (e, t) => !(Array.isArray(e.option) || Array.isArray(t.option)) && areColorsEqual(e.option, t.option),
    options: I,
    positionX: z ?? w[G],
    positionY: W,
    renderButton: ({
      value: e,
      ref: t,
      onClick: r,
      onKeyDown: i,
      active: o,
      activeOptionId: l
    }) => jsx($n, {
      active: o ? "light" === k ? "LOUD" : "NORMAL" : "NONE",
      ariaActiveDescendant: l,
      ariaControls: ee.current,
      ariaLabel: getI18nString("whiteboard.inline_menu.color_selector_label", {
        currentColor: V_(e.option, O).toLocaleLowerCase()
      }),
      buttonChildrenStyle: J?.buttonChildrenSize,
      buttonStyle: J?.buttonSize,
      caret: D,
      className: P,
      isDesignInlineMenu: F,
      isNewSubmenu: "light" === k,
      onKeyDown: i,
      onPointerDown: r,
      recordingKey: generateRecordingKey(s, "colorSelectorButton"),
      role: "combobox",
      testId: "WhiteboardColorSelectorButton",
      tooltip: S || V_(e.option, O, getI18nString("whiteboard.inline_menu.color")),
      children: jsx(cd, {
        size: R,
        value: e.option,
        paletteType: O,
        background: k,
        ref: t,
        swatchStyle: Z,
        shouldRenderCirclesWithContentBoxSizing: Q
      })
    }),
    renderOption: ({
      value: e,
      onClick: t,
      id: r,
      isSelected: l,
      isFocused: d
    }) => createElement(RecordableButton, {
      id: r,
      ...(H ? {} : {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": e.tooltip || V_(e.option, O),
        "data-tooltip-show-above": !0
      }),
      key: _$$F.format(e.option) + e.tooltip,
      "aria-label": e.tooltip || V_(e.option, O),
      "aria-selected": l,
      className: o()(_$$s, {
        [_$$H]: d
      }),
      "data-testid": "colorMenuOption",
      onPointerUp: e => {
        K && t(e);
      },
      recordingKey: generateRecordingKey(s, "colorSelectorOption", _$$F.format(e.option)),
      role: "option",
      tabIndex: -1
    }, jsx(cd, {
      value: e.option,
      selectionState: l ? "selected" : "unselected",
      paletteType: O,
      size: M,
      background: "dark",
      shouldRenderCirclesWithContentBoxSizing: Q
    })),
    value: e
  });
}
export const ZE = $$O0;
export const em = $$L1;
export const qW = $$R2;