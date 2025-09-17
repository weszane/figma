import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { useTheme } from "../905/289770";
import { setupThemeContext } from "../905/614223";
import { getThemeContextOrDefault } from "../905/158740";
import { A as _$$A } from "../vendor/723372";
import { useDarkContext } from "../figma_app/215667";
import { Description } from "../905/21985";
import { generateInputId } from "../905/786321";
import { useSelectionProvider } from "../905/751750";
import { l as _$$l } from "../905/479687";
import { r as _$$r } from "../905/571562";
import { a as _$$a } from "../905/339331";
import { SelectPrimitiveContainer, SelectPrimitiveScrollArrow, useSelectPrimitiveState, SelectPrimitiveTrigger, SelectPrimitiveOption, SelectPrimitiveGroup, SelectPrimitiveGroupLabel, SelectPrimitiveRoot } from "../905/408073";
import { useFplStrings } from "../figma_app/415899";
var n = {};
require.d(n, {
  container: () => w,
  dark: () => E,
  fill: () => L,
  group: () => x,
  groupLabel: () => O,
  hug: () => F,
  inputGroup: () => P,
  lead: () => I,
  lg: () => j,
  light: () => S,
  md: () => M,
  option: () => T,
  optionIcon: () => k,
  optionInner: () => R,
  optionText: () => N,
  scrollArrow: () => D,
  separator: () => C,
  trigger: () => y,
  triggerContainer: () => b,
  triggerContent: () => v
});
var y = "select__trigger__r1rqC";
var b = "select__triggerContainer__69alI";
var v = "select__triggerContent__ZmjT4";
var I = "select__lead__9Wz1o";
var E = "select__dark__z2S-S";
var x = "select__group__6-RCX";
var S = "select__light__ZPzTt";
var w = "select__container__bEPx-";
var C = "select__separator__Esj5N";
var T = "select__option__p8RMn";
var k = "select__optionIcon__Gg4OF";
var R = "select__optionInner__dN2u1";
var N = "select__optionText__iI1Gx";
var P = "select__inputGroup__SFgrR";
var O = "select__groupLabel__mTJxS";
var D = "select__scrollArrow__nfZxe";
var L = "select__fill__5eps8";
var F = "select__hug__xpOwt";
var M = "select__md__bE-kQ";
var j = "select__lg__O-bfN";
export let $$U0 = forwardRef(({
  children: e,
  ...t
}, i) => {
  let n = useDarkContext();
  let {
    color
  } = useTheme();
  return jsx(SelectPrimitiveContainer, {
    className: _$$A(w, "light" === ("dark" === n ? "dark" : color) ? S : E),
    ...t,
    ref: i,
    children: jsxs(setupThemeContext, {
      mode: "dark" === n ? "dark" : void 0,
      children: [e, jsx(SelectPrimitiveScrollArrow, {
        className: D,
        direction: "up",
        children: jsx(_$$a, {})
      }), jsx(SelectPrimitiveScrollArrow, {
        className: D,
        direction: "down",
        children: jsx(_$$r, {})
      })]
    })
  });
});
$$U0.displayName = "Select.Container";
export let $$B3 = forwardRef(({
  placeholder: e,
  children: t,
  iconLead: i,
  width: a = "hug",
  size: s = "md",
  ...o
}, c) => {
  let {
    selectedItem
  } = useSelectPrimitiveState();
  let p = useFplStrings("select");
  let {
    version
  } = getThemeContextOrDefault();
  let h = selectedItem ? selectedItem.label : e ?? p;
  return jsxs(SelectPrimitiveTrigger, {
    ...o,
    className: _$$A(y, n[a], n[s]),
    ref: c,
    children: [i && jsx(Y, {
      children: i
    }), jsxs("div", {
      className: b,
      children: [jsx("span", {
        className: v,
        children: t ?? h
      }), "ui3" === version ? jsx(_$$r, {}) : jsx(Z, {})]
    })]
  });
});
$$B3.displayName = "Select.ManuallyLabeledTrigger";
export let $$V8 = forwardRef(({
  label: e,
  description: t,
  ...i
}, n) => {
  let [a, s] = useSelectionProvider();
  let o = generateInputId(a);
  return jsx(s, {
    value: a,
    children: jsxs("div", {
      className: P,
      children: [e, jsx($$B3, {
        id: o,
        ...i,
        ref: n
      }), t && jsx(Description, {
        children: t
      })]
    })
  });
});
$$V8.displayName = "Select.Trigger";
let G = forwardRef(({
  children: e,
  ...t
}, i) => {
  let {
    version
  } = getThemeContextOrDefault();
  return jsx(SelectPrimitiveOption, {
    className: T,
    ...t,
    ref: i,
    children: jsxs("span", {
      className: R,
      children: ["ui3" === version ? jsx(_$$l, {
        "aria-hidden": !0,
        className: k
      }) : jsx($, {
        "aria-hidden": !0,
        className: k
      }), jsx("span", {
        className: N,
        children: e
      })]
    })
  });
});
G.displayName = "Select.OptionBase";
export let $$z4 = forwardRef((e, t) => jsx(G, {
  ...e,
  ref: t
}));
$$z4.displayName = "Select.Option";
export let $$H5 = forwardRef((e, t) => jsx(G, {
  ...e,
  ref: t
}));
$$H5.displayName = "Select.OptionReset";
export let $$W1 = forwardRef((e, t) => jsx(SelectPrimitiveGroup, {
  className: x,
  ref: t,
  ...e
}));
$$W1.displayName = "Select.Group";
export let $$K2 = forwardRef((e, t) => jsx(SelectPrimitiveGroupLabel, {
  className: O,
  ref: t,
  ...e
}));
$$K2.displayName = "Select.GroupLabel";
let Y = forwardRef((e, t) => jsx("span", {
  className: I,
  ref: t,
  ...e
}));
export function $$q6(e) {
  return jsx(SelectPrimitiveRoot, {
    ...e,
    offsetAmount: 8,
    padding: {
      top: 12,
      bottom: 12,
      left: 8,
      right: 8
    }
  });
}
function $(e) {
  return jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    ...e,
    children: jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.2069 5.20724L7.70694 10.7072L6.99983 11.4144L6.29272 10.7072L3.29272 7.70724L4.70694 6.29303L6.99983 8.58592L11.7927 3.79303L13.2069 5.20724Z",
      fill: "var(--color-icon)"
    })
  });
}
function Z() {
  return jsx("svg", {
    width: "8",
    height: "8",
    viewBox: "0 0 8 8",
    children: jsx("path", {
      d: "M.646 3.354l.708-.708L4 5.293l2.646-2.647.708.708L4 6.707.646 3.354z",
      fillRule: "nonzero",
      fillOpacity: "1",
      fill: "var(--select-icon)",
      stroke: "none"
    })
  });
}
export function $$X7() {
  return jsx("li", {
    className: C,
    role: "separator"
  });
}
Y.displayName = "Select.Lead";
$$q6.displayName = "Select.Root";
$$X7.displayName = "Select.Separator";
export const mc = $$U0;
export const YJ = $$W1;
export const WL = $$K2;
export const DZ = $$B3;
export const c$ = $$z4;
export const zW = $$H5;
export const bL = $$q6;
export const wv = $$X7;
export const l9 = $$V8;