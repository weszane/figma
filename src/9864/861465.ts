import { jsxs, jsx } from "react/jsx-runtime";
import s from "classnames";
import { getIsAndroidOrIphoneNotFigmaMobile } from "../figma_app/778880";
import { RadioPrimitiveRoot } from "../905/22449";
import { RadioPrimitiveOption } from "../905/34525";
import { props } from "@stylexjs/stylex";
import { useAtomWithSubscription } from "../figma_app/27355";
import { YX } from "../905/98947";
import { h6, P2, F5, eP, wO, iy } from "../7021/762792";
var o = s;
let x = {
  container: {
    maxWidth: "xyzno7u",
    $$css: !0
  }
};
let h = {
  optionsContainer: {
    display: "x78zum5",
    alignItems: "x1cy8zhl",
    alignContent: "x8gbvx8",
    gap: "x167g77z",
    flexWrap: "x1a02dak",
    $$css: !0
  },
  optionsAnswerButton: {
    display: "x78zum5",
    padding: "x153ncpu",
    alignItems: "x6s0dn4",
    gap: "x1jnr06f",
    borderRadius: "x1sxf85j",
    background: "x16v0e3u x1d4akdp",
    border: "x1bamp8i",
    fontFamily: "xclx6tv",
    fontSize: "x17akokd",
    fontStyle: "x1j61x8r",
    fontWeight: "x1qxcl5b",
    lineHeight: "xno9bf3",
    letterSpacing: "xqp8s7e",
    $$css: !0
  },
  optionsAnswerButtonSelected: {
    backgroundColor: "xcr9a89 xdkpnqj",
    borderColor: "x1va2ikv",
    color: "x1quhyk7",
    $$css: !0
  },
  optionsAnswerButtonDimmed: {
    backgroundColor: "x1yjdb4r xtlwphu",
    borderColor: "x7z60cl",
    color: "x3vvef7",
    $$css: !0
  }
};
function _(e) {
  let r = useAtomWithSubscription(YX);
  let t = r => !!(e.isSingleSelect && e.selectedOptions?.size > 0) && !e.selectedOptions?.has(r);
  return jsxs(RadioPrimitiveRoot, {
    "data-testid": "signal-option-container",
    onChange: r => {
      let t = new Set(e.selectedOptions);
      t.has(r) ? t.$$delete(r) : (e.isSingleSelect && t.clear(), t.add(r));
      e.onItemsChange(t);
    },
    ...props(!r && x.container),
    className: r ? void 0 : e.containerClassName,
    ...props(r && h.optionsContainer),
    value: Array.from(e.selectedOptions)?.[0],
    children: [Array.from(e.options).map(s => {
      let l = e.selectedOptions?.has(s);
      let n = t(s);
      let c = o()(e.answerButtonClassName, {
        [e.answerButtonSelectedClassName ?? ""]: l,
        [e.answerButtonDimmedClassName ?? ""]: n
      });
      return jsxs("label", {
        className: r ? void 0 : c,
        ...props(r && h.optionsAnswerButton, r && l && h.optionsAnswerButtonSelected, r && n && h.optionsAnswerButtonDimmed),
        "data-testid": `signal-option-${s}`,
        htmlFor: s,
        children: [jsx(RadioPrimitiveOption, {
          className: "xeh89do x1hyvwdk xjm9jq1 xb3r6kr x10l6tqk xuxw1ft x1i1rx1s",
          value: s,
          id: s
        }), e.getOptionDisplay(s)]
      }, s);
    }), e.endingOption]
  });
}
export function $$f0(e) {
  let r = getIsAndroidOrIphoneNotFigmaMobile();
  return jsx(_, {
    answerButtonClassName: o()(r ? h6 : P2, e.answerButtonClassName),
    answerButtonDimmedClassName: F5,
    answerButtonSelectedClassName: eP,
    answerStyle: {
      maxWidth: "960px"
    },
    containerClassName: o()(r ? wO : iy, e.containerClassName),
    endingOption: e.endingOption,
    getOptionDisplay: e.getOptionDisplay,
    isSingleSelect: e.isSingleSelect,
    onItemsChange: e.onItemsChange,
    options: e.options,
    questionKey: e.questionKey,
    selectedOptions: e.selectedOptions
  });
}
export const L = $$f0;
