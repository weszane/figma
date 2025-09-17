import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wn } from "../figma_app/88484";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { renderI18nText } from "../905/303541";
import { S as _$$S } from "../905/417453";
import { Q0, kq } from "../905/994947";
import { FacetedSearchPreviewRecentFilesView } from "../figma_app/43951";
import { mapRecentFilesAndRepos } from "../figma_app/349248";
import { PublicModelType, DEFAULT_PAGE_SIZE, MU } from "../figma_app/162807";
import { e as _$$e } from "../905/404280";
import { H } from "../905/315077";
import { Xr, useAtomWithSubscription } from "../figma_app/27355";
import { customHistory } from "../905/612521";
import { SvgComponent } from "../905/714743";
import { In } from "../905/672640";
import { Q8, sC, R9 } from "../905/61477";
import { XW, Yb } from "../905/182534";
import { hideModalHandler } from "../905/156213";
import { Dy, uL } from "../905/977218";
import { getSelectedView } from "../figma_app/386952";
import { vj } from "../905/574958";
import { cr } from "../905/703676";
import { A as _$$A } from "../1617/512130";
function T({
  id: e,
  path: t,
  position: i,
  recentSearch: s
}) {
  let o = useDispatch();
  let l = getSelectedView();
  let c = Xr(Q8);
  let u = useAtomWithSubscription(sC);
  let p = useAtomWithSubscription(R9);
  let h = useSelector(e => e.currentUserOrgId || null);
  let g = useSelector(e => e.search.sessionId);
  let T = _$$S(h)?.searches;
  let k = useCallback(e => {
    if (e.preventDefault(), e.metaKey) {
      let e = XW(s.query, h, p ?? PublicModelType.FILES);
      customHistory.redirect(e, "_blank");
    } else {
      o(Dy({
        entryPoint: "file_browser"
      }));
      c(s.query);
      Yb(o, l, s.query, u, p ?? PublicModelType.FILES, !0);
      o(hideModalHandler());
    }
  }, [o, l, s.query, h, p, u, c]);
  let R = useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
    o(uL({
      orgId: h,
      searchQuery: s.query,
      previousSearches: T
    }));
  }, [h, o, T, s.query]);
  let N = useCallback(() => {
    vj.Recents.trackRecentsClick(g, i, null, vj.RecentType.SEARCH);
  }, [i, g]);
  let P = jsx("button", {
    className: "faceted_search_preview_recent_row--clearButton--6Pwen raw_components--iconButtonEnabled--WmVk5 raw_components--_iconButton---ybo6",
    onClick: R,
    tabIndex: 0,
    children: jsx(In, {
      icon: "x-16"
    })
  });
  return jsx(cr, {
    href: "",
    icon: jsx(SvgComponent, {
      className: "faceted_search_preview_recent_row--icon--6eUrW",
      svg: _$$A
    }),
    id: e,
    path: t,
    text: s.query,
    onClickCallback: k,
    sideElement: P,
    trackInteraction: N
  });
}
export function $$k0({
  id: e,
  path: t
}) {
  let i = useSelector(e => e.currentUserOrgId);
  let f = _$$S(i);
  let _ = f.searches.slice(0, DEFAULT_PAGE_SIZE);
  let A = MU - _.length;
  let y = function () {
    let [e] = setupResourceAtomHandler(FacetedSearchPreviewRecentFilesView({}));
    let t = useMemo(() => e.transform(e => mapRecentFilesAndRepos(e.currentUser.recentFiles)), [e]);
    useEffect(() => {
      "loaded" === t.status && Wn(t.data);
    }, [t]);
    return useMemo(() => t.transform(e => e.recent_files), [t]);
  }();
  let b = y?.data?.slice(0, A) || [];
  return "loaded" === y.status && "loaded" === f.status ? jsxs(Fragment, {
    children: [_.length + b.length > 0 && jsx("div", {
      className: "faceted_search_preview_recents--header--JjcIl",
      children: renderI18nText("search.preview_section.recent")
    }), _.map((i, r) => {
      let a = `${e}-recent-search-${r}`;
      return jsx(T, {
        id: a,
        path: [...t, 0, r],
        position: r,
        recentSearch: i
      }, a);
    }), jsx(Q0, {
      isDropdown: !0,
      children: jsx(kq.Consumer, {
        children: i => jsx(Fragment, {
          children: b.map((r, a) => {
            let s = `${e}-recent-file-${a}`;
            let o = _.length + a;
            return jsx(H, {
              fileResult: r,
              id: s,
              path: [...t, 1, a],
              position: o,
              onContextMenuCallback: i.onContextMenuClick
            }, s);
          })
        })
      })
    })]
  }) : jsx(_$$e, {
    numRows: MU
  });
}
export const n = $$k0;