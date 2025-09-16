import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useRef, useMemo, useState, useEffect } from "react";
import { getFeatureFlags } from "../905/601108";
import { getI18nString } from "../905/303541";
import { editorUtilities as _$$k2 } from "../905/22009";
import { allCategoriesQuery } from "../figma_app/188671";
import { IT } from "../905/713695";
import { h as _$$h } from "../905/207101";
import { BigTextInputForwardRef } from "../figma_app/637027";
import { tZ, xe, DK, I$, w, gP, Kz, K_, UW } from "../905/599844";
import { useDispatch } from "react-redux";
import g from "classnames";
import { SvgComponent } from "../905/714743";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { Um } from "../905/848862";
import { Cf, it } from "../905/504727";
import { A as _$$A } from "../6828/814452";
import { A as _$$A2 } from "../905/794518";
function m({
  value: e,
  onChange: t
}) {
  let i = useCallback(e => {
    t(e.currentTarget.value);
  }, [t]);
  _$$h(() => () => t(""));
  return jsx("div", {
    className: tZ,
    children: jsx(BigTextInputForwardRef, {
      maxLength: 70,
      className: xe,
      onChange: i,
      value: e,
      spellCheck: !1,
      autoFocus: !0,
      placeholder: getI18nString("community.publishing.tell_us_more")
    })
  });
}
var f = g;
function I({
  categories: e,
  value: t,
  onChange: i,
  placeholder: a,
  dropdownType: s,
  disabled: o
}) {
  let l = useDispatch();
  let d = Um();
  let c = d?.type === s;
  let u = useCallback(() => {
    c ? l(hideDropdownAction()) : l(showDropdownThunk({
      type: s
    }));
  }, [l, c, s]);
  let m = useCallback(e => {
    i(e);
    l(hideDropdownAction());
  }, [l, i]);
  let g = useRef(null);
  let b = useMemo(() => {
    if (t && e.length) return e.find(e => e.id === t);
  }, [e, t]);
  return jsx("div", {
    className: DK,
    children: jsxs("div", {
      className: I$,
      ref: g,
      children: [jsxs("button", {
        "data-testid": "category-select-trigger",
        className: f()(w, {
          [gP]: !b
        }),
        onClick: u,
        onKeyDown: e => {
          "Tab" !== e.key && e.preventDefault();
          e.stopPropagation();
          "Enter" !== e.key || c || l(showDropdownThunk({
            type: s
          }));
        },
        disabled: o,
        role: "listbox",
        children: [b ? b.title : a, jsx("span", {
          className: Kz,
          children: jsx(SvgComponent, {
            svg: _$$A
          })
        })]
      }), c && jsx(E, {
        categories: e,
        value: t,
        onChange: m,
        dropdownTargetRef: g
      })]
    })
  });
}
function E({
  categories: e,
  onChange: t,
  dropdownTargetRef: i,
  value: a
}) {
  let s = i.current?.getBoundingClientRect();
  let o = useDispatch();
  let [l, d] = useState(null);
  if (useEffect(() => {
    if (a && e.length && null === l) {
      let t = e.findIndex(e => e.id === a);
      -1 !== t && d(t);
    }
  }, [a, e, l]), !s) return null;
  let c = t => i => {
    i.preventDefault();
    d(e.findIndex(e => e.id === t));
  };
  return jsx(Cf, {
    targetRect: s,
    showPoint: !1,
    minWidth: 528,
    maxWidth: 528,
    autofocusPrevOnDismount: !0,
    focusContainerOnMount: !0,
    type: it.MATCH_BACKGROUND,
    onKeyDown: i => {
      if (i.preventDefault(), "ArrowDown" === i.key || "ArrowUp" === i.key) {
        let t = -1;
        if (null === l) {
          let i = e.findIndex(e => e.id === a);
          t = i = -1 === i ? 0 : i;
        } else t = "ArrowDown" === i.key ? l + 1 < e.length - 1 ? l + 1 : e.length - 1 : l - 1 > 0 ? l - 1 : 0;
        d(t);
      } else "Enter" === i.key && null !== l ? t(e[l].id) : "Escape" === i.key && (i.stopPropagation(), o(hideDropdownAction()));
    },
    children: jsx("div", {
      onMouseLeave: e => {
        e.preventDefault();
        d(0);
      },
      children: e.map(i => jsx("button", {
        "data-testid": "category-select-category",
        id: i.id,
        className: f()(K_, {
          [UW]: null !== l && i.id === e[l].id
        }),
        onClick: e => {
          e.preventDefault();
          e.stopPropagation();
          t(i.id);
        },
        onMouseEnter: c(i.id),
        children: i.title
      }, i.id))
    })
  });
}
let $$S0 = "PUBLISH_MODAL_CATEGORY_SELECT_DROPDOWN";
let $$w1 = "PUBLISH_MODAL_SUBCATEGORY_SELECT_DROPDOWN";
function C(e) {
  return e?.title?.trim()?.toLowerCase() === "other";
}
export function $$T3(e) {
  return e?.url_slug === "presentations";
}
export function $$k2({
  value: e,
  previousValue: t,
  onChange: i,
  onCategoryInputChange: c,
  categoryInputValue: u,
  required: p,
  error: h,
  disabled: g,
  editorType: f
}) {
  let [_] = IT(allCategoriesQuery(f));
  null != _.data && f !== _$$k2.Editors.SLIDES && (_.data = _.data.filter(e => "presentations" !== e.url_slug));
  let A = useMemo(() => {
    if ("loaded" !== _.status) return [];
    let e = _.data.filter(e => !e.parent_category_id);
    e.sort((e, t) => e.title.toLowerCase() < t.title.toLowerCase() ? -1 : 1);
    return e;
  }, [_]);
  let y = useMemo(() => {
    if ("loaded" !== _.status) return {};
    let e = {};
    for (let t in _.data.filter(e => e.parent_category_id).forEach(t => {
      let i = t.parent_category_id;
      e[i] = e[i] || [];
      e[i].push(t);
    }), e) {
      let i = e[t];
      i.sort((e, t) => e.title.toLowerCase() < t.title.toLowerCase() ? -1 : 1);
      let n = i.findIndex(C);
      if (n >= 0) {
        let e = i.splice(n, 1)[0];
        i.push(e);
      }
    }
    return e;
  }, [_]);
  let b = useMemo(() => {
    if ("loaded" === _.status && e) return _.data.find(t => t.id === e);
  }, [e, _]);
  let [v, E] = useState(null);
  useEffect(() => {
    b && E(b?.parent_category_id || b?.id || null);
  }, [b]);
  let T = useCallback(e => {
    y[e] ? i(null) : i(e);
    E(e);
  }, [y, i, E]);
  let k = !!(v && y[v]);
  let R = getFeatureFlags().cmty_categories_other_input && k && b && C(b) && e !== t;
  return jsxs(Fragment, {
    children: [jsx(_$$A2, {
      label: getI18nString("community.publishing.category"),
      required: p,
      error: h && !k ? h : void 0,
      disabled: g,
      children: jsx(I, {
        categories: A,
        value: v,
        onChange: T,
        placeholder: getI18nString("community.publishing.select_a_category"),
        dropdownType: $$S0,
        disabled: g
      })
    }), k && jsxs(_$$A2, {
      label: getI18nString("community.publishing.subcategory"),
      required: p,
      error: h && k ? getI18nString("community.publishing.category_sub_cant_be_empty") : void 0,
      children: [jsx(I, {
        categories: y[v],
        value: e,
        onChange: i,
        placeholder: getI18nString("community.publishing.select_a_subcategory"),
        dropdownType: $$w1,
        disabled: g
      }), R && jsx(m, {
        value: u || "",
        onChange: c
      })]
    })]
  });
}
export const iu = $$S0;
export const Ql = $$w1;
export const Ay = $$k2;
export const d_ = $$T3;