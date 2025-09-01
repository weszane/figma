import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useState, memo, useEffect, useMemo, useRef, PureComponent, useLayoutEffect, Component, useId, createContext, useContext } from "react";
import { d4, wA, Ng } from "../vendor/514228";
import { lQ } from "../905/934246";
import { assertNotNullish } from "../figma_app/95419";
import { M3 } from "../figma_app/91703";
import { tc as _$$tc } from "../905/15667";
import { fu, L0 } from "../figma_app/831799";
import { wR } from "../figma_app/765689";
import { Ir, nk as _$$nk, m1 } from "../figma_app/2023";
import { iZ as _$$iZ, Pc } from "../905/372672";
import { FPublicationStatusType, FFileType, FPlanNameType, FOrganizationLevelType, FTeamAccessPermissionType, FPermissionLevelType, FViewPermissionType, FResourceCategoryType, FContainerType, FTemplateCategoryType, FUserVerificationStatusType, FProductAccessType } from "../figma_app/191312";
import { M4 } from "../905/713695";
import { w5, n0 as _$$n } from "../figma_app/345997";
import { wH, fm, KI } from "../figma_app/680166";
import { nT as _$$nT, wN, co, oD, Bu } from "../figma_app/53721";
import { A5 } from "../figma_app/707808";
import { q as _$$q, J as _$$J } from "../905/202542";
import { Ju } from "../905/102752";
import { mK } from "../figma_app/197286";
import { i as _$$i } from "../905/46262";
import { MM, jS } from "../905/136701";
import { i as _$$i2 } from "../905/718764";
import { Ay } from "../figma_app/778880";
import { OJ } from "../905/519092";
import { getFeatureFlags } from "../905/601108";
import { s as _$$s } from "../cssbuilder/589278";
import { sR as _$$sR, gq, KZ } from "../905/932881";
import { k as _$$k2 } from "../905/443820";
import { m as _$$m } from "../905/701558";
import { Y as _$$Y } from "../905/185567";
import { eU as _$$eU, md, Xr, zl, fp } from "../figma_app/27355";
import { Qw } from "../905/989992";
import { tT as _$$tT } from "../905/663269";
import { conditionalFeatureFlag, getInitialOptions, isStagingCluster, buildUploadUrl, isDevEnvironment, getSupportEmail } from "../figma_app/169182";
import { Rs } from "../figma_app/288654";
import { t as _$$t, tx as _$$tx } from "../905/303541";
import { Su, aP as _$$aP, QU, DU, bF } from "../figma_app/275462";
import { W as _$$W } from "../905/336482";
import { JT } from "../figma_app/173838";
import { HW, iq as _$$iq, lg, m0 } from "../figma_app/976749";
import { Hz, Of, Yw, Pb } from "../905/201596";
import { q5 } from "../figma_app/516028";
import { x9E, FBc } from "../figma_app/43951";
import { td as _$$td } from "../figma_app/558805";
import { Wl, l7, hA, ZO, NZ } from "../figma_app/88239";
import { $A } from "../905/782918";
import { o as _$$o } from "../905/382697";
import { r as _$$r } from "../905/857502";
import { b as _$$b, d as _$$d } from "../905/91820";
import { iO as _$$iO, s5, t9 as _$$t2, yI } from "../905/915142";
import { dR } from "../905/508367";
import { R as _$$R } from "../905/103090";
import { e as _$$e } from "../905/383776";
import { A8 } from "../figma_app/617506";
import { S as _$$S, Yn, Rh, rA as _$$rA, og } from "../figma_app/78808";
import { CE, Xm, SA } from "../905/760074";
import { jN } from "../905/612685";
import { EO, Ml } from "../905/691205";
import { lD, qI } from "../figma_app/831696";
import { Hz as _$$Hz } from "../905/366346";
import { wD, B1, mu, $Y, $S, h1 } from "../905/918620";
import { wN as _$$wN, XR, aL as _$$aL, Xh, SV, G2, Ke, Ah, By, py, W2, Em } from "../905/959395";
import { c as _$$c } from "../905/144429";
import { X3B, bOM, Qej, Ez5, Egt } from "../figma_app/763686";
import { qZ } from "../figma_app/761118";
import { Lo, to as _$$to, AS, Ce, YK } from "../905/156213";
import { KV } from "../figma_app/548615";
import { u as _$$u } from "../905/712485";
import { A as _$$A } from "../905/389851";
import { T as _$$T } from "../905/909590";
import { $n } from "../905/521428";
import { X as _$$X } from "../905/999307";
import { EJ } from "../figma_app/930338";
import { L as _$$L } from "../figma_app/288254";
import { j as _$$j } from "../figma_app/398600";
import { p as _$$p } from "../905/536283";
import { DG } from "../figma_app/789";
import { Cu } from "../figma_app/314264";
import { F as _$$F } from "../905/224";
import { Q9, M_, kA } from "../905/32091";
import { Bi } from "../905/652992";
import { DV } from "../905/739964";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB as _$$nB, wi, jk } from "../figma_app/272243";
import { hS } from "../905/437088";
import { KM, Ku } from "../figma_app/877449";
import { sx } from "../905/449184";
import { B as _$$B } from "../905/714743";
import { Ib } from "../905/129884";
import { Qy } from "../figma_app/146384";
import { m as _$$m2 } from "../905/636019";
import { IT } from "../figma_app/566371";
import { $z } from "../figma_app/617427";
import { F as _$$F2 } from "../905/302958";
import { L as _$$L2 } from "../905/92291";
import { A as _$$A2 } from "../5724/600086";
import { h as _$$h } from "../905/142086";
import { cD } from "../figma_app/598018";
import { K as _$$K } from "../905/851274";
import { I as _$$I } from "../905/932503";
import { K as _$$K2 } from "../905/987240";
import { I7 } from "../figma_app/594947";
import { f as _$$f } from "../905/940356";
import { h as _$$h2 } from "../905/207101";
import { b as _$$b2 } from "../905/985254";
import { E as _$$E } from "../905/453826";
import { e as _$$e2 } from "../905/621515";
import { r1 as _$$r2 } from "../figma_app/545877";
import { zl as _$$zl } from "../figma_app/641749";
import { rn as _$$rn } from "../figma_app/903573";
import { N as _$$N } from "../figma_app/268271";
import { R as _$$R2 } from "../905/298004";
import { WZ } from "../905/893645";
import { R as _$$R3 } from "../905/11928";
import { GCV, KdZ, tzJ, ePo } from "../figma_app/6204";
import { N as _$$N2 } from "../905/438674";
import { S as _$$S2 } from "../905/274480";
import { J as _$$J2, h as _$$h3 } from "../905/270045";
import { x as _$$x } from "../905/764527";
import { E as _$$E2 } from "../figma_app/999099";
import { $t, HZ } from "../figma_app/29287";
import { n as _$$n2 } from "../905/796896";
import { J3, JU, kD, kN } from "../figma_app/622574";
import { j as _$$j2 } from "../905/521149";
import { dq } from "../905/845253";
import { t as _$$t3 } from "../905/825647";
import { x as _$$x2 } from "../905/619833";
import { i$ as _$$i$, YM, rg as _$$rg } from "../905/122282";
import { YW } from "../figma_app/553488";
import { X as _$$X2 } from "../905/802843";
import { $u } from "../figma_app/524655";
import { fS, st as _$$st, d3, dG, QU as _$$QU, VA, bV, ts as _$$ts, Fk, pi, tl as _$$tl2, Ph, ER, p3, fA, U5, WZ as _$$WZ, ix as _$$ix, G as _$$G, HL, HO, Zq, QW, mq, O6, hz, ZD, Ac, Uo, Kz, oT, hC, N1, TK, i1 as _$$i3, IH, iA as _$$iA, UB, KN, Cr, E_, BA, QA, eF as _$$eF, Zk, Ed, Sc, Bd, v7, DA, IE, vv } from "../figma_app/538002";
import { xb, vA, KF } from "../figma_app/465776";
import { bL as _$$bL, l9, mc, c$ } from "../905/493196";
import { Uz, Gc } from "../905/63728";
import { i as _$$i4 } from "../905/385727";
import { n as _$$n3 } from "../figma_app/537817";
import { xf, H as _$$H, $S as _$$$S, UU, N8, p4, R8, _O, RA, gJ, C9, x7, B5, A as _$$A3, gY, _V, AA, j7, sH, Jt, bU, rG as _$$rG, qj, ec as _$$ec, jq, JZ, H7, to as _$$to2, vQ } from "../905/372455";
import { A as _$$A4 } from "../5724/240681";
import { ServiceCategories as _$$e3 } from "../905/165054";
import { _ as _$$_ } from "../905/263184";
import { R as _$$R4 } from "../905/256203";
import { B as _$$B2 } from "../905/950875";
import { A as _$$A5 } from "../905/920142";
import { b as _$$b3 } from "../905/966382";
import { U as _$$U } from "../figma_app/901889";
import { $D } from "../905/11";
import { ks, nR as _$$nR, $$, tM as _$$tM, vd, s6, Ph as _$$Ph, qM } from "../figma_app/637027";
import { Y as _$$Y2 } from "../905/830372";
import { E as _$$E3 } from "../905/984674";
import { lW } from "../figma_app/11182";
import { Oi, QZ } from "../905/862913";
import { Q3, Cy, Bg } from "../figma_app/246699";
import { Gv } from "../figma_app/736948";
import { _9, J4, p8, fb, YU, Iz, lG, ET, mi } from "../figma_app/907616";
import { m_ } from "../figma_app/209680";
import { $ as _$$$ } from "../figma_app/995722";
import { e6 as _$$e4 } from "../905/557142";
import { R9, nu as _$$nu, E4 } from "../905/144598";
import { og as _$$og } from "../905/466026";
import { K as _$$K3 } from "../905/443068";
import { a as _$$a } from "../905/5627";
import { Dk } from "../figma_app/623293";
import { L as _$$L3 } from "../905/408237";
import { zX } from "../905/576487";
import { Dp, yJ, ml, hP, U as _$$U2, W7, cH, nM as _$$nM, M3 as _$$M, Fn, $j, d4 as _$$d2, lX } from "../905/759412";
import { Um } from "../905/848862";
import { l6, c$ as _$$c$, sK } from "../905/794875";
import { HU } from "../figma_app/926061";
import { h1 as _$$h4 } from "../905/986103";
import { $y, Cs } from "../figma_app/59509";
import { Q as _$$Q } from "../905/363675";
import { sx as _$$sx } from "../905/941192";
import { t as _$$t4 } from "../905/833100";
import { A as _$$A6 } from "../905/563377";
import { k2 } from "../figma_app/10554";
import { e0 as _$$e5 } from "../905/696396";
import { y4I, _YF } from "../figma_app/822011";
import { c2 } from "../905/382883";
import { wm } from "../905/19536";
import nA from "../vendor/241899";
import { t as _$$t5 } from "../905/331623";
import { W as _$$W2 } from "../905/841666";
import { ae as _$$ae } from "../figma_app/808294";
import { AC, Pg } from "../figma_app/777551";
import { M as _$$M2 } from "../905/759470";
import { Pn, PP } from "../905/230175";
import { Pf } from "../905/590952";
import { Eh } from "../figma_app/617654";
import { Ro } from "../figma_app/805373";
import { ax as _$$ax, ts as _$$ts2 } from "../figma_app/49598";
import { sf } from "../905/929976";
import { oH, b as _$$b4 } from "../figma_app/740025";
import { VH } from "../figma_app/690075";
import { $T } from "../figma_app/12535";
import { HF, a6 as _$$a2, ow, M3 as _$$M3 } from "../figma_app/198840";
import { getPermissionsState } from "../figma_app/642025";
import { Np } from "../figma_app/193867";
import { qG } from "../figma_app/803787";
import { vt as _$$vt } from "../figma_app/45218";
import { Jd } from "../905/71785";
import { o as _$$o2 } from "../figma_app/633080";
import { n as _$$n4, a as _$$a3 } from "../905/114254";
import { N as _$$N3 } from "../905/620375";
import { X$ } from "../figma_app/870683";
import { l as _$$l } from "../905/716947";
import { cX } from "../figma_app/471982";
import { sG } from "../905/686934";
import { ZS } from "../figma_app/519839";
import { pz } from "../figma_app/825489";
import { yX } from "../figma_app/918700";
import { UM, F4 } from "../figma_app/60023";
import { ke } from "../905/58274";
import { br, U7 } from "../905/149895";
import { A as _$$A7 } from "../5724/568040";
import { A as _$$A8 } from "../1617/582870";
import { A as _$$A9 } from "../1617/396317";
import { A as _$$A0 } from "../svg/619883";
import rr from "classnames";
import { nR as _$$nR2, vd as _$$vd } from "../figma_app/60079";
import { Et } from "../905/125019";
import { yy } from "../figma_app/543529";
import { _R } from "../figma_app/106207";
import { yz } from "../905/784221";
import { A as _$$A1 } from "../6828/829032";
import { A as _$$A10 } from "../6828/233503";
import { A as _$$A11 } from "../1617/433962";
import { A as _$$A12 } from "../1617/504853";
import { g as _$$g } from "../905/595923";
import { z as _$$z } from "../vendor/999105";
import { DN, D8, C1 } from "../figma_app/12796";
import { X$ as _$$X$, YY, No } from "../figma_app/465071";
import { O as _$$O } from "../905/921963";
import { L as _$$L4 } from "../905/857916";
import { _ as _$$_2, S as _$$S3 } from "../figma_app/490799";
import { C8 } from "../905/223565";
import { t as _$$t6 } from "../905/378566";
import { t as _$$t7 } from "../905/50272";
import { W5, RA as _$$RA, MC } from "../905/305240";
import { A as _$$A13 } from "../5724/267849";
import { r as _$$r3, X as _$$X3 } from "../905/308709";
import { iF as _$$iF } from "../905/452667";
import { ul } from "../905/635424";
import { O as _$$O2 } from "../905/833838";
import { A as _$$A14 } from "../1617/984457";
import { w as _$$w } from "../905/770105";
import { E as _$$E4 } from "../905/632989";
import { R as _$$R5 } from "../905/621802";
import { e as _$$e6 } from "../905/295932";
import { L as _$$L5 } from "../905/657783";
import { Y as _$$Y3 } from "../905/26051";
import { c as _$$c2 } from "../905/425573";
import { rq as _$$rq } from "../905/425180";
import { Im } from "../figma_app/493477";
import { P as _$$P } from "../905/842406";
import { hw } from "../905/727738";
import { a as _$$a4 } from "../905/699981";
import { _ as _$$_3 } from "../905/872445";
import { b as _$$b5 } from "../905/173822";
import { bp, _N, Wj } from "../905/913057";
import { e as _$$e7 } from "../905/393279";
import { VO, o6, Vh, gy } from "../905/986349";
import { d as _$$d3 } from "../905/44199";
import { d as _$$d4 } from "../905/762622";
import { $ as _$$$2, t as _$$t8 } from "../905/628632";
import { XHR } from "../905/910117";
import { cL } from "../905/748726";
import { H_ } from "../figma_app/336853";
import { Ef, rq as _$$rq2, kF } from "../905/351260";
import { Z as _$$Z } from "../figma_app/761870";
import { xf as _$$xf } from "../figma_app/416935";
import { H as _$$H2 } from "../905/674803";
import { t as _$$t9 } from "../figma_app/32680";
import { F as _$$F3 } from "../905/154112";
import { kt } from "../figma_app/858013";
import { N as _$$N4 } from "../905/572042";
import { BI, m0 as _$$m3 } from "../figma_app/546509";
import { Z as _$$Z2 } from "../905/116724";
import { w as _$$w2 } from "../905/733703";
import { l as _$$l2 } from "../905/572910";
import { Rh as _$$Rh, oY } from "../905/485103";
import { _P } from "../figma_app/2590";
import { F as _$$F4 } from "../905/680873";
import { useSprigWithSampling } from "../905/99656";
function T(e) {
  let t = Ay.isIpadNative;
  return jsx(_$$i2, {
    children: jsx(OJ, {
      bottomSection: e.bottomSection,
      closeOnEsc: !0,
      containerClassName: "file_permissions_modal_base--container--33xKw",
      fixedTop: !0,
      headerClassName: "file_permissions_modal_base--header--l2MAp",
      maxWidth: 450,
      minWidth: t ? 296 : 450,
      onClose: e.onClose,
      paddingLeft: t ? 12 : 0,
      paddingRight: t ? 12 : 0,
      title: e.header,
      children: e.children
    })
  });
}
function X() {
  return d4(e => {
    var t;
    t = e.selectedView;
    return Wl(t) || $A(t);
  });
}
function Q(e) {
  return "filePermissionsModalTab" in e && e.filePermissionsModalTab || A5.INVITE;
}
function J() {
  return d4(e => Q(e.selectedView));
}
function ee(e) {
  let t = HW();
  return "design" === e.editor_type && t;
}
function et(e) {
  let t = HW();
  return "slides" === e.editor_type && t;
}
function en({
  onClick: e,
  isLoading: t
}) {
  let i = q5();
  let r = i?.publishedHubFile?.publishingStatus === FPublicationStatusType.APPROVED_PUBLIC && i.publishedHubFile || null;
  let a = r ? jsx(_$$m, {}) : jsx(_$$Y, {});
  let s = r ? _$$t("file_permissions_modal.share_as.publish.published") : _$$t("file_permissions_modal.share_as.publish");
  return jsx(fu, {
    name: "Publish Community Row",
    children: jsx(_$$sR, {
      icon: a,
      text: s,
      onClick: e,
      rightSideElement: t ? jsx(_$$k2, {}) : void 0,
      expandCaret: !t
    })
  });
}
function eA({
  file: e,
  repo: t
}) {
  let i = d4(e => e.sharingAttributionContextKey);
  let n = d4(e => {
    let t = e.selectedView;
    return t?.codeNodeId;
  });
  let s = d4(e => {
    let t = e.selectedView;
    return t?.sitesView;
  });
  let o = wD()?.id;
  let l = HW();
  let d = X();
  let c = l7();
  let u = hA();
  let p = _$$e();
  let m = ZO();
  let g = NZ();
  let f = A8();
  let _ = _$$R(e => "prototype" === e.selectedView.view ? {
    scalingInfo: e.selectedView.scalingInfo,
    showHotspots: e.selectedView.showHotspots,
    showProtoSidebar: e.selectedView.showProtoSidebar
  } : null);
  return useCallback(({
    linkQueryMode: r,
    shouldLinkToPrototype: a,
    shouldLinkToEditor: A
  } = {}) => {
    let y;
    let b = !(getFeatureFlags().show_copy_link_to_editor && A) && (l || a);
    let v = {};
    o && (v["node-id"] = EO(o));
    !o && b && _ && Object.assign(v, lD({
      ..._,
      nodeId: void 0,
      startingPointNodeId: void 0
    }));
    let I = d || r === _$$iO.DEV_MODE;
    let E = r === _$$iO.AUTO;
    if (y = t ? CE(e, t, b ? "proto" : "file") : b ? qI(e.prototype_url, e.editor_type || FFileType.DESIGN) : jN({
      file: e,
      isDevHandoff: I,
      allowDefaulting: E,
      nodeId: o
    }), !d) {
      let e = _$$b(i, _$$d.SHARE_MODAL);
      e && (v.t = e);
    }
    p ? (v.vars = 1, f && (v["var-id"] = Ml(f))) : c ? v["ready-for-dev"] = 1 : u ? v["focus-id"] = EO(u) : m && (v["component-browser"] = 1, g && (v["component-key"] = g));
    s && (v.view = _$$Hz(s));
    n && (v["code-node-id"] = EO(n));
    return dR(y, v);
  }, [i, g, o, n, s, e, t, l, d, p, f, c, u, _, m]);
}
function ey({
  file: e,
  repo: t
}) {
  let i = wA();
  let n = eA({
    file: e,
    repo: t
  });
  return useCallback(({
    source: t,
    skipVisualBell: r,
    linkQueryMode: a,
    shouldLinkToPrototype: s,
    shouldLinkToEditor: o
  } = {}) => {
    let l = n({
      linkQueryMode: a,
      shouldLinkToPrototype: s,
      shouldLinkToEditor: o
    });
    return i(_$$S({
      fileKey: e.key,
      url: l,
      label: conditionalFeatureFlag("ce_copy_labelled_links", e.name, void 0),
      skipVisualBell: r,
      source: t || _$$d.SHARE_MODAL,
      trackingProperties: {
        link_access_mode: e.link_access
      }
    }));
  }, [i, n, e]);
}
function ev(e) {
  let [t, i] = useState(!1);
  let [a, s] = useState(_$$wN);
  let o = jsx(_$$r, {});
  return jsx(_$$sR, {
    icon: o,
    text: _$$t("file_permissions_modal.copy_link_to_editor"),
    onClick: () => {
      s(_$$wN);
      e.onClick();
      i(!0);
      setTimeout(() => {
        s(XR);
      }, 4e3);
    },
    actionMessage: t ? _$$t("file_permissions_modal.link_copied") : null,
    actionMessageClassName: a,
    dataOnboardingKey: "copy-editor-link-row"
  });
}
function ek(e) {
  let [t, i] = useState(!1);
  let [a, s] = useState(_$$wN);
  return jsx(_$$sR, {
    icon: jsx(_$$A, {}),
    text: _$$t("file_permissions_modal.share_as.copy_dev_mode_link"),
    onClick: () => {
      s(_$$wN);
      e.onClick();
      i(!0);
      setTimeout(() => {
        s(XR);
      }, 4e3);
    },
    actionMessage: t ? _$$t("file_permissions_modal.link_copied") : null,
    actionMessageClassName: a
  });
}
function eL({
  onClick: e
}) {
  return jsx(_$$sR, {
    icon: jsx(_$$X, {}),
    text: _$$t("file_permissions_modal.share_as.embed"),
    onClick: e,
    expandCaret: !0
  });
}
function eF(e) {
  let t = encodeURIComponent(e);
  let i = `${location.origin}/embed?embed_host=share&url=${t}`;
  if (getFeatureFlags().embedkit_v2 && getInitialOptions().embed_url) {
    let {
      pathname,
      searchParams
    } = new URL(e);
    searchParams.set("embed-host", "share");
    searchParams.$$delete("t");
    getFeatureFlags().embedkit_v2_stg_redirect && isStagingCluster() && searchParams.set("stg", "1");
    i = `${getInitialOptions().embed_url}${pathname}?${searchParams}`;
  }
  return `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="${i}" allowfullscreen></iframe>`;
}
function eM({
  file: e,
  repo: t
}) {
  let i = wA();
  let s = eA({
    file: e,
    repo: t
  })();
  let o = _$$L();
  let l = B1();
  let d = getFeatureFlags().fpl_textarea_migration;
  let c = useCallback(e => {
    e.target.select();
  }, []);
  let u = useCallback(() => {
    i(Yn({
      fileKey: e.key,
      embedCode: eF(s)
    }));
    o();
  }, [i, e.key, s, o]);
  return jsxs("div", {
    className: "embed--embedTabWrapper--ETzIt",
    children: [d ? jsx(_$$T, {
      "aria-label": _$$t("permissions.embed.copy_public_embed_code"),
      autoFocus: !0,
      htmlAttributes: {
        onFocus: c
      },
      readOnly: !0,
      size: "lg",
      spellCheck: !1,
      value: eF(s)
    }) : jsx("textarea", {
      "aria-label": _$$t("permissions.embed.copy_public_embed_code"),
      readOnly: !0,
      onFocus: c,
      className: "embed--embedCode--Lk7bc",
      value: eF(s),
      autoFocus: !0
    }), jsxs("div", {
      className: "embed--embedFooter--IArBT",
      "data-testid": "embed-footer",
      children: [l && jsx("div", {
        className: "embed--embedMessageContainer--jfVsO",
        children: jsx("span", {
          className: "embed--embedMessage--kTko7",
          children: _$$tx("permissions.embed.embed_page_name_in_your_webpage", {
            pageName: jsx("span", {
              className: "embed--embedMessagePageName--LYE4z",
              children: EJ(l, 30)
            })
          })
        })
      }), jsxs("div", {
        className: "embed--embedCodeButtons--k-Ye6",
        children: [jsx($n, {
          variant: "secondary",
          onClick: o,
          children: _$$t("permissions.embed.cancel_embed")
        }), jsx($n, {
          onClick: u,
          children: _$$t("permissions.embed.copy_embed_code")
        })]
      })]
    })]
  });
}
function eU() {
  if (X3B) return X3B.getActivePrototypeStartingPointNodeIdOnCurrentPage() || X3B.findFirstVisuallySortedBaseScreenOnCurrentPage();
}
function eZ(e) {
  let {
    title,
    content,
    submitText,
    cancelText,
    onClose,
    onSubmit,
    manager
  } = e;
  let c = useCallback(() => {
    onSubmit();
    onClose();
  }, [onSubmit, onClose]);
  return jsx(bL, {
    manager,
    width: 450,
    height: "dynamic",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: title
        })
      }), jsx(_$$nB, {
        children: content
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            variant: "secondary",
            onClick: onClose,
            children: cancelText
          }), jsx($n, {
            variant: "primary",
            onClick: c,
            children: submitText
          })]
        })
      })]
    })
  });
}
let eX = Ju(function (e) {
  let {
    fileKey,
    hasPasswordSet
  } = e;
  let s = wA();
  let o = () => s(Lo());
  let l = hS({
    ...e,
    onClose: o
  });
  let d = _$$iZ();
  let c = d?.id;
  let u = useCallback(() => {
    Cu({
      name: "Jam Session Button Confirm Start",
      fileKey,
      userId: c
    });
    s(Rh({
      fileKey
    }));
  }, [s, fileKey, c]);
  let p = hasPasswordSet ? _$$tx("whiteboard.open_sessions.share_modal_start_session_with_link_and_password", {
    audience: jsx("span", {
      className: _$$s.fontSemiBold.$,
      children: _$$tx("whiteboard.open_sessions.share_modal_start_session_anyone_with_link_and_password")
    })
  }) : _$$tx("whiteboard.open_sessions.share_modal_start_session_with_link");
  let h = _$$tx("whiteboard.open_sessions.share_modal_how_to_end_session", {
    share: jsx("span", {
      className: _$$s.fontSemiBold.$,
      children: _$$tx("whiteboard.open_sessions.share_modal_start_session_share")
    }),
    end_now: jsx("span", {
      className: _$$s.fontSemiBold.$,
      children: _$$tx("whiteboard.open_sessions.share_modal_start_session_end_now")
    })
  });
  return jsx(eZ, {
    title: _$$t("whiteboard.open_sessions.start_open_session"),
    content: jsxs("div", {
      className: _$$s.flex.flexColumn.gap16.$,
      children: [jsx("p", {
        children: p
      }), jsx("p", {
        children: h
      })]
    }),
    submitText: _$$t("whiteboard.open_sessions.open_sessions_start"),
    cancelText: _$$t("whiteboard.open_sessions.open_sessions_cancel"),
    onClose: o,
    onSubmit: u,
    manager: l
  });
}, "EnableWorkshopConfirmationModal");
let eQ = Ju(function (e) {
  let {
    fileKey
  } = e;
  let i = wA();
  let s = () => i(Lo());
  let o = hS({
    ...e,
    onClose: s
  });
  let l = _$$iZ();
  let d = l?.id;
  let c = useCallback(() => {
    Cu({
      name: "Jam Session Button Confirm Stop",
      fileKey,
      userId: d
    });
    i(_$$rA({
      file_key: fileKey
    }));
  }, [i, fileKey, d]);
  return jsx(eZ, {
    title: _$$t("whiteboard.open_sessions.end_open_session_modal_title"),
    content: _$$tx("whiteboard.open_sessions.end_open_session_modal_description"),
    submitText: _$$t("whiteboard.open_sessions.end_now"),
    cancelText: _$$t("whiteboard.open_sessions.open_sessions_cancel"),
    onClose: s,
    onSubmit: c,
    manager: o
  });
}, "DisableWorkshopConfirmationModal");
function eJ({
  team: e,
  file: t
}) {
  let i;
  let r = wA();
  let s = _$$iZ();
  let o = s?.id;
  let l = t.key;
  let d = !!t.has_file_link_password;
  let c = DG(l);
  let u = () => {
    let i = e ? w5(e) : !!t.parent_org_id;
    if (Cu({
      name: `Jam Session Button ${c.enabled ? "Stop" : "Start"}`,
      fileKey: l,
      userId: o,
      canUserAccessProFeature: i
    }), !i) {
      r(_$$to({
        type: DV,
        data: {
          team: e,
          editorType: t.editor_type,
          resource: Bi.OPEN_SESSION,
          currentPlan: _$$F.Plan.STARTER,
          upsellPlan: _$$F.Plan.PRO
        }
      }));
      return;
    }
    r(_$$to({
      type: c.enabled ? eQ : eX,
      data: {
        fileKey: l,
        hasPasswordSet: d
      }
    }));
  };
  if (c.enabled) {
    let e = Math.floor(Math.floor(c.until.valueOf() - new Date().valueOf()) / 6e4);
    let t = Math.floor(e / 60);
    i = _$$tx("whiteboard.open_sessions.remaining_duration", {
      remainingHours: t,
      remainingMinutes: e - 60 * t
    });
  } else i = _$$tx("whiteboard.open_sessions.start_open_session");
  let p = "";
  return (p = c.enabled ? d ? _$$t("whiteboard.open_sessions.share_modal_during_the_session_with_link_and_password") : _$$t("whiteboard.open_sessions.share_modal_during_the_session") : d ? _$$t("whiteboard.open_sessions.share_modal_anyone_with_link_and_password_can_edit") : _$$t("whiteboard.open_sessions.share_modal_anyone_can_edit"), c.enabled || t.canEdit) ? jsxs("div", {
    className: "file_workshop_row--workshopRow--sfnsf",
    "data-onboarding-key": "file-workshop-row",
    children: [jsx("div", {
      className: "file_workshop_row--workshopRowIcon--xNQXu role_row--linkAccessIcon--kLG-n role_row--roleRowIcon--BatSn",
      children: jsx(_$$p, {})
    }), jsxs("div", {
      className: "file_workshop_row--workshopRowInfo--1B0-w",
      children: [jsx("div", {
        children: i
      }), t.canEdit && jsx("div", {
        className: "file_workshop_row--descriptionRow--jfXQV",
        children: p
      })]
    }), jsx("div", {
      className: "file_workshop_row--workshopRowAction--Glb-8",
      children: t.canEdit ? c.enabled ? jsx($n, {
        onClick: u,
        variant: "destructiveSecondary",
        children: _$$tx("whiteboard.open_sessions.end_now")
      }) : jsx($n, {
        onClick: u,
        htmlAttributes: {
          "data-onboarding-key": "file-workshop-button"
        },
        variant: "secondary",
        children: _$$tx("whiteboard.open_sessions.start")
      }) : null
    })]
  }) : null;
}
let e1 = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M6 8.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-5a.5.5 0 0 0 0 1h5a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 17.5 7h-11A1.5 1.5 0 0 0 5 8.5v1a.5.5 0 0 0 1 0zm3.975 8c.028.276.249.5.525.5a.47.47 0 0 0 .48-.5 6 6 0 0 0-5.48-5.48.47.47 0 0 0-.5.48c0 .276.224.497.5.525A5 5 0 0 1 9.974 16.5M5 13.5c0-.276.225-.503.499-.47a4 4 0 0 1 3.47 3.471c.034.274-.193.499-.469.499s-.496-.226-.541-.498a3 3 0 0 0-2.461-2.46C5.226 13.995 5 13.775 5 13.5m1.938 3.005c.068.268-.162.495-.438.495s-.49-.237-.622-.48a1 1 0 0 0-.399-.398C5.237 15.99 5 15.776 5 15.5s.227-.506.495-.438c.707.18 1.263.736 1.443 1.443",
      clipRule: "evenodd"
    })
  });
});
let tt = "google_device_screenshare_modal--description--z5lBL text--fontPos11--2LvXf text--_fontBase--QdLsd";
let ti = _$$eU(!1);
function tn(e) {
  let t = md(ti);
  let i = DG(e);
  return getFeatureFlags().figjam_3p_hardware_integration && (t || i.enabled);
}
let tr = M4.Query({
  fetch: async e => (await _$$L2.shareFileToGoogleDevice(e)).data.meta,
  gcPolicy: "onUnmount"
});
function ta(e) {
  let t = Math.max(0, Math.max(0, Math.ceil(e.timeLeftInSeconds)) / (e.totalTime || 0));
  return jsx("div", {
    className: "google_device_screenshare_modal--progressBar--qMHAq",
    "data-testid": "expiryProgressBar",
    children: jsx("div", {
      className: "google_device_screenshare_modal--progressInner--vdR7d",
      style: {
        transform: `scaleX(${t})`
      }
    })
  });
}
function ts(e) {
  return jsx("div", {
    children: `${e.code.substring(0, e.code.length / 2)} ${e.code.substring(e.code.length / 2, e.code.length)}`
  });
}
let to = Ju(function (e) {
  let t = tn(e.fileKey);
  let i = function (e) {
    let t = DG(e);
    if (!t.enabled) return null;
    let i = Math.floor(Math.floor(t.until.valueOf() - new Date().valueOf()) / 6e4);
    let n = Math.floor(i / 60);
    return {
      remainingHours: n,
      remainingMinutes: i - 60 * n
    };
  }(e.fileKey);
  let s = wA();
  let [o, l] = useState(600);
  let [d, u] = useState(0);
  let p = () => s(Lo());
  let m = hS({
    ...e,
    onClose: p
  });
  let [h, g] = IT(tr({
    fileKey: e.fileKey
  }), {
    enabled: t
  });
  useEffect(() => {
    h.data && (u(h.data.seconds_until_code_expiration), l(h.data.seconds_until_code_expiration));
  }, [h]);
  useEffect(() => {
    let e = setInterval(() => d - 1 < 0 ? clearInterval(e) : u(d - 1), 1e3);
    return () => clearInterval(e);
  });
  let f = "loaded" === h.status && !!i;
  return t ? jsx(fu, {
    name: "google_device_screenshare_modal",
    children: jsx(bL, {
      manager: m,
      width: "fit-content",
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: _$$t("file_permissions_modal.google_screencast_modal.title")
          })
        }), f ? jsxs(Fragment, {
          children: [jsxs(_$$nB, {
            padding: 0,
            children: [jsxs("div", {
              className: _$$s.flex.flexRow.pl12.pt12.pb16.pr16.$,
              children: [jsx(_$$m2, {
                className: _$$s.mr8.$
              }), jsxs("div", {
                className: "google_device_screenshare_modal--screenshareCodeRight--sw85z",
                children: [jsx("p", {
                  className: "google_device_screenshare_modal--subtitle--KJKUp text--fontPos11--2LvXf text--_fontBase--QdLsd",
                  children: _$$tx("file_permissions_modal.share_as.google_device.enter_code")
                }), jsxs("div", {
                  className: _$$s.maxW400.$,
                  children: [jsx("p", {
                    className: tt,
                    children: _$$tx("file_permissions_modal.share_as.google_device.screenshare_code.description", {
                      location: jsx("span", {
                        className: _$$s.fontBold.inline.$,
                        children: _$$tx("file_permissions_modal.share_as.google_device.screenshare_code.location")
                      })
                    })
                  }), jsx("p", {
                    className: tt,
                    children: _$$tx("file_permissions_modal.share_as.google_device.screenshare_code.description_unique_code", {
                      reset: jsx("span", {
                        className: _$$s.fontBold.inline.$,
                        children: _$$tx("file_permissions_modal.share_as.google_device.reset_code")
                      })
                    })
                  })]
                }), jsxs("div", {
                  className: _$$s.flex.gap16.itemsCenter.mt16.$,
                  children: [jsxs("div", {
                    className: "google_device_screenshare_modal--screenshareCodeContainer--iZ4Kq",
                    children: [jsx(ta, {
                      totalTime: o,
                      timeLeftInSeconds: d
                    }), jsx("div", {
                      className: "google_device_screenshare_modal--innerScreenshareCodeContainer--vkeTU",
                      children: jsx(ts, {
                        code: h.data.code
                      })
                    })]
                  }), jsx($z, {
                    variant: "secondary",
                    onClick: g.refetch,
                    children: _$$tx("file_permissions_modal.share_as.google_device.reset_code")
                  })]
                })]
              })]
            }), jsx("div", {
              className: "google_device_screenshare_modal--divider--b7Acz"
            })]
          }), jsx(wi, {
            children: jsx("div", {
              className: _$$s.inline.$,
              children: _$$tx("file_permissions_modal.share_as.google_device.open_session_countdown", {
                remainingHours: i?.remainingHours,
                remainingMinutes: i?.remainingMinutes,
                end_now: jsx($z, {
                  variant: "destructiveLink",
                  onClick: () => {
                    s(_$$rA({
                      file_key: e.fileKey
                    }));
                    s(AS());
                    s(_$$F2.enqueue({
                      message: _$$t("file_permissions_modal.share_as.google_device.open_session_ended")
                    }));
                  },
                  children: _$$tx("file_permissions_modal.share_as.google_device.end_now")
                })
              })
            })
          })]
        }) : "errors" === h.status ? jsxs(Fragment, {
          children: [jsx(_$$nB, {
            scrolling: "none",
            children: jsx("div", {
              className: _$$s.colorTextSecondary.$,
              children: _$$tx("file_permissions_modal.screenshare_to_google_device.error_generating_code")
            })
          }), jsx(wi, {
            children: jsxs(jk, {
              children: [jsx($n, {
                variant: "secondary",
                onClick: p,
                children: _$$tx("general.cancel")
              }), jsx($z, {
                variant: "primary",
                onClick: g.refetch,
                children: _$$tx("file_permissions_modal.share_as.google_device.reset_code")
              })]
            })
          })]
        }) : jsx(_$$nB, {
          scrolling: "none",
          children: jsx("div", {
            className: _$$s.flex.itemsCenter.justifyCenter.my8.minH250.minW400.$,
            children: jsx(_$$k2, {})
          })
        })]
      })
    })
  }) : null;
}, "GOOGLE_DEVICE_SCREENSHARE_MODAL");
let td = "screenshare_to_google_row";
let tc = buildUploadUrl("b3729ddac46ce0d3028ebd95638365c311fbe760");
function tu({
  onClick: e,
  isWorkshopEnabled: t,
  workshopDisabledReason: i,
  dataLoaded: r,
  showColorfulIcon: a
}) {
  if (!t) {
    let e = a ? jsx("div", {
      className: _$$aL,
      "data-testid": "screenshare-to-google-icon-color-disabled",
      children: jsx("img", {
        className: Xh,
        src: tc,
        alt: "cast to a Google Meet device"
      })
    }) : jsx("div", {
      className: SV,
      children: jsx(e1, {
        style: {
          "--color-icon": "var(--color-icon-disabled)"
        }
      })
    });
    let t = null;
    switch (i) {
      case Q9.ORG_DISABLED:
        t = _$$t("file_permissions_modal.screenshare_to_google_device.open_sessions_disabled");
        break;
      case Q9.TEAM_NOT_PRO:
        t = _$$t("file_permissions_modal.screenshare_to_google_device.only_pro_teams");
        break;
      case Q9.CANNOT_EDIT_FILE:
        t = _$$t("file_permissions_modal.screenshare_to_google_device.only_admins");
        break;
      case Q9.ERROR:
        t = _$$t("file_permissions_modal.screenshare_to_google_device.generic_error");
    }
    return jsx(fu, {
      name: td,
      properties: {
        isEnabled: !1,
        disabledReason: i
      },
      enabled: r,
      children: jsxs("div", {
        className: G2,
        children: [e, jsx("div", {
          className: Ke,
          children: _$$tx("file_permissions_modal.screenshare_to_google_device")
        }), jsx("div", {
          className: _$$s.flex.alignRight.$,
          "aria-label": _$$t("file_permissions_modal.screenshare_to_google_device.aria_label"),
          children: jsx(_$$B, {
            className: _$$s.colorIconSecondary.p6.$,
            svg: _$$A2,
            height: "12px",
            width: "12px",
            autosize: !0,
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": t,
            dataTestId: "cast-to-google-tooltip"
          })
        })]
      })
    });
  }
  let s = a ? jsx("div", {
    className: Ah,
    "data-testid": "screenshare-to-google-icon-color",
    children: jsx("img", {
      className: Xh,
      src: tc,
      alt: "cast to a Google Meet device"
    })
  }) : jsx("div", {
    className: _$$aL,
    children: jsx(e1, {})
  });
  return jsx(fu, {
    name: td,
    properties: {
      isEnabled: !0
    },
    enabled: r,
    children: jsx(_$$sR, {
      icon: s,
      text: _$$t("file_permissions_modal.screenshare_to_google_device"),
      onClick: e,
      expandCaret: !0
    })
  });
}
let tp = buildUploadUrl("2c62dae05daee41f1553658c7aa7e7cea13cfc78.png");
let tm = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M10.882 7H7v1h4.382zM12.5 8l-.724-1.447A1 1 0 0 0 10.882 6H7a1 1 0 0 0-1 1v8.5A1.5 1.5 0 0 0 7.5 17H10a.5.5 0 0 0 0-1H7.5a.5.5 0 0 1-.5-.5V9h9.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H14a.5.5 0 0 0 0 1h2.5a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 16.5 8zm-.5 3a.5.5 0 0 1 .354.146l2 2a.5.5 0 0 1-.708.708L12.5 12.707V18.5a.5.5 0 0 1-1 0v-5.793l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2A.5.5 0 0 1 12 11",
      clipRule: "evenodd"
    })
  });
});
function tf(e) {
  let t = jsx("span", {
    className: "nudge_to_move_row--nudgeToMoveButton--OZ7Pg",
    children: _$$tx("file_permissions_modal.share_as.move_to_project")
  });
  return jsx("div", {
    className: "nudge_to_move_row--nudgeToMoveRow--ICWyQ",
    children: jsx(_$$sR, {
      icon: jsx(tm, {}),
      text: _$$t("file_permissions_modal.share_as.nudge_to_move_text"),
      onClick: e.onClick,
      rightSideElement: t
    })
  });
}
function tv(e) {
  let {
    getConfig
  } = I7("exp_prototype_sharing_clarity");
  return useCallback(() => {
    if (!e) return !1;
    let i = getConfig().get("enabled", !1);
    return getFeatureFlags().prototype_sharing_clarity_gate && i;
  }, [getConfig, e]);
}
let tL = "seen_sharing_clarity_file_modal_overlay";
let tF = "sc_file_modal_step_1_onboarding_key";
let tM = "sc_file_modal_step_2_onboarding_key";
let tj = "sc_file_modal_step_3_onboarding_key";
let tU = _$$r2(tL);
let tB = _$$rn("sc_file_modal_onboarding", _$$R2(GCV));
function tV(e) {
  let t = md(tU);
  let {
    show,
    uniqueId,
    isShowing,
    complete
  } = _$$e2({
    overlay: GCV,
    priority: _$$N.DEFAULT_MODAL
  }, [t]);
  let l = wA();
  let d = _$$zl(tB);
  _$$h2(() => {
    "reset" === d.currentState ? show() : show({
      canShow: e => !e
    });
  });
  _$$E(uniqueId, "Reset Onboarding", () => {
    show();
  });
  let c = e.canViewFolder ? _$$tx("rcs.sharing_clarity.file_permissions_modal_step_2_description") : _$$tx("rcs.sharing_clarity.file_permissions_modal_step_2_description_no_folder");
  let u = [{
    title: _$$tx("rcs.sharing_clarity.file_permissions_modal_step_1_title"),
    description: _$$tx("rcs.sharing_clarity.file_permissions_modal_step_1_description"),
    trackingContextName: "Sharing Clarity File Modal Onboarding Step 1",
    targetKey: tF,
    emphasized: !0,
    zIndex: _$$R3.MODAL
  }, {
    title: _$$tx("rcs.sharing_clarity.file_permissions_modal_step_2_title"),
    description: c,
    trackingContextName: "Sharing Clarity File Modal Onboarding Step 2",
    targetKey: tM,
    emphasized: !0,
    zIndex: _$$R3.MODAL
  }];
  e.showPrototypeStep && u.push({
    title: _$$tx("rcs.sharing_clarity.file_permissions_modal_step_3_title"),
    description: _$$tx("rcs.sharing_clarity.file_permissions_modal_step_3_description"),
    trackingContextName: "Sharing Clarity File Modal Onboarding Step 3",
    targetKey: tj,
    emphasized: !0,
    zIndex: _$$R3.MODAL
  });
  return jsx(WZ, {
    isShowing,
    steps: u,
    onComplete: () => {
      l(_$$b2({
        [tL]: !0
      }));
      complete();
    },
    userFlagOnShow: tL
  });
}
let tW = Ju(function (e) {
  let t = hS(e);
  let i = wA();
  let [s, o] = useState(!1);
  let [l, d] = useState(!1);
  return jsx(bL, {
    manager: t,
    width: 350,
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: _$$t("confirm_prototype_share_modal.your_entire_file_will_be_shared")
        })
      }), jsxs(_$$nB, {
        children: [jsx("div", {
          className: "confirm_prototype_share_modal--modalTopSection--glopl",
          children: _$$t("confirm_prototype_share_modal.sharing_this_link_will_give_others_direct_access_to_your_prototype")
        }), jsxs("div", {
          className: "confirm_prototype_share_modal--modalBottomSection--N9yAg",
          children: [_$$t("confirm_prototype_share_modal.to_be_able_to_share_your_prototypes_separately_from_your_design_files"), " ", jsx(_$$N2, {
            href: "#",
            onClick: () => {
              e.team && e.editorType && i(_$$to({
                type: DV,
                data: {
                  team: e.team,
                  editorType: e.editorType,
                  resource: Bi.PROTOTYPE_SHARING,
                  currentPlan: _$$F.Plan.STARTER,
                  upsellPlan: _$$F.Plan.PRO
                }
              }));
            },
            children: _$$t("confirm_prototype_share_modal.upgrade_your_plan")
          })]
        })]
      }), jsxs(wi, {
        children: [jsx(_$$S2, {
          checked: l,
          onChange: e => d(e),
          label: jsx(_$$J2, {
            children: _$$t("confirm_prototype_share_modal.dont_show_again")
          })
        }), jsx(jk, {
          children: jsx($n, {
            variant: "primary",
            onClick: () => {
              l && i(_$$b2({
                prototype_share_warning_dismissed: !0
              }));
              e.onConfirm();
              o(!0);
              setTimeout(() => {
                e.onClose();
              }, 1500);
            },
            children: s ? _$$t("confirm_prototype_share_modal.link_copied") : _$$t("confirm_prototype_share_modal.copy_prototype_link")
          })
        })]
      })]
    })
  });
});
function tK(e) {
  let [t, i] = useState(!1);
  let s = wA();
  let o = !!_$$f("prototype_share_warning_dismissed");
  let l = tv(e.planTier === FPlanNameType.STARTER && !o);
  let d = jsx(_$$K, {});
  let c = jsx("button", {
    className: By,
    "data-onboarding-key": tj,
    "data-tooltip": e.permissionsTooltipString,
    "data-tooltip-max-width": 300,
    "data-tooltip-offset-y": -8,
    "data-tooltip-show-above": !0,
    "data-tooltip-subtext": _$$t("file_permissions_modal.share_as.will_open_in_new_tab"),
    "data-tooltip-timeout-delay": 50,
    "data-tooltip-type": Ib.TEXT,
    onClick: t => {
      e.nodeID && s(_$$K2({
        fileKey: e.fileKey,
        startingPointNodeId: e.nodeID,
        shouldOpenAtStartingPoint: !0,
        source: "file_share_modal",
        isSlides: e.editorType === _$$nT.Slides,
        shouldOpenInNewTab: !0,
        openShareModal: !0
      }));
      t.stopPropagation();
    },
    children: jsx(_$$I, {
      className: py
    })
  });
  return jsx(_$$sR, {
    icon: d,
    text: t ? _$$t("file_permissions_modal.share_as.link_copied") : e.copyLinkString,
    onClick: () => {
      l() ? s(_$$to({
        type: tW,
        data: {
          fileKey: e.fileKey,
          team: e.team,
          editorType: e.file?.editor_type,
          onConfirm: () => {
            e.onClick();
            i(!0);
            setTimeout(() => {
              i(!1);
            }, 4e3);
          }
        }
      })) : (e.onClick(), i(!0), setTimeout(() => {
        i(!1);
      }, 4e3));
    },
    rightSideElement: e.editorType !== _$$nT.Slides ? c : void 0,
    rightClassName: W2
  });
}
function tY(e) {
  let t = "" !== e.nodeID ? bOM.VALID : X3B && X3B.currentPagePrototypeStatus();
  return e.isFullscreenView && e.file.editor_type === FFileType.DESIGN && t === bOM.VALID;
}
function tX({
  fileKey: e
}) {
  let t = wA();
  let i = jsx(_$$x, {});
  let s = useCallback(() => {
    $t({
      dispatch: t,
      fileKey: e,
      source: _$$E2.FJ_SHARE_MODAL
    });
  }, [t, e]);
  return jsx(_$$sR, {
    icon: i,
    text: _$$t("fullscreen_actions.create-slides-outline-from-figjam"),
    onClick: s,
    expandCaret: !0
  });
}
let tQ = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M7 7h10a1 1 0 0 1 1 1v2H6V8a1 1 0 0 1 1-1m-1 4v5a1 1 0 0 0 1 1h2v-6zm4 6h2a.5.5 0 0 1 0 1H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a.5.5 0 0 1-1 0h-8zm6.5 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.224-4.947a.5.5 0 0 1 .223.67l-1 2a.5.5 0 0 1-.8.13l-1-1a.5.5 0 0 1 .707-.707l.509.51.69-1.38a.5.5 0 0 1 .67-.223",
      clipRule: "evenodd"
    })
  });
});
function t9({
  file: e
}) {
  let t = J3();
  let i = _$$iq();
  let n = X();
  return e.canEdit && i && !n && !getInitialOptions().integration_host && !Ay.isIpadNative && JU(t);
}
function ie(e) {
  let t = kD();
  let i = dq();
  let r = cD();
  let a = t ? jsx(tQ, {}) : jsx(_$$n2, {});
  let s = t ? _$$t("file_permissions_modal.share_as.publish_template.published") : _$$t("file_permissions_modal.share_as.publish_template");
  return jsx(fu, {
    name: "Publish Template Row",
    properties: {
      orgId: i,
      teamId: r
    },
    children: jsx(_$$sR, {
      dataOnboardingKey: e["data-onboarding-key"],
      icon: a,
      text: s,
      onClick: e.onClick,
      testId: "publish-template-row",
      expandCaret: !0
    })
  });
}
function it() {
  let {
    openSlidesPublishFlow
  } = _$$X2();
  let t = $u();
  return jsx(ie, {
    onClick: () => t(() => openSlidesPublishFlow("publish-tab")),
    "data-onboarding-key": "slides-publish-template"
  });
}
function ii() {
  let {
    openCooperPublishFlow
  } = _$$t3();
  return jsx(ie, {
    onClick: () => openCooperPublishFlow("publish-tab"),
    "data-onboarding-key": "cooper-publish-template"
  });
}
function ir() {
  let {
    openMakePublishFlow
  } = function () {
    let e = !!kD();
    let t = J3();
    let i = q5();
    let n = wA();
    return {
      openMakePublishFlow: async r => {
        if (i) {
          if (!e && (await YW(i))) {
            _$$i$(n);
            return;
          }
          t === kN.FILE_IN_DRAFTS ? _$$x2({
            file: {
              key: i.key,
              name: i.name,
              folder_id: i.folderId,
              team_id: i.teamId,
              editor_type: i.editorType,
              parent_org_id: i.parentOrgId
            },
            dispatch: n
          }) : JU(t) && YM(n, i.key, i.editorType, r);
        }
      }
    };
  }();
  return jsx(ie, {
    onClick: () => openMakePublishFlow("publish-tab"),
    "data-onboarding-key": "figmake-publish-template"
  });
}
function is({
  file: e,
  repo: t,
  team: i,
  org: s,
  currentUser: o,
  isInDraftsFolder: l,
  dataLoaded: d,
  planTier: c
}) {
  var u;
  var p;
  let [m, g] = useState(!1);
  let _ = X();
  let b = eU();
  let v = function () {
    let e = l7();
    let t = _$$o();
    return Ay.isIpadNative || e ? null : jsx(eL, {
      onClick: () => t(A5.EMBED_CODE)
    });
  }();
  let I = function ({
    file: e,
    team: t,
    isInDraftsFolder: i
  }) {
    let r = _$$iq();
    let a = X();
    let s = _$$o();
    let o = Su();
    let l = _$$aP();
    let d = QU();
    let c = _$$W(e.editor_type);
    let u = function (e, t) {
      let i = Rs(x9E, {
        fileKey: e
      }, {
        enabled: null != t && [FFileType.FIGMAKE, FFileType.SITES].includes(t)
      });
      return Qw.useTransform(i, e => {
        let t = e.file?.canPublishSiteWithReasons;
        return null != t && t.status === _$$tT.Loaded && t.data.result;
      }).data ?? !1;
    }(e.key, e.editor_type);
    let p = md(_$$td);
    let m = JT();
    let g = Hz({
      figFileKey: e.key
    });
    let _ = !i && w5(t) && DU(e.editor_type ?? void 0);
    let A = (() => {
      switch (e.editor_type) {
        case FFileType.SLIDES:
          return _;
        case FFileType.SITES:
          return o;
        case FFileType.COOPER:
          return _ && !!getFeatureFlags().cooper_publish_to_cmty && c;
        case FFileType.FIGMAKE:
          return (!!l || !!d && !!m) && c && u && !p;
        default:
          return !0;
      }
    })();
    return e.canEdit && r && !a && !getInitialOptions().integration_host && !Ay.isIpadNative && A ? jsx(en, {
      onClick: async () => {
        (await g.doSetup()) && s(A5.PUBLISH_COMMUNITY);
      },
      isLoading: g.inProgress
    }) : null;
  }({
    file: e,
    team: i,
    isInDraftsFolder: l
  });
  let E = function ({
    file: e
  }) {
    let t = _$$o();
    return t9({
      file: e
    }) ? jsx(ie, {
      onClick: () => t(A5.PUBLISH_TEMPLATE)
    }) : null;
  }({
    file: e
  });
  let x = function ({
    file: e
  }) {
    let t = _$$j2();
    return t9({
      file: e
    }) && t ? jsx(ii, {}) : null;
  }({
    file: e
  });
  let S = function ({
    file: e
  }) {
    return t9({
      file: e
    }) ? jsx(it, {}) : null;
  }({
    file: e
  });
  let C = function ({
    file: e
  }) {
    let t = bF();
    return t9({
      file: e
    }) && t ? jsx(ir, {}) : null;
  }({
    file: e
  });
  let T = function ({
    file: e,
    repo: t
  }) {
    let i = _$$iq();
    let r = X();
    let a = ey({
      file: e,
      repo: t
    });
    return !i || e.editor_type !== FFileType.DESIGN || r || Ay.isIpadNative ? null : jsx(ek, {
      onClick: () => a({
        linkQueryMode: _$$iO.DEV_MODE,
        skipVisualBell: !0,
        source: _$$d.SHARE_MODAL_COPY_DEV_ROW
      })
    });
  }({
    file: e,
    repo: t
  });
  let P = KM({
    org: s,
    currentUser: o
  });
  let O = function ({
    file: e,
    repo: t,
    nodeID: i,
    planTier: r,
    team: a
  }) {
    let s = tY({
      file: e,
      isFullscreenView: _$$iq(),
      nodeID: i
    });
    let o = ey({
      file: e,
      repo: t
    });
    return s ? jsx(tK, {
      onClick: () => o({
        linkQueryMode: _$$iO.DESIGN,
        skipVisualBell: !0,
        source: _$$d.SHARE_MODAL_COPY_PROTO_ROW,
        shouldLinkToPrototype: !0
      }),
      fileKey: e.key,
      editorType: _$$nT.Design,
      nodeID: i,
      permissionsTooltipString: _$$t("file_permissions_modal.share_as.open_prototype_settings"),
      copyLinkString: _$$t("file_permissions_modal.share_as.copy_prototype_link"),
      file: e,
      planTier: r,
      team: a
    }) : null;
  }({
    file: e,
    repo: t,
    nodeID: b,
    planTier: c,
    team: i
  });
  let D = function ({
    file: e,
    repo: t,
    nodeID: i,
    planTier: r,
    team: a
  }) {
    let s = ey({
      file: e,
      repo: t
    });
    return _$$iq() && e.editor_type === FFileType.SLIDES ? jsx(tK, {
      onClick: () => s({
        linkQueryMode: _$$iO.SLIDES,
        skipVisualBell: !0,
        source: _$$d.SHARE_MODAL_COPY_PRESENTATION_ROW,
        shouldLinkToPrototype: !0
      }),
      fileKey: e.key,
      editorType: _$$nT.Slides,
      nodeID: i,
      permissionsTooltipString: _$$t("file_permissions_modal.share_as.open_presentation_settings"),
      copyLinkString: _$$t("file_permissions_modal.share_as.copy_presentation_link"),
      file: e,
      planTier: r,
      team: a
    }) : null;
  }({
    file: e,
    repo: t,
    nodeID: b,
    planTier: c,
    team: i
  });
  let Z = function ({
    file: e,
    team: t,
    org: i,
    dataLoaded: s
  }) {
    let o = e.key;
    let l = e.editor_type;
    let d = wA();
    let c = _$$iq();
    let u = _$$o();
    let p = tn(o);
    let m = useCallback(() => {
      sx("google_device_screenshare_button_clicked", {
        fileKey: o
      });
      getFeatureFlags().figjam_3p_hardware_integration && c && l === FFileType.WHITEBOARD && p ? d(_$$to({
        type: to,
        data: {
          fileKey: o
        }
      })) : u(A5.SHARE_GOOGLE_DEVICE_DISCLAIMER);
    }, [o, c, l, p, d, u]);
    let g = q5();
    let f = !!g && Qy(g);
    let _ = M_({
      editorType: l,
      team: t,
      org: i
    }) && e.canEdit;
    let A = kA({
      editorType: l,
      team: t,
      org: i,
      canEdit: e.canEdit
    });
    return function ({
      showColorfulIcon: e
    }) {
      return getFeatureFlags().figjam_3p_hardware_integration && !f ? jsx(tu, {
        onClick: m,
        isWorkshopEnabled: _,
        workshopDisabledReason: A,
        dataLoaded: s,
        showColorfulIcon: !!e
      }) : null;
    };
  }({
    file: e,
    team: i,
    org: s,
    dataLoaded: d
  });
  u = {
    file: e,
    team: i,
    org: s
  };
  let Q = M_({
    editorType: u.file.editor_type,
    team: u.team,
    org: u.org
  }) && u.file.canEdit ? jsx(eJ, {
    team: u.team,
    file: u.file
  }) : null;
  let J = (p = {
    file: e
  }).file.editor_type === FFileType.WHITEBOARD && (!p.file.viewer_export_restricted || p.file.canEdit) && HZ() ? jsx(tX, {
    fileKey: p.file.key
  }) : null;
  let ee = function (e) {
    let t = e.file.editor_type === FFileType.DESIGN;
    let i = e.file.canEdit;
    let s = qZ();
    let o = t && i && s && getFeatureFlags().aip_flower_garden_share;
    let l = wA();
    let d = useCallback(() => {
      l(Ce());
      _$$u({
        source: Qej.SHARE_MODAL
      });
    }, [l]);
    return (KV(Qej.SHARE_MODAL, !!o), o) ? jsx(_$$sR, {
      icon: jsx(_$$c, {}),
      text: _$$t("fullscreen_actions.quick_actions.detect-violations"),
      onClick: d
    }) : null;
  }({
    file: e
  });
  let et = function (e) {
    let t = wA();
    let i = cD();
    return e.file.isDraftFileLG && e.file.canMove && (e.org || i && w5(e.team)) ? jsx(tf, {
      onClick: () => {
        _$$h(e.file, e.repo, t);
        sx("nudge_to_move_clicked", {
          file_key: e.file.key,
          team_id: e.team?.id,
          org_id: e.org?.id
        });
      }
    }) : null;
  }({
    file: e,
    team: i,
    org: s,
    repo: t
  });
  let er = _$$j({
    file: e
  });
  let eo = function ({
    file: e,
    repo: t
  }) {
    let i = ey({
      file: e,
      repo: t
    });
    return jsx(ev, {
      onClick: () => {
        i({
          linkQueryMode: _$$iO.DESIGN,
          skipVisualBell: !0,
          source: _$$d.SHARE_MODAL,
          shouldLinkToPrototype: !1,
          shouldLinkToEditor: !0
        });
      }
    });
  }({
    file: e,
    repo: t
  });
  let el = c === FPlanNameType.STARTER;
  let ed = getFeatureFlags().show_copy_link_to_editor && e.canEdit && !el;
  let ec = e => null != e;
  let eu = [T, O, I, ed ? eo : void 0, v].filter(ec);
  let ep = [Q, J, E, I, Z({
    showColorfulIcon: !1
  }), v].filter(ec);
  let em = [C, I, er].filter(ec);
  let eh = [v].filter(ec);
  let eg = [S, D, I, v].filter(ec);
  let ef = [I, v].filter(ec);
  let e_ = [x, I, v].filter(ec);
  let eA = [P, Z({
    showColorfulIcon: !0
  }), Q, E, I, v].filter(ec);
  let eb = [];
  let eT = e.editor_type === FFileType.DESIGN && !_;
  eT ? eb = eu : e.editor_type === FFileType.WHITEBOARD && !Ay.isIpadNative && P ? eb = eA : e.editor_type === FFileType.WHITEBOARD ? eb = ep : e.editor_type === FFileType.SLIDES ? eb = eg : e.editor_type === FFileType.COOPER ? eb = e_ : e.editor_type === FFileType.SITES ? eb = ef : e.editor_type === FFileType.FIGMAKE ? eb = em : _ && (eb = eh);
  let eR = null;
  return (eb.length > 4 && (eR = eb.splice(3)), getFeatureFlags().aip_flower_garden_share && ee && eT && eb.push(ee), 0 === eb.length) ? null : jsxs("div", {
    className: fS,
    children: [eb.map((e, t) => jsx("div", {
      className: _$$s.flex.$,
      children: e
    }, t)), eR && jsxs(Fragment, {
      children: [!m && jsx("div", {
        className: _$$s.flex.$,
        children: jsx(gq, {
          onClick: () => g(!0)
        })
      }), m && eR.map((e, t) => jsx("div", {
        className: _$$s.flex.$,
        children: e
      }, t))]
    }), et]
  }, "share-modal");
}
function io({
  file: e,
  repo: t,
  team: i,
  org: r,
  currentUser: s,
  isInDraftsFolder: o,
  dataLoaded: l,
  planTier: d
}) {
  var c;
  return (c = A5.INVITE, d4(e => Q(e.selectedView) === c)) ? jsx(is, {
    file: e,
    repo: t,
    org: r,
    currentUser: s,
    isInDraftsFolder: o,
    team: i,
    dataLoaded: l,
    "data-testid": "file-permissions-modal-share-options",
    planTier: d
  }) : null;
}
function iu({
  children: e
}) {
  return jsx("div", {
    className: "tab_contents_container--container--3H4IC",
    onKeyDown: e => {
      e.keyCode !== Uz.ESCAPE && e.stopPropagation();
    },
    children: e
  }, "container");
}
function im(e) {
  let t = "ALL_COLLABORATORS";
  let i = "HOST_PLAN_USERS";
  let a = "ALL_EXTERNAL_TEAMS";
  let s = "OTHER_GUESTS";
  let o = e.org ? FOrganizationLevelType.ORG : FOrganizationLevelType.TEAM;
  let l = e.org?.id ?? e.team?.id;
  let d = e.org?.name ?? e.team?.name;
  let c = useMemo(() => e.resourceConnectionSharingGroupUsers.reduce((e, t) => (t.planName && !(t.planParentId === l && t.planType === o) && (e[t.planName] = [...(e[t.planName] ?? []), t]), e), {}), [e.resourceConnectionSharingGroupUsers, l, o]);
  let u = useMemo(() => e.resourceConnectionSharingGroupUsers.filter(e => !e.planName), [e.resourceConnectionSharingGroupUsers]);
  let p = useMemo(() => e.resourceConnectionSharingGroupUsers.filter(e => e.planParentId === l && e.planType === o), [e.resourceConnectionSharingGroupUsers, l, o]);
  let [m, g] = useState(t);
  let f = useCallback(() => {
    switch (m) {
      case t:
        return p.concat(Object.values(c).flat()).concat(u);
      case i:
        return p;
      case s:
        return u;
      case a:
        return Object.values(c).flat().concat(u);
      default:
        return c[m] ?? [];
    }
  }, [m, p, u, c]);
  return jsx(iu, {
    children: jsx("div", {
      className: _$$st,
      children: jsxs("div", {
        className: d3,
        children: [jsx("div", {
          children: _$$t("file_permissions_modal.external_teams_in_connected_projects.description")
        }), jsx("div", {
          className: _$$s.py8.$,
          children: jsxs(_$$bL, {
            value: m,
            onChange: e => g(e ?? t),
            children: [jsx(l9, {
              label: jsx(_$$h3, {
                children: " "
              })
            }), jsxs(mc, {
              children: [jsx(c$, {
                value: t,
                children: _$$t("file_permissions_modal.connected_project.all_collaborators")
              }), jsx(c$, {
                value: i,
                children: d
              }), jsx("div", {
                className: _$$s.py4.px8.$,
                children: jsx("div", {
                  className: dG
                })
              }), jsx(c$, {
                value: a,
                children: _$$t("file_permissions_modal.connected_project.all_external_teams")
              }), Object.keys(c).map(e => jsx(c$, {
                value: e,
                children: e
              }, e)), jsx(c$, {
                value: s,
                children: _$$t("file_permissions_modal.connected_project.other_guests")
              })]
            })]
          })
        }), f().map(e => jsx(_$$i4, {
          user: {
            id: e.userId,
            name: e.userPublic?.name ?? "",
            handle: e.userPublic?.handle ?? "",
            img_url: e.userPublic?.userPublicImgUrl ?? "",
            plan: e.planParentId ? {
              parentId: e.planParentId ?? void 0,
              name: e.planName ?? void 0,
              imgUrl: e.planImgUrl ?? void 0
            } : void 0
          },
          level: e.level,
          id: e.userId,
          pending: !1,
          pendingEmail: ""
        }, "user-row-static-" + e.id))]
      })
    })
  });
}
function iA(e) {
  let {
    team,
    folder
  } = e;
  if (folder.team_access === FTeamAccessPermissionType.TEAM_ACCESS_DISABLED) return jsx(Fragment, {});
  let r = team.canRead ? team.name : _$$t("file_permissions_modal.file_name_s_team", {
    fileName: e.fileName
  });
  let a = jsx(_$$n3, {
    team: {
      id: team.id,
      name: r,
      img_url: team.canRead ? team.img_url : void 0
    },
    size: 24,
    avatarSvg: _$$A4
  });
  return jsxs("div", {
    className: xf,
    children: [jsx("div", {
      className: _$$H,
      children: a
    }), jsxs("div", {
      className: _$$$S,
      children: [jsx("div", {
        className: UU,
        children: r
      }, `name-${team.id}`), jsx("span", {
        className: _$$s.colorTextSecondary.$,
        children: folder.team_access === FTeamAccessPermissionType.TEAM_ACCESS_VIEW ? _$$t("permissions.level_name.can_view") : _$$t("permissions.level_name.can_access")
      })]
    })]
  });
}
function iy(e) {
  let t = s5();
  return jsxs(iu, {
    children: [jsx("div", {
      className: _$$s.colorTextSecondary.$,
      children: _$$tx(t ? "folder_share_settings.the_following_people_have_access_remove_their_access_at_any_time" : "folder_share_settings.the_following_people_have_access", {
        projectName: e.folder.name
      })
    }), jsx("div", {
      className: _$$st,
      children: jsxs("div", {
        className: d3,
        children: [e.team && jsx(iA, {
          team: e.team,
          folder: e.folder,
          fileName: e.fileName
        }), jsx("div", {
          children: e.folderRoles.map(e => {
            let t = e.user;
            let i = e.userId || "";
            let r = e.pendingEmail;
            return jsx(_$$i4, {
              user: {
                id: i,
                name: t && t.name || "",
                email: t && t.email || "",
                img_url: t && t.imgUrl || "",
                handle: t && t.handle || ""
              },
              level: e.level,
              id: i,
              pending: e.pending,
              pendingEmail: r || ""
            }, "user-row-static-" + i);
          })
        })]
      })
    })]
  });
}
function iM({
  sharedContainerSetting: e,
  exportEnabled: t,
  setExportEnabled: i,
  shareAudience: r,
  selectedPermissionsLevel: a,
  hasEditRole: s
}) {
  let o = e?.file_export_setting === "banned" && getFeatureFlags().plan_level_file_export_controls;
  let l = e?.file_export_setting === "members_only" && getFeatureFlags().plan_level_file_export_controls;
  let d = {
    checked: t && !o,
    onChange: () => i(!t),
    label: jsx(_$$J2, {
      children: _$$t("permissions_modal.file_share_settings.viewers_can_copy_save_export")
    }),
    children: l ? jsx(_$$E3, {
      color: "secondary",
      children: _$$tx("permissions_modal.file_share_settings.this_setting_applies_to_members_viewers")
    }) : jsx(_$$E3, {
      color: o ? "disabled" : "secondary",
      children: _$$tx("permissions_modal.file_share_settings.this_setting_applies_to_anyone_with_view_access", {
        strongCanView: jsx("span", {
          className: "xk50ysn",
          children: _$$t("permissions_modal.file_share_settings.can_view")
        })
      })
    }),
    disabled: r === _9.ANYONE && a === J4.EDIT || !s || o
  };
  return o ? jsx("div", {
    className: "x78zum5 x6s0dn4 x167g77z",
    children: jsx(m_, {
      preview: _$$t("permissions_modal.file_share_settings.viewers_cannot_export_hover"),
      children: jsx(_$$S2, {
        ...d
      })
    })
  }) : jsx(_$$S2, {
    ...d
  });
}
function iU({
  file: e,
  org: t,
  team: i
}) {
  let n = "design" === e.editor_type;
  let r = !!t || w5(i);
  return n && !r && !e.isDraftFileLG;
}
function iG({
  allFileRoles: e,
  file: t
}) {
  let i = ee(t);
  let n = et(t);
  return useMemo(() => function ({
    allFileRoles: e,
    isInDesignPrototype: t,
    isInSlidesPresentation: i
  }) {
    return t ? e.filter(e => e.level === _$$e4.OWNER || e.level === _$$e4.VIEW_PROTOTYPES) : i ? e : e.filter(e => e.level !== _$$e4.VIEW_PROTOTYPES);
  }({
    allFileRoles: e,
    isInDesignPrototype: i,
    isInSlidesPresentation: n
  }), [e, i, n]);
}
function i$(e) {
  let t = wA();
  return jsxs(Fragment, {
    children: [jsx(_$$L3, {
      disabled: e.sharedContainerSetting?.autogen_password_controls,
      className: e.inputClassName,
      value: e.password || "",
      onChange: t => e.onChange(t.target.value),
      placeholder: _$$t("file_access_row.passwords.add_a_password"),
      ref: e.inputRef,
      "data-testid": "link-autogen-password-input"
    }), e.password && e.password.length > 0 && jsx("div", {
      className: N8,
      children: jsx(_$$K3, {
        "aria-label": _$$t("permissions.link_autogen_password_copy"),
        onClick: () => {
          e.password && (Dk(e.password), sx("file_password_copied", {
            user: e.userId,
            file_key: e.fileKey
          }), t(_$$F2.enqueue({
            message: _$$t("file_access_row.passwords.copied"),
            icon: zX.CHECK,
            type: "success"
          })));
        },
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": _$$t("permissions.link_autogen_password_copy"),
        children: jsx(_$$a, {})
      })
    })]
  });
}
var i0 = (e => (e.EDIT_PWD = "EDIT_PWD", e.VIEW = "VIEW", e.EDIT_PWD_AND_EXP = "EDIT_PWD_AND_EXP", e.EDIT_EXP = "EDIT_EXP", e))(i0 || {});
let i1 = "link_expiration_row--bold--qeAjY";
let i2 = "link_expiration_row--rightLabelStyle--MOIdv";
function i5(e, t, i) {
  switch (e) {
    case Dp.TWENTY_SEC:
      return _$$t("file_access_row.expiration.testing");
    case Dp.CURRENT:
      return t && i ? yJ(t, i) : "";
    case Dp.DAY:
      return _$$t("permissions_modal.file_share_settings.one_day");
    case Dp.WEEK:
      return _$$t("permissions_modal.file_share_settings.one_week");
    case Dp.CUSTOM:
      return _$$t("permissions_modal.file_share_settings.custom_time");
    default:
      return xb(e);
  }
}
function i4(e) {
  let t = ml(e);
  return {
    type: "option",
    key: hP(e),
    selectedLabel: t,
    text: t
  };
}
function i3(e, t, i) {
  let n = t.clone().add(1, "year");
  if (e.isBefore(t, "day") || e.isAfter(i, "day") || e.isAfter(n, "day")) return [];
  let r = [];
  let a = 0;
  let s = 23;
  e.isSame(n, "day") ? s = t.hour() : i && e.isSame(i, "day") && (s = i.isSame(t, "day") ? i.hour() - t.hour() - 1 : i.hour());
  let o = e.isSame(t, "day");
  let l = i4(o ? t.clone().add(1, "hour").startOf("hour") : _$$A5().startOf("day"));
  if ("00:00" === l.key && o) return [];
  for (r.push(l); a < s;) {
    let t = i4(_$$U2(W7(e), r[a].key).clone().add(1, "hour"));
    if ("00:00" === t.key) break;
    r.push(t);
    a++;
  }
  return r;
}
let i6 = (e, t, i) => {
  if (0 === e.length) return null;
  let n = (i && e.find(e => e.key === hP(i))) ?? e[0];
  return _$$U2(W7(t), n.key);
};
function i7(e) {
  let {
    onChangeExpiration
  } = e;
  let i = e.expiration && _$$A5(e.expiration) || e.defaultExpiration;
  let [a, s] = useState(i);
  let o = i3(a, e.currentTimestamp, e.orgMaxExpiration);
  let [l, d] = useState(i6(o, a, cH(i)));
  let c = useCallback(() => {
    if (!l) {
      e.setErrorMessage(_$$t("file_access_row.expiration.invalid_options"));
      return !1;
    }
    let t = _$$U2(W7(a), hP(l));
    let i = e.currentTimestamp.clone().add(1, "year");
    let n = e.orgMaxExpiration && t.isAfter(e.orgMaxExpiration) && e.orgMaxExpirationInHrs;
    let r = t.isAfter(i);
    if (t.isBefore(e.currentTimestamp)) e.setErrorMessage(_$$t("file_access_row.expiration.past_date"));else if (n) {
      let t = _$$nM(e.orgMaxExpirationInHrs);
      e.setErrorMessage(t);
    } else r ? e.setErrorMessage(_$$t("file_access_row.expiration.past_max")) : e.setErrorMessage(null);
  }, [a, l, e]);
  let u = useCallback((e, i) => {
    if (!e || !i) return;
    let n = W7(e);
    let r = hP(i);
    let a = _$$U2(n, r);
    a.isValid() && onChangeExpiration(a);
  }, [onChangeExpiration]);
  let p = useRef(!1);
  useEffect(() => {
    e.isSharingClarity && !p.current && (u(a, l), p.current = !0);
  }, [a, l, e.isSharingClarity, u]);
  let m = e.displayState === i0.EDIT_PWD_AND_EXP;
  let h = e.errorMessage && m ? p4 : R8;
  let g = e.orgMaxExpiration ? _$$A5(e.orgMaxExpiration) : e.currentTimestamp.clone().add(1, "year");
  return jsxs(Fragment, {
    children: [e.orgMaxExpirationInHrs && e.orgMaxExpirationInHrs > 24 && !e.isSharingClarity && jsx("div", {
      className: _O,
      children: jsx(_$$E3, {
        color: "secondary",
        truncate: "line-clamp",
        lineClamp: 3,
        children: _$$tx("file_access_row.expiration.org_enforcement_message_v2", {
          time: _$$M(e.orgMaxExpiration),
          orgName: e.org?.name
        })
      })
    }), jsxs(_$$Y2, {
      dataTestId: "custom-expiration",
      direction: m ? "vertical" : "horizontal",
      children: [jsxs(_$$Y2, {
        width: "fill-parent",
        horizontalAlignItems: "stretch",
        padding: e.isSharingClarity ? void 0 : {
          left: 36
        },
        spacing: 8,
        children: [jsx(ks, {
          type: "date",
          className: h,
          onChange: t => {
            let i = _$$A5(t.target.value);
            if (i.isValid()) {
              s(i);
              e.isSharingClarity && u(i, l);
              let t = e.orgMaxExpiration ?? e.currentTimestamp.clone().add(1, "year");
              if (i.isSame(e.currentTimestamp, "day") || i.isSame(t, "day")) {
                let t = i6(i3(i, e.currentTimestamp, e.orgMaxExpiration), i, l);
                (t && ml(t)) !== (l && ml(l)) && (d(t), e.isSharingClarity && u(i, t));
              }
              e.setErrorMessage(null);
            }
          },
          onClick: e => e.preventDefault(),
          onBlur: () => {
            c();
          },
          value: W7(a),
          dataTestId: "custom-expiration-date-input",
          min: e.currentTimestamp.clone().subtract(1, "day").format("YYYY-MM-DD"),
          max: W7(g)
        }), jsx("div", {
          className: RA,
          children: jsx(HU, {
            dispatch: e.dispatch,
            dropdownShown: e.dropdownShown,
            onChange: t => {
              let i = _$$U2(W7(a), t);
              d(i);
              e.isSharingClarity && u(a, i);
            },
            options: o,
            disabled: 0 === o.length,
            id: "link-expiration-custom-time",
            value: l ? hP(l) : ""
          })
        })]
      }), e.errorMessage && m && jsx("div", {
        className: e.isSharingClarity ? gJ : C9,
        children: jsx("span", {
          children: e.errorMessage
        })
      }), !e.isSharingClarity && jsxs(_$$Y2, {
        horizontalAlignItems: "end",
        spacing: 8,
        width: m ? "fill-parent" : "hug-contents",
        padding: m ? {
          top: 8,
          bottom: 8
        } : {},
        children: [jsx(_$$nR, {
          onClick: () => {
            e.onCancelRequiredExpiration && e.onCancelRequiredExpiration();
            e.setErrorMessage(null);
          },
          className: x7,
          children: _$$tx("file_access_row.expiration.cancel")
        }), jsx($$, {
          className: e.displayState === i0.EDIT_EXP ? B5 : void 0,
          onClick: () => u(a, l),
          disabled: !!e.errorMessage || e.disableSetExpiration,
          dataTestId: "custom-expiration-save",
          children: _$$tx(e.displayState === i0.EDIT_PWD_AND_EXP ? "file_access_row.expiration.set_link_access" : "file_access_row.expiration.set")
        })]
      })]
    }), e.errorMessage && !m && jsx("div", {
      className: e.isSharingClarity ? gJ : C9,
      children: jsx("span", {
        children: e.errorMessage
      })
    })]
  });
}
function i8(e) {
  let [t, i] = useState(e.orgMaxExpirationInHrs.toString());
  let a = e.displayState === i0.EDIT_PWD_AND_EXP;
  let s = t => {
    let i = _$$A5().add(parseInt(t), "hours");
    e.onChangeExpiration(i);
  };
  let o = function (e) {
    let t = [];
    for (let i = 1; i <= e; i++) t.push({
      type: "option",
      key: i.toString(),
      selectedLabel: _$$t("file_access_row.expiration.custom_expiration_options_for_org_enforcement_24hrs_label", {
        num: i
      }),
      text: _$$t("file_access_row.expiration.custom_expiration_options_for_org_enforcement_24hrs", {
        num: i
      })
    });
    return t;
  }(e.orgMaxExpirationInHrs);
  return jsxs(_$$Y2, {
    dataTestId: "custom-expiration-org-24-hr",
    horizontalAlignItems: "start",
    direction: a ? "vertical" : "horizontal",
    children: [jsx(_$$Y2, {
      width: "fill-parent",
      horizontalAlignItems: "stretch",
      padding: e.isSharingClarity ? void 0 : {
        left: 36
      },
      children: jsx("div", {
        className: RA,
        children: jsx(HU, {
          dispatch: e.dispatch,
          dropdownShown: e.dropdownShown,
          onChange: e => {
            i(e);
            s(e);
          },
          options: o,
          id: "link-expiration-custom-time-org-24-hrs",
          value: t
        })
      })
    }), !e.isSharingClarity && jsxs(_$$Y2, {
      horizontalAlignItems: "end",
      spacing: 8,
      width: a ? "fill-parent" : "hug-contents",
      padding: a ? {
        top: 8,
        bottom: 8
      } : {},
      children: [jsx(_$$nR, {
        className: x7,
        onClick: e.onCancelRequiredExpiration,
        children: _$$tx("file_access_row.expiration.cancel")
      }), jsx($$, {
        className: e.displayState === i0.EDIT_EXP ? B5 : void 0,
        onClick: () => s(t),
        disabled: e.disableSetExpiration,
        dataTestId: "custom-expiration-save",
        children: _$$tx(a ? "file_access_row.expiration.set_link_access" : "file_access_row.expiration.set")
      })]
    })]
  });
}
function i9(e) {
  let t = e.orgMaxExpirationInHrs && e.orgMaxExpirationInHrs <= 24;
  let i = e.orgMaxExpirationInHrs && e.orgMaxExpirationInHrs > 24 && e.settingCustomExpiration;
  return jsx("div", {
    className: i && !e.isSharingClarity ? _$$A3 : gY,
    children: jsx(_$$Y2, {
      direction: "vertical",
      children: t ? jsx(i8, {
        ...e,
        orgMaxExpirationInHrs: e.orgMaxExpirationInHrs
      }) : jsx(i7, {
        ...e,
        errorMessage: e.customExpirationErrorMessage,
        setErrorMessage: e.setCustomExpirationErrorMessage
      })
    })
  });
}
let ne = (e, t) => e === FPermissionLevelType.ORG_EDIT && t ? _$$t("permissions_modal.file_share_settings.anyone_in_container_can_edit", {
  containerName: t.name
}) : (e === FPermissionLevelType.ORG_VIEW || e === FViewPermissionType.ORG_VIEW) && t ? _$$t("permissions_modal.file_share_settings.anyone_in_container_can_view", {
  containerName: t.name
}) : _$$t("permissions_modal.file_share_settings.only_invited_people");
function nt(e) {
  let t = wA();
  let i = Um();
  let [s, o] = useState(null);
  let l = e.orgMaxExpirationInHrs ? e.currentTimestamp.clone().add(e.orgMaxExpirationInHrs, "hours") : null;
  let d = l ? cH(l, !0) : Fn(e.currentTimestamp, $j.WEEK);
  let c = e.expiresAt ? _$$A5(e.expiresAt) : d;
  let [u, p] = useState(e.savedExpiration ? Dp.CURRENT : e.orgMaxExpirationInHrs ? Dp.CUSTOM : Dp.WEEK);
  let m = !!(e.orgMaxExpirationInHrs && e.orgMaxExpirationInHrs <= 24);
  let h = !!(e.orgMaxExpirationInHrs && e.orgMaxExpirationInHrs <= 168);
  return jsx(Fragment, {
    children: jsxs(_$$Y2, {
      direction: "vertical",
      children: [jsxs(l6, {
        ariaLabel: _$$t("permissions_modal.link_expirations_select.aria_label"),
        className: "link_expiration_row--dropdownSelector--xvELk select--selectInputExpanded--Lz6m4",
        disabled: e.isBranch || !e.canChangeExpiration,
        dispatch: t,
        dropdownClassName: "link_expiration_row--dropdownContainer--KyWBk",
        dropdownShown: i,
        formatter: {
          format: t => i5(t, e.currentTimestamp, c)
        },
        id: `link-expiration-dropdown-${e.type}`,
        inputClassName: "link_expiration_row--dropdownSelectorTitle--tyV5u",
        onChange: t => {
          if (p(t), t === Dp.WEEK || t === Dp.DAY) {
            let i = Fn(e.currentTimestamp, t);
            e.onChangeExpiration(i);
          } else if (t === Dp.TWENTY_SEC) {
            let t = e.currentTimestamp.clone().add(20, "seconds");
            e.onChangeExpiration(t);
          }
        },
        openBelowTarget: !0,
        property: u,
        children: [e.savedExpiration && jsx(_$$c$, {
          value: Dp.CURRENT,
          height: 28,
          rightLabel: e.savedExpiration && _$$M(_$$A5(e.savedExpiration), !0),
          rightLabelStyle: i2,
          children: i5(Dp.CURRENT, e.currentTimestamp, _$$A5(e.savedExpiration))
        }), e.savedExpiration && jsx(sK, {}), isDevEnvironment() && jsx(_$$c$, {
          value: Dp.TWENTY_SEC,
          height: 28,
          children: i5(Dp.TWENTY_SEC)
        }), jsx(_$$c$, {
          value: Dp.DAY,
          height: 28,
          rightLabel: _$$M(Fn(e.currentTimestamp, Dp.DAY), !0),
          rightLabelStyle: i2,
          disabled: m,
          children: i5(Dp.DAY)
        }), jsx(_$$c$, {
          value: Dp.WEEK,
          height: 28,
          rightLabel: _$$M(Fn(e.currentTimestamp, Dp.WEEK), !0),
          rightLabelStyle: i2,
          disabled: h,
          children: i5(Dp.WEEK)
        }), jsx(sK, {}), jsx(_$$c$, {
          value: Dp.CUSTOM,
          height: 28,
          children: i5(Dp.CUSTOM)
        })]
      }), u === Dp.CUSTOM && jsx(i9, {
        dispatch: t,
        dropdownShown: i,
        customExpirationErrorMessage: s,
        setCustomExpirationErrorMessage: o,
        settingCustomExpiration: u === Dp.CUSTOM,
        defaultExpiration: d,
        orgMaxExpiration: l,
        isSharingClarity: !0,
        ...e
      }), e.expiresAt && e.prevPrivateLinkAccess && jsx("div", {
        className: "link_expiration_row--expirationSubtitle--N0f5P text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: e.orgMaxExpirationInHrs && e.org ? _$$tx("permissions_modal.file_share_settings.org_requires_access_to_end", {
          orgName: e.org.name,
          date: _$$M(d, !0),
          prevLinkAccess: jsx("span", {
            className: i1,
            children: ne(e.prevPrivateLinkAccess, e.org)
          })
        }) : _$$tx("permissions_modal.file_share_settings.expires_on_date", {
          date: _$$M(c, !0),
          prevLinkAccess: jsx("span", {
            className: i1,
            children: ne(e.prevPrivateLinkAccess, e.org)
          })
        })
      })]
    })
  });
}
class nn extends PureComponent {
  render() {
    let e;
    let {
      passwordSetAt,
      wasPasswordSetByCurrentUser,
      passwordSetByUser,
      canResetPassword,
      onReset,
      disabled
    } = this.props;
    let l = passwordSetAt ? jsx(_$$h4, {
      date: passwordSetAt.toUTCString()
    }) : "";
    e = wasPasswordSetByCurrentUser ? _$$tx("permissions.link_password_set_by_current_user", {
      relativePasswordSetAt: l
    }) : passwordSetByUser ? _$$tx("permissions.link_password_set_by_another_user", {
      userHandle: passwordSetByUser.handle,
      relativePasswordSetAt: l
    }) : _$$tx("permissions.link_password_set_without_user", {
      relativePasswordSetAt: l
    });
    return jsxs("p", {
      className: this.props.textClassName || _V,
      "data-testid": "password-info-row",
      children: [e, " ", canResetPassword && jsx($n, {
        variant: "ghost",
        onClick: disabled ? void 0 : onReset,
        disabled,
        children: _$$tx("permissions.link_password_reset")
      })]
    });
  }
}
var nr = (e => (e.UNPROTECTED = "unprotected", e.VIEW = "view", e.EDIT = "edit", e))(nr || {});
function na({
  file: e,
  repo: t,
  org: i,
  workspace: s,
  team: o,
  folder: l,
  sharedContainerSetting: d,
  fileRoles: c,
  currentUser: u
}) {
  let p = wA();
  let g = _$$U();
  let _ = _$$L();
  let b = _$$o();
  let v = HW();
  let I = _$$iZ();
  let E = wN(e.editor_type);
  let x = t ? t.canEdit : e.hasEditRole;
  let S = !!(i && i.bigma_enabled);
  let w = Xm(e);
  let C = w5(o);
  let T = iU({
    file: e,
    org: i,
    team: o
  });
  let k = iG({
    allFileRoles: c,
    file: e
  }).length;
  let R = function ({
    file: e,
    org: t,
    repo: i
  }) {
    let n = (i ? i.link_access : e.link_access) || FPermissionLevelType.INVITE_ONLY;
    t || n !== FPermissionLevelType.ORG_EDIT && n !== FPermissionLevelType.ORG_VIEW || (n = FPermissionLevelType.INVITE_ONLY);
    return {
      discoverable: (i ? i.org_browsable : e.org_browsable) || !1,
      linkAccess: n,
      protoLinkAccess: i ? i.proto_link_access : e.proto_link_access,
      filePasswordEnabled: e.has_file_link_password ?? !1,
      protoPasswordEnabled: e.has_proto_link_password ?? !1
    };
  }({
    file: e,
    org: i,
    repo: t
  });
  let N = function ({
    file: e,
    repo: t,
    org: i,
    currentUser: n
  }) {
    let s = wA();
    let o = e.editor_type !== FFileType.WHITEBOARD && i && i.bigma_enabled ? e.mainFileLinkExpirationConfig?.id ?? "optimistic" : null;
    return useCallback((i, r, a) => {
      t && e.key === t.default_file_key ? s(_$$og({
        repo: {
          ...i,
          id: t.id,
          default_file_key: t.default_file_key
        },
        onError: r,
        onSuccess: a,
        linkExpirationConfigId: o,
        currentUser: n
      })) : s(og({
        file: {
          ...i,
          key: e.key
        },
        onError: r,
        onSuccess: a,
        linkExpirationConfigId: o,
        currentUser: n
      }));
    }, [n, s, e.key, o, t]);
  }({
    file: e,
    repo: t,
    org: i,
    currentUser: u
  });
  let {
    mainFileLinkExpirationConfig,
    viewer_export_restricted,
    key,
    isDraftFileLG,
    name,
    passwordSetAt,
    passwordSetByUser
  } = e;
  let [U, V] = useState(v && null !== R.protoLinkAccess ? p8[R.protoLinkAccess].shareAudience : fb[R.linkAccess].shareAudience);
  let [G, z] = useState(v ? J4.VIEW : fb[R.linkAccess].audienceAccessLevel || J4.VIEW);
  let W = () => v && null !== R.protoLinkAccess ? p8[R.protoLinkAccess].shareAudience === _9.ANYONE : fb[R.linkAccess].shareAudience === _9.ANYONE;
  let [K, Y] = useState(R.discoverable || !1);
  let [q, $] = useState((!!_$$d2(mainFileLinkExpirationConfig) || Q3(d)) && W());
  let [Z, X] = useState(W() ? _$$d2(mainFileLinkExpirationConfig) : null);
  let [Q, J] = useState(!viewer_export_restricted || R.linkAccess === FPermissionLevelType.EDIT);
  let ee = _$$A5();
  let et = W() ? _$$d2(mainFileLinkExpirationConfig) : null;
  let en = v && null !== R.protoLinkAccess ? p8[R.protoLinkAccess].shareAudience : fb[R.linkAccess].shareAudience;
  let er = v ? J4.VIEW : fb[R.linkAccess].audienceAccessLevel || J4.VIEW;
  let [ea, es] = useState(v ? mainFileLinkExpirationConfig?.prevPrivateProtoLinkAccess || null : mainFileLinkExpirationConfig?.prevPrivateLinkAccess || null);
  let eo = x && !(v && fb[R.linkAccess].shareAudience === _9.ANYONE);
  let [el, ed] = useState(v && R.protoPasswordEnabled || R.filePasswordEnabled ? "view" : Cy(d) ? "edit" : "unprotected");
  let ec = useCallback(() => {
    if ("unprotected" === el) {
      if (o && !i && !C) {
        _$$$(p, E, o);
        return;
      }
      d?.autogen_password_controls && eh(_$$b3());
      ed("edit");
    } else {
      if (Cy(d)) return;
      eh(null);
      ed("unprotected");
    }
  }, [p, el, d, i, C, E, o]);
  let [em, eh] = useState(d?.autogen_password_controls ? _$$b3() : null);
  useEffect(() => {
    U === _9.ANYONE && Cy(d) && "unprotected" === el && ed("edit");
  }, [U, d, el]);
  useEffect(() => {
    U === _9.ANYONE && d?.autogen_password_controls && "edit" === el && (null === em || "" === em) && eh(_$$b3());
  }, [U, d, el, em]);
  let eg = useCallback(e => {
    v && e !== J4.VIEW || z(e);
  }, [v]);
  let ef = e => {
    let t;
    let i = _$$d2(mainFileLinkExpirationConfig);
    (v && null !== R.protoLinkAccess ? p8[R.protoLinkAccess].shareAudience : fb[R.linkAccess].shareAudience) === U && i && !Z && (t = null);
    let n = Z && Z !== i && E !== _$$nT.Whiteboard;
    let r = "edit" === el && U === _9.ANYONE ? em : null;
    let a = "unprotected" !== el && U === _9.ANYONE;
    let s = fb[R.linkAccess].shareAudience !== _9.ANYONE && {
      filePasswordEnabled: !1,
      protoPasswordEnabled: a,
      password: e ? void 0 : r
    };
    let o = {
      filePasswordEnabled: a,
      protoPasswordEnabled: U !== _9.ANYONE && R.protoPasswordEnabled || a,
      password: e ? void 0 : r
    };
    return {
      shareAudience: U,
      audienceAccessLevel: G,
      discoverable: U === _9.ORG && K,
      expiresAt: n ? Z.toISOString() : t,
      isPrototype: v,
      viewerExportRestricted: !Q,
      ...(v ? s : o)
    };
  };
  let e_ = () => {
    em && p(lW({
      stringToCopy: em,
      successText: _$$t("permissions_modal.file_share_settings.password_copied_to_clipboard")
    }));
  };
  let eA = e => {
    e_();
    g("File Share Settings Updated", e);
  };
  let ey = () => {
    b(A5.SHARE_SETTINGS);
  };
  let eb = useCallback(() => {
    let e = d?.public_link_controls_max_expiration;
    let t = e ? ee.clone().add(e, "hours") : null;
    return t ? cH(t, !0) : Fn(ee, $j.WEEK);
  }, [d, ee]);
  useEffect(() => {
    U === _9.ANYONE && Q3(d) && !Z && ($(!0), X(eb().toDate()));
  }, [U, d, Z, eb]);
  useEffect(() => {
    en !== U && U === _9.ANYONE && q && (v && R.protoLinkAccess ? es(R.protoLinkAccess) : es(R.linkAccess));
  }, [en, U, q, R.linkAccess, v, R.protoLinkAccess]);
  let ev = x && !(v && fb[R.linkAccess].shareAudience === _9.ANYONE);
  let eI = !(en !== U || er !== G || (R.discoverable || !1) !== K || (!viewer_export_restricted || R.linkAccess === FPermissionLevelType.EDIT) !== Q || (v && R.protoPasswordEnabled || R.filePasswordEnabled) && "unprotected" === el || "edit" === el || et !== Z) || !x || Cy(d) && !em && "edit" === el && U === _9.ANYONE || Bg(d) && U === _9.ANYONE;
  let eE = C || i;
  let ex = E !== _$$nT.Whiteboard && S;
  let ew = Bg(d) || E === _$$nT.Whiteboard && Q3(d);
  let eC = E === _$$nT.Slides && !!o && !i && !C;
  let [eT, ek] = useState(!1);
  let eR = useRef(null);
  useLayoutEffect(() => {
    eR.current?.querySelector("[role][tabindex]")?.focus();
  }, []);
  return jsxs("div", {
    ref: eR,
    style: {
      display: "contents"
    },
    "data-testid": "file-share-settings",
    children: [jsx(ns, {
      editorType: E,
      fileName: name,
      folder: l,
      isDraftFile: isDraftFileLG,
      isPrototype: v,
      libraryInfo: {
        lastPublishedAt: e.last_published_at,
        publishScopeType: e.library_publish_scope_type
      },
      numRoles: k,
      org: i,
      selectedOrgDiscoverable: U === _9.ORG && K,
      team: o,
      workspace: s
    }), jsxs("div", {
      className: _$$QU,
      children: [v && jsx("div", {
        className: VA,
        children: E === _$$nT.Slides ? _$$t("permissions_modal.file_share_settings.any_changes_here_will_only_affect_presentation") : _$$t("permissions_modal.file_share_settings.any_changes_here_will_only_affect_prototype")
      }), jsx("div", {
        className: bV,
        children: _$$t("folder_permissions_modal.who_can_access")
      }), jsx(YU, {
        resourceType: FResourceCategoryType.FILE,
        value: U,
        onChange: e => {
          U === _9.ANYONE && U !== e && (X(null), $(!1), ed("unprotected"), eh(null));
          V(e);
        },
        org: i || void 0,
        audienceAccessLevel: G,
        disabled: !x,
        ...(v ? {
          isPrototype: !0,
          fileShareAudience: fb[R.linkAccess].shareAudience
        } : {
          isPrototype: !1
        }),
        publicLinksBanned: ew,
        searchable: K,
        editorType: E
      }), U !== _9.INVITE_ONLY && !v && jsxs(Fragment, {
        children: [jsx("div", {
          className: bV,
          children: _$$t("folder_permissions_modal.what_can_they_do")
        }), jsx(Iz, {
          selectedPermissionsLevel: G,
          setSelectedPermissionsLevel: eg,
          disabled: !x,
          disableEdit: !(G === J4.EDIT || (i ? !(i.invite_whitelist_guest_invite_setting === Gv.BANNED && U === _9.ANYONE) : !!Oi(o || null, isDraftFileLG)))
        }), jsx("div", {
          className: VA,
          children: G === J4.VIEW ? _$$t("permissions_modal.file_share_settings.can_view_and_comment_on_this_file") : _$$t("permissions_modal.file_share_settings.can_edit_this_file")
        })]
      }), U === _9.ANYONE && !eC && jsx("div", {
        className: _$$ts
      }), U === _9.ANYONE && !eC && jsxs(Fragment, {
        children: [jsx("div", {
          className: bV,
          children: _$$t("permissions_modal.file_share_settings.additional_security")
        }), jsxs("div", {
          className: Fk,
          children: [jsxs("div", {
            className: pi,
            children: [jsx(_$$S2, {
              checked: "unprotected" !== el,
              onChange: ec,
              label: jsx(_$$J2, {
                children: _$$t("permissions_modal.file_share_settings.password_required")
              }),
              disabled: !ev || Cy(d)
            }), "edit" === el && jsxs("button", {
              className: _$$tl2,
              onClick: () => {
                sx("file_password_generated", {
                  user: I?.id,
                  file_key: key
                });
                eh(_$$b3());
                ek(!0);
                setTimeout(() => {
                  ek(!1);
                }, 500);
              },
              children: [jsx(_$$_, {
                className: eT ? Ph : ""
              }), jsx("span", {
                children: _$$t("file_access_row.passwords.generate")
              })]
            })]
          }), "view" === el && jsx(nn, {
            passwordSetAt,
            passwordSetByUser,
            wasPasswordSetByCurrentUser: passwordSetByUser?.id === I?.id,
            canResetPassword: ev,
            onReset: () => ed("edit"),
            textClassName: ER
          }), "edit" === el && jsx("div", {
            className: p3,
            children: jsx(i$, {
              sharedContainerSetting: d,
              password: em,
              onChange: eh,
              inputClassName: d?.autogen_password_controls ? fA : U5,
              userId: I?.id,
              fileKey: key
            })
          }), ex && jsx(_$$S2, {
            checked: q,
            onChange: () => {
              let e = !q;
              (!Q3(d) || e) && (q ? X(null) : q || X(eb().toDate()), $(!q));
            },
            label: jsx(_$$J2, {
              children: q ? _$$t("permissions_modal.file_share_settings.link_expires_in") : _$$t("permissions_modal.file_share_settings.link_expiration")
            }),
            disabled: Q3(d) || !eo
          }), q && ex && i && jsx(nt, {
            canChangeExpiration: eo,
            currentTimestamp: ee,
            disableSetExpiration: !1,
            expirationSetByUser: mainFileLinkExpirationConfig ? mainFileLinkExpirationConfig.setByUser : null,
            expiresAt: Z,
            isBranch: w,
            onChangeExpiration: e => {
              e ? X(e.toDate()) : X(null);
            },
            org: i,
            orgMaxExpirationInHrs: d?.public_link_controls_max_expiration,
            prevPrivateLinkAccess: ea,
            savedExpiration: et,
            type: "file"
          })]
        })]
      }), !v && (eE || U === _9.ORG) && jsxs(Fragment, {
        children: [jsx("div", {
          className: _$$ts
        }), jsx("h3", {
          className: bV,
          children: _$$t("permissions_modal.file_share_settings.advanced")
        }), jsxs("div", {
          className: Fk,
          children: [U === _9.ORG && jsx(_$$S2, {
            checked: K,
            onChange: () => Y(!K),
            label: jsx(_$$J2, {
              children: _$$t("permissions_modal.file_share_settings.discoverable_via_search")
            }),
            disabled: !x
          }), eE && jsx(iM, {
            sharedContainerSetting: d,
            exportEnabled: Q,
            setExportEnabled: J,
            shareAudience: U,
            selectedPermissionsLevel: G,
            hasEditRole: x
          })]
        })]
      })]
    }), jsx("div", {
      className: _$$WZ,
      children: jsxs("div", {
        className: _$$ix,
        children: [jsx(_$$tM, {
          onClick: _,
          children: _$$tx("project_creation.cancel")
        }), jsx(vd, {
          onClick: () => {
            if (v && E !== _$$nT.Slides && T) {
              if (!co(E)) {
                $D(_$$e3.MONETIZATION_UPGRADES, Error("Paywall: Wrong editor type for pro feature"), {
                  extra: {
                    editorType: E,
                    teamId: o?.id,
                    fileKey: key
                  }
                });
                return;
              }
              p(_$$to({
                type: DV,
                data: {
                  team: o || null,
                  editorType: e.editor_type,
                  resource: Bi.PROTOTYPE_SHARING,
                  currentPlan: _$$F.Plan.STARTER,
                  upsellPlan: _$$F.Plan.PRO
                }
              }));
              return;
            }
            if ("unprotected" === el || !o || i || C || E === _$$nT.Slides || _$$$(p, E, o), !em && "edit" === el && U === _9.ANYONE) {
              p(_$$F2.enqueue({
                message: _$$t("permissions_modal.file_share_settings.please_enter_a_password"),
                error: !0
              }));
              return;
            }
            let t = ef();
            let n = ef(!0);
            N(function (e) {
              let t = e.shareAudience;
              let i = e.audienceAccessLevel;
              let n = e.isPrototype;
              let r = lG(t, i);
              let a = t === _9.ORG;
              let s = {
                has_file_link_password: e.filePasswordEnabled,
                has_proto_link_password: e.protoPasswordEnabled,
                password: e.password
              };
              let o = {
                org_audience: a,
                org_browsable: e.discoverable,
                expires_at: e.expiresAt,
                viewer_export_restricted: e.viewerExportRestricted
              };
              let l = r === FPermissionLevelType.INVITE_ONLY ? FPermissionLevelType.INHERIT : r;
              return n ? {
                proto_link_access: l,
                ...o,
                ...s
              } : {
                link_access: l,
                override_proto_link_access: !0,
                ...o,
                ...s
              };
            }(t), ey, () => eA(n));
            _();
          },
          disabled: eI,
          children: _$$tx("team_view.team_permissions_modal.save")
        })]
      })
    })]
  });
}
function ns(e) {
  let t = !!e.libraryInfo.lastPublishedAt;
  let i = e.libraryInfo?.publishScopeType === FContainerType.ORG;
  let r = e.libraryInfo?.publishScopeType === FContainerType.WORKSPACE;
  if (t && (i || r) && !e.selectedOrgDiscoverable) {
    let t = null;
    i ? t = _$$tx("file_permissions_modal.library_warning_banner.everyone_at_org", {
      orgName: e.org?.name
    }) : r && (t = e.workspace?.canView ? _$$tx("file_permissions_modal.library_warning_banner.everyone_at_workspace", {
      workspaceName: e.workspace?.name
    }) : _$$tx("file_permissions_modal.library_warning_banner.everyone_at_this_file_s_workspace"));
    return jsxs(_$$Y2, {
      padding: {
        left: 4,
        right: 8,
        top: 8,
        bottom: 8
      },
      direction: "horizontal",
      backgroundColor: "warning-tertiary",
      spacing: 0,
      dataTestId: "file-share-settings-library-warning-banner",
      children: [jsx("div", {
        className: _$$G,
        children: jsx(_$$R4, {
          className: _$$s.flexShrink0.$
        })
      }), jsx("div", {
        children: _$$tx("file_permissions_modal.library_warning_banner.share_settings_will_change_library_publish_audience", {
          originalShareAudience: jsx(_$$E3, {
            fontWeight: "semi-bold",
            children: t
          }),
          newShareAudience: jsx(_$$E3, {
            fontWeight: "semi-bold",
            children: _$$tx("file_permissions_modal.library_warning_banner.everyone_at_team", {
              teamName: e.team?.name
            })
          })
        })
      })]
    });
  }
  if (!e.isDraftFile || e.isPrototype) {
    let t = e.folder ? _$$tx("permissions_modal.file_share_settings.these_settings_won't_apply_to", {
      numPeople: _$$t("permissions_modal.file_share_settings.num_people", {
        num: e.numRoles
      }),
      projectName: e.folder.name
    }) : _$$tx("permissions_modal.file_share_settings.these_settings_won't_apply_to_no_project", {
      numPeople: _$$t("permissions_modal.file_share_settings.num_people", {
        num: e.numRoles
      }),
      fileName: e.fileName
    });
    return jsxs("div", {
      className: HL,
      "data-testid": "file-share-settings-info-banner",
      children: [jsx("div", {
        className: _$$G,
        children: jsx(_$$B2, {})
      }), e.isPrototype ? e.editorType === _$$nT.Slides ? _$$tx("permissions_modal.file_share_settings.these_settings_won't_apply_to_presentation") : _$$tx("permissions_modal.file_share_settings.these_settings_won't_apply_to_prototype") : t]
    });
  }
  return null;
}
function nc(e) {
  let t = wA();
  let i = Xr(ti);
  return jsx(fu, {
    name: "google_device_screenshare_disclaimer_modal",
    children: jsxs("div", {
      className: _$$s.flex.flexColumn.$,
      children: [jsx("img", {
        src: tp,
        alt: _$$t("file_permissions_modal.google_confirmation_modal.image_alt_text"),
        className: _$$s.wFull.$
      }), jsxs("div", {
        className: _$$s.p16.$,
        children: [jsx("div", {
          className: _$$s.colorTextSecondary.pb8.$,
          children: _$$tx("file_permissions_modal.google_confirmation_modal.subtext", {
            link: jsx(L0, {
              target: "_blank",
              rel: "noopener",
              href: "",
              style: _$$sx.add({
                color: "var(--color-text-figjam)",
                cursor: "pointer",
                userSelect: "auto"
              }).$,
              children: _$$tx("file_permissions_modal.google_confirmation_modal.here")
            })
          })
        }), jsx($y, {
          variant: "brand",
          children: jsx(_$$Q, {
            title: _$$tx("file_permissions_modal.google_confirmation_modal.subtitle"),
            children: _$$tx("file_permissions_modal.google_confirmation_modal.description")
          })
        }), jsx("div", {
          className: _$$s.flex.justifyEnd.pt16.$,
          children: jsx($z, {
            onClick: () => {
              i(!0);
              t(Lo());
              e.onSubmit();
            },
            children: _$$tx("file_permissions_modal.google_confirmation_modal.confirm_text")
          })
        })]
      })]
    })
  });
}
var ny = nA;
function nk({
  users: e
}) {
  return 0 === e.length ? null : jsxs("div", {
    className: "x78zum5 x1q0g3np x6s0dn4 x167g77z",
    children: [jsx(_$$Y2, {
      verticalAlignItems: "center",
      spacing: "-4px",
      horizontalAlignItems: "start",
      width: "hug-contents",
      children: e.slice(0, 3).map(e => jsx(Ro, {
        className: _$$s.borderBox.relative.b1.colorBorderBg.$,
        entity: e,
        size: Pf.MEDIUM
      }, e.id))
    }), jsx("div", {
      className: "x1n0bwc9",
      children: function (e) {
        if (0 === e.length) return null;
        switch (e.length) {
          case 1:
            return _$$t("community.access_needed_to_publish_in_org_modal.org_admins.one_admin", {
              orgAdminName: e[0].name
            });
          case 2:
            return _$$t("community.access_needed_to_publish_in_org_modal.org_admins.two_admins", {
              orgAdmin1Name: e[0].name,
              orgAdmin2Name: e[1].name
            });
          case 3:
            return _$$t("community.access_needed_to_publish_in_org_modal.org_admins.three_admins", {
              orgAdmin1Name: e[0].name,
              orgAdmin2Name: e[1].name,
              orgAdmin3Name: e[2].name
            });
          default:
            return _$$t("community.access_needed_to_publish_in_org_modal.org_admins.more_than_three_admins", {
              orgAdmin1Name: e[0].name,
              orgAdmin2Name: e[1].name,
              otherAdminsCount: e.length - 2
            });
        }
      }(e)
    })]
  });
}
let nR = Ju(function () {
  let e = wA();
  let t = useCallback(() => e(Ce()), [e]);
  let i = d4(e => e.currentUserOrgId);
  let [s] = IT(Eh.OrgAdminsQuery({
    orgId: i
  }), {
    enabled: !!i
  });
  let o = hS({
    open: !0,
    onClose: t
  });
  return "loaded" !== s.status ? null : jsx(bL, {
    manager: o,
    width: "md",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: _$$t("community.access_needed_to_publish_in_org_modal.title")
        })
      }), jsx(_$$nB, {
        children: jsxs("div", {
          className: "x78zum5 xdt5ytf xou54vl",
          children: [_$$tx("community.access_needed_to_publish_in_org_modal.body"), jsx(nk, {
            users: s.data
          })]
        })
      }), jsx(wi, {
        children: jsx(jk, {
          children: jsx(_$$N2.Button, {
            variant: "secondary",
            href: _$$M2,
            newTab: !0,
            children: _$$t("general.learn_more")
          })
        })
      })]
    })
  });
}, "AccessNeededToPublishInOrgModal");
let nN = Ju(function () {
  let e = wA();
  let t = q5();
  let i = useCallback(() => e(Ce()), [e]);
  let s = useCallback(() => {
    t?.key && (i(), e(YK({
      type: {
        type: MM
      },
      data: {
        fileKey: t.key
      }
    })));
  }, [e, t?.key, i]);
  let o = hS({
    open: !0,
    onClose: i
  });
  return jsx(bL, {
    manager: o,
    width: "md",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: _$$t("community.sites_publish_required_modal.title")
        })
      }), jsx(_$$nB, {
        children: _$$t("community.sites_publish_required_modal.body")
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            variant: "secondary",
            onClick: i,
            children: _$$t("general.cancel")
          }), jsx($n, {
            variant: "primary",
            onClick: s,
            children: _$$t("community.sites_publish_required_modal.publish_button")
          })]
        })
      })]
    })
  });
}, "SitesPublishRequiredModal");
let n2 = Ju(function ({
  hubFile: e,
  confirmationTitle: t,
  content: i,
  confirmText: s,
  redirectLink: o,
  onSuccess: l,
  onError: d
}) {
  let u = wA();
  let p = Xr(pz);
  let [m, g] = useState(!1);
  let {
    beforeUnpublishHubFile,
    onUnpublishHubFileRedirectLink,
    onUnpublishHubFileSuccess,
    onUnpublishHubFileError
  } = useMemo(() => cX(e) ? {
    beforeUnpublishHubFile: async () => {
      p(_$$o2.HUBFILE);
      zl.set(UM, {
        state: F4.UNPUBLISH_HUB_FILE_INITIATED
      });
      Ez5?.canvasGrid().updateSourceLibraryKey(_$$l(""));
      await u(ZS({
        publishingMode: _$$o2.HUBFILE,
        unpublishAll: !0,
        savepointDescription: "slide template unpublish",
        hubFileId: e.id,
        ...ke()
      }));
    },
    onUnpublishHubFileRedirectLink: void 0,
    onUnpublishHubFileSuccess: () => {
      br(u);
    },
    onUnpublishHubFileError: () => {
      U7(u);
      zl.set(UM, {
        state: F4.UNPUBLISH_TEMPLATE_ERRORED
      });
    }
  } : e.viewer_mode === FTemplateCategoryType.COOPER_TEMPLATE_FILE && getFeatureFlags().cooper_publish_to_cmty ? {
    beforeUnpublishHubFile: async () => {
      p(_$$o2.HUBFILE);
      await u(ZS({
        publishingMode: _$$o2.HUBFILE,
        unpublishAll: !0,
        savepointDescription: "cooper hub file unpublish",
        hubFileId: e.id,
        ...sG()
      }));
    },
    onUnpublishHubFileRedirectLink: void 0,
    onUnpublishHubFileSuccess: l,
    onUnpublishHubFileError: d
  } : {
    beforeUnpublishHubFile: void 0,
    onUnpublishHubFileRedirectLink: o,
    onUnpublishHubFileSuccess: l,
    onUnpublishHubFileError: d
  }, [u, e, d, l, o, p]);
  return jsx(fu, {
    name: "Community Unpublish Confirmation Modal",
    children: jsx(yX, {
      isLoading: m,
      confirmationTitle: t,
      content: i,
      confirmText: s,
      cancelText: _$$t("general.cancel"),
      hideCancel: m,
      onConfirm: async () => {
        g(!0);
        await beforeUnpublishHubFile?.();
        u(_$$ax({
          hubFileId: e.id,
          redirectLink: onUnpublishHubFileRedirectLink,
          onSuccess: async () => {
            await onUnpublishHubFileSuccess?.();
            u(Ce());
            g(!1);
          },
          onError: async () => {
            await onUnpublishHubFileError?.();
            u(Ce());
            g(!1);
          }
        }));
      },
      hideOnConfirm: !1,
      destructive: !0
    })
  });
});
function n7() {
  return jsxs("svg", {
    width: "460",
    height: "276",
    viewBox: "0 0 460 276",
    fill: "none",
    children: [jsxs("g", {
      clipPath: "url(#clip0_1753_14696)",
      children: [jsx("rect", {
        width: "460",
        height: "276",
        fill: "var(--color-bg-component-pressed, #6400CC)"
      }), jsx("path", {
        d: "M332 116L364 135.8V173.2L332 193L300 173.2V135.8L332 116Z",
        fill: "var(--color-bg-component-pressed, #6400CC)",
        stroke: "#FF8577",
        strokeWidth: "2"
      }), jsx("path", {
        d: "M432.5 103L468.44 165.25H396.56L432.5 103Z",
        fill: "var(--color-bg-component-pressed, #6400CC)",
        stroke: "var(--color-text-oncomponent, white)",
        strokeOpacity: "0.4",
        strokeWidth: "2"
      }), jsx("ellipse", {
        cx: "380.5",
        cy: "79",
        rx: "31.5",
        ry: "32",
        fill: "var(--color-bg-component-pressed, #6400CC)",
        stroke: "var(--color-text-oncomponent, white)",
        strokeOpacity: "0.4",
        strokeWidth: "2"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M500 6.566C500 -2.58315 492.583 -10 483.434 -10L439.258 -10C430.109 -10 422.692 -2.58315 422.692 6.566C422.692 15.7063 430.094 23.1176 439.231 23.132C430.094 23.1464 422.692 30.5577 422.692 39.698C422.692 48.8471 430.109 56.264 439.258 56.264H483.434C492.583 56.264 500 48.8471 500 39.698C500 30.5577 492.597 23.1464 483.461 23.132C492.597 23.1176 500 15.7063 500 6.566Z",
        fill: "var(--color-bg-component-pressed, #6400CC)"
      }), jsx("path", {
        d: "M483.434 -10V-9V-10ZM439.258 -10V-11V-10ZM439.231 23.132L439.233 24.132V22.132L439.231 23.132ZM483.461 23.132L483.459 22.132L483.459 24.132L483.461 23.132ZM483.434 -9C492.031 -9 499 -2.03086 499 6.566H501C501 -3.13543 493.135 -11 483.434 -11V-9ZM439.258 -9L483.434 -9V-11L439.258 -11V-9ZM423.692 6.566C423.692 -2.03087 430.661 -9 439.258 -9V-11C429.556 -11 421.692 -3.13544 421.692 6.566H423.692ZM439.233 22.132C430.648 22.1185 423.692 15.1545 423.692 6.566H421.692C421.692 16.258 429.541 24.1167 439.23 24.132L439.233 22.132ZM423.692 39.698C423.692 31.1094 430.648 24.1455 439.233 24.132L439.23 22.132C429.541 22.1472 421.692 30.0059 421.692 39.698H423.692ZM439.258 55.264C430.661 55.264 423.692 48.2948 423.692 39.698H421.692C421.692 49.3994 429.556 57.264 439.258 57.264V55.264ZM483.434 55.264H439.258V57.264H483.434V55.264ZM499 39.698C499 48.2948 492.031 55.264 483.434 55.264V57.264C493.135 57.264 501 49.3994 501 39.698H499ZM483.459 24.132C492.044 24.1455 499 31.1094 499 39.698H501C501 30.0059 493.151 22.1472 483.462 22.132L483.459 24.132ZM499 6.566C499 15.1545 492.044 22.1185 483.459 22.132L483.462 24.132C493.151 24.1167 501 16.258 501 6.566H499Z",
        fill: "var(--color-text-oncomponent, white)",
        fillOpacity: "0.4"
      }), jsx("path", {
        d: "M369 204.009V203.009H368V204.009H369ZM369 259.509H368V260.509H369V259.509ZM406 247.104L406.833 246.55L406 245.298L405.167 246.55L406 247.104ZM443 259.509V260.509H444V259.509H443ZM443 204.009H444V203.009L443 203.009V204.009ZM429.125 204.009V205.009V204.009ZM406 216.414L405.167 216.968L406 218.22L406.833 216.968L406 216.414ZM369 205.009H382.875V203.009H369V205.009ZM370 259.509V204.009H368V259.509H370ZM382.875 258.509H369V260.509H382.875V258.509ZM405.167 246.55C400.373 253.76 392.179 258.509 382.875 258.509V260.509C392.876 260.509 401.684 255.402 406.833 247.657L405.167 246.55ZM429.125 258.509C419.822 258.509 411.627 253.76 406.833 246.55L405.167 247.657C410.316 255.402 419.124 260.509 429.125 260.509V258.509ZM443 258.509H429.125V260.509H443V258.509ZM442 204.009V259.509H444V204.009H442ZM429.125 205.009L443 205.009V203.009L429.125 203.009V205.009ZM406.833 216.968C411.627 209.757 419.822 205.009 429.125 205.009V203.009C419.124 203.009 410.316 208.116 405.167 215.86L406.833 216.968ZM382.875 205.009C392.179 205.009 400.373 209.757 405.167 216.968L406.833 215.86C401.684 208.116 392.876 203.009 382.875 203.009V205.009Z",
        fill: "var(--color-text-oncomponent, white)",
        fillOpacity: "0.4"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M97.5002 236.875L97.5002 223L42 223L42 236.875C42 246.527 46.928 255.029 54.4052 260C46.928 264.972 42 273.473 42 283.125L42 297L97.5002 297L97.5002 283.125C97.5002 273.473 92.5722 264.972 85.095 260C92.5722 255.029 97.5002 246.527 97.5002 236.875Z",
        fill: "var(--color-bg-component-pressed, #6400CC)"
      }), jsx("path", {
        d: "M97.5002 223L98.5002 223L98.5002 222L97.5002 222L97.5002 223ZM42 223L42 222L41 222L41 223L42 223ZM54.4052 260L54.9589 260.833L56.2114 260L54.9589 259.167L54.4052 260ZM42 297L41 297L41 298L42 298L42 297ZM97.5002 297L97.5002 298L98.5002 298L98.5002 297L97.5002 297ZM97.5002 283.125L96.5002 283.125L97.5002 283.125ZM85.095 260L84.5413 259.167L83.2889 260L84.5413 260.833L85.095 260ZM96.5002 223L96.5002 236.875L98.5002 236.875L98.5002 223L96.5002 223ZM42 224L97.5002 224L97.5002 222L42 222L42 224ZM43 236.875L43 223L41 223L41 236.875L43 236.875ZM54.9589 259.167C47.7486 254.373 43 246.179 43 236.875L41 236.875C41 246.876 46.1074 255.684 53.8516 260.833L54.9589 259.167ZM43 283.125C43 273.822 47.7486 265.627 54.9589 260.833L53.8516 259.167C46.1074 264.316 41 273.124 41 283.125L43 283.125ZM43 297L43 283.125L41 283.125L41 297L43 297ZM97.5002 296L42 296L42 298L97.5002 298L97.5002 296ZM96.5002 283.125L96.5002 297L98.5002 297L98.5002 283.125L96.5002 283.125ZM84.5413 260.833C91.7516 265.627 96.5002 273.822 96.5002 283.125L98.5002 283.125C98.5002 273.124 93.3928 264.316 85.6486 259.167L84.5413 260.833ZM96.5002 236.875C96.5002 246.179 91.7516 254.373 84.5413 259.167L85.6486 260.833C93.3928 255.684 98.5002 246.876 98.5002 236.875L96.5002 236.875Z",
        fill: "var(--color-text-oncomponent, white)",
        fillOpacity: "0.4"
      }), jsx("path", {
        d: "M349.364 207L343 173L371 190L357 193.923L349.364 207Z",
        fill: "var(--color-bg-component-pressed, #6400CC)",
        stroke: "#FF8577",
        strokeWidth: "2",
        strokeLinecap: "square"
      }), jsx("path", {
        d: "M218.5 244L254.44 306.25H182.56L218.5 244Z",
        fill: "var(--color-bg-component-pressed, #6400CC)",
        stroke: "var(--color-text-oncomponent, white)",
        strokeOpacity: "0.4",
        strokeWidth: "2"
      }), jsx("ellipse", {
        cx: "152.5",
        cy: "223",
        rx: "31.5",
        ry: "32",
        fill: "var(--color-bg-component-pressed, #6400CC)",
        stroke: "var(--color-text-oncomponent, white)",
        strokeOpacity: "0.4",
        strokeWidth: "2"
      }), jsx("path", {
        d: "M256.434 137V138V137ZM212.258 137V136V137ZM212.232 170.132L212.233 171.132V169.132L212.232 170.132ZM256.461 170.132L256.459 169.132L256.459 171.132L256.461 170.132ZM256.434 138C265.031 138 272 144.969 272 153.566H274C274 143.865 266.136 136 256.434 136V138ZM212.258 138L256.434 138V136L212.258 136V138ZM196.692 153.566C196.692 144.969 203.662 138 212.258 138V136C202.557 136 194.692 143.865 194.692 153.566H196.692ZM212.233 169.132C203.648 169.118 196.692 162.155 196.692 153.566H194.692C194.692 163.258 202.542 171.117 212.23 171.132L212.233 169.132ZM196.692 186.698C196.692 178.109 203.648 171.145 212.233 171.132L212.23 169.132C202.542 169.147 194.692 177.006 194.692 186.698H196.692ZM212.258 202.264C203.662 202.264 196.692 195.295 196.692 186.698H194.692C194.692 196.399 202.557 204.264 212.258 204.264V202.264ZM256.434 202.264H212.258V204.264H256.434V202.264ZM272 186.698C272 195.295 265.031 202.264 256.434 202.264V204.264C266.136 204.264 274 196.399 274 186.698H272ZM256.459 171.132C265.045 171.145 272 178.109 272 186.698H274C274 177.006 266.151 169.147 256.463 169.132L256.459 171.132ZM272 153.566C272 162.155 265.045 169.118 256.459 169.132L256.463 171.132C266.151 171.117 274 163.258 274 153.566H272Z",
        fill: "var(--color-text-oncomponent, white)",
        fillOpacity: "0.4"
      }), jsx("rect", {
        x: "273",
        y: "208",
        width: "58",
        height: "92",
        rx: "29",
        stroke: "var(--color-text-oncomponent, white)",
        strokeOpacity: "0.4",
        strokeWidth: "2"
      })]
    }), jsx("defs", {
      children: jsx("clipPath", {
        id: "clip0_1753_14696",
        children: jsx("rect", {
          width: "460",
          height: "276",
          fill: "var(--color-text-oncomponent, white)",
          fillOpacity: "0.4"
        })
      })
    })]
  });
}
function n8() {
  return jsxs("svg", {
    width: "460",
    height: "276",
    viewBox: "0 0 460 276",
    fill: "none",
    children: [jsxs("g", {
      clipPath: "url(#clip0_2223_6130)",
      children: [jsx("rect", {
        width: "460",
        height: "276",
        fill: "#F24822"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M439.258 -9C430.661 -9 423.692 -2.03087 423.692 6.566C423.692 15.1545 430.648 22.1185 439.233 22.132V24.132C430.648 24.1455 423.692 31.1094 423.692 39.698C423.692 48.2948 430.661 55.264 439.258 55.264H483.434C492.031 55.264 499 48.2948 499 39.698C499 31.1094 492.044 24.1455 483.459 24.132L483.459 22.132C492.044 22.1185 499 15.1545 499 6.566C499 -2.03086 492.031 -9 483.434 -9L439.258 -9ZM421.692 6.566C421.692 -3.13544 429.556 -11 439.258 -11L483.434 -11C493.135 -11 501 -3.13543 501 6.566C501 14.2138 496.112 20.7202 489.291 23.132C496.112 25.5438 501 32.0501 501 39.698C501 49.3994 493.135 57.264 483.434 57.264H439.258C429.556 57.264 421.692 49.3994 421.692 39.698C421.692 32.0501 426.579 25.5438 433.401 23.132C426.579 20.7202 421.692 14.2138 421.692 6.566ZM350 79C350 61.8643 363.67 48 380.5 48C397.33 48 411 61.8643 411 79C411 96.1357 397.33 110 380.5 110C363.67 110 350 96.1357 350 79ZM380.5 46C362.536 46 348 60.7895 348 79C348 97.2105 362.536 112 380.5 112C398.464 112 413 97.2105 413 79C413 60.7895 398.464 46 380.5 46ZM433.366 102.5L432.5 101L431.634 102.5L395.694 164.75L394.828 166.25H396.56H468.44H470.172L469.306 164.75L433.366 102.5ZM432.5 105L466.708 164.25H398.292L432.5 105ZM406.833 216.968C411.627 209.757 419.822 205.009 429.125 205.009H442V258.509H429.125C419.822 258.509 411.627 253.76 406.833 246.55L406 245.298L405.167 246.55C400.373 253.76 392.179 258.509 382.875 258.509H370V205.009H382.875C392.178 205.009 400.373 209.757 405.167 216.968L406 218.22L406.833 216.968ZM429.125 203.009C419.644 203.009 411.236 207.599 406 214.674C400.764 207.599 392.356 203.009 382.875 203.009H369H368V204.009V259.509V260.509H369H382.875C392.356 260.509 400.765 255.919 406 248.844C411.236 255.919 419.644 260.509 429.125 260.509H443H444V259.509V204.009V203.009H443H429.125ZM96.5003 283.125C96.5003 273.822 91.7518 265.627 84.5416 260.833L83.2892 260L84.5416 259.167C91.7518 254.373 96.5003 246.178 96.5003 236.875L96.5003 224H43L43 236.875C43 246.178 47.7485 254.373 54.9587 259.167L56.2111 260L54.9587 260.833C47.7485 265.627 43 273.822 43 283.125L43 296H96.5003V283.125ZM86.8355 260C93.9104 265.236 98.5003 273.644 98.5003 283.125V297V298H97.5003H42H41L41 297L41 283.125C41 273.644 45.5899 265.236 52.6648 260C45.5899 254.764 41 246.356 41 236.875L41 223L41 222H42H97.5003H98.5003V223V236.875C98.5003 246.356 93.9104 254.764 86.8355 260ZM219.366 243.5L218.5 242L217.634 243.5L181.694 305.75L180.828 307.25H182.56H254.44H256.172L255.306 305.75L219.366 243.5ZM218.5 246L252.708 305.25H184.292L218.5 246ZM152.5 192C135.67 192 122 205.864 122 223C122 240.136 135.67 254 152.5 254C169.33 254 183 240.136 183 223C183 205.864 169.33 192 152.5 192ZM120 223C120 204.79 134.536 190 152.5 190C170.464 190 185 204.79 185 223C185 241.21 170.464 256 152.5 256C134.536 256 120 241.21 120 223ZM196.692 153.566C196.692 144.969 203.662 138 212.258 138H256.434C265.031 138 272 144.969 272 153.566C272 162.155 265.045 169.118 256.459 169.132V171.132C265.045 171.145 272 178.109 272 186.698C272 195.295 265.031 202.264 256.434 202.264H212.258C203.662 202.264 196.692 195.295 196.692 186.698C196.692 178.109 203.648 171.145 212.233 171.132V169.132C203.648 169.118 196.692 162.155 196.692 153.566ZM212.258 136C202.557 136 194.692 143.865 194.692 153.566C194.692 161.214 199.58 167.72 206.402 170.132C199.58 172.544 194.692 179.05 194.692 186.698C194.692 196.399 202.557 204.264 212.258 204.264H256.434C266.136 204.264 274 196.399 274 186.698C274 179.05 269.113 172.544 262.291 170.132C269.113 167.72 274 161.214 274 153.566C274 143.865 266.136 136 256.434 136H212.258ZM197.125 339.009C187.822 339.009 179.627 343.757 174.833 350.968L174 352.22L173.167 350.968C168.373 343.758 160.178 339.009 150.875 339.009H138V392.509H150.875C160.179 392.509 168.373 387.761 173.167 380.55L174 379.298L174.833 380.55C179.627 387.761 187.822 392.509 197.125 392.509H210V339.009H197.125ZM174 348.674C179.236 341.599 187.644 337.009 197.125 337.009H211H212V338.009V393.509V394.509H211H197.125C187.644 394.509 179.236 389.919 174 382.844C168.765 389.919 160.356 394.509 150.875 394.509H137H136V393.509V338.009V337.009H137H150.875C160.356 337.009 168.764 341.599 174 348.674ZM302 207C285.431 207 272 220.431 272 237V271C272 287.569 285.431 301 302 301C318.569 301 332 287.569 332 271V237C332 220.431 318.569 207 302 207ZM274 237C274 221.536 286.536 209 302 209C317.464 209 330 221.536 330 237V271C330 286.464 317.464 299 302 299C286.536 299 274 286.464 274 271V237Z",
        fill: "#BD2915"
      }), jsx("path", {
        d: "M332 116L364 135.8V173.2L332 193L300 173.2V135.8L332 116Z",
        stroke: "white",
        strokeOpacity: "0.8",
        strokeWidth: "2"
      }), jsx("path", {
        d: "M349.364 207L343 173L371 190L357 193.923L349.364 207Z",
        fill: "#F24822"
      }), jsx("path", {
        d: "M343 173L343.519 172.145L341.605 170.983L342.017 173.184L343 173ZM349.364 207L348.381 207.184L348.874 209.821L350.227 207.504L349.364 207ZM357 193.923L356.73 192.96L356.341 193.069L356.136 193.419L357 193.923ZM371 190L371.27 190.963L373.489 190.341L371.519 189.145L371 190ZM342.017 173.184L348.381 207.184L350.347 206.816L343.983 172.816L342.017 173.184ZM350.227 207.504L357.864 194.427L356.136 193.419L348.5 206.496L350.227 207.504ZM357.27 194.886L371.27 190.963L370.73 189.037L356.73 192.96L357.27 194.886ZM371.519 189.145L343.519 172.145L342.481 173.855L370.481 190.855L371.519 189.145Z",
        fill: "white",
        fillOpacity: "0.8"
      })]
    }), jsx("defs", {
      children: jsx("clipPath", {
        id: "clip0_2223_6130",
        children: jsx("rect", {
          width: "460",
          height: "276",
          fill: "white"
        })
      })
    })]
  });
}
function n9() {
  return jsxs("svg", {
    width: "460",
    height: "276",
    viewBox: "0 0 460 276",
    fill: "none",
    children: [jsxs("g", {
      clipPath: "url(#clip0_616_14544)",
      children: [jsx("rect", {
        width: "460",
        height: "276",
        fill: "var(--color-bg-warning, #FFC107)"
      }), jsx("line", {
        x1: "36.5769",
        y1: "-121",
        x2: "36.5769",
        y2: "286.197",
        stroke: "black",
        strokeWidth: "2"
      }), jsx("line", {
        x1: "74.521",
        y1: "264.929",
        x2: "-600.148",
        y2: "264.929",
        stroke: "black",
        strokeWidth: "2"
      }), jsx("line", {
        x1: "74.521",
        y1: "226.875",
        x2: "-600.148",
        y2: "226.875",
        stroke: "black",
        strokeWidth: "2"
      }), jsx("line", {
        x1: "74.521",
        y1: "188.818",
        x2: "-600.148",
        y2: "188.818",
        stroke: "black",
        strokeWidth: "2"
      }), jsx("line", {
        x1: "74.521",
        y1: "150.764",
        x2: "-600.148",
        y2: "150.763",
        stroke: "black",
        strokeWidth: "2"
      }), jsx("line", {
        x1: "74.521",
        y1: "112.706",
        x2: "-600.148",
        y2: "112.706",
        stroke: "black",
        strokeWidth: "2"
      }), jsx("line", {
        x1: "74.521",
        y1: "74.651",
        x2: "-600.148",
        y2: "74.6509",
        stroke: "black",
        strokeWidth: "2"
      }), jsx("rect", {
        x: "-600.231",
        y: "-120.995",
        width: "674.771",
        height: "407.377",
        stroke: "var(--color-text-onwarning, black)",
        strokeWidth: "2"
      }), jsx("rect", {
        x: "72",
        y: "37",
        width: "7",
        height: "252",
        fill: "var(--color-bg-warning, #FFC107)"
      }), jsx("path", {
        d: "M77 33H473",
        stroke: "var(--color-bg-success, #006634)",
        strokeWidth: "2",
        strokeDasharray: "5.9 5.9"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M89.7293 32.1048C92.4519 31.4049 94.465 28.9208 94.465 25.9637C94.465 25.2924 94.3613 24.6456 94.1691 24.0384L97.1154 21.0743L93.0655 17.0001L90.1398 19.9433C89.5186 19.7372 88.8547 19.6256 88.1648 19.6256C85.1281 19.6256 82.5932 21.7871 81.9972 24.6641L79 35.1824L89.7293 32.1048Z",
        fill: "var(--color-bg-warning, #FFC107)"
      }), jsx("path", {
        d: "M89.7293 32.1048L89.4535 31.1435L89.4669 31.1397L89.4803 31.1363L89.7293 32.1048ZM94.1691 24.0384L93.2157 24.3402L93.0329 23.7629L93.4598 23.3334L94.1691 24.0384ZM97.1154 21.0743L97.8246 20.3694L98.5253 21.0743L97.8246 21.7793L97.1154 21.0743ZM93.0655 17.0001L92.3562 16.2951L93.0655 15.5816L93.7747 16.2951L93.0655 17.0001ZM90.1398 19.9433L90.8491 20.6483L90.4126 21.0874L89.8249 20.8924L90.1398 19.9433ZM81.9972 24.6641L82.9765 24.8669L82.969 24.9029L82.959 24.9382L81.9972 24.6641ZM79 35.1824L79.2757 36.1436L77.5448 36.6401L78.0383 34.9083L79 35.1824ZM95.465 25.9637C95.465 29.3845 93.1358 32.2616 89.9782 33.0733L89.4803 31.1363C91.7681 30.5482 93.465 28.4571 93.465 25.9637L95.465 25.9637ZM95.1224 23.7366C95.3452 24.4403 95.465 25.1889 95.465 25.9637L93.465 25.9637C93.465 25.396 93.3773 24.8508 93.2157 24.3402L95.1224 23.7366ZM97.8246 21.7793L94.8783 24.7434L93.4598 23.3334L96.4061 20.3694L97.8246 21.7793ZM93.7747 16.2951L97.8246 20.3694L96.4061 21.7793L92.3562 17.7051L93.7747 16.2951ZM89.4306 19.2383L92.3562 16.2951L93.7747 17.7051L90.8491 20.6483L89.4306 19.2383ZM88.1648 18.6256C88.9631 18.6256 89.7333 18.7548 90.4548 18.9942L89.8249 20.8924C89.3039 20.7195 88.7463 20.6256 88.1648 20.6256L88.1648 18.6256ZM81.018 24.4613C81.7074 21.1334 84.6405 18.6256 88.1648 18.6256L88.1648 20.6256C85.6158 20.6256 83.479 22.4408 82.9765 24.8669L81.018 24.4613ZM82.959 24.9382L79.9617 35.4564L78.0383 34.9083L81.0355 24.3901L82.959 24.9382ZM78.7243 34.2211L89.4535 31.1435L90.005 33.066L79.2757 36.1436L78.7243 34.2211Z",
        fill: "var(--color-text-onwarning, black)"
      }), jsx("path", {
        d: "M79.4761 34.6742L88.1646 25.9641",
        stroke: "var(--color-text-onwarning, black)",
        strokeWidth: "2",
        strokeLinecap: "square"
      }), jsx("ellipse", {
        rx: "1.71822",
        ry: "1.72856",
        transform: "matrix(1 8.74228e-08 8.74228e-08 -1 88.1635 25.9624)",
        fill: "var(--color-text-onwarning, black)"
      }), jsx("line", {
        x1: "74.54",
        y1: "33.8191",
        x2: "-504.254",
        y2: "33.8191",
        stroke: "black",
        strokeWidth: "2"
      }), jsx("circle", {
        cx: "74.476",
        cy: "33.254",
        r: "4.18605",
        transform: "rotate(-4.67176 74.476 33.254)",
        fill: "var(--color-bg-warning, #FFC107)",
        stroke: "var(--color-text-onwarning, black)",
        strokeWidth: "2"
      })]
    }), jsx("defs", {
      children: jsx("clipPath", {
        id: "clip0_616_14544",
        children: jsx("rect", {
          width: "460",
          height: "276",
          fill: "white"
        })
      })
    })]
  });
}
function re({
  openFile: e,
  user: t,
  dispatch: i,
  canvasThumbnailPromise: n,
  beforeShowModal: r
}) {
  if (!e) return;
  r?.();
  let a = () => {
    sx("publish_details_view_open", {
      fileKey: e.key,
      userId: t.id,
      teamId: e.teamId,
      orgId: e.parentOrgId
    });
    i(_$$t4({
      fileKey: e.key,
      isFullscreenOpen: !0,
      entryPoint: k2.EDITOR,
      canvasThumbnailPromise: n ?? Promise.resolve(null)
    }));
  };
  _$$n4(e.editorType) ? _$$a3({
    source: "community-publish-modal",
    onSubmit: a,
    onCancel: () => {
      i(M3({
        view: A5.INVITE
      }));
      i(Lo());
    },
    dispatch: i
  }) : a();
}
class rt extends Component {
  constructor(e) {
    super(e);
    this.publish = () => {
      re({
        openFile: this.props.openFile,
        user: this.props.user,
        dispatch: this.props.dispatch,
        canvasThumbnailPromise: Promise.resolve(this.state.thumbnail),
        beforeShowModal: () => this.setState({
          publishing: !0
        })
      });
    };
    this.onHubFileClick = Gc(e => {
      e.preventDefault();
      e.stopPropagation();
      this.props.editingHubFile && this.props.dispatch(sf({
        view: "communityHub",
        subView: "hubFile",
        hubFileId: this.props.editingHubFile.id
      }));
    });
    this.showUnpublishModal = () => {
      if (!this.props.editingHubFile) return;
      let e = this.isPaid();
      let t = this.props.editingHubFile && AC(this.props.editingHubFile);
      let i = e && !t;
      let n = i ? _$$t("community.hub_files.delist_file_from_community_hub") : this.isSlidesFile() ? _$$t("community.hub_files.unpublish_template") : _$$t("community.hub_files.remove_file_from_community_hub");
      let r = i ? _$$t("community.resource.delisting_this_resource_will_prevent_people_from_discovering_or_purchasing_this_resource") : this.isSlidesFile() ? _$$t("community.hub_files.unpublish_template_description") : _$$t("community.hub_files.unpublishing_this_file_will_remove_it_from_the_community_hub_and_prevent_people_from_finding_and_using_this_file");
      let a = i ? _$$t("community.resource.delist") : _$$t("community.resource.unpublish");
      this.props.dispatch(_$$to({
        type: n2,
        data: {
          hubFile: this.props.editingHubFile,
          confirmationTitle: n,
          content: r,
          confirmText: a
        }
      }));
    };
    this.isPaid = () => !!this.props.editingHubFile?.monetized_resource_metadata;
    this.isRemixedFromPaidFile = () => this.props.remixedFrom && !!this.props.remixedFrom.monetized_resource_metadata;
    this.isSlidesFile = () => this.props.editingHubFile?.viewer_mode === y4I.SLIDE_TEMPLATE;
    this.state = {
      thumbnail: null,
      publishing: !1
    };
  }
  componentWillUnmount() {
    this.state.thumbnail && !this.state.publishing && URL.revokeObjectURL(this.state.thumbnail.url);
  }
  fetchRemixedFromHubFile() {
    this.props.remixedFrom && this.props.dispatch(_$$ts2({
      hubFileId: this.props.remixedFrom.id
    }));
  }
  componentDidMount() {
    this.setThumbnailUrlFromCanvas();
    this.remixPublishingBlocked() || this.fetchRemixedFromHubFile();
  }
  setThumbnailUrlFromCanvas() {
    let e = $T(this.props.openFile, this.props.firstPageId);
    this.setState({
      thumbnail: e
    });
  }
  renderPublishInfoFooter() {
    let e;
    let t;
    let i = this.props.editingHubFile && AC(this.props.editingHubFile);
    let r = this.props.isCommunityBlocked;
    let a = this.props.editingHubFile && this.props.editingHubFile.verification_status === FUserVerificationStatusType.BLOCKED;
    let s = HF(this.props.editingHubFile) ? _$$a2(this.props.editingHubFile).created_at : null;
    let o = HF(this.props.editingHubFile) && s ? _$$t("community.permissions_modal_publish_tab.footer.published_at_timestamp", {
      publish_date: new Date(s)
    }) : "\u2013";
    let l = this.props.user.sharing_restricted;
    let d = this.props.openFileIsTemplate;
    let u = this.props.openFileIsSlidesFile;
    if (a || l || r) {
      let e = r ? getSupportEmail() : "support+restricted@figma.com";
      return jsxs("div", {
        className: HO,
        children: [jsx("div", {
          className: Zq,
          children: jsx(_$$B, {
            svg: _$$A0,
            className: QW
          })
        }), jsx("span", {
          className: mq,
          children: a ? jsx(Fragment, {
            children: _$$tx("community.permissions_modal_publish_tab.footer.your_file_has_not_been_published")
          }) : _$$tx("community.permissions_modal_publish_tab.footer.publish_user_sharing_restricted", {
            supportSharingRestrictedEmail: jsx(_$$N2, {
              href: `mailto:${e}`,
              newTab: !0,
              trusted: !0,
              children: e
            })
          })
        }), a ? jsxs(Fragment, {
          children: [jsx("div", {
            className: O6,
            children: jsx($n, {
              variant: "destructiveSecondary",
              onClick: this.showUnpublishModal,
              children: _$$t("community.permissions_modal_publish_tab.footer.remove")
            })
          }), jsx("a", {
            target: "_blank",
            href: "https://help.figma.com/hc/articles/360038510573-Figma-Community-Guidelines",
            children: jsx($n, {
              variant: "primary",
              children: _$$t("community.permissions_modal_publish_tab.footer.learn_more")
            })
          })]
        }) : jsx("div", {
          children: jsx($n, {
            variant: "primary",
            disabled: !0,
            "data-testid": "community-publish-button",
            children: _$$t("community.resource.publish")
          })
        })]
      });
    }
    return d ? jsxs("div", {
      className: HO,
      children: [jsx("div", {
        className: Zq,
        children: jsx(_$$B, {
          svg: _$$A7,
          className: hz
        })
      }), jsx("span", {
        className: mq,
        children: _$$tx("community.permissions_modal_publish_tab.footer.cannot_publish_default_file")
      }), jsx("div", {
        children: jsx($n, {
          variant: "primary",
          disabled: !0,
          "data-testid": "community-publish-button",
          children: _$$tx("community.resource.publish")
        })
      })]
    }) : this.remixPublishingBlocked() ? jsxs("div", {
      className: HO,
      children: [jsx("div", {
        className: Zq,
        children: jsx(_$$B, {
          svg: _$$A7,
          className: hz
        })
      }), jsx("span", {
        className: mq,
        children: _$$tx("community.permissions_modal_publish_tab.footer.cannot_publish_remix")
      }), jsx("div", {
        children: jsx($n, {
          variant: "primary",
          disabled: !0,
          "data-testid": "community-publish-button",
          children: _$$tx("community.resource.publish")
        })
      })]
    }) : this.isRemixedFromPaidFile() ? jsxs("div", {
      className: HO,
      children: [jsx("div", {
        className: Zq,
        children: jsx(_$$B, {
          svg: _$$A7,
          className: hz
        })
      }), jsx("span", {
        className: mq,
        children: _$$tx("community.permissions_modal_publish_tab.footer.cannot_publish_remix_from_paid_file")
      }), jsx("div", {
        children: jsx($n, {
          variant: "primary",
          disabled: !0,
          "data-testid": "community-publish-button",
          children: _$$tx("community.resource.publish")
        })
      })]
    }) : (e = this.props.editingHubFile && Pg(this.props.editingHubFile) ? _$$t("community.resource.delisted") : i ? _$$t("community.permissions_modal_publish_tab.footer.submitted") : _$$t("community.permissions_modal_publish_tab.footer.last_published"), t = this.isPaid() && !i ? _$$t("community.resource.delist") : _$$t("community.resource.unpublish"), jsx("div", {
      className: HO,
      children: HF(this.props.editingHubFile) && !this.props.canPublishError ? jsxs(Fragment, {
        children: [jsxs("div", {
          className: ZD,
          children: [jsx("div", {
            className: Zq,
            children: jsx(_$$t5, {
              svg: _$$A8,
              fallbackSvg: _$$A9,
              className: Ac
            })
          }), jsxs("p", {
            className: mq,
            children: [e, " ", this.props.editingHubFile && Pg(this.props.editingHubFile) ? "" : o, jsx("br", {}), jsx(_$$N2, {
              href: this.props.hubFileHref,
              onClick: this.onHubFileClick,
              trusted: !0,
              children: this.props.editingHubFile && AC(this.props.editingHubFile) ? _$$tx("community.permissions_modal_publish_tab.footer.view_private_community_page") : _$$tx("community.permissions_modal_publish_tab.footer.view_community_page")
            })]
          })]
        }), jsxs("div", {
          className: Uo,
          children: [!Pg(this.props.editingHubFile) && jsx($n, {
            variant: "destructiveSecondary",
            onClick: this.showUnpublishModal,
            children: t
          }), jsx($n, {
            variant: "primary",
            disabled: this.props.disablePublish,
            onClick: this.publish,
            children: this.isPaid() ? _$$t("community.permissions_modal_publish_tab.footer.make_changes") : _$$t("community.permissions_modal_publish_tab.footer.publish_update")
          })]
        })]
      }) : jsxs(Fragment, {
        children: [jsxs("p", {
          className: mq,
          children: [this.props.canPublishError ? this.props.canPublishError : u ? _$$t("community.permissions_modal_publish_tab.footer.publish_slides_file") : this.props.remixedFrom ? _$$t("community.permissions_modal_publish_tab.footer.publish_remix") : _$$t("community.permissions_modal_publish_tab.footer.publish_file_version_no_remix"), jsxs(_$$N2, {
            href: this.props.canPublishError ? _$$M2 : u ? "https://help.figma.com/hc/articles/25923960876567" : this.props.remixedFrom ? "https://help.figma.com/hc/articles/360038510693-Guide-to-Figma-Community#Remixes" : "https://help.figma.com/hc/articles/360040035974--Publish-a-File-to-the-Community",
            newTab: !0,
            trusted: !0,
            children: ["\xa0", _$$t("general.learn_more")]
          })]
        }), jsx(fu, {
          name: "Community Publish Button",
          children: jsx($z, {
            disabled: !!this.props.canPublishError || !this.state.thumbnail || !!this.props.disablePublish,
            onClick: this.publish,
            "data-testid": "community-publish-button",
            children: _$$t("community.resource.publish")
          })
        })]
      })
    }));
  }
  renderRemixedFrom(e) {
    let t = _$$a2(e);
    return jsxs("div", {
      className: Kz,
      children: [jsx("a", {
        target: "_blank",
        className: oT,
        href: X$(e.id),
        children: t.name
      }), jsxs("div", {
        className: hC,
        children: [" ", _$$tx("community.hub_files.by_author", {
          author: jsx("strong", {
            children: VH(e)
          })
        })]
      })]
    });
  }
  remixPublishingBlocked() {
    return !HF(this.props.editingHubFile) && this.props.remixedFrom;
  }
  isAlreadyPublishedByAnotherUser() {
    let e = this.props.editingHubFile;
    return !this.props.canPublishError && HF(e) && e && e.creator.id !== this.props.user.id;
  }
  getThumbnail(e) {
    return e.thumbnail_url ?? this.state.thumbnail?.url ?? "";
  }
  render() {
    let {
      metadata
    } = this.props.publishingState;
    if (this.props.canPublishError || this.isAlreadyPublishedByAnotherUser() || this.remixPublishingBlocked()) return jsxs(Fragment, {
      children: [jsxs("div", {
        className: N1,
        children: [jsx("div", {
          className: TK,
          children: _$$tx("community.publishing.publish_to_the_figma_community", {
            lineBreak: jsx("br", {})
          })
        }), jsx(n7, {})]
      }), this.renderPublishInfoFooter()]
    });
    if (HF(this.props.editingHubFile)) {
      let t = this.getThumbnail(this.props.editingHubFile);
      let i = this.props.editingHubFile;
      let r = i?.community_publishers?.accepted.length > 0 ? i?.community_publishers?.accepted[0] : null;
      let a = metadata.isPaid ? {
        id: "0",
        badges: [],
        monetized_resource_metadata: {
          id: "0",
          price: _$$ae(metadata.price),
          is_subscription: !1
        }
      } : null;
      let s = getFeatureFlags().cmty_thumbnail_16x9_ar;
      return jsxs("div", {
        children: [jsx("div", {
          className: _$$i3,
          children: jsx("div", {
            className: s ? IH : _$$iA,
            children: jsx(_$$N3, {
              name: metadata.name,
              author: {
                name: r?.name ?? null,
                imgUrl: r?.img_url ?? null
              },
              acceptedPublishers: i?.community_publishers?.accepted,
              thumbnail: t ? {
                type: "image",
                url: t
              } : void 0,
              isCustomThumbnailSet: void 0 !== t,
              metricFooter: {
                viewCount: i?.view_count || 0,
                likeCount: i?.like_count || 0,
                currentUserLiked: this.props.currentUserLiked,
                duplicateCount: i?.duplicate_count || 0,
                isPaid: !!metadata.isPaid
              },
              tileOverlayResource: a
            })
          })
        }), this.renderPublishInfoFooter()]
      });
    }
    return this.isRemixedFromPaidFile() ? jsxs("div", {
      children: [jsx("div", {
        className: N1,
        children: jsxs(Fragment, {
          children: [jsx("div", {
            className: TK,
            children: _$$tx("community.publishing.publish_to_the_figma_community", {
              lineBreak: jsx("br", {})
            })
          }), jsx(n8, {})]
        })
      }), this.renderPublishInfoFooter()]
    }) : jsxs("div", {
      children: [jsx("div", {
        className: N1,
        children: this.props.remixedFrom ? jsxs(Fragment, {
          children: [jsx("div", {
            className: UB,
            children: _$$tx("community.publishing.publish_your_remix_of")
          }), jsx(n9, {}), this.renderRemixedFrom(this.props.remixedFrom)]
        }) : jsxs(Fragment, {
          children: [jsx("div", {
            className: TK,
            children: _$$tx("community.publishing.publish_to_the_figma_community", {
              lineBreak: jsx("br", {})
            })
          }), jsx(n7, {})]
        })
      }), this.renderPublishInfoFooter()]
    });
  }
}
rt.displayName = "FilePermissionsFilePublishTag";
let ri = Ng((e, t) => {
  let i = e.openFile;
  let n = t.editingHubFile;
  let r = e.mirror?.appModel?.pagesList || [];
  let a = r.length > 0 ? r[0].nodeId : "";
  let s = !!e.user && !!e.authedUsers.byId[e.user.id].community_blocked_at;
  let o = e.publishingHubFiles[i.key];
  o && o.metadata || (o = {
    status: oH(o),
    metadata: t.canPublishError ? _$$b4 : ow({
      ...getPermissionsState(e),
      currentUserOrgId: e.currentUserOrgId,
      figFilePublishedAsHubFile: e.figFilePublishedAsHubFile,
      hubFiles: e.hubFiles,
      authedActiveCommunityProfile: e.authedActiveCommunityProfile,
      authedProfilesById: e.authedProfilesById
    }, i.key, !1, !0)
  });
  let l = "";
  if (n) {
    let t = {
      view: "communityHub",
      subView: "hubFile",
      hubFileId: n?.id
    };
    l = Np(e, t);
  }
  return {
    publishingState: o,
    isCommunityBlocked: s,
    openFile: i,
    remixedFrom: e.figFileDuplicatedFromHubFile[i.key] ? _$$M3(e.figFileDuplicatedFromHubFile[i.key].hubFileId, e.hubFiles) : null,
    user: e.user,
    hubFileRemixes: e.hubFileRemixes,
    hubFileHref: l,
    firstPageId: a
  };
})(rt);
function rn(e) {
  let t = wA();
  let i = Pc();
  let s = d4(e => e.modalShown?.type === jS);
  let o = q5();
  let l = o?.trackTags?.isTemplate || !1;
  let d = d4(e => o ? e.figFilePublishedAsHubFile[o.key] : void 0);
  let {
    canPublishAsHubFile,
    reason
  } = Of(o);
  let p = Rs(FBc({
    fileKey: o?.key ?? ""
  }), {
    enabled: !!o
  });
  let h = useMemo(() => "loaded" === p.status && p.data.file?.publishedHubFile ? Jd(p.data.file.publishedHubFile) : null, [p]);
  let {
    publishableComponentNodeIds,
    localComponents
  } = d4(qG(Pn, _$$o2.HUBFILE), c2);
  let _ = (() => {
    if (o?.editorType === _YF.COOPER) {
      let e = PP({
        hasExistingResourceContent: !!h,
        publishableComponentNodeIds,
        localComponents
      });
      return (e?.length ?? 0) > 0;
    }
    return !1;
  })();
  let A = !!_$$W2(d, _$$vt.HUB_FILE).data?.[0];
  let y = o?.editorType === _YF.SLIDES;
  let b = o && _$$W(o.editorType);
  let v = canPublishAsHubFile && !_ && "loading" !== p.status && (!HF(h) || Pg(h)) && b;
  let I = wm(() => o && ny()(o, "key", "teamId", "parentOrgId", "editorType"), [o]);
  useLayoutEffect(() => {
    s && I && v && re({
      openFile: I,
      user: i,
      dispatch: t
    });
  }, [t, s, I, v, i]);
  let E = "NO_ALLOWED_AUTHORS" === reason && b;
  let S = o?.editorType === _YF.SITES && !o?.isPublishedSite;
  return (useLayoutEffect(() => {
    E ? t(_$$to({
      type: nR,
      data: {}
    })) : S && t(_$$to({
      type: nN,
      data: {}
    }));
  }, [t, E, S]), "loading" === p.status || v || E || S) ? jsx("div", {
    className: "file_permissions_modal_base--emptyTabContent--WfF-l"
  }) : jsx(ri, {
    openFileIsTemplate: l,
    openFileIsSlidesFile: y,
    editingHubFile: h,
    currentUserLiked: A,
    canPublishError: Yw(reason) ?? null,
    disablePublish: _,
    ...e
  });
}
var ra = rr;
let ro = "publish_tab--publishTabDisabledText--L2LoK";
let rl = "publish_tab--publishTabHightlighted--h5HId";
let rd = "publish_tab--publishTabLink--D2ciB";
function rc({
  title: e,
  description: t,
  icon: i,
  isPublished: a,
  isDisabled: s,
  onClick: o
}) {
  let l = useId();
  return jsxs("div", {
    id: l,
    className: ra()("publish_tab--publishTabItem--L5RBy", s && "publish_tab--publishTabDisabled--Nyuur"),
    children: [jsxs("div", {
      className: "publish_tab--publishTabIconAndTextContainer--5NEIC",
      children: [jsx("div", {
        className: "publish_tab--publishTabItemIconContainer--OPAAq",
        children: "string" == typeof i ? jsx(_$$B, {
          svg: i,
          className: ra()(a && !s && rl, s && ro)
        }) : i
      }), jsxs("div", {
        children: [jsx("p", {
          className: ra()("publish_tab--publishTabItemTextPrimary--Y7tBp", s ? ro : "publish_tab--publishTabEnabledText--m8bhu", a && !s && rl),
          children: e
        }), jsx("p", {
          className: "publish_tab--publishTabItemTextSecondary--s5QDv",
          children: t
        })]
      })]
    }), jsx(_$$nR2, {
      className: "publish_tab--publishTabUpdateButton--y3Mmm",
      onClick: o,
      disabled: s,
      "aria-describedby": l,
      children: a ? _$$tx("community.publishing.update") : _$$tx("community.publishing.publish")
    })]
  });
}
function rg({
  file: e,
  template: t
}) {
  let i = yy();
  let s = lg();
  let o = wA();
  let l = {
    name: t.publishedByUser?.name || i?.name,
    imgUrl: t.publishedByUser?.imgUrl || i?.img_url
  };
  let d = _R(t.fileKey);
  let u = useMemo(() => t.thumbnailUrl ? {
    type: "image",
    url: t.thumbnailUrl
  } : {
    type: "image",
    ...d,
    sha1: "buffer" in d ? Et(d.buffer) : void 0
  }, [d, t.thumbnailUrl]);
  return jsx(fu, {
    name: _$$e5.TEMPLATE_DETAILS,
    children: jsxs("div", {
      className: "publish_tab--publishedTemplate--nQEjl",
      children: [jsx(_$$N3, {
        name: t.name,
        author: l,
        thumbnail: u,
        isCustomThumbnailSet: !!(t && t.thumbnailGuid)
      }), jsx("div", {
        className: "publish_tab--publishedTemplateSeparator--Xgc4F"
      }), jsxs(_$$Y2, {
        direction: "horizontal",
        horizontalAlignItems: "space-between",
        children: [jsx("div", {
          children: _$$tx("templates.detail.published_time", {
            time: jsx(_$$h4, {
              date: t.updatedAt
            })
          })
        }), jsxs("div", {
          className: "publish_tab--publishedTemplateButtons--BXhdu",
          children: [jsx(s6, {
            onClick: yz(o, t.fileKey),
            children: _$$tx("templates.detail.unpublish_button")
          }), jsx(vd, {
            innerText: "Publish",
            onClick: () => {
              i && YM(o, t.fileKey, s, "published-template-details");
            },
            children: _$$tx("templates.detail.publish_button")
          })]
        })]
      })]
    })
  });
}
function rb() {
  let e = q5();
  let t = _$$iZ();
  let i = J();
  let s = _$$o();
  let o = e?.editorType;
  let [l, d] = useState(null);
  let u = kD();
  let p = !!u;
  let g = e?.publishedHubFile?.publishingStatus === FPublicationStatusType.APPROVED_PUBLIC && e.publishedHubFile || null;
  let f = e?.trackTags?.isTemplate || !1;
  let _ = d4(t => !!(e && t.figFileDuplicatedFromHubFile[e.key]));
  let A = d4(t => e?.parentOrgId && t.orgById[e.parentOrgId] || void 0);
  let b = e?.key;
  let v = Pb(e);
  let I = wA();
  let E = J3();
  let x = JU(E);
  let S = !!Of(e).canPublishAsHubFile;
  let w = useCallback(() => {
    e && _$$x2({
      file: {
        key: e.key,
        name: e.name,
        folder_id: e.folderId,
        team_id: e.teamId,
        editor_type: e.editorType,
        parent_org_id: e.parentOrgId
      },
      dispatch: I
    });
  }, [I, e]);
  let C = useCallback(async () => {
    if (await YW(e)) {
      _$$i$(I);
      return;
    }
    if (o === FFileType.SLIDES) {
      YM(I, b, o, "publish-tab");
      return;
    }
    p || _$$rg(I, b, "publish-tab");
  }, [e, o, p, I, b]);
  let T = Hz({
    figFileKey: e?.key
  });
  return E === kN.NOT_ENABLED ? jsx(rn, {}) : e && b ? (i === A5.PUBLISH_TEMPLATE || "template" === l) && u ? jsx(rg, {
    file: e,
    template: u
  }) : i === A5.PUBLISH_COMMUNITY || "community" === l ? jsx(rn, {}) : jsx(fu, {
    name: _$$e5.SHARE_MODAL_PUBLISH_TAB,
    children: jsxs("div", {
      className: "publish_tab--publishTab--FVuph",
      children: [jsx(rc, {
        title: jsx(rv, {
          publishedTemplate: u,
          publishTemplateStatus: E,
          org: A
        }),
        description: jsx(rI, {
          publishedTemplate: u,
          publishTemplateStatus: E
        }),
        icon: u && x ? _$$A11 : _$$A12,
        isPublished: !!u,
        isDisabled: !x,
        onClick: () => {
          if (x && e && b) {
            if (E === kN.FILE_IN_DRAFTS) {
              w();
              return;
            }
            C();
            d("template");
            s(A5.PUBLISH_TEMPLATE);
          }
        }
      }), jsx(rc, {
        title: jsx(rE, {
          publishedHubFile: g,
          communityPublishEnabled: S,
          isHubFileRemixed: _
        }),
        description: jsx(rx, {
          publishedHubFile: g,
          communityPublishEnabled: S,
          isStarterFile: f,
          isHubFileRemixed: _
        }),
        icon: T.inProgress ? jsx("div", {
          className: _$$s.w32.h32.flex.itemsCenter.justifyCenter.$,
          children: jsx(_$$k2, {
            size: "lg"
          })
        }) : g && S ? _$$A10 : _$$A1,
        isPublished: !!g,
        isDisabled: !S,
        onClick: async () => {
          if (S) {
            if (!g) {
              sx("publish_details_view_open", {
                fileKey: b,
                userId: t?.id,
                teamId: e?.teamId,
                orgId: e?.parentOrgId
              });
              I(_$$t4({
                fileKey: b,
                isFullscreenOpen: !0,
                entryPoint: k2.EDITOR,
                canvasThumbnailPromise: Promise.resolve(v())
              }));
              return;
            }
            (await T.doSetup()) && (d("community"), s(A5.PUBLISH_COMMUNITY));
          }
        }
      })]
    })
  }) : null;
}
let rv = memo(e => {
  let {
    publishedTemplate,
    publishTemplateStatus,
    org
  } = e;
  return publishedTemplate && JU(publishTemplateStatus) ? _$$tx("publishing.templates.menu.title.published_to_org_name", {
    orgName: org?.name
  }) : _$$tx("publishing.templates.menu.title.unpublished");
});
let rI = memo(e => {
  let {
    publishedTemplate,
    publishTemplateStatus
  } = e;
  let r = jsx("a", {
    href: _$$A6,
    target: "_blank",
    className: rd,
    children: _$$tx("publishing.templates.menu.description.disabled.link")
  });
  switch (publishTemplateStatus) {
    case kN.CANNOT_PUBLISH:
      return _$$tx("publishing.templates.menu.description.disabled_edit_permissions", {
        link: r
      });
    case kN.FILE_IN_DRAFTS_CANNOT_MOVE:
      return _$$tx("publishing.templates.menu.description.disabled_delete_permissions", {
        link: r
      });
    case kN.DISABLED_IN_SETTINGS:
      return _$$tx("publishing.templates.menu.description.disabled", {
        link: r
      });
    default:
      vA(JU(publishTemplateStatus));
  }
  if (!publishedTemplate) return _$$tx("publishing.templates.menu.description.unpublished");
  let a = publishedTemplate.publishedByUser?.name;
  return a ? _$$tx("publishing.templates.menu.description.published.v2", {
    time: jsx(_$$h4, {
      date: publishedTemplate.updatedAt
    }),
    name: a
  }) : _$$tx("publishing.templates.menu.description.published_no_name", {
    time: jsx(_$$h4, {
      date: publishedTemplate.updatedAt
    })
  });
});
let rE = memo(e => {
  let {
    publishedHubFile,
    communityPublishEnabled,
    isHubFileRemixed
  } = e;
  return publishedHubFile && communityPublishEnabled ? _$$tx("publishing.community.menu.title.published") : isHubFileRemixed ? _$$tx("publishing.community.menu.title.unpublished_remix") : _$$tx("publishing.community.menu.title.unpublished");
});
let rx = memo(e => {
  let {
    publishedHubFile,
    communityPublishEnabled,
    isStarterFile,
    isHubFileRemixed
  } = e;
  if (!communityPublishEnabled) return isStarterFile ? _$$tx("publishing.community.menu.description.disabled_starter_file") : isHubFileRemixed ? _$$tx("community.permissions_modal_publish_tab.footer.cannot_publish_remix") : _$$tx("publishing.community.menu.description.disabled", {
    link: jsx("a", {
      href: "https://help.figma.com/hc/articles/360041423614--Who-can-publish-Files-and-Plugins-to-the-Community-#organization",
      target: "_blank",
      className: rd,
      children: _$$tx("publishing.templates.menu.description.disabled.link")
    })
  });
  if (!publishedHubFile || !publishedHubFile.publishingStatusUpdatedAt) return _$$tx("publishing.community.menu.description.unpublished_no_remix");
  let s = publishedHubFile.publishedByUser?.name;
  return _$$tx("publishing.templates.menu.description.published.v2", {
    time: jsx(_$$h4, {
      date: publishedHubFile.publishingStatusUpdatedAt
    }),
    name: s
  });
});
function rR({
  file: e,
  repo: t,
  folder: i,
  org: r,
  rolesToDisplay: a,
  isInDraftsFolder: s,
  virtualItems: o,
  forceExpanded: l = !1
}) {
  let d = ee(e);
  let c = _$$X$("RoleRows");
  let u = YY(c).unwrapOr(!1);
  let p = Pc();
  if (!getFeatureFlags().file_share_modal_scroll && !l && a.length > 3) return jsx(KZ, {
    roles: a
  });
  let g = (a, o) => jsx(_$$O, {
    canEditRole: QZ(e.hasEditRole, e, s),
    canMakeAdmin: !1,
    currentOrg: r,
    currentUserOrgId: e.parent_org_id || null,
    isOwnerOfResource: e.isOwner,
    isPrototypeRole: d,
    isStarterTier: u,
    orgDomains: r?.org_domains,
    readOnlyOverrideWarningMessage: DN({
      role: a,
      file: e,
      folder: i,
      isInDraftsFolder: e.isDraftFileLG
    }),
    repo: t,
    resource: {
      type: FResourceCategoryType.FILE,
      file: e,
      isInDraftsFolder: s
    },
    resourceName: e.name,
    role: a,
    user: p,
    virtualRowItem: o
  }, `role-row-${a.id}`);
  return getFeatureFlags().file_share_modal_virtualize && o ? jsx(Fragment, {
    children: o.map(e => {
      let t = a[e.index];
      if (t) return g(t, e);
    })
  }) : jsx(Fragment, {
    children: a.map(e => g(e))
  });
}
let rN = "collaborators_tab--container--HCcDD";
function rP(e) {
  let t = iG({
    allFileRoles: e.fileRoles,
    file: e.file
  });
  let i = useCallback(() => 36, []);
  let a = useRef(null);
  let s = _$$z({
    size: t.length,
    parentRef: a,
    estimateSize: i,
    overscan: 10,
    paddingStart: 0
  });
  return getFeatureFlags().file_share_modal_scroll ? getFeatureFlags().file_share_modal_virtualize ? jsx("div", {
    className: rN,
    ref: a,
    style: {
      maxHeight: "150px",
      overflowY: "auto"
    },
    children: jsx("div", {
      style: {
        height: `${s.totalSize}px`,
        position: "relative"
      },
      children: jsx(rR, {
        ...e,
        forceExpanded: !0,
        rolesToDisplay: t,
        virtualItems: s.virtualItems
      })
    })
  }) : jsx("div", {
    className: rN,
    style: {
      maxHeight: "150px",
      overflowY: "auto"
    },
    children: jsx(rR, {
      ...e,
      forceExpanded: !0,
      rolesToDisplay: t
    })
  }) : getFeatureFlags().file_share_modal_virtualize ? jsx("div", {
    className: rN,
    ref: a,
    children: jsx("div", {
      style: {
        height: `${s.totalSize}px`,
        position: "relative"
      },
      children: jsx(rR, {
        ...e,
        forceExpanded: !0,
        rolesToDisplay: t,
        virtualItems: s.virtualItems
      })
    })
  }) : jsx("div", {
    className: rN,
    children: jsx(rR, {
      ...e,
      forceExpanded: !0,
      rolesToDisplay: t
    })
  });
}
function rD({
  resourceConnection: e
}) {
  return e.hostPlanName && e.connectedPlanName ? jsx("div", {
    className: KN,
    children: jsx(Cs, {
      variant: "brand",
      icon: jsx(_$$L4, {}),
      children: jsx(_$$Q, {
        children: _$$tx("resource_connection.file_is_in_a_connected_project", {
          hostPlanName: jsx("span", {
            className: Cr,
            children: e.hostPlanName
          }),
          connectedPlanName: jsx("span", {
            className: Cr,
            children: e.connectedPlanName
          }),
          connectedProjectLink: jsx(_$$N2, {
            href: "https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects",
            newTab: !0,
            children: _$$t("resource_connection.connected_project_link")
          })
        })
      })
    })
  }) : null;
}
function rM({
  fileKey: e,
  editorType: t,
  licenseType: i
}) {
  let r = wA();
  let {
    getShouldShowCurf,
    getIsEligibleForProvisionalAccess,
    getPlanAndPlanUser
  } = wH({
    folderId: null,
    fileInBrowser: {
      key: e,
      editorType: t
    }
  });
  let u = getShouldShowCurf(i);
  let {
    plan,
    planUser
  } = getPlanAndPlanUser(i);
  let h = jsx("button", {
    className: _$$s.colorTextBrand.bgTransparent.cursorPointer.$,
    onClick: () => {
      fm({
        licenseType: i,
        dispatch: r,
        entryPoint: _$$tc.SHARE_DRAFTS,
        plan,
        planUser,
        fileKey: e,
        onRequestWithProvisionalAccess: () => {},
        getIsEligibleForProvisionalAccess,
        folderId: null
      })({});
    },
    children: _$$tx("fullscreen.toolbar_banner.provisional_access.curf.cta")
  });
  return jsx(fu, {
    name: "Draft Share Provisional Awareness Banner",
    properties: {
      fileKey: e,
      licenseType: i
    },
    children: jsx("div", {
      children: jsx(_$$_2, {
        dataTestId: "viewer-upgrade-banner",
        color: _$$S3.INFORMATION,
        text: jsxs(Fragment, {
          children: [jsx("p", {
            children: C8(i, u)
          }), u && h]
        })
      })
    })
  });
}
function rG(e) {
  let t = wA();
  let i = !!d4(e => e.userFlags).dismissed_move_draft_to_project_interstitial_modal;
  let r = jsx("p", {
    children: _$$tx("drafts_move_banner.to_add_editors_first_move_this_file_from_drafts_into_a_project.seat_rename")
  });
  return jsx(fu, {
    name: "Drafts Move Banner",
    children: jsxs("div", {
      className: W5,
      children: [jsx(_$$B, {
        className: _$$RA,
        svg: _$$A13
      }), r, jsx(_$$Ph, {
        className: MC,
        onClick: () => {
          i ? _$$h(e.file, e.repo, t, void 0, jsx(_$$t7, {})) : t(_$$to({
            type: _$$t6(),
            data: {
              file: e.file,
              repo: e.repo,
              afterFileMove: void 0,
              bannerToDisplay: jsx(_$$t7, {})
            }
          }));
        },
        trusted: !0,
        children: _$$tx("drafts_move_banner.move_file")
      })]
    })
  });
}
function rq(e) {
  return jsxs("div", {
    className: xf,
    children: [jsx(_$$B, {
      className: AA,
      svg: _$$A14
    }), jsx("div", {
      className: UU,
      children: e.planType === _$$O2.ORG ? _$$tx("file_permissions_modal.org_admin", {
        orgName: e.planName
      }) : _$$tx("file_permissions_modal.team_admin", {
        teamName: e.planName
      })
    })]
  });
}
function rZ(e) {
  let t = _$$o();
  let i = useMemo(() => e.resourceConnectionSharingGroupUsers.reduce((e, t) => (e.has(t.userId) || e.add(t.userId), e), new Set()).size, [e.resourceConnectionSharingGroupUsers]);
  return jsx("div", {
    className: Em,
    children: jsx(_$$sR, {
      icon: jsx(_$$w, {}),
      text: jsx("div", {
        children: _$$tx("file_permissions_modal.external_teams_in_connected_projects")
      }),
      onClick: () => t(A5.CONNECTED_PROJECT_USERS),
      rightSideElement: jsx("div", {
        children: _$$tx("folder_access_row.num_people", {
          num: i
        })
      }),
      expandCaret: !0
    })
  });
}
let r1 = Ju(function (e) {
  let t = wA();
  let i = () => {
    t(Lo());
  };
  return jsxs(OJ, {
    title: _$$t("file_permissions.enable_folder_access.give_access_to_the_folder", {
      folderName: e.folder.name
    }),
    headerSize: "small",
    fixedTop: !0,
    onClose: () => {
      t(Ce());
    },
    truncateTitleText: !0,
    children: [jsx("p", {
      className: _$$s.p16.$,
      children: e.folder.team_access === FTeamAccessPermissionType.TEAM_ACCESS_DISABLED ? _$$tx("file_permissions.enable_folder_access.youll_invite_all_members_of_folder_without_team_access", {
        folderNameBolded: jsx("span", {
          className: _$$s.fontBold.$,
          children: _$$tx("file_permissions.enable_folder_access.folder_name", {
            folderName: e.folder.name
          })
        })
      }) : _$$tx("file_permissions.enable_folder_access.youll_invite_all_members_of_folder_with_team_access", {
        teamNameBolded: jsx("span", {
          className: _$$s.fontBold.$,
          children: _$$tx("file_permissions.enable_folder_access.team_name", {
            teamName: e.team.name
          })
        }),
        folderNameBolded: jsx("span", {
          className: _$$s.fontBold.$,
          children: _$$tx("file_permissions.enable_folder_access.folder_name", {
            folderName: e.folder.name
          })
        })
      })
    }), jsxs("div", {
      className: E_,
      children: [jsx(_$$tM, {
        onClick: i,
        children: _$$tx("file_permissions.enable_folder_access.cancel")
      }), jsx(_$$vd, {
        onClick: () => {
          e.onSave();
          i();
        },
        children: _$$tx("file_permissions.enable_folder_access.give_access")
      })]
    })]
  });
}, "ConfirmEnableFolderAccessModal");
let r2 = Ju(function (e) {
  let t = wA();
  let i = () => {
    t(Lo());
  };
  return jsxs(OJ, {
    title: _$$t("file_permissions.disable_folder_access.remove_folder_names_access", {
      folderName: e.folder.name
    }),
    headerSize: "small",
    fixedTop: !0,
    onClose: () => {
      t(Ce());
    },
    truncateTitleText: !0,
    children: [jsx("p", {
      className: _$$s.p16.$,
      children: _$$tx("file_permissions.disable_folder_access.keep_in_mind_that_member_of_the_folder_name_project_may_lose_access", {
        folderNameBolded: jsx("span", {
          className: _$$s.fontBold.$,
          children: _$$tx("file_permissions.disable_folder_access.folder_name", {
            folderName: e.folder.name
          })
        })
      })
    }), jsxs("div", {
      className: E_,
      children: [jsx(_$$tM, {
        onClick: i,
        children: _$$tx("file_permissions.disable_folder_access.cancel")
      }), jsx(qM, {
        onClick: () => {
          e.onSave();
          i();
        },
        children: _$$tx("file_permissions.disable_folder_access.remove")
      })]
    })]
  });
}, "ConfirmDisableFolderAccessModal");
function r5(e) {
  let t = wA();
  let i = _$$o();
  let r = e.folderAccessEnabled && e.canViewFolder;
  let s = () => {
    _$$L5.updateFolderAccessEnabled({
      fileKey: e.fileKey,
      folderAccessEnabled: !0
    });
  };
  let o = r ? jsxs("div", {
    className: j7,
    "data-testid": "file-share-audience-settings",
    children: [_$$tx("folder_access_row.num_people", {
      num: e.numMembers.toString()
    }), jsx(_$$R5, {})]
  }) : s5() && e.hasEditRole && jsx("div", {
    children: jsx("button", {
      className: sH,
      onClick: () => {
        t(_$$to({
          type: r1,
          data: {
            folder: {
              name: e.folderName,
              team_access: e.teamAccess
            },
            team: {
              name: e.teamName
            },
            onSave: s
          }
        }));
      },
      children: _$$tx("file_permissions_modal.give_them_access")
    })
  });
  let l = !(e.isBranch || e.isPrototype) && e.hasEditRole;
  return jsxs(Fragment, {
    children: [jsxs(_$$E4, {
      className: ra()({
        [Jt]: r,
        [bU]: !r
      }),
      disabled: !r,
      onClick: () => i(A5.FOLDER_MEMBERS),
      htmlAttributes: {
        "data-testid": "folder-members-row"
      },
      children: [jsx("span", {
        className: r ? _$$H : _$$rG,
        children: jsx(_$$e6, {})
      }), jsxs("div", {
        className: _$$$S,
        children: [jsx("div", {
          className: r ? qj : _$$ec,
          "data-onboarding-key": l && tM,
          children: e.canViewFolder ? _$$tx("folder_access_row.anyone_in_project_name", {
            projectName: e.folderName
          }) : _$$tx("file_permissions_modal.file_name_s_project", {
            fileName: e.fileName
          })
        }), o]
      })]
    }), l && jsx(tV, {
      canViewFolder: e.canViewFolder
    })]
  });
}
let r7 = "seen_sharing_clarity_branch_modal_overlay";
let r8 = _$$r2(r7);
let r9 = "sc_branch_modal_onboarding_key";
function ae() {
  let e = md(r8);
  let {
    show,
    isShowing,
    complete
  } = _$$e2({
    overlay: KdZ,
    priority: _$$N.DEFAULT_MODAL
  }, [e]);
  _$$h2(() => {
    show({
      canShow: e => !e
    });
  });
  return jsx(_$$rq, {
    isShowing,
    title: _$$tx("rcs.sharing_clarity.branch_modal.title"),
    description: jsx("p", {
      children: _$$tx("rcs.sharing_clarity.branch_modal.body_text")
    }),
    trackingContextName: "Sharing Clarity Branch Modal Onboarding",
    userFlagOnShow: r7,
    onClose: complete,
    targetKey: r9,
    zIndex: _$$R3.MODAL,
    emphasized: !0
  });
}
let at = "seen_sharing_clarity_file_audience_overlay";
let ai = _$$r2(at);
let an = "sc_file_audience_onboarding_key";
function ar() {
  let e = md(ai);
  let {
    show,
    isShowing,
    complete
  } = _$$e2({
    overlay: tzJ,
    priority: _$$N.DEFAULT_MODAL
  }, [e]);
  _$$h2(() => {
    show({
      canShow: e => !e
    });
  });
  return jsx(_$$rq, {
    isShowing,
    title: _$$tx("rcs.sharing_clarity.file_permissions_modal_step_1_title"),
    description: jsx("p", {
      children: _$$tx("rcs.sharing_clarity.file_permissions_modal_step_1_description")
    }),
    trackingContextName: "Sharing Clarity File Audience Onboarding",
    userFlagOnShow: at,
    onClose: complete,
    targetKey: an,
    zIndex: _$$R3.MODAL,
    emphasized: !0
  });
}
let aa = "seen_sharing_clarity_prototype_modal_overlay";
let as = _$$r2(aa);
let ao = "sc_prototype_modal_onboarding_key";
function al() {
  let e = md(as);
  let {
    show,
    isShowing,
    complete
  } = _$$e2({
    overlay: ePo,
    priority: _$$N.DEFAULT_MODAL
  }, [e]);
  _$$h2(() => {
    show({
      canShow: e => !e
    });
  });
  return jsx(_$$rq, {
    isShowing,
    title: _$$tx("rcs.sharing_clarity.prototype_modal.title"),
    description: jsx("p", {
      children: _$$tx("rcs.sharing_clarity.prototype_modal.body_text")
    }),
    trackingContextName: "Sharing Clarity Prototype Modal Onboarding",
    userFlagOnShow: aa,
    onClose: complete,
    targetKey: ao,
    zIndex: _$$R3.MODAL,
    emphasized: !0
  });
}
function ad(e) {
  let t = DG(e.fileKey);
  let i = _$$o();
  let r = e.isBranch || t && t.enabled || !e.hasEditRole || e.isPrototype && e.disablePrototypeOrPresentationAudience;
  let a = e.isBranch || e.isPrototype;
  let s = e.isBranch ? r9 : ao;
  let o = e.isInDraftsFolder;
  let l = !a && e.hasEditRole;
  let d = l && o;
  let c = l && !o;
  return jsxs(Fragment, {
    children: [jsxs(_$$E4, {
      className: ra()({
        [bU]: r,
        [Jt]: !r
      }),
      disabled: r,
      onClick: () => i(A5.SHARE_SETTINGS),
      htmlAttributes: {
        "data-testid": "file-audience-row"
      },
      children: [jsx("span", {
        className: AA,
        children: e.sharingAudience === _9.ANYONE ? jsx(_$$Y, {}) : e.sharingAudience === _9.ORG ? e.org && jsx(_$$Y3, {}) : jsx(_$$c2, {})
      }), jsx("div", {
        className: _$$$S,
        children: jsxs("div", {
          className: jq,
          children: [jsxs("div", {
            "data-onboarding-key": a && e.hasEditRole && s,
            children: [ET(lG(e.sharingAudience, e.audienceAccessLevel), e.org, null, e.passwordEnabled), (() => {
              let t = [];
              e.isPrototype && !e.isBranch && t.push(_$$t("file_audience_row.editors_from_the_main_file_can_also_access"));
              let i = e.sharingAudience !== _9.ANYONE;
              let r = e.sharingAudience === _9.ANYONE && e.audienceAccessLevel === J4.VIEW;
              if (e.isBranch && i && t.push(_$$t("file_audience_row.viewers_and_editors_from_the_main_file_can_also_access")), e.isBranch && r && t.push(_$$t("file_audience_row.editors_from_the_main_file_can_also_access")), e.expiresAt && e.sharingAudience === _9.ANYONE) {
                let {
                  num,
                  unit
                } = lX(_$$A5(), _$$A5(e.expiresAt));
                let r = null;
                switch (unit) {
                  case "minute":
                    r = _$$t("permissions_modal.file_share_settings.more_minutes", {
                      num
                    });
                    break;
                  case "hour":
                    r = _$$t("permissions_modal.file_share_settings.more_hours", {
                      num
                    });
                    break;
                  case "day":
                    r = _$$t("permissions_modal.file_share_settings.more_days", {
                      num
                    });
                    break;
                  case "week":
                    r = _$$t("permissions_modal.file_share_settings.more_weeks", {
                      num
                    });
                    break;
                  case "month":
                    r = _$$t("permissions_modal.file_share_settings.more_months", {
                      num
                    });
                    break;
                  default:
                    xb(unit);
                }
                t.push(_$$t("permissions_modal.file_share_settings.only_public_for", {
                  durationText: r
                }));
              }
              return 0 === t.length ? null : jsx("div", {
                className: JZ,
                children: t.join("\n")
              });
            })()]
          }), jsxs("div", {
            className: r ? H7 : j7,
            "data-testid": "file-share-audience-settings",
            "data-onboarding-key": l && (o ? an : tF),
            children: [mi(lG(e.sharingAudience, e.audienceAccessLevel)), !r && jsx(_$$R5, {}), e.isBranch && jsx("div", {
              "data-tooltip-type": Ib.TEXT,
              "data-tooltip": _$$t("file_audience_row.settings_are_managed_in_the_main_file"),
              "data-tooltip-timeout-delay": 50,
              "data-tooltip-max-width": 300,
              "data-tooltip-show-above": !0,
              "data-tooltip-offset-y": -8,
              children: jsx(_$$B2, {})
            })]
          })]
        })
      })]
    }), e.isPrototype && e.hasEditRole && !e.isInDraftsFolder && jsx(al, {}), e.isBranch && e.hasEditRole && jsx(ae, {}), d && jsx(ar, {}), c && jsx(tV, {
      canViewFolder: e.canViewFolder,
      showPrototypeStep: e.canViewPrototypeOption
    })]
  });
}
function ac(e) {
  let t = No();
  return !("design" !== e.editor_type || t.data && [FPlanNameType.STARTER].includes(t.data.tier)) && (!!e.canEdit || !e.isDraftFileLG);
}
function au({
  file: e,
  repo: t,
  org: i,
  team: r,
  folder: a
}) {
  let s = HW();
  let o = _$$iq();
  let l = "slides" === e.editor_type;
  let d = ac(e);
  let c = t || e;
  let u = fb[c.link_access];
  i || u.shareAudience !== _9.ORG || (u = {
    shareAudience: _9.INVITE_ONLY,
    audienceAccessLevel: null
  });
  let p = s && c.proto_link_access ? p8[c.proto_link_access].shareAudience : u.shareAudience;
  let m = s ? c.proto_link_access === FViewPermissionType.INHERIT ? null : J4.VIEW : u.audienceAccessLevel;
  let g = s ? c.has_proto_link_password : c.has_file_link_password;
  let f = _$$d2(c?.mainFileLinkExpirationConfig);
  let _ = iU({
    file: e,
    org: i,
    team: r
  });
  return jsx(ad, {
    audienceAccessLevel: m,
    canViewFolder: a?.canRead || !1,
    canViewPrototypeOption: tY({
      file: e,
      isFullscreenView: o,
      nodeID: eU()
    }),
    disablePrototypeOrPresentationAudience: !(l || d || _),
    expiresAt: f ?? void 0,
    fileKey: e.key,
    hasEditRole: t ? t.canEdit : e.hasEditRole,
    isBranch: Xm(e),
    isInDraftsFolder: e.isDraftFileLG,
    isPrototype: s,
    org: i || void 0,
    passwordEnabled: !!g,
    sharingAudience: p
  });
}
function aA(e) {
  let t = Um();
  let i = _$$P();
  let r = wA();
  let s = mu(e.fileRowResource.file, e.seenState.user_id);
  let o = !!(e.fileRowResource.file.key && e.seenState.user_id);
  let {
    userLacksLicenseAccess
  } = KI({
    fileKey: e.fileRowResource.file.key,
    userId: e.seenState.user_id,
    enabled: o
  });
  let d = e.readOnlyOverrideWarningMessage;
  let c = (t => {
    if (e.isStarterTier || !t) return null;
    let i = e.fileRowResource.file.editor_type;
    if (!o || !i) return null;
    let n = userLacksLicenseAccess(i);
    return s?.user_id === e.currentUser.id && n ? _$$a4 : n ? _$$_3 : null;
  })(!!d);
  c && (d = null);
  return jsx(R9, {
    contacts: i,
    dropdownShown: t,
    getRoleOptions: () => {
      let t = e.currentUser;
      let i = e.canEditRole;
      let n = e.seenState.user_id === t.id;
      let r = e.isOwnerOfResource;
      (r || n) && (i = !0);
      return _$$nu(r, n, i, e.canMakeAdmin, !1, _$$e4.VIEWER, void 0);
    },
    id: `seen-state-${e.seenState.id}`,
    isBranchFile: !1,
    level: _$$e4.VIEWER,
    onChangeLevel: t => {
      let i = () => {
        r(hw({
          role: null,
          level: t,
          seenState: e.seenState,
          isStarterTier: e.isStarterTier
        }));
      };
      t === _$$e4.OWNER ? r(_$$to({
        type: _$$b5,
        data: {
          resourceType: FResourceCategoryType.FILE,
          resourceName: e.fileRowResource.file.name,
          newOwnerName: e.seenState.user.handle,
          onConfirmTransfer: i
        }
      })) : i();
    },
    pending: !1,
    user: e.seenState.user,
    userName: (() => {
      let {
        seenState,
        currentUser
      } = e;
      let r = seenState.user;
      let a = r.name || r.handle;
      return r && r.id === currentUser.id ? _$$tx("role_row.you", {
        name: jsx("b", {
          className: _$$to2,
          children: a
        }),
        you: jsx("span", {
          className: vQ,
          children: _$$tx("role_row.you_label_lowercase")
        })
      }) : jsx(Fragment, {
        children: a
      });
    })(),
    virtualRowItem: e.virtualRowItem,
    warningMessage: d,
    warningTooltipId: c
  });
}
function ay({
  file: e,
  folder: t,
  isInDraftsFolder: i,
  seenStates: r,
  virtualItems: a
}) {
  let s = _$$X$("UserSeenStateRows");
  let o = YY(s).unwrapOr(!1);
  let l = Pc();
  let d = (r, a) => jsx(aA, {
    canEditRole: QZ(e.hasEditRole, e, i),
    canMakeAdmin: !1,
    currentUser: l,
    fileRowResource: {
      type: FResourceCategoryType.FILE,
      file: e,
      isInDraftsFolder: i
    },
    isOwnerOfResource: e.isOwner,
    isStarterTier: o,
    readOnlyOverrideWarningMessage: D8({
      file: e,
      folder: t,
      seenState: r,
      isInDraftsFolder: e.isDraftFileLG
    }),
    seenState: r,
    virtualRowItem: a
  }, `seen-state-row-${r.id}`);
  return getFeatureFlags().file_share_modal_virtualize && a ? jsx(Fragment, {
    children: a.map(e => {
      let t = r[e.index];
      if (t) return d(t, e);
    })
  }) : jsx(Fragment, {
    children: r.map(e => d(e))
  });
}
function ab({
  file: e,
  repo: t,
  folder: i,
  org: a,
  team: s,
  isInDraftsFolder: o,
  fileRoles: l,
  fileSeenStatesByUserId: d,
  numProjectTeamMembers: c,
  resourceConnectionSharingGroupUsers: u
}) {
  let p = HW();
  let m = p && e.canViewPrototype && !e.canViewPrototypeLinks;
  let h = function ({
    file: e,
    org: t,
    team: i
  }) {
    return e.isAbandonedDraftFile ? t ? {
      planName: t.name,
      planType: _$$O2.ORG
    } : i && _$$n(i) ? {
      planName: i.name,
      planType: _$$O2.TEAM
    } : null : null;
  }({
    file: e,
    org: a,
    team: s
  });
  let g = iG({
    allFileRoles: l,
    file: e
  });
  let _ = function ({
    file: e,
    fileSeenStatesByUserId: t,
    fileRoles: i
  }) {
    let n = "view" === e.link_access || "edit" === e.link_access;
    let a = useMemo(() => {
      let e = new Set();
      i.forEach(t => {
        t.user_id && e.add(t.user_id);
      });
      return e;
    }, [i]);
    return useMemo(() => !t || Im(t) || !n ? [] : Object.values(t).filter(e => !a.has(e.user_id)).sort((e, t) => new Date(e.viewed_on) < new Date(t.viewed_on) ? -1 : 1), [n, t, a]);
  }({
    file: e,
    fileSeenStatesByUserId: d,
    fileRoles: l
  });
  let A = useCallback(() => 36, []);
  let y = useRef(null);
  let b = _$$z({
    size: _.length,
    parentRef: y,
    estimateSize: A,
    overscan: 10,
    paddingStart: 0
  });
  return jsxs(av, {
    virtualScrollRef: getFeatureFlags().file_share_modal_virtualize ? y : void 0,
    children: [jsx(aI, {}), h && jsx(rq, {
      planName: h.planName,
      planType: h.planType
    }), jsx(au, {
      file: e,
      repo: t,
      org: a,
      team: s,
      folder: i
    }), !e.isDraftFileLG && jsx(r5, {
      canViewFolder: i?.canRead || !1,
      fileKey: e.key,
      fileName: e.name,
      folderAccessEnabled: e.folderAccessEnabled,
      folderName: i?.name || "",
      hasEditRole: e.hasEditRole,
      isBranch: Xm(e),
      isPrototype: p,
      numMembers: c,
      teamAccess: i?.team_access || "",
      teamName: s?.name || ""
    }), !m && u && u.length > 0 && jsx(rZ, {
      resourceConnectionSharingGroupUsers: u
    }), !m && jsx(rR, {
      file: e,
      repo: t,
      folder: i,
      org: a,
      rolesToDisplay: g,
      isInDraftsFolder: o
    }), getFeatureFlags().file_share_modal_virtualize ? jsx("div", {
      style: {
        height: `${b.totalSize}px`,
        position: "relative"
      },
      children: !m && !e.has_file_link_password && jsx(ay, {
        file: e,
        folder: i,
        seenStates: _,
        isInDraftsFolder: o,
        virtualItems: b.virtualItems
      })
    }) : jsx(Fragment, {
      children: !m && !e.has_file_link_password && jsx(ay, {
        file: e,
        folder: i,
        seenStates: _,
        isInDraftsFolder: o
      })
    })]
  });
}
function av({
  children: e,
  virtualScrollRef: t
}) {
  return jsx("div", {
    className: BA,
    ref: t,
    children: jsx("div", {
      className: QA,
      children: e
    })
  });
}
function aI() {
  return jsx("div", {
    className: _$$eF,
    style: {
      paddingLeft: "var(--spacer-2)"
    },
    children: _$$t("file_permissions_modal.who_has_access")
  });
}
let aw = {
  inviteLevel: _$$e4.NONE,
  changeInviteLevel: lQ,
  inviteLevelOptions: []
};
let aC = createContext(void 0);
let aT = aC.Provider;
function ak({
  children: e
}) {
  return jsx(aT, {
    value: aw,
    children: e
  });
}
let aP = {
  domains: [],
  isFetching: !1,
  fetchedAt: null
};
function aD({
  file: e,
  fileRoles: t,
  searchResultToken: i
}) {
  let r = d4(e => e.autocomplete);
  let s = Pc();
  let o = d4(e => e.contacts.usersByEmail);
  let {
    sharingSuggestions,
    sharingSuggestionIdsToExclude,
    sharingSuggestionEmailsToExclude
  } = _$$$2({
    orgId: e.parent_org_id || null,
    teamId: e.team_id,
    contacts: o,
    user: s,
    roles: t,
    autocompleteTokens: r.tokens
  });
  return jsx(_$$t8, {
    suggestions: sharingSuggestions ?? void 0,
    autocomplete: r,
    searchResultToken: i,
    resourceType: "file",
    resourceId: e.key,
    idsToExclude: sharingSuggestionIdsToExclude ?? void 0,
    emailsToExclude: sharingSuggestionEmailsToExclude ?? void 0
  });
}
function aB({
  isPrototypeInvite: e
}) {
  let t = d4(e => e.mirror?.appModel.currentPage);
  let i = HW();
  let n = d4(e => e.prototype);
  return e ? i ? n?.currentPageId || void 0 : t : void 0;
}
function aV({
  repo: e,
  file: t
}) {
  return e && SA(t, e) ? {
    resourceType: FResourceCategoryType.FILE_REPO,
    resourceIdOrKey: e.id
  } : {
    resourceType: FResourceCategoryType.FILE,
    resourceIdOrKey: t.key
  };
}
var aH = (e => (e.DESIGN = "design", e.PROTOTYPE = "prototype", e.HANDOFF = "handoff", e.SLIDES = "slides", e))(aH || {});
function aY({
  file: e,
  ...t
}) {
  return !function (e) {
    let t = _$$iZ();
    let i = HW();
    if (t?.sharing_restricted) return !1;
    let n = !e.canView && e.canViewPrototype;
    return (n && KF(i, "How did a prototype viewer sneak into non-prototype mode?!"), i) ? !n && !Ir(e) : !Ir(e);
  }(e) ? null : e.hasEditRole || e.hasViewRole ? jsx(a$, {
    ...t,
    file: e
  }) : jsx(aq, {
    ...t,
    file: e
  });
}
function aq({
  file: e,
  repo: t,
  org: i,
  ...s
}) {
  let o = function ({
    file: e,
    repo: t,
    org: i
  }) {
    let n = wA();
    let s = aB({
      isPrototypeInvite: HW()
    });
    return useCallback(r => {
      let {
        resourceType,
        resourceIdOrKey
      } = aV({
        repo: t,
        file: e
      });
      let l = _$$Z(r);
      if (i && l.filter(e => !H_(i.org_domains?.domains || [], e)).length > 0) {
        n(_$$F2.enqueue({
          message: _$$t("file_permissions_modal.external_sharing_unavailable", {
            planName: i.name
          }),
          error: !0
        }));
        return;
      }
      XHR.put("/api/invites/file_link_access", {
        emails: l,
        resource_type: resourceType,
        resource_id_or_key: resourceIdOrKey,
        node_id: s
      }).then(({
        data: e
      }) => {
        let t = e.meta;
        n(cL());
        t.filter(e => !e.errored).length > 0 && n(_$$F2.enqueue({
          message: _$$t("file_permissions_modal.link_has_been_sent")
        }));
        t && Ef(t, resourceType, resourceIdOrKey, n, void 0, i ? i.name : void 0);
      }, e => {
        n(_$$F2.enqueue({
          message: e.message,
          error: !0
        }));
      });
    }, [n, e, t, s, i]);
  }({
    file: e,
    repo: t,
    org: i
  });
  return jsx(aZ, {
    ...s,
    inviteLevel: _$$e4.NONE,
    file: e,
    org: i,
    buttonText: _$$t("file_permissions_modal.send"),
    dropdownShown: null,
    onSubmit: o
  });
}
function a$({
  file: e,
  repo: t,
  org: i,
  team: s,
  isInDraftsFolder: o,
  isLockedTeam: l,
  fileRoles: d,
  ...c
}) {
  let u = Um();
  let {
    inviteLevel,
    changeInviteLevel,
    inviteLevelOptions
  } = function () {
    let e = useContext(aC);
    if (!e) throw Error("useInviteLevelContext must be used within a BaseInviteLevelContextProvider");
    return e;
  }();
  let _ = function ({
    file: e,
    repo: t,
    org: i,
    team: s,
    isLockedTeam: o,
    isInDraftsFolder: l,
    fileRoles: d,
    inviteLevel: c
  }) {
    let u = wA();
    let p = HW();
    let g = $Y(e);
    let f = _$$X$("useHandleSendInvitesSubmit");
    let _ = YY(f).unwrapOr(!1);
    let y = tv(_ && p);
    y() && (c = _$$e4.VIEWER);
    let b = function ({
      file: e,
      repo: t,
      org: i,
      fileRoles: n,
      inviteLevel: s
    }) {
      let o = HW();
      let l = X();
      let d = wA();
      let [c, u] = fp(_$$H2);
      let p = _$$P().usersByEmail;
      let g = Pc();
      let f = o || s === _$$e4.VIEW_PROTOTYPES;
      let _ = aB({
        isPrototypeInvite: f
      });
      return useCallback((r, a) => {
        let o;
        let {
          resourceType,
          resourceIdOrKey
        } = aV({
          repo: t,
          file: e
        });
        o = e.editor_type === FFileType.SLIDES ? aH.SLIDES : f ? aH.PROTOTYPE : l ? aH.HANDOFF : aH.DESIGN;
        d(_$$rq2({
          emails: _$$Z(r),
          resourceType,
          resourceIdOrKey,
          level: s,
          nodeId: _,
          initialView: o,
          emailsToExclude: bp(p, g, n),
          teamId: e.team_id || t?.team_id || "",
          onSuccess: ({
            invites: e
          }) => {
            u([...(c || []), ...e]);
            d(_$$b2({
              sent_file_invite: !0
            }));
          },
          optimisticUpdates: t => {
            d(kF({
              invites: t,
              inviteLevel: s,
              file: e,
              folderName: a
            }));
            d(cL());
          },
          orgName: i ? i.name : void 0
        }));
      }, [p, d, e, n, s, l, _, i, c, t, f, u, g]);
    }({
      file: e,
      repo: t,
      org: i,
      fileRoles: d,
      inviteLevel: c
    });
    return useCallback(r => {
      if (o && e.team_id) {
        u(_$$to({
          type: _$$t9,
          data: {
            teamId: e.team_id,
            canEditTeam: g
          }
        }));
        return;
      }
      let a = iU({
        file: e,
        org: i,
        team: s
      });
      if (p && a && !y()) {
        let t = wN(e.editor_type);
        if (!co(t)) {
          $D(_$$e3.MONETIZATION_UPGRADES, Error("Paywall: Wrong editor type for pro feature"), {
            extra: {
              editorType: t,
              teamId: s?.id,
              fileKey: e.key
            }
          });
          return;
        }
        u(_$$to({
          type: DV,
          data: {
            team: s,
            editorType: e.editor_type,
            resource: Bi.PROTOTYPE_SHARING,
            currentPlan: _$$F.Plan.STARTER,
            upsellPlan: _$$F.Plan.PRO
          }
        }));
        return;
      }
      let d = i?.org_domains?.domains;
      if (i?.invite_whitelist_guest_invite_setting == null && d && d.length > 0) {
        let e = _$$Z(r).filter(e => _$$xf(e) && !H_(d, e));
        if (e.length > 0) {
          u(_$$to({
            type: _$$F3,
            data: {
              emails: e,
              onConfirm: () => {
                b(r);
              },
              popStack: !0,
              orgName: i ? i.name : null
            }
          }));
          return;
        }
      }
      c === _$$e4.EDITOR && l && !i && _ ? _$$h(e, t, u, {
        handlesVisualBell: !0,
        callback: e => {
          b(r, e);
        }
      }, jsx(_$$t7, {})) : b(r);
    }, [g, u, e, c, _, l, o, p, i, t, b, s, y]);
  }({
    file: e,
    org: i,
    fileRoles: d,
    repo: t,
    team: s,
    isLockedTeam: l,
    isInDraftsFolder: o,
    inviteLevel
  });
  if (0 === inviteLevelOptions.length) return null;
  let y = inviteLevelOptions.length > 1 || inviteLevelOptions[0] !== _$$e4.VIEW_PROTOTYPES;
  return jsx(aZ, {
    ...c,
    file: e,
    org: i,
    fileRoles: d,
    inviteLevel,
    buttonText: _$$t("file_permissions_modal.send_invite"),
    dropdownShown: u,
    onSubmit: _,
    dropdownProps: y ? {
      inviteLevel,
      dropdownKey: "permissions-invite-dropdown",
      getSelectText: C1,
      onInviteLevelChange: changeInviteLevel,
      options: inviteLevelOptions
    } : {}
  });
}
function aZ({
  file: e,
  org: t,
  fileRoles: i,
  hideModal: s,
  inviteLevel: o,
  buttonText: l,
  dropdownShown: d,
  onSubmit: c,
  dropdownProps: u,
  planRecordId: p
}) {
  let h = wA();
  let g = Pc();
  let f = d4(e => e.autocomplete);
  let _ = d4(e => e.contacts);
  let A = !Um();
  let y = useCallback(e => {
    let i = t?.org_domains || aP;
    return _$$t2(e, t, i);
  }, [t]);
  let b = useCallback(e => {
    if (_$$d4(e)) return {
      state: _$$d3.OK,
      content: e
    };
    let i = t?.org_domains || aP;
    return _$$t2(e, t, i);
  }, [t]);
  let v = function (e) {
    let t = d4(e => e.contacts);
    let i = Pc().email;
    return useCallback(n => {
      let r = e?.org_domains || aP;
      return yI(n.trim(), t.usersByEmail[n] || n, e, r, i);
    }, [e, t, i]);
  }(t);
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: Zk,
      children: jsx(_$$e7, {
        SearchResultComponent: getFeatureFlags().user_groups ? VO : o6,
        TokenComponent: getFeatureFlags().user_groups ? Vh : gy,
        autocomplete: f,
        buttonText: l,
        dispatch: h,
        dropdownShown: d,
        getSearchResults: getFeatureFlags().user_groups ? e => _N(e, _.usersByEmail, g, i, p, {
          inviteLevel: o,
          source: "invite-bar"
        }) : t => Wj(t, _.usersByEmail, g, i, e.parent_org_id || null, e.team_id, e.key, {
          inviteLevel: o,
          source: "invite-bar"
        }),
        hideDropdownOnEmpty: !0,
        inviteLevel: o,
        onHideModal: s,
        onSubmit: c,
        placeholderText: _$$t("team_creation.add_a_name_or_email"),
        searchResultToken: getFeatureFlags().user_groups ? b : y,
        shouldAutoFocus: A,
        tokenClassName: o === _$$e4.VIEW_PROTOTYPES ? Ed : void 0,
        validateToken: v,
        validateTokensAsEmail: !0,
        ...u
      })
    }), jsx(aD, {
      file: e,
      fileRoles: i,
      searchResultToken: y
    })]
  });
}
function aQ() {
  return jsx("div", {
    className: "invite_tab_loading--container--GcUFO",
    children: jsx(kt, {})
  });
}
function aJ({
  dataLoaded: e,
  ...t
}) {
  return e ? jsx(a0, {
    ...t
  }) : jsx(aQ, {});
}
function a0({
  file: e,
  repo: t,
  folder: i,
  org: r,
  orgUser: s,
  team: o,
  isInDraftsFolder: l,
  source: d,
  fileRoles: c,
  fileRoleRequests: g,
  hideModal: f,
  fileSeenStatesByUserId: A,
  isLockedTeam: y,
  numProjectTeamMembers: b,
  resourceConnectionSharingGroupUsers: v,
  activeProjectConnection: I,
  planRecordId: E
}) {
  let x = _$$X$("InviteTabLoaded");
  let S = YY(x).unwrapOr(!1);
  let w = wA();
  let C = Pc();
  let {
    hasEditRole,
    key,
    editor_type
  } = e;
  let N = d === _$$nk.editRequestTooltip || d === _$$nk.editRequestExternal;
  let P = _$$iF(w, {
    file: e,
    repo: t,
    hasOrg: !!r,
    isInDraftsFolder: l,
    isFreeUserOnly: S
  });
  let O = function ({
    file: e,
    isInDraftsFolder: t,
    isStarterTier: i
  }) {
    return !!(!e.parent_org_id && e.folder_id && t && e.isOwner && i);
  }({
    file: e,
    isInDraftsFolder: l,
    isStarterTier: S
  });
  let D = m0() ? FProductAccessType.DEV_MODE : wR(editor_type);
  let {
    getHasProvisionalAccess
  } = wH({
    folderId: null,
    fileInBrowser: {
      key,
      editorType: editor_type
    }
  });
  let F = getHasProvisionalAccess(D);
  return jsxs(iu, {
    children: [I && jsx(rD, {
      resourceConnection: I
    }), O && jsx(rG, {
      file: e,
      repo: t
    }), hasEditRole && jsx(ul, {
      fileKey: key,
      roles: c,
      fileRoleRequests: g,
      startExpanded: N,
      getEditRequestHandlers: P
    }), _$$r3(C) && jsx(_$$X3, {
      resourceType: "file"
    }), F && l && jsx(rM, {
      fileKey: key,
      editorType: editor_type,
      licenseType: D
    }), jsx(aY, {
      file: e,
      fileRoles: c,
      hideModal: f,
      isInDraftsFolder: l,
      isLockedTeam: y,
      org: r,
      orgUser: s,
      planRecordId: E,
      repo: t,
      team: o
    }), jsx(ab, {
      file: e,
      fileRoles: c,
      fileSeenStatesByUserId: A,
      folder: i,
      isInDraftsFolder: l,
      numProjectTeamMembers: b,
      org: r,
      repo: t,
      resourceConnectionSharingGroupUsers: v,
      team: o
    })]
  });
}
function a2({
  file: e,
  team: t
}) {
  let i = wA();
  return jsx(Cs, {
    variant: "warn",
    children: jsxs(_$$Q, {
      children: [_$$t("prototype_sharing_banner.to_share_prototypes_only_youll_need_to"), jsx(_$$N4, {
        href: "#",
        onClick: n => {
          n.preventDefault();
          i(_$$to({
            type: DV,
            data: {
              team: t,
              editorType: e.editor_type,
              resource: Bi.PROTOTYPE_SHARING,
              currentPlan: _$$F.Plan.STARTER,
              upsellPlan: _$$F.Plan.PRO
            }
          }));
        },
        children: _$$t("prototype_sharing_banner.upgrade_your_plan")
      }), " "]
    })
  });
}
function a5({
  file: e,
  repo: t,
  folderRoles: i,
  team: r,
  folder: s,
  workspace: o,
  org: l,
  orgUser: d,
  sharedContainerSetting: c,
  currentUser: u,
  fileRoleRequests: p,
  hideModal: m,
  fileSeenStatesByUserId: g,
  fileRoles: f,
  isInDraftsFolder: _,
  source: A,
  isLockedTeam: b,
  dataLoaded: v,
  numProjectTeamMembers: I,
  resourceConnectionSharingGroupUsers: E,
  activeProjectConnection: x,
  planTier: S,
  planRecordId: w
}) {
  let C = J();
  let T = wA();
  let k = HW();
  let R = tv(S === FPlanNameType.STARTER && k);
  switch (C) {
    case A5.PUBLISH_COMMUNITY:
    case A5.PUBLISH_TEMPLATE:
      return jsx(rb, {});
    case A5.INVITE:
      return jsxs(Fragment, {
        children: [R() && jsx(a2, {
          file: e,
          team: r
        }), jsx(aJ, {
          activeProjectConnection: x,
          dataLoaded: v,
          file: e,
          fileRoleRequests: p,
          fileRoles: f,
          fileSeenStatesByUserId: g,
          folder: s,
          hideModal: m,
          isInDraftsFolder: _,
          isLockedTeam: b,
          numProjectTeamMembers: I,
          org: l,
          orgUser: d,
          planRecordId: w,
          repo: t,
          resourceConnectionSharingGroupUsers: E,
          source: A,
          team: r
        })]
      });
    case A5.COLLABORATORS:
      return jsx(rP, {
        file: e,
        repo: t,
        folder: s,
        org: l,
        fileRoles: f,
        isInDraftsFolder: _
      });
    case A5.EMBED_CODE:
      return jsx(eM, {
        file: e,
        repo: t
      });
    case A5.SHARE_SETTINGS:
      return jsx(na, {
        file: e,
        repo: t,
        org: l,
        workspace: o,
        team: r,
        folder: s,
        sharedContainerSetting: c,
        fileRoles: f,
        currentUser: u
      });
    case A5.FOLDER_MEMBERS:
      return jsx(iy, {
        folderRoles: i,
        team: r,
        folder: s,
        fileName: e.name
      });
    case A5.SHARE_GOOGLE_DEVICE_DISCLAIMER:
      return jsx(nc, {
        onSubmit: () => {
          T(_$$to({
            type: to,
            data: {
              fileKey: e.key
            }
          }));
        }
      });
    case A5.SHARE_TO_GOOGLE_CLASSROOM:
      return jsx(Ku, {
        closeModal: () => m(),
        linkAccess: e.link_access
      });
    case A5.CONNECTED_PROJECT_USERS:
      return jsx(im, {
        org: l,
        team: r,
        resourceConnectionSharingGroupUsers: E ?? []
      });
    case A5.UPDATE_SEAT:
      return jsx(_$$g, {
        editorType: e.editor_type,
        org: l,
        team: r
      });
    default:
      xb(C);
  }
}
function a6({
  editorType: e,
  fileLinkUrl: t,
  isFullscreen: i,
  onCopy: a
}) {
  let [s, o] = useState(!1);
  let l = BI();
  let d = _$$m3();
  let {
    start
  } = _$$Z2(() => o(!1));
  let u = useCallback(() => {
    if (l?.requestToShareLink) {
      l.requestToShareLink(t);
      return;
    }
    o(!0);
    a();
    start(4e3);
  }, [l, t, a, start]);
  useEffect(() => {
    d && (d._set_link_copied = () => {
      o(!0);
      start(4e3);
    });
  }, [d, start]);
  return jsx($n, {
    "data-testid": "file-permissions-copy-link",
    onClick: u,
    htmlAttributes: {
      role: s ? "status" : "button"
    },
    "aria-live": "polite",
    variant: "link",
    iconPrefix: !s && jsx(_$$r, {
      className: Sc
    }),
    children: s ? _$$tx("file_permissions_modal.link_copied") : l?.requestToShareLink ? _$$tx("file_permissions_modal.share_link") : e !== _$$nT.Slides || i ? _$$tx("file_permissions_modal.copy_file_link") : _$$tx("file_permissions_modal.copy_audience_link")
  });
}
function a8({
  file: e,
  folder: t,
  repo: i,
  fileRoles: r
}) {
  let a = J();
  let s = _$$L();
  switch (a) {
    case A5.INVITE:
      return jsx(a9, {
        file: e,
        repo: i
      });
    case A5.FOLDER_MEMBERS:
      return jsx(_$$w2, {
        title: jsx("div", {
          className: Bd,
          children: _$$t("file_permissions_modal.folder_name", {
            folderName: t?.name || ""
          })
        }),
        rightSideButton: jsx(se, {
          file: e,
          folder: t,
          goBack: s
        }),
        onClick: s
      });
    default:
      return jsx(_$$w2, {
        title: jsx("div", {
          className: v7,
          children: jsx(st, {
            tabView: a,
            fileRoles: r,
            file: e
          })
        }),
        onClick: s
      });
  }
}
function a9({
  file: e,
  repo: t
}) {
  let i = eA({
    file: e,
    repo: t
  })();
  let a = ey({
    file: e,
    repo: t
  });
  let s = wN(e.editor_type);
  let o = X();
  let l = _$$iq();
  let d = function ({
    file: e,
    repo: t
  }) {
    let i = wN(e.editor_type);
    let n = _$$iq();
    let a = HW();
    let s = X();
    let o = wD();
    let l = o?.id;
    let d = useMemo(() => !!l && !!Egt && Egt.nodeIsPage(l), [l]);
    if (i === _$$nT.Slides) {
      if (n) return _$$t("file_permissions_modal.share_these_slides");
      if (a) return _$$t("viewer.menu_bar.share_presentation");
    }
    if (i === _$$nT.Figmake) return _$$t("file_permissions_modal.share_this_file");
    if (i === _$$nT.Cooper) return _$$t("file_permissions_modal.share_these_assets");
    if (o?.id && !d) {
      let e = o.name;
      return e ? _$$t("file_permissions_modal.share_to_selection_selection_name", {
        selectionName: e
      }) : _$$t("file_permissions_modal.share_to_selection_no_name");
    }
    return s ? _$$t("file_permissions_modal.share_in_dev_mode") : t && Xm(e) ? _$$t("file_permissions_modal.share_this_branch") : a ? _$$t("file_permissions_modal.share_this_prototype") : i === _$$nT.Whiteboard ? _$$t("file_permissions_modal.share_this_board") : _$$t("file_permissions_modal.share_this_file");
  }({
    file: e,
    repo: t
  });
  let c = HW();
  return jsxs("div", {
    className: v7,
    children: [jsx("div", {
      className: DA,
      children: jsx("p", {
        children: EJ(d, 50)
      })
    }), jsx("div", {
      className: IE,
      children: jsx(a6, {
        editorType: s,
        fileLinkUrl: i,
        isFullscreen: l,
        onCopy: () => {
          a({
            linkQueryMode: l ? o ? _$$iO.DEV_MODE : _$$iO.DESIGN : _$$iO.AUTO,
            skipVisualBell: !0
          });
        },
        isPrototype: c
      })
    })]
  });
}
function se({
  file: e,
  folder: t,
  goBack: i
}) {
  let r = wA();
  if (!t || !(e.hasEditRole && s5())) return null;
  let s = () => {
    _$$L5.updateFolderAccessEnabled({
      fileKey: e.key,
      folderAccessEnabled: !1
    });
  };
  return jsx("div", {
    children: jsx("button", {
      className: vv,
      onClick: () => {
        r(_$$to({
          type: r2,
          data: {
            folder: t,
            onSave: s
          }
        }));
        i();
      },
      children: _$$tx("file_permissions.disable_folder_access.remove_access")
    })
  });
}
function st({
  tabView: e,
  fileRoles: t,
  file: i
}) {
  switch (e) {
    case A5.PUBLISH_COMMUNITY:
      return jsx(si, {});
    case A5.PUBLISH_TEMPLATE:
      return jsx(sn, {});
    case A5.COLLABORATORS:
      return jsx(sr, {
        fileRoles: t,
        file: i
      });
    case A5.EMBED_CODE:
      return _$$tx("permissions.embed.copy_public_embed_code");
    case A5.SHARE_SETTINGS:
      return _$$tx("file_permissions_modal.share_as.share_settings");
    case A5.SHARE_GOOGLE_DEVICE_DISCLAIMER:
      return _$$tx("file_permissions_modal.share_as.google_device");
    case A5.SHARE_TO_GOOGLE_CLASSROOM:
      return _$$tx("file_permissions_modal.google_classroom_modal.title");
    case A5.CONNECTED_PROJECT_USERS:
      return _$$tx("file_permissions_modal.external_teams_in_connected_projects");
    case A5.UPDATE_SEAT:
      return _$$tx("file_permissions_modal.update_seat_tab.title");
    default:
      xb(e);
  }
}
function si() {
  let e = q5();
  return e?.publishedHubFile?.publishingStatus === FPublicationStatusType.APPROVED_PUBLIC && e.publishedHubFile ? _$$tx("publishing.community.header") : _$$tx("file_permissions_modal.tab.publish");
}
function sn() {
  return kD() ? _$$tx("publishing.templates.header") : _$$tx("file_permissions_modal.tab.publish");
}
function sr({
  fileRoles: e,
  file: t
}) {
  let i = iG({
    allFileRoles: e,
    file: t
  }).length;
  return _$$tx("file_permissions_modal.collaborators_sub_tab_title", {
    num_collaborators: i
  });
}
function sc({
  children: e,
  isDataLoaded: t,
  ...i
}) {
  return t ? jsx(su, {
    ...i,
    children: e
  }) : jsx(ak, {
    children: e
  });
}
function su({
  children: e,
  ...t
}) {
  let i = function ({
    file: e,
    org: t,
    team: i,
    isInDraftsFolder: n
  }) {
    let a = _$$X$("useInitializeInviteLevelContext");
    let s = YY(a).unwrapOr(!1);
    let o = ee(e);
    let l = ac(e);
    let d = et(e);
    let c = iU({
      file: e,
      org: t,
      team: i
    });
    let u = QZ(e.hasEditRole, e, n);
    let p = useMemo(() => function ({
      file: e,
      canShareEditRole: t,
      isInDesignPrototype: i,
      canSharePrototype: n,
      shouldShowPrototypeSharingUpsells: r
    }) {
      if (i) return n || r ? [_$$e4.VIEW_PROTOTYPES] : [];
      let a = [];
      (e.isOwner || t) && a.push(_$$e4.EDITOR);
      e.hasViewRole && a.push(_$$e4.VIEWER);
      return a;
    }({
      file: e,
      canShareEditRole: u,
      isInDesignPrototype: o,
      canSharePrototype: l,
      shouldShowPrototypeSharingUpsells: c
    }), [e, u, o, l, c]);
    let m = function ({
      inviteLevelOptions: e,
      file: t,
      team: i,
      canShareEditRole: n,
      isInSlidesPresentation: r
    }) {
      if (0 === e.length) return _$$e4.NONE;
      if (1 === e.length) return e[0];
      let a = r ? _$$e4.VIEWER : "whiteboard" === t.editor_type ? _$$e4.EDITOR : t.team_id && w5(i) ? _$$e4.VIEWER : n ? _$$e4.EDITOR : _$$e4.VIEWER;
      return e.includes(a) ? a : e[0];
    }({
      inviteLevelOptions: p,
      file: e,
      team: i,
      canShareEditRole: u,
      isInSlidesPresentation: d
    });
    let [h, g] = useState(m);
    let _ = useCallback(t => {
      if (!p.includes(t)) {
        $D(_$$e3.WORKFLOW, Error("Invalid invite level selected"), {
          extra: {
            level: t,
            inviteLevelOptions: p,
            fileKey: e.key
          }
        });
        return;
      }
      g(t);
    }, [e.key, p]);
    _$$h2(() => {
      _$$Rh("file_permissions_modal_initial_invite_level", {
        invite_level: h,
        editor_type: e.editor_type,
        is_free_user_only: s
      });
    });
    useLayoutEffect(() => {
      p.includes(h) || h === m || g(m);
    }, [p, h, m]);
    return useMemo(() => ({
      inviteLevel: h,
      changeInviteLevel: _,
      inviteLevelOptions: p
    }), [h, _, p]);
  }(t);
  return jsx(aT, {
    value: i,
    children: e
  });
}
function sp({
  file: e,
  fileSharePermissionsResult: t,
  user: i,
  source: o,
  isLockedTeam: m,
  resourceConnectionSharingGroupUsers: g
}) {
  let {
    orgDraftsOwner,
    orgUser,
    file,
    editorType,
    currentUser,
    isInDraftsFolder,
    team,
    folder,
    repo,
    org,
    folderRoles,
    dataLoaded,
    workspace,
    sharedContainerSetting,
    fileRoleRequests,
    fileSeenStatesByUserId,
    rolesByUserId,
    numProjectTeamMembersWithAccess,
    activeProjectConnection,
    planTier,
    planRecordId
  } = useMemo(() => m1(t, e), [e, t]);
  let W = wA();
  let K = mu(file, i.id);
  let Y = function (e) {
    let t = wA();
    let i = function (e) {
      let {
        Sprig
      } = useSprigWithSampling();
      let i = _$$F4(e);
      return useCallback(() => {
        if ("loaded" !== i.current.status) return;
        let e = i.current.data.file;
        e && (e.canEdit ? Sprig("track", "sharing_clarity_share_can_edit_modal_exit") : e.canView && Sprig("track", "sharing_clarity_share_can_view_modal_exit"));
      }, [Sprig, i]);
    }(e);
    return useCallback(() => {
      t(M3({
        view: A5.INVITE
      }));
      t(Ce());
      t(cL());
      i();
    }, [t, i]);
  }(t);
  let q = function (e) {
    let t = d4(e => e.contacts);
    return useMemo(() => function ({
      rolesByUserId: e,
      contacts: t
    }) {
      let i = new Set();
      return Object.values(e).filter(e => {
        let t = e.pending ? e.user.email : e.user_id;
        return !i.has(t) && (i.add(t), !0);
      }).sort((e, i) => e.pending === i.pending ? E4(e, t).toLocaleLowerCase() < E4(i, t).toLocaleLowerCase() ? -1 : 1 : e.pending ? 1 : -1);
    }({
      rolesByUserId: e,
      contacts: t
    }), [t, e]);
  }(rolesByUserId);
  mK(file.key, file.mainFileLinkExpirationConfig);
  useEffect(() => {
    let e = () => W(M3({
      view: A5.INVITE
    }));
    e();
    return () => {
      e();
    };
  }, [W]);
  let {
    handleUpgrade,
    getUpgradeEligibility,
    getIsUpgradeHandlerLoading,
    getUpgradePathway
  } = wH({
    folderId: file.folder_id,
    fileInBrowser: {
      key: file.key,
      editorType: oD(editorType)
    }
  });
  let J = _$$l2({
    file,
    user: i,
    orgUser,
    orgDraftsOwner,
    teamUser: K
  });
  let ee = getIsUpgradeHandlerLoading();
  let et = wR(oD(editorType));
  let ei = getUpgradeEligibility(et, !J);
  let en = getUpgradePathway(et);
  let [er, ea] = useState(!1);
  if (ee) return null;
  if (ei === _$$q.CAN_UPGRADE) {
    er || (handleUpgrade({
      afterUpgradeCallback: lQ,
      licenseType: et,
      upgradeReason: _$$i.DRAFTS_SHARE,
      entryPoint: _$$tc.SHARE_DRAFTS
    })({}), ea(!0));
    return null;
  }
  if (ei === _$$q.CANNOT_UPGRADE && en === _$$J.RE_REQUEST_PATHWAY) return null;
  let es = jsx(a8, {
    file,
    folder,
    repo,
    fileRoles: q
  });
  let eo = jsx(io, {
    file,
    repo,
    team,
    org,
    currentUser,
    isInDraftsFolder,
    dataLoaded,
    planTier
  });
  return jsx(fu, {
    name: "Share Modal",
    properties: {
      resourceType: FResourceCategoryType.FILE,
      resourceId: file.key,
      fileTeamId: file.team_id,
      productType: Bu(editorType),
      modalSource: o,
      canUserAccessProFeature: w5(team)
    },
    children: jsx(sc, {
      file,
      org,
      team,
      isInDraftsFolder,
      isDataLoaded: dataLoaded,
      children: jsx(T, {
        header: es,
        onClose: () => Y(),
        bottomSection: eo,
        children: jsx(a5, {
          activeProjectConnection,
          currentUser,
          dataLoaded,
          file,
          fileRoleRequests,
          fileRoles: q,
          fileSeenStatesByUserId,
          folder,
          folderRoles,
          hideModal: Y,
          isInDraftsFolder,
          isLockedTeam: m,
          numProjectTeamMembers: numProjectTeamMembersWithAccess,
          org,
          orgUser,
          planRecordId,
          planTier,
          repo,
          resourceConnectionSharingGroupUsers: g,
          sharedContainerSetting,
          source: o,
          team,
          workspace
        })
      })
    })
  });
}
export let $$sm0 = Ju(function ({
  fileKey: e,
  source: t,
  isLockedTeam: i = !1
}) {
  var s;
  let l = assertNotNullish(_$$iZ(), "FilePermissions: user is not logged in");
  let d = M4.File.useValue(e).data;
  let c = $S({
    fileKey: e,
    file: d
  });
  let u = h1({
    fileKey: e
  });
  return (!function () {
    let e = HW();
    let t = wA();
    useEffect(() => {
      e && t(_P({
        name: "Prototype Share Opened"
      }));
    }, [t, e]);
  }(), !function (e) {
    let t = wA();
    useEffect(() => {
      "loaded" === e.status && null === e.data.file && t(Ce());
    }, [e, t]);
  }(c), s = !!d && "loaded" === c.status, oY(s, e => {
    sx("share_modal_latency", {
      latency_ms: e,
      modal_type: "file",
      is_outlier: e > 500
    }, {
      forwardToDatadog: !0
    });
  }), d) ? jsx(sp, {
    file: d,
    fileSharePermissionsResult: c,
    resourceConnectionSharingGroupUsers: u,
    user: l,
    source: t,
    isLockedTeam: i
  }) : null;
}, jS);
export const g_ = $$sm0;