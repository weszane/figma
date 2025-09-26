import { Ay, xk } from '@stylexjs/stylex';
import lr from 'classnames';
import { Fragment as _$$Fragment, createContext, createElement, forwardRef, memo, Suspense, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { A as _$$A } from '../0c62c2fd/637169';
import { b as _$$b, j as _$$j2, JP, O6, R3, Rg, zu } from '../0c62c2fd/722541';
import { w as _$$w2 } from '../0c62c2fd/912149';
import { t as _$$t5 } from '../2b17fec9/172012';
// import { j } from '../2b17fec9/703025'
import { _ as _$$_2 } from '../441/351942';
import { u as _$$u3 } from '../441/357009';
import { W as _$$W2 } from '../441/503702';
import { Z as _$$Z3 } from '../573/287354';
import { w as _$$w } from '../573/289674';
import { n as _$$n3 } from '../573/512493';
import { J as _$$J } from '../573/772431';
import { q as _$$q3 } from '../573/775640';
import { m as _$$m3 } from '../573/904271';
import { L as _$$L2 } from '../642/269105';
import { j as _$$j3 } from '../642/323508';
import { J as _$$J6 } from '../642/485582';
import { $$e20 } from '../642/671529';
import { g as _$$g3 } from '../642/794951';
import { o as _$$o5 } from '../642/854123';
import { Ay as _$$Ay3 } from '../642/964720';
import { r as _$$r7 } from '../905/11924';
import { Ui3PositionType } from '../905/11928';
import { DevModeUI } from '../905/15667';
import { isLoading } from '../905/18797';
import { z4 } from '../905/37051';
import { ModalRootComponent } from '../905/38914';
import { $ as _$$$2 } from '../905/43354';
import { k as _$$k3 } from '../905/44647';
import { resourceDataToSubscriptionMapAtom } from '../905/72677';
import { n as _$$n } from '../905/79930';
import { o as _$$o4 } from '../905/89370';
import { m as _$$m } from '../905/99004';
import { selectWithShallowEqual } from '../905/103090';
import { Z as _$$Z2 } from '../905/104740';
import { Ef } from '../905/107436';
import { y as _$$y2 } from '../905/129046';
import { KindEnum } from '../905/129884';
import { ScrollContainer } from '../905/143421';
import { M as _$$M } from '../905/152487';
import { ox as _$$ox } from '../905/163832';
import { ServiceCategories } from '../905/165054';
import { D as _$$D } from '../905/169680';
import { T as _$$T } from '../905/172092';
import { InputComponent } from '../905/185998';
import { permissionScopeHandler as _$$l6 } from '../905/189185';
import { W as _$$W } from '../905/200727';
import { P as _$$P } from '../905/201667';
import { useSingleEffect } from '../905/791079';
import { x as _$$x } from '../905/211326';
import { B as _$$B } from '../905/224000';
import { J as _$$J5 } from '../905/225412';
import { Rectangle } from '../905/249071';
import { A as _$$A4 } from '../905/251970';
import { Label } from '../905/270045';
import { createReduxSubscriptionAtomWithState } from '../905/270322';
import { O as _$$O5 } from '../905/273186';
import { useSelectedStyleOrSelectionPropertyValue, useNonMixedSelectionPropertyValue, useSelectedStyleOrSelectionPropertyValues } from '../905/275640';
import { h as _$$h2 } from '../905/284399';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { v as _$$v } from '../905/318279';
import { X as _$$X2 } from '../905/319582';
import { n as _$$n2 } from '../905/347702';
import { UpgradeAction } from '../905/370443';
import { selectCurrentUser, getUserId } from '../905/372672';
import { _ as _$$_ } from '../905/381235';
import { deepEqual } from '../905/382883';
import { e as _$$e3 } from '../905/383776';
import { u as _$$u } from '../905/389684';
import { mapAndAggregateResources } from '../905/401885';
import { _ as _$$_3 } from '../905/410717';
import { F as _$$F2 } from '../905/422355';
import { rq as _$$rq } from '../905/425180';
import { useModalManager } from '../905/437088';
import { IconButton } from '../905/443068';
import { k as _$$k2 } from '../905/443820';
import { analyticsEventManager, trackEventAnalytics } from '../905/449184';
import { E as _$$E } from '../905/453826';
import { l as _$$l7 } from '../905/479687';
import { X as _$$X } from '../905/482718';
import { PrimaryWorkflowEnum } from '../905/497152';
import { L6 } from '../905/498948';
import { O as _$$O2 } from '../905/501876';
import { handleAtomEvent } from '../905/502364';
import { l as _$$l4 } from '../905/509505';
import { E as _$$E6 } from '../905/511388';
import { Vector2D } from '../905/512402';
import { C as _$$C2 } from '../905/520159';
import { Button } from '../905/521428';
import { c as _$$c } from '../905/534105';
import { r6 as _$$r4 } from '../905/542608';
import { useIsFullscreenSitesView } from '../905/561485';
import { W as _$$W3 } from '../905/569454';
import { dG, Zk } from '../905/571648';
import { VisualBellIcon } from '../905/576487';
import { AffineTransform } from '../905/583953';
import { O as _$$O3 } from '../905/599243';
import { getFeatureFlags } from '../905/601108';
import { QL } from '../905/609392';
import { customHistory } from '../905/612521';
import { buildFileUrl } from '../905/612685';
import { setupThemeContext } from '../905/614223';
import { Pv } from '../905/619652';
import { e as _$$e2 } from '../905/621515';
import { ButtonPrimitive } from '../905/632989';
import { getVisibleTheme } from '../905/640017';
import { XF } from '../905/661614';
import { WAFImage } from '../905/675859';
import { textDisplayConfig } from '../905/687265';
import { eA as _$$eA } from '../905/695660';
import { qo, UN } from '../905/700578';
import { defaultColorManipulator } from '../905/713722';
import { l as _$$l3 } from '../905/716947';
import { Q as _$$Q } from '../905/717951';
import { E as _$$E3 } from '../905/719609';
import { qW } from '../905/720292';
import { Point } from '../905/736624';
import { l as _$$l5 } from '../905/745972';
import { F_ as _$$F_ } from '../905/748636';
import { G as _$$G } from '../905/750789';
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from '../905/751457';
import { DialogLabel } from '../905/799737';
import { G as _$$G2 } from '../905/800369';
import { Ih } from '../905/820169';
import { EventShield } from '../905/821217';
import { useCurrentUserOrg } from '../905/845253';
import { e as _$$e4 } from '../905/845623';
import { F_ } from '../905/858282';
import { isVsCodeEnvironment } from '../905/858738';
import { bL as _$$bL3 } from '../905/867927';
import { ProjectDevelopmentPhases } from '../905/869235';
import { generateUUIDv4 } from '../905/871474';
import { C as _$$C3 } from '../905/887158';
import { ManuallyLabeledCheckbox } from '../905/909715';
import { XHR } from '../905/910117';
import { bL as _$$bL, _L } from '../905/911410';
import { e as _$$e5 } from '../905/916195';
import { dayjs } from '../905/920142';
import { useFullscreenReady } from '../905/924253';
import { Jn } from '../905/927294';
import { q as _$$q5 } from '../905/932270';
import { noop } from 'lodash-es';
import { Violation } from '../905/940056';
import { selectUserFlag } from '../905/940356';
import { b as _$$b5 } from '../905/946806';
import { w as _$$w3 } from '../905/955293';
import { d$ } from '../905/958097';
import { O as _$$O4 } from '../905/969533';
import { TextWithTruncation } from '../905/984674';
import { postUserFlag } from '../905/985254';
import { X as _$$X5 } from '../905/999307';
import { d as _$$d2 } from '../1156/154963';
import { E as _$$E9 } from '../1156/200958';
import { E as _$$E0 } from '../1156/298326';
import { Oz } from '../1156/354790';
import { N as _$$N2 } from '../1156/461005';
import { X as _$$X4 } from '../1156/731676';
import { P as _$$P4 } from '../1156/852405';
import { M as _$$M4 } from '../1250/475573';
import { T as _$$T5 } from '../3276/255140';
import { Z as _$$Z } from '../3276/890696';
import { BC, w_ } from '../3674/61752';
import { O as _$$O } from '../3674/344857';
import { XQ, XV } from '../3674/371829';
import { b as _$$b3 } from '../3674/400466';
import { L as _$$L } from '../3674/430035';
import { E as _$$E2 } from '../3674/466343';
import { S as _$$S } from '../3674/674644';
import { s as _$$s5 } from '../3682/764731';
import { normalizeJobRole } from '../3973/538504';
import { NuxOnboardingOverlay } from '../4452/529989';
import { m as _$$m4 } from '../5421/111531';
import { Ay as _$$Ay5 } from '../5421/231229';
import { u as _$$u2 } from '../5421/310610';
import { d as _$$d } from '../5421/548912';
import { p as _$$p4 } from '../5421/559978';
import { Z0 } from '../5421/670646';
import { U as _$$U4 } from '../5421/699069';
import { A as _$$A6 } from '../5421/738450';
import { m as _$$m5 } from '../5421/747859';
import { E as _$$E8 } from '../5421/797890';
import { S as _$$S3 } from '../5421/959002';
import { T as _$$T3 } from '../5430/528285';
import { C5 } from '../7021/95197';
import { Y as _$$Y } from '../8618/378618';
import { q as _$$q4 } from '../8826/33573';
import { Nv } from '../9410/40486';
import { b as _$$b4, G as _$$G4 } from '../9410/59055';
import { S as _$$S2 } from '../9410/139984';
import { J as _$$J7 } from '../9410/165619';
import { A as _$$A3 } from '../9410/188255';
import { l as _$$l8 } from '../9410/331071';
import { Oo } from '../9410/571209';
import { g as _$$g2 } from '../9410/672727';
import { Nz, X5 } from '../9410/728210';
import { G as _$$G3 } from '../9410/729166';
import { f as _$$f2 } from '../9410/764883';
import { qn, XI } from '../9410/793186';
import { c as _$$c3 } from '../9410/794676';
import { Ab } from '../9410/904355';
import { v as _$$v2 } from '../9410/916286';
import { sk as _$$sk } from '../9410/973081';
import { yh } from '../9410/974031';
import { K as _$$K2 } from '../b2835def/230877';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { CommentsSubmitButton } from '../draftjs_composer/524876';
import { Dqt, E5y, EYw, kBA, koo, KTt, L6E, l_p, Nh9, qiY, wRw } from '../figma_app/6204';
import { Dm } from '../figma_app/8833';
import { ei as _$$ei } from '../figma_app/9054';
import { KP } from '../figma_app/12491';
import { y as _$$y } from '../figma_app/13082';
import { atom, useAtomValueAndSetter, useAtomWithSubscription, Xr, atomStoreManager } from '../figma_app/27355';
import { u24 } from '../figma_app/27776';
import { GQ, Ye } from '../figma_app/32128';
import { useLatestRef } from '../figma_app/922077';
import { pO } from '../figma_app/42945';
import { FileCanAccessFullDevMode } from '../figma_app/43951';
import { FEditorType } from '../figma_app/53721';
import { $ as _$$$ } from '../figma_app/61705';
import { getViewportInfo, getViewportX, getViewportZoom, computeFullscreenViewportForNode, getViewportY, scaleRect } from '../figma_app/62612';
import { U as _$$U2 } from '../figma_app/65327';
import { io as _$$io, bo } from '../figma_app/73698';
import { iT as _$$iT, ys } from '../figma_app/74165';
import { _J, DL, KL, Tg } from '../figma_app/74668';
import { getObservableOrFallback, getObservableValue } from '../figma_app/84367';
import { useIsFullscreenOverview, useHasReadyNodesWithParentOrg, useIsFullscreenDevModeComponentBrowser } from '../figma_app/88239';
import { lM as _$$lM } from '../figma_app/90441';
import { setLeftPanelTab } from '../figma_app/91703';
import { $C, $H, E as _$$E4, r4 as _$$r3, _M, Bd, Bp, Dg, DJ, E7, E$, IZ, mE, NM, pR, Sg, vu } from '../figma_app/99772';
import { LZ } from '../figma_app/101956';
import { Fz, Zg } from '../figma_app/106207';
import { z as _$$z } from '../figma_app/106763';
import { Jl, UM, wh, yq } from '../figma_app/114522';
import { _9 as _$$_4 } from '../figma_app/119420';
import { dP } from '../figma_app/119475';
import { Lk } from '../figma_app/122682';
import { rh as _$$rh } from '../figma_app/139865';
import { S2 } from '../figma_app/159296';
import { JR, Qp, Wi } from '../figma_app/162641';
import { t as _$$t2 } from '../figma_app/162756';
import { e as _$$e6 } from '../figma_app/163681';
import { useDeepEqualSceneValue } from '../figma_app/167249';
import { buildUploadUrl, getInitialOptions } from '../figma_app/169182';
import { j as _$$j5 } from '../figma_app/171378';
import { Dz } from '../figma_app/176973';
import { R as _$$R2 } from '../figma_app/184628';
import { zC } from '../figma_app/186343';
import { FFileType, FPlanNameType } from '../figma_app/191312';
import { N3, QX } from '../figma_app/194671';
import { pt } from '../figma_app/198840';
import { getCurrentPage } from '../figma_app/202626';
import { ac as _$$ac, Bx, Lt, wg } from '../figma_app/210234';
import { fV } from '../figma_app/236178';
import { SI } from '../figma_app/241341';
import { isOnboardingComplete } from '../figma_app/242339';
import { MM } from '../figma_app/246831';
import { tw as _$$tw, isInteractionOrEvalMode } from '../figma_app/897289';
import { r0 as _$$r5, yU as _$$yU, d9, GM, kR, LG, qQ, QU } from '../figma_app/257614';
import { J as _$$J3 } from '../figma_app/261874';
import { N as _$$N } from '../figma_app/268271';
import { DialogBody, DialogTitle, DialogActionStrip, DialogContents, DialogFooter, DialogCustomContents, DialogHeader } from '../figma_app/272243';
import { A5 } from '../figma_app/274104';
import { alwaysFalseCallback2 } from '../figma_app/275462';
import { StyleType } from '../figma_app/276332';
import { useSubscription } from '../figma_app/288654';
import { useDeveloperContextualUpsellsExperiment, useRfdSignalsUpsellExperiment, useFigmaMakeDesignEditorPopoutUpsellExperiment } from '../figma_app/297957';
import { f6 as _$$f3 } from '../figma_app/302802';
import { RM } from '../figma_app/304955';
import { $W, mC } from '../figma_app/325537';
import { Hu, kl } from '../figma_app/327683';
import { isBigmaEnabledAlias3 } from '../figma_app/336853';
import { Tj } from '../figma_app/342207';
import { p as _$$p2 } from '../figma_app/353099';
import { K as _$$K3 } from '../figma_app/358450';
import { nl as _$$nl } from '../figma_app/359943';
import { p as _$$p } from '../figma_app/372802';
import { G as _$$G5 } from '../figma_app/373780';
import { isDescendant, traverseChildren } from '../figma_app/387100';
import { av as _$$av, dd as _$$dd, dg as _$$dg, i7 as _$$i, il as _$$il, JT as _$$JT, lX as _$$lX, m7 as _$$m2, DC, fx, Gj, h5, PV, Rz, U_, Yu, ZE, Zz } from '../figma_app/407414';
import { NJ } from '../figma_app/419216';
import { OM, YU } from '../figma_app/422471';
import { o5 as _$$o2 } from '../figma_app/433401';
import { UN as _$$UN, Nf } from '../figma_app/449837';
import { M_, q3 } from '../figma_app/450829';
import { fullscreenValue } from '../figma_app/455680';
import { useTeamPlanPublicInfo, useTeamPlanUser } from '../figma_app/465071';
import { throwTypeError } from '../figma_app/465776';
import { useCanAccessFullDevMode, useCanAccessDevModeEntryPoint } from '../figma_app/473493';
import { clamp, range } from '../figma_app/492908';
import { t as _$$t4 } from '../figma_app/501766';
import { ED } from '../figma_app/504823';
import { tY as _$$tY, SF } from '../figma_app/512532';
import { useCurrentFileKey, selectCurrentFile, openFileAtom, openFileKeyAtom } from '../figma_app/516028';
import { GV } from '../figma_app/532170';
import { r8 as _$$r2, W3 } from '../figma_app/537824';
import { eF as _$$eF, iS as _$$iS, Op as _$$Op, rT as _$$rT, KV, ky, L2, yd, zZ } from '../figma_app/542202';
import { userFlagExistsAtomFamily, userFlagAtomFamily } from '../figma_app/545877';
import { BI } from '../figma_app/546509';
import { _9, Dm as _$$Dm, fR, gx, p6 } from '../figma_app/548615';
import { isUserNotLoggedInAndEditorSupported } from '../figma_app/564183';
import { setupResourceAtomHandler } from '../figma_app/566371';
import { Fy, NT } from '../figma_app/579169';
import { l2 as _$$l2, rL as _$$rL, _i, bk, Hl, mr, PM, VK, vP } from '../figma_app/584405';
import { Xu } from '../figma_app/588582';
import { q as _$$q2, T as _$$T4 } from '../figma_app/590592';
import { oR as _$$oR, E_ } from '../figma_app/598952';
import { $z, e6 as _$$e } from '../figma_app/617427';
import { lV as _$$lV } from '../figma_app/617606';
import { kQ, pZ } from '../figma_app/620124';
import { o9 as _$$o } from '../figma_app/621201';
import { JT } from '../figma_app/632248';
import { isPublishedTeamLibrary, LibraryTabEnum } from '../figma_app/633080';
import { zl as _$$zl } from '../figma_app/641749';
import { getPermissionsState } from '../figma_app/642025';
import { lz as _$$lz, sf as _$$sf, td as _$$td, bV, Dt, EN, OL } from '../figma_app/646031';
import { AssetFilterMode, useSubscribedAssets, filterStylesByType } from '../figma_app/646357';
import { wW } from '../figma_app/656450';
import { useCachedSubtree } from '../figma_app/679183';
import { y6 } from '../figma_app/681951';
import { useProjectFileCreationPermissions, canCreateFileType } from '../figma_app/687776';
import { s_ as _$$s_, yO } from '../figma_app/701001';
import { $ as _$$$3 } from '../figma_app/709177';
import { E as _$$E1 } from '../figma_app/714009';
import { X as _$$X3, y0 } from '../figma_app/718307';
import { useIsProgressBarHiddenOrLocked, useHasSceneGraphSelection, useSceneGraphSelector, useCurrentTool, useAppModelProperty } from '../figma_app/722362';
import { lB as _$$lB, EE } from '../figma_app/731583';
import { getColorFormat, getPropertiesPanelSplitPosition, EditorPreferencesApi } from '../figma_app/740163';
import { getPropertiesPanelTab, setPropertiesPanelTab } from '../figma_app/741237';
import { M as _$$M2 } from '../figma_app/749682';
import { nE as _$$nE, fY, g7, hx, Iy, jq, m7, qL, qp, qZ, u2, ui, Ut, v4, VG, W0 } from '../figma_app/761118';
import { SceneGraphHelpers, AppStateTsApi, DesignWorkspace, CustomPosition, ItemType, FileSourceType, ViewType, LinterCppBindings, MakeBindings, DesignGraphElements, UIVisibilitySetting, UserActionState, VariableResolvedDataType, UserInterfaceElements, NodeType, VariableDataType, SourceType } from '../figma_app/763686';
import { parsePxInt, parsePxNumber } from '../figma_app/783094';
import { zA } from '../figma_app/791586';
import { Fj } from '../figma_app/793429';
import { iP as _$$iP, Dj } from '../figma_app/803054';
import { $c, qN } from '../figma_app/803787';
import { generateRecordingKey } from '../figma_app/878298';
import { eBU } from '../figma_app/822011';
import { dL as _$$dL } from '../figma_app/825489';
import { oV as _$$oV, FR, xp } from '../figma_app/827216';
import { TrackedButton, TrackingProvider } from '../figma_app/831799';
import { bL as _$$bL2, wi as _$$wi, gR } from '../figma_app/861123';
import { isStarterUserAtom } from '../figma_app/864723';
import { C as _$$C } from '../figma_app/872960';
import { s as _$$s4 } from '../figma_app/874592';
import { bj, Re, Yq } from '../figma_app/880974';
import { d1, hj, Sp } from '../figma_app/888478';
import { selectSceneGraphSelectionKeys } from '../figma_app/889655';
import { nr as _$$nr, rn as _$$rn, Op } from '../figma_app/903573';
import { Cu, F7, yU } from '../figma_app/908460';
import { FileBrowserLocation } from '../figma_app/915202';
import { m3 } from '../figma_app/915281';
import { Gb } from '../figma_app/933328';
import { _q, PA } from '../figma_app/957070';
import { tZ as _$$tZ } from '../figma_app/960196';
import { U as _$$U } from '../figma_app/964810';
import { aW as _$$aW, iO as _$$iO, rg as _$$rg, jV, Ue, uw } from '../figma_app/965653';
import { LI, Wd } from '../figma_app/970285';
import { t6 as _$$t3 } from '../figma_app/975811';
import { getCurrentFileType, isWhiteboardFileType, isDevHandoffEditorType, getEditorTypeOrNull } from '../figma_app/976749';
import { P as _$$P3 } from '../figma_app/979374';
import { useAutosuggestShadowRead } from '../figma_app/990334';
import { BE } from '../figma_app/991591';
import nc from '../vendor/128080';
import { d4, wA } from 'react-redux';
import { Zk as _$$Zk, TW, YZ } from '../vendor/677121';
import io from '../vendor/805353';
import { Te } from '../vendor/813803';
import { useDebounce } from 'use-debounce';
let j = atom(0);
function v() {
  atomStoreManager.set(j, e => e + 1);
}
let C = atom(!1);
let k = atom('');
let E = atom(null);
function S() {
  return {
    isOpen: useAtomWithSubscription(C),
    prompt: useAtomWithSubscription(k)
  };
}
function w() {
  atomStoreManager.set(C, !1);
  atomStoreManager.set(k, '');
  atomStoreManager.set(j, 0);
  atomStoreManager.set(E, null);
}
function R(e) {
  atomStoreManager.set(k, e);
}
let L = createReduxSubscriptionAtomWithState(selectSceneGraphSelectionKeys);
let T = atom(e => {
  let t = e(L);
  let l = e(E);
  return l && l.length > 0 ? l : t;
});
function M(e) {
  let t = function (e) {
    let t = $$e20(e);
    let l = useAtomWithSubscription(E);
    let n = z(l ?? [], e);
    return l && l.length > 0 ? n : t;
  }(e);
  return {
    x: t.x + t.width + 9 + 8,
    y: t.y + 17 + 8
  };
}
let O = e => useDeepEqualSceneValue((e, t) => {
  let l = t.map(t => e.get(t)?.absoluteBoundingBox).filter(e => void 0 !== e);
  if (l.length === 0) {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
  let n = l[0].x;
  let i = l[0].y;
  let r = l[0].x + l[0].w;
  let s = l[0].y + l[0].h;
  for (let e = 1; e < l.length; e++) {
    let t = l[e];
    n = Math.min(n, t.x);
    i = Math.min(i, t.y);
    r = Math.max(r, t.x + t.w);
    s = Math.max(s, t.y + t.h);
  }
  let o = r - n;
  let a = s - i;
  return {
    x: n,
    y: i,
    width: o,
    height: a
  };
}, e);
function z(e, t) {
  let l = useSceneGraphSelector();
  let n = getViewportInfo({
    subscribeToUpdates_expensive: t && e.length > 0
  });
  let r = O(e);
  return useMemo(() => l ? scaleRect(n, r) : {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  }, [r, l, n]);
}
function $() {
  getFeatureFlags().ai_assistant;
  getCurrentFileType();
  BE();
  let e = !1;
  let t = getFeatureFlags().ai_assistant_canvas_entrypoint || !1;
  return e && t;
}
let P = () => {
  let e = $();
  let t = function () {
    let e = useAtomWithSubscription(_$$J);
    let t = useAtomWithSubscription(T);
    let {
      isOpen
    } = S();
    return isOpen && t.length > 0 ? t : e.length > 0 ? e : [];
  }();
  let l = getViewportInfo({
    subscribeToUpdates_expensive: e
  });
  let n = z(t, e);
  let i = {
    ...n,
    x: n.x + l.x,
    y: n.y + l.y
  };
  return e && t.length !== 0 ? i : null;
};
function V() {
  let e = P();
  return e ? jsx(_$$lM, {
    targetRect: e,
    positionXY: e => [e.x - 16 - 2, e.y - 16 - 2],
    children: jsx('div', {
      className: 'x1n2onr6 x9h44rk xjbqb8w x1i3ajwb xmv1q7x x19wp0b7 x9tnh73 xr7n5gi xb3r6kr',
      style: {
        width: `${e.width + 32}px`,
        height: `${e.height + 32}px`
      },
      children: jsx('div', {
        className: 'x10l6tqk x1yhy09f xb5nubl x1pj540q xajor8m x1fuv6hb x1aerksh x7t6ubo xa4qsjk x1esw782 x1vjfegm x47corl'
      })
    })
  }) : null;
}
let G = {
  entrypointContainer: {
    'position': 'x1n2onr6',
    'height': 'xlup9mm',
    'width': 'x1kky2od',
    'borderRadius': 'x1sxf85j',
    'borderStartStartRadius': null,
    'borderStartEndRadius': null,
    'borderEndStartRadius': null,
    'borderEndEndRadius': null,
    'borderTopLeftRadius': null,
    'borderTopRightRadius': null,
    'borderBottomLeftRadius': null,
    'borderBottomRightRadius': null,
    'overflow': 'xb3r6kr',
    'overflowX': null,
    'overflowY': null,
    'display': 'x78zum5',
    'justifyContent': 'xl56j7k',
    'alignItems': 'x6s0dn4',
    '--x1fcwwnf': 'x15uqio4 x1ns5uhy',
    '$$css': !0
  },
  entrypointButton: {
    position: 'x1n2onr6',
    pointerEvents: 'x71s49j',
    width: 'xh8yej3',
    height: 'x5yr21d',
    display: 'x78zum5',
    justifyContent: 'xl56j7k',
    alignItems: 'x6s0dn4',
    $$css: !0
  },
  sparkleWrapper: {
    position: 'x10l6tqk',
    top: 'xwa60dl',
    left: 'x1nrll8i',
    insetInlineStart: null,
    insetInlineEnd: null,
    transform: 'x11lhmoz',
    zIndex: 'x1vjfegm',
    $$css: !0
  },
  buttonBackgroundCircle: (e, t) => [{
    width: 'xh8yej3',
    height: 'x5yr21d',
    pointerEvents: 'x67bb7w',
    backgroundColor: 'xr5ldyu',
    justifyContent: 'xl56j7k',
    alignItems: 'x6s0dn4',
    display: 'x4ppo68',
    animationName: 'x63ce6w',
    animationDuration: 'xw8ag78',
    animationTimingFunction: 'xvvy8qz',
    filter: 'x1wbribv',
    $$css: !0
  }, {
    '--backgroundColor': t ? 'var(--color-bg-brand-pressed)' : e ? 'var(--color-bg-brand)' : 'var(--color-icon-onbrand)',
    '--display': e || t ? 'flex' : 'none'
  }]
};
function U() {
  let e = $();
  let t = useAtomWithSubscription(T).length;
  let l = function () {
    let e = useAtomWithSubscription(T).length;
    let {
      isOpen
    } = S();
    let l = e === 1 && !isOpen;
    let n = getViewportZoom({
      subscribeToUpdates_expensive: l
    });
    return l && n < 0.2;
  }();
  return !!e && !(t < 1) && !l;
}
function q({
  isHovered: e
}) {
  return jsxs('svg', {
    width: '10',
    height: '10',
    viewBox: '0 0 10 10',
    fill: 'none',
    style: {
      zIndex: 1
    },
    children: [jsx('foreignObject', {
      x: '-10.0005',
      y: '-10',
      width: '30.0012',
      height: '30',
      children: jsx('div', {
        style: {
          backdropFilter: 'blur(5px)',
          clipPath: 'url(#bgblur_0_5943_26_clip_path)',
          height: '100%',
          width: '100%'
        }
      })
    }), jsx('path', {
      'data-figma-bg-blur-radius': '10',
      'fillRule': 'evenodd',
      'clipRule': 'evenodd',
      'd': 'M3.9943 0.690487C4.34215 -0.230185 5.667 -0.23014 6.0149 0.690487L6.04664 0.785699L6.75056 3.25307L9.21548 3.95861C10.2624 4.25822 10.2623 5.74136 9.21548 6.04106L6.74974 6.7466L6.04664 9.21397C5.74757 10.262 4.26245 10.262 3.96338 9.21397L3.25865 6.74823L0.788839 6.05164C-0.260213 5.75581 -0.264797 4.27059 0.782329 3.96837L3.25783 3.25388L3.96338 0.785699L3.9943 0.690487Z',
      'fill': e ? 'var(--color-icon-onbrand)' : 'var(--color-icon-brand)'
    }), jsx('defs', {
      children: jsx('clipPath', {
        id: 'bgblur_0_5943_26_clip_path',
        transform: 'translate(10.0005 10)',
        children: jsx('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M3.9943 0.690487C4.34215 -0.230185 5.667 -0.23014 6.0149 0.690487L6.04664 0.785699L6.75056 3.25307L9.21548 3.95861C10.2624 4.25822 10.2623 5.74136 9.21548 6.04106L6.74974 6.7466L6.04664 9.21397C5.74757 10.262 4.26245 10.262 3.96338 9.21397L3.25865 6.74823L0.788839 6.05164C-0.260213 5.75581 -0.264797 4.27059 0.782329 3.96837L3.25783 3.25388L3.96338 0.785699L3.9943 0.690487Z'
        })
      })
    })]
  });
}
function W({
  isHovered: e,
  setIsHovered: t
}) {
  let {
    isOpen
  } = S();
  let r = useCallback(() => {
    isOpen ? w() : atomStoreManager.set(C, !0);
  }, [isOpen]);
  return jsx(Fragment, {
    children: jsxs('button', {
      ...Ay.props(G.entrypointButton),
      'onMouseOver': () => {
        t(!0);
      },
      'onMouseLeave': () => {
        t(!1);
      },
      'onFocus': () => {
        t(!0);
      },
      'onBlur': () => {
        t(!1);
      },
      'onClick': r,
      'style': {
        cursor: 'pointer',
        background: 'transparent',
        border: 'none',
        padding: 0
      },
      'aria-label': getI18nString('ai_assistant.canvas.canvas_entrypoint_label'),
      'data-fullscreen-intercept': !0,
      'data-testid': 'ai-assistant-canvas-entrypoint-button',
      'children': [jsx('div', {
        ...Ay.props(G.sparkleWrapper),
        children: jsx(q, {
          isHovered: e || isOpen
        })
      }), jsx('div', {
        ...Ay.props(G.buttonBackgroundCircle(e, isOpen))
      })]
    })
  });
}
function K() {
  let [e, t] = useState(!1);
  return jsx('div', {
    ...Ay.props(G.entrypointContainer),
    children: jsx(W, {
      isHovered: e,
      setIsHovered: t
    })
  });
}
function X() {
  let e = U();
  let t = function (e) {
    let t = M(e);
    let l = getViewportX({
      subscribeToUpdates_expensive: !0
    });
    let n = getViewportY({
      subscribeToUpdates_expensive: !0
    });
    return useMemo(() => ({
      x: t.x + l,
      y: t.y + n
    }), [t, l, n]);
  }(e);
  return e ? jsx(_$$lM, {
    targetRect: {
      ...t,
      y: t.y + 8,
      width: 0,
      height: 0
    },
    offset: 0,
    children: jsx(_$$m, {
      'role': 'region',
      'aria-label': getI18nString('ai_assistant.canvas.canvas_entrypoint_label'),
      'children': jsx(K, {})
    })
  }) : null;
}
function Q() {
  let e = function () {
    let {
      prompt
    } = S();
    let t = useAtomWithSubscription(T);
    return useMemo(() => prompt.length !== 0 && t.length !== 0, [prompt, t]);
  }();
  let t = useAtomWithSubscription(_$$J);
  return e && t.length === 0;
}
var J = (e => (e.NONE_TO_SOME = 'NONE_TO_SOME', e.SOME_TO_NONE = 'SOME_TO_NONE', e.OVERLAPPING_SELECTIONS = 'OVERLAPPING_SELECTIONS', e.FULLY_NEW_SELECTION = 'FULLY_NEW_SELECTION', e))(J || {});
let em = () => 197 + (getFeatureFlags().ai_ga ? 26 : 0) - (getFeatureFlags().make_edits_debug ? 64 : 0);
let ef = /[\r\n\u2028\u2029]/;
function ey({
  recordingKey: e,
  value: t,
  onAction: l,
  onChange: r,
  onClose: s,
  wiggleCount: o,
  disabled: a
}) {
  let d = useRef(null);
  let u = useRef(null);
  let {
    isPositioned
  } = function (e, t) {
    let l = getViewportInfo({
      subscribeToUpdates_expensive: !0
    });
    let [n, r] = useState(!1);
    let s = M(!0);
    let o = useCallback(() => {
      if (!s || !e.current) return;
      let t = new _$$Z({
        top: 0,
        bottom: parsePxInt(u24),
        left: 0,
        right: 0
      });
      let n = {
        x: 24,
        y: -25
      };
      let i = {
        x: s.x + n.x,
        y: s.y + n.y
      };
      let o = t.computePositionWithinInsetBounds(e.current, i, {
        x: 0,
        y: 0,
        width: l.width,
        height: l.height
      }, s, n);
      let a = {
        x: (o.x ?? i.x) + l.x,
        y: (o.y ?? i.y) + l.y
      };
      e.current.style.left = `${a.x}px`;
      e.current.style.top = `${a.y}px`;
      r(!0);
    }, [l, r, s, e]);
    useEffect(() => {
      n && t.current?.focus();
    }, [n, t]);
    useEffect(() => {
      o();
    }, [o]);
    useEffect(() => {
      if (!e.current) return;
      let t = new ResizeObserver(() => {
        o();
      });
      t.observe(e.current);
      return () => {
        t.disconnect();
      };
    }, [o, e]);
    return {
      isPositioned: n
    };
  }(d, u);
  let [p, h] = useState(!1);
  let g = useCallback(({
    clonedTextArea: e,
    singleLineHeight: t,
    value: l,
    getCalculatedScrollHeight: n
  }) => {
    let i;
    let r = 'large';
    ef.test(l) || (e.style.width = `${em()}px`, i = Math.max(n(), t ?? 0), r = l.length === 0 || t === i ? 'small' : 'large');
    (void 0 === i || r === 'large') && (e.style.width = '284px', i = n());
    i = Math.min(i, 200);
    r === 'small' ? h(!1) : h(!0);
    return i;
  }, [h]);
  let f = useCallback(() => {
    u.current?.focus();
  }, [u]);
  return jsx(_$$Q, {
    dataFullscreenIntercept: !1,
    children: jsx(_$$p, {
      forceNoScroll: !0,
      children: jsx('div', {
        ref: d,
        style: {
          position: 'absolute',
          visibility: isPositioned ? 'visible' : 'hidden'
        },
        className: Dm,
        children: jsx(_$$c, {
          wiggleCount: o,
          onWiggle: f,
          children: jsxs('div', {
            'className': 'xdzyupr x137qmg1 xbxdop8 x4zv5z4',
            'data-testid': 'ai-assistant-canvas-prompt-box',
            'children': [jsxs('div', {
              className: 'xu97haq x78zum5 x1q0g3np x167g77z xe8ttls x6s0dn4',
              children: [jsx(_$$v, {
                bypassModifiers: !0,
                calculateAdjustedHeightOnResize: g,
                disableBorderStyles: !1,
                focusOnMount: !1,
                innerRef: u,
                maxHeight: 200,
                minHeight: 24,
                onChange: e => {
                  r(e.currentTarget.value);
                },
                onEscape: s,
                placeholder: getI18nString('ai_assistant.canvas_prompt_box.placeholder'),
                preventSubmitOnBlur: !0,
                recordingKey: e,
                rows: 1,
                submit: l,
                value: t,
                className: 'x1tsovho x1uhom3u x1g2ur6q x1qvfvcx'
              }), !p && jsx(e_, {
                onAction: l,
                disabled: a,
                recordingKey: e
              })]
            }), p && jsx('div', {
              className: 'x78zum5 x1q0g3np x13a6bvl x167g77z xe8ttls x6s0dn4 xv42yna',
              children: jsx(e_, {
                onAction: l,
                disabled: a,
                recordingKey: e
              })
            })]
          })
        })
      })
    })
  });
}
function e_({
  onAction: e,
  disabled: t,
  recordingKey: l
}) {
  let i = getFeatureFlags().make_edits_debug;
  return jsxs(Fragment, {
    children: [jsx(_$$y, {
      helpUrlVariant: JT.MAKE_EDITS
    }), i && jsx(Nv, {}), jsx(CommentsSubmitButton, {
      disabled: t,
      onClick: e,
      recordingKey: generateRecordingKey(l, 'generate')
    })]
  });
}
function eb() {
  let {
    isOpen,
    prompt
  } = S();
  let l = Q();
  let r = useAtomWithSubscription(j);
  let s = function () {
    let {
      showChat
    } = _$$U();
    let {
      prompt: _prompt
    } = S();
    let l = useAtomWithSubscription(T);
    let n = Q();
    return useCallback(() => {
      if (!n) {
        v();
        return;
      }
      atomStoreManager.set(_$$J, l);
      showChat();
      _$$w({
        plainText: _prompt,
        selectedNodeIds: l
      });
      w();
    }, [showChat, n, _prompt, l]);
  }();
  return isOpen ? jsx(ey, {
    disabled: !l,
    onAction: s,
    onChange: R,
    onClose: w,
    wiggleCount: r,
    recordingKey: 'ai_assistant_prompt_box_view',
    value: prompt,
    duplicateAndRun: !1,
    setDuplicateAndRun: noop
  }) : null;
}
function ej() {
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: 'AiAssistantCanvasView',
    fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
    sentryTags: {
      area: ServiceCategories.AI_ASSISTANT
    },
    children: jsx(_$$T.Provider, {
      value: {
        recordingKey: 'aiAssistantCanvasView'
      },
      children: jsx(Suspense, {
        fallback: null,
        children: jsx(ev, {})
      })
    })
  });
}
function ev() {
  let e = U();
  !function () {
    let e = useRef(0);
    let t = function () {
      let {
        prompt
      } = S();
      return useMemo(() => prompt === '', [prompt]);
    }();
    let l = useCallback(() => {
      e.current += 1;
      v();
    }, [e]);
    let n = useCallback(() => {
      w();
      e.current = 0;
    }, [e]);
    !function (e) {
      let t = useAtomWithSubscription(L);
      let l = useLatestRef(t);
      useEffect(() => {
        if (!l) return;
        let n = l || [];
        n.length === t.length && n.every(e => t.includes(e)) || (n.length === 0 && t.length !== 0 ? e({
          type: 'NONE_TO_SOME',
          prev: [],
          new: t
        }) : n.length > 0 && t.length === 0 ? e({
          type: 'SOME_TO_NONE',
          prev: n,
          new: []
        }) : n.some(e => t.includes(e)) ? e({
          type: 'OVERLAPPING_SELECTIONS',
          prev: n,
          new: t
        }) : e({
          type: 'FULLY_NEW_SELECTION',
          prev: n,
          new: t
        }));
      }, [t, l, e]);
    }(useCallback(i => {
      if (t || e.current > 0) {
        n();
        return;
      }
      switch (i.type) {
        case 'NONE_TO_SOME':
          e.current = 0;
          break;
        case 'SOME_TO_NONE':
          if (t) {
            n();
            break;
          }
          atomStoreManager.set(E, i.prev);
          l();
          break;
        case 'OVERLAPPING_SELECTIONS':
          break;
        case 'FULLY_NEW_SELECTION':
          atomStoreManager.set(E, i.prev);
          l();
          break;
        default:
          throwTypeError(i.type);
      }
    }, [t, l, n]));
  }();
  let {
    isOpen
  } = S();
  return e ? jsxs(Fragment, {
    children: [jsx(V, {}), jsx(X, {}), isOpen && jsx(eb, {})]
  }) : null;
}
let eG = buildUploadUrl('bfb358109ac5994e69048d8390d3a0c334253aa8');
function eU({
  changedNodeId: e,
  nodeHeight: t,
  complete: l
}) {
  useSingleEffect(() => {
    SceneGraphHelpers?.replaceSelection([e], !0);
  });
  return jsxs(NJ, {
    arrowPosition: F_.LEFT_TITLE,
    backgroundColor: 'var(--color-bg)',
    className: R3,
    closeButtonClassName: _$$b,
    dismissModal: l,
    hideIfArrowPositionDoesNotMatch: !0,
    hideIfTargetLost: !0,
    isCanvasNode: !0,
    leftOffset: 12,
    noAnimation: !0,
    shouldNotWrapInParagraphTag: !0,
    targetKey: e,
    topOffset: t ? -t / 2 - 15 : 0,
    width: 240,
    children: [jsx('div', {
      className: Rg,
      children: getI18nString('dev_handoff.rfd_signals_upsell.title')
    }), jsxs('div', {
      className: O6,
      children: [jsx('div', {
        className: _$$j2,
        children: jsx(GV, {
          src: eG,
          width: 240
        })
      }), jsx('div', {
        className: zu,
        children: getI18nString('dev_handoff.rfd_signals_upsell.description')
      })]
    }), jsx('div', {
      className: JP,
      children: jsx(setupThemeContext, {
        brand: 'dev-handoff',
        children: jsx($z, {
          trackingProperties: {
            trackingDescriptor: UpgradeAction.MARK_READY_FOR_DEV
          },
          variant: 'primary',
          onClick() {
            e && (l(), z4.setNodesReady(!0, [e], 'dev-node-change-upsell', null));
          },
          children: getI18nString('dev_handoff.rfd_signals_upsell.mark_ready_for_dev')
        })
      })
    })]
  });
}
function eq(e) {
  analyticsEventManager.trackDefinedEvent('activation.rfd_signal_upsell.disqualification_reason', {
    reason: e,
    upsellSubject: 'frame'
  });
}
function eW() {
  let [e, t] = useState(null);
  let [l, r] = useState(null);
  let s = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  let o = Xr(hj);
  let a = Xr(d1);
  let d = useAtomWithSubscription(Sp);
  let u = Xr(Sp);
  let c = useRef(null);
  let x = _$$Z2('dev-handoff-rfd-signals-frame-upsell');
  let [p, h] = useState(!1);
  let f = useCallback(() => {
    c.current && r(c.current.absoluteBounds.height * s.zoomScale);
  }, [s.zoomScale]);
  useEffect(() => {
    if (!e) return;
    let t = `dev-node-change-upsell-${e}`;
    let l = EE(t, [e], e => {
      c.current = e.position;
      f();
    });
    c.current = l.currentNodePosition[e]?.position || null;
    f();
    return () => {
      _$$lB(t);
    };
  }, [e, f]);
  let y = useRfdSignalsUpsellExperiment();
  let {
    show,
    complete,
    uniqueId,
    isShowing
  } = _$$e2({
    overlay: kBA,
    priority: _$$N.HIGH_PRIORITY_MODAL,
    experiment: {
      check: y,
      predicate: e => e,
      postCheck: () => !0
    }
  });
  return (useEffect(() => {
    a({
      fn: complete
    });
  }, [complete, a]), _$$E(uniqueId, ['frame_node_name_changed_with_rfd_indicator'], e => {
    if (!e.properties.nodeId) {
      eq('no_node_id');
      return;
    }
    let l = UN().get(e.properties.nodeId);
    if (!l) {
      eq('node_not_found');
      return;
    }
    if (l.childCount === 0) {
      eq('no_children');
      return;
    }
    if (!l.canHaveStatus) {
      eq('not_eligible_for_status');
      return;
    }
    if (d) {
      eq('already_seen_upsell_this_session');
      return;
    }
    t(e.properties.nodeId);
    o(e.properties.nodeId);
    r(l.absoluteBoundingBox.h);
    show({
      onShow: async () => {
        h(!0);
        await x(await computeFullscreenViewportForNode({
          nodeId: e.properties.nodeId,
          alwaysPan: !0
        }), {
          alwaysNavToSimilarViewport: !0
        });
        h(!1);
        u(!0);
      }
    });
  }), e && l && isShowing && !p) ? jsx(eU, {
    changedNodeId: e,
    nodeHeight: l,
    complete
  }) : null;
}
let e4 = atom(!1);
function e7() {
  let e = useAtomWithSubscription(LZ);
  let t = useCanAccessFullDevMode();
  let l = useCanAccessDevModeEntryPoint();
  let s = _$$J3();
  let o = _$$U2('upsell');
  let a = Xr(e4);
  let {
    show,
    complete,
    exportId,
    activeId,
    showing
  } = function () {
    let e = useAtomWithSubscription(NT);
    let t = useDeveloperContextualUpsellsExperiment();
    let {
      show: _show,
      complete: _complete,
      isShowing,
      uniqueId
    } = _$$e2({
      overlay: Nh9,
      priority: _$$N.DEFAULT_MODAL,
      experiment: {
        check: t,
        predicate: e => e,
        postCheck: () => !0
      }
    }, [e]);
    let {
      show: _show2,
      complete: _complete2,
      isShowing: _isShowing,
      uniqueId: _uniqueId
    } = _$$e2({
      overlay: L6E,
      priority: _$$N.DEFAULT_MODAL,
      experiment: {
        check: t,
        predicate: e => e,
        postCheck: () => !0
      }
    }, [e]);
    return {
      show: e => e === 'export' ? _show2 : _show,
      complete: () => isShowing ? _complete() : _complete2(),
      measureId: uniqueId,
      exportId: _uniqueId,
      activeId: _isShowing ? uniqueId : _uniqueId,
      showing: _isShowing ? 'export' : isShowing ? 'measure' : void 0
    };
  }();
  !function (e, t) {
    let l = useRef(t);
    useEffect(() => {
      l.current = t;
    }, [t]);
    let n = d4(e => e.usedKeyboardShortcuts['measure-to-selection'] || 0);
    let s = useRef(n);
    useEffect(() => {
      let e = t => {
        t.key && (window.removeEventListener('keyup', e), l.current('measure'));
      };
      n > s.current && window.addEventListener('keyup', e);
    }, [n]);
    _$$E(e, 'copy_as_completed', e => {
      t('export');
    });
    _$$E(e, 'export_completed', e => {
      t('export');
    });
  }(exportId, n => {
    show(n)({
      canShow: n => !t && l && s && e && normalizeJobRole(n) === 'developer',
      onShow: () => {
        _$$o();
      }
    });
  });
  _$$E(activeId, 'Enter Inspect Mode', () => {
    showing && complete();
  });
  let m = showing === 'export' ? renderI18nText('upsell.dev_mode.contextual_overlay.export_title') : renderI18nText('upsell.dev_mode.contextual_overlay.measure_title');
  let f = showing === 'export' ? renderI18nText('upsell.dev_mode.contextual_overlay.export_description') : renderI18nText('upsell.dev_mode.contextual_overlay.measure_description');
  return jsx(_$$X, {
    description: f,
    forceEditorTheme: 'dev-handoff',
    isShowing: !!showing,
    media: jsx(_$$y2, {
      src: showing === 'export' ? buildUploadUrl('2ec45ec3c5b501ef6e755fde6a2edfb39d2218cb') : buildUploadUrl('dc592aac8a3238672f1f3eb8711f656496538b15'),
      alt: '',
      aspectRatio: 480 / 270
    }),
    onClose: complete,
    position: Ui3PositionType.BOTTOM_RIGHT,
    primaryCta: {
      label: renderI18nText('upsell.dev_mode.contextual_overlay.cta'),
      onClick: () => {
        o('handoff');
        a(!0);
        complete();
      },
      ctaTrackingDescriptor: UpgradeAction.OPEN_DEV_MODE,
      type: 'button'
    },
    testId: 'dev-mode-contextual-upsell-tooltip',
    title: m,
    trackingContextName: 'Dev Mode Contextual Upsell Tooltip',
    width: 240
  });
}
function th() {
  let e = w_();
  let t = useIsProgressBarHiddenOrLocked();
  let [l, r] = useState(null);
  useEffect(() => {
    if (!t) {
      let e = function () {
        let e;
        let t = UN();
        let l = t => {
          if (t) {
            for (let n of t.childrenNodes) (n.isTopLevelFrame() || n.type === 'CANVAS') && (n.hasReadyStatus ? e ? e.getStatusInfo().lastUpdateUnixTimestamp < n.getStatusInfo().lastUpdateUnixTimestamp && (e = n) : e = n : (n.type === 'SECTION' || n.type === 'CANVAS') && l(n));
          }
        };
        l(t?.getRoot());
        return e?.getStatusInfo();
      }();
      e && r(e);
    }
  }, [t]);
  let s = wW(l && 'userId' in l ? l.userId : null);
  let o = !!l && dayjs.unix(l.lastUpdateUnixTimestamp).isAfter(dayjs().subtract(60, 'day'));
  let a = _$$U2('upsell');
  let d = useAtomWithSubscription(LZ);
  let u = useCanAccessFullDevMode();
  let c = useCanAccessDevModeEntryPoint();
  let p = useAtomWithSubscription(NT);
  let h = _$$J3();
  let {
    show,
    complete,
    isShowing,
    uniqueId
  } = _$$e2({
    overlay: koo,
    priority: _$$N.OVERRIDING_MODAL
  }, [p]);
  useEffect(() => {
    show({
      canShow: l => h && d && !u && !e.loading && !e.hasPendingRequest && o && c && !t && normalizeJobRole(l) === 'developer',
      onShow: () => {
        _$$o();
      }
    });
  }, [show, u, c, d, t, p, h, e, o]);
  _$$E(uniqueId, 'Enter Inspect Mode', () => {
    isShowing && complete();
  });
  let {
    primaryButtonProps,
    secondaryButtonProps
  } = BC({
    entryPoint: DevModeUI.Upsell,
    dismissModal: complete,
    onRequestAccess: () => {
      a('handoff');
    }
  });
  let v = jsxs(Fragment, {
    children: [jsx('span', {
      className: XQ,
      children: jsx(_$$O2, {})
    }), jsx('span', {
      className: cssBuilderInstance.textBodyMediumStrong.$,
      children: renderI18nText('dev_handoff.status.mark_status_sentence_part.ready_for_dev')
    })]
  });
  let {
    imgSrc,
    modalContent
  } = _$$L();
  let E = _$$W();
  let S = useModalManager({
    open: !0,
    onClose: noop,
    preventUserClose: !0,
    recordingKey: 'dev-mode-paywall-modal'
  });
  return jsx(_$$M, {
    testId: 'rfd-upsell-upsell',
    isShowing,
    children: jsxs(setupThemeContext, {
      brand: 'dev-handoff',
      children: [jsx(OM, {}), jsx(TrackingProvider, {
        name: 'RFD Upsell Modal',
        properties: {
          ...E,
          primaryCtaTrackingDescriptor: primaryButtonProps?.trackingDescriptor,
          secondaryCtaTrackingDescriptor: secondaryButtonProps?.trackingDescriptor
        },
        enabled: E?.gracePeriod !== void 0,
        children: jsx(ModalRootComponent, {
          width: 392,
          manager: S,
          children: jsxs(DialogCustomContents, {
            children: [jsx('div', {
              className: XV,
              children: jsx('div', {
                className: 'xh8yej3 xysyzu8 x1xk1jr8 x1sdyfia',
                children: s.loading ? '' : renderI18nText('dev_handoff.upsell.user_marked_a design', {
                  userName: jsx('span', {
                    className: 'xb3r6kr xlyipyv xuxw1ft',
                    children: s.user?.name || s.user?.handle
                  }),
                  status: v
                })
              })
            }), jsx('div', {
              className: cssBuilderInstance.py8.px16.$,
              children: jsx(_$$E2, {
                imgSrc,
                content: modalContent,
                modalType: 'RFD Upsell Modal',
                primaryButtonProps: {
                  ...primaryButtonProps,
                  type: 'request_access'
                },
                secondaryButtonProps: secondaryButtonProps ? {
                  ...secondaryButtonProps,
                  type: 'not_now'
                } : void 0
              })
            })]
          })
        })
      })]
    })
  });
}
function tk() {
  let e = useHasReadyNodesWithParentOrg();
  let t = useCurrentFileKey();
  let l = _$$U2('upsell');
  let i = useSubscription(FileCanAccessFullDevMode, {
    key: t || ''
  }, {
    enabled: !!t
  });
  let {
    show,
    isShowing,
    complete,
    uniqueId
  } = _$$e2({
    overlay: wRw,
    priority: _$$N.OVERRIDING_MODAL - 1
  }, [i]);
  _$$E(uniqueId, 'ui3_finished_entering_design_mode', () => {
    QL('rfd-notif') && show({
      canShow: e => !e.file?.hasPermission,
      onShow: () => {
        _$$o();
      }
    });
  });
  let d = e ? {
    targetKey: _$$o2,
    arrowPosition: _$$F_.LEFT_TITLE
  } : {
    targetKey: _$$oR,
    arrowPosition: _$$F_.BOTTOM
  };
  return jsx(_$$rq, {
    ...d,
    description: renderI18nText('upsell.view_only_developer_notifications.tooltip_description'),
    forceEditorTheme: 'dev-handoff',
    isShowing,
    media: jsx(_$$y2, {
      src: buildUploadUrl('dc592aac8a3238672f1f3eb8711f656496538b15'),
      alt: '',
      aspectRatio: 480 / 270
    }),
    onClose: complete,
    testId: 'viewer-dev-mode-status-changed-tooltip',
    primaryCta: {
      ctaTrackingDescriptor: UpgradeAction.TRY_DEV_MODE,
      label: renderI18nText('upsell.view_only_developer_notifications.tooltip_cta'),
      onClick: () => {
        complete();
        l('handoff');
      },
      type: 'button'
    },
    title: renderI18nText('upsell.view_only_developer_notifications.tooltip_title'),
    trackingContextName: 'viewer_dev_mode_status_changed_tooltip'
  });
}
function tq({
  onClick: e,
  complete: t
}) {
  return jsx(setupThemeContext, {
    brand: 'dev-handoff',
    children: jsxs('div', {
      'data-testid': 'dev-mode-demo-file-entrypoint-popup',
      'className': 'x6sy6il x1dgp85l xqyf9gi x1mxnbhz x1xtplfa x10l6tqk xrv6xtj x9f619 x1p3pnes x1tk3asg x78zum5 xdt5ytf x1dipnxa xbj06nx xl56j7k x1i71x30',
      'children': [jsx('div', {
        className: 'x10l6tqk x1psp13h xbyvkye',
        children: jsx(Jn, {
          emphasized: !0,
          onClick: t
        })
      }), jsxs('div', {
        children: [jsx('div', {
          className: 'x13saxwh xg4jxnz x1h94l6n x1uvdjgy x39l7i4 x1ihwiht',
          children: renderI18nText('dev_mode_playground_file.still_curious_about_dev_mode')
        }), jsx('div', {
          children: renderI18nText('dev_mode_demo_file.check_out_our_interactive_test')
        })]
      }), jsx(_$$e, {
        trackingProperties: {
          trackingDescriptor: UpgradeAction.DEMO_FILE_THUMBNAIL
        },
        onClick: e,
        className: 'x11g6tue xzjbwwf x3w9dv2',
        children: jsx(WAFImage, {
          className: 'xb3r6kr',
          alt: 'A graphic showing the demo file thumbnail',
          src: buildUploadUrl('eab479b46c1a94910464200211143d64fe917ae1')
        })
      }), jsx('div', {
        children: jsx(_$$e, {
          trackingProperties: {
            trackingDescriptor: UpgradeAction.CHECK_IT_OUT
          },
          onClick: e,
          className: 'x1iakgj3 x19y5rnk x78zum5 xx99whi xl56j7k x6s0dn4 x4wtjwi x11g6tue x1qxcl5b x1tk3asg',
          children: renderI18nText('dev_mode_playground_file.check_it_out')
        })
      })]
    })
  });
}
function tW() {
  let e = useTeamPlanPublicInfo().unwrapOr(null);
  let t = e?.tier === FPlanNameType.STARTER;
  let l = useCanAccessFullDevMode();
  let r = useCanAccessDevModeEntryPoint();
  let s = _$$w2();
  let o = useAtomWithSubscription(YU);
  let a = w_();
  let d = getInitialOptions().dev_mode_demo_file_key;
  let {
    isShowing,
    show,
    complete
  } = _$$e2({
    overlay: E5y,
    priority: _$$N.DEFAULT_MODAL
  });
  return (useEffect(() => {
    show({
      canShow: () => !!(!a.loading && !a.hasPendingRequest && r && !l && o && s === 'developer' && !t && d)
    });
  }, [l, r, d, a, isShowing, s, o, t, show]), isShowing) ? jsx(_$$M, {
    isShowing,
    children: jsx(TrackingProvider, {
      name: 'DevModeDemoFileEntryPoint',
      children: jsx(tq, {
        onClick: () => {
          d && customHistory.redirect(buildFileUrl({
            file: {
              key: d
            },
            isDevHandoff: !0
          }), '_blank');
          complete();
        },
        complete
      })
    })
  }) : null;
}
let t1 = {
  title: {
    ...textDisplayConfig.textHeadingSmall,
    $$css: !0
  },
  assetContainer: {
    'cursor': 'x1ypdohk',
    'height': 'x18dl8mb',
    'display': 'x78zum5',
    'justifyContent': 'xl56j7k',
    'alignItems': 'x6s0dn4',
    'borderRadius': 'xm3q4nm',
    'borderStartStartRadius': null,
    'borderStartEndRadius': null,
    'borderEndStartRadius': null,
    'borderEndEndRadius': null,
    'borderTopLeftRadius': null,
    'borderTopRightRadius': null,
    'borderBottomLeftRadius': null,
    'borderBottomRightRadius': null,
    'overflow': 'xb3r6kr',
    'overflowX': null,
    'overflowY': null,
    'transition': 'x168yufr',
    'transitionBehavior': null,
    'transitionDelay': null,
    'transitionDuration': null,
    'transitionProperty': null,
    'transitionTimingFunction': null,
    'boxShadow': 'xgk9eko',
    ':hover_transform': 'xsks9tx',
    '$$css': !0
  },
  assetBackgroundLight: {
    backgroundColor: 'x1ailfhc',
    $$css: !0
  },
  assetBackgroundDark: {
    backgroundColor: 'x1oa4r',
    $$css: !0
  },
  button: {
    backgroundColor: 'xi0y1te',
    color: 'xvzdmf2',
    borderRadius: 'x19y5rnk',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    padding: 'xx99whi',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    minHeight: 'x4wtjwi',
    width: 'xeq5yr9',
    alignSelf: 'xpvyfi4',
    ...textDisplayConfig.textBodyMedium,
    $$css: !0
  }
};
function t2(e, t) {
  let l = Date.now();
  return e.getTime() <= l - 864e5 * t;
}
let t5 = mapAndAggregateResources([userFlagAtomFamily('seen_figmake_promo_overlay'), userFlagAtomFamily('seen_figmake_file_creation_tooltip')], ([e, t]) => !!(e && t2(new Date(e.updatedAt), 14)) && (!t || t2(new Date(t.updatedAt), 3)));
let t3 = userFlagExistsAtomFamily('has_created_figma_make_file');
function t4() {
  let e = useAtomWithSubscription(t5);
  let t = useAtomWithSubscription(t3);
  let l = useTeamPlanPublicInfo();
  let r = useTeamPlanUser();
  let s = r.unwrapOr(null)?.draftsFolderId ?? void 0;
  let o = useProjectFileCreationPermissions(s);
  let d = getVisibleTheme() === 'dark';
  let u = d ? buildUploadUrl('1a369818117cc7e77826ee246da5938968f29e43') : buildUploadUrl('c427705996f20b17615206adc93b3171f6646529');
  let c = useFigmaMakeDesignEditorPopoutUpsellExperiment();
  let {
    isShowing,
    show,
    complete
  } = _$$e2({
    overlay: qiY,
    priority: _$$N.DEFAULT_MODAL,
    experiment: {
      check: c,
      predicate: e => e,
      postCheck: () => !0
    }
  }, [e, t, l, o]);
  useEffect(() => {
    s && show({
      canShow: (e, t, l, n) => {
        let i = l.tier === FPlanNameType.STARTER && !getFeatureFlags().bake_starter_limit;
        return e && !t && !i && n !== null && canCreateFileType(n, FFileType.FIGMAKE);
      }
    });
  }, [show, s]);
  let y = _$$$({
    folderId: s,
    isDraftsFolder: !0,
    editorType: FFileType.FIGMAKE,
    forceOpenNewTab: !0,
    newFileFrom: FileBrowserLocation.FIGMAKE_POPOUT_UPSELL_IN_DESIGN_EDITOR,
    contextClicked: 'figmake_popout_upsell_in_design_editor_created'
  });
  return jsx(_$$M, {
    isShowing,
    children: jsx(TrackingProvider, {
      name: 'FigmaMakeUpsellInDesignEditor',
      children: jsx(setupThemeContext, {
        brand: 'seascape',
        children: jsxs('div', {
          'data-testid': 'figma-make-upsell-in-design-editor-overlay',
          'className': 'x10l6tqk x1g84rlc x1u31bsw xqyf9gi x9f619 xrv6xtj xgk9eko x1mxnbhz xu5wzci x1tk3asg xho2vqm xdz8niu x1bw29jc xshklg3 xskzprw x78zum5 xdt5ytf xl56j7k x1i71x30 x1dipnxa x1vamu9a',
          'children': [jsx('div', {
            className: 'x10l6tqk x1psp13h xbyvkye',
            children: jsx(Jn, {
              onClick: complete,
              trackingProperties: {
                action: 'close'
              },
              emphasized: !0,
              dataTestId: 'figma-make-upsell-in-design-editor-overlay-close'
            })
          }), jsxs('div', {
            className: 'x78zum5 xdt5ytf xg2d0mh',
            children: [jsx('div', {
              ...xk(t1.title),
              children: renderI18nText('upsell.figma_make_upsell_in_design_editor.title')
            }), jsx('div', {
              children: renderI18nText('upsell.figma_make_upsell_in_design_editor.description')
            })]
          }), jsx(_$$e, {
            'data-testid': 'figma-make-upsell-in-design-editor-overlay-asset',
            'trackingProperties': {
              trackingDescriptor: UpgradeAction.FIGMA_MAKE_UPSELL_ASSET
            },
            'onClick': y,
            ...xk(t1.assetContainer, d ? t1.assetBackgroundDark : t1.assetBackgroundLight),
            'children': jsx('video', {
              'className': 'x5yr21d xl1xv1r',
              'src': u,
              'aria-label': getI18nString('upsell.figma_make_upsell_in_design_editor.image_alt'),
              'autoPlay': !0,
              'loop': !0,
              'muted': !0
            })
          }), jsx(setupThemeContext, {
            brand: 'seascape',
            mode: 'dark',
            children: jsx(_$$e, {
              'data-testid': 'figma-make-upsell-in-design-editor-overlay-cta',
              'trackingProperties': {
                trackingDescriptor: UpgradeAction.TRY_IT_NOW
              },
              'onClick': y,
              ...xk(t1.button),
              'children': renderI18nText('upsell.figma_make_upsell_in_design_editor.button_title')
            })
          })]
        })
      })
    })
  });
}
let ls = lr;
let lb = 'starting_points_templates_modal--templateOption--qYXkm';
let lj = 'starting_points_templates_modal--templateOptionTitle--DmVPR';
let lv = 'starting_points_templates_modal--verticalTemplateImage--kAzQz';
var lC = (e => (e.DESKTOP = 'desktop', e.MOBILE = 'mobile', e.WEBSITE = 'website', e))(lC || {});
let lk = {
  x: 0,
  y: 0
};
let lE = {
  website: {
    x: 0,
    y: 1600
  },
  mobile: {
    x: 0,
    y: 300
  },
  desktop: {
    x: 0,
    y: 300
  }
};
let lS = {
  website: 0.1,
  mobile: 0.225,
  desktop: 0.1
};
function lw({
  onClose: e
}) {
  let t = wA();
  let l = useRef(null);
  let [s, d] = useState(!1);
  let [u, c] = useState(!1);
  let [p, h] = useState(!1);
  let [m, f] = useState(!1);
  let [y, _] = useState(window.innerWidth);
  let [b, j] = useState({
    website: '',
    mobile: '',
    desktop: ''
  });
  let v = useFullscreenReady();
  let C = useCurrentFileKey();
  let k = d4(e => e.fileVersion);
  let E = d4(e => e.mirror.sceneGraph);
  let S = v && getCurrentPage(E);
  let w = !!S && S.childCount === 0;
  let [R] = setupResourceAtomHandler(Dz({}));
  let {
    inProductHelpViewType
  } = A5();
  let T = getObservableValue(AppStateTsApi?.uiState().inProductHelpSidePanelWidth, 0);
  let I = inProductHelpViewType === 'side_panel' ? T : 0;
  let {
    insertTemplate
  } = Fz();
  let A = _$$g2();
  let M = Xr(Yq);
  let O = Xr(bj);
  let [z, B] = useState(!1);
  let F = GQ();
  let $ = _$$P();
  useSingleEffect(() => {
    let e = () => {
      _(window.innerWidth);
    };
    window.addEventListener('resize', e);
    return () => {
      window.removeEventListener('resize', e);
    };
  });
  useEffect(() => {
    f(F + 50 > y / 2 - 257 || y - $ - I - 50 < y / 2 + 257);
    h(F + 50 > y / 2 - 365 || y - $ - I - 50 < y / 2 + 365);
  }, [I, F, $, y]);
  let P = useCallback(() => {
    if (R.status !== 'loaded' || !R.data) return;
    let e = [];
    for (let t of Object.values(lC)) {
      let l = R.data[t]?.files;
      if (!l) return;
      let n = {
        type: _$$n.HubFile,
        template: l
      };
      e.push(n);
    }
    Promise.all(e.map(e => atomStoreManager.get(Re({
      fileKey: C,
      fileVersion: k,
      template: e
    })))).then(() => {
      B(!0);
    }).catch(e => {
      console.error('Failed to load template buffers', e);
      B(!0);
    });
  }, [C, k, R]);
  if (useEffect(() => {
    if (R.status === 'loaded') {
      for (let e of Object.values(lC)) {
        let t = R.data[e]?.preview_img_id;
        t && j(l => ({
          ...l,
          [e]: t
        }));
      }
    }
  }, [R]), useEffect(() => {
    R.status !== 'loaded' || z || P();
  }, [R, z, P]), useEffect(() => {
    v && S && !w && !u && e();
  }, [v, S, w, u, e]), !getFeatureFlags().starting_points_modal) {
    return null;
  }
  let V = async l => {
    if (R.status !== 'loaded') return;
    d(!0);
    let n = R.data[l]?.files;
    n && (l !== 'basics' ? await Zg({
      insert: () => O({
        selectTemplateAfterCommit: !1,
        moveViewportAfterCommit: !1,
        priority: 'user-visible',
        editScopeType: SourceType.USER
      }),
      template: {
        template: n,
        type: _$$n.HubFile
      },
      fileKey: C,
      dispatch: t,
      triggeredFrom: 'starting-points',
      userTriggered: !1
    }) : await insertTemplate({
      template: {
        template: n,
        type: _$$n.HubFile
      },
      userTriggered: !1,
      editScopeType: SourceType.ONBOARDING,
      triggeredFrom: 'starting-points',
      templateInsertionDirection: CustomPosition.RIGHT
    }), l === 'basics' ? handleAtomEvent({
      id: 'starting_points_basics_template_inserted'
    }) : handleAtomEvent({
      id: 'starting_points_template_inserted'
    }), e(), d(!1));
  };
  let D = jsx(TrackedButton, {
    onClick: () => V('basics'),
    trackingProperties: {
      trackingDescriptor: UpgradeAction.LEARN_THE_BASICS
    },
    children: renderI18nText('starting_points.learn_the_basics')
  });
  let H = e => {
    if (trackEventAnalytics('Starting Points Template Option Hover', {
      template: e
    }), !R.data) {
      return;
    }
    let l = R.data[e]?.files;
    if (!l) return;
    let n = {
      type: _$$n.HubFile,
      template: l
    };
    let i = lS[e];
    window.innerWidth > 1700 && (i *= 1.5);
    Zg({
      insert: () => A(n, {
        moveViewportAfterPreview: !0,
        priority: 'user-visible',
        previewManager: {
          nodeType: NodeType.CANVAS
        },
        position: lk,
        viewportOptions: {
          position: lE[e],
          scale: i,
          duration: 0
        }
      }),
      template: n,
      fileKey: C,
      dispatch: t,
      triggeredFrom: 'starting-points',
      userTriggered: !1,
      isPreview: !0
    });
  };
  return jsx(TrackingProvider, {
    name: 'Starting Points Modal',
    children: jsx('div', {
      className: 'starting_points_templates_modal--startingPointsTemplatesModalPositioner--R8g3u',
      style: {
        marginRight: `${I}px`
      },
      children: jsx(_$$x, {
        isLoading: s,
        className: 'starting_points_templates_modal--loadingSpinner--UOrjg',
        children: () => jsxs('div', {
          className: ls()({
            'starting_points_templates_modal--startingPointsTemplatesModal--dUQte': !0,
            'starting_points_templates_modal--isHidden--jVN1L': m,
            'starting_points_templates_modal--isCondensedView--3tVz6': p
          }),
          onMouseEnter: () => c(!0),
          onMouseLeave: () => c(!1),
          ref: l,
          children: [jsxs('div', {
            className: 'starting_points_templates_modal--modalInstructions--ZtdTL',
            children: [jsx('div', {
              className: 'starting_points_templates_modal--modalTitle--HT3eZ',
              children: getI18nString('starting_points.what_do_you_want_to_make_today')
            }), jsx('div', {
              className: 'starting_points_templates_modal--modalLearnMore--g-GWo',
              children: renderI18nText('starting_points.or_learn_the_basics', {
                learnTheBasicsLink: D
              })
            })]
          }), jsxs('div', {
            className: 'starting_points_templates_modal--optionContainer--mYEsG',
            children: [jsxs(TrackedButton, {
              className: lb,
              onClick: () => V('website'),
              onMouseEnter: () => H('website'),
              onMouseLeave: M,
              trackingProperties: {
                trackingDescriptor: UpgradeAction.WEBSITE_TEMPLATES
              },
              children: [jsx('div', {
                className: lj,
                children: getI18nString('starting_points.website')
              }), jsx(WAFImage, {
                className: lv,
                src: buildUploadUrl(b.website),
                alt: 'Website template'
              })]
            }), jsxs(TrackedButton, {
              className: lb,
              onClick: () => V('mobile'),
              onMouseEnter: () => H('mobile'),
              onMouseLeave: M,
              trackingProperties: {
                trackingDescriptor: UpgradeAction.MOBILE_APP_TEMPLATES
              },
              children: [jsx('div', {
                className: lj,
                children: getI18nString('starting_points.mobile_app')
              }), jsx(WAFImage, {
                className: lv,
                src: buildUploadUrl(b.mobile),
                alt: 'Mobile app template'
              })]
            }), jsxs(TrackedButton, {
              className: lb,
              onClick: () => V('desktop'),
              onMouseEnter: () => H('desktop'),
              onMouseLeave: M,
              trackingProperties: {
                trackingDescriptor: UpgradeAction.DESKTOP_APP_TEMPLATES
              },
              children: [jsx('div', {
                className: lj,
                children: getI18nString('starting_points.desktop_app')
              }), jsx(WAFImage, {
                className: 'starting_points_templates_modal--desktopTemplateImage--3kplg',
                src: buildUploadUrl(b.desktop),
                alt: 'Desktop app template'
              })]
            })]
          }), jsx('div', {
            className: 'starting_points_templates_modal--modalLearnMoreFooter--pSvfX',
            children: renderI18nText('starting_points.or_learn_the_basics', {
              learnTheBasicsLink: D
            })
          }), jsx('div', {
            className: 'starting_points_templates_modal--closeButton--io-14',
            children: jsx(IconButton, {
              'onClick': e,
              'aria-label': getI18nString('general.close'),
              'htmlAttributes': {
                'data-testid': 'close-button'
              },
              'children': jsx(_$$A4, {})
            })
          })]
        })
      })
    })
  });
}
let lR = userFlagExistsAtomFamily('dismissed_starting_points_templates_modal');
function lL() {
  let e = wA();
  let t = !!getFeatureFlags().starting_points_modal;
  let l = QL(E_.key) === E_.value;
  let s = useIsProgressBarHiddenOrLocked();
  let o = d4(e => e.mirror.appModel.currentPage);
  let d = useDeepEqualSceneValue((e, t) => zC(e, t), o);
  let u = QL(pt.KEY) === pt.VALUE;
  let c = selectCurrentFile();
  let x = getUserId();
  let p = c?.creatorId === x;
  let h = useAtomWithSubscription(Fy);
  let m = useAtomWithSubscription(isStarterUserAtom);
  let f = !selectUserFlag('not_gen_0');
  let y = useAtomWithSubscription(lR);
  let _ = getInitialOptions().starting_points;
  let {
    show,
    isShowing,
    complete
  } = _$$e2({
    overlay: EYw,
    priority: _$$N.OVERRIDING_MODAL + 1
  }, [h, y]);
  return (useEffect(() => {
    t && p && !u && !s && d && !isShowing && (l ? show() : f && m && _ && show({
      canShow: (e, t) => !e && !t
    }));
  }, [t, p, s, d, isShowing, l, f, m, u, _, y, show]), isShowing) ? jsx(lw, {
    onClose: () => {
      y.data || e(postUserFlag({
        dismissed_starting_points_templates_modal: !0
      }));
      complete();
    }
  }) : null;
}
let lF = Op({
  initial: 'ready_to_show',
  states: [{
    id: 'ready_to_show',
    transitions: [_$$nr('curator_content_shown', 'ui3_onboarding_was_shown_in_current_session', {
      condition: ({
        event: e
      }) => e.properties.shown === KTt.id
    })]
  }, {
    id: 'ui3_onboarding_was_shown_in_current_session',
    terminal: !0
  }]
});
let l$ = _$$rn('track_ui3_onboarding_shown', lF);
function lV() {
  let {
    isShowing,
    complete,
    show,
    uniqueId
  } = _$$e2({
    overlay: l_p,
    priority: _$$N.SECONDARY_MODAL
  });
  let a = wA();
  let d = useIsProgressBarHiddenOrLocked();
  let u = selectCurrentFile();
  let c = selectCurrentUser();
  let p = alwaysFalseCallback2();
  let h = !!selectUserFlag(bo);
  let m = _$$zl(l$).currentState === 'ui3_onboarding_was_shown_in_current_session';
  let f = _$$zl(_$$j3).currentState === 'no_figma_basics_onboarding_was_shown_in_current_session';
  let y = useAtomWithSubscription(_$$dL);
  let _ = isOnboardingComplete();
  let b = u?.canEdit;
  let j = d4(e => e.leftPanel.activeTab === UserInterfaceElements.LAYERS);
  if (_$$E(uniqueId, ['Reset Visual Assets Tooltips', _$$io], () => {
    c && u && a(postUserFlag(_$$g3));
  }), useEffect(() => {
    !p() || !b || y || h || m || f || !_ || d || !j || isShowing || show();
  }, [show, p, b, h, _, d, m, f, isShowing, y, j]), useEffect(() => {
    !j && isShowing && complete();
  }, [j, isShowing, complete]), !isShowing) {
    return null;
  }
  let v = jsx('strong', {
    style: {
      display: 'contents'
    },
    children: renderI18nText('design_systems.assets_panel.assets')
  });
  return jsx(_$$X, {
    isShowing,
    title: renderI18nText('rcs.visual_assets.elevate_your_designs'),
    description: renderI18nText('rcs.visual_assets.grab_visual_assets', {
      strongAssets: v
    }),
    primaryCta: {
      label: renderI18nText('rcs.presets_baseline.try_it'),
      type: 'button',
      onClick: () => {
        a(setLeftPanelTab({
          tab: UserInterfaceElements.ASSETS
        }));
        complete();
      },
      ctaTrackingDescriptor: UpgradeAction.PRESETS_TRY_IT
    },
    trackingContextName: 'Visual Assets Intro Tooltip',
    userFlagOnShow: bo,
    position: Ui3PositionType.UI3_EDITOR_TOP_LEFT,
    onClose: complete
  });
}
function l3() {
  return jsxs('svg', {
    width: '56',
    height: '57',
    viewBox: '0 0 56 57',
    fill: 'none',
    children: [jsxs('g', {
      clipPath: 'url(#clip0_9897_16689)',
      children: [jsx('path', {
        d: 'M0 5.5C0 2.73858 2.23858 0.5 5 0.5H51C53.7614 0.5 56 2.73858 56 5.5V51.5C56 54.2614 53.7614 56.5 51 56.5H5C2.23858 56.5 0 54.2614 0 51.5V5.5Z',
        fill: '#E4CCFF'
      }), jsxs('g', {
        filter: 'url(#filter0_d_9897_16689)',
        children: [jsx('rect', {
          x: '9.5',
          y: '23',
          width: '24',
          height: '24',
          rx: '3',
          fill: 'white',
          shapeRendering: 'crispEdges'
        }), jsx('path', {
          d: 'M20.6165 36.5908C21.1046 36.1028 21.8959 36.1028 22.384 36.5908L23.7629 37.9697C24.251 38.4579 24.251 39.2492 23.7629 39.7373L22.384 41.1162L22.2893 41.2021C21.8311 41.5758 21.1694 41.5758 20.7112 41.2021L20.6165 41.1162L19.2375 39.7373C18.78 39.2797 18.7512 38.5554 19.1516 38.0645L19.2375 37.9697L20.6165 36.5908ZM21.677 37.2979C21.5794 37.2003 21.4211 37.2003 21.3235 37.2979L19.9446 38.6768C19.8471 38.7744 19.8471 38.9327 19.9446 39.0303L21.3235 40.4092C21.4211 40.5067 21.5794 40.5067 21.677 40.4092L23.0559 39.0303C23.1534 38.9327 23.1534 38.7744 23.0559 38.6768L21.677 37.2979ZM16.7629 32.7373C17.2511 32.2493 18.0424 32.2493 18.5305 32.7373L19.9094 34.1162C20.3975 34.6043 20.3975 35.3957 19.9094 35.8838L18.5305 37.2627L18.4358 37.3486C17.9776 37.7223 17.3159 37.7223 16.8577 37.3486L16.7629 37.2627L15.384 35.8838C14.9265 35.4262 14.8977 34.7019 15.2981 34.2109L15.384 34.1162L16.7629 32.7373ZM24.47 32.7373C24.9581 32.2493 25.7494 32.2493 26.2375 32.7373L27.6165 34.1162C28.1045 34.6043 28.1045 35.3957 27.6165 35.8838L26.2375 37.2627L26.1428 37.3486C25.6846 37.7223 25.0229 37.7223 24.5647 37.3486L24.47 37.2627L23.0911 35.8838C22.6335 35.4262 22.6047 34.7019 23.0051 34.2109L23.0911 34.1162L24.47 32.7373ZM17.8235 33.4443C17.7259 33.3468 17.5676 33.3468 17.47 33.4443L16.0911 34.8232C15.9936 34.9208 15.9936 35.0792 16.0911 35.1768L17.47 36.5557C17.5676 36.6532 17.7259 36.6532 17.8235 36.5557L19.2024 35.1768C19.2999 35.0792 19.2999 34.9208 19.2024 34.8232L17.8235 33.4443ZM25.5305 33.4443C25.4329 33.3468 25.2746 33.3468 25.177 33.4443L23.7981 34.8232C23.7006 34.9208 23.7006 35.0792 23.7981 35.1768L25.177 36.5557C25.2746 36.6532 25.4329 36.6532 25.5305 36.5557L26.9094 35.1768C27.0069 35.0792 27.0069 34.9208 26.9094 34.8232L25.5305 33.4443ZM20.6165 28.8838C21.1046 28.3958 21.8959 28.3958 22.384 28.8838L23.7629 30.2627C24.251 30.7508 24.251 31.5421 23.7629 32.0303L22.384 33.4092L22.2893 33.4951C21.8311 33.8688 21.1694 33.8688 20.7112 33.4951L20.6165 33.4092L19.2375 32.0303C18.78 31.5726 18.7512 30.8484 19.1516 30.3574L19.2375 30.2627L20.6165 28.8838ZM21.677 29.5908C21.5794 29.4933 21.4211 29.4933 21.3235 29.5908L19.9446 30.9697C19.8471 31.0673 19.8471 31.2256 19.9446 31.3232L21.3235 32.7021C21.4211 32.7997 21.5794 32.7997 21.677 32.7021L23.0559 31.3232C23.1534 31.2256 23.1534 31.0673 23.0559 30.9697L21.677 29.5908Z',
          fill: '#D9B8FF'
        })]
      }), jsxs('g', {
        filter: 'url(#filter1_d_9897_16689)',
        children: [jsx('rect', {
          x: '22.5',
          y: '10',
          width: '24',
          height: '24',
          rx: '3',
          fill: 'white',
          shapeRendering: 'crispEdges'
        }), jsx('path', {
          d: 'M33.6165 23.5908C34.1046 23.1028 34.8959 23.1028 35.384 23.5908L36.7629 24.9697C37.251 25.4579 37.251 26.2492 36.7629 26.7373L35.384 28.1162L35.2893 28.2021C34.8311 28.5758 34.1694 28.5758 33.7112 28.2021L33.6165 28.1162L32.2375 26.7373C31.78 26.2797 31.7512 25.5554 32.1516 25.0645L32.2375 24.9697L33.6165 23.5908ZM34.677 24.2979C34.5794 24.2003 34.4211 24.2003 34.3235 24.2979L32.9446 25.6768C32.8471 25.7744 32.8471 25.9327 32.9446 26.0303L34.3235 27.4092C34.4211 27.5067 34.5794 27.5067 34.677 27.4092L36.0559 26.0303C36.1534 25.9327 36.1534 25.7744 36.0559 25.6768L34.677 24.2979ZM29.7629 19.7373C30.2511 19.2493 31.0424 19.2493 31.5305 19.7373L32.9094 21.1162C33.3975 21.6043 33.3975 22.3957 32.9094 22.8838L31.5305 24.2627L31.4358 24.3486C30.9776 24.7223 30.3159 24.7223 29.8577 24.3486L29.7629 24.2627L28.384 22.8838C27.9265 22.4262 27.8977 21.7019 28.2981 21.2109L28.384 21.1162L29.7629 19.7373ZM37.47 19.7373C37.9581 19.2493 38.7494 19.2493 39.2375 19.7373L40.6165 21.1162C41.1045 21.6043 41.1045 22.3957 40.6165 22.8838L39.2375 24.2627L39.1428 24.3486C38.6846 24.7223 38.0229 24.7223 37.5647 24.3486L37.47 24.2627L36.0911 22.8838C35.6335 22.4262 35.6047 21.7019 36.0051 21.2109L36.0911 21.1162L37.47 19.7373ZM30.8235 20.4443C30.7259 20.3468 30.5676 20.3468 30.47 20.4443L29.0911 21.8232C28.9936 21.9208 28.9936 22.0792 29.0911 22.1768L30.47 23.5557C30.5676 23.6532 30.7259 23.6532 30.8235 23.5557L32.2024 22.1768C32.2999 22.0792 32.2999 21.9208 32.2024 21.8232L30.8235 20.4443ZM38.5305 20.4443C38.4329 20.3468 38.2746 20.3468 38.177 20.4443L36.7981 21.8232C36.7006 21.9208 36.7006 22.0792 36.7981 22.1768L38.177 23.5557C38.2746 23.6532 38.4329 23.6532 38.5305 23.5557L39.9094 22.1768C40.0069 22.0792 40.0069 21.9208 39.9094 21.8232L38.5305 20.4443ZM33.6165 15.8838C34.1046 15.3958 34.8959 15.3958 35.384 15.8838L36.7629 17.2627C37.251 17.7508 37.251 18.5421 36.7629 19.0303L35.384 20.4092L35.2893 20.4951C34.8311 20.8688 34.1694 20.8688 33.7112 20.4951L33.6165 20.4092L32.2375 19.0303C31.78 18.5726 31.7512 17.8484 32.1516 17.3574L32.2375 17.2627L33.6165 15.8838ZM34.677 16.5908C34.5794 16.4933 34.4211 16.4933 34.3235 16.5908L32.9446 17.9697C32.8471 18.0673 32.8471 18.2256 32.9446 18.3232L34.3235 19.7021C34.4211 19.7997 34.5794 19.7997 34.677 19.7021L36.0559 18.3232C36.1534 18.2256 36.1534 18.0673 36.0559 17.9697L34.677 16.5908Z',
          fill: '#9747FF'
        })]
      })]
    }), jsxs('defs', {
      children: [jsxs('filter', {
        id: 'filter0_d_9897_16689',
        x: '1.5',
        y: '17',
        width: '40',
        height: '40',
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
          dy: '2'
        }), jsx('feGaussianBlur', {
          stdDeviation: '4'
        }), jsx('feComposite', {
          in2: 'hardAlpha',
          operator: 'out'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
        }), jsx('feBlend', {
          mode: 'multiply',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_9897_16689'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_9897_16689',
          result: 'shape'
        })]
      }), jsxs('filter', {
        id: 'filter1_d_9897_16689',
        x: '14.5',
        y: '4',
        width: '40',
        height: '40',
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
          dy: '2'
        }), jsx('feGaussianBlur', {
          stdDeviation: '4'
        }), jsx('feComposite', {
          in2: 'hardAlpha',
          operator: 'out'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
        }), jsx('feBlend', {
          mode: 'multiply',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_9897_16689'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_9897_16689',
          result: 'shape'
        })]
      }), jsx('clipPath', {
        id: 'clip0_9897_16689',
        children: jsx('path', {
          d: 'M0 5.5C0 2.73858 2.23858 0.5 5 0.5H51C53.7614 0.5 56 2.73858 56 5.5V51.5C56 54.2614 53.7614 56.5 51 56.5H5C2.23858 56.5 0 54.2614 0 51.5V5.5Z',
          fill: 'white'
        })
      })]
    })]
  });
}
function l4() {
  return jsxs('svg', {
    width: '56',
    height: '57',
    viewBox: '0 0 56 57',
    fill: 'none',
    children: [jsxs('g', {
      clipPath: 'url(#clip0_9897_16676)',
      children: [jsx('path', {
        d: 'M0 5.5C0 2.73858 2.23858 0.5 5 0.5H51C53.7614 0.5 56 2.73858 56 5.5V51.5C56 54.2614 53.7614 56.5 51 56.5H5C2.23858 56.5 0 54.2614 0 51.5V5.5Z',
        fill: '#FFBDF2'
      }), jsxs('g', {
        filter: 'url(#filter0_d_9897_16676)',
        children: [jsx('rect', {
          x: '7',
          y: '8.5',
          width: '24',
          height: '18',
          rx: '3',
          fill: 'white',
          shapeRendering: 'crispEdges'
        }), jsx('path', {
          d: 'M13.3983 21H11.9842L14.8319 13H16.4217L19.2694 21H17.8553L15.6561 14.5469H15.5936L13.3983 21ZM13.5272 17.8672H17.7147V18.9531H13.5272V17.8672ZM22.7736 23.375C22.2814 23.375 21.8582 23.3099 21.5041 23.1797C21.1525 23.0495 20.8673 22.875 20.6486 22.6563C20.4298 22.4375 20.2723 22.1979 20.1759 21.9375L21.3127 21.5781C21.3778 21.6927 21.4676 21.8112 21.5822 21.9336C21.6968 22.056 21.8517 22.1589 22.047 22.2422C22.2423 22.3281 22.491 22.3711 22.7931 22.3711C23.215 22.3711 23.564 22.2682 23.84 22.0625C24.116 21.8594 24.2541 21.5286 24.2541 21.0703V19.9141H24.1798C24.1095 20.0521 24.0067 20.1992 23.8713 20.3555C23.7358 20.5091 23.5535 20.6406 23.3244 20.75C23.0952 20.8568 22.8035 20.9102 22.4494 20.9102C21.9832 20.9102 21.5614 20.8008 21.1838 20.582C20.8088 20.3607 20.5106 20.0326 20.2892 19.5977C20.0679 19.1628 19.9572 18.6224 19.9572 17.9766C19.9572 17.3307 20.0666 16.7799 20.2853 16.3242C20.5041 15.8685 20.8022 15.5208 21.1798 15.2812C21.5574 15.0417 21.9832 14.9219 22.4572 14.9219C22.8192 14.9219 23.1134 14.9831 23.34 15.1055C23.5692 15.2253 23.7502 15.3685 23.883 15.5352C24.0158 15.6992 24.1173 15.8477 24.1877 15.9805H24.2658V15H25.5353V21.1172C25.5353 21.6302 25.4142 22.0534 25.172 22.3867C24.9324 22.7201 24.6043 22.9674 24.1877 23.1289C23.771 23.293 23.2996 23.375 22.7736 23.375ZM22.7775 19.8711C23.0952 19.8711 23.3647 19.7956 23.5861 19.6445C23.8074 19.4935 23.9754 19.276 24.09 18.9922C24.2072 18.7057 24.2658 18.3646 24.2658 17.9687C24.2658 17.5755 24.2085 17.2318 24.0939 16.9375C23.9793 16.6432 23.8114 16.4141 23.59 16.25C23.3686 16.0833 23.0978 16 22.7775 16C22.4442 16 22.1655 16.0859 21.9416 16.2578C21.7176 16.4297 21.5496 16.6641 21.4377 16.9609C21.3257 17.2578 21.2697 17.5937 21.2697 17.9687C21.2697 18.349 21.327 18.6823 21.4416 18.9687C21.5561 19.2526 21.7241 19.474 21.9455 19.6328C22.1694 19.7917 22.4468 19.8711 22.7775 19.8711Z',
          fill: '#FF24BD'
        }), jsx('path', {
          d: 'M47.584 13.2226C47.7372 12.9929 48.0476 12.9308 48.2773 13.084C48.5071 13.2371 48.5692 13.5476 48.416 13.7773L43.416 21.2773C43.3329 21.402 43.1979 21.4833 43.0488 21.498C42.8999 21.5126 42.7523 21.4593 42.6465 21.3535L39.6465 18.3535C39.4513 18.1582 39.4512 17.8417 39.6465 17.6465C39.8173 17.4756 40.0813 17.4539 40.2754 17.582L40.3535 17.6465L42.9219 20.2148L47.584 13.2226Z',
          fill: 'white'
        })]
      }), jsxs('g', {
        filter: 'url(#filter1_d_9897_16676)',
        children: [jsx('rect', {
          x: '7',
          y: '30.5',
          width: '24',
          height: '18',
          rx: '3',
          fill: 'white',
          shapeRendering: 'crispEdges'
        }), jsx('path', {
          d: 'M13.3983 43H11.9842L14.8319 35H16.4217L19.2694 43H17.8553L15.6561 36.5469H15.5936L13.3983 43ZM13.5272 39.8672H17.7147V40.9531H13.5272V39.8672ZM22.7736 45.375C22.2814 45.375 21.8582 45.3099 21.5041 45.1797C21.1525 45.0495 20.8673 44.875 20.6486 44.6563C20.4298 44.4375 20.2723 44.1979 20.1759 43.9375L21.3127 43.5781C21.3778 43.6927 21.4676 43.8112 21.5822 43.9336C21.6968 44.056 21.8517 44.1589 22.047 44.2422C22.2423 44.3281 22.491 44.3711 22.7931 44.3711C23.215 44.3711 23.564 44.2682 23.84 44.0625C24.116 43.8594 24.2541 43.5286 24.2541 43.0703V41.9141H24.1798C24.1095 42.0521 24.0067 42.1992 23.8713 42.3555C23.7358 42.5091 23.5535 42.6406 23.3244 42.75C23.0952 42.8568 22.8035 42.9102 22.4494 42.9102C21.9832 42.9102 21.5614 42.8008 21.1838 42.582C20.8088 42.3607 20.5106 42.0326 20.2892 41.5977C20.0679 41.1628 19.9572 40.6224 19.9572 39.9766C19.9572 39.3307 20.0666 38.7799 20.2853 38.3242C20.5041 37.8685 20.8022 37.5208 21.1798 37.2812C21.5574 37.0417 21.9832 36.9219 22.4572 36.9219C22.8192 36.9219 23.1134 36.9831 23.34 37.1055C23.5692 37.2253 23.7502 37.3685 23.883 37.5352C24.0158 37.6992 24.1173 37.8477 24.1877 37.9805H24.2658V37H25.5353V43.1172C25.5353 43.6302 25.4142 44.0534 25.172 44.3867C24.9324 44.7201 24.6043 44.9674 24.1877 45.1289C23.771 45.293 23.2996 45.375 22.7736 45.375ZM22.7775 41.8711C23.0952 41.8711 23.3647 41.7956 23.5861 41.6445C23.8074 41.4935 23.9754 41.276 24.09 40.9922C24.2072 40.7057 24.2658 40.3646 24.2658 39.9687C24.2658 39.5755 24.2085 39.2318 24.0939 38.9375C23.9793 38.6432 23.8114 38.4141 23.59 38.25C23.3686 38.0833 23.0978 38 22.7775 38C22.4442 38 22.1655 38.0859 21.9416 38.2578C21.7176 38.4297 21.5496 38.6641 21.4377 38.9609C21.3257 39.2578 21.2697 39.5937 21.2697 39.9687C21.2697 40.349 21.327 40.6823 21.4416 40.9687C21.5561 41.2526 21.7241 41.474 21.9455 41.6328C22.1694 41.7917 22.4468 41.8711 22.7775 41.8711Z',
          fill: '#FF99E0'
        }), jsx('path', {
          d: 'M44 33.5C40.6863 33.5 38 36.1863 38 39.5C38 42.8137 40.6863 45.5 44 45.5C47.3137 45.5 50 42.8137 50 39.5C50 36.1863 47.3137 33.5 44 33.5ZM47.8721 36.335C48.5775 37.1969 49 38.2993 49 39.5C49 42.2614 46.7614 44.5 44 44.5C42.7994 44.5 41.6979 44.0764 40.8359 43.3711L47.8721 36.335ZM44 34.5C45.2007 34.5 46.3031 34.9225 47.165 35.6279L40.1289 42.6641C39.4236 41.8021 39 40.7006 39 39.5C39 36.7386 41.2386 34.5 44 34.5Z',
          fill: 'white'
        })]
      })]
    }), jsxs('defs', {
      children: [jsxs('filter', {
        id: 'filter0_d_9897_16676',
        x: '-1',
        y: '2.5',
        width: '61',
        height: '34',
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
          dy: '2'
        }), jsx('feGaussianBlur', {
          stdDeviation: '4'
        }), jsx('feComposite', {
          in2: 'hardAlpha',
          operator: 'out'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
        }), jsx('feBlend', {
          mode: 'multiply',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_9897_16676'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_9897_16676',
          result: 'shape'
        })]
      }), jsxs('filter', {
        id: 'filter1_d_9897_16676',
        x: '-1',
        y: '24.5',
        width: '61',
        height: '34',
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
          dy: '2'
        }), jsx('feGaussianBlur', {
          stdDeviation: '4'
        }), jsx('feComposite', {
          in2: 'hardAlpha',
          operator: 'out'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
        }), jsx('feBlend', {
          mode: 'multiply',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_9897_16676'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_9897_16676',
          result: 'shape'
        })]
      }), jsx('clipPath', {
        id: 'clip0_9897_16676',
        children: jsx('path', {
          d: 'M0 5.5C0 2.73858 2.23858 0.5 5 0.5H51C53.7614 0.5 56 2.73858 56 5.5V51.5C56 54.2614 53.7614 56.5 51 56.5H5C2.23858 56.5 0 54.2614 0 51.5V5.5Z',
          fill: 'white'
        })
      })]
    })]
  });
}
function l7() {
  return jsxs('svg', {
    width: '56',
    height: '57',
    viewBox: '0 0 56 57',
    fill: 'none',
    children: [jsxs('g', {
      clipPath: 'url(#clip0_10049_1824)',
      children: [jsx('path', {
        d: 'M0 5.5C0 2.73858 2.23858 0.5 5 0.5H51C53.7614 0.5 56 2.73858 56 5.5V51.5C56 54.2614 53.7614 56.5 51 56.5H5C2.23858 56.5 0 54.2614 0 51.5V5.5Z',
        fill: '#BDE3FF'
      }), jsxs('g', {
        filter: 'url(#filter0_d_10049_1824)',
        children: [jsx('rect', {
          x: '8',
          y: '8.5',
          width: '40',
          height: '40',
          rx: '3',
          fill: 'white',
          shapeRendering: 'crispEdges'
        }), jsx('path', {
          d: 'M26 16C26 15.1716 26.6716 14.5 27.5 14.5H41.5C42.3284 14.5 43 15.1716 43 16C43 16.8284 42.3284 17.5 41.5 17.5H27.5C26.6716 17.5 26 16.8284 26 16Z',
          fill: '#BDE3FF'
        }), jsx('path', {
          d: 'M26 29C26 28.1716 26.6716 27.5 27.5 27.5H41.5C42.3284 27.5 43 28.1716 43 29C43 29.8284 42.3284 30.5 41.5 30.5H27.5C26.6716 30.5 26 29.8284 26 29Z',
          fill: '#BDE3FF'
        }), jsx('path', {
          d: 'M26 40C26 39.1716 26.6716 38.5 27.5 38.5H41.5C42.3284 38.5 43 39.1716 43 40C43 40.8284 42.3284 41.5 41.5 41.5H27.5C26.6716 41.5 26 40.8284 26 40Z',
          fill: '#BDE3FF'
        }), jsx('path', {
          d: 'M14.9375 16.4902C15.248 16.4904 15.4999 16.7423 15.5 17.0527C15.4999 17.3632 15.2479 17.615 14.9375 17.6152C14.6273 17.615 14.3755 17.3638 14.375 17.0537C14.375 16.7431 14.6269 16.4904 14.9375 16.4902Z',
          fill: '#0D99FF'
        }), jsx('path', {
          d: 'M19.0625 15.375C19.3731 15.3751 19.625 15.6279 19.625 15.9385C19.6245 16.2485 19.3726 16.4998 19.0625 16.5C18.7521 16.4997 18.5 16.248 18.5 15.9375C18.5 15.6269 18.752 15.3751 19.0625 15.375Z',
          fill: '#0D99FF'
        }), jsx('path', {
          d: 'M15.3125 14.25C15.6231 14.2501 15.875 14.5019 15.875 14.8125C15.875 15.1231 15.6231 15.3749 15.3125 15.375C15.0019 15.3749 14.75 15.1231 14.75 14.8125C14.75 14.5019 15.0019 14.2501 15.3125 14.25Z',
          fill: '#0D99FF'
        }), jsx('path', {
          d: 'M17.5625 13.876C17.8731 13.876 18.125 14.1269 18.125 14.4375C18.1249 14.7481 17.8731 15 17.5625 15C17.2519 14.9999 17.0001 14.7481 17 14.4375C17 14.1269 17.2519 13.876 17.5625 13.876Z',
          fill: '#0D99FF'
        }), jsx('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M17 12C19.4853 12 21.5 14.0147 21.5 16.5C21.5 16.728 21.4833 16.9525 21.4502 17.1719C21.2884 18.2437 20.2918 18.75 19.4551 18.75H17.75C17.75 19.366 17.4927 19.9576 17.0518 20.3467C16.5911 20.753 15.924 20.932 15.2471 20.6455C13.634 19.9627 12.5 18.3647 12.5 16.5C12.5 14.0147 14.5147 12 17 12ZM17 12.75C14.9289 12.75 13.25 14.4289 13.25 16.5C13.25 18.0529 14.1937 19.3855 15.5391 19.9551C16.302 20.278 17 19.5784 17 18.75C17 18.3358 17.3358 18 17.75 18H19.4551C20.0512 18 20.6191 17.649 20.708 17.0596C20.7355 16.877 20.75 16.6902 20.75 16.5C20.75 14.4289 19.0711 12.75 17 12.75Z',
          fill: '#0D99FF'
        }), jsx('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M19.498 27.1146C19.739 27.1146 19.935 27.1552 20.0859 27.2367C20.2387 27.3165 20.3597 27.4127 20.4482 27.5238C20.5367 27.633 20.6045 27.7322 20.6514 27.8206H20.7031V27.1663H21.5498V31.2445C21.5498 31.5865 21.469 31.8689 21.3076 32.0911C21.1479 32.3134 20.9291 32.4786 20.6514 32.5863C20.3737 32.6956 20.0595 32.7503 19.709 32.7503C19.3809 32.7503 19.0984 32.7063 18.8623 32.6195C18.628 32.5327 18.4378 32.4166 18.292 32.2708C18.1462 32.125 18.0408 31.965 17.9766 31.7913L18.7344 31.5521C18.7778 31.6285 18.8377 31.7078 18.9141 31.7894C18.9904 31.871 19.0944 31.9389 19.2246 31.9945C19.3548 32.0517 19.5204 32.0804 19.7217 32.0804C20.0029 32.0804 20.2359 32.0125 20.4199 31.8753C20.6039 31.7399 20.6953 31.5187 20.6953 31.2132V30.4427H20.6465C20.5996 30.5347 20.5306 30.6326 20.4404 30.7367C20.3502 30.839 20.2288 30.9274 20.0762 31.0003C19.9234 31.0715 19.7283 31.1068 19.4922 31.1068C19.1815 31.1067 18.9001 31.0338 18.6484 30.888C18.3986 30.7405 18.2003 30.5216 18.0527 30.2318C17.9052 29.9418 17.8311 29.5813 17.8311 29.1507C17.8311 28.7203 17.904 28.3529 18.0498 28.0492C18.1956 27.7455 18.3948 27.5135 18.6465 27.3538C18.8981 27.1943 19.1823 27.1146 19.498 27.1146ZM19.7109 27.8333C19.4889 27.8334 19.3035 27.8908 19.1543 28.0052C19.005 28.1198 18.893 28.2761 18.8184 28.474C18.7437 28.6719 18.7061 28.8958 18.7061 29.1458C18.7061 29.3993 18.7439 29.6219 18.8203 29.8128C18.8967 30.0019 19.0088 30.1494 19.1562 30.2552C19.3055 30.3611 19.4905 30.4144 19.7109 30.4144C19.9227 30.4144 20.1025 30.3637 20.25 30.263C20.3975 30.1624 20.5096 30.0175 20.5859 29.8285C20.6641 29.6375 20.7031 29.4097 20.7031 29.1458C20.7031 28.8837 20.6652 28.6545 20.5889 28.4583C20.5125 28.2623 20.4004 28.1097 20.2529 28.0003C20.1054 27.8892 19.9245 27.8333 19.7109 27.8333Z',
          fill: '#0D99FF'
        }), jsx('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M17.3721 31.1663H16.4297L15.9648 29.8021H13.9219L13.458 31.1663H12.5156L14.4141 25.8333H15.4736L17.3721 31.1663ZM14.1689 29.0785H15.7178L14.9639 26.8646H14.9219L14.1689 29.0785Z',
          fill: '#0D99FF'
        }), jsx('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M15.8379 42.748C16.0439 42.7685 16.2274 42.6181 16.248 42.4121L16.2891 42H17.4111L17.377 42.3379C17.3565 42.5439 17.5069 42.7274 17.7129 42.748C17.9189 42.7685 18.1024 42.6181 18.123 42.4121L18.1641 42H18.875C19.0821 42 19.25 41.8321 19.25 41.625C19.25 41.4179 19.0821 41.25 18.875 41.25H18.2393L18.3896 39.75H18.875C19.0821 39.75 19.25 39.5821 19.25 39.375C19.25 39.1679 19.0821 39 18.875 39H18.4639L18.498 38.6621C18.5185 38.4561 18.3681 38.2726 18.1621 38.252C17.9561 38.2315 17.7726 38.3819 17.752 38.5879L17.7109 39H16.5889L16.623 38.6621C16.6435 38.4561 16.4931 38.2726 16.2871 38.252C16.0811 38.2315 15.8976 38.3819 15.877 38.5879L15.8359 39H15.125C14.9179 39 14.75 39.1679 14.75 39.375C14.75 39.5821 14.9179 39.75 15.125 39.75H15.7607L15.6104 41.25H15.125C14.9179 41.25 14.75 41.4179 14.75 41.625C14.75 41.8321 14.9179 42 15.125 42H15.5361L15.502 42.3379C15.4815 42.5439 15.6319 42.7274 15.8379 42.748ZM16.3643 41.25L16.5146 39.75H17.6357L17.4854 41.25H16.3643Z',
          fill: '#0D99FF'
        }), jsx('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M19.625 44.25C20.2463 44.2499 20.75 43.7463 20.75 43.125V37.875C20.75 37.2537 20.2463 36.7501 19.625 36.75H14.375C13.7537 36.75 13.25 37.2537 13.25 37.875V43.125C13.25 43.7463 13.7537 44.25 14.375 44.25H19.625ZM14.375 43.5C14.1679 43.5 14 43.3321 14 43.125V37.875C14 37.6679 14.1679 37.5 14.375 37.5H19.625C19.832 37.5001 20 37.6679 20 37.875V43.125C20 43.3321 19.832 43.4999 19.625 43.5H14.375Z',
          fill: '#0D99FF'
        })]
      })]
    }), jsxs('defs', {
      children: [jsxs('filter', {
        id: 'filter0_d_10049_1824',
        x: '0',
        y: '2.5',
        width: '56',
        height: '56',
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
          dy: '2'
        }), jsx('feGaussianBlur', {
          stdDeviation: '4'
        }), jsx('feComposite', {
          in2: 'hardAlpha',
          operator: 'out'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
        }), jsx('feBlend', {
          mode: 'multiply',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_10049_1824'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_10049_1824',
          result: 'shape'
        })]
      }), jsx('clipPath', {
        id: 'clip0_10049_1824',
        children: jsx('path', {
          d: 'M0 5.5C0 2.73858 2.23858 0.5 5 0.5H51C53.7614 0.5 56 2.73858 56 5.5V51.5C56 54.2614 53.7614 56.5 51 56.5H5C2.23858 56.5 0 54.2614 0 51.5V5.5Z',
          fill: 'white'
        })
      })]
    })]
  });
}
function l8() {
  return jsxs('svg', {
    width: '288',
    height: '173',
    viewBox: '0 0 288 173',
    fill: 'none',
    children: [jsxs('g', {
      clipPath: 'url(#clip0_10088_1793)',
      children: [jsx('rect', {
        y: '0.5',
        width: '288',
        height: '172',
        rx: '5',
        fill: '#F5F5F5'
      }), jsx('g', {
        filter: 'url(#filter0_d_10088_1793)',
        children: jsx('rect', {
          x: '50',
          y: '26',
          width: '56',
          height: '120',
          rx: '4',
          fill: '#D9D9D9'
        })
      }), jsx('g', {
        filter: 'url(#filter1_d_10088_1793)',
        children: jsx('rect', {
          x: '-22',
          y: '26',
          width: '56',
          height: '120',
          rx: '4',
          fill: '#D9D9D9'
        })
      }), jsx('g', {
        filter: 'url(#filter2_d_10088_1793)',
        children: jsx('rect', {
          x: '122',
          y: '26',
          width: '56',
          height: '120',
          rx: '4',
          fill: '#D9D9D9'
        })
      }), jsx('rect', {
        x: '121.5',
        y: '25.5',
        width: '57',
        height: '120',
        stroke: '#0D99FF'
      }), jsx('rect', {
        x: '118.5',
        y: '22.5',
        width: '7',
        height: '7',
        fill: 'white',
        stroke: '#0D99FF',
        strokeLinecap: 'square'
      }), jsx('rect', {
        x: '118.5',
        y: '141.5',
        width: '7',
        height: '7',
        fill: 'white',
        stroke: '#0D99FF',
        strokeLinecap: 'square'
      }), jsx('rect', {
        x: '174.5',
        y: '22.5',
        width: '7',
        height: '7',
        fill: 'white',
        stroke: '#0D99FF',
        strokeLinecap: 'square'
      }), jsx('rect', {
        x: '174.5',
        y: '141.5',
        width: '7',
        height: '7',
        fill: 'white',
        stroke: '#0D99FF',
        strokeLinecap: 'square'
      }), jsx('g', {
        filter: 'url(#filter3_d_10088_1793)',
        children: jsx('rect', {
          x: '194',
          y: '26',
          width: '56',
          height: '120',
          rx: '4',
          fill: '#D9D9D9'
        })
      }), jsx('rect', {
        x: '193.5',
        y: '25.5',
        width: '57',
        height: '120',
        stroke: '#0D99FF'
      }), jsx('rect', {
        x: '190.5',
        y: '22.5',
        width: '7',
        height: '7',
        fill: 'white',
        stroke: '#0D99FF',
        strokeLinecap: 'square'
      }), jsx('rect', {
        x: '190.5',
        y: '141.5',
        width: '7',
        height: '7',
        fill: 'white',
        stroke: '#0D99FF',
        strokeLinecap: 'square'
      }), jsx('rect', {
        x: '246.5',
        y: '22.5',
        width: '7',
        height: '7',
        fill: 'white',
        stroke: '#0D99FF',
        strokeLinecap: 'square'
      }), jsx('rect', {
        x: '246.5',
        y: '141.5',
        width: '7',
        height: '7',
        fill: 'white',
        stroke: '#0D99FF',
        strokeLinecap: 'square'
      }), jsx('g', {
        filter: 'url(#filter4_d_10088_1793)',
        children: jsx('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M237.409 97.4091C238.033 96.7852 238.964 96.5835 239.79 96.8933L256.29 103.081C257.212 103.427 257.802 104.332 257.746 105.316C257.69 106.299 257.001 107.131 256.046 107.37L249.105 109.105L247.37 116.046C247.131 117.001 246.299 117.69 245.316 117.746C244.332 117.802 243.427 117.212 243.081 116.29L236.893 99.7901C236.584 98.9639 236.785 98.033 237.409 97.4091Z',
          fill: 'white'
        })
      }), jsx('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M239.263 98.2978C238.988 98.1945 238.678 98.2617 238.47 98.4697C238.262 98.6777 238.195 98.988 238.298 99.2634L244.485 115.763C244.601 116.071 244.902 116.267 245.23 116.249C245.558 116.23 245.835 116 245.915 115.682L247.868 107.868L255.682 105.915C256 105.835 256.23 105.558 256.249 105.23C256.267 104.902 256.071 104.601 255.763 104.485L239.263 98.2978Z',
        fill: 'black'
      })]
    }), jsx('rect', {
      x: '0.5',
      y: '1',
      width: '287',
      height: '171',
      rx: '4.5',
      stroke: '#E6E6E6'
    }), jsxs('defs', {
      children: [jsxs('filter', {
        id: 'filter0_d_10088_1793',
        x: '42',
        y: '20',
        width: '72',
        height: '136',
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
          dy: '2'
        }), jsx('feGaussianBlur', {
          stdDeviation: '4'
        }), jsx('feComposite', {
          in2: 'hardAlpha',
          operator: 'out'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_10088_1793'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_10088_1793',
          result: 'shape'
        })]
      }), jsxs('filter', {
        id: 'filter1_d_10088_1793',
        x: '-30',
        y: '20',
        width: '72',
        height: '136',
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
          dy: '2'
        }), jsx('feGaussianBlur', {
          stdDeviation: '4'
        }), jsx('feComposite', {
          in2: 'hardAlpha',
          operator: 'out'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_10088_1793'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_10088_1793',
          result: 'shape'
        })]
      }), jsxs('filter', {
        id: 'filter2_d_10088_1793',
        x: '114',
        y: '20',
        width: '72',
        height: '136',
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
          dy: '2'
        }), jsx('feGaussianBlur', {
          stdDeviation: '4'
        }), jsx('feComposite', {
          in2: 'hardAlpha',
          operator: 'out'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_10088_1793'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_10088_1793',
          result: 'shape'
        })]
      }), jsxs('filter', {
        id: 'filter3_d_10088_1793',
        x: '186',
        y: '20',
        width: '72',
        height: '136',
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
          dy: '2'
        }), jsx('feGaussianBlur', {
          stdDeviation: '4'
        }), jsx('feComposite', {
          in2: 'hardAlpha',
          operator: 'out'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_10088_1793'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_10088_1793',
          result: 'shape'
        })]
      }), jsxs('filter', {
        id: 'filter4_d_10088_1793',
        x: '232.25',
        y: '93.75',
        width: '30.0001',
        height: '30.0001',
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
          dy: '1.5'
        }), jsx('feGaussianBlur', {
          stdDeviation: '2.25'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_10088_1793'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_10088_1793',
          result: 'shape'
        })]
      }), jsx('clipPath', {
        id: 'clip0_10088_1793',
        children: jsx('rect', {
          y: '0.5',
          width: '288',
          height: '172',
          rx: '5',
          fill: 'white'
        })
      })]
    })]
  });
}
let l6 = 'design-linter-landing-page';
function l9() {
  let {
    hasNoSelectedNodes,
    doesExceedLimit
  } = nn();
  let l = Hl();
  let r = bk();
  let s = useAtomWithSubscription(_M);
  let o = useAtomWithSubscription(Ut);
  let d = selectUserFlag('seen_linter_home_view');
  let [u, c] = useState(!1);
  let [p, h] = useState(() => s === FR.LANDING_PAGE_NO_SELECTION ? 'noNodesSelected' : s === FR.LANDING_PAGE_LIMIT_EXCEEDED ? 'layerLimitExceeded' : 'welcome');
  let m = p === 'welcome';
  let {
    isButtonDisabled,
    shouldShowLayerCount
  } = {
    isButtonDisabled: useMemo(() => {
      let l = hasNoSelectedNodes || doesExceedLimit;
      return (p === 'noNodesSelected' || p === 'layerLimitExceeded') && l;
    }, [p, hasNoSelectedNodes, doesExceedLimit]),
    shouldShowLayerCount: useMemo(() => {
      let e = p === 'noNodesSelected';
      let l = doesExceedLimit || u;
      return p === 'layerLimitExceeded' || e && l;
    }, [p, doesExceedLimit, u])
  };
  let _ = useCallback(() => {
    let e = _$$r2();
    return !!e && (e.getDirectlySelectedNodes().length === 0 ? (h('noNodesSelected'), !1) : !doesExceedLimit || (h('layerLimitExceeded'), !1));
  }, [doesExceedLimit]);
  let b = useCallback(async () => {
    _() && (getFeatureFlags().aip_flower_garden_auto_library_select ? (atomStoreManager.set(_M, FR.ALL_VISUAL_GROUPS_VIEW), o && (await r())) : (atomStoreManager.set(_$$E4, !1), o ? (atomStoreManager.set(_M, FR.ALL_VISUAL_GROUPS_VIEW), await r()) : atomStoreManager.set(_M, FR.LIBRARY_SELECTOR_INITIAL)));
  }, [r, _, o]);
  return (useEffect(() => {
    shouldShowLayerCount && !u && c(!0);
  }, [shouldShowLayerCount, u]), useEffect(() => {
    d && m && b();
  }, [d, m, b]), d && m) ? null : jsx(_$$bL, {
    width: 400,
    onClose: ({
      source: e
    }) => {
      e !== 'outside' && l(FR.LANDING_PAGE_WELCOME);
    },
    defaultPosition: {
      x: (window.innerWidth - 400) / 2,
      y: (window.innerHeight - 496) / 2
    },
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: jsxs('div', {
            className: 'x78zum5 x167g77z x6s0dn4',
            children: [renderI18nText('design_linter.title'), jsx(_$$E3, {
              children: renderI18nText('general.beta')
            })]
          })
        })
      }), jsxs(DialogBody, {
        children: [m && jsx(nt, {}), p === 'noNodesSelected' && jsx(nr, {}), p === 'layerLimitExceeded' && jsx(ns, {})]
      }), jsx(DialogFooter, {
        children: shouldShowLayerCount ? jsxs('div', {
          className: 'x78zum5 x1q0g3np x1qughib x6s0dn4 xh8yej3',
          children: [shouldShowLayerCount && jsx(ni, {}), jsx(ne, {
            onContinue: b,
            step: p,
            hasNoSelectedNodes,
            doesExceedLimit,
            isButtonDisabled
          })]
        }) : jsx(DialogActionStrip, {
          children: jsx(ne, {
            onContinue: b,
            step: p,
            hasNoSelectedNodes,
            doesExceedLimit,
            isButtonDisabled
          })
        })
      })]
    })
  });
}
function ne({
  onContinue: e,
  step: t,
  hasNoSelectedNodes: l,
  doesExceedLimit: i,
  isButtonDisabled: r
}) {
  return jsx(Button, {
    'recordingKey': generateRecordingKey(l6, 'continue-button'),
    'data-testid': `${l6}-continue-button`,
    'onClick': e,
    'htmlAttributes': {
      'data-tooltip': function ({
        step: e,
        hasNoSelectedNodes: t,
        doesExceedLimit: l
      }) {
        return e === 'welcome' ? '' : t ? getI18nString('design_linter.landing_page.no_nodes_selected.button_tooltip') : l ? getI18nString('design_linter.landing_page.layer_limit_exceeded.title') : '';
      }({
        step: t,
        hasNoSelectedNodes: l,
        doesExceedLimit: i
      }),
      'data-tooltip-type': KindEnum.TEXT
    },
    'disabled': r,
    'children': renderI18nText('general.continue')
  });
}
function nt() {
  return jsxs('div', {
    'className': 'x1g8o3q3 xboal0k x78zum5 xdt5ytf xl56j7k x6s0dn4 x2lah0s xkh2ocl x87ps6o x1665zp3',
    'data-testid': `${l6}-welcome`,
    'children': [jsxs('div', {
      className: 'x78zum5 xdt5ytf x6s0dn4 x2b8uid',
      children: [jsx('span', {
        ...Ay.props(na.landingPageHeader),
        children: renderI18nText('design_linter.landing_page.title')
      }), jsx('span', {
        ...Ay.props(na.landingPageSubheader),
        children: renderI18nText('design_linter.landing_page.subheader')
      })]
    }), jsxs('div', {
      className: 'x78zum5 xdt5ytf xou54vl',
      children: [jsx(no, {
        headerText: getI18nString('design_linter.landing_page.feature_tokens_header'),
        subheaderText: getI18nString('design_linter.landing_page.feature_tokens_subheader'),
        children: jsx(l7, {})
      }), jsx(no, {
        headerText: getI18nString('design_linter.landing_page.feature_contrast_header'),
        subheaderText: getI18nString('design_linter.landing_page.feature_contrast_subheader'),
        children: jsx(l4, {})
      }), jsx(no, {
        headerText: getI18nString('design_linter.landing_page.feature_incorrect_assets_header'),
        subheaderText: getI18nString('design_linter.landing_page.feature_incorrect_assets_subheader'),
        children: jsx(l3, {})
      })]
    })]
  });
}
let nl = _$$n2(() => {
  let e = _$$r2();
  return e?.layerLimit ?? W3;
});
function nn() {
  let {
    layerCount,
    didExceedCountMax
  } = function () {
    let e = 1.5 * nl();
    return useDeepEqualSceneValue(t => {
      let l = t.getDirectlySelectedNodes();
      let n = 0;
      let i = !1;
      for (let t of l) {
        if (i) break;
        _$$eA(t, () => {
          if ((n += 1) >= e) {
            i = !0;
            return 'stop';
          }
        });
      }
      return {
        layerCount: n,
        didExceedCountMax: i
      };
    });
  }();
  let l = nl();
  let n = didExceedCountMax || layerCount > l;
  let i = layerCount === 0;
  return {
    layerCount,
    maxLayerCount: l,
    hasIssue: n || i,
    hasNoSelectedNodes: i,
    doesExceedLimit: n,
    didExceedCountMax
  };
}
function ni() {
  let {
    layerCount,
    maxLayerCount,
    hasIssue,
    didExceedCountMax,
    hasNoSelectedNodes
  } = nn();
  let s = `${layerCount.toLocaleString()}${didExceedCountMax ? '+' : ''}`;
  let o = maxLayerCount.toLocaleString();
  let a = didExceedCountMax ? ` \xB7 ${getI18nString('design_linter.landing_page.layer_limit_exceeded.title')}` : '';
  let d = `${s} / ${o}${a}`;
  hasNoSelectedNodes && (d = getI18nString('design_linter.landing_page.no_nodes_selected.error_footer'));
  return jsxs('div', {
    className: 'x78zum5 x1ib1h6n xl56j7k x6s0dn4 x1jnr06f xkh2ocl',
    children: [jsx('div', {
      children: hasIssue ? jsx(_$$w3, {
        style: nd
      }) : jsx(_$$W3, {
        style: nu
      })
    }), jsx('div', {
      ...Ay.props(na.layerCountText),
      children: d
    })]
  });
}
function nr() {
  return jsxs('div', {
    'className': 'x1g8o3q3 xboal0k x78zum5 xdt5ytf xl56j7k x6s0dn4 x2lah0s xkh2ocl x87ps6o',
    'data-testid': `${l6}-no-nodes-selected`,
    'children': [jsxs('div', {
      className: 'x78zum5 xdt5ytf x6s0dn4 x2b8uid x1ib1h6n',
      children: [jsx('span', {
        ...Ay.props(na.landingPageHeader),
        children: renderI18nText('design_linter.landing_page.no_nodes_selected.title')
      }), jsx('span', {
        ...Ay.props(na.landingPageSubheader),
        children: renderI18nText('design_linter.landing_page.no_nodes_selected.subheader')
      })]
    }), jsx('div', {
      className: 'x1ib1h6n',
      children: jsx(l8, {})
    })]
  });
}
function ns() {
  return jsxs('div', {
    'className': 'x1g8o3q3 xboal0k x78zum5 xdt5ytf xl56j7k x6s0dn4 x2lah0s xkh2ocl x87ps6o',
    'data-testid': `${l6}-layer-limit-exceeded`,
    'children': [jsxs('div', {
      className: 'x78zum5 xdt5ytf x6s0dn4 x2b8uid x1ib1h6n',
      children: [jsx('span', {
        ...Ay.props(na.landingPageHeader),
        children: renderI18nText('design_linter.landing_page.layer_limit_exceeded.title')
      }), jsx('span', {
        ...Ay.props(na.landingPageSubheader),
        children: renderI18nText('design_linter.landing_page.layer_limit_exceeded.subheader')
      })]
    }), jsx('div', {
      className: 'x1ib1h6n',
      children: jsx(l8, {})
    })]
  });
}
function no({
  children: e,
  headerText: t,
  subheaderText: l
}) {
  return jsxs('div', {
    className: 'x78zum5 xxmtint x6s0dn4 x1v2ro7d xkh2ocl',
    children: [e, jsxs('div', {
      className: 'x78zum5 xdt5ytf xl56j7k x1cy8zhl x5mp9sv',
      children: [jsx('div', {
        ...Ay.props(na.featureHeader),
        children: t
      }), jsx('div', {
        ...Ay.props(na.featureSubheader),
        children: l
      })]
    })]
  });
}
let na = {
  landingPageHeader: {
    ...textDisplayConfig.textHeadingMedium,
    color: 'xiuzu7u',
    $$css: !0
  },
  landingPageSubheader: {
    ...textDisplayConfig.textBodyMedium,
    color: 'xv1l7n4',
    $$css: !0
  },
  featureHeader: {
    ...textDisplayConfig.textBodyLarge,
    color: 'xiuzu7u',
    $$css: !0
  },
  featureSubheader: {
    ...textDisplayConfig.textBodyMedium,
    color: 'xv1l7n4',
    $$css: !0
  },
  layerCountText: {
    ...textDisplayConfig.textBodyMedium,
    color: 'xv1l7n4',
    textAlign: 'x2b8uid',
    userSelect: 'x87ps6o',
    fontVariantNumeric: 'xss6m8b',
    $$css: !0
  }
};
let nd = {
  '--color-icon': 'var(--color-icon-warning)'
};
let nu = {
  '--color-icon': 'var(--color-icon-success)'
};
let nx = nc;
function nb() {
  let {
    isLibraryModalShown,
    onToggleLibraryModal
  } = _$$u({
    entrypoint: _$$r4.DESIGN_LINTER,
    modalType: 'editor',
    initialTab: LibraryTabEnum.LIBRARIES
  });
  let l = useCallback(() => {
    _$$r2()?.teardownLinter();
    isLibraryModalShown || onToggleLibraryModal();
  }, [isLibraryModalShown, onToggleLibraryModal]);
  return jsxs('div', {
    ...Ay.props(nj.box),
    children: [renderI18nText('design_linter.library_selector.no_libraries'), jsx(Button, {
      onClick: l,
      children: renderI18nText('design_linter.library_selector.manage_libraries')
    })]
  });
}
let nj = {
  box: {
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    padding: 'x1pcupwp',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    gap: 'x1nfngrj',
    rowGap: null,
    columnGap: null,
    borderRadius: 'x1sxf85j',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    backgroundColor: 'x1v8gsql',
    ...textDisplayConfig.textBodyMedium,
    $$css: !0
  }
};
function nw() {
  let e = _$$$2();
  let t = _$$e4();
  let l = _$$$3(e, t);
  let n = nR(e);
  let r = nR(l);
  return useMemo(() => ({
    subscribedLibraries: n,
    usedInFileLibraries: r
  }), [n, r]);
}
function nR(e) {
  return useMemo(() => e.status === 'loaded' ? {
    ...e,
    data: e.data.filter(e => e.num_variables > 0 || e.num_styles > 0 || e.num_components > 0)
  } : e, [e]);
}
function nL(e) {
  return useMemo(() => {
    if (e.status === 'loaded') return e.data.length === 0 ? _$$oV.EMPTY : _$$oV.CONTENT;
    if (e.status === 'errors' || e.status === 'disabled') ;else if (e.status === 'loading') return _$$oV.LOADING;
    return _$$oV.ERROR;
  }, [e]);
}
let nB = {
  opacity: 50,
  animationType: JR.SHIMMER
};
function nF({
  numPlaceholderLibraries: e,
  useSmallVersion: t
}) {
  return jsx(Fragment, {
    children: range(e).map(e => t ? jsx(nP, {}, e) : jsx(n$, {}, e))
  });
}
function n$() {
  return jsxs('div', {
    className: 'x78zum5 x6s0dn4 x9f619 x1ef8nbk x17f4yl9 x1bamp8i x19y5rnk xh8yej3 x1nfngrj',
    children: [jsx(Qp, {
      className: 'xehbxol x19y5rnk x1exxlbk xnnlda6',
      ...nB
    }), jsxs('div', {
      className: 'x98rzlu x78zum5 xdt5ytf x1nfngrj',
      children: [jsx(Wi, {
        className: 'xygnafs',
        ...nB
      }), jsx(Wi, {
        className: 'x1dmp6jm',
        ...nB
      })]
    }), jsx(ManuallyLabeledCheckbox, {
      id: 'loading',
      disabled: !0
    })]
  });
}
function nP() {
  return jsxs('div', {
    className: 'x78zum5 x6s0dn4 x1q0g3np x1v2ro7d',
    children: [jsx(Qp, {
      className: 'xehbxol x19y5rnk xeepkih x90ne7k',
      ...nB
    }), jsxs('div', {
      className: 'x98rzlu x78zum5 xdt5ytf x1nfngrj',
      children: [jsx(Wi, {
        className: 'xygnafs',
        ...nB
      }), jsx(Wi, {
        className: 'x1fu8urw',
        ...nB
      })]
    })]
  });
}
function nV({
  subscribedLibraries: e,
  usedInThisFile: t,
  subscribedLibrariesStatus: l,
  usedInThisFileStatus: r,
  checkedStates: s,
  setCheckedStates: o,
  setSubscribeCallbacks: a
}) {
  let d = useCallback((e, t) => {
    o(l => ({
      ...l,
      [e]: t
    }));
  }, [o]);
  let u = useCallback((e, t) => {
    a(l => ({
      ...l,
      [e]: t
    }));
  }, [a]);
  let c = r === _$$oV.LOADING || l === _$$oV.LOADING;
  return jsxs(Fragment, {
    children: [jsx(nD, {
      subscribedLibraries: e,
      subscribedLibrariesStatus: l,
      checkedStates: s,
      setLibraryCheckedState: d
    }), c ? null : jsx(nG, {
      checkedStates: s,
      setLibraryCheckedState: d
    }), jsx(nH, {
      usedInThisFile: t,
      usedInThisFileStatus: r,
      checkedStates: s,
      setLibraryCheckedState: d,
      setLibrarySubscribeCallback: u
    })]
  });
}
function nD({
  subscribedLibraries: e,
  subscribedLibrariesStatus: t,
  checkedStates: l,
  setLibraryCheckedState: i
}) {
  return t === _$$oV.LOADING ? jsx(nF, {
    numPlaceholderLibraries: 2
  }) : t === _$$oV.CONTENT ? jsx(Fragment, {
    children: e?.data?.map((e, t) => jsx('div', {
      'data-testid': `design-linter-subscribed-library-item-${t}`,
      'children': jsx(nU, {
        itemRecordingKey: `subscribed-${t}`,
        library: e,
        checked: l[e.library_key] || !1,
        setChecked: t => i(e.library_key, t)
      })
    }, e.library_key))
  }) : null;
}
function nH({
  usedInThisFile: e,
  usedInThisFileStatus: t,
  checkedStates: l,
  setLibraryCheckedState: i,
  setLibrarySubscribeCallback: r
}) {
  return t === _$$oV.LOADING ? jsx(nF, {
    numPlaceholderLibraries: 1
  }) : t === _$$oV.CONTENT ? jsx(Fragment, {
    children: e.data?.map((e, t) => jsx('div', {
      'data-testid': `design-linter-in-file-library-item-${t}`,
      'children': jsx(nU, {
        itemRecordingKey: `in-file-${t}`,
        library: e,
        checked: l[e.library_key] || !1,
        setChecked: t => i(e.library_key, t),
        setLibrarySubscribeCallback: r
      })
    }, e.library_key))
  }) : null;
}
function nG({
  checkedStates: e,
  setLibraryCheckedState: t
}) {
  let l = selectCurrentFile();
  let {
    url,
    shouldCover
  } = _$$t2();
  let s = useAtomWithSubscription($c);
  return l && s ? jsx('div', {
    'data-testid': 'design-linter-local-library-item',
    'children': jsx(nK, {
      id: l.key,
      itemRecordingKey: 'local-0',
      checked: e[l.key] || !1,
      setChecked: t.bind(null, l.key),
      contentComponent: jsx(nq, {
        thumbnailUrl: url,
        name: l.name,
        headerComponent: jsx('span', {
          ...Ay.props(nX.listItemHeader),
          children: l.name
        }),
        subheader: l.team?.name ?? getI18nString('fullscreen.filename_view.drafts'),
        coverThumbnail: shouldCover
      })
    })
  }, l.key) : null;
}
function nU({
  itemRecordingKey: e,
  library: t,
  checked: l,
  setChecked: i,
  setLibrarySubscribeCallback: r
}) {
  let {
    subscribe
  } = _$$_(t);
  return jsx(nK, {
    id: t.library_key,
    checked: l,
    itemRecordingKey: e,
    setChecked: i,
    contentComponent: jsx(nW, {
      library: t
    }),
    subscribeCallback: subscribe,
    setLibrarySubscribeCallback: r
  });
}
function nq({
  thumbnailUrl: e,
  name: t,
  subheader: l,
  headerComponent: i,
  coverThumbnail: r = !0
}) {
  return jsxs('div', {
    className: 'x78zum5 x6s0dn4 x1nfngrj',
    children: [jsx(_$$D, {
      thumbnailUrl: e ?? null,
      coverThumbnail: r,
      name: t
    }), jsxs('div', {
      className: 'x98rzlu x78zum5 xdt5ytf',
      children: [jsx('span', {
        ...Ay.props(nX.listItemHeader),
        children: i
      }), l && jsx(_$$G, {
        ...Ay.props(nX.listItemSubheader),
        text: l
      })]
    })]
  });
}
function nW({
  library: e
}) {
  let t = isPublishedTeamLibrary(e);
  let l = !t || e.thumbnail_guid !== null;
  let i = t ? e.team_name : e.community_author_name;
  return jsx(nq, {
    thumbnailUrl: e.thumbnail_url,
    name: e.library_name,
    subheader: i,
    headerComponent: jsx(_$$C, {
      publishedLibrary: e
    }),
    coverThumbnail: l
  });
}
function nK({
  id: e,
  itemRecordingKey: t,
  checked: l,
  setChecked: i,
  contentComponent: r,
  subscribeCallback: s,
  setLibrarySubscribeCallback: o
}) {
  return jsxs('div', {
    ...Ay.props(nX.listItem, l && nX.selectedListItem),
    children: [jsx(Label, {
      className: 'xgqk73l',
      htmlFor: e,
      children: r
    }), jsx('div', {
      className: 'x8x9d4c',
      children: jsx(ManuallyLabeledCheckbox, {
        id: e,
        checked: l,
        onChange: t => {
          i(t);
          s && o && o(e, s);
        },
        recordingKey: generateRecordingKey('design-linter-library-list', t)
      })
    })]
  });
}
let nX = {
  listItem: {
    display: 'x78zum5',
    position: 'x1n2onr6',
    alignItems: 'x6s0dn4',
    textAlign: 'xdpxx8g',
    color: 'x1akne3o',
    boxSizing: 'x9f619',
    marginBottom: 'x1ef8nbk',
    padding: 'x17f4yl9',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    border: 'x1bamp8i',
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    borderRadius: 'x19y5rnk',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    backgroundColor: 'x1yjdb4r xv2f06h',
    $$css: !0
  },
  selectedListItem: {
    borderColor: 'x1va2ikv',
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: !0
  },
  listItemHeader: {
    ...textDisplayConfig.textBodyMedium,
    width: 'x1oysuqx',
    $$css: !0
  },
  listItemSubheader: {
    ...textDisplayConfig.textBodyMedium,
    color: 'x1n0bwc9',
    width: 'x1oysuqx',
    $$css: !0
  }
};
function nQ() {
  let e = 'design-linter-library-selector';
  let [t, l] = useAtomValueAndSetter(_M);
  let r = useCallback(() => {
    t === FR.LIBRARY_SELECTOR_FROM_ALL_GROUPS_VIEW ? l(FR.ALL_VISUAL_GROUPS_VIEW) : t === FR.LIBRARY_SELECTOR_FROM_SELECTED_GROUP_VIEW ? l(FR.SELECTED_VISUAL_GROUP_VIEW) : (_$$r2()?.teardownLinter(), l(FR.LANDING_PAGE_WELCOME));
  }, [t, l]);
  let s = useModalManager({
    open: !0,
    onClose: r
  });
  let {
    subscribedLibraries,
    usedInFileLibraries
  } = nw();
  let [d, u] = useState(Bx());
  let [c, p] = useState({});
  let {
    availableLibraryKeys,
    checkedLibraryKeys
  } = useMemo(() => {
    let e = Object.keys(d);
    return {
      availableLibraryKeys: new Set(e),
      checkedLibraryKeys: new Set(e.filter(e => d[e]))
    };
  }, [d]);
  let f = useAtomWithSubscription(Ut);
  let y = nL(subscribedLibraries);
  let _ = nL(usedInFileLibraries);
  let b = _$$sf();
  let j = checkedLibraryKeys.size === 0;
  let v = useAtomWithSubscription($c);
  let C = y !== _$$oV.CONTENT && _ !== _$$oV.CONTENT && !v;
  let k = y === _$$oV.ERROR || _ === _$$oV.ERROR;
  let E = nx()(checkedLibraryKeys, f);
  let S = (C || k || j || E) && !isInteractionOrEvalMode();
  let w = t === FR.LIBRARY_SELECTOR_FROM_ALL_GROUPS_VIEW || t === FR.LIBRARY_SELECTOR_FROM_SELECTED_GROUP_VIEW;
  let R = useCallback(async () => {
    for (let [e, t] of Object.entries(c)) checkedLibraryKeys.has(e) && t();
    U_(w, subscribedLibraries.data?.length ?? 0, checkedLibraryKeys.size);
    b();
    let e = _$$r2();
    e?.resetStateForLibrarySelection();
    atomStoreManager.set(Ut, checkedLibraryKeys);
    atomStoreManager.set(W0, availableLibraryKeys);
    l(FR.ALL_VISUAL_GROUPS_VIEW);
    try {
      w ? (atomStoreManager.set(_$$E4, !1), await e?.refreshDetection()) : await e?.requestDetection();
    } catch (e) {
      console.error('Error detecting from libraries modal:', e);
      e instanceof yU ? l(FR.LANDING_PAGE_LIMIT_EXCEEDED) : e instanceof F7 && l(FR.LANDING_PAGE_NO_SELECTION);
    }
  }, [availableLibraryKeys, b, checkedLibraryKeys, l, c, subscribedLibraries, w]);
  !function (e, t, l, n) {
    let r = useRef(t.status);
    let s = e === FR.LIBRARY_SELECTOR_INITIAL;
    let o = t.status === 'loaded' && r.current !== 'loaded';
    let a = useRef(!0);
    let d = useAtomWithSubscription(qN);
    let u = useAtomWithSubscription(openFileKeyAtom);
    useEffect(() => {
      if (s && (o || t.status === 'loaded' && a.current)) {
        let e = {
          ...l
        };
        t.data.forEach(t => {
          e[t.library_key] = !0;
        });
        d && u && (e[u] = !0);
        n(t => ({
          ...t,
          ...e
        }));
      }
      r.current = t.status;
      a.current = !1;
    }, [s, t, l, n, o, d, u]);
  }(t, subscribedLibraries, d, u);
  PV(w);
  return jsx(ModalRootComponent, {
    manager: s,
    width: 385,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: jsxs('div', {
            className: 'x78zum5 x6s0dn4 x167g77z',
            children: [renderI18nText('design_linter.title'), jsx(_$$E3, {
              children: renderI18nText('general.beta')
            })]
          })
        })
      }), jsx(DialogBody, {
        children: jsx(nJ, {
          subscribedLibraries,
          usedInThisFile: usedInFileLibraries,
          subscribedLibrariesStatus: y,
          usedInThisFileStatus: _,
          checkedStates: d,
          setCheckedStates: u,
          setSubscribeCallbacks: p,
          hasLocalAssets: v
        })
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [w && jsx(Button, {
            variant: 'secondary',
            onClick: r,
            children: renderI18nText('general.cancel')
          }), jsx(Button, {
            'recordingKey': generateRecordingKey(e, 'continue-button'),
            'data-testid': `${e}-continue-button`,
            'disabled': S,
            'onClick': R,
            'children': w ? renderI18nText('general.save') : renderI18nText('general.continue')
          })]
        })
      })]
    })
  });
}
function nJ({
  subscribedLibraries: e,
  usedInThisFile: t,
  subscribedLibrariesStatus: l,
  usedInThisFileStatus: i,
  checkedStates: r,
  setCheckedStates: s,
  setSubscribeCallbacks: o,
  hasLocalAssets: a
}) {
  if (l === _$$oV.ERROR || i === _$$oV.ERROR) {
    return jsx('div', {
      ...Ay.props(n1.errorState),
      children: renderI18nText('design_linter.library_selector.error')
    });
  }
  let d = l === _$$oV.EMPTY && i === _$$oV.EMPTY && !a;
  return jsxs('div', {
    'data-testid': 'design-linter-library-selector',
    'className': 'x1b21aiw',
    'children': [jsx(n0, {}), d ? jsx(nb, {}) : jsx(nV, {
      subscribedLibraries: e,
      usedInThisFile: t,
      subscribedLibrariesStatus: l,
      usedInThisFileStatus: i,
      checkedStates: r,
      setCheckedStates: s,
      setSubscribeCallbacks: o
    })]
  });
}
function n0() {
  return jsx(Fragment, {
    children: jsxs('div', {
      className: 'x7hzu26 x1ef8nbk x1nfngrj x78zum5 xdt5ytf',
      children: [jsx('div', {
        ...Ay.props(n1.instructions),
        children: renderI18nText('design_linter.library_selector.instructions')
      }), jsx('div', {
        ...Ay.props(n1.headerText),
        children: renderI18nText('design_linter.library_selector.header')
      })]
    })
  });
}
let n1 = {
  instructions: {
    ...textDisplayConfig.textBodyMedium,
    $$css: !0
  },
  headerText: {
    ...textDisplayConfig.textBodyMediumStrong,
    $$css: !0
  },
  errorState: {
    display: 'x78zum5',
    justifyContent: 'xl56j7k',
    alignCenter: 'xxt28ha',
    padding: 'xi4wr45',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    ...textDisplayConfig.textBodyLarge,
    $$css: !0
  }
};
let n8 = memo(() => {
  let e = function () {
    let e = dG(StyleType.TEXT, null);
    let t = useAtomWithSubscription(Ut);
    return useMemo(() => {
      let l = e.libraries.filter(e => e.numStylesText > 0 && t?.has(e.libraryKey));
      return {
        ...e,
        libraries: l
      };
    }, [e, t]);
  }();
  return (function ({
    status: e,
    libraries: t
  }) {
    let [l, n] = useAtomValueAndSetter(jq);
    let r = useAtomWithSubscription(Ut);
    let s = useAtomWithSubscription(openFileAtom);
    let o = function () {
      let e = useAtomWithSubscription(n6);
      return useAtomWithSubscription(qp) ? e : [];
    }();
    let {
      status,
      stylesByFileKey
    } = Zk({
      styleType: StyleType.TEXT,
      initialSelectedSubscribedStyle: null,
      selectedLibraries: t.filter(e => e.numStylesText > 0)
    });
    let u = useMemo(() => {
      if (status === 'loading' || e === 'loading') {
        return {
          status: 'loading',
          subscribedStylesByFileKey: {},
          allStyles: [],
          localStyles: null
        };
      }
      if (isInteractionOrEvalMode()) {
        return {
          status: 'loaded',
          subscribedStylesByFileKey: {},
          allStyles: [],
          localStyles: null
        };
      }
      if (l.status === 'invalidated' || status === 'loaded') {
        let e = Object.entries(stylesByFileKey).reduce((e, [t, l]) => (r?.has(l.libraryKey) && (e[t] = l), e), {});
        let t = Object.values(e).flatMap(e => e.styles);
        let l = null;
        o.length > 0 && s?.key && s?.libraryKey && (l = {
          fileKey: s.key,
          styles: o,
          libraryKey: _$$l3(s.libraryKey)
        }, t.push(...o));
        return {
          status: 'loaded',
          subscribedStylesByFileKey: e,
          allStyles: t,
          localStyles: l
        };
      }
      return l;
    }, [status, e, l, stylesByFileKey, o, r, s?.key, s?.libraryKey]);
    useEffect(() => {
      (u.status !== l.status || u.allStyles.length !== l.allStyles.length) && n(u);
    }, [u, l, n]);
  }(e), e.libraries.length) ? jsx(MM, {
    inheritStyleKey: null,
    inheritStyleID: null,
    styleType: StyleType.TEXT,
    selectedLibraries: e.libraries
  }) : null;
});
let n6 = createReduxSubscriptionAtomWithState(e => filterStylesByType(e.library.local.styles, StyleType.TEXT));
let ia = io;
let ij = '16px';
function iv() {
  return useAtomWithSubscription(_$$aW) ? jsx(iC, {}) : null;
}
function iC() {
  let [e, t] = useState('');
  let [l, r] = useState('');
  let s = useAtomWithSubscription(uw);
  let o = useAtomWithSubscription(_$$iO) ?? {
    title: '',
    blockType: null,
    display: 'GRID',
    items: []
  };
  let a = _$$sf();
  let d = s?.current?.getBoundingClientRect() ?? {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  let u = useMemo(() => ({
    x: d.x + (o.display === 'LIST' ? d.width : 0),
    y: d.y + (o.display === 'GRID' ? d.height : 0)
  }), [d.y, d.x, d.height, d.width, o.display]);
  let c = useMemo(() => ia()(e => {
    r(e);
  }, 150), []);
  useEffect(() => (c(e), () => {
    c.cancel();
  }), [c, e]);
  let p = getI18nString('design_linter.dropdown.search_placeholder');
  let h = useRef(null);
  return jsx(_$$bL, {
    width: 260,
    maxHeight: 320,
    onClose: a,
    defaultPosition: u,
    children: jsxs(DialogContents, {
      children: [jsxs(ik, {
        children: [jsx(DialogTitle, {
          children: o.title
        }), jsx(InputComponent, {
          type: 'search',
          size: 'md',
          placeholder: p,
          ref: h,
          id: p,
          value: e,
          onChange: e => t(e)
        })]
      }), jsx(DialogBody, {
        scrolling: 'none',
        padding: 0,
        children: jsx(iE, {
          blockId: o.blockType,
          items: o.items,
          display: o.display,
          searchQuery: l
        })
      })]
    })
  });
}
function ik({
  children: e
}) {
  return jsx('div', {
    'className': 'design_linter_suggestions_modal--header--XSpwy',
    'data-fpl-header': !0,
    'children': e
  });
}
function iE({
  blockId: e,
  items: t,
  display: l,
  searchQuery: i
}) {
  let r = useAtomWithSubscription(_$$rg) ?? noop;
  let s = useAtomWithSubscription(jV) ?? (() => !1);
  return l === 'GRID' ? jsx(iR, {
    items: t,
    onSelection: r,
    checkIsSelected: s
  }) : jsx(iS, {
    blockId: e,
    items: t,
    searchQuery: i,
    onSelection: r,
    checkIsSelected: s
  });
}
function iS({
  blockId: e,
  items: t,
  searchQuery: l,
  onSelection: r,
  checkIsSelected: s
}) {
  let o = 'design-linter-dropdown';
  let a = useRef(null);
  let [d, u] = useState(null);
  let c = Xr(_$$dd);
  let p = useCallback(e => {
    u(e);
  }, [u]);
  let h = useCallback(e => {
    d === e && u(null);
  }, [d, u]);
  let m = _$$sf();
  let f = useCallback(e => {
    r && (c({
      selectedNewOption: e.length > 0,
      hadSearchTerm: l.length > 0
    }), r(e));
  }, [r, l, c]);
  let y = !0;
  let _ = bV(t, l);
  let b = useCallback(e => {
    let t = _[e];
    return t ? `${e}-${t.id}` : '';
  }, [_]);
  let j = useCallback(() => a.current, [a]);
  let v = Te({
    count: _.length,
    estimateSize: e => _[e]?.type === 'LIST_SEPARATOR' ? 16 : 32,
    getItemKey: b,
    getScrollElement: j,
    overscan: 5
  });
  useEffect(() => {
    let e = _.findIndex(e => s(e)) ?? -1;
    e >= 0 && v.scrollToIndex(e, {
      align: 'center'
    });
  }, [s, _, v]);
  _$$Dm({
    blockId: e,
    checkIsSelected: s,
    filteredItems: _,
    searchQuery: l
  });
  return jsxs(dP, {
    recordingKey: o,
    children: [_.length > 0 ? jsx('div', {
      ref: a,
      className: 'xysyzu8',
      style: {
        height: `${Math.min(v.getTotalSize() + 8, 248)}px`
      },
      children: jsx('div', {
        className: 'x1n2onr6',
        style: {
          height: `${v.getTotalSize() + 8}px`
        },
        children: v.getVirtualItems().map(e => {
          let {
            index
          } = e;
          let l = [1, index];
          let i = _[index];
          if (!i) return null;
          y = !1;
          let r = !!s && s(i);
          return jsx('div', {
            className: 'x10l6tqk x13vifvy xu96u03 xh8yej3 x78zum5 x6s0dn4',
            style: {
              height: `${e.size}px`,
              transform: `translateY(${e.start}px)`
            },
            children: jsx(iw, {
              isHighlighted: !v.isScrolling && d === index,
              isSelected: r,
              keyboardNavigationPath: l,
              listItem: i,
              onItemHighlight: () => {
                p(index);
              },
              onItemMouseLeave: () => {
                h(index);
              },
              onItemSelect: () => {
                'variable' in i && f(i.variable.node_id);
                'style' in i && f(i.style.node_id);
                m();
              },
              recordingKey: generateRecordingKey(o, `${'variable' in i ? i.variable.id : index}`)
            })
          }, e.key);
        })
      })
    }) : null, y ? jsx('div', {
      className: 'x78zum5 xl56j7k x6s0dn4 x84pvj6 x87ps6o',
      style: {
        height: Ih({
          layout: 'list'
        })
      },
      children: getI18nString('variables.binding_ui.no_search_results')
    }) : null]
  });
}
let iw = memo(({
  isHighlighted: e,
  isSelected: t,
  keyboardNavigationPath: l,
  listItem: i,
  onItemHighlight: r,
  onItemMouseLeave: s,
  onItemSelect: o,
  recordingKey: a
}) => {
  let d = useAtomWithSubscription(Ue) ?? null;
  switch (i.type) {
    case 'LIST':
      return jsx('div', {
        className: 'x1sxf85j xb3r6kr xet2fuk x1db2dqx x1iyjqo2',
        children: jsx(_J, {
          disabledVariableIds: new Set(),
          isHighlighted: e,
          isLinterItem: !0,
          isSelected: t,
          keyboardNavigationPath: l,
          onItemHighlight: r,
          onItemMouseLeave: s,
          onItemSelect: o,
          pickerType: 'fields',
          recordingKey: a,
          valuePreview: d ? d(i) : null,
          variable: i.variable,
          variableSet: i.variableSet
        }, i.id)
      });
    case 'TEXT_STYLE_LIST':
      return jsx('div', {
        className: 'x1sxf85j xb3r6kr xet2fuk x1db2dqx x1iyjqo2',
        children: jsx(m3, {
          dsStyle: i.style,
          additionalClassName: cssBuilderInstance.h24.flex.wFull.$,
          children: jsx(DL, {
            dsStyle: i.style,
            hideContextMenu: !0,
            isHighlighted: e,
            isLinterItem: !0,
            isSelected: t,
            keyboardNavigationPath: l,
            onItemContextMenu: s,
            onItemHighlight: r,
            onItemMouseLeave: s,
            onItemSelect: o,
            recordingKey: a
          })
        })
      });
    case 'LIST_SEPARATOR':
      return jsx('div', {
        className: 'xjm9jq1 x1m4xfpy xh8yej3'
      });
    case 'LIST_SECTION_HEADER':
      return jsx(KL, {
        groupName: i.name,
        fileName: i.fileName,
        secondaryText: i.secondaryText
      });
    case 'LIST_HIERARCHY_PATH':
      return jsx(Tg, {
        groupName: i.label
      });
    default:
      return null;
  }
});
function iR({
  items: e,
  onSelection: t,
  checkIsSelected: l
}) {
  let r = _$$sf();
  let s = useCallback(e => {
    t(e);
  }, [t]);
  let o = cssBuilderInstance.flex.justifyCenter.itemsCenter.colorBgSecondary.selectNone.bRadius5.$;
  let a = cssBuilderInstance.b2.colorBorderSelected.$;
  return jsx('div', {
    className: cssBuilderInstance.grid.borderBox.gridTemplateColumns2.mt8.mb8.ml16.$,
    children: e.map(e => {
      let t = !!l && l(e);
      return e.type === 'GRID' ? jsxs('div', {
        className: cssBuilderInstance.textBodyMedium.colorText.truncate.selectNone.mt8.mr16.mb8.$,
        children: [jsx(ButtonPrimitive, {
          className: ls()('design_linter_suggestions_modal--thumbnailContainer--mBL-q', o, t ? a : null),
          onClick: () => {
            s(e.id);
            r();
          },
          children: jsx(WAFImage, {
            src: e.thumbnail_url,
            alt: e.name
          })
        }), jsx('h3', {
          className: cssBuilderInstance.truncate.mt2.$,
          children: e.name
        })]
      }, e.id) : null;
    })
  });
}
function i$({
  title: e,
  getItems: t,
  getItemName: l
}) {
  let [n, r] = useState(!1);
  let s = useCallback(async () => {
    n || (r(!0), await i());
    async function i() {
      try {
        let n;
        let i = [];
        _$$l6(SourceType.USER, 'debug-linter-visual-groups', () => {
          let t = UN();
          let l = t.getCurrentPage();
          (n = t.createNode('SECTION')).fills = [{
            type: 'SOLID',
            color: {
              r: 0.9,
              g: 0.9,
              b: 0.9,
              a: 0
            },
            opacity: 1
          }];
          n.name = e;
          let i = 0;
          for (let e of l?.childrenNodes ?? []) e.x + e.size.x > i && (i = e.x + e.size.x);
          n.x = i + 100;
          n.y = 0;
        });
        let r = 0;
        let s = 40;
        let a = t();
        for (let [e, [t, d]] of Array.from(a.entries()).entries()) {
          let a;
          _$$l6(SourceType.USER, 'debug-linter-visual-groups', () => {
            let o = UN();
            if (e > 0) {
              let e = o.createNode('RECTANGLE');
              e.fills = [{
                type: 'SOLID',
                color: {
                  r: 0.3,
                  g: 0.3,
                  b: 0.3,
                  a: 1
                },
                opacity: 1
              }];
              e.size = {
                x: r,
                y: 12
              };
              e.y = s + 40;
              e.x = 40;
              n.appendChild(e);
              s += e.size.y + 80;
              i.push(e.guid);
            }
            (a = o.createNode('FRAME')).visible = !1;
            a.name = l(t);
            a.x = 40;
            a.y = s;
            a.fills = [{
              type: 'SOLID',
              color: {
                r: 0.7,
                g: 0.7,
                b: 0.7,
                a: 1
              },
              opacity: 1
            }];
            a.stackMode = 'HORIZONTAL';
            a.stackSpacing = 40;
            a.stackCounterSizing = 'RESIZE_TO_FIT_WITH_IMPLICIT_SIZE';
            a.stackTopPadding = 40;
            a.stackBottomPadding = 40;
            a.stackLeftPadding = 40;
            a.stackRightPadding = 40;
            a.frameMaskDisabled = !0;
          });
          let u = 0;
          let c = 0;
          let x = 0;
          for (let [e, t] of d.entries()) {
            await new Promise(e => setTimeout(e, 0));
            _$$l6(SourceType.USER, 'debug-linter-visual-groups', () => {
              let l;
              let i = UN();
              let r = i.get(t);
              if (!r) return;
              if (r.type === 'DOCUMENT') {
                l = i.createNode('FRAME').guid;
              } else {
                if (r.type === 'CANVAS') return;
                l = r.clone();
              }
              if (e > 0) {
                let e = i.createNode('RECTANGLE');
                e.fills = [{
                  type: 'SOLID',
                  color: {
                    r: 0.6,
                    g: 0.2,
                    b: 0.6,
                    a: 1
                  },
                  opacity: 1
                }];
                e.size = {
                  x: 4,
                  y: c + 40
                };
                e.y = 40;
                e.x = u;
                a.appendChild(e);
                u += e.size.x + 40;
              }
              let o = i.get(l);
              o && (o.y = 40, o.x = u, o.stackPositioning = 'AUTO', u += o.size.x + 40, c = Math.max(c, o.size.y), x = Math.max(x, o.size.x), r.type === 'SECTION' ? (n.appendChild(o), o.y = s) : a.appendChild(o));
            });
          }
          r = Math.max(r, u);
          s = s + c + 120;
          _$$l6(SourceType.USER, 'debug-linter-visual-groups', () => {
            if (n.size = {
              x: r + 40,
              y: s
            }, a.childCount === 0) {
              a.removeSelfAndChildren();
              return;
            }
            a.size = {
              x: u,
              y: c + 40
            };
            n.appendChild(a);
            a.visible = !0;
          });
        }
        let d = UN().getCurrentPage();
        _$$l6(SourceType.USER, 'debug-linter-visual-groups', () => {
          n && (d?.appendChild(n), function (e, t) {
            let l = UN();
            for (let n of e) {
              let e = l.get(n);
              e && (e.size = {
                x: t,
                y: e.size.y
              });
            }
          }(i, n.size.x - 80), SceneGraphHelpers?.replaceSelection([n.guid], !0), fullscreenValue.triggerAction('goto-layer', {
            args: {
              nodeId: n.guid
            }
          }));
        });
      } catch (e) {
        console.error(e);
      } finally {
        r(!1);
      }
    }
  }, [n, t, l, e]);
  return {
    isRunning: n,
    handleClick: s
  };
}
function iP() {
  let e = useAtomWithSubscription(Bd);
  let {
    isRunning,
    handleClick
  } = i$({
    title: 'Visual groups',
    getItems: useCallback(() => {
      let t = new Map();
      e.forEach(e => {
        let l = `${e.id} | ${e.type}`;
        t.set(l, Array.from(e.rootNodeIdToViolatingNodeIdSet.keys()));
      });
      return t;
    }, [e]),
    getItemName: useCallback(e => e, [])
  });
  return jsx('div', {
    className: 'xz9dl7a',
    children: jsx(Button, {
      disabled: isRunning,
      onClick: handleClick,
      iconPrefix: isRunning ? jsx(_$$k2, {}) : void 0,
      children: 'Inspect groups'
    })
  });
}
function iV() {
  let e = useAtomWithSubscription(fY);
  let {
    isRunning,
    handleClick
  } = i$({
    title: 'Visual Hashes',
    getItems: useCallback(() => function (e) {
      let t = new Map();
      let l = UN();
      e.forEach(e => {
        let n = l.get(e);
        n && traverseChildren(n, e => {
          let l = String(LinterCppBindings?.getVisualGroupFieldsHash(e.guid) ?? 0);
          let n = t.get(l) ?? [];
          t.set(l, [...n, e.guid]);
        });
      });
      return t;
    }(e?.guids ?? []), [e]),
    getItemName: useCallback(e => `Hash: ${e}`, [])
  });
  return jsx('div', {
    className: 'xz9dl7a',
    children: jsx(Button, {
      disabled: isRunning,
      onClick: handleClick,
      iconPrefix: isRunning ? jsx(_$$k2, {}) : void 0,
      children: 'Inspect Vis. G Field Hashes'
    })
  });
}
function iD() {
  let e = useAtomWithSubscription(u2);
  let t = useAtomWithSubscription(fY);
  let l = t?.guids ?? [];
  let r = function () {
    let e = useAtomWithSubscription(fY);
    let [t, l] = useState(0);
    useEffect(() => {
      let t = 0;
      if (e) {
        let l = UN();
        e.guids.forEach(e => {
          let n = l.get(e);
          n && traverseChildren(n, () => {
            t++;
          });
        });
      }
      l(t);
    }, [e]);
    return t;
  }();
  let s = useAtomWithSubscription(yd);
  let o = useAtomWithSubscription(Iy);
  let {
    status
  } = useAtomWithSubscription(v4);
  let d = function () {
    let e = useAtomWithSubscription(m7);
    return useMemo(() => Array.from(e.values()).reduce((e, t) => e + t.size, 0), [e]);
  }();
  let u = function () {
    let [e, t] = useState(0);
    let l = useAtomWithSubscription(Iy);
    let n = useAtomWithSubscription(m7);
    useEffect(() => {
      let e = new Set();
      for (let t of l.values()) {
        for (let l of t.violatingNodeIdToRootNodeId.keys()) e.add(l);
      }
      let i = new Set();
      for (let t of n.values()) {
        for (let l of t.values()) {
          for (let t of l) e.has(t.guid) || i.add(t.guid);
        }
      }
      t(i.size);
    }, [n, l]);
    return e;
  }();
  let c = function () {
    let e = useAtomWithSubscription(m7);
    return useMemo(() => {
      let t = {};
      for (let l of e.values()) {
        for (let e of l.values()) {
          for (let l of e) {
            let {
              ruleId
            } = l;
            t[ruleId] = t[ruleId] || [];
            t[ruleId].push(l);
          }
        }
      }
      return Object.entries(t).map(([e, t]) => ({
        rule: e,
        count: t.length
      }));
    }, [e]);
  }();
  return jsx(Fragment, {
    children: jsxs('div', {
      className: cssBuilderInstance.grid.gridTemplateColumns2.gap2.py8.$,
      children: [jsx('div', {
        className: cssBuilderInstance.textHeadingSmall.mr1.$,
        children: 'Linter status:'
      }), jsx('div', {
        className: cssBuilderInstance.textBodyMedium.$,
        children: e
      }), jsx('div', {
        className: cssBuilderInstance.textHeadingSmall.mr1.$,
        children: 'Variable context status:'
      }), jsx('div', {
        className: cssBuilderInstance.textBodyMedium.$,
        children: status
      }), jsx('div', {
        className: cssBuilderInstance.textHeadingSmall.mr1.$,
        children: 'Linting target:'
      }), jsx('div', {
        className: cssBuilderInstance.textBodyMedium.maxW200.overflowAuto.$,
        children: `${l.join(',')}`
      }), jsx('div', {
        className: cssBuilderInstance.textHeadingSmall.mr1.$,
        children: 'Linting target nodes:'
      }), jsx('div', {
        className: cssBuilderInstance.textBodyMedium.$,
        children: r
      }), jsx('div', {
        className: cssBuilderInstance.textHeadingSmall.mr1.$,
        children: 'Lintable nodes:'
      }), jsx('div', {
        className: cssBuilderInstance.textBodyMedium.$,
        children: s
      }), jsx('div', {
        className: cssBuilderInstance.textHeadingSmall.mr1.$,
        children: 'Visual groups:'
      }), jsx('div', {
        className: cssBuilderInstance.textBodyMedium.$,
        children: o.size
      }), jsx('div', {
        className: cssBuilderInstance.textHeadingSmall.mr1.$,
        children: 'Violations:'
      }), jsx('div', {
        className: cssBuilderInstance.textBodyMedium.$,
        children: d
      }), jsx('div', {
        className: cssBuilderInstance.textHeadingSmall.mr1.$,
        children: 'Ungrouped violations:'
      }), jsx('div', {
        className: cssBuilderInstance.textBodyMedium.$,
        children: u
      }), jsx('div', {
        className: cssBuilderInstance.textHeadingSmall.pb4.$,
        children: 'Violations per rule:'
      }), jsx('ol', {
        children: c.map(({
          rule: e,
          count: t
        }) => jsxs('span', {
          className: cssBuilderInstance.textBodyMedium.block.$,
          children: [jsx('strong', {
            children: e
          }), ': ', t]
        }, e))
      })]
    })
  });
}
function iH(e) {
  if (!e) return 'loading';
  let t = e.toFixed(3);
  return e < 1e3 ? `${t}ms` : e < 6e4 ? `${(e / 1e3).toFixed(2)}s (${t}ms)` : `${(e / 6e4).toFixed(2)}min (${t}ms)`;
}
function iG({
  label: e,
  value: t,
  isHeader: l = !1
}) {
  return jsxs(Fragment, {
    children: [jsx('div', {
      className: ls()(cssBuilderInstance.textHeadingSmall.mr1.$, {
        [cssBuilderInstance.textHeadingMedium.$]: l
      }),
      children: e
    }), jsx('div', {
      className: cssBuilderInstance.textBodyMedium.$,
      children: iH(t)
    })]
  });
}
function iU({
  items: e
}) {
  return jsx('div', {
    className: cssBuilderInstance.flex.flexColumn.overflowAuto.$,
    children: jsx('table', {
      children: jsx('tbody', {
        children: e.map(([e, t]) => jsxs('tr', {
          children: [jsx('td', {
            className: cssBuilderInstance.textBodyMedium.pr2.italic.noWrap.$,
            children: jsx('strong', {
              children: e
            })
          }), jsx('td', {
            className: cssBuilderInstance.textBodyMedium.alignLeft.$,
            children: iH(t)
          })]
        }, e))
      })
    })
  });
}
function iq() {
  let e = useAtomWithSubscription(_$$eF);
  let t = useAtomWithSubscription(L2) ?? [];
  let l = t.reduce((e, {
    duration: t
  }) => e + t, 0);
  let i = useAtomWithSubscription(_$$rT) ?? new Map();
  let r = useAtomWithSubscription(KV) ?? new Map();
  let s = useAtomWithSubscription(zZ) ?? new Map();
  return jsxs(Fragment, {
    children: [jsx('div', {
      className: cssBuilderInstance.textHeadingSmall.mr1.textHeadingMedium.$,
      children: 'Overall latency info:'
    }), jsxs('div', {
      className: cssBuilderInstance.grid.gridTemplateColumns2.gap2.py8.$,
      children: [jsx(iG, {
        label: 'Time until first group:',
        value: e
      }), jsx(iG, {
        label: 'Total loading time:',
        value: l
      }), jsx('div', {
        className: cssBuilderInstance.textHeadingSmall.mr1.$,
        children: 'Time per status:'
      }), jsx(iU, {
        items: t.map(({
          status: e,
          duration: t
        }) => [e, t])
      }), jsx('div', {
        className: cssBuilderInstance.textHeadingSmall.pb4.$,
        children: 'Detection time per rule:'
      }), jsx(iU, {
        items: Array.from(i)
      }), jsx('div', {
        className: cssBuilderInstance.textHeadingSmall.pb4.$,
        children: 'Avg detection time per rule per node:'
      }), jsx(iU, {
        items: Array.from(r)
      }), jsx('div', {
        className: cssBuilderInstance.textHeadingSmall.pb4.$,
        children: 'P95 detection time per rule:'
      }), jsx(iU, {
        items: Array.from(s).filter(([e, t]) => t !== null).map(([e, t]) => [e, t])
      })]
    })]
  });
}
function iW() {
  let e = useAtomWithSubscription(E$);
  let t = e?.rootNodeIdToViolatingNodeIdSet.size;
  let l = useAtomWithSubscription(_$$Op);
  let i = useAtomWithSubscription(_$$iS);
  let r = useAtomWithSubscription(ky);
  return jsxs(Fragment, {
    children: [jsx('div', {
      className: cssBuilderInstance.textHeadingSmall.italic.mt8.$,
      children: 'For current group:'
    }), jsxs('div', {
      className: cssBuilderInstance.grid.gridTemplateColumns2.gap2.py8.$,
      children: [jsx('div', {
        className: cssBuilderInstance.textHeadingSmall.mr1.$,
        children: 'Group size (nodes):'
      }), jsx('div', {
        className: cssBuilderInstance.textBodyMedium.$,
        children: t
      }), jsx(iG, {
        label: 'Fix loading time:',
        value: l
      }), jsx(iG, {
        label: 'Current thumbnail loading time:',
        value: i
      }), jsx(iG, {
        label: 'Suggested thumbnail loading time:',
        value: r
      })]
    })]
  });
}
function iK() {
  let e = _$$r2();
  return jsxs('div', {
    className: cssBuilderInstance.flex.flexColumn.gap4.py8.w150.$,
    children: [jsx(Button, {
      onClick: () => {
        e?.debugLinterState();
      },
      children: 'Copy linter state'
    }), jsx(iP, {}), jsx(iV, {})]
  });
}
function iX() {
  let [e, t] = useState(!1);
  return jsx('div', {
    className: cssBuilderInstance.colorBg.mx16.mt16.flex.flexColumn.b2.bRadius4.colorBorder.p4.wAuto.$,
    children: jsxs('div', {
      className: cssBuilderInstance.p4.$,
      children: [jsxs(ButtonPrimitive, {
        className: cssBuilderInstance.colorBg.wFull.$,
        onClick: () => t(!e),
        children: [jsx('span', {
          children: e ? '\u25BC' : '\u25B6'
        }), jsx('span', {
          className: cssBuilderInstance.ml2.textHeadingMedium.$,
          children: 'Linter debug view'
        })]
      }), e && jsxs(Fragment, {
        children: [jsx(iD, {}), jsx(iq, {}), jsx(iW, {}), jsx(iK, {})]
      })]
    })
  });
}
function iJ() {
  let {
    libraryData,
    hasLoaded
  } = function () {
    let {
      subscribedLibraries
    } = nw();
    let t = selectCurrentFile();
    let l = useAtomWithSubscription($c);
    let {
      url,
      shouldCover
    } = _$$t2();
    let s = useAtomWithSubscription(qN);
    let o = useAtomWithSubscription(openFileKeyAtom);
    let a = subscribedLibraries?.data?.map(e => {
      let t = isPublishedTeamLibrary(e);
      let l = !t || e.thumbnail_guid !== null;
      let i = t ? e.team_name : e.community_author_name;
      return {
        key: e.library_key.toString(),
        thumbnailUrl: e.thumbnail_url ?? null,
        name: e.library_name,
        headerComponent: jsx(_$$C, {
          publishedLibrary: e
        }),
        coverThumbnail: l,
        subheaderText: i
      };
    }) ?? [];
    if (t && o && (l && s || isInteractionOrEvalMode())) {
      let e = t.team?.name ?? getI18nString('fullscreen.filename_view.drafts');
      a.push({
        key: o,
        thumbnailUrl: url ?? null,
        name: t.name,
        headerComponent: jsx('div', {
          children: t.name
        }),
        coverThumbnail: shouldCover,
        subheaderText: e
      });
    }
    return {
      libraryData: a,
      hasLoaded: subscribedLibraries.status === 'loaded'
    };
  }();
  !function (e, t) {
    let [l, n] = useAtomValueAndSetter(Ut);
    let r = bk();
    useEffect(() => {
      (async function () {
        t && !l && (n(new Set(e.map(e => e.key))), await r());
      })();
    }, [t, e, l, n, r]);
  }(libraryData, hasLoaded);
  return jsxs('div', {
    'data-testid': 'design-linter-library-confirm-view',
    'className': 'x1bamp8i xur7f20 xtfzhjo',
    'children': [jsx(i0, {
      libraryData,
      hasLoaded
    }), jsx(i1, {
      libraryData,
      hasLoaded
    })]
  });
}
function i0({
  libraryData: e,
  hasLoaded: t
}) {
  return jsx(ScrollContainer, {
    theme: {
      rootStyle: {
        height: 168,
        backgroundColor: Tj.bgSecondary,
        ...(t ? {} : {
          pointerEvents: 'none'
        })
      }
    },
    children: jsxs('div', {
      className: 'x1iwkndl',
      children: [jsxs('div', {
        className: 'x87ps6o',
        children: [jsx('div', {
          ...Ay.props(i5.header),
          children: getI18nString('design_linter.library_confirmation_view.header')
        }), jsx('div', {
          children: getI18nString('design_linter.library_confirmation_view.instructions')
        })]
      }), t ? jsx('div', {
        'data-testid': 'design-linter-library-confirm-list',
        'className': 'x78zum5 xdt5ytf x1v2ro7d x14vqqas',
        'children': e.map((e, t) => jsx('div', {
          'data-testid': `design-linter-library-confirm-item-${t}`,
          'children': jsx(i2, {
            thumbnailUrl: e.thumbnailUrl,
            name: e.name,
            headerComponent: e.headerComponent,
            subheaderText: e.subheaderText,
            coverThumbnail: e.coverThumbnail
          })
        }, t))
      }) : jsx('div', {
        className: 'x78zum5 xdt5ytf x1v2ro7d x14vqqas',
        children: jsx(nF, {
          numPlaceholderLibraries: 3,
          useSmallVersion: !0
        })
      })]
    })
  });
}
function i1({
  libraryData: e,
  hasLoaded: t
}) {
  let l = Xr(_M);
  let r = Xr(_$$E4);
  let s = Xr(Dg);
  let o = useCallback(() => {
    l(FR.LIBRARY_SELECTOR_FROM_ALL_GROUPS_VIEW);
  }, [l]);
  let a = useCallback(() => {
    r(!1);
    s(!0);
  }, [r, s]);
  return jsxs('div', {
    className: 'xdyg6lv xiqviz9 x78zum5 x6s0dn4 x1qughib',
    children: [jsx('div', {
      ...Ay.props(i5.numLibraries),
      children: t ? getI18nString('design_linter.library_confirmation_view.num_libraries', {
        numLibraries: e.length
      }) : jsx(_$$N2, {
        noWrap: !1,
        children: getI18nString('design_linter.library_confirmation_view.loading')
      })
    }), jsxs('div', {
      className: 'x78zum5 x167g77z x2lah0s x6wrskw',
      children: [jsx('div', {
        className: 'xfawy5m',
        children: jsx(Button, {
          variant: 'link',
          onClick: o,
          disabled: !t,
          children: getI18nString('general.edit')
        })
      }), jsx(Button, {
        onClick: a,
        disabled: !t,
        children: getI18nString('general.confirm')
      })]
    })]
  });
}
function i2({
  thumbnailUrl: e,
  name: t,
  headerComponent: l,
  subheaderText: i,
  coverThumbnail: r
}) {
  return jsxs('div', {
    className: 'x78zum5 x6s0dn4 x1v2ro7d xh8yej3',
    children: [jsx(_$$B, {
      className: 'xeepkih x90ne7k xehbxol x19y5rnk',
      thumbnailUrl: e,
      coverThumbnail: r,
      name: t
    }), jsxs('div', {
      className: 'x78zum5 xdt5ytf x12mrbbr x87ps6o x98rzlu xeuugli',
      children: [l, i && jsx(_$$G, {
        className: 'x1n0bwc9',
        text: i
      })]
    })]
  });
}
let i5 = {
  header: {
    ...textDisplayConfig.textBodyMediumStrong,
    $$css: !0
  },
  numLibraries: {
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    ...textDisplayConfig.textBodySmall,
    userSelect: 'x87ps6o',
    $$css: !0
  }
};
var i6 = (e => (e.ALL_GROUPS_VIEW = 'all_groups_view', e.PREVIEW = 'preview', e))(i6 || {});
var i9 = (e => (e.COLOR = 'color', e.IMAGE = 'image', e))(i9 || {});
function re() {
  return {
    bg: 'var(--color-bg-secondary)',
    type: 'color'
  };
}
function rt(e, t) {
  let l = _$$ei(e);
  let n = wg(l);
  let [r, s] = useState(re());
  useEffect(() => {
    let l = UN().get(e);
    if (!l) return;
    let i = l.parentNode;
    for (; i;) {
      let e = i.guid;
      let l = kl(i.fills).paint;
      if (l) {
        let i = l.type;
        if (i === 'SOLID') {
          s(function (e) {
            let t = e.color;
            if (!t) return re();
            let l = e.opacity ?? 1;
            let {
              hex
            } = XF(t);
            let i = Math.floor(255 * l).toString(16);
            return {
              bg: `#${hex}${i}`,
              type: 'color'
            };
          }(l));
          return;
        }
        if (i === 'IMAGE') {
          s(rl(e, t === 'preview' ? 8 : 2, n));
          return;
        }
        if (i !== 'VIDEO' && i !== 'EMOJI') {
          s(rl(e, 2, n));
          return;
        }
        s(re());
        return;
      }
      i = i.parentNode;
    }
    let r = SceneGraphHelpers?.getNodePageBackgroundColor(e);
    s(r ? {
      bg: r,
      type: 'color'
    } : re());
  }, [n, e, t]);
  return r;
}
function rl(e, t, l) {
  let n = `${e}-${t}`;
  let i = atomStoreManager.get(g7);
  let r = i.get(n);
  let s = r?.lastEditedAtTime !== l;
  if (r && !s) {
    return {
      bg: r.src,
      type: 'image'
    };
  }
  let a = function (e, t) {
    let l = LinterCppBindings?.copyNodeToLinterScene(e);
    if (!l) return null;
    let n = new qo(FileSourceType.LINTER).get(l);
    if (!n) return null;
    for (let e of n.childrenNodes) e.removeSelfAndChildren();
    n.cornerRadius = 0;
    n.effects = [];
    let i = L6(l, t);
    return i ? Pv(i.image, new Point(i.width, i.height)) : null;
  }(e, t);
  if (!a) return re();
  if (l > 0) {
    let e = new Map(i);
    e.set(n, {
      src: a,
      lastEditedAtTime: l
    });
    atomStoreManager.set(g7, e);
  }
  return {
    bg: a,
    type: 'image'
  };
}
let rn = memo(() => {
  let e = _i();
  let t = useAtomWithSubscription(_$$E4);
  let l = useAtomWithSubscription($H);
  let r = getFeatureFlags().aip_flower_garden_auto_library_select ? 520 : 435;
  let s = l ? l.y - 40 : r;
  let o = useRef(null);
  return jsx(ScrollContainer, {
    ref: o,
    children: jsxs('div', {
      className: 'x8rdmch xctkrei x78zum5 xdt5ytf',
      style: {
        height: s
      },
      children: [t && jsx(iJ, {}), jsx('div', {
        className: 'x78zum5 xdt5ytf x98rzlu',
        children: e ? jsx(ri, {}) : jsx(rr, {
          ref: o
        })
      })]
    })
  });
});
let ri = memo(() => {
  return jsxs('div', {
    className: 'x78zum5 xdt5ytf x6s0dn4 xl56j7k x1nfngrj x98rzlu',
    children: [jsx(_$$k2, {}), jsx('span', {
      ...Ay.props(ra.loadingText),
      children: renderI18nText('design_linter.modal.loading')
    }), getFeatureFlags().aip_flower_garden_debug && jsx(iX, {})]
  });
});
let rr = forwardRef((e, t) => {
  let l = useAtomWithSubscription(Bd);
  let i = Te({
    count: l?.length ?? 0,
    getScrollElement: () => t?.current,
    overscan: 15,
    estimateSize: () => 88
  });
  return jsxs('div', {
    'data-testid': 'design-linter-groups-list',
    'children': [jsx('div', {
      ...Ay.props(ra.description),
      children: getI18nString('design_linter.modal.description')
    }), jsx('div', {
      className: 'x1n2onr6',
      style: {
        height: i.getTotalSize()
      },
      children: jsx('div', {
        className: 'x13vifvy xu96u03 x1n2onr6',
        style: {
          height: `${i.getTotalSize() + 16}px`
        },
        children: i.getVirtualItems().map(e => {
          let t = l[e.index];
          return t ? jsx(rs, {
            group: t,
            virtualRow: e
          }, e.index) : null;
        })
      })
    })]
  });
});
let rs = memo(({
  group: e,
  virtualRow: t
}) => {
  let l = Xr(NM);
  let r = Xr(_M);
  let [s, o] = useAtomValueAndSetter(Dg);
  let [a, d] = _$$M2();
  let u = useCallback(() => {
    s && o(!1);
    l(e.id);
    r(FR.SELECTED_VISUAL_GROUP_VIEW);
    _$$JT(e, 'ALL_GROUPS_VIEW');
  }, [e, r, l, o, s]);
  let c = _$$ac(e);
  return c ? createElement(ButtonPrimitive, {
    'recordingKey': generateRecordingKey('design-linter-all-groups-view', `item-${t.index}`),
    'data-testid': `design-linter-group-item-${t.index}`,
    'className': 'xf7z5ut x78zum5 xl56j7k xb3r6kr xkzqb9i x19y5rnk x7z60cl x1exxlbk xdd8jsf',
    'onClick': u,
    'key': c,
    'data-index': t.index,
    ...Ay.props(ra.groupRow, d && ra.groupRowHover),
    'style': {
      height: `${t.size}px`,
      transform: `translateY(${t.start}px)`
    },
    'ref': a
  }, jsxs('div', {
    className: 'x78zum5 x6s0dn4',
    children: [jsx(ro, {
      rootNodeId: c
    }), jsx('div', {
      className: 'xrybvsa x78zum5 xdt5ytf',
      children: jsx('div', {
        ...Ay.props(ra.groupTitle),
        children: getI18nString('design_linter.visual_group_row.title', {
          count: e?.rootNodeIdToViolatingNodeIdSet.size
        })
      })
    })]
  }), jsx('div', {
    ...Ay.props(ra.chevron, d && ra.showChevron),
    children: jsx(_$$e5, {})
  })) : null;
});
let ro = memo(({
  rootNodeId: e
}) => {
  let t = _$$ei(e);
  let l = wg(t);
  let i = yh({
    nodeId: e,
    width: 100,
    height: 100,
    shouldSkip: !1,
    version: l,
    reason: 'design-linter.thumbnail',
    regenerateAfterImagesLoaded: !0,
    isDevModeBlendedSection: !1,
    shouldCache: l > 0
  });
  let {
    bg,
    type
  } = rt(e, i6.ALL_GROUPS_VIEW);
  let o = type === i9.COLOR;
  let a = type === i9.IMAGE;
  return i ? jsx('div', {
    ...Ay.props(ra.thumbnailContainer, a && ra.backgroundImageContainer),
    style: {
      ...(o && {
        backgroundColor: bg
      }),
      ...(a && {
        backgroundImage: `url(${bg})`
      })
    },
    children: jsx(WAFImage, {
      src: i.src,
      className: 'x19kjcj4 x193iq5w xmz0i5r',
      alt: getI18nString('design_linter.penalty_box.thumbnail_alt')
    })
  }) : jsx('div', {
    className: 'xf7z5ut x78zum5 xl56j7k xb3r6kr xkzqb9i x19y5rnk x7z60cl x1exxlbk xdd8jsf',
    children: jsx(Qp, {
      className: 'x1exxlbk x14nwjz3 x19y5rnk x7z60cl',
      animationType: JR.LIGHT_SHIMMER
    })
  });
});
let ra = {
  loadingText: {
    color: 'x1n0bwc9',
    ...textDisplayConfig.textBodyLarge,
    marginLeft: 'xrybvsa',
    marginRight: 'x17qaar8',
    marginInlineStart: null,
    marginInlineEnd: null,
    textAlign: 'x2b8uid',
    userSelect: 'x87ps6o',
    $$css: !0
  },
  description: {
    ...textDisplayConfig.textBodyMedium,
    marginLeft: 'xrybvsa',
    marginInlineStart: null,
    marginInlineEnd: null,
    marginTop: 'xehsoiq',
    userSelect: 'x87ps6o',
    $$css: !0
  },
  thumbnailContainer: {
    padding: 'xf7z5ut',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    display: 'x78zum5',
    justifyContent: 'xl56j7k',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    border: 'xkzqb9i',
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderRadius: 'x19y5rnk',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    borderColor: 'x7z60cl',
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    width: 'x1exxlbk',
    height: 'xdd8jsf',
    $$css: !0
  },
  groupRowHover: {
    backgroundColor: 'x1v8gsql',
    borderRadius: 'x19y5rnk',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: !0
  },
  groupRow: {
    display: 'x78zum5',
    marginTop: 'x7hzu26',
    marginBottom: 'x1ef8nbk',
    padding: 'xf7z5ut',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    height: 'xt7dq6l',
    position: 'x10l6tqk',
    top: 'x13vifvy',
    left: 'xu96u03',
    insetInlineStart: null,
    insetInlineEnd: null,
    width: 'xh8yej3',
    justifyContent: 'x1qughib',
    $$css: !0
  },
  groupTitle: {
    ...textDisplayConfig.textBodyMedium,
    color: 'x1akne3o',
    $$css: !0
  },
  chevron: {
    opacity: 'xg01cxk',
    height: 'xxk0z11',
    width: 'xvy4d1p',
    visibility: 'xlshs6z',
    $$css: !0
  },
  showChevron: {
    opacity: 'x1hc1fzr',
    visibility: 'xnpuxes',
    $$css: !0
  },
  backgroundImageContainer: {
    backgroundRepeat: 'xiy17q3',
    backgroundSize: 'x18d0r48',
    backgroundPosition: 'x1xsqp64',
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundColor: 'x1v8gsql',
    $$css: !0
  }
};
let rd = atom(null, async e => {
  atomStoreManager.set(_$$Op, null);
  let t = performance.now();
  let l = e(E7);
  let n = _$$r2();
  if (!n) return;
  let i = Object.values(l);
  await Promise.allSettled(i.map(e => n.requestFix(e)));
  atomStoreManager.set(_$$Op, performance.now() - t);
});
let rc = {
  suggestionsViewWidth: 'var(--x1uvavt)',
  suggestionsModalHeaderHeight: 'var(--x1vqszz8)',
  previewHeaderHeight: 'var(--xkgaxnv)'
};
function r_(e, t, l) {
  let [n, r] = useState(!1);
  useEffect(() => {
    r(!0);
  }, []);
  let [s, a] = useState({
    thumbnail: null,
    status: 'loading'
  });
  let d = useRef(null);
  let {
    violationsWithFixes,
    areFixesReady
  } = function (e) {
    let t = function (e) {
      let t = useAtomWithSubscription(IZ);
      return useMemo(() => {
        if (!e) return [];
        let l = UN();
        return t.filter(t => t.guid === e || isDescendant(l, e, t.guid));
      }, [e, t]);
    }(e);
    let l = useAtomWithSubscription($C);
    let [n, r] = useState(!1);
    return {
      violationsWithFixes: useMemo(() => {
        if (!l) return [];
        let e = !0;
        let n = t.map(t => {
          let n = l.get(t.groupKey);
          n?.status === 'loading' && (e = !1);
          return {
            violation: t,
            selectedFix: n?.fix || null
          };
        });
        r(e);
        return n;
      }, [l, t]),
      areFixesReady: n
    };
  }(t);
  useEffect(() => {
    if (!n) return;
    let i = e === rQ.SUGGESTED;
    let r = async () => {
      let n = performance.now();
      i ? atomStoreManager.set(ky, null) : atomStoreManager.set(_$$iS, null);
      let r = new AbortController();
      d.current = r;
      try {
        let n;
        if (!t) return;
        let s = rb(t, e);
        let d = atomStoreManager.get(qL).get(s);
        let c = l <= 0;
        let x = d?.lastEditedAtTime !== l || c;
        let p = x;
        let h = '';
        if (i) {
          h = function (e) {
            let t = JSON.stringify(e.map(e => function ({
              violation: e,
              selectedFix: t
            }) {
              let l;
              return t?.fixContext ? `${e.guid}_${e.groupKey}_${l = t.fixContext, JSON.stringify(l, (e, t) => t && typeof t == 'object' && !Array.isArray(t) ? Object.keys(t).sort().reduce((e, l) => (e[l] = t[l], e), {}) : t)}` : `${e.guid}_${e.groupKey}`;
            }(e)).sort());
            return _$$F2(t);
          }(violationsWithFixes);
          let e = d?.violationsStateHash !== h;
          p = x || e;
        }
        if (d && !p) {
          a({
            thumbnail: d.thumbnail,
            status: 'loaded'
          });
          return;
        }
        let m = () => {
          a({
            thumbnail: null,
            status: 'error'
          });
          console.error('Error generating thumbnail: Called showError on delegate');
        };
        if ((n = i ? await rj(t, l, h, violationsWithFixes, m, r.signal) : function (e, t, l, n) {
          let i = LinterCppBindings?.copyNodeToLinterScene(e);
          if (!i) throw new Error('Current linter scene guid not found');
          let r = UN().get(e);
          if (!r) throw new Error('Original node not found');
          if (n.aborted) throw new Cu();
          let s = new qo(FileSourceType.LINTER).get(i);
          if (!s) throw new Error('Current linter scene node not found');
          let {
            activeToLinterGuidsMap,
            linterToActiveGuidsMap
          } = rv(r, s);
          return {
            thumbnail: SI({
              nodeId: i,
              linterScene: !0,
              showError: l
            })(),
            activeToLinterGuidsMap,
            linterToActiveGuidsMap,
            linterGuidsToNodeInfoMap: rC(s),
            lastEditedAtTime: t
          };
        }(t, l, m, r.signal)).thumbnail) {
          a({
            thumbnail: n.thumbnail,
            status: 'loaded'
          });
          (function (e, t) {
            let l = new Map(atomStoreManager.get(qL));
            l.set(e, t);
            atomStoreManager.set(qL, l);
          })(s, n);
          return;
        }
        console.error('Error generating thumbnail: Thumbnail delegate does not exist');
        a({
          thumbnail: null,
          status: 'error'
        });
      } catch (e) {
        console.error('Error generating thumbnail:', e);
        a({
          thumbnail: null,
          status: 'error'
        });
      } finally {
        let e = performance.now() - n;
        i ? atomStoreManager.set(ky, e) : atomStoreManager.set(_$$iS, e);
      }
    };
    if (i && !areFixesReady) {
      a({
        thumbnail: null,
        status: 'loading'
      });
      return;
    }
    r();
    return () => {
      d.current?.abort();
    };
  }, [t, l, e, violationsWithFixes, areFixesReady, n]);
  return s;
}
function rb(e, t) {
  return `${e}-${t}`;
}
async function rj(e, t, l, n, i, r) {
  let s = LinterCppBindings?.copyNodeToLinterScene(e);
  if (!s) throw new Error('Suggested linter scene guid not found');
  let a = UN().get(e);
  if (!a) throw new Error('Original node not found');
  if (r.aborted) throw new Cu();
  let d = new qo(FileSourceType.LINTER).get(s);
  if (!d) throw new Error('Suggested linter scene node not found');
  let {
    activeToLinterGuidsMap,
    linterToActiveGuidsMap
  } = rv(a, d);
  await _$$r2()?.applyFixesToThumbnailNode(n, activeToLinterGuidsMap, r);
  let x = SI({
    nodeId: s,
    linterScene: !0,
    showError: i
  })();
  if (r.aborted) throw new Cu();
  LinterCppBindings?.applyPendingLinterNodeUpdates(s);
  return {
    thumbnail: x,
    activeToLinterGuidsMap,
    linterToActiveGuidsMap,
    linterGuidsToNodeInfoMap: rC(d),
    lastEditedAtTime: t,
    violationsStateHash: l
  };
}
function rv(e, t) {
  let l = new Map();
  let n = new Map();
  let i = [];
  let r = [];
  _$$eA(e, e => {
    i.push(e.guid);
  });
  _$$eA(t, e => {
    r.push(e.guid);
  });
  i.forEach((e, t) => {
    let i = r[t];
    i && (l.set(e, i), n.set(i, e));
  });
  return {
    activeToLinterGuidsMap: l,
    linterToActiveGuidsMap: n
  };
}
function rC(e) {
  let t = new Map();
  _$$eA(e, e => {
    let l = null;
    let n = new Map();
    try {
      let t = LinterCppBindings?.getUnrotatedLinterNodeBounds(e.guid);
      if (!t) throw new Error('Result is undefined or null');
      let i = t.bounds;
      l = {
        x: i.origin.x,
        y: i.origin.y,
        width: i.size.x,
        height: i.size.y
      };
      t.childrenGuids.forEach((e, l) => {
        let i = t.childrenBounds[l];
        i && n.set(e, {
          x: i.origin.x,
          y: i.origin.y,
          width: i.size.x,
          height: i.size.y
        });
      });
    } catch (t) {
      console.error(`Failed to get unrotated bounds for linter node ${e.guid}, error:`, t);
    }
    t.set(e.guid, {
      absoluteRenderBounds: function (e, t) {
        let l = t ? e.absoluteRenderBounds : e.absoluteBoundingBox;
        return l ? {
          x: l.x,
          y: l.y,
          width: l.w,
          height: l.h
        } : null;
      }(e, !0),
      unrotatedBoundingBox: l,
      childrenUnrotatedBoundingBoxesMap: n,
      cornerRadiusValues: e.cornerRadiusValues,
      absoluteCornerPoints: LinterCppBindings?.getLinterNodeAbsoluteCornerPoints(e.guid) ?? null,
      absoluteTransform: e.absoluteTransform,
      stackTopPadding: e.stackTopPadding,
      stackBottomPadding: e.stackBottomPadding,
      stackLeftPadding: e.stackLeftPadding,
      stackRightPadding: e.stackRightPadding,
      stackSpacing: e.stackSpacing,
      gridColumnGap: e.gridColumnGap,
      gridRowGap: e.gridRowGap,
      gridColumnCount: e.gridColumnCount,
      gridRowCount: e.gridRowCount
    });
  });
  return t;
}
function rk(e) {
  let t = atomStoreManager.get(qL);
  let l = t.get(rb(e, rQ.CURRENT));
  let n = t.get(rb(e, rQ.SUGGESTED));
  let i = l?.activeToLinterGuidsMap;
  return {
    currentActiveToLinterGuidsMap: i,
    currentLinterToActiveGuidsMap: l?.linterToActiveGuidsMap,
    suggestedActiveToLinterGuidsMap: n?.activeToLinterGuidsMap,
    suggestedLinterToActiveGuidsMap: n?.linterToActiveGuidsMap
  };
}
function rT(e) {
  return 'assetType' in e ? e.assetType : '';
}
function rI(e, t) {
  let l = e.transformRect(new Rectangle(new Vector2D(t.x, t.y), new Vector2D(t.width, t.height)));
  return {
    x: l.left(),
    y: l.top(),
    width: l.width(),
    height: l.height()
  };
}
function rN(e, t) {
  let l = new Vector2D(t.x, t.y);
  let n = e.transformPoint(l);
  return {
    x: n.x,
    y: n.y
  };
}
function rA(e, t) {
  return Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
}
function rM(e, t) {
  let l = rA(e.topRight, e.topLeft);
  let n = rA(e.bottomLeft, e.topLeft);
  let i = {
    topLeft: rN(t, e.topLeft),
    topRight: rN(t, e.topRight),
    bottomRight: rN(t, e.bottomRight),
    bottomLeft: rN(t, e.bottomLeft)
  };
  let r = rA(i.topRight, i.topLeft);
  let s = rA(i.bottomLeft, i.topLeft);
  let o = Math.min(r / l, s / n);
  return {
    transformedPoints: i,
    width: r,
    height: s,
    scale: o
  };
}
function rO(e) {
  let t = AffineTransform.fromFigMatrix(e);
  return {
    normalizedRotation: (t.toDegrees() % 360 + 360) % 360,
    isFlipped: t.determinant() < 0
  };
}
let rz = {
  blueBorderHover: {
    position: 'x10l6tqk',
    borderColor: 'x1va2ikv',
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    borderStyle: 'x1y0btm7',
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    $$css: !0
  },
  pinkBgHover: {
    position: 'x10l6tqk',
    backgroundColor: 'x6zv46q',
    opacity: 'xuzhngd',
    $$css: !0
  }
};
function rB({
  overlayInfo: e,
  imageTransform: t
}) {
  let l;
  let i;
  let r;
  let {
    ruleId,
    detectionContext,
    cornerRadiusValues,
    cornerPoints,
    absoluteTransform
  } = e;
  if (!cornerPoints) return null;
  let {
    transformedPoints,
    width,
    height,
    scale
  } = rM(cornerPoints, t);
  let m = Math.max(16 * scale, 16);
  let f = rT(detectionContext);
  if (f in _$$tY) {
    if (!(f in _$$tY)) return null;
    l = _$$tY[f].toLowerCase();
  } else {
    l = SF[ruleId].toLowerCase();
  }
  let y = l.includes('right');
  let _ = l.includes('bottom');
  let b = function (e, t, l, n, i) {
    let r = Math.min(t / (e.topLeft + e.topRight), 1);
    let s = Math.min(l / (e.topRight + e.bottomRight), 1);
    let o = Math.min(t / (e.bottomLeft + e.bottomRight), 1);
    let a = Math.min(l / (e.topLeft + e.bottomLeft), 1);
    let d = e.topLeft * Math.min(r, a);
    return {
      topLeft: d * n + 2,
      topRight: e.topRight * Math.min(r, s) * n + 2,
      bottomRight: e.bottomRight * Math.min(o, s) * n + i,
      bottomLeft: e.bottomLeft * Math.min(o, a) * n + i
    };
  }(cornerRadiusValues, width / scale, height / scale, scale, 2);
  y && _ ? (i = b.bottomRight, r = transformedPoints.bottomRight) : y && !_ ? (i = b.topRight, r = transformedPoints.topRight) : !y && _ ? (i = b.bottomLeft, r = transformedPoints.bottomLeft) : (i = b.topLeft, r = transformedPoints.topLeft);
  let {
    borderWidth,
    borderLength
  } = function (e, t, l, n, i, r, s, o) {
    let a = i ? 'bottom' : 'top';
    let d = n ? 'Right' : 'Left';
    let u = n ? r[`${a}Left`] : r[`${a}Right`];
    return {
      borderWidth: Math.max(Math.min(l + (e + 2 - u - l) / 2 - 2, o), l),
      borderLength: Math.max(Math.min(l + (t + 2 - (i ? r[`top${d}`] : r[`bottom${d}`]) - l) / 2 - 2, o), l)
    };
  }(width, height, i, y, _, b, 2, m);
  let C = y ? r.x - borderWidth : r.x - 1;
  let k = _ ? r.y - borderLength : r.y - 1;
  let {
    normalizedRotation,
    isFlipped
  } = rO(absoluteTransform);
  let w = r.x - C;
  let R = r.y - k;
  let L = {
    width: borderWidth,
    height: borderLength,
    transformOrigin: `${w}px ${R}px`,
    transform: `translate(${C}px, ${k}px) rotate(${normalizedRotation}deg)${isFlipped ? ' scaleY(-1)' : ''}`,
    [`border${_ ? 'Bottom' : 'Top'}Width`]: 2,
    [`border${y ? 'Right' : 'Left'}Width`]: 2,
    [`border${_ ? 'Bottom' : 'Top'}${y ? 'Right' : 'Left'}Radius`]: i
  };
  return jsx('div', {
    ...Ay.props(rz.blueBorderHover),
    style: L
  });
}
function rF({
  overlayInfo: e,
  imageTransform: t
}) {
  let {
    ruleId,
    unrotatedBounds,
    childrenUnrotatedBoundsMap,
    cornerPoints,
    gridColumnGap,
    gridRowGap,
    gridColumnCount,
    gridRowCount,
    absoluteTransform
  } = e;
  if (!unrotatedBounds || !cornerPoints || childrenUnrotatedBoundsMap.size === 0) return null;
  let p = rI(t, unrotatedBounds);
  let g = ruleId === _$$C3.REQUIRE_GRID_COLUMN_GAP_VARIABLES;
  let m = (g ? gridColumnCount : gridRowCount) - 1;
  let {
    width,
    height,
    scale
  } = rM(cornerPoints, t);
  let b = (g ? gridColumnGap : gridRowGap) * scale;
  let {
    normalizedRotation,
    isFlipped
  } = rO(absoluteTransform);
  let C = [];
  for (let t = 0; t < m; t++) {
    if (g) {
      let l = e.stackLeftPadding * scale;
      let n = (width - 2 * l - b * m) / gridColumnCount;
      let r = l + n * (t + 1) + b * t + p.x;
      let s = p.y;
      let o = p.x - r;
      let a = isFlipped ? p.y + p.height - s : p.y - s;
      C.push(createElement('div', {
        ...Ay.props(rz.pinkBgHover),
        key: `hover-grid-${t}`,
        style: {
          transformOrigin: `${o}px ${a}px`,
          transform: `translate(${r}px, ${s}px) rotate(${normalizedRotation}deg)`,
          width: b,
          height
        }
      }));
    } else {
      let l = e.stackTopPadding * scale;
      let n = (height - 2 * l - b * m) / gridRowCount;
      let r = l + n * (t + 1) + b * t;
      let s = p.x;
      let o = r + p.y;
      let a = p.x - s;
      let d = isFlipped ? p.y + p.height - o : p.y - o;
      C.push(createElement('div', {
        ...Ay.props(rz.pinkBgHover),
        key: `hover-grid-${t}`,
        style: {
          transformOrigin: `${a}px ${d}px`,
          transform: `translate(${s}px, ${o}px) rotate(${normalizedRotation}deg)`,
          width,
          height: b
        }
      }));
    }
  }
  return jsx(Fragment, {
    children: C
  });
}
function rP({
  overlayInfo: e,
  imageTransform: t
}) {
  let l;
  let {
    ruleId,
    detectionContext,
    cornerPoints,
    absoluteTransform
  } = e;
  if (!cornerPoints) return null;
  let {
    transformedPoints,
    width,
    height,
    scale
  } = rM(cornerPoints, t);
  let x = rT(detectionContext);
  if (x in N3) {
    if (!(x in N3)) return null;
    l = N3[x];
  } else {
    l = QX[ruleId];
  }
  let p = e[{
    paddingTop: 'stackTopPadding',
    paddingBottom: 'stackBottomPadding',
    paddingLeft: 'stackLeftPadding',
    paddingRight: 'stackRightPadding'
  }[l]] * scale;
  let g = {
    paddingTop: transformedPoints.topLeft,
    paddingBottom: transformedPoints.bottomLeft,
    paddingLeft: transformedPoints.topLeft,
    paddingRight: transformedPoints.topRight
  }[l];
  let {
    translateX,
    translateY,
    highlightWidth,
    highlightHeight
  } = {
    paddingTop: {
      translateX: g.x,
      translateY: g.y,
      highlightWidth: width,
      highlightHeight: p
    },
    paddingBottom: {
      translateX: g.x,
      translateY: g.y - p,
      highlightWidth: width,
      highlightHeight: p
    },
    paddingLeft: {
      translateX: g.x,
      translateY: g.y,
      highlightWidth: p,
      highlightHeight: height
    },
    paddingRight: {
      translateX: g.x - p,
      translateY: g.y,
      highlightWidth: p,
      highlightHeight: height
    }
  }[l];
  let {
    normalizedRotation,
    isFlipped
  } = rO(absoluteTransform);
  let v = g.x - translateX;
  let C = g.y - translateY;
  let k = `translate(${translateX}px, ${translateY}px) rotate(${normalizedRotation}deg)${isFlipped ? ' scaleY(-1)' : ''}`;
  return jsx('div', {
    ...Ay.props(rz.pinkBgHover),
    style: {
      transformOrigin: `${v}px ${C}px`,
      transform: k,
      width: highlightWidth,
      height: highlightHeight
    }
  });
}
function rV({
  overlayInfo: e,
  imageTransform: t
}) {
  let {
    ruleId,
    detectionContext,
    unrotatedBounds,
    childrenUnrotatedBoundsMap,
    cornerPoints,
    stackSpacing,
    absoluteTransform
  } = e;
  if (!unrotatedBounds || !cornerPoints || childrenUnrotatedBoundsMap.size === 0) return null;
  let c = rI(t, unrotatedBounds);
  let x = Array.from(childrenUnrotatedBoundsMap.entries()).map(([e, l]) => ({
    guid: e,
    bounds: rI(t, l)
  }));
  let p = rT(detectionContext);
  let g = ruleId === _$$C3.REQUIRE_HORIZONTAL_SPACING_VARIABLES || p === 'STACK_SPACING_HORIZONTAL';
  let m = x.sort((e, t) => g ? e.bounds.x - t.bounds.x : e.bounds.y - t.bounds.y);
  let {
    width,
    height,
    scale
  } = rM(cornerPoints, t);
  let b = stackSpacing * scale;
  let {
    normalizedRotation,
    isFlipped
  } = rO(absoluteTransform);
  let C = [];
  for (let e = 0; e < m.length - 1; e++) {
    let t = m[e];
    if (!t) continue;
    let l = `${t.guid}`;
    if (g) {
      let e = t.bounds.x + t.bounds.width;
      let n = c.y;
      let r = c.x - e;
      let s = isFlipped ? c.y + c.height - n : c.y - n;
      C.push(createElement('div', {
        ...Ay.props(rz.pinkBgHover),
        key: l,
        style: {
          transformOrigin: `${r}px ${s}px`,
          transform: `translate(${e}px, ${n}px) rotate(${normalizedRotation}deg)`,
          width: b,
          height
        }
      }));
    } else {
      let e = t.bounds.y + t.bounds.height;
      let n = c.x;
      let r = c.x - n;
      let s = isFlipped ? c.y + c.height - e : c.y - e;
      C.push(createElement('div', {
        ...Ay.props(rz.pinkBgHover),
        key: l,
        style: {
          transformOrigin: `${r}px ${s}px`,
          transform: `translate(${n}px, ${e}px) rotate(${normalizedRotation}deg)`,
          width,
          height: b
        }
      }));
    }
  }
  return jsx(Fragment, {
    children: C
  });
}
let rD = createContext(null);
function rH({
  children: e,
  value: t
}) {
  return jsx(rD.Provider, {
    value: t,
    children: e
  });
}
function rG(e) {
  let t = useContext(rD);
  return t ? jsx(rU, {
    ...e,
    ...t
  }) : null;
}
let rU = memo(e => {
  let {
    overlayInfoList,
    transform
  } = e;
  return jsx(Fragment, {
    children: overlayInfoList.map((e, t) => jsx('div', {
      children: jsx(rq, {
        overlayInfo: e,
        imageTransform: transform
      })
    }, t))
  });
});
function rq({
  overlayInfo: e,
  imageTransform: t
}) {
  switch (e.ruleId) {
    case _$$C3.REQUIRE_BOTTOM_LEFT_CORNER_RADIUS_VARIABLES:
    case _$$C3.REQUIRE_BOTTOM_RIGHT_CORNER_RADIUS_VARIABLES:
    case _$$C3.REQUIRE_TOP_LEFT_CORNER_RADIUS_VARIABLES:
    case _$$C3.REQUIRE_TOP_RIGHT_CORNER_RADIUS_VARIABLES:
      return jsx(rB, {
        overlayInfo: e,
        imageTransform: t
      });
    case _$$C3.REQUIRE_HORIZONTAL_SPACING_VARIABLES:
    case _$$C3.REQUIRE_VERTICAL_SPACING_VARIABLES:
      return jsx(rK, {
        overlayInfo: e,
        imageTransform: t
      });
    case _$$C3.REQUIRE_GRID_COLUMN_GAP_VARIABLES:
    case _$$C3.REQUIRE_GRID_ROW_GAP_VARIABLES:
      return jsx(rX, {
        overlayInfo: e,
        imageTransform: t
      });
    case _$$C3.REQUIRE_TOP_PADDING_VARIABLES:
    case _$$C3.REQUIRE_BOTTOM_PADDING_VARIABLES:
    case _$$C3.REQUIRE_LEFT_PADDING_VARIABLES:
    case _$$C3.REQUIRE_RIGHT_PADDING_VARIABLES:
      return jsx(rZ, {
        overlayInfo: e,
        imageTransform: t
      });
    case _$$C3.REQUIRE_ASSETS_FROM_SELECTED_LIBRARIES:
      let {
        detectionContext
      } = e;
      if (!('assetType' in detectionContext)) return null;
      switch (detectionContext.assetType) {
        case 'RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS':
        case 'RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS':
        case 'RECTANGLE_TOP_LEFT_CORNER_RADIUS':
        case 'RECTANGLE_TOP_RIGHT_CORNER_RADIUS':
          return jsx(rB, {
            overlayInfo: e,
            imageTransform: t
          });
        case 'STACK_SPACING_HORIZONTAL':
        case 'STACK_SPACING_VERTICAL':
          return jsx(rK, {
            overlayInfo: e,
            imageTransform: t
          });
        case 'STACK_PADDING_TOP':
        case 'STACK_PADDING_BOTTOM':
        case 'STACK_PADDING_LEFT':
        case 'STACK_PADDING_RIGHT':
          return jsx(rZ, {
            overlayInfo: e,
            imageTransform: t
          });
        default:
          return jsx(rW, {
            overlayInfo: e,
            imageTransform: t
          });
      }
    default:
      return jsx(rW, {
        overlayInfo: e,
        imageTransform: t
      });
  }
}
function rW({
  overlayInfo: e,
  imageTransform: t
}) {
  let {
    cornerPoints,
    absoluteTransform
  } = e;
  if (!cornerPoints) return null;
  let {
    transformedPoints,
    width,
    height
  } = rM(cornerPoints, t);
  let {
    normalizedRotation,
    isFlipped
  } = rO(absoluteTransform);
  let u = transformedPoints.topLeft.x - 2;
  let c = transformedPoints.topLeft.y - 2;
  let x = transformedPoints.topLeft.x - u;
  let p = transformedPoints.topLeft.y - c;
  let g = `translate(${u}px, ${c}px) rotate(${normalizedRotation}deg)${isFlipped ? ' scaleY(-1)' : ''}`;
  return jsx('div', {
    ...Ay.props(rz.blueBorderHover),
    style: {
      transformOrigin: `${x}px ${p}px`,
      transform: g,
      borderWidth: 2,
      width,
      height
    }
  });
}
function rK({
  overlayInfo: e,
  imageTransform: t
}) {
  return jsxs(Fragment, {
    children: [!e.isNested && jsx(rW, {
      overlayInfo: e,
      imageTransform: t
    }), jsx(rV, {
      overlayInfo: e,
      imageTransform: t
    })]
  });
}
function rX({
  overlayInfo: e,
  imageTransform: t
}) {
  return jsxs(Fragment, {
    children: [!e.isNested && jsx(rW, {
      overlayInfo: e,
      imageTransform: t
    }), jsx(rF, {
      overlayInfo: e,
      imageTransform: t
    })]
  });
}
function rZ({
  overlayInfo: e,
  imageTransform: t
}) {
  return jsxs(Fragment, {
    children: [jsx(rW, {
      overlayInfo: e,
      imageTransform: t
    }), jsx(rP, {
      overlayInfo: e,
      imageTransform: t
    })]
  });
}
let rY = [2, 3, 6, 13, 25, 50, 75, 100, 200, 300, 1e3];
var rQ = (e => (e.CURRENT = 'current', e.SUGGESTED = 'suggested', e))(rQ || {});
let rJ = memo(() => {
  let {
    rootNodeId
  } = function () {
    let e = useAtomWithSubscription(E$);
    let t = useAtomWithSubscription(Bp) ?? '';
    let l = useMemo(() => e && t ? e.rootNodeIdToViolatingNodeIdSet.get(t) ?? new Set() : new Set(), [t, e]);
    return {
      rootNodeId: t,
      violatingNodeIdSet: l,
      hasValidGroup: !!e
    };
  }();
  let t = _$$ei(rootNodeId);
  let l = wg(t);
  let r = r_('current', rootNodeId, l);
  let s = r_('suggested', rootNodeId, l);
  return jsx(r0, {
    nodeId: rootNodeId,
    currentImage: r,
    suggestedImage: s
  });
});
function r0({
  nodeId: e,
  currentImage: t,
  suggestedImage: l
}) {
  let i = useAtomWithSubscription($H);
  let [r, s] = function (e) {
    let t = useAtomWithSubscription(hx);
    if (!e) return [[], []];
    let l = UN();
    let n = t.filter(t => t.guid === e || isDescendant(l, e, t.guid));
    let {
      currentActiveToLinterGuidsMap,
      suggestedActiveToLinterGuidsMap
    } = rk(e);
    let {
      currentViolations,
      suggestedViolations
    } = n.reduce((e, t) => {
      let {
        guid,
        ruleId,
        detectionContext,
        nodeType
      } = t;
      let a = currentActiveToLinterGuidsMap?.get(guid);
      let d = suggestedActiveToLinterGuidsMap?.get(guid);
      a && e.currentViolations.push(new Violation({
        ruleId,
        guid: a,
        detectionContext,
        nodeType
      }));
      d && e.suggestedViolations.push(new Violation({
        ruleId,
        guid: d,
        detectionContext,
        nodeType
      }));
      return e;
    }, {
      currentViolations: [],
      suggestedViolations: []
    });
    return [currentViolations, suggestedViolations];
  }(e);
  let {
    current,
    suggested
  } = function (e, t, l) {
    let n = {
      current: null,
      suggested: null
    };
    if (!e) return n;
    let {
      currentActiveToLinterGuidsMap,
      currentLinterToActiveGuidsMap,
      suggestedActiveToLinterGuidsMap,
      suggestedLinterToActiveGuidsMap
    } = rk(e);
    let [a, d] = function (e) {
      let t = atomStoreManager.get(qL);
      let l = t.get(rb(e, rQ.CURRENT));
      let n = t.get(rb(e, rQ.SUGGESTED));
      return [l?.linterGuidsToNodeInfoMap, n?.linterGuidsToNodeInfoMap];
    }(e);
    let u = currentActiveToLinterGuidsMap?.get(e) ?? '-1:-1';
    n.current = r1(t, u, currentLinterToActiveGuidsMap, a);
    let c = suggestedActiveToLinterGuidsMap?.get(e) ?? '-1:-1';
    n.suggested = r1(l, c, suggestedLinterToActiveGuidsMap, d);
    return n;
  }(e, r, s);
  let d = rt(e, i6.PREVIEW);
  let u = t.thumbnail && l.thumbnail && t.status === 'loaded' && l.status === 'loaded';
  return jsx(EventShield, {
    eventListeners: ['onPointerDown'],
    children: jsxs('div', {
      ...xk(r8.previewContainer(i?.x, i?.y)),
      children: [jsx(r7, {}), jsxs(qW, {
        zoomPercentageOptions: rY,
        zoomOnMousePointer: !0,
        canFitZoomExceed100: !0,
        resetStateOnChangeValue: e,
        compareThumbnailSource: ProjectDevelopmentPhases.LINTER,
        children: [jsx(rH, {
          value: current,
          children: jsx(r3, {
            image: t,
            thumbnailType: 'current',
            title: getI18nString('design_linter.preview.current'),
            Overlay: rG,
            background: d
          })
        }), jsx(rH, {
          value: suggested,
          children: jsx(r3, {
            image: l,
            thumbnailType: 'suggested',
            title: getI18nString('design_linter.preview.suggested'),
            Overlay: rG,
            background: d
          })
        }), jsx('div', {
          className: 'x87ps6o x10l6tqk xfr5jun x19up5dg x11uqc5h',
          children: u && jsx(_$$UN, {})
        })]
      })]
    })
  });
}
function r1(e, t, l, n) {
  let i = n?.get(t)?.absoluteRenderBounds;
  if (!i) return null;
  let r = [];
  for (let {
    guid,
    ruleId,
    detectionContext
  } of e) {
    let a = n?.get(guid);
    if (!a) continue;
    let {
      absoluteCornerPoints,
      unrotatedBoundingBox,
      childrenUnrotatedBoundingBoxesMap,
      cornerRadiusValues,
      absoluteTransform,
      stackTopPadding,
      stackBottomPadding,
      stackLeftPadding,
      stackRightPadding,
      stackSpacing,
      gridColumnGap,
      gridRowGap,
      gridColumnCount,
      gridRowCount
    } = a;
    let C = unrotatedBoundingBox ? r2(unrotatedBoundingBox, i) : null;
    let k = absoluteCornerPoints ? {
      topLeft: r5(absoluteCornerPoints.topLeft, i),
      topRight: r5(absoluteCornerPoints.topRight, i),
      bottomLeft: r5(absoluteCornerPoints.bottomLeft, i),
      bottomRight: r5(absoluteCornerPoints.bottomRight, i)
    } : null;
    let E = new Map();
    for (let [e, t] of childrenUnrotatedBoundingBoxesMap) {
      if (t) {
        let l = r2(t, i);
        E.set(e, l);
      }
    }
    let S = function (e, t, l) {
      let n = UN();
      let i = l?.get(e);
      if (!i) return !1;
      for (let r of t) {
        if (r.guid === e) continue;
        let t = l?.get(r.guid);
        if (t && isDescendant(n, t, i)) return !0;
      }
      return !1;
    }(guid, e, l);
    r.push({
      guid,
      ruleId,
      detectionContext,
      isNested: S,
      unrotatedBounds: C,
      childrenUnrotatedBoundsMap: E,
      cornerRadiusValues,
      cornerPoints: k,
      absoluteTransform,
      stackTopPadding,
      stackBottomPadding,
      stackLeftPadding,
      stackRightPadding,
      stackSpacing,
      gridColumnGap,
      gridRowGap,
      gridColumnCount,
      gridRowCount
    });
  }
  return {
    overlayInfoList: r
  };
}
function r2(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y,
    width: e.width,
    height: e.height
  };
}
function r5(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function r3({
  image: e,
  thumbnailType: t,
  title: l,
  Overlay: i,
  background: r
}) {
  let s;
  let {
    thumbnail,
    status
  } = e;
  let d = jsx('div', {
    className: 'x78zum5 x5yr21d xh8yej3 x6s0dn4 xl56j7k x1v8gsql',
    children: jsx(_$$k2, {
      size: 'md'
    })
  });
  s = thumbnail && status === 'loaded' ? jsx(Nf, {
    image: thumbnail,
    paddingPixels: 30,
    Overlay: i,
    customLoadingIndicator: d
  }) : status === 'loading' ? d : jsx('div', {
    className: 'x78zum5 x5yr21d xh8yej3 x6s0dn4 xl56j7k x1v8gsql',
    children: renderI18nText('design_linter.preview.thumbnail_unavailable')
  });
  return jsx(r4, {
    title: l,
    thumbnailType: t,
    background: r,
    children: s
  });
}
function r4({
  title: e,
  thumbnailType: t,
  children: l,
  background: i
}) {
  let {
    bg,
    type
  } = i;
  let o = type === i9.COLOR;
  let a = type === i9.IMAGE;
  return jsxs('div', {
    ...xk(r8.comparableContainer, t === 'current' && r8.currentContainer, t === 'suggested' && r8.suggestedContainer, a && r8.backgroundImageContainer),
    style: {
      ...(o && {
        backgroundColor: bg
      }),
      ...(a && {
        backgroundImage: `url(${bg})`
      })
    },
    children: [jsx('div', {
      className: 'xuuh30 x10l6tqk x1ey2m1c x1vjfegm x87ps6o x1y1aw1k xwib8y2 x1nrll8i',
      children: jsx('span', {
        ...xk(r8.comparableTitle),
        children: e
      })
    }), l]
  });
}
let r7 = memo(() => {
  let e = useAtomWithSubscription(vu).length;
  let t = useAtomWithSubscription(QU).violationCount === 0;
  return jsx('div', {
    className: 'x78zum5 xdt5ytf x1yjdb4r xso031l x1y0btm7 x7z60cl x1vp34bk xl56j7k xb3r6kr',
    children: jsx('div', {
      ...xk(r8.previewContent),
      children: t ? null : jsx('span', {
        children: renderI18nText('design_linter.preview_header.title', {
          count: e
        })
      })
    })
  });
});
let r8 = {
  previewContainer: (e, t) => [{
    width: (rc.suggestionsViewWidth, 'x1bl4301'),
    minWidth: (rc.suggestionsViewWidth, 'x1eqyben'),
    height: (rc.suggestionsModalHeaderHeight, rc.previewHeaderHeight, 'x1f5funs'),
    borderLeftWidth: 'xe0pwq',
    borderInlineStartWidth: null,
    borderInlineEndWidth: null,
    borderStyle: 'x1y0btm7',
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: 'x7z60cl',
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: !0
  }, {
    '--width': (e => typeof e == 'number' ? `${e}px` : e != null ? e : void 0)(`calc(${e ?? 915}px - ${rc.suggestionsViewWidth})`),
    '--minWidth': (e => typeof e == 'number' ? `${e}px` : e != null ? e : void 0)(`calc(${e ?? 915}px - ${rc.suggestionsViewWidth})`),
    '--height': (e => typeof e == 'number' ? `${e}px` : e != null ? e : void 0)(`calc(${t ?? 540}px - ${rc.suggestionsModalHeaderHeight} - ${rc.previewHeaderHeight})`)
  }],
  comparableTitle: {
    ...textDisplayConfig.textBodySmall,
    color: 'x1n0bwc9',
    textAlign: 'x2b8uid',
    backgroundColor: 'x1v8gsql',
    padding: 'x9cpjcd',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    borderRadius: 'xur7f20',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: !0
  },
  comparableContainer: {
    position: 'x10l6tqk',
    width: 'x3hqpx7',
    display: 'x3nfvp2',
    flexDirection: 'xdt5ytf',
    height: 'x5yr21d',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    flexGrow: 'x1iyjqo2',
    $$css: !0
  },
  currentContainer: {
    left: 'xu96u03',
    insetInlineStart: null,
    insetInlineEnd: null,
    $$css: !0
  },
  suggestedContainer: {
    right: 'x3m8u43',
    insetInlineStart: null,
    insetInlineEnd: null,
    borderLeftWidth: 'xe0pwq',
    borderInlineStartWidth: null,
    borderInlineEndWidth: null,
    borderStyle: 'x1y0btm7',
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: 'x7z60cl',
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: !0
  },
  backgroundImageContainer: {
    backgroundRepeat: 'xiy17q3',
    backgroundSize: 'x18d0r48',
    backgroundPosition: 'x1xsqp64',
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundColor: 'x1v8gsql',
    $$css: !0
  },
  previewContent: {
    ...textDisplayConfig.textBodyMedium,
    userSelect: 'x87ps6o',
    padding: 'xiqviz9',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    display: 'x78zum5',
    whiteSpace: 'xuxw1ft',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    textOverflow: 'xlyipyv',
    $$css: !0
  }
};
function sx() {
  return jsxs('svg', {
    width: '14',
    height: '11',
    viewBox: '0 0 14 11',
    fill: 'none',
    children: [jsx('path', {
      d: 'M12.8174 2.72266C12.9706 2.49294 13.281 2.43082 13.5107 2.58398C13.7404 2.73717 13.8025 3.04762 13.6494 3.27734L8.98242 10.2773C8.89938 10.4018 8.76513 10.4832 8.61621 10.498C8.46714 10.5128 8.31881 10.4594 8.21289 10.3535L5.41309 7.55371L5.34863 7.47461C5.22088 7.28062 5.24248 7.01739 5.41309 6.84668C5.58398 6.67579 5.8479 6.65399 6.04199 6.78223L6.12012 6.84668L8.48828 9.21484L12.8174 2.72266Z',
      fill: 'var(--color-icon)'
    }), jsx('path', {
      d: 'M3.5 8C3.77614 8 4 8.22386 4 8.5C4 8.77614 3.77614 9 3.5 9H0.5C0.223858 9 0 8.77614 0 8.5C0 8.22386 0.223858 8 0.5 8H3.5Z',
      fill: 'var(--color-icon)'
    }), jsx('path', {
      d: 'M6.5 4C6.77614 4 7 4.22386 7 4.5C7 4.77614 6.77614 5 6.5 5H0.5C0.223858 5 0 4.77614 0 4.5C0 4.22386 0.223858 4 0.5 4H6.5Z',
      fill: 'var(--color-icon)'
    }), jsx('path', {
      d: 'M10.5 0C10.7761 9.66382e-08 11 0.223858 11 0.5C11 0.776142 10.7761 1 10.5 1H0.5C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 8.05319e-09 0.5 0H10.5Z',
      fill: 'var(--color-icon)'
    })]
  });
}
function sp() {
  return jsxs('svg', {
    width: '14',
    height: '11',
    viewBox: '0 0 14 11',
    fill: 'none',
    children: [jsx('path', {
      d: 'M12.6465 2.64648C12.8417 2.45122 13.1583 2.45122 13.3535 2.64648C13.5488 2.84175 13.5488 3.15825 13.3535 3.35352L10.207 6.5L13.3535 9.64648L13.418 9.72461C13.5461 9.91869 13.5244 10.1827 13.3535 10.3535C13.1827 10.5244 12.9187 10.5461 12.7246 10.418L12.6465 10.3535L9.5 7.20703L6.35352 10.3535C6.15825 10.5488 5.84175 10.5488 5.64648 10.3535C5.45122 10.1583 5.45122 9.84175 5.64648 9.64648L8.79297 6.5L5.64648 3.35352C5.45122 3.15825 5.45122 2.84175 5.64648 2.64648C5.84175 2.45122 6.15825 2.45122 6.35352 2.64648L9.5 5.79297L12.6465 2.64648Z',
      fill: 'var(--color-icon)'
    }), jsx('path', {
      d: 'M3.5 8C3.77614 8 4 8.22386 4 8.5C4 8.77614 3.77614 9 3.5 9H0.5C0.223858 9 0 8.77614 0 8.5C0 8.22386 0.223858 8 0.5 8H3.5Z',
      fill: 'var(--color-icon)'
    }), jsx('path', {
      d: 'M3.5 4C3.77614 4 4 4.22386 4 4.5C4 4.77614 3.77614 5 3.5 5H0.5C0.223858 5 0 4.77614 0 4.5C0 4.22386 0.223858 4 0.5 4H3.5Z',
      fill: 'var(--color-icon)'
    }), jsx('path', {
      d: 'M10.5 0C10.7761 9.66382e-08 11 0.223858 11 0.5C11 0.776142 10.7761 1 10.5 1H0.5C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 8.05319e-09 0.5 0H10.5Z',
      fill: 'var(--color-icon)'
    })]
  });
}
let sh = atom(null);
let sg = atom(e => {
  let t = e(sh);
  let l = e($C);
  if (!t || !l) return new Set();
  let n = new Set();
  for (let [e, i] of l) {
    let l = i?.status === 'loaded' && !!i?.fix?.fixContext;
    t.actionType === 'apply' && l ? n.add(e) : t.actionType !== 'ignore' || l || n.add(e);
  }
  return n;
});
let sm = createContext(new Map());
function sf({
  children: e,
  allGroupKeys: t,
  blockId: l
}) {
  let r = useAtomWithSubscription(sg);
  let s = useAtomWithSubscription(sh);
  let o = useMemo(() => s && s.blockId === l ? function (e, t) {
    let l = new Map();
    for (let t of e) l.set(t, 'none');
    if (t.size === 0) return l;
    let n = 0;
    for (; n < e.length;) {
      let i = e[n];
      if (!i || !t.has(i)) {
        n++;
        continue;
      }
      let r = n;
      let s = function (e, t, l) {
        let n = l;
        for (; n + 1 < e.length;) {
          let l = e[n + 1];
          if (l && t.has(l)) n++;else break;
        }
        return n;
      }(e, t, r);
      !function (e, t, l, n) {
        let i = t[l];
        let r = t[n];
        if (i && r) {
          if (l === n) {
            e.set(i, 'only');
          } else {
            e.set(i, 'first');
            e.set(r, 'last');
            for (let i = l + 1; i < n; i++) {
              let l = t[i];
              l && e.set(l, 'middle');
            }
          }
        }
      }(l, e, r, s);
      n = s + 1;
    }
    return l;
  }(t, r) : new Map(), [t, r, s, l]);
  return jsx(sm.Provider, {
    value: o,
    children: e
  });
}
function sb(e) {
  let [t, l] = useState('idle');
  return {
    applyFixToBlock: useCallback(() => {
      t !== 'running' && (atomStoreManager.set(hx, []), atomStoreManager.set(sh, null), l('running'), setTimeout(async () => {
        try {
          let t;
          let n = _$$r2();
          if (!n) throw new Error('Design linter not available');
          let i = 0;
          let r = 0;
          let s = 0;
          let o = atomStoreManager.get($C);
          let a = [];
          for (let l in e) {
            let n = e[l] ?? [];
            let d = o?.get(l);
            if (!d?.fix?.fixContext) {
              s++;
              continue;
            }
            t = d.fix.ruleId;
            i += n.length;
            r++;
            a.push({
              violations: n,
              fixContext: d.fix.fixContext
            });
          }
          await n.applyFixContextToViolations({
            violationsWithFixContexts: a
          });
          l('applied');
          DC(i, r, s, t);
        } catch {
          Lt({
            message: getI18nString('design_linter.penalty_box.fix_failed_bell'),
            icon: VisualBellIcon.EXCLAMATION,
            type: 'fix error'
          });
          _$$av();
          l('error');
        }
      }, 0));
    }, [t, e]),
    isApplying: t === 'running'
  };
}
function sj(e) {
  let t = useAtomWithSubscription($C);
  return t?.get(e) ?? {
    fix: null,
    status: 'loading'
  };
}
function sv(e) {
  return useAtomWithSubscription(VG).get(e) ?? {
    fix: null,
    status: 'loading'
  };
}
function sk({
  ignoreViolationRow: e
}) {
  return jsx(IconButton, {
    'htmlAttributes': {
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': getI18nString('design_linter.penalty_box.ignore_suggestion_tooltip')
    },
    'onClick': e,
    'aria-label': getI18nString('design_linter.penalty_box.ignore_suggestion_tooltip'),
    'children': jsx(_$$A4, {})
  });
}
function sE({
  applyFixToRow: e,
  hasFix: t
}) {
  return jsx(IconButton, {
    'htmlAttributes': t ? {
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': getI18nString('design_linter.penalty_box.apply_suggestion_tooltip')
    } : {},
    'onClick': e,
    'aria-label': t ? getI18nString('design_linter.penalty_box.apply_suggestion_tooltip') : '',
    'disabled': !t,
    'children': jsx(_$$r7, {})
  });
}
let sS = createContext(null);
function sw() {
  return useContext(sS) || '';
}
function sR({
  blockConfig: e,
  children: t,
  violationsByGroupKey: l,
  blockId: r
}) {
  let {
    getLabel,
    id
  } = e;
  let {
    applyFixToBlock,
    isApplying
  } = sb(l);
  let {
    ignoreRowsWithNoSuggestions
  } = function (e) {
    let [t, l] = useState('idle');
    return {
      ignoreRowsWithNoSuggestions: useCallback(() => {
        if (t !== 'running') {
          try {
            l('running');
            let t = _$$r2();
            if (!t) return;
            let n = Object.values(e).flat().map(e => e.violationId);
            _$$r2()?.markViolationsAsPendingIgnored(n, () => {
              let n;
              let i = 0;
              let r = 0;
              let s = 0;
              let o = atomStoreManager.get($C);
              for (let [l, a] of Object.entries(e)) {
                let e = o?.get(l);
                if (e?.fix?.fixContext) {
                  s++;
                  continue;
                }
                n = e?.fix?.ruleId;
                i++;
                r += a.length;
                let d = a.map(e => e.guid);
                t.ignoreViolationsForGuidsWithGroupKey(d, l);
              }
              l('applied');
              h5(i, r, s, n);
            });
          } catch {
            l('error');
            Gj();
          }
        }
      }, [t, e]),
      status: t
    };
  }(l);
  let c = function (e) {
    let t = useAtomWithSubscription($C);
    return (Object.keys(e) || []).every(e => {
      let l = t?.get(e);
      return l?.status !== 'loading';
    });
  }(l);
  let x = function (e) {
    let t = useAtomWithSubscription($C);
    return (Object.keys(e) || []).every(e => {
      let l = t?.get(e);
      return !l?.fix?.fixContext && l?.status !== 'loading';
    });
  }(l);
  let [p, h] = useState(!1);
  let m = Object.keys(l);
  let f = useAtomWithSubscription(kR);
  let y = r || id;
  let _ = useCallback(() => {
    if (!p) {
      atomStoreManager.set(sh, null);
      atomStoreManager.set(hx, []);
      h(!0);
      try {
        ignoreRowsWithNoSuggestions();
      } catch (e) {
        h(!1);
      }
    }
  }, [p, ignoreRowsWithNoSuggestions]);
  if (!l || Object.keys(l).length === 0 || p) return null;
  let b = f || isApplying;
  return jsx(sS.Provider, {
    value: y,
    children: jsx(sf, {
      allGroupKeys: m,
      blockId: y,
      children: jsx(sB, {
        label: getLabel(),
        isApplying: b,
        isReady: c,
        onApply: applyFixToBlock,
        onIgnore: _,
        shouldShowIgnore: x,
        children: t(b)
      }, id)
    })
  });
}
function sL({
  children: e,
  showHover: t,
  hoverSequencePosition: l,
  isBlockActionButtonHovered: i,
  hoveredActionType: r,
  ignoreViolationRow: s,
  applyFixToRow: o,
  hasFix: a,
  customContainerStyle: d,
  neverShowApplyButton: u = !1
}) {
  let c = !i && t;
  let x = c || i && r === 'ignore' && t;
  let p = (c || i && r === 'apply' && t) && !u;
  return jsx('div', {
    ...Ay.props(sD.violationRowContainer, d),
    children: jsxs('div', {
      ...Ay.props(sD.violationRowContent, (() => {
        if (!t) return null;
        switch (l) {
          case 'first':
            return sD.hoveredViolationRowContentFirst;
          case 'middle':
            return sD.hoveredViolationRowContentMiddle;
          case 'last':
            return sD.hoveredViolationRowContentLast;
          default:
            return sD.hoveredViolationRowContent;
        }
      })()),
      children: [e, t ? jsxs('div', {
        className: 'x78zum5 x6s0dn4 x1jnr06f x8x9d4c',
        children: [x && jsx(sk, {
          ignoreViolationRow: s
        }), p && o && jsx(sE, {
          applyFixToRow: o,
          hasFix: a ?? !1
        })]
      }) : null]
    })
  });
}
function sT({
  applyFixToRow: e,
  children: t,
  fixStatus: l,
  isApplying: i,
  showHover: r,
  ignoreViolationRow: s,
  hoverSequencePosition: o,
  isBlockActionButtonHovered: a,
  hoveredActionType: d
}) {
  return jsxs(sL, {
    showHover: r,
    hoverSequencePosition: o,
    isBlockActionButtonHovered: a,
    hoveredActionType: d,
    ignoreViolationRow: s,
    applyFixToRow: e,
    hasFix: l === 'loaded',
    children: [jsxs('div', {
      ...Ay.props(sD.currentValueContainer),
      children: [jsx('div', {
        ...Ay.props(sD.currentValueContent, i && sD.colorTextTertiary),
        children: t.currentValue
      }), jsx('div', {
        className: 'x78zum5 x6s0dn4 xl56j7k xvy4d1p xxk0z11',
        children: jsx(_$$o4, {
          className: 'xe5c7bq'
        })
      })]
    }), jsx(sN, {
      fixStatus: l,
      children: jsx(Fragment, {
        children: jsx('div', {
          ...Ay.props(sD.suggestedValueSizer, r && !a && sD.hoveredSuggestedValueSizer, r && a && sD.blockActionButtonHoveredSuggestedValueSizer),
          children: t.suggestedValue
        })
      })
    })]
  });
}
function sI({
  children: e,
  fixStatus: t,
  groupKey: l,
  violations: r,
  isApplying: s
}) {
  let [o, a] = useState(!1);
  let [d, u] = useState(!1);
  let c = useAtomWithSubscription(E7);
  let p = sw();
  let h = useAtomWithSubscription(sh);
  let m = useContext(sm);
  let f = useCallback(() => {
    if (!o) {
      u(!1);
      atomStoreManager.set(hx, []);
      atomStoreManager.set(sh, null);
      a(!0);
      try {
        let e = r.map(e => e.violationId);
        _$$r2()?.markViolationsAsPendingIgnored(e, () => {
          let e = r.map(e => e.guid);
          _$$r2()?.ignoreViolationsForGuidsWithGroupKey(e, l);
          let t = c[l];
          _$$dg(e.length, t?.ruleId);
        });
      } catch (e) {
        a(!1);
      }
    }
  }, [r, l, c, o]);
  let {
    applyFixToRow,
    isApplying
  } = function (e, t) {
    let [l, n] = useState('idle');
    return {
      applyFixToRow: useCallback(() => {
        l !== 'running' && (atomStoreManager.set(hx, []), atomStoreManager.set(sh, null), n('running'), setTimeout(async () => {
          let l = e[0]?.ruleId;
          try {
            let l = _$$r2();
            if (!l) throw new Error('Design linter not available');
            let i = atomStoreManager.get($C);
            let r = [];
            let s = i?.get(t);
            if (!s?.fix?.fixContext) throw new Error('No fix context available');
            r.push({
              violations: e,
              fixContext: s.fix.fixContext
            });
            await l.applyFixContextToViolations({
              violationsWithFixContexts: r
            });
            n('applied');
            _$$lX(e.length, s.fix.ruleId);
          } catch {
            Lt({
              message: getI18nString('design_linter.penalty_box.fix_failed_bell'),
              icon: VisualBellIcon.EXCLAMATION,
              type: 'fix error'
            });
            Yu(l);
            n('error');
          }
        }, 0));
      }, [l, e, t]),
      isApplying: l === 'running'
    };
  }(r, l);
  let b = m.get(l) ?? 'none';
  let j = h?.blockId === p && b !== 'none';
  return !r || r.length === 0 || o || isApplying ? null : jsx(Fragment, {
    children: jsx('div', {
      onMouseEnter: () => {
        u(!0);
        atomStoreManager.set(hx, r);
      },
      onMouseLeave: () => {
        u(!1);
        atomStoreManager.set(hx, []);
      },
      children: e.suggestionRowContent({
        showHover: (j || d) && !s,
        isApplying: s,
        ignoreViolationRow: f,
        fixStatus: t,
        applyFixToRow,
        hoverSequencePosition: b,
        isBlockActionButtonHovered: j,
        hoveredActionType: h?.actionType || null
      })
    })
  });
}
function sN({
  fixStatus: e,
  children: t
}) {
  return e === 'loading' ? jsx('div', {
    className: 'x78zum5 x6s0dn4 x19y5rnk x7z60cl xmkeg23 x1y0btm7 x1yjdb4r xxbzjz2 x1l2q4c8',
    children: jsx(Wi, {
      className: 'x5yr21d xh8yej3',
      opacity: 33,
      animationType: JR.SHIMMER
    })
  }) : jsx('div', {
    className: 'xxbzjz2 x1l2q4c8 x78zum5 x6s0dn4 x1jnr06f',
    children: t
  });
}
let sA = forwardRef(({
  onClick: e,
  type: t
}, l) => {
  return jsx(sz, {
    ref: l,
    onClick: e,
    children: e => jsx('div', {
      ...Ay.props(sD.noSuggestionFound(e)),
      children: jsx(sM, {
        type: t
      })
    })
  });
});
function sM({
  type: e
}) {
  let t = getI18nString('design_linter.penalty_box.no_suggestion_found');
  e === kQ.TEXT ? t = getI18nString('design_linter.suggestion_block.select_style') : (e === kQ.COLOR || e === kQ.NUMBER) && (t = getI18nString('design_linter.suggestion_block.select_variable'));
  return jsxs(Fragment, {
    children: [jsx(s$, {
      children: jsx(_$$G2, {})
    }), jsx(_$$G, {
      text: t
    })]
  });
}
function sO({
  label: e,
  value: t,
  isApplying: l
}) {
  let i = void 0 !== t;
  return jsxs('span', {
    ...Ay.props(sD.selectedSuggestion, i && sD.selectedSuggestionWithValue),
    'data-tooltip': e,
    'data-tooltip-type': KindEnum.TEXT,
    'children': [jsx('div', {
      ...Ay.props(sD.labelText, l && sD.colorTextTertiary),
      children: e
    }), i && jsx('div', {
      ...Ay.props(sD.valueText, l && sD.colorTextTertiary),
      children: t
    })]
  });
}
let sz = forwardRef(({
  children: e,
  onClick: t,
  tooltip: l,
  disabled: i = !1
}, r) => {
  let [s, o] = _$$M2();
  return jsx('div', {
    ref: e => {
      s(e);
      r && (typeof r == 'function' ? r(e) : r.current = e);
    },
    ...Ay.props(sD.suggestedValueContent, o && sD.hoveredSuggestedValueContent),
    children: jsx(ButtonPrimitive, {
      'onClick': t,
      'className': 'x78zum5 x6s0dn4 xjbqb8w xh8yej3 x1l2q4c8 x98rzlu',
      'data-tooltip': l,
      'data-tooltip-type': KindEnum.TEXT,
      'disabled': i,
      'children': e(o)
    })
  });
});
function sB({
  children: e,
  label: t,
  isApplying: l,
  isReady: i,
  onApply: r,
  onIgnore: s,
  shouldShowIgnore: o
}) {
  return jsxs('div', {
    'data-testid': 'design-linter-suggestion-block-container',
    'className': 'x78zum5 xdt5ytf x87ps6o xwib8y2',
    'children': [jsxs('div', {
      className: 'x78zum5 x6s0dn4 x10w6t97 x1qughib xnm25rq xnuq7ks',
      children: [jsx('div', {
        ...Ay.props(sD.titleContent),
        children: t
      }), jsx('div', {
        onMouseLeave: () => {
          atomStoreManager.set(sh, null);
        },
        className: 'x78zum5 x6s0dn4',
        children: jsx(sF, {
          label: typeof t == 'string' ? t : '',
          onApply: r,
          onIgnore: s,
          isApplying: l,
          isReady: i,
          shouldShowIgnore: o
        })
      })]
    }), e]
  });
}
function sF({
  label: e,
  isApplying: t,
  isReady: l,
  onApply: i,
  onIgnore: r,
  shouldShowIgnore: s
}) {
  let o = 'design-linter-suggestion-block';
  let a = sw();
  return l ? s ? jsx('div', {
    className: 'x1iog12x xg2d0mh',
    onMouseEnter: () => {
      atomStoreManager.set(sh, {
        blockId: a,
        actionType: 'ignore'
      });
    },
    children: jsx(IconButton, {
      'recordingKey': generateRecordingKey(o, `ignore-${a}`),
      'onClick': r,
      'data-tooltip': getI18nString('design_linter.suggestion_block.ignore_tooltip', {
        section: e.toLowerCase()
      }),
      'aria-label': getI18nString('design_linter.suggestion_block.ignore_tooltip', {
        section: e.toLowerCase()
      }),
      'data-tooltip-type': KindEnum.TEXT,
      'children': jsx(sp, {})
    })
  }) : jsx('div', {
    className: 'x1iog12x xg2d0mh',
    onMouseEnter: () => {
      atomStoreManager.set(sh, {
        blockId: a,
        actionType: 'apply'
      });
    },
    children: jsx(IconButton, {
      'recordingKey': generateRecordingKey(o, `apply-${a}`),
      'onClick': i,
      'data-tooltip': getI18nString('design_linter.suggestion_block.apply_tooltip', {
        section: e.toLowerCase()
      }),
      'aria-label': getI18nString('design_linter.suggestion_block.apply_tooltip', {
        section: e.toLowerCase()
      }),
      'data-tooltip-type': KindEnum.TEXT,
      'disabled': t,
      'children': t ? jsx(_$$k2, {
        size: 'sm'
      }) : jsx(sx, {})
    })
  }) : jsxs('div', {
    ...Ay.props(sD.blockActionButton, sD.blockActionButtonText, sD.blockActionButtonLoading, sD.blockActionButtonDisabled),
    'data-testid': 'design-linter-loading-action-button',
    'children': [jsx(_$$k2, {
      size: 'sm'
    }), getI18nString('design_linter.suggestion_block.loading')]
  });
}
function s$({
  children: e,
  isDisabled: t
}) {
  return jsx('div', {
    ...Ay.props(sD.suggestedValueIconContainer, t && sD.suggestedValueIconDisabled),
    children: e
  });
}
function sP({
  items: e,
  header: t,
  key: l
}) {
  let [r, s] = useState(!1);
  let [o, a] = useState(!1);
  return jsxs('div', {
    className: 'x78zum5 xdt5ytf',
    onMouseEnter: () => a(!0),
    onMouseLeave: () => a(!1),
    children: [t && jsxs(ButtonPrimitive, {
      'onClick': () => s(e => !e),
      ...Ay.props(sD.rowListHeader),
      'aria-label': r ? getI18nString('design_linter.suggestion_block.expand_list_aria') : getI18nString('design_linter.suggestion_block.collapse_list_aria'),
      'children': [jsx('div', {
        className: 'xmauxvm x15kz4h8 x1hshjfz x78zum5 x6s0dn4 xl56j7k',
        children: o && (r ? jsx(_$$k3, {}) : jsx(_$$O4, {}))
      }), jsx('div', {
        className: 'x78zum5 x6s0dn4 x1jnr06f',
        children: t
      })]
    }), !r && e.map(e => e && jsx('div', {
      children: e
    }, `suggestion-block-list-${l}`))]
  });
}
function sV() {
  return jsx('div', {
    className: 'xjm9jq1 xbpqucl'
  });
}
let sD = {
  rowListHeader: {
    ...textDisplayConfig.textBodyLargeStrong,
    padding: 'xp41m2r',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    paddingRight: 'xyfqnmn',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    flex: 'x5mp9sv',
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    userSelect: 'x87ps6o',
    $$css: !0
  },
  titleContent: {
    ...textDisplayConfig.textBodyMedium,
    display: 'x78zum5',
    $$css: !0
  },
  suggestedValueIconContainer: {
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    justifyContent: 'xl56j7k',
    height: 'xxk0z11',
    width: 'xvy4d1p',
    minWidth: 'xnei2rj',
    $$css: !0
  },
  suggestedValueIconDisabled: {
    opacity: 'x1ksfsxq',
    $$css: !0
  },
  blockActionButton: {
    marginLeft: 'x1iog12x',
    marginInlineStart: null,
    marginInlineEnd: null,
    gap: 'xg2d0mh',
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  blockActionButtonText: {
    ...textDisplayConfig.textBodyMedium,
    color: 'x1quhyk7',
    $$css: !0
  },
  blockActionButtonLoading: {
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    $$css: !0
  },
  blockActionButtonDisabled: {
    color: 'x1n0bwc9',
    $$css: !0
  },
  violationRowContainer: {
    display: 'x78zum5',
    padding: 'x1xq1gxn',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    width: 'x144ku6',
    height: 'x10w6t97',
    boxSizing: 'x9f619',
    $$css: !0
  },
  violationRowContent: {
    boxSizing: 'x9f619',
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    padding: 'xfawy5m',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    width: 'xe3gq44',
    gap: 'x1jnr06f',
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  hoveredViolationRowContent: {
    backgroundColor: 'x30nh5c',
    borderRadius: 'x19y5rnk',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: !0
  },
  hoveredViolationRowContentFirst: {
    backgroundColor: 'x30nh5c',
    borderTopLeftRadius: 'x5uboqo',
    borderTopRightRadius: 'xq61x4o',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderBottomLeftRadius: 'xfrllxf',
    borderBottomRightRadius: 'xjppbhk',
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    $$css: !0
  },
  hoveredViolationRowContentMiddle: {
    backgroundColor: 'x30nh5c',
    borderRadius: 'x2u8bby',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: !0
  },
  hoveredViolationRowContentLast: {
    backgroundColor: 'x30nh5c',
    borderTopLeftRadius: 'x1ia1hqs',
    borderTopRightRadius: 'x1a2w583',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderBottomLeftRadius: 'x1ym3s57',
    borderBottomRightRadius: 'x1kz06h0',
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    $$css: !0
  },
  currentValueContainer: {
    ...textDisplayConfig.textBodyMedium,
    display: 'x78zum5',
    color: 'x1n0bwc9',
    alignItems: 'x6s0dn4',
    $$css: !0
  },
  currentValueContent: {
    textOverflow: 'xlyipyv',
    whiteSpace: 'xuxw1ft',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    paddingLeft: 'x6wrskw',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    width: 'x29ncy0',
    minWidth: 'xwrg52n',
    $$css: !0
  },
  suggestedValueContent: {
    width: 'xh8yej3',
    minWidth: 'xgqtt45',
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    borderRadius: 'x19y5rnk',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    borderColor: 'x7z60cl',
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    userSelect: 'x87ps6o',
    borderWidth: 'xmkeg23',
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: 'x1y0btm7',
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    backgroundColor: 'x1yjdb4r',
    flex: 'x98rzlu',
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    paddingRight: 'xmzs88n',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    boxSizing: 'x9f619',
    $$css: !0
  },
  hoveredSuggestedValueContent: {
    backgroundColor: 'x1oqziki',
    $$css: !0
  },
  suggestedValueSizer: {
    width: 'xxbzjz2',
    height: 'x1l2q4c8',
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    $$css: !0
  },
  hoveredSuggestedValueSizer: {
    width: 'x1lb4e5t',
    $$css: !0
  },
  blockActionButtonHoveredSuggestedValueSizer: {
    width: 'x1uq5s0v',
    $$css: !0
  },
  selectedSuggestion: {
    ...textDisplayConfig.textBodyMedium,
    display: 'xrvj5dj',
    gridTemplateColumns: 'xju1xpo',
    width: 'xh8yej3',
    userSelect: 'x87ps6o',
    $$css: !0
  },
  selectedSuggestionWithValue: {
    gap: 'x167g77z',
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  labelText: {
    textOverflow: 'xlyipyv',
    whiteSpace: 'xuxw1ft',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    $$css: !0
  },
  valueText: {
    color: 'x1n0bwc9',
    $$css: !0
  },
  noSuggestionFound: e => [{
    'display': 'x78zum5',
    'alignItems': 'x6s0dn4',
    'color': (e ? Tj.text : Tj.textSecondary) == null ? null : 'xfx01vb',
    '--color-icon': (e ? Tj.iconFs : Tj.iconSecondary) == null ? null : 'xhxir3b',
    'flex': 'x98rzlu',
    'flexGrow': null,
    'flexShrink': null,
    'flexBasis': null,
    '$$css': !0
  }, {
    '--color': (e ? Tj.text : Tj.textSecondary) != null ? e ? Tj.text : Tj.textSecondary : void 0,
    '----color-icon': (e ? Tj.iconFs : Tj.iconSecondary) != null ? e ? Tj.iconFs : Tj.iconSecondary : void 0
  }],
  colorTextTertiary: {
    color: 'x3vvef7',
    $$css: !0
  }
};
function sq(e) {
  return 'libraryKey' in e && 'assetType' in e;
}
function sW(e) {
  return !!e && 'resolvedValue' in e && e.resolvedValue.type === VariableDataType.FLOAT;
}
function sK(e) {
  return !!e && 'resolvedValue' in e && e.resolvedValue.type === VariableDataType.COLOR;
}
function sX(e) {
  return !!e && 'type' in e && e.type === PrimaryWorkflowEnum.STYLE;
}
let sZ = 'suggestion_rule_blocks--chit--zCpjn';
function sY() {
  let {
    blocks,
    totalViolations
  } = useAtomWithSubscription(LG);
  let l = useMemo(() => {
    let t = blocks.flatMap(e => Object.entries(e.violationsByGroupKey).flatMap(([t, l]) => l.map(l => ({
      groupKey: t,
      violation: l,
      blockConfig: e.blockConfig
    })))).reduce((e, {
      blockConfig: t,
      groupKey: l,
      violation: n
    }) => {
      let {
        detectionContext
      } = n;
      if (!sq(detectionContext)) return e;
      let r = ((e, t) => {
        let l = ['FRAME', 'TEXT'].includes(e) ? n.nodeType : 'SHAPE';
        return ['RECTANGLE_TOP_LEFT_CORNER_RADIUS', 'RECTANGLE_TOP_RIGHT_CORNER_RADIUS', 'RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS', 'RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS'].includes(t) ? 'SHAPE-CORNER_RADIUS' : ['STACK_PADDING_LEFT', 'STACK_PADDING_RIGHT', 'STACK_PADDING_TOP', 'STACK_PADDING_BOTTOM'].includes(t) ? `${l}-PADDING` : t === 'TEXT_STYLE' ? `${l}-STYLE` : `${l}-${t}`;
      })(n.nodeType, detectionContext.assetType);
      let s = detectionContext.libraryKey;
      e[s] || (e[s] = {
        blockConfig: t,
        violationsByType: {
          'FRAME-FILL': {
            violationLists: [],
            violationsByGroupKey: {}
          },
          'FRAME-STROKE': {
            violationLists: [],
            violationsByGroupKey: {}
          },
          'FRAME-STACK_SPACING_HORIZONTAL': {
            violationLists: [],
            violationsByGroupKey: {}
          },
          'FRAME-STACK_SPACING_VERTICAL': {
            violationLists: [],
            violationsByGroupKey: {}
          },
          'FRAME-PADDING': {
            violationLists: [],
            violationsByGroupKey: {}
          },
          'TEXT-FILL': {
            violationLists: [],
            violationsByGroupKey: {}
          },
          'TEXT-STROKE': {
            violationLists: [],
            violationsByGroupKey: {}
          },
          'TEXT-STYLE': {
            violationLists: [],
            violationsByGroupKey: {}
          },
          'SHAPE-FILL': {
            violationLists: [],
            violationsByGroupKey: {}
          },
          'SHAPE-STROKE': {
            violationLists: [],
            violationsByGroupKey: {}
          },
          'SHAPE-COMPONENT': {
            violationLists: [],
            violationsByGroupKey: {}
          },
          'SHAPE-CORNER_RADIUS': {
            violationLists: [],
            violationsByGroupKey: {}
          }
        }
      });
      e[s].violationsByType[r] && (e[s].violationsByType[r].violationsByGroupKey[l] || (e[s].violationsByType[r].violationsByGroupKey[l] = [], e[s].violationsByType[r].violationLists.push({
        groupKey: l,
        violation: n
      })), e[s].violationsByType[r].violationsByGroupKey[l].push(n));
      return e;
    }, {});
    return Object.keys(t).sort().map(e => ({
      libraryKey: e,
      blockConfig: t[e].blockConfig,
      violationsByType: t[e].violationsByType
    }));
  }, [blocks]);
  return totalViolations ? jsx(Fragment, {
    children: l.map(({
      libraryKey: e,
      blockConfig: t,
      violationsByType: l
    }, r) => jsxs(_$$Fragment, {
      children: [r > 0 && jsx(sV, {}), jsx(sQ, {
        libraryKey: e,
        blockConfig: t,
        violationsByType: l
      })]
    }, `library-${e}`))
  }) : null;
}
function sQ({
  libraryKey: e,
  blockConfig: t,
  violationsByType: l
}) {
  let r = useMemo(() => Object.entries(l).filter(([e, {
    violationLists: t
  }]) => t.length > 0).map(([e, {
    violationLists: t,
    violationsByGroupKey: l
  }]) => {
    let n = {
      violationLists: t,
      violationsByGroupKey: l
    };
    switch (e) {
      case 'FRAME-FILL':
        return {
          ...n,
          key: 'frameFill',
          priority: 1,
          label: getI18nString('design_linter.suggestion_block.fill_colors.background_colors')
        };
      case 'FRAME-STROKE':
        return {
          ...n,
          key: 'frameStroke',
          priority: 2,
          label: getI18nString('design_linter.suggestion_block.stroke_colors.stroke_color')
        };
      case 'SHAPE-FILL':
        return {
          ...n,
          key: 'shapeFill',
          priority: 3,
          label: getI18nString('design_linter.suggestion_block.fill_colors.shape_colors')
        };
      case 'SHAPE-STROKE':
        return {
          ...n,
          key: 'shapeStroke',
          priority: 4,
          label: getI18nString('design_linter.suggestion_block.stroke_colors.shape_stroke_colors')
        };
      case 'TEXT-FILL':
        return {
          ...n,
          key: 'textFill',
          priority: 5,
          label: getI18nString('design_linter.suggestion_block.fill_colors.text_color')
        };
      case 'TEXT-STROKE':
        return {
          ...n,
          key: 'textStroke',
          priority: 6,
          label: getI18nString('design_linter.suggestion_block.stroke_colors.text_stroke_color')
        };
      case 'TEXT-STYLE':
        return {
          ...n,
          key: 'textStyle',
          priority: 7,
          label: getI18nString('design_linter.suggestion_block.text_style')
        };
      case 'SHAPE-CORNER_RADIUS':
        return {
          ...n,
          key: 'shapeCornerRadius',
          priority: 8,
          label: getI18nString('design_linter.suggestion_block.corner_radius')
        };
      case 'FRAME-STACK_SPACING_HORIZONTAL':
        return {
          ...n,
          key: 'frameStackSpacingHorizontal',
          priority: 9,
          label: getI18nString('design_linter.suggestion_block.horizontal_spacing')
        };
      case 'FRAME-STACK_SPACING_VERTICAL':
        return {
          ...n,
          key: 'frameStackSpacingVertical',
          priority: 10,
          label: getI18nString('design_linter.suggestion_block.vertical_spacing')
        };
      case 'FRAME-PADDING':
        return {
          ...n,
          key: 'framePadding',
          priority: 11,
          label: getI18nString('design_linter.suggestion_block.padding')
        };
      case 'SHAPE-COMPONENT':
        return {
          ...n,
          key: 'component',
          priority: 12,
          label: getI18nString('design_linter.suggestion_block.library_assets.components')
        };
      default:
        return null;
    }
  }).filter(e => e !== null).sort((e, t) => e.priority - t.priority), [l]);
  return jsx('div', {
    children: jsx(sP, {
      header: jsxs('div', {
        className: 'x87ps6o',
        children: [jsx('div', {
          ...Ay.props(s9.header),
          children: getI18nString('design_linter.suggestion_block_headers.unexpected_assets')
        }), jsx('div', {
          ...Ay.props(s9.fromLibrarySubheader),
          children: renderI18nText('design_linter.suggestion_block.assets_outside_selected_libraries', {
            name: jsx(sJ, {
              libraryKey: e
            })
          })
        })]
      }),
      items: r.map(l => jsx(sR, {
        blockConfig: {
          ...t,
          getLabel: () => l.label
        },
        blockId: `${t.id}-${e}-${l.key}`,
        violationsByGroupKey: l.violationsByGroupKey,
        children: e => jsx(s1, {
          violationLists: l.violationLists,
          violationsByGroupKey: l.violationsByGroupKey,
          isApplying: e
        })
      }, l.key))
    }, pZ.ASSETS_OUTSIDE_SELECTED_LIBRARIES)
  });
}
function sJ({
  libraryKey: e
}) {
  let {
    subscribedLibraries,
    usedInFileLibraries
  } = nw();
  let i = subscribedLibraries.status === 'loaded' ? subscribedLibraries.data.find(t => t.library_key === e) : void 0;
  let r = usedInFileLibraries.status === 'loaded' ? usedInFileLibraries.data.find(t => t.library_key === e) : void 0;
  let s = i?.library_name || r?.library_name;
  return s ? jsx(s0, {
    libraryName: s,
    libraryKey: e
  }) : null;
}
function s0({
  libraryName: e,
  libraryKey: t
}) {
  let l = useCurrentUserOrg();
  let i = isBigmaEnabledAlias3(l);
  let r = fV(t);
  let s = useAtomWithSubscription(resourceDataToSubscriptionMapAtom);
  let o = t ? s[t]?.hubFileId ?? null : null;
  return jsxs(Fragment, {
    children: [jsx('span', {
      className: 'x10gc95e',
      children: e
    }), i && r && jsx(KP, {
      libraryKey: t
    }), o && jsx(_$$E6, {
      libraryKey: t,
      showTooltip: !0
    })]
  });
}
function s1({
  violationLists: e,
  isApplying: t,
  violationsByGroupKey: l
}) {
  return jsx(Fragment, {
    children: e.map(({
      groupKey: e,
      violation: i
    }) => {
      let {
        detectionContext
      } = i;
      return sq(detectionContext) ? jsx(s2, {
        groupKey: e,
        violations: l[i.groupKey] ?? [],
        ruleId: i.ruleId,
        isApplying: t
      }, e) : null;
    })
  });
}
function s2({
  groupKey: e,
  violations: t,
  ruleId: l,
  isApplying: i
}) {
  let r = t[0];
  let {
    fix,
    status
  } = sj(e);
  if (!r?.detectionContext) return null;
  let {
    detectionContext,
    guid,
    nodeType
  } = r;
  if (!sq(detectionContext)) return null;
  let c = detectionContext.assetType === 'TEXT_STYLE';
  let x = detectionContext.assetType === 'COMPONENT';
  let p = _$$P3.includes(detectionContext.assetType);
  return jsx(sI, {
    fixStatus: status,
    groupKey: e,
    violations: t,
    isApplying: i,
    children: {
      suggestionRowContent: t => x ? jsx(sL, {
        ...t,
        customContainerStyle: s9.componentRowContainer,
        neverShowApplyButton: !0,
        children: jsx(s4, {
          context: detectionContext,
          ...t
        })
      }) : jsx(sT, {
        ...t,
        children: {
          currentValue: c ? jsx(s5, {
            context: detectionContext
          }) : jsx(s3, {
            context: detectionContext
          }),
          suggestedValue: c ? jsx(s7, {
            fix,
            groupKey: e,
            isApplying: i,
            ruleId: l,
            violatingNodeId: guid
          }) : p ? jsx(s8, {
            fix,
            groupKey: e,
            ruleId: l,
            violatingNodeId: guid,
            assetType: detectionContext.assetType,
            isApplying: i
          }) : jsx(s6, {
            fix,
            groupKey: e,
            ruleId: l,
            violatingNodeId: guid,
            nodeType,
            assetType: detectionContext.assetType,
            isApplying: i
          })
        }
      })
    }
  });
}
function s5({
  context: e
}) {
  let t = e?.assetId ?? null;
  let l = Fj(t);
  if (!e || !l) return null;
  let i = `${l.name}`;
  return jsx('span', {
    'data-tooltip': i,
    'data-tooltip-type': KindEnum.TEXT,
    'children': i
  });
}
function s3({
  context: e
}) {
  let t = useAtomWithSubscription(_$$nE);
  if (!e) return null;
  let {
    assetId
  } = e;
  let i = t[assetId];
  if (!i) return null;
  let r = `${i.name}`;
  return jsx('span', {
    'data-tooltip': r,
    'data-tooltip-type': KindEnum.TEXT,
    'children': r
  });
}
function s4({
  context: e
}) {
  let t = useSubscribedAssets(AssetFilterMode.CURRENT);
  let {
    assetId
  } = e;
  if (!t[assetId]) return null;
  let i = t[assetId];
  return jsxs('div', {
    className: 'x78zum5 x6s0dn4 xe8ttls xe3gq44',
    children: [jsx('div', {
      className: 'x6s0dn4 xkawg4k xsb15dp x1sxf85j x78zum5 x2lah0s xl56j7k xyo1k6t x187nhsf xn3w4p2',
      children: jsx(WAFImage, {
        alt: i.name,
        src: i.thumbnail_url,
        className: 'xq8v1hd xdnzh0y'
      })
    }), jsx('span', {
      'className': 'x1iyjqo2 xb3r6kr xlyipyv xuxw1ft x1nx2rwh',
      'data-tooltip': i.name,
      'data-tooltip-type': KindEnum.TEXT,
      'children': i.name
    })]
  });
}
function s7({
  fix: e,
  groupKey: t,
  isApplying: l,
  ruleId: r,
  violatingNodeId: s
}) {
  let {
    fixContext,
    valid
  } = e ?? {};
  let d = useRef(null);
  let [u, c] = useAtomValueAndSetter(uw);
  let p = Xr(_$$aW);
  let h = Xr(_$$iO);
  let m = Xr(_$$rg);
  let f = Xr(jV);
  let y = _$$sf();
  let {
    fix
  } = sv(t);
  let {
    fixContext: _fixContext
  } = fix ?? {};
  let j = fixContext?.fixes;
  let v = _fixContext?.fixes;
  let {
    allStyles,
    listItems,
    styleNodeIdToStyle
  } = _$$td({
    selectedStyles: j?.fixes ?? [],
    cachedStyles: (v?.fixes ?? []).slice(0, _$$lz)
  });
  let S = j?.fixes.length ? j?.fixes[0] : allStyles[0];
  let w = useCallback(e => !!(e?.id && sX(j?.fixes[0])) && e.id === j?.fixes[0].node_id, [j]);
  let R = useCallback(e => {
    let l = styleNodeIdToStyle[e];
    if (!l) return;
    let n = {
      ...fixContext,
      fixes: {
        suggestionId: generateUUIDv4(),
        fixes: [l]
      }
    };
    atomStoreManager.set(Sg, {
      groupKey: t,
      selectedFixItem: {
        fix: {
          ruleId: r,
          guid: s ?? '',
          valid: !0,
          fixContext: n
        },
        status: 'loaded'
      }
    });
  }, [styleNodeIdToStyle, t, fixContext, r, s]);
  let L = useCallback(() => {
    if (l) return;
    let e = !!u?.current && !!d.current;
    let t = u?.current === d.current;
    if (e && t) {
      y();
      return;
    }
    f(() => w);
    m(() => R);
    h({
      title: getI18nString('design_linter.rules.text_styles.dropdown_title'),
      blockType: pZ.ASSETS_OUTSIDE_SELECTED_LIBRARIES,
      display: 'LIST',
      items: listItems
    });
    c(d);
    p(!0);
  }, [y, u, l, w, listItems, R, c, p, f, h, m]);
  return e && valid && fixContext && sX(S) ? jsx(sz, {
    ref: d,
    onClick: L,
    tooltip: S.name,
    children: () => jsxs(Fragment, {
      children: [jsx(s$, {
        isDisabled: l,
        children: jsx(_$$J5, {
          fillStyle: S,
          className: sZ
        })
      }), jsx(sO, {
        label: S.name,
        isApplying: l
      })]
    })
  }) : jsx(sA, {
    ref: d,
    onClick: L,
    type: kQ.TEXT
  });
}
function s8({
  ruleId: e,
  fix: t,
  groupKey: l,
  violatingNodeId: r,
  assetType: s,
  isApplying: a
}) {
  let {
    fixContext,
    valid
  } = t ?? {};
  let c = useRef(null);
  let p = _$$sf();
  let [h, m] = useAtomValueAndSetter(uw);
  let f = Xr(_$$aW);
  let y = Xr(_$$iO);
  let _ = Xr(_$$rg);
  let b = Xr(jV);
  let {
    fix
  } = sv(l);
  let {
    fixContext: _fixContext2
  } = fix ?? {};
  let C = fixContext?.fixes;
  let k = _fixContext2?.fixes;
  let E = d$({
    ruleId: e,
    assetType: s
  });
  let {
    fixes,
    listItems,
    allResolvedVariables,
    variableMap
  } = Dt({
    selectedFixes: C?.fixes ?? [],
    cachedFixes: (k?.fixes ?? []).slice(0, OL),
    violatingNodeId: r,
    type: VariableResolvedDataType.FLOAT,
    scopes: E
  });
  let T = useMemo(() => {
    if (!sW(C?.fixes[0])) return fixes[0];
    let e = C?.fixes[0].variableId;
    if (!e || !allResolvedVariables) return fixes[0];
    let t = allResolvedVariables.libraryVariables[e]?.resolvedValue ?? allResolvedVariables.localVariables[e]?.resolvedValue;
    return t ? {
      variableId: e,
      resolvedValue: t
    } : fixes[0];
  }, [C, allResolvedVariables, fixes]);
  let I = useCallback(e => !!(e?.id && sW(C?.fixes[0])) && e.id === C?.fixes[0].variableId, [C]);
  let N = useCallback(t => {
    if (!allResolvedVariables) return;
    let n = allResolvedVariables.libraryVariables[t]?.resolvedValue ?? allResolvedVariables.localVariables[t]?.resolvedValue;
    if (!n) return;
    let i = {
      ...fixContext,
      fixes: {
        suggestionId: generateUUIDv4(),
        fixes: [{
          variableId: t,
          resolvedValue: n
        }]
      }
    };
    atomStoreManager.set(Sg, {
      groupKey: l,
      selectedFixItem: {
        fix: {
          ruleId: e,
          guid: r ?? '',
          valid: !0,
          fixContext: i
        },
        status: 'loaded'
      }
    });
  }, [allResolvedVariables, e, l, r, fixContext]);
  let A = useCallback(() => {
    let e = !!h?.current && !!c.current;
    let t = h?.current === c.current;
    if (e && t) {
      p();
      return;
    }
    m(c);
    f(!0);
    b(() => I);
    _(() => N);
    y({
      title: getI18nString('design_linter.rules.number_rules.dropdown_title'),
      blockType: pZ.ASSETS_OUTSIDE_SELECTED_LIBRARIES,
      display: 'LIST',
      items: listItems
    });
  }, [h, m, f, b, I, _, N, y, listItems, p]);
  if (!t || !valid || !fixContext || !fixes || fixes.length === 0 || !T || !r) {
    return jsx(sA, {
      ref: c,
      onClick: A,
      type: kQ.NUMBER
    });
  }
  let {
    variableId,
    resolvedValue
  } = T;
  let z = (variableMap ?? {})[variableId]?.name;
  let B = resolvedValue.value;
  return B && z ? jsx(sz, {
    ref: c,
    onClick: A,
    tooltip: z,
    disabled: a,
    children: () => jsxs(Fragment, {
      children: [jsx(s$, {
        isDisabled: a,
        children: jsx(_$$O3, {})
      }), jsx(sO, {
        label: z,
        value: B,
        isApplying: a
      })]
    })
  }) : jsx(sA, {
    ref: c,
    onClick: A,
    type: kQ.NUMBER
  });
}
function s6({
  ruleId: e,
  fix: t,
  groupKey: l,
  violatingNodeId: r,
  nodeType: s,
  assetType: a,
  isApplying: d
}) {
  let {
    fixContext,
    valid
  } = t ?? {};
  let p = useRef(null);
  let h = _$$sf();
  let [m, f] = useAtomValueAndSetter(uw);
  let y = Xr(_$$aW);
  let _ = Xr(_$$iO);
  let b = Xr(_$$rg);
  let j = Xr(jV);
  let {
    fix
  } = sv(l);
  let {
    fixContext: _fixContext3
  } = fix ?? {};
  let k = fixContext?.fixes;
  let E = _fixContext3?.fixes;
  let S = d$({
    ruleId: e,
    nodeType: s,
    assetType: a
  });
  let {
    fixes,
    listItems,
    allResolvedVariables,
    variableMap
  } = Dt({
    selectedFixes: k?.fixes ?? [],
    cachedFixes: (E?.fixes ?? []).slice(0, EN),
    violatingNodeId: r,
    type: VariableResolvedDataType.COLOR,
    scopes: S
  });
  let I = useMemo(() => {
    if (!sK(k?.fixes[0])) return fixes[0];
    let e = k?.fixes[0].variableId;
    if (!e || !allResolvedVariables) return fixes[0];
    let t = allResolvedVariables.libraryVariables[e]?.resolvedValue ?? allResolvedVariables.localVariables[e]?.resolvedValue;
    return t ? {
      variableId: e,
      resolvedValue: t
    } : fixes[0];
  }, [k, allResolvedVariables, fixes]);
  let N = useCallback(e => !!(e?.id && sK(k?.fixes[0])) && e.id === k?.fixes[0].variableId, [k]);
  let A = useCallback(t => {
    if (!allResolvedVariables) return;
    let n = allResolvedVariables.libraryVariables[t]?.resolvedValue ?? allResolvedVariables.localVariables[t]?.resolvedValue;
    if (!n) return;
    let i = {
      ...fixContext,
      fixes: {
        suggestionId: generateUUIDv4(),
        fixes: [{
          variableId: t,
          resolvedValue: n
        }]
      }
    };
    atomStoreManager.set(Sg, {
      groupKey: l,
      selectedFixItem: {
        fix: {
          ruleId: e,
          guid: r ?? '',
          valid: !0,
          fixContext: i
        },
        status: 'loaded'
      }
    });
  }, [allResolvedVariables, e, fixContext, l, r]);
  let M = useCallback(() => {
    let e = !!m?.current && !!p.current;
    let t = m?.current === p.current;
    if (e && t) {
      h();
      return;
    }
    f(p);
    y(!0);
    j(() => N);
    b(() => A);
    _({
      title: getI18nString('design_linter.rules.color_rules.dropdown_title'),
      blockType: pZ.ASSETS_OUTSIDE_SELECTED_LIBRARIES,
      display: 'LIST',
      items: listItems
    });
  }, [m, f, y, j, N, b, A, _, listItems, h]);
  if (!t || !valid || !fixContext || !fixes || fixes.length === 0 || !I || !r) {
    return jsx(sA, {
      ref: p,
      onClick: M,
      type: kQ.COLOR
    });
  }
  let {
    variableId,
    resolvedValue
  } = I;
  let B = (variableMap ?? {})[variableId]?.name;
  let F = resolvedValue.value;
  return F && B ? jsx(sz, {
    ref: p,
    onClick: M,
    tooltip: B,
    disabled: d,
    children: () => jsxs(Fragment, {
      children: [jsx(s$, {
        isDisabled: d,
        children: jsx(_$$J5, {
          color: F,
          opacity: F.a,
          className: sZ
        })
      }), jsx(sO, {
        label: B,
        isApplying: d
      })]
    })
  }) : jsx(sA, {
    ref: p,
    onClick: M,
    type: kQ.COLOR
  });
}
let s9 = {
  header: {
    ...textDisplayConfig.textBodyLargeStrong,
    $$css: !0
  },
  fromLibrarySubheader: {
    ...textDisplayConfig.textBodyMedium,
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    color: 'x1n0bwc9',
    $$css: !0
  },
  componentRowContainer: {
    display: 'x78zum5',
    padding: 'x1xq1gxn',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    height: 'xng8ra',
    $$css: !0
  }
};
function ol() {
  let {
    blocks,
    totalViolations
  } = useAtomWithSubscription(_$$r5);
  return totalViolations ? jsx(sP, {
    header: getI18nString('design_linter.suggestion_block_headers.color'),
    items: blocks.map(({
      blockConfig: e,
      violationsByGroupKey: t
    }) => jsx(sR, {
      blockConfig: e,
      violationsByGroupKey: t,
      children: l => jsx(Fragment, {
        children: Object.entries(t).map(([t, i]) => {
          let r = i[0];
          return jsx(on, {
            blockId: e.id,
            violations: i,
            groupKey: t,
            ruleId: r?.ruleId,
            isApplying: l
          }, t);
        })
      })
    }, e.id))
  }, pZ.BACKGROUND_COLOR) : null;
}
function on({
  blockId: e,
  groupKey: t,
  violations: l,
  ruleId: i,
  isApplying: r
}) {
  let s = l[0];
  let {
    fix,
    status
  } = sj(t);
  if (!s?.detectionContext) return null;
  let {
    detectionContext,
    guid,
    nodeType
  } = s;
  return jsx(sI, {
    fixStatus: status,
    groupKey: t,
    violations: l,
    isApplying: r,
    children: {
      suggestionRowContent: l => jsx(sT, {
        ...l,
        children: {
          currentValue: jsx(oi, {
            context: detectionContext
          }),
          suggestedValue: jsx(or, {
            blockId: e,
            fix,
            groupKey: t,
            ruleId: i,
            violatingNodeId: guid,
            nodeType,
            isApplying: r
          })
        }
      })
    }
  });
}
function oi({
  context: e
}) {
  if (!e) return null;
  let t = e.color;
  let l = e.opacity;
  let i = `${defaultColorManipulator.format(t)}${l && l < 1 ? ` \xB7 ${function (e) {
    let t = new _$$t3({
      min: 0,
      max: 100
    });
    return `${t.format(100 * e)}%`;
  }(l)}` : ''}`;
  return jsx('span', {
    'data-tooltip': i,
    'data-tooltip-type': KindEnum.TEXT,
    'children': i
  });
}
function or({
  blockId: e,
  ruleId: t,
  fix: l,
  groupKey: r,
  violatingNodeId: s,
  nodeType: a,
  isApplying: d
}) {
  let {
    fixContext,
    valid
  } = l ?? {};
  let p = useRef(null);
  let h = _$$sf();
  let [m, f] = useAtomValueAndSetter(uw);
  let y = Xr(_$$aW);
  let _ = Xr(_$$iO);
  let b = Xr(_$$rg);
  let j = Xr(jV);
  let {
    fix
  } = sv(r);
  let {
    fixContext: _fixContext4
  } = fix ?? {};
  let k = fixContext?.fixes;
  let E = _fixContext4?.fixes;
  let S = d$({
    ruleId: t,
    nodeType: a
  });
  let {
    fixes,
    listItems,
    allResolvedVariables,
    variableMap
  } = Dt({
    selectedFixes: k ?? [],
    cachedFixes: (E ?? []).slice(0, EN),
    violatingNodeId: s,
    type: VariableResolvedDataType.COLOR,
    scopes: S
  });
  let I = useMemo(() => {
    if (!k?.length) return fixes[0];
    let e = k[0]?.variableId;
    if (!e || !allResolvedVariables) return fixes[0];
    let t = allResolvedVariables.libraryVariables[e]?.resolvedValue ?? allResolvedVariables.localVariables[e]?.resolvedValue;
    return t ? {
      variableId: e,
      resolvedValue: t
    } : fixes[0];
  }, [k, allResolvedVariables, fixes]);
  let N = useCallback(e => !!(e?.id && k?.length) && e.id === k[0]?.variableId, [k]);
  let A = useCallback(e => {
    if (!allResolvedVariables || !t) return;
    let l = allResolvedVariables.libraryVariables[e]?.resolvedValue ?? allResolvedVariables.localVariables[e]?.resolvedValue;
    if (!l) return;
    let n = {
      ...fixContext,
      fixes: [{
        variableId: e,
        resolvedValue: l
      }]
    };
    atomStoreManager.set(Sg, {
      groupKey: r,
      selectedFixItem: {
        fix: {
          ruleId: t,
          guid: s ?? '',
          valid: !0,
          fixContext: n
        },
        status: 'loaded'
      }
    });
  }, [allResolvedVariables, t, r, s, fixContext]);
  let M = useCallback(() => {
    let t = !!m?.current && !!p.current;
    let l = m?.current === p.current;
    if (t && l) {
      h();
      return;
    }
    f(p);
    y(!0);
    j(() => N);
    b(() => A);
    _({
      title: getI18nString('design_linter.rules.color_rules.dropdown_title'),
      blockType: e,
      display: 'LIST',
      items: listItems
    });
  }, [e, m, f, y, j, N, b, A, _, listItems, h]);
  if (!l || !valid || !fixContext || !fixes || fixes.length === 0 || !I || !s) {
    return jsx(sA, {
      ref: p,
      onClick: M,
      type: kQ.COLOR
    });
  }
  let {
    variableId,
    resolvedValue
  } = I;
  let B = (variableMap ?? {})[variableId]?.name;
  let F = resolvedValue.value;
  return F && B ? jsx(sz, {
    ref: p,
    onClick: M,
    tooltip: B,
    disabled: d,
    children: () => jsxs(Fragment, {
      children: [jsx(s$, {
        isDisabled: d,
        children: jsx(_$$J5, {
          color: F,
          opacity: F.a,
          className: sZ
        })
      }), jsx(sO, {
        label: B,
        isApplying: d
      })]
    })
  }) : jsx(sA, {
    ref: p,
    onClick: M,
    type: kQ.COLOR
  });
}
function os() {
  let {
    blocks,
    totalViolations
  } = useAtomWithSubscription(_$$yU);
  return totalViolations ? jsx(sP, {
    header: getI18nString('design_linter.suggestion_block_headers.color'),
    items: blocks.map(({
      blockConfig: e,
      violationsByGroupKey: t
    }) => jsx(sR, {
      blockConfig: e,
      violationsByGroupKey: t,
      children: e => jsx(Fragment, {
        children: Object.entries(t).map(([t, l]) => jsx(oo, {
          groupKey: t,
          violations: l,
          isApplying: e
        }, t))
      })
    }, e.id))
  }, pZ.EXTENSIBILITY_RULE) : null;
}
let oo = memo(({
  groupKey: e,
  violations: t,
  isApplying: l
}) => {
  let r = useMemo(() => function (e) {
    let t = {};
    for (let l of e) {
      let e = l.detectionContext;
      let n = e?.subtype;
      n && (t[n] || (t[n] = []), t[n].push(l));
    }
    return t;
  }(t), [t]);
  return jsx('div', {
    children: Object.entries(r).map(([t, i]) => i?.length ? jsx(oa, {
      violations: i,
      groupKey: e,
      subtype: t,
      isApplying: l
    }, `${e}-${t}`) : null)
  }, e);
});
function oa({
  groupKey: e,
  violations: t,
  subtype: l,
  isApplying: r
}) {
  let [s, o] = useState(!1);
  let a = t[0];
  let d = a?.detectionContext;
  let {
    applyFixToBlock,
    isApplying
  } = sb(useMemo(() => ({
    [e]: t
  }), [e, t]));
  let p = useCallback(() => {
    if (!s) {
      atomStoreManager.set(hx, []);
      o(!0);
      try {
        let l = t.map(e => e.guid);
        _$$r2()?.ignoreViolationsForGuidsWithGroupKey(l, e);
      } catch (e) {
        o(!1);
      }
    }
  }, [t, e, s]);
  if (!t || t.length === 0 || s || !d?.explanation) return null;
  let m = isApplying || r;
  return jsx('div', {
    onMouseEnter: () => {
      atomStoreManager.set(hx, t);
    },
    onMouseLeave: () => {
      atomStoreManager.set(hx, []);
    },
    children: jsxs('div', {
      className: 'x78zum5 xdt5ytf x1nfngrj x12sbs06 xf18ygs',
      children: [jsx('div', {
        ...Ay.props(od.subtypeLabel),
        children: l
      }), jsx('div', {
        ...Ay.props(od.explanationText),
        children: d.explanation
      }), jsxs('div', {
        className: 'x78zum5 x1nfngrj x6s0dn4',
        children: [jsx(ButtonPrimitive, {
          ...Ay.props(od.fixButton),
          'onClick': applyFixToBlock,
          'disabled': m,
          'data-tooltip': getI18nString('design_linter.suggestion_block.apply_tooltip', {
            section: l
          }),
          'data-tooltip-type': KindEnum.TEXT,
          'children': isApplying ? 'Applying...' : 'Apply Fix'
        }), jsx(ButtonPrimitive, {
          ...Ay.props(od.ignoreButton),
          'onClick': p,
          'disabled': m,
          'data-tooltip': getI18nString('design_linter.suggestion_block.ignore_tooltip', {
            section: l
          }),
          'data-tooltip-type': KindEnum.TEXT,
          'children': getI18nString('general.ignore')
        })]
      })]
    })
  });
}
let od = {
  subtypeLabel: {
    ...textDisplayConfig.textBodyMediumStrong,
    color: 'x1akne3o',
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    gap: 'xg2d0mh',
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  explanationText: {
    ...textDisplayConfig.textBodyMedium,
    color: 'x1akne3o',
    lineHeight: 'x37zpob',
    $$css: !0
  },
  fixButton: {
    ...textDisplayConfig.textBodyMedium,
    color: 'x1quhyk7',
    padding: 'xm22vyk',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    borderRadius: 'x12oqio5',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    backgroundColor: 'xjbqb8w xv2f06h',
    $$css: !0
  },
  ignoreButton: {
    ...textDisplayConfig.textBodyMedium,
    color: 'x1n0bwc9',
    padding: 'xm22vyk',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    borderRadius: 'x12oqio5',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    backgroundColor: 'xjbqb8w xv2f06h',
    $$css: !0
  }
};
function ou() {
  let {
    blocks,
    totalViolations
  } = useAtomWithSubscription(d9);
  return totalViolations ? jsx(sP, {
    header: getI18nString('design_linter.suggestion_block_headers.number'),
    items: blocks.map(({
      blockConfig: e,
      violationsByGroupKey: t
    }) => jsx(sR, {
      blockConfig: e,
      violationsByGroupKey: t,
      children: l => jsx(Fragment, {
        children: Object.entries(t).map(([t, i]) => {
          let r = i[0];
          return jsx(oc, {
            blockId: e.id,
            violations: i,
            groupKey: t,
            ruleId: r?.ruleId,
            isApplying: l
          }, t);
        })
      })
    }, e.id))
  }, pZ.CORNER_RADIUS) : null;
}
function oc({
  blockId: e,
  groupKey: t,
  violations: l,
  ruleId: i,
  isApplying: r
}) {
  let s = l[0];
  let {
    fix,
    status
  } = sj(t);
  if (!s?.detectionContext) return null;
  let {
    detectionContext,
    guid
  } = s;
  return jsx(sI, {
    fixStatus: status,
    groupKey: t,
    violations: l,
    isApplying: r,
    children: {
      suggestionRowContent: l => jsx(sT, {
        ...l,
        children: {
          currentValue: jsx(ox, {
            context: detectionContext
          }),
          suggestedValue: jsx(op, {
            blockId: e,
            fix,
            groupKey: t,
            ruleId: i,
            violatingNodeId: guid,
            isApplying: r
          })
        }
      })
    }
  });
}
function ox({
  context: e
}) {
  if (!e) return null;
  let t = parseFloat(e.numericValue.toFixed(2)).toString();
  return jsx('span', {
    'data-tooltip': t,
    'data-tooltip-type': KindEnum.TEXT,
    'children': t
  });
}
function op({
  blockId: e,
  ruleId: t,
  fix: l,
  groupKey: r,
  violatingNodeId: s,
  isApplying: a
}) {
  let {
    fixContext,
    valid
  } = l ?? {};
  let c = useRef(null);
  let p = _$$sf();
  let [h, m] = useAtomValueAndSetter(uw);
  let f = Xr(_$$aW);
  let y = Xr(_$$iO);
  let _ = Xr(_$$rg);
  let b = Xr(jV);
  let {
    fix
  } = sv(r);
  let {
    fixContext: _fixContext5
  } = fix ?? {};
  let C = fixContext?.fixes;
  let k = _fixContext5?.fixes;
  let E = d$({
    ruleId: t
  });
  let {
    fixes,
    listItems,
    allResolvedVariables,
    variableMap
  } = Dt({
    selectedFixes: C ?? [],
    cachedFixes: (k ?? []).slice(0, OL),
    violatingNodeId: s,
    type: VariableResolvedDataType.FLOAT,
    scopes: E
  });
  let T = useMemo(() => {
    if (!C?.length) return fixes[0];
    let e = C[0]?.variableId;
    if (!e || !allResolvedVariables) return fixes[0];
    let t = allResolvedVariables.libraryVariables[e]?.resolvedValue ?? allResolvedVariables.localVariables[e]?.resolvedValue;
    return t ? {
      variableId: e,
      resolvedValue: t
    } : fixes[0];
  }, [C, allResolvedVariables, fixes]);
  let I = useCallback(e => !!(e?.id && C?.length) && e.id === C[0]?.variableId, [C]);
  let N = useCallback(e => {
    if (!allResolvedVariables || !t) return;
    let l = allResolvedVariables.libraryVariables[e]?.resolvedValue ?? allResolvedVariables.localVariables[e]?.resolvedValue;
    if (!l) return;
    let n = {
      ...fixContext,
      fixes: [{
        variableId: e,
        resolvedValue: l
      }]
    };
    atomStoreManager.set(Sg, {
      groupKey: r,
      selectedFixItem: {
        fix: {
          ruleId: t,
          guid: s ?? '',
          valid: !0,
          fixContext: n
        },
        status: 'loaded'
      }
    });
  }, [allResolvedVariables, t, r, s, fixContext]);
  let A = useCallback(() => {
    let t = !!h?.current && !!c.current;
    let l = h?.current === c.current;
    if (t && l) {
      p();
      return;
    }
    m(c);
    f(!0);
    b(() => I);
    _(() => N);
    y({
      title: getI18nString('design_linter.rules.number_rules.dropdown_title'),
      blockType: e,
      display: 'LIST',
      items: listItems
    });
  }, [e, h, m, f, b, I, _, N, y, listItems, p]);
  if (!l || !valid || !fixContext || !fixes || fixes.length === 0 || !T || !s) {
    return jsx(sA, {
      ref: c,
      onClick: A,
      type: kQ.NUMBER
    });
  }
  let {
    variableId,
    resolvedValue
  } = T;
  let z = (variableMap ?? {})[variableId]?.name;
  let B = resolvedValue.value;
  return z ? jsx(sz, {
    ref: c,
    onClick: A,
    tooltip: z,
    disabled: a,
    children: () => jsxs(Fragment, {
      children: [jsx(s$, {
        isDisabled: a,
        children: jsx(_$$O3, {})
      }), jsx(sO, {
        label: z,
        value: B,
        isApplying: a
      })]
    })
  }) : jsx(sA, {
    ref: c,
    onClick: A,
    type: kQ.NUMBER
  });
}
function of() {
  let {
    blocks,
    totalViolations
  } = useAtomWithSubscription(qQ);
  return totalViolations ? jsx(sP, {
    header: getI18nString('design_linter.suggestion_block_headers.accessibility_standards'),
    items: blocks.map(({
      blockConfig: e,
      violationsByGroupKey: t
    }) => jsx(sR, {
      blockConfig: e,
      violationsByGroupKey: t,
      children: l => jsx(Fragment, {
        children: Object.entries(t).map(([t, i]) => {
          let r = i[0];
          return jsx(oy, {
            blockId: e.id,
            violations: i,
            groupKey: t,
            ruleId: r?.ruleId,
            isApplying: l
          }, t);
        })
      })
    }, e.id))
  }, pZ.TEXT_BACKGROUND_CONTRAST_AA) : null;
}
function oy({
  blockId: e,
  groupKey: t,
  violations: l,
  ruleId: i,
  isApplying: r
}) {
  let s = l[0];
  let {
    fix,
    status
  } = sj(t);
  if (!s?.detectionContext) return null;
  let {
    detectionContext,
    guid
  } = s;
  return jsx(sI, {
    fixStatus: status,
    groupKey: t,
    violations: l,
    isApplying: r,
    children: {
      suggestionRowContent: l => jsx(sT, {
        ...l,
        children: {
          currentValue: jsx(o_, {
            context: detectionContext
          }),
          suggestedValue: jsx(ob, {
            blockId: e,
            fix,
            groupKey: t,
            ruleId: i,
            violatingNodeId: guid,
            isApplying: r,
            detectionContext
          })
        }
      })
    }
  });
}
function o_({
  context: e
}) {
  if (!e) return null;
  let t = e.fillColor;
  let l = e.fillOpacity;
  let i = `${defaultColorManipulator.format(t)}${l && l < 1 ? ` \xB7 ${function (e) {
    let t = new _$$t3({
      min: 0,
      max: 100
    });
    return `${t.format(100 * e)}%`;
  }(l)}` : ''}`;
  return jsx('span', {
    'data-tooltip': i,
    'data-tooltip-type': KindEnum.TEXT,
    'children': i
  });
}
function ob({
  blockId: e,
  ruleId: t,
  fix: l,
  groupKey: r,
  violatingNodeId: s,
  isApplying: a,
  detectionContext: d
}) {
  let {
    fixContext,
    valid
  } = l ?? {};
  let p = useRef(null);
  let h = _$$sf();
  let [m, f] = useAtomValueAndSetter(uw);
  let y = Xr(_$$aW);
  let _ = Xr(_$$iO);
  let b = Xr(_$$rg);
  let j = Xr(jV);
  let v = Xr(Ue);
  let {
    fix
  } = sv(r);
  let {
    fixContext: _fixContext6
  } = fix ?? {};
  let E = fixContext?.fixes;
  let S = _fixContext6?.fixes;
  let {
    fixes,
    listItems,
    allResolvedVariables,
    variableMap
  } = Dt({
    selectedFixes: E ?? [],
    cachedFixes: (S ?? []).slice(0, EN),
    violatingNodeId: s,
    type: VariableResolvedDataType.COLOR,
    scopes: d$({
      ruleId: t
    })
  });
  let I = useMemo(() => {
    if (!E?.length) return fixes[0];
    let e = E[0]?.variableId;
    if (!e || !allResolvedVariables) return fixes[0];
    let t = allResolvedVariables.libraryVariables[e]?.resolvedValue ?? allResolvedVariables.localVariables[e]?.resolvedValue;
    return t ? {
      variableId: e,
      resolvedValue: t
    } : fixes[0];
  }, [E, allResolvedVariables, fixes]);
  let N = useCallback(e => !!(e?.id && E?.length) && e.id === E[0]?.variableId, [E]);
  let A = useCallback(e => {
    if (!allResolvedVariables || !t) return;
    let l = allResolvedVariables.libraryVariables[e]?.resolvedValue ?? allResolvedVariables.localVariables[e]?.resolvedValue;
    if (!l) return;
    let n = {
      ...fixContext,
      fixes: [{
        variableId: e,
        resolvedValue: l
      }]
    };
    atomStoreManager.set(Sg, {
      groupKey: r,
      selectedFixItem: {
        fix: {
          ruleId: t,
          guid: s ?? '',
          valid: !0,
          fixContext: n
        },
        status: 'loaded'
      }
    });
  }, [allResolvedVariables, t, r, s, fixContext]);
  let M = useCallback(() => {
    let t = !!m?.current && !!p.current;
    let l = m?.current === p.current;
    if (t && l) {
      h();
      return;
    }
    let {
      backgroundColor,
      contrastRatios
    } = d;
    let s = function (e) {
      if (e.type !== 'LIST' || !e.variable || !allResolvedVariables) return null;
      let t = e.variable.node_id;
      let l = allResolvedVariables.libraryVariables[t]?.resolvedValue ?? allResolvedVariables.localVariables[t]?.resolvedValue;
      if (!l?.value) return null;
      let s = l.value;
      return jsx(oj, {
        backgroundColor,
        selectedColor: s,
        contrastRatios
      });
    };
    f(p);
    y(!0);
    j(() => N);
    b(() => A);
    v(() => s);
    _({
      title: getI18nString('design_linter.rules.color_rules.dropdown_title'),
      blockType: e,
      display: 'LIST',
      items: listItems
    });
  }, [e, m, f, y, j, N, b, A, v, _, listItems, h, d, allResolvedVariables]);
  if (!l || !valid || !fixContext || !fixes || fixes.length === 0 || !I || !s) {
    return jsx(sA, {
      ref: p,
      onClick: M,
      type: kQ.COLOR
    });
  }
  let {
    variableId,
    resolvedValue
  } = I;
  let B = (variableMap ?? {})[variableId]?.name;
  let F = resolvedValue.value;
  return F && B ? jsx(sz, {
    ref: p,
    onClick: M,
    tooltip: B,
    disabled: a,
    children: () => jsxs(Fragment, {
      children: [jsx(s$, {
        isDisabled: a,
        children: jsx(_$$J5, {
          color: F,
          opacity: F.a,
          className: sZ
        })
      }), jsx(sO, {
        label: B,
        isApplying: a
      }), jsx(oj, {
        backgroundColor: d.backgroundColor,
        selectedColor: resolvedValue.value,
        contrastRatios: d.contrastRatios
      })]
    })
  }) : jsx(sA, {
    ref: p,
    onClick: M,
    type: kQ.COLOR
  });
}
function oj({
  backgroundColor: e,
  selectedColor: t,
  contrastRatios: l
}) {
  let r = useMemo(() => {
    let {
      aaPass
    } = Ef(Hu(t), e, l?.AA, l?.AAA);
    return !!aaPass;
  }, [e, t, l]);
  return jsxs('div', {
    ...Ay.props(ov.contrastCheck, r ? ov.passing : ov.failing),
    children: [r ? jsx(_$$l7, {}) : jsx(_$$X2, {}), getI18nString('design_linter.suggestion_block.text_background_contrast_aa.aaStandard')]
  });
}
let ov = {
  contrastCheck: {
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    gap: 'x195vfkc',
    rowGap: null,
    columnGap: null,
    userSelect: 'x87ps6o',
    $$css: !0
  },
  passing: {
    'color': 'xq6u9c4',
    '--color-icon': 'x11vm0g5',
    '$$css': !0
  },
  failing: {
    'color': 'x1akne3o',
    '--color-icon': 'xbzrb6o',
    '$$css': !0
  }
};
function oC() {
  let {
    blocks,
    totalViolations
  } = useAtomWithSubscription(GM);
  return totalViolations ? jsx(sP, {
    header: getI18nString('design_linter.suggestion_block_headers.styles'),
    items: blocks.map(({
      blockConfig: e,
      violationsByGroupKey: t
    }) => jsx(sR, {
      blockConfig: e,
      violationsByGroupKey: t,
      children: l => jsx(Fragment, {
        children: Object.entries(t).map(([t, i]) => jsx(ok, {
          blockId: e.id,
          violations: i,
          groupKey: t,
          isApplying: l
        }, t))
      })
    }, e.id))
  }, pZ.TEXT_STYLE) : null;
}
function ok({
  blockId: e,
  groupKey: t,
  violations: l,
  isApplying: i
}) {
  let r = l[0];
  let {
    fix,
    status
  } = sj(t);
  return r?.detectionContext ? jsx(sI, {
    fixStatus: status,
    groupKey: t,
    violations: l,
    isApplying: i,
    children: {
      suggestionRowContent: l => jsx(sT, {
        ...l,
        children: {
          currentValue: jsx(oE, {
            context: r.detectionContext
          }),
          suggestedValue: jsx(oS, {
            blockId: e,
            fix,
            groupKey: t,
            isApplying: i
          })
        }
      })
    }
  }) : null;
}
function oE({
  context: e
}) {
  let {
    fontFamily,
    fontSize,
    lineHeight
  } = e;
  let r = parseFloat(fontSize.toFixed(2)).toString();
  let s = parseFloat(lineHeight.toFixed(2)).toString();
  let o = `${fontFamily} ${r}, ${s}`;
  return jsx('span', {
    'data-tooltip': o,
    'data-tooltip-type': KindEnum.TEXT,
    'children': o
  });
}
function oS({
  blockId: e,
  fix: t,
  groupKey: l,
  isApplying: r
}) {
  let {
    fixContext,
    valid
  } = t ?? {};
  let a = useRef(null);
  let [d, u] = useAtomValueAndSetter(uw);
  let c = Xr(_$$aW);
  let p = Xr(_$$iO);
  let h = Xr(_$$rg);
  let m = Xr(jV);
  let f = _$$sf();
  let {
    fix
  } = sv(l);
  let {
    fixContext: _fixContext7
  } = fix ?? {};
  let b = fixContext?.fixes;
  let j = _fixContext7?.fixes;
  let {
    allStyles,
    listItems,
    styleNodeIdToStyle
  } = _$$td({
    selectedStyles: b ?? [],
    cachedStyles: (j ?? []).slice(0, _$$lz)
  });
  let E = b?.length ? b[0] : allStyles[0];
  let S = useCallback(e => !!(e?.id && b?.length) && e.id === b?.[0]?.node_id, [b]);
  let w = useCallback(e => {
    let n = styleNodeIdToStyle[e];
    if (!n) return;
    let i = {
      ...fixContext,
      fixes: [n]
    };
    atomStoreManager.set(Sg, {
      groupKey: l,
      selectedFixItem: {
        fix: {
          ruleId: _$$C3.REQUIRE_TEXT_STYLES,
          guid: t?.guid ?? '',
          valid: !0,
          fixContext: i
        },
        status: 'loaded'
      }
    });
  }, [styleNodeIdToStyle, l, t?.guid, fixContext]);
  let R = useCallback(() => {
    if (r) return;
    let t = !!d?.current && !!a.current;
    let l = d?.current === a.current;
    if (t && l) {
      f();
      return;
    }
    m(() => S);
    h(() => w);
    p({
      title: getI18nString('design_linter.rules.text_styles.dropdown_title'),
      blockType: e,
      display: 'LIST',
      items: listItems
    });
    u(a);
    c(!0);
  }, [e, f, d, r, S, listItems, w, u, c, m, p, h]);
  return t && valid && fixContext && E ? jsx(sz, {
    ref: a,
    onClick: R,
    tooltip: E.name,
    children: () => jsxs(Fragment, {
      children: [jsx(s$, {
        isDisabled: r,
        children: jsx(_$$J5, {
          fillStyle: E,
          className: sZ
        })
      }), jsx(sO, {
        label: E.name,
        isApplying: r
      })]
    })
  }) : jsx(sA, {
    ref: a,
    onClick: R,
    type: kQ.TEXT
  });
}
textDisplayConfig.textBodyMediumStrong;
let ow = 'design-linter-group-view-next-button';
let oR = memo(() => {
  let [e, t] = useState(!1);
  let l = _$$sf();
  let r = gx();
  let s = function () {
    let e = function () {
      let {
        blocks,
        totalViolations
      } = useAtomWithSubscription(_$$r5);
      return !!blocks.length && !!totalViolations;
    }();
    let t = function () {
      let {
        blocks,
        totalViolations
      } = useAtomWithSubscription(GM);
      return !!blocks.length && !!totalViolations;
    }();
    let l = function () {
      let {
        blocks,
        totalViolations
      } = useAtomWithSubscription(d9);
      return !!blocks.length && !!totalViolations;
    }();
    let r = function () {
      let {
        blocks,
        totalViolations
      } = useAtomWithSubscription(qQ);
      return !!blocks.length && !!totalViolations;
    }();
    let s = function () {
      let {
        blocks,
        totalViolations
      } = useAtomWithSubscription(LG);
      return !!blocks.length && !!totalViolations;
    }();
    let o = function () {
      let {
        blocks,
        totalViolations
      } = useAtomWithSubscription(_$$yU);
      return !!blocks.length && !!totalViolations;
    }();
    return useMemo(() => {
      let i = [];
      e && i.push({
        key: pZ.BACKGROUND_COLOR,
        block: jsx(ol, {})
      });
      t && i.push({
        key: pZ.TEXT_STYLE,
        block: jsx(oC, {})
      });
      l && i.push({
        key: pZ.CORNER_RADIUS,
        block: jsx(ou, {})
      });
      r && i.push({
        key: pZ.TEXT_BACKGROUND_CONTRAST_AA,
        block: jsx(of, {})
      });
      s && i.push({
        key: pZ.ASSETS_OUTSIDE_SELECTED_LIBRARIES,
        block: jsx(sY, {})
      });
      o && i.push({
        key: pZ.EXTENSIBILITY_RULE,
        block: jsx(os, {})
      });
      return i;
    }, [e, t, l, r, s, o]);
  }();
  let {
    nextGroup,
    hasNextGroup
  } = function (e) {
    let t = useAtomWithSubscription(NM);
    let l = useRef(null);
    let n = useRef(null);
    let r = useAtomWithSubscription(Bd);
    useEffect(() => {
      if (!(n.current !== t)) return;
      n.current = t;
      let e = r.map(e => e.id);
      let i = e.findIndex(e => e === t);
      l.current = i !== -1 ? e.slice(i + 1) : e;
    }, [t, r]);
    return {
      nextGroup: useCallback(() => {
        if (!l.current || !r.length) return;
        let t = r.reduce((e, t) => (e.add(t.id), e), new Set());
        let n = '';
        for (let e = 0; e < l.current.length; e++) {
          let i = l.current[e] ?? '';
          if (t.has(i)) {
            n = i;
            break;
          }
        }
        if (!n) {
          let e = r[0]?.id ?? '';
          if (!e) {
            atomStoreManager.set(_M, FR.ALL_VISUAL_GROUPS_VIEW);
            return;
          }
          n = e;
        }
        let i = atomStoreManager.get(Iy).get(n);
        i && _$$JT(i, 'NEXT');
        atomStoreManager.set(NM, n);
        atomStoreManager.set(rd);
        e?.();
      }, [r, e]),
      hasNextGroup: r.length > 0
    };
  }(useCallback(() => {
    t(!1);
  }, []));
  return (fR(), r || e) ? jsxs('div', {
    ...xk(oA.noViolations),
    children: [renderI18nText('design_linter.modal.group_suggestions_completed'), hasNextGroup ? jsx(Button, {
      'variant': 'primary',
      'data-testid': ow,
      'recordingKey': ow,
      'onClick': nextGroup,
      'children': renderI18nText('general.next')
    }) : null]
  }) : jsxs(Fragment, {
    children: [jsx(ScrollContainer, {
      children: jsx('div', {
        className: 'x78zum5 xdt5ytf x5yr21d xp6roeo x1iyjqo2',
        onScroll: l,
        children: jsx('div', {
          className: 'x78zum5 x1iyjqo2 xdt5ytf x1gskr33',
          children: s.map(({
            key: e,
            block: t
          }, l) => jsxs(_$$Fragment, {
            children: [l > 0 && jsx(sV, {}), t]
          }, `suggestion-block-${e}`))
        })
      })
    }), !!getFeatureFlags().aip_flower_garden_group_footer && jsx(oI, {
      setDidIgnoreGroup: t
    })]
  });
});
let oL = 'design-linter-ignore-all-group';
let oT = 'design-linter-apply-all-group';
function oI({
  setDidIgnoreGroup: e
}) {
  let t = _$$rL(e);
  let {
    applyAllFixes
  } = {
    applyAllFixes: useCallback(async () => {
      let e = _$$r2();
      if (!e) throw new Error('Design linter not available');
      atomStoreManager.set(kR, !0);
      await new Promise(e => requestAnimationFrame(() => e()));
      let t = !1;
      let l = 0;
      let n = 0;
      let i = 0;
      let r = e.linterAbortSignal;
      try {
        let s = atomStoreManager.get(DJ);
        for (let o of Object.values(s)) {
          if (r.aborted) break;
          try {
            let s = [];
            for (let e in o) {
              let t = o[e] ?? [];
              let i = atomStoreManager.get($C)?.get(e);
              i?.fix?.fixContext && (s.push({
                violations: t,
                fixContext: i.fix.fixContext
              }), l += t.length, n += 1);
            }
            await e.applyFixContextToViolations({
              violationsWithFixContexts: s,
              shouldSkipCommit: !0,
              abortSignal: r
            });
            t = !0;
            i += 1;
          } catch {
            _$$m2();
          } finally {
            atomStoreManager.set(kR, !1);
          }
        }
        t && _$$i({
          numViolationsFixed: l,
          numRowsFixed: n,
          numBlocksFixed: i
        });
      } catch {
        Rz();
      } finally {
        t && fullscreenValue.commit();
      }
    }, [])
  };
  let r = useAtomWithSubscription(kR);
  let s = !useAtomWithSubscription(mE) || r;
  return jsx('div', {
    'className': 'x78zum5 x13a6bvl xv42yna xr1yuqi',
    'data-testid': 'design-linter-group-view-footer',
    'children': jsxs('div', {
      className: 'xe8ttls x78zum5 x13a6bvl x883omv x2lah0s xxk0z11 xjwf9q1 xqo8coc x1obevfs',
      children: [jsx(Button, {
        onClick: t,
        variant: 'secondary',
        htmlAttributes: {
          'data-testid': oL
        },
        recordingKey: oL,
        children: renderI18nText('design_linter.suggestion_block.ignore_all')
      }), jsx(Button, {
        onClick: applyAllFixes,
        variant: 'primary',
        htmlAttributes: {
          'data-testid': oT
        },
        recordingKey: oT,
        disabled: s,
        children: jsxs('div', {
          className: 'x78zum5 x6s0dn4 x1jnr06f',
          children: [r && jsx(_$$k2, {
            size: 'sm'
          }), renderI18nText('design_linter.suggestion_block.apply_all_btn')]
        })
      })]
    })
  });
}
let oN = memo(() => {
  !function () {
    let e = useAtomWithSubscription(vu);
    useEffect(() => {
      e.length && SceneGraphHelpers?.replaceSelection(e, !0);
    }, [e]);
  }();
  useSingleEffect(() => {
    atomStoreManager.set(rd);
  });
  return jsxs('div', {
    className: 'x78zum5 x1v8gsql x5yr21d xh8yej3',
    children: [jsxs('div', {
      className: 'x78zum5 xdt5ytf x1iyjqo2 xqo8coc xuhaxrz x1obevfs x1yjdb4r',
      children: [getFeatureFlags().aip_flower_garden_debug && jsx(iX, {}), jsx(oR, {})]
    }), jsx(rJ, {})]
  });
});
let oA = {
  noViolations: {
    ...textDisplayConfig.textBodyMedium,
    color: 'x1n0bwc9',
    display: 'x78zum5',
    justifyContent: 'xl56j7k',
    alignItems: 'x6s0dn4',
    userSelect: 'x87ps6o',
    flexDirection: 'xdt5ytf',
    gap: 'x1i71x30',
    rowGap: null,
    columnGap: null,
    height: 'x5yr21d',
    $$css: !0
  }
};
let oM = memo(() => {
  let e = _i();
  let t = _$$l2() && !e;
  let l = useAtomWithSubscription(_M);
  return (!function (e) {
    let t = wA();
    let l = selectUserFlag('seen_linter_home_view');
    useEffect(() => {
      l || e || t(postUserFlag({
        seen_linter_home_view: !0
      }));
    }, [l, t, e]);
  }(e), _9(), p6(), l === FR.SELECTED_VISUAL_GROUP_VIEW) ? jsx(oN, {}) : t ? jsx('div', {
    'data-testid': 'design-linter-container-no-violations',
    ...xk(oO.noViolationsContainer),
    'children': jsxs('div', {
      className: 'x78zum5 xl56j7k x87ps6o xdt5ytf x6s0dn4',
      children: [jsx('span', {
        children: renderI18nText('design_linter.modal.suggestions_completed')
      }), getFeatureFlags().aip_flower_garden_debug && jsx(iX, {})]
    })
  }) : jsx(rn, {});
});
let oO = {
  noViolationsContainer: {
    color: 'x1n0bwc9',
    ...textDisplayConfig.textBodyMedium,
    display: 'x78zum5',
    width: 'xh8yej3',
    height: 'x5yr21d',
    flexDirection: 'xdt5ytf',
    justifyContent: 'xl56j7k',
    $$css: !0
  }
};
let oz = parsePxNumber(ij);
function oB() {
  let e = _$$ox();
  let t = function () {
    let e = GQ();
    let t = useAtomWithSubscription(_M);
    let l = useMemo(() => new Point(e + parsePxNumber(ij), parsePxNumber(ij)), [e]);
    let [{
      windowInnerHeight: n,
      windowInnerWidth: r
    }] = useDebounce(_$$l5(), 300, {
      equalityFn: deepEqual
    });
    let s = 915;
    let o = 540;
    t === FR.ALL_VISUAL_GROUPS_VIEW && (getFeatureFlags().aip_flower_garden_auto_library_select ? (s = 360, o = 560) : (s = 336, o = 475));
    return {
      initialPosition: l,
      maxHeight: n - 2 * oz,
      minHeight: 250,
      minWidth: 400,
      initialHeight: o,
      initialWidth: Math.min(r - 2 * oz, s)
    };
  }();
  let l = function () {
    let e = Xr($H);
    return useMemo(() => ia()(t => {
      e(t);
    }, 100), [e]);
  }();
  let r = function () {
    let e = Xr(_$$r3);
    return useMemo(() => ia()(t => {
      e(t);
    }, 100), [e]);
  }();
  let s = Hl();
  let o = useAtomWithSubscription(_M);
  let d = Xr($H);
  let u = useCallback(e => {
    e.size && l(e.size);
    r(e.position);
  }, [r, l]);
  useSingleEffect(() => {
    let e = {
      x: t.initialWidth,
      y: t.initialHeight
    };
    l(e);
    d(e);
    r({
      x: t.initialPosition.x,
      y: t.initialPosition.y
    });
  });
  useLayoutEffect(() => {
    let t = getFeatureFlags().aip_flower_garden_auto_library_select ? 560 : 475;
    let n = getFeatureFlags().aip_flower_garden_auto_library_select ? 360 : 336;
    o === FR.SELECTED_VISUAL_GROUP_VIEW && (t = 540, n = 915);
    let i = new Point(n, t);
    e.setSize(i);
    l(i);
    d(i);
  }, [o, d, l, e]);
  ZE();
  return jsxs(_L, {
    defaultWidth: t.initialWidth,
    defaultHeight: t.initialHeight,
    defaultPosition: {
      left: t.initialPosition.x,
      top: t.initialPosition.y
    },
    constraints: {
      maxHeight: t.maxHeight
    },
    manager: e,
    onClose: ({
      source: e
    }) => {
      e !== 'outside' && (Zz(e), s(FR.ALL_VISUAL_GROUPS_VIEW));
    },
    onTransform: u,
    children: [jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(oF, {})
      }), jsx(DialogBody, {
        padding: 0,
        scrolling: 'none',
        className: 'xb3r6kr',
        children: jsx(oM, {})
      })]
    }), jsx(iv, {})]
  });
}
function oF() {
  let [e, t] = useAtomValueAndSetter(_M);
  return e === FR.SELECTED_VISUAL_GROUP_VIEW ? jsx('div', {
    className: 'xt0e3qv x87ps6o xh8yej3',
    children: jsx(o$, {
      showBackButton: !0,
      onBackClick: () => {
        _$$r2()?.clearLinterVisualBells();
        t(FR.ALL_VISUAL_GROUPS_VIEW);
      }
    })
  }) : jsx('div', {
    className: 'xt0e3qv x87ps6o xh8yej3 x8rdmch',
    children: jsx(o$, {})
  });
}
function o$({
  showBackButton: e = !1,
  onBackClick: t
}) {
  let l = _i();
  return jsxs('div', {
    className: 'x78zum5 x1qughib x6s0dn4',
    children: [jsxs('div', {
      className: 'x78zum5 x167g77z x6s0dn4',
      children: [e && t && jsxs(ButtonPrimitive, {
        onClick: t,
        recordingKey: 'design-linter-back-button',
        children: [jsx(_$$C2, {}), jsx('div', {
          className: 'x78zum5 x1g2dr8m xiqqdae xkezfkh x1giz659 x14kxzw3 xb3r6kr xlyipyv xuxw1ft',
          children: l ? renderI18nText('design_linter.title') : renderI18nText('design_linter.review_title')
        })]
      }), !e && jsx('div', {
        className: 'x78zum5 x1g2dr8m xiqqdae xkezfkh x1giz659 x14kxzw3 xb3r6kr xlyipyv xuxw1ft',
        children: l ? renderI18nText('design_linter.title') : renderI18nText('design_linter.review_title')
      }), jsx('div', {
        className: 'x2lah0s',
        children: jsx(_$$E3, {
          children: renderI18nText('general.beta')
        })
      })]
    }), jsxs('div', {
      className: 'x78zum5 xg2d0mh x1057jvv',
      children: [jsx(oV, {}), jsx(oP, {})]
    })]
  });
}
function oP() {
  let [e, t] = useAtomValueAndSetter(_M);
  let [l, s] = useAtomValueAndSetter(Dg);
  let o = !selectUserFlag('seen_linter_libraries_callout') && l;
  !function (e) {
    let t = wA();
    useEffect(() => {
      if (!e) return;
      let l = () => {
        t(postUserFlag({
          seen_linter_libraries_callout: !0
        }));
      };
      window.addEventListener('beforeunload', l);
      return () => {
        l();
        window.removeEventListener('beforeunload', l);
      };
    }, [t, e]);
  }(o);
  let {
    getTriggerProps,
    manager
  } = gR({
    isOpen: o,
    onOpenChange: s,
    placement: 'bottom',
    type: 'tooltip'
  });
  return jsxs(Fragment, {
    children: [jsx(IconButton, {
      ...getTriggerProps(),
      'onClick': () => {
        l && s(!1);
        e === FR.SELECTED_VISUAL_GROUP_VIEW ? t(FR.LIBRARY_SELECTOR_FROM_SELECTED_GROUP_VIEW) : t(FR.LIBRARY_SELECTOR_FROM_ALL_GROUPS_VIEW);
      },
      'aria-label': getI18nString('design_linter.penalty_box.open_library_selector_aria'),
      'children': jsx(_$$l4, {})
    }), jsx(_$$bL2, {
      manager,
      variant: 'strong',
      children: jsxs(DialogContents, {
        className: 'xafpxmx x1y1aw1k',
        children: [jsx(DialogBody, {
          children: getI18nString('design_linter.library_selector.callout.description')
        }), jsx(_$$wi, {
          children: jsx(DialogActionStrip, {
            children: jsx(Button, {
              onClick: () => s(!1),
              children: getI18nString('design_linter.library_selector.callout.button')
            })
          })
        })]
      })
    })]
  });
}
function oV() {
  let e = Xr(_M);
  let t = _i();
  let l = useCallback(async () => {
    try {
      _$$il();
      e(FR.ALL_VISUAL_GROUPS_VIEW);
      await _$$r2()?.refreshDetection();
    } catch (t) {
      console.error('Error refreshing design linter:', t);
      t instanceof yU ? e(FR.LANDING_PAGE_LIMIT_EXCEEDED) : t instanceof F7 && e(FR.LANDING_PAGE_NO_SELECTION);
    }
  }, [e]);
  return jsx('div', {
    className: 'x1n2onr6 x1rg5ohu',
    children: jsx(IconButton, {
      'onClick': l,
      'aria-label': getI18nString('design_linter.modal.penalty_box.refresh_button_tooltip'),
      'disabled': t,
      'recordingKey': 'design-linter-refresh-button',
      'children': jsx(_$$T3, {})
    })
  });
}
function oD() {
  return qZ() ? jsxs(Fragment, {
    children: [!!getFeatureFlags().aip_flower_garden_ts && jsx(n8, {}), !!getFeatureFlags().aip_flower_garden_on_copy && jsx(oG, {}), jsx(oH, {})]
  }) : null;
}
let oH = memo(() => {
  let e = getObservableValue(AppStateTsApi?.uiState()?.showDesignLinter, !1);
  let t = useAtomWithSubscription(pR);
  let l = VK();
  let r = PM();
  return (useEffect(() => () => {
    AppStateTsApi?.uiState()?.showDesignLinter?.set(!1);
  }, []), mr(), vP(), fx(e, t), e) ? r ? jsx(l9, {}) : l ? jsx(nQ, {}) : jsx(oB, {}) : null;
});
function oG() {
  !function () {
    let e = wA();
    let t = useAtomWithSubscription(ui);
    let l = d4(e => e.mirror.sceneGraphSelection);
    let n = Object.keys(l).length === 1 ? Object.keys(l)[0] : null;
    useEffect(() => {
      t && (n && n === t || (e(VisualBellActions.dequeue({
        matchType: xp
      })), atomStoreManager.set(ui, null)));
    }, [t, n, e]);
  }();
  return null;
}
function oJ({
  children: e
}) {
  return jsx(_$$G5.Provider, {
    value: {
      loggerEventName: 'design_navigate'
    },
    children: jsx(_$$s4.Provider, {
      value: {
        allowLibraryPublish: !0
      },
      children: jsx(y0.Provider, {
        value: _$$X3,
        children: e
      })
    })
  });
}
function ai({
  dropdownShown: e,
  pickerShown: t,
  saveAsState: l,
  sceneGraphSelection: i
}) {
  let s = wA();
  let o = selectCurrentFile();
  let a = useAppModelProperty('currentPage');
  let d = useAppModelProperty('isReadOnly');
  let u = useAppModelProperty('currentSelectedProperty');
  let c = isDevHandoffEditorType();
  let p = d && !c;
  let h = useNonMixedSelectionPropertyValue('numSelected');
  let {
    exportSettings
  } = useSelectedStyleOrSelectionPropertyValues('exportSettings');
  let m = Wd();
  return jsx(useCachedSubtree, {
    isVisible: !0,
    children: () => jsx(LI, {
      currentPage: a,
      currentSelectedProperty: u,
      dispatch: s,
      dropdownShown: e,
      exportSettings,
      isSelectionRenamable: LI.isSelectionRenamable(Object.keys(i)),
      numSelected: h,
      openFile: o,
      panelWidth: _$$iP,
      pickerShown: t,
      recordingKey: 'exportsPanel',
      saveAsState: l,
      sceneGraphSelection: i,
      singleNodeName: m,
      standalone: !0,
      title: p ? getI18nString('fullscreen.properties_panel.export') : getI18nString('fullscreen.properties_panel.presets')
    }, 'export')
  });
}
function ap({
  dropdownShown: e,
  pickerShown: t,
  sceneGraphSelection: l,
  shownPanels: i,
  userFlags: r
}) {
  let s = selectCurrentFile();
  let d = useIsFullscreenSitesView();
  let u = useSelectedStyleOrSelectionPropertyValue('containsResponsiveSets');
  let c = !i[ItemType.FRAME_PRESETS] && !i[ItemType.PENCIL_TOOL] && !u;
  return jsxs(Fragment, {
    children: [jsx(useCachedSubtree, {
      isVisible: i[ItemType.FRAME_PRESETS],
      children: () => jsx(_$$nl, {
        recordingKey: 'framePresetPanel'
      }, 'frame-presets')
    }), !d && jsx(useCachedSubtree, {
      isVisible: i[ItemType.PENCIL_TOOL],
      children: () => jsx(_$$q4, {
        id: 'pencilToolPanel',
        recordingKey: 'pencilToolPanel',
        openFile: s
      }, 'pencilToolPanel')
    }), jsx(useCachedSubtree, {
      isVisible: c,
      children: () => jsx(Z0, {
        recordingKey: 'prototypePanel',
        dropdownShown: e,
        pickerShown: t,
        sceneGraphSelection: l,
        shouldUseSelectedStyleProperties: !0,
        userFlags: r
      }, 'prototype')
    }), getFeatureFlags().jsx_debugging && jsx(_$$Ay3, {
      recordingKey: 'jsxDebugPanel'
    })]
  });
}
function ah({
  scrollContainer: e,
  refMainScrollContainer: t,
  ...l
}) {
  S2();
  let i = isUserNotLoggedInAndEditorSupported();
  let r = l.propertiesPanelTab;
  let s = useAppModelProperty('topLevelMode');
  let a = Dj(l.user);
  let d = s !== ViewType.PREVIEW && (s !== ViewType.BRANCHING || !a) && s !== ViewType.DEV_HANDOFF && r === DesignWorkspace.DESIGN;
  let u = s !== ViewType.PREVIEW && s !== ViewType.BRANCHING && r === DesignWorkspace.PROTOTYPE;
  let c = s === ViewType.PREVIEW && !l.userStateLoaded && !i || r === DesignWorkspace.INSPECT;
  let x = r === DesignWorkspace.EXPORT;
  let p = r === DesignWorkspace.COMMENT;
  return jsxs(Fragment, {
    children: [d && jsx(_$$Y, {
      scrollContainer: e,
      ...l
    }), u && jsx(ap, {
      dropdownShown: l.dropdownShown,
      pickerShown: l.pickerShown,
      sceneGraphSelection: l.sceneGraphSelection,
      shownPanels: l.shownPanels,
      userFlags: l.userFlags
    }), c && jsx(_$$q3, {
      scrollContainer: e
    }), x && jsx(ai, {
      dropdownShown: l.dropdownShown,
      pickerShown: l.pickerShown,
      saveAsState: l.saveAsState,
      sceneGraphSelection: l.sceneGraphSelection
    }), p && jsx(l.commentsPanel, {})]
  });
}
function ag(e) {
  !function () {
    let {
      isPropertiesPanelCollapsed,
      setPropertiesPanelCollapsed
    } = _$$iT();
    let l = Ye();
    let n = isWhiteboardFileType();
    let s = useHasSceneGraphSelection();
    let a = useCurrentTool();
    let d = a === DesignGraphElements.FRAME || a === DesignGraphElements.COMMENTS || a === DesignGraphElements.VECTOR_PENCIL;
    let u = d4(e => e.mirror.appModel.activeUserAction === UserActionState.DEFAULT);
    let c = ys();
    useEffect(() => {
      u && !n && isPropertiesPanelCollapsed && (d || s) && setPropertiesPanelCollapsed(!1);
    }, [s, u, a, setPropertiesPanelCollapsed, isPropertiesPanelCollapsed, l, d, n]);
    useEffect(() => {
      c && setPropertiesPanelCollapsed(!0);
    }, [c, setPropertiesPanelCollapsed, isPropertiesPanelCollapsed]);
  }();
  let t = useAppModelProperty('showUi');
  if (getFeatureFlags().dont_render_ui && !t) return jsx(Fragment, {});
  let l = null;
  let s = e => {
    l = e;
  };
  return jsx($$e20, {
    recordingKey: e.recordingKey,
    activeTab: e.propertiesPanelTab,
    refMainScrollContainer: s,
    shouldDeferCanvasUpdateOnPanelResize: !0,
    children: jsx(ah, {
      ...e,
      scrollContainer: l,
      refMainScrollContainer: s
    })
  });
}
let a_ = memo(() => {
  let e = selectWithShallowEqual(e => getPermissionsState(e));
  let t = useIsProgressBarHiddenOrLocked();
  let l = d4(e => e.loadingState);
  let s = UN();
  let a = d4(e => e.mirror.sceneGraphSelection);
  let d = d4(e => e.currentUserOrgId);
  let u = d4(e => e.dropdownShown);
  let c = d4(e => e.fonts);
  let x = d4(e => e.fileVersion);
  let p = d4(e => e.installedPluginVersions);
  let h = d4(e => e.library);
  let g = d4(e => e.localPlugins);
  let m = d4(e => e.modalShown);
  let f = d4(e => e.openFile);
  let y = d4(e => e.pickerShown);
  let _ = d4(e => e.pickerInStyleCreationShown);
  let b = d4(e => e.publishedPlugins);
  let j = d4(e => e.saveAsState);
  let v = d4(e => e.selectedView);
  let C = d4(e => e.voice.showWidget);
  let k = d4(e => e.stylePickerListLayout);
  let E = d4(e => e.stylePickerShown);
  let S = d4(e => e.stylePreviewShown);
  let w = d4(e => e.styleSets);
  let R = d4(e => e.usedKeyboardShortcuts);
  let L = d4(e => e.user);
  let T = d4(e => e.userFlags);
  let N = d4(e => e.userStateLoaded);
  let A = d4(e => e.repos);
  let M = d4(e => e.folders);
  let O = d4(e => e.teams);
  let z = d4(e => e.orgById);
  let F = d4(e => e.orgUsersByOrgId);
  let $ = d4(e => e.userEduGracePeriods);
  let P = d4(e => e.licenseGroups);
  let V = getEditorTypeOrNull() === FEditorType.Design;
  let D = isUserNotLoggedInAndEditorSupported();
  let H = isLoading(l, 'edit_button_upgrading_to_edit');
  let G = t || H;
  let U = getObservableValue(getPropertiesPanelTab(), DesignWorkspace.DESIGN);
  let q = getObservableOrFallback(AppStateTsApi.propertiesPanelState().shownPropertiesPanels);
  let W = getColorFormat();
  let K = getPropertiesPanelSplitPosition();
  let X = _$$s_();
  let Z = !Oo() && X;
  let Y = getObservableOrFallback(EditorPreferencesApi().renderRulers);
  let {
    isRightPanelCollapsed
  } = useContext(_$$t4);
  let {
    inProductHelpViewType
  } = A5();
  let ee = yO();
  let et = _$$T4();
  let el = _$$q2();
  let en = useMemo(() => D ? DesignWorkspace.COMMENT : U, [U, D]);
  useEffect(() => {
    en !== U && getPropertiesPanelTab()?.set(en);
  }, [en, U]);
  return jsxs(_$$o5, {
    boundaryKey: 'PropertiesPanel',
    loggedOutDesktopRevampExpAvaialable: V,
    children: [jsx(ag, {
      allSavedPlugins: p,
      colorFormat: W,
      commentsPanel: _$$L2,
      currentUserOrgId: d,
      dropdownShown: u,
      fileVersion: x,
      folders: M,
      fonts: c,
      hasMergedDimensionsAndAutolayout: !0,
      inProductHelpSidePanelWidth: ee,
      inProductHelpViewType,
      isCollapsed: isRightPanelCollapsed,
      isLoading: G,
      isUIMinimized: el,
      justChangedMinimizeUIValue: et,
      library: h,
      licenseGroups: P,
      localPlugins: g,
      modalShown: m,
      openFile: f,
      orgById: z,
      orgUsersByOrgId: F,
      permissionsState: e,
      pickerInStyleCreationShown: _,
      pickerShown: y,
      propertiesPanelSplitPosition: K,
      propertiesPanelTab: en,
      publishedPlugins: b,
      recordingKey: 'propertiesPanel',
      repos: A,
      rulersVisible: Y,
      saveAsState: j,
      sceneGraph: s,
      sceneGraphSelection: a,
      selectedView: v,
      shouldAnimateLoadingState: t,
      shouldShowBackgroundGradient: Z,
      showVoiceWidget: C,
      shownPanels: q,
      stylePickerListLayout: k,
      stylePickerShown: E,
      stylePreviewShown: S,
      styleSets: w,
      teams: O,
      usedKeyboardShortcuts: R,
      user: L,
      userEduGracePeriods: $,
      userFlags: T,
      userStateLoaded: N
    }, _$$tw() ?? void 0), jsx(_$$tZ, {})]
  });
});
function aO() {
  let e = _$$e2({
    overlay: Dqt,
    priority: _$$N.DEFAULT_MODAL
  });
  _$$E(e.uniqueId, 'commentThreadMobileAnnouncementClicked', () => {
    trackEventAnalytics('sidebar_announcement_mobile_app_download_prompt_modal_shown');
    e.show({});
  });
  let t = useCallback(async () => {
    trackEventAnalytics('sidebar_announcement_mobile_app_download_prompt_email_me_cta_clicked');
    await XHR.post('/api/send_mobile_download_email');
    e.complete();
  }, [e]);
  return jsx(_$$h2, {
    isShowing: e.isShowing,
    modalType: q3.FEATURE_UPDATE,
    closeButtonStyle: M_.ON_DARK,
    element: () => jsx(az, {
      onEmailClick: t
    }),
    trackingContextName: 'mobile_comment_announcement',
    onClickPrimaryCta: e.complete,
    onClose: e.complete,
    onManualDismiss: e.complete
  });
}
function az(e) {
  return jsxs('div', {
    className: 'modal_comment_sidebar_announcement--container--5oh-p',
    children: [jsxs('div', {
      className: 'modal_comment_sidebar_announcement--imageContainer--Vuo-V',
      children: [jsx('img', {
        alt: 'Background',
        src: buildUploadUrl('e19f2f58bc09414847ad59ff9228e07032e8842c'),
        className: 'modal_comment_sidebar_announcement--image--lyA61'
      }), jsx('div', {
        className: 'modal_comment_sidebar_announcement--spacer--m02YT'
      }), jsx(_$$T5, {})]
    }), jsxs('div', {
      className: 'modal_comment_sidebar_announcement--textContainer--btaTy',
      children: [jsx('div', {
        className: 'modal_comment_sidebar_announcement--title--eiyLq',
        children: jsx(TextWithTruncation, {
          fontSize: 24,
          fontWeight: 'semi-bold',
          children: getI18nString('rcs.mobile_comment_announcement.title')
        })
      }), jsx('div', {
        className: 'modal_comment_sidebar_announcement--description--Y8AJE',
        children: jsx(TextWithTruncation, {
          fontSize: 14,
          children: getI18nString('rcs.mobile_comment_announcement.description')
        })
      })]
    }), jsxs('div', {
      className: 'modal_comment_sidebar_announcement--buttonsContainer--UTcgc',
      children: [jsx(Button, {
        variant: 'secondary',
        onClick: e.onEmailClick,
        iconPrefix: jsx(_$$f2, {}),
        children: getI18nString('rcs.mobile_comment_announcement.email_download_link')
      }), jsx(Button, {
        variant: 'primary',
        onClick: () => {
          trackEventAnalytics('sidebar_announcement_mobile_app_download_prompt_learn_more_cta_clicked');
          customHistory.unsafeRedirect('https://help.figma.com/hc/articles/1500007537281-Guide-to-the-Figma-mobile-app#download', '_blank');
        },
        iconPrefix: jsx(_$$b5, {}),
        children: getI18nString('rcs.rcs_shared.learn_more')
      })]
    })]
  });
}
function dc({
  codeInstanceNode: e,
  entryPointCodeFile: t,
  previewState: l,
  isResizingPanel: r
}) {
  let s = selectCurrentUser();
  let d = useCurrentFileKey();
  zA();
  _$$m5();
  let u = t.guid;
  let c = useMemo(() => jsx(_$$d2, {
    nodeGuid: u
  }), [u]);
  let x = Xr(mC(u));
  let p = Xu();
  let {
    changedFiles
  } = _$$E9(t, _$$lV.CODE_IN_SITES);
  let m = _$$P4();
  let f = RM(t.codeFileFullPath);
  (function (e, t) {
    let l = useSceneGraphSelector();
    let {
      attachments,
      setAttachments,
      claimAPendingAttachmentOrMakeOne
    } = _$$_4(e.guid);
    let a = AppStateTsApi?.codeSelection();
    let d = getObservableValue(a?.selectedPromptFrames, []);
    let u = useCallback(() => {
      d && d.length > 0 && t === df.EMPTY && (_$$E0(d[0] || null, l, setAttachments, () => {}, claimAPendingAttachmentOrMakeOne), MakeBindings?.clearSelectedPromptFrames());
    }, [l, setAttachments, claimAPendingAttachmentOrMakeOne, t, d]);
    useEffect(() => {
      attachments.length === 0 && u();
    }, [attachments, u, t]);
  })(t, l);
  return jsx(_$$U4, {
    chatMessagesNode: t,
    chatMessagesNodeGuid: t?.guid ?? '',
    codeInstanceGuid: e.guid,
    emptyState: c,
    enableAssetImport: getFeatureFlags().bake_import,
    enableDragUpload: !0,
    enableDsImport: getFeatureFlags().bake_ds_import_plan_enabled,
    enableImageAttachment: !0,
    featureType: _$$lV.CODE_IN_SITES,
    isResizingPanel: r,
    rootPath: f,
    sendMessage: (l, n) => {
      let i = l.plainText;
      i || (i = l.hidden ? '' : atomStoreManager.get(mC(u)));
      let r = {
        ...l,
        plainText: i
      };
      x('');
      return Oz({
        featureType: _$$lV.FIGMAKE_IN_DESIGN,
        userMessageContent: r,
        rawUserChatDetails: n,
        user: s,
        chatMessagesNode: t,
        setInput: x,
        fileKey: d,
        autoFixingUserMessageId: null,
        canUseSupabase: p,
        changedFiles,
        model: m,
        instanceNode: e
      });
    },
    setInput: x,
    showCodeStreaming: !0,
    showCopyButton: !0
  });
}
let dx = {
  nameInfoText: {
    ...textDisplayConfig.textBodyMedium,
    color: 'x1akne3o',
    $$css: !0
  },
  previewWrapper: {
    width: 'xh8yej3',
    height: 'x5yr21d',
    $$css: !0
  },
  previewWrapperHidden: {
    display: 'x1s85apg',
    pointerEvents: 'x47corl',
    $$css: !0
  }
};
function dp() {
  let e = useAtomWithSubscription(wh);
  let t = useDeepEqualSceneValue((e, t) => t.flatMap(t => e.get(t)?.guid ?? []), e);
  let l = Array.from(useMemo(() => {
    let e = UN();
    return new Map(t.map(t => [t, e.get(t)]).filter(e => e[1] != null));
  }, [t]).values())[0];
  return l ? jsx(dy, {
    node: l
  }) : null;
}
function dh({
  name: e
}) {
  return jsxs('div', {
    className: 'x1kzcg16 xlup9mm x1yjdb4r x1n5zjp5 x78zum5 x1nfngrj xkh2ocl',
    children: [jsx(DialogLabel, {
      ...Ay.props(dx.nameInfoText),
      htmlAttributes: {
        'data-tooltip': e,
        'data-tooltip-type': 'text'
      },
      children: e
    }), jsx(_$$M4, {})]
  });
}
function dg({
  panelConfiguration: e,
  handleSegmentChange: t
}) {
  return jsx('div', {
    className: 'x78zum5 x6s0dn4 xl56j7k x1iyjqo2 x1excjyp',
    children: jsxs(_$$bL3, {
      value: e,
      onChange: t,
      legend: jsx(_$$q5, {
        children: getI18nString('sites.panel.code_window_display_picker.hidden_legend')
      }),
      children: [jsx(_$$A6, {
        selectedValue: e,
        value: 'preview',
        IconComponent: _$$_3,
        text: getI18nString('make.window.preview')
      }), jsx(_$$A6, {
        selectedValue: e,
        value: 'code',
        IconComponent: _$$X5,
        text: getI18nString('make.window.code')
      })]
    })
  });
}
function dm({
  panelConfiguration: e,
  handleSegmentChange: t
}) {
  return jsx(Fragment, {
    children: jsx('div', {
      className: 'x153ncpu x1yjdb4r x1n5zjp5 x78zum5 x13a6bvl x6s0dn4 x1nfngrj',
      children: jsx(dg, {
        panelConfiguration: e,
        handleSegmentChange: t
      })
    })
  });
}
var df = (e => (e[e.EMPTY = 0] = 'EMPTY', e[e.THINKING = 1] = 'THINKING', e[e.LOADED = 2] = 'LOADED', e))(df || {});
function dy({
  node: e,
  onClose: t
}) {
  let [l, r] = useState('preview');
  let [s, o] = useState(!1);
  let a = _$$f3(e);
  let d = function (e) {
    let [t, l] = useState(0);
    let {
      exchange
    } = $W(e?.guid);
    useEffect(() => {
      exchange?.messages?.length ? l(1) : e.sourceCode === _$$j5 ? l(0) : l(2);
    }, [exchange, e?.sourceCode]);
    return t;
  }(a);
  let {
    setAttachments
  } = _$$_4(a?.guid);
  let c = useCallback(e => {
    UM();
    t?.();
    setAttachments([]);
  }, [t, setAttachments]);
  let x = function () {
    let e;
    let [{
      windowInnerWidth: t,
      windowInnerHeight: l
    }] = useDebounce(_$$l5(), 300, {
      equalityFn: deepEqual
    });
    let [n, r] = useAtomValueAndSetter(yq);
    if (n) {
      let i = clamp(n.x, 0, t - n.width);
      let r = clamp(n.y, 0, l - n.height);
      let s = clamp(n.width, 640, t - i);
      let o = clamp(n.height, 480, l - r);
      e = {
        x: i,
        y: r,
        width: s,
        height: o
      };
    } else {
      let n = clamp(t * dj.targetPercentWidth, dj.minWidth, dj.maxWidth - 2 * dj.margin);
      let i = clamp(Math.min(n / dj.aspectRatio, l - 2 * dj.margin), dj.minHeight, dj.maxHeight);
      e = {
        x: (t - n) / 2,
        y: (l - i) / 2,
        width: n,
        height: i
      };
    }
    let s = useMemo(() => new Point(e.x, e.y), [e.x, e.y]);
    let o = useCallback(({
      x: e,
      y: t,
      width: l,
      height: i
    }) => {
      n && e === n.x && t === n.y && l === n.width && i === n.height || r({
        x: e,
        y: t,
        width: l,
        height: i
      });
    }, [n, r]);
    let a = useCallback(t => {
      let l = t.size?.x ?? e.width;
      let n = t.size?.y ?? e.height;
      o({
        x: t.position?.x ?? e.x,
        y: t.position?.y ?? e.y,
        width: l,
        height: n
      });
    }, [o, e.width, e.height, e.x, e.y]);
    return {
      initialPosition: s,
      initialHeight: e.height,
      initialWidth: e.width,
      handleTransform: a,
      constraints: db
    };
  }();
  let [p, h] = useState(x.initialWidth);
  let m = useRef(null);
  return e && e.isAlive ? jsx(_L, {
    defaultWidth: x.initialWidth,
    defaultHeight: x.initialHeight,
    onClose: c,
    defaultPosition: x.initialPosition,
    onTransform: e => {
      x.handleTransform(e);
      e.size && h(e.size.x);
    },
    ref: m,
    recordingKey: 'sites-code-window',
    draggable: 'anywhere',
    constraints: x.constraints,
    children: jsx(DialogContents, {
      children: jsx(DialogBody, {
        padding: 0,
        scrolling: 'none',
        children: jsxs(YZ, {
          direction: 'horizontal',
          children: [jsx(_$$Zk, {
            defaultSize: 35,
            minSize: 20,
            children: jsxs('div', {
              className: 'x78zum5 xdt5ytf x5yr21d',
              children: [jsx(dh, {
                name: e.name
              }), jsx(dc, {
                codeInstanceNode: e,
                entryPointCodeFile: a,
                isResizingPanel: s,
                previewState: d
              })]
            })
          }), jsx(TW, {
            onDragging: e => {
              o(e);
            },
            className: 'x1i1rx1s xbpqucl'
          }), jsx(_$$Zk, {
            children: jsxs('div', {
              className: 'x78zum5 xdt5ytf x5yr21d',
              children: [jsx(dm, {
                panelConfiguration: l,
                handleSegmentChange: r
              }), jsx(d_, {
                panelConfiguration: l,
                chatNode: a,
                codeInstanceNodeToRender: e,
                isDragging: s,
                windowRef: m,
                previewState: d
              })]
            })
          })]
        })
      })
    })
  }) : null;
}
function d_({
  panelConfiguration: e,
  chatNode: t,
  codeInstanceNodeToRender: l,
  isDragging: r,
  windowRef: s,
  previewState: o
}) {
  let d = useAtomWithSubscription(Jl);
  let u = UN().get(d);
  let c = _$$f3(t);
  let x = u?.guid;
  let p = t?.guid;
  let m = useCallback(e => {
    if (!x) return;
    let t = _$$O5.get(x);
    t && (e === _$$d.ERROR ? t.hasErrors = !0 : e === _$$d.LOADED && (t.hasErrors = !1));
  }, [x]);
  let f = useMemo(() => {
    let e = t?.codeFilePath || void 0;
    return jsx(_$$S3, {
      selectedCodeFileNode: u,
      nodeWithChatMessages: t,
      rootPath: e
    });
  }, [t, u]);
  let y = useMemo(() => jsx(_$$R2, {
    codeFile: u,
    nodeWithChatMessages: t,
    fullHeight: !0
  }), [t, u]);
  let _ = useCurrentFileKey();
  useEffect(() => {
    if (!x) return;
    let e = _$$O5.start(_, x);
    return () => e.end();
  }, [x, _]);
  let {
    triggerSelfHeal
  } = _$$u2({
    chatMessagesNode: t,
    disabled: !getFeatureFlags().bake_auto_error_fix,
    featureType: _$$lV.CODE_IN_SITES
  });
  let j = useCallback((e, t, l, n) => {
    c && triggerSelfHeal(c, l, n);
  }, [triggerSelfHeal, c]);
  let v = _$$rh(l);
  let C = useMemo(() => {
    let e = o === 2;
    return jsx('div', {
      ...Ay.props(dx.previewWrapper, !e && dx.previewWrapperHidden),
      children: jsx(_$$m4, {
        chatNodeId: p ?? null,
        codeSelectionToRender: v,
        disablePointerEvents: r,
        isVisible: !0,
        jsxDev: getFeatureFlags().code_layers_click_to_inspect,
        onError: j,
        onPreviewStateChange: m,
        sandbox: null,
        showViewOptions: !0,
        windowRef: s
      })
    });
  }, [v, s, m, r, p, j, o]);
  return jsx(Fragment, {
    children: jsxs('div', {
      className: 'x78zum5 xdt5ytf x5yr21d',
      children: [e === 'preview' && jsxs('div', {
        className: 'xh8yej3 x5yr21d x78zum5 xl56j7k x6s0dn4',
        children: [C, o === 1 && jsx(_$$Ay5, {}), o === 0 && jsx(_$$p4, {})]
      }), e === 'code' && jsxs(YZ, {
        direction: 'horizontal',
        children: [jsx(_$$Zk, {
          defaultSize: 35,
          children: f
        }), jsx(_$$Zk, {
          defaultSize: 65,
          children: y
        })]
      })]
    })
  });
}
let db = {
  minWidth: 640,
  minHeight: 480,
  maxWidth: '100vw',
  maxHeight: '100vh'
};
let dj = {
  minWidth: 750,
  minHeight: 500,
  maxWidth: 1200,
  maxHeight: 800,
  margin: 16,
  targetPercentWidth: 0.6,
  aspectRatio: 1.5
};
let dN = memo(({
  shouldShowDragAndDropBorder: e
}) => {
  let t = useAppModelProperty('isReadOnly');
  let l = d4(e => e.progressBarState);
  let p = useAppModelProperty('loadingEmbeds');
  let h = getObservableValue(AppStateTsApi?.uiState().showCanvasSearch, !1);
  let g = Lk();
  let m = useRef(null);
  let f = d4(e => e.userFlags);
  let y = !!getFeatureFlags().internal_only_debug_tools || !!f.has_cursor_bot_onboarding_v2;
  let _ = d4(e => e.openFile);
  let b = _ ? _.key : '';
  Gb(b);
  _$$W2();
  useAutosuggestShadowRead();
  let j = BI();
  let v = _$$e3();
  let C = useIsFullscreenDevModeComponentBrowser();
  let k = useIsFullscreenOverview();
  let E = getObservableValue(EditorPreferencesApi().enableCodegenMcpServer, !1);
  let S = $();
  let w = BE();
  let R = jsx(_$$m, {
    'role': 'region',
    'aria-label': getI18nString('fullscreen_actions.left_sidebar_label'),
    'children': k ? jsx(ErrorBoundaryCrash, {
      boundaryKey: 'DevModeLeftPanel',
      fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
      sentryTags: {
        area: eBU.DEVELOPER_TOOLS
      },
      children: jsx(_$$O, {})
    }) : jsx(_$$m3, {})
  });
  return jsxs(oJ, {
    children: [jsx(ED, {}), jsxs(_$$sk, {
      children: [l.mode !== UIVisibilitySetting.OFF && jsx('div', {
        className: _q
      }), jsxs(pO, {
        initialFilterState: {
          currentPage: !1
        },
        children: [p.map(e => jsx(_$$_2, {
          nodeId: e
        }, `loading-embed-${e}`)), w && S && jsx(ej, {}), jsx(qn, {}), jsx(_$$u3, {}), h && jsx(_$$n3, {}), getFeatureFlags().ce_al_experiments_on && jsx(_$$n3, {}), jsx(_$$G4, {}), jsx(_$$b4, {}), jsx(_$$J7, {}), !k && !v && !C && jsx(_$$b3, {}), getFeatureFlags().dt_mcp_auto_resources && E && jsx(y6, {}), jsx(XI, {
          commentsDetailContainerRef: m
        }), jsx(_$$Z3, {}), getFeatureFlags().cursor_bot && y && jsx(_$$S2, {}), jsx(_$$X4, {}), jsx(_$$J6, {}), jsx(Nz, {}), jsx('div', {
          ref: m
        }), !isVsCodeEnvironment() && R, !t && jsx(_$$E8, {}), jsx(_$$G3, {
          children: k ? null : jsxs(Fragment, {
            children: [jsx(dA, {}), !!j?.shouldOptimizeForIpadApp && jsx(_$$K3, {}), !!j?.shouldOptimizeForIpadApp && jsx(_$$t5, {})]
          })
        }), getFeatureFlags().bake_canvas && jsx(dp, {}), e && jsx(X5, {}), getFeatureFlags().aip_flower_garden && jsx(oD, {})]
      }), jsx(_$$A3, {
        editorType: FEditorType.Design,
        openFile: _
      }), jsx(_$$l8, {
        defaultViewTabsAvailable: !0,
        defaultViewAssetsTabVisible: !0
      })]
    }), g && jsx(_$$K2, {
      className: PA,
      children: jsx(_$$s5, {})
    })]
  });
});
let dA = memo(() => {
  let e = useAppModelProperty('topLevelMode');
  let t = useHasSceneGraphSelection();
  let l = useCurrentTool();
  _$$z({
    topLevelMode: ViewType.PREVIEW,
    eventName: 'Preview Mode Selection Changed',
    teamFilesOnly: !0
  });
  useEffect(() => {
    t && e === ViewType.PREVIEW && l !== DesignGraphElements.COMMENTS && setPropertiesPanelTab(DesignWorkspace.INSPECT);
  }, [t, e, l]);
  return jsxs(Fragment, {
    children: [jsx(a_, {}), jsx(dM, {})]
  });
});
let dM = memo(() => {
  return jsxs(Fragment, {
    children: [jsx(_$$p2, {
      children: jsx(NuxOnboardingOverlay, {
        entryPoint: C5.Design
      })
    }), jsx(_$$p2, {
      featureFlag: 'starting_points_modal',
      children: jsx(lL, {})
    }), jsx(_$$p2, {
      children: jsx(t4, {})
    }), jsx(_$$p2, {
      children: jsx(th, {})
    }), jsx(_$$p2, {
      children: jsx(tk, {})
    }), jsx(_$$p2, {
      children: jsx(_$$e6, {})
    }), jsx(_$$p2, {
      children: jsx(eW, {})
    }), jsx(_$$p2, {
      children: jsx(_$$A, {})
    }), jsx(_$$p2, {
      featureFlag: 'mobile_prompt_sidebar_modal',
      children: jsx(aO, {})
    }), jsx(_$$p2, {
      children: jsx(_$$S, {})
    }), jsx(_$$p2, {
      children: jsx(lV, {})
    }), jsx(_$$p2, {
      children: jsx(e7, {})
    }), jsx(_$$p2, {
      children: jsx(tW, {})
    }), jsx(_$$p2, {
      featureFlag: 'cheddar',
      children: jsx(Ab, {})
    }), jsx(_$$p2, {
      featureFlag: 'bob_template_gen',
      children: jsx(_$$E1, {})
    })]
  });
});
export function $$dO0() {
  let [e, t] = useState(!1);
  return jsx(_$$c3, {
    loadedCommentsProvider: !1,
    children: jsx(_$$v2, {
      setShouldShowDragAndDropBorder: t,
      isDragTarget: !1,
      children: jsx(dN, {
        shouldShowDragAndDropBorder: e
      })
    })
  });
}
export const DesignView = $$dO0;