import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useCallback, useMemo, useEffect } from "react";
import { useAtomWithSubscription, useAtomValueAndSetter, Xr } from "../figma_app/27355";
import { zD, L8, jM, J, P_, l4, a3, wf } from "../905/124270";
import { Hz, RF, p2, H9, aI } from "../905/714062";
import { gl, jN, yA, FR, C8, M2, q1, gh, oM, nX } from "../905/171315";
import { CreatorResourceType, PublicModelType, InputType } from "../figma_app/162807";
import { P } from "../905/16832";
import { useSelector } from "react-redux";
import { trackEventAnalytics } from "../905/449184";
import { A as _$$A } from "../905/484713";
import { hO } from "../figma_app/545293";
import { Q8, sC, BA, R9 } from "../905/61477";
import { n as _$$n } from "../905/624711";
import { f as _$$f } from "../figma_app/882858";
import { L as _$$L } from "../905/713563";
import { selectCurrentUser } from "../905/372672";
import { ButtonPrimitive } from "../905/632989";
import v from "classnames";
import { M3 } from "../figma_app/119475";
import { getI18nString } from "../905/303541";
import { f as _$$f2 } from "../905/287602";
var I = v;
let w = e => {
  switch (e) {
    case CreatorResourceType.RESOURCE:
      return getI18nString("search.facets.filter_by_resource");
    case CreatorResourceType.CREATOR:
      return getI18nString("search.facets.filter_by_creator");
    case CreatorResourceType.SPACE:
      return getI18nString("search.facets.filter_by_space");
    default:
      return "";
  }
};
function C({
  type: e,
  value: t,
  onSelect: i,
  showHint: r,
  id: s,
  path: o
}) {
  let d = useAtomWithSubscription(Q8);
  let {
    setKeyboardNavigationElement,
    isFauxFocused
  } = M3({
    id: s,
    path: o
  });
  let p = w(e);
  return jsxs(ButtonPrimitive, {
    ref: setKeyboardNavigationElement,
    className: I()("faceted_search_preview_suggestion_row--row--mtRkj", isFauxFocused && "faceted_search_preview_suggestion_row--fauxFocus--Hm52U"),
    "aria-label": p,
    "aria-current": isFauxFocused || void 0,
    onClick: i,
    children: [jsxs("div", {
      className: "faceted_search_preview_suggestion_row--container--a6EET",
      children: [jsx("div", {
        className: I()("faceted_search_preview_suggestion_row--pill---AWE3", isFauxFocused && "faceted_search_preview_suggestion_row--hoveredPill--QO2uT"),
        children: gl(e)
      }), !!t && jsx("div", {
        className: "faceted_search_preview_suggestion_row--valueContainer--oWST3",
        children: jsx(_$$f2, {
          text: t,
          query: d
        })
      })]
    }), r && jsx("div", {
      className: "faceted_search_preview_suggestion_row--helpText--l9gXW",
      children: p
    })]
  });
}
let T = (e, t, i) => {
  if (t === CreatorResourceType.RESOURCE) {
    let t = jN(e);
    return t ? yA(t) : "";
  }
  return t === CreatorResourceType.CREATOR || t === CreatorResourceType.SPACE ? FR(e, i) : "";
};
export function $$k0({
  id: e,
  path: t
}) {
  let i = useAtomWithSubscription(zD);
  let b = useAtomWithSubscription(L8);
  let v = useAtomWithSubscription(Hz);
  let [I, E] = useAtomValueAndSetter(Q8);
  let x = selectCurrentUser();
  let S = RF(b, i);
  let w = function () {
    let e = useAtomWithSubscription(Hz);
    let t = useAtomWithSubscription(sC);
    let i = useAtomWithSubscription(BA);
    let n = useAtomWithSubscription(jM);
    let c = useAtomWithSubscription(J);
    let u = useAtomWithSubscription(P_);
    let [p, m] = useAtomValueAndSetter(R9);
    let [y, b] = useAtomValueAndSetter(Q8);
    let v = _$$f();
    let I = _$$n();
    let E = Xr(l4(e?.facetType ?? null));
    let x = useAtomWithSubscription(hO.isFragmentSearchAtom);
    let S = _$$L(x ? "fragment_search_modal" : "file_browser", t, !0);
    let w = useCallback(t => {
      if (e) {
        if ("TYPE_AND_VALUES" === e.suggestionType) {
          let r = e.facetType;
          let a = null == t ? e.facetValues[0] : e.facetValues[t];
          let s = r === CreatorResourceType.RESOURCE ? {
            type: CreatorResourceType.RESOURCE,
            value: a
          } : a;
          let o = null;
          r === CreatorResourceType.RESOURCE ? o = jN(a) : r === CreatorResourceType.CREATOR ? o = C8(a, M2.ADD_TO_GROUP, c) : r === CreatorResourceType.SPACE && (o = q1(a, M2.ADD_TO_GROUP, u));
          E(o);
          let p = y.slice(0, e.facetTypeIndex);
          if (b(p), !o) return;
          let h = gh(o, n, c, u);
          m(h?.searchModelType ?? null);
          x || S(p, PublicModelType.FILES, h, i, !1, !1);
          I(oM(s), y);
        } else {
          let t = y.split(" ").slice(0, -1).join(" ");
          let r = t + (t ? " " : "") + gl(e.facetType);
          b(r);
          let a = nX(n, c, u, p ?? void 0);
          x || S(r, PublicModelType.FILES, a, i, !1, !1);
          v(InputType.AUTOCOMPLETE, e.facetType);
        }
      }
    }, [e, E, y, b, n, c, u, p, m, S, i, I, v, x]);
    return useMemo(() => w, [w]);
  }();
  let k = useCallback((e, t) => {
    e.preventDefault();
    w(t);
  }, [w]);
  let R = useCallback((e, t) => {
    e.preventDefault();
    let i = gl(t);
    E(I ? I + " " + i : i);
  }, [I, E]);
  return (!function () {
    let e = useAtomWithSubscription(Hz);
    let [t, i] = useAtomValueAndSetter(a3);
    let [n, l] = useAtomValueAndSetter(p2);
    let h = useAtomWithSubscription(wf);
    let g = useAtomWithSubscription(H9);
    let f = g?.valueToQuery ?? "";
    let _ = function () {
      let e = useSelector(e => e.search.sessionId);
      let t = useSelector(e => e.search.queryId);
      let i = useSelector(e => e.search.parameters.query);
      return n => {
        let r = {
          sessionId: e,
          queryId: t,
          query: i,
          facet_entrypoint: InputType.AUTOCOMPLETE,
          facet_type: n
        };
        trackEventAnalytics("facet_type_shown", r);
      };
    }();
    let A = P();
    let y = _$$A();
    useEffect(() => {
      e && (e.suggestionType === aI.TYPE ? _(e.facetType) : f.length > 0 && t !== h && (i(h), A(f, e.facetType, InputType.AUTOCOMPLETE)));
      !e && n && y(InputType.AUTOCOMPLETE, n.facetType);
      l(e);
    }, [e]);
  }(), v) ? v.suggestionType === aI.TYPE ? jsx(C, {
    type: v.facetType,
    value: null,
    onSelect: k,
    showHint: !0,
    id: `${e}-facet-type`,
    path: t
  }) : jsx(Fragment, {
    children: v.facetValues.map((i, r) => {
      let a = T(i, v.facetType, x?.id);
      return jsx(C, {
        type: v.facetType,
        value: a,
        onSelect: e => k(e, r),
        showHint: !1,
        id: `${e}-facet-type`,
        path: [...t, r]
      }, r);
    })
  }) : I || b.length > 0 ? jsx(Fragment, {}) : jsx(Fragment, {
    children: S.map((i, r) => jsx(C, {
      type: i,
      value: null,
      onSelect: e => R(e, i),
      showHint: !0,
      id: `${e}-${r}`,
      path: [...t, r]
    }, `suggestion-row-${r}`))
  });
}
export const L = $$k0;