import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { ButtonPrimitive } from "../905/632989";
import { IconButton } from "../905/443068";
import { A } from "../905/251970";
import { stylex } from "@stylexjs/stylex";
import d from "classnames";
import { BrowserInfo } from "../figma_app/778880";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { LR } from "../figma_app/120210";
import { rp } from "../figma_app/703988";
import { O } from "../figma_app/71774";
import { F } from "../figma_app/603239";
import { A as _$$A } from "../6828/564422";
var c = d;
let g = {
  _fontBase: {
    fontFamily: "x1sf2cm4",
    $$css: !0
  },
  _fontBaseWhyte: {
    fontFamily: "x7p3mfg",
    $$css: !0
  },
  _fontBaseWhyteInktrap: {
    fontFamily: "xxwq9nw",
    $$css: !0
  },
  _negText: {
    color: "xfungia",
    $$css: !0
  },
  _pos9: {
    fontSize: "xvwhms9",
    lineHeight: "x1rgpnsg",
    letterSpacing: "xrzug82",
    $$css: !0
  },
  _pos10: {
    fontSize: "x1k6wstc",
    lineHeight: "x1rgpnsg",
    letterSpacing: "xi5l5d4",
    $$css: !0
  },
  _pos11: {
    fontSize: "x1j6dyjg",
    lineHeight: "x1rgpnsg",
    letterSpacing: "xbfmibi",
    $$css: !0
  },
  _pos12: {
    fontSize: "xfifm61",
    lineHeight: "x1rgpnsg",
    letterSpacing: "xl0rkcc",
    $$css: !0
  },
  _pos13: {
    fontSize: "x4z9k3i",
    lineHeight: "xzl6hoh",
    letterSpacing: "x1y4hp7x",
    $$css: !0
  },
  _pos14: {
    fontSize: "xif65rj",
    lineHeight: "xzl6hoh",
    letterSpacing: "x1gob9o9",
    $$css: !0
  },
  _pos15: {
    fontSize: "x1jvydc1",
    lineHeight: "xzl6hoh",
    letterSpacing: "x4a0c82",
    $$css: !0
  },
  _pos16: {
    fontSize: "x1j61zf2",
    lineHeight: "xzl6hoh",
    letterSpacing: "x1kb4gdn",
    $$css: !0
  },
  _pos18: {
    fontSize: "xosj86m",
    lineHeight: "xzl6hoh",
    letterSpacing: "x156thsq",
    $$css: !0
  },
  _pos20: {
    fontSize: "xwsyq91",
    lineHeight: "x1iw6iz2",
    letterSpacing: "x1qjdn3a",
    $$css: !0
  },
  _pos22: {
    fontSize: "x1i1m3gp",
    lineHeight: "x1iw6iz2",
    letterSpacing: "xf2jhuu",
    $$css: !0
  },
  _pos24: {
    fontSize: "x1pvqxga",
    lineHeight: "x1iw6iz2",
    letterSpacing: "xvq8bn7",
    $$css: !0
  },
  _pos30: {
    fontSize: "x1ulgg28",
    lineHeight: "x1jeunb0",
    letterSpacing: "x170okzm",
    $$css: !0
  },
  _pos32: {
    fontSize: "x1s3cmhv",
    lineHeight: "x1ndormr",
    letterSpacing: "x167bpad",
    $$css: !0
  },
  _pos48: {
    fontSize: "x93iunb",
    lineHeight: "x69ywtv",
    letterSpacing: "xcsdo9p",
    $$css: !0
  },
  _pos64: {
    fontSize: "xcdf80j",
    lineHeight: "x99kzd9",
    letterSpacing: "x1lxi8ty",
    $$css: !0
  },
  _pos96: {
    fontSize: "x1kj9fbh",
    lineHeight: "xgrh7qf",
    letterSpacing: "x1op3enj",
    $$css: !0
  },
  _neg9: {
    fontSize: "xvwhms9",
    lineHeight: "x1rgpnsg",
    letterSpacing: "x1091xu3",
    $$css: !0
  },
  _neg10: {
    fontSize: "x1k6wstc",
    lineHeight: "x1rgpnsg",
    letterSpacing: "xn6058z",
    $$css: !0
  },
  _neg11: {
    fontSize: "x1j6dyjg",
    lineHeight: "x1rgpnsg",
    letterSpacing: "xv276cb",
    $$css: !0
  },
  _neg12: {
    fontSize: "xfifm61",
    lineHeight: "x1rgpnsg",
    letterSpacing: "x97z6g8",
    $$css: !0
  },
  _neg13: {
    fontSize: "x4z9k3i",
    lineHeight: "xzl6hoh",
    letterSpacing: "x43v4of",
    $$css: !0
  },
  _neg14: {
    fontSize: "xif65rj",
    lineHeight: "xzl6hoh",
    letterSpacing: "xyj5iki",
    $$css: !0
  },
  _neg15: {
    fontSize: "x1jvydc1",
    lineHeight: "xzl6hoh",
    letterSpacing: "x2fnmkb",
    $$css: !0
  },
  _neg16: {
    fontSize: "x1j61zf2",
    lineHeight: "xzl6hoh",
    letterSpacing: "x25ubwt",
    $$css: !0
  },
  _neg18: {
    fontSize: "xosj86m",
    lineHeight: "xzl6hoh",
    letterSpacing: "x8im0po",
    $$css: !0
  },
  _neg20: {
    fontSize: "xwsyq91",
    lineHeight: "x1iw6iz2",
    letterSpacing: "x15v6ubr",
    $$css: !0
  },
  _neg22: {
    fontSize: "x1i1m3gp",
    lineHeight: "x1iw6iz2",
    letterSpacing: "x8l3ect",
    $$css: !0
  },
  _neg24: {
    fontSize: "x1pvqxga",
    lineHeight: "x1iw6iz2",
    letterSpacing: "x18s9epz",
    $$css: !0
  },
  _neg30: {
    fontSize: "x1ulgg28",
    lineHeight: "x1jeunb0",
    letterSpacing: "x132bosy",
    $$css: !0
  },
  _neg48: {
    fontSize: "x93iunb",
    lineHeight: "x69ywtv",
    letterSpacing: "xl1zdtn",
    $$css: !0
  },
  _neg64: {
    fontSize: "xcdf80j",
    lineHeight: "x99kzd9",
    letterSpacing: "xudzddd",
    $$css: !0
  },
  _neg96: {
    fontSize: "x1kj9fbh",
    lineHeight: "xgrh7qf",
    letterSpacing: "x1um2rej",
    $$css: !0
  }
};
let p = {
  fontPos9: {
    ...g._fontBase,
    ...g._pos9,
    $$css: !0
  },
  fontPos10: {
    ...g._fontBase,
    ...g._pos10,
    $$css: !0
  },
  fontPos11: {
    ...g._fontBase,
    ...g._pos11,
    $$css: !0
  },
  fontPos12: {
    ...g._fontBase,
    ...g._pos12,
    $$css: !0
  },
  fontPos13: {
    ...g._fontBase,
    ...g._pos13,
    $$css: !0
  },
  fontPos14: {
    ...g._fontBase,
    ...g._pos14,
    $$css: !0
  },
  fontPos15: {
    ...g._fontBase,
    ...g._pos15,
    $$css: !0
  },
  fontPos16: {
    ...g._fontBase,
    ...g._pos16,
    $$css: !0
  },
  fontPos18: {
    ...g._fontBase,
    ...g._pos18,
    $$css: !0
  },
  fontPos20: {
    ...g._fontBase,
    ...g._pos20,
    $$css: !0
  },
  fontPos22: {
    ...g._fontBase,
    ...g._pos22,
    $$css: !0
  },
  fontPos24: {
    ...g._fontBase,
    ...g._pos24,
    $$css: !0
  },
  fontPos30: {
    ...g._fontBase,
    ...g._pos30,
    $$css: !0
  },
  fontPos48: {
    ...g._fontBase,
    ...g._pos48,
    $$css: !0
  },
  fontPos64: {
    ...g._fontBase,
    ...g._pos64,
    $$css: !0
  },
  fontPos96: {
    ...g._fontBase,
    ...g._pos96,
    $$css: !0
  },
  fontNeg9: {
    ...g._fontBase,
    ...g._negText,
    ...g._neg9,
    $$css: !0
  },
  fontNeg10: {
    ...g._fontBase,
    ...g._negText,
    ...g._neg10,
    $$css: !0
  },
  fontNeg11: {
    ...g._fontBase,
    ...g._negText,
    ...g._neg11,
    $$css: !0
  },
  fontNeg12: {
    ...g._fontBase,
    ...g._negText,
    ...g._neg12,
    $$css: !0
  },
  fontNeg13: {
    ...g._fontBase,
    ...g._negText,
    ...g._neg13,
    $$css: !0
  },
  fontNeg14: {
    ...g._fontBase,
    ...g._negText,
    ...g._neg14,
    $$css: !0
  },
  fontNeg15: {
    ...g._fontBase,
    ...g._negText,
    ...g._neg15,
    $$css: !0
  },
  fontNeg16: {
    ...g._fontBase,
    ...g._negText,
    ...g._neg16,
    $$css: !0
  },
  fontNeg18: {
    ...g._fontBase,
    ...g._negText,
    ...g._neg18,
    $$css: !0
  },
  fontNeg20: {
    ...g._fontBase,
    ...g._negText,
    ...g._neg20,
    $$css: !0
  },
  fontNeg22: {
    ...g._fontBase,
    ...g._negText,
    ...g._neg22,
    $$css: !0
  },
  fontNeg24: {
    ...g._fontBase,
    ...g._negText,
    ...g._neg24,
    $$css: !0
  },
  fontNeg30: {
    ...g._fontBase,
    ...g._negText,
    ...g._neg30,
    $$css: !0
  },
  fontNeg48: {
    ...g._fontBase,
    ...g._negText,
    ...g._neg48,
    $$css: !0
  },
  fontNeg64: {
    ...g._fontBase,
    ...g._negText,
    ...g._neg64,
    $$css: !0
  },
  fontNeg96: {
    ...g._fontBase,
    ...g._negText,
    ...g._neg96,
    $$css: !0
  },
  fontPos11Whyte: {
    ...g._fontBaseWhyte,
    ...g._pos11,
    $$css: !0
  },
  fontPos12Whyte: {
    ...g._fontBaseWhyte,
    ...g._pos12,
    $$css: !0
  },
  fontPos13Whyte: {
    ...g._fontBaseWhyte,
    ...g._pos13,
    $$css: !0
  },
  fontPos14Whyte: {
    ...g._fontBaseWhyte,
    ...g._pos14,
    $$css: !0
  },
  fontPos16Whyte: {
    ...g._fontBaseWhyte,
    ...g._pos16,
    $$css: !0
  },
  fontPos18Whyte: {
    ...g._fontBaseWhyte,
    ...g._pos18,
    $$css: !0
  },
  fontPos20Whyte: {
    ...g._fontBaseWhyte,
    ...g._pos20,
    $$css: !0
  },
  fontPos22Whyte: {
    ...g._fontBaseWhyte,
    ...g._pos22,
    $$css: !0
  },
  fontPos24Whyte: {
    ...g._fontBaseWhyte,
    ...g._pos24,
    $$css: !0
  },
  fontPos32Whyte: {
    ...g._fontBaseWhyte,
    ...g._pos32,
    $$css: !0
  },
  fontPos24WhyteInktrap: {
    ...g._fontBaseWhyteInktrap,
    ...g._pos24,
    $$css: !0
  },
  fontPos32WhyteInktrap: {
    ...g._fontBaseWhyteInktrap,
    ...g._pos32,
    $$css: !0
  }
};
let j = {
  categoryName: {
    maxWidth: "x193iq5w",
    cursor: "xt0e3qv",
    whiteSpace: "xuxw1ft",
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    textOverflow: "xlyipyv",
    $$css: !0
  },
  defaultTitleFontSize: {
    ...p.fontPos13,
    $$css: !0
  }
};
export function $$S0({
  goBack: e,
  title: t,
  children: s,
  layoutOverride: a,
  includeBorderBottom: r,
  titleFontSize: o
}) {
  return jsxs("div", {
    className: c()({
      "browse_explore_category_top_bar--topBar--VdcGk": !0,
      "browse_explore_category_top_bar--thinHeader--ioOIM": a === rp.THIN_2_COL,
      "browse_explore_category_top_bar--borderBottom--iL5-E": r
    }),
    children: [jsxs("div", {
      className: "browse_explore_category_top_bar--left--XjCF8",
      children: [jsx(ButtonPrimitive, {
        className: c()("browse_explore_category_top_bar--backButton--lqLK5", "browse_explore_category_top_bar--hasFocusOutline--RM-Sd"),
        onClick: BrowserInfo.isIpad ? void 0 : e,
        htmlAttributes: {
          onPointerDown: BrowserInfo.isIpad ? e : void 0,
          autoFocus: !0
        },
        "aria-label": getI18nString("general.back"),
        children: jsx(SvgComponent, {
          svg: _$$A,
          "data-not-draggable": !0,
          "data-does-not-dismiss-modal": !0
        })
      }), jsx("div", {
        className: "browse_explore_category_top_bar--categoryNameContainer--b--X4",
        children: jsx("div", {
          ...stylex.props(j.categoryName, o ?? j.defaultTitleFontSize),
          children: t
        })
      })]
    }), jsx("div", {
      className: "browse_explore_category_top_bar--right--0SLBG",
      children: s
    })]
  });
}
export function $$v1(e) {
  let {
    selectedCategory,
    goBack
  } = e;
  let n = LR();
  let l = useCallback(() => n(), [n]);
  let d = F();
  return jsxs($$S0, {
    goBack,
    title: selectedCategory.title,
    children: [e.extraContent, d ? jsx(O, {
      setPinned: e.setPinned
    }) : jsx(IconButton, {
      onClick: l,
      "aria-label": getI18nString("general.close"),
      children: jsx(A, {})
    })]
  });
}
export const W = $$S0;
export const b = $$v1;
