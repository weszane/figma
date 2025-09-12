import rN from 'classnames';
import { PureComponent, Suspense, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { H as _$$H } from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import iN, { BEGIN, COMMIT, REVERT } from 'redux-optimist';
import { reportError, setContextGlobal, setTagGlobal, SeverityLevel } from '../905/11';
import { WR, X0 } from '../905/2848';
import { vq as _$$vq } from '../905/8732';
import { cL as _$$cL4, hZ as _$$hZ2 } from '../905/14223';
import { createActionCreator } from '../905/73481';
import { Sc } from '../905/18797';
import { R as _$$R4 } from '../905/22352';
import { aj as _$$aj, uf as _$$uf, uu as _$$uu, fJ, Ut, w7 } from '../905/25169';
import { W as _$$W } from '../905/25249';
import { yu as _$$yu, FU } from '../905/26824';
import { T as _$$T2 } from '../905/27228';
import { iZ as _$$iZ } from '../905/29425';
import { pB as _$$pB, pg as _$$pg, sf as _$$sf2, _I, bx, DE, HZ, JF, PY } from '../905/34809';
import { P as _$$P3 } from '../905/35881';
import { p as _$$p } from '../905/36308';
import { z4 } from '../905/37051';
import { bL } from '../905/38914';
import { yz } from '../905/42209';
import { A as _$$A8 } from '../905/47292';
import { mJ as _$$mJ, CK, SF, TW } from '../905/55862';
import { u as _$$u2 } from '../905/56919';
import { m as _$$m4 } from '../905/65216';
import { $9, cL as _$$cL, ku as _$$ku, q0 as _$$q2, sM as _$$sM, uh as _$$uh, _b, AF, Am, BZ, Mo, Q4, RO, U3, xY, y3 } from '../905/70982';
import { an as _$$an2, PW as _$$PW, y$ as _$$y$, TK } from '../905/81009';
import { cY as _$$cY, fk as _$$fk, lg as _$$lg, n$ as _$$n$2, rf as _$$rf, rj as _$$rj, Fd, Fj, GR, JK, JR, Ud } from '../905/81459';
import { ck as _$$ck4 } from '../905/87821';
import { vx } from '../905/91038';
import { b as _$$b2, d as _$$d4 } from '../905/91820';
import { k as _$$k5 } from '../905/93362';
import { c5 as _$$c4, uo as _$$uo8 } from '../905/93909';
import { i as _$$i5 } from '../905/97346';
import { bE as _$$bE4, uo as _$$uo5, yH as _$$yH3, yJ as _$$yJ5 } from '../905/98702';
import { useSprigWithSampling } from '../905/99656';
import { ModalSupportsBackground, registerModal } from '../905/102752';
import { C as _$$C2 } from '../905/109977';
import { cZ as _$$cZ2, Xc } from '../905/113138';
import { oB as _$$oB2, Oi, Ql, ZN } from '../905/115338';
import { eo as _$$eo, En, IN, jx, KE, Kl, SI } from '../905/116101';
import { xK } from '../905/125218';
import { E as _$$E4 } from '../905/128063';
import { Zj as _$$Zj, Ib, zr } from '../905/129884';
import { filterNavigationConfig, navigationConfig } from '../905/139708';
import { A as _$$A11 } from '../905/142432';
import { Kz as _$$Kz } from '../905/145989';
import { CL } from '../905/148074';
import { Q as _$$Q3 } from '../905/150006';
import { t as _$$t5 } from '../905/150656';
import { N as _$$N3 } from '../905/155850';
import { hideModal, hideSpecificModal, popModalStack, popPrevModal, showModal, showModalHandler, updateModal } from '../905/156213';
import { useThemeContext, ThemeProvider } from '../905/158740';
import { mO as _$$mO, Y5 as _$$Y3, kI } from '../905/163189';
import { ServiceCategories as _$$e } from '../905/165054';
import { createFontMetadata, getFontOwner } from '../905/165290';
import { c as _$$c3 } from '../905/167005';
import { a as _$$a2 } from '../905/173279';
import { C as _$$C, Y as _$$Y } from '../905/180528';
import { g as _$$g } from '../905/181093';
import { t as _$$t4 } from '../905/181774';
import { i as _$$i4 } from '../905/182187';
import { Z as _$$Z4 } from '../905/184216';
import { i_ as _$$i_, FB, Q5 } from '../905/187165';
import { permissionScopeHandler as _$$l3 } from '../905/189185';
import { l as _$$l10 } from '../905/190247';
import { t as _$$t9 } from '../905/192333';
import { mC as _$$mC, X7 as _$$X5, zq } from '../905/193529';
import { $j, dB as _$$dB, E as _$$E, hE as _$$hE, Sr as _$$Sr, AP, Em, Hh, Jv, kL, KS, My, Qg, Ts, WY, xw } from '../905/194276';
import { j as _$$j4 } from '../905/200237';
import { px as _$$px2 } from '../905/201014';
import { H as _$$H4 } from '../905/202181';
import { h as _$$h } from '../905/207101';
import { x as _$$x3 } from '../905/209285';
import { createMixedArray, MIXED_MARKER } from '../905/216495';
import { w as _$$w } from '../905/230422';
import { resolveMessage } from '../905/231762';
import { y as _$$y } from '../905/235145';
import { delay } from '../905/236856';
import { N as _$$N5 } from '../905/239398';
import { z as _$$z3 } from '../905/239603';
import { $ as _$$$4 } from '../905/240853';
import { a as _$$a5 } from '../905/242083';
import { g as _$$g2 } from '../905/248178';
import { nE as _$$nE, EU } from '../905/255097';
import { dK as _$$dK, TE, v9 } from '../905/266289';
import { createReduxSubscriptionAtomWithState } from '../905/270322';
import { datadogRum } from '../905/270963';
import { teamOrOrgIdAtom, parentOrgIdAtom } from '../905/276025';
import { A as _$$A } from '../905/289770';
import { L as _$$L } from '../905/293182';
import { Q8, R9 } from '../905/294085';
import { initializeIntegrationEnvironment, sendMessageToParent } from '../905/298920';
import { setLastUsedEditorType } from '../905/298923';
import { E as _$$E3, ie as _$$ie, nM as _$$nM, Nu, SL } from '../905/300250';
import { F as _$$F5 } from '../905/300562';
import { p as _$$p2 } from '../905/300815';
import { r as _$$r } from '../905/302698';
import { VisualBellActions } from '../905/302958';
import { getI18nString, loadI18nState, renderI18nText } from '../905/303541';
import { T as _$$T3, v as _$$v4 } from '../905/309844';
import { sR as _$$sR } from '../905/309846';
import { $N, an as _$$an, OX, OZ, Sp, U_ } from '../905/327855';
import { F as _$$F4, r as _$$r7 } from '../905/336143';
import { v as _$$v5 } from '../905/344656';
import { D6 as _$$D5, Nx } from '../905/345933';
import { updateJoinStatus } from '../905/346794';
import { P as _$$P4 } from '../905/347284';
import { createOptimistThunk } from '../905/350402';
import { E as _$$E8 } from '../905/355220';
import { l as _$$l5 } from '../905/362016';
import { selectCurrentUser } from '../905/372672';
import { S as _$$S3 } from '../905/373189';
import { y as _$$y3 } from '../905/375507';
import { T as _$$T4 } from '../905/378189';
import { xH as _$$xH } from '../905/378567';
import { EB as _$$EB, hm as _$$hm2 } from '../905/380385';
import { Cs as _$$Cs } from '../905/381612';
import { $ as _$$$3 } from '../905/383708';
import { getWAFChallengeType, wafManager } from '../905/394005';
import { dH as _$$dH, tJ as _$$tJ, uo as _$$uo6, yJ as _$$yJ6, _P, K5 } from '../905/395917';
import { _ as _$$_ } from '../905/401345';
import { U as _$$U3 } from '../905/402186';
import { withParsedMeta } from '../905/405710';
import { debugState } from '../905/407919';
import { getFileKey, FileKeySourceEnum } from '../905/412913';
import { getCookieOrStorage } from '../905/414007';
import { Ok } from '../905/414069';
import { t as _$$t6 } from '../905/414363';
import { performanceMetricsTracker } from '../905/414972';
import { v as _$$v3 } from '../905/417890';
import { getResourceDataOrFallback } from '../905/419236';
import { H as _$$H5 } from '../905/422284';
import { LivegraphProvider } from '../905/436043';
import { useModalManager } from '../905/437088';
import { N as _$$N2 } from '../905/438674';
import { _O, vf, Y7, z$ } from '../905/438864';
import { k as _$$k2 } from '../905/443820';
import { CL as _$$CL, Dc as _$$Dc, hf as _$$hf, Mt } from '../905/445022';
import { analyticsEventManager, trackEventAnalytics } from '../905/449184';
import { o as _$$o5 } from '../905/451156';
import { notificationActions } from '../905/463586';
import { N as _$$N4 } from '../905/465068';
import { bE as _$$bE5, CN as _$$CN, iC as _$$iC, iE as _$$iE3, nF as _$$nF, nK as _$$nK, nX as _$$nX, uo as _$$uo7, yJ as _$$yJ7, ER, kE } from '../905/466026';
import { id as _$$id2, lk as _$$lk, nq as _$$nq, Qh as _$$Qh, Xc as _$$Xc, FY, Kb, wG } from '../905/469533';
import { O as _$$O2 } from '../905/480562';
import { formatI18nMessage } from '../905/482208';
import { R as _$$R } from '../905/483499';
import { sendMetric } from '../905/485103';
import { $ as _$$$2 } from '../905/489647';
import { S as _$$S7 } from '../905/491708';
import { b as _$$b4 } from '../905/493664';
import { N as _$$N6 } from '../905/493958';
import { C as _$$C3 } from '../905/496700';
import { G as _$$G2, j as _$$j2 } from '../905/496937';
import { f as _$$f, r as _$$r2 } from '../905/501976';
import { handleAtomEvent } from '../905/502364';
import { au as _$$au2, hK as _$$hK, Y9 as _$$Y2, yu } from '../905/504768';
import { $R, dR as _$$dR, mc as _$$mc, Lb, NQ, wy } from '../905/508367';
import { TranslationErrors } from '../905/508408';
import { vv } from '../905/508457';
import { T9 } from '../905/511649';
import { resolveTeamId } from '../905/515860';
import { OJ } from '../905/519092';
import { r as _$$r9 } from '../905/520829';
import { J as _$$J2 } from '../905/521144';
import { $n } from '../905/521428';
import { ex as _$$ex } from '../905/524523';
import { UN } from '../905/525678';
import { oU as _$$oU, B3, Sr } from '../905/535224';
import { q as _$$q5 } from '../905/540614';
import { a as _$$a4, V as _$$V2 } from '../905/541060';
import { R as _$$R5 } from '../905/542113';
import { reactTimerGroup } from '../905/542194';
import { xH } from '../905/546357';
import { subscribeAndGetStatus } from '../905/553831';
import { $B, aL as _$$aL, hT as _$$hT2, Y4 } from '../905/561087';
import { registerDeferredCallback, requestDeferredExecution } from '../905/561433';
import { i as _$$i2 } from '../905/565139';
import { nD as _$$nD, uB as _$$uB } from '../905/572991';
import { FlashActions } from '../905/573154';
import { vj, zQ } from '../905/574958';
import { l as _$$l0, q as _$$q4 } from '../905/578831';
import { pf as _$$pf } from '../905/579526';
import { l as _$$l7 } from '../905/579959';
import { H as _$$H7 } from '../905/581820';
import { pE as _$$pE, yJ as _$$yJ8 } from '../905/584989';
import { t3 as _$$t8, xH as _$$xH4, YG as _$$YG, CU, Dp, EN, hq, JG, Mi, Mn, OT, Pb, qM, TL, w3, Ww, zv } from '../905/586954';
import { WZ } from '../905/587414';
import { h as _$$h3 } from '../905/594794';
import { P as _$$P7, z as _$$z } from '../905/595507';
import { getFeatureFlags } from '../905/601108';
import { Im } from '../905/608145';
import { TH } from '../905/609392';
import { PerfTimer } from '../905/609396';
import { customHistory, CustomRouter } from '../905/612521';
import { uW as _$$uW, yJ as _$$yJ9, Z as _$$Z3 } from '../905/618921';
import { _G, Pv } from '../905/619652';
import { e as _$$e5 } from '../905/621515';
import { setupFileObject } from '../905/628874';
import { E as _$$E9 } from '../905/632989';
import { parseAndNormalizeQuery, parseQuery, removeQueryParam, serializeQuery } from '../905/634134';
import { A as _$$A0, y as _$$y6 } from '../905/638715';
import { fileImporter, initializeFileImporter } from '../905/642505';
import { k as _$$k3 } from '../905/644504';
import { createFileLibraryKeys } from '../905/651613';
import { logger } from '../905/651849';
import { getLocalStorage, getStorage, localStorageRef, useLocalStorageSync } from '../905/657224';
import { $T, KJ as _$$KJ, Vx as _$$Vx, V0 } from '../905/657710';
import { ResourceStatus } from '../905/663269';
import { j2 } from '../905/667970';
import { S as _$$S4 } from '../905/669334';
import { measureAsyncDuration, measureSyncDuration } from '../905/670985';
import { sh as _$$sh, uA as _$$uA, xN, YO } from '../905/672897';
import { oW as _$$oW } from '../905/675859';
import { createOptimistCommitAction, createOptimistRevertAction } from '../905/676456';
import { tD as _$$tD, FO, Hj } from '../905/682977';
import { cZ as _$$cZ, oM as _$$oM, pF as _$$pF, tU as _$$tU } from '../905/683495';
import { EO } from '../905/691205';
import { Hc } from '../905/694658';
import { e0 as _$$e3 } from '../905/696396';
import { N as _$$N } from '../905/696711';
import { R as _$$R3, V as _$$V3 } from '../905/697254';
import { De as _$$De } from '../905/697795';
import { X as _$$X2 } from '../905/698965';
import { getSingletonSceneGraph, SingletonSceneGraph } from '../905/700578';
import { o as _$$o8 } from '../905/701807';
import { U as _$$U } from '../905/707331';
import { S3 } from '../905/708054';
import { vV } from '../905/709095';
import { eE as _$$eE } from '../905/709171';
import { uiVariantName } from '../905/709735';
import { us as _$$us2, xp } from '../905/711212';
import { S as _$$S5 } from '../905/711770';
import { IT, M4 } from '../905/713695';
import { logDebug, logError, logInfo, logWarning } from '../905/714362';
import { lG as _$$lG } from '../905/714538';
import { B as _$$B2 } from '../905/714743';
import { H as _$$H6 } from '../905/715533';
import { l as _$$l6 } from '../905/716947';
import { I as _$$I2 } from '../905/717213';
import { oA as _$$oA2 } from '../905/723791';
import { P as _$$P2 } from '../905/724705';
import { y as _$$y2 } from '../905/725962';
import { Point } from '../905/736624';
import { uM as _$$uM, HO } from '../905/738636';
import { extractOriginalTextMap } from '../905/744769';
import { l as _$$l1 } from '../905/745972';
import { x as _$$x4 } from '../905/749159';
import { k as _$$k6 } from '../905/749197';
import { f as _$$f3 } from '../905/749689';
import { B as _$$B } from '../905/749933';
import { tH as _$$tH, As, H4, S1 } from '../905/751457';
import { handlePluginError } from '../905/753206';
import { getRepoByIdAlt, isBranchAlt, getRepoById, isBranch } from '../905/760074';
import { m as _$$m } from '../905/760316';
import { MV, WB } from '../905/761735';
import { pP as _$$pP, fW } from '../905/765855';
import { getSelectedFile, getNewFileConfig } from '../905/766303';
import { handlePropertyState } from '../905/770460';
import { gD } from '../905/775298';
import { pw as _$$pw, q5 as _$$q3 } from '../905/776312';
import { M as _$$M } from '../905/777093';
import { $A } from '../905/782918';
import { UPDATE_FETCHED_PAGE_IDS, VERSION_HISTORY_APPEND, VERSION_HISTORY_COMPARE_CHANGES, VERSION_HISTORY_LOADING, VERSION_HISTORY_PAGE_LOADING, VERSION_HISTORY_RESET, VERSION_HISTORY_RESET_VERSIONS, VERSION_HISTORY_SET_ACTIVE, VERSION_HISTORY_SET_DOC_HAS_CHANGED, VERSION_HISTORY_SET_FILE_LAST_SEEN_AT, VERSION_HISTORY_SET_LINKED_VERSION } from '../905/784363';
import { X as _$$X3 } from '../905/784599';
import { FullscreenMenu, PluginMenu } from '../905/791556';
import { L4 as _$$L2, jr } from '../905/792802';
import { x as _$$x2 } from '../905/805083';
import { d as _$$d5 } from '../905/811033';
import { TeamType } from '../905/814802';
import { languageCodes } from '../905/816253';
import { F0 } from '../905/820492';
import { F2 } from '../905/826900';
import { F as _$$F3 } from '../905/827944';
import { u as _$$u3 } from '../905/831362';
import { O as _$$O } from '../905/833838';
import { $ as _$$$ } from '../905/834575';
import { oO as _$$oO, EE, Pq, Rg, XV, Yw } from '../905/837497';
import { generateOptimistId } from '../905/842794';
import { o0 as _$$o4, NG } from '../905/844131';
import { N as _$$N8 } from '../905/844455';
import { sZ as _$$sZ } from '../905/845253';
import { j as _$$j3 } from '../905/848904';
import { c as _$$c6 } from '../905/850166';
import { hM as _$$hM } from '../905/851937';
import { D as _$$D2 } from '../905/852057';
import { n0 as _$$n4, oI as _$$oI3, QA as _$$QA2, uQ as _$$uQ, Lh, Mc, Xp } from '../905/854717';
import { isVsCodeEnvironment } from '../905/858738';
import { n3 as _$$n2, Rf, VariableStyleId } from '../905/859698';
import { cc as _$$cc, zl as _$$zl, By, qB, RE, vR } from '../905/862321';
import { RD } from '../905/862913';
import { w as _$$w2 } from '../905/863010';
import { xH as _$$xH2 } from '../905/869282';
import { areSessionLocalIDsEqual, defaultSessionLocalIDString } from '../905/871411';
import { generateUUIDv4 } from '../905/871474';
import { createDeferredPromise } from '../905/874553';
import { $I as _$$$I, ay as _$$ay, cr as _$$cr, dC as _$$dC, iE as _$$iE2, lx as _$$lx, ow as _$$ow, ru as _$$ru, uo as _$$uo3, yH as _$$yH2, B2, Bn, Cp, gP, Ho, HV, I0, JV, KQ, ku, Ty, U$, UA, WE, xI, Y1 } from '../905/879323';
import { P6, VK, YF, YK } from '../905/880488';
import { D as _$$D4 } from '../905/882262';
import { updateEnvironmentInfo } from '../905/883621';
import { cR as _$$cR2, hG as _$$hG2, HZ as _$$HZ2, os as _$$os2, Qv as _$$Qv2, vv as _$$vv, b1, KW, L_, Nh, Nr, RF } from '../905/890368';
import { iz as _$$iz, oo as _$$oo, r_ as _$$r_ } from '../905/895600';
import { p as _$$p4 } from '../905/895920';
import { t as _$$t } from '../905/897919';
import { Au, h8, UK } from '../905/898493';
import { XHR } from '../905/910117';
import { F as _$$F6 } from '../905/915030';
import { A as _$$A5 } from '../905/920142';
import { useFullscreenReady } from '../905/924253';
import { cr as _$$cr2, Oo as _$$Oo } from '../905/926523';
import { E as _$$E5, v as _$$v2 } from '../905/928543';
import { ab as _$$ab, ho as _$$ho, o7 as _$$o2, oB as _$$oB, os as _$$os, sf as _$$sf, Ts as _$$Ts, Qv } from '../905/929976';
import { A7, EL, H_ } from '../905/932769';
import { b as _$$b3 } from '../905/937225';
import { o as _$$o3 } from '../905/938553';
import { f as _$$f4 } from '../905/940356';
import { sx as _$$sx2 } from '../905/941192';
import { F1 } from '../905/941249';
import { Gk as _$$Gk, jH } from '../905/950959';
import { hv as _$$hv } from '../905/952832';
import { Mt as _$$Mt, AJ, CG, qI, vB, XJ } from '../905/959568';
import { Dk as _$$Dk, O9, qG, qS, W$, XG } from '../905/970170';
import { S as _$$S6 } from '../905/970585';
import { ej as _$$ej, eK as _$$eK2, hS as _$$hS3, Je as _$$Je, KQ as _$$KQ, Ns as _$$Ns, pY as _$$pY, qv as _$$qv, r0 as _$$r8, _z, Dy, H7, HI, ky, NR, PI, Pj, PP, qr, R7, Rz, vK, W0, w2, Z6, zy } from '../905/977218';
import { qp } from '../905/977779';
import { A as _$$A6, b as _$$b } from '../905/985254';
import { Y as _$$Y4 } from '../905/986107';
import { Q as _$$Q2 } from '../905/986450';
import { a6 as _$$a3, cb as _$$cb, oI as _$$oI, rO as _$$rO, t7 as _$$t3, yF as _$$yF, jT, Kh, LV, Pp, Zq } from '../905/989765';
import { Wm } from '../905/990455';
import { l as _$$l4 } from '../905/997221';
import { cT as _$$cT, mI as _$$mI, P8, PG, qF, vr } from '../905/997533';
import { ProviderType, OperationStatus } from '../3973/473379';
import { h as _$$h6, I as _$$I3 } from '../3973/647885';
import { numericAtom, processSelector } from '../3973/697935';
import { trackStatsigPlanKeyBootstrap } from '../3973/890507';
import { s as _$$s } from '../cssbuilder/589278';
import { at as _$$at } from '../figma_app/987';
import { DFF } from '../figma_app/6204';
import { aN as _$$aN, o$ as _$$o$, AB, h2, J6, vu } from '../figma_app/8833';
import { lW as _$$lW2 } from '../figma_app/11182';
import { GV as _$$GV, us as _$$us, PK } from '../figma_app/12220';
import { canRunExtensions, canPerformAction } from '../figma_app/12796';
import { yJ as _$$yJ, S5, WJ } from '../figma_app/24841';
import { tP as _$$tP, atom, AtomProvider, atomStoreManager, createLocalStorageAtom, useAtomValueAndSetter, useAtomWithSubscription, Xr } from '../figma_app/27355';
import { YQL } from '../figma_app/27776';
import { hZ as _$$hZ6, w4, yo } from '../figma_app/28323';
import { ec as _$$ec } from '../figma_app/29089';
import { AccountTypeEnum } from '../figma_app/35887';
import { BlockingUserState, CommunityPaymentsForRealtimeShim, ComponentUpdatesForFile, ComponentUpdatesForProject, ComponentUpdatesForTeam, EduGracePeriodsForUser, FontFileForOrgView, FontFileForTeamView, OpenEditorFileData, OrgByIdForPlanUserView, OrgByIdForPlanView, OrgByIdForRealtimeShim, OrgUsersForRealtimeShim, PluginUpdatesForOrg, RepoByIdForRealtimeShim, ReposForFile, ReposForProject, ReposForTeam, RoleUpdatesForTeam, RoleUpdatesForUser, StateGroupUpdatesForFile, StateGroupUpdatesForProject, StateGroupUpdatesForTeam, StatsigTeamsOrderView, TeamByIdForPlanUserView, TeamByIdForPlanView, TeamByIdForRealtimeShim, UserForRealtimeShim, UserTeamFlagsForRealtimeShim, UserTeamRoleRequestView, WhitelistedPluginsForOrg, WidgetUpdatesForOrg } from '../figma_app/43951';
import { Qv as _$$Qv, vt as _$$vt } from '../figma_app/45218';
import { eq as _$$eq, FO as _$$FO, Ri as _$$Ri, D3, L1, QA, Sb, wO, yh } from '../figma_app/49598';
import { FEditorType, mapEditorTypeToString, mapEditorTypeToStringWithObfuscated, mapEditorTypeToWorkspaceType, mapFileTypeToEditorType } from '../figma_app/53721';
import { o as _$$o6 } from '../figma_app/54816';
import { c3 as _$$c, S as _$$S, sF as _$$sF, uo as _$$uo, bE, jO, Lk, Nw, PB, PF, U2, yJ, Yp } from '../figma_app/78808';
import { teamLibraryCache, revokeThumbnailUrl } from '../figma_app/80990';
import { executeDeferredCallbacks, subscribeObservable } from '../figma_app/84367';
import { nm as _$$nm, kQ, Yb } from '../figma_app/86921';
import { Wl } from '../figma_app/88239';
import { aK as _$$aK, ho as _$$ho2, il as _$$il, lz as _$$lz, p5 as _$$p3, pj as _$$pj, PQ as _$$PQ, re as _$$re, Uv as _$$Uv, bO, Bs, CN, D9, fG, fk, FP, fy, Gm, JM, Jt, kP, Kx, OB, Qm, R5, Rw, U8, UC, UM, vg, Wk, XE, XQ, Y6, yv, Z1, Z_ } from '../figma_app/91703';
import { isNotNullish } from '../figma_app/95419';
import { Ob } from '../figma_app/111825';
import { lX as _$$lX } from '../figma_app/120227';
import { au as _$$au, cx as _$$cx, hL as _$$hL, Ho as _$$Ho, rT as _$$rT, D6, gA, H1, U6, Vw, w9 } from '../figma_app/124493';
import { cn as _$$cn } from '../figma_app/141320';
import { dK as _$$dK2, xt } from '../figma_app/149304';
import { iO as _$$iO } from '../figma_app/149367';
import { hV as _$$hV2, Dc } from '../figma_app/151766';
import { p as _$$p5 } from '../figma_app/160942';
import { Rx as _$$Rx, uH as _$$uH, fS, Rr } from '../figma_app/162807';
import { v2 } from '../figma_app/164260';
import { xZ } from '../figma_app/165422';
import { qV } from '../figma_app/165623';
import { buildUploadUrl, defaultUserConfig, getInitialOptions, isGovCluster, isLocalCluster, isProdCluster, isStagingCluster } from '../figma_app/169182';
import { StatusType } from '../figma_app/175992';
import { c0 as _$$c5 } from '../figma_app/176973';
import { createNoOpValidator } from '../figma_app/181241';
import { Ni } from '../figma_app/188152';
import { FAccessLevelType, FBasicPermissionType, FFeatureAdoptionStatusType, FFileType, FOrganizationLevelType, FPaymentHealthStatusType, FPermissionLevelType, FPlanAccessType, FPlanRestrictionType, FProductAccessType, FPublicationStatusType, FResourceCategoryType, FTeamAccessPermissionType, FUserRoleType } from '../figma_app/191312';
import { K as _$$K3, U2 as _$$U2, bW, Iu, Np, vU, yn } from '../figma_app/193867';
import { P0 } from '../figma_app/198387';
import { iT as _$$iT, Q3, xT } from '../figma_app/199513';
import { FC } from '../figma_app/212807';
import { bO as _$$bO, Cg as _$$Cg, xA as _$$xA, jt, LC, qy } from '../figma_app/216057';
import { wJ as _$$wJ } from '../figma_app/216696';
import { N as _$$N9 } from '../figma_app/240060';
import { $I, $V, $w, aB as _$$aB, bE as _$$bE2, ii as _$$ii, Jt as _$$Jt, mw as _$$mw, n9 as _$$n, r1 as _$$r5, uo as _$$uo2, yH as _$$yH, yJ as _$$yJ3, _E, bQ, TI, WC } from '../figma_app/240735';
import { m as _$$m2 } from '../figma_app/247343';
import { tB as _$$tB, wc, Zp } from '../figma_app/253220';
import { N as _$$N0 } from '../figma_app/268271';
import { hE as _$$hE2, nB as _$$nB, vo as _$$vo, jk, wi, Y9 } from '../figma_app/272243';
import { td as _$$td } from '../figma_app/273118';
import { h as _$$h2 } from '../figma_app/275739';
import { Gk } from '../figma_app/277330';
import { useSubscription } from '../figma_app/288654';
import { wl, y4 } from '../figma_app/298277';
import { getPluginVersion } from '../figma_app/300692';
import { g3 } from '../figma_app/304207';
import { RR } from '../figma_app/307841';
import { mu as _$$mu, sm as _$$sm, V9 as _$$V4, K6, PU, yc } from '../figma_app/308685';
import { ds as _$$ds, PB as _$$PB, uE as _$$uE, z_ } from '../figma_app/314264';
import { dO as _$$dO2 } from '../figma_app/318123';
import { mg as _$$mg, on as _$$on, j3, Ri } from '../figma_app/327577';
import { E as _$$E6, hZ as _$$hZ4, Lx, MT } from '../figma_app/330108';
import { M2 as _$$M3, Sp as _$$Sp, k3 } from '../figma_app/332085';
import { E as _$$E7, hZ as _$$hZ5 } from '../figma_app/342125';
import { ce as _$$ce, cm as _$$cm, GH } from '../figma_app/347146';
import { Ns } from '../figma_app/349248';
import { fj } from '../figma_app/357047';
import { getI18nState, reportTranslationIssue } from '../figma_app/363242';
import { bE as _$$bE3, hV as _$$hV3, z9 } from '../figma_app/375098';
import { Ob as _$$Ob, Po, Zy } from '../figma_app/378195';
import { Tm } from '../figma_app/385874';
import { _6, z3 } from '../figma_app/386952';
import { e9 as _$$e4, h8 as _$$h5, he as _$$he, iy as _$$iy, lV as _$$lV, n0 as _$$n3, N9 as _$$N7, oI as _$$oI2, ot as _$$ot, Pg as _$$Pg, A3, bA, CE, Cs, HS, I4, Ir, k1, ks, NL, OC, Ox, UX, V9, WA, wk } from '../figma_app/389091';
import { setupShadowRead, adminPermissionConfig, setupShadowReadWithConfig } from '../figma_app/391338';
import { ce as _$$ce2, cv as _$$cv, E as _$$E2, hZ } from '../figma_app/401069';
import { Au as _$$Au, mX as _$$mX, oF as _$$oF, rx as _$$rx, sZ as _$$sZ2, _L, BG, Bt, fL, GD, hQ, LF, N$, w_, wS } from '../figma_app/415217';
import { iE as _$$iE, Ng, xf } from '../figma_app/416935';
import { b4 as _$$b5, _V } from '../figma_app/421886';
import { g5 } from '../figma_app/422062';
import { hg as _$$hg } from '../figma_app/425489';
import { parseOrgParentId } from '../figma_app/428858';
import { h0, TP, Y3, zE } from '../figma_app/435872';
import { PI as _$$PI, s6 as _$$s4, AY } from '../figma_app/443991';
import { fullscreenValue } from '../figma_app/455680';
import { Cp as _$$Cp } from '../figma_app/457074';
import { q as _$$q } from '../figma_app/458300';
import { useCurrentPlanUser, useIsOrgMemberOrAdminUser, useTeamPlanUser, useIsOrgAdminUser, useTeamPlanFeatures } from '../figma_app/465071';
import { assert, debug, noop, throwTypeError } from '../figma_app/465776';
import { isIntegrationContext, isZoomIntegration } from '../figma_app/469876';
import { G as _$$G } from '../figma_app/471068';
import { Cg, Ug, v7 } from '../figma_app/475303';
import { $h, Ay as _$$Ay4, eK as _$$eK, Lo as _$$Lo, pv as _$$pv, Qg as _$$Qg, Ts as _$$Ts2, Az, Ef, i, I2, Je, js, M2, MN, Mv, Qe, qU, WG, XS, yy } from '../figma_app/482142';
import { clamp, randomBetween } from '../figma_app/492908';
import { isEmptyObject } from '../figma_app/493477';
import { I2 as _$$I, pk as _$$pk, tb as _$$tb, tp as _$$tp, _X, Il, kb, Um, yk } from '../figma_app/502247';
import { ih as _$$ih, l7 as _$$l } from '../figma_app/504640';
import { up as _$$up2 } from '../figma_app/506364';
import { LN } from '../figma_app/514043';
import { Fi, YD } from '../figma_app/515363';
import { selectCurrentFile, openFileKeyAtom } from '../figma_app/516028';
import { df as _$$df, Sb as _$$Sb, De, WM } from '../figma_app/519839';
import { A as _$$A9 } from '../figma_app/526287';
import { P as _$$P, Z as _$$Z } from '../figma_app/529847';
import { cO as _$$cO, cR as _$$cR, dv as _$$dv, eg as _$$eg, ig as _$$ig, r1 as _$$r6, rO as _$$rO2, _F, Ad, Ch, gT, Hx, LO, qo, RS, Rx, Zj } from '../figma_app/530167';
import { Tf } from '../figma_app/543100';
import { Jj } from '../figma_app/546509';
import { isFigmakeSitesEnabled } from '../figma_app/552876';
import { l7 as _$$l8, uV as _$$uV, uw as _$$uw, fs, GV, KJ, L4, Qi, Vx } from '../figma_app/559491';
import { cD as _$$cD, n$ as _$$n$, BU } from '../figma_app/598018';
import { $l, $o, bE as _$$bE, yJ as _$$yJ2, HA, IU, Kc, MR, Q2, y2, yH } from '../figma_app/598926';
import { Dl as _$$Dl, i_ as _$$i_2 } from '../figma_app/610446';
import { aZ as _$$aZ2 } from '../figma_app/613182';
import { a as _$$a } from '../figma_app/620913';
import { copyTextToClipboard } from '../figma_app/623293';
import { Fy } from '../figma_app/623300';
import { LIBRARY_PREFERENCES_MODAL, SubscriptionStatusEnum, LibraryAgeEnum, PublishStatusEnum, PrimaryWorkflowEnum, LibraryPublishStatusEnum, getDraftsSidebarString, initialLibraryStats, NO_TEAM } from '../figma_app/633080';
import { canViewFolder_DEPRECATED, canViewTeam, getPermissionsStateMemoized, hasViewerRoleAccessOnTeam } from '../figma_app/642025';
import { J1 as _$$J3, bd, f2, UB } from '../figma_app/646357';
import { _d, J7 } from '../figma_app/650409';
import { PAGINATION_NEXT, PAGINATION_PREV } from '../figma_app/661371';
import { bp } from '../figma_app/678300';
import { fl, ye, zw } from '../figma_app/682945';
import { FileCreationPermissionsGenerator } from '../figma_app/687776';
import { kE as _$$kE, mH as _$$mH, QA as _$$QA, tG as _$$tG2, TW as _$$TW, HF, zs, Zv } from '../figma_app/703138';
import { y as _$$y5 } from '../figma_app/705249';
import { AppView, isIncludedView } from '../figma_app/707808';
import { cL as _$$cL5, DI as _$$DI, dY as _$$dY, sV as _$$sV, NY, V2, zx } from '../figma_app/712525';
import { of as _$$of, SI as _$$SI, yH as _$$yH6, Cx, x2 } from '../figma_app/714946';
import { aV as _$$aV2 } from '../figma_app/722362';
import { tG as _$$tG } from '../figma_app/723183';
import { LP } from '../figma_app/728005';
import { ZG } from '../figma_app/736948';
import { F as _$$F9 } from '../figma_app/738753';
import { ax as _$$ax, d9 as _$$d3, oH as _$$oH, ou as _$$ou, T9 as _$$T, CR, HR } from '../figma_app/740025';
import { LQ } from '../figma_app/741211';
import { consumeFullscreenEventState, setPropertiesPanelTab } from '../figma_app/741237';
import { WJ as _$$WJ } from '../figma_app/745458';
import { R_ } from '../figma_app/749805';
import { cT as _$$cT2, rJ as _$$rJ, t2 as _$$t7, ue as _$$ue, C0, Jh, XU } from '../figma_app/756995';
import { aU as _$$aU } from '../figma_app/757606';
import { nx as _$$nx } from '../figma_app/761870';
import { AppStateTsApi, BackgroundPattern, colorManagementStateJs, ColorProfileEnum, DataLoadStatus, DesignWorkspace, EditAction, Fonts, Fullscreen, HandoffBindingsCpp, IMixedValues, ItemType, KeyboardLayout, LayoutTabType, PageViewMode, perfTimerFrameManagerBindings, SceneGraphHelpers, SchemaJoinStatus, SessionStatus, UIVisibilitySetting, UserInterfaceElements, ViewType, WhiteboardIntegrationType } from '../figma_app/763686';
import { $0, $M, cL as _$$cL3, Fm as _$$Fm, i4 as _$$i3, js as _$$js, lI as _$$lI, li as _$$li, nb as _$$nb, on as _$$on2, PB as _$$PB2, pD as _$$pD, pI as _$$pI, Q8 as _$$Q5, RI as _$$RI, RO as _$$RO, rW as _$$rW, sQ as _$$sQ, U3 as _$$U5, uy as _$$uy, uz as _$$uz, wg as _$$wg, xH as _$$xH3, y3 as _$$y4, yH as _$$yH4, Df, F8, gi, Jc, k7, NJ, Oo, q4, QD, RP, UU, We, wJ, Z5 } from '../figma_app/770088';
import { A as _$$A1 } from '../figma_app/776368';
import { BrowserInfo, isFigmaMobileApp } from '../figma_app/778880';
import { dO as _$$dO, ZN as _$$ZN } from '../figma_app/781852';
import { parsePxInt } from '../figma_app/783094';
import { S as _$$S2 } from '../figma_app/787550';
import { EM, J1 } from '../figma_app/804490';
import { eu as _$$eu } from '../figma_app/807786';
import { L4 as _$$L3 } from '../figma_app/819288';
import { pz as _$$pz, jz } from '../figma_app/825489';
import { wH } from '../figma_app/828908';
import { SubscriptionType } from '../figma_app/831101';
import { tf as _$$tf, fu } from '../figma_app/831799';
import { V_ } from '../figma_app/841351';
import { Ay as _$$Ay5 } from '../figma_app/846003';
import { hV as _$$hV, id as _$$id, lW as _$$lW, pn as _$$pn, rH as _$$rH2, u2 as _$$u, _p, Dz, gN, k$, M3, MH, TV } from '../figma_app/847915';
import { r5 as _$$r3, r$ as _$$r$, ZH } from '../figma_app/855490';
import { vP } from '../figma_app/864378';
import { bellFeedAPIInstance, desktopAPIInstance, OpenTarget } from '../figma_app/876459';
import { Ed } from '../figma_app/883490';
import { o as _$$o } from '../figma_app/885533';
import { getFalseValue, isInteractionOrEvalMode, isInteractionPathCheck } from '../figma_app/897289';
import { iN as _$$iN, lF as _$$lF3, Mv as _$$Mv, pS as _$$pS, to as _$$to2, U6 as _$$U4, X7 as _$$X4, gG, jv, N9, qP } from '../figma_app/909778';
import { nH as _$$nH, sw as _$$sw, Ev, FL } from '../figma_app/914957';
import { ai as _$$ai, kF as _$$kF, lF as _$$lF2 } from '../figma_app/915202';
import { l0 as _$$l9, OP } from '../figma_app/920435';
import { useLatestRef } from '../figma_app/922077';
import { desktopVisibilityEmitter } from '../figma_app/925651';
import { $h as _$$$h, e$ as _$$e$, nz as _$$nz, tL as _$$tL, Z as _$$Z2, BK, Ee, fv, Kd, NW, Yx } from '../figma_app/933328';
import { Q$ } from '../figma_app/934707';
import { b4 } from '../figma_app/937413';
import { I$ } from '../figma_app/940844';
import { q1, vY } from '../figma_app/955484';
import { $K, ax as _$$ax2, ck as _$$ck3, cQ as _$$cQ, db as _$$db, F0 as _$$F8, hu as _$$hu, lR as _$$lR, RG as _$$RG, uN as _$$uN, Fx, GN, QI, Qu, Te } from '../figma_app/958735';
import { A as _$$A7 } from '../figma_app/965813';
import { o2 as _$$o7, s7 as _$$s3 } from '../figma_app/968813';
import { lr as _$$lr, EG, Ji, qC } from '../figma_app/972736';
import { cz as _$$cz, l7 as _$$l2, rg as _$$rg, _l, Dl, q0, qj, RH, Z8 } from '../figma_app/976345';
import { hZ as _$$hZ, uo as _$$uo4, yJ as _$$yJ4, bu, IJ, Pg } from '../figma_app/990058';
import { IK } from '../figma_app/991245';
import { hZ as _$$hZ3, wc as _$$wc, yH as _$$yH5 } from '../figma_app/996356';
import { q_ } from '../figma_app/997907';
import { A as _$$A12 } from '../svg/433566';
import { A as _$$A2 } from '../vendor/3029';
import tC from '../vendor/3757';
import { GS } from '../vendor/61400';
import { diff } from '../vendor/79414';
import rb from '../vendor/128080';
import { HY, Tw, y$, Zz } from '../vendor/156872';
import uW from '../vendor/223926';
import { n_ as _$$n_ } from '../vendor/235095';
import ag from '../vendor/239910';
import uy from '../vendor/241899';
import eW from 'statsig-js';
import mI from '../vendor/643300';
import { A as _$$A4 } from '../vendor/718327';
import { Statsig } from 'statsig-react';
import { Q as _$$Q } from '../vendor/912394';
import { createPortal } from 'react-dom';
import _require from '../vscode/70443';
function m({
  children: e,
  initialVersion: t = 'ui2'
}) {
  let [i, r] = useState(t);
  let [a, s] = useState(TE);
  useThemeContext() && console.error('Only one instance of theme provider should exist');
  let o = useMemo(() => ({
    version: i,
    updateMode(e) {
      e.version !== i && e.version && r(e.version);
    }
  }), [i]);
  let l = useRef(new Set());
  let m = useCallback(e => (l.current.add(e), () => l.current.$$delete(e)), []);
  let h = useMemo(() => ({
    ...a,
    addThemeListener: m
  }), [a, m]);
  useEffect(() => {
    let e = new MutationObserver(() => {
      s(e => {
        let t = {
          ...e,
          ...TE()
        };
        if (v9(e, t)) return e;
        for (let e of l.current) e(t);
        return t;
      });
    });
    e.observe(document.body, {
      attributes: !0,
      attributeFilter: _$$dK
    });
    return () => e.disconnect();
  }, []);
  useLayoutEffect(() => {
    document.body.setAttribute('data-fpl-version', i);
  }, [i]);
  return jsx(ThemeProvider, {
    value: o,
    children: jsx(_$$A, {
      value: h,
      children: e
    })
  });
}
let U = {
  [_$$rH2]: 'edit',
  [_p]: 'view',
  [M3]: 'object',
  [_$$u]: 'vector',
  [MH]: 'text',
  [_$$pn]: 'arrange',
  [_$$lW]: 'preferences',
  [_$$hV]: 'help'
};
function B(e) {
  (async () => {
    if (desktopAPIInstance && e.getState().selectedView.view === 'fullscreen' && (await fullscreenValue.onReady(), fullscreenValue.isReady())) {
      let t = e.getState();
      !function (e, t, i) {
        if (!desktopAPIInstance || e.view !== 'fullscreen') return;
        let n = {
          selectedView: e,
          isEnLocale: getI18nState().getPrimaryLocale(!1) === languageCodes.EN,
          appModel: i
        };
        let r = _$$p({
          theme: t,
          backToFileArgs: {
            shouldShowBackToFiles: !1
          },
          publishingModalArgs: {
            isPublishingModalDisabled: !1
          }
        });
        let {
          menus,
          actionCheckedState
        } = G.build(r, n);
        desktopAPIInstance.updateFullscreenMenuState({
          menus,
          actionCheckedState,
          editorType: mapEditorTypeToString(e.editorType)
        });
      }(t.selectedView, t.theme.themePreference, t.mirror.appModel);
    }
  })();
}
let V = !1;
class G {
  constructor(e) {
    this.actionCheckedState = {};
    this.options = e;
  }
  static build(e, t) {
    let i = new G(t);
    let n = {};
    for (let r of e) {
      if (UN(r, {
        isDesktopMenu: !0,
        isReadOnly: !1,
        isSearching: !1,
        selectedView: t.selectedView
      }) && TV(r) && r.name in U) {
        let e = U[r.name];
        if (e) {
          let t = i.convertToDesktopMenuGroup(r);
          t && (n[e] = t);
        }
      }
    }
    return {
      menus: n,
      actionCheckedState: i.actionCheckedState
    };
  }
  convertToDesktopItem(e) {
    return k$(e) ? {
      type: 'separator'
    } : TV(e) ? this.convertToDesktopMenuGroup(e) : gN(e) || _$$id(e) ? null : e.action ? this.convertToDesktopActionItem(e) : this.convertToDesktopNonActionItem(e);
  }
  convertToDesktopMenuGroup(e) {
    let t = Dz(e);
    let i = (e.children ?? []).filter(e => UN(e, {
      isDesktopMenu: !0,
      isReadOnly: !1,
      isSearching: !1,
      selectedView: this.options.selectedView
    })).map(e => this.convertToDesktopItem(e)).filter(isNotNullish);
    return i.length === 0 || i.every(e => e.type === 'separator') ? null : {
      type: 'submenu',
      key: t,
      label: this.getLabel(t, e),
      children: i
    };
  }
  convertToDesktopActionItem(e) {
    let t = Dz(e);
    let i = handlePropertyState(e, t, this.options.appModel);
    i && (this.actionCheckedState[t] = i.isChecked);
    return {
      type: 'action-item',
      action: t,
      label: this.getLabel(t, e),
      isCheckbox: !!i
    };
  }
  convertToDesktopNonActionItem(e) {
    let t = Dz(e);
    return FullscreenMenu.isNonActionItemKey(t) ? {
      type: 'non-action-item',
      key: t,
      label: this.getLabel(t, e)
    } : null;
  }
  getLabel(e, t) {
    let i = t.displayText ?? formatI18nMessage(e, t.args);
    return this.options.isEnLocale ? function (e) {
      let t = e.split(' ');
      for (let e = 1; e < t.length - 1; e++) {
        let i = t[e];
        !H.has(i) && i.length > 0 && (t[e] = z(i));
      }
      t.length > 1 && (t[t.length - 1] = z(t[t.length - 1]));
      return t.join(' ');
    }(i) : i;
  }
}
function z(e) {
  return e.length === 0 ? '' : e[0].toUpperCase() + e.slice(1);
}
let H = new Set(['a', 'as', 'in', 'of', 'on', 'to', 'and', 'for', 'the', 'into', 'with']);
let $ = vv(() => colorManagementStateJs?.documentColorProfile(), null);
let Z = atom(e => {
  let t = e($);
  return t == null ? null : t === ColorProfileEnum.DISPLAY_P3 ? 'display-p3' : 'srgb';
});
let X = createReduxSubscriptionAtomWithState(e => e.isOpenFileLoadedFromLiveGraph);
let Q = _$$tP(atom(e => {
  let t = e(openFileKeyAtom);
  return t == null ? null : [t, e(X)];
}));
function J(e, t) {
  t(atomStoreManager.get(e));
  atomStoreManager.sub(e, () => {
    t(atomStoreManager.get(e));
  });
}
let es = '__figma.embed.test.cookie__';
let eo = null;
async function el() {
  try {
    if (!_$$l() && !_$$ih()) {
      logDebug('[rehydrateStorageAccessIfNeeded]', 'Not an embed. Skip.');
      return;
    }
    if (!document.requestStorageAccess) {
      logDebug('[rehydrateStorageAccessIfNeeded]', 'Storage Access API is not available. Give up.');
      return;
    }
    if (function () {
      try {
        _$$A4.set(es, 'enabled', {
          sameSite: 'None',
          secure: !0
        });
        let e = _$$A4.get(es) === 'enabled';
        _$$A4.remove(es, {
          sameSite: 'None',
          secure: !0
        });
        return e;
      } catch (e) {
        return !1;
      }
    }()) {
      logDebug('[rehydrateStorageAccessIfNeeded]', 'Cookies are already accessible. No need to rehydrate storage access.');
      return;
    }
    if (BrowserInfo.chrome || BrowserInfo.firefox) {
      let e = await document.hasStorageAccess();
      logDebug('[rehydrateStorageAccessIfNeeded]', 'Checking document.hasStorageAccess()', {
        hasStorageAccess: e
      });
      let {
        state
      } = await navigator.permissions.query({
        name: 'storage-access'
      });
      let i = state === 'granted';
      logDebug('[rehydrateStorageAccessIfNeeded]', 'Checking navigator.permissions.query({ name: "storage-access" })', {
        storageAccessGranted: i
      });
      (i || e) && i !== e && (logDebug('[rehydrateStorageAccessIfNeeded]', 'Conflicting storage access state. Rehydrating.', {
        storageAccessGranted: i,
        hasStorageAccess: e
      }), await document.requestStorageAccess().catch(e => {
        logDebug('[rehydrateStorageAccessIfNeeded]', 'Error rehydrating storage access', {
          error: e
        });
      }));
    }
  } catch (e) {
    logDebug('[rehydrateStorageAccessIfNeeded]', 'Error checking storage access. Give up.', {
      error: e
    });
  }
}
let ec = null;
function eA(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
class ey {
  constructor(e) {
    this.sourceNodes = {};
    this.sourceNodesOptions = {};
    this.sourcePreviewNodes = {};
    this.sourcePreviewNodesOptions = {};
    this.targetNodes = {};
    this.targetNodeOptions = {};
    this.mouseClientOffset = {};
    this.moveStartSourceIds = null;
    this.draggedSourceNode = null;
    this.draggedSourceNodeRemovalObserver = null;
    this.isSetUp = !1;
    this.seenMoveStartCaptureEvents = new WeakSet();
    this.seenMoveStartEvents = new WeakSet();
    this.seenMoveCaptureEvents = new WeakSet();
    this.seenMoveEndCaptureEvents = new WeakSet();
    this.getSourceClientOffset = e => function (e) {
      let t = e.nodeType === 1 ? e : e.parentElement;
      if (!t) return null;
      let {
        top,
        left
      } = t.getBoundingClientRect();
      return {
        x: left,
        y: top
      };
    }(this.sourceNodes[e]);
    this.handleWindowMoveStartCapture = e => {
      this.checkAndMarkEventSeen(this.seenMoveStartCaptureEvents, e) || (this.moveStartSourceIds = []);
    };
    this.handleMoveStart = (e, t) => {
      !function (e) {
        return 'which' in e ? e.which === 3 : 'button' in e && e.button === 2;
      }(t) && this.moveStartSourceIds?.unshift(e);
    };
    this.handleWindowMoveStart = e => {
      if (this.checkAndMarkEventSeen(this.seenMoveStartEvents, e)) return;
      let t = eA(e);
      t && (this.mouseClientOffset = t);
    };
    this.handleWindowMoveCapture = e => {
      if (this.checkAndMarkEventSeen(this.seenMoveCaptureEvents, e)) return;
      let {
        moveStartSourceIds
      } = this;
      let i = eA(e);
      if (!i) return;
      let {
        x,
        y
      } = this.mouseClientOffset;
      if (!this.monitor.isDragging() && moveStartSourceIds && x != null && y != null && (Math.abs(x - i.x) > 4 || Math.abs(y - i.y) > 4) && (this.moveStartSourceIds = null, this.actions.beginDrag(moveStartSourceIds, {
        clientOffset: this.mouseClientOffset,
        getSourceClientOffset: this.getSourceClientOffset,
        publishSource: !1
      })), !this.monitor.isDragging()) {
        return;
      }
      let a = this.sourceNodes[this.monitor.getSourceId()];
      this.installSourceNodeRemovalObserver(a);
      this.actions.publishDragSource();
      e.preventDefault();
      let s = Object.keys(this.targetNodes).filter(e => {
        let t = this.targetNodes[e].getBoundingClientRect();
        return i.x >= t.left && i.x <= t.right && i.y >= t.top && i.y <= t.bottom;
      });
      this.actions.hover(s, {
        clientOffset: i
      });
    };
    this.handleWindowMoveEndCapture = e => {
      if (!this.checkAndMarkEventSeen(this.seenMoveEndCaptureEvents, e)) {
        if (!this.monitor.isDragging() || this.monitor.didDrop()) {
          this.moveStartSourceIds = null;
          return;
        }
        e.preventDefault();
        this.mouseClientOffset = {};
        this.uninstallSourceNodeRemovalObserver();
        this.actions.drop();
        this.actions.endDrag();
      }
    };
    this.actions = e.getActions();
    this.monitor = e.getMonitor();
    this.registry = e.getRegistry();
  }
  setup() {
    if (this.isSetUp) throw new Error('Cannot have two DnD Mouse backend at the same time');
    this.isSetUp = !0;
    this.attach(window);
  }
  teardown() {
    this.isSetUp = !1;
    this.mouseClientOffset = {};
    this.detach(window);
  }
  attach(e) {
    e.addEventListener('mousedown', this.handleWindowMoveStartCapture, !0);
    e.addEventListener('mousedown', this.handleWindowMoveStart);
    e.addEventListener('mousemove', this.handleWindowMoveCapture, !0);
    e.addEventListener('mouseup', this.handleWindowMoveEndCapture, !0);
    return () => this.detach(e);
  }
  detach(e) {
    e.removeEventListener('mousedown', this.handleWindowMoveStartCapture, !0);
    e.removeEventListener('mousedown', this.handleWindowMoveStart);
    e.removeEventListener('mousemove', this.handleWindowMoveCapture, !0);
    e.removeEventListener('mouseup', this.handleWindowMoveEndCapture, !0);
  }
  checkAndMarkEventSeen(e, t) {
    return !!e.has(t) || (e.add(t), !1);
  }
  connectDragSource(e, t) {
    this.sourceNodes[e] = t;
    let i = this.handleMoveStart.bind(this, e);
    t.addEventListener('mousedown', i);
    return () => {
      delete this.sourceNodes[e];
      t.removeEventListener('mousedown', i);
    };
  }
  connectDragPreview(e, t, i) {
    this.sourcePreviewNodesOptions[e] = i;
    this.sourcePreviewNodes[e] = t;
    return () => {
      delete this.sourcePreviewNodes[e];
      delete this.sourcePreviewNodesOptions[e];
    };
  }
  connectDropTarget(e, t) {
    this.targetNodes[e] = t;
    return () => {
      delete this.targetNodes[e];
    };
  }
  installSourceNodeRemovalObserver(e) {
    this.uninstallSourceNodeRemovalObserver();
    this.draggedSourceNode = e;
    this.draggedSourceNodeRemovalObserver = new window.MutationObserver(() => {
      e.parentElement || (this.resurrectSourceNode(), this.uninstallSourceNodeRemovalObserver());
    });
    e && e.parentElement && this.draggedSourceNodeRemovalObserver.observe(e.parentElement, {
      childList: !0
    });
  }
  resurrectSourceNode() {
    this.draggedSourceNode && (this.draggedSourceNode.style.display = 'none', this.draggedSourceNode.removeAttribute('data-reactid'), document.body.appendChild(this.draggedSourceNode));
  }
  uninstallSourceNodeRemovalObserver() {
    this.draggedSourceNodeRemovalObserver && this.draggedSourceNodeRemovalObserver.disconnect();
    this.draggedSourceNodeRemovalObserver = null;
    this.draggedSourceNode = null;
  }
  profile() {
    return {};
  }
}
function eb(e) {
  return new ey(e);
}
function eC(e) {
  return jsx('div', {
    'data-testid': e['data-testid'],
    'style': _$$sx2.colorBg.add({
      width: '100vw',
      height: '100vh'
    }).$,
    'children': jsx('div', {
      className: _$$s.wFull.hFull.flex.contentCenter.justifyCenter.flexWrap.$,
      children: jsx(_$$k2, {})
    })
  });
}
let eK = eW;
class e$ extends PureComponent {
  constructor(e) {
    super(e);
    this.state = {
      error: null
    };
  }
  static getDerivedStateFromError(e) {
    return {
      error: e
    };
  }
  componentDidCatch(e, t) {
    e instanceof eX || (As(e, t), reportError(_$$e.GROWTH_PLATFORM, e, {
      tags: {
        react: !0,
        errorBoundary: 'StatsigProvider'
      }
    }));
  }
  render() {
    if (this.state.error == null) return this.props.children;
    if (!(this.state.error instanceof eX)) return this.props.fallback;
    throw this.state.error.inner;
  }
}
class eZ extends PureComponent {
  constructor(e) {
    super(e);
    this.state = {
      error: null
    };
  }
  static getDerivedStateFromError(e) {
    return {
      error: new eX(e)
    };
  }
  componentDidCatch(e, t) {
    As(e, t);
  }
  render() {
    if (this.state.error != null) throw this.state.error;
    return this.props.children;
  }
}
class eX extends Error {
  constructor(e) {
    super();
    this.inner = e;
  }
}
let eQ = 'statsig-provider';
function eJ({
  contextValue: e,
  children: t,
  fallback: i
}) {
  let {
    initialized,
    initCompleted
  } = e;
  let s = !_$$pF() || initialized;
  let [o, l] = useState(null);
  let c = useAtomWithSubscription(processSelector)?.initCompletedPromise;
  let u = z3();
  let p = u === 'fullscreen';
  let m = useMemo(() => g5.includes(u), [u]);
  let [h, g] = useState(!1);
  useEffect(() => {
    o != null && h && (q_.addDependency(eQ, 'resolved'), g(!1));
  }, [o, h]);
  useEffect(() => {
    c && !initialized && m && (q_.addDependency(eQ, 'pending'), g(!0));
  }, [c, initialized, m, g]);
  useEffect(() => {
    s ? l(t) : p && initCompleted ? l(jsx(Fragment, {
      children: jsx(xZ, {})
    })) : m && initCompleted ? l(t) : initCompleted && l(jsx(Fragment, {
      children: i
    }));
  }, [t, initCompleted, p, m, s, i, l]);
  return jsx(Fragment, {
    children: o
  });
}
function e0(e) {
  let {
    children,
    orgId,
    teamId,
    userId,
    fallback,
    planKey
  } = e;
  useEffect(() => {
    let e = getInitialOptions().cluster_name;
    getFeatureFlags().statsig_suspend_gremlin && _$$cZ(e);
  }, []);
  let l = function () {
    let e = useAtomWithSubscription(processSelector).status;
    let t = useAtomWithSubscription(numericAtom);
    let [i, n] = useState(!1);
    let r = e !== OperationStatus.NOT_STARTED;
    let a = r && e !== OperationStatus.IN_PROGRESS;
    useEffect(() => {
      a && n(!0);
    }, [a, n]);
    return useMemo(() => ({
      initialized: a,
      initCompleted: i,
      initStarted: r,
      statsigPromise: null,
      userVersion: t,
      updateUser: () => {}
    }), [a, i, r, t]);
  }();
  return (!function (e) {
    let {
      userId: _userId,
      teamId: _teamId = '',
      orgId: _orgId,
      planKey: _planKey,
      callingHookLocation
    } = e;
    let s = useAtomWithSubscription(processSelector).status;
    let o = Xr(_$$r_);
    let l = Xr(numericAtom);
    let c = useRef(s !== OperationStatus.NOT_STARTED);
    let u = useCallback(() => {
      l(e => e + 1);
    }, [l]);
    useEffect(() => {
      c.current || (c.current = !0, o({
        userId: _userId,
        teamId: _teamId,
        orgId: _orgId,
        planKey: _planKey
      }, callingHookLocation || '', ProviderType.PROVIDER).then(() => {
        u();
      }), Statsig.setReactContextUpdater(u), typeof window == 'undefined' || (window.__STATSIG_SDK__ = Statsig, window.__STATSIG_JS_SDK__ = eK(), window.__STATSIG_RERENDER_OVERRIDE__ = u));
    }, [u, o, _orgId, _teamId, _userId, _planKey, callingHookLocation]);
    useEffect(() => () => {
      Statsig.initializeCalled() && (Statsig.shutdown(), Statsig.setReactContextUpdater(null));
    }, []);
  }({
    userId,
    teamId,
    orgId,
    planKey,
    callingHookLocation: 'StatsigBaseRelayProvider (from redux flow)'
  }), !function (e) {
    let {
      userId: _userId2,
      teamId: _teamId2 = '',
      orgId: _orgId2,
      planKey: _planKey2
    } = e;
    let a = useAtomWithSubscription(processSelector).status;
    let s = Xr(_$$iz);
    let o = Xr(numericAtom);
    let l = useRef(_userId2);
    let c = useRef(_teamId2);
    let u = useRef(_orgId2);
    let p = useRef(_planKey2);
    useEffect(() => {
      (_userId2 !== l.current || _teamId2 !== c.current || _orgId2 !== u.current || _planKey2 !== p.current) && (l.current = _userId2, c.current = _teamId2, u.current = _orgId2, p.current = _planKey2, s({
        userId: _userId2,
        teamId: _teamId2,
        orgId: _orgId2,
        planKey: _planKey2
      }).then(() => {
        o(e => e + 1);
      }));
    }, [_orgId2, o, a, s, _teamId2, _userId2, _planKey2]);
  }({
    userId,
    teamId,
    orgId,
    planKey
  }), getFeatureFlags().statsig_suspend) ? jsx(_$$B.Provider, {
    value: l,
    children: jsx(Suspense, {
      fallback,
      children
    })
  }) : jsx(_$$B.Provider, {
    value: l,
    children: jsx(eJ, {
      contextValue: l,
      fallback: e.fallback,
      children
    })
  });
}
function e1({
  children: e,
  fallback: t
}) {
  let i = getInitialOptions().user_data?.id ?? '';
  let r = _$$cD();
  let a = null;
  let s = null;
  let l = getInitialOptions().statsig_plan_key;
  let c = useAtomWithSubscription(parentOrgIdAtom);
  let u = useAtomWithSubscription(teamOrOrgIdAtom);
  if (getFeatureFlags().statsig_plan_key_bootstrap) {
    if (!l && (c || u) && reportError(_$$e.APPLICATION_PLATFORM, new Error(`One of the plan keys is not set. This should never happen, and means that the server disagrees with the client on what the plan key should be.
          initialOptionsPlanKey: ${l}
          sidebarOrOpenFileOrgId: ${c}
          sidebarOrOpenFileTeamId: ${u}`)), l && _$$tU()) {
      let e = parseOrgParentId(l);
      e?.type === FOrganizationLevelType.ORG && e.parentId ? (a = e.parentId, s = l) : e?.type === FOrganizationLevelType.TEAM && e.parentId && (s = l);
    }
  } else {
    a = getInitialOptions().org_id ?? null;
    _$$tU() && (a ? s = `organization::${a}` : r && (s = `team::${r}`));
  }
  let p = _6();
  _$$h(() => {
    trackStatsigPlanKeyBootstrap(getFeatureFlags().statsig_plan_key_bootstrap ?? !1, getInitialOptions().statsig_plan_key ?? 'null', getInitialOptions().org_id ?? 'null', c ?? 'null', u ?? 'null', r ?? 'null', p?.view ?? 'null', s ?? 'null', a ?? 'null', i);
  });
  !function (e, t, i) {
    let n = Xr(_$$oo);
    let r = function (e, t, i) {
      let n = useSubscription(StatsigTeamsOrderView, {
        currentOrgId: t
      });
      return useMemo(() => {
        if (isFigmaMobileApp()) return [];
        let r = [{
          userId: e,
          teamId: '',
          orgId: t,
          planKey: i
        }];
        if (n.status !== 'loaded') return r;
        let a = n.data.currentUser.teamRoles;
        if (!a) return r;
        let s = a.filter(e => e.team?.orgId === t && !e.team?.deletedAt && !e.pending).map(e => e.team).filter(isNotNullish);
        let o = n.data.currentUser.fileBrowserPreferences?.orderedTeamIds;
        _$$n$(s, o || []).slice(0, _$$oM - 1).forEach(n => {
          let a = i;
          _$$tU() && (t == null || t === '') && (a = `team::${n}`);
          r.push({
            userId: e,
            teamId: n,
            orgId: t,
            planKey: a
          });
        });
        return r;
      }, [n, e, t, i]);
    }(e, t, i);
    let a = useAtomWithSubscription(processSelector).status === OperationStatus.COMPLETED;
    useEffect(() => {
      a && n(r);
    }, [r, n, a]);
  }(i, a, s);
  return jsx('div', {
    'data-testid': 'statsig-comp',
    'children': jsx(e0, {
      userId: i,
      teamId: r,
      orgId: a,
      fallback: t,
      planKey: s,
      children: e
    })
  });
}
function e2({
  children: e,
  fallback: t
}) {
  return jsx(e$, {
    fallback: jsx(Fragment, {
      children: e
    }),
    children: jsx(e1, {
      fallback: t,
      children: jsx(eZ, {
        children: e
      })
    })
  });
}
function e5(e) {
  let t = e.fallback || jsx(eC, {});
  return jsx(e2, {
    fallback: t,
    ...e
  });
}
async function e7(e) {
  try {
    await e();
  } catch (t) {
    console.error('Failed to render react root', t);
    let e = reportError(_$$e.FRONTEND_PLATFORM, t, {
      tags: {
        rootRenderer: 'root',
        severity: SeverityLevel.Critical
      }
    });
    _$$Q2().render(jsx(S1, {
      sentryId: e
    }));
    document.querySelector('#filebrowser-loading-page')?.remove();
  }
}
let t_ = e => t => async function (i) {
  let n = e.getState();
  if (Ts.matches(i)) {
    i.payload.formState = i.payload.formState || getInitialOptions().form_state || qB.SIGN_UP;
    _$$g2('show_auth_page', i.payload.origin, {
      formState: i.payload.formState
    }, {
      forwardToDatadog: !0
    });
    let n = new _$$P2();
    getInitialOptions().user_data || n.register(_$$y, () => {
      e.dispatch(My());
    });
    return t(i);
  }
  if (Hh.matches(i)) {
    let r = document.getElementById(i.payload.formId);
    let a = _$$t(r);
    let s = a.googleIdToken || n.auth.googleIdToken;
    let o = e.getState().auth.signedUpFromOpenSession;
    if (s) {
      _$$g2('google_sso_attempt', n.auth.origin);
      let t = null;
      try {
        t = await Hc(_$$cc.SIGN_UP, n.auth.prevForm);
      } catch (e) {
        _$$g2('arkose_token_error_signup', n.auth.origin);
      }
      XHR.post('/api/session/google_auth/signin_or_signup', {
        name: a.name || n.auth.name,
        token: s,
        token_type: n.auth.googleTokenType,
        job_title: n.auth.jobTitle,
        usage_purpose: n.auth.usagePurpose,
        opt_in_email: void 0,
        is_not_gen_0: _$$mI(n.auth.origin),
        signup_source: n.auth.signupSource,
        locale: getI18nState()?.getPrimaryLocale(!0),
        arkose_token: t,
        origin: n.auth.origin,
        google_fed_cm_enabled: getFeatureFlags().google_federated_cm ?? !1
      }).then(async ({
        data: t
      }) => {
        _$$p2('sign_up_google_sso');
        _$$g2('google_sso_success', n.auth.origin, {
          user_id: t?.meta?.id
        }, {
          forwardToDatadog: !0
        });
        e.dispatch(My());
        trackEventAnalytics('Sign Up (GTM)', {
          isWorkEmail: _$$iE(t),
          sha256_email: await qV(t.meta?.email)
        });
        o && getStorage().set(_$$zl, !0);
      }, t => (e.dispatch(_$$E({
        formState: qB.SIGN_UP
      })), e.dispatch(Qg({
        message: resolveMessage(t, t?.data?.message)
      }))));
    } else {
      _$$g2('sign_up_attempt', n.auth.origin);
      try {
        a.arkose_token = await Hc(_$$cc.SIGN_UP, n.auth.prevForm);
      } catch (e) {
        _$$g2('arkose_token_error_signup', n.auth.origin);
      }
      let t = {
        ...a,
        opt_in_email: void 0,
        job_title: n.auth.jobTitle,
        usage_purpose: n.auth.usagePurpose,
        is_not_gen_0: _$$mI(n.auth.origin),
        locale: getI18nState()?.getPrimaryLocale(!0),
        signup_source: n.auth.signupSource,
        cont: n.auth.redirectUrl,
        origin: n.auth.origin
      };
      XHR.post('/api/session/auth', t).then(async ({
        data: t
      }) => {
        if (e.getState().communityHub?.pageState?.view === 'communityHub' && getCookieOrStorage().set('community_signup_redirect', {
          location: customHistory.location.pathname,
          action: null
        }), _$$p2('sign_up_user_pass'), _$$g2('sign_up_success', n.auth.origin, {
          mailingListOptIn: e.getState().auth.optInEmail,
          user_id: t?.meta?.id
        }), getInitialOptions().integration_host || e.getState().auth.fromMsTeams) {
          let i = e.getState().auth.fromMsTeams ? _$$e3.MS_TEAMS_BOT : _$$e3.MS_TEAMS_TAB;
          let n = getInitialOptions().integration_host === 'msft' || e.getState().auth.fromMsTeams;
          trackEventAnalytics('Integration Signup Success', {
            user_id: t?.meta?.id,
            integrationHost: getInitialOptions().integration_host,
            trackedContext: n ? i : getInitialOptions().integration_host
          });
        }
        if (trackEventAnalytics('Sign Up (GTM)', {
          isWorkEmail: _$$iE(t),
          sha256_email: await qV(n.auth.email)
        }), qF(t, n.auth.redirectUrl)) {
          let i = t.meta.id;
          e.dispatch(Em({
            userId: i
          }));
        } else {
          e.dispatch(My({
            userId: t.meta.id
          }));
        }
        o && getStorage().set(_$$zl, !0);
      }).catch(t => e.dispatch(P8({
        resp: t
      })));
    }
    e.dispatch(kL());
    return t(i);
  }
  if (_$$Sr.matches(i)) {
    _$$g2('google_sso_attempt', n.auth.origin);
    _$$g2('google_sso_attempt_skip_extra_info', n.auth.origin);
    let r = e.getState().auth.signedUpFromOpenSession;
    let a = null;
    try {
      a = await Hc(_$$cc.SIGN_UP, n.auth.prevForm);
    } catch (e) {
      _$$g2('arkose_token_error_signup', n.auth.origin);
    }
    XHR.post('/api/session/google_auth/signin_or_signup', {
      name: n.auth.name || null,
      token: n.auth.googleIdToken,
      token_type: n.auth.googleTokenType,
      job_title: n.auth.jobTitle,
      usage_purpose: n.auth.usagePurpose,
      is_not_gen_0: _$$mI(n.auth.origin),
      signup_source: n.auth.signupSource,
      locale: getI18nState()?.getPrimaryLocale(!0),
      arkose_token: a,
      origin: n.auth.origin,
      google_fed_cm_enabled: getFeatureFlags().google_federated_cm ?? !1,
      tos_accepted: i.payload.tosAccepted
    }).then(async ({
      data: t
    }) => {
      _$$p2('sign_up_google_sso');
      _$$g2('google_sso_success', n.auth.origin, {
        user_id: t?.meta?.id
      }, {
        forwardToDatadog: !0
      });
      e.dispatch(My());
      trackEventAnalytics('Sign Up (GTM)', {
        isWorkEmail: _$$iE(t),
        sha256_email: await qV(t.meta?.email)
      });
      r && getStorage().set(_$$zl, !0);
    }, t => (e.dispatch(_$$E({
      formState: qB.SIGN_UP
    })), e.dispatch(Qg({
      message: resolveMessage(t, t?.data?.message)
    }))));
    return t(i);
  }
  if (Jv.matches(i)) {
    _$$g2('sign_in_attempt', n.auth.origin);
    let r = document.getElementById(i.payload.formId);
    let a = _$$t(r);
    let s = PG(a);
    s.message ? (n.auth.formState === qB.VERIFY_HUMAN && n.auth.prevForm !== qB.VERIFY_HUMAN && e.dispatch(_$$E({
      formState: n.auth.prevForm
    })), e.dispatch(Qg({
      message: s.message,
      invalidInput: s.invalidInput
    }))) : (a.username = a.email.trim(), XHR.post('/api/session/login', a).then(({
      data: t
    }) => {
      e.dispatch(_$$cT({
        data: t
      }));
    }).catch(t => {
      resolveMessage(t, t?.data?.message) === getI18nString('auth.error.magic-link-server-validation-error') && t?.status === 401 ? (a.modality = 'login', a.cont = n.auth.redirectUrl, XHR.post('/api/session/request_magic_link', a).then(({
        data: t
      }) => {
        _$$g2('magic_link_request_success', n.auth.origin, {
          modality: 'login',
          user_id: t?.meta?.id
        });
        e.dispatch(_$$E({
          formState: qB.CHECK_EMAIL_MAGIC_LINK_SIGN_IN_AFTER_PASSWORD,
          userId: t.meta.id
        }));
      }).catch(t => e.dispatch(P8({
        resp: t
      })))) : e.dispatch(P8({
        resp: t
      }));
    }), e.dispatch(kL()));
    return t(i);
  }
  if (_$$hE.matches(i)) {
    _$$g2('send_reset_password_email_attempt', n.auth.origin);
    let r = {
      username: n.auth.email
    };
    try {
      r.arkose_token = await Hc(_$$cc.FORGOT_PASSWORD, n.auth.prevForm);
    } catch (e) {
      _$$g2('arkose_token_error_forgot', n.auth.origin);
    }
    XHR.post('/api/password/forgot', r).then(() => {
      _$$g2('send_reset_password_email_success', n.auth.origin);
      e.dispatch(_$$E({
        formState: qB.SENT_PASSWORD_RESET
      }));
    }).catch(t => e.dispatch(P8({
      resp: t
    })));
    e.dispatch(kL());
    return t(i);
  }
  if (KS.matches(i)) {
    _$$g2('saml_redirect_to_provider_attempt', n.auth.origin);
    let r = document.getElementById(i.payload.formId);
    let a = _$$t(r);
    a.email = a.email.trim();
    xf(a.email) && _$$k3.getSaml({
      email: a.email
    }).then(({
      data: e
    }) => {
      _$$g2('saml_redirect_to_provider_success', n.auth.origin);
      vr({
        url: e.meta.sp_sso_target_url,
        cont: n.auth.redirectUrl
      });
    }).catch(t => {
      resolveMessage(t, t?.data?.message) === getI18nString('auth.error.magic-link-server-validation-error') && t?.status === 401 ? (_$$g2('saml_redirect_to_magic_link', n.auth.origin), a.modality = 'either', a.cont = n.auth.redirectUrl, XHR.post('/api/session/request_magic_link', a).then(({
        data: t
      }) => {
        _$$g2('magic_link_request_success', n.auth.origin, {
          modality: 'either',
          user_id: t?.meta?.id
        });
        e.dispatch(_$$E({
          formState: qB.CHECK_EMAIL_MAGIC_LINK_SIGN_IN_AFTER_PASSWORD,
          userId: t.meta.id
        }));
      }).catch(t => e.dispatch(P8({
        resp: t
      })))) : e.dispatch(P8({
        resp: t
      }));
    });
    e.dispatch(kL());
    return t(i);
  }
  if (AP.matches(i)) {
    _$$g2('saml_gate_redirect_attempt', n.auth.origin);
    _$$H4.getSsoConfig().then(({
      data: t
    }) => {
      t.meta.org_saml_config ? (_$$g2('saml_gate_redirect_success', n.auth.origin), vr({
        url: t.meta.org_saml_config.sp_sso_target_url,
        cont: n.auth.redirectUrl
      })) : e.dispatch(Qg({
        message: getI18nString('auth.sso-gate.invalid-session')
      }));
    }).catch(t => e.dispatch(P8({
      resp: t
    })));
    return t(i);
  } else if ($j.matches(i)) {
    _$$g2('email_only_attempt', n.auth.origin);
    let r = document.getElementById(i.payload.formId);
    let a = _$$t(r);
    _$$H4.getSsoConfig(a).then(({
      data: t
    }) => {
      _$$g2('email_only_success', n.auth.origin);
      t.meta.account_type === 'guest' ? e.dispatch(_$$E({
        formState: t.meta.existing_user ? qB.SIGN_IN : qB.SIGN_UP
      })) : n.auth.ssoMethod === vR.SAML ? vr({
        url: t.meta.org_saml_config.sp_sso_target_url,
        cont: n.auth.redirectUrl
      }) : e.dispatch(_$$E({
        formState: qB.SSO_GATE
      }));
    }).catch(t => {
      resolveMessage(t, t?.data?.message) === getI18nString('auth.error.magic-link-server-validation-error') && t?.status === 401 ? (a.modality = 'either', a.cont = n.auth.redirectUrl, XHR.post('/api/session/request_magic_link', a).then(({
        data: t
      }) => {
        _$$g2('magic_link_request_success', n.auth.origin, {
          modality: 'either',
          user_id: t?.meta?.id
        });
        e.dispatch(_$$E({
          formState: qB.CHECK_EMAIL_MAGIC_LINK_SIGN_IN_AFTER_PASSWORD,
          userId: t.meta.id
        }));
      }).catch(t => e.dispatch(P8({
        resp: t
      })))) : e.dispatch(P8({
        resp: t
      }));
    });
    return t(i);
  } else if (xw.matches(i)) {
    _$$g2('reset_password_attempt', n.auth.origin);
    e.dispatch(kL());
    t(i);
    let r = document.getElementById(i.payload.formId);
    let a = _$$t(r);
    a.password !== a.password_retype ? e.dispatch(Qg({
      message: getI18nString('auth.reset-password.password-retype-error'),
      invalidInput: RE.PASSWORD
    })) : XHR.post('/api/password/recover', a).then(({}) => {
      _$$g2('reset_password_success', n.auth.origin);
      e.dispatch(My());
    }).catch(t => e.dispatch(P8({
      resp: t
    })));
  } else if (Qg.matches(i)) {
    _$$g2('error', n.auth.origin, {
      formState: n.auth.formState,
      ...i.payload
    });
    t(i);
    let r = i.payload.message;
    i.payload.errorType === By.UNAUTHORIZED || (i.payload.errorType == By.SAML_REQUIRED ? e.dispatch(_$$E({
      formState: qB.SAML_START,
      errorMessage: r
    })) : i.payload.errorType === By.MAGIC_LINK_LOGIN_NO_ACCOUNT && e.dispatch(_$$E({
      formState: qB.SIGN_UP,
      errorMessage: r
    })));
  } else {
    if (!My.matches(i)) return t(i);
    let r = e.getState().auth.fromMsTeams;
    if (i.payload && 'userId' in i.payload && i.payload.userId) {
      let e = _$$dR(n.auth.redirectUrl, {
        fuid: i.payload.userId
      });
      _$$dB(e, r);
    } else {
      _$$dB(n.auth.redirectUrl, r);
    }
    return t(i);
  }
};
let tT = tC;
let tN = atom(null);
let t8 = {
  setLoadingBackgroundColor(e, t) {
    e.dispatch(_$$mg(t));
  },
  createAndOpenFile(e, t) {
    e.dispatch(_$$uM(t));
  },
  navigateToFile(e, t, i) {
    $R(e, t);
    customHistory.redirect(i);
  },
  selectView(e, t) {
    xK.start('editorPreloaded');
    e.dispatch(_$$sf(t));
  },
  setRealtimeToken(e, t) {
    desktopAPIInstance?.setRealtimeToken({
      realtimeToken: e,
      fileKey: t
    });
  },
  getFileFromAPI: (e, t) => _$$S2.getFiles({
    fileKey: t
  }).then(t => {
    let i = t.data.meta;
    e.dispatch(yJ({
      file: i
    }));
    return i;
  }),
  hardReloadFileURL(e, t) {
    e && console.error('Reloading preloaded new tab because of', e);
    window.location.href = `${t.path}${t.params ?? ''}${t.hash ?? ''}`;
  }
};
async function t9(e, t) {
  let i = e.getState();
  let n = {
    [FFileType.FIGMAKE]: isFigmakeSitesEnabled(),
    [FFileType.SITES]: !!getFeatureFlags().sites,
    [FFileType.COOPER]: !!getFeatureFlags().cooper,
    [FFileType.DESIGN]: !0,
    [FFileType.WHITEBOARD]: !0,
    [FFileType.SLIDES]: !0
  };
  let r = t.editorType;
  let a = t.path.split('?')[0];
  if (t.newFileInfo) {
    if ((r = t.newFileInfo.editorType) && !n[r]) {
      t.path = a;
      t8.hardReloadFileURL(null, t);
      return;
    }
    let i = {
      ...t.newFileInfo,
      allowOnDesktop: !0
    };
    let s = t.params && parseAndNormalizeQuery(t.params)?.['node-id'];
    s && (i = {
      ...i,
      nodeId: s
    });
    t8.createAndOpenFile(e, i);
    return;
  }
  let s = {
    ...vU(i, a, t.params, t.hash),
    canNavigateDesktopNewTab: !0
  };
  if (s.view !== 'fullscreen') return;
  if (!r && s.fileKey) {
    let e = i.fileByKey[s.fileKey];
    r = e?.editor_type;
  }
  r && s.editorType !== FEditorType.DevHandoff && s.editorType !== FEditorType.Illustration && (s.editorType = mapFileTypeToEditorType(r));
  let o = () => t8.setLoadingBackgroundColor(e, t.loadingBackgroundColor ?? _$$on(i.theme.visibleTheme, t.editorType));
  let l = i => {
    i?.editor_type && s.editorType !== mapFileTypeToEditorType(i.editor_type) && (s.editorType !== FEditorType.DevHandoff || i.editor_type !== 'design') && (s.editorType !== FEditorType.Illustration || i.editor_type !== 'design') && (s.editorType = mapFileTypeToEditorType(i.editor_type));
    let n = e.getState();
    if (i && (n.currentUserOrgId ?? null) !== (i.parent_org_id ?? null)) {
      t.isNewTabShown && o();
      let e = `${a}${t.params ?? ''}${t.hash ?? ''}`;
      e = _$$mc(e, n.user);
      i.editor_type && (e = NQ(e, 'editor_type', i.editor_type));
      t8.navigateToFile(i.key, n.currentUserOrgId, e);
      return;
    }
    i && i.realtime_token && t8.setRealtimeToken(i.realtime_token, i.key);
    console.log(`Opening file ${s.fileKey} in a preloaded new tab at ${a} with org ${e.getState().currentUserOrgId}`);
    o();
    t8.selectView(e, s);
  };
  if (s.fileKey) {
    let n = i.fileByKey[s.fileKey];
    if (n) {
      l(n);
    } else {
      o();
      try {
        let t = await t8.getFileFromAPI(e, s.fileKey);
        l(t);
      } catch (e) {
        t8.hardReloadFileURL(e, t);
      }
    }
  } else {
    l();
  }
}
let ic = new class {
  constructor(e, t) {
    this.maxTokens = e;
    this.tokens = e;
    this.lastRefillTime = Date.now();
    this.refillRate = e / t;
  }
  refill() {
    let e = Date.now();
    let t = (e - this.lastRefillTime) * this.refillRate;
    this.tokens = Math.min(this.maxTokens, this.tokens + t);
    this.lastRefillTime = e;
  }
  canConsume(e = 1) {
    this.refill();
    return this.tokens >= e;
  }
  consume(e = 1) {
    this.refill();
    return this.tokens >= e && (this.tokens -= e, !0);
  }
  getTokens() {
    return this.tokens;
  }
  getRefillRate() {
    return this.refillRate;
  }
}(20, 1e3);
if (desktopAPIInstance && getInitialOptions().user_data && (desktopAPIInstance.setInitialOptions({
  userId: getInitialOptions().user_data.id,
  orgId: getInitialOptions().org_id,
  teamId: getInitialOptions().team_id,
  navigationConfig: filterNavigationConfig(desktopAPIInstance.getVersion(), desktopAPIInstance.getInformationalVersion(), navigationConfig)
}), desktopAPIInstance.initLivegraph({
  userId: getInitialOptions().user_data.id,
  figmaCookieName: isLocalCluster() ? 'figma.authn' : '__Host-figma.authn',
  isDesktopLivegraphClientEnabled: getFeatureFlags().desktop_livegraph_client || !1,
  allPlans: _$$td
}), desktopAPIInstance.initializeFCM({
  appId: getInitialOptions().firebase_cloud_messaging_browser_notifications.app_id,
  apiKey: getInitialOptions().firebase_cloud_messaging_browser_notifications.api_key,
  projectId: getInitialOptions().firebase_cloud_messaging_browser_notifications.project_id,
  vapidKey: getInitialOptions().firebase_cloud_messaging_browser_notifications.vapid_id,
  userId: getInitialOptions().user_data.id
})), desktopAPIInstance) {
  let e = FB();
  e !== null && desktopAPIInstance.setThemePreference(e);
}
if (desktopAPIInstance) {
  let e = getFeatureFlags();
  let t = Object.fromEntries(_$$a2.map(t => [t, e[t]]));
  desktopAPIInstance.setFeatureFlags({
    desktop_push_notifs_win: !0,
    desktop_extension_registry: !0,
    desktop_shell_allow_focus: !0,
    desktop_multi_updates: !0,
    piper_pptx_export: !0,
    desktop_piper_selected_slides_pdf: !0,
    desktop_unified_index_v3_dev: !0,
    desktop_unified_index_v3_rollout: !0,
    desktop_staging_factory_icon: !0,
    ...t
  });
}
let ig = !1;
let i_ = !1;
let iA = !1;
let iy = !1;
function ib() {
  !ig && (ig = !0, requestAnimationFrame(iv), i_ || (iA && (perfTimerFrameManagerBindings?.stopRootProfile('no-frame', 100), iA = !1), iy || (iy = perfTimerFrameManagerBindings?.startRootProfile('request-frame', 100)), ye?.updateLastKnownFrameMs(performance.now())));
}
function iv() {
  i_ = !0;
  iA && (perfTimerFrameManagerBindings?.stopRootProfile('no-frame', 100), iA = !1);
  iy && (perfTimerFrameManagerBindings?.stopRootProfile('request-frame', 100), iy = !1);
  ye?.onFrameStart();
  ig = !1;
  reactTimerGroup.start('frame');
  perfTimerFrameManagerBindings?.startProfile(vV, 100);
  try {
    _$$q.onFrame();
  } catch (e) {}
  fullscreenValue?.onFrame();
  getFeatureFlags()?.comments_react || _$$iZ?.onFrame();
  perfTimerFrameManagerBindings?.startProfile('redux-frame-handler', 100);
  ec?.();
  perfTimerFrameManagerBindings?.stopProfile('redux-frame-handler', 100);
  perfTimerFrameManagerBindings?.stopProfile(vV, 100);
  reactTimerGroup.stop('frame');
  i_ = !1;
  fl();
  ye?.onFrame();
  iA = perfTimerFrameManagerBindings?.startRootProfile('no-frame', 100);
}
let iC = new Set();
let iP = iN;
let iz = e => t => function (i) {
  if (P6.matches(i) || YK.matches(i)) {
    let n = P6.matches(i);
    let r = !!i.payload.hideVisualBell;
    if (i.payload.userInitiated) {
      let a = generateOptimistId();
      let s = Object.keys(i.payload.fileKeys);
      let o = XHR.del('/api/files_batch', {
        files: s.map(e => ({
          key: e
        })),
        trashed: n
      });
      let l = !1;
      if (s.length === 1) {
        let t = s[0];
        let i = e.getState().fileByKey[t];
        i && isBranch(i) && (l = !0);
      }
      let d = () => {
        assert(P6.matches(i), 'undoDelete was called after deleteFilesForever which should be impossible');
        e.dispatch(b4({
          fileKeys: Object.keys(i.payload.fileKeys),
          repoIds: i.payload.repoIds || []
        }));
        e.dispatch(VisualBellActions.dequeue({}));
      };
      if (o.then(o => {
        if (assert(P6.matches(i) || YK.matches(i)), desktopAPIInstance) {
          let t = e.getState();
          t.openFile && i.payload.fileKeys[t.openFile?.key] && desktopAPIInstance.close({
            suppressReopening: !0
          });
        }
        if (o.status === 207) {
          t({
            type: null,
            optimist: {
              type: REVERT,
              id: a
            }
          });
          try {
            let t = JSON.parse(o.response);
            let i = Object.keys(t.meta.success);
            let n = RD(i, e.getState());
            e.dispatch(VK({
              fileKeys: n,
              userInitiated: !1
            }));
            e.dispatch(FlashActions.error(t.message));
          } catch (t) {
            e.dispatch(FlashActions.error(getI18nString('file_browser.file_browser_actions.file_delete_error')));
          }
        } else {
          l ? n ? e.dispatch(VisualBellActions.enqueue({
            type: 'file_deleted',
            message: getI18nString('file_browser.file_browser_actions.branch_archived'),
            button: {
              text: getI18nString('general.undo'),
              action: d
            }
          })) : e.dispatch(VisualBellActions.enqueue({
            type: 'file_deleted',
            message: getI18nString('file_browser.file_browser_actions.branch_deleted')
          })) : r || (n ? e.dispatch(VisualBellActions.enqueue({
            type: 'file_deleted',
            message: getI18nString('file_browser.file_browser_actions.files_trashed', {
              numFiles: s.length
            }),
            button: {
              text: getI18nString('general.undo'),
              action: d
            }
          })) : e.dispatch(VisualBellActions.enqueue({
            type: 'file_deleted',
            message: getI18nString('file_browser.file_browser_actions.files_deleted_forever', {
              numFiles: s.length
            })
          })));
          i.payload.onSuccessCallback && i.payload.onSuccessCallback();
          t({
            type: null,
            optimist: {
              type: COMMIT,
              id: a
            }
          });
        }
      }).catch(({
        response: i
      }) => {
        try {
          i = JSON.parse(i);
          e.dispatch(FlashActions.error(i.message));
        } catch (t) {
          l ? e.dispatch(FlashActions.error(n ? getI18nString('file_browser.file_browser_actions.branch_archive_error') : getI18nString('file_browser.file_browser_actions.branch_delete_error'))) : e.dispatch(FlashActions.error(getI18nString('file_browser.file_browser_actions.file_delete_error')));
        }
        t({
          type: null,
          optimist: {
            type: REVERT,
            id: a
          }
        });
      }), YK.matches(i)) {
        let e = s.reduce((e, t) => (e[t] = null, e), {});
        WB()?.optimisticallyDelete({
          File: e
        }, o);
      }
      (i = {
        ...i
      }).optimist = {
        type: BEGIN,
        id: a
      };
      _$$PB(n ? 'File Trashed' : 'File Deleted', s, e.getState());
    }
  } else if (_$$D2.matches(i)) {
    let n = XHR.put(`/api/versions/${i.payload.fileKey}/${i.payload.savepointID}`, {
      label: i.payload.label,
      description: i.payload.description
    });
    _$$Q3({
      requestPromise: n,
      fallbackError: getI18nString('file_browser.file_browser_actions.version_update_error'),
      store: e,
      next: t,
      action: i
    });
  } else if (yJ.matches(i)) {
    if (i.payload.userInitiated) {
      i.payload.file.created_at && console.error('It looks like you are PUT-ting to the API with the entire file object; please only pass the key and changed attributes');
      let n = _$$S2.putFile({
        file: i.payload.file
      });
      let r = i.payload.onError;
      r && n.catch(e => {
        r();
        return e;
      });
      let a = _$$Q3({
        requestPromise: n,
        fallbackError: getI18nString('file_browser.file_browser_actions.file_processing_error'),
        store: e,
        next: t,
        action: i
      });
      let s = i.payload.file;
      let o = Ns(s, s.key);
      o && WB().optimisticallyUpdate(o, n);
      let l = e.getState();
      l.selectedView.view === 'fullscreen' && l.openFile && o && subscribeAndGetStatus(OpenEditorFileData, {
        fileKey: s.key
      }).then(t => {
        if (t === 'loading') {
          let t = e.getState().openFile;
          if (t && t.key === s.key) {
            let i = {
              ...t,
              ...o.File[s.key]
            };
            e.dispatch(UC({
              openFile: i
            }));
          }
        }
      });
      return a;
    }
  } else if (PF.matches(i)) {
    let {
      fileKey,
      versionId
    } = i.payload;
    let a = XHR.post(`/api/multiplayer/${fileKey}/restore?version_id=${encodeURIComponent(versionId)}`).then(() => {
      customHistory.reload('File restored', {
        key: fileKey
      });
    });
    _$$Q3({
      requestPromise: a,
      fallbackError: getI18nString('file_browser.file_browser_actions.version_restore_error'),
      store: e,
      next: t,
      action: i
    });
  }
  return t(i);
};
let iK = e => t => function (i) {
  if (_$$sf.matches(i)) {
    e.getState().creatingNewFolder && (e.dispatch(hideModal()), e.dispatch(bx()));
  } else if (yH.matches(i)) {
    let n = e.getState();
    let r = [];
    let a = [];
    let s = [];
    if (i.payload.folderIds.forEach(e => {
      let t = n.folders[e];
      t && r.push(t);
      n.fileKeysByFolderId[e] && a.push(...n.fileKeysByFolderId[e]);
      n.repoIdsByFolderId[e] && s.push(...n.repoIdsByFolderId[e]);
    }), r.length === 0 && a.length === 0) {
      return t(i);
    }
    let o = {};
    let l = {};
    let d = Date.now();
    r.forEach(e => {
      a.forEach(t => {
        let i = n.roles.byFileKey[t]?.[n.user.id];
        e.is_invite_only && !i ? l[t] = !0 : o[t] = {
          ...n.fileByKey[t],
          folder_id: null,
          trashed_at: d
        };
      });
    });
    let c = {};
    s.forEach(e => {
      let t = {
        ...n.repos[e],
        trashed_at: d
      };
      let i = {
        ...n.fileByKey[t.default_file_key],
        folder_id: null,
        trashed_at: d
      };
      i != null && (c[e] = {
        repo: t,
        main_file: i
      });
    });
    let u = VK({
      fileKeys: o,
      userInitiated: !1
    });
    let p = YK({
      fileKeys: l,
      userInitiated: !1
    });
    e.dispatch(u);
    e.dispatch(p);
  }
  return t(i);
};
let i$ = createActionCreator('REALTIME_UNSUBSCRIBE');
let iZ = createActionCreator('REALTIME_BATCH_SUBSCRIBE');
let i2 = e => t => function (i) {
  if (_$$yH.matches(i)) {
    let n = e.getState();
    let r = e.getState()?.user;
    let a = e.getState().plans;
    let s = e.getState().currentTeamId;
    let o = i.payload.team.id;
    let l = n.teams[o];
    let d = Object.keys(n.folders).filter(e => n.folders[e]?.team_id === o);
    if (!l && d.length === 0) return t(i);
    let c = a?.filter(e => e.plan_type === _$$O.ORG || e.plan_id !== o) || [];
    let u = () => {
      let t;
      let i;
      if (!r || !s || o !== s) return;
      let n = c[0];
      n && n.plan_type === _$$O.ORG ? (t = n.plan_id, i = null) : n && n.plan_type === _$$O.TEAM ? (i = n.plan_id, t = null) : (t = null, i = null);
      e.dispatch(_l({
        workspace: {
          userId: r.id,
          orgId: t,
          teamId: i
        },
        view: {
          view: 'recentsAndSharing'
        }
      }));
    };
    let p = yH({
      folderIds: d
    });
    let m = generateOptimistId();
    if (i.payload.userInitiated && (p.optimist = {
      type: BEGIN,
      id: m
    }), e.dispatch(p), i.payload.userInitiated && i.payload.teamDelete) {
      return _$$Q3({
        requestPromise: XHR.del(`/api/teams/${o}`).then(() => {
          e.dispatch(FlashActions.flash(getI18nString('team_delete_modal.post_delete_flash', {
            teamName: i.payload.team.name
          })));
          u();
          e.dispatch(createOptimistCommitAction(m));
        }).then(() => {
          e.dispatch(i$(`/team-${i.payload.team.id}`));
        }).catch(t => {
          e.dispatch(createOptimistRevertAction(m));
          return t;
        }),
        fallbackError: 'An error occurred while deleting this team.',
        store: e,
        next: t,
        action: i
      });
    }
    if (i.payload.userInitiated) {
      if (!n.user) return t(i);
      let r = n.roles.byTeamId[i.payload.team.id][n.user.id];
      z_('Role Deleted', r);
      return _$$Q3({
        requestPromise: XHR.del(`/api/roles/${r.id}`).then(() => {
          e.dispatch(FlashActions.flash(getI18nString('leave_team_modal.post_leave_flash', {
            teamName: i.payload.team.name
          })));
          u();
          e.dispatch(createOptimistCommitAction(m));
        }).then(() => {
          e.dispatch(i$(`/team-${i.payload.team.id}`));
        }).catch(t => {
          e.dispatch(createOptimistRevertAction(m));
          return t;
        }),
        fallbackError: 'An error occurred while leaving this team.',
        store: e,
        next: t,
        action: i
      });
    }
    u();
  } else if (_$$Jt.matches(i)) {
    let t = i.payload.teamId;
    let n = _$$$.getTeam({
      teamId: t
    }).then(({
      data: i
    }) => {
      e.dispatch(_$$yJ3({
        team: i.meta,
        userInitiated: !1
      }));
      xN(t, e);
    });
    _$$N(n, e, `TEAM_GET_ACTION_${t}`);
  } else {
    _$$sf.matches(i) && i.payload.view === 'team' && e.getState().teams[i.payload.teamId] == null && e.dispatch(_$$Jt({
      teamId: i.payload.teamId,
      shouldLoadFolders: !0
    }));
  }
  return t(i);
};
let i6 = e => t => function (i) {
  if (_$$yJ.matches(i)) {
    if (i.payload.userInitiated) {
      return _$$Q3({
        requestPromise: _$$k5.putUser({
          user: i.payload.user
        }),
        fallbackError: getI18nString('api_user.error.an_error_occurred_while_updating_your_information'),
        store: e,
        next: t,
        action: i
      });
    }
  } else if (_$$b.matches(i)) {
    if (!e.getState().user) return;
    let t = e.getState().userFlags;
    let n = XHR.post('/api/user/flags', {
      flags: i.payload
    });
    for (let e in i.payload) {
      let r = !!t[e];
      let a = !!i.payload[e];
      if (!r && a) {
        let t = getInitialOptions().user_data?.id;
        t && WB().optimisticallyCreate({
          UserFlag: {
            [`optimistic-id-for-${e}`]: {
              userId: t,
              name: e,
              createdAt: new Date(),
              updatedAt: new Date(),
              count: null
            }
          }
        }, n);
      } else {
        r && !a && WB().optimisticallyDelete({
          UserFlag: {
            [t[e].id]: null
          }
        }, n);
      }
    }
    n.catch(t => {
      for (let [t, n] of Object.entries(i.payload)) {
        if ((t.endsWith('_override_true') || t.endsWith('_override_false')) && n) {
          e.dispatch(FlashActions.error('Error: Could not update lab'));
          break;
        }
      }
      logger.error('Failed to update flags', JSON.stringify(i.payload), t);
    });
  } else if (_$$bE3.matches(i)) {
    let n = XHR.post('/api/user/user_team_flags', i.payload);
    return _$$Q3({
      requestPromise: n,
      fallbackError: getI18nString('api_user.error.an_unknown_error_occurred'),
      store: e,
      next: t,
      action: i
    });
  } else {
    hideModal.matches(i) && e.dispatch(WJ());
  }
  return t(i);
};
let nr = [_$$w.type, S3, F0.type, _$$o3.type];
let na = async e => {
  await _$$tb.promise;
  let {
    user,
    authedProfilesById,
    selectedView
  } = e.getState();
  let r = yk();
  let a = null;
  if (user) {
    if (r.communityProfileId && _$$d3(selectedView)) {
      let t = _$$T({
        authedProfilesById,
        profileId: r.communityProfileId
      });
      t && _$$ou(t.id, e.getState()) && (a = t);
    }
    a || (a = _$$T({
      authedProfilesById,
      profileId: user.community_profile_id,
      userId: user.id
    }));
    a && (Il(a.id), e.dispatch(_$$cR(a)));
  }
};
let ns = e => t => function (i) {
  if (Qv.matches(i)) {
    let n = t(i);
    _$$F3.clearCache();
    na(e);
    return n;
  }
  if (_$$sf.matches(i)) {
    let t = e.getState();
    let {
      selectedView,
      modalShown,
      user
    } = t;
    let s = !!i.payload.profileTab;
    let o = modalShown?.type && nr.includes(modalShown.type);
    if (selectedView.view === 'communityHub' && o && !s && e.dispatch(hideModal()), i.payload.view === 'communityHub') {
      if (e.dispatch(Ad(i.payload)), e.dispatch(WY({
        redirectUrl: Np(t, i.payload)
      })), i.payload.subView === 'hubFile' || i.payload.subView === 'plugin' || i.payload.subView === 'widget') {
        let t = !1;
        i.payload.subView === 'hubFile' ? t = selectedView.view === 'communityHub' && selectedView.subView === 'hubFile' && i.payload.hubFileId === selectedView.hubFileId : i.payload.subView === 'plugin' ? t = selectedView.view === 'communityHub' && selectedView.subView === 'plugin' && i.payload.publishedPluginId === selectedView.publishedPluginId : i.payload.subView === 'widget' && (t = selectedView.view === 'communityHub' && selectedView.subView === 'widget' && i.payload.widgetId === selectedView.widgetId);
        t || (e.dispatch(Zj(_$$Qv.ALL)), e.dispatch(_F()));
      }
      user && _$$I(user.id);
    } else {
      selectedView.view === 'communityHub' && e.dispatch(WY({
        redirectUrl: getInitialOptions().redirect_url || null
      }));
    }
  }
  return t(i);
};
let ng = e => t => function (i) {
  if (!_$$sf.matches(i)) return t(i);
  {
    let n = e.getState();
    let {
      isInFullscreen,
      currentFileKey
    } = n.selectedView?.view === 'fullscreen' ? {
      isInFullscreen: !0,
      currentFileKey: n.selectedView.fileKey
    } : {
      isInFullscreen: !1,
      currentFileKey: void 0
    };
    let {
      isEnteringFullscreen,
      newFileKey
    } = i.payload.view === 'fullscreen' ? {
      isEnteringFullscreen: !0,
      newFileKey: i.payload.fileKey
    } : {
      isEnteringFullscreen: !1,
      newFileKey: void 0
    };
    (isInFullscreen && !isEnteringFullscreen || currentFileKey && currentFileKey !== newFileKey) && (Object.values(n.library.local.thumbnails).forEach(({
      url: e
    }) => {
      e && revokeThumbnailUrl(e);
    }), e.dispatch(HV()), bd(), e.dispatch(notificationActions.clearAll()), n.modalShown && e.dispatch(hideModal()), n.universalInsertModal.showing && e.dispatch(KE()), e.dispatch(_$$Ho({})), fullscreenValue.onReady().then(() => {
      e.dispatch(H1({
        votingStage: SessionStatus.NO_SESSION
      }));
    }), teamLibraryCache.clearCache(), _$$e$(), _$$J3(e.dispatch), UB(), e.dispatch(_$$iE2({
      type: PrimaryWorkflowEnum.COMPONENT
    })), e.dispatch(_$$iE2({
      type: PrimaryWorkflowEnum.STATE_GROUP
    })), n.openFile && e.dispatch(Kd({
      openFileKey: n.openFile.key
    })));
    return t(i);
  }
};
let nx = new class {
  constructor() {
    this.ProtoSchemaValidator = createNoOpValidator();
  }
  getProto(e) {
    return this.ProtoSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/proto/${e.fileKey}/${e.currentPageId}`));
  }
}();
let nS = e => t => function (i) {
  if (_$$ce() && _$$sf.matches(i)) {
    let n = e.getState();
    if (n.selectedView === _$$o4 || i.payload === _$$o4) return t(i);
    let r = Np(n, n.selectedView);
    let a = Np(n, i.payload);
    if (_$$cm(r) !== _$$cm(a)) {
      customHistory.unsafeRedirectWithLocationHref(a);
      return;
    }
  }
  if (!desktopAPIInstance) return t(i);
  if (_$$sf.matches(i)) {
    let n = e.getState();
    let r = i.payload;
    if (r.view === 'fullscreen' && r.mode == null && (r = {
      ...r,
      mode: 'auto'
    }), r.view === 'fullscreen' && n.selectedView.view === 'desktopNewTab') {
      let e = r.fileKey ? n.fileByKey[r.fileKey] : void 0;
      e && desktopAPIInstance.setTabPreviewData({
        editedAt: e.touched_at,
        thumbnail: _$$pf(e)
      });
    }
    let a = vU(n, new URL(customHistory.location.href).pathname);
    if (r.view === 'communityHub' && a.view !== 'communityHub') {
      desktopAPIInstance.openCommunity(Np(n, r), n.user?.id ?? '');
      return;
    }
    if (r.view === 'fullscreen' && n.selectedView.view === 'fullscreen') {
      let e = n.selectedView;
      let t = r.editorType === FEditorType.Figmake && e.editorType === FEditorType.Figmake;
      let i = e.figmakeView === AppView.FULLSCREEN_PREVIEW || r.figmakeView === AppView.FULLSCREEN_PREVIEW;
      if (t && e.figmakeView !== r.figmakeView && i) {
        let e = n.openFile?.name ?? '';
        desktopAPIInstance.openFile({
          fileKey: r.fileKey ?? '',
          title: e,
          fileEditorType: mapEditorTypeToString(r.editorType),
          target: OpenTarget.FOCAL_TAB,
          userId: n.user?.id ?? void 0
        });
        return;
      }
    }
    if (r.view === 'desktopNewTab' && (n.selectedView.view === 'fullscreen' || n.selectedView.view === 'prototype')) return;
    if (n.selectedView?.view === 'desktopNewTab' && (r.view === 'fullscreen' || r.view === 'prototype')) {
      if (r.canNavigateDesktopNewTab) {
        t(i);
      } else {
        let e;
        let t;
        let i;
        let a;
        let s;
        let o = new URL(Np(n, r), document.baseURI);
        if (r.view === 'fullscreen') {
          let o = r.fileKey ? n.fileByKey[r.fileKey] : void 0;
          e = r.editorType ? mapEditorTypeToStringWithObfuscated(r.editorType) : void 0;
          o && (t = o.name, i = isBranch(o), a = !!o.last_published_at, s = !!(o.is_team_template && LQ(n)));
        } else {
          r.view === 'prototype' && (t = Iu(n, r));
        }
        desktopAPIInstance.openFileFromNewTab({
          url: o.href,
          fileEditorType: e ?? '',
          title: t,
          isBranch: i,
          isLibrary: a,
          isTeamTemplate: s
        });
      }
      return;
    }
    if (r.view === 'fullscreen' || desktopAPIInstance.isFileBrowserTab() && r.view === 'prototype') {
      let t = _$$U2(r);
      if (desktopAPIInstance.isFileBrowserTab() || n.selectedView && n.selectedView.view === 'prototype' || n.openFile && n.openFile?.key !== t) {
        let t = Np(n, r);
        let i = e.getState().user?.id;
        i && (t = NQ(t, 'fuid', i));
        r.view === 'fullscreen' && (t = NQ(t, 'editor_type', mapEditorTypeToStringWithObfuscated(r.editorType)));
        customHistory.unsafeRedirectWithLocationHref(t);
        return;
      }
    }
    if (!desktopAPIInstance.isFileBrowserTab() && r.view !== 'communityHub') {
      if (!r || r.view !== 'fullscreen' && r.view !== 'prototype' && r.view !== 'desktopNewTab') {
        let e = Np(n, r);
        e && customHistory.unsafeRedirectWithLocationHref(e);
        return;
      }
      r.view === 'prototype' && desktopAPIInstance.setLoading(!1);
    }
    if (t(i), desktopAPIInstance && r.view === 'fullscreen' && n.selectedView.view === 'fullscreen' && r.editorType !== n.selectedView.editorType) {
      let t = e.getState();
      t.selectedView.view === 'fullscreen' && (desktopAPIInstance.setEditorType(mapEditorTypeToString(t.selectedView.editorType)), B(e));
    }
    return;
  }
  if (yJ.matches(i) || bE.matches(i)) {
    let t = e.getState();
    let n = i.payload.file;
    let r = n.key ? t.fileByKey[n.key] : void 0;
    if ((_$$K3(t.selectedView) && !desktopAPIInstance.isFileBrowserTab() || t.selectedView.view === 'fullscreen' && t.selectedView.fileKey === n.key) && (n.thumbnail_url !== r?.thumbnail_url || n.touched_at !== r?.touched_at || n.client_meta !== r?.client_meta || n.thumbnail_guid !== r?.thumbnail_guid)) {
      let e = {
        editedAt: n.touched_at,
        thumbnail: _$$pf(n)
      };
      desktopAPIInstance.setTabPreviewData(e);
    }
  } else if (Am.matches(i)) {
    if (e.getState().selectedView.view === 'prototype') {
      let e = i.payload.prototype;
      if (e.thumbnail_url && e.accessed_at) {
        let t = {
          url: e.thumbnail_url,
          fullWidth: !0,
          backgroundColor: 'white'
        };
        desktopAPIInstance.setTabPreviewData({
          editedAt: e.accessed_at,
          thumbnail: t
        });
      }
    }
  } else if (_$$uh.matches(i)) {
    let t = e.getState().openFile;
    let n = e.getState().prototype.currentPageId;
    let r = i.payload.currentPageId;
    t && n !== i.payload.currentPageId && nx.getProto({
      fileKey: t.key,
      currentPageId: r
    }).then(({
      data: e
    }) => {
      let t = e.meta;
      if (t.thumbnail_url) {
        let e = {
          url: t.thumbnail_url,
          fullWidth: !0,
          backgroundColor: 'white'
        };
        desktopAPIInstance?.setTabPreviewData({
          thumbnail: e
        });
      }
    }).catch(e => {});
  } else if (SL.matches(i)) {
    desktopAPIInstance.isFileBrowserTab() || desktopAPIInstance.setMergingStatus(_$$y2.MERGING);
  } else if (_$$E3.matches(i)) {
    desktopAPIInstance.isFileBrowserTab() || desktopAPIInstance.setMergingStatus(_$$y2.NOT_MERGING);
  } else if (OB.matches(i)) {
    t(i);
    let n = e.getState();
    let r = new URL(Np(n, n.selectedView), document.baseURI);
    desktopAPIInstance.setLoading(!1);
    desktopAPIInstance.setUrl({
      url: r.href,
      fileKey: i.payload.file.key
    });
    let a = n.fileByKey[i.payload.file.key];
    a && desktopAPIInstance.setTabPreviewData({
      editedAt: a.touched_at,
      thumbnail: _$$pf(a)
    });
    return;
  } else if (Qv.matches(i) || _$$os.matches(i) || DE.matches(i)) {
    t(i);
    let n = e.getState();
    let r = n.currentUserOrgId ?? getInitialOptions().org_id;
    let a = n.currentTeamId ?? getInitialOptions().team_id;
    desktopAPIInstance.setWorkspaceProperties({
      orgId: r,
      teamId: a
    });
    desktopAPIInstance.setAuthedUsers(e.getState().authedUsers.orderedIds);
    return;
  }
  return t(i);
};
let nK = registerModal(e => {
  let t;
  let i = useModalManager(e);
  return jsx(bL, {
    manager: i,
    width: 'lg',
    children: jsxs(_$$vo, {
      children: [jsx(Y9, {
        children: jsx(_$$hE2, {
          children: renderI18nText('webgl_error.message.we_cant_open_that_file_header')
        })
      }), jsx(_$$nB, {
        children: (t = e.result, desktopAPIInstance && t !== xt.SUCCESS ? jsxs('p', {
          children: [renderI18nText('webgl_error.message.we_cant_open_this_file_webgl_trouble'), jsx('br', {}), jsx('br', {}), renderI18nText('webgl_error.message.if_this_problem_persists')]
        }) : t === xt.NO_WEBGL ? jsx('p', {
          children: renderI18nText('webgl_error.message.webgl_disabled', {
            helpArticleLink: jsx(_$$N2, {
              newTab: !0,
              href: 'https://help.figma.com/hc/articles/360039828614',
              trusted: !0,
              children: renderI18nText('webgl_error.message.this_help_article_link')
            })
          })
        }) : t === xt.STENCIL_TEST_FAILURE ? jsxs('span', {
          children: [renderI18nText('webgl_error.message.browser_bug'), jsx('br', {}), jsx('br', {}), renderI18nText('webgl_error.message.figma_is_working_with_the_browser_developers')]
        }) : void 0)
      }), jsx(wi, {
        children: jsx(jk, {
          children: jsx($n, {
            variant: 'primary',
            onClick: e.onClose,
            children: renderI18nText('webgl_error.message.got_it')
          })
        })
      })]
    })
  });
}, 'webgl-error-modal');
function nq(e) {
  'devModeFocusId' in e && e.devModeFocusId ? HandoffBindingsCpp?.setDevModeFocusViewNodeId(e.devModeFocusId, null) : HandoffBindingsCpp?.setDevModeFocusViewNodeId(null, null);
}
function n$(e) {
  'showOverview' in e && e.showOverview ? HandoffBindingsCpp?.setOverviewMode(!0) : HandoffBindingsCpp?.setOverviewMode(!1);
}
function nZ(e) {
  e.view === 'fullscreen' && e.showDevModeVariablesTable ? HandoffBindingsCpp?.setDevVariablesTableView(!0) : HandoffBindingsCpp?.setDevVariablesTableView(!1);
}
function nX(e) {
  e.view === 'fullscreen' && e.showDevModeComponentBrowser ? HandoffBindingsCpp?.setDevComponentBrowser(!0) : HandoffBindingsCpp?.setDevComponentBrowser(!1);
}
let nQ = e => t => function (i) {
  if (_$$sf.matches(i)) {
    let n = e.getState();
    let r = n.selectedView;
    let a = i.payload;
    if (r.view === 'fullscreen' && a.view === 'fullscreen' && a.fileKey !== r.fileKey && gD()) {
      logError('fullscreen', 'cannot change selected view while file creation is in progress', {
        'current selected view': r.view,
        'new selected view': a.view,
        'current selected file key': r.fileKey,
        'new selected file key': a.fileKey
      });
      reportError(_$$e.SCENEGRAPH_AND_SYNC, new Error('File creation in progress'));
      return t(i);
    }
    let s = t(i);
    if (a.view === 'fullscreen' && a.fileKey && !(r.view === 'fullscreen' && r.fileKey === a.fileKey) && _$$tG().getAllVideoUrls(), a.view === 'fullscreen' && (fullscreenValue.isReady() ? (nq(a), n$(a), nZ(a), nX(a)) : fullscreenValue.onReady().then(() => {
      nq(a);
      n$(a);
      nZ(a);
      nX(a);
    })), r.view === 'fullscreen' && a.view !== 'fullscreen') {
      e.dispatch(_$$V2());
    } else if (r.view !== 'fullscreen' && a.view === 'fullscreen') {
      if (_$$dK2() !== xt.SUCCESS) {
        n.user && !desktopAPIInstance && e.dispatch(_$$sf({
          view: 'recentsAndSharing'
        }));
        e.dispatch(showModalHandler({
          type: nK,
          data: {
            result: _$$dK2()
          }
        }));
        return;
      }
      if (a.fileKey) {
        if (a.preloaded) {
          let t = a.fileKey;
          let i = () => OZ(e, t, a.editorType).catch(t => {
            let i = _$$an(t, getI18nString('user_facing_error.loading_a_file'));
            e.dispatch(FlashActions.error(i));
          });
          r.view === 'desktopNewTab' ? U_(e, a.editorType, !0).then(async () => {
            if (!n.fileByKey[t]) {
              let i = await _$$S2.getFiles({
                fileKey: t
              });
              e.dispatch(yJ({
                file: i.data.meta
              }));
            }
            i();
          }) : i();
        } else {
          e.dispatch(_$$sR({
            newSelectedView: a
          }));
        }
      } else {
        let {
          tryPluginId,
          tryPluginName,
          tryPluginVersionId,
          editorType,
          isWidget,
          isPlaygroundFile,
          tryPluginParams
        } = a;
        if (editorType === FEditorType.DevHandoff) throw new Error('selectView(...) was called with { view: \'fullscreen\', fileKey: undefined, editorType: \'dev_handoff\' }. Cannot create new files with editor type dev_handoff.');
        if (n.user && tryPluginId && tryPluginName && tryPluginVersionId) {
          let a = n.user?.drafts_folder_id;
          let c = n.currentUserOrgId && n.orgById[n.currentUserOrgId];
          let u = {
            editor_type: mapEditorTypeToStringWithObfuscated(editorType),
            name: getI18nString('community.try.plugin_name_with_community', {
              pluginName: tryPluginName
            }) || getI18nString('fullscreen.filename_view.title_placeholder')
          };
          a && (u.folder_id = a);
          c && (u.org_id = c.id);
          U_(e, editorType, !0).then(() => {
            Sp(e, u, null).then(n => {
              OZ(e, n, editorType).then(() => {
                fullscreenValue.onReady().then(() => {
                  _$$l3.user('try-plugin', () => {
                    e.dispatch(_$$$2({
                      tryPluginId,
                      tryPluginName,
                      tryPluginVersionId,
                      isWidget: !!isWidget,
                      fullscreenEditorType: editorType,
                      isPlaygroundFile: !!isPlaygroundFile,
                      tryPluginParams
                    }));
                  });
                }).catch(() => e.dispatch(FlashActions.error(getI18nString('flash.unable_to_try_resource'))));
              }).catch(t => {
                e.dispatch(FlashActions.error(OX(t)));
              });
            }).catch(t => {
              e.dispatch(FlashActions.error(OX(t)));
            });
          });
        }
      }
    } else if (r.view === 'fullscreen' && a.view === 'fullscreen') {
      if (a.fileKey && r.fileKey !== a.fileKey) {
        e.dispatch(_$$V2());
        e.dispatch(_$$sR({
          newSelectedView: a
        }));
      } else if (r.fileKey && !a.fileKey) {
        throw new Error('selectView(...) was called with { view: \'fullscreen\', fileKey: undefined } while a file was already open. We don\'t handle this case.');
      } else if (r.editorType !== a.editorType) {
        let t = e.getState().mirror.appModel.currentTool === _$$ec.tool;
        if (_$$L(), setLastUsedEditorType(a.editorType), fullscreenValue.isReady()) {
          Fullscreen?.setEditorType(mapEditorTypeToWorkspaceType(a.editorType));
          let e = n.theme.visibleTheme;
          Fullscreen?.setEditorTheme(e || '');
        }
        a.editorType === FEditorType.DevHandoff ? (e.dispatch(KE()), e.dispatch(hideModal()), t && fullscreenValue.onReady().then(() => fullscreenValue.triggerAction('set-tool-comments'))) : (a.editorType === FEditorType.Design && (r.editorType === FEditorType.Illustration || r.editorType === FEditorType.DevHandoff) || a.editorType === FEditorType.Illustration && (r.editorType === FEditorType.Design || r.editorType === FEditorType.DevHandoff)) && (e.dispatch(hideModal()), fullscreenValue.onReady().then(() => {
          t && fullscreenValue.triggerAction('set-tool-comments');
          let i = e.getState();
          let n = !!i.openFile?.canEdit;
          let r = AppStateTsApi?.propertiesPanelState()?.propertiesPanelTab?.getCopy() ?? DesignWorkspace.DESIGN;
          let a = n ? [DesignWorkspace.DESIGN, DesignWorkspace.PROTOTYPE] : [DesignWorkspace.INSPECT, DesignWorkspace.EXPORT];
          if (t) {
            setPropertiesPanelTab(DesignWorkspace.COMMENT);
          } else if (!a.includes(r)) {
            let e = n ? DesignWorkspace.DESIGN : DesignWorkspace.INSPECT;
            setPropertiesPanelTab(e);
          }
        }));
      } else {
        z4.getIsExtension() && r.editorType === FEditorType.DevHandoff && a.nodeId && a.nodeId !== r.nodeId && SceneGraphHelpers?.setSelectedNodeAndCanvas(a.nodeId, !1);
      }
      if (a.commentThreadId) {
        let e = Jj();
        e ? fullscreenValue.onReady().then(() => {
          e.updateCommentsMode && (fullscreenValue.triggerAction('set-tool-comments'), e.updateCommentsMode(!0));
        }) : fullscreenValue.onReady().then(() => fullscreenValue.triggerAction('set-tool-comments'));
      }
    }
    return s;
  }
  if (P6.matches(i) || YK.matches(i)) {
    let t = e.getState();
    if (t.user) {
      if (t.openFile && t.openFile.key in i.payload.fileKeys) {
        let n = t.openFile != null ? getRepoByIdAlt(t.openFile, t.repos) : null;
        isBranchAlt(t.openFile) && n?.default_file_key ? e.dispatch(_$$sf({
          view: 'fullscreen',
          fileKey: n.default_file_key,
          editorType: FEditorType.Design
        })) : desktopAPIInstance ? i.payload.userInitiated || customHistory.reload('File deleted', {
          key: t.openFile?.key || null
        }) : atomStoreManager.get(_$$_) || e.dispatch(_$$sf({
          view: 'recentsAndSharing'
        }));
      }
    } else {
      customHistory.reload('File deleted', {
        key: t.openFile?.key || null
      });
    }
  }
  return t(i);
};
function ry({
  canEditSubscriptions: e,
  libraryFile: t,
  libraries: i,
  onBack: r,
  onItemClick: a,
  onStyleClick: s,
  onVariableClick: o,
  onSelectShownView: l,
  org: c,
  shownView: u,
  width: p
}) {
  let [m, h] = useState(LibraryAgeEnum.THIRTY_DAYS);
  let [f, _] = useState(() => {
    let e = i.files.find(e => e.file.key === t.key);
    let n = (e?.num_components ?? 0) + (e?.num_state_groups ?? 0);
    let r = e?.num_styles ?? 0;
    let a = e?.num_variables ?? 0;
    return Gk(n, r, a);
  });
  let A = useMemo(() => i.files.find(e => e.file.key === t.key) ?? null, [i, t]);
  let [y, b, v] = _$$u2({
    overview: !0,
    analytics: !0
  });
  let I = createFileLibraryKeys(t.key, _$$l4(t));
  return jsxs(_$$t6, {
    page: _$$e3.DSA_FILE_VIEW,
    properties: {
      libraryKey: t.key
    },
    children: [A ? jsx(_$$C, {
      libraryStat: A,
      libraryKey: I.libraryKey,
      showingDefaultSubscriptionsForTeamId: null,
      showingDefaultSubscriptionsForUser: !1,
      showingDefaultSubscriptionsForOrg: c,
      canEditSubscriptions: e,
      onBackToList: r
    }) : jsx(_$$Y, {
      backToList: r,
      numMissingLibraries: 1
    }), jsx(_$$S4, {
      selectedDuration: m,
      onSelectDuration: h,
      shownView: u,
      onSelectShownView: l,
      selectedAssetType: f,
      onSelectAssetType: _,
      libraryFile: t,
      tabManager: v,
      tabProps: y
    }), getFeatureFlags().dse_fpl_wave_1 ? jsxs('div', {
      className: _$$s.minH0.$,
      children: [jsx(_$$t5.TabPanel, {
        ...b.overview,
        height: 'fill',
        children: jsx(_$$l5, {
          duration: m,
          entrypoint: _$$F5.OrgView,
          file: t,
          onItemClick: a,
          width: p
        })
      }), jsx(_$$t5.TabPanel, {
        ...b.analytics,
        height: 'fill',
        children: jsx(_$$O2, {
          duration: m,
          assetType: f,
          entrypoint: _$$F5.OrgView,
          libraryFile: t,
          libraries: i,
          onComponentClick: a,
          onStyleClick: s,
          onVariableClick: o,
          width: p
        })
      })]
    }) : jsxs(Fragment, {
      children: [u === _$$R3.OVERVIEW && jsx(_$$l5, {
        duration: m,
        entrypoint: _$$F5.OrgView,
        file: t,
        onItemClick: a,
        width: p
      }), u === _$$R3.ANALYTICS && jsx(_$$O2, {
        assetType: f,
        duration: m,
        entrypoint: _$$F5.OrgView,
        libraryFile: t,
        libraries: i,
        onComponentClick: a,
        onStyleClick: s,
        onVariableClick: o,
        width: p
      })]
    })]
  });
}
let rv = rb;
let rP = rN;
let rH = 'dsa_file_row--numColVal--bT1UJ library_modal_stats--numCol---FbhI';
function rW({
  file: e,
  isSearching: t,
  numComponents: i,
  numStateGroups: r,
  numStyles: a,
  numVariables: s,
  numVariableCollections: o,
  numInserts: l,
  recordingKey: d,
  viewFile: c
}) {
  let u = _$$b3(i, r, a, o);
  let p = createFileLibraryKeys(e.key, _$$l4(e));
  let m = _$$S5({
    disabled: u,
    libraryIdentifier: p,
    fileName: e.name,
    viewFile: c
  });
  return jsxs(_$$m, {
    libraryKey: p.libraryKey,
    disabled: u,
    onClick: m,
    className: 'dsa_file_row--orgLibrariesFileRow--TCF9k dsa_file_row--fileRowWithBorderNoHover--MNdFG file_row_styles--fileRowBase--USCNr file_row_styles--fileRowHover--WZeMw',
    disabledClassName: 'dsa_file_row--fileRowWithBorderNoHover--MNdFG file_row_styles--fileRowBase--USCNr',
    recordingKey: d,
    ariaLabel: e.name,
    children: [jsxs('div', {
      className: 'dsa_file_row--longNameAndToggle--HOmxa',
      children: [jsx(_$$u3, {
        name: e.name
      }), jsx('div', {
        className: 'dsa_file_row--openFileButton---3HD7',
        children: jsx('div', {
          className: 'dsa_file_row--openFileWrapper--m8Q9r',
          children: jsx(_$$x3, {
            libraryKey: _$$l4(e) ?? _$$l6('')
          })
        })
      })]
    }), jsx(yz, {
      children: t ? jsx(_$$I2, {
        numComponents: i,
        numStateGroups: r,
        numStyles: a,
        numVariables: s,
        numVariableCollections: o
      }) : jsx(rK, {
        numComponents: i,
        numStateGroups: r,
        numStyles: a,
        numVariables: s,
        numInserts: l
      })
    })]
  });
}
function rK({
  numComponents: e,
  numStateGroups: t,
  numStyles: i,
  numVariables: r,
  numInserts: a
}) {
  let s = getFeatureFlags().dsa_styles_variables_ui;
  return jsxs('div', {
    className: s ? 'dsa_file_row--countColsWithVariables--Qtyv7' : 'dsa_file_row--countCols--6dEa-',
    children: [jsx('div', {
      className: rH,
      children: (e + t).toLocaleString()
    }), jsx('div', {
      className: rH,
      children: i.toLocaleString()
    }), s && jsx('div', {
      className: rH,
      children: r.toLocaleString()
    }), jsx('div', {
      className: rH,
      children: s ? getI18nString('design_systems.libraries_modal.plural.num_component', {
        numComponents: a
      }) : a.toLocaleString()
    })]
  });
}
function rY({
  libraryFiles: e,
  fileByKey: t,
  currentLibrariesViewFilterState: i,
  isSearching: r,
  debouncedSearchQuery: a,
  onItemClick: s,
  sortState: o,
  sortBy: l,
  viewFile: c,
  width: u
}) {
  let p = CK({
    libraryFiles: e,
    currentLibrariesViewFilterState: r ? null : i
  });
  let m = !r && p.length === 0;
  let h = null;
  return jsxs(Fragment, {
    children: [!r && jsx(rZ, {
      sortState: o,
      sortBy: l
    }), jsxs('div', {
      className: 'dsa_subscription_list_file_rows--teamSectionsWrapper--l13eE',
      children: [p.map(e => {
        let i = t[e.library_file_key];
        if (!i) return;
        let l = (o.sortBy === 'alpha' || o.sortBy === 'search') && h !== (e.team_id ?? NO_TEAM);
        h = e.team_id ?? NO_TEAM;
        let p = e.team_name || getDraftsSidebarString();
        return jsxs(_$$Fragment, {
          children: [l && jsx('div', {
            className: 'dsa_subscription_list_file_rows--teamSectionHeaderBottomBorder--UZTcA library_section_header--teamSectionHeaderBottomBorder--5Sezu library_section_header--_teamSectionHeaderBase--WYP5z library_section_header--sectionHeader--U79xZ',
            children: p
          }), jsx(rW, {
            file: i,
            isSearching: r,
            numComponents: e.num_components,
            numInserts: e.num_weekly_insertions,
            numStateGroups: e.num_state_groups,
            numStyles: e.num_styles,
            numVariableCollections: e.num_variable_collections,
            numVariables: e.num_variables,
            recordingKey: `subscriptionListViewFileRow.${p}.${i.name}`,
            viewFile: c
          }), r && jsx(_$$C2, {
            publishedLibrary: _$$E4(e),
            searchQuery: a,
            inline: !0,
            width: u,
            onItemClick: s
          })]
        }, i.key);
      }), m && jsx(_$$p4, {})]
    })]
  });
}
let rq = ['alpha', 'components', 'styles', 'inserts'];
let r$ = ['alpha', 'components', 'styles', 'variables', 'inserts'];
function rZ({
  sortState: e,
  sortBy: t
}) {
  let i = getFeatureFlags().dsa_styles_variables_ui;
  return jsx(Hj, {
    className: i ? 'dsa_subscription_list_file_rows--headerRowOverviewWithVariables--kB7xk library_modal_stats--headerRow--MTZxi text--fontPos11--2LvXf text--_fontBase--QdLsd' : 'dsa_subscription_list_file_rows--headerRowOverview--PxMbL library_modal_stats--headerRow--MTZxi text--fontPos11--2LvXf text--_fontBase--QdLsd',
    children: (i ? r$ : rq).map(i => jsx(_$$tD, {
      className: rP()(i === 'alpha' ? 'dsa_subscription_list_file_rows--nameCol--pVdjf' : 'dsa_subscription_list_file_rows--numCol--mF91c library_modal_stats--numCol---FbhI', {
        'dsa_subscription_list_file_rows--selectedCol--76BJZ library_modal_stats--selectedCol--pwGl4': e.sortBy === i
      }),
      isDescending: e.isDescending,
      hasArrow: e.sortBy === i,
      field: i,
      sortBy: t,
      children: jsx(rX, {
        field: i
      })
    }, i))
  });
}
function rX({
  field: e
}) {
  switch (e) {
    case 'alpha':
      return renderI18nText('design_systems.libraries_modal.teams_and_libraries');
    case 'components':
      return renderI18nText('design_systems.libraries_modal.components');
    case 'styles':
      return renderI18nText('design_systems.libraries_modal.styles');
    case 'teams':
      return renderI18nText('design_systems.libraries_modal.used_by');
    case 'inserts':
      return renderI18nText('design_systems.libraries_modal.inserts_last_week');
    case 'variables':
      return renderI18nText('design_systems.libraries_modal.variables');
    case 'search':
      return null;
  }
}
let rQ = 'dsa_list_view--slidingPane--5bbjF sliding_pane--slidingPane--6OmDU';
let rJ = 'DSAListView:state';
function r0({
  isLoading: e,
  libraries: t,
  viewFile: i,
  onItemClick: r,
  width: a
}) {
  let [o, l] = useState(0);
  let {
    searchQuery,
    debouncedSearchQuery,
    isSearching,
    isSearchLoading,
    libraryFiles,
    onSearchQueryChange
  } = TW(t.files);
  let _ = _$$sZ();
  let A = useDispatch();
  useEffect(() => {
    (async () => {
      _ && l(await NW(_.id));
    })();
  }, [_, l, A]);
  let y = useRef(getStorage()).current;
  let {
    fileByKey
  } = FC();
  let [v, I] = useState(() => y.get(rJ) ?? {
    sortBy: isSearching ? 'search' : 'alpha',
    prevCol: null,
    isDescending: !0
  });
  let E = useCallback(e => {
    let t = v.sortBy;
    let i = t !== e || !v.isDescending;
    let n = {
      sortBy: e,
      prevCol: t,
      isDescending: i
    };
    I(n);
    y.set(rJ, n);
  }, [v, y]);
  let x = _$$mJ({
    libraryFiles,
    showingDefaultSubscriptionsForTeamId: null,
    sortState: v
  });
  let S = !!_?.workspaces_count;
  let w = useMemo(() => S ? {
    type: 'org'
  } : null, [S]);
  let [C, T] = useState(w);
  let k = useMemo(() => !isSearching && (C?.type === 'workspace' || C?.type === 'drafts' || C?.type === 'unassigned'), [C, isSearching]);
  let R = S && C?.type === 'org' ? jsx(_$$A8, {
    libraryFiles: x,
    allLibrariesViewFilterStates: [C],
    handleLibrariesViewFilterChange: T,
    showingDefaultSubscriptionsForUser: !1,
    isSearching
  }) : jsx(rY, {
    currentLibrariesViewFilterState: C,
    debouncedSearchQuery,
    fileByKey,
    isSearching,
    libraryFiles: x,
    onItemClick: r,
    sortBy: E,
    sortState: v,
    viewFile: i,
    width: a
  });
  let N = isSearching && libraryFiles.length === 0;
  let P = useMemo(() => rv()(C, w) ? 'dsa:list_view' : 'dsa:list_view:filtered', [C, w]);
  return jsxs('div', {
    children: [jsx('div', {
      className: 'dsa_list_view--searchContainer--ktbB- modal--searchContainer--EA8ib',
      children: jsx(_$$aU, {
        query: searchQuery,
        onChange: onSearchQueryChange,
        extraSpacing: !0,
        isVisible: !0,
        autofocus: !0,
        selectOnFocus: !0,
        recordingKey: 'subscriptionListViewLibrarySearch',
        entryPointForTracking: P
      })
    }), jsx(_$$P4, {
      className: 'dsa_list_view--dsaFileListView--KjjGn',
      hideScrollbar: e,
      width: a,
      children: jsxs('div', {
        className: 'dsa_list_view--slidingPaneContainer--4I7n0 sliding_pane--slidingPaneContainer--RQkXf',
        children: [jsxs('div', {
          className: k ? 'dsa_list_view--slidingPaneLeft--kNUv- sliding_pane--slidingPaneLeft--Wrfdy sliding_pane--slidingPane--6OmDU' : rQ,
          children: [e && jsxs(Fragment, {
            children: [jsx(FO, {}), !isSearching && jsx('div', {
              className: 'dsa_list_view--dsaLoadingText--35uXw',
              children: getFeatureFlags().dsa_styles_variables_ui ? renderI18nText('design_systems.libraries_modal.loading_dsa_message_all_assets') : renderI18nText('design_systems.libraries_modal.loading_dsa_message')
            })]
          }), !e && !isSearching && jsx(r1, {
            isLoading: e,
            numTeams: o,
            libraries: t
          }), !e && N && jsx(_$$h3, {
            isSearchLoading,
            searchQuery
          }), !k && !e && R]
        }), k && C && jsxs('div', {
          className: rQ,
          children: [jsx(_$$i2, {
            assetOrFileName: SF(C, _?.name),
            onBack: () => T({
              type: 'org'
            })
          }), R]
        })]
      })
    })]
  });
}
function r1({
  isLoading: e,
  numTeams: t,
  libraries: i
}) {
  let {
    teamsWithLibraries,
    totalLibraries,
    totalComponents,
    totalStyles,
    totalVariables
  } = i;
  let c = useMemo(() => {
    let e = [{
      type: _$$V3.STAT,
      header: getI18nString('design_systems.libraries_modal.total_teams'),
      count: t,
      word: getI18nString('design_systems.libraries_modal.plural.team', {
        teamCount: t
      })
    }, {
      type: _$$V3.STAT,
      header: getI18nString('design_systems.libraries_modal.teams_with_libraries'),
      count: teamsWithLibraries,
      word: getI18nString('design_systems.libraries_modal.plural.team', {
        teamCount: teamsWithLibraries
      })
    }, {
      type: _$$V3.STAT,
      header: getI18nString('design_systems.libraries_modal.total_libraries'),
      count: totalLibraries,
      word: getI18nString('design_systems.libraries_modal.plural.library', {
        libraryCount: totalLibraries
      })
    }, {
      type: _$$V3.STAT,
      header: getI18nString('design_systems.libraries_modal.total_components'),
      count: totalComponents,
      word: getI18nString('design_systems.libraries_modal.plural.component', {
        componentCount: totalComponents
      })
    }, {
      type: _$$V3.STAT,
      header: getI18nString('design_systems.libraries_modal.total_styles'),
      count: totalStyles,
      word: getI18nString('design_systems.libraries_modal.plural.style', {
        styleCount: totalStyles
      })
    }];
    getFeatureFlags().dsa_styles_variables_ui && e.push({
      type: _$$V3.STAT,
      header: getI18nString('design_systems.libraries_modal.total_variables'),
      count: totalVariables,
      word: getI18nString('design_systems.libraries_modal.plural.variable', {
        variableCount: totalVariables
      })
    });
    return e;
  }, [t, teamsWithLibraries, totalLibraries, totalComponents, totalStyles, totalVariables]);
  return jsx(_$$c3, {
    isLoading: e,
    stats: c
  });
}
let r3 = 'dsa_library_view--slidingPane--l5v8v sliding_pane--slidingPane--6OmDU';
let r6 = 'dsa_library_view--slidingPaneLeft--dNIVy sliding_pane--slidingPaneLeft--Wrfdy sliding_pane--slidingPane--6OmDU';
function r7({
  org: e,
  width: t
}) {
  let i = useDispatch();
  _$$T2();
  let r = useSelector(e => e.currentUserOrgId);
  let a = useSelector(vx);
  let o = useSelector(e => e.modalShown);
  let [l, c] = useState(o?.type === LIBRARY_PREFERENCES_MODAL && o.data?.fileKey && {
    fileKey: o.data?.fileKey,
    libraryKey: _$$$3(o.data?.fileKey)
  } || null);
  let [u, p] = useState(null);
  let [m, h] = useState(null);
  let [g, f] = useState(null);
  let [_, A] = useState(null);
  let [y, b] = useState(_$$R3.OVERVIEW);
  let v = _$$F4();
  let [I] = IT(_$$Z2(r));
  let E = useMemo(() => I.data?.files.map(e => e.file).find(e => e.key === l?.fileKey), [l, I.data?.files]);
  let [x] = IT(fv(r));
  let S = useCallback(() => {
    c(null);
    p(null);
    h(null);
    f(null);
    A(null);
    b(_$$R3.OVERVIEW);
    setTimeout(() => {
      handleAtomEvent({
        id: 'Library File Collapsed'
      });
    }, 200);
  }, []);
  let w = useCallback(() => {
    h(null);
  }, []);
  let C = useCallback(() => {
    p(null);
  }, []);
  let T = useCallback(() => {
    f(null);
  }, []);
  let k = useCallback(() => {
    A(null);
  }, []);
  let R = useCallback((e, t) => {
    T();
    k();
    t.type === PrimaryWorkflowEnum.COMPONENT ? p(t) : t.type === PrimaryWorkflowEnum.STATE_GROUP && h(t);
  }, [T, k]);
  let N = useCallback((e, t) => {
    C();
    w();
    k();
    f(t);
  }, [C, w, k]);
  let P = useCallback((e, t) => {
    C();
    w();
    T();
    A(t);
  }, [C, w, T]);
  _$$nz();
  useEffect(() => {
    i(Yx({}));
  }, [i]);
  let O = useCurrentPlanUser('DSALibraryView');
  let D = useIsOrgAdminUser(O).unwrapOr(!1);
  if (x.status === 'loading') {
    return jsx('div', {
      className: 'dsa_library_view--loadingSpinnerContainer--liRsx',
      children: jsx(_$$k2, {})
    });
  }
  if (x.status === 'loaded' && x.data.is_currently_migrating) return jsx(_$$l7, {});
  let L = m != null || u != null || g != null || _ != null;
  let F = I.data || initialLibraryStats;
  return jsx(_$$t6, {
    page: _$$e3.DSA_LIBRARY_VIEW,
    children: jsx(_$$r7.Provider, {
      value: v,
      children: jsxs('div', {
        className: 'dsa_library_view--slidingPaneContainer--fZTf- sliding_pane--slidingPaneContainer--RQkXf',
        children: [jsx('div', {
          className: E || L ? r6 : r3,
          children: jsx(r0, {
            viewFile: c,
            isLoading: I.status === 'loading' || v == null,
            libraries: F,
            onItemClick: R,
            width: t
          })
        }), E && jsx('div', {
          className: L ? r6 : r3,
          children: jsx(ry, {
            canEditSubscriptions: D,
            libraries: F,
            libraryFile: E,
            onBack: S,
            onItemClick: R,
            onSelectShownView: b,
            onStyleClick: N,
            onVariableClick: P,
            org: e,
            shownView: y,
            width: t
          })
        }), m && jsx('div', {
          className: u ? r6 : r3,
          children: jsx(_$$v2, {
            stateGroup: m,
            onBackClick: w,
            onItemClick: R,
            width: t
          })
        }), u && jsx('div', {
          className: r3,
          children: jsx(_$$E5, {
            component: u,
            onBackClick: C,
            width: t,
            orgId: r,
            fileVersion: a
          })
        }), g && jsx('div', {
          className: r3,
          children: jsx(_$$U3, {
            libraryFileKey: E?.key,
            styleStat: g,
            onBackClick: T,
            width: t
          })
        }), _ && jsx('div', {
          className: r3,
          children: jsx(_$$x2, {
            libraryFileKey: E?.key,
            variableStat: _,
            onBackClick: k,
            width: t
          })
        })]
      })
    })
  });
}
let an = parsePxInt(YQL);
let ar = () => ({
  [_$$X2.YOUR_TEAMS]: getI18nString('org_view.your_teams'),
  [_$$X2.LIBRARIES]: getI18nString('org_view.libraries'),
  [_$$X2.FONTS]: getI18nString('org_view.shared_fonts'),
  [_$$X2.CONNECTED_PROJECTS]: getI18nString('org_view.connected_projects'),
  [_$$X2.PLUGINS]: getI18nString('org_view.plugins'),
  [_$$X2.WIDGETS]: getI18nString('org_view.widgets')
});
class aa extends _$$o5 {}
let as = registerModal(e => {
  let t = useDispatch();
  let i = _6();
  let r = _$$sZ();
  let a = useSelector(e => e.sharedFonts);
  let o = useSelector(e => getPermissionsStateMemoized(e));
  let l = useCurrentPlanUser('OrgViewModal');
  let c = useIsOrgAdminUser(l).unwrapOr(!1);
  let u = useIsOrgMemberOrAdminUser(l);
  if (useEffect(() => {
    c && e.tab === _$$X2.FONTS && (t(hideModal()), t(_$$sf({
      view: 'orgAdminSettings',
      orgAdminSettingsViewTab: J7.RESOURCES,
      orgAdminSettingsViewSecondaryTab: _d.SHARED_FONTS
    })));
  }, [c, e.tab, t]), useEffect(() => {
    u.status !== 'loaded' || u.data || t(hideModal());
  }, [u, t]), _$$h(() => {
    r && _$$y3.loadSharedFonts(t);
  }), !r || u.status === 'loading') {
    return null;
  }
  let p = e => {
    t(_$$sf({
      view: 'org',
      orgId: r.id,
      orgViewTab: e
    }));
  };
  return jsx(fu, {
    name: _$$e3.ORG_SETTINGS,
    properties: {
      section: e.tab,
      orgId: r.id
    },
    children: jsx(OJ, {
      headerSize: 'large',
      disableClickOutsideToHide: !0,
      title: (() => {
        let t = getFeatureFlags().disable_org_dsa ? [] : [{
          view: _$$X2.LIBRARIES
        }];
        c || t.push({
          view: _$$X2.FONTS
        });
        return jsx('div', {
          className: 'org_view_modal--tabs--C7FPA',
          children: t.map(t => jsx(aa, {
            onClick: () => p(t.view),
            tab: t.view,
            selectedTab: e.tab,
            children: ar()[t.view]
          }, t.view))
        });
      })(),
      onClose: () => {
        t(hideModal());
        i.view === 'org' && t(_$$sf({
          view: 'org',
          orgId: r.id,
          orgViewTab: _$$X2.HOME
        }));
      },
      maxWidth: an,
      children: jsx('div', {
        className: 'org_view_modal--container--46AvY',
        children: (() => {
          switch (e.tab) {
            case _$$X2.LIBRARIES:
              return getFeatureFlags().disable_org_dsa ? null : jsx(r7, {
                org: r,
                width: an
              });
            case _$$X2.FONTS:
              return jsx(_$$y3, {
                dispatch: t,
                sharedFonts: a,
                orgId: r.id,
                width: an,
                resourceType: 'org',
                useModalViewComponent: !0,
                permissionsState: o
              });
            default:
              throwTypeError(e.tab);
          }
        })()
      })
    })
  });
}, _$$C3, ModalSupportsBackground.YES);
let ao = e => t => function (i) {
  if (Qv.matches(i)) {
    t(i);
    e.dispatch(UK({
      force: !1
    }));
    let n = e.getState();
    let r = n.orgById[n.currentUserOrgId];
    let a = n.user && n.orgUsersByOrgId[n.currentUserOrgId] && n.orgUsersByOrgId[n.currentUserOrgId][n.user.id];
    r && a && r.standing !== ZG.GOOD && a.permission !== FUserRoleType.GUEST && e.dispatch(Pg({
      orgId: n.currentUserOrgId
    }));
    return;
  }
  _$$sf.matches(i) && (i.payload.view === 'org' ? (i.payload.orgViewTab === 'libraries' && e.dispatch(showModalHandler({
    type: as,
    data: {
      tab: _$$X2.LIBRARIES
    }
  })), i.payload.orgViewTab === 'fonts' && e.dispatch(showModalHandler({
    type: as,
    data: {
      tab: _$$X2.FONTS
    }
  }))) : i.payload.view === 'orgAdminSettings' && i.payload.teamsTabAssetTransferRequest && e.dispatch(showModalHandler({
    type: _$$S3(),
    data: {
      selectedAssetTransferRequest: i.payload.teamsTabAssetTransferRequest
    }
  })));
  return t(i);
};
let ac = e => t => function (i) {
  let n = e.getState();
  if (_$$sf.matches(i) && (i.payload.view === 'teamUpgrade' || i.payload.view === 'promoReview' || i.payload.view === 'eduReview')) {
    let r = i.payload.teamId;
    if (!r) {
      _$$p5(n.selectedView, n.payment) ? e.dispatch(_$$Ts2({
        numDesignEditors: 0,
        numWhiteboardEditors: 0,
        billingPeriod: SubscriptionType.MONTHLY
      })) : i.payload.view === 'teamUpgrade' && i.payload.billingPeriod ? e.dispatch(_$$Lo({
        billingPeriod: i.payload.billingPeriod
      })) : i.payload.view === 'eduReview' && e.dispatch(_$$Lo({
        billingPeriod: SubscriptionType.STUDENT
      }));
      t(i);
      return;
    }
    let a = n.teams[r];
    if (n.selectedView == null || n.selectedView.view !== 'teamUpgrade' || n.selectedView.teamId !== r) {
      let t = n.teamUserByTeamId[r] || {};
      let s = Object.keys(t).filter(e => t[e]?.whiteboard_paid_status === FPlanRestrictionType.FULL).length;
      let o = SubscriptionType.ANNUAL;
      i.payload.view === 'promoReview' ? o = SubscriptionType.MONTHLY : i.payload.view === 'eduReview' ? o = SubscriptionType.STUDENT : i.payload.view === 'teamUpgrade' && i.payload.billingPeriod && (o = i.payload.billingPeriod);
      e.dispatch(_$$Ts2({
        numDesignEditors: a.editors ?? 0,
        numWhiteboardEditors: s,
        billingPeriod: o
      }));
    } else {
      i.payload.view === 'teamUpgrade' && i.payload.billingPeriod && e.dispatch(_$$Lo({
        billingPeriod: i.payload.billingPeriod
      }));
    }
    t(i);
    return;
  }
  return t(i);
};
let am = e => t => function (i) {
  if (_$$sf.matches(i)) {
    let t = $A(e.getState().selectedView);
    let n = i.payload.view === 'fullscreen' && i.payload.editorType === FEditorType.DevHandoff;
    _$$hM() && t !== n && handlePluginError();
  }
  return t(i);
};
let af = ag;
async function av(e) {
  await new Promise(t => {
    setTimeout(t, e);
  });
}
let aT = new _$$H6({
  name: 'CommunityResourcePaymentShim',
  ..._$$uu,
  livegraphView: CommunityPaymentsForRealtimeShim,
  livegraphArgs: () => ({}),
  convertLivegraphMessage: (e, t, {}, i) => function (e, t) {
    let i = [];
    let n = e.getState().communityPayments;
    let r = new Map();
    for (let e of t.communityResourcePaymentsForUser || []) {
      let t = n[e.monetizedResourceMetadataId];
      let a = {
        status: e.statusEnum,
        updated_at: e.updatedAt.toISOString(),
        purchased_at: e.purchasedAt?.toISOString() || null,
        subscription_expires_at: e.subscriptionExpiresAt?.toISOString() || null,
        subscription_canceled_at: e.subscriptionCanceledAt?.toISOString() || null,
        refund_reason: e.refundReason,
        monetized_resource_metadata_id: e.monetizedResourceMetadataId,
        subscription_interval: e.subscriptionInterval
      };
      r.set(a.monetized_resource_metadata_id, a);
      t && t.updated_at && !(t.updated_at < a.updated_at) || i.push({
        method: 'put',
        type: 'community_resource_payment',
        community_resource_payment: a
      });
    }
    for (let e in n) {
      let t = n[e];
      t && (r.has(t.monetized_resource_metadata_id) || i.push({
        method: 'delete',
        type: 'community_resource_payment',
        community_resource_payment: t
      }));
    }
    return i;
  }(i.store, e),
  periodicallyResubscribe: !1,
  delaySubscribeMs: () => randomBetween(500, 2e3),
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
let aL = getFileKey();
function aF(e, t) {
  if (t.type === 'file' && t.method === 'delete') {
    t.idForDeletion && e.dispatch(_$$ru({
      fileKey: t.idForDeletion
    }));
    return;
  }
  if (!(t.component || t.state_group)) return;
  let i = t.component || t.state_group;
  let n = t.component ? PrimaryWorkflowEnum.COMPONENT : PrimaryWorkflowEnum.STATE_GROUP;
  let r = e.getState();
  let a = atomStoreManager.get(qp);
  if (i.length === 0) return;
  let s = aL(i[0]);
  let l = i[0].library_key;
  let d = r.fileByKey[s];
  let c = a[l];
  let u = getFeatureFlags().dse_lk_realtime_file_lookup ? c : d;
  if (getFeatureFlags().dse_lk_realtime_audit && !c && d && reportError(_$$e.DESIGN_SYSTEMS_ECOSYSTEM, new Error('Design System Asset Shim count not find file via library key'), {
    tags: {
      fileKey: s,
      libraryKey: l
    }
  }), u) {
    switch (t.method) {
      case 'delete':
        if ((n === PrimaryWorkflowEnum.COMPONENT || n === PrimaryWorkflowEnum.STATE_GROUP) && r.selectedView.view === 'fullscreen' && i[0].destination_key) {
          n === PrimaryWorkflowEnum.COMPONENT && _$$tL(i.map(e => e.destination_key).filter(e => !!e), [], e);
          n === PrimaryWorkflowEnum.STATE_GROUP && _$$tL([], i.map(e => e.destination_key).filter(e => !!e), e);
          let t = {};
          let a = {};
          for (let e of i) {
            let i = n === PrimaryWorkflowEnum.COMPONENT ? e.component_key : e.key;
            let s = e.destination_key;
            i && s && (r.openFile && _$$eE(e, r.openFile) ? a[e.node_id] = s : t[i] = s);
          }
          e.dispatch(_$$dC({
            subscribedOldKeyToNewKey: t,
            localOldGuidToNewKey: a
          }));
        }
        e.dispatch(_$$yH2({
          nodeIds: i.map(e => e.node_id),
          file: u,
          type: n
        }));
        break;
      case 'post':
      case 'put':
        {
          let r = {};
          for (let e of i) r[e.node_id] = e;
          e.dispatch(vP({
            itemsById: r,
            fileKey: u.key,
            libraryKey: _$$l6(u.library_key),
            teamId: u.team_id,
            type: n
          }));
          e.dispatch(JV({
            libraryUpdatesBannerDismissed: !1
          }));
          t.component && e.getState().selectedView?.view === 'fullscreen' && setTimeout(() => {
            let {
              updateCount
            } = atomStoreManager.get(_$$WJ);
            updateCount && trackEventAnalytics('component_update_from_realtime', {
              updateCount,
              isShimFFEnabled: !0
            });
          }, 1e3);
          t.state_group && e.getState().selectedView?.view === 'fullscreen' && setTimeout(() => {
            let {
              updateCount
            } = atomStoreManager.get(_$$WJ);
            updateCount && trackEventAnalytics('state_group_update_from_realtime', {
              updateCount,
              isShimFFEnabled: !0
            });
          }, 1e3);
        }
    }
  }
}
function aM(e) {
  return e.replace(/\.\d+Z/, 'Z');
}
let aj = new _$$H6({
  name: 'TeamChannelComponentsShim',
  ...fJ,
  livegraphView: ComponentUpdatesForTeam,
  livegraphArgs: e => ({
    teamId: e
  }),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    let i = [];
    let n = [];
    let r = [];
    let a = t.team?.id || '';
    for (let s of t.team?.componentUpdates || []) {
      let t = s.component?.nodeId || s.nodeId || '';
      let o = _$$l6(s.component?.libraryKey ?? s.libraryKey ?? '');
      let l = e.getState().library.publishedByLibraryKey.components;
      let d = aM(l?.[a]?.[o]?.[t]?.updated_at || '');
      if (s.updateType === 'delete' && !d || !s?.component && s.updateType !== 'delete' || s?.component && d >= aM(s.component?.updatedAt?.toISOString() || '')) continue;
      let c = aV(s);
      s.updateType === 'post' ? i.push(c) : s.updateType === 'put' ? n.push(c) : s.updateType === 'delete' && r.push(c);
    }
    let s = [];
    i.length && s.push({
      type: 'component',
      method: 'post',
      component: i
    });
    n.length && s.push({
      type: 'component',
      method: 'put',
      component: n
    });
    r.length && s.push({
      type: 'component',
      method: 'delete',
      component: r
    });
    return s;
  }(n.store, e),
  periodicallyResubscribe: !1,
  delaySubscribeMs: () => randomBetween(500, 2e3),
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
let aU = new _$$H6({
  name: 'ProjectChannelComponentsShim',
  ..._$$aj,
  livegraphView: ComponentUpdatesForProject,
  livegraphArgs: e => ({
    projectId: e
  }),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    let i = [];
    let n = [];
    let r = [];
    for (let a of t.project?.componentUpdates || []) {
      let t = a.component?.nodeId || a.nodeId || '';
      let s = atomStoreManager.get(qp);
      let o = _$$l6(a.component?.libraryKey ?? a.libraryKey ?? '');
      let l = a.component?.file?.teamId || s[o]?.team_id || '';
      let d = e.getState().library.publishedByLibraryKey.components;
      let c = aM(d?.[l]?.[o]?.[t]?.updated_at || '');
      if (a.updateType === 'delete' && !c || !a?.component && a.updateType !== 'delete' || a?.component && c >= aM(a.component?.updatedAt?.toISOString() || '')) continue;
      let u = aV(a);
      a.updateType === 'post' ? i.push(u) : a.updateType === 'put' ? n.push(u) : a.updateType === 'delete' && r.push(u);
    }
    let a = [];
    i.length && a.push({
      type: 'component',
      method: 'post',
      component: i
    });
    n.length && a.push({
      type: 'component',
      method: 'put',
      component: n
    });
    r.length && a.push({
      type: 'component',
      method: 'delete',
      component: r
    });
    return a;
  }(n.store, e),
  periodicallyResubscribe: !1,
  delaySubscribeMs: () => randomBetween(500, 2e3),
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
let aB = new _$$H6({
  name: 'FileChannelComponentsShim',
  ...w7,
  livegraphView: ComponentUpdatesForFile,
  livegraphArgs: e => ({
    fileKey: e
  }),
  convertLivegraphMessage: (e, t, {
    fileKey: i
  }, n) => function (e, t, i) {
    let n = [];
    let r = [];
    let a = [];
    let s = [];
    for (let o of (i.file || s.push({
      type: 'file',
      method: 'delete',
      idForDeletion: t
    }), i.file?.componentUpdates || [])) {
      let t = o.component?.nodeId || o.nodeId || '';
      let i = atomStoreManager.get(qp);
      let s = _$$l6(o.component?.libraryKey ?? o.libraryKey ?? '');
      let l = e.getState().library.publishedByLibraryKey.components;
      let d = o.component?.file?.teamId || i[s]?.team_id || '';
      let c = aM(l?.[d]?.[s]?.[t]?.updated_at || '');
      if (o.updateType === 'delete' && !c || !o?.component && o.updateType !== 'delete' || o?.component && c >= aM(o.component?.updatedAt?.toISOString() || '')) continue;
      let u = aV(o);
      o.updateType === 'post' ? n.push(u) : o.updateType === 'put' ? r.push(u) : o.updateType === 'delete' && a.push(u);
    }
    n.length && s.push({
      type: 'component',
      method: 'post',
      component: n
    });
    r.length && s.push({
      type: 'component',
      method: 'put',
      component: r
    });
    a.length && s.push({
      type: 'component',
      method: 'delete',
      component: a
    });
    return s;
  }(n.store, i, e),
  periodicallyResubscribe: !1,
  delaySubscribeMs: () => randomBetween(500, 2e3),
  darkReadEnabled: ({
    store: e
  }) => e.getState().selectedView.view === 'fullscreen',
  fullReadEnabled: () => !0
});
function aV(e) {
  return {
    type: PrimaryWorkflowEnum.COMPONENT,
    node_id: e.component?.nodeId || e.nodeId || '',
    name: e.component?.name || '',
    file_key: e.component?.libraryResourceId || e?.fileKey || '',
    file_key_source: FileKeySourceEnum.LIVEGRAPH_DATA,
    library_key: _$$l6(e.component?.libraryKey ?? e.libraryKey ?? ''),
    checkpoint_id: e.component?.checkpointId || void 0,
    unpublished_at: e.component?.unpublishedAt?.toISOString() || null,
    content_hash: e.component?.contentHash,
    userFacingVersion: e.component?.userFacingVersion || e.component?.contentHash,
    description: e.component?.description || '',
    description_rt: e.component?.description_rt || '',
    component_key: e.component?.componentKey || e.componentKey,
    min_node_width: e.component?.minNodeWidth || void 0,
    min_node_height: e.component?.minNodeHeight || void 0,
    destination_key: e.component?.destinationKey || e.destinationKey,
    containing_frame: {
      name: e.component?.containingFrame?.name || void 0,
      nodeId: e.component?.containingFrame?.nodeId || void 0,
      backgroundColor: e.component?.containingFrame?.backgroundColor || void 0,
      pageId: e.component?.containingFrame?.pageId || void 0,
      pageName: e.component?.containingFrame?.pageName || void 0,
      sortPosition: e.component?.containingFrame?.sortPosition || null,
      containingStateGroup: e.component?.containingFrame?.containingStateGroup ? {
        nodeId: e.component?.containingFrame?.containingStateGroup?.nodeId || void 0,
        name: e.component?.containingFrame?.containingStateGroup?.name || void 0
      } : void 0
    },
    sort_position: e.component?.sortPosition || null,
    has_video: getResourceDataOrFallback(e.component?.hasVideo, null),
    id: e.component?.id,
    updated_at: e.component?.updatedAt?.toISOString(),
    hub_file_id: e.component?.hubFileId,
    canvas_url: `/component/${e.component?.componentKey}/canvas?ver=${e.component?.contentHash}`,
    thumbnail_url: `/component/${e.component?.componentKey}/thumbnail?ver=${e.component?.contentHash}`
  };
}
function aG(e) {
  return {
    type: PrimaryWorkflowEnum.STATE_GROUP,
    node_id: e.stateGroup?.nodeId || e.nodeId || '',
    name: e.stateGroup?.name || '',
    file_key: e.stateGroup?.libraryResourceId || e?.fileKey || '',
    file_key_source: FileKeySourceEnum.LIVEGRAPH_DATA,
    checkpoint_id: e.stateGroup?.checkpointId || void 0,
    unpublished_at: e.stateGroup?.unpublishedAt?.toISOString() || null,
    description: e.stateGroup?.description || '',
    description_rt: e.stateGroup?.description_rt || '',
    key: e.stateGroup?.key || e.key,
    min_node_width: e.stateGroup?.minNodeWidth || 0,
    min_node_height: e.stateGroup?.minNodeHeight || 0,
    destination_key: e.stateGroup?.destinationKey || e?.destinationKey,
    containing_frame: {
      name: e.stateGroup?.containingFrame?.name || void 0,
      nodeId: e.stateGroup?.containingFrame?.nodeId || void 0,
      backgroundColor: e.stateGroup?.containingFrame?.backgroundColor || void 0,
      pageId: e.stateGroup?.containingFrame?.pageId || void 0,
      pageName: e.stateGroup?.containingFrame?.pageName || void 0
    },
    fill_color: e.stateGroup?.fillColor || void 0,
    id: e.id,
    version: Rf(e.stateGroup?.version || ''),
    userFacingVersion: Rf(e.stateGroup?.userFacingVersion || e.stateGroup?.version || ''),
    default_state_key: e.stateGroup?.defaultStateKey || '',
    updated_at: e.stateGroup?.updatedAt?.toISOString(),
    hub_file_id: e.stateGroup?.hubFileId,
    library_key: _$$l6(e.stateGroup?.libraryKey ?? e.libraryKey ?? ''),
    canvas_url: `/state_group/${e.stateGroup?.key}/canvas?ver=${e.stateGroup?.version}`,
    thumbnail_url: `/state_group/${e.stateGroup?.key}/thumbnail?ver=${e.stateGroup?.version}`
  };
}
let az = new _$$H6({
  name: 'TeamChannelStateGroupShim',
  ...fJ,
  livegraphView: StateGroupUpdatesForTeam,
  livegraphArgs: e => ({
    teamId: e
  }),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    let i = [];
    let n = [];
    let r = [];
    let a = t.team?.id || '';
    for (let s of t.team?.stateGroupUpdates || []) {
      let t = s.stateGroup?.nodeId || s.nodeId || '';
      let o = _$$l6(s.stateGroup?.libraryKey ?? s.libraryKey ?? '');
      let l = e.getState().library.publishedByLibraryKey.stateGroups;
      let d = aM(l?.[a]?.[o]?.[t]?.updated_at || '');
      if (s.updateType === 'delete' && !d || !s?.stateGroup && s.updateType !== 'delete' || s?.stateGroup && d >= aM(s.stateGroup?.updatedAt?.toISOString() || '')) continue;
      let c = aG(s);
      s.updateType === 'post' ? i.push(c) : s.updateType === 'put' ? n.push(c) : s.updateType === 'delete' && r.push(c);
    }
    let s = [];
    i.length && s.push({
      type: 'state_group',
      method: 'post',
      state_group: i
    });
    n.length && s.push({
      type: 'state_group',
      method: 'put',
      state_group: n
    });
    r.length && s.push({
      type: 'state_group',
      method: 'delete',
      state_group: r
    });
    return s;
  }(n.store, e),
  periodicallyResubscribe: !1,
  delaySubscribeMs: () => randomBetween(500, 2e3),
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
let aH = new _$$H6({
  name: 'ProjectChannelStateGroupShim',
  ..._$$aj,
  livegraphView: StateGroupUpdatesForProject,
  livegraphArgs: e => ({
    projectId: e
  }),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    let i = [];
    let n = [];
    let r = [];
    for (let a of t.project?.stateGroupUpdates || []) {
      let t = a.stateGroup?.nodeId || a.nodeId || '';
      let s = atomStoreManager.get(qp);
      let o = _$$l6(a.stateGroup?.libraryKey ?? a.libraryKey ?? '');
      let l = e.getState().library.publishedByLibraryKey.stateGroups;
      let d = a.stateGroup?.file?.teamId || s[o]?.team_id || '';
      let c = aM(l?.[d]?.[o]?.[t]?.updated_at || '');
      if (a.updateType === 'delete' && !c || !a?.stateGroup && a.updateType !== 'delete' || a?.stateGroup && c >= aM(a.stateGroup?.updatedAt?.toISOString() || '')) continue;
      let u = aG(a);
      a.updateType === 'post' ? i.push(u) : a.updateType === 'put' ? n.push(u) : a.updateType === 'delete' && r.push(u);
    }
    let a = [];
    i.length && a.push({
      type: 'state_group',
      method: 'post',
      state_group: i
    });
    n.length && a.push({
      type: 'state_group',
      method: 'put',
      state_group: n
    });
    r.length && a.push({
      type: 'state_group',
      method: 'delete',
      state_group: r
    });
    return a;
  }(n.store, e),
  periodicallyResubscribe: !1,
  delaySubscribeMs: () => randomBetween(500, 2e3),
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
let aW = new _$$H6({
  name: 'FileChannelStateGroupShim',
  ...w7,
  livegraphView: StateGroupUpdatesForFile,
  livegraphArgs: e => ({
    fileKey: e
  }),
  convertLivegraphMessage: (e, t, {
    fileKey: i
  }, n) => function (e, t, i) {
    let n = [];
    let r = [];
    let a = [];
    let s = [];
    for (let o of (i.file || s.push({
      type: 'file',
      method: 'delete',
      idForDeletion: t
    }), i.file?.stateGroupUpdates || [])) {
      let t = o.stateGroup?.nodeId || o.nodeId || '';
      let i = atomStoreManager.get(qp);
      let s = _$$l6(o.stateGroup?.libraryKey ?? o.libraryKey ?? '');
      let l = e.getState().library.publishedByLibraryKey.stateGroups;
      let d = o.stateGroup?.file?.teamId || i[s]?.team_id || '';
      let c = aM(l?.[d]?.[s]?.[t]?.updated_at || '');
      if (o.updateType === 'delete' && !c || !o?.stateGroup && o.updateType !== 'delete' || o?.stateGroup && c >= aM(o.stateGroup?.updatedAt?.toISOString() || '')) continue;
      let u = aG(o);
      o.updateType === 'post' ? n.push(u) : o.updateType === 'put' ? r.push(u) : o.updateType === 'delete' && a.push(u);
    }
    n.length && s.push({
      type: 'state_group',
      method: 'post',
      state_group: n
    });
    r.length && s.push({
      type: 'state_group',
      method: 'put',
      state_group: r
    });
    a.length && s.push({
      type: 'state_group',
      method: 'delete',
      state_group: a
    });
    return s;
  }(n.store, i, e),
  periodicallyResubscribe: !1,
  delaySubscribeMs: () => randomBetween(500, 2e3),
  darkReadEnabled: ({
    store: e
  }) => e.getState().selectedView.view === 'fullscreen',
  fullReadEnabled: () => !0
});
function aZ(e, t) {
  if (t.font_file) {
    switch (t.method) {
      case 'post':
      case 'put':
        fullscreenValue.isReady() && Fonts && Fonts.addToFontList({
          list: [createFontMetadata(t.font_file)],
          localizedToUnlocalized: [],
          renames: {
            family: {},
            style: {}
          }
        });
        e.dispatch(_$$X3.put({
          font: createFontMetadata(t.font_file)
        }));
        break;
      case 'delete':
        e.dispatch(_$$X3.del({
          font: createFontMetadata(t.font_file)
        }));
    }
  }
}
function aX(e, t) {
  let i = [];
  for (let n of t) {
    let t = e.getState().fonts[n.family];
    let r = {
      id: Number(n.id),
      updated_at: n.updatedAt.toISOString(),
      org_id: n.orgId ? Number(n.orgId) : void 0,
      team_id: n.teamId ? Number(n.teamId) : void 0,
      sha1: n.sha1,
      postscript_name: n.postscriptName,
      family: n.family,
      style: n.style,
      weight: n.weight,
      italic: n.italic,
      stretch: n.stretch,
      version: n.version ?? void 0,
      sample_url: n.sampleUrl ?? void 0,
      preview_url: n.previewUrl ?? void 0,
      variation_axes: n.variationAxes ? n.variationAxes : void 0,
      variation_instances: n.variationInstances ? n.variationInstances : void 0
    };
    t && r.version && t[r.version] && t[r.version].updatedAt && t[r.version].updatedAt >= n.updatedAt || (t ? i.push({
      method: 'put',
      type: 'font_file',
      font_file: r
    }) : n.deletedAt ? i.push({
      method: 'delete',
      type: 'font_file',
      font_file: r
    }) : i.push({
      method: 'post',
      type: 'font_file',
      font_file: r
    }));
  }
  return i;
}
let aQ = new _$$H6({
  name: 'FontFileForTeamShim',
  ...fJ,
  livegraphView: FontFileForTeamView,
  livegraphArgs: (e, t) => ({
    teamId: e ?? null,
    updatedAtTimestamp: t
  }),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    if (!t.team || !t.team.fontFileUpdateForTeam) return [];
    let i = getResourceDataOrFallback(t.team.fontFileUpdateForTeam);
    return i ? aX(e, i) : [];
  }(n.store, e),
  periodicallyResubscribe: !0,
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
let aJ = new _$$H6({
  name: 'FontFileForOrgShim',
  ..._$$uf,
  livegraphView: FontFileForOrgView,
  livegraphArgs: (e, t) => ({
    orgId: e ?? null,
    updatedAtTimestamp: t
  }),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    if (!t.org || !t.org.fontFileUpdateForOrg) return [];
    let i = getResourceDataOrFallback(t.org.fontFileUpdateForOrg);
    return i ? aX(e, i) : [];
  }(n.store, e),
  periodicallyResubscribe: !0,
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
let a1 = new _$$H6({
  name: 'OrgShim',
  ..._$$uf,
  livegraphView: OrgByIdForRealtimeShim,
  livegraphArgs: e => ({
    orgId: e
  }),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    return t.org?.id ? [{
      method: 'put',
      type: 'org',
      org: {
        id: t.org.id,
        plugins_whitelist_enforced: !!t.org.pluginsWhitelistEnforced,
        widgets_whitelist_enforced: !!t.org.widgetsWhitelistEnforced,
        are_custom_templates_allowed: t.org.customTemplatesAllowed === 'ALLOW'
      }
    }] : [];
  }(n.store, e),
  periodicallyResubscribe: !1,
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
let a2 = new _$$H6({
  name: 'OrgUserShim',
  ..._$$uu,
  livegraphView: OrgUsersForRealtimeShim,
  livegraphArgs: e => ({}),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    if (e.getState().user?.id !== t.currentUser.id) return [];
    let i = [];
    let n = e.getState().orgUsersByOrgId;
    let r = new Map();
    for (let e of t.currentUser.allBaseOrgUsers || []) {
      let t = n[e.orgId]?.[e.userId];
      t ? t.updated_at < e.updatedAt?.toISOString() && i.push({
        method: 'put',
        type: 'org_user',
        org_user: a5(e)
      }) : e || i.push({
        method: 'post',
        type: 'org_user',
        org_user: a5(e)
      });
      r.set(e.id, e);
    }
    for (let e in n) {
      let a = n[e][t.currentUser.id];
      a && (r.has(a.id) || i.push({
        method: 'delete',
        type: 'org_user',
        org_user: a
      }));
    }
    return i;
  }(n.store, e),
  periodicallyResubscribe: !1,
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
function a5(e) {
  return {
    id: e.id,
    org_id: e.orgId,
    user_id: e.userId,
    permission: e.permission,
    drafts_folder_id: e.draftsFolderId || '',
    created_at: e.createdAt.toISOString(),
    updated_at: e.updatedAt.toISOString(),
    account_type: e.accountType,
    account_type_changed_at: e.accountTypeChangedAt?.toISOString() || '',
    description: e.description,
    user_state_changed_at: e.userStateChangedAt?.toISOString() || '',
    agreed_to_community_tos_at: e.agreedToCommunityTosAt?.toISOString() || null,
    show_figjam_user_onboarding: e.showFigjamUserOnboarding,
    has_shown_figjam_admin_onboarding: e.hasShownFigjamAdminOnboarding,
    has_shown_figjam_admin_launch_onboarding: e.hasShownFigjamAdminLaunchOnboarding,
    dev_mode_paid_status: e.devModePaidStatus,
    design_paid_status: e.designPaidStatus,
    whiteboard_paid_status: e.whiteboardPaidStatus
  };
}
function a3(e, t) {
  switch (t.method) {
    case 'post':
    case 'put':
    case 'delete':
      let i = t.plugin ? t.plugin : t.widget;
      i && i.id && e.dispatch(Qi({
        publishedPlugins: [i],
        src: 'realtime'
      }));
  }
}
let a6 = new _$$H6({
  name: 'PluginShim',
  ..._$$uf,
  livegraphView: PluginUpdatesForOrg,
  livegraphArgs: (e, t) => ({
    orgId: e ?? null,
    updatedAtTimestamp: t
  }),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    if (!t.org) return [];
    let i = [];
    let n = e.getState().publishedPlugins;
    for (let e of t.org.pluginUpdates || []) {
      let r = n[e.id];
      let a = a7(e, t.org.name);
      a && (r ? i.push({
        method: 'put',
        type: 'plugin',
        plugin: a
      }) : r || i.push({
        method: 'post',
        type: 'plugin',
        plugin: a
      }));
    }
    return i;
  }(n.store, e),
  periodicallyResubscribe: !0,
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
function a7(e, t) {
  let i;
  return e.currentPluginVersion && e.creator ? {
    id: e.id,
    install_count: e.installCount,
    view_count: e.viewCount,
    like_count: e.likeCount,
    comment_count: e.commentCount,
    category_id: e.categoryId,
    roles: {
      is_public: e.publishingStatus === FPublicationStatusType.APPROVED_PUBLIC,
      org: {
        id: e.orgId,
        name: t
      }
    },
    versions: {
      [e.currentPluginVersion.id]: {
        code_path: e.currentPluginVersion.codePath,
        cover_image_path: e.currentPluginVersion.coverImagePath,
        created_at: e.currentPluginVersion.createdAt.toISOString(),
        creator_policy: e.currentPluginVersion.creatorPolicy,
        current_plugin_version_id: e.currentPluginVersion.id,
        description: e.currentPluginVersion.description,
        icon_path: e.currentPluginVersion.iconPath,
        id: e.currentPluginVersion.id,
        is_private: !!e.orgId,
        manifest: JSON.parse(e.currentPluginVersion.manifest || '{}'),
        name: e.currentPluginVersion.name,
        playground_file_version_id: e.currentPluginVersion.playgroundFileVersionId,
        plugin_id: e.currentPluginVersion.pluginId,
        redirect_code_url: `/community/plugin/${e.currentPluginVersion.pluginId}/code`,
        redirect_cover_image_url: `/community/thumbnail?resource_id=${e.currentPluginVersion.pluginId}&resource_type=plugin`,
        redirect_icon_url: `/community/icon?resource_id=${e.currentPluginVersion.pluginId}&resource_type=plugin`,
        redirect_snapshot_url: e.currentPluginVersion.snapshotPath ? `/community/snapshot?resource_id=${e.currentPluginVersion.pluginId}&resource_type=widget` : null,
        release_notes: e.currentPluginVersion.releaseNotes,
        resource_staging_signature: e.currentPluginVersion.resourceStagingSignature,
        snapshot_path: e.currentPluginVersion.snapshotPath,
        tagline: e.currentPluginVersion.tagline,
        user_id: e.currentPluginVersion.userId,
        version: e.currentPluginVersion.version
      }
    },
    org_id: e.orgId,
    created_at: e.createdAt.toISOString() || '',
    redirect_thumbnail_url: e.redirectThumbnailUrl,
    unique_run_count: e.uniqueRunCount,
    editor_type: (i = e.pluginEditorType) === 1 ? 'whiteboard' : i === 2 ? 'design_and_whiteboard' : 'design',
    unpublished_at: e.unpublishedAt,
    current_plugin_version_id: e.currentPluginVersionId,
    support_contact: e.supportContact,
    comments_setting: e.commentsSetting || Ni.ENABLED,
    hide_related_content_by_others: e.hideRelatedContentByOthers,
    publishing_status: e.publishingStatus,
    is_widget: e.isWidget,
    badges: e.badges?.map(e => e.badgeType) || [],
    thumbnail_url: e.thumbnailUrl,
    creator: {
      id: e.creator.id || '',
      handle: e.creator.handle || '',
      img_url: e.creator.imgUrl || ''
    },
    publisher: {
      badges: e.profile.badges?.map(e => e.badgeType) || [],
      current_user_is_followed: e.profile.currentUserIsFollowed || null,
      current_user_is_following: e.profile.currentUserIsFollowing || null,
      entity_type: e.profile.entityType,
      follower_count: e.profile.followerCount,
      following_count: e.profile.followingCount,
      id: e.profile.id,
      img_url: e.profile.user?.imgUrl || '',
      img_urls: {
        '120_120': e.profile.user?.imgUrl || void 0,
        ...e.profile.user?.profile?.images
      },
      location: e.profile.location,
      name: e.profile.name,
      primary_user_id: e.profile.primaryUserId || '',
      profile_handle: e.profile.profileHandle,
      public_at: e.profile.publicAt?.toISOString() || '',
      realtime_token: ''
    },
    community_publishers: {
      accepted: e.communityPublishers?.map(e => ({
        badges: e.profile?.badges?.map(e => e.badgeType) || [],
        current_user_is_followed: e.profile?.currentUserIsFollowed || null,
        current_user_is_following: e.profile?.currentUserIsFollowing || null,
        entity_type: e.profile?.entityType,
        follower_count: e.profile?.followerCount,
        following_count: e.profile?.followingCount,
        id: e.profile?.id,
        img_url: e.profile?.user?.imgUrl || '',
        img_urls: {
          '120_120': e.profile?.user?.imgUrl || void 0,
          ...e.profile?.user?.profile?.images
        },
        location: e.profile?.location,
        name: e.profile?.name,
        primary_user_id: e.profile?.primaryUserId || '',
        profile_handle: e.profile?.profileHandle,
        public_at: e.profile?.publicAt?.toISOString() || '',
        realtime_token: ''
      })) || []
    },
    blocked_at: e.blockedAt?.toISOString() || null,
    realtime_token: ''
  } : null;
}
function se(e, t) {
  return e.updatedAt > new Date(t.updated_at) || e.hasFileLinkPassword !== t.has_file_link_password || e.hasProtoLinkPassword !== t.has_proto_link_password || e.hasActiveBranches !== t.has_active_branches;
}
function st(e, t) {
  let i = t.file_repo;
  if (i) {
    switch (t.method) {
      case 'post':
        e.dispatch(_$$bE5({
          repo: i
        }));
        break;
      case 'put':
        let n = e.getState();
        let r = n.repos[i.id];
        if (!r) break;
        let a = r.default_file_key;
        let s = n.fileByKey[a];
        if (i.trashed_at) {
          let t = {
            [i.id]: {
              repo: i,
              main_file: s
            }
          };
          e.dispatch(_$$hT2({
            reposById: t,
            userInitiated: !1
          }));
          break;
        }
        e.dispatch(_$$yJ7({
          repo: i
        }));
    }
  }
}
let si = new _$$H6({
  name: 'FileRepoChannelRepoShim',
  ...Ut,
  livegraphView: RepoByIdForRealtimeShim,
  livegraphArgs: e => ({
    repoId: e
  }),
  convertLivegraphMessage: (e, t, {
    repoId: i
  }, n) => function (e, t, i) {
    let n = [];
    let r = e.getState().repos[i];
    t.repo && (r ? se(t.repo, r) && n.push({
      method: 'put',
      type: 'file_repo',
      file_repo: ss(t.repo)
    }) : n.push({
      method: 'post',
      type: 'file_repo',
      file_repo: ss(t.repo)
    }));
    return n;
  }(n.store, e, i),
  periodicallyResubscribe: !1,
  delaySubscribeMs: () => getFeatureFlags().livegraph_splay_realtime_views ? randomBetween(500, 9e4) : randomBetween(500, 2e3),
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
let sn = new _$$H6({
  name: 'FileChannelRepoShim',
  ...w7,
  livegraphView: ReposForFile,
  livegraphArgs: e => ({
    fileKey: e
  }),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    let i = [];
    if (t.file?.repo) {
      let n = e.getState().repos[t.file.repo.id];
      n ? se(t.file.repo, n) && i.push({
        method: 'put',
        type: 'file_repo',
        file_repo: ss(t.file.repo)
      }) : i.push({
        method: 'post',
        type: 'file_repo',
        file_repo: ss(t.file.repo)
      });
    }
    return i;
  }(n.store, e),
  periodicallyResubscribe: !1,
  delaySubscribeMs: () => getFeatureFlags().livegraph_splay_realtime_views ? randomBetween(500, 9e4) : randomBetween(500, 2e3),
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
let sr = new _$$H6({
  name: 'TeamChannelRepoShim',
  ...fJ,
  livegraphView: ReposForTeam,
  livegraphArgs: (e, t) => ({
    teamId: e,
    updatedAtTimestamp: t
  }),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    let i = [];
    for (let n of t.team?.repoUpdates || []) {
      let t = e.getState().repos[n.id];
      t ? se(n, t) && i.push({
        method: 'put',
        type: 'file_repo',
        file_repo: ss(n)
      }) : i.push({
        method: 'post',
        type: 'file_repo',
        file_repo: ss(n)
      });
    }
    return i;
  }(n.store, e),
  periodicallyResubscribe: !0,
  delaySubscribeMs: () => randomBetween(500, 2e3),
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
let sa = new _$$H6({
  name: 'FolderChannelRepoShim',
  ..._$$aj,
  livegraphView: ReposForProject,
  livegraphArgs: (e, t) => ({
    folderId: e,
    updatedAtTimestamp: t
  }),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    let i = [];
    for (let n of t.project?.repoUpdates || []) {
      let t = e.getState().repos[n.id];
      t ? se(n, t) && i.push({
        method: 'put',
        type: 'file_repo',
        file_repo: ss(n)
      }) : i.push({
        method: 'post',
        type: 'file_repo',
        file_repo: ss(n)
      });
    }
    return i;
  }(n.store, e),
  periodicallyResubscribe: !0,
  delaySubscribeMs: () => randomBetween(500, 2e3),
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
function ss(e) {
  return {
    id: e.id,
    name: e.name,
    folder_id: e.folderId,
    default_file_key: e.defaultFileKey,
    deleted_at: e.deletedAt?.toISOString() || null,
    trashed_at: e.trashedAt?.toISOString() || null,
    created_at: e.createdAt?.toISOString(),
    updated_at: e.updatedAt?.toISOString(),
    team_id: e.teamId,
    link_access: e.linkAccess,
    proto_link_access: e.protoLinkAccess,
    org_audience: e.orgAudience,
    org_browsable: e.orgBrowsable,
    parent_org_id: e.parentOrgId,
    has_file_link_password: e.hasFileLinkPassword,
    has_proto_link_password: e.hasProtoLinkPassword,
    has_active_branches: e.hasActiveBranches
  };
}
function so(e) {
  return e.pending ? `pending-${e.id}` : e.user_id;
}
function sl(e) {
  return (t = {}, i) => {
    if (!(i.payload && typeof i.payload == 'object' && 'role' in i.payload)) return t;
    let n = i.payload && i.payload.role;
    if (n && n.resource_type === e) {
      let e = n.resource_id_or_key;
      let r = function (e = {}, t) {
        if (_$$bE4.matches(t) || _$$yJ5.matches(t)) {
          let i;
          let n = t.payload.role;
          let r = {
            ...e
          };
          for (let t in e) {
            let a = e[t];
            if (n.pending && a.pending && n.user.email && n.user.email === a.user.email || !n.pending && a.pending && n.id === a.id) {
              i = r[t].created_at;
              delete r[t];
              break;
            }
          }
          r[so(n)] = {
            ...e[so(n)],
            ...n,
            ...(i ? {
              created_at: i
            } : null)
          };
          return r;
        }
        if (_$$yH3.matches(t)) {
          let i = t.payload.role;
          if (so(i) in e) {
            let t = {
              ...e
            };
            delete t[so(i)];
            return t;
          }
        }
        return e;
      }(t[e] || {}, i);
      if (r !== t[e]) {
        let i = {
          ...t
        };
        Object.keys(r).length === 0 ? delete i[e] : i[e] = r;
        return i;
      }
    }
    return t;
  };
}
let sd = HY({
  byFileKey: sl(FResourceCategoryType.FILE),
  byRepoId: sl(FResourceCategoryType.FILE_REPO),
  byFolderId: sl(FResourceCategoryType.FOLDER),
  byTeamId: sl(FResourceCategoryType.TEAM)
});
function sc(e, t, i) {
  let n = t.filter(e => e.resource_type === i);
  let r = n.map(e => e.resource_id_or_key).reduce((t, i) => {
    let n = e[i] || {};
    t[i] = {
      ...n
    };
    return t;
  }, {
    ...e
  });
  return n.reduce((e, t) => (e[t.resource_id_or_key][so(t)] = t, e), {
    ...e,
    ...r
  });
}
function su(e, t) {
  let i = {
    ...e
  };
  i.byFileKey = sc(e.byFileKey, t, FResourceCategoryType.FILE);
  i.byRepoId = sc(e.byRepoId, t, FResourceCategoryType.FILE_REPO);
  i.byFolderId = sc(e.byFolderId, t, FResourceCategoryType.FOLDER);
  i.byTeamId = sc(e.byTeamId, t, FResourceCategoryType.TEAM);
  return i;
}
let sm = new _$$H6({
  name: 'TeamsShim',
  ...fJ,
  livegraphView: TeamByIdForRealtimeShim,
  livegraphArgs: e => ({
    teamId: e
  }),
  convertLivegraphMessage: (e, t, {
    teamId: i
  }, n) => function (e, t, i) {
    let n = [];
    let r = t.getState().teams[e];
    i.team && (r ? (!r.updated_at || i.team.updatedAt > new Date(r.updated_at) || r.restrictions_list !== i.team.restrictionsList) && n.push({
      method: 'put',
      type: 'team',
      team: sg(i.team)
    }) : n.push({
      method: 'post',
      type: 'team',
      team: sg(i.team)
    }));
    return n;
  }(i, n.store, e),
  periodicallyResubscribe: !1,
  delaySubscribeMs: () => randomBetween(500, 2e3),
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
let sh = {};
function sg(e) {
  let t;
  let i = {
    created_at: e.createdAt.toISOString(),
    id: e.id,
    img_url: e.imgUrl || void 0,
    org_id: e.orgId,
    org_team: !!e.orgId,
    name: e.name,
    description: e.description || '',
    editors: e.editorsCount || 0,
    projects: e.projectsCount || 0,
    restrictions_list: e.restrictionsList,
    subscription: e.subscription !== null ? e.subscription : null,
    subscription_raw: e._subscriptionRaw || null,
    org_access: e.orgAccess,
    stripe_customer_id: e.stripeCustomerId,
    student_team_at: e.studentTeamAt?.toISOString() || null,
    student_team_state: e.studentTeamState,
    student_autoverifying_team_at: e.studentAutoverifyingTeamAt?.toISOString() || null,
    student_team: !!e.studentTeamAt,
    pro_team: !e.orgId && e.subscription !== null && e.subscription !== FPaymentHealthStatusType.INCOMPLETE,
    updated_at: e.updatedAt?.toISOString() || null,
    deleted_at: e.deletedAt?.toISOString() || null,
    license_group_id: e.licenseGroupId,
    workspace_id: e.workspaceId,
    default_permission: e.defaultPermission,
    vat_gst_id: e.vatGstId || void 0,
    tax_id_verification_status: e.taxIdVerificationStatus || void 0,
    ai_features_disabled: !!e.aiFeaturesDisabledAt,
    sharing_audience_control: e.sharingAudienceControlComputed,
    org_browsable: e.orgBrowsable,
    hidden: e.hidden,
    legal_name: e.legalName || null,
    starter_team: e.isStarterTeam,
    design_default_paid_status: e.designDefaultPaidStatus,
    whiteboard_default_paid_status: e.whiteboardDefaultPaidStatus
  };
  if (t = e.id, !(Object.keys(sh).length >= 5) && (void 0 === sh[t] && (sh[t] = 5), sh[t]--, sh[t] > 0)) {
    let t = {
      ..._$$w2.toSinatra(e),
      org_team: !!e.orgId,
      pro_team: !e.orgId && e.subscription !== null && e.subscription !== FPaymentHealthStatusType.INCOMPLETE
    };
    setupShadowReadWithConfig({
      label: adminPermissionConfig.convertTeam.sinatraTeam,
      oldValue: i,
      newValue: t,
      enableFullRead: getFeatureFlags().team_shim_converter_lg,
      contextArgs: {
        teamId: e.id
      }
    });
  }
  return i;
}
let sf = new _$$H6({
  name: 'MeChannelRolesShim',
  ..._$$uu,
  livegraphView: RoleUpdatesForUser,
  livegraphArgs: (e, t) => ({
    updatedAtTimestamp: t
  }),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    let i = [];
    let {
      roles,
      user
    } = e.getState();
    let a = user?.id;
    if (!a) return i;
    let {
      fileRoleUpdates,
      repoRoleUpdates,
      projectRoleUpdates,
      teamRoleUpdates,
      roleDeletionUpdates
    } = t.currentUser;
    for (let e of fileRoleUpdates) {
      let t = e.resourceId;
      let r = roles.byFileKey[t]?.[a];
      r ? sy(r, e) && i.push({
        method: 'put',
        type: 'role',
        role: sb(e),
        role_data: {
          file: e.file ? W$(e.file) : void 0
        }
      }) : i.push({
        method: 'post',
        type: 'role',
        role: sb(e),
        role_data: {
          file: e.file ? W$(e.file) : void 0
        }
      });
    }
    for (let e of repoRoleUpdates) {
      let t = e.resourceId;
      let r = roles.byRepoId[t]?.[a];
      r ? sy(r, e) && i.push({
        method: 'put',
        type: 'role',
        role: sb(e),
        role_data: void 0
      }) : i.push({
        method: 'post',
        type: 'role',
        role: sb(e),
        role_data: void 0
      });
    }
    for (let e of projectRoleUpdates) {
      let t = e.resourceId;
      let r = roles.byFolderId[t]?.[a];
      r ? sy(r, e) && i.push({
        method: 'put',
        type: 'role',
        role: sb(e),
        role_data: {
          folder: e.project ? Y7(e.project) : void 0
        }
      }) : i.push({
        method: 'post',
        type: 'role',
        role: sb(e),
        role_data: {
          folder: e.project ? Y7(e.project) : void 0
        }
      });
    }
    for (let e of teamRoleUpdates) {
      let t = e.resourceId;
      let r = roles.byTeamId[t]?.[a];
      r ? sy(r, e) && i.push({
        method: 'put',
        type: 'role',
        role: sb(e),
        role_data: {
          team: e.team ? sg(e.team) : void 0
        }
      }) : i.push({
        method: 'post',
        type: 'role',
        role: sb(e),
        role_data: {
          team: e.team ? sg(e.team) : void 0
        }
      });
    }
    for (let e of roleDeletionUpdates) {
      let t;
      let r = e.roleId;
      let a = e.resourceId || '';
      let s = e.resourceType;
      if (!s) continue;
      let o = Object.values(roles.byFileKey[a] || {});
      let l = Object.values(roles.byRepoId[a] || {});
      let d = Object.values(roles.byFolderId[a] || {});
      let c = Object.values(roles.byTeamId[a] || {});
      (t = s === FResourceCategoryType.FILE ? o.find(e => e.id === r) : s === FResourceCategoryType.FILE_REPO ? l.find(e => e.id === r) : s === FResourceCategoryType.FOLDER ? d.find(e => e.id === r) : c.find(e => e.id === r)) && (i.push({
        method: 'delete',
        type: 'role',
        role: t
      }), i = i.filter(e => !((e.method === 'post' || e.method === 'put') && e.role.id === t.id)));
    }
    return i;
  }(n.store, e),
  periodicallyResubscribe: !0,
  delaySubscribeMs: () => randomBetween(500, 2e3),
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
let s_ = new _$$H6({
  name: 'TeamChannelRolesShim',
  ...fJ,
  livegraphView: RoleUpdatesForTeam,
  livegraphArgs: (e, t) => ({
    teamId: e,
    updatedAtTimestamp: t
  }),
  convertLivegraphMessage: (e, t, {
    teamId: i
  }, n) => function (e, t, i, n) {
    let r = [];
    let {
      roles,
      user
    } = t.getState();
    let o = i.team;
    if (o || n.length !== 0) {
      if (!o) return r;
    } else {
      let t = user?.id;
      let i = roles.byTeamId[e]?.[t || ''];
      i && r.push({
        method: 'delete',
        type: 'role',
        role: i
      });
      return r;
    }
    for (let t of o.roleUpdates || []) {
      let i = t.pending ? `pending-${t.id}` : t.userId || '';
      let n = roles.byTeamId[e]?.[i];
      n ? sy(n, t) && r.push({
        method: 'put',
        type: 'role',
        role: sb(t),
        role_data: {
          team: sg(o)
        }
      }) : r.push({
        method: 'post',
        type: 'role',
        role: sb(t),
        role_data: {
          team: sg(o)
        }
      });
    }
    let l = Object.values(roles.byTeamId[e] || {});
    for (let e of o.roleDeletionUpdates) {
      let t = l.find(t => t.id === e.roleId);
      e.op === 'delete' && t && (r.push({
        method: 'delete',
        type: 'role',
        role: t
      }), r = r.filter(e => !((e.method === 'post' || e.method === 'put') && e.role.id === t.id)));
    }
    return r;
  }(i, n.store, e, t),
  periodicallyResubscribe: !0,
  delaySubscribeMs: () => randomBetween(500, 2e3),
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
function sA(e, t) {
  if (t.role) {
    switch (t.method) {
      case 'put':
        {
          let i = t.role;
          if (e.dispatch(_$$yJ5({
            role: i
          })), t.role_data) {
            let i = e.getState();
            let n = t.role_data.folder;
            !n || n.deleted_at || i.folders[n.id] || e.dispatch(_$$bE(n));
            let r = t.role_data.file;
            !r || r.deleted_at || i.fileByKey[r.key] || getFeatureFlags().dse_lk_realtime_role_filter && !r.library_key || e.dispatch(bE({
              file: r
            }));
          }
          break;
        }
      case 'post':
        {
          let i = t.role;
          e.dispatch(_$$bE4({
            role: t.role
          }));
          let n = e.getState().user;
          if (t.role_data && n && n.id === i.user_id) {
            let i = e.getState();
            let n = t.role_data.team;
            !n || n.deleted_at || i.teams[n.id] || (e.dispatch(_$$bE2({
              team: n
            })), e.dispatch(Yx({})));
            let r = t.role_data.folder;
            !r || r.deleted_at || i.folders[r.id] || r.org_id && !r.team_id && r.path !== '' || e.dispatch(_$$bE(r));
            let a = t.role_data.file;
            a && !a.deleted_at && (!getFeatureFlags().dse_lk_realtime_role_filter || a.library_key) && e.dispatch(bE({
              file: a
            }));
          }
          break;
        }
      case 'delete':
        e.dispatch(_$$yH3({
          role: t.role
        }));
    }
  }
}
function sy(e, t) {
  return e.updated_at < t.updatedAt?.toISOString();
}
function sb(e) {
  let t;
  return e.pending || !e.user ? {
    id: e.id,
    level: e.level,
    resource_id_or_key: e.resourceId,
    resource_type: e.resourceType,
    created_at: e.createdAt.toISOString(),
    updated_at: e.updatedAt.toISOString(),
    org_user: void 0,
    team_user: void 0,
    user_id: null,
    pending: !0,
    user: {
      id: null,
      email: e.pendingEmail || ''
    }
  } : {
    id: e.id,
    level: e.level,
    resource_id_or_key: e.resourceId,
    resource_type: e.resourceType,
    created_at: e.createdAt.toISOString(),
    updated_at: e.updatedAt.toISOString(),
    org_user: void 0,
    team_user: void 0,
    user_id: e.userId,
    pending: !1,
    user: {
      id: (t = e.user).id,
      name: t.name || void 0,
      handle: t.handle,
      img_url: t.imgUrl,
      email: t.email || void 0,
      description: t.description,
      org_id: void 0
    }
  };
}
class sI {
  constructor() {
    this.lgMessageBuffer = [];
    this.realtimeMessageBuffer = [];
    this.MAX_BUFFER_LENGTH = 20;
  }
  processMessage(e, t, i, n) {
    let r = {
      objects: e,
      method: i || null,
      type: n || null
    };
    let a = t.origin === 'handleFayeMessage' ? this.lgMessageBuffer : this.realtimeMessageBuffer;
    let [s, o] = this.findMatchInBuffer(a, r);
    if (s === -1) {
      this.addToBuffer(r, t.origin);
    } else {
      delete o?.enqueueTime;
      let e = t.origin === 'handleFayeMessage' ? r : o;
      let i = t.origin === 'handleFayeMessage' ? o : r;
      this.logMatchToFigment(e, i);
      a.splice(s, 1);
    }
  }
  logMatchToFigment(e, t) {
    let i = diff(e, t);
    trackEventAnalytics('lg_realtime_shim_messages', {
      realtimeMsg: JSON.stringify(e.objects),
      lgMsg: JSON.stringify(t.objects),
      diff: JSON.stringify(i),
      method: e?.method,
      type: e?.type
    });
  }
  logSingleMessageToFigment(e = null, t = null) {
    let i = e?.enqueueTime || t?.enqueueTime;
    trackEventAnalytics('lg_realtime_shim_messages', {
      realtimeMsg: e ? JSON.stringify(e.objects) : '',
      lgMsg: t ? JSON.stringify(t.objects) : '',
      diff: 'No match found',
      enqueueTime: i?.toISOString() || 'No enqueue time found',
      method: e?.method,
      type: e?.type
    });
  }
  findMatchInBuffer(e, t) {
    for (let [i, n] of Array.from(e.entries()).reverse()) {
      if (this.matchMessage(n, t)) return [i, n];
    }
    return [-1, null];
  }
  matchMessage(e, t) {
    if (e.type && t.type && e.type === t.type && e.method && t.method && e.method === t.method) {
      for (let i of Object.keys(e.objects)) {
        if (String(e.objects[i].id) === String(t.objects[i].id)) return !0;
      }
    }
    return !1;
  }
  addToBuffer(e, t) {
    if (e.enqueueTime = new Date(), t === 'handleFayeMessage') {
      if (this.realtimeMessageBuffer.push(e), this.realtimeMessageBuffer.length > this.MAX_BUFFER_LENGTH) {
        let e = this.realtimeMessageBuffer.shift();
        this.logSingleMessageToFigment(e);
      }
    } else if (this.lgMessageBuffer.push(e), this.lgMessageBuffer.length > this.MAX_BUFFER_LENGTH) {
      let e = this.lgMessageBuffer.shift();
      this.logSingleMessageToFigment(null, e);
    }
  }
  logMessages(e, t) {}
}
let sS = new _$$H6({
  name: 'TeamRoleRequestShim',
  ..._$$uu,
  livegraphView: UserTeamRoleRequestView,
  livegraphArgs: (e, t) => ({
    updatedAtTimestamp: t
  }),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    if (!t.currentUser.teamRoleRequestUpdates) return [];
    let i = _$$oA2(t.currentUser.teamRoleRequestUpdates);
    if (!i) return [];
    let n = [];
    for (let t of i) {
      let i = {
        id: t.id,
        requester_user_id: t.requesterUserId,
        level: t.level,
        team_id: t.teamId,
        status: t.status,
        updated_at: t.updatedAt
      };
      let r = e.getState().teamRoleRequests[t.teamId];
      if (!r || !r.updated_at || !i.updated_at || !(r.updated_at >= i.updated_at)) {
        switch (i.status) {
          case 'approved':
          case 'denied':
            n.push({
              method: 'put',
              team_role_request: i
            });
            break;
          case 'pending':
            n.push({
              method: 'post',
              team_role_request: i
            });
            break;
          case 'withdrawn':
            n.push({
              method: 'delete',
              team_role_request: i
            });
        }
      }
    }
    return n;
  }(n.store, e),
  periodicallyResubscribe: !0,
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
let sC = createActionCreator('USER_EDU_GRACE_PERIOD_RECEIVE_UPDATE');
let sT = e => ({
  user_id: e.userId,
  team_id: e.teamId,
  created_at: e.createdAt.toISOString(),
  updated_at: e.updatedAt.toISOString()
});
let sk = new _$$H6({
  name: 'UserEduGracePeriodShim',
  ..._$$uu,
  livegraphView: EduGracePeriodsForUser,
  livegraphArgs: (e, t, i) => ({
    updatedAtTimestamp: t
  }),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    if (!t.currentUser.eduGracePeriodUpdate) return [];
    let i = [];
    let n = getResourceDataOrFallback(t.currentUser.eduGracePeriodUpdate);
    if (!n) return [];
    let r = sT(n);
    let a = e.getState().userEduGracePeriods[n.teamId];
    (!a || a.updatedAt && a.updatedAt.toISOString() < n.updatedAt.toISOString()) && i.push({
      method: 'post',
      type: 'user_edu_grace_period',
      user_edu_grace_period: r
    });
    return i;
  }(n.store, e),
  periodicallyResubscribe: !0,
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
let sN = '';
let sP = new _$$H6({
  name: 'UserShim',
  ..._$$uu,
  livegraphView: UserForRealtimeShim,
  livegraphArgs: e => ({}),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    let i;
    if (e.getState().user?.id !== t.currentUser.id) return [];
    let n = JSON.stringify(t);
    if (sN === n) return [];
    sN = n;
    let r = [];
    r.push({
      method: 'put',
      type: 'user',
      user: (i = t.currentUser, {
        created_at: i.createdAt?.toISOString(),
        email: i.email || '',
        email_validated_at: i.emailValidatedAt?.toISOString() || null,
        student_validated_at: i.studentValidatedAt?.toISOString() || null,
        handle: i.handle,
        id: i.id,
        img_url: i.imgUrl,
        name: i.name || '',
        two_factor_app_enabled: i.twoFactorAppEnabled,
        phone_number: i.phoneNumber || null,
        profile: {
          job_title: i.profile?.jobTitle,
          usage_purpose: i.profile?.usagePurpose || void 0,
          images: i.profile?.images?.status === ResourceStatus.Loaded && i.profile.images.data ? i.profile.images.data : void 0
        },
        dev_tokens: i.developerTokens?.map(e => ({
          id: e.id,
          description: e.description,
          last_used: e.lastUsed?.toISOString() || null,
          scopes: e.scope?.split(',') || [],
          expires_at: e.expiresAt?.toISOString()
        })) || [],
        utc_offset: i.utcOffset || null,
        google_sso_only: i.googleSsoOnly,
        saml_sso_only: i.samlSsoOnly,
        sharing_restricted: i.sharingRestricted,
        description: i.description,
        plugin_publishing_blocked_at: i.pluginPublishingBlockedAt?.toISOString() || null,
        community_profile_id: i.communityProfile?.publicAt ? i.communityProfile?.id : null,
        community_profile_handle: i.communityProfile?.publicAt ? i.communityProfile?.profileHandle : null,
        community_beta_at: i.communityBetaAt?.toISOString() || null,
        community_commenting_blocked_at: i.communityCommentingBlockedAt?.toISOString() || null,
        community_blocked_at: i.communityBlockedAt?.toISOString() || null,
        cmty_buyer_tos_accepted_at: i.userMonetizationMetadata?.cmtyBuyerTosAcceptedAt?.toISOString() || null,
        stripe_account_status: function (e) {
          if (!e) return StatusType.NONE;
          switch (e) {
            case FFeatureAdoptionStatusType.NONE:
              return StatusType.NONE;
            case FFeatureAdoptionStatusType.ACCEPTED:
              return StatusType.ACCEPTED;
            case FFeatureAdoptionStatusType.DISABLED:
              return StatusType.DISABLED;
            case FFeatureAdoptionStatusType.ENABLED:
              return StatusType.ENABLED;
            case FFeatureAdoptionStatusType.STARTED_ONBOARDING:
              return StatusType.STARTED_ONBOARDING;
          }
        }(i.userMonetizationMetadata?.stripeAccountStatus),
        can_sell_on_community: i.canSellOnCommunity || null,
        has_passed_visual_compliance: i.hasPassedVisualCompliance,
        external_restricted_org_id: i.externalRestrictedOrgId,
        community_purchasing_blocked_at: i.userMonetizationMetadata?.communityPurchasingBlockedAt?.toISOString() || null,
        experiment_assignments: i.experimentAssignments?.map(e => ({
          experiment_id: e.experimentId,
          treatment_id: e.treatmentId
        })) || []
      })
    });
    return r;
  }(n.store, e),
  periodicallyResubscribe: !1,
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
let sO = new _$$H6({
  name: 'UserTeamFlagShim',
  ..._$$uu,
  livegraphView: UserTeamFlagsForRealtimeShim,
  livegraphArgs: e => ({}),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    if (!t.currentUser || !t.currentUser.userTeamFlags) return [];
    let i = t.currentUser.userTeamFlags;
    let n = e.getState().userTeamFlags;
    let r = [];
    let a = new Map();
    for (let e of i) {
      let t = {
        id: e.id,
        user_id: e.userId,
        team_id: e.teamId,
        name: e.name,
        created_at: e.createdAt.toISOString(),
        updated_at: e.updatedAt.toISOString()
      };
      let i = n[t.team_id];
      let s = i?.[t.name];
      a.has(t.team_id) ? a.get(t.team_id).add(t.name) : a.set(t.team_id, new Set([t.name]));
      s && s.updatedAt >= e.updatedAt || r.push({
        method: 'post',
        type: 'user_team_flag',
        user_team_flag: t
      });
    }
    for (let [e, t] of Object.entries(n)) {
      let i = a.get(e);
      for (let n of Object.keys(t)) {
        i && i.has(n) || r.push({
          method: 'delete',
          type: 'user_team_flag',
          user_team_flag: {
            name: n,
            team_id: e
          }
        });
      }
    }
    return r;
  }(n.store, e),
  periodicallyResubscribe: !1,
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
let sL = new Map();
let sF = new _$$H6({
  name: 'WhitelistedPluginShim',
  ..._$$uf,
  livegraphView: WhitelistedPluginsForOrg,
  livegraphArgs: e => ({
    orgId: e
  }),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    if (!t.org?.id) return [];
    let i = sL.get(t.org.id);
    if (!i) {
      for (let e of (sL.set(t.org.id, new Set()), t.org.whitelistedPlugins || [])) sL.get(t.org.id)?.add(e);
      return [];
    }
    let n = [];
    let r = new Set();
    for (let e of t.org.whitelistedPlugins || []) {
      r.add(e.id);
      i.has(e) || n.push({
        method: 'post',
        type: 'whitelisted_plugin',
        whitelisted_plugin: {
          org_id: e.orgId,
          plugin_id: e.pluginId,
          is_widget: getResourceDataOrFallback(e.isWidget) || !1,
          plugin_version_id: null,
          allowlist_group_type: e.allowlistGroupType === 'Org' ? 'Org' : 'Workspace',
          allowlist_group_id: e.allowlistGroupId
        }
      });
    }
    for (let e of i) {
      r.has(e.id) || n.push({
        method: 'delete',
        type: 'whitelisted_plugin',
        whitelisted_plugin: {
          org_id: e.orgId,
          plugin_id: e.pluginId,
          is_widget: getResourceDataOrFallback(e.isWidget) || !1,
          plugin_version_id: null,
          allowlist_group_type: e.allowlistGroupType === 'Org' ? 'Org' : 'Workspace',
          allowlist_group_id: e.allowlistGroupId
        }
      });
    }
    for (let e of (sL.set(t.org.id, new Set()), t.org.whitelistedPlugins || [])) sL.get(t.org.id)?.add(e);
    return n;
  }(n.store, e),
  periodicallyResubscribe: !1,
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
let sM = new _$$H6({
  name: 'WidgetShim',
  ..._$$uf,
  livegraphView: WidgetUpdatesForOrg,
  livegraphArgs: (e, t) => ({
    orgId: e ?? null,
    updatedAtTimestamp: t
  }),
  convertLivegraphMessage: (e, t, i, n) => function (e, t) {
    if (!t.org) return [];
    let i = [];
    let n = e.getState().publishedWidgets;
    for (let e of getResourceDataOrFallback(t.org.widgetUpdates) || []) {
      let r = n[e.id];
      let a = function (e, t) {
        let i = a7(e, t);
        return i ? {
          ...i,
          is_widget: !0,
          current_user_first_ran_at: e.currentUserFirstRanAt || void 0,
          profile_install_status: e.profileInstallStatus || void 0
        } : null;
      }(e, t.org.name);
      a && (r ? i.push({
        method: 'put',
        type: 'widget',
        widget: a
      }) : r || i.push({
        method: 'post',
        type: 'widget',
        widget: a
      }));
    }
    return i;
  }(n.store, e),
  periodicallyResubscribe: !0,
  darkReadEnabled: () => !0,
  fullReadEnabled: () => !0
});
let sj = new class {
  constructor() {
    this.genericShims = [];
    this.shimLogger = new sI();
  }
  registerShim(e, t) {
    e.setOnRealtimeMessage((e, i) => {
      e.forEach(e => {
        t(i, e, !0);
      });
    });
    e.setLogger(this.shimLogger);
    this.genericShims.push(e);
  }
  handleRealtimeSubscription(e, t) {
    if (getFeatureFlags().skip_lg_shim_in_bell_view && t.getState().selectedView?.view === 'feed') return;
    let i = WB();
    if (!i) {
      console.error('LiveGraph client is null in realtime shim');
      return;
    }
    this.genericShims.forEach(n => n.handleSubscription(e, t, i));
  }
  handleRealtimeUnsubscription(e) {
    if (!WB()) {
      console.error('LiveGraph client is null in realtime shim');
      return;
    }
    this.genericShims.forEach(t => t.handleUnsubscription(e));
  }
  reset() {
    this.genericShims.forEach(e => e.resetForTests());
  }
}();
sj.registerShim(sf, sA);
sj.registerShim(s_, sA);
sj.registerShim(qG, _$$Dk);
sj.registerShim(qS, _$$Dk);
sj.registerShim(O9, _$$Dk);
sj.registerShim(XG, _$$Dk);
sj.registerShim(_O, vf);
sj.registerShim(z$, vf);
sj.registerShim(aj, aF);
sj.registerShim(aU, aF);
sj.registerShim(aB, aF);
sj.registerShim(az, aF);
sj.registerShim(aH, aF);
sj.registerShim(aW, aF);
sj.registerShim(sm, (e, t) => {
  if (t.team) {
    switch (t.method) {
      case 'post':
        e.dispatch(_$$bE2({
          team: t.team
        }));
        break;
      case 'put':
        t.team.deleted_at ? e.dispatch(_$$yH({
          team: t.team,
          userInitiated: !1
        })) : e.dispatch(_$$yJ3({
          team: t.team,
          userInitiated: !1
        }));
        break;
      case 'delete':
        e.dispatch(_$$yH({
          team: t.team,
          userInitiated: !1
        }));
    }
  }
});
sj.registerShim(sP, (e, t) => {
  t.user && t.method === 'put' && e.dispatch(_$$yJ({
    user: t.user,
    userInitiated: !1
  }));
});
sj.registerShim(si, st);
sj.registerShim(sn, st);
sj.registerShim(sr, st);
sj.registerShim(sa, st);
sj.registerShim(a1, (e, t) => {
  if (t.method === 'put' && t.org) {
    let {
      currentUserOrgId,
      orgById
    } = e.getState();
    currentUserOrgId && orgById[currentUserOrgId] && e.dispatch(_$$yJ6({
      org: {
        ...orgById[currentUserOrgId],
        plugins_whitelist_enforced: t.org.plugins_whitelist_enforced,
        widgets_whitelist_enforced: t.org.widgets_whitelist_enforced,
        are_custom_templates_allowed: t.org.are_custom_templates_allowed
      }
    }));
  }
});
sj.registerShim(a2, (e, t) => {
  if (!t.org_user) return;
  let i = e.getState();
  let n = i.currentUserOrgId;
  let r = t.org_user;
  if (t.method === 'delete' && r.org_id === n && r.user_id === i.user?.id) {
    let t = null;
    if (i.hasPersonalSpace) {
      t = null;
    } else {
      for (let e of Object.keys(i.orgById)) {
        if (e !== n) {
          t = e;
          break;
        }
      }
    }
    e.dispatch(_l({
      workspace: {
        orgId: t,
        userId: i.user.id
      },
      view: void 0
    }));
  } else {
    t.method === 'delete' ? e.dispatch(IJ({
      params: {
        org_user_ids: [r.id]
      },
      orgId: r.org_id,
      userInitiated: !1
    })) : t.method === 'put' || t.method === 'post' ? e.dispatch(_$$yJ4({
      orgUser: r,
      userInitiated: !1
    })) : e.dispatch(_l({
      workspace: {
        orgId: n,
        userId: r.user_id
      },
      view: i.selectedView
    }));
  }
});
sj.registerShim(a6, a3);
sj.registerShim(sM, a3);
sj.registerShim(sF, (e, t) => {
  if (!t.whitelisted_plugin) return;
  let i = !!t.whitelisted_plugin.is_widget;
  if (t.whitelisted_plugin.allowlist_group_type === 'Workspace') {
    let i = t.whitelisted_plugin.allowlist_group_id;
    let n = e.getState().openFile;
    if (i !== n?.team?.workspaceId) return;
  }
  switch (t.method) {
    case 'post':
    case 'put':
      e.dispatch(i ? EE({
        pluginId: t.whitelisted_plugin.plugin_id
      }) : Rg({
        pluginId: t.whitelisted_plugin.plugin_id
      }));
      break;
    case 'delete':
      e.dispatch(i ? Yw({
        pluginId: t.whitelisted_plugin.plugin_id
      }) : XV({
        pluginId: t.whitelisted_plugin.plugin_id
      }));
  }
});
sj.registerShim(sk, (e, t) => {
  t.user_edu_grace_period && e.dispatch(sC({
    team_id: t.user_edu_grace_period.team_id,
    created_at: t.user_edu_grace_period.created_at,
    updated_at: t.user_edu_grace_period.updated_at
  }));
});
sj.registerShim(sS, (e, t) => {
  if (t.team_role_request) {
    switch (t.method) {
      case 'post':
      case 'put':
      case 'delete':
        e.dispatch(_$$b4({
          teamRoleRequests: [t.team_role_request]
        }));
    }
  }
});
sj.registerShim(aQ, aZ);
sj.registerShim(aJ, aZ);
sj.registerShim(aT, (e, t) => {
  if (t.community_resource_payment) {
    switch (t.method) {
      case 'post':
      case 'put':
        e.dispatch(k3(t.community_resource_payment));
        break;
      case 'delete':
        e.dispatch(_$$Sp(t.community_resource_payment.monetized_resource_metadata_id));
    }
  }
});
sj.registerShim(sO, (e, t) => {
  if (t.user_team_flag) {
    switch (t.method) {
      case 'post':
        e.dispatch(_$$hV3({
          name: t.user_team_flag.name,
          team_id: t.user_team_flag.team_id,
          created_at: t.user_team_flag.created_at,
          updated_at: t.user_team_flag.updated_at
        }));
        break;
      case 'delete':
        e.dispatch(z9({
          name: t.user_team_flag.name,
          team_id: t.user_team_flag.team_id
        }));
    }
  }
});
let sU = !1;
async function sB(e, t) {
  if (await Lb(), trackEventAnalytics('file-browser-hydrate', {
    location: 'realtime.tokenExpired'
  }), sU) {
    return;
  }
  sU = !0;
  let i = Math.floor(3e5 * Math.random());
  getInitialOptions().cluster_name === 'test' && (i = 0);
  av(i).then(() => _X(e, 10)).then(e => {
    t.dispatch(Qv({
      ...e.data.meta,
      fromRealtime: !0
    }));
  }).$$finally(() => {
    sU = !1;
  });
}
function sV(e) {
  let t = e.getState();
  let i = t.user;
  let n = [];
  let r = new Set();
  let a = new Set();
  let s = new Set();
  let o = e => {
    let t = EM(e);
    n.push(t);
  };
  let l = t.roles;
  let d = i && i.id;
  for (let e in l.byFileKey) {
    if (d && d in l.byFileKey[e]) {
      let i = t.fileByKey[e];
      if (i && i.team_id && !hasViewerRoleAccessOnTeam(i.team_id, t)) {
        let e = t.teams[i.team_id];
        e && e.realtime_token && (o(e.realtime_token), a.add(e.id));
      }
      if (i && i.team_id) {
        let e = t.teams[i.team_id];
        e && e.realtime_token && s.add(e.id);
      }
    }
  }
  for (let e in l.byFolderId) {
    let i = d && l.byFolderId[e][d];
    let n = t.folders[e];
    if (n && i && i.realtime_token && (r.add(i.resource_id_or_key), o(i.realtime_token)), n && n.team_id && !hasViewerRoleAccessOnTeam(n.team_id, t)) {
      let e = t.teams[n.team_id];
      e && e.realtime_token && (a.add(e.id), o(e.realtime_token));
    }
    if (n && n.team_id) {
      let e = t.teams[n.team_id];
      e && e.realtime_token && s.add(e.id);
    }
  }
  for (let e in l.byRepoId) {
    let t = d && l.byRepoId[e][d];
    t && t.realtime_token && o(t.realtime_token);
  }
  for (let e in l.byTeamId) {
    let t = d && l.byTeamId[e][d];
    t && t.realtime_token && (a.add(t.resource_id_or_key), s.add(t.resource_id_or_key), o(t.realtime_token));
  }
  setupShadowRead({
    oldValue: Array.from(a).sort(),
    newValue: Array.from(s).sort(),
    label: adminPermissionConfig.RealtimeMiddleware.teamIdSet,
    maxReports: 3
  });
  let c = t.currentUserOrgId && t.orgById[t.currentUserOrgId];
  c && c.realtime_token && o(c.realtime_token);
  let u = t.authedUsers.byId;
  for (let e in u) {
    let t = u[e];
    t?.realtime_token_inactive && o(t.realtime_token_inactive);
  }
  let p = t.authedProfilesById;
  for (let e in p) {
    let t = p[e];
    t?.realtime_token && o(t.realtime_token);
  }
  e.dispatch(iZ(n));
  t.selectedView.view === 'fullscreen' && function (e, t, i) {
    let n = e.getState();
    let r = new Set();
    let a = atomStoreManager.get(qp);
    for (let e of [n.library.publishedByLibraryKey.components, n.library.publishedByLibraryKey.stateGroups]) {
      for (let [n, s] of Object.entries(e)) {
        if (!i.has(n)) {
          for (let e of Object.keys(s)) {
            let i = _$$l6(e);
            let n = a[i];
            !n || n.folder_id && t.has(n.folder_id) || r.add(i);
          }
        }
      }
    }
    if (r.size > 0) {
      for (let t of r) {
        let i = a[t];
        i && e.dispatch(i$(`/file-${i.key}`));
      }
      f2(Array.from(r), e.dispatch);
    }
  }(e, r, a);
}
function sG(e, t) {
  e.dispatch(iZ([t]));
}
let sz = (e, t) => {
  let i = e.getState();
  if (t.realtime_token == null) return;
  let n = EM(t.realtime_token);
  t.team_id && (getFeatureFlags().realtime_cleanup_viewer_role_access ? i.realtime.subscriptions[`/team-members-${t.team_id}`] : hasViewerRoleAccessOnTeam(t.team_id, i)) || t.folder_id && i.realtime.subscriptions[`/folder-${t.folder_id}`] || i.realtime.subscriptions[n.channel] || sG(e, n);
};
let sH = (e, t) => {
  let i = e.getState();
  let n = t.realtime_token;
  if (n == null) return;
  let r = EM(n);
  if (!i.realtime.subscriptions[r.channel]) {
    switch (t.resource_type) {
      case FResourceCategoryType.FILE:
        {
          let n = i.fileByKey[t.resource_id_or_key];
          n && sz(e, n);
          break;
        }
      case FResourceCategoryType.FOLDER:
        {
          sG(e, r);
          let n = i.folders[t.resource_id_or_key];
          if (n && n.team_id && !(getFeatureFlags().realtime_cleanup_viewer_role_access ? i.realtime.subscriptions[`/team-members-${n.team_id}`] : hasViewerRoleAccessOnTeam(n.team_id, i))) {
            let t = i.teams[n.team_id];
            t && t.realtime_token && sG(e, EM(t.realtime_token));
          }
          break;
        }
      case FResourceCategoryType.TEAM:
        sG(e, r);
    }
  }
};
let sW = getInitialOptions().disable_realtime ? e => e => e : e => t => function (i) {
  let n = t(i);
  if (_$$os.matches(i)) {
    let t = i.payload.users.filter(e => e.realtime_token_inactive).map(e => EM(e.realtime_token_inactive));
    e.dispatch(iZ(t));
  }
  if (Qv.matches(i)) {
    J1.setCallback(t => {
      !function (e, t) {
        if (sj.shimLogger.logMessages([t], {
          origin: 'handleFayeMessage'
        }), t.type === 'token_expired' && sB('realtime token expired', e), t.new_team_feed_post) {
          switch (t.method) {
            case 'put':
              e.dispatch(yu({
                orgId: t.new_team_feed_post.org_id,
                bellActive: !0
              }));
              break;
            case 'delete':
              e.dispatch(yu({
                orgId: t.new_team_feed_post.org_id,
                bellActive: !1
              }));
          }
        } else if (t.hub_file) {
          let i = t.hub_file;
          switch (t.method) {
            case 'post':
            case 'put':
              if (i && i.id) {
                let t = {
                  ...i
                };
                if (delete t.file_key, e.dispatch(Sb({
                  hubFiles: [t],
                  src: 'realtime'
                })), i.file_key) {
                  let n = i.unpublished_at ? _$$FO({
                    fileKey: i.file_key
                  }) : _$$Ri({
                    hubFileId: t.id,
                    fileKey: i.file_key
                  });
                  e.dispatch(n);
                }
              }
              break;
            case 'delete':
              i.file_key && e.dispatch(_$$FO({
                fileKey: i.file_key
              }));
          }
        }
      }(e, t);
    });
    J1.setOnSubscribeCallback(t => {
      getFeatureFlags().livegraph_shim_enabled && sj.handleRealtimeSubscription(t, e);
    });
    J1.setOnUnsubscribeCallback(e => {
      getFeatureFlags().livegraph_shim_enabled && sj.handleRealtimeUnsubscription(e);
    });
    i.payload.user_realtime_token && sG(e, EM(i.payload.user_realtime_token));
    sV(e);
    return;
  }
  if (_$$l8.matches(i)) {
    for (let t of i.payload) t && t.realtime_token && e.dispatch(i$(EM(t.realtime_token).channel));
  } else if (L1.matches(i)) {
    for (let t of i.payload) t && t.realtime_token && e.dispatch(i$(EM(t.realtime_token).channel));
  } else if (_$$sf.matches(i)) {
    if (i.payload.view === 'fullscreen' || i.payload.view === 'prototype') {
      let t = _$$U2(i.payload);
      t && !e.getState().realtime.subscriptions[`/file-${t}`] && _$$S2.getRealtimeToken({
        fileKey: t
      }).then(n => {
        let r = n?.data?.meta;
        r && r.realtime_token && (sG(e, EM(r.realtime_token)), i.payload.view === 'fullscreen' && desktopAPIInstance?.setRealtimeToken({
          realtimeToken: r.realtime_token,
          fileKey: t
        }));
        r && r.repo_realtime_token && sG(e, EM(r.repo_realtime_token));
      });
    }
    return;
  } else if (_$$uo.matches(i)) {
    if (i.payload.subscribeToRealtime) {
      for (let t of i.payload.files) sz(e, t);
    }
  } else if (PB.matches(i)) {
    let t = e.getState();
    let n = af()(t.fileByKey, e => _$$l6(e.library_key));
    for (let t of i.payload.libraryKeys) {
      let i = n[t];
      i && sz(e, i);
    }
  } else if (BK.matches(i)) {
    let t = e.getState();
    let n = af()(t.fileByKey, e => _$$l6(e.library_key))[i.payload.item.library_key];
    n && sz(e, n);
  } else if (_$$$h.matches(i)) {
    let t = e.getState();
    let n = af()(t.fileByKey, e => _$$l6(e.library_key))[i.payload.item.library_key];
    n && sz(e, n);
  } else if (Ee.matches(i)) {
    let t = e.getState();
    let n = af()(t.fileByKey, e => _$$l6(e.library_key))[i.payload.item.library_key];
    n && sz(e, n);
  } else if (_$$uo5.matches(i)) {
    let t = e.getState().user;
    for (let n of i.payload.roles) t != null && n.user_id === t.id && sH(e, n);
  } else if (_$$yJ5.matches(i) || _$$bE4.matches(i)) {
    let t = e.getState().user;
    let n = i.payload.role;
    t != null && n.user_id === t.id && sH(e, n);
  } else if (_$$yH3.matches(i)) {
    let t = e.getState().user;
    let r = i.payload.role;
    if (t && r.user_id === t.id) {
      if (r.resource_type === FResourceCategoryType.FILE && e.getState().openFile?.key === r.resource_id_or_key) return n;
      let t = r.realtime_token;
      t && e.dispatch(i$(EM(t).channel));
      sV(e);
    }
  } else if (iZ.matches(i)) {
    for (let e of i.payload) J1.subscribe(e);
  } else if (i$.matches(i)) {
    let e = i.payload;
    J1.unsubscribe(e);
  }
  return n;
};
let sK = e => t => function (i) {
  _$$sf.matches(i) && e.dispatch(Z8({
    selectedView: i.payload
  }));
  return t(i);
};
let sq = e => t => function (i) {
  if (_$$sf.matches(i)) {
    let n;
    let r;
    t(i);
    let a = e.getState();
    let s = getSelectedFile(a);
    if (s && (n = a.user, r = i.payload, n && r.view === 'fullscreen')) {
      let t = !!s.team_id && canViewTeam(s.team_id, a);
      YO(s, e, {
        shouldFetchTeamUsers: t
      });
      let i = getRepoById(s, a.repos);
      i && _$$sh(i, a.currentUserOrgId, e);
    } else if (a.selectedView.view === 'team') {
      let t = a.selectedView.teamId;
      if (canViewTeam(t, a)) {
        let i = a.teams[t];
        i && xN(i.id, e);
      }
    }
    return;
  }
  if (showModal.matches(i)) {
    let t = e.getState();
    if (i.payload.type === _$$W.type) {
      let n = t.folders[i.payload.data.folderId];
      if (n && _$$uA(n.id, e), n && n.team_id && n.team_id in t.roles.byTeamId) {
        let i = t.teams[n.team_id];
        i && xN(i.id, e);
      }
    }
  } else if (_$$yH3.matches(i)) {
    t(i);
    let n = e.getState();
    let r = i.payload.role;
    switch (r.resource_type) {
      case FResourceCategoryType.FOLDER:
        if (!canViewFolder_DEPRECATED(r.resource_id_or_key, n)) {
          for (let t of n.fileKeysByFolderId[r.resource_id_or_key] || []) {
            e.dispatch(_$$ru({
              fileKey: t
            }));
          }
        }
        break;
      case FResourceCategoryType.TEAM:
        if (!canViewTeam(r.resource_id_or_key, n)) {
          let t = n.teams[r.resource_id_or_key];
          t && e.dispatch(_$$yH({
            userInitiated: !1,
            team: t
          }));
        }
    }
  }
  return t(i);
};
let s6 = {
  parameters: {
    query: '',
    searchModelType: _$$uH.HUB_FILES,
    searchScope: _$$Rx.COMMUNITY,
    workspaceFilter: null,
    idpGroupFilter: null,
    planFilter: null,
    fileTypeFilter: _$$t7.ANY,
    facetFilters: null,
    sortState: {
      [_$$uH.PUBLIC_PROFILES]: {},
      [_$$uH.PUBLIC_PLUGINS]: {
        ..._$$xH2.defaultOptions.sortMode
      },
      [_$$uH.PRIVATE_PLUGINS]: {
        ..._$$xH.defaultOptions.sortMode
      },
      [_$$uH.HUB_FILES]: {
        ...xH.defaultOptions.sortMode
      },
      [_$$uH.FILES]: {
        ..._$$KJ.defaultOptions.sortMode
      },
      [_$$uH.PROJECTS]: {
        ...$T.defaultOptions.sortMode
      },
      [_$$uH.TEAMS]: {
        ..._$$Vx.defaultOptions.sortMode
      },
      [_$$uH.USERS]: {
        ...V0.defaultOptions.sortMode
      },
      [_$$uH.PUBLIC_WIDGETS]: {
        ..._$$nD.viewBarConfig.defaultOptions.sortMode
      },
      [_$$uH.PRIVATE_WIDGETS]: {
        ..._$$uB.viewBarConfig.defaultOptions.sortMode
      }
    }
  },
  responseSortState: null,
  responses: {
    [_$$uH.PUBLIC_PLUGINS]: null,
    [_$$uH.PRIVATE_PLUGINS]: null,
    [_$$uH.FILES]: null,
    [_$$uH.PROJECTS]: null,
    [_$$uH.TEAMS]: null,
    [_$$uH.USERS]: null,
    [_$$uH.HUB_FILES]: null,
    [_$$uH.PUBLIC_PROFILES]: null,
    [_$$uH.PUBLIC_WIDGETS]: null,
    [_$$uH.PRIVATE_WIDGETS]: null
  },
  responseCounts: {
    [_$$uH.PUBLIC_PLUGINS]: null,
    [_$$uH.PRIVATE_PLUGINS]: null,
    [_$$uH.FILES]: null,
    [_$$uH.PROJECTS]: null,
    [_$$uH.TEAMS]: null,
    [_$$uH.USERS]: null,
    [_$$uH.HUB_FILES]: null,
    [_$$uH.PUBLIC_PROFILES]: null,
    [_$$uH.PUBLIC_WIDGETS]: null,
    [_$$uH.PRIVATE_WIDGETS]: null
  },
  completedQueries: {
    [_$$uH.PUBLIC_PLUGINS]: '',
    [_$$uH.PRIVATE_PLUGINS]: '',
    [_$$uH.FILES]: '',
    [_$$uH.PROJECTS]: '',
    [_$$uH.TEAMS]: '',
    [_$$uH.USERS]: '',
    [_$$uH.PUBLIC_PROFILES]: '',
    [_$$uH.HUB_FILES]: '',
    [_$$uH.PUBLIC_WIDGETS]: '',
    [_$$uH.PRIVATE_WIDGETS]: ''
  },
  lastLoadedQuery: {
    sessionId: null,
    query: '',
    queryId: null
  },
  sessionId: null,
  queryCount: 0,
  queryId: null,
  isFocused: !1,
  searchScrollTop: 0,
  searchTypeBehavior: Rr.ALL_TYPES_BLOCKING,
  lastAckedQueryId: null,
  searchPreviewOrder: []
};
let s9 = 'sort-filter-prefs-v1';
let oe = {
  viewMode: XU.GRID,
  sort: {
    key: C0.NAME,
    dir: _$$ue.DESC
  },
  filters: {
    creator: _$$rJ.ANY,
    fileType: _$$t7.ANY,
    orgDeletedDrafts: _$$cT2.ALL
  }
};
let ot = {
  deletedFiles: {
    ...oe,
    filters: {
      ...oe.filters,
      creator: _$$rJ.SELF
    },
    sort: {
      ...oe.sort,
      key: C0.TRASHED_AT
    }
  },
  trashedFolders: {
    ...oe,
    sort: {
      ...oe.sort,
      key: C0.TRASHED_AT
    },
    filters: {
      ...oe.filters,
      role: Jh.CAN_BE_RESTORED_DELETED
    }
  },
  folders: {
    default: {
      ...oe,
      sort: {
        ...oe.sort,
        key: C0.TOUCHED_AT
      }
    },
    byId: Object.create(null)
  },
  search: {
    ...oe,
    sort: {
      ...oe.sort,
      key: C0.SEARCH_RELEVANCE
    }
  },
  user: {
    ...oe,
    sort: {
      ...oe.sort,
      key: C0.TOUCHED_AT
    }
  },
  sharedWithYou: {
    ...oe,
    filters: {
      ...oe.filters,
      sharedBy: ''
    },
    sort: {
      ...oe.sort,
      key: C0.SHARED_AT
    }
  },
  recentsAndSharing: {
    recents: {
      ...oe,
      sort: {
        ...oe.sort,
        key: C0.ACCESSED_AT
      }
    },
    sharedFiles: {
      ...oe,
      filters: {
        ...oe.filters,
        sharedBy: ''
      },
      sort: {
        ...oe.sort,
        key: C0.SHARED_AT
      }
    },
    sharedProjects: {
      ...oe,
      filters: {
        ...oe.filters,
        sharedBy: ''
      },
      sort: {
        ...oe.sort,
        key: C0.SHARED_AT
      }
    }
  },
  team: {
    ...oe,
    sort: {
      ...oe.sort,
      key: C0.TOUCHED_AT
    }
  }
};
function oi(e, t) {
  return void 0 === e || void 0 === t ? (e || t) ?? oe : {
    ...t,
    sort: {
      ...oe.sort,
      ...t.sort
    },
    filters: {
      ...oe.filters,
      ...t.filters
    }
  };
}
function on(e = ot, t) {
  if (Qv.matches(t)) {
    return function () {
      let e = localStorageRef != null ? localStorageRef.getItem(s9) : null;
      if (e) {
        return function (e) {
          try {
            let t = JSON.parse(e);
            let i = {
              deletedFiles: oi(ot.deletedFiles, t.deletedFiles),
              trashedFolders: oi(ot.trashedFolders, t.trashedFolders),
              folders: {
                default: oi(ot.folders.$$default, t.folders.$$default),
                byId: {}
              },
              search: oi(ot.search, t.search),
              user: oi(ot.user, t.user),
              sharedWithYou: oi(ot.sharedWithYou, t.sharedWithYou),
              recentsAndSharing: {
                recents: oi(ot.recentsAndSharing.recents, t.recentsAndSharing.recents),
                sharedFiles: oi(ot.recentsAndSharing.sharedFiles, t.recentsAndSharing.sharedFiles),
                sharedProjects: oi(ot.recentsAndSharing.sharedProjects, t.recentsAndSharing.sharedProjects)
              },
              team: oi(ot.team, t.team)
            };
            for (let e in t.folders.byId) i.folders.byId[e] = oi(ot.folders.$$default, t.folders.byId[e]);
            return i;
          } catch (e) {
            return null;
          }
        }(e);
      }
      let t = localStorageRef != null ? localStorageRef.getItem('persisted-sorting') : null;
      return t && function (e) {
        let t;
        function i(e) {
          let t = C0[C0[e]];
          if (void 0 !== e) {
            return {
              ...oe,
              sort: {
                ...oe.sort,
                key: t
              }
            };
          }
        }
        try {
          t = JSON.parse(e);
        } catch (e) {
          console.error(e);
          return null;
        }
        let n = {};
        t.folders && t.folders.byId && Object.keys(t.folders.byId).forEach(e => {
          n[e] = i(t.folders.byId[e]);
        });
        return {
          deletedFiles: i(t.deletedFiles) || ot.deletedFiles,
          trashedFolders: ot.trashedFolders,
          folders: {
            default: t.folders && t.folders.$$default && i(t.folders.$$default) || ot.folders.$$default,
            byId: n
          },
          search: i(t.searchResults) || ot.search,
          user: ot.user,
          sharedWithYou: ot.sharedWithYou,
          recentsAndSharing: ot.recentsAndSharing,
          team: ot.team
        };
      }(t) || null;
    }() || e;
  }
  if (JF.matches(t)) {
    let i = t.payload.selectedView;
    if (i.view === 'folder') {
      let n = {
        ...e.folders,
        byId: {
          ...e.folders.byId,
          [i.folderId]: t.payload.config
        }
      };
      let r = {
        ...e,
        folders: n
      };
      or(r);
      return r;
    }
    if (i.view === 'recentsAndSharing') {
      let i;
      switch (t.payload.tab) {
        case _$$G.RECENTLY_VIEWED:
          i = {
            ...e.recentsAndSharing,
            recents: t.payload.config
          };
          break;
        case _$$G.SHARED_FILES:
          i = {
            ...e.recentsAndSharing,
            sharedFiles: t.payload.config
          };
          break;
        case _$$G.SHARED_PROJECTS:
          i = {
            ...e.recentsAndSharing,
            sharedProjects: t.payload.config
          };
          break;
        default:
          return e;
      }
      let n = {
        ...e,
        recentsAndSharing: i
      };
      or(n);
      return n;
    }
    {
      let n = {
        ...e,
        [i.view]: t.payload.config
      };
      or(n);
      return n;
    }
  }
  if (Rz.matches(t) && t.payload.fileTypeFilter != null) {
    let i = {
      ...e,
      search: {
        ...e.search,
        filters: {
          ...e.search.filters,
          fileType: t.payload.fileTypeFilter ?? _$$t7.ANY
        }
      }
    };
    or(i);
    return i;
  }
  return e;
}
let or = e => {
  if (localStorageRef) {
    try {
      let t = JSON.stringify(e);
      localStorageRef.setItem(s9, t);
    } catch (e) {}
  }
};
let oa = !1;
let os = !1;
let oo = e => t => function (i) {
  if (_$$sf.matches(i)) {
    let n = e.getState().selectedView;
    let {
      view
    } = n;
    if (view === 'search' && i.payload.view !== 'search' && (e.dispatch(ky()), e.dispatch(_$$qv({
      sortState: s6.parameters.sortState
    })), e.dispatch(HI({})), e.dispatch(vK({})), e.dispatch(JF({
      selectedView: n,
      config: oe
    }))), view !== 'search' && i.payload.view === 'search') {
      e.dispatch(Dy({
        entryPoint: i.payload.entryPoint
      }));
      e.dispatch(_$$r8({
        entryPoint: i.payload.entryPoint
      }));
      let t = e.getState();
      let {
        query,
        searchModelType,
        searchScope,
        fileFilter
      } = jr(customHistory.location.search, t, i.payload);
      fileFilter && e.dispatch(Rz({
        fileTypeFilter: fileFilter
      }));
      t.search.parameters.facetFilters || (searchModelType === _$$uH.HUB_FILES || searchModelType === _$$uH.PUBLIC_PLUGINS || searchModelType === _$$uH.PUBLIC_PROFILES || searchModelType === _$$uH.PUBLIC_WIDGETS ? (atomStoreManager.set(R9, _$$uH.FILES), e.dispatch(Rz({
        facetFilters: {
          searchModelType: _$$uH.FILES
        }
      }))) : (atomStoreManager.set(R9, searchModelType), e.dispatch(Rz({
        facetFilters: {
          searchModelType
        }
      }))));
      query ? (atomStoreManager.set(Q8, query), e.dispatch(PI({
        searchModelType,
        query,
        searchScope,
        forceRefreshSearchResults: !0,
        debounce: !1,
        overrideIsFullResultsView: !0
      }))) : e.dispatch(_$$Ns({
        searchModelType,
        searchScope
      }));
    }
    t(i);
    oa && (trackEventAnalytics('Search Mode Closed', {
      anyResultsClicked: os
    }), oa = !1, os = !1);
    return;
  }
  if (HZ.matches(i)) {
    trackEventAnalytics('Search Result Clicked', {
      index: i.payload.index
    });
    os = !0;
  } else if (_$$KQ.matches(i)) {
    let n = e.getState().search;
    if (n.parameters.query !== i.payload.parameters.query) return t(i);
    let r = e.getState().search;
    t(i);
    n = e.getState().search;
    let a = e.getState().selectedView;
    let s = a.view === 'search';
    let {
      searchModelType,
      searchScope
    } = n.parameters;
    let d = [searchModelType, ..._$$L2(searchModelType, searchScope, s)];
    let c = d.every(e => n.completedQueries[e] === i.payload.parameters.query);
    let u = d.every(e => r.completedQueries[e] === i.payload.parameters.query);
    let p = a.view === 'desktopNewTab';
    (c && !u || p) && vj.Session.trackResult(n);
  }
  return t(i);
};
var ol = (e => (e.NOTIFICATION = 'notification', e.SUBSCRIPTION = 'subscription', e.LINK_UNFURL = 'link-unfurl', e))(ol || {});
let od = e => e => function (t) {
  if (_$$sf.matches(t)) {
    let e = new URLSearchParams(customHistory.location.search);
    let i = e.get('utm_source');
    if (i === 'notification') {
      let t = e.get('utm_medium');
      let i = e.get('utm_content');
      XHR.post('/api/user_notification/clicked', {
        notification_id: i,
        medium: t
      });
    } else if (i === 'subscription') {
      let i = 'file';
      t.payload.view === 'team' ? i = 'team' : t.payload.view === 'folder' && (i = 'project');
      let n = e.get('utm_content');
      XHR.post('/slack/subscription_clicked', {
        subscription_id: n,
        resource_type: i
      });
    } else if (i === 'link-unfurl') {
      let t = e.get('utm_medium');
      let i = e.get('utm_content');
      let n = e.get('utm_product_type');
      XHR.post('/integrations/file_link_clicked', {
        file_key: i,
        medium: t,
        product_type: n
      });
    }
  }
  return e(t);
};
function om() {
  return {
    [_$$F6.FILES]: {},
    [_$$F6.PINNED_FILES]: {},
    [_$$F6.PROTOTYPES]: {},
    [_$$F6.REPOS]: {},
    [_$$F6.PROJECTS]: {},
    [_$$F6.OFFLINE_FILES]: {}
  };
}
function oh(e) {
  return {
    [_$$F6.FILES]: {
      ...e[_$$F6.FILES]
    },
    [_$$F6.PINNED_FILES]: {
      ...e[_$$F6.PINNED_FILES]
    },
    [_$$F6.PROTOTYPES]: {
      ...e[_$$F6.PROTOTYPES]
    },
    [_$$F6.REPOS]: {
      ...e[_$$F6.REPOS]
    },
    [_$$F6.PROJECTS]: {
      ...e[_$$F6.PROJECTS]
    },
    [_$$F6.OFFLINE_FILES]: {
      ...e[_$$F6.OFFLINE_FILES]
    }
  };
}
function og(e, t) {
  if (!e) return om();
  if (_$$y$.matches(t)) {
    let i = oh(e);
    for (let e of t.payload.tiles) i[t.payload.type][Tf.getId(e)] = !0;
    t.payload.type === _$$F6.PINNED_FILES ? (i[_$$F6.FILES] = {}, i[_$$F6.PROTOTYPES] = {}, i[_$$F6.REPOS] = {}) : i[_$$F6.PINNED_FILES] = {};
    return i;
  }
  if (_$$PW.matches(t)) {
    let i = oh(e);
    for (let e of t.payload.keys) i[t.payload.type][e] = !0;
    t.payload.type === _$$F6.PINNED_FILES ? (i[_$$F6.FILES] = {}, i[_$$F6.PROTOTYPES] = {}, i[_$$F6.REPOS] = {}) : i[_$$F6.PINNED_FILES] = {};
    return i;
  }
  if (TK.matches(t)) {
    let i = oh(e);
    for (let e of t.payload.tileKeys) {
      delete i[_$$F6.FILES][e];
      delete i[_$$F6.PINNED_FILES][e];
      delete i[_$$F6.PROTOTYPES][e];
      delete i[_$$F6.REPOS][e];
      delete i[_$$F6.OFFLINE_FILES][e];
    }
    return i;
  }
  if (_$$an2.matches(t)) return om();
  if (P6.matches(t)) {
    let i = oh(e);
    for (let e in t.payload.fileKeys) {
      delete i[_$$F6.FILES][e];
      delete i[_$$F6.PINNED_FILES][e];
    }
    return i;
  }
  return e;
}
let of = e => t => function (i) {
  if (_$$sf.matches(i)) {
    let t = e.getState().selectedView;
    !(t.view === 'folder' && i.payload.view === 'folder' && t.folderId === i.payload.folderId || _$$K3(t) && _$$K3(i.payload)) && function (e) {
      let t = 0;
      if (e) {
        for (let i of Object.keys(e)) t += Object.keys(e[i]).length;
      }
      return t;
    }(e.getState().tileSelect) && e.dispatch(_$$an2());
  }
  return t(i);
};
let oA = e => t => function (i) {
  if (_$$os.matches(i)) {
    let t = e.getState().loadingState;
    if (!isIntegrationContext() && i.payload.orgs.length > 0) {
      let i = _$$au2.loadingKeyForPayload();
      Sc(t, i) && e.dispatch(_$$au2());
    }
  }
  return t(i);
};
let ob = e => t => function (i) {
  if (_$$sf.matches(i)) {
    let n = e.getState();
    let r = n.selectedView && _$$U2(n.selectedView);
    let a = t(i);
    let s = e.getState();
    (s.selectedView && _$$U2(s.selectedView)) !== r && e.dispatch(VERSION_HISTORY_RESET());
    return a;
  }
  return t(i);
};
let oE = class e {
  constructor() {
    this.visualBells = [];
  }
  static getInstance() {
    return isInteractionPathCheck() || getFalseValue() ? (this.instance == null && (this.instance = new e()), this.instance) : null;
  }
  add(e) {
    this.visualBells.push(e);
  }
  static clearHistory() {
    this.instance != null && (this.instance.visualBells = []);
  }
  expectAccessibleVisualBell(e, t = 1) {
    let i = this.visualBells.filter(e => !!e.role);
    let n = i.filter(t => {
      if (typeof e == 'string') return t.message?.toLocaleLowerCase() === e.toLocaleLowerCase();
      if (typeof e == 'object') return t.message?.match(e);
      throw new Error('message param should be string or RegExp object');
    });
    if (n.length !== t && n.length === 0) {
      let t = i.map(e => e.message);
      typeof e == 'string' ? expect(t).toContain(e) : expect(JSON.stringify(t)).toMatch(e);
    }
    expect(n.length).toBe(t);
  }
  getLatestBell() {
    return this.visualBells.length > 0 ? this.visualBells[this.visualBells.length - 1] : null;
  }
};
oE.instance = null;
let oS = {
  inFullScreenMode: !!document.fullscreenElement
};
let oC = {};
let oT = {};
let ok = {
  byId: {},
  orderedIds: []
};
let oR = HY({
  byId(e = ok.byId, t) {
    if (_$$os2.matches(t)) {
      let e = {};
      t.payload.users.forEach(t => {
        e[t.id] = t;
      });
      return e;
    }
    if (L_.matches(t)) {
      let i = t.payload;
      let {
        associated_users
      } = i;
      if (!associated_users) {
        return {
          ...e
        };
      }
      let r = associated_users.reduce((t, {
        user_id: n
      }) => n in e ? {
        ...t,
        [n]: {
          ...e[n],
          community_profile_handle: i.profile_handle,
          community_profile_id: i.id
        }
      } : t, {});
      return {
        ...e,
        ...r
      };
    }
    if (Nr.matches(t)) {
      let i = t.payload;
      let n = Object.keys(e).reduce((t, n) => {
        let r = e[n];
        return r.community_profile_handle === i ? {
          ...t,
          [n]: {
            ...r,
            community_profile_handle: void 0,
            community_profile_id: void 0
          }
        } : t;
      }, {});
      return {
        ...e,
        ...n
      };
    }
    if (_$$vv.matches(t)) {
      let i = t.payload.user.id;
      if (i in e) {
        let n = e[i];
        return {
          ...e,
          [i]: {
            ...n,
            ...t.payload.user
          }
        };
      }
    }
    return e;
  },
  orderedIds(e = ok.orderedIds, t) {
    return _$$os2.matches(t) ? t.payload.users.map(e => e.id) : e;
  }
});
let oO = {
  unclaimedFilesWithChangesInIDB: [],
  unclaimedFilesCreatedOffline: [],
  lastSnoozeTime: null,
  nextGarbageCollectionTimestamp: -1
};
let oj = {};
let oV = new Set();
let oG = HY({
  activeThread(e = null, t) {
    return _$$cL3.matches(t) || _$$js.matches(t) ? null : _$$Fm.matches(t) ? _$$L3(t.payload.threadId) || t.payload.threadId.startsWith('feed_post') && !_$$y5() ? e : {
      id: t.payload.threadId,
      source: t.payload.source
    } : $0.matches(t) ? {
      id: _$$hm2
    } : _$$yH4.matches(t) && t.payload.comment.id === e?.id ? null : e;
  },
  threads(e = {}, t) {
    if (_$$cL3.matches(t)) return {};
    if (_$$yH4.matches(t)) {
      if (t.payload.comment.id in e) {
        let {
          [t.payload.comment.id]: i,
          ...n
        } = e;
        return n;
      }
    } else if (k7.matches(t)) {
      return {
        ...e,
        [t.payload.threadId]: {
          ..._$$us(),
          ...e[t.payload.threadId],
          reply: {
            ...e[t.payload.threadId]?.reply,
            messageMeta: t.payload.messageMeta
          }
        }
      };
    } else if (QD.matches(t)) {
      let i = e[t.payload.threadId];
      if (t.payload.attachment && !t.payload.attachment.isUploading && !i?.reply.attachments?.[t.payload.attachment.id]) return e;
      if (t.payload.attachment && i) {
        return {
          ...e,
          [t.payload.threadId]: {
            ..._$$us(),
            ...e[t.payload.threadId],
            reply: {
              ...i.reply,
              attachments: {
                ...i.reply.attachments,
                [t.payload.attachmentId]: t.payload.attachment
              }
            }
          }
        };
      }
      {
        let {
          [t.payload.attachmentId]: n,
          ...r
        } = i?.reply.attachments ?? {};
        return {
          ...e,
          [t.payload.threadId]: {
            ..._$$us(),
            ...i,
            reply: {
              ...(i?.reply ?? {
                messageMeta: []
              }),
              attachments: r
            }
          }
        };
      }
    } else if (Jc.matches(t)) {
      return {
        ...e,
        [t.payload.threadId]: {
          ..._$$us(),
          ...e[t.payload.threadId],
          reply: t.payload.reply
        }
      };
    } else if (gi.matches(t)) {
      return {
        ...e,
        [t.payload.threadId]: {
          ..._$$us(),
          ...e[t.payload.threadId],
          state: _$$EB.BUSY
        }
      };
    } else if (_$$sQ.matches(t)) {
      let i = e[t.payload];
      if (i) {
        let n = 1 + (i.discardAttempts || 0);
        return {
          ...e,
          [t.payload]: {
            ...i,
            discardAttempts: n
          }
        };
      }
    } else if (q4.matches(t)) {
      return {
        ...e,
        [t.payload.threadId]: {
          ..._$$us(),
          ...e[t.payload.threadId],
          state: _$$EB.READY,
          ...(t.payload.resetStatusOnly ? {} : {
            reply: {
              messageMeta: [],
              attachments: {}
            }
          })
        }
      };
    }
    return e;
  },
  newComment(e = _$$GV, t) {
    if (_$$cL3.matches(t)) return _$$GV;
    if (Z5.matches(t)) {
      return {
        ...e,
        messageMeta: t.payload.messageMeta
      };
    }
    if (_$$nb.matches(t)) {
      if (t.payload.attachment && !t.payload.attachment.isUploading && !e.attachments[t.payload.attachment.id]) return e;
      if (t.payload.attachment) {
        return {
          ...e,
          attachments: {
            ...e.attachments,
            [t.payload.attachmentId]: t.payload.attachment
          }
        };
      }
      {
        let {
          [t.payload.attachmentId]: i,
          ...n
        } = e.attachments;
        return {
          ...e,
          attachments: n
        };
      }
    }
    if (_$$on2.matches(t)) {
      return {
        ...e,
        messageMeta: t.payload.messageMeta,
        attachments: t.payload.attachments
      };
    }
    if (_$$Q5.matches(t)) {
      return {
        ...e,
        anchorPosition: t.payload.anchorPosition
      };
    }
    if (F8.matches(t)) {
      return {
        ...e,
        selectionBoxAnchor: t.payload.selectionBoxAnchor
      };
    }
    if (_$$lI.matches(t)) {
      return {
        ...e,
        state: _$$EB.BUSY
      };
    } else if (zs.matches(t) && !t.payload.parentId && t.payload.pageId) {
      return {
        ...e,
        state: _$$EB.BUSY
      };
    } else if ($M.matches(t)) {
      return t.payload.resetStatusOnly ? {
        ...e,
        state: _$$EB.READY
      } : _$$GV;
    } else if (_$$PB2.matches(t)) {
      return {
        ...t.payload,
        state: _$$EB.READY
      };
    } else if (_$$TW.matches(t) && t.payload.commentId === _$$hm2) {
      return {
        ...e,
        state: _$$EB.READY
      };
    } else if (_$$xH3.matches(t)) {
      return {
        ...e,
        discardAttempt: e.discardAttempt + 1
      };
    }
    return e;
  },
  editingComment(e = null, t) {
    if (_$$cL3.matches(t) || _$$pD.matches(t) || _$$rW.matches(t)) return null;
    if (Df.matches(t)) {
      return {
        ...e,
        ...t.payload
      };
    }
    if (_$$uy.matches(t)) {
      if (t.payload.attachment && !t.payload.attachment.isUploading && !e?.attachmentUpdates?.attachments[t.payload.attachment.id]) return e;
      if (t.payload.attachment) {
        return {
          attachmentUpdates: {
            attachments: {
              ...(e?.attachmentUpdates?.attachments || {}),
              [t.payload.attachmentId]: t.payload.attachment
            },
            deleted: e?.attachmentUpdates?.deleted || []
          },
          messageMeta: e?.messageMeta || [],
          id: t.payload.id,
          key: t.payload.key
        };
      }
      {
        let {
          [t.payload.attachmentId]: i,
          ...n
        } = e?.attachmentUpdates?.attachments || {};
        return {
          attachmentUpdates: {
            attachments: n,
            deleted: [...(e?.attachmentUpdates?.deleted || []), t.payload.attachmentId]
          },
          messageMeta: e?.messageMeta || [],
          id: t.payload.id,
          key: t.payload.key
        };
      }
    }
    return e;
  },
  showOnlyParticipating(e = !1, t) {
    return _$$RO.matches(t) ? t.payload.showOnlyParticipating : e;
  },
  showResolved(e = !1, t) {
    return !_$$cL3.matches(t) && (_$$U5.matches(t) ? t.payload.showResolved : e);
  },
  emojiPicker(e = null, t) {
    return _$$cL3.matches(t) || _$$Fm.matches(t) || $0.matches(t) ? null : _$$RI.matches(t) ? t.payload.visible ? {
      ...t.payload
    } : null : e;
  },
  typeahead(e = null, t) {
    return _$$cL3.matches(t) || _$$Fm.matches(t) || $0.matches(t) ? null : We.matches(t) ? t.payload : e;
  },
  typeaheadPositionOffset(e = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 0,
    height: 0
  }, t) {
    return _$$cL3.matches(t) || _$$Fm.matches(t) || $0.matches(t) ? PK : _$$i3.matches(t) ? t.payload : e;
  },
  emphasizedPinIds(e = [], t) {
    return NJ.matches(t) ? e.concat([t.payload.threadId]) : Oo.matches(t) ? e.filter(e => e !== t.payload.threadId) : e;
  },
  hoveredPinIds(e = [], t) {
    return _$$wg.matches(t) ? e.concat([t.payload.threadId]) : RP.matches(t) ? e.filter(e => e !== t.payload.threadId) : e;
  },
  activeDragTarget(e = null, t) {
    return _$$uz.matches(t) ? t.payload : e;
  },
  savingCommentUuids(e = oV, t) {
    if (_$$li.matches(t)) return new Set(e).add(t.payload.commentUuid);
    if (wJ.matches(t)) {
      let i = new Set(e);
      i.$$delete(t.payload.commentUuid);
      return i;
    }
    return e;
  },
  lgPendingUuidToServerIdMap(e = oj, t) {
    if (_$$y4.matches(t)) {
      return {
        ...e,
        [t.payload.commentUuid]: t.payload.commentId
      };
    }
    if (_$$pI.matches(t)) {
      let i = {
        ...e
      };
      delete i[t.payload.commentUuid];
      return i;
    }
    return e;
  }
});
function oH(e) {
  return (t = {}, i) => {
    if (e.updateMetadata.matches(i)) {
      return {
        ...t,
        [i.payload.id]: {
          metadata: i.payload.metadata,
          status: _$$oH(t[i.payload.id])
        }
      };
    }
    if (e.clearMetadata.matches(i)) {
      let e = {
        ...t
      };
      e[i.payload.id] && delete e[i.payload.id].metadata;
      return e;
    }
    if (e.updateStatus.matches(i)) {
      let e = {
        ...t
      };
      e[i.payload.id] && (e[i.payload.id] = {
        ...e[i.payload.id],
        status: i.payload.status
      });
      return e;
    }
    if (e.clearMetadataAndStatus.matches(i)) {
      let e = {
        ...t
      };
      delete e[i.payload.id];
      return e;
    }
    return Qv.matches(i) ? {} : t;
  };
}
let oW = _$$Qv.ALL;
let oK = {};
let oY = {};
let oq = {
  [oW]: {
    feed: []
  }
};
let o$ = (e, t) => (e?.totalNumberOfComments || 0) + t;
let oZ = {};
let oX = {};
let oQ = HY({
  activeFeedType(e = oW, t) {
    return Zj.matches(t) ? t.payload : _F.matches(t) ? _$$Qv.ALL : e;
  },
  authorsById(e = oK, t) {
    if (_$$r6.matches(t)) {
      return {
        ...e,
        ...t.payload.authorsById
      };
    }
    if (_$$tG2.matches(t)) {
      let {
        comment
      } = t.payload;
      return {
        ...e,
        [comment.author.id]: comment.author
      };
    }
    if (_$$dv.matches(t)) {
      let i = t.payload;
      return {
        ...e,
        [i]: {
          ...e[i],
          current_user_is_following: !0
        }
      };
    }
    if (_$$eg.matches(t)) {
      let i = t.payload;
      return {
        ...e,
        [i]: {
          ...e[i],
          current_user_is_following: !1
        }
      };
    }
    if (_$$ig.matches(t)) {
      let {
        authorsById
      } = HR(t.payload.replies);
      return {
        ...e,
        ...authorsById
      };
    }
    if (LO.matches(t)) {
      let {
        blockedProfileId
      } = t.payload;
      return {
        ...e,
        [blockedProfileId]: {
          ...e[blockedProfileId],
          is_restricted_by_current_user: !0
        }
      };
    }
    if (qo.matches(t)) {
      let {
        blockedProfileId
      } = t.payload;
      return {
        ...e,
        [blockedProfileId]: {
          ...e[blockedProfileId],
          is_restricted_by_current_user: !1
        }
      };
    }
    return e;
  },
  commentsById(e = oY, t) {
    if (_$$r6.matches(t)) {
      return {
        ...e,
        ...t.payload.commentsById
      };
    }
    if (_$$tG2.matches(t)) {
      let {
        comment
      } = t.payload;
      let n = {
        ...e,
        [comment.id]: comment
      };
      if (comment.parent_id) {
        let e = n[comment.parent_id];
        n[comment.parent_id] = {
          ...e,
          last_replied_at: comment.created_at,
          reply_count: ('reply_count' in e && e.reply_count || 0) + 1
        };
      }
      return n;
    }
    if (_$$kE.matches(t)) {
      let {
        comment
      } = t.payload;
      return {
        ...e,
        [comment.id]: {
          ...e[comment.id],
          ...comment
        }
      };
    }
    if (_$$QA.matches(t) && t.payload.clientMeta) {
      let {
        commentId,
        clientMeta
      } = t.payload;
      return {
        ...e,
        [commentId]: {
          ...e[commentId],
          client_meta: clientMeta
        }
      };
    }
    if (_$$ig.matches(t)) {
      let {
        commentsById
      } = HR(t.payload.replies);
      return {
        ...e,
        ...commentsById
      };
    }
    if (HF.matches(t)) {
      let {
        commentId
      } = t.payload;
      return {
        ...e,
        [commentId]: {
          ...e[commentId],
          hidden_at: new Date().toString()
        }
      };
    }
    if (Zv.matches(t)) {
      let {
        comments
      } = t.payload;
      let n = {
        ...e
      };
      comments.forEach(e => {
        if (delete n[e.id], e.parent_id) {
          let t = n[e.parent_id];
          n[e.parent_id] = {
            ...t,
            reply_count: (t.reply_count || 1) - 1
          };
        }
      });
      return n;
    }
    return e;
  },
  feeds(e = oq, t) {
    if (_$$cO.matches(t)) return oq;
    if (_$$r6.matches(t)) {
      let i = e[t.payload.activeFeedType]?.feed || [];
      let n = t.payload.feed.filter(e => !i.includes(e));
      return {
        ...e,
        [t.payload.activeFeedType]: {
          feed: [...i, ...n],
          pagination: t.payload.pagination || e[t.payload.activeFeedType]?.pagination,
          totalNumberOfComments: t.payload.totalNumberOfComments || e[t.payload.activeFeedType]?.totalNumberOfComments
        }
      };
    }
    if (Zj.matches(t)) {
      return {
        ...e,
        [t.payload]: e[t.payload] || {
          feed: []
        }
      };
    }
    if (_$$tG2.matches(t)) {
      let {
        comment,
        isReply
      } = t.payload;
      if (!comment.parent_id || isReply) {
        let t = {
          ...e
        };
        Object.keys(t).forEach(e => {
          t[e] = {
            ...t[e],
            feed: [comment.id, ...(t[e]?.feed || [])],
            totalNumberOfComments: o$(t[e], 1)
          };
        });
        return t;
      }
    } else if (Zv.matches(t)) {
      let {
        comments
      } = t.payload;
      let n = {
        ...e
      };
      let r = comments.map(e => e.id);
      Object.keys(n).forEach(t => {
        let i = (n[t]?.feed || []).filter(e => !r.includes(e));
        let a = (e[t]?.feed || []).length - i.length;
        n[t] = {
          ...n[t],
          feed: i,
          totalNumberOfComments: o$(n[t], -a)
        };
      });
      return n;
    } else if (HF.matches(t)) {
      let {
        commentId
      } = t.payload;
      let n = {
        ...e
      };
      n[_$$Qv.ALL] = {
        ...n[_$$Qv.ALL],
        feed: (n[_$$Qv.ALL]?.feed || []).filter(e => e !== commentId),
        totalNumberOfComments: o$(n[_$$Qv.ALL], -1),
        pagination: n[_$$Qv.ALL]?.pagination?.selected_comment?.id === commentId ? {
          ...(n[_$$Qv.ALL]?.pagination || {}),
          selected_comment: void 0
        } : n[_$$Qv.ALL]?.pagination
      };
      return n;
    } else if (_F.matches(t)) {
      return {
        ...e,
        [_$$Qv.ALL]: {
          feed: []
        }
      };
    }
    return e;
  },
  id(e = null, t) {
    return gT.matches(t) ? t.payload.id : _$$tG2.matches(t) ? t.payload.resourceId : e;
  },
  replyInfoByParentId(e = oX, t) {
    if (_$$tG2.matches(t)) {
      let {
        comment
      } = t.payload;
      if (comment.parent_id) {
        return {
          ...e,
          [comment.parent_id]: {
            ...e[comment.parent_id],
            replyIds: [...(e[comment.parent_id]?.replyIds || []), comment.id],
            newReplyMessage: '',
            status: _$$EB.READY
          }
        };
      }
    } else if (Zv.matches(t)) {
      let {
        comments
      } = t.payload;
      let n = {
        ...e
      };
      comments.forEach(t => {
        if (t.parent_id) {
          let i = [...(e[t.parent_id]?.replyIds || [])].filter(e => e !== t.id);
          n[t.parent_id] = {
            ...e[t.parent_id],
            replyIds: i
          };
        }
      });
      return n;
    } else if (_$$ig.matches(t)) {
      let {
        feed
      } = HR(t.payload.replies);
      return {
        ...e,
        [t.payload.parentId]: {
          ...e[t.payload.parentId],
          replyIds: feed
        }
      };
    } else if (k7.matches(t)) {
      return {
        ...e,
        [t.payload.threadId]: {
          ...e[t.payload.threadId],
          newReplyMessage: t.payload.messageMeta?.[0]?.t || '',
          newReplyMessageMeta: t.payload.messageMeta
        }
      };
    } else if (zs.matches(t) && t.payload.parentId) {
      return {
        ...e,
        [t.payload.parentId]: {
          ...e[t.payload.parentId],
          status: _$$EB.BUSY
        }
      };
    } else if (_$$TW.matches(t) && t.payload.commentId !== _$$hm2) {
      return {
        ...e,
        [t.payload.commentId]: {
          ...e[t.payload.commentId],
          status: _$$EB.READY
        }
      };
    }
    return e;
  },
  selectedCommentId(e = null, t) {
    return _$$r6.matches(t) ? t.payload.selectedCommentId || e : _$$Fm.matches(t) ? t.payload.threadId : _$$cL3.matches(t) ? null : $0.matches(t) ? _$$hm2 : e;
  },
  type(e = null, t) {
    return gT.matches(t) ? t.payload.type : _$$tG2.matches(t) ? t.payload.resourceType : e;
  },
  showResolved(e = !1, t) {
    return _$$mH.matches(t) ? t.payload : e;
  },
  mentionedProfiles(e = oZ, t) {
    if (_$$r6.matches(t)) {
      return {
        ...e,
        ...t.payload.mentionedProfiles
      };
    }
    if (_$$cO.matches(t)) return oZ;
    if (Hx.matches(t)) {
      let i = {
        ...e
      };
      i[t.payload.id] = t.payload;
      return i;
    }
    return e;
  }
});
let o0 = HY({
  currentProfile(e = null, t) {
    if (_$$Oo.matches(t)) return t.payload;
    if (_$$cr2.matches(t)) return null;
    if (LO.matches(t) && t.payload.blockedProfileId === e?.id) {
      return {
        ...e,
        is_restricted_by_current_user: !0
      };
    }
    if (qo.matches(t) && t.payload.blockedProfileId === e?.id) {
      return {
        ...e,
        is_restricted_by_current_user: !1
      };
    }
    if (RS.matches(t)) {
      if (t.payload.followedProfileId === e?.id) {
        return {
          ...e,
          follower_count: e.follower_count + 1,
          current_user_is_following: !0
        };
      }
      if (t.payload.currentUserProfileId === e?.id) {
        return {
          ...e,
          following_count: e.following_count + 1
        };
      }
    }
    if (Rx.matches(t)) {
      if (t.payload.followedProfileId === e?.id) {
        return {
          ...e,
          follower_count: e.follower_count - 1,
          current_user_is_following: !1
        };
      }
      if (t.payload.currentUserProfileId === e?.id) {
        return {
          ...e,
          following_count: e.following_count - 1
        };
      }
    }
    return _$$yJ.matches(t) && e && t.payload.user.id === e.primary_user_id && t.payload.user.img_url ? {
      ...e,
      img_url: t.payload.user.img_url
    } : $I.matches(t) && e && t.payload.team.community_profile_id === e.id && t.payload.team.img_url ? {
      ...e,
      img_url: t.payload.team.img_url
    } : _$$yJ6.matches(t) && e && t.payload.org.community_profile_id === e.id && t.payload.org.img_url ? {
      ...e,
      img_url: t.payload.org.img_url
    } : e;
  },
  pageState(e = null, t) {
    return Ad.matches(t) ? {
      ...e,
      ...t.payload
    } : _$$cr2.matches(t) && e?.view === 'communityHub' && e.subView === 'handle' && e.handle === t.payload ? null : e;
  },
  comments: oQ,
  shelves(e = {}, t) {
    return _$$wJ.matches(t) ? {
      ...e,
      [t.payload.shelfType]: t.payload.shelves
    } : e;
  },
  showingCommunityAdminBanner(e = !1, t) {
    return !!Ch.matches(t) || !_$$rO2.matches(t) && e;
  }
});
let o5 = {
  isCreatingFile: !1,
  searchQuery: '',
  isSearchBarFocused: !0,
  loadingBackgroundColor: null
};
let o3 = {
  type: _$$R.None,
  data: null
};
let o8 = HY({
  logs(e = [], t) {
    return hZ.matches(t) ? t.payload.logs : e;
  },
  cursor(e = Object.create(null), t) {
    return hZ.matches(t) ? t.payload.cursor : _$$cv.matches(t) ? Object.create(null) : e;
  },
  isLoading(e = !1, t) {
    return !hZ.matches(t) && (!!_$$E2.matches(t) || e);
  },
  isNewQuery(e = !1, t) {
    return _$$E2.matches(t) ? t.payload.newQuery : e;
  },
  lastQuery(e = {
    date: {
      start: null,
      end: null
    }
  }, t) {
    if (_$$E2.matches(t)) {
      let {
        emails,
        date,
        eventName,
        teamId
      } = t.payload;
      return {
        emails,
        date,
        eventName,
        teamId
      };
    }
    return e;
  }
});
let lt = {
  status: _$$hv.INIT,
  entity: null
};
function li(e = lt, t) {
  return _$$s4.matches(t) ? {
    file: t.payload.file,
    entity: t.payload.entity,
    entityType: t.payload.entityType,
    status: _$$hv.POSITIONING,
    shape: t.payload.shape
  } : AY.matches(t) ? {
    ...e,
    status: _$$hv.UPLOADING,
    entity: t.payload.entity,
    entityType: t.payload.entityType
  } : _$$PI.matches(t) ? {
    ...lt
  } : e;
}
let ln = {
  newCustomSectionIndex: void 0,
  movingResource: void 0,
  collapsedCustomSections: CL(),
  favoritesCount: 0
};
function lr(e = ln, t) {
  return _$$pS.matches(t) ? {
    ...e,
    newCustomSectionIndex: t.payload.newCustomSectionIndex
  } : _$$to2.matches(t) ? {
    ...e,
    movingResource: t.payload.movingResource
  } : _$$U4.matches(t) ? {
    ...e,
    collapsedCustomSections: t.payload.collapsedCustomSections
  } : _$$lF3.matches(t) ? {
    ...e,
    favoritesCount: t.payload.favoritesCount
  } : e;
}
let lc = 0;
let lu = _$$oB2((e, t) => _$$fk.matches(t) && t.payload.id === e.id ? {
  ...e,
  ...t.payload
} : e, {
  shouldIgnoreAction: e => !_$$fk.matches(e)
});
function lp(e, t) {
  let i = {
    step: _$$Y3.START,
    isDraggingImport: !1,
    queue: [],
    files: {},
    isProcessingFile: !1,
    failedOnFileLimit: !1,
    selectedPdfType: WhiteboardIntegrationType.UNKNOWN
  };
  if (!e) {
    lc = 0;
    return i;
  }
  if (Ud.matches(t)) {
    t.payload.forEach(t => {
      if (kI(t.name) && e.step === _$$Y3.FILE_IMPORT_WITH_CANCELED_PDF) return;
      let i = new PerfTimer('file.import', {});
      let n = {
        id: lc++,
        name: t.name,
        blob: t.blob,
        status: _$$mO.WAITING,
        timer: i,
        folderId: t.folderId
      };
      e.files = {
        ...e.files,
        [n.id]: n
      };
      e.queue = [...e.queue, n.id];
    });
  } else if (_$$fk.matches(t)) {
    let i = Ql(e.files, t, lu);
    if (i !== e.files) {
      return {
        ...e,
        files: i
      };
    }
  } else if (JR.matches(t)) {
    if (e.step === _$$Y3.CONFIRM_PDF_IMPORT || e.queue.length === 0) return e;
    if (!e.isProcessingFile) {
      return {
        ...e,
        isProcessingFile: !0
      };
    }
  } else if (_$$n$2.matches(t)) {
    return e.queue.length ? {
      ...e,
      queue: e.queue.slice(1),
      isProcessingFile: !1
    } : {
      ...e,
      isProcessingFile: !1
    };
  } else if (_$$cY.matches(t)) {
    if (fileImporter?.resetCancel(), !e.queue.length) return i;
  } else if (_$$lg.matches(t)) {
    return {
      ...e,
      queue: []
    };
  } else if (_$$rj.matches(t)) {
    return {
      ...e,
      failedOnFileLimit: !0
    };
  } else if (JK.matches(t)) {
    return {
      ...e,
      step: _$$Y3.CONFIRM_PDF_IMPORT
    };
  } else if (GR.matches(t) && getFeatureFlags().internal_only_debug_tools) {
    return {
      ...e,
      step: _$$Y3.IMPORT_REPO
    };
  } else if (Fj.matches(t)) {
    let t = e.queue.filter(t => !kI(e.files[t].name));
    let i = {};
    for (let t of Object.values(e.files)) kI(t.name) || (i[t.id] = t);
    return {
      ...e,
      queue: t,
      files: i,
      step: _$$Y3.FILE_IMPORT_WITH_CANCELED_PDF
    };
  } else {
    if (Fd.matches(t)) {
      return {
        ...e,
        step: _$$Y3.FILE_IMPORT_WITH_CONFIRMED_PDF,
        selectedPdfType: t.payload
      };
    }
    _$$rf.matches(t);
  }
  return e;
}
let lg = Oi((e = {}, t) => {
  if (Qv.matches(t)) {
    let t = {
      ...e
    };
    let i = getInitialOptions().editing_file;
    i && !t[i.key] && (t[i.key] = i);
    let n = i?.source_file;
    n && !t[n.key] && (t[n.key] = n);
    return t;
  }
  if (yJ.matches(t) || _$$sF.matches(t) || bE.matches(t)) {
    let i = t.payload.file;
    if (!(i.key in e)) {
      return {
        ...e,
        [i.key]: i
      };
    }
    {
      let n = _$$N4(e[i.key], t);
      return {
        ...e,
        [i.key]: n
      };
    }
  }
  if (gG.matches(t) || qP.matches(t)) {
    let i = t.payload.file.key;
    let n = e[i];
    if (n) {
      return {
        ...e,
        [i]: {
          ...n,
          is_favorited: gG.matches(t)
        }
      };
    }
  } else if (N9.matches(t)) {
    if (t.payload.files) {
      let i = {
        ...e
      };
      t.payload.files.forEach(t => {
        let n = e[t.key];
        n && (i[t.key] = {
          ...n,
          is_favorited: !0
        });
      });
      return i;
    }
  } else if (_$$uo.matches(t)) {
    let i = t.payload.files;
    let n = {
      ...e
    };
    for (let t of i) {
      t.key in e ? n[t.key] = _$$N4(e[t.key], yJ({
        file: t
      })) : n[t.key] = t;
    }
    return n;
  } else if (_$$iE3.matches(t) || _$$nK.matches(t)) {
    let i = t.payload.repo.files;
    let n = {
      ...e
    };
    for (let t of i) {
      t.key in e ? n[t.key] = _$$N4(e[t.key], yJ({
        file: t
      })) : n[t.key] = t;
    }
    return n;
  } else if (_$$pB.matches(t)) {
    let i = {
      ...e
    };
    t.payload.deletedFiles.forEach(e => {
      i[e.key] = e;
    });
    return i;
  } else if (_$$pg.matches(t)) {
    let i = {
      ...e
    };
    t.payload.deletedRepos.forEach(e => {
      i[e.main_file.key] = e.main_file;
    });
    return i;
  } else if (P6.matches(t)) {
    let i;
    let n = t.payload.fileKeys;
    for (let t in n) {
      let n = e[t];
      n && (i || (i = {
        ...e
      }), i[t] = {
        ...n,
        trashed_at: Date.now()
      });
    }
    return i || e;
  } else if (YK.matches(t)) {
    let i = null;
    let n = t.payload.fileKeys;
    for (let t in n) {
      e[t] && (i || (i = {
        ...e
      }), delete i[t]);
    }
    return i || e;
  }
  return Ql(e, t, _$$N4);
}, _$$N3.reducer);
function lf(e, t) {
  let i = e.folder_id;
  let n = e.key;
  if (e.file_repo_id) {
    for (let e in t) {
      let i = t[e] || [];
      let r = i.indexOf(n);
      r != -1 && (t[e] = i.slice(0, r).concat(i.slice(r + 1)));
    }
    return t;
  }
  if (!i || t[i] && t[i].includes(n)) return t;
  for (let e in t) {
    let i = t[e];
    let r = i.indexOf(n);
    r != -1 && (t[e] = i.slice(0, r).concat(i.slice(r + 1)));
  }
  t[i] || (t[i] = []);
  e.trashed_at || t[i].push(n);
}
function l_(e, t) {
  if (!e) return {};
  if (U2.matches(t)) {
    let i = {
      ...e
    };
    let n = {};
    for (let e of t.payload.files) n[e.key] = !0;
    for (let t in e) i[t] = i[t].filter(e => !n[e]);
    for (let e in n) i[t.payload.folderId]?.push(e);
    return i;
  }
  if (Yp.matches(t)) {
    let i = t.payload.folderId;
    if (!e[i]) return e;
    let n = {
      ...e
    };
    n[i] = n[i].filter(e => t.payload.file.key !== e);
    return n;
  }
  if (yJ.matches(t)) {
    let i = {
      ...e
    };
    lf(t.payload.file, i);
    return i;
  }
  if (_$$uo.matches(t)) {
    let i = t.payload.files;
    let n = {
      ...e
    };
    for (let e of i) lf(e, n);
    return n;
  }
  if (bE.matches(t)) {
    let i = {
      ...e
    };
    lf(t.payload.file, i);
    return i;
  }
  if (YF.matches(t)) {
    let i = {
      ...e
    };
    for (let e in t.payload.fileKeys) {
      let n = t.payload.fileKeys[e].folder_id;
      n && (n in i || (i[n] = []), !i[n].includes(e) && i[n].push(e));
    }
    return i;
  }
  if (P6.matches(t)) {
    let i = {
      ...e
    };
    for (let e in i) i[e] = i[e].filter(e => !t.payload.fileKeys[e]);
    return i;
  } else if (_$$bE.matches(t)) {
    let i = {
      ...e
    };
    i[t.payload.id] = [];
    return i;
  } else if (yH.matches(t)) {
    let i = {
      ...e
    };
    t.payload.folderIds.forEach(e => {
      delete i[e];
    });
    return i;
  }
  return e;
}
function lA(e = {}, t) {
  if (!e) return {};
  if (MR.matches(t)) {
    let i = {
      ...e
    };
    i[t.payload.folderId] = t.payload.fileKeys;
    return i;
  }
  if ($o.matches(t)) {
    if (!e[t.payload.folderId]) return e;
    let i = {
      ...e
    };
    let n = i[t.payload.folderId];
    n.includes(t.payload.fileKey) || (i[t.payload.folderId] = [...n, t.payload.fileKey]);
    return i;
  }
  if (Q2.matches(t)) {
    if (!e[t.payload.folderId]) return e;
    let i = {
      ...e
    };
    i[t.payload.folderId] = i[t.payload.folderId].filter(e => e !== t.payload.fileKey);
    return i;
  }
  return e;
}
let ly = oH(wO);
function lb(e = {}, t) {
  if (_$$eq.matches(t)) {
    let {
      hubFileId,
      from,
      to
    } = t.payload;
    return {
      ...e,
      [hubFileId]: {
        from,
        to
      }
    };
  }
  return e;
}
let lx = HY({
  isCreatingOrgInvite(e = !1, t) {
    return _$$wc.matches(t) ? t.payload.creating : e;
  },
  idpUsers(e = {}, t) {
    if (_$$$4.matches(t)) {
      let i = {
        ...e
      };
      t.payload.idpUsers.forEach(e => {
        i[e.id] = {
          ...e,
          isOrgInvite: !1
        };
      });
      return i;
    }
    if (_$$hZ3.matches(t)) {
      let i = {
        ...e
      };
      t.payload.forEach(e => {
        i[e.id] = {
          ...i[e.id],
          ...e,
          type: AccountTypeEnum.IDP_USER,
          isOrgInvite: !0,
          seat_type_key: e.billable_product_key,
          scim_metadata: null,
          name: ''
        };
      });
      return i;
    }
    if (!_$$yH5.matches(t)) return e;
    {
      let i = {
        ...e
      };
      delete i[t.payload.org_invite_id];
      return i;
    }
  }
});
function lO(e) {
  return (t = Object.create(null), i) => Ho.matches(i) && i.payload.type === e ? i.payload.publishedItemsByLibraryKey : t;
}
function lD(e) {
  return (t = Object.create(null), i) => {
    if (_$$$I.matches(i) && i.payload.type === e) {
      let e = i.payload.libraryKey;
      let n = i.payload.teamId || NO_TEAM;
      let r = {
        ...t
      };
      for (let t in r[n] = {
        ...r[n]
      }, r[n][e] = {
        ...r[n][e]
      }, i.payload.itemsById) {
        let a = i.payload.itemsById[t];
        r[n][e][t] = withParsedMeta(a);
      }
      return r;
    }
    if (_$$uo3.matches(i) && i.payload.type === e) {
      let e = {
        ...t
      };
      i.payload.items.forEach(t => {
        let i = (t = withParsedMeta(t)).library_key;
        let n = t.team_id || NO_TEAM;
        e[n] = e[n] || Object.create(null);
        e[n][i] = e[n][i] || Object.create(null);
        e[n][i][t.node_id] = t;
      });
      return e;
    }
    if (_$$iE2.matches(i) && i.payload.type === e) return {};
    if (_$$yH2.matches(i) && i.payload.type === e) {
      let e = i.payload.file;
      let n = _$$l6(e.library_key);
      let r = e.team_id || NO_TEAM;
      let a = {
        ...t
      };
      a[r] = {
        ...a[r]
      };
      a[r][_$$l6(e.library_key)] = {
        ...a[r][_$$l6(e.library_key)]
      };
      i.payload.nodeIds.forEach(e => {
        delete a[r][n][e];
      });
      isEmptyObject(a[r][n]) && delete a[r][n];
      return a;
    }
    if (_$$ru.matches(i)) {
      let e = _$$$3(i.payload.fileKey);
      for (let i in t) {
        if (e in t[i]) {
          let n = {
            ...t
          };
          n[i] = {
            ...n[i]
          };
          delete n[i][e];
          return n;
        }
      }
      return t;
    }
    if (P6.matches(i)) {
      let e;
      for (let n in i.payload.fileKeys) {
        let r = _$$$3(n);
        let a = i.payload.fileKeys[n].team_id || NO_TEAM;
        a in t && r in t[a] && (e || (e = {
          ...t
        }), e[a] = {
          ...e[a]
        }, delete e[a][r]);
      }
      return e || t;
    }
    if (!_$$yH.matches(i) || !(i.payload.team.id in t)) return t;
    {
      let e = {
        ...t
      };
      delete e[i.payload.team.id];
      return e;
    }
  };
}
function lL(e) {
  return (t = Object.create(null), i) => HV.matches(i) ? Object.create(null) : I0.matches(i) && i.payload.type === e ? i.payload.local : t;
}
let lF = HY({
  components: lD(PrimaryWorkflowEnum.COMPONENT),
  stateGroups: lD(PrimaryWorkflowEnum.STATE_GROUP)
});
let lM = HY({
  componentsByLibraryKey: lO(PrimaryWorkflowEnum.COMPONENT),
  stateGroupsByLibraryKey: lO(PrimaryWorkflowEnum.STATE_GROUP),
  libraryKeys(e = [], t) {
    return _$$lx.matches(t) ? t.payload.libraryKeys : e;
  }
});
let lj = HY({
  components: lL(PrimaryWorkflowEnum.COMPONENT),
  styles: lL(PrimaryWorkflowEnum.STYLE),
  stateGroups: lL(PrimaryWorkflowEnum.STATE_GROUP),
  modules: lL(PrimaryWorkflowEnum.MODULE),
  thumbnails: (e = {}, t) => {
    if (HV.matches(t)) return {};
    if (xp.matches(t)) {
      let i = t.payload.thumbnails;
      for (let t in e) {
        let n = e[t];
        n.kind === SubscriptionStatusEnum.SUBSCRIBED_WITHOUT_LIBRARY && n.url !== 'FAILED_THUMBNAIL' && (i[t] = n);
      }
      return i;
    }
    return _$$us2.matches(t) ? {
      ...e,
      [t.payload.styleID]: {
        kind: SubscriptionStatusEnum.SUBSCRIBED_WITHOUT_LIBRARY,
        url: t.payload.url
      }
    } : e;
  }
});
let lU = HY({
  publishedByLibraryKey: lF,
  used__LIVEGRAPH(e = {
    styles: {},
    sourceAssetKeyToDestinationKey: {},
    sourceAssetKeyToFileName: {},
    localNodeIdToDestinationKey: {},
    localNodeIdToDestinationFileName: {},
    unnaturalKeyToNaturalKey: {},
    destinationStyleKeyToLegacySourceStyle: {}
  }, t) {
    if (_$$ow.matches(t)) {
      return {
        ...e,
        styles: t.payload
      };
    }
    if (KQ.matches(t)) {
      return {
        ...e,
        sourceAssetKeyToDestinationKey: t.payload
      };
    }
    if (WE.matches(t)) {
      return {
        ...e,
        localNodeIdToDestinationKey: t.payload
      };
    }
    if (U$.matches(t)) {
      return {
        ...e,
        localNodeIdToDestinationFileName: t.payload
      };
    }
    if (UA.matches(t)) {
      return {
        ...e,
        sourceAssetKeyToFileName: t.payload
      };
    }
    if (Cp.matches(t)) {
      return {
        ...e,
        unnaturalKeyToNaturalKey: t.payload
      };
    }
    if (Ty.matches(t)) {
      return {
        ...e,
        destinationStyleKeyToLegacySourceStyle: t.payload
      };
    } else {
      return e;
    }
  },
  openFilePublished__LIVEGRAPH(e = {
    components: {},
    stateGroups: {},
    styles: {},
    variableSets: {},
    variables: {},
    modules: {}
  }, t) {
    return B2.matches(t) ? t.payload : e;
  },
  openHubFilePublished__LIVEGRAPH: jz.reducer,
  local: lj,
  assetsPanelSearch(e = {
    query: '',
    isLoading: !1,
    normalizedSearchResults: [],
    unsubscribedSearchResults: [],
    shouldSearchDefaultLibraries: !1,
    versionForTracking: 2,
    entryPoint: void 0
  }, t) {
    if (ku.matches(t)) {
      let i = t.payload.query.substring(0, 280);
      let n = t.payload.searchOptions;
      return {
        ...e,
        query: i,
        searchOptions: n,
        isLoading: e.query !== i && i.length > 0,
        normalizedSearchResults: i.length ? e.normalizedSearchResults : [],
        unsubscribedSearchResults: i.length ? e.unsubscribedSearchResults : [],
        versionForTracking: t.payload.versionForTracking || e.versionForTracking,
        entryPoint: t.payload.entryPoint || void 0
      };
    }
    if (gP.matches(t)) {
      let i = t.payload.searchOptions;
      return e.searchOptions !== i && _$$eu(i) ? {
        ...e,
        isLoading: !0,
        searchOptions: i
      } : e;
    }
    return xI.matches(t) ? {
      ...e,
      isLoading: !1,
      normalizedSearchResults: [],
      unsubscribedSearchResults: []
    } : Y1.matches(t) ? {
      ...e,
      isLoading: !1,
      normalizedSearchResults: t.payload.normalizedSearchResults,
      unsubscribedSearchResults: t.payload.unsubscribedSearchResults
    } : _$$cr.matches(t) ? {
      ...e,
      shouldSearchDefaultLibraries: t.payload.shouldSearchDefaultLibraries
    } : e;
  },
  publishProgress(e = {
    state: LibraryPublishStatusEnum.NONE
  }, t) {
    return _$$Sb.matches(t) ? {
      state: LibraryPublishStatusEnum.ASSEMBLING_COMPONENTS,
      progress: 0,
      publishType: t.payload.unpublishAll ? PublishStatusEnum.UNPUBLISH : PublishStatusEnum.PUBLISH,
      publishStartMs: performance.now()
    } : WM.matches(t) ? {
      state: LibraryPublishStatusEnum.NONE
    } : _$$df.matches(t) ? t.payload : e;
  },
  isRenamingSelectedStyle(e = !1, t) {
    return _$$ay.matches(t) ? t.payload.isRenaming : e;
  },
  localStyleSelection(e = null, t) {
    return Bn.matches(t) ? t.payload : e;
  },
  defaultPublished: lM,
  libraryUpdatesBannerDismissed: (e = !1, t) => JV.matches(t) ? t.payload.libraryUpdatesBannerDismissed : e,
  movedLibraryItems: (e = {
    subscribed: {},
    local: {}
  }, t) => _$$dC.matches(t) ? {
    subscribed: {
      ...e.subscribed,
      ...t.payload.subscribedOldKeyToNewKey
    },
    local: {
      ...e.local,
      ...t.payload.localOldGuidToNewKey
    }
  } : e,
  libraryPublishingMode: _$$pz.reducer,
  localVariablesById: _$$Cg.reducer,
  localVariableSetsById: qy.reducer,
  subscribedVariablesByIdFromLoadedPages: _$$bO.reducer,
  subscribedVariableSetsByIdFromLoadedPages: _$$xA.reducer,
  knownUsedLibraryVariablesByKey: LC.reducer,
  knownUsedLibraryVariableSetsByKey: jt.reducer,
  publishableStateGroups: Te,
  publishableStyles: _$$ax2,
  publishableSymbols: $K,
  publishableModules: Fx,
  subscribedSymbolsFromLoadedPages: _$$uN,
  subscribedStateGroupsFromLoadedPages: QI,
  directlySubscribedStylesFromLoadedPages: _$$lR,
  indirectlySubscribedStylesFromLoadedPages: _$$ck3,
  localSymbolsThatHaveUsagesOnLoadedPages: GN,
  localStylesThatHaveUsagesOnLoadedPages: _$$db,
  subscribedSymbolsOnCurrentPage: _$$F8,
  subscribedStateGroupsOnCurrentPage: _$$hu,
  directlySubscribedStylesOnCurrentPage: _$$cQ,
  localSymbolsThatHaveUsagesOnCurrentPage: _$$RG,
  localStylesThatHaveUsagesOnCurrentPage: Qu
});
let lV = HY({
  teams(e = [], t) {
    if (_$$hZ4.matches(t)) {
      let i = {};
      e.forEach(e => {
        i[e.id] = e;
      });
      t.payload.teams.forEach(e => {
        i[e.id] = {
          ...(i[e.id] || {}),
          ...e
        };
      });
      return Object.values(i);
    }
    if (_$$mw.matches(t)) {
      let i = t.payload.teamId;
      return e.map(e => e.id === i ? {
        ...e,
        member_count: (e.member_count || 0) + 1,
        orphaned: !1
      } : e);
    }
    if (_$$ii.matches(t)) {
      let i = t.payload.teamIds;
      return e.map(e => i.includes(e.id) ? {
        ...e,
        member_count: (e.member_count || 0) + 1,
        orphaned: !1
      } : e);
    }
    if (_$$yH.matches(t)) {
      let i = t.payload.team;
      return t.payload.teamDelete ? e.filter(e => e.id !== i.id) : e.reduce((e, t) => {
        if (i.id === t.id) {
          if (t.org_access === FAccessLevelType.PUBLIC || t.org_access === FAccessLevelType.PRIVATE || t.org_access === FAccessLevelType.SECRET && t.member_count === 1) {
            let i = t.member_count - 1;
            e.push({
              ...t,
              member_count: i,
              orphaned: i === 0
            });
          }
        } else {
          e.push(t);
        }
        return e;
      }, []);
    }
    if (_$$bE2.matches(t)) {
      let i = t.payload.team;
      return i.org_id ? e.findIndex(e => e.id === i.id) >= 0 ? e.map(e => e.id === i.id ? {
        ...e,
        ...i
      } : e) : [...e, {
        ...i,
        member_count: 1
      }] : e;
    }
    if ($I.matches(t)) {
      let i = t.payload.team.id;
      return e.map(e => e.id === i ? {
        ...e,
        ...t.payload.team
      } : e);
    }
    if ($w.matches(t)) {
      let i = t.payload.team.id;
      let n = t.payload.name;
      return e.map(e => e.id === i ? {
        ...e,
        ...t.payload.team,
        name: n
      } : e);
    } else if (_$$aB.matches(t)) {
      let i = t.payload.team.id;
      let n = t.payload.sharingAudienceControl;
      let r = t.payload.orgBrowsable;
      let a = t.payload.hidden;
      let s = null;
      let o = null;
      n === FPermissionLevelType.ORG_EDIT ? (s = FAccessLevelType.PUBLIC, o = FBasicPermissionType.EDIT) : n === FPermissionLevelType.ORG_VIEW ? (s = FAccessLevelType.PUBLIC, o = FBasicPermissionType.VIEW) : n === FPermissionLevelType.INVITE_ONLY && (r ? s = FAccessLevelType.PRIVATE : a && (s = FAccessLevelType.SECRET));
      return e.map(e => e.id === i ? {
        ...e,
        ...t.payload.team,
        org_access: s,
        default_permission: o,
        sharing_audience_control: n,
        org_browsable: r,
        hidden: a
      } : e);
    } else if (bQ.matches(t)) {
      let i = t.payload.team.id;
      let n = t.payload.orgAccess;
      return e.map(e => e.id === i ? {
        ...e,
        ...t.payload.team,
        orgAccess: n
      } : e);
    }
    return e;
  },
  status(e = null, t) {
    return Lx.matches(t) ? t.payload : _$$hZ4.matches(t) ? 'loaded' : _$$E6.matches(t) ? 'loading' : MT.matches(t) ? null : e;
  }
});
let lz = {
  error: null,
  errorCode: null,
  currencyToSwitch: null,
  billingPeriod: SubscriptionType.UNSPECIFIED,
  numDesignEditors: 0,
  submitPending: !1,
  upgradingNewTeam: !1,
  promo: null,
  token: null,
  taxes: null,
  editorStatusChanges: {
    downgrade: {
      design: [],
      whiteboard: [],
      slides: [],
      sites: [],
      cooper: [],
      figmake: []
    },
    upgrade: {
      design: [],
      whiteboard: [],
      slides: [],
      sites: [],
      cooper: [],
      figmake: []
    }
  },
  numWhiteboardEditors: 0,
  figmaEmailTeamUsers: [],
  currency: null,
  vatGstId: null,
  regionalVatGstId: null,
  legalName: '',
  displayName: ''
};
function lH(e = lz, t) {
  if (_$$Ts2.matches(t)) {
    let {
      billingPeriod,
      numDesignEditors,
      numWhiteboardEditors
    } = t.payload;
    return {
      ...lz,
      promo: e.promo,
      billingPeriod,
      numDesignEditors,
      numWhiteboardEditors
    };
  }
  if (_$$pv.matches(t)) {
    return {
      ...e,
      upgradingNewTeam: t.payload.newTeam,
      currency: t.payload.currency || LN()
    };
  }
  if (Mv.matches(t)) {
    return {
      ...e,
      currency: t.payload.currency || LN()
    };
  }
  if (Qe.matches(t)) {
    return {
      ...e,
      submitPending: !0
    };
  }
  if (I2.matches(t)) {
    return {
      ...e,
      submitPending: t.payload.submitPending
    };
  }
  if (_$$Lo.matches(t)) {
    return {
      ...e,
      billingPeriod: t.payload.billingPeriod
    };
  }
  if (js.matches(t)) {
    return {
      ...e,
      numDesignEditors: t.payload.numDesignEditors
    };
  } else if (Az.matches(t)) {
    return {
      ...e,
      numWhiteboardEditors: t.payload.numWhiteboardEditors
    };
  } else if (M2.matches(t)) {
    return {
      ...e,
      figmaEmailTeamUsers: t.payload.figmaEmailTeamUsers
    };
  } else if (Je.matches(t)) {
    return {
      ...e,
      editorStatusChanges: t.payload.editorStatusChanges
    };
  } else if (_$$Qg.matches(t)) {
    return {
      ...e,
      error: t.payload.error,
      errorCode: t.payload.errorCode || null,
      currencyToSwitch: t.payload.currencyToSwitch || null,
      submitPending: !1
    };
  } else if (XS.matches(t)) {
    return {
      ...e,
      promo: t.payload.promo
    };
  } else if (WG.matches(t)) {
    let i = t.payload.token;
    return {
      ...e,
      token: i
    };
  } else if (i.matches(t)) {
    return {
      ...e,
      taxes: t.payload.taxes
    };
  } else if (MN.matches(t)) {
    return {
      ...e,
      currency: t.payload.currency
    };
  } else if (_$$eK.matches(t)) {
    return {
      ...e,
      ...t.payload
    };
  } else if ($h.matches(t)) {
    return {
      ...e,
      vatGstId: t.payload.vatGstId
    };
  } else if (Ef.matches(t)) {
    return {
      ...e,
      regionalVatGstId: t.payload.regionalVatGstId
    };
  } else if (yy.matches(t)) {
    return {
      ...e,
      legalName: t.payload.legalName,
      displayName: t.payload.displayName
    };
  } else if (qU.matches(t)) {
    return {
      ...e,
      cartSelections: t.payload.cartSelections
    };
  } else {
    return e;
  }
}
function lW(e, t) {
  if (!e || _$$q2.matches(t)) return [];
  if (Am.matches(t)) {
    let i = e.findIndex(e => e.file_key === t.payload.prototype.file_key && e.page_id === t.payload.prototype.page_id);
    let n = [...e];
    i !== -1 && n.splice(i, 1);
    return [t.payload.prototype].concat(n);
  }
  if (Q4.matches(t)) return e.filter(e => e.file_key !== t.payload.fileKey || e.page_id !== t.payload.pageId);
  if (_$$iN.matches(t) || _$$X4.matches(t)) {
    let i = e.findIndex(e => e.file_key === t.payload.prototype.file_key && e.page_id === t.payload.prototype.page_id);
    if (i === -1) return e;
    let n = [...e];
    n[i] = {
      ...n[i],
      is_favorited: _$$iN.matches(t)
    };
    return n;
  }
  if (N9.matches(t)) {
    if (t.payload.prototypes) {
      let i = [...e];
      t.payload.prototypes.forEach(t => {
        let n = e.findIndex(e => e.file_key === t.file_key);
        n !== -1 && (i[n] = {
          ...e[n],
          is_favorited: !0
        });
      });
      return i;
    }
  } else if (_$$sM.matches(t)) {
    return e.map(e => t.payload.fileKeys.includes(e.file_key) ? {
      ...e,
      trashed: !0
    } : e);
  } else if (xY.matches(t)) {
    return e.map(e => t.payload.fileKeys.includes(e.file_key) ? {
      ...e,
      trashed: !1
    } : e);
  }
  return e;
}
let lY = _$$oB2((e, t) => _$$yJ7.matches(t) || _$$CN.matches(t) ? t.payload && t.payload.repo && t.payload.repo.id !== e.id ? e : {
  ...e,
  ...t.payload.repo
} : e, {
  shouldIgnoreAction: e => !(_$$yJ7.matches(e) || _$$CN.matches(e))
});
let lq = Oi((e = {}, t) => {
  if (Qv.matches(t)) {
    let t = {
      ...e
    };
    let i = getInitialOptions().editing_file?.file_repo;
    i && !t[i.id] && (t[i.id] = i);
    return t;
  }
  if (_$$nX.matches(t) || _$$uo7.matches(t)) {
    let i = {
      ...e
    };
    for (let e of t.payload.repos) i[e.id] = e;
    return i;
  }
  if (yJ.matches(t) || _$$sF.matches(t)) {
    let i = {
      ...e
    };
    let {
      file
    } = t.payload;
    jO(file) && file.file_repo && (i[file.file_repo.id] = file.file_repo);
    return i;
  }
  if (gG.matches(t) || qP.matches(t)) {
    let i = {
      ...e
    };
    let {
      repoId
    } = t.payload;
    let r = gG.matches(t);
    return repoId ? (i[repoId] = {
      ...i[repoId],
      is_favorited: r
    }, i) : e;
  }
  if (_$$bE5.matches(t)) {
    let {
      repo
    } = t.payload;
    return {
      ...e,
      [repo.id]: repo
    };
  }
  if (N9.matches(t)) {
    if (t.payload.repos) {
      let i = {
        ...e
      };
      t.payload.repos.forEach(t => {
        t.id && (i[t.id] = {
          ...e[t.id],
          is_favorited: !0
        });
      });
      return i;
    }
    return e;
  }
  if (_$$iE3.matches(t) || _$$nK.matches(t)) {
    let {
      repo
    } = t.payload.repo;
    return {
      ...e,
      [repo.id]: repo
    };
  } else if (Y4.matches(t)) {
    let i = null;
    for (let n in t.payload.reposById) {
      e[n] && (i || (i = {
        ...e
      }), i[n] = {
        ...i[n],
        trashed_at: new Date().toISOString()
      });
    }
    return i || e;
  } else if ($B.matches(t)) {
    let i = null;
    for (let n of t.payload.repoIds) {
      e[n] && (i || (i = {
        ...e
      }), delete i[n]);
    }
    return i || e;
  } else if (_$$i4.matches(t)) {
    let i = null;
    for (let n in t.payload.reposById) {
      e[n] && (i || (i = {
        ...e
      }), i[n] = {
        ...i[n],
        trashed_at: null
      });
    }
    return i || e;
  } else if (_$$pg.matches(t)) {
    let i = {
      ...e
    };
    t.payload.deletedRepos.forEach(e => {
      i[e.repo.id] = e.repo;
    });
    return i;
  }
  return Ql(e, t, lY);
}, _$$N5.reducer);
let l$ = (e, t, i) => {
  if (t.length === 0) return e;
  let n = new Set(t);
  let r = {
    ...e
  };
  for (let t in e) r[t] = r[t].filter(e => !n.has(e));
  r[i] || (r[i] = []);
  r[i].push(...n);
  return r;
};
function lZ(e = {}, t) {
  if (IU.matches(t)) {
    let i = t.payload.folderId;
    return {
      ...e,
      [i]: []
    };
  }
  if (_$$bE5.matches(t)) {
    let i = t.payload.repo.id;
    let n = t.payload.repo.folder_id;
    if (e[n] && e[n].includes(i)) return e;
    let r = e[n] || [];
    return {
      ...e,
      [n]: [...r, i]
    };
  }
  if (_$$aL.matches(t)) {
    let {
      repos,
      folderId
    } = t.payload;
    return l$(e, repos.map(e => e.id), folderId);
  }
  if (_$$yJ7.matches(t)) {
    let i = t.payload.repo.id;
    let n = t.payload.repo.folder_id;
    return n ? l$(e, [i], n) : e;
  }
  if (_$$uo7.matches(t)) {
    let i = {
      ...e
    };
    for (let e of t.payload.repos) e.trashed_at || (i[e.folder_id] || (i[e.folder_id] = []), !i[e.folder_id].includes(e.id) && i[e.folder_id].push(e.id));
    return i;
  }
  if (_$$iE3.matches(t) || _$$nK.matches(t)) {
    let {
      repo
    } = t.payload.repo;
    let n = e[repo.folder_id] || [];
    let r = [];
    !n.includes(repo.id) && r.push(repo.id);
    return {
      ...e,
      [repo.folder_id]: [...n].concat(r)
    };
  }
  if (_$$nX.matches(t)) {
    let i = t.payload.repos;
    return i.length === 0 ? e : l$(e, i.filter(e => !e.trashed_at).map(e => e.id), i[0].folder_id);
  } else if (Y4.matches(t)) {
    let i = {
      ...e
    };
    for (let e in i) i[e] = i[e].filter(e => !t.payload.reposById[e]);
    return i;
  } else if (_$$i4.matches(t)) {
    let i = {
      ...e
    };
    for (let e in t.payload.reposById) {
      let n = t.payload.reposById[e].folder_id;
      n in i || (i[n] = []);
      !i[n].includes(e) && i[n].push(e);
    }
    return i;
  }
  return e;
}
function lX(e = {}, t) {
  return kE.matches(t) ? {
    ...e,
    [t.payload.repoId]: t.payload.branchKey
  } : _$$sf.matches(t) || Qv.matches(t) ? {} : e;
}
let lQ = _$$oB2((e, t) => {
  let i = lY(e.repo, t);
  let n = ZN(e.files, t, _$$N4);
  if (P6.matches(t)) {
    n = n.filter(e => !t.payload.fileKeys[e.key]);
  } else if (YF.matches(t)) {
    for (let i in t.payload.fileKeys) {
      let r = t.payload.fileKeys[i].file_repo_id;
      r && r === e.repo.id && (n = [...n.filter(e => e.key !== i), t.payload.fileKeys[i]]);
    }
  }
  return i !== e.repo || n !== e.files ? {
    ...e,
    repo: i,
    files: n
  } : e;
}, {
  shouldIgnoreAction: e => lY.shouldIgnoreAction(e) && _$$N4.shouldIgnoreAction(e) && !(P6.matches(e) || YF.matches(e))
});
function lJ(e = [], t) {
  if (_$$nF.matches(t)) {
    if (t.payload.recent_repos) return t.payload.recent_repos;
  } else if (Y4.matches(t)) {
    return e.filter(e => !t.payload.reposById[e.repo.id]);
  } else if ($B.matches(t)) {
    return e.filter(e => !t.payload.repoIds.includes(e.repo.id));
  } else if (_$$yJ7.matches(t)) {
    if (t.payload.repo.trashed_at) return e.filter(e => t.payload.repo.id !== e.repo.id);
  } else if (_$$iE3.matches(t) || _$$nK.matches(t)) {
    let i = e.findIndex(e => e.repo.id === t.payload.repo.repo.id);
    return i !== -1 ? [t.payload.repo].concat(e.slice(0, i)).concat(e.slice(i + 1)) : [t.payload.repo].concat(e);
  } else if (_$$iC.matches(t)) {
    let i = t.payload.recent_repo_ids;
    return e.filter(e => !i.includes(e.repo.id));
  } else if (ER.matches(t)) {
    let i = e.findIndex(e => e.repo.id === t.payload.file.file_repo_id);
    if (i === -1) return e;
    {
      let n = e[i].files.filter(e => e.key !== t.payload.file.key).concat(t.payload.file);
      let r = {
        ...e[i],
        files: n
      };
      return e.slice(0, i).concat(r).concat(e.slice(i + 1));
    }
  } else if (gG.matches(t) || qP.matches(t)) {
    if (t.payload.repoId) {
      let i = e.findIndex(e => e.repo.id === t.payload.repoId);
      if (i === -1) return e;
      let n = [...e];
      n[i] = {
        ...e[i],
        repo: {
          ...e[i].repo,
          is_favorited: gG.matches(t)
        }
      };
      return n;
    }
  } else if (N9.matches(t) && t.payload.repos) {
    let i = [...e];
    t.payload.repos.forEach(t => {
      let n = e.findIndex(e => e.repo.id === t.id);
      n !== -1 && (i[n] = {
        ...e[n],
        repo: {
          ...e[n].repo,
          is_favorited: !0
        }
      });
    });
    return i;
  }
  return ZN(e, t, lQ);
}
let l1 = {
  summary: {
    currency: 'usd',
    annual_subscription: null,
    monthly_subscription: null,
    last_monthly_invoice: null,
    last_annual_invoice: null,
    billing_contact: null,
    whiteboard_quantity: null,
    show_vat_gst: !1,
    shipping_address: null,
    legal_name: null,
    has_billing_address: !1
  }
};
function l2(e = l1, t) {
  return _$$l9.matches(t) ? {
    ...e,
    summary: t.payload.summary
  } : OP.matches(t) ? {
    ...e,
    summary: {
      ...e.summary,
      ...t.payload.summary
    }
  } : e;
}
function l5(e = {}, t) {
  return _$$r5.matches(t) ? {
    ...e,
    loading: t.payload.loading
  } : _$$sf.matches(t) && t.payload.view === 'teamCreation' ? {
    ...e,
    loading: !1,
    isEduTeam: t.payload.isEduTeam
  } : e;
}
let l3 = _$$P;
let l6 = _$$Z;
function dt(e = {}, t) {
  if ($V.matches(t)) {
    let i = {
      ...e
    };
    i[t.payload.teamId] = t.payload.members;
    return i;
  }
  if (_$$z.matches(t)) {
    let i = t.payload.editor.team_id;
    let n = t.payload.editor.email;
    if (e[i] && e[i][n]) {
      let t = {
        ...e
      };
      t[i][n].edit_roles = {
        folders: [],
        whiteboard_files: [],
        design_files: []
      };
      t[i][n].team_role || delete t[i][n];
      return t;
    }
  }
  if (_E.matches(t)) {
    let i = t.payload.teamId;
    let n = t.payload.emails;
    let r = e[i];
    let a = {
      ...r
    };
    r && n.forEach(e => {
      delete a[e];
    });
    return {
      ...e,
      [i]: a
    };
  }
  if (_$$yJ5.matches(t)) {
    let i = t.payload.role;
    let n = i.resource_type === 'team' ? i.resource_id_or_key : void 0;
    if (n && e[n]) {
      let t = di(i, e[n], n);
      if (t) {
        let r = {
          ...e
        };
        r[n][t.email].team_role = i;
        return r;
      }
    }
  }
  if (_$$bE4.matches(t)) {
    let i = t.payload.role;
    let n = i.resource_type === 'team' ? i.resource_id_or_key : void 0;
    if (n && e[n]) {
      let t = di(i, e[n], n);
      let r = {
        ...e
      };
      if (t) {
        r[n][t.email].team_role = i;
      } else if (i.pending) {
        let e = {
          id: void 0,
          name: void 0,
          email: i.user.email,
          job_title: void 0,
          team_role: i,
          last_active: void 0,
          last_design_active: void 0,
          last_whiteboard_active: void 0,
          edit_roles: void 0,
          design_editor_upgrade: void 0,
          whiteboard_editor_upgrade: void 0,
          team_user: void 0,
          view_roles: void 0,
          edu_edit_access_allowed: void 0,
          ecc_upgrading_locked: void 0,
          upgrade_reason: void 0,
          upgrade_method: void 0,
          assigned_at: void 0,
          upgrade_actor_name: void 0
        };
        r[n][e.email] = e;
      }
      return r;
    }
  }
  if (_$$P7.matches(t)) {
    let i = t.payload.role;
    let n = i.resource_type === 'team' ? i.resource_id_or_key : void 0;
    if (n && e[n]) {
      let r = di(i, e[n], n);
      let a = {
        ...e
      };
      r && (a[n][r.email].edu_edit_access_allowed = t.payload.hasEduEditAccess);
      return a;
    }
  }
  if (_$$yH3.matches(t)) {
    let i = t.payload.role;
    let n = i?.resource_type === 'team' ? i.resource_id_or_key : void 0;
    if (n && e[n]) {
      let t = di(i, e[n], n);
      if (t) {
        let r = {
          ...e
        };
        r[n][t.email].team_role = void 0;
        i.pending && BU(r[n][t.email]) || delete r[n][t.email];
      }
    }
  }
  if (_$$m2.matches(t)) {
    let {
      teamId,
      teamUsers,
      paidStatus,
      paidStatusType
    } = t.payload;
    let s = {
      ...e
    };
    if (s[teamId]) {
      teamUsers.forEach(e => {
        let t = Object.values(s[teamId]).find(t => t.id === e.user_id);
        if (!t) return;
        let n = {
          ...s[teamId]
        };
        let o = {};
        paidStatusType === TeamType.WHITEBOARD ? o.whiteboard_paid_status = paidStatus : o.design_paid_status = paidStatus;
        let l = {
          ...e,
          ...o
        };
        let d = {
          ...t,
          team_user: l
        };
        if (d?.team_user?.whiteboard_paid_status !== FPlanRestrictionType.FULL && d?.team_user?.design_paid_status !== FPlanRestrictionType.FULL && !BU(t)) {
          delete n[d.email];
          s[teamId] = n;
          return;
        }
        n[d.email] = d;
        s[teamId] = n;
      });
      return s;
    }
  }
  if (l3.matches(t)) return l6(e, t);
  if (_$$yJ8.matches(t)) {
    let {
      teamId,
      teamUsers
    } = t.payload;
    let r = {
      ...e
    };
    if (r[teamId]) {
      teamUsers.forEach(e => {
        let t = Object.values(r[teamId]).find(t => t.id === e.user_id);
        if (t) {
          let n = {
            ...t,
            team_user: e
          };
          r[teamId][n.email] = n;
        }
      });
      return r;
    }
  }
  return e;
}
function di(e, t, i) {
  if (e.pending) {
    if (t[e.user.email]) return t[e.user.email];
  } else {
    let i = e.user_id;
    return Object.values(t).find(e => e.id === i);
  }
}
function dn(e = {
  renamingTeam: !1
}, t) {
  return WC.matches(t) ? {
    ...e,
    renamingTeam: !0
  } : TI.matches(t) ? {
    ...e,
    renamingTeam: !1
  } : e;
}
let da = HY({
  communityProfileBellStates(e = {}, t) {
    return Q$.matches(t) && t.payload.profileId ? {
      ...e,
      [t.payload.profileId]: t.payload.isBellStateHigh
    } : e;
  }
});
let dd = HY({
  config(e = null, t) {
    return _$$hZ5.matches(t) ? t.payload.orgSamlConfig : e;
  },
  isFetching(e = !1, t) {
    return !_$$hZ5.matches(t) && (!!_$$E7.matches(t) || e);
  }
});
function dc(e = {}, t) {
  if (_$$b4.matches(t)) {
    let i = {
      ...e
    };
    t.payload.teamRoleRequests.forEach(e => {
      i[e.team_id] = e;
    });
    return i;
  }
  return e;
}
function du(e = !1, t) {
  return !(_$$sf.matches(t) || showModal.matches(t) || _$$Ts.matches(t)) && (!!PY.matches(t) || !_I.matches(t) && e);
}
function dp(e = null, t) {
  return _$$sf2.matches(t) ? t.payload : bx.matches(t) ? null : e;
}
function dm(e = {}, t) {
  if (_$$c.matches(t)) {
    let i = Object.assign(Object.create(null), e);
    delete i[t.payload.fileKey];
    return i;
  }
  if (Lk.matches(t)) {
    let i = t.payload.fileKey;
    let n = t.payload.users;
    let r = Object.create(null);
    for (let e of n) r[e.id] = e;
    e = e || Object.create(null);
    return Object.assign(Object.create(null), e, {
      [i]: r
    });
  }
  return e;
}
function dh(e = {}, t) {
  if (_$$hK.matches(t)) {
    return {
      ...t.payload.bellStates,
      ...e
    };
  }
  if (yu.matches(t)) {
    let i = {
      ...e
    };
    i[t.payload.orgId] = t.payload.bellActive;
    return i;
  }
  return e;
}
function dg(e = 0, t) {
  return _$$Y2.matches(t) ? e + 1 : e;
}
function df() {
  return {
    favorites: lr,
    userNotifications: da,
    recentPrototypes: lW,
    recentRepos: lJ,
    fileKeysByFolderId: l_,
    pinnedFileKeys: lA,
    fileImport: lp,
    avatarEditorState: li,
    mobileNavShown: du,
    creatingNewFolder: dp,
    tileSelect: og,
    teamCreation: l5,
    activeFileUsers: dm,
    teamView: dn,
    teamRoleRequests: dc,
    payment: lH,
    tileSortFilterStateByView: on,
    activityLogs: o8,
    orgSamlConfig: dd,
    orgTeams: lV,
    idpUserById: lx,
    hubFileRemixes: lb,
    viewBarSortOptionsByView: _$$pw,
    viewBarViewModeOptionByView: _$$q3,
    library: lU,
    teamBilling: l2,
    teamMembersByTeamId: dt,
    repoIdsByFolderId: lZ,
    selectedBranchKeyByRepoId: lX,
    teamFeedBellStates: dh,
    teamFeedRefreshNonce: dg
  };
}
HY(df());
let dA = HY({
  folderSearchQuery(e = '', t) {
    return hq.matches(t) ? t.payload.query : bO.matches(t) || hideModal.matches(t) ? '' : e;
  },
  folderRenaming(e = null, t) {
    return JG.matches(t) ? t.payload.folderId : Mn.matches(t) || bO.matches(t) || hideModal.matches(t) ? null : e;
  },
  focusedIndex(e = -1, t) {
    return TL.matches(t) ? e === t.payload.upperBound - 1 ? e : e + 1 : zv.matches(t) ? e === 0 || e === -1 ? e : e - 1 : Dp.matches(t) ? t.payload.indexAt : _$$xH4.matches(t) || bO.matches(t) || hideModal.matches(t) ? -1 : e;
  },
  indexCount(e = null, t) {
    return CU.matches(t) ? t.payload.indexCount : bO.matches(t) || hideModal.matches(t) ? null : e;
  },
  indexOffsets(e = {}, t) {
    return _$$t8.matches(t) ? t.payload.indexOffsets : bO.matches(t) || hideModal.matches(t) ? {} : e;
  },
  folderRows(e = [], t) {
    return OT.matches(t) ? t.payload.rows : bO.matches(t) || hideModal.matches(t) ? [] : e;
  },
  teamOrder(e = [], t) {
    return Mi.matches(t) ? t.payload.teamIds : bO.matches(t) || hideModal.matches(t) ? [] : e;
  },
  foldersByTeamId(e = {}, t) {
    return Pb.matches(t) ? t.payload.foldersByTeamId : bO.matches(t) || hideModal.matches(t) ? {} : e;
  },
  isSearchResult(e = !1, t) {
    return EN.matches(t) ? t.payload.isSearchResult : !hideModal.matches(t) && e;
  },
  isSearchFocused(e = !1, t) {
    return _$$YG.matches(t) ? t.payload.isSearchFocused : !(hideModal.matches(t) || zv.matches(t) || TL.matches(t)) && (!!hq.matches(t) || e);
  },
  upDownKeyPressed(e = !1, t) {
    return !!(zv.matches(t) || TL.matches(t)) || !(qM.matches(t) || bO.matches(t) || hideModal.matches(t)) && e;
  },
  canMouseFocus(e = !0, t) {
    return Ww.matches(t) ? t.payload.canFocus : !!(bO.matches(t) || hideModal.matches(t)) || e;
  },
  userTeamCount(e = null, t) {
    return w3.matches(t) ? t.payload.userTeamCount : e;
  }
});
let dv = Oi((e = {}, t) => {
  if (_$$bE.matches(t)) {
    let i = t.payload;
    return {
      ...e,
      [i.id]: i
    };
  }
  if ($l.matches(t)) {
    let i = {
      ...e
    };
    for (let e of t.payload) i[e.id] = e;
    return i;
  }
  if (yH.matches(t) || HA.matches(t)) {
    let i = {
      ...e
    };
    t.payload.folderIds.forEach(e => {
      delete i[e];
    });
    return i;
  }
  if (y2.matches(t)) {
    let i = {
      ...e
    };
    let n = t.payload.folders;
    for (let e in n) {
      let t = i[e];
      t && (i[e] = {
        ...t,
        updated_at: n[e].updated_at
      });
    }
    return i;
  }
  if (_$$Mv.matches(t)) {
    let i = {
      ...e
    };
    let n = t.payload.folder.id;
    let r = i[n];
    return r ? (i[n] = {
      ...r,
      is_favorited: !0
    }, i) : e;
  }
  if (jv.matches(t)) {
    let i = {
      ...e
    };
    let n = t.payload.folder.id;
    let r = i[n];
    return r ? (i[n] = {
      ...r,
      is_favorited: !1
    }, i) : e;
  }
  return Ql(e, t, dI);
}, _$$N6.reducer);
let dI = _$$oB2((e, t) => {
  if (_$$yJ2.matches(t)) {
    return t.payload.folder.id !== e.id ? e : {
      ...e,
      ...t.payload.folder
    };
  }
  if (_$$iT.matches(t)) {
    return t.payload.folderId !== e.id ? e : {
      ...e,
      is_view_only: t.payload.isViewOnly,
      is_invite_only: t.payload.isInviteOnly
    };
  }
  if (Q3.matches(t)) {
    if (t.payload.folder.id !== e.id) return e;
    let i = t.payload.sharingAudienceControl;
    return {
      ...e,
      sharing_audience_control: i
    };
  }
  if (xT.matches(t)) {
    if (t.payload.folder.id !== e.id) return e;
    let i = t.payload.teamAccess;
    let n = !1;
    let r = !1;
    i === FTeamAccessPermissionType.TEAM_ACCESS_VIEW ? n = !0 : i === FTeamAccessPermissionType.TEAM_ACCESS_DISABLED && (r = !0);
    return {
      ...e,
      team_access: i,
      is_view_only: n,
      is_invite_only: r
    };
  }
  return e;
}, {
  shouldIgnoreAction: e => !(_$$yJ2.matches(e) || _$$iT.matches(e) || Q3.matches(e) || xT.matches(e))
});
function dM(e = Object.create(null), t) {
  if (!_$$nH.matches(t)) return e;
  {
    let i = {
      ...t.payload.styleSet
    };
    return Object.assign(Object.create(null), e, {
      [t.payload.id]: i
    });
  }
}
function dj(e = {
  isShown: !1
}, t) {
  return Ev.matches(t) ? {
    ...t.payload,
    isCreating: !1,
    isShown: !0
  } : FL.matches(t) ? {
    ...t.payload,
    isCreating: !0,
    isShown: !0
  } : _$$sw.matches(t) ? {
    isShown: !1
  } : e;
}
let dB = {
  activeId: V_,
  versions: [],
  docHasChanged: !0,
  loading: !1,
  isLoadingPage: !1,
  linkedVersion: void 0,
  compareId: void 0
};
function dV(e = dB, t) {
  if (VERSION_HISTORY_RESET.matches(t)) {
    return {
      ...dB,
      docHasChanged: e.docHasChanged,
      lastEdited: e.lastEdited,
      lastViewed: e.lastViewed
    };
  }
  if (VERSION_HISTORY_RESET_VERSIONS.matches(t)) {
    return {
      ...dB,
      activeId: e.activeId,
      docHasChanged: e.docHasChanged,
      linkedVersion: e.linkedVersion,
      compareId: e.compareId,
      lastEdited: e.lastEdited,
      lastViewed: e.lastViewed
    };
  }
  if (VERSION_HISTORY_APPEND.matches(t)) {
    let i = t.payload.history.versions;
    let n = t.payload.direction;
    if (n === PAGINATION_PREV && i.length === 1) {
      let t = i[0].id;
      if (e.versions.find(e => e.id === t)) {
        return {
          ...e,
          loading: !1
        };
      }
    }
    return {
      ...e,
      ...t.payload.history,
      versions: n === PAGINATION_NEXT ? e.versions.concat(i) : i.concat(e.versions),
      loading: !1,
      isLoadingPage: !1
    };
  }
  if (VERSION_HISTORY_PAGE_LOADING.matches(t)) {
    return {
      ...e,
      isLoadingPage: t.payload.isLoadingPage
    };
  }
  if (VERSION_HISTORY_LOADING.matches(t)) {
    return {
      ...e,
      loading: t.payload.loading
    };
  }
  if (UPDATE_FETCHED_PAGE_IDS.matches(t)) {
    return {
      ...e,
      fetchedPageIds: t.payload.fetchedPageIds
    };
  }
  if (VERSION_HISTORY_SET_LINKED_VERSION.matches(t)) {
    return {
      ...e,
      linkedVersion: t.payload.version,
      activeId: t.payload.version.id
    };
  } else if (VERSION_HISTORY_SET_ACTIVE.matches(t)) {
    let i = new Set();
    return {
      ...e,
      activeId: t.payload.id,
      compareId: void 0,
      fetchedPageIds: i
    };
  } else if (VERSION_HISTORY_COMPARE_CHANGES.matches(t)) {
    return {
      ...e,
      compareId: t.payload.fromVersionId
    };
  } else if (VERSION_HISTORY_SET_DOC_HAS_CHANGED.matches(t)) {
    return {
      ...e,
      docHasChanged: t.payload.status
    };
  } else if (_$$D2.matches(t)) {
    let {
      savepointID,
      label,
      description
    } = t.payload;
    return {
      ...e,
      ...(e.linkedVersion?.id === savepointID && {
        linkedVersion: {
          ...e.linkedVersion,
          label,
          description
        }
      }),
      versions: e.versions.map(e => e.id !== savepointID ? e : {
        ...e,
        label,
        description
      })
    };
  } else if (VERSION_HISTORY_SET_FILE_LAST_SEEN_AT.matches(t)) {
    let {
      lastEdited,
      lastViewed
    } = t.payload;
    return {
      ...e,
      lastEdited,
      lastViewed
    };
  }
  return e;
}
let dG = HY({
  activeCall: (e = {}, t) => {
    if (Zq.matches(t)) {
      let i = {
        ...e
      };
      i[t.payload.fileKey] = i[t.payload.fileKey];
      return i;
    }
    if (_$$rO.matches(t)) {
      let i = {
        ...e
      };
      i[t.payload.fileKey] = !0;
      return i;
    }
    if (_$$oI.matches(t) && t.payload.fileKey in e) {
      let i = {
        ...e
      };
      i[t.payload.fileKey] = !1;
      return i;
    }
    if (_$$a3.matches(t)) {
      let i = {
        ...e
      };
      delete i[t.payload.fileKey];
      return i;
    }
    return e;
  },
  showWidget: (e = !1, t) => Pp.matches(t) ? t.payload : e,
  showWidgetParticipantList: (e = !1, t) => _$$yF.matches(t) ? t.payload : e,
  userIdsInCallFromProvider: (e = [], t) => _$$cb.matches(t) ? t.payload : e,
  voiceUsersById: (e = {}, t) => {
    if (LV.matches(t)) {
      let i = t.payload.reduce((e, t) => ({
        ...e,
        [t.userID]: t
      }), {});
      return {
        ...e,
        ...i
      };
    }
    return e;
  },
  snapWidget: (e = !1, t) => jT.matches(t) ? !e : e,
  showCaptions: (e = !1, t) => _$$t3.matches(t) ? t.payload : e,
  captionsInstallProgress: (e = 0, t) => Kh.matches(t) ? t.payload : e
});
let dW = {
  query: '',
  filters: {},
  scope: PageViewMode.ACTIVE_PAGE,
  mode: EditAction.FIND
};
function dK(e, t) {
  if (!e || _$$cL5.matches(t)) return dW;
  if (NY.matches(t)) {
    return {
      ...e,
      query: t.payload
    };
  }
  if (_$$DI.matches(t)) {
    let i;
    e.filters[t.payload] ? (i = {
      ...e.filters
    }, delete i[t.payload]) : i = {
      ...e.filters,
      [t.payload]: !0
    };
    return {
      ...e,
      filters: i
    };
  }
  if (zx.matches(t)) {
    let i = 0;
    for (let t of _$$b5) {
      if (e.filters[t] && ++i, i > 1) break;
    }
    let n = !e.filters[t.payload] || i > 1;
    let r = dY(e.filters);
    n && (r[t.payload] = !0);
    return {
      ...e,
      filters: r
    };
  }
  if (_$$dY.matches(t)) {
    let t = dY(e.filters);
    return {
      ...e,
      filters: t
    };
  }
  if (V2.matches(t)) {
    return {
      ...e,
      scope: t.payload
    };
  }
  if (_$$sV.matches(t)) {
    return {
      ...e,
      mode: t.payload
    };
  }
  return e;
}
function dY(e) {
  let t = {};
  for (let i of _V) e[i] && (t[i] = !0);
  return t;
}
let dq = createActionCreator('COLOR_PICKER_SELECT_SWATCH_SET');
let dZ = {
  stylesExpanded: !1,
  viewMode: _$$nE.GRID,
  selectedSwatchSetId: EU
};
function dX(e, t) {
  return e ? dq.matches(t) ? (debug(t.payload.swatchId !== '', 'selectedSwatchSetId must be a valid swatch set ID'), {
    ...e,
    selectedSwatchSetId: t.payload.swatchId
  }) : e : dZ;
}
function dJ(e = Object.create(null), t) {
  if (_$$j2.matches(t)) {
    let i = {
      ...e.checked
    };
    for (let e of t.payload.items) {
      let t = e.itemID;
      i[t] == null && (i[t] = !0);
    }
    return {
      items: t.payload.items,
      frames: t.payload.frames,
      checked: i
    };
  }
  if (!_$$G2.matches(t)) return e;
  {
    let i = {
      ...e.checked
    };
    i[t.payload.itemID] = t.payload.checked;
    return {
      ...e,
      checked: i
    };
  }
}
let d1 = 'music-standalone-volume';
let d2 = () => BrowserInfo.isIpad ? 30 : getStorage().get(d1);
let d5 = () => ({
  music: {
    musicMessageID: 0,
    selectedSongID: '',
    isPaused: !0,
    timeOrigin: 0,
    lastReceivedSongTimestampMs: 0,
    isStopped: !0
  },
  modalState: 'original',
  volume: d2(),
  isMuted: !1,
  activeSongs: [],
  allSongs: [],
  playerInstance: null
});
function d4(e = d5(), t) {
  let i = (e.music?.musicMessageID || 0) + 1;
  if (HS.matches(t) && (i = t.payload.musicMessageID), V9.matches(t) || HS.matches(t)) {
    let {
      selectedSongID,
      isPaused,
      lastReceivedSongTimestampMs,
      isStopped
    } = t.payload;
    return {
      ...e,
      music: {
        musicMessageID: i,
        selectedSongID,
        isPaused,
        timeOrigin: performance.now(),
        lastReceivedSongTimestampMs,
        isStopped
      }
    };
  }
  if (Ox.matches(t)) {
    let i = t.payload.state;
    return {
      ...e,
      modalState: i
    };
  }
  if (UX.matches(t)) {
    let i = P0(t.payload);
    return {
      ...e,
      activeSongs: i
    };
  }
  if (_$$oI2.matches(t)) {
    let i = e.activeSongs.find(e => e.song_id === t.payload.selectedSongID);
    if (e.music) {
      return {
        ...e,
        music: {
          ...e.music,
          lastReceivedSongTimestampMs: i?.start_at_ms || 0,
          selectedSongID: t.payload.selectedSongID
        }
      };
    }
  } else if (WA.matches(t)) {
    return d5();
  } else if (_$$iy.matches(t)) {
    return {
      ...e,
      isMuted: t.payload.isMuted
    };
  } else if (wk.matches(t)) {
    return {
      ...e,
      playerInstance: t.payload
    };
  } else if (CE.matches(t)) {
    let i = e.volume;
    i = t.payload > 100 ? 100 : t.payload < 0 ? 0 : Math.floor(t.payload);
    getStorage().set(d1, t.payload);
    return {
      ...e,
      volume: i
    };
  } else if (_$$he.matches(t)) {
    if (e.music && t.payload.musicStartTimeMs) {
      return {
        ...e,
        music: {
          ...e.music,
          isPaused: !1,
          isStopped: !1,
          timeOrigin: performance.now(),
          lastReceivedSongTimestampMs: t.payload.musicStartTimeMs
        }
      };
    }
  } else if (Ir.matches(t) && e.music) {
    return {
      ...e,
      music: {
        ...e.music,
        isPaused: !1
      }
    };
  }
  return e;
}
let d3 = 'timer-audio-enabled';
let d6 = 'timer-and-music-volume';
let d7 = () => BrowserInfo.isIpad ? 30 : getStorage().get(d6);
let d8 = () => !!BrowserInfo.isIpad || !1 !== getStorage().get(d3);
let d9 = () => ({
  modalState: 'original',
  audioEnabled: d8(),
  time: null,
  notification: null,
  setBy: '',
  selectedSongID: '',
  activeSongs: [],
  volume: d7(),
  musicStartTimeMs: 0,
  isMuted: !1,
  musicPlayer: null,
  startChimePlayed: null
});
let ce = ({
  state: e,
  payload: t,
  notification: i,
  timerID: n,
  setBy: r
}) => {
  let {
    timeRemainingMs,
    isPaused,
    totalTimeMs,
    songID,
    lastReceivedSongTimestampMs
  } = t;
  let c = e.modalState;
  (c === 'original' && timeRemainingMs > 0 || timeRemainingMs > 0 && timeRemainingMs === totalTimeMs && !isPaused) && (c = 'open');
  return {
    ...e,
    notification: i,
    modalState: c,
    setBy: r,
    selectedSongID: songID,
    time: {
      totalTimeMs,
      timeRemainingMs,
      isPaused,
      timeOrigin: performance.now(),
      timerID: n,
      lastReceivedSongTimestampMs
    }
  };
};
let ct = (e, t) => (getStorage().set(d3, t), {
  ...e,
  audioEnabled: t
});
let ci = (e, t) => e.time && t.state === 'open' && !e.time.isPaused && performance.now() - e.time.timeOrigin > e.time.timeRemainingMs + 100 ? {
  ...e,
  time: {
    totalTimeMs: 0,
    timeRemainingMs: 0,
    isPaused: !0,
    timeOrigin: performance.now(),
    timerID: e.time?.timerID,
    lastReceivedSongTimestampMs: 0
  },
  selectedSongID: '',
  modalState: t.state
} : {
  ...e,
  modalState: t.state
};
let cn = (e, t) => {
  let i;
  i = t > 100 ? 100 : t < 0 ? 0 : Math.floor(t);
  getStorage().set(d6, t);
  return {
    ...e,
    volume: i
  };
};
let cr = (e, t) => e.time ? {
  ...e,
  time: {
    ...e.time,
    lastReceivedSongTimestampMs: t.musicStartTimeMs
  },
  musicStartTimeMs: t.musicStartTimeMs,
  selectedSongID: t.selectedSongID
} : {
  ...e,
  musicStartTimeMs: t.musicStartTimeMs,
  selectedSongID: t.selectedSongID
};
let ca = () => d9();
let cs = (e, t) => ({
  ...e,
  startChimePlayed: t
});
let co = (e, t, i) => t.musicStartTimeMs != null ? {
  ...e,
  time: {
    isPaused: !1,
    timeRemainingMs: t.totalTimeMs,
    totalTimeMs: t.totalTimeMs,
    lastReceivedSongTimestampMs: t.musicStartTimeMs,
    timeOrigin: performance.now(),
    timerID: i
  }
} : e;
let cl = e => e.time ? {
  ...e,
  time: {
    ...e.time,
    isPaused: !1
  }
} : e;
function cd(e = d9(), t) {
  let i = (e.time?.timerID || 0) + 1;
  let n = e.setBy;
  if (_$$e4.matches(t) && (i = t.payload.timerID, n = t.payload.setBy), _$$e4.matches(t) || _$$h5.matches(t)) {
    let r = _$$e4.matches(t) ? e.notification : null;
    return ce({
      state: e,
      payload: t.payload,
      notification: r,
      timerID: i,
      setBy: n
    });
  }
  if (OC.matches(t)) return ci(e, t.payload);
  if (_$$Pg.matches(t)) return ct(e, t.payload);
  if (NL.matches(t)) return cn(e, t.payload);
  if (Cs.matches(t)) return cr(e, t.payload);
  if (_$$ot.matches(t)) return ca();
  if (k1.matches(t)) {
    return cs(e, t.payload);
  } else if (bA.matches(t)) {
    return co(e, t.payload, i);
  } else if (I4.matches(t)) {
    return cl(e);
  } else if (ks.matches(t)) {
    return {
      ...e,
      isMuted: t.payload.isMuted
    };
  } else if (A3.matches(t)) {
    return {
      ...e,
      musicPlayer: t.payload
    };
  } else if (_$$lV.matches(t)) {
    return {
      ...e,
      notification: t.payload
    };
  } else if (UX.matches(t)) {
    let i = P0(t.payload);
    return {
      ...e,
      activeSongs: i
    };
  }
  return e;
}
let cc = {
  votingParams: {
    title: '',
    userVoteLimit: 3
  },
  lastInitiatedVotingSessionId: null,
  hasDismissedJoinConfirmation: !1,
  selectedVotePinId: null,
  hoveredInModalVotePinId: null
};
function cu(e = cc, t) {
  if (U6.matches(t)) {
    return {
      ...e,
      hasDismissedJoinConfirmation: !0
    };
  }
  if (_$$au.matches(t)) {
    return {
      ...e,
      hasDismissedJoinConfirmation: !1
    };
  }
  if (D6.matches(t)) {
    return {
      ...e,
      votingParams: {
        ...e.votingParams,
        title: t.payload
      }
    };
  }
  if (_$$hL.matches(t)) {
    return {
      ...e,
      votingParams: {
        ...e.votingParams,
        userVoteLimit: t.payload
      }
    };
  }
  if (_$$cx.matches(t)) {
    return {
      ...e,
      lastInitiatedVotingSessionId: t.payload.votingSessionId
    };
  }
  if (w9.matches(t)) {
    return {
      ...e,
      selectedVotePinId: t.payload.votePinId
    };
  }
  if (_$$rT.matches(t)) {
    return t.payload.votePinId && e.selectedVotePinId !== t.payload.votePinId ? e : {
      ...e,
      selectedVotePinId: null
    };
  } else if (Vw.matches(t)) {
    return {
      ...e,
      hoveredInModalVotePinId: t.payload.votePinId
    };
  } else if (gA.matches(t)) {
    return t.payload.votePinId && e.hoveredInModalVotePinId !== t.payload.votePinId ? e : {
      ...e,
      hoveredInModalVotePinId: null
    };
  } else if (_$$Ho.matches(t)) {
    return cc;
  } else {
    return e;
  }
}
let ch = {
  tab: null
};
function cg(e = ch, t) {
  return FU.matches(t) ? {
    ...e,
    ...t.payload
  } : e;
}
let cy = new _$$Y4();
let cE = HY({
  appModel: fj,
  selectionProperties(e = {}, t) {
    if (_$$Ts.matches(t)) return Object.create(null);
    if (_$$p3.matches(t) && t.payload.selectionProperties) {
      let i = t.payload.selectionProperties;
      let n = i.message;
      if (n == null && isEmptyObject(i.derivedProperties.changes) && isEmptyObject(i.derivedProperties.mixed)) return e;
      let r = Object.assign(Object.create(null), e);
      if (n != null && n.type === 'NODE_CHANGES' && n.nodeChanges) {
        for (let e of n.nodeChanges) {
          let t = e.guid ? e.guid.localID : null;
          for (let i in e) {
            if (i !== 'guid') {
              switch (t === IMixedValues.MIXED_VALUES_FIRST && (r[i] = createMixedArray()), t) {
                case IMixedValues.PRESENT:
                  r[i] = e[i];
                  break;
                case IMixedValues.MIXED:
                  r[i] = MIXED_MARKER;
                  break;
                case IMixedValues.MIXED_VALUES_FIRST:
                case IMixedValues.MIXED_VALUES_NEXT:
                  r[i].push(e[i]);
                  break;
                default:
                  r[i] = void 0;
              }
            }
          }
        }
      }
      for (let e in i.derivedProperties.changes) r[e] = i.derivedProperties.changes[e] ?? void 0;
      for (let e in i.derivedProperties.mixed) r[e] = MIXED_MARKER;
      return r;
    }
    return e;
  },
  selectedStyleProperties(e = {}, t) {
    if (fk.matches(t)) {
      let i = t.payload.selectedStyleProperties || {};
      return areSessionLocalIDsEqual(i.guid, e.guid) ? {
        ...i,
        url: e.url
      } : i;
    }
    return fy.matches(t) ? {
      ...e,
      url: t.payload.selectedStyleThumbnailURL
    } : e;
  },
  sceneGraph(e = cy, t) {
    return _$$Ts.matches(t) || _$$a4.matches(t) ? (X0(), cy) : _$$p3.matches(t) && t.payload.invalidateSceneGraph ? (WR(), new SingletonSceneGraph()) : e;
  },
  sceneGraphSelection: bp,
  objectsPanelRowRebuildCounter(e = 0, t) {
    return _$$p3.matches(t) && t.payload.invalidateSceneGraph && t.payload.invalidateSceneGraph.rebuildRows ? e + 1 : e;
  },
  selectionPaints(e = {
    paints: [],
    styles: [],
    paintsDirectlyOnSingleNode: [],
    stylesDirectlyOnSingleNode: [],
    emptyDueToLimitExceeded: !1,
    forceUpdateForUndo: !1
  }, t) {
    return _$$QA2.matches(t) ? {
      ...e,
      paints: t.payload,
      emptyDueToLimitExceeded: !1
    } : Lh.matches(t) ? {
      ...e,
      styles: t.payload,
      emptyDueToLimitExceeded: !1
    } : _$$n4.matches(t) ? {
      ...e,
      paintsDirectlyOnSingleNode: t.payload,
      emptyDueToLimitExceeded: !1
    } : _$$uQ.matches(t) ? {
      ...e,
      stylesDirectlyOnSingleNode: t.payload,
      emptyDueToLimitExceeded: !1
    } : Mc.matches(t) ? {
      paints: [],
      styles: [],
      paintsDirectlyOnSingleNode: [],
      stylesDirectlyOnSingleNode: [],
      emptyDueToLimitExceeded: !0,
      forceUpdateForUndo: !1
    } : Xp.matches(t) ? {
      ...e,
      forceUpdateForUndo: t.payload
    } : e;
  }
});
let cw = {
  insertedTextNodeId: null
};
function cC(e, t) {
  return e ? _$$E8.matches(t) ? {
    ...e,
    insertedTextNodeId: t.payload.nodeId
  } : e : cw;
}
let ck = 'usedKeyboardShortcuts';
let cR = {};
if (localStorageRef) {
  let e = localStorageRef.getItem(ck);
  try {
    (cR = e && JSON.parse(e) || {})['toggle-bold'] = (cR['text-toggle-bold'] || 0) + (cR['toggle-bold'] || 0);
  } catch (e) {}
}
function cN(e = cR, t) {
  if (_$$yu.matches(t)) {
    let i;
    let n = t.payload.key;
    i = n in e ? {
      ...e,
      [n]: e[n] + 1
    } : {
      ...e,
      [n]: 1
    };
    localStorageRef && localStorageRef.setItem(ck, JSON.stringify(i));
    return i;
  }
  return e;
}
function cP(e = !1, t) {
  return !_$$Ts.matches(t) && (!!vg.matches(t) || !Wk.matches(t) && e);
}
function cO(e = null, t) {
  return _$$Ts.matches(t) ? function (e = {}) {
    let t = getInitialOptions().editing_file;
    if (!t) return null;
    let i = t.folder ? {
      ...FileCreationPermissionsGenerator.disabled(),
      ...t.folder
    } : null;
    let n = getInitialOptions().frame_context;
    return {
      ...setupFileObject(t, {
        folder: i,
        team: t.team,
        repo: t.file_repo,
        org: t.org,
        teamUser: t.team_user,
        orgUser: t.org_user,
        sourceFile: t.source_file ? {
          ...t.source_file,
          can_manage: !0,
          can_view: !0
        } : null,
        can_delete: t.can_manage,
        can_edit: n?.type !== 'integration' && t.can_edit,
        can_export: n?.type !== 'integration' && t.can_export,
        can_edit_canvas: n?.type !== 'integration' && t.can_edit_canvas,
        can_access_dev_mode_entry_point: n?.type !== 'integration' && t.can_access_dev_mode_entry_point,
        can_access_full_dev_mode: n?.type !== 'integration' && t.can_access_full_dev_mode,
        can_manage: t.can_manage,
        can_view: t.can_view,
        hasEduGracePeriod: !!t.edu_grace_period,
        isFavorited: !!t?.is_favorited
      }),
      ...e
    };
  }() : _$$ho2.matches(t) ? t.payload.file : OB.matches(t) ? e != null && e.key === t.payload.file.key ? e : t.payload.file : _$$a4.matches(t) ? null : UC.matches(t) ? {
    ...t.payload.openFile,
    name: t.payload.openFile._name || 'Untitled'
  } : e;
}
function cD(e = !1, t) {
  return !(_$$Ts.matches(t) || _$$ho2.matches(t)) && !_$$a4.matches(t) && (UC.matches(t) && !!t.payload.isLiveGraphSync || e);
}
function cL(e = !1, t) {
  return !_$$a4.matches(t) && (!!_$$o8.matches(t) || e);
}
function cF(e = [], t) {
  return _$$o7.matches(t) ? t.payload : e;
}
function cM(e = null, t) {
  return _$$Ts.matches(t) ? Ob : XQ.matches(t) ? t.payload.fileVersion : e;
}
function cj(e = !1, t) {
  return kP.matches(t) ? t.payload.needsUpgrade : e;
}
function cU(e = {
  mode: UIVisibilitySetting.OFF,
  type: _$$lF2.BAR
}, t) {
  let i = e;
  _$$Ts.matches(t) ? i = {
    mode: getInitialOptions().editing_file ? UIVisibilitySetting.HIDE_UI : UIVisibilitySetting.OFF
  } : HO.matches(t) ? i = {
    mode: t.payload.progressBarMode
  } : _$$ho2.matches(t) ? i = {
    mode: UIVisibilitySetting.HIDE_UI
  } : _$$o8.matches(t) && e.mode !== UIVisibilitySetting.ON_AND_LOCKED ? i = {
    mode: UIVisibilitySetting.OFF
  } : Y6.matches(t) && (i = {
    mode: t.payload.mode,
    type: t.payload.type
  });
  i !== e && fullscreenValue.isReady() && Fullscreen.showingProgressBar(i.mode);
  return i;
}
function cB(e = !1, t) {
  if (HO.matches(t)) {
    if (t.payload.openNewFileIn === _$$ai.SAME_TAB) return !1;
  } else if (_$$Ts.matches(t) || _$$ho2.matches(t) || Qm.matches(t) || _$$o8.matches(t)) {
    return !1;
  } else if (yv.matches(t)) {
    return !0;
  }
  return e;
}
function cV(e = _$$kF.NONE, t) {
  return _$$aK.matches(t) ? t.payload : Z1.matches(t) ? _$$kF.NONE : e;
}
function cG(e = null, t) {
  return _$$Ts.matches(t) ? null : _$$v5.matches(t) ? t.payload : e;
}
let cz = {
  sessionID: -1,
  observingSessionID: -1,
  presenterSessionID: null,
  followerCount: 0,
  allUsers: [],
  sessionNominatedByCurrentUser: null,
  sessionsNominatingCurrentUser: []
};
function cH(e = cz, t) {
  return _$$Ts.matches(t) || bO.matches(t) ? cz : UM.matches(t) ? t.payload : Z_.matches(t) ? {
    ...e,
    observingSessionID: -1
  } : e;
}
function cW(e = !1, t) {
  return !!_$$il.matches(t) || !D9.matches(t) && e;
}
function cK(e = !1, t) {
  return !!_$$re.matches(t) || !CN.matches(t) && e;
}
function cY(e = !1, t) {
  return !!JM.matches(t) || e;
}
function cq(e, t) {
  return e == null ? {
    activeTab: UserInterfaceElements.LAYERS,
    shouldFocusSearchBar: !1
  } : FP.matches(t) ? (t.payload.persist && _$$Cp(t.payload.tab), {
    ...e,
    activeTab: t.payload.tab,
    shouldFocusSearchBar: t.payload.shouldFocusSearchBar ?? void 0
  }) : e;
}
function c$(e, t) {
  return e == null ? 'library' : EG.matches(t) ? t.payload.toolType : e;
}
function cZ(e = !1, t) {
  return qC.matches(t) ? t.payload.open : e;
}
function cX(e = !1, t) {
  return !!_$$q4.matches(t) || !_$$l0.matches(t) && e;
}
function cQ(e = !1, t) {
  return _$$lr.matches(t) ? t.payload.open : e;
}
function cJ(e = !1, t) {
  return Ji.matches(t) ? t.payload.isActive : e;
}
let c0 = 'emoji-wheel-last-wheel-type';
function c1() {
  return getLocalStorage()?.getItem(c0) || 'REACTION1';
}
function c2(e = {
  type: 'NONE',
  wheelType: c1()
}, t) {
  let i = ((e = {
    type: 'NONE',
    wheelType: c1()
  }, t) => {
    if (_$$V4.matches(t)) {
      let i = e.wheelType;
      let n = e.type;
      if (t.payload.wheelType) {
        i = t.payload.wheelType;
        n = 'WHEEL';
      } else if (n === 'WHEEL') {
        switch (i) {
          case 'REACTION1':
            i = 'STAMP1';
            break;
          case 'STAMP1':
          case 'REACTION2':
            n = 'NONE';
            break;
          case 'STAMP2':
            i = 'REACTION2';
        }
      } else {
        n = 'WHEEL';
        i === 'REACTION2' && (i = 'REACTION1');
        i === 'STAMP1' && (i = 'STAMP2');
      }
      n === 'WHEEL' && t.payload.isReadonly ? (i = 'REACTION1', e.type === 'WHEEL' && (n = 'NONE')) : n === 'WHEEL' && t.payload.isJoinedToActiveVotingSession && (i = 'STAMP1');
      getLocalStorage()?.setItem(c0, i);
      return {
        ...t.payload,
        openedViaHover: t.payload.openedViaHover ?? !1,
        type: n,
        wheelType: i
      };
    }
    return PU.matches(t) ? {
      type: 'REACTING_OR_CHATTING',
      wheelType: e.wheelType,
      isChatting: e.type === 'REACTING_OR_CHATTING' && e.isChatting,
      imageUrl: t.payload.imageUrl,
      name: t.payload.name,
      viewportPosition: t.payload.position
    } : _$$mu.matches(t) && e.type === 'REACTING_OR_CHATTING' ? e.isChatting ? {
      ...e,
      imageUrl: null
    } : {
      type: 'NONE',
      wheelType: e.wheelType
    } : yc.matches(t) ? {
      type: 'REACTING_OR_CHATTING',
      wheelType: e.wheelType,
      imageUrl: e.type === 'REACTING_OR_CHATTING' ? e.imageUrl : null,
      name: e.type === 'REACTING_OR_CHATTING' ? e.name : null,
      viewportPosition: t.payload.position,
      isChatting: !0
    } : K6.matches(t) ? {
      type: 'NONE',
      wheelType: e.wheelType
    } : _$$sm.matches(t) && e.type === 'WHEEL' ? {
      ...e,
      viewportX: t.payload.viewportX,
      viewportY: t.payload.viewportY
    } : e;
  })(e, t);
  zw?.setIsCurrentUserChatting(!!i.isChatting);
  return i;
}
function c5(e = null, t) {
  return Gm.matches(t) ? t.payload : e;
}
function c4(e = null, t) {
  return R5.matches(t) ? t.payload : _$$lz.matches(t) ? e && e.data ? {
    ...e,
    position: t.payload.position,
    size: t.payload.size
  } : null : e;
}
function c3(e = null, t) {
  return Jt.matches(t) ? t.payload : _$$pj.matches(t) ? e && e.data ? {
    ...e,
    position: t.payload.position,
    size: t.payload.size
  } : null : e;
}
function c6(e = [], t) {
  if (_$$PQ.matches(t)) return t.payload;
  if (Rw.matches(t)) {
    let {
      currentDisplayName,
      newCommand
    } = t.payload;
    return e.map(e => e.displayName === currentDisplayName ? newCommand : e);
  }
  return e;
}
function c7(e = {
  count: 0,
  startTime: null,
  waitTime: 0,
  totalImagesToDownload: 0,
  remainingImagesToDownload: 0,
  downloadSkipped: !1,
  attemptId: ''
}, t) {
  if (_$$Dc.matches(t)) {
    let t = Date.now();
    let i = generateUUIDv4();
    let n = e.startTime === null ? e.waitTime : e.waitTime + (t - e.startTime);
    return {
      count: e.count + 1,
      startTime: t,
      waitTime: n,
      totalImagesToDownload: 0,
      remainingImagesToDownload: 0,
      downloadSkipped: !1,
      attemptId: i
    };
  }
  if (_$$CL.matches(t)) {
    return {
      ...e,
      totalImagesToDownload: Math.max(e.totalImagesToDownload, t.payload.pendingImageDownload),
      remainingImagesToDownload: t.payload.pendingImageDownload
    };
  }
  let i = Mt.matches(t);
  let n = _$$hf.matches(t);
  if (i || n && t.payload.skipped) {
    let i = e.startTime !== null ? e.waitTime + Date.now() - e.startTime : 0;
    return {
      count: e.count + 1,
      startTime: null,
      waitTime: i,
      totalImagesToDownload: 0,
      remainingImagesToDownload: 0,
      downloadSkipped: !!t.payload?.skipped,
      attemptId: e.attemptId
    };
  }
  return e;
}
function c8(e = {}, t) {
  return _$$oI3.matches(t) ? t.payload : e;
}
let c9 = 'style-picker-list-layout';
let ue = localStorageRef?.getItem(c9);
let ut = ue != null && ue === 'true';
function ui(e = ut, t) {
  return Kx.matches(t) ? (localStorageRef?.setItem(c9, t.payload.isListLayout.toString()), t.payload.isListLayout) : e;
}
let un = 'instance-swap-picker-list-layout';
let ur = localStorageRef?.getItem(un) ?? null;
let ua = ur == null || ur === 'true';
function us(e = ua, t) {
  return fG.matches(t) ? (localStorageRef?.setItem(un, t.payload.isListLayout.toString()), t.payload.isListLayout) : e;
}
let uo = 'preferred-values-picker-list-layout';
let ul = localStorageRef?.getItem(uo) ?? null;
let ud = ul == null || ul === 'true';
function uc(e = ud, t) {
  return U8.matches(t) ? (localStorageRef?.setItem(uo, t.payload.isListLayout.toString()), t.payload.isListLayout) : e;
}
function uu(e = null, t) {
  return Bs.matches(t) ? t.payload : e;
}
function up(e = null, t) {
  return _$$n3.matches(t) ? t.payload.propDefId : e;
}
function um(e = !1, t) {
  return _$$N7.matches(t) ? t.payload : e;
}
let uA = HY({
  domains(e = [], t) {
    return Au.matches(t) ? t.payload.domains : e;
  },
  isFetching(e = !1, t) {
    return h8.matches(t) ? t.payload.fetching : e;
  },
  fetchedAt(e = null, t) {
    return Au.matches(t) ? t.payload.fetched_at : e;
  }
});
let ub = uy;
function uv(e = {}, t) {
  if (_$$hG2.matches(t)) {
    let i = {
      ...e
    };
    for (let n of t.payload.orgUsers || []) {
      let t = e[n.user_id];
      t ? i[n.user_id] = {
        ...ub()(t, 'last_edit', 'last_seen', 'active_seat_type', 'active_seat_upgrade_method', 'active_seat_upgrade_date', 'scim_seat_type'),
        ...n
      } : i[n.user_id] = n;
    }
    return i;
  }
  return e;
}
function uI(e) {
  return function (t = {}, i) {
    if (_$$Qv2.matches(i)) {
      let e = {
        ...t
      };
      for (let t of (i.payload.org_users || []).concat(i.payload.org_drafts_owners || [])) {
        e[t.org_id] || (e[t.org_id] = {});
        e[t.org_id][t.user_id] = {
          ...e[t.org_id][t.user_id],
          ...t
        };
      }
      return e;
    }
    if (_$$os2.matches(i)) {
      let e = {
        ...t
      };
      for (let t of i.payload.org_users) {
        e[t.org_id] || (e[t.org_id] = {});
        e[t.org_id][t.user_id] = {
          ...e[t.org_id][t.user_id],
          ...t
        };
      }
      return rv()(t, e) ? t : e;
    }
    if (i.payload && typeof i.payload == 'object' && ('orgUser' in i.payload || 'orgId' in i.payload)) {
      let n = i.payload && (i.payload.orgUser && i.payload.orgUser.org_id || i.payload.orgId);
      if (!n) return t;
      let r = e(t[n], i);
      if (r !== t[n]) {
        let e = {
          ...t
        };
        e[n] = r;
        return e;
      }
    }
    return t;
  };
}
uI(uv);
let ux = _$$oB2((e, t) => {
  return _$$yJ4.matches(t) && e && t.payload && t.payload.orgUser && e.id === t.payload.orgUser.id ? {
    ...e,
    description: t.payload.orgUser.description || e.description
  } : e;
}, {
  shouldIgnoreAction: e => !_$$yJ4.matches(e)
});
let uS = uI((e = {}, t) => {
  if (_$$uo4.matches(t)) {
    let i = {
      ...e
    };
    let n = new Set(t.payload.params.org_user_ids);
    for (let r in e) {
      let a = e[r];
      n.has(a.id) && (i[r] = {
        ...a,
        ..._$$iO(t.payload.params.paid_statuses ?? {}, t.payload.seatTypeProducts ?? {}),
        permission: t.payload.params.permission || a.permission,
        design_paid_status: t.payload.params.design_paid_status || a.design_paid_status,
        whiteboard_paid_status: t.payload.params.whiteboard_paid_status || a.whiteboard_paid_status,
        account_type_changed_at: new Date().toISOString()
      });
    }
    return i;
  }
  if (_$$yJ4.matches(t)) {
    let i = {
      ...e
    };
    for (let n in e) {
      let r = e[n];
      t.payload.orgUser.id === r.id && (i[n] = {
        ...r,
        ...t.payload.orgUser
      });
    }
    return i;
  }
  if (_$$hZ.matches(t)) return uv(e, t);
  if (bu.matches(t)) {
    let i = {
      ...e
    };
    let n = new Set(t.payload.params.org_user_ids);
    for (let t in e) {
      let r = e[t];
      n.has(r.id) && delete i[t];
    }
    return i;
  }
  return Ql(e, t, ux);
});
let uw = {};
let uP = new _$$cZ2('PUBLISHED_PLUGINS').binding;
let uD = Oi((e = {}, t) => {
  if (Vx.matches(t)) {
    let i = {
      ...e
    };
    for (let n of t.payload) {
      i[n.id] = I$({
        ...e[n.id],
        ...n,
        versions: _$$ax(e[n.id], n),
        plugin_publishers: n.plugin_publishers ?? e[n.id]?.plugin_publishers
      });
    }
    return i;
  }
  if (_$$l8.matches(t)) {
    let i = {
      ...e
    };
    for (let e of t.payload) delete i[e.id];
    return i;
  }
  if (_$$tG2.matches(t)) {
    let {
      resourceType,
      resourceId
    } = t.payload;
    if (resourceType === _$$vt.PLUGIN) {
      let t = {
        ...e
      };
      let i = t[resourceId];
      i && (t[resourceId] = {
        ...i,
        comment_count: i.comment_count + 1
      });
      return t;
    }
  } else if (Zv.matches(t)) {
    let {
      resourceType,
      resourceId,
      comments
    } = t.payload;
    if (resourceType === _$$vt.PLUGIN) {
      let t = {
        ...e
      };
      let i = {
        ...t[resourceId]
      };
      i && (i.comment_count -= comments.length);
      t[resourceId] = i;
      return t;
    }
  } else if (HF.matches(t)) {
    let {
      resourceType,
      resourceId
    } = t.payload;
    if (resourceType === _$$vt.PLUGIN) {
      let t = {
        ...e
      };
      let i = t[resourceId];
      i && (t[resourceId] = {
        ...i,
        comment_count: i.comment_count - 1
      });
      return t;
    }
  } else if (_$$R5.matches(t)) {
    let i = {
      ...e
    };
    let n = i[t.payload.resourceId];
    if (n) {
      i[t.payload.resourceId] = {
        ...n,
        current_user_first_ran_at: t.payload.userFirstRanAt
      };
      return i;
    }
  }
  return e;
}, uP.reducer);
let uL = oH(KJ);
let uM = {
  showProgressBar: !0,
  showComments: !1,
  showOnlyParticipatingComments: !1,
  showResolvedComments: !1,
  pages: [],
  currentPageId: null,
  backgroundColor: _$$o,
  isReconnecting: !1,
  isFooterVisible: !1
};
let uj = {
  prototype(e = uM, t) {
    if (_$$cL.matches(t)) {
      return {
        ...uM
      };
    }
    if (_b.matches(t)) {
      return {
        ...e,
        showComments: !0
      };
    }
    if (BZ.matches(t)) {
      return {
        ...e,
        showComments: !1
      };
    }
    if (U3.matches(t)) {
      return {
        ...e,
        showResolvedComments: t.payload.showResolved
      };
    }
    if (RO.matches(t)) {
      return {
        ...e,
        showOnlyParticipatingComments: t.payload.showOnlyParticipating
      };
    }
    if (AF.matches(t)) {
      return {
        ...e,
        isReconnecting: t.payload.isReconnecting
      };
    }
    if ($9.matches(t)) {
      return {
        ...e,
        pages: t.payload.pages
      };
    } else if (_$$uh.matches(t)) {
      return {
        ...e,
        currentPageId: t.payload.currentPageId
      };
    } else if (Mo.matches(t)) {
      return {
        ...e,
        backgroundColor: t.payload.color
      };
    } else if (_$$ku.matches(t)) {
      return {
        ...e,
        showProgressBar: t.payload.showProgress
      };
    } else if (y3.matches(t)) {
      return {
        ...e,
        isFooterVisible: t.payload.isFooterVisible
      };
    }
    return e;
  }
};
let uB = HY({
  byId(e = {}, t) {
    if (_$$os.matches(t)) {
      let i = {
        ...e
      };
      t.payload.users.forEach(e => {
        i[e.id] = e;
      });
      return i;
    }
    if (_$$yJ9.matches(t)) {
      let {
        user
      } = t.payload;
      return {
        ...e,
        [user.id]: user
      };
    }
    if (_$$Z3.matches(t)) {
      let {
        users
      } = t.payload;
      return {
        ...e,
        ...users.reduce((e, t) => ({
          ...e,
          [t.id]: t
        }), {})
      };
    }
    if (_$$uW.matches(t)) {
      let {
        userIds
      } = t.payload;
      return {
        ...e,
        ...userIds.reduce((e, t) => ({
          ...e,
          [t]: void 0
        }), {})
      };
    }
    if (_$$yJ.matches(t)) {
      let i = t.payload.user.id;
      let n = e[i];
      if (n) {
        return {
          ...e,
          [i]: {
            ...n,
            ...t.payload.user
          }
        };
      }
    }
    return e;
  }
});
let uV = HY({
  subscriptions(e = {}, t) {
    if (_$$Ts.matches(t)) return {};
    if (iZ.matches(t)) {
      let i = t.payload;
      let n = null;
      for (let t of i) {
        e[t.channel] || (n || (n = {
          ...e
        }), n[t.channel] = !0);
      }
      return n || e;
    }
    if (i$.matches(t)) {
      let i = t.payload;
      let n = {
        ...e
      };
      delete n[i];
      return n;
    }
    return e;
  }
});
let uz = {
  uploadsRemaining: {},
  uploadsLaunched: 0,
  unsuccessfulUploads: [],
  successfulUploads: [],
  collisions: [],
  warnings: [],
  fontsToDelete: {},
  unsuccessfulDeletes: [],
  successfulDeletes: [],
  fontsByResourceId: {}
};
let uK = uW;
function u$(e, t) {
  for (let i in e) {
    for (let n in e[i]) {
      if (e[i][n].id === t) return e[i][n];
    }
  }
}
let uZ = new Xc('TEAM_USER', {}, {
  update: (e, t) => {
    let {
      instance
    } = t;
    let n = instance.team_id;
    let r = instance.user_id;
    let a = {
      ...e,
      [n]: {
        ...e[n]
      }
    };
    a[n][r] ? a[n][r] = _$$j3(a[n][r], instance) : a[n][r] = instance;
    return a;
  },
  tombstone: (e, t) => {
    let i = u$(e, t.id);
    if (!i) return e;
    let n = i.team_id;
    let r = i.user_id;
    let a = {
      ...e,
      [n]: {
        ...e[n]
      }
    };
    delete a[n][r];
    return a;
  },
  remoteUpdate: (e, t) => {
    let i = {
      ...e
    };
    for (let e in i) {
      i[e] = {
        ...i[e]
      };
    }
    for (let e in t.instances) {
      let n = t.instances[e];
      let r = n.team_id;
      let a = n.user_id;
      if (!r || !a) {
        reportError(_$$e.FRONTEND_PLATFORM, new Error('LiveStore received TeamUser with no team_id/user_id'), {
          tags: {
            teamUserId: e,
            teamId: r,
            userId: a
          }
        });
        continue;
      }
      i[r] || (i[r] = {});
      i[r][a] ? i[r][a] = _$$j3(i[r][a], n) : i[r][a] = n;
    }
    return i;
  },
  optimisticUpdate: (e, t) => {
    let i = {
      ...e
    };
    for (let e in i) {
      i[e] = {
        ...i[e]
      };
    }
    for (let e in t.updates) {
      let n = u$(i, e);
      if (!n) continue;
      let r = n.team_id;
      let a = n.user_id;
      let s = _$$H7(n, t.updates[e]);
      i[r] || (i[r] = {});
      i[r][a] = s;
    }
    return i;
  }
}, (e, t) => u$(e, t));
function uX(e, t, i) {
  let n = {
    ...e,
    [i]: {
      ...e[i]
    }
  };
  return t.reduce((e, t) => (e[t.team_id][t.user_id] = t, e), {
    ...n
  });
}
let uQ = Oi((e = {}, t) => {
  if (_$$pE.matches(t) || _$$yJ8.matches(t)) {
    let {
      teamId,
      teamUsers
    } = t.payload;
    return uX(e, teamUsers, teamId);
  }
  if (_$$m2.matches(t)) {
    let {
      teamId,
      teamUsers,
      paidStatus,
      paidStatusType
    } = t.payload;
    return uX(e, teamUsers.map(e => {
      let t = {};
      paidStatusType === TeamType.WHITEBOARD ? t.whiteboard_paid_status = paidStatus : t.design_paid_status = paidStatus;
      return {
        ...e,
        ...t
      };
    }), teamId);
  }
  if (Qv.matches(t)) {
    let {
      team_users
    } = t.payload;
    if (!team_users) return e;
    let n = uK()(team_users, e => e.team_id);
    let r = {
      ...e
    };
    for (let [e, t] of Object.entries(n)) r = uX(r, t, e);
    return r;
  }
  return e;
}, uZ.reducer);
let u0 = Oi((e = {}, t) => {
  if (Qv.matches(t)) {
    let i = {
      ...e
    };
    for (let e of t.payload.teams || []) i[e.id] = e;
    let n = getInitialOptions().editing_file;
    n?.team == null || i[n.team.id] || (i[n.team.id] = n.team);
    return i;
  }
  if (_$$bE2.matches(t)) {
    return {
      ...e,
      [t.payload.team.id]: t.payload.team
    };
  }
  if (_$$yH.matches(t)) {
    let i = {
      ...e
    };
    delete i[t.payload.team.id];
    return i;
  }
  if ($w.matches(t)) {
    let i = {
      ...e[t.payload.team.id],
      name: t.payload.name
    };
    if (e[t.payload.team.id]) {
      return {
        ...e,
        [t.payload.team.id]: i
      };
    }
  } else if (_$$aB.matches(t)) {
    let i = null;
    let n = null;
    t.payload.sharingAudienceControl === FPermissionLevelType.ORG_EDIT ? (i = FAccessLevelType.PUBLIC, n = FBasicPermissionType.EDIT) : t.payload.sharingAudienceControl === FPermissionLevelType.ORG_VIEW ? (i = FAccessLevelType.PUBLIC, n = FBasicPermissionType.VIEW) : t.payload.sharingAudienceControl === FPermissionLevelType.INVITE_ONLY && (t.payload.orgBrowsable ? i = FAccessLevelType.PRIVATE : t.payload.hidden && (i = FAccessLevelType.SECRET));
    let r = {
      ...e[t.payload.team.id],
      org_access: i,
      default_permission: n,
      sharing_audience_control: t.payload.sharingAudienceControl,
      org_browsable: t.payload.orgBrowsable,
      hidden: t.payload.hidden
    };
    if (e[t.payload.team.id]) {
      return {
        ...e,
        [t.payload.team.id]: r
      };
    }
  } else if (bQ.matches(t)) {
    let i = {
      ...e[t.payload.team.id],
      org_access: t.payload.orgAccess
    };
    if (e[t.payload.team.id]) {
      return {
        ...e,
        [t.payload.team.id]: i
      };
    }
  } else if (_$$n.matches(t)) {
    let i = {
      ...e[t.payload.team.id],
      default_permission: t.payload.defaultPermission
    };
    return {
      ...e,
      [i.id]: i
    };
  } else if (_$$uo2.matches(t)) {
    let i = {
      ...e
    };
    for (let n of t.payload.teams || []) {
      i[n.id] = {
        ...e[n.id],
        ...n
      };
    }
    return i;
  } else if ($I.matches(t)) {
    let i = e[t.payload.team.id];
    return {
      ...e,
      [t.payload.team.id]: {
        ...i,
        ...t.payload.team
      }
    };
  }
  return e;
}, _$$N8.reducer);
var u2 = (e => (e.REMOTE_WORK = 'remoteWork', e.ONBOARDING = 'onboarding', e.TEMPLATES_PICKER = 'templatesPicker', e))(u2 || {});
let u6 = {
  target: null,
  state: zr.NONE,
  position: _$$Zj.BELOW,
  timeoutID: null
};
let u9 = {
  showing: !1,
  pinned: _$$t9.NOT_PINNED,
  initialX: 0,
  initialY: 0,
  initialFdResourceTab: void 0,
  initialFdView: void 0,
  fdPreviewResource: void 0,
  previewResource: void 0,
  initialTab: void 0,
  scrollDevelopmentSectionIntoView: !1,
  initialSearch: void 0,
  initialSelectedCategory: void 0,
  sourceRect: void 0
};
let pi = 'local_user_analytics_data';
let pn = e => btoa(JSON.stringify(e));
let pr = e => JSON.parse(atob(e));
function pa(e) {
  let t = getCookieOrStorage();
  if (t) {
    try {
      let i = {};
      let n = t.get(pi);
      n && (i = pr(n));
      i = e(i);
      t.set(pi, pn(i));
      return i;
    } catch (t) {
      console.error(`Failed to perform action ${e.name}`, t);
    }
  }
}
let ps = () => pa(e => e);
window && (window.userAnalyticsDataTools = {
  setUserAnalyticsDataOverrides: (e, t) => pa(i => (i[e] = t, trackEventAnalytics('Set UserAnalyticsData Override', {
    userId: e
  }), i)),
  setCurrentUserAnalyticsDataOverrides: e => {
    let t = getInitialOptions().user_data?.id;
    return t ? pa(i => (i[t] = e, trackEventAnalytics('Set UserAnalyticsData Override', {
      currentUserId: t
    }), i)) : ps();
  },
  clearUserAnalyticsDataOverrides: e => pa(t => (delete t[e], t)),
  clearCurrentUserAnalyticsDataOverrides: () => {
    let e = getInitialOptions().user_data?.id;
    return e ? pa(t => (delete t[e], t)) : ps();
  },
  clearAllUserAnalyticsDataOverrides: () => pa(e => ({})),
  checkCurrentUserAnalyticsDataOverrides() {
    let e = getInitialOptions().user_data?.id;
    let t = ps();
    return e && t && t[e] ? t[e] : null;
  },
  checkAllUserAnalyticsDataOverrides: ps,
  printUserAnalyticsDataKeys: () => WZ
});
let pd = HY({
  hidingDowntimeNotif(e = _$$y6.noneHidden, t) {
    return _$$Z4.hideOngoingNotif.matches(t) ? _$$y6.ongoingHidden : _$$Z4.hideWarningNotif.matches(t) ? _$$y6.warningHidden : e;
  },
  notifMinutesRemaining(e = null, t) {
    return _$$Z4.onTick.matches(t) ? Math.floor((t.payload.payload.downtimeStartDate.getTime() - Date.now()) / 1e3 / 60) : e;
  },
  payload(e = null, t) {
    return _$$Z4.onTick.matches(t) ? t.payload.payload : e;
  },
  status(e = _$$A0.Finished, t) {
    if (_$$Z4.onTick.matches(t)) {
      let {
        payload,
        hostname,
        currentTimeMs
      } = t.payload;
      let r = _$$A0.Finished;
      if (payload && payload.renderOnHostname && payload.renderOnHostname !== hostname) return r;
      let {
        finished,
        downtimeStartDate,
        warningDurationMs,
        notifDurationMs
      } = t.payload.payload;
      if (!finished) {
        let e = downtimeStartDate.getTime();
        let t = currentTimeMs < e && e - currentTimeMs <= warningDurationMs;
        e <= currentTimeMs ? r = _$$A0.Ongoing : t ? r = _$$A0.Imminent : currentTimeMs < e && e - currentTimeMs <= notifDurationMs && !t && (r = _$$A0.Warning);
      }
      return r;
    }
    return e;
  }
});
var pp = (e => (e.DISABLED = '0', e.ENABLED = '1', e))(pp || {});
let pm = 'enable.screenreader';
function ph(e) {
  let t = e.serverStoredPreference || e.localStoredPreference;
  void 0 !== t && (e.enabled = t);
}
let pg = {
  autocomplete: _$$nx,
  contacts(e = {
    appData: {
      contactsFetched: !1
    },
    usersByEmail: {},
    users: []
  }, t) {
    if (_$$hZ2.matches(t)) {
      let i = {
        ...e,
        appData: {
          ...e.appData,
          contactsFetched: !0,
          fileKey: t.payload.fileKey
        },
        usersByEmail: {},
        users: []
      };
      if (t.payload.users != null) {
        for (let e of (i.users = t.payload.users, t.payload.users)) e.email && (i.usersByEmail[e.email] = e);
      }
      return i;
    }
    return _$$cL4.matches(t) ? {
      appData: {
        contactsFetched: !1
      },
      usersByEmail: {},
      users: []
    } : e;
  },
  dropdownShown(e = null, t) {
    return _$$ab.matches(t) ? t.payload : _$$oB.matches(t) ? null : _$$ho.matches(t) ? {
      ...e,
      ...t.payload,
      data: {
        ...e?.data,
        ...t.payload.data
      }
    } : e;
  },
  flashes(e = {}, t) {
    if (FlashActions.add.matches(t)) {
      return {
        ...e,
        [t.payload.id]: t.payload
      };
    }
    if (FlashActions.remove.matches(t)) {
      let i = {
        ...e
      };
      delete i[t.payload.id];
      return i;
    }
    return FlashActions.removeAll.matches(t) ? {} : e;
  },
  modalShown(e = null, t) {
    return (getFeatureFlags().datadog_rum_modal_shown_action && (showModal.matches(t) || popModalStack.matches(t) || hideModal.matches(t) || hideSpecificModal.matches(t) || updateModal.matches(t) || popPrevModal.matches(t)) && datadogRum?.addAction('modalAction', {
      action: t.type,
      modalType: t.payload?.type
    }), showModal.matches(t)) ? e ? {
      prevModal: e.optOutOfPrevModal ? e.prevModal : e,
      ...t.payload
    } : t.payload : popModalStack.matches(t) ? e && e.prevModal || null : hideModal.matches(t) ? null : hideSpecificModal.matches(t) ? e && t.payload.type === e.type ? null : e : updateModal.matches(t) && e ? {
      prevModal: e.prevModal,
      type: e.type,
      data: t.payload.data
    } : popPrevModal.matches(t) && e ? {
      ...e,
      prevModal: e.prevModal?.prevModal
    } : e;
  },
  progress(e = {}, t) {
    if (_$$h6.matches(t)) {
      return {
        ...e,
        [t.payload.key]: {
          progress: t.payload.progress,
          total: t.payload.total
        }
      };
    }
    if (_$$I3.matches(t)) {
      let i = {
        ...e
      };
      delete i[t.payload.key];
      return i;
    }
    return e;
  },
  visualBell(e = [], t) {
    if (VisualBellActions.enqueue.matches(t)) {
      let i = {
        ...t.payload,
        id: generateUUIDv4()
      };
      let n = [...e];
      if (i.type && e.length > 0 && e[e.length - 1].type === i.type) {
        let t = e[e.length - 1];
        t.message === i.message && t.interpolate?.nodes && i.interpolate?.nodes && (i.interpolate.nodes = [...t.interpolate.nodes, ...i.interpolate.nodes]);
        n.pop();
      }
      if (_$$R4(i) === 1 / 0) {
        n.push(i);
      } else {
        let e = n.length - 1;
        for (; e >= 0 && _$$R4(n[e]) === 1 / 0;) e--;
        n.splice(e + 1, 0, i);
      }
      if (isInteractionOrEvalMode() || getFalseValue()) {
        let e = oE.getInstance();
        e?.add(i);
      }
      return n;
    }
    if (VisualBellActions.dequeue.matches(t)) {
      return e.length === 0 ? e : t.payload.matchType || t.payload.matchTimeout || t.payload.shouldDequeueFunc ? e.filter(e => {
        if (e.type === t.payload.matchType) return !1;
        let i = _$$R4(e);
        return (t.payload.matchTimeout !== 'persistent' || i !== 1 / 0) && (t.payload.matchTimeout !== 'ephemeral' || i === 1 / 0) && (!t.payload.shouldDequeueFunc || !t.payload.shouldDequeueFunc(e));
      }) : e.slice(1);
    }
    if (VisualBellActions.clearAll.matches(t)) return [];
    if (VisualBellActions.clearAllExcept.matches(t)) {
      let i = t.payload;
      return e.filter(e => !!e.type && i.includes(e.type));
    }
    if (VisualBellActions.update.matches(t)) {
      let i = e.findIndex(e => e.id === t.payload.id);
      if (i !== -1) {
        let n = [...e];
        let r = {
          ...e[i],
          ...t.payload
        };
        t.payload.message ? delete r.messageComponentKey : t.payload.messageComponentKey && delete r.message;
        n[i] = r;
        return n;
      }
    }
    return e;
  },
  savedPublishDescription(e = '', t) {
    return De.matches(t) ? t.payload : e;
  },
  notifications(e = [], t) {
    return notificationActions.enqueueFront.matches(t) ? e.length > 0 && e[0].type == t.payload.notification.type ? [t.payload.notification, ...e.slice(1, e.length)] : [t.payload.notification, ...e] : notificationActions.enqueue.matches(t) ? e.length > 0 && e[e.length - 1].type == t.payload.notification.type ? [...e.slice(0, e.length - 1), t.payload.notification] : [...e, t.payload.notification] : notificationActions.dequeue.matches(t) ? void 0 != t.payload.type ? e.filter(e => e.type !== t.payload.type) : e.slice(1) : notificationActions.clearAll.matches(t) ? [] : e;
  },
  downtime: pd,
  blockedUILoadingIndicator(e = null, t) {
    return _$$o6.set.matches(t) ? t.payload : _$$o6.remove.matches(t) ? null : e;
  },
  teams: u0,
  authedUsers: oR,
  publicUsers: uB,
  authedProfilesById(e = oC, t) {
    if (_$$os2.matches(t)) {
      let e = {};
      t.payload.profiles.forEach(t => e[t.id] = t);
      return e;
    }
    return _$$HZ2.matches(t) ? {
      ...e,
      [t.payload.id]: t.payload
    } : L_.matches(t) ? t.payload.id in e ? {
      ...e,
      [t.payload.id]: {
        ...e[t.payload.id],
        ...t.payload
      }
    } : e : Nr.matches(t) ? Object.keys(e).reduce((i, n) => e[n].profile_handle === t.payload ? i : {
      ...i,
      [n]: e[n]
    }, {}) : e;
  },
  authedTeamsById(e = oT, t) {
    if (_$$os2.matches(t)) {
      let e = {};
      t.payload.teams.forEach(t => e[t.id] = t);
      return e;
    }
    if (RF.matches(t)) {
      let i = e[t.payload.team.id];
      return {
        ...e,
        [t.payload.team.id]: {
          ...i,
          ...t.payload.team
        }
      };
    }
    if (Nh.matches(t)) {
      let i = {
        ...e
      };
      delete i[t.payload.team.id];
      return i;
    }
    return e;
  },
  authedActiveCommunityProfile(e = null, t) {
    return _$$cR2.matches(t) ? t.payload : e;
  },
  teamAdminRolesForAuthedUsers(e = {}, t) {
    if (_$$os.matches(t)) {
      let e = {};
      t.payload.team_admin_roles_for_authed_users.forEach(t => {
        e[t.user_id] || (e[t.user_id] = []);
        e[t.user_id].push(t);
      });
      return e;
    }
    return e;
  },
  user: kQ,
  userFlags(e = {}, t) {
    if (_$$b.matches(t)) {
      let i = {
        ...e
      };
      let n = new Date();
      Object.keys(t.payload).forEach(e => {
        if (t.payload[e]) {
          let t = i[e];
          void 0 !== t ? t.updatedAt = n : i[e] = {
            id: `optimistic-id-${e}`,
            createdAt: n,
            updatedAt: n
          };
        } else {
          delete i[e];
        }
      });
      return i;
    }
    return _$$A6.matches(t) ? t.payload : e;
  },
  userAnalyticsData(e = window.INITIAL_OPTIONS.user_analytics_data || null, t) {
    return e;
  },
  userTeamFlags(e = {}, t) {
    if (Qv.matches(t)) {
      let i = {
        ...e
      };
      t.payload.user_team_flags && t.payload.user_team_flags.forEach(e => {
        i[e.team_id] = {
          ...i[e.team_id],
          [e.name]: {
            updatedAt: new Date(e.updated_at),
            createdAt: new Date(e.created_at)
          }
        };
      });
      return i;
    }
    if (_$$bE3.matches(t)) {
      let i = {
        ...e
      };
      let n = new Date();
      for (let e of t.payload.all_team_flags) {
        let t = e.flags;
        let r = e.team_id;
        Object.keys(t).forEach(e => {
          if (t[e]) {
            void 0 === i[r] && (i[r] = {});
            let t = i[r][e];
            void 0 !== t ? t.updatedAt = n : i[r][e] = {
              createdAt: n,
              updatedAt: n
            };
          } else {
            delete i[r]?.[e];
          }
        });
      }
      return i;
    }
    if (_$$hV3.matches(t)) {
      let i = e[t.payload.team_id];
      return {
        ...e,
        [t.payload.team_id]: {
          ...i,
          [t.payload.name]: {
            createdAt: new Date(t.payload.created_at),
            updatedAt: new Date(t.payload.updated_at)
          }
        }
      };
    }
    if (z9.matches(t) && e[t.payload.team_id]?.[t.payload.name]) {
      let i = {
        ...e
      };
      delete i[t.payload.team_id][t.payload.name];
      return i;
    }
    return e;
  },
  userEduGracePeriods(e = {}, t) {
    if (Qv.matches(t)) {
      let i = {
        ...e
      };
      t.payload.user_edu_grace_periods && t.payload.user_edu_grace_periods.forEach(e => {
        i[e.team_id] = {
          createdAt: new Date(e.created_at),
          updatedAt: new Date(e.updated_at ? e.updated_at : e.created_at)
        };
      });
      return i;
    }
    return sC.matches(t) ? {
      ...e,
      [t.payload.team_id]: {
        createdAt: new Date(t.payload.created_at),
        updatedAt: new Date(t.payload.updated_at ? t.payload.updated_at : t.payload.created_at)
      }
    } : e;
  },
  isFreeUser: Yb,
  isStarterUser: _$$nm,
  fileMove: dA,
  fileByKey: lg,
  deletedFilesByKey(e = {}, t) {
    if (_$$pB.matches(t)) {
      let e = {};
      t.payload.deletedFiles.forEach(t => {
        e[t.key] = t;
      });
      return e;
    }
    if (P6.matches(t)) {
      let i = {
        ...e
      };
      for (let e in t.payload.fileKeys) t.payload.fileKeys[e].file_repo_id || (i[e] = t.payload.fileKeys[e]);
      return i;
    }
    if (yJ.matches(t)) {
      let i = t.payload.file;
      if (!i.trashed_at && e[i.key]) {
        let t = {
          ...e
        };
        delete t[i.key];
        return t;
      }
      if (i.trashed_at) {
        let t = {
          ...e
        };
        t[i.key] = i;
        return t;
      }
    } else if (bE.matches(t)) {
      let i = t.payload.file;
      if (i.trashed_at) {
        let t = {
          ...e
        };
        t[i.key] = i;
        return t;
      }
    } else if (YF.matches(t) || YK.matches(t)) {
      let i = Object.keys(t.payload.fileKeys);
      let n = {
        ...e
      };
      for (let e of i) delete n[e];
      return n;
    }
    return e;
  },
  deletedReposById(e = {}, t) {
    if (_$$pg.matches(t)) {
      let e = {};
      t.payload.deletedRepos.forEach(t => {
        e[t.repo.id] = t;
      });
      return e;
    }
    if ($B.matches(t)) {
      let i = {
        ...e
      };
      for (let n of t.payload.repoIds) e[n] && delete i[n];
      return i;
    }
    if (_$$i4.matches(t)) {
      let i = {
        ...e
      };
      for (let [n, r] of Object.entries(t.payload.reposById)) !r.trashed_at && e[n] && delete i[n];
      return i;
    }
    if (Y4.matches(t)) {
      return {
        ...e,
        ...t.payload.reposById
      };
    }
    if (_$$yJ7.matches(t)) {
      let i = t.payload.repo;
      if (!i.trashed_at && e[i.id]) {
        let t = {
          ...e
        };
        delete t[i.id];
        return t;
      }
    }
    return e;
  },
  folders: dv,
  loadedFolders(e = {}, t) {
    if (Kc.matches(t)) {
      let i = {
        ...e
      };
      i[t.payload.folderId] = t.payload.state;
      return i;
    }
    return Qv.matches(t) ? {} : e;
  },
  realtime: uV,
  selectedView: NG,
  roles(e = {
    byFileKey: {},
    byRepoId: {},
    byFolderId: {},
    byTeamId: {}
  }, t) {
    if (Qv.matches(t)) return su(e, t.payload.roles || []);
    if (IU.matches(t)) {
      let i = {
        ...e
      };
      delete i.byFolderId[t.payload.folderId];
      return i;
    }
    return _$$uo5.matches(t) ? su(e, t.payload.roles) : sd(e, t);
  },
  twoFactorAuth: Wm,
  tooltip(e = u6, t) {
    return BrowserInfo.isIpadNative || BrowserInfo.isMeetDevice ? e : fW.matches(t) ? {
      ...e,
      ...t.payload.tooltip
    } : _$$Ts.matches(t) ? u6 : (_$$pP.matches(t) && (e.targetRefMap ||= {}, e.targetRefMap[t.payload.targetKey] = t.payload.targetRef), e);
  },
  comments: oG,
  appWindow(e = oS, t) {
    return _$$r$.matches(t) ? {
      ...e,
      inFullScreenMode: !0
    } : ZH.matches(t) ? {
      ...e,
      inFullScreenMode: !1
    } : e;
  },
  orgById(e = uw, t) {
    if (_$$Qv2.matches(t) || _$$os2.matches(t)) {
      let i = {};
      return ((t.payload.orgs ?? []).forEach(e => {
        i[e.id] = e;
      }), rv()(e, i)) ? e : {
        ...e,
        ...i
      };
    }
    if (KW.matches(t)) {
      let i = t.payload.org;
      return {
        ...e,
        [i.id]: i
      };
    }
    if (b1.matches(t) && t.payload.id in e) {
      let i = t.payload;
      return {
        ...e,
        [i.id]: {
          ...e[i.id],
          ...i
        }
      };
    }
    if (_$$uo6.matches(t)) {
      let i = {
        ...e
      };
      for (let n of t.payload.orgs || []) {
        i[n.id] = {
          ...e[n.id],
          ...n
        };
      }
      return i;
    }
    return e;
  },
  currentUserOrgId(e = null, t) {
    return _$$Ts.matches(t) || Qv.matches(t) ? _$$pk() : _P.matches(t) ? t.payload.orgId : e;
  },
  lockedOrgIds(e = new Set(), t) {
    if (_$$tJ.matches(t)) {
      let i = new Set(e);
      t.payload.orgIds.forEach(e => {
        i.add(e);
      });
      return i;
    }
    if (Qv.matches(t)) return new Set(t.payload.locked_orgs);
    if (K5.matches(t)) {
      let i = new Set(e);
      t.payload.orgIds.forEach(e => {
        i.has(e) && i.$$delete(e);
      });
      return i;
    }
    return e;
  },
  isAccountLockedDuringOrgOperation(e = !1, t) {
    return _$$dH.matches(t) ? t.payload.is_account_locked_during_org_operation : Qv.matches(t) ? !!t.payload.is_account_locked_during_org_operation : e;
  },
  hasPersonalSpace(e = !0, t) {
    return Qv.matches(t) ? !t.payload.disable_personal : e;
  },
  dragState(e = o3, t) {
    return _$$v4.matches(t) ? {
      ...e,
      ...t.payload
    } : _$$T3.matches(t) ? o3 : e;
  },
  userFavoriteFonts(e = [], t) {
    Qv.matches(t) && (e = t.payload.user_favorite_fonts || []);
    return e;
  },
  sharedFonts(e = uz, t) {
    if (_$$X3.startUploadFonts.matches(t)) {
      let i = {
        ...e
      };
      for (let e in i.uploadsRemaining = {
        ...i.uploadsRemaining
      }, t.payload.fonts) {
        i.uploadsLaunched++;
        i.uploadsRemaining[e] = {
          file: t.payload.fonts[e],
          progress: 0
        };
      }
      return i;
    }
    if (_$$X3.uploadFontProgress.matches(t)) {
      let i = {
        ...e
      };
      i.uploadsRemaining = {
        ...i.uploadsRemaining
      };
      i.uploadsRemaining[t.payload.uploadId] = {
        ...i.uploadsRemaining[t.payload.uploadId],
        progress: t.payload.progress
      };
      return i;
    }
    if (_$$X3.uploadFontSuccess.matches(t)) {
      let i = {
        ...e
      };
      if (i.uploadsLaunched === 0) return i;
      i.successfulUploads = [...i.successfulUploads, t.payload.filename];
      let {
        uploadId
      } = t.payload;
      uploadId && (i.uploadsRemaining = {
        ...i.uploadsRemaining
      }, delete i.uploadsRemaining[uploadId]);
      return i;
    }
    if (_$$X3.uploadFontFailure.matches(t)) {
      let i = {
        ...e
      };
      i.uploadsLaunched === 0 || (t.payload.collision && t.payload.uploadId != null ? (i.collisions = [...i.collisions, {
        ...t.payload.collision,
        file: i.uploadsRemaining[t.payload.uploadId].file
      }], i.uploadsLaunched--) : i.unsuccessfulUploads = [...i.unsuccessfulUploads, {
        filename: t.payload.filename,
        status: t.payload.status
      }], t.payload.uploadId && (i.uploadsRemaining = {
        ...i.uploadsRemaining
      }, delete i.uploadsRemaining[t.payload.uploadId]));
      return i;
    }
    if (_$$X3.uploadFontWarning.matches(t)) {
      let i = {
        ...e
      };
      i.warnings.push(t.payload);
      return i;
    }
    if (_$$X3.toggleFontsToDelete.matches(t)) {
      let i = {
        ...e
      };
      i.fontsToDelete = {
        ...i.fontsToDelete
      };
      t.payload.fonts.forEach(e => {
        let n = () => {
          delete i.fontsToDelete[e.id];
        };
        let r = () => {
          i.fontsToDelete[e.id] = e;
        };
        t.payload.checked != null ? t.payload.checked ? r() : n() : i.fontsToDelete[e.id] ? n() : r();
      });
      return i;
    }
    if (_$$X3.clearDeleteResult.matches(t)) {
      return {
        ...e,
        successfulDeletes: [],
        unsuccessfulDeletes: []
      };
    } else if (_$$X3.deleteFontComplete.matches(t)) {
      let i = {
        ...e
      };
      i.unsuccessfulDeletes = [...i.unsuccessfulDeletes];
      i.successfulDeletes = [...i.successfulDeletes];
      i.fontsByResourceId = {
        ...i.fontsByResourceId
      };
      i.fontsToDelete = {
        ...i.fontsToDelete
      };
      Object.keys(i.fontsToDelete).forEach(e => {
        t.payload.errors[e] ? i.unsuccessfulDeletes.push(e) : (delete i.fontsToDelete[e], i.successfulDeletes.push(e));
      });
      return i;
    } else if (_$$X3.clearFontsToDelete.matches(t)) {
      return {
        ...e,
        fontsToDelete: {},
        unsuccessfulDeletes: [],
        successfulDeletes: []
      };
    } else if (_$$X3.dismissFontCollision.matches(t)) {
      let t = {
        ...e
      };
      t.collisions = t.collisions.slice(1);
      return t;
    } else if (_$$X3.dismissFontWarning.matches(t)) {
      let t = {
        ...e
      };
      t.warnings = t.warnings.slice(1);
      return t;
    } else if (_$$X3.clearFontUploadResults.matches(t)) {
      return {
        ...e,
        uploadsRemaining: {},
        uploadsLaunched: 0,
        unsuccessfulUploads: [],
        successfulUploads: [],
        collisions: [],
        warnings: []
      };
    } else if (_$$X3.updateSharedFontList.matches(t)) {
      let i = {
        ...e
      };
      i.fontsByResourceId = {};
      t.payload.forEach(e => {
        let t = getFontOwner(e);
        i.fontsByResourceId[t] || (i.fontsByResourceId[t] = {});
        i.fontsByResourceId[t][e.family] || (i.fontsByResourceId[t][e.family] = {});
        i.fontsByResourceId[t][e.family][e.style] = e;
      });
      return i;
    } else if (_$$X3.put.matches(t)) {
      let i = {
        ...e
      };
      let n = getFontOwner(t.payload.font);
      let {
        family,
        style
      } = t.payload.font;
      i.fontsByResourceId = {
        ...i.fontsByResourceId
      };
      i.fontsByResourceId[n] = {
        ...i.fontsByResourceId[n]
      };
      i.fontsByResourceId[n][family] = {
        ...i.fontsByResourceId[n][family]
      };
      i.fontsByResourceId[n][family][style] = t.payload.font;
      return i;
    } else {
      if (!_$$X3.del.matches(t)) return e;
      let i = {
        ...e
      };
      i.fontsByResourceId = {
        ...i.fontsByResourceId
      };
      let n = getFontOwner(t.payload.font);
      let {
        family,
        style
      } = t.payload.font;
      i.fontsByResourceId[n] = {
        ...i.fontsByResourceId[n]
      };
      i.fontsByResourceId[n][family] = {
        ...i.fontsByResourceId[n][family]
      };
      delete i.fontsByResourceId[n][family][style];
      Object.keys(i.fontsByResourceId[n][family]).length === 0 && delete i.fontsByResourceId[n][family];
      Object.keys(i.fontsByResourceId[n]).length === 0 && delete i.fontsByResourceId[n];
      return i;
    }
  },
  orgUsersByOrgId: uS,
  orgDomains: uA,
  licenseGroups(e = Object.create(null), t) {
    if (_$$hZ6.matches(t)) {
      let i = {
        ...e
      };
      t.payload.forEach(e => {
        i[e.id] = {
          ...(i[e.id] || {}),
          ...e
        };
      });
      return i;
    }
    if (yo.matches(t)) {
      let i = t.payload.licenseGroup;
      return {
        ...e,
        [i.id]: {
          ...(e[i.id] || {}),
          ...i
        }
      };
    }
    if (w4.matches(t)) {
      let i = {
        ...e
      };
      t.payload.licenseGroups.forEach(e => {
        delete i[e.id];
      });
      return i;
    }
    return e;
  },
  teamUserByTeamId: uQ,
  universalInsertModal(e = u9, t) {
    return En.matches(t) ? {
      showing: !0,
      pinned: t.payload.pinned || e.pinned,
      initialX: t.payload.initialX,
      initialY: t.payload.initialY,
      initialFdResourceTab: t.payload.initialFdResourceTab ?? e.initialFdResourceTab,
      initialFdView: t.payload.initialFdView,
      fdPreviewResource: t.payload.fdPreviewResource ?? e.fdPreviewResource,
      previewResource: t.payload.previewResource ?? e.previewResource,
      initialTab: t.payload.initialTab ?? e.initialTab,
      scrollDevelopmentSectionIntoView: t.payload.scrollDevelopmentSectionIntoView || !1,
      initialSearch: t.payload.initialSearch,
      initialSelectedCategory: t.payload.initialSelectedCategory,
      sourceRect: t.payload.sourceRect
    } : IN.matches(t) ? {
      ...e,
      ...t.payload
    } : SI.matches(t) ? {
      ...e,
      scrollDevelopmentSectionIntoView: !1
    } : _$$eo.matches(t) ? {
      ...e,
      showing: !1,
      pinned: _$$t9.NOT_PINNED,
      initialX: 0,
      initialY: 0,
      initialFdResourceTab: void 0,
      initialFdView: void 0,
      fdPreviewResource: void 0,
      previewResource: void 0
    } : Kl.matches(t) ? t.payload.initialX && t.payload.initialY ? {
      ...e,
      showing: !0,
      pinned: t.payload.pinned,
      initialX: t.payload.initialX,
      initialY: t.payload.initialY
    } : {
      ...e,
      showing: !0,
      pinned: t.payload.pinned
    } : jx.matches(t) ? {
      ...e,
      sourceRect: t.payload.sourceRect
    } : e;
  },
  loadingState(e = {}, t) {
    if (Cx.matches(t)) {
      return {
        ...e,
        [t.payload.key]: _$$r9.LOADING
      };
    }
    if (x2.matches(t)) {
      return {
        ...e,
        [t.payload.key]: _$$r9.SUCCESS
      };
    }
    if (_$$of.matches(t)) {
      return {
        ...e,
        [t.payload.key]: _$$r9.FAILURE
      };
    }
    {
      if (!_$$yH6.matches(t)) return e;
      let i = {
        ...e
      };
      delete i[t.payload.key];
      return i;
    }
  },
  loadingStateFailureReasons(e = {}, t) {
    if (_$$SI.matches(t)) {
      return {
        ...e,
        [t.payload.key]: t.payload.reason
      };
    }
    if (!(_$$yH6.matches(t) || x2.matches(t))) return e;
    {
      let i = {
        ...e
      };
      delete i[t.payload.key];
      return i;
    }
  },
  userStateLoaded(e = !1, t) {
    return !!_$$o2.matches(t) || e;
  },
  autosave(e = oO, t) {
    return Y3.matches(t) ? {
      ...e,
      unclaimedFilesWithChangesInIDB: t.payload.filesWithChangesInIDB,
      unclaimedFilesCreatedOffline: t.payload.filesCreatedOffline
    } : zE.matches(t) ? {
      ...e,
      lastSnoozeTime: t.payload
    } : TP.matches(t) ? {
      ...e,
      nextGarbageCollectionTimestamp: t.payload
    } : e;
  },
  recentlyUsed: _$$Cs,
  figjamDefaultInserts(e = {
    plugins: [],
    widgets: [],
    templates: [],
    components: [],
    useCases: []
  }, t) {
    return _$$s3.matches(t) ? {
      plugins: t.payload.plugins.map(e => getPluginVersion(e)),
      widgets: t.payload.widgets.map(e => getPluginVersion(e)),
      templates: t.payload.templates,
      components: t.payload.components,
      useCases: t.payload.use_cases
    } : e;
  },
  localPlugins(e = {}, t) {
    if (_$$Ob.matches(t)) return t.payload;
    if (Po.matches(t)) {
      let i = {
        ...e
      };
      i[t.payload.localFileId] = t.payload;
      return i;
    }
    if (Zy.matches(t)) {
      let i = {
        ...e
      };
      delete i[t.payload];
      return i;
    }
    return e;
  },
  publishedPlugins: uD,
  installedPluginVersions(e = {
    loaded: !1,
    plugins: {}
  }, t) {
    return getFeatureFlags().clear_installed_plugin_versions ? e : g3.matches(t) ? {
      loaded: !0,
      plugins: t.payload
    } : e;
  },
  publishedCanvasWidgetVersions(e = {}, t) {
    if (fs.matches(t)) {
      let i = {
        ...e
      };
      let n = {
        ...t.payload
      };
      for (let e in t.payload) {
        i[e] = {
          ...i[e],
          ...n[e]
        };
      }
      return i;
    }
    return _$$ho2.matches(t) || _$$a4.matches(t) ? {} : e;
  },
  fetchedCanvasWidgetVersions(e = {}, t) {
    if (_$$uw.matches(t)) {
      let i = {
        ...e
      };
      let n = {
        ...t.payload
      };
      for (let e in t.payload) {
        i[e] = {
          ...i[e],
          ...n[e]
        };
      }
      return i;
    }
    return _$$ho2.matches(t) || _$$a4.matches(t) ? {} : e;
  },
  publishingPlugins: uL,
  featuredPlugins(e = {}, t) {
    return L4.matches(t) ? t.payload : e;
  },
  whitelistedPlugins(e = {}, t) {
    if (Pq.matches(t)) return t.payload;
    if (Rg.matches(t)) {
      let i = {
        ...e
      };
      i[t.payload.pluginId] = !0;
      return i;
    }
    if (XV.matches(t)) {
      let i = {
        ...e
      };
      delete i[t.payload.pluginId];
      return i;
    }
    return e;
  },
  hubFiles(e = {}, t) {
    if (D3.matches(t)) {
      let i = {
        ...e
      };
      for (let n of t.payload) {
        i[n.id] = {
          ...e[n.id],
          ...n,
          versions: _$$ax(e[n.id], n)
        };
      }
      return i;
    }
    if (L1.matches(t)) {
      let i = {
        ...e
      };
      for (let e of t.payload) delete i[e.id];
      return i;
    }
    if (yh.matches(t)) {
      let i = {
        ...e
      };
      e[t.payload.hubFileId].recently_duplicated || (i[t.payload.hubFileId] = {
        ...i[t.payload.hubFileId],
        duplicate_count: i[t.payload.hubFileId].duplicate_count + 1,
        recently_duplicated: !0
      });
      return i;
    }
    if (_$$tG2.matches(t)) {
      let {
        resourceType,
        resourceId,
        comment
      } = t.payload;
      if (resourceType === _$$vt.HUB_FILE) {
        let t = {
          ...e
        };
        let i = t[resourceId];
        i && !comment.parent_id && (t[resourceId] = {
          ...i,
          comment_count: i.comment_count + 1
        });
        return t;
      }
    } else if (Zv.matches(t)) {
      let {
        resourceType,
        resourceId,
        comments
      } = t.payload;
      if (resourceType === _$$vt.HUB_FILE) {
        let t = {
          ...e
        };
        let i = {
          ...t[resourceId]
        };
        comments.forEach(e => {
          i && !e.parent_id && (i.comment_count -= 1);
        });
        t[resourceId] = i;
        return t;
      }
    } else if (HF.matches(t)) {
      let {
        resourceType,
        resourceId
      } = t.payload;
      if (resourceType === _$$vt.HUB_FILE) {
        let t = {
          ...e
        };
        let i = t[resourceId];
        i && (t[resourceId] = {
          ...i,
          comment_count: i.comment_count - 1
        });
        return t;
      }
    }
    return e;
  },
  figFilePublishedAsHubFile(e = {}, t) {
    if (_$$Ri.matches(t)) {
      let i = {
        ...e
      };
      let {
        fileKey,
        hubFileId
      } = t.payload;
      i[fileKey] = hubFileId;
      return i;
    }
    if (_$$FO.matches(t)) {
      let i = {
        ...e
      };
      let {
        fileKey
      } = t.payload;
      delete i[fileKey];
      return i;
    }
    return e;
  },
  figFileDuplicatedFromHubFile(e = {}, t) {
    if (QA.matches(t)) {
      let i = {
        ...e
      };
      let {
        fileKey,
        hubFileId,
        isPreview
      } = t.payload;
      i[fileKey] = {
        hubFileId,
        isPreview
      };
      return i;
    }
    if (QA.matches(t)) {
      let i = {
        ...e
      };
      let {
        fileKey
      } = t.payload;
      delete i[fileKey];
      return i;
    }
    return e;
  },
  publishingHubFiles: ly,
  publishedWidgets(e = {}, t) {
    if (_$$uV.matches(t)) {
      let i = {
        ...e
      };
      for (let n of t.payload) {
        i[n.id] = I$({
          ...e[n.id],
          ...n,
          versions: _$$ax(e[n.id], n),
          plugin_publishers: n.plugin_publishers ?? e[n.id]?.plugin_publishers
        });
      }
      return i;
    }
    if (GV.matches(t)) {
      let i = {
        ...e
      };
      for (let e of t.payload) delete i[e.id];
      return i;
    }
    if (_$$R5.matches(t)) {
      let i = {
        ...e
      };
      let n = i[t.payload.resourceId];
      if (n) {
        i[t.payload.resourceId] = {
          ...n,
          current_user_first_ran_at: t.payload.userFirstRanAt
        };
        return i;
      }
    }
    return e;
  },
  whitelistedWidgets(e = {}, t) {
    if (_$$oO.matches(t)) return t.payload;
    if (EE.matches(t)) {
      let i = {
        ...e
      };
      i[t.payload.pluginId] = !0;
      return i;
    }
    if (Yw.matches(t)) {
      let i = {
        ...e
      };
      delete i[t.payload.pluginId];
      return i;
    }
    return e;
  },
  communityHub: o0,
  communityPayments(e = {}, t) {
    if (_$$M3.matches(t)) {
      let i = {
        ...e
      };
      Array.isArray(t.payload) && t.payload.forEach(e => {
        i[e.monetized_resource_metadata_id] = e;
      });
      return i;
    }
    if (_$$Sp.matches(t)) {
      let i = {
        ...e
      };
      delete i[t.payload];
      return i;
    }
    return k3.matches(t) ? {
      ...e,
      [t.payload.monetized_resource_metadata_id]: t.payload
    } : e;
  },
  repos: lq,
  fileKeysByRepoId(e = {}, t) {
    if (_$$uo.matches(t)) {
      let i = {
        ...e
      };
      t.payload.files.forEach(e => {
        let t = e.file_repo_id;
        t && (t in i || (i[t] = []), !i[t].includes(e.key) && i[t].push(e.key));
      });
      return i;
    }
    if (bE.matches(t) || yJ.matches(t)) {
      let i = t.payload.file.key;
      let n = t.payload.file.file_repo_id;
      if (!n || e[n] && e[n].includes(i)) return e;
      let r = e[n] || [];
      return {
        ...e,
        [n]: [...r, i]
      };
    }
    if (YK.matches(t)) {
      let i = {
        ...e
      };
      for (let e in i) i[e] = i[e].filter(e => !t.payload.fileKeys[e]);
      return i;
    }
    if (YF.matches(t)) {
      let i = {
        ...e
      };
      for (let e in t.payload.fileKeys) {
        let n = t.payload.fileKeys[e].file_repo_id;
        n && (n in i || (i[n] = []), !i[n].includes(e) && i[n].push(e));
      }
      return i;
    }
    if (_$$iE3.matches(t) || _$$nK.matches(t)) {
      let {
        files,
        repo
      } = t.payload.repo;
      let r = e[repo.id] || [];
      let a = [];
      for (let e of files) !r.includes(e.key) && a.push(e.key);
      return {
        ...e,
        [repo.id]: [...r, ...a]
      };
    }
    return e;
  },
  mergingStatus(e = _$$y2.NOT_MERGING, t) {
    return SL.matches(t) ? _$$y2.MERGING : _$$E3.matches(t) ? _$$y2.NOT_MERGING : Nu.matches(t) ? _$$y2.MERGING_ERROR : e;
  },
  openFileMerge(e = null, t) {
    return _$$nM.matches(t) ? t.payload : _$$ie.matches(t) ? null : e;
  },
  templateFiles(e = {
    [u2.TEMPLATES_PICKER]: {
      design: {},
      whiteboard: {},
      slides: {},
      sites: {},
      cooper: {},
      figmake: {}
    },
    [u2.ONBOARDING]: {}
  }, t) {
    if (_$$c5.matches(t)) {
      let i = t.payload;
      let n = {};
      Object.keys(i).forEach(e => {
        n[e] = i[e].map(e => e.id);
      });
      return {
        ...e,
        [u2.ONBOARDING]: n
      };
    }
    return e;
  },
  teamJoinLinks(e = null, t) {
    return F1.matches(t) ? t.payload : e;
  },
  theme(e = {
    visibleTheme: null,
    themePreference: null,
    enhancedContrast: !1
  }, t) {
    if (Qv.matches(t)) {
      let e = FB();
      let t = Q5();
      return {
        visibleTheme: _$$i_(e),
        themePreference: e,
        enhancedContrast: t
      };
    }
    return _$$lk.matches(t) || _$$nq.matches(t) ? {
      ...e,
      themePreference: t.payload.theme,
      visibleTheme: _$$i_(t.payload.theme)
    } : wG.matches(t) ? {
      ...e,
      visibleTheme: t.payload.theme
    } : Kb.matches(t) ? {
      ...e,
      enhancedContrast: t.payload.enhancedContrast
    } : e;
  },
  desktopNewTab(e = o5, t) {
    return Ri.matches(t) ? {
      ...e,
      searchQuery: t.payload
    } : j3.matches(t) ? {
      ...e,
      isSearchBarFocused: t.payload
    } : _$$mg.matches(t) ? {
      ...e,
      loadingBackgroundColor: t.payload
    } : e;
  },
  sharingAttributionContextKey(e = null, t) {
    return Qv.matches(t) && t.payload.attribution_context_key ? t.payload.attribution_context_key : e;
  },
  screenreader(e = {
    enabled: !1,
    errorType: null
  }, t) {
    if (_$$Qv2.matches(t)) {
      let t = localStorageRef?.getItem(pm);
      let i = getInitialOptions().user_data?.screenreader_enabled;
      let n = {
        ...e,
        localStoredPreference: t ? t === '1' : void 0,
        serverStoredPreference: i
      };
      ph(n);
      return {
        ...n
      };
    }
    if (_$$X5.matches(t)) {
      let {
        scope = 'PERSISTENT',
        enabled,
        user
      } = t.payload;
      switch (scope) {
        case 'SESSION':
          return {
            ...e,
            enabled
          };
        case 'LOCAL':
          {
            let t = {
              ...e,
              localStoredPreference: enabled
            };
            ph(t);
            return t;
          }
        case 'BACKEND':
          {
            let t = {
              ...e,
              serverStoredPreference: enabled
            };
            ph(t);
            return t;
          }
        case 'PERSISTENT':
          {
            let t = {
              ...e,
              enabled
            };
            try {
              localStorageRef && (localStorageRef.setItem(pm, enabled ? '1' : '0'), t.localStoredPreference = enabled);
            } catch (e) {}
            if (user) {
              let i = e.serverStoredPreference;
              t.serverStoredPreference = enabled;
              XHR.put('/api/user', {
                enable_screenreader: enabled
              }).catch(() => {
                debugState.dispatch(_$$X5({
                  enabled: !!i,
                  scope: 'BACKEND'
                }));
              });
            }
            return t;
          }
        default:
          throwTypeError(scope);
      }
    } else if (_$$mC.matches(t)) {
      let {
        errorType
      } = t.payload;
      return {
        ...e,
        errorType
      };
    } else if (zq.matches(t)) {
      let {
        lastCreatedCommentId
      } = t.payload;
      return {
        ...e,
        lastCreatedCommentId
      };
    }
    return e;
  },
  search(e = s6, t) {
    if (W0.matches(t)) {
      let {
        entryPoint
      } = t.payload;
      let n = zQ(entryPoint);
      return vj.Session.select(e, {
        entryPoint: n
      });
    }
    if (Dy.matches(t)) {
      let {
        entryPoint
      } = t.payload;
      let n = zQ(entryPoint);
      return vj.Session.start(e, {
        entryPoint: n
      });
    }
    if (ky.matches(t)) return vj.Session.trackEnd(e);
    if (NR.matches(t)) {
      return {
        ...e,
        sessionId: t.payload.sessionId
      };
    }
    if (_$$r8.matches(t)) {
      vj.Session.enterSearchView(e, t.payload.entryPoint);
      return e;
    }
    if (_$$Je.matches(t)) {
      vj.Session.enterSearchViewViaEnter(e, t.payload.entryPoint);
      return e;
    }
    if (Pj.matches(t)) {
      vj.Session.trackSeeMore(e, t.payload.category);
      return e;
    }
    if (_$$pY.matches(t)) return vj.Session.incrementQueryCount(e);
    if (Rz.matches(t)) {
      let i = {
        ...e.parameters,
        ...t.payload
      };
      let n = fS[i.searchScope];
      !n.modelTypes.includes(i.searchModelType) && (i.searchModelType = n.correspondingModelTypes[i.searchModelType] || n.defaultModelType);
      return {
        ...e,
        parameters: i
      };
    }
    if (H7.matches(t)) {
      let i = {
        ...e.parameters.sortState,
        ...e.responseSortState,
        ...t.payload
      };
      return {
        ...e,
        responseSortState: i
      };
    }
    if (_z.matches(t)) {
      let {
        keepFocus
      } = t.payload;
      let n = {
        sessionId: e.sessionId,
        queryId: e.queryId,
        queryCount: e.queryCount
      };
      return {
        ...s6,
        parameters: {
          ...e.parameters,
          query: s6.parameters.query
        },
        isFocused: !!keepFocus && e.isFocused,
        ...n
      };
    }
    if (qr.matches(t)) {
      return {
        ...e,
        responses: s6.responses,
        responseCounts: s6.responseCounts,
        completedQueries: s6.completedQueries
      };
    }
    if (Z6.matches(t)) {
      return {
        ...(t.payload.persistAnalyticsSession || t.payload.isFocused ? e : vj.Session.trackEnd(e)),
        isFocused: t.payload.isFocused
      };
    }
    if (_$$ej.matches(t)) {
      return {
        ...e,
        lastAckedQueryId: t.payload.lastAckedQueryId
      };
    }
    if (PP.matches(t)) {
      return {
        ...e,
        searchScrollTop: t.payload.top
      };
    }
    if (_$$hS3.matches(t)) {
      return {
        ...e,
        searchTypeBehavior: t.payload.searchTypeBehavior
      };
    }
    if (_$$KQ.matches(t)) {
      if (e.parameters.query !== t.payload.parameters.query) return e;
      t.payload.reset && vj.Session.incrementQueryCount(e);
      let i = {
        ...t.payload.response
      };
      let n = t.payload.response.search_model_type;
      i.results && i.results.forEach(e => {
        e.search_model_type = n;
      });
      return {
        ...e,
        responseSortState: {
          ...t.payload.parameters.sortState
        },
        responses: {
          ...(t.payload.reset ? s6.responses : e.responses),
          [n]: t.payload.response
        },
        responseCounts: {
          ...(t.payload.reset ? s6.responseCounts : e.responseCounts),
          [n]: i.results.length
        },
        completedQueries: {
          ...e.completedQueries,
          [n]: t.payload.parameters.query
        },
        queryId: t.payload.queryId
      };
    }
    if (R7.matches(t)) {
      if (e.parameters.query !== t.payload.parameters.query) return e;
      let i = {
        ...t.payload.response
      };
      let n = t.payload.response.search_model_type;
      i.results && i.results.forEach(e => {
        e.search_model_type = n;
      });
      return {
        ...e,
        responseSortState: {
          ...t.payload.parameters.sortState
        },
        responses: {
          ...s6.responses,
          [n]: t.payload.response
        },
        responseCounts: {
          ...s6.responseCounts,
          [n]: i.results.length
        },
        completedQueries: {
          ...e.completedQueries,
          [n]: t.payload.parameters.query
        },
        queryId: t.payload.queryId
      };
    }
    if (zy.matches(t)) {
      if (e.parameters.query !== t.payload.parameters.query) return e;
      vj.Session.incrementQueryCount(e);
      let i = t.payload.responses.filter(e => e.results.length > 0).map(e => e.search_model_type);
      let n = t.payload.responses.reduce((e, i) => {
        if (i.results) {
          let n = i.results.map(e => ({
            ...e,
            search_model_type: i.search_model_type
          }));
          e[i.search_model_type] = {
            ...i,
            results: n,
            metrics: {
              roundTripTime: t.payload.roundTripTime
            }
          };
        }
        return e;
      }, {});
      let r = t.payload.responses.reduce((e, t) => {
        let i = t.search_model_type;
        t.results && (e[i] = t.results.length);
        return e;
      }, {});
      let a = t.payload.responses.reduce((e, i) => (e[i.search_model_type] = t.payload.parameters.query, e), {});
      return {
        ...e,
        responseSortState: {
          ...t.payload.parameters.sortState
        },
        responses: {
          ...s6.responses,
          ...n
        },
        responseCounts: {
          ...s6.responseCounts,
          ...r
        },
        completedQueries: {
          ...e.completedQueries,
          ...a,
          [t.payload.parameters.searchModelType]: t.payload.parameters.query
        },
        queryId: t.payload.queryId,
        searchPreviewOrder: t.payload.reset ? s6.searchPreviewOrder : i
      };
    }
    if (w2.matches(t)) {
      return {
        ...e,
        lastLoadedQuery: {
          sessionId: t.payload.sessionId,
          query: t.payload.query,
          queryId: t.payload.queryId
        }
      };
    }
    if (_$$eK2.matches(t)) {
      return {
        ...e,
        queryId: t.payload.queryId
      };
    }
    if (vK.matches(t)) {
      return {
        ...e,
        parameters: {
          ...e.parameters,
          fileTypeFilter: s6.parameters.fileTypeFilter
        }
      };
    }
    if (gG.matches(t) || qP.matches(t)) {
      let i = e.responses[_$$uH.FILES];
      if (i != null) {
        let n = i.results;
        let r = n.findIndex(e => e.model.key === t.payload.file.key);
        if (r !== -1) {
          let a = [...n];
          a[r] = {
            ...n[r],
            model: {
              ...n[r].model,
              is_favorited: gG.matches(t)
            }
          };
          return {
            ...e,
            responses: {
              ...e.responses,
              [_$$uH.FILES]: {
                ...i,
                results: a
              }
            }
          };
        }
      }
    }
    return e;
  },
  lastVisitedPlanId: _$$j4,
  lastVisitedPlan(e = null, t) {
    let i = e?.planId || null;
    let n = e?.planType || null;
    _$$c4.matches(t) ? (i = t.payload.planId, n = t.payload.planType) : _P.matches(t) && e === null && t.payload.orgId && (i = t.payload.orgId, n = _$$O.ORG);
    return i && n ? {
      planId: i,
      planType: n
    } : null;
  },
  plans(e = [], t) {
    let i = e;
    _$$uo8.matches(t) && (i = t.payload.plans);
    return i;
  },
  currentTeamId(e = null, t) {
    return _$$Ts.matches(t) || Qv.matches(t) ? Um() : e;
  }
};
let pA = 'desktop_app_interstitial--logo--OqEk7';
let py = 'desktop_app_interstitial--DVDAnimation--06Gmt desktop_app_interstitial--logo--OqEk7';
let pb = [buildUploadUrl('cfe8e56862ec4a49e41e354d6f73669328697956'), buildUploadUrl('183073167ad6878807e6d47e4e5a258d79b3d71e'), buildUploadUrl('66b2f6e70ba703da39c5a1bd475486523dcaae24'), buildUploadUrl('87c327810830d6dc5d6a96b223eb9b8515ddc16a'), buildUploadUrl('b3c916d02bf28991b2551e31112be8daad9db963')];
function pv({
  initialX: e,
  initialY: t,
  resetIconState: i
}) {
  let [r, a] = useState(0);
  let s = useRef(null);
  let o = useRef({
    x: e,
    y: t,
    vx: 2.5,
    vy: 2.5
  });
  let l = (e, t, i) => e + 183 >= i || e <= 0 ? (a(e => (e + 1) % pb.length), {
    newPos: e <= 0 ? 0 : i - 183,
    newVelocity: -t
  }) : {
    newPos: e,
    newVelocity: t
  };
  let c = useCallback(e => {
    let t = e / 8.4;
    let i = window.innerWidth;
    let n = window.innerHeight;
    if (!s.current || !o.current) return;
    let {
      x,
      y,
      vx,
      vy
    } = o.current;
    let {
      newPos,
      newVelocity
    } = l(x + vx * t, vx, i);
    let {
      newPos: _newPos,
      newVelocity: _newVelocity
    } = l(y + vy * t, vy, n);
    s.current.style.left = `${newPos}px`;
    s.current.style.top = `${_newPos}px`;
    o.current = {
      x: newPos,
      y: _newPos,
      vx: newVelocity,
      vy: _newVelocity
    };
  }, []);
  useEffect(() => {
    let e;
    let t = performance.now();
    let i = n => {
      let r = n - t;
      t = n;
      c(r);
      e = requestAnimationFrame(i);
    };
    e = requestAnimationFrame(i);
    return () => cancelAnimationFrame(e);
  }, [c]);
  return jsx(_$$E9, {
    onClick: i,
    className: py,
    style: {
      left: `${e}px`,
      top: `${t}px`
    },
    ref: s,
    children: jsx(_$$oW, {
      className: py,
      src: pb[r],
      alt: getI18nString('desktop_open_views.interstitial.figma_app_logo')
    })
  });
}
var pI = (e => (e.STATIC = 'static', e.MOVING = 'moving', e))(pI || {});
function pE() {
  let [e, t] = useState('static');
  let i = useRef(null);
  let r = () => {
    e === 'static' ? t('moving') : t('static');
  };
  return jsx('div', {
    className: pA,
    children: function () {
      let t = e === 'moving';
      return jsxs(Fragment, {
        children: [jsx(_$$E9, {
          onClick: r,
          className: `desktop_app_interstitial--logoAnimation--aEDVV desktop_app_interstitial--logo--OqEk7 ${t ? 'desktop_app_interstitial--logoHidden--BJh1-' : ''}`,
          ref: i,
          disabled: t,
          children: jsx(px, {})
        }), t && jsx(pv, {
          initialX: i.current?.offsetLeft || 0,
          initialY: i.current?.offsetTop || 0,
          resetIconState: r
        })]
      });
    }()
  });
}
function px() {
  return jsx(_$$oW, {
    className: pA,
    src: buildUploadUrl('3214f8f4f9e232539e7f89f2f34bd066db442f69'),
    alt: getI18nString('desktop_open_views.interstitial.figma_app_logo')
  });
}
class pS extends PureComponent {
  constructor(e) {
    super(e);
    this.tabCloseTimerID = null;
    this.clearTabCloseTimer = () => {
      this.tabCloseTimerID && clearTimeout(this.tabCloseTimerID);
      this.tabCloseTimerID = null;
    };
    this.onOpenHereInstead = () => {
      trackEventAnalytics('Open Here Instead Clicked');
      this.clearTabCloseTimer();
      this.props.onDismiss();
    };
    this.state = {
      opened: !1
    };
    Sr(location.href, B3.DESKTOP_INTERSTITIAL).then(e => {
      e ? (this.setState({
        opened: !0
      }), getFeatureFlags().desktop_auto_close_interstitial_tab && (this.tabCloseTimerID = setTimeout(() => {
        window.postMessage('close_desktop_interstitial_tab');
      }, 7e3))) : this.props.onDismiss();
    });
  }
  render() {
    let e = this.state.opened;
    let t = this.props.file;
    return jsx(fu, {
      name: 'DesktopInterstitialView',
      children: jsxs('div', {
        className: 'desktop_app_interstitial--container--evmaU',
        children: [getFeatureFlags().desktop_interstitial_animation ? jsx(pE, {}) : jsx(px, {}), jsx('div', {
          className: 'desktop_app_interstitial--message--wmVwt',
          children: t ? e ? renderI18nText('desktop_open_views.interstitial.opened_in_app', {
            fileName: t.name
          }) : renderI18nText('desktop_open_views.interstitial.opening_in_app', {
            fileName: t.name
          }) : e ? renderI18nText('desktop_open_views.interstitial.opened_link_in_app') : renderI18nText('desktop_open_views.interstitial.opening_link_in_app')
        }), jsx(_$$E9, {
          className: 'desktop_app_interstitial--link--XNAnR',
          onClick: this.onOpenHereInstead,
          children: renderI18nText('desktop_open_views.interstitial.open_here_instead')
        })]
      })
    });
  }
}
pS.displayName = 'DesktopAppInterstitial';
let pF = _$$z3.object({
  release: _$$z3.string(),
  reloadIntervalMs: _$$z3.number(),
  disableAutomaticReload: _$$z3.boolean().optional(),
  disableFullscreenBanner: _$$z3.boolean().optional(),
  additionalViewsToReload: _$$z3.array(_$$z3.string()).optional(),
  poisonedAt: _$$z3.number().optional()
});
let pM = _$$z3.object({
  protocolVersion: _$$z3.number(),
  reloadIntervalMs: _$$z3.number(),
  additionalViewsToReload: _$$z3.array(_$$z3.string()).optional()
});
let pj = _$$z3.object({
  poisonedReleases: _$$z3.array(pF),
  minimumProtocolVersion: pM.optional()
});
let pU = _$$z3.object({
  commit: _$$z3.string(),
  canaryCommit: _$$z3.string()
});
function pB(e, t) {
  return _$$cz(e.getState().selectedView, t);
}
let pV = isProdCluster() || isGovCluster() ? 'https://s3-figma-force-client-reloads-production.figma.com/periodic_refresh.json' : 'https://s3-figma-force-client-reloads-staging.staging.figma.com/periodic_refresh.json';
let pG = isProdCluster() || isGovCluster() ? 'https://s3-figma-force-client-reloads-production.figma.com/currently_deployed.json' : 'https://s3-figma-force-client-reloads-staging.staging.figma.com/currently_deployed.json';
let pz = getFeatureFlags().force_client_reloads_v2_testing ? 1e4 : 3e5;
let pH = getFeatureFlags().force_client_reloads_v2_testing ? 6e4 : 36e5;
function pW(e, t) {
  analyticsEventManager.trackDefinedEvent('scenegraph_and_sync.force_client_reload_fetch_error', {
    message: e,
    status: t
  });
}
async function pK(e) {
  try {
    let t = await fetch(e, {
      cache: 'no-store'
    });
    if (!t.ok) {
      logError('force client reload', 'Failed to fetch', {
        status: t.status,
        message: t.statusText
      });
      pW(t.statusText, t.status);
      return {
        status: 'error'
      };
    }
    return {
      status: 'success',
      data: await t.json()
    };
  } catch (e) {
    pW(e.message);
    return {
      status: 'error'
    };
  }
}
async function pY(e, t) {
  let i = await pK(e);
  if (i.status === 'error') return i;
  let n = t.safeParse(i.data);
  return n.success ? {
    status: 'success',
    data: n.data
  } : (logError('force client reload', 'Failed to parse response', {
    error: n.error.message
  }), pX('schema_violation'), {
    status: 'error'
  });
}
async function pq(e) {
  let t = await pY(pV, pj);
  if (t.status === 'error') return t;
  let {
    poisonedReleases
  } = t.data;
  let n = poisonedReleases.find(t => t.release === e);
  return n ? {
    status: 'poisoned',
    reloadRequest: {
      release: e,
      disableAutomaticReload: n.disableAutomaticReload ?? !1,
      disableFullscreenBanner: n.disableFullscreenBanner ?? !1,
      reloadIntervalMs: n.reloadIntervalMs,
      additionalViewsToReload: n.additionalViewsToReload ?? [],
      poisonedAt: n.poisonedAt ?? 0
    }
  } : {
    status: 'safe'
  };
}
async function p$(e, t) {
  let i = await pq(e);
  switch (i.status) {
    case 'safe':
      return {
        status: 'canceled'
      };
    case 'poisoned':
      return rv()(t, i.reloadRequest) ? {
        status: 'unchanged'
      } : {
        status: 'changed',
        reloadRequest: i.reloadRequest
      };
    case 'error':
      return i;
    default:
      throwTypeError(i);
  }
}
async function pZ(e) {
  let t = await pY(pG, pU);
  if (t.status === 'error') return t;
  let {
    commit,
    canaryCommit
  } = t.data;
  return {
    status: 'success',
    data: commit === e || canaryCommit === e
  };
}
function pX(e) {
  analyticsEventManager.trackDefinedEvent('scenegraph_and_sync.force_client_reload_aborted', {
    reason: e
  });
}
let pQ = !1;
async function pJ(e, t) {
  let i = Math.random() * t.reloadIntervalMs;
  logInfo('force client reload', 'Waiting for reload interval', {
    reloadInterval: i
  });
  let n = delay(i).then(() => ({
    status: 'done'
  }));
  let r = () => {};
  let a = new Promise(i => {
    r = function (e, t, i) {
      let n = setInterval(async () => {
        let n = await p$(e, t);
        (n.status === 'canceled' || n.status === 'changed') && i(n);
      }, 3e4);
      return () => clearInterval(n);
    }(e, t, e => i(e));
  });
  let s = await Promise.race([n, a]);
  if (r(), s.status !== 'done') return s;
  {
    let i = await p$(e, t);
    switch (i.status) {
      case 'changed':
        return i;
      case 'canceled':
      case 'error':
        return {
          status: 'canceled'
        };
      case 'unchanged':
        return {
          status: 'done'
        };
      default:
        throwTypeError(i);
    }
  }
}
async function p0(e, t) {
  let i = await pJ(e, t);
  switch (i.status) {
    case 'canceled':
    case 'done':
      return i;
    case 'changed':
      pX('updated_reload_request');
      return p0(e, i.reloadRequest);
    default:
      throwTypeError(i);
  }
}
function p1(e, t, i) {
  e === 'poisoned' ? analyticsEventManager.trackDefinedEvent('scenegraph_and_sync.force_client_reload_poisoned', {
    selectedView: i.getState().selectedView.view,
    coarseSelectedView: p3(i),
    isSafeToReload: pB(i, t.additionalViewsToReload),
    reloadInterval: t.reloadIntervalMs,
    additionalViewsToReload: t.additionalViewsToReload.join(','),
    disableFullscreenBanner: t.disableFullscreenBanner,
    disableAutomaticReload: t.disableAutomaticReload,
    isBackgrounded: document.hidden
  }) : e === 'triggered' ? analyticsEventManager.trackDefinedEvent('scenegraph_and_sync.force_client_reload_triggered', {
    selectedView: i.getState().selectedView.view,
    coarseSelectedView: p3(i),
    isSafeToReload: pB(i, t.additionalViewsToReload),
    reason: 'release',
    reloadInterval: t.reloadIntervalMs,
    additionalViewsToReload: t.additionalViewsToReload.join(','),
    disableFullscreenBanner: t.disableFullscreenBanner,
    disableAutomaticReload: t.disableAutomaticReload,
    isBackgrounded: document.hidden
  }) : throwTypeError(e);
}
async function p2(e, t, i) {
  if (logInfo('force client reload', 'Release is poisoned', t), p1('poisoned', t, i), (await p0(e, t)).status === 'canceled') {
    pX('reload_cancel');
    return 'canceled';
  }
  let n = await pZ(e);
  return n.status === 'error' ? (pX('fetch_error_currently_deployed'), 'canceled') : n.data ? (pX('on_currently_deployed'), 'canceled') : (p1('triggered', t, i), logInfo('force client reload', 'Reload when convenient', {
    selectedView: i.getState().selectedView.view
  }), t.disableFullscreenBanner || atomStoreManager.set(_$$T4, !0), t.disableAutomaticReload || i.dispatch(Dl({
    reason: 'force client reload',
    delay: RH.NONE,
    metadata: {
      isForceClientReload: !0
    },
    additionalViewsToReload: t.additionalViewsToReload
  })), 'reloading');
}
var p5 = (e => (e.SAFE = 'safe', e.WAITING_FOR_RELOAD_INTERVAL = 'waiting_for_reload_interval', e.RELOADING = 'reloading', e))(p5 || {});
class p4 {
  constructor(e, t) {
    this._release = e;
    this._store = t;
    this._state = 'safe';
    this._lastReloadCheckTime = 0;
  }
  async check() {
    try {
      let e = Date.now();
      if (e - this._lastReloadCheckTime < pz) return;
      this._lastReloadCheckTime = e;
      let t = await pq(this._release);
      if (this._state === 'safe') {
        if (t.status === 'poisoned') {
          this._state = 'waiting_for_reload_interval';
          let e = await p2(this._release, t.reloadRequest, this._store);
          this._state = e === 'reloading' ? 'reloading' : 'safe';
        }
      } else {
        this._state === 'reloading' ? t.status === 'safe' && (_$$l2(), atomStoreManager.set(_$$T4, !1), this._state = 'safe', pX('reload_cancel_after_interval')) : this._state === 'waiting_for_reload_interval' ? logInfo('force client reload', 'Skipping check because reload interval is in progress') : throwTypeError(this._state);
      }
    } catch (e) {
      pQ || (reportError(_$$e.SCENEGRAPH_AND_SYNC, e, {
        tags: {
          force_client_reload: !0
        }
      }), pQ = !0);
    }
  }
  get state() {
    return this._state;
  }
}
function p3(e) {
  let t = e.getState();
  return t.selectedView.view === 'fullscreen' ? 'fullscreen' : isIncludedView(t.selectedView) ? 'file_browser' : t.selectedView.view === 'desktopNewTab' ? 'desktop_new_tab' : 'other';
}
let p6 = null;
let md = createOptimistThunk((e, {
  changes: t,
  previousAppModel: i
}) => {
  let n = e.getState();
  if (void 0 !== t.urlNodeId) {
    let r = n.selectedView;
    if (!(n.versionHistory.loading || r.versionId && r.versionId !== n.versionHistory.activeId)) {
      let n = function (e, t) {
        return void 0 !== e.urlNodeId ? e.urlNodeId != null && e.urlNodeId !== '' ? e.urlNodeId : null : t.urlNodeId != null ? t.urlNodeId : null;
      }(t, i);
      if (n !== r.nodeId) {
        let t = {
          ...r
        };
        n && (t.nodeId = n);
        e.dispatch(_$$sf(t));
      }
    }
  }
  void 0 !== t.currentPage && e.dispatch(UU());
  let r = i.multiplayerSessionState;
  let a = t.multiplayerSessionState;
  void 0 !== a && function (e, t, i) {
    updateJoinStatus(t, i);
    i === SchemaJoinStatus.SHOULD_UPGRADE ? (trackEventAnalytics('Upgrade Banner Shown'), e.dispatch(_$$il())) : i === SchemaJoinStatus.JOINED && e.dispatch(D9());
  }(e, r, a);
  void 0 !== t.currentTool && n.multiplayerEmoji.type === 'REACTING_OR_CHATTING' && e.dispatch(_$$mu());
});
let mp = createOptimistThunk((e, t) => {
  let i = e.getState().mirror.appModel;
  e.dispatch(mm(t));
  e.dispatch(_$$p3(t));
  e.dispatch(mh({
    ...t,
    previousAppModel: i
  }));
});
let mm = createOptimistThunk((e, t) => {
  let i = t.appModelChanges;
  let n = t.appModelChangesShouldIgnoreUserPrefs;
  let r = e.getState();
  let a = r.mirror && r.mirror.appModel || null;
  let s = !a.isReadOnly;
  let o = AppStateTsApi.propertiesPanelState().shownPropertiesPanels.getCopy();
  if (t.selection) {
    let t = r.pickerShown;
    t ? o && o[ItemType.TYPE_ITEM] && (t.id === J6 || t.id === AB || t.id === h2) || t.id === _$$o$ || t.id === _$$aN || t.id === vu || e.dispatch(XE()) : r.stylePickerShown.isShown && r.stylePickerShown.modal && e.dispatch(_$$Uv());
    r.instanceSwapPickerShown.isShown && e.dispatch(_$$vq());
    r.stylePreviewShown.isShown && (e.dispatch(_$$sw()), Fullscreen.selectStyle(_$$n2.INVALID, VariableStyleId.INVALID));
    Tm.clearCache();
  } else {
    r.stylePickerShown.isShown && (o && o[ItemType.FILL_ITEM] || e.dispatch(_$$Uv()));
  }
  if (i && (a.isInitialized && e.getState().progressBarState.mode === UIVisibilitySetting.OFF && function (e, t, i, n) {
    if (Ok()) {
      for (let r in i) {
        let a = mf.get(r);
        if (!a) continue;
        let s = i[r];
        let o = t[r];
        if (void 0 === o || s === o) continue;
        let l = a(s, {
          ...t,
          ...i
        }, e);
        if (!(!l || t.activeCanvasEditModeType === LayoutTabType.DEV_HANDOFF && r === 'hideMultiplayerCursors') && !n?.[r]) {
          e.dispatch(VisualBellActions.enqueue({
            type: 'settings_changed',
            ...l
          }));
          break;
        }
      }
    }
  }(e, a, i, n), i.selectedInteractions && s)) {
    let t = r.pickerShown?.id === _$$o$;
    let n = i.selectedInteractions.length > 0;
    t && !n && e.dispatch(XE());
  }
});
let mh = createOptimistThunk((e, t) => {
  let i = e.getState();
  desktopAPIInstance && function (e, t) {
    if (V || !t.isInitialized || (V = !0, e.view !== 'fullscreen')) return;
    let i = extractOriginalTextMap(t.keyboardShortcuts);
    desktopAPIInstance?.updateFullscreenMenuState({
      actionShortcuts: i
    });
  }(i.selectedView, i.mirror.appModel);
  t.appModelChanges && e.dispatch(md({
    changes: t.appModelChanges,
    previousAppModel: t.previousAppModel
  }));
  let n = t.selectionProperties?.derivedProperties.changes;
  n && _$$F9(i.user, i.mirror.sceneGraphSelection, n);
  e.dispatch(_$$q5());
  e.dispatch(_$$m4());
  e.dispatch(Ed());
  t.selection && t.selection.userTriggered && e.dispatch(mg());
});
let mg = createOptimistThunk(e => {
  let t = e.getState();
  t.selectedView.view === 'fullscreen' && atomStoreManager.set(_$$hg, {
    type: 'HANDLE_EDITOR_SELECTION_CHANGED',
    payload: {
      sceneGraph: t.mirror.sceneGraph
    }
  });
});
let mf = new Map([['hideMultiplayerCursors', e => ({
  message: e ? getI18nString('visual_bell.multiplayer_cursors_hidden') : getI18nString('visual_bell.multiplayer_cursors_visible')
})], ['showFrameGrids', (e, t, i) => jH() ? (_$$Gk(), {
  message: getI18nString('visual_bell.show_frame_guides_visible'),
  button: {
    text: getI18nString('visual_bell.show_frame_grids_hide_button'),
    action: e => {
      e.stopPropagation();
      i.dispatch(VisualBellActions.dequeue({}));
      AppStateTsApi.editorPreferences().showFrameGrids.set(!1);
    }
  }
}) : {
  message: e ? getI18nString('visual_bell.show_frame_guides_visible') : getI18nString('visual_bell.show_frame_guides_hidden')
}]]);
async function my(e) {
  try {
    let t = await _$$dO(e);
    !function (e, t) {
      let i = v7();
      let n = Object.entries(KeyboardLayout).find(([e, t]) => t === i)?.[0];
      let r = _$$ZN(t);
      let a = Object.entries(KeyboardLayout).find(([e, t]) => t === r)?.[0];
      let s = {
        layoutJSON: t.layoutJSON ? JSON.stringify(t.layoutJSON) : null,
        detectedLayouts: t.detectedLayouts ? JSON.stringify(t.detectedLayouts) : null,
        errorMessage: t.errorMessage,
        userLocale: t.userLocale,
        browserLocale: window.navigator.languages ? window.navigator.languages[0] : window.navigator.language,
        keyboardPreference: n,
        desktopKeyboard: t.desktopLayout,
        predictedLayout: a
      };
      _$$uE('keyboard_layout', e.getState(), s);
    }(e, {
      ...t,
      userLocale: e.getState().user?.locale
    });
  } catch (e) {
    console.error('Keyboard layout detection logging failed:', e);
  }
}
let mE = mI;
function mx() {
  let e = getInitialOptions().launchdarkly_client_side_id;
  let t = getFeatureFlags().launch_darkly_client_sdk;
  return !!e && !!t;
}
class mS {
  constructor() {
    if (!mx()) return;
    let e = getInitialOptions().launchdarkly_client_side_id || '';
    let t = getInitialOptions().launchdarkly_client_flags;
    let i = performance.now();
    this.ldClient = _$$n_(e, this.getUserContext(), {
      bootstrap: t,
      sendEventsOnlyForVariation: !0
    });
    let n = !!t;
    !function (e, t, i) {
      let n = e => ({
        duration: performance.now() - t,
        source: 'figma_app',
        bootstrapped: i,
        success: e
      });
      e.on('initialized', () => {
        trackEventAnalytics('launchdarkly_client_actual_init_time', n(!0), {
          forwardToDatadog: !0
        });
      });
      e.on('failed', () => {
        trackEventAnalytics('launchdarkly_client_actual_init_time', n(!1), {
          forwardToDatadog: !0
        });
      });
    }(this.ldClient, i, n);
    trackEventAnalytics('launchdarkly_client_block_time', {
      duration: performance.now() - i,
      source: 'figma_app',
      bootstrapped: n,
      success: !0
    }, {
      forwardToDatadog: !0
    });
  }
  getLDClient() {
    return this.ldClient;
  }
  getUserContext() {
    return {
      kind: 'user',
      key: getInitialOptions().user_data?.id,
      custom: {
        cluster_name: getInitialOptions().cluster_name || '',
        service: 'figma_app',
        is_desktop: !!desktopAPIInstance
      }
    };
  }
}
let mw = mE()(() => new mS());
function mR(e) {
  let t = useSelector(e => resolveTeamId(e));
  let i = useSelector(e => e.currentUserOrgId);
  useSubscription(OrgByIdForPlanView, {
    orgId: i ?? ''
  }, {
    enabled: !!i
  });
  useSubscription(OrgByIdForPlanUserView, {
    orgId: i ?? ''
  }, {
    enabled: !!i
  });
  useSubscription(TeamByIdForPlanView, {
    teamId: t ?? ''
  }, {
    enabled: !i && !!t
  });
  useSubscription(TeamByIdForPlanUserView, {
    teamId: t ?? ''
  }, {
    enabled: !i && !!t
  });
  useTeamPlanFeatures();
  useTeamPlanUser();
  return jsx(Fragment, {
    children: e.children
  });
}
function mN(e) {
  let {
    fonts,
    ...i
  } = e;
  let n = Object.keys(fonts).reduce((e, t) => (e[t] = '<TRUNCATED>', e), {});
  return {
    ...i,
    fonts: n
  };
}
function mF(e) {
  let t = _$$e5({
    overlay: DFF,
    priority: _$$N0.SURVEY
  });
  let i = useCallback(async () => await new Promise(e => {
    t.show({
      onBlocked: t => {
        logger.debug(`[Sprigma] Showing of survey blocked by overlay ${t}`);
        e(!1);
      },
      onLoadFailed: t => {
        logger.warn('[Sprigma] Showing of survey blocked by errors:', t);
        e(!1);
      },
      onShow: () => {
        e(!0);
      }
    });
  }), [t]);
  return jsx(_$$A1, {
    onAttemptToShowSurvey: i,
    onSurveyClose: t.complete,
    children: e.children
  });
}
function mB() {
  let e;
  let {
    Sprig
  } = useSprigWithSampling();
  let i = _$$sZ();
  let n = RR();
  let r = useCurrentPlanUser('TrackEnterDevHandoffModeWithSprig');
  let a = _$$D4();
  let o = useCurrentPlanUser('TrackEnterDevHandoffModeWithSprig').unwrapOr(null);
  let l = o?.devModePaidStatus === FPlanAccessType.FULL;
  (n ? r.data?.seatTypeLicenseTypes?.includes(FProductAccessType.DEV_MODE) : l) && a && (e = i?.bigma_enabled ? 'dev_mode_ent_full' : 'dev_mode_org_full');
  let c = useSelector(e => {
    if (e.selectedView.view === 'fullscreen') return e.selectedView.editorType;
  });
  useEffect(() => {
    Sprig('setAttributes', {
      dev_mode_full_seat: e
    });
  }, [Sprig, e]);
  useEffect(() => {
    if (c === FEditorType.DevHandoff) {
      let {
        viewer_city,
        viewer_region
      } = getInitialOptions();
      Sprig('track', 'enter_dev_handoff_mode', {
        city: viewer_city,
        region: viewer_region,
        dev_mode_full_seat: e
      });
    }
  }, [Sprig, c, e]);
  return null;
}
function mV() {
  let {
    viewer_city,
    viewer_region
  } = getInitialOptions();
  return {
    city: viewer_city,
    region: viewer_region
  };
}
let mG = {
  [FEditorType.Design]: {
    eventName: 'enter_design_editor',
    trackingCalls: [() => ({
      samplingRateDenominator: getFeatureFlags().perf_sentiment_survey ? 1 : 3,
      extraProperties: getFeatureFlags().perf_sentiment_survey ? void 0 : mV()
    }), () => ({
      samplingRateNumerator: 38,
      samplingRateDenominator: 100,
      extraProperties: getFeatureFlags().perf_sentiment_survey ? void 0 : mV()
    }), () => ({
      samplingRateNumerator: 45,
      samplingRateDenominator: 100,
      extraProperties: getFeatureFlags().perf_sentiment_survey ? void 0 : mV()
    })]
  },
  [FEditorType.Whiteboard]: {
    eventName: 'enter_figjam_editor',
    trackingCalls: [() => ({
      samplingRateDenominator: getFeatureFlags().perf_sentiment_survey ? 1 : 3
    }), {
      samplingRateNumerator: 38,
      samplingRateDenominator: 100
    }, {
      samplingRateNumerator: 45,
      samplingRateDenominator: 100
    }]
  },
  [FEditorType.Slides]: {
    eventName: 'enter_slides_editor',
    trackingCalls: [{
      samplingRateDenominator: 1
    }, {
      samplingRateNumerator: 38,
      samplingRateDenominator: 100
    }, {
      samplingRateNumerator: 45,
      samplingRateDenominator: 100
    }]
  },
  [FEditorType.Sites]: {
    eventName: 'enter_sites_editor',
    trackingCalls: [() => ({
      samplingRateDenominator: getFeatureFlags().perf_sentiment_survey ? 1 : 3
    }), {
      samplingRateNumerator: 38,
      samplingRateDenominator: 100
    }, {
      samplingRateNumerator: 45,
      samplingRateDenominator: 100
    }]
  }
};
function mz() {
  let {
    sprigTrackWithSampling
  } = useSprigWithSampling();
  let t = useSelector(e => {
    if (e.selectedView.view === 'fullscreen') return e.selectedView.editorType;
  });
  useEffect(() => {
    let i = t && mG[t];
    if (i) {
      let {
        eventName,
        trackingCalls
      } = i;
      for (let i of trackingCalls) {
        let r = typeof i == 'function' ? i() : i;
        sprigTrackWithSampling(eventName, {
          samplingRateDenominator: r.samplingRateDenominator,
          samplingRateNumerator: r.samplingRateNumerator
        }, {
          editorType: t,
          isUI3: !0,
          ...r.extraProperties
        });
      }
    }
  }, [sprigTrackWithSampling, t]);
  return null;
}
function mH() {
  let {
    Sprig
  } = useSprigWithSampling();
  let t = useSelector(e => isIncludedView(e.selectedView));
  useEffect(() => {
    t && getFeatureFlags().perf_sentiment_survey && Sprig('track', 'enter_file_browser');
  }, [Sprig, t]);
  return null;
}
function mW() {
  let {
    Sprig
  } = useSprigWithSampling();
  let t = _6();
  useEffect(() => {
    t.view === 'prototype' && getFeatureFlags().perf_sentiment_survey && Sprig('track', 'enter_prototype');
  }, [Sprig, t.view]);
  return null;
}
function mZ() {
  let {
    Sprig
  } = useSprigWithSampling();
  let t = useAtomWithSubscription(_$$dO2);
  let i = useLatestRef(t);
  useEffect(() => {
    i?.status === _$$c6.LOADING && t.status === _$$c6.SUCCESS && (t.type === 'board' ? Sprig('track', _$$Dl) : Sprig('track', _$$i_2));
  }, [Sprig, i, t]);
  return null;
}
function mJ() {
  let {
    Sprig
  } = useSprigWithSampling();
  let t = _$$aV2();
  let i = selectCurrentFile();
  let n = selectCurrentUser();
  useEffect(() => {
    if (t || i?.editorType !== FFileType.WHITEBOARD || !n || n.id !== i.creatorId) return;
    let r = Date.now() - i.createdAt.getTime();
    r >= 0 && r < 5e3 && Sprig('track', 'create_figjam_file');
  }, [Sprig, t, i?.editorType, i?.createdAt, i?.creatorId, n]);
  return null;
}
function m5() {
  let {
    Sprig
  } = useSprigWithSampling();
  let t = selectCurrentUser();
  let i = t && !_$$cn(t);
  let n = z3() === 'teamUpgrade';
  let r = _$$f4('entered_pro_cart_flow');
  let a = _$$f4('completed_pro_cart_flow');
  useEffect(() => {
    if (!r) return;
    let t = Date.now() - r.createdAt.getTime();
    i && !n && t < 75e4 && !a && Sprig('track', 'pro_cart_abandoned', {
      ms_since_cart_entry: t
    });
  }, [Sprig, i, n, r, 75e4, a]);
  return null;
}
function m3() {
  let {
    Sprig
  } = useSprigWithSampling();
  let t = _$$aV2();
  let i = selectCurrentFile();
  let n = selectCurrentUser();
  let r = _$$f4(_$$at);
  useEffect(() => {
    if (t || i?.editorType !== FFileType.SITES || !r || !n || n.id !== i.creatorId) return;
    let a = Date.now() - i.createdAt.getTime();
    a >= 0 && a < 5e3 && Sprig('track', 'create_sites_file');
  }, [Sprig, t, i?.editorType, i?.createdAt, i?.creatorId, n, r]);
  return null;
}
let hl = !0;
let hd = e => t => function (i) {
  if (getFeatureFlags().contentful_paint_performance_monitor && _$$sf.matches(i)) {
    if (hl) {
      hl = !1;
      Fi();
      return t(i);
    }
    rv()(i.payload, e.getState().selectedView) || YD();
  }
  return t(i);
};
let hc = e => t => function (i) {
  if (getFeatureFlags().datadog_rum_selected_view && _$$sf.matches(i)) {
    let t = e.getState().selectedView.view;
    let n = i.payload.view;
    datadogRum?.setViewContextProperty('selectedView', n);
    t !== n && datadogRum?.addAction('selectedView', {
      fromView: t,
      toView: n
    });
  }
  return t(i);
};
let hm = _$$ck4();
let hh = e => e => hm ? function (t) {
  return showModal.matches(t) && t.payload.type === _$$x4 ? window.self.origin !== window.parent.origin ? e(t) : void sendMessageToParent({
    action: 'showAuthModal',
    payload: {
      type: 'auth'
    }
  }) : _$$sf.matches(t) && (_$$K3(t.payload) || t.payload.view === 'folder') || Pp.matches(t) ? void 0 : e(t);
} : function (t) {
  return e(t);
};
let hv = 'frontend_commit_preview_tooltip--header--Lahum';
let hI = 'frontend_commit_preview_tooltip--separator--JUjSs';
function hE() {
  getCookieOrStorage().$$delete(H_, {
    includeDotDomainPrefix: !0
  });
  let e = new URLSearchParams(customHistory.location.search);
  (e.has(A7) || e.has(EL)) && (e.$$delete(A7), e.$$delete(EL), customHistory.replace(`${customHistory.location.pathname}?${e.toString()}${customHistory.location.hash}`, customHistory.location.state));
  customHistory.reload('Cleared frontend commit preview cookie');
}
let hx = _$$ex('frontend_commit_preview_indicator', ({
  desiredCommitSha: e,
  blockedReason: t
}) => {
  let i = useDispatch();
  let r = function () {
    let e = getCookieOrStorage().get(H_);
    return e != null && typeof e == 'object' && e.feature_flags && e.sha ? e : null;
  }();
  let a = e => {
    if (!r) return null;
    let {
      sha,
      feature_flags
    } = r;
    let n = !feature_flags[e];
    let a = {
      ...feature_flags,
      [e]: n.toString()
    };
    let s = Object.keys(a).map(e => `${e}=${a[e]}`).join(',');
    let o = new URL(customHistory.location.href);
    o.searchParams.set(EL, s);
    o.searchParams.set(A7, sha);
    customHistory.replace(o.toString(), customHistory.location.state);
    customHistory.reload(`Changing feature flag override ${e} to ${n}`);
  };
  let o = e => {
    i(_$$lW2({
      stringToCopy: e ?? '',
      successText: `Copied ${e} to clipboard`
    }));
  };
  return jsxs('div', {
    className: 'frontend_commit_preview_tooltip--root--5NA6i',
    children: [jsx('p', {
      className: hv,
      children: (() => {
        switch (t) {
          case 'feature_flag_off':
            return renderI18nText('frontend_sha_override_indicator.blocked_flag');
          case 'not_test_account':
            return renderI18nText('frontend_sha_override_indicator.blocked_user');
          case 'invalid_commit_sha':
            return renderI18nText('frontend_sha_override_indicator.blocked_commit');
          default:
            if (void 0 !== t) {
              return renderI18nText('frontend_sha_override_indicator.blocked_unknown', {
                blockedReason: t
              });
            }
            noop(t);
            return renderI18nText('frontend_sha_override_indicator.description');
        }
      })()
    }), jsx('button', {
      onClick: () => o(e),
      className: 'frontend_commit_preview_tooltip--sha--mulXs',
      children: e
    }), jsx('div', {
      className: hI
    }), r && jsxs(Fragment, {
      children: [jsx('p', {
        className: hv,
        children: 'Feature Flag Overrides'
      }), jsx('ul', {
        className: 'frontend_commit_preview_tooltip--featureFlagList--2wjPY',
        children: Object.entries(r.feature_flags).map(([e, t]) => jsxs('li', {
          className: 'frontend_commit_preview_tooltip--featureFlagRow--kmFuZ',
          children: [jsx('input', {
            className: 'frontend_commit_preview_tooltip--featureFlagCheckbox--jETT0',
            type: 'checkbox',
            checked: t,
            onChange: () => a(e)
          }), jsx('button', {
            className: 'frontend_commit_preview_tooltip--featureFlagName--cZf9L',
            onClick: () => o(e),
            children: e
          })]
        }, e))
      }), jsx('div', {
        className: hI
      })]
    }), jsx($n, {
      variant: 'primary',
      onClick: hE,
      children: renderI18nText('frontend_sha_override_indicator.return_to_latest')
    })]
  });
}, e => ({
  desiredCommitSha: e.getAttribute('data-tooltip-desired-commit-sha') ?? void 0,
  blockedReason: e.getAttribute('data-tooltip-blocked-reason') ?? void 0
}));
let hT = {
  bottom: 30,
  left: 30
};
function hk(e) {
  let [t, i] = function () {
    let e = _$$l1();
    let [t, i] = useLocalStorageSync('developerDraggableIndicator', hT, {
      debounceTime: 1e3
    });
    let n = useRef({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    });
    let [, r] = _$$i5({
      onDragStart(e) {
        let {
          clientX,
          clientY
        } = e;
        let r = e.currentTarget.getBoundingClientRect();
        n.current = {
          left: clientX - r.left,
          right: r.width - (clientX - r.left),
          top: clientY - r.top,
          bottom: r.height - (clientY - r.top)
        };
      },
      onDrag(e) {
        let t = clamp(e.clientX, 0, window.innerWidth);
        let r = clamp(e.clientY, 0, window.innerHeight);
        let a = n.current;
        let s = t - a.left;
        i(function ({
          top: e,
          left: t,
          bottom: i,
          right: n
        }) {
          return {
            ...(e / window.innerHeight <= 0.5 ? {
              top: e
            } : {
              bottom: i
            }),
            ...(t / window.innerWidth <= 0.5 ? {
              left: t
            } : {
              right: n
            })
          };
        }({
          top: r - a.top,
          left: s,
          bottom: window.innerHeight - r - a.bottom,
          right: window.innerWidth - t - a.right
        }));
      }
    });
    return [useMemo(() => function (e, t) {
      let i = t.windowInnerHeight - 40;
      let n = t.windowInnerWidth - 40;
      let r = {
        ...e
      };
      'top' in r && (r.top = clamp(r.top, 0, i));
      'bottom' in r && (r.bottom = clamp(r.bottom, 0, i));
      'left' in r && (r.left = clamp(r.left, 0, n));
      'right' in r && (r.right = clamp(r.right, 0, n));
      return r;
    }(t, e), [t, e]), r];
  }();
  return createPortal(jsx('div', {
    ...i({
      className: 'frontend_commit_preview_indicator--root--7uD5-',
      style: {
        ...t
      }
    }),
    ...e,
    children: e.children
  }), document.body);
}
let hN = createLocalStorageAtom('should-suppress-frontend-commit-preview-indicator', !1, {
  subscribeToChanges: !0
});
function hP() {
  let {
    manifest_commit_sha_override_desired,
    manifest_commit_sha_override_blocked_reason,
    user_data
  } = getInitialOptions();
  let r = Ng(user_data?.email);
  let a = !!manifest_commit_sha_override_desired;
  let s = isNotNullish(manifest_commit_sha_override_blocked_reason);
  let o = !isInteractionPathCheck() && !s;
  let [l, c] = useAtomValueAndSetter(hN);
  return (useEffect(() => (a && (window.frontendCommitPreviewIndicator = {
    hide: () => c(!0),
    show: () => c(!1)
  }), () => {
    delete window.frontendCommitPreviewIndicator;
  }), [c, a]), !a || r || l) ? null : jsx(hk, {
    'data-tooltip-type': Ib.SPECIAL,
    'data-tooltip-desired-commit-sha': manifest_commit_sha_override_desired,
    'data-tooltip-max-width': 300,
    'data-tooltip-blocked-reason': manifest_commit_sha_override_blocked_reason,
    'data-tooltip': hx,
    'data-tooltip-interactive': !0,
    'data-tooltip-show-immediately': !0,
    'children': jsx(_$$B2, {
      svg: _$$A12,
      width: '40px',
      className: rP()('frontend_commit_preview_indicator--icon--aQl-E', o ? 'frontend_commit_preview_indicator--animated--gwUR5' : null, s ? _$$s.colorIconDisabled.$ : _$$s.colorIconDanger.$),
      autosize: !0,
      dataTestId: 'frontend-commit-preview-indicator'
    })
  });
}
let hD = {
  [languageCodes.JA]: 'desktop_language_support_modal_interacted_ja',
  [languageCodes.ES_ES]: 'desktop_language_support_modal_interacted_es_es',
  [languageCodes.KO_KR]: 'desktop_language_support_modal_interacted_ko_kr',
  [languageCodes.PT_BR]: 'desktop_language_support_modal_interacted_pt_br',
  [languageCodes.ES_LA]: 'desktop_language_support_modal_interacted_es_la'
};
let hL = {
  [languageCodes.JA]: renderI18nText('desktop_version_support.using_figma_in_japanese'),
  [languageCodes.ES_ES]: renderI18nText('desktop_version_support.using_figma_in_spanish'),
  [languageCodes.KO_KR]: renderI18nText('desktop_version_support.using_figma_in_korean'),
  [languageCodes.PT_BR]: renderI18nText('desktop_version_support.using_figma_in_portuguese'),
  [languageCodes.ES_LA]: renderI18nText('desktop_version_support.using_figma_in_latin_american_spanish')
};
let hF = _$$tf(_$$N2.Button);
function hM(e) {
  let {
    i18n_desktop_version_support
  } = getInitialOptions();
  return i18n_desktop_version_support?.[e];
}
let hj = registerModal(e => {
  let t = useModalManager(e);
  let i = getI18nState()?.getPrimaryLocale(!1);
  let r = useDispatch();
  let a = i && hD[i];
  let o = i && hL[i];
  let l = useSelector(e => a && !!e.userFlags[a]);
  if (a == null || o == null || l || !desktopAPIInstance) return null;
  let d = () => {
    r(_$$b({
      [a]: !0
    }));
  };
  return jsx(fu, {
    name: 'Desktop Language Support Modal',
    properties: {
      minVersion: hM(i)
    },
    children: jsx(bL, {
      manager: t,
      width: 'md',
      children: jsxs(_$$vo, {
        children: [jsx(Y9, {
          children: jsx(_$$hE2, {
            children: renderI18nText('desktop_version_support.update_recommended')
          })
        }), jsxs(_$$nB, {
          children: [jsx('p', {
            children: o
          }), jsx('br', {})]
        }), jsx(wi, {
          children: jsxs(jk, {
            children: [jsx($n, {
              variant: 'secondary',
              onClick: () => {
                d();
                r(popModalStack());
              },
              children: renderI18nText('desktop_version_support.close')
            }), jsx(hF, {
              onClick: () => {
                d();
                r(popModalStack());
              },
              href: `https://figma.com/${i}/downloads`,
              newTab: !0,
              children: renderI18nText('desktop_version_support.get_app')
            })]
          })
        })]
      })
    })
  });
}, 'DesktopLanguageSupportModal');
function hV() {
  if (!getFeatureFlags().svg_composite_layer) return null;
  let e = useFullscreenReady();
  useEffect(() => {
    if (e) {
      let e = _$$l10();
      e?.webgpuArchitecture.startsWith('metal') && document.body.classList.add('svg_compositing_layer_fix--svgCompositingLayerFix--myVwu');
    }
  }, [e]);
  return null;
}
let hG = () => null;
export async function $$hz0(e, t, d = {
  loadBlank: !1
}) {
  await e7(async () => {
    if (isInteractionPathCheck() || J1.connect(), desktopAPIInstance && !desktopAPIInstance.isFileBrowserTab() && !getInitialOptions().user_data) {
      _$$a();
      return;
    }
    TH(customHistory.location.search);
    registerDeferredCallback(ib);
    performanceMetricsTracker.domContentLoadedMs = Math.round(window.performance.now());
    xK.start('createStoreStart');
    let c = !!new URLSearchParams(customHistory.location.search).get('reduxDebug');
    let u = _$$A2.withExtraArgument({
      liveStore: M4
    });
    setTagGlobal('ReduxDevtoolsInstalled', !!window.__REDUX_DEVTOOLS_EXTENSION__);
    let p = Zz(Tw(u, ao, t_, sW, iK, iz, nS, nQ, i2, i6, ng, ns, am, oA, od, _$$Ay5, ob, ac, _$$v3, sK, sq, oo, of, hc, hd, hh), c && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__({
      stateSanitizer: mN
    }) : e => e, function (e, t) {
      let i = null;
      function n() {
        if (e?.(), i) {
          let e = i;
          i = null;
          e();
        }
        t?.();
      }
      return function (e) {
        let t = [];
        let i = t;
        function n() {
          i === t && (i = t.slice());
        }
        function r(e) {
          let t = !0;
          n();
          i.push(e);
          return function () {
            if (!t) return;
            t = !1;
            n();
            let r = i.indexOf(e);
            i.splice(r, 1);
          };
        }
        function a() {
          let e = t = i;
          for (let t = 0; t < e.length; t++) e[t]();
        }
        return t => (i, n) => {
          let s = t(i, n);
          return {
            ...s,
            dispatch: t => {
              let i = s.dispatch(t);
              e(a);
              return i;
            },
            subscribe: r,
            subscribeImmediate: s.subscribe
          };
        };
      }(e => {
        ec = n;
        requestDeferredExecution();
        i = e;
      });
    }(hW, hK));
    let b = y$(function () {
      let e = {
        ...pg,
        ...df(),
        auth: j2,
        openFile: cO,
        isOpenFileLoadedFromLiveGraph: cD,
        isFullscreenDocumentLoaded: cL,
        fileVersion: cM,
        needsUpgrade: cj,
        progressBarState: cU,
        showingReconnectingModal: cB,
        showingOpenDesktopAppModal: cV,
        saveStatus: cG,
        isRenaming: cP,
        pickerShown: CG,
        instanceSwapPickerShown: qI,
        stylePickerShown: XJ,
        voting: cu,
        shouldShowStackAlignmentPicker: _$$Mt,
        stylePreviewShown: dj,
        versionHistory: dV,
        multiplayer: cH,
        fonts: _$$lG,
        localFontAgentVersion: uu,
        library: lU,
        mirror: cE,
        styleSets: dM,
        colorPicker: dX,
        exportableItems: dJ,
        showingUpgradeBanner: cW,
        showingFileCreationFailureBanner: cY,
        showingDowntimeBanner: cK,
        interactionTestDialogShown: cX,
        leftPanel: cq,
        quickAccessTool: c$,
        imageDialogOpen: cZ,
        delightfulToolbarOverflowMenuOpen: cQ,
        isMakeSomethingV2Active: cJ,
        usedKeyboardShortcuts: cN,
        keyboardShortcutPanel: cg,
        multiplayerEmoji: c2,
        eyedropper: c5,
        hyperlinkPopup: c4,
        canvasMentionPopup: c3,
        recentlyUsedQuickCommands: c6,
        saveAsState: c7,
        timer: cd,
        music: d4,
        faceStamps: cF,
        currentSelectionPaintInPicker: c8,
        stylePickerListLayout: ui,
        instanceSwapPickerListLayout: us,
        preferredValuesPickerListLayout: uc,
        voice: dG,
        selectedComponentPropDefId: up,
        showingFileFooter: um,
        canvasSearch: dK,
        variablePickerShown: AJ,
        quickStart: cC,
        recentCustomTemplates: _$$A9,
        pickerInStyleCreationShown: vB,
        ...uj
      };
      return iP()(HY(e));
    }(), p);
    throttle(b);
    let x = await measureAsyncDuration('initI18nStateWithLocale', _$$e.GROWTH_PLATFORM, () => loadI18nState(!0));
    performanceMetricsTracker.i18nInitStateWithLocaleDurationMs = Math.round(x.duration);
    (function () {
      let e = getI18nState()?.getPrimaryLocale(!1);
      switch (e) {
        case 'ja':
          _$$A5.locale(e);
          return;
        case 'es-es':
        case 'es-la':
          _$$A5.locale('es');
          return;
        case 'fr':
          _$$A5.locale('fr');
          return;
        case 'de':
          _$$A5.locale('de');
          return;
        case 'pt-br':
          _$$A5.locale('pt-br');
          return;
        case 'ko-kr':
          _$$A5.locale('ko');
        default:
      }
    })();
    try {
      _$$d5.createInstance();
    } catch (e) {
      reportError(_$$e.WAYFINDING, e);
    }
    await hH();
    let T = null;
    let k = vU(b.getState(), customHistory.location.pathname).view;
    let R = window.sessionStateXHR;
    let P = window.userStateXHR;
    !function (e, t) {
      let i = getInitialOptions().user_data?.id;
      if (!i) return;
      MV(i);
      let {
        user_flags
      } = getInitialOptions();
      let r = {};
      if (user_flags) {
        for (let e of user_flags) {
          r[e.name] = {
            id: `${e.id}`,
            createdAt: new Date(e.created_at),
            updatedAt: new Date(e.updated_at)
          };
        }
        e(_$$A6(r));
      }
      WB().subscribe(BlockingUserState, {}, i => {
        if (i.status === 'loaded') {
          let n = {};
          for (let e of i.data.currentUser.userFlags) {
            n[e.name] = {
              id: e.id,
              createdAt: e.createdAt,
              updatedAt: e.updatedAt
            };
          }
          _$$f3(t(), n);
          e(_$$A6(n));
        }
      });
    }(b.dispatch, () => b.getState().userFlags);
    let O = new _$$P2();
    if (O.register(_$$D5, e => {
      b.dispatch(_$$id2({
        theme: e
      }));
    }), O.register(Nx, e => {
      b.dispatch(FY({
        enhancedContrast: e
      }));
    }), O.register(Ug, Cg), O.register(wc.MouseScrollToZoom, Zp), O.register(wc.RightClickDragToPan, _$$tB), O.register(_$$Kz.DESKTOP, () => _$$up2(_$$Kz.DESKTOP)), O.register(_$$Kz.HUNSPELL, () => _$$up2(_$$Kz.HUNSPELL)), h0(b), k === 'fullscreen' || k === 'communityHub' || !P) {
      let {
        editing_file
      } = getInitialOptions();
      T = {
        ...defaultUserConfig
      };
      editing_file && b.dispatch(yJ({
        file: editing_file
      }));
    }
    if (T) {
      let e = T;
      xK.time('initAndHydrateActionNoUserState', () => j(e));
    }
    if (R && (R.readyState === XMLHttpRequest.DONE ? D() : (R.addEventListener(XHR.Events.ABORT, D, !1), R.addEventListener(XHR.Events.TIMEOUT, D, !1), R.addEventListener(XHR.Events.ERROR, D, !1), R.addEventListener(XHR.Events.LOAD, D, !1))), P) {
      if (P.readyState === XMLHttpRequest.DONE) {
        await M();
      } else {
        let e = createDeferredPromise();
        let t = async () => {
          await M();
          e.resolve();
        };
        P.addEventListener(XHR.Events.ABORT, t, !1);
        P.addEventListener(XHR.Events.TIMEOUT, t, !1);
        P.addEventListener(XHR.Events.ERROR, t, !1);
        P.addEventListener(XHR.Events.LOAD, t, !1);
        await e.promise;
      }
    }
    async function D() {
      if (!R) throw new Error('start: expect sessionStateXHR to be defined');
      let e = null;
      let t = getWAFChallengeType(R);
      if (t && (await wafManager.waitForWAFValidation(t)), t || XHR.retryStrategyForStatusCode(R.status) !== XHR.RetryStrategy.NO_RETRY) {
        delete window.sessionStateXHR;
        e = (await _$$tp(10)).data.meta || null;
      } else {
        let t = R.responseText;
        e = JSON.parse(t)?.meta || null;
        delete window.sessionStateXHR;
      }
      if (e && !isIntegrationContext() && !_$$l()) {
        b.dispatch(_$$os(e));
        b.dispatch(q0(e));
        let t = new _$$P2();
        isInteractionPathCheck() || t.register(_$$y, e => {
          let t = getInitialOptions().user_data?.id;
          let i = e.users.some(e => e.id === t);
          if (t && i) {
            b.dispatch(_$$os(e));
          } else if (t) {
            if (desktopAPIInstance && !desktopAPIInstance.isFileBrowserTab()) {
              b.getState().selectedView.view !== 'desktopNewTab' && desktopAPIInstance.close({
                suppressReopening: !0
              });
            } else if (bellFeedAPIInstance) {
              let e = b.getState().authedUsers.orderedIds;
              bellFeedAPIInstance.loggedOut(e);
            } else {
              customHistory.redirect('/?fuid=');
            }
          }
        });
      }
      _$$tb.resolve();
    }
    async function M() {
      let e;
      if (!P) throw new Error('start: expect userStateXHR to be defined');
      performanceMetricsTracker.logUserStateInfo(P);
      let t = null;
      let i = getWAFChallengeType(P);
      i && (await wafManager.waitForWAFValidation(i));
      i || XHR.retryStrategyForStatusCode(P.status) !== XHR.RetryStrategy.NO_RETRY ? (delete window.userStateXHR, t = (await _X('onUserStateLoaded', 10)).response) : (t = P.responseText, delete window.userStateXHR);
      performanceMetricsTracker.jsonParseDurationMs = Math.round(measureSyncDuration('apiUserStateJsonParse', _$$e.APPLICATION_PLATFORM, () => {
        e = JSON.parse(t);
      }));
      T ? xK.time('hydrateActionWithUserState', () => {
        b.dispatch(Qv(e.meta));
        b.dispatch(_$$Xc());
      }) : j(e.meta);
      kb.resolve();
      b.dispatch(_$$o2());
      await my(b);
    }
    function j(c) {
      performanceMetricsTracker.fileBrowserInitDurationMs = Math.round(measureSyncDuration('fileBrowserInit', _$$e.WAYFINDING, () => {
        _$$a5(getInitialOptions().user_data || null, b, b.getState().userFlags, t);
        initializeFileImporter();
        b.dispatch(_$$De());
        b.dispatch(_$$S6());
        b.dispatch(_$$Ts());
      }));
      d.loadBlank ? U_(b, FEditorType.Design).catch(e => reportError(_$$e.SCENEGRAPH_AND_SYNC, e)) : d.newFileInfo && $N(b, d.newFileInfo, !0);
      performanceMetricsTracker.hydrateDurationMs = Math.round(measureSyncDuration('fileBrowserHydrate', _$$e.WAYFINDING, () => {
        trackEventAnalytics('file-browser-hydrate', {
          location: 'app_entry'
        });
        b.dispatch(Qv(c));
        b.dispatch(_$$Xc());
      }) || 0);
      b.getState().selectedView === _$$o4 && b.dispatch(_$$sf({
        view: 'recentsAndSharing'
      }));
      b.dispatch(FlashActions.init());
      getInitialOptions().promo && b.dispatch(_$$Ay4({
        promo: getInitialOptions().promo || null
      }));
      _$$M().catch(e => {
        logWarning('fonts', 'Unable to cache fonts', {
          error: e.message
        });
      });
      desktopAPIInstance && desktopAPIInstance.setMessageHandler((...[e, t]) => {
        if (e === 'newFile') {
          let e = t.editorType || FFileType.DESIGN;
          let i = t.source && typeof t.source == 'string' ? {
            from: t.source
          } : void 0;
          let n = getNewFileConfig({
            state: b.getState(),
            openNewFileIn: _$$ai.NEW_TAB,
            folderOverride: 'drafts',
            trackingInfo: i,
            editorType: e
          });
          b.dispatch(_$$uM(n));
        } else if (e !== 'handleAction' || desktopAPIInstance.isFileBrowserTab() || wl()) {
          if (e === 'handlePageCommand') {
            let {
              activeElement
            } = document;
            if (activeElement?.classList.contains('focus-target') || _$$t4(activeElement)) {
              let e = null;
              switch (t.pageCommand) {
                case 'redo':
                case 'undo':
                  e = t.pageCommand;
                  break;
                case 'selectAll':
                  e = 'select-all';
              }
              if (e) {
                let i = {};
                t.source && (i.source = t.source);
                fullscreenValue.isReady() && fullscreenValue.triggerActionInUserEditScope(e, i);
              }
            } else {
              document.execCommand(t.pageCommand);
            }
          } else if (e === 'handleUrl') {
            TH(t.params);
            let e = b.getState();
            let i = new URLSearchParams(t.params);
            let n = t.path.startsWith('/files/');
            let r = i.get('fuid');
            let a = r && r !== e.user?.id;
            let s = bW(t.path);
            let o = n && s !== e.currentUserOrgId;
            let l = yn(t.path);
            let d = n && l && l !== e.currentTeamId;
            if (a || o || d) {
              b.dispatch(qj());
              customHistory.redirect(`${t.path}${t.params}`);
              return;
            }
            let c = vU(e, t.path, t.params);
            c && (b.dispatch(_$$sf(c)), c.view === 'search' && b.dispatch(_$$H5({
              params: t.params
            })));
          } else if (e === 'handleUrlParams') {
            b.dispatch(_$$H5({
              params: t.params,
              hash: t.hash
            }));
          } else if (e === 'startPreloadedNewTab') {
            t9(b, {
              ...t,
              editorType: t.editorType
            });
          } else if (e === 'handlePluginMenuAction') {
            let e = b.getState();
            if (!t.pluginMenuAction || !PluginMenu.isMenuAction(t.pluginMenuAction)) return;
            Im({
              openFile: e.openFile,
              allSavedPlugins: e.installedPluginVersions.plugins,
              localExtensions: e.localPlugins,
              recentlyUsedPlugins: CR(e),
              org: e.currentUserOrgId ? e.orgById[e.currentUserOrgId] : null,
              userCanViewPlugins: canPerformAction(e),
              userCanRunExtensions: canRunExtensions(e),
              activeTextReviewPlugin: e.mirror.appModel.activeTextReviewPlugin,
              publishedPlugins: e.publishedPlugins,
              publishedWidgets: e.publishedWidgets
            }, 'osmenu', t.pluginMenuAction);
          } else if (e === 'segmentTrackEvent') {
            if (t.event === 'Desktop Tab Copy Link V2') {
              if (trackEventAnalytics('Desktop Tab Copy Link', t.params || void 0), t.params.source === 'context-menu') {
                let e = b.getState().openFile?.key;
                if (e == null || b.getState().selectedView.view !== 'fullscreen') return;
                _$$ds('File Share Link Copied', e, b.getState(), {
                  copyLinkSource: _$$d4[_$$d4.DESKTOP_FILE_TAB_CONTEXT_MENU]
                });
              }
            } else {
              let e = t.options;
              let i = void 0 !== e ? {
                batchRequest: e.batchRequest,
                forwardToDatadog: e.forwardToDatadog
              } : void 0;
              trackEventAnalytics(t.event, t.params || void 0, i);
            }
          } else if (e === 'showColorManagementSettings') {
            console.log('showColorManagementSettings');
          } else if (e === 'handleNewAudioCaption' && t.text.trim().length > 0) {
            _$$h2.getInstance()?.audioCaptionStream.addNewCaption(t.userId, t.timestamp, t.text);
          } else if (e === 'handleCaptionsInstallProgress') {
            b.dispatch(Kh(t.captionsInstallProgress));
          } else if (e === 'redeemAppAuth') {
            XHR.post('/api/session/app_auth/redeem', {
              g_secret: t.gSecret
            }).then(e => {
              b.dispatch(_l({
                workspace: e.data.meta.workspace,
                path: t.path
              }));
              getFeatureFlags().desktop_server_error_pages && desktopAPIInstance?.finishAppAuth(null);
            }).catch(e => {
              console.error(e);
              b.dispatch(VisualBellActions.enqueue({
                message: getI18nString('desktop_bindings.visual_bell.redeem_app_auth_error'),
                error: !0
              }));
            });
          } else if (e === 'handleSetFullScreen') {
            t.fullscreen ? b.dispatch(_$$r$()) : b.dispatch(ZH());
          } else if (e === 'handleCopyLink') {
            let e = removeQueryParam(window.location.href, 'viewport');
            let t = '';
            if (desktopAPIInstance.isFileBrowserTab() || wl()) {
              t = getI18nString('desktop_bindings.interstitial.page_link_copied');
              copyTextToClipboard(e).then(() => b.dispatch(VisualBellActions.enqueue({
                message: t
              })));
            } else {
              let i = b.getState();
              let n = i.openFile;
              if (!n) return;
              let r = i.selectedView.view === 'prototype';
              if (!$A(i.selectedView) && !r) {
                let t = parseQuery(customHistory.location.search);
                delete t.t;
                delete t.viewport;
                let n = _$$b2(i.sharingAttributionContextKey, _$$d4.DESKTOP_KEYBOARD_SHORTCUT);
                n && (t.t = n);
                let r = tT()(t) ? '' : `?${serializeQuery(t)}`;
                e = `${window.location.origin}${customHistory.location.pathname}${r}`;
              }
              let a = Object.keys(i.mirror.sceneGraphSelection);
              let s = a.length === 1 ? i.mirror.sceneGraph.get(a[0])?.type : null;
              let o = a.length && atomStoreManager.get(v2) ? i.mirror.sceneGraph.get(a[0]) : null;
              if (Wl(i.selectedView)) {
                t = getI18nString('desktop_bindings.visual_bell.summary_link_copied');
              } else if (s === 'FRAME') {
                t = getI18nString('desktop_bindings.interstitial.frame_link_copied');
              } else if (s === 'SECTION') {
                t = getI18nString('desktop_bindings.interstitial.section_link_copied');
              } else if (i.mirror.appModel.pagesList.length > 1) {
                t = getI18nString('desktop_bindings.interstitial.page_link_copied');
              } else if (_$$P3(i.selectedView)) {
                if (o) {
                  let t = parseQuery(customHistory.location.search);
                  delete t.viewport;
                  t['node-id'] = EO(o.guid);
                  let i = tT()(t) ? '' : `?${serializeQuery(t)}`;
                  e = `${window.location.origin}${customHistory.location.pathname}${i}`;
                }
                t = o ? getI18nString('copy_to_clipboard.slides.link_to_slide_copied_to_clipboard', {
                  name: o.name
                }) : getI18nString('desktop_bindings.visual_bell.slide_deck_link_copied');
              } else {
                t = getI18nString('desktop_bindings.visual_bell.file_link_copied');
              }
              b.dispatch(_$$S({
                fileKey: n.key,
                url: e,
                source: _$$d4.DESKTOP_KEYBOARD_SHORTCUT,
                visualBellMessageOverride: t
              }));
              b.dispatch(_$$b({
                used_copy_link_shortcut: !0
              }));
            }
          } else if (e === 'reportTranslationIssue') {
            let {
              locale,
              primaryLocale,
              id,
              issueType,
              errorMessage
            } = t.issue;
            if (!Object.values(TranslationErrors).includes(issueType)) return;
            reportTranslationIssue(locale, primaryLocale, id, issueType, errorMessage ? {
              message: errorMessage
            } : void 0);
          } else if (e === 'showFlashMessage') {
            t.flashErrorMessage && b.dispatch(FlashActions.error(t.flashErrorMessage));
          } else if (e === 'logOutAllUsers') {
            b.dispatch(S5());
          } else if (e === 'tabVisibilityChange') {
            desktopVisibilityEmitter.emit(t.isVisible ? 'visible' : 'hidden');
          } else if (e === 'windowStateChange') {
            atomStoreManager.set(tN, t.windowState);
          } else if (e === 'importFiles') {
            let e = {
              type: _$$A7.FILE_IMPORT,
              moveText: getI18nString('file_browser.file_move.import'),
              files: t.files,
              orgId: b.getState().currentUserOrgId
            };
            b.dispatch(showModalHandler({
              type: _$$J2(),
              data: e
            }));
          } else if (e === 'handleTabTitleRename') {
            let e = b.getState();
            let i = e.openFile?.key;
            i && (b.dispatch(Nw({
              file: {
                key: i
              },
              name: t.newTitle
            })), trackEventAnalytics('Desktop Tab Renamed', {
              fileKey: i,
              editorType: e.openFile?.editorType
            }));
          } else if (e === 'sendMCPQuery') {
            let {
              queryId,
              toolName,
              args,
              clientInfo
            } = t;
            if (!ic.consume()) {
              let t = 'Rate limit exceeded. Please try again later.';
              desktopAPIInstance.sendMCPResult(queryId, {
                error: t,
                errorObj: new Error(t)
              });
              return;
            }
            _$$r2(toolName, args, b, clientInfo).then(t => {
              desktopAPIInstance.sendMCPResult(queryId, {
                result: t
              });
            }).catch(t => {
              desktopAPIInstance.sendMCPResult(queryId, {
                error: t.message,
                errorObj: t
              });
            });
          } else if (e === 'sendMCPImageQuery') {
            let {
              queryId,
              filename
            } = t;
            LP(filename).then(t => {
              desktopAPIInstance.sendMCPImageResult(queryId, {
                result: t
              });
            }).catch(t => {
              desktopAPIInstance.sendMCPImageResult(queryId, {
                error: t.message,
                errorObj: t
              });
            });
          } else {
            e === 'sendMCPDeprecatedSSEAlert' ? _$$f() : e === 'updateEyedropper' && atomStoreManager.set(_$$U, t);
          }
        } else {
          let e = {};
          let i = b.getState();
          t.source && (e.source = t.source);
          t.action === 'save-as' ? (Dc(_$$hV2.SaveLocalFile, i.saveAsState, b.dispatch, t.action, ['0:0'], t.action), _$$ce2()) : t.action === 'export-all-frames-to-pdf' ? Dc(_$$hV2.Export, i.saveAsState, b.dispatch, t.action, [i.mirror.appModel.currentPage], t.action) : fullscreenValue.triggerActionInUserEditScope(t.action, e);
        }
      });
      desktopAPIInstance && desktopAPIInstance.setLocales(getI18nState().locales);
      (function (e) {
        let t = e.getState().selectedView;
        t.view === 'fullscreen' && desktopAPIInstance?.setEditorType(mapEditorTypeToString(e.getState().selectedView.editorType));
        t.view === 'prototype' && t.file.editor_type === 'slides' && desktopAPIInstance?.setEditorType('slides');
      })(b);
      (function () {
        let e = desktopAPIInstance;
        e != null && (J(Z, t => {
          t != null && e.updateColorProfile(t);
        }), J(Q, e => {
          e != null && B(debugState);
        }));
      })();
      GH();
      _$$aZ2(b);
      wy();
      (function (e) {
        let t = getI18nState()?.getPrimaryLocale(!1);
        if (!t || !desktopAPIInstance) return;
        let i = hM(t);
        let n = t && hD[t];
        (!n || !e.getState().userFlags[n]) && i && i > desktopAPIInstance.getVersion() && e.dispatch(showModalHandler({
          type: hj
        }));
      })(b);
      IK(b);
      _$$r3(b);
      R_(b);
      (function (e) {
        let t;
        let n;
        let r;
        function a(e = 'notset', t) {
          updateEnvironmentInfo({
            browser_name: 'VS Code Extension',
            vscode_extension_version: e
          });
          setContextGlobal('browser', {
            name: 'VS Code Extension',
            vscode_extension_version: e
          });
          t && w(t);
        }
        isVsCodeEnvironment() && (window.addEventListener('message', t => {
          (t.data.source === 'figma-vscode' || t.data.source === 'figma-vscode-index') && function (t) {
            switch (t.type) {
              case 'REGISTER_UI_CHANGE_OBSERVER':
              case 'REGISTER_CODE_CHANGE_OBSERVER':
              case 'REGISTER_MANIFEST_CHANGE_OBSERVER':
                w_.resolveMessage(t);
                break;
              case 'WRITE_NEW_EXTENSION_DIRECTORY_TO_DISK':
              case 'GET_ALL_LOCAL_FILE_EXTENSION_IDS':
              case 'REMOVE_LOCAL_FILE_EXTENSION':
              case 'GET_LOCAL_MANIFEST_FILE_EXTENSION_IDS_TO_CACHED_CONTAINS_WIDGET_MAP':
              case 'GET_LOCAL_MANIFEST_FILE_EXTENSION_IDS_TO_CACHED_METADATA_MAP':
              case 'UPDATE_CACHED_CONTAINS_WIDGET':
              case 'GET_LOCAL_FILE_EXTENSION_MANIFEST':
              case 'CREATE_MULTIPLE_NEW_LOCAL_FILE_EXTENSIONS':
              case 'GET_LOCAL_FILE_EXTENSION_SOURCE':
              case 'GENERATE_FIGMADOC':
                wS.resolveMessage(t);
                break;
              case 'TRACK_EVENT':
                trackEventAnalytics(t.data.eventName, t.data.eventProperties);
                break;
              case 'GET_HTML_SKELETON':
                b();
                break;
              case 'GET_FONT_IMPORTS':
                break;
              case 'SELECT_LAYER':
                (function (t, i) {
                  if (!t) throw new Error('No guid');
                  let n = m(e.getState().mirror.sceneGraph.guidFromDeveloperFriendlyId(t));
                  n ? (HandoffBindingsCpp.selectAndPanToNode(n.guid), i && setTimeout(() => {
                    Fullscreen.triggerAction('zoom-to-selection', void 0);
                  }, 100)) : console.error('no node matching guid');
                })(t.data.guid, t.data.zoomToSelection);
                break;
              case 'EXPAND_LAYER':
                (function () {
                  if (!o) return;
                  let e = HandoffBindingsCpp?.getAssetInfo(o.guid);
                  if (o?.childrenGuids && o.childCount > 0 && !vY(e, !0)) {
                    let e = o.childrenDisplayOrder === _$$k6.DESIGN ? o.childCount - 1 : 0;
                    let t = o?.childrenGuids[e];
                    HandoffBindingsCpp.selectAndPanToNode(t);
                  }
                })();
                break;
              case 'SELECT_PARENT_LAYER':
                l !== null && c !== null && HandoffBindingsCpp.selectAndPanToNode(l.guid);
                break;
              case 'SELECT_NEXT_LAYER':
                (function () {
                  let e;
                  let t;
                  if (l !== null && c !== null && v(c, l) && o?.guid !== _()) {
                    e = c;
                    let t = p ? e - 1 : e + 1;
                    let i = l.childrenGuids[t];
                    HandoffBindingsCpp.selectAndPanToNode(i);
                  } else if (l !== null && d !== null && u !== null && v(u, d) && l.guid !== _()) {
                    t = u;
                    let e = p ? t - 1 : t + 1;
                    let i = d.childrenGuids[e];
                    HandoffBindingsCpp.selectAndPanToNode(i);
                  }
                })();
                break;
              case 'SELECT_PREVIOUS_LAYER':
                (function () {
                  if (o?.guid === _()) {
                    ;
                  } else {
                    let e;
                    let t;
                    let i;
                    if (l !== null && c !== null && (e = c, t = l, p ? e < t.childCount - 1 : e > 0)) {
                      i = c;
                      let e = p ? i + 1 : i - 1;
                      let t = l.childrenGuids[e];
                      HandoffBindingsCpp.selectAndPanToNode(t);
                    }
                  }
                })();
                break;
              case 'CREATE_RELATED_LINK':
                I(t.data.url);
                break;
              case 'REMOVE_RELATED_LINK':
                E(t.data.url);
                break;
              case 'LOAD_FILE':
                var i;
                var n;
                i = t.data.fileKey;
                n = t.data.nodeId;
                e.dispatch(_$$sf({
                  view: 'fullscreen',
                  fileKey: i,
                  editorType: FEditorType.DevHandoff,
                  nodeId: n
                }));
                break;
              case 'OPEN_FIGMA_FILE_URL':
                (function (t) {
                  let i = new URL(`https://figma.com/file/${t}`);
                  let n = vU(e.getState(), i.pathname, i.search, i.hash);
                  'editorType' in n && (n.editorType = FEditorType.DevHandoff);
                  let r = e.getState().mirror.sceneGraphSelection;
                  e.dispatch(_$$sf(n));
                  let a = i.searchParams.get('node-id');
                  if (a) {
                    let t = e.subscribe(() => {
                      e.getState().mirror.sceneGraphSelection !== r && (HandoffBindingsCpp.selectAndFocusOnNode(a, !0), t());
                    });
                  }
                })(t.data.href);
                break;
              case 'GOTO_PAGE':
                x(t.data.nodeId);
                break;
              case 'INITIAL_SETUP':
                a(t.data.version, t.data.theme);
                break;
              case 'SET_THEME':
                w(t.data.theme);
                break;
              case 'GET_THUMBNAIL':
                (function (e) {
                  let t;
                  let i = m(e);
                  if (!i) return;
                  t = i.size.x < i.size.y ? new Point(248, 248 * (i.size.y / i.size.x)) : new Point(248 * (i.size.x / i.size.y), 248);
                  let n = _G(t, e, !0, BackgroundPattern.TRANSPARENT);
                  if (!n) {
                    console.error(`Error getting thumbnail for node ${e}`);
                    return;
                  }
                  LF(e, Pv(n.pixels, n.pixelSize), {
                    width: t.x,
                    height: t.y
                  });
                })(t.data.nodeId);
                break;
              case 'SET_FOCUS_NODE':
                HandoffBindingsCpp.setFocusNodeId(t.data.nodeId);
                break;
              case 'SET_FOCUS_MODE_ENABLED':
                HandoffBindingsCpp.setFocusModeEnabled(t.data.enabled);
                break;
              case 'REQUEST_MAPPING_SUGGESTION':
                h(t.data);
                break;
              default:
                console.error('Message type from VS Code not handled or is empty', t);
            }
          }(t.data);
        }), document.addEventListener('keydown', e => {
          let t = e.ctrlKey || e.metaKey;
          let i = e.key === 'x' || e.key === 'X';
          t && i && document.execCommand('cut');
        }), document.addEventListener('keydown', e => {
          let t = e.ctrlKey || e.metaKey;
          let i = e.key === 'c' || e.key === 'C';
          t && i && document.execCommand('copy');
        }), document.addEventListener('keydown', e => {
          let t = e.ctrlKey || e.metaKey;
          let i = e.key === 'v' || e.key === 'V';
          t && i && document.execCommand('paste');
        }), document.addEventListener('keydown', e => {
          let t = e.ctrlKey || e.metaKey;
          let i = e.key === 'a' || e.key === 'A';
          t && i && document.execCommand('selectAll');
        }), document.addEventListener('keydown', e => {
          if (!e.defaultPrevented) {
            let t = {
              altKey: e.altKey,
              code: e.code,
              ctrlKey: e.ctrlKey,
              isComposing: e.isComposing,
              key: e.key,
              location: e.location,
              metaKey: e.metaKey,
              repeat: e.repeat,
              shiftKey: e.shiftKey
            };
            window.parent.postMessage({
              type: 'KEYDOWN',
              data: JSON.stringify(t)
            }, '*');
          }
        }), function () {
          let i = null;
          let r = null;
          let a = null;
          let o = null;
          let l = _$$lX();
          let d = !1;
          let c = async () => {
            let c;
            let u = e.getState();
            let p = u.mirror;
            if (p.appModel.topLevelMode !== ViewType.DEV_HANDOFF) return;
            let m = p.appModel.devHandoffCodeLanguage;
            let h = p.appModel.devHandoffPreferences.codeExtensionPreferences[m.id];
            s = p.sceneGraph;
            let g = AppStateTsApi.devHandoffState().currentNodeId.getCopy();
            let _ = Object.keys(p.sceneGraphSelection);
            let y = _.length > 0 ? _[0] : null;
            let b = i !== y;
            g !== a && (c = s, g !== null && g !== defaultSessionLocalIDString && (_$$px2(c).rebuildNodeCache(), function (e, t) {
              let i = {};
              let n = [[e, 0]];
              for (; n.length > 0;) {
                let [e, r] = n.pop();
                let a = t.get(e);
                if (a) {
                  let s = HandoffBindingsCpp?.getAssetInfo(a.guid);
                  let o = q1.includes(a.type) ? void 0 : vY(s, !0) ? 'asset' : a.type === 'SYMBOL' || a.type === 'INSTANCE' ? 'symbol' : a.isStack ? 'stack' : a.type === 'TEXT' ? 'text' : 'generic';
                  if (!o) continue;
                  let l = a.devToolsOrderedVisibleChildren;
                  let d = l.length > 0 && !vY(s, !0);
                  i[e] = {
                    guid: t.developerFriendlyIdFromGuid(e),
                    name: a.name,
                    type: o,
                    children: d ? l.map(e => t.developerFriendlyIdFromGuid(e)) : void 0,
                    stackMode: a.inferredAutoLayoutResult?.stackMode ?? a.stackMode,
                    text: a.type === 'TEXT' ? a.characters : void 0,
                    depth: r
                  };
                  d && n.push(...l.map(e => [e, r + 1]));
                }
              }
              BG(e, i);
            }(g, c)), a = g);
            let v = p.appModel.currentPage;
            b ? (await f(y, s), i = y) : o?.id !== m.id ? (hQ(), o = m) : h && (h.unit !== l?.unit || h.scaleFactor !== l?.scaleFactor || h.customSettings && Object.keys(h.customSettings ?? {}).some(e => h.customSettings?.[e] !== l?.customSettings?.[e])) && (l = h, await A(i, h));
            r && r === v || (_$$sZ2(v), r = v, d = !1);
            let I = u.openFile;
            if (I && !rv()(I.name, n) && (GD(I.name), n = I.name, t = I.key), !d) {
              let e = p.appModel.pagesList;
              Fy(e, v) === DataLoadStatus.LOADED && (_$$rx(), d = !0);
            }
          };
          e.subscribe(c);
          fullscreenValue.onReady().then(() => {
            subscribeObservable(AppStateTsApi.devHandoffState().currentNodeId, {
              onChangeImmediate: c
            });
          });
        }(), a());
        let s = null;
        let o = null;
        let l = null;
        let d = null;
        let c = null;
        let u = null;
        let p = !1;
        function m(t) {
          if (!t) throw new Error('getNodeByGuid called with no guid');
          return e.getState().mirror.sceneGraph.get(t);
        }
        async function h(e) {
          if (!getFeatureFlags().dt_code_connect_vscode_assistant) {
            N$({
              requestId: e.requestId,
              error: 'Not available'
            });
            return;
          }
          if (trackEventAnalytics('Code Connect Mapping Suggestion Requested', {
            file_key: t,
            react_component_name: e.reactComponentName,
            figma_component_uri: e.figmaComponentUri,
            vscode_document_session_id: e.trackingContent.documentSessionId,
            vscode_document_uri: e.trackingContent.documentUri
          }), !o || !s) {
            N$({
              requestId: e.requestId,
              error: 'No selected node'
            });
            return;
          }
          (await _require).suggestMappings({
            reactComponentName: e.reactComponentName,
            reactComponentPropertyDetails: e.reactComponentPropertyDetails,
            figmaComponentUri: e.figmaComponentUri,
            sceneGraph: s,
            figmaComponentNode: o,
            existingDefinitionSoFar: e.existingDefinitionSoFar,
            extraContext: e.extraContext
          }).then(i => {
            trackEventAnalytics('Code Connect Mapping Suggestion Generated', {
              file_key: t,
              react_component_name: e.reactComponentName,
              figma_component_uri: e.figmaComponentUri,
              vscode_document_session_id: e.trackingContent.documentSessionId,
              vscode_document_uri: e.trackingContent.documentUri
            });
            N$({
              requestId: e.requestId,
              mappings: i
            });
          }).catch(t => {
            N$({
              requestId: e.requestId,
              error: t.message
            });
          });
        }
        async function f(t, i) {
          if (!t || t === defaultSessionLocalIDString) {
            _$$oF(void 0);
            _$$mX(void 0);
            l = null;
            d = null;
            c = null;
            u = null;
            return;
          }
          r = i.developerFriendlyIdFromGuid(t);
          _$$mX(r);
          o = m(t);
          c = (l = o?.parentNode || null) ? l.childrenGuids.indexOf(t) : null;
          u = (d = l?.parentGuid ? m(l.parentGuid) : null) ? d.childrenGuids.indexOf(l.guid) : null;
          p = l?.childrenDisplayOrder === _$$k6.DESIGN;
          await A(t, _$$lX());
          _$$oF(e.getState().mirror.selectionProperties.nodeText);
        }
        function _() {
          return AppStateTsApi.devHandoffState().currentNodeId.getCopy();
        }
        async function A(t, i) {
          if (!t || t === defaultSessionLocalIDString) return;
          let n = e.getState();
          let r = n.mirror.sceneGraph;
          let a = _$$S7(n);
          let {
            propertiesByLayer,
            error
          } = await _$$px2(r).getCSSPropertiesOfSubTree({
            nodeId: r.guidFromDeveloperFriendlyId(t),
            preferences: i,
            canRunCodegenArgs: a
          });
          if (error) {
            console.error(error);
            return;
          }
          Bt(Object.keys(propertiesByLayer).reduce((e, t) => ({
            ...e,
            [t]: {
              ...propertiesByLayer[t],
              layerName: m(r.guidFromDeveloperFriendlyId(propertiesByLayer[t]?.guid))?.name ?? 'unnamed'
            }
          }), {}));
        }
        async function b() {
          if (!r) return;
          let t = e.getState();
          let i = e.getState().mirror.sceneGraph;
          let n = _$$S7(t);
          let {
            code,
            error
          } = await _$$px2(i).getHTMLSkeleton({
            nodeId: r,
            canRunCodegenArgs: n
          });
          if (error) {
            console.error(error);
            return;
          }
          fL(code);
        }
        function v(e, t) {
          return p ? e > 0 : e < t.childCount - 1;
        }
        async function I(e) {
          if (!r || !t) return;
          let i = e.split('/');
          let a = i[i.length - 1] ?? 'Linked source file';
          let s = {
            node_id: r,
            link_name: a,
            link_url: e
          };
          let o = XHR.post(`/api/files/${t}/related_links`, s);
          await WB()?.optimisticallyCreate({
            DeveloperRelatedLink: {
              [`optimistic-link-${generateUUIDv4()}`]: {
                nodeId: r,
                fileKey: t,
                linkName: a,
                linkUrl: e,
                linkPreviewJson: null,
                isUserOverride: !1
              }
            }
          }, o);
          _L({
            ...s,
            file_key: t,
            file_name: n || ''
          });
        }
        async function E(e) {
          if (!r || !t) return;
          let i = e.split('/');
          let a = i[i.length - 1] ?? 'Linked source file';
          let s = {
            node_id: r,
            link_name: a,
            link_url: e
          };
          await XHR.del(`/api/files/${t}/related_links`, s);
          _$$Au({
            ...s,
            file_key: t,
            file_name: n || ''
          });
        }
        async function x(e) {
          await getSingletonSceneGraph().setCurrentPageFromNodeAsync(e);
        }
        function w(t) {
          e.dispatch(_$$Qh({
            theme: t,
            userInitiated: !1
          }));
        }
      })(b);
      initializeIntegrationEnvironment();
      wH(b);
      (function (e) {
        sendMetric('session_start', {});
        setInterval(() => {
          sendMetric('active_session', {
            is_safe_to_reload: pB(e),
            has_pending_reload: _$$rg(),
            is_showing_banner: atomStoreManager.get(_$$T4),
            is_backgrounded: document.hidden,
            selected_view: p3(e),
            reload_state: p6?.state ?? 'safe'
          });
        }, 3e5);
        setInterval(() => trackEventAnalytics('Force Client Reload Selected View', {
          view: e.getState().selectedView.view,
          is_safe_to_reload: pB(e),
          is_backgrounded: document.hidden,
          is_showing_banner: atomStoreManager.get(_$$T4),
          reload_state: p6?.state ?? 'safe'
        }), 36e5);
        let t = getFeatureFlags().force_client_reloads_v2_testing && isStagingCluster() && getInitialOptions().manifest_commit_sha_override_desired ? getInitialOptions().manifest_commit_sha_override_desired : getInitialOptions().release_manifest_git_commit;
        if (!t) {
          isLocalCluster() || reportError(_$$e.SCENEGRAPH_AND_SYNC, new Error('Missing release'), {
            extra: {
              release: t
            }
          });
          return;
        }
        p6 = new p4(t, e);
        let i = async () => {
          await p6?.check();
          setTimeout(i, document.hidden ? pH : pz);
        };
        i();
        window.addEventListener('visibilitychange', async () => {
          document.hidden || (await p6?.check());
        });
        window.addEventListener('online', async () => await p6?.check());
      })(b);
      let u = xK.time('initialReactRender', () => measureSyncDuration('initialRender', _$$e.CLIENT_PLATFORM, () => {
        let t = function (e) {
          if (!mx()) return e;
          let t = getInitialOptions().launchdarkly_client_side_id || '';
          try {
            let i = {
              clientSideID: t,
              context: mw().getUserContext(),
              ldClient: mw().getLDClient()
            };
            return GS(i)(e);
          } catch (t) {
            t.sentryTags = {
              launchdarkly_sdk: !0
            };
            reportError(_$$e.GROWTH_PLATFORM, t);
            return e;
          }
        }(() => {
          let t = jsx(Provider, {
            store: b,
            children: jsx(LivegraphProvider, {
              userId: getInitialOptions().user_data?.id || null,
              children: jsx(AtomProvider, {
                children: jsx(m, {
                  initialVersion: uiVariantName,
                  children: jsx(_$$r, {
                    debug: !1,
                    children: jsxs(T9, {
                      children: [jsx(hV, {}), jsxs(e5, {
                        children: [jsx(mF, {
                          children: jsx(mR, {
                            children: jsxs(_$$Q, {
                              backend: eb,
                              children: [jsx(mz, {}), jsx(mW, {}), jsx(mB, {}), jsx(mH, {}), jsx(mJ, {}), jsx(m3, {}), jsx(mZ, {}), jsx(_$$A11, {}), jsx(m5, {}), jsx(CustomRouter, {
                                children: jsx(e, {})
                              })]
                            })
                          })
                        }), jsx(hP, {}), jsx(hG, {})]
                      })]
                    })
                  })
                })
              })
            })
          });
          return getFeatureFlags().common_app_entry_suspense && !isInteractionOrEvalMode() ? jsx(_$$g, {
            fallback: null,
            source: 'common_app_entry',
            children: t
          }) : t;
        });
        let i = document.getElementById('react-page');
        getFeatureFlags().disable_google_translate && i.setAttribute('translate', 'no');
        _$$H(i).render(jsx(_$$tH, {
          boundaryKey: 'root',
          fallback: H4.DEFAULT_FULL_PAGE,
          hasCustomWASMBuild: y4,
          children: jsx(t, {})
        }));
      }));
      performanceMetricsTracker.initialRenderDurationMs = Math.round(u);
      performanceMetricsTracker.timeToLoadMs = Math.round(performance.now());
      performanceMetricsTracker.report(trackEventAnalytics);
    }
    await (eo || (eo = el()), eo);
    getSingletonSceneGraph().setChangeListenersConfig({
      getCurrentTimeMs: () => Date.now(),
      getTimeBudgetMs: () => 10,
      deferFn: e => (iC.add(e), requestDeferredExecution(), () => iC.$$delete(e))
    });
  });
}
let hH = async () => {
  if (_$$N9.shouldAutoOpen() && (await _$$oU(location.href))) {
    return new Promise(e => {
      _$$Q2().render(jsx(pS, {
        file: getInitialOptions().editing_file,
        onDismiss: e
      }));
    });
  }
};
function hW() {
  reactTimerGroup.start('react-render');
  let e = consumeFullscreenEventState();
  Object.keys(e).length > 0 && debugState.dispatch(mp(e));
  executeDeferredCallbacks();
  (function () {
    if (iC.size === 0) return;
    let e = [...iC];
    for (let t of (iC = new Set(), e)) t();
  })();
}
function hK() {
  reactTimerGroup.stop('react-render');
  (!isIntegrationContext() || isZoomIntegration()) && F2.focusIfUnfocused();
}
export const n = $$hz0;