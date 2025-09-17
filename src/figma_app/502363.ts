import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Component, useMemo, useCallback, useRef, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { deepEqual } from "../905/382883";
import { BrowserInfo } from "../figma_app/778880";
import { r } from "../905/398386";
import { HI, ej as _$$ej, w2, $P, qv, PP, Dy, PI, _z, ky, Ns } from "../905/977218";
import { VP, GH, aF, Fl } from "../905/18797";
import { PublicModelType, getModelTypeEmptyStateI18n, SearchTypeMode, InputType, SpaceAccessType } from "../figma_app/162807";
import { ViewMode, FileType } from "../figma_app/756995";
import { o as _$$o } from "../905/668706";
import { ButtonPrimitive } from "../905/632989";
import { useSubscription } from "../figma_app/288654";
import { x as _$$x } from "../905/211326";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { H as _$$H } from "../905/799228";
import { p as _$$p } from "../figma_app/837956";
import { D6 } from "../figma_app/863319";
import { SearchFilterWorkspaceView } from "../figma_app/43951";
import { vj } from "../905/574958";
import { Q0 } from "../905/994947";
import { Of } from "../905/378567";
import { Of as _$$Of } from "../905/869282";
import { nD, uB } from "../905/572991";
import { L as _$$L } from "../905/804347";
import { zQ, ZG } from "../905/376829";
import { hP, p_, Vg, Vz, g4, sb, UL, G2, xV, YF, p$, IC, jI, q6, Ki } from "../905/150269";
import { A as _$$A } from "../6828/505145";
import { A as _$$A2 } from "../6828/44395";
import { A as _$$A3 } from "../6828/625002";
import { A as _$$A4 } from "../6828/727585";
import { A as _$$A5 } from "../6828/559361";
import { N as _$$N } from "../905/438674";
import Y from "classnames";
import { h as _$$h } from "../905/207101";
import { h1 } from "../905/986103";
import { $E, w4 } from "../905/445814";
import { M3, dP } from "../figma_app/119475";
import { LazyInputForwardRef } from "../905/408237";
import { ne } from "../figma_app/563413";
import { XW } from "../905/182534";
import { gt, Ri, j3, Gb, ht } from "../figma_app/327577";
import { filePutAction } from "../figma_app/78808";
import { r as _$$r } from "../905/520829";
import { getDesignFileUrl } from "../905/612685";
import { uQ, eM as _$$eM, J1 } from "../figma_app/20203";
import { Fm, Cg, nS } from "../figma_app/476677";
import { A as _$$A6 } from "../1617/586892";
import { A as _$$A7 } from "../svg/821527";
import { h as _$$h2 } from "../905/994594";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription, useAtomValueAndSetter, Xr } from "../figma_app/27355";
import { parsePxNumber } from "../figma_app/783094";
import { hO } from "../figma_app/545293";
import { showModalHandler, hideModalHandler } from "../905/156213";
import { getSelectedView } from "../figma_app/386952";
import { z5, L8, q4 } from "../905/124270";
import { K as _$$K } from "../905/328468";
import { Y as _$$Y } from "../905/720957";
import { P as _$$P } from "../905/347284";
import { ky as _$$ky } from "../figma_app/925970";
import { registerModal } from "../905/102752";
import { utilityNoop } from "../figma_app/918700";
import { s as _$$s } from "../figma_app/576667";
import { n as _$$n } from "../905/914485";
import { j as _$$j } from "../905/294703";
import { a3, Vm } from "../905/703676";
import { L as _$$L3 } from "../905/740963";
import { A as _$$A8 } from "../905/484713";
import { Q as _$$Q, Q8 } from "../905/61477";
import { r as _$$r2 } from "../905/264954";
import { RAo, aIx } from "../figma_app/27776";
import { PP as _$$PP, xx, v$ } from "../905/981129";
import { ServiceCategories as _$$e } from "../905/165054";
import { reportError } from "../905/11";
import { UP } from "../figma_app/740025";
import { Q as _$$Q2 } from "../905/618914";
import { FOrganizationLevelType, FMemberRoleType } from "../figma_app/191312";
import { getPermissionsStateMemoized } from "../figma_app/642025";
import { getPlanFeaturesTeamAtomFamily, getPlanUserTeamAtomFamily } from "../905/276025";
import { useCurrentPublicPlan, isOrgOrEnterprisePlan, checkOrgUserPermission } from "../figma_app/465071";
import { g as _$$g } from "../905/210813";
import { l as _$$l } from "../figma_app/676249";
let F = {
  [PublicModelType.HUB_FILES]: _$$A2,
  [PublicModelType.PUBLIC_PLUGINS]: _$$A3,
  [PublicModelType.PRIVATE_PLUGINS]: null,
  [PublicModelType.PUBLIC_PROFILES]: _$$A,
  [PublicModelType.FILES]: null,
  [PublicModelType.PROJECTS]: null,
  [PublicModelType.TEAMS]: null,
  [PublicModelType.USERS]: null,
  [PublicModelType.PUBLIC_WIDGETS]: _$$A4,
  [PublicModelType.PRIVATE_WIDGETS]: null
};
let j = {
  [PublicModelType.PUBLIC_PLUGINS]: _$$Of,
  [PublicModelType.PRIVATE_PLUGINS]: Of,
  [PublicModelType.PUBLIC_PROFILES]: hP,
  [PublicModelType.PUBLIC_WIDGETS]: nD.listStyle,
  [PublicModelType.PRIVATE_WIDGETS]: uB.listStyle
};
class U extends Component {
  componentDidMount() {
    !this.props.isLoading && this.props.search.queryId !== this.props.search.lastAckedQueryId && this.props.search.parameters.query.length > 0 && (this.props.setSearchLastAckedQueryId(this.props.search.queryId), this.props.setLastLoadedQuery(this.props.search.sessionId, this.props.search.parameters.query, this.props.search.queryId), vj.Session.trackClientResult(this.props.search, this.props.selectedView));
  }
  componentDidUpdate() {
    !this.props.isLoading && this.props.search.queryId !== this.props.search.lastAckedQueryId && this.props.search.parameters.query.length > 0 && (this.props.setSearchLastAckedQueryId(this.props.search.queryId), this.props.setLastLoadedQuery(this.props.search.sessionId, this.props.search.parameters.query, this.props.search.queryId), vj.Session.trackClientResult(this.props.search, this.props.selectedView));
  }
  renderContent() {
    let e;
    if (this.props.viewMode === ViewMode.LIST) e = j[this.props.searchModelType] ?? p_;else if (this.props.viewMode === ViewMode.GRID) switch (this.props.searchModelType) {
      case PublicModelType.FILES:
      case PublicModelType.TEAMS:
      case PublicModelType.PROJECTS:
      case PublicModelType.PUBLIC_PLUGINS:
      case PublicModelType.PRIVATE_PLUGINS:
      case PublicModelType.PUBLIC_WIDGETS:
      case PublicModelType.PRIVATE_WIDGETS:
      case PublicModelType.USERS:
        break;
      case PublicModelType.PUBLIC_PROFILES:
      case PublicModelType.HUB_FILES:
      case PublicModelType.PUBLIC_PROFILES:
        e = Vg;
        break;
      default:
        throwTypeError(this.props.searchModelType);
    } else throwTypeError(this.props.viewMode);
    e += this.props.isLoggedIn ? ` ${Vz}` : "";
    let t = this.props.didSucceed && 0 === this.props.searchResults.length;
    return jsx(_$$x, {
      isLoading: this.props.isLoading,
      className: g4,
      children: () => this.props.didFail ? jsx($$G6, {
        illustration: _$$A5,
        resourceTypeDisplayString: this.props.failureMessage || getI18nString("search.search_model_type.search_error"),
        searchModelType: this.props.searchModelType,
        query: null,
        activePlan: this.props.activePlan,
        activeWorkspaceFilter: this.props.activeWorkspaceFilter,
        onResetWorkspaceFilter: this.props.onResetWorkspaceFilter
      }) : t ? jsx($$G6, {
        illustration: F[this.props.searchModelType],
        resourceTypeDisplayString: getModelTypeEmptyStateI18n(this.props.searchModelType),
        searchModelType: this.props.searchModelType,
        query: this.props.query,
        activePlan: this.props.activePlan,
        activeWorkspaceFilter: this.props.activeWorkspaceFilter,
        onResetWorkspaceFilter: this.props.onResetWorkspaceFilter
      }) : jsx("div", {
        className: sb,
        children: jsx("div", {
          className: e,
          children: jsx(_$$L, {
            searchModelType: this.props.searchModelType,
            searchResults: this.props.searchResults,
            viewMode: this.props.viewMode,
            planFilter: this.props.planFilter
          })
        })
      })
    });
  }
  renderProjectContextMenu() {
    let e = _$$H(this.props.dropdownShown);
    return D6(this.props.currentOrgId) && e && jsx(_$$p, {
      folder: e,
      useLGPerms: !0
    });
  }
  render() {
    let e = this.props.searchModelType === PublicModelType.FILES ? void 0 : this.props.viewMode === ViewMode.LIST ? UL : G2;
    return jsxs(Q0, {
      isDropdown: !1,
      ...this.props,
      children: [jsx("div", {
        className: e,
        children: this.renderContent()
      }), this.props.searchModelType === PublicModelType.PROJECTS && this.renderProjectContextMenu()]
    });
  }
}
U.displayName = "SearchResultView";
let B = connect((e, t) => ({
  viewMode: zQ[t.searchModelType](e.search.parameters, e.viewBarViewModeOptionByView).viewMode,
  isLoggedIn: !!e.user,
  search: e.search,
  activeWorkspaceFilter: e.search.parameters.workspaceFilter,
  activePlan: e.search.parameters.planFilter,
  dropdownShown: e.dropdownShown,
  currentOrgId: e.currentUserOrgId,
  selectedView: e.selectedView
}), (e, t) => ({
  onResetWorkspaceFilter: () => {
    e(HI({}));
  },
  setSearchLastAckedQueryId: t => {
    e(_$$ej({
      lastAckedQueryId: t
    }));
  },
  setLastLoadedQuery: (t, r, n) => {
    e(w2({
      sessionId: t,
      query: r,
      queryId: n
    }));
  }
}))(U);
export function $$G6(e) {
  let {
    query,
    resourceTypeDisplayString
  } = e;
  let s = useSelector(e => e.currentUserOrgId);
  let o = "NON_ORG_TEAMS" !== e.activePlan && e.activePlan || s;
  let l = useSubscription(SearchFilterWorkspaceView, {
    orgId: o ?? null
  });
  let d = useMemo(() => "loaded" === l.status ? l.data?.org?.workspaces : [], [l]);
  let c = d?.find(t => null != e.activeWorkspaceFilter && t.id === e.activeWorkspaceFilter);
  let u = e.onResetWorkspaceFilter;
  let p = useMemo(() => jsxs(Fragment, {
    children: [resourceTypeDisplayString, null !== query ? jsxs(Fragment, {
      children: ["\xa0", jsx("span", {
        className: xV,
        children: query
      })]
    }) : null, null != c && jsxs(Fragment, {
      children: [" in the ", jsx("span", {
        className: xV,
        children: c.name
      }), " workspace", jsx("br", {}), jsx(ButtonPrimitive, {
        className: YF,
        onClick: () => {
          u && u();
        },
        "aria-label": getI18nString("search.empty_state.try_searching_whole_org"),
        children: renderI18nText("search.empty_state.try_searching_whole_org")
      })]
    })]
  }), [query, u, c, resourceTypeDisplayString]);
  return jsxs("div", {
    className: p$,
    children: [e.illustration && jsx(SvgComponent, {
      className: IC,
      svg: e.illustration,
      useOriginalSrcFills_DEPRECATED: !0
    }), jsx("div", {
      className: jI,
      children: jsx("span", {
        className: q6,
        children: p
      })
    }), e.cta ? jsx("div", {
      className: Ki,
      children: e.cta
    }) : null]
  });
}
$$G6.displayName = "SearchResultEmptyState";
class V extends Component {
  constructor(e) {
    super(e);
    this.onScroll = e => {
      this.updateIsTop(e.target);
    };
    this.updateIsTop = e => {
      this.props.setScrollTop(window.pageYOffset);
    };
    this.shouldScroll = () => 0 !== this.props.searchScrollTop;
    this.getLoadingKey = () => $P.loadingKeyForPayload({
      parameters: this.props.parameters
    });
    this.isLoading = () => VP(this.props.loadingState, this.getLoadingKey());
    this.didSucceed = () => GH(this.props.loadingState, this.getLoadingKey());
    this.didFail = () => aF(this.props.loadingState, this.getLoadingKey());
    this.getFailedReason = () => Fl(this.props.loadingStateFailureReasons, this.getLoadingKey());
    let t = this.getFilteredResults(e.searchResults ?? [], e.sortFilterConfig);
    this.state = {
      showContainer: !this.shouldScroll(),
      filteredFileResults: t
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, !0);
    this.shouldScroll() ? setTimeout(() => {
      window.scrollTo(0, this.props.searchScrollTop);
      this.setState({
        showContainer: !0
      });
    }, 0) : this.updateIsTop({});
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, !0);
  }
  componentDidUpdate(e) {
    if (this.props.searchModelType === PublicModelType.FILES) {
      let t = e.searchResults ?? H;
      let r = this.props.searchResults ?? H;
      let n = t.length !== r.length;
      if (!n) for (let e = 0; e < t.length; e++) deepEqual(t[e], r[e]) || (n = !0);
      if (n) {
        let e = this.getFilteredResults(r, this.props.sortFilterConfig);
        this.setState({
          ...this.state,
          filteredFileResults: e
        });
      }
    }
  }
  getFilteredResults(e, t) {
    return this.props.searchModelType === PublicModelType.FILES ? e.filter(e => {
      let r = e.model;
      switch (t.filters.fileType) {
        case FileType.ANY:
          return !0;
        case FileType.DESIGN:
          return "design" === r.editor_type;
        case FileType.FIGJAM:
          return "whiteboard" === r.editor_type;
        case FileType.SITES:
          return "sites" === r.editor_type;
        case FileType.SLIDES:
          return "slides" === r.editor_type;
        case FileType.COOPER:
          return "cooper" === r.editor_type;
        case FileType.MAKE:
          return "figmake" === r.editor_type;
        case FileType.PROTOTYPE:
          return !1;
        default:
          throwTypeError(t.filters.fileType);
      }
    }) : e;
  }
  render() {
    let e = this.props.searchResults ?? H;
    let t = this.getFilteredResults(e, this.props.sortFilterConfig);
    return jsx(r, {
      toolbar: BrowserInfo.mobile ? jsx(_$$o, {}) : void 0,
      viewbar: jsx(ZG, {
        sortControlsDisabled: 0 === e.length
      }),
      viewBarSticky: !0,
      content: jsx(B, {
        didFail: this.didFail(),
        didSucceed: this.didSucceed(),
        failureMessage: this.getFailedReason(),
        isLoading: this.isLoading(),
        onChangeSortState: this.props.onChangeSortState,
        planFilter: this.props.parameters.planFilter,
        query: this.props.completedQuery,
        searchModelType: this.props.searchModelType,
        searchResults: t,
        searchScope: this.props.parameters.searchScope,
        sortState: this.props.parameters.sortState
      })
    }, "unified-search");
  }
}
V.displayName = "SearchPageView";
let H = [];
let z = connect((e, t) => {
  let r = e.search.parameters;
  let n = e.search.responses[t.searchModelType];
  return {
    parameters: r,
    completedQuery: e.search.completedQueries[t.searchModelType],
    searchResults: n?.results || null,
    loadingState: e.loadingState,
    loadingStateFailureReasons: e.loadingStateFailureReasons,
    searchScrollTop: e.search.searchScrollTop,
    sortFilterConfig: e.tileSortFilterStateByView.search
  };
}, e => ({
  onChangeSortState: t => {
    e(qv({
      sortState: t
    }));
  },
  setScrollTop: t => {
    e(PP({
      top: t
    }));
  }
}))(V);
export function $$W5() {
  let e = useSelector(e => e.search.parameters);
  let t = e.facetFilters?.searchModelType ? e.facetFilters.searchModelType : PublicModelType.FILES;
  return jsx(z, {
    searchModelType: t
  });
}
var $ = Y;
let el = "search_bar--selectedSearchResult---VS1W";
let ed = "search_bar--searchResultsSeparator--gxrj-";
let ep = [uQ];
export function $$e_0() {
  let e = useDispatch();
  let t = useSelector(e => e.desktopNewTab.isSearchBarFocused);
  let r = useSelector(e => e.desktopNewTab.searchQuery);
  let s = useSelector(e => e.search.completedQueries[PublicModelType.FILES]);
  let o = useSelector(e => "" !== e.desktopNewTab.searchQuery && e.desktopNewTab.isSearchBarFocused);
  let {
    isLoading,
    searchResults
  } = function () {
    let e = useSelector(e => e.search);
    let t = useSelector(e => e.search.parameters);
    let r = $P.loadingKeyForPayload({
      parameters: t
    });
    let n = useSelector(e => e.loadingState[r]);
    let i = useSelector(e => e.desktopNewTab.searchQuery);
    let s = e.completedQueries[PublicModelType.FILES];
    return {
      isLoading: n === _$$r.LOADING || i !== s,
      searchResults: (e.responses.files?.results ?? []).slice(0, 5)
    };
  }();
  let u = useSelector(e => gt(e));
  let _ = useCallback(t => {
    "" === r && "" !== t && e(Dy({
      entryPoint: "desktop_new_tab"
    }));
    e(Ri(t));
    e(PI({
      query: t,
      searchModelType: PublicModelType.FILES,
      searchScope: u,
      debounce: !0,
      searchTypeBehavior: SearchTypeMode.ONE_TYPE,
      precacheInactiveTypes: !1
    }));
  }, [e, r, u]);
  let h = useCallback(() => {
    e(Ri(""));
    e(_z({}));
  }, [e]);
  let m = useCallback(t => {
    e(j3(!0));
    "" === r || t || e(Dy({
      entryPoint: "desktop_new_tab"
    }));
  }, [e, r]);
  let g = useCallback(() => {
    e(j3(!1));
    e(ky());
  }, [e]);
  let f = !isLoading && !!s && 0 !== searchResults.length;
  return jsxs("div", {
    className: "search_bar--root--GVGdd",
    children: [jsx(eh, {
      query: r,
      onChange: _,
      onSubmitInput: e => {
        e.preventDefault();
      },
      clearSearch: h,
      focusOnMount: !1,
      isFocused: t,
      isShowingLoadedSearchResults: f,
      onBlur: g,
      onFocus: m
    }), o && jsx(em, {
      results: searchResults,
      completedQuery: s,
      hasLoaded: !isLoading
    })]
  });
}
function eh(e) {
  let {
    clearSearch
  } = e;
  let r = useRef(null);
  let {
    searchInputRef,
    onMouseDown,
    onMouseUp,
    onClearSearchClick,
    onBlur,
    onFocus,
    onSearchKeyDown,
    onSearchChange
  } = ne(e, r);
  let _ = useCallback(() => {
    searchInputRef.current && searchInputRef.current.focus({
      preventScroll: !0
    });
  }, [searchInputRef]);
  _$$h(_);
  useEffect(() => {
    let e = () => {
      "visible" === document.visibilityState && (clearSearch(), _());
    };
    document.addEventListener("visibilitychange", e);
    return () => document.removeEventListener("visibilitychange", e);
  }, [clearSearch, _]);
  let {
    onFocus: _onFocus,
    onBlur: _onBlur
  } = _$$eM(ep, {
    enable: "" !== e.query && !e.isShowingLoadedSearchResults,
    lockUp: !0,
    lockDown: !0
  });
  let {
    setKeyboardNavigationElement
  } = M3({
    path: ep,
    onFocus: _onFocus,
    onBlur: _onBlur
  });
  return jsx("form", {
    onSubmit: e.onSubmitInput,
    children: jsxs("div", {
      className: "search_bar--searchContainer--4S7vX",
      onMouseDown: e => {
        onMouseDown(e);
        e.stopPropagation();
        e.target.matches("input") || e.preventDefault();
      },
      onMouseUp,
      children: [jsx(SvgComponent, {
        className: "search_bar--searchIcon--V3JlY",
        svg: _$$A6,
        ariaHidden: !0
      }), jsx(LazyInputForwardRef, {
        ref: e => {
          searchInputRef.current = e;
          setKeyboardNavigationElement(e);
        },
        className: "search_bar--searchInput--8MwKl text--fontPos11--2LvXf text--_fontBase--QdLsd",
        dataTestId: Fm,
        onBlur,
        onChange: onSearchChange,
        onFocus,
        onKeyDown: onSearchKeyDown,
        placeholder: getI18nString("desktop_new_tab.search.search_for_files_placeholder"),
        spellCheck: !1,
        value: e.query
      }), !!e.query && jsx(ButtonPrimitive, {
        className: "search_bar--xIconButton--sKqOL",
        onClick: onClearSearchClick,
        "aria-label": getI18nString("search.search_bar.clear"),
        children: jsx(SvgComponent, {
          className: "search_bar--xIcon--XpjH6",
          svg: _$$A7
        })
      })]
    })
  });
}
function em(e) {
  let t = useDispatch();
  let r = useSelector(e => e.search);
  let i = useSelector(e => e.selectedView);
  e.hasLoaded && e.completedQuery && r.queryId !== r.lastAckedQueryId && (t(_$$ej({
    lastAckedQueryId: r.queryId
  })), t(w2({
    sessionId: r.sessionId,
    query: r.parameters.query,
    queryId: r.queryId
  })), vj.Session.trackClientResult(r, i));
  return jsx("div", {
    className: "search_bar--searchResults--jURfV",
    onMouseDown: e => {
      e.preventDefault();
      e.stopPropagation();
    },
    children: e.hasLoaded && e.completedQuery ? 0 !== e.results.length ? jsxs(Fragment, {
      children: [e.results.map((e, t) => jsx(eg, {
        result: e,
        index: t
      }, e.model.key)), jsx("div", {
        className: ed
      }), jsx(ef, {
        numSearchResults: e.results.length
      })]
    }) : jsx("div", {
      className: "search_bar--emptySearchResults--4M2jX",
      children: jsx("p", {
        className: "search_bar--emptySearchResultsMessage--Rqfe9",
        children: renderI18nText("desktop_new_tab.search.no_file_results_matching", {
          searchQuery: jsx("span", {
            className: "search_bar--searchResultsHighlightedQuery--OCvgT",
            children: e.completedQuery
          })
        })
      })
    }) : jsxs("div", {
      children: [jsx(eE, {}), jsx(eE, {}), jsx(eE, {}), jsx(eE, {}), jsx(eE, {}), jsx("div", {
        className: ed
      }), jsx(ey, {})]
    })
  });
}
function eg(e) {
  let t = useDispatch();
  let r = useSelector(e => e.folders);
  let {
    result,
    index
  } = e;
  let l = result.model;
  let d = useCallback(e => {
    e.preventDefault();
    t(filePutAction({
      file: result.model
    }));
    t(Gb({
      result,
      index,
      clickAction: vj.Query.ClickAction.CLICK
    }));
  }, [result, index, t]);
  let c = useMemo(() => [J1, index], [index]);
  let {
    onFocus,
    onBlur
  } = _$$eM(c, {
    enable: 0 === index,
    lockUp: !0
  });
  let {
    keyboardNavigationItem,
    setKeyboardNavigationElement,
    isFauxFocused
  } = M3({
    path: c,
    onFauxFocus: onFocus,
    onFauxBlur: onBlur
  });
  useEffect(() => {
    keyboardNavigationItem && 0 === index && keyboardNavigationItem.fauxFocus();
  }, [keyboardNavigationItem, index]);
  let g = $E()(l);
  let f = l.folder_id && r[l.folder_id]?.name;
  let E = renderI18nText("desktop_new_tab.edited_at_time_stamp", {
    relativeTime: jsx(h1, {
      date: l.touched_at
    })
  });
  let b = f ? jsxs(Fragment, {
    children: [f, " \xb7 ", E]
  }) : E;
  return jsx(_$$N, {
    htmlAttributes: {
      "data-testid": Cg,
      "data-faux-focused": isFauxFocused
    },
    ref: setKeyboardNavigationElement,
    href: getDesignFileUrl(l),
    onClick: d,
    children: jsxs("div", {
      className: $()({
        "search_bar--searchResult--vnCz0": !0,
        [el]: isFauxFocused
      }),
      children: [jsx("div", {
        className: "search_bar--searchResultIcon--eCePE",
        children: jsx(w4, {
          size: 16,
          type: g
        })
      }), jsxs("div", {
        className: "search_bar--searchResultMetadata--hwvSq ellipsis--ellipsis--Tjyfa",
        children: [jsx("div", {
          className: "search_bar--searchResultTitle--QDOO9 ellipsis--ellipsis--Tjyfa",
          children: l.name
        }), jsx("div", {
          className: "search_bar--searchResultSubtitle--dkMAw text--fontPos11--2LvXf text--_fontBase--QdLsd",
          children: b
        })]
      })]
    })
  });
}
function ef(e) {
  let t = useDispatch();
  let r = useSelector(e => e.desktopNewTab.searchQuery);
  let s = useSelector(e => e.currentUserOrgId);
  let o = XW(r, s, PublicModelType.FILES);
  let l = useMemo(() => [J1, e.numSearchResults], [e.numSearchResults]);
  let {
    onFocus,
    onBlur
  } = _$$eM(l, {
    enable: !0,
    lockDown: !0
  });
  let {
    setKeyboardNavigationElement,
    isFauxFocused
  } = M3({
    path: l,
    onFauxFocus: onFocus,
    onFauxBlur: onBlur
  });
  return jsx(_$$N, {
    htmlAttributes: {
      "data-testid": nS,
      "data-faux-focused": isFauxFocused
    },
    ref: setKeyboardNavigationElement,
    href: o,
    onClick: () => t(ht()),
    children: jsx("div", {
      className: $()({
        "search_bar--seeAllItem--YACGs": !0,
        [el]: isFauxFocused
      }),
      children: jsx("p", {
        children: renderI18nText("search.preview_item.see_all_search_results")
      })
    })
  });
}
function eE() {
  return jsxs("div", {
    className: "search_bar--searchResultLoadingItem--9xeta",
    children: [jsx("div", {
      className: "search_bar--loadingIcon--p4RdZ search_bar--loadingBox--cDNZe"
    }), jsxs("div", {
      children: [jsx("div", {
        className: "search_bar--loadingTitle--nzWXp search_bar--loadingBox--cDNZe"
      }), jsx("div", {
        className: "search_bar--loadingSubtitle--ACNty search_bar--loadingBox--cDNZe"
      })]
    })]
  });
}
function ey() {
  return jsx("div", {
    className: "search_bar--seeAllLoadingItem--eQ9Y4",
    children: jsx("div", {
      className: "search_bar--loadingSeeAll--yOASP search_bar--loadingBox--cDNZe"
    })
  });
}
let ez = parsePxNumber(RAo);
let eW = parsePxNumber(aIx);
let eK = registerModal(function () {
  let e = useDispatch();
  let t = useSelector(e => e.modalShown);
  let r = useSelector(e => e.search.sessionId);
  let s = useAtomWithSubscription(_$$Q);
  let [o, l] = useAtomValueAndSetter(z5);
  let d = useAtomWithSubscription(L8);
  let c = _$$A8();
  useEffect(() => () => {
    r && vj.Session.searchModalExit(r);
  }, [r]);
  let u = useCallback(() => {
    e(_$$ky());
    o && (l(null), c(InputType.DROPDOWN, o));
  }, [e, l, o, c]);
  if (!t) return null;
  let _ = t.data.width ? {
    width: `${t.data.width - 2 * ez}px`
  } : void 0;
  return jsx(utilityNoop, {
    absolutePosition: {
      top: t.data.top,
      left: t.data.left
    },
    padding: `0 0 ${ez}px 0`,
    size: t.data.width ?? eW,
    tintedModalBackground: !1,
    useModalViewScroll: !1,
    maxHeight: "90vh",
    onHide: u,
    popStack: !0,
    "data-testid": "facetedSearchModal",
    children: jsx(dP, {
      children: jsxs(a3.Provider, {
        value: Vm.PREVIEW,
        children: [jsx("div", {
          className: _$$PP,
          style: _,
          children: jsx(_$$Y, {
            hideSearchPreview: t.data?.hideSearchPreview
          })
        }), jsxs(_$$P, {
          className: xx,
          children: [o && jsx("div", {
            className: v$,
            children: jsx(_$$s, {
              facetType: o,
              id: "facet-panel",
              path: [3]
            })
          }), jsx(_$$L3, {
            id: "suggestions",
            path: [4]
          }), t.data.hideSearchPreview ? null : s || d.length > 0 ? jsx(_$$j, {
            id: "search-results",
            path: [5]
          }) : jsx(_$$n, {
            id: "recents",
            path: [5]
          })]
        })]
      })
    })
  });
}, _$$r2);
let e1 = "faceted_search_entrypoint--inputWrapperRedesign--6cCJ0";
let e2 = parsePxNumber(RAo);
export function $$e53({
  hideSearchPreview: e,
  searchBarFullWidth: t
}) {
  let r = useDispatch();
  let s = useSelector(e => e.modalShown);
  let o = getSelectedView();
  let l = function () {
    let e = useDispatch();
    let t = UP();
    let r = useSelector(e => getPermissionsStateMemoized(e));
    let n = useCurrentPublicPlan("useUpdateSearchScope");
    let s = useRef(!1);
    r.currentTeamId && n.data?.key.type === FOrganizationLevelType.ORG && !s.current && (s.current = !0, reportError(_$$e.FRONTEND_PLATFORM, Error("Redux vs. plan-hook inconsistency"), {
      extra: {
        currentTeamId: r.currentTeamId,
        currentUserOrgId: r.currentUserOrgId,
        planType: n.data?.key.type,
        planParentId: n.data?.key.parentId,
        planTier: n.data?.tier
      }
    }));
    return useCallback(async () => {
      let r = await _$$Q2(getPlanFeaturesTeamAtomFamily(!0));
      let n = await _$$Q2(getPlanUserTeamAtomFamily(!0));
      let i = isOrgOrEnterprisePlan(r);
      let a = checkOrgUserPermission(n, FMemberRoleType.MEMBER);
      e(Ns({
        searchScope: t ? SpaceAccessType.COMMUNITY : i ? a ? SpaceAccessType.ORG : SpaceAccessType.ORG_GUEST : SpaceAccessType.PERSONAL
      }));
    }, [e, t]);
  }();
  let [d, u] = useAtomValueAndSetter(Q8);
  let _ = useAtomWithSubscription(L8);
  let h = useRef(null);
  let g = Xr(q4);
  let f = useCallback(() => {
    if (!h.current || s?.type === _$$r2) return;
    let n = h.current.getBoundingClientRect();
    r(showModalHandler({
      type: eK,
      data: {
        top: n.top - e2,
        left: n.left - e2,
        hideSearchPreview: e,
        width: t ? n.width + 2 * e2 : void 0
      },
      showModalsBeneath: !0
    }));
  }, [r, s, e, t]);
  _$$h(() => {
    l();
  });
  useEffect(() => {
    let e = e => {
      e.metaKey && "/" === e.key && !s && f();
    };
    let t = e => {
      "Tab" === e.key && s?.type === _$$r2 && r(hideModalHandler());
    };
    document.addEventListener("keydown", e);
    document.addEventListener("keydown", t);
    return () => {
      document.removeEventListener("keydown", e);
      document.removeEventListener("keydown", t);
    };
  }, [r, s, f]);
  let E = useAtomWithSubscription(hO.isFragmentSearchAtom);
  return (useEffect(() => {
    E || "search" === o.view || (r(_z({})), u(""), g());
  }, [r, o, u, g, E]), "search" === o.view) ? jsx("div", {
    className: $()("faceted_search_entrypoint--fullResultsSearchWrapper--UiZa5", {
      [e1]: getFeatureFlags().file_browser_sidebar_row_ui
    }),
    children: jsx(dP, {
      children: jsx(_$$Y, {})
    })
  }) : jsxs(ButtonPrimitive, {
    className: $()("faceted_search_entrypoint--inputWrapper--HwKpk search--searchContainerSidebarWithSelection--I54MO search--_expandingSearchBoxSidebarContainerBase--Mj7Ol search--searchContainerSidebar--JLCAb", {
      [e1]: getFeatureFlags().file_browser_sidebar_row_ui
    }),
    onClick: f,
    htmlAttributes: {
      onFocus: f,
      "data-testid": "facetedSearchEntrypoint"
    },
    ref: h,
    "aria-label": getI18nString("search.search_bar.placeholder"),
    children: [jsx(_$$h2, {}), jsxs("div", {
      className: "faceted_search_entrypoint--contentContainer--hu0Ox",
      children: [jsx(_$$K, {}), jsx(LazyInputForwardRef, {
        className: "faceted_search_entrypoint--input--UBJpm faceted_search_bar--input--V5ksZ",
        placeholder: 0 === _.length ? getI18nString("search.search_bar.placeholder") : "",
        value: d
      })]
    }), !e && jsx("div", {
      className: "faceted_search_entrypoint--leftFadeContainer--JUNVo faceted_search_bar--leftFadeContainer--r39DL faceted_search_bar--_fadeContainer--DiQLS"
    })]
  });
}
export { qD, lV, gr, ye, FU, KH, lI, mc } from "../figma_app/802781";
export { $c } from "../figma_app/626700";
export const zj = $$e_0;
export const l1 = _$$l;
export const Zn = $$e53;
export const bS = $$W5;
export const _3 = $$G6;
export const g2 = _$$g;