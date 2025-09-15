import { l as _$$l } from "../5430/135184";
import { y as _$$y } from "../5430/85086";
import { G as _$$G } from "../5430/796068";
import { X as _$$X } from "../5430/169009";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef, useCallback, useEffect, useMemo, createElement, useContext } from "react";
import n, { useAtomValueAndSetter } from "../figma_app/27355";
import o from "classnames";
import { usePrefersMediaQuery } from "../figma_app/469468";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { H as _$$H } from "../5430/816957";
import { Lj } from "../figma_app/835219";
import { mapTemplateCategoryToFileType, getCurrentVersion, $l, buildCommunityPathById, getCommunityPathSegments, mapResourceTypePlural, fitsInViewer, getEmbedType, buildFullCommunityUrl } from "../figma_app/471982";
import { isResourceHubProfilesEnabled, isComponentViewerEnabled, isRelatedContentExperimentEnabled } from "../figma_app/275462";
import { M as _$$M } from "../905/722875";
import { isApplePublisherAccepted, isFigmaPublisherAccepted, getResourceName, getResourceDescription } from "../figma_app/777551";
import { hasContent, getMainContent, isUIKitLibrary, isPluginResource, isPluginOrWidget, isSiteTemplate, hasHubFile, getResourceType, getPluginOrWidgetContent, getHubFile, isFigmakeTemplate, isMonetizedFigJamTemplate, isSlideTemplate, isWidgetResource, hasResourceType, isCooperTemplateFile } from "../figma_app/427318";
import { Ay } from "../905/506641";
import { $O, bK } from "../figma_app/701107";
import { w3, YW } from "../figma_app/350203";
import { uS, CW, e5 as _$$e } from "../figma_app/740025";
import { hasHubFileOrPresetKey } from "../figma_app/255679";
import { Z4 } from "../figma_app/809727";
import { e0 as _$$e2 } from "../905/696396";
import { Q as _$$Q } from "../5430/662041";
import { T as _$$T } from "../5132/203178";
import { R as _$$R } from "../5430/129716";
import { A as _$$A } from "../5430/202447";
import { AuthFlowStep } from "../905/862321";
import { FL } from "../figma_app/248365";
import { b as _$$b } from "../5430/872214";
import { A as _$$A2 } from "../vendor/850789";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { IW } from "../figma_app/563413";
import { lH, r4 } from "../figma_app/229259";
import { o as _$$o } from "../905/451156";
import { LoadingSpinner } from "../figma_app/858013";
import { Av, Kw, og, LX } from "../figma_app/646357";
import { KindEnum } from "../905/129884";
import { J as _$$J } from "../905/273120";
import { sortByWithOptions, sortByPropertyWithOptions } from "../figma_app/656233";
import { lM, dm } from "../figma_app/463500";
import { SvgComponent } from "../905/714743";
import { nh } from "../figma_app/707943";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { zi, iL } from "../905/824449";
import ed from "../svg/56418";
import { Ay as _$$Ay, xk } from "@stylexjs/stylex";
import { getFeatureFlags } from "../905/601108";
import { xf } from "../figma_app/416935";
import { h1 } from "../905/986103";
import { getSubscriptionPriceString } from "../figma_app/808294";
import { hasClientMeta, hasMonetizedResourceMetadata, hasFreemiumCode, isThirdPartyMonetized, isPlugin } from "../figma_app/45218";
import { dx } from "../5430/309696";
import { OJ } from "../905/519092";
import { F as _$$F } from "../5430/373843";
import { k as _$$k2 } from "../5430/846627";
import { C2, Gx, J3 } from "../figma_app/699310";
import { _ as _$$_ } from "../905/574895";
import { A as _$$A3 } from "../905/72153";
import { FRequestStatusType, FTemplateCategoryType } from "../figma_app/191312";
import { isDevModeWithCodegen, getPluginVersion } from "../figma_app/300692";
import { ZA as _$$ZA } from "../figma_app/994403";
import { u as _$$u } from "../905/952696";
import { b as _$$b2, X as _$$X2 } from "../5430/435821";
import { qS, Uk, DV as _$$DV, cV } from "../figma_app/356510";
import { A as _$$A4 } from "../svg/638213";
import { z as _$$z } from "../5430/158228";
import { UH, G as _$$G2, Ev, tx as _$$tx2, Rc, D9, OC, $h, tJ, hV } from "../5430/920085";
import { A as _$$A5 } from "../5724/663128";
import { useDispatch } from "react-redux";
import { C as _$$C } from "../905/222694";
import { trackEventAnalytics } from "../905/449184";
import { ContentFilterType } from "../figma_app/70618";
import { V as _$$V } from "../905/480825";
import { Ho } from "../figma_app/878651";
import { A6 } from "../905/350234";
import { Wi, JR } from "../figma_app/162641";
import { GS } from "../5430/342380";
import { $ as _$$$ } from "../5430/953899";
import { A as _$$A6 } from "../5430/728674";
import { AG } from "../figma_app/999312";
import { L as _$$L, I as _$$I } from "../1577/16430";
import { k as _$$k3 } from "../905/443820";
import { Button } from "../905/521428";
import { ButtonPrimitive } from "../905/632989";
import { LinkPrimitive } from "../figma_app/496441";
import { B as _$$B2 } from "../905/950875";
import { T as _$$T2 } from "../5430/528285";
import { V as _$$V2 } from "../1577/311426";
import { CW as _$$CW, P1 } from "../5430/201744";
import { R as _$$R2 } from "../905/792510";
import { getValueOrFallback } from "../905/872825";
import { getCurrentLocale } from "../figma_app/598412";
import { LJ } from "../figma_app/930386";
import { categoryBySlugQuery } from "../figma_app/188671";
import { BrowseCategoryRoute } from "../figma_app/805898";
import { n6 } from "../figma_app/600006";
import { TrackedLink } from "../figma_app/831799";
import { Pr, Pc, Tc, Cy, AT } from "../figma_app/950781";
import { u as _$$u2 } from "../5430/533104";
import { MW, Vj, k9, p9, sB as _$$sB, oj, iS, X$, BE, zu, ok, zt, lt } from "../5430/658869";
var a = o;
let u = _$$X;
function A() {
  return jsx(_$$b, {
    onClick: () => FL(AuthFlowStep.SIGN_UP, {
      preventDefaultRedirect: !0
    }),
    isResourceLiked: !1
  });
}
let W = "library_detail_page_viewer--libraryViewerComponentsViewContainer--ZKW-s";
let G = "library_detail_page_viewer--libraryViewerComponentsSideBar---vECP";
let $ = "library_detail_page_viewer--libraryViewerComponentsSideBarButtonSelected--USsCQ";
let z = "library_detail_page_viewer--libraryViewerComponentsSideBarButton--0ve16 text--fontPos11--2LvXf text--_fontBase--QdLsd";
let Q = "library_detail_page_viewer--libraryViewerComponentsSection--NQG-W";
let Z = "library_detail_page_viewer--libraryViewerStylesViewContainer--zQeq3";
let q = "library_detail_page_viewer--loadingSpinner--ijlFM";
function Y(e) {
  let {
    pageIds,
    itemsByPageId,
    topLevelComponents,
    isLoading,
    numSearchResultsText
  } = e;
  let [d, u] = useState(topLevelComponents.length > 0 || 0 === pageIds.length ? null : pageIds[0]);
  let m = useRef({});
  let _ = useRef(null);
  let p = useRef(null);
  let h = useRef(null);
  let x = useCallback(e => {
    let t = m.current[e];
    if (t && _.current) {
      let e = t.offsetTop - _.current.offsetTop - t.offsetHeight;
      _.current.scrollTo({
        top: e
      });
    }
  }, []);
  useEffect(() => {
    let e = h.current;
    let t = p.current;
    e && t && (e.offsetTop < t.scrollTop ? t.scrollTo({
      behavior: "smooth",
      top: e.offsetTop
    }) : e.offsetTop > t.scrollTop + t.offsetHeight && t.scrollTo({
      behavior: "smooth",
      top: e.offsetTop - t.offsetTop - t.offsetHeight / 2
    }));
  }, [d]);
  useEffect(() => {
    if (!window.IntersectionObserver || !_.current || !m.current) return;
    let e = {};
    let r = _.current.offsetHeight;
    let s = new IntersectionObserver(e => {
      e.forEach(e => {
        e.isIntersecting && u(e.target.id);
      });
    }, {
      root: _.current,
      rootMargin: `0px 0px -${r / 2}px 0px`,
      threshold: [.6]
    });
    for (let e of pageIds) {
      let t = m.current[e];
      t && s.observe(t);
    }
    return () => {
      s.disconnect();
    };
  }, [pageIds, m, _, u]);
  let f = jsxs("div", {
    className: "library_detail_page_viewer--libraryViewerComponentsContent--i0cL6",
    style: {
      paddingBottom: pageIds.length > 2 ? "72px" : "12px"
    },
    ref: _,
    children: [numSearchResultsText, topLevelComponents.length > 0 && jsx("div", {
      className: Q,
      children: jsx(X, {
        items: topLevelComponents
      })
    }), pageIds.map(e => {
      let t = itemsByPageId[e];
      let i = t[0];
      return i ? jsxs("div", {
        className: Q,
        children: [jsx("div", {
          className: "library_detail_page_viewer--libraryViewerComponentsSectionHeader--RxA6o text--fontPos13--xW8hS text--_fontBase--QdLsd",
          id: e,
          ref: t => m.current[e] = t,
          children: i.containing_frame?.pageName
        }), jsx(X, {
          items: t
        })]
      }) : null;
    })]
  });
  let y = useCallback(e => {
    x(e);
    u(e);
  }, [x]);
  let g = jsx("div", {
    className: G,
    ref: p,
    children: pageIds.map(e => {
      let t = e === d;
      let i = itemsByPageId[e][0].containing_frame?.pageName;
      return i && jsx("div", {
        ref: t ? h : void 0,
        className: _$$s.wFull.$,
        children: jsx("button", {
          className: a()(z, {
            [$]: t
          }),
          onClick: t => {
            t.preventDefault();
            y(e);
          },
          children: i
        })
      }, e);
    })
  });
  return isLoading ? jsxs("div", {
    className: W,
    children: [g, jsx(LoadingSpinner, {
      className: q
    })]
  }) : jsxs("div", {
    className: W,
    children: [g, f]
  });
}
function X({
  items: e
}) {
  let t = e.map(e => jsx(J, {
    component: e
  }, Av(e)));
  return jsx("div", {
    className: "library_detail_page_viewer--libraryViewerComponentTileGroup--20ei3",
    children: t
  });
}
function J({
  component: e
}) {
  return jsx("div", {
    className: "library_detail_page_viewer--libraryViewerComponentTile--R5qQm",
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": e.name,
    children: jsx("div", {
      className: "library_detail_page_viewer--libraryViewerComponentThumbnailWrapper--P2sR3",
      children: jsx(_$$J, {
        className: "library_detail_page_viewer--libraryViewerComponentThumbnail--XVZpN",
        src: e.thumbnail_url,
        draggable: !1
      })
    })
  });
}
var et = (e => (e.COMPONENTS = "components", e.STYLES = "styles", e))(et || {});
function er(e) {
  let t = {};
  let r = [];
  let s = [];
  if (e && e.length > 0) {
    for (let s of e) {
      let e = s.containing_frame?.pageId;
      e ? (t[e] ??= [], t[e].push(s)) : r.push(s);
    }
    s = Object.keys(t);
    sortByWithOptions(s, e => t[e][0].containing_frame?.pageName);
    sortByPropertyWithOptions(r, "name");
    s.map(e => {
      let r = t[e];
      sortByPropertyWithOptions(r, "name");
    });
  }
  return {
    itemsByPageId: t,
    topLevelComponents: r,
    pageIds: s
  };
}
function es(e) {
  if (!e || 0 === e.length) return new Map();
  let t = Kw(e);
  let r = new Map();
  og.map(e => {
    let s = t.get(e);
    if (s) {
      LX(s);
      let t = lM(s, e);
      let i = new Map();
      for (let e of (i.set(t, t.styles), t.subfolders)) i.set(e, dm(e));
      r.set(e, i);
    }
  });
  return r;
}
function el({
  foldersAndStylesByType: e,
  isLoading: t,
  numSearchResultsText: r
}) {
  if (t) return jsx("div", {
    className: Z,
    children: jsx(LoadingSpinner, {
      className: q
    })
  });
  let i = [];
  for (let t of e.values()) for (let [e, r] of t) 0 !== r.length && (i.push(jsx(ec, {
    folder: e,
    styleList: r
  }, e.name)), i.push(jsx("div", {
    className: "library_detail_page_viewer--libraryViewerStylesSectionDivider--RTCVD"
  }, e.name.concat("-divider"))));
  i.pop();
  return jsxs("div", {
    className: Z,
    children: [r, i]
  });
}
function ec({
  folder: e,
  styleList: t
}) {
  return jsxs(Fragment, {
    children: [e.name && jsx("div", {
      className: "library_detail_page_viewer--libraryViewerStylesSectionHeader--LjF7q text--fontPos13--xW8hS text--_fontBase--QdLsd",
      children: e?.name
    }), jsx("div", {
      className: "library_detail_page_viewer--libraryViewerStylesList--8HwJW",
      children: t.map(e => jsx("div", {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": e.name,
        children: jsx(zi, {
          dsStyle: e,
          size: iL.Large,
          disableTooltip: !0
        })
      }, e.key))
    })]
  });
}
function eu({
  query: e,
  libraryId: t,
  selectedTabType: r
}) {
  let n = r === et.COMPONENTS;
  let o = n ? [PrimaryWorkflowEnum.COMPONENT, PrimaryWorkflowEnum.STATE_GROUP] : [PrimaryWorkflowEnum.STYLE];
  let [l] = setupResourceAtomHandler(nh({
    query: e,
    libraryId: t,
    assetTypes: o
  }));
  let {
    foldersAndStylesByType,
    itemsByPageId,
    topLevelComponents,
    pageIds,
    hasSearchResults,
    numSearchResults
  } = useMemo(() => {
    let e = {};
    let t = [];
    let r = [];
    let s = new Map();
    if (n) {
      let s = er(l.data);
      e = s.itemsByPageId;
      t = s.topLevelComponents;
      r = s.pageIds;
    } else s = es(l.data);
    return {
      foldersAndStylesByType: s,
      itemsByPageId: e,
      topLevelComponents: t,
      pageIds: r,
      hasSearchResults: l.data && l.data.length > 0,
      numSearchResults: l.data ? l.data.length : 0
    };
  }, [l, n]);
  if ("loaded" === l.status && !hasSearchResults) return jsxs("div", {
    className: n ? W : Z,
    children: [n && jsx("div", {
      className: G,
      children: jsx("div", {
        className: a()(_$$s.wFull.$, z, $),
        children: getI18nString("community.detail_view.library_viewer.search_no_results")
      })
    }), jsxs("div", {
      className: "library_detail_page_viewer--libraryViewerEmptyState--2o6bb",
      children: [jsx(SvgComponent, {
        svg: ed,
        useOriginalSrcFills_DEPRECATED: !0,
        className: "library_detail_page_viewer--libraryViewerEmptyIcon--6OLZt"
      }), jsx("div", {
        className: _$$s.flexRow.$,
        children: renderI18nText("search.empty_state.no_results_matching", {
          searchQuery: jsx("span", {
            className: _$$s.fontBold.$,
            children: e
          })
        })
      })]
    })]
  });
  let f = jsx("div", {
    className: n ? _$$s.flexRow.mb8.$ : _$$s.flexRow.mb16.$,
    children: renderI18nText("community.detail_view.library_viewer.search_results_num", {
      numResults: numSearchResults,
      query: jsx("span", {
        className: _$$s.fontBold.$,
        children: e
      })
    })
  });
  return n ? jsx(Y, {
    pageIds,
    itemsByPageId,
    topLevelComponents,
    isLoading: "loading" === l.status,
    numSearchResultsText: f
  }) : jsx(el, {
    foldersAndStylesByType,
    isLoading: "loading" === l.status,
    numSearchResultsText: f
  });
}
function em({
  libraryId: e
}) {
  let [t, r] = useState(et.COMPONENTS);
  let [n, o] = useState("");
  let [a] = _$$A2(n, 300, {
    trailing: !0,
    leading: !1
  });
  let [l] = setupResourceAtomHandler(lH({
    hubFileId: e
  }));
  let c = useMemo(() => es("loaded" === l.status ? l.data : []), [l]);
  let [d] = setupResourceAtomHandler(r4(e));
  let {
    itemsByPageId,
    topLevelComponents,
    pageIds
  } = useMemo(() => er("loaded" === d.status ? d.data : []), [d]);
  return jsxs("div", {
    className: "library_detail_page_viewer--libraryViewerContainer--N5xtS",
    children: [jsx(e_, {
      selectedTabType: t,
      setSelectedTabType: r,
      query: a,
      setSearchQuery: o
    }), 0 === a.trim().length && t === et.COMPONENTS && jsx(Y, {
      pageIds,
      itemsByPageId,
      topLevelComponents,
      isLoading: "loading" === d.status
    }), 0 === a.trim().length && t === et.STYLES && jsx(el, {
      foldersAndStylesByType: c,
      isLoading: "loading" === l.status
    }), a.length > 0 && jsx(eu, {
      query: a,
      libraryId: e,
      selectedTabType: t
    })]
  });
}
function e_({
  selectedTabType: e,
  setSelectedTabType: t,
  query: r,
  setSearchQuery: i
}) {
  return jsxs("div", {
    className: "library_detail_page_viewer--libraryViewerHeader--m7ZFH",
    children: [jsxs("div", {
      className: "library_detail_page_viewer--libraryViewerTabsContainer--SDkI8",
      children: [jsx(eh, {
        tab: et.COMPONENTS,
        selectedTab: e,
        onClick: () => {
          t(et.COMPONENTS);
        },
        children: getI18nString("community.detail_view.library_viewer.components_tab")
      }), jsx(eh, {
        tab: et.STYLES,
        selectedTab: e,
        onClick: () => {
          t(et.STYLES);
        },
        children: getI18nString("community.detail_view.library_viewer.styles_tab")
      })]
    }), jsx(ep, {
      query: r,
      setSearchQuery: i
    })]
  });
}
function ep({
  query: e,
  setSearchQuery: t
}) {
  let r = useRef(null);
  let n = useCallback(e => {
    t(e);
  }, [t]);
  let o = useCallback(() => {
    n("");
  }, [n]);
  return jsx(IW, {
    ref: r,
    className: "library_detail_page_viewer--libraryViewerSearchBar--x-K2j",
    focusOnMount: !1,
    query: e,
    placeholder: getI18nString("community.detail_view.library_viewer.search_placeholder"),
    clearSearch: o,
    onChange: n,
    hideXIcon: !0
  });
}
class eh extends _$$o {
  constructor() {
    super(...arguments);
    this.styleOverrides = () => ({
      base: "library_detail_page_viewer--libraryViewerTab--f43dq text--fontPos13--xW8hS text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa",
      selected: "library_detail_page_viewer--libraryViewerTabSelected--t5nZk",
      unselected: "library_detail_page_viewer--libraryViewerTabUnselected--mE3MK"
    });
    this.applyDefaultStyles = () => !1;
  }
}
let ef = {
  sectionBreak: {
    border: "x1gs6z28",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottom: "x1n5zjp5",
    borderBottomWidth: null,
    borderBottomStyle: null,
    borderBottomColor: null,
    $$css: !0
  },
  short: {
    margin: "xn4w45c",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    $$css: !0
  },
  tall: {
    margin: "xfd2ba4",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    $$css: !0
  }
};
function ey({
  spacing: e = "tall"
}) {
  return jsx("hr", {
    ..._$$Ay.props(ef.sectionBreak, ef[e])
  });
}
let eI = _$$G;
function eF({
  resource: e
}) {
  let t = hasContent(e) ? getMainContent(e) : e;
  if (!t) return null;
  let r = function (e) {
    if (hasContent(e)) return jsx(Fragment, {
      children: e.editor_types.map(t => jsx(_$$_, {
        resourceEditorType: t,
        resourceType: e.resource_type
      }, t))
    });
    if (hasClientMeta(e)) return jsx(_$$_, {
      hubFileEditorType: mapTemplateCategoryToFileType(e.viewer_mode)
    });
    let t = getCurrentVersion(e).manifest.editorType;
    if (t) return jsx(Fragment, {
      children: t.map(e => jsx(_$$_, {
        pluginEditorType: e
      }, e))
    });
  }(e);
  let i = isUIKitLibrary(e) && jsx(eH, {});
  let n = isPluginResource(e) && isDevModeWithCodegen(getCurrentVersion(t)) && jsx(eU, {});
  let o = e.community_publishers.accepted.reduce((e, t) => e.concat(t.badges), []);
  let a = [...new Set(e.badges.concat(o))];
  let l = C2({
    badges: a
  }, !1, !0);
  let c = isPluginOrWidget(e) ? function (e) {
    let t = getCurrentVersion(e).manifest;
    return jsxs(Fragment, {
      children: [jsx(eW, {
        plugin: e
      }), jsx(_$$u, {
        networkAccess: t.networkAccess,
        isWidget: e.is_widget,
        isLearnMoreLinkVisible: !0,
        is24x24: !0
      })]
    });
  }(t) : null;
  let u = isSiteTemplate(e) && jsx(eV, {});
  return jsxs(Fragment, {
    children: [r, i, n, l && jsxs("div", {
      className: qS,
      children: [jsx(Gx, {
        children: l
      }), renderI18nText("community.detail_view.made_by_a_figma_partner")]
    }), c, u]
  });
}
function eH() {
  return jsxs("div", {
    className: qS,
    children: [jsx(SvgComponent, {
      svg: _$$A4,
      svgClassName: Uk,
      useOriginalSrcFills_DEPRECATED: !0
    }), jsx("div", {
      children: getI18nString("community.detail_view.ui_kit")
    })]
  });
}
function eU() {
  return jsxs("div", {
    className: qS,
    children: [jsx(_$$ZA, {
      is24x24: !0
    }), jsx("div", {
      children: getI18nString("community.detail_view.made_for_codegen")
    })]
  });
}
function eV() {
  return jsxs("div", {
    className: qS,
    children: [jsx("div", {
      className: _$$DV,
      children: jsx(_$$k2, {})
    }), jsx("div", {
      children: getI18nString("community.detail_view.site_devices")
    })]
  });
}
function eW({
  plugin: e
}) {
  let t = _$$A3(e.id, !0);
  return jsx(Fragment, {
    children: t.loaded && t.data?.status === FRequestStatusType.APPROVED && jsx(_$$b2, {
      securityFormResponse: t.data,
      entryPoint: _$$X2.COMMUNITY_DETAIL,
      isWidget: e.is_widget,
      is24x24: !0
    })
  });
}
function eG(e) {
  return jsx("div", {
    className: cV,
    children: e.children
  });
}
function eZ({
  monetizedResourceMetadata: e,
  isFreemium: t,
  isOffPlatform: r
}) {
  if (t && e) {
    let t = getSubscriptionPriceString(e);
    return renderI18nText("community.detail_view.in_app_purchases", {
      priceString: t
    });
  }
  return r ? jsxs("div", {
    className: UH,
    children: [renderI18nText("community.detail_view.third_party_badge.off_platform"), jsx(SvgComponent, {
      svg: _$$A5,
      className: _$$G2,
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("community.detail_view.resource_outside_of_figma"),
      "data-tooltip-show-immediately": !0
    })]
  }) : null;
}
function eq(e) {
  let {
    updatedAt,
    paymentInfo,
    supportContact,
    creatorPolicyData,
    license
  } = e;
  let [l, c] = useState(!1);
  let u = n;
  supportContact && (xf(supportContact) ? u = `mailto:${supportContact}` : supportContact.startsWith("https://") || supportContact.startsWith("http://") || (u = `//${supportContact}`));
  return jsxs(_$$z, {
    children: [jsx("div", {
      children: renderI18nText("community.detail_view.last_updated_at_time_stamp", {
        timeStamp: jsx(h1, {
          date: updatedAt
        })
      })
    }), supportContact && jsx("div", {
      className: Ev,
      children: renderI18nText("community.detail_view.support_contact", {
        supportContact: jsx("a", {
          href: u || void 0,
          className: _$$tx2,
          target: "_blank",
          rel: "nooppener noreferrer",
          children: supportContact
        })
      })
    }), paymentInfo, license, getFeatureFlags().cmty_hub_file_creator_policy && creatorPolicyData?.policyText && jsxs("span", {
      children: [jsx("span", {
        role: "button",
        onClick: () => {
          c(!0);
        },
        tabIndex: 0,
        className: Rc,
        children: renderI18nText("community.detail_view.creator_policy")
      }), l && jsx(OJ, {
        title: getI18nString("community.detail_view.creator_policy"),
        maxWidth: 450,
        onClose: () => {
          c(!1);
        },
        allowScroll: !0,
        containerClassName: D9,
        children: jsx("div", {
          className: OC,
          children: jsx("div", {
            className: $h,
            children: renderI18nText("community.detail_view.creator_policy_publisher_name", {
              publisherName: creatorPolicyData.publisherName
            })
          })
        })
      })]
    })]
  });
}
function eY({
  resource: e,
  showBadges: t = !0
}) {
  let r = hasContent(e) ? getMainContent(e) : e;
  if (!r) return null;
  let i = $l(r);
  let n = hasMonetizedResourceMetadata(r);
  let o = n && hasFreemiumCode(r);
  let a = isThirdPartyMonetized(r);
  return jsxs("div", {
    className: tJ,
    "data-testid": "metadata-container",
    children: [t && jsx(eG, {
      children: jsx(eF, {
        resource: e
      })
    }), jsx(eq, {
      updatedAt: i?.created_at ?? "",
      supportContact: e.support_contact,
      license: jsx(_$$F, {
        isMonetizedResource: n,
        isHubFile: hasHubFile(e),
        isAppleResource: isApplePublisherAccepted(e),
        isFigmaResource: isFigmaPublisherAccepted(e)
      }),
      paymentInfo: jsx(eZ, {
        monetizedResourceMetadata: r.monetized_resource_metadata,
        isFreemium: o,
        isOffPlatform: a
      }),
      creatorPolicyData: {
        policyText: i?.creator_policy ?? null,
        publisherName: e.publisher.name
      }
    }), _$$M() ? jsx(eI, {
      resource: e
    }) : null, _$$M() ? jsx(dx, {}) : jsx("a", {
      href: "mailto:content-reviews@figma.com",
      className: hV,
      children: renderI18nText("community.detail_view.report_resource")
    })]
  });
}
let e3 = "related_content--relatedContent--TYPp2";
let e8 = "related_content--relatedContentHeader--gjj-d text--fontPos14--OL9Hp text--_fontBase--QdLsd";
let e5 = "related_content--relatedContentTitle--uylYw";
let e9 = "related_content--relatedContentTile--gwfdU";
let e7 = "related_content--relatedContentTileTitle--DJQmt text--fontPos13--xW8hS text--_fontBase--QdLsd";
function e6({
  resource: e,
  rdpImpressionId: t,
  openLightboxRDP: r
}) {
  let i = useDispatch();
  let n = getCurrentVersion(e);
  let o = e.thumbnail_url;
  let l = !!e.thumbnail_is_set;
  let c = e.viewer_mode === FTemplateCategoryType.WHITEBOARD;
  let d = getFeatureFlags().cmty_thumbnail_16x9_ar;
  let u = buildCommunityPathById({
    resource: e
  });
  return jsxs(A6, {
    to: u,
    className: a()(e9, {
      "related_content--relatedContentTile16to9--6fnkm": d
    }),
    onClick: () => tr(e, t),
    onClickOverride: r ? () => r(i, e.id, "file") : void 0,
    children: [jsx("div", {
      className: l ? "related_content--relatedContentTileImageThumbnailIsSet--ceK9X related_content--relatedContentTileImage--0IZ1a" : "related_content--relatedContentTileImage--0IZ1a",
      style: {
        backgroundColor: _$$C(e.client_meta)
      },
      children: jsx(Ho, {
        hubFileId: e.id,
        image: o,
        isWhiteboard: c,
        isSet: l,
        alt: n.name,
        resizedThumbnailUrls: e.resized_thumbnail_urls
      })
    }), jsx("div", {
      className: e7,
      children: n.name
    })]
  });
}
function te({
  resource: e,
  rdpImpressionId: t,
  openLightboxRDP: r
}) {
  let i = useDispatch();
  let n = getCurrentVersion(e);
  let o = n.redirect_icon_url;
  let a = buildCommunityPathById({
    resource: e
  });
  return jsxs(A6, {
    to: a,
    className: e9,
    onClick: () => tr(e, t),
    onClickOverride: r ? () => r(i, e.id, "plugin") : void 0,
    children: [jsxs("div", {
      className: "related_content--relatedContentTilePluginContentWrapper--ie8pw",
      children: [jsx(_$$V, {
        className: "related_content--relatedContentPluginTileImage--4Jsqh",
        plugin: n
      }), jsx("div", {
        className: "related_content--relatedContentPluginTileImageBlurry--z0-ki related_content--relatedContentPluginTileImage--4Jsqh",
        style: {
          backgroundImage: `url(${o})`
        }
      })]
    }), jsx("div", {
      className: e7,
      children: n.name
    })]
  });
}
function tt({
  resource: e,
  rdpImpressionId: t,
  openLightboxRDP: r
}) {
  let i = useDispatch();
  let n = getCurrentVersion(e);
  let o = n.redirect_snapshot_url;
  let a = buildCommunityPathById({
    resource: e
  });
  return jsxs(A6, {
    to: a,
    className: e9,
    onClick: () => tr(e, t),
    onClickOverride: r ? () => r(i, e.id, "widget") : void 0,
    children: [jsx("div", {
      className: "related_content--relatedContentWidgetTileImage--rY25h related_content--relatedContentTileImage--0IZ1a",
      children: jsx("img", {
        src: o,
        alt: n.name,
        loading: "lazy"
      })
    }), jsx("div", {
      className: e7,
      children: n.name
    })]
  });
}
let tr = (e, t) => {
  trackEventAnalytics("Community Related Content Clicked", {
    community_resource: getResourceType(e),
    community_resource_id: e.id,
    related_content_type: e.related_content?.types.join(","),
    rdp_impression_id: t
  });
};
function ts({
  resourceType: e,
  resourceId: t,
  content: r,
  types: n,
  creators: o,
  rdpImpressionId: a,
  openLightboxRDP: l
}) {
  useEffect(() => {
    trackEventAnalytics("Community Related Content Viewed", {
      communityResource: e,
      communityResourceId: t,
      relatedContentType: n,
      rdp_impression_id: a,
      itemsImpressed: r.map(e => e.id).join(",")
    });
  }, [r.map(e => e.id).join(",")]);
  let c = 1 === n.length && n[0] === ContentFilterType.by_creator ? o.accepted.length > 1 ? getI18nString("community.related_content.more_by_these_creators") : getI18nString("community.related_content.more_by_this_creator") : getI18nString("community.related_content.more_like_this");
  return jsxs("div", {
    className: e3,
    "data-testid": "related-content",
    children: [jsx("div", {
      className: e8,
      children: jsx("div", {
        className: e5,
        children: c
      })
    }), jsx("div", {
      className: "related_content--relatedContentTilesContainer--L8KiC",
      children: r.map(e => {
        let t = e.id;
        return hasClientMeta(e) ? jsx(e6, {
          resource: e,
          rdpImpressionId: a,
          openLightboxRDP: l
        }, t) : isPlugin(e) ? jsx(te, {
          resource: e,
          rdpImpressionId: a,
          openLightboxRDP: l
        }, t) : jsx(tt, {
          resource: e,
          rdpImpressionId: a,
          openLightboxRDP: l
        }, t);
      })
    })]
  });
}
function tl({
  resourceType: e,
  resourceId: t,
  rdpImpressionId: r,
  creators: n
}) {
  let {
    trackResourceImpression
  } = GS();
  let [a, l] = getCommunityPathSegments();
  let [{
    data: c,
    status: u
  }] = setupResourceAtomHandler(_$$$.getRelatedContent({
    resourceType: a,
    contentId: l
  }), {
    enabled: !!(a && l)
  });
  let m = "loading" === u;
  let _ = c?.data?.meta?.content;
  let h = c?.data?.meta?.is_same_creator ?? !1;
  if (useEffect(() => {
    _?.length && trackEventAnalytics("Community Resource Related Content Viewed", {
      resource_type: e,
      resource_id: t,
      is_same_creator: h,
      rdp_impression_id: r,
      items_impressed: _.map(e => e.id).join(",")
    });
  }, [_, e, t, r, h]), "errors" === u || !m && (!_ || 0 === _.length)) return null;
  let x = h && n ? n.accepted.length > 1 ? getI18nString("community.related_content.more_by_these_creators") : getI18nString("community.related_content.more_by_this_creator") : getI18nString("community.related_content.more_like_this");
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: e3,
      "data-testid": "resource-related-content",
      children: [jsx("div", {
        className: e8,
        children: m ? jsx(Wi, {
          className: "x1qx5ct2 x8yj6t5 xyorhqc",
          animationType: JR.NO_SHIMMER,
          dataTestId: "related-content-header-loading-text"
        }) : jsx("div", {
          className: e5,
          children: x
        })
      }), jsx(_$$A6, {
        resources: _ ?? [],
        maxGridDim: {
          cols: 3
        },
        isLoading: m,
        loadingTileCount: 3,
        onIntersectionChange: (e, t) => {
          t && trackResourceImpression(e);
        },
        onClickTracking: e => {
          trackEventAnalytics("Community Resource Related Content Clicked", {
            resource_type: e.resource_type,
            resource_id: e.id,
            is_same_creator: h,
            rdp_impression_id: r
          });
        }
      })]
    }), jsx(ey, {})]
  });
}
function tu({
  resource: e
}) {
  let t = AG();
  let r = isResourceHubProfilesEnabled();
  let i = e.community_publishers.accepted;
  let n = [...i.filter(e => J3(e.badges)), ...i.filter(e => !J3(e.badges))];
  let o = jsx(eF, {
    resource: e
  });
  return jsxs("div", {
    className: "sidebar_publisher_details_container--detailsContainer--7fYCs",
    children: [jsx("h3", {
      className: "sidebar_publisher_details_container--detailsHeader--U5a0X",
      children: renderI18nText("community.detail_view.details")
    }), jsxs("div", {
      className: "sidebar_publisher_details_container--authors--MY-d7",
      children: [jsx(_$$L, {
        publishers: n,
        size: 24,
        showFigmaPartnerBadge: !0,
        openInNewTab: t && !r
      }), jsx(_$$I, {
        publishers: n,
        openInNewTab: t && !r,
        useSmallWidth: !0,
        removeByLabel: !0
      })]
    }), jsx("div", {
      className: "sidebar_publisher_details_container--badgesContainer--KcmbU text--fontPos13--xW8hS text--_fontBase--QdLsd",
      children: o
    }), jsx(ey, {})]
  });
}
let tv = {
  iframe: {
    width: "xh8yej3",
    height: "x5yr21d",
    border: "x1gs6z28",
    opacity: "xg01cxk",
    transition: "xk82a7y",
    $$css: !0
  },
  iframeLoaded: {
    opacity: "x1hc1fzr",
    $$css: !0
  }
};
function tb({
  src: e,
  onLoad: t,
  onError: r,
  resource: n,
  resourceContent: o
}) {
  let [a, l] = useState(!0);
  let [c, u] = useState(!1);
  let [m, _] = useState(0);
  let p = useRef(null);
  let h = getResourceName(n);
  let x = _$$CW(P1.RELOAD);
  let g = _$$CW(P1.OPEN_NEW_TAB);
  let v = useCallback(() => {
    l(!1);
    u(!1);
    t?.();
  }, [t]);
  let b = useCallback(() => {
    l(!1);
    u(!0);
    r?.(Error(`Failed to load site preview: ${e}`));
  }, [e, r]);
  let j = useCallback(() => {
    l(!0);
    u(!1);
    _(e => e + 1);
    n && o && x(n.id, getResourceType(o));
  }, [n, o, x]);
  let w = useCallback(() => {
    n && o && g(n.id, getResourceType(o));
  }, [n, o, g]);
  useEffect(() => {
    l(!0);
    u(!1);
  }, [e]);
  return jsxs("div", {
    className: "xh8yej3 x1dltgaz x19y5rnk xb3r6kr x1bamp8i x1n2onr6",
    children: [a && !c && jsx("div", {
      className: "x10l6tqk x13vifvy xu96u03 xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k x1v8gsql",
      children: jsx(_$$k3, {
        size: "lg"
      })
    }), c ? jsx("div", {
      className: "x1v8gsql xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k",
      children: jsxs("div", {
        className: "x78zum5 xdt5ytf x6s0dn4 x1i71x30 x2b8uid",
        children: [jsxs("div", {
          className: "x78zum5 x6s0dn4 x1nfngrj x1n0bwc9",
          children: [jsx(_$$B2, {}), jsx("span", {
            children: getI18nString("community.site_preview.error_message")
          })]
        }), jsx(Button, {
          variant: "secondary",
          onClick: j,
          children: getI18nString("community.site_preview.retry")
        })]
      })
    }) : jsxs("div", {
      className: "xh8yej3 x5yr21d",
      children: [createElement("iframe", {
        ...xk(tv.iframe, !a && !c && tv.iframeLoaded),
        key: m,
        ref: p,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: !0,
        loading: "lazy",
        onError: b,
        onLoad: v,
        referrerPolicy: "strict-origin-when-cross-origin",
        sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-presentation allow-top-navigation-by-user-activation",
        src: e,
        title: h ?? void 0
      }), jsx(ButtonPrimitive, {
        "aria-label": getI18nString("community.site_preview.reload"),
        onClick: j,
        className: "x19y5rnk xz16r55 xsqpjig xn0whsw x78zum5 x6s0dn4 xl56j7k x1jnr06f x2lah0s x10l6tqk x191j7n5 x1qpfodn x100vrsf x1vqgdyp x1mh6rdz",
        children: jsx(_$$T2, {})
      }), jsxs(LinkPrimitive, {
        newTab: !0,
        href: e,
        onClick: w,
        className: "x19y5rnk xz16r55 xsqpjig xn0whsw x78zum5 x6s0dn4 xl56j7k x1jnr06f x2lah0s x10l6tqk x191j7n5 xn5hqff x10w6t97 xo9t39a",
        children: [jsx(_$$V2, {}), getI18nString("community.site_preview.preview")]
      })]
    })]
  });
}
function tR({
  resource: e,
  optionalTitle: t,
  disableHeader: r,
  showBottomDivider: i
}) {
  let n = getValueOrFallback(e.category_slug, LJ);
  let o = getCurrentLocale();
  let [a] = setupResourceAtomHandler(categoryBySlugQuery({
    categorySlug: n,
    locale: o
  }), {
    enabled: !!n
  });
  if ("loading" === a.status) return null;
  let l = a.data?.tags ?? [];
  let c = e.tags ?? [];
  let u = e.tags_v2 ?? {};
  let m = c.length > 0;
  let _ = !!n && Object.keys(u).length > 0;
  if (!m && !_) return null;
  let h = mapResourceTypePlural(e, {
    plural: !0
  });
  return jsxs(Fragment, {
    children: [!r && jsx("h3", {
      className: Pr,
      children: t || renderI18nText("community.detail_view.tags")
    }), jsx("div", {
      className: Pc,
      children: _ && Object.entries(u).map(([e, t]) => {
        let r = l.find(t => t.text === e);
        return jsx(TrackedLink, {
          className: Tc,
          to: new BrowseCategoryRoute({
            categorySlug: n,
            tagSlug: r?.localized_url_slug ?? t
          }).to,
          trackingEventName: "Tag clicked",
          trackingProperties: {
            text: e,
            tab: h,
            type: "v2"
          },
          children: r ? uS(r) : e
        }, e);
      })
    }), m && jsx("div", {
      className: Cy,
      children: c.map(e => jsx(TrackedLink, {
        className: AT,
        to: new n6({}, {
          query: CW(e)
        }).to,
        trackingEventName: "Tag clicked",
        trackingProperties: {
          text: e,
          tab: h,
          type: "v1"
        },
        children: `#${e}`
      }, e))
    }), i && jsx(ey, {})]
  });
}
function tA({
  resource: e
}) {
  let [t, r] = useState(!1);
  if (!isPluginOrWidget(e)) return null;
  let n = getPluginOrWidgetContent(e);
  if (!n) return null;
  let {
    versions
  } = n;
  let a = getPluginVersion(n);
  return jsxs("div", {
    className: "version_history--versionHistory--yOsFW text--fontPos14--OL9Hp text--_fontBase--QdLsd",
    children: [jsxs("div", {
      className: "version_history--header--jdIyg",
      children: [jsx(_$$V, {
        className: "version_history--icon--pnnmo",
        plugin: a
      }), jsx("span", {
        className: "version_history--title--1a95q text--fontPos14--OL9Hp text--_fontBase--QdLsd",
        children: renderI18nText("community.plugins.version_history")
      })]
    }), jsxs("div", {
      children: [Object.keys(versions).map(parseFloat).sort((e, t) => e > t ? -1 : 1).map(e => versions[e]).filter(e => !!e).map(e => {
        let t = !e.release_notes;
        let r = new Date(e.created_at).toLocaleDateString(navigator.language, {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
        return jsxs("div", {
          className: t ? "version_history--releaseSectionEmpty--t8k4f" : "version_history--releaseSection--mOmlB",
          children: [jsx("span", {
            className: "version_history--versionName--PC5Ws",
            children: renderI18nText("community.plugins.version_version_on_date", {
              createdAt: r,
              versionName: e.version
            })
          }), jsx("span", {
            className: "version_history--versionDescription--bzh-V",
            children: e.release_notes
          })]
        }, e.id);
      }).slice(0, t ? 1 / 0 : 2), !t && Object.keys(versions).length > 2 && jsx("div", {
        className: "version_history--showAll--b8ClA",
        onClick: () => r(!0),
        role: "button",
        tabIndex: 0,
        children: renderI18nText("community.plugins.see_all")
      })]
    })]
  });
}
let tM = _$$y;
let tO = _$$l;
function tB(e, t) {
  if (e.preventDefault(), t === $O.DescriptionView) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    return;
  }
  let r = document.getElementById(t);
  if (r) {
    let e = bK;
    let t = r.getBoundingClientRect().top + window.scrollY + e;
    window.scrollTo({
      top: t,
      behavior: "smooth"
    });
  }
}
function tD({
  commentCount: e,
  hasCommentsEnabled: t
}) {
  let [r, o] = useAtomValueAndSetter(_$$R);
  useEffect(() => {
    let e = () => {
      let e = document.getElementById($O.CommentsView);
      if (e) {
        let t = e.getBoundingClientRect().top;
        fitsInViewer(t, window.innerHeight, window.scrollY) ? o($O.CommentsView) : o($O.DescriptionView);
      }
    };
    window.addEventListener("scroll", e);
    return () => {
      window.removeEventListener("scroll", e);
    };
  }, [o]);
  return jsxs("div", {
    className: MW,
    "data-testid": "anchor-tabs",
    children: [jsx("button", {
      onClick: e => tB(e, $O.DescriptionView),
      children: jsx("div", {
        className: a()(Vj, {
          [k9]: r === $O.DescriptionView
        }),
        children: getI18nString("community.resource_page.about")
      })
    }), t && jsx("button", {
      onClick: e => tB(e, $O.CommentsView),
      children: jsx("div", {
        className: a()(Vj, {
          [k9]: r === $O.CommentsView
        }),
        children: renderI18nText("community.resource_page.comments", {
          numComments: jsx("span", {
            className: a()(p9, {
              [_$$sB]: r === $O.CommentsView
            }),
            children: e
          })
        })
      })
    })]
  });
}
export function $$tF0({
  resource: e
}) {
  let t = isComponentViewerEnabled();
  let r = hasContent(e) ? getMainContent(e) : e;
  if (!r) return null;
  let i = getHubFile(r);
  let n = isFigmakeTemplate(e);
  let o = i?.published_site_url;
  if (n && o) return jsx(tb, {
    src: o,
    resource: e,
    resourceContent: r
  });
  let a = function (e, t) {
    if (isPluginOrWidget(e)) return !1;
    let r = isMonetizedFigJamTemplate(e, t);
    let s = getEmbedType(e) === Z4.EMBED;
    return !r && !s && !isSlideTemplate(e);
  }(e, r);
  let l = hasHubFileOrPresetKey(r.id) && t();
  return a && !l ? jsxs(Fragment, {
    children: [jsx("h3", {
      className: _$$s.font14.fontSemiBold.mb16.$,
      children: getI18nString("community.embed.preview_title")
    }), jsx(_$$A, {
      enableEmbedOnSmallScreens: !0,
      resource: r
    }), jsx(ey, {
      spacing: "short"
    })]
  }) : l ? jsx(em, {
    libraryId: r.id
  }) : null;
}
export function $$tH1({
  resource: e
}) {
  if (!_$$M()) return jsx(A, {});
  {
    let t = hasHubFile(e) ? _$$e2.COMMUNITY_HUB_FILE : isWidgetResource(e) ? _$$e2.COMMUNITY_HUB_WIDGET : _$$e2.COMMUNITY_HUB_PLUGIN;
    return jsx(_$$Q, {
      resource: e,
      viewContext: t
    });
  }
}
function tU() {
  let {
    showElevationDivider,
    showFlatDivider
  } = tz();
  return jsxs(Fragment, {
    children: [showElevationDivider && jsx("div", {
      className: oj,
      children: jsx("div", {
        className: iS
      })
    }), showFlatDivider && jsx("div", {
      className: X$
    })]
  });
}
function tV({
  detailPendingCreatorInvite: e,
  detailPendingPluginPublisherInvite: t,
  anchorTabs: r,
  descriptionView: n,
  contentPreview: o,
  relatedContent: a,
  versionHistory: l,
  commentsView: c,
  tagsContainer: d,
  socialLinks: u,
  metadata: _,
  detailsContainer: p
}) {
  let {
    externalCommentScrollRef
  } = useContext(_$$H);
  return jsxs(Fragment, {
    children: [e, t, r, jsx(tU, {}), jsxs("div", {
      className: BE,
      children: [jsxs("div", {
        className: zu,
        ref: externalCommentScrollRef,
        id: $O.DescriptionView,
        children: [n, o, a, l, jsx("div", {
          id: $O.CommentsView,
          children: c
        })]
      }), jsxs("div", {
        className: ok,
        children: [p, d, u, _]
      })]
    })]
  });
}
function tW({
  detailPendingCreatorInvite: e,
  detailPendingPluginPublisherInvite: t,
  anchorTabs: r,
  descriptionView: i,
  contentPreview: n,
  relatedContent: o,
  versionHistory: a,
  commentsView: l,
  tagsContainer: c,
  socialLinks: d,
  metadata: u
}) {
  return jsxs(Fragment, {
    children: [e, t, r, jsx(tU, {}), jsx("div", {
      className: BE,
      children: jsxs("div", {
        className: zt,
        "data-mobile-view": !0,
        id: $O.DescriptionView,
        children: [i, n, c, o, a, jsx("div", {
          id: $O.CommentsView,
          children: l
        }), d, u]
      })
    })]
  });
}
function tG({
  detailPendingPluginPublisherInvite: e,
  descriptionView: t,
  relatedContent: r,
  versionHistory: n,
  commentsView: o,
  tagsContainer: a,
  socialLinks: l,
  metadata: c
}) {
  let {
    externalCommentScrollRef
  } = useContext(_$$H);
  return jsx(Fragment, {
    children: jsxs("div", {
      className: zt,
      "data-mobile-view": !0,
      ref: externalCommentScrollRef,
      children: [t, t && jsx(ey, {}), e, a, r, n, jsx("div", {
        id: $O.CommentsView,
        children: o
      }), l, c]
    })
  });
}
function t$({
  resource: e,
  resourceContent: t,
  rdpImpressionId: r,
  relatedContent: i,
  openLightboxRDP: n
}) {
  return isRelatedContentExperimentEnabled()() && hasResourceType(e) ? jsx(tl, {
    resourceType: getResourceType(e),
    resourceId: e.id,
    rdpImpressionId: r,
    creators: e.community_publishers
  }) : i && i.content.length > 0 ? jsxs(Fragment, {
    children: [jsx(ts, {
      resourceId: e.id,
      resourceType: getResourceType(t),
      content: i.content,
      types: i.types,
      creators: e.community_publishers,
      rdpImpressionId: r,
      openLightboxRDP: n
    }), jsx(ey, {})]
  }) : null;
}
function tz() {
  let e = _$$T();
  return {
    showTags: !e,
    showSidebarPublisherDetailsContainer: e,
    showRelatedContent: !e,
    showBadgesInMetadata: !e,
    showDescriptionViewHeader: e,
    showElevationDivider: !e,
    showFlatDivider: e,
    showAnchorTabs: !e
  };
}
export function $$tQ2({
  resource: e,
  resourceContent: t,
  rdpImpressionId: r,
  isMobileSize: i,
  openLightboxRDP: n
}) {
  let o = getResourceName(e);
  let a = getResourceDescription(e);
  let c = t.related_content;
  let d = isPluginOrWidget(e);
  let m = usePrefersMediaQuery(`(min-width: ${w3}px)`);
  let {
    showTags,
    showSidebarPublisherDetailsContainer,
    showRelatedContent,
    showBadgesInMetadata,
    showDescriptionViewHeader,
    showAnchorTabs
  } = tz();
  let T = isFigmakeTemplate(e);
  let I = !isSiteTemplate(e) && !isCooperTemplateFile(e) && !T;
  let N = {
    detailPendingCreatorInvite: jsx(tM, {
      resourceId: t.id,
      resourceType: getResourceType(t),
      containerClassName: BE
    }),
    detailPendingPluginPublisherInvite: d ? jsx(tO, {
      pluginId: t.id,
      containerClassName: i ? void 0 : BE
    }) : void 0,
    anchorTabs: showAnchorTabs && a ? jsx(tD, {
      commentCount: t.comment_count,
      hasCommentsEnabled: _$$e(t)
    }) : void 0,
    descriptionView: jsx(_$$u2, {
      description: a,
      hideDivider: !i,
      showHeader: showDescriptionViewHeader
    }),
    contentPreview: I ? jsx($$tF0, {
      resource: e
    }) : void 0,
    relatedContent: showRelatedContent ? jsx(t$, {
      resource: e,
      resourceContent: t,
      rdpImpressionId: r,
      relatedContent: c,
      openLightboxRDP: n
    }) : void 0,
    versionHistory: jsx(tA, {
      resource: e
    }),
    commentsView: jsx(u, {
      resource: t
    }),
    tagsContainer: showTags ? jsx(tR, {
      resource: t,
      showBottomDivider: m
    }) : void 0,
    socialLinks: jsx(_$$R2, {
      author: Lj(t),
      resourceType: getResourceType(t),
      resourceURL: buildFullCommunityUrl(t),
      resourceId: e.id,
      resourceName: o ?? ""
    }),
    metadata: jsx(eY, {
      resource: e,
      showBadges: showBadgesInMetadata && !T
    }),
    detailsContainer: showSidebarPublisherDetailsContainer ? jsx(tu, {
      resource: e
    }) : void 0
  };
  return jsx(Fragment, {
    children: jsxs("div", {
      className: i ? lt : "",
      children: [jsx(Ay, {
        mediaQuery: `(max-width: ${YW - 1}px)`,
        children: jsx(tG, {
          ...N
        })
      }), jsx(Ay, {
        mediaQuery: `(min-width: ${YW}px) and (max-width: ${w3 - 1}px)`,
        children: jsx(tW, {
          ...N
        })
      }), jsx(Ay, {
        mediaQuery: `(min-width: ${w3}px)`,
        children: jsx(tV, {
          ...N
        })
      })]
    })
  });
}
export const U6 = $$tF0;
export const cy = $$tH1;
export const X6 = $$tQ2;