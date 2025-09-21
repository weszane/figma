import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect, useCallback, useMemo } from "react";
import { deepEqual, includesEqual } from "../905/382883";
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import { renderI18nText, getI18nString } from "../905/303541";
import { H8, Pf } from "../905/590952";
import { J, jM, P_, wf, a3 } from "../905/124270";
import { buildQueryObject, createCreatorFacet, MAX_TRUNCATE_LENGTH, isLongText } from "../905/171315";
import { e as _$$e } from "../905/404280";
import { n as _$$n } from "../905/624711";
import { k as _$$k } from "../905/252342";
import { P as _$$P } from "../905/16832";
import { F as _$$F } from "../905/801537";
import { selectedItemAtom } from "../905/61477";
import { nv } from "../905/182534";
import { CreatorResourceType, TeamSpaceType, InputType, PillType } from "../figma_app/162807";
import { HY, b3, kI } from "../905/779036";
import { Ze, p$ } from "../905/954985";
export function $$v0({
  id: e,
  path: t,
  setFacetValue: i
}) {
  let [l, v] = useState("");
  let E = _$$F(l, CreatorResourceType.CREATOR);
  let x = nv(E.data, TeamSpaceType.USERS);
  let S = useAtomWithSubscription(J);
  let w = useAtomWithSubscription(jM);
  let C = useAtomWithSubscription(P_);
  let T = useAtomWithSubscription(selectedItemAtom);
  let k = useAtomWithSubscription(wf);
  let [R, N] = useAtomValueAndSetter(a3);
  let P = _$$n();
  let O = _$$k();
  let D = _$$P();
  useEffect(() => {
    "loaded" === E.status && l.length > 0 && R !== k && (N(k), D(l, CreatorResourceType.CREATOR, InputType.DROPDOWN));
  }, [E]);
  let L = useCallback((e, t, n) => {
    if (!t || void 0 === n) {
      i(e, null, buildQueryObject(w, null, C, T ?? void 0));
      O({}, PillType.CLEAR_ALL, InputType.DROPDOWN);
      return;
    }
    let r = S ? n ? S.value.filter(e => !deepEqual(e, t)) : S.value.concat(t) : [t];
    let s = createCreatorFacet(r);
    let o = buildQueryObject(w, s, C, T ?? void 0);
    i(e, s, o);
    n ? O({
      creatorId: t.id
    }, PillType.SELECTION, InputType.DROPDOWN) : P({
      creatorId: t.id
    }, l);
  }, [S, w, C, T, i, P, O, l]);
  let F = S?.value ?? [];
  let M = F.length >= MAX_TRUNCATE_LENGTH;
  return jsxs(Fragment, {
    children: [M ? jsx("div", {
      className: Ze,
      children: renderI18nText("search.facets.filter_limit_reached")
    }) : jsx(HY, {
      baseId: `${e}-search-bar`,
      basePath: [...t, 0],
      placeholder: getI18nString("search.facets.find_someone"),
      query: l,
      setQuery: v
    }), isLongText(l) ? jsx("div", {
      className: p$,
      children: renderI18nText("search.error.max_query_length_exceeded")
    }) : jsxs(Fragment, {
      children: ["loading" === E.status && jsx(_$$e, {
        numRows: 5,
        showSideElement: !0
      }), "errors" === E.status && jsx("div", {
        className: p$,
        children: renderI18nText("search.empty_state.no_results_matching", {
          searchQuery: l
        })
      }), "loaded" === E.status && jsx(I, {
        baseId: `${e}-results`,
        basePath: [...t, 1],
        appliedCreators: F,
        onClick: L,
        query: l,
        results: x,
        filterLimitReached: M
      })]
    })]
  });
}
function I({
  baseId: e,
  basePath: t,
  appliedCreators: i,
  onClick: s,
  query: d,
  results: c,
  filterLimitReached: u
}) {
  let p = useMemo(() => new Set(i.map(e => e.id)), [i]);
  let m = useMemo(() => {
    if (u) return i;
    if ("" === d) {
      let e = [...i].slice(0, 5);
      if (5 === e.length) return e;
      for (let t of c) if (includesEqual(e, t) || e.push(t), 5 === e.length) break;
      return e;
    }
    return c;
  }, [u, i, d, c]);
  return 0 === m.length ? jsx("div", {
    className: p$,
    children: d ? renderI18nText("search.empty_state.no_results_matching", {
      searchQuery: d
    }) : renderI18nText("search.empty_state.no_results_no_query")
  }) : jsxs(Fragment, {
    children: [m.map((i, r) => {
      let a = `${e}-creator-option-${r}`;
      let o = p.has(i.id);
      return jsx(b3, {
        icon: jsx(H8, {
          user: i,
          size: Pf.MEDIUM
        }),
        id: a,
        isChecked: o,
        onClickCallback: e => {
          s(e, i, o);
        },
        path: [...t, 1, r],
        query: d,
        text: i.name || i.handle
      }, a);
    }), i.length > 0 && jsx(kI, {
      baseId: e,
      basePath: t,
      onClick: s
    })]
  });
}
export const q = $$v0;