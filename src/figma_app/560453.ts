import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useMemo, useState, useEffect, useRef } from "react";
import { d4 } from "../vendor/514228";
import { xb } from "../figma_app/465776";
import { lQ } from "../905/934246";
import { t as _$$t } from "../905/150656";
import { r as _$$r } from "../905/571838";
import { k as _$$k } from "../905/792988";
import { q as _$$q } from "../905/820062";
import { N as _$$N } from "../905/865305";
import { c as _$$c } from "../905/486270";
import { md, fp, Xr, zl } from "../figma_app/27355";
import m from "classnames";
import f from "../vendor/524488";
import { sx, az } from "../905/449184";
import { parsePxNumber } from "../figma_app/783094";
import { h as _$$h } from "../905/207101";
import { EJ } from "../figma_app/930338";
import { g as _$$g } from "../905/880308";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t2, tx } from "../905/303541";
import { q4 } from "../905/294085";
import { hO, cN, d3, G4, G1 } from "../figma_app/545293";
import { fi } from "../figma_app/913823";
import { u as _$$u } from "../905/389684";
import { g5 } from "../figma_app/178752";
import { tS } from "../figma_app/516028";
import { oh } from "../905/18797";
import { T5 } from "../figma_app/465071";
import { Sh } from "../figma_app/803787";
import { l as _$$l } from "../905/202425";
import { Wv } from "../figma_app/633080";
import { $A } from "../905/862883";
import { I as _$$I } from "../figma_app/130633";
import { N2, Ee } from "../figma_app/392189";
import { b as _$$b } from "../figma_app/598297";
import { g as _$$g2 } from "../905/505662";
import { eH as _$$eH, Nv } from "../figma_app/318590";
import { kK } from "../figma_app/144974";
import { JT } from "../figma_app/632248";
import { WP, TC, B1, kN } from "../905/198599";
import { cq } from "../905/794154";
import { _M } from "../905/487011";
import { $L } from "../figma_app/737746";
import { Ev } from "../figma_app/297822";
import { Jc, Sn } from "../905/946805";
import { dd, Rt, Lk, Q8 } from "../figma_app/604494";
import { b as _$$b2 } from "../905/222272";
import { n as _$$n } from "../905/895449";
import { q as _$$q2 } from "../905/516087";
import { vj } from "../figma_app/883990";
import { fu, oz } from "../figma_app/538006";
import { iC } from "../figma_app/169086";
import { s as _$$s2 } from "../905/182893";
import { S as _$$S } from "../905/562072";
import { V as _$$V } from "../905/453354";
import { N as _$$N2 } from "../905/998668";
import { z6, wU, mX, jk, hc, Km } from "../figma_app/846841";
import { Qx, qG, xA, fJ } from "../905/742325";
import { O as _$$O } from "../figma_app/380422";
import { M as _$$M } from "../figma_app/751728";
import { U as _$$U } from "../905/544380";
import { i as _$$i } from "../905/740630";
import { S as _$$S2 } from "../905/933340";
import { s as _$$s3 } from "../905/234042";
import { X as _$$X } from "../905/846650";
var g = m;
var E = f;
export function $$ef1({
  searchHandle: e
}) {
  let {
    currentSearch
  } = md(WP);
  let r = _$$V();
  let s = _$$eH();
  let o = md(hO.currentSearchAtom);
  let l = md(hO.currentCommunitySearchAtom);
  let {
    push
  } = cq();
  let f = md(dd);
  let b = oh(fi);
  let I = g5($A.Design).productComponents;
  let {
    recentFragments
  } = cN(!r);
  let x = useCallback((e, t) => {
    let [r] = t;
    if (r.isIntersecting) {
      let t = e ? l : o;
      sx("Fragments scrolled into view", {
        ...d3(G4.ACTIONS_ASSETS_TAB, f, t ? t.searchId : "", t ? t.input : null, !1, null, e)
      });
    }
  }, [o, l, f]);
  let P = useCallback((e) => {
    let t = new IntersectionObserver((e) => x(!1, e), {
      threshold: 1
    });
    e && t.observe(e);
    return () => {
      t.disconnect();
    };
  }, [x]);
  let j = useCallback((e) => {
    let t = new IntersectionObserver((e) => x(!0, e), {
      threshold: 1
    });
    e && t.observe(e);
    return () => {
      t.disconnect();
    };
  }, [x]);
  let {
    close
  } = cq();
  let {
    libraries,
    presets,
    librariesForConnectedProject
  } = _$$g2();
  let et = tS();
  let er = md(Rt);
  let ei = d4(_$$l);
  let ea = md(Sh);
  let ep = md(Lk);
  let e_ = !ea && 0 === libraries.length && 0 === presets.length && 0 === librariesForConnectedProject.length;
  let em = useMemo(() => N2(!0, !0), []);
  let {
    onToggleLibraryModal
  } = _$$u({
    entrypoint: em,
    modalType: "editor",
    initialTab: Wv.TEAM_LIBRARIES
  });
  let ef = useCallback(() => {
    close();
    onToggleLibraryModal();
  }, [close, onToggleLibraryModal]);
  let ey = {
    title: _$$t2("assets_in_actions.browse_libraries_button"),
    onAction: () => {
      ef();
    },
    recordingKey: "assetsTab.assetsBrowseLibraries"
  };
  let eb = Ev();
  let eT = useMemo(() => currentSearch?.result.status === "loaded" && (!r || o?.result.status === "loaded") && (!s || l?.result.status === "loaded"), [currentSearch?.result.status, o?.result.status, l?.result.status, r, s]);
  let eI = useMemo(() => [...(currentSearch?.result.data || []), ...(o?.result.data || []), ...(l?.result.data || [])], [currentSearch?.result.data, o?.result.data, l?.result.data]);
  let eS = currentSearch?.input.type === "input-text" ? currentSearch.input.query : "";
  let ev = md(Q8);
  let eA = 0 === ev.length;
  let ex = !currentSearch && !b && (!I.length || kK());
  let [eN, eC] = useState(!1);
  let ew = useCallback((e) => {
    eC(e);
  }, []);
  let eO = !r && !s || ex;
  let eR = eN || o?.result.status === "loading";
  let eL = I.length;
  let eP = recentFragments ? recentFragments.length : 0;
  let eD = !eO && (!!o || eP > 0);
  let ek = !eO && !!l;
  let eM = eO ? 0 : eP;
  let eF = eR ? 0 : eL + eM;
  useEffect(() => {
    et && (eT || eF > 0 && eA) && eb({
      quickActionsSessionId: f || "invalid-for-assets-tab",
      quickActionsQueryId: er,
      searchQuery: eS,
      numSearchResults: eT ? eI.length : eF,
      currentSelection: ei,
      module: ep,
      moduleFilters: null,
      qaVersion: $L,
      searchQueryResults: ""
    });
  }, [eI.length, ei, et, eb, eT, ep, f, eS, er, r, eF, eA]);
  _$$h(() => {
    az.trackDefinedEvent("asset_search.actions_search_panel_open", {
      session_id: f || "",
      search_id: currentSearch?.queryId || "",
      entryPoint: currentSearch?.input.type === "input-text" ? G4.ACTIONS_ASSETS_TAB : G4.ACTIONS_VISUAL_SEARCH_VIEW,
      query_type: currentSearch?.input.type,
      query_text: currentSearch?.input.type === "input-text" ? currentSearch.input.query : "",
      query_node_id: currentSearch?.input.type === "input-selection" ? currentSearch.input.node.guid : "",
      assets_tab_type: Jc.ASSETS
    });
  });
  let ej = currentSearch?.result.status === "errors" && (!r || o?.result.status === "errors") && (!s || l?.result.status === "errors");
  if (iC({
    activeTab: Jc.ASSETS,
    isLoading: r && o?.result.status === "loading" || s && l?.result.status === "loading",
    passthroughErrorMessage: ej ? _$$t2("assets_in_actions.error.description") : null,
    query: ev,
    resultsCount: eI.length
  }), e_ && !s) return jsx("div", {
    "data-testid": "assets-tab",
    children: jsx(_$$n.Stretch, {
      children: jsx(_$$S2, {
        fillHeight: !0,
        children: jsx(Ee, {
          onClickExplore: close,
          width_ui3: 264,
          fromActionsModal: !0,
          bgTransparentUI3: !0
        })
      })
    })
  });
  if (ej) return jsx("div", {
    "data-testid": "assets-tab",
    children: jsx(_$$n.Stretch, {
      children: jsx(_$$S2, {
        fillHeight: !0,
        children: jsxs(_$$N2, {
          children: [jsx(_$$N2.ArtworkIcon, {
            variant: "danger",
            children: jsx(_$$r, {})
          }), jsx(_$$N2.Text, {
            title: _$$t2("assets_in_actions.error.title"),
            subtitle: _$$t2("assets_in_actions.error.description")
          })]
        })
      })
    })
  });
  let eU = !r || o?.result.status === "loaded" && 0 === o.result.data.length;
  let eB = !s || l?.result.status === "loaded" && 0 === l.result.data.length;
  if (currentSearch?.result.status === "loaded" && 0 === currentSearch.result.data.length && eU && eB) {
    let e = currentSearch?.input.type === "input-text" ? currentSearch.input.query : "";
    return jsx("div", {
      "data-testid": "assets-tab",
      children: jsx(_$$n.Stretch, {
        children: jsx(_$$S2, {
          fillHeight: !0,
          children: jsx("span", {
            className: _$$s.textBodyMedium.colorTextSecondary.$,
            "data-testid": "assets-tab-no-results",
            children: tx("assets_in_actions.no_results.title", {
              query: E()(e, {
                length: 24
              })
            })
          })
        })
      })
    });
  }
  let eG = (e) => {
    let t = e ? l : o;
    let r = e ? jsx(z6, {
      initialTab: Qx.COMMUNITY
    }) : jsx(z6, {
      initialSearchTagType: qG.DESIGNS
    });
    sx("Fragment search see more", {
      ...d3(G4.ACTIONS_ASSETS_TAB, f, t ? t.searchId : "", t ? t.input : null, !1, void 0, e)
    });
    push({
      name: Sn.ASSETS_TAB_DETAIL_VIEW,
      module: s ? r : jsx($$eE0, {
        initialTab: e ? xA.COMMUNITY : xA.FRAGMENTS
      })
    }, {
      shouldResetSearchQuery: !1
    });
  };
  let eV = e_ && ev.length > 0 && s;
  return jsx(_$$q2, {
    children: jsxs("div", {
      className: g()(_$$s.flex.flexColumn.gap6.$$if(eO, _$$s.hFull).$, "assets_tab--bodyFontMedium--PGKXZ text--fontPos11--2LvXf text--_fontBase--QdLsd"),
      "data-testid": "assets-tab",
      children: [jsx(_$$O, {
        onLoadStateChange: ew,
        header: {
          title: _$$t2("assets_in_actions.assets_section.title"),
          icon: s ? jsx(_$$k, {}) : void 0,
          seeMore: eV ? ey : {
            title: _$$t2("assets_in_actions.see_more_button"),
            onAction: () => {
              az.trackDefinedEvent("asset_search.see_more", {
                session_id: f || "",
                search_id: currentSearch?.queryId || "",
                entryPoint: currentSearch?.input.type === "input-text" ? G4.ACTIONS_ASSETS_TAB : G4.ACTIONS_VISUAL_SEARCH_VIEW,
                query_type: currentSearch?.input.type,
                query_text: currentSearch?.input.type === "input-text" ? currentSearch.input.query : "",
                query_node_id: currentSearch?.input.type === "input-selection" ? currentSearch.input.node.guid : ""
              });
              let e = jsx(z6, {
                initialSearchTagType: r ? qG.COMPONENTS : void 0
              });
              push({
                name: Sn.ASSETS_TAB_DETAIL_VIEW,
                module: s ? e : jsx($$eE0, {})
              }, {
                shouldResetSearchQuery: !1
              });
            },
            recordingKey: "assetsTab.assetsSeeMore"
          }
        },
        numberOfGridColumns: 4,
        maxResults: s ? 4 : r ? 8 : 16,
        stretchEmptyStates: eO,
        largeSpacing: !0,
        noLibraries: eV
      }), eD && jsx(_$$M, {
        entryPoint: G4.ACTIONS_ASSETS_TAB,
        focusHandle: e,
        forceLoadingState: eN,
        header: {
          title: _$$t2("assets_in_actions.fragments_section.title"),
          icon: s ? jsx(_$$q, {}) : jsx(_$$N, {}),
          seeMore: {
            title: _$$t2("assets_in_actions.see_more_button"),
            onAction: eG,
            recordingKey: "assetsTab.fragmentsSeeMore"
          }
        },
        hideEditorNames: !0,
        initialState: {
          type: "recents",
          recents: recentFragments
        },
        largeSpacing: !0,
        maxResults: s ? 2 : 6,
        numberOfGridColumns: s ? 2 : 3,
        searchResultRef: P
      }), ek && jsx(_$$M, {
        entryPoint: G4.ACTIONS_ASSETS_TAB,
        focusHandle: e,
        forceLoadingState: eR,
        header: {
          title: _$$t2("assets_in_actions.community_section.title"),
          icon: jsx(_$$c, {}),
          seeMore: {
            title: _$$t2("assets_in_actions.see_more_button"),
            onAction: () => eG(!0),
            recordingKey: "assetsTab.communitySeeMore"
          }
        },
        hideEditorNames: !0,
        isCommunity: !0,
        largeSpacing: !0,
        maxResults: s ? 2 : 6,
        numberOfGridColumns: s ? 2 : 3,
        searchResultRef: j
      })]
    })
  }, currentSearch?.queryId);
}
export function $$eE0({
  initAssetSearch: e = !1,
  closeOnEscape: t = !1,
  initialTab: r = xA.COMPONENTS
}) {
  let d = _$$V();
  let c = _$$eH();
  let u = T5("AssetsTabDetailView").unwrapOr(null);
  let _ = u?.name;
  let m = useRef(null);
  let {
    currentSearch
  } = md(WP);
  let f = md(hO.currentSearchAtom);
  let E = md(hO.currentCommunitySearchAtom);
  let [C, w] = fp(Q8);
  let R = Xr(Rt);
  let {
    recentFragments
  } = cN(!d);
  let M = _$$U(d);
  _$$b({
    disabled: !e
  });
  let {
    close
  } = cq();
  let {
    libraries,
    presets,
    librariesForConnectedProject
  } = _$$g2();
  let eE = !md(Sh) && 0 === libraries.length && 0 === presets.length && 0 === librariesForConnectedProject.length;
  let {
    debouncedAssetSearch,
    clearAssetSearchAndCancelDebounce,
    cancelDebouncedAssetSearch,
    flushDebouncedAssetSearch
  } = TC({
    debounceWait: wU
  });
  let {
    debouncedFragmentTextSearch,
    clearFragmentSearchAndCancelDebounce,
    cancelDebouncedFragmentTextSearch,
    flushDebouncedFragmentTextSearch
  } = _$$S({
    debounceWait: wU,
    entryPoint: G4.ACTIONS_ASSETS_TAB_DETAIL
  });
  let {
    debouncedFragmentTextSearch: _debouncedFragmentTextSearch,
    cancelDebouncedFragmentTextSearch: _cancelDebouncedFragmentTextSearch,
    clearFragmentSearchAndCancelDebounce: _clearFragmentSearchAndCancelDebounce,
    flushDebouncedFragmentTextSearch: _flushDebouncedFragmentTextSearch
  } = _$$S({
    debounceWait: wU,
    entryPoint: G4.ACTIONS_ASSETS_TAB_DETAIL,
    isCommunity: !0
  });
  let [eR, eL] = fp(B1);
  let eP = Nv(currentSearch?.input.type === "input-text");
  let eD = useCallback((e) => {
    az.trackDefinedEvent("asset_search.misc_feature_usage", {
      aiResultsEnabled: eP,
      entryPoint: "actions-assets-tab",
      featureSlug: "library-filter-usage"
    });
    eL(e);
    debouncedAssetSearch(C, e);
    flushDebouncedAssetSearch();
  }, [debouncedAssetSearch, flushDebouncedAssetSearch, C, eP, eL]);
  let ek = _$$s3();
  let eM = useRef(null);
  let [eF, ej, eU] = _$$t.useTabs({
    [xA.COMPONENTS]: !0,
    [xA.FRAGMENTS]: d,
    [xA.COMMUNITY]: c
  }, {
    defaultActive: r
  });
  _$$h(() => () => {
    zl.set(q4);
    eL({
      type: _$$I.ALL
    });
    mX(zl.get(Q8), lQ, d, c, ek, G4.ACTIONS_ASSETS_TAB_DETAIL);
  });
  let eB = g5($A.Design).productComponents.length;
  let eG = recentFragments ? recentFragments.length : 0;
  let eV = useMemo(() => eU.activeTab === xA.COMPONENTS ? eB : eU.activeTab === xA.FRAGMENTS ? eG : (eU.activeTab, xA.COMMUNITY, 0), [eB, eG, eU.activeTab]);
  !function ({
    activeTab: e,
    numRecentItems: t,
    isEmptySearchQuery: r
  }) {
    let n = md(dd);
    let s = md(Rt);
    let o = d4(_$$l);
    let {
      query,
      queryId,
      results,
      loaded
    } = function (e) {
      let {
        currentSearch
      } = md(WP);
      let r = md(hO.currentSearchAtom);
      return e === xA.COMPONENTS ? {
        query: currentSearch?.input.type === "input-text" ? currentSearch.input.query : "",
        queryId: currentSearch?.queryId,
        results: currentSearch?.result.data || [],
        loaded: currentSearch?.result.status === "loaded"
      } : e === xA.FRAGMENTS ? {
        query: r?.input.type === "input-text" ? r.input.value : "",
        queryId: r?.searchId,
        results: r?.result.data || [],
        loaded: r?.result.status === "loaded"
      } : {
        query: "",
        queryId: "",
        results: [],
        loaded: !1
      };
    }(e);
    let p = Ev();
    let _ = useRef(new Set());
    let m = `${e}-${queryId}`;
    useEffect(() => {
      (loaded || t > 0 && r) && !_.current.has(m) && (p({
        quickActionsSessionId: n || "invalid-for-assets-tab",
        quickActionsQueryId: s,
        searchQuery: query,
        numSearchResults: loaded ? results.length : t,
        currentSelection: o,
        module: Sn.ASSETS_TAB_DETAIL_VIEW,
        moduleFilters: e,
        qaVersion: $L,
        searchQueryResults: ""
      }), _.current.add(m));
    }, [p, n, s, o, m, e, query, results.length, loaded, t, r]);
  }({
    activeTab: eU.activeTab,
    numRecentItems: eV,
    isEmptySearchQuery: 0 === C.length
  });
  let eH = useCallback((e) => {
    switch (e) {
      case xA.COMPONENTS:
        d && cancelDebouncedFragmentTextSearch();
        c && _cancelDebouncedFragmentTextSearch();
        kN(C) && (debouncedAssetSearch(C, eR), flushDebouncedAssetSearch());
        break;
      case xA.FRAGMENTS:
        cancelDebouncedAssetSearch();
        c && _cancelDebouncedFragmentTextSearch();
        G1(C) && (debouncedFragmentTextSearch(C), flushDebouncedFragmentTextSearch());
        break;
      case xA.COMMUNITY:
        d && cancelDebouncedFragmentTextSearch();
        cancelDebouncedAssetSearch();
        G1(C, !0) && (_debouncedFragmentTextSearch(C), _flushDebouncedFragmentTextSearch());
        break;
      default:
        xb(e);
    }
    eU.setActiveTab(eF[e].id);
    m.current?.focus();
  }, [cancelDebouncedFragmentTextSearch, debouncedAssetSearch, eR, flushDebouncedAssetSearch, cancelDebouncedAssetSearch, debouncedFragmentTextSearch, flushDebouncedFragmentTextSearch, C, eU, eF, d, c, _cancelDebouncedFragmentTextSearch, _debouncedFragmentTextSearch, _flushDebouncedFragmentTextSearch]);
  let ez = useCallback((e) => {
    w(e);
    R(_$$g());
    (eU.activeTab === xA.COMPONENTS || 0 === e.length) && debouncedAssetSearch(e, eR);
    d && (eU.activeTab === xA.FRAGMENTS || 0 === e.length) && debouncedFragmentTextSearch(e);
    c && (eU.activeTab === xA.COMMUNITY || 0 === e.length) && _debouncedFragmentTextSearch(e);
  }, [w, R, eU.activeTab, d, c, debouncedAssetSearch, eR, debouncedFragmentTextSearch, _debouncedFragmentTextSearch]);
  let eW = jsxs(fu, {
    value: eU.activeTab,
    onChange: lQ,
    numItems: c ? 3 : 2,
    children: [jsx(oz, {
      tabId: xA.COMPONENTS,
      onAction: () => eH(xA.COMPONENTS),
      children: tx("assets_in_actions.detail_view.components_tab.title")
    }), d && jsx(oz, {
      tabId: xA.FRAGMENTS,
      onAction: () => eH(xA.FRAGMENTS),
      children: tx("assets_in_actions.detail_view.fragments_tab.title")
    }), c && jsx(oz, {
      tabId: xA.COMMUNITY,
      onAction: () => eH(xA.COMMUNITY),
      children: tx("assets_in_actions.detail_view.community_tab.title")
    })]
  });
  let eK = currentSearch?.queryId;
  let eY = f?.searchId;
  let e$ = E?.searchId;
  let eX = d && currentSearch && "loaded" === currentSearch.result.status ? jsxs("div", {
    className: _$$s.flex.wFull.colorBgSecondary.itemsCenter.px8.py6.radiusMedium.$,
    children: [jsx(_$$N, {
      style: {
        "--color-icon": "var(--color-icon-brand)"
      }
    }), jsx("span", {
      className: _$$s.ml8.textBodyMedium.$,
      children: _ ? tx("assets_in_actions.fragments.fragment_search_sugggestion", {
        boldText: jsx("span", {
          className: _$$s.textBodyMediumStrong.$,
          children: tx("assets_in_actions.fragments.fragment_search_sugggestion_bold_text")
        }),
        orgText: EJ(_, 20)
      }) : tx("assets_in_actions.fragments_section.empty_state.text")
    }), jsx("span", {
      className: _$$s.mlAuto.textBodyMediumStrong.colorTextBrand.$,
      children: tx("assets_in_actions.fragments.fragment_search_sugggestion_hint")
    })]
  }) : void 0;
  let eq = currentSearch && !eE;
  let eJ = useCallback((e) => {
    d && jk(e);
  }, [d]);
  let eZ = _M({
    action: JT.FIND_INSPIRATION,
    clientLifecycleId: void 0
  });
  return jsxs(_$$n, {
    width: parsePxNumber(_$$X),
    height: 480,
    bodyFontMedium: !0,
    dataTestId: "assetsDetailView",
    children: [jsx(_$$n.Header, {
      children: jsxs("div", {
        ref: eM,
        className: _$$s.flex.flexColumn.$,
        children: [jsx(vj, {
          ref: m,
          searchQuery: C,
          onSearchChange: ez,
          forceRoot: t,
          onClear: () => {
            w("");
            clearAssetSearchAndCancelDebounce();
            d && clearFragmentSearchAndCancelDebounce();
            c && _clearFragmentSearchAndCancelDebounce();
          },
          onPaste: eJ,
          endEnhancer: d && jsx(hc, {
            entryPoint: G4.ACTIONS_ASSETS_TAB_DETAIL,
            aiTrackingContext: eZ,
            activeTab: eU.activeTab
          }),
          placeholder: M
        }), (d || c || eq) && jsx("div", {
          className: _$$s.px8.pb8.$,
          children: jsxs(_$$b2, {
            primary: !1,
            gap: 8,
            align: "center",
            fullWidth: !0,
            justify: "space-between",
            children: [jsx("div", {
              children: (d || c) && eW
            }), jsxs("div", {
              children: [eq && jsx(_$$t.TabPanel, {
                ...ej[xA.COMPONENTS],
                children: jsx("div", {
                  className: _$$s.h24.flex.itemsCenter.$,
                  children: jsx(_$$i, {
                    onSetAssetType: eD,
                    value: eR,
                    dropdownDataTestId: Km,
                    recordingKey: Km,
                    showTooltipOnEllipsis: !0
                  })
                })
              }), d && jsx(_$$t.TabPanel, {
                ...ej[xA.FRAGMENTS],
                children: jsx("div", {
                  className: _$$s.h24.flex.itemsCenter.$,
                  children: f && jsx(_$$s2, {
                    containerRef: eM,
                    entryPoint: G4.ACTIONS_ASSETS_TAB_DETAIL
                  })
                })
              }), c && jsx(_$$t.TabPanel, {
                ...ej[xA.COMMUNITY],
                children: jsx("div", {
                  className: _$$s.h24.$
                })
              })]
            })]
          })
        })]
      })
    }), jsx(_$$n.Body, {
      children: jsxs(fJ.Provider, {
        value: {
          activeTabId: eU.activeTab
        },
        children: [jsx(_$$t.TabPanel, {
          ...ej[xA.COMPONENTS],
          children: jsx(_$$q2, {
            children: eE ? jsx(_$$S2, {
              fillHeight: !0,
              children: jsx(Ee, {
                onClickExplore: close,
                fromActionsModal: !0,
                width_ui3: 264,
                bgTransparentUI3: !0
              })
            }) : jsx(_$$O, {
              numberOfGridColumns: 6,
              stretchEmptyStates: !0,
              suggestion: d && eX,
              onClickSuggestion: () => {
                eH(xA.FRAGMENTS);
              }
            })
          }, eK)
        }), d && jsx(_$$t.TabPanel, {
          ...ej[xA.FRAGMENTS],
          children: jsx(_$$q2, {
            children: jsx(_$$M, {
              focusHandle: m,
              initialState: {
                type: "recents",
                recents: recentFragments
              },
              stretchEmptyStates: !0,
              entryPoint: G4.ACTIONS_ASSETS_TAB_DETAIL
            })
          }, eY)
        }), c && jsx(_$$t.TabPanel, {
          ...ej[xA.COMMUNITY],
          children: jsx(_$$q2, {
            children: jsx(_$$M, {
              focusHandle: m,
              stretchEmptyStates: !0,
              isCommunity: !0,
              initialState: {
                type: "recents",
                recents: []
              },
              entryPoint: G4.ACTIONS_ASSETS_TAB_DETAIL
            })
          }, e$)
        })]
      })
    })]
  });
}
export const B = $$eE0;
export const t = $$ef1;