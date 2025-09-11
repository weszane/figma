import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useMemo, useState, useEffect, useRef, useLayoutEffect, useCallback, PureComponent, createElement, Suspense } from "react";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager, Xr, useAtomWithSubscription, atom, useAtomValueAndSetter, Rq } from "../figma_app/27355";
import { BrowserInfo, isAnyMobile } from "../figma_app/778880";
import { isInteractionPathCheck } from "../figma_app/897289";
import { q8 } from "../figma_app/459490";
import { QI } from "../9410/60600";
import { useCanUseDevModeDemoFile } from "../figma_app/473493";
import { useSelector, useDispatch, useStore } from "react-redux";
import { b as _$$b } from "../905/985254";
import { tf as _$$tf, fu, j6 } from "../figma_app/831799";
import { e as _$$e } from "../905/621515";
import { N as _$$N, D as _$$D } from "../figma_app/268271";
import { e0 as _$$e2 } from "../905/696396";
import { M as _$$M } from "../905/152487";
import { RSb, B14, y4J, t_E, qnr, kmj, hsL, JGK, XAb, Ttn, Nwg, BrS, v75, Smd, H2x, DKg, wRI, Kze, MJs, zoI, lLk, kp0, Njd, jRE, Byv, Y2_, KTt, HU3, g4U, uPw, Fq3, a9B, ENg, CVA, IQ, K_h, Fff, uTW, sJD, _5$ } from "../figma_app/6204";
import { K as _$$K } from "../905/443068";
import { N as _$$N2 } from "../905/438674";
import { Pw, $n } from "../905/521428";
import { A as _$$A } from "../905/251970";
import { Positioning, UserInterfaceElements, WhiteboardStarterKitCppBindings, CollaborationType, SchemaJoinStatus, Fullscreen, CustomPosition, LayoutTabType } from "../figma_app/763686";
import { r as _$$r } from "../905/249071";
import { a as _$$a } from "../905/29104";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { E as _$$E } from "../905/984674";
import { FQ } from "../9410/571209";
import { clearSelection, addToSelection } from "../figma_app/741237";
import { ni as _$$ni, _X, Z0 } from "../figma_app/62612";
import { Ib } from "../905/129884";
import { v as _$$v } from "../figma_app/759243";
import { ss as _$$ss } from "../figma_app/402783";
import { v as _$$v2, Cw } from "../9410/295369";
import { nG as _$$nG } from "../9410/584673";
import { Cb } from "../9410/659371";
import { getSingletonSceneGraph } from "../905/700578";
import { cF } from "../figma_app/761984";
import { b7 } from "../figma_app/101849";
import { A as _$$A2 } from "../vendor/90566";
import { EH, ji, xo as _$$xo, MC, l0, zp } from "../figma_app/847014";
import { gB, oA as _$$oA } from "../905/723791";
import { Bl } from "../figma_app/967857";
import { IntegrationUtils } from "../figma_app/469876";
import { z4 } from "../905/37051";
import { openFileAtom, selectCurrentFile, useCurrentFileKey, useFullscreenViewFile, openFileTeamIdAtom, openFileKeyAtom } from "../figma_app/516028";
import { yF } from "../figma_app/386952";
import { I as _$$I } from "../figma_app/51637";
import { FEditorType } from "../figma_app/53721";
import { A as _$$A3 } from "../905/920142";
import { mp } from "../figma_app/864723";
import { f as _$$f } from "../905/940356";
import { VisualBellActions } from "../905/302958";
import { VisualBellType, VisualBellIcon } from "../905/576487";
import { Cu } from "../figma_app/314264";
import { d as _$$d } from "../figma_app/444297";
import { $ as _$$$, N as _$$N3 } from "../figma_app/191390";
import { useAtomValue } from "../vendor/525001";
import { buildUploadUrl, isDevEnvironment, buildStaticUrl, getInitialOptions } from "../figma_app/169182";
import { V as _$$V } from "../905/223767";
import { showModalHandler, hideModal, showModal } from "../905/156213";
import { hn } from "../figma_app/297957";
import { c as _$$c } from "../905/370443";
import { E as _$$E2 } from "../905/453826";
import { mp as _$$mp, t as _$$t2, tH as _$$tH, Ot, M$, Fy } from "../figma_app/579169";
import { r1 as _$$r2, Fu } from "../figma_app/545877";
import { UpsellModalType } from "../905/165519";
import { xp, Q1, Xj } from "../905/472146";
import { IR } from "../figma_app/625596";
import { w as _$$w, y as _$$y } from "../905/129046";
import { X as _$$X } from "../905/482718";
import { Q as _$$Q, R as _$$R } from "../905/11928";
import { OS } from "../9410/635666";
import { rq as _$$rq } from "../905/425180";
import { aV as _$$aV, p8 } from "../figma_app/722362";
import { A as _$$A4 } from "../905/956262";
import { jK, C$ } from "../figma_app/829197";
import { M as _$$M2 } from "../905/366117";
import { U as _$$U } from "../905/455766";
import { h as _$$h } from "../905/284399";
import { O0, nu as _$$nu, eg as _$$eg } from "../figma_app/452252";
import { kF, kL } from "../figma_app/121043";
import { n$ as _$$n$, E1 } from "../figma_app/192664";
import { tO as _$$tO, v4, ao as _$$ao, Qr, P7, J_ } from "../figma_app/598952";
import { q3 } from "../figma_app/450829";
import { jJ } from "../figma_app/828908";
import { s as _$$s2 } from "../905/445054";
import { wH } from "../figma_app/844435";
import { Av, tK as _$$tK } from "../figma_app/622881";
import { JU, J3, Gi } from "../figma_app/622574";
import { zC } from "../figma_app/186343";
import { Fk } from "../figma_app/167249";
import { i as _$$i } from "../905/559280";
import { ZH } from "../figma_app/957169";
import { trackEventAnalytics } from "../905/449184";
import { desktopAPIInstance } from "../figma_app/876459";
import { customHistory } from "../905/612521";
import { h as _$$h2 } from "../905/207101";
import { A as _$$A5 } from "../1250/487166";
import { Ay as _$$Ay3 } from "../1250/615231";
import { sR as _$$sR } from "../9410/67768";
import { vi } from "../9410/772021";
import { En } from "../905/116101";
import { wg, NZ, pQ, zo, J1, PD } from "../figma_app/101956";
import { LR } from "../figma_app/120210";
import { w as _$$w2 } from "../0c62c2fd/912149";
import { getUserId } from "../905/372672";
import { t as _$$t3 } from "../905/192333";
import { j as _$$j } from "../figma_app/59886";
import { zP, Uj, SS, ZQ } from "../figma_app/330088";
import { s as _$$s3 } from "../figma_app/354567";
import { QL, EM } from "../905/609392";
import { r as _$$r3 } from "../905/520829";
import { k as _$$k2 } from "../905/585996";
import { x as _$$x } from "../905/211326";
import { lR, $z, Me, c as _$$c2 } from "../figma_app/617427";
import { Q as _$$Q2 } from "../5132/668270";
import { D as _$$D2 } from "../figma_app/908415";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, nB as _$$nB } from "../figma_app/272243";
import { N as _$$N4 } from "../905/482239";
import { USER_FLAG_V2 } from "../1250/200830";
import { jO, Ai } from "../figma_app/242339";
import { xZ } from "../1250/927871";
import { f as _$$f2 } from "../1250/46310";
import { A as _$$A6 } from "../figma_app/882803";
import { Nw, tX as _$$tX } from "../figma_app/78808";
import { f6, ai as _$$ai } from "../figma_app/915202";
import { _l, Jm } from "../figma_app/995208";
import { S as _$$S, bg } from "../figma_app/446435";
import { P as _$$P } from "../1250/232298";
import { A as _$$A7 } from "../1250/545022";
import { I7, XV } from "../figma_app/594947";
import { FP } from "../figma_app/91703";
import { F_, EL } from "../905/858282";
import { S as _$$S2 } from "../figma_app/420927";
import { sx as _$$sx2 } from "../905/941192";
import { browserCapabilities } from "../905/409121";
import ix from "classnames";
import { Jn } from "../905/17223";
import { Hz, Un, jg, Am } from "../figma_app/591738";
import { Rf } from "../905/856036";
import { XHR } from "../905/910117";
import { w as _$$w3 } from "../3276/279527";
import { A as _$$A8 } from "../figma_app/108485";
import { F as _$$F2 } from "../figma_app/751989";
import { w as _$$w4 } from "../3276/726467";
import { b as _$$b3 } from "../3276/369349";
import { C as _$$C } from "../1250/50098";
import { NuxOnboardingOverlay } from "../4452/529989";
import { lQ } from "../905/934246";
import { handleAtomEvent } from "../905/502364";
import { Dv, Du, NJ } from "../figma_app/419216";
import { O as _$$O } from "../9410/435916";
import { fullscreenValue } from "../figma_app/455680";
import { O as _$$O2 } from "../9410/241650";
import { J as _$$J } from "../9410/591377";
import { N as _$$N5, q as _$$q } from "../figma_app/57000";
import { v as _$$v3 } from "../905/596134";
import { nk as _$$nk, Ch } from "../figma_app/2023";
import { g_ } from "../905/646788";
import { aA as _$$aA, pb as _$$pb, Ij } from "../figma_app/877449";
import { resourceUtils } from "../905/989992";
import { useSubscription } from "../figma_app/288654";
import { lg, m0, Em } from "../figma_app/976749";
import { FFileType } from "../figma_app/191312";
import { GoogleClassroomIntegrationView, UserForRcs, TeamCanAdmin } from "../figma_app/43951";
import { w as _$$w5, tX as _$$tX2, l5, aG as _$$aG } from "../figma_app/728657";
import { b as _$$b4 } from "../905/799737";
import { i as _$$i2 } from "../905/718764";
import { E as _$$E3 } from "../905/632989";
import { Q as _$$Q3 } from "../1250/220026";
import { useLatestRef } from "../figma_app/922077";
import { B as _$$B } from "../905/714743";
import { Ji } from "../figma_app/972736";
import { zE } from "../905/738636";
import { Fz } from "../figma_app/106207";
import { g as _$$g } from "../figma_app/115586";
import { B as _$$B2 } from "../905/524020";
import { a6 as _$$a2, RD } from "../figma_app/198840";
import { n as _$$n } from "../905/79930";
import { cS } from "../figma_app/45218";
import { mI, vX, wV, mN, rL as _$$rL, CM } from "../9410/983167";
import { PH } from "../figma_app/701580";
import { G as _$$G } from "../9410/656872";
import { F_ as _$$F_, EL as _$$EL } from "../905/748636";
import { n as _$$n2, D as _$$D3 } from "../905/347702";
import { Qs } from "../905/992395";
import { debounce } from "../905/915765";
import { C as _$$C2 } from "../figma_app/859828";
import { fD, Lz, qy, Og } from "../figma_app/816671";
import { RL, $s, R9 } from "../9410/320848";
import { A as _$$A9 } from "../svg/758664";
import { A as _$$A0 } from "../svg/430011";
import { A as _$$A1 } from "../svg/519128";
import { A as _$$A10 } from "../svg/221042";
import { getStorage } from "../905/657224";
import { Xk } from "../figma_app/107215";
import { setTagGlobal, captureMessage } from "../905/11";
import { XZ } from "../figma_app/176973";
import { WB } from "../905/761735";
import { kd, mW } from "../figma_app/797994";
import { dq, sZ as _$$sZ } from "../905/845253";
import { IT } from "../905/713695";
import { ol as _$$ol } from "../figma_app/598018";
import { Td } from "../905/595131";
import { k as _$$k3 } from "../905/443820";
import { V3 } from "../figma_app/976345";
import { dO } from "../figma_app/318123";
import { c as _$$c3 } from "../905/850166";
import { lu } from "../figma_app/389091";
import { Hm } from "../figma_app/152368";
import { MR, qU, OO } from "../figma_app/913518";
import { s2 as _$$s5, E$, WB as _$$WB, BC, Nr, yl } from "../figma_app/300024";
import { L as _$$L } from "../905/453756";
import { KX } from "../figma_app/89917";
import { HS } from "../figma_app/416935";
import { nN as _$$nN, wj } from "../figma_app/323326";
import { AutoLayout } from "../905/470281";
import { lk } from "../figma_app/109538";
import { B as _$$B3 } from "../905/380801";
import { Bq } from "../figma_app/482142";
import { registerModal } from "../905/102752";
import { yX } from "../figma_app/918700";
import { Wk } from "../figma_app/397269";
import { A as _$$A11 } from "../1250/318790";
import { logError } from "../905/714362";
import { useFullscreenReady } from "../905/924253";
import { H as _$$H } from "../figma_app/907304";
import { w as _$$w6 } from "../figma_app/106955";
import { m5, rj as _$$rj } from "../9410/983733";
import { _1, kP } from "../figma_app/809086";
import { e as _$$e3 } from "../905/383776";
import { l7, hA, ZO } from "../figma_app/88239";
import { wX } from "../figma_app/710136";
import { PE } from "../figma_app/251115";
import { Bu } from "../figma_app/604494";
import { jx, Ij as _$$Ij, T4, af as _$$af, $9 } from "../figma_app/433401";
import { LC } from "../figma_app/318590";
import { C7 } from "../figma_app/144974";
import { $I } from "../figma_app/322845";
import { Bd } from "../figma_app/846841";
import { jH } from "../figma_app/926950";
import { zl as _$$zl, ST } from "../figma_app/641749";
import { zb } from "../figma_app/612001";
import { Kz } from "../figma_app/637027";
import { x as _$$x2 } from "../figma_app/849451";
import { Hj } from "../figma_app/336229";
import { Op, nr as _$$nr } from "../905/337355";
import { rn as _$$rn } from "../905/988099";
import { R as _$$R2 } from "../figma_app/738753";
import { ts as _$$ts } from "../figma_app/49598";
import { WZ } from "../905/893645";
import { p as _$$p } from "../905/42189";
import { Gv, ak as _$$ak } from "../figma_app/532170";
import { a8 as _$$a3 } from "../figma_app/467440";
import { Of, XC } from "../figma_app/631279";
import { U as _$$U2 } from "../figma_app/825971";
import { g as _$$g2 } from "../figma_app/481637";
import { yE } from "../figma_app/762558";
import { wn, h0 } from "../figma_app/61403";
import { a as _$$a4 } from "../9410/139984";
import { b as _$$b5 } from "../9410/881782";
import { p as _$$p2 } from "../9410/889115";
import { Z as _$$Z } from "../9410/452531";
import { Vr } from "../figma_app/151869";
import { W as _$$W } from "../figma_app/605682";
import { B as _$$B4 } from "../figma_app/846647";
import { XC as _$$XC } from "../figma_app/186402";
import { E1 as _$$E4 } from "../905/696065";
import { Q as _$$Q4 } from "../905/717951";
import oR from "../vendor/128080";
import { B as _$$B5 } from "../figma_app/380543";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { q2 } from "../figma_app/197286";
import { jS } from "../905/136701";
import { M3 } from "../905/759412";
import { C5 } from "../7021/95197";
import { $ as _$$$2 } from "../1250/770005";
import { useIsSelectedFigmakeFullscreen } from "../figma_app/552876";
import { sO as _$$sO } from "../figma_app/21029";
import { i as _$$i3 } from "../9410/16707";
import { Kt, wl, uM, w1 } from "../figma_app/835688";
import { j7 } from "../905/929976";
import { hX } from "../figma_app/644079";
import { U as _$$U3 } from "../figma_app/446378";
import { Nr as _$$Nr } from "../figma_app/524655";
import { oI as _$$oI, Te, Ug } from "../9410/904355";
import { tG as _$$tG } from "../figma_app/757723";
import { _ as _$$_ } from "../figma_app/91620";
import { Dm } from "../9410/645772";
import { p as _$$p3 } from "../figma_app/353099";
let T = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M6.015 3.441 5.7 4.701l-1.26.315c-.505.126-.505.844 0 .97l1.26.315.315 1.26c.126.505.844.505.97 0L7.3 6.3l1.26-.315c.505-.126.505-.844 0-.97L7.3 4.7l-.315-1.26c-.126-.505-.844-.505-.97 0m0 12L5.7 16.7l-1.26.315c-.505.126-.505.844 0 .97l1.26.315.315 1.26c.126.505.844.505.97 0L7.3 18.3l1.26-.315c.505-.126.505-.844 0-.97L7.3 16.7l-.315-1.26c-.126-.505-.844-.505-.97 0M5.7 10.7l.315-1.26c.126-.505.844-.505.97 0L7.3 10.7l1.26.315c.505.126.505.844 0 .97L7.3 12.3l-.315 1.26c-.126.505-.844.505-.97 0L5.7 12.3l-1.26-.315c-.505-.126-.505-.844 0-.97zM10.5 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 6a.5.5 0 1 0 0 1h9a.5.5 0 0 0 0-1zm0 6a.5.5 0 1 0 0 1h9a.5.5 0 0 0 0-1z",
      clipRule: "evenodd"
    })
  });
});
let K = (e, t) => e.filter(e => t.get(e));
var H = (e => (e.DismissImmediately = "dismiss-immediately", e.NoAutoDismiss = "no-auto-dismiss", e.StartAutoDismissTimer = "start-auto-dismiss-timer", e.noop = "no-op", e))(H || {});
function V(e) {
  return useMemo(() => {
    if (!e) return !0;
    let {
      data
    } = b7(getSingletonSceneGraph());
    return JSON.stringify(data.map(e => ({
      t: e.t,
      id: e.id,
      type: e.type,
      stamps: e.stamps
    }))).length > 12e3;
  }, [e]);
}
function Y(e = 2e3) {
  let t = useSelector(e => e.mirror.selectionProperties.whiteboardNumSelected);
  let [i, r] = useState({
    hasDebounceSettled: !1,
    numNodesSelected: void 0
  });
  let a = _$$A2(e => {
    r({
      hasDebounceSettled: !0,
      numNodesSelected: e
    });
  }, e);
  useEffect(() => {
    r({
      hasDebounceSettled: !1,
      numNodesSelected: t
    });
    a(t ?? 0);
  }, [a, t]);
  let s = i.numNodesSelected !== t;
  return i.hasDebounceSettled && !s;
}
function q({
  onClose: e,
  onSummarize: t,
  onAutoDismiss: i
}) {
  let a;
  let o = Y(500);
  let l = V(o);
  let {
    lastSummarizableSelection
  } = function ({
    onAutoDismiss: e,
    selectionIsStable: t
  }) {
    let i = cF();
    let [r, a] = useState(0);
    let s = useSelector(e => e.mirror.sceneGraphSelection);
    let o = useMemo(() => Object.entries(s).filter(([e, t]) => t).map(([e, t]) => e), [s]);
    let [l, d] = useState([]);
    let c = getSingletonSceneGraph();
    let u = 0 === o.length && l.length > 0 && !K(l, c).length;
    useEffect(() => {
      switch (function ({
        currentAutoDismissTimeoutId: e,
        stickySummarizationEnabledForSelection: t,
        lastSummarizableSelectionHasBeenDeleted: i,
        selectionSize: r,
        canRecomputeAutoDismissAction: n
      }) {
        if (0 === r && i) return "dismiss-immediately";
        if (n) {
          if (t) return "no-auto-dismiss";
          if (!e) return "start-auto-dismiss-timer";
        }
        return "no-op";
      }({
        currentAutoDismissTimeoutId: r,
        stickySummarizationEnabledForSelection: i,
        lastSummarizableSelectionHasBeenDeleted: u,
        selectionSize: o.length,
        canRecomputeAutoDismissAction: t
      })) {
        case H.DismissImmediately:
          window.clearTimeout(r);
          a(0);
          e();
          break;
        case H.NoAutoDismiss:
          d(o);
          window.clearTimeout(r);
          a(0);
          break;
        case H.StartAutoDismissTimer:
          a(window.setTimeout(() => {
            e();
          }, 1e4));
      }
    }, [o.length, o, i, u, r, t, e]);
    return {
      lastSummarizableSelection: l
    };
  }({
    onAutoDismiss: i,
    selectionIsStable: o
  });
  useEffect(() => {
    atomStoreManager.set(EH, e => e + 1);
    atomStoreManager.set(ji, () => new Date().toISOString());
  }, []);
  let {
    summarizeCanvasSelection
  } = _$$ss(Positioning.ABOVE, !1, "DISCOVERY_NUDGE");
  let u = Cb();
  let h = Xr(_$$v2);
  let m = o && l;
  m && (a = getI18nString("whiteboard.ai_summary.nudge.too_many_tokens"));
  let f = useRef(null);
  let g = _$$ni();
  let _ = FQ(f, 8);
  useLayoutEffect(() => {
    let e = f.current;
    if (!e) return;
    let t = g.y - 8;
    let i = _$$r.fromOriginAndSize(g.x, t, g.width, g.height);
    let r = e.getBoundingClientRect();
    let n = _(_$$r.fromOriginAndSize(i.right() - r.width - 12, i.top() + 20, r.width, r.height), i);
    if (r.x < 0 || r.y < 0) {
      let t = new Animation(new KeyframeEffect(e, [{
        transform: `translateX(${n.left()}px) translateY(-250px)`
      }, {
        transform: `translateX(${n.left()}px) translateY(${n.top()}px)`
      }], {
        duration: 600
      }));
      t.onfinish = () => {
        e.style.transform = `translateX(${n.left()}px) translateY(${n.top()}px)`;
      };
      t.play();
    } else e.style.transform = `translateX(${n.left()}px) translateY(${n.top()}px)`;
  }, [f, -250, g, _]);
  return jsxs("div", {
    ref: f,
    className: "ai_summary_nudge--container--Xt3Ld",
    children: [jsxs("div", {
      className: "ai_summary_nudge--topContent--EYXY0",
      children: [jsxs("div", {
        className: "ai_summary_nudge--topBar--3FRaK",
        children: [jsx("span", {
          className: _$$s.textHeadingMedium.$,
          children: renderI18nText("whiteboard.ai_summary.nudge.title")
        }), jsx("div", {
          className: "ai_summary_nudge--closeButton--2Lr8q",
          children: jsx(_$$K, {
            onClick: e,
            "aria-label": getI18nString("general.close"),
            htmlAttributes: {
              "data-testid": "close-button"
            },
            children: jsx(_$$A, {})
          })
        })]
      }), jsx("div", {
        className: _$$s.textBodyLarge.colorTextSecondary.$,
        children: renderI18nText("whiteboard.ai_summary.nudge.subtitle")
      }), jsxs("div", {
        className: "ai_summary_nudge--numberContainer--JqUxZ",
        children: [jsx(Z, {
          num: 1
        }), jsx(Z, {
          num: 2
        })]
      }), jsx(X, {
        disabled: m,
        disabledTooltip: a,
        "data-testid": "summarize-button",
        onClick: () => {
          clearSelection();
          addToSelection(lastSummarizableSelection);
          summarizeCanvasSelection();
          t();
          u && h(!0);
        },
        trackingProperties: {
          text: "summarize"
        }
      })]
    }), jsx("div", {
      className: "ai_summary_nudge--middlePerforation--z5eDN"
    }), jsx("div", {
      className: "ai_summary_nudge--bottomContent--EiPHE",
      children: jsxs("div", {
        children: [jsx("span", {
          className: _$$s.textBodyMedium.colorTextSecondary.mr2.$,
          children: renderI18nText("whiteboard.ai_summary.nudge.disclaimer")
        }), jsx(_$$N2, {
          href: _$$nG,
          newTab: !0,
          trusted: !0,
          children: getI18nString("whiteboard.inline_menu.ai_quick_actions_dropdown_disclaimer_cta")
        })]
      })
    }), jsx("div", {
      className: "ai_summary_nudge--bottomPerforation---VeRC"
    })]
  });
}
let X = _$$tf(function ({
  onClick: e,
  disabled: t,
  disabledTooltip: i
}) {
  let n = _$$a() ? getI18nString("whiteboard.inline_menu.ai_quick_actions_beta_badge_text") : "";
  return jsx(fu, {
    name: "AI Summary Nudge CTA",
    properties: {
      disabled: t
    },
    children: jsx(Pw, {
      onClick: e,
      variant: "primary",
      htmlAttributes: {
        "data-testid": "summarize-button",
        "data-tooltip": t ? i : "",
        "data-tooltip-type": Ib.TEXT
      },
      disabled: t,
      children: jsxs("div", {
        className: "ai_summary_nudge--buttonContents--oUSGP",
        children: [jsx("span", {
          className: "ai_summary_nudge--buttonIcon--X-QPt",
          children: jsx(T, {})
        }), renderI18nText("whiteboard.ai_summary.nudge.cta"), jsx("div", {
          className: "ai_summary_nudge--badgeWrapper--QRaRq",
          children: jsx(_$$v, {
            location: t ? "SUMMARIZE_NUDGE_DISABLED" : "SUMMARIZE_NUDGE",
            overrideText: n
          })
        })]
      })
    })
  });
});
function Z({
  num: e
}) {
  let t = 184 / e;
  return jsxs("div", {
    className: "ai_summary_nudge--numberGraphic--CnM2r",
    "aria-hidden": "true",
    children: [jsx(_$$E, {
      fontSize: 14,
      color: "secondary",
      children: e
    }), jsx("div", {
      className: "ai_summary_nudge--textPlaceholder--tx2Yp",
      style: {
        width: `${t}px`
      }
    })]
  });
}
function Q() {
  let e = useSelector(e => e.mirror.selectionProperties.whiteboardSelectionCanShowAiSummaryNudge);
  let t = Y();
  let i = V(t);
  return t && e && !i;
}
function et() {
  let e = useDispatch();
  let {
    isShowing,
    complete
  } = function () {
    let e = function () {
      let e = function () {
        let e = useAtomWithSubscription(Bl);
        let t = useAtomWithSubscription(_$$xo);
        let i = useAtomWithSubscription(MC);
        let r = useAtomWithSubscription(ji);
        let a = useAtomWithSubscription(EH);
        return useMemo(() => {
          if ("loaded" !== t.status || "loaded" !== i.status || "loaded" !== e.status || e.data) return gB({
            isEligibleToShowUser: !1
          });
          let n = new Date(r).getTime() > Date.now() - 864e5;
          return a >= 3 || t.data || i.data || n ? gB({
            isEligibleToShowUser: !1
          }) : gB({
            isEligibleToShowUser: !0
          });
        }, [e, t, i, a, r]);
      }();
      let t = Q();
      return gB({
        shouldShowNudge: !!(e.data.isEligibleToShowUser && t)
      });
    }();
    let {
      show,
      isShowing: _isShowing,
      complete: _complete
    } = _$$e({
      overlay: RSb,
      priority: _$$N.SECONDARY_MODAL
    }, [e]);
    let a = Q();
    let o = useSelector(e => e.mirror.selectionProperties.numSelectedByType);
    useEffect(() => {
      show({
        canShow: e => e.shouldShowNudge
      });
    }, [show, e, o, a]);
    return {
      isShowing: _isShowing,
      complete: _complete
    };
  }();
  return jsx(_$$M, {
    isShowing,
    children: isShowing && jsx(fu, {
      name: _$$e2.AI_SUMMARY_TOPBAR_NUDGE,
      children: jsx(q, {
        onClose: () => {
          e(_$$b({
            [l0]: !0
          }));
          complete();
        },
        onSummarize: () => {
          e(_$$b({
            [zp]: !0
          }));
          e(_$$b({
            [l0]: !0
          }));
          complete();
        },
        onAutoDismiss: () => {
          complete();
        }
      })
    })
  });
}
let eu = atom(!1);
let e_ = "slides_visual_bell_entrypoint_dismissed_user_flag";
function ex() {
  !function () {
    let e = useDispatch();
    let t = _$$d();
    let i = _$$f(e_);
    let r = _$$$();
    let a = _$$N3();
    let [s, o] = useState(!1);
    let [l, d] = useState(!1);
    let c = useCallback(() => {
      e(VisualBellActions.enqueue({
        messageComponentKey: VisualBellType.SLIDE_CONVERSION_VISUAL_BELL,
        type: VisualBellType.SLIDE_CONVERSION_VISUAL_BELL,
        timeoutOverride: 1e4,
        onDismiss: () => {
          o(!0);
          e(_$$b({
            [e_]: !0
          }));
          Cu({
            trackingContext: "Slides conversion visual bell entrypoint",
            name: "slides_conversion_visual_bell_entrypoint_dismissed"
          });
          e(VisualBellActions.enqueue({
            message: getI18nString("slides.visual_bell.we_wont_ask_you_again")
          }));
        }
      }));
    }, [e]);
    useEffect(() => {
      a.size || e(VisualBellActions.dequeue({
        matchType: VisualBellType.SLIDE_CONVERSION_VISUAL_BELL
      }));
    }, [e, a]);
    useEffect(() => {
      i?.createdAt || s || !t || l || !(r >= 3) || (c(), d(!0));
    }, [c, i, s, l, r, t]);
  }();
  return null;
}
let eR = _$$r2(IR);
function eD() {
  let e = useAtomValue(_$$mp);
  let t = useAtomValue(_$$t2);
  let i = useAtomValue(eR);
  let n = useAtomValue(openFileAtom);
  let a = useDispatch();
  let {
    uniqueId,
    isShowing,
    show,
    complete
  } = _$$e({
    overlay: B14,
    priority: _$$N.SECONDARY_MODAL
  }, [e, t, i]);
  let c = hn();
  _$$E2(uniqueId, "properties-panel-select-tab", e => {
    e.properties?.tab === "prototype" && show({
      canShow: (e, t, i) => function (e) {
        let t = Date.now();
        return e.getTime() <= t - 2592e6;
      }(e) && t && c() && !i
    });
  });
  return jsx(_$$X, {
    description: renderI18nText("upsell.advanced_prototyping.description"),
    isShowing,
    media: jsx(_$$w, {
      src: buildUploadUrl("30507591ad5cd385aaf75d4a16ef140b74ec821b"),
      aspectRatio: 1.75
    }),
    onClose: complete,
    position: _$$Q.BOTTOM_RIGHT,
    primaryCta: {
      label: renderI18nText("upsell.advanced_prototyping.see_plans"),
      type: "button",
      onClick: () => {
        a(showModalHandler({
          type: _$$V,
          data: {
            upsellSource: UpsellModalType.ADVANCED_PROTOTYPING_UPSELL,
            teamId: n?.team?.id,
            openCheckoutInNewTab: !0,
            featureList: xp(Q1.filter(e => e !== Xj.AUDIO_CONVERSATIONS), Xj.ADVANCED_PROTOTYPING)
          }
        }));
        complete();
      },
      ctaTrackingDescriptor: _$$c.SEE_PLANS
    },
    secondaryCta: {
      label: renderI18nText("general.learn_more"),
      type: "link",
      href: "https://help.figma.com/hc/articles/14506587589399-Use-variables-in-prototypes",
      ctaTrackingDescriptor: _$$c.LEARN_MORE
    },
    title: renderI18nText("upsell.advanced_prototyping.title"),
    trackingContextName: "Advanced Prototype Upsell Popup",
    userFlagOnShow: IR
  });
}
let eF = "seen_audio_nux";
let eB = _$$r2(eF);
function eU() {
  let e = useAtomWithSubscription(eB);
  let t = _$$e({
    overlay: y4J,
    priority: _$$N.SECONDARY_MODAL
  }, [e]);
  _$$E2(t.uniqueId, "Context Viewed", e => {
    let i = e.properties?.name;
    "join-call-with-others" === i ? t.show({
      canShow: e => !e
    }) : "should-close-open-audio-nux" === i && t.isShowing && t.complete();
  });
  _$$E2(t.uniqueId, "Lost DOM Target", () => {
    t.isShowing && t.complete();
  });
  return jsx(_$$rq, {
    isShowing: t.isShowing,
    userFlagOnShow: eF,
    emphasized: !0,
    title: renderI18nText("collaboration.voice.join_the_conversation"),
    description: jsx("div", {
      style: {
        display: "inline"
      },
      children: jsx(OS, {})
    }),
    targetKey: "audio-nux-key",
    onClose: t.complete,
    trackingContextName: "audio_nux_pointer"
  });
}
var e2 = (e => (e[e.DONT_SHOW = 0] = "DONT_SHOW", e[e.DEFAULT_TO_SRGB = 1] = "DEFAULT_TO_SRGB", e[e.DEFAULT_TO_DISPLAY_P3 = 2] = "DEFAULT_TO_DISPLAY_P3", e))(e2 || {});
let e3 = {
  "Export PNG with Color Profile": "867977941678289774"
};
function e5() {
  let {
    plugins
  } = wH();
  let t = Object.fromEntries(Object.entries(e3).filter(([t, i]) => Object.values(plugins).some(e => e.manifest.id === i)));
  return Object.keys(t).length > 0 ? t : null;
}
function e4() {
  let e = Av();
  return _$$tK(e);
}
let e6 = atom(null);
let e7 = "color_management_default_to_p3_modal--onboardingFooter--VSeAU";
let e8 = "color_management_default_to_p3_modal--content--FzYUr";
let e9 = "seen_color_management_default_to_p3_modal";
let te = _$$tO;
let tt = O0;
let ti = "color_management_default_to_p3_modal";
function tr() {
  let e = _$$e({
    overlay: t_E,
    priority: _$$N.SURVEY
  });
  let {
    currentStep,
    next,
    back
  } = _$$A4({
    numSteps: 2,
    onComplete: e.complete
  });
  let o = _$$f(e9);
  let [l] = jJ();
  let d = e4();
  let c = e5();
  let [u, p] = useAtomValueAndSetter(e6);
  let h = jK();
  let [m, _] = useState(!1);
  let [x] = useAtomValueAndSetter(_$$n$);
  let b = C$();
  useEffect(() => {
    o || null != u || h.colorProfilePreference !== _$$M2.DEFAULT || (p(_$$M2.DISPLAY_P3), b(_$$M2.DISPLAY_P3, {
      canSeeP3: d,
      desktopSetting: l,
      p3Plugins: c
    }), e.show());
  }, [d, u, l, o, e, c, p, b, h.colorProfilePreference]);
  _$$E2(e.uniqueId, kF, () => {
    e.isShowing && 0 === currentStep && e.complete();
  });
  _$$E2(e.uniqueId, _$$nu, () => {
    e.isShowing && 1 === currentStep && e.complete();
  });
  _$$E2(e.uniqueId, kL, () => {
    m || e.isShowing || 0 !== currentStep || x || (next(), e.show());
  });
  _$$E2(e.uniqueId, E1, () => {
    m || e.isShowing || 0 !== currentStep || (next(), e.show());
  });
  return jsxs(_$$U, {
    currentStep,
    isShowing: e.isShowing,
    children: [jsx(_$$h, {
      ctaText: renderI18nText("general.next"),
      element: tn,
      isShowing: e.isShowing,
      modalType: q3.ANNOUNCEMENT_POINTER,
      onClickPrimaryCta: next,
      onClose: e.complete,
      onManualDismiss: () => {
        e.complete();
        _(!0);
      },
      onboardingKey: te,
      stepCounter: jsx("span", {
        className: e7,
        children: renderI18nText("fullscreen.color_management.curator.step_1of2")
      }),
      title: jsx(Fragment, {
        children: renderI18nText("fullscreen.color_management.curator.default_to_p3.user_color_profile.title")
      }),
      trackingContextName: ti,
      userFlagOnShow: e9,
      width: 300
    }), jsx(_$$h, {
      ctaText: renderI18nText("general.got_it"),
      element: ta,
      isShowing: e.isShowing,
      modalType: q3.ANNOUNCEMENT_POINTER,
      onClickPrimaryCta: () => {
        e.complete();
        _(!0);
      },
      onClose: e.complete,
      onManualDismiss: () => {
        e.complete();
        _(!0);
      },
      onboardingKey: tt,
      preventDismissOnClickSecondaryCta: !0,
      secondaryCtaText: jsx("div", {
        onClick: back,
        children: renderI18nText("general.previous")
      }),
      stepCounter: jsx("span", {
        className: e7,
        children: renderI18nText("fullscreen.color_management.curator.step_2of2")
      }),
      title: jsx(Fragment, {
        children: renderI18nText("fullscreen.color_management.curator.change_document_color_profile.title")
      }),
      trackingContextName: ti,
      userFlagOnShow: e9,
      width: 300
    })]
  });
}
function tn() {
  return jsxs("p", {
    className: e8,
    children: [renderI18nText("fullscreen.color_management.curator.default_to_p3.user_color_profile.content", {
      colorProfileSetting: jsx("strong", {
        children: renderI18nText("fullscreen.color_management.curator.color_profile_setting")
      })
    }), " ", jsx(_$$N2, {
      newTab: !0,
      href: _$$s2,
      children: renderI18nText("rcs.rcs_shared.learn_more")
    })]
  });
}
function ta() {
  return jsxs("p", {
    className: e8,
    children: [renderI18nText("fullscreen.color_management.curator.change_document_color_profile.content", {
      fileColorProfile: jsx("strong", {
        children: renderI18nText("fullscreen.color_management.curator.file_color_profile")
      })
    }), " ", jsx(_$$N2, {
      newTab: !0,
      href: _$$s2,
      children: renderI18nText("rcs.rcs_shared.learn_more")
    })]
  });
}
function ts() {
  let [e] = jJ();
  let t = e4();
  let i = e5();
  let [r, a] = useAtomValueAndSetter(e6);
  let o = jK();
  let l = C$();
  useEffect(() => {
    null == r && o.colorProfilePreference === _$$M2.DEFAULT && (a(_$$M2.SRGB), l(_$$M2.SRGB, {
      canSeeP3: t,
      desktopSetting: e,
      p3Plugins: i
    }));
  }, [t, r, e, i, a, l, o.colorProfilePreference]);
  return null;
}
function to() {
  let e = function () {
    let e = jK().colorProfilePreference !== _$$M2.DEFAULT;
    let t = function () {
      let [e] = jJ();
      let t = e4();
      let i = e5();
      return t && i && ["unmanaged", "default", null].includes(e) ? _$$M2.DISPLAY_P3 : _$$M2.SRGB;
    }();
    let [i] = useAtomValueAndSetter(e6);
    return e && null === i ? 0 : t === _$$M2.SRGB ? 1 : t === _$$M2.DISPLAY_P3 ? 2 : 0;
  }();
  if (!function (e) {
    let t = _$$aV();
    let [i, r] = function (e) {
      let [t, i] = useState(!1);
      let [r, a] = useState(!1);
      useEffect(() => {
        let e;
        r && (e = setTimeout(() => {
          i(!t);
          a(!1);
        }, 2e3));
        return () => clearTimeout(e);
      }, [r, t, 2e3]);
      return [t, useCallback(() => a(!0), [])];
    }(2e3);
    useEffect(() => {
      t || r();
    }, [t, r]);
    return i;
  }(0)) return null;
  switch (e) {
    case e2.DONT_SHOW:
      return null;
    case e2.DEFAULT_TO_SRGB:
      return jsx(ts, {});
    case e2.DEFAULT_TO_DISPLAY_P3:
      return jsx(tr, {});
  }
}
function th() {
  let e = _$$e({
    overlay: qnr,
    priority: _$$N.DEFAULT_MODAL
  });
  let t = useDispatch();
  let i = useStore();
  let a = Fk((e, t) => zC(e, t), i.getState().mirror.appModel.currentPage);
  let s = JU(J3());
  let o = !!selectCurrentFile()?.template;
  let l = _$$aV();
  let d = !!_$$f("seen_custom_template_publish_nudge");
  let c = _$$f("figjam_editor_onboarded")?.updatedAt?.getTime();
  let u = !!c && c < Date.now() - 12096e5;
  let m = !l && !d && s && !a && !o && u;
  return (useEffect(() => {
    m && setTimeout(() => {
      e.show();
      t(_$$b({
        seen_custom_template_publish_nudge: !0
      }));
    }, 1e3);
  }, [t, e, m]), e.isShowing) ? jsx(_$$i, {
    step: {
      modalType: q3.DRAGGABLE,
      element: ZH,
      trackingContextName: "custom_template_publish_nudge",
      onboardingKey: v4,
      title: jsx("div", {
        className: _$$s.font13.fontMedium.pl8.pt16.pb16.$,
        children: renderI18nText("whiteboard.inserts.custom_templates_header")
      }),
      width: 300,
      disableFooter: !0,
      hideStepCounter: !0,
      disableHighlight: !0
    },
    onClickPrimaryCta: e.complete,
    onClose: e.complete,
    dismissModal: e.complete,
    dispatch: t
  }) : null;
}
let tx = _$$r2("seen_desktop_download_modal_prompt");
let ty = _$$r2("seen_desktop_download_modal_prompt_v2");
let tb = _$$tH("used_desktop_app");
function tC() {
  let e = useAtomWithSubscription(tx);
  let t = useAtomWithSubscription(ty);
  let i = useAtomWithSubscription(_$$mp);
  let n = useAtomWithSubscription(tb);
  let l = getFeatureFlags().desktop_show_download_prompt;
  let {
    isShowing,
    show,
    complete
  } = _$$e({
    overlay: kmj,
    priority: _$$N.DEFAULT_MODAL
  }, [t, e, i]);
  if (_$$h2(() => {
    desktopAPIInstance || n || !l || show({
      canShow: (e, t, i) => function (e) {
        let t = Date.now();
        return e.getTime() <= t - 12096e5;
      }(i) && !t
    });
  }), !isShowing) return null;
  let p = () => {
    complete();
  };
  return jsx(_$$X, {
    description: renderI18nText("desktop_download_modal_prompt.level_up_your_workflow_with_tabs"),
    isShowing,
    media: jsx(_$$y, {
      aspectRatio: 1.75,
      alt: "A graphic showing the desktop app with tabs",
      src: buildUploadUrl("cedfb41ea4da3cb80d5d062e5b648aa1d6a5cf1b")
    }),
    onClose: p,
    position: _$$Q.BOTTOM_RIGHT,
    primaryCta: {
      label: renderI18nText("desktop_download_modal_prompt.get_the_desktop_app"),
      type: "button",
      onClick: () => {
        trackEventAnalytics("desktop_modal_download_prompt_cta_clicked_v2");
        p();
        customHistory.redirect(`/download/desktop/${BrowserInfo.mac ? "mac" : "win"}`, "_blank");
      },
      ctaTrackingDescriptor: _$$c.DESKTOP_APP_DOWNLOAD
    },
    secondaryCta: {
      label: renderI18nText("desktop_download_modal_prompt.learn_more"),
      type: "link",
      href: "https://help.figma.com/hc/articles/5601429983767-Guide-to-the-Figma-desktop-app",
      ctaTrackingDescriptor: _$$c.LEARN_MORE
    },
    title: renderI18nText("desktop_download_modal_prompt.download_the_figma_desktop_app"),
    trackingContextName: "Desktop Download Modal Prompt",
    userFlagOnShow: "seen_desktop_download_modal_prompt_v2"
  });
}
function tR(e) {
  let {
    viewedSidebar,
    setViewedSidebar
  } = e;
  let a = useDispatch();
  let s = _$$w2({
    rolesToDefaultToOther: ["education"]
  });
  let o = _$$j(s);
  useMemo(() => {
    viewedSidebar || (setViewedSidebar(!0), a(En({
      initialX: 0,
      initialY: 0,
      pinned: _$$t3.PINNED_AND_DOCKED_LEFT,
      initialSelectedCategory: o
    })));
  }, [a, o, viewedSidebar, setViewedSidebar]);
  return jsx(Fragment, {});
}
function tD() {
  let e = getUserId();
  let t = selectCurrentFile();
  let i = useSelector(e => e.mirror.appModel.currentPage);
  let a = Fk((e, t) => zC(e, t), i);
  let o = useSelector(e => !zP(e.mirror.appModel.currentTool));
  let l = Uj(t, e || "");
  let d = Fu("interacted_figjam_whats_new_v2_cta");
  let c = useAtomWithSubscription(d);
  let u = useAtomWithSubscription(wg);
  let [h, m] = useState(!1);
  let _ = _$$e({
    overlay: hsL,
    priority: _$$N.HIGH_PRIORITY_MODAL
  }, [c]);
  _$$h2(() => {
    _.show({
      canShow: e => SS(e) && u && ZQ(t) && a && !o && l
    });
  });
  let x = LR();
  let b = () => {
    x();
    _.complete();
  };
  return jsx(_$$h, {
    isShowing: _.isShowing,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: "FigJam Templates",
    element: () => jsx(tR, {
      viewedSidebar: h,
      setViewedSidebar: m
    }),
    testId: "figjam_templates_whats_new_overlay",
    onClickPrimaryCta: _.complete,
    onClose: b,
    onManualDismiss: b
  });
}
let tz = "figjam_try_confirm_save_steps--descriptionBold--ou7xj";
function tV({
  dismissModal: e
}) {
  let t = useDispatch();
  let i = useCurrentFileKey();
  let a = useSelector(e => e.user?.email_validated_at);
  let s = useSelector(e => i ? e.loadingState[_$$Q2.loadingKeyForPayload({
    file_key: i
  })] : null);
  let o = useSelector(e => i ? e.loadingState[_$$D2.loadingKeyForPayload({
    fileKey: i
  })] : null);
  let l = _$$s3();
  let d = s === _$$r3.LOADING || "loading" === l.status || o === _$$r3.LOADING;
  let c = s === _$$r3.SUCCESS || o === _$$r3.SUCCESS;
  if (useEffect(() => {
    c && e();
  }, [c, e]), !i || !a) return null;
  let u = _$$A3(a).isAfter(_$$A3().subtract(5, "minutes"));
  return jsx("div", {
    className: "figjam_try_confirm_save_steps--modalContent--DezcS",
    children: jsxs("div", {
      className: "figjam_try_confirm_save_steps--textContent--9da6-",
      children: [jsx("h1", {
        className: "figjam_try_confirm_save_steps--headline--RRPzl text--fontPos20--Bcz97 text--_fontBase--QdLsd",
        children: renderI18nText("figjam_try.save_modal.headline")
      }), jsx(_$$k2, {
        multiple: 1
      }), jsx("p", {
        className: "figjam_try_confirm_save_steps--description--bpGw9 text--fontPos13--xW8hS text--_fontBase--QdLsd",
        children: u ? renderI18nText("figjam_try.save_modal.new_team") : renderI18nText("figjam_try.save_modal.save_one_team", {
          share: jsx("p", {
            className: tz,
            children: renderI18nText("figjam_try.save_modal.share")
          }),
          file_duplicate: jsx("p", {
            className: tz,
            children: renderI18nText("figjam_try.save_modal.file_duplicates")
          })
        })
      }), jsx(_$$k2, {
        multiple: 3
      }), jsx(lR, {
        onClick: () => {
          "loaded" === l.status && _$$oA(l.data?.deviceTryFile) ? t(_$$D2({
            fileKey: i
          })) : t(_$$Q2({
            file_key: i
          }));
        },
        disabled: d,
        trackingProperties: {
          buttonContext: "Let\u2019s jam"
        },
        children: jsx(_$$x, {
          isLoading: d,
          children: () => renderI18nText("figjam_try.save_modal.cta")
        })
      })]
    })
  });
}
function tW() {
  let e = _$$e({
    overlay: JGK,
    priority: _$$N.HIGH_PRIORITY_MODAL
  });
  let t = useAtomWithSubscription(openFileAtom);
  let i = t?.isTryFile;
  let a = _$$s3();
  let [o, l] = useState(!1);
  useEffect(() => {
    e.isShowing && !i && e.complete();
  }, [i, e]);
  useEffect(() => {
    let t = QL(_$$ao.key) === _$$ao.value;
    let r = "loaded" === a.status && !!_$$oA(a.data?.deviceTryFile);
    t && r && !o ? (e.show(), l(!0)) : t && i && !r && e.show();
  }, [e, i, a, o]);
  return jsx(_$$h, {
    isShowing: e.isShowing,
    trackingContextName: "Figjam Try Confirm Save Modal",
    modalType: q3.WELCOME,
    element: ({
      dismissModal: e
    }) => jsx(tV, {
      dismissModal: e
    }),
    onClickPrimaryCta: e.complete,
    onClose: e.complete,
    onManualDismiss: e.complete
  });
}
let tZ = "figjam_try_confirm_save--textContainer--9YaF4";
function tQ() {
  let [e, t] = useState(!1);
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: XAb,
    priority: _$$N.HIGH_PRIORITY_MODAL
  });
  let l = useAtomWithSubscription(openFileAtom);
  let d = l?.isTryFile;
  let c = _$$s3();
  let u = QL(_$$ao.key) === _$$ao.value;
  let p = useAtomWithSubscription(_$$N4);
  useEffect(() => {
    !e && u && !d && "loaded" === c.status && _$$oA(c.data?.deviceTryFile)?.claimedAt && _$$oA(c.data?.deviceTryFile)?.claimedByUserId !== p.data && show();
  }, [e, d, u, c, show, p]);
  return jsx(_$$M, {
    isShowing,
    children: jsx(t$, {
      onClose: () => {
        complete();
        t(!0);
      },
      open: isShowing
    })
  });
}
function t$(e) {
  let t = hS({
    ...e,
    preventUserClose: !0
  });
  return jsx(fu, {
    name: "figjam_try_device_already_claimed_overlay",
    children: jsx(bL, {
      manager: t,
      width: 420,
      height: "fixed",
      children: jsx(vo, {
        children: jsxs(_$$nB, {
          padding: 32,
          children: [jsx("div", {
            className: tZ,
            children: jsx("h1", {
              className: "figjam_try_confirm_save--googleTryDeviceAlreadyClaimedHeader--vNLRA text--fontPos20--Bcz97 text--_fontBase--QdLsd",
              children: renderI18nText("figjam_try.already_claimed_modal.header")
            })
          }), jsx(_$$k2, {
            multiple: 1
          }), jsx("div", {
            className: tZ,
            children: jsx("div", {
              className: "figjam_try_confirm_save--googleTryDeviceAlreadyClaimedDescription--WXdx- text--fontPos13--xW8hS text--_fontBase--QdLsd",
              children: renderI18nText("figjam_try.already_claimed_modal.description", {
                file_duplicate: jsx("p", {
                  className: "figjam_try_confirm_save--googleTryDeviceAlreadyClaimedDescriptionBold--CZgl4",
                  children: renderI18nText("figjam_try.already_claimed_modal.file_duplicate")
                })
              })
            })
          }), jsx(_$$k2, {
            multiple: 3
          }), jsx(lR, {
            onClick: e.onClose,
            children: renderI18nText("figjam_try.already_claimed_modal.continue")
          })]
        })
      })
    })
  });
}
let t5 = _$$r2(USER_FLAG_V2);
let t4 = _$$tH("last_figjam_at");
let t6 = _$$r2("dont_show_figjam_updates_in_figma_design");
function t7() {
  let e = useAtomWithSubscription(t6);
  let t = useAtomWithSubscription(wg);
  let i = useAtomWithSubscription(_$$mp);
  let n = useAtomWithSubscription(t4);
  let a = useAtomWithSubscription(t5);
  let o = useAtomWithSubscription(Ot);
  let l = jO();
  let d = _$$e({
    overlay: Ttn,
    priority: _$$N.DEFAULT_MODAL
  }, [e, i, a, o]);
  _$$h2(() => {
    d.show({
      canShow: (e, i, r, a) => {
        if (e || a) return !1;
        let s = _$$f2({
          userCreatedAt: i,
          lastUsedFigjamDate: n,
          hasSeenOverlayV2: r
        });
        return (!t || l) && s;
      }
    });
  });
  return jsx(xZ, {
    context: "editor",
    isShowing: d.isShowing,
    onClose: d.complete
  });
}
function ir() {
  let e = useDispatch();
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: Nwg,
    priority: _$$N.SECONDARY_MODAL
  });
  _$$h2(() => {
    show();
  });
  let a = _$$S({
    templateId: "1522715486231239473",
    source: f6.EDITOR_GLASS_ONBOARDING_MODAL,
    forceOpenNewTab: !0,
    isDrawMode: !0,
    enabled: !isDevEnvironment()
  });
  return jsx(_l, {
    isShowing,
    title: jsx(Fragment, {
      children: renderI18nText("fullscreen.glass_onboarding.title")
    }),
    description: jsx(Fragment, {
      children: renderI18nText("fullscreen.glass_onboarding.body")
    }),
    media: jsx("div", {
      style: {
        width: 332,
        height: 404,
        aspectRatio: "332/404",
        position: "relative",
        display: "block"
      },
      children: jsx(_$$A6, {
        src: buildUploadUrl("91096b2cfc33892469e97410f9f4009a202feedd"),
        autoPlay: !0,
        autoLoop: !0,
        muted: !0,
        showControlsOnVideoLoad: !1,
        hideControlsAlways: !0
      })
    }),
    primaryCta: isDevEnvironment() ? {
      type: "link",
      label: jsx(Fragment, {
        children: renderI18nText("fullscreen.glass_onboarding.cta_playground")
      }),
      ctaTrackingDescriptor: _$$c.TRY_IT_OUT,
      href: "https://www.figma.com/community/file/1522715486231239473"
    } : {
      type: "button",
      label: jsx(Fragment, {
        children: renderI18nText("fullscreen.glass_onboarding.cta_playground")
      }),
      ctaTrackingDescriptor: _$$c.TRY_IT_OUT,
      onClick: () => {
        a(void 0, t => {
          null != t && (e(Nw({
            file: {
              key: t
            },
            name: getI18nString("fullscreen.glass_onboarding.glass_playground_file")
          })), complete());
        });
      }
    },
    secondaryCta: {
      type: "link",
      label: jsx(Fragment, {
        children: renderI18nText("fullscreen.glass_onboarding.cta_ui_kit")
      }),
      ctaTrackingDescriptor: _$$c.TRY_IT_OUT,
      href: "https://www.figma.com/community/file/1527721578857867021"
    },
    onClose: complete,
    trackingContextName: "glass_effect_onboarding_overlay",
    closeButtonColor: "light"
  });
}
function ic() {
  let e = useDispatch();
  let t = useSelector(e => e.currentTeamId);
  let i = useStore();
  let a = useAtomWithSubscription(_$$t2);
  let o = useAtomWithSubscription(NZ);
  let l = jO();
  let d = useAtomWithSubscription(wg);
  let {
    getConfig
  } = I7("exp_library_upsells_v2");
  let {
    isShowing,
    show,
    complete,
    uniqueId
  } = _$$e({
    overlay: BrS,
    priority: _$$N.DEFAULT_MODAL,
    experiment: {
      check: () => getConfig().get("show_library_upsell", !1),
      predicate: e => e,
      postCheck: e => !0
    }
  }, [a]);
  useEffect(() => {
    if (!isShowing) return;
    let t = i.getState().leftPanel.activeTab;
    e(FP({
      tab: UserInterfaceElements.ASSETS
    }));
    return () => {
      e(FP({
        tab: t
      }));
    };
  }, [e, i, isShowing]);
  let x = useCallback(e => {
    e.properties?.action === "copy_paste_from_different_file" && d && show({
      canShow: e => e && o && l
    });
  }, [d, show, o, l]);
  let b = useCallback(() => {
    isShowing && complete();
  }, [isShowing, complete]);
  _$$E2(uniqueId, "component_instance_inserted", x);
  return jsx(_$$rq, {
    arrowPosition: F_.LEFT_TITLE,
    description: renderI18nText("rcs.upsell_libraries.quickly_access_components"),
    emphasized: !0,
    isShowing,
    onClose: b,
    onTargetLost: b,
    primaryCta: {
      label: renderI18nText("rcs.upsell_libraries.see_plans"),
      type: "button",
      onClick: () => {
        e(showModalHandler({
          type: _$$V,
          data: {
            teamId: t ?? void 0,
            upsellSource: UpsellModalType.UPSELL_LIBRARIES_REUSE_COMPONENTS_OVERLAY,
            openCheckoutInNewTab: !0
          }
        }));
        b();
      },
      ctaTrackingDescriptor: _$$c.GOT_IT
    },
    secondaryCta: {
      label: renderI18nText("rcs.upsell_libraries.not_now"),
      type: "button",
      onClick: b,
      ctaTrackingDescriptor: _$$c.GOT_IT
    },
    targetKey: _$$D,
    title: renderI18nText("rcs.upsell_libraries.reuse_components_across_all_files"),
    trackingContextName: "Upsell Libraries Reuse Components Overlay"
  });
}
let im = "seen_link_shortcut_overlay";
let ig = _$$r2(im);
function i_() {
  let e = useDispatch();
  let t = useAtomValue(ig);
  let {
    show,
    isShowing,
    complete,
    uniqueId
  } = _$$e({
    overlay: v75,
    priority: _$$N.DEFAULT_MODAL
  }, [t]);
  let l = browserCapabilities.isApple();
  let d = useMemo(() => jsx(_$$S2, {
    shortcut: l ? "\u2318K" : "Ctrl+K"
  }), [l]);
  let c = useMemo(() => jsx(_$$S2, {
    shortcut: l ? "\u21E7\u2318U" : "Shift+Ctrl+U"
  }), [l]);
  _$$E2(uniqueId, ["show_link_shortcuts_overlay"], () => {
    show({
      canShow: t => (e(_$$b({
        seen_link_shortcut_overlay: !0
      })), !t)
    });
  });
  return jsx(_$$X, {
    description: jsxs("div", {
      children: [renderI18nText("fullscreen.link_shortcuts_onboarding.description"), jsxs("ul", {
        className: _$$s.py8.$,
        style: _$$sx2.add({
          listStyle: "disc inside"
        }).$,
        children: [jsx("li", {
          children: renderI18nText("fullscreen.link_shortcuts_onboarding.show_actions_updated", {
            actionsKeyCommand: jsx("strong", {
              children: d
            })
          })
        }), jsx("li", {
          children: renderI18nText("fullscreen.link_shortcuts_onboarding.show_links_updated", {
            link: jsx("strong", {
              children: renderI18nText("fullscreen.link_shortcuts_onboarding.create_link")
            }),
            linkKeyCommand: c
          })
        })]
      })]
    }),
    isShowing,
    onClose: complete,
    position: _$$Q.BOTTOM_RIGHT,
    primaryCta: {
      label: renderI18nText("fullscreen.link_shortcuts_onboarding.got_it"),
      type: "button",
      onClick: complete,
      ctaTrackingDescriptor: _$$c.GOT_IT
    },
    testId: "linkShortcutOverlay",
    title: renderI18nText("fullscreen.link_shortcuts_onboarding.title"),
    trackingContextName: "Link Shortcuts Preference Onboarding Modal",
    userFlagOnShow: im,
    width: 350
  });
}
var iy = ix;
let iE = "dismissed_local_component_asset_panel_pointer";
let iT = _$$r2(iE);
function iw() {
  let e = useDispatch();
  let t = getUserId();
  let i = useAtomWithSubscription(wg);
  let a = useAtomWithSubscription(iT);
  let o = useAtomWithSubscription(NZ);
  let l = useAtomWithSubscription(pQ);
  let d = useAtomWithSubscription(_$$t2);
  let c = jO();
  let u = selectCurrentFile()?.teamId == null;
  let {
    isShowing,
    show,
    complete,
    uniqueId
  } = _$$e({
    overlay: Smd,
    priority: _$$N.SECONDARY_MODAL,
    experiment: {
      check: () => Hz(t ?? void 0),
      predicate: e => e,
      postCheck: e => !e
    }
  }, [a, d, l]);
  let C = useCallback(() => {
    i && show({
      canShow: (e, t, i) => c && t && (i || o)
    });
  }, [c, i, o, show]);
  let v = useCallback(() => {
    isShowing && (complete(), e(_$$b({
      [iE]: !0
    })));
  }, [e, complete, isShowing]);
  _$$E2(uniqueId, "action_create_symbol", C);
  _$$E2(uniqueId, "component_instance_inserted", v);
  return jsx(_$$rq, {
    isShowing,
    targetKey: Qr,
    description: jsxs(Fragment, {
      children: [jsx("div", {
        className: _$$s.pt6.mr36.$,
        children: u ? renderI18nText("design_systems.assets_panel.drag_drop_component_draft") : renderI18nText("design_systems.assets_panel.drag_drop_component")
      }), jsx(Jn, {
        onClick: v,
        innerText: getI18nString("general.close"),
        "aria-label": getI18nString("general.close"),
        className: iy()(Rf, _$$s.absolute.top0.right0.mr8.mt10.$)
      })]
    }),
    primaryCta: {
      label: renderI18nText("design_systems.assets_panel.got_it"),
      type: "button",
      onClick: v,
      ctaTrackingDescriptor: _$$c.GOT_IT
    },
    onClose: v,
    trackingContextName: "Local Component Asset Panel Pointer",
    arrowPosition: F_.LEFT_TITLE,
    emphasized: !0,
    hideCloseButton: !0
  });
}
let iI = _$$r2("seen_mobile_comment_download_modal_prompt");
function ik() {
  let e = useDispatch();
  let t = useAtomWithSubscription(iI);
  let i = useSelector(e => e.userAnalyticsData?.is_active_mobile_user);
  let o = useSelector(e => e.user?.created_at);
  let l = _$$A3(o).add(14, "day").isSameOrAfter(_$$A3());
  let {
    isShowing,
    show,
    complete,
    uniqueId
  } = _$$e({
    overlay: H2x,
    priority: _$$N.DEFAULT_MODAL
  }, [t]);
  if (_$$E2(uniqueId, _$$w3, useCallback(() => {
    show({
      canShow: e => !!getFeatureFlags().mobile_download_modal_prompts && !e && !l && !i
    });
  }, [show, i, l])), !isShowing) return null;
  let m = () => {
    XHR.post("/api/send_mobile_download_email", {
      type: "comment"
    });
    trackEventAnalytics("post_comment_mobile_app_download_prompt_email_me_cta_clicked");
    complete();
    e(VisualBellActions.enqueue({
      message: getI18nString("rcs.mobile_comment_reply_upsell.email_sent")
    }));
  };
  return jsx(_$$X, {
    description: renderI18nText("mobile_download_prompts.scan_the_qr_code"),
    isShowing,
    media: jsx(_$$y, {
      aspectRatio: 1.75,
      alt: "A graphic show mobile comments with a qr code",
      src: buildUploadUrl("6c270bb31fb5af03393425b7f0a6462ec59d04ab")
    }),
    onClose: () => {
      complete();
    },
    position: _$$Q.BOTTOM_RIGHT,
    primaryCta: {
      label: renderI18nText("mobile_download_prompts.email_me"),
      type: "button",
      onClick: () => m(),
      ctaTrackingDescriptor: _$$c.MOBILE_APP_DOWNLOAD_COMMENT_PROMPT_CLICKED
    },
    secondaryCta: {
      label: renderI18nText("mobile_download_prompts.learn_more"),
      type: "link",
      href: "https://help.figma.com/hc/articles/1500007537281-Guide-to-the-Figma-mobile-app",
      ctaTrackingDescriptor: _$$c.LEARN_MORE
    },
    title: renderI18nText("mobile_download_prompts.never_miss_a_comment"),
    trackingContextName: "Mobile Comment Download Modal Prompt",
    userFlagOnShow: "seen_mobile_comment_download_modal_prompt"
  });
}
function iF(e) {
  return jsx("div", {
    className: "connector_modal_wrapper--connectorModalWrapper--uCUjA",
    children: e.children
  });
}
let iz = "onboard_figjam_viewer--contentContainer--t9zim";
let iV = "onboard_figjam_viewer--imageContainer--rvqD8";
let iW = "onboard_figjam_viewer--image--ZdwAA";
let iY = "onboard_figjam_viewer--mainContent--8TgvP text--fontPos12Whyte---tkNx text--_fontBaseWhyte--efAjI";
let iJ = "onboard_figjam_viewer--normal--HjE2J";
let iq = "onboard_figjam_viewer--bold--kC3mV";
class iX extends PureComponent {
  render() {
    let e = jsxs(Fragment, {
      children: [this.props.buttonText, !this.props.buttonText && this.props.steps && this.props.steps.current === this.props.steps.total && renderI18nText("rcs.rcs_shared.done"), !this.props.buttonText && this.props.steps && this.props.steps.current < this.props.steps.total && renderI18nText("rcs.figjam_onboarding.next")]
    });
    return jsxs("div", {
      className: iz,
      children: [jsxs("div", {
        style: _$$sx2.add({
          width: `${this.props.imgContainerWidth}px`
        }).$,
        className: iV,
        children: [jsx("span", {
          className: "onboard_figjam_viewer--imgHelper--SJXYZ",
          "aria-hidden": "true"
        }), jsx("img", {
          className: iW,
          src: this.props.imgSrc,
          alt: ""
        })]
      }), jsxs("div", {
        className: iy()({
          [iY]: !0,
          [iJ]: !this.props.isBold,
          [iq]: !!this.props.isBold
        }),
        children: [this.props.titleText && jsx("div", {
          className: "onboard_figjam_viewer--title--k1Gpk",
          children: this.props.titleText
        }), jsx("div", {
          className: "onboard_figjam_viewer--text--xkcTB",
          children: this.props.bodyText
        }), jsxs("div", {
          className: "onboard_figjam_viewer--bottomContentRow--PgTeU",
          children: [jsx("div", {
            className: iy()({
              "onboard_figjam_viewer--secondaryText--THVcI": !0,
              [iJ]: !this.props.isBold,
              [iq]: !!this.props.isBold
            }),
            children: this.props.steps ? renderI18nText("rcs.rcs_shared.step_counter", {
              currentStepNum: this.props.steps.current,
              totalNumSteps: this.props.steps.total
            }) : jsx(Fragment, {})
          }), this.props.isBold ? jsx(_$$J, {
            onClick: this.props.onNext,
            autoFocus: !0,
            children: e
          }) : jsx($z, {
            onClick: this.props.onNext,
            children: e
          })]
        })]
      }), jsx("div", {
        className: "onboard_figjam_viewer--closeButton--hm43f",
        children: jsx(_$$K, {
          onClick: this.props.onDismiss,
          "aria-label": getI18nString("modal.close"),
          children: jsx(_$$A, {
            className: this.props.isBold ? iq : void 0
          })
        })
      })]
    });
  }
}
iX.displayName = "FigJamOnboardingModal";
let iQ = buildUploadUrl("07ff49c75c8933ea70ff2e4776503291c31a35ef");
function i$(e) {
  let t = _$$O2();
  useEffect(() => (fullscreenValue.triggerAction("set-tool-hand", null), () => fullscreenValue.triggerAction("set-tool-default", null)), []);
  useEffect(() => (t({
    eventName: "hand_tooltip_shown"
  }), () => t({
    eventName: "pan_zoom_completed"
  })), [t]);
  let i = Un();
  return jsx(iF, {
    children: jsx(Dv, {
      targetType: "dom",
      targetKey: _$$N5,
      topPadding: -6,
      hasShadow: e.hasShadow,
      children: jsx(iX, {
        bodyText: jsx("span", {
          children: renderI18nText("rcs.figjam_onboarding.use_the_hand_tool_and_drag_to_move_around_hold_space_to_activate_it_anytime", {
            spaceKey: jsx("b", {
              children: renderI18nText("rcs.figjam_onboarding.space")
            })
          })
        }),
        onNext: e.onClickPrimaryCta,
        steps: {
          current: 2,
          total: i ? 2 : 3
        },
        onDismiss: () => {
          e.dismissModal();
          t({
            eventName: "hand_tooltip_dismissed"
          });
        },
        imgSrc: iQ
      })
    })
  });
}
let i1 = buildUploadUrl("4e36d3bbbf8633fef1b86238f66bb1bf54f54d2a");
function i2(e) {
  let t = BrowserInfo.mac ? getI18nString("rcs.figjam_onboarding.cmd") : getI18nString("rcs.figjam_onboarding.ctrl");
  let i = _$$v3() ? -10 : -3;
  let a = Un();
  let s = _$$O2();
  useEffect(() => {
    s({
      eventName: "zoom_tooltip_shown"
    });
  }, [s]);
  return jsx(iF, {
    children: jsx(Dv, {
      targetType: "dom",
      topPadding: i,
      targetKey: _$$q,
      hasShadow: e.hasShadow,
      children: jsx(iX, {
        bodyText: jsx("span", {
          children: renderI18nText("rcs.figjam_onboarding.pinch_to_zoom_on_a_trackpad_hold_command_while_scrolling_or_use", {
            commandKey: jsx("b", {
              children: t
            }),
            plusOrMinusKeys: jsx("b", {
              children: renderI18nText("rcs.figjam_onboarding.plus_or_minus")
            })
          })
        }),
        onNext: e.onClickPrimaryCta,
        steps: {
          current: 1,
          total: a ? 2 : 3
        },
        onDismiss: () => {
          e.dismissModal();
          s({
            eventName: "zoom_tooltip_dismissed"
          });
        },
        imgSrc: i1
      })
    })
  });
}
function i3(e) {
  return jsx(_$$h, {
    testId: e.testId ? e.testId : "ZoomConnectorOverlay",
    modalType: q3.SELF_CONTAINED,
    trackingContextName: "FigJam Editor Onboarding - Zoom",
    element: i2,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function i5(e) {
  let t = Un();
  return jsx(_$$h, {
    testId: e.testId ? e.testId : "HandToolConnectorOverlay",
    modalType: q3.SELF_CONTAINED,
    trackingContextName: "FigJam Editor Onboarding - Hand Tool",
    userFlagOnShow: t ? "figjam_editor_onboarded" : void 0,
    element: i$,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
let i4 = buildUploadUrl("8f3066fc3906f11f2601a390725f2b7af58e01a1");
let i6 = [i3, i5, function (e) {
  return jsx(_$$h, {
    testId: e.testId ? e.testId : "ShareConnectorOverlay",
    modalType: q3.SELF_CONTAINED,
    trackingContextName: "FigJam Editor Onboarding - Share",
    userFlagOnShow: "figjam_editor_onboarded",
    element: e => jsx(iF, {
      children: jsx(Dv, {
        targetType: "dom",
        targetKey: v4,
        topPadding: -6,
        children: jsx(iX, {
          bodyText: jsx("span", {
            children: renderI18nText("rcs.figjam_onboarding.invite_others_or_share_this_file_with_a_link_to_jam_with_your_team")
          }),
          onNext: e.onClickPrimaryCta,
          steps: {
            current: 3,
            total: 3
          },
          onDismiss: e.dismissModal,
          imgSrc: i4
        })
      })
    }),
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}];
function ra({
  skipAccountCreationDateCheck: e = !1
}) {
  let t = _$$aV();
  let i = lg();
  let r = selectCurrentFile();
  let a = useAtomWithSubscription(_$$mp);
  let o = useSubscription(GoogleClassroomIntegrationView, {
    currentOrgId: r?.parentOrgId || null
  });
  return useMemo(() => resourceUtils.all([a, o]).transform(r => {
    let [n, a] = r;
    let s = function (e) {
      let t = Date.now();
      return e.getTime() <= t - 12096e5;
    }(n);
    let o = !!a.org?.k12GoogleOrg || _$$aA(a.currentUser.profile?.jobTitle || "");
    return !t && i === FFileType.WHITEBOARD && (e || s) && o;
  }), [a, o, i, t, e]);
}
let rs = buildUploadUrl("db6976747d085e1350d443cd04b08e7ba979b86b");
function ro({
  isShowing: e,
  onPrimaryCtaClick: t,
  onClose: i
}) {
  return jsx(_$$M, {
    isShowing: e,
    children: jsx(fu, {
      name: "Share to Google Classroom New User Onboarding",
      children: jsx(Dv, {
        targetType: "dom",
        targetKey: "share",
        isBold: !0,
        topPadding: -6,
        autoWidth: !0,
        children: jsx(iX, {
          isBold: !0,
          titleText: renderI18nText("whiteboard.google_classroom.onboarding.new_user.header"),
          bodyText: renderI18nText("whiteboard.google_classroom.onboarding.new_user.body"),
          buttonText: renderI18nText("whiteboard.google_classroom.onboarding.show_me"),
          onNext: t,
          onDismiss: i,
          imgSrc: rs,
          imgContainerWidth: 105
        })
      })
    })
  });
}
function rl({
  isShowing: e,
  onClose: t
}) {
  return jsx(_$$rq, {
    arrowPosition: F_.LEFT_TITLE,
    clickOutsideToHide: !0,
    description: jsx("div", {
      children: renderI18nText("whiteboard.google_classroom.pointer.body")
    }),
    disableHighlight: !0,
    emphasized: !0,
    isShowing: e,
    onClose: t,
    onTargetLost: t,
    targetKey: _$$pb,
    trackingContextName: "Share to Google Classroom Share Option Pointer",
    zIndex: _$$R.MODAL
  });
}
let rd = "seen_figjam_share_to_google_classroom_existing_user_onboarding";
let rc = _$$r2(rd);
let ru = "seen_figjam_share_to_google_classroom_new_user_onboarding";
let rp = _$$r2(ru);
let rh = _$$r2("has_shared_to_google_classroom");
let rm = _$$r2("figjam_editor_onboarded");
let rf = "start_share_to_classroom_new_user_onboarding";
function rg() {
  let e = useDispatch();
  let t = ra({
    skipAccountCreationDateCheck: !0
  });
  let i = useAtomWithSubscription(rc);
  let a = useAtomWithSubscription(rp);
  let o = useAtomWithSubscription(rh);
  let l = useAtomWithSubscription(Ij);
  let {
    show,
    isShowing,
    complete,
    uniqueId
  } = _$$e({
    overlay: DKg,
    priority: _$$N.OVERRIDING_MODAL
  }, [a, i, o, t]);
  _$$E2(uniqueId, rf, () => {
    show({
      onShow: () => {
        e(_$$b({
          [ru]: !0
        }));
      },
      canShow: (e, t, i, r) => !e && !t && !i && r
    });
  });
  useEffect(() => {
    i.data && complete();
  }, [i, complete]);
  let {
    currentStep,
    next
  } = _$$A4({
    numSteps: 2,
    onComplete: complete
  });
  let b = function ({
    isShowing: e,
    next: t,
    complete: i
  }) {
    let n = useDispatch();
    let a = selectCurrentFile();
    return [jsx(ro, {
      isShowing: e,
      onPrimaryCtaClick: () => {
        if (!a) {
          i();
          return;
        }
        n(showModalHandler({
          type: g_,
          data: {
            fileKey: a.key,
            source: _$$nk.shareToGoogleClassroomOnboarding
          }
        }));
        t();
      },
      onClose: i
    }, "share-to-google-classroom-new-user-callout"), jsx(rl, {
      isShowing: e,
      onClose: i
    }, "share-to-google-classroom-share-option-pointer")];
  }({
    isShowing,
    next,
    complete
  });
  useEffect(() => {
    l && isShowing && 0 === currentStep && next();
  }, [currentStep, isShowing, l, next]);
  return jsx(_$$U, {
    currentStep,
    isShowing,
    children: b
  });
}
function r_(e) {
  let t = useDispatch();
  return () => {
    t(_$$b({
      figjam_editor_onboarded: !0
    }));
    e();
  };
}
function rx({
  overlayUniqueId: e,
  afterReset: t
}) {
  let i = useDispatch();
  _$$E2(e, "Reset Onboarding", () => {
    i(_$$b({
      figjam_editor_onboarded: !1,
      figjam_browse_templates_modal_onboarded: !1,
      figjam_browse_templates_modal_onboarding_item_selected: !1
    }));
    t && t();
  });
}
function ry({
  steps: e,
  onComplete: t,
  isShowing: i,
  overlayUniqueId: a
}) {
  let {
    currentStep,
    next,
    reset
  } = _$$A4({
    numSteps: e.length,
    onComplete: t
  });
  rx({
    overlayUniqueId: a,
    afterReset: reset
  });
  return jsx(_$$U, {
    currentStep,
    isShowing: i,
    children: useMemo(() => e.map(e => createElement(e, {
      onClickPrimaryCta: next,
      onClose: lQ,
      onManualDismiss: t,
      isShowing: i
    })), [next, t, i, e])
  });
}
function rH({
  onClickPrimaryCta: e,
  useCase: t
}) {
  let i = selectCurrentFile();
  let r = useDispatch();
  let a = _$$O2();
  return {
    onNext: useCallback(() => {
      i && (r(showModalHandler({
        type: g_,
        data: {
          fileKey: i.key,
          source: _$$nk.expFigJamOnboardingShareVariant
        }
      })), handleAtomEvent({
        id: "open share modal"
      }), a({
        eventName: "share_board_clicked",
        useCase: t
      }));
      e();
    }, [i, r, e, a, t])
  };
}
let rz = "make_something_assets--svg--hgXqn";
let rV = "make_something_assets--svgHovered--3XZdi";
let rW = "make_something_assets--transformable--Ku46s";
let rY = "make_something_assets--transformLeftBrainstorm--To6dH";
let rJ = "make_something_assets--transformRightBrainstorm--DH4Yj";
let rq = "make_something_assets--transformLeftUpdates--HVSJ5";
let rX = "make_something_assets--transformRightUpdates--jOJJ-";
let rZ = "make_something_assets--transformLeftPlanning--6tBWf";
let rQ = "make_something_assets--transformRightPlanning--H2U0C";
let r$ = "make_something_assets--transformRightDiagramming--2ff-F";
function r0(e) {
  return jsxs("svg", {
    width: "136",
    viewBox: "0 0 196 136",
    fill: "none",
    className: iy()(rz, {
      [rV]: e.hovered
    }),
    children: [jsx("rect", {
      x: "27.1868",
      y: "27.8497",
      width: "141.626",
      height: "142.374",
      fill: "#E5F4FF",
      stroke: "black",
      strokeWidth: "0.373684"
    }), jsx("rect", {
      x: "27.1868",
      y: "3.18684",
      width: "141.626",
      height: "19.8053",
      fill: "#0D99FF",
      stroke: "black",
      strokeWidth: "0.373684"
    }), jsxs("g", {
      filter: "url(#filter0_d_351_43460)",
      children: [jsx("rect", {
        x: "37.4653",
        y: "38.1284",
        width: "34.3789",
        height: "34.3789",
        fill: "#FFD45B"
      }), jsx("rect", {
        x: "37.6522",
        y: "38.3153",
        width: "34.0053",
        height: "34.0053",
        stroke: "black",
        strokeWidth: "0.373684"
      })]
    }), jsxs("g", {
      filter: "url(#filter1_d_351_43460)",
      children: [jsx("rect", {
        x: "124.157",
        y: "81",
        width: "34.3789",
        height: "34.3789",
        fill: "#FFD45B"
      }), jsx("rect", {
        x: "124.344",
        y: "81.1868",
        width: "34.0053",
        height: "34.0053",
        stroke: "black",
        strokeWidth: "0.373684"
      })]
    }), jsxs("g", {
      filter: "url(#filter2_d_351_43460)",
      children: [jsx("rect", {
        x: "81",
        y: "38",
        width: "34.3789",
        height: "34.3789",
        fill: "#80CAFF"
      }), jsx("rect", {
        x: "81.1868",
        y: "38.1868",
        width: "34.0053",
        height: "34.0053",
        stroke: "black",
        strokeWidth: "0.373684"
      })]
    }), jsxs("g", {
      filter: "url(#filter3_d_351_43460)",
      children: [jsx("rect", {
        x: "80.8096",
        y: "123.326",
        width: "34.3789",
        height: "34.3789",
        fill: "#80CAFF"
      }), jsx("rect", {
        x: "80.9964",
        y: "123.513",
        width: "34.0053",
        height: "34.0053",
        stroke: "black",
        strokeWidth: "0.373684"
      })]
    }), jsx("rect", {
      x: "84.9214",
      y: "128.181",
      width: "24.2895",
      height: "4.48421",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("rect", {
      x: "40.8262",
      y: "42.2361",
      width: "24.2895",
      height: "4.48421",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("rect", {
      x: "129.021",
      y: "85.1079",
      width: "24.2895",
      height: "4.48421",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("rect", {
      x: "129.021",
      y: "100.057",
      width: "24.2895",
      height: "4.48421",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("rect", {
      x: "40.8262",
      y: "49.7126",
      width: "18.3105",
      height: "4.48421",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("rect", {
      x: "129.021",
      y: "92.584",
      width: "20.9263",
      height: "4.48421",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("path", {
      d: "M87.4033 45.8193C88.2079 46.4289 88.9008 47.0959 89.6122 47.8073",
      stroke: "black",
      strokeWidth: "1.49474",
      strokeLinecap: "round"
    }), jsx("path", {
      d: "M97.5591 43.8335V48.0303",
      stroke: "black",
      strokeWidth: "1.49474",
      strokeLinecap: "round"
    }), jsx("path", {
      d: "M103.975 49.5765C106.065 48.776 108.231 47.9817 110.38 47.3677",
      stroke: "black",
      strokeWidth: "1.49474",
      strokeLinecap: "round"
    }), jsx("path", {
      d: "M103.748 57.5273H109.491",
      stroke: "black",
      strokeWidth: "1.49474",
      strokeLinecap: "round"
    }), jsx("path", {
      d: "M98.8926 62.6094V67.4688",
      stroke: "black",
      strokeWidth: "1.49474",
      strokeLinecap: "round"
    }), jsx("path", {
      d: "M90.1268 58.5264C89.2081 59.2528 88.1169 59.8811 87.2876 60.7104",
      stroke: "black",
      strokeWidth: "1.49474",
      strokeLinecap: "round"
    }), jsxs("g", {
      filter: "url(#filter4_d_351_43460)",
      children: [jsx("rect", {
        x: "81",
        y: "80.7251",
        width: "34.3789",
        height: "34.3789",
        fill: "#FFD45B"
      }), jsx("rect", {
        x: "81.1868",
        y: "80.9119",
        width: "34.0053",
        height: "34.0053",
        stroke: "black",
        strokeWidth: "0.373684"
      })]
    }), jsx("path", {
      d: "M108.795 102.748L108.954 102.837L109.047 102.681L109.454 101.997C109.755 101.492 110.248 101.121 110.825 100.966C111.402 100.812 112.014 100.886 112.527 101.173C113.039 101.459 113.41 101.933 113.559 102.489C113.708 103.046 113.625 103.642 113.324 104.146L113.324 104.146L112.957 104.763L112.957 104.763L110.552 108.797L105.825 106.155C105.313 105.869 104.942 105.395 104.793 104.839C104.644 104.282 104.728 103.687 105.028 103.183C105.329 102.678 105.821 102.308 106.398 102.153C106.975 101.998 107.587 102.073 108.1 102.36L108.795 102.748Z",
      fill: "#F24E1E",
      stroke: "black",
      strokeWidth: "0.373684"
    }), jsx("path", {
      d: "M116.865 94.0866L116.958 94.2427L117.116 94.154L117.811 93.7653C118.324 93.4788 118.936 93.4037 119.513 93.5582C120.09 93.7127 120.583 94.0836 120.884 94.5878C121.185 95.0918 121.269 95.6876 121.12 96.2442C120.971 96.8009 120.6 97.2749 120.088 97.5613L120.088 97.5614L119.461 97.9124L119.461 97.9125L115.362 100.203L112.589 95.5518C112.288 95.0478 112.204 94.4522 112.353 93.8958C112.502 93.3393 112.873 92.8655 113.385 92.5793C113.897 92.293 114.51 92.2181 115.087 92.3727C115.664 92.5273 116.156 92.8982 116.457 93.4024L116.865 94.0866Z",
      fill: "#F24E1E",
      stroke: "black",
      strokeWidth: "0.373684"
    }), jsxs("g", {
      filter: "url(#filter5_d_351_43460)",
      className: iy()(rW, rJ),
      children: [jsx("rect", {
        x: "124",
        y: "37.761",
        width: "34.3789",
        height: "34.3789",
        fill: "#FFD45B"
      }), jsx("rect", {
        x: "124.187",
        y: "37.9478",
        width: "34.0053",
        height: "34.0053",
        stroke: "black",
        strokeWidth: "0.373684"
      })]
    }), jsx("path", {
      d: "M131.262 57.6483C132.364 58.2951 133.535 59.063 134.814 59.2976C138.578 59.9876 139.728 56.6784 139.99 53.525C140.181 51.2338 140.49 47.2706 137.707 46.3822C135.469 45.668 135.63 48.5222 135.525 50.0614C135.198 54.8126 139.249 59.0839 144.177 57.7244C145.893 57.251 147.804 55.2775 148.694 53.7787C149.217 52.8971 149.432 51.8588 149.988 51.0257",
      stroke: "black",
      strokeWidth: "1.49474",
      strokeLinecap: "round",
      className: iy()(rW, rJ)
    }), jsx("circle", {
      cx: "150.532",
      cy: "37.7597",
      r: "3.92368",
      fill: "#A259FF",
      stroke: "black",
      strokeWidth: "0.373684",
      className: iy()(rW, rJ)
    }), jsxs("g", {
      filter: "url(#filter6_d_351_43460)",
      className: iy()(rW, rY),
      children: [jsx("rect", {
        x: "37",
        y: "81.208",
        width: "34.3789",
        height: "34.3789",
        fill: "#80CAFF"
      }), jsx("rect", {
        x: "37.1868",
        y: "81.3948",
        width: "34.0053",
        height: "34.0053",
        stroke: "black",
        strokeWidth: "0.373684"
      })]
    }), jsx("rect", {
      className: iy()(rW, rY),
      x: "41.8633",
      y: "87.5618",
      width: "24.2895",
      height: "4.48421",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("circle", {
      className: iy()(rW, rY),
      cx: "70.6325",
      cy: "98.0258",
      r: "3.92368",
      fill: "#A259FF",
      stroke: "black",
      strokeWidth: "0.373684"
    }), jsx("circle", {
      className: iy()(rW, rY),
      cx: "61.2902",
      cy: "106.617",
      r: "3.92368",
      fill: "#A259FF",
      stroke: "black",
      strokeWidth: "0.373684"
    }), jsxs("defs", {
      children: [jsxs("filter", {
        id: "filter0_d_351_43460",
        x: "37.4653",
        y: "38.1284",
        width: "35.1263",
        height: "35.1263",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "0.747368",
          dy: "0.747368"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_351_43460"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_351_43460",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter1_d_351_43460",
        x: "124.157",
        y: "81",
        width: "35.1263",
        height: "35.1263",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "0.747368",
          dy: "0.747368"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_351_43460"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_351_43460",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter2_d_351_43460",
        x: "81",
        y: "38",
        width: "35.1263",
        height: "35.1263",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "0.747368",
          dy: "0.747368"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_351_43460"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_351_43460",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter3_d_351_43460",
        x: "80.8096",
        y: "123.326",
        width: "35.1263",
        height: "35.1263",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "0.747368",
          dy: "0.747368"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_351_43460"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_351_43460",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter4_d_351_43460",
        x: "81",
        y: "80.7251",
        width: "35.1263",
        height: "35.1263",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "0.747368",
          dy: "0.747368"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_351_43460"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_351_43460",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter5_d_351_43460",
        x: "124",
        y: "37.761",
        width: "35.1263",
        height: "35.1263",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "0.747368",
          dy: "0.747368"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_351_43460"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_351_43460",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter6_d_351_43460",
        x: "37",
        y: "81.208",
        width: "35.1263",
        height: "35.1263",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "0.747368",
          dy: "0.747368"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_351_43460"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_351_43460",
          result: "shape"
        })]
      })]
    })]
  });
}
function r1(e) {
  return jsxs("svg", {
    width: "136",
    viewBox: "0 0 196 136",
    fill: "none",
    className: iy()(rz, {
      [rV]: e.hovered
    }),
    children: [jsx("rect", {
      width: "196",
      height: "121.761",
      fill: "white"
    }), jsx("rect", {
      x: "27.183",
      y: "49.6627",
      width: "43.186",
      height: "23.7889",
      rx: "2.01291",
      fill: "#FFE8A3",
      stroke: "black",
      strokeWidth: "0.365983"
    }), jsx("rect", {
      x: "31.7598",
      y: "59.3601",
      width: "17.9332",
      height: "4.3918",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("circle", {
      cx: "58.6556",
      cy: "61.7423",
      r: "5.48975",
      fill: "white",
      stroke: "black",
      strokeWidth: "0.365983"
    }), jsx("rect", {
      x: "76.5885",
      y: "49.6627",
      width: "42.82",
      height: "23.7889",
      rx: "2.01291",
      fill: "#FFE8A3",
      stroke: "black",
      strokeWidth: "0.365983"
    }), jsx("rect", {
      x: "80.7957",
      y: "59.3601",
      width: "17.9332",
      height: "4.3918",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("circle", {
      cx: "109.161",
      cy: "61.7423",
      r: "5.48975",
      fill: "white",
      stroke: "black",
      strokeWidth: "0.365983"
    }), jsx("rect", {
      x: "76.5888",
      y: "3.18299",
      width: "42.82",
      height: "23.7889",
      rx: "2.01291",
      fill: "#FFCD29",
      stroke: "black",
      strokeWidth: "0.365983"
    }), jsx("rect", {
      x: "80.7959",
      y: "12.8804",
      width: "17.9332",
      height: "4.3918",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("circle", {
      cx: "110.261",
      cy: "15.2623",
      r: "5.48975",
      fill: "white",
      stroke: "black",
      strokeWidth: "0.365983"
    }), jsx("rect", {
      x: "125.631",
      y: "130.178",
      width: "43.0186",
      height: "23.7889",
      rx: "2.01291",
      fill: "#FFE8A3",
      stroke: "black",
      strokeWidth: "0.365983"
    }), jsx("rect", {
      x: "27.183",
      y: "89.9188",
      width: "43.186",
      height: "23.7889",
      rx: "2.01291",
      fill: "#FFE8A3",
      stroke: "black",
      strokeWidth: "0.365983"
    }), jsx("rect", {
      x: "33.5896",
      y: "99.6157",
      width: "17.9332",
      height: "4.3918",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("circle", {
      cx: "60.4899",
      cy: "101.998",
      r: "5.48975",
      fill: "white",
      stroke: "black",
      strokeWidth: "0.365983"
    }), jsxs("g", {
      clipPath: "url(#clip0_351_43276)",
      children: [jsx("path", {
        d: "M61.0894 105.123C60.3396 105.1 59.722 104.946 59.1311 104.674C58.9431 104.588 58.7461 104.522 58.5542 104.448C58.3001 104.35 58.0777 104.2 57.9633 103.952C57.7015 103.384 57.427 102.818 57.2237 102.227C57.0344 101.676 57.1513 101.125 57.4918 100.655C57.7562 100.29 57.9163 99.8986 58.0319 99.4665C58.1742 98.9366 58.5669 98.643 59.1006 98.5287C59.3459 98.4766 59.5785 98.4931 59.8123 98.5833C60.0296 98.6672 60.2545 98.6812 60.482 98.6189C60.9039 98.5032 61.2889 98.6227 61.6663 98.8044C61.843 98.8883 62.0234 98.9772 62.2128 99.0192C62.8367 99.1564 63.157 99.5669 63.2421 100.164C63.284 100.46 63.2599 100.769 63.2383 101.07C63.2192 101.333 63.2472 101.582 63.331 101.83C63.5483 102.473 63.5153 103.102 63.2179 103.716C63.0362 104.092 62.7389 104.346 62.378 104.541C62.1251 104.677 61.8735 104.816 61.6282 104.966C61.43 105.087 61.2177 105.129 61.0894 105.123ZM61.083 104.886C61.2787 104.889 61.4274 104.827 61.6269 104.673C61.7616 104.57 61.9218 104.499 62.0704 104.415C62.2458 104.317 62.4517 104.251 62.594 104.118C63.1989 103.548 63.3361 102.819 63.1328 102.055C63.0019 101.562 62.9625 101.089 63.0197 100.591C63.0934 99.9405 62.7376 99.4512 62.1136 99.2784C61.8976 99.2187 61.6905 99.117 61.4872 99.0192C61.2266 98.8946 60.9585 98.7866 60.6713 98.8553C60.2977 98.9442 59.9419 98.9163 59.5835 98.7955C59.4666 98.7561 59.3345 98.7206 59.215 98.7345C58.7347 98.7904 58.3979 99.0738 58.2772 99.5237C58.1463 100.013 57.9264 100.439 57.6545 100.859C57.3724 101.296 57.2974 101.795 57.4982 102.297C57.6964 102.793 57.9125 103.284 58.126 103.774C58.2314 104.018 58.417 104.181 58.6673 104.274C58.9037 104.362 59.1426 104.444 59.3726 104.547C59.8796 104.772 60.4172 104.848 61.083 104.886Z",
        fill: "black"
      }), jsx("path", {
        d: "M60.5404 103.175C60.0016 103.198 59.5072 103.112 59.1222 102.711C59.0561 102.642 58.9938 102.566 58.9544 102.481C58.9354 102.441 58.9189 102.367 58.9926 102.326C59.0383 102.3 59.0968 102.327 59.1336 102.355C59.2264 102.424 59.3039 102.514 59.3979 102.583C59.8402 102.909 60.3294 103.011 60.8593 102.856C61.1275 102.778 61.3143 102.581 61.4795 102.365C61.5405 102.286 61.6078 102.167 61.7184 102.25C61.8289 102.333 61.7298 102.435 61.6726 102.511C61.3842 102.895 61.036 103.177 60.5404 103.175Z",
        fill: "black"
      }), jsx("path", {
        d: "M62.2294 101.088C62.2281 101.243 62.1099 101.367 61.9701 101.365C61.8253 101.362 61.7045 101.234 61.7083 101.088C61.7122 100.928 61.824 100.801 61.96 100.803C62.1124 100.805 62.2319 100.93 62.2294 101.088Z",
        fill: "black"
      }), jsx("path", {
        d: "M58.9061 101.294C58.9048 101.449 58.7867 101.573 58.6469 101.571C58.502 101.568 58.3813 101.44 58.3851 101.294C58.3889 101.134 58.5007 101.007 58.6367 101.009C58.7879 101.01 58.9074 101.136 58.9061 101.294Z",
        fill: "black"
      })]
    }), jsx("path", {
      d: "M96.5399 30.8149C96.5399 30.6128 96.7037 30.449 96.9058 30.449C97.108 30.449 97.2718 30.6128 97.2718 30.8149H96.5399ZM147.121 45.7131C146.978 45.856 146.747 45.856 146.604 45.7131L144.275 43.384C144.132 43.241 144.132 43.0093 144.275 42.8664C144.418 42.7234 144.649 42.7234 144.792 42.8664L146.863 44.9367L148.933 42.8664C149.076 42.7234 149.308 42.7234 149.45 42.8664C149.593 43.0093 149.593 43.241 149.45 43.384L147.121 45.7131ZM97.2718 30.8149V33.1938H96.5399V30.8149H97.2718ZM101.298 37.2196H142.471V37.9516H101.298V37.2196ZM147.229 41.9774V45.4543H146.497V41.9774H147.229ZM142.471 37.2196C145.098 37.2196 147.229 39.3498 147.229 41.9774H146.497C146.497 39.754 144.694 37.9516 142.471 37.9516V37.2196ZM97.2718 33.1938C97.2718 35.4172 99.0742 37.2196 101.298 37.2196V37.9516C98.67 37.9516 96.5399 35.8215 96.5399 33.1938H97.2718Z",
      fill: "black"
    }), jsx("path", {
      d: "M97.2684 30.8149C97.2684 30.6128 97.1045 30.449 96.9024 30.449C96.7002 30.449 96.5364 30.6128 96.5364 30.8149H97.2684ZM46.5039 45.7131C46.6468 45.856 46.8786 45.856 47.0215 45.7131L49.3506 43.384C49.4935 43.241 49.4935 43.0093 49.3506 42.8664C49.2077 42.7234 48.9759 42.7234 48.833 42.8664L46.7627 44.9367L44.6924 42.8664C44.5495 42.7234 44.3177 42.7234 44.1748 42.8664C44.0319 43.0093 44.0319 43.241 44.1748 43.384L46.5039 45.7131ZM96.5364 30.8149V33.1938H97.2684V30.8149H96.5364ZM92.5106 37.2196H51.1545V37.9516H92.5106V37.2196ZM46.3967 41.9774V45.4543H47.1287V41.9774H46.3967ZM51.1545 37.2196C48.5268 37.2196 46.3967 39.3498 46.3967 41.9774H47.1287C47.1287 39.754 48.9311 37.9516 51.1545 37.9516V37.2196ZM96.5364 33.1938C96.5364 35.4172 94.734 37.2196 92.5106 37.2196V37.9516C95.1382 37.9516 97.2684 35.8215 97.2684 33.1938H96.5364Z",
      fill: "black"
    }), jsx("path", {
      d: "M97.2686 30.6304C97.2686 30.4282 97.1047 30.2644 96.9026 30.2644C96.7005 30.2644 96.5366 30.4282 96.5366 30.6304H97.2686ZM96.6438 46.0775C96.7867 46.2204 97.0185 46.2204 97.1614 46.0775L99.4905 43.7484C99.6334 43.6054 99.6334 43.3737 99.4905 43.2308C99.3476 43.0879 99.1158 43.0879 98.9729 43.2308L96.9026 45.3011L94.8323 43.2308C94.6894 43.0879 94.4576 43.0879 94.3147 43.2308C94.1718 43.3737 94.1718 43.6054 94.3147 43.7484L96.6438 46.0775ZM96.5366 30.6304V45.8187H97.2686V30.6304H96.5366Z",
      fill: "black"
    }), jsxs("g", {
      clipPath: "url(#clip1_351_43276)",
      children: [jsx("path", {
        d: "M58.8788 58.1369C59.7645 58.1496 60.4813 58.5105 61.1522 59.0925C62.5348 60.2921 62.6352 63.1971 60.4584 64.5085C58.9563 65.4133 56.9612 64.9838 55.998 63.3356C54.9331 61.5146 55.7781 59.0887 57.7364 58.3465C58.1036 58.2068 58.4836 58.133 58.8788 58.1369ZM61.8321 61.2731C61.8524 60.625 61.5258 59.874 60.9565 59.2831C60.2271 58.527 59.2867 58.2677 58.2511 58.5079C56.3449 58.9476 55.3105 61.1016 56.1263 62.9023C56.7032 64.1756 58.0592 64.8885 59.3554 64.6C60.8155 64.2747 61.8384 62.9874 61.8321 61.2731Z",
        fill: "black"
      }), jsx("path", {
        d: "M61.0418 62.2874C60.6491 63.2747 59.9489 63.8517 58.8903 63.8644C57.983 63.8746 57.3159 63.426 56.9105 62.5885C56.8851 62.6 56.8546 62.6152 56.8253 62.6254C56.7834 62.6406 56.7593 62.6508 56.7211 62.6025C56.7033 62.5796 56.6754 62.539 56.7275 62.497C56.8558 62.3916 56.9943 62.3001 57.1341 62.2124C57.1557 62.1984 57.2066 62.1971 57.2358 62.2416C57.2676 62.2912 57.2472 62.3229 57.2282 62.3484C57.1926 62.3954 57.1418 62.431 57.0909 62.4754C57.5764 63.2188 58.2232 63.6661 59.1483 63.5734C59.9641 63.492 60.5716 62.8872 60.794 62.1743C60.8041 62.1425 60.7685 62.1196 60.7342 62.0777C60.6771 62.0103 60.6377 61.9989 60.7025 61.8909C60.7495 61.8235 60.8219 61.8629 60.8639 61.8845C60.9973 61.9544 61.1294 62.0319 61.2464 62.126C61.2921 62.1628 61.376 62.2175 61.3213 62.3153C61.2705 62.4144 61.2006 62.3496 61.118 62.3255C61.0951 62.3153 61.0723 62.3013 61.0418 62.2874Z",
        fill: "black"
      }), jsx("path", {
        d: "M57.3933 60.2757C57.4657 60.1588 57.5445 60.066 57.6881 60.0953C57.8254 60.1232 57.8813 60.2427 57.8825 60.3532C57.8864 60.5718 57.8825 60.7967 57.8343 61.009C57.7847 61.2275 57.683 61.4359 57.5928 61.6431C57.5293 61.7892 57.4289 61.8184 57.3196 61.7117C56.9689 61.3661 56.7566 60.9518 56.7795 60.446C56.7859 60.3024 56.8634 60.1842 57.007 60.1359C57.162 60.0838 57.2815 60.155 57.3933 60.2757ZM57.6754 60.2999C57.6754 60.2999 57.6475 60.2592 57.6004 60.2732C57.5649 60.2706 57.5255 60.4219 57.5026 60.5019C57.481 60.5769 57.4848 60.6315 57.4314 60.6404C57.3463 60.6481 57.3526 60.5756 57.3171 60.54C57.3005 60.5223 57.2205 60.2961 57.1061 60.338C57.0324 60.3647 57.0286 60.4727 57.0324 60.5375C57.0502 60.8666 57.2001 61.1487 57.378 61.4512C57.5407 61.0611 57.7834 60.5375 57.6754 60.2999Z",
        fill: "black"
      }), jsx("path", {
        d: "M60.2957 60.1701C60.3885 60.118 60.4761 60.0736 60.5626 60.0914C60.6909 60.118 60.7163 60.2527 60.7278 60.3697C60.7646 60.742 60.6032 61.0571 60.4291 61.3672C60.3897 61.4371 60.3338 61.4981 60.297 61.5705C60.1915 61.7764 60.0098 61.7383 59.9094 61.5616C59.6997 61.1893 59.5802 60.7801 59.6184 60.3442C59.6323 60.1778 59.6946 60.0189 59.8789 59.9757C60.0644 59.93 60.2258 60.0469 60.2957 60.1701ZM60.067 61.3837C60.086 61.474 60.1051 61.4041 60.1229 61.3863C60.2499 61.1957 60.3783 61.005 60.4533 60.7954C60.5117 60.6314 60.6655 60.2159 60.5041 60.2578C60.4647 60.2604 60.424 60.3811 60.3897 60.4421C60.3618 60.4904 60.3046 60.5679 60.2804 60.5717C60.1877 60.5742 60.1991 60.4904 60.1813 60.4421C60.1394 60.3328 60.1432 60.1612 59.9869 60.1816C59.8319 60.2019 59.8497 60.3735 59.87 60.4853C59.9234 60.7865 59.9996 61.0851 60.067 61.3837Z",
        fill: "black"
      })]
    }), jsxs("g", {
      clipPath: "url(#clip2_351_43276)",
      children: [jsx("path", {
        d: "M106.15 61.4002C106.19 60.3696 106.623 59.3517 107.641 58.6439C107.894 58.4685 108.194 58.3541 108.485 58.2436C110.078 57.6387 112.02 58.7328 112.438 60.7102C112.736 62.1156 112.387 63.3546 111.281 64.3014C109.773 65.5912 107.534 65.1172 106.591 63.3432C106.3 62.7917 106.153 62.2046 106.15 61.4002ZM109.218 64.6076C109.862 64.6089 110.388 64.4424 110.809 64.1489C112.465 62.9912 112.596 60.3836 111.064 59.062C110.367 58.4596 109.556 58.302 108.681 58.4965C108.409 58.5575 108.146 58.715 107.913 58.879C106.537 59.8511 106.176 61.8602 107.116 63.3127C107.638 64.1209 108.377 64.5784 109.218 64.6076Z",
        fill: "black"
      }), jsx("path", {
        d: "M108.781 63.6393C108.761 63.6736 108.735 63.708 108.716 63.7384C108.668 63.816 108.644 63.8439 108.552 63.8122C108.484 63.7728 108.498 63.6863 108.515 63.6393C108.564 63.5072 108.627 63.3801 108.701 63.2594C108.73 63.2111 108.787 63.1247 108.847 63.1526C108.893 63.1806 108.927 63.1971 108.888 63.3305C108.88 63.3559 108.871 63.3864 108.858 63.4271C109.174 63.586 109.496 63.6037 109.829 63.5237C110.313 63.4068 110.757 63.0421 111.012 62.5935C111.119 62.4054 111.164 62.225 111.222 61.9975C111.235 61.9505 111.269 61.8717 111.247 61.8577C111.218 61.8399 111.183 61.817 111.141 61.7992C111.059 61.7662 111.067 61.7052 111.084 61.6658C111.111 61.5972 111.165 61.5896 111.198 61.5985C111.387 61.6468 111.574 61.7078 111.758 61.7713C111.784 61.7802 111.818 61.8081 111.805 61.8691C111.791 61.9327 111.749 61.9441 111.713 61.9505C111.655 61.9606 111.593 61.9454 111.517 61.939C111.493 62.042 111.471 62.15 111.441 62.2542C111.208 63.0649 110.709 63.6139 109.876 63.8274C109.542 63.9125 109.203 63.8477 108.781 63.6393Z",
        fill: "black"
      }), jsx("path", {
        d: "M110.475 60.4918C110.475 60.3914 110.46 60.2859 110.481 60.1906C110.495 60.1296 110.527 60.0368 110.611 60.0381C110.692 60.0394 110.753 60.0991 110.772 60.1525C110.894 60.4994 110.944 60.859 110.894 61.2237C110.89 61.3216 110.795 61.38 110.752 61.38C110.674 61.38 110.597 61.3279 110.575 61.2377C110.517 60.9937 110.464 60.493 110.475 60.4918Z",
        fill: "black"
      }), jsx("path", {
        d: "M107.785 60.4853C107.791 60.4243 107.829 60.3175 107.921 60.2997C108.017 60.2743 108.052 60.39 108.063 60.4408C108.118 60.6848 108.104 60.639 108.132 60.9809C108.134 61.005 108.143 61.4129 108.133 61.5235C108.123 61.6404 108.059 61.6989 108.002 61.7014C107.894 61.7078 107.86 61.6353 107.836 61.5502C107.761 61.2909 107.725 61.0279 107.785 60.4853Z",
        fill: "black"
      })]
    }), jsxs("g", {
      clipPath: "url(#clip3_351_43276)",
      children: [jsx("path", {
        d: "M111.595 18.3869C110.845 18.364 110.227 18.2102 109.637 17.9383C109.448 17.8519 109.251 17.7858 109.06 17.7121C108.805 17.6142 108.583 17.4643 108.469 17.2165C108.207 16.6485 107.932 16.0817 107.729 15.4908C107.54 14.9405 107.657 14.389 107.997 13.9188C108.262 13.5541 108.422 13.1627 108.537 12.7307C108.68 12.2007 109.072 11.9072 109.606 11.7928C109.851 11.7407 110.084 11.7572 110.318 11.8475C110.535 11.9313 110.76 11.9453 110.987 11.883C111.409 11.7674 111.794 11.8869 112.172 12.0686C112.348 12.1525 112.529 12.2414 112.718 12.2833C113.342 12.4206 113.662 12.831 113.747 13.4283C113.789 13.7244 113.765 14.0332 113.744 14.3344C113.725 14.5974 113.753 14.8465 113.836 15.0943C114.054 15.7373 114.021 16.3663 113.723 16.9801C113.542 17.3563 113.244 17.6104 112.883 17.8049C112.63 17.9408 112.379 18.0806 112.134 18.2306C111.935 18.3513 111.723 18.3932 111.595 18.3869ZM111.588 18.1505C111.784 18.1531 111.933 18.0908 112.132 17.937C112.267 17.8341 112.427 17.7629 112.576 17.6791C112.751 17.5812 112.957 17.5151 113.099 17.3817C113.704 16.8124 113.842 16.083 113.638 15.3192C113.507 14.8262 113.468 14.3534 113.525 13.8553C113.599 13.2047 113.243 12.7154 112.619 12.5426C112.403 12.4829 112.196 12.3812 111.993 12.2833C111.732 12.1588 111.464 12.0508 111.177 12.1194C110.803 12.2084 110.447 12.1804 110.089 12.0597C109.972 12.0203 109.84 11.9847 109.72 11.9987C109.24 12.0546 108.903 12.338 108.783 12.7878C108.652 13.2771 108.432 13.7028 108.16 14.1234C107.878 14.5606 107.803 15.0587 108.004 15.5607C108.202 16.0575 108.418 16.5481 108.631 17.0386C108.737 17.2826 108.922 17.4452 109.173 17.538C109.409 17.6257 109.648 17.7083 109.878 17.8112C110.385 18.0361 110.923 18.1124 111.588 18.1505Z",
        fill: "black"
      }), jsx("path", {
        d: "M111.046 16.4389C110.507 16.4618 110.013 16.3766 109.628 15.975C109.561 15.9064 109.499 15.8302 109.46 15.745C109.441 15.7056 109.424 15.6307 109.498 15.59C109.544 15.5646 109.602 15.5913 109.639 15.6192C109.732 15.6878 109.809 15.7781 109.903 15.8467C110.346 16.1733 110.835 16.2749 111.365 16.1199C111.633 16.0424 111.82 15.8454 111.985 15.6294C112.046 15.5506 112.113 15.4312 112.224 15.5138C112.334 15.5976 112.235 15.6993 112.178 15.7755C111.89 16.1593 111.541 16.4414 111.046 16.4389Z",
        fill: "black"
      }), jsx("path", {
        d: "M112.735 14.3521C112.733 14.5071 112.615 14.6316 112.475 14.6291C112.331 14.6266 112.21 14.4982 112.214 14.3521C112.218 14.192 112.329 14.0649 112.465 14.0674C112.618 14.0687 112.737 14.1945 112.735 14.3521Z",
        fill: "black"
      }), jsx("path", {
        d: "M109.411 14.5579C109.41 14.7129 109.292 14.8375 109.152 14.8349C109.007 14.8324 108.887 14.704 108.89 14.5579C108.894 14.3978 109.006 14.2707 109.142 14.2732C109.293 14.2745 109.413 14.4003 109.411 14.5579Z",
        fill: "black"
      })]
    }), jsx("path", {
      d: "M48.5913 77.6602C48.5913 77.458 48.4275 77.2942 48.2253 77.2942C48.0232 77.2942 47.8594 77.458 47.8594 77.6602H48.5913ZM47.9666 85.6046C48.1095 85.7475 48.3412 85.7475 48.4841 85.6046L50.8132 83.2755C50.9562 83.1326 50.9562 82.9008 50.8132 82.7579C50.6703 82.615 50.4386 82.615 50.2957 82.7579L48.2253 84.8282L46.155 82.7579C46.0121 82.615 45.7804 82.615 45.6375 82.7579C45.4945 82.9008 45.4945 83.1326 45.6375 83.2755L47.9666 85.6046ZM47.8594 77.6602V85.3458H48.5913V77.6602H47.8594Z",
      fill: "black"
    }), jsx("rect", {
      x: "125.264",
      y: "50.1747",
      width: "43.186",
      height: "23.7889",
      rx: "2.01291",
      fill: "#FFE8A3",
      stroke: "black",
      strokeWidth: "0.365983",
      className: iy()(rW, r$)
    }), jsx("rect", {
      x: "131.664",
      y: "59.8726",
      width: "17.9332",
      height: "4.3918",
      fill: "black",
      fillOpacity: "0.2",
      className: iy()(rW, r$)
    }), jsx("circle", {
      cx: "158.567",
      cy: "62.2545",
      r: "5.48975",
      fill: "white",
      stroke: "black",
      strokeWidth: "0.365983",
      className: iy()(rW, r$)
    }), jsxs("g", {
      clipPath: "url(#clip4_351_43276)",
      className: iy()(rW, r$),
      children: [jsx("path", {
        d: "M156.152 60.7639C156.525 60.325 156.935 59.9056 157.388 59.5486C157.703 59.3 157.811 59.2875 157.985 59.2403C158.032 59.2278 158.074 59.1986 158.114 59.1695C159.805 57.9764 161.959 58.8222 162.375 60.9278C162.652 62.325 161.939 63.7125 160.714 64.2792C160.695 64.2889 160.666 64.2917 160.656 64.307C160.413 64.6875 159.918 64.8347 159.617 64.9097C159.556 64.932 159.509 64.9958 159.453 65.0375C159.41 65.0695 159.367 65.1042 159.318 65.1264C157.725 65.8653 156.013 64.8764 155.638 63.2403C155.585 63.0097 155.353 61.6181 156.152 60.7639ZM159.47 64.1903C160.038 64.1875 160.409 64.0945 160.741 63.9125C162.338 63.0361 162.577 60.6556 161.171 59.4931C160.366 58.8278 159.335 58.7153 158.43 59.3528C157.353 60.1097 156.963 61.6611 157.566 62.8333C157.999 63.6764 158.686 64.1417 159.47 64.1903ZM160.013 64.55C160.082 64.525 160.092 64.507 160.081 64.4986C160.081 64.4986 160.052 64.4986 160.003 64.5C158.753 64.5945 157.813 64.0972 157.256 62.9764C156.711 61.882 156.843 60.807 157.486 59.7778C157.435 59.8028 157.393 59.8333 157.356 59.8681C156.489 60.6528 156.234 61.982 156.734 63.1181C157.195 64.1667 158.163 64.7889 159.252 64.7111C159.507 64.6931 159.759 64.6056 160.013 64.55ZM156.342 60.9472C156.343 60.907 156.306 60.957 156.3 60.9639C156.281 60.9903 156.261 61.0181 156.245 61.0458C156.016 61.432 155.873 61.85 155.853 62.2986C155.807 63.3208 156.166 64.1681 157.031 64.7458C157.606 65.1306 158.245 65.2097 158.913 65.0014C157.936 64.9028 157.175 64.45 156.661 63.6139C156.148 62.7806 156.066 61.8861 156.342 60.9472Z",
        fill: "black"
      }), jsx("path", {
        d: "M160.525 61.8376C160.717 61.8445 160.78 61.9445 160.717 62.1251C160.561 62.5695 160.124 62.7862 159.678 62.6307C159.414 62.5376 159.207 62.3682 159.064 62.1265C158.955 61.9404 159.003 61.8334 159.218 61.8195C159.443 61.8043 160.316 61.8293 160.525 61.8376ZM160.482 62.0543C160.099 62.0543 159.725 62.0543 159.348 62.0543C159.731 62.5001 160.298 62.5084 160.482 62.0543Z",
        fill: "black"
      }), jsx("path", {
        d: "M158.963 61.0499C158.964 61.2666 158.756 61.4638 158.528 61.4624C158.33 61.461 158.191 61.2819 158.189 61.0916C158.186 60.9013 158.381 60.7138 158.595 60.7082C158.8 60.7013 158.963 60.8513 158.963 61.0499ZM158.546 60.9124C158.443 60.9291 158.411 61.0263 158.42 61.0999C158.431 61.2069 158.511 61.2332 158.561 61.2346C158.609 61.236 158.702 61.1888 158.721 61.0971C158.746 61.0041 158.693 60.8777 158.546 60.9124Z",
        fill: "black"
      }), jsx("path", {
        d: "M161.617 61.1082C161.614 61.318 161.466 61.4721 161.267 61.4707C161.053 61.4694 160.899 61.2957 160.906 61.0638C160.912 60.8624 161.062 60.7069 161.248 60.711C161.441 60.7166 161.62 60.9082 161.617 61.1082ZM161.425 61.1027C161.425 60.9957 161.368 60.9235 161.28 60.9235C161.225 60.9235 161.134 60.9652 161.134 61.0791C161.134 61.2777 161.28 61.2666 161.28 61.2666C161.357 61.2638 161.425 61.2319 161.425 61.1027Z",
        fill: "black"
      })]
    }), jsx("rect", {
      x: "125.259",
      y: "90.4347",
      width: "43.186",
      height: "23.7889",
      rx: "2.01291",
      fill: "#FFE8A3",
      stroke: "black",
      strokeWidth: "0.365983"
    }), jsx("rect", {
      x: "131.662",
      y: "100.132",
      width: "17.9332",
      height: "4.3918",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("circle", {
      cx: "158.562",
      cy: "102.514",
      r: "5.48975",
      fill: "white",
      stroke: "black",
      strokeWidth: "0.365983"
    }), jsxs("g", {
      clipPath: "url(#clip5_351_43276)",
      children: [jsx("path", {
        d: "M155.773 101.196C156.115 100.794 156.49 100.41 156.904 100.084C157.192 99.8563 157.291 99.8449 157.45 99.8017C157.493 99.7903 157.532 99.7636 157.568 99.7369C159.115 98.6453 161.086 99.4192 161.467 101.346C161.72 102.624 161.068 103.894 159.947 104.412C159.93 104.421 159.903 104.424 159.894 104.437C159.672 104.786 159.219 104.92 158.943 104.989C158.887 105.009 158.844 105.068 158.793 105.106C158.754 105.135 158.715 105.167 158.67 105.187C157.213 105.863 155.646 104.958 155.303 103.462C155.254 103.251 155.042 101.977 155.773 101.196ZM158.809 104.331C159.328 104.328 159.668 104.243 159.971 104.077C161.433 103.275 161.651 101.097 160.365 100.033C159.628 99.4243 158.685 99.3213 157.857 99.9046C156.872 100.597 156.515 102.017 157.066 103.089C157.463 103.861 158.092 104.286 158.809 104.331ZM159.306 104.66C159.369 104.637 159.378 104.62 159.368 104.613C159.368 104.613 159.341 104.613 159.297 104.614C158.153 104.701 157.293 104.246 156.783 103.22C156.285 102.219 156.406 101.235 156.994 100.293C156.947 100.316 156.909 100.344 156.875 100.376C156.082 101.094 155.848 102.31 156.305 103.35C156.727 104.309 157.613 104.878 158.609 104.807C158.843 104.791 159.073 104.711 159.306 104.66ZM155.947 101.363C155.948 101.327 155.914 101.372 155.909 101.379C155.891 101.403 155.873 101.428 155.858 101.454C155.648 101.807 155.517 102.189 155.5 102.6C155.458 103.535 155.786 104.31 156.577 104.839C157.103 105.191 157.688 105.263 158.299 105.073C157.406 104.983 156.709 104.568 156.239 103.803C155.769 103.041 155.694 102.223 155.947 101.363Z",
        fill: "black"
      }), jsx("path", {
        d: "M159.774 102.178C159.95 102.185 160.007 102.276 159.95 102.441C159.808 102.848 159.407 103.046 158.999 102.904C158.758 102.819 158.568 102.664 158.438 102.442C158.337 102.272 158.382 102.174 158.579 102.162C158.785 102.148 159.583 102.171 159.774 102.178ZM159.735 102.376C159.384 102.376 159.042 102.376 158.697 102.376C159.048 102.784 159.566 102.792 159.735 102.376Z",
        fill: "black"
      }), jsx("path", {
        d: "M158.345 101.458C158.346 101.656 158.155 101.836 157.947 101.835C157.765 101.834 157.638 101.67 157.637 101.496C157.634 101.322 157.812 101.15 158.008 101.145C158.196 101.139 158.345 101.276 158.345 101.458ZM157.964 101.332C157.87 101.347 157.84 101.436 157.848 101.503C157.858 101.601 157.932 101.625 157.978 101.627C158.021 101.628 158.106 101.585 158.124 101.501C158.147 101.416 158.098 101.3 157.964 101.332Z",
        fill: "black"
      }), jsx("path", {
        d: "M160.773 101.511C160.771 101.703 160.635 101.844 160.453 101.843C160.257 101.841 160.116 101.683 160.123 101.47C160.128 101.286 160.265 101.144 160.435 101.148C160.612 101.153 160.776 101.328 160.773 101.511ZM160.598 101.506C160.598 101.408 160.546 101.342 160.465 101.342C160.415 101.342 160.331 101.38 160.331 101.484C160.331 101.666 160.465 101.656 160.465 101.656C160.536 101.653 160.598 101.624 160.598 101.506Z",
        fill: "black"
      })]
    }), jsx("path", {
      className: iy()(rW, r$),
      d: "M147.77 78.1765C147.77 77.9744 147.606 77.8105 147.404 77.8105C147.202 77.8105 147.038 77.9744 147.038 78.1765H147.77ZM147.145 86.1209C147.288 86.2639 147.52 86.2639 147.663 86.1209L149.992 83.7918C150.135 83.6489 150.135 83.4172 149.992 83.2743C149.849 83.1313 149.617 83.1313 149.474 83.2743L147.404 85.3446L145.333 83.2743C145.191 83.1313 144.959 83.1313 144.816 83.2743C144.673 83.4172 144.673 83.6489 144.816 83.7918L147.145 86.1209ZM147.038 78.1765V85.8622H147.77V78.1765H147.038Z",
      fill: "black"
    }), jsx("path", {
      d: "M147.77 118.432C147.77 118.23 147.606 118.066 147.404 118.066C147.202 118.066 147.038 118.23 147.038 118.432H147.77ZM147.145 126.376C147.288 126.519 147.52 126.519 147.663 126.376L149.992 124.047C150.135 123.904 150.135 123.673 149.992 123.53C149.849 123.387 149.617 123.387 149.474 123.53L147.404 125.6L145.333 123.53C145.191 123.387 144.959 123.387 144.816 123.53C144.673 123.673 144.673 123.904 144.816 124.047L147.145 126.376ZM147.038 118.432V126.118H147.77V118.432H147.038Z",
      fill: "black"
    }), jsxs("defs", {
      children: [jsx("clipPath", {
        id: "clip0_351_43276",
        children: jsx("rect", {
          width: "7.31966",
          height: "7.31966",
          fill: "white",
          transform: "translate(56.6428 98.1511)"
        })
      }), jsx("clipPath", {
        id: "clip1_351_43276",
        children: jsx("rect", {
          width: "7.31966",
          height: "7.31966",
          fill: "white",
          transform: "translate(55.1821 57.8955)"
        })
      }), jsx("clipPath", {
        id: "clip2_351_43276",
        children: jsx("rect", {
          width: "7.31966",
          height: "7.31966",
          fill: "white",
          transform: "translate(105.685 57.8955)"
        })
      }), jsx("clipPath", {
        id: "clip3_351_43276",
        children: jsx("rect", {
          width: "7.31966",
          height: "7.31966",
          fill: "white",
          transform: "translate(107.148 11.4153)"
        })
      }), jsx("clipPath", {
        id: "clip4_351_43276",
        children: jsx("rect", {
          width: "8",
          height: "8",
          fill: "white",
          transform: "translate(155 58)"
        })
      }), jsx("clipPath", {
        id: "clip5_351_43276",
        children: jsx("rect", {
          width: "7.31966",
          height: "7.31966",
          fill: "white",
          transform: "translate(154.719 98.6667)"
        })
      })]
    })]
  });
}
function r2(e) {
  return jsxs("svg", {
    width: "136",
    viewBox: "0 0 196 122",
    fill: "none",
    className: iy()(rz, {
      [rV]: e.hovered
    }),
    children: [jsx("rect", {
      x: "27.1929",
      y: "3.19293",
      width: "69.0706",
      height: "15.0489",
      fill: "black",
      stroke: "black",
      strokeWidth: "0.38587"
    }), jsx("rect", {
      x: "99.7337",
      y: "3.19293",
      width: "69.0706",
      height: "15.0489",
      fill: "black",
      stroke: "black",
      strokeWidth: "0.38587"
    }), jsx("rect", {
      x: "99.7337",
      y: "23.2581",
      width: "69.0706",
      height: "15.0489",
      rx: "2.12228",
      fill: "#BDE3FF",
      stroke: "black",
      strokeWidth: "0.38587"
    }), jsx("rect", {
      x: "27.1929",
      y: "43.3228",
      width: "99.1685",
      height: "15.0489",
      rx: "2.12228",
      fill: "#E4CCFF",
      stroke: "black",
      strokeWidth: "0.38587"
    }), jsx("rect", {
      x: "27.1929",
      y: "103.518",
      width: "99.1685",
      height: "15.0489",
      rx: "2.12228",
      fill: "#FFE8A3",
      stroke: "black",
      strokeWidth: "0.38587"
    }), jsx("rect", {
      x: "76.5833",
      y: "63.3882",
      width: "92.2228",
      height: "15.0489",
      rx: "2.12228",
      fill: "#BDE3FF",
      stroke: "black",
      strokeWidth: "0.38587"
    }), jsx("rect", {
      x: "83.3374",
      y: "68.5977",
      width: "25.8533",
      height: "4.63043",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("rect", {
      x: "32.7886",
      y: "108.728",
      width: "32.0272",
      height: "4.63043",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("rect", {
      x: "33.561",
      y: "48.5325",
      width: "31.2554",
      height: "4.63043",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("rect", {
      x: "104.947",
      y: "28.4675",
      width: "21.6087",
      height: "4.63043",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("path", {
      d: "M161.035 74.752C160.165 74.7255 159.449 74.5471 158.764 74.2317C158.546 74.1315 158.317 74.0549 158.095 73.9694C157.8 73.8559 157.542 73.682 157.409 73.3946C157.106 72.7358 156.787 72.0785 156.552 71.3932C156.332 70.755 156.468 70.1154 156.863 69.5701C157.169 69.1471 157.355 68.6932 157.489 68.1921C157.654 67.5775 158.109 67.237 158.728 67.1044C159.013 67.044 159.283 67.0631 159.554 67.1678C159.806 67.2651 160.067 67.2813 160.33 67.209C160.82 67.0749 161.266 67.2135 161.704 67.4242C161.909 67.5215 162.118 67.6247 162.338 67.6733C163.061 67.8325 163.433 68.3085 163.532 69.0012C163.58 69.3446 163.552 69.7027 163.527 70.052C163.505 70.3571 163.537 70.646 163.635 70.9334C163.887 71.6791 163.848 72.4086 163.504 73.1205C163.293 73.5567 162.948 73.8515 162.529 74.077C162.236 74.2347 161.944 74.3968 161.66 74.5707C161.43 74.7107 161.184 74.7594 161.035 74.752ZM161.028 74.4779C161.255 74.4808 161.427 74.4086 161.658 74.2303C161.815 74.1109 162 74.0284 162.173 73.9311C162.376 73.8176 162.615 73.741 162.78 73.5862C163.481 72.9259 163.641 72.08 163.405 71.1942C163.253 70.6224 163.207 70.0741 163.274 69.4964C163.359 68.7418 162.946 68.1744 162.223 67.974C161.972 67.9047 161.732 67.7868 161.496 67.6733C161.194 67.5289 160.883 67.4036 160.55 67.4832C160.117 67.5863 159.704 67.5539 159.288 67.4139C159.153 67.3682 159 67.327 158.861 67.3432C158.304 67.408 157.913 67.7367 157.773 68.2584C157.622 68.8258 157.367 69.3195 157.051 69.8074C156.724 70.3144 156.637 70.8921 156.87 71.4742C157.1 72.0505 157.35 72.6194 157.598 73.1883C157.72 73.4713 157.936 73.6599 158.226 73.7675C158.5 73.8692 158.777 73.965 159.044 74.0844C159.632 74.3452 160.255 74.4337 161.028 74.4779Z",
      fill: "black"
    }), jsx("path", {
      d: "M160.398 72.4923C159.773 72.5188 159.2 72.4201 158.753 71.9543C158.677 71.8747 158.605 71.7863 158.559 71.6876C158.537 71.6419 158.518 71.5549 158.603 71.5078C158.656 71.4783 158.724 71.5092 158.767 71.5417C158.874 71.6212 158.964 71.7259 159.073 71.8055C159.586 72.1842 160.154 72.3021 160.768 72.1223C161.079 72.0324 161.296 71.804 161.487 71.5535C161.558 71.4621 161.636 71.3235 161.764 71.4193C161.893 71.5166 161.778 71.6345 161.711 71.7229C161.377 72.168 160.973 72.4952 160.398 72.4923Z",
      fill: "black"
    }), jsx("path", {
      d: "M162.357 70.0724C162.355 70.2522 162.218 70.3966 162.056 70.3937C161.888 70.3907 161.748 70.2419 161.753 70.0724C161.757 69.8867 161.887 69.7393 162.044 69.7422C162.221 69.7437 162.36 69.8896 162.357 70.0724Z",
      fill: "black"
    }), jsx("path", {
      d: "M158.503 70.3111C158.501 70.4909 158.364 70.6354 158.202 70.6324C158.034 70.6295 157.894 70.4806 157.899 70.3111C157.903 70.1254 158.033 69.9781 158.19 69.981C158.366 69.9825 158.504 70.1284 158.503 70.3111Z",
      fill: "black"
    }), jsxs("g", {
      clipPath: "url(#clip0_351_42930)",
      children: [jsx("path", {
        d: "M160.653 34.6219C159.783 34.5953 159.067 34.417 158.381 34.1016C158.163 34.0014 157.935 33.9248 157.712 33.8393C157.418 33.7258 157.16 33.5519 157.027 33.2645C156.723 32.6057 156.405 31.9484 156.169 31.2631C155.95 30.6249 156.085 29.9853 156.48 29.44C156.787 29.017 156.973 28.563 157.107 28.0619C157.272 27.4474 157.727 27.1069 158.346 26.9743C158.631 26.9139 158.9 26.933 159.171 27.0377C159.423 27.1349 159.684 27.1511 159.948 27.0789C160.437 26.9448 160.884 27.0833 161.322 27.2941C161.527 27.3914 161.736 27.4945 161.955 27.5432C162.679 27.7023 163.051 28.1784 163.149 28.8711C163.198 29.2145 163.17 29.5726 163.145 29.9219C163.123 30.227 163.155 30.5158 163.252 30.8032C163.504 31.549 163.466 32.2785 163.121 32.9904C162.91 33.4266 162.566 33.7214 162.147 33.9469C161.854 34.1046 161.562 34.2667 161.278 34.4406C161.048 34.5806 160.801 34.6292 160.653 34.6219ZM160.645 34.3477C160.872 34.3507 161.045 34.2785 161.276 34.1001C161.432 33.9808 161.618 33.8982 161.79 33.801C161.994 33.6875 162.233 33.6108 162.398 33.4561C163.099 32.7958 163.258 31.9499 163.023 31.0641C162.871 30.4923 162.825 29.944 162.891 29.3663C162.977 28.6117 162.564 28.0443 161.841 27.8438C161.59 27.7746 161.35 27.6567 161.114 27.5432C160.812 27.3987 160.501 27.2735 160.168 27.353C159.734 27.4562 159.322 27.4238 158.906 27.2838C158.771 27.2381 158.617 27.1968 158.479 27.213C157.922 27.2779 157.531 27.6065 157.391 28.1283C157.239 28.6957 156.984 29.1894 156.669 29.6772C156.342 30.1842 156.255 30.762 156.488 31.3441C156.718 31.9204 156.968 32.4893 157.216 33.0582C157.338 33.3411 157.553 33.5298 157.844 33.6374C158.118 33.7391 158.395 33.8349 158.662 33.9542C159.25 34.2151 159.873 34.3035 160.645 34.3477Z",
        fill: "black"
      }), jsx("path", {
        d: "M160.016 32.3624C159.391 32.3889 158.818 32.2902 158.371 31.8244C158.294 31.7449 158.222 31.6564 158.177 31.5577C158.154 31.512 158.135 31.425 158.221 31.3779C158.274 31.3484 158.342 31.3794 158.384 31.4118C158.492 31.4914 158.582 31.596 158.691 31.6756C159.204 32.0544 159.771 32.1723 160.386 31.9925C160.697 31.9026 160.913 31.6741 161.105 31.4236C161.176 31.3322 161.254 31.1937 161.382 31.2895C161.51 31.3867 161.395 31.5046 161.329 31.5931C160.994 32.0381 160.591 32.3653 160.016 32.3624Z",
        fill: "black"
      }), jsx("path", {
        d: "M161.974 29.9422C161.973 30.122 161.836 30.2665 161.674 30.2635C161.506 30.2606 161.366 30.1117 161.37 29.9422C161.375 29.7565 161.504 29.6092 161.662 29.6121C161.839 29.6136 161.977 29.7595 161.974 29.9422Z",
        fill: "black"
      }), jsx("path", {
        d: "M158.12 30.181C158.119 30.3608 157.982 30.5052 157.82 30.5023C157.652 30.4993 157.512 30.3505 157.516 30.181C157.521 29.9953 157.65 29.8479 157.808 29.8509C157.983 29.8523 158.122 29.9983 158.12 30.181Z",
        fill: "black"
      })]
    }), jsxs("g", {
      clipPath: "url(#clip1_351_42930)",
      children: [jsx("path", {
        d: "M114.675 114.329C114.278 114.328 114.256 114.309 114.215 113.917C114.185 113.631 114.162 113.343 114.154 113.056C114.112 111.501 114.087 109.946 114.039 108.393C114.025 107.893 114.025 107.893 114.462 107.849C114.934 107.802 115.45 107.815 115.924 107.803C117.613 107.764 119.304 107.73 120.993 107.694C121.058 107.693 121.127 107.697 121.183 107.703C121.305 107.716 121.319 107.809 121.321 107.868C121.332 108.088 121.311 108.309 121.311 108.53C121.308 110.144 121.308 111.758 121.307 113.371C121.307 113.565 121.302 113.759 121.301 113.952C121.298 114.281 121.192 114.39 120.854 114.388C120.221 114.387 119.587 114.381 118.953 114.378C118.542 114.377 115.69 114.332 114.675 114.329ZM120.946 108.032L114.356 108.123C114.336 108.123 114.319 108.141 114.321 108.16C114.384 110.116 114.446 112.049 114.51 114.007C114.51 114.026 114.526 114.042 114.545 114.042H120.952C120.977 114.042 120.996 114.021 120.996 113.998V108.082C120.996 108.054 120.974 108.032 120.946 108.032Z",
        fill: "black"
      }), jsx("path", {
        d: "M117.683 112.39C117.071 112.373 116.501 112.219 116.016 111.83C115.935 111.765 115.826 111.613 115.852 111.563C115.929 111.42 116.057 111.56 116.151 111.608C117.205 112.155 118.252 112.161 119.295 111.585C119.361 111.548 119.432 111.519 119.504 111.499C119.535 111.492 119.577 111.488 119.607 111.536C119.628 111.567 119.616 111.617 119.599 111.645C119.568 111.692 119.522 111.734 119.476 111.769C118.953 112.188 118.358 112.403 117.683 112.39Z",
        fill: "black"
      }), jsx("path", {
        d: "M117.349 109.66C117.133 110.082 116.915 110.502 116.696 110.922C116.68 110.953 116.576 111.096 116.462 111.038C116.421 111.018 116.384 110.978 116.384 110.884C116.384 110.836 116.405 110.78 116.427 110.735C116.627 110.338 116.829 109.942 117.034 109.548C117.063 109.492 117.102 109.433 117.152 109.398C117.193 109.369 117.267 109.354 117.311 109.37C117.469 109.426 117.373 109.615 117.349 109.66Z",
        fill: "black"
      }), jsx("path", {
        d: "M119.47 109.498C119.606 109.477 119.652 109.594 119.618 109.695C119.59 109.784 119.551 109.871 119.507 109.952C119.342 110.248 119.174 110.543 119.003 110.835C118.953 110.922 118.885 111.016 118.766 110.959C118.632 110.894 118.682 110.776 118.73 110.686C118.915 110.341 119.103 109.998 119.299 109.659C119.339 109.589 119.401 109.498 119.47 109.498Z",
        fill: "black"
      })]
    }), jsx("path", {
      d: "M66.4764 69.1441C66.5074 69.1087 66.5118 69.0557 66.4853 69.0159C66.2111 68.6622 65.9414 68.3306 65.6894 67.9857C65.4064 67.5966 65.4816 67.2959 65.9459 67.2031C67.2679 66.9334 68.5899 66.646 69.9296 66.4912C70.8138 66.394 70.9819 66.4205 70.8802 67.464C70.7608 68.6975 70.6105 69.6924 70.4336 70.9171C70.1727 72.7033 70.1064 72.92 69.7704 72.7431C69.6908 72.6989 69.4653 72.5795 69.3017 72.4381C69.1072 72.27 68.8728 72.1064 68.7623 71.9871C68.0902 72.973 67.5597 73.5478 66.7771 74.2729C65.4241 75.8028 62.873 76.0327 60.9187 74.3393C60.2953 73.7999 59.694 73.2383 59.0838 72.6857C58.1067 71.8014 56.9704 71.6289 55.7987 72.1418C54.9675 72.5044 54.2026 73.0261 53.4332 73.5125C52.0626 74.3791 50.6168 74.8787 48.9809 74.5161C48.6271 74.4365 48.2823 74.2818 47.9507 74.1226C47.4466 73.8794 47.2123 73.4727 47.2079 72.8935C47.2034 71.6289 47.1239 70.36 47.146 69.0955C47.1636 68.1449 47.3847 67.9945 48.3265 68.1625C50.1967 68.4897 51.9565 68.136 53.6631 67.3623C54.8039 66.845 55.9844 66.478 57.2445 66.3365C59.0175 66.2039 61.1486 66.8715 62.5856 68.4499C63.178 69.0999 63.9651 69.5553 64.8361 69.6879C65.4595 69.7719 65.8972 69.7321 66.4764 69.1441ZM66.4013 67.8265C66.64 68.1714 66.9009 68.4853 67.0777 68.839C67.1706 69.0291 67.3209 69.206 67.1131 69.5155C66.5737 70.3114 65.3888 70.8552 64.4381 70.5545C63.912 70.3909 63.4035 70.1124 62.9525 69.794C62.1876 69.2635 61.5112 68.6003 60.7286 68.1095C60.1626 67.7513 59.5038 67.4816 58.8495 67.3446C57.4832 67.0572 56.148 67.3578 54.879 67.8751C52.6993 68.7683 50.5283 69.6437 47.986 68.9142C47.986 70.1124 47.9949 71.2399 47.9816 72.3629C47.9728 73.3666 47.8357 73.2472 48.8349 73.5611C48.9853 73.6097 49.14 73.6495 49.2948 73.6716C50.6831 73.8794 51.8813 73.4019 53.022 72.6635C53.756 72.186 54.4899 71.682 55.2814 71.315C56.9969 70.5192 58.5134 70.8685 59.8443 72.2037C60.4146 72.7741 61.0292 73.3091 61.6836 73.7822C62.8022 74.5913 64.0225 75.1617 65.5037 74.3304C66.7284 73.5169 67.6304 72.6812 68.2317 71.3504C68.4837 70.7933 68.5368 70.8198 68.9613 71.2708C69.0983 71.4167 69.0983 71.4167 69.3592 71.6643C69.5537 71.9031 69.5626 71.6687 69.5758 71.483C69.7925 70.0151 69.9517 68.6489 70.1772 67.1235C68.8773 67.3623 67.6702 67.5878 66.4013 67.8265Z",
      fill: "black"
    }), jsx("rect", {
      x: "27.1929",
      y: "23.2581",
      width: "69.0706",
      height: "15.0489",
      rx: "2.12228",
      fill: "#E4CCFF",
      stroke: "black",
      strokeWidth: "0.38587",
      className: iy()(rW, rZ)
    }), jsx("rect", {
      x: "33.561",
      y: "29.2361",
      width: "21.6087",
      height: "4.63043",
      fill: "black",
      fillOpacity: "0.2",
      className: iy()(rW, rZ)
    }), jsxs("g", {
      clipPath: "url(#clip2_351_42930)",
      className: iy()(rW, rZ),
      children: [jsx("path", {
        d: "M83.8767 30.6015C83.9224 29.4063 84.425 28.2258 85.6055 27.4048C85.8988 27.2015 86.2466 27.0688 86.5841 26.9406C88.4322 26.2391 90.6842 27.508 91.1691 29.8013C91.514 31.4313 91.1102 32.8682 89.8265 33.9662C88.0785 35.4621 85.4817 34.9124 84.3881 32.855C84.0506 32.2153 83.8797 31.5344 83.8767 30.6015ZM87.4345 34.3214C88.1817 34.3229 88.7919 34.1298 89.2797 33.7894C91.2001 32.4467 91.3519 29.4225 89.5759 27.8897C88.7668 27.1911 87.8265 27.0084 86.8111 27.2339C86.4957 27.3046 86.1906 27.4874 85.9209 27.6775C84.3247 28.805 83.9062 31.135 84.9968 32.8196C85.6025 33.7569 86.4588 34.2875 87.4345 34.3214Z",
        fill: "black"
      }), jsx("path", {
        d: "M86.9275 33.1983C86.9039 33.2381 86.8744 33.2779 86.8523 33.3133C86.7963 33.4032 86.7683 33.4356 86.6622 33.3987C86.5826 33.3531 86.5988 33.2528 86.6194 33.1983C86.6754 33.045 86.7491 32.8976 86.8346 32.7576C86.8685 32.7016 86.9348 32.6014 87.0041 32.6338C87.0572 32.6663 87.097 32.6854 87.0513 32.8402C87.0424 32.8696 87.0321 32.905 87.0174 32.9522C87.3829 33.1364 87.7572 33.157 88.1434 33.0642C88.7049 32.9286 89.2192 32.5056 89.5155 31.9854C89.6393 31.7672 89.6909 31.558 89.7586 31.2941C89.7734 31.2396 89.8132 31.1482 89.7881 31.132C89.7542 31.1114 89.713 31.0849 89.6643 31.0642C89.57 31.0259 89.5788 30.9552 89.598 30.9095C89.6304 30.8299 89.6923 30.8211 89.7306 30.8314C89.9502 30.8874 90.1669 30.9581 90.3806 31.0318C90.4101 31.0421 90.4499 31.0745 90.4351 31.1453C90.4189 31.219 90.3703 31.2322 90.3275 31.2396C90.2612 31.2514 90.189 31.2337 90.1006 31.2263C90.0726 31.3457 90.0475 31.471 90.0121 31.5919C89.7424 32.5321 89.1632 33.1688 88.1979 33.4164C87.8103 33.5152 87.4168 33.44 86.9275 33.1983Z",
        fill: "black"
      }), jsx("path", {
        d: "M88.892 29.5476C88.892 29.4312 88.8744 29.3089 88.8994 29.1984C88.9156 29.1276 88.9525 29.02 89.0497 29.0215C89.1441 29.023 89.2148 29.0922 89.2369 29.1541C89.3784 29.5565 89.4359 29.9736 89.3784 30.3966C89.374 30.51 89.2634 30.5778 89.2133 30.5778C89.1234 30.5778 89.0335 30.5174 89.0085 30.4128C88.9407 30.1298 88.8788 29.5491 88.892 29.5476Z",
        fill: "black"
      }), jsx("path", {
        d: "M85.772 29.5404C85.7793 29.4697 85.8235 29.3459 85.9296 29.3252C86.0417 29.2957 86.0815 29.4299 86.0947 29.4888C86.1581 29.7718 86.1419 29.7187 86.1743 30.1152C86.1772 30.1432 86.1876 30.6163 86.1758 30.7445C86.164 30.8801 86.0903 30.9479 86.024 30.9508C85.8987 30.9582 85.8589 30.8742 85.8309 30.7754C85.7439 30.4748 85.7027 30.1697 85.772 29.5404Z",
        fill: "black"
      })]
    }), jsx("rect", {
      x: "106.08",
      y: "83.0787",
      width: "62.5109",
      height: "15.0489",
      rx: "2.12228",
      fill: "#AFF4C6",
      stroke: "black",
      strokeWidth: "0.38587",
      className: iy()(rW, rQ)
    }), jsx("rect", {
      x: "112.062",
      y: "88.2883",
      width: "22.7663",
      height: "4.63043",
      fill: "black",
      fillOpacity: "0.2",
      className: iy()(rW, rQ)
    }), jsxs("defs", {
      children: [jsx("clipPath", {
        id: "clip0_351_42930",
        children: jsx("rect", {
          width: "8.48913",
          height: "8.48913",
          fill: "white",
          transform: "translate(155.496 26.5366)"
        })
      }), jsx("clipPath", {
        id: "clip1_351_42930",
        children: jsx("rect", {
          width: "8.48913",
          height: "8.48913",
          fill: "white",
          transform: "translate(113.435 106.797)"
        })
      }), jsx("clipPath", {
        id: "clip2_351_42930",
        children: jsx("rect", {
          width: "8.48913",
          height: "8.48913",
          fill: "white",
          transform: "translate(83.3374 26.5366)"
        })
      })]
    })]
  });
}
function r3(e) {
  return jsxs("svg", {
    width: "136",
    viewBox: "0 0 196 136",
    fill: "none",
    className: iy()(rz, {
      [rV]: e.hovered
    }),
    children: [jsx("rect", {
      x: "27.172",
      y: "7.98674",
      width: "141.765",
      height: "41.2909",
      fill: "#E4CCFF"
    }), jsxs("g", {
      filter: "url(#filter0_d_351_120552)",
      children: [jsx("rect", {
        x: "63.4768",
        y: "13.321",
        width: "30.6241",
        height: "30.6241",
        fill: "#FFD45B"
      }), jsx("rect", {
        x: "63.6489",
        y: "13.4931",
        width: "30.28",
        height: "30.28",
        stroke: "black",
        strokeWidth: "0.344091"
      })]
    }), jsx("rect", {
      x: "67.6057",
      y: "17.4517",
      width: "22.0218",
      height: "4.12909",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("rect", {
      x: "67.6057",
      y: "23.3",
      width: "19.2691",
      height: "4.12909",
      fill: "black",
      fillOpacity: "0.2"
    }), jsxs("g", {
      filter: "url(#filter1_d_351_120552)",
      children: [jsx("rect", {
        x: "98.2268",
        y: "13.321",
        width: "30.6241",
        height: "30.6241",
        fill: "#FFD45B"
      }), jsx("rect", {
        x: "98.3989",
        y: "13.4931",
        width: "30.28",
        height: "30.28",
        stroke: "black",
        strokeWidth: "0.344091"
      })]
    }), jsx("rect", {
      x: "102.355",
      y: "17.4517",
      width: "22.0218",
      height: "4.12909",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("rect", {
      x: "102.355",
      y: "23.3",
      width: "19.2691",
      height: "4.12909",
      fill: "black",
      fillOpacity: "0.2"
    }), jsxs("g", {
      filter: "url(#filter2_d_351_120552)",
      children: [jsx("rect", {
        x: "132.977",
        y: "13.321",
        width: "30.6241",
        height: "30.6241",
        fill: "#FFD45B"
      }), jsx("rect", {
        x: "133.149",
        y: "13.4931",
        width: "30.28",
        height: "30.28",
        stroke: "black",
        strokeWidth: "0.344091"
      })]
    }), jsx("rect", {
      x: "137.109",
      y: "17.4517",
      width: "22.0218",
      height: "4.12909",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("rect", {
      x: "137.109",
      y: "23.3",
      width: "19.2691",
      height: "4.12909",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("rect", {
      x: "27.172",
      y: "7.98674",
      width: "141.765",
      height: "41.2909",
      stroke: "black",
      strokeWidth: "0.344091"
    }), jsx("rect", {
      x: "27.172",
      y: "55.1305",
      width: "141.765",
      height: "41.2909",
      fill: "#BDE3FF"
    }), jsxs("g", {
      filter: "url(#filter3_d_351_120552)",
      children: [jsx("rect", {
        x: "32.5081",
        y: "60.4646",
        width: "26.8391",
        height: "30.6241",
        fill: "white"
      }), jsx("rect", {
        x: "32.6801",
        y: "60.6366",
        width: "26.495",
        height: "30.28",
        stroke: "black",
        strokeWidth: "0.344091"
      })]
    }), jsx("rect", {
      x: "35.4333",
      y: "63.0461",
      width: "20.9895",
      height: "18.5809",
      fill: "#F5F5F5",
      stroke: "black",
      strokeWidth: "0.344091"
    }), jsxs("g", {
      filter: "url(#filter4_d_351_120552)",
      children: [jsx("rect", {
        x: "63.4768",
        y: "60.4646",
        width: "30.6241",
        height: "30.6241",
        fill: "#FFD45B"
      }), jsx("rect", {
        x: "63.6489",
        y: "60.6366",
        width: "30.28",
        height: "30.28",
        stroke: "black",
        strokeWidth: "0.344091"
      })]
    }), jsx("rect", {
      x: "67.6057",
      y: "64.5955",
      width: "22.0218",
      height: "4.12909",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("rect", {
      x: "67.6057",
      y: "70.4438",
      width: "19.2691",
      height: "4.12909",
      fill: "black",
      fillOpacity: "0.2"
    }), jsxs("g", {
      filter: "url(#filter5_d_351_120552)",
      children: [jsx("rect", {
        x: "98.2268",
        y: "60.4646",
        width: "30.6241",
        height: "30.6241",
        fill: "#FFD45B"
      }), jsx("rect", {
        x: "98.3989",
        y: "60.6366",
        width: "30.28",
        height: "30.28",
        stroke: "black",
        strokeWidth: "0.344091"
      })]
    }), jsx("rect", {
      x: "102.355",
      y: "64.5955",
      width: "22.0218",
      height: "4.12909",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("rect", {
      x: "102.355",
      y: "70.4438",
      width: "19.2691",
      height: "4.12909",
      fill: "black",
      fillOpacity: "0.2"
    }), jsxs("g", {
      clipPath: "url(#clip0_351_120552)",
      children: [jsx("path", {
        d: "M52.4628 72.139C52.4653 75.5713 50.0667 78.5645 46.8075 79.1817C46.4186 79.2545 45.9344 79.3649 45.4652 79.3423C43.9397 79.2746 42.7856 78.9007 41.6465 77.9398C40.0834 76.6175 39.3433 74.8813 39.3884 72.8616C39.4461 70.2497 40.5727 68.1497 42.8057 66.7597C44.8831 65.4651 47.0785 65.3396 49.2663 66.5113C51.2635 67.5801 52.4603 69.7429 52.4628 72.139ZM51.8631 72.2494C51.8631 72.1992 51.8606 72.149 51.8556 72.0988C51.8105 71.7074 51.7804 71.3135 51.7101 70.9297C51.1732 67.9741 48.4785 65.9945 45.558 66.3959C41.215 66.993 38.6809 72.1214 40.816 75.9527C41.9451 77.9774 44.5018 79.0864 46.4563 78.705C49.5423 78.1029 51.7879 75.3906 51.8631 72.2494Z",
        fill: "black"
      }), jsx("path", {
        d: "M42.6576 74.7006C44.424 75.9777 47.5 76.2537 49.0179 74.3719C49.038 74.3468 49.0581 74.3268 49.0506 74.3217C48.9778 74.1812 48.7495 74.0081 48.9276 73.8551C49.1108 73.697 49.2563 73.8952 49.3767 74.0156C49.5524 74.1913 49.7305 74.3694 49.876 74.5701C49.9362 74.6554 50.0767 74.7934 49.9362 74.9139C49.8158 75.0318 49.7054 74.9716 49.5624 74.8637C49.5047 74.821 49.442 74.7658 49.4018 74.7332C49.2061 74.9139 49.033 75.0895 48.8448 75.2501C47.7384 76.196 46.4387 76.4067 45.0512 76.1884C44.0827 76.0354 43.1895 75.6741 42.4092 75.0594C42.3867 75.0418 42.3089 74.959 42.2738 74.9565C42.2035 74.9515 42.1859 74.9992 42.0931 75.0318C42.0279 75.0544 41.9902 75.1221 41.8598 74.9841C41.7519 74.8737 41.8272 74.7583 41.8773 74.7182C42.1408 74.5074 42.4193 74.3142 42.7053 74.1336C42.758 74.101 42.8784 74.0734 42.9386 74.1787C43.0039 74.2916 42.9437 74.3518 42.9035 74.4146C42.8433 74.5074 42.7505 74.5827 42.6551 74.6755C42.6526 74.6855 42.6526 74.6956 42.6576 74.7006Z",
        fill: "black"
      }), jsx("path", {
        d: "M49.5523 72.5779C49.5824 72.5804 49.6151 72.5729 49.6427 72.5603C49.8384 72.4575 49.8308 72.1639 49.8308 71.9858C49.8283 71.6094 49.7832 71.2958 49.7807 70.9345C49.7807 70.7865 49.7731 70.6284 49.8133 70.4904C49.8384 70.4051 49.9488 70.2972 50.0265 70.2922C50.1043 70.2872 50.2247 70.3223 50.2624 70.4603C50.4054 71.0549 50.4104 71.8403 50.3025 72.3496C50.2122 72.7786 49.8308 72.9894 49.5047 72.9919C49.1509 72.9944 48.762 72.7385 48.6566 72.3044C48.5437 71.8377 48.5362 71.3435 48.486 70.8617C48.4835 70.8341 48.4835 70.7438 48.486 70.7162C48.5061 70.5481 48.5663 70.4528 48.7821 70.4653C48.9401 70.4703 48.9853 70.6962 49.0154 70.8266C49.0681 71.0574 49.0505 71.3033 49.0907 71.5392C49.1534 71.898 49.191 72.5528 49.5523 72.5779Z",
        fill: "black"
      }), jsx("path", {
        d: "M42.7832 70.9848C42.7983 70.8819 42.7807 70.7339 42.989 70.7013C43.1721 70.6737 43.2549 70.8593 43.2625 70.9471C43.3051 71.4414 43.3528 71.9407 43.3126 72.4325C43.275 72.8891 42.866 73.273 42.4972 73.3181C42.0732 73.3708 41.604 73.1124 41.4635 72.6257C41.333 72.1765 41.2778 71.6396 41.2804 71.2206C41.2804 71.1504 41.3029 71.0174 41.4309 70.9973C41.594 70.9622 41.6316 71.1077 41.6542 71.1855C41.7495 71.4991 41.7972 71.8253 41.8951 72.1389C41.9528 72.3246 42.0456 72.5128 42.1685 72.6583C42.3693 72.8941 42.6327 72.849 42.713 72.5529C42.7908 72.2619 42.7506 71.198 42.7832 70.9848Z",
        fill: "black"
      })]
    }), jsx("path", {
      d: "M97.2147 88.2858L97.2147 88.2858L95.4155 90.1223L95.8404 92.7175C95.8404 92.7175 95.8404 92.7175 95.8404 92.7175C95.9069 93.1235 95.4922 93.4743 95.107 93.2618L92.891 92.0416L90.675 93.2618L90.6749 93.2619L97.2147 88.2858ZM97.2147 88.2858C97.5016 87.9928 97.3551 87.4674 96.9341 87.4033L97.2147 88.2858ZM90.3664 90.1223L89.9415 92.7175L92.4384 84.6696L92.4383 84.6698C92.4383 84.6698 92.4383 84.6698 92.4382 84.6699L91.3279 87.0259L88.8479 87.4033C88.8479 87.4033 88.8479 87.4033 88.8479 87.4033C88.4269 87.4674 88.2803 87.9928 88.5673 88.2858L88.5673 88.2858L90.3664 90.1223Z",
      fill: "#FFC700",
      stroke: "black",
      strokeWidth: "0.344091"
    }), jsx("rect", {
      x: "27.172",
      y: "55.1305",
      width: "141.765",
      height: "41.2909",
      stroke: "black",
      strokeWidth: "0.344091"
    }), jsx("rect", {
      x: "27.172",
      y: "103.172",
      width: "141.765",
      height: "41.2909",
      fill: "#93E396"
    }), jsxs("g", {
      filter: "url(#filter6_d_351_120552)",
      children: [jsx("rect", {
        x: "32.5081",
        y: "108.506",
        width: "26.8391",
        height: "30.6241",
        fill: "white"
      }), jsx("rect", {
        x: "32.6801",
        y: "108.678",
        width: "26.495",
        height: "30.28",
        stroke: "black",
        strokeWidth: "0.344091"
      })]
    }), jsx("rect", {
      x: "35.4333",
      y: "111.088",
      width: "20.9895",
      height: "18.5809",
      fill: "#F5F5F5",
      stroke: "black",
      strokeWidth: "0.344091"
    }), jsxs("g", {
      clipPath: "url(#clip1_351_120552)",
      children: [jsx("path", {
        d: "M45.5755 113.495C47.3906 113.521 48.8594 114.261 50.2344 115.453C53.0677 117.912 53.2735 123.865 48.8125 126.552C45.7344 128.406 41.6458 127.526 39.6719 124.149C37.4896 120.417 39.2214 115.445 43.2344 113.925C43.987 113.638 44.7656 113.487 45.5755 113.495ZM51.6276 119.922C51.6693 118.594 51 117.055 49.8333 115.844C48.3386 114.294 46.4115 113.763 44.2891 114.255C40.3828 115.156 38.263 119.57 39.9349 123.261C41.1172 125.87 43.8958 127.331 46.5521 126.74C49.5443 126.073 51.6406 123.435 51.6276 119.922Z",
        fill: "black"
      }), jsx("path", {
        d: "M50.0078 122C49.2031 124.023 47.7682 125.206 45.5989 125.232C43.7396 125.253 42.3724 124.333 41.5417 122.617C41.4896 122.641 41.4271 122.672 41.3672 122.693C41.2812 122.724 41.2318 122.745 41.1536 122.646C41.1172 122.599 41.0599 122.516 41.1667 122.43C41.4297 122.213 41.7135 122.026 42 121.846C42.0443 121.818 42.1484 121.815 42.2083 121.906C42.2734 122.008 42.2318 122.073 42.1927 122.125C42.1198 122.221 42.0156 122.294 41.9114 122.385C42.9062 123.909 44.2318 124.825 46.1276 124.635C47.7995 124.469 49.0443 123.229 49.5 121.768C49.5208 121.703 49.4479 121.656 49.3776 121.57C49.2604 121.432 49.1797 121.409 49.3125 121.187C49.4088 121.049 49.5573 121.13 49.6432 121.174C49.9167 121.318 50.1875 121.476 50.4271 121.669C50.5208 121.745 50.6927 121.857 50.5807 122.057C50.4766 122.26 50.3333 122.128 50.1641 122.078C50.1172 122.057 50.0703 122.029 50.0078 122Z",
        fill: "black"
      }), jsx("path", {
        d: "M42.5313 117.878C42.6797 117.638 42.8412 117.448 43.1354 117.508C43.4167 117.565 43.5313 117.81 43.5339 118.036C43.5417 118.484 43.5339 118.945 43.4349 119.38C43.3334 119.828 43.125 120.255 42.9401 120.68C42.8099 120.979 42.6042 121.039 42.3802 120.82C41.6615 120.112 41.2266 119.263 41.2735 118.226C41.2865 117.932 41.4453 117.69 41.7396 117.591C42.0573 117.484 42.3021 117.63 42.5313 117.878ZM43.1094 117.927C43.1094 117.927 43.0521 117.844 42.9558 117.872C42.8828 117.867 42.8021 118.177 42.7552 118.341C42.711 118.495 42.7188 118.607 42.6094 118.625C42.4349 118.641 42.4479 118.492 42.375 118.419C42.3412 118.383 42.1771 117.919 41.9427 118.005C41.7917 118.06 41.7839 118.281 41.7917 118.414C41.8282 119.088 42.1354 119.667 42.5 120.286C42.8334 119.487 43.3308 118.414 43.1094 117.927Z",
        fill: "black"
      }), jsx("path", {
        d: "M48.4791 117.661C48.6692 117.555 48.8489 117.463 49.026 117.5C49.289 117.555 49.3411 117.831 49.3645 118.07C49.44 118.833 49.1093 119.479 48.7525 120.115C48.6718 120.258 48.5572 120.383 48.4817 120.531C48.2656 120.953 47.8932 120.875 47.6874 120.513C47.2578 119.75 47.013 118.911 47.0911 118.018C47.1197 117.677 47.2473 117.352 47.6249 117.263C48.0052 117.169 48.3359 117.409 48.4791 117.661ZM48.0104 120.148C48.0494 120.333 48.0885 120.19 48.1249 120.154C48.3854 119.763 48.6484 119.372 48.802 118.943C48.9218 118.607 49.2369 117.755 48.9062 117.841C48.8255 117.846 48.7421 118.094 48.6718 118.219C48.6145 118.318 48.4973 118.476 48.4479 118.484C48.2578 118.49 48.2812 118.318 48.2447 118.219C48.1588 117.995 48.1666 117.643 47.8463 117.685C47.5286 117.726 47.565 118.078 47.6067 118.307C47.7161 118.924 47.8723 119.536 48.0104 120.148Z",
        fill: "black"
      })]
    }), jsxs("g", {
      filter: "url(#filter7_d_351_120552)",
      children: [jsx("rect", {
        x: "63.4768",
        y: "108.506",
        width: "30.6241",
        height: "30.6241",
        fill: "#FFD45B"
      }), jsx("rect", {
        x: "63.6489",
        y: "108.678",
        width: "30.28",
        height: "30.28",
        stroke: "black",
        strokeWidth: "0.344091"
      })]
    }), jsx("rect", {
      x: "67.6057",
      y: "112.637",
      width: "22.0218",
      height: "4.12909",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("rect", {
      x: "67.6057",
      y: "118.485",
      width: "19.2691",
      height: "4.12909",
      fill: "black",
      fillOpacity: "0.2"
    }), jsxs("g", {
      filter: "url(#filter8_d_351_120552)",
      children: [jsx("rect", {
        x: "98.2268",
        y: "108.506",
        width: "30.6241",
        height: "30.6241",
        fill: "#FFD45B"
      }), jsx("rect", {
        x: "98.3989",
        y: "108.678",
        width: "30.28",
        height: "30.28",
        stroke: "black",
        strokeWidth: "0.344091"
      })]
    }), jsx("rect", {
      x: "102.355",
      y: "112.637",
      width: "22.0218",
      height: "4.12909",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("rect", {
      x: "102.355",
      y: "118.485",
      width: "19.2691",
      height: "4.12909",
      fill: "black",
      fillOpacity: "0.2"
    }), jsxs("g", {
      filter: "url(#filter9_d_351_120552)",
      children: [jsx("rect", {
        x: "134",
        y: "108.506",
        width: "30.6241",
        height: "30.6241",
        fill: "#FFD45B"
      }), jsx("rect", {
        x: "134.172",
        y: "108.678",
        width: "30.28",
        height: "30.28",
        stroke: "black",
        strokeWidth: "0.344091"
      })]
    }), jsx("rect", {
      x: "138.129",
      y: "112.637",
      width: "22.0218",
      height: "4.12909",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("rect", {
      x: "138.129",
      y: "118.485",
      width: "19.2691",
      height: "4.12909",
      fill: "black",
      fillOpacity: "0.2"
    }), jsx("rect", {
      x: "27.172",
      y: "103.172",
      width: "141.765",
      height: "41.2909",
      stroke: "black",
      strokeWidth: "0.344091"
    }), jsx("path", {
      d: "M163.058 5.32444L163.144 5.46819L163.29 5.38648L163.93 5.02854C164.401 4.76472 164.965 4.6956 165.497 4.83787C166.028 4.98013 166.482 5.32166 166.759 5.78594C167.036 6.25002 167.113 6.7986 166.976 7.31116C166.839 7.82371 166.498 8.26021 166.026 8.52392L166.026 8.52399L165.449 8.84723L165.449 8.84732L161.674 10.9565L159.121 6.67356C158.844 6.20954 158.767 5.66108 158.904 5.1487C159.041 4.63631 159.382 4.20002 159.854 3.93649C160.326 3.67286 160.889 3.60389 161.421 3.74625C161.952 3.8886 162.406 4.23014 162.682 4.69436L163.058 5.32444Z",
      fill: "#F24E1E",
      stroke: "black",
      strokeWidth: "0.344091"
    }), jsxs("g", {
      clipPath: "url(#clip2_351_120552)",
      children: [jsx("path", {
        d: "M50.4871 107.641C48.8069 109.488 47.7973 109.61 46.2305 108.164C44.1148 111.157 42.1849 111.774 39.8514 110.153C39.3857 111.079 38.7655 112.239 37.5921 112.305C36.4645 112.372 35.5675 111.561 35.5655 111.477C35.4727 112.106 34.6737 113.559 33.4639 113.686C32.2099 113.819 31.2714 113.252 30.5935 112.255C29.723 110.962 29.5512 109.451 29.3703 107.956C29.191 106.467 29.0468 104.962 28.982 103.463C28.9502 102.678 29.0635 101.875 29.1937 101.087C29.2925 100.431 29.6597 99.9338 30.3896 99.8121C31.1194 99.6905 31.6381 100.065 31.9285 100.641C32.3488 101.47 32.6502 102.369 32.9353 103.077C33.2923 102.692 33.636 101.824 34.3226 101.609C35.0214 101.392 35.4604 101.455 36.3429 102.413C36.466 102.004 36.5602 101.635 36.6897 101.277C36.8358 100.882 36.9849 100.473 37.1984 100.113C37.8619 99.0194 38.6917 99.0087 39.483 100.068C41.3417 97.8755 42.7542 97.6508 45.017 99.1989C45.1976 98.6844 45.3353 98.1548 45.5664 97.6599C45.9532 96.8325 46.466 96.1419 47.5332 96.2202C48.4276 96.284 49.1693 96.9204 49.4516 97.9734C49.6358 98.6678 49.71 99.3903 49.8425 100.137C50.3717 99.6633 50.906 99.2599 51.6015 99.843C51.9154 98.8326 52.1853 97.879 52.518 96.9418C52.6775 96.4977 52.9121 96.067 53.1866 95.691C53.8238 94.8256 54.8328 94.8797 55.2722 95.86C55.5988 96.6025 55.8035 97.4282 55.8874 98.2393C56.1186 100.567 56.1084 102.892 55.4407 105.164C55.1061 106.296 54.4433 107.24 53.5059 107.974C52.1712 109.011 51.4815 108.934 50.4871 107.641ZM39.1546 101.785C39.0891 101.528 38.9628 100.247 38.431 100.253C38.0747 100.207 37.9209 100.878 37.8281 101.226C37.5065 102.512 37.3242 103.834 36.9597 105.104C36.8457 105.497 36.6329 105.708 36.3764 105.748C36.1323 105.836 36.0697 105.286 36.0118 105.034C35.8691 104.375 35.8318 103.695 35.6418 103.054C35.5686 102.793 35.455 102.425 34.9767 102.437C34.7887 102.44 34.5019 102.539 34.3083 102.901C34.0965 103.293 33.9031 103.707 33.7862 104.14C33.5734 104.91 33.4662 105.712 33.2259 106.475C33.1403 106.751 33.0228 107.08 32.747 107.222C32.492 107.268 32.2728 107.149 32.1872 106.305C32.1341 105.818 32.0887 105.335 32.0157 104.847C31.8459 103.7 31.6608 102.544 31.3612 101.424C31.2831 101.119 31.078 100.495 30.4631 100.684C29.8482 100.874 29.9096 101.47 29.9595 101.945C29.9644 101.989 29.9784 102.044 29.9848 102.095C30.134 103.39 30.2893 104.683 30.4324 105.98C30.6126 107.625 30.698 109.282 30.9957 110.903C31.2384 112.233 32.1254 112.904 33.1276 112.829C34.0977 112.757 34.5588 112.118 34.7112 110.629C34.7807 109.935 34.8013 109.227 34.9106 108.536C34.9416 108.326 35.0266 107.947 35.3415 107.957C35.6613 108.012 35.7028 108.352 35.753 108.574C35.8707 109.136 35.8113 109.743 36.0098 110.264C36.1478 110.626 36.541 110.993 36.9117 111.146C37.3912 111.342 37.9451 111.194 38.2282 110.698C38.5189 110.182 38.8062 109.627 38.9192 109.052C39.3781 106.599 39.4945 104.13 39.1546 101.785ZM50.8522 100.321C50.6149 100.258 50.3557 100.923 50.2715 101.178C50.0578 101.792 49.9284 102.43 49.7147 103.044C49.647 103.237 49.5064 103.527 49.2543 103.533C48.9942 103.482 48.9645 103.366 48.8893 103.021C48.8485 102.837 48.8275 102.628 48.8218 102.427C48.7926 101.55 48.8153 100.673 48.7357 99.8021C48.6756 99.1606 48.5757 98.4902 48.3279 97.9031C48.1793 97.5509 47.7245 97.1208 47.3882 97.1028C47.0656 97.0877 46.6017 97.4861 46.4018 97.8234C46.0823 98.38 45.9086 99.0228 45.7102 99.6459C45.6547 99.8358 45.6715 100.105 45.7672 100.275C46.8416 102.238 46.9952 104.339 46.6722 106.483C46.563 107.2 46.9941 107.487 47.413 107.803C47.8581 108.144 48.4053 108.147 48.8005 107.76C49.2155 107.348 49.5459 106.834 49.8595 106.331C50.0246 106.061 50.0502 105.703 50.206 105.423C50.2847 105.273 50.5023 105.107 50.6476 105.115C50.7592 105.119 50.9256 105.362 50.9616 105.529C51.0227 105.793 50.986 106.082 51.0211 106.346C51.1198 107.062 51.2231 107.517 51.6431 107.735C51.8624 107.881 52.5903 107.395 52.9417 107.091C54.0901 106.088 54.7064 104.76 54.7639 103.255C54.8461 101.237 54.8412 99.2094 54.7797 97.1893C54.7667 96.7568 54.7833 95.881 54.1461 95.9074C53.7619 95.8041 53.4068 96.5518 53.3005 96.9498C52.8868 98.4345 52.594 99.9599 52.2232 101.46C52.1499 101.758 52.0432 102.358 51.7501 102.433C51.4493 102.477 51.3007 102.405 51.1703 101.488C51.1212 101.169 51.1439 100.292 50.8522 100.321ZM45.4285 102.079C45.2305 101.635 45.0085 100.996 44.6721 100.419C43.5398 98.484 41.2245 98.5104 40.1057 100.468C39.9544 100.741 39.8878 101.142 39.9537 101.45C40.4517 103.651 40.4271 105.869 40.2406 108.089C40.1474 109.225 40.646 109.852 41.8126 109.938C43.2636 110.041 44.5426 109.168 45.2218 107.602C45.9719 105.856 45.931 103.407 45.4285 102.079Z",
        fill: "black"
      }), jsx("path", {
        d: "M59.6396 92.9477C59.6565 93.5223 59.7124 95.0885 59.7076 96.163C59.6942 97.6363 59.661 99.1083 59.5957 100.582C59.5728 101.154 59.472 101.726 59.3543 102.283C59.2411 102.806 58.8621 103.105 58.3303 103.111C57.7603 103.12 57.3065 102.872 57.0987 102.313C57.001 102.059 56.917 101.781 56.9124 101.509C56.9306 98.9612 57.0382 96.5596 57.0869 94.004C57.0898 93.6845 57.1071 93.2183 57.1818 92.9C57.328 92.2512 57.6344 91.8216 58.4066 91.8907C59.0794 91.9528 59.6227 92.3732 59.6396 92.9477ZM58.2221 102.332C58.2955 102.339 58.3705 102.352 58.4373 102.283C58.5789 102.175 58.5611 102.004 58.5634 101.861C58.6363 98.9672 58.7107 96.0798 58.7514 93.1879C58.7564 92.9785 58.7327 92.5553 58.3965 92.5632C57.9562 92.5458 58.0021 93.3861 57.9966 93.7713C57.9589 96.3956 57.9427 99.0275 57.9433 101.649C57.9446 101.882 57.9833 102.263 58.2221 102.332Z",
        fill: "black"
      }), jsx("path", {
        d: "M59.9054 105.251C60.1529 106.345 59.539 107.276 58.6658 107.474C57.8782 107.649 57.0496 107.055 56.8431 106.171C56.6145 105.176 57.0259 104.394 57.9922 104.179C58.8348 103.99 59.7065 104.372 59.9054 105.251ZM57.6513 105.847C57.8325 106.555 58.3501 106.468 58.4661 106.438C58.8092 106.305 59.0463 106.062 58.7828 105.388C58.71 105.205 58.5347 105.003 58.249 105.031C57.696 105.081 57.5609 105.519 57.6513 105.847Z",
        fill: "black"
      }), jsx("path", {
        d: "M42.9659 102.547C42.9771 102.921 43.0739 105.537 43.0732 107.085C43.0759 107.299 42.9866 107.738 42.5969 107.74C42.2333 107.768 42.0919 107.343 42.0754 107.126C41.9862 105.607 41.9396 104.078 41.9404 102.555C41.9392 102.322 42.0882 101.913 42.4165 101.848C42.8885 101.812 42.9547 102.172 42.9659 102.547Z",
        fill: "black"
      })]
    }), jsxs("g", {
      filter: "url(#filter10_d_351_120552)",
      className: iy()(rW, rX),
      children: [jsx("rect", {
        x: "132.649",
        y: "60.1077",
        width: "30.6241",
        height: "30.6241",
        fill: "#FFD45B"
      }), jsx("rect", {
        x: "132.821",
        y: "60.2797",
        width: "30.28",
        height: "30.28",
        stroke: "black",
        strokeWidth: "0.344091"
      })]
    }), jsx("rect", {
      x: "136.782",
      y: "64.2385",
      width: "22.0218",
      height: "4.12909",
      fill: "black",
      fillOpacity: "0.2",
      className: iy()(rW, rX)
    }), jsx("rect", {
      x: "136.782",
      y: "70.0869",
      width: "19.2691",
      height: "4.12909",
      fill: "black",
      fillOpacity: "0.2",
      className: iy()(rW, rX)
    }), jsxs("g", {
      filter: "url(#filter11_d_351_120552)",
      className: iy()(rW, rq),
      children: [jsx("rect", {
        x: "32.7107",
        y: "12.5178",
        width: "26.8391",
        height: "30.6241",
        fill: "white"
      }), jsx("rect", {
        x: "32.8827",
        y: "12.6899",
        width: "26.495",
        height: "30.28",
        stroke: "black",
        strokeWidth: "0.344091"
      })]
    }), jsx("rect", {
      x: "35.6359",
      y: "15.0993",
      width: "20.9895",
      height: "18.5809",
      fill: "#F5F5F5",
      stroke: "black",
      strokeWidth: "0.344091",
      className: iy()(rW, rq)
    }), jsx("path", {
      className: iy()(rW, rq),
      d: "M40.2485 22.3512C41.0198 21.4451 41.8657 20.5791 42.8005 19.8422C43.4514 19.3289 43.6751 19.3031 44.0335 19.2056C44.131 19.1798 44.217 19.1196 44.3002 19.0594C47.7898 16.5963 52.2372 18.3425 53.0974 22.6896C53.668 25.5742 52.1971 28.4387 49.668 29.6086C49.6278 29.6287 49.5676 29.6345 49.5476 29.666C49.0458 30.4517 48.025 30.7556 47.4027 30.9105C47.2766 30.9563 47.1791 31.0882 47.0644 31.1743C46.9755 31.2402 46.8866 31.3119 46.7862 31.3578C43.4973 32.8832 39.9618 30.8416 39.1876 27.4638C39.0786 26.9878 38.5997 24.1147 40.2485 22.3512ZM47.0988 29.4251C48.2716 29.4194 49.0372 29.2273 49.7225 28.8516C53.02 27.0423 53.5132 22.1275 50.6114 19.7275C48.9483 18.354 46.8206 18.1217 44.9511 19.4379C42.7288 21.0006 41.9231 24.2036 43.1675 26.6237C44.0622 28.3642 45.4816 29.3248 47.0988 29.4251ZM48.2199 30.1678C48.3633 30.1162 48.3834 30.0789 48.3604 30.0617C48.3604 30.0617 48.3002 30.0617 48.1999 30.0646C45.6192 30.2596 43.6779 29.233 42.5281 26.919C41.4041 24.6595 41.6765 22.4401 43.0041 20.3153C42.898 20.3669 42.812 20.43 42.7346 20.5017C40.9453 22.1218 40.4177 24.8659 41.45 27.2115C42.4019 29.3764 44.4005 30.661 46.6486 30.5004C47.1762 30.4631 47.6952 30.2825 48.2199 30.1678ZM40.6413 22.7297C40.6442 22.6465 40.5668 22.7498 40.5553 22.7641C40.5152 22.8186 40.475 22.8759 40.4406 22.9333C39.9675 23.7304 39.6722 24.5935 39.632 25.5197C39.5374 27.6301 40.2772 29.3793 42.0636 30.5721C43.2507 31.3664 44.5697 31.5298 45.9489 31.0997C43.9331 30.8961 42.3618 29.9613 41.3009 28.2352C40.2399 26.5147 40.0707 24.6681 40.6413 22.7297Z",
      fill: "black"
    }), jsx("path", {
      className: iy()(rW, rq),
      d: "M49.2781 24.5675C49.6738 24.5819 49.8028 24.7883 49.6738 25.1611C49.3526 26.0787 48.4494 26.526 47.529 26.2048C46.9841 26.0127 46.5569 25.6629 46.2616 25.164C46.035 24.7797 46.1354 24.5589 46.5798 24.5303C47.0444 24.4987 48.8451 24.5503 49.2781 24.5675ZM49.1892 25.0149C48.3978 25.0149 47.6265 25.0149 46.8465 25.0149C47.6379 25.9353 48.8078 25.9525 49.1892 25.0149Z",
      fill: "black"
    }), jsx("path", {
      className: iy()(rW, rq),
      d: "M46.0523 22.9417C46.0552 23.389 45.625 23.7962 45.1548 23.7933C44.7447 23.7905 44.458 23.4206 44.4551 23.0277C44.4494 22.6349 44.8508 22.2478 45.2924 22.2363C45.7168 22.222 46.0523 22.5317 46.0523 22.9417ZM45.1921 22.6578C44.9799 22.6922 44.9139 22.893 44.9311 23.0449C44.9541 23.2657 45.1204 23.3202 45.2236 23.3231C45.3211 23.3259 45.5132 23.2284 45.5534 23.0392C45.605 22.8471 45.496 22.5861 45.1921 22.6578Z",
      fill: "black"
    }), jsx("path", {
      className: iy()(rW, rq),
      d: "M51.5318 23.0622C51.5261 23.4952 51.2193 23.8135 50.8092 23.8106C50.3676 23.8077 50.0494 23.4493 50.0637 22.9704C50.0752 22.5547 50.3848 22.2335 50.7691 22.2421C51.1677 22.2536 51.5376 22.6493 51.5318 23.0622ZM51.1361 23.0507C51.1361 22.8299 51.0185 22.6808 50.835 22.6808C50.7232 22.6808 50.534 22.7669 50.534 23.002C50.534 23.412 50.835 23.3891 50.835 23.3891C50.9956 23.3833 51.1361 23.3174 51.1361 23.0507Z",
      fill: "black"
    }), jsxs("defs", {
      children: [jsxs("filter", {
        id: "filter0_d_351_120552",
        x: "63.4768",
        y: "13.321",
        width: "31.3122",
        height: "31.3122",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "0.688182",
          dy: "0.688182"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_351_120552"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_351_120552",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter1_d_351_120552",
        x: "98.2268",
        y: "13.321",
        width: "31.3122",
        height: "31.3122",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "0.688182",
          dy: "0.688182"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_351_120552"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_351_120552",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter2_d_351_120552",
        x: "132.977",
        y: "13.321",
        width: "31.3122",
        height: "31.3122",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "0.688182",
          dy: "0.688182"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_351_120552"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_351_120552",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter3_d_351_120552",
        x: "32.5081",
        y: "60.4646",
        width: "27.5273",
        height: "31.3122",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "0.688182",
          dy: "0.688182"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_351_120552"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_351_120552",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter4_d_351_120552",
        x: "63.4768",
        y: "60.4646",
        width: "31.3122",
        height: "31.3122",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "0.688182",
          dy: "0.688182"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_351_120552"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_351_120552",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter5_d_351_120552",
        x: "98.2268",
        y: "60.4646",
        width: "31.3122",
        height: "31.3122",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "0.688182",
          dy: "0.688182"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_351_120552"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_351_120552",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter6_d_351_120552",
        x: "32.5081",
        y: "108.506",
        width: "27.5273",
        height: "31.3122",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "0.688182",
          dy: "0.688182"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_351_120552"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_351_120552",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter7_d_351_120552",
        x: "63.4768",
        y: "108.506",
        width: "31.3122",
        height: "31.3122",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "0.688182",
          dy: "0.688182"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_351_120552"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_351_120552",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter8_d_351_120552",
        x: "98.2268",
        y: "108.506",
        width: "31.3122",
        height: "31.3122",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "0.688182",
          dy: "0.688182"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_351_120552"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_351_120552",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter9_d_351_120552",
        x: "134",
        y: "108.506",
        width: "31.3122",
        height: "31.3122",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "0.688182",
          dy: "0.688182"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_351_120552"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_351_120552",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter10_d_351_120552",
        x: "132.649",
        y: "60.1077",
        width: "31.3122",
        height: "31.3122",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "0.688182",
          dy: "0.688182"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_351_120552"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_351_120552",
          result: "shape"
        })]
      }), jsxs("filter", {
        id: "filter11_d_351_120552",
        x: "32.7107",
        y: "12.5178",
        width: "27.5273",
        height: "31.3122",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), jsx("feOffset", {
          dx: "0.688182",
          dy: "0.688182"
        }), jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_351_120552"
        }), jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_351_120552",
          result: "shape"
        })]
      }), jsx("clipPath", {
        id: "clip0_351_120552",
        children: jsx("rect", {
          width: "14.4518",
          height: "14.4518",
          fill: "white",
          transform: "translate(38.6985 65.2793)"
        })
      }), jsx("clipPath", {
        id: "clip1_351_120552",
        children: jsx("rect", {
          width: "15",
          height: "15",
          fill: "white",
          transform: "translate(38 113)"
        })
      }), jsx("clipPath", {
        id: "clip2_351_120552",
        children: jsx("rect", {
          width: "36.296",
          height: "36.296",
          fill: "white",
          transform: "translate(23 89.9951) rotate(-14.3491)"
        })
      })]
    })]
  });
}
let r6 = "browse_templates_make_something_onboarding--faded--UuXrP";
let nt = "loadingMakeSomethingTemplate";
let ni = e => {
  let t = Xr(_$$w5);
  let {
    name
  } = j6();
  let a = useDispatch();
  let [o, l] = useState(fD.NONE);
  let d = useCallback(e => {
    a(Ji({
      isActive: e
    }));
  }, [a]);
  useEffect(() => (d(!0), () => {
    d(!1);
  }), [d]);
  let c = _$$g();
  useEffect(() => (c && WhiteboardStarterKitCppBindings?.setFigjamStarterKitEnabled(!0), () => {
    WhiteboardStarterKitCppBindings?.setFigjamStarterKitEnabled(!1);
  }), [c]);
  let u = Xr(Qs);
  useEffect(() => {
    u({
      type: "CLOSE"
    });
  }, [u]);
  let f = _$$O2();
  let g = useRef(Date.now());
  let _ = e.onHideModal;
  let x = useCallback(() => {
    _();
    handleAtomEvent({
      id: Lz
    });
    a(_$$b({
      figjam_browse_templates_modal_onboarding_item_selected: !0
    }));
    a(hideModal());
    t(_$$tX2.COMPLETED);
  }, [_, a, t]);
  let y = t => {
    (!e.shouldAcceptClickUseCaseTile || e.shouldAcceptClickUseCaseTile()) && (Cu({
      trackingContext: name,
      text: `${t} tile clicked`
    }, "CTA Clicked"), e.onClickUseCaseTile(t));
  };
  function b(t, r) {
    Cu({
      trackingContext: name,
      text: `${t} tile hovered`
    }, "CTA Hovered");
    l(t);
    e.onUseCasePreview?.(t, r);
  }
  let C = [{
    headerText: getI18nString("figjam_onboarding_make_something.templates_modal.button_title.brainstorm"),
    headerIcon: _$$A9,
    previewSvg: e => jsx(r0, {
      hovered: e
    }),
    useCase: fD.BRAINSTORM,
    previewType: CollaborationType.MAKE_SOMETHING_BRAINSTORM
  }, {
    headerText: getI18nString("figjam_onboarding_make_something.templates_modal.button_title.team_updates"),
    headerIcon: _$$A10,
    previewSvg: e => jsx(r3, {
      hovered: e
    }),
    useCase: fD.UPDATES,
    previewType: CollaborationType.MAKE_SOMETHING_TEAM_UPDATES
  }, {
    headerText: getI18nString("figjam_onboarding_make_something.templates_modal.button_title.planning_ahead"),
    headerIcon: _$$A0,
    previewSvg: e => jsx(r2, {
      hovered: e
    }),
    useCase: fD.PLAN,
    previewType: CollaborationType.MAKE_SOMETHING_PLANNING
  }, {
    headerText: getI18nString("figjam_onboarding_make_something.templates_modal.button_title.team_chart"),
    headerIcon: _$$A1,
    previewSvg: e => jsx(r1, {
      hovered: e
    }),
    useCase: fD.TEAM,
    previewType: CollaborationType.MAKE_SOMETHING_TEAM_CHART
  }];
  function v(e, t) {
    let i = C.findIndex(t => t.useCase === e) + t;
    i > C.length - 1 ? i = 0 : i < 0 && (i = C.length - 1);
    return i;
  }
  return {
    hoveredUseCase: o,
    setHoveredUseCase: l,
    onClickCloseButton: () => {
      e.onHideModal();
      handleAtomEvent({
        id: Lz
      });
      t(_$$tX2.COMPLETED);
      let i = Math.round((Date.now() - g.current) / 1e3);
      f({
        eventName: "msv2_dismissed",
        style: e.style,
        secondsAfterShown: i
      });
    },
    onClickMoreTemplatesButton: () => {
      a(showModal({
        type: PH.type,
        data: {
          templateInsertionLocation: e.templateInsertionLocation,
          triggeredFrom: "makeSomething",
          onTemplateInsertedCurrentFile: x,
          onTemplateInsertedNewFile: x
        }
      }));
      f({
        eventName: "more_templates_clicked",
        style: e.style
      });
    },
    onClickUseCaseTile: y,
    onUseCasePreview: b,
    useCaseTiles: C,
    onListBoxKeydown: function (e) {
      let t;
      if ("Enter" === e.key) {
        o !== fD.NONE && C.find(({
          useCase: e
        }) => e === o) && y(o);
        return;
      }
      if ("Home" === e.key) t = 0;else if ("End" === e.key) t = C.length - 1;else if (["ArrowUp", "ArrowLeft"].includes(e.key)) t = v(o, -1);else {
        if (!["ArrowDown", "ArrowRight"].includes(e.key)) return;
        t = v(o, 1);
      }
      let i = C[t];
      i && (l(i.useCase), b(i.useCase, i.previewType));
    }
  };
};
let nr = {
  [fD.BRAINSTORM]: qy.BRAINSTORM_TEMPLATE_BUTTON_INTERACTED,
  [fD.PLAN]: qy.PLANNING_AHEAD_TEMPLATE_BUTTON_INTERACTED,
  [fD.UPDATES]: qy.TEAM_UPDATES_TEMPLATE_BUTTON_INTERACTED,
  [fD.TEAM]: qy.TEAM_CHART_TEMPLATE_BUTTON_INTERACTED
};
let nn = _$$n2(({
  onSuccess: e
} = {}) => {
  let t = Xr(_$$w5);
  let i = useDispatch();
  let r = _$$aV();
  let a = _$$g();
  let o = useSelector(e => e.mirror.appModel.multiplayerSessionState === SchemaJoinStatus.JOINED);
  let {
    hubFiles,
    templates,
    categoryIds,
    isLoading
  } = bg({
    templatesShelfType: cS.FIGJAM_SIMPLE_TEMPLATES_PICKER,
    source: "make-something-v2"
  });
  let {
    insertTemplate
  } = Fz();
  let f = useMemo(() => {
    let e = {};
    Object.keys(hubFiles).filter(e => categoryIds.some(t => templates[t]?.includes(e))).reduce((e, t) => {
      let i = hubFiles[t];
      i && (e[_$$a2(i).name.toUpperCase()] = i);
      return e;
    }, e);
    return e;
  }, [hubFiles, templates, categoryIds]);
  let g = a && !isLoading && !r && o;
  return {
    insert: useCallback(r => {
      if (!g) return;
      if (r === fD.NONE) {
        e?.();
        return;
      }
      let n = f[r];
      let a = nr[r];
      n && insertTemplate({
        template: {
          template: n,
          type: _$$n.HubFile
        },
        onSuccess: () => {
          e?.();
          i(VisualBellActions.dequeue({
            matchType: nt
          }));
          handleAtomEvent({
            id: a
          });
          i(_$$b({
            figjam_browse_templates_modal_onboarding_item_selected: !0
          }));
          t(_$$tX2.USE_CASE_STEPS);
          r === fD.PLAN ? Fullscreen.setCanvasZoomScale(.8) : r === fD.TEAM && Fullscreen.setCanvasZoomScale(1.2);
        },
        triggeredFrom: "browse-templates-make-something",
        selectTemplateAfterInsertion: !1
      });
      i(VisualBellActions.enqueue({
        message: getI18nString("figjam_onboarding_make_something.visual_bell.loading_template"),
        icon: VisualBellIcon.SPINNER,
        type: nt
      }));
    }, [i, e, insertTemplate, t, f, g]),
    canInsert: g
  };
});
function na(e) {
  let t = useSelector(e => {
    let t = e?.mirror?.appModel?.currentPage;
    let i = e?.mirror?.sceneGraph;
    let r = i?.get(t);
    return !r || !r.childCount || r.childrenAreAllGhosts;
  });
  let i = Un();
  let a = _$$O2();
  let s = !i || t;
  let o = s ? "banner" : "popup";
  let l = () => {
    e.hideModal?.();
  };
  let d = e => {
    a({
      eventName: "use_case_hovered",
      useCase: e,
      style: o
    });
  };
  let c = e => {
    a({
      eventName: "use_case_clicked",
      useCase: e,
      style: o
    });
  };
  function u(e, t) {
    if ("Escape" === e.key) {
      t();
      e.preventDefault();
      e.stopPropagation();
      return;
    }
  }
  (function (e) {
    let t = _$$O2();
    let i = useLatestRef(e);
    useEffect(() => {
      if (!i) {
        t({
          eventName: "msv2_shown",
          style: e
        });
        return;
      }
      if (i !== e) {
        t({
          eventName: "msv2_style_changed",
          style: e,
          prevStyle: i
        });
        return;
      }
    }, [i, e, t]);
  })(o);
  return s ? jsx(ns, {
    onHideModal: l,
    trackUseCaseHover: d,
    trackUseCaseClick: c,
    onEscapeDown: u
  }) : jsx(no, {
    onHideModal: l,
    trackUseCaseHover: d,
    trackUseCaseClick: c,
    onEscapeDown: u
  });
}
function ns(e) {
  let {
    onHideModal,
    trackUseCaseHover,
    trackUseCaseClick
  } = e;
  let [s, o] = useState(!1);
  let l = useRef(!1);
  let {
    insert,
    canInsert
  } = nn({
    onSuccess: () => {
      l.current = !1;
    }
  });
  let {
    hoveredUseCase,
    setHoveredUseCase,
    onClickCloseButton,
    onClickMoreTemplatesButton,
    onClickUseCaseTile,
    onUseCasePreview,
    useCaseTiles,
    onListBoxKeydown
  } = ni({
    templateInsertionLocation: RD.CURRENT_FILE,
    onHideModal,
    onClickUseCaseTile(e) {
      l.current = !0;
      insert(e);
      onHideModal();
      trackUseCaseClick(e);
    },
    onUseCasePreview(e, t) {
      WhiteboardStarterKitCppBindings.clearFigjamStarterKitPreview();
      WhiteboardStarterKitCppBindings.rotateFigjamStarterKitStrings();
      WhiteboardStarterKitCppBindings.showFigjamStarterKitPreview(t);
      trackUseCaseHover(e);
    },
    shouldAcceptClickUseCaseTile: () => !l.current,
    style: "banner"
  });
  function y() {
    o(!1);
    WhiteboardStarterKitCppBindings.clearFigjamStarterKitPreview();
    setHoveredUseCase(fD.NONE);
  }
  return canInsert ? jsx("div", {
    className: _$$s.flex.justifyCenter.$,
    children: jsx(_$$b4, {
      className: "browse_templates_make_something_onboarding--modalContainer--tYRC4",
      htmlAttributes: {
        onKeyDown(t) {
          e.onEscapeDown(t, onClickCloseButton);
        }
      },
      children: jsxs(_$$i2, {
        children: [jsx("div", {
          className: iy()("browse_templates_make_something_onboarding--closeHeader--tGUaS", {
            [r6]: s
          }),
          children: jsx(Me, {
            onClick: onClickCloseButton,
            "aria-label": getI18nString("general.close"),
            trackingEventName: "modal closed",
            htmlAttributes: {
              "data-testid": "MakeSomethingCloseButton"
            },
            children: jsx(_$$A, {})
          })
        }), jsxs("div", {
          className: "browse_templates_make_something_onboarding--makeSomethingContainer--rxr6G",
          children: [jsxs("div", {
            className: iy()("browse_templates_make_something_onboarding--titleContainer--41-OQ", {
              [r6]: s
            }),
            children: [jsx("div", {
              className: "browse_templates_make_something_onboarding--title--OqmHP text--fontPos20Whyte--o3mBO text--_fontBaseWhyte--efAjI",
              children: renderI18nText("figjam_onboarding_make_something.templates_modal.main_title")
            }), jsx("div", {
              className: "browse_templates_make_something_onboarding--subtitle--T-kBc text--fontPos14Whyte--pEiDq text--_fontBaseWhyte--efAjI",
              children: renderI18nText("figjam_onboarding_make_something.templates_modal.main_subtitle")
            }), jsx("div", {
              className: "browse_templates_make_something_onboarding--templateButtonContainer--ey3hb",
              children: jsx("div", {
                className: "browse_templates_make_something_onboarding--templateButtonShadow--PGxmP",
                children: jsx(_$$c2, {
                  variant: "secondary",
                  onClick: onClickMoreTemplatesButton,
                  iconPrefix: jsx(_$$Q3, {}),
                  trackingEventName: "more templates click",
                  htmlAttributes: {
                    onFocus: y
                  },
                  autoFocus: !1,
                  children: renderI18nText("figjam_onboarding_make_something.templates_modal.button_title.templates_button")
                })
              })
            })]
          }), jsx("div", {
            "aria-activedescendant": hoveredUseCase,
            "aria-label": getI18nString("figjam_onboarding_make_something.use_case_listbox.aria_label"),
            "aria-orientation": "horizontal",
            className: "browse_templates_make_something_onboarding--listItems--57vh3",
            onKeyDown: onListBoxKeydown,
            onMouseEnter: () => o(!0),
            onMouseLeave: y,
            role: "listbox",
            tabIndex: 0,
            children: useCaseTiles.map(({
              headerIcon: e,
              headerText: t,
              useCase: i,
              previewSvg: n,
              previewType: a
            }) => jsxs(_$$E3, {
              className: iy()("browse_templates_make_something_onboarding--useCaseContainer--nnBm-", {
                [r6]: ![fD.NONE, i].includes(hoveredUseCase)
              }),
              onClick: () => onClickUseCaseTile(i),
              htmlAttributes: {
                onFocus: () => onUseCasePreview(i, a),
                onMouseEnter: () => onUseCasePreview(i, a),
                tabIndex: -1
              },
              children: [jsxs("div", {
                className: "browse_templates_make_something_onboarding--useCaseHeader--0ad0i text--fontPos11Whyte--wZDnv text--_fontBaseWhyte--efAjI",
                children: [jsx(_$$B, {
                  svg: e,
                  height: "28px",
                  width: "28px",
                  autosize: !0,
                  className: "browse_templates_make_something_onboarding--useCaseIcon--0Dqvb",
                  useOriginalSrcFills_DEPRECATED: !0
                }), t]
              }), jsxs("div", {
                className: "browse_templates_make_something_onboarding--previewContainer--lohmG",
                children: [jsx("div", {
                  className: "browse_templates_make_something_onboarding--gradientOverlay--PmGRF"
                }), jsx("div", {
                  children: n(hoveredUseCase === i)
                })]
              })]
            }, i))
          })]
        })]
      })
    })
  }) : null;
}
function no(e) {
  let {
    onHideModal,
    trackUseCaseHover,
    trackUseCaseClick
  } = e;
  let {
    shiftPopupUp,
    popupRef
  } = function () {
    let e = _$$C2()?.whiteboardToolbeltContainerNode;
    let t = useRef(null);
    let [i, r] = useState(!1);
    useLayoutEffect(() => {
      let i = debounce(() => {
        let i = t.current?.getBoundingClientRect();
        let n = e?.getBoundingClientRect();
        i && n && r(n.left - i.right < 24);
      }, 100);
      i();
      window.addEventListener("resize", i);
      return () => window.removeEventListener("resize", i);
    }, [e]);
    return {
      popupRef: t,
      shiftPopupUp: i
    };
  }();
  let l = useDispatch();
  let d = _$$B2();
  let {
    hoveredUseCase,
    setHoveredUseCase,
    onClickCloseButton,
    onClickMoreTemplatesButton,
    onClickUseCaseTile,
    onUseCasePreview,
    useCaseTiles,
    onListBoxKeydown
  } = ni({
    templateInsertionLocation: RD.NEW_FILE,
    onHideModal,
    onClickUseCaseTile(e) {
      l(zE({
        state: d,
        from: f6.FIGJAM_MAKE_SOMETHING_POPUP,
        editorType: FFileType.WHITEBOARD,
        team: void 0,
        openNewFileIn: _$$ai.NEW_TAB,
        figjamMakeSomethingUseCase: e
      }));
      trackUseCaseClick(e);
    },
    onUseCasePreview(e) {
      trackUseCaseHover(e);
    },
    style: "popup"
  });
  return jsx("div", {
    className: iy()("browse_templates_make_something_onboarding--popupBackground--qUE9z", {
      "browse_templates_make_something_onboarding--popupBackgroundAboveDlt--3VTFo": shiftPopupUp
    }),
    children: jsx(_$$b4, {
      className: "browse_templates_make_something_onboarding--popupModal--y2117",
      ref: popupRef,
      htmlAttributes: {
        onKeyDown(t) {
          e.onEscapeDown(t, onClickCloseButton);
        }
      },
      children: jsxs(_$$i2, {
        children: [jsxs("div", {
          className: "browse_templates_make_something_onboarding--popupHeader--gqTTZ",
          children: [jsx("div", {
            className: "browse_templates_make_something_onboarding--popupTitle--qSiMo text--fontPos14Whyte--pEiDq text--_fontBaseWhyte--efAjI",
            children: renderI18nText("figjam_onboarding_make_something.popup.title")
          }), jsx(Me, {
            onClick: onClickCloseButton,
            "aria-label": getI18nString("general.close"),
            trackingEventName: "modal closed",
            htmlAttributes: {
              "data-testid": "MakeSomethingCloseButton"
            },
            children: jsx(_$$A, {})
          })]
        }), jsxs("div", {
          className: _$$s.pt8.pr12.pb12.pl12.$,
          children: [jsx("div", {
            "aria-activedescendant": hoveredUseCase,
            "aria-label": getI18nString("figjam_onboarding_make_something.use_case_listbox.aria_label"),
            "aria-orientation": "vertical",
            onKeyDown: onListBoxKeydown,
            role: "listbox",
            tabIndex: 0,
            className: "browse_templates_make_something_onboarding--popupUseCasesContainer--U5E6f",
            children: useCaseTiles.map(({
              headerIcon: e,
              headerText: t,
              useCase: i
            }) => jsxs("button", {
              "aria-label": t,
              "aria-selected": hoveredUseCase === i,
              className: iy()("browse_templates_make_something_onboarding--popupButton--r5tGZ text--fontPos12Whyte---tkNx text--_fontBaseWhyte--efAjI", {
                "browse_templates_make_something_onboarding--popupButtonActive--EbHMe": hoveredUseCase === i
              }),
              id: `make-something-onboarding-${i}`,
              onBlur: () => setHoveredUseCase(fD.NONE),
              onClick: () => onClickUseCaseTile(i),
              onFocus: () => onUseCasePreview(i),
              onMouseEnter: () => onUseCasePreview(i),
              onMouseLeave: () => setHoveredUseCase(fD.NONE),
              role: "option",
              tabIndex: -1,
              children: [jsx(_$$B, {
                className: iy()({
                  "browse_templates_make_something_onboarding--brainstormIcon--O0mh5": i === fD.BRAINSTORM
                }),
                svg: e,
                height: i === fD.BRAINSTORM ? "16px" : "20px",
                width: i === fD.BRAINSTORM ? "16px" : "20px",
                autosize: !0,
                useOriginalSrcFills_DEPRECATED: !0
              }), t]
            }, i))
          }), jsx(lR, {
            trackingEventName: "more templates click",
            onClick: onClickMoreTemplatesButton,
            variant: "ghost",
            htmlAttributes: {
              onFocus: () => setHoveredUseCase(fD.NONE),
              onMouseEnter: () => setHoveredUseCase(fD.NONE)
            },
            children: renderI18nText("figjam_onboarding_make_something.templates_modal.button_title.templates_button")
          })]
        })]
      })
    })
  });
}
function nl() {
  let {
    insert,
    canInsert
  } = nn();
  let [i, r] = useAtomValueAndSetter(l5);
  let a = useRef(!1);
  useEffect(() => {
    canInsert && i !== fD.NONE && !a.current && (insert(i), a.current = !0);
  }, [i, insert, canInsert]);
  useEffect(() => () => r(fD.NONE), [r]);
  return null;
}
Og;
q3.SELF_CONTAINED;
e => jsx(na, {
  hideModal: e.dismissModal
});
let nd = `${Og} Templates Toolbar Connector Tooltip`;
let nc = `${Og} Templates Toolbar Onboarding Finished Connector Tooltip`;
function nu(e) {
  return jsx(Dv, {
    targetType: "dom",
    targetKey: _$$G,
    topPadding: -6,
    autoWidth: !0,
    isBold: !0,
    arrowPosition: _$$F_.BOTTOM,
    children: jsx(mI, {
      bodyText: jsx("span", {
        className: RL,
        children: renderI18nText("figjam_onboarding_make_something.templates_toolbar_connector.body_text", {
          boldText: jsx("b", {
            children: renderI18nText("figjam_onboarding_make_something.templates_toolbar_connector.body_text_bold")
          })
        })
      }),
      buttonText: renderI18nText("figjam_onboarding_make_something.templates_toolbar_connector.done_button"),
      onButtonClick: e.onClickPrimaryCta
    })
  });
}
function np(e) {
  return jsx(Dv, {
    targetType: "dom",
    targetKey: _$$G,
    topPadding: -6,
    autoWidth: !0,
    isBold: !0,
    arrowPosition: _$$F_.BOTTOM,
    children: jsx(mI, {
      titleText: jsx("span", {
        className: "browse_templates_make_something_onboarding--tooltipTitle--EmYZQ",
        children: renderI18nText("figjam_onboarding_make_something.templates_toolbar_onboarding_finished_connector.title_want_to_try_something_else")
      }),
      bodyText: jsx("span", {
        className: $s,
        children: renderI18nText("figjam_onboarding_make_something.templates_toolbar_onboarding_finished_connector.body_text", {
          boldText: jsx("b", {
            children: renderI18nText("figjam_onboarding_make_something.templates_toolbar_onboarding_finished_connector.body_text_bold")
          })
        })
      }),
      buttonText: renderI18nText("figjam_onboarding_make_something.templates_toolbar_connector.done_button"),
      onButtonClick: e.onClickPrimaryCta
    })
  });
}
function nh(e) {
  let t = Xr(_$$w5);
  _$$h2(() => {
    t(_$$tX2.MODAL_SHOWING);
  });
  return jsx(_$$h, {
    testId: e.testId ? e.testId : "MakeSomethingOnboardingOverlay",
    modalType: q3.SELF_CONTAINED,
    trackingContextName: "Make Something Modal Onboarding",
    element: useCallback(e => jsx(na, {
      hideModal: e.dismissModal
    }), []),
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
q3.SELF_CONTAINED;
q3.SELF_CONTAINED;
let nm = "figjam_unified_onboarding_product";
let nf = "figjam_unified_onboarding_pz";
function ng(e) {
  handleAtomEvent({
    id: e === jg.PRODUCT_THEN_PZ ? nm : nf
  });
}
let n_ = [i3, i5];
function nx() {
  let e = useAtomWithSubscription(Am);
  let {
    show,
    uniqueId,
    isShowing,
    complete
  } = _$$e({
    overlay: wRI,
    priority: _$$N.OVERRIDING_MODAL
  });
  let l = r_(useCallback(() => {
    complete();
    e === jg.PZ_THEN_PRODUCT && handleAtomEvent({
      id: nm
    });
    e === jg.PRODUCT_THEN_PZ && handleAtomEvent({
      id: rf
    });
  }, [complete, e]));
  _$$E2(uniqueId, nf, () => {
    show();
  });
  return jsx(ry, {
    steps: n_,
    onComplete: l,
    isShowing,
    overlayUniqueId: uniqueId
  });
}
function ny() {
  let e = useAtomWithSubscription(Am);
  let t = useAtomWithSubscription(_$$w5);
  let {
    show,
    uniqueId,
    isShowing,
    complete
  } = _$$e({
    overlay: Kze,
    priority: _$$N.OVERRIDING_MODAL
  });
  let d = r_(complete);
  _$$E2(uniqueId, nm, () => {
    show();
  });
  useEffect(() => {
    t === _$$tX2.COMPLETED && e === jg.PRODUCT_THEN_PZ && handleAtomEvent({
      id: nf
    });
    t === _$$tX2.COMPLETED && e === jg.PZ_THEN_PRODUCT && handleAtomEvent({
      id: rf
    });
  }, [t, e]);
  return jsx(nh, {
    onClickPrimaryCta: d,
    onClose: lQ,
    onManualDismiss: d,
    isShowing
  });
}
let nO = buildUploadUrl("964c3ddf18b0f2712b664efde991dfc4f2c58eb8");
let nL = _$$D3((e, t) => {
  t(V3({
    url: e
  }));
});
function nR(e) {
  let t = useDispatch();
  return jsx("div", {
    className: "onboard_figjam_viewer--openTutorialModalContainer--O1ld1",
    children: jsx("div", {
      className: "onboard_figjam_viewer--openTutorialModalShadow--HF-Gb onboard_figjam_viewer--openTutorialModalBase--vDoVP",
      children: jsx("div", {
        className: "onboard_figjam_viewer--openTutorialModal--3j-H4 onboard_figjam_viewer--openTutorialModalBase--vDoVP",
        children: jsxs("div", {
          className: iz,
          children: [jsx("div", {
            className: iV,
            children: jsx("img", {
              className: iW,
              src: nO,
              alt: ""
            })
          }), jsxs("div", {
            className: iy()(iY, iJ),
            children: [jsx("div", {
              className: "onboard_figjam_viewer--openTutorialModalText--9oABQ onboard_figjam_viewer--text--xkcTB",
              children: renderI18nText("rcs.figjam_onboarding.for_more_tips_and_tricks_here_s_a_2_minute_hands_on_tutorial")
            }), jsxs("div", {
              className: "onboard_figjam_viewer--openTutorialBottomContentRow--rVWqG onboard_figjam_viewer--bottomContentRow--PgTeU",
              children: [jsx($n, {
                variant: "ghost",
                onClick: e.dismissModal,
                children: renderI18nText("rcs.figjam_onboarding.maybe_later")
              }), jsx("div", {
                className: "onboard_figjam_viewer--openTutorialButton--4AqFo",
                children: jsx($z, {
                  onClick: () => {
                    if ("loaded" !== e.figJamTemplateFileResult.status || null == e.figJamTemplateFileResult.data || e.figJamTemplateFileResult.data.length < 1) return;
                    let i = e.figJamTemplateFileResult.data?.[0] ?? null;
                    i && nL(i.url, t);
                    e.dismissModal();
                  },
                  disabled: "loading" === e.figJamTemplateFileResult.status,
                  variant: "primary",
                  children: "loading" === e.figJamTemplateFileResult.status || null == e.figJamTemplateFileResult.data ? jsx(_$$k3, {
                    htmlAttributes: {
                      "data-testid": "loading-spinner"
                    }
                  }) : renderI18nText("rcs.figjam_onboarding.open_tutorial")
                })
              })]
            })]
          })]
        })
      })
    })
  });
}
async function nD(e) {
  let t = (await e).data;
  if (!t) return !1;
  let i = kd(t);
  let r = mW(i, "figjam_editor_onboarded");
  return !r && !r && !(() => {
    let e = getStorage();
    try {
      return !!e.get(Xk);
    } catch (e) {}
    return !1;
  })();
}
function nM({
  openFile: e
}) {
  return !!(e && e.trackTags?.isTemplate && e.editorType === FFileType.WHITEBOARD);
}
function nP(e, t) {
  setTagGlobal("type", e);
  setTagGlobal("source", t);
  captureMessage("FigJam onboarding - Failed to load starter files; we did not render open tutorial overlay");
}
function nF(e) {
  let t = dq();
  let i = _$$ol()?.id;
  let [a] = IT(XZ({
    currentOrgId: t || void 0,
    currentTeamId: i,
    fileTags: ["figjam_template"],
    shouldRecreate: !0
  }), {
    enabled: e.isShowing
  });
  useEffect(() => {
    "errors" === a.status && nP("failure", "curator");
  }, [a.status]);
  useEffect(() => {
    let e = setTimeout(() => {
      "loading" === a.status && nP("timeout", "curator");
    }, 5e3);
    return () => clearTimeout(e);
  }, [a.status]);
  return jsx(_$$h, {
    testId: e.testId ? e.testId : "OpenFigJamTutorialOverlay",
    modalType: q3.SELF_CONTAINED,
    trackingContextName: "FigJam Editor Onboarding - Open Tutorial",
    userFlagOnShow: "figjam_editor_onboarded",
    element: e => jsx(nR, {
      ...e,
      figJamTemplateFileResult: a
    }),
    isShowing: e.isShowing && "loaded" === a.status,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function nB() {
  let e = useDispatch();
  let t = useFullscreenViewFile();
  let {
    show,
    uniqueId,
    complete,
    isShowing
  } = _$$e({
    overlay: MJs,
    priority: _$$N.OVERRIDING_MODAL
  }, [t]);
  let d = function (e, t) {
    let i = useRef();
    let r = useRef();
    let a = useRef();
    return (useEffect(() => () => {
      i.current?.();
    }, []), r.current) ? r.current : null == i.current || null == a.current ? (r.current = new Promise(n => {
      i.current?.();
      i.current = WB().subscribe(e, t, e => {
        ("loaded" === e.status || e.errors) && (a.current = e, n(a.current), r.current = void 0);
      });
    }), r.current) : Promise.resolve(a.current);
  }(UserForRcs, {});
  let c = useAtomWithSubscription(openFileAtom);
  let u = Td();
  let m = !nM({
    openFile: c
  });
  let _ = useRef(!1);
  useEffect(() => {
    nD(d).then(e => {
      e && !_.current && show({
        canShow: e => {
          let t = e?.editorType === FFileType.WHITEBOARD && !e?.canEdit;
          t && (_.current = !0);
          return t;
        }
      });
    });
  }, [show, d]);
  let {
    currentStep,
    next,
    reset
  } = _$$A4({
    numSteps: m ? 4 : 3,
    onComplete: complete
  });
  _$$E2(uniqueId, "Reset Onboarding", () => {
    e(_$$b({
      figjam_editor_onboarded: !1
    }));
    u && (reset(), show());
  });
  let v = r_(complete);
  let E = useMemo(() => {
    let e = i6.map(e => jsx(e, {
      isShowing,
      onClickPrimaryCta: next,
      onClose: lQ,
      onManualDismiss: v
    }, e.name));
    m && e.push(jsx(nF, {
      isShowing,
      onClickPrimaryCta: next,
      onClose: lQ,
      onManualDismiss: v,
      testId: "open_figjam_tutorial_overlay"
    }, "OpenFigJamTutorialOverlay"));
    return e;
  }, [next, v, isShowing, m]);
  return jsx(_$$U, {
    currentStep,
    isShowing,
    children: E
  });
}
let nK = _$$D3(() => {
  let e = getStorage();
  try {
    return !!e.get(Xk);
  } catch (e) {}
  return !1;
});
function nH({
  isTemplateFile: e,
  isTryFile: t,
  canvasEmpty: i,
  onboardedToFigJam: r,
  cameFromWhatsNew: n
}) {
  if (r || nK()) return [];
  let a = _$$O() ? [] : i6;
  if (e) return a;
  let s = [...a, nF];
  return n || t || !i ? s : [nh];
}
function nz({
  openFile: e
}) {
  let t = useAtomWithSubscription(l5);
  let i = useAtomWithSubscription(zo);
  let n = useAtomWithSubscription(Am);
  return t !== fD.NONE ? null : ("loaded" !== i.status || i.data) && !n ? jsx(nY, {
    openFile: e
  }) : jsx(nW, {
    openFile: e
  });
}
let nV = (e, t) => {
  let i = useFullscreenViewFile();
  let r = Xr(Am);
  let a = Xr(_$$w5);
  let o = useAtomWithSubscription(zo);
  let l = _$$aV();
  let d = useAtomWithSubscription(dO).status === _$$c3.LOADING;
  rx({
    overlayUniqueId: e,
    afterReset: () => {
      r(null);
      a(_$$tX2.NOT_STARTED);
    }
  });
  let c = useRef(!1);
  useEffect(() => {
    !c.current && "loaded" === o.status && !l && !d && i.data?.canEdit && i.data?.editorType === "whiteboard" && (c.current = !0, t());
  }, [t, o.status, l, d, i]);
};
function nW({
  openFile: e
}) {
  let t = useSelector(e => e.mirror.appModel.currentPage);
  let i = Fk((e, t) => zC(e, t), t);
  let a = useAtomWithSubscription(zo);
  let o = Fu("interacted_figjam_whats_new_v2_cta");
  let l = useAtomWithSubscription(o);
  let d = Xr(Am);
  let {
    getConfig
  } = XV("exposed_exp_figjam_unified_onboarding", "figjam_unified_onboarding");
  let u = useCallback(() => {
    let e = getConfig().get("sequence", jg.DEFAULT);
    d(e);
    return e;
  }, [getConfig, d]);
  let [h, m] = useState(!1);
  let [_, x] = useState([]);
  let {
    show,
    uniqueId,
    isShowing,
    complete,
    experimentResult
  } = _$$e({
    overlay: zoI,
    priority: _$$N.OVERRIDING_MODAL,
    experiment: {
      check: u,
      predicate: e => e !== jg.DEFAULT,
      postCheck: e => (e || nK() || m(!0), !1)
    }
  }, [a, l]);
  let w = useRef(i);
  useEffect(() => {
    w.current = i;
  }, [i]);
  let {
    show: _show,
    isShowing: _isShowing2,
    complete: _complete2
  } = _$$e({
    overlay: lLk,
    priority: _$$N.OVERRIDING_MODAL,
    experiment: {
      check: u,
      predicate: e => e === jg.DEFAULT,
      postCheck: (t, i) => {
        let r = nH({
          isTemplateFile: nM({
            openFile: e
          }),
          isTryFile: e.isTryFile,
          canvasEmpty: w.current,
          onboardedToFigJam: t,
          cameFromWhatsNew: SS(i)
        });
        let n = r.length > 0;
        n && x(r);
        return n;
      }
    }
  }, [a, l]);
  let k = experimentResult || jg.DEFAULT;
  let N = k === jg.DEFAULT ? _isShowing2 : isShowing;
  let A = k === jg.DEFAULT ? _complete2 : complete;
  let O = useMemo(() => k === jg.DEFAULT ? _ : [], [k, _]);
  nV(uniqueId, useCallback(() => {
    show();
    _show();
  }, [show, _show]));
  let L = r_(A);
  let R = useCallback(() => {
    k === jg.DEFAULT ? L() : h && (A(), ng(k));
  }, [L, A, h, k]);
  return (useEffect(() => {
    0 === O.length && h && k !== jg.DEFAULT && ng(k);
  }, [h, O, k]), experimentResult && N && 0 !== O.length) ? jsx(ry, {
    steps: O,
    onComplete: R,
    isShowing: N,
    overlayUniqueId: uniqueId
  }) : null;
}
function nY({
  openFile: e
}) {
  let t = useSelector(e => e.mirror.appModel.currentPage);
  let i = Fk((e, t) => zC(e, t), t);
  let a = useAtomWithSubscription(zo);
  let o = Fu("interacted_figjam_whats_new_v2_cta");
  let l = useAtomWithSubscription(o);
  let {
    show,
    uniqueId,
    isShowing,
    complete
  } = _$$e({
    overlay: lLk,
    priority: _$$N.OVERRIDING_MODAL
  }, [a, l]);
  let [m, _] = useState([]);
  nV(uniqueId, useCallback(() => {
    show({
      canShow: (t, r) => {
        let n = nH({
          isTemplateFile: nM({
            openFile: e
          }),
          isTryFile: e.isTryFile,
          canvasEmpty: i,
          onboardedToFigJam: t,
          cameFromWhatsNew: SS(r)
        });
        let a = n.length > 0;
        a && _(n);
        return a;
      }
    });
  }, [show, _, i, e]));
  let x = r_(complete);
  return isShowing && 0 !== m.length ? jsx(ry, {
    steps: m,
    onComplete: x,
    isShowing,
    overlayUniqueId: uniqueId
  }) : null;
}
function nJ({
  openFile: e
}) {
  return jsx(nz, {
    openFile: e
  });
}
let nq = atom(async () => {
  if (document.fonts && FontFace) {
    let e = new FontFace("Whyte", `url(${buildStaticUrl("webfont/1/Whyte-Regular.woff")})`);
    document.fonts.add(e);
  }
  await document.fonts.ready;
});
let nX = Rq(nq);
function nZ(e) {
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: nd,
    userFlagOnShow: "figjam_browse_templates_modal_onboarded",
    element: nu,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function nQ(e) {
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: nc,
    userFlagOnShow: "figjam_browse_templates_modal_onboarded",
    element: np,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function n$() {
  let e = _$$r2("figjam_browse_templates_modal_onboarded");
  let t = useAtomWithSubscription(e);
  let i = useAtomWithSubscription(nX);
  let [a, o] = useState(!1);
  let l = Un();
  let {
    show,
    isShowing,
    uniqueId,
    complete
  } = _$$e({
    overlay: kp0,
    priority: _$$N.OVERRIDING_MODAL
  }, [t, i]);
  _$$E2(uniqueId, Lz, () => {
    o(!0);
    show({
      canShow: e => !e && !l
    });
  });
  _$$E2(uniqueId, P7, () => {
    show({
      canShow: e => !e && !l
    });
  });
  return a ? jsx(nZ, {
    isShowing,
    onClickPrimaryCta: complete,
    onClose: complete,
    onManualDismiss: complete
  }) : jsx(nQ, {
    isShowing,
    onClickPrimaryCta: complete,
    onClose: complete,
    onManualDismiss: complete
  });
}
let n4 = {};
function n6(e) {
  return n4[e] ?? "";
}
function n7(e) {
  return jsx(vX, {
    onSkipClick: e.dismissModal,
    useCase: fD.BRAINSTORM,
    children: jsx(wV, {
      bodyText: jsx("span", {
        className: R9,
        children: renderI18nText("figjam_onboarding_make_something.brainstorm.fig_jam_s_great_for_brainstorming", {
          boldText: jsx("b", {
            children: renderI18nText("figjam_onboarding_make_something.brainstorm.fig_jam_s_great_for_brainstorming_prefix")
          })
        })
      }),
      buttonText: renderI18nText("figjam_onboarding_make_something.brainstorm.go_on"),
      onButtonClick: e.onClickPrimaryCta,
      svg: _$$A9
    })
  });
}
function n8(e) {
  let {
    onClickPrimaryCta,
    dismissModal
  } = e;
  useEffect(() => {
    function e(e) {
      var i;
      onClickPrimaryCta();
      i = e.nodeId;
      n4.createdSticky = i;
    }
    fullscreenValue.fromFullscreen.on("createdSticky", e);
    return () => {
      fullscreenValue.fromFullscreen.removeListener("createdSticky", e);
    };
  }, [onClickPrimaryCta]);
  let a = _$$L();
  return jsx(vX, {
    onSkipClick: dismissModal,
    useCase: fD.BRAINSTORM,
    children: jsx(Dv, {
      targetType: "dom",
      targetKey: _$$s5,
      topPadding: a ? -4 : -22,
      autoWidth: !0,
      isBold: !0,
      children: jsx(mI, {
        bodyText: jsx("span", {
          children: renderI18nText("figjam_onboarding_make_something.brainstorm.sticky_notes_let_you_share_ideas_go_ahead_drag_one_into_the_blue_box_above", {
            boldText: jsx("b", {
              children: renderI18nText("figjam_onboarding_make_something.brainstorm.sticky_notes_let_you_share_ideas_go_ahead_drag_one_into_the_blue_box_above_bold_text")
            })
          })
        })
      })
    })
  });
}
function n9(e) {
  let [t] = useState(() => n6("createdSticky"));
  let {
    handleTargetLost
  } = Du({
    shouldSkipConnectorModalAtom: _$$aG,
    skipConnectorModal: e.onClickPrimaryCta
  });
  return jsx(vX, {
    onSkipClick: e.dismissModal,
    useCase: fD.BRAINSTORM,
    children: jsx(Dv, {
      targetType: "canvas",
      targetKey: t,
      topPadding: -4,
      isBold: !0,
      autoWidth: !0,
      arrowPosition: _$$F_.LEFT_TITLE,
      onTargetLost: handleTargetLost,
      children: jsx(mI, {
        bodyText: jsx("span", {
          children: renderI18nText("figjam_onboarding_make_something.brainstorm.just_like_that_keep_it_to_one_idea_per_sticky_next_let_s_check_out_stamps", {
            boldText: jsx("b", {
              children: renderI18nText("figjam_onboarding_make_something.brainstorm.just_like_that_keep_it_to_one_idea_per_sticky_next_let_s_check_out_stamps_bold_text")
            })
          })
        }),
        buttonText: renderI18nText("figjam_onboarding_make_something.brainstorm.next"),
        onButtonClick: e.onClickPrimaryCta
      })
    })
  });
}
function ae(e) {
  let {
    onClickPrimaryCta,
    dismissModal
  } = e;
  let {
    handleTargetLost
  } = Du({
    shouldSkipConnectorModalAtom: _$$aG,
    skipConnectorModal: e.onClickPrimaryCta
  });
  useEffect(() => {
    function e(e) {
      var i;
      onClickPrimaryCta();
      i = e.nodeId;
      n4.createdStamp = i;
    }
    fullscreenValue.fromFullscreen.on("createdStamp", e);
    return () => {
      fullscreenValue.fromFullscreen.removeListener("createdStamp", e);
    };
  }, [onClickPrimaryCta]);
  let s = _$$L();
  return jsx(vX, {
    onSkipClick: dismissModal,
    useCase: fD.BRAINSTORM,
    children: jsx(Dv, {
      targetType: "dom",
      targetKey: E$,
      topPadding: s ? -6 : -27,
      isBold: !0,
      autoWidth: !0,
      onTargetLost: handleTargetLost,
      children: jsx(mI, {
        bodyText: jsx("span", {
          children: renderI18nText("figjam_onboarding_make_something.brainstorm.stamps_are_here_or_press_e_they_re_good_for_voting_go_ahead_stamp_something", {
            boldText: jsx("b", {
              children: renderI18nText("figjam_onboarding_make_something.brainstorm.stamps_are_here_or_press_e_they_re_good_for_voting_go_ahead_stamp_something_bold_text")
            })
          })
        })
      })
    })
  });
}
function at(e) {
  let [t] = useState(() => n6("createdStamp"));
  let {
    handleTargetLost
  } = Du({
    shouldSkipConnectorModalAtom: _$$aG,
    skipConnectorModal: e.onClickPrimaryCta
  });
  return jsx(vX, {
    onSkipClick: e.dismissModal,
    useCase: fD.BRAINSTORM,
    children: jsx(Dv, {
      targetType: "canvas",
      targetKey: t,
      topPadding: -4,
      isBold: !0,
      autoWidth: !0,
      arrowPosition: _$$F_.TOP,
      onTargetLost: handleTargetLost,
      children: jsx(mI, {
        bodyText: jsx("span", {
          children: renderI18nText("figjam_onboarding_make_something.brainstorm.lovely_just_one_more_thing", {
            boldText: jsx("b", {
              children: renderI18nText("figjam_onboarding_make_something.brainstorm.lovely_just_one_more_thing_bold_text")
            })
          })
        }),
        buttonText: renderI18nText("figjam_onboarding_make_something.brainstorm.next"),
        onButtonClick: e.onClickPrimaryCta
      })
    })
  });
}
function ai(e) {
  let t = useDispatch();
  let i = MR();
  let a = qU();
  let [s, o] = useState("invalid");
  let {
    handleTargetLost
  } = Du({
    shouldSkipConnectorModalAtom: _$$aG,
    skipConnectorModal: e.onClickPrimaryCta
  });
  useEffect(() => (i({
    source: OO.MAKE_SOMETHING_V2_ONBOARDING
  }), t(lu({
    state: "open",
    userInitiated: !1
  })), o(Hm), () => {
    a({
      source: OO.MAKE_SOMETHING_V2_ONBOARDING
    });
    t(lu({
      state: "closed",
      userInitiated: !1
    }));
  }), [a, t, i]);
  return jsx(vX, {
    onSkipClick: e.dismissModal,
    useCase: fD.BRAINSTORM,
    children: jsx(Dv, {
      targetType: "dom",
      targetKey: s,
      topPadding: -4,
      isBold: !0,
      autoWidth: !0,
      onTargetLost: handleTargetLost,
      children: jsx(mI, {
        bodyText: jsx("span", {
          children: renderI18nText("figjam_onboarding_make_something.brainstorm.use_the_timer_to_keep_things_moving", {
            boldText: jsx("b", {
              children: renderI18nText("figjam_onboarding_make_something.brainstorm.use_the_timer_to_keep_things_moving_bold_text")
            })
          })
        }),
        buttonText: renderI18nText("figjam_onboarding_make_something.brainstorm.next"),
        onButtonClick: e.onClickPrimaryCta
      })
    })
  });
}
function ar(e) {
  let {
    onNext
  } = rH({
    ...e,
    useCase: fD.BRAINSTORM
  });
  return jsx(Dv, {
    targetType: "dom",
    targetKey: v4,
    topPadding: -4,
    isBold: !0,
    hasShadow: !0,
    children: jsx(iX, {
      titleText: renderI18nText("figjam_onboarding_make_something.brainstorm.when_you_re_ready"),
      bodyText: renderI18nText("figjam_onboarding_make_something.brainstorm.start_a_brainstorm_by_inviting_a_few_people_here_that_s_it"),
      buttonText: renderI18nText("figjam_onboarding_make_something.brainstorm.share_board"),
      onNext,
      onDismiss: e.dismissModal,
      imgSrc: mN,
      isBold: !0
    })
  });
}
function an(e) {
  _$$rL({
    useCase: fD.BRAINSTORM,
    stepName: "Intro",
    stepNum: 1
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Brainstorm - Intro`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: n7,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function aa(e) {
  _$$rL({
    useCase: fD.BRAINSTORM,
    stepName: "Sticky Prompt",
    stepNum: 2
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Brainstorm - Sticky Prompt`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: n8,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function as(e) {
  _$$rL({
    useCase: fD.BRAINSTORM,
    stepName: "Sticky Reaction",
    stepNum: 3
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Brainstorm - Sticky Reaction`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: n9,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function ao(e) {
  _$$rL({
    useCase: fD.BRAINSTORM,
    stepName: "Stamp Prompt",
    stepNum: 4
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Brainstorm - Stamp Prompt`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: ae,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function al(e) {
  _$$rL({
    useCase: fD.BRAINSTORM,
    stepName: "Stamp Reaction",
    stepNum: 5
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Brainstorm - Stamp Reaction`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: at,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function ad(e) {
  _$$rL({
    useCase: fD.BRAINSTORM,
    stepName: "Timer",
    stepNum: 6
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Brainstorm - Timer`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: ai,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function ac(e) {
  let t = _$$O2();
  _$$rL({
    useCase: fD.BRAINSTORM,
    stepName: "Share",
    stepNum: 7
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Brainstorm - Share`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: ar,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: () => {
      t({
        eventName: "msv2_completed",
        useCase: fD.BRAINSTORM
      });
      e.onClose();
    },
    onManualDismiss: e.onManualDismiss
  });
}
function au(e) {
  useEffect(() => {
    !function () {
      let e = getSingletonSceneGraph().getCurrentPage();
      if (e && e.childCount >= 1) {
        var t;
        var i;
        var r;
        let n = e.childrenNodes[0];
        if (n?.type === "SECTION" && n.childCount >= 1) {
          let e = n.childrenNodes[0];
          e?.type === "SHAPE_WITH_TEXT" && (t = e.guid, n4.planningAheadInitialNode = t);
        }
        if (n?.type === "SECTION" && n.childCount >= 9) {
          let e = n.childrenNodes[8];
          e?.type === "TEXT" && (i = e.guid, n4.planningAheadPerson = i);
        }
        if (n?.type === "SECTION" && n.childCount >= 4) {
          let e = n.childrenNodes[3];
          e?.type === "SHAPE_WITH_TEXT" && (r = e.guid, n4.planningAheadProject = r);
        }
      }
    }();
  }, []);
  return jsx(vX, {
    onSkipClick: e.dismissModal,
    useCase: fD.PLAN,
    children: jsx(wV, {
      bodyText: jsx("span", {
        className: R9,
        children: renderI18nText("figjam_onboarding_make_something.planning_ahead.fig_jam_s_great_for_planning_ahead_here_s_how_it_s_done", {
          boldText: jsx("b", {
            children: renderI18nText("figjam_onboarding_make_something.planning_ahead.fig_jam_s_great_for_planning_ahead_here_s_how_it_s_done_bold_text")
          })
        })
      }),
      buttonText: renderI18nText("figjam_onboarding_make_something.brainstorm.go_on"),
      onButtonClick: e.onClickPrimaryCta,
      svg: _$$A0
    })
  });
}
function ap(e) {
  let [t] = useState(() => n6("planningAheadInitialNode"));
  let {
    handleTargetLost
  } = Du({
    shouldSkipConnectorModalAtom: _$$aG,
    skipConnectorModal: e.onClickPrimaryCta
  });
  return jsx(vX, {
    onSkipClick: e.dismissModal,
    useCase: fD.PLAN,
    children: jsx(Dv, {
      targetType: "canvas",
      targetKey: t,
      topPadding: -7,
      isBold: !0,
      autoWidth: !0,
      arrowPosition: _$$F_.BOTTOM,
      onTargetLost: handleTargetLost,
      children: jsx(mI, {
        bodyText: jsx("span", {
          children: renderI18nText("figjam_onboarding_make_something.planning_ahead.start_with_a_simple_timeline_with_a_row_for_each_member_of_your_team")
        }),
        buttonText: renderI18nText("figjam_onboarding_make_something.brainstorm.next"),
        onButtonClick: e.onClickPrimaryCta
      })
    })
  });
}
function ah(e) {
  let {
    onClickPrimaryCta,
    dismissModal
  } = e;
  let [a] = useState(() => n6("planningAheadPerson"));
  let {
    handleTargetLost
  } = Du({
    shouldSkipConnectorModalAtom: _$$aG,
    skipConnectorModal: e.onClickPrimaryCta
  });
  useEffect(() => {
    function e() {
      onClickPrimaryCta();
    }
    fullscreenValue.fromFullscreen.on("finishedEditingText", e);
    return () => {
      fullscreenValue.fromFullscreen.removeListener("finishedEditingText", e);
    };
  }, [onClickPrimaryCta]);
  return jsx(vX, {
    onSkipClick: dismissModal,
    useCase: fD.PLAN,
    children: jsx(Dv, {
      targetType: "canvas",
      targetKey: a,
      topPadding: 2,
      isBold: !0,
      autoWidth: !0,
      arrowPosition: _$$F_.LEFT_TITLE,
      onTargetLost: handleTargetLost,
      children: jsx(mI, {
        bodyText: jsx("span", {
          children: renderI18nText("figjam_onboarding_make_something.planning_ahead.type_your_name_here_right_at_the_top", {
            boldText: jsx("b", {
              children: renderI18nText("figjam_onboarding_make_something.planning_ahead.type_your_name_here_right_at_the_top_bold_text")
            })
          })
        })
      })
    })
  });
}
function am(e) {
  let {
    onClickPrimaryCta,
    dismissModal
  } = e;
  let [a] = useState(() => n6("planningAheadProject"));
  let {
    handleTargetLost
  } = Du({
    shouldSkipConnectorModalAtom: _$$aG,
    skipConnectorModal: e.onClickPrimaryCta
  });
  useEffect(() => {
    function e() {
      onClickPrimaryCta();
    }
    fullscreenValue.fromFullscreen.on("finishedEditingShapeWithText", e);
    return () => {
      fullscreenValue.fromFullscreen.removeListener("finishedEditingShapeWithText", e);
    };
  }, [onClickPrimaryCta]);
  return jsx(vX, {
    onSkipClick: dismissModal,
    useCase: fD.PLAN,
    children: jsx(Dv, {
      targetType: "canvas",
      targetKey: a,
      topPadding: -6,
      isBold: !0,
      autoWidth: !0,
      arrowPosition: _$$F_.BOTTOM,
      onTargetLost: handleTargetLost,
      children: jsx(mI, {
        bodyText: jsx("span", {
          children: renderI18nText("figjam_onboarding_make_something.planning_ahead.what_are_you_working_on_this_month_rename_this_block_to_your_current_project", {
            boldText: jsx("b", {
              children: renderI18nText("figjam_onboarding_make_something.planning_ahead.what_are_you_working_on_this_month_rename_this_block_to_your_current_project_bold_text")
            })
          })
        })
      })
    })
  });
}
function af(e) {
  let [t] = useState(() => n6("planningAheadProject"));
  let {
    handleTargetLost
  } = Du({
    shouldSkipConnectorModalAtom: _$$aG,
    skipConnectorModal: e.onClickPrimaryCta
  });
  return jsx(vX, {
    onSkipClick: e.dismissModal,
    useCase: fD.PLAN,
    children: jsx(Dv, {
      targetType: "canvas",
      targetKey: t,
      topPadding: -4,
      isBold: !0,
      autoWidth: !0,
      arrowPosition: _$$F_.LEFT_TITLE,
      onTargetLost: handleTargetLost,
      children: jsx(mI, {
        bodyText: renderI18nText("figjam_onboarding_make_something.planning_ahead.you_can_resize_blocks_by_dragging_their_ends"),
        buttonText: renderI18nText("figjam_onboarding_make_something.brainstorm.next"),
        onButtonClick: e.onClickPrimaryCta
      })
    })
  });
}
function ag(e) {
  let {
    handleTargetLost
  } = Du({
    shouldSkipConnectorModalAtom: _$$aG,
    skipConnectorModal: e.onClickPrimaryCta
  });
  let i = _$$L();
  return jsx(vX, {
    onSkipClick: e.dismissModal,
    useCase: fD.PLAN,
    children: jsx(Dv, {
      targetType: "dom",
      targetKey: i ? _$$WB : BC,
      topPadding: i ? 2 : -23,
      isBold: !0,
      autoWidth: !0,
      onTargetLost: handleTargetLost,
      children: jsx(mI, {
        bodyText: renderI18nText("figjam_onboarding_make_something.planning_ahead.and_grab_more_shapes_as_needed_from_your_toolbar"),
        buttonText: renderI18nText("figjam_onboarding_make_something.brainstorm.next"),
        onButtonClick: e.onClickPrimaryCta
      })
    })
  });
}
function a_(e) {
  let {
    onNext
  } = rH({
    ...e,
    useCase: fD.PLAN
  });
  return jsx(Dv, {
    targetType: "dom",
    targetKey: v4,
    topPadding: -4,
    isBold: !0,
    autoWidth: !0,
    hasShadow: !0,
    children: jsx(iX, {
      titleText: renderI18nText("figjam_onboarding_make_something.planning_ahead.try_it_with_your_team"),
      bodyText: renderI18nText("figjam_onboarding_make_something.planning_ahead.share_this_board_and_your_whole_team_can_contribute"),
      buttonText: renderI18nText("figjam_onboarding_make_something.brainstorm.share_board"),
      onNext,
      onDismiss: e.dismissModal,
      imgSrc: mN,
      isBold: !0
    })
  });
}
function ax(e) {
  _$$rL({
    useCase: fD.PLAN,
    stepName: "Intro",
    stepNum: 1
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Planning Ahead - Intro`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: au,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function ay(e) {
  _$$rL({
    useCase: fD.PLAN,
    stepName: "Section",
    stepNum: 2
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Planning Ahead - Section`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: ap,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function ab(e) {
  _$$rL({
    useCase: fD.PLAN,
    stepName: "Person",
    stepNum: 3
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Planning Ahead - Person`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: ah,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function aC(e) {
  _$$rL({
    useCase: fD.PLAN,
    stepName: "Project Name",
    stepNum: 4
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Planning Ahead - Project Name`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: am,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function av(e) {
  _$$rL({
    useCase: fD.PLAN,
    stepName: "Project Block",
    stepNum: 5
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Planning Ahead - Project Block`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: af,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function aE(e) {
  _$$rL({
    useCase: fD.PLAN,
    stepName: "Shape",
    stepNum: 6
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Planning Ahead - Shape`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: ag,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function aT(e) {
  let t = _$$O2();
  _$$rL({
    useCase: fD.PLAN,
    stepName: "Share",
    stepNum: 7
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Planning Ahead - Share`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: a_,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: () => {
      t({
        eventName: "msv2_completed",
        useCase: fD.PLAN
      });
      e.onClose();
    },
    onManualDismiss: e.onManualDismiss
  });
}
function aw(e) {
  useEffect(() => {
    !function () {
      var e;
      var t;
      var i;
      let r = getSingletonSceneGraph().getCurrentPage();
      if (r) {
        if (r.childCount >= 1) {
          let t = r.childrenNodes[0];
          t?.type === "SHAPE_WITH_TEXT" && (e = t.guid, n4.teamChartName = e);
        }
        if (r.childCount >= 2) {
          let e = r.childrenNodes[1];
          e?.type === "ROUNDED_RECTANGLE" && (t = e.guid, n4.teamChartImage = t);
        }
        if (r.childCount >= 5) {
          let e = r.childrenNodes[4];
          e?.type === "SHAPE_WITH_TEXT" && (i = e.guid, n4.teamChartQuickCreate = i);
        }
      }
    }();
  }, []);
  return jsx(vX, {
    onSkipClick: e.dismissModal,
    useCase: fD.TEAM,
    children: jsx(wV, {
      bodyText: jsx("span", {
        className: R9,
        children: renderI18nText("figjam_onboarding_make_something.team_chart.in_fig_jam_you_can_diagram_all_sorts_of_things_here_s_an_example", {
          boldText: jsx("b", {
            children: renderI18nText("figjam_onboarding_make_something.team_chart.in_fig_jam_you_can_diagram_all_sorts_of_things_here_s_an_example_bold_text")
          })
        })
      }),
      buttonText: renderI18nText("figjam_onboarding_make_something.brainstorm.go_on"),
      onButtonClick: e.onClickPrimaryCta,
      svg: _$$A1
    })
  });
}
function aS(e) {
  let {
    onClickPrimaryCta,
    dismissModal
  } = e;
  let [a] = useState(() => n6("teamChartName"));
  let {
    handleTargetLost
  } = Du({
    shouldSkipConnectorModalAtom: _$$aG,
    skipConnectorModal: e.onClickPrimaryCta
  });
  useEffect(() => {
    function e() {
      onClickPrimaryCta();
    }
    fullscreenValue.fromFullscreen.on("finishedEditingShapeWithText", e);
    return () => {
      fullscreenValue.fromFullscreen.removeListener("finishedEditingShapeWithText", e);
    };
  }, [onClickPrimaryCta]);
  return jsx(vX, {
    onSkipClick: dismissModal,
    useCase: fD.TEAM,
    children: jsx(Dv, {
      targetType: "canvas",
      targetKey: a,
      topPadding: -6,
      isBold: !0,
      autoWidth: !0,
      arrowPosition: _$$F_.BOTTOM,
      onTargetLost: handleTargetLost,
      children: jsx(mI, {
        bodyText: jsx("span", {
          children: renderI18nText("figjam_onboarding_make_something.team_chart.double_click_this_text_to_type_in_the_manager_s_name_go_ahead_try_it", {
            boldText: jsx("b", {
              children: renderI18nText("figjam_onboarding_make_something.team_chart.double_click_this_text_to_type_in_the_manager_s_name_go_ahead_try_it_bold_text")
            })
          })
        })
      })
    })
  });
}
function aj(e) {
  let [t] = useState(() => n6("teamChartImage"));
  let {
    handleTargetLost
  } = Du({
    shouldSkipConnectorModalAtom: _$$aG,
    skipConnectorModal: e.onClickPrimaryCta
  });
  return jsx(vX, {
    onSkipClick: e.dismissModal,
    useCase: fD.TEAM,
    children: jsx(Dv, {
      targetType: "canvas",
      targetKey: t,
      topPadding: -4,
      isBold: !0,
      autoWidth: !0,
      arrowPosition: _$$F_.LEFT_TITLE,
      onTargetLost: handleTargetLost,
      children: jsx(mI, {
        bodyText: jsx("span", {
          children: renderI18nText("figjam_onboarding_make_something.team_chart.you_can_add_images_by_simply_dragging_them_into_fig_jam")
        }),
        buttonText: renderI18nText("figjam_onboarding_make_something.brainstorm.next"),
        onButtonClick: e.onClickPrimaryCta
      })
    })
  });
}
function aI(e) {
  let {
    onClickPrimaryCta,
    dismissModal
  } = e;
  let [a] = useState(() => n6("teamChartQuickCreate"));
  let {
    handleTargetLost
  } = Du({
    shouldSkipConnectorModalAtom: _$$aG,
    skipConnectorModal: e.onClickPrimaryCta
  });
  useEffect(() => {
    function e() {
      onClickPrimaryCta();
    }
    fullscreenValue.fromFullscreen.on("quickCreate", e);
    return () => {
      fullscreenValue.fromFullscreen.removeListener("quickCreate", e);
    };
  }, [onClickPrimaryCta]);
  return jsx(vX, {
    onSkipClick: dismissModal,
    useCase: fD.TEAM,
    children: jsx(Dv, {
      targetType: "canvas",
      targetKey: a,
      topPadding: -4,
      isBold: !0,
      autoWidth: !0,
      arrowPosition: _$$F_.RIGHT_TITLE,
      onTargetLost: handleTargetLost,
      children: jsx(mI, {
        bodyText: jsx("span", {
          children: renderI18nText("figjam_onboarding_make_something.team_chart.adding_to_a_diagram_is_simple_hover_over_a_shape_and_click_this_button_try_it", {
            boldText: jsx("b", {
              children: renderI18nText("figjam_onboarding_make_something.team_chart.adding_to_a_diagram_is_simple_hover_over_a_shape_and_click_this_button_try_it_bold_text")
            })
          })
        })
      })
    })
  });
}
function ak(e) {
  let {
    handleTargetLost
  } = Du({
    shouldSkipConnectorModalAtom: _$$aG,
    skipConnectorModal: e.onClickPrimaryCta
  });
  let i = _$$L();
  return jsx(vX, {
    onSkipClick: e.dismissModal,
    useCase: fD.TEAM,
    children: jsx(Dv, {
      targetType: "dom",
      targetKey: i ? _$$WB : BC,
      topPadding: i ? 2 : -23,
      isBold: !0,
      autoWidth: !0,
      onTargetLost: handleTargetLost,
      children: jsx(mI, {
        bodyText: jsx("span", {
          children: renderI18nText("figjam_onboarding_make_something.team_chart.you_can_also_grab_more_shapes_from_here")
        }),
        buttonText: renderI18nText("figjam_onboarding_make_something.brainstorm.next"),
        onButtonClick: e.onClickPrimaryCta
      })
    })
  });
}
function aN(e) {
  let {
    handleTargetLost
  } = Du({
    shouldSkipConnectorModalAtom: _$$aG,
    skipConnectorModal: e.onClickPrimaryCta
  });
  let i = _$$L();
  return jsx(vX, {
    onSkipClick: e.dismissModal,
    useCase: fD.TEAM,
    children: jsx(Dv, {
      targetType: "dom",
      targetKey: Nr,
      topPadding: i ? -1 : void 0,
      isBold: !0,
      autoWidth: !0,
      onTargetLost: handleTargetLost,
      children: jsx(mI, {
        bodyText: jsx("span", {
          children: renderI18nText("figjam_onboarding_make_something.team_chart.and_use_the_connector_tool_to_connect_any_two_things_together")
        }),
        buttonText: renderI18nText("figjam_onboarding_make_something.brainstorm.next"),
        onButtonClick: e.onClickPrimaryCta
      })
    })
  });
}
function aA(e) {
  let {
    onNext
  } = rH({
    ...e,
    useCase: fD.TEAM
  });
  return jsx(Dv, {
    targetType: "dom",
    targetKey: v4,
    topPadding: -4,
    isBold: !0,
    autoWidth: !0,
    hasShadow: !0,
    children: jsx(iX, {
      titleText: renderI18nText("figjam_onboarding_make_something.team_chart.diagram_together"),
      bodyText: jsx("span", {
        children: renderI18nText("figjam_onboarding_make_something.team_chart.share_this_board_and_your_whole_team_can_pitch_in")
      }),
      buttonText: renderI18nText("figjam_onboarding_make_something.brainstorm.share_board"),
      onNext,
      onDismiss: e.dismissModal,
      imgSrc: mN,
      isBold: !0
    })
  });
}
function aO(e) {
  _$$rL({
    useCase: fD.TEAM,
    stepName: "Intro",
    stepNum: 1
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Team Chart - Intro`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: aw,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function aL(e) {
  _$$rL({
    useCase: fD.TEAM,
    stepName: "Name",
    stepNum: 2
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Team Chart - Name`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: aS,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function aR(e) {
  _$$rL({
    useCase: fD.TEAM,
    stepName: "Image",
    stepNum: 3
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Team Chart - Image`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: aj,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function aD(e) {
  _$$rL({
    useCase: fD.TEAM,
    stepName: "Quick Create",
    stepNum: 4
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Team Chart - Quick Create`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: aI,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function aM(e) {
  _$$rL({
    useCase: fD.TEAM,
    stepName: "Shape",
    stepNum: 5
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Team Chart - Shape`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: ak,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function aP(e) {
  _$$rL({
    useCase: fD.TEAM,
    stepName: "Connector",
    stepNum: 6
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Team Chart - Connector`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: aN,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function aF(e) {
  let t = _$$O2();
  _$$rL({
    useCase: fD.TEAM,
    stepName: "Share",
    stepNum: 7
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Team Chart - Share`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: aA,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: () => {
      t({
        eventName: "msv2_completed",
        useCase: fD.TEAM
      });
      e.onClose();
    },
    onManualDismiss: e.onManualDismiss
  });
}
function aB(e) {
  useEffect(() => {
    !function () {
      var e;
      var t;
      var i;
      var r;
      var n;
      let a = getSingletonSceneGraph().getCurrentPage();
      if (a) {
        if (a.childCount >= 1) {
          let t = a.childrenNodes[0];
          t?.type === "SECTION" && (e = t.guid, n4.teamUpdatesSection = e);
        }
        if (a.childCount >= 6) {
          let e = a.childrenNodes[5];
          e?.type === "WIDGET" && (t = e.guid, n4.teamUpdatesPhotoBooth = t);
        }
        if (a.childCount >= 4) {
          let e = a.childrenNodes[3];
          e?.type === "TEXT" && (i = e.guid, n4.teamUpdatesUpdates = i);
        }
        if (a.childCount >= 5) {
          let e = a.childrenNodes[4];
          e?.type === "TEXT" && (r = e.guid, n4.teamUpdatesImportantDates = r);
        }
        if (a.childCount >= 1) {
          let e = a.childrenNodes[0];
          if (e?.type === "SECTION" && e.childCount >= 2) {
            let t = e.childrenNodes[1];
            t?.type === "STICKY" && (n = t.guid, n4.teamUpdatesSticky = n);
          }
        }
      }
    }();
  }, []);
  return jsx(vX, {
    onSkipClick: e.dismissModal,
    useCase: fD.UPDATES,
    children: jsx(wV, {
      bodyText: jsx("span", {
        className: R9,
        children: renderI18nText("figjam_onboarding_make_something.team_updates.fig_jam_s_great_for_team_syncs_here_s_how_it_works", {
          boldText: jsx("b", {
            children: renderI18nText("figjam_onboarding_make_something.team_updates.fig_jam_s_great_for_team_syncs_here_s_how_it_works_bold_text")
          })
        })
      }),
      buttonText: renderI18nText("figjam_onboarding_make_something.brainstorm.go_on"),
      onButtonClick: e.onClickPrimaryCta,
      svg: _$$A10
    })
  });
}
function aU(e) {
  let [t] = useState(() => n6("teamUpdatesSection"));
  let {
    handleTargetLost
  } = Du({
    shouldSkipConnectorModalAtom: _$$aG,
    skipConnectorModal: e.onClickPrimaryCta
  });
  return jsx(vX, {
    onSkipClick: e.dismissModal,
    useCase: fD.UPDATES,
    children: jsx(Dv, {
      targetType: "canvas",
      targetKey: t,
      topPadding: -6,
      isBold: !0,
      autoWidth: !0,
      arrowPosition: _$$F_.BOTTOM,
      onTargetLost: handleTargetLost,
      children: jsx(mI, {
        bodyText: jsx("span", {
          children: renderI18nText("figjam_onboarding_make_something.team_updates.each_person_gets_a_row_of_their_own_for_sharing_updates_and_priorities")
        }),
        buttonText: renderI18nText("figjam_onboarding_make_something.brainstorm.next"),
        onButtonClick: e.onClickPrimaryCta
      })
    })
  });
}
function aG(e) {
  let [t] = useState(() => n6("teamUpdatesPhotoBooth"));
  let {
    handleTargetLost
  } = Du({
    shouldSkipConnectorModalAtom: _$$aG,
    skipConnectorModal: e.onClickPrimaryCta
  });
  return jsx(vX, {
    onSkipClick: e.dismissModal,
    useCase: fD.UPDATES,
    children: jsx(Dv, {
      targetType: "canvas",
      targetKey: t,
      topPadding: -6,
      isBold: !0,
      autoWidth: !0,
      arrowPosition: _$$F_.BOTTOM,
      onTargetLost: handleTargetLost,
      children: jsx(mI, {
        bodyText: jsx("span", {
          children: renderI18nText("figjam_onboarding_make_something.team_updates.take_a_selfie_then_drag_it_into_whichever_row_you_d_like_try_and_click_the_red_dot", {
            boldText: jsx("b", {
              children: renderI18nText("figjam_onboarding_make_something.team_updates.take_a_selfie_then_drag_it_into_whichever_row_you_d_like_try_and_click_the_red_dot_bold_text")
            })
          })
        }),
        buttonText: renderI18nText("figjam_onboarding_make_something.brainstorm.next"),
        onButtonClick: e.onClickPrimaryCta
      })
    })
  });
}
function aK(e) {
  let [t] = useState(() => n6("teamUpdatesUpdates"));
  let {
    handleTargetLost
  } = Du({
    shouldSkipConnectorModalAtom: _$$aG,
    skipConnectorModal: e.onClickPrimaryCta
  });
  return jsx(vX, {
    onSkipClick: e.dismissModal,
    useCase: fD.UPDATES,
    children: jsx(Dv, {
      targetType: "canvas",
      targetKey: t,
      topPadding: -5,
      isBold: !0,
      autoWidth: !0,
      arrowPosition: _$$F_.BOTTOM,
      onTargetLost: handleTargetLost,
      children: jsx(mI, {
        bodyText: jsx("span", {
          children: renderI18nText("figjam_onboarding_make_something.team_updates.your_whole_team_can_share_updates_here")
        }),
        buttonText: renderI18nText("figjam_onboarding_make_something.brainstorm.next"),
        onButtonClick: e.onClickPrimaryCta
      })
    })
  });
}
function aH(e) {
  let [t] = useState(() => n6("teamUpdatesImportantDates"));
  let {
    handleTargetLost
  } = Du({
    shouldSkipConnectorModalAtom: _$$aG,
    skipConnectorModal: e.onClickPrimaryCta
  });
  return jsx(vX, {
    onSkipClick: e.dismissModal,
    useCase: fD.UPDATES,
    children: jsx(Dv, {
      targetType: "canvas",
      targetKey: t,
      topPadding: -5,
      isBold: !0,
      autoWidth: !0,
      arrowPosition: _$$F_.BOTTOM,
      onTargetLost: handleTargetLost,
      children: jsx(mI, {
        bodyText: jsx("span", {
          children: renderI18nText("figjam_onboarding_make_something.team_updates.and_can_add_important_dates_to_the_calendar_over_here")
        }),
        buttonText: renderI18nText("figjam_onboarding_make_something.brainstorm.next"),
        onButtonClick: e.onClickPrimaryCta
      })
    })
  });
}
function az(e) {
  let {
    onClickPrimaryCta,
    dismissModal
  } = e;
  let [a] = useState(() => n6("teamUpdatesSticky"));
  let {
    handleTargetLost
  } = Du({
    shouldSkipConnectorModalAtom: _$$aG,
    skipConnectorModal: e.onClickPrimaryCta
  });
  useEffect(() => {
    function e() {
      onClickPrimaryCta();
    }
    fullscreenValue.fromFullscreen.on("finishedEditingSticky", e);
    return () => {
      fullscreenValue.fromFullscreen.removeListener("finishedEditingSticky", e);
    };
  }, [onClickPrimaryCta]);
  return jsx(vX, {
    onSkipClick: dismissModal,
    useCase: fD.UPDATES,
    children: jsx(Dv, {
      targetType: "canvas",
      targetKey: a,
      topPadding: -16,
      isBold: !0,
      autoWidth: !0,
      arrowPosition: _$$F_.TOP,
      onTargetLost: handleTargetLost,
      children: jsx(mI, {
        bodyText: jsx("span", {
          children: renderI18nText("figjam_onboarding_make_something.team_updates.give_it_a_go_try_typing_your_priorities_in_this_sticky_note", {
            boldText: jsx("b", {
              children: renderI18nText("figjam_onboarding_make_something.team_updates.give_it_a_go_try_typing_your_priorities_in_this_sticky_note_bold_text")
            })
          })
        })
      })
    })
  });
}
function aV(e) {
  let {
    onNext
  } = rH({
    ...e,
    useCase: fD.UPDATES
  });
  return jsx(Dv, {
    targetType: "dom",
    targetKey: v4,
    topPadding: -4,
    isBold: !0,
    autoWidth: !0,
    hasShadow: !0,
    children: jsx(iX, {
      titleText: renderI18nText("figjam_onboarding_make_something.brainstorm.when_you_re_ready"),
      bodyText: renderI18nText("figjam_onboarding_make_something.team_updates.invite_your_teammates_and_run_a_quick_team_check_in"),
      buttonText: renderI18nText("figjam_onboarding_make_something.brainstorm.share_board"),
      onNext,
      onDismiss: e.dismissModal,
      imgSrc: mN,
      isBold: !0
    })
  });
}
function aW(e) {
  _$$rL({
    useCase: fD.UPDATES,
    stepName: "Intro",
    stepNum: 1
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Team Updates - Intro`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: aB,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function aY(e) {
  _$$rL({
    useCase: fD.UPDATES,
    stepName: "Section",
    stepNum: 2
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Team Updates - Section`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: aU,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function aJ(e) {
  _$$rL({
    useCase: fD.UPDATES,
    stepName: "Photo Booth",
    stepNum: 3
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Team Updates - Photo Booth`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: aG,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function aq(e) {
  _$$rL({
    useCase: fD.UPDATES,
    stepName: "Updates",
    stepNum: 4
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Team Updates - Updates`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: aK,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function aX(e) {
  _$$rL({
    useCase: fD.UPDATES,
    stepName: "Important Dates",
    stepNum: 5
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Team Updates - Important Dates`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: aH,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function aZ(e) {
  _$$rL({
    useCase: fD.UPDATES,
    stepName: "Sticky",
    stepNum: 6
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Team Updates - Sticky`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: az,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: e.onClose,
    onManualDismiss: e.onManualDismiss
  });
}
function aQ(e) {
  let t = _$$O2();
  _$$rL({
    useCase: fD.UPDATES,
    stepName: "Share",
    stepNum: 7
  });
  return jsx(_$$h, {
    testId: e.testId,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: `${CM} - Team Updates - Share`,
    userFlagOnShow: "figjam_editor_onboarded",
    element: aV,
    isShowing: e.isShowing,
    onClickPrimaryCta: e.onClickPrimaryCta,
    onClose: () => {
      t({
        eventName: "msv2_completed",
        useCase: fD.UPDATES
      });
      e.onClose();
    },
    onManualDismiss: e.onManualDismiss
  });
}
function a$(e) {
  switch (e) {
    case qy.BRAINSTORM_TEMPLATE_BUTTON_INTERACTED:
      return [an, aa, as, ao, al, ad, ac, a0];
    case qy.TEAM_UPDATES_TEMPLATE_BUTTON_INTERACTED:
      return [aW, aY, aJ, aq, aX, aZ, aQ, a0];
    case qy.PLANNING_AHEAD_TEMPLATE_BUTTON_INTERACTED:
      return [ax, ay, ab, aC, av, aE, aT, a0];
    case qy.TEAM_CHART_TEMPLATE_BUTTON_INTERACTED:
      return [aO, aL, aR, aD, aM, aP, aF, a0];
    default:
      return [];
  }
}
function a0({
  onClickPrimaryCta: e
}) {
  let t = useSelector(e => e.modalShown);
  let i = useRef(t);
  useEffect(() => {
    !t && i.current && (e(), handleAtomEvent({
      id: P7
    }));
  }, [e, t]);
  return jsx(Fragment, {});
}
function a1() {
  let [e, t] = useState([]);
  let i = Xr(_$$w5);
  let {
    complete,
    uniqueId,
    show,
    isShowing
  } = _$$e({
    overlay: Njd,
    priority: _$$N.OVERRIDING_MODAL
  });
  let c = useCallback(() => {
    complete();
    i(_$$tX2.COMPLETED);
  }, [complete, i]);
  return (_$$E2(uniqueId, qy.BRAINSTORM_TEMPLATE_BUTTON_INTERACTED, () => {
    t(a$(qy.BRAINSTORM_TEMPLATE_BUTTON_INTERACTED));
    i(_$$tX2.USE_CASE_STEPS);
    show();
  }), _$$E2(uniqueId, qy.TEAM_UPDATES_TEMPLATE_BUTTON_INTERACTED, () => {
    t(a$(qy.TEAM_UPDATES_TEMPLATE_BUTTON_INTERACTED));
    i(_$$tX2.USE_CASE_STEPS);
    show();
  }), _$$E2(uniqueId, qy.PLANNING_AHEAD_TEMPLATE_BUTTON_INTERACTED, () => {
    t(a$(qy.PLANNING_AHEAD_TEMPLATE_BUTTON_INTERACTED));
    i(_$$tX2.USE_CASE_STEPS);
    show();
  }), _$$E2(uniqueId, qy.TEAM_CHART_TEMPLATE_BUTTON_INTERACTED, () => {
    t(a$(qy.TEAM_CHART_TEMPLATE_BUTTON_INTERACTED));
    i(_$$tX2.USE_CASE_STEPS);
    show();
  }), rx({
    overlayUniqueId: uniqueId,
    afterReset: complete
  }), 0 === e.length) ? null : jsx(ry, {
    steps: e,
    onComplete: c,
    isShowing,
    overlayUniqueId: uniqueId
  });
}
function st() {
  return jsxs("svg", {
    width: "146",
    height: "191",
    viewBox: "0 0 146 191",
    fill: "none",
    children: [jsx("path", {
      d: "M35 153H3C1.34315 153 0 154.343 0 156V188C0 189.657 1.34315 191 3 191H35C36.6569 191 38 189.657 38 188V156C38 154.343 36.6569 153 35 153Z",
      fill: "#007BE5"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M23.875 166.25C22.4943 166.25 21.375 167.369 21.375 168.75C21.375 170.131 22.4943 171.25 23.875 171.25C25.2557 171.25 26.375 170.131 26.375 168.75C26.375 167.369 25.2557 166.25 23.875 166.25ZM19.875 168.75C19.875 166.541 21.6659 164.75 23.875 164.75C26.0841 164.75 27.875 166.541 27.875 168.75C27.875 170.3 26.9937 171.644 25.7049 172.308C28.337 173.03 30.3125 175.271 30.3125 178.012V179.312V180.062H29.5625H20.5625H19.8125H18.1875H8.4375H7.6875V179.312V178.012C7.6875 175.271 9.663 173.03 12.2951 172.308C11.0063 171.644 10.125 170.3 10.125 168.75C10.125 166.541 11.9159 164.75 14.125 164.75C16.3341 164.75 18.125 166.541 18.125 168.75C18.125 170.3 17.2437 171.644 15.9549 172.308C17.1449 172.634 18.2008 173.271 19.0005 174.125C19.7985 173.271 20.8514 172.633 22.0433 172.307C20.7555 171.642 19.875 170.299 19.875 168.75ZM9.1875 178.012C9.1875 175.617 11.3334 173.562 14.125 173.562C16.9166 173.562 19.0625 175.617 19.0625 178.012V178.562H18.1875H9.1875V178.012ZM20.5625 178.562H28.8125V178.012C28.8125 175.617 26.6666 173.562 23.875 173.562C22.2296 173.562 20.7911 174.286 19.8997 175.374C20.323 176.164 20.5625 177.058 20.5625 178.012V178.562ZM11.625 168.75C11.625 167.369 12.7443 166.25 14.125 166.25C15.5057 166.25 16.625 167.369 16.625 168.75C16.625 170.131 15.5057 171.25 14.125 171.25C12.7443 171.25 11.625 170.131 11.625 168.75Z",
      fill: "white"
    }), jsx("path", {
      d: "M89 153H57C55.3431 153 54 154.343 54 156V188C54 189.657 55.3431 191 57 191H89C90.6569 191 92 189.657 92 188V156C92 154.343 90.6569 153 89 153Z",
      fill: "#9747FF"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M77.875 166.25C76.4943 166.25 75.375 167.369 75.375 168.75C75.375 170.131 76.4943 171.25 77.875 171.25C79.2557 171.25 80.375 170.131 80.375 168.75C80.375 167.369 79.2557 166.25 77.875 166.25ZM73.875 168.75C73.875 166.541 75.6659 164.75 77.875 164.75C80.0841 164.75 81.875 166.541 81.875 168.75C81.875 170.3 80.9937 171.644 79.7049 172.308C82.337 173.03 84.3125 175.271 84.3125 178.012V179.312V180.062H83.5625H74.5625H73.8125H72.1875H62.4375H61.6875V179.312V178.012C61.6875 175.271 63.663 173.03 66.2951 172.308C65.0063 171.644 64.125 170.3 64.125 168.75C64.125 166.541 65.9159 164.75 68.125 164.75C70.3341 164.75 72.125 166.541 72.125 168.75C72.125 170.3 71.2437 171.644 69.9549 172.308C71.1449 172.634 72.2008 173.271 73.0005 174.125C73.7985 173.271 74.8514 172.633 76.0433 172.307C74.7555 171.642 73.875 170.299 73.875 168.75ZM63.1875 178.012C63.1875 175.617 65.3334 173.562 68.125 173.562C70.9166 173.562 73.0625 175.617 73.0625 178.012V178.562H72.1875H63.1875V178.012ZM74.5625 178.562H82.8125V178.012C82.8125 175.617 80.6666 173.562 77.875 173.562C76.2296 173.562 74.7911 174.286 73.8997 175.374C74.323 176.164 74.5625 177.058 74.5625 178.012V178.562ZM65.625 168.75C65.625 167.369 66.7443 166.25 68.125 166.25C69.5057 166.25 70.625 167.369 70.625 168.75C70.625 170.131 69.5057 171.25 68.125 171.25C66.7443 171.25 65.625 170.131 65.625 168.75Z",
      fill: "white"
    }), jsx("path", {
      d: "M143 153H111C109.343 153 108 154.343 108 156V188C108 189.657 109.343 191 111 191H143C144.657 191 146 189.657 146 188V156C146 154.343 144.657 153 143 153Z",
      fill: "#FFCD29"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M131.875 166.25C130.494 166.25 129.375 167.369 129.375 168.75C129.375 170.131 130.494 171.25 131.875 171.25C133.256 171.25 134.375 170.131 134.375 168.75C134.375 167.369 133.256 166.25 131.875 166.25ZM127.875 168.75C127.875 166.541 129.666 164.75 131.875 164.75C134.084 164.75 135.875 166.541 135.875 168.75C135.875 170.3 134.994 171.644 133.705 172.308C136.337 173.03 138.312 175.271 138.312 178.012V179.312V180.062H137.562H128.562H127.812H126.188H116.438H115.688V179.312V178.012C115.688 175.271 117.663 173.03 120.295 172.308C119.006 171.644 118.125 170.3 118.125 168.75C118.125 166.541 119.916 164.75 122.125 164.75C124.334 164.75 126.125 166.541 126.125 168.75C126.125 170.3 125.244 171.644 123.955 172.308C125.145 172.634 126.201 173.271 127 174.125C127.799 173.271 128.851 172.633 130.043 172.307C128.755 171.642 127.875 170.299 127.875 168.75ZM117.188 178.012C117.188 175.617 119.333 173.562 122.125 173.562C124.917 173.562 127.062 175.617 127.062 178.012V178.562H126.188H117.188V178.012ZM128.562 178.562H136.812V178.012C136.812 175.617 134.667 173.562 131.875 173.562C130.23 173.562 128.791 174.286 127.9 175.374C128.323 176.164 128.562 177.058 128.562 178.012V178.562ZM119.625 168.75C119.625 167.369 120.744 166.25 122.125 166.25C123.506 166.25 124.625 167.369 124.625 168.75C124.625 170.131 123.506 171.25 122.125 171.25C120.744 171.25 119.625 170.131 119.625 168.75Z",
      fill: "white"
    }), jsx("path", {
      d: "M112.581 1L125 13.7668V113H20V1H112.581Z",
      fill: "white"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.5 0.5H112.792L125.5 13.5637V113.5H19.5V0.5ZM20.5 1.5V112.5H124.5V14.2668H112.081V1.5H20.5ZM113.081 2.23108L123.816 13.2668H113.081V2.23108Z",
      fill: "black",
      fillOpacity: "0.8"
    }), jsx("path", {
      d: "M38 71C41.866 71 45 67.866 45 64C45 60.134 41.866 57 38 57C34.134 57 31 60.134 31 64C31 67.866 34.134 71 38 71Z",
      fill: "#56CCF2",
      fillOpacity: "0.8"
    }), jsx("path", {
      d: "M60 71C63.866 71 67 67.866 67 64C67 60.134 63.866 57 60 57C56.134 57 53 60.134 53 64C53 67.866 56.134 71 60 71Z",
      fill: "#EB5757"
    }), jsx("path", {
      d: "M82 71C85.866 71 89 67.866 89 64C89 60.134 85.866 57 82 57C78.134 57 75 60.134 75 64C75 67.866 78.134 71 82 71Z",
      fill: "#F2994A"
    }), jsx("path", {
      d: "M104 71C107.866 71 111 67.866 111 64C111 60.134 107.866 57 104 57C100.134 57 97 60.134 97 64C97 67.866 100.134 71 104 71Z",
      fill: "#F2C94C"
    }), jsx("path", {
      d: "M38 49C41.866 49 45 45.866 45 42C45 38.134 41.866 35 38 35C34.134 35 31 38.134 31 42C31 45.866 34.134 49 38 49Z",
      fill: "#333333"
    }), jsx("path", {
      d: "M60 49C63.866 49 67 45.866 67 42C67 38.134 63.866 35 60 35C56.134 35 53 38.134 53 42C53 45.866 56.134 49 60 49Z",
      fill: "#4F4F4F"
    }), jsx("path", {
      d: "M82 49C85.866 49 89 45.866 89 42C89 38.134 85.866 35 82 35C78.134 35 75 38.134 75 42C75 45.866 78.134 49 82 49Z",
      fill: "#828282"
    }), jsx("path", {
      d: "M104 49C107.866 49 111 45.866 111 42C111 38.134 107.866 35 104 35C100.134 35 97 38.134 97 42C97 45.866 100.134 49 104 49Z",
      fill: "#E0E0E0"
    }), jsx("path", {
      d: "M36.66 20L36.1 18.36H33.26L32.68 20H31.05L33.72 13H35.69L38.34 20H36.66ZM33.7 17.1H35.67L35.15 15.58C34.99 15.11 34.97 14.59 34.96 13.85H34.42C34.41 14.59 34.4 15.11 34.23 15.59L33.7 17.1ZM39.9023 21.95C38.9523 21.95 38.6523 21.49 38.6523 21.01C38.6523 20.61 38.9823 20.32 39.3423 20.21V19.75C39.0223 19.66 38.7723 19.44 38.7723 19.08C38.7723 18.54 39.1623 18.28 39.5923 18.14V17.69C39.2423 17.44 39.0223 17.16 39.0223 16.65C39.0223 15.6 39.9323 14.85 41.1023 14.85C41.9223 14.85 42.6723 15.17 42.9323 15.9H43.3623C43.4423 15.17 43.6723 15 44.1523 15H44.4123V16.08H43.8623C43.5523 16.08 43.4723 16.15 43.4123 16.66L43.4023 16.75C43.2823 17.83 42.4123 18.49 41.2423 18.49C40.8723 18.49 40.5023 18.45 40.2023 18.32C39.9223 18.4 39.8223 18.51 39.8223 18.67C39.8223 18.89 40.0323 18.89 40.3223 18.89H42.4723C43.5423 18.89 44.2123 19.59 44.2123 20.4C44.2123 21.41 43.4523 21.95 42.4723 21.95H39.9023ZM41.2323 17.56C41.7623 17.56 42.1123 17.22 42.1123 16.71C42.1123 16.19 41.7623 15.81 41.2323 15.81C40.7023 15.81 40.3523 16.19 40.3523 16.71C40.3523 17.22 40.7023 17.56 41.2323 17.56ZM40.2423 20.92H42.1923C42.6623 20.92 42.8123 20.73 42.8123 20.45C42.8123 20.22 42.6623 20 42.1923 20H40.0023C39.8823 20.07 39.7423 20.25 39.7423 20.45C39.7423 20.77 39.9723 20.92 40.2423 20.92Z",
      fill: "black",
      fillOpacity: "0.8"
    }), jsx("path", {
      d: "M54.62 20L53.97 18.15H50.89L50.23 20H49.15L51.78 13H53.16L55.74 20H54.62ZM51.22 17.23H53.64L52.97 15.33C52.77 14.75 52.66 14.35 52.65 13.7H52.23C52.21 14.35 52.11 14.76 51.9 15.33L51.22 17.23ZM57.4441 21.95C56.5441 21.95 56.2441 21.45 56.2441 21.05C56.2441 20.6 56.5041 20.27 56.9341 20.08V19.72C56.6641 19.63 56.4441 19.41 56.4441 19.11C56.4441 18.73 56.7041 18.43 57.1841 18.23V17.87C56.8741 17.62 56.6441 17.28 56.6441 16.64C56.6441 15.7 57.4141 14.9 58.5441 14.9C59.5941 14.9 60.0441 15.46 60.2141 15.87H60.5641C60.6041 15.4 60.8441 15.04 61.3241 15.04H61.6641V15.82H61.2541C60.8341 15.82 60.6741 15.92 60.6341 16.49L60.6141 16.73C60.5241 17.85 59.7541 18.57 58.6441 18.57C58.3041 18.57 57.9841 18.53 57.7041 18.38C57.4341 18.49 57.2641 18.67 57.2641 18.85C57.2641 19.02 57.3641 19.17 57.7041 19.17H59.8541C60.8241 19.17 61.4541 19.73 61.4541 20.56C61.4541 21.49 60.7341 21.95 59.8741 21.95H57.4441ZM58.6441 17.83C59.2941 17.83 59.7141 17.4 59.7141 16.74C59.7141 16.09 59.2941 15.64 58.6441 15.64C57.9941 15.64 57.5741 16.09 57.5741 16.74C57.5741 17.4 57.9941 17.83 58.6441 17.83ZM57.8241 21.15H59.7541C60.1541 21.15 60.5041 21.04 60.5041 20.57C60.5041 20.1 60.1541 20 59.7541 20H57.4341C57.2741 20.1 57.0741 20.32 57.0741 20.63C57.0741 21.03 57.3441 21.15 57.8241 21.15Z",
      fill: "black",
      fillOpacity: "0.8"
    }), jsx("path", {
      d: "M67.4862 20H66.2205L68.5249 13.4545H69.9886L72.2962 20H71.0305L69.2823 14.7969H69.2312L67.4862 20ZM67.5277 17.4336H70.9794V18.386H67.5277V17.4336ZM75.1377 21.9432C74.7222 21.9432 74.3653 21.8867 74.067 21.7738C73.7687 21.663 73.529 21.5138 73.3479 21.3263C73.1668 21.1388 73.0411 20.9311 72.9708 20.7031L74.0127 20.4506C74.0596 20.5465 74.1277 20.6413 74.2172 20.7351C74.3067 20.831 74.4271 20.9098 74.5784 20.9716C74.7318 21.0355 74.9246 21.0675 75.1569 21.0675C75.485 21.0675 75.7566 20.9876 75.9718 20.8278C76.187 20.6701 76.2946 20.4102 76.2946 20.0479V19.1179H76.2371C76.1775 19.2372 76.0901 19.3597 75.975 19.4854C75.8621 19.6112 75.7119 19.7166 75.5244 19.8018C75.339 19.8871 75.1057 19.9297 74.8245 19.9297C74.4473 19.9297 74.1054 19.8413 73.7986 19.6644C73.4939 19.4854 73.251 19.2191 73.0699 18.8654C72.8909 18.5096 72.8014 18.0643 72.8014 17.5295C72.8014 16.9904 72.8909 16.5355 73.0699 16.1648C73.251 15.7919 73.4949 15.5096 73.8017 15.3178C74.1086 15.1239 74.4505 15.027 74.8277 15.027C75.1153 15.027 75.3518 15.076 75.5372 15.174C75.7247 15.2699 75.8738 15.386 75.9846 15.5224C76.0954 15.6566 76.1796 15.7834 76.2371 15.9027H76.301V15.0909H77.442V20.0799C77.442 20.4996 77.3419 20.8469 77.1416 21.1218C76.9413 21.3967 76.6675 21.6023 76.3202 21.7386C75.9729 21.875 75.5787 21.9432 75.1377 21.9432ZM75.1473 19.022C75.3923 19.022 75.6011 18.9624 75.7737 18.843C75.9463 18.7237 76.0773 18.5522 76.1668 18.3285C76.2563 18.1048 76.301 17.8363 76.301 17.5231C76.301 17.2141 76.2563 16.9435 76.1668 16.7113C76.0794 16.479 75.9495 16.299 75.7769 16.1712C75.6064 16.0412 75.3966 15.9762 75.1473 15.9762C74.8895 15.9762 74.6743 16.0433 74.5017 16.1776C74.3291 16.3118 74.1991 16.4961 74.1118 16.7305C74.0244 16.9627 73.9807 17.2269 73.9807 17.5231C73.9807 17.8235 74.0244 18.0866 74.1118 18.3125C74.2013 18.5362 74.3323 18.7109 74.5049 18.8366C74.6796 18.9602 74.8937 19.022 75.1473 19.022Z",
      fill: "black",
      fillOpacity: "0.8"
    }), jsx("path", {
      d: "M84.0611 20H83.2301L85.6335 13.4545H86.4517L88.8551 20H88.0241L86.0682 14.4901H86.017L84.0611 20ZM84.3679 17.4432H87.7173V18.1463H84.3679V17.4432ZM91.7989 21.9432C91.4346 21.9432 91.1213 21.8963 90.8593 21.8026C90.5972 21.7109 90.3788 21.5895 90.2041 21.4382C90.0315 21.2891 89.8941 21.1293 89.7918 20.9588L90.3927 20.5369C90.4608 20.6264 90.5471 20.7287 90.6515 20.8438C90.7559 20.9609 90.8987 21.0621 91.0798 21.1474C91.263 21.2347 91.5027 21.2784 91.7989 21.2784C92.1952 21.2784 92.5223 21.1825 92.7801 20.9908C93.0379 20.799 93.1668 20.4986 93.1668 20.0895V19.0923H93.1029C93.0475 19.1818 92.9687 19.2926 92.8664 19.4247C92.7662 19.5547 92.6213 19.6708 92.4317 19.7731C92.2442 19.8732 91.9907 19.9233 91.6711 19.9233C91.2748 19.9233 90.9189 19.8295 90.6036 19.642C90.2904 19.4545 90.0422 19.1818 89.8589 18.8239C89.6778 18.4659 89.5873 18.0312 89.5873 17.5199C89.5873 17.017 89.6757 16.5792 89.8525 16.2063C90.0294 15.8313 90.2755 15.5415 90.5908 15.337C90.9062 15.1303 91.2705 15.027 91.6838 15.027C92.0035 15.027 92.257 15.0803 92.4445 15.1868C92.6341 15.2912 92.779 15.4105 92.8792 15.5447C92.9814 15.6768 93.0603 15.7855 93.1157 15.8707H93.1924V15.0909H93.9211V20.1406C93.9211 20.5625 93.8252 20.9055 93.6334 21.1697C93.4438 21.4361 93.1881 21.631 92.8664 21.7546C92.5468 21.8803 92.191 21.9432 91.7989 21.9432ZM91.7733 19.2457C92.0759 19.2457 92.3316 19.1765 92.5404 19.038C92.7492 18.8995 92.9079 18.7003 93.0166 18.4403C93.1253 18.1804 93.1796 17.8693 93.1796 17.5071C93.1796 17.1534 93.1263 16.8413 93.0198 16.5707C92.9133 16.3001 92.7556 16.0881 92.5468 15.9347C92.338 15.7812 92.0802 15.7045 91.7733 15.7045C91.4537 15.7045 91.1874 15.7855 90.9743 15.9474C90.7634 16.1094 90.6047 16.3267 90.4981 16.5994C90.3937 16.8722 90.3415 17.1747 90.3415 17.5071C90.3415 17.848 90.3948 18.1495 90.5013 18.4116C90.61 18.6715 90.7698 18.8761 90.9807 19.0252C91.1938 19.1722 91.458 19.2457 91.7733 19.2457Z",
      fill: "black",
      fillOpacity: "0.8"
    }), jsx("path", {
      d: "M75.8419 93V88.6364H77.4399C77.7496 88.6364 78.006 88.6875 78.2091 88.7898C78.4122 88.8906 78.5642 89.0277 78.6651 89.201C78.7659 89.3729 78.8163 89.5668 78.8163 89.7827C78.8163 89.9645 78.783 90.1179 78.7162 90.2429C78.6494 90.3665 78.5599 90.4659 78.4477 90.5412C78.3369 90.6151 78.2148 90.669 78.0813 90.7031V90.7457C78.2261 90.7528 78.3675 90.7997 78.5053 90.8864C78.6445 90.9716 78.7595 91.093 78.8504 91.2507C78.9413 91.4084 78.9868 91.6001 78.9868 91.826C78.9868 92.049 78.9342 92.2493 78.8291 92.4268C78.7254 92.603 78.5649 92.7429 78.3476 92.8466C78.1303 92.9489 77.8526 93 77.5145 93H75.8419ZM76.5003 92.4354H77.4506C77.7659 92.4354 77.9918 92.3743 78.1281 92.2521C78.2645 92.13 78.3327 91.9773 78.3327 91.794C78.3327 91.6562 78.2979 91.5298 78.2283 91.4148C78.1587 91.2997 78.0592 91.2081 77.93 91.1399C77.8021 91.0717 77.6501 91.0376 77.474 91.0376H76.5003V92.4354ZM76.5003 90.5241H77.3824C77.5301 90.5241 77.6629 90.4957 77.7808 90.4389C77.9001 90.3821 77.9946 90.3026 78.0642 90.2003C78.1352 90.0966 78.1707 89.9744 78.1707 89.8338C78.1707 89.6534 78.1075 89.5021 77.9811 89.38C77.8547 89.2578 77.6608 89.1967 77.3994 89.1967H76.5003V90.5241ZM81.8197 91.6428V89.7273H82.4589V93H81.8325V92.4332H81.7984C81.7231 92.608 81.6024 92.7536 81.4362 92.87C81.2714 92.9851 81.0662 93.0426 80.8204 93.0426C80.6102 93.0426 80.4241 92.9964 80.2622 92.9041C80.1017 92.8104 79.9752 92.6719 79.8829 92.4886C79.792 92.3054 79.7465 92.0788 79.7465 91.8089V89.7273H80.3836V91.7322C80.3836 91.9553 80.4454 92.1328 80.569 92.2649C80.6926 92.397 80.8531 92.4631 81.0505 92.4631C81.1698 92.4631 81.2885 92.4332 81.4063 92.3736C81.5257 92.3139 81.6244 92.2237 81.7025 92.103C81.7821 91.9822 81.8211 91.8288 81.8197 91.6428ZM84.8726 89.7273V90.2386H83.085V89.7273H84.8726ZM83.5644 88.9432H84.2014V92.0391C84.2014 92.1626 84.2199 92.2557 84.2568 92.3182C84.2938 92.3793 84.3414 92.4212 84.3996 92.4439C84.4593 92.4652 84.5239 92.4759 84.5935 92.4759C84.6446 92.4759 84.6894 92.4723 84.7277 92.4652C84.7661 92.4581 84.7959 92.4524 84.8172 92.4482L84.9323 92.9744C84.8953 92.9886 84.8428 93.0028 84.7746 93.017C84.7064 93.0327 84.6212 93.0412 84.5189 93.0426C84.3513 93.0455 84.195 93.0156 84.0502 92.9531C83.9053 92.8906 83.7881 92.794 83.6986 92.6634C83.6091 92.5327 83.5644 92.3686 83.5644 92.1712V88.9432ZM87.135 89.7273V90.2386H85.3474V89.7273H87.135ZM85.8268 88.9432H86.4639V92.0391C86.4639 92.1626 86.4823 92.2557 86.5193 92.3182C86.5562 92.3793 86.6038 92.4212 86.662 92.4439C86.7217 92.4652 86.7863 92.4759 86.8559 92.4759C86.907 92.4759 86.9518 92.4723 86.9901 92.4652C87.0285 92.4581 87.0583 92.4524 87.0796 92.4482L87.1947 92.9744C87.1578 92.9886 87.1052 93.0028 87.037 93.017C86.9688 93.0327 86.8836 93.0412 86.7813 93.0426C86.6137 93.0455 86.4575 93.0156 86.3126 92.9531C86.1677 92.8906 86.0505 92.794 85.961 92.6634C85.8715 92.5327 85.8268 92.3686 85.8268 92.1712V88.9432ZM89.2131 93.0661C88.9063 93.0661 88.6386 92.9957 88.4099 92.8551C88.1812 92.7145 88.0036 92.5178 87.8772 92.2649C87.7508 92.0121 87.6876 91.7166 87.6876 91.3786C87.6876 91.0391 87.7508 90.7422 87.8772 90.4879C88.0036 90.2337 88.1812 90.0362 88.4099 89.8956C88.6386 89.755 88.9063 89.6847 89.2131 89.6847C89.52 89.6847 89.7877 89.755 90.0164 89.8956C90.2451 90.0362 90.4227 90.2337 90.5491 90.4879C90.6755 90.7422 90.7387 91.0391 90.7387 91.3786C90.7387 91.7166 90.6755 92.0121 90.5491 92.2649C90.4227 92.5178 90.2451 92.7145 90.0164 92.8551C89.7877 92.9957 89.52 93.0661 89.2131 93.0661ZM89.2153 92.5312C89.4141 92.5312 89.5789 92.4787 89.7096 92.3736C89.8403 92.2685 89.9369 92.1286 89.9994 91.9538C90.0633 91.7791 90.0952 91.5866 90.0952 91.3764C90.0952 91.1676 90.0633 90.9759 89.9994 90.8011C89.9369 90.625 89.8403 90.4837 89.7096 90.3771C89.5789 90.2706 89.4141 90.2173 89.2153 90.2173C89.015 90.2173 88.8488 90.2706 88.7167 90.3771C88.586 90.4837 88.4887 90.625 88.4248 90.8011C88.3623 90.9759 88.331 91.1676 88.331 91.3764C88.331 91.5866 88.3623 91.7791 88.4248 91.9538C88.4887 92.1286 88.586 92.2685 88.7167 92.3736C88.8488 92.4787 89.015 92.5312 89.2153 92.5312ZM92.1169 91.0568V93H91.4798V89.7273H92.0913V90.2599H92.1318C92.2071 90.0866 92.325 89.9474 92.4855 89.8423C92.6474 89.7372 92.8513 89.6847 93.097 89.6847C93.32 89.6847 93.5153 89.7315 93.683 89.8253C93.8506 89.9176 93.9805 90.0554 94.0729 90.2386C94.1652 90.4219 94.2114 90.6484 94.2114 90.9183V93H93.5743V90.995C93.5743 90.7578 93.5125 90.5724 93.3889 90.4389C93.2653 90.304 93.0956 90.2365 92.8797 90.2365C92.732 90.2365 92.6006 90.2685 92.4855 90.3324C92.3719 90.3963 92.2817 90.4901 92.2149 90.6136C92.1496 90.7358 92.1169 90.8835 92.1169 91.0568Z",
      fill: "black",
      fillOpacity: "0.8"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M73 83C71.8954 83 71 83.8954 71 85V97C71 98.1046 71.8954 99 73 99H97C98.1046 99 99 98.1046 99 97V85C99 83.8954 98.1046 83 97 83H73ZM70 85C70 83.3431 71.3431 82 73 82H97C98.6569 82 100 83.3431 100 85V97C100 98.6569 98.6569 100 97 100H73C71.3431 100 70 98.6569 70 97V85Z",
      fill: "black",
      fillOpacity: "0.8"
    }), jsx("path", {
      d: "M58 82H34C32.3431 82 31 83.3431 31 85V97C31 98.6569 32.3431 100 34 100H58C59.6569 100 61 98.6569 61 97V85C61 83.3431 59.6569 82 58 82Z",
      fill: "#56CCF2",
      fillOpacity: "0.8"
    }), jsx("path", {
      d: "M36.7669 93V88.6364H38.3649C38.6746 88.6364 38.931 88.6875 39.1341 88.7898C39.3372 88.8906 39.4892 89.0277 39.5901 89.201C39.6909 89.3729 39.7413 89.5668 39.7413 89.7827C39.7413 89.9645 39.708 90.1179 39.6412 90.2429C39.5744 90.3665 39.4849 90.4659 39.3727 90.5412C39.2619 90.6151 39.1398 90.669 39.0063 90.7031V90.7457C39.1511 90.7528 39.2925 90.7997 39.4303 90.8864C39.5695 90.9716 39.6845 91.093 39.7754 91.2507C39.8663 91.4084 39.9118 91.6001 39.9118 91.826C39.9118 92.049 39.8592 92.2493 39.7541 92.4268C39.6504 92.603 39.4899 92.7429 39.2726 92.8466C39.0553 92.9489 38.7776 93 38.4395 93H36.7669ZM37.4253 92.4354H38.3756C38.6909 92.4354 38.9168 92.3743 39.0531 92.2521C39.1895 92.13 39.2577 91.9773 39.2577 91.794C39.2577 91.6562 39.2229 91.5298 39.1533 91.4148C39.0837 91.2997 38.9842 91.2081 38.855 91.1399C38.7271 91.0717 38.5751 91.0376 38.399 91.0376H37.4253V92.4354ZM37.4253 90.5241H38.3074C38.4551 90.5241 38.5879 90.4957 38.7058 90.4389C38.8251 90.3821 38.9196 90.3026 38.9892 90.2003C39.0602 90.0966 39.0957 89.9744 39.0957 89.8338C39.0957 89.6534 39.0325 89.5021 38.9061 89.38C38.7797 89.2578 38.5858 89.1967 38.3244 89.1967H37.4253V90.5241ZM42.7747 91.6428V89.7273H43.4139V93H42.7875V92.4332H42.7534C42.6781 92.608 42.5574 92.7536 42.3912 92.87C42.2264 92.9851 42.0212 93.0426 41.7754 93.0426C41.5652 93.0426 41.3791 92.9964 41.2172 92.9041C41.0567 92.8104 40.9302 92.6719 40.8379 92.4886C40.747 92.3054 40.7015 92.0788 40.7015 91.8089V89.7273H41.3386V91.7322C41.3386 91.9553 41.4004 92.1328 41.524 92.2649C41.6476 92.397 41.8081 92.4631 42.0055 92.4631C42.1248 92.4631 42.2435 92.4332 42.3613 92.3736C42.4807 92.3139 42.5794 92.2237 42.6575 92.103C42.7371 91.9822 42.7761 91.8288 42.7747 91.6428ZM45.8576 89.7273V90.2386H44.07V89.7273H45.8576ZM44.5494 88.9432H45.1864V92.0391C45.1864 92.1626 45.2049 92.2557 45.2418 92.3182C45.2788 92.3793 45.3264 92.4212 45.3846 92.4439C45.4443 92.4652 45.5089 92.4759 45.5785 92.4759C45.6296 92.4759 45.6744 92.4723 45.7127 92.4652C45.7511 92.4581 45.7809 92.4524 45.8022 92.4482L45.9173 92.9744C45.8803 92.9886 45.8278 93.0028 45.7596 93.017C45.6914 93.0327 45.6062 93.0412 45.5039 93.0426C45.3363 93.0455 45.18 93.0156 45.0352 92.9531C44.8903 92.8906 44.7731 92.794 44.6836 92.6634C44.5941 92.5327 44.5494 92.3686 44.5494 92.1712V88.9432ZM48.15 89.7273V90.2386H46.3624V89.7273H48.15ZM46.8418 88.9432H47.4789V92.0391C47.4789 92.1626 47.4973 92.2557 47.5343 92.3182C47.5712 92.3793 47.6188 92.4212 47.677 92.4439C47.7367 92.4652 47.8013 92.4759 47.8709 92.4759C47.922 92.4759 47.9668 92.4723 48.0051 92.4652C48.0435 92.4581 48.0733 92.4524 48.0946 92.4482L48.2097 92.9744C48.1728 92.9886 48.1202 93.0028 48.052 93.017C47.9838 93.0327 47.8986 93.0412 47.7963 93.0426C47.6287 93.0455 47.4725 93.0156 47.3276 92.9531C47.1827 92.8906 47.0655 92.794 46.976 92.6634C46.8865 92.5327 46.8418 92.3686 46.8418 92.1712V88.9432ZM50.2581 93.0661C49.9513 93.0661 49.6836 92.9957 49.4549 92.8551C49.2262 92.7145 49.0486 92.5178 48.9222 92.2649C48.7958 92.0121 48.7326 91.7166 48.7326 91.3786C48.7326 91.0391 48.7958 90.7422 48.9222 90.4879C49.0486 90.2337 49.2262 90.0362 49.4549 89.8956C49.6836 89.755 49.9513 89.6847 50.2581 89.6847C50.565 89.6847 50.8327 89.755 51.0614 89.8956C51.2901 90.0362 51.4677 90.2337 51.5941 90.4879C51.7205 90.7422 51.7837 91.0391 51.7837 91.3786C51.7837 91.7166 51.7205 92.0121 51.5941 92.2649C51.4677 92.5178 51.2901 92.7145 51.0614 92.8551C50.8327 92.9957 50.565 93.0661 50.2581 93.0661ZM50.2603 92.5312C50.4591 92.5312 50.6239 92.4787 50.7546 92.3736C50.8853 92.2685 50.9819 92.1286 51.0444 91.9538C51.1083 91.7791 51.1402 91.5866 51.1402 91.3764C51.1402 91.1676 51.1083 90.9759 51.0444 90.8011C50.9819 90.625 50.8853 90.4837 50.7546 90.3771C50.6239 90.2706 50.4591 90.2173 50.2603 90.2173C50.06 90.2173 49.8938 90.2706 49.7617 90.3771C49.631 90.4837 49.5337 90.625 49.4698 90.8011C49.4073 90.9759 49.376 91.1676 49.376 91.3764C49.376 91.5866 49.4073 91.7791 49.4698 91.9538C49.5337 92.1286 49.631 92.2685 49.7617 92.3736C49.8938 92.4787 50.06 92.5312 50.2603 92.5312ZM53.1919 91.0568V93H52.5548V89.7273H53.1663V90.2599H53.2068C53.2821 90.0866 53.4 89.9474 53.5605 89.8423C53.7224 89.7372 53.9263 89.6847 54.172 89.6847C54.395 89.6847 54.5903 89.7315 54.758 89.8253C54.9256 89.9176 55.0555 90.0554 55.1479 90.2386C55.2402 90.4219 55.2864 90.6484 55.2864 90.9183V93H54.6493V90.995C54.6493 90.7578 54.5875 90.5724 54.4639 90.4389C54.3403 90.304 54.1706 90.2365 53.9547 90.2365C53.807 90.2365 53.6756 90.2685 53.5605 90.3324C53.4469 90.3963 53.3567 90.4901 53.2899 90.6136C53.2246 90.7358 53.1919 90.8835 53.1919 91.0568Z",
      fill: "white"
    }), jsx("mask", {
      id: "mask0_1_30",
      style: {
        maskType: "luminance"
      },
      maskUnits: "userSpaceOnUse",
      x: "20",
      y: "121",
      width: "107",
      height: "22",
      children: jsx("path", {
        d: "M126.001 121H20.5566V143H126.001V121Z",
        fill: "white"
      })
    }), jsxs("g", {
      mask: "url(#mask0_1_30)",
      className: "oss_sales_upsell_modal--graphicLine--6Z-mU",
      children: [jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M73 143V121H74V143H73Z"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M40.5566 121.477L20.5566 143L19.8759 142.267L39.8759 120.745L40.5566 121.477Z"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M126 142.523L106 121L106.681 120.267L126.681 141.79L126 142.523Z"
      })]
    })]
  });
}
let si = [{
  key: 1,
  elem: renderI18nText("oss_sales_upsell_overlay.feature1")
}, {
  key: 2,
  elem: renderI18nText("oss_sales_upsell_overlay.feature2")
}, {
  key: 3,
  elem: renderI18nText("oss_sales_upsell_overlay.feature3")
}];
let sr = registerModal(function ({
  onDismiss: e
}) {
  let t = useAtomWithSubscription(openFileAtom);
  let i = useDispatch();
  return jsxs(yX, {
    autoFocusCta: !1,
    cancelText: renderI18nText("oss_sales_upsell_overlay.secondary_cta"),
    className: "oss_sales_upsell_modal--modal--fdI6U",
    confirmText: renderI18nText("oss_sales_upsell_overlay.primary_cta"),
    confirmationTitle: renderI18nText("oss_sales_upsell_overlay.title"),
    hideOnCancel: !1,
    hideOnConfirm: !1,
    isLoading: !t?.teamId,
    onCancel: () => {
      i(showModalHandler({
        type: lk,
        data: {
          source: _$$B3.LIBRARY_DUPLICATE_OSS_SALES_UPSELL,
          overridePlaceholderText: getI18nString("oss_sales_upsell_overlay.contact_sales_form.text_placeholder")
        }
      }));
    },
    onCloseButtonClick: e,
    onConfirm: () => {
      t?.teamId && i(Bq({
        openInNewTab: !0,
        upsellSource: UpsellModalType.OSS_SALES_UPSELL_MODAL
      }));
    },
    overrideOnHide: e,
    titleClass: "oss_sales_upsell_modal--title--wpaS5",
    children: [jsx("div", {
      className: _$$s.lh24.font13.pt24.pr0.pb32.pl0.$,
      children: jsxs(AutoLayout, {
        spacing: "40px",
        children: [jsxs(AutoLayout, {
          direction: "vertical",
          spacing: "12px",
          children: [jsx("p", {
            children: renderI18nText("oss_sales_upsell_overlay.body1")
          }), jsxs(AutoLayout, {
            direction: "vertical",
            spacing: 8,
            children: [jsx("p", {
              className: _$$s.fontSemiBold.$,
              children: renderI18nText("oss_sales_upsell_overlay.body2")
            }), jsx(AutoLayout, {
              direction: "vertical",
              spacing: 8,
              children: si.map(e => jsxs(AutoLayout, {
                spacing: 8,
                horizontalAlignItems: "start",
                children: [jsx("p", {
                  children: "\u2713"
                }), jsx("p", {
                  children: e.elem
                })]
              }, e.key))
            })]
          }), jsx("p", {
            className: _$$s.pt4.$,
            children: renderI18nText("oss_sales_upsell_overlay.body3")
          })]
        }), jsx("div", {
          className: _$$s.mr16.$,
          children: jsx(st, {})
        })]
      })
    }), jsx("div", {
      className: _$$s.bt1.colorBorder.bSolid.$
    })]
  });
}, "OssSalesUpsellModal");
function sn() {
  let e = useAtomWithSubscription(openFileTeamIdAtom);
  let t = useAtomWithSubscription(openFileKeyAtom);
  return e && t ? jsx(sa, {
    teamId: e,
    fileKey: t
  }) : null;
}
function sa({
  teamId: e,
  fileKey: t
}) {
  let i = useDispatch();
  let a = useAtomWithSubscription(M$);
  let o = useSubscription(TeamCanAdmin, {
    id: e
  });
  let l = _$$e({
    overlay: jRE,
    priority: _$$N.DEFAULT_MODAL
  }, [a, o]);
  let d = getInitialOptions().user_data;
  let c = d?.email;
  let u = HS(c);
  _$$h2(() => {
    l.show({
      canShow: (e, i) => !!(u && _$$nN(t) && !e && i.team?.hasPermission)
    });
  });
  useEffect(() => {
    l.isShowing && wj();
  }, [u, l.isShowing]);
  return jsx(_$$h, {
    isShowing: l.isShowing,
    modalType: q3.FEATURE_UPDATE,
    element: function (e) {
      _$$h2(() => {
        i(showModalHandler({
          type: sr,
          data: {
            onDismiss: e.dismissModal
          }
        }));
      });
      return jsx("div", {});
    },
    trackingContextName: "oss_sales_upsell_overlay",
    onClickPrimaryCta: lQ,
    onClose: l.complete,
    onManualDismiss: l.complete,
    testId: "oss_sales_upsell_overlay_test_id"
  });
}
let sm = "seen_figjam_section_preset_picker_callout";
let sf = Fu(sm);
let sg = e => useSelector(t => {
  if (!e) return !1;
  let i = Object.keys(t.mirror.sceneGraphSelection);
  return 1 === i.length && i[0] === e;
});
function s_({
  sectionNodeId: e,
  isShowing: t,
  complete: i
}) {
  let n = _X({
    subscribeToUpdates_expensive: !0
  });
  let a = getSingletonSceneGraph().get(e);
  if (!a) return null;
  let s = a.sectionPresetPickerCalloutPosition;
  if (isNaN(s.x) || isNaN(s.y)) return null;
  let o = Z0(n, s, !0);
  let l = parseFloat(_1);
  let d = {
    top: o.y + n.y + l + 2,
    left: o.x + n.x - 150,
    pointerOffset: 150 - l,
    pointerPosition: F_.TOP
  };
  return jsx(_$$rq, {
    clickOutsideToHide: !0,
    description: renderI18nText("whiteboard.section_presets_onboarding.picker_callout.description"),
    fixedPosition: !0,
    isShowing: t,
    location: d,
    onClose: i,
    primaryCta: {
      label: renderI18nText("rcs.got_it"),
      type: "button",
      onClick: i,
      ctaTrackingDescriptor: _$$c.GOT_IT
    },
    title: renderI18nText("whiteboard.section_presets_onboarding.picker_callout.title"),
    trackingContextName: "section_preset_picker_callout",
    userFlagOnShow: sm,
    width: 300
  });
}
function sx() {
  let e = useFullscreenReady();
  let t = useAtomWithSubscription(_$$w6);
  let i = useAtomWithSubscription(m5);
  let a = useAtomWithSubscription(sf);
  let o = useRef({
    numShown: 0,
    hasLoggedToSentry: !1
  });
  let [l, d] = useState(null);
  let c = sg(l);
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: Byv,
    priority: _$$N.DEFAULT_MODAL
  }, [i, a]);
  return (useEffect(() => {
    t && l && c && e && show({
      canShow: (e, t) => !!e && !t
    });
  }, [show, e, t, l, c]), useEffect(() => {
    if ("loaded" === a.status && !a.data && "loaded" === i.status && i.data) return _$$H(function (e) {
      d(e);
    });
  }, [a, i]), useEffect(() => {
    isShowing && o.current.numShown++;
    o.current.numShown > 1 && !o.current.hasLoggedToSentry && (o.current.hasLoggedToSentry = !0, logError("SectionPresetPickerCallout", "Callout shown more than once, this should not happen. Please investigate.", void 0, {
      reportAsSentryError: !0
    }));
  }, [isShowing]), isShowing && l) ? jsx(s_, {
    sectionNodeId: l,
    isShowing,
    complete
  }) : null;
}
let sy = buildUploadUrl("90c10991400b728428a200de3b347bba3f6d1d1e");
function sb({
  isShowing: e,
  onPrimaryCtaClick: t,
  onClose: i
}) {
  return jsx(_$$rq, {
    testId: "share-to-google-classroom-onboarding",
    isShowing: e,
    trackingContextName: "Share to Google Classroom Onboarding",
    targetKey: "share",
    title: renderI18nText("whiteboard.google_classroom.onboarding.header"),
    description: renderI18nText("whiteboard.google_classroom.onboarding.body"),
    media: jsx(_$$y, {
      src: sy,
      alt: getI18nString("whiteboard.google_classroom.onboarding.image_alt"),
      aspectRatio: 300 / 169
    }),
    primaryCta: {
      label: renderI18nText("whiteboard.google_classroom.onboarding.show_me"),
      type: "button",
      onClick: t,
      ctaTrackingDescriptor: _$$c.SHOW_ME
    },
    onClose: i
  });
}
function sC() {
  let e = useDispatch();
  let t = ra({});
  let i = useAtomWithSubscription(rc);
  let a = useAtomWithSubscription(rp);
  let o = useAtomWithSubscription(rh);
  let l = useAtomWithSubscription(rm);
  let d = useAtomWithSubscription(Ij);
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: Y2_,
    priority: _$$N.DEFAULT_MODAL
  }, [a, i, o, l, t]);
  useEffect(() => {
    show({
      onShow: () => {
        e(_$$b({
          [rd]: !0
        }));
      },
      canShow: (e, t, i, r, n) => !e && !t && !i && r && n
    });
  }, [t, e, show]);
  useEffect(() => {
    a.data && complete();
  }, [a, complete]);
  let {
    currentStep,
    next
  } = _$$A4({
    numSteps: 2,
    onComplete: complete
  });
  let b = function ({
    isShowing: e,
    next: t,
    complete: i
  }) {
    let n = useDispatch();
    let a = selectCurrentFile();
    return [jsx(sb, {
      onPrimaryCtaClick: () => {
        if (!a) {
          i();
          return;
        }
        n(showModalHandler({
          type: g_,
          data: {
            fileKey: a.key,
            source: _$$nk.shareToGoogleClassroomOnboarding
          }
        }));
        t();
      },
      onClose: i,
      isShowing: e
    }, "share-to-google-classroom-existing-user-callout"), jsx(rl, {
      isShowing: e,
      onClose: i
    }, "share-to-google-classroom-share-option-pointer")];
  }({
    isShowing,
    next,
    complete
  });
  useEffect(() => {
    d && isShowing && 0 === currentStep && next();
  }, [currentStep, isShowing, d, next]);
  return jsx(_$$U, {
    currentStep,
    isShowing,
    children: b
  });
}
let sN = "has_onboarded_ai";
let sA = atom(!1);
let sL = _$$N.HIGH_PRIORITY_MODAL + 3;
function sR(e, t) {
  _$$h2(() => {
    e(_$$b({
      [t]: !0
    }));
  });
}
let sD = jsx(Jm, {
  src: buildUploadUrl("b89b812ff4935b239f91bd78df370ad6dd947e0b"),
  aspectRatio: 240 / 135,
  width: 240
});
function sM({
  onClose: e,
  isShowing: t,
  onTargetLost: i
}) {
  let n = useDispatch();
  sR(n, jx);
  sR(n, sN);
  return jsx(_$$rq, {
    arrowPosition: F_.BOTTOM,
    description: renderI18nText("ui3_and_ai_tour.ai_callout.description"),
    highlightBlue: !0,
    isShowing: t,
    media: sD,
    onClose: e,
    onTargetLost: i,
    primaryCta: {
      type: "button",
      label: renderI18nText("ui3_and_ai_tour.ai_callout.show_me"),
      onClick: () => {
        $I({
          trackingData: {
            source: "onboarding_ai_callout_component"
          }
        });
        e();
      },
      ctaTrackingDescriptor: _$$c.SHOW_ME
    },
    secondaryCta: {
      type: "link",
      label: renderI18nText("ui3_and_ai_tour.ai_callout.playground_link"),
      href: "https://www.figma.com/community/file/1375505114072192161",
      ctaTrackingDescriptor: _$$c.AI_PLAYGROUND
    },
    targetKey: _$$Ij,
    testId: T4,
    title: renderI18nText("ui3_and_ai_tour.ai_callout.title"),
    trackingContextName: "UI3/AI Onboarding > AI"
  });
}
function sF({
  onClose: e,
  isShowing: t,
  onTargetLost: i
}) {
  sR(useDispatch(), _$$af);
  return jsx(_$$rq, {
    arrowPosition: F_.BOTTOM,
    description: getFeatureFlags().hub_file_fragments ? renderI18nText("ui3_and_ai_callouts.community_fragment_search.description") : renderI18nText("ui3_and_ai_callouts.fragment_search.description"),
    highlightBlue: !0,
    isShowing: t,
    onClose: () => e(),
    onTargetLost: i,
    primaryCta: {
      type: "button",
      label: renderI18nText("ui3_and_ai_callouts.fragment_search.cta"),
      onClick: () => {
        Bd();
        e();
      },
      ctaTrackingDescriptor: _$$c.TRY_IT_OUT
    },
    targetKey: _$$Ij,
    testId: "fragmentSearchCallout",
    title: renderI18nText("ui3_and_ai_callouts.fragment_search.title"),
    trackingContextName: "Fragment Search Callout"
  });
}
function sB() {
  let e = function () {
    let e = _$$f($9);
    let t = _$$f(_$$af);
    let i = p8("showUi");
    let r = useMemo(() => e, [i]);
    let a = useMemo(() => t, [i]);
    let s = m0();
    let o = Em();
    let l = PE();
    let d = function () {
      let e = LC();
      return C7() && e;
    }();
    let c = [];
    !s && o && l && !r && c.push(sM);
    0 === c.length && !s && o && d && !a && c.push(sF);
    return c;
  }();
  let t = _$$r2(sN);
  let i = useAtomWithSubscription(t);
  let o = _$$r2("did_sign_up_as_ui3_user");
  let l = useAtomWithSubscription(o);
  let d = _$$r2($9);
  let c = useAtomWithSubscription(d);
  let u = _$$r2(_$$af);
  let p = useAtomWithSubscription(u);
  let h = Em();
  let m = l7();
  let g = hA();
  let _ = _$$e3();
  let x = ZO();
  let b = !!getFeatureFlags().ui3_and_ai_welcome_modal;
  let C = _$$aV();
  let v = useAtomWithSubscription(Bu);
  let E = useAtomWithSubscription(Fy);
  let {
    uniqueId,
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: KTt,
    priority: sL
  }, [i, c, l, p]);
  let [I, N] = useAtomValueAndSetter(sA);
  let A = useCallback(() => {
    e.length > 0 && N(!0);
    complete();
  }, [N, complete, e.length]);
  let {
    currentStep,
    next
  } = _$$A4({
    numSteps: 0 === e.length ? 1 : e.length,
    onComplete: () => A
  });
  _$$E2(uniqueId, [wX("dev"), wX("design")], () => {
    R();
  });
  let R = useCallback(() => {
    b && h && !C && 0 !== e.length && E?.data && !I && show();
  }, [b, h, C, e.length, E, show, I]);
  useEffect(() => {
    C || v || R();
  }, [C, R, v]);
  let D = useCallback(() => {
    A();
  }, [A]);
  useEffect(() => {
    isShowing && v && D();
  }, [isShowing, v, D]);
  let M = useMemo(() => {
    let t = {
      type: "button",
      label: renderI18nText("general.next"),
      onClick: next,
      ctaTrackingDescriptor: _$$c.NEXT
    };
    let i = {
      type: "button",
      label: renderI18nText("general.done"),
      onClick: A,
      ctaTrackingDescriptor: _$$c.DONE
    };
    return e.map((r, a) => createElement(r, {
      primaryCta: a === e.length - 1 ? i : t,
      onClose: A,
      stepNum: a + 1,
      totalNumSteps: e.length,
      isShowing,
      onTargetLost: a === e.length - 1 ? A : next
    }));
  }, [next, A, e, isShowing]);
  return (useEffect(() => {
    (!M || 0 === e.length || m || g || _ || x) && A();
  }, [M, e.length, m, g, _, x, A]), isShowing) ? jsx(_$$U, {
    currentStep,
    isShowing,
    children: M
  }) : null;
}
let sG = "UI3 Reactivation Overlay";
function sK() {
  let e = _$$aV();
  let t = useAtomWithSubscription(jH);
  let {
    isShowing,
    complete
  } = _$$e({
    overlay: HU3,
    priority: _$$N.SECONDARY_MODAL
  });
  let {
    currentStep,
    next
  } = _$$A4({
    numSteps: 2,
    onComplete: complete
  });
  useEffect(() => {
    isShowing && 0 === currentStep && !e && next();
  }, [isShowing, currentStep, e, next]);
  useEffect(() => {
    isShowing && t && complete();
  }, [isShowing, t, complete]);
  return jsxs(_$$U, {
    currentStep,
    isShowing,
    children: [jsx(_$$rq, {
      arrowPosition: F_.RIGHT_BODY,
      description: renderI18nText("ui3_reactivation_overlay.ui2_description"),
      disableHighlight: !0,
      isShowing,
      media: jsx(_$$w, {
        src: buildUploadUrl("c24e9a3e1bb4e0babe4ebc86f9d58b79e44a1992"),
        aspectRatio: 16 / 9
      }),
      onClose: e => {
        "close_button_clicked" !== e && Cu({
          eventName: "Overlay Closed",
          trackingContext: `Onboarding Sequence > ${sG} Step 1`,
          overlayStep: 1,
          closeReason: e
        });
        complete();
      },
      primaryCta: {
        type: "button",
        label: renderI18nText("ui3_reactivation_overlay.ui2_primary_cta"),
        onClick: next,
        ctaTrackingDescriptor: _$$c.SWITCH_TO_UI3
      },
      secondaryCta: {
        type: "link",
        label: renderI18nText("ui3_reactivation_overlay.secondary_cta"),
        href: "https://www.figma.com/blog/making-the-move-to-ui3-a-guide-to-figmas-next-chapter/",
        ctaTrackingDescriptor: _$$c.LEARN_MORE
      },
      targetKey: J_,
      title: renderI18nText("ui3_reactivation_overlay.ui2_title"),
      trackingContextName: `${sG} Step 1`
    }), jsx(_$$rq, {
      arrowPosition: F_.RIGHT_BODY,
      description: renderI18nText("ui3_reactivation_overlay.ui3_description"),
      disableHighlight: !0,
      isShowing,
      media: jsx(_$$y, {
        src: buildUploadUrl("94d7810cc12859da29e6f4e32a5ffe858ce5445e"),
        alt: getI18nString("ui3_reactivation_overlay.ui3_media_alt"),
        aspectRatio: 16 / 9
      }),
      onClose: e => {
        "close_button_clicked" !== e && Cu({
          eventName: "Overlay Closed",
          trackingContext: `Onboarding Sequence > ${sG} Step 2`,
          overlayStep: 2,
          closeReason: e
        });
        complete();
      },
      primaryCta: {
        type: "button",
        label: renderI18nText("ui3_reactivation_overlay.ui3_primary_cta"),
        onClick: next,
        ctaTrackingDescriptor: _$$c.GOT_IT
      },
      secondaryCta: {
        type: "link",
        label: renderI18nText("ui3_reactivation_overlay.secondary_cta"),
        href: "https://www.figma.com/blog/making-the-move-to-ui3-a-guide-to-figmas-next-chapter/",
        ctaTrackingDescriptor: _$$c.LEARN_MORE
      },
      targetKey: J_,
      title: renderI18nText("ui3_reactivation_overlay.ui3_title"),
      trackingContextName: `${sG} Step 2`
    })]
  });
}
function sJ({
  trackingContextName: e,
  getTitle: t,
  getBody: i,
  width: n = 268
}) {
  return {
    modalType: q3.POINTER,
    trackingContextName: e,
    width: n,
    onboardingKey: yl,
    shouldCenterArrow: _$$EL.FALLBACK,
    element: () => jsxs(Fragment, {
      children: [jsx(_$$x2, {
        target: yl
      }), jsx("div", {
        className: Hj,
        children: t()
      }), i()]
    }),
    userFlag: "seen_figjam_widget_nudge_flag"
  };
}
function sq(e) {
  let [t, i] = useState(!0);
  let a = useDispatch();
  let o = useAtomWithSubscription(openFileAtom);
  useEffect(() => {
    setTimeout(() => i(!1), 1e3);
  });
  let l = () => {
    a(_$$b({
      explicitly_dismissed_create_component_pointer: !0
    }));
    e.dismissModal();
  };
  return t ? null : jsxs(fu, {
    name: "library upsell create component pointer",
    properties: {
      fileKey: o?.key,
      teamId: o?.teamId
    },
    children: [jsx(_$$x2, {
      target: "create-symbol"
    }), jsxs(NJ, {
      dismissModal: l,
      width: 244,
      targetKey: "create-symbol",
      shouldNotWrapInParagraphTag: !0,
      shouldCenterArrow: _$$EL.FALLBACK,
      children: [jsx("p", {
        children: renderI18nText("rcs.upsell_libraries.click_here_to_turn_into_component")
      }), jsx(Kz, {
        multiple: 2
      }), jsx("div", {
        className: kP,
        children: jsx($z, {
          onClick: l,
          variant: "primary",
          children: renderI18nText("rcs.upsell_libraries.visual_bell.got_it")
        })
      })]
    })]
  });
}
q3.SELF_CONTAINED;
sJ({
  trackingContextName: "FigJam Widget Nudge Generic",
  getTitle: () => getI18nString("rcs.figjam_widget_nudge.generic_title"),
  getBody: () => getI18nString("rcs.figjam_widget_nudge.generic_body")
});
sJ({
  trackingContextName: "FigJam Widget Nudge Project Management",
  getTitle: () => getI18nString("rcs.figjam_widget_nudge.pm_title"),
  getBody: () => getI18nString("rcs.figjam_widget_nudge.pm_body"),
  width: 240
});
sJ({
  trackingContextName: "FigJam Widget Nudge Alignment",
  getTitle: () => getI18nString("rcs.figjam_widget_nudge.align_title"),
  getBody: () => getI18nString("rcs.figjam_widget_nudge.align_body")
});
sJ({
  trackingContextName: "FigJam Widget Nudge Fun",
  getTitle: () => getI18nString("rcs.figjam_widget_nudge.fun_title"),
  getBody: () => getI18nString("rcs.figjam_widget_nudge.fun_body")
});
var s$ = (e => (e.AwaitIsShowing = "AwaitIsShowing", e.AwaitPastedElementsSelected = "AwaitPastedElementsSelected", e.AwaitOtherElementsSelected = "AwaitOtherElementsSelected", e.Completed = "Completed", e))(s$ || {});
var s0 = (e => (e.OnShow = "OnShowUpsellLibariesConsecutivePaste", e.SelectionChanged = "Selection Changed", e))(s0 || {});
_$$R2;
let s1 = Op({
  initial: "AwaitIsShowing",
  states: [{
    id: "AwaitIsShowing",
    transitions: [_$$nr("OnShowUpsellLibariesConsecutivePaste", "AwaitPastedElementsSelected")]
  }, {
    id: "AwaitPastedElementsSelected",
    transitions: [_$$nr("Selection Changed", "AwaitOtherElementsSelected", {
      condition: ({
        event: e
      }) => !!e.properties.didSelectedNodeIdsChange
    })]
  }, {
    id: "AwaitOtherElementsSelected",
    transitions: [_$$nr("Selection Changed", "Completed", {
      condition: ({
        event: e
      }) => !!e.properties.didSelectedNodeIdsChange
    })]
  }, {
    id: "Completed",
    terminal: !0
  }]
});
let s2 = _$$rn("paste_deselected_machine", s1);
let s3 = _$$r2("explicitly_dismissed_create_component_pointer");
let s5 = _$$tH("first_component_created_date");
function s4() {
  let e = useDispatch();
  let t = useAtomWithSubscription(_$$t2);
  let i = useAtomWithSubscription(NZ);
  let n = useAtomWithSubscription(pQ);
  let a = jO();
  let o = useAtomWithSubscription(s5);
  let l = useAtomWithSubscription(s3);
  let d = _$$zl(s2);
  let c = _$$e({
    overlay: g4U,
    priority: _$$N.SECONDARY_MODAL
  }, [t, n, l]);
  _$$E2(c.uniqueId, zb, () => {
    null === o && c.show({
      canShow: (e, t, r) => e && (t || i) && a && !r,
      onShow: () => {
        handleAtomEvent({
          id: s0.OnShow
        });
      }
    });
  });
  _$$E2(c.uniqueId, "action_create_symbol", () => {
    c.isShowing && (e(_$$b({
      explicitly_dismissed_create_component_pointer: !0
    })), c.complete());
  });
  ST(d, ({
    to: e
  }) => {
    e === s$.Completed && (c.complete(), d.reset());
  });
  return jsx(s6, {
    isShowing: c.isShowing,
    onAbort: c.complete,
    children: jsx(_$$h, {
      isShowing: c.isShowing,
      modalType: q3.SELF_CONTAINED,
      trackingContextName: "Consecutive Paste Create Component Pointer",
      element: sq,
      onClickPrimaryCta: c.complete,
      onClose: c.complete,
      onManualDismiss: c.complete,
      testId: "upsell_libraries_consecutive_paste_overlay"
    })
  });
}
function s6(e) {
  let [t, i] = useState(!1);
  let r = getInitialOptions().user_data?.id;
  let {
    isShowing,
    onAbort
  } = e;
  useEffect(() => {
    !t && isShowing && (Hz(r) ? i(!0) : onAbort());
  }, [i, t, isShowing, onAbort, r]);
  return t ? e.children : null;
}
let oe = "seen_workflow_interop_diagram_onboarding";
let ot = _$$r2(oe);
let oi = "FigJam Diagram Onboarding (Workflow Interop Experiment)";
let or = {
  connectors: `${oi} - Connectors`,
  shapes: `${oi} - Shapes`,
  templates: `${oi} - Templates`
};
let on = buildUploadUrl("2655e9f0e4247dff3d5a46cf59f788473bffe0c6");
let oa = buildUploadUrl("0c9201d8164c2390cdcf3fb8d316b6bacdddb438");
let os = buildUploadUrl("b8b42ba263794abd20364c3da0f3f4993fd4ed86");
function oo() {
  !function () {
    let e = p8("pagesList");
    useMemo(() => {
      let t = QL("preservePageIndex");
      if (t && e.length > 0) {
        EM("preservePageIndex");
        let i = parseInt(t);
        if (isNaN(i) || i < 0 || i >= e.length) return;
        e.forEach((e, t) => {
          t !== i && fullscreenValue.triggerAction("page-delete", {
            args: {
              nodeId: e.nodeId,
              skipVisualBell: !0
            }
          });
        });
      }
    }, [e]);
  }();
  (function () {
    let {
      insertTemplate
    } = Fz();
    let t = useDispatch();
    _$$h2(() => {
      let i = QL("templateId");
      null != i && (EM("templateId"), t(_$$ts({
        hubFileId: i,
        callback: t => {
          insertTemplate({
            template: {
              template: t,
              type: _$$n.HubFile
            },
            userTriggered: !1,
            templateInsertionDirection: CustomPosition.ABOVE,
            triggeredFrom: "workflow-interop"
          });
        }
      })));
    });
  })();
  let e = useAtomWithSubscription(ot);
  let t = _$$e({
    overlay: uPw,
    priority: _$$N.OVERRIDING_MODAL
  }, [e]);
  let i = function (e) {
    let t = useDispatch();
    return useMemo(() => [{
      title: renderI18nText("rcs.figjam_diagram_onboarding.connectors_title"),
      trackingContextName: or.connectors,
      arrowPosition: F_.BOTTOM,
      media: jsx(_$$y, {
        src: on,
        aspectRatio: 900 / 508,
        alt: getI18nString("rcs.figjam_diagram_onboarding.connectors_title")
      }),
      description: renderI18nText("rcs.figjam_diagram_onboarding.connectors"),
      targetKey: BC,
      onClose: lQ
    }, {
      title: renderI18nText("rcs.figjam_diagram_onboarding.shapes_title"),
      trackingContextName: or.shapes,
      arrowPosition: F_.BOTTOM,
      media: jsx(_$$y, {
        aspectRatio: 900 / 507,
        src: oa,
        alt: getI18nString("rcs.figjam_diagram_onboarding.shapes_title")
      }),
      description: renderI18nText("rcs.figjam_diagram_onboarding.shapes"),
      targetKey: BC,
      onClose: lQ
    }, {
      title: renderI18nText("rcs.figjam_diagram_onboarding.templates_title"),
      trackingContextName: or.templates,
      arrowPosition: F_.BOTTOM,
      media: jsx(_$$y, {
        aspectRatio: 900 / 505,
        src: os,
        alt: getI18nString("rcs.figjam_diagram_onboarding.templates_title")
      }),
      description: renderI18nText("rcs.figjam_diagram_onboarding.templates"),
      targetKey: yl,
      secondaryCta: {
        type: "button",
        label: renderI18nText("rcs.figjam_diagram_onboarding.see_templates"),
        onClick: () => {
          t(En({
            initialX: 0,
            initialY: 0,
            initialTab: _$$p.TEMPLATES
          }));
          e.complete();
        }
      },
      onClose: lQ
    }], [t, e]);
  }(t);
  _$$h2(() => {
    QL(_$$tX.key) === _$$tX.value && t.show({
      canShow: e => !e
    });
  });
  return jsx(WZ, {
    testId: "workflow-interop-machine-overlay",
    userFlagOnShow: oe,
    isShowing: t.isShowing,
    onComplete: t.complete,
    steps: i
  });
}
let od = "seen_figjam_workshop_onboarding";
let oc = _$$r2(od);
function ou(e) {
  let t = useAtomWithSubscription(J1);
  let i = useAtomWithSubscription(oc);
  let n = useAtomWithSubscription(zo);
  let a = useAtomWithSubscription(PD);
  let o = _$$e({
    overlay: Fq3,
    priority: _$$N.SECONDARY_MODAL
  }, [t, i, n, a]);
  _$$h2(() => {
    o.show({
      canShow: (e, t, i, r) => e && !t && i && !r
    });
  });
  return jsx(_$$h, {
    currentStepIndex: 0,
    disableFooter: !0,
    element: op,
    isShowing: o.isShowing,
    modalType: q3.DRAGGABLE,
    onClickPrimaryCta: o.complete,
    onClose: o.complete,
    onManualDismiss: o.complete,
    onboardingKey: v4,
    title: () => getI18nString("rcs.figjam_workshop.invite_the_world_to_your_workshop"),
    totalNumSteps: 1,
    trackingContextName: "Fig Jam Workshop Onboarding",
    userFlagOnShow: od,
    width: 301
  });
}
function op(e) {
  return jsxs(Fragment, {
    children: [jsx(Gv, {
      width: 301,
      src: buildUploadUrl("a97e76df2b43ae8b408127c1c63ea0b8485ba8ac")
    }), jsx(_$$ak, {
      children: renderI18nText("rcs.figjam_workshop.open_sessions_let_you_jam_with_anyone_even_people_who_don_t_have_a_figma_account")
    })]
  });
}
function o_(e, t, i, r) {
  let a = useDispatch();
  let s = _$$f(i);
  let o = useRef(!!s);
  _$$E2(e, t, useCallback(() => {
    !(r?.current || o?.current) && (s || (o.current = !0, a(_$$b({
      [i]: !0
    }))));
  }, [r, a, s, i]));
}
function ow() {
  let {
    uniqueId,
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: a9B,
    priority: _$$N.OVERRIDING_MODAL
  });
  let o = useDispatch();
  let l = _$$f("cursor_bot_v2__no_basics_file__played_frame_formatting");
  let d = _$$f("design_panel_step_shown");
  let c = _$$f("cursor_bot_v2__basics_file__started_flow");
  let u = Ai(["exp_cursor_bot_onboarding"]);
  let m = _$$b5();
  _$$E2(uniqueId, "create_frame", useCallback(() => {
    !l || d || c || u || isShowing || show();
  }, [d, c, isShowing, l, show, u]));
  let _ = useAtomWithSubscription(_$$a3);
  let x = !!_$$f(Of(wn.FORMAT_FRAME, !1).tutorialPlayedUserFlag);
  let b = useMemo(() => _$$p2(x, !1), [x]);
  if (!isShowing) return null;
  if (_ === h0.PLAYING) return jsx(_$$a4, {
    cursorBotStateManager: m,
    currentTutorial: b
  });
  let C = () => {
    o(_$$b({
      design_panel_step_shown: !0
    }));
    complete();
  };
  return jsx(b.TooltipElement, {
    onClickNext: C,
    onClickShowMe: () => {
      m.runTutorial(b);
    },
    onClickClose: C,
    skip: C,
    isFollowUp: !0
  });
}
function oS() {
  let {
    uniqueId,
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: ENg,
    priority: _$$N.OVERRIDING_MODAL
  });
  let o = useDispatch();
  let l = _$$f("cursor_bot_v2__no_basics_file__played_text_formatting");
  let d = _$$f("format_text_step_shown");
  let c = _$$f("cursor_bot_v2__basics_file__started_flow");
  let u = _$$b5();
  let m = Ai(["exp_cursor_bot_onboarding"]);
  let [_, x] = useState(!1);
  let b = Vr();
  let C = useSelector(e => e.mirror.appModel.activeCanvasEditModeType);
  _$$E2(uniqueId, "create_text", () => {
    x(!0);
  });
  useEffect(() => {
    !l || d || c || m || isShowing || !_ || b?.type !== "TEXT" || C !== LayoutTabType.DESIGN_LAYOUT || isShowing || show();
  }, [b, _, isShowing, show, C, l, d, c, m]);
  let v = !!_$$f(Of(wn.FORMAT_TEXT, !1).tutorialPlayedUserFlag);
  let E = useMemo(() => _$$Z(v, !1), [v]);
  let T = useAtomWithSubscription(_$$a3);
  if (!isShowing) return null;
  if (T === h0.PLAYING) return jsx(_$$a4, {
    cursorBotStateManager: u,
    currentTutorial: E
  });
  let S = () => {
    o(_$$b({
      format_text_step_shown: !0
    }));
    complete();
  };
  return jsx(E.TooltipElement, {
    onClickNext: S,
    onClickShowMe: () => {
      u.runTutorial(E);
    },
    onClickClose: S,
    skip: S,
    isFollowUp: !0
  });
}
function ok() {
  let e = _$$e({
    overlay: CVA,
    priority: _$$N.OVERRIDING_MODAL
  });
  let t = _$$f("no_figma_basics_tooltips_design_panel_step");
  let i = _$$f("design_panel_step_shown");
  let a = _$$f("started_figma_basics_onboarding");
  let s = useDispatch();
  let o = t && !i && !a;
  if (_$$E2(e.uniqueId, "create_frame", useCallback(() => {
    o && !e.isShowing && e.show();
  }, [e, o])), !e.isShowing) return null;
  let l = () => {
    e.complete();
    s(_$$b({
      design_panel_step_shown: !0
    }));
  };
  return jsx(_$$rq, {
    arrowPosition: F_.RIGHT_BODY,
    description: renderI18nText("tooltips_plus_onboarding.design_panel.description"),
    disableHighlight: !0,
    emphasized: !0,
    isShowing: e.isShowing,
    onClose: l,
    onTargetLost: l,
    targetKey: _$$W,
    title: renderI18nText("tooltips_plus_onboarding.change_properties_in_the_design_panel"),
    trackingContextName: "Tooltips+ > Reactive Follow Ups > Frame Formatting"
  });
}
function oN() {
  let e = _$$e({
    overlay: IQ,
    priority: _$$N.OVERRIDING_MODAL
  });
  let t = _$$f("no_figma_basics_tooltips_format_text_step");
  let i = _$$f("format_text_step_shown");
  let a = _$$f("started_figma_basics_onboarding");
  let s = useDispatch();
  let o = !i && t && !a;
  if (_$$E2(e.uniqueId, "create_text", useCallback(() => {
    o && !e.isShowing && e.show();
  }, [e, o])), !e.isShowing) return null;
  let l = () => {
    e.complete();
    s(_$$b({
      format_text_step_shown: !0
    }));
  };
  return jsx(_$$rq, {
    arrowPosition: F_.RIGHT_BODY,
    description: renderI18nText("tooltips_plus_onboarding.text_formatting.description"),
    disableHighlight: !0,
    emphasized: !0,
    isShowing: e.isShowing,
    onClose: l,
    onTargetLost: l,
    targetKey: _$$B4,
    title: renderI18nText("tooltips_plus_onboarding.text_formatting.title"),
    trackingContextName: "Tooltips+ > Reactive Follow Ups > Text Formatting"
  });
}
var oD = oR;
function oG(e) {
  let t;
  let {
    file,
    org,
    overlay
  } = e;
  let o = _$$B5(file, org.id);
  let l = useRef(void 0);
  let d = overlay.complete;
  if (useEffect(() => {
    o && l.current && !oD()(o.filePermissionsData, l.current?.filePermissionsData) && d();
    l.current = o;
  }, [o, d]), !o) return null;
  let c = o.isBranch;
  let u = o.branchMatchesRepo;
  let p = o.linkExpiresAt;
  let h = Ch(o.filePermissionsData, e.org);
  let m = M3(_$$A3(p));
  let f = !u && c ? renderI18nText("link_expired_overlay.different_branch_permissions_header") : renderI18nText("link_expired_overlay.header");
  t = u ? renderI18nText("link_expired_overlay.same_branch_permissions_body", {
    formattedTimestamp: m,
    audience: h
  }) : c ? renderI18nText("link_expired_overlay.different_branch_permissions_body", {
    formattedTimestamp: m,
    audience: h
  }) : renderI18nText("link_expired_overlay.body", {
    formattedTimestamp: m,
    audience: h
  });
  return jsx(_$$rq, {
    isShowing: overlay.isShowing,
    trackingContextName: "Link Expired Overlay",
    title: f,
    description: t,
    targetKey: v4,
    onClose: overlay.complete
  });
}
let oK = createReduxSubscriptionAtomWithState(e => e.modalShown);
function oH(e) {
  let t = useRef(null);
  let i = _$$e({
    overlay: K_h,
    priority: _$$N.SECONDARY_MODAL
  });
  let a = _$$sZ();
  let o = useAtomWithSubscription(openFileAtom);
  let l = useAtomWithSubscription(oK)?.type === jS;
  return (_$$E2(i.uniqueId, [q2], () => {
    a && o && !i.isShowing && !l && i.show();
  }), useEffect(() => (i.isShowing ? t.current = setTimeout(() => {
    t.current = null;
    i.complete();
  }, 45e3) : t.current && clearTimeout(t.current), () => {
    t.current && clearTimeout(t.current);
  }), [i]), a && o) ? jsx(oG, {
    overlay: i,
    org: a,
    file: o
  }) : null;
}
function oX() {
  let e = useDispatch();
  let t = PE();
  let i = _$$r2(Kt);
  let r = useAtomWithSubscription(i);
  let a = _$$r2(wl);
  let o = useAtomWithSubscription(a);
  let l = _$$sO();
  let d = _$$aV();
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: Fff,
    priority: sL
  }, [r, o]);
  let g = useCallback(() => {
    l && t && (d || show({
      canShow: (e, t) => e && !t
    }));
  }, [t, d, l, show]);
  useEffect(() => g(), [g]);
  return _$$i3({
    onClickPrimaryCta: complete,
    onClickSecondaryCta: () => {
      e(_$$b({
        agreed_to_slides_ai_terms: !1
      }));
    },
    isShowing,
    isOnboarding: !1,
    totalSteps: 1
  });
}
function o1({
  openFile: e
}) {
  let t = Gi();
  let i = J3();
  let n = JU(i);
  return e && e.teamId && t?.type === "team" && n ? jsx(o2, {
    teamId: e.teamId
  }) : null;
}
function o2({
  teamId: e
}) {
  let t = useDispatch();
  let i = _$$r2(Kt);
  let a = useAtomWithSubscription(i);
  let o = _$$r2(uM);
  let l = useAtomWithSubscription(o);
  let d = hX(`[data-onboarding-key="${O0}"]`);
  let c = selectCurrentFile();
  let u = useAtomWithSubscription(Fy);
  let h = _$$aV();
  let m = useAtomWithSubscription(_$$U3({
    teamId: e,
    editorType: FFileType.SLIDES
  }));
  let {
    numSkippedSlides,
    numTotalSlides
  } = _$$Nr();
  let b = numTotalSlides - numSkippedSlides;
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: uTW,
    priority: _$$N.SECONDARY_MODAL
  }, [a, l, u, m]);
  let T = useCallback(() => {
    !h && d && c && show({
      canShow: (e, t, i, r) => b > 1 && e && !t && 0 === r && i
    });
  }, [h, d, c, show, b]);
  useEffect(() => T(), [T]);
  useEffect(() => {
    isShowing && t(j7({
      type: _$$eg,
      data: {
        targetRect: d,
        activePathOnMount: [getI18nString("tile.dropdown.publish_as_template")]
      }
    }));
  }, [t, d, isShowing]);
  return jsx(_$$rq, {
    arrowPadding: 4,
    arrowPosition: F_.LEFT_TITLE,
    clickOutsideToHide: !0,
    description: renderI18nText("slides.templates.pro_templates_announcement.description"),
    disableHighlight: !0,
    isShowing,
    onClose: complete,
    onTargetLost: complete,
    primaryCta: {
      label: renderI18nText("slides.templates.pro_templates_announcement.button.done"),
      type: "button",
      onClick: complete,
      ctaTrackingDescriptor: _$$c.DONE
    },
    targetKey: w1,
    title: renderI18nText("slides.templates.pro_templates_announcement.header"),
    trackingContextName: "Slides Pro Templates Announcement",
    userFlagOnShow: "seen_slides_pro_templates_announcement",
    zIndex: _$$R.MODAL
  });
}
function o7() {
  let e = useAtomWithSubscription(Fy);
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: sJD,
    priority: _$$N.DEFAULT_MODAL
  }, [e]);
  let l = _$$L();
  let d = !!getFeatureFlags().figjam_ui3_toolbelt_onboarding;
  let c = _$$_();
  let {
    isToolbeltDisabled
  } = Dm();
  useEffect(() => {
    show({
      canShow: e => e && l && d && c && !isToolbeltDisabled
    });
  }, [show, l, d, c, isToolbeltDisabled]);
  return jsx(_$$rq, {
    arrowPadding: 8,
    arrowPosition: F_.BOTTOM,
    description: renderI18nText("whiteboard.toolbelt.onboarding_feature_callout.description"),
    disableHighlight: !0,
    forceUI3Theme: !0,
    isShowing,
    media: jsx(_$$y, {
      src: buildUploadUrl("6462781efe9eeb4aa90be0eed2316ae8fedb7980"),
      alt: getI18nString("whiteboard.toolbelt.onboarding_feature_callout.imageAltText"),
      aspectRatio: 16 / 9
    }),
    onClose: complete,
    primaryCta: {
      type: "button",
      label: renderI18nText("rcs.got_it"),
      onClick: complete,
      ctaTrackingDescriptor: _$$c.GOT_IT
    },
    shouldCenterArrow: EL.BEST_EFFORT,
    shouldDisableAnimation: !0,
    targetKey: yl,
    title: renderI18nText("whiteboard.toolbelt.onboarding_feature_callout.title"),
    trackingContextName: "FigJam UI3 Toolbelt Onboarding",
    userFlagOnShow: "seen_figjam_ui3_toolbelt_onboarding"
  });
}
function o9(e) {
  return {
    isDesignEditor: e === FEditorType.Design,
    isFigjamEditor: e === FEditorType.Whiteboard,
    isSlidesEditor: e === FEditorType.Slides,
    isDevModeEditor: e === FEditorType.DevHandoff,
    isCooperEditor: e === FEditorType.Cooper,
    isSitesEditor: e === FEditorType.Sites,
    isFigmakeEditor: e === FEditorType.Figmake,
    isIllustrationEditor: e === FEditorType.Illustration
  };
}
export let $$le0 = memo(function ({
  editorType: e,
  openFile: t
}) {
  let {
    isDesignEditor,
    isDevModeEditor
  } = o9(e);
  let l = useRef(!isDesignEditor);
  useEffect(() => {
    l.current = !isDesignEditor;
  }, [isDesignEditor]);
  (function (e) {
    let t = useAtomWithSubscription(_$$a3);
    let i = useSelector(e => e.user?.created_at);
    let r = !!i && _$$A3("2023-05-01").isBefore(i);
    useEffect(() => {
      if (!r) {
        e.current = !0;
        return;
      }
      e.current = e.current || XC(t);
    }, [e, t, r]);
    yE("x", e);
    yE("y", e);
    yE("width", e);
    yE("height", e);
    yE("angle", e);
    yE("cornerRadius", e);
    yE("strokePaints", e);
    yE("fillPaints", e);
    yE("effects", e);
    yE("fontSize", e);
    yE("fontFamily", e);
    yE("fontStyle", e);
    _$$g2("has_zoomed_in_design_file", e);
    _$$U2("has_panned_in_design_file", e);
    let a = _$$e({
      overlay: _5$,
      priority: 0
    });
    o_(a.uniqueId, "action_set_tool_frame", "has_selected_frame_tool", e);
    o_(a.uniqueId, "create_frame", "has_created_frame", e);
    o_(a.uniqueId, "create_text", "has_created_text", e);
    e.current;
  })(l);
  (function (e) {
    let t = useDispatch();
    let i = useAtomWithSubscription(mp);
    let r = null != i && _$$A3("2023-10-31").isBefore(i);
    let a = !!_$$f("has_opened_design_editor");
    let [o, l] = useAtomValueAndSetter(eu);
    useEffect(() => {
      r && !a && e && (l(!0), t(_$$b({
        has_opened_design_editor: !0
      })));
    }, [t, a, e, l, r]);
    useEffect(() => {
      o && !e && l(!1);
    }, [o, e, l]);
  })(isDesignEditor);
  let d = useFullscreenViewFile();
  let c = useAtomWithSubscription(yF);
  let u = _$$I();
  return z4.getIsExtension() || "loaded" !== d.status || IntegrationUtils.isGoogleClassroomIntegration() || c === _$$E4 || c === _$$XC || isDevModeEditor && u ? null : jsxs(Suspense, {
    fallback: null,
    children: [jsx(lt, {
      openFile: t,
      editorType: e
    }), !BrowserInfo.isIpadNative && jsx(li, {
      openFile: t,
      editorType: e
    })]
  });
});
function lt({
  editorType: e
}) {
  let {
    isFigjamEditor
  } = o9(e);
  return jsx(Fragment, {
    children: isFigjamEditor && jsxs(_$$p3, {
      children: [jsx(tW, {}), jsx(tQ, {})]
    })
  });
}
function li({
  editorType: e,
  openFile: t
}) {
  let {
    isFigjamEditor,
    isDesignEditor,
    isSlidesEditor,
    isDevModeEditor
  } = o9(e);
  let h = _$$tG();
  let m = q8();
  let f = useCanUseDevModeDemoFile();
  let g = useIsSelectedFigmakeFullscreen();
  let _ = function (e) {
    switch (e) {
      case FEditorType.Design:
        return C5.Design;
      case FEditorType.Whiteboard:
        return C5.FigJam;
      case FEditorType.Slides:
        return C5.Slides;
      case FEditorType.DevHandoff:
        return C5.DevMode;
      case FEditorType.Cooper:
        return C5.Cooper;
      case FEditorType.Sites:
        return C5.Sites;
      case FEditorType.Figmake:
        return C5.FigMake;
      case FEditorType.Illustration:
        return C5.Illustration;
      default:
        return C5.Unknown;
    }
  }(e);
  return f ? jsx(Fragment, {
    children: jsx(_$$p3, {
      children: jsx(NuxOnboardingOverlay, {
        entryPoint: _
      })
    })
  }) : jsxs(Fragment, {
    children: [isDesignEditor && !isInteractionPathCheck() && jsx(_$$p3, {
      children: jsx(to, {})
    }), isFigjamEditor && !isDesignEditor && jsx(_$$Q4, {
      children: jsx(_$$p3, {
        children: jsx(th, {})
      })
    }), isDesignEditor && jsx(_$$p3, {
      children: jsx(iw, {})
    }), jsx(_$$p3, {
      children: jsx(_$$A8, {})
    }), jsx(_$$p3, {
      children: jsx(_$$F2, {})
    }), !g && jsx(_$$p3, {
      children: jsx(_$$w4, {})
    }), !isAnyMobile && jsxs(Fragment, {
      children: [jsx(_$$p3, {
        children: jsx(_$$P, {})
      }), jsx(_$$p3, {
        children: jsx(_$$A5, {})
      }), jsx(_$$p3, {
        children: jsx(_$$Ay3, {})
      }), jsx(_$$p3, {
        children: jsx(_$$A11, {})
      }), jsx(_$$p3, {
        children: jsx(_$$A7, {})
      }), jsx(_$$p3, {
        children: isDesignEditor && jsx(_$$$2, {})
      })]
    }), t?.canEditCanvas && isFigjamEditor && !isDesignEditor && jsxs(_$$p3, {
      children: [jsx(nJ, {
        openFile: t
      }), jsx(a1, {}), jsx(nl, {}), jsx(n$, {}), jsx(nx, {}), jsx(ny, {})]
    }), !isDesignEditor && !isSlidesEditor && !g && jsx(_$$p3, {
      children: jsx(NuxOnboardingOverlay, {
        entryPoint: _
      })
    }), isFigjamEditor && jsx(Fragment, {
      children: jsx(_$$p3, {
        children: jsx(nB, {})
      })
    }), jsx(_$$p3, {
      children: jsx(KX, {})
    }), isFigjamEditor && jsx(_$$p3, {
      children: jsx(ou, {})
    }), jsx(_$$p3, {
      children: jsx(Wk, {})
    }), isFigjamEditor && jsx(_$$p3, {
      children: jsx(oo, {})
    }), jsx(_$$p3, {
      children: jsx(oH, {})
    }), jsx(_$$p3, {
      children: jsx(eU, {})
    }), isFigjamEditor && jsx(Fragment, {
      children: jsx(_$$p3, {
        children: jsx(tD, {})
      })
    }), isDesignEditor && t?.canEdit && jsx(_$$p3, {
      children: jsx(s4, {})
    }), isDesignEditor && t?.canEdit && jsx(_$$p3, {
      children: jsx(ic, {})
    }), isDesignEditor && jsx(_$$p3, {
      children: jsx(t7, {})
    }), jsx(_$$p3, {
      children: jsx(tC, {})
    }), !isAnyMobile && jsx(_$$p3, {
      children: jsx(ik, {})
    }), jsx(_$$p3, {
      children: jsx(_$$b3, {})
    }), isDesignEditor && jsx(_$$p3, {
      children: jsx(sn, {})
    }), isDesignEditor && jsxs(_$$p3, {
      children: [jsx(ok, {}), jsx(oN, {})]
    }), isDesignEditor && jsxs(_$$p3, {
      featureFlag: "cursor_bot",
      children: [jsx(ow, {}), jsx(oS, {})]
    }), isFigjamEditor && !m && !getFeatureFlags().figjam_synthesize_handbrake && jsx(_$$p3, {
      children: jsx(et, {})
    }), isFigjamEditor && !m && !getFeatureFlags().figjam_synthesize_handbrake && jsx(_$$p3, {
      children: jsx(Cw, {})
    }), h && jsx(_$$p3, {
      children: isFigjamEditor && !getFeatureFlags().figjam_quick_actions_v2 && jsx(vi, {})
    }), isDesignEditor && jsx(_$$p3, {
      children: jsx(eD, {})
    }), isFigjamEditor && jsxs(_$$p3, {
      children: [jsx(_$$rj, {}), jsx(sx, {})]
    }), isFigjamEditor && getFeatureFlags().figjam_ui3_toolbelt_onboarding && jsx(_$$p3, {
      children: jsx(o7, {})
    }), jsx(_$$p3, {
      children: jsx(i_, {})
    }), isFigjamEditor && jsxs(_$$p3, {
      children: [jsx(sC, {}), jsx(rg, {})]
    }), t && jsx(_$$p3, {
      featureFlag: "ui3_and_ai_welcome_modal",
      children: jsx(sB, {})
    }), jsx(_$$p3, {
      children: jsx(QI, {})
    }), jsx(_$$p3, {
      children: jsx(oX, {})
    }), t?.canEditCanvas && isSlidesEditor && jsx(_$$p3, {
      children: jsx(o1, {
        openFile: t
      })
    }), jsx(_$$p3, {
      children: jsx(ex, {})
    }), jsx(_$$p3, {
      children: jsx(_$$C, {
        source: "editor"
      })
    }), jsx(_$$p3, {
      children: jsx(sK, {})
    }), jsx(_$$p3, {
      featureFlag: "figjam_ai_actions_callout",
      children: jsx(_$$sR, {})
    }), t?.canEditCanvas && isDevModeEditor ? jsxs(_$$p3, {
      featureFlag: "cheddar",
      children: [jsx(_$$oI, {}), jsx(Te, {}), jsx(Ug, {})]
    }) : null, isDesignEditor && jsx(_$$p3, {
      featureFlag: "mix_gl_onboarding",
      children: jsx(ir, {})
    })]
  });
}
export const A = $$le0;