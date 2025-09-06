import { jsxs, jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { E as _$$E } from "../905/632989";
import { g as _$$g } from "../905/687265";
import { Ay } from "@stylexjs/stylex";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import { Kz } from "../figma_app/637027";
import { getI18nString, renderI18nText } from "../905/303541";
import { FFileType } from "../figma_app/191312";
import { pA } from "../7021/724859";
import { pV } from "../7021/970540";
import { uN } from "../905/98947";
import { HN } from "../7021/762792";
let g = {
  answerButton: {
    display: "x78zum5",
    padding: "x1iwkndl",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    margin: "x1ghz6dp",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    alignItems: "x1cy8zhl",
    borderRadius: "x1kogg8i",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    fontFamily: "x7p3mfg",
    textAlign: "x2b8uid",
    fontWeight: "xk50ysn",
    lineHeight: "x1o2sk6j",
    cursor: "x1ypdohk",
    backgroundColor: "x1yjdb4r xv2f06h",
    border: "x14fez2s",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    fontSize: "x1j61zf2",
    fontStyle: "x1j61x8r",
    userSelect: "x87ps6o",
    $$css: !0
  },
  selectedAnswerButton: {
    backgroundColor: "xcr9a89 xdkpnqj",
    borderColor: "x1va2ikv",
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    color: "x1quhyk7",
    $$css: !0
  },
  selectedAnswerButtonMake: {
    color: "x1akne3o",
    backgroundColor: "x176lpz5 x1u7sex0",
    $$css: !0
  },
  selectedProductDescriptionText: {
    ..._$$g.textBodyLarge,
    color: "x1quhyk7",
    marginTop: "x1bz8wuu",
    $$css: !0
  }
};
export function $$m0() {
  switch (useAtomWithSubscription(uN)) {
    case FFileType.DESIGN:
      return getI18nString("new_user_experience.choose_product.description.figma");
    case FFileType.WHITEBOARD:
      return getI18nString("new_user_experience.choose_product.description.figjam");
    case FFileType.SLIDES:
      return getI18nString("new_user_experience.choose_product.description.slides");
    case FFileType.SITES:
      return getI18nString("new_user_experience.choose_product.description.sites");
    case FFileType.FIGMAKE:
      return getI18nString("new_user_experience.choose_product.description.make");
    case FFileType.COOPER:
      return getI18nString("new_user_experience.choose_product.description.create_marketing_assets_and_social");
    default:
      return null;
  }
}
export function $$$$E1() {
  let [e, r] = useAtomValueAndSetter(uN);
  let t = $$m0();
  let o = pV(e);
  let l = useMemo(() => [{
    buttonText: getI18nString("new_user_experience.choose_product.title.figma"),
    selectedProduct: FFileType.DESIGN
  }, {
    buttonText: getI18nString("new_user_experience.choose_product.title.figjam"),
    selectedProduct: FFileType.WHITEBOARD
  }, {
    buttonText: getI18nString("new_user_experience.choose_product.title.slides"),
    selectedProduct: FFileType.SLIDES
  }, !1, getFeatureFlags().bake_starter_limit && {
    buttonText: getI18nString("new_user_experience.choose_product.title.make"),
    selectedProduct: FFileType.FIGMAKE
  }, {
    buttonText: getI18nString("new_user_experience.choose_product.title.buzz"),
    selectedProduct: FFileType.COOPER
  }].filter(e => !!e), []);
  return jsxs(pA, {
    children: [jsx("h1", {
      className: HN,
      children: renderI18nText("new_user_experience.choose_product.title")
    }), jsx(Kz, {
      multiple: 4
    }), jsx("div", {
      className: "x78zum5 x1q0g3np x8gbvx8 x1v2ro7d x1a02dak x1qjc9v5",
      ...o,
      children: l.map(t => jsx(b, {
        selected: e === t.selectedProduct,
        onClick: () => r(t.selectedProduct),
        selectedProduct: t.selectedProduct,
        children: t.buttonText
      }, t.selectedProduct))
    }), jsxs("div", {
      className: "x1s85apg xdk42cd",
      children: [jsx(Kz, {
        multiple: 6
      }), jsx("div", {
        ...Ay.props(g.selectedProductDescriptionText),
        children: t
      })]
    })]
  });
}
function b(e) {
  let {
    children,
    onClick,
    selected,
    selectedProduct,
    ...a
  } = e;
  return jsx(_$$E, {
    onClick,
    ...Ay.props(g.answerButton, selected && g.selectedAnswerButton, selected && selectedProduct === FFileType.FIGMAKE && g.selectedAnswerButtonMake),
    ...a,
    children
  });
}
export const E = $$m0;
export const d = $$$$E1;