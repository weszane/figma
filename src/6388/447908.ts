import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { createElement, useState, useCallback, useEffect } from "react";
import { E as _$$E } from "../905/632989";
import { K } from "../905/443068";
import { f as _$$f } from "../905/335032";
import { a as _$$a } from "../905/462280";
import { J } from "../905/129695";
import { I as _$$I } from "../905/783004";
import { _ as _$$_ } from "../905/144222";
import { l as _$$l } from "../905/479687";
import { g as _$$g } from "../905/687265";
import { glU, vhv } from "../figma_app/763686";
import { Ay } from "@stylexjs/stylex";
import { getI18nString } from "../905/303541";
import { gI } from "../figma_app/396464";
import { PU, aK } from "../figma_app/334505";
import { wr } from "../figma_app/741237";
import { Ib } from "../905/129884";
import { I9 } from "../figma_app/151869";
import { oW } from "../905/675859";
function E({
  data: e,
  blockEnabled: t,
  numMappedGuids: l
}) {
  return jsx("div", {
    className: "x78zum5 x1q0g3np",
    children: jsx("span", {
      ...Ay.props(S.base, l > 0 && S.mapped, t && S.enabled),
      children: e.join(", ")
    })
  });
}
let S = {
  base: {
    textOverflow: "xlyipyv",
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    whiteSpace: "xuxw1ft",
    color: "x3vvef7",
    $$css: !0
  },
  mapped: {
    color: "x1quhyk7",
    $$css: !0
  },
  enabled: {
    color: "x1n0bwc9",
    $$css: !0
  }
};
function I({
  data: e,
  blockEnabled: t,
  numMappedGuids: l
}) {
  let s = e.slice(0, 3);
  return jsx("div", {
    className: "x78zum5 x1q0g3np xg2d0mh x7hzu26 x17qaar8",
    children: s.map((e, s) => createElement("div", {
      className: "x1n2onr6 x1l7klhg x1cpjm7i xtql2tq x1hmns74 x1y3wzot x1wlytlt xszcg87 x1rmj1tg xz8fyzm x1fo1fc9 xrhax15 x1ppfn1",
      key: s
    }, jsx(oW, {
      src: e,
      alt: getI18nString("buzz.bulk_create.image_preview_alt", {
        count: s + 1
      }),
      ...Ay.props(T.base, (t || l > 0) && T.enabled)
    })))
  });
}
let T = {
  base: {
    display: "x1lliihq",
    opacity: "xuzhngd",
    objectFit: "xl1xv1r",
    aspectRatio: "x1y5e3q9",
    borderRadius: "x192jxwq",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    width: "xh8yej3",
    $$css: !0
  },
  enabled: {
    opacity: "x1hc1fzr",
    $$css: !0
  }
};
function C({
  fieldType: e,
  data: t,
  blockEnabled: l,
  numMappedGuids: n
}) {
  let s = t.filter(e => e.trim().length > 0);
  return e === PU.TEXT ? jsx(E, {
    data: s,
    blockEnabled: l,
    numMappedGuids: n
  }) : e === PU.IMAGE ? jsx(I, {
    data: s,
    blockEnabled: l,
    numMappedGuids: n
  }) : jsx(Fragment, {});
}
export function $$N1() {
  return jsx("div", {
    ...Ay.props(w.instructionText),
    children: jsx("span", {
      children: getI18nString("buzz.bulk_create.select_nodes_instruction")
    })
  });
}
let w = {
  instructionText: {
    padding: "x1tamke2",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    marginBottom: "x1ef8nbk",
    borderRadius: "x19y5rnk",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    backgroundColor: "x1v8gsql",
    color: "x1akne3o",
    ..._$$g.textBodyMedium,
    $$css: !0
  }
};
export function $$R0({
  fieldName: e,
  data: t,
  isGuidMapped: l,
  fieldBlockClickCallback: r,
  initialMappedGuids: i,
  numFieldsMapped: a
}) {
  let [d, c] = useState(new Set(i || []));
  let [u, x] = useState(!1);
  let [h, _] = useState(!1);
  let E = I9();
  let S = function (e, t) {
    let l = $$L2(e);
    let o = gI();
    let s = aK(o);
    return useCallback(e => {
      if (!e) return !1;
      for (let o of e) if (t(o.guid) || l === PU.TEXT && !("TEXT" === o.type || "TEXT_PATH" === o.type) || l === PU.IMAGE && !s.includes(o.guid)) return !1;
      return !0;
    }, [l, s, t]);
  }(t, l);
  let I = E?.some(e => e.hasMissingFont);
  let T = $$L2(t);
  let N = d.size > 0;
  let w = useCallback(() => {
    E && h && (I && glU?.findMissingFontsAndShowPopoverWithScope(vhv.CURRENT_SELECTION), E.forEach(e => d.add(e.guid)), c(d), r(e, d), wr());
  }, [h, r, e, d, E, I]);
  useEffect(() => {
    let e = (E ? E.map(e => e.guid) : []).every(e => d.has(e));
    _(S(E) && !e);
  }, [e, d, E, S]);
  let R = useCallback(() => {
    d.clear();
    c(d);
    r(e, d);
  }, [r, e, d]);
  return jsxs("div", {
    className: "x1n2onr6",
    onMouseEnter: () => x(!0),
    onMouseLeave: () => x(!1),
    children: [jsxs(_$$E, {
      ...Ay.props(A.containerBase, h && A.containerEnabled, N && A.containerMapped, u && N && A.containerMappedHovered),
      "data-tooltip": h || 0 !== a ? "" : getI18nString("buzz.bulk_create.disabled_field_tooltip"),
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip-show-right": !0,
      "aria-pressed": N,
      onClick: w,
      children: [jsx(B, {
        fieldType: T,
        numMappedGuids: d.size,
        blockHovered: u,
        blockEnabled: h
      }), jsxs("div", {
        ...Ay.props(A.content, u && d.size > 0 && T !== PU.IMAGE && A.contentWithUnbind),
        children: [jsx("span", {
          ...Ay.props(A.titleBase, (h || N) && A.titleEnabled),
          children: e
        }), jsx(C, {
          blockEnabled: h,
          fieldType: T,
          data: t,
          numMappedGuids: d.size
        })]
      })]
    }), jsx(k, {
      blockHovered: u,
      numMappedGuids: d.size,
      onUnbindIconClick: R
    })]
  });
}
let A = {
  containerBase: {
    width: "xh8yej3",
    display: "x78zum5",
    alignItems: "x1cy8zhl",
    gap: "xg2d0mh",
    rowGap: null,
    columnGap: null,
    padding: "x1mh6rdz",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: "xp6roeo",
    borderRadius: "x19y5rnk",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    borderWidth: "xmkeg23",
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: "x1y0btm7",
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: "x7z60cl",
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    userSelect: "x87ps6o",
    $$css: !0
  },
  containerEnabled: {
    backgroundColor: "x1v8gsql",
    borderColor: "x9r1u3d",
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    ":focus-visible_borderColor": "xi5j7vn",
    ":focus-visible_borderInlineColor": null,
    ":focus-visible_borderInlineStartColor": null,
    ":focus-visible_borderLeftColor": null,
    ":focus-visible_borderInlineEndColor": null,
    ":focus-visible_borderRightColor": null,
    ":focus-visible_borderBlockColor": null,
    ":focus-visible_borderTopColor": null,
    ":focus-visible_borderBottomColor": null,
    ":focus-visible_backgroundColor": "xc1rnzj",
    ":hover_borderColor": "x3sae66",
    ":hover_borderInlineColor": null,
    ":hover_borderInlineStartColor": null,
    ":hover_borderLeftColor": null,
    ":hover_borderInlineEndColor": null,
    ":hover_borderRightColor": null,
    ":hover_borderBlockColor": null,
    ":hover_borderTopColor": null,
    ":hover_borderBottomColor": null,
    $$css: !0
  },
  containerMapped: {
    backgroundColor: "xcr9a89",
    borderColor: "x9r1u3d",
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: !0
  },
  containerMappedHovered: {
    borderColor: "x1fa9rx7",
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: !0
  },
  content: {
    marginTop: "x1gslohp",
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    minWidth: "xktpd3l",
    $$css: !0
  },
  contentWithUnbind: {
    width: "xloyg6u",
    $$css: !0
  },
  titleBase: {
    color: "x1n0bwc9",
    ..._$$g.textBodyMedium,
    textOverflow: "xlyipyv",
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    whiteSpace: "xuxw1ft",
    $$css: !0
  },
  titleEnabled: {
    color: "x1akne3o",
    $$css: !0
  }
};
export function $$L2(e) {
  let t = e.find(e => e && e.trim());
  return t && t.startsWith("data:image") ? PU.IMAGE : PU.TEXT;
}
function k({
  numMappedGuids: e,
  blockHovered: t,
  onUnbindIconClick: l
}) {
  return t && 0 !== e ? jsx("div", {
    className: "x8x9d4c x10l6tqk x13vifvy x3m8u43 x1gskr33 x1cmmqis xi5j7vn xc1rnzj",
    children: jsx(K, {
      "aria-label": getI18nString("buzz.bulk_create.unbind_field"),
      onClick: l,
      children: jsx(_$$f, {})
    })
  }) : jsx(Fragment, {});
}
function B({
  fieldType: e,
  numMappedGuids: t,
  blockHovered: l,
  blockEnabled: n
}) {
  let s = jsx(_$$a, {});
  let r = t > 0;
  l && n ? s = jsx(J, {}) : 0 === t ? e === PU.TEXT ? s = jsx(_$$I, {}) : e === PU.IMAGE && (s = jsx(_$$_, {})) : s = 1 === t ? jsx(_$$l, {}) : jsx("div", {
    className: "x78zum5 xlup9mm xilkfi8 x1cmmqis x19y5rnk xmkeg23 x1y0btm7 x1fa9rx7 x1akne3o",
    children: t > 10 ? "9+" : t
  });
  return jsx("div", {
    ...Ay.props(M.container, n && M.containerEnabled, (n && l || r) && M.containerActive),
    children: s
  });
}
let M = {
  container: {
    minWidth: "xnei2rj",
    height: "xxk0z11",
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    justifyContent: "xl56j7k",
    alignItems: "x6s0dn4",
    "--color-icon": "xe5c7bq",
    $$css: !0
  },
  containerEnabled: {
    "--color-icon": "xmauxvm",
    $$css: !0
  },
  containerActive: {
    "--color-icon": "xbzrb6o",
    $$css: !0
  }
};
export const cH = $$R0;
export const mA = $$N1;
export const Uk = $$L2;