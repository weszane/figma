import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useMemo } from "react";
import { useSelector } from "react-redux";
import { hasDesktopAPI } from "../figma_app/876459";
import { customHistory } from "../905/612521";
import { usePrefersMediaQuery } from "../figma_app/469468";
import { AG } from "../figma_app/999312";
import { fk } from "../5430/480225";
import { T as _$$T } from "../5430/373013";
import m from "classnames";
import { BrowserInfo } from "../figma_app/778880";
import { renderI18nText } from "../905/303541";
import { ResourceTypes } from "../905/178090";
import { Yw } from "../figma_app/795938";
import { A as _$$A } from "../5430/1650";
import { M as _$$M } from "../5430/704379";
import { A as _$$A2 } from "../5430/728674";
import { v as _$$v } from "../5430/992484";
import { GS } from "../5430/342380";
import { E4, Dz } from "../5430/62487";
import { PricingOptions } from "../905/237873";
import { gM } from "../5430/823351";
import { useSafeRouteStateInstance } from "../figma_app/321395";
import { getAllTimeSortOption } from "../figma_app/324237";
import { BrowseUtils } from "../905/942203";
import { n6 } from "../figma_app/600006";
import { selectEditorResource, syncEditorResourceWithHistory } from "../figma_app/773663";
import { z } from "../5430/143080";
import { Z_ } from "../figma_app/350203";
import { TrackingProvider } from "../figma_app/831799";
import { e0 } from "../905/696396";
import { T as _$$T2 } from "../5430/126619";
import { ial, cVr, N6X } from "../figma_app/27776";
var _ = m;
let f = (e, t) => {
  switch (e) {
    case ResourceTypes.SearchResourceTypes.MIXED:
      return renderI18nText("community.landing_page.query_header__mixed", {
        query: t
      });
    case ResourceTypes.SearchResourceTypes.PLUGINS:
      return renderI18nText("community.landing_page.query_header__plugins", {
        query: t
      });
    case ResourceTypes.SearchResourceTypes.FILES:
      return renderI18nText("community.landing_page.query_header__files", {
        query: t
      });
    case ResourceTypes.SearchResourceTypes.WIDGETS:
      return renderI18nText("community.landing_page.query_header__widgets", {
        query: t
      });
    case ResourceTypes.SearchResourceTypes.PROFILES:
      return renderI18nText("community.landing_page.query_header__profiles", {
        query: t
      });
    default:
      return renderI18nText("community.landing_page.query_header", {
        query: t
      });
  }
};
function y({
  query: e,
  resourceType: t,
  error: r
}) {
  return jsx("div", {
    className: _()({
      "search_page_header--searchHeaderContainer---Qlx3 text--fontPos16--oMC-G text--_fontBase--QdLsd": !0,
      "search_page_header--mobileSearchHeaderContainer--C0vFW": BrowserInfo.mobile
    }),
    children: jsx("h1", {
      className: "search_page_header--searchHeaderInnerWrapper--wbW6U",
      children: r ? renderI18nText("community.error.could_not_complete_search", {
        error: jsx("strong", {
          children: r
        })
      }) : f(t, jsx("strong", {
        children: e
      }))
    })
  });
}
function v({
  profiles: e
}) {
  let t = useSelector(e => e.authedActiveCommunityProfile);
  return jsx("div", {
    className: "search_profile_list--profilesList--unQSY",
    children: e.map((e, r) => jsx(Yw, {
      index: r,
      resource: e,
      authedActiveCommunityProfile: t
    }, `profileRow-${e.model.id}`))
  });
}
let H = e => {
  let {
    editorType,
    resourceType
  } = selectEditorResource(e.search.editor_type, e.search.resource_type);
  return {
    query: e.search.query ?? "",
    editor_type: editorType,
    price: e.search.price ?? PricingOptions.Price.ALL,
    sort_by: e.search.sort_by ?? getAllTimeSortOption(),
    creators: e.search.creators ?? BrowseUtils.Browse.ALL,
    resource_type: resourceType
  };
};
export function $$U1({
  searchParams: e,
  trackResourceImpression: t,
  resultsByType: r,
  isLoadingThisView: i,
  emptyStateActions: o,
  numTilesPerRow: a = 5
}) {
  let u = AG();
  let m = !u && useSelector(e => !!(e.authedActiveCommunityProfile?.team_id || e.authedActiveCommunityProfile?.org_id));
  let _ = usePrefersMediaQuery(`(max-width: ${ial})`);
  let p = usePrefersMediaQuery(`(max-width: ${cVr})`);
  let h = 4;
  _ && (h = 3);
  p && (h = 2);
  let f = r[e.resource_type] ?? E4();
  let y = "resources" in f ? f.resources : f;
  return i || 0 !== y.length ? e.resource_type === ResourceTypes.SearchResourceTypes.PLUGINS ? jsx(_$$M, {
    plugins: y,
    onIntersectionChange: (e, r) => {
      r && t(e);
    },
    isLoading: i,
    isOrgTeamBrowsing: m
  }) : e.resource_type === ResourceTypes.SearchResourceTypes.PROFILES ? jsx(v, {
    profiles: y
  }) : u ? jsx(_$$T2, {
    resources: y,
    isLoading: i,
    loadingTileCount: a * Z_
  }) : jsx(_$$A2, {
    resources: y,
    maxGridDim: {
      cols: h
    },
    onIntersectionChange: (e, r) => {
      r && t(e);
    },
    isLoading: i,
    skipResourceLimit: !0,
    mobileBreakpoint: "850px",
    mobileMaxGridDim: {
      cols: 1
    }
  }) : jsx(fk, {
    resourceType: e.resource_type,
    query: e.query,
    view: e,
    emptyStateActions: o
  });
}
export function $$V0() {
  return jsx(TrackingProvider, {
    name: e0.COMMUNITY_HUB_SEARCH,
    children: jsx(W, {})
  });
}
function W() {
  let e = usePrefersMediaQuery(`(max-width: ${N6X})`);
  let t = useSafeRouteStateInstance(n6);
  syncEditorResourceWithHistory(t);
  let r = H(t);
  useEffect(() => {
    0 === r.query.trim().length && customHistory.replace("/community");
  }, [r.query]);
  let {
    filterState,
    handleFilterUpdate
  } = _$$v(gM.SEARCH, {
    resourceType: r.resource_type,
    editorType: r.editor_type,
    price: r.price,
    creators: r.creators,
    sortBy: r.sort_by
  });
  let d = useRef(null);
  let m = useRef(null);
  let {
    trackResourceImpression,
    flushAndResetResourceImpressions
  } = GS({
    extraProperties: {
      sort: r.sort_by,
      resourceType: r.resource_type
    }
  });
  useEffect(() => {
    flushAndResetResourceImpressions();
  }, [r.resource_type, r.query, r.editor_type, r.price, r.creators, r.sort_by, flushAndResetResourceImpressions]);
  let {
    resultsByType,
    isLoading,
    isLoadingAdditionalResources
  } = Dz(useMemo(() => ({
    query: r.query,
    editor_type: r.editor_type,
    price: r.price,
    creators: r.creators,
    sort_by: r.sort_by
  }), [r.query, r.editor_type, r.price, r.creators, r.sort_by]));
  let v = () => {
    let e = (m.current?.getBoundingClientRect().top || 0) - (d.current ? d.current.getBoundingClientRect().top + d.current.getBoundingClientRect().height : 0);
    e < 0 && window.scrollTo({
      top: window.scrollY + e,
      behavior: "smooth"
    });
  };
  let j = f;
  (r.resource_type === ResourceTypes.SearchResourceTypes.FILES || r.resource_type === ResourceTypes.SearchResourceTypes.WIDGETS || r.resource_type === ResourceTypes.SearchResourceTypes.PLUGINS) && (j = isLoadingAdditionalResources);
  let w = jsx($$U1, {
    searchParams: r,
    trackResourceImpression,
    resultsByType,
    isLoadingThisView: j
  });
  return jsxs("div", {
    children: [jsx(y, {
      query: r.query,
      resourceType: r.resource_type
    }), jsxs("div", {
      className: "search_page--searchBody--SMGyq",
      children: [!e && jsx(z, {
        selectedResourceType: r.resource_type,
        resultsByType
      }), jsxs("div", {
        className: "search_page--searchResources--GIbNR",
        children: [jsx(_$$T, {
          containerRef: d,
          filterState,
          onUpdate: e => {
            let r = handleFilterUpdate(e);
            let s = t.copyWith({}, {
              resource_type: r.resourceType,
              editor_type: r.editorType,
              price: r.price,
              creators: r.creators && BrowseUtils.isSearchType(r.creators) ? r.creators : BrowseUtils.ALL,
              sort_by: r.sortBy
            });
            customHistory.replace(s.href);
            v();
          },
          context: gM.SEARCH
        }), jsx("div", {
          ref: m,
          className: "search_page--contentContainer--sQFpL",
          children: w
        }), !hasDesktopAPI() && jsx("div", {
          className: "search_page--footerContainer--QV2xJ",
          children: jsx(_$$A, {})
        })]
      })]
    })]
  });
}
export const g = $$V0;
export const G = $$U1;