import l from 'classnames';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { jsx, jsxs } from 'react/jsx-runtime';
import { searchAPIHandler } from '../905/144933';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { A6 } from '../905/350234';
import { trackEventAnalytics } from '../905/449184';
import { PluginImage } from '../905/480825';
import { e as _$$e } from '../905/579755';
import { getFeatureFlags } from '../905/601108';
import { PerfTimer } from '../905/609396';
import { ProfileRouteState } from '../905/934145';
import { searchSetQueryIdAction, searchSetLastLoadedQueryAction } from '../905/977218';
import { W as _$$W } from '../5430/53744';
import { AS, bT, zj } from '../5430/438185';
import { SortOptions } from '../figma_app/324237';
import { HubEventType } from '../figma_app/350203';
import { getSearchSessionIdFromSelector } from '../figma_app/387599';
import { buildCommunityPathById, getCurrentVersion, TransparentGifDataUri } from '../figma_app/471982';
import { $3 } from '../figma_app/487970';
import { buildSearchUrl, defaultSearchOptions } from '../figma_app/640564';
import { Lj } from '../figma_app/835219';
import { generateSessionId, searchEndSession, searchIncrementQueryCount, searchSessionSeeMoreClick, searchStartSession } from '../figma_app/925970';
import { NavigationType } from '../figma_app/930386';
import { I$ } from '../figma_app/940844';
import { useIsResourceHub } from '../figma_app/999312';
let c = l;
let L = 'community_search_duration';
let M = 'search_dropdown--meta--a-aV4';
let O = 'search_dropdown--pluginOrWidgetTilePreview--Rfef1';
let B = 'search_dropdown--section--VJbkB';
let D = 'search_dropdown--sectionTitle--x7FyO';
let F = 'search_dropdown--title--eiIIy';
let H = 'search_dropdown--authorRow--Uk00Y';
let U = 'search_dropdown--authorRowText--vsAii';
let V = 'search_dropdown--monetizationBadge--ogSCz';
let W = 'search_dropdown--authorRowAvatar--jFZyx';
let $$G = 'search_dropdown--resourceRowExtension--v4dY8 search_dropdown--resourceRow--P-Lig';
let $ = 'search_dropdown--hover--stEGe';
function z({
  profiles: e,
  onResourceClick: t,
  onResourceHover: r,
  selectedIdx: i
}) {
  return e && e.length !== 0 ? jsxs('div', {
    className: B,
    children: [jsx('div', {
      className: D,
      children: renderI18nText('community.view_bar.creators')
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
  return jsx('div', {
    className: 'search_dropdown--resourceRowProfiles--bz2ck',
    children: e.map((e, n) => jsx('div', {
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
  return jsx('div', {
    className: 'search_dropdown--profile--HRd2s',
    children: jsxs(Link, {
      to: new ProfileRouteState({
        profileHandle: e.profile_handle
      }).to,
      className: 'search_dropdown--resourceRowProfile--HScpw',
      onClick: () => {
        document.activeElement.blur();
        t();
      },
      children: [jsx(_$$e, {
        adtlClassName: 'search_dropdown--profileRowAvatar--TOSBT',
        entity: e,
        size: 40
      }), jsx('div', {
        className: 'search_dropdown--profileRowName--oRTAf ellipsis--ellipsis--Tjyfa text--fontPos12--YsUAh text--_fontBase--QdLsd',
        children: e.name
      }), jsxs('div', {
        className: 'search_dropdown--profileRowProfileHandle--DuEYR ellipsis--ellipsis--Tjyfa text--fontPos12--YsUAh text--_fontBase--QdLsd',
        children: ['@', e.profile_handle]
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
  let o = useSelector(e => 'authedActiveCommunityProfile' in e ? e.authedActiveCommunityProfile : null);
  return e && e.length !== 0 ? jsxs('div', {
    className: B,
    children: [jsx('div', {
      className: D,
      children: renderI18nText('community.view_bar.widgets')
    }), e.slice(0, 4).map((e, n) => {
      let a = getCurrentVersion(e);
      return jsx('div', {
        onMouseEnter: () => r(n),
        className: c()({
          [$]: i === n
        }),
        children: jsxs(A6, {
          to: buildCommunityPathById({
            resource: e
          }),
          className: $$G,
          onClick: () => {
            document.activeElement.blur();
            t();
          },
          children: [jsx(PluginImage, {
            plugin: a,
            className: O,
            alt: a.name,
            onError: e => e.target.src = TransparentGifDataUri
          }), jsxs('div', {
            className: M,
            children: [jsx('div', {
              className: F,
              children: a.name
            }), jsxs('div', {
              className: H,
              children: [e.community_publishers.accepted.map(e => jsx(_$$e, {
                entity: e,
                size: 16,
                adtlClassName: W
              }, e.id)), jsx('div', {
                className: U,
                children: Lj(e)
              })]
            })]
          }), jsx('div', {
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
  let o = useSelector(e => 'authedActiveCommunityProfile' in e ? e.authedActiveCommunityProfile : null);
  return e && e.length !== 0 ? jsxs('div', {
    className: B,
    children: [jsx('div', {
      className: D,
      children: renderI18nText('community.view_bar.plugins')
    }), e.slice(0, 4).map((e, n) => {
      let a = getCurrentVersion(e);
      return jsx('div', {
        onMouseEnter: () => r(n),
        className: c()({
          [$]: i === n
        }),
        children: jsxs(A6, {
          to: buildCommunityPathById({
            resource: e
          }),
          className: $$G,
          onClick: () => {
            document.activeElement.blur();
            t();
          },
          children: [jsx('img', {
            src: a.redirect_icon_url,
            className: O,
            alt: a.name,
            onError: e => e.target.src = TransparentGifDataUri
          }), jsxs('div', {
            className: M,
            children: [jsx('div', {
              className: F,
              children: a.name
            }), jsxs('div', {
              className: H,
              children: [e.community_publishers.accepted.map(e => jsx(_$$e, {
                entity: e,
                size: 16,
                adtlClassName: W
              }, e.id)), jsx('div', {
                className: U,
                children: Lj(e)
              })]
            })]
          }), jsx('div', {
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
  let o = useSelector(e => 'authedActiveCommunityProfile' in e ? e.authedActiveCommunityProfile : null);
  if (!e || e.length === 0) return null;
  let l = getFeatureFlags().cmty_thumbnail_16x9_ar;
  return jsxs('div', {
    className: B,
    children: [jsx('div', {
      className: D,
      children: renderI18nText('community.view_bar.files')
    }), e.slice(0, 4).map((e, n) => {
      let a = getCurrentVersion(e);
      return jsx('div', {
        onMouseEnter: () => r(n),
        className: c()({
          [$]: i === n
        }),
        children: jsxs(A6, {
          to: buildCommunityPathById({
            resource: e
          }),
          className: 'search_dropdown--resourceRow--P-Lig',
          onClick: () => {
            document.activeElement.blur();
            t();
          },
          children: [jsx('img', {
            src: e.thumbnail_url,
            className: l ? 'search_dropdown--fileTilePreview16x9---1A4y' : 'search_dropdown--fileTilePreview--uCbva',
            alt: a.name,
            onError: e => e.target.src = TransparentGifDataUri
          }), jsxs('div', {
            className: M,
            children: [jsx('div', {
              className: F,
              children: a.name
            }), jsxs('div', {
              className: H,
              children: [e.community_publishers.accepted.map(e => jsx(_$$e, {
                entity: e,
                size: 16,
                adtlClassName: W
              }, e.id)), jsx('div', {
                className: U,
                children: Lj(e)
              })]
            })]
          }), jsx('div', {
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
    let i = r().search?.sessionId || 'unattributed';
    let n = generateSessionId();
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
      return searchAPIHandler.getCommunityLegacyResources(s);
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
      return searchAPIHandler.getHubProfiles(i);
    }(i, n, e)]).then(r => {
      i !== 'unattributed' && t(searchIncrementQueryCount());
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
    }).catch(e => (t(VisualBellActions.enqueue({
      message: e.message || getI18nString('community.error.search_request_failed'),
      error: !0,
      type: 'community-search-error',
      timeoutOverride: 2e3
    })), Promise.reject(e)));
  };
}({
  query: e,
  sort_by: SortOptions.Search.RELEVANCY,
  resourceType: 'mixed',
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
  let j = getSearchSessionIdFromSelector(!0);
  let w = useIsResourceHub();
  let C = useCallback(() => {
    v(searchSessionSeeMoreClick({}));
    trackEventAnalytics('search_show_all_clicked', {
      query,
      scope: 'community',
      entryPoint: w ? 'resource_hub' : 'community',
      searchSessionId: j
    });
  }, [v, query, j, w]);
  useEffect(() => {
    if (!query) return;
    j || v(searchStartSession({
      entryPoint: w ? 'resource_hub' : 'community'
    }));
    let e = generateSessionId();
    v(searchSetQueryIdAction({
      queryId: e
    }));
    v(searchSetLastLoadedQueryAction({
      sessionId: j || '',
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
      let c = context === NavigationType.LANDING ? 'searchPreviewLanding' : 'searchPreview';
      trackEventAnalytics(HubEventType.SEARCH_QUERY_RESULT, {
        query,
        mixed: n.length,
        entry_point: 'community',
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
    trackEventAnalytics('search_result_clicked', {
      query,
      resourceType: e,
      scope: 'community',
      is_preview: !0,
      entry_point: 'community',
      searchSessionId: j
    });
    clearSearchInput();
    setResources({});
    v(searchEndSession());
  }, [query, v, j, setResources, clearSearchInput]);
  let T = useCallback((e, t) => {
    resources[t] && !((resources[t] ?? []).length < e) && setSelectedIdx({
      idx: e,
      type: t
    });
  }, [resources, setSelectedIdx]);
  if (!query) return null;
  let E = resources.files?.length || resources.widgets?.length || resources.plugins?.length || resources.creators?.length;
  let A = buildSearchUrl({
    ...defaultSearchOptions,
    query
  });
  return jsxs('div', {
    'className': c()('search_dropdown--searchDropdown--HqMrn', {
      'search_dropdown--searchDropdownLanding--HJ002': context === NavigationType.LANDING,
      'search_dropdown--categoryNavDropdownResponsiveWidth--HzoIl': width === 'small-responsive'
    }),
    'style': width !== 'small-responsive' ? {
      width: `${width}px`
    } : void 0,
    'data-testid': 'homepage-search-dropdown',
    'children': [jsx(X, {
      resources: resources.files,
      onResourceClick: () => L('files'),
      onResourceHover: e => T(e, 'files'),
      selectedIdx: selectedIdx?.type === 'files' ? selectedIdx?.idx : null
    }), jsx(Y, {
      resources: resources.plugins,
      onResourceClick: () => L('plugins'),
      onResourceHover: e => T(e, 'plugins'),
      selectedIdx: selectedIdx?.type === 'plugins' ? selectedIdx?.idx : null
    }), jsx(q, {
      resources: resources.widgets,
      onResourceClick: () => L('widgets'),
      onResourceHover: e => T(e, 'widgets'),
      selectedIdx: selectedIdx?.type === 'widgets' ? selectedIdx?.idx : null
    }), jsx(z, {
      profiles: resources.creators,
      onResourceClick: () => L('profiles'),
      onResourceHover: e => T(e, 'creators'),
      selectedIdx: selectedIdx?.type === 'creators' ? selectedIdx?.idx : null
    }), E ? jsx('div', {
      className: 'search_dropdown--searchAllLink--VCaxM text--fontPos12--YsUAh text--_fontBase--QdLsd',
      children: jsx(A6, {
        to: A,
        onClick: C,
        children: renderI18nText('community.search.show_all_search_results')
      })
    }) : null]
  });
}
export const G = $$K0;