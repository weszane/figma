import { jsx, Fragment } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { lQ } from "../905/934246";
import { scopeAwareFunction } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { memoizeLRU } from "../figma_app/815945";
import { generateRecordingKey } from "../figma_app/878298";
import s from "classnames";
import { colorToHex } from "../905/436288";
import { useDebouncedCallback } from "use-debounce";
import { logger } from "../905/651849";
import { selectWithShallowEqual } from "../905/103090";
import { N as _$$N } from "../905/551536";
import { s as _$$s } from "../cssbuilder/589278";
import { Dm } from "../figma_app/8833";
import { z5 } from "../905/713722";
import { E3 } from "../figma_app/976749";
import { x as _$$x } from "../905/239551";
import { Vi, kZ } from "../figma_app/364284";
import { Um } from "../905/848862";
import { FEditorType } from "../figma_app/53721";
import { KindEnum } from "../905/129884";
import { l6, c$ } from "../905/794875";
import { qW } from "../figma_app/932285";
import { $n, wv } from "../figma_app/439493";
import { kL, ai, Lt, hF } from "../1006/823759";
var d = s;
let B = "widget_controls--label--YWqiO text--fontNeg12--2PWcg text--_fontBase--QdLsd text--_negText--j9g-L";
let L = "widget_controls--img--bNdQj";
let A = memoizeLRU(e => e.includes("xmlns") ? "data:image/svg+xml;utf8," + encodeURIComponent(e.trim()) : (logger.warn("Your widget must include the xmlns property on any SVGs used in the property menu. See https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg for more info"), null), 1e3);
function M(e) {
  let t = E3();
  let n = e.icon ? A(e.icon) : null;
  let i = void 0 !== t && t === FEditorType.Design;
  return n ? jsx(P, {
    label: e.label,
    propertyName: e.propertyName,
    href: e.href,
    size: i ? "small" : "large",
    tooltip: e.tooltip,
    icon: n,
    onClick: e.onClick,
    active: e.active ? e.active : "NONE"
  }) : jsx(O, {
    label: e.label,
    propertyName: e.propertyName,
    href: e.href,
    tooltip: e.tooltip,
    onClick: e.onClick,
    active: e.active ? e.active : "NONE"
  });
}
function P(e) {
  let t = e.href ? jsx(_$$N, {
    href: e.href,
    className: _$$s.cursorDefault.wFull.hFull.$,
    target: "_blank",
    trusted: !1,
    children: jsx("img", {
      src: e.icon,
      className: L,
      alt: `${e.propertyName}`
    })
  }) : jsx("img", {
    src: e.icon,
    className: L,
    alt: `${e.propertyName}`
  });
  return jsx($n, {
    buttonStyle: {
      overflow: "hidden",
      flexShrink: 0
    },
    size: e.size,
    tooltip: e.tooltip,
    onClick: e.onClick,
    active: e.active ? e.active : "NONE",
    recordingKey: generateRecordingKey("widgetControl", e.propertyName),
    children: t
  });
}
function O(e) {
  let t = e.href ? jsx(_$$N, {
    href: e.href,
    className: d()(B, _$$s.cursorDefault.wFull.hFull.$),
    target: "_blank",
    trusted: !1,
    children: e.label
  }) : jsx("span", {
    className: B,
    children: e.label
  });
  return jsx($n, {
    className: _$$s.flexShrink0.$,
    tooltip: e.tooltip === e.label ? void 0 : e.tooltip,
    onClick: e.onClick,
    active: e.active ? e.active : "NONE",
    recordingKey: generateRecordingKey("widgetControl", e.propertyName),
    children: t
  });
}
function S({
  widgetInfo: e,
  item: t
}) {
  let n = E3();
  let l = scopeAwareFunction.user("widget-select-color", n => {
    let o = colorToHex(n.option);
    _$$x.runPropertyMenuCallback(e.pluginID, e.widgetID, t.propertyName, f[o] ?? o);
  });
  let r = useDebouncedCallback(l, 100);
  let [c, p] = useState(!1);
  let s = [t.selectedOption, ...t.options.map(e => e.option)];
  let d = {};
  let f = {};
  for (let e of s) try {
    let t = z5.parse(e);
    d[e] = t;
    f[colorToHex(t)] = e;
  } catch (t) {
    logger.warn(`Cannot render widget color selector. ${e} is an invalid color.`);
    return jsx("div", {
      "data-testid": "emptyColorSelector"
    });
  }
  let x = n === FEditorType.Design;
  return jsx(qW, {
    buttonSize: x ? "xsmall" : "small",
    inlineButtonTooltip: t.tooltip,
    isColorPopoverOpen: c,
    isDesignInlineMenu: x,
    onColorChange: e => {
      r(e);
    },
    optionSize: "medium",
    options: t.options.map(e => ({
      option: d[e.option],
      tooltip: e.tooltip
    })),
    paletteType: "widget",
    recordingKey: generateRecordingKey("widgetControl", t.propertyName),
    setIsColorPopoverOpen: p,
    value: {
      option: d[t.selectedOption]
    }
  });
}
function H({
  widgetInfo: e,
  item: t
}) {
  return jsx(M, {
    tooltip: t.tooltip,
    label: t.tooltip,
    propertyName: t.propertyName,
    icon: t.icon,
    onClick: scopeAwareFunction.user("widget-action", () => {
      _$$x.runPropertyMenuCallback(e.pluginID, e.widgetID, t.propertyName, null);
    })
  });
}
let E = l6;
let F = c$;
function R({
  item: e,
  widgetInfo: t
}) {
  let n = E3();
  let i = useDispatch();
  let r = Um();
  let a = e.options.find(t => t.option === e.selectedOption);
  let c = generateRecordingKey("widgetControl", e.propertyName);
  let p = void 0 !== n && n === FEditorType.Design;
  return jsx("div", {
    className: p ? void 0 : kL,
    "data-tooltip-show-above": !0,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": e.tooltip,
    children: jsx(E, {
      ariaLabel: e.tooltip,
      blurOnChange: !0,
      chevronClassName: p ? "widget_controls--chevron--a3ua2" : ai,
      className: p ? "widget_controls--select---Nqnq text--fontNeg11--StdFq text--_fontBase--QdLsd text--_negText--j9g-L" : Lt,
      dispatch: i,
      dropdownAlignment: "left",
      dropdownClassName: Dm,
      dropdownShown: r,
      dropdownWidth: 144,
      formatter: {
        format: e => e.tooltip,
        isEqual: (e, t) => e.option === t.option
      },
      id: `widgetControl.${e.propertyName}`,
      inputClassName: p ? "widget_controls--input--Z6nHO" : hF,
      onChange: n => {
        _$$x.runPropertyMenuCallback(t.pluginID, t.widgetID, e.propertyName, n.option);
      },
      property: {
        option: e.selectedOption,
        tooltip: a ? a.tooltip : e.selectedOption
      },
      recordingKey: c,
      targetDomNode: document.body,
      children: e.options.map((t, n) => jsx(F, {
        value: t,
        formattedValue: t.tooltip,
        recordingKey: generateRecordingKey(c, t.option),
        selected: e.selectedOption === t.option,
        truncateInMiddle: !0
      }, n))
    })
  });
}
function z({
  widgetInfo: e,
  item: t
}) {
  return jsx(M, {
    tooltip: t.tooltip,
    label: t.tooltip,
    propertyName: t.propertyName,
    icon: t.icon,
    active: t.isToggled ? "LOUD" : "NONE",
    onClick: scopeAwareFunction.user("widget-toggle", () => {
      _$$x.runPropertyMenuCallback(e.pluginID, e.widgetID, t.propertyName, null);
    })
  });
}
function W({
  widgetInfo: e,
  item: t
}) {
  let n;
  let i = getFeatureFlags().widget_link_encode_uri_component ? encodeURIComponent(t.href) : t.href;
  null !== t.icon && (n = t.icon ? t.icon : '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 12H16V13H13V27H27V24H28V27V28H13H12V27V13V12ZM27.0001 13H26.9913L27.0001 13.0088V13ZM20.0001 13H26.2999L17.0251 22.2747L17.7323 22.9818L27.0001 13.714V20H28.0001V12.5V12H27.5001H20.0001V13Z" fill="white" fill-opacity="0.8"/></svg>');
  return jsx(M, {
    tooltip: t.tooltip,
    label: t.tooltip,
    propertyName: t.propertyName,
    icon: n,
    onClick: lQ,
    href: "https://www.figma.com/exit?url=" + i
  });
}
export function $$$0() {
  let e = function () {
    let e = selectWithShallowEqual(e => e.mirror.selectionProperties.selectedWidgetInfo);
    return useMemo(() => {
      if (!e) return e;
      let {
        pluginID
      } = e;
      if (!Vi(pluginID)) return e;
      let n = e.propertyMenu.map(e => "separator" === e.itemType ? e : {
        ...e,
        tooltip: kZ(pluginID, e.propertyName) || e.tooltip
      });
      return {
        ...e,
        propertyMenu: n
      };
    }, [e]);
  }();
  return e && e.propertyMenu.length ? jsx(Fragment, {
    children: e.propertyMenu.map((t, n) => {
      switch (t.itemType) {
        case "action":
          return jsx(H, {
            item: t,
            widgetInfo: e
          }, n);
        case "separator":
          return jsx(wv, {}, n);
        case "color-selector":
          return jsx(S, {
            item: t,
            widgetInfo: e
          }, n);
        case "dropdown":
          return jsx(R, {
            item: t,
            widgetInfo: e
          }, n);
        case "toggle":
          return jsx(z, {
            item: t,
            widgetInfo: e
          }, n);
        case "link":
          return jsx(W, {
            item: t,
            widgetInfo: e
          }, n);
      }
    })
  }) : null;
}
export const jk = $$$0;
