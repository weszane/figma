import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useEffect, createElement, useCallback, useMemo, useRef, useState, Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { ButtonPrimitive } from "../905/632989";
import { O as _$$O } from "../905/969533";
import { useAtomWithSubscription, useAtomValueAndSetter, Xr } from "../figma_app/27355";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { KJ, $T, Vx, V0 } from "../905/657710";
import { hO } from "../figma_app/545293";
import { xH, eB } from "../905/546357";
import { t } from "../905/150656";
import { useLatestRef } from "../figma_app/922077";
import { ModelTypeConfigs, getModelTypeHeaderI18n, FolderType, FileBrowserAction, TeamSortField, PublicModelType, CreatorResourceType, convertModelTypeToSearchModelType, SearchModelType } from "../figma_app/162807";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { clearWorkspaceFilterThunk, trackLicenseGroupFilterDropdownClickThunk, sortStateThunk, selectPlanFilterThunk, clearPlanFilterThunk, selectWorkspaceFilterThunk } from "../905/977218";
import { Um } from "../905/848862";
import { SortOrder } from "../figma_app/756995";
import { y2 } from "../905/776312";
import { P_, J as _$$J, l4 } from "../905/124270";
import { l as _$$l } from "../figma_app/676249";
import { getSupportedFacetTypes, createResourceFacet, buildQueryObject } from "../905/171315";
import { L as _$$L } from "../905/713563";
import { selectedItemAtom, searchScopeAtom, searchInputAtom } from "../905/61477";
import { trackEventAnalytics } from "../905/449184";
import { SvgComponent } from "../905/714743";
import { renderI18nText, getI18nString } from "../905/303541";
import { E as _$$E2 } from "../905/409917";
import { A as _$$A } from "../3850/824007";
import { G as _$$G } from "../figma_app/119843";
import U from "classnames";
import { useSubscription } from "../figma_app/288654";
import { SearchFilterWorkspaceView } from "../figma_app/43951";
import { p as _$$p } from "../figma_app/353099";
import { useSingleEffect } from "../905/791079";
import { e as _$$e } from "../905/621515";
import { UC } from "../figma_app/33126";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
import { N as _$$N } from "../figma_app/268271";
import { rq } from "../905/425180";
import { tBR } from "../figma_app/6204";
import { A as _$$A2 } from "../6828/154709";
import { xH as _$$xH, zQ as _$$zQ } from "../905/378567";
import { xH as _$$xH2, zQ as _$$zQ2 } from "../905/869282";
import { g as _$$g } from "../905/345380";
import { nD, uB } from "../905/572991";
import { debounce } from "../905/915765";
import { wv, MM } from "../figma_app/236327";
import { lV, R1 } from "../figma_app/802781";
import { selectCurrentUser } from "../905/372672";
import { Cf } from "../905/504727";
import { g as _$$g2 } from "../905/210813";
import { Kc } from "../figma_app/626700";
var n;
function A(e) {
  let {
    onChange
  } = e;
  let i = ModelTypeConfigs[e.searchScope].modelTypes;
  let [n,, s] = t.useTabs(i.reduce((e, t) => (e[t] = !0, e), {}), {
    defaultActive: e.searchModelType
  });
  useEffect(() => {
    onChange(s.activeTab);
  }, [s.activeTab, onChange]);
  let o = useLatestRef(e.searchModelType);
  useEffect(() => {
    o && o !== e.searchModelType && s.activeTab !== e.searchModelType && s.setActiveTab(e.searchModelType);
  }, [e.searchModelType, o, s]);
  return jsx("div", {
    className: "search_model_toggle--tabsRedesign--dUZl9",
    children: jsx(t.TabStrip, {
      manager: s,
      children: i.map(e => createElement(t.Tab, {
        ...n[e],
        key: e
      }, getModelTypeHeaderI18n(e)))
    })
  });
}
let O = "relevancy_dropdown_options--row--yLM2h";
let D = "relevancy_dropdown_options--heading--4-NnX relevancy_dropdown_options--row--yLM2h";
let L = "relevancy_dropdown_options--icon--ULRw8";
function M({
  checkedValue: e,
  currentDirection: t,
  dirValuesToDisplayText: i,
  tileSortValues: n,
  values: o,
  valuesToDisplayText: l,
  onChange: d
}) {
  let u = useDispatch();
  let p = useAtomWithSubscription(selectedItemAtom);
  let m = useCallback((t, i, n) => {
    t.stopPropagation();
    u(hideDropdownAction());
    trackEventAnalytics("Sort Changed - Dropdown", {
      oldValueString: e,
      newValueString: i,
      model: p,
      dir: n === SortOrder.ASC ? "asc" : n === SortOrder.DESC ? "desc" : void 0
    });
    d?.(i, n);
  }, [e, u, d, p]);
  return jsxs("div", {
    children: [jsx("div", {
      className: D,
      children: renderI18nText("tile.sort_filter.sort_by_label")
    }), o.map(t => jsxs("div", {
      className: O,
      onMouseDown: e => {
        m(e, t);
      },
      role: "button",
      tabIndex: -1,
      children: [l[t], e === t && jsx(SvgComponent, {
        svg: _$$A,
        className: L
      })]
    }, t)), n.length > 0 && jsxs(Fragment, {
      children: [jsx("div", {
        className: "relevancy_dropdown_options--separator--3yf35"
      }), jsx("div", {
        className: D,
        children: renderI18nText("tile.sort_filter.order_label")
      })]
    }), n.map((n, a) => jsxs("div", {
      className: O,
      onMouseDown: t => m(t, e, n),
      role: "button",
      tabIndex: -1,
      children: [i(n, _$$E2(e)), t === n && jsx(SvgComponent, {
        svg: _$$A,
        className: L
      })]
    }, a))]
  });
}
var B = U;
let X = "seen_search_workspace_onboarding";
let Q = "SEARCH_WORKSPACE_ONBOARDING_KEY";
let J = userFlagExistsAtomFamily("file_browser_onboarded");
let ee = userFlagExistsAtomFamily(X);
function et() {
  let e = useSelector(e => e.currentUserOrgId);
  let t = UC(e);
  let i = useAtomWithSubscription(t);
  let n = useAtomWithSubscription(J);
  let a = useAtomWithSubscription(ee);
  let o = _$$e({
    overlay: tBR,
    priority: _$$N.DEFAULT_MODAL
  }, [n, i, a]);
  useSingleEffect(() => {
    o.show({
      canShow: (e, t, i) => e && t && !i
    });
  });
  return jsx(rq, {
    isShowing: o.isShowing,
    trackingContextName: "Search Workspace Onboarding",
    userFlagOnShow: X,
    onClose: o.complete,
    targetKey: Q,
    title: renderI18nText("rcs.search_workspace_onboarding_modal.title"),
    description: jsx("p", {
      children: renderI18nText("rcs.search_workspace_onboarding_modal.text")
    }),
    emphasized: !0
  });
}
let ei = "workspace_dropdown_filters--row--HUwI-";
let en = "workspace_dropdown_filters--icon--cqrra";
function er({
  values: e,
  valuesToDisplayText: t,
  checkedValue: i,
  onResetFilter: n,
  onChange: o
}) {
  let l = useDispatch();
  let d = useCallback(e => {
    e.stopPropagation();
    l(hideDropdownAction());
  }, [l]);
  return jsxs("div", {
    children: [jsx("div", {
      className: "workspace_dropdown_filters--heading--zYZzJ workspace_dropdown_filters--row--HUwI-",
      children: renderI18nText("search.facets.workspaces")
    }), jsxs("div", {
      className: ei,
      onMouseDown: e => {
        d(e);
        n();
      },
      role: "button",
      tabIndex: -1,
      children: [t.ALL, "ALL" === i && jsx(SvgComponent, {
        svg: _$$A,
        className: en
      })]
    }, "ALL"), e.map(e => jsxs("div", {
      className: ei,
      onMouseDown: t => {
        d(t);
        o?.(e);
      },
      role: "button",
      tabIndex: -1,
      children: [t[e], i === e && jsx(SvgComponent, {
        svg: _$$A,
        className: en
      })]
    }, e))]
  });
}
let ea = "search_group_dropdown--dropdownContainer--N1-gb text--fontPos11--2LvXf text--_fontBase--QdLsd";
let es = "search_group_dropdown--dropdownContainerDisabled--GQ5J3 search_group_dropdown--dropdownContainer--N1-gb text--fontPos11--2LvXf text--_fontBase--QdLsd";
let eo = "search_group_dropdown--caretContainer--uDNtU";
let el = "search_group_dropdown--caret--7SR-V";
let ed = "search_group_dropdown--caretDown--Zk294";
let eu = {};
let ep = (e, t) => {
  let i = e.name.toUpperCase();
  let n = t.name.toUpperCase();
  return i < n ? -1 : i > n ? 1 : 0;
};
function em(e) {
  let t = useSelector(e => e.currentUserOrgId);
  let i = "NON_ORG_TEAMS" !== e.planId && e.planId || t;
  let n = useSubscription(SearchFilterWorkspaceView, {
    orgId: i
  });
  let {
    currentWorkspace,
    viewableWorkspaces
  } = useMemo(() => {
    if ("loaded" === n.status) {
      let e = n.data?.org?.workspaces;
      let t = e?.filter(e => e.canView);
      let i = n.data?.currentUser.baseOrgUser?.workspaceUsers?.find(e => e.isMainWorkspace)?.workspaceId;
      return {
        currentWorkspace: t?.find(e => e.id === i),
        viewableWorkspaces: t
      };
    }
    return {
      currentWorkspace: null,
      viewableWorkspaces: []
    };
  }, [n]);
  let d = useSelector(e => e.orgById[i]);
  eu.ALL = getI18nString("search.search_filter.all_org_results", {
    orgName: d?.name
  });
  let u = [];
  let p = useAtomWithSubscription(P_);
  return useMemo(() => p && !p.value[FolderType.FOLDER].length && !p.value[FolderType.TEAM].length && 1 === p.value[FolderType.ORG].length, [p]) && e.planId && "NON_ORG_TEAMS" !== e.planId && viewableWorkspaces?.length ? (currentWorkspace && u.push(currentWorkspace.id), viewableWorkspaces?.sort(ep).forEach(e => {
    e.id !== currentWorkspace?.id && u.push(e.id);
    eu[e.id] = e.name;
  }), jsxs("div", {
    "data-onboarding-key": Q,
    children: [jsx(eh, {
      dropdownId: "search-dropdown-group-filter",
      sortControlsDisabled: e.sortControlsDisabled,
      values: u,
      checkedValue: e.workspaceFilter ?? "ALL",
      onChange: e.onChangeWorkspaceFilter,
      onClickDropdown: e.onClickDropdown,
      onResetFilter: e.onResetWorkspaceFilter
    }), jsx(_$$p, {
      children: jsx(et, {})
    })]
  })) : jsx(Fragment, {});
}
function eh(e) {
  let t = useDispatch();
  let i = useRef(null);
  let n = useSelector(e => e.dropdownShown);
  let o = n?.type === e.dropdownId;
  let l = e => {
    e.stopPropagation();
  };
  return jsxs("div", {
    className: e.sortControlsDisabled && "ALL" === e.checkedValue ? es : ea,
    onMouseDown: n => {
      o ? (t(hideDropdownAction()), e.onClickDropdown(FileBrowserAction.CLOSE)) : i.current && (t(showDropdownThunk({
        type: e.dropdownId,
        data: {
          targetRect: i.current.getBoundingClientRect()
        }
      })), e.onClickDropdown(FileBrowserAction.OPEN));
      l(n);
    },
    onClick: l,
    children: [jsx("span", {
      children: eu[e.checkedValue]
    }), jsx("div", {
      className: eo,
      ref: i,
      children: jsx(SvgComponent, {
        svg: _$$A2,
        className: B()(el, o ? ed : "")
      })
    }), o && jsx(_$$G, {
      dropdownId: e.dropdownId,
      dropdownChild: jsx(er, {
        values: e.values,
        valuesToDisplayText: eu,
        checkedValue: e.checkedValue,
        onResetFilter: e.onResetFilter,
        onChange: e.onChange
      })
    })]
  });
}
let ex = wv;
let eS = "NON_ORG_TEAMS";
let ew = {};
function eC(e) {
  let t = selectCurrentUser();
  let i = useSelector(e => t ? e.authedUsers.byId[t.id]?.plans : null);
  if (i && 0 === i.length) return jsx(Fragment, {});
  let n = [];
  ew.ALL = getI18nString("search.search_filter.all_organizations_results");
  let a = !1;
  i?.forEach(e => {
    e.is_org ? (n.push(e.plan_id), ew[e.plan_id] = e.name) : a = !0;
  });
  a && (n.push(eS), ew[eS] = getI18nString("search.search_filter.non_org_teams"));
  return jsx(eT, {
    dropdownId: "search-dropdown-plan-filter",
    sortControlsDisabled: e.sortControlsDisabled,
    values: n,
    checkedValue: e.planFilter ?? "ALL",
    onChange: e.onChangePlanFilter,
    onClickDropdown: e.onClickDropdown,
    onResetFilter: e.onResetPlanFilter
  });
}
function eT(e) {
  let t = useDispatch();
  let i = useRef(null);
  let n = useSelector(e => e.dropdownShown);
  let o = n?.type === e.dropdownId;
  let [l, d] = useState(window.innerHeight - 175);
  useEffect(() => {
    let e = debounce(function () {
      d(window.innerHeight - 175);
    }, 250);
    window.addEventListener("resize", e);
    return () => window.removeEventListener("resize", e);
  }, []);
  let c = e => {
    e.stopPropagation();
  };
  let u = () => {
    o && t(hideDropdownAction());
  };
  return jsxs("div", {
    className: e.sortControlsDisabled && "ALL" === e.checkedValue ? es : ea,
    onMouseDown: n => {
      o ? (t(hideDropdownAction()), e.onClickDropdown(FileBrowserAction.CLOSE)) : i.current && (t(showDropdownThunk({
        type: e.dropdownId,
        data: {
          targetRect: i.current.getBoundingClientRect()
        }
      })), e.onClickDropdown(FileBrowserAction.OPEN));
      c(n);
    },
    onClick: c,
    children: [e.checkedValue && "ALL" !== e.checkedValue && e.checkedValue !== eS && jsx(lV, {
      planOption: {
        label: ew[e.checkedValue],
        plan_id: e.checkedValue,
        plan_type: "org"
      }
    }), jsx("span", {
      ref: i,
      children: ew[e.checkedValue]
    }), jsx("div", {
      className: eo,
      children: jsx(SvgComponent, {
        svg: _$$A2,
        className: B()(el, o ? ed : "")
      })
    }), o && jsxs(Cf, {
      targetRect: n.data.targetRect,
      minWidth: 162,
      maxWidth: 500,
      maxHeight: l,
      showPoint: !0,
      lean: "right",
      propagateCloseClick: !0,
      children: [jsx(MM, {
        checked: "ALL" === e.checkedValue,
        onClick: () => {
          u();
          e.onResetFilter();
        },
        children: ew.ALL
      }, "ALL"), jsx(ex, {}), e.values.map(t => jsx(MM, {
        checked: t === e.checkedValue,
        onClick: () => {
          u();
          e.onChange(t);
        },
        children: ew[t] && ew[t]
      }, t))]
    })]
  });
}
(e => {
  class t extends Component {
    constructor() {
      super(...arguments);
      this.onChange = (e, t) => {
        let i = {
          ...this.props.sortState,
          [this.props.searchModelType]: {
            sortKey: e,
            sortDesc: void 0 === t ? e === TeamSortField.TOUCHED_AT || e === TeamSortField.CREATED_AT : t === SortOrder.DESC
          }
        };
        this.props.onChange(i);
      };
    }
    render() {
      let e = `search-sort-${this.props.searchModelType}`;
      let t = this.props.sortState[this.props.searchModelType];
      let i = {
        includeSortDirection: !1
      };
      this.props.includeSortDirection(t.sortKey) && (i = {
        includeSortDirection: !0,
        tileSortValues: R1.sortOptions,
        currentDirection: t.sortDesc ? SortOrder.DESC : SortOrder.ASC
      });
      return jsx(eL, {
        dropdownId: e,
        values: this.props.sortKeys,
        valuesToDisplayText: this.props.sortKeyDescriptions[this.props.viewMode],
        checkedValue: t.sortKey,
        onChange: this.onChange,
        disabled: this.props.disabled,
        ...i
      });
    }
  }
  e.SearchSortDropdown = function (e) {
    switch (e.searchModelType) {
      case PublicModelType.HUB_FILES:
        return jsx(t, {
          ...e,
          ...xH
        });
      case PublicModelType.PUBLIC_PLUGINS:
        return jsx(t, {
          ...e,
          ..._$$xH2
        });
      case PublicModelType.PRIVATE_PLUGINS:
        return jsx(t, {
          ...e,
          ..._$$xH
        });
      case PublicModelType.FILES:
        return jsx(t, {
          ...e,
          ...KJ
        });
      case PublicModelType.PROJECTS:
        return jsx(t, {
          ...e,
          ...$T
        });
      case PublicModelType.TEAMS:
        return jsx(t, {
          ...e,
          ...Vx
        });
      case PublicModelType.USERS:
        return jsx(t, {
          ...e,
          ...V0
        });
      case PublicModelType.PUBLIC_PROFILES:
      case PublicModelType.PUBLIC_WIDGETS:
      case PublicModelType.PRIVATE_WIDGETS:
        return null;
      default:
        throwTypeError(e.searchModelType);
    }
  };
})(n || (n = {}));
let eN = n.SearchSortDropdown;
function eP(e) {
  switch (e.searchModelType) {
    case PublicModelType.FILES:
      return jsx(Kc, {
        ...e,
        ...KJ
      });
    case PublicModelType.PROJECTS:
      return jsx(Kc, {
        ...e,
        ...$T
      });
    case PublicModelType.TEAMS:
      return jsx(Kc, {
        ...e,
        ...Vx
      });
    case PublicModelType.USERS:
      return jsx(Kc, {
        ...e,
        ...V0
      });
    case PublicModelType.HUB_FILES:
    case PublicModelType.PUBLIC_PLUGINS:
    case PublicModelType.PRIVATE_PLUGINS:
    case PublicModelType.PUBLIC_PROFILES:
    case PublicModelType.PUBLIC_WIDGETS:
    case PublicModelType.PRIVATE_WIDGETS:
      return null;
    default:
      return throwTypeError(e.searchModelType);
  }
}
export let $$eO1 = {
  [PublicModelType.FILES]: (e, t) => ({
    sortMode: e.sortState.files,
    viewMode: y2(KJ.viewId, t, KJ.defaultOptions.viewMode),
    shouldShowGroupFilter: !0,
    shouldShowPlanFilter: !0
  }),
  [PublicModelType.PROJECTS]: (e, t) => ({
    sortMode: e.sortState.projects,
    viewMode: y2($T.viewId, t, $T.defaultOptions.viewMode),
    shouldShowGroupFilter: !0,
    shouldShowPlanFilter: !0
  }),
  [PublicModelType.TEAMS]: (e, t) => ({
    sortMode: e.sortState.teams,
    viewMode: y2(Vx.viewId, t, Vx.defaultOptions.viewMode),
    shouldShowGroupFilter: !0,
    shouldShowPlanFilter: !0
  }),
  [PublicModelType.USERS]: (e, t) => ({
    sortMode: e.sortState.users,
    viewMode: y2(V0.viewId, t, V0.defaultOptions.viewMode),
    shouldShowGroupFilter: !1,
    shouldShowPlanFilter: !0
  }),
  [PublicModelType.HUB_FILES]: eB,
  [PublicModelType.PUBLIC_PLUGINS]: _$$zQ2,
  [PublicModelType.PRIVATE_PLUGINS]: _$$zQ,
  [PublicModelType.PUBLIC_PROFILES]: _$$g.getValidOptions,
  [PublicModelType.PUBLIC_WIDGETS]: nD.getValidOptions,
  [PublicModelType.PRIVATE_WIDGETS]: uB.getValidOptions
};
export function $$eD0(e) {
  let t = useDispatch();
  let i = useSelector(e => e.search.parameters);
  let n = useSelector(e => e.viewBarViewModeOptionByView);
  let [o, l] = useAtomValueAndSetter(selectedItemAtom);
  let d = useAtomWithSubscription(P_);
  let p = useAtomWithSubscription(_$$J);
  let h = o ?? PublicModelType.FILES;
  let g = getSupportedFacetTypes(h);
  let f = g.includes(CreatorResourceType.RESOURCE);
  let y = g.includes(CreatorResourceType.CREATOR);
  let v = g.includes(CreatorResourceType.SPACE);
  let I = v && (h === PublicModelType.FILES || h === PublicModelType.PROJECTS || h === PublicModelType.TEAMS);
  let E = $$eO1[h](i, n);
  let k = E.viewMode;
  let R = !v && (E.shouldShowPlanFilter ?? !1);
  let N = useAtomWithSubscription(hO.isFragmentSearchAtom);
  let P = useAtomWithSubscription(searchScopeAtom);
  let O = _$$L(N ? "fragment_search_modal" : "file_browser", P, !1);
  let D = useAtomWithSubscription(searchInputAtom);
  let L = Xr(l4(CreatorResourceType.RESOURCE));
  let F = useCallback(e => {
    if (e === h) return;
    let i = convertModelTypeToSearchModelType(e);
    let n = createResourceFacet(i);
    L(n);
    l(e);
    let r = getSupportedFacetTypes(e).includes(CreatorResourceType.CREATOR);
    let a = getSupportedFacetTypes(e).includes(CreatorResourceType.SPACE);
    (n?.value === SearchModelType.PLUGINS || n?.value === SearchModelType.WIDGETS) && t(clearWorkspaceFilterThunk({}));
    let s = buildQueryObject(n, r ? p : null, a ? d : null, e);
    O(D, e, s, !0, !0, !1);
    window.scrollTo(0, 0);
  }, [h, t, p, d, O, D, L, l]);
  let M = e => {
    t(trackLicenseGroupFilterDropdownClickThunk({
      clickType: e
    }));
  };
  let j = jsx(eN, {
    viewMode: k,
    searchModelType: h,
    sortState: i.sortState,
    onChange: e => {
      t(sortStateThunk({
        sortState: e
      }));
    },
    disabled: e.sortControlsDisabled
  }, "search-view-bar-search-sort-dropdown");
  let U = jsx("div", {
    className: cssBuilderInstance.flex.itemsCenter.mlAuto.$,
    children: jsx(eP, {
      searchModelType: h,
      disabled: e.sortControlsDisabled
    })
  }, "search-view-bar-search-view-mode-toggle");
  let B = R && jsx("div", {
    children: jsx(eC, {
      sortControlsDisabled: e.sortControlsDisabled,
      planFilter: i.planFilter,
      onChangePlanFilter: e => {
        t(selectPlanFilterThunk({
          planFilter: e
        }));
      },
      onClickDropdown: M,
      onResetPlanFilter: () => {
        t(clearPlanFilterThunk({}));
      }
    }, "search-view-bar-search-plan-filter-dropdown")
  });
  let V = f && jsx(_$$l, {
    dropdownId: "full-search-results-resource-facet-dropdown",
    facetType: CreatorResourceType.RESOURCE
  }, "search-view-bar-file-type-dropdown");
  let G = y && jsx(_$$l, {
    dropdownId: "full-search-results-creator-facet-dropdown",
    facetType: CreatorResourceType.CREATOR
  }, "search-view-bar-creator-facet-dropdown");
  let z = v && jsx(_$$l, {
    dropdownId: "full-search-results-space-facet-dropdown",
    facetType: CreatorResourceType.SPACE
  }, "search-view-bar-space-facet-dropdown");
  let H = d && 1 === d.value[FolderType.ORG].length ? d.value[FolderType.ORG][0].id : void 0;
  let W = [B, V, G, z, I && jsx("div", {
    className: cssBuilderInstance.flex.itemsCenter.mlAuto.$,
    children: jsx(em, {
      sortControlsDisabled: e.sortControlsDisabled,
      workspaceFilter: i.workspaceFilter,
      onChangeWorkspaceFilter: e => {
        t(selectWorkspaceFilterThunk({
          workspaceFilter: e
        }));
      },
      onClickDropdown: M,
      onResetWorkspaceFilter: () => {
        t(clearWorkspaceFilterThunk({}));
      },
      planId: H
    })
  }, "search-view-bar-facet-workspace-dropdown"), j, U];
  return jsx(_$$g2, {
    leftSide: jsx(A, {
      searchScope: i.searchScope,
      searchModelType: h,
      onChange: F
    }),
    rightSide: W,
    rightSideMobile: W,
    shouldStackRightSideMobile: !0
  });
}
function eL(e) {
  let t = useDispatch();
  let i = useRef(null);
  let n = Um();
  let o = n?.type === e.dropdownId;
  let c = n => {
    n.stopPropagation();
    o ? t(hideDropdownAction()) : i.current && t(showDropdownThunk({
      type: e.dropdownId,
      data: {
        targetRect: i.current.getBoundingClientRect()
      }
    }));
  };
  let u = e.disabled ? "tile_sort_filter--dropdownContainerDisabled--lYOaX tile_sort_filter--dropdownContainer--443h- text--fontPos11--2LvXf text--_fontBase--QdLsd" : "tile_sort_filter--dropdownContainer--443h- text--fontPos11--2LvXf text--_fontBase--QdLsd";
  let p = jsx(_$$G, {
    dropdownId: e.dropdownId,
    dropdownChild: jsx(M, {
      checkedValue: e.checkedValue,
      currentDirection: e.includeSortDirection ? e.currentDirection : null,
      tileSortValues: e.includeSortDirection ? e.tileSortValues : [],
      dirValuesToDisplayText: R1.sortOptionsDisplayText,
      values: e.values,
      valuesToDisplayText: e.valuesToDisplayText,
      onChange: e.onChange
    })
  });
  return jsxs("div", {
    className: u,
    children: [jsxs(ButtonPrimitive, {
      onClick: e => {
        c(e);
      },
      "aria-expanded": o,
      children: [jsx("span", {
        ref: i,
        children: e.valuesToDisplayText[e.checkedValue]
      }), jsx(_$$O, {})]
    }), o ? p : null]
  });
}
export const ZG = $$eD0;
export const zQ = $$eO1;