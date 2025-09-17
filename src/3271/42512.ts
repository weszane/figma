import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useStore, useSelector } from "react-redux";
import { d as _$$d } from "../905/976845";
import { S as _$$S } from "../905/989967";
import { S as _$$S2 } from "../905/711470";
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import u from "classnames";
import { useDebouncedCallback } from "use-debounce";
import { KeyCodes } from "../905/63728";
import { MM } from "../figma_app/236327";
import { dP, M3 } from "../figma_app/119475";
import { P as _$$P } from "../905/347284";
import { IW } from "../figma_app/563413";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { Dy, ky } from "../figma_app/925970";
import { useIsSelectedViewFullscreenCooper } from "../figma_app/828186";
import { N as _$$N } from "../3271/584206";
import { RB } from "../figma_app/69680";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { TrackingProvider } from "../figma_app/831799";
import { isDevHandoffEditorType, getCurrentFileType } from "../figma_app/976749";
import { cW, ZT, x as _$$x, ll, U6, $1, nl, yQ, sp, Be, pR, YW, jA, op, qr, I5, SG, Tg, f6, wW } from "../figma_app/844435";
import { z4 } from "../905/37051";
import { LR } from "../figma_app/120210";
import { Um } from "../905/848862";
import { useCurrentUserOrg } from "../905/845253";
import { M as _$$M } from "../figma_app/170366";
import { ShelfViewType, HubTypeEnum, hasMonetizedResourceMetadata, ResourceTypeNoComment } from "../figma_app/45218";
import { KindEnum } from "../905/129884";
import { Jz } from "../905/504727";
import { l6, c$, sK } from "../905/794875";
import { n as _$$n } from "../2b17fec9/3836";
import { Zl } from "../905/211621";
import { zK } from "../figma_app/913823";
import { n as _$$n2 } from "../905/64411";
import { NW, El } from "../figma_app/646357";
import { CX } from "../905/557338";
import { Q as _$$Q } from "../figma_app/904819";
import { LL, Cc } from "../figma_app/270091";
import { m as _$$m } from "../figma_app/60940";
import { NF, gC, Kr, Ix, Ex, IT, kB, B6, Xo, Zm, ff, np, dQ } from "../figma_app/201703";
import { IconButton } from "../905/443068";
import { J as _$$J } from "../905/125993";
import { W as _$$W } from "../905/865092";
import { getFeatureFlags } from "../905/601108";
import { R as _$$R } from "../figma_app/313269";
import { clickableBaseLinkTracked } from "../figma_app/637027";
import { LoadingSpinner } from "../figma_app/858013";
import { SvgComponent } from "../905/714743";
import { $3, op as _$$op } from "../figma_app/487970";
import { I as _$$I } from "../5430/750114";
import { mG } from "../figma_app/15924";
import { ej as _$$ej, EO, lt, gn, Zk } from "../figma_app/86989";
import { selectCurrentUser } from "../905/372672";
import { I4, QW, hI, JL } from "../figma_app/522242";
import { A as _$$A2 } from "../5724/267849";
import { I as _$$I2 } from "../5430/292815";
import { FUSE_CONFIG_DEFAULT, FUSE_KEYS_PROFILE } from "../figma_app/740025";
import { A as _$$A3 } from "../svg/833198";
import { A as _$$A4 } from "../svg/733948";
import { isSubscriptionActive } from "../figma_app/808294";
import { isResourceApprovedPublic } from "../figma_app/777551";
import { af, Qi } from "../figma_app/559491";
import { S as _$$S3 } from "../figma_app/11182";
import { getVsCodeLinkProps } from "../905/850671";
import { XV, Cs } from "../figma_app/684168";
import { isVsCodeEnvironment } from "../905/858738";
import { E as _$$E } from "../469e6e40/167556";
import { P as _$$P2 } from "../469e6e40/160324";
import { getPluginVersion, canAssociatedUserPurchaseResource, isValidForSelectedViewAndWhitelist, filterResourcesByOrgId, filterPublishedResources } from "../figma_app/300692";
import { Ro } from "../figma_app/805373";
import { ab, ox } from "../figma_app/870683";
import { f as _$$f } from "../figma_app/58113";
import { cu } from "../figma_app/439332";
import { _W, nN } from "../7492/254275";
import { b as _$$b } from "../905/635568";
import { A as _$$A5 } from "../6828/564422";
import { yW, Gq } from "../figma_app/38430";
import { s as _$$s2, Y as _$$Y } from "../figma_app/504088";
import { s as _$$s3 } from "../2b17fec9/254940";
import { tO as _$$tO, GJ, ff as _$$ff, R7 } from "../7492/487492";
import { A as _$$A6 } from "../svg/55550";
import { AutoLayout } from "../905/470281";
import { N as _$$N2 } from "../905/438674";
import { Button } from "../905/521428";
import { e as _$$e } from "../905/149844";
import { r as _$$r } from "../905/571562";
import { Y1 } from "../905/143116";
import { TextWithTruncation } from "../905/984674";
import { kt as _$$kt, Pq } from "../3591/828414";
import { A as _$$A7 } from "../svg/4102";
import { isFullscreenDevHandoffView } from "../905/782918";
import { W as _$$W2 } from "../2b17fec9/950005";
import { bT, Ol } from "../figma_app/279454";
import { h as _$$h } from "../9410/146161";
import { BI } from "../figma_app/546509";
import { N as _$$N3 } from "../905/301843";
import { selectWithShallowEqual } from "../905/103090";
import { s7 } from "../905/551193";
import { useCurrentFileKey } from "../figma_app/516028";
import { FUserRoleType } from "../figma_app/191312";
import { mC } from "../905/18797";
import { useCurrentPublicPlan, getParentOrgIdIfOrgLevel, useCurrentPrivilegedPlan } from "../figma_app/465071";
import { getWidgetAllowListKey, getPluginAllowListKey } from "../figma_app/155287";
import { A as _$$A8 } from "../svg/987294";
import { H as _$$H } from "../2b17fec9/68162";
import { vtl } from "../figma_app/822011";
import { shuffle } from "../figma_app/656233";
import { ServiceCategories as _$$e2 } from "../905/165054";
import { k as _$$k2 } from "../905/443820";
import { trackEventAnalytics } from "../905/449184";
import { reportError } from "../905/11";
import { a as _$$a } from "../905/925868";
import { Me } from "../figma_app/617427";
import { PricingOptions } from "../905/237873";
import { getPluginContent, getWidgetContent } from "../figma_app/427318";
import { SortOptions } from "../figma_app/324237";
import { h as _$$h2 } from "../905/632544";
import { DesignToolType } from "../figma_app/277543";
import { liveStoreInstance } from "../905/713695";
import { z as _$$z, a as _$$a2 } from "../figma_app/601188";
import { memoizeByArgs } from "../figma_app/815945";
import { useMemoStable } from "../905/19536";
import { editorUtilities as _$$k3 } from "../905/22009";
import { Ef } from "../905/81982";
let r;
var _ = u;
function $(e) {
  let t = useDispatch();
  let s = useStore();
  let r = useSelector(_$$m);
  let l = useSelector(e => CX(e));
  let o = useRef(null);
  let d = NF(gC + Kr + Ix);
  useEffect(() => {
    (async () => {
      if (t(zK()), l) {
        await NW;
        let {
          fileVersion
        } = s.getState();
        fileVersion && !El("INVALID-FILE-KEY-SHOULD-BE-REMOVED", l) && s.dispatch(_$$n2({
          libraryKey: l
        }));
      }
    })();
  }, [t, l, s]);
  let [c, u] = useState(!1);
  return jsxs("div", {
    children: [e.header, jsxs("div", {
      "data-not-draggable": !0,
      children: [jsx(LL, {
        drilldownPickerContextValue: {
          listItemHeight: 48,
          leafListHeight: 48,
          listItemThumbnailStylesOverride: {
            height: 40,
            width: 40,
            borderRadius: 2
          }
        },
        entrypointForLogging: null,
        isSearching: c,
        pickerType: Zl.RESOURCE_INSERT_MODAL,
        query: e.query,
        recordingKey: "componentInsert",
        scrollContainerHeight: d,
        searchBarRef: o,
        selectedItems: r ? [r] : [],
        setIsSearching: u,
        setQuery: e.setQuery,
        toggleGridViewButton: jsx(Cc, {
          isSwapPicker: !1
        })
      }), jsx(_$$Q, {})]
    })]
  });
}
function ec({
  resource: e
}) {
  let t = useSelector(e => e.authedActiveCommunityProfile);
  let s = selectCurrentUser();
  let r = _$$ej(e);
  return jsxs("div", {
    className: I4,
    "data-not-draggable": !0,
    children: [jsx("div", {
      className: QW,
      children: jsx(SvgComponent, {
        svg: _$$A2
      })
    }), jsx("div", {
      className: hI,
      children: renderI18nText("community.buyer.payment_for_this_resource_is_moving_over_to_figma")
    }), jsx("div", {
      className: JL,
      children: jsx("button", {
        onClick: () => {
          mG(e, ShelfViewType.INSERTS, s.id, t?.id);
          r();
        },
        children: renderI18nText("community.buyer.update_payment")
      })
    })]
  });
}
let em = "rating_stats_data--averageStar--YdqTY";
function ex({
  isHovered: e
}) {
  return jsx("span", {
    className: em,
    "aria-label": getI18nString("community.detail_view.full_star"),
    children: jsx("svg", {
      width: "16",
      height: "15",
      viewBox: "0 0 16 15",
      fill: "var(--color-text-tertiary, $figmaFGBlack3)",
      children: jsx("path", {
        d: "M7.77304 0.492166C7.86239 0.298449 8.13771 0.298448 8.22707 0.492166L10.2571 4.89337L15.0703 5.46405C15.2821 5.48917 15.3672 5.75101 15.2106 5.89585L11.6521 9.18663L12.5967 13.9405C12.6383 14.1498 12.4155 14.3116 12.2294 14.2074L8.00005 11.84L3.77072 14.2074C3.58457 14.3116 3.36183 14.1498 3.4034 13.9405L4.348 9.18663L0.789528 5.89586C0.632903 5.75101 0.717982 5.48917 0.929831 5.46405L5.74296 4.89337L7.77304 0.492166Z",
        fill: e ? "var(--color-text-tooltip-warning, $yellow_400_light)" : "var(--color-multiplayeryellow, $multiplayerYellow)"
      })
    })
  });
}
function ep() {
  return jsx("span", {
    className: em,
    "aria-label": getI18nString("community.detail_view.empty_star"),
    children: jsx("svg", {
      width: "16",
      height: "15",
      viewBox: "0 0 16 15",
      fill: "var(--color-text-tertiary, $figmaFGBlack3)",
      children: jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.58344 5.82031L7.99995 2.38731L6.41646 5.82031L2.66216 6.26545L5.43781 8.83229L4.70102 12.5404L7.99995 10.6938L11.2989 12.5404L10.5621 8.83229L13.3377 6.26545L9.58344 5.82031ZM15.0702 5.46385C15.282 5.48897 15.3671 5.75081 15.2105 5.89566L11.652 9.18643L12.5966 13.9403C12.6382 14.1496 12.4154 14.3114 12.2293 14.2072L7.99995 11.8398L3.77062 14.2072C3.58447 14.3114 3.36173 14.1496 3.4033 13.9403L4.3479 9.18643L0.789429 5.89566C0.632804 5.75081 0.717883 5.48897 0.929731 5.46385L5.74286 4.89318L7.77294 0.491968C7.86229 0.29825 8.13762 0.29825 8.22697 0.491968L10.257 4.89318L15.0702 5.46385Z",
        fill: "var(--color-text-secondary,$figmaFGBlack5)"
      })
    })
  });
}
let eg = "rating_star_selector--ratingDescription--WBrg8 text--fontPos14--OL9Hp text--_fontBase--QdLsd";
function ef({
  onSelect: e,
  existingRating: t,
  showDescriptions: s = !1,
  useBigStars: r = !0,
  isOptional: i = !1,
  disabled: l = !1,
  disabledTooltip: o
}) {
  let [d, c] = useState(0);
  let [u, _] = useState(0);
  let [m, x] = useState(!1);
  let p = [getI18nString("community.star_ratings.i_really_dont_like_it"), getI18nString("community.star_ratings.i_dont_like_it"), getI18nString("community.star_ratings.its_okay"), getI18nString("community.star_ratings.i_like_it"), getI18nString("community.star_ratings.i_love_it")];
  useEffect(() => {
    void 0 === t || d || (c(t), _(t));
  }, [t, d]);
  let g = r ? jsx(SvgComponent, {
    svg: _$$A3,
    className: "rating_star_selector--emptyStar--P-7A1 rating_star_selector--star--ML342",
    "aria-label": getI18nString("community.detail_view.empty_star"),
    dataTestId: "empty-star-big"
  }) : jsx(ep, {});
  let h = r ? jsx(SvgComponent, {
    svg: _$$A4,
    className: m ? "rating_star_selector--fullStarHover--JKgxp rating_star_selector--star--ML342" : "rating_star_selector--fullStar--rCWKu rating_star_selector--star--ML342",
    "aria-label": getI18nString("community.detail_view.full_star"),
    dataTestId: "full-star-big"
  }) : jsx(ex, {
    isHovered: m
  });
  let v = e => {
    l || (c(e + 1), x(!0));
  };
  let j = t => {
    l || (t + 1 === u && i ? (_(0), e(0)) : (_(t + 1), e(t + 1)));
  };
  return jsxs("div", {
    className: r ? "rating_star_selector--starInfoContainer--aW-rA" : "rating_star_selector--starInfoContainerBigStars--y3zus rating_star_selector--starInfoContainer--aW-rA",
    children: [jsx("div", {
      className: l ? "rating_star_selector--starContainerDisabled--7bMU6 rating_star_selector--starContainer--1y2ZB" : "rating_star_selector--starContainer--1y2ZB",
      onMouseLeave: () => {
        l || u === d || c(u);
      },
      "data-tooltip-type": l ? KindEnum.TEXT : void 0,
      "data-tooltip": l ? o : void 0,
      "data-tooltip-show-immediately": !0,
      "data-testid": "rating-tooltip",
      children: (() => {
        let e = [];
        for (let t = 0; t < 5; t++) e.push(jsx("span", {
          className: _$$s.flex.$,
          onMouseEnter: () => v(t),
          onMouseLeave: () => x(!1),
          onClick: () => j(t),
          role: "button",
          tabIndex: 0,
          children: t < d ? h : g
        }, `rating-star-${t}}`));
        return e;
      })()
    }), jsx("div", {
      className: "rating_star_selector--ratingDescriptionVisibility--XvJs2",
      children: jsxs(Fragment, {
        children: [s && jsx("div", {
          className: r ? "rating_star_selector--ratingDescriptionBigStars--WKSN3 rating_star_selector--ratingDescription--WBrg8 text--fontPos14--OL9Hp text--_fontBase--QdLsd" : eg,
          children: p[d - 1]
        }), i && 0 === d && jsx("div", {
          className: eg,
          children: l ? renderI18nText("community.rating_review.ratings_not_available") : renderI18nText("community.rating_review.optional")
        })]
      })
    })]
  });
}
function eC({
  userRating: e,
  isInsertsModal: t,
  disabled: s,
  disabledTooltip: r,
  openRatingModal: n
}) {
  return jsxs("div", {
    className: t ? "rating_stats_view--ratingSelectorContainerInsertsModal--yPaAm rating_stats_view--ratingSelectorContainer--9lgDS" : "rating_stats_view--ratingSelectorContainer--9lgDS",
    children: [jsx("div", {
      className: t ? "rating_stats_view--ratingCTAInsertsModal--lcpeW text--fontPos11--2LvXf text--_fontBase--QdLsd" : "rating_stats_view--ratingCTA--Wa386 text--fontPos13--xW8hS text--_fontBase--QdLsd",
      children: e ? jsx("div", {
        onClick: () => n(e?.ratingValue),
        className: "rating_stats_view--editRating---V3U6",
        role: "button",
        tabIndex: 0,
        children: renderI18nText("community.detail_view.edit_rating")
      }) : renderI18nText("community.detail_view.leave_a_rating")
    }), jsx(ef, {
      onSelect: n,
      existingRating: e?.ratingValue,
      disabled: s,
      disabledTooltip: r
    })]
  });
}
function eH({
  onBack: e,
  text: t
}) {
  let s = isDevHandoffEditorType();
  let r = useIsSelectedViewFullscreenCooper();
  return jsxs("div", {
    className: "browse_resource_modal_tab_header--header--MQQB5 text--fontPos11--2LvXf text--_fontBase--QdLsd",
    children: [jsxs("div", {
      className: "browse_resource_modal_tab_header--left--UnLHb",
      children: [jsx(SvgComponent, {
        "data-not-draggable": !0,
        svg: _$$A5,
        className: "browse_resource_modal_tab_header--backButton--xXsNC fd_browse_resource_modal--backButton--S7dMz",
        onClick: e
      }), t]
    }), !s && !r && jsx(Ex, {
      containerClassName: "browse_resource_modal_tab_header--close--9Fu6o"
    })]
  });
}
let eU = "detail_view--ratingSelectorContainer--zbvCM";
function eQ(e) {
  let t = useDispatch();
  let {
    activeTab
  } = IT();
  let r = activeTab === _$$s2.PLUGIN;
  let l = cW();
  let o = ZT();
  let d = (r ? l : o)[e.resourceId];
  return (useEffect(() => {
    d && d.community_publishers || t(af({
      id: e.resourceId,
      resourceType: r ? HubTypeEnum.PLUGIN : HubTypeEnum.WIDGET
    }));
  }, [t, d, e.resourceId, r]), d) ? jsx(eG, {
    resourceId: e.resourceId,
    resource: d
  }) : jsx("div", {
    className: _$$s.flex.wFull.borderBox.justifyCenter.pt32.$,
    children: jsx(LoadingSpinner, {
      size: "medium"
    })
  });
}
function eG(e) {
  let {
    resource
  } = e;
  let {
    activeTab
  } = IT();
  let r = activeTab === _$$s2.PLUGIN;
  let l = useDispatch();
  let o = isDevHandoffEditorType();
  let d = useIsSelectedViewFullscreenCooper();
  let c = _$$x();
  let u = Um();
  let m = NF(isVsCodeEnvironment() ? gC + 64 : gC);
  let x = useSelector(e => e.authedUsers);
  let p = EO(resource);
  let g = lt(resource);
  let v = gn(resource);
  let j = isSubscriptionActive(g);
  let w = useSelector(e => e.authedActiveCommunityProfile);
  let b = _$$b();
  let E = useCurrentUserOrg();
  let P = ll();
  let M = U6();
  let S = Object.values($1()).find(t => String(t.plugin_id) === e.resourceId);
  let {
    dragState,
    onInsertableResourcePointerDown
  } = _$$P2({
    resource: getPluginVersion(resource),
    clickToInsert_DEPRECATED: !0,
    afterSuccessfulInsert: b,
    triggeredFrom: "universal-insert"
  });
  let {
    canRate = !1
  } = {};
  let O = useCallback(() => {
    l(_$$S3({
      url: r ? ab(e.resourceId) : ox(e.resourceId),
      linkType: r ? "plugin" : "widget"
    }));
  }, [l, e.resourceId, r]);
  let Z = r && u?.type === yW && u.data.pluginId === e.resourceId && u.data.targetRect;
  let F = useCallback(t => {
    t.stopPropagation();
    r && (Z ? l(hideDropdownAction()) : l(showDropdownThunk({
      type: yW,
      data: {
        pluginId: e.resourceId,
        targetRect: t.currentTarget.getBoundingClientRect()
      }
    })));
  }, [r, Z, l, e.resourceId]);
  let U = useCallback(() => {
    l(hideDropdownAction());
  }, [l]);
  if (!resource) return null;
  resource.community_resource_payment = g;
  let W = getPluginVersion(resource);
  let Q = Zk(w, x, resource);
  let G = canAssociatedUserPurchaseResource({
    canAssociatedUserPurchaseThisResource: Q,
    resource
  });
  let $ = !S && XV({
    org: E,
    extension: resource,
    allowlistedExtensions: r ? P : M
  });
  let ee = r ? jsx(_$$tO, {
    pluginId: e.resourceId,
    usePrimaryButtonStyles: !0,
    dropdownShownType: "DROPDOWN_TYPE_RUN_PLUGIN_SUBMENU_DETAIL_VIEW"
  }) : jsx(GJ, {
    widgetId: e.resourceId
  });
  return jsxs(TrackingProvider, {
    name: "detail",
    properties: {
      resourceId: e.resourceId,
      resourceType: r ? HubTypeEnum.PLUGIN : HubTypeEnum.WIDGET,
      isMonetized: hasMonetizedResourceMetadata(resource),
      editorType: "figma"
    },
    children: [!d && jsx(ez, {}), jsxs(_$$P, {
      height: m,
      onScroll: U,
      onMouseDown: e => e.stopPropagation(),
      onPointerDown: e => e.stopPropagation(),
      children: [jsx("div", {
        className: "detail_view--contentContainer--nSBG8",
        children: jsxs("div", {
          className: isVsCodeEnvironment() ? "detail_view--contentContainerVsCode--QO3Ls" : void 0,
          children: [jsxs("div", {
            className: isVsCodeEnvironment() ? "detail_view--coverImageContainerVsCode--4UADZ detail_view--coverImageContainer--2AZZG detail_view--coverImageContainer--2AZZG" : "detail_view--coverImageContainer--2AZZG",
            children: [jsx("img", {
              className: _()(isVsCodeEnvironment() ? "detail_view--coverImageVsCode--ZtGDB" : r ? "detail_view--coverImageNotDraggable--5PzSB detail_view--coverImage---G-H1" : "detail_view--coverImage---G-H1", _$$s.$$if(isVsCodeEnvironment(), _$$s.bRadius5).$),
              src: W.redirect_cover_image_url || "",
              alt: `${W.name}`,
              onPointerDown: e => !r && onInsertableResourcePointerDown(e)
            }), jsx(_$$E, {
              dragState
            })]
          }), v && jsx(cu, {}), G && !v && !j && jsx(ec, {
            resource
          }), jsxs("div", {
            className: isVsCodeEnvironment() ? "detail_view--infoContainerVsCode--g6DeF detail_view--infoContainer--deaxz text--fontPos11--2LvXf text--_fontBase--QdLsd" : "detail_view--infoContainer--deaxz text--fontPos11--2LvXf text--_fontBase--QdLsd",
            children: [jsxs("div", {
              className: "detail_view--metadataContainer--GSTfB",
              children: [jsxs("div", {
                className: "detail_view--name--oJZlL text--fontPos14--OL9Hp text--_fontBase--QdLsd",
                children: [jsx("div", {
                  className: "detail_view--nameString--D7CH4 ellipsis--ellipsis--Tjyfa",
                  children: W.name
                }), $3({
                  resource,
                  validBadges: [_$$op.PURCHASED],
                  authedActiveCommunityProfile: w
                }) || jsx(_$$I, {
                  badges: resource.badges,
                  height: "16",
                  hideTooltip: !0
                })]
              }), jsx("div", {
                className: "detail_view--publishers--EXOAA text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa",
                children: (resource.community_publishers?.accepted || []).length > 0 && jsxs(Fragment, {
                  children: [jsx(Ro, {
                    entity: resource.community_publishers?.accepted[0],
                    size: 16,
                    className: "detail_view--avatar--trwkE"
                  }), kB(resource)]
                })
              })]
            }), (!o || c) && jsxs("div", {
              className: "detail_view--actionsRow--sAwdf",
              children: [jsx("div", {
                className: "detail_view--ctaContainer--Z5uKT",
                children: p && !getFeatureFlags().community_hub_admin_reviewer ? jsx(_$$I2, {
                  resource,
                  context: ShelfViewType.INSERTS,
                  payment: g
                }) : $ ? jsx(_$$s3, {
                  version: W,
                  isPlugin: r
                }) : ee
              }), jsx("div", {
                className: _$$s.ml8.flex.itemsCenter.$,
                children: jsx(_W, {
                  resourceId: e.resourceId,
                  resourceType: r ? ResourceTypeNoComment.PLUGIN : ResourceTypeNoComment.WIDGET,
                  parentView: nN.DETAIL
                })
              }), o && isValidForSelectedViewAndWhitelist(W, E, P) ? jsxs(Fragment, {
                children: [jsx("div", {
                  className: "detail_view--dotsContainer--JdwCt",
                  children: jsx(IconButton, {
                    "aria-label": getI18nString("universal_insert.more_options"),
                    htmlAttributes: {
                      "data-tooltip-type": KindEnum.TEXT,
                      "data-tooltip": getI18nString("universal_insert.more_options")
                    },
                    onClick: F,
                    children: jsx(_$$J, {})
                  })
                }), Z && jsx(Gq, {
                  resourceId: e.resourceId,
                  plugin: W,
                  resourceType: r ? ResourceTypeNoComment.PLUGIN : ResourceTypeNoComment.WIDGET
                })]
              }) : jsx(IconButton, {
                "aria-label": getI18nString("universal_insert.copy_link"),
                htmlAttributes: {
                  "data-tooltip-type": KindEnum.TEXT,
                  "data-tooltip": getI18nString("universal_insert.copy_link")
                },
                onClick: O,
                children: jsx(_$$W, {})
              })]
            }), jsx("div", {
              className: "detail_view--horizontalDivider--nZbBH"
            }), jsx("div", {
              className: "detail_view--resourceUsageDetails--dKwea",
              children: jsx(_$$f, {
                resource
              })
            }), jsx("div", {
              className: eU,
              children: canRate && isResourceApprovedPublic(resource) && jsx("div", {
                className: eU,
                children: jsx(eC, {
                  openRatingModal: e => {},
                  isInsertsModal: !0
                })
              })
            }), jsx(_$$R, {
              fallback: null,
              errorFallback: null,
              value: W.description
            })]
          })]
        })
      }), jsx(e$, {
        resourceId: e.resourceId
      })]
    })]
  });
}
function ez() {
  let {
    closeResource,
    activeTab
  } = IT();
  return jsx(eH, {
    onBack: closeResource,
    text: activeTab === _$$s2.PLUGIN ? renderI18nText("universal_insert.plugin") : renderI18nText("universal_insert.widget")
  });
}
function e$(e) {
  let {
    activeTab
  } = IT();
  let s = activeTab === _$$s2.PLUGIN ? "plugin" : "widget";
  let {
    href,
    onClick
  } = getVsCodeLinkProps(`/community/${s}/${e.resourceId}`);
  return jsxs(Fragment, {
    children: [jsxs(clickableBaseLinkTracked, {
      className: "detail_view--communityLink--e-ixL fd_browse_resource_modal--communityLinkBase---qAie text--fontPos11--2LvXf text--_fontBase--QdLsd",
      href,
      onClick,
      target: "_blank",
      trackingEventName: "Inserts Detail View - Browse More From Community",
      trusted: !0,
      children: [jsx(SvgComponent, {
        svg: _$$A6,
        className: "detail_view--communityLinkIcon--FPd8D fd_browse_resource_modal--communityLinkIcon--gNQIW text--fontPos12--YsUAh text--_fontBase--QdLsd"
      }), renderI18nText("universal_insert.see_more_details_in_community")]
    }), jsx("div", {
      className: "detail_view--communityLinkSpacer--2-rRR"
    })]
  });
}
function e4({
  isDesktop: e
}) {
  return jsxs(Y1, {
    direction: "vertical",
    verticalAlignItems: "center",
    horizontalAlignItems: "center",
    children: [jsx(SvgComponent, {
      svg: _$$A7,
      className: _$$s.colorIconSecondary.pb24.$,
      autosize: !0,
      height: isVsCodeEnvironment() ? "64px" : void 0
    }), jsx(e5, {
      isDesktop: e
    })]
  });
}
function e5({
  isDesktop: e
}) {
  let t = {
    learnMoreLink: jsx(_$$N2, {
      href: "https://www.figma.com/plugin-docs",
      newTab: !0,
      children: renderI18nText("dev_handoff.inspect_panel.learn_more_plugin_development")
    })
  };
  return jsx(Fragment, {
    children: e ? jsxs(Fragment, {
      children: [jsxs("div", {
        className: _$$s.alignCenter.$,
        children: [jsx(TextWithTruncation, {
          color: "secondary",
          children: renderI18nText("dev_handoff.inspect_panel.create_first_here")
        }), jsx("br", {}), jsx(TextWithTruncation, {
          children: renderI18nText("dev_handoff.inspect_panel.learn_more_link", t)
        })]
      }), jsx(e8, {})]
    }) : jsxs("div", {
      className: _$$s.alignCenter.$,
      children: [jsx(TextWithTruncation, {
        color: "secondary",
        children: renderI18nText("dev_handoff.inspect_panel.inspect_plugins_go_here")
      }), jsx("br", {}), jsx(TextWithTruncation, {
        color: "secondary",
        children: renderI18nText("dev_handoff.inspect_panel.use_desktop_to_develop")
      }), jsx("br", {}), jsx(TextWithTruncation, {
        children: renderI18nText("dev_handoff.inspect_panel.learn_more_link", t)
      })]
    })
  });
}
function e8() {
  let e = useDispatch();
  let t = Um();
  let s = t?.type === _$$kt;
  let r = useCallback(t => {
    s ? e(hideDropdownAction()) : e(showDropdownThunk({
      type: _$$kt,
      data: {
        targetRect: t.currentTarget?.getBoundingClientRect()
      }
    }));
  }, [e, s]);
  return jsxs("div", {
    className: _$$s.pt16.$,
    children: [jsx(Button, {
      onClick: r,
      variant: "secondary",
      children: jsxs(Y1, {
        direction: "horizontal",
        verticalAlignItems: "center",
        padding: 0,
        children: [jsx(_$$e, {
          className: _$$s.pr8.$
        }), jsx(TextWithTruncation, {
          children: renderI18nText("dev_handoff.inspect_panel.new_plugin")
        }), jsx(_$$r, {})]
      })
    }), s && jsx("div", {
      children: jsx(Pq, {
        resourceType: HubTypeEnum.PLUGIN
      })
    })]
  });
}
function e7() {
  let {
    activeTab
  } = IT();
  let t = isFullscreenDevHandoffView(useSelector(e => e.selectedView));
  let s = nl({
    allowNonVsCodePluginsInVsCode: !0
  });
  let r = yQ();
  let n = activeTab === _$$s2.WIDGET;
  let l = n ? r : s;
  let o = _$$M();
  let d = sp(n);
  return o && (Object.keys(l).length > 0 || d.length > 0) ? jsxs(TrackingProvider, {
    name: "Development",
    children: [Object.keys(l).map((e, t) => jsx(_$$ff, {
      resourceId: e,
      type: R7.DEVELOPMENT,
      keyboardNavigationPath: [B6, t]
    }, e)), d.map((e, t) => jsx(_$$ff, {
      resourceId: e.id,
      type: R7.DEVELOPMENT_MISSING_LOCAL,
      keyboardNavigationPath: [B6, Object.keys(l).length + t]
    }, e.id))]
  }) : t ? jsx(AutoLayout, {
    horizontalAlignItems: "center",
    verticalAlignItems: isVsCodeEnvironment() ? "start" : "center",
    children: jsx(e4, {
      isDesktop: !!o
    })
  }) : jsx(_$$W2, {
    isWidget: n
  });
}
let tr = "fd_browse_resource_modal--slidingPane--TqmkG sliding_pane--slidingPane--6OmDU";
let ta = "fd_browse_resource_modal--searchBarContainer--Q2kZ7";
let tn = "fd_browse_resource_modal--devHandoffSearchBarContainer--zw9mg";
let ti = "fd_browse_resource_modal--buzzSearchBarContainer--H7cP1";
let tl = "fd_browse_resource_modal--filterButtonActive--8krHg";
let to = "fd_browse_resource_modal--subtitle--Rvd0d text--fontPos11--2LvXf text--_fontBase--QdLsd";
let td = "fd_browse_resource_modal--sectionHeaderWithIcon--Tr-vS fd_browse_resource_modal--subtitle--Rvd0d text--fontPos11--2LvXf text--_fontBase--QdLsd";
let tc = "fd_browse_resource_modal--horizontalDivider--H67hA";
let tu = "fd_browse_resource_modal--horizontalDividerLong--cQZ0n fd_browse_resource_modal--horizontalDivider--H67hA";
let t_ = "fd_browse_resource_modal--mainViewHeader--AZpur";
let tm = "fd_browse_resource_modal--mainViewHeaderHeight--7TbQi";
let tx = "fd_browse_resource_modal--mainViewHeaderHeightBuzz--8P5yP";
let tp = "fd_browse_resource_modal--mainViewSelectorTitle--TnoUK text--fontPos12--YsUAh text--_fontBase--QdLsd";
let tg = "fd_browse_resource_modal--close--G1pa0";
let th = "fd_browse_resource_modal--emptySection--ANbkm text--fontPos12--YsUAh text--_fontBase--QdLsd";
let tv = "fd_browse_resource_modal--loadingSpinner--0IwJ9";
function tf() {
  let {
    activeTab
  } = IT();
  let t = BI();
  let s = isDevHandoffEditorType();
  let {
    href,
    onClick
  } = getVsCodeLinkProps(`/community/${activeTab === _$$s2.PLUGIN ? "plugins" : "widgets/figma_design"}${s ? "/devmode" : ""}`);
  return t?.shouldOptimizeForIpadApp ? null : jsxs(clickableBaseLinkTracked, {
    className: "fd_browse_resource_modal--communityLink--gI-Ei fd_browse_resource_modal--communityLinkBase---qAie text--fontPos12--YsUAh text--_fontBase--QdLsd",
    href,
    onClick,
    trackingEventName: "Inserts - Browse More From Community",
    target: "_blank",
    trusted: !0,
    children: [jsx(SvgComponent, {
      svg: _$$A6,
      className: "fd_browse_resource_modal--communityLinkIcon--gNQIW text--fontPos12--YsUAh text--_fontBase--QdLsd"
    }), renderI18nText("universal_insert.browse_more_in_community")]
  });
}
function tC({
  viewType: e,
  onBackPress: t
}) {
  let s = NF(gC);
  return jsxs(Fragment, {
    children: [jsx(tj, {
      viewType: e,
      onBackPress: t
    }), jsxs(_$$P, {
      height: s,
      onMouseDown: e => e.stopPropagation(),
      onPointerDown: e => e.stopPropagation(),
      children: [jsx(ty, {
        viewType: e
      }), jsx(tf, {})]
    })]
  });
}
function tj({
  viewType: e,
  onBackPress: t
}) {
  let s;
  let {
    activeTab
  } = IT();
  let n = activeTab === _$$s2.PLUGIN;
  s = e === _$$Y.ORG_PRIVATE_EXPANDED_LIST ? n ? renderI18nText("universal_insert.all_internal_plugins") : renderI18nText("universal_insert.all_internal_widgets") : n ? renderI18nText("universal_insert.all_approved_plugins") : renderI18nText("universal_insert.all_approved_widgets");
  return jsxs("div", {
    className: "fd_browse_resource_modal--expandedViewHeader--uLZl5",
    children: [jsxs("div", {
      className: "fd_browse_resource_modal--left--si6Cj",
      children: [jsx(SvgComponent, {
        svg: _$$A5,
        className: "fd_browse_resource_modal--backButton--S7dMz",
        onClick: t,
        onMouseDown: e => e.stopPropagation(),
        onPointerDown: e => e.stopPropagation()
      }), jsx("div", {
        className: "fd_browse_resource_modal--expandedViewHeaderTitle--wG-j2 text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: s
      })]
    }), jsx(Ex, {
      containerClassName: tg
    })]
  });
}
function ty({
  viewType: e
}) {
  let t;
  let {
    activeTab
  } = IT();
  let r = _$$h("plugin");
  let n = _$$h("widget");
  let i = activeTab === _$$s2.WIDGET;
  let l = ll();
  let o = bT(Object.values(l));
  let d = U6();
  let c = i ? Object.keys(d) : o.map(e => e.plugin_id);
  t = e === _$$Y.ORG_PRIVATE_EXPANDED_LIST ? jsx(Fragment, {
    children: (i ? n : r).map((e, t) => jsx(_$$ff, {
      resourceId: e.plugin_id,
      type: R7.ORG_PRIVATE,
      keyboardNavigationPath: [B6, t]
    }, e.plugin_id))
  }) : jsx(Fragment, {
    children: c.map((e, t) => jsx(_$$ff, {
      resourceId: e,
      type: R7.COMMUNITY,
      keyboardNavigationPath: [B6, t]
    }, e))
  });
  return jsx("div", {
    className: "fd_browse_resource_modal--expandedViewContainer--EvsBd",
    children: t
  });
}
function tR(e) {
  let t = useCurrentPublicPlan("OrgView").unwrapOr(null);
  let s = getParentOrgIdIfOrgLevel(t);
  return s ? jsx(tM, {
    currentOrgId: s,
    viewExpandedList: e.viewExpandedList
  }) : jsx(LoadingSpinner, {
    className: tv
  });
}
function tM(e) {
  let {
    currentOrgId,
    viewExpandedList
  } = e;
  let r = useCurrentPrivilegedPlan("_OrgView").unwrapOr(null);
  let l = r?.pluginsWhitelistEnforced ?? !1;
  let o = r?.widgetsWhitelistEnforced ?? !1;
  let {
    activeTab
  } = IT();
  let c = activeTab === _$$s2.WIDGET;
  let u = _$$h("plugin");
  let _ = bT(u);
  let m = _$$h("widget");
  let x = c ? m : _;
  let p = x.length > 0;
  let g = c ? o : l;
  let h = c ? getWidgetAllowListKey : getPluginAllowListKey;
  let v = useCurrentFileKey();
  let f = mC(h(currentOrgId, v));
  let j = ll();
  let y = bT(Object.values(j)).map(e => e.plugin_id);
  let w = U6();
  let b = useMemo(() => Object.keys(w), [w]);
  let L = Be();
  let I = pR(L);
  let E = I.orgWidgets;
  let P = I.orgPlugins;
  let k = useSelector(e => e.orgUsersByOrgId[currentOrgId][e.user.id]?.permission === FUserRoleType.GUEST);
  let R = selectWithShallowEqual(e => k ? {} : filterResourcesByOrgId(filterPublishedResources(Object.values(e.publishedPlugins)), currentOrgId));
  let M = useMemo(() => {
    let e = Object.values(P).filter(e => !R[e.plugin_id]);
    l && (e = e.filter(e => j[e.plugin_id]));
    return e.sort(YW);
  }, [j, l, R, P]);
  let B = Ol(M);
  B = bT(B);
  let S = useMemo(() => B.map(e => e.plugin_id), [B]);
  let D = useMemo(() => y.filter(e => !P[e]), [y, P]);
  let H = useMemo(() => {
    let e = Object.values(E).filter(e => !s7(e, currentOrgId));
    o && (e = e.filter(e => w[e.plugin_id]));
    return e.sort(YW);
  }, [E, o, currentOrgId, w]);
  let A = Ol(H);
  let O = useMemo(() => A.map(e => e.plugin_id), [A]);
  let Z = useMemo(() => b.filter(e => !E[e]), [b, E]);
  let F = c ? Z : D;
  let U = c ? O : S;
  let W = p ? jsxs(Fragment, {
    children: [(g ? x.slice(0, Xo) : x).map((e, t) => jsx(_$$ff, {
      resourceId: e.plugin_id,
      type: R7.ORG_PRIVATE,
      keyboardNavigationPath: [B6, t]
    }, e.plugin_id)), g && x.length > Xo && jsx(tB, {
      viewExpandedList: () => {
        viewExpandedList(_$$Y.ORG_PRIVATE_EXPANDED_LIST);
      },
      ctaText: c ? getI18nString("universal_insert.all_internal_widgets") : getI18nString("universal_insert.all_internal_plugins")
    })]
  }) : jsx("div", {
    className: th,
    children: c ? renderI18nText("universal_insert.no_internal_widgets") : renderI18nText("universal_insert.no_internal_plugins")
  });
  let {
    href,
    onClick
  } = getVsCodeLinkProps(`/community/${c ? "widgets" : "plugins"}`);
  let $ = g && jsxs(Fragment, {
    children: [jsx("div", {
      className: tu
    }), jsxs("div", {
      className: td,
      children: [renderI18nText("universal_insert.approved_from_figma_community"), jsx("a", {
        href,
        target: "_blank",
        children: jsx(IconButton, {
          onClick,
          "aria-label": getI18nString("universal_insert.go_to_community"),
          htmlAttributes: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("universal_insert.go_to_community")
          },
          children: jsx(_$$N3, {})
        })
      })]
    }), f && 0 === F.length ? jsx("div", {
      className: th,
      children: c ? renderI18nText("universal_insert.organization_has_no_approved_community_widgets") : renderI18nText("universal_insert.organization_has_no_approved_community_plugins")
    }) : jsxs(Fragment, {
      children: [(p ? F.slice(0, 5) : F).map((e, t) => jsx(_$$ff, {
        resourceId: e,
        type: R7.COMMUNITY,
        keyboardNavigationPath: [B6 + 1, t]
      }, e)), p && F.length > 5 && jsx(tB, {
        viewExpandedList: () => {
          viewExpandedList(_$$Y.ORG_ALLOWLIST_EXPANDED_LIST);
        },
        ctaText: c ? getI18nString("universal_insert.all_approved_widgets") : getI18nString("universal_insert.all_approved_plugins")
      })]
    })]
  });
  let X = U.length > 0 ? jsxs(Fragment, {
    children: [jsx("div", {
      className: tc
    }), jsxs("div", {
      className: td,
      children: [renderI18nText("universal_insert.saved_from_community"), jsx("a", {
        href,
        target: "_blank",
        children: jsx(IconButton, {
          "aria-label": getI18nString("universal_insert.go_to_community"),
          htmlAttributes: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("universal_insert.go_to_community")
          },
          onClick,
          children: jsx(_$$N3, {})
        })
      })]
    }), U.map((e, t) => jsx(_$$ff, {
      resourceId: e,
      type: R7.SAVED,
      keyboardNavigationPath: [B6 + 2, t]
    }, e))]
  }) : jsxs(Fragment, {
    children: [jsx("div", {
      className: tc
    }), jsxs("div", {
      className: td,
      children: [renderI18nText("universal_insert.saved_from_community"), jsx("a", {
        href,
        target: "_blank",
        children: jsx(IconButton, {
          onClick,
          "aria-label": getI18nString("universal_insert.go_to_community"),
          htmlAttributes: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("universal_insert.go_to_community")
          },
          children: jsx(_$$N3, {})
        })
      })]
    }), jsx("div", {
      className: th,
      children: c ? renderI18nText("universal_insert.no_saved_widgets") : renderI18nText("universal_insert.no_saved_plugins")
    })]
  });
  return jsxs(TrackingProvider, {
    name: "Org",
    children: [W, X, $]
  });
}
function tB(e) {
  return jsxs("button", {
    onClick: e.viewExpandedList,
    className: "fd_browse_resource_modal--viewExpandedCta--xrZpk text--fontPos12--YsUAh text--_fontBase--QdLsd",
    children: [jsx("span", {
      children: e.ctaText
    }), jsx(SvgComponent, {
      svg: _$$A8
    })]
  });
}
let tY = async (e, t) => {
  let s = {
    caller: _$$z.EDITOR_COMMUNITY_VIEW,
    resourceType: [vtl.PLUGIN],
    editorType: e ? DesignToolType.DEV_HANDOFF : DesignToolType.DESIGN,
    sortBy: SortOptions.Browse.POPULAR,
    includeContent: !0
  };
  e && t && (s.capabilityType = _$$h2.CODEGEN);
  let [r, a] = await Promise.all([liveStoreInstance.fetch(_$$a2.ResourcesPaginatedQuery({
    ...s,
    price: PricingOptions.FREE,
    pageSize: 18
  })), liveStoreInstance.fetch(_$$a2.ResourcesPaginatedQuery({
    ...s,
    price: PricingOptions.PAID,
    pageSize: 12
  }))]);
  return [...r, ...a].map(e => getPluginContent(e)).filter(e => !!e);
};
let tK = async () => {
  let e = {
    caller: _$$z.EDITOR_COMMUNITY_VIEW,
    resourceType: [vtl.WIDGET],
    editorType: DesignToolType.DESIGN,
    sortBy: SortOptions.Browse.POPULAR,
    includeContent: !0
  };
  let [t, s] = await Promise.all([liveStoreInstance.fetch(_$$a2.ResourcesPaginatedQuery({
    ...e,
    price: PricingOptions.FREE,
    pageSize: 18
  })), liveStoreInstance.fetch(_$$a2.ResourcesPaginatedQuery({
    ...e,
    price: PricingOptions.PAID,
    pageSize: 12
  }))]);
  return [...t, ...s].map(e => getWidgetContent(e)).filter(e => !!e);
};
function tJ({
  viewExpandedList: e,
  keyboardNavigationOffset: t,
  shortDivider: s
}) {
  let {
    activeTab
  } = IT();
  let l = activeTab === _$$s2.WIDGET;
  let o = isDevHandoffEditorType();
  let d = useAtomWithSubscription(RB) && o;
  let [u, _] = useState(!1);
  let {
    allowListIsLoading,
    allowList,
    hasAllowList,
    hasPluginAllowList,
    hasWidgetAllowList,
    publicExtensionsDisallowed
  } = jA(l);
  let f = bT(Object.values(allowList)).map(e => e.plugin_id);
  let [j, y] = useState(null);
  let [w, L] = useState(null);
  let [E, P] = useState(!1);
  let [k, R] = useState(!1);
  let M = useDispatch();
  useEffect(() => {
    let e = u !== d;
    hasPluginAllowList || publicExtensionsDisallowed || !e && null !== j || E || (P(!0), tY(o, d).then(e => {
      M(Qi({
        publishedPlugins: e,
        src: "Figma inserts modal recents view"
      }));
      y(shuffle(e));
      P(!1);
      _(d);
    }).catch(e => {
      reportError(_$$e2.COMMUNITY, e);
      P(!1);
      y([]);
      _(d);
    }));
  }, [M, j, E, o, hasAllowList, hasPluginAllowList, publicExtensionsDisallowed, d, u]);
  useEffect(() => {
    hasWidgetAllowList || null !== w || k || (R(!0), tK().then(e => {
      M(Qi({
        publishedPlugins: e,
        src: "Figma inserts modal recents view"
      }));
      L(shuffle(e));
      R(!1);
    }).catch(e => {
      reportError(_$$e2.COMMUNITY, e);
      R(!1);
      L([]);
    }));
  }, [M, w, k, hasAllowList, hasWidgetAllowList]);
  let B = l ? w : j;
  let S = l ? k : E;
  let {
    href,
    onClick
  } = getVsCodeLinkProps(`/community/${activeTab === _$$s2.PLUGIN ? "plugins" : "widgets"}`);
  return useMemo(() => {
    if (hasAllowList ? allowListIsLoading : S) return jsx("div", {
      className: "xqui205 xh8yej3 x1o2pa38",
      children: jsx(_$$k2, {})
    });
    if (!(null !== B) && !hasAllowList) return null;
    let n = hasAllowList ? f : B.map(e => e.id);
    return publicExtensionsDisallowed || 0 === n.length ? null : jsxs(TrackingProvider, {
      name: hasAllowList ? "Approved plugins" : "From Community",
      children: [jsx("div", {
        className: s ? tc : tu
      }), jsxs("div", {
        className: td,
        "data-onboarding-key": "community_feed_header",
        children: [hasAllowList ? renderI18nText("universal_insert.approved_from_figma_community") : renderI18nText("universal_insert.from_community"), jsx("a", {
          href,
          target: "_blank",
          children: jsx(Me, {
            onClick,
            "aria-label": getI18nString("universal_insert.go_to_community"),
            htmlAttributes: {
              "data-tooltip-type": KindEnum.TEXT,
              "data-tooltip": getI18nString("universal_insert.go_to_community")
            },
            trackingEventName: "Inserts - Browse More From Community Icon Button",
            children: jsx(_$$N3, {})
          })
        })]
      }), n.slice(0, hasAllowList ? 5 : 10).map((e, s) => jsx(_$$ff, {
        type: R7.COMMUNITY,
        resourceId: e,
        keyboardNavigationPath: [t, s]
      }, e)), hasAllowList && n.length > 5 ? jsx(tB, {
        viewExpandedList: () => {
          e(_$$Y.ORG_ALLOWLIST_EXPANDED_LIST);
        },
        ctaText: l ? getI18nString("universal_insert.all_approved_widgets") : getI18nString("universal_insert.all_approved_plugins")
      }) : jsxs(Fragment, {
        children: [jsx(tf, {}), jsx(_$$a, {
          onIntersectionChange: e => {
            e.isIntersecting && trackEventAnalytics("community_feed_bottom_reached", {
              location: "inserts",
              resourceType: activeTab
            });
          },
          style: o ? {
            paddingBottom: 30
          } : void 0
        })]
      })]
    });
  }, [hasAllowList, allowListIsLoading, S, B, f, publicExtensionsDisallowed, href, onClick, l, e, t, s, activeTab, o]);
}
function t1(e) {
  let t = Be();
  let s = t.widgets;
  let r = Object.values(t.plugins).sort(YW).filter(e => "user" === e.installed_by);
  let a = memoizeByArgs(() => r);
  let i = Ol(a());
  let l = (i = bT(i)).map(e => e.plugin_id);
  let o = Object.values(s).sort(YW).filter(e => "user" === e.installed_by);
  let d = memoizeByArgs(() => o);
  let c = Ol(d()).map(e => e.plugin_id);
  return useMemo(() => e ? c : l, [l, c, e]);
}
function t3(e) {
  let t = t1(e.isWidget);
  let [s, r] = useState(!1);
  let i = useMemo(() => s ? t : t.slice(0, 40), [t, s]);
  return 0 === t.length ? null : jsxs(TrackingProvider, {
    name: "saved",
    children: [jsx("div", {
      className: to,
      children: renderI18nText("universal_insert.saved")
    }), i.map((e, t) => jsx(_$$ff, {
      resourceId: e,
      type: R7.SAVED,
      keyboardNavigationPath: [B6 + 1, t]
    }, e)), t.length > 40 && !s && jsx("button", {
      className: "fd_browse_resource_modal--showAllSavedExtensionsButton--LDbiv text--fontPos12--YsUAh text--_fontBase--QdLsd",
      onClick: () => r(!0),
      children: e.isWidget ? renderI18nText("universal_insert.show_all_saved_widgets") : renderI18nText("universal_insert.show_all_saved_plugins")
    })]
  });
}
function t2(e) {
  let {
    activeTab
  } = IT();
  let s = op();
  let r = qr();
  let i = Be();
  let l = activeTab === _$$s2.WIDGET;
  let {
    filterByAllowlist,
    filterByPublicResourcesAllowed
  } = jA(l);
  let c = l ? r : s;
  c = filterByPublicResourcesAllowed(c = filterByAllowlist(c));
  c = bT(c);
  let u = useMemo(() => c.length > 0 ? jsxs(TrackingProvider, {
    name: "recents",
    children: [jsx("div", {
      className: to,
      "data-onboarding-key": "recents_plugin_header",
      children: renderI18nText("universal_insert.recents")
    }), c.slice(0, Zm).map((e, t) => jsx(_$$ff, {
      type: R7.RECENT,
      resourceId: e.plugin_id,
      keyboardNavigationPath: [B6, t]
    }, e.plugin_id))]
  }) : jsx(Fragment, {}), [c]);
  let _ = t1(l);
  if (!0 === i.loaded && c.length + _.length === 0) return jsxs(TrackingProvider, {
    name: "Recents and saved",
    children: [jsx(_$$H, {
      isWidget: activeTab === _$$s2.WIDGET
    }), jsx(tJ, {
      viewExpandedList: e.viewExpandedList,
      keyboardNavigationOffset: B6 + 2
    })]
  });
  let m = jsx(t3, {
    isWidget: activeTab === _$$s2.WIDGET
  });
  let x = c.length > 0;
  let p = _.length > 0;
  return jsxs(TrackingProvider, {
    name: "Recents and saved",
    children: [u, p && x && jsx("div", {
      className: tc
    }), m, jsx(tJ, {
      viewExpandedList: e.viewExpandedList,
      keyboardNavigationOffset: B6 + 2
    })]
  });
}
function t8() {
  let e = useRef({});
  let t = useCallback((t, s) => {
    e.current[t] = s;
  }, []);
  let s = useCallback(t => e.current[t] || [], []);
  let r = useCallback(t => t in e.current, []);
  let a = useCallback(() => {
    e.current = {};
  }, []);
  return useMemo(() => ({
    setResultsForQuery: t,
    getResultsForQuery: s,
    hasQueryResultsCached: r,
    resetCache: a
  }), [t, s, r, a]);
}
let t6 = new Ef([], {
  ...FUSE_CONFIG_DEFAULT,
  keys: FUSE_KEYS_PROFILE
});
let t7 = new Ef([], {
  ...FUSE_CONFIG_DEFAULT,
  keys: [{
    name: "name",
    weight: 1
  }]
});
let se = new Ef([], {
  ...FUSE_CONFIG_DEFAULT,
  keys: FUSE_KEYS_PROFILE
});
function st(e) {
  let t;
  let {
    activeTab
  } = IT();
  let r = activeTab === _$$s2.WIDGET;
  let i = isDevHandoffEditorType();
  let l = useIsSelectedViewFullscreenCooper();
  let o = e.query.trim();
  let d = getCurrentFileType();
  let c = _$$k3.getApiEditorType(d);
  let {
    pluginServerSideSearch,
    pluginSearchIsLoading,
    pluginSearchHasResolved
  } = I5(c);
  let {
    widgetServerSideSearch,
    widgetSearchIsLoading,
    widgetSearchHasResolved
  } = SG(c);
  let {
    getResultsForQuery,
    setResultsForQuery,
    resetCache
  } = t8();
  let w = getResultsForQuery(o);
  let {
    getResultsForQuery: _getResultsForQuery,
    setResultsForQuery: _setResultsForQuery,
    resetCache: _resetCache
  } = t8();
  let k = _getResultsForQuery(o);
  let {
    getResultsForQuery: _getResultsForQuery2,
    setResultsForQuery: _setResultsForQuery2,
    hasQueryResultsCached,
    resetCache: _resetCache2
  } = t8();
  let D = ss(_getResultsForQuery2(o), [w]);
  let {
    getResultsForQuery: _getResultsForQuery3,
    setResultsForQuery: _setResultsForQuery3,
    hasQueryResultsCached: _hasQueryResultsCached,
    resetCache: _resetCache3
  } = t8();
  let F = ss(_getResultsForQuery3(o), [w, D]);
  let {
    getResultsForQuery: _getResultsForQuery4,
    setResultsForQuery: _setResultsForQuery4,
    resetCache: _resetCache4
  } = t8();
  let G = ss(_getResultsForQuery4(o), [w, D, F]);
  let {
    getResultsForQuery: _getResultsForQuery5,
    setResultsForQuery: _setResultsForQuery5,
    hasQueryResultsCached: _hasQueryResultsCached2,
    resetCache: _resetCache5
  } = t8();
  let K = ss(_getResultsForQuery5(o), [w, D, F, G]);
  useEffect(() => {
    resetCache();
    _resetCache();
    _resetCache2();
    _resetCache3();
    _resetCache5();
    _resetCache4();
  }, [r, _resetCache4, _resetCache5, _resetCache2, _resetCache, _resetCache3, resetCache]);
  let J = Tg();
  let ee = qr();
  let es = $1();
  let er = yQ();
  let ea = ll();
  let en = U6();
  let ei = cW();
  let el = ZT();
  let eo = useMemoStable(() => Object.keys(r ? en : ea).map(e => getPluginVersion((r ? el : ei)[e])), [ea, el, ei, en, r]);
  useEffect(() => {
    t6.set(Object.values(r ? ee : J));
  }, [J, ee, r]);
  useEffect(() => {
    t7.set(Object.values(r ? er : es));
  }, [es, er, r]);
  useEffect(() => {
    se.set(eo);
  }, [eo]);
  let ed = useCurrentUserOrg();
  let {
    serverSideSearch,
    isLoading,
    hasResolved
  } = activeTab === _$$s2.PLUGIN ? {
    serverSideSearch: pluginServerSideSearch,
    isLoading: pluginSearchIsLoading,
    hasResolved: pluginSearchHasResolved
  } : {
    serverSideSearch: widgetServerSideSearch,
    isLoading: widgetSearchIsLoading,
    hasResolved: widgetSearchHasResolved
  };
  useEffect(() => {
    "" !== o && (_hasQueryResultsCached2(o) && _hasQueryResultsCached(o) && hasQueryResultsCached(o) || serverSideSearch(o, e => _setResultsForQuery5(o, e), e => _setResultsForQuery3(o, e), e => _setResultsForQuery2(o, e)), setResultsForQuery(o, t6.search(o).map(e => e.plugin_id)), _setResultsForQuery(o, t7.search(o).map(e => e.localFileId.toString())), _setResultsForQuery4(o, se.search(o).map(e => e.plugin_id)));
  }, [o, _hasQueryResultsCached2, hasQueryResultsCached, _hasQueryResultsCached, serverSideSearch, _setResultsForQuery4, _setResultsForQuery5, _setResultsForQuery2, _setResultsForQuery, _setResultsForQuery3, setResultsForQuery]);
  let em = z4.getIsExtension() ? gC + Ix : i ? gC + Ix + ff + 8 : gC + Ix;
  let ex = NF(em);
  let ep = i ? tn : l ? ti : ta;
  let eg = i ? "fd_browse_resource_modal--devHandoffSearchBarContainerScrolled--KosxI fd_browse_resource_modal--devHandoffSearchBarContainer--zw9mg" : l ? ti : "fd_browse_resource_modal--searchBarContainerScrolled--2-lJE fd_browse_resource_modal--searchBarContainer--Q2kZ7";
  let eh = useCallback(t => {
    let s = e.searchContainerRef.current;
    s && (t > 0 ? s.className = eg : s.className = ep);
  }, [e.searchContainerRef, eg, ep]);
  useEffect(() => () => {
    e.searchContainerRef.current && (e.searchContainerRef.current.className = ep);
  }, []);
  let ev = ed && (r ? ed.widgets_whitelist_enforced : ed.plugins_whitelist_enforced);
  let ef = (!ev || Cs({
    org: ed,
    isWidget: r
  })) && K && K.length > 0 && hasResolved;
  let eC = ev && G.length > 0;
  let ej = ed && F && F.length > 0 && hasResolved;
  let ey = D.length > 0 && hasResolved;
  let ew = w.length > 0;
  let eb = k.length > 0;
  let eL = hasResolved && (ef || ej || ew || ey || eC);
  if (hasResolved && !(ew || eb || eL)) t = jsx("div", {
    className: th,
    children: r ? ev ? renderI18nText("universal_insert.no_widgets_matching_query_for_allowlist", {
      orgName: ed.name,
      query: o
    }) : renderI18nText("universal_insert.no_widgets_matching_query", {
      query: o
    }) : ev ? renderI18nText("universal_insert.no_plugins_matching_query_for_allowlist", {
      orgName: ed.name,
      query: o
    }) : renderI18nText("universal_insert.no_plugins_matching_query", {
      query: o
    })
  });else {
    t = [];
    let e = B6;
    ew && (t.push(jsx(sa, {
      sectionHeader: renderI18nText("universal_insert.recents"),
      ids: w,
      type: R7.RECENT,
      sectionIdx: e
    }, R7.RECENT)), e += 1);
    eb && (t.push(jsx(sa, {
      sectionHeader: renderI18nText("universal_insert.development"),
      ids: k,
      type: R7.DEVELOPMENT,
      sectionIdx: e
    }, R7.DEVELOPMENT)), e += 1);
    isLoading && !eL ? t.push(jsx(LoadingSpinner, {
      className: tv
    }, "Loading spinner")) : (ey && (t.push(jsx(sa, {
      sectionHeader: renderI18nText("universal_insert.saved"),
      ids: D,
      type: R7.SAVED,
      sectionIdx: e
    }, R7.SAVED)), e += 1), ej && (t.push(jsx(sa, {
      sectionHeader: ed.name,
      ids: F,
      type: R7.ORG_PRIVATE,
      sectionIdx: e
    }, R7.ORG_PRIVATE)), e += 1), eC && (t.push(jsx(sa, {
      sectionHeader: renderI18nText("universal_insert.approved_from_figma_community"),
      ids: G,
      type: R7.COMMUNITY,
      sectionIdx: e
    }, `ALLOW_LIST_${R7.COMMUNITY}`)), e += 1), ef && t.push(jsx(sa, {
      sectionHeader: renderI18nText("universal_insert.from_community"),
      ids: K,
      type: R7.COMMUNITY,
      sectionIdx: e
    }, R7.COMMUNITY)));
  }
  return jsx(_$$P, {
    innerClassName: l ? "fd_browse_resource_modal--buzzScrollContainer--XtGn8" : "",
    height: ex,
    onScroll: eh,
    onMouseDown: e => e.stopPropagation(),
    onPointerDown: e => e.stopPropagation(),
    children: jsx(TrackingProvider, {
      name: "search",
      properties: {
        searchQuery: o,
        resourceType: activeTab
      },
      children: t
    })
  });
}
let ss = (e, t) => {
  let s = {};
  t.forEach(e => e.forEach(e => s[e] = !0));
  return e.filter(e => !s[e]);
};
function sr(e) {
  return jsx("div", {
    onClick: () => trackEventAnalytics("search result clicked"),
    "data-testid": `browse-resource-tile-${e.resourceId}`,
    children: jsx(_$$ff, {
      resourceId: e.resourceId,
      type: e.type,
      keyboardNavigationPath: e.keyboardNavigationPath,
      shouldFocusFirstItem: !0
    })
  });
}
function sa(e) {
  return jsxs(Fragment, {
    children: [e.sectionIdx > B6 && jsx("div", {
      className: tc
    }), jsx("div", {
      className: "fd_browse_resource_modal--sectionHeader--a-cdT fd_browse_resource_modal--_sectionHeaderBase--dsvXv text--fontPos12--YsUAh text--_fontBase--QdLsd",
      children: e.sectionHeader
    }), e.ids.map((t, s) => jsx(sr, {
      resourceId: t,
      type: e.type,
      keyboardNavigationPath: [e.sectionIdx, s]
    }, t))]
  });
}
let sn = () => ({
  [_$$s2.COMPONENT]: {
    label: getI18nString("universal_insert.components"),
    tab: _$$s2.COMPONENT,
    resourceTypeLabel: getI18nString("universal_insert.components_resource_type")
  },
  [_$$s2.PLUGIN]: {
    label: getI18nString("community.view_bar.plugins"),
    tab: _$$s2.PLUGIN,
    resourceTypeLabel: getI18nString("community.plugins.plugin")
  },
  [_$$s2.WIDGET]: {
    label: getI18nString("community.view_bar.widgets"),
    tab: _$$s2.WIDGET,
    resourceTypeLabel: getI18nString("community.plugins.widget")
  }
});
function si(e) {
  return jsxs("div", {
    className: "fd_browse_resource_modal--tabHeader--edoDO",
    children: [jsx("div", {
      className: "fd_browse_resource_modal--tabsContainer--v6cIk",
      children: Object.entries(sn()).map(([t, s]) => jsx("div", {
        className: "fd_browse_resource_modal--tabClickTarget--QDM1e",
        role: "tab",
        onClick: () => e.onClick(s.tab),
        onMouseDown: e => e.stopPropagation(),
        onPointerDown: e => e.stopPropagation(),
        tabIndex: 0,
        children: jsx("div", {
          "data-label": s.label,
          className: s.tab === e.selectedTab ? "fd_browse_resource_modal--selectedTab--u91ec fd_browse_resource_modal--tab--Olia- text--fontPos11--2LvXf text--_fontBase--QdLsd" : "fd_browse_resource_modal--tab--Olia- text--fontPos11--2LvXf text--_fontBase--QdLsd",
          children: s.label
        }, t)
      }, t))
    }), jsx(Ex, {
      containerClassName: tg
    })]
  });
}
let sl = "BROWSE_CODEGEN_FILTER_DROPDOWN";
export function $$so0() {
  let e = useRef(null);
  let {
    fdPreviewResource,
    initialFdView
  } = useSelector(e => e.universalInsertModal);
  let l = fdPreviewResource?.id;
  let {
    activeTab,
    currentView,
    setCurrentViewOrTab
  } = IT();
  let u = isDevHandoffEditorType();
  let _ = useIsSelectedViewFullscreenCooper();
  let m = u || _ ? "fd_browse_resource_modal--slidingPaneContainerAdjustable--ge7kl sliding_pane--slidingPaneContainer--RQkXf" : "fd_browse_resource_modal--slidingPaneContainer--sW-oK sliding_pane--slidingPaneContainer--RQkXf";
  let [p, h] = useState(initialFdView ? "" : r || "");
  let [v, f] = useState(_$$Y.MAIN);
  let j = useCallback(e => {
    if (e.keyCode === KeyCodes.ENTER) {
      let t = e.target;
      let s = t?.querySelector("button");
      s?.click();
    }
  }, []);
  useEffect(() => {
    r = p;
  }, [p]);
  let w = useMemo(() => jsx(si, {
    onClick: t => {
      t !== _$$s2.COMPONENT && e.current?.querySelector("input")?.focus();
      setCurrentViewOrTab({
        newTab: t
      });
    },
    selectedTab: activeTab
  }), [activeTab, setCurrentViewOrTab]);
  let b = useMemo(() => {
    let t = ta;
    return (u ? t = tn : _ && (t = ti), activeTab === _$$s2.COMPONENT) ? jsx(TrackingProvider, {
      name: activeTab,
      children: jsx($, {
        header: w,
        query: p,
        setQuery: h
      })
    }) : jsxs(TrackingProvider, {
      name: activeTab,
      children: [!u && !_ && w, jsx("div", {
        onMouseDown: e => e.stopPropagation(),
        onPointerDown: e => e.stopPropagation(),
        children: jsxs(dP, {
          onKeyDown: j,
          children: [jsx("div", {
            className: t,
            ref: e,
            children: jsx(sd, {
              searchQuery: p,
              placeholder: activeTab === _$$s2.PLUGIN ? getI18nString("universal_insert.search_all_plugins") : activeTab === _$$s2.WIDGET ? getI18nString("universal_insert.search_all_widgets") : getI18nString("universal_insert.search_all_extensions"),
              setSearchQuery: h
            })
          }), 0 === p.length && jsx(sc, {
            viewExpandedList: f,
            currentView,
            setCurrentView: e => setCurrentViewOrTab({
              newView: e
            })
          }), p.length > 0 && jsx(st, {
            query: p,
            searchContainerRef: e
          })]
        })
      })]
    });
  }, [activeTab, j, p, u, _, w, currentView, setCurrentViewOrTab]);
  let L = null;
  l ? L = jsx(eQ, {
    resourceId: l
  }) : (v === _$$Y.ORG_PRIVATE_EXPANDED_LIST || v === _$$Y.ORG_ALLOWLIST_EXPANDED_LIST) && (L = jsx(dP, {
    onKeyDown: j,
    children: jsx(tC, {
      viewType: v,
      onBackPress: () => f(_$$Y.MAIN)
    })
  }));
  return jsxs("div", {
    className: m,
    children: [jsx("div", {
      className: L ? "fd_browse_resource_modal--slidingPaneLeft--TOiZt sliding_pane--slidingPaneLeft--Wrfdy sliding_pane--slidingPane--6OmDU" : tr,
      children: b
    }), L && jsx("div", {
      className: tr,
      children: L
    })]
  });
}
function sd({
  searchQuery: e,
  setSearchQuery: t,
  placeholder: s
}) {
  let r = useDispatch();
  let {
    setKeyboardNavigationElement
  } = M3({
    id: "search",
    path: [np, 0]
  });
  let x = Um();
  let h = x?.type === sl;
  let f = useRef(null);
  let [N, T] = useAtomValueAndSetter(RB);
  let E = N && !h;
  let R = LR();
  let M = useCallback(s => "Escape" === s.key && (e ? t("") : R(), !0), [R, e, t]);
  let B = useDebouncedCallback(e => {
    e.length > 0 ? r(Dy({
      entryPoint: "figma:inserts"
    })) : r(ky());
    t(e);
  }, 300);
  let D = () => {
    r(ky());
    t("");
  };
  useEffect(() => () => {
    r(ky());
  }, [r]);
  let H = useCallback(() => {
    h ? r(hideDropdownAction()) : r(showDropdownThunk({
      type: sl
    }));
  }, [r, h]);
  let A = [];
  A.push(jsx(MM, {
    checked: N,
    onClick: () => {
      T(!N);
      H();
    },
    role: "menuitemcheckbox",
    children: getI18nString("dev_handoff.inspect_panel.search_bar_filter_codegen_option")
  }));
  let O = isDevHandoffEditorType();
  let Z = useIsSelectedViewFullscreenCooper();
  let F = Z ? jsx(_$$N, {
    searchQuery: e,
    placeholder: s,
    onChange: B,
    clearSearch: D
  }) : jsx(IW, {
    ref: e => setKeyboardNavigationElement(e?.searchInput ?? null),
    className: _()(O ? "fd_browse_resource_modal--searchBarDevHandoff--uuPW-" : "fd_browse_resource_modal--searchBar---bmO8", {
      "fd_browse_resource_modal--searchBarEmpty--8dNhE": "" === e
    }),
    clearSearch: D,
    focusOnMount: !O,
    hideXIcon: !e,
    isKeyDownHandled: M,
    onChange: B,
    placeholder: s,
    query: e,
    selectTextOnMount: !O
  });
  if (!O || Z || e) return F;
  let U = "dev-mode-codegen-filter-menu";
  return jsxs("div", {
    className: "fd_browse_resource_modal--searchBarAndFilterContainer--F1Wg8",
    children: [F, jsx("div", {
      className: "fd_browse_resource_modal--searchBarFilterButton--hQeym",
      children: jsx("div", {
        ref: f,
        children: jsx(_$$d, {
          "aria-expanded": h,
          onClick: H,
          htmlAttributes: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("dev_handoff.inspect_panel.search_bar_filter")
          },
          "aria-label": getI18nString("dev_handoff.inspect_panel.search_bar_filter"),
          "aria-haspopup": "menu",
          "aria-controls": U,
          children: E ? jsx(_$$S, {
            className: _()({
              [tl]: E
            })
          }) : jsx(_$$S2, {
            className: _()({
              [tl]: E
            })
          })
        })
      })
    }), h && f.current && jsx(Jz, {
      autofocusPrevElementOnEsc: !0,
      autofocusPrevElementOnSelect: !0,
      autofocusPrevElementOnTab: !1,
      focusContainerOnMount: !0,
      hideDropdown: H,
      id: U,
      options: A,
      propagateCloseClick: !0,
      showPoint: !0,
      targetRect: f.current.getBoundingClientRect()
    })]
  });
}
function sc(e) {
  let t = useRef(null);
  let s = isDevHandoffEditorType();
  let r = useIsSelectedViewFullscreenCooper();
  let l = z4.getIsExtension() ? Ix + gC + 48 : s ? gC + Kr + Ix + ff : gC + Kr + Ix;
  let {
    activeTab,
    currentView
  } = IT();
  let c = NF(l);
  let u = useRef(null);
  let m = useDispatch();
  let x = useCallback(e => {
    t.current && (e > 0 ? t.current.className = _()("fd_browse_resource_modal--mainViewHeaderScrolled--RPI7X fd_browse_resource_modal--mainViewHeader--AZpur", tm) : t.current.className = _()(t_, r ? tx : tm), m(hideDropdownAction()));
  }, [t, m, r]);
  useEffect(() => {
    u.current?.scrollToTop();
  }, [activeTab, currentView]);
  let p = jsxs(Fragment, {
    children: [jsx(su, {
      currentView: e.currentView
    }), "recents_and_saved" === e.currentView && jsx(t2, {
      viewExpandedList: e.viewExpandedList
    }), "development" === e.currentView && jsx(e7, {}), "org" === e.currentView && jsx(tR, {
      viewExpandedList: e.viewExpandedList
    })]
  });
  return jsxs("div", {
    children: [jsxs("div", {
      className: _()(t_, r ? tx : tm),
      ref: t,
      "data-onboarding-key": "recents_and_saved_plugin_header",
      children: [jsx(s_, {
        currentView: e.currentView,
        onChange: e.setCurrentView
      }), "development" === e.currentView && jsx("div", {
        className: "fd_browse_resource_modal--mainViewHeaderRightSide--hxfTP text--fontPos12--YsUAh text--_fontBase--QdLsd",
        children: jsx(_$$n, {
          resourceType: activeTab === _$$s2.WIDGET ? HubTypeEnum.WIDGET : HubTypeEnum.PLUGIN
        })
      })]
    }), jsx(_$$P, {
      height: c,
      onScroll: x,
      innerClassName: s ? _$$s.hFull.$ : "",
      ref: u,
      children: p
    })]
  });
}
function su({
  currentView: e
}) {
  let {
    activeTab
  } = IT();
  let s = useCurrentUserOrg()?.id;
  let r = f6();
  let n = wW();
  let i = activeTab === _$$s2.WIDGET ? n : r;
  let l = "org" === e ? i.filter(e => e.org_id && e.org_id === s) : i;
  return 0 === l.length ? null : jsxs("div", {
    children: [l.map((e, t) => jsx(_$$ff, {
      resourceId: e.id,
      type: R7.INVITED,
      keyboardNavigationPath: [dQ, t]
    }, e.id)), jsx("div", {
      className: tc
    })]
  });
}
function s_(e) {
  let t = useDispatch();
  let s = Um();
  let r = useCurrentUserOrg();
  let l = _$$M();
  let o = useCallback(e => function (e, t) {
    switch (e) {
      case "recents_and_saved":
        return getI18nString("universal_insert.recents_and_saved");
      case "development":
        return getI18nString("universal_insert.development");
      case "org":
        return t?.name || getI18nString("universal_insert.from_your_org");
    }
  }(e, r), [r]);
  let d = ["recents_and_saved"];
  return (l && d.push("development"), 1 !== d.length || r) ? jsxs(l6, {
    ariaLabel: getI18nString("universal_insert.resource.select.aria_label"),
    chevronClassName: "fd_browse_resource_modal--mainViewSelectorChevron--P-lJ8",
    className: "fd_browse_resource_modal--mainViewSelector--chQy5",
    dispatch: t,
    dropdownShown: s,
    dropdownWidth: 173,
    formatter: {
      format: o
    },
    id: "fd-browse-modal-main-view-select",
    inputClassName: tp,
    onChange: e.onChange,
    property: e.currentView,
    children: [d.map(e => jsx(c$, {
      value: e,
      children: o(e)
    }, e)), r && jsx(sK, {}), r && jsx(c$, {
      value: "org",
      children: o("org")
    })]
  }) : jsx("div", {
    className: "fd_browse_resource_modal--mainViewSelectorTitleContainer--PITMQ",
    children: jsx("div", {
      className: tp,
      children: o(d[0])
    })
  });
}
export const z = $$so0;