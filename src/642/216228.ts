import { Ay, xk } from '@stylexjs/stylex';
import i from 'classnames';
import { createContext, forwardRef, memo, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { S as _$$S } from '../642/159607';
import { j as _$$j } from '../642/323508';
import { b as _$$b3 } from '../642/502017';
import { V as _$$V } from '../642/624414';
import { m as _$$m, w as _$$w } from '../642/720139';
import { A as _$$A } from '../642/758804';
import { T as _$$T } from '../642/794951';
import { D2, oh } from '../905/18797';
import { k as _$$k3 } from '../905/44647';
import { f as _$$f2 } from '../905/54715';
import { Uz } from '../905/63728';
import { oA } from '../905/71785';
import { TG } from '../905/72677';
import { KH } from '../905/81982';
import { F as _$$F } from '../905/84606';
import { yD } from '../905/92359';
import { Z as _$$Z } from '../905/116724';
import { Ib } from '../905/129884';
import { A as _$$A2 } from '../905/150554';
import { showModalHandler } from '../905/156213';
import { DP as _$$DP } from '../905/158740';
import { ServiceCategories as _$$e3 } from '../905/165054';
import { E as _$$E2 } from '../905/172252';
import { y as _$$y2 } from '../905/175043';
import { n as _$$n2 } from '../905/186638';
import { permissionScopeHandler as _$$l2, scopeAwareFunction as _$$nc } from '../905/189185';
import { I as _$$I3 } from '../905/203573';
import { h as _$$h } from '../905/207101';
import { v as _$$v } from '../905/213481';
import { b as _$$b2 } from '../905/217163';
import { Cn } from '../905/225265';
import { z as _$$z } from '../905/239603';
import { P as _$$P2 } from '../905/262370';
import { h as _$$h3, K as _$$K2 } from '../905/275787';
import { N as _$$N4 } from '../905/281143';
import { u as _$$u } from '../905/290607';
import { e as _$$e4 } from '../905/295932';
import { getI18nString, renderI18nText } from '../905/303541';
import { splitPath, getBasename } from '../905/309735';
import { T as _$$T4 } from '../905/336775';
import { selectTeams } from '../905/338617';
import { I as _$$I } from '../905/342732';
import { P as _$$P5 } from '../905/347284';
import { c as _$$c } from '../905/370443';
import { jp, qF, WS } from '../905/370597';
import { selectCurrentUser, getUserId } from '../905/372672';
import { u as _$$u3 } from '../905/389684';
import { debugState } from '../905/407919';
import { Y as _$$Y2 } from '../905/411989';
import { rq as _$$rq } from '../905/425180';
import { K as _$$K4 } from '../905/443068';
import { k as _$$k2 } from '../905/443820';
import { analyticsEventManager, trackEventAnalytics } from '../905/449184';
import { x as _$$x2 } from '../905/453561';
import { $ as _$$$ } from '../905/455748';
import { Z as _$$Z2 } from '../905/498136';
import { x as _$$x } from '../905/505155';
import { g as _$$g3 } from '../905/505662';
import { U as _$$U2 } from '../905/506188';
import { E as _$$E3 } from '../905/511388';
import { GG } from '../905/511649';
import { RR as _$$RR } from '../905/514666';
import { dD } from '../905/519113';
import { C as _$$C } from '../905/520159';
import { $n, IK } from '../905/521428';
import { r6 as _$$r6 } from '../905/542608';
import { V as _$$V2 } from '../905/546897';
import { K as _$$K5 } from '../905/547934';
import { useIsFullscreenSitesView } from '../905/561485';
import { getFeatureFlags } from '../905/601108';
import { PerfTimer } from '../905/609396';
import { e as _$$e } from '../905/621515';
import { E as _$$E } from '../905/632989';
import { DP } from '../905/640017';
import { N as _$$N3 } from '../905/645480';
import { oW } from '../905/675859';
import { getSingletonSceneGraph } from '../905/700578';
import { L as _$$L } from '../905/704296';
import { logError } from '../905/714362';
import { T as _$$T2 } from '../905/714785';
import { l as _$$l } from '../905/716947';
import { cleanAssetName } from '../905/722604';
import { n as _$$n3 } from '../905/734251';
import { Point } from '../905/736624';
import { qG } from '../905/742325';
import { l as _$$l3 } from '../905/745972';
import { G as _$$G2 } from '../905/750789';
import { tH as _$$tH } from '../905/751457';
import { jD } from '../905/765855';
import { K as _$$K3 } from '../905/770444';
import { R as _$$R } from '../905/782411';
import { o as _$$o2 } from '../905/821217';
import { vL } from '../905/826900';
import { Y as _$$Y } from '../905/830372';
import { Um } from '../905/848862';
import { t as _$$t4 } from '../905/851577';
import { X as _$$X2 } from '../905/853613';
import { F_ } from '../905/858282';
import { $A as _$$$A } from '../905/862883';
import { bL, RT } from '../905/867927';
import { generateUUIDv4 } from '../905/871474';
import { A as _$$A5 } from '../905/891805';
import { n as _$$n } from '../905/913636';
import { e as _$$e2 } from '../905/916195';
import { A as _$$A3 } from '../905/925160';
import { j7, oB } from '../905/929976';
import { q as _$$q2 } from '../905/932270';
import { lQ as _$$lQ } from '../905/934246';
import { sD as _$$sD } from '../905/937198';
import { lY as _$$lY } from '../905/939482';
import { f as _$$f } from '../905/940356';
import { sx as _$$sx2 } from '../905/941192';
import { Sn } from '../905/946805';
import { $3 } from '../905/946937';
import { t as _$$t7 } from '../905/947268';
import { U as _$$U } from '../905/966438';
import { d as _$$d } from '../905/976845';
import { E as _$$E4 } from '../905/984674';
import { H as _$$H, lj as _$$lj, r9 as _$$r2, QN, Rs } from '../905/991973';
import { h as _$$h6 } from '../905/994594';
import { g as _$$g2 } from '../9410/28544';
import { H as _$$H2 } from '../9410/195555';
import { $A as _$$$A2 } from '../9410/212974';
import { B as _$$B } from '../9410/966396';
import { A as _$$A6 } from '../af221b13/388839';
import { s as _$$s } from '../cssbuilder/589278';
import { we } from '../figma_app/987';
import { QI3 } from '../figma_app/6204';
import { Dm } from '../figma_app/8833';
import { Pv, Yl } from '../figma_app/10098';
import { FX as _$$FX } from '../figma_app/12491';
import { atom, atomStoreManager, createRemovableAtomFamily, useAtomValueAndSetter, useAtomWithSubscription, Xr } from '../figma_app/27355';
import { usePreviousValue, useLatestRef } from '../figma_app/922077';
import { TeamCanEdit } from '../figma_app/43951';
import { bo, Bs, fg, ko } from '../figma_app/73698';
import { _9, $1, Bk, mZ, oV, Sg } from '../figma_app/76115';
import { getObservableValue } from '../figma_app/84367';
import { isNotNullish } from '../figma_app/95419';
import { tz as _$$tz, fM } from '../figma_app/112055';
import { s0 as _$$s2 } from '../figma_app/115923';
import { eT as _$$eT } from '../figma_app/116234';
import { M3, q_ } from '../figma_app/119475';
import { LR } from '../figma_app/120210';
import { I as _$$I2 } from '../figma_app/130633';
import { $H, MA, ye } from '../figma_app/134428';
import { Vr } from '../figma_app/151869';
import { He, je } from '../figma_app/155728';
import { t as _$$t5 } from '../figma_app/162756';
import { Fk } from '../figma_app/167249';
import { buildUploadUrl, getInitialOptions, isDevEnvironment } from '../figma_app/169182';
import { ce as _$$ce, r6 as _$$r4, t0 as _$$t3, AS, Bv, dj, fi, Nn, VF } from '../figma_app/177636';
import { g5 } from '../figma_app/178752';
import { h as _$$h2, sN as _$$sN, hB, ht, LH, R2, uo, zf } from '../figma_app/188908';
import { FFileType } from '../figma_app/191312';
import { h as _$$h4 } from '../figma_app/198885';
import { cG, hK, X3, xU } from '../figma_app/211706';
import { q as _$$q, U as _$$U3 } from '../figma_app/213525';
import { a as _$$a, P as _$$P3 } from '../figma_app/235371';
import { Fl, fV } from '../figma_app/236178';
import { X3 as _$$X, c$, MM, ms, wv } from '../figma_app/236327';
import { jO } from '../figma_app/242339';
import { Bf } from '../figma_app/249941';
import { lR as _$$lR, fd, Re } from '../figma_app/255679';
import { GG as _$$GG, lS as _$$lS, qd as _$$qd, b4, Ou, PV, YQ } from '../figma_app/257779';
import { o as _$$o } from '../figma_app/267183';
import { N as _$$N } from '../figma_app/268271';
import { Ay as _$$Ay4 } from '../figma_app/272902';
import { te as _$$te, GM } from '../figma_app/275462';
import { useSubscription } from '../figma_app/288654';
import { $z } from '../figma_app/297733';
import { KD, O1 } from '../figma_app/317394';
import { Ko, Nv, P5 } from '../figma_app/318590';
import { $I } from '../figma_app/322845';
import { w5 } from '../figma_app/345997';
import { p as _$$p } from '../figma_app/353099';
import { ce as _$$ce2, Wy as _$$Wy } from '../figma_app/357202';
import { tM as _$$tM4, Ew, Gq } from '../figma_app/361662';
import { od } from '../figma_app/392189';
import { Gh } from '../figma_app/397267';
import { r8 as _$$r5, k1 } from '../figma_app/407767';
import { NJ } from '../figma_app/419216';
import { fullscreenValue } from '../figma_app/455680';
import { V as _$$V3 } from '../figma_app/473391';
import { Nz as _$$Nz, cP, FX, uY, ZI } from '../figma_app/475869';
import { t as _$$t6 } from '../figma_app/501766';
import { selectOpenFile, useCurrentFileKey, useOpenFileLibraryKey, useFullscreenViewFile, selectCurrentFile } from '../figma_app/516028';
import { r6 as _$$r, CK, NB } from '../figma_app/517115';
import { rl as _$$rl, tM as _$$tM2, C0, MB, NR, pg } from '../figma_app/525558';
import { vZ } from '../figma_app/527603';
import { $c, nT as _$$nT, _K, _q, ce, CT, d5, Gd, GH, H0, HE, Kd, Kv, Mj, PK, RQ, RU, RX, Sx, T5, vr, xP, y4, YJ } from '../figma_app/540964';
import { G4, T1 } from '../figma_app/545293';
import { b3, kL, Nb } from '../figma_app/547952';
import { b as _$$b } from '../figma_app/556971';
import { setupResourceAtomHandler } from '../figma_app/566371';
import { J as _$$J, P as _$$P } from '../figma_app/582341';
import { $A, lX as _$$lX, MT } from '../figma_app/588397';
import { Hz } from '../figma_app/591738';
import { I7 } from '../figma_app/594947';
import { y as _$$y } from '../figma_app/598297';
import { Ev, JA } from '../figma_app/608944';
import { createTrackedAtom } from '../figma_app/615482';
import { c$ as _$$c$, gL } from '../figma_app/618433';
import { RJ } from '../figma_app/630951';
import { PrimaryWorkflowEnum, LibraryTabEnum } from '../figma_app/633080';
import { J as _$$J2 } from '../figma_app/636279';
import { zl } from '../figma_app/641749';
import { lM as _$$lM, nE as _$$nE, tM as _$$tM, AZ, c_, gP, JS, Mk, my, o8, ON, Wy, Yv, yW } from '../figma_app/644808';
import { Mb } from '../figma_app/646357';
import { sH as _$$sH, t6 as _$$t2, _m, aK, Cg, G3, RR, S5, W9, wV, xc } from '../figma_app/647246';
import { sortBy, sortByWithOptions } from '../figma_app/656233';
import { n1 as _$$n4 } from '../figma_app/657017';
import { _ as _$$_ } from '../figma_app/658134';
import { Mw, pJ, pW } from '../figma_app/663669';
import { Ay as _$$Ay, jx, W7 } from '../figma_app/675746';
import { rp as _$$rp, PI } from '../figma_app/703988';
import { wY } from '../figma_app/708845';
import { _C, NG } from '../figma_app/709893';
import { aV } from '../figma_app/722362';
import { E1 } from '../figma_app/757606';
import { AppStateTsApi, ComponentPanelTab, Fullscreen, LayoutTabType, PanelType } from '../figma_app/763686';
import { N as _$$N2 } from '../figma_app/765684';
import { Ez } from '../figma_app/766708';
import { sF as _$$sF } from '../figma_app/777207';
import { BrowserInfo } from '../figma_app/778880';
import { l$ as _$$l$ } from '../figma_app/782261';
import { parsePxNumber } from '../figma_app/783094';
import { e_ as _$$e_, dM, F9, fA, MH } from '../figma_app/803787';
import { $E } from '../figma_app/805898';
import { _2, hw, u2 } from '../figma_app/807786';
import { dL } from '../figma_app/825489';
import { o3 } from '../figma_app/831799';
import { z6 } from '../figma_app/846841';
import { u as _$$u2, V as _$$V4 } from '../figma_app/862515';
import { generateRecordingKey, useHandleInputEvent, useHandleMouseEvent } from '../figma_app/878298';
import { dK, vD } from '../figma_app/889655';
import { isInteractionOrEvalMode } from '../figma_app/897289';
import { fi as _$$fi } from '../figma_app/913823';
import { _o, GT, YS } from '../figma_app/914674';
import { dS, gO, Nz } from '../figma_app/915774';
import { G as _$$G, K as _$$K } from '../figma_app/923271';
import { LJ } from '../figma_app/930386';
import { jR } from '../figma_app/933328';
import { h as _$$h5 } from '../figma_app/935454';
import { r6 as _$$r3, P3, ZX } from '../figma_app/950074';
import { T as _$$T3 } from '../figma_app/962636';
import { lg as _$$lg, cJ } from '../figma_app/976749';
import { O as _$$O, tM as _$$tM3, gb } from '../figma_app/984498';
import { A as _$$A4 } from '../vendor/90566';
import iw from '../vendor/239910';
import { useDispatch, useSelector } from 'react-redux';
import r$ from '../vendor/523035';
import { Te } from '../vendor/813803';
import { createPortal } from '../vendor/944059';
let l = i;
function M() {
  let e = aV();
  let t = selectCurrentFile()?.canEdit;
  let s = useFullscreenViewFile();
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: QI3,
    priority: _$$N.SECONDARY_MODAL
  }, [s]);
  let o = _$$te();
  let {
    currentView
  } = wV();
  let c = !!_$$f(bo);
  let u = zl(_$$j).currentState === 'no_figma_basics_onboarding_was_shown_in_current_session';
  useEffect(() => {
    !e && t && o() && !c && !u && currentView === S5.Libraries && show();
    isShowing && currentView !== S5.Libraries && complete();
  }, [show, complete, t, isShowing, o, c, u, currentView, e]);
  return jsx(_$$rq, {
    arrowPadding: fg,
    arrowPosition: F_.LEFT_TITLE,
    description: renderI18nText('rcs.visual_assets.explore_within_assets_tab'),
    disableHighlight: !0,
    isShowing,
    onClose: complete,
    primaryCta: {
      label: renderI18nText('onboarding_pointers.got_it'),
      type: 'button',
      onClick: complete,
      ctaTrackingDescriptor: _$$c.GOT_IT
    },
    targetKey: Bs,
    title: renderI18nText('rcs.visual_assets.elevate_your_designs'),
    trackingContextName: 'Visual Asset Packs Tooltip',
    userFlagOnShow: bo
  });
}
function P({
  width: e
}) {
  return jsxs(_$$p, {
    children: [jsx('div', {
      'style': {
        left: `${e}px`,
        top: '195px'
      },
      'className': 'visual_assets_tooltip_and_target--hiddenNuxAnchor--i4n3a',
      'data-onboarding-key': ko
    }), jsx(_$$T, {}), jsx(M, {})]
  });
}
let ee = 'asset_panel_folder--folderButton---mVgX';
let et = 'asset_panel_folder--selected--U7Cz3';
let es = 'asset_panel_folder--blankThumbnail--6v5uo';
let en = parsePxNumber(CT);
let ei = {
  height: en,
  width: en
};
let el = forwardRef(({
  keyPrefix: e,
  name: t,
  onClick: s,
  onContextMenu: n,
  previewAssetOrUrl: i,
  recordingKey: a,
  disabled: o,
  selected: d,
  variant: c,
  customThumbnailData: u,
  pageInfo: p,
  hoverable: h,
  role: m
}, g) => {
  let f = jsxs(Fragment, {
    children: [c === 'preview' || c === 'preview-no-padding' ? jsx('div', {
      className: 'asset_panel_folder--folderPreview--0ezgC',
      children: i ? jsx(_$$V2, {
        keyPrefix: e,
        previewAssetOrUrl: i,
        type: c === 'preview-no-padding' ? 'no-padding' : void 0,
        customThumbnailData: u,
        ...ei,
        pageInfo: p
      }) : jsx('div', {
        className: es,
        style: ei
      })
    }) : jsx('div', {
      className: 'asset_panel_folder--folderIcon--FnZdp',
      children: jsx(_$$x, {})
    }), jsx('div', {
      className: 'asset_panel_folder--folderName--CPNC8 ellipsis--ellipsis--Tjyfa',
      children: t
    }), jsx('div', {
      className: l()('asset_panel_folder--folderNextIcon--ZYH9z', {
        'asset_panel_folder--adjustMargin--uitBT': c === 'icon'
      }),
      children: jsx(_$$n, {})
    })]
  });
  return jsx('div', {
    className: 'asset_panel_folder--folderContainer--UPeR-',
    role: m,
    children: s ? getFeatureFlags().dse_fpl_wave_1 ? jsx(_$$E, {
      'aria-label': t,
      'className': l()(ee, {
        [et]: d
      }),
      'onClick': s,
      'ref': g,
      'recordingKey': a,
      'disabled': o,
      'htmlAttributes': {
        onContextMenu: n
      },
      'children': f
    }) : jsx(GG, {
      'aria-label': t,
      'className': l()(ee, {
        [et]: d
      }),
      'onClick': s,
      'onContextMenu': n,
      'forwardedRef': g,
      'recordingKey': a,
      'disabled': o,
      'children': f
    }) : jsx('div', {
      className: l()(ee, {
        [et]: d,
        'asset_panel_folder--hover--BjmYh': !!h
      }),
      children: f
    })
  });
});
function ec({
  subtree: e,
  index: t,
  keyPrefix: s,
  depth: i
}) {
  let l = _$$sN();
  let {
    folderPath,
    currentView
  } = wV();
  let [d] = MA();
  let {
    previewAsset
  } = e;
  let {
    navigateToFolder
  } = wV();
  let p = useCallback(() => {
    l('folderRow', navigateToFolder(e.name));
  }, [l, navigateToFolder, e.name]);
  let h = useMemo(() => [ON.CONTENTS, _$$lM.ASSETS + i, _$$tM.FOLDERS, t], [i, t]);
  let {
    keyboardNavigationItem,
    setKeyboardNavigationElement
  } = M3({
    path: h,
    id: e.key,
    disabled: (folderPath?.length ?? 0) > i
  });
  let {
    focusFirstItem,
    focusSearchBar
  } = _$$rl();
  C0(keyboardNavigationItem, t === 0 && i === (folderPath?.length ?? 0) && currentView === S5.Assets);
  let y = MB({
    onBoth: p,
    onKeyDown: focusFirstItem,
    onClick: focusSearchBar
  });
  let _ = useMemo(() => folderPath && folderPath.length > i, [folderPath, i]);
  return jsx(el, {
    name: e.name,
    onClick: y,
    keyPrefix: `${s}${e.name}`,
    previewAssetOrUrl: previewAsset,
    recordingKey: `assetsFolder.${e.name}`,
    ref: setKeyboardNavigationElement,
    disabled: _,
    variant: d === 'list' ? 'icon' : 'preview',
    role: d === 'list' ? 'listitem' : 'gridcell'
  });
}
let eX = 'asset_panel_tile--fileName--Skyao ellipsis--ellipsis--Tjyfa';
let eq = 'asset_panel_tile--secondary--6CWeS';
let eJ = 'asset_panel_tile--nameWrapper--6O-iS';
let eZ = 'asset_panel_tile--wrapper--8uDli asset_panel_tile--_wrapperBase--ngLpF library_item_tile--_variantHover--xfLPt';
let eQ = 'asset_panel_tile--gridWrapper--tUJe5 asset_panel_tile--wrapper--8uDli asset_panel_tile--_wrapperBase--ngLpF library_item_tile--_variantHover--xfLPt';
let e0 = 'asset_panel_tile--tileWrapper--7OwtG asset_panel_tile--_tileWrapperBase--OAJqM';
let e1 = 'asset_panel_tile--tileWrapperList--VMlzj asset_panel_tile--_tileWrapperBase--OAJqM';
function e3({
  asset: e,
  fileName: t,
  sourceForTracking: s,
  thumbLayout: i,
  thumbHeight: a,
  thumbWidth: o,
  displayType: d,
  viewMode: c,
  sectionNameForTracking: u,
  sectionPosition: p,
  sectionDepth: m,
  hideInlineName: f,
  keyboardPosition: x,
  isFirstTile: y = !1,
  isExample: _ = !1,
  keyboardPanelDepth: b = 0,
  disableClickPropagation: C = !1,
  libraryItemTileProps: j,
  isVisualAsset: v = !1,
  onSuccessfulAssetInsert: S
}) {
  let k = useContext(_$$U);
  let {
    isFlyoutOpen
  } = JA();
  let N = useCurrentFileKey();
  let I = useAtomWithSubscription(TG);
  let {
    currentView
  } = wV();
  let M = useMemo(() => _ ?? Nz(e, {
    isPreset: _$$lR(e, I)
  }), [e, _, I]);
  let A = _$$J2(e, p, u);
  let P = _$$n2(e);
  let L = _$$u({
    canSwap: !M,
    openFileKey: N ?? '',
    sourceForTracking: 'Asset Panel',
    insertAsChildOfCanvas: !0
  });
  let R = useCallback(() => {
    isFlyoutOpen && !P && A();
  }, [isFlyoutOpen, P, A]);
  let D = useCallback(() => {
    isFlyoutOpen || k?.onOpenFlyout(e, p, u, m, s);
  }, [isFlyoutOpen, k, e, p, u, m, s]);
  let F = useCallback(e => {
    C && e.stopPropagation();
    D();
  }, [C, D]);
  let B = `assetPanelTile.${p}`;
  let K = useHandleMouseEvent(B, 'click', F);
  let H = useMemo(() => ({
    ...x,
    path: [ON.CONTENTS, _$$lM.ASSETS + b, ...x.path]
  }), [x, b]);
  let {
    folderPath
  } = wV();
  let [z] = ye();
  let X = currentView === S5.Assets && folderPath && z && (folderPath?.length ?? 0) > b;
  let {
    setKeyboardNavigationElement,
    keyboardNavigationItem
  } = M3({
    ...H,
    id: _$$V3(e),
    onFocus: R,
    disabled: X
  });
  C0(keyboardNavigationItem, y && currentView === S5.Assets && !X);
  let [Q] = MA();
  let ee = _$$N2({
    colIndex: H.column,
    rowIndex: H.path[H.path.length - 1],
    isList: Q === 'list',
    keyboardNavigationItem,
    onComponentInsertSwap: L,
    onOpenFlyout: D,
    item: e,
    sectionNameForTracking: u,
    sectionPosition: p,
    shouldRefocusAfterKeyboardInsert: currentView === S5.Recents,
    sourceForTracking: s === _$$tM3 ? s : mZ
  });
  let et = _$$F(e, _$$K2.ASSETS_PANEL, p, u);
  let es = function (e, t) {
    let s = useSelector(dK);
    let r = e.isLocal && isInteractionOrEvalMode() ? _$$eT(e.node_id, s).join('-') : e.node_id;
    return useHandleMouseEvent(`componentThumb.${r}`, 'contextmenu', e => {
      t(e);
    });
  }(e, et);
  return jsxs(Fragment, {
    children: [jsx(_$$E, {
      'onClick': K,
      'className': l()('asset_panel_tile--focusableElementWrapper--YzHK7', 'asset_panel_tile--button--oNPUz', {
        'asset_panel_tile--transparentBackground--ht3B-': v
      }),
      'ref': setKeyboardNavigationElement,
      'htmlAttributes': {
        onKeyDown: ee,
        onContextMenu: es
      },
      'aria-describedby': 'asset-panel-tile-hint',
      'children': jsx(e2, {
        asset: e,
        disableClickPropagation: C,
        displayType: d,
        fileName: t,
        hideInlineName: f,
        isVisualAsset: v,
        libraryItemTileProps: j,
        onSuccessfulAssetInsert: S,
        sectionDepth: m,
        sectionNameForTracking: u,
        sectionPosition: p,
        sourceForTracking: s,
        thumbHeight: a,
        thumbLayout: i,
        thumbWidth: o,
        viewMode: c
      })
    }), getFeatureFlags().dse_fpl_wave_2 && jsx(_$$E2, {
      'id': 'asset-panel-tile-hint',
      'aria-hidden': !0,
      'children': getI18nString('design_systems.assets_panel.asset_tile_sr_hint')
    })]
  });
}
function e2({
  asset: e,
  fileName: t,
  sourceForTracking: s,
  thumbHeight: i,
  thumbWidth: a,
  sectionNameForTracking: o,
  sectionPosition: d,
  sectionDepth: c,
  hideInlineName: u,
  displayType: p,
  libraryItemTileProps: h,
  isVisualAsset: m,
  onSuccessfulAssetInsert: g
}) {
  let f = useDispatch();
  let x = _$$I(Cn.AssetsPanel);
  let y = useSelector(dK);
  let _ = useSelector(F9);
  let b = useAtomWithSubscription(_$$T2);
  let C = x.searchOption?.type === _$$I2.ALL;
  let j = fV(e.library_key);
  let v = fd(e.library_key);
  let S = _$$H(e.library_key);
  let k = _9(e.library_key, 'asset_panel_visual_assets');
  let w = C && (j || v || S);
  let T = useRef(null);
  let N = getBasename(e.name);
  let I = NG({
    text: N,
    textRef: T
  });
  let E = useRef(null);
  let M = NG({
    text: t ?? '',
    textRef: E
  });
  let A = !!x.query;
  let P = _$$n2(e);
  let L = useLatestRef(P);
  useEffect(() => {
    P && !L && f(jD());
  }, [P, f, L]);
  let R = e.isLocal && isInteractionOrEvalMode() ? _$$eT(e.node_id, y).join('-') : e.node_id;
  let O = o === 'Local components' || o === 'Local private components' || e.isLocal;
  let D = p === 'grid';
  let F = !u && D;
  let B = getFeatureFlags().api_asset_search_with_scores;
  let K = _$$Y2(e);
  let H = useCallback(() => {
    $z();
    S && k(!0);
    g?.();
  }, [k, S, g]);
  let V = {
    showName: !0,
    height: i,
    width: a,
    draggable: useMemo(() => ({
      sourceForTracking: s,
      clickToInsert: !1,
      afterSuccessfulInsert: H,
      sectionNameForTracking: o,
      sectionDepth: c
    }), [H, c, o, s]),
    shouldHideTooltip: !0,
    recordingNodePath: R,
    isSearch: A,
    useBaseTile: !0,
    hideNameOverlay: F,
    numVariants: K,
    displayType: D ? 'grid' : 'list-no-padding',
    sectionPosition: d,
    showTooltipImmediately: !1,
    fileName: I || M ? t : void 0,
    alwaysShowBorder: !1,
    thumbWrapperClassName: 'asset_panel_tile--thumbWrapper--bNG-Y'
  };
  let U = O ? jsx(MT, {
    item: e,
    isFilePublished: _,
    ...V
  }) : jsx(_$$lX, {
    item: e,
    ...V,
    ...h
  });
  return jsxs('div', {
    className: m ? 'asset_panel_tile--visualAssetsGridWrapper--zA9N1 asset_panel_tile--wrapper--8uDli asset_panel_tile--_wrapperBase--ngLpF library_item_tile--_variantHover--xfLPt' : D ? eQ : eZ,
    children: [jsx('div', {
      className: l()(D ? e0 : e1, {
        'asset_panel_tile--shownInFlyout--7Luo3': P,
        'asset_panel_tile--selectedFlyoutFocus--GGV8E': P && b
      }),
      children: U
    }), F && jsxs('div', {
      className: eJ,
      style: {
        width: a - 2
      },
      children: [jsx('span', {
        className: 'asset_panel_tile--name--FG9hg ellipsis--ellipsis--Tjyfa',
        ref: T,
        children: N
      }), jsx('div', {
        className: 'asset_panel_tile--caret--x-Vya asset_panel_tile--_caretBase--IZ44d',
        children: jsx(_$$e2, {
          'aria-hidden': !0
        })
      })]
    }), F && !!t && jsxs(_$$Y, {
      spacing: 0,
      direction: 'horizontal',
      height: 'hug-contents',
      children: [jsx('div', {
        className: l()(eX, eq),
        ref: E,
        style: w ? {
          maxWidth: a - _$$J - 2
        } : {
          width: a - 2
        },
        children: t
      }), w && jsx(_$$P, {
        libraryKey: e.library_key,
        showPresetTooltip: !0,
        tooltipDelay: 500,
        tooltipLocation: 'below',
        compact: !0
      })]
    }), B && jsxs(Fragment, {
      children: [jsx('div', {
        className: l()(eX, eq),
        style: w ? {
          maxWidth: a - _$$J - 2
        } : {
          width: a - 2
        },
        children: `Score: ${'score' in e ? e.score?.toFixed(2) ?? 'N/A' : 'N/A'}`
      }), jsx('div', {
        className: l()(eX, eq),
        style: w ? {
          maxWidth: a - _$$J - 2
        } : {
          width: a - 2
        },
        children: `(L:${e.lexical_score?.toFixed(2) ?? 'N/A'}, AI:${e.ai_score?.toFixed(2) ?? 'N/A'}, F:${e.fuse_score?.toFixed(2) ?? 'N/A'})`
      })]
    })]
  });
}
function e8() {
  let e = useContext(_$$U);
  return e?.isUi3 ? e : {
    ...e,
    width: 0
  };
}
function e7({
  width: e,
  children: t
}) {
  let s = function (e) {
    let t = useDispatch();
    let {
      query,
      searchSessionId
    } = Gq();
    let i = ht();
    let l = q_();
    let a = LR();
    let o = useSelector(e => e.universalInsertModal.showing);
    let d = useCallback(() => {
      o && a();
    }, [a, o]);
    let {
      setFlyoutProps
    } = JA();
    let u = useCallback((n, a, o, u, p) => {
      d();
      let h = {
        asset: n,
        searchSessionId: searchSessionId ?? void 0,
        query: query ?? void 0,
        sectionPosition: a,
        sectionNameForTracking: o,
        assetTypeDropdownSelection: i,
        containerWidth: e,
        onGetKeyboardNavigationItemById: l,
        sectionDepth: u,
        sourceForTracking: p
      };
      getFeatureFlags().dse_fpl_wave_2 ? setFlyoutProps(h) : t(showModalHandler({
        type: _$$m,
        data: h
      }));
    }, [d, searchSessionId, query, i, e, l, setFlyoutProps, t]);
    return useMemo(() => ({
      onOpenFlyout: u,
      assetTypeDropdownSelection: i,
      isUi3: !0,
      width: e
    }), [u, i, e]);
  }(e);
  return jsx(_$$U.Provider, {
    value: s,
    children: t
  });
}
let te = 'asset_panel_virtualization--virtualRow--TxsS-';
let tt = 'asset_panel_virtualization--virtualRowFirst--mdR2j asset_panel_virtualization--virtualRow--TxsS-';
let ts = 'asset_panel_virtualization--virtualRowList--COnhA';
let tr = parsePxNumber(_$$Nz);
let tn = parsePxNumber(cP);
let ti = parsePxNumber(FX);
let tl = parsePxNumber($c);
let ta = parsePxNumber(d5);
let to = parsePxNumber(ZI);
let td = atom(!1);
function tc(e, t, s = {}) {
  if (t === 'list') return to;
  let r = e;
  s.hideAssetName || (r += tr);
  s.showFileName && (r += tn);
  s.hasTopPadding && (r += ti);
  s.showAiDebugScores && (r += 2 * parsePxNumber(uY));
  return r;
}
function tu(e, t, s, n, i, l, a) {
  let o = [];
  let d = n.displayType === 'list' ? 'listitem' : 'gridcell';
  for (let c = 0; c < e.length; c += t) {
    let u = e.slice(c, c + t);
    let p = [];
    u.forEach((e, o) => {
      if (e) {
        let u = c + o;
        let h = a?.getFileName?.(e);
        p.push(jsx('div', {
          role: d,
          children: jsx(e3, {
            asset: e,
            fileName: h,
            isExample: a?.isExample,
            isFirstTile: a?.includesFirstTile && u === 0,
            keyboardPanelDepth: a?.keyboardPanelDepth,
            keyboardPosition: pg(l, u, t, a?.hasHeader),
            sectionDepth: a?.depth,
            sectionNameForTracking: i,
            sectionPosition: c + o,
            ...n
          }, `${s}-${_$$V3(e)}`)
        }));
      }
    });
    o.push({
      element: jsx('div', {
        className: n.displayType === 'list' ? ts : c === 0 ? tt : te,
        children: p
      }),
      key: `${s}:row-${c / t}`,
      keys: u.map(e => _$$V3(e)),
      height: tc(n.thumbHeight, n.displayType, {
        showFileName: !!a?.getFileName,
        hasTopPadding: c !== 0,
        showAiDebugScores: !!getFeatureFlags().api_asset_search_with_scores
      })
    });
  }
  o.length > 0 && (o.unshift({
    element: jsx(hK, {
      height: tl
    }),
    key: `${s}:spacer-top`,
    height: tl,
    ariaHidden: !0
  }), o.push({
    element: jsx(hK, {
      height: ta
    }),
    key: `${s}:spacer-bottom`,
    height: ta,
    ariaHidden: !0
  }));
  return o;
}
function tp({
  elements: e,
  hideScrollbar: t,
  initialScrollTop: s,
  onScroll: i,
  anchorScroll: l,
  role: a
}) {
  let o = useRef(null);
  let d = Te({
    count: e.length,
    getScrollElement: () => o.current,
    estimateSize: t => e[t].height,
    getItemKey: t => e[t].key,
    paddingEnd: 8,
    overscan: 6,
    initialOffset: s
  });
  let c = function ({
    scrollContainerRef: e,
    initialScrollTop: t,
    onScroll: s,
    enabled: r,
    virtualizer: i,
    getKeys: l
  }) {
    let [a, o] = useState(t ?? e.current?.scrollTop);
    let [d, c] = useState(e.current?.scrollHeight);
    let {
      width
    } = e8();
    let p = useLatestRef(width);
    let h = useCallback((e, t) => {
      if (!t) {
        return {
          keys: [],
          offset: void 0
        };
      }
      let s = e.getVirtualItems().find(e => e.start >= t);
      return s ? {
        keys: l(s),
        offset: s.start - t
      } : {
        keys: [],
        offset: void 0
      };
    }, [l]);
    let [m, g] = useState(() => h(i, t ?? e.current?.scrollTop));
    let f = useCallback((e, t) => {
      s?.(e, t);
      r && (o(e), g(h(i, e)));
    }, [r, h, s, i]);
    useEffect(() => {
      let t = p && width && p !== width;
      let s = e.current?.scrollHeight && d && e.current?.scrollHeight !== d;
      if (t && c(e.current?.scrollHeight), void 0 !== a && void 0 !== m.offset && r && t && s) {
        let t = i.getVirtualItems().find(e => l(e).some(e => m.keys.includes(e)));
        if (t) {
          i.scrollToOffset(t.start - m.offset);
        } else {
          let t = a / d;
          let s = e.current.scrollHeight * t;
          i.scrollToOffset(s);
        }
      }
    }, [m.keys, m.offset, r, l, p, e, d, a, i, width]);
    return f;
  }({
    enabled: l,
    scrollContainerRef: o,
    initialScrollTop: s,
    onScroll: i,
    virtualizer: d,
    getKeys: useCallback(t => {
      let s = e[t.index];
      return s ? s.keys ?? [s.key] : [];
    }, [e])
  });
  let [u, p] = useAtomValueAndSetter(td);
  useEffect(() => {
    if (!u) return;
    let t = e.findIndex(e => e.key === 'preset_libraries_header');
    t !== -1 && (d.scrollToIndex(t, {
      align: 'start'
    }), p(!1));
  }, [e, d, p, u]);
  return jsx(xU, {
    scrollContainerRef: o,
    hideScrollbar: t,
    initialScrollTop: s,
    onScroll: c,
    children: jsx('div', {
      style: {
        height: `${d.getTotalSize()}px`,
        width: '100%',
        position: 'relative'
      },
      role: a,
      children: d.getVirtualItems().map(t => {
        let s = e[t.index];
        return s ? jsx('div', {
          'style': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            transform: `translateY(${t.start}px)`
          },
          'role': a === 'grid' ? 'row' : void 0,
          'aria-hidden': s.ariaHidden,
          'children': s.element
        }, t.key) : null;
      })
    })
  });
}
function tC(e) {
  let t = splitPath(e.name);
  let s = e.type === PrimaryWorkflowEnum.RESPONSIVE_SET ? e.containingFrame?.name : e.containing_frame?.name;
  return s ? [s, ...t] : t;
}
function tj(e, t = '', {
  isPreset: s,
  sortingFn: r
} = {
  isPreset: !1,
  sortingFn: void 0
}) {
  let n = new Map();
  let i = [];
  r ? e.sort(r) : gO(e, {
    sortFn: e => tC(e).join('/'),
    priorityFn: e => Nz(e, {
      isPreset: s
    })
  });
  let l = Object.create(null);
  for (let s of e) {
    let e = tC(s);
    let r = '';
    for (let a = 0; a < e.length; a++) {
      let o = e[a];
      let d = r;
      let c = a < e.length - 1;
      r += o + (c ? '/' : '');
      let u = null;
      if (l[d] && (u = l[d]), c) {
        let s = l[r] ?? {
          name: o,
          key: `${t}-${e.slice(0, a + 1).join('/')}`,
          items: [],
          subtrees: new Map(),
          type: _$$l$.NAME_GROUP,
          previewAsset: void 0
        };
        l[r] || (l[r] = s, u ? u.subtrees.set(o, s) : n.set(o, s));
      }
      c || (u ? u.items.push(s) : i.push(s));
    }
  }
  n.forEach(e => {
    (function e(t) {
      t.previewAsset = tT(t);
      t.subtrees.forEach(t => e(t));
    })(e);
  });
  return {
    sortedItems: i,
    sortedSubtrees: n
  };
}
function tv(e, t, {
  isPreset: s
}) {
  let r = new Map();
  let {
    itemsByPageId,
    pageNamesByPageId,
    itemsWithoutPage
  } = _$$tz(e, e => e);
  let {
    itemsByPageId: _itemsByPageId,
    pageNamesByPageId: _pageNamesByPageId,
    itemsWithoutPage: _itemsWithoutPage
  } = _$$tz(t, e => e);
  let c = {
    ...pageNamesByPageId,
    ..._pageNamesByPageId
  };
  fM(itemsByPageId, c, itemsWithoutPage);
  fM(_itemsByPageId, c, _itemsWithoutPage, !0);
  let u = Object.keys(c);
  for (let e of (gO(u, {
    sortFn: e => c[e],
    priorityFn: e => dS(c[e], {
      isPreset: s
    })
  }), u)) {
    let t = c[e];
    let i = e in itemsByPageId ? itemsByPageId[e] : void 0;
    let l = i;
    let o = [];
    let d = null;
    let u = null;
    if (i && i.length > 0) {
      l = i.filter(e => !Nz(e, {
        isPreset: s
      }));
      let {
        sortedItems,
        sortedSubtrees
      } = tj(o = i.filter(e => Nz(e, {
        isPreset: s
      })), 'examples', {
        isPreset: s
      });
      o.length > 0 && (u = {
        name: getI18nString('design_systems.assets_panel.examples'),
        items: sortedItems,
        subtrees: sortedSubtrees,
        key: _$$nE,
        type: _$$l$.COMPONENTS,
        previewAsset: void 0
      });
    }
    if (l && l.length > 0) {
      let {
        sortedItems,
        sortedSubtrees
      } = tj(l, 'components', {
        isPreset: s
      });
      d = {
        name: getI18nString('design_systems.assets_panel.components'),
        items: sortedItems,
        subtrees: sortedSubtrees,
        key: c_,
        type: _$$l$.COMPONENTS,
        previewAsset: void 0
      };
    }
    let p = null;
    let m = _itemsByPageId[e];
    if (m && m.length > 0) {
      let {
        sortedItems,
        sortedSubtrees
      } = tj(m, 'templates', {
        isPreset: s
      });
      p = {
        name: getI18nString('design_systems.assets_panel.templates'),
        items: sortedItems,
        subtrees: sortedSubtrees,
        key: JS,
        type: _$$l$.TEMPLATES,
        previewAsset: void 0
      };
    }
    let {
      sortedItems,
      sortedSubtrees
    } = tj([...(o ?? []), ...(l ?? []), ...(m ?? [])], 'assets', {
      isPreset: s
    });
    let x = {
      name: t,
      items: sortedItems,
      subtrees: sortedSubtrees,
      key: Mk,
      type: _$$l$.COMPONENTS,
      previewAsset: void 0
    };
    let y = {
      name: t,
      id: e,
      previewAsset: function ({
        componentSubtree: e,
        exampleSubtree: t,
        templateSubtree: s
      }) {
        let r = tT(t);
        let n = tT(s);
        let i = tT(e);
        return r || n || i;
      }({
        componentSubtree: d,
        exampleSubtree: u,
        templateSubtree: p
      }),
      components: d,
      examples: u,
      templates: p,
      assets: x,
      type: yW.DESIGN
    };
    r.set(e, y);
  }
  return r;
}
function tS(e, t, s, r) {
  let n = new Map();
  let {
    itemsByPageId,
    pageNamesByPageId,
    itemsWithoutPage
  } = _$$tz(e, e => ({
    containing_frame: e.containingFrame ?? void 0
  }));
  fM(itemsByPageId, pageNamesByPageId, itemsWithoutPage);
  let o = Object.keys(pageNamesByPageId);
  for (let e of (sortByWithOptions(o, e => pageNamesByPageId[e]), o)) {
    let r = pageNamesByPageId[e];
    let a = itemsByPageId[e] ?? [];
    if (!r || a.length === 0) continue;
    let {
      sortedItems,
      sortedSubtrees
    } = tj(a, 'assets', {
      sortingFn: s
    });
    let c = {
      name: r,
      items: sortedItems,
      subtrees: sortedSubtrees,
      key: Mk,
      type: _$$l$.RESPONSIVE_SETS,
      previewAsset: void 0
    };
    let u = {
      name: r,
      id: e,
      previewAsset: t[e] ?? tT(c),
      assets: c,
      type: yW.SITE,
      numAssets: function e(t) {
        return t.items.length + Array.from(t.subtrees.values()).reduce((t, s) => t + e(s), 0);
      }(c)
    };
    n.set(e, u);
  }
  if (r) {
    let e = _$$u2();
    if (e.length > 0) {
      let t = {
        name: getI18nString('design_systems.assets_panel.site_blocks.embeds'),
        id: 'embeds',
        embeds: e,
        previewAsset: void 0,
        assets: {
          name: '',
          items: [],
          subtrees: new Map(),
          key: 'EMPTY_ASSETS_NOT_USED',
          type: _$$l$.COMPONENTS,
          previewAsset: void 0
        },
        type: yW.SITE,
        numAssets: e.length
      };
      n.set('embeds', t);
    }
  }
  return n;
}
function tk(e, t) {
  let {
    allItems,
    publishedItems,
    privateItems,
    numPublished
  } = e;
  return numPublished > 0 && t && privateItems.length > 0 ? publishedItems : allItems;
}
function tw(e) {
  let t = Array.from(e.items.values());
  for (let [s, r] of e.subtrees.entries()) t.push(...tw(r));
  return t;
}
function tT(e) {
  let t = e ? tw(e) : [];
  return t.length > 0 ? t[0] : void 0;
}
let tE = createRemovableAtomFamily(() => createTrackedAtom(0));
function tM({
  libraryKey: e,
  pageId: t,
  folderPath: s
} = {}) {
  let {
    lastNavAction
  } = ZX();
  let i = lastNavAction === _$$r3.Back || lastNavAction === _$$r3.Mount || lastNavAction === _$$r3.ToggleView && !s;
  let [l, a] = useAtomValueAndSetter(tE('libraries'));
  let [o, d] = useAtomValueAndSetter(tE(`pages-${e}`));
  let [c, u] = useAtomValueAndSetter(tE(`assets-${e}-${t}-${(s ?? []).join('-')}`));
  return {
    librariesScrollTop: i ? l : 0,
    pagesScrollTop: i ? o : 0,
    assetsScrollTop: i ? c : 0,
    handleScrollLibraries: useCallback(e => {
      a(e);
    }, [a]),
    handleScrollPages: useCallback(t => {
      e && d(t);
    }, [d, e]),
    handleScrollAssets: useCallback(s => {
      e && t && u(s);
    }, [u, e, t])
  };
}
function tA({
  elementMinSize: e,
  spaceAvailable: t,
  gap: s
}) {
  return Math.max(1, Math.floor((t + s) / (e + s)));
}
function tP({
  numElements: e,
  spaceAvailable: t,
  gap: s
}) {
  return Math.floor((t - (e - 1) * s) / e);
}
function tL({
  width: e,
  widthToHeightRatio: t = 1,
  maxHeight: s
}) {
  let r = Math.floor(e / t);
  return void 0 === s ? Math.max(0, r) : Math.max(0, Math.min(s, r));
}
let tR = parsePxNumber(H0);
let tO = 2 * parsePxNumber(Mj);
let tD = {
  NORMAL: 115,
  WIDE: void 0,
  SMALL: 72
};
let tF = {
  minColumns: 2,
  maxColumns: 3,
  aspectRatio: 1,
  maxHeight: tD.NORMAL
};
let tB = {
  minColumns: 1,
  maxColumns: 1,
  aspectRatio: 3.25,
  maxHeight: tD.WIDE
};
let tK = {
  minColumns: 3,
  maxColumns: 5,
  aspectRatio: 1,
  maxHeight: tD.SMALL
};
let tG = e => {
  switch (e) {
    case _$$rp.WIDE:
      return tB;
    case _$$rp.SMALL:
      return tK;
    default:
      return tF;
  }
};
function tH(e, t) {
  let [s] = MA();
  let r = useMemo(() => t && s === 'grid' ? t : [], [s, t]);
  let i = useMemo(() => r.every(e => e.fullPage) ? 0.85 : Math.max(r.map(e => e.mainThumbnailInfo.width / e.mainThumbnailInfo.height).reduce((e, t) => Math.abs(t - 1) < Math.abs(e - 1) ? t : e), 0.7), [r]);
  let l = e - tO;
  let a = useMemo(() => tA({
    elementMinSize: 144,
    gap: tR,
    spaceAvailable: l
  }), [l]);
  let o = i > 1 ? 1 : Math.min(2, a);
  let d = useMemo(() => tP({
    numElements: o,
    gap: tR,
    spaceAvailable: l
  }), [o, l]);
  let c = useMemo(() => tL({
    width: d,
    widthToHeightRatio: i,
    maxHeight: void 0
  }), [i, d]);
  return s === 'list' || r.length === 0 ? {
    tileWidth: 40,
    tileHeight: 40,
    numColumns: 1
  } : {
    tileWidth: d,
    tileHeight: c,
    numColumns: o
  };
}
function tV() {
  let {
    width
  } = e8();
  let {
    componentLayouts,
    exampleLayout
  } = function ({
    sidebarWidth: e
  }) {
    let t = useMemo(() => e - tO, [e]);
    let s = useMemo(() => {
      let e = {};
      for (let s of [_$$rp.NORMAL, _$$rp.WIDE, _$$rp.SMALL]) {
        let {
          minColumns,
          maxColumns,
          aspectRatio,
          maxHeight
        } = tG(s);
        let a = Math.max(Math.min(maxColumns, tA({
          elementMinSize: maxHeight ?? t,
          gap: tR,
          spaceAvailable: t
        })), minColumns);
        let o = tP({
          numElements: a,
          gap: tR,
          spaceAvailable: t
        });
        let d = tL({
          width: o,
          maxHeight,
          widthToHeightRatio: aspectRatio
        });
        e[s] = {
          width: o,
          height: d,
          columns: a
        };
      }
      return e;
    }, [t]);
    let r = useMemo(() => Math.max(tA({
      elementMinSize: 200,
      gap: tR,
      spaceAvailable: t
    }), 1), [t]);
    let i = useMemo(() => tP({
      numElements: r,
      gap: tR,
      spaceAvailable: t
    }), [r, t]);
    let l = useMemo(() => tL({
      width: i,
      widthToHeightRatio: 1.5,
      maxHeight: 200
    }), [i]);
    return useMemo(() => ({
      componentLayouts: s,
      exampleLayout: {
        width: i,
        height: l,
        columns: r
      }
    }), [s, r, i, l]);
  }({
    sidebarWidth: width
  });
  let [r, i] = useMemo(() => {
    let e = {};
    let s = {};
    for (let [r, n] of Object.entries(componentLayouts)) {
      e[r] = {
        thumbHeight: n.height,
        thumbWidth: n.width,
        viewMode: Bk.Grid,
        thumbLayout: r,
        sourceForTracking: mZ,
        displayType: 'grid'
      };
      s[r] = n.columns;
    }
    return [e, s];
  }, [componentLayouts]);
  let l = useMemo(() => ({
    thumbHeight: exampleLayout.height,
    thumbWidth: exampleLayout.width,
    viewMode: Bk.Grid,
    thumbLayout: _$$rp.NORMAL,
    sourceForTracking: mZ,
    displayType: 'grid'
  }), [exampleLayout.height, exampleLayout.width]);
  let a = useMemo(() => ({
    thumbHeight: 40,
    thumbWidth: 40,
    viewMode: Bk.List,
    thumbLayout: _$$rp.NORMAL,
    sourceForTracking: mZ,
    displayType: 'list'
  }), []);
  return useMemo(() => ({
    componentTilePropsByLayout: r,
    numColumnsByLayout: i,
    listProps: a,
    exampleTileProps: l,
    numExampleColumns: exampleLayout.columns
  }), [r, i, a, l, exampleLayout.columns]);
}
function tU(e, t, s, r = !1) {
  return t === 'list' ? {
    props: e.listProps,
    numColumns: 1
  } : r ? {
    props: e.exampleTileProps,
    numColumns: e.numExampleColumns
  } : {
    props: e.componentTilePropsByLayout[s],
    numColumns: e.numColumnsByLayout[s]
  };
}
let t0 = parsePxNumber(_K);
function t1({
  asset: e,
  cmsCollectionMappings: t,
  sectionNameForTracking: s,
  sectionDepth: i,
  sectionPosition: a,
  keyboardPosition: o,
  isFirstTile: d = !1,
  keyboardPanelDepth: c = 0,
  thumbHeight: u,
  thumbWidth: h,
  libraryName: m,
  hideName: g = !1,
  onDragStart: f
}) {
  let x = getBasename(e.name);
  let {
    currentView,
    folderPath
  } = wV();
  let [b] = ye();
  let [C] = MA();
  let j = C === 'list';
  let v = jx();
  let S = t != null;
  let k = useMemo(() => ({
    ...o,
    path: [ON.CONTENTS, _$$lM.ASSETS + c, ...o.path]
  }), [o, c]);
  let w = currentView === S5.Assets && folderPath && b && (folderPath?.length ?? 0) > c;
  let {
    setKeyboardNavigationElement,
    keyboardNavigationItem
  } = M3({
    ...k,
    id: _$$V3(e),
    disabled: w
  });
  C0(keyboardNavigationItem, d && currentView === S5.Assets && !w);
  let {
    logInsert
  } = t3({
    item: e,
    sectionNameForTracking: s,
    sectionPosition: a,
    sourceForTracking: mZ,
    isList: j
  });
  let M = useCallback(() => {
    logInsert('drag');
    $z();
  }, [logInsert]);
  let A = useMemo(() => ({
    sourceForTracking: mZ,
    sectionNameForTracking: s,
    sectionDepth: i,
    afterSuccessfulInsert: M,
    onDragStart: f
  }), [s, i, M, f]);
  let P = function ({
    item: e,
    cmsCollectionMappings: t,
    sectionNameForTracking: s,
    sectionPosition: r,
    sourceForTracking: i,
    isList: l
  }) {
    let a = useDispatch();
    let {
      logInsert: _logInsert,
      logKeyboardInsert
    } = t3({
      item: e,
      sectionNameForTracking: s,
      sectionPosition: r,
      sourceForTracking: i,
      isList: l
    });
    let c = useCallback(() => {
      a(jR({
        item: e,
        cmsCollectionMappings: t,
        insertAsChildOfCanvas: !1,
        useSmartPositioning: !0
      }));
      $z();
    }, [a, e, t]);
    return useCallback(e => {
      let t = e.detail === 0;
      t && logKeyboardInsert();
      _logInsert(t ? 'keyboard' : 'click');
      c();
    }, [c, _logInsert, logKeyboardInsert]);
  }({
    item: e,
    cmsCollectionMappings: t,
    sectionNameForTracking: s,
    sectionPosition: a,
    sourceForTracking: mZ,
    isList: j
  });
  let L = useMemo(() => cleanAssetName(x), [x]);
  let {
    listProps
  } = tV();
  let O = useMemo(() => {
    if (g && !j && !S) {
      return {
        'data-tooltip-type': Ib.TEXT,
        'data-tooltip': L
      };
    }
  }, [L, g, j, S]);
  return jsxs(_$$E, {
    'className': j ? l()('asset_panel_responsive_set_tile--tileList--3j7Tn asset_panel_responsive_set_tile--_tileBase--NnHE4 asset_panel_tile--button--oNPUz', eZ) : l()('asset_panel_responsive_set_tile--tileGrid--C-Qj3 asset_panel_responsive_set_tile--_tileBase--NnHE4 asset_panel_tile--button--oNPUz', t2({
      isFirstTile: d,
      isInLibraryFlyout: v,
      isCmsBlock: S
    })),
    'ref': setKeyboardNavigationElement,
    'onClick': P,
    'aria-label': L,
    ...O,
    'children': [jsx('div', {
      className: l()(j ? e1 : e0, _$$s.relative.$),
      children: jsx(_$$lX, {
        alwaysShowBorder: !1,
        cmsCollectionMappings: t,
        displayType: j ? 'list-no-padding' : 'grid',
        draggable: A,
        height: j ? listProps.thumbHeight : u,
        item: e,
        sectionPosition: a,
        shouldHideTooltip: !0,
        showName: j,
        thumbPaddingGrid: t0,
        thumbWrapperClassName: 'asset_panel_responsive_set_tile--thumbWrapper--3Geap asset_panel_tile--thumbWrapper--bNG-Y',
        useBaseTile: !0,
        width: j ? listProps.thumbWidth : h
      })
    }), !g && !j && jsxs(Fragment, {
      children: [jsx('div', {
        className: eJ,
        style: {
          width: h - 2
        },
        children: jsx(_$$G2, {
          text: L
        })
      }), m && jsx('div', {
        style: {
          width: h - 2
        },
        children: jsx(_$$G2, {
          text: m,
          className: l()(eX, eq)
        })
      })]
    })]
  });
}
function t3({
  item: e,
  sectionNameForTracking: t,
  sectionPosition: s,
  sourceForTracking: r,
  isList: i
}) {
  let l = Nv(!0);
  let o = useCurrentFileKey();
  let d = _m();
  let c = Ew({
    assetKey: u2(e),
    assetLibraryKey: e.sourceLibraryKey,
    assetType: e.type,
    isList: i,
    sectionNameforTracking: t,
    sectionPosition: s,
    sourceForTracking: r ?? mZ,
    isExample: !1,
    partnerType: void 0
  });
  let u = _$$r4([e]);
  let p = CK();
  let h = !!c.searchSessionId;
  let m = useCallback(t => {
    let {
      type,
      sectionPosition,
      searchQuery,
      searchSessionId,
      ...o
    } = c;
    analyticsEventManager.trackDefinedEvent('asset_search.result_inserted', {
      ...o,
      aiResultsEnabled: l,
      assetType: type,
      position: sectionPosition,
      reciprocalRank: 1 / (1 + sectionPosition),
      query: searchQuery,
      sessionId: searchSessionId,
      entryPoint: mZ,
      componentSuggestionSessionId: p
    });
    analyticsEventManager.trackDefinedEvent('assets_panel.site_kit_inserted', {
      assetName: cleanAssetName(getBasename(e.name)),
      type: 'responsive set',
      group: u(e),
      isFullPage: e.fullPage,
      fileKey: c.fileKey,
      fileTeamId: c.fileTeamId,
      fileOrgId: c.fileOrgId,
      sectionPosition,
      searchQuery: c.searchQuery,
      searchSessionId: c.searchSessionId,
      searchType: h ? d ? 'site kit' : 'all' : void 0,
      viewMode: c.viewMode?.toLocaleLowerCase(),
      queryId: c.queryId,
      action: t
    });
  }, [c, l, p, e, u, h, d]);
  let f = useCallback(() => {
    analyticsEventManager.trackDefinedEvent('assets_panel.keyboard_insert', {
      ...c,
      aiResultsEnabled: l,
      assetsPanelVersion: 3,
      fileKey: o ?? void 0
    });
  }, [c, l, o]);
  return useMemo(() => ({
    logInsert: m,
    logKeyboardInsert: f
  }), [m, f]);
}
let t2 = ({
  isFirstTile: e,
  isInLibraryFlyout: t,
  isCmsBlock: s
}) => s ? 'x19y5rnk x12tve8b' : t ? e ? 'asset_panel_responsive_set_tile--gridWrapperForBlocksRedesignFirstTile--cxGGn asset_panel_responsive_set_tile--gridWrapperForBlocksRedesign---yy1K asset_panel_tile--gridWrapper--tUJe5 asset_panel_tile--wrapper--8uDli asset_panel_tile--_wrapperBase--ngLpF library_item_tile--_variantHover--xfLPt' : 'asset_panel_responsive_set_tile--gridWrapperForBlocksRedesign---yy1K asset_panel_tile--gridWrapper--tUJe5 asset_panel_tile--wrapper--8uDli asset_panel_tile--_wrapperBase--ngLpF library_item_tile--_variantHover--xfLPt' : eQ;
let sa = 2 * parsePxNumber(Mj);
let so = parsePxNumber('4px');
function sd({
  embeds: e
}) {
  let {
    thumbWidth,
    thumbHeight
  } = function () {
    let [e] = MA();
    let {
      width
    } = e8();
    let {
      listProps
    } = tV();
    if (e === 'list') {
      return {
        thumbWidth: listProps.thumbWidth,
        thumbHeight: listProps.thumbHeight
      };
    }
    let r = Math.floor(width - sa);
    let n = Math.floor(r / 2);
    return {
      thumbWidth: r,
      thumbHeight: n
    };
  }();
  return jsx(Fragment, {
    children: e.map((e, n) => jsx(sc, {
      embed: e,
      sectionPosition: n,
      keyboardPosition: {
        path: [ON.CONTENTS, _$$lM.ASSETS, n],
        column: null
      },
      thumbHeight,
      thumbWidth,
      isFirstTile: n === 0
    }, e.name))
  });
}
function sc({
  embed: e,
  sectionPosition: t,
  keyboardPosition: s,
  sectionNameForTracking: i = 'Site kit',
  isFirstTile: o = !1,
  thumbHeight: d,
  thumbWidth: c,
  libraryName: u,
  onDragStart: h
}) {
  let m;
  let [g] = MA();
  let f = g === 'list';
  let {
    currentView
  } = wV();
  let y = function (e, t, s) {
    let [r] = MA();
    let i = Ew({
      assetKey: e.name,
      assetLibraryKey: _$$l(Yl),
      assetType: 'embed',
      isList: r === 'list',
      sectionNameforTracking: s,
      sectionPosition: t,
      sourceForTracking: mZ,
      isExample: !1,
      partnerType: void 0
    });
    let l = _m();
    let o = CK();
    return useCallback(s => {
      analyticsEventManager.trackDefinedEvent('asset_search.result_inserted', {
        ...i,
        entryPoint: mZ,
        componentSuggestionSessionId: o
      });
      let r = !!i.searchSessionId;
      analyticsEventManager.trackDefinedEvent('assets_panel.site_kit_inserted', {
        assetName: e.name,
        type: 'embed',
        group: 'Embeds',
        fileKey: i.fileKey,
        fileTeamId: i.fileTeamId,
        fileOrgId: i.fileOrgId,
        sectionPosition: t,
        searchQuery: i.searchQuery,
        searchSessionId: i.searchSessionId,
        searchType: r ? l ? 'site kit' : 'all' : void 0,
        viewMode: i.viewMode?.toLocaleLowerCase(),
        queryId: i.queryId,
        action: s
      });
      s === 'keyboard' && analyticsEventManager.trackDefinedEvent('assets_panel.keyboard_insert', i);
    }, [i, e.name, l, t, o]);
  }(e, t, i);
  m = {
    resource: e,
    clickToInsert_DEPRECATED: !1,
    afterSuccessfulInsert: () => {
      y('drag');
      $z();
    },
    onDragStart: h
  };
  let {
    onInsertableResourcePointerDown,
    dragState
  } = _$$t4({
    ...m
  }, {
    insertAction: e => {
      let t = e.pointerPercentageOffset || new Point();
      sp(m.resource, e.dropPosition, t);
      return Promise.resolve();
    },
    dragPreviewPointerPosition: _$$N3.CENTERED,
    getDragPreviewSrc: () => m.resource.preview_url,
    onPointerDownCallback: () => {
      Fullscreen.setShowHTMLWidgetCanvasDragAndDropOutlines(!0, {
        x: m.resource.width,
        y: m.resource.height
      });
    },
    onPointerUpCallback: () => {
      Fullscreen.setShowHTMLWidgetCanvasDragAndDropOutlines(!1, null);
    },
    recordingKey: generateRecordingKey('html-widget', m.resource.name)
  });
  let C = _$$nc.user('insert-embed', onInsertableResourcePointerDown);
  let j = useMemo(() => ({
    ...s,
    path: [ON.CONTENTS, _$$lM.ASSETS, ...s.path]
  }), [s]);
  let {
    setKeyboardNavigationElement,
    keyboardNavigationItem
  } = M3({
    ...j
  });
  C0(keyboardNavigationItem, o && currentView === S5.Assets);
  let k = useCallback(t => {
    let s = fullscreenValue.getViewportInfo();
    sp(e, new Point(s.offsetX, s.offsetY), new Point(0.5, 0.5));
    y(t);
    $z();
  }, [e, y]);
  let w = useCallback(() => k('keyboard'), [k]);
  let N = useCallback(() => k('click'), [k]);
  let I = MB({
    onKeyDown: w,
    onClick: N
  });
  let E = f ? 'site_kit_embeds--buttonList--dJCdj site_kit_embeds--_buttonBase--PU9Mw asset_panel_tile--tileWrapperList--VMlzj asset_panel_tile--_tileWrapperBase--OAJqM library_item_tile--tileListLargeNoPadding--QnDtc library_item_tile--tile--okxBn library_item_tile--_variantHover--xfLPt library_item_tile--_tileListBase--jZpFH' : sm(o);
  let M = f ? vZ : 'site_kit_embeds--embedNameWrapper--7DR-c asset_panel_tile--nameWrapper--6O-iS';
  return jsxs(Fragment, {
    children: [jsx(sh, {
      dragState,
      opacityOverride: 0.5
    }), jsx(_$$n3.div, {
      onPointerDown: C,
      className: _$$s.flex.$$if(f, _$$s.wFull).$,
      children: jsxs(_$$E, {
        className: E,
        ref: setKeyboardNavigationElement,
        onClick: I,
        children: [jsx('div', {
          className: 'site_kit_embeds--thumbContainer--SgHWz',
          style: {
            width: c,
            height: d
          },
          children: jsx(oW, {
            src: e.thumbnail_url,
            className: 'site_kit_embeds--thumbnail---2jDe'
          })
        }), jsx('div', {
          className: l()(M, eq),
          style: f ? void 0 : {
            width: c - 2 - so
          },
          children: jsx(_$$G2, {
            text: e.name
          })
        }), u && !f && jsx('div', {
          style: {
            width: c - 2
          },
          children: jsx(_$$G2, {
            text: u,
            className: l()(eX, eq)
          })
        })]
      })
    })]
  });
}
let su = _$$P2('recently-used-site-embeds', 'name', _$$z.object({
  name: _$$z.string()
}), {
  transform: e => ({
    name: e.name
  })
});
function sp(e, t, s) {
  atomStoreManager.set(su, e);
  _$$l2.user('insert-embed', () => {
    Fullscreen.insertEmbed(e.initial_url, {
      x: t.x,
      y: t.y,
      percentOffsetX: s.x,
      percentOffsetY: s.y
    }, !1, {
      x: e.width,
      y: e.height
    });
    fullscreenValue.triggerAction('commit');
  });
}
function sh(e) {
  let t = e.dragState;
  if (!t?.dragPosition || !t?.grabbedPointerPercentageOffset) return null;
  let s = function (e) {
    let {
      draggingResource
    } = e;
    let {
      zoomScale,
      x
    } = fullscreenValue.getViewportInfo();
    let n = e.dragPosition?.x;
    return (!n || n < x) && e.draggingThumbSize ? e.draggingThumbSize : new Point(draggingResource.width, draggingResource.height).scale(zoomScale);
  }(t);
  let n = t.dragPosition;
  n = n.subtract(new Point(t.grabbedPointerPercentageOffset.x * s.x, t.grabbedPointerPercentageOffset.y * s.y));
  return createPortal(jsx('div', {
    className: l()(_$$Wy, {
      [_$$ce2]: t.isDraggingOverCanvas
    }),
    style: {
      left: n.x,
      top: n.y,
      width: s?.x,
      height: s?.y,
      maxWidth: t.draggingThumbMaxDimensions?.x || void 0,
      maxHeight: t.draggingThumbMaxDimensions?.y || void 0,
      zIndex: e.zIndexOverride,
      opacity: e.opacityOverride ? e.opacityOverride : 1
    },
    children: jsx(oW, {
      src: t.draggingResource.preview_url,
      alt: ''
    })
  }), document.getElementById('fullscreen-root'));
}
let sm = e => e ? 'site_kit_embeds--buttonGridForFirstItem--hvYlI site_kit_embeds--buttonGrid--iiN-l asset_panel_responsive_set_tile--gridWrapperForBlocksRedesign---yy1K asset_panel_tile--gridWrapper--tUJe5 asset_panel_tile--wrapper--8uDli asset_panel_tile--_wrapperBase--ngLpF library_item_tile--_variantHover--xfLPt site_kit_embeds--_buttonBase--PU9Mw asset_panel_responsive_set_tile--gridWrapperForBlocksRedesignFirstTile--cxGGn asset_panel_responsive_set_tile--gridWrapperForBlocksRedesign---yy1K asset_panel_tile--gridWrapper--tUJe5 asset_panel_tile--wrapper--8uDli asset_panel_tile--_wrapperBase--ngLpF library_item_tile--_variantHover--xfLPt' : 'site_kit_embeds--buttonGrid--iiN-l asset_panel_responsive_set_tile--gridWrapperForBlocksRedesign---yy1K asset_panel_tile--gridWrapper--tUJe5 asset_panel_tile--wrapper--8uDli asset_panel_tile--_wrapperBase--ngLpF library_item_tile--_variantHover--xfLPt site_kit_embeds--_buttonBase--PU9Mw';
let sg = parsePxNumber(HE);
let sf = parsePxNumber(_q);
let sx = parsePxNumber(RQ);
let sy = parsePxNumber($c);
let s_ = parsePxNumber(d5);
function sb({
  page: e,
  libraryKey: t,
  hideScrollbar: s
}) {
  let {
    assetsScrollTop,
    handleScrollAssets
  } = tM({
    libraryKey: t,
    pageId: e.id
  });
  let [a] = MA();
  let {
    width
  } = e8();
  let d = useMemo(() => tw(e.assets), [e.assets]);
  let {
    tileHeight,
    tileWidth,
    numColumns
  } = tH(width, d);
  let h = useMemo(() => {
    let e = [];
    e.push(...sS(d, numColumns, tileWidth, tileHeight, a, 'assets', 'Site kit', [_$$tM.COMPONENTS], {
      includesFirstTile: !0,
      hideName: !0
    }));
    return e;
  }, [d, a, numColumns, tileHeight, tileWidth]);
  return jsx(tp, {
    elements: h,
    hideScrollbar: s,
    initialScrollTop: assetsScrollTop,
    onScroll: handleScrollAssets,
    anchorScroll: !0,
    role: a
  });
}
function sC({
  subtree: e,
  currentFolderPath: t,
  hideScrollbar: s,
  onScroll: n,
  initialScrollTop: i,
  role: l
}) {
  let a = sj({
    subtree: e,
    currentFolderPath: t
  });
  return jsx(tp, {
    elements: a,
    hideScrollbar: s,
    onScroll: n,
    initialScrollTop: i,
    role: l
  });
}
let sj = ({
  subtree: e,
  currentFolderPath: t
}) => {
  let {
    folderPath
  } = wV();
  let [i] = MA();
  let {
    width
  } = e8();
  let {
    tileHeight,
    tileWidth,
    numColumns
  } = tH(width, e?.items);
  let c = t.join('/');
  let u = t.length;
  let p = folderPath?.length ?? 0;
  let h = useCallback(({
    subtree: e,
    elements: t
  }) => {
    let s = e.items.length > 0;
    if (s) {
      let s = [_$$tM.COMPONENTS];
      t.push(...sS(e.items, numColumns, tileWidth, tileHeight, i, e.key, 'Site kit', s, {
        includesFirstTile: u === p,
        keyboardPanelDepth: u,
        depth: u,
        hideName: !0
      }));
    }
    let n = Array.from(e.subtrees.values());
    s && n.length > 0 && t.push({
      element: jsx(cG, {}),
      key: 'divider',
      height: sx
    });
    n.forEach((s, n) => {
      t.push({
        element: jsx(ec, {
          subtree: s,
          index: n + e.items.length,
          keyPrefix: c,
          depth: u
        }),
        key: s.key,
        height: i === 'list' ? sg : sf
      });
    });
  }, [numColumns, tileWidth, tileHeight, u, p, c, i]);
  return useMemo(() => {
    let t = [];
    e && h({
      subtree: e,
      elements: t
    });
    return t;
  }, [h, e]);
};
function sv(e) {
  return e.type === PrimaryWorkflowEnum.RESPONSIVE_SET;
}
function sS(e, t, s, n, i, l, a, o, d = {}) {
  let c = [];
  for (let u = 0; u < e.length; u += t) {
    let p = e.slice(u, u + t);
    let h = [];
    p.forEach((e, i) => {
      let c = u + i;
      sv(e) ? h.push(jsx(t1, {
        asset: e,
        hideName: d.hideName,
        isFirstTile: d?.includesFirstTile && c === 0,
        keyboardPanelDepth: d?.keyboardPanelDepth,
        keyboardPosition: pg(o, c, t),
        libraryName: d.libraryNameForAsset?.(e),
        sectionDepth: d?.depth,
        sectionNameForTracking: a,
        sectionPosition: u + i,
        thumbHeight: n,
        thumbWidth: s
      }, `${l}-${_$$V3(e)}`)) : h.push(jsx(sc, {
        embed: e,
        sectionNameForTracking: a,
        sectionPosition: u + i,
        keyboardPosition: pg(o, c, t),
        isFirstTile: d?.includesFirstTile && c === 0,
        thumbHeight: n,
        thumbWidth: s,
        libraryName: d.libraryNameForAsset?.(e)
      }, e.name));
    });
    c.push({
      element: jsx('div', {
        className: i === 'list' ? ts : u === 0 ? tt : te,
        role: 'row',
        children: h
      }),
      key: `${l}:row-${u / t}`,
      keys: p.map(e => sv(e) ? _$$V3(e) : e.name),
      height: tc(n, i, {
        showFileName: !!d.libraryNameForAsset,
        hasTopPadding: u !== 0,
        showAiDebugScores: !!getFeatureFlags().api_asset_search_with_scores,
        hideAssetName: !!d.hideName
      })
    });
  }
  c.length > 0 && (c.unshift({
    element: jsx(hK, {
      height: sy
    }),
    key: `${l}:spacer-top`,
    height: sy
  }), c.push({
    element: jsx(hK, {
      height: s_
    }),
    key: `${l}:spacer-bottom`,
    height: s_
  }));
  return c;
}
function sk({
  children: e,
  index: t,
  width: s
}) {
  let i = useAtomWithSubscription(_$$h2);
  let a = useMemo(() => e.flat().filter(e => !!e), [e]);
  let o = useMemo(() => {
    let e = sw(-Math.min(t, a.length - 1));
    let s = `translateX(${e})`;
    return {
      transform: s,
      WebkitTransform: s
    };
  }, [a.length, t]);
  let d = l()('slide_carousel--container--1f4th', {
    'slide_carousel--noTransition--0heGr': i
  });
  return jsx('div', {
    'style': o,
    'data-testid': 'slide-carousel',
    'className': d,
    'children': a.map((e, n) => jsx('div', {
      'className': 'slide_carousel--item--w20ND',
      'style': {
        width: s
      },
      'data-testid': 'slide-carousel-item',
      'aria-hidden': n !== t,
      'inert': n !== t ? '' : void 0,
      'children': e
    }, n))
  });
}
let sw = e => `${100 * e}%`;
let sT = parsePxNumber(HE);
let sN = parsePxNumber(_q);
let sI = parsePxNumber(ce);
let sE = parsePxNumber(RQ);
function sM({
  page: e,
  width: t
}) {
  let {
    libraryKey,
    currentView
  } = wV();
  let {
    getPage
  } = _$$G();
  let {
    previousPageId
  } = RR();
  let o = useMemo(() => currentView === S5.Pages ? getPage(libraryKey, previousPageId) : e, [currentView, getPage, libraryKey, e, previousPageId]);
  return libraryKey && o ? jsx(sA, {
    libraryKey,
    page: o,
    width: t
  }) : jsx('div', {
    style: {
      width: t
    }
  });
}
function sA({
  libraryKey: e,
  page: t,
  width: s,
  hideScrollbar: n
}) {
  let [i] = ye();
  if (AZ(t)) {
    return jsx(sF, {
      page: t
    });
  }
  if (i) {
    return jsx(sL, {
      page: t,
      libraryKey: e,
      width: s,
      hideScrollbar: n
    });
  }
  switch (t.type) {
    case yW.DESIGN:
      return jsx(sP, {
        page: t,
        libraryKey: e
      });
    case yW.SITE:
      return jsx(sb, {
        page: t,
        libraryKey: e,
        hideScrollbar: n
      });
  }
}
function sP({
  page: e,
  libraryKey: t
}) {
  let {
    assetsScrollTop,
    handleScrollAssets
  } = tM({
    libraryKey: t,
    pageId: e.id
  });
  let [l] = MA();
  let a = tV();
  let {
    componentSectionNameForTracking,
    templateSectionNameForTracking
  } = zf();
  let c = useMemo(() => {
    let t = [];
    if (e.templates) {
      let s = tw(e.templates);
      let {
        props,
        numColumns
      } = tU(a, l, _$$rp.NORMAL, !0);
      t.push({
        element: jsx(X3, {
          title: getI18nString('design_systems.assets_panel.templates')
        }),
        key: 'templates:header',
        height: sI
      });
      t.push(...tu(s, numColumns, 'templates', props, templateSectionNameForTracking, [_$$tM.TEMPLATES], {
        includesFirstTile: !0
      }));
    }
    if (e.examples) {
      let s = tw(e.examples);
      let {
        props,
        numColumns
      } = tU(a, l, _$$rp.NORMAL, !0);
      t.push(...tu(s, numColumns, 'examples', props, componentSectionNameForTracking, [_$$tM.EXAMPLES], {
        includesFirstTile: !0,
        isExample: !0
      }));
    }
    if (e.components) {
      e.templates && t.push({
        element: jsx(X3, {
          title: getI18nString('design_systems.assets_panel.components')
        }),
        key: 'components:header',
        height: sI
      });
      let s = tw(e.components);
      let {
        props,
        numColumns
      } = tU(a, l, PI(s, !0));
      t.push(...tu(s, numColumns, 'components', props, componentSectionNameForTracking, [_$$tM.COMPONENTS], {
        includesFirstTile: !e.templates && !e.examples
      }));
    }
    return t;
  }, [e.templates, e.examples, e.components, a, l, templateSectionNameForTracking, componentSectionNameForTracking]);
  return jsx(tp, {
    elements: c,
    initialScrollTop: assetsScrollTop,
    onScroll: handleScrollAssets,
    anchorScroll: !0,
    role: l
  });
}
function sL({
  page: e,
  width: t,
  libraryKey: s,
  hideScrollbar: i
}) {
  let {
    folderPath
  } = wV();
  let {
    getFolder
  } = _$$G();
  let {
    previousFolderPath,
    previousPageId
  } = RR();
  let c = e.id;
  let [u, p] = useMemo(() => {
    let t = [];
    let n = previousFolderPath ?? folderPath ?? [];
    let u = 0;
    for (let o = -1; o < n.length; o++) {
      let p = n.slice(0, o + 1);
      let h = getFolder(s, c ?? previousPageId, p);
      if (h) {
        if (xc(h)) continue;
        t.push(jsx(sO, {
          page: e,
          libraryKey: s,
          currentFolderPath: p,
          hideScrollbar: i
        }, `components-${p ? p.join('/') : 'root'}`));
        o === (folderPath ?? []).length - 1 && (u = t.length - 1);
      }
    }
    return [t, u];
  }, [folderPath, getFolder, i, s, e, c, previousFolderPath, previousPageId]);
  return jsx(sk, {
    index: p,
    width: t,
    children: u
  });
}
function sR(e, t) {
  let s = e;
  for (let e of t) {
    let t = s.subtrees.get(e);
    if (!t) return null;
    s = t;
  }
  return s;
}
function sO({
  page: e,
  libraryKey: t,
  currentFolderPath: s,
  hideScrollbar: i
}) {
  let [l] = MA();
  let a = useMemo(() => e.type === yW.DESIGN ? sR(e.assets, s) : null, [s, e.assets, e.type]);
  let o = useMemo(() => e.type === yW.SITE ? sR(e.assets, s) : null, [s, e.assets, e.type]);
  let {
    folderPath
  } = wV();
  let c = fd(t);
  let u = e.id;
  let p = s.length;
  let h = folderPath?.length ?? 0;
  let {
    assetsScrollTop,
    handleScrollAssets
  } = tM({
    libraryKey: t,
    pageId: u,
    folderPath: s
  });
  switch (e.type) {
    case yW.DESIGN:
      return jsx(sD, {
        subtree: a,
        currentFolderPath: s,
        hideScrollbar: i || p < h,
        onScroll: handleScrollAssets,
        initialScrollTop: assetsScrollTop,
        role: l,
        isPreset: c
      });
    case yW.SITE:
      return jsx(sC, {
        subtree: o,
        currentFolderPath: s,
        hideScrollbar: i || p < h,
        onScroll: handleScrollAssets,
        initialScrollTop: assetsScrollTop,
        role: l
      });
  }
}
function sD({
  subtree: e,
  currentFolderPath: t,
  isPreset: s,
  hideScrollbar: n,
  onScroll: i,
  initialScrollTop: l,
  role: a
}) {
  let o = sB({
    subtree: e,
    currentFolderPath: t,
    isPreset: s
  });
  return jsx(tp, {
    elements: o,
    hideScrollbar: n,
    onScroll: i,
    initialScrollTop: l,
    role: a
  });
}
function sF({
  page: e
}) {
  let [t] = MA();
  return jsx(xU, {
    children: jsx('div', {
      className: t === 'grid' ? 'asset_panel_assets--embeds--kl79b' : _$$s.flex.flexColumn.itemsCenter.$,
      children: jsx(sd, {
        embeds: e.embeds
      })
    })
  });
}
let sB = ({
  subtree: e,
  currentFolderPath: t,
  isPreset: s
}) => {
  let i = tV();
  let {
    componentSectionNameForTracking
  } = zf();
  let {
    folderPath
  } = wV();
  let [o] = MA();
  let d = t.join('/');
  let c = t.length;
  let u = folderPath?.length ?? 0;
  let p = useMemo(() => !!(s && e?.items) && e?.items.every(e => Nz(e, {
    isPreset: s
  })), [s, e?.items]);
  let h = useCallback(e => {
    let t = e.subtrees.values().next().value;
    return t && dS(t.name, {
      isPreset: s
    });
  }, [s]);
  let m = useCallback(({
    subtree: e,
    elements: t
  }) => {
    let s = e.items.length > 0;
    let n = h(e);
    if (s) {
      let s = [_$$tM.COMPONENTS];
      let {
        props,
        numColumns
      } = tU(i, o, PI(e.items, !0), p);
      t.push(...tu(e.items, numColumns, e.key, props, componentSectionNameForTracking, s, {
        hasHeader: !1,
        includesFirstTile: c === u,
        keyboardPanelDepth: c,
        isExample: p
      }));
    }
    let a = Array.from(e.subtrees.values());
    s && a.length > 0 && !n && t.push({
      element: jsx(cG, {}),
      key: 'divider',
      height: sE,
      ariaHidden: !0
    });
    a.forEach((s, i) => {
      t.push({
        element: jsx(ec, {
          subtree: s,
          index: i + e.items.length,
          keyPrefix: d,
          depth: c
        }),
        key: s.key,
        height: o === 'list' ? sT : sN
      });
      i === 0 && n && a.length > 1 && t.push({
        element: jsx(cG, {}),
        key: 'examples_divider',
        height: sE,
        ariaHidden: !0
      });
    });
  }, [h, i, o, p, componentSectionNameForTracking, c, u, d]);
  return useMemo(() => {
    let t = [];
    e && m({
      subtree: e,
      elements: t
    });
    return t;
  }, [m, e]);
};
let sZ = 'asset-panel-library-context-menu';
let sQ = generateRecordingKey('assetsLibrary', 'contextMenu');
let s0 = ms;
let s1 = c$;
let s3 = memo(({
  dropdownShown: e,
  usePortal: t
}) => {
  let [{
    data: s
  }] = setupResourceAtomHandler(Re(e?.data?.partnerType));
  if (!e || e.type !== sZ) return null;
  let {
    data
  } = e;
  if (!data) return null;
  let {
    libraryHref,
    position,
    isLocalLibrary,
    hideUnsubscribe = !1,
    onGoToLibrary,
    onPublish,
    onUnsubscribe,
    onSendFeedback
  } = data;
  let m = isLocalLibrary ? jsx(s1, {
    onClick: onPublish,
    recordingKey: generateRecordingKey(sQ, 'publishLibrary'),
    children: renderI18nText('design_systems.assets_panel.publish_library')
  }) : null;
  let g = [m, hideUnsubscribe || isLocalLibrary ? null : jsx(s1, {
    onClick: onUnsubscribe,
    recordingKey: generateRecordingKey(sQ, 'unsubscribe'),
    children: renderI18nText('design_systems.assets_panel.remove_library_from_file')
  }), isLocalLibrary || !libraryHref ? null : jsx(s1, {
    href: libraryHref,
    target: '_blank',
    recordingKey: generateRecordingKey(sQ, 'goToLibrary'),
    onClick: onGoToLibrary,
    children: renderI18nText('design_systems.assets_panel.go_to_library')
  }), !isLocalLibrary && s ? jsx(s1, {
    href: s,
    target: '_blank',
    recordingKey: generateRecordingKey(sQ, 'sendFeedback'),
    onClick: onSendFeedback,
    children: renderI18nText('design_systems.assets_panel.send_feedback_to_creator')
  }) : null].filter(isNotNullish);
  if (!position || !g.length) return null;
  let f = jsxs(s0, {
    style: _$$sx2.add({
      top: `${position.top}px`,
      right: `${position.right}px`,
      bottom: `${position.bottom}px`,
      left: `${position.left}px`
    }).add(_$$sx2.fixed).$,
    children: [...g]
  });
  return t ? createPortal(f, document.body) : f;
});
let s4 = 'asset-panel-page-context-menu';
let s5 = generateRecordingKey('assetsLibrary', 'contextMenu');
let s6 = ms;
let s8 = c$;
let s7 = memo(({
  dropdownShown: e,
  usePortal: t
}) => {
  if (!e || e.type !== s4) return null;
  let {
    data
  } = e;
  if (!data) return null;
  let {
    libraryPageHref,
    position,
    isLocalLibrary,
    onClickLocalPage,
    onClickSubscribedPage
  } = data;
  if (!position) return null;
  let d = isLocalLibrary ? jsx(s8, {
    recordingKey: generateRecordingKey(s5, 'goToLibrary'),
    onClick: onClickLocalPage,
    children: renderI18nText('design_systems.assets_panel.go_to_page')
  }) : libraryPageHref ? jsx(s8, {
    href: libraryPageHref,
    target: '_blank',
    recordingKey: generateRecordingKey(s5, 'goToLibrary'),
    onClick: onClickSubscribedPage,
    children: renderI18nText('design_systems.assets_panel.go_to_page')
  }) : null;
  if (!d) return null;
  let c = jsx(s6, {
    style: _$$sx2.add({
      top: `${position.top}px`,
      right: `${position.right}px`,
      bottom: `${position.bottom}px`,
      left: `${position.left}px`
    }).add(_$$sx2.fixed).$,
    children: d
  });
  return t ? createPortal(c, document.body) : c;
});
function s9() {
  let e = useSelector(e => e.dropdownShown);
  let t = useSelector(_$$h4);
  let s = e?.type === _$$K2.ASSETS_PANEL && !!e?.data?.component;
  let i = e?.type === s4 && !!e?.data?.pageId;
  let l = e?.type === sZ && !!e?.data;
  let a = _$$K3(!0);
  let o = useContext(_$$U);
  return jsxs(Fragment, {
    children: [s && jsx(_$$h3, {
      selectedView: t,
      dropdownShown: e,
      onJumpToLocalComponent: a,
      onOpenFlyout: o?.onOpenFlyout,
      usePortal: !0
    }), i && jsx(s7, {
      dropdownShown: e,
      usePortal: !0
    }), l && jsx(s3, {
      dropdownShown: e,
      usePortal: !0
    })]
  });
}
let r_ = {
  loadTimeMs: 2e3,
  numSuggestions: 4
};
let rb = 'mockAutoSuggestConfig';
function rC() {
  return isDevEnvironment() && getFeatureFlags().anticipation_mock;
}
rC() ? window.mockAutoSuggestConfig = {
  get() {
    if (!rC()) return;
    let e = localStorage.getItem(rb);
    return e ? {
      ...r_,
      ...JSON.parse(e)
    } : r_;
  },
  set(e) {
    if (!rC()) return;
    let t = {
      ...this.get(),
      ...e
    };
    localStorage.setItem(rb, JSON.stringify(t));
  },
  reset() {
    rC() && localStorage.setItem(rb, JSON.stringify(r_));
  }
} : localStorage.removeItem(rb);
let rj = createTrackedAtom(new Map());
async function rv({
  targetNodeGuid: e
}) {
  if (!rC()) {
    return {
      suggestions: []
    };
  }
  let t = window.mockAutoSuggestConfig?.get();
  if (!t) {
    return {
      suggestions: []
    };
  }
  let s = atomStoreManager.get(rj);
  let r = s.get(e);
  if (!r) {
    let t = debugState.getState();
    let n = [...Object.values(t.library.publishedByLibraryKey.components).map(e => Object.values(e).map(e => Object.values(e))).flat(2), ...Object.values(t.library.publishedByLibraryKey.stateGroups).map(e => Object.values(e).map(e => Object.values(e))).flat(2)];
    if (n.length === 0) throw new Error('MOCK: COULD NOT FIND ANY ASSETS - maybe they are still loading?');
    r = n.sort(() => Math.random() - 0.5).map(e => ({
      ...e,
      suggestionSource: Ou.RECENTS
    }));
    let i = new Map(s);
    i.set(e, r);
    atomStoreManager.set(rj, i);
  }
  return await new Promise(e => {
    setTimeout(() => {
      e({
        suggestions: r.slice(0, t.numSuggestions)
      });
    }, t.loadTimeMs);
  });
}
let rw = e => e ? `${e.name} ${e.guid}` : 'NO TARGET';
async function rT(e) {
  return getFeatureFlags().anticipation_mock ? await rv({
    targetNodeGuid: e.targetNode.guid
  }) : await _$$A2(e);
}
let rM = 'asset_panel_recents--resultsWrapper--k79Vy';
let rA = 'asset_panel_recents--resultsWrapperList--peuzW';
let rL = S5.Libraries;
let rR = parsePxNumber(_$$$A2);
let rO = atom(0);
let rD = {
  statusIndicator: {
    width: 'xw4jnvo',
    height: 'x1qx5ct2',
    margin: 'xy3p2pi',
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    justifyContent: 'xl56j7k',
    borderRadius: 'x16rqkct',
    $$css: !0
  },
  statusIndicatorSeen: {
    backgroundColor: 'x1v8gsql',
    color: 'x1n0bwc9',
    $$css: !0
  },
  statusIndicatorUnseen: {
    backgroundColor: 'xcr9a89',
    color: 'x1fgql6j',
    $$css: !0
  }
};
function rF({
  suggestions: e,
  analyticsData: t,
  hasLibraries: s,
  subscribedLibraries: i
}) {
  let l = rH();
  let a = Xr(_$$a);
  let o = useCallback(() => {
    gb(t, _$$GG.RESULT_INSERTED, _$$qd.ASSET_PANEL);
  }, [t]);
  let d = tV();
  let c = useMemo(() => {
    let e = {};
    i?.forEach(t => {
      e[t.libraryKey] = t.name;
    });
    return e;
  }, [i]);
  let u = useMemo(() => {
    let {
      props,
      numColumns
    } = tU(d, $H.GRID, _$$rp.NORMAL);
    return e.map((e, n) => jsx(e3, {
      asset: e,
      fileName: c ? c[e.library_key] : '',
      sectionPosition: n,
      keyboardPosition: pg([ON.SUGGESTIONS], n, numColumns),
      onSuccessfulAssetInsert: o,
      ...props,
      sourceForTracking: _$$tM3
    }, `${e.id}-${n}`));
  }, [e, d, c, o]);
  useEffect(() => {
    e.length > 0 && t.queryId && (gb(t, _$$GG.RESULTS_SHOWN, _$$qd.ASSET_PANEL), a());
  }, [e, t, a]);
  let p = renderI18nText('auto_suggest.asset_panel.no_libraries');
  let m = renderI18nText('auto_suggest.suggestion_shelf_no_suggestions');
  let g = jsx('div', {
    className: 'xh8yej3 x1iyjqo2 x1r8uery x1l90r2v',
    children: jsx('div', {
      className: rM,
      children: u
    })
  });
  NB();
  return jsx('div', {
    className: 'x78zum5 xdt5ytf x6s0dn4 xl56j7k',
    style: {
      minHeight: l
    },
    children: s ? u.length > 0 ? g : m : p
  });
}
function rB() {
  let e;
  let {
    width
  } = e8();
  let s = He().size > 0;
  let i = !s;
  let l = je();
  let a = useRef(null);
  let {
    suggestions,
    isLoading,
    analyticsData,
    debugString,
    isInitialized
  } = function (e = !1) {
    let t = function (e) {
      getInitialOptions().anticipation_config || (getInitialOptions().anticipation_config = PV);
      let t = getInitialOptions().anticipation_config.dominantFrameConfig;
      return function ({
        targetNodeGuid: e,
        disabled: t
      }) {
        let [{
          suggestions: s,
          analyticsData: r
        }, i] = useAtomValueAndSetter(_$$P3);
        let {
          isLoaded
        } = _$$y();
        let a = function () {
          let {
            isLoaded: _isLoaded
          } = _$$y();
          return {
            isLoaded: _isLoaded,
            assets: g5(_$$$A.Design).productComponents.map(e => ({
              ...e,
              suggestionSource: Ou.RECENTS
            }))
          };
        }();
        let o = useMemo(() => isLoaded && a.isLoaded, [isLoaded, a.isLoaded]);
        let [d, c] = useState(o);
        useEffect(() => {
          !d && o && (c(!0), s.length === 0 && i({
            suggestions: a.assets,
            analyticsData: YQ
          }));
        }, [o, a, d, s.length, i]);
        let {
          suggestions: _suggestions,
          analyticsData: _analyticsData,
          isLoading: _isLoading,
          suggestionsNodeGuid,
          debugString: _debugString
        } = function ({
          targetNodeGuid: e,
          disabled: t
        }) {
          let [s, r] = useState([]);
          let [i, l] = useState(`${e} - INIT`);
          let [a, o] = useState(YQ);
          let [d, c] = useState(!1);
          let [u, p] = useState(void 0);
          let h = useCurrentFileKey();
          let m = He();
          let x = _$$r5();
          useEffect(() => {
            if (t || !x) return;
            let s = getSingletonSceneGraph();
            let n = e ? s.get(e) : void 0;
            let i = new AbortController();
            if (n && h) {
              if (n && b4.includes(n.type)) {
                c(!0);
                r([]);
                p(n.guid);
                l(`${rw(n)} - STARTED`);
                let e = {
                  fileKey: h,
                  queryId: generateUUIDv4(),
                  selectionId: n?.guid
                };
                o(e);
                let t = k1();
                let s = new _$$O({
                  analyticsData: e,
                  config: t,
                  entryPoint: _$$qd.ASSET_PANEL
                });
                let {
                  signal
                } = i;
                let d = new _$$I3(ComponentPanelTab.COMPONENTS, i);
                rT({
                  targetNode: n,
                  openFileKey: h,
                  signal,
                  subscribedLibraryKeys: m,
                  autoSuggestSession: d,
                  logger: s,
                  config: t
                }).then(({
                  suggestions: e
                }) => {
                  signal.aborted || r(e);
                }).catch(e => {
                  if (logError('auto_suggest', 'Error fetching suggestions', {
                    error: e
                  }), e.name === 'AbortError') {}
                }).$$finally(() => {
                  signal.aborted || (c(!1), l(`${rw(n)} - FINISHED`));
                  try {
                    d.destroy();
                  } catch (e) {}
                });
              } else {
                n && (c(!1), r([]), p(n.guid), l(`${rw(n)} - INVALID TARGET`));
              }
            } else {
              r([]);
              l(`${rw(n)} - NO TARGET/OPEN FILE`);
              c(!1);
              p(void 0);
              o(YQ);
            }
            return () => {
              i && i.abort();
            };
          }, [e, t, h, m, x]);
          return {
            suggestions: s,
            isLoading: d,
            analyticsData: a,
            suggestionsNodeGuid: u,
            debugString: i
          };
        }({
          targetNodeGuid: e,
          disabled: t
        });
        useEffect(() => {
          _suggestions.length > 0 && i({
            suggestions: _suggestions,
            analyticsData: _analyticsData
          });
        }, [_suggestions, _analyticsData, i]);
        let y = _$$r5();
        return t || !y ? {
          suggestions: [],
          analyticsData: YQ,
          isLoading: !1,
          isInitialized: !1,
          suggestionsNodeGuid: void 0,
          debugString: ''
        } : {
          suggestions: s,
          analyticsData: r,
          isLoading: _isLoading,
          isInitialized: d || s.length > 0,
          suggestionsNodeGuid,
          debugString: _debugString
        };
      }({
        targetNodeGuid: function ({
          selectedNode: e,
          config: t,
          disabled: s
        }) {
          let r = !getFeatureFlags().anticipation;
          let [i, l] = useState(void 0);
          let {
            debouncedViewportInfo,
            viewportIsStable
          } = pJ(r);
          let d = !!e && b4.includes(e.type) && Mw(e, debouncedViewportInfo, 0.4);
          let c = pW(debouncedViewportInfo, s || r || d, t);
          useEffect(() => {
            if (viewportIsStable && !r) {
              if (d) {
                l(e.findContainingFragmentOrSelf());
                return;
              }
              l(c);
            }
          }, [c, d, e, r, viewportIsStable]);
          return i;
        }({
          selectedNode: Vr(),
          config: t,
          disabled: e
        }),
        disabled: e
      });
    }(e);
    return e ? {
      suggestions: [],
      analyticsData: YQ,
      isLoading: !1,
      isInitialized: !1,
      suggestionsNodeGuid: void 0,
      debugString: ''
    } : t;
  }(i);
  let m = Xr(rO);
  let x = rH();
  let y = getObservableValue(AppStateTsApi?.editorPreferences().showAssetAutoSuggest, !0);
  let [_, b] = useState(null);
  let C = y && suggestions.length > 0 && s && isInitialized || !!_;
  let j = useCallback(() => {
    let e = !C;
    AppStateTsApi?.editorPreferences().showAssetAutoSuggest.set(e);
    b(e);
    gb(analyticsData, e ? _$$GG.PANEL_OPENED : _$$GG.PANEL_CLOSED, _$$qd.ASSET_PANEL);
  }, [C, analyticsData]);
  useEffect(() => {
    if (a.current?.clientHeight) {
      m(a.current?.clientHeight);
    } else {
      let e = rR + 8;
      C && (e += x);
      getFeatureFlags().anticipation_trigger_debug && (e += 16);
      m(e);
    }
  }, [C, x, m]);
  let {
    currentView
  } = wV();
  let S = currentView === S5.Libraries ? 0 : 1;
  let k = useAtomWithSubscription(_$$a);
  i || (!isInitialized || C && isLoading || C && l.status === 'loading' ? e = jsx(_$$k2, {
    size: 'md'
  }) : C || (e = jsx('div', {
    ...xk(rD.statusIndicator, k ? rD.statusIndicatorSeen : rD.statusIndicatorUnseen),
    children: suggestions.length
  })));
  return jsxs('div', {
    className: 'x1n5zjp5 x1e56ztr',
    ref: a,
    children: [jsx(_$$B, {
      children: jsxs(_$$H2, {
        children: [jsxs(_$$E, {
          onClick: j,
          className: 'x1iyjqo2',
          children: [jsx(_$$g2, {
            isExpanded: C
          }), renderI18nText('auto_suggest.asset_panel.title')]
        }), jsx('div', {
          className: 'x78zum5 x6s0dn4',
          children: e
        })]
      })
    }), C && jsxs(sk, {
      index: S,
      width,
      children: [jsx('div', {
        children: jsx(rF, {
          suggestions,
          analyticsData,
          hasLibraries: s,
          subscribedLibraries: l.data
        })
      }), jsx('div', {})]
    }), getFeatureFlags().anticipation_trigger_debug && jsx('div', {
      className: 'xh8yej3 xlup9mm xw2csxc x10wlt62',
      children: debugString
    })]
  });
}
function rK() {
  let e = _$$r5();
  let {
    currentView
  } = wV();
  return e && currentView === rL;
}
function rG() {
  let e = rK();
  return (function () {
    let e = useAtomWithSubscription(W9);
    let t = useLatestRef(e);
    let {
      suggestions,
      analyticsData
    } = useAtomWithSubscription(_$$P3);
    let {
      currentView
    } = wV();
    let l = useLatestRef(currentView);
    useEffect(() => {
      !1 === t && !0 === e && suggestions.length > 0 && analyticsData.queryId && l === rL && gb(analyticsData, _$$GG.STARTED_SEARCH, _$$qd.ASSET_PANEL);
    }, [t, e, suggestions, analyticsData, l]);
  }(), e) ? jsx(rB, {}) : null;
}
function rH() {
  let e = tV();
  return Math.max(useMemo(() => {
    let t = e.numColumnsByLayout[_$$rp.NORMAL];
    return Math.ceil(_$$lS / t) * (tc(e.componentTilePropsByLayout[_$$rp.NORMAL].thumbHeight, $H.GRID, {
      showFileName: !0
    }) + 16);
  }, [e]), 150);
}
let rY = r$;
function r4() {
  _$$K5();
  let {
    subscribedFileDataByLibraryKey,
    hubFilesByLibraryKey
  } = _$$N4();
  let s = useSelector(selectOpenFile);
  let r = useSelector(_$$e_);
  let i = useSelector(MH);
  let l = useSelector(dM);
  let a = useSelector(selectTeams);
  let o = _$$n4();
  let d = Fl();
  let c = useAtomWithSubscription(_$$lj);
  let u = useMemo(() => s?.teamId ? a[s.teamId] : null, [s?.teamId, a]);
  let p = useMemo(() => !!u && w5(u), [u]);
  let m = useMemo(() => Sg(i, l), [i, l]);
  let f = $1({
    library: r,
    fileDataByLibraryKey: subscribedFileDataByLibraryKey
  });
  let x = oV({
    library: r,
    hubFilesByLibraryKey,
    visualAssetLibraryKeys: c
  });
  let y = useMemo(() => o ? x : null, [o, x]);
  let {
    url,
    shouldCover
  } = _$$t5();
  let C = Nn();
  let j = useMemo(() => {
    let e = [];
    for (let t of C) t.data && e.push(t.data);
    return e;
  }, [C]);
  let v = fi();
  let S = Bv();
  let k = useAtomWithSubscription(TG);
  return useMemo(() => function ({
    localComponentsInfo: e,
    localTemplatesInfo: t,
    localThumbnailUrl: s,
    localThumbnailShouldCover: r,
    subscribedComponentsInfo: n,
    subscribedCommunityComponentsInfo: i,
    canPublish: l,
    openFileKey: a,
    openFileLibraryKey: o,
    approvedLibraryKeysByResourceType: d,
    siteKitsAssetData: c,
    siteKitThumbnailComponents: u,
    siteKitSortingFn: p,
    presetLibraryKeys: m
  }) {
    let {
      libraryKeyToSubscribedItems,
      subscribedFiles
    } = n;
    let x = function ({
      subscribedFiles: e,
      libraryKeyToSubscribedComponents: t,
      approvedLibraryKeysByResourceType: s
    }) {
      let r = new Map();
      for (let n of uo(e, s)) {
        if (!n.library_key) continue;
        let e = _$$l(n.library_key);
        let s = t[e] ?? [];
        let i = tv(s, [], {
          isPreset: !1
        });
        let l = {
          name: n.name,
          libraryKey: _$$l(n.library_key ?? ''),
          pages: i,
          numComponents: s.length,
          numTemplates: 0,
          thumbnailUrl: n.thumbnail_url_override ?? n.thumbnail_url,
          thumbnailShouldCover: !!n.thumbnail_guid,
          type: yW.DESIGN,
          libraryType: 'team'
        };
        r.set(e, l);
      }
      return r;
    }({
      subscribedFiles: [...subscribedFiles],
      libraryKeyToSubscribedComponents: libraryKeyToSubscribedItems,
      approvedLibraryKeysByResourceType: d
    });
    let y = function (e, t) {
      if (!e) return new Map();
      let {
        libraryKeyToSubscribedItems: _libraryKeyToSubscribedItems,
        subscribedHubFiles
      } = e ?? {
        hubFileIdToSubscribedItems: {},
        subscribedHubFiles: []
      };
      let n = new Map();
      for (let e of LH(subscribedHubFiles)) {
        if (!e.library_key) continue;
        let r = _$$l(e.library_key);
        let i = _libraryKeyToSubscribedItems[r] ?? [];
        let l = tv(i, [], {
          isPreset: t.has(e.library_key)
        });
        if (i.length > 0) {
          let t = {
            name: oA(e),
            libraryKey: _$$l(e.library_key ?? ''),
            pages: l,
            numComponents: i.length,
            numTemplates: 0,
            thumbnailUrl: e.thumbnail_url,
            thumbnailShouldCover: !0,
            type: yW.DESIGN,
            libraryType: 'community'
          };
          n.set(r, t);
        }
      }
      return n;
    }(i, m);
    let _ = function (e, t, s, r, n, i, l, a) {
      let {
        privateItems,
        numPublished
      } = e;
      let {
        privateItems: _privateItems,
        numPublished: _numPublished
      } = t ?? {
        privateItems: [],
        numPublished: 0
      };
      let p = numPublished + _numPublished > 0 && n && privateItems.length + _privateItems.length > 0;
      let m = tk(e, n);
      let g = t ? tk(t, n) : [];
      let f = !!a?.has(l);
      let x = tv(m, g, {
        isPreset: f
      });
      let y = {
        name: getI18nString('design_systems.assets_panel.created_in_this_file'),
        libraryKey: l,
        pages: x,
        numComponents: m.length,
        numTemplates: g.length,
        thumbnailUrl: s,
        thumbnailShouldCover: r,
        type: yW.DESIGN,
        libraryType: 'team'
      };
      if (p) {
        let e = null;
        if (privateItems.length > 0) {
          let {
            sortedItems,
            sortedSubtrees
          } = tj(privateItems, 'p_components', {
            isPreset: f
          });
          e = {
            name: getI18nString('design_systems.assets_panel.components'),
            items: sortedItems,
            subtrees: sortedSubtrees,
            key: c_,
            type: _$$l$.COMPONENTS,
            previewAsset: void 0
          };
        }
        let t = null;
        if (_privateItems.length > 0) {
          let {
            sortedItems,
            sortedSubtrees
          } = tj(_privateItems, 'p_templates', {
            isPreset: f
          });
          t = {
            name: getI18nString('design_systems.assets_panel.templates'),
            items: sortedItems,
            subtrees: sortedSubtrees,
            key: JS,
            type: _$$l$.TEMPLATES,
            previewAsset: void 0
          };
        }
        let {
          sortedItems,
          sortedSubtrees
        } = tj([...(privateItems ?? []), ...(_privateItems ?? [])], 'assets', {
          isPreset: f
        });
        let n = {
          name: getI18nString('design_systems.assets_panel.assets'),
          items: sortedItems,
          subtrees: sortedSubtrees,
          key: Mk,
          type: _$$l$.COMPONENTS,
          previewAsset: void 0
        };
        let i = {
          name: getI18nString('design_systems.assets_panel.hidden'),
          id: o8,
          previewAsset: privateItems[0] ?? _privateItems[0],
          components: e,
          examples: null,
          templates: t,
          assets: n,
          type: yW.DESIGN
        };
        y.pages.set(o8, i);
      }
      return y;
    }(e, t, s, r, l, 0, o, m);
    let b = new Map([...x, ...y]);
    b.set(_.libraryKey, _);
    let C = null;
    if (c) {
      for (let e of (C = new Map(), c)) {
        let t = Pv(e);
        if (!t) continue;
        let s = t.library.libraryKey;
        let r = tS(t.assets, u[s] ?? {}, p, s === Yl);
        let n = {
          ...t.library,
          pages: r
        };
        C.set(s, n);
        b.set(s, n);
      }
      let e = _$$V4();
      if (e) {
        let t = tS([], {}, p, !0);
        let s = {
          ...e,
          pages: t
        };
        C.set(_$$l(Yl), s);
        b.set(_$$l(Yl), s);
      }
    }
    return {
      localAssets: _,
      libraries: x,
      presets: y,
      siteKits: C,
      allLibrariesUnsorted: b
    };
  }({
    localComponentsInfo: m,
    localThumbnailUrl: url,
    localThumbnailShouldCover: shouldCover,
    subscribedComponentsInfo: f,
    subscribedCommunityComponentsInfo: y ?? void 0,
    canPublish: p,
    openFileKey: s?.key ?? '',
    openFileLibraryKey: _$$l(s?.libraryKey ?? ''),
    approvedLibraryKeysByResourceType: d,
    siteKitsAssetData: j.length > 0 ? j : void 0,
    siteKitThumbnailComponents: v,
    siteKitSortingFn: S,
    presetLibraryKeys: k
  }), [m, url, shouldCover, p, s?.key, s?.libraryKey, d, j, v, S, f, y, k]);
}
let r6 = 'asset_panel_collapsible_breadcrumb--buttonStub--4S8VP asset_panel_collapsible_breadcrumb--_buttonStubBase--aj18P';
let r8 = 'asset_panel_collapsible_breadcrumb--libraryStubStatic--VAyz1 asset_panel_collapsible_breadcrumb--_buttonStubBase--aj18P asset_panel_collapsible_breadcrumb--_libraryStubBase--y4862';
let r7 = 'asset_panel_collapsible_breadcrumb--allLibraries--6vL0- asset_panel_collapsible_breadcrumb--libraryStubStatic--VAyz1 asset_panel_collapsible_breadcrumb--_buttonStubBase--aj18P asset_panel_collapsible_breadcrumb--_libraryStubBase--y4862';
function r9({
  stubs: e
}) {
  let {
    collapsibleStubs,
    lastStub,
    numHiddenStubs,
    breadcrumbRef,
    ellipsisRef,
    stubRefs
  } = ne(e);
  let d = useCallback(() => ellipsisRef.current ? {
    top: ellipsisRef.current.getBoundingClientRect().bottom,
    left: ellipsisRef.current.getBoundingClientRect().left
  } : {
    top: 0,
    left: 0
  }, [ellipsisRef]);
  let c = numHiddenStubs === collapsibleStubs.length;
  return jsxs('div', {
    'className': _$$s.flex.itemsCenter.overflowHidden.flexShrink1.flexGrow1.$,
    'style': _$$sx2.add({
      flexBasis: 'content'
    }).$,
    'ref': breadcrumbRef,
    'role': 'navigation',
    'data-onboarding-key': we,
    'children': [jsx(nr, {
      shouldEllipsize: c
    }), numHiddenStubs > 0 && jsx(ns, {
      allStubs: collapsibleStubs,
      numHiddenStubs,
      getDropdownTarget: d,
      ref: ellipsisRef
    }), collapsibleStubs.map((e, t) => t < numHiddenStubs ? null : jsx(nn, {
      i: t,
      name: e,
      ref: e => stubRefs.current[t] = e
    }, t)), e.length > 0 ? jsx(ni, {
      name: lastStub,
      firstSlash: collapsibleStubs.length === 0,
      shouldEllipsize: c
    }) : null]
  });
}
let ne = e => {
  let [t, s] = useMemo(() => e.length === 0 ? [[], void 0] : [e.slice(0, -1), e[e.length - 1]], [e]);
  let [r, i] = useState([]);
  let l = useRef([]);
  useEffect(() => {
    l.current.length > t.length && (l.current = l.current.slice(0, t.length));
    r.length > t.length && i(e => e.slice(0, t.length));
  }, [t, r.length, e.length]);
  let a = useRef(null);
  let o = useRef(null);
  let {
    width
  } = e8();
  useLayoutEffect(() => {
    let e = a.current;
    if (!e) return;
    let t = e.children;
    let s = e.offsetWidth - rY()(Array.from(t).map(e => e.scrollWidth));
    if (s < 0) {
      let e = l.current[r.length];
      e && i(t => [...t, e.scrollWidth]);
    } else if (s === 0) {} else if (r.length > 0) {
      let e = r.length - 1;
      s > r[e] - (o.current && r.length === 1 ? o.current.scrollWidth : 0) && i(e => e.slice(0, -1));
    }
  }, [r, l, e, width]);
  return {
    collapsibleStubs: t,
    lastStub: s,
    numHiddenStubs: r.length,
    breadcrumbRef: a,
    ellipsisRef: o,
    stubRefs: l
  };
};
let nt = 'asset-panel-ellipsis-menu';
let ns = forwardRef(({
  numHiddenStubs: e,
  allStubs: t,
  getDropdownTarget: s
}, i) => {
  let a = _$$sN();
  let o = Um();
  let d = o?.type === nt;
  let c = useDispatch();
  let u = useCallback(() => c(oB()), [c]);
  let h = useCallback(() => c(j7({
    type: nt,
    data: {
      position: s()
    }
  })), [c, s]);
  let {
    isCurrentlySkippingPage,
    isCurrentlySkippingFirstFolder,
    navigateBackToPathIndex
  } = wV();
  let x = useMemo(() => t.slice(0, e), [t, e]);
  let y = useMemo(() => x.join(' / '), [x]);
  let _ = useMemo(() => {
    if (d) return o.data?.position;
  }, [o?.data?.position, d]);
  let b = useCallback(e => {
    a('breadcrumb', navigateBackToPathIndex(na(e, isCurrentlySkippingPage, isCurrentlySkippingFirstFolder)));
  }, [isCurrentlySkippingFirstFolder, isCurrentlySkippingPage, a, navigateBackToPathIndex]);
  let {
    focusBackButton,
    focusSearchBar
  } = _$$rl();
  let v = NR({
    onBoth: e => () => {
      b(e);
    },
    onKeyDown: () => () => {
      setTimeout(() => focusBackButton(), 0);
    },
    onClick: () => focusSearchBar
  });
  let {
    setKeyboardNavigationElement
  } = M3({
    path: [ON.BREADCRUMB],
    column: Yv.ELLIPSIS
  });
  let k = l()(r6, {
    'asset_panel_collapsible_breadcrumb--dropdownOpen--YMRPh': d
  });
  return jsxs('div', {
    children: [jsxs('div', {
      ref: i,
      className: _$$s.flex.itemsCenter.$,
      children: [jsx(nl, {}), jsx('button', {
        'ref': setKeyboardNavigationElement,
        'className': k,
        'onClick': h,
        'data-tooltip-type': Ib.TEXT,
        'data-tooltip': y,
        'aria-label': y,
        'aria-haspopup': 'listbox',
        'aria-expanded': d,
        'children': '\u2026'
      })]
    }), d && createPortal(jsx(_$$X, {
      className: Dm,
      positionAbsolute: !0,
      style: _,
      id: 'asset-panel-ellipsis-menu',
      hideDropdown: u,
      autofocusPrevElementOnEsc: !0,
      children: x.map((e, t) => jsx(c$, {
        onClick: v(t),
        children: e
      }, e))
    }), document.body)]
  });
});
function nr({
  shouldEllipsize: e
}) {
  let t = useOpenFileLibraryKey();
  let {
    allLibrariesByLibraryKey
  } = _$$g3();
  let {
    currentView,
    libraryKey,
    visualAssetsType,
    navigateToLibrary,
    isCurrentlySkippingPage,
    isCurrentlySkippingFirstFolder,
    folderPath
  } = wV();
  let {
    setLastNavAction
  } = ZX();
  let {
    focusBackButton,
    focusSearchBar
  } = _$$rl();
  let _ = function () {
    let {
      libraries,
      siteLibraries,
      librariesForConnectedProject
    } = _$$g3();
    let r = r4().localAssets;
    let i = librariesForConnectedProject.length > 0;
    let l = useMemo(() => {
      let s = libraries.length > 0;
      let n = r.numComponents + r.numTemplates > 0;
      return s || n || siteLibraries.status !== 'disabled';
    }, [libraries, siteLibraries.status, r]);
    return i && !l;
  }();
  let b = useMemo(() => libraryKey ? libraryKey === t ? getI18nString('design_systems.assets_panel.created_in_this_file') : allLibrariesByLibraryKey.get(libraryKey)?.name : void 0, [libraryKey, t, allLibrariesByLibraryKey]);
  let C = _$$sN();
  let j = currentView === S5.Libraries;
  let v = currentView === S5.Pages;
  let S = currentView === S5.Recents;
  let k = currentView === S5.VisualAssets;
  let w = useMemo(() => !!v || !!isCurrentlySkippingPage && (!folderPath || !!isCurrentlySkippingFirstFolder && folderPath.length === 1), [folderPath, isCurrentlySkippingFirstFolder, isCurrentlySkippingPage, v]);
  let N = useCallback(e => {
    let t = navigateToLibrary(e);
    setLastNavAction(_$$r3.Back);
    C('breadcrumb', t);
  }, [C, navigateToLibrary, setLastNavAction]);
  let I = MB({
    onBoth: () => N(libraryKey ?? _$$l('')),
    onKeyDown: focusBackButton,
    onClick: focusSearchBar
  });
  let {
    setKeyboardNavigationElement
  } = M3({
    path: [ON.BREADCRUMB],
    column: Yv.LIBRARY
  });
  let M = l()(v ? r8 : 'asset_panel_collapsible_breadcrumb--libraryStub--PU1iu asset_panel_collapsible_breadcrumb--buttonStub--4S8VP asset_panel_collapsible_breadcrumb--_buttonStubBase--aj18P asset_panel_collapsible_breadcrumb--_libraryStubBase--y4862', {
    'asset_panel_collapsible_breadcrumb--ellipsized--vFJ6x ellipsis--ellipsis--Tjyfa': e
  });
  return j ? _ ? jsx('div', {
    className: r7,
    style: {
      marginLeft: 3
    },
    children: renderI18nText('design_systems.libraries_modal.connected_project_libraries')
  }) : jsx('div', {
    className: r7,
    style: {
      marginLeft: 3
    },
    children: renderI18nText('design_systems.assets_panel.dropdown_type_all_libraries')
  }) : S ? jsx('div', {
    className: r8,
    style: {
      marginLeft: 3
    },
    children: renderI18nText('design_systems.assets_panel.dropdown_type_recents')
  }) : k ? jsx('div', {
    className: r8,
    style: {
      marginLeft: 3
    },
    children: visualAssetsType === G3.IconSets ? renderI18nText('design_systems.assets_panel.icon_sets') : renderI18nText('design_systems.assets_panel.illustrations')
  }) : jsx('div', {
    className: _$$s.flex.overflowHidden.$,
    children: jsx('button', {
      onClick: I,
      className: M,
      disabled: w,
      ref: setKeyboardNavigationElement,
      type: 'button',
      children: b
    })
  });
}
let nn = forwardRef(({
  name: e,
  i: t
}, s) => {
  let {
    isCurrentlySkippingPage,
    isCurrentlySkippingFirstFolder,
    navigateBackToPathIndex
  } = wV();
  let o = _$$sN();
  let d = useCallback(e => {
    o('breadcrumb', navigateBackToPathIndex(e));
  }, [o, navigateBackToPathIndex]);
  let c = useMemo(() => na(t, isCurrentlySkippingPage, isCurrentlySkippingFirstFolder), [t, isCurrentlySkippingFirstFolder, isCurrentlySkippingPage]);
  let {
    setKeyboardNavigationElement
  } = M3({
    path: [ON.BREADCRUMB],
    column: Yv.STUBS + t
  });
  let {
    focusBackButton,
    focusSearchBar
  } = _$$rl();
  let g = MB({
    onBoth: () => d(c),
    onKeyDown: focusBackButton,
    onClick: focusSearchBar
  });
  return e ? jsxs('div', {
    ref: s,
    className: _$$s.flex.itemsCenter.$,
    children: [jsx(nl, {}), jsx('button', {
      ref: setKeyboardNavigationElement,
      onClick: g,
      className: r6,
      children: e
    })]
  }) : null;
});
function ni({
  name: e,
  shouldEllipsize: t
}) {
  let s = useRef(null);
  let {
    pageId,
    folderPath
  } = wV();
  let {
    width
  } = e8();
  let [o, d] = useState(!1);
  return (useEffect(() => {
    d(!!_C({
      text: e ?? '',
      textRef: s
    }));
  }, [e, width]), useEffect(() => {
    setTimeout(() => d(!!_C({
      text: '',
      textRef: s
    })), 0);
  }, [pageId, folderPath]), e) ? jsxs('div', {
    className: _$$s.noWrap.flex.itemsCenter.$$if(t, _$$s.overflowHidden).$,
    children: [jsx(nl, {}), jsx('div', {
      'data-tooltip-type': Ib.TEXT,
      'data-tooltip': o ? e : void 0,
      'ref': s,
      'className': _$$s.mx4.px2.$$if(t, _$$s.overflowHidden.pre.ellipsis).$,
      'aria-current': 'location',
      'children': e
    })]
  }) : null;
}
function nl() {
  return jsx('div', {
    'className': 'asset_panel_collapsible_breadcrumb--breadcrumbSlash--XWfHn',
    'aria-hidden': !0,
    'children': ' / '
  });
}
let na = (e, t, s) => {
  let r = e;
  t && r++;
  s && r++;
  return r - 1;
};
function nd() {
  let e = useOpenFileLibraryKey();
  let {
    getLibrary
  } = _$$G();
  let {
    libraries,
    presets,
    siteLibraries,
    librariesForConnectedProject
  } = _$$g3();
  let a = useMemo(() => getLibrary(e ?? void 0), [getLibrary, e]);
  let o = useMemo(() => !a || (a.type === yW.DESIGN ? a.numComponents === 0 && a.numTemplates === 0 : a.numResponsiveSets === 0), [a]);
  let d = libraries.length === 0;
  let c = presets.length === 0;
  let u = librariesForConnectedProject.length === 0;
  let p = cJ();
  let [h] = useAtomValueAndSetter(aK);
  return useMemo(() => p ? h !== 'Blocks' && o && d && c && u : o && d && c && u && siteLibraries.status === 'disabled', [o, d, c, u, siteLibraries, p, h]);
}
function nc({
  page: e
}) {
  let {
    currentView,
    folderPath,
    onBack,
    libraryKey,
    isCurrentlySkippingPage,
    isCurrentlySkippingFirstFolder
  } = wV();
  let d = _$$sN();
  let {
    closeFlyout
  } = JA();
  let {
    setBackButtonKeyboardItem,
    focusSearchBar
  } = _$$rl();
  let m = useCallback(() => {
    d('backButton', onBack());
    closeFlyout();
  }, [onBack, d, closeFlyout]);
  let g = useCallback(() => {
    currentView === S5.Recents ? libraryKey || focusSearchBar() : currentView === S5.Pages ? focusSearchBar() : currentView === S5.Assets && isCurrentlySkippingPage && !folderPath && focusSearchBar();
  }, [currentView, focusSearchBar, folderPath, isCurrentlySkippingPage, libraryKey]);
  let f = MB({
    onBoth: m,
    onKeyDown: g,
    onClick: focusSearchBar
  });
  let x = useMemo(() => {
    if (currentView === S5.Search || currentView === S5.Recents) return [];
    let r = e?.name && !isCurrentlySkippingPage ? [e.name] : [];
    let n = folderPath ?? [];
    return [...r, ...(isCurrentlySkippingFirstFolder ? n.slice(1) : n)];
  }, [currentView, folderPath, isCurrentlySkippingPage, isCurrentlySkippingFirstFolder, e?.name]);
  let y = nd();
  let _ = currentView !== S5.Libraries && currentView !== S5.Search;
  return y ? null : jsx(Fragment, {
    children: currentView !== S5.Search && jsxs('div', {
      className: 'asset_panel_header--breadcrumbWrapper--NC2Ps asset_panel_header--horizontalFlex--k99PA',
      children: [_ && jsx(_$$K4, {
        'aria-label': getI18nString('design_systems.assets_panel.back'),
        'onClick': f,
        'ref': setBackButtonKeyboardItem,
        'recordingKey': 'assetsPanelBack',
        'children': jsx(_$$C, {})
      }), jsx(r9, {
        stubs: x
      })]
    })
  });
}
function n_() {
  let {
    closeOverlay
  } = _$$h5();
  let [t, s] = useAtomValueAndSetter(_$$s2);
  let i = useCallback(() => {
    s(PanelType.DAKOTA);
    closeOverlay();
  }, [s, closeOverlay]);
  return jsx('div', {
    ...Ay.props(_$$A3.p16),
    children: jsxs('div', {
      ...Ay.props(_$$A3.flex, _$$A3.flexColumn, _$$A3.itemsCenter, _$$A3.textCenter, _$$A3.gap8),
      children: [jsx(_$$T3, {
        className: 'x1aue78i'
      }), jsx('div', {
        ...Ay.props(_$$A3.textBodyMediumStrong, _$$A3.colorText),
        children: renderI18nText('dakota.site_blocks.create_cms_collection')
      }), jsx('div', {
        ...Ay.props(_$$A3.textBodyMedium, _$$A3.colorTextSecondary),
        children: renderI18nText('dakota.site_blocks.dynamically_connect_and_update')
      }), jsx(IK, {
        onClick: i,
        children: renderI18nText('dakota.site_blocks.create_collection_button')
      })]
    })
  });
}
function nj({
  collections: e,
  assets: t,
  renderFlyoutItem: s
}) {
  return jsx(Fragment, {
    children: e.map((e, n) => jsx(nv, {
      assets: t,
      collectionId: e.id,
      collectionName: e.name,
      children: e => s({
        ...e,
        index: n
      })
    }, e.id))
  });
}
function nv({
  collectionId: e,
  collectionName: t,
  assets: s,
  children: r
}) {
  let i = function (e) {
    let {
      data
    } = gL(e);
    return useMemo(() => data ? function (e) {
      let t = e.sort((e, t) => Ez(t.position, e.position));
      let s = t.filter(e => e.fieldType === 'plain_text');
      let r = s.find(e => e.name.toLowerCase() === 'title') || s[0];
      let n = s.find(e => e.id !== r?.id);
      let i = t.find(e => e.fieldType === 'image');
      return {
        primaryTextFieldId: r?.id ?? null,
        secondaryTextFieldId: n?.id ?? null,
        imageFieldId: i?.id ?? null
      };
    }(data.fieldSchemas || []) : {
      primaryTextFieldId: null,
      secondaryTextFieldId: null,
      imageFieldId: null
    }, [data]);
  }(e);
  let l = function (e) {
    let t = _$$t3();
    return useMemo(() => t ? Object.fromEntries([[t.primaryTextFieldId, e.primaryTextFieldId], [t.secondaryTextFieldId, e.secondaryTextFieldId], [t.imageFieldId, e.imageFieldId]].filter(e => e[1] != null)) : {}, [t, e]);
  }(i);
  return r({
    asset: function (e, t) {
      let s = _$$t3();
      let r = s?.assetNames;
      return useMemo(() => {
        if (!r) return null;
        let s = function (e, t) {
          let {
            primaryTextFieldId,
            secondaryTextFieldId,
            imageFieldId
          } = e;
          let i = primaryTextFieldId !== null;
          let l = secondaryTextFieldId !== null;
          let a = i || l;
          let o = imageFieldId !== null;
          return (l && !i && _$$sD('Unexpected CMS block fields', {
            primaryTextFieldId,
            secondaryTextFieldId,
            imageFieldId
          }), o) ? i && !l ? t.imageSingleTextList || t.textImageList : a ? t.textImageList : t.imageOnlyList : a ? t.textOnlyList : null;
        }(e, r);
        return s ? t.find(e => e.name === s) ?? null : null;
      }, [e, t, r]);
    }(i, s),
    cmsCollectionMappings: {
      collectionId: e,
      collectionName: t,
      fieldSchemaMappings: l
    }
  });
}
function nS() {
  return jsx('div', {
    ...Ay.props(_$$A3.p16),
    children: jsx(_$$k2, {})
  });
}
let nT = createContext(void 0);
function nN() {
  let e = useContext(nT);
  if (void 0 === e) throw new Error('useFlyoutContext must be used within a FlyoutProvider');
  return e;
}
function nI({
  page: e,
  libraryKey: t,
  onDragStart: s,
  children: i
}) {
  let l = useMemo(() => tw(e.assets), [e.assets]);
  let a = function () {
    let {
      windowInnerWidth
    } = _$$l3();
    return useMemo(() => Math.min(Math.max(Math.floor(15 * windowInnerWidth / 64), 144), 220), [windowInnerWidth]);
  }();
  let o = useMemo(() => a - 8, [a]);
  let d = useMemo(() => a - 2 * $A - 8, [a]);
  let c = useMemo(() => ({
    page: e,
    libraryKey: t,
    assets: l,
    panelWidth: a,
    embedThumbWidth: o,
    thumbWidth: d,
    onDragStart: s
  }), [e, t, l, a, o, d, s]);
  return jsx(nT.Provider, {
    value: c,
    children: i
  });
}
let nE = forwardRef(({
  hide: e,
  libraryKey: t,
  onMouseEnter: s,
  onMouseLeave: i,
  onDragStart: l
}, a) => {
  let {
    getLibrary
  } = _$$G();
  let {
    isLeftPanelCollapsed
  } = useContext(_$$t6);
  let c = _$$b();
  if (isLeftPanelCollapsed) return null;
  let p = getLibrary(t);
  if (!p) return null;
  let h = Cg(p);
  return h && h.type === yW.SITE ? createPortal(jsx('div', {
    'ref': a,
    ...Ay.props(nO.flyout, nO.flyoutPosition(c), e && nO.hidden),
    'onMouseEnter': s,
    'onMouseLeave': i,
    'data-fullscreen-prevent-event-capture': !0,
    'data-testid': 'asset-panel-library-flyout',
    'aria-hidden': e,
    'children': jsx(nI, {
      libraryKey: t,
      page: h,
      onDragStart: l,
      children: jsx(nA, {})
    })
  }), document.body) : null;
});
let nM = 'Site kit';
function nA() {
  let {
    page,
    libraryKey,
    assets,
    embedThumbWidth,
    thumbWidth,
    onDragStart
  } = nN();
  return VF()(libraryKey) ? jsx(nP, {}) : AZ(page) ? jsx(nL, {
    children: jsx(nR, {
      styleXStyle: nO.gap16,
      children: page.embeds.map((e, t) => jsx(_$$Ay.Provider, {
        value: W7.Embed,
        children: jsx(sc, {
          embed: e,
          sectionPosition: t,
          keyboardPosition: {
            path: [ON.CONTENTS, _$$lM.ASSETS, t],
            column: null
          },
          thumbHeight: Math.floor(embedThumbWidth / 2),
          thumbWidth: embedThumbWidth,
          isFirstTile: t === 0,
          onDragStart
        }, e.name)
      }, e.name))
    })
  }) : jsx(nL, {
    children: jsx(nR, {
      styleXStyle: nO.gap16,
      children: assets.map((e, t) => jsx(_$$Ay.Provider, {
        value: e.fullPage ? W7.Webpage : W7.Block,
        children: jsx(t1, {
          asset: e,
          sectionPosition: t,
          thumbWidth,
          isFirstTile: t === 0,
          sectionNameForTracking: nM,
          keyboardPosition: pg([_$$tM.COMPONENTS], t, 1),
          hideName: !0,
          onDragStart
        }, e.name)
      }, e.name))
    })
  });
}
function nP() {
  let e = useCurrentFileKey();
  let {
    data,
    status
  } = _$$c$(e);
  let {
    libraryKey,
    assets,
    thumbWidth,
    onDragStart
  } = nN();
  let d = useMemo(() => assets.filter(e => e.type === PrimaryWorkflowEnum.RESPONSIVE_SET), [assets]);
  let c = useCallback(({
    asset: e,
    cmsCollectionMappings: t,
    index: s
  }) => e ? jsx(t1, {
    asset: e,
    cmsCollectionMappings: t,
    hideName: !0,
    keyboardPosition: pg([_$$tM.COMPONENTS], s, 1),
    onDragStart,
    sectionNameForTracking: nM,
    sectionPosition: s,
    thumbWidth
  }, e.name) : null, [onDragStart, thumbWidth]);
  return status === 'loading' || data == null ? jsx(nR, {
    styleXStyle: nO.justifyCenter,
    children: jsx(nS, {})
  }) : data.length === 0 ? jsx(nR, {
    styleXStyle: nO.justifyCenter,
    children: jsx(n_, {})
  }) : jsx(nL, {
    children: jsx(nR, {
      styleXStyle: nO.my4,
      children: jsx(_$$Ay.Provider, {
        value: W7.Block,
        children: jsx(nj, {
          collections: data,
          assets: d,
          renderFlyoutItem: c
        })
      }, libraryKey)
    })
  });
}
function nL({
  children: e
}) {
  let {
    libraryKey,
    page
  } = nN();
  let {
    assetsScrollTop,
    handleScrollAssets
  } = tM({
    libraryKey,
    pageId: page.id
  });
  return jsx(_$$P5, {
    hideScrollbar: !0,
    onScroll: handleScrollAssets,
    initialScrollTop: assetsScrollTop,
    children: e
  });
}
function nR({
  styleXStyle: e,
  children: t
}) {
  let {
    thumbWidth
  } = nN();
  return jsx('div', {
    ...Ay.props(e, nO.flyoutWrapper, nO.flyoutWrapperWidth(thumbWidth)),
    children: t
  });
}
let nO = {
  flyout: {
    position: 'x10l6tqk',
    justifyContent: 'xl56j7k',
    top: 'x13vifvy',
    bottom: 'x1ey2m1c',
    display: 'x78zum5',
    backgroundColor: 'x1yjdb4r',
    borderRight: 'xspf3my',
    borderRightWidth: null,
    borderInlineStartWidth: null,
    borderInlineEndWidth: null,
    borderRightStyle: null,
    borderInlineStartStyle: null,
    borderInlineEndStyle: null,
    borderRightColor: null,
    borderInlineStartColor: null,
    borderInlineEndColor: null,
    fontFamily: 'x1v78wtz',
    padding: 'x9dr4nv',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    zIndex: 'xybi4ul',
    $$css: !0
  },
  flyoutPosition: e => [{
    left: (e && _$$_, 'x837sfr'),
    insetInlineStart: null,
    insetInlineEnd: null,
    $$css: !0
  }, {
    '--left': (e => typeof e == 'number' ? `${e}px` : e != null ? e : void 0)(`calc(var(--left-panel-width) + ${e ? _$$_ + 1 : 0}px)`)
  }],
  hidden: {
    display: 'x1s85apg',
    $$css: !0
  },
  flyoutWrapper: {
    display: 'x78zum5',
    flexDirection: 'xdt5ytf',
    alignItems: 'x6s0dn4',
    $$css: !0
  },
  my4: {
    marginTop: 'x15r87gk',
    marginBottom: 'x1ah0xmj',
    $$css: !0
  },
  gap16: {
    gap: 'x1r05qx8',
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  justifyCenter: {
    justifyContent: 'xl56j7k',
    $$css: !0
  },
  flyoutWrapperWidth: e => [{
    width: e + 2 * $A + 8 == null ? null : 'x1bl4301',
    $$css: !0
  }, {
    '--width': (e => typeof e == 'number' ? `${e}px` : e != null ? e : void 0)(e + 2 * $A + 8)
  }]
};
let nD = atom(null);
let nB = {
  width: 'unset'
};
let nK = [{
  name: 'pages',
  url: buildUploadUrl('99bf5f7ad969ea1167c7b09340ffc4486185e71a'),
  background: {
    light: '--ramp-blue-300',
    dark: '--ramp-pale-blue-600'
  },
  style: {
    ...nB,
    filter: 'drop-shadow(0px 2px 8px rgba(0, 49, 124, 0.10))'
  }
}, {
  name: 'navigation',
  url: buildUploadUrl('a84d6d275dd4af825b41cf6a782d8950a38ccf28'),
  background: {
    light: '--ramp-persimmon-300',
    dark: '--ramp-pale-persimmon-600'
  },
  style: {
    ...nB,
    filter: 'drop-shadow(0px 2px 6px rgba(185, 42, 0, 0.10))'
  }
}, {
  name: 'heroes',
  url: buildUploadUrl('2314584dee6e81eb3a90596302b184d88f6b00f3'),
  background: {
    light: '--ramp-pink-300',
    dark: '--ramp-pale-pink-600'
  },
  style: {
    ...nB,
    filter: '0px 2px 6px 0px rgba(165, 0, 117, 0.10)'
  }
}, {
  name: 'features',
  url: buildUploadUrl('c9c8ec535fe73557c9729a00cebbffbdf6e3bd00'),
  background: {
    light: '--ramp-yellow-400',
    dark: '--ramp-pale-yellow-600'
  },
  style: {
    ...nB,
    filter: 'drop-shadow(0px 2px 6px rgba(197, 92, 0, 0.10))'
  }
}, {
  name: 'embeds',
  url: buildUploadUrl('b6ff5202c5344702953b4d618f6d06a362b63e1b'),
  background: {
    light: '--ramp-violet-400',
    dark: '--ramp-pale-violet-600'
  },
  style: {
    ...nB,
    filter: 'drop-shadow(0px 2px 8px rgba(51, 19, 179, 0.10))'
  }
}];
let nG = parsePxNumber(Sx);
let nH = parsePxNumber(T5);
function nV({
  library: e,
  previewHeight: t,
  cardWidth: s,
  keyboardSection: i,
  rowIndex: l,
  columnIndex: o = 0,
  hideUnsubscribe: d,
  flyoutHandlers: c,
  isFolderView: u,
  folderVariant: p = 'preview'
}) {
  let {
    focusFirstItem,
    focusSearchBar
  } = _$$rl();
  let {
    navigateToLibrary
  } = wV();
  let y = selectCurrentFile();
  let b = useAtomWithSubscription(nD);
  let C = _$$H(e.libraryKey);
  let [j] = MA();
  let v = (GM()() ? $H.LIST : j) === $H.LIST;
  let S = _$$sN();
  let k = useCallback(() => {
    S('libraryCard', navigateToLibrary(e.libraryKey));
  }, [e.libraryKey, S, navigateToLibrary]);
  let {
    currentView
  } = wV();
  let N = currentView !== S5.Libraries;
  let {
    setKeyboardNavigationElement
  } = M3({
    path: [ON.CONTENTS, _$$lM.LIBRARIES, i, l],
    column: o,
    id: e.libraryKey,
    disabled: N
  });
  let E = MB({
    onBoth: k,
    onKeyDown: focusFirstItem,
    onClick: focusSearchBar
  });
  let M = useCallback(t => {
    c ? c.onClick(e.libraryKey) : E(t);
  }, [c, E, e.libraryKey]);
  let A = useCallback(t => c?.onMouseEnter?.(t, e.libraryKey), [c, e.libraryKey]);
  let P = useCallback(t => c?.onMouseLeave(t, e.libraryKey), [c, e.libraryKey]);
  let L = useCallback(t => c?.onMouseMove(t, e.libraryKey), [c, e.libraryKey]);
  let R = useMemo(() => {
    let t = e.libraryKey === y?.libraryKey ? 'localLibrary' : e.libraryKey;
    return generateRecordingKey('assetsLibrary', t);
  }, [e.libraryKey, y?.libraryKey]);
  let O = function (e, t = !1) {
    let s = selectCurrentFile();
    let r = useDispatch();
    let i = e.libraryKey === s?.libraryKey;
    let l = _9(e.libraryKey, 'assets_panel_library_context_menu');
    let o = useCallback(() => l(!1), [l]);
    let d = function () {
      let e = useDispatch();
      let t = selectCurrentFile();
      let s = useSelector(e => e.teams);
      let r = useSelector(fA);
      let i = useCallback(() => {
        e(showModalHandler({
          type: dD,
          data: {
            entrypoint: _$$RR.ASSET_PANEL_LIBRARY_CONTEXT_MENU
          }
        }));
      }, [e]);
      let l = t?.teamId && s[t.teamId];
      let a = useCallback(() => {
        e(showModalHandler({
          type: $3,
          data: {
            afterFileMove: i,
            team: l || null
          }
        }));
      }, [e, i, l]);
      return useCallback(() => {
        r ? i() : a();
      }, [r, i, a]);
    }();
    let c = _$$X2(e.libraryKey);
    let u = _$$b2({
      libraryKey: e.libraryKey
    });
    let p = u.data?.link;
    let h = useCallback(() => {
      analyticsEventManager.trackDefinedEvent('assets_panel.go_to_library', {
        libraryKey: e.libraryKey,
        fileKey: s?.key,
        fileTeamId: s?.teamId ?? void 0,
        fileOrgId: s?.parentOrgId ?? void 0,
        entryPoint: 'library_context_menu'
      });
    }, [e.libraryKey, s]);
    let m = useCallback(() => {
      analyticsEventManager.trackDefinedEvent('assets_panel.send_feedback_to_creator', {
        libraryKey: e.libraryKey,
        fileKey: s?.key,
        fileTeamId: s?.teamId ?? void 0,
        fileOrgId: s?.parentOrgId ?? void 0,
        entryPoint: 'library_context_menu',
        partnerType: c
      });
    }, [e.libraryKey, s, c]);
    let f = useCallback(() => {
      analyticsEventManager.trackDefinedEvent('assets_panel.open_library_context_menu', {
        libraryKey: e.libraryKey,
        fileKey: s?.key,
        fileTeamId: s?.teamId ?? void 0,
        fileOrgId: s?.parentOrgId ?? void 0
      });
    }, [e.libraryKey, s]);
    return useCallback(s => {
      e.type !== yW.SITE && (s.preventDefault(), s.stopPropagation(), r(j7({
        type: sZ,
        data: {
          libraryHref: p,
          isLocalLibrary: i,
          partnerType: c,
          hideUnsubscribe: t,
          onGoToLibrary: h,
          onPublish: d,
          onUnsubscribe: o,
          onSendFeedback: m,
          position: {
            top: s.clientY,
            left: s.clientX
          }
        }
      })), f());
    }, [e.type, r, p, i, c, t, h, d, o, m, f]);
  }(e, d);
  let D = !!dj(e.libraryKey);
  let F = function (e, t) {
    let s = DP() === 'dark' ? 'dark' : 'light';
    return useMemo(() => {
      if (!t) return;
      let r = nK.find(t => t.name === e.toLowerCase() || e === getI18nString('design_systems.assets_panel.site_embeds') && t.name === 'embeds');
      if (r) {
        return {
          url: r.url,
          backgroundToken: `var(${r.background[s]})`,
          style: r.style
        };
      }
    }, [t, e, s]);
  }(e.name, D || e.libraryKey === Yl);
  return jsx(GG, {
    'aria-label': e.name,
    'className': u ? '' : 'asset_panel_library--library--5bw5-',
    'forwardedRef': setKeyboardNavigationElement,
    'onClick': M,
    'onContextMenu': O,
    'onMouseEnter': A,
    'onMouseLeave': P,
    'onMouseMove': L,
    'recordingKey': R,
    'style': {
      width: v || u ? '100%' : s
    },
    'tabIndex': N ? -1 : 0,
    'children': u ? jsx(el, {
      keyPrefix: e.libraryKey,
      name: e.name,
      hoverable: !0,
      previewAssetOrUrl: F?.url ?? (e.thumbnailUrl || void 0),
      selected: b?.persisted && b?.key === e.libraryKey,
      recordingKey: R || 'assetsLibraryFolder',
      variant: p,
      customThumbnailData: F
    }) : jsx(nU, {
      library: e,
      previewHeight: t,
      isList: v,
      showAuthor: C
    })
  });
}
function nU({
  library: e,
  previewHeight: t,
  isList: s,
  showAuthor: i
}) {
  let {
    thumbnailUrl
  } = e;
  let [a, o] = useState(thumbnailUrl);
  let d = useMemo(() => {
    if (a) return `url(${a})`;
  }, [a]);
  let c = useCallback(() => {
    o(thumbnailUrl);
  }, [thumbnailUrl]);
  let u = useMemo(() => s ? {
    height: nG,
    width: nH
  } : {
    height: t
  }, [s, t]);
  return jsxs('div', {
    className: s ? 'asset_panel_library--libraryCardList--qG5I1 asset_panel_library--libraryCard--l0q0e' : 'asset_panel_library--libraryCard--l0q0e',
    children: [jsxs('div', {
      className: 'asset_panel_library--libraryPreviewSection--fRTrr',
      children: [jsx('div', {
        style: {
          backgroundImage: d,
          ...u
        },
        className: e.thumbnailShouldCover ? 'asset_panel_library--libraryPreviewCover---Jx5R asset_panel_library--libraryPreview--jl-5n' : 'asset_panel_library--libraryPreview--jl-5n'
      }), thumbnailUrl && jsx(oW, {
        src: thumbnailUrl,
        onLoad: c,
        className: 'asset_panel_library--hiddenImage--a-LoJ',
        alt: ''
      })]
    }), jsx(nz, {
      library: e,
      isList: s,
      showAuthor: i
    })]
  });
}
function nz({
  library: e,
  isList: t,
  showAuthor: s
}) {
  let i = useAtomWithSubscription(Rs);
  let l = e.type !== yW.SITE;
  let a = useMemo(() => e.type === yW.SITE ? '' : e.numComponents > 0 ? getI18nString('design_systems.assets_panel.num_components', {
    numComponents: e.numComponents
  }) : '', [e]);
  let o = i?.[e.libraryKey]?.author_name || e.authorName;
  return jsx('div', {
    className: t ? 'asset_panel_library--libraryFooterList--x3M2r asset_panel_library--libraryFooter--jXcDc' : l ? 'asset_panel_library--libraryFooter--jXcDc' : 'asset_panel_library--libraryFooterWithoutLibraryStats--FnrKN asset_panel_library--libraryFooter--jXcDc',
    children: jsxs('div', {
      className: 'asset_panel_library--libraryNameAndStats--uiY8T',
      children: [jsxs('div', {
        className: 'asset_panel_library--nameAndIconForList--UCm5F',
        children: [jsx('h3', {
          className: 'asset_panel_library--libraryName--aege1 ellipsis--ellipsis--Tjyfa',
          children: e.name
        }), jsx('div', {
          className: 'asset_panel_library--libraryIcon--6s19b',
          children: jsx(_$$P, {
            libraryKey: e.libraryKey,
            compact: !0,
            showPresetTooltip: !0,
            colorPrimaryOnHover: !0,
            tooltipDelay: 500,
            tooltipLocation: 'below'
          })
        })]
      }), l && jsx('div', {
        className: 'asset_panel_library--libraryStats--JL9eF ellipsis--ellipsis--Tjyfa',
        children: s ? renderI18nText('community.by_publisher', {
          publisher: o
        }) : a
      })]
    })
  });
}
function nW() {
  return jsxs('svg', {
    width: '74px',
    height: '45px',
    viewBox: '0 0 76 46',
    fill: 'none',
    children: [jsx('rect', {
      width: '66',
      height: '36.2738',
      rx: '3',
      transform: 'matrix(0.998629 -0.052336 -0.052336 -0.998629 1.90015 39.6787)',
      fill: 'url(#pattern0_4378_11285)'
    }), jsx('rect', {
      width: '66',
      height: '36.2738',
      rx: '3',
      transform: 'matrix(0.998629 -0.052336 -0.052336 -0.998629 1.90015 39.6787)',
      fill: 'url(#pattern1_4378_11285)'
    }), jsx('rect', {
      width: '66',
      height: '36.2738',
      rx: '3',
      transform: 'matrix(0.998629 -0.052336 -0.052336 -0.998629 1.90015 39.6787)',
      fill: '#85C9E4'
    }), jsxs('g', {
      filter: 'url(#filter0_dd_4378_11285)',
      children: [jsx('rect', {
        width: '66',
        height: '36',
        rx: '3',
        transform: 'matrix(-1 0 0 1 73 6)',
        fill: 'url(#pattern2_4378_11285)'
      }), jsx('rect', {
        width: '66',
        height: '36',
        rx: '3',
        transform: 'matrix(-1 0 0 1 73 6)',
        fill: 'url(#pattern3_4378_11285)'
      }), jsx('rect', {
        width: '66',
        height: '36',
        rx: '3',
        transform: 'matrix(-1 0 0 1 73 6)',
        fill: '#E5F4FF'
      }), jsx('g', {
        clipPath: 'url(#clip0_4378_11285)',
        children: jsxs('g', {
          filter: 'url(#filter1_d_4378_11285)',
          children: [jsx('rect', {
            x: '40.7627',
            y: '24.7129',
            width: '13.4945',
            height: '13.4945',
            rx: '2.5951',
            fill: '#E6E6E6',
            fillOpacity: '0.11'
          }), jsx('rect', {
            x: '40.8477',
            y: '24.7979',
            width: '13.3245',
            height: '13.3245',
            rx: '2.51011',
            stroke: '#CFE4F3',
            strokeWidth: '0.169989'
          }), jsx('path', {
            d: 'M38.7913 22.7412L56.2288 40.1787M56.2288 22.7412L38.7913 40.1787M44.6973 22.46V40.46M47.5097 22.46V40.46M50.3225 22.46V40.46M56.51 28.6475L38.51 28.6475M56.51 31.4599L38.51 31.4599M56.51 34.2726L38.51 34.2726M53.135 31.46C53.135 34.5666 50.6166 37.085 47.51 37.085C44.4034 37.085 41.885 34.5666 41.885 31.46C41.885 28.3534 44.4034 25.835 47.51 25.835C50.6166 25.835 53.135 28.3534 53.135 31.46ZM50.3225 31.46C50.3225 33.0133 49.0633 34.2725 47.51 34.2725C45.9567 34.2725 44.6975 33.0133 44.6975 31.46C44.6975 29.9067 45.9567 28.6475 47.51 28.6475C49.0633 28.6475 50.3225 29.9067 50.3225 31.46Z',
            stroke: 'white',
            strokeOpacity: '0.6',
            strokeWidth: '0.113372'
          }), jsx('path', {
            d: 'M46.8393 29.3914H46.3369C46.0243 29.3914 45.8679 29.3914 45.7485 29.4522C45.6435 29.5057 45.5582 29.591 45.5047 29.6961C45.4438 29.8155 45.4438 29.9719 45.4438 30.2845V32.4054C45.4438 32.718 45.4438 32.8742 45.5047 32.9936C45.5582 33.0986 45.6435 33.1841 45.7485 33.2376C45.8678 33.2984 46.024 33.2984 46.336 33.2984H48.4587C48.7706 33.2984 48.9266 33.2984 49.0459 33.2376C49.1509 33.1841 49.2365 33.0985 49.2901 32.9935C49.3508 32.8742 49.3508 32.7182 49.3508 32.4062V31.903M49.6299 30.5077V29.1123M49.6299 29.1123H48.2345M49.6299 29.1123L47.6764 31.0658',
            stroke: '#007BE5',
            strokeWidth: '0.558837',
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
          })]
        })
      }), jsx('g', {
        clipPath: 'url(#clip1_4378_11285)',
        children: jsxs('g', {
          filter: 'url(#filter2_d_4378_11285)',
          children: [jsx('rect', {
            x: '55.6597',
            y: '24.7129',
            width: '13.4945',
            height: '13.4945',
            rx: '2.5951',
            fill: '#E6E6E6',
            fillOpacity: '0.11'
          }), jsx('rect', {
            x: '55.7447',
            y: '24.7979',
            width: '13.3245',
            height: '13.3245',
            rx: '2.51011',
            stroke: '#CFE4F3',
            strokeWidth: '0.169989'
          }), jsx('path', {
            d: 'M53.6882 22.7412L71.1257 40.1787M71.1257 22.7412L53.6882 40.1787M59.5943 22.46V40.46M62.4066 22.46V40.46M65.2194 22.46V40.46M71.407 28.6475L53.407 28.6475M71.407 31.4599L53.407 31.4599M71.407 34.2726L53.407 34.2726M68.032 31.46C68.032 34.5666 65.5136 37.085 62.407 37.085C59.3004 37.085 56.782 34.5666 56.782 31.46C56.782 28.3534 59.3004 25.835 62.407 25.835C65.5136 25.835 68.032 28.3534 68.032 31.46ZM65.2195 31.46C65.2195 33.0133 63.9603 34.2725 62.407 34.2725C60.8537 34.2725 59.5945 33.0133 59.5945 31.46C59.5945 29.9067 60.8537 28.6475 62.407 28.6475C63.9603 28.6475 65.2195 29.9067 65.2195 31.46Z',
            stroke: 'white',
            strokeOpacity: '0.6',
            strokeWidth: '0.113372'
          }), jsx('path', {
            d: 'M64.911 33.9649L63.704 32.758M63.704 32.758C64.1063 32.3557 64.3552 31.7999 64.3552 31.186C64.3552 29.9582 63.3599 28.9629 62.1321 28.9629C60.9043 28.9629 59.9089 29.9582 59.9089 31.186C59.9089 32.4138 60.9043 33.4091 62.1321 33.4091C62.746 33.4091 63.3017 33.1603 63.704 32.758Z',
            stroke: '#007BE5',
            strokeWidth: '0.555781',
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
          })]
        })
      }), jsx('g', {
        clipPath: 'url(#clip2_4378_11285)',
        children: jsxs('g', {
          filter: 'url(#filter3_d_4378_11285)',
          children: [jsx('rect', {
            x: '25.7114',
            y: '9.66113',
            width: '13.4945',
            height: '13.4945',
            rx: '2.5951',
            fill: '#E6E6E6',
            fillOpacity: '0.11'
          }), jsx('rect', {
            x: '25.7964',
            y: '9.74613',
            width: '13.3245',
            height: '13.3245',
            rx: '2.51011',
            stroke: '#CFE4F3',
            strokeWidth: '0.169989'
          }), jsx('path', {
            d: 'M23.7397 7.68945L41.1772 25.127M41.1772 7.68945L23.7397 25.127M29.6458 7.4082V25.4082M32.4582 7.4082V25.4082M35.2709 7.4082V25.4082M41.4585 13.5957L23.4585 13.5957M41.4585 16.4081L23.4585 16.4081M41.4585 19.2209L23.4585 19.2209M38.0835 16.4082C38.0835 19.5148 35.5651 22.0332 32.4585 22.0332C29.3519 22.0332 26.8335 19.5148 26.8335 16.4082C26.8335 13.3016 29.3519 10.7832 32.4585 10.7832C35.5651 10.7832 38.0835 13.3016 38.0835 16.4082ZM35.271 16.4082C35.271 17.9615 34.0118 19.2207 32.4585 19.2207C30.9052 19.2207 29.646 17.9615 29.646 16.4082C29.646 14.8549 30.9052 13.5957 32.4585 13.5957C34.0118 13.5957 35.271 14.8549 35.271 16.4082Z',
            stroke: 'white',
            strokeOpacity: '0.6',
            strokeWidth: '0.113372'
          }), jsx('path', {
            d: 'M31.0159 13.8096C30.3787 13.8096 29.8621 14.3262 29.8621 14.9634V17.5596V17.848C29.8621 18.4852 30.3787 19.0019 31.0159 19.0019H33.9005C34.5377 19.0019 35.0544 18.4852 35.0544 17.848V17.5596V14.9634C35.0544 14.3262 34.5377 13.8096 33.9005 13.8096H31.0159ZM31.0159 14.3865H33.9005C34.2193 14.3865 34.4774 14.6447 34.4774 14.9634L34.4786 16.7507C34.2542 16.5424 34.0254 16.4121 33.7742 16.4057C33.7652 16.4054 33.7655 16.4057 33.7563 16.4057C33.4283 16.4057 33.0637 16.6578 32.8188 16.9737C32.7562 16.8324 32.693 16.6927 32.6203 16.5589C32.2799 15.9303 31.9081 15.5412 31.4486 15.5403C31.058 15.5395 30.7228 15.8588 30.4367 16.2961L30.439 14.9634C30.439 14.6447 30.6972 14.3865 31.0159 14.3865ZM33.6121 14.9634C33.4528 14.9634 33.3236 15.0926 33.3236 15.2519C33.3236 15.4111 33.4528 15.5403 33.6121 15.5403C33.7713 15.5403 33.9005 15.4111 33.9005 15.2519C33.9005 15.0926 33.7713 14.9634 33.6121 14.9634ZM31.4486 16.1173C31.6165 16.1175 31.8715 16.3789 32.1155 16.8295C32.2124 17.0077 32.2993 17.2042 32.3772 17.3974C32.4239 17.5128 32.4599 17.6011 32.4761 17.6496C32.5548 17.8852 32.8745 17.9187 32.9991 17.7038C33.0115 17.6824 33.034 17.6415 33.0712 17.5867C33.1335 17.4944 33.2045 17.4009 33.2786 17.3161C33.4638 17.1038 33.6423 16.9826 33.7563 16.9826C33.8714 16.9855 34.0491 17.1064 34.234 17.3161C34.309 17.4012 34.3782 17.4944 34.4414 17.5867C34.4613 17.6155 34.4642 17.6291 34.4774 17.6496V17.848C34.4774 18.1668 34.2193 18.4249 33.9005 18.4249H31.0159C30.6972 18.4249 30.439 18.1668 30.439 17.848V17.6046C30.4572 17.5532 30.4814 17.4924 30.52 17.3974C30.5988 17.2042 30.6842 17.008 30.7817 16.8295C31.0277 16.378 31.281 16.117 31.4486 16.1173Z',
            fill: '#007BE5'
          })]
        })
      }), jsx('g', {
        clipPath: 'url(#clip3_4378_11285)',
        children: jsxs('g', {
          filter: 'url(#filter4_d_4378_11285)',
          children: [jsx('rect', {
            x: '40.7627',
            y: '9.66113',
            width: '13.4945',
            height: '13.4945',
            rx: '2.5951',
            fill: '#E6E6E6',
            fillOpacity: '0.11'
          }), jsx('rect', {
            x: '40.8477',
            y: '9.74613',
            width: '13.3245',
            height: '13.3245',
            rx: '2.51011',
            stroke: '#CFE4F3',
            strokeWidth: '0.169989'
          }), jsx('path', {
            d: 'M38.7915 7.68945L56.229 25.127M56.229 7.68945L38.7915 25.127M44.6975 7.4082V25.4082M47.5099 7.4082V25.4082M50.3227 7.4082V25.4082M56.5103 13.5957L38.5103 13.5957M56.5103 16.4081L38.5103 16.4081M56.5103 19.2209L38.5103 19.2209M53.1353 16.4082C53.1353 19.5148 50.6169 22.0332 47.5103 22.0332C44.4037 22.0332 41.8853 19.5148 41.8853 16.4082C41.8853 13.3016 44.4037 10.7832 47.5103 10.7832C50.6169 10.7832 53.1353 13.3016 53.1353 16.4082ZM50.3228 16.4082C50.3228 17.9615 49.0636 19.2207 47.5103 19.2207C45.957 19.2207 44.6978 17.9615 44.6978 16.4082C44.6978 14.8549 45.957 13.5957 47.5103 13.5957C49.0636 13.5957 50.3228 14.8549 50.3228 16.4082Z',
            stroke: 'white',
            strokeOpacity: '0.6',
            strokeWidth: '0.113372'
          }), jsx('g', {
            clipPath: 'url(#clip4_4378_11285)',
            children: jsx('path', {
              d: 'M47.6765 15.2739C47.0718 13.8547 44.9556 14.0058 44.9556 15.8198C44.9556 17.6338 47.6765 19.1454 47.6765 19.1454C47.6765 19.1454 50.3974 17.6338 50.3974 15.8198C50.3974 14.0058 48.2811 13.8547 47.6765 15.2739Z',
              stroke: '#007BE5',
              strokeWidth: '0.605407',
              strokeLinecap: 'round',
              strokeLinejoin: 'round'
            })
          })]
        })
      }), jsx('g', {
        clipPath: 'url(#clip5_4378_11285)',
        children: jsxs('g', {
          filter: 'url(#filter5_d_4378_11285)',
          children: [jsx('rect', {
            x: '55.6597',
            y: '9.66113',
            width: '13.4945',
            height: '13.4945',
            rx: '2.5951',
            fill: '#E6E6E6',
            fillOpacity: '0.11'
          }), jsx('rect', {
            x: '55.7447',
            y: '9.74613',
            width: '13.3245',
            height: '13.3245',
            rx: '2.51011',
            stroke: '#CFE4F3',
            strokeWidth: '0.169989'
          }), jsx('path', {
            d: 'M53.6885 7.68945L71.126 25.127M71.126 7.68945L53.6885 25.127M59.5945 7.4082V25.4082M62.4069 7.4082V25.4082M65.2197 7.4082V25.4082M71.4072 13.5957L53.4072 13.5957M71.4072 16.4081L53.4072 16.4081M71.4072 19.2209L53.4072 19.2209M68.0322 16.4082C68.0322 19.5148 65.5138 22.0332 62.4072 22.0332C59.3006 22.0332 56.7822 19.5148 56.7822 16.4082C56.7822 13.3016 59.3006 10.7832 62.4072 10.7832C65.5138 10.7832 68.0322 13.3016 68.0322 16.4082ZM65.2197 16.4082C65.2197 17.9615 63.9605 19.2207 62.4072 19.2207C60.8539 19.2207 59.5947 17.9615 59.5947 16.4082C59.5947 14.8549 60.8539 13.5957 62.4072 13.5957C63.9605 13.5957 65.2197 14.8549 65.2197 16.4082Z',
            stroke: 'white',
            strokeOpacity: '0.6',
            strokeWidth: '0.113372'
          }), jsx('path', {
            d: 'M60.2761 16.3467V18.4809C60.2761 18.7755 60.515 19.0144 60.8097 19.0144H64.011C64.3056 19.0144 64.5445 18.7755 64.5445 18.4809V16.3467',
            stroke: '#007BE5',
            strokeWidth: '0.533549',
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
          }), jsx('path', {
            d: 'M60.8088 14.6122C60.8088 14.2439 61.1074 13.9453 61.4758 13.9453V13.9453C61.9914 13.9453 62.4095 14.3633 62.4095 14.879V15.2792H61.4758C61.1074 15.2792 60.8088 14.9806 60.8088 14.6122V14.6122Z',
            stroke: '#007BE5',
            strokeWidth: '0.533549',
            strokeLinejoin: 'round'
          }), jsx('path', {
            d: 'M64.0107 14.6122C64.0107 14.2439 63.7121 13.9453 63.3438 13.9453V13.9453C62.8281 13.9453 62.4101 14.3633 62.4101 14.879V15.2792H63.3438C63.7121 15.2792 64.0107 14.9806 64.0107 14.6122V14.6122Z',
            stroke: '#007BE5',
            strokeWidth: '0.533549',
            strokeLinejoin: 'round'
          }), jsx('path', {
            d: 'M60.009 15.2803H64.811V16.3474H60.009V15.2803Z',
            stroke: '#007BE5',
            strokeWidth: '0.533549',
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
          }), jsx('path', {
            d: 'M62.4099 16.3467V19.0144',
            stroke: '#007BE5',
            strokeWidth: '0.533549',
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
          })]
        })
      }), jsx('g', {
        clipPath: 'url(#clip6_4378_11285)',
        children: jsxs('g', {
          filter: 'url(#filter6_d_4378_11285)',
          children: [jsx('rect', {
            x: '25.7114',
            y: '24.7129',
            width: '13.4945',
            height: '13.4945',
            rx: '2.5951',
            fill: '#E6E6E6',
            fillOpacity: '0.11'
          }), jsx('rect', {
            x: '25.7964',
            y: '24.7979',
            width: '13.3245',
            height: '13.3245',
            rx: '2.51011',
            stroke: '#CFE4F3',
            strokeWidth: '0.169989'
          }), jsx('path', {
            d: 'M23.74 22.7412L41.1775 40.1787M41.1775 22.7412L23.74 40.1787M29.646 22.46V40.46M32.4584 22.46V40.46M35.2712 22.46V40.46M41.4587 28.6475L23.4587 28.6475M41.4587 31.4599L23.4587 31.4599M41.4587 34.2726L23.4587 34.2726M38.0837 31.46C38.0837 34.5666 35.5653 37.085 32.4587 37.085C29.3521 37.085 26.8337 34.5666 26.8337 31.46C26.8337 28.3534 29.3521 25.835 32.4587 25.835C35.5653 25.835 38.0837 28.3534 38.0837 31.46ZM35.2712 31.46C35.2712 33.0133 34.012 34.2725 32.4587 34.2725C30.9054 34.2725 29.6462 33.0133 29.6462 31.46C29.6462 29.9067 30.9054 28.6475 32.4587 28.6475C34.012 28.6475 35.2712 29.9067 35.2712 31.46Z',
            stroke: 'white',
            strokeOpacity: '0.6',
            strokeWidth: '0.113372'
          }), jsx('path', {
            d: 'M32.3423 28.5566C31.3514 28.5566 30.6687 29.2395 30.6687 30.2303C30.6687 30.3656 30.6687 30.7798 30.6687 30.7882C30.6687 30.878 30.6233 30.9391 30.4682 31.0671C30.4506 31.0816 30.3768 31.145 30.3549 31.1631C30.0019 31.4549 29.8282 31.7282 29.8318 32.1829C29.8356 32.6426 30.2103 33.0144 30.6687 33.0197H31.5546C31.5546 33.0197 31.5055 33.1902 31.5055 33.2987C31.5055 33.7609 31.8801 34.1355 32.3423 34.1355C32.8045 34.1355 33.1792 33.7609 33.1792 33.2987C33.1792 33.1902 33.1323 33.0197 33.1323 33.0197H34.016C34.4734 33.0214 34.8534 32.6446 34.8528 32.1829C34.8523 31.7316 34.6782 31.4535 34.3298 31.1631C34.3069 31.1438 34.226 31.0822 34.2076 31.0671C34.0559 30.9405 34.016 30.8769 34.016 30.7882C34.016 30.4395 34.016 30.2303 34.016 30.2303C34.016 29.2395 33.3331 28.5566 32.3423 28.5566ZM32.3423 29.1145C33.0252 29.1145 33.4581 29.5474 33.4581 30.2303C33.4581 30.2303 33.4581 30.4395 33.4581 30.7882C33.4581 31.0844 33.5831 31.2713 33.8503 31.4942C33.8715 31.5118 33.961 31.5821 33.9811 31.5988C34.2149 31.7938 34.2946 31.9257 34.2949 32.1829C34.2952 32.3346 34.1652 32.4624 34.016 32.4618C33.9633 32.4616 33.1513 32.4616 32.3423 32.4618C31.5335 32.4621 30.7279 32.4624 30.6687 32.4618C30.513 32.4599 30.391 32.3377 30.3897 32.1829C30.3877 31.9263 30.4674 31.7941 30.7035 31.5988C30.7228 31.5829 30.8053 31.5109 30.8256 31.4942C31.097 31.2699 31.2266 31.0872 31.2266 30.7882C31.2266 30.7798 31.2266 30.3656 31.2266 30.2303C31.2266 29.5474 31.6596 29.1145 32.3423 29.1145ZM32.3423 33.0197C32.4963 33.0197 32.6213 33.1447 32.6213 33.2987C32.6213 33.4527 32.4963 33.5776 32.3423 33.5776C32.1884 33.5776 32.0634 33.4527 32.0634 33.2987C32.0634 33.1447 32.1884 33.0197 32.3423 33.0197Z',
            fill: '#007BE5'
          })]
        })
      }), jsx('g', {
        clipPath: 'url(#clip7_4378_11285)',
        children: jsxs('g', {
          filter: 'url(#filter7_d_4378_11285)',
          children: [jsx('rect', {
            x: '10.6597',
            y: '9.66113',
            width: '13.4945',
            height: '13.4945',
            rx: '2.5951',
            fill: '#E6E6E6',
            fillOpacity: '0.11'
          }), jsx('rect', {
            x: '10.7447',
            y: '9.74613',
            width: '13.3245',
            height: '13.3245',
            rx: '2.51011',
            stroke: '#CFE4F3',
            strokeWidth: '0.169989'
          }), jsx('path', {
            d: 'M8.68848 7.68945L26.126 25.127M26.126 7.68945L8.68848 25.127M14.5945 7.4082V25.4082M17.4069 7.4082V25.4082M20.2197 7.4082V25.4082M26.4072 13.5957L8.40723 13.5957M26.4072 16.4081L8.40723 16.4081M26.4072 19.2209L8.40723 19.2209M23.0322 16.4082C23.0322 19.5148 20.5138 22.0332 17.4072 22.0332C14.3006 22.0332 11.7822 19.5148 11.7822 16.4082C11.7822 13.3016 14.3006 10.7832 17.4072 10.7832C20.5138 10.7832 23.0322 13.3016 23.0322 16.4082ZM20.2197 16.4082C20.2197 17.9615 18.9605 19.2207 17.4072 19.2207C15.8539 19.2207 14.5947 17.9615 14.5947 16.4082C14.5947 14.8549 15.8539 13.5957 17.4072 13.5957C18.9605 13.5957 20.2197 14.8549 20.2197 16.4082Z',
            stroke: 'white',
            strokeOpacity: '0.6',
            strokeWidth: '0.113372'
          }), jsx('path', {
            d: 'M18.1308 16.0168L17.0145 17.1331L16.4564 16.5749M15.061 17.6354V16.143C15.061 15.9939 15.061 15.9193 15.0792 15.8499C15.0952 15.7884 15.1218 15.7302 15.1575 15.6776C15.1978 15.6183 15.2538 15.5691 15.366 15.4709L16.706 14.2984C16.914 14.1164 17.018 14.0253 17.1352 13.9907C17.2385 13.9601 17.3486 13.9601 17.4519 13.9907C17.5692 14.0254 17.6734 14.1165 17.8817 14.2988L19.2212 15.4709C19.3335 15.5691 19.3895 15.6183 19.4298 15.6776C19.4654 15.7302 19.4918 15.7884 19.5079 15.8499C19.526 15.9193 19.5262 15.9939 19.5262 16.143V17.6364C19.5262 17.9484 19.5262 18.1045 19.4654 18.2238C19.4119 18.3288 19.3263 18.4141 19.2212 18.4677C19.102 18.5284 18.946 18.5284 18.634 18.5284H15.9532C15.6412 18.5284 15.485 18.5284 15.3657 18.4677C15.2607 18.4141 15.1754 18.3288 15.1219 18.2238C15.061 18.1044 15.061 17.948 15.061 17.6354Z',
            stroke: '#007BE5',
            strokeWidth: '0.558837',
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
          })]
        })
      }), jsx('g', {
        clipPath: 'url(#clip8_4378_11285)',
        children: jsxs('g', {
          filter: 'url(#filter8_d_4378_11285)',
          children: [jsx('rect', {
            x: '10.6597',
            y: '24.7129',
            width: '13.4945',
            height: '13.4945',
            rx: '2.5951',
            fill: '#E6E6E6',
            fillOpacity: '0.11'
          }), jsx('rect', {
            x: '10.7447',
            y: '24.7979',
            width: '13.3245',
            height: '13.3245',
            rx: '2.51011',
            stroke: '#CFE4F3',
            strokeWidth: '0.169989'
          }), jsx('path', {
            d: 'M8.68823 22.7412L26.1257 40.1787M26.1257 22.7412L8.68823 40.1787M14.5943 22.46V40.46M17.4066 22.46V40.46M20.2194 22.46V40.46M26.407 28.6475L8.40698 28.6475M26.407 31.4599L8.40698 31.4599M26.407 34.2726L8.40698 34.2726M23.032 31.46C23.032 34.5666 20.5136 37.085 17.407 37.085C14.3004 37.085 11.782 34.5666 11.782 31.46C11.782 28.3534 14.3004 25.835 17.407 25.835C20.5136 25.835 23.032 28.3534 23.032 31.46ZM20.2195 31.46C20.2195 33.0133 18.9603 34.2725 17.407 34.2725C15.8537 34.2725 14.5945 33.0133 14.5945 31.46C14.5945 29.9067 15.8537 28.6475 17.407 28.6475C18.9603 28.6475 20.2195 29.9067 20.2195 31.46Z',
            stroke: 'white',
            strokeOpacity: '0.6',
            strokeWidth: '0.113372'
          }), jsx('path', {
            d: 'M17.2926 28.5586C15.752 28.5586 14.5032 29.8074 14.5032 31.348C14.5032 32.8886 15.752 34.1374 17.2926 34.1374C18.8332 34.1374 20.082 32.8886 20.082 31.348C20.082 29.8074 18.8332 28.5586 17.2926 28.5586ZM17.2926 29.1165C17.6608 29.1165 18.0653 29.9622 18.1269 31.0682L16.4616 31.0716C16.523 29.9656 16.9244 29.1165 17.2926 29.1165ZM16.3076 29.3405C16.0678 29.8071 15.9394 30.4258 15.9085 31.0696L15.0772 31.0671C15.1604 30.307 15.6722 29.6693 16.3076 29.3405ZM18.2789 29.3419C18.9144 29.6707 19.4131 30.2905 19.5093 31.0716L18.6784 31.0691C18.6522 30.3996 18.504 29.811 18.2789 29.3419ZM15.0789 31.6281L15.9099 31.6211C15.9408 32.2649 16.07 32.8942 16.3088 33.3558C15.6415 33.0214 15.1749 32.3667 15.0789 31.6281ZM16.4572 31.6303L18.1224 31.6267C18.0611 32.7324 17.6608 33.5795 17.2926 33.5795C16.9244 33.5795 16.5185 32.7363 16.4572 31.6303ZM18.6798 31.6275L19.5071 31.625C19.4112 32.3639 18.9448 33.0239 18.2778 33.3528C18.5255 32.8406 18.6488 32.2713 18.6798 31.6275Z',
            fill: '#007BE5'
          })]
        })
      })]
    }), jsxs('defs', {
      children: [jsx('pattern', {
        id: 'pattern0_4378_11285',
        patternContentUnits: 'objectBoundingBox',
        width: '1',
        height: '1',
        children: jsx('use', {
          xlinkHref: '#image0_4378_11285',
          transform: 'matrix(0.00083331 0 0 0.00145829 0 -0.000923572)'
        })
      }), jsx('pattern', {
        id: 'pattern1_4378_11285',
        patternContentUnits: 'objectBoundingBox',
        width: '1',
        height: '1',
        children: jsx('use', {
          xlinkHref: '#image1_4378_11285',
          transform: 'matrix(0.000916004 0 0 0.00166667 -0.0496025 0)'
        })
      }), jsxs('filter', {
        id: 'filter0_dd_4378_11285',
        x: '4',
        y: '4',
        width: '72',
        height: '42',
        filterUnits: 'userSpaceOnUse',
        colorInterpolationFilters: 'sRGB',
        children: [jsx('feFlood', {
          floodOpacity: '0',
          result: 'BackgroundImageFix'
        }), jsx('feColorMatrix', {
          in: 'SourceAlpha',
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
          result: 'hardAlpha'
        }), jsx('feOffset', {
          dy: '1'
        }), jsx('feGaussianBlur', {
          stdDeviation: '1.5'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_4378_11285'
        }), jsx('feColorMatrix', {
          in: 'SourceAlpha',
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
          result: 'hardAlpha'
        }), jsx('feOffset', {}), jsx('feGaussianBlur', {
          stdDeviation: '0.25'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'effect1_dropShadow_4378_11285',
          result: 'effect2_dropShadow_4378_11285'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect2_dropShadow_4378_11285',
          result: 'shape'
        })]
      }), jsx('pattern', {
        id: 'pattern2_4378_11285',
        patternContentUnits: 'objectBoundingBox',
        width: '1',
        height: '1',
        children: jsx('use', {
          xlinkHref: '#image0_4378_11285',
          transform: 'matrix(0.00083331 0 0 0.00145829 0 -0.000923572)'
        })
      }), jsx('pattern', {
        id: 'pattern3_4378_11285',
        patternContentUnits: 'objectBoundingBox',
        width: '1',
        height: '1',
        children: jsx('use', {
          xlinkHref: '#image1_4378_11285',
          transform: 'matrix(0.000909091 0 0 0.00166667 -0.0454545 0)'
        })
      }), jsxs('filter', {
        id: 'filter1_d_4378_11285',
        x: '4.51214',
        y: '-11.5379',
        width: '85.9957',
        height: '85.9957',
        filterUnits: 'userSpaceOnUse',
        colorInterpolationFilters: 'sRGB',
        children: [jsx('feFlood', {
          floodOpacity: '0',
          result: 'BackgroundImageFix'
        }), jsx('feColorMatrix', {
          in: 'SourceAlpha',
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
          result: 'hardAlpha'
        }), jsx('feMorphology', {
          radius: '6.79957',
          operator: 'dilate',
          in: 'SourceAlpha',
          result: 'effect1_dropShadow_4378_11285'
        }), jsx('feOffset', {}), jsx('feGaussianBlur', {
          stdDeviation: '13.5991'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0.488656 0 0 0 0 0.788409 0 0 0 0 1 0 0 0 1 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_4378_11285'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_4378_11285',
          result: 'shape'
        })]
      }), jsxs('filter', {
        id: 'filter2_d_4378_11285',
        x: '19.4091',
        y: '-11.5379',
        width: '85.9957',
        height: '85.9957',
        filterUnits: 'userSpaceOnUse',
        colorInterpolationFilters: 'sRGB',
        children: [jsx('feFlood', {
          floodOpacity: '0',
          result: 'BackgroundImageFix'
        }), jsx('feColorMatrix', {
          in: 'SourceAlpha',
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
          result: 'hardAlpha'
        }), jsx('feMorphology', {
          radius: '6.79957',
          operator: 'dilate',
          in: 'SourceAlpha',
          result: 'effect1_dropShadow_4378_11285'
        }), jsx('feOffset', {}), jsx('feGaussianBlur', {
          stdDeviation: '13.5991'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0.488656 0 0 0 0 0.788409 0 0 0 0 1 0 0 0 1 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_4378_11285'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_4378_11285',
          result: 'shape'
        })]
      }), jsxs('filter', {
        id: 'filter3_d_4378_11285',
        x: '-10.5394',
        y: '-26.5897',
        width: '85.9957',
        height: '85.9957',
        filterUnits: 'userSpaceOnUse',
        colorInterpolationFilters: 'sRGB',
        children: [jsx('feFlood', {
          floodOpacity: '0',
          result: 'BackgroundImageFix'
        }), jsx('feColorMatrix', {
          in: 'SourceAlpha',
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
          result: 'hardAlpha'
        }), jsx('feMorphology', {
          radius: '6.79957',
          operator: 'dilate',
          in: 'SourceAlpha',
          result: 'effect1_dropShadow_4378_11285'
        }), jsx('feOffset', {}), jsx('feGaussianBlur', {
          stdDeviation: '13.5991'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0.488656 0 0 0 0 0.788409 0 0 0 0 1 0 0 0 1 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_4378_11285'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_4378_11285',
          result: 'shape'
        })]
      }), jsxs('filter', {
        id: 'filter4_d_4378_11285',
        x: '4.51239',
        y: '-26.5897',
        width: '85.9957',
        height: '85.9957',
        filterUnits: 'userSpaceOnUse',
        colorInterpolationFilters: 'sRGB',
        children: [jsx('feFlood', {
          floodOpacity: '0',
          result: 'BackgroundImageFix'
        }), jsx('feColorMatrix', {
          in: 'SourceAlpha',
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
          result: 'hardAlpha'
        }), jsx('feMorphology', {
          radius: '6.79957',
          operator: 'dilate',
          in: 'SourceAlpha',
          result: 'effect1_dropShadow_4378_11285'
        }), jsx('feOffset', {}), jsx('feGaussianBlur', {
          stdDeviation: '13.5991'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0.488656 0 0 0 0 0.788409 0 0 0 0 1 0 0 0 1 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_4378_11285'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_4378_11285',
          result: 'shape'
        })]
      }), jsxs('filter', {
        id: 'filter5_d_4378_11285',
        x: '19.4094',
        y: '-26.5897',
        width: '85.9957',
        height: '85.9957',
        filterUnits: 'userSpaceOnUse',
        colorInterpolationFilters: 'sRGB',
        children: [jsx('feFlood', {
          floodOpacity: '0',
          result: 'BackgroundImageFix'
        }), jsx('feColorMatrix', {
          in: 'SourceAlpha',
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
          result: 'hardAlpha'
        }), jsx('feMorphology', {
          radius: '6.79957',
          operator: 'dilate',
          in: 'SourceAlpha',
          result: 'effect1_dropShadow_4378_11285'
        }), jsx('feOffset', {}), jsx('feGaussianBlur', {
          stdDeviation: '13.5991'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0.488656 0 0 0 0 0.788409 0 0 0 0 1 0 0 0 1 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_4378_11285'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_4378_11285',
          result: 'shape'
        })]
      }), jsxs('filter', {
        id: 'filter6_d_4378_11285',
        x: '-10.5391',
        y: '-11.5379',
        width: '85.9957',
        height: '85.9957',
        filterUnits: 'userSpaceOnUse',
        colorInterpolationFilters: 'sRGB',
        children: [jsx('feFlood', {
          floodOpacity: '0',
          result: 'BackgroundImageFix'
        }), jsx('feColorMatrix', {
          in: 'SourceAlpha',
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
          result: 'hardAlpha'
        }), jsx('feMorphology', {
          radius: '6.79957',
          operator: 'dilate',
          in: 'SourceAlpha',
          result: 'effect1_dropShadow_4378_11285'
        }), jsx('feOffset', {}), jsx('feGaussianBlur', {
          stdDeviation: '13.5991'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0.488656 0 0 0 0 0.788409 0 0 0 0 1 0 0 0 1 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_4378_11285'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_4378_11285',
          result: 'shape'
        })]
      }), jsxs('filter', {
        id: 'filter7_d_4378_11285',
        x: '-25.5906',
        y: '-26.5897',
        width: '85.9957',
        height: '85.9957',
        filterUnits: 'userSpaceOnUse',
        colorInterpolationFilters: 'sRGB',
        children: [jsx('feFlood', {
          floodOpacity: '0',
          result: 'BackgroundImageFix'
        }), jsx('feColorMatrix', {
          in: 'SourceAlpha',
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
          result: 'hardAlpha'
        }), jsx('feMorphology', {
          radius: '6.79957',
          operator: 'dilate',
          in: 'SourceAlpha',
          result: 'effect1_dropShadow_4378_11285'
        }), jsx('feOffset', {}), jsx('feGaussianBlur', {
          stdDeviation: '13.5991'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0.488656 0 0 0 0 0.788409 0 0 0 0 1 0 0 0 1 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_4378_11285'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_4378_11285',
          result: 'shape'
        })]
      }), jsxs('filter', {
        id: 'filter8_d_4378_11285',
        x: '-25.5909',
        y: '-11.5379',
        width: '85.9957',
        height: '85.9957',
        filterUnits: 'userSpaceOnUse',
        colorInterpolationFilters: 'sRGB',
        children: [jsx('feFlood', {
          floodOpacity: '0',
          result: 'BackgroundImageFix'
        }), jsx('feColorMatrix', {
          in: 'SourceAlpha',
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
          result: 'hardAlpha'
        }), jsx('feMorphology', {
          radius: '6.79957',
          operator: 'dilate',
          in: 'SourceAlpha',
          result: 'effect1_dropShadow_4378_11285'
        }), jsx('feOffset', {}), jsx('feGaussianBlur', {
          stdDeviation: '13.5991'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0.488656 0 0 0 0 0.788409 0 0 0 0 1 0 0 0 1 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_4378_11285'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_4378_11285',
          result: 'shape'
        })]
      }), jsx('clipPath', {
        id: 'clip0_4378_11285',
        children: jsx('rect', {
          x: '40.7627',
          y: '24.7129',
          width: '13.4945',
          height: '13.4945',
          rx: '2.5951',
          fill: 'white'
        })
      }), jsx('clipPath', {
        id: 'clip1_4378_11285',
        children: jsx('rect', {
          x: '55.6597',
          y: '24.7129',
          width: '13.4945',
          height: '13.4945',
          rx: '2.5951',
          fill: 'white'
        })
      }), jsx('clipPath', {
        id: 'clip2_4378_11285',
        children: jsx('rect', {
          x: '25.7114',
          y: '9.66113',
          width: '13.4945',
          height: '13.4945',
          rx: '2.5951',
          fill: 'white'
        })
      }), jsx('clipPath', {
        id: 'clip3_4378_11285',
        children: jsx('rect', {
          x: '40.7627',
          y: '9.66113',
          width: '13.4945',
          height: '13.4945',
          rx: '2.5951',
          fill: 'white'
        })
      }), jsx('clipPath', {
        id: 'clip4_4378_11285',
        children: jsx('rect', {
          width: '7.25582',
          height: '7.25582',
          fill: 'white',
          transform: 'translate(44.0486 12.9473)'
        })
      }), jsx('clipPath', {
        id: 'clip5_4378_11285',
        children: jsx('rect', {
          x: '55.6597',
          y: '9.66113',
          width: '13.4945',
          height: '13.4945',
          rx: '2.5951',
          fill: 'white'
        })
      }), jsx('clipPath', {
        id: 'clip6_4378_11285',
        children: jsx('rect', {
          x: '25.7114',
          y: '24.7129',
          width: '13.4945',
          height: '13.4945',
          rx: '2.5951',
          fill: 'white'
        })
      }), jsx('clipPath', {
        id: 'clip7_4378_11285',
        children: jsx('rect', {
          x: '10.6597',
          y: '9.66113',
          width: '13.4945',
          height: '13.4945',
          rx: '2.5951',
          fill: 'white'
        })
      }), jsx('clipPath', {
        id: 'clip8_4378_11285',
        children: jsx('rect', {
          x: '10.6597',
          y: '24.7129',
          width: '13.4945',
          height: '13.4945',
          rx: '2.5951',
          fill: 'white'
        })
      })]
    })]
  });
}
function n$() {
  return jsxs('svg', {
    width: '74px',
    height: '45px',
    viewBox: '0 0 76 46',
    fill: 'none',
    children: [jsx('rect', {
      width: '66',
      height: '36.2738',
      rx: '3',
      transform: 'matrix(0.998629 -0.052336 -0.052336 -0.998629 1.89844 39.6787)',
      fill: 'url(#pattern0_4378_11342)'
    }), jsx('rect', {
      width: '66',
      height: '36.2738',
      rx: '3',
      transform: 'matrix(0.998629 -0.052336 -0.052336 -0.998629 1.89844 39.6787)',
      fill: 'url(#pattern1_4378_11342)'
    }), jsx('rect', {
      width: '66',
      height: '36.2738',
      rx: '3',
      transform: 'matrix(0.998629 -0.052336 -0.052336 -0.998629 1.89844 39.6787)',
      fill: '#F8D4C4'
    }), jsx('g', {
      filter: 'url(#filter0_dd_4378_11342)',
      children: jsxs('g', {
        clipPath: 'url(#clip0_4378_11342)',
        children: [jsx('rect', {
          width: '66',
          height: '36',
          rx: '3',
          transform: 'matrix(-1 0 0 1 72.9983 6)',
          fill: 'url(#pattern2_4378_11342)'
        }), jsx('rect', {
          width: '66',
          height: '36',
          rx: '3',
          transform: 'matrix(-1 0 0 1 72.9983 6)',
          fill: 'url(#pattern3_4378_11342)'
        }), jsx('rect', {
          width: '66',
          height: '36',
          rx: '3',
          transform: 'matrix(-1 0 0 1 72.9983 6)',
          fill: '#FFFBEB'
        }), jsx('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M23.9114 27.9895C23.8542 28.1061 23.6358 28.1415 23.4926 28.1662C22.3258 28.3713 17.2683 28.4774 16.7815 28.0637C16.3556 27.7102 16.5918 21.933 17.007 21.6996C17.5439 21.385 23.3996 21.3249 23.8076 21.6466C24.1047 21.8906 24.2908 27.1727 23.9114 27.9895ZM23.7181 21.7208C23.3924 21.4521 17.6728 21.6537 17.1573 21.9012C16.8817 22.6295 16.7028 27.2046 16.9712 27.8551C17.4079 28.1521 22.7589 28.1415 23.6931 27.8551C24.0582 26.9889 23.9222 21.8906 23.7181 21.7208ZM38.1462 21.1021C38.2881 21.342 38.4798 21.5495 38.7086 21.7109C38.9375 21.8724 39.1984 21.9842 39.4741 22.0391C39.4825 22.0369 39.4914 22.0367 39.4999 22.0385C39.5085 22.0402 39.5165 22.0439 39.5234 22.0492C39.5303 22.0545 39.5359 22.0612 39.5397 22.069C39.5436 22.0767 39.5456 22.0852 39.5456 22.0939C39.5456 22.1025 39.5436 22.111 39.5397 22.1187C39.5359 22.1265 39.5303 22.1333 39.5234 22.1385C39.5165 22.1438 39.5085 22.1475 39.4999 22.1492C39.4914 22.151 39.4825 22.1508 39.4741 22.1487C38.8441 22.3113 38.0245 21.7456 38.0245 21.1233C38.0216 21.1074 38.0253 21.091 38.0347 21.0777C38.0441 21.0645 38.0585 21.0554 38.0746 21.0526C38.0907 21.0498 38.1073 21.0534 38.1208 21.0627C38.1342 21.072 38.1433 21.0862 38.1462 21.1021ZM41.0704 17.9378V18.2913C41.0704 18.3382 41.0516 18.3832 41.018 18.4163C40.9845 18.4495 40.9389 18.4681 40.8915 18.4681C40.8443 18.4672 40.7993 18.4483 40.7659 18.4153C40.7326 18.3824 40.7134 18.3379 40.7125 18.2913V17.9378C40.7125 17.8909 40.7314 17.8459 40.7649 17.8128C40.7985 17.7796 40.844 17.761 40.8915 17.761C40.9389 17.761 40.9845 17.7796 41.018 17.8128C41.0516 17.8459 41.0704 17.8909 41.0704 17.9378ZM37.5019 18.2736C37.5019 18.3205 37.4831 18.3655 37.4495 18.3986C37.4159 18.4318 37.3704 18.4504 37.3229 18.4504C37.2755 18.4504 37.23 18.4318 37.1964 18.3986C37.1628 18.3655 37.144 18.3205 37.144 18.2736V17.8352C37.144 17.7883 37.1628 17.7434 37.1964 17.7102C37.23 17.6771 37.2755 17.6584 37.3229 17.6584C37.3704 17.6584 37.4159 17.6771 37.4495 17.7102C37.4831 17.7434 37.5019 17.7883 37.5019 17.8352C37.5162 17.9873 37.5019 18.164 37.5019 18.2736Z',
          fill: 'black'
        }), jsx('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M16.7486 43.8508C16.7721 43.8114 16.8054 43.7785 16.8453 43.7553C17.1531 43.6068 18.8282 43.6811 19.1754 43.6952C19.1145 34.4214 24.0611 28.6371 31.2411 26.9789C32.5583 26.6749 32.5619 26.6536 32.5976 26.6749L32.841 26.0137C32.1538 25.9925 31.5919 25.4692 30.9619 25.5753C30.4859 25.6531 30.2461 26.0703 29.7772 26.2471C28.9826 26.544 27.5688 26.0879 27.1357 25.3419C26.9138 24.953 27.1106 24.55 26.971 24.2813C26.7205 24.0656 26.0082 23.7191 25.8042 23.4681C25.3854 22.9519 25.3675 21.7957 25.5572 21.1699C25.8997 20.4618 26.3662 19.819 26.9352 19.2713C27.5543 18.6821 28.1031 18.025 28.571 17.3126C29.1472 16.1777 29.1687 14.6079 29.6447 13.4234C30.1694 12.354 30.9817 11.4477 31.9928 10.8036C32.9802 10.1146 34.1708 9.76773 35.3787 9.81713C36.5062 9.88784 36.9465 10.3616 37.4726 10.5243C37.9988 10.6869 38.1097 10.5243 38.9652 10.8955C39.3048 11.0999 39.6073 11.3593 39.86 11.6627C39.9674 11.7759 39.9602 11.7829 40.1427 11.79C40.3393 11.7754 40.5367 11.7754 40.7333 11.79C41.0685 11.8635 41.389 11.9913 41.6818 12.1683C43.6755 13.3492 43.1386 15.7251 43.8902 17.4717C44.4021 18.6597 45.8266 19.8017 45.9483 21.0427C45.9914 21.6133 45.8672 22.1841 45.5904 22.6867C44.7206 24.1964 43.4715 23.012 42.8236 23.9348C42.6196 24.2247 42.4657 24.5075 42.0863 24.5641C41.6031 24.6277 40.9445 24.2494 40.5508 23.9701C40.4681 24.0654 40.3744 24.1508 40.2716 24.2247C39.9227 24.457 39.548 24.6492 39.1549 24.7975L40.064 26.0526C41.7677 25.8617 44.3842 26.4062 46.07 26.9188C46.1309 26.4945 46.6606 22.9908 47.0615 22.8211C47.6163 22.5806 53.4397 23.2489 53.7941 23.6272C54.0554 23.903 53.5865 29.1533 53.0782 29.9382C53.0031 30.0584 52.7454 30.062 52.6022 30.0655C53.4397 30.6312 54.2487 31.204 54.5386 31.4126C54.7641 30.6418 55.9488 26.5653 56.3855 25.897C56.5108 25.7026 56.6253 25.7061 57.2016 25.897C57.53 24.2782 57.9458 22.6778 58.4471 21.1028C58.2592 20.7975 58.109 20.4711 57.9997 20.1305C57.8663 19.591 57.8468 19.0301 57.9425 18.4829C57.5058 18.6278 54.8965 19.335 54.4741 19.1299C54.3607 19.0499 54.2766 18.9358 54.2343 18.8046C53.7726 17.8076 52.9816 14.4028 52.9207 13.3244C52.8957 13.1864 52.9197 13.044 52.9888 12.9214C53.4075 12.49 59.0413 10.8884 59.5173 11.1006C59.8073 11.2314 60.5911 13.7735 60.6734 14.074C61.3571 16.3403 61.0099 15.8418 61.3893 15.9726C61.826 16.1246 62.2018 17.0333 62.3557 17.454C62.5096 17.8748 62.6707 18.4405 62.4881 18.7728C62.5623 18.908 62.5921 19.0625 62.5735 19.2152C62.5549 19.3678 62.4888 19.5109 62.3843 19.6249C62.4982 19.7502 62.5724 19.9057 62.5978 20.0722C62.6232 20.2387 62.5988 20.4089 62.5275 20.5618C62.4237 20.8836 61.7759 21.0957 61.4537 21.1876C61.7081 21.8646 61.9196 22.5566 62.0873 23.2595C62.3728 24.3502 62.601 25.4548 62.7709 26.5688C62.8768 27.1101 62.9117 27.6627 62.8747 28.2128L63.4617 28.4745C63.4843 28.4847 63.5034 28.5012 63.5167 28.5219C63.5301 28.5426 63.5371 28.5666 63.5369 28.5912C63.5369 28.5912 63.4259 32.8763 61.9978 36.4366C60.2726 40.7465 57.4342 42.1891 53.114 40.5768C53.0751 40.9151 52.9908 41.2469 52.8635 41.5633C52.799 41.6764 52.5807 41.6976 52.434 41.7118C51.1633 41.7529 49.8913 41.7139 48.6256 41.5951L47.5518 48.3127C47.8418 49.14 51.1311 58.5659 51.0846 59.4428C51.0846 59.5347 51.0488 59.6054 50.8949 59.6761C49.9464 60.111 40.9588 61.2707 40.6188 60.3019C40.5329 60.065 40.3253 58.5553 40.2859 58.269L35.2284 57.7174L30.4071 58.0321C30.3552 58.5089 30.2691 58.9815 30.1494 59.4463C30.1065 59.5524 30.0564 59.609 29.9311 59.5983C29.455 59.5524 26.9173 59.0998 26.2158 58.969C23.5242 58.467 23.585 58.4245 23.6638 58.1629C23.8535 57.5442 25.6145 52.7181 26.3017 50.4659C25.2964 50.5719 24.2825 50.5719 23.2772 50.4659C23.2663 50.5042 23.2459 50.5391 23.2178 50.5676C23.1896 50.596 23.1547 50.617 23.1162 50.6285C22.4612 50.8654 16.609 50.5366 16.1294 50.0628C15.6963 49.6845 16.4229 44.3882 16.7486 43.8508ZM59.5102 11.2526C59.4708 11.1925 59.4851 11.1677 59.1702 11.2137C57.8566 11.3975 53.5614 12.7658 53.1892 13.0876C53.1176 13.8972 54.1806 18.3415 54.5994 18.8789C54.9037 18.9814 56.9224 18.4723 57.2338 18.391C59.6032 17.7793 59.5102 17.6838 60.0507 17.5601C60.3298 17.4646 60.3585 17.4611 60.3513 17.4222C60.3504 17.4135 60.3463 17.4053 60.3396 17.3995C60.333 17.3936 60.3244 17.3903 60.3155 17.3904C59.9934 17.3904 59.1308 17.3656 58.9196 17.1181C58.873 17.0678 58.8382 17.0079 58.8177 16.9428C58.7973 16.8776 58.7916 16.8088 58.8012 16.7413C58.8108 16.6737 58.8353 16.6091 58.8731 16.552C58.9109 16.4949 58.961 16.4468 59.0198 16.411C59.4798 16.229 59.9606 16.1031 60.4515 16.0362C60.5983 16.008 60.7772 15.9585 60.9562 15.9373C60.7092 14.8341 59.8932 11.8395 59.5102 11.2526ZM62.5848 28.0962V27.5482C62.5526 26.8764 62.2268 25.1121 62.1302 24.6277C61.9727 23.8428 61.9369 23.6661 61.4788 21.9619C61.4788 21.9159 61.2032 21.1558 61.2032 21.1558C61.1982 21.1426 61.1962 21.1285 61.1972 21.1145C61.1982 21.1004 61.2022 21.0868 61.209 21.0744C61.2158 21.062 61.2252 21.0512 61.2365 21.0427C61.2478 21.0342 61.2609 21.0281 61.2748 21.025C61.3141 21.025 62.2447 20.7987 62.3485 20.5052C62.4523 20.2118 62.4738 19.8582 62.2125 19.7027C62.2029 19.6958 62.1951 19.6867 62.1897 19.6763C62.1843 19.6658 62.1815 19.6543 62.1815 19.6426C62.1815 19.6308 62.1843 19.6193 62.1897 19.6088C62.1951 19.5984 62.2029 19.5893 62.2125 19.5825C62.3269 19.4897 62.4039 19.3595 62.4295 19.2155C62.4551 19.0716 62.4277 18.9233 62.3521 18.7976C62.2698 18.6314 62.7101 18.7127 62.1875 17.5212C62.055 17.2277 61.6076 16.3262 61.3034 16.2272C61.034 16.2012 60.7621 16.2313 60.5052 16.3156C60.0566 16.3854 59.6156 16.4966 59.188 16.6479C59.1609 16.6623 59.1374 16.6828 59.1195 16.7076C59.1016 16.7325 59.0898 16.7611 59.085 16.7912C59.0801 16.8213 59.0824 16.8521 59.0916 16.8813C59.1008 16.9104 59.1166 16.937 59.1379 16.959C59.2952 17.0471 59.4675 17.1058 59.6462 17.1323C60.7737 17.3515 60.5732 17.1075 60.72 17.4858C61.1507 17.4609 61.5813 17.5372 61.9763 17.7086C62.1302 17.7404 62.0658 17.8394 61.9548 17.8217C61.4753 17.6665 60.9624 17.6409 60.4694 17.7475C60.1834 17.7991 59.9038 17.8809 59.6355 17.9914C59.3921 18.0891 59.176 18.2431 59.0055 18.4405C58.9751 18.5153 58.9637 18.5963 58.9724 18.6765C58.9812 18.7566 59.0097 18.8334 59.0556 18.9001C59.1415 19.0309 59.5567 18.9425 59.7142 18.9001C59.929 18.8364 60.1545 18.7834 60.3656 18.7162C60.6627 18.6243 60.6305 18.5996 60.7236 18.6066C61.0518 18.6526 61.3729 18.7393 61.6792 18.8647C61.6879 18.8657 61.6962 18.8686 61.7036 18.8733C61.7109 18.8779 61.7171 18.8841 61.7216 18.8915C61.7262 18.8989 61.7289 18.9071 61.7297 18.9157C61.7305 18.9243 61.7293 18.9329 61.7263 18.941C61.7232 18.949 61.7183 18.9563 61.7119 18.9622C61.7055 18.9681 61.6979 18.9725 61.6896 18.975C61.6812 18.9775 61.6724 18.9781 61.6638 18.9768C61.6552 18.9755 61.647 18.9722 61.6398 18.9673C61.3657 18.8909 61.0855 18.8377 60.8023 18.8082C60.6412 18.8082 60.745 18.8082 60.3406 18.9673C60.158 19.0344 59.9826 19.0875 59.7894 19.1511C59.665 19.1932 59.5367 19.2228 59.4064 19.2395C59.1773 19.4516 59.0127 19.9466 59.3205 20.035C59.4414 20.0556 59.5658 20.0409 59.6784 19.9926C60.4981 19.7274 59.9433 19.5365 61.7222 19.8971C61.7367 19.8989 61.75 19.9061 61.7594 19.9173C61.7687 19.9285 61.7733 19.9428 61.7723 19.9572C61.7723 20.0492 61.7114 19.9926 60.7271 19.9572C60.6081 19.9454 60.4882 19.9454 60.3692 19.9572C60.0614 20.1128 59.6032 20.378 59.2489 20.2754C58.8158 20.1375 58.8301 19.6638 59.1093 19.3173C59.2095 19.1971 59.2203 19.2324 59.1344 19.2183C59.0715 19.2116 59.0108 19.1921 58.956 19.161C58.9012 19.13 58.8534 19.0881 58.8158 19.038C58.731 18.9225 58.6836 18.7843 58.6798 18.6417C58.676 18.4991 58.7159 18.3587 58.7943 18.2389L58.193 18.4157C58.074 18.9633 58.0838 19.5306 58.2216 20.0739C58.26 20.2065 58.3103 20.3355 58.372 20.4593C58.6333 21.0038 58.7299 21.0214 58.6977 21.124C58.2003 22.7215 57.7905 24.3443 57.47 25.9854C58.8194 26.4521 61.2927 27.5269 62.5848 28.0962ZM34.262 52.665C32.7301 52.7287 29.4371 52.8454 27.9267 52.7994C28.0305 53.2449 28.0949 53.5277 28.1128 53.5914C28.8323 53.5914 33.4817 52.7959 34.262 52.665ZM27.3469 52.4847C28.3061 52.7075 40.7584 52.2266 41.825 51.7776C41.714 50.9856 40.6689 46.5343 40.4577 45.6257C39.5183 45.9097 38.541 46.0528 37.5585 46.0499C37.2006 46.2338 36.61 46.552 36.2557 46.7182C36.295 47.0187 36.3917 47.7293 36.1769 47.9415C35.9622 48.1536 31.0192 49.9462 26.6847 50.4482C26.8595 51.1408 27.0808 51.8211 27.3469 52.4847ZM40.5723 43.9745C40.7371 43.9251 40.8895 43.842 41.0197 43.7306C41.1127 43.6316 41.0805 43.3311 41.0197 43.1896C40.9864 43.1209 40.9273 43.0676 40.855 43.0411C40.7676 43.0036 40.6745 42.9809 40.5794 42.974C40.551 42.9733 40.5234 42.9641 40.5005 42.9476C40.4775 42.931 40.4602 42.9079 40.4508 42.8814C40.4415 42.8549 40.4406 42.8262 40.4482 42.7991C40.4558 42.7721 40.4716 42.7479 40.4935 42.73C40.7029 42.5558 40.8487 42.3186 40.9087 42.0547C40.9087 41.8603 40.8335 41.6587 40.5186 41.4819C40.1606 41.5102 39.0869 42.3871 38.5893 41.8815C38.0918 41.3759 38.6788 40.1915 38.124 40.0925C37.5693 39.9935 37.2901 41.641 37.1934 41.8214C36.8713 42.4401 36.0051 42.882 35.5112 43.3912C35.8095 44.445 36.0484 45.5144 36.227 46.5944C36.9429 46.2161 37.4726 45.8873 37.5263 45.8873C38.2744 45.8625 40.2823 45.6575 40.8049 45.1307C40.8978 45.0598 40.9615 44.9578 40.9839 44.844C41.0063 44.7301 40.9859 44.6121 40.9266 44.512C40.8885 44.4455 40.8372 44.3874 40.7756 44.3412C40.7141 44.295 40.6437 44.2617 40.5687 44.2432C40.538 44.2358 40.5108 44.2184 40.4915 44.1937C40.4721 44.1691 40.4618 44.1387 40.4622 44.1075C40.4627 44.0763 40.4738 44.0462 40.4937 44.022C40.5137 43.9979 40.5414 43.9811 40.5723 43.9745ZM36.585 32.201C37.2499 32.1382 37.9179 32.1122 38.5858 32.1232C38.6717 32.1232 38.7433 32.1656 38.7683 32.247C38.8292 32.4732 39.8421 39.8273 39.8922 40.1879C40.107 36.6523 40.3289 32.9293 40.4935 30.1999C39.2479 32.1621 39.1406 32.3566 38.9437 32.2187C38.28 31.6795 37.6523 31.0985 37.0646 30.4792C36.9572 30.8716 36.7854 31.5116 36.585 32.201ZM33.3099 30.96C33.5533 30.6064 33.7931 30.2529 33.8826 30.1221L32.7265 27.2476L33.3099 30.96ZM32.476 26.9011C31.1222 27.1769 29.8022 27.5953 28.5388 28.1492C28.5924 28.3154 29.2832 30.4014 30.1101 32.8904C30.4895 32.8445 32.6621 32.5828 33.3314 32.5121L32.476 26.9011ZM33.9399 30.5145L33.3743 31.356L33.5533 32.4874L34.1081 32.4167C34.0258 31.6494 33.9685 30.9211 33.9399 30.5145ZM24.0575 34.2446C24.062 34.7049 24.1075 35.1639 24.1935 35.6164C25.4212 35.3053 36.1304 32.7031 37.2185 33.3147C37.7625 33.6258 39.5522 40.8809 39.724 41.535L39.8528 41.4713C39.2873 37.5433 38.5357 32.3919 38.5357 32.3778C37.3151 32.2399 25.5572 33.5551 24.0575 34.2446ZM30.3033 41.6375C31.1051 41.5845 34.2871 41.4289 34.9564 41.8673C35.0602 41.938 35.1031 41.9522 35.4718 43.2603C35.9478 42.7618 36.746 42.2916 37.0145 41.7365C37.1362 41.4925 37.333 39.7106 38.167 39.8485C39.2909 40.0359 37.8556 42.3234 39.5164 41.6163C39.409 41.1673 37.648 33.6789 37.1576 33.4031C36.1196 32.8197 24.7984 35.6659 23.3667 36.0654C23.449 36.9281 24.5013 41.5314 24.6946 42.3729C26.5483 42.0211 28.421 41.7755 30.3033 41.6375ZM35.8154 16.906C35.615 17.0404 35.6221 17.3621 35.6579 17.5954C35.9085 19.1759 37.512 20.134 38.6251 18.6208C38.8793 18.2672 39.0761 17.1429 38.9043 16.8954C38.7898 16.7504 37.8663 16.7434 37.6802 16.7434C37.3366 16.7469 35.9944 16.7999 35.8297 16.906H35.8154ZM40.0783 17.1606C40.0783 17.8253 40.3038 18.9284 40.9016 19.2466C41.8644 19.7416 42.8415 18.9567 42.8666 17.9349C42.9033 17.5618 42.8852 17.1855 42.8129 16.8176L42.7771 16.7999C42.8344 16.7009 40.3181 16.6691 40.0926 16.8919C40.085 16.9813 40.085 17.0712 40.0926 17.1606H40.0783ZM38.8327 24.8576C38.2135 25.0343 37.2149 24.9495 36.7353 24.4651C36.7252 24.4546 36.7196 24.4407 36.7196 24.4262C36.7196 24.4118 36.7252 24.3978 36.7353 24.3873C36.8176 24.2883 36.7353 24.4793 37.6659 24.6171C38.5965 24.755 39.1585 24.6171 40.0998 24.0126C40.5325 23.6199 40.8565 23.1246 41.0411 22.5736C41.4265 21.641 41.6679 20.6566 41.757 19.6532C41.4201 19.7077 41.0744 19.6518 40.7727 19.4941C40.4798 19.3249 40.2529 19.0634 40.1284 18.7516C40.2492 19.1252 40.3484 19.5053 40.4255 19.89C40.4423 19.9393 40.4448 19.9922 40.4328 20.0428C40.4208 20.0934 40.3947 20.1397 40.3575 20.1764C40.11 20.3259 39.8186 20.3882 39.5307 20.3532C39.5222 20.3554 39.5134 20.3556 39.5048 20.3538C39.4963 20.352 39.4883 20.3484 39.4814 20.3431C39.4745 20.3378 39.4689 20.331 39.4651 20.3233C39.4612 20.3155 39.4592 20.307 39.4592 20.2984C39.4592 20.2898 39.4612 20.2813 39.4651 20.2735C39.4689 20.2658 39.4745 20.259 39.4814 20.2537C39.4883 20.2484 39.4963 20.2448 39.5048 20.243C39.5134 20.2413 39.5222 20.2415 39.5307 20.2436C39.743 20.2203 39.948 20.1528 40.132 20.0456C40.2143 19.989 40.1785 20.0244 40.1535 19.9077C40.1284 19.7911 39.6631 18.1046 39.6381 17.9985C39.5271 17.9985 39.1048 17.9419 39.1048 17.8394C39.1048 17.7369 39.4412 17.7086 39.5665 17.7157C39.5665 17.6697 39.545 17.6308 39.5343 17.5954C39.5286 17.5814 39.5288 17.5657 39.5348 17.5517C39.5409 17.5378 39.5522 17.5268 39.5665 17.5212C39.5807 17.5156 39.5966 17.5158 39.6107 17.5217C39.6248 17.5277 39.636 17.539 39.6416 17.553C39.7669 17.7934 39.681 17.705 39.8492 17.7475C39.7847 17.4206 39.7847 17.0844 39.8492 16.7575C40.0533 16.4464 41.281 16.5171 41.6818 16.5418C41.4778 15.3574 40.6832 14.774 40.1964 13.8265C40.0601 13.6066 39.8783 13.4174 39.6631 13.2714C39.5557 13.2431 39.3446 13.5083 39.2157 13.5719C39.0869 13.6356 38.9652 13.9856 38.8578 14.1058C38.5202 14.4855 38.1311 14.8175 37.7017 15.0922C37.3438 15.3433 36.7854 15.3822 36.542 15.7039C36.4392 15.9775 36.3894 16.2677 36.3953 16.5595C36.857 16.5312 38.7826 16.5029 39.0117 16.8282C39.2193 17.0899 39.1298 18.2849 38.8256 18.7445C38.0596 19.89 36.882 19.9608 35.9622 18.9284C35.8633 18.8065 35.7792 18.6736 35.7116 18.5324C35.0244 19.5931 34.4839 20.2259 34.4589 21.4705C34.4302 23.0473 34.8812 25.6601 33.1524 25.989L32.8554 26.7986C34.2871 30.3554 34.2119 30.1327 34.2119 30.168C34.2119 30.2034 34.2799 31.2287 34.4052 32.4025C35.0924 32.3318 35.7331 32.2717 36.3022 32.2257C36.3451 32.0808 36.8785 30.2069 36.8677 30.168C36.814 29.9913 37.0825 29.6448 37.2901 29.3372C38.0686 28.2238 38.9186 27.1609 39.8349 26.1551L38.8327 24.8576ZM40.0926 26.2506C40.0318 26.3425 37.4547 29.1427 37.1397 30.1716C37.7188 30.8056 38.3445 31.3965 39.0117 31.9394C39.2515 31.6282 39.8994 30.6029 40.515 29.6448C40.6259 27.7956 40.7011 26.5087 40.719 26.24C40.5186 26.2258 40.2931 26.2364 40.107 26.2506H40.0926ZM52.8742 29.7862C53.2823 29.0791 53.8478 24.4828 53.7153 23.7757C53.7153 23.712 53.7153 23.6908 53.4147 23.6095C52.1333 23.2807 47.6377 22.9024 47.1653 23.0615C46.8074 23.7509 46.0235 28.2517 46.2096 28.9447C46.5747 29.2346 51.8219 29.9665 52.8885 29.7862H52.8742ZM52.6237 41.4183C53.0353 40.6193 53.3395 35.4962 53.1355 35.3017C52.8313 35.0118 47.1187 34.7643 46.5783 34.9729C46.2204 35.7154 45.7121 40.2763 45.9233 40.895C46.4101 41.2557 51.779 41.6092 52.638 41.4183H52.6237ZM44.4522 35.4926C44.1945 35.4255 42.3977 34.9729 42.1829 34.8456C42.029 34.7572 41.8536 35.0436 44.8638 26.8835C44.5059 26.5582 41.3776 26.141 40.8837 26.293C40.8837 26.4875 40.4148 34.7396 40.0461 41.3617C40.2215 41.2769 40.4756 41.1461 40.6367 41.2345C41.3096 41.588 41.3525 42.1749 40.855 42.7477C40.9479 42.7702 41.0342 42.8139 41.107 42.8753C41.1797 42.9367 41.2368 43.0141 41.2738 43.1012C41.3312 43.234 41.3556 43.3783 41.345 43.5222C41.3344 43.6661 41.2891 43.8055 41.2129 43.9286C41.1295 44.0075 41.0341 44.0731 40.9302 44.123C41.0371 44.1938 41.1215 44.2931 41.1736 44.4094C41.2205 44.5096 41.2484 44.6175 41.2559 44.7276L44.4522 35.4926ZM35.5434 57.4947L40.2179 58.0073C40.1964 57.8376 39.6703 53.7399 39.5021 52.3504C38.5285 52.4352 37.3545 52.5095 36.0982 52.5766C35.8906 55.1258 35.5255 56.8865 35.5577 57.4947H35.5434ZM35.2964 57.4664C35.2463 56.6603 35.9192 52.6191 35.9228 52.5837L35.5649 52.6014C34.3479 52.8241 31.2125 53.3722 30.8724 53.4287C30.7579 54.5672 30.4716 57.2189 30.4036 57.7634C35.7402 57.424 35.164 57.4522 35.3143 57.4664H35.2964ZM16.3048 49.9002C16.6627 50.183 21.9207 50.6568 23.0052 50.4235C23.424 49.6209 23.7211 44.5013 23.517 44.3069C23.2092 44.0134 17.4967 43.773 16.9634 43.9781C16.6269 44.717 16.1079 49.2956 16.3191 49.9002H16.3048Z',
          fill: 'black'
        })]
      })
    }), jsxs('defs', {
      children: [jsx('pattern', {
        id: 'pattern0_4378_11342',
        patternContentUnits: 'objectBoundingBox',
        width: '1',
        height: '1',
        children: jsx('use', {
          xlinkHref: '#image0_4378_11342',
          transform: 'matrix(0.00083331 0 0 0.00145829 0 -0.000923572)'
        })
      }), jsx('pattern', {
        id: 'pattern1_4378_11342',
        patternContentUnits: 'objectBoundingBox',
        width: '1',
        height: '1',
        children: jsx('use', {
          xlinkHref: '#image1_4378_11342',
          transform: 'matrix(0.000916004 0 0 0.00166667 -0.0496025 0)'
        })
      }), jsxs('filter', {
        id: 'filter0_dd_4378_11342',
        x: '3.99829',
        y: '4',
        width: '72',
        height: '42',
        filterUnits: 'userSpaceOnUse',
        colorInterpolationFilters: 'sRGB',
        children: [jsx('feFlood', {
          floodOpacity: '0',
          result: 'BackgroundImageFix'
        }), jsx('feColorMatrix', {
          in: 'SourceAlpha',
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
          result: 'hardAlpha'
        }), jsx('feOffset', {
          dy: '1'
        }), jsx('feGaussianBlur', {
          stdDeviation: '1.5'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_4378_11342'
        }), jsx('feColorMatrix', {
          in: 'SourceAlpha',
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
          result: 'hardAlpha'
        }), jsx('feOffset', {}), jsx('feGaussianBlur', {
          stdDeviation: '0.25'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'effect1_dropShadow_4378_11342',
          result: 'effect2_dropShadow_4378_11342'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect2_dropShadow_4378_11342',
          result: 'shape'
        })]
      }), jsx('pattern', {
        id: 'pattern2_4378_11342',
        patternContentUnits: 'objectBoundingBox',
        width: '1',
        height: '1',
        children: jsx('use', {
          xlinkHref: '#image0_4378_11342',
          transform: 'matrix(0.00083331 0 0 0.00145829 0 -0.000923572)'
        })
      }), jsx('pattern', {
        id: 'pattern3_4378_11342',
        patternContentUnits: 'objectBoundingBox',
        width: '1',
        height: '1',
        children: jsx('use', {
          xlinkHref: '#image1_4378_11342',
          transform: 'matrix(0.000909091 0 0 0.00166667 -0.0454545 0)'
        })
      }), jsx('clipPath', {
        id: 'clip0_4378_11342',
        children: jsx('rect', {
          width: '66',
          height: '36',
          rx: '3',
          transform: 'matrix(-1 0 0 1 72.9983 6)',
          fill: 'white'
        })
      }), jsx('image', {
        id: 'image0_4378_11342',
        width: '1200',
        height: '687'
      }), jsx('image', {
        id: 'image1_4378_11342',
        width: '1200',
        height: '600'
      })]
    })]
  });
}
function nY({
  type: e
}) {
  let {
    navigateToVisualAssets
  } = wV();
  let s = _$$sN();
  let i = useCallback(e => {
    s('visualAssetPacks', e);
  }, [s]);
  let l = useCallback(() => {
    i(navigateToVisualAssets(e));
  }, [navigateToVisualAssets, i, e]);
  return jsx('div', {
    className: 'asset_panel_visual_asset_packs--assetPanelRow--zIB-D',
    children: jsx('button', {
      onClick: l,
      className: 'asset_panel_visual_asset_packs--assetPackContainer--hci-7',
      children: jsx(nX, {
        type: e
      })
    })
  });
}
function nX({
  type: e
}) {
  let t = e === G3.IconSets ? jsx(nW, {}) : jsx(n$, {});
  let s = e === G3.IconSets ? getI18nString('design_systems.assets_panel.icon_sets') : getI18nString('design_systems.assets_panel.illustrations');
  return jsxs('div', {
    className: 'asset_panel_visual_asset_packs--assetPack--cBQV4',
    children: [t, jsx('h3', {
      className: 'asset_panel_visual_asset_packs--title--NDdZn ellipsis--ellipsis--Tjyfa',
      children: s
    })]
  });
}
let nq = parsePxNumber(RU) + 1;
let nJ = parsePxNumber(_$$nT);
let nZ = 16 / 9;
function nQ({
  sidebarWidth: e,
  minCardWidth: t = 180,
  previewPadding: s = nq,
  widthToHeightRatio: r = nZ,
  rowPadding: i = nJ
}) {
  let l = e - 2 * i;
  let a = useMemo(() => tA({
    elementMinSize: t,
    spaceAvailable: l,
    gap: 0
  }), [t, l]);
  let o = useMemo(() => tP({
    numElements: a,
    spaceAvailable: l,
    gap: 0
  }), [a, l]);
  let d = useMemo(() => o - 2 * s, [o, s]);
  let c = useMemo(() => tL({
    width: d,
    widthToHeightRatio: r
  }), [d, r]);
  return useMemo(() => ({
    cardWidth: o,
    previewWidth: d,
    previewHeight: c,
    numColumns: a
  }), [o, d, c, a]);
}
let n0 = 'asset_panel_libraries--row--nHi0j';
let n1 = 'asset_panel_libraries--libraryPrimaryButton--hs6a7';
let n3 = parsePxNumber(YJ);
let n2 = parsePxNumber(RQ);
let n4 = parsePxNumber(ce);
let n5 = parsePxNumber(Kv);
let n6 = parsePxNumber(PK);
let n8 = parsePxNumber(vr);
let n7 = parsePxNumber(CT) + 16;
function n9({
  width: e,
  hideScrollbar: t,
  localAssets: s
}) {
  let {
    libraries,
    presets,
    siteLibraries,
    librariesForConnectedProject
  } = _$$g3();
  let o = nd();
  let d = useAtomWithSubscription(aK) === _$$t2.Blocks;
  return o ? jsx('div', {
    style: {
      width: e
    },
    children: jsx(od, {})
  }) : d ? jsx(ir, {
    siteLibraries,
    hideScrollbar: t,
    width: e
  }) : jsx(ie, {
    localAssets: s,
    subscribedLibraries: libraries,
    librariesForConnectedProject,
    presetLibraries: presets,
    hideScrollbar: t,
    width: e
  });
}
function ie({
  localAssets: e,
  subscribedLibraries: t,
  presetLibraries: s,
  librariesForConnectedProject: i,
  width: l,
  hideScrollbar: a
}) {
  let {
    librariesScrollTop,
    handleScrollLibraries
  } = tM();
  let c = !!GM()();
  let {
    currentView
  } = wV();
  let [p] = MA();
  let m = useAtomWithSubscription(rO);
  let g = rK();
  let f = c ? $H.LIST : p;
  let {
    cardWidth,
    previewHeight,
    numColumns
  } = nQ({
    sidebarWidth: l
  });
  let j = f === $H.GRID ? numColumns : 1;
  let v = f === 'grid' ? n3 + previewHeight + 2 : n5;
  let S = t.length > 0;
  let k = e.numComponents + e.numTemplates > 0;
  let w = s.length > 0;
  let N = i.length > 0;
  let I = N && (S || k);
  let E = w && (N || S || k);
  let M = useMemo(() => {
    let n = [];
    g && (n.push({
      element: jsx(rG, {}),
      key: 'asset_suggestions',
      height: m
    }), n.push({
      element: jsx(nc, {
        page: void 0
      }),
      key: 'breadcrumb',
      height: n4
    }));
    let l = [];
    k && l.push(e);
    S && l.push(...t);
    for (let e = 0; e < l.length; e += j) {
      let t = l.slice(e, e + j);
      n.push({
        element: jsx('div', {
          className: n0,
          children: t.map((t, s) => jsx(nV, {
            library: t,
            keyboardSection: gP.LOCAL_AND_SUBSCRIBED,
            rowIndex: e,
            columnIndex: s,
            cardWidth,
            previewHeight
          }, t.libraryKey))
        }),
        key: t.map(e => e.libraryKey).join('-'),
        keys: t.map(e => e.libraryKey),
        height: v
      });
    }
    I && (n.push({
      element: jsx(cG, {}),
      key: 'connected_project_divider',
      height: n2
    }), n.push({
      element: jsx(X3, {
        title: getI18nString('design_systems.libraries_modal.connected_project_libraries')
      }),
      key: 'connected_project_header',
      height: n4
    }));
    for (let e = 0; e < i.length; e += j) {
      let t = i.slice(e, e + j);
      n.push({
        element: jsx('div', {
          className: n0,
          children: t.map((t, s) => jsx(nV, {
            library: t,
            keyboardSection: gP.LOCAL_AND_SUBSCRIBED,
            rowIndex: e,
            columnIndex: s,
            cardWidth,
            previewHeight
          }, t.libraryKey))
        }),
        key: t.map(e => e.libraryKey).join('-'),
        keys: t.map(e => e.libraryKey),
        height: v
      });
    }
    E && (n.push({
      element: jsx(cG, {}),
      key: 'presets_divider',
      height: n2
    }), n.push({
      element: jsx(X3, {
        title: getI18nString('design_systems.assets_panel.ui_kits')
      }),
      key: 'preset_libraries_header',
      height: n4
    }));
    for (let e = 0; e < s.length; e += j) {
      let t = s.slice(e, e + j);
      n.push({
        element: jsx('div', {
          className: n0,
          children: t.map((t, s) => jsx(nV, {
            library: t,
            keyboardSection: gP.PRESETS,
            rowIndex: e,
            columnIndex: s,
            cardWidth,
            previewHeight
          }, t.libraryKey))
        }),
        key: t.map(e => e.libraryKey).join('-'),
        keys: t.map(e => e.libraryKey),
        height: v
      });
    }
    c && (n.push({
      element: jsx(cG, {}),
      key: 'va_packs_divider',
      height: n2
    }), n.push({
      element: jsx(X3, {
        title: getI18nString('design_systems.assets_panel.assets_from_community'),
        onboardingKey: Bs
      }),
      key: 'visual_assets_header',
      height: n4
    }), n.push({
      element: jsx(nY, {
        type: G3.IconSets
      }),
      key: 'visual_assets_icon_sets',
      height: n8
    }), n.push({
      element: jsx(nY, {
        type: G3.Illustrations
      }),
      key: 'visual_assets_illustrations',
      height: n8
    }));
    n.push(c ? {
      element: jsx(is, {}),
      key: 'browse_more_assets_button',
      height: n6
    } : {
      element: jsx(it, {}),
      key: 'add_more_libraries_button',
      height: n6
    });
    return n;
  }, [g, k, S, E, c, m, v, j, previewHeight, cardWidth, e, t, I, i, s]);
  return jsx(tp, {
    elements: M,
    hideScrollbar: a,
    initialScrollTop: librariesScrollTop,
    onScroll: handleScrollLibraries,
    anchorScroll: currentView === S5.Libraries
  });
}
function it() {
  let {
    onToggleLibraryModal
  } = _$$u3({
    entrypoint: _$$r6.ASSETS_PANEL_ADD_MORE_LIBRARIES,
    modalType: 'editor',
    initialTab: LibraryTabEnum.RECOMMENDED
  });
  return jsx('div', {
    className: n1,
    children: jsx($n, {
      variant: 'secondary',
      onClick: onToggleLibraryModal,
      recordingKey: 'assetsLibrary.addMoreLibraries',
      children: renderI18nText('design_systems.assets_panel.add_more_libraries')
    })
  });
}
function is() {
  return jsx(o3, {
    trackingEventName: 'cmty_category',
    trackingProperties: {
      name: 'visual_assets_browse_more_assets_clicked',
      text: 'Browse more assets'
    },
    to: new $E({
      categorySlug: LJ.icons
    }).to,
    className: n1,
    target: '_blank',
    children: jsx($n, {
      variant: 'secondary',
      recordingKey: 'assetsLibrary.browseMoreAssets',
      children: renderI18nText('design_systems.assets_panel.browse_more_assets')
    })
  });
}
function ir({
  siteLibraries: e,
  width: t,
  hideScrollbar: s
}) {
  let {
    librariesScrollTop,
    handleScrollLibraries
  } = tM();
  let a = useRef(null);
  let {
    cardWidth,
    previewHeight
  } = nQ({
    sidebarWidth: t
  });
  let {
    libraryKeys
  } = useAtomWithSubscription(AS);
  let u = libraryKeys.length + 1;
  let {
    flyout,
    ...h
  } = function (e, t) {
    let s = useRef(new Map());
    let i = useRef(null);
    let l = useRef(null);
    let [a, o] = useAtomValueAndSetter(nD);
    let d = a?.key;
    let [c, u] = useState(!1);
    let {
      setSafePolygon,
      isInSafePolygon,
      cursorXSpeedRef
    } = function () {
      let e = useRef(null);
      let t = useCallback(t => {
        e.current = t;
      }, []);
      let s = function () {
        let e = useRef(0);
        let t = useRef(null);
        let s = useRef(null);
        let r = useRef(null);
        useEffect(() => {
          let n = n => {
            let i = n.clientX;
            let l = n.timeStamp;
            if (t.current && s.current) {
              let r = t.current;
              let n = l - s.current;
              n > 0 && (e.current = (i - r) / n);
            }
            t.current = i;
            s.current = l;
            r.current && clearTimeout(r.current);
            r.current = setTimeout(() => {
              e.current = 0;
            }, 50);
          };
          document.addEventListener('mousemove', n);
          return () => {
            document.removeEventListener('mousemove', n);
            r.current && clearTimeout(r.current);
          };
        }, []);
        return e;
      }();
      return {
        setSafePolygon: t,
        isInSafePolygon: useCallback(t => !!e.current && function (e, t) {
          let [s, r] = e;
          let n = !1;
          let i = t.length;
          for (function () {
            let e = 0;
            let l = i - 1;
          }(); e < i; l = e++) {
            let [i, a] = t[e] || [0, 0];
            let [o, d] = t[l] || [0, 0];
            a >= r != d >= r && s <= (o - i) * (r - a) / (d - a) + i && (n = !n);
          }
          return n;
        }(t, e.current) && s.current > 0.1, [s]),
        cursorXSpeedRef: s
      };
    }();
    let g = useRef(null);
    let f = useCallback(() => {
      o(null);
      u(!1);
      setSafePolygon(null);
      i.current && (clearTimeout(i.current), i.current = null);
    }, [o, setSafePolygon]);
    useEffect(() => {
      let t = t => {
        let r = t.target;
        d && s.current.get(d)?.contains(r) || e?.current?.contains(r) || f();
      };
      document.addEventListener('pointerdown', t);
      return () => {
        document.removeEventListener('pointerdown', t);
      };
    }, [e, f, d]);
    let x = useCallback((e, t) => {
      if (g.current && (clearTimeout(g.current), g.current = null), l.current = null, d === t) {
        let r = s.current.get(t)?.getBoundingClientRect();
        r && setSafePolygon([[e.clientX - 1, e.clientY], [r.left, r.top], [r.left, r.bottom]]);
      } else {
        i.current && (clearTimeout(i.current), i.current = null);
      }
    }, [d, setSafePolygon]);
    let y = useCallback(() => {
      i.current && (clearTimeout(i.current), i.current = null);
    }, []);
    let _ = useCallback(() => setSafePolygon(null), [setSafePolygon]);
    let b = useCallback(() => a !== null && (f(), !0), [a, f]);
    O1(b, KD.OVERLAY);
    let [C, j] = useState(null);
    useEffect(() => {
      let e = [...t, Yl];
      j(jsx(Fragment, {
        children: e.map(e => jsx(nE, {
          hide: d !== e,
          onMouseEnter: _,
          onMouseLeave: y,
          libraryKey: e,
          ref: t => s.current.set(e, t),
          onDragStart: c ? void 0 : f
        }, e))
      }));
    }, [t, d, x, f, _, y, c]);
    return {
      flyout: C,
      onMouseEnter: (e, t) => {
        if (l.current = t, !c && !i.current) {
          i.current = setTimeout(() => {
            o({
              key: t,
              persisted: c
            });
          }, 200);
          return;
        }
        if (!c) {
          if (isInSafePolygon([e.clientX, e.clientY])) return;
          o({
            key: t,
            persisted: c
          });
        }
      },
      onMouseLeave: x,
      onClick: e => {
        if (e === d && c) {
          f();
          return;
        }
        o({
          key: e,
          persisted: !0
        });
        u(!0);
        setSafePolygon(null);
        i.current && clearTimeout(i.current);
      },
      onMouseMove: (e, t) => {
        g.current && (clearTimeout(g.current), g.current = null);
        !c && d && d !== t && (isInSafePolygon([e.clientX, e.clientY]) ? (g.current && clearTimeout(g.current), g.current = setTimeout(() => {
          cursorXSpeedRef.current === 0 && o({
            key: t,
            persisted: c
          });
        }, 100)) : o({
          key: t,
          persisted: c
        }));
      }
    };
  }(a, libraryKeys);
  let m = useMemo(() => {
    if (e.status !== 'disabled') {
      let t = e.data ?? [];
      return t.length === 0 ? Array.from({
        length: u
      }, (e, t) => ({
        element: jsx(el, {
          keyPrefix: 'blocks',
          name: '',
          recordingKey: 'assetsLibrary.siteKitLoading',
          disabled: !1,
          variant: 'preview-no-padding'
        }),
        key: `site kit loading-${t}`,
        keys: [`site kit loading-${t}`],
        height: n7
      })) : t.map((e, t) => ({
        element: jsx(nV, {
          cardWidth,
          columnIndex: 1,
          flyoutHandlers: h,
          folderVariant: 'preview-no-padding',
          isFolderView: !0,
          keyboardSection: gP.SITE_KIT,
          library: e,
          previewHeight,
          rowIndex: t
        }, e.libraryKey),
        key: e.libraryKey,
        keys: [e.libraryKey],
        height: n7
      }));
    }
    return [];
  }, [e.status, e.data, u, previewHeight, cardWidth, h]);
  return jsxs('div', {
    ref: a,
    children: [jsx(tp, {
      elements: m,
      hideScrollbar: s,
      initialScrollTop: librariesScrollTop,
      onScroll: handleScrollLibraries,
      anchorScroll: !0
    }), flyout]
  });
}
function ii({
  page: e,
  index: t
}) {
  let s = _$$sN();
  let [i] = MA();
  let {
    navigateToPage,
    libraryKey,
    currentView
  } = wV();
  let c = useCallback(() => {
    s('pageRow', navigateToPage(e.id));
  }, [s, navigateToPage, e.id]);
  let u = e.id;
  let p = currentView !== S5.Pages;
  let {
    keyboardNavigationItem,
    setKeyboardNavigationElement
  } = M3({
    path: [ON.CONTENTS, _$$lM.PAGES, t],
    id: e.id,
    disabled: p
  });
  let {
    focusFirstItem,
    focusSearchBar
  } = _$$rl();
  C0(keyboardNavigationItem, currentView === S5.Pages && t === 0);
  let y = MB({
    onBoth: c,
    onKeyDown: focusFirstItem,
    onClick: focusSearchBar
  });
  let _ = function (e, t) {
    let s = selectCurrentFile();
    let r = useDispatch();
    let i = e === s?.libraryKey;
    let l = e && !!t;
    let o = _$$b2({
      libraryKey: e,
      nodeId: t
    });
    let d = useMemo(() => {
      if (o.data?.type === 'team') return o.data.link;
    }, [o]);
    let c = useCallback(() => getSingletonSceneGraph().setCurrentPageAsync(t ?? ''), [t]);
    let u = useCallback(() => {
      analyticsEventManager.trackDefinedEvent('assets_panel.go_to_page', {
        libraryKey: e ?? '',
        pageId: t,
        fileKey: s?.key,
        fileTeamId: s?.teamId ?? void 0,
        fileOrgId: s?.parentOrgId ?? void 0,
        isLocal: i
      });
    }, [i, e, s?.key, s?.parentOrgId, s?.teamId, t]);
    let p = useCallback(() => {
      c();
      u();
    }, [c, u]);
    let h = useCallback(() => {
      analyticsEventManager.trackDefinedEvent('assets_panel.open_page_context_menu', {
        libraryKey: e ?? '',
        pageId: t,
        fileKey: s?.key,
        fileTeamId: s?.teamId ?? void 0,
        fileOrgId: s?.parentOrgId ?? void 0
      });
    }, [e, s?.key, s?.parentOrgId, s?.teamId, t]);
    let m = fd(e);
    return useCallback(e => {
      l && !m && (e.preventDefault(), e.stopPropagation(), r(j7({
        type: s4,
        data: {
          libraryPageHref: d,
          pageId: t,
          isLocalLibrary: i,
          onClickLocalPage: p,
          onClickSubscribedPage: u,
          position: {
            top: e.clientY,
            left: e.clientX
          }
        }
      })), h());
    }, [l, m, r, d, t, i, p, u, h]);
  }(libraryKey, e.id);
  let b = useMemo(() => i === 'list' ? 'icon' : 'preview', [i]);
  let C = {
    pageId: e.id,
    libraryKey: libraryKey || ''
  };
  return jsx(el, {
    ref: setKeyboardNavigationElement,
    disabled: p,
    keyPrefix: u,
    name: e.name,
    onClick: y,
    onContextMenu: _,
    pageInfo: C,
    previewAssetOrUrl: e.previewAsset,
    recordingKey: `assetsPage.${e.id}`,
    variant: b
  });
}
let ia = 'performance.ds_eco.asset_panel_pages_view_loading';
let io = new PerfTimer(ia, {});
function id({
  didFinishLoading: e
}) {
  let t = io.stop();
  trackEventAnalytics(ia, {
    elapsedMs: t,
    isNewAssetPanelFetch: !0,
    didFinishLoading: e
  }, {
    forwardToDatadog: !0
  });
}
let iu = parsePxNumber(Mj);
let ip = parsePxNumber($c);
let ih = parsePxNumber(d5);
let im = 2 * iu;
let ig = parsePxNumber(Kd);
let ix = parsePxNumber(y4);
let iy = parsePxNumber(Gd);
let i_ = parsePxNumber(xP);
function ib({
  page: e,
  thumbWidth: t,
  thumbHeight: s,
  row: i,
  column: l
}) {
  let a = _$$sN();
  let {
    navigateToPage,
    currentView
  } = wV();
  let c = useCallback(() => {
    a('pageRow', navigateToPage(e.id));
  }, [a, navigateToPage, e.id]);
  let u = currentView !== S5.Pages;
  let {
    keyboardNavigationItem,
    setKeyboardNavigationElement
  } = M3({
    path: [ON.CONTENTS, _$$lM.PAGES, i],
    column: l,
    id: e.id,
    disabled: u
  });
  let {
    focusFirstItem,
    focusSearchBar
  } = _$$rl();
  C0(keyboardNavigationItem, currentView === S5.Pages && i === 0 && l === 0);
  let x = MB({
    onBoth: c,
    onKeyDown: focusFirstItem,
    onClick: focusSearchBar
  });
  let {
    widthForCentering,
    textRef,
    iconRef
  } = function (e) {
    let [t, s] = useState(void 0);
    let r = useCallback(e => s(e?.scrollWidth), []);
    let [i, l] = useState(void 0);
    return {
      textRef: r,
      iconRef: useCallback(e => l(e?.scrollWidth), []),
      widthForCentering: useMemo(() => t && i ? Math.max(Math.min(e - (t + i) - 1, i), 0) : -1, [i, t, e])
    };
  }(t);
  let C = AZ(e) ? e.embeds[0]?.thumbnail_url : e.previewAsset;
  return jsxs(_$$E, {
    'className': 'site_kit_pages--tile--GWdsc',
    'onClick': x,
    'ref': setKeyboardNavigationElement,
    'aria-label': e.name,
    'disabled': u,
    'children': [C ? jsx(_$$V2, {
      previewAssetOrUrl: C,
      type: 'no-padding',
      height: s,
      width: t,
      keyPrefix: e.id
    }) : jsx('div', {
      className: es,
      style: {
        height: s,
        width: t
      }
    }), jsx('div', {
      className: _$$s.flex.flexColumn.itemsCenter.wFull.$,
      style: {
        width: t
      },
      children: jsxs('span', {
        className: 'site_kit_pages--pageName--ARhz3 site_kit_pages--text--gyBIU',
        children: [widthForCentering > 0 && jsx('div', {
          className: _$$s.flexShrink0.$,
          style: {
            width: widthForCentering
          }
        }), jsx(_$$G2, {
          text: e.name,
          ref: textRef
        }), jsx('div', {
          className: 'site_kit_pages--chevron--MPDzd',
          ref: iconRef,
          children: jsx(_$$k3, {})
        })]
      })
    })]
  });
}
let iC = parsePxNumber(RQ);
let ij = parsePxNumber(_q);
let iv = parsePxNumber(HE);
function iS({
  library: e,
  width: t,
  hideScrollbar: s,
  isLoading: i
}) {
  !function ({
    isLoading: e
  }) {
    let {
      currentView
    } = wV();
    let s = useLatestRef(currentView);
    useEffect(() => (s === S5.Libraries && currentView === S5.Pages && io.start(), currentView === S5.Pages && !e && io.isRunning && id({
      didFinishLoading: !0
    }), () => {
      s === S5.Pages && currentView !== S5.Pages && io.isRunning && id({
        didFinishLoading: !1
      });
    }), [e, currentView, s]);
  }({
    isLoading: i
  });
  let [l] = MA();
  let {
    pagesScrollTop,
    handleScrollPages
  } = tM({
    libraryKey: e?.libraryKey
  });
  let d = useMemo(() => e ? Array.from(e.pages) : [], [e]);
  let c = fd(e?.libraryKey);
  let {
    thumbWidth,
    thumbHeight,
    numColumns
  } = function () {
    let {
      width
    } = e8();
    let t = useMemo(() => width - im, [width]);
    let s = Math.max(Math.min(3, tA({
      elementMinSize: 98,
      gap: ig,
      spaceAvailable: t
    })), 2);
    let r = tP({
      numElements: s,
      gap: ig,
      spaceAvailable: t
    }) - 2 * iy;
    return {
      thumbWidth: r,
      thumbHeight: r,
      numColumns: s
    };
  }();
  let m = useMemo(() => {
    if (e?.type === yW.SITE && l === 'grid') {
      return function (e, t, s, n) {
        let i = Array.from(e.pages);
        let l = [];
        let a = s + 2 * iy + ix + i_;
        for (let e = 0; e < i.length; e += n) {
          let o = e === 0 ? 'site_kit_pages--virtualRowFirst--pNAgS site_kit_pages--virtualRow--F7pf9' : 'site_kit_pages--virtualRow--F7pf9';
          let d = i.slice(e, e + n);
          let c = [];
          let u = d.map(([e]) => e);
          d.forEach(([n, i], l) => {
            i && c.push(jsx(ib, {
              page: i,
              row: e,
              column: l,
              thumbWidth: t,
              thumbHeight: s
            }, n));
          });
          l.push({
            element: jsx('div', {
              className: o,
              style: {
                gap: ig
              },
              role: 'row',
              children: c
            }),
            key: u.join('-'),
            keys: u,
            height: a + (e === 0 ? 0 : iu)
          });
        }
        l.length > 0 && (l.unshift({
          element: jsx(hK, {
            height: ip
          }),
          key: 'spacer-top',
          height: ip
        }), l.push({
          element: jsx(hK, {
            height: ih
          }),
          key: 'spacer-bottom',
          height: ih
        }));
        return l;
      }(e, thumbWidth, thumbHeight, numColumns);
    }
    let t = [];
    d.forEach(([e, s], n) => {
      t.push({
        element: jsx(ii, {
          page: s,
          index: n
        }),
        height: l === 'list' ? iv : ij,
        key: e
      });
      n === 0 && dS(s.name, {
        isPreset: c
      }) && t.push({
        element: jsx(cG, {}),
        key: 'examples_divider',
        height: iC
      });
    });
    return t;
  }, [e, l, d, thumbWidth, thumbHeight, numColumns, c]);
  return i ? jsx('div', {
    'className': 'asset_panel_pages--loadingContainer--fyofJ',
    'style': {
      width: t
    },
    'data-testid': 'asset-panel-pages-spinner',
    'children': jsx(_$$k2, {})
  }) : d.length === 0 ? jsx('div', {
    style: {
      width: t
    }
  }) : jsx(tp, {
    elements: m,
    hideScrollbar: s,
    initialScrollTop: pagesScrollTop,
    onScroll: handleScrollPages
  });
}
let iT = iw;
function iE() {
  let e = _$$ce().data?.assetsByLibraryKey;
  let t = useMemo(() => e ? [...e.values()].flat() : [], [e]);
  let s = useMemo(() => _$$u2(), []);
  let r = _$$o(PrimaryWorkflowEnum.RESPONSIVE_SET);
  let i = useAtomWithSubscription(su);
  let l = getUserId();
  let a = useMemo(() => {
    if (!l) return [];
    let e = [...r, ...i].filter(e => e.lastAddedAtUserId[l]);
    sortBy(e, e => -(e.lastAddedAtUserId[l] ?? 0));
    return e;
  }, [r, i, l]);
  return useMemo(() => {
    let e = iT()(t ?? [], 'key');
    let r = iT()(s, 'name');
    return a.map(t => 'key' in t ? e[t.key] : r[t.name]).filter(Gh);
  }, [a, t, s]);
}
function iM() {
  let {
    productComponents
  } = g5(_$$$A.Design);
  let t = iE();
  let {
    getLibrary
  } = _$$G();
  let [i] = MA();
  let l = i === 'list';
  let a = useCallback(e => {
    let t = getLibrary(e);
    return t?.name || '';
  }, [getLibrary]);
  let o = tV();
  let {
    props,
    numColumns
  } = useMemo(() => tU(o, i, _$$rp.NORMAL), [o, i]);
  let {
    componentSectionNameForTracking
  } = zf();
  let p = productComponents.length > 0;
  let m = t.length > 0;
  return jsxs(xU, {
    children: [m && jsxs(Fragment, {
      children: [jsx(X3, {
        title: getI18nString('design_systems.assets_panel.site_blocks')
      }), jsx('div', {
        className: l ? rA : rM,
        children: t.map((e, t) => e.type === 'embed' ? jsx(sc, {
          embed: e,
          sectionNameForTracking: 'Recently used site kit assets',
          sectionPosition: t,
          keyboardPosition: pg([_$$tM.SITE_KIT], t, numColumns),
          thumbHeight: props.thumbHeight,
          thumbWidth: props.thumbWidth,
          libraryName: getI18nString('design_systems.assets_panel.site_blocks.embeds')
        }, e.name) : jsx(t1, {
          asset: e,
          sectionNameForTracking: 'Recently used site kit assets',
          sectionPosition: t,
          keyboardPosition: pg([_$$tM.SITE_KIT], t, numColumns),
          thumbHeight: props.thumbHeight,
          thumbWidth: props.thumbWidth,
          libraryName: a(e.sourceLibraryKey)
        }, `assetPanelRecents:siteKit:${_$$V3(e)}`))
      })]
    }), m && p && jsx('div', {
      className: 'asset_panel_recents--buffer--URYGQ'
    }), p && jsxs(Fragment, {
      children: [m && jsx(X3, {
        title: getI18nString('design_systems.assets_panel.dropdown_type_all_libraries')
      }), jsx('div', {
        className: l ? rA : rM,
        children: productComponents.map((e, t) => jsx(e3, {
          asset: e,
          fileName: a(e.library_key),
          sectionNameForTracking: componentSectionNameForTracking,
          sectionPosition: t,
          keyboardPosition: pg([_$$tM.COMPONENTS], t, numColumns),
          ...props
        }, `assetPanelRecents:component:${_$$V3(e)}`))
      })]
    }), jsx('div', {
      className: 'asset_panel_recents--bottomPadding--9BTkl'
    })]
  });
}
let iH = function ({
  isLoading: e,
  children: t
}) {
  return e ? jsx('div', {
    className: 'maybe_loading--loadingContainer--Wfq03',
    children: jsx(_$$k2, {})
  }) : jsx(Fragment, {
    children: t
  });
};
let iz = new KH({
  keys: [{
    name: 'name',
    weight: 0.6
  }, {
    name: 'containingFrame.name',
    weight: 0.1
  }, {
    name: 'containingFrame.pageName',
    weight: 0.1
  }, {
    name: 'description',
    weight: 0.05
  }],
  threshold: 0.3,
  tokenize: !0,
  shouldSort: !0
});
function iW() {
  let e;
  let t = _$$lg() === FFileType.SITES;
  let s = _$$ce();
  let r = s.data?.assetsByLibraryKey;
  let i = useMemo(() => _$$u2(), []);
  let l = useMemo(() => {
    let e = r ? [...r?.values()].flat() : [];
    return e ? [...e, ...i] : void 0;
  }, [r, i]);
  let {
    query,
    searchOption
  } = _$$I(Cn.AssetsPanel);
  let c = t && searchOption && [_$$I2.SITE_KIT, _$$I2.ALL].includes(searchOption?.type);
  let u = _$$$(l);
  let p = useLatestRef(query);
  let [h, m] = useState([]);
  let [g, f] = useState(!1);
  useLayoutEffect(() => {
    (async function () {
      if (u && iz.set(l ?? []), !query || iz.list().length === 0) {
        m([]);
        return;
      }
      p || f(!0);
      let e = [];
      try {
        e = (await iz.search(query)).map(e => e.item);
      } catch (e) {
        logError(_$$e3.DESIGN_SYSTEMS_ECOSYSTEM, 'error in site kit search', {
          message: e.message
        }, {
          reportAsSentryError: !0
        });
      }
      m(e);
      f(!1);
    })();
  }, [l, p, query, u]);
  e = h.length;
  useEffect(() => {
    hw(e);
  }, [e]);
  _$$h(() => () => hw(0));
  return {
    results: c ? h : [],
    loading: g,
    query
  };
}
let i$ = 'asset_panel_search_results--empty--72Hqc';
let iY = parsePxNumber(ce);
let iX = parsePxNumber(GH);
let iq = parsePxNumber(RX);
let iJ = 'Search keywords and filter results by specific libraries, templates, and components.';
let iZ = ({
  moreResults: e,
  query: t,
  showMoreDefault: s
}) => {
  let i = !!GM()();
  let [l, a] = useState(!1);
  let o = s || l || i;
  let d = useCallback(() => a(!0), []);
  useEffect(() => a(!1), [t]);
  let {
    visualAssetsType
  } = wV();
  let u = i && !!visualAssetsType;
  let p = useMemo(() => e.map(e => e.library_key), [e]);
  let {
    data
  } = _$$U2(p);
  let g = useCallback(e => data?.[e.library_key] ?? '', [data]);
  let [f] = MA();
  let x = tV();
  let {
    props,
    numColumns
  } = useMemo(() => tU(x, f, _$$rp.NORMAL), [x, f]);
  let {
    componentSectionNameForTracking
  } = zf({
    moreSearchResults: !0
  });
  let j = useMemo(() => tu(e, numColumns, 'components:moreResults', props, componentSectionNameForTracking, [_$$tM.COMPONENTS, 1], {
    getFileName: g
  }), [e, numColumns, props, componentSectionNameForTracking, g]);
  return useMemo(() => {
    if (e.length === 0) return [];
    let t = [];
    u || t.push({
      element: jsxs('div', {
        className: i ? 'asset_panel_search_results--visualAssetsShowMoreText--sxfrf asset_panel_search_results--visualAssetsShowMore--MJbt7' : 'asset_panel_search_results--showMoreText--mEcU5 asset_panel_search_results--showMore--yo9-j',
        children: [o && renderI18nText('design_systems.assets_panel.showing_results_from_all_libraries'), !o && jsx('button', {
          className: 'asset_panel_search_results--showMoreLink--3-Ww3 asset_panel_search_results--showMore--yo9-j blue_link--blueLink--9rlnd',
          onClick: d,
          children: renderI18nText('design_systems.assets_panel.more_results_in_all_libraries', {
            results: e.length
          })
        })]
      }),
      key: 'components:showMoreText',
      height: i ? iq : iX
    });
    o && t.push(...j);
    return t;
  }, [e.length, o, d, j, u, i]);
};
function iQ({
  components: e,
  moreComponents: t,
  siteKitAssets: s,
  query: i,
  getLibraryNameFromKey: l
}) {
  let a = i5(e);
  let o = i5(t);
  let d = a.length + o.length > 0;
  let c = s.length > 0;
  let u = useCallback(e => l(e.library_key), [l]);
  let [p] = MA();
  let m = tV();
  let {
    props,
    numColumns
  } = useMemo(() => tU(m, p, _$$rp.NORMAL), [m, p]);
  let {
    componentSectionNameForTracking
  } = zf();
  let y = useMemo(() => tu(a, numColumns, 'components', props, componentSectionNameForTracking, [_$$tM.COMPONENTS, 0], {
    getFileName: u
  }), [a, numColumns, props, componentSectionNameForTracking, u]);
  let _ = iZ({
    moreResults: o,
    query: i,
    showMoreDefault: a.length === 0 && o.length > 0
  });
  let [b, C] = useState(!1);
  let [j, v] = useState(!1);
  let S = _$$r4(s);
  let k = useMemo(() => sS(s, numColumns, props.thumbWidth, props.thumbHeight, p, 'assets', 'Site kit search results', [_$$tM.SITE_KIT], {
    libraryNameForAsset: S
  }), [p, numColumns, props.thumbHeight, props.thumbWidth, S, s]);
  let w = useMemo(() => {
    let e = [];
    c && (e.push({
      element: jsx(X3, {
        title: getI18nString('design_systems.assets_panel.site_blocks'),
        numResults: s.length,
        toggleExpanded: () => C(e => !e),
        isExpanded: !b,
        collapsible: !0
      }),
      key: 'sitesHeader',
      height: iY
    }), b || e.push(...k));
    d && (c && e.push({
      element: jsx(X3, {
        title: getI18nString('design_systems.assets_panel.dropdown_type_all_libraries'),
        numResults: a.length,
        toggleExpanded: () => v(e => !e),
        isExpanded: !j,
        collapsible: !0
      }),
      key: 'componentsHeader',
      height: iY
    }), j || (e.push(...y), e.push(..._)));
    return e;
  }, [c, d, s.length, b, k, j, a.length, y, _]);
  return jsx(tp, {
    elements: w,
    anchorScroll: !0
  });
}
function i0() {
  return _m() ? jsx(i3, {}) : jsx(i1, {});
}
function i1() {
  let {
    query,
    results,
    isLoading
  } = _$$I(Cn.AssetsPanel);
  let {
    normalizedSearchResults,
    unsubscribedSearchResults
  } = t;
  let a = iW();
  let o = _$$U3();
  let {
    libraryKey
  } = wV();
  let {
    getLibrary
  } = _$$G();
  let u = useMemo(() => normalizedSearchResults.map(e => e.library_key), [normalizedSearchResults]);
  let {
    data,
    status
  } = _$$U2(u);
  let g = i2(query);
  let f = status === 'loading';
  let x = f && g;
  let y = useCallback(e => data?.[e] ?? getLibrary(e)?.name ?? '', [data, getLibrary]);
  let _ = useMemo(() => libraryKey ? getLibrary(libraryKey)?.name : void 0, [getLibrary, libraryKey]);
  let [, b] = useMemo(() => _2(normalizedSearchResults.filter(e => y(e.library_key))), [normalizedSearchResults, y]);
  let [, C] = useMemo(() => _2(unsubscribedSearchResults), [unsubscribedSearchResults]);
  let j = b.length + C.length > 0;
  let v = a.results.length > 0;
  let S = x || isLoading || o || a.loading;
  i4({
    query,
    isLoading: S,
    isLoadingBreakdown: {
      isLibraryNamesLoadingWithTimeout: x,
      isSearchLoading: isLoading,
      isSubscribedComponentsLoading: o
    },
    additionalLogData: {
      isLibraryNamesLoading: f,
      isLibraryNamesLoadingTimerActive: g
    }
  });
  return query ? jsx(iH, {
    isLoading: S,
    children: j || v ? jsx(iQ, {
      components: b,
      moreComponents: C,
      siteKitAssets: a.results,
      query,
      getLibraryNameFromKey: y
    }) : jsx('div', {
      className: i$,
      children: _ ? renderI18nText('design_systems.assets_panel.no_results_for_query_in_library', {
        searchQuery: query,
        libraryName: _
      }) : renderI18nText('design_systems.assets_panel.no_results_for_query', {
        searchQuery: query
      })
    })
  }) : jsx('div', {
    className: i$,
    children: iJ
  });
}
function i3() {
  let {
    results,
    loading,
    query
  } = iW();
  let {
    libraryKey
  } = wV();
  let [l] = MA();
  let {
    getLibrary
  } = _$$G();
  let o = useMemo(() => libraryKey ? getLibrary(libraryKey)?.name : void 0, [getLibrary, libraryKey]);
  let {
    width
  } = e8();
  let {
    tileHeight,
    tileWidth,
    numColumns
  } = function (e) {
    let [t] = MA();
    let s = e - tO;
    let r = Math.min(useMemo(() => tA({
      elementMinSize: 120,
      gap: tR,
      spaceAvailable: s
    }), [s]), 3);
    let i = useMemo(() => tP({
      numElements: r,
      gap: tR,
      spaceAvailable: s
    }), [r, s]);
    let l = useMemo(() => tL({
      width: i,
      widthToHeightRatio: 1,
      maxHeight: void 0
    }), [i]);
    return t === 'list' ? {
      tileWidth: 40,
      tileHeight: 40,
      numColumns: 1
    } : {
      tileWidth: i,
      tileHeight: l,
      numColumns: r
    };
  }(width);
  let m = useMemo(() => sS(results, numColumns, tileWidth, tileHeight, l, 'assets', 'Site kit search results', [_$$tM.COMPONENTS], {
    includesFirstTile: !0
  }), [l, numColumns, results, tileHeight, tileWidth]);
  return query ? jsx(iH, {
    isLoading: loading,
    children: results.length > 0 ? jsx(tp, {
      elements: m,
      anchorScroll: !0
    }) : jsx('div', {
      className: i$,
      children: renderI18nText('design_systems.assets_panel.no_results_for_query_in_library', {
        searchQuery: query,
        libraryName: o
      })
    })
  }) : jsx('div', {
    className: i$,
    children: iJ
  });
}
let i2 = e => {
  let t = useLatestRef(e);
  let {
    isActive,
    start
  } = _$$Z(_$$lQ);
  useEffect(() => {
    e !== t && start(1e4);
  }, [e, t, start]);
  return isActive;
};
let i4 = ({
  isLoading: e,
  isLoadingBreakdown: t,
  additionalLogData: s,
  query: r
}) => {
  let i = useLatestRef(e);
  let l = useLatestRef(r);
  let [o, d] = useState(null);
  let c = selectCurrentUser();
  let u = _$$DP().version;
  let p = _$$tM4('assets-panel');
  let h = useLatestRef(p);
  let m = je();
  let x = useSelector(e => e.fileVersion);
  let y = useSelector(e => e.loadingState);
  let _ = selectCurrentFile();
  let b = _?.key;
  let C = oh(_$$fi);
  let j = useCallback(r => {
    if (!o) return;
    let n = Date.now() - o;
    if (n < 5e3) return;
    let i = m.data?.map(e => {
      let t = Mb(e.libraryKey);
      return {
        libraryKey: e.libraryKey,
        isLoading: !D2(y, t)
      };
    });
    let l = _ && x != null && yD(_.key) || null;
    let d = !(l != null && D2(y, l));
    analyticsEventManager.trackDefinedEvent('assets_panel.search_long_loading', {
      ...t,
      ...s,
      fileKey: b,
      userId: c?.id,
      uiThemeVersion: u,
      queryId: p ?? h ?? void 0,
      loadingTimeMS: n,
      isLoading: e,
      queryCancelled: r,
      isLoadingSubscribedComponentsAndStateGroups: d,
      isLoadingRecentlyUsedItems: C,
      subscribedLibariesLoading: JSON.stringify(i)
    });
  }, [m, x, y, _, o, e, t, C, b, s, c?.id, u, p, h]);
  let v = _$$A4(j, 100, {
    leading: !0,
    trailing: !1
  });
  let S = useRef(j);
  useEffect(() => {
    S.current = j;
  }, [j]);
  let {
    start,
    cancel
  } = _$$Z(() => v(!1));
  let T = useCallback(() => {
    j(!0);
    d(Date.now());
    start(5e3);
  }, [j, start]);
  useEffect(() => {
    e && !i ? T() : !e && i && (cancel(), j(!1), d(null));
  }, [e, i, T, j, cancel]);
  useEffect(() => {
    r !== l && T();
  }, [r, l, T]);
  useEffect(() => () => {
    S.current(!0);
  }, []);
};
function i5(e) {
  let {
    visualAssetsType
  } = wV();
  let s = !!GM()();
  let r = useAtomWithSubscription(QN);
  let i = useAtomWithSubscription(_$$r2);
  let l = s && !!visualAssetsType;
  return useMemo(() => l ? e.filter(e => e.hub_file_id && (visualAssetsType === G3.IconSets ? r.includes(e.library_key) : i.includes(e.library_key))) : e, [l, e, visualAssetsType, r, i]);
}
function i8({
  libraryKey: e,
  numComponents: t,
  size: s
}) {
  let {
    focusSearchBar
  } = _$$rl();
  let {
    navigateToLibrary
  } = wV();
  let a = _$$sN();
  let o = useCallback(() => {
    a('visualAssetMoreTile', navigateToLibrary(e));
  }, [e, a, navigateToLibrary]);
  let d = useCallback(e => {
    e.stopPropagation();
    o();
    focusSearchBar();
  }, [focusSearchBar, o]);
  let c = t - 11;
  let u = c >= 1e3 ? `${(c / 1e3).toFixed(1)}k` : c.toString();
  return jsx('button', {
    onClick: d,
    className: 'asset_panel_visual_asset_more_tile--tile--r9fF-',
    style: {
      width: s,
      height: s
    },
    children: jsxs('div', {
      className: 'asset_panel_visual_asset_more_tile--moreText--QNS99 text--fontPos13--xW8hS text--_fontBase--QdLsd',
      children: ['+', u]
    })
  });
}
function i7({
  libraryKey: e,
  sectionIndex: t
}) {
  let {
    width
  } = e8();
  let i = useAtomWithSubscription(Rs);
  let {
    getLibrary
  } = _$$G();
  let a = getLibrary(e);
  let o = a?.type === yW.DESIGN ? a.numComponents : 0;
  let d = useMemo(() => {
    if (a?.type === yW.DESIGN) return Array.from(a.pages.values());
  }, [a]);
  let c = [];
  if (d?.[0]?.components && a?.libraryKey) {
    let e = i?.[a?.libraryKey]?.asset_panel_component_ids || [];
    if (e.length >= 11) {
      let t = [];
      d.forEach(s => {
        if (s.components) {
          let r = tw(s.components).filter(t => 'component_key' in t && e.includes(t.component_key || ''));
          t.push(...r);
        }
      });
      let s = t.reduce((e, t) => ('component_key' in t && t.component_key && (e[t.component_key || ''] = t), e), {});
      c = e.map(e => s[e]).filter(e => !!e);
    } else {
      c = tw(d[0].components).slice(0, 11);
    }
  }
  let u = PI(c, !0);
  let p = (width - 24 - 24) / 4;
  let h = {
    showName: !1,
    noBackground: !0
  };
  return c.length ? jsx('div', {
    className: 'asset_panel_visual_asset_components--container--qLYh4',
    children: [0, 1, 2].map(s => jsxs('div', {
      className: 'asset_panel_visual_asset_components--row--leYBr',
      children: [c.slice(4 * s, (s + 1) * 4).map((e, n) => jsx(e3, {
        asset: e,
        disableClickPropagation: !0,
        displayType: 'grid',
        fileName: void 0,
        hideInlineName: !0,
        isFirstTile: !1,
        isVisualAsset: !0,
        keyboardPosition: {
          path: [t, s],
          column: n
        },
        libraryItemTileProps: h,
        sectionDepth: n,
        sectionNameForTracking: 'Visual assets panel',
        sectionPosition: s * n,
        sourceForTracking: 'visual-assets-panel',
        thumbHeight: p,
        thumbLayout: u,
        thumbWidth: p,
        viewMode: Bk.Grid
      }, `$visualAssetsPanel:component:${_$$V3(e)}`)), s === 2 && jsx(i8, {
        libraryKey: e,
        numComponents: o,
        size: p
      })]
    }, s))
  }) : null;
}
function i9({
  library: e,
  sectionIndex: t
}) {
  let {
    navigateToLibrary
  } = wV();
  let i = selectCurrentFile();
  let [a, o] = useState(!1);
  let d = _$$sN();
  let c = useCallback(() => {
    d('visualAssetLibraryCard', navigateToLibrary(e.libraryKey));
  }, [e, d, navigateToLibrary]);
  let u = useMemo(() => {
    let t = e.libraryKey === i?.libraryKey ? 'localLibrary' : e.libraryKey;
    return generateRecordingKey('assetsLibrary', t);
  }, [e.libraryKey, i?.libraryKey]);
  return jsx(GG, {
    'className': l()('asset_panel_visual_asset_library--library--ta4FR', {
      'asset_panel_visual_asset_library--hovered--r37Mn': a
    }),
    'aria-label': e.name,
    'onClick': c,
    'style': {
      width: '100%'
    },
    'recordingKey': u,
    'children': jsxs('div', {
      className: 'asset_panel_visual_asset_library--libraryCard--ljr--',
      children: [jsx(i7, {
        libraryKey: e.libraryKey,
        sectionIndex: t
      }), jsx(le, {
        library: e,
        setHovered: o
      })]
    })
  });
}
function le({
  library: e,
  setHovered: t
}) {
  let s = useAtomWithSubscription(Rs);
  let n = s?.[e.libraryKey]?.author_name || e.authorName;
  return jsx('div', {
    className: 'asset_panel_visual_asset_library--libraryFooter--WtYtC',
    onMouseEnter: () => t(!0),
    onMouseLeave: () => t(!1),
    children: jsxs('div', {
      className: 'asset_panel_visual_asset_library--libraryNameAndAuthor---pya2',
      children: [jsxs('div', {
        className: 'asset_panel_visual_asset_library--nameAndIconForList--Opwld',
        children: [jsx('h3', {
          className: 'asset_panel_visual_asset_library--libraryName--y8FNs ellipsis--ellipsis--Tjyfa',
          children: e.name
        }), jsx('div', {
          className: 'asset_panel_visual_asset_library--libraryIcon--FWTh-',
          children: jsx(_$$P, {
            libraryKey: e.libraryKey,
            compact: !0,
            showPresetTooltip: !0,
            colorPrimaryOnHover: !0,
            tooltipDelay: 500,
            tooltipLocation: 'below'
          })
        })]
      }), n && jsx('div', {
        className: 'asset_panel_visual_asset_library--libraryStats--NtW2u ellipsis--ellipsis--Tjyfa',
        children: renderI18nText('community.by_publisher', {
          publisher: n
        })
      })]
    })
  });
}
function ls({
  width: e
}) {
  let {
    visualAssetsType
  } = wV();
  let s = usePreviousValue(visualAssetsType);
  let n = visualAssetsType ?? s;
  let [i] = MA();
  let a = i === 'list';
  let o = _$$lY();
  let d = o.length > 0;
  let c = useAtomWithSubscription(QN);
  let u = useAtomWithSubscription(_$$r2);
  let {
    cardWidth,
    previewHeight
  } = nQ({
    sidebarWidth: e
  });
  let m = o.filter(e => n === G3.IconSets ? c.includes(e.library_key) : u.includes(e.library_key));
  return jsxs(xU, {
    children: [d && jsx(Fragment, {
      children: jsx('div', {
        className: l()('asset_panel_visual_assets--list--APKhG', {
          'asset_panel_visual_assets--gridGap--DCeF2': !a
        }),
        children: m.map((e, t) => {
          let s = _$$x2(e);
          return a ? jsx(nV, {
            library: s,
            keyboardSection: gP.VISUAL_ASSETS,
            rowIndex: t,
            columnIndex: 0,
            cardWidth,
            previewHeight,
            hideUnsubscribe: !0
          }, e.library_file_key) : jsx(i9, {
            library: s,
            sectionIndex: t
          }, e.library_file_key);
        })
      })
    }), jsx('div', {
      className: 'asset_panel_visual_assets--bottomPadding--OULyc'
    })]
  });
}
let ln = (e, t, s) => e === S5.Libraries ? 0 : s ? e === S5.VisualAssets ? 1 : e === S5.Pages || t ? 2 : 3 : e === S5.Pages || t ? 1 : 2;
function li({
  assetPanelItemsByLibraryKey: e,
  width: t
}) {
  let {
    libraryKey,
    pageId,
    currentView,
    isNavigatingVisualAssets
  } = wV();
  let {
    previousLibraryKey
  } = RR();
  let c = ll();
  let u = !!GM()();
  let {
    getPage,
    getLibrary
  } = _$$G();
  let m = _$$q()(libraryKey);
  _$$A(e);
  la();
  _$$S();
  let f = useMemo(() => getLibrary(libraryKey ?? previousLibraryKey), [getLibrary, libraryKey, previousLibraryKey]);
  let x = useMemo(() => getPage(libraryKey, pageId), [getPage, libraryKey, pageId]);
  let y = ln(currentView, c, u && isNavigatingVisualAssets);
  let {
    libraries,
    presets,
    librariesForConnectedProject
  } = _$$g3();
  let {
    localAssets
  } = e;
  !function (e, t, s, r) {
    let i = selectCurrentFile();
    let [l, o] = useAtomValueAndSetter(GT);
    let d = t.length + s.length + r.length;
    e.numComponents + e.numTemplates > 0 && (d += 1);
    useEffect(() => {
      if (!l) {
        o(!0);
        let e = _o.stop();
        e && trackEventAnalytics(YS, {
          elapsedMs: e,
          fileKey: i?.key,
          teamId: i?.teamId,
          orgId: i?.parentOrgId,
          isUi3RedesignedAssetPanel: !0,
          numLibraries: d,
          numComponents: 0,
          numComponentsShown: 0,
          numSectionsShown: d
        }, {
          forwardToDatadog: !0
        });
      }
    }, [l, o, d, i]);
  }(localAssets, libraries, presets, librariesForConnectedProject);
  return jsxs(Fragment, {
    children: [jsx(s9, {}), currentView === S5.Search ? jsx(i0, {}) : currentView === S5.Recents ? jsx(iM, {}) : jsxs(sk, {
      index: y,
      width: t,
      children: [jsx(n9, {
        width: t,
        hideScrollbar: y !== 0,
        localAssets
      }), u && isNavigatingVisualAssets && jsx(ls, {
        width: t
      }), !c && jsx(iS, {
        library: f,
        width: t,
        isLoading: m,
        hideScrollbar: y !== 1
      }), jsx(sM, {
        page: x,
        width: t
      })]
    })]
  });
}
let ll = () => {
  let {
    getLibrary
  } = _$$G();
  let {
    libraryKey
  } = wV();
  let s = _$$q()(libraryKey);
  let r = getLibrary(libraryKey);
  return !!r && !s && !!Cg(r);
};
let la = () => {
  let {
    libraryKey
  } = wV();
  let t = _$$R();
  let s = _$$$(libraryKey);
  let r = fd(libraryKey);
  useEffect(() => {
    r && s && t({
      updateSource: 'ui3_library_expand'
    });
  }, [s, r, t]);
};
function lb({
  libraryName: e
}) {
  let t = useDispatch();
  let {
    currentView,
    startSearch,
    onBack,
    libraryKey,
    visualAssetsType
  } = wV();
  let c = currentView === S5.Search;
  let p = _m();
  let m = cJ();
  let {
    inputRef,
    focusSearchBar
  } = _$$rl();
  let y = _$$b();
  let _ = useSelector(e => e.leftPanel.shouldFocusSearchBar) || y;
  let {
    query,
    setQuery,
    setSearchOption
  } = _$$I(Cn.AssetsPanel);
  let v = useOpenFileLibraryKey();
  let S = useCallback(() => {
    c && onBack();
  }, [c, onBack]);
  let k = useMemo(() => libraryKey ? libraryKey === v ? {
    type: _$$I2.LOCAL
  } : p ? {
    type: _$$I2.SITE_KIT
  } : {
    type: _$$I2.FILE,
    libraryKey
  } : {
    type: _$$I2.ALL
  }, [p, libraryKey, v]);
  let w = useCallback(e => {
    setQuery(e);
    setSearchOption(k);
    e === '' ? S() : c || startSearch();
  }, [setQuery, setSearchOption, k, S, c, startSearch]);
  let N = useRef(void 0);
  let I = Nv(!0);
  useEffect(() => {
    c && (query && N.current !== libraryKey && (analyticsEventManager.trackDefinedEvent('asset_search.misc_feature_usage', {
      aiResultsEnabled: I,
      entryPoint: 'asset-panel',
      featureSlug: 'library-filter-usage'
    }), setSearchOption(k)), N.current = libraryKey);
  }, [t, c, query, k, I, setSearchOption, libraryKey]);
  let E = useCallback(() => {
    query === '' && S();
  }, [S, query]);
  let M = useCallback(() => {
    w('');
    focusSearchBar();
    S();
  }, [w, focusSearchBar, S]);
  let A = useSelector(e => e.mirror.appModel.activeCanvasEditModeType);
  useEffect(() => {
    let e = e => {
      (BrowserInfo.chromeos ? e.altKey && e.shiftKey && e.keyCode === Uz.KEY_2 : e.altKey && e.keyCode === Uz.KEY_2) && A !== LayoutTabType.TEXT && (focusSearchBar(), e.preventDefault());
    };
    document.addEventListener('keydown', e);
    return () => {
      document.removeEventListener('keydown', e);
    };
  }, [A, focusSearchBar]);
  let P = useMemo(() => e ? getI18nString('design_systems.assets_panel.search_library') : m ? getI18nString('design_systems.assets_panel.search_all_sites_inserts') : visualAssetsType ? visualAssetsType === G3.IconSets ? getI18nString('design_systems.assets_panel.search_all_icon_sets') : getI18nString('design_systems.assets_panel.search_all_illustrations') : getI18nString('design_systems.assets_panel.search_all_libraries'), [e, visualAssetsType, m]);
  return jsxs('div', {
    className: 'asset_panel_search--container--u0qoH asset_panel_search--horizontalFlex---CG1k',
    children: [jsx('div', {
      children: jsx(_$$h6, {})
    }), jsx(E1, {
      autofocus: _,
      column: Wy.SEARCH,
      entryPointForTracking: 'editor:assets_panel',
      forwardedRef: inputRef,
      isNewAssetsPanel: !0,
      isVisible: !0,
      onBlur: E,
      onChange: w,
      onClearSearch: M,
      onFocus: _$$lQ,
      path: [ON.HEADER, my.SEARCH_AND_FILTER],
      placeholder: P,
      query,
      recordingKey: 'componentsLibrarySearch',
      selectOnFocus: !0
    })]
  });
}
function lC({
  library: e
}) {
  let {
    navigateToTop
  } = wV();
  let {
    focusSearchBar
  } = _$$rl();
  let i = _$$sN();
  let l = useCallback(() => {
    i('searchFilterChip', navigateToTop());
    focusSearchBar();
  }, [focusSearchBar, i, navigateToTop]);
  let {
    setKeyboardNavigationElement
  } = M3({
    path: [ON.HEADER, my.LIBRARY_SEARCH_CHIP]
  });
  return e ? jsx(_$$v, {
    'aria-label': getI18nString('design_systems.assets_panel.search_chip_label'),
    'hasCloseButton': !0,
    'onClose': l,
    'recordingKey': 'asset-panel-search-chip',
    'ref': setKeyboardNavigationElement,
    'htmlAttributes': {
      'data-testid': 'asset-panel-search-chip'
    },
    'children': e.name
  }) : null;
}
function lj({
  visualAssetsType: e
}) {
  let {
    navigateToTop
  } = wV();
  let {
    focusSearchBar
  } = _$$rl();
  let i = _$$sN();
  let l = useCallback(() => {
    i('visualAssetsSearchFilterChip', navigateToTop());
    focusSearchBar();
  }, [focusSearchBar, i, navigateToTop]);
  let {
    setKeyboardNavigationElement
  } = M3({
    path: [ON.HEADER, my.LIBRARY_SEARCH_CHIP]
  });
  return e ? jsxs('div', {
    'className': 'asset_panel_search--libraryChip--1nfYR asset_panel_search--horizontalFlex---CG1k',
    'data-testid': 'asset-panel-visual-assets-search-chip',
    'children': [jsx('span', {
      className: 'asset_panel_search--libraryChipText--3TsfE ellipsis--ellipsis--Tjyfa',
      children: e === G3.IconSets ? renderI18nText('design_systems.assets_panel.icon_sets') : renderI18nText('design_systems.assets_panel.illustrations')
    }), jsx(_$$E, {
      className: 'asset_panel_search--libraryChipRemove--kJiJn',
      onClick: l,
      recordingKey: 'asset-panel-visual-assets-search-chip',
      ref: setKeyboardNavigationElement,
      children: jsx(_$$f2, {})
    })]
  }) : null;
}
let lP = 'assets-panel-settings';
function lL({
  includeFolderSetting: e = !0
}) {
  let t = useRef(null);
  let {
    setKeyboardNavigationElement
  } = M3({
    path: [ON.HEADER, my.SEARCH_AND_FILTER],
    column: Wy.SETTINGS
  });
  let i = useCurrentFileKey();
  let l = Um();
  let o = l?.type === lP;
  let d = useDispatch();
  let c = useCallback(() => {
    o ? d(oB()) : (d(j7({
      type: lP,
      data: {
        position: {
          top: t.current?.getBoundingClientRect().bottom,
          left: t.current?.getBoundingClientRect().left
        }
      }
    })), analyticsEventManager.trackDefinedEvent('assets_panel.asset_type_dropdown_opened', {
      fileKey: i ?? void 0,
      assetsPanelVersion: 3
    }));
  }, [d, i, o]);
  let u = useMemo(() => {
    if (o) return l.data?.position;
  }, [l?.data?.position, o]);
  return jsxs(Fragment, {
    children: [jsx(_$$o2, {
      eventListeners: o ? ['onMouseDown'] : [],
      children: jsx(_$$d, {
        'onClick': c,
        'aria-expanded': o,
        'ref': _$$Ay4(t, setKeyboardNavigationElement),
        'aria-label': getI18nString('design_systems.assets_panel.settings_label'),
        'aria-haspopup': 'listbox',
        'htmlAttributes': {
          'data-testid': 'asset-panel-settings-button'
        },
        'children': jsx(_$$A5, {})
      })
    }), o && jsx(lR, {
      position: u,
      includeFolderSetting: e,
      buttonRef: t
    })]
  });
}
function lR({
  position: e,
  includeFolderSetting: t,
  buttonRef: s
}) {
  let i = useDispatch();
  let o = useCallback(() => {
    i(oB());
  }, [i]);
  let d = R2(typeof e?.top == 'number' ? e.top : void 0);
  let {
    productComponents
  } = g5(_$$$A.Design);
  let u = iE();
  let [m] = ye();
  let {
    currentView,
    libraryKey
  } = wV();
  let {
    getLibrary
  } = _$$G();
  let b = useCurrentFileKey();
  let C = useOpenFileLibraryKey();
  let [j] = MA();
  let v = !!GM()() && currentView === S5.Libraries;
  let S = v ? $H.LIST : j;
  let k = cJ() || v;
  let w = useMemo(() => currentView !== S5.Search && (productComponents.length > 0 || u.length > 0), [currentView, productComponents.length, u.length]);
  let N = useMemo(() => b && C ? getLibrary(C) : void 0, [getLibrary, b, C]);
  let I = N?.type === yW.DESIGN && (N.numComponents > 0 || N.numTemplates > 0);
  let {
    libraries,
    presets,
    librariesForConnectedProject
  } = _$$g3();
  let {
    goToLibrary,
    goToAll,
    goToRecents,
    changeAssetsView,
    toggleShowFolders
  } = function (e) {
    let t = selectCurrentFile();
    let s = _$$sN();
    let {
      navigateToLibrary,
      navigateToTop,
      navigateToRecents
    } = wV();
    let {
      setLastNavAction
    } = ZX();
    let [, d] = MA();
    let [, c] = ye();
    let {
      focusSearchBar
    } = _$$rl();
    let p = Xr(aK);
    let h = useCallback(e => {
      s('settingsMenu', e);
    }, [s]);
    let m = useCallback(e => {
      h(navigateToLibrary(e));
      focusSearchBar();
      p(_$$t2.Libraries);
    }, [focusSearchBar, navigateToLibrary, p, h]);
    let f = useCallback(() => {
      h(navigateToTop());
      focusSearchBar();
    }, [focusSearchBar, navigateToTop, h]);
    let x = useCallback(() => {
      h(navigateToRecents());
      focusSearchBar();
    }, [focusSearchBar, navigateToRecents, h]);
    let y = useCallback(() => e.current?.focus(), [e]);
    let _ = useCallback(e => {
      analyticsEventManager.trackDefinedEvent('assets_panel.view_mode_changed', {
        viewMode: e,
        fileKey: t?.key,
        fileTeamId: t?.teamId ?? void 0,
        fileOrgId: t?.parentOrgId ?? void 0
      });
      d(e);
      setLastNavAction(_$$r3.ToggleView);
    }, [t?.key, t?.parentOrgId, t?.teamId, d, setLastNavAction]);
    let b = NR({
      onBoth: e => () => _(e),
      onKeyDown: () => y
    });
    let C = useCallback(e => {
      analyticsEventManager.trackDefinedEvent('assets_panel.folder_toggle', {
        showFolders: e,
        fileKey: t?.key,
        fileTeamId: t?.teamId ?? void 0,
        fileOrgId: t?.parentOrgId ?? void 0
      });
      c(e);
    }, [t?.key, t?.parentOrgId, t?.teamId, c]);
    return {
      goToLibrary: m,
      goToAll: f,
      goToRecents: x,
      changeAssetsView: b,
      toggleShowFolders: NR({
        onBoth: e => () => C(e),
        onKeyDown: () => y
      })
    };
  }(s);
  let F = useMemo(() => {
    let e = [];
    e.push(lO({
      text: getI18nString('design_systems.assets_panel.dropdown_type_all_libraries'),
      checked: currentView === S5.Libraries || currentView === S5.Search && !libraryKey,
      onClick: goToAll
    }));
    w && e.push(lO({
      text: getI18nString('design_systems.assets_panel.dropdown_type_recents'),
      checked: currentView === S5.Recents && productComponents.length > 0,
      onClick: goToRecents
    }));
    I && e.push(lO({
      text: N.name,
      checked: currentView !== S5.Recents && libraryKey === N.libraryKey,
      onClick: () => goToLibrary(N.libraryKey)
    }));
    (libraries.length > 0 || presets.length > 0) && e.push(jsx(wv, {}));
    e.push(...libraries.map(({
      name: e,
      libraryKey: t
    }) => lO({
      text: e,
      isApproved: _$$sF(t),
      checked: currentView !== S5.Recents && libraryKey === t,
      onClick: () => goToLibrary(t)
    })));
    e.push(...presets.map(({
      name: e,
      libraryKey: t
    }) => lO({
      text: e,
      isApproved: _$$sF(t),
      isPreset: !0,
      checked: currentView !== S5.Recents && libraryKey === t,
      onClick: () => goToLibrary(t)
    })));
    librariesForConnectedProject.length > 0 && (e.push(jsx(wv, {})), e.push(jsx('div', {
      className: l()(_$$s.textBodyMedium.$, 'asset_panel_settings--optionSubtitle--9d2Ib'),
      children: getI18nString('design_systems.libraries_modal.connected_project_libraries')
    })), e.push(...librariesForConnectedProject.map(({
      name: e,
      libraryKey: t
    }) => lO({
      text: e,
      isApproved: _$$sF(t),
      checked: currentView !== S5.Recents && libraryKey === t,
      onClick: () => goToLibrary(t)
    }))));
    e.push(jsx(wv, {}));
    k || (e.push(lO({
      text: getI18nString('design_systems.assets_panel.view_toggle_grid'),
      checked: S === $H.GRID,
      onClick: changeAssetsView($H.GRID),
      icon: jsx(_$$t7, {})
    })), e.push(lO({
      text: getI18nString('design_systems.assets_panel.view_toggle_list'),
      checked: S === $H.LIST,
      onClick: changeAssetsView($H.LIST),
      icon: jsx(_$$Z2, {})
    })));
    t && e.push(lO({
      text: getI18nString('design_systems.assets_panel.view_toggle_show_folders'),
      checked: m,
      onClick: toggleShowFolders(!m),
      icon: jsx(_$$e4, {})
    }));
    return e;
  }, [currentView, libraryKey, goToAll, w, I, libraries, presets, librariesForConnectedProject, t, productComponents.length, goToRecents, N, goToLibrary, S, changeAssetsView, m, toggleShowFolders, k]);
  let B = useMemo(() => ({
    ...e,
    maxHeight: d
  }), [d, e]);
  return createPortal(jsx(_$$X, {
    className: l()(Dm, 'asset_panel_settings--dropdown--gs7K3'),
    positionAbsolute: !0,
    style: B,
    id: lP,
    hideDropdown: o,
    autofocusPrevElementOnEsc: !0,
    children: F
  }), document.body);
}
function lO({
  text: e,
  isApproved: t,
  isPreset: s,
  checked: n,
  onClick: i,
  icon: l
}) {
  return jsx(MM, {
    className: 'asset_panel_settings--dropdownOption--kJ-6M',
    checked: !!n,
    onClick: i,
    children: jsxs('div', {
      className: 'asset_panel_settings--optionContentContainer--iAJ6X',
      children: [jsx('div', {
        className: 'asset_panel_settings--optionContent---2nCX ellipsis--ellipsis--Tjyfa',
        children: l ? jsxs('div', {
          className: 'asset_panel_settings--optionWithLeftIconContainer--QP3Gm',
          children: [l, jsx('span', {
            children: e
          })]
        }) : e
      }), jsx('div', {
        className: 'asset_panel_settings--optionRightIcon--zi-2v',
        children: t ? jsx(_$$FX, {}) : s ? jsx('div', {
          className: _$$s.ml2.$,
          children: jsx(_$$E3, {
            libraryKey: void 0
          })
        }) : null
      })]
    })
  }, e);
}
let lZ = 'visual_search_assets_panel';
function lQ({
  onDismiss: e
}) {
  let [t, s] = useState(!1);
  let {
    width
  } = e8();
  let l = Math.min(0.7 * width, 240);
  let a = useSelector(vD);
  let o = Fk((e, t) => {
    let s = e.get(t);
    return s?.name;
  }, a);
  let {
    getConfig
  } = I7('assets_panel_visual_search');
  let c = getConfig().get('variant', 'control') === 'component_filter';
  let u = useCallback(() => {
    a && ($I({
      moduleToOpen: {
        type: 'custom',
        module: P5() ? jsx(z6, {
          initialSearchTagType: c ? qG.COMPONENTS : void 0,
          isVisualSearch: !0,
          closeOnEscape: !0
        }) : jsx(WS, {}),
        beforeModuleOpen: () => jp(G4.ASSETS_PANEL_VISUAL_SEARCH),
        name: Sn.VISUAL_SEARCH
      },
      trackingData: {
        source: G4.ASSETS_PANEL_VISUAL_SEARCH
      }
    }), e());
  }, [a, e, c]);
  let p = useCallback(t => {
    $I({
      moduleToOpen: {
        type: 'custom',
        module: P5() ? jsx(z6, {
          initialSearchTagType: c ? qG.COMPONENTS : void 0,
          isVisualSearch: !0,
          closeOnEscape: !0
        }) : jsx(WS, {}),
        beforeModuleOpen: () => qF(G4.ASSETS_PANEL_VISUAL_SEARCH, t),
        name: Sn.VISUAL_SEARCH
      },
      trackingData: {
        source: G4.ASSETS_PANEL_VISUAL_SEARCH
      }
    });
    e();
  }, [e, c]);
  let m = useMemo(() => {
    if (!a) return null;
    let e = getSingletonSceneGraph().get(a);
    if (!e) return null;
    let t = T1(e);
    return t ? t.startsWith('data:image') ? t : `data:image/png;base64,${t}` : null;
  }, [a]);
  let g = useCallback(e => {
    e.preventDefault();
    e.stopPropagation();
    let t = e.clipboardData?.files;
    t?.length === 1 && t[0]?.type.startsWith('image/') && p(t[0]);
  }, [p]);
  useEffect(() => {
    if (t) {
      document.addEventListener('paste', g);
      return () => document.removeEventListener('paste', g);
    }
  }, [g, t]);
  let f = useCallback(e => (!!e.metaKey || !!e.ctrlKey) && e.key === 'Enter' && (e.preventDefault(), e.stopPropagation(), u(), !0), [u]);
  let x = useHandleInputEvent(void 0, 'keydown', e => {
    f(e.event) && e.accept();
  });
  useEffect(() => (document.addEventListener('keydown', f), () => {
    document.removeEventListener('keydown', f);
  }), [f]);
  useEffect(() => {
    let t = t => {
      let s = t.target;
      s.closest('.modalContainer') || s.closest('canvas') || e();
    };
    document.addEventListener('mousedown', t);
    return () => {
      document.removeEventListener('mousedown', t);
    };
  }, [e]);
  let y = useMemo(() => o || renderI18nText('design_systems.assets_panel.visual_search.select_layer'), [o]);
  let _ = useMemo(() => a ? jsx('div', {
    className: 'xl010v5',
    children: jsx(Bf, {
      guid: a
    })
  }) : jsx(_$$y2, {}), [a]);
  O1(() => (e(), !0), KD.MODAL);
  return jsx(vL, {
    name: 'visual_search_modal',
    handleKeyDown: x,
    focusOnMount: !0,
    children: jsx(NJ, {
      className: 'visual_search_button--modalContainer--RU-Vk pointer_modal--walkThroughModal--6eTVS pointer_modal--pointerModal--wrpFz',
      dismissModal: e,
      width: l,
      targetKey: lZ,
      arrowPosition: F_.TOP,
      backgroundColor: 'var(--color-bg, $figmaFGWhite)',
      shouldNotWrapInParagraphTag: !0,
      noAnimation: !0,
      pointerOffsetOverride: l - 12,
      children: jsxs('div', {
        className: 'x78zum5 xdt5ytf x6s0dn4',
        children: [jsxs('div', {
          className: 'x78zum5 x1q0g3np xl56j7k x6s0dn4 xod5an3 x1s2d0ae xxk0z11',
          children: [_, jsx(_$$E4, {
            fontWeight: 'medium',
            truncate: !0,
            children: y
          })]
        }), m ? jsxs(Fragment, {
          children: [jsx('div', {
            className: 'xh8yej3 xekxv85 x19y5rnk x1v8gsql x78zum5 xdt5ytf x6s0dn4 xl56j7k',
            children: jsx('img', {
              src: m || '',
              alt: 'Preview',
              className: 'xeu0yli x14r61f x1tamke2 x19kjcj4'
            })
          }), jsx('div', {
            className: 'x78zum5 x13a6bvl xh8yej3 x14vqqas',
            children: jsxs($n, {
              variant: 'secondary',
              onClick: u,
              children: [jsx(_$$E4, {
                children: renderI18nText('design_systems.assets_panel.visual_search.search')
              }), jsx($n.Shortcut, {
                children: '\u2318\u23CE'
              })]
            })
          })]
        }) : jsxs('div', {
          className: 'xo1570h x192jxwq x2b8uid x1ypdohk xzlr0fm xdnk06y xh8yej3',
          children: [jsx('input', {
            type: 'file',
            accept: 'image/*',
            className: 'x1s85apg',
            id: 'visual-search-file-input',
            onChange: e => {
              let t = e.target.files?.[0];
              t && p(t);
            }
          }), jsx('button', {
            className: 'xh8yej3',
            onClick: e => {
              e.preventDefault();
              e.stopPropagation();
              document.getElementById('visual-search-file-input')?.click();
            },
            children: jsx('div', {
              className: 'xggk2y7',
              onDragOver: e => {
                e.preventDefault();
                e.stopPropagation();
              },
              onDrop: e => {
                e.preventDefault();
                e.stopPropagation();
                let t = e.dataTransfer.files?.[0];
                t && p(t);
              },
              onMouseEnter: () => s(!0),
              onMouseLeave: () => s(!1),
              children: jsxs('div', {
                className: 'x78zum5 xdt5ytf x6s0dn4 xl56j7k x1jnr06f',
                children: [jsx(_$$A6, {}), jsx(_$$E4, {
                  children: renderI18nText('design_systems.assets_panel.visual_search.drag_or_upload')
                })]
              })
            })
          })]
        })]
      })
    })
  });
}
function l0() {
  let [e, t] = useState(!1);
  let {
    setKeyboardNavigationElement
  } = M3({
    path: [ON.HEADER, my.SEARCH_AND_FILTER],
    column: Wy.VISUAL_SEARCH_BUTTON
  });
  return jsxs(_$$o2, {
    eventListeners: e ? ['onMouseDown'] : [],
    children: [jsx(_$$d, {
      'data-onboarding-key': lZ,
      'ref': setKeyboardNavigationElement,
      'onClick': () => {
        t(!e);
        analyticsEventManager.trackDefinedEvent('fragment_search.assets_panel_visual_search_button_clicked', {});
      },
      'aria-expanded': e,
      'aria-label': getI18nString('design_systems.assets_panel.visual_search.label'),
      'children': jsx(_$$T4, {})
    }), e && jsx(lQ, {
      onDismiss: () => t(!1)
    })]
  });
}
let l1 = new class {
  constructor() {
    this.format = e => {
      switch (e) {
        case _$$t2.Blocks:
          return getI18nString('design_systems.assets_panel.blocks');
        case _$$t2.Libraries:
          return getI18nString('design_systems.assets_panel.dropdown_libraries');
      }
    };
  }
}();
function l3() {
  let {
    getPage,
    getLibrary
  } = _$$G();
  let {
    currentView,
    libraryKey,
    pageId
  } = wV();
  let a = useMemo(() => getPage(libraryKey, pageId), [getPage, libraryKey, pageId]);
  let o = useMemo(() => getLibrary(libraryKey), [getLibrary, libraryKey]);
  let d = rK();
  let [c, u] = useAtomValueAndSetter(aK);
  let p = useIsFullscreenSitesView() && currentView !== S5.Search && currentView !== S5.Recents ? [_$$t2.Blocks, _$$t2.Libraries] : void 0;
  return jsxs('div', {
    className: 'x78zum5 xdt5ytf xw6ie8e',
    children: [jsx(l4, {
      library: o
    }), !!p && jsx(l5, {
      legend: renderI18nText('design_systems.assets_panel.assets'),
      value: c,
      onChange: e => {
        hB(() => u(e));
      },
      children: p.map(e => jsx(RT, {
        value: e,
        label: l1.format(e)
      }, e))
    }), !d && jsx(l2, {
      page: a
    })]
  });
}
function l2({
  page: e
}) {
  let {
    currentView
  } = wV();
  let s = useIsFullscreenSitesView();
  let [n] = useAtomValueAndSetter(aK);
  let i = nd();
  let l = s && currentView === S5.Libraries && n === _$$t2.Libraries;
  return s ? n === _$$t2.Blocks && currentView !== S5.Recents ? null : n === _$$t2.Libraries && i ? null : jsxs('div', {
    className: 'x78zum5 x1q0g3np x6s0dn4',
    children: [jsx(nc, {
      page: e
    }), l && jsx('div', {
      className: 'x15bdqvn x1y8zg4n',
      children: jsx(_$$b3, {
        entrypoint: _$$r6.ASSETS_PANEL_BUTTON,
        hideIfNoUpdates: !1
      })
    })]
  }) : jsx(nc, {
    page: e
  });
}
function l4({
  library: e
}) {
  let {
    currentView,
    visualAssetsType
  } = wV();
  let n = Ko();
  let {
    getConfig
  } = I7('assets_panel_visual_search');
  let l = _$$b();
  let {
    closeOverlay
  } = _$$h5();
  let o = !useIsFullscreenSitesView() && n && getConfig().get('variant', 'control') !== 'control';
  return jsxs('div', {
    ...Ay.props(l6.searchAndFilter, l && l6.leftRailSearchAndFilter),
    children: [jsx('div', {
      ...Ay.props(l6.search, l && l6.leftRailSearch),
      children: jsx(lb, {
        libraryName: e?.name
      })
    }), o && jsx('div', {
      className: 'x1ms6mhf x1npkx4u',
      children: jsx(l0, {})
    }), jsx('div', {
      ...Ay.props(l6.settings, o && l6.settingsWithVisualSearchButton),
      children: jsx(lL, {
        includeFolderSetting: [S5.Libraries, S5.Pages, S5.Assets].includes(currentView)
      })
    }), l && jsx('div', {
      className: 'x1ms6mhf x1k3v4rp',
      children: jsx(_$$K4, {
        'aria-label': getI18nString('design_systems.assets_panel.close_inserts'),
        'onClick': closeOverlay,
        'children': jsx(_$$L, {})
      })
    }), currentView === S5.Search && e && jsx('div', {
      className: 'x78zum5 xeuugli x7sv70a xgkxs2y',
      children: jsx(lC, {
        library: e
      })
    }), currentView === S5.Search && visualAssetsType && jsx('div', {
      className: 'x78zum5 xeuugli x7sv70a xgkxs2y',
      children: jsx(lj, {
        visualAssetsType
      })
    })]
  });
}
function l5({
  legend: e,
  value: t,
  onChange: s,
  children: n
}) {
  return jsx('div', {
    className: 'x1swld1g x1xmf6yo xv42yna',
    children: jsx(bL, {
      legend: jsx(_$$q2, {
        children: e
      }),
      value: t,
      onChange: s,
      children: n
    })
  });
}
let l6 = {
  searchAndFilter: {
    display: 'xrvj5dj',
    gridTemplateColumns: 'x52fmzj',
    gridTemplateRows: 'x1eavx82',
    gridAutoRows: 'x1on1db2',
    gap: 'x1jnr06f',
    rowGap: null,
    columnGap: null,
    alignItems: 'x6s0dn4',
    marginLeft: 'xet2fuk',
    marginInlineStart: null,
    marginInlineEnd: null,
    minHeight: 'x21xpn4',
    padding: 'x1y8zg4n',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: !0
  },
  leftRailSearchAndFilter: {
    padding: 'xvq5f2v',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    columnGap: 'x1o1pmfc',
    $$css: !0
  },
  search: {
    gridRow: 'x1ms6mhf',
    gridRowStart: null,
    gridRowEnd: null,
    gridColumn: 'xgkxs2y',
    gridColumnStart: null,
    gridColumnEnd: null,
    $$css: !0
  },
  leftRailSearch: {
    paddingRight: 'x5jayri',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  },
  settings: {
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    gridRow: 'x1ms6mhf',
    gridRowStart: null,
    gridRowEnd: null,
    gridColumn: 'x1npkx4u',
    gridColumnStart: null,
    gridColumnEnd: null,
    $$css: !0
  },
  settingsWithVisualSearchButton: {
    gridColumn: 'x1k3v4rp',
    gridColumnStart: null,
    gridColumnEnd: null,
    $$css: !0
  }
};
let l7 = e => useCallback(t => {
  t() || e();
}, [e]);
function an({
  width: e
}) {
  let t = r4();
  let s = function (e) {
    let t = selectCurrentUser();
    let s = selectCurrentFile();
    let r = jO();
    let i = _$$f('has_dismissed_component_sidebar_library_upsell_banner');
    let l = useSelector(e => e.isFreeUser);
    let a = useSelector(selectTeams);
    let o = s?.teamId ? a[s.teamId] : null;
    let d = useSubscription(TeamCanEdit, {
      id: s?.teamId ?? ''
    }, {
      enabled: !!s?.teamId
    });
    let c = s?.canEdit ?? !1;
    let u = d.data?.team?.hasPermission ?? !1;
    let p = e.numComponents > 0 || e.numTemplates > 0;
    return useMemo(() => !i && l && (!o || !w5(o) && u) && c && r && p && Hz(t?.id), [i, l, o, u, c, r, p, t]);
  }(t.localAssets);
  let i = je().status === 'loading';
  let l = useRef(null);
  let c = wY(l)?.width || e;
  let [u] = MA();
  let p = selectCurrentFile();
  _$$h(() => {
    trackEventAnalytics('Component Sidebar Viewed', {
      viewMode: u,
      assetsPanelVersion: 3,
      fileKey: p?.key,
      fileTeamId: p?.teamId ?? void 0,
      fileOrgId: p?.parentOrgId ?? void 0,
      componentSuggestionSessionId: _$$r()
    });
  });
  let {
    isFlyoutOpen,
    closeFlyout,
    flyoutProps
  } = JA();
  let _ = useCallback(e => {
    let t = document.getElementById(Ev);
    isFlyoutOpen || !t || !l.current || !e.relatedTarget || l.current.contains(e.relatedTarget) || t.contains(e.relatedTarget) || closeFlyout();
  }, [isFlyoutOpen, closeFlyout]);
  return jsxs(ai, {
    assetPanelItemsByLibraryKey: t,
    width: c,
    children: [jsx('div', {
      'className': kL,
      'data-testid': 'component-sidebar',
      'translate': 'no',
      'ref': l,
      'onBlur': _,
      'children': jsxs('div', {
        className: kL,
        style: {
          width: c
        },
        children: [jsx(l3, {}), jsx(iH, {
          isLoading: i,
          children: jsx(li, {
            assetPanelItemsByLibraryKey: t,
            width: c
          })
        }), s && jsx(_$$V, {}), jsx('div', {
          'style': {
            left: `${c}px`,
            top: '240px'
          },
          'className': b3,
          'data-onboarding-key': RJ
        }), jsx(P, {
          width: c
        })]
      })
    }), flyoutProps && jsx(_$$w, {
      ...flyoutProps
    })]
  });
}
function ai({
  children: e,
  width: t,
  assetPanelItemsByLibraryKey: s
}) {
  let n = _$$b();
  return jsx(P3, {
    children: jsx(_$$K, {
      assetPanelItemsByLibraryKey: s,
      children: jsx(_$$tM2, {
        className: l()(kL, n && Nb),
        children: jsx(al, {
          children: jsx(e7, {
            width: t,
            children: e
          })
        })
      })
    })
  });
}
function al({
  children: e
}) {
  !function () {
    let {
      libraryKey,
      pageId,
      folderPath,
      navigateToTop,
      navigateToPage,
      navigateToPath,
      navigateToLibrary,
      currentView,
      onBack
    } = wV();
    let c = _$$q();
    let u = c(libraryKey);
    let {
      getLibrary,
      getFolder
    } = _$$G();
    let {
      setLastNavAction
    } = ZX();
    let g = l7(navigateToTop);
    let f = _$$g3().allLibrariesByLibraryKey;
    let [x, y] = useAtomValueAndSetter(dL);
    useEffect(() => {
      x && f.size > 0 && (hB(() => navigateToLibrary(x)), y(null));
    }, [navigateToLibrary, f.size, x, y]);
    _$$sH();
    useEffect(() => {
      if (currentView !== S5.Assets && currentView !== S5.Pages) return;
      let n = getLibrary(libraryKey);
      let a = f.get(libraryKey);
      if (!n) {
        if (c(libraryKey) && a && currentView !== S5.Assets) return;
        g(navigateToTop);
        return;
      }
      if (pageId) {
        if (!n?.pages.get(pageId)) {
          let e = Cg(n);
          e ? g(() => navigateToPage(e.id)) : g(onBack);
          return;
        }
        if (folderPath && !getFolder(libraryKey, pageId, folderPath)) {
          let r = folderPath.slice(0, -1);
          let n = getFolder(libraryKey, pageId, r);
          for (; !n && r.length > 0;) n = getFolder(libraryKey, pageId, r = r.slice(0, -1));
          if (!n) return g(() => navigateToPage(pageId));
          let a = parent ? xc(n) : void 0;
          return void (a ? g(() => navigateToPath([...r, a.name])) : (g(() => navigateToPath(r)), setLastNavAction(_$$r3.Back)));
        }
      }
    }, [onBack, u, currentView, pageId, folderPath, navigateToTop, navigateToPage, getLibrary, getFolder, navigateToPath, setLastNavAction, g, c, f, libraryKey]);
    useEffect(() => {
      let r = getLibrary(libraryKey);
      if (!r || u) return;
      let n = Cg(r);
      if (currentView === S5.Pages && n) {
        navigateToPage(n.id);
      } else if (currentView === S5.Assets) {
        let r = getFolder(libraryKey, pageId, folderPath);
        if (!r) return;
        let n = xc(r);
        n && navigateToPath([...(folderPath ?? []), n.name]);
      }
    }, [u, currentView, folderPath, getFolder, getLibrary, navigateToPage, navigateToPath, onBack, pageId, libraryKey]);
  }();
  return jsx(Fragment, {
    children: e
  });
}
function aa() {
  return jsx('div', {
    className: _$$s.colorTextSecondary.my8.mx16.$,
    children: renderI18nText('design_systems.assets_panel.error')
  });
}
export function $$ao0({
  width: e
}) {
  return jsx(_$$tH, {
    boundaryKey: 'AssetPanelUI3',
    fallback: jsx(aa, {}),
    children: jsx(an, {
      width: e
    })
  });
}
export const g = $$ao0;