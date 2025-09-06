import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "../vendor/514228";
import { N_ } from "../vendor/956898";
import { getFeatureFlags } from "../905/601108";
import l from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { renderI18nText, getI18nString } from "../905/303541";
import { MZ, pY, Pj, Dy, ky } from "../figma_app/925970";
import { e as _$$e } from "../905/579755";
import { $3 } from "../figma_app/487970";
import { AG } from "../figma_app/999312";
import { A6 } from "../905/350234";
import { W as _$$W } from "../5430/53744";
import { Jm } from "../figma_app/387599";
import { Lj } from "../figma_app/835219";
import { qD, _t, ZD } from "../figma_app/471982";
import { Mc, qd } from "../figma_app/640564";
import { PerfTimer } from "../905/609396";
import { F as _$$F } from "../905/302958";
import { $W } from "../905/144933";
import { e as _$$e2 } from "../figma_app/324237";
import { PF } from "../figma_app/930386";
import { zj, bT, AS } from "../5430/438185";
import { xn } from "../905/934145";
import { eK, w2 } from "../905/977218";
import { M5 } from "../figma_app/350203";
import { Ei } from "../905/574958";
import { V as _$$V } from "../905/480825";
import { I$ } from "../figma_app/940844";
var c = l;
let L = "community_search_duration";
let M = "search_dropdown--meta--a-aV4";
let O = "search_dropdown--pluginOrWidgetTilePreview--Rfef1";
let B = "search_dropdown--section--VJbkB";
let D = "search_dropdown--sectionTitle--x7FyO";
let F = "search_dropdown--title--eiIIy";
let H = "search_dropdown--authorRow--Uk00Y";
let U = "search_dropdown--authorRowText--vsAii";
let V = "search_dropdown--monetizationBadge--ogSCz";
let W = "search_dropdown--authorRowAvatar--jFZyx";
let $$G = "search_dropdown--resourceRowExtension--v4dY8 search_dropdown--resourceRow--P-Lig";
let $ = "search_dropdown--hover--stEGe";
function z({
  profiles: e,
  onResourceClick: t,
  onResourceHover: r,
  selectedIdx: i
}) {
  return e && 0 !== e.length ? jsxs("div", {
    className: B,
    children: [jsx("div", {
      className: D,
      children: renderI18nText("community.view_bar.creators")
    }), jsx(Q, {
      profiles: e.map(e => e.model),
      onResourceClick: t,
      onResourceHover: r,
      selectedIdx: i
    })]
  }) : null;
}
function Q({
  profiles: e,
  onResourceClick: t,
  onResourceHover: r,
  selectedIdx: i
}) {
  return jsx("div", {
    className: "search_dropdown--resourceRowProfiles--bz2ck",
    children: e.map((e, n) => jsx("div", {
      onMouseEnter: () => r(n),
      className: c()({
        [$]: i === n
      }),
      children: jsx(Z, {
        profile: e,
        onResourceClick: t
      })
    }, e.id))
  });
}
function Z({
  profile: e,
  onResourceClick: t
}) {
  return jsx("div", {
    className: "search_dropdown--profile--HRd2s",
    children: jsxs(N_, {
      to: new xn({
        profileHandle: e.profile_handle
      }).to,
      className: "search_dropdown--resourceRowProfile--HScpw",
      onClick: () => {
        document.activeElement.blur();
        t();
      },
      children: [jsx(_$$e, {
        adtlClassName: "search_dropdown--profileRowAvatar--TOSBT",
        entity: e,
        size: 40
      }), jsx("div", {
        className: "search_dropdown--profileRowName--oRTAf ellipsis--ellipsis--Tjyfa text--fontPos12--YsUAh text--_fontBase--QdLsd",
        children: e.name
      }), jsxs("div", {
        className: "search_dropdown--profileRowProfileHandle--DuEYR ellipsis--ellipsis--Tjyfa text--fontPos12--YsUAh text--_fontBase--QdLsd",
        children: ["@", e.profile_handle]
      })]
    })
  }, e.id);
}
function q({
  resources: e,
  onResourceClick: t,
  onResourceHover: r,
  selectedIdx: i
}) {
  let o = useSelector(e => "authedActiveCommunityProfile" in e ? e.authedActiveCommunityProfile : null);
  return e && 0 !== e.length ? jsxs("div", {
    className: B,
    children: [jsx("div", {
      className: D,
      children: renderI18nText("community.view_bar.widgets")
    }), e.slice(0, 4).map((e, n) => {
      let a = qD(e);
      return jsx("div", {
        onMouseEnter: () => r(n),
        className: c()({
          [$]: i === n
        }),
        children: jsxs(A6, {
          to: _t({
            resource: e
          }),
          className: $$G,
          onClick: () => {
            document.activeElement.blur();
            t();
          },
          children: [jsx(_$$V, {
            plugin: a,
            className: O,
            alt: a.name,
            onError: e => e.target.src = ZD
          }), jsxs("div", {
            className: M,
            children: [jsx("div", {
              className: F,
              children: a.name
            }), jsxs("div", {
              className: H,
              children: [e.community_publishers.accepted.map(e => jsx(_$$e, {
                entity: e,
                size: 16,
                adtlClassName: W
              }, e.id)), jsx("div", {
                className: U,
                children: Lj(e)
              })]
            })]
          }), jsx("div", {
            className: V,
            children: $3({
              resource: e,
              authedActiveCommunityProfile: o
            })
          })]
        })
      }, e.id);
    })]
  }) : null;
}
function Y({
  resources: e,
  onResourceClick: t,
  onResourceHover: r,
  selectedIdx: i
}) {
  let o = useSelector(e => "authedActiveCommunityProfile" in e ? e.authedActiveCommunityProfile : null);
  return e && 0 !== e.length ? jsxs("div", {
    className: B,
    children: [jsx("div", {
      className: D,
      children: renderI18nText("community.view_bar.plugins")
    }), e.slice(0, 4).map((e, n) => {
      let a = qD(e);
      return jsx("div", {
        onMouseEnter: () => r(n),
        className: c()({
          [$]: i === n
        }),
        children: jsxs(A6, {
          to: _t({
            resource: e
          }),
          className: $$G,
          onClick: () => {
            document.activeElement.blur();
            t();
          },
          children: [jsx("img", {
            src: a.redirect_icon_url,
            className: O,
            alt: a.name,
            onError: e => e.target.src = ZD
          }), jsxs("div", {
            className: M,
            children: [jsx("div", {
              className: F,
              children: a.name
            }), jsxs("div", {
              className: H,
              children: [e.community_publishers.accepted.map(e => jsx(_$$e, {
                entity: e,
                size: 16,
                adtlClassName: W
              }, e.id)), jsx("div", {
                className: U,
                children: Lj(e)
              })]
            })]
          }), jsx("div", {
            className: V,
            children: $3({
              resource: e,
              authedActiveCommunityProfile: o
            })
          })]
        })
      }, e.id);
    })]
  }) : null;
}
function X({
  resources: e,
  onResourceClick: t,
  onResourceHover: r,
  selectedIdx: i
}) {
  let o = useSelector(e => "authedActiveCommunityProfile" in e ? e.authedActiveCommunityProfile : null);
  if (!e || 0 === e.length) return null;
  let l = getFeatureFlags().cmty_thumbnail_16x9_ar;
  return jsxs("div", {
    className: B,
    children: [jsx("div", {
      className: D,
      children: renderI18nText("community.view_bar.files")
    }), e.slice(0, 4).map((e, n) => {
      let a = qD(e);
      return jsx("div", {
        onMouseEnter: () => r(n),
        className: c()({
          [$]: i === n
        }),
        children: jsxs(A6, {
          to: _t({
            resource: e
          }),
          className: "search_dropdown--resourceRow--P-Lig",
          onClick: () => {
            document.activeElement.blur();
            t();
          },
          children: [jsx("img", {
            src: e.thumbnail_url,
            className: l ? "search_dropdown--fileTilePreview16x9---1A4y" : "search_dropdown--fileTilePreview--uCbva",
            alt: a.name,
            onError: e => e.target.src = ZD
          }), jsxs("div", {
            className: M,
            children: [jsx("div", {
              className: F,
              children: a.name
            }), jsxs("div", {
              className: H,
              children: [e.community_publishers.accepted.map(e => jsx(_$$e, {
                entity: e,
                size: 16,
                adtlClassName: W
              }, e.id)), jsx("div", {
                className: U,
                children: Lj(e)
              })]
            })]
          }), jsx("div", {
            className: V,
            children: $3({
              resource: e,
              authedActiveCommunityProfile: o
            })
          })]
        })
      }, e.id);
    })]
  });
}
let J = function (e, t) {
  let r;
  return (...t) => new Promise(s => {
    clearTimeout(r);
    r = setTimeout(() => {
      s(e.apply(e, t));
    }, 250);
  });
}((e, t) => t(function (e) {
  return (t, r) => {
    let s = new PerfTimer(L, {});
    s.start();
    let i = r().search?.sessionId || "unattributed";
    let n = MZ();
    return Promise.all([function (e, t, r) {
      let s = {
        session_id: e,
        query_id: t,
        resource_type: r.resourceType,
        query: r.query,
        sort_by: r.sort_by
      };
      let {
        limit,
        isPreview
      } = r;
      limit && !isNaN(limit) && (s.max_num_results = limit);
      isPreview && (s.limit_associations = !0);
      return $W.getCommunityLegacyResources(s);
    }(i, n, e), function (e, t, r) {
      let {
        profileLimit
      } = r;
      let i = {
        query: r.query,
        sessionId: e,
        queryId: t,
        maxNumResults: profileLimit || 50
      };
      return $W.getHubProfiles(i);
    }(i, n, e)]).then(r => {
      "unattributed" !== i && t(pY());
      let n = s.stop();
      trackEventAnalytics(L, {
        elapsedMs: n,
        resourceResultCount: r[0].data.meta.results.length,
        profileResultCount: r[1].data.meta.results.length,
        query: e.query,
        isPreview: !!e.isPreview
      }, {
        forwardToDatadog: !0
      });
      return r;
    }).catch(e => (t(_$$F.enqueue({
      message: e.message || getI18nString("community.error.search_request_failed"),
      error: !0,
      type: "community-search-error",
      timeoutOverride: 2e3
    })), Promise.reject(e)));
  };
}({
  query: e,
  sort_by: _$$e2.Search.RELEVANCY,
  resourceType: "mixed",
  limit: 12,
  isPreview: !0,
  profileLimit: 3
})), 0);
export function $$K0(e) {
  let {
    query,
    context,
    width,
    clearSearchInput
  } = e;
  let {
    resources,
    setResources,
    selectedIdx,
    setSelectedIdx
  } = _$$W(context);
  let v = useDispatch();
  let j = Jm(!0);
  let w = AG();
  let C = useCallback(() => {
    v(Pj({}));
    trackEventAnalytics("search_show_all_clicked", {
      query,
      scope: "community",
      entryPoint: w ? "resource_hub" : "community",
      searchSessionId: j
    });
  }, [v, query, j, w]);
  useEffect(() => {
    if (!query) return;
    j || v(Dy({
      entryPoint: w ? "resource_hub" : "community"
    }));
    let e = Ei();
    v(eK({
      queryId: e
    }));
    v(w2({
      sessionId: j || "",
      query,
      queryId: e
    }));
    J(query, v).then(([s, i]) => {
      let n = s.data.meta.results.map(e => e.model);
      let o = n.filter(e => zj(e));
      let a = n.filter(e => bT(e)).map(I$);
      let l = n.filter(e => AS(e)).map(I$);
      setResources({
        files: o,
        plugins: a,
        widgets: l,
        creators: i.data.meta.results.slice(0, 3)
      });
      setSelectedIdx({
        idx: -1
      });
      let c = context === PF.LANDING ? "searchPreviewLanding" : "searchPreview";
      trackEventAnalytics(M5.SEARCH_QUERY_RESULT, {
        query,
        mixed: n.length,
        entry_point: "community",
        context: c,
        search_session_id: j,
        query_id: e,
        files: o.length,
        plugins: a.length,
        widgets: l.length,
        profiles: i.data.meta.results.length
      });
    }).catch(() => {});
  }, [query, v, j, context, setResources, setSelectedIdx, w]);
  let L = useCallback(e => {
    trackEventAnalytics("search_result_clicked", {
      query,
      resourceType: e,
      scope: "community",
      is_preview: !0,
      entry_point: "community",
      searchSessionId: j
    });
    clearSearchInput();
    setResources({});
    v(ky());
  }, [query, v, j, setResources, clearSearchInput]);
  let T = useCallback((e, t) => {
    resources[t] && !((resources[t] ?? []).length < e) && setSelectedIdx({
      idx: e,
      type: t
    });
  }, [resources, setSelectedIdx]);
  if (!query) return null;
  let E = resources.files?.length || resources.widgets?.length || resources.plugins?.length || resources.creators?.length;
  let A = Mc({
    ...qd,
    query
  });
  return jsxs("div", {
    className: c()("search_dropdown--searchDropdown--HqMrn", {
      "search_dropdown--searchDropdownLanding--HJ002": context === PF.LANDING,
      "search_dropdown--categoryNavDropdownResponsiveWidth--HzoIl": "small-responsive" === width
    }),
    style: "small-responsive" !== width ? {
      width: `${width}px`
    } : void 0,
    "data-testid": "homepage-search-dropdown",
    children: [jsx(X, {
      resources: resources.files,
      onResourceClick: () => L("files"),
      onResourceHover: e => T(e, "files"),
      selectedIdx: selectedIdx?.type === "files" ? selectedIdx?.idx : null
    }), jsx(Y, {
      resources: resources.plugins,
      onResourceClick: () => L("plugins"),
      onResourceHover: e => T(e, "plugins"),
      selectedIdx: selectedIdx?.type === "plugins" ? selectedIdx?.idx : null
    }), jsx(q, {
      resources: resources.widgets,
      onResourceClick: () => L("widgets"),
      onResourceHover: e => T(e, "widgets"),
      selectedIdx: selectedIdx?.type === "widgets" ? selectedIdx?.idx : null
    }), jsx(z, {
      profiles: resources.creators,
      onResourceClick: () => L("profiles"),
      onResourceHover: e => T(e, "creators"),
      selectedIdx: selectedIdx?.type === "creators" ? selectedIdx?.idx : null
    }), E ? jsx("div", {
      className: "search_dropdown--searchAllLink--VCaxM text--fontPos12--YsUAh text--_fontBase--QdLsd",
      children: jsx(A6, {
        to: A,
        onClick: C,
        children: renderI18nText("community.search.show_all_search_results")
      })
    }) : null]
  });
}
export const G = $$K0;