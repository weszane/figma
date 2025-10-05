import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { throwTypeError } from "../figma_app/465776";
import { noop } from 'lodash-es';
import { Tabs } from "../905/150656";
import { ButtonPrimitive } from "../905/632989";
import { k as _$$k } from "../905/792988";
import { q as _$$q } from "../905/820062";
import { f as _$$f } from "../905/54715";
import { T as _$$T } from "../905/256551";
import { A as _$$A } from "../905/800065";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription, useAtomValueAndSetter, Xr, atomStoreManager } from "../figma_app/27355";
import { generateRecordingKey } from "../figma_app/878298";
import E from "classnames";
import { analyticsEventManager, trackEventAnalytics } from "../905/449184";
import { parsePxNumber } from "../figma_app/783094";
import { useSingleEffect } from "../905/791079";
import { truncate } from "../figma_app/930338";
import { generateUUIDv4 } from "../905/871474";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { TextWithTruncation } from "../905/984674";
import { CZ, q4 } from "../905/294085";
import { hO, cN, vz, G4, G1, Hl, d3 } from "../figma_app/545293";
import { fi } from "../figma_app/913823";
import { u as _$$u } from "../905/389684";
import { g5 } from "../figma_app/178752";
import { selectCurrentFile, openFileKeyAtom } from "../figma_app/516028";
import { useIsLoading } from "../905/18797";
import { useCurrentPrivilegedPlan } from "../figma_app/465071";
import { Sh } from "../figma_app/803787";
import { C as _$$C } from "../905/758411";
import { LibraryTabEnum } from "../figma_app/633080";
import { FDocumentType } from "../905/862883";
import { KindEnum } from "../905/129884";
import { I as _$$I } from "../figma_app/130633";
import { N2, Ee } from "../figma_app/392189";
import { b as _$$b } from "../figma_app/598297";
import { g as _$$g2 } from "../905/505662";
import { XG } from "../figma_app/98578";
import { Ko, P5 } from "../figma_app/318590";
import { shouldHideRecents } from "../figma_app/144974";
import { JT } from "../figma_app/632248";
import { WP, TC, B1, kN, ES } from "../905/198599";
import { z as _$$z } from "../905/654860";
import { cq } from "../905/794154";
import { usKeyboardFocusHandler } from "../905/286442";
import { _M } from "../905/487011";
import { AssetTabType, ExtensionFeatureKey } from "../905/946805";
import { $I } from "../figma_app/322845";
import { Q8, Rt, dd } from "../figma_app/604494";
import { o as _$$o } from "../905/223420";
import { t as _$$t3 } from "../905/605191";
import { LayoutContainer } from "../905/222272";
import { n as _$$n } from "../905/895449";
import { q as _$$q2 } from "../905/516087";
import { vj } from "../figma_app/883990";
import { fu, oz } from "../figma_app/538006";
import { U as _$$U } from "../905/172092";
import { s as _$$s2 } from "../905/182893";
import { S as _$$S } from "../905/562072";
import { V as _$$V } from "../905/453354";
import { R as _$$R } from "../905/423086";
import { w5, o1, WS, jp, xC, qF } from "../905/370597";
import { k as _$$k3 } from "../905/788559";
import { S as _$$S2 } from "../905/999953";
import { Qx, qG, xA, wg, ZD } from "../905/742325";
import { O as _$$O } from "../figma_app/380422";
import { M as _$$M } from "../figma_app/751728";
import { U as _$$U2 } from "../905/544380";
import { i as _$$i } from "../905/740630";
import { S as _$$S3 } from "../905/933340";
import { D as _$$D } from "../905/654466";
import { s as _$$s3 } from "../905/234042";
import { X as _$$X } from "../905/846650";
import { g as _$$g3, H as _$$H2 } from "../905/832218";
var y = E;
let $$ew1 = "actions-asset-tab-library-filter";
let $$eO5 = 300;
export function $$eR6({
  isVisualSearch: e = !1,
  isFigmake: t = !1,
  initialTab: r = Qx.PLAN_FILE_ASSETS,
  initialSearchTagType: p,
  closeOnEscape: _ = !1,
  assetInsertionCallback: h,
  hubFileFragmentInsertionCallback: m
}) {
  let {
    currentSearch
  } = useAtomWithSubscription(WP);
  let C = useAtomWithSubscription(hO.currentSearchAtom);
  let K = useAtomWithSubscription(hO.currentCommunitySearchAtom);
  e = e || t && K?.input.type === "input-image";
  let Q = _$$V();
  let et = Ko();
  let [er, ei] = useAtomValueAndSetter(Q8);
  let eu = Xr(Rt);
  let {
    recentFragments
  } = cN(!Q);
  let {
    recommendedHubFileFragments
  } = vz();
  let eR = _$$U2(!0);
  _$$b();
  let eD = useRef(null);
  let eF = useRef(null);
  let ej = useRef(null);
  let eU = w5(K);
  let eB = _M({
    action: e ? JT.FIND_INSPIRATION : JT.TEXT_SEARCH,
    clientLifecycleId: void 0
  });
  _$$C();
  _$$z();
  useEffect(() => {
    if (e) return () => {
      _$$R();
      atomStoreManager.set(WP, {
        currentSearch: null
      });
    };
  }, [e]);
  let [eG, eV] = useState(!1);
  let eH = useCallback(e => {
    eV(e);
  }, []);
  let ez = t ? G4.FIGMAKE : e ? G4.ACTIONS_VISUAL_SEARCH_VIEW : G4.ACTIONS_ASSETS_TAB_DETAIL;
  let {
    close
  } = cq();
  let {
    libraries,
    presets,
    librariesForConnectedProject
  } = _$$g2();
  let eX = useAtomWithSubscription(Sh);
  let eq = e ? 0 === libraries.length && 0 === librariesForConnectedProject.length : !eX && 0 === libraries.length && 0 === presets.length && 0 === librariesForConnectedProject.length;
  let eJ = useMemo(() => N2(!0, !0), []);
  let {
    onToggleLibraryModal
  } = _$$u({
    entrypoint: eJ,
    modalType: "editor",
    initialTab: LibraryTabEnum.TEAM_LIBRARIES
  });
  let eQ = useCallback(() => {
    close();
    onToggleLibraryModal();
  }, [close, onToggleLibraryModal]);
  let e0 = {
    title: getI18nString("assets_in_actions.browse_libraries_button"),
    onAction: () => {
      eQ();
    },
    recordingKey: "assetsTab.assetsBrowseLibraries"
  };
  let e1 = useCallback(() => {
    _$$k3();
  }, []);
  let {
    debouncedAssetSearch,
    clearAssetSearchAndCancelDebounce,
    cancelDebouncedAssetSearch,
    flushDebouncedAssetSearch
  } = TC({
    debounceWait: $$eO5,
    onSearchSuccess: e1
  });
  let {
    debouncedFragmentTextSearch,
    clearFragmentSearchAndCancelDebounce,
    cancelDebouncedFragmentTextSearch,
    flushDebouncedFragmentTextSearch
  } = _$$S({
    debounceWait: $$eO5,
    entryPoint: ez,
    onSearchSuccess: e1
  });
  let {
    debouncedFragmentTextSearch: _debouncedFragmentTextSearch,
    cancelDebouncedFragmentTextSearch: _cancelDebouncedFragmentTextSearch,
    clearFragmentSearchAndCancelDebounce: _clearFragmentSearchAndCancelDebounce,
    flushDebouncedFragmentTextSearch: _flushDebouncedFragmentTextSearch
  } = _$$S({
    debounceWait: $$eO5,
    entryPoint: ez,
    isCommunity: !0,
    onSearchSuccess: e1,
    isFigmake: t
  });
  let [ti, ta] = useAtomValueAndSetter(B1);
  let ts = e ? "actions-visual-search-library-filter" : $$ew1;
  let to = !e || et;
  let [tl, td, tc] = Tabs.useTabs({
    [Qx.PLAN_FILE_ASSETS]: to,
    [Qx.COMMUNITY]: !0
  }, {
    defaultActive: r
  });
  let [tu, tp] = useAtomValueAndSetter(hO.sortByAtom);
  let t_ = useAtomWithSubscription(CZ);
  let [th, tm] = useState(p);
  let tg = th && tc.activeTab === Qx.PLAN_FILE_ASSETS;
  function tf(t) {
    let r;
    let i;
    let s;
    switch (t) {
      case qG.COMPONENTS:
        r = cssBuilderInstance.flex.px4.itemsCenter.gap4.b1.radiusMedium.maxW150.colorBgComponentTertiary.colorTextComponent.colorBorderComponent.$;
        i = {
          "--color-icon": "var(--color-icon-component)"
        };
        s = jsx(_$$k, {
          style: i
        });
        break;
      case qG.DESIGNS:
        r = cssBuilderInstance.flex.px4.itemsCenter.gap4.b1.radiusMedium.maxW150.colorBgBrandTertiary.colorTextBrand.colorBorderBrand.$;
        i = {
          "--color-icon": "var(--color-icon-brand)"
        };
        s = jsx(_$$q, {
          style: i
        });
        break;
      default:
        throwTypeError(t);
    }
    return jsxs("div", {
      className: r,
      style: styleBuilderInstance.add({
        paddingTop: "3px",
        paddingBottom: "3px",
        marginRight: "8px"
      }).$,
      children: [jsx("div", {
        className: cssBuilderInstance.flex.itemsCenter.justifyCenter.w16.h16.flexShrink0.$,
        children: s
      }), jsx("span", {
        className: cssBuilderInstance.truncate.$,
        children: t
      }), jsx(ButtonPrimitive, {
        recordingKey: generateRecordingKey(tZ, "dismiss"),
        onClick: () => {
          if (!e) switch (t) {
            case qG.COMPONENTS:
              G1(er) && debouncedFragmentTextSearch(er);
              break;
            case qG.DESIGNS:
              kN(er) && debouncedAssetSearch(er, {
                type: _$$I.ALL
              });
          }
          ti.type !== _$$I.ALL && (ta({
            type: _$$I.ALL
          }), currentSearch && ES({
            ...currentSearch.input,
            assetTypeOption: {
              type: _$$I.ALL
            }
          }));
          "percent_match" !== tu && tp("percent_match");
          t_ && (atomStoreManager.set(q4), C && Hl(C?.input, ez));
          analyticsEventManager.trackDefinedEvent("asset_search.actions_search_panel_open", {
            ...tb,
            assets_tab_type: _$$D(Qx.PLAN_FILE_ASSETS, void 0)
          });
          tm(void 0);
        },
        className: cssBuilderInstance.bgTransparent.$,
        "aria-label": getI18nString("assets_in_actions.clear_search_tag", {
          tagType: t
        }),
        children: jsx(_$$f, {
          style: i
        })
      })]
    });
  }
  let tE = atomStoreManager.get(dd);
  let ty = useMemo(() => _$$D(tc.activeTab, th), [th, tc.activeTab]);
  let tb = useMemo(() => {
    let e = {
      entryPoint: ez,
      session_id: tE || "",
      assets_tab_type: ty
    };
    return tc.activeTab === Qx.COMMUNITY ? {
      search_id: K?.searchId || "",
      query_type: K?.input.type,
      query_text: K?.input.type === "input-text" ? K?.input.value : void 0,
      query_node_id: K?.input.type === "input-selection" ? K?.input.node.guid : void 0,
      ...e
    } : th === qG.DESIGNS ? {
      search_id: C?.searchId || "",
      query_type: C?.input.type,
      query_text: C?.input.type === "input-text" ? C?.input.value : void 0,
      query_node_id: C?.input.type === "input-selection" ? C?.input.node.guid : void 0,
      ...e
    } : {
      search_id: currentSearch?.queryId || "",
      query_type: currentSearch?.input.type,
      query_text: currentSearch?.input.type === "input-text" ? currentSearch.input.query : "",
      query_node_id: currentSearch?.input.type === "input-selection" ? currentSearch.input.node.guid : "",
      ...e
    };
  }, [ez, tE, ty, tc.activeTab, th, currentSearch, K, C]);
  let tT = useCallback(e => {
    let [t] = e;
    t.isIntersecting && analyticsEventManager.trackDefinedEvent("fragment_search.assets_details_panel_reached_bottom_of_scroll", {
      ...tb,
      is_community_fragment_search: tc.activeTab === Qx.COMMUNITY
    });
  }, [tb, tc.activeTab]);
  let tI = useCallback(e => {
    let t = new IntersectionObserver(tT, {
      threshold: 1
    });
    e && t.observe(e);
    return () => {
      t.disconnect();
    };
  }, [tT]);
  let tS = useCallback(t => {
    if (!e) switch (t) {
      case Qx.PLAN_FILE_ASSETS:
        _cancelDebouncedFragmentTextSearch();
        kN(er) && (debouncedAssetSearch(er, ti), flushDebouncedAssetSearch());
        Q && G1(er) && (debouncedFragmentTextSearch(er), flushDebouncedFragmentTextSearch());
        break;
      case Qx.COMMUNITY:
        Q && cancelDebouncedFragmentTextSearch();
        cancelDebouncedAssetSearch();
        G1(er, !0) && (_debouncedFragmentTextSearch(er), _flushDebouncedFragmentTextSearch());
        break;
      default:
        throwTypeError(t);
    }
    tc.setActiveTab(tl[t].id);
    analyticsEventManager.trackDefinedEvent("asset_search.actions_search_panel_open", {
      ...tb,
      assets_tab_type: _$$D(t, th)
    });
    eF.current?.focus();
    _$$k3();
  }, [ti, e, tc, tl, tb, th, _cancelDebouncedFragmentTextSearch, er, Q, debouncedAssetSearch, flushDebouncedAssetSearch, debouncedFragmentTextSearch, flushDebouncedFragmentTextSearch, cancelDebouncedFragmentTextSearch, cancelDebouncedAssetSearch, _debouncedFragmentTextSearch, _flushDebouncedFragmentTextSearch]);
  let tv = useCurrentPrivilegedPlan("ActionsSearchResultsView").unwrapOr(null);
  let tA = tv?.name;
  let tx = selectCurrentFile();
  let tN = tA || tx?.name;
  let tC = tN && tN.length > 20;
  let tw = jsxs(fu, {
    value: tc.activeTab,
    onChange: noop,
    numItems: to ? 2 : 1,
    children: [jsx(oz, {
      tabId: Qx.PLAN_FILE_ASSETS,
      onAction: () => tS(Qx.PLAN_FILE_ASSETS),
      htmlAttributes: tC ? {
        "data-tooltip": tN,
        "data-tooltip-type": KindEnum.TEXT
      } : void 0,
      children: tN && truncate(tN, 20)
    }), jsx(oz, {
      tabId: Qx.COMMUNITY,
      onAction: () => tS(Qx.COMMUNITY),
      children: renderI18nText("assets_in_actions.detail_view.community_tab.title")
    })]
  });
  let tO = useIsLoading(fi);
  let tR = g5(FDocumentType.Design).productComponents;
  let tL = !currentSearch && !tO && (!tR.length || shouldHideRecents());
  let tP = !Q || tL;
  let tD = recentFragments ? recentFragments.length : 0;
  let tk = !th || th === qG.COMPONENTS;
  let tM = !th && !tP && (!!C || tD > 0) || th === qG.DESIGNS;
  let tF = Q && (!th || th === qG.DESIGNS);
  let tj = tP || !!th;
  let tU = tc.activeTab === Qx.PLAN_FILE_ASSETS;
  let tB = tc.activeTab === Qx.COMMUNITY;
  let tG = useCallback(e => {
    ei(e);
    eu(generateUUIDv4());
    tk && (tU || 0 === e.length) && debouncedAssetSearch(e, ti);
    tF && (tU || 0 === e.length) && debouncedFragmentTextSearch(e);
    (tB || 0 === e.length) && _debouncedFragmentTextSearch(e);
  }, [ti, ei, eu, tU, tB, debouncedAssetSearch, debouncedFragmentTextSearch, _debouncedFragmentTextSearch, tk, tF]);
  let tV = currentSearch?.queryId;
  let tH = C?.searchId;
  let tz = K?.searchId;
  let tW = useCallback(() => tU && tF ? tH : tB ? tz : void 0, [tH, tz, tF, tU, tB]);
  let tK = useCallback(() => {
    if (tU && tk) return tV;
  }, [tV, tU, tk]);
  let tY = useCallback((e, t, r, n, i, a) => {
    let s;
    let o = tB ? K : tk ? currentSearch : C;
    tB && K?.input.type === "input-text" ? s = K?.input.value : tk && currentSearch?.input.type === "input-text" ? s = currentSearch?.input.query : C?.input.type === "input-text" && (s = C?.input.value);
    trackEventAnalytics("Search Feedback", {
      feedbackType: e,
      feedback: t,
      activeTab: ty,
      clientLifecycleId: r,
      entryPoint: n,
      fileKey: i,
      inputText: s,
      inputType: o?.input.type,
      queryId: tK(),
      searchId: tW(),
      sessionId: a
    });
  }, [C, currentSearch, K, tK, tW, tB, tk, ty]);
  let t$ = useCallback((e, t) => {
    tY(e.toString(), t, eB.clientLifecycleId, ez, eB.file_key, eB.quick_actions_session_id);
  }, [tY, eB, ez]);
  let tX = useCallback((e, t) => {
    tY(e.toString(), t, eB.clientLifecycleId, ez, eB.file_key, eB.quick_actions_session_id);
  }, [tY, eB, ez]);
  let tq = _$$s3();
  useSingleEffect(() => (analyticsEventManager.trackDefinedEvent("asset_search.actions_search_panel_open", {
    ...tb
  }), () => {
    $$eL4(atomStoreManager.get(Q8), noop, Q, !0, tq, G4.ACTIONS_ASSETS_TAB_DETAIL);
    atomStoreManager.set(q4);
    ta({
      type: _$$I.ALL
    });
  }));
  let tJ = (() => {
    switch (tc.activeTab) {
      case Qx.PLAN_FILE_ASSETS:
        return tV;
      case Qx.COMMUNITY:
        return tz;
      default:
        throwTypeError(tc.activeTab);
    }
  })();
  let tZ = e ? "visualSearchView" : "assetsDetailView";
  let tQ = !K || "disabled" === K.result.status;
  if (e && tQ) return jsx(o1, {
    aiTrackingContext: eB
  });
  let t0 = eq && (er.length > 0 || e);
  let t1 = !t0 && (th === qG.COMPONENTS || !Q) && er.length > 0;
  let t2 = th === qG.DESIGNS && !!C;
  return jsxs(_$$n, {
    additionalFeedbackCallback: tX,
    aiTrackingContext: eB,
    bodyFontMedium: !0,
    dataTestId: tZ,
    gatherFeedback: !0,
    height: 480,
    rateOutputStrOverride: getI18nString("qa.rate_output_helpful"),
    recordingKey: tZ,
    sentimentFeedbackCallback: t$,
    width: parsePxNumber(_$$X),
    children: [e && jsx(_$$t3, {
      ref: eD
    }, tJ), jsx(_$$n.Header, {
      children: jsxs("div", {
        className: cssBuilderInstance.flex.flexColumn.$,
        ref: ej,
        children: [e ? jsx(eP, {
          searchTag: tg ? tf(th) : void 0,
          closeOnEscape: _
        }) : jsx(vj, {
          ref: eF,
          searchQuery: er,
          onSearchChange: tG,
          forceRoot: _,
          onClear: () => {
            tm(void 0);
            ei("");
            clearAssetSearchAndCancelDebounce();
            Q && clearFragmentSearchAndCancelDebounce();
            _clearFragmentSearchAndCancelDebounce();
          },
          onPaste: e => $$eM3(e),
          endEnhancer: jsx($$ek2, {
            entryPoint: ez,
            aiTrackingContext: eB,
            activeTab: tc.activeTab === Qx.PLAN_FILE_ASSETS && et ? xA.COMPONENTS : xA.COMMUNITY
          }),
          placeholder: eR,
          searchTag: tg ? tf(th) : void 0
        }), to && jsx("div", {
          className: cssBuilderInstance.if(e, cssBuilderInstance.py4).px8.if(!e, cssBuilderInstance.pb8).$,
          children: jsxs(LayoutContainer, {
            primary: !1,
            gap: 8,
            align: "center",
            fullWidth: !0,
            justify: "space-between",
            children: [jsx("div", {
              children: tw
            }), jsx(Tabs.TabPanel, {
              ...td[Qx.PLAN_FILE_ASSETS],
              children: jsxs("div", {
                className: cssBuilderInstance.if(!e, cssBuilderInstance.h24).if(e, cssBuilderInstance.h32).flex.itemsCenter.$,
                children: [t1 && jsx(_$$i, {
                  onSetAssetType: t => {
                    if (currentSearch) switch (currentSearch.input.type) {
                      case "input-image":
                      case "input-selection":
                        if (!e) throw Error("Cannot run text search on visual input");
                        ta(t);
                        ES({
                          ...currentSearch.input,
                          assetTypeOption: t
                        });
                        return;
                      case "input-text":
                        if (e) throw Error("Cannot run visual search on text input");
                        ta(t);
                        debouncedAssetSearch(er, t);
                        flushDebouncedAssetSearch();
                        return;
                      default:
                        throwTypeError(currentSearch.input);
                    }
                  },
                  value: ti,
                  dropdownDataTestId: ts,
                  recordingKey: ts,
                  showTooltipOnEllipsis: !0
                }), t2 && jsx(_$$s2, {
                  containerRef: ej,
                  entryPoint: ez
                })]
              })
            }), jsx(Tabs.TabPanel, {
              ...td[Qx.COMMUNITY],
              children: jsx("div", {
                className: cssBuilderInstance.if(!e, cssBuilderInstance.h24).if(e, cssBuilderInstance.h32).flex.itemsCenter.$
              })
            })]
          })
        })]
      })
    }), jsx(_$$n.Body, {
      children: jsxs(wg.Provider, {
        value: {
          activeTabId: tc.activeTab
        },
        children: [to && jsx(Tabs.TabPanel, {
          ...td[Qx.PLAN_FILE_ASSETS],
          children: jsx(ZD.Provider, {
            value: {
              activeSearchTag: th
            },
            children: jsx(_$$q2, {
              children: eq && !Q ? jsx(_$$S3, {
                fillHeight: !0,
                children: jsx(Ee, {
                  onClickExplore: close,
                  fromActionsModal: !0,
                  width_ui3: 264,
                  bgTransparentUI3: !0
                })
              }) : jsxs("div", {
                className: y()(cssBuilderInstance.gap6.if(tj, cssBuilderInstance.hFull).$),
                children: [tk && jsx(_$$O, {
                  onLoadStateChange: eH,
                  header: !th && Q ? {
                    title: getI18nString("assets_in_actions.assets_section.title"),
                    icon: jsx(_$$k, {}),
                    seeMore: t0 ? e0 : {
                      title: getI18nString("assets_in_actions.see_more_button"),
                      onAction: () => {
                        analyticsEventManager.trackDefinedEvent("asset_search.actions_search_panel_open", {
                          ...tb,
                          assets_tab_type: _$$D(Qx.PLAN_FILE_ASSETS, qG.COMPONENTS)
                        });
                        analyticsEventManager.trackDefinedEvent("asset_search.see_more", {
                          ...tb
                        });
                        tm(qG.COMPONENTS);
                      },
                      recordingKey: tZ + ".assetsSeeMore"
                    }
                  } : void 0,
                  numberOfGridColumns: 5,
                  maxResults: !th && Q ? 5 : void 0,
                  stretchEmptyStates: tj,
                  noLibraries: t0,
                  assetInsertionCallback: h
                }), tM && jsx(_$$M, {
                  entryPoint: ez,
                  focusHandle: e ? eD : eF,
                  forceLoadingState: eG,
                  header: th ? void 0 : {
                    title: getI18nString("assets_in_actions.fragments_section.title"),
                    icon: jsx(_$$q, {}),
                    seeMore: {
                      title: getI18nString("assets_in_actions.see_more_button"),
                      onAction: () => {
                        analyticsEventManager.trackDefinedEvent("asset_search.actions_search_panel_open", {
                          ...tb,
                          assets_tab_type: _$$D(Qx.PLAN_FILE_ASSETS, qG.DESIGNS)
                        });
                        trackEventAnalytics("Fragment search see more", {
                          ...d3(ez, tE, C ? C.searchId : "", C ? C.input : null, !1, void 0, !1)
                        });
                        tm(qG.DESIGNS);
                      },
                      recordingKey: tZ + ".fragmentsSeeMore"
                    }
                  },
                  initialState: e ? void 0 : {
                    type: "recents",
                    recents: recentFragments
                  },
                  isCommunity: !1,
                  lastSearchResultRef: tI,
                  maxResults: th ? void 0 : 3,
                  numberOfGridColumns: 3,
                  stretchEmptyStates: tj
                })]
              })
            }, tV)
          })
        }), jsx(Tabs.TabPanel, {
          ...td[Qx.COMMUNITY],
          children: jsx(_$$q2, {
            children: jsx(_$$M, {
              header: !K && recommendedHubFileFragments && recommendedHubFileFragments.length > 0 ? {
                title: getI18nString("assets_in_actions.recommended_fragments_header"),
                primaryText: !0,
                px: 12
              } : void 0,
              focusHandle: e ? eD : eF,
              numberOfGridColumns: 3,
              stretchEmptyStates: !0,
              isCommunity: !0,
              initialState: {
                type: "recents",
                recents: recommendedHubFileFragments
              },
              entryPoint: ez,
              lastSearchResultRef: tI,
              hubFileFragmentInsertionCallback: m
            })
          }, tz)
        })]
      })
    }, eU)]
  });
}
export function $$eL4(e, t, r, n, i, a) {
  let s = atomStoreManager.get(dd);
  let o = atomStoreManager.get(openFileKeyAtom);
  if (!s || !o) return;
  let {
    currentSearch
  } = atomStoreManager.get(WP);
  let d = currentSearch?.input.assetTypeOption;
  let c = atomStoreManager.get(CZ);
  let u = atomStoreManager.get(hO.sortByAtom);
  let p = d?.type !== _$$I.ALL;
  e && (r && (G1(e) || c || "percent_match" !== u) && Hl({
    type: "input-text",
    value: e,
    file_key: o
  }, a), (kN(e) || p) && ES({
    type: "input-text",
    query: e,
    assetTypeOption: {
      type: _$$I.ALL
    },
    isKnownLibrary: i
  }), n && G1(e, !0) && Hl({
    type: "input-text",
    value: e,
    file_key: o
  }, a, void 0, void 0, void 0, !0));
  t();
}
function eP({
  searchTag: e,
  closeOnEscape: t = !1
}) {
  let r;
  let a = useAtomWithSubscription(hO.currentCommunitySearchAtom);
  let s = Ko();
  let o = useRef(null);
  let l = _$$U();
  switch (a?.input.type) {
    case "input-image":
      r = a.input.imageFile.name;
      break;
    case "input-selection":
      r = a.input.name;
      break;
    default:
      r = void 0;
  }
  _$$z(t);
  return jsx("div", {
    className: cssBuilderInstance.flex.itemsCenter.justifyBetween.py12.if(s, cssBuilderInstance.bSolid.bb1.colorBorder).if(t, cssBuilderInstance.px12, cssBuilderInstance.px8).$,
    ref: o,
    children: jsxs("div", {
      className: cssBuilderInstance.flex.gap6.itemsCenter.$,
      children: [!t && jsx(_$$o, {
        recordingKey: generateRecordingKey(l, "backButton")
      }), jsx(TextWithTruncation, {
        fontSize: 13,
        children: renderI18nText("fragment_search.visual_search_results_title")
      }), jsx(TextWithTruncation, {
        fontSize: 13,
        color: "secondary",
        children: r
      }), e]
    })
  });
}
export function $$eD0() {
  $I({
    moduleToOpen: {
      type: "tab",
      module: AssetTabType.ASSETS
    },
    trackingData: {
      source: "onboarding_tour_visual_search_callout"
    }
  });
}
export function $$ek2({
  entryPoint: e,
  aiTrackingContext: t,
  activeTab: r,
  recordingKey: a
}) {
  let s = useRef(null);
  let {
    active
  } = usKeyboardFocusHandler({
    ref: s,
    focusOptions: {
      enableAutoFocus: !1
    }
  });
  let d = useRef(null);
  let c = useCallback(() => {
    e === G4.FIGMAKE ? (trackEventAnalytics("Visual search in search bar clicked", {
      has_selection: getSingletonSceneGraph().getCurrentPage()?.directlySelectedNodes?.length === 1,
      session_id: atomStoreManager.get(dd),
      entry_point: e
    }), d.current?.click()) : function (e) {
      trackEventAnalytics("Visual search in search bar clicked", {
        has_selection: getSingletonSceneGraph().getCurrentPage()?.directlySelectedNodes?.length === 1,
        session_id: atomStoreManager.get(dd)
      });
      XG({
        action: "find-inspiration",
        isSearchResult: !1,
        searchPosition: null,
        numSearchResults: null,
        rankingAlgorithm: null,
        moduleFilters: null
      });
      let t = e === xA.COMMUNITY ? Qx.COMMUNITY : Qx.PLAN_FILE_ASSETS;
      $I({
        moduleToOpen: {
          type: "custom",
          module: P5() ? jsx($$eR6, {
            initialTab: t,
            isVisualSearch: !0
          }) : jsx(WS, {
            initialTab: e
          }),
          beforeModuleOpen: () => jp(G4.ACTIONS_SEARCH_BAR_ICON),
          name: ExtensionFeatureKey.VISUAL_SEARCH
        },
        trackingData: {
          source: "search_bar_visual_search_button"
        }
      });
    }(r);
  }, [e, r]);
  return jsxs(Fragment, {
    children: [jsx(xC, {
      aiTrackingContext: t,
      ref: d
    }), jsx(ButtonPrimitive, {
      ref: s,
      "aria-label": getI18nString("fragment_search.visual_search_icon_button_tooltip"),
      onClick: c,
      htmlAttributes: getFeatureFlags().fragment_search_tweaks ? {
        "data-tooltip-type": KindEnum.SPECIAL,
        "data-tooltip-show-above": !0,
        "data-tooltip": _$$S2,
        "data-tooltip-ai-beta-text": getI18nString("fragment_search.visual_search_icon_button_tooltip_with_beta_tag"),
        "data-tooltip-ai-beta-action": JT.FIND_INSPIRATION
      } : {
        "data-tooltip": getI18nString("fragment_search.visual_search_icon_button_tooltip"),
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip-show-above": !0
      },
      recordingKey: a,
      className: y()(_$$g3, {
        [_$$H2]: active
      }),
      children: getFeatureFlags().fragment_search_tweaks ? jsx(_$$T, {}) : jsx(_$$A, {})
    })]
  });
}
export function $$eM3(e) {
  let t = e.clipboardData.files;
  if (1 === t.length && t[0]?.type.startsWith("image/")) {
    let r = t[0];
    e.preventDefault();
    $I({
      moduleToOpen: {
        type: "custom",
        module: getFeatureFlags().hub_file_fragments ? jsx($$eR6, {
          isVisualSearch: !0,
          closeOnEscape: !0
        }) : jsx(WS, {}),
        beforeModuleOpen: () => qF(G4.ACTIONS_SEARCH_BAR_PASTED_IMAGE, r),
        name: ExtensionFeatureKey.VISUAL_SEARCH
      },
      trackingData: {
        source: G4.ACTIONS_SEARCH_BAR_PASTED_IMAGE
      }
    });
  }
}
export const Bd = $$eD0;
export const Km = $$ew1;
export const hc = $$ek2;
export const jk = $$eM3;
export const mX = $$eL4;
export const wU = $$eO5;
export const z6 = $$eR6;