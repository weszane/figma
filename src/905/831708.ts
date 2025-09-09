import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useMemo, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { c2 } from "../905/382883";
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import { B } from "../905/714743";
import { n as _$$n } from "../figma_app/3731";
import { getI18nString, renderI18nText } from "../905/303541";
import { nl, Pf } from "../905/590952";
import { q$, P_, J, jM, wf, a3 } from "../905/124270";
import { og, Bu, nX, hp, GX, wG, dd } from "../905/171315";
import { e as _$$e } from "../905/404280";
import { n as _$$n2 } from "../905/624711";
import { k as _$$k } from "../905/252342";
import { P as _$$P } from "../905/16832";
import { A as _$$A } from "../905/421315";
import { F as _$$F } from "../905/801537";
import { R9 } from "../905/61477";
import { nv } from "../905/182534";
import { HI } from "../905/977218";
import { getUserId } from "../905/372672";
import { WY, qy, dC, uR, jD } from "../figma_app/162807";
import { HY, kI, b3 } from "../905/779036";
import { Ze, p$, Kk, R_ } from "../905/954985";
import { A as _$$A2 } from "../1617/229828";
import { A as _$$A3 } from "../1617/110063";
import { A as _$$A4 } from "../1617/442539";
export function $$R0({
  id: e,
  path: t,
  setFacetValue: i
}) {
  let [s, l] = useState("");
  let d = _$$F(s, WY.SPACE);
  let u = useDispatch();
  let g = useAtomWithSubscription(q$);
  let E = useMemo(() => {
    let {
      cappedFolders,
      cappedTeams,
      cappedOrgs
    } = function (e, t, i) {
      let n = [];
      let r = [];
      let a = [];
      let s = 0;
      let o = 0;
      let l = [e.length, t.length, i.length];
      for (; s < 9 && !l.every(e => e <= o);) {
        l[0] > o && (n.push(e[o]), s++);
        l[1] > o && s < 9 && (r.push(t[o]), s++);
        l[2] > o && s < 9 && (a.push(i[o]), s++);
        o++;
      }
      return {
        cappedFolders: n,
        cappedTeams: r,
        cappedOrgs: a
      };
    }(-1 === g.indexOf(qy.FOLDER) ? [] : nv(d.data, dC.PROJECTS), -1 === g.indexOf(qy.TEAM) ? [] : nv(d.data, dC.TEAMS), -1 === g.indexOf(qy.ORG) ? [] : nv(d.data, dC.ORGS));
    return {
      [qy.FOLDER]: cappedFolders,
      [qy.TEAM]: cappedTeams,
      [qy.ORG]: cappedOrgs
    };
  }, [g, d.data]);
  let C = useAtomWithSubscription(P_);
  let T = useAtomWithSubscription(J);
  let k = useAtomWithSubscription(jM);
  let R = useAtomWithSubscription(R9);
  let P = useAtomWithSubscription(wf);
  let [O, D] = useAtomValueAndSetter(a3);
  let L = _$$P();
  useEffect(() => {
    "loaded" === d.status && s.length > 0 && O !== P && (D(P), L(s, WY.SPACE, uR.DROPDOWN));
  }, [d]);
  let F = _$$k();
  let M = useCallback((e, t, n) => {
    let r = {
      ...(C ? C.value : og),
      [t]: n
    };
    let a = Bu(r);
    let s = nX(k, T, a, R ?? void 0);
    u(HI({}));
    i(e, a, s);
  }, [u, T, k, C, R, i]);
  let j = useCallback(e => {
    let t = nX(k, T, null, R ?? void 0);
    u(HI({}));
    i(e, null, t);
    F({}, jD.CLEAR_ALL, uR.DROPDOWN);
  }, [u, T, k, R, i, F]);
  let U = C?.value ?? og;
  let B = Object.values(qy).reduce(function (e, t) {
    return e + (U[t]?.length || 0);
  }, 0) >= hp;
  let {
    restrictOrgId,
    restrictTeamId
  } = _$$A();
  let z = restrictOrgId ? getI18nString("search.facets.filter_spaces_org") : restrictTeamId ? getI18nString("search.facets.filter_spaces_team") : getI18nString("search.facets.projects_teams_orgs");
  return jsxs(Fragment, {
    children: [B ? jsx("div", {
      className: Ze,
      children: renderI18nText("search.facets.filter_limit_reached")
    }) : jsx(HY, {
      baseId: `${e}-search-bar`,
      basePath: [...t, 0],
      placeholder: z,
      query: s,
      setQuery: l
    }), GX(s) ? jsx("div", {
      className: p$,
      children: renderI18nText("search.error.max_query_length_exceeded")
    }) : jsxs(Fragment, {
      children: ["loading" === d.status && jsx(_$$e, {
        numRows: 5,
        showSideElement: !0
      }), "errors" === d.status && jsx("div", {
        className: p$,
        children: renderI18nText("search.empty_state.no_results_matching", {
          searchQuery: s
        })
      }), "loaded" === d.status && jsx(N, {
        baseId: `${e}-results`,
        basePath: [...t, 1],
        appliedSpaces: U,
        onClick: M,
        onClickClearAll: j,
        query: s,
        results: E,
        filterLimitReached: B
      })]
    })]
  });
}
function N({
  appliedSpaces: e,
  baseId: t,
  basePath: i,
  onClick: r,
  onClickClearAll: a,
  query: s,
  results: o,
  filterLimitReached: p
}) {
  let h = getUserId();
  return wG(o) && wG(e) ? jsx("div", {
    className: p$,
    children: s ? renderI18nText("search.empty_state.no_results_matching", {
      searchQuery: s
    }) : renderI18nText("search.empty_state.no_results_no_query")
  }) : jsxs(Fragment, {
    children: [jsx(P, {
      appliedSpaces: e[qy.FOLDER],
      baseId: `${t}-project`,
      basePath: [...i, 0],
      defaultIcon: jsx(B, {
        className: Kk,
        svg: _$$A3
      }),
      filterLimitReached: p,
      heading: getI18nString("search.preview_section.projects_capitalized"),
      onClickCallback: r,
      query: s,
      results: o.folders,
      spaceFacetType: qy.FOLDER
    }), jsx(P, {
      appliedSpaces: e[qy.TEAM],
      baseId: `${t}-team`,
      basePath: [...i, 1],
      computeOverrideIcon: e => jsx(nl, {
        team: e,
        size: Pf.MEDIUM
      }),
      defaultIcon: jsx(B, {
        className: Kk,
        svg: _$$A2
      }),
      filterLimitReached: p,
      heading: getI18nString("search.preview_section.teams_capitalized"),
      onClickCallback: r,
      query: s,
      results: o.teams,
      spaceFacetType: qy.TEAM
    }), jsx(P, {
      appliedSpaces: e[qy.ORG],
      baseId: `${t}-org`,
      basePath: [...i, 2],
      computeOverrideIcon: e => jsx(_$$n, {
        userId: h || "",
        orgId: e.id
      }),
      defaultIcon: jsx(B, {
        className: Kk,
        svg: _$$A4
      }),
      filterLimitReached: p,
      heading: getI18nString("search.preview_section.orgs_capitalized"),
      onClickCallback: r,
      query: s,
      results: o.orgs,
      spaceFacetType: qy.ORG
    }), !!e && !wG(e) && jsx(kI, {
      baseId: t,
      basePath: [...i, 3],
      onClick: a
    })]
  });
}
function P({
  appliedSpaces: e,
  baseId: t,
  basePath: i,
  defaultIcon: a,
  heading: o,
  onClickCallback: l,
  computeOverrideIcon: d,
  query: c,
  results: u,
  spaceFacetType: p,
  filterLimitReached: h
}) {
  let _ = useMemo(() => new Set(e.map(e => e.id)), [e]);
  let A = _$$n2();
  let y = _$$k();
  let b = useCallback((t, i, n, r) => {
    l(t, i, n ? r ? e.filter(e => !c2(e, n)) : e.concat(n) : []);
    !r && n ? A(dd(i, n), c) : y(n ? dd(i, n) : {}, jD.SELECTION, uR.DROPDOWN);
  }, [e, l, A, c, y]);
  let v = useMemo(() => {
    if (h) return e;
    if ("" === c) {
      let t = [...e];
      u.forEach(e => {
        _.has(e.id) || t.push(e);
      });
      return t;
    }
    return u;
  }, [h, e, c, u, _]);
  return 0 === v.length ? null : jsxs(Fragment, {
    children: [jsx("div", {
      className: R_,
      children: o
    }), v.map((e, r) => {
      let s = `${t}-space-${r}`;
      let o = _.has(e.id);
      return jsx(b3, {
        icon: d?.(e) || a,
        id: s,
        isChecked: o,
        onClickCallback: t => {
          b(t, p, e, o);
        },
        path: [...i, 1, r],
        query: c,
        text: e.name
      }, s);
    })]
  });
}
export const i = $$R0;