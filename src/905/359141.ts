import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useCallback, useMemo, createContext, useState, useContext, memo, useRef, useEffect, Fragment as _$$Fragment, useLayoutEffect, createElement } from "react";
import { tH as _$$tH } from "../905/751457";
import { sv, Jc, aD, Av, Dg, VJ, eS as _$$eS } from "../figma_app/646357";
import { s as _$$s } from "../905/587936";
import { fA, m9 } from "../905/542608";
import { d4, wA } from "../vendor/514228";
import { getFeatureFlags } from "../905/601108";
import { fp, md, eU as _$$eU, Iz, Xr } from "../figma_app/27355";
import { az, sx } from "../905/449184";
import { h as _$$h } from "../905/207101";
import { jk } from "../905/609396";
import { rt } from "../figma_app/615482";
import { zm, sz, er as _$$er, Tp } from "../905/753512";
import { S as _$$S } from "../905/612212";
import { $n, IK } from "../905/521428";
import { tx as _$$tx, t as _$$t } from "../905/303541";
import { AS, to as _$$to } from "../905/156213";
import { Px, Pq, b1, Qj, mG, ry, _5, W as _$$W, eS as _$$eS2 } from "../905/825399";
import { H as _$$H, S as _$$S2 } from "../905/348433";
import { t as _$$t2 } from "../905/150656";
import { m3, hx, a8, E4, bj, Tq, ej as _$$ej, p1, $_, Y7 } from "../905/66449";
import { W as _$$W2 } from "../905/729905";
import { assert, throwError, throwTypeError } from "../figma_app/465776";
import { assertNotNullish, isNotNullish } from "../figma_app/95419";
import { U as _$$U } from "../905/763676";
import { mq, _w, Ir } from "../905/789781";
import { y1 } from "../figma_app/492908";
import { lQ } from "../905/934246";
import { Rs } from "../figma_app/288654";
import { Wi, JR, Qp } from "../figma_app/162641";
import { G as _$$G } from "../905/750789";
import { s as _$$s2 } from "../cssbuilder/589278";
import { sx as _$$sx } from "../905/941192";
import { oB } from "../905/929976";
import { Um } from "../905/848862";
import { q5, _G, tS as _$$tS, yV, _S } from "../figma_app/516028";
import { LH } from "../905/872904";
import { $cq, jl4 } from "../figma_app/43951";
import { IT } from "../905/713695";
import { je, Qh, fi } from "../figma_app/155728";
import { ol } from "../figma_app/598018";
import { Nf, P2, Qx, M$, ZA, PW } from "../figma_app/633080";
import { $z } from "../905/909811";
import { Yt } from "../905/712714";
import { K as _$$K } from "../905/275787";
import { e as _$$e } from "../figma_app/522702";
import { I as _$$I } from "../905/423735";
import { g as _$$g } from "../905/317997";
import { S as _$$S3 } from "../905/39877";
import { d as _$$d, Q as _$$Q } from "../905/620793";
import { E as _$$E } from "../905/632989";
import { p as _$$p } from "../905/636263";
import eg from "../vendor/73823";
import { $J, ZC } from "../figma_app/39751";
import { P as _$$P } from "../905/347284";
import { Au, P as _$$P2 } from "../figma_app/518077";
import { z6 } from "../figma_app/805373";
import { sortByPropertyWithOptions } from "../figma_app/656233";
import { z as _$$z } from "../905/316889";
import { $ as _$$$ } from "../905/636188";
import ex from "../vendor/523035";
import { h as _$$h2 } from "../figma_app/58251";
import { n as _$$n } from "../905/913636";
import { Ay } from "../figma_app/272902";
import ek from "classnames";
import { Ex, zE } from "../figma_app/919079";
import { P as _$$P3 } from "../figma_app/582341";
import { MB } from "../figma_app/525558";
import { _ as _$$_ } from "../905/381235";
import { B as _$$B } from "../905/224000";
import { d as _$$d2 } from "../905/49800";
import { J as _$$J } from "../905/270045";
import { N as _$$N } from "../905/438674";
import { H as _$$H2 } from "../905/989992";
import { IT as _$$IT } from "../figma_app/566371";
import { f9 } from "../figma_app/328188";
import { ig as _$$ig } from "../figma_app/713624";
import { $3 } from "../905/946937";
import th from "../vendor/241899";
import tf from "../vendor/260986";
import { Xm, gB } from "../905/723791";
import { Fl, fV } from "../figma_app/236178";
import { Q as _$$Q2 } from "../905/572508";
import { bj as _$$bj } from "../905/420347";
import { t as _$$t3 } from "../figma_app/162756";
import { cJ } from "../905/561485";
import { i as _$$i } from "../905/797975";
import { V as _$$V } from "../905/843013";
import { y6, p9, qN, fA as _$$fA, $c } from "../figma_app/803787";
import { Xm as _$$Xm } from "../905/935570";
import { Kz } from "../905/760074";
import { Ib } from "../905/129884";
import { dD } from "../905/519113";
import { RR } from "../905/514666";
import { C as _$$C } from "../figma_app/872960";
import { z as _$$z2 } from "../905/491916";
import { f as _$$f } from "../905/405189";
import { Q as _$$Q3 } from "../905/616985";
import { i as _$$i2 } from "../figma_app/709177";
import { _6 } from "../figma_app/386952";
import { nT as _$$nT } from "../figma_app/53721";
import { Z as _$$Z } from "../905/279476";
import { m as _$$m } from "../905/701558";
import { $z as _$$$z } from "../figma_app/617427";
import { Ph } from "../905/160095";
import { V as _$$V2 } from "../905/223767";
import { c as _$$c } from "../905/370443";
import { x as _$$x } from "../905/695363";
import { b as _$$b } from "../905/165519";
import { generateRecordingKey } from "../figma_app/878298";
import { ServiceCategories as _$$e2 } from "../905/165054";
import { i as _$$i3 } from "../905/718764";
import { glU, h3O, _em } from "../figma_app/763686";
import iC from "../vendor/3757";
import { sn } from "../905/542194";
import { $ as _$$$2 } from "../905/455748";
import { rf, Pt as _$$Pt } from "../figma_app/806412";
import { $D } from "../905/11";
import { nt as _$$nt } from "../figma_app/858013";
import { J as _$$J2 } from "../905/445197";
import { q as _$$q } from "../905/807667";
import { SR } from "../figma_app/852050";
import { c as _$$c2 } from "../905/210851";
import { VP } from "../905/18797";
import { mO, t_ as _$$t_, S9, wy, pk, Yy, Bw, jk as _$$jk, kK } from "../figma_app/745458";
import { Bq } from "../905/760682";
import { XHR } from "../905/910117";
import { F as _$$F } from "../905/302958";
import iH from "../vendor/338009";
import { Ui } from "../905/709171";
import { qp } from "../905/977779";
import { O as _$$O } from "../905/221694";
import { Q$ } from "../905/128313";
import { tn as _$$tn } from "../figma_app/889655";
import { sm } from "../figma_app/141508";
import { n1 } from "../905/55146";
import { a as _$$a } from "../905/462280";
import { oA } from "../905/663269";
import { h1 } from "../905/986103";
import { A as _$$A } from "../905/482208";
import { KP } from "../figma_app/12491";
import { sF } from "../figma_app/777207";
import { R8 } from "../figma_app/933221";
import { sZ } from "../905/845253";
import { B as _$$B2 } from "../905/506188";
import { FTeamType } from "../figma_app/191312";
import { Oe } from "../figma_app/336853";
import { R as _$$R } from "../905/307199";
import { Y as _$$Y } from "../905/830372";
import { lX } from "../figma_app/588397";
import { $$et0, $$ei1 } from "../905/759609";
import { TF } from "../figma_app/524618";
import { se } from "../figma_app/435826";
import { l as _$$l } from "../905/509505";
import { o as _$$o } from "../905/530496";
import { c as _$$c3 } from "../905/144429";
import { w as _$$w } from "../905/770105";
import { Y as _$$Y2 } from "../905/26051";
import { U as _$$U2 } from "../905/103637";
import { h as _$$h3 } from "../905/994594";
import { lo } from "../figma_app/297733";
import { E1 } from "../figma_app/757606";
import { Qk } from "../figma_app/188908";
import { M3 } from "../figma_app/119475";
let _ = new jk("performance.ds_eco.load_time", {});
let A = rt(!1);
function y(e) {
  let t = d4(e => e.openFile);
  let [i, n] = fp(A);
  let {
    hasSwitchedTabs,
    tabManager
  } = zm();
  return useCallback(() => {
    let r = _.getElapsedTime();
    r && !hasSwitchedTabs && (az.trackDefinedEvent("library_modal.load_time", {
      elapsedMs: r,
      fileKey: t?.key,
      teamId: t?.teamId ?? void 0,
      orgId: t?.parentOrgId ?? void 0,
      initialLoad: !i,
      initialTab: tabManager.activeTab,
      loadEvent: e,
      dse_library_modal_perf: !0,
      dse_library_modal_recommended_perf: !!getFeatureFlags().dse_library_modal_recommended_perf
    }), "tab_loaded" === e && setTimeout(() => {
      n(!0);
    }));
  }, [i, t?.key, t?.parentOrgId, t?.teamId, n, e, hasSwitchedTabs, tabManager.activeTab]);
}
function x() {
  let e = wA();
  let t = d4(e => e.modalShown);
  let i = useCallback(() => {
    t && (e(AS()), setTimeout(() => {
      e(_$$to({
        ...t,
        type: {
          type: t.type
        }
      }));
    }));
  }, [e, t]);
  return jsxs("main", {
    className: "library_modal_error_fallback--errorFallbackBody--fAJiY",
    children: [jsx("h2", {
      className: "library_modal_error_fallback--errorHeading--H2QH6",
      children: _$$tx("design_systems.libraries_modal.error_header")
    }), jsx("p", {
      className: "library_modal_error_fallback--errorBody--eE4Rc",
      children: _$$tx("design_systems.libraries_modal.error_body")
    }), jsx($n, {
      variant: "secondary",
      onClick: i,
      children: _$$tx("design_systems.libraries_modal.reload")
    })]
  });
}
function S() {
  return jsx("div", {
    className: "library_modal_header--header--oKBY-",
    children: _$$tx("design_systems.libraries_modal.manage_libraries")
  });
}
function ea({
  library: e,
  onBack: t,
  onReplaceLibraryClick: i,
  positionForLogging: a,
  teamPositionForLogging: s
}) {
  let o = !!q5()?.canEdit;
  let l = _G() === e.library_key;
  let {
    debouncedSearchQuery
  } = zm();
  let u = function () {
    let e = Um();
    let t = wA();
    return useCallback(() => {
      e && e.type === _$$K.LIBRARY_MODAL && t(oB());
    }, [t, e]);
  }();
  let p = mq.useTabContentsWidth();
  return jsxs("div", {
    className: _$$s2.flex.flexColumn.hFull.$,
    onMouseDown: u,
    children: [jsx(_$$d, {
      library: e,
      onBack: t,
      rightElement: l ? jsx("span", {
        className: _$$s2.textBodyMedium.colorTextSecondary.$,
        children: _$$tx("design_systems.libraries_modal.current_file")
      }) : jsx(eo, {
        library: e,
        positionForLogging: a,
        teamPositionForLogging: s
      }),
      showBottomBorder: !0
    }), Nf(e) ? jsx(es, {
      library: e,
      debouncedSearchQuery,
      canEditSubscriptions: o,
      onReplaceLibraryClick: i
    }) : jsx(_$$I, {
      bodyOnly: !0,
      libraryKey: e.library_key,
      onBack: lQ,
      width: p,
      canEditSubscriptions: o,
      showSubscriptionsForTeamId: null,
      showSubscriptionsForUser: !1,
      onRemapLibraryClick: i
    })]
  });
}
function es({
  canEditSubscriptions: e,
  debouncedSearchQuery: t,
  library: i,
  onReplaceLibraryClick: r
}) {
  let a = i.library_key;
  let s = Nf(i) ? i.team_id : null;
  let o = LH();
  let l = mq.useTabContentsWidth();
  let [d] = IT(Yt(a));
  let c = Rs($cq, {
    libraryKey: a
  });
  let u = "loading" === d.status || "loading" === c.status;
  let p = _$$W2.useMetadataForLibrary(i);
  _$$W2.useLogPageView({
    metadata: p,
    loading: u
  });
  return u ? jsx(el, {}) : jsx(_$$g, {
    canEditSubscriptions: e,
    debouncedSearchQuery: t,
    libraryKey: a,
    onRemapLibraryClick: r,
    orgId: o ?? void 0,
    productComponentStats: d.data,
    publishedLibrary: i,
    subscriptionState: void 0,
    teamId: s,
    width: l
  }, i.library_key);
}
function eo({
  library: e,
  positionForLogging: t,
  teamPositionForLogging: i
}) {
  let a = je();
  let o = useMemo(() => {
    let t = a.data?.find(t => t.libraryKey === e.library_key);
    return t?.subscriptionType;
  }, [e.library_key, a.data]);
  let [l, d] = _$$e(!1);
  let c = function (e, t) {
    let i = ol();
    let n = sv();
    let {
      workspaces
    } = zm();
    let o = i?.workspace_id;
    return useMemo(() => {
      let r;
      if (t || !e || e === Qh.COMMUNITY) return null;
      if (e === Qh.USER) return _$$t("design_systems.libraries_modal.added_via_draft_defaults");
      if (e === Qh.FILE) return _$$t("design_systems.libraries_modal.added_by_file_editor");
      if (e === Qh.TEAM) {
        if (!i) return null;
        r = i.name;
      } else if (e === Qh.ORGANIZATION) {
        if (!n) return null;
        r = n.name;
      } else if (e === Qh.WORKSPACE) {
        let e = workspaces.data?.find(e => e.id === o);
        if (!e) return null;
        r = e.name;
      }
      return r ? _$$t("design_systems.libraries_modal.added_by_admin", {
        groupName: r
      }) : null;
    }, [n, i, o, e, workspaces.data, t]);
  }(o, l);
  let {
    listItemButtonWidth
  } = _$$H();
  return jsxs("div", {
    className: _$$s2.flex.gap16.itemsCenter.maxW300.$,
    children: [c && jsx(_$$G, {
      className: _$$s2.textBodyMedium.colorTextSecondary.noWrap.$,
      text: c
    }), jsx("div", {
      style: {
        width: listItemButtonWidth,
        minWidth: listItemButtonWidth
      },
      children: jsx(_$$S3, {
        publishedLibrary: e,
        onSubscribe: d,
        kbPath: [m3.TabBodySection.Header],
        kbColumn: 3,
        entrypoint: "details_view",
        positionForLogging: t,
        teamPositionForLogging: i
      })
    })]
  });
}
function el() {
  return jsxs("div", {
    className: _$$s2.flex.flexColumn.hFull.$,
    children: [jsx("div", {
      className: "library_view--loadingSectionHeader----lXg subscription_file_view_overview--fileAssetSectionHeader--AUyLc library_section_header--fileAssetSectionHeader--FApn3 text--fontPos12--YsUAh text--_fontBase--QdLsd",
      children: jsx(Wi, {
        style: {
          width: "20ch"
        },
        animationType: JR.SHIMMER
      })
    }), jsx("div", {
      className: "library_view--loadingComponentContainer--jnhEK component_tiles--componentContainer_v2--cgysm",
      children: y1(4).map(e => jsx(Qp, {
        animationType: JR.SHIMMER,
        style: _$$sx.radiusMedium.add({
          width: `${$z}px`,
          height: `${$z}px`
        }).$
      }, e))
    })]
  });
}
let ed = createContext({
  viewLibraryDetails: null,
  dismissLibraryDetails: null
});
function ec({
  children: e
}) {
  let t = mq.useTabContentsWidth();
  let [i, a] = useState(null);
  let [s, o] = useState(null);
  let [l, d] = useState(0);
  let [c, u] = useState(void 0);
  let p = useCallback((e, t, i, n) => {
    a(e);
    o(t);
    d(i);
    u(n);
  }, []);
  let m = useCallback(() => {
    a(null);
  }, []);
  let [h, g] = useState(!1);
  let f = useCallback(() => {
    g(!0);
  }, []);
  let _ = useCallback(() => {
    g(!1);
  }, []);
  let A = useCallback(() => {
    a(null);
    g(!1);
  }, [a, g]);
  let y = _$$W2.usePath();
  let b = useMemo(() => y ? s ? s.slice(y.length) : y : s ?? [], [y, s]);
  let v = useMemo(() => [...b, "library"], [b]);
  return jsx(ed.Provider, {
    value: {
      viewLibraryDetails: p,
      dismissLibraryDetails: A
    },
    children: jsxs(_$$W2.PushContainerWithPaths, {
      width: t,
      paths: [[], v, ["replace_libraries"]],
      children: [jsx("div", {
        className: "library_details_push_container--mainView--ko7g6",
        children: e
      }), i && jsx(ea, {
        library: i,
        onReplaceLibraryClick: f,
        onBack: m,
        positionForLogging: l,
        teamPositionForLogging: c
      }), i && i.library_key && h && jsx(_$$U, {
        selectedLibraryKey: i.library_key,
        onBackClick: _
      })]
    })
  });
}
function eu() {
  let {
    viewLibraryDetails
  } = useContext(ed);
  e = assertNotNullish(viewLibraryDetails, "useViewLibraryDetails must be used within a LibraryDetailsContext");
  let t = _$$W2.usePath();
  return useCallback((i, n, r) => {
    _$$S.setLastAction(_$$S.NavAction.LIBRARY);
    viewLibraryDetails(i, t, n, r);
  }, [t, viewLibraryDetails]);
}
let eh = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M5 6h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1M3 7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm12-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1m-2 1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm6 7h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m-4-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zM5 14h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1m-2 1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      clipRule: "evenodd"
    })
  });
});
var ef = eg;
var eS = ex;
var eR = ek;
let eF = "library_card--textContainer--eV7Dt";
function eM() {
  return Math.floor((mq.useTabContentsWidth() - 16) / 3);
}
function ej() {
  return eM() - 16;
}
let eU = () => Math.floor(9 * ej() / 16);
function eB({
  library: e,
  kbPath: t,
  column: i,
  sectionForLogging: a,
  teamPositionForLogging: s,
  positionForLogging: o
}) {
  let l = eM();
  let d = ej();
  let c = eU();
  let u = eu();
  let m = Nf(e) ? e.team_name : e.community_author_name;
  let h = !P2(e) || null !== e.thumbnail_guid;
  let g = Px(e);
  let [_, A, y] = _$$e(!1);
  let b = $J(_);
  let [v, E, x] = _$$e(!1);
  let S = _ || b || v;
  let C = useCallback(() => {
    y();
  }, [y]);
  let T = _$$W2.useMetadataForLibrary(e);
  let {
    teamPosition,
    section,
    workspacePosition
  } = _$$W2.usePositionDataForLogging();
  let {
    sessionId
  } = zm();
  let L = _$$W2.usePath();
  let F = _$$W2.useFileMetadata();
  let M = _$$W2.useMetadataForSubscribeEvent(e, {
    libraryPosition: o,
    teamPosition: s ?? teamPosition,
    workspacePosition,
    entrypoint: "card"
  });
  let {
    subscribe
  } = _$$_(e, M);
  let G = useCallback(() => {
    subscribe();
  }, [subscribe]);
  let z = useCallback(() => {
    let {
      added,
      default_level,
      approved,
      search_session_id,
      query_id,
      library_file_key,
      library_key
    } = T();
    az.trackDefinedEvent("library_modal.library_clicked", {
      ...F,
      added,
      approved,
      defaultLevel: default_level ?? void 0,
      libraryFileKey: library_file_key,
      libraryKey: library_key,
      searchSessionId: search_session_id,
      queryId: query_id,
      libraryModalSessionId: sessionId,
      libraryPosition: o,
      teamPosition: s ?? teamPosition,
      section: a ?? section,
      workspacePosition,
      path: _$$W2.buildPathString(L)
    });
    u(e, o, s ?? teamPosition);
  }, [F, T, e, L, o, a, section, sessionId, s, teamPosition, u, workspacePosition]);
  let H = !g;
  let {
    setKeyboardNavigationElement,
    onClickWithFocus
  } = hx({
    path: t,
    column: i,
    onClick: z
  });
  let Y = useRef(null);
  let q = a8();
  let $ = useCallback(() => Y.current?.focus(), [Y]);
  let X = MB({
    onBoth: G,
    onKeyDown: $
  });
  return jsxs("div", {
    className: eR()(H ? "library_card--cardContainerUnsubscribed--72Y8E library_card--cardContainer--Jwyr5 library_card--loadingCardContainer--07e1V" : "library_card--cardContainer--Jwyr5 library_card--loadingCardContainer--07e1V", {
      "library_card--active--D6-6m": S
    }),
    "data-testid": "library-card",
    children: [jsx("button", {
      className: "library_card--cardButton--v0t3s",
      style: {
        width: `${l}px`
      },
      onClick: onClickWithFocus,
      onKeyDown: q,
      onFocus: A,
      onBlur: C,
      "data-testid": "library-card-button",
      ref: Ay(setKeyboardNavigationElement, Y),
      children: jsxs("div", {
        className: _$$s2.flex.flexColumn.gap8.wFull.$,
        children: [jsx("div", {
          className: "library_card--thumbnailContainer--dGEyh",
          children: jsx(_$$B, {
            thumbnailUrl: e.thumbnail_url,
            coverThumbnail: h,
            name: e.library_name,
            style: _$$sx.add({
              width: `${d}px`,
              height: `${c}px`
            }).$
          })
        }), jsxs("div", {
          className: eF,
          children: [jsxs("div", {
            className: _$$s2.flex.itemsCenter.gap2.wFull.$,
            children: [jsx(_$$G, {
              className: "library_card--libraryName--NkfAQ ellipsis--ellipsis--Tjyfa",
              text: e.library_name
            }), jsx(_$$P3, {
              libraryKey: e.library_key,
              compact: !0,
              showPresetTooltip: !0,
              colorPrimaryOnHover: !0,
              tooltipDelay: 500,
              tooltipLocation: "below"
            }), jsx(_$$n, {
              className: "library_card--forwardIcon--vHXcQ"
            })]
          }), jsx(_$$G, {
            className: "library_card--subtitle--ADYF6 ellipsis--ellipsis--Tjyfa",
            text: m ?? ""
          })]
        })]
      })
    }), g && jsx("div", {
      className: "library_card--addedBackground--J6l9K library_card--thumbnailOverlay--gpzCD",
      style: {
        height: c,
        width: d
      },
      children: jsx(Ex, {
        text: _$$tx("design_systems.libraries_modal.added"),
        color: zE.DEFAULT,
        className: "library_card--addedBadge--r21-V"
      })
    }), H && jsx("div", {
      className: "library_card--hoverBackground--UvJsg library_card--thumbnailOverlay--gpzCD",
      style: {
        height: c,
        width: d
      },
      children: jsx(eV, {
        onClick: X,
        onFocus: E,
        onBlur: x,
        libraryName: e.library_name
      })
    })]
  });
}
function eV({
  onClick: e,
  onFocus: t,
  onBlur: i,
  libraryName: a
}) {
  useEffect(() => i, [i]);
  return jsx("div", {
    className: "library_card--buttonContainer--pU8Y-",
    children: jsx($n, {
      onClick: e,
      variant: "primary",
      htmlAttributes: {
        onFocus: t,
        onBlur: i,
        "data-testid": "library-card-add-button"
      },
      "aria-label": _$$t("design_systems.libraries_modal.add_to_file_aria_label", {
        libraryName: a
      }),
      children: _$$tx("design_systems.libraries_modal.add_to_file")
    })
  });
}
function eG({
  libraries: e,
  columns: t = 3,
  kbPath: i,
  sectionForLogging: a
}) {
  let s = ej();
  let o = useMemo(() => {
    let i = [];
    for (let n = 0; n < e.length; n += t) i.push(e.slice(n, n + t));
    return i;
  }, [t, e]);
  return jsx("div", {
    className: _$$s2.flex.flexColumn.gap8.$,
    style: {
      marginLeft: "-8px"
    },
    children: o.map((e, r) => jsxs("div", {
      className: _$$s2.flex.$,
      children: [e.map((e, s) => jsx(eB, {
        library: e,
        kbPath: [...i, r],
        column: s,
        sectionForLogging: a,
        positionForLogging: r * t + s + 1
      }, e.library_key)), e.length < t && y1(e.length - t).map(e => jsx("div", {
        style: {
          width: `${s}px`
        }
      }, e))]
    }, r))
  });
}
function ez() {
  let e = eM();
  let t = ej();
  let i = eU();
  return jsxs("div", {
    className: eR()(_$$s2.flex.flexColumn.gap8.p8.$, "library_card--loadingCardContainer--07e1V"),
    style: {
      width: `${e}px`
    },
    "data-testid": "library-card-skeleton",
    children: [jsx("div", {
      style: {
        width: `${t}px`,
        height: `${i}px`
      },
      children: jsx(Qp, {
        animationType: JR.SHIMMER,
        className: _$$s2.hFull.$
      })
    }), jsxs("div", {
      className: eF,
      children: [jsx(Wi, {
        animationType: JR.SHIMMER,
        className: _$$s2.h16.$,
        style: {
          width: "15ch"
        }
      }), jsx(Wi, {
        animationType: JR.SHIMMER,
        className: _$$s2.h16.$,
        style: {
          width: "10ch"
        }
      })]
    })]
  });
}
function eH({
  margin: e = 16
}) {
  return jsx("div", {
    style: _$$sx.colorBorder.wFull.add({
      borderBottomWidth: "1px",
      borderStyle: "solid",
      margin: `${e}px 0`
    }).$
  });
}
function eW({
  teamsWithLibraries: e,
  draftLibraries: t,
  onSeeMoreClick: i
}) {
  let a = useMemo(() => {
    let i = e.map(({
      libraries: e,
      ...t
    }) => [t, e]);
    t && t.length > 0 && i.push([void 0, t]);
    return i;
  }, [t, e]);
  let s = _$$W2.useFileMetadata();
  let {
    sessionId
  } = zm();
  let l = _$$W2.usePath();
  let d = useCallback((e, t, n) => {
    let r = eS()(a.map(([, e]) => e.slice(0, 3).length));
    az.trackDefinedEvent("library_modal.team_see_more_clicked", {
      ...s,
      libraryTeamId: n,
      path: _$$W2.buildPathString(l),
      libraryModalSessionId: sessionId,
      position: t + 1,
      nTeams: a.filter(([e]) => !!e).length,
      nLibraries: r
    });
    _$$S.setLastAction(_$$S.NavAction.TEAM_SEE_MORE);
    i(e);
  }, [s, i, l, a, sessionId]);
  return jsx(Fragment, {
    children: a.map(([e, t], i) => jsxs(_$$Fragment, {
      children: [0 !== i && jsx(eH, {}), jsx(eK, {
        libraries: t,
        team: e,
        onSeeMoreClick: t => d(t, i, e ? e.id : "draft"),
        idx: i
      })]
    }, e ? e.id : "drafts"))
  });
}
function eK({
  libraries: e,
  team: t,
  onSeeMoreClick: i,
  idx: a
}) {
  let s = e.length > 3;
  let o = t ? t.id : "draft";
  let l = useCallback(() => i(o), [i, o]);
  let {
    setKeyboardNavigationElement,
    onClickWithFocus
  } = hx({
    path: [m3.TabBodySection.Body, a, m3.TeamsListSection.SeeMore],
    onClick: l,
    disabled: !s
  });
  return jsxs("div", {
    className: _$$s2.flex.flexColumn.gap16.$,
    "data-testid": "team-libraries-row",
    children: [jsxs("div", {
      className: _$$s2.flex.justifyBetween.textBodyMedium.$,
      "data-testid": "team-libraries-header",
      children: [jsx(_$$h2, {
        className: _$$s2.textBodyMedium.$,
        text: t ? t.name : _$$t("design_systems.libraries_modal.draft_libraries"),
        as: "h3"
      }), s && jsx(_$$E, {
        className: "team_libraries_rows--seeMore--Bv-Bz",
        onClick: onClickWithFocus,
        ref: setKeyboardNavigationElement,
        htmlAttributes: {
          "data-testid": "library-modal-see-more"
        },
        children: _$$tx("design_systems.libraries_modal.see_more")
      })]
    }), jsx("div", {
      className: _$$s2.flex.$,
      style: {
        marginLeft: "-8px"
      },
      children: e.slice(0, 3).map((e, t) => jsx(eB, {
        library: e,
        kbPath: [m3.TabBodySection.Body, a, m3.TeamsListSection.CardRow],
        column: t,
        teamPositionForLogging: a + 1,
        positionForLogging: t + 1
      }, e.library_key))
    })]
  });
}
function eY() {
  return jsxs("div", {
    className: _$$s2.flex.flexColumn.gap8.$,
    children: [jsx("div", {
      className: _$$s2.flex.justifyBetween.textBodyMedium.$,
      children: jsx(Wi, {
        animationType: JR.SHIMMER,
        className: _$$s2.h16.$,
        style: {
          width: "15ch"
        }
      })
    }), jsxs("div", {
      className: _$$s2.flex.$,
      style: {
        marginLeft: "-8px"
      },
      children: [jsx(ez, {}), jsx(ez, {}), jsx(ez, {})]
    })]
  });
}
function eZ({
  filterOnAdded: e,
  toggleFilterOnAdded: t,
  kbPath: i,
  column: r
}) {
  let {
    setKeyboardNavigationElement
  } = hx({
    path: i,
    column: r
  });
  return jsx(_$$d2, {
    label: jsx(_$$J, {
      children: _$$t("design_systems.libraries_modal.show_libraries_in_this_file")
    }),
    checked: e,
    onChange: t,
    ref: setKeyboardNavigationElement
  });
}
function eX({
  children: e
}) {
  return jsx("div", {
    className: _$$s2.px16.py8.bSolid.colorBorder.bt1.$,
    children: e
  });
}
function eQ({
  onBack: e,
  name: t,
  libraries: i,
  id: a
}) {
  let s = Pq(i);
  let {
    filteredLibraries,
    filterOnAdded,
    toggleFilterOnAdded,
    canFilterLibraries
  } = function (e) {
    let [t, i, n, a] = _$$e(!1);
    let {
      tabManager,
      sessionId
    } = zm();
    let l = _$$W2.useFileMetadata();
    let d = useCallback(() => {
      az.trackDefinedEvent("library_modal.filtered", {
        filter_by: t ? "none" : "subscribed",
        tab: tabManager.activeTab,
        libraryModalSessionId: sessionId,
        ...l
      });
      a();
    }, [l, t, a, sessionId, tabManager.activeTab]);
    let c = b1();
    let u = useMemo(() => e.some(e => c(e.library_key)), [c, e]);
    let m = useMemo(() => {
      let i = [...e];
      t && (i = e.filter(e => c(e.library_key)));
      return i;
    }, [c, e, t]);
    return {
      filterOnAdded: t,
      toggleFilterOnAdded: d,
      filteredLibraries: m,
      canFilterLibraries: u
    };
  }(i);
  let u = _$$W2.useMetadataForLibraries(i);
  let m = useCallback(() => {
    let e = u();
    return {
      ...e,
      library_team_id: a,
      n_draft_libraries: a === _w ? e.n_libraries : 0
    };
  }, [u, a]);
  _$$W2.useLogPageView({
    metadata: m
  });
  return jsxs("div", {
    className: _$$s2.flex.flexColumn.hFull.$,
    children: [jsx(_$$Q, {
      title: t,
      workspace: s,
      onBack: e,
      backAriaLabel: _$$t("design_systems.libraries_modal.back_to_teams")
    }), jsx(_$$$, {
      className: _$$s2.flexGrow1.$,
      innerClassName: _$$s2.px16.pb16.$,
      children: jsx(eG, {
        libraries: filteredLibraries,
        kbPath: [m3.TabBodySection.Body]
      })
    }), canFilterLibraries && jsx(eX, {
      children: jsx(eZ, {
        filterOnAdded,
        toggleFilterOnAdded,
        kbPath: [m3.TabBodySection.Footer]
      })
    })]
  });
}
function eJ({
  title: e,
  subtitle: t,
  cta: i
}) {
  return jsxs("div", {
    className: _$$s2.flex.flexColumn.itemsCenter.justifyCenter.hFull.mx32.$,
    children: [jsx("h2", {
      className: _$$s2.textHeadingMedium.mb4.$,
      children: e
    }), jsx("div", {
      className: _$$s2.textBodyLarge.colorTextSecondary.alignCenter.mb12.$,
      children: t
    }), i]
  });
}
function e0() {
  return jsx(eJ, {
    title: _$$t("design_systems.libraries_modal.no_organization_libraries"),
    subtitle: _$$t("design_systems.libraries_modal.no_organization_libraries_subtitle")
  });
}
let e1 = "library_modal_ent_view--workspaceCard--f-qmb";
function e2() {
  let e = mq.useTabContentsWidth();
  let {
    workspaces,
    draftLibraries,
    otherLibraries,
    isLoading
  } = function () {
    let {
      workspaces: _workspaces
    } = zm();
    let t = _$$z();
    let {
      result,
      status
    } = Qj();
    let a = useMemo(() => result.filter(Nf) ?? [], [result]);
    let s = useMemo(() => {
      let e = {};
      a.forEach(t => {
        t.team_id && t.team_name && (e[t.team_id] || (e[t.team_id] = {
          id: t.team_id,
          name: t.team_name,
          workspaceId: t.workspace_id,
          libraries: []
        }), e[t.team_id].libraries.push(t));
      });
      let i = Object.values(e);
      i.forEach(e => t(e.libraries));
      return i;
    }, [a, t]);
    let o = useMemo(() => {
      if (!_workspaces.data) return [];
      let t = _workspaces.data.map(e => {
        let t = s.filter(t => t.workspaceId === e.id);
        sortByPropertyWithOptions(t, "name");
        return {
          ...e,
          teams: t
        };
      }).filter(e => e.teams.length > 0);
      sortByPropertyWithOptions(t, "name");
      return t;
    }, [s, _workspaces.data]);
    return useMemo(() => {
      if ("loading" === status || "loading" === _workspaces.status) return {
        workspaces: [],
        draftLibraries: [],
        otherLibraries: [],
        isLoading: !0
      };
      let i = s.filter(e => !e.workspaceId);
      sortByPropertyWithOptions(i, "name");
      let r = a.filter(e => !e.team_id);
      t(r);
      return {
        workspaces: o,
        otherLibraries: i,
        draftLibraries: r,
        isLoading: !1
      };
    }, [status, a, t, s, _workspaces.status, o]);
  }();
  let o = y("tab_loaded");
  let l = ZC(isLoading);
  useEffect(() => {
    l && !isLoading && o();
  }, [l, isLoading, o]);
  let [d, c] = useState(null);
  let u = useMemo(() => d ? workspaces.find(e => e.id === d) : null, [d, workspaces]);
  let [m, h, g] = _$$e(!1);
  let [_, A, v] = _$$e(!1);
  let [E, x] = useState(null);
  let S = useCallback(() => {
    x(null);
  }, []);
  let C = useMemo(() => m ? {
    id: _w,
    name: _$$t("design_systems.libraries_modal.draft_libraries"),
    libraries: draftLibraries
  } : E ? _ ? otherLibraries.find(e => e.id === E) ?? null : u ? u.teams.find(e => e.id === E) ?? null : null : null, [E, u, draftLibraries, m, _, otherLibraries]);
  let [T, k] = useState(void 0);
  let N = useMemo(() => {
    if (!C || !u) return;
    let e = u.teams.findIndex(e => e.id === C.id);
    return e >= 0 ? e + 1 : void 0;
  }, [C, u]);
  let P = useCallback(() => {
    c(null);
  }, []);
  let O = useCallback(e => {
    x(e);
  }, []);
  let L = _$$W2.useFileMetadata();
  let {
    sessionId
  } = zm();
  let M = useCallback(e => (n, r, s) => {
    let o = workspaces.length;
    draftLibraries.length > 0 && o++;
    otherLibraries.length > 0 && o++;
    az.trackDefinedEvent("library_modal.workspace_clicked", {
      ...L,
      libraryModalSessionId: sessionId,
      path: _$$W2.buildPathString(e),
      libraryWorkspaceId: n,
      section: s ? "active" : "org",
      position: r + 1,
      nWorkspaces: o
    });
    k(r + 1);
    _$$S.setLastAction(_$$S.NavAction.WORKSPACE);
    "drafts" === n ? h() : "other" === n ? A() : c(n);
  }, [draftLibraries.length, L, h, A, otherLibraries.length, sessionId, workspaces.length]);
  return isLoading || 0 !== workspaces.length || 0 !== draftLibraries.length || 0 !== otherLibraries.length ? jsx(_$$W2.PositionDataProvider, {
    workspacePosition: T,
    teamPosition: N,
    section: "team",
    children: jsxs(_$$W2.PushContainerWithPaths, {
      width: e,
      paths: [["workspaces"], [_ ? "other" : m ? "drafts" : "workspace"], ["team"]],
      children: [jsx(e5, {
        workspaces,
        draftLibraries,
        otherLibraries,
        makeOnWorkspaceClickWithPath: M,
        isLoading
      }), u ? jsx(e6, {
        title: u.name,
        teamsWithLibraries: u.teams,
        onBack: P,
        onSeeMoreClick: O
      }) : _ ? jsx(e6, {
        title: _$$t("design_systems.libraries_modal.other_libraries"),
        teamsWithLibraries: otherLibraries,
        onBack: v,
        onSeeMoreClick: O
      }) : null, C && jsx(eQ, {
        name: C.name,
        libraries: C.libraries,
        onBack: m ? g : S,
        id: C.id
      })]
    })
  }) : jsx(_$$W2.PageWithTracking, {
    metadata: tt,
    emptyState: !0,
    name: "workspaces",
    children: jsx(e0, {})
  });
}
function e5({
  workspaces: e,
  otherLibraries: t,
  draftLibraries: i,
  makeOnWorkspaceClickWithPath: a,
  isLoading: s
}) {
  let o = te();
  let l = Au(o.id);
  let d = s || "loading" === l.status;
  let c = _$$W2.usePath();
  let u = useMemo(() => a(c), [a, c]);
  let p = useMemo(() => {
    let t = l.data;
    return t ? e.find(e => e.id === t) : void 0;
  }, [l.data, e]);
  let m = useMemo(() => e.filter(e => e !== p), [e, p]);
  let h = useCallback(() => {
    let e = m.length;
    i.length > 0 && e++;
    t.length > 0 && e++;
    return {
      has_user_workspace: !!p,
      account_section_n_workspaces: e,
      account_section_n_draft_libraries: i.length,
      account_section_n_other_libraries: ef()(t, e => e.libraries).length
    };
  }, [p, m, i, t]);
  _$$W2.useLogPageView({
    metadata: h,
    loading: d
  });
  return jsx(_$$P, {
    children: jsx("div", {
      className: _$$s2.flex.flexColumn.gap16.p16.$,
      children: d ? jsx(e9, {}) : jsxs(Fragment, {
        children: [p && jsx(e4, {
          workspace: p,
          onWorkspaceClick: u
        }), jsx(e3, {
          workspaces: m,
          onWorkspaceClick: u,
          hasDrafts: i.length > 0,
          hasOther: t.length > 0
        })]
      })
    })
  });
}
function e4({
  workspace: e,
  onWorkspaceClick: t
}) {
  let i = useCallback(() => {
    t(e.id, 0, !0);
  }, [t, e.id]);
  return jsxs(Fragment, {
    children: [jsx("h2", {
      className: _$$s2.textBodyLargeStrong.$,
      children: _$$tx("design_systems.libraries_modal.your_workspace")
    }), jsx("div", {
      className: _$$s2.grid.gap8.$,
      style: {
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))"
      },
      children: jsx(e7, {
        workspace: e,
        onClick: i,
        kbPath: [m3.TabBodySection.Body, m3.WorkspacesSection.CurrentWorkspace]
      })
    })]
  });
}
function e3({
  workspaces: e,
  onWorkspaceClick: t,
  hasDrafts: i,
  hasOther: r
}) {
  let a = te();
  let s = e.length;
  let o = s + (i ? 1 : 0);
  return jsxs(Fragment, {
    children: [jsx("h2", {
      className: _$$s2.textBodyMedium.$,
      children: _$$tx("design_systems.libraries_modal.orgs_workspaces", {
        orgName: a.name
      })
    }), jsxs("div", {
      className: _$$s2.grid.gap8.$,
      style: {
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))"
      },
      children: [e.map((e, i) => jsx(e7, {
        workspace: e,
        onClick: () => t(e.id, i),
        kbPath: [m3.TabBodySection.Body, m3.WorkspacesSection.AllWorkspaces, Math.floor(i / 3)],
        column: i % 3
      }, e.id)), i && jsx(e8, {
        icon: jsx(_$$p, {}),
        title: _$$t("design_systems.libraries_modal.draft_libraries"),
        onClick: () => t("drafts", s),
        kbPath: [m3.TabBodySection.Body, m3.WorkspacesSection.AllWorkspaces, Math.floor(s / 3)],
        column: s % 3
      }), r && jsx(e8, {
        icon: jsx(eh, {}),
        title: _$$t("design_systems.libraries_modal.other_libraries"),
        onClick: () => t("other", o),
        kbPath: [m3.TabBodySection.Body, m3.WorkspacesSection.AllWorkspaces, Math.floor(o / 3)],
        column: o % 3
      })]
    })]
  });
}
function e6({
  title: e,
  teamsWithLibraries: t,
  onBack: i,
  onSeeMoreClick: a,
  drafts: s
}) {
  let o = _$$W2.useMetadataForTeamsWithLibraries(t, []);
  let l = useCallback(() => {
    if (!s) return o();
    let e = o();
    e.n_draft_libraries = e.n_libraries;
    return e;
  }, [s, o]);
  _$$W2.useLogPageView({
    metadata: l
  });
  return jsxs("div", {
    className: _$$s2.flex.flexColumn.hFull.$,
    children: [jsx(_$$Q, {
      title: e,
      onBack: i
    }), jsx(_$$$, {
      innerClassName: _$$s2.px16.pb16.pt1.$,
      children: jsx(eW, {
        teamsWithLibraries: t,
        onSeeMoreClick: a
      })
    })]
  });
}
function e7({
  workspace: e,
  onClick: t,
  kbPath: i,
  column: r
}) {
  let {
    setKeyboardNavigationElement,
    onClickWithFocus
  } = hx({
    path: i,
    column: r,
    onClick: t
  });
  return jsxs(_$$E, {
    onClick: onClickWithFocus,
    className: e1,
    style: {
      height: 85
    },
    htmlAttributes: {
      "data-testid": "workspace-card"
    },
    ref: setKeyboardNavigationElement,
    children: [jsx("div", {
      className: "library_modal_ent_view--inwardBorder--G-8uq",
      children: jsx(z6, {
        entity: e,
        size: 30,
        shape: "CIRCLE"
      })
    }), jsx(_$$G, {
      className: "library_modal_ent_view--cardText--yolWV",
      text: e.name
    })]
  });
}
function e8({
  icon: e,
  title: t,
  onClick: i,
  kbPath: r,
  column: a
}) {
  let {
    setKeyboardNavigationElement,
    onClickWithFocus
  } = hx({
    path: r,
    column: a,
    onClick: i
  });
  return jsxs(_$$E, {
    onClick: onClickWithFocus,
    className: e1,
    style: {
      height: 85
    },
    htmlAttributes: {
      "data-testid": "workspace-card"
    },
    ref: setKeyboardNavigationElement,
    children: [e, jsx(_$$G, {
      className: _$$s2.textBodyMedium.$,
      text: t
    })]
  });
}
function e9() {
  return jsxs(Fragment, {
    children: [jsx(Wi, {
      animationType: JR.SHIMMER,
      style: {
        width: "15ch"
      }
    }), jsx("div", {
      className: _$$s2.grid.gap8.$,
      style: {
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))"
      },
      children: jsx(Qp, {
        className: _$$s2.radiusMedium.h16.$,
        style: {
          height: 85
        },
        animationType: JR.SHIMMER
      })
    }), jsx(Wi, {
      animationType: JR.SHIMMER,
      style: {
        width: "15ch"
      }
    }), jsx("div", {
      className: _$$s2.grid.gap8.$,
      style: {
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))"
      },
      children: y1(3).map(e => jsx(Qp, {
        className: _$$s2.radiusMedium.h16.$,
        style: {
          height: 85
        },
        animationType: JR.SHIMMER
      }, e))
    })]
  });
}
function te() {
  return assertNotNullish(sv(), "org object should always be defined in library modal org tab");
}
let tt = {
  has_user_workspace: !1,
  account_section_n_workspaces: 0,
  account_section_n_draft_libraries: 0,
  account_section_n_other_libraries: 0
};
function tl({
  onlyJoinedTeams: e = !1
}) {
  let t = mq.useTabContentsWidth();
  let {
    teamsWithLibraries,
    draftLibraries,
    isLoading
  } = function (e) {
    let {
      teams,
      status
    } = function (e) {
      let t = LH();
      let [i, n] = useState({});
      let [a] = _$$IT(jl4({
        orgId: t ?? "",
        firstPageSize: 100,
        queryParams: f9(void 0, {
          teamMembershipFilter: _$$ig.JOINED,
          workspaceFilter: null,
          orgAccessFilter: null,
          orphanedTeamFilter: !1,
          discoverabilityFilter: null
        }, void 0, !0),
        extraTeamIds: []
      }), {
        enabled: !!t && e
      });
      let [s, o] = useState(a.status);
      useLayoutEffect(() => {
        if (a.status !== _$$H2.LOADED) return;
        o(a.status);
        let e = a.data?.orgTeams?.map(e => e.team).filter(isNotNullish).map(e => ({
          id: e.id,
          name: e.name,
          workspaceId: e.workspaceId
        }));
        e && e.length > 0 && n(t => {
          let i = {
            ...t
          };
          e.forEach(e => i[e.id] = e);
          return i;
        });
        a.data?.orgTeams?.hasNextPage() && a.data.orgTeams.loadNext(100);
      }, [a.data, a.status]);
      let l = useMemo(() => {
        let e = Object.values(i);
        sortByPropertyWithOptions(e, "name");
        return e;
      }, [i]);
      return useMemo(() => ({
        teams: l,
        status: s
      }), [s, l]);
    }(e);
    let n = LH();
    let a = _$$z();
    let {
      result,
      status: _status
    } = Qj();
    let l = useMemo(() => result.filter(Nf) ?? [], [result]);
    let d = useMemo(() => {
      if (n && e) return teams;
      let i = new Map();
      l.forEach(e => {
        e.team_id && e.team_name && i.set(e.team_id, {
          id: e.team_id,
          name: e.team_name,
          workspaceId: e.workspace_id
        });
      });
      let r = Array.from(i.values());
      sortByPropertyWithOptions(r, "name");
      return r;
    }, [e, n, teams, l]);
    return useMemo(() => {
      if ("loading" === status || "loading" === _status) return {
        teamsWithLibraries: [],
        draftLibraries: [],
        isLoading: !0
      };
      let e = [];
      d.forEach(t => {
        let i = l.filter(e => e.team_id === t.id);
        i.length > 0 && (a(i), e.push({
          ...t,
          libraries: i
        }));
      });
      let t = l.filter(e => !e.team_id);
      a(t);
      return {
        teamsWithLibraries: e,
        draftLibraries: t,
        isLoading: !1
      };
    }, [status, _status, l, a, d]);
  }(e);
  let o = y("tab_loaded");
  let l = ZC(isLoading);
  useEffect(() => {
    l && !isLoading && o();
  }, [l, isLoading, o]);
  let [d, c] = useState(null);
  let u = useMemo(() => d === _w ? {
    id: _w,
    name: _$$t("design_systems.libraries_modal.draft_libraries"),
    libraries: draftLibraries
  } : d ? teamsWithLibraries.find(e => e.id === d) : null, [d, draftLibraries, teamsWithLibraries]);
  let p = useMemo(() => {
    if (!u) return;
    if (u.id === _w) return teamsWithLibraries.length + 1;
    let e = teamsWithLibraries.findIndex(e => e.id === u.id);
    if (e >= 0) return e + 1;
  }, [u, teamsWithLibraries]);
  let m = useCallback(e => {
    c(e);
  }, []);
  let h = useCallback(() => {
    c(null);
  }, []);
  let {
    hasProAccess
  } = mG();
  let f = _$$W2.useMetadataForTeamsWithLibraries(teamsWithLibraries, draftLibraries);
  if (0 === teamsWithLibraries.length && 0 === draftLibraries.length && !isLoading) {
    let t = hasProAccess ? e ? jsx(tu, {}) : jsx(e0, {}) : jsx(tc, {});
    return jsx(_$$W2.PageWithTracking, {
      metadata: f,
      emptyState: !0,
      name: "teams",
      children: t
    });
  }
  if (1 === teamsWithLibraries.length && 0 === draftLibraries.length && !isLoading) {
    let e = teamsWithLibraries[0];
    if (e) return jsx(_$$W2.PositionDataProvider, {
      teamPosition: 1,
      section: "team",
      children: jsx("div", {
        style: {
          width: t
        },
        children: jsx(eQ, {
          name: e.name,
          libraries: e.libraries,
          id: e.id
        })
      })
    });
  }
  return jsx(_$$W2.PositionDataProvider, {
    teamPosition: p,
    section: "team",
    children: jsxs(_$$W2.PushContainerWithPaths, {
      width: t,
      paths: [["teams"], [d === _w ? "drafts" : "team"]],
      children: [jsx(td, {
        teamsWithLibraries,
        draftLibraries,
        onSeeMoreClick: m,
        isLoading,
        onlyJoinedTeams: e,
        getMetadata: f
      }), u && jsx(eQ, {
        name: u.name,
        id: u.id,
        libraries: u.libraries,
        onBack: h
      })]
    })
  });
}
function td({
  teamsWithLibraries: e,
  draftLibraries: t,
  onSeeMoreClick: i,
  isLoading: r,
  onlyJoinedTeams: a,
  getMetadata: s
}) {
  _$$W2.useLogPageView({
    loading: r,
    metadata: s
  });
  return jsxs("div", {
    className: _$$s2.flex.flexColumn.pt16.borderBox.hFull.$,
    children: [jsx("div", {
      className: _$$s2.pb16.px16.flex.flexColumn.gap4.$,
      children: r ? jsx(Wi, {
        animationType: JR.SHIMMER,
        className: _$$s2.h16.$,
        style: {
          width: "15ch"
        }
      }) : jsxs(Fragment, {
        children: [jsx("h2", {
          className: _$$s2.textBodyLargeStrong.$,
          children: a ? _$$tx("design_systems.libraries_modal.team_libraries") : _$$tx("design_systems.libraries_modal.all_teams_in_your_organization")
        }), jsx("div", {
          className: _$$s2.textBodyMedium.colorTextSecondary.$,
          children: a ? _$$tx("design_systems.libraries_modal.team_libraries_description") : _$$tx("design_systems.libraries_modal.team_libraries_description_org")
        })]
      })
    }), jsx(_$$$, {
      innerClassName: _$$s2.px16.pb16.pt1.$,
      children: r ? jsx(eY, {}) : jsx(eW, {
        teamsWithLibraries: e,
        draftLibraries: t,
        onSeeMoreClick: i
      })
    })]
  });
}
function tc() {
  let e = wA();
  let t = ol();
  let i = q5();
  let {
    sessionId
  } = zm();
  let s = useCallback(() => {
    e(_$$to({
      type: $3,
      data: {
        team: t,
        afterFileMove: lQ
      }
    }));
    az.trackDefinedEvent("library_modal.starter_cta_clicked", {
      fileKey: i?.key,
      teamId: t?.id,
      entryPoint: "all_teams_tab",
      libraryModalSessionId: sessionId
    });
  }, [e, i, t, sessionId]);
  let o = jsx($n, {
    onClick: s,
    children: _$$tx("design_systems.libraries_modal.upgrade")
  });
  return jsx(eJ, {
    title: _$$t("design_systems.libraries_modal.no_team_libraries"),
    subtitle: _$$t("design_systems.libraries_modal.teams_tab_empty_starter"),
    cta: o
  });
}
function tu() {
  let e = jsx(_$$N.Button, {
    variant: "secondary",
    href: "https://help.figma.com/hc/articles/360039484194",
    newTab: !0,
    children: _$$tx("design_systems.libraries_modal.learn_more")
  });
  return jsx(eJ, {
    title: _$$t("design_systems.libraries_modal.no_team_libraries"),
    subtitle: _$$t("design_systems.libraries_modal.teams_tab_empty"),
    cta: e
  });
}
function tp() {
  return jsx(tl, {});
}
function tm() {
  let {
    hasEntAccess,
    hasOrgAccess
  } = mG();
  let i = assertNotNullish(sv(), "org object should always be defined in library modal org tab");
  let r = hasEntAccess && i.workspaces_count && i.workspaces_count > 0;
  assert(hasOrgAccess, "Org tab should not render if user does not have org access");
  return jsx(ec, {
    children: r ? jsx(e2, {}) : jsx(tp, {})
  });
}
var tg = th;
var t_ = tf;
function tb(e, t, i) {
  for (let n of e) i.has(n.library_key) || (t.push(n), i.add(n.library_key));
}
function tv({
  header: e,
  libraries: t,
  idx: i,
  nameForLogging: r
}) {
  return 0 === t.length ? null : jsxs("div", {
    className: _$$s2.px16.flex.flexColumn.gap16.$,
    children: [e, jsx(eG, {
      libraries: t,
      kbPath: [i],
      sectionForLogging: r
    })]
  });
}
function tI() {
  return jsxs("div", {
    className: _$$s2.flex.px8.$,
    children: [jsx(ez, {}), jsx(ez, {}), jsx(ez, {})]
  });
}
function tE({
  recommendedLibraries: e
}) {
  let t = sv();
  let i = ol();
  let a = i?.workspace_id;
  let o = _$$P2(t?.id ?? null, a);
  let l = o.data && "Unassigned" !== o.data ? o.data : null;
  let d = useMemo(() => {
    let n = [];
    return "loaded" !== e.status ? [] : (e.data.connectedProjectLibraries.length > 0 && n.push({
      header: _$$t("design_systems.libraries_modal.connected_project_libraries"),
      libraries: e.data.connectedProjectLibraries,
      nameForLogging: "connected_project_recommended"
    }), t && e.data.orgLibraries.length > 0 && n.push({
      header: _$$t("design_systems.libraries_modal.recommended_by", {
        name: t.name
      }),
      libraries: e.data.orgLibraries,
      nameForLogging: "org_recommended"
    }), l && e.data.workspaceLibraries.length > 0 && n.push({
      header: _$$t("design_systems.libraries_modal.recommended_by", {
        name: l.name
      }),
      libraries: e.data.workspaceLibraries,
      nameForLogging: "workspace_recommended"
    }), i && e.data.teamLibraries.length > 0 && n.push({
      header: t ? _$$t("design_systems.libraries_modal.recommended_by", {
        name: i.name
      }) : null,
      libraries: e.data.teamLibraries,
      nameForLogging: "team_recommended"
    }), n);
  }, [e, t, i, l]);
  return "loading" === e.status ? jsx(tI, {}) : jsx(Fragment, {
    children: d.map((e, t) => jsxs(_$$Fragment, {
      children: [t > 0 && jsx("hr", {
        className: _$$s2.m0.$
      }), jsx(tv, {
        header: e.header ? jsx(_$$G, {
          text: e.header,
          className: _$$s2.textBodyMedium.$
        }) : null,
        libraries: e.libraries,
        idx: t,
        nameForLogging: e.nameForLogging
      })]
    }, t))
  });
}
function tx() {
  return jsxs("div", {
    className: _$$s2.flex.flexColumn.gap4.textBodyLargeStrong.px16.$,
    children: [jsx(_$$h2, {
      text: _$$t("design_systems.libraries_modal.recommended_libraries"),
      as: "h3"
    }), jsx("span", {
      className: _$$s2.colorTextSecondary.textBodyMedium.$,
      children: _$$tx("design_systems.libraries_modal.your_admins_suggest")
    })]
  });
}
function tS() {
  let e = function () {
    let {
      workspaceApprovedLibraryKeys,
      orgApprovedLibraryKeys
    } = Fl();
    let i = fi();
    let n = je();
    let a = Qj();
    let s = ry();
    let o = _$$z();
    let l = useMemo(() => "loaded" !== a.status ? [] : a.result, [a]);
    let d = useMemo(() => "loaded" !== a.status || "loaded" !== s.status && "disabled" !== s.status ? Xm() : gB([...a.result, ...s.result]), [a, s]);
    let c = _5(orgApprovedLibraryKeys, a);
    let u = _5(workspaceApprovedLibraryKeys, a);
    let p = _$$W(i.data?.file?.libraryOrgSubscriptions ?? [], d);
    let m = _$$W(i.data?.file?.computedWorkspacePublicInfo?.workspace?.librarySubscriptions ?? [], d);
    let h = _$$W(i.data?.file?.libraryTeamSubscriptions ?? [], d);
    let g = _$$eS2(l);
    return useMemo(() => {
      if ("loaded" !== i.status || "loaded" !== c.status || "loaded" !== u.status || "loaded" !== p.status || "loaded" !== m.status || "loaded" !== h.status || "loaded" !== g.status) return Xm();
      let e = {
        orgLibraries: [],
        workspaceLibraries: [],
        teamLibraries: [],
        connectedProjectLibraries: [],
        n_libraries: 0,
        n_approved_libraries: 0,
        n_default_libraries: 0,
        n_added_libraries: 0
      };
      let t = new Set([]);
      tb(g.data, e.connectedProjectLibraries, t);
      tb(c.data, e.orgLibraries, t);
      tb(p.data, e.orgLibraries, t);
      tb(u.data, e.workspaceLibraries, t);
      tb(m.data, e.workspaceLibraries, t);
      tb(h.data, e.teamLibraries, t);
      o(e.orgLibraries);
      o(e.workspaceLibraries);
      o(e.teamLibraries);
      o(e.connectedProjectLibraries);
      e.n_libraries = e.orgLibraries.length + e.workspaceLibraries.length + e.teamLibraries.length + e.connectedProjectLibraries.length;
      e.n_approved_libraries = t_()([...u.data, ...c.data], "library_key").length;
      e.n_default_libraries = t_()([...p.data, ...m.data, ...h.data], "library_key").length;
      e.n_added_libraries = e.orgLibraries.concat(e.workspaceLibraries).concat(e.teamLibraries).concat(e.connectedProjectLibraries).filter(e => n.data?.find(t => t.libraryKey === e.library_key)).length;
      return gB(e);
    }, [i.status, c, p, u, m, h, o, n.data, g]);
  }();
  let t = "loading" === e.status;
  let i = y("tab_loaded");
  let a = ZC(e);
  useEffect(() => {
    a?.status !== "loaded" && "loaded" === e.status && i();
  }, [a, e, i]);
  let s = useMemo(() => e.data ? tg()(e.data, ["n_libraries", "n_approved_libraries", "n_default_libraries", "n_added_libraries"]) : {}, [e.data]);
  return !t && tw(e.data) ? jsx(_$$W2.PageWithTracking, {
    name: "overview",
    emptyState: !0,
    metadata: s,
    loading: t,
    children: jsx(tC, {})
  }) : jsx(_$$W2.Page, {
    name: "overview",
    children: jsx(ec, {
      children: jsxs("div", {
        className: _$$s2.flex.flexColumn.pt16.borderBox.hFull.wFull.gap16.$,
        children: [jsx(_$$W2.PageViewTracker, {
          metadata: s,
          loading: t
        }), jsx(tx, {}), jsx(_$$$, {
          innerClassName: _$$s2.pb16.flex.flexColumn.gap16.$,
          children: jsx(tE, {
            recommendedLibraries: e
          })
        })]
      })
    })
  });
}
let tw = e => !e || 0 === e.orgLibraries.length && 0 === e.workspaceLibraries.length && 0 === e.teamLibraries.length && 0 === e.connectedProjectLibraries.length;
function tC() {
  let {
    hasEntAccess
  } = mG();
  let t = hasEntAccess ? _$$t("design_systems.libraries_modal.no_recommended_libraries_ent_text") : _$$t("design_systems.libraries_modal.no_recommended_libraries_pro_org_text");
  let i = jsx(_$$N.Button, {
    variant: "secondary",
    href: hasEntAccess ? "https://help.figma.com/hc/articles/21310245473815" : "https://help.figma.com/hc/articles/360039234953",
    newTab: !0,
    children: _$$tx("design_systems.libraries_modal.learn_more")
  });
  return jsx(eJ, {
    title: _$$t("design_systems.libraries_modal.no_recommended_libraries"),
    subtitle: t,
    cta: i
  });
}
function tO({
  kbPath: e
}) {
  let t = wA();
  let i = useCallback(() => {
    t(_$$to({
      type: _$$i
    }));
  }, [t]);
  let {
    setKeyboardNavigationElement
  } = hx({
    path: e,
    column: 1
  });
  return jsx($n, {
    "aria-label": _$$t("figmake.design_system_imports.library_extraction_button.text"),
    variant: "secondary",
    onClick: i,
    ref: setKeyboardNavigationElement,
    children: _$$t("figmake.design_system_imports.library_extraction_button.text")
  });
}
function tM({
  openFile: e,
  isPublishedLibrary: t
}) {
  let i = function () {
    let e = _$$Xm();
    let t = md(y6(e));
    let i = t.productComponents.modified.wellFormed.length;
    let n = t.styles.modified.wellFormed.length;
    return t.variableSets.modified.wellFormed.length + n + i + t.pageThumbnails.modified.length;
  }();
  return jsxs("div", {
    className: "local_library_list_item_header--localLibraryListItemHeader--LOnYm",
    children: [jsx(_$$G, {
      text: e.name
    }), t && jsx(Ex, {
      text: 0 === i ? _$$t("design_systems.libraries_modal.no_changes") : _$$t("design_systems.libraries_modal.x_changes", {
        numChanges: i
      }),
      color: i > 0 ? zE.BRAND : zE.TERTIARY,
      className: i > 0 ? "local_library_list_item_header--badgeWithChanges--4K7ow local_library_list_item_header--badge--w7Dh5" : "local_library_list_item_header--badge--w7Dh5"
    })]
  });
}
function tB() {
  let e = md(p9);
  return {
    publishProgress: d4(e => e.library.publishProgress),
    isPublished: md(qN),
    isPublishingModalEnabled: e
  };
}
function tz({
  openFile: e,
  kbPath: t,
  column: i = 1
}) {
  let {
    publishProgress,
    isPublishingModalEnabled,
    isPublished
  } = tB();
  let l = tH();
  let d = !isPublishingModalEnabled || Kz(e);
  let c = useMemo(() => isPublishingModalEnabled || isPublished ? {} : {
    "data-tooltip": _$$t("design_systems.libraries_modal.publishing_disabled_tooltip"),
    "data-tooltip-type": Ib.TEXT
  }, [isPublishingModalEnabled, isPublished]);
  let {
    setKeyboardNavigationElement
  } = hx({
    path: t,
    column: i,
    disabled: d
  });
  return publishProgress.state !== Qx.NONE ? jsx(IK, {
    variant: "secondary",
    disabled: !0,
    children: publishProgress.publishType === M$.UNPUBLISH ? _$$tx("design_systems.libraries_modal.unpublishing") : _$$tx("design_systems.libraries_modal.publishing")
  }) : jsx(IK, {
    "aria-label": _$$t("design_systems.libraries_modal.publish_this_file"),
    variant: "primary",
    disabled: d,
    onClick: l,
    ref: setKeyboardNavigationElement,
    htmlAttributes: c,
    children: _$$tx("design_systems.libraries_modal.publish")
  });
}
let tH = () => {
  let e = wA();
  let t = d4(_$$fA);
  let {
    sessionId
  } = sz() ?? {};
  let n = ol();
  let a = useCallback(() => {
    e(_$$to({
      type: dD,
      data: {
        entrypoint: RR.LIBRARY_MODAL_OVERVIEW,
        libraryModalSessionId: sessionId
      }
    }));
  }, [e, sessionId]);
  return useCallback(() => {
    t ? a() : e(_$$to({
      type: $3,
      data: {
        team: n,
        afterFileMove: a
      }
    }));
  }, [e, t, a, n]);
};
function tW({
  openFile: e,
  kbPath: t,
  libraryGuidelinesEnabled: i
}) {
  let {
    url,
    shouldCover
  } = _$$t3();
  let o = function () {
    let e = _G();
    let t = _$$tS();
    let i = _$$bj([assertNotNullish(e)], {
      revalidateOnMount: !0
    });
    let n = eu();
    let a = _$$W2.useFileMetadata();
    let s = _$$W2.usePath();
    let {
      sessionId,
      searchSessionId,
      queryId
    } = zm();
    let c = fV(e ?? void 0);
    return useMemo(() => {
      if ("loaded" === i.status && i.data.length > 0) {
        let e = i.data[0];
        if (e && ZA(e)) {
          Nf(e) && !e.library_file_key && (e.library_file_key = t);
          return () => {
            az.trackDefinedEvent("library_modal.library_clicked", {
              ...a,
              libraryKey: e.library_key,
              libraryFileKey: t ?? void 0,
              path: _$$W2.buildPathString(s),
              libraryModalSessionId: sessionId,
              searchSessionId,
              queryId,
              section: "local",
              libraryPosition: 1,
              added: !1,
              approved: c
            });
            n(e, 1);
          };
        }
      }
    }, [i.status, i.data, a, t, s, sessionId, searchSessionId, queryId, c, n]);
  }();
  let l = cJ();
  let d = !!(getFeatureFlags().ds_pubplat_sts || getFeatureFlags().ds_pubplat_sts_code);
  let u = !l || d;
  return jsx(_$$V, {
    header: jsx(tM, {
      openFile: e,
      isPublishedLibrary: !!o
    }),
    subheader: e.team?.name ?? _$$t("fullscreen.filename_view.drafts"),
    thumbnailUrl: url ?? null,
    coverThumbnail: shouldCover,
    secondaryCallToAction: i && u ? jsx(tO, {
      kbPath: t
    }) : null,
    callToAction: u ? jsx(tz, {
      openFile: e,
      kbPath: t,
      column: i ? 2 : 1
    }) : null,
    name: e.name,
    onClick: o,
    kbPath: t
  });
}
function tY({
  publishedLibrary: e,
  kbPath: t
}) {
  let i = P2(e);
  let a = !i || null !== e.thumbnail_guid;
  let s = i ? e.team_name : e.community_author_name;
  let o = _$$W2.useFileMetadata();
  let {
    section
  } = _$$W2.usePositionDataForLogging();
  let d = _$$W2.useMetadataForLibrary(e);
  let {
    sessionId
  } = zm();
  let u = _$$W2.usePath();
  let m = (t[t.length - 1] ?? 0) + 1;
  let h = eu();
  let g = useCallback(() => {
    let {
      added,
      default_level,
      approved,
      search_session_id,
      query_id,
      library_file_key,
      library_key
    } = d();
    az.trackDefinedEvent("library_modal.library_clicked", {
      ...o,
      added,
      approved,
      defaultLevel: default_level ?? void 0,
      libraryFileKey: library_file_key,
      libraryKey: library_key,
      searchSessionId: search_session_id,
      queryId: query_id,
      libraryModalSessionId: sessionId,
      libraryPosition: m,
      section,
      path: _$$W2.buildPathString(u)
    });
    h(e, m);
  }, [d, o, sessionId, m, section, u, h, e]);
  return jsx(_$$V, {
    header: jsx(_$$C, {
      publishedLibrary: e
    }),
    subheader: s,
    thumbnailUrl: e.thumbnail_url,
    coverThumbnail: a,
    callToAction: jsx(_$$S3, {
      publishedLibrary: e,
      kbPath: t,
      kbColumn: 1,
      entrypoint: "list",
      positionForLogging: m
    }),
    name: e.library_name,
    onClick: g,
    kbPath: t
  });
}
function t$() {
  return _$$z2() && !!getFeatureFlags().bake_ds_import_library_guidelines;
}
function tZ({
  results: e
}) {
  !function () {
    let e = function () {
      let {
        dismissLibraryDetails
      } = useContext(ed);
      return assertNotNullish(dismissLibraryDetails, "useViewLibraryDetails must be used within a LibraryDetailsContext");
    }();
    let {
      searchQuery
    } = zm();
    let i = ZC(searchQuery);
    useEffect(() => {
      searchQuery !== i && e();
    }, [searchQuery, e, i]);
  }();
  let t = q5();
  let i = t$();
  return "loaded" !== e.status ? jsx(Fragment, {
    children: y1(4).map(e => jsx(_$$Q2, {}, e))
  }) : jsx(Fragment, {
    children: e.data.map((e, r) => e.library_key === t?.libraryKey ? jsx(tW, {
      openFile: t,
      kbPath: [m3.TabBodySection.Body, r],
      libraryGuidelinesEnabled: i
    }, e.library_key) : jsx(tY, {
      publishedLibrary: e,
      kbPath: [m3.TabBodySection.Body, r]
    }, e.library_key))
  });
}
function tX() {
  let {
    debouncedSearchQuery,
    searchResults
  } = zm();
  let i = "loaded" !== searchResults.status;
  let a = searchResults?.data?.length === 0;
  let {
    queryId,
    searchQuery,
    searchSessionId
  } = zm();
  let d = useMemo(() => ({
    query: searchQuery,
    query_id: queryId,
    search_session_id: searchSessionId,
    num_results: searchResults?.data?.length
  }), [queryId, searchQuery, searchResults?.data?.length, searchSessionId]);
  return jsx(ec, {
    children: jsx(_$$W2.PageWithTracking, {
      name: "results",
      loading: i,
      emptyState: a,
      metadata: d,
      children: jsx(_$$P, {
        className: "library_modal_search_tab--searchScrollContainer--G5eqv",
        children: jsxs("div", {
          className: "library_modal_search_tab--searchBody--r2twU",
          children: [jsx("h3", {
            className: "library_modal_search_tab--searchHeader---K7CJ",
            children: !i && a ? _$$tx("design_systems.libraries_modal.no_results_for", {
              query: debouncedSearchQuery
            }) : _$$tx("design_systems.libraries_modal.displaying_results_for", {
              searchQuery: debouncedSearchQuery
            })
          }), jsx(_$$W2.PositionDataProvider, {
            section: "results",
            children: jsx(tZ, {
              results: searchResults
            })
          })]
        })
      })
    })
  });
}
function tQ() {
  return jsx(ec, {
    children: jsx(tl, {
      onlyJoinedTeams: !0
    })
  });
}
let t2 = "library_modal_this_file_tab--thisFileHeader--CyxnU";
function t5() {
  return jsxs(Fragment, {
    children: [jsx("h3", {
      className: t2,
      children: _$$tx("design_systems.libraries_modal.libraries_added_to_this_file")
    }), jsxs("div", {
      className: "library_modal_this_file_empty_state--emptyStateWrapper--GEG6p",
      children: [jsx(t4, {}), jsx("div", {
        className: "library_modal_this_file_empty_state--emptyStateText--E-q9E",
        children: _$$tx("design_systems.libraries_modal.you_don_t_have_any_libraries_added")
      }), jsx(t3, {})]
    })]
  });
}
function t4() {
  return jsxs("svg", {
    width: "90",
    height: "90",
    viewBox: "0 0 90 90",
    fill: "none",
    children: [jsx("rect", {
      width: "90",
      height: "90",
      rx: "13",
      fill: "#CB9FD2"
    }), jsx("path", {
      d: "M56.993 20.7694L52.796 18.3516L45.0395 31.7566L37.283 18.3516L33.0859 20.7694L36.5755 26.8002C32.8989 24.1099 28.362 22.521 23.4532 22.521H14.7102V66.8481H23.4532C30.5647 66.8481 36.8957 63.5134 40.9612 58.3257V62.8184C40.9612 65.0439 42.7694 66.8481 44.9999 66.8481C47.2303 66.8481 49.0385 65.0439 49.0385 62.8184V58.3257C53.104 63.5134 59.435 66.8481 66.5466 66.8481H75.2895V22.521H66.5466C61.6984 22.521 57.213 24.0709 53.5608 26.7011L56.993 20.7694Z",
      fill: "#4D49FC"
    }), jsx("rect", {
      x: "10.407",
      y: "18.3516",
      width: "8.6069",
      height: "8.6069",
      rx: "4.30345",
      fill: "#E4FF97"
    }), jsx("rect", {
      x: "10.407",
      y: "62.5449",
      width: "8.6069",
      height: "8.6069",
      rx: "4.30345",
      fill: "#E4FF97"
    }), jsx("rect", {
      x: "70.9863",
      y: "18.3516",
      width: "8.6069",
      height: "8.6069",
      rx: "4.30345",
      fill: "#E4FF97"
    }), jsx("rect", {
      x: "70.9863",
      y: "62.5449",
      width: "8.6069",
      height: "8.6069",
      rx: "4.30345",
      fill: "#E4FF97"
    })]
  });
}
function t3() {
  let {
    hasProAccess
  } = mG();
  let {
    tabManager
  } = zm();
  let i = useCallback(() => {
    tabManager.setActiveTab("recommended");
  }, [tabManager]);
  let a = useCallback(() => {
    tabManager.setActiveTab("teams");
  }, [tabManager]);
  return hasProAccess ? jsx($n, {
    variant: "secondary",
    onClick: i,
    children: _$$tx("design_systems.libraries_modal.view_recommended_libraries")
  }) : jsx($n, {
    variant: "secondary",
    onClick: a,
    children: _$$tx("design_systems.libraries_modal.view_team_libraries")
  });
}
function t9() {
  return jsxs("div", {
    className: "library_modal_branch_banner--branchBanner--e2meq",
    children: [jsx("div", {
      className: "library_modal_branch_banner--icon--GZMh7",
      children: jsx(_$$Z, {})
    }), jsx("div", {
      className: "library_modal_branch_banner--description--RuYOD",
      children: _$$tx("design_systems.libraries_modal.merge_into_main_file_to_publish")
    }), jsx(_$$N.Button, {
      variant: "secondary",
      newTab: !0,
      href: "https://help.figma.com/hc/articles/5691189138839",
      children: _$$tx("design_systems.libraries_modal.learn_more")
    })]
  });
}
function il({
  children: e
}) {
  return jsx("div", {
    className: "library_modal_banner--libraryModalBanner--gAlbE",
    children: e
  });
}
function id() {
  let e = function () {
    let e = ol();
    let t = wA();
    let {
      sessionId
    } = zm();
    let n = q5();
    let a = useCallback(() => {
      t(_$$to({
        type: dD,
        data: {
          entrypoint: RR.LIBRARY_MODAL_UPSELL_UI3,
          libraryModalSessionId: sessionId
        }
      }));
    }, [t, sessionId]);
    return useCallback(() => {
      t(_$$to({
        type: $3,
        data: {
          team: e,
          afterFileMove: a
        }
      }));
      az.trackDefinedEvent("library_modal.starter_cta_clicked", {
        fileKey: n?.key,
        teamId: n?.teamId ?? "",
        libraryModalSessionId: sessionId,
        entryPoint: "this_file_banner_button"
      });
    }, [t, a, e, n, sessionId]);
  }();
  let t = function () {
    let e = ol();
    let t = _$$x();
    return useMemo(() => e && Object.values(t).some(t => t.id === e.id), [e, t]);
  }();
  let i = _$$er();
  let a = q5();
  let {
    sessionId
  } = zm();
  let o = t || !i;
  _$$h(() => {
    az.trackDefinedEvent("library_modal.publish_upsell_banner_shown", {
      fileKey: a?.key,
      teamId: a?.teamId ?? "",
      libraryModalSessionId: sessionId
    });
  });
  return jsxs(il, {
    children: [jsx(_$$m, {}), jsxs("div", {
      className: "library_publish_upsell_banner--bannerBody--TT2V3",
      children: [jsx("div", {
        className: "library_publish_upsell_banner--bannerHeader--IkzbP",
        children: _$$tx("design_systems.libraries_modal.publish_components_as_a_library")
      }), jsx("div", {
        className: "library_publish_upsell_banner--bannerDescription--viHA8",
        children: o ? jsx(ic, {}) : jsx(iu, {})
      }), o && jsx($n, {
        variant: "primary",
        onClick: e,
        children: _$$tx("design_systems.libraries_modal.publish_this_file")
      })]
    })]
  });
}
function ic() {
  let e = function () {
    let e = wA();
    let t = q5();
    let {
      sessionId
    } = zm();
    return useCallback(() => {
      e(_$$to({
        type: _$$V2,
        data: {
          upsellSource: _$$b.HISTORY_UPSELL,
          teamId: t?.teamId ?? "",
          openCheckoutInNewTab: !0
        }
      }));
      az.trackDefinedEvent("library_modal.starter_cta_clicked", {
        fileKey: t?.key,
        teamId: t?.teamId ?? "",
        entryPoint: "this_file_banner_link",
        libraryModalSessionId: sessionId
      });
    }, [e, t, sessionId]);
  }();
  return _$$tx("design_systems.libraries_modal.share_components_on_new_plan", {
    upgradePlanText: jsx(_$$$z, {
      variant: "link",
      onClick: e,
      trackingProperties: {
        trackingDescriptor: _$$c.UPGRADE,
        upsellSource: _$$b.LIBRARY_MODAL_UPSELL,
        canUserAccessProFeature: !1
      },
      children: _$$tx("design_systems.libraries_modal.upgrade_to_professional_plan")
    })
  });
}
function iu() {
  return _$$tx("design_systems.libraries_modal.sharing_assets_with_your_team", {
    learnMoreLink: jsx(Ph, {
      href: "/pricing",
      newTab: !0,
      trusted: !0,
      trackingProperties: {
        trackingDescriptor: _$$c.LEARN_MORE,
        upsellSource: _$$b.LIBRARY_MODAL_UPSELL,
        canUserAccessProFeature: !1
      },
      children: _$$tx("design_systems.libraries_modal.learn_more")
    })
  });
}
function ip() {
  let e = q5();
  let {
    hasProAccess
  } = mG();
  let i = t$();
  let r = _6();
  let a = "fullscreen" === r.view && r.editorType !== _$$nT.Slides && r.editorType !== _$$nT.Cooper;
  return e && a ? hasProAccess ? jsxs(Fragment, {
    children: [jsx("h3", {
      className: "library_modal_this_file_tab--thisFileHeaderTop--bgW4I library_modal_this_file_tab--thisFileHeader--CyxnU",
      children: _$$tx("design_systems.libraries_modal.assets_created_in_this_file")
    }), jsx(tW, {
      openFile: e,
      kbPath: [m3.InThisFileSection.CreatedInThisFile],
      libraryGuidelinesEnabled: i
    }), Kz(e) && jsx(t9, {})]
  }) : jsx(id, {}) : null;
}
function im() {
  return jsxs(Fragment, {
    children: [jsx("h3", {
      className: t2,
      children: _$$tx("design_systems.libraries_modal.libraries_added_to_this_file")
    }), y1(2).map(e => jsx(_$$Q2, {}, e))]
  });
}
function ih({
  subscribedLibraries: e
}) {
  return e.data?.length === 0 ? null : "loading" === e.status ? jsx(im, {}) : e.data?.length === 0 ? null : jsxs(Fragment, {
    children: [jsx("h3", {
      className: t2,
      children: _$$tx("design_systems.libraries_modal.libraries_added_to_this_file")
    }), e.data?.map((e, t) => jsx(tY, {
      publishedLibrary: e,
      kbPath: [m3.InThisFileSection.AddedToThisFile, t]
    }, e.library_key))]
  });
}
function ig({
  hasMissingLibraries: e,
  openMissingLibrariesView: t
}) {
  let {
    setKeyboardNavigationElement,
    onClickWithFocus
  } = hx({
    path: [m3.InThisFileSection.MissingLibrariesButton],
    onClick: t
  });
  return "loaded" !== e.status ? jsx("div", {
    className: t2,
    children: jsx(Wi, {
      opacity: 50,
      animationType: JR.SHIMMER
    })
  }) : e.data ? jsx("div", {
    className: t2,
    children: jsx(IK, {
      variant: "secondary",
      onClick: onClickWithFocus,
      ref: setKeyboardNavigationElement,
      children: _$$tx("design_systems.libraries_modal.view_missing_libraries")
    })
  }) : null;
}
function i_() {
  return jsxs(Fragment, {
    children: [jsx("h3", {
      className: t2,
      children: _$$tx("design_systems.libraries_modal.used_in_this_file_header")
    }), jsx(_$$Q2, {})]
  });
}
function iA({
  renderedPublishedLibraries: e
}) {
  return "loaded" !== e.status ? jsx(i_, {}) : 0 === e.data.length ? null : jsxs(Fragment, {
    children: [jsx("h3", {
      className: t2,
      children: _$$tx("design_systems.libraries_modal.used_in_this_file_header")
    }), e.data.map((e, t) => jsx(tY, {
      publishedLibrary: e,
      kbPath: [m3.InThisFileSection.UsedInThisFile, t]
    }, e.library_key))]
  });
}
function iy({
  usedInThisFile: e,
  hasMissingLibraries: t,
  openMissingLibrariesView: i
}) {
  return jsxs(Fragment, {
    children: [jsx(iA, {
      renderedPublishedLibraries: e
    }), jsx(ig, {
      hasMissingLibraries: t,
      openMissingLibrariesView: i
    })]
  });
}
function ib() {
  let e = mq.useTabContentsWidth();
  let [t, i] = useState(!1);
  let a = useCallback(() => i(!1), []);
  let s = useCallback(() => i(!0), []);
  let {
    subscribedLibraries,
    usedInThisFile,
    missingLibraryKeys
  } = _$$i2();
  let c = useMemo(() => "loading" === missingLibraryKeys.status || "loading" === usedInThisFile.status ? Xm() : "loaded" !== missingLibraryKeys.status ? missingLibraryKeys : gB(missingLibraryKeys.data.length > 0), [missingLibraryKeys, usedInThisFile]);
  !function ({
    subscribedLibraries: e,
    usedInThisFile: t
  }) {
    let i = y("subscribed_libraries_loaded");
    let n = y("used_in_this_file_loaded");
    let a = y("tab_loaded");
    let s = ZC(e);
    let o = ZC(t);
    useEffect(() => {
      s?.status !== "loaded" && "loaded" === e.status && i();
    }, [s?.status, e.status, i]);
    useEffect(() => {
      o?.status !== "loaded" && "loaded" === t.status && n();
    }, [o?.status, t.status, n]);
    useEffect(() => {
      "loaded" === e.status && "loaded" === t.status && (s?.status !== "loaded" || o?.status !== "loaded") && a();
    }, [s?.status, o?.status, e, a, t]);
  }({
    subscribedLibraries,
    usedInThisFile,
    missingLibraryKeys
  });
  let p = "loaded" === subscribedLibraries.status && "loaded" === usedInThisFile.status && "loaded" === missingLibraryKeys.status && 0 === subscribedLibraries.data.length && 0 === usedInThisFile.data.length && 0 === missingLibraryKeys.data.length;
  let m = useMemo(() => [subscribedLibraries, usedInThisFile, missingLibraryKeys].some(e => "loading" === e.status), [missingLibraryKeys, subscribedLibraries, usedInThisFile]);
  let h = md($c);
  let {
    isPublishingModalEnabled
  } = tB();
  let f = useMemo(() => ({
    added_section_n_libraries: subscribedLibraries.data?.length,
    used_section_n_libraries: usedInThisFile.data?.length,
    assets_created_in_this_file: h,
    publish_available: isPublishingModalEnabled,
    missing_libraries: c.data ?? void 0
  }), [isPublishingModalEnabled, h, c.data, subscribedLibraries.data?.length, usedInThisFile.data?.length]);
  return jsx(_$$W2.Page, {
    name: "overview",
    children: jsx(ec, {
      children: jsxs(_$$Q3, {
        width: e,
        children: [jsxs(_$$P, {
          className: "library_modal_this_file_tab--thisFileScrollContainer--Sf-b6",
          children: [jsx(_$$W2.PageViewTracker, {
            loading: m,
            emptyState: p,
            metadata: f
          }), jsxs("div", {
            className: "library_modal_this_file_tab--thisFileBody--AMT3O",
            children: [jsx(ip, {}), p ? jsx(t5, {}) : jsxs(Fragment, {
              children: [jsx(_$$W2.PositionDataProvider, {
                section: "added",
                children: jsx(ih, {
                  subscribedLibraries
                })
              }), jsx(_$$W2.PositionDataProvider, {
                section: "used",
                children: jsx(iy, {
                  usedInThisFile,
                  hasMissingLibraries: c,
                  openMissingLibrariesView: s
                })
              })]
            })]
          })]
        }), t && (missingLibraryKeys.data?.length === 1 && missingLibraryKeys.data[0] ? jsx(_$$U, {
          selectedLibraryKey: missingLibraryKeys.data[0],
          onBackClick: a
        }) : jsx(_$$f, {
          backToList: a,
          libraryKeys: missingLibraryKeys.data ?? []
        }))]
      })
    })
  });
}
function iv() {
  let e = je();
  let t = ry();
  let i = y("tab_loaded");
  let a = ZC(t);
  useEffect(() => {
    a?.status !== "loaded" && "loaded" === t.status && i();
  }, [a, t, i]);
  let s = useMemo(() => {
    if ("loaded" !== t.status) return [];
    let e = [...t.result];
    sortByPropertyWithOptions(e, "library_name");
    return e;
  }, [t.result, t.status]);
  let o = useCallback(() => {
    let t = new Set(e.data?.map(e => e.libraryKey));
    return {
      n_libraries: s.length,
      n_added: s.filter(e => t.has(e.library_key)).length
    };
  }, [s, e.data]);
  return jsx(_$$W2.Page, {
    name: "overview",
    children: jsx(ec, {
      children: jsxs("div", {
        className: _$$s2.flex.flexColumn.pt16.borderBox.hFull.wFull.gap16.$,
        children: [jsxs("div", {
          className: _$$s2.flex.flexColumn.gap4.textBodyLargeStrong.px16.$,
          children: [jsx("h2", {
            children: _$$tx("design_systems.libraries_modal.ui_kits")
          }), jsx("span", {
            className: _$$s2.colorTextSecondary.textBodyMedium.$,
            children: _$$tx("design_systems.libraries_modal.ui_kits_description")
          })]
        }), jsx(_$$$, {
          innerClassName: _$$s2.px16.pb16.$,
          children: "loading" === t.status ? jsx(iI, {}) : jsxs(Fragment, {
            children: [jsx(eG, {
              libraries: s,
              kbPath: [m3.TabBodySection.Body]
            }), jsx(_$$W2.PageViewTracker, {
              metadata: o
            })]
          })
        })]
      })
    })
  });
}
function iI() {
  return jsxs("div", {
    className: _$$s2.flex.gap8.$,
    children: [jsx(ez, {}), jsx(ez, {}), jsx(ez, {})]
  });
}
var iT = iC;
let iz = _$$eU(null);
var iW = iH;
let iJ = Iz(e => _$$eU(t => {
  let i = t(mO(e));
  let n = t(n1);
  let r = t(_$$tn);
  let a = t(sm);
  let s = t(Q$);
  return i.map(e => ({
    ...e,
    movedFromFileName: s[e.key] ? void 0 : function (e, t, i, n) {
      if (e.localIdsToUpdate.some(e => i.includes(e))) return _$$t("design_systems.updates.this_file");
      for (let i of e.oldSubscribedKeysToUpdate) if (t[i] && n.includes(i)) return t[i];
    }(e, n, r, a)
  }));
}));
function i0(e, t, i, n) {
  let r;
  let a = [];
  for (let {
    localIdsToUpdate,
    oldSubscribedKeysToUpdate
  } of t) {
    if (localIdsToUpdate.find(e => glU.doesSymbolHaveInstances(e))) return _$$t("design_systems.updates.this_file");
    a = a.concat(oldSubscribedKeysToUpdate);
  }
  if (0 !== a.length) for (let t of a) {
    let a = n[t];
    if (r = a?.library_key, a && r && i[r]?.name && r !== e) return i[r]?.name;
  }
}
function no(e) {
  return e.type === PW.COMPONENT || e.type === PW.STATE_GROUP;
}
let nl = "updates_list_item--updateRow--fXEDS";
let nd = "updates_list_item--updateTile--rkEy6";
let nc = "updates_list_item--updateDeets---hUu5";
let nu = "updates_list_item--srcFileNameForUpdate--GHvag";
function np({
  item: e,
  updateItem: t,
  checkpointIndex: i,
  i: a
}) {
  let o;
  let {
    numOutdatedInstances,
    toggleReviewUpdatesModal
  } = function (e) {
    let t = wA();
    let i = no(e);
    let n = e.type === PW.STYLE;
    let r = e.type === PW.VARIABLE_SET;
    let a = e.type === PW.MODULE;
    return {
      numOutdatedInstances: i && TF(e),
      toggleReviewUpdatesModal: i || n ? i => {
        no(e) ? t(_$$to({
          type: $$et0,
          data: {
            source: "UPDATES_MODAL",
            asset: e,
            updatesModalScope: i
          }
        })) : n ? t(_$$to({
          type: $$ei1,
          data: {
            updateStyle: e,
            updatesModalScope: i
          }
        })) : r ? throwError("individual updates not supported for variable sets") : a ? throwError("individual updates not supported for modules") : throwTypeError(e, "item is neither an instance or style update");
      } : null
    };
  }(e);
  let {
    movedFromFileName
  } = e;
  let p = useContext(Jc);
  let {
    ref,
    kbArgs
  } = E4({
    path: [m3.UpdatesSection.List, i, m3.UpdatesListAssetSection[e.type], a],
    disabled: !toggleReviewUpdatesModal
  });
  return jsxs("div", {
    className: _$$s2.relative.$,
    children: [(o = jsxs("div", {
      className: nl,
      children: [jsx(lX, {
        width: 64,
        height: 64,
        className: nd,
        item: e
      }), jsxs("div", {
        className: nc,
        children: [jsx("div", {
          className: "updates_list_item--updateTitle--GaaBq text--fontPos13--xW8hS text--_fontBase--QdLsd",
          children: jsx(_$$R, {
            text: e.name
          })
        }), movedFromFileName && jsx("span", {
          className: nu,
          children: jsx(_$$R, {
            text: _$$t("design_systems.updates.moved_from", {
              movedFromFileName
            })
          })
        }), p !== aD.CURRENT && !!numOutdatedInstances && jsx("span", {
          className: nu,
          children: jsx(_$$R, {
            text: _$$t("design_systems.updates.num_outdated_instances", {
              numOutdatedInstances
            })
          })
        })]
      }), jsx("div", {
        style: {
          width: 86
        }
      })]
    }), toggleReviewUpdatesModal ? jsx(bj, {
      kbArgs,
      elementRef: ref,
      children: jsx(_$$E, {
        "aria-label": _$$t("design_systems.updates.review_updates"),
        className: "updates_list_item--clickableRow--z5oBO",
        onClick: () => toggleReviewUpdatesModal(p || void 0),
        ref,
        children: o
      })
    }) : o), jsx("div", {
      className: "updates_list_item--updateButtonContainer--6wy8I",
      children: jsx(_$$Y, {
        spacing: 16,
        horizontalAlignItems: "center",
        children: jsx($n, {
          variant: "secondary",
          onClick: i => {
            i.stopPropagation();
            t(e);
          },
          children: _$$tx("design_systems.updates.update")
        })
      })
    })]
  });
}
function nm({
  index: e
}) {
  let [t, i] = useState(0 === e);
  _$$h(() => i(!0));
  return jsx("div", {
    className: "updates_list_item--updateRowLoadingWrapper--XvVXf",
    style: {
      opacity: t ? 1 - .2 * e : 0,
      transitionDelay: `${1.5 * e}s`
    },
    children: jsxs("div", {
      className: nl,
      children: [jsx("div", {
        className: nd,
        children: jsx(Qp, {
          animationType: JR.LIGHT_SHIMMER,
          className: _$$s2.h64.w64.$
        })
      }), jsxs("div", {
        className: nc,
        children: [jsx(Wi, {
          className: _$$s2.h12.w150.mb12.$,
          animationType: JR.LIGHT_SHIMMER
        }), jsx(Wi, {
          className: _$$s2.h12.w64.$,
          animationType: JR.LIGHT_SHIMMER
        })]
      })]
    })
  });
}
function nh({
  checkpoint: e,
  updateComponent: t,
  updateStateGroup: i,
  updateStyle: a,
  updateVariableSet: o,
  updateCodeComponentAsset: l,
  index: d
}) {
  var c;
  let u = sZ();
  let p = Oe(u);
  let m = useMemo(() => e.components.length > 0 ? e.components[0] : e.stateGroups.length > 0 ? e.stateGroups[0] : e.styles.length > 0 ? e.styles[0] : e.variableSets.length > 0 ? e.variableSets[0] : e.codeComponents.length > 0 ? e.codeComponents[0] : null, [e]);
  let h = R8({
    assetKey: null != m ? Av(m) : void 0,
    type: m?.type ?? PW.COMPONENT
  });
  let g = useMemo(() => {
    if ("loaded" !== h.status) return;
    let e = oA(h.data?.assetAttribution);
    return e?.type === FTeamType.TEAM ? e.handle : e?.type === FTeamType.COMMUNITY ? e.name : void 0;
  }, [h]);
  let f = _$$B2(e.libraryKey).data ?? e.fileName;
  return jsxs("div", {
    className: "updates_checkpoint--updatesCheckpoint--jQNFh",
    children: [jsxs("div", {
      className: "updates_checkpoint--updatesMetadata--ad326",
      children: [jsxs("div", {
        className: "updates_checkpoint--updatesByLine--RkQyX",
        children: [_$$tx("design_systems.updates.updates_from", {
          fileName: f
        }), e.isOpenFile && jsx("div", {
          className: "updates_checkpoint--helpIcon3--aYJ5e",
          children: jsx(_$$a, {
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": _$$A("library-updates-from-current-file")
          })
        }), !e.isOpenFile && p && sF(e.libraryKey) && jsx("div", {
          className: _$$s2.pl4.$,
          children: jsx(KP, {
            libraryKey: e.libraryKey
          })
        })]
      }), jsx("div", {
        className: "updates_checkpoint--updatesSubText--oVu98",
        children: "loading" === h.status ? jsx(Wi, {
          animationType: JR.LIGHT_SHIMMER,
          className: _$$s2.h16.w150.$
        }) : (c = e.publishDate, g && c ? _$$tx("design_systems.updates.publishedByHandle", {
          publishUserHandle: g,
          relativeTimeStr: jsx(h1, {
            date: c
          })
        }) : c ? _$$tx("design_systems.updates.published", {
          relativeTimeStr: jsx(h1, {
            date: c
          })
        }) : g ? _$$tx("design_systems.updates.publishedByHandleNoTimestamp", {
          publishUserHandle: g
        }) : _$$tx("design_systems.updates.publishedNoTimestamp"))
      }), null != e.description && "" !== e.description && jsx("div", {
        className: "updates_checkpoint--updatesDescription--TJrG7",
        children: e.description
      })]
    }), e.components.map((e, i) => jsx(np, {
      item: e,
      updateItem: t,
      checkpointIndex: d,
      i
    }, e.node_id)), e.stateGroups.map((e, t) => jsx(np, {
      item: e,
      updateItem: i,
      checkpointIndex: d,
      i: t
    }, e.node_id)), e.styles.map((e, t) => jsx(np, {
      item: e,
      updateItem: a,
      checkpointIndex: d,
      i: t
    }, e.node_id)), e.variableSets.map((e, t) => jsx(np, {
      item: e,
      updateItem: o,
      checkpointIndex: d,
      i: t
    }, e.node_id)), e.codeComponents.map((e, t) => jsx(np, {
      item: e,
      updateItem: l,
      checkpointIndex: d,
      i: t
    }, e.assetId))]
  }, e.id || "");
}
let nf = "updates--emptyState--C5g1y";
let n_ = "updates--emptyStateTitle--3-Kqz";
let nA = "updates--emptyStateSubtitle--H3XdW";
function ny({
  width: e,
  scrollContainerHeight: t,
  setUpdatesModalScope: i,
  recordingKey: a,
  entrypoint: o,
  switchedTabs: l
}) {
  SR();
  let c = _$$er();
  let h = function () {
    let [e, t] = fp(iz);
    let i = wA();
    let {
      componentUpdateKeys,
      stateGroupUpdateKeys,
      styleUpdateKeys,
      variableSetKeys
    } = md(_$$t_);
    let {
      componentUpdatesForAllPages,
      styleUpdatesForAllPages,
      variableSetUpdatesForAllPages,
      libraryAssetUpdatesForAllPages
    } = md(S9);
    let g = useMemo(() => new Set([...componentUpdatesForAllPages.map(e => `${e.component_key}/${e.content_hash}`), ...styleUpdatesForAllPages.map(e => `${e.key}/${e.content_hash}`), ...variableSetUpdatesForAllPages.map(e => `${e.key}/${e.version}`), ...libraryAssetUpdatesForAllPages.map(e => `${Av(e)}/${Dg(e)}`)]), [componentUpdatesForAllPages, styleUpdatesForAllPages, variableSetUpdatesForAllPages, libraryAssetUpdatesForAllPages]);
    let f = useMemo(() => libraryAssetUpdatesForAllPages.map(e => {
      let t = VJ(e);
      return t ? {
        key: Av(e),
        library_key: t
      } : null;
    }).filter(isNotNullish), [libraryAssetUpdatesForAllPages]);
    let _ = useRef(0);
    useEffect(() => {
      if (e?.refs && Bq(g, e?.refs)) return;
      t(null);
      let r = ++_.current;
      (function ({
        component_keys: e,
        state_group_keys: t,
        style_keys: i,
        variable_set_keys: n,
        library_asset_keys_with_library_keys: r
      }) {
        return XHR.post("/api/publish_metadata", {
          component_keys: e,
          state_group_keys: t,
          style_keys: i,
          variable_set_keys: n,
          library_asset_keys_with_library_keys: r
        }).then(e => ({
          error: !1,
          result: e.data.meta
        })).catch(() => ({
          error: !0,
          result: {
            checkpoint_id_to_metadata: {},
            component_key_to_checkpoint_id: {},
            style_key_to_checkpoint_id: {},
            state_group_key_to_checkpoint_id: {},
            variable_set_key_to_checkpoint_id: {},
            library_key_and_asset_key_to_checkpoint_id: {}
          }
        }));
      })({
        component_keys: componentUpdateKeys,
        state_group_keys: stateGroupUpdateKeys,
        style_keys: styleUpdateKeys,
        variable_set_keys: variableSetKeys,
        library_asset_keys_with_library_keys: f
      }).then(({
        result: e,
        error: n
      }) => {
        _.current === r && (t({
          refs: g,
          metadata: e
        }), n && i(_$$F.enqueue({
          message: _$$t("design_systems.updates.couldn_t_load_update_descriptions_please_try_again_later"),
          type: "updates_error",
          error: !0
        })));
      });
    }, [i, componentUpdateKeys, stateGroupUpdateKeys, styleUpdateKeys, variableSetKeys, f, g, t, e?.refs]);
    return e?.metadata;
  }();
  let g = Xr(wy);
  let _ = d4(_$$c2);
  let A = md(yV);
  let y = A?.parentOrgId?.toString();
  let b = _.file_team_id?.toString();
  let E = useContext(Jc) ?? aD.ALL;
  let x = pk(E);
  let S = !md(x);
  let w = _$$eS(E);
  let {
    updateComponent,
    updateStateGroup,
    updateStyle,
    updateVariableSet,
    updateLibraryAsset,
    updateAll
  } = se(w, E, o);
  let [F, M] = useState(!1);
  let j = d4(e => !!e.openFile && VP(e.loadingState, `GET_USED_COMPONENTS_STATE_GROUPS_FOR_${e.openFile.key}`));
  let U = _$$tS() || void 0;
  let V = E === aD.ALL;
  let [G, z] = useState(!1);
  let [W, K] = useState(null);
  _$$h(() => (sx("updates_modal_opened", {
    fileKey: U || "null",
    usingFullscreenData: V,
    isIncremental: h3O?.isIncrementalSession(),
    isShimFFEnabled: !0,
    isSgShimFFEnabled: !0,
    entrypoint: o,
    switchedTabs: l
  }), sn.start("updates_modal_load"), g(!0), V && _$$q(_em.LIBRARY_UPDATES).then(() => {
    let e = sn.get("updates_modal_load")?.getElapsedTime();
    e && K(e);
    sn.resume("updates_modal_load");
    _$$J2(() => {
      glU.expandInstancesWithStyleOverrides();
      glU.onFrame();
      window.requestAnimationFrame(() => {
        M(!0);
      });
    });
  }), () => {
    g(!1);
  }));
  let Y = h && (!V || F && !j);
  let {
    ref,
    kbArgs
  } = E4({
    path: [m3.UpdatesSection.List]
  });
  useEffect(() => {
    if (Y && !G) {
      let e = sn.tryStop("updates_modal_load");
      e && sx("updates_modal_loaded", {
        fileKey: U || "null",
        waitForAllPagesTime: W,
        fullLoadTime: e,
        usedFullscreenData: V,
        isIncremental: !!h3O?.isIncrementalSession(),
        isRedesign: c
      }, {
        forwardToDatadog: !0
      });
      z(!0);
    }
  }, [U, G, Y, V, W, c]);
  let Z = useCallback(() => {
    i(aD.ALL);
    F || _$$q(_em.LIBRARY_UPDATES).then(() => {
      _$$J2(() => {
        glU.expandInstancesWithStyleOverrides();
        glU.onFrame();
        window.requestAnimationFrame(() => {
          setTimeout(() => M(!0), 250);
        });
      });
    });
  }, [F, i]);
  let X = useMemo(() => Y && S ? E === aD.ALL ? jsxs("div", {
    className: nf,
    children: [jsx("div", {
      className: n_,
      children: _$$tx("design_systems.updates.no_updates_available")
    }), jsx("div", {
      className: nA,
      children: jsx("div", {
        children: _$$tx("design_systems.updates.updates_to_components_or_styles", {
          lineBreak: jsx("br", {})
        })
      })
    })]
  }) : jsxs("div", {
    className: nf,
    children: [jsx("div", {
      className: n_,
      children: _$$tx("design_systems.updates.no_updates_available_page")
    }), jsx("div", {
      className: nA,
      children: jsx("div", {
        children: _$$tx("design_systems.updates.maybe_updates_other_pages")
      })
    }), jsx("div", {
      className: "updates--viewAllButton--RpxHV",
      children: c ? jsx(Tq, {
        elementRef: ref,
        kbArgs,
        children: jsx($n, {
          variant: "secondary",
          onClick: e => {
            e.stopPropagation();
            Z();
          },
          ref,
          children: _$$tx("design_systems.updates.show_all_updates")
        })
      }) : jsx($n, {
        onClick: e => {
          e.stopPropagation();
          Z();
        },
        variant: "secondary",
        children: _$$tx("design_systems.updates.view_all_pages")
      })
    })]
  }) : null, [S, Y, c, E, Z, kbArgs, ref]);
  let Q = useCallback(e => {
    az.trackDefinedEvent("library_preferences_modal.updates_modal_tab_changed", {
      tab: e ? "all" : "current",
      fileKey: U,
      fileParentOrgId: y,
      fileTeamId: b
    });
    e ? Z() : i(aD.CURRENT);
  }, [U, y, b, i, Z]);
  let {
    ref: _ref,
    kbArgs: _kbArgs
  } = E4({
    path: [m3.UpdatesSection.Footer, m3.UpdatesSectionFooter.AllPagesToggle]
  });
  !function (e, t) {
    let i = e.current === document.activeElement;
    let n = ZC(i);
    let a = _$$$2(t);
    let s = a && t;
    let o = a && !t;
    let l = useRef(!1);
    useEffect(() => {
      s && (i || n) && (l.current = !0);
    }, [i, s, n]);
    useEffect(() => {
      o && l.current && (e.current?.focus(), l.current = !1);
    }, [o, e]);
  }(_ref, !Y);
  let et = rf(a, "click", updateAll);
  let ei = jsxs(Fragment, {
    children: [jsxs(_$$P, {
      width: e,
      className: "updates--updatesContent--i15qb text--fontPos11--2LvXf text--_fontBase--QdLsd updates--scrollContainer--rzDnF",
      height: t,
      children: [!Y && jsx(nv, {}), Y && S && jsxs(Fragment, {
        children: [X, jsx(_$$W2.PageViewTracker, {
          metadata: nI,
          emptyState: !0
        })]
      }), Y && !S && jsx(nb, {
        usedItemsByKey: w,
        checkpointMetadataResponse: h,
        updateComponent: e => updateComponent(e, []),
        updateStateGroup: e => updateStateGroup(e, []),
        updateStyle: e => updateStyle(e),
        updateVariableSet: e => updateVariableSet(e),
        updateCodeComponentAsset: updateLibraryAsset,
        allPages: E === aD.ALL
      })]
    }), jsxs("div", {
      className: "updates--updateFooter--GiIYe",
      children: [jsx(bj, {
        elementRef: _ref,
        kbArgs: _kbArgs,
        children: jsx(_$$d2, {
          label: jsx(_$$J, {
            children: _$$tx("design_systems.updates.show_updates_for_all_pages")
          }),
          checked: E === aD.ALL,
          onChange: Q,
          disabled: !Y,
          ref: _ref
        })
      }), jsx($n, {
        disabled: !Y || S,
        autoFocus: !c,
        onClick: et,
        recordingKey: _$$Pt(a, "updateAll"),
        variant: "primary",
        children: _$$tx("design_systems.updates.update_all")
      })]
    })]
  });
  return c ? jsx(_$$W2.Page, {
    name: "updates",
    children: jsx("div", {
      className: _$$s2.hFull.$,
      children: ei
    })
  }) : jsx(_$$i3, {
    children: ei
  });
}
function nb({
  checkpointMetadataResponse: e,
  usedItemsByKey: t,
  updateComponent: i,
  updateStateGroup: a,
  updateStyle: o,
  updateVariableSet: l,
  updateCodeComponentAsset: d,
  allPages: c
}) {
  let p = useContext(Jc);
  let m = useMemo(() => {
    var i;
    i = p ?? aD.ALL;
    return _$$eU(n => {
      let r = n(function (e, t) {
        let i = Yy(t);
        return _$$eU(t => {
          let n = t(qp);
          return t(i).map(t => ({
            ...t,
            movedFromFileName: i0(t.library_key, [t], n, e)
          }));
        });
      }(t, i));
      let a = n(function (e, t) {
        let i = Bw(t);
        return _$$eU(t => {
          let n = t(qp);
          return t(i).map(t => ({
            ...t,
            movedFromFileName: i0(t.library_key, Object.values(t.newStateKeyToOutdatedItems), n, e)
          }));
        });
      }(t, i));
      let o = n(iJ(i));
      let l = n(_$$jk(i));
      let d = n(kK(i));
      let c = n(_S);
      let p = n(qp);
      let m = n(_$$O);
      let h = {};
      let g = (t, i) => {
        let n = VJ(i);
        let r = Ui({
          library_key: n
        }, c);
        let a = n ? m[n] : null;
        let o = a ? a.versions?.[a.current_hub_file_version_id]?.name : p[n]?.name;
        if (!h[t = t ?? `FakeId:${n}`]) {
          let a = e.checkpoint_id_to_metadata[t];
          let s = a ? new Date(a.updated_at) : i.type === PW.CODE_COMPONENT ? i.updatedAt : i.updated_at ? new Date(i.updated_at) : null;
          h[t] = {
            id: t,
            publishDate: s,
            description: a ? a.description : "",
            libraryKey: n,
            fileName: o ?? "",
            isOpenFile: r,
            components: [],
            styles: [],
            stateGroups: [],
            variableSets: [],
            codeComponents: []
          };
        }
        return h[t];
      };
      for (let t of r) g(e.component_key_to_checkpoint_id[t.component_key], t).components.push(t);
      for (let t of a) g(e.state_group_key_to_checkpoint_id[t.key], t).stateGroups.push(t);
      for (let t of o) g(e.style_key_to_checkpoint_id[t.key], t).styles.push(t);
      for (let t of l) {
        let i = e.variable_set_key_to_checkpoint_id?.[t.key];
        i && g(i, t).variableSets.push(t);
      }
      for (let t of d) if (t.type !== PW.CODE_COMPONENT) continue;else {
        let i = e.library_key_and_asset_key_to_checkpoint_id?.[t.sourceLibraryKey]?.[t.key];
        g(i, t)?.codeComponents.push(t);
      }
      return iW()(Object.values(h), e => e.publishDate, "desc");
    });
  }, [t, e, p]);
  let h = pk(p ?? aD.ALL);
  let g = md(h);
  let f = md(m);
  let _ = useCallback(() => {
    let e = f.reduce((e, t) => e + t.components.length, 0);
    let t = f.reduce((e, t) => e + t.stateGroups.length, 0);
    let i = f.reduce((e, t) => e + t.styles.length, 0);
    let n = f.reduce((e, t) => e + t.variableSets.length, 0);
    return {
      n_updates: e + t + i + n,
      n_components: e + t,
      n_styles: i,
      n_variable_sets: n,
      n_libraries: t_()(f, "fileKey").length,
      all_pages: c
    };
  }, [c, f]);
  return (_$$W2.useLogPageView({
    metadata: _
  }), g && iT()(f)) ? ($D(_$$e2.DESIGN_SYSTEMS_EDITOR, Error("Library updates list is empty but shouldn't be")), jsx("div", {
    className: nf,
    children: _$$tx("design_systems.updates.couldn_t_load_update_descriptions_error", {
      lineBreak: jsx("br", {})
    })
  })) : jsx(Fragment, {
    children: f.map((e, t) => jsx(nh, {
      checkpoint: e,
      updateComponent: i,
      updateStateGroup: a,
      updateStyle: o,
      updateVariableSet: l,
      updateCodeComponentAsset: d,
      index: t
    }, e.id))
  });
}
function nv() {
  return jsxs("div", {
    className: "updates--loadingState--qFtXn",
    children: [jsxs("div", {
      className: "updates--updatesCheckpoint--zaVIK",
      children: [jsxs("div", {
        className: "updates--updatesMetadata--oXl17",
        children: [jsx(Wi, {
          className: _$$s2.h12.w100.mb8.$,
          animationType: JR.LIGHT_SHIMMER
        }), jsx(Wi, {
          className: _$$s2.h12.w150.mb8.$,
          animationType: JR.LIGHT_SHIMMER
        }), jsx(Wi, {
          className: _$$s2.h12.w200.mb8.$,
          animationType: JR.LIGHT_SHIMMER
        })]
      }), Array.from({
        length: 5
      }).map((e, t) => jsx(nm, {
        index: t
      }, `loading-placholder-${t}`))]
    }), jsxs("div", {
      className: "updates--loadingSpinnerContainer---E3qg",
      children: [jsx(_$$nt, {}), jsx("div", {
        className: "updates--loadingText--Fk9e3",
        children: _$$tx("design_systems.updates.updates_taking_longer_than_expected")
      })]
    })]
  });
}
let nI = {
  n_updates: 0,
  n_libraries: 0,
  n_components: 0,
  n_styles: 0,
  n_variables: 0
};
function nE() {
  let e = mq.useTabContentsWidth();
  let {
    entrypoint,
    hasSwitchedTabs,
    initialUpdatesModalScope
  } = zm();
  let [o, d] = useState(initialUpdatesModalScope);
  return jsx(Jc.Provider, {
    value: o,
    children: jsx(ny, {
      entrypoint,
      switchedTabs: hasSwitchedTabs,
      width: e,
      setUpdatesModalScope: d,
      recordingKey: generateRecordingKey(fA, "updates")
    })
  });
}
function nx() {
  let {
    tabPanelPropsMap
  } = zm();
  return jsx(_$$ej, {
    children: jsxs("main", {
      className: "library_modal_tab_body--mainContent--JMEJp",
      children: [jsx(nS, {
        ...tabPanelPropsMap.search,
        name: "search",
        children: jsx(tX, {})
      }), jsx(nS, {
        ...tabPanelPropsMap.thisFile,
        name: "this_file",
        children: jsx(ib, {})
      }), jsx(nS, {
        ...tabPanelPropsMap.updates,
        name: "updates",
        children: jsx(nE, {})
      }), jsx(nS, {
        ...tabPanelPropsMap.recommended,
        name: "recommended",
        children: jsx(tS, {})
      }), jsx(nS, {
        ...tabPanelPropsMap.teams,
        name: "teams",
        children: jsx(tQ, {})
      }), jsx(nS, {
        ...tabPanelPropsMap.org,
        name: "organization",
        children: jsx(tm, {})
      }), jsx(nS, {
        ...tabPanelPropsMap.uiKits,
        name: "ui_kits",
        children: jsx(iv, {})
      })]
    })
  });
}
function nS(e) {
  let {
    name,
    ...i
  } = e;
  return jsx(_$$W2.Page, {
    name: `${name}_tab`,
    children: jsx(_$$t2.TabPanel, {
      ...i
    })
  });
}
let nF = [m3.TabStripSection.Search];
function nM() {
  let {
    searchQuery,
    setSearchQuery,
    clearSearchQuery,
    onFocusSearchBar,
    modalRef
  } = zm();
  let o = useCallback(() => {
    _$$S.setLastAction(_$$S.NavAction.FOCUS_SEARCH);
    onFocusSearchBar();
  }, [onFocusSearchBar]);
  let l = useRef(null);
  p1(l);
  useEffect(function () {
    let e = lo();
    let t = t => {
      "Tab" === t.key && t.target === e && l.current?.focus();
    };
    document.addEventListener("keydown", t);
    return () => {
      document.removeEventListener("keydown", t);
    };
  }, []);
  useEffect(function () {
    let e = modalRef?.current?.getEl();
    if (!e) return;
    let t = e => {
      "/" !== e.key || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey || Qk(e.target) || l.current?.focus();
    };
    e.addEventListener("keydown", t);
    return () => {
      e.removeEventListener("keydown", t);
    };
  }, [modalRef]);
  return jsxs("div", {
    className: "library_modal_search_bar--searchBarWrapper--QDrvJ",
    children: [jsx(_$$h3, {}), jsx(E1, {
      autofocus: !0,
      entryPointForTracking: "editor:library_subscriptions_modal",
      forwardedRef: l,
      isNewAssetsPanel: !0,
      isVisible: !0,
      onBlur: lQ,
      onChange: setSearchQuery,
      onClearSearch: clearSearchQuery,
      onFocus: o,
      path: nF,
      query: searchQuery,
      recordingKey: "subscriptionListViewLibrarySearch",
      selectOnFocus: !0
    })]
  });
}
function nU({
  tabName: e,
  icon: t,
  manager: i,
  display: a,
  id: s,
  kbIdx: o
}) {
  let l = i.activeTab === s;
  let d = useCallback(() => {
    l || (i.setActiveTab(s), _$$S.setLastAction(_$$S.NavAction.TAB));
  }, [i, l, s]);
  let {
    setKeyboardNavigationElement,
    keyboardNavigationItem
  } = M3({
    path: [m3.TabStripSection.Tabs, o],
    onFocusThroughKeyboardNavigation: d
  });
  return ($_(keyboardNavigationItem, l), a) ? jsxs("div", {
    className: l ? "library_modal_tab--activeTabContents--US-Xs library_modal_tab--tabContentsShared--V3tVN" : "library_modal_tab--tabContents--Xaob1 library_modal_tab--tabContentsShared--V3tVN",
    onClick: d,
    role: "tab",
    tabIndex: l ? 0 : -1,
    ref: setKeyboardNavigationElement,
    "data-testid": "library-modal-tab",
    "aria-selected": l,
    children: [jsx("span", {
      children: t
    }), jsx("span", {
      children: e
    })]
  }) : null;
}
function nB() {
  return jsx("hr", {
    className: "library_modal_tab_divider--divider--OQNsy"
  });
}
function nV() {
  let {
    tabPropsMap
  } = zm();
  let t = LH();
  return jsx(Y7, {
    children: jsxs("nav", {
      className: "library_modal_tab_strip--tabStrip----mnU",
      children: [jsx(nM, {}), jsx(nB, {}), Ir.map((i, a) => {
        switch (i) {
          case "thisFile":
            return createElement(nU, {
              tabName: _$$tx("design_systems.libraries_modal.this_file"),
              icon: jsx(_$$l, {}),
              ...tabPropsMap.thisFile,
              kbIdx: a,
              key: "thisFile"
            });
          case "updates":
            return jsxs(_$$Fragment, {
              children: [jsx(nU, {
                tabName: _$$tx("design_systems.libraries_modal.updates"),
                icon: jsx(_$$o, {}),
                ...tabPropsMap.updates,
                kbIdx: a
              }), jsx(nB, {}), jsx("h3", {
                className: "library_modal_tab_strip--tabSectionHeader--tomFn",
                children: _$$tx("design_systems.libraries_modal.browse_libraries")
              })]
            }, "updates");
          case "recommended":
            return createElement(nU, {
              tabName: _$$tx("design_systems.libraries_modal.recommended"),
              icon: jsx(_$$c3, {}),
              ...tabPropsMap.recommended,
              kbIdx: a,
              key: "recommended"
            });
          case "teams":
            return createElement(nU, {
              tabName: t ? _$$tx("design_systems.libraries_modal.your_teams") : _$$tx("design_systems.libraries_modal.teams"),
              icon: jsx(_$$w, {}),
              ...tabPropsMap.teams,
              kbIdx: a,
              key: "teams"
            });
          case "org":
            return createElement(nU, {
              tabName: _$$tx("design_systems.libraries_modal.your_organization"),
              icon: jsx(_$$Y2, {}),
              ...tabPropsMap.org,
              kbIdx: a,
              key: "org"
            });
          case "uiKits":
            return createElement(nU, {
              tabName: _$$tx("design_systems.libraries_modal.ui_kits"),
              icon: jsx(_$$U2, {}),
              ...tabPropsMap.uiKits,
              kbIdx: a,
              key: "uiKits"
            });
          default:
            return null;
        }
      })]
    })
  });
}
export function $$nG0({
  entrypoint: e,
  initialTab: t,
  initialUpdatesModalScope: i,
  sessionId: d
}) {
  let c = m9();
  Qj();
  ry();
  _$$h(() => {
    _.stop();
    _.reset();
    _.start();
  });
  let u = useRef(null);
  useEffect(() => {
    _$$S.setLastAction(_$$S.NavAction.OPEN_MODAL);
  }, []);
  return jsx(Tp, {
    entrypoint: e,
    initialTab: t,
    sessionId: d,
    initialUpdatesModalScope: i ?? aD.CURRENT,
    modalRef: u,
    children: jsx(_$$S2, {
      children: jsx(_$$s, {
        title: jsx(S, {}),
        width: c,
        modalRef: u,
        children: jsx("div", {
          className: "library_modal--modalBody--pNi0C",
          tabIndex: -1,
          children: jsxs(_$$tH, {
            boundaryKey: "LibraryModalUI3",
            fallback: jsx(x, {}),
            children: [jsx(nV, {}), jsx(nx, {})]
          })
        })
      })
    })
  });
}
export const b = $$nG0;