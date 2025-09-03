import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useLayoutEffect, useRef, useMemo, Component, useState, useContext, memo } from "react";
import { AWq, Egt, glU, xae, m1T, Ez5 } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { eU as _$$eU, md, fp, zl } from "../figma_app/27355";
import { YQ } from "../905/502364";
import { A as _$$A } from "../573/289674";
import { X0 } from "../figma_app/88239";
import { eY as _$$eY, KH, aV, p8 } from "../figma_app/722362";
import { tB as _$$tB, q5 } from "../figma_app/516028";
import { ut } from "../figma_app/84367";
import { F9, e_ as _$$e_, MH, dM, Xh } from "../figma_app/803787";
import { bL, EA } from "../9410/499229";
import { f as _$$f } from "../1528/716387";
import { $ as _$$$ } from "../figma_app/644304";
import { s as _$$s } from "../b2835def/812839";
import { d as _$$d } from "../3682/659785";
import { n as _$$n } from "../1528/289390";
import { Q as _$$Q } from "../9410/629866";
import { cT, n0, GQ, vr, TU, _4, bi, Ye } from "../figma_app/32128";
import { G as _$$G, N as _$$N } from "../b2835def/560769";
import { wA, d4, Pj } from "../vendor/514228";
import { t as _$$t } from "../905/150656";
import { $ as _$$$2 } from "../905/455748";
import { F as _$$F } from "../905/680873";
import { $ as _$$$3 } from "../9410/841699";
import { uE, ds } from "../figma_app/314264";
import { dh, nn } from "../figma_app/186343";
import { T as _$$T } from "../905/858738";
import { o3, nt } from "../905/226610";
import { p as _$$p } from "../figma_app/353099";
import { Ay } from "../642/998522";
import { QU } from "../1250/559338";
import { tx as _$$tx, t as _$$t2 } from "../905/303541";
import { _ as _$$_ } from "../905/170564";
import { Q as _$$Q2 } from "../905/463586";
import { E as _$$E } from "../905/95280";
import { Z as _$$Z } from "../905/104740";
import { QZ } from "../figma_app/62612";
import { Ib } from "../905/129884";
import { K0 } from "../figma_app/778125";
import { ob, kh, ee as _$$ee } from "../figma_app/571341";
import { ZI } from "../figma_app/597338";
import { wt, R4 } from "../figma_app/74043";
import { x4, tl as _$$tl, Vc } from "../905/657224";
import { A as _$$A2 } from "../vendor/90566";
import { az, sx as _$$sx } from "../905/449184";
import { parsePxInt } from "../figma_app/783094";
import { h as _$$h } from "../905/207101";
import { Rs } from "../figma_app/288654";
import { Av } from "../905/149328";
import { O as _$$O } from "../905/257139";
import { dP, q_, M3 } from "../figma_app/119475";
import { kt } from "../figma_app/858013";
import { cr, gP } from "../905/879323";
import { to as _$$to } from "../905/156213";
import { Hz } from "../figma_app/591738";
import { S as _$$S } from "../642/159607";
import { n1 } from "../figma_app/657017";
import { Gq } from "../figma_app/361662";
import { wr } from "../figma_app/741237";
import { LR } from "../figma_app/120210";
import { iZ } from "../905/372672";
import { I as _$$I } from "../905/342732";
import { Cn } from "../905/225265";
import { kQI } from "../figma_app/43951";
import { jO } from "../figma_app/242339";
import { w5 } from "../figma_app/345997";
import { h as _$$h2 } from "../figma_app/198885";
import { dK, Xt } from "../figma_app/889655";
import { P as _$$P } from "../905/338617";
import { sp as _$$sp } from "../figma_app/678300";
import { r6 } from "../figma_app/517115";
import { dL } from "../figma_app/825489";
import { Wq, od } from "../figma_app/392189";
import { r6 as _$$r } from "../905/542608";
import ew from "classnames";
import { Uz } from "../905/63728";
import { Ay as _$$Ay } from "../figma_app/778880";
import { eu as _$$eu, q5 as _$$q } from "../figma_app/807786";
import { vb, E1, aU } from "../figma_app/757606";
import { I as _$$I2, v as _$$v } from "../figma_app/130633";
import { b as _$$b } from "../642/502017";
import eO from "../vendor/946678";
import { f as _$$f2 } from "../figma_app/436731";
import { wJ } from "../figma_app/630951";
import { Fl, fV } from "../figma_app/236178";
import { FX, KP } from "../figma_app/12491";
import { NX, k9, sF } from "../figma_app/777207";
import { t as _$$t3, E as _$$E2 } from "../905/511388";
import { P as _$$P2, J as _$$J } from "../figma_app/582341";
import { JA } from "../figma_app/608944";
import { l6, c$, sK } from "../905/794875";
import { Pt } from "../figma_app/806412";
import { U as _$$U } from "../905/966438";
import { m as _$$m } from "../642/720139";
import { Wh } from "../figma_app/615482";
import { Bk, RN, Sg, $1, oV, Mt, mZ } from "../figma_app/76115";
import { g5 } from "../figma_app/178752";
import { $A } from "../905/862883";
import { Kz } from "../905/760074";
import { qp, oE } from "../905/977779";
import { O as _$$O2 } from "../905/221694";
import { Qe, Nx } from "../figma_app/112055";
import { D as _$$D } from "../905/367723";
import { pR, xO } from "../figma_app/585235";
import { throwTypeError } from "../figma_app/465776";
import { oz, zq, l$ } from "../figma_app/782261";
import { V as _$$V } from "../figma_app/473391";
import { ZC } from "../figma_app/39751";
import { PN } from "../figma_app/257275";
import { NG } from "../figma_app/709893";
import { B as _$$B } from "../905/714743";
import { Y as _$$Y } from "../905/830372";
import { jD } from "../905/765855";
import { fd, o3 as _$$o, Ag } from "../figma_app/255679";
import { kH } from "../905/309735";
import { $z } from "../figma_app/297733";
import { T as _$$T2 } from "../905/714785";
import { n as _$$n2 } from "../905/186638";
import { F as _$$F2 } from "../905/84606";
import { Y as _$$Y2 } from "../905/411989";
import { MT, lX } from "../figma_app/588397";
import { K as _$$K, h as _$$h3 } from "../905/275787";
import { eT as _$$eT } from "../figma_app/116234";
import { rp, PI, A5, rj } from "../figma_app/703988";
import { AD, iE, QX, Gr, HR, Bm, UU, OW, Md, Rm, Ki } from "../figma_app/645801";
import { A as _$$A3 } from "../1617/775065";
import { s as _$$s2 } from "../cssbuilder/589278";
import { fu } from "../figma_app/831799";
import { K as _$$K2 } from "../905/135526";
import { BS, T as _$$T3, FX as _$$FX, Nz, cP, uY } from "../figma_app/475869";
import { A as _$$A4 } from "../6828/523860";
import { A as _$$A5 } from "../6828/85206";
import { l as _$$l } from "../905/716947";
import { y as _$$y } from "../figma_app/598297";
import { K as _$$K3 } from "../905/770444";
import { d as _$$d2 } from "../642/758804";
import { V as _$$V2 } from "../642/624414";
import { gNA } from "../figma_app/27776";
import { M as _$$M } from "../905/540025";
import { g as _$$g } from "../642/216228";
import { C as _$$C } from "../905/108595";
import { vv } from "../905/508457";
import { y0 } from "../figma_app/718307";
import { Fk } from "../figma_app/167249";
import { Tv } from "../figma_app/151869";
import { A as _$$A6 } from "../9410/103334";
import { m as _$$m2 } from "../1156/605578";
import { R as _$$R } from "../9410/515820";
import { l7 } from "../figma_app/932601";
import { U as _$$U2 } from "../figma_app/964810";
import { y as _$$y2 } from "../9410/598921";
import { o as _$$o2 } from "../642/343724";
import { BN, FV, ay, n8 } from "../573/404275";
import { I as _$$I3 } from "../573/606770";
import { g as _$$g2 } from "../9410/153133";
import { d as _$$d3 } from "../9410/162990";
import { b as _$$b2, W as _$$W } from "../b2835def/91751";
function V() {
  let e = wA();
  let t = d4(e => !!e.modalShown);
  let s = d4(e => e.versionHistory.compareId);
  let i = AWq.getChunkChangeCount();
  let o = _$$Z("chunk_change_navigator_navigate");
  let l = _$$E();
  let d = useCallback(e => {
    Egt.setSelectedNodeAndCanvas(e, !0);
    o(QZ({
      nodeId: e,
      ...ob
    }), kh);
    l(e);
  }, [o, l]);
  let c = useCallback(e => {
    t || 0 === i || ("ArrowUp" === e.key || "ArrowLeft" === e.key || e.shiftKey && "Tab" === e.key ? d(glU.navigateToNextChange(-1)) : ("ArrowDown" === e.key || "ArrowRight" === e.key || "Tab" === e.key) && d(glU.navigateToNextChange(1)));
  }, [t, i, d]);
  return (useEffect(() => {
    e(_$$Q2.dequeue({
      type: _$$_.SEE_WHATS_CHANGED
    }));
  }, [e]), useEffect(() => {
    s && 0 !== i && d(glU.navigateToFirstVisibleOrClosestChange());
  }, [i, s, d]), useLayoutEffect(() => {
    if (0 !== i) {
      document.addEventListener("keydown", c);
      return () => {
        document.removeEventListener("keydown", c);
      };
    }
  }, [i, c]), 0 === i) ? null : jsxs(Fragment, {
    children: [jsx("div", {
      className: "chunk_change_navigator--chunkChangeCount--ZFnfP",
      children: _$$tx("collaboration.feedback.change_count", {
        changeCount: i
      })
    }), jsxs("div", {
      className: "chunk_change_navigator--chunkChangeNavigator--82303",
      children: [jsx(K0, {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#000" fill-opacity="1" fill-rule="nonzero" stroke="none" d="M12.292 10.66 13 9.952 8.001 4.746l-5 5.206.708.708 4.292-4.5z"/></svg>',
        onClick: e => {
          e.stopPropagation();
          d(glU.navigateToNextChange(-1));
        },
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": _$$t2("collaboration.feedback.previous_change"),
        recordingKey: "change_stepper.previous",
        disabled: 0 === i
      }), jsx(K0, {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#000" fill-opacity="1" fill-rule="nonzero" stroke="none" d="M3.708 5.34 3 6.048l4.999 5.206 5-5.206-.708-.708-4.292 4.5z"/></svg>',
        onClick: e => {
          e.stopPropagation();
          d(glU.navigateToNextChange(1));
        },
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": _$$t2("collaboration.feedback.next_change"),
        recordingKey: "change_stepper.next",
        disabled: 0 === i
      })]
    })]
  });
}
var eN = ew;
function eL({
  searchOptions: e,
  keyboardNavigationPath: t,
  keyboardNavigationColumn: s
}) {
  let i = _$$I(Cn.AssetsPanel);
  let {
    activeTab,
    shouldFocusSearchBar
  } = d4(e => e.leftPanel);
  let d = activeTab === xae.ASSETS;
  let c = useRef(null);
  let u = d4(e => e.mirror.appModel.activeCanvasEditModeType);
  let h = vb({
    isVisible: d,
    autofocus: !0,
    selectOnFocus: !0,
    ref: c
  });
  useEffect(() => {
    let e = e => {
      (_$$Ay.chromeos ? e.altKey && e.shiftKey && e.keyCode === Uz.KEY_2 : e.altKey && e.keyCode === Uz.KEY_2) && u !== m1T.TEXT && (h(), e.preventDefault());
    };
    document.addEventListener("keydown", e);
    return () => {
      document.removeEventListener("keydown", e);
    };
  }, [u, h]);
  let p = useCallback(t => {
    let s;
    e && (_$$eu(e.type) ? s = e.type : (s = {
      type: _$$I2.ALL
    }, e.onSetAssetType(s)));
    i.setQuery(t, s);
  }, [i, e]);
  let g = eN()("component_sidebar_search--searchWithViewModeToggle--nKJ2-", "component_sidebar_search--negMargin--QTfpB");
  return null != t ? jsx(E1, {
    autofocus: shouldFocusSearchBar,
    className: g,
    column: s,
    entryPointForTracking: "editor:assets_panel",
    forwardedRef: c,
    hideSearchIcon: !0,
    isVisible: d,
    onChange: p,
    path: t,
    placeholder: _$$t2("design_systems.assets_panel.search"),
    query: i.query,
    recordingKey: "componentsLibrarySearch",
    selectOnFocus: !0
  }) : jsx(aU, {
    autofocus: shouldFocusSearchBar,
    className: g,
    entryPointForTracking: "editor:assets_panel",
    forwardedRef: c,
    hideSearchIcon: !0,
    isVisible: d,
    onChange: p,
    placeholder: _$$t2("design_systems.assets_panel.search"),
    query: i.query,
    recordingKey: "componentsLibrarySearch",
    selectOnFocus: !0
  });
}
var eF = eO;
function eW(e) {
  let {
    assetType,
    libraryNameByLibraryKey,
    fileKeyToLibraryKey,
    onSetAssetType,
    onSetKeyboardNavigationElement,
    validAssetTypeOptions
  } = e;
  let d = wA();
  let c = d4(e => e.dropdownShown);
  let u = d4(_$$tB);
  let {
    closeFlyout
  } = JA();
  let g = Fl();
  let y = useCallback(() => {
    closeFlyout();
    az.trackDefinedEvent("assets_panel.asset_type_dropdown_opened", {
      fileKey: u?.key,
      assetsPanelVersion: 2
    });
  }, [closeFlyout, u?.key]);
  let m = useMemo(() => {
    if (NX(g)) {
      let e = Object.entries(fileKeyToLibraryKey).map(([e, t]) => ({
        name: libraryNameByLibraryKey[t] ?? "",
        key: e,
        library_key: t
      }));
      k9({
        libraries: e,
        approvedLibraryKeysByResourceType: g
      });
      return e.map(({
        key: e
      }) => e);
    }
    return Object.keys(libraryNameByLibraryKey ?? {}).sort((e, t) => _$$f2.LEXICOGRAPHICALLY(libraryNameByLibraryKey[e], libraryNameByLibraryKey[t]));
  }, [g, fileKeyToLibraryKey, libraryNameByLibraryKey]);
  let f = n1();
  let [b, x] = eF()(m, e => !wJ(e));
  let v = x.length > 0 && f;
  let _ = useMemo(() => ({
    format: e => {
      switch (e.type) {
        case _$$I2.RECENT:
          return _$$t2("design_systems.assets_panel.dropdown_type_recents");
        case _$$I2.ALL:
          return _$$t2("design_systems.assets_panel.dropdown_type_all_libraries");
        case _$$I2.LOCAL:
          return _$$t2("design_systems.assets_panel.created_in_this_file");
        case _$$I2.FILE:
          return libraryNameByLibraryKey[e.libraryKey] ?? "";
        case _$$I2.SITE_KIT:
          return "";
      }
    },
    isEqual: eG
  }), [libraryNameByLibraryKey]);
  return jsxs(l6, {
    ariaLabel: _$$t2("design_systems.assets_panel.dropdown.aria_label"),
    chevronClassName: "sidebar_asset_type_select--chevron--xyZLx",
    className: "sidebar_asset_type_select--select--PTmwH",
    dispatch: d,
    dropdownAlignment: "left",
    dropdownShown: e.useLocalState ? e.dropdownShown : c,
    dropdownWidth: 260,
    formatter: _,
    id: "component-sidebar-asset-type-select",
    inputClassName: "sidebar_asset_type_select--input--sSEn2",
    inputRef: onSetKeyboardNavigationElement,
    onChange: onSetAssetType,
    onHideDropdownOverride: e.useLocalState ? e.onHideDropdownOverride : void 0,
    onShowDropdown: y,
    onShowDropdownOverride: e.useLocalState ? e.onShowDropdownOverride : void 0,
    openOnKeyPressed: [Uz.SPACE, Uz.ENTER],
    property: assetType,
    rightIcon: jsx(_$$P2, {
      libraryKey: assetType.type === _$$I2.FILE ? assetType.libraryKey : void 0
    }),
    children: [!!validAssetTypeOptions[_$$I2.ALL] && jsx(c$, {
      value: {
        type: _$$I2.ALL
      }
    }), !!validAssetTypeOptions[_$$I2.RECENT] && jsx(c$, {
      value: {
        type: _$$I2.RECENT
      }
    }), !!validAssetTypeOptions[_$$I2.LOCAL] && jsx(c$, {
      value: {
        type: _$$I2.LOCAL
      }
    }), b.length > 0 ? jsx(sK, {}) : null, b.length > 0 ? jsx(c$, {
      isHeader: !0,
      formattedValue: u?.org?.name ? _$$t2("design_systems.assets_panel.dropdown_org_libraries", {
        orgName: u.org.name
      }) : _$$t2("design_systems.assets_panel.dropdown_libraries")
    }) : null, b.map(e => sF(fileKeyToLibraryKey[e]) ? jsx(c$, {
      value: {
        type: _$$I2.FILE,
        libraryKey: fileKeyToLibraryKey[e]
      },
      removeTextRightPadding: !0,
      rightSettingsIcon: jsx(FX, {})
    }, e) : jsx(c$, {
      value: {
        type: _$$I2.FILE,
        libraryKey: fileKeyToLibraryKey[e]
      },
      fullWidth: !0
    }, e)), v ? jsx(sK, {}) : null, v ? jsx(c$, {
      isHeader: !0,
      formattedValue: _$$t2("design_systems.assets_panel.dropdown_curated_libraries")
    }) : null, v && x.map(e => jsx(c$, {
      value: {
        type: _$$I2.FILE,
        libraryKey: fileKeyToLibraryKey[e]
      },
      removeTextRightPadding: !0,
      rightSettingsIcon: jsx(_$$t3, {})
    }, e))]
  });
}
function eG(e, t) {
  return e.type === _$$I2.FILE && t.type === _$$I2.FILE ? e.libraryKey === t.libraryKey : e.type === t.type;
}
function eY({
  disabled: e,
  isList: t,
  onSetKeyboardNavigationElement: s,
  onToggleViewMode: r,
  recordingKey: a
}) {
  let i = t ? _$$t2("design_systems.assets_panel.show_as_grid") : _$$t2("design_systems.assets_panel.show_as_list");
  return jsx(K0, {
    ref: s,
    recordingKey: Pt(a, "toggleComponentsSidebarViewMode"),
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": i,
    svg: t ? '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill="#454545" fill-opacity="1" fill-rule="evenodd" stroke="none" d="M4 1H1v3h3zM0 0v5h5V0zm11 1H8v3h3zM7 0v5h5V0zM4 8H1v3h3zM0 7v5h5V7zm11 1H8v3h3zM7 7v5h5V7z"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" fill-opacity="1" fill-rule="nonzero" stroke="none" d="M6 6h2v1H6zm0 10h2v1H6zm0-5h2v1H6zm4-5h8v1h-8zm0 10h8v1h-8zm0-5h8v1h-8z"/></svg>',
    onClick: r,
    disabled: e
  });
}
let e0 = Wh(() => _$$eU(0));
let e1 = Wh(() => _$$eU(Bk.Grid));
function e5(e, t, s) {
  return null != e && (t[e.type] || e.type === _$$I2.FILE && s[e.libraryKey]) ? e : {
    type: _$$I2.ALL
  };
}
function te(e, t) {
  return `${t}:${e.key}`;
}
function tt(e) {
  return `${e}:stickySection`;
}
function tS({
  asset: e,
  fileName: t,
  sourceForTracking: s,
  thumbHeight: a,
  thumbLayout: l,
  thumbWidth: d,
  viewMode: c,
  sectionNameForTracking: u,
  sectionPosition: h,
  noFlyout: p,
  preventDrag: y,
  disableContextMenu: m
}) {
  let f = wA();
  let b = d4(e => e.dropdownShown);
  let {
    query,
    searchOption
  } = _$$I(Cn.AssetsPanel);
  let _ = d4(dK);
  let T = d4(F9);
  let k = md(_$$T2);
  let S = searchOption?.type === _$$I2.ALL;
  let w = fV(e.library_key);
  let N = fd(e.library_key);
  let I = S && (w || N);
  let C = useRef(null);
  let j = kH(e.name);
  let M = NG({
    text: j,
    textRef: C
  });
  let A = useRef(null);
  let L = NG({
    text: t ?? "",
    textRef: A
  });
  let P = b?.type === _$$K.ASSETS_PANEL ? b?.data?.component : void 0;
  let O = P?.node_id === e.node_id;
  let F = c === Bk.List;
  let R = F ? "list-no-padding" : "grid";
  let K = !!query;
  let H = _$$F2(e, _$$K.ASSETS_PANEL, h, u);
  let U = _$$n2(e);
  let z = ZC(U);
  let D = !p;
  useEffect(() => {
    U && !z && f(jD());
  }, [U, f, z]);
  let $ = e.isLocal && PN() ? _$$eT(e.node_id, _).join("-") : e.node_id;
  let B = "Local components" === u || "Local private components" === u || e.isLocal;
  let V = l !== rp.SMALL && !F;
  let W = !F && getFeatureFlags().api_asset_search_with_scores;
  let G = _$$Y2(e);
  let q = F ? a : a - 2;
  let Y = F ? d : d - 2;
  let J = useMemo(() => y ? void 0 : {
    sourceForTracking: s,
    clickToInsert: !1,
    afterSuccessfulInsert: $z,
    sectionNameForTracking: u
  }, [y, u, s]);
  let X = B ? jsx(MT, {
    alwaysShowBorder: !0,
    buttonProps: {
      onContextMenu: m ? void 0 : H
    },
    displayType: R,
    draggable: J,
    fileName: M || L ? t : void 0,
    height: q,
    hideNameOverlay: V,
    isFilePublished: T,
    isSearch: K,
    item: e,
    numVariants: G,
    recordingNodePath: $,
    sectionPosition: h,
    shouldHideTooltip: D || O || U,
    showTooltipImmediately: !1,
    useBaseTile: !0,
    width: Y
  }) : jsx(lX, {
    alwaysShowBorder: !0,
    buttonProps: {
      onContextMenu: m ? void 0 : H
    },
    displayType: R,
    draggable: J,
    fileName: M || L ? t : void 0,
    height: q,
    hideNameOverlay: V,
    isSearch: K,
    item: e,
    numVariants: G,
    recordingNodePath: $,
    sectionPosition: h,
    shouldHideTooltip: D || O || U,
    showName: !0,
    showTooltipImmediately: !1,
    useBaseTile: !0,
    width: Y
  });
  return jsxs("div", {
    className: F ? AD : iE,
    children: [F ? X : jsx("div", {
      className: eN()(QX, {
        [Gr]: U,
        [HR]: U && k
      }),
      children: X
    }), V && jsxs("div", {
      role: "button",
      className: Bm,
      style: {
        width: d
      },
      children: [jsx("span", {
        className: UU,
        ref: C,
        children: j
      }), D && jsx(_$$B, {
        ariaHidden: !0,
        className: OW,
        svg: _$$A3
      })]
    }), V && !!t && jsxs(_$$Y, {
      spacing: 0,
      direction: "horizontal",
      children: [jsx("div", {
        className: eN()(Md, Rm),
        ref: A,
        style: I ? {
          maxWidth: d - _$$J
        } : {
          width: d
        },
        children: t
      }), I && jsx(_$$P2, {
        libraryKey: e.library_key,
        showPresetTooltip: !0,
        tooltipDelay: 500,
        tooltipLocation: "below",
        compact: !0
      })]
    }), W && jsxs(Fragment, {
      children: [jsx("div", {
        className: eN()(Md, Rm),
        style: I ? {
          maxWidth: d - _$$J
        } : {
          width: d
        },
        children: "Score: " + (e.server_score?.toFixed(2) ?? "N/A")
      }), jsx("div", {
        className: eN()(Md, Rm),
        style: I ? {
          maxWidth: d - _$$J
        } : {
          width: d
        },
        children: "(L:" + (e.lexical_score?.toFixed(2) ?? "N/A") + ", AI:" + (e.ai_score?.toFixed(2) ?? "N/A") + ", F:" + (e.fuse_score?.toFixed(2) ?? "N/A") + ")"
      })]
    }), D && F && jsx(_$$B, {
      ariaHidden: !0,
      className: Ki,
      svg: _$$A3
    })]
  });
}
let tj = "library_section_header--sectionHeaderH1--P70zQ ellipsis--ellipsis--Tjyfa";
let tM = "library_section_header--sectionHeader3_redesign--TGISe ellipsis--ellipsis--Tjyfa";
let tA = "library_section_header--sectionHeaderH3--5VrMz ellipsis--ellipsis--Tjyfa";
let tO = e => "isExpandable" in e && e.isExpandable;
let tF = (e, t) => {
  switch (e) {
    case tj:
      return t ? "library_section_header--sectionHeaderDivider--SdrS5 ellipsis--ellipsis--Tjyfa" : "library_section_header--sectionHeader1_redesign--cWZaj ellipsis--ellipsis--Tjyfa";
    case tA:
      return tM;
    default:
      return "library_section_header--sectionHeader3_normal--bf4ra";
  }
};
let tR = e => {
  let t = [];
  if (e && e.length) {
    t.push(jsxs("div", {
      className: "library_section_header--sectionHeader1_sticky--mZ4QY ellipsis--ellipsis--Tjyfa",
      children: [e[0] + " / ", "\xa0"]
    }, e[0]));
    let s = e.slice(1).join(" / ");
    t.push(jsxs("div", {
      className: tM,
      children: [s, "\xa0"]
    }, s));
  }
  return t;
};
class tK extends Component {
  componentDidUpdate(e) {
    tO(this.props) && tO(e) && e.isExpanded !== this.props.isExpanded && "h1" === this.props.size && YQ({
      id: "library_section_header_toggled"
    });
  }
  render() {
    let e = "h1" === this.props.size ? tj : tA;
    let t = tO(this.props) ? "library_section_header--sectionHeaderExpandable--hHEFq" : "";
    let s = tF(e, this.props.shouldShowDividerLine);
    let r = tO(this.props) && this.props.isFixed ? "library_section_header--isFixed--eVHns" : "";
    return jsx(fu, {
      name: "Section Header",
      properties: {
        title: this.props.title,
        isExpanded: !!tO(this.props) && this.props.isExpanded
      },
      trackingTargets: _$$K2.RCS,
      children: jsxs("div", {
        className: eN()(s, e, t, r),
        children: [tO(this.props) && jsx(_$$B, {
          className: this.props.isExpanded ? "library_section_header--expandCaretOpen--083vU library_section_header--expandCaret--20Tzs object_row--expandCaret--f1MjE object_row--indent--uZlad" : "library_section_header--expandCaret--20Tzs object_row--expandCaret--f1MjE object_row--indent--uZlad",
          svg: this.props.isExpanded ? _$$A4 : _$$A5
        }), tO(this.props) && this.props.breadcrumbPath && !this.props.isFixed && jsxs("div", {
          className: "library_section_header--breadcrumbPath--Jevbg",
          children: [this.props.breadcrumbPath, "\xa0"]
        }), tO(this.props) && this.props.isFixed && this.props.stickyHeadertokens && this.props.stickyHeadertokens.length ? tR(this.props.stickyHeadertokens) : jsx("div", {
          className: s,
          children: this.props.title
        }), sF(this.props.subscribedLibraryKey) && jsx("div", {
          className: _$$s2.flex.alignCenter.justifyCenter.ml4.$,
          children: jsx(KP, {
            libraryKey: this.props.subscribedLibraryKey
          })
        }), (_$$o(this.props.subscribedLibraryKey) || Ag(this.props.subscribedLibraryKey)) && jsx("div", {
          className: _$$s2.flex.alignCenter.justifyCenter.ml4.$,
          children: jsx(_$$E2, {
            libraryKey: this.props.subscribedLibraryKey,
            showTooltip: !0,
            redirectToHubFile: !0
          })
        })]
      })
    });
  }
}
tK.H1_HEIGHT = parsePxInt(BS);
tK.H3_HEIGHT = parsePxInt(_$$T3);
class tH extends Component {
  render() {
    return jsx("div", {
      className: 12 === this.props.size ? "library_section_header--spacer12--0h1Dt" : "library_section_header--spacer16--iPkYc"
    });
  }
}
tH.HEIGHT = parsePxInt(_$$FX);
let tU = parsePxInt(_$$FX);
let tz = parsePxInt(_$$FX) / 2;
let tD = parsePxInt(Nz);
let t$ = parsePxInt(cP);
function tB({
  parent: e,
  outputElements: t,
  libraryNameByLibraryKey: s,
  items: r,
  keyPrefix: a,
  sharedOptions: o,
  sectionNameForTracking: l
}) {
  let d = PI(r, !0);
  let c = {
    layout: d,
    ...o
  };
  let u = A5(c);
  let {
    width,
    height
  } = rj(c, u);
  let g = o.isList ? 1 : 0;
  let y = o.isList ? 0 : tD;
  let m = o.isList || !s ? 0 : t$;
  let f = height + (o.isList ? tz : tU) + y + m + g + (o.isList ? 0 : -2);
  getFeatureFlags().api_asset_search_with_scores && (f += 2 * parsePxInt(uY));
  let b = width + (o.isList ? tz : tU) + (o.isList ? 0 : -2);
  let x = 0;
  let v = oz.getNextRenderedElementTop(t) + tz;
  for (let [i, c] of r.entries()) {
    let r = o.isList ? v + x * f : v + Math.floor(x / u) * f;
    let g = o.isList ? 0 : 3 + x % u * b;
    let y = _$$V(c);
    let m = c.library_key ? s?.[c.library_key] : void 0;
    t.push({
      parent: e,
      type: zq.TILE,
      top: r,
      left: g,
      height: f,
      key: `${a}:${y}`,
      element: function ({
        item: e,
        fileName: t,
        sourceForTracking: s,
        sectionNameForTracking: r,
        thumbLayout: a,
        thumbHeight: i,
        thumbWidth: o,
        isList: l,
        sectionPosition: d
      }) {
        return jsx(tS, {
          asset: e,
          fileName: t,
          sourceForTracking: s,
          sectionNameForTracking: r,
          thumbLayout: a,
          thumbHeight: i,
          thumbWidth: o,
          viewMode: l ? Bk.List : Bk.Grid,
          sectionPosition: d
        });
      }({
        containerWidth: o.containerWidth,
        fileName: m,
        sourceForTracking: o.sourceForTracking,
        sectionNameForTracking: l,
        thumbLayout: d,
        thumbHeight: height,
        thumbWidth: width,
        isList: o.isList,
        item: c,
        isExpanded: o.isExpanded,
        sectionPosition: i
      }),
      item: c,
      numCols: u,
      containerWidth: o.containerWidth,
      sectionNameForTracking: l,
      sectionPosition: i
    });
    x += 1;
  }
}
let tV = (e, t, s) => {
  let r = tt(s.keyPrefix);
  let a = oz.getNextRenderedElementTop(t);
  let i = {
    parent: e,
    type: zq.ROW,
    top: a,
    height: "h1" == s.size ? tK.H1_HEIGHT : tK.H3_HEIGHT,
    key: r,
    element: jsx(tK, {
      size: s.size,
      isExpandable: !0,
      isExpanded: s.isExpanded,
      title: s.title,
      breadcrumbPath: s.breadcrumbPath ? s.breadcrumbPath : null,
      stickyHeadertokens: s.stickyHeaderTokens ? s.stickyHeaderTokens : void 0,
      isFixed: !1,
      subscribedLibraryKey: s.subscribedLibraryKey
    }),
    isSticky: !0,
    isFixed: !1,
    children: [],
    isExpandable: !0,
    isExpanded: s.isExpanded,
    getExpandableElement: e => jsx(tK, {
      size: s.size,
      isExpandable: !0,
      isExpanded: e,
      title: s.title,
      breadcrumbPath: s.breadcrumbPath ? s.breadcrumbPath : null,
      stickyHeadertokens: s.stickyHeaderTokens ? s.stickyHeaderTokens : void 0,
      subscribedLibraryKey: s.subscribedLibraryKey
    }),
    sectionNameForTracking: s.sectionNameForTracking,
    rowType: s.rowType,
    fixedElement: jsxs(Fragment, {
      children: [jsx("div", {
        className: "component_sidebar--stickyHeaderSpacer--SaKsM"
      }), jsx(tK, {
        size: "h1",
        isExpandable: !0,
        isExpanded: s.isExpanded,
        title: s.title,
        breadcrumbPath: s.breadcrumbPath ? s.breadcrumbPath : null,
        stickyHeadertokens: s.stickyHeaderTokens ? s.stickyHeaderTokens : void 0,
        isFixed: !0,
        subscribedLibraryKey: s.subscribedLibraryKey
      })]
    })
  };
  t.push(i);
  return i;
};
function tW({
  prevParent: e,
  outputElements: t,
  inputSubtree: s,
  inputParentTree: r,
  keyPrefix: a,
  sharedOptions: o,
  sectionNameForTracking: l,
  hideTitle: d
}) {
  let c = te(s, a);
  let u = !d && function (e, t) {
    switch (e.type) {
      case "FILE":
        return "" !== e.name;
      case "PAGE":
        return t.subtrees.length > 1;
      case "NAME_GROUP":
        return !e.skipElementsInRendering;
      case "ASSET_TYPE":
        return e.items.length > 0 || e.subtrees.length > 0;
    }
  }(s, r);
  let h = function (e, t, s, n, r, a) {
    if (!e) return null;
    let i = te(n, r);
    let o = tt(i);
    let l = a.isExpanded(o, pR(n.type, n.sectionNameForTracking));
    switch (n.type) {
      case "FILE":
        return tV(null, s, {
          keyPrefix: i,
          size: "h1",
          title: n.name,
          isExpanded: l,
          stickyHeaderTokens: n.stickyHeaderTokens ? n.stickyHeaderTokens : void 0,
          subscribedLibraryKey: n.subscribedLibraryKey,
          sectionNameForTracking: n.sectionNameForTracking,
          rowType: l$.LIBRARY
        });
      case "PAGE":
        return tV(t, s, {
          keyPrefix: i,
          title: n.name,
          size: "h3",
          isExpanded: l,
          stickyHeaderTokens: n.stickyHeaderTokens ? n.stickyHeaderTokens : void 0,
          sectionNameForTracking: n.sectionNameForTracking,
          rowType: l$.PAGE
        });
      case "NAME_GROUP":
        return tV(t, s, {
          keyPrefix: i,
          size: "h3",
          title: n.flattenedPath ? n.flattenedPath : n.name,
          isExpanded: l,
          breadcrumbPath: n.breadcrumbPath ? n.breadcrumbPath : void 0,
          stickyHeaderTokens: n.stickyHeaderTokens ? n.stickyHeaderTokens : void 0,
          sectionNameForTracking: n.sectionNameForTracking,
          rowType: l$.NAME_GROUP
        });
      case "ASSET_TYPE":
        let d = tG(n.sectionNameForTracking);
        return tV(t, s, {
          keyPrefix: i,
          size: "h3",
          title: n.name,
          isExpanded: !0,
          sectionNameForTracking: n.sectionNameForTracking,
          rowType: d
        });
    }
  }(u, e, t, s, a, o);
  let p = h ? h.children : t;
  let g = h || e;
  if (getFeatureFlags().dse_templates_proto) {
    let e = s.subtrees.find(Qe);
    null != e && tW({
      prevParent: null,
      outputElements: p,
      inputSubtree: e,
      inputParentTree: s,
      keyPrefix: a,
      sharedOptions: o,
      sectionNameForTracking: e.sectionNameForTracking
    });
  }
  switch (s.type) {
    case "PAGE":
    case "ASSET_TYPE":
    case "FILE":
      tB({
        parent: g,
        outputElements: p,
        items: s.items,
        keyPrefix: c,
        sharedOptions: o,
        sectionNameForTracking: l
      });
      break;
    case "NAME_GROUP":
      s.skipElementsInRendering || tB({
        parent: g,
        outputElements: p,
        items: s.items,
        keyPrefix: c,
        sharedOptions: o,
        sectionNameForTracking: l
      });
      break;
    default:
      throwTypeError(s.type);
  }
  for (let e of s.subtrees) getFeatureFlags().dse_templates_proto && Qe(e) || tW({
    prevParent: g,
    outputElements: p,
    inputSubtree: e,
    inputParentTree: s,
    keyPrefix: c,
    sharedOptions: o,
    sectionNameForTracking: l
  });
  "FILE" === s.type && u && function (e, t, s) {
    let r = oz.getNextRenderedElementTop(t);
    t.push({
      parent: e,
      type: zq.SEPARATOR,
      top: r,
      height: s.size,
      key: `${s.keyPrefix}:spacer${s.size}`,
      element: jsx(tH, {
        size: s.size
      })
    });
  }(g, p, {
    keyPrefix: c,
    size: 16
  });
}
let tG = e => {
  let t = e?.toLowerCase().includes("local");
  return e?.toLowerCase().includes("templates") ? t ? l$.LOCAL_TEMPLATES : l$.TEMPLATES : t ? l$.LOCAL_COMPONENTS : l$.COMPONENTS;
};
let tq = "root";
let tY = [];
function tJ(e, t, s) {
  let n = [];
  e && tW({
    prevParent: null,
    outputElements: n,
    inputSubtree: e,
    inputParentTree: t,
    keyPrefix: tq,
    sharedOptions: s,
    sectionNameForTracking: e.sectionNameForTracking,
    hideTitle: !0
  });
  return n;
}
let tQ = "library-section-asset-type-v2";
function tZ(e) {
  switch (e) {
    case "all":
      return {
        type: _$$I2.ALL
      };
    case "recent":
      return {
        type: _$$I2.RECENT
      };
    case "local":
      return {
        type: _$$I2.LOCAL
      };
    default:
      return {
        type: _$$I2.FILE,
        libraryKey: _$$l(e)
      };
  }
}
let t8 = parsePxInt(gNA);
let t3 = {
  improved: {
    search: {
      path: [0, 0],
      column: 0
    },
    libraryModal: {
      path: [0, 0],
      column: 1
    },
    dropdown: {
      path: [0, 1],
      column: 0
    },
    viewToggle: {
      path: [0, 1],
      column: 1
    }
  }
};
function t7(e, t) {
  _$$sx("Component Sidebar Viewed", {
    viewMode: RN(e),
    assetsPanelVersion: 2,
    fileKey: t?.key,
    fileTeamId: t?.teamId ?? void 0,
    fileOrgId: t?.parentOrgId ?? void 0,
    componentSuggestionSessionId: r6()
  });
}
function t6({
  containerSizingOptions: e,
  recordingKey: t
}) {
  let s = iZ();
  let a = q5();
  let [i, l] = fp(e0);
  let d = _$$A2(e => {
    l(e);
    s && uE("action_left_panel_scroll", {
      user: s
    }, {
      assetsPanelVersion: 2,
      tab: "assets",
      fileKey: a?.key,
      fileTeamId: a?.teamId ?? void 0,
      fileOrgId: a?.parentOrgId ?? void 0
    });
  }, 500);
  let [c, u] = fp(e1);
  _$$h(() => {
    t7(c, a);
  });
  let p = useCallback(() => {
    u(e => {
      let t = e === Bk.Grid ? Bk.List : Bk.Grid;
      t7(t, a);
      return t;
    });
  }, [a, u]);
  return jsx(dP, {
    recordingKey: "localComponents",
    className: "component_sidebar--container--Wxtr4",
    dataTestId: "component-sidebar",
    "data-does-not-dismiss-component-flyout": !0,
    children: jsx(t9, {
      initialScrollTop: i,
      onScroll: d,
      viewMode: c,
      toggleViewMode: p,
      containerSizingOptions: e,
      recordingKey: t
    })
  });
}
function t9({
  initialScrollTop: e,
  onScroll: t,
  viewMode: s,
  toggleViewMode: a,
  containerSizingOptions: l,
  recordingKey: d
}) {
  let c = wA();
  let u = d4(e => e.dropdownShown);
  let p = d4(_$$e_);
  let y = d4(_$$h2);
  let m = d4(dK);
  let f = d4(Xt);
  let b = d4(_$$P);
  let x = d4(e => e.userFlags.has_dismissed_component_sidebar_library_upsell_banner);
  let v = d4(e => e.isFreeUser);
  let _ = d4(e => e.user);
  let T = Av();
  let k = q5();
  let S = _$$D();
  let {
    query,
    searchSessionId
  } = Gq();
  _$$y();
  _$$S();
  let I = q_();
  useEffect(() => {
    c(cr({
      shouldSearchDefaultLibraries: !1
    }));
  }, [c]);
  let {
    assetType,
    libraryNameByLibraryKey,
    fileKeyToLibraryKey,
    onSetAssetType,
    scrollContent,
    validAssetTypeOptions
  } = function ({
    containerSizingOptions: e,
    viewMode: t
  }) {
    var s;
    let a = function () {
      let e = d4(_$$e_);
      let t = d4(_$$tB);
      let s = md(_$$O2);
      let n = d4(MH);
      let a = d4(dM);
      let i = d4(_$$P);
      let l = n1();
      let d = md(qp);
      let c = Fl();
      let u = t?.teamId ? i[t.teamId] : null;
      let p = !!u && w5(u);
      let y = useMemo(() => Sg(n, a), [n, a]);
      let m = $1({
        library: e,
        fileDataByLibraryKey: d
      });
      let f = oV({
        library: e,
        hubFilesByLibraryKey: s
      });
      let b = useMemo(() => l ? f : null, [l, f]);
      return useMemo(() => Nx({
        localLibraryItemsInfo: y,
        subscribedItemsInfo: m,
        subscribedCommunityItemsInfo: b,
        defaultSubscribedItemsInfo: Mt(),
        canPublish: p,
        currentFileKeyForPublish: t ? Kz(t) ? t.sourceFileKey : t.key : null,
        approvedLibraryKeysByResourceType: c
      }), [y, m, b, p, t, c]);
    }();
    let {
      productComponents
    } = g5($A.Design);
    let {
      query: _query
    } = _$$I(Cn.AssetsPanel);
    let c = _$$D();
    let u = useMemo(() => ({
      productComponents
    }), [productComponents]);
    let p = useMemo(() => {
      var e;
      return _query ? _$$v : (e = a.localSubtree, {
        [_$$I2.ALL]: !0,
        [_$$I2.RECENT]: !!productComponents.length,
        [_$$I2.LOCAL]: e.items.length > 0 || e.subtrees.length > 0,
        [_$$I2.FILE]: !1,
        [_$$I2.SITE_KIT]: !1
      });
    }, [_query, productComponents, a.localSubtree]);
    s = a.subscribedFileSubtrees;
    let y = useMemo(() => {
      let e = {};
      for (let [, t] of Object.entries(s)) t?.subscribedLibraryKey && (e[t.subscribedLibraryKey] = t.name);
      return e;
    }, [s]);
    let m = a.fileKeyToLibraryKey;
    let {
      assetType: _assetType,
      onSetAssetType: _onSetAssetType
    } = function (e, t) {
      let [s, n] = useState(!1);
      let [a, i] = useState({
        type: _$$I2.ALL
      });
      let o = wA();
      let l = d4(_$$q);
      let d = q5();
      useEffect(() => {
        s || "loading" === e || (i(e5(function () {
          if (x4) try {
            let e = x4.getItem(tQ);
            if (!e) return;
            return tZ(e);
          } catch (e) {
            return;
          }
        }(), e, t)), n(!0));
      }, [s, e, t]);
      let c = useCallback(e => {
        (!l || _$$eu(e)) && (i(e), x4?.setItem(tQ, function (e) {
          switch (e.type) {
            case _$$I2.ALL:
              return "all";
            case _$$I2.RECENT:
              return "recent";
            case _$$I2.LOCAL:
              return "local";
            case _$$I2.FILE:
              return e.libraryKey;
            case _$$I2.SITE_KIT:
              return "";
          }
        }(e)), l && o(gP({
          searchOptions: e
        })), az.trackDefinedEvent("assets_panel.asset_type_changed", {
          assetType: e.type,
          isSearching: !!l,
          fileKey: e.type === _$$I2.FILE ? e.libraryKey : void 0,
          openFileKey: d?.key,
          fileTeamId: d?.teamId ?? void 0,
          fileOrgId: d?.parentOrgId ?? void 0,
          assetsPanelVersion: 2
        }));
      }, [l, o, d?.key, d?.parentOrgId, d?.teamId]);
      let u = useCallback(e => e.key === tQ && null != e.newValue, []);
      let p = useCallback(s => {
        if (!s) return;
        let n = tZ(s);
        "loading" !== e && i(e5(n, e, t));
      }, [e, t]);
      _$$tl({
        onSync: p,
        shouldSyncValue: u
      });
      return {
        assetType: a,
        onSetAssetType: c
      };
    }(c ? "loading" : p, y);
    let x = function ({
      assetType: e,
      containerSizingOptions: t,
      recentlyUsedItems: s,
      treeWithSubtrees: a,
      viewMode: l
    }) {
      let [d, c] = useState(!1);
      let u = l === Bk.List;
      let h = _$$I(Cn.AssetsPanel);
      let p = md(oE);
      let g = useMemo(() => ({
        isList: u,
        isExpanded: xO,
        sourceForTracking: mZ,
        ...t
      }), [t, u]);
      let y = useMemo(() => {
        let {
          query: _query2,
          results: {
            normalizedSearchResults,
            unsubscribedSearchResults
          }
        } = h;
        if (!_query2) return tY;
        let r = normalizedSearchResults.length + unsubscribedSearchResults.length;
        if (0 === r) return tY;
        !d && 0 === normalizedSearchResults.length && unsubscribedSearchResults.length > 0 && c(!0);
        let a = [];
        r > 0 && !function ({
          outputElements: e,
          results: t,
          moreResults: s,
          showMoreResults: r,
          keyPrefix: a,
          overallOptions: i,
          libraryNameByLibraryKey: o,
          toggleShowMoreResults: l,
          parent: d
        }) {
          if (t.length > 0 && tB({
            parent: d ?? null,
            outputElements: e,
            items: t,
            keyPrefix: `${a}:results`,
            sharedOptions: i,
            libraryNameByLibraryKey: o,
            sectionNameForTracking: "Primary search results"
          }), s.length > 0) {
            let t = oz.getNextRenderedElementTop(e);
            e.push({
              parent: d ?? null,
              type: zq.ROW,
              top: t,
              height: 40,
              key: `${a}:moreResultsLink`,
              element: jsxs("div", {
                className: "component_sidebar--text--g20jk",
                children: [r && _$$tx("design_systems.assets_panel.showing_results_from_all_libraries"), !r && jsx("a", {
                  className: "component_sidebar--link--I-ane blue_link--blueLink--9rlnd",
                  onClick: l,
                  children: _$$tx("design_systems.assets_panel.more_results_in_all_libraries", {
                    results: s.length
                  })
                })]
              }),
              sectionNameForTracking: "More search results"
            });
            r && tB({
              parent: null,
              outputElements: e,
              items: s,
              keyPrefix: `${a}:moreResults`,
              sharedOptions: i,
              libraryNameByLibraryKey: o,
              sectionNameForTracking: "More search results"
            });
          }
        }({
          outputElements: a,
          results: normalizedSearchResults,
          moreResults: unsubscribedSearchResults,
          showMoreResults: d,
          keyPrefix: `${tq}:searchResults`,
          overallOptions: g,
          libraryNameByLibraryKey: p,
          toggleShowMoreResults: () => {
            c(e => !e);
          }
        });
        return a;
      }, [h, d, g, p]);
      let {
        productComponents: _productComponents
      } = s;
      let f = useMemo(() => {
        if (!_productComponents.length) return tY;
        let e = [];
        tB({
          parent: null,
          outputElements: e,
          items: _productComponents,
          keyPrefix: `${tq}:recentlyUsed`,
          sharedOptions: g
        });
        return e;
      }, [_productComponents, g]);
      let b = useMemo(() => tJ(a.localSubtree, a.tree, g), [a.localSubtree, a.tree, g]);
      let x = useMemo(() => e.type === _$$I2.FILE ? Object.entries(a.fileKeyToLibraryKey).find(([t, s]) => e.libraryKey === s)?.[0] ?? "" : "", [e, a.fileKeyToLibraryKey]);
      let v = useMemo(() => tJ(e.type === _$$I2.FILE ? a.subscribedFileSubtrees[x] : void 0, a.tree, g), [e.type, x, g, a.subscribedFileSubtrees, a.tree]);
      let _ = useMemo(() => {
        let e = [];
        !function (e, t, s, n) {
          if (getFeatureFlags().dse_templates_proto) {
            let r = t.subtrees.find(Qe);
            null != r && tW({
              prevParent: null,
              outputElements: e,
              inputSubtree: r,
              inputParentTree: t,
              keyPrefix: s,
              sharedOptions: n,
              sectionNameForTracking: r.sectionNameForTracking
            });
          }
          for (let r of (t.items.length > 0 && tB({
            parent: null,
            outputElements: e,
            items: t.items,
            keyPrefix: s,
            sharedOptions: n
          }), t.subtrees)) getFeatureFlags().dse_templates_proto && Qe(r) || tW({
            prevParent: null,
            outputElements: e,
            inputSubtree: r,
            inputParentTree: t,
            keyPrefix: s,
            sharedOptions: n,
            sectionNameForTracking: r.sectionNameForTracking
          });
        }(e, a.tree, tq, g);
        return e;
      }, [g, a.tree]);
      return h.query ? y : e.type === _$$I2.RECENT ? f : e.type === _$$I2.LOCAL ? b : e.type === _$$I2.FILE ? v : _;
    }({
      assetType: _assetType,
      containerSizingOptions: e,
      recentlyUsedItems: u,
      treeWithSubtrees: a,
      viewMode: t
    });
    return {
      assetType: _assetType,
      libraryNameByLibraryKey: y,
      fileKeyToLibraryKey: m,
      onSetAssetType: _onSetAssetType,
      scrollContent: x,
      validAssetTypeOptions: p
    };
  }({
    viewMode: s,
    containerSizingOptions: l
  });
  let [O, R] = fp(dL);
  useEffect(() => {
    O && (onSetAssetType({
      type: _$$I2.FILE,
      libraryKey: O
    }), R(null));
  }, [O, onSetAssetType, R]);
  let K = LR();
  let H = d4(e => e.universalInsertModal.showing);
  let U = useCallback(() => {
    H && K();
  }, [K, H]);
  let z = useCallback((e, t, s) => {
    U();
    c(_$$to({
      type: _$$m,
      data: {
        asset: e,
        searchSessionId: searchSessionId ?? void 0,
        query: query ?? void 0,
        sectionPosition: t,
        sectionNameForTracking: s,
        assetTypeDropdownSelection: assetType?.type,
        containerWidth: l.containerWidth,
        onGetKeyboardNavigationItemById: I
      }
    }));
  }, [assetType, l.containerWidth, c, U, I, searchSessionId, query]);
  let D = useMemo(() => ({
    onOpenFlyout: z,
    assetTypeDropdownSelection: assetType?.type
  }), [assetType, z]);
  _$$d2({
    allElements: scrollContent
  });
  let $ = s === Bk.List;
  let B = _$$I(Cn.AssetsPanel);
  let V = 0 === scrollContent.length;
  let W = u?.type === _$$K.ASSETS_PANEL;
  let G = W && u?.data?.component || null;
  let Y = _$$K3(!0);
  let X = useCallback(() => {
    W || wr();
  }, [W]);
  let [Q, eh] = Vc("has-auto-expanded-component-libraries-for-nux", !1);
  let eT = n1();
  let eS = useRef(null);
  useEffect(() => {
    let e = eS.current;
    e && 0 !== scrollContent.length && eT && !Q && e.expandAllComponentLibraries(308) > 0 && eh(!0);
  }, [Q, eT, scrollContent.length, eh]);
  let ew = useCallback(() => {
    let e = !!B.query;
    let t = 0 === scrollContent.length;
    return jsxs("div", {
      children: [e && t && jsx(Wq, {}), !e && t && jsx(od, {})]
    });
  }, [B.query, scrollContent.length]);
  let eN = S || B.isLoading;
  let eI = jO();
  let eC = k?.teamId ? b[k.teamId] : null;
  let eM = Rs(kQI, {
    id: k?.teamId ?? ""
  }, {
    enabled: !!k?.teamId
  });
  let eL = eM.data?.team?.hasPermission;
  let eP = !x && v && (!eC || !w5(eC) && eL) && k?.canEdit && eI && Object.keys(p.local.components).length > 0 && Hz(_?.id);
  return jsxs(_$$U.Provider, {
    value: D,
    children: [jsx(se, {
      assetType,
      componentsEmpty: V,
      fileKeyToLibraryKey,
      isComponentSidebarInitialLoading: S,
      isList: $,
      isSearching: !!B.query,
      libraryNameByLibraryKey,
      onSetAssetType,
      onToggleViewMode: a,
      recordingKey: d,
      validAssetTypeOptions
    }), eN ? jsx("div", {
      className: "component_sidebar--loadingSpinnerContainerWithDropdown--9b8ZI",
      children: jsx(kt, {})
    }) : jsxs("div", {
      className: "component_sidebar--assetPanelSection--mYuo2",
      children: [jsx(_$$O, {
        ref: eS,
        className: "component_sidebar--scrollContainerFullHeight---DTUM component_sidebar--_scrollContainerBase--1rakD",
        enableKeyboardNavigation: !0,
        fileKey: k?.key,
        getViewportHeight: e => e - 2 * T,
        initialScrollTop: e,
        isList: $,
        isTileSelected: e => !!e.item.isLocal && f && _$$sp(m, f, e.item.node_id),
        onMouseUp: X,
        onScroll: t,
        orgId: k?.parentOrgId ?? void 0,
        recordingKey: "componentsListContainer",
        renderEmptyState: ew,
        scrollContent,
        shouldRefocusAfterKeyboardInsert: assetType.type === _$$I2.RECENT,
        teamId: k?.teamId ?? void 0,
        topOffset: t8,
        width: l.containerWidth
      }), !!G && jsx(_$$h3, {
        selectedView: y,
        dropdownShown: u,
        onJumpToLocalComponent: Y,
        onOpenFlyout: z,
        usePortal: !0
      }), eP && jsx(_$$V2, {})]
    })]
  });
}
function se({
  assetType: e,
  componentsEmpty: t,
  isList: s,
  isSearching: r,
  isComponentSidebarInitialLoading: a,
  libraryNameByLibraryKey: i,
  fileKeyToLibraryKey: o,
  onSetAssetType: l,
  onToggleViewMode: d,
  validAssetTypeOptions: c,
  recordingKey: u
}) {
  let h = t3.improved;
  let {
    setKeyboardNavigationElement
  } = M3({
    path: h.libraryModal.path,
    column: h.libraryModal.column
  });
  let {
    setKeyboardNavigationElement: _setKeyboardNavigationElement
  } = M3({
    path: t3.improved.dropdown.path,
    column: t3.improved.dropdown.column
  });
  let {
    setKeyboardNavigationElement: _setKeyboardNavigationElement2
  } = M3({
    path: h.viewToggle.path,
    column: h.viewToggle.column
  });
  return jsxs("div", {
    children: [jsxs("div", {
      className: "component_sidebar--searchHeader--yTD7D component_sidebar--_header--nHN39",
      children: [jsx(eL, {
        searchOptions: {
          type: e,
          onSetAssetType: l
        },
        keyboardNavigationPath: h.search.path,
        keyboardNavigationColumn: h.search.column
      }), jsx(_$$b, {
        entrypoint: _$$r.ASSETS_PANEL_BUTTON,
        onSetKeyboardNavigationElement: setKeyboardNavigationElement,
        recordingKey: u
      })]
    }), a || t && !r ? null : jsxs("div", {
      className: "component_sidebar--pageHeader--m9FWc component_sidebar--_header--nHN39",
      children: [jsx(eW, {
        assetType: e,
        libraryNameByLibraryKey: i,
        fileKeyToLibraryKey: o,
        onSetAssetType: l,
        onSetKeyboardNavigationElement: _setKeyboardNavigationElement,
        validAssetTypeOptions: c
      }), jsx(eY, {
        isList: s,
        onToggleViewMode: d,
        onSetKeyboardNavigationElement: _setKeyboardNavigationElement2,
        recordingKey: u
      })]
    })]
  });
}
let sl = vv(() => Ez5?.boxSelectionState().isBoxSelecting, !1);
function sd() {
  let e = useContext(y0).focusSelectedNodes;
  return !!(getFeatureFlags().ce_il_layer_focus && e);
}
let sc = new Set();
function su(e) {
  let t = useRef(e);
  let s = t.current;
  t.current = e;
  return s;
}
function sh(e, t) {
  let s;
  if (t?.length === 1 && (s = t[0])) {
    let t = e.get(s);
    t && (t.isExpanded = !0);
  }
}
let sE = new Map();
function sS() {
  let e = cT();
  let {
    pagesList,
    pageToNumChangesMap,
    isComparingChanges
  } = function () {
    let e = n0();
    let t = d4(e => !!getFeatureFlags().version_diffing && e.mirror.appModel.activeCanvasEditModeType === m1T.COMPARE_CHANGES);
    let s = d4(e => e.versionHistory.compareId);
    return useMemo(() => {
      if (!t || !s) return {
        pagesList: e,
        pageToNumChangesMap: sE,
        isComparingChanges: t
      };
      let n = _$$ee(e);
      return {
        pagesList: e,
        pageToNumChangesMap: n,
        isComparingChanges: t
      };
    }, [t, s, e]);
  }();
  let l = _$$g2({
    pagesList
  });
  let d = GQ();
  return pagesList.length ? jsx(sw, {
    recordingKey: "pagesPanel",
    isReadOnly: e,
    width: d,
    pagesList,
    isComparingChanges,
    pageToNumChanges: pageToNumChangesMap,
    onPageContextMenu: l
  }) : null;
}
function sw({
  width: e,
  isReadOnly: t,
  pagesList: s,
  onPageContextMenu: i,
  isComparingChanges: l,
  pageToNumChanges: c,
  recordingKey: p
}) {
  let g = _$$M();
  let y = q5();
  let m = d4(e => t || !y ? xae.LAYERS : e.leftPanel.activeTab);
  let f = d4(e => e.versionHistory);
  let b = dh();
  nn();
  let x = md(l7);
  let v = _$$U2();
  let _ = _$$T();
  let {
    isLayersOpen,
    toggleLayersAction
  } = vr();
  let {
    renamingNodeGuid,
    startRenamingNode,
    stopRenamingNode
  } = TU();
  let H = _4();
  let {
    height,
    setHeight,
    isOpen,
    setIsOpen
  } = _$$d3({
    defaultIsOpen: !0
  });
  let B = m === xae.LAYERS;
  let q = AWq.getChunkChangeCount();
  let Y = Pj();
  let J = useCallback(e => {
    v.showLayersPanel();
    ds("pages_panel_open_toggle", y?.key, Y.getState(), {
      isPagesOpen: e
    }, {
      forwardToDatadog: !0
    });
    setIsOpen(e);
  }, [y, v, setIsOpen, Y]);
  let X = useCallback(() => {
    J(!0);
  }, [J]);
  let Q = _$$F(isOpen);
  let Z = useCallback(() => {
    J(!Q.current);
  }, [Q, J]);
  let ee = _$$$2(x);
  useEffect(() => {
    x && ee && !t && X();
  }, [ee, x, t, X]);
  let {
    focusedNodes,
    onSelectNodesFromLayersPanel,
    clearFocusedNodes
  } = function () {
    let e = Tv();
    let t = _$$eY();
    let s = sd();
    let n = function () {
      let e = KH();
      let t = sd();
      let s = Fk((e, s) => {
        if (!t) return [];
        let n = new Set();
        Object.keys(s).forEach(t => {
          let s = function (e) {
            for (; e;) {
              if (e.parentNode?.type === "CANVAS") return e;
              e = e.parentNode;
            }
            return null;
          }(e.get(t));
          s && n.add(s.guid);
        });
        return Array.from(n);
      }, e);
      return useMemo(() => new Set(s), [s]);
    }();
    let a = su(s);
    let i = su(n);
    let l = su(e);
    let d = useRef(!1);
    let c = useRef(new Set());
    let h = i !== n;
    let p = a !== s;
    (l !== e || h || p) && function ({
      focusedNodesRef: e,
      supportsFocus: t,
      isObjectsPanelClickRef: s,
      topLevelParents: n,
      didTopLevelParentsChange: r,
      scene: a,
      nodeIds: i
    }) {
      if (!t || zl.get(sl)) {
        e.current = sc;
        return;
      }
      if (s.current) {
        if (r && e.current.size) {
          let t = new Set(e.current);
          n.forEach(e => t.add(e));
          sh(a, i);
          e.current = t;
        }
        s.current = !1;
        return;
      }
      e.current = n;
      sh(a, i);
    }({
      focusedNodesRef: c,
      supportsFocus: s,
      isObjectsPanelClickRef: d,
      nodeIds: e,
      scene: t,
      topLevelParents: n,
      didTopLevelParentsChange: h
    });
    let g = _$$C();
    let y = useCallback(() => {
      c.current = sc;
      g();
    }, [g]);
    let m = useCallback(() => {
      d.current = !0;
    }, []);
    return {
      onSelectNodesFromLayersPanel: s ? m : void 0,
      focusedNodes: s ? c.current : void 0,
      clearFocusedNodes: s ? y : void 0
    };
  }();
  let er = md(wt);
  let ea = md(R4);
  let ei = o3(nt.newResizablePanel);
  let [eo, el, ed] = BN(m, p);
  let ec = jsxs(Fragment, {
    children: [jsx(_$$R, {
      height,
      isComparingChanges: l,
      isOpen,
      isReadOnly: t,
      onCanvasSearch: H,
      onHeightChange: setHeight,
      onPageContextMenu: i,
      onToggle: Z,
      pageToNumChanges: c,
      pages: s,
      showHeader: !_
    }), jsxs(_$$m2, {
      children: [isLayersOpen && jsx(_$$p, {
        children: jsx(Ay, {})
      }), jsx(_$$o2, {
        currentPage: b,
        focusedNodes,
        isLayersOpen,
        isReadOnly: t,
        onSelectNodesFromLayersPanel,
        onToggleLayers: toggleLayersAction,
        recordingKey: p,
        renamingGuid: renamingNodeGuid,
        reserveBottomHeight: focusedNodes?.size !== 0,
        showAllLayers: clearFocusedNodes,
        startRenaming: startRenamingNode,
        stopRenaming: stopRenamingNode,
        topNodeProperties: null,
        versionHistory: f,
        width: ei && er ? ea : e
      })]
    })]
  });
  let eu = g ? jsx(_$$g, {
    width: e
  }) : jsx(t6, {
    recordingKey: "componentsSidebar",
    containerSizingOptions: {
      containerWidth: e,
      maxSmallThumbSize: 40,
      maxWideColWidth: 300
    }
  });
  return jsxs(_$$A6, {
    isFullHeight: !0,
    children: [jsxs(Fragment, {
      children: [jsx(_$$$3, {}), !t && jsx(_$$I3, {
        activeTab: m,
        onCanvasSearch: H,
        recordingKey: p,
        tabManager: ed,
        tabPropsMap: eo
      })]
    }), l && B && jsxs(Fragment, {
      children: [f.compareId && jsx(ZI, {
        compareId: f.compareId,
        versions: f.versions
      }), q > 0 && jsx(_$$y2, {
        withBorder: !0,
        children: jsx(V, {})
      })]
    }), y && jsx(QU, {
      fileKey: y.key
    }), jsx(sN, {
      isInTab: B,
      tabProps: el[FV],
      children: ec
    }), jsx(sN, {
      isInTab: m === xae.ASSETS,
      tabProps: el[ay],
      children: eu
    }), jsx(sN, {
      isInTab: m === xae.CHAT,
      tabProps: el[n8],
      children: jsx(_$$A, {})
    })]
  });
}
function sN({
  children: e,
  isInTab: t,
  tabProps: s
}) {
  return getFeatureFlags().ui3_left_panel_tabs_fpl && s ? jsx(_$$t.TabPanel, {
    height: "fill",
    ...s,
    children: jsx("div", {
      className: "x5yr21d x78zum5 xdt5ytf",
      children: e
    })
  }) : t ? jsx(Fragment, {
    children: e
  }) : null;
}
export let $$sC0 = memo(function () {
  let e = md(Xh(void 0));
  let t = q5();
  let s = aV();
  bi();
  let E = X0();
  let S = !!t && e;
  let w = ut(Ez5?.uiState().showCanvasSearch, !1);
  let N = p8("showUi");
  let I = md(_$$G);
  useEffect(() => {
    S && YQ({
      id: "Found Updates To Publish"
    });
  }, [S]);
  let [, C] = bL();
  useEffect(() => () => {
    C(null);
  }, [C]);
  let j = Ye();
  let [M, A] = _$$b2();
  if (getFeatureFlags().dont_render_ui && !N) return null;
  let L = M && I === _$$N.MAKE ? jsx(_$$$, {
    children: jsx(_$$A, {})
  }) : j ? jsx(_$$s, {}) : jsx(Fragment, {
    children: jsxs(_$$$, {
      shouldDeferCanvasUpdateOnPanelResize: !0,
      children: [jsx(_$$s, {}), jsx(_$$n, {}), jsx(_$$d, {
        shouldUseBottomBorder: !E
      }), w ? jsx(EA.Provider, {
        value: !0,
        children: jsx(_$$f, {
          showFilter: !0
        })
      }) : jsx(sS, {})]
    })
  });
  return jsxs(Fragment, {
    children: [M && jsx(_$$W, {}), jsx(_$$Q, {
      ignoreRulers: s,
      ...A,
      children: L
    })]
  });
});
export const m = $$sC0;