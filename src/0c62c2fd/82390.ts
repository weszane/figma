import { Ay as _$$Ay2, xk as _$$xk } from '@stylexjs/stylex';
import B from 'classnames';
import { Fragment as _$$Fragment, createElement, PureComponent, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { connect, useDispatch, useSelector, useStore } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { useDebounce, useDebouncedCallback } from 'use-debounce';
import { $ as _$$$6 } from '../0c62c2fd/7113';
import { z as _$$z } from '../0c62c2fd/27771';
import { q as _$$q } from '../0c62c2fd/180986';
import { o as _$$o5 } from '../0c62c2fd/202688';
import { ay as _$$ay, dZ as _$$dZ, JC, Oe, T3, vW, VY, wu, y$ } from '../0c62c2fd/204732';
import { i as _$$i2 } from '../0c62c2fd/231188';
import { h as _$$h4 } from '../0c62c2fd/352835';
import { E as _$$E5 } from '../0c62c2fd/358013';
import { X as _$$X2 } from '../0c62c2fd/409644';
import { m as _$$m } from '../0c62c2fd/463766';
import { G as _$$G } from '../0c62c2fd/492296';
import { l as _$$l6 } from '../0c62c2fd/507428';
import { U as _$$U } from '../0c62c2fd/547944';
import { FolderPageViewOmnicreateDropdown } from '../0c62c2fd/556466';
import { O as _$$O4 } from '../0c62c2fd/621155';
import { w as _$$w } from '../0c62c2fd/669330';
import { R as _$$R } from '../0c62c2fd/683241';
import { cx as _$$cx, jS } from '../0c62c2fd/774631';
import { h as _$$h5 } from '../0c62c2fd/831725';
import { L as _$$L } from '../0c62c2fd/860164';
import { w as _$$w6 } from '../0c62c2fd/912149';
import { a as _$$a1, R as _$$R7 } from '../0c62c2fd/950366';
import { I as _$$I, SidebarRow } from '../451de8f0/94979';
import { reportError, SeverityLevel } from '../905/11';
import { consumptionPaywallUtils } from '../905/224';
import { O as _$$O7 } from '../905/6519';
import { R as _$$R5 } from '../905/11928';
import { K as _$$K2 } from '../905/12775';
import { L as _$$L2 } from '../905/13390';
import { cz as _$$cz, i8 as _$$i6 } from '../905/14017';
import { um as _$$um } from '../905/14223';
import { DeepLinkType } from '../905/15667';
import { CloseButton } from '../905/17223';
import { H as _$$H6 } from '../905/17478';
import { NotificationType } from '../905/18613';
import { isLoaded, isLoading, useIsLoaded, useIsLoading } from '../905/18797';
import { useMemoStable } from '../905/19536';
import { editorUtilities as _$$k4 } from '../905/22009';
import { W as _$$W5 } from '../905/25249';
import { a as _$$a13 } from '../905/29104';
import { setBrowserTileSortView, setBrowserViewBarModeOptions, setBrowserViewBarSortOptions, trackSidebarClick } from '../905/34809';
import { z4 as _$$z0 } from '../905/37051';
import { l as _$$l8 } from '../905/37596';
import { ModalRootComponent } from '../905/38914';
import { i as _$$i5 } from '../905/46262';
import { m as _$$m3 } from '../905/52659';
import { E as _$$E0 } from '../905/53857';
import { f as _$$f7 } from '../905/54715';
import { B as _$$B4 } from '../905/55104';
import { isCommandOrShift, KeyCodes } from '../905/63728';
import { y as _$$y4 } from '../905/76789';
import { n as _$$n5 } from '../905/79930';
import { an as _$$an, y$ as _$$y$, PW } from '../905/81009';
import { jv as _$$jv, vu } from '../905/84777';
import { combineWithHyphen, ShareContext } from '../905/91820';
import { UserAPIHandlers } from '../905/93362';
import { setLastVisitedPlan } from '../905/93909';
import { W as _$$W } from '../905/95038';
import { ModalSupportsBackground, registerModal } from '../905/102752';
import { selectWithShallowEqual } from '../905/103090';
import { U as _$$U4 } from '../905/103637';
import { J as _$$J } from '../905/125993';
import { F as _$$F3 } from '../905/126561';
import { J as _$$J7 } from '../905/129695';
import { KindEnum } from '../905/129884';
import { f as _$$f6, r as _$$r8 } from '../905/136283';
import { Fp } from '../905/148074';
import { e as _$$e0 } from '../905/149844';
import { t as _$$t5 } from '../905/150656';
import { hideModal, hideModalHandler, hideSpecificModal, popModalStack, popPrevModal, showModalHandler, updateModal } from '../905/156213';
import { i as _$$i } from '../905/159448';
import { pW as _$$pW } from '../905/160095';
import { Y5 } from '../905/163189';
import { ServiceCategories as _$$e } from '../905/165054';
import { UpsellModalType } from '../905/165519';
import { NotificationCategory } from '../905/170564';
import { F as _$$F4, y as _$$y2 } from '../905/171275';
import { Be as _$$Be } from '../905/172516';
import { Cm } from '../905/174697';
import { ResourceTypes, ResourceTypeSubset } from '../905/178090';
import { Z as _$$Z5 } from '../905/184216';
import { InputComponent } from '../905/185998';
import { HM } from '../905/190597';
import { w as _$$w3 } from '../905/191841';
import { p as _$$p5 } from '../905/195198';
import { J as _$$J6, q as _$$q5 } from '../905/202542';
import { h as _$$h } from '../905/207101';
import { H as _$$H5 } from '../905/209153';
import { x as _$$x8 } from '../905/211326';
import { V as _$$V4 } from '../905/223767';
import { extractFirstEmoji, removePrefixAndVariation } from '../905/225144';
import { C as _$$C2 } from '../905/226458';
import { Z as _$$Z3 } from '../905/236383';
import { delay } from '../905/236856';
import { PricingOptions } from '../905/237873';
import { z as _$$z7 } from '../905/239603';
import { sanitizeHtml, sanitizeInput } from '../905/241044';
import { l as _$$l3 } from '../905/241412';
import { UNASSIGNED } from '../905/247093';
import { A as _$$A } from '../905/251970';
import { R as _$$R8 } from '../905/256203';
import { _ as _$$_9 } from '../905/263184';
import { HiddenLabel } from '../905/270045';
import { Cj } from '../905/270084';
import { createReduxSubscriptionAtomWithState } from '../905/270322';
import { Tf } from '../905/280919';
import { useTheme } from '../905/289770';
import { $ as _$$$5 } from '../905/293658';
import { e as _$$e6 } from '../905/295932';
import { $ as _$$$8 } from '../905/302575';
import { VisualBellActions } from '../905/302958';
import { getI18nString, getTranslatedDynamicContent, renderI18nText } from '../905/303541';
import { R as _$$R0 } from '../905/304671';
import { T as _$$T2, v as _$$v2 } from '../905/309844';
import { C as _$$C5 } from '../905/314082';
import { m3 as _$$m4 } from '../905/315794';
import { FolderSortKey, FolderViewType, getProjectUrl } from '../905/316062';
import { isAutosaveFile } from '../905/327522';
import { collaboratorSet } from '../905/332483';
import { a as _$$a12 } from '../905/332662';
import { S as _$$S8 } from '../905/335273';
import { selectTeams } from '../905/338617';
import { UI3ConditionalWrapper } from '../905/341359';
import { wR } from '../905/346715';
import { Y as _$$Y8 } from '../905/347011';
import { P as _$$P2 } from '../905/347284';
import { n as _$$n4 } from '../905/347702';
import { A as _$$A10 } from '../905/351112';
import { rq as _$$rq2 } from '../905/351260';
import { z as _$$z6 } from '../905/353894';
import { V as _$$V6 } from '../905/355181';
import { LogLevelStr } from '../905/361972';
import { Yg } from '../905/362959';
import { BannerMessage } from '../905/363675';
import { UpgradeAction } from '../905/370443';
import { getUserId, selectCurrentUser, selectUser } from '../905/372672';
import { S as _$$S1 } from '../905/373189';
import { $ as _$$$4 } from '../905/379902';
import { FRequestsStr } from '../905/384551';
import { b as _$$b7 } from '../905/388233';
import { getMinimumBundle } from '../905/389382';
import { E as _$$E3 } from '../905/391888';
import { r as _$$r4 } from '../905/398386';
import { renderEmojiShortcodes } from '../905/403166';
import { s as _$$s5 } from '../905/403855';
import { z as _$$z3 } from '../905/404751';
import { yZ } from '../905/407352';
import { LazyInputForwardRef } from '../905/408237';
import { s as _$$s8 } from '../905/411990';
import { rq as _$$rq } from '../905/425180';
import { t as _$$t8 } from '../905/433510';
import { colorToHex } from '../905/436288';
import { useModalManager } from '../905/437088';
import { Link } from '../905/438674';
import { DefaultGroups, GroupType, UserGroupRole } from '../905/441038';
import { $ as _$$$7 } from '../905/442144';
import { W as _$$W6 } from '../905/442612';
import { IconButton } from '../905/443068';
import { k as _$$k3 } from '../905/443820';
import { H as _$$H } from '../905/444904';
import { NN, w4, y1 } from '../905/445814';
import { analyticsEventManager, trackEventAnalytics } from '../905/449184';
import { e as _$$e1 } from '../905/457828';
import { dy as _$$dy, rS as _$$rS, Zp as _$$Zp, DG } from '../905/462076';
import { notificationActions } from '../905/463586';
import { uo as _$$uo2, bE } from '../905/466026';
import { AutoLayout } from '../905/470281';
import { H as _$$H7 } from '../905/474029';
import { R as _$$R4 } from '../905/483499';
import { e as _$$e9 } from '../905/483726';
import { bL as _$$bL3, c$ as _$$c$2, l9 as _$$l5, mc as _$$mc3 } from '../905/493196';
import { q as _$$q4 } from '../905/495564';
import { handleAtomEvent } from '../905/502364';
import { z as _$$z12 } from '../905/502533';
import { extractPropertyFromNestedObjects } from '../905/504360';
import { Cf } from '../905/504727';
import { Y9 as _$$Y6, yu } from '../905/504768';
import { Y as _$$Y } from '../905/506207';
import { compareValues, createRect, navigateToFile, openWindow } from '../905/508367';
import { l as _$$l7 } from '../905/509505';
import { z as _$$z11 } from '../905/510753';
import { T as _$$T7 } from '../905/514205';
import { Dd, OJ } from '../905/519092';
import { APILoadingStatus } from '../905/520829';
import { Button, ButtonLarge, ButtonWide } from '../905/521428';
import { I as _$$I3 } from '../905/531560';
import { P as _$$P5 } from '../905/537307';
import { globalPerfTimer } from '../905/542194';
import { DashboardSections, MemberSections, NavigationRoutes } from '../905/548208';
import { AccessLevelEnum } from '../905/557142';
import { hT as _$$hT, YM as _$$YM } from '../905/561087';
import { isSitesFeatureEnabled } from '../905/561485';
import { U as _$$U2 } from '../905/566881';
import { r as _$$r6 } from '../905/571562';
import { N as _$$N4 } from '../905/572042';
import { FlashActions } from '../905/573154';
import { e as _$$e10 } from '../905/579755';
import { x as _$$x2 } from '../905/587214';
import { O as _$$O5 } from '../905/587457';
import { nl as _$$nl, H8, Pf } from '../905/590952';
import { getFeatureFlags } from '../905/601108';
import { observabilityClient } from '../905/602906';
import { g as _$$g5 } from '../905/607862';
import { EM, QL } from '../905/609392';
import { Timer } from '../905/609396';
import { i as _$$i4 } from '../905/610691';
import { customHistory, getPreviousSelectedView } from '../905/612521';
import { buildFileUrl, getDesignFileUrlConditional } from '../905/612685';
import { setupThemeContext } from '../905/614223';
import { e as _$$e3 } from '../905/621515';
import { Z as _$$Z2 } from '../905/622097';
import { ButtonPrimitive } from '../905/632989';
import { A as _$$A30, y as _$$y5 } from '../905/638715';
import { getVisibleTheme } from '../905/640017';
import { g_ as _$$g_ } from '../905/646788';
import { d as _$$d2 } from '../905/647058';
import { PageFolderFile } from '../905/652992';
import { getResourceDataOrFallback } from '../905/663269';
import { In } from '../905/672640';
import { oW as _$$oW } from '../905/675859';
import { u as _$$u9 } from '../905/684425';
import { g as _$$g3 } from '../905/687265';
import { R as _$$R2 } from '../905/687502';
import { a as _$$a10 } from '../905/692930';
import { e as _$$e17 } from '../905/693478';
import { T as _$$T6 } from '../905/696189';
import { e0 as _$$e7, qo } from '../905/696396';
import { setEditorDocumentTitle, openFileInNewTab, userHasPlan, openFileInFullscreen } from '../905/697795';
import { X as _$$X } from '../905/698965';
import { L as _$$L4 } from '../905/704296';
import { H as _$$H3 } from '../905/706055';
import { D as _$$D5 } from '../905/711533';
import { Ju as _$$Ju } from '../905/712921';
import { gY as _$$gY, IT as _$$IT, liveStoreInstance } from '../905/713695';
import { SvgComponent } from '../905/714743';
import { X as _$$X6 } from '../905/718513';
import { tT as _$$tT } from '../905/723791';
import { restoredAutosaveKey, ipcStorageHandler } from '../905/725909';
import { NA } from '../905/738636';
import { ConsumptionPaywallModalPlansPricing } from '../905/739964';
import { c as _$$c9, s as _$$s7 } from '../905/744710';
import { l as _$$l4 } from '../905/745972';
import { F_ as _$$F_ } from '../905/748636';
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from '../905/751457';
import { findBranchById, isBranch, isBranchAlt } from '../905/760074';
import { l as _$$l2 } from '../905/767868';
import { u as _$$u4 } from '../905/774364';
import { _ as _$$_3 } from '../905/780571';
import { $x } from '../905/780715';
import { _ as _$$_8 } from '../905/793009';
import { N as _$$N2 } from '../905/794224';
import { x as _$$x3 } from '../905/796251';
import { H as _$$H4 } from '../905/799228';
import { getGroupOrDefault } from '../905/817247';
import { z as _$$z4 } from '../905/821223';
import { OrganizationType } from '../905/833838';
import { u as _$$u0 } from '../905/834238';
import { teamAPIClient } from '../905/834575';
import { Cy } from '../905/844322';
import { useCurrentUserOrg, useCurrentUserOrgId } from '../905/845253';
import { BK, Um } from '../905/848862';
import { h as _$$h0 } from '../905/857431';
import { EL, F_ } from '../905/858282';
import { Cn } from '../905/862913';
import { w as _$$w4 } from '../905/863010';
import { h as _$$h3 } from '../905/864281';
import { u as _$$u5 } from '../905/866761';
import { generateUUIDv4 } from '../905/871474';
import { getValueOrFallback } from '../905/872825';
import { VK, YK } from '../905/880488';
import { E as _$$E1 } from '../905/881732';
import { k as _$$k2 } from '../905/888808';
import { InterProfileType } from '../905/895626';
import { K as _$$K6 } from '../905/899124';
import { le as _$$le } from '../905/904854';
import { Z as _$$Z } from '../905/909123';
import { XHR } from '../905/910117';
import { F as _$$F2 } from '../905/915030';
import { A as _$$A3 } from '../905/920142';
import { a as _$$a } from '../905/925868';
import { hideDropdownAction, selectViewAction, showDropdownThunk } from '../905/929976';
import { J as _$$J8 } from '../905/931050';
import { I as _$$I2 } from '../905/932503';
import { ProfileRouteState, ResourceHubProfileRouteState } from '../905/934145';
import { lQ as _$$lQ } from '../905/934246';
import { v as _$$v4 } from '../905/939922';
import { selectUserFlag } from '../905/940356';
import { styleBuilderInstance } from '../905/941192';
import { fileEntityDataMapper } from '../905/943101';
import { t as _$$t2 } from '../905/947268';
import { a as _$$a2 } from '../905/948337';
import { B as _$$B2 } from '../905/950875';
import { ck as _$$ck2 } from '../905/952832';
import { ResourceStatus } from '../905/957591';
import { d as _$$d7 } from '../905/958822';
import { a as _$$a4 } from '../905/964520';
import { setupWorkspaceIdentity } from '../905/967587';
import { d as _$$d3 } from '../905/976845';
import { searchEndSessionAction, searchSetParametersAction, startSearchSessionAction } from '../905/977218';
import { i as _$$i3 } from '../905/977961';
import { TextWithTruncation } from '../905/984674';
import { postUserFlag } from '../905/985254';
import { h1 as _$$h6 } from '../905/986103';
import { resourceUtils } from '../905/989992';
import { p as _$$p3 } from '../905/991924';
import { h as _$$h8 } from '../905/994594';
import { a as _$$a7 } from '../905/999566';
import { P as _$$P4 } from '../1250/15189';
import { l as _$$l } from '../1250/91689';
import { X as _$$X5 } from '../1250/115566';
import { v as _$$v7 } from '../1250/140227';
import { FAVORITES_COUNT_CROSSED_THRESHOLD_EVENT } from '../1250/200830';
import { iM as _$$iM } from '../1250/214905';
import { G as _$$G2, Q as _$$Q3 } from '../1250/269770';
import { ZL } from '../1250/272654';
import { V as _$$V } from '../1250/329133';
import { c as _$$c7 } from '../1250/425092';
import { er as _$$er, yH as _$$yH2, GO, NQ, wO } from '../1250/461992';
import { mz as _$$mz, Us as _$$Us, Q$, zY } from '../1250/486464';
import { w as _$$w2 } from '../1250/501209';
import { rO as _$$rO, Gs } from '../1250/524544';
import { r as _$$r2 } from '../1250/527167';
import { a as _$$a5 } from '../1250/599462';
import { i_ as _$$i_, LQ as _$$LQ, Fz, M0, Pe, W6 } from '../1250/610336';
import { b as _$$b3 } from '../1250/641541';
import { g as _$$g2 } from '../1250/701065';
import { Sh as _$$Sh } from '../1250/729732';
import { Y as _$$Y9 } from '../1250/745256';
import { M as _$$M2, U as _$$U5 } from '../1250/758461';
import { Hx, j8, Wu } from '../1250/758553';
import { OC } from '../1250/791136';
import { v as _$$v5 } from '../1250/821962';
import { R as _$$R1 } from '../1250/835893';
import { i as _$$i8 } from '../1250/937941';
import { p as _$$p7 } from '../1250/964548';
import { W as _$$W7 } from '../1250/995935';
import { w as _$$w7 } from '../1556/124168';
import { Xg as _$$Xg } from '../1556/751556';
import { n as _$$n } from '../1577/959155';
import { A as _$$A14 } from '../1617/505000';
import { A as _$$A7 } from '../3850/824007';
import { getJobRoleDisplay } from '../3973/538504';
import { Z as _$$Z4 } from '../4452/80578';
import { aN as _$$aN, EK, Fd, wT } from '../4452/90195';
import { A as _$$A25 } from '../4452/239888';
import { K as _$$K7 } from '../4452/401058';
import { dr as _$$dr } from '../4452/405965';
import { r as _$$r0 } from '../4452/417339';
import { u as _$$u6 } from '../4452/434813';
import { n as _$$n6 } from '../4452/511872';
import { z as _$$z2 } from '../4452/541264';
import { am as _$$am } from '../4452/575555';
import { S as _$$S4 } from '../4452/606725';
import { c as _$$c4 } from '../4452/815584';
import { V as _$$V7 } from '../4452/876838';
import { Uc } from '../4452/915131';
import { e9 as _$$e4, Mn } from '../4452/961065';
import { OF } from '../5132/288241';
import { To } from '../5132/334833';
import { t as _$$t3 } from '../5132/435788';
import { I as _$$I5, n as _$$n7 } from '../5132/612716';
import { n as _$$n3 } from '../5132/715664';
import { D as _$$D3 } from '../5132/780644';
import { AJ, YA } from '../5132/879759';
import { W as _$$W3 } from '../5132/887999';
import { J as _$$J3 } from '../5132/948584';
import { X6 } from '../5430/28597';
import { _w as _$$_w } from '../5430/62487';
import { T as _$$T4 } from '../5430/126619';
import { m as _$$m2 } from '../5430/131744';
import { v as _$$v6 } from '../5430/143080';
import { Y as _$$Y5 } from '../5430/229344';
import { qU, TI } from '../5430/258075';
import { r4 as _$$r7, FD, GS } from '../5430/342380';
import { i as _$$i7 } from '../5430/372951';
import { e as _$$e11 } from '../5430/411458';
import { G as _$$G5 } from '../5430/465741';
import { pU as _$$pU, wH as _$$wH, x6 as _$$x4, IO, Mg } from '../5430/478538';
import { W as _$$W4 } from '../5430/484293';
import { u as _$$u8 } from '../5430/521178';
import { P as _$$P3 } from '../5430/540963';
import { S as _$$S6 } from '../5430/582465';
import { Y as _$$Y4 } from '../5430/601486';
import { e as _$$e14 } from '../5430/604204';
import { O as _$$O3 } from '../5430/638907';
import { V as _$$V5 } from '../5430/668915';
import { M as _$$M3 } from '../5430/704379';
import { S as _$$S7 } from '../5430/743953';
import { D as _$$D4 } from '../5430/769256';
import { FM } from '../5430/773914';
import { c5 as _$$c5, gM as _$$gM } from '../5430/823351';
import { X as _$$X4 } from '../5430/966412';
import { A as _$$A28 } from '../5724/663128';
import { A as _$$A24 } from '../5724/930602';
import { C as _$$C6 } from '../5885/53111';
import { S as _$$S10 } from '../5885/332447';
import { g_ as _$$g_2 } from '../5885/925885';
import { A as _$$A22 } from '../6041/578888';
import { A as _$$A6 } from '../6828/85206';
import { A as _$$A23 } from '../6828/493300';
import { A as _$$A5 } from '../6828/523860';
import { _ as _$$_4 } from '../7021/243271';
import { E as _$$E9 } from '../7021/427161';
import { K as _$$K4 } from '../7037/201222';
import { A as _$$A13, B as _$$B3 } from '../7037/575850';
import { x as _$$x6 } from '../7037/837002';
import { _K as _$$_K, lz as _$$lz, ng as _$$ng, pt as _$$pt, rC as _$$rC, uo as _$$uo3, W6 as _$$W2, CA, HH, JO, kg, Ox, q5, YM } from '../7222/418961';
import { k as _$$k5 } from '../7492/749199';
import { J as _$$J9 } from '../9420/278106';
import { X as _$$X7 } from '../9420/381913';
import { JR as _$$JR, Kh } from '../9420/975542';
import { O as _$$O6 } from '../9420/998877';
import { z as _$$z5 } from '../940032c6/265110';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { A as _$$A29 } from '../f2246930/458609';
import { nk as _$$nk } from '../figma_app/2023';
import { rv as _$$rv, BTz, c6t, cJy, cvy, Duq, fQh, HaT, hxO, I3H, I5n, I$z, j0N, j9$, jQF, K69, kBq, kmq, LB2, LPt, LQ8, Msu, NM0, O5v, O9D, Ob5, Q16, Ql8, Qlc, r3Y, rQs, sqw, tBR, Tp6, tUL, tZO, Ult, UmN, USq, Wb3, X5_, XIg, xPo, YHe, yjU, YPG } from '../figma_app/6204';
import { S as _$$S } from '../figma_app/11182';
import { o8 as _$$o1 } from '../figma_app/12220';
import { getAccessLevelLabels, isExternalRestricted } from '../figma_app/12796';
import { L as _$$L6 } from '../figma_app/23271';
import { yJ as _$$yJ3 } from '../figma_app/24841';
import { atom, createRemovableAtomFamily, createValidatedLocalStorageAtom, useAtomValueAndSetter, useAtomWithSubscription, Xr } from '../figma_app/27355';
import { ISO, tgj } from '../figma_app/27776';
import { Jt } from '../figma_app/28323';
import { o as _$$o7, s as _$$s3 } from '../figma_app/29593';
import { R as _$$R9 } from '../figma_app/32680';
import { ActiveFileUsersForFileView, AddWorkspacePinnedFileView, AddWorkspacePinSearchFilesView, AddWorkspacePinSuggestedFilesView, AssetTransferReloadView, DraftsToMoveFoldersByUserId, EduOffboardingData, EnterpriseOrgMetaContentView, FileBrowserDraftsViewBarView, FileBrowserProjectPageTitleView, FileBrowserWorkspacePageTeamsView, FilesInProjectHighLimit, FolderBannerView, FolderCanView, FolderPageView, LimitedSpaceSharedProjectsView, NonEnterpriseOrgMetaContentView, PaginatedFigFeed, PinnedFiles, PlanConnectedProjectsForPlanUser, SharedWithYouResources, TeamById, TeamCanAdmin, TeamCanEdit, TeamFileLimitsInfoByProject, TeamPermissions, TeamRoleRequestView, TeamUpgradeBannerView, TeamUpgradePermissions, TeamUserStatusAndRequests, TrashedFilesPageView, UserFlagByName, UserProfilePageView, WorkspacePageMembersView, WorkspacePageView, WorkspacesDirectoryView, WorkspaceSuggestedPinsView } from '../figma_app/43951';
import { CommunityPageType, isPlugin, UserRole } from '../figma_app/45218';
import { b as _$$b6 } from '../figma_app/47801';
import { rL as _$$rL } from '../figma_app/49598';
import { c as _$$c8 } from '../figma_app/52714';
import { FEditorType, mapFileTypeToEditorType, SITES_STRING } from '../figma_app/53721';
import { t as _$$t9 } from '../figma_app/55043';
import { BannerFullWidth, BannerInline } from '../figma_app/59509';
import { $$, nR as _$$nR, vd } from '../figma_app/60079';
import { $ as _$$$2, E as _$$E4 } from '../figma_app/61705';
import { batchPutFileAction, copyShareLinkOptimistic, filePutAction, setActiveFileUsersAction } from '../figma_app/78808';
import { O8, ql } from '../figma_app/88484';
import { gO as _$$gO, ox as _$$ox3, YP } from '../figma_app/88768';
import { DH } from '../figma_app/90441';
import { o as _$$o8, X as _$$X3 } from '../figma_app/91315';
import { F as _$$F8 } from '../figma_app/101188';
import { j as _$$j3, FL } from '../figma_app/102449';
import { u3 as _$$u, U6 as _$$U3, HS } from '../figma_app/109538';
import { Q as _$$Q, v as _$$v } from '../figma_app/113686';
import { ConfigGroups, isReduxDeprecationCutover, isReduxDeprecationShadowreadOrCutover } from '../figma_app/121751';
import { getDaysUntilExpiration, getGracePeriodAccessForKey, getGracePeriodAccessStatus, getGracePeriodDaysOrZero, getMinGracePeriodDays, hasEditorAccess, hasEditorAccessForAnyTeamMember, isStudentValidated, isTeamOwner } from '../figma_app/141320';
import { bn as _$$bn, D1, H6, z1 } from '../figma_app/147337';
import { uk as _$$uk } from '../figma_app/152745';
import { BV, TS } from '../figma_app/153399';
import { Xf } from '../figma_app/153916';
import { JR, Qp, Wi } from '../figma_app/162641';
import { SpaceAccessType } from '../figma_app/162807';
import { buildUploadUrl, getInitialOptions, getSupportEmail, isGovCluster } from '../figma_app/169182';
import { XZ } from '../figma_app/176973';
import { createNoOpValidator } from '../figma_app/181241';
import { categoryBySlugQuery } from '../figma_app/188671';
import { FAccessLevelType, FEntityType, FFileType, FMemberRoleType, FOrganizationLevelType, FOrganizationRoleType, FPaymentHealthStatusType, FPlanLimitationType, FPlanNameType, FProductAccessType, FResourceCategoryType, FStudentTeamStatusType, FTemplateCategoryType, FUserRoleType } from '../figma_app/191312';
import { areColorsEqual, isColorDarkByLuminance, parseColor, whiteColor } from '../figma_app/191804';
import { getSelectedViewUrl, isRecentsAndSharingView } from '../figma_app/193867';
import { a6 as _$$a11 } from '../figma_app/198840';
import { o as _$$o6 } from '../figma_app/198885';
import { BU, jl, LK, SX, Xg } from '../figma_app/199513';
import { NM } from '../figma_app/204891';
import { lg as _$$lg, ng as _$$ng2 } from '../figma_app/205827';
import { selectPermissionsState } from '../figma_app/212807';
import { DropdownThemeProvider } from '../figma_app/215667';
import { Dw as _$$Dw, sz as _$$sz } from '../figma_app/216696';
import { bW } from '../figma_app/223206';
import { vt } from '../figma_app/231614';
import { c$ as _$$c$, ms as _$$ms, MM, Ve } from '../figma_app/236327';
import { fetchTeamMembersThunk, getTeamAction, postTeamAction, restoreTeamThunk, setTeamCreationLoadingAction } from '../figma_app/240735';
import { p as _$$p4 } from '../figma_app/243977';
import { T as _$$T5 } from '../figma_app/257703';
import { ZF } from '../figma_app/258114';
import { N as _$$N } from '../figma_app/268271';
import { DialogBody, DialogContents, DialogHeader, DialogHiddenTitle } from '../figma_app/272243';
import { isMakeDiscoveryEnabled, isResourceHubEnabled, isResourceHubInternalSearchEnabled, isResourceHubProfilesEnabled, isTntSavingEnabled } from '../figma_app/275462';
import { DesignToolType } from '../figma_app/277543';
import { useMultiSubscription, useSubscription } from '../figma_app/288654';
import { FBGNavigationUpdatesVariants, useDismissibleUUBExperiment, useFBGNavigationUpdatesTreatment, useOneClickResubscribeExperiment, useSeparateBillingShippingExperiment, useStarterGlobalFileLimitsExperiment } from '../figma_app/297957';
import { y4 } from '../figma_app/298277';
import { filterPublishedResources, filterResourcesByMatch, filterResourcesByOrgOrPublisher } from '../figma_app/300692';
import { ResourceTypeEnum } from '../figma_app/306946';
import { sx as _$$sx3 } from '../figma_app/307841';
import { hp as _$$hp, vg as _$$vg, xs as _$$xs, DF, LP } from '../figma_app/310688';
import { DISABLED_TEAM_CREATION_BUTTON_HOVERED, FILE_BROWSER_FILE_CLICKED, logAndTrackCTA, TEAM_CREATION_BUTTON_HOVERED_TIMEOUT, trackFileBrowserFileClick, trackFileBrowserFileClicked, trackFileBrowserLoaded, trackFileBrowserPageVisit, trackUserEvent } from '../figma_app/314264';
import { useRouteMatchExists, useRouteParams, useRouteQuery, useRouteStateInstance, useSafeRouteParams, useSafeRouteStateInstance } from '../figma_app/321395';
import { getAllTimeSortOption, SortOptions } from '../figma_app/324237';
import { fO as _$$fO, ZM } from '../figma_app/329496';
import { Jt as _$$Jt2, GR, HD } from '../figma_app/330108';
import { h as _$$h7 } from '../figma_app/334471';
import { useEnterpriseOrgDirectoryEnabled, getCurrentUserOrg, isTemplatePickerDisabled } from '../figma_app/336853';
import { Il, Tj } from '../figma_app/342207';
import { getEditableUnpaidTeams, hasFolderRestrictions, hasTeamPaidAccess, hasValidSubscription, isGracePeriodEndingSoon, isOrgDelinquent, isTeamInGracePeriod, isTeamLocked, isTeamSubscribed, PRIMARY_LIMIT, STANDARD_LIMIT } from '../figma_app/345997';
import { chromeInstallPromptAtom, isChromebookTabbed, useChromeOSTabbed } from '../figma_app/347146';
import { toggleFigmentDebugger } from '../figma_app/347406';
import { aO as _$$aO } from '../figma_app/348887';
import { convertCamelToSnakeWithLeading, generateProtoLinkUrl, mapProjectSummary } from '../figma_app/349248';
import { MAX_BANNER_CLICKS, MAX_CAROUSEL_MEDIA, MAX_DESCRIPTION_LENGTH2, MAX_TAGS, MAX_WIDGETS, PublishSourceType } from '../figma_app/350203';
import { ResourceHubResourceRoute } from '../figma_app/354658';
import { s$ as _$$s$ } from '../figma_app/361035';
import { z as _$$z1 } from '../figma_app/369596';
import { bE as _$$bE } from '../figma_app/375098';
import { V as _$$V3 } from '../figma_app/385855';
import { getSelectedView, getSelectedViewType } from '../figma_app/386952';
import { getCurrentQueryId, getSearchSessionIdFromSelector } from '../figma_app/387599';
import { adminPermissionConfig, createComparator, defaultComparator, setupShadowRead, useShadowRead, useShadowReadLoaded } from '../figma_app/391338';
import { xF as _$$xF, WG } from '../figma_app/405906';
import { QJ } from '../figma_app/411744';
import { aq as _$$aq } from '../figma_app/412189';
import { o8 as _$$o2, sm as _$$sm } from '../figma_app/425283';
import { getMainContent, hasContent, hasLibraryKey, hasResourceType, isFigmakeTemplate, mapVtToFileType } from '../figma_app/427318';
import { zE as _$$zE, Jw } from '../figma_app/435872';
import { f as _$$f5 } from '../figma_app/436731';
import { $n as _$$$n, wv } from '../figma_app/439493';
import { zh } from '../figma_app/448654';
import { getActiveResourceHubSearchRoute, getActiveResourceHubSearchRouteStrict, getActiveSearchRouteWithCommunity } from '../figma_app/455722';
import { s1 as _$$s6 } from '../figma_app/464758';
import { getParentOrgIdIfOrgLevel, useCurrentPlanUser, useCurrentPrivilegedPlan, useCurrentPublicPlan, useIsOrgAdminUser, useIsOrgGuestUser, useIsOrgMemberOrAdminUser, useIsOrgUser, useIsStarterPlan, useIsTeamAdminUser, useSuspendCurrentPrivilegedPlan, useTeamPlanFeatures, useTeamPlanPublicInfo, useTeamPlanUser } from '../figma_app/465071';
import { assert, returnSecond, throwTypeError } from '../figma_app/465776';
import { sortOptions, ViewTypeEnum } from '../figma_app/471068';
import { A as _$$A2, x as _$$x } from '../figma_app/475340';
import { KQ as _$$KQ, Rw } from '../figma_app/475472';
import { WX as _$$WX, Bq, Vm } from '../figma_app/482142';
import { _ as _$$_7, S as _$$S9 } from '../figma_app/490799';
import { clamp, range } from '../figma_app/492908';
import { lT as _$$lT } from '../figma_app/494261';
import { LinkPrimitive } from '../figma_app/496441';
import { setRecentUserData } from '../figma_app/502247';
import { $c, g2 as _$$g4, gr as _$$gr, lI as _$$lI, lV as _$$lV, mc as _$$mc, bS, FU, KH, qD, ye, Zn } from '../figma_app/502363';
import { FC as _$$FC, BN } from '../figma_app/502422';
import { getUserCurrency } from '../figma_app/514043';
import { $E, $o, kF, WX } from '../figma_app/515363';
import { c4 as _$$c, eO as _$$eO, P as _$$P, Au, LM, NJ, z4, Zr } from '../figma_app/518077';
import { R as _$$R3, jn } from '../figma_app/522082';
import { P as _$$P7 } from '../figma_app/527262';
import { getOrgIdFromFolderOrTeam, getSidebarStringOrValue, getSortFilterConfig, hasRootPath, isOrgFolder, isRootPath, isTempId } from '../figma_app/528509';
import { Gv as _$$Gv } from '../figma_app/532170';
import { fA as _$$fA, gB as _$$gB, nb as _$$nb, nw as _$$nw, Tf as _$$Tf, uy as _$$uy, Nu, Y6, yF } from '../figma_app/543100';
import { uZ as _$$uZ, Jo, jU } from '../figma_app/544879';
import { userFlagExistsAtomFamily } from '../figma_app/545877';
import { S as _$$S0 } from '../figma_app/552746';
import { sendAutosaveNotification } from '../figma_app/553184';
import { pZ as _$$pZ } from '../figma_app/559491';
import { IW } from '../figma_app/563413';
import { handleSuspenseRetainRelease, setupResourceAtomHandler } from '../figma_app/566371';
import { hK as _$$hK } from '../figma_app/570310';
import { Lm as _$$Lm } from '../figma_app/579169';
import { oN as _$$oN } from '../figma_app/583114';
import { aH as _$$aH } from '../figma_app/591738';
import { getExperimentConfigAsync, selectExperimentConfigHook } from '../figma_app/594947';
import { getCurrentTeam, getCurrentTeamId, hasLegacyFilesLimitation, hasWhiteboardFilesBetaLimitation } from '../figma_app/598018';
import { getCurrentLocale } from '../figma_app/598412';
import { z6 as _$$z10, MR, qp } from '../figma_app/598926';
import { ResourceHubInternalSearchRoute, ResourceHubSearchRoute } from '../figma_app/600006';
import { a as _$$a0, z as _$$z8 } from '../figma_app/601188';
import { _O as _$$_O, CK } from '../figma_app/603826';
import { A as _$$A17 } from '../figma_app/608914';
import { x as _$$x7 } from '../figma_app/609500';
import { hX as _$$hX } from '../figma_app/614170';
import { $z, c as _$$c2, e6 as _$$e2, Ih, Me } from '../figma_app/617427';
import { e2 as _$$e13, li as _$$li } from '../figma_app/622574';
import { A5 as _$$A11, J5, jT } from '../figma_app/623414';
import { fileActionEnum, getTeamUrl, paymentActionRequirementEnum } from '../figma_app/630077';
import { BaseLinkComponent, BigButtonPrimaryTracked, BigTextInput, ButtonBasePrimaryTracked, ButtonBaseReversedContainer, ButtonLinkTracked, ButtonNegativeTracked, ButtonSecondary, ButtonSecondaryLinkTracked, ButtonSecondaryTracked, clickableBaseLinkTracked, linkWithTracking, trackedButtonClickHandler } from '../figma_app/637027';
import { Sh, yJ } from '../figma_app/637328';
import { getDefaultBrowseOptions } from '../figma_app/640564';
import { canAdminOrg, canAdminTeam, canEditTeam, canMemberOrg, canOwnTeam, getPermissionsState, getPermissionsStateMemoized, getRolesForUserAndTeam, hasMinRole, hasViewerRoleAccessOnTeam, isOrgUserExternallyRestrictedFromState } from '../figma_app/642025';
import { GG } from '../figma_app/643789';
import { DashboardSection, WorkspaceTab } from '../figma_app/650409';
import { COLLATOR, MAX_LENGTH, moveElement, sortByCreatedAt, sortByPropertyWithOptions } from '../figma_app/656233';
import { usePaginatedApi } from '../figma_app/661371';
import { C as _$$C7 } from '../figma_app/667500';
import { Cm as _$$Cm } from '../figma_app/672951';
import { wH } from '../figma_app/680166';
import { al as _$$al, ud as _$$ud, B2, b6 } from '../figma_app/681697';
import { Cz, EQ, MX, RG } from '../figma_app/684446';
import { canCreateAnyFileType, canCreateFileType, getDisabledCreationButtonReason, useProjectFileCreationPermissions } from '../figma_app/687776';
import { xH as _$$xH, vM, w3 } from '../figma_app/692865';
import { Vh } from '../figma_app/692987';
import { A as _$$A9, K as _$$K3 } from '../figma_app/694593';
import { hF as _$$hF, j as _$$j2, VY as _$$VY, CJ } from '../figma_app/698052';
import { EO } from '../figma_app/701982';
import { w as _$$w5 } from '../figma_app/705249';
import { CreateUpgradeAction, draftViews, EntityType, SidebarSection, TeamType, teamViews } from '../figma_app/707808';
import { wY } from '../figma_app/708845';
import { q as _$$q2 } from '../figma_app/712384';
import { hJ as _$$hJ } from '../figma_app/713624';
import { f4 as _$$f2, yH as _$$yH, Zm } from '../figma_app/722141';
import { BillingSettingEnum, OnboardingStepEnum } from '../figma_app/736948';
import { isCommunityHubView } from '../figma_app/740025';
import { a9 as _$$a3, LQ } from '../figma_app/741211';
import { M as _$$M, s as _$$s4 } from '../figma_app/749682';
import { FileType, FilterType, getFileTypeIndex, getResourceSortField, getSortFieldKey, getSortFieldProperty, getSortOrderKey, getViewModeKey, PermissionAction, PermissionType, SortField, SortOrder, ViewMode } from '../figma_app/756995';
import { ColorOptions } from '../figma_app/763686';
import { syncEditorResourceWithHistory } from '../figma_app/773663';
import { getResourceName, getResourceTypesForBrowse, getResourceUserCount } from '../figma_app/777551';
import { K0 } from '../figma_app/778125';
import { BrowserInfo, getIsAndroidOrIphoneNotFigmaMobile, isAndroidOrIphoneNotFigmaMobile, isMobilePlatformNotFigmaMobile } from '../figma_app/778880';
import { parseMsNumber, parsePxInt, parsePxNumber } from '../figma_app/783094';
import { R as _$$R10 } from '../figma_app/787018';
import { gY as _$$gY2 } from '../figma_app/797994';
import { az as _$$az, md as _$$md2, rE as _$$rE, Ro, z6 } from '../figma_app/805373';
import { ResourceHubCategoryRoute, useCategoryResourceHandler } from '../figma_app/805898';
import { memoizeByArgs } from '../figma_app/815945';
import { sP as _$$sP, flattenMessageMeta } from '../figma_app/819288';
import { Agb } from '../figma_app/822011';
import { BillingCycle, UpgradeSteps, UpsellSourceType } from '../figma_app/831101';
import { TrackedAnchor, TrackedButton, TrackedLink, TrackingProvider, useTracking, withTrackedClick, wrapWithTracking } from '../figma_app/831799';
import { e as _$$e5 } from '../figma_app/831857';
import { y$ as _$$y$2, Lj } from '../figma_app/835219';
import { p as _$$p9, u as _$$u7 } from '../figma_app/837956';
import { useAutosaveFilesWithPermissions, useUnsyncedAutosaveFiles } from '../figma_app/840917';
import { xT as _$$xT, E4, Rk } from '../figma_app/841415';
import { ps as _$$ps, ZY } from '../figma_app/845611';
import { SW } from '../figma_app/846003';
import { LoadingOverlay, LoadingSpinner } from '../figma_app/858013';
import { defaultSectionKey, DUserRole, TGroupType } from '../figma_app/858344';
import { MenuContainerComp, MenuGroupComp, MenuItemComp, MenuRootComp, setupMenu } from '../figma_app/860955';
import { ds as _$$ds, gV as _$$gV, sb as _$$sb, t$ as _$$t$, D6, kK, R3, T0, TF } from '../figma_app/863319';
import { VE } from '../figma_app/869776';
import { desktopAPIInstance, OpenTarget } from '../figma_app/876459';
import { cS as _$$cS2, hT as _$$hT2, Ho } from '../figma_app/878651';
import { C as _$$C4 } from '../figma_app/887997';
import { v as _$$v3 } from '../figma_app/899624';
import { debouncedTrackOrgEvent } from '../figma_app/901889';
import { $$if, de as _$$de, lF as _$$lF, ox as _$$ox, pS as _$$pS, to as _$$to, DN, Ic, jv, Mv, N9, qP, U6, V1, vg, vr, X7, yH, YI, ZW } from '../figma_app/909778';
import { TabOpenBehavior, FileBrowserLocation } from '../figma_app/915202';
import { resolveDashboardSection } from '../figma_app/915977';
import { ConfirmationModal2 } from '../figma_app/918700';
import { Badge, BadgeColor, BadgeLabels, BadgeSize } from '../figma_app/919079';
import { C8 as _$$C, Be } from '../figma_app/920435';
import { useLatestRef } from '../figma_app/922077';
import { searchEndSession, searchStartSession } from '../figma_app/925970';
import { encodeUri } from '../figma_app/930338';
import { TemplateCategory } from '../figma_app/930386';
import { qW } from '../figma_app/932285';
import { getAdminUsers, getCurrentUserOrgUser, getTopAdminUsers } from '../figma_app/951233';
import { E as _$$E7, J as _$$J4 } from '../figma_app/953812';
import { Wf as _$$Wf, zq as _$$zq, FK, zx } from '../figma_app/961422';
import { handleOrgMigration, loadTrashedFiles, openCreateTeamFlow, openUrlInContext, ReloadReasonEnum, selectFolderView, selectLimitedTeamSharedProjectsView, selectTeamView, switchAccountAndNavigate, trackFileClicked, trackRecentFileClicked, trashedFoldersQuery } from '../figma_app/976345';
import { RESOURCE_ROUTE, ResourceHubHomeRouteClass, useResourceFuid, useResourceRouteParams } from '../figma_app/979714';
import { o8 as _$$o4 } from '../figma_app/982327';
import { yJ as _$$yJ2, I1, Pg } from '../figma_app/990058';
import { L as _$$L7 } from '../figma_app/990299';
import { dn as _$$dn } from '../figma_app/994403';
import { fileBrowserPageManager } from '../figma_app/997907';
import { mk as _$$mk, Rj } from '../figma_app/999312';
import { A as _$$A27 } from '../svg/68792';
import { A as _$$A21 } from '../svg/128912';
import { A as _$$A19 } from '../svg/169256';
import { A as _$$A15 } from '../svg/185333';
import { A as _$$A20 } from '../svg/205778';
import { A as _$$A4 } from '../svg/254490';
import { A as _$$A0 } from '../svg/391205';
import { A as _$$A8 } from '../svg/507015';
import { A as _$$A18 } from '../svg/616591';
import { A as _$$A26 } from '../svg/792557';
import { A as _$$A16 } from '../svg/821527';
import { Redirect, Route, Switch } from '../vendor/130505';
import gr from '../vendor/223926';
import { eJ as _$$eJ } from '../vendor/352483';
import oc from '../vendor/879378';
import { z as _$$z9 } from '../vendor/999105';
let U = B;
let ev = 'seen_org_admin_moved_unassigned_drafts_onboarding';
let ey = _$$A3('2024-10-15').startOf('day');
let ew = userFlagExistsAtomFamily(ev);
function ej() {
  let e = useAtomWithSubscription(ew);
  let {
    show,
    isShowing,
    complete
  } = _$$e3({
    overlay: _$$rv,
    priority: _$$N.DEFAULT_MODAL
  }, [e]);
  let n = useSelector(e => getCurrentUserOrgUser(e));
  let o = n?.created_at;
  let l = !!o && _$$A3(o).isSameOrAfter(ey);
  _$$h(() => {
    show({
      canShow: e => !(e || l)
    });
  });
  return jsx(_$$rq, {
    arrowPosition: F_.LEFT_TITLE,
    clickOutsideToHide: !0,
    description: renderI18nText('org_admin_onboarding.tooltip.moved_unassigned_drafts.body'),
    isShowing,
    onClose: complete,
    primaryCta: {
      label: renderI18nText('general.got_it'),
      type: 'button',
      onClick: complete,
      ctaTrackingDescriptor: UpgradeAction.DONE
    },
    secondaryCta: {
      label: renderI18nText('general.learn_more'),
      type: 'link',
      href: 'https://help.figma.com/hc/articles/4420549259799',
      ctaTrackingDescriptor: UpgradeAction.LEARN_MORE
    },
    shouldCenterArrow: EL.FALLBACK,
    targetKey: _$$sm,
    title: renderI18nText('org_admin_onboarding.tooltip.moved_unassigned_drafts.title'),
    trackingContextName: _$$o2,
    userFlagOnShow: ev
  });
}
function eN({
  project: e
}) {
  let t = selectCurrentUser();
  let r = useCurrentUserOrgId();
  let a = useSelector(e => e.currentTeamId);
  let s = e === 'drafts' ? r : e.team?.org?.id;
  let n = e === 'drafts' ? a : e.team?.id;
  let o = vt(n);
  let l = jn();
  return !isExternalRestricted(t, s) && !isAndroidOrIphoneNotFigmaMobile && !(o || l);
}
function eO() {
  let e = useDispatch();
  let t = getSelectedViewType();
  return jsx(SidebarRow, {
    onClick: () => {
      e(selectViewAction({
        view: 'recentsAndSharing'
      }));
      e(trackSidebarClick({
        clickedResourceType: 'recentsAndSharing'
      }));
    },
    isSelected: t === 'recentsAndSharing',
    icon: jsx(_$$a2, {}),
    text: jsx(TextWithTruncation, {
      truncate: !0,
      children: renderI18nText('sidebar.recents')
    }),
    wrapInListItem: !0
  });
}
let eQ = userFlagExistsAtomFamily('seen_connected_projects_admin_settings_overlay');
let eZ = 'connect_admin_settings_onboarding_key';
function e0(e) {
  let t = useAtomWithSubscription(eQ);
  let {
    show,
    isShowing,
    complete
  } = _$$e3({
    overlay: kBq,
    priority: _$$N.DEFAULT_MODAL
  }, [t]);
  _$$h(() => {
    show({
      canShow: e => !e
    });
  });
  return jsx(_$$rq, {
    arrowPosition: F_.LEFT_TITLE,
    description: jsx('p', {
      children: renderI18nText('resource_connection.onboarding.use_admin_settings_to_see_all_your_connected_projects')
    }),
    emphasized: !0,
    isShowing,
    onClose: complete,
    primaryCta: {
      label: renderI18nText('resource_connection.onboarding.show_me'),
      type: 'button',
      onClick: () => {
        e.openConnectedProjectsTab();
        complete();
      },
      ctaTrackingDescriptor: UpgradeAction.DONE
    },
    targetKey: eZ,
    trackingContextName: 'Connected Projects Admin Settings Onboarding',
    width: 350,
    zIndex: _$$R5.MODAL
  });
}
let e1 = 'go_to_admin_row--goToAdminRow--OPVDe';
function e4(e) {
  let t = useDispatch();
  let r = useCurrentPrivilegedPlan('GoToAdminRow').unwrapOr(null);
  let n = useSubscription(UserFlagByName, {
    name: 'initiated_first_resource_connection'
  });
  let l = useMemo(() => n.status === 'loaded' && !!n.data?.currentUser?.userFlagByName, [n]) && getFeatureFlags().fc_initial_onboarding_enabled && (r?.tier === FPlanNameType.PRO || r?.tier === FPlanNameType.ORG || r?.tier === FPlanNameType.ENTERPRISE);
  let d = jsx('div', {
    className: cssBuilderInstance.h24.w24.$,
    children: jsx(_$$I2, {})
  });
  let c = jsx(e2, {
    badge: e.badge
  });
  let u = jsx(SidebarRow, {
    'wrapInListItem': !1,
    'icon': d,
    'text': jsx('div', {
      'className': cssBuilderInstance.pr36.$,
      'data-onboarding-key': e.dataOnboardingKey,
      'children': jsx(TextWithTruncation, {
        truncate: !0,
        children: renderI18nText('sidebar.admin_dashboard')
      })
    }),
    'isSelected': e.isSelected,
    'onClick': e.onClick,
    'badge': c,
    'dataTestId': e.dataTestId,
    'data-onboarding-key': eZ
  });
  let m = jsx('div', {
    className: e1,
    children: u
  });
  let _ = jsx('li', {
    className: e1,
    children: u
  });
  return jsxs(Fragment, {
    children: [getFeatureFlags().file_browser_sidebar_semantic_html ? _ : m, l && jsx(e0, {
      openConnectedProjectsTab: () => {
        r?.type === FOrganizationLevelType.TEAM ? t(selectViewAction({
          view: 'teamAdminConsole',
          teamId: r?.key.parentId ?? '',
          teamAdminConsoleViewTab: DashboardSections.CONTENT,
          teamAdminConsoleViewSecondaryTab: MemberSections.CONNECTED_PROJECTS
        })) : t(selectViewAction({
          view: 'orgAdminSettings',
          orgAdminSettingsViewTab: DashboardSection.CONTENT,
          orgAdminSettingsViewSecondaryTab: WorkspaceTab.CONNECTED_PROJECTS
        }));
      }
    })]
  });
}
function e2(e) {
  return jsxs(Fragment, {
    children: [jsx('div', {
      className: 'go_to_admin_row--badgeContainer--U08cW',
      children: e.badge
    }), jsx('div', {
      className: 'go_to_admin_row--iconContainer--tEzjQ',
      children: jsx(_$$a4, {})
    })]
  });
}
function tt(e) {
  let t = useDispatch();
  let r = e.orgUser.permission === FUserRoleType.ADMIN;
  let n = RG();
  let o = MX();
  let {
    groupsUserIsAdminOf
  } = EQ(o, e.orgUser.user_id, !r);
  let d = Xf(e.org.id);
  let c = d.status === 'loaded' ? d.data?.invoices ?? [] : void 0;
  useEffect(() => {
    t(Jt({
      forceRefetch: !1
    }));
  }, [t, e.org.id]);
  let {
    groupsToReview
  } = Cz(groupsUserIsAdminOf, c);
  let m = groupsUserIsAdminOf[0]?.id;
  let _ = e.org.bigma_enabled && n && !!m;
  let p = NJ(e.org.id).data ?? [];
  let f = e.org.bigma_enabled && p.length > 0;
  let g = ZY({
    isIntendedAudience: e.org.bigma_enabled && !r
  });
  if (!(r || _ || f)) return null;
  let h = function (e) {
    switch (e.view) {
      case 'orgAdminSettings':
      case 'billingGroupDashboard':
        return !0;
      case 'licenseGroup':
        return e.subView === UserGroupRole.ADMIN;
      case 'workspace':
        return e.subView === DUserRole.ADMIN;
      default:
        return !1;
    }
  }(e.selectedView);
  let x = jsx(Mn, {
    org: e.org,
    orgUser: e.orgUser,
    selectedView: e.selectedView,
    isSelected: h
  });
  return jsx(e4, {
    badge: x,
    onClick: () => {
      let e = c && _$$hX(c);
      if (r) {
        let e = DashboardSection.DASHBOARD;
        t(selectViewAction({
          view: 'orgAdminSettings',
          orgAdminSettingsViewTab: e
        }));
        t(trackSidebarClick({
          clickedResourceType: 'orgAdminSettings'
        }));
      } else {
        _ ? g ? t(selectViewAction({
          view: 'billingGroupDashboard',
          selectedTab: FRequestsStr.REQUESTS
        })) : (t(selectViewAction({
          view: 'licenseGroup',
          subView: UserGroupRole.ADMIN,
          licenseGroupId: e && groupsToReview.length > 0 ? groupsToReview[0].id : m,
          selectedTab: getGroupOrDefault(e && groupsToReview.length > 0 ? GroupType.MEMBERS : DefaultGroups[0])
        })), t(trackSidebarClick({
          clickedResourceType: 'licenseGroupAdminSettings'
        }))) : f && (t(selectViewAction({
          view: 'workspace',
          subView: DUserRole.ADMIN,
          workspaceId: p[0].id,
          selectedTab: defaultSectionKey
        })), t(trackSidebarClick({
          clickedResourceType: 'workspaceAdminSettings'
        })));
      }
    },
    dataTestId: 'admin-settings-link',
    dataOnboardingKey: _$$sm,
    isSelected: h
  });
}
function ta(e) {
  let t = useSelector(e => e.currentTeamId);
  let r = useDispatch();
  return t ? jsx(SidebarRow, {
    'isSelected': e.selectedView && e.selectedView.view === 'team',
    'onClick': () => {
      r(selectTeamView(t));
      r(trackSidebarClick({
        clickedResourceType: 'allProjects'
      }));
    },
    'data-onboarding-key': 'ALL_PROJECTS_LINK_ONBOARIND_KEY',
    'icon': jsx(_$$t2, {}),
    'text': jsx(TextWithTruncation, {
      truncate: !0,
      children: renderI18nText('sidebar.all_projects')
    }),
    'wrapInListItem': !0
  }) : null;
}
function tc(e, t, r, a, s, i) {
  let n = [];
  let o = [];
  if (a.isFigFiles()) {
    if (!(n = a.getData())) return;
  } else if (a.isRepos()) {
    let e = a.getReposData();
    e && (n = e.files, o = e.repos);
  } else if (a.isTiles()) {
    let e = a.getTilesData();
    e && (n = e.files, o = e.repos);
  }
  if (n.some(e => e.editor_type === FFileType.FIGMAKE) && !i) {
    e(VisualBellActions.enqueue({
      message: getI18nString('file_browser.file_move.paywall_team_tooltip'),
      error: !0
    }));
    return;
  }
  e(_$$z3({
    files: n,
    repos: o,
    folder: t,
    team: r,
    draftsMoveData: s ? s(n, o) : null
  }));
}
let tf = userFlagExistsAtomFamily('seen_dtm_deprecation_nav_to_plan_overlay');
function tg(e) {
  let t = useAtomWithSubscription(tf);
  let {
    show,
    isShowing,
    complete
  } = _$$e3({
    overlay: xPo,
    priority: _$$N.DEFAULT_MODAL
  }, [t]);
  _$$h(() => {
    show({
      canShow: e => !e
    });
  });
  let n = renderI18nText('file_browser.drafts_to_move.drafts_to_move_files_are_now_here');
  let o = e.starterTeamCreated ? renderI18nText('file_browser.drafts_to_move.if_you_want_you_can_move_these_files') : renderI18nText('file_browser.drafts_to_move.the_drafts_to_move_section_has_been_removed_generic');
  return jsx(_$$rq, {
    arrowPosition: F_.LEFT_TITLE,
    description: jsx('p', {
      children: o
    }),
    emphasized: !0,
    isShowing,
    onClose: complete,
    primaryCta: {
      label: renderI18nText('file_browser.modal.got_it'),
      type: 'button',
      onClick: () => {
        complete();
      },
      ctaTrackingDescriptor: UpgradeAction.DONE
    },
    secondaryCta: {
      label: renderI18nText('file_browser.drafts_to_move.viewbar_learn_more_link'),
      type: 'link',
      href: 'https://help.figma.com/hc/articles/18409526530967',
      ctaTrackingDescriptor: UpgradeAction.LEARN_MORE
    },
    targetKey: _$$uZ,
    title: n,
    trackingContextName: 'Dtm Deprecation Nav To Plan Overlay',
    width: 350,
    zIndex: _$$R5.MODAL
  });
}
function tv(e) {
  let t = selectUserFlag('file_browser_onboarded');
  let [r, i] = useState(!1);
  let n = _$$e5();
  let l = useTeamPlanFeatures();
  let {
    dtmMigrationPlanName,
    starterTeamCreated,
    dtmPlanParentType
  } = _$$V(getResourceDataOrFallback(l.data) || void 0);
  let {
    shouldShowFirstDtmPostMigrationOverlay,
    switchedFromDtmOnboarding
  } = function () {
    let e = useTeamPlanFeatures();
    let {
      isDraftsToMovePlan,
      dtmMigrationCompleted
    } = _$$V(getResourceDataOrFallback(e.data) || void 0);
    let a = useSubscription(UserFlagByName({
      name: 'switched_to_new_plan_from_dtm_deprecation_onboarding'
    }));
    let s = !!a?.data?.currentUser?.userFlagByName && getFeatureFlags().dtm_deprecation_post_migration_onboarding && isDraftsToMovePlan;
    return {
      shouldShowFirstDtmPostMigrationOverlay: !s && isDraftsToMovePlan && dtmMigrationCompleted && getFeatureFlags().dtm_deprecation_post_migration_onboarding,
      switchedFromDtmOnboarding: s
    };
  }();
  let f = jsxs(_$$Y, {
    isDragTarget: e => {
      let t = new _$$le(e);
      return !!(t.isFigFiles() || t.isRepos() || t.isPrototypes() || t.isTiles());
    },
    onTargetDragEnter: () => {
      i(!0);
    },
    onTargetDragLeave: () => {
      i(!1);
    },
    onTargetDrop: t => {
      let r = new _$$le(t);
      tc(e.dispatch, e.folder, null, r, void 0, n);
      e.dispatch(_$$T2());
      i(!1);
    },
    draggable: !1,
    onMouseOver: () => {
      i(!0);
    },
    onMouseLeave: () => {
      i(!1);
    },
    children: [jsx(_$$I, {
      'isSelected': e.selectedView.view === 'folder' && e.selectedView.folderId === e.folder.id,
      'onClick': t => {
        let r = e.folder;
        t.metaKey || t.ctrlKey || t.button !== 0 || (e.dispatch(selectFolderView(r.id)), e.dispatch(trackSidebarClick({
          clickedResourceType: 'drafts',
          resourceIdOrKey: r.id
        })));
      },
      'data-onboarding-key': _$$uZ,
      'icon': jsx(_$$g2, {}),
      'text': jsx(TextWithTruncation, {
        truncate: !0,
        children: renderI18nText('sidebar.drafts')
      }),
      'badge': e.shouldHideCreateFileButton ? void 0 : jsx(_$$iM, {
        folderId: e.folder.id,
        isContainerHovered: r
      }),
      'wrapInListItem': !1
    }), shouldShowFirstDtmPostMigrationOverlay && t && jsx(_$$a5, {
      entryPoint: 'drafts_sidebar',
      planName: dtmMigrationPlanName,
      targetKey: _$$uZ,
      isOrg: dtmPlanParentType === 'org'
    }), switchedFromDtmOnboarding && t && jsx(tg, {
      starterTeamCreated
    })]
  });
  return getFeatureFlags().file_browser_sidebar_semantic_html ? jsx('li', {
    children: f
  }) : f;
}
let tN = registerModal(e => {
  let t = useDispatch();
  let r = jsx('span', {
    className: cssBuilderInstance.fontBold.$,
    children: e.sectionName
  });
  return jsx(ConfirmationModal2, {
    onConfirm: () => {
      t(_$$de({
        sidebarSectionId: e.sectionId
      }));
    },
    confirmationTitle: getI18nString('sidebar.delete_section'),
    titleClass: 'confirm_section_delete_modal--title--8Haoy text--fontPos11--2LvXf text--_fontBase--QdLsd',
    confirmText: getI18nString('sidebar.delete'),
    destructive: !0,
    autoFocusCta: !1,
    children: jsx('p', {
      className: 'confirm_section_delete_modal--content--BToo-',
      children: renderI18nText('sidebar.if_you_delete_section_the_section', {
        item: e.count > 1 ? getI18nString('sidebar.items') : getI18nString('sidebar.item'),
        section: r,
        count: e.count,
        pronoun: e.count > 1 ? getI18nString('sidebar.them') : getI18nString('sidebar.it')
      })
    })
  });
}, 'CONFIRM_SECTION_DELETE_MODAL', ModalSupportsBackground.YES);
let tk = 'custom-section-header-context-menu';
function tR() {
  let e = useSelector(e => e.dropdownShown);
  return e && e?.type === tk ? e : null;
}
function tA(e) {
  let t = useDispatch();
  let r = tR();
  if (r == null) return jsx(Fragment, {});
  let s = () => {
    r.data.favoritesCount === 0 ? t(_$$de({
      sidebarSectionId: r.data.customSection.id
    })) : t(showModalHandler({
      type: tN,
      data: {
        sectionId: r.data.customSection.id,
        sectionName: r.data.customSection.name,
        count: r.data.favoritesCount
      }
    }));
  };
  let n = () => {
    e.setRenamingSectionId(r.data.customSection.id);
  };
  let o = [{
    displayText: getI18nString('sidebar.rename_section'),
    callback: () => n()
  }, {
    displayText: getI18nString('sidebar.delete_section'),
    callback: () => s()
  }];
  return jsx(noop, {
    depth: 0,
    dispatch: t,
    hidePointWhenContentOffScreen: !0,
    items: o,
    lean: 'right',
    leanPadding: 0,
    minWidth: 162,
    onSelectItem: (e, r) => {
      e.callback && e.callback('', null, t);
    },
    parentRect: r.data.targetRect,
    showPoint: !r.data.isFromRightClick
  });
}
let tF = 'favorited_section--emojiIcon--pDnB-';
let tP = 'favorited_section--isDragTarget--dQd5-';
let tL = 'favorited_section--previewContainer--4E-dF _overlayBase--_overlayBase--Rkj8l';
let tD = 'favorited_section--previewContainerSidebarRowRedesigned--TewzL';
let tM = 'favorited_section--previewContainerNoDelay--buvES favorited_section--previewContainer--4E-dF _overlayBase--_overlayBase--Rkj8l';
let tB = 'favorited_section--favoriteClickTarget--Z9eur';
let tU = 'favorited_section--thumbnailContainer--C4PE-';
let tW = 'favorited_section--lowerContainer--9gDfQ';
let t$ = 'favorited_section--lowerPartTitles--44fhW';
let tG = 'favorited_section--title--bWf4x ellipsis--ellipsis--Tjyfa';
let tV = 'favorited_section--fileIconContainer--u8cZj';
let tz = 'favorited_section--dialogTriggerButtonContainer--m7yPm';
function tH(e) {
  let t = useDispatch();
  let r = useSelector(getCurrentUserOrg);
  if (!r) return null;
  let s = jsx('span', {
    role: 'link',
    tabIndex: 0,
    onClick: () => {
      t(selectViewAction({
        view: 'org',
        orgId: r.id,
        orgViewTab: _$$X.HOME
      }));
    },
    className: 'favorited_section--browseOrgLink--BvX0-',
    children: renderI18nText('sidebar.browse_org_custom_sections')
  });
  return jsxs('div', {
    className: 'favorited_section--customSectionsEmptyStateContent--Z6jKH',
    children: [renderI18nText('sidebar.just_click_the_on_files_projects_and_teams_to_add_and_organize_them_here'), s]
  });
}
function tK(e) {
  return jsx('div', {
    className: 'favorited_section--customSectionsEmptyState--JcvfB favorited_section--customSectionsEmptyStateContent--Z6jKH',
    children: jsx(tH, {
      setNewCustomSectionIndex: e.setNewCustomSectionIndex
    })
  });
}
var rm = (e => (e.FAVORITED_PROTOTYPE_CONTEXT_MENU = 'favorited-prototype-context-menu', e.FAVORITED_FILE_CONTEXT_MENU = 'favorited-file-context-menu', e.FAVORITED_PROJECT_CONTEXT_MENU = 'favorited-project-context-menu', e.FAVORITED_TEAM_CONTEXT_MENU = 'favorited-team-context-menu', e.FAVORITED_WORKSPACE_CONTEXT_MENU = 'favorited-workspace-context-menu', e))(rm || {});
let r_ = 'sidebar context menu';
function rp(e, t, r, a) {
  if (t.stopPropagation(), t.preventDefault(), 'file' in e && e.file) {
    let t = e.file;
    r(filePutAction({
      file: {
        key: t.key,
        team_id: t.teamId,
        file_repo_id: t.fileRepoId,
        folder_id: t.folderId
      }
    }));
    let a = QJ(e);
    a && r(bE({
      repo: a
    }));
  }
  r(showDropdownThunk({
    type: a,
    data: {
      resource: {
        ...e
      },
      targetRect: {
        top: t.clientY,
        right: t.clientX,
        bottom: t.clientY,
        left: t.clientX,
        width: 1,
        height: 1
      }
    }
  }));
}
let rf = (e, t, r, a = {}) => e ? [{
  displayText: t ? t() : '',
  callback: r,
  ...a
}] : [];
let rg = [{
  displayText: '',
  separator: !0
}];
function rh(e) {
  let t = useDispatch();
  let r = useSelector(e => e.selectedView);
  let s = _$$p4();
  let n = e.favoritedFile.file;
  let o = liveStoreInstance.useFile(n?.key).data;
  let d = n?.project?.canView;
  let u = useSelector(e => e.dropdownShown);
  let m = _$$e5();
  if (u == null || n == null) return null;
  let _ = n.editorType === FFileType.FIGMAKE && !m;
  let p = u.type === 'favorited-file-context-menu';
  let f = [...rf(!0, () => getI18nString('tile.dropdown.open'), () => {
    DF('open');
    LP(n.key, FEntityType.FILE, e.favoritedFile?.sidebarSectionId ?? void 0, r_, n.editorType ?? void 0);
    openFileInFullscreen(t, n);
  }), ...rf(!desktopAPIInstance && !isChromebookTabbed(), () => getI18nString('tile.dropdown.open_new_tab'), () => {
    openFileInNewTab(buildFileUrl({
      file: n,
      allowDefaulting: !0
    }), n.key, r, t);
    LP(n.key, FEntityType.FILE, e.favoritedFile?.sidebarSectionId ?? void 0, r_, n.editorType);
    DF('open_in_new_tab');
  }), ...rg, ...e.organizeFavoriteOptions, ...rg, ...rf(!0, () => getI18nString('file_browser.copy_link'), () => {
    t(copyShareLinkOptimistic({
      fileKey: n.key,
      url: buildFileUrl({
        file: n,
        attributionContext: combineWithHyphen(s, ShareContext.FAVORITED_FILE_CONTEXT_MENU),
        allowDefaulting: !0
      }),
      source: ShareContext.FAVORITED_FILE_CONTEXT_MENU
    }));
    t(hideDropdownAction());
  }), ...rf(!_, () => getI18nString('sidebar.share'), () => {
    DF('share');
    t(showModalHandler({
      type: _$$g_,
      data: {
        fileKey: n.key,
        source: _$$nk.fileBrowserFavoritedContextMenu
      }
    }));
  }), ...rf(!0, () => getI18nString('tile.dropdown.show_in_project'), () => {
    if (DF('show_in_project'), t(selectViewAction({
      view: 'folder',
      folderId: e.folderId
    })), t(_$$an()), n.fileRepoId) {
      let r = QJ(e.favoritedFile);
      r != null && t(_$$y$({
        type: _$$F2.REPOS,
        tiles: [{
          type: _$$nb.REPO,
          repo: r,
          branches: [],
          selectedBranchKey: ''
        }]
      }));
    } else {
      if (!o) return;
      t(_$$y$({
        type: _$$F2.FILES,
        tiles: [_$$fA(o)]
      }));
    }
  }, {
    disabled: !(p && d)
  })];
  return jsx(noop, {
    items: f,
    parentRect: u.data.targetRect,
    showPoint: !1,
    lean: 'right',
    recordingKey: 'favorite-file-dropdown',
    dispatch: t,
    onSelectItem: (e, r) => {
      e.callback?.('', {}, t, r);
    }
  });
}
function rx(e) {
  let t = useDispatch();
  let r = useSelector(e => e.dropdownShown);
  if (r == null) return null;
  let s = [...e.organizeFavoriteOptions, ...rg, ...rf(!0, () => getI18nString('file_browser.copy_link_to_team'), () => {
    let r = getTeamUrl(e.teamId, e.orgId);
    t(_$$S({
      url: r
    }));
    t(hideDropdownAction());
  })];
  return jsx(noop, {
    items: s,
    parentRect: r.data.targetRect,
    showPoint: !1,
    lean: 'right',
    recordingKey: 'favorite-file-dropdown',
    dispatch: t,
    onSelectItem: (e, r) => {
      e.callback?.('', {}, t, r);
    }
  });
}
function rb(e) {
  let t = useDispatch();
  let r = useSelector(e => e.dropdownShown);
  if (r == null) return null;
  let s = [...e.organizeFavoriteOptions, ...rg, ...rf(e.orgId !== null, () => getI18nString('file_browser.copy_link_to_workspace'), () => {
    if (e.orgId !== null) {
      let r = _$$fO(e.workspaceId, e.orgId);
      t(_$$S({
        url: r
      }));
    }
    t(hideDropdownAction());
  })];
  return jsx(noop, {
    items: s,
    parentRect: r.data.targetRect,
    showPoint: !1,
    lean: 'right',
    recordingKey: 'favorited-resource-dropdown',
    dispatch: t,
    onSelectItem: (e, r) => {
      e.callback?.('', {}, t, r);
    }
  });
}
function rv(e) {
  let t = useDispatch();
  let r = useSelector(e => e.dropdownShown);
  if (r == null) return null;
  let s = [...e.organizeFavoriteOptions, ...rg, ...rf(!0, () => getI18nString('file_browser.copy_link_to_project'), () => {
    let r = getProjectUrl(e.projectId, e.orgId);
    t(_$$S({
      url: r
    }));
    t(hideDropdownAction());
  })];
  return jsx(noop, {
    items: s,
    parentRect: r.data.targetRect,
    showPoint: !1,
    lean: 'right',
    recordingKey: 'favorited-resource-dropdown',
    dispatch: t,
    onSelectItem: (e, r) => {
      e.callback?.('', {}, t, r);
    }
  });
}
function ry(e) {
  let t = useDispatch();
  let r = useSelector(e => e.dropdownShown);
  if (r == null) return null;
  let s = [...e.organizeFavoriteOptions, ...rg, ...rf(!0, () => getI18nString('file_browser.copy_link'), () => {
    let r = generateProtoLinkUrl(e.prototype.fileKey, e.prototype.file?.name, e.prototype.pageId);
    t(_$$S({
      url: r
    }));
    t(hideDropdownAction());
  })];
  return jsx(noop, {
    items: s,
    parentRect: r.data.targetRect,
    showPoint: !1,
    lean: 'right',
    recordingKey: 'favorited-resource-dropdown',
    dispatch: t,
    onSelectItem: (e, r) => {
      e.callback?.('', {}, t, r);
    }
  });
}
function rj(e) {
  let t = useDispatch();
  let r = e.orgId;
  let n = useSelector(e => e.currentTeamId);
  let o = e.favorite.team;
  let l = useSelector(e => e.dropdownShown);
  let d = useMemo(() => l && l.type === rm.FAVORITED_TEAM_CONTEXT_MENU && l.data.teamId === o.id, [l, o.id]);
  let c = useCallback((e, r) => {
    LP(r.team?.id, FEntityType.TEAM, r.sidebarSectionId ?? void 0, _$$vg);
    let a = getTeamUrl(r.resourceId, r.orgId);
    isCommandOrShift(e) ? (customHistory.redirect(a, '_blank'), e.stopPropagation()) : (t(selectTeamView(r.resourceId)), e.preventDefault());
  }, [t]);
  let m = useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
    let r = {
      top: e.clientY,
      right: e.clientX,
      bottom: e.clientY,
      left: e.clientX,
      width: 1,
      height: 1
    };
    t(showDropdownThunk({
      type: rm.FAVORITED_TEAM_CONTEXT_MENU,
      data: {
        teamId: o.id,
        targetRect: r
      }
    }));
  }, [t, o]);
  let _ = _$$x3({
    currentOrgId: r,
    currentTeamId: n,
    isFavorited: !0,
    resourceId: e.favorite.resourceId,
    resourceType: FEntityType.TEAM,
    currentSectionId: e.favorite.sidebarSectionId ?? void 0,
    sections: e.sections,
    userHasMaxFavorites: !1,
    updateFavorite: (r, a) => {
      let s = {
        entrypoint: 'sidebar',
        sectionId: a,
        team: {
          id: o.id
        },
        favoriteId: e.favorite.id,
        resourceType: FEntityType.TEAM
      };
      r ? t(V1(s)) : t(_$$ox(s));
    }
  });
  return jsxs(Fragment, {
    children: [jsx(SidebarRow, {
      dragKey: e.dragKey,
      icon: o.imgUrl ? jsx('div', {
        className: cssBuilderInstance.colorIcon.$,
        children: jsx(_$$nl, {
          shape: 'ROUNDED_SQUARE',
          size: {
            imgSize: Pf.SMALL,
            fallbackSize: Pf.SMALL
          },
          fallbackDisplay: _$$U2.HIDDEN,
          team: {
            ...o,
            imgUrl: o.imgUrl
          },
          fallbackSvg: _$$A4
        })
      }) : jsx(_$$U, {}),
      isDragTarget: e.isDragTarget,
      isSelected: e.isSelected,
      onClick: t => c(t, e.favorite),
      onContextMenu: m,
      onDragDrop: e.onDragDrop,
      onDragEnd: e.onDragEnd,
      onDragEnter: e.onDragEnter,
      onDragLeave: e.onDragLeave,
      onDragQuadrantUpdate: e.onDragQuadrantUpdate,
      onDragStart: e.onDragStart,
      showGrabber: e.showGrabber,
      text: jsx(TextWithTruncation, {
        truncate: !0,
        children: o.name
      }),
      wrapInListItem: !1
    }), d && jsx(rx, {
      teamId: o.id,
      orgId: o.orgId,
      organizeFavoriteOptions: _
    })]
  });
}
let rk = e => jsx('div', {
  className: tF,
  children: e
});
function rR(e) {
  let t = useDispatch();
  let r = useSelector(e => e.currentUserOrgId);
  let n = useSelector(e => e.currentTeamId);
  let l = useSelector(e => e.dropdownShown);
  let d = e.favorite.file;
  let c = liveStoreInstance.useFile(d.key).data;
  let m = NN();
  let _ = r !== null;
  let p = !!n;
  let f = useMemo(() => l && l.type === rm.FAVORITED_FILE_CONTEXT_MENU && l.data.fileKey === d.key, [l, d]);
  let g = useMemo(() => l && l.type === tk, [l]);
  let h = useCallback(e => {
    c || t(filePutAction({
      file: {
        key: d.key,
        team_id: d.teamId,
        file_repo_id: d.fileRepoId,
        folder_id: d.folderId,
        library_key: d.libraryKey
      }
    }));
    e.stopPropagation();
    e.preventDefault();
    let r = {
      top: e.clientY,
      right: e.clientX,
      bottom: e.clientY,
      left: e.clientX,
      width: 1,
      height: 1
    };
    t(showDropdownThunk({
      type: rm.FAVORITED_FILE_CONTEXT_MENU,
      data: {
        fileKey: d.key,
        targetRect: r
      }
    }));
  }, [t, d, c]);
  let x = buildFileUrl({
    file: d,
    allowDefaulting: !0
  });
  let b = (e, r) => {
    LP(r.file?.key, FEntityType.FILE, r.sidebarSectionId ?? void 0, _$$vg, r.file?.editorType ?? void 0);
    isCommandOrShift(e) ? (t(trackFileClicked({
      fileKey: r.file?.key ?? '',
      entrypoint: _$$vg
    })), e.stopPropagation()) : e.preventDefault();
    r.file && (customHistory.redirect(x, '_blank'), t(trackFileClicked({
      fileKey: r.file.key,
      entrypoint: _$$vg
    })));
  };
  let v = () => {
    t(qP({
      file: {
        key: d.key,
        editorType: d.editorType ?? FFileType.DESIGN
      },
      repoId: d.fileRepoId ?? void 0,
      entrypoint: 'sidebar',
      favoriteId: e.favorite.id
    }));
  };
  let y = _$$x3({
    currentOrgId: r,
    currentTeamId: n,
    isFavorited: !0,
    resourceId: e.favorite.resourceId,
    resourceType: FEntityType.FILE,
    currentSectionId: e.favorite.sidebarSectionId ?? void 0,
    sections: e.sections,
    userHasMaxFavorites: !1,
    updateFavorite: (r, a) => {
      if (r && c) {
        let r = {
          entrypoint: 'sidebar',
          sectionId: a,
          favoriteId: e.favorite.id,
          resourceType: FEntityType.FILE
        };
        t(V1(r));
      } else {
        r || v();
      }
    }
  });
  let w = d.name;
  let j = extractFirstEmoji(w);
  let E = e.favorite.file ? m(e.favorite.file) : y1.DESIGN;
  let I = j ? rk(j) : jsx(w4, {
    size: 16,
    type: E
  });
  let S = j ? removePrefixAndVariation(w, j) : w;
  let k = e.favorite.file?.project?.path;
  let R = getSidebarStringOrValue(k);
  let A = R ? tG : 'favorited_section--titleWithoutSubtitle--BXdOW ellipsis--ellipsis--Tjyfa text--fontPos13--xW8hS text--_fontBase--QdLsd';
  return jsxs('div', {
    className: tB,
    children: [jsx(SidebarRow, {
      dragKey: e.dragKey,
      icon: I,
      isDragTarget: e.isDragTarget,
      isFavoritesToMove_DEPRECATED: e.isFavoritesToMove_DEPRECATED,
      isSelected: e.isSelected,
      onClick: t => b(t, e.favorite),
      onContextMenu: _ || p ? h : r => {
        rp(e.favorite, r, t, rm.FAVORITED_FILE_CONTEXT_MENU);
      },
      onDragDrop: e.onDragDrop,
      onDragEnd: e.onDragEnd,
      onDragEnter: e.onDragEnter,
      onDragLeave: e.onDragLeave,
      onDragQuadrantUpdate: e.onDragQuadrantUpdate,
      onDragStart: e.onDragStart,
      showGrabber: e.showGrabber,
      text: S !== '' ? jsx(TextWithTruncation, {
        truncate: !0,
        showTooltipWhenTruncated: !1,
        children: S
      }) : jsx(TextWithTruncation, {
        truncate: !0,
        children: renderI18nText(e.favorite.file?.editorType === 'whiteboard' ? 'sidebar.fig_jam_file' : e.favorite.file?.editorType === 'slides' ? 'sidebar.slides_file' : 'sidebar.design_file')
      }),
      wrapInListItem: !1
    }), !f && !g && jsxs('div', {
      className: U()(e.showPreviewDelay ? tL : tM, {
        [tD]: getFeatureFlags().file_browser_sidebar_row_ui
      }),
      style: {
        transform: `translateY(${-e.previewYOffset}px)`
      },
      children: [jsx('div', {
        className: tU,
        children: jsx(NM, {
          file: d,
          noBorder: !0
        })
      }), jsxs('div', {
        className: tW,
        children: [jsx('div', {
          className: tV,
          children: jsx(w4, {
            size: 16,
            type: E
          })
        }), jsxs('div', {
          className: t$,
          children: [jsx('div', {
            className: A,
            children: e.favorite.file?.name
          }), R && jsx('div', {
            className: 'favorited_section--subtitle--sQ1zI ellipsis--ellipsis--Tjyfa',
            children: R
          })]
        })]
      })]
    }), (_ || p) && f && d.folderId && jsx(rh, {
      favoritedFile: e.favorite,
      folderId: d.folderId,
      organizeFavoriteOptions: y
    })]
  });
}
let rP = e => jsx('div', {
  className: tF,
  children: e
});
function rL(e) {
  let t = useDispatch();
  let r = e.favorite.project;
  let n = useSelector(e => e.currentTeamId);
  let o = useSelector(e => e.currentUserOrgId);
  let l = useSelector(e => e.dropdownShown);
  let d = useMemo(() => l && l.type === rm.FAVORITED_PROJECT_CONTEXT_MENU && l.data.projectId === r.id, [l, r.id]);
  let c = useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
    let a = {
      top: e.clientY,
      right: e.clientX,
      bottom: e.clientY,
      left: e.clientX,
      width: 1,
      height: 1
    };
    t(showDropdownThunk({
      type: rm.FAVORITED_PROJECT_CONTEXT_MENU,
      data: {
        projectId: r.id,
        targetRect: a
      }
    }));
  }, [t, r.id]);
  let u = _$$E3();
  let m = useCallback((e, t) => {
    LP(t.project?.id, FEntityType.FOLDER, t.sidebarSectionId ?? void 0, _$$vg);
    u(t.resourceId, e);
  }, [u]);
  let _ = _$$x3({
    currentOrgId: o,
    currentTeamId: n,
    isFavorited: !0,
    resourceId: e.favorite.resourceId,
    resourceType: FEntityType.FOLDER,
    currentSectionId: e.favorite.sidebarSectionId ?? void 0,
    sections: e.sections,
    userHasMaxFavorites: !1,
    updateFavorite: (a, s) => {
      let i = {
        entrypoint: 'sidebar',
        sectionId: s,
        folder: r,
        favoriteId: e.favorite.id
      };
      a ? t(Mv(i)) : t(jv(i));
    }
  });
  let p = extractFirstEmoji(r.path);
  let f = p ? removePrefixAndVariation(r.path, p) : r.path;
  let g = e.favorite.project.activeProjectResourceConnections?.[0];
  return jsxs('div', {
    children: [jsx(SidebarRow, {
      badge: g ? jsx(_$$W, {
        hostPlanName: g.hostPlanName,
        connectedPlanName: g.connectedPlanName
      }) : void 0,
      dragKey: e.dragKey,
      icon: p ? jsx('div', {
        children: rP(p)
      }) : jsx(_$$e6, {}),
      isDragTarget: e.isDragTarget,
      isFavoritesToMove_DEPRECATED: e.isFavoritesToMove_DEPRECATED,
      isSelected: e.isSelected,
      onClick: t => m(t, e.favorite),
      onContextMenu: c,
      onDragDrop: e.onDragDrop,
      onDragEnd: e.onDragEnd,
      onDragEnter: e.onDragEnter,
      onDragLeave: e.onDragLeave,
      onDragQuadrantUpdate: e.onDragQuadrantUpdate,
      onDragStart: e.onDragStart,
      showGrabber: e.showGrabber,
      text: jsx(TextWithTruncation, {
        truncate: !0,
        children: f
      }),
      wrapInListItem: !1
    }), d && jsx(rv, {
      projectId: r.id,
      orgId: r.orgId,
      organizeFavoriteOptions: _
    })]
  });
}
function rW({
  thumbnailUrl: e,
  isLocked: t,
  ...r
}) {
  return t ? jsx(_$$N2, {
    thumbnailType: _$$F4.PROTOTYPE,
    ...r
  }) : jsx(_$$V3, {
    thumbnailUrl: e,
    thumbnailType: _$$F4.PROTOTYPE,
    ...r
  });
}
function r$(e) {
  let t = useDispatch();
  let r = useSelector(e => e.currentTeamId);
  let n = useSelector(e => e.currentUserOrgId);
  let l = useSelector(e => e.dropdownShown);
  let d = useMemo(() => l && l.type === rm.FAVORITED_PROTOTYPE_CONTEXT_MENU && l.data.resource.prototype.id === e.favorite.prototype.id, [l, e.favorite.prototype.id]);
  let c = useMemo(() => l && l.type === tk, [l]);
  let m = generateProtoLinkUrl(e.favorite.prototype.fileKey, e.favorite.prototype.file?.name, e.favorite.prototype.pageId);
  let _ = (e, t) => {
    if (LP(t.prototype?.fileKey, FEntityType.PROTOTYPE, t.sidebarSectionId ?? void 0, _$$vg), isCommandOrShift(e)) {
      e.stopPropagation();
      return;
    }
    e.preventDefault();
    customHistory.redirect(m, '_blank');
  };
  let p = (r, a) => {
    r || t(X7({
      prototype: {
        file_key: e.favorite.prototype.fileKey,
        page_id: e.favorite.prototype.pageId
      },
      entrypoint: 'sidebar',
      favoriteId: a
    }));
  };
  let f = _$$x3({
    currentOrgId: n,
    currentTeamId: r,
    isFavorited: !0,
    resourceId: e.favorite.resourceId,
    resourceType: FEntityType.PROTOTYPE,
    currentSectionId: e.favorite.sidebarSectionId ?? void 0,
    sections: e.sections,
    userHasMaxFavorites: !1,
    updateFavorite: (r, a) => {
      if (r) {
        let r = {
          entrypoint: 'sidebar',
          sectionId: a,
          favoriteId: e.favorite.id,
          resourceType: FEntityType.PROTOTYPE
        };
        t(V1(r));
      } else {
        p(!1, e.favorite.id);
      }
    }
  });
  return jsxs('div', {
    className: tB,
    children: [jsx(SidebarRow, {
      dragKey: e.dragKey,
      icon: jsx(_$$F3, {}),
      isDragTarget: e.isDragTarget,
      isFavoritesToMove_DEPRECATED: e.isFavoritesToMove_DEPRECATED,
      isSelected: e.isSelected,
      onClick: t => _(t, e.favorite),
      onContextMenu: r => {
        rp(e.favorite, r, t, rm.FAVORITED_PROTOTYPE_CONTEXT_MENU);
      },
      onDragDrop: e.onDragDrop,
      onDragEnd: e.onDragEnd,
      onDragEnter: e.onDragEnter,
      onDragLeave: e.onDragLeave,
      onDragQuadrantUpdate: e.onDragQuadrantUpdate,
      onDragStart: e.onDragStart,
      showGrabber: e.showGrabber,
      text: jsx(TextWithTruncation, {
        truncate: !0,
        showTooltipWhenTruncated: !1,
        children: e.favorite.prototype.file?.name
      }),
      wrapInListItem: !1
    }), !d && !c && jsxs('div', {
      className: U()(e.showPreviewDelay ? tL : tM, {
        [tD]: getFeatureFlags().file_browser_sidebar_row_ui
      }),
      style: {
        transform: `translateY(${-e.previewYOffset}px)`
      },
      children: [jsx('div', {
        className: tU,
        children: jsx(rW, {
          isLocked: !!e.favorite.prototype.file?.hasProtoLinkPassword && e.favorite.prototype.file?.hasProtoLinkPassword,
          thumbnailUrl: e.favorite.prototype.thumbnailUrl,
          noBorder: !0
        })
      }), jsxs('div', {
        className: tW,
        children: [jsx('div', {
          className: tV,
          children: jsx(_$$F3, {})
        }), jsx('div', {
          className: t$,
          children: jsx('div', {
            className: tG,
            children: e.favorite.prototype.file?.name
          })
        })]
      })]
    }), d && e.favorite.prototype && jsx(ry, {
      prototype: e.favorite.prototype,
      organizeFavoriteOptions: f
    })]
  });
}
function rV(e) {
  let t = useDispatch();
  let r = e.orgId;
  let n = useSelector(e => e.currentTeamId);
  let o = useSelector(e => e.dropdownShown);
  let l = e.favorite.workspace;
  let d = useMemo(() => o && o.type === rm.FAVORITED_WORKSPACE_CONTEXT_MENU && o.data.workspaceId === l.id, [o, l.id]);
  let c = useCallback((e, r) => {
    let a = r.workspace;
    LP(a?.id, FEntityType.WORKSPACE, r.sidebarSectionId ?? void 0, _$$vg);
    a && t(selectViewAction({
      view: 'workspace',
      subView: DUserRole.DIRECTORY,
      workspaceId: a.id,
      selectedTab: TGroupType.TEAMS
    }));
  }, [t]);
  let u = useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
    let r = {
      top: e.clientY,
      right: e.clientX,
      bottom: e.clientY,
      left: e.clientX,
      width: 1,
      height: 1
    };
    t(showDropdownThunk({
      type: rm.FAVORITED_WORKSPACE_CONTEXT_MENU,
      data: {
        workspaceId: l.id,
        targetRect: r
      }
    }));
  }, [t, l]);
  let m = _$$x3({
    currentOrgId: r,
    currentTeamId: n,
    isFavorited: !0,
    resourceId: e.favorite.resourceId,
    resourceType: FEntityType.WORKSPACE,
    currentSectionId: e.favorite.sidebarSectionId ?? void 0,
    sections: e.sections,
    userHasMaxFavorites: !1,
    updateFavorite: (r, a) => {
      let s = {
        workspace: {
          id: l.id,
          name: l.name ?? '',
          imgUrl: l.imgUrl ?? null
        },
        entrypoint: 'sidebar',
        sectionId: a,
        favoriteId: e.favorite.id
      };
      r ? t(ZW(s)) : t($$if(s));
    }
  });
  let _ = e.favorite.workspace ? jsx(z6, {
    entity: e.favorite.workspace,
    size: 16
  }) : jsx(_$$t2, {
    className: cssBuilderInstance.colorIcon.$
  });
  return jsxs('div', {
    children: [jsx(SidebarRow, {
      dragKey: e.dragKey,
      icon: _,
      isDragTarget: e.isDragTarget,
      isSelected: e.isSelected,
      onClick: t => c(t, e.favorite),
      onContextMenu: u,
      onDragDrop: e.onDragDrop,
      onDragEnd: e.onDragEnd,
      onDragEnter: e.onDragEnter,
      onDragLeave: e.onDragLeave,
      onDragQuadrantUpdate: e.onDragQuadrantUpdate,
      onDragStart: e.onDragStart,
      showGrabber: e.showGrabber,
      text: jsxs(TextWithTruncation, {
        truncate: !0,
        children: [' ', l.name]
      }),
      wrapInListItem: !1
    }), d && jsx(rb, {
      workspaceId: l.id,
      orgId: e.favorite.orgId,
      organizeFavoriteOptions: m
    })]
  });
}
let rz = (e, t) => {
  let r = e.cloneNode(!0);
  let a = document.createElement('div');
  a.className = 'favorited_generic_row--favorite--vFcy4 favorited_generic_row--_favorite--jiaJX sidebar--sidebarSection---c9jn text--fontPos11--2LvXf text--_fontBase--QdLsd';
  Object.assign(a.style, {
    position: 'absolute',
    top: '-100%',
    left: '-100%',
    width: `${e.clientWidth}px`,
    height: `${e.clientHeight}px`,
    overflow: 'hidden',
    zIndex: -1
  });
  r.style.overflow = 'hidden';
  t && (r.classList.add(t), r.classList.add(cssBuilderInstance.colorText.$));
  a.appendChild(r);
  document.body.appendChild(a);
  return a;
};
function rH(e) {
  let t = useDispatch();
  let r = useSelector(e => e.dragState);
  let n = useSelector(e => e.currentUserOrgId);
  let {
    hasPendingRequest,
    getUpgradePathway,
    getUpgradeEligibility,
    getPlanAndPlanUser,
    getHasProvisionalAccess,
    getShouldShowCurf,
    getShouldShowScim,
    getIsUpgradeHandlerLoading,
    getIsEligibleForProvisionalAccess
  } = wH({
    folderId: e.favorite.resourceType === FEntityType.FOLDER ? e.favorite.resource.project?.id ?? null : null,
    isDraftsMove: !0
  });
  let g = _$$f2(useAtomWithSubscription(_$$yH));
  let [h, x] = useState(!1);
  let b = e.favorite.resourceType;
  let v = getSelectedView();
  let [y, w] = useState(!1);
  let j = e.rearrangeDragState?.draggedOverFavoriteId === e.favorite.resource.id && !y;
  let [T, I] = useState(!1);
  let N = useRef(null);
  let C = _$$e5();
  let S = e.isSelected || (() => {
    switch (b) {
      case FEntityType.FOLDER:
        return v.view === 'folder' && v.folderId === e.favorite.resource.resourceId;
      case FEntityType.TEAM:
        return v.view === 'team' && v.teamId === e.favorite.resource.resourceId;
      case FEntityType.WORKSPACE:
        return v.view === 'workspace' && v.subView === DUserRole.DIRECTORY && v.workspaceId === e.favorite.resource.resourceId;
      default:
        return !1;
    }
  })();
  let k = r => {
    r.dataTransfer.effectAllowed = 'move';
    let a = new _$$le(r.dataTransfer);
    a.setArbitraryData(e.favorite.resource.id);
    let s = r.currentTarget.childNodes[0];
    if (!s) return;
    let i = s.getBoundingClientRect();
    let n = r.clientX - i.left;
    let o = r.clientY - i.top;
    N.current = rz(s, 'favorited_generic_row--draggable--QinZd');
    a.setDragImage(N.current, n, o);
    t(_$$v2({
      type: _$$R4.Favorite,
      data: e.favorite
    }));
  };
  let R = (t, a) => {
    let s = new _$$le(t);
    let i = !1;
    (r.type === _$$R4.Favorite || s.isFigFiles() || s.isRepos() || s.isPrototypes() || s.isTiles()) && ((s.isFigFiles() || s.isRepos() || s.isTiles()) && (i = e.favorite.resourceType === FEntityType.FOLDER), e.updateRearrangeDragState({
      draggedOverFavoriteId: e.favorite.resource.id,
      dropBefore: i ? a.upperQuarter : a.upper,
      dropInto: i && a.middleVerticalHalf,
      draggedOverSectionId: e.favorite.resource.sidebarSectionId
    }), I(i));
  };
  let A = t => {
    let a = new _$$le(t);
    (r.type === _$$R4.Favorite || a.isFigFiles() || a.isRepos() || a.isPrototypes() || a.isTiles() && j) && (e.clearRearrangeDragState(e.favorite.resource.id), I(!1));
  };
  let O = (t, r) => {
    let a = getIsUpgradeHandlerLoading();
    return Zm({
      files: t,
      repos: r,
      isDestinationDrafts: e.favorite.resourceType === FEntityType.FOLDER && e.favorite.resource.project?.path === '',
      enabledForOrgOnly: !1,
      originFolderIdToPath: g,
      hasPendingRequest,
      getUpgradePathway,
      getUpgradeEligibility,
      getPlanAndPlanUser,
      getHasProvisionalAccess,
      getShouldShowCurf,
      getShouldShowScim,
      loading: a,
      getIsEligibleForProvisionalAccess
    });
  };
  let F = a => {
    let s = new _$$le(a);
    if (e.rearrangeDragState?.dropInto && e.favorite.resourceType === FEntityType.FOLDER && e.favorite.resource.project) {
      tc(t, e.favorite.resource.project, e.favorite.resource.project.team, s, O, C);
      t(_$$T2());
    } else if (s.isFigFiles() || s.isRepos() || s.isPrototypes() || s.isTiles()) {
      e.onSetResourceFavoriteDragDrop(a);
    } else if (r.type === _$$R4.Favorite && j) {
      let a = r.data;
      e.reorderOrInsertFavorite(a.resource.id, a.resourceType);
      t(_$$T2());
    }
    e.clearRearrangeDragState(e.favorite.resource.id);
    I(!1);
  };
  let P = r => {
    N.current && N.current.remove();
    t(_$$T2());
    e.clearRearrangeDragState(e.favorite.resource.id);
    I(!1);
  };
  let L = t => {
    e.updateRearrangeDragState({
      draggedOverFavoriteId: e.favorite.resource.id,
      dropBefore: T ? t.upperQuarter : t.upper,
      dropInto: T && t.middleVerticalHalf,
      draggedOverSectionId: e.favorite.resource.sidebarSectionId
    });
  };
  let D = e => {
    let t = new _$$le(e);
    w(t.isFile());
    return r.type !== _$$R4.SidebarSection && !t.isFile();
  };
  return jsx('div', {
    className: j ? e.rearrangeDragState?.dropBefore ? 'favorited_generic_row--dropBefore--xZvBN sidebar--dropBefore--wZDYO' : e.rearrangeDragState?.dropInto ? 'favorited_generic_row--dropInto--VKuX5' : 'favorited_generic_row--dropAfter--a64Ax sidebar--dropAfter--JEX7d' : void 0,
    children: jsx('div', {
      onMouseEnter: () => {
        e.preventHoverStyle || x(!0);
      },
      onMouseLeave: () => {
        e.setShowPreviewDelay(!1);
        x(!1);
      },
      draggable: !e.isFavoritesToMove_DEPRECATED,
      children: (() => {
        switch (b) {
          case FEntityType.FILE:
            if (!e.favorite.resource.file) return null;
            return jsx(rR, {
              dragKey: `FavoritedFile_${e.favorite.resource.resourceId}`,
              favorite: e.favorite.resource,
              isDragTarget: D,
              isFavoritesToMove_DEPRECATED: e.isFavoritesToMove_DEPRECATED,
              isHover: h,
              isSelected: S,
              onDragDrop: F,
              onDragEnd: P,
              onDragEnter: R,
              onDragLeave: A,
              onDragQuadrantUpdate: L,
              onDragStart: k,
              previewYOffset: e.previewYOffset,
              sections: e.sections,
              showGrabber: !1,
              showPreviewDelay: e.showPreviewDelay
            });
          case FEntityType.PROTOTYPE:
            if (!e.favorite.resource.prototype) return null;
            return jsx(r$, {
              dragKey: `FavoritedPrototype_${e.favorite.resource.resourceId}`,
              favorite: e.favorite.resource,
              isDragTarget: D,
              isFavoritesToMove_DEPRECATED: e.isFavoritesToMove_DEPRECATED,
              isHover: h,
              isSelected: S,
              onDragDrop: F,
              onDragEnd: P,
              onDragEnter: R,
              onDragLeave: A,
              onDragQuadrantUpdate: L,
              onDragStart: k,
              previewYOffset: e.previewYOffset,
              sections: e.sections,
              showGrabber: !1,
              showPreviewDelay: e.showPreviewDelay
            });
          case FEntityType.FOLDER:
            if (!e.favorite.resource.project) return null;
            return jsx(rL, {
              dragKey: `FavoritedProject_${e.favorite.resource.resourceId}`,
              favorite: e.favorite.resource,
              isDragTarget: D,
              isFavoritesToMove_DEPRECATED: e.isFavoritesToMove_DEPRECATED,
              isHover: h,
              isSelected: S,
              onDragDrop: F,
              onDragEnd: P,
              onDragEnter: R,
              onDragLeave: A,
              onDragQuadrantUpdate: L,
              onDragStart: k,
              sections: e.sections,
              showGrabber: !1
            });
          case FEntityType.TEAM:
            if (!e.favorite.resource.team || !n) return null;
            return jsx(rj, {
              dragKey: `FavoritedTeam_${e.favorite.resource.resourceId}`,
              favorite: e.favorite.resource,
              isDragTarget: D,
              isHover: h,
              isSelected: S,
              onDragDrop: F,
              onDragEnd: P,
              onDragEnter: R,
              onDragLeave: A,
              onDragQuadrantUpdate: L,
              onDragStart: k,
              orgId: n,
              sections: e.sections,
              showGrabber: !1
            });
          case FEntityType.WORKSPACE:
            if (!e.favorite.resource.workspace || !n) return null;
            return jsx(rV, {
              dragKey: `FavoritedWorkspace_${e.favorite.resource.resourceId}`,
              favorite: e.favorite.resource,
              isDragTarget: D,
              isHover: h,
              isSelected: S,
              onDragDrop: F,
              onDragEnd: P,
              onDragEnter: R,
              onDragLeave: A,
              onDragQuadrantUpdate: L,
              onDragStart: k,
              orgId: n,
              sections: e.sections,
              showGrabber: !1
            });
          default:
            throwTypeError(b);
        }
      })()
    })
  });
}
function rq(e) {
  let t = useDispatch();
  let r = useSelector(e => e.currentTeamId);
  let n = useCurrentUserOrgId() ?? null;
  let o = _$$sb(e.favorites, e.order);
  let l = getSelectedView();
  let [d, c] = useState(!1);
  let u = useSelector(e => e.favorites.movingResource);
  let m = useSelector(e => e.favorites.collapsedCustomSections);
  let p = e.section ? !m.has(e.section?.id) : !m.has('favorited');
  let [f, g] = useState(!1);
  let [h, x] = useState();
  let [b, v] = useState();
  let y = useSelector(e => e.dragState);
  let w = useLatestRef(y);
  useEffect(() => {
    y.type === _$$R4.None && w && w.type !== _$$R4.None && v(void 0);
  }, [y, w]);
  useEffect(() => {
    !e.isCurrentHoveredSection && y.type === _$$R4.SidebarSection && b && v(void 0);
  }, [e.isCurrentHoveredSection, b, y]);
  let [j, T] = useState(void 0);
  let [E, C] = useState(!0);
  let S = useRef(null);
  let k = tR();
  useEffect(() => {
    j === b?.draggedOverFavoriteId && v(void 0);
    T(void 0);
  }, [b, v, j, T]);
  let R = useCallback(r => {
    e.section?.id && (r.dataTransfer.effectAllowed = 'move', new _$$le(r.dataTransfer).setArbitraryData(e.section.id), t(_$$v2({
      type: _$$R4.SidebarSection,
      data: e.section.id
    })));
  }, [t, e.section]);
  let A = useCallback(() => {
    _$$xs(!p);
    let r = new Set(m);
    e.section ? (Fp({
      type: 'topLevel',
      id: 'custom',
      orgId: n,
      sectionId: e.section?.id
    }, !p), p ? r.add(e.section.id) : r.$$delete(e.section.id)) : (Fp({
      type: 'topLevel',
      id: 'favorited',
      orgId: n
    }, !p), p ? r.add('favorited') : r.$$delete('favorited'));
    t(U6({
      collapsedCustomSections: r
    }));
  }, [p, n, e.section, m, t]);
  let O = (r, a) => {
    let s;
    let i = o.map(e => e.resource.id);
    if (!b?.draggedOverFavoriteId) return i;
    let n = i.includes(r);
    if (n) {
      s = moveElement(i, r, b.draggedOverFavoriteId, b.dropBefore);
    } else {
      let e = i.indexOf(b.draggedOverFavoriteId);
      b.dropBefore || (e += 1);
      s = [...i.slice(0, e), r, ...i.slice(e)];
    }
    if (_$$hp(), x(r), e.section?.id) {
      n ? t(vg({
        sectionId: e.section.id,
        orderedFavoriteIds: s
      })) : t(V1({
        favoriteId: r,
        sectionId: e.section.id,
        resourceType: a,
        orderedFavoriteIds: s
      }));
      return;
    }
    n || t(V1({
      favoriteId: r,
      sectionId: void 0,
      resourceType: a
    }));
    t(yJ({
      prefs: {
        id: e.fileBrowserPreferences?.id || 'optimistic-id',
        orderedFavoritedResourceIds: s,
        orderedTeamIds: e.fileBrowserPreferences?.orderedTeamIds,
        orderedLicenseGroupIds: e.fileBrowserPreferences?.orderedLicenseGroupIds
      },
      userInitiated: !0
    }));
  };
  let F = useCallback(e => {
    e.stopPropagation();
    h && x(void 0);
  }, [h]);
  let P = useCallback(() => {
    C(!0);
  }, []);
  let L = useCallback(e => {
    let t = new _$$le(e);
    c(t.isFile());
    return t.isFigFiles() || t.isRepos() || t.isPrototypes() || t.isTiles();
  }, []);
  let D = a => {
    let s = new _$$le(a);
    let i = [];
    let d = [];
    let c = [];
    if (g(!1), s.isFigFiles()) {
      if (!(i = s.getData())) return !1;
    } else if (s.isPrototypes()) {
      if (!(c = s.getData())) return !1;
    } else if (s.isRepos()) {
      let e = s.getReposData();
      if (!e) return !1;
      d = e.repos;
    } else if (s.isTiles()) {
      let e = s.getTilesData();
      if (!e) return !1;
      i = e.files;
      d = e.repos;
      c = e.prototypes;
    }
    i = i.filter(e => !e.is_favorited);
    d = d.filter(e => !e.is_favorited);
    c = c.filter(e => !e.is_favorited);
    let u = o.map(e => e.resource.id);
    let m = i.length + d.length + c.length;
    let _ = kK(n);
    if (m + o.length > _) {
      t(VisualBellActions.enqueue({
        message: getI18nString('tile.favoriting.max_favorites', {
          maxFavorites: _
        })
      }));
      return !1;
    }
    let p = null;
    b && (p = u.indexOf(b.draggedOverFavoriteId) + (b.dropBefore ? 0 : 1));
    t(N9({
      files: i,
      repos: d,
      prototypes: c,
      orgId: n,
      teamId: r,
      selectedView: l.view,
      entrypoint: 'sidebar',
      insertAtIndex: p,
      orderedFavorites: u,
      sectionId: e.section?.id,
      fileBrowserPrefs: e.fileBrowserPreferences
    }));
    return !0;
  };
  let M = useCallback(() => {
    g(!0);
  }, []);
  let B = useCallback(() => {
    g(!1);
  }, []);
  let $ = U()(cssBuilderInstance.relative.$, 'favorited_section--showsCaret--vjo7-', f || b?.draggedOverSectionId && e.section && !d && b.draggedOverSectionId === e.section.id ? tP : '');
  let G = e.section?.name === '' || e.section?.name === void 0 ? renderI18nText('sidebar.starred') : e.section.name;
  let V = k?.data?.customSection?.id === e.section?.id;
  let H = e.isCreatingNewSection || e.isRenaming;
  let K = U()({
    'favorited_section--sectionHeaderContainer--otgqF sidebar--sectionHeaderContainer--TcvBb sidebar--sectionHeaderName--xToHG sidebar--sectionName--4N7hT sidebar--sectionText--KAGhn sidebar--sectionContent--NHX7b ellipsis--ellipsis--Tjyfa': !0,
    'favorited_section--actionButtonsVisibleOnHover--AOJ8E': !H,
    'favorited_section--actionButtonsVisible--Ey4QI': V && !H
  });
  let J = e.section?.name === void 0 ? getI18nString('sidebar.new_section') : R3(e.section) ? getI18nString('sidebar.starred') : e.section.name;
  return jsxs(_$$Y, {
    className: $,
    isDragTarget: L,
    draggable: !1,
    onTargetDrop: D,
    onTargetDragEnter: M,
    onTargetDragLeave: B,
    children: [jsx('div', {
      children: jsxs('div', {
        draggable: !0,
        onDragStart: R,
        className: K,
        onClick: A,
        onContextMenu: r => {
          r.stopPropagation();
          r.preventDefault();
          let a = {
            top: r.clientY,
            right: r.clientX,
            bottom: r.clientY,
            left: r.clientX,
            width: 1,
            height: 1
          };
          t(showDropdownThunk({
            type: tk,
            data: {
              customSection: e.section,
              favoritesCount: o.length,
              isFromRightClick: !0,
              targetRect: a
            }
          }));
        },
        role: 'button',
        tabIndex: 0,
        children: [jsx(SvgComponent, {
          className: 'favorited_section--expandCaretCustomSections--SUjwA',
          svg: p ? _$$A5 : _$$A6
        }), jsx('div', {
          'className': 'favorited_section--sectionName--PrU2k ellipsis--ellipsis--Tjyfa',
          'data-onboarding-key': e.allSections.length === 1 ? null : 'FAVORITES_ONBOARDING_KEY',
          'children': e.isRenaming ? jsx(_$$p3, {
            className: 'favorited_section--input--8x-Vh',
            placeholderValue: J,
            submit: r => {
              e.isCreatingNewSection ? (u ? t(yH({
                name: r,
                insertAtIndex: e.sectionIndex,
                currentOrderedSections: e.allSections.map(e => e.id),
                prefs: e.fileBrowserPreferences ?? void 0,
                newResourceForSection: u
              })) : t(YI({
                name: r,
                insertAtIndex: e.sectionIndex,
                currentOrderedSections: e.allSections.map(e => e.id),
                prefs: e.fileBrowserPreferences ?? void 0
              })), e.setNewCustomSectionIndex && e.setNewCustomSectionIndex(void 0)) : e.section && (t(vg({
                sectionId: e.section.id,
                name: r.trim()
              })), e.setRenamingSectionId && e.setRenamingSectionId(void 0));
            },
            cancel: () => {
              e.isCreatingNewSection ? (e.setNewCustomSectionIndex && e.setNewCustomSectionIndex(void 0), u && t(_$$to({
                movingResource: void 0
              }))) : e.setRenamingSectionId && e.setRenamingSectionId(void 0);
            },
            maxLength: 25
          }) : G
        }), n && jsxs('div', {
          className: 'favorited_section--actionButtons--VZ6Er',
          children: [jsx('div', {
            className: tz,
            children: jsx(_$$d3, {
              'aria-expanded': !!k,
              'aria-label': getI18nString('favorited_resources.settings_tooltip'),
              'onClick': r => {
                k ? t(hideDropdownAction()) : S.current && t(showDropdownThunk({
                  type: tk,
                  data: {
                    targetRect: S.current.getBoundingClientRect(),
                    customSection: e.section,
                    favoritesCount: o.length
                  }
                }));
                r.stopPropagation();
                r.preventDefault();
              },
              'ref': S,
              'children': jsx(_$$J, {})
            })
          }), jsx(rX, {
            newCustomSectionIndex: e.sectionIndex,
            setNewCustomSectionIndex: e.setNewCustomSectionIndex
          })]
        })]
      })
    }), jsx('div', {
      className: p ? void 0 : cssBuilderInstance.hidden.$,
      children: o.length === 0 ? e.allSections.length === 1 && R3(e.allSections[0]) && !e.isCreatingNewSection ? jsx(tH, {
        setNewCustomSectionIndex: e.setNewCustomSectionIndex
      }) : jsx(Fragment, {}) : jsx('div', {
        onMouseMove: F,
        onMouseLeave: P,
        children: o.map(t => {
          let r = h === t.resource.id;
          return jsx(rH, {
            clearRearrangeDragState: T,
            favorite: t,
            isSelected: r,
            onSetResourceFavoriteDragDrop: D,
            preventHoverStyle: void 0 !== h,
            previewYOffset: e.previewYOffset,
            rearrangeDragState: b,
            reorderOrInsertFavorite: O,
            sections: e.allSections,
            setShowPreviewDelay: C,
            showPreviewDelay: E,
            updateRearrangeDragState: v
          }, t.resource.resourceId);
        })
      })
    })]
  });
}
function rX(e) {
  return jsx('div', {
    className: tz,
    children: jsx(IconButton, {
      'aria-label': getI18nString('favorited_resources.create_a_new_section_tooltip'),
      'htmlAttributes': {
        'data-tooltip': getI18nString('favorited_resources.create_a_new_section_tooltip'),
        'data-tooltip-type': 'text'
      },
      'onClick': t => {
        t.stopPropagation();
        e.setNewCustomSectionIndex && e.setNewCustomSectionIndex(e.newCustomSectionIndex);
      },
      'children': jsx(_$$x2, {})
    })
  });
}
function rQ(e) {
  let t = _$$ds(e.favoritedFiles, e.favoritedPrototypes, e.favoritedProjects, e.favoritedTeams, e.favoritedWorkspaces);
  return jsx(rq, {
    favorites: t,
    order: e.fileBrowserPreferences?.orderedFavoritedResourceIds ?? void 0,
    fileBrowserPreferences: e.fileBrowserPreferences,
    allSections: e.userSidebarSections ?? [],
    sectionIndex: 0,
    previewYOffset: e.previewYOffset
  });
}
function rZ(e) {
  let t = useDispatch();
  let r = useSelector(e => e.dragState);
  let n = useSelector(e => e.favorites.newCustomSectionIndex);
  let o = useSelector(e => e.favorites.favoritesCount);
  let l = _$$ds(e.favoritedFiles, e.favoritedPrototypes, e.favoritedProjects, e.favoritedTeams, e.favoritedWorkspaces);
  let [d, c] = useState();
  let [u, m] = useState();
  let [_, p] = useState(!1);
  let f = useMemo(() => _$$t$(e.userSidebarSections ?? [], e.fileBrowserPreferences?.orderedSidebarSections ?? void 0), [e.userSidebarSections, e.fileBrowserPreferences?.orderedSidebarSections]);
  useMemo(() => {
    o && o < 15 && l.length >= 15 && handleAtomEvent({
      id: FAVORITES_COUNT_CROSSED_THRESHOLD_EVENT
    });
    t(_$$lF({
      favoritesCount: l.length
    }));
  }, [o, l.length, t]);
  let g = {};
  let h = [];
  l.forEach(e => {
    e.resource.sidebarSectionId ? g[e.resource.sidebarSectionId] ? g[e.resource.sidebarSectionId].push(e) : g[e.resource.sidebarSectionId] = [e] : h.push(e);
  });
  let x = useCallback(() => r.type === _$$R4.Favorite || r.type === _$$R4.SidebarSection, [r]);
  let b = useCallback(e => {
    r.type === _$$R4.SidebarSection && p(e.upper);
  }, [r]);
  let v = useCallback(() => {
    let a = d === 'starred' ? void 0 : d;
    if (r.type === _$$R4.Favorite) {
      let e = r.data;
      t(V1({
        favoriteId: e.resource.id,
        sectionId: a,
        resourceType: e.resourceType
      }));
    } else if (r.type === _$$R4.SidebarSection && a) {
      let s = f.map(e => e.id) ?? [];
      let i = moveElement(s, r.data, a, _);
      t(yJ({
        prefs: {
          id: e.fileBrowserPreferences?.id || 'optimistic-id',
          orderedFavoritedResourceIds: e.fileBrowserPreferences?.orderedFavoritedResourceIds,
          orderedTeamIds: e.fileBrowserPreferences?.orderedTeamIds,
          orderedLicenseGroupIds: e.fileBrowserPreferences?.orderedLicenseGroupIds,
          orderedSidebarSections: i
        },
        userInitiated: !0
      }));
    }
    p(!1);
    c(void 0);
    t(_$$T2());
  }, [d, t, r, _, f, e.fileBrowserPreferences]);
  let y = useCallback(e => () => {
    c(e);
  }, []);
  let w = useCallback(() => {
    c(void 0);
  }, []);
  let j = useCallback(e => {
    t(_$$pS({
      newCustomSectionIndex: e
    }));
  }, [t]);
  if (f.length === 0 && void 0 === n) {
    return jsx(tK, {
      setNewCustomSectionIndex: j
    });
  }
  let T = jsx('div', {
    className: cssBuilderInstance.mb8.$,
    children: jsx(rq, {
      allSections: f,
      favorites: [],
      fileBrowserPreferences: e.fileBrowserPreferences,
      isCreatingNewSection: !0,
      isRenaming: !0,
      order: [],
      previewYOffset: e.previewYOffset,
      sectionIndex: n || 0,
      setNewCustomSectionIndex: j,
      setRenamingSectionId: m
    })
  });
  return jsxs('div', {
    className: cssBuilderInstance.mt8.$,
    children: [n === 0 && T, f.map((t, s) => {
      let i = r.type === _$$R4.Favorite ? tP : _ ? 'favorited_section--dropBefore--6poyi sidebar--dropBefore--wZDYO' : 'favorited_section--dropAfter--7G6L7 sidebar--dropAfter--JEX7d';
      let o = U()(d === t.id ? i : '', cssBuilderInstance.mb8.$);
      return jsxs('div', {
        children: [jsx(_$$Y, {
          className: o,
          isDragTarget: x,
          draggable: !1,
          onTargetDragQuadrantUpdate: b,
          onTargetDrop: v,
          onTargetDragEnter: y(t.id),
          onTargetDragLeave: w,
          children: jsx(rq, {
            allSections: f,
            favorites: g[t.id] ?? [],
            isCurrentHoveredSection: d === t.id,
            isRenaming: u === t.id,
            order: t.orderedFavoritedResourceIds ?? [],
            previewYOffset: e.previewYOffset,
            section: t,
            sectionIndex: s,
            setNewCustomSectionIndex: j,
            setRenamingSectionId: m
          })
        }), n === s + 1 && T]
      }, t.id);
    }), jsx(tA, {
      setRenamingSectionId: m
    })]
  });
}
let at = registerModal(e => {
  let [t, r] = useState(null);
  let n = useDispatch();
  let o = Gs();
  let l = getUserId();
  let d = useSelector(e => e.teamUserByTeamId);
  let c = useSelector(e => l ? e.authedUsers.byId[l]?.plans?.filter(e => !e.is_org) : null);
  let u = getI18nString('file_browser.planless_favorites.add_favorites_to_modal_title');
  let m = () => n(hideModal());
  let _ = {};
  l && _$$_3(d, l).forEach(e => {
    e.drafts_folder_id && (_[e.team_id] = e.drafts_folder_id);
  });
  let p = (e, t) => {
    t && n(Cy({
      files: e,
      folderName: '',
      folderId: t,
      isDraftsToMove: !0,
      fromFileModal: !0
    }));
  };
  return jsx(OJ, {
    title: u,
    fixedTop: !0,
    minWidth: 480,
    maxWidth: 480,
    onClose: m,
    truncateTitleText: !0,
    children: jsxs('div', {
      className: 'move_favorites_modal--modalBody---Rdx2',
      children: [c && jsx(_$$P2, {
        width: 480,
        children: jsx('div', {
          className: cssBuilderInstance.pl8.pr8.$,
          children: c.map(e => jsx(ar, {
            planId: e.plan_id,
            name: e.name,
            imgUrl: e.img_url,
            checked: t?.plan_id === e.plan_id,
            onSelect: () => r(t?.plan_id === e.plan_id ? null : e)
          }, e.plan_id))
        })
      }), jsxs('div', {
        className: 'move_favorites_modal--footer--ERUeX',
        children: [jsx(ButtonSecondary, {
          onClick: m,
          children: renderI18nText('modal.cancel')
        }), jsx(ButtonBasePrimaryTracked, {
          disabled: !t,
          onClick: () => {
            let r = t?.is_org ? null : t?.plan_id;
            let a = e.favorites.reduce((e, t) => t.resourceType === FEntityType.FILE && t.resource.file?.key ? {
              ...e,
              [t.resource.file?.key]: !0
            } : e, {});
            let s = {};
            let i = o.filter(e => {
              let t = !!a[e.key];
              t && (s[e.key] = !0);
              return t;
            });
            let l = e.favorites.filter(e => !(e.resourceType === FEntityType.FILE && e.resource.file?.key) || !s[e.resource.file?.key]).map(e => e.resource.id);
            n(Ic({
              favoriteIds: l,
              teamId: r
            }));
            r && p(i, _[r]);
            m();
          },
          children: getI18nString('modal.confirm')
        })]
      })]
    })
  });
}, 'MoveFavoritesModal');
function ar(e) {
  return jsxs('button', {
    'data-testid': `${e.name}-button`,
    'className': U()('move_favorites_modal--teamRow--qNRGf', e.checked ? cssBuilderInstance.colorBgSelected.$ : ''),
    'onClick': e.onSelect,
    'children': [jsx('div', {
      className: 'move_favorites_modal--iconContainer--oDATP',
      children: e.checked ? jsx(SvgComponent, {
        className: cssBuilderInstance.colorIcon.$,
        svg: _$$A7
      }) : jsx(_$$nl, {
        size: Pf.MEDIUM,
        shape: 'CIRCLE',
        fallbackDisplay: _$$U2.HIDDEN,
        team: {
          id: e.planId,
          imgUrl: e.imgUrl
        }
      })
    }), jsx('div', {
      className: 'move_favorites_modal--teamName--pVqcu ellipsis--ellipsis--Tjyfa',
      children: jsx('span', {
        className: 'move_favorites_modal--destinationHeading--mwxLX',
        children: e.name
      })
    })]
  });
}
let as = 'favorited_drafts_to_move';
function ai(e) {
  let t = useDispatch();
  let [r, o] = useState(!0);
  let l = getUserId();
  let d = useSelector(e => e.favorites.collapsedCustomSections);
  let c = e.teamUser?.planlessFavoritedFiles?.filter(t => !e.dataDriftCorrectedTeamResources?.favoritedFilesKeySet.has(t.resourceId));
  let u = e.teamUser?.planlessFavoritedPrototypes?.filter(t => !e.dataDriftCorrectedTeamResources?.favoritedPrototypesIdSet.has(t.resourceId));
  let m = e.teamUser?.planlessFavoritedProjects?.filter(t => !e.dataDriftCorrectedTeamResources?.favoritedFoldersIdSet.has(t.resourceId));
  let _ = _$$ds(c, u, m);
  let p = !d.has(as);
  let f = useCallback(() => {
    Fp({
      type: 'topLevel',
      id: as,
      orgId: null
    }, !p);
    p ? d.add(as) : d.$$delete(as);
    t(U6({
      collapsedCustomSections: d
    }));
  }, [p, d, t]);
  let g = useCallback(() => {
    t(vr({
      favoriteIds: _.map(e => e.id)
    }));
  }, [t, _]);
  if (_.length === 0) return jsx(Fragment, {});
  let h = _.map(t => jsx(rH, {
    clearRearrangeDragState: _$$lQ,
    favorite: t,
    isFavoritesToMove_DEPRECATED: !0,
    isSelected: !1,
    onSetResourceFavoriteDragDrop: _$$lQ,
    preventHoverStyle: !1,
    previewYOffset: e.previewYOffset,
    rearrangeDragState: void 0,
    reorderOrInsertFavorite: _$$lQ,
    sections: [],
    setShowPreviewDelay: o,
    showPreviewDelay: r,
    updateRearrangeDragState: _$$lQ
  }, t.resource.resourceId));
  return jsx(TrackingProvider, {
    name: _$$e7.FAVORITES_TO_MOVE_SECTION,
    properties: {
      userId: l,
      numFiles: _.length
    },
    children: jsxs('div', {
      className: U()('favorited_section--moveFavoritesContainer--qp39R', cssBuilderInstance.pt4.pb4.ml8.mr8.mb8.$),
      children: [jsxs('div', {
        className: U()(cssBuilderInstance.flex.itemsCenter.justifyBetween.pl8.pr8.$, 'favorited_section--favoriteToMoveHeaderContainer--2RB9p favorited_section--sectionHeaderContainer--otgqF sidebar--sectionHeaderContainer--TcvBb sidebar--sectionHeaderName--xToHG sidebar--sectionName--4N7hT sidebar--sectionText--KAGhn sidebar--sectionContent--NHX7b ellipsis--ellipsis--Tjyfa'),
        children: [jsxs('div', {
          onClick: f,
          className: cssBuilderInstance.flex.itemsCenter.justifyBetween.$,
          role: 'button',
          tabIndex: 0,
          children: [jsx(SvgComponent, {
            className: U()(cssBuilderInstance.flex.itemsCenter.p6.mr12.colorIcon.$, 'favorited_section--moveFavoritesContainerHeaderLeftBlockItems--pl1Hf'),
            svg: p ? _$$A5 : _$$A6
          }), renderI18nText('sidebar.move_these_starred_items'), jsx(SvgComponent, {
            'svg': _$$A8,
            'className': U()('favorited_section--helpIcon--vfl5Y', cssBuilderInstance.flex.itemsBaseline.ml4.$),
            'data-tooltip-type': KindEnum.TEXT,
            'data-tooltip': getI18nString('file_browser.planless_favorites.your_favorited_items_tooltip'),
            'data-tooltip-timeout-delay': 50,
            'data-tooltip-max-width': 200
          })]
        }), p ? null : jsx(Badge, {
          text: _.length > 99 ? '99+' : `${_.length}`,
          color: BadgeColor.DEFAULT,
          className: cssBuilderInstance.mr8.colorText.colorBgSelectedSecondary.$
        })]
      }), p ? jsxs('div', {
        className: 'favorited_section--favoritesToMoveContentContainer--xYv6p',
        children: [h, jsxs('div', {
          className: cssBuilderInstance.flex.justifyBetween.m8.h24.$,
          children: [jsx($$, {
            className: 'favorited_section--favoritesToMoveActionButtons--FUt77',
            onClick: () => {
              t(showModalHandler({
                type: at,
                data: {
                  favorites: _
                }
              }));
            },
            children: renderI18nText('file_browser.planless_favorites.add_to_sidebar')
          }), jsx(_$$nR, {
            className: 'favorited_section--unstarAllButton--Rhy3- favorited_section--favoritesToMoveActionButtons--FUt77',
            onClick: g,
            children: renderI18nText('file_browser.planless_favorites.unstar_all')
          })]
        })]
      }) : null]
    })
  });
}
function an(e) {
  let t = useSelector(e => e.currentTeamId);
  let r = useDispatch();
  return t ? jsx(SidebarRow, {
    isSelected: e.selectedView && e.selectedView.view === 'limitedTeamSharedProjects',
    onClick: () => {
      r(selectLimitedTeamSharedProjectsView());
      r(trackSidebarClick({
        clickedResourceType: 'limitedTeamSharedProjects'
      }));
    },
    icon: jsx(_$$t2, {}),
    text: jsx(TextWithTruncation, {
      truncate: !0,
      children: renderI18nText('sidebar.all_shared_projects')
    }),
    wrapInListItem: !0
  }) : null;
}
function ao(e) {
  return e ? getI18nString('sidebar.browse.all_workspaces') : getI18nString('sidebar.browse.all_teams');
}
function al() {
  let e = useSelector(e => e.currentUserOrgId);
  let t = useSelector(t => e ? t.orgById[e] : null);
  let r = _$$c(e).data ?? !1;
  return t && e ? jsx(Fragment, {
    children: ao(r)
  }) : null;
}
function ad({
  hasWorkspaces: e
}) {
  let t = useDispatch();
  let r = useSelector(e => e.currentUserOrgId);
  let s = useSelector(e => e.selectedView);
  let n = useSelector(e => r ? e.orgById[r] : null);
  let o = s.view === 'org' && s.orgId === r;
  let l = ao(e);
  return n && r && l ? jsx(SidebarRow, {
    isSelected: o,
    onClick: () => {
      t(selectViewAction({
        view: 'org',
        orgId: r,
        orgViewTab: _$$X.HOME
      }));
      t(trackSidebarClick({
        clickedResourceType: 'org',
        resourceIdOrKey: r
      }));
    },
    icon: jsx(_$$t2, {
      className: cssBuilderInstance.colorIcon.$
    }),
    text: jsx(TextWithTruncation, {
      truncate: !0,
      children: l
    }),
    wrapInListItem: !0
  }) : null;
}
let am = 'seen_team_admin_moved_unassigned_drafts_onboarding';
let a_ = userFlagExistsAtomFamily(am);
function ap() {
  let e = useAtomWithSubscription(a_);
  let {
    show,
    isShowing,
    complete
  } = _$$e3({
    overlay: tZO,
    priority: _$$N.DEFAULT_MODAL
  }, [e]);
  _$$h(() => {
    show({
      canShow: e => !e
    });
  });
  return jsx(_$$rq, {
    arrowPosition: F_.LEFT_TITLE,
    clickOutsideToHide: !0,
    description: renderI18nText('team_admin.onboarding.unassigned_drafts.description'),
    isShowing,
    onClose: complete,
    primaryCta: {
      label: renderI18nText('general.got_it'),
      type: 'button',
      onClick: complete,
      ctaTrackingDescriptor: UpgradeAction.DONE
    },
    secondaryCta: {
      label: renderI18nText('general.learn_more'),
      type: 'link',
      href: 'https://help.figma.com/hc/articles/4420549259799',
      ctaTrackingDescriptor: UpgradeAction.LEARN_MORE
    },
    shouldCenterArrow: EL.FALLBACK,
    targetKey: af,
    title: renderI18nText('team_admin.onboarding.unassigned_drafts.title'),
    trackingContextName: _$$o4,
    userFlagOnShow: am
  });
}
let af = 'PRO_ADMIN_SETTINGS_LINK_ONBOARING_KEY';
function ag(e) {
  let t = useDispatch();
  let r = useSelector(e => e.currentTeamId);
  let n = useTeamPlanUser();
  let o = useIsTeamAdminUser(n).unwrapOr(!1);
  let l = useTeamPlanPublicInfo();
  let d = useMemo(() => l.transform(({
    tier: e
  }) => ({
    isProTeam: e === FPlanNameType.PRO,
    hasProAccess: e === FPlanNameType.PRO || e === FPlanNameType.STUDENT
  })), [l]);
  if (d.status !== 'loaded') return null;
  let c = d.data;
  if (!r || !o || !c.hasProAccess) return null;
  let u = e.selectedView && e.selectedView.view === 'teamAdminConsole';
  let m = jsx(_$$e4, {
    planType: _$$ps.TEAM,
    planId: r,
    isSelected: u,
    isDataLoaded: !0,
    isOrgAdmin: !1
  });
  return jsxs(Fragment, {
    children: [jsx(e4, {
      badge: c.isProTeam ? m : void 0,
      isSelected: u,
      dataTestId: 'admin-settings-link',
      dataOnboardingKey: af,
      onClick: () => {
        t(selectViewAction({
          view: 'teamAdminConsole',
          teamId: r,
          isProTeam: c.isProTeam,
          teamAdminConsoleViewTab: c.isProTeam ? DashboardSections.DASHBOARD : DashboardSections.MEMBERS
        }));
        t(trackSidebarClick({
          clickedResourceType: 'teamAdminSettings',
          resourceIdOrKey: r
        }));
      }
    }), jsx(ap, {})]
  });
}
function aI({
  onClickCta: e
}) {
  return jsx(setupThemeContext, {
    brand: 'seascape',
    children: jsx('div', {
      className: 'xk0qfmw x1bamp8i x19y5rnk x1v8gsql xb3r6kr x1n2onr6',
      children: jsxs('div', {
        className: 'xi4r6k5 x78zum5 xdt5ytf x6s0dn4',
        children: [jsx(_$$t3, {}), jsx('div', {
          ..._$$xk(aN.title),
          children: getI18nString('file_browser.make_file_creation_promos.title')
        }), jsx('div', {
          className: 'x2b8uid xkdneqi',
          children: getI18nString('file_browser.make_file_creation_promos.description')
        }), jsx(ButtonWide, {
          onClick: e,
          children: getI18nString('file_browser.make_file_creation_promos.cta')
        })]
      })
    })
  });
}
let aN = {
  title: {
    ..._$$g3.textBodyMediumStrong,
    textAlign: 'x2b8uid',
    marginTop: 'x7hzu26',
    $$css: !0
  }
};
function aC() {
  let e = _$$$2({
    isDraftsFolder: !0,
    editorType: FFileType.FIGMAKE,
    newFileFrom: FileBrowserLocation.FIGMAKE_SIDEBAR_PROMO,
    contextClicked: 'make_sidebar_promo'
  });
  useEffect(() => {
    trackEventAnalytics('Figma Make File Browser Sidebar Promo Viewed');
  }, []);
  return jsx(aI, {
    onClickCta: e
  });
}
let aB = withTrackedClick(_$$l);
let aU = withTrackedClick(_$$k2);
function aW() {
  return jsx('div', {
    className: 'base_upgrade_section--divider--k-uOp sidebar--divider--sHsz4'
  });
}
function a$(e) {
  let [t, r] = useState(!1);
  return jsx(TrackingProvider, {
    name: e.trackingContext,
    properties: e.trackingProperties,
    children: jsxs('div', {
      className: U()({
        'base_upgrade_section--content--95XrT': !e.demure,
        'base_upgrade_section--contentCollapsible--W7q8q base_upgrade_section--contentMindful--eOyhd base_upgrade_section--content--95XrT': e.demure && e.collapsible,
        'base_upgrade_section--contentMindful--eOyhd base_upgrade_section--content--95XrT': e.demure && !e.collapsible
      }),
      children: [e.collapsible && jsx('div', {
        className: 'base_upgrade_section--collapseButton--9v68l',
        children: t ? jsx(aB, {
          'aria-label': getI18nString('base_upgrade_section.expand'),
          'onClick': () => r(!1),
          'trackingProperties': {
            action: 'expand'
          }
        }) : jsx(aU, {
          'aria-label': getI18nString('base_upgrade_section.collapse'),
          'onClick': () => r(!0),
          'trackingProperties': {
            action: 'collapse'
          }
        })
      }), e.onDismiss && jsx(CloseButton, {
        className: 'base_upgrade_section--closeButton--cbjWt',
        onClick: e.onDismiss
      }), e.header && jsxs('div', {
        className: cssBuilderInstance.wFull.$$if(e.demure, cssBuilderInstance.font13.lh24, cssBuilderInstance.mb12).$,
        children: [e.header, (!e.demure || e.collapsible && !t) && jsx(aW, {})]
      }), !!e.icon && e.icon, e.countDownDaysLeft && jsx('div', {
        className: 'base_upgrade_section--countdownTicker--6YLVt',
        children: jsx(TextWithTruncation, {
          children: e.countDownDaysLeft,
          fontWeight: 'medium',
          fontSize: 14
        })
      }), !(e.collapsible && t) && jsxs(Fragment, {
        children: [jsxs('div', {
          className: e.demure ? 'base_upgrade_section--textContainerMindful--CttjJ' : 'base_upgrade_section--textContainer--ObHaO',
          children: [e.titleText && jsx('p', {
            className: 'base_upgrade_section--title--MLhT1',
            children: e.titleText
          }), jsx('p', {
            children: e.bodyText
          })]
        }), jsx(_$$hK, {
          height: 12
        }), jsx(Ih, {
          'onClick': e.onClickCTA,
          'data-testid': e.ctaDataTestId,
          'disabled': e.disabled,
          'trackingProperties': e.ctaTrackingProperties,
          'children': e.ctaText
        })]
      })]
    })
  });
}
let aG = 'upgrade_section--upgradeTextEmphasized--aQCr9';
var aV = (e => (e[e.UPGRADE = 0] = 'UPGRADE', e[e.CREATE = 1] = 'CREATE', e))(aV || {});
function az(e) {
  let t = useDispatch();
  let r = e.type;
  let s = jsx('span', {
    className: aG,
    children: getI18nString('edu.sidebar_section.verified')
  });
  return jsx(a$, {
    trackingContext: r === 0 ? 'Edu Upgrade Section' : 'Edu Create Section',
    icon: jsx(_$$o5, {}),
    bodyText: jsxs(Fragment, {
      children: [s, ' ', r === 0 ? getI18nString('edu.sidebar_section.upgrade') : getI18nString('edu.sidebar_section.create_team')]
    }),
    ctaText: r === 0 ? getI18nString('edu.choose_team') : getI18nString('edu.create_free_team'),
    onClickCTA: r === 0 ? () => {
      t(showModalHandler({
        type: _$$q2
      }));
    } : () => {
      t(openCreateTeamFlow({
        isEduTeam: !0
      }));
    },
    onDismiss: () => {
      t(postUserFlag({
        dismissed_edu_sidebar: !0
      }));
    },
    ctaDataTestId: 'edu-upgrade-cta'
  });
}
function aH({
  daysLeft: e
}) {
  let t = useDispatch();
  let r = !!selectUserFlag('edu_hide_verification');
  if (e < 0) return null;
  let s = () => {
    t(showModalHandler({
      type: _$$V4,
      data: {
        upsellSource: UpsellModalType.EDU_UPGRADE_SECTION
      }
    }));
  };
  let n = jsx(trackedButtonClickHandler, {
    onClick: () => customHistory.redirect('/education/apply', BrowserInfo.isIpadNative ? void 0 : '_blank'),
    children: renderI18nText('edu.sidebar_section.verify_your_education_status')
  });
  return e > 0 ? jsx(a$, {
    trackingContext: 'Universal Upgrade Section Education Plan Countdown',
    countDownDaysLeft: e,
    titleText: renderI18nText('edu.sidebar_section.education_plan_expires_in_days', {
      daysLeft: e
    }),
    bodyText: r ? renderI18nText('edu.sidebar_section.bootcamp_users_after_that_you_ll_need_to_upgrade_your_team') : renderI18nText('edu.sidebar_section.after_that_you_ll_need_to_upgrade_your_team_or_verify', {
      verify: n
    }),
    ctaText: renderI18nText('upgrade.upgrade_to_professional'),
    onClickCTA: s
  }) : jsx(a$, {
    trackingContext: 'Universal Upgrade Section Education Plan Expired',
    icon: jsx(_$$e9, {}),
    titleText: renderI18nText('edu.sidebar_section.education_plan_expired'),
    bodyText: r ? renderI18nText('edu.sidebar_section.bootcamp_users_to_keep_editing_upgrade_your_team') : renderI18nText('edu.sidebar_section.to_keep_editing_upgrade_your_team', {
      verify: n
    }),
    ctaText: renderI18nText('upgrade.upgrade_to_professional'),
    onClickCTA: s
  });
}
let aq = 'dismissed_limited_team_space_uub';
function aX(e) {
  let t = useDispatch();
  let [r, n] = useState(!1);
  let o = useSubscription(TeamRoleRequestView, {
    teamId: e.team.id
  });
  let l = selectCurrentUser();
  let d = o.status === 'loaded' && getResourceDataOrFallback(o.data?.teamRoleRequest);
  let c = !!d && d.status === 'pending';
  let u = !!d && d.status === 'approved';
  let m = !!d && d.status === 'denied';
  if (useEffect(() => {
    c && n(!0);
  }, [c]), o.status !== 'loaded' || u || m) {
    return null;
  }
  let _ = async () => {
    try {
      await teamAPIClient.requestTeamRole({
        teamId: e.team.id
      });
      t(VisualBellActions.enqueue({
        message: getI18nString('view_permissions.request_sent'),
        type: 'request-team-membership'
      }));
      trackUserEvent('limited_team_plan_request_upgrade_clicked', {
        user: l
      }, {
        teamId: e.team.id
      });
      n(!0);
    } catch (e) {
      t(FlashActions.error('Failed to request team role', e));
    }
  };
  return jsx(a$, {
    bodyText: renderI18nText('upgrade.to_get_unlimited_files_must_be_member', {
      currentTeamName: e.team.name
    }),
    ctaText: r ? renderI18nText('upgrade.access_requested') : renderI18nText('upgrade.request_full_access'),
    ctaTrackingProperties: {},
    demure: 'very',
    disabled: c || r,
    header: renderI18nText('upgrade.limited_access_in_this_team'),
    onClickCTA: _,
    onDismiss: () => {
      t(_$$bE({
        all_team_flags: [{
          team_id: e.team.id,
          flags: {
            [aq]: !0
          }
        }]
      }));
    },
    trackingContext: 'Limited Team Space Dismissable Upgrade Section',
    trackingProperties: {
      teamId: e.team.id
    }
  });
}
function a1({
  orgUpsellEligibility: e
}) {
  let t = useDispatch();
  let r = useSelector(e => e.userFlags);
  let s = e === _$$VY.SINGLE_TEAM ? renderI18nText('upgrade.access_cross_team_design_libraries_sso_and_more') : renderI18nText('upgrade.centralize_your_teams_and_share_design_libraries');
  let n = `${e === _$$VY.SINGLE_TEAM ? 'Single-Team' : 'Multi-Team'} Dismissible Org Upgrade Section`;
  return jsx(a$, {
    trackingContext: n,
    icon: jsx(_$$L, {}),
    bodyText: s,
    ctaText: renderI18nText('upgrade.view_plans'),
    onClickCTA: () => {
      e === _$$VY.SINGLE_TEAM && t(showModalHandler({
        type: HS,
        data: {
          upsellSource: UpsellModalType.ORG_UPGRADE_SECTION
        }
      }));
      e === _$$VY.MULTIPLE_TEAMS && t(showModalHandler({
        type: _$$u,
        data: {
          upsellSource: UpsellModalType.ORG_UPGRADE_SECTION
        }
      }));
    },
    onDismiss: () => t(CJ(r)),
    ctaDataTestId: 'org-upgrade-cta'
  });
}
let a5 = 'dismissed_paid_free_space_uub';
function a8(e) {
  let t = useDispatch();
  let r = _$$h3.useTrackingContext({
    trigger: UpsellModalType.UNIVERSAL_UPGRADE_SECTION
  });
  let {
    open
  } = OC();
  let n = jsx(trackedButtonClickHandler, {
    onClick: () => {
      open();
    },
    trackingProperties: {
      trackingDescriptor: UpgradeAction.WORK_IN_ONE_OF_YOUR_PAID_TEAMS
    },
    children: renderI18nText('upgrade.work_in_one_of_your_paid_teams')
  });
  let o = renderI18nText('upgrade.to_get_unlimited_files_and_features_link_switch_teams_or_upgrade_this_team_s_plan', {
    linkSwitchTeams: n
  });
  return jsx(a$, {
    trackingContext: 'Paid Free Space Dismissible Upgrade Section',
    trackingProperties: {
      teamId: e.team.id,
      ...r
    },
    header: renderI18nText('upgrade.this_team_is_on_a_free_plan'),
    bodyText: o,
    ctaText: renderI18nText('upgrade.view_all_plans'),
    onClickCTA: () => {
      t(showModalHandler({
        type: _$$V4,
        data: {
          upsellSource: UpsellModalType.UNIVERSAL_UPGRADE_SECTION
        }
      }));
    },
    ctaTrackingProperties: {
      trackingDescriptor: UpgradeAction.VIEW_ALL_PLANS
    },
    onDismiss: () => {
      t(_$$bE({
        all_team_flags: [{
          team_id: e.team.id,
          flags: {
            [a5]: !0
          }
        }]
      }));
    },
    demure: 'very'
  });
}
function ss(e, t, r) {
  let a = function (e, t) {
    let r = _$$jv({
      billableProductKeys: collaboratorSet,
      baseQuery: {
        currency: e,
        tier: _$$Ju.PRO,
        renewalTerm: t,
        unit: t
      }
    });
    let [a] = handleSuspenseRetainRelease(r);
    let s = vu(a);
    if (s.data === null) throw new Error('Price data is null');
    return _$$s$(s.data);
  }(e, t);
  let s = collaboratorSet.dict(e => r?.[e] || 0);
  return Vh(s, a);
}
function si({
  loading: e,
  data: t
}) {
  let r = useDispatch();
  let s = useSeparateBillingShippingExperiment();
  let n = useSelector(e => e.teamBilling.summary);
  let {
    currency,
    annual_seats,
    monthly_seats
  } = n;
  let c = ss(currency, BillingCycle.YEAR, annual_seats) ?? 0;
  let u = ss(currency, BillingCycle.MONTH, monthly_seats) ?? 0;
  if (e || !(c || u)) return null;
  let {
    cancellationDate,
    paymentMethod,
    team,
    annualSubscription,
    monthlySubscription
  } = t;
  let h = 0;
  _$$v3(n) ? (h = c, monthlySubscription?.canceled_at && (h += u)) : h = u;
  let x = jsx('h4', {
    className: 'xfifm61 x1s688f x1o2sk6j x1akne3o',
    children: renderI18nText('resubscription_section.header_text')
  });
  let b = jsx('a', {
    href: 'https://www.figma.com/pricing',
    style: sn.link,
    target: '_blank',
    children: renderI18nText('resubscription_section.link_so_much_more')
  });
  return jsx(a$, {
    bodyText: renderI18nText('resubscription_section.body_text', {
      linkSoMuchMore: b
    }),
    collapsible: !0,
    ctaDataTestId: 'user-churning-cta',
    ctaText: renderI18nText('resubscription_section.cta_text'),
    ctaTrackingProperties: {
      trackingDescriptor: paymentMethod ? UpgradeAction.REACTIVATE_YOUR_PROFESSIONAL_PLAN : UpgradeAction.UPDATE_PAYMENT
    },
    demure: 'very',
    header: x,
    onClickCTA: () => {
      paymentMethod ? r(showModalHandler({
        type: _$$U3,
        data: {
          upsellSource: UpsellModalType.RESUBSCRIBE_SECTION,
          paymentMethod,
          nextBillDate: cancellationDate,
          amount: h,
          team,
          monthlySub: monthlySubscription,
          annualSub: annualSubscription,
          currency,
          canSeeBillingAddressExp: s
        }
      })) : _$$C({
        team,
        dispatch: r,
        cancelling: !0,
        monthlySub: monthlySubscription,
        annualSub: annualSubscription,
        currency,
        canSeeBillingAddressExp: s
      });
    },
    titleText: renderI18nText('resubscription_section.title_text', {
      teamName: team.name,
      date: cancellationDate
    }),
    trackingContext: 'Resubscribe UUB'
  });
}
let sn = {
  link: {
    cursor: 'x1ypdohk',
    $$css: !0
  }
};
var so = (e => (e.LIMITED_TEAM_SPACE = 'Limited Team Space', e.EDU_EXPIRY = 'EDU Expiry', e.EDU_UPGRADE = 'EDU Upgrade', e.ORG_UPGRADE = 'Org Upgrade', e.PAID_FREE_SPACE = 'Paid Free Space', e.UNIVERSAL = 'Universal', e.RESUBSCRIPTION = 'Resubscription', e))(so || {});
var sl = (e => (e.BETWEEN_CONTENT = 'between_content', e.AFTER_CONTENT = 'after_content', e.IN_FOOTER = 'in_footer', e))(sl || {});
function sd({
  onTeam: e,
  hitFileLimit: t
}) {
  let r = useDispatch();
  let s = _$$h3.useTrackingContext({
    trigger: UpsellModalType.UNIVERSAL_UPGRADE_SECTION
  });
  let n = t ? jsxs(Fragment, {
    children: [jsx('span', {
      className: aG,
      children: renderI18nText('upgrade.running_out_of_files_in_your_free_team')
    }), ' ', renderI18nText('upgrade.upgrade_to_give_your_ideas_and_designs_room_to_grow_without_limits')]
  }) : renderI18nText('upgrade.ready_to_go_beyond_free_plan_upgrade_for_premium_features');
  return jsx(a$, {
    trackingContext: 'Universal Upgrade Section',
    trackingProperties: {
      onTeam: e,
      hitFileLimit: t,
      ...s
    },
    icon: jsx(_$$L, {}),
    bodyText: n,
    ctaText: renderI18nText('upgrade.view_plans'),
    ctaTrackingProperties: {
      trackingDescriptor: UpgradeAction.UPGRADE
    },
    ctaDataTestId: 'redesigned-upgrade-button',
    onClickCTA: () => {
      r(showModalHandler({
        type: _$$V4,
        data: {
          upsellSource: UpsellModalType.UNIVERSAL_UPGRADE_SECTION
        }
      }));
    }
  });
}
let sb = atom(e => {
  let t = e(sv);
  return !!t && [FPlanLimitationType.FILES_LIMITED, FPlanLimitationType.FILES_LIMITED_LEGACY, FPlanLimitationType.WHITEBOARD_FILES_LIMITED, FPlanLimitationType.WHITEBOARD_FILES_LIMITED_BETA, FPlanLimitationType.SLIDE_FILES_LIMITED, FPlanLimitationType.SLIDE_FILES_LIMITED_BETA, FPlanLimitationType.GLOBAL_FILES_LIMITED_LEGACY, FPlanLimitationType.GLOBAL_FILES_LIMITED].some(e => t?.restrictions_list?.includes(e));
});
let sv = createReduxSubscriptionAtomWithState(e => {
  let t = e.currentTeamId;
  return t ? e.teams[t] : null;
});
function sy() {
  let e = sj();
  return e === null ? null : jsx(ErrorBoundaryCrash, {
    boundaryKey: 'SidebarUpgradeSection',
    fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
    sentryTags: {
      area: _$$e.MONETIZATION_UPGRADES
    },
    children: jsx(sw, {
      ...e
    })
  });
}
function sw(e) {
  switch (e.type) {
    case so.RESUBSCRIPTION:
      return jsx(si, {
        ...e.props
      });
    case so.EDU_EXPIRY:
      return jsx(aH, {
        daysLeft: e.props.daysLeft
      });
    case so.EDU_UPGRADE:
      return jsx(az, {
        type: e.props.type
      });
    case so.ORG_UPGRADE:
      return jsx(a1, {
        orgUpsellEligibility: e.props.orgUpsellEligibility
      });
    case so.PAID_FREE_SPACE:
      return jsx(a8, {
        team: e.props.team
      });
    case so.LIMITED_TEAM_SPACE:
      return jsx(aX, {
        team: e.props.team
      });
    case so.UNIVERSAL:
    default:
      return jsx(sd, {
        onTeam: e.props.onTeam,
        hitFileLimit: e.props.hitFileLimit
      });
  }
}
function sj() {
  let e = function () {
    let e = getCurrentTeam();
    let t = useDispatch();
    let r = useSelector(e => e.teamBilling.summary);
    let a = useSelector(e => e.loadingState);
    let s = Be.loadingKeyForPayload({
      teamId: e?.id ?? ''
    });
    let n = isLoading(a, s);
    let o = isLoaded(a, s);
    let l = {
      type: so.RESUBSCRIPTION,
      overrideLocation: sl.IN_FOOTER
    };
    let d = {
      ...l,
      props: {
        loading: !0,
        data: null
      }
    };
    return useOneClickResubscribeExperiment() && e ? n ? d : o ? r.resubscription && (r.annual_subscription || r.monthly_subscription) ? {
      ...l,
      props: {
        loading: !1,
        data: {
          cancellationDate: new Date(1e3 * r.resubscription.cancellation_date),
          paymentMethod: r.resubscription.payment_method,
          team: e,
          annualSubscription: r.annual_subscription,
          monthlySubscription: r.monthly_subscription
        }
      }
    } : null : (t(Be({
      teamId: e.id
    })), d) : null;
  }();
  let t = function () {
    let e = selectCurrentUser();
    let t = getCurrentTeam();
    let r = selectPermissionsState();
    let a = useSubscription(EduOffboardingData, {});
    let s = a.data?.currentUser?.eduPeriodEnd;
    let n = useSelector(e => e.userFlags);
    let o = useCurrentPlanUser('useEduUpgradeSectionProps');
    let l = useIsOrgUser(o).unwrapOr(!1);
    if (!e || a.status !== 'loaded') return null;
    let d = getDaysUntilExpiration(s, isStudentValidated(e));
    let c = d > 0 && d !== 1 / 0 && isStudentValidated(e) && t?.student_team_state === FStudentTeamStatusType.STUDENT_TEAM_CURRENT;
    let u = d === 0 && t?.student_team_state === FStudentTeamStatusType.STUDENT_TEAM_EXPIRED && isTeamLocked(t.id, r);
    if (c || u) {
      return {
        type: so.EDU_EXPIRY,
        props: {
          daysLeft: d
        }
      };
    }
    if (!n.dismissed_edu_sidebar && isStudentValidated(e) && !l) {
      let e = getEditableUnpaidTeams(r).length > 0;
      return {
        type: so.EDU_UPGRADE,
        props: {
          type: e ? aV.UPGRADE : aV.CREATE
        }
      };
    }
    return null;
  }();
  let r = function () {
    let e = selectCurrentUser();
    let t = useSelector(e => e.teams);
    let r = getCurrentTeam();
    let a = useAtomWithSubscription(sb);
    let s = useAtomWithSubscription(_$$Lm);
    let n = useSubscription(TeamCanEdit, {
      id: r?.id ?? ''
    }, {
      enabled: !!r
    });
    let o = vt();
    let l = jn();
    return e && r && n.status === 'loaded' && n.data.team?.hasPermission && s.status === 'loaded' && s.data ? !r || isStudentValidated(e) || hasTeamPaidAccess(t[r.id]) || o || l ? null : {
      type: so.UNIVERSAL,
      props: {
        onTeam: Object.keys(t).length > 0,
        hitFileLimit: a
      }
    } : null;
  }();
  let a = function () {
    let e = useSelector(e => e.userFlags);
    let t = function () {
      let e = selectPermissionsState();
      let t = selectWithShallowEqual(e => ({
        orgUsersByOrgId: e.orgUsersByOrgId,
        user: e.user,
        userFlags: e.userFlags,
        teams: e.teams,
        currentTeamId: e.currentTeamId
      }));
      let r = useSubscription(TeamById(t.currentTeamId ? {
        teamId: t.currentTeamId
      } : null));
      return t.currentTeamId ? r.transform(({
        team: r
      }) => _$$hF(t, e, r)) : resourceUtils.loaded(_$$hF(t, e, null));
    }();
    let r = _$$j2(e);
    return t.transform(e => e === _$$VY.NONE || r ? null : {
      type: so.ORG_UPGRADE,
      props: {
        orgUpsellEligibility: e
      },
      overrideLocation: sl.IN_FOOTER
    });
  }();
  let s = function () {
    let e = selectCurrentUser();
    let t = useSelector(e => e.teams);
    let r = getCurrentTeam();
    let a = useAtomWithSubscription(_$$Lm);
    let s = useSelector(e => e.userTeamFlags);
    let n = useSubscription(TeamCanEdit, {
      id: r?.id ?? ''
    }, {
      enabled: !!r
    });
    let o = useDismissibleUUBExperiment();
    return !e || !r || a.status !== 'loaded' || a.data || isStudentValidated(e) || hasTeamPaidAccess(t[r.id]) || n.status !== 'loaded' || !n.data.team?.hasPermission || !o() ? null : _$$gY2(s, a5, r.id, 7776e6) ? null : {
      type: so.PAID_FREE_SPACE,
      props: {
        team: r
      },
      overrideLocation: sl.IN_FOOTER
    };
  }();
  let n = function () {
    let e = selectCurrentUser();
    let t = getCurrentTeam();
    let r = _$$d2();
    let a = useSelector(e => e.userTeamFlags);
    return e && t && r ? _$$gY2(a, aq, t.id, 7776e6) ? null : {
      type: so.LIMITED_TEAM_SPACE,
      props: {
        team: t
      },
      overrideLocation: sl.IN_FOOTER
    } : null;
  }();
  return e !== null ? e : n !== null ? n : t !== null ? t : r !== null ? r : a.status === 'loaded' && a.data ? a.data : s !== null ? s : null;
}
let sI = atom(!1);
function sN() {
  let [e, t] = useAtomValueAndSetter(sI);
  let r = useAtomWithSubscription(chromeInstallPromptAtom);
  if (!r) return null;
  let s = async () => {
    t(!0);
    let e = await r.prompt();
    e.outcome === 'dismissed' && t(!1);
    trackEventAnalytics('add_to_chromebook_clicked', {
      installed: e.outcome === 'accepted'
    });
  };
  return jsxs(ButtonPrimitive, {
    ..._$$xk(sC.container, e && sC.containerFadeOut),
    onClick: s,
    children: [jsx('span', {
      className: 'x2lah0s',
      children: jsx(_$$z4, {})
    }), jsx(TextWithTruncation, {
      truncate: !0,
      color: 'default',
      children: jsx('span', {
        ..._$$xk(sC.text),
        children: renderI18nText('file_browser.tool_bar.add_to_chromebook')
      })
    })]
  });
}
let sC = {
  container: {
    'width': 'xh8yej3',
    'display': 'x78zum5',
    'alignItems': 'x6s0dn4',
    'opacity': 'x1hc1fzr',
    'padding': 'xtdwleo',
    'paddingInline': null,
    'paddingStart': null,
    'paddingLeft': null,
    'paddingEnd': null,
    'paddingRight': null,
    'paddingBlock': null,
    'paddingTop': null,
    'paddingBottom': null,
    'gap': 'x167g77z',
    'rowGap': null,
    'columnGap': null,
    ':focus-visible_boxShadow': 'x1icplyp',
    '$$css': !0
  },
  containerFadeOut: {
    opacity: 'xg01cxk',
    pointerEvents: 'x47corl',
    transition: 'x177bw73',
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    $$css: !0
  },
  text: {
    ..._$$g3.textBodyMedium,
    $$css: !0
  }
};
function sL() {
  let e = useDispatch();
  let t = useSelector(e => e.userFlags);
  let r = useResourceRouteParams();
  let s = useResourceFuid();
  return t[w3] ? null : jsx(TrackingProvider, {
    name: _$$e7.COMMUNITY_MOVED_TO_RESOURCE_HUB_BANNER,
    children: jsx('div', {
      className: 'x15dj09p',
      children: jsxs(BannerInline, {
        icon: jsx(_$$U4, {}),
        variant: 'default',
        onDismiss: () => {
          e(postUserFlag({
            [w3]: !0
          }));
        },
        children: [jsx(BannerMessage, {
          title: getI18nString('community.resource_hub.a_new_place_to_explore_community'),
          children: jsx('div', {
            className: 'x1n0bwc9',
            children: getI18nString('community.resource_hub.introducing_templates_and_tools')
          })
        }), jsx(ButtonPrimitive, {
          'aria-label': getI18nString('community.resource_hub.take_me_there'),
          ..._$$xk(sD.button),
          'onClick': () => {
            customHistory.push(new ResourceHubHomeRouteClass({
              ...r,
              tab: PublishSourceType.COMMUNITY
            }, s).href);
            _$$lz();
          },
          'children': jsx('div', {
            children: getI18nString('community.resource_hub.take_me_there')
          })
        })]
      })
    })
  });
}
let sD = {
  button: {
    color: 'x1quhyk7',
    ..._$$g3.textBodyMediumStrong,
    $$css: !0
  }
};
function sU() {
  let e = useDispatch();
  let t = () => {
    trackEventAnalytics('community_browser_sidebar_action_clicked');
    e(selectViewAction({
      view: 'communityHub',
      subView: 'searchAndBrowse',
      data: getDefaultBrowseOptions()
    }));
  };
  return jsxs(TrackedAnchor, {
    'trackingEventName': 'community_browser_sidebar_action_clicked',
    'className': U()(cssBuilderInstance.flex.flexRow.itemsCenter.gap12.h48.pl12.pr12.colorText.cursorDefault.$, 'explore_community_button--hoverColor--mDUIs'),
    'data-onboarding-key': vM,
    'onClick': e => {
      e.preventDefault();
      e.stopPropagation();
      t();
    },
    'children': [jsx(_$$J3, {}), jsx(TextWithTruncation, {
      children: renderI18nText('sidebar.explore_community')
    })]
  });
}
function sW(e) {
  let t = Fz();
  let r = useCurrentPrivilegedPlan('SidebarFooter');
  let s = _$$LQ(r);
  let i = function () {
    let e = useChromeOSTabbed();
    let t = useAtomWithSubscription(chromeInstallPromptAtom);
    return !!BrowserInfo.chromeos && !!BrowserInfo.chrome && !e && !!t;
  }();
  let n = function () {
    let {
      data
    } = _$$E5();
    let t = getFeatureFlags().make_sidebar_promo;
    let r = getIsAndroidOrIphoneNotFigmaMobile();
    return !!data && !!t && !r;
  }();
  let d = !isGovCluster() && !n;
  let c = d && t && !s && r.status === 'loaded';
  let u = d && (!t || s) && r.status === 'loaded';
  return jsxs('div', {
    className: cssBuilderInstance.sticky.bottom0.colorBg.zIndex1.$$if(e.hasTopBorder, cssBuilderInstance.bt1.colorBorder.bSolid).$,
    children: [e.shouldShowUUBInFooter && jsx('div', {
      className: cssBuilderInstance.pb10.pt12.$,
      children: jsx(sy, {})
    }), i && jsx(sN, {}), n && jsx(aC, {}), c && jsx(sL, {}), u && jsx(sU, {})]
  });
}
function sV(e) {
  return jsxs('div', {
    className: cssBuilderInstance.flex.flexColumn.colorBg.$$if(e.hasBottomBorder, cssBuilderInstance.bb1.colorBorder.bSolid).$,
    children: [jsx(_$$Xg, {}), jsx(Zn, {})]
  });
}
function sH(e) {
  let t = useDispatch();
  let r = getSelectedView();
  let s = useSelector(e => e.currentUserOrgId);
  let n = useSelector(e => e.teamFeedBellStates);
  let o = !!(s && n[s]);
  let l = r.view === 'teamFeed';
  return jsx(SidebarRow, {
    onClick: () => {
      t(selectViewAction({
        view: 'teamFeed'
      }));
      t(trackSidebarClick({
        clickedResourceType: 'teamFeed'
      }));
    },
    isSelected: l,
    icon: jsx(_$$h4, {}),
    text: jsx('span', {
      className: 'team_feed_page_link--sectionNameCustomSections--dPwog sidebar--sectionNameCustomSections--9e7LZ sidebar--sectionTextCustomSections---1KFn sidebar--sectionContentCustomSections--wI9mZ ellipsis--ellipsis--Tjyfa',
      children: jsxs('div', {
        className: 'team_feed_page_link--sectionNameCustomSectionsLeft--MLMFK',
        children: [renderI18nText('fig_feed.feed'), o && jsx('div', {
          className: 'team_feed_page_link--redDot--t6QPY red_dot--baseRedDot--pgZV7'
        })]
      })
    }),
    wrapInListItem: !0
  });
}
function sK({
  selectedView: e,
  teamFolderId: t,
  teamFolderName: r
}) {
  let s = useDispatch();
  return t && r ? jsx(SidebarRow, {
    'isSelected': e && e.view === 'folder' && e.folderId === t,
    'onClick': () => {
      s(selectFolderView(t));
      s(trackSidebarClick({
        clickedResourceType: 'folder'
      }));
    },
    'icon': jsx(_$$e6, {}),
    'text': jsx(TextWithTruncation, {
      truncate: !0,
      showTooltipWhenTruncated: !1,
      children: r
    }),
    'data-onboarding-key': Jo,
    'wrapInListItem': !0
  }) : null;
}
function sJ() {
  let e = useDispatch();
  let t = useSelector(e => e.selectedView).view === 'deletedFiles';
  return jsx(Fragment, {
    children: jsx(SidebarRow, {
      isSelected: t,
      onClick: () => {
        e(selectViewAction({
          view: 'deletedFiles'
        }));
        e(trackSidebarClick({
          clickedResourceType: 'deletedFiles'
        }));
      },
      icon: jsx(_$$z5, {}),
      text: jsx('div', {
        className: cssBuilderInstance.pr36.$,
        children: jsx(TextWithTruncation, {
          children: renderI18nText('file_browser.tool_bar.trash')
        })
      }),
      wrapInListItem: !0
    })
  });
}
let sq = 'sidebar--section--COZVK';
let sX = 'sidebar--loading--AITp2';
let sQ = 'sidebar--divider--sHsz4';
function sZ(e) {
  let t = useDispatch();
  let r = useCurrentUserOrgId();
  let n = useSelector(e => e.currentTeamId);
  let l = useSelector(e => e.userFlags);
  let d = selectPermissionsState();
  let c = useSelector(e => e.userStateLoaded);
  let u = getSelectedView();
  let m = useSelector(e => e.dragState);
  let _ = eN({
    project: 'drafts'
  });
  let [p, f] = useState(0);
  let [g, x] = useState(!1);
  let [b, v] = useState(!1);
  let [y, w] = useState(!1);
  let j = () => {
    t(postUserFlag({
      show_create_new_section_banner: !1
    }));
  };
  let T = getFeatureFlags().file_browser_sidebar_semantic_html;
  let E = () => {
    t(_$$pS({
      newCustomSectionIndex: 0
    }));
    j();
  };
  let I = !!n;
  let C = _$$d2();
  let S = getCurrentUserOrg(d);
  let k = _$$a3();
  let R = k && k.permission === FUserRoleType.ADMIN;
  let A = Fz();
  let O = D6(r);
  let F = () => S && l.show_create_new_section_banner ? jsxs('div', {
    className: 'sidebar--betaAnnouncementContainer--FfmFT',
    children: [jsxs('div', {
      className: 'sidebar--betaAnnouncementHeader--g6Qzz',
      children: [jsx('div', {
        className: 'sidebar--betaAnnouncementHeaderTitle--AyDjm',
        children: renderI18nText('favorited_resources.custom_sections_banner_header')
      }), jsx(IconButton, {
        'aria-label': getI18nString('common.close'),
        'onClick': j,
        'children': jsx(_$$A, {})
      })]
    }), jsxs('div', {
      className: 'sidebar--betaAnnouncementBodyContainer--8u60g',
      children: [jsx('p', {
        children: renderI18nText('favorited_resources.custom_sections_banner_body')
      }), jsx('br', {}), jsx('p', {
        children: jsx($z, {
          variant: 'secondary',
          onClick: E,
          children: renderI18nText('favorited_resources.custom_sections_banner_create_new_section_button')
        })
      })]
    })]
  }) : null;
  let P = () => getFeatureFlags().xr_debounce_threshold && S && k && k.permission !== FUserRoleType.GUEST ? jsx(sH, {}) : null;
  let L = () => c ? jsx(sy, {}) : null;
  let D = I ? e.dataDriftCorrectedTeamResources?.favoritedFiles : e.sidebarUser?.favoritedFiles;
  let M = I ? e.dataDriftCorrectedTeamResources?.favoritedPrototypes : e.sidebarUser?.favoritedPrototypes;
  let B = I ? e.dataDriftCorrectedTeamResources?.favoritedProjects : e.sidebarUser?.favoritedProjects;
  B && e.FBGNavigationUpdatesTreatment !== FBGNavigationUpdatesVariants.CONTROL && (B = B.filter(t => t.project?.id !== e.teamFolderId));
  let W = D?.length === 0 && M?.length === 0 && B?.length === 0;
  let $ = e.FBGNavigationUpdatesTreatment === FBGNavigationUpdatesVariants.CONTROL || !W;
  let V = () => c ? jsxs(Fragment, {
    children: [r ? jsx(rZ, {
      fileBrowserPreferences: e.sidebarUser?.fileBrowserPreferences,
      favoritedFiles: D,
      favoritedPrototypes: M,
      favoritedProjects: B,
      favoritedTeams: e.sidebarUser?.favoritedTeams ?? null,
      favoritedWorkspaces: e.sidebarUser?.favoritedWorkspaces ?? null,
      userSidebarSections: e.sidebarUser?.userSidebarSections ? getResourceDataOrFallback(e.sidebarUser.userSidebarSections) : [],
      previewYOffset: p
    }) : jsx(Fragment, {
      children: $ && jsx(rQ, {
        fileBrowserPreferences: e.sidebarUser?.fileBrowserPreferences,
        favoritedFiles: D,
        favoritedPrototypes: M,
        favoritedProjects: B,
        favoritedTeams: null,
        favoritedWorkspaces: null,
        previewYOffset: p
      })
    }), I && jsx(ai, {
      teamUser: e.sidebarUser?.currentTeamUser ?? null,
      dataDriftCorrectedTeamResources: e.dataDriftCorrectedTeamResources,
      previewYOffset: p
    })]
  }) : jsx('div', {
    className: sX,
    children: jsx(LoadingSpinner, {})
  });
  let H = sj();
  let K = {
    [FBGNavigationUpdatesVariants.CONTROL]: sl.BETWEEN_CONTENT,
    [FBGNavigationUpdatesVariants.VARIANT_A]: sl.IN_FOOTER,
    [FBGNavigationUpdatesVariants.VARIANT_B]: sl.AFTER_CONTENT
  }[e.FBGNavigationUpdatesTreatment];
  let J = H?.overrideLocation ?? K;
  let q = !!m.data && (m.type === _$$R4.Folder || m.type === _$$R4.Team || m.type === _$$R4.Favorite);
  let X = !(e.showLoadingState || e.showingFileBrowserLoader);
  return jsx(_$$A2, {
    loadingElementId: 'filebrowser-loading-sidebar',
    loaded: X,
    children: jsxs('div', {
      className: 'x78zum5 xdt5ytf xh8yej3',
      children: [jsx(sV, {
        hasBottomBorder: y
      }), jsxs(_$$P2, {
        className: 'sidebar--sidebarScrollContainer--Z95XT',
        innerClassName: 'sidebar--innerScrollContainer--JaOLM',
        scrollingDisabled: !1,
        onScroll: e => f(e),
        children: [jsx(_$$a, {
          onIntersectionChange: t => {
            w(!t.isIntersecting);
            t.isIntersecting || g || (e.trackScroll(), x(!0));
          }
        }), jsxs('div', {
          className: U()('sidebar--navContent--15V3f', {
            'sidebar--grabbingCursor--6rbhU': q,
            'sidebar--navWidth240--TCn98': getFeatureFlags().file_browser_sidebar_row_ui
          }),
          children: [jsx('div', {
            className: 'x78zum5 x1iyjqo2 xdt5ytf',
            children: T ? jsxs(Fragment, {
              children: [jsxs('ul', {
                children: [jsx(eO, {}), jsx(_$$r2, {
                  selectedView: u,
                  dispatch: t
                }), A && jsx(_$$w2, {})]
              }), jsx('div', {
                className: sQ
              }), jsx('div', {
                className: 'x17qaar8 xr9ek0c xjpr12u',
                children: jsx(_$$b3, {})
              }), P(), jsxs('ul', {
                children: [e.draftsProject && jsx(tv, {
                  folder: e.draftsProject,
                  selectedView: u,
                  dispatch: t,
                  shouldHideCreateFileButton: !_
                }), I && jsx(Fragment, {
                  children: C ? jsxs(Fragment, {
                    children: [jsx(an, {
                      selectedView: u
                    }), jsx(sJ, {})]
                  }) : jsxs(Fragment, {
                    children: [jsx(ta, {
                      selectedView: u
                    }), jsx(sJ, {}), jsx(ag, {
                      selectedView: u
                    }), e.FBGNavigationUpdatesTreatment !== FBGNavigationUpdatesVariants.CONTROL && jsx(sK, {
                      selectedView: u,
                      teamFolderId: e.teamFolderId,
                      teamFolderName: e.teamFolderName
                    })]
                  })
                })]
              }), J === sl.BETWEEN_CONTENT && jsxs('div', {
                className: sq,
                children: [!!H && jsx('div', {
                  className: 'x7hzu26 x1ef8nbk xjm9jq1 x176lpz5'
                }), L()]
              }), S && k && c && jsxs('ul', {
                children: [jsx(ad, {
                  hasWorkspaces: e.isOrgWithWorkspaces
                }), jsx(sJ, {}), jsx(tt, {
                  selectedView: u,
                  org: S,
                  orgUser: k
                }), R && jsx(ej, {})]
              }), O && F(), jsx('div', {
                className: sQ
              }), jsx('section', {
                'aria-labelledby': 'favorites-heading',
                'children': V()
              }), J === sl.AFTER_CONTENT && jsx('div', {
                className: 'x7wzq59 x1ey2m1c x1yjdb4r x1a8lsjc xz9dl7a',
                children: L()
              })]
            }) : jsxs(Fragment, {
              children: [jsx(eO, {}), jsx(_$$r2, {
                selectedView: u,
                dispatch: t
              }), A && jsx(_$$w2, {}), jsx('div', {
                className: sQ
              }), jsx('div', {
                className: 'x17qaar8 xr9ek0c xjpr12u',
                children: jsx(_$$b3, {})
              }), P(), e.draftsProject && jsx(tv, {
                folder: e.draftsProject,
                selectedView: u,
                dispatch: t,
                shouldHideCreateFileButton: !_
              }), I && jsx(Fragment, {
                children: C ? jsxs(Fragment, {
                  children: [jsx(an, {
                    selectedView: u
                  }), jsx(sJ, {})]
                }) : jsxs(Fragment, {
                  children: [jsx(ta, {
                    selectedView: u
                  }), jsx(sJ, {}), jsx(ag, {
                    selectedView: u
                  }), e.FBGNavigationUpdatesTreatment !== FBGNavigationUpdatesVariants.CONTROL && jsx(sK, {
                    selectedView: u,
                    teamFolderId: e.teamFolderId,
                    teamFolderName: e.teamFolderName
                  })]
                })
              }), J === sl.BETWEEN_CONTENT && jsxs('div', {
                className: sq,
                children: [!!H && jsx('div', {
                  className: 'x7hzu26 x1ef8nbk xjm9jq1 x176lpz5'
                }), L()]
              }), k && S && (c ? jsxs(Fragment, {
                children: [jsx(ad, {
                  hasWorkspaces: e.isOrgWithWorkspaces
                }), jsx(sJ, {}), S && k && !BrowserInfo.mobile && jsxs(Fragment, {
                  children: [jsx(tt, {
                    selectedView: u,
                    org: S,
                    orgUser: k
                  }), R && jsx(ej, {})]
                })]
              }) : jsx('div', {
                className: sX,
                children: jsx(LoadingSpinner, {})
              })), O && F(), jsx('div', {
                className: sQ
              }), V(), J === sl.AFTER_CONTENT && jsx('div', {
                className: 'x7wzq59 x1ey2m1c x1yjdb4r x1a8lsjc xz9dl7a',
                children: L()
              })]
            })
          }), jsx(_$$a, {
            onInitialLoad: e => {
              v(!e);
            },
            onIntersectionChange: e => {
              v(!e.isIntersecting);
            }
          })]
        })]
      }), jsx(sW, {
        hasTopBorder: J === sl.BETWEEN_CONTENT && (b || y),
        shouldShowUUBInFooter: J === sl.IN_FOOTER
      })]
    })
  });
}
function s0(e) {
  let t = selectCurrentUser();
  let r = useCurrentUserOrgId();
  let n = _$$d2();
  let o = useSelector(e => e.currentTeamId);
  let l = useDispatch();
  let d = _$$v({
    currentOrgId: r,
    currentTeamId: o || null
  });
  let c = d.status === 'loaded' ? d.data : null;
  let u = d.status !== 'loaded';
  WX({
    markName: 'Sidebar',
    isLoaded: !u
  });
  let m = getUserId();
  let _ = useSelector(e => m ? e.authedUsers.byId[m]?.plans : null);
  let [{
    status: p,
    data: h
  }] = setupResourceAtomHandler(Xg({
    teamId: o || void 0
  }), {
    enabled: !n
  });
  let x = p === 'loaded' && h?.length === 1 ? h[0] : null;
  let b = x?.id;
  let v = x?.name;
  let y = null;
  let w = useMemo(() => c ? {
    ...c.currentUser
  } : null, [c]);
  let j = Zr(c?.org ?? null);
  let T = useMemo(() => {
    if (w && w.currentTeamUser && o) return TF(w, o, _);
  }, [w, o, _]);
  let E = e.showingFileBrowserLoader;
  if (useEffect(() => {
    if (o && w && w?.currentTeamUser) {
      let e = w.currentTeamUser;
      !e.fileBrowserPreferences && w.fileBrowserPreferences && l(Sh({
        prefs: w.fileBrowserPreferences,
        orderedFolderSubscriptions: w.fileBrowserSectionPreferences?.filter(e => e.teamId === o)[0]?.orderedFolderIds ?? [],
        teamUser: e
      }));
    }
  }, [o, w, l]), w) {
    if (r && w.baseOrgUser) {
      let e = w.baseOrgUser;
      w.fileBrowserPreferences = e.fileBrowserPreferences;
      w.fileBrowserSectionPreferences = e.fileBrowserSectionPreferences;
    } else {
      o && w.currentTeamUser && (w.fileBrowserPreferences = w.currentTeamUser?.fileBrowserPreferences);
    }
    o ? y = w.currentTeamUser?.draftsProject ?? null : r && (y = w.baseOrgUser?.draftsProject ?? null);
  }
  return jsx(sZ, {
    FBGNavigationUpdatesTreatment: useFBGNavigationUpdatesTreatment(),
    dataDriftCorrectedTeamResources: T,
    draftsProject: y,
    isOrgWithWorkspaces: j,
    showLoadingState: u,
    showingFileBrowserLoader: E,
    sidebarUser: w,
    teamFolderId: b,
    teamFolderName: v,
    trackScroll: () => trackUserEvent('Sidebar Scrolled', {
      user: t
    })
  });
}
var s1 = (e => (e.FILE_BROWSER = 'FileBrowserSidebar', e.ADMIN = 'AdminSettingsSidebar', e))(s1 || {});
let s4 = {
  FileBrowserSidebar: _$$e.WAYFINDING,
  AdminSettingsSidebar: _$$e.SCALE
};
function s2(e) {
  let t = useSelector(e => e.mobileNavShown);
  let r = _$$n() ? 'AdminSettingsSidebar' : 'FileBrowserSidebar';
  return jsx('nav', {
    className: U()('sidebar--navDefault--pYuzm', {
      'sidebar--navDefaultWidth240--qFPqm': getFeatureFlags().file_browser_sidebar_row_ui,
      'sidebar--showMobileNav--YiFit': t,
      'sidebar--showMobileNavWidth240--mMlvE': t && getFeatureFlags().file_browser_sidebar_row_ui
    }),
    children: jsx(ErrorBoundaryCrash, {
      sentryTags: {
        area: s4[r]
      },
      boundaryKey: r,
      fallback: jsx(_$$R2, {}),
      hasCustomWASMBuild: y4,
      children: r === 'FileBrowserSidebar' ? jsx(s0, {
        ...e
      }) : jsx(_$$ay, {})
    })
  });
}
let i_ = atom(void 0);
let ip = atom(!1);
let ig = parseColor('#2c2c2c');
function ih(e) {
  let t = useAtomWithSubscription(i_);
  if (!e || t === 'unset') return;
  let r = (e.colorConfig?.colors ?? [])[0];
  return t ? colorToHex(t) : r;
}
function ix(e) {
  return !!e && e !== 'unset';
}
function iv(e) {
  return e.rightSideActions ? jsx(iy, {
    headerLabel: e.label,
    rightSideActions: e.rightSideActions
  }) : e.label;
}
function iy(e) {
  return jsxs('div', {
    className: 'x78zum5 x1qughib xh8yej3 x6s0dn4 x40hh3e',
    children: [jsx('div', {
      className: 'x2lah0s',
      children: e.headerLabel
    }), jsx('div', {
      className: 'x78zum5 x167g77z xeuugli',
      children: e.rightSideActions
    })]
  });
}
function iw(e) {
  let t = useCurrentUserOrgId();
  let r = _$$P(t, useSelector(_$$o6));
  let s = ih(r.data === 'Unassigned' ? null : r.data);
  return jsxs('div', {
    ..._$$xk(ij.desktopHeader, e.showNavigationChevrons && ij.desktopHeaderWithChevrons, !!e.pageHeaderContent && !e.pageHeaderDividerHidden && ij.desktopHeaderBorder),
    'style': {
      backgroundColor: s
    },
    'data-testid': 'file-browser-desktop-header',
    'children': [e.showNavigationChevrons && jsx(_$$J4, {
      parentBackgroundColor: s
    }), e.pageHeaderContent && jsx('span', {
      className: 'xeuugli xh8yej3',
      children: jsx(iv, {
        label: e.pageHeaderContent,
        rightSideActions: e.pageHeaderActions
      })
    })]
  });
}
let ij = {
  desktopHeader: {
    display: 'x78zum5',
    flexDirection: 'x1q0g3np',
    flexShrink: 'x2lah0s',
    gap: 'x167g77z',
    rowGap: null,
    columnGap: null,
    alignItems: 'x6s0dn4',
    height: 'xsdox4t',
    paddingLeft: 'x1tudf5h',
    paddingRight: 'x1m2p0i2',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  },
  desktopHeaderWithChevrons: {
    paddingLeft: 'x5tiur9',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  },
  desktopHeaderBorder: {
    borderBottom: 'x1n5zjp5',
    borderBottomWidth: null,
    borderBottomStyle: null,
    borderBottomColor: null,
    $$css: !0
  }
};
let iE = parsePxNumber(tgj);
function iI(e) {
  return jsxs(Fragment, {
    children: [jsx(_$$z6, {
      query: `(min-width: ${iE}px)`,
      defaultClass: cssBuilderInstance.sticky.top0.colorBg.zIndexTopBar.$,
      children: jsx(iw, {
        pageHeaderContent: e.pageHeaderContent ? jsx('h1', {
          className: 'x193iq5w xuxw1ft xb3r6kr xlyipyv x13saxwh xg4jxnz x39l7i4 x1uvdjgy xo1l8bm',
          children: e.pageHeaderContent
        }) : void 0,
        pageHeaderDividerHidden: e.pageHeaderDividerHidden,
        pageHeaderActions: e.pageHeaderActions,
        showNavigationChevrons: e.showNavigationChevrons
      })
    }), e.pageHeaderContent && jsx(_$$i, {
      tabs: [jsx('h1', {
        className: 'x193iq5w xuxw1ft xb3r6kr xlyipyv x13saxwh xg4jxnz x39l7i4 x1uvdjgy xo1l8bm',
        children: e.pageHeaderContent
      }, 'mobilePageHeaderKey')]
    })]
  });
}
function iN(e) {
  let t = useRef(null);
  let r = useSelector(({
    selectedView: e
  }) => e);
  let n = _$$E7();
  let d = _$$K2();
  let u = useCurrentUserOrg();
  let m = d && u && !draftViews.includes(r.view);
  !function () {
    let e = useStore();
    useEffect(() => {
      let t = e.getState();
      let r = getPermissionsState(t);
      let a = setupWorkspaceIdentity(r.user, r.currentUserOrgId, r.currentTeamId);
      a && setRecentUserData(a.userId, isCommunityHubView(t.selectedView), a.orgId, void 0, a.teamId);
    }, [e]);
  }();
  let _ = _$$n() || r.view === 'litmus';
  let p = !e.showingFileBrowserLoader && !_ && (!!desktopAPIInstance || isChromebookTabbed() || e.pageHeaderContent);
  useEffect(() => {
    let e = e => {
      e.keyCode === KeyCodes.PERIOD && document.activeElement?.tagName === 'BODY' && getFeatureFlags().internal_only_debug_tools && getFeatureFlags().figment_debugger && toggleFigmentDebugger();
    };
    document.addEventListener('keydown', e);
    return () => {
      document.removeEventListener('keydown', e);
    };
  }, []);
  let {
    scrollPerformanceMonitorRef
  } = function ({
    flowName: e,
    scrollStopDelay: t = 150,
    context: r
  }) {
    let a = useRef(null);
    let i = useRef(!1);
    let n = useRef(null);
    let o = useRef(null);
    let l = useCallback(() => {
      i.current || (i.current = !0, a.current = observabilityClient.createVital(e, {
        level: LogLevelStr.INFO,
        description: 'Logging scroll performance via useScrollPerformanceMonitor',
        context: r,
        trackFps: !0
      }), a.current.start());
      n.current && clearTimeout(n.current);
      n.current = window.setTimeout(() => {
        i.current = !1;
        n.current = null;
        a.current?.stop();
      }, t);
    }, [t, e, r]);
    useEffect(() => {
      let e = o.current;
      if (e) {
        e.addEventListener('scroll', l);
        return () => {
          e.removeEventListener('scroll', l);
          n.current && clearTimeout(n.current);
        };
      }
    }, [l]);
    return {
      scrollPerformanceMonitorRef: o
    };
  }({
    flowName: 'file_browser_main_body_scroll_performance',
    context: {
      selectedViewView: r.view
    }
  });
  return jsxs('div', {
    className: cssBuilderInstance.flex.flexRow.flexGrow1.$,
    ref: t,
    children: [jsx(s2, {
      showLoadingState: !1,
      showingFileBrowserLoader: e.showingFileBrowserLoader
    }), jsxs('div', {
      className: 'file_browser_layout--fileBrowserPageViewContainer--m7oe2',
      ref: scrollPerformanceMonitorRef,
      children: [p && jsx(ErrorBoundaryCrash, {
        boundaryKey: 'FileBrowserPageHeader',
        fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
        hasCustomWASMBuild: y4,
        children: jsx(iI, {
          pageHeaderContent: e.pageHeaderContent,
          pageHeaderActions: e.pageHeaderActions,
          showNavigationChevrons: n,
          pageHeaderDividerHidden: e.pageHeaderDividerHidden
        })
      }), jsx(ErrorBoundaryCrash, {
        boundaryKey: 'FileBrowserLayout-content',
        fallback: jsx(_$$R2, {}),
        hasCustomWASMBuild: y4,
        children: !e.showingFileBrowserLoader && (m ? jsx(_$$H, {
          org: u,
          isInFileBrowser: !0
        }) : jsx(_$$z2, {
          layoutRef: t,
          children: e.children
        }))
      })]
    }), jsx(_$$G2, {
      entryPoint: _$$Q3.FILE_BROWSER
    })]
  });
}
function iD({
  orgTeamsQuery: e,
  workspaceId: t
}) {
  let r = useDispatch();
  let {
    currentOrgUser,
    teams,
    user,
    roles,
    orgId,
    orgName
  } = selectWithShallowEqual(e => ({
    currentOrgUser: e.orgUsersByOrgId[e.currentUserOrgId]?.[e.user.id],
    teams: e.teams,
    user: e.user,
    roles: e.roles,
    orgId: e.currentUserOrgId,
    orgName: e.orgById[e.currentUserOrgId].name
  }));
  let {
    canCreateTeam
  } = LM(orgId ? {
    id: orgId
  } : null, t);
  let _ = e.status === 'loaded';
  let p = useMemo(() => {
    let t = e.data ?? [];
    let r = t.length < MAX_LENGTH;
    sortByPropertyWithOptions(t, 'name', {
      useExpensiveNaturalComparison: r
    });
    return t;
  }, [e]);
  let f = currentOrgUser && currentOrgUser.permission === FUserRoleType.GUEST;
  let g = Object.keys(extractPropertyFromNestedObjects(roles.byTeamId, user.id)).filter(e => teams[e]);
  if (f) {
    let e = g.map(e => teams[e]).filter(e => e.org_id === orgId);
    return jsx(_$$h5, {
      teams: e,
      onLeave: e => {
        r(showModalHandler({
          type: _$$p5,
          data: {
            teamId: e.id
          }
        }));
      },
      orgName
    });
  }
  return _ ? jsx('div', {
    className: cssBuilderInstance.mt24.$,
    children: jsx(_$$w3, {
      orgTeams: p,
      orgTeamStatus: e.status,
      onCreateTeam: canCreateTeam ? () => {
        let e = {
          workspaceId: t ?? UNASSIGNED
        };
        r(showModalHandler({
          type: Uc,
          data: e
        }));
      } : void 0,
      emptyView: t && !canCreateTeam ? getI18nString('team_tile.no_teams.empty_workspace') : void 0
    })
  }) : jsx(_$$X2, {
    isLoading: !0
  });
}
let iM = atom(() => resourceUtils.loaded([]));
function iB({
  workspaceId: e,
  onlyJoinedTeams: t
}) {
  let r = selectPermissionsState();
  let a = useCurrentPublicPlan('useFilteredOrgTeamsQuery').unwrapOr(null);
  let i = getParentOrgIdIfOrgLevel(a);
  let n = !canMemberOrg(i ?? null, r);
  let o = useAtomWithSubscription(n ? iM : EK);
  return useMemo(() => o.transform(a => a.filter(a => {
    if (t) return hasViewerRoleAccessOnTeam(a.id, r);
    if (e === null) {
      if (a.workspace_id) return !1;
    } else if (e && a.workspace_id !== e) {
      return !1;
    }
    return _$$ox3(a, r);
  })), [o, r, t, e]);
}
function iU({
  children: e
}) {
  return jsxs('section', {
    'aria-label': getI18nString('file_browser.teams'),
    'children': [jsx('div', {
      className: cssBuilderInstance.mx32.textBodyLargeStrong.$,
      children: jsx('div', {
        children: getI18nString('file_browser.teams')
      })
    }), e]
  });
}
function iG({
  avatar: e,
  title: t,
  rightSideActions: r,
  rightSideOfTitleAction: s,
  pageHeaderIcon: i,
  textColor: n,
  badge: o
}) {
  return jsx('div', {
    className: U()(cssBuilderInstance.mx32.mb20.$, 'page_header--marginMobile--ocPfX'),
    children: jsxs('div', {
      className: cssBuilderInstance.flex.mt8.itemsCenter.justifyBetween.$,
      children: [jsxs('div', {
        className: cssBuilderInstance.flex.itemsCenter.minH40.minW0.$,
        children: [e, jsx('div', {
          className: cssBuilderInstance.wFull.overflowHidden.$,
          style: styleBuilderInstance.$$if(e && !i, styleBuilderInstance.ml16).$,
          children: jsxs('span', {
            className: cssBuilderInstance.flex.itemsCenter.$,
            children: [i, jsx('div', {
              style: {
                wordBreak: 'break-word'
              },
              children: jsxs(TextWithTruncation, {
                color: n,
                fontSize: 24,
                truncate: 'line-clamp',
                lineClamp: 2,
                children: [t, ' ']
              })
            }), jsx('div', {
              className: cssBuilderInstance.ml8.$,
              children: o
            }), s && s.element]
          })
        })]
      }), jsx('div', {
        className: cssBuilderInstance.flex.ml16.gap8.$,
        children: r?.map(e => jsx(_$$K3, {
          action: e
        }, e.key))
      })]
    })
  });
}
function iV(e) {
  let {
    belowHeaderItem,
    ...r
  } = e;
  return jsxs(Fragment, {
    children: [jsx(iG, {
      ...r
    }), belowHeaderItem]
  });
}
function iY(e) {
  return jsx(Button, {
    'variant': 'secondary',
    'disabled': !0,
    'htmlAttributes': {
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': e.tooltipText,
      'data-tooltip-show-immediately': !0,
      'onPointerEnter': e.onMouseEnter
    },
    'aria-describedby': e.tooltipText,
    'children': e.text
  });
}
function iJ({
  backgroundColor: e
}) {
  let t = debouncedTrackOrgEvent(TEAM_CREATION_BUTTON_HOVERED_TIMEOUT);
  let r = useSelector(e => e.selectedView.view);
  let s = getI18nString('license_group_view.toolbar.new_team_button');
  let n = () => {
    t(DISABLED_TEAM_CREATION_BUTTON_HOVERED, {
      placement: r
    });
  };
  return e ? jsx('button', {
    'className': U()('button_custom--buttonBase--H2KEL button--buttonBase---72nl', isColorDarkByLuminance(e) ? 'button_custom--buttonColorsForDarkBackground--CiydL' : 'button_custom--buttonColorsForLightBackground--wejKf', 'button_custom--buttonHugContents--Ntibj'),
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': getI18nString('license_group_view.toolbar.create_team_disabled'),
    'data-tooltip-show-immediately': !0,
    'onMouseEnter': n,
    'disabled': !0,
    'children': jsx(TextWithTruncation, {
      fontSize: 11,
      fontWeight: 'medium',
      truncate: !0,
      children: s
    })
  }) : jsx(iY, {
    text: s,
    tooltipText: getI18nString('license_group_view.toolbar.create_team_disabled'),
    onMouseEnter: n
  });
}
var iq = (e => (e.NEW_FILE = 'NEW_FILE', e.NEW_RESOURCE = 'NEW_RESOURCE', e.PROJECT_OVERFLOW_MENU = 'PROJECT_OVERFLOW_MENU', e.NEW_TEAM = 'NEW_TEAM', e.NEW_PROJECT = 'NEW_PROJECT', e.IMPORT = 'IMPORT', e.INVITE = 'INVITE', e.SHARE = 'SHARE', e.FAVORITE = 'FAVORITE', e.LOG_OUT = 'LOG_OUT', e.CLAIM = 'CLAIM', e.NEW_WHITEBOARD_FILE = 'NEW_WHITEBOARD_FILE', e.VIEW_COMMUNITY_PROFILE = 'VIEW_COMMUNITY_PROFILE', e.REQUEST_TO_EDIT = 'REQUEST_TO_EDIT', e.JOIN_TEAM = 'JOIN_TEAM', e.UPGRADE_TO_TEAM_ADMIN = 'UPGRADE_TO_TEAM_ADMIN', e.DROPDOWN = 'DROPDOWN', e.VIEW_MEMBERS = 'VIEW_MEMBERS', e.TEAM_OVERFLOW_MENU = 'TEAM_OVERFLOW_MENU', e.VIEW_LIBRARIES = 'VIEW_LIBRARIES', e.NEW_SITE_FILE = 'NEW_SITE_FILE', e.NEW_SLIDES_FILE = 'NEW_SLIDES_FILE', e.NEW_FIGMAKE_FILE = 'NEW_FIGMAKE_FILE', e.GET_DESKTOP_APP = 'GET_DESKTOP_APP', e.ADD_TO_CHROMEBOOK = 'ADD_TO_CHROMEBOOK', e.REQUEST_SENT_DESIGN = 'REQUEST_SENT_DESIGN', e.REQUEST_SENT_WHITEBOARD = 'REQUEST_SENT_WHITEBOARD', e.REQUEST_SENT_ALL = 'REQUEST_SENT_ALL', e.SETTINGS = 'SETTINGS', e))(iq || {});
function iX(e) {
  let t = useDispatch();
  let r = useSelector(e => e.currentUserOrgId);
  let a = getSelectedView();
  return () => {
    r ? t(showModalHandler({
      type: Uc,
      data: {
        workspaceId: e ?? UNASSIGNED
      }
    })) : t(openCreateTeamFlow({
      previousView: a
    }));
  };
}
function iQ({
  workspace: e,
  org: t
}) {
  let {
    canCreateTeam,
    cannotCreateTeamReason
  } = LM(t, e?.id ?? null);
  let i = ih(e);
  let n = iX(e?.id);
  return cannotCreateTeamReason === z4.TEAM_CREATION_CONTROL ? {
    kind: _$$A9.CUSTOM,
    key: iq.NEW_TEAM,
    element: jsx(iJ, {
      backgroundColor: i
    })
  } : canCreateTeam ? {
    kind: _$$A9.CUSTOM,
    key: iq.NEW_TEAM,
    element: jsx(_$$c2, {
      'aria-label': getI18nString('license_group_view.toolbar.new_team_button_aria_label'),
      'variant': 'primary',
      'onClick': n,
      'iconPrefix': jsx(_$$e0, {}),
      'children': getI18nString('license_group_view.toolbar.new_team_button')
    })
  } : null;
}
function iZ() {
  let e = useCurrentUserOrg();
  let t = iQ({
    org: e,
    workspace: null
  });
  let r = iB({
    workspaceId: null,
    onlyJoinedTeams: !1
  });
  return jsx(_$$r4, {
    header: jsx(iV, {
      title: getI18nString('license_group_view.meta.unassigned_title', {
        orgName: e.name
      }),
      rightSideActions: t ? [t] : void 0
    }),
    content: jsx('div', {
      className: cssBuilderInstance.flex.flexColumn.my24.$,
      children: jsx(iU, {
        children: jsx(iD, {
          orgTeamsQuery: r,
          workspaceId: null
        })
      })
    })
  });
}
function i2(e, t) {
  return i5(e.slice(0, t.length), t).filter(({
    path: e,
    oldValue: t,
    newValue: r
  }) => {
    let a = e[1];
    return e.length !== 2 || typeof a != 'string' || (!i6.includes(a) || !!t || !!r) && a in _$$hJ.shape && !i8.includes(a);
  });
}
let i5 = createComparator({
  strictLists: !0,
  strictRecords: !0
});
let i8 = ['community_profile_handle', 'community_profile_id', 'design_default_paid_status', 'experiment_assignments', 'figma_provided_libraries_disabled', 'last_upgraded_at', 'legal_name', 'license_group', 'license_group_id', 'sanctioned_at', 'student_autoverifying_team_at', 'subscription_raw', 'tax_id_verification_status', 'vat_gst_id', 'whiteboard_default_paid_status'];
let i6 = ['description', 'editors', 'img_url'];
function ns(e) {
  return jsx('div', {
    className: 'x1iog12x',
    children: getFeatureFlags().fb_page_header_fpl_menu ? jsx(ni, {
      ...e
    }) : jsx(nn, {
      ...e
    })
  });
}
function ni({
  buttonAriaLabel: e,
  menuGroups: t,
  dataOnboardingKey: r
}) {
  let {
    manager,
    getTriggerProps
  } = setupMenu({
    initialPosition: 'bottom'
  });
  let n = useTracking();
  return jsxs(MenuRootComp, {
    manager,
    children: [jsx(_$$d3, {
      ...getTriggerProps(),
      'aria-label': e,
      'data-onboarding-key': r,
      'children': jsx(_$$k2, {})
    }), jsx(_$$s3, {
      groups: t,
      minItemContentWidth: 192,
      trackedContext: _$$e7.PAGE_HEADER_DROPDOWN,
      onTrackedItemClick: e => {
        logAndTrackCTA({
          ...n.properties,
          trackingContext: n.name,
          ...e.trackingProperties
        });
      }
    })]
  });
}
function nn(e) {
  let t = useDispatch();
  let r = useRef(null);
  let n = useSelector(({
    dropdownShown: e
  }) => e);
  let o = _$$o7(e.menuGroups);
  let l = !!(n && n.type === e.dropdownKey && n.data && n.data.targetRect);
  let d = useTracking();
  return jsxs(Fragment, {
    children: [jsx(_$$d3, {
      'ref': r,
      'aria-expanded': l,
      'aria-label': e.buttonAriaLabel,
      'onClick': () => {
        if (r.current) {
          if (n) {
            t(hideDropdownAction());
            return;
          }
          t(showDropdownThunk({
            type: e.dropdownKey,
            data: {
              targetRect: r.current.getBoundingClientRect()
            }
          }));
        }
      },
      'data-onboarding-key': e.dataOnboardingKey,
      'children': jsx(_$$k2, {})
    }), l && wrapWithTracking(jsx(noop, {
      parentRect: n?.data?.targetRect,
      minWidth: 224,
      rootAndSubmenuMaxWidth: 224,
      items: o,
      dispatch: t,
      onSelectItem: e => {
        e.callback && e.callback('', null, t);
        e.trackingProperties && logAndTrackCTA({
          ...d.properties,
          trackingContext: d.name,
          ...e.trackingProperties
        });
      },
      showPoint: !0
    }), _$$e7.PAGE_HEADER_DROPDOWN)]
  });
}
let n_ = liveStoreInstance.Mutation(async e => {
  await _$$u4.updateDescription(e);
});
let np = registerModal(({
  workspace: e
}) => {
  let t = useDispatch();
  let r = _$$gY(n_);
  return jsx(_$$c4, {
    title: getI18nString('workspace_view.description_modal.title'),
    subtitle: jsx('div', {
      className: cssBuilderInstance.mb16.$,
      children: jsx(TextWithTruncation, {
        color: 'secondary',
        children: renderI18nText('workspace_view.description_modal.subtitle', {
          allWorkspacesText: jsx('span', {
            className: cssBuilderInstance.fontSemiBold.$,
            children: getI18nString('sidebar.browse.all_workspaces')
          })
        })
      })
    }),
    initialName: e.description ?? '',
    placeholder: getI18nString('workspace_view.description.placeholder'),
    submitText: getI18nString('workspace_view.description.save'),
    onRename: a => r({
      workspaceId: e.id,
      description: a
    }).then(() => t(VisualBellActions.enqueue({
      message: getI18nString('workspace_view.description_update_updated')
    })), () => {
      let e = getI18nString('workspace_view.description_update_error');
      t(FlashActions.error(e));
      console.error(e);
    })
  });
}, 'UpdateWorkspaceDescriptionModal');
function nf() {
  let e = useDispatch();
  let t = getUserId();
  return useCallback(r => {
    let a = r.workspace.admins.some(e => e.baseOrgUser?.user.id === t);
    let s = [];
    a && s.push({
      key: 'admin',
      items: [{
        displayText: getI18nString('workspace_view.toolbar.admin_settings'),
        onClick: () => {
          e(selectViewAction({
            view: 'workspace',
            subView: DUserRole.ADMIN,
            workspaceId: r.workspace.id,
            selectedTab: defaultSectionKey
          }));
        }
      }]
    });
    let i = {
      key: 'default',
      items: []
    };
    s.push(i);
    i.items.push({
      displayText: getI18nString('file_browser.copy_link'),
      onClick: () => {
        let t = _$$fO(r.workspace.id, r.org.id);
        e(_$$S({
          url: t
        }));
      }
    });
    r.workspace.canAdmin && i.items.push({
      displayText: getI18nString('license_group_view.toolbar.change_icon'),
      onClick: () => {
        e(_$$X3({
          entity: r.workspace,
          entityType: _$$ck2.WORKSPACE,
          shape: 'SQUARE'
        }));
      }
    });
    return s;
  }, [e, t]);
}
var ny = (e => (e.SOLID = 'solid', e.NO_FILL = 'no_fill', e))(ny || {});
function nw({
  selectedFillOption: e,
  onSelectFillOption: t
}) {
  let r = {
    solid: getI18nString('workspace_view.toolbar.solid'),
    no_fill: getI18nString('workspace_view.toolbar.no_fill')
  };
  return jsx(Ve, {
    className: cssBuilderInstance.ml8.colorTextMenuSecondary.colorIconMenuSecondary.$,
    dropdownButton({
      onClick: t
    }) {
      return jsx(_$$$n, {
        className: cssBuilderInstance.ml4.mr4.$,
        role: 'combobox',
        onClick: t,
        caret: 'down',
        children: jsx('span', {
          className: cssBuilderInstance.minW32.mr8.$,
          children: r[e]
        })
      });
    },
    dropdownOptionsClassName: cssBuilderInstance.mt4.$,
    options: ['solid', 'no_fill'].map((e, s) => jsx(_$$c$, {
      className: cssBuilderInstance.colorTextMenuSecondary.$,
      id: e,
      onClick: () => {
        t(e);
      },
      children: r[e]
    }, s)),
    optionsBelowSelector: !0,
    noBorder: !0
  });
}
let nj = liveStoreInstance.Mutation(async e => {
  await _$$u4.updateColor(e);
});
function nT({
  workspace: e,
  onClose: t
}) {
  let r = useDispatch();
  let n = _$$gY(nj);
  let o = [{
    option: ig
  }, ...TS('base').filter(e => !areColorsEqual(e, BV(ColorOptions.BLACK, 'base'))).map(e => ({
    option: e
  })), ...TS('baseLight').map(e => ({
    option: e
  }))];
  let l = useRef(null);
  let [d, c] = useState(!1);
  let u = getVisibleTheme();
  let m = function (e) {
    try {
      if (e) return parseColor(e);
    } catch (e) {
      console.error(e);
    }
  }((e?.colorConfig?.colors ?? [])[0]);
  let [_, p] = useState(m ? 'solid' : 'no_fill');
  let [f, g] = useAtomValueAndSetter(i_);
  useEffect(() => (g(m), () => {
    g(void 0);
  }), []);
  useEffect(() => {
    if (!d) {
      let e = e => {
        e.key === 'Escape' && t();
      };
      let r = e => {
        l.current && !l.current.contains(e.target) && t();
      };
      document.addEventListener('keydown', e);
      document.addEventListener('pointerdown', r);
      return () => {
        document.removeEventListener('keydown', e);
        document.removeEventListener('pointerdown', r);
      };
    }
  }, [d, t]);
  return jsxs(Fragment, {
    children: [jsx('div', {
      'role': 'button',
      'aria-label': getI18nString('common.close'),
      'tabIndex': 0,
      'className': cssBuilderInstance.absolute.wFull.hFull.top0.left0.zIndexTertiaryModal.$,
      'onClick': t
    }), jsxs('div', {
      className: cssBuilderInstance.absolute.flex.h40.justifyCenter.alignCenter.flexShrink0.bRadius4.colorBgMenu.elevation400.mt8.ml32.zIndexModal.$,
      ref: l,
      children: [jsx(nw, {
        selectedFillOption: _,
        onSelectFillOption: e => {
          if (p(e), e === 'solid') {
            let e = u === 'dark' ? ig : whiteColor;
            g(m ?? e);
          } else {
            g('unset');
          }
        }
      }), ix(f) && jsxs(Fragment, {
        children: [jsx(wv, {}), jsx(qW, {
          buttonClassName: cssBuilderInstance.ml2.mr2.$,
          buttonSize: 'xsmall',
          dropperDisabled: !0,
          fixedNumColumns: 9,
          hasNonWhiteboardColors: !0,
          isColorPopoverOpen: d,
          onColorChange: e => {
            g(e.option);
          },
          optionSize: 'medium',
          options: o,
          paletteType: 'base',
          positionX: () => 0,
          positionY: (e, t) => DH(e, t, 4),
          setIsColorPopoverOpen: c,
          shouldCustomColorPopoverCloseOnEscape: !0,
          shouldDisableDataTooltip: !0,
          value: {
            option: f
          }
        })]
      }), jsx(wv, {}), jsx(_$$$n, {
        className: cssBuilderInstance.ml4.mr2.$,
        onClick: t,
        children: jsx('span', {
          className: cssBuilderInstance.mr1.colorTextToolbarSecondary.$,
          children: getI18nString('workspace_view.color.toolbar.cancel')
        })
      }), jsx(_$$$n, {
        className: cssBuilderInstance.mr8.$,
        onClick: () => {
          n({
            workspaceId: e.id,
            colors: ix(f) ? [colorToHex(f)] : [],
            onfulfilled: () => r(VisualBellActions.enqueue({
              message: getI18nString('workspace_view.toolbar.workspace_color_updated')
            })),
            onrejected: () => {
              let e = getI18nString('workspace_view.toolbar.workspace_color_update_error');
              r(FlashActions.error(e));
              console.error(e);
            }
          });
          t();
        },
        children: jsx('span', {
          className: cssBuilderInstance.colorTextOnbrand.$,
          children: getI18nString('workspace_view.color.toolbar.save')
        })
      })]
    })]
  });
}
let nR = connect(e => ({
  currentUserId: e.user?.id
}))(e => {
  let t = t => {
    t.stopPropagation();
    e.canLeave && e.onLeaveClick();
  };
  let r = e.members.length;
  let s = e.membersToShow || 10;
  return jsxs('div', {
    children: [!e.removeHeader && jsx('div', {
      className: cssBuilderInstance.font13.fontMedium.mb12.$,
      children: e.label || getI18nString('file_browser.team_overview.member_label')
    }), e.members.slice(0, s).map(r => {
      let s = r.id === e.currentUserId;
      let i = e.showAdminBadge && e.showAdminBadge(r);
      return jsx(_$$az, {
        size: 24,
        entity: r,
        className: e.customAvatarRowStyle ? e.customAvatarRowStyle : cssBuilderInstance.font13.mb16.$,
        showIsMe: s,
        onClick: e.onMemberClick,
        badge: i ? {
          color: BadgeColor.DEFAULT,
          text: getI18nString('file_browser.badge_label.admin')
        } : void 0,
        includeUserEmailAddress: e.shouldIncludeUserEmailAddress,
        children: e.canLeave && s && jsx('span', {
          onClick: t,
          className: 'members_preview--leaveLink--v8vxs text--fontPos13--xW8hS text--_fontBase--QdLsd blue_link--blueLink--9rlnd',
          children: renderI18nText('file_browser.team.leave_confirm')
        })
      }, r.id);
    }), r > s && (e.customOverflowRow || jsxs('div', {
      className: 'members_preview--totalMemberCountContainer--wYQwX',
      onClick: e.onClickShowMore,
      children: [jsx(SvgComponent, {
        svg: _$$A0,
        className: 'members_preview--teamIcon--UFW2s'
      }), jsx('div', {
        className: 'members_preview--totalMemberCount--D3Q8a text--fontPos13--xW8hS text--_fontBase--QdLsd',
        children: renderI18nText('file_browser.team_overview.num_others', {
          numMembers: r - s
        })
      })]
    }))]
  });
});
var nO = (e => (e.MEMBERS = 'MEMBERS', e.ADMINS = 'ADMINS', e))(nO || {});
function nF(e) {
  return jsx('div', {
    className: 'workspace_members_modal--searchContainer--KGPrU modal--searchContainer--EA8ib',
    children: jsx(IW, {
      className: 'workspace_members_modal--searchBar--z110d',
      focusOnMount: !0,
      query: e.query,
      clearSearch: () => {
        e.onChange('');
      },
      onChange: e.onChange,
      hideXIcon: !0,
      hasTransparentBackground: !0,
      iconClassName: 'workspace_members_modal--searchIcon--7DSd4',
      placeholder: getI18nString('workspace_view.members_modal.search_placeholder')
    })
  });
}
function nP(e) {
  return jsx('div', {
    className: 'workspace_members_modal--emptyContainer--bTf-s',
    children: jsx('div', {
      className: 'workspace_members_modal--emptyState--IwqA2 text--fontPos11--2LvXf text--_fontBase--QdLsd',
      children: e.content
    })
  });
}
let nL = (e, t) => e.baseOrgUser === null ? -1 : t.baseOrgUser === null ? 1 : e.baseOrgUser.user.handle.localeCompare(t.baseOrgUser.user.handle);
let nD = registerModal(e => {
  let t = useModalManager(e);
  let [r, i] = useState('');
  let [n, o, l] = _$$t5.useTabs({
    MEMBERS: !0,
    ADMINS: !0
  });
  useEffect(() => {
    i('');
  }, [i, l.activeTab]);
  let d = e.workspace.members.slice().sort(nL);
  let c = e.workspace.admins.slice().sort(nL);
  let u = {};
  d.forEach(e => {
    e.baseOrgUser && (u[e.baseOrgUser.user.id] = e.permission);
  });
  let m = e => u[e.id] === FOrganizationRoleType.ADMIN && l.activeTab === 'MEMBERS';
  return jsx(ModalRootComponent, {
    manager: t,
    width: 'lg',
    height: 'fixed',
    children: jsxs(DialogContents, {
      children: [jsxs(DialogHeader, {
        children: [jsx(DialogHiddenTitle, {
          children: getI18nString('workspace_view.members_modal.title')
        }), jsxs(_$$t5.TabStrip, {
          manager: l,
          children: [jsx(_$$t5.Tab, {
            ...n.MEMBERS,
            children: getI18nString('workspace_view.members_modal.members')
          }), jsx(_$$t5.Tab, {
            ...n.ADMINS,
            children: getI18nString('workspace_view.members_modal.admins')
          })]
        })]
      }), jsxs(DialogBody, {
        scrolling: 'none',
        padding: 0,
        children: [(n.MEMBERS.display ? d : c).length > 0 && jsx(nF, {
          query: r,
          onChange: i
        }), jsx(_$$P2, {
          className: 'workspace_members_modal--outerContainer--in03x',
          innerClassName: 'workspace_members_modal--membersContainer--16pMi',
          children: jsxs('div', {
            className: 'workspace_members_modal--modalContainer--3d9wu',
            children: [jsx(_$$t5.TabPanel, {
              ...o.MEMBERS,
              children: d.length === 0 ? jsx(nP, {
                content: renderI18nText('workspace_view.members_modal.no_members', {
                  workspaceName: e.workspace.name
                })
              }) : jsx(nM, {
                getShouldShowAdminBadge: m,
                query: r,
                users: d
              })
            }), jsx(_$$t5.TabPanel, {
              ...o.ADMINS,
              children: c.length === 0 ? jsx(nP, {
                content: renderI18nText('workspace_view.members_modal.no_admins', {
                  workspaceName: e.workspace.name
                })
              }) : jsx(nM, {
                getShouldShowAdminBadge: m,
                query: r,
                users: c
              })
            })]
          })
        })]
      })]
    })
  });
}, 'WORKSPACE_MEMBERS_MODAL', ModalSupportsBackground.YES);
function nM({
  getShouldShowAdminBadge: e,
  query: t,
  users: r
}) {
  let n = useDispatch();
  let o = useCallback((e, t) => {
    n(selectViewAction({
      view: 'user',
      userId: t.id,
      userViewTab: InterProfileType.INTERNAL_PROFILE
    }));
    n(hideModal());
  }, [n]);
  let l = r.filter(e => {
    let r = e.baseOrgUser?.user;
    let a = t.toLocaleLowerCase();
    return !!r?.email?.toLocaleLowerCase().includes(a) || !!r?.handle.toLocaleLowerCase().includes(a);
  }).map(e => {
    let t = e.baseOrgUser.user;
    return {
      id: t.id,
      handle: t.handle,
      img_url: t.imgUrl,
      email: t.email
    };
  }) || [];
  return l.length === 0 ? jsx(nP, {
    content: renderI18nText('workspace_view.members_modal.no_results', {
      query: t
    })
  }) : jsx(nR, {
    members: l,
    showAdminBadge: e,
    membersToShow: l.length,
    canLeave: !1,
    customAvatarRowStyle: 'workspace_members_modal--memberPopup--y5bbv text--fontPos13--xW8hS text--_fontBase--QdLsd admin_settings_page--avatarWithHandle--awCiS ellipsis--ellipsis--Tjyfa',
    onMemberClick: o,
    removeHeader: !0,
    shouldIncludeUserEmailAddress: !0
  });
}
function nB(e) {
  let {
    workspace,
    org
  } = e;
  let n = useDispatch();
  let o = useSelector(e => e.currentUserOrgId);
  let l = useSelector(e => e.avatarEditorState);
  let d = workspace.canAdmin;
  let [c, u] = useAtomValueAndSetter(ip);
  let {
    canCreateTeam
  } = LM(org, workspace.id);
  let _ = window.innerWidth <= parsePxInt(tgj);
  let p = workspace ? workspace.id : UNASSIGNED;
  let f = ih(workspace);
  let g = function (e) {
    if (e && e !== 'unset') return isColorDarkByLuminance(e) ? 'dark' : 'light';
  }(f);
  let h = (workspace?.members || []).length;
  let x = useTheme();
  let b = iX(workspace.id);
  let v = useCallback((e, r, a) => {
    if (workspace) {
      let s = {
        workspace: {
          id: workspace.id,
          name: workspace.name ?? '',
          imgUrl: workspace.imgUrl
        },
        entrypoint: 'workspace_page_view',
        sectionId: a,
        favoriteId: r
      };
      e ? n(ZW(s)) : n($$if(s));
    }
  }, [n, workspace]);
  let y = {
    kind: _$$A9.CUSTOM,
    key: iq.VIEW_MEMBERS,
    element: jsx(_$$c2, {
      'variant': 'secondary',
      'onClick': () => {
        n(showModalHandler({
          type: nD,
          data: {
            workspace: e.workspace,
            tab: nO.MEMBERS
          }
        }));
      },
      'iconPrefix': jsx(_$$_4, {}),
      'htmlAttributes': {
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': getI18nString('file_browser.view_members_with_count', {
          numMembers: h
        })
      },
      'aria-label': getI18nString('file_browser.view_members_with_count', {
        numMembers: h
      }),
      'children': e.isWorkspaceMembersLoading ? jsx(_$$k3, {}) : jsx(Fragment, {
        children: h.toString()
      })
    })
  };
  let w = useMemo(() => jsx(_$$i2, {
    setFavorite: v,
    favoriteType: FEntityType.WORKSPACE,
    resourceId: p,
    orgId: o,
    monochrome: !!f,
    size: 'lg'
  }), [p, v, o, f]);
  let j = function () {
    let e = nf();
    let t = useDispatch();
    let [r, a] = useAtomValueAndSetter(ip);
    return useCallback(r => {
      let s = e(r);
      let i = s[s.length - 1];
      i || (i = {
        key: 'workspace-page-header-menu-items',
        items: []
      }, s.push(i));
      r.workspace.canAdmin && (i.items.push({
        displayText: getI18nString('workspace_view.toolbar.change_color'),
        onClick: () => a(!0)
      }), i.items.push({
        displayText: getI18nString('workspace_view.description.title'),
        onClick: () => {
          t(showModalHandler({
            type: np,
            data: {
              workspace: r.workspace
            }
          }));
        }
      }));
      return s;
    }, [e, t, a]);
  }();
  let T = workspace && org ? j({
    workspace,
    org
  }) : canCreateTeam && _ ? [{
    key: 'mobile-workspace-page-header-menu-items',
    items: [{
      displayText: getI18nString('org_view.new_team'),
      onClick: b
    }]
  }] : void 0;
  let E = [];
  let I = iQ({
    workspace,
    org
  });
  if (I && E.push(I), e.showMembersButton && E.push(y), workspace && E.push({
    kind: _$$A9.CUSTOM,
    key: iq.FAVORITE,
    element: w
  }), !workspace) {
    return jsx(iV, {
      title: getI18nString('license_group_view.meta.unassigned_title', {
        orgName: org.name
      }),
      rightSideActions: E
    });
  }
  let C = T ? {
    kind: _$$A9.CUSTOM,
    key: iq.DROPDOWN,
    element: jsx(ns, {
      buttonAriaLabel: getI18nString('org_view.page_header_dropdown_label'),
      dropdownKey: `workspace-context-${workspace.id}`,
      menuGroups: T
    })
  } : void 0;
  return jsx('div', {
    style: {
      backgroundColor: f
    },
    children: jsx(setupThemeContext, {
      mode: f ? g : x.color,
      children: jsx(iV, {
        avatar: d ? jsx(_$$j3, {
          avatarEditorState: l,
          entityType: _$$ck2.WORKSPACE,
          entity: workspace,
          dispatch: n,
          size: 40
        }) : jsx(z6, {
          entity: workspace,
          size: 40
        }),
        title: jsx('span', {
          className: 'workspace_page_header--titleColorForBackground--e6EH9',
          children: workspace.name
        }),
        badge: workspace.orgAccess === FAccessLevelType.SECRET ? jsx('div', {
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': getI18nString('workspace_table.secret_workspace_lock_tooltip'),
          'data-tooltip-subtext': getI18nString('workspace_table.secret_workspace_lock_tooltip_subtext'),
          'data-tooltip-timeout-delay': 500,
          'data-tooltip-max-width': 300,
          'children': jsx(_$$$4, {
            className: 'workspace_page_header--iconColorForBackground--QSzJh'
          })
        }) : void 0,
        rightSideActions: E,
        rightSideOfTitleAction: C,
        belowHeaderItem: c ? jsx(nT, {
          workspace,
          onClose: () => u(!1)
        }) : void 0
      })
    })
  });
}
function nU(e) {
  let t = useDispatch();
  let r = e.workspace.members;
  let n = useMemo(() => r ? r.sort((e, t) => {
    let r = e.permission === FOrganizationRoleType.ADMIN;
    let a = t.permission === FOrganizationRoleType.ADMIN;
    if (r && !a) return -1;
    if (!r && a) return 1;
    let s = e.baseOrgUser?.user?.handle || '';
    let i = t.baseOrgUser?.user?.handle || '';
    let n = s === '';
    let o = i === '';
    return n && !o ? 1 : !n && o ? -1 : n && o ? 0 : s.localeCompare(i, void 0, {
      sensitivity: 'base'
    });
  }) : [], [r]);
  let o = {};
  n.forEach(e => {
    e.baseOrgUser && (o[e.baseOrgUser.user.id] = e.permission);
  });
  return jsxs('div', {
    className: cssBuilderInstance.my24.mr8.ml24.$,
    children: [jsx('div', {
      className: 'workspace_page_meta_content--membersHeader--0jaJ3 text--fontPos13--xW8hS text--_fontBase--QdLsd',
      children: getI18nString('workspace_view.sidebar.members')
    }), jsx(nR, {
      removeHeader: !0,
      members: n.map(e => e.baseOrgUser?.user).filter(e => !!e),
      onMemberClick: (e, r) => {
        t(selectViewAction({
          view: 'user',
          userId: r.id,
          userViewTab: InterProfileType.INTERNAL_PROFILE
        }));
      },
      canLeave: !1,
      showAdminBadge: e => o[e.id] === FOrganizationRoleType.ADMIN,
      customOverflowRow: jsx(Fragment, {
        children: jsx('button', {
          className: 'workspace_page_meta_content--seeAllMembers--mIOar text--fontPos11--2LvXf text--_fontBase--QdLsd',
          onClick: () => {
            t(showModalHandler({
              type: nD,
              data: {
                workspace: e.workspace,
                tab: nO.MEMBERS
              }
            }));
          },
          children: getI18nString('workspace_view.sidebar.see_all_members')
        })
      })
    })]
  });
}
function nG({
  isExpanded: e,
  fill: t,
  onClick: r
}) {
  return jsx('div', {
    role: 'button',
    tabIndex: -1,
    className: U()('expand_caret--animation--GOE8s', {
      'expand_caret--expanded--MmsW9': e
    }),
    onClick: r,
    children: jsx(In, {
      icon: 'caret-right-16',
      fill: t
    })
  });
}
function nV({
  isOpen: e,
  toggleIsOpen: t,
  collapseHeader: r,
  content: s
}) {
  return jsxs('div', {
    className: cssBuilderInstance.flex.flexColumn.wFull.$,
    children: [jsxs('div', {
      className: cssBuilderInstance.flex.flexRow.gap4.itemsCenter.wFull.$,
      children: [jsx(nG, {
        isExpanded: e,
        fill: 'secondary',
        onClick: t
      }), r]
    }), jsx('div', {
      'className': cssBuilderInstance.grid.ml20.$,
      'aria-hidden': !e,
      'style': styleBuilderInstance.add({
        transition: 'grid-template-rows 0.3s ease'
      }).$$if(e, styleBuilderInstance.add({
        gridTemplateRows: '1fr'
      }), styleBuilderInstance.add({
        gridTemplateRows: '0fr'
      })).$,
      'children': jsx('div', {
        className: cssBuilderInstance.$$if(!e, cssBuilderInstance.overflowHidden).$,
        children: s
      })
    })]
  });
}
function nq({
  title: e,
  confirmText: t,
  emptyStateText: r,
  onSelectFile: i,
  onSubmit: o,
  files: l,
  tileClassName: d,
  renderFileTile: c,
  query: u,
  setQuery: m,
  gridText: _,
  shouldDisableTile: p
}) {
  let [f, g] = useState(null);
  let h = useCallback(() => {
    f && o(f);
  }, [o, f]);
  let x = useCallback(e => {
    if (e.length > 0) {
      let t = e[0].key;
      i?.(t);
      g(t);
    } else {
      g(null);
    }
  }, [i]);
  return jsx(nX, {
    title: e,
    onSubmit: h,
    confirmText: t,
    isDisabled: !f,
    query: u,
    onSearchChange: m,
    clearSearch: () => m(''),
    searchPlaceholder: getI18nString('file_browser.choose_file_modal.search_for_a_file'),
    children: l.length === 0 ? jsx('div', {
      className: 'x78zum5 x1q0g3np x195vfkc x6s0dn4 xl56j7k x1n0bwc9 x5yr21d xh8yej3 x1iyjqo2 x2b8uid',
      children: r
    }) : jsxs(Fragment, {
      children: [_ && jsx('span', {
        className: 'x1n0bwc9',
        children: _
      }), jsx(_$$g5, {
        canSelectItem: e => !p?.(e),
        containerStyle: nQ.grid,
        doNotFocusOnLoad: !0,
        getAriaLabel: e => e.name,
        handleContextMenu: _$$lQ,
        isDraggable: !1,
        items: l,
        keepSelectionOnFocusLost: !0,
        multiselectDisabled: !0,
        onSelection: x,
        renderTile: c,
        renderTileFooter: () => jsx(Fragment, {}),
        tileClassName: d
      })]
    })
  });
}
function nX({
  title: e,
  confirmText: t,
  onSubmit: r,
  isDisabled: s,
  children: i,
  query: n,
  onSearchChange: o,
  clearSearch: l,
  searchPlaceholder: d
}) {
  return jsxs(Dd, {
    title: e,
    confirmText: t,
    onSubmit: r,
    disabled: s,
    maxWidth: 1024,
    useRedesign: !0,
    fullWidthContent: !0,
    children: [jsx(IW, {
      className: U()(cssBuilderInstance.px16.py8.colorBg.wFull.bb1.bSolid.colorBorder.borderBox.$, 'choose_file_modal--heightOverride--QTue5'),
      hasTransparentBackground: !0,
      placeholder: d,
      focusOnMount: !0,
      query: n,
      onChange: o,
      clearSearch: l,
      iconClassName: cssBuilderInstance.colorIcon.$,
      hideXIcon: !0
    }), jsx(_$$P2, {
      className: 'choose_file_modal--gridMaxHeight--8NKvW',
      innerClassName: cssBuilderInstance.hFull.gap12.flex.flexColumn.pt16.px24.borderBox.$,
      children: i
    })]
  });
}
let nQ = {
  grid: {
    paddingBottom: 'x1l90r2v',
    $$css: !0
  }
};
function n1({
  file: e,
  isDisabled: t,
  orgName: r
}) {
  let s = NN();
  return jsx(_$$i3, {
    thumbnail: jsx(NM, {
      file: e,
      noBorder: !0
    }),
    bottomLeftIcon: jsx(w4, {
      size: 16,
      type: s(e)
    }),
    title: jsxs('div', {
      className: 'x78zum5 x1q0g3np x1jnr06f x1jud9m8 x6s0dn4',
      children: [jsx('span', {
        ..._$$xk(n4.truncate, t && n4.secondaryText),
        children: e.name
      }), t && r && jsx('span', {
        'data-tooltip-type': 'text',
        'data-tooltip': getI18nString('file_browser.pinning.choose_file_to_pin_modal.file_not_workspace_visible.tooltip', {
          orgName: r
        }),
        'data-tooltip-show-immediately': !0,
        'data-tooltip-show-above': !0,
        'data-tooltip-max-width': 500,
        'children': jsx(_$$B2, {
          className: 'xmauxvm'
        })
      })]
    }),
    subtitle: e.project?.name
  });
}
let n4 = {
  truncate: {
    whiteSpace: 'xuxw1ft',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    textOverflow: 'xlyipyv',
    $$css: !0
  },
  secondaryText: {
    color: 'x1n0bwc9',
    $$css: !0
  }
};
let n2 = registerModal(({
  workspaceId: e
}) => {
  let t = useDispatch();
  let r = useCurrentPrivilegedPlan('ChooseFileToPinModal').unwrapOr(null);
  let o = r?.name ?? null;
  let [l, d] = useState('');
  let [c] = useDebounce(l, 400);
  let [u, m] = useState(null);
  let _ = useCallback(e => {
    m(e);
  }, []);
  useSubscription(AddWorkspacePinnedFileView, {
    fileKey: u ?? ''
  }, {
    enabled: !!u
  });
  let f = function ({
    searchQuery: e,
    workspaceId: t
  }) {
    let r = resourceUtils.useTransformShallowEqual(useSubscription(AddWorkspacePinSuggestedFilesView, {}), e => {
      if (!e.currentUser.recentFiles2) return [];
      let t = [];
      for (let {
        file
      } of e.currentUser?.recentFiles2) file && t.push(file);
      return t;
    });
    let a = function ({
      searchQuery: e,
      workspaceId: t
    }) {
      let r = useCurrentUserOrgId();
      assert(!!r, 'currentUserOrgId must be defined in useSearchWorkspaceFilesQuery');
      let a = useSubscription(AddWorkspacePinSearchFilesView, {
        query: e,
        workspaceId: t,
        orgId: r,
        sort: 'relevancy',
        desc: 'true'
      }, {
        enabled: !!e
      });
      return resourceUtils.useTransformShallowEqual(a, e => {
        let t = [];
        for (let r of e.searchWorkspaceFiles) r.file && t.push(r.file);
        return t;
      });
    }({
      searchQuery: e,
      workspaceId: t
    });
    let s = a.status !== 'disabled' ? a : r;
    return z1(s, t);
  }({
    searchQuery: c,
    workspaceId: e
  });
  let g = resourceUtils.useTransformShallowEqual(f, e => e.map(e => e.key));
  let h = H6(g.unwrapOr([]));
  let x = useCallback(e => {
    t(hideSpecificModal(n2));
    t(showModalHandler({
      type: _$$a7(),
      data: {
        fileKey: e,
        source: l ? 'add_file_modal_search' : 'add_file_modal_suggested'
      }
    }));
  }, [t, l]);
  useEffect(() => (t(startSearchSessionAction({
    entryPoint: 'file_browser:file_picker_modal'
  })), t(searchSetParametersAction({
    workspaceFilter: e
  })), () => {
    t(searchSetParametersAction({
      workspaceFilter: null
    }));
    t(searchEndSessionAction());
  }), [t, d, e]);
  let b = useCallback(e => {
    d(e);
  }, []);
  if (h.status !== 'loaded' || f.status !== 'loaded') {
    return jsx(nX, {
      title: getI18nString('file_browser.pinning.pin_modal.pin_file_to_workspace'),
      confirmText: getI18nString('general.next'),
      isDisabled: !0,
      query: l,
      onSearchChange: b,
      clearSearch: _$$lQ,
      searchPlaceholder: getI18nString('file_browser.choose_file_modal.search_for_a_file'),
      children: jsx('div', {
        className: U()(cssBuilderInstance.flex.itemsCenter.justifyCenter.wFull.hFull.flexGrow1.$),
        children: jsx(LoadingOverlay, {})
      })
    });
  }
  let v = e => {
    let t = h.data.get(e.key);
    return !!t && !t?.canPinFileToWorkspace;
  };
  return jsx(nq, {
    confirmText: getI18nString('general.next'),
    emptyStateText: l ? renderI18nText('file_browser.workspace_pinning.no_files_matching_query', {
      searchQuery: jsx('div', {
        className: cssBuilderInstance.colorText.fontMedium.truncate.$,
        children: l
      })
    }) : getI18nString('file_browser.workspace_pinning.no_suggested_files'),
    files: f.data,
    gridText: l ? void 0 : getI18nString('file_browser.pinning.suggested'),
    onSelectFile: _,
    onSubmit: x,
    query: l,
    renderFileTile: (e, t) => jsx(n1, {
      file: e,
      orgName: o,
      isDisabled: v(e)
    }),
    setQuery: b,
    shouldDisableTile: v,
    tileClassName: 'choose_file_to_pin_modal--showOnHoverContainer--DO9-h',
    title: getI18nString('file_browser.pinning.pin_modal.pin_file_to_workspace')
  });
}, 'ChooseFileToPinModal');
let oa = {
  open: !0,
  openNewTab: !0,
  showInFolder: !0,
  copyLink: !0,
  pinToWorkspace: !0
};
function os({
  suggestedFiles: e
}) {
  let t = e.slice(0, 8);
  let r = getSelectedView();
  let n = useDispatch();
  let {
    showing,
    show,
    data
  } = _$$L2();
  let c = useCallback((e, t) => {
    customHistory.redirect(getDesignFileUrlConditional(e));
    trackFileBrowserFileClicked(e.key, {
      selectedViewName: r.view,
      entrypoint: 'suggested_files_empty_state'
    });
    t.stopPropagation();
    t.preventDefault();
  }, [r.view]);
  let m = useCallback((e, t) => {
    c(e, t);
  }, [c]);
  let _ = useCallback((e, t, r) => {
    let a = e[0];
    a && show({
      data: {
        tile: _$$bn(a),
        targetRect: {
          top: t.clientY,
          right: t.clientX,
          bottom: t.clientY,
          left: t.clientX,
          width: 1,
          height: 1
        },
        index: r
      }
    });
  }, [show]);
  return jsxs(Fragment, {
    children: [jsx('div', {
      className: 'x1n0bwc9 xlyipyv xuxw1ft xb3r6kr',
      children: getI18nString('file_browser.pinning.suggested')
    }), jsx(_$$A10, {
      items: t,
      multiselectDisabled: !0,
      isDraggable: !1,
      handleOpenItem: m,
      onSelection: e => {
        n(_$$an());
        n(PW({
          type: _$$F2.FILES,
          keys: e.map(e => e.key)
        }));
      },
      handleContextMenu: _,
      gridViewProps: {
        containerStyle: on.grid,
        renderTile: e => jsx('div', {
          className: 'x1dmp6jm xkib98w xbyyjgo x12oqio5 xgk9eko xb3r6kr',
          children: jsx(NM, {
            file: e,
            noBorder: !0,
            size: _$$y2.SMALL
          })
        }),
        tileBorderRadius: 8,
        tileBorderStyle: 'dashed',
        tileFooterPosition: 'right',
        renderTileFooter: (e, {
          isSelected: t,
          isHovered: r
        }) => jsx(oi, {
          file: e,
          isHovered: r,
          isSelected: t
        })
      },
      viewType: ViewMode.GRID
    }), showing && data?.tile ? jsx(_$$i4, {
      tileActions: oa,
      openTile: e => c(data.tile.file, e),
      tile: data.tile,
      selectedTiles: [data.tile],
      dropdownVisible: showing
    }) : null]
  });
}
function oi({
  file: e,
  isHovered: t,
  isSelected: r
}) {
  let n = useDispatch();
  let o = useCallback(t => {
    n(showModalHandler({
      type: _$$a7(),
      data: {
        fileKey: e.key,
        source: 'suggested_files_empty_state'
      }
    }));
    t.stopPropagation();
    t.preventDefault();
  }, [n, e]);
  let l = e.project?.name;
  return jsxs('div', {
    className: 'x78zum5 xdt5ytf x195vfkc x1iyjqo2 xl56j7k xb3r6kr xq1n1xh',
    children: [jsx('div', {
      ..._$$xk(on.fileName),
      children: e.name
    }), t || r || BrowserInfo.mobile || BrowserInfo.tablet ? jsx('div', {
      role: 'button',
      tabIndex: 0,
      className: 'x1quhyk7 xlyipyv xuxw1ft xb3r6kr x1ypdohk',
      onClick: o,
      children: getI18nString('file_browser.pinning.pin_file')
    }) : l ? jsx('div', {
      className: 'x1n0bwc9 xlyipyv xuxw1ft xb3r6kr',
      children: l
    }) : null]
  });
}
let on = {
  fileName: {
    ..._$$g3.textBodyMedium,
    textOverflow: 'xlyipyv',
    whiteSpace: 'xuxw1ft',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    $$css: !0
  },
  grid: {
    gridTemplateColumns: 'xem2tbl',
    gap: 'xou54vl',
    rowGap: null,
    columnGap: null,
    $$css: !0
  }
};
function oo({
  workspaceId: e
}) {
  let t;
  let r = function (e) {
    let t = resourceUtils.useTransform(useSubscription(WorkspaceSuggestedPinsView, {}), e => {
      if (!e.currentUser.recentFiles2) return [];
      let t = [];
      for (let {
        file
      } of e.currentUser?.recentFiles2) file && t.push(file);
      return t;
    });
    return z1(t, e);
  }(e);
  t = r.status !== 'loaded' ? jsx('div', {
    className: cssBuilderInstance.py1.h20.wFull.$,
    children: jsx(LoadingOverlay, {})
  }) : r.data.length > 0 ? jsx(os, {
    suggestedFiles: r.data
  }) : jsx('span', {
    className: cssBuilderInstance.colorTextSecondary.truncate.textBodyLarge.alignCenter.$,
    children: getI18nString('file_browser.pinning.no_pinned_files')
  });
  return jsx('div', {
    className: cssBuilderInstance.bRadius8.colorBgSecondary.px32.py24.flex.flexColumn.gap16.mt8.$,
    children: t
  });
}
let ou = oc;
function ob({
  pinnedFile: e
}) {
  let t = _$$bn(e.file);
  let r = _$$l2(e.file.folderId);
  let s = _$$C2(t);
  return jsxs('div', {
    className: cssBuilderInstance.bRadius8.borderBox.p16.flex.flexColumn.gap16.colorBg.colorText.b1.bSolid.colorBorder.elevation300.flexGrow1.$,
    style: styleBuilderInstance.add({
      width: '422px',
      overflowY: 'auto',
      overflowX: 'hidden'
    }).$,
    children: [jsxs('div', {
      className: cssBuilderInstance.flex.flexRow.gap16.$,
      children: [jsx('div', {
        className: cssBuilderInstance.flexBasisAuto.$,
        children: jsx(_$$e10, {
          entity: {
            id: e.creator.id,
            img_url: e.creator.imgUrl,
            name: e.creator?.name ?? void 0,
            handle: e.creator?.handle
          }
        })
      }), jsxs('div', {
        className: cssBuilderInstance.flex.flexColumn.overflowHidden.$,
        children: [jsxs('div', {
          className: cssBuilderInstance.flex.flexRow.gap8.textBodyLarge.$,
          children: [jsx(TextWithTruncation, {
            fontWeight: 'semi-bold',
            truncate: !0,
            children: e.creator.name
          }), jsx('span', {
            className: cssBuilderInstance.flexBasisAuto.flexGrow1.flexShrink0.$,
            children: jsx(TextWithTruncation, {
              color: 'secondary',
              children: jsx(_$$h6, {
                date: e.createdAt
              })
            })
          })]
        }), jsx('div', {
          className: cssBuilderInstance.textBodyLarge.overflowBreakWord.$,
          dangerouslySetInnerHTML: {
            __html: sanitizeHtml(_$$sP(e.description))
          }
        })]
      })]
    }), jsx('div', {
      className: cssBuilderInstance.flex.flexColumn.$,
      children: jsxs('div', {
        className: cssBuilderInstance.bRadius8.b1.colorBorder.bSolid.wFull.overflowHidden.$,
        children: [jsx('div', {
          children: jsx(_$$e1, {
            tile: t,
            noBorder: !0
          })
        }), jsx('div', {
          className: cssBuilderInstance.flex.flexRow.gap8.itemsCenter.bt1.bSolid.colorBorder.p16.$,
          children: jsxs('div', {
            className: 'x78zum5 x1q0g3np x1v2ro7d x6s0dn4',
            children: [jsx(w4, {
              size: 16,
              type: s
            }), jsxs('div', {
              className: cssBuilderInstance.flex.flexColumn.gap2.flexGrow1.justifyCenter.overflowHidden.cursorDefault.$,
              children: [jsx('div', {
                ..._$$Ay2.props(ow.title),
                children: e.file.name
              }), r.status === 'loaded' && r.data ? jsx('div', {
                ..._$$Ay2.props(ow.subtitle),
                children: r.data
              }) : null]
            })]
          })
        })]
      })
    })]
  });
}
let ov = {
  width: 0,
  height: 0
};
function oy({
  pinnedFile: e,
  targetRef: t,
  shouldHide: r
}) {
  let i = _$$s4(t);
  let [n, o] = _$$M();
  let [l, d] = useState(ov);
  let [c, u] = useState(!1);
  let m = useCallback(() => {
    if (!t.current) return;
    let e = createRect(t.current.getBoundingClientRect());
    let r = window.innerWidth;
    let a = window.innerHeight;
    let s = a - e.top - 8;
    let i = s > 100;
    if (r - e.right > 438 && i) {
      d({
        transform: `translate(${e.right + 8}px, ${e.top}px)`,
        maxHeight: s
      });
      return;
    }
    if (e.left > 438 && i) {
      d({
        transform: `translate(${e.left - 430}px, ${e.top}px)`,
        maxHeight: s
      });
      return;
    }
    let n = 430 - (r - e.left);
    let o = a - e.bottom - 16;
    if (o > 100) {
      d({
        transform: `translate(${clamp(e.left - n, 0, e.left)}px, ${e.bottom + 8}px)`,
        maxHeight: o
      });
      return;
    }
    let l = e.top - 16;
    d({
      top: 'auto',
      bottom: '100vh',
      transform: `translate(${clamp(e.left - n, 0, e.left)}px, ${e.top - 8}px)`,
      maxHeight: l
    });
  }, [t, d]);
  let p = !r && (i || o);
  let f = useLatestRef(p);
  if (useEffect(() => {
    if (!f && p) {
      m();
    } else if (f && !p) {
      u(!0);
      let e = setTimeout(() => {
        u(!1);
      }, parseMsNumber('150ms'));
      return () => {
        clearTimeout(e);
      };
    }
  }, [p, f, m]), useEffect(() => {
    let e = ou()(m);
    let t = () => {
      p && e();
    };
    document.addEventListener('scroll', t, !0);
    return () => {
      document.removeEventListener('scroll', t, !0);
    };
  }, [p, m]), !t.current) {
    return null;
  }
  let g = jsx('div', {
    className: 'pinned_files_hover--hoverCardOverflowWrapper--VaAZM',
    children: jsx('div', {
      className: U()('pinned_files_hover--hoverCard--MLJbb', p && 'pinned_files_hover--makeVisible--QrDF7'),
      style: l,
      ref: n,
      role: 'tooltip',
      onContextMenu: e => {
        e.preventDefault();
        e.stopPropagation();
      },
      children: (p || c) && jsx(ob, {
        pinnedFile: e
      })
    })
  });
  return createPortal(g, document.body);
}
let ow = {
  title: {
    ..._$$g3.textBodyMediumStrong,
    $$css: !0
  },
  subtitle: {
    ..._$$g3.textBodyMedium,
    $$css: !0
  }
};
let oj = {
  open: !0,
  openNewTab: !0,
  showInFolder: !0,
  copyLink: !0,
  share: !0,
  duplicateToDrafts: !0,
  pinToWorkspace: !0,
  publishOrgTemplate: !0,
  favoriteFile: !0,
  unfavoriteFile: !0
};
let oT = [];
function oE({
  workspace: e
}) {
  let t = useDispatch();
  let r = getSelectedView();
  let n = getUserId();
  let {
    showing,
    show,
    data
  } = _$$L2();
  let c = _$$v4();
  let u = useCallback((t, a, s, i) => {
    c(t, s);
    trackFileBrowserFileClick(FILE_BROWSER_FILE_CLICKED, a.file, {
      entrypoint: i,
      selectedView: r.view,
      resourceType: 'workspace',
      resourceId: e.id,
      pinDescription: flattenMessageMeta(a.description)
    });
  }, [c, r.view, e.id]);
  let m = useCallback((e, t) => {
    u(_$$bn(e.file), e, t, 'pinned files');
  }, [u]);
  let _ = e.pinnedFiles ?? oT;
  let p = useCallback(r => {
    let a = r[0];
    a && (e.canAdmin || a.creator?.id === n) && t(showModalHandler({
      type: _$$I3(),
      data: {
        pinnedFileId: a.id
      }
    }));
  }, [e.canAdmin, n, t]);
  let f = useMemo(() => _.filter(({
    file: e
  }) => !!e).map(e => _$$bn(e.file)), [_]);
  let g = _$$nw(f);
  let h = useMemo(() => _.sort((e, t) => e.createdAt > t.createdAt ? 1 : -1), [_]);
  return jsxs(Fragment, {
    children: [_.length > 0 ? jsx(_$$A10, {
      doNotFocusOnLoad: !0,
      getAriaLabel: e => e.file.name,
      gridViewProps: {
        containerStyle: oC.grid,
        renderTile: e => jsx(oI, {
          pinnedFile: e,
          isDropdownOpen: showing
        }),
        renderTileFooter: e => jsx(oN, {
          pinnedFile: e
        }),
        renderTileDragImage: e => jsx(NM, {
          file: e.file,
          noBorder: !0
        })
      },
      handleContextMenu: (e, r, a) => {
        t(_$$an());
        let s = e.map(e => e.file).filter(e => e !== null);
        t(PW({
          type: _$$F2.FILES,
          keys: s.map(e => e.key)
        }));
        let i = s[0];
        i && show({
          data: {
            tile: _$$bn(i),
            targetRect: {
              top: r.clientY,
              right: r.clientX,
              bottom: r.clientY,
              left: r.clientX,
              width: 1,
              height: 1
            },
            index: a
          }
        });
      },
      handleDeleteKey: p,
      handleDragDataTransfer: (e, t) => {
        t.setFigFilesData(e.map(e => fileEntityDataMapper.toSinatra(e.file)));
      },
      handleOpenItem: m,
      isDraggable: !0,
      items: h,
      viewType: ViewMode.GRID
    }) : jsx(oo, {
      workspaceId: e.id
    }), (() => {
      let e = data?.tile ?? null;
      let t = data?.index ?? 0;
      return jsx(_$$i4, {
        tile: e,
        selectedTiles: g,
        tileActions: oj,
        openTile: r => {
          e && u(e, _[t], r, 'pinned files: context menu');
        },
        dropdownVisible: showing
      });
    })()]
  });
}
function oI({
  pinnedFile: e,
  isDropdownOpen: t
}) {
  let r = useRef(null);
  let i = _$$bn(e.file);
  return jsxs(Fragment, {
    children: [jsx(oy, {
      pinnedFile: e,
      targetRef: r,
      shouldHide: t
    }), jsx('div', {
      ref: r,
      children: jsx(_$$e1, {
        tile: i,
        noBorder: !0,
        size: _$$y2.SMALL
      })
    })]
  });
}
function oN({
  pinnedFile: e
}) {
  return jsxs('div', {
    className: 'x1y1aw1k x78zum5 xdt5ytf',
    children: [jsx('span', {
      ..._$$xk(oC.fileName),
      children: e.file.name
    }), jsx(TextWithTruncation, {
      truncate: !0,
      showTooltipWhenTruncated: !0,
      color: 'secondary',
      children: getI18nString('tile.file_tile.pinned_by_user', {
        name: e.creator?.name ?? ''
      })
    })]
  });
}
let oC = {
  fileName: {
    ..._$$g3.textBodyLargeStrong,
    textOverflow: 'xlyipyv',
    whiteSpace: 'xuxw1ft',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    $$css: !0
  },
  grid: {
    paddingTop: 'xyamay9',
    gridTemplateColumns: 'x1g5i94c',
    userSelect: 'x87ps6o',
    $$css: !0
  }
};
let oS = createRemovableAtomFamily(e => createValidatedLocalStorageAtom(`file_browser.workspace.pinned_section_open.${e}`, !0, _$$z7.boolean()));
function ok({
  workspace: e,
  isAssignedWorkspace: t
}) {
  let [r, n] = useAtomValueAndSetter(oS(e.id));
  let o = useCallback(() => n(e => !e), [n]);
  let l = useDispatch();
  let d = e.pinnedFiles?.length ?? 0;
  let c = t || e.canAdmin;
  let u = d >= D1;
  let m = c || d > 0;
  let _ = useCallback(() => {
    l(showModalHandler({
      type: n2,
      data: {
        workspaceId: e.id
      }
    }));
  }, [l, e.id]);
  return jsx(Fragment, {
    children: m && jsx(nV, {
      isOpen: r,
      toggleIsOpen: o,
      collapseHeader: jsxs('div', {
        className: cssBuilderInstance.flex.justifyBetween.itemsCenter.wFull.$,
        children: [jsx('div', {
          'aria-expanded': r,
          'role': 'button',
          'tabIndex': 0,
          'className': cssBuilderInstance.flex.flexRow.gap4.itemsCenter.textBodyLargeStrong.cursorDefault.$,
          'onClick': o,
          'children': getI18nString('file_browser.pinning.pinned_files')
        }), c && jsx(Button, {
          variant: 'link',
          onClick: _,
          disabled: u,
          htmlAttributes: {
            'data-tooltip': u ? getI18nString('file_browser.pinning.max_files.add_button_tooltip', {
              maxPins: D1
            }) : void 0,
            'data-tooltip-type': KindEnum.TEXT,
            'data-tooltip-show-above': !0
          },
          children: getI18nString('file_browser.pinning.add_file')
        })]
      }),
      content: jsx(oE, {
        workspace: e
      })
    })
  });
}
function oR({
  workspaceId: e
}) {
  let t = useCurrentUserOrg();
  let r = useSubscription(WorkspacePageView, {
    orgId: t.id,
    workspaceId: e
  });
  let i = useSubscription(WorkspacePageMembersView, {
    workspaceId: e
  }).transform(e => e.workspace?.members ?? null);
  let n = function (e) {
    let t = !!getFeatureFlags().fb_paginated_workspace_teams_shadow_reads;
    let [r] = setupResourceAtomHandler(FileBrowserWorkspacePageTeamsView(t ? {
      workspaceId: e,
      firstPageSize: 50
    } : null));
    let a = r.transform(e => function (e) {
      let t = [];
      for (let r of e) {
        if (r.team) {
          let e = _$$w4.toSinatra(r.team);
          t.push({
            ...e,
            pro_team: !1,
            org_team: !0,
            member_count: r.memberCount,
            experiment_assignments: [],
            license_group: null,
            last_upgraded_at: null,
            student_autoverifying_team_at: null,
            sanctioned_at: null,
            subscription_raw: null,
            license_group_id: null,
            legal_name: null
          });
        }
      }
      return t;
    }(e.workspace?.activeTeams ?? []));
    let i = iB({
      workspaceId: e,
      onlyJoinedTeams: !1
    });
    let n = useRef(i.status !== 'loaded' && r.status !== 'loaded');
    useShadowReadLoaded({
      enableShadowRead: t,
      label: adminPermissionConfig.WorkspacePageView.teams,
      oldValue: i,
      newValue: a,
      trackLatency: n.current,
      contextArgs: {
        workspaceId: e,
        numTeams: i.transform(e => e.length).unwrapOr(null)
      },
      comparator: i2
    });
    return i;
  }(e);
  if (r.status === 'loading') return jsx(LoadingOverlay, {});
  if (r.status !== 'loaded') {
    return jsx(_$$S4, {
      resourceType: EntityType.WORKSPACE
    });
  }
  let l = r.data.workspace;
  if (!l || !l.canView) {
    return jsx(_$$S4, {
      resourceType: EntityType.WORKSPACE
    });
  }
  let d = _$$eO(r.data.currentUser) === l.id;
  return jsx(oA, {
    org: t,
    workspace: l,
    workspaceMembersQuery: i,
    workspaceOrgTeamsQuery: n,
    isAssignedWorkspace: d
  });
}
function oA({
  org: e,
  workspace: t,
  workspaceMembersQuery: r,
  workspaceOrgTeamsQuery: s,
  isAssignedWorkspace: i
}) {
  setEditorDocumentTitle(t.name);
  let n = {
    ...t,
    members: r.data ?? []
  };
  let o = r.transform(e => !!e && e.length > 0);
  let l = t.admins.length > 0;
  let d = o.transform(e => e || l).unwrapOr(!0);
  kF('Workspace');
  WX({
    markName: 'MainBodyContent',
    isLoaded: s.status === 'loaded',
    contextArgs: {
      numTeams: s.transform(e => e.length).unwrapOr(null)
    }
  });
  return jsx(_$$r4, {
    header: jsx(nB, {
      workspace: n,
      org: e,
      isWorkspaceMembersLoading: r.status === 'loading',
      showMembersButton: d
    }),
    content: jsxs('div', {
      className: cssBuilderInstance.flex.flexColumn.gap24.my24.$,
      children: [jsx('section', {
        'aria-label': getI18nString('file_browser.pinning.pinned_files'),
        'className': cssBuilderInstance.pl12.pr32.borderBox.wFull.$,
        'children': jsx(ok, {
          workspace: t,
          isAssignedWorkspace: i
        })
      }), jsx(iU, {
        children: jsx(iD, {
          orgTeamsQuery: s,
          workspaceId: t.id
        })
      })]
    }),
    metaContent: o.unwrapOr(!1) ? jsx(nU, {
      workspace: n
    }) : void 0
  });
}
function oq({
  tab: e
}) {
  return jsxs('div', {
    children: [jsx('h1', {
      ..._$$xk(oX.headerText),
      children: getI18nString('community.resource_hub.browse_resources')
    }), jsx('div', {
      ..._$$xk(oX.subHeaderText),
      children: e === PublishSourceType.INTERNAL ? getI18nString('community.resource_hub.browse_resources_internal_subheader') : getI18nString('community.resource_hub.browse_resources_community_subheader')
    })]
  });
}
let oX = {
  headerText: {
    ..._$$g3.textHeadingMedium,
    paddingTop: 'xz9dl7a',
    $$css: !0
  },
  subHeaderText: {
    ..._$$g3.textBodyMedium,
    paddingTop: 'x1y1aw1k',
    color: 'x1n0bwc9',
    $$css: !0
  }
};
let o5 = new Set([TemplateCategory.uiKits, TemplateCategory.wireframes, TemplateCategory.designTemplates, TemplateCategory.mobileApps, TemplateCategory.portfolios, TemplateCategory.resumes, TemplateCategory.visualAssets, TemplateCategory.illustrations, TemplateCategory.icons, TemplateCategory.shapesColors]);
let o8 = new Set([TemplateCategory.brainstorming, TemplateCategory.diagramming, TemplateCategory.funGames, TemplateCategory.teamMeetings, TemplateCategory.whiteboarding, TemplateCategory.strategicPlanning]);
let o6 = new Set([TemplateCategory.editingEffects, TemplateCategory.fileOrganization, TemplateCategory.development, TemplateCategory.whiteboarding, TemplateCategory.designTools, TemplateCategory.importExport, TemplateCategory.accessibility, TemplateCategory.prototypingAnimation]);
let o3 = new Set([TemplateCategory.presentations]);
let o7 = new Set([TemplateCategory.desktopAppsWebsites]);
let o9 = {
  DESIGN_RESOURCES: 'designResources',
  PLUGINS_AND_WIDGETS: 'pluginsAndWidgets',
  WHITEBOARDING: 'whiteboarding',
  PRESENTATIONS: 'presentations',
  WEBSITES: 'websites'
};
function le(e) {
  let t = useResourceRouteParams();
  let r = useResourceFuid();
  return useMemo(() => Object.fromEntries(e.map(({
    key: e,
    category: a,
    resource_type: s,
    editor_type: i,
    tag: n
  }) => [e, new ResourceHubCategoryRoute({
    ...t,
    categorySlug: a,
    tagSlug: n
  }, {
    resource_type: s ?? ResourceTypes.BrowseResourceTypes.FILES,
    editor_type: i ?? void 0,
    ...r
  })])), [e, t, r]);
}
var lt = (e => (e.marketing = 'marketing', e.product = 'product', e.pitchDeck = 'pitch-deck', e.sales = 'sales', e.landingPages = 'landing-pages', e.portfolio = 'portfolio', e.ecommerce = 'ecommerce', e.blog = 'blog', e.wedding = 'wedding', e.photography = 'photography', e))(lt || {});
function lr(e, t, r) {
  let a = t ? {
    'marketing': getI18nString('community.resource_hub.categories.marketing_presentations'),
    'product': getI18nString('community.resource_hub.categories.product_presentations'),
    'pitch-deck': getI18nString('community.resource_hub.categories.pitch_decks'),
    'sales': getI18nString('community.resource_hub.categories.sales_presentations'),
    'landing-pages': getI18nString('community.resource_hub.categories.landing_pages'),
    'portfolio': getI18nString('community.resource_hub.categories.portfolio'),
    'ecommerce': getI18nString('community.resource_hub.categories.ecommerce'),
    'blog': getI18nString('community.resource_hub.categories.blog'),
    'wedding': getI18nString('community.resource_hub.categories.wedding'),
    'photography': getI18nString('community.resource_hub.categories.photography')
  }[t] : void 0;
  if (a) return a;
  let s = WG(e);
  let i = r ? function (e, t) {
    let r = {
      [TemplateCategory.whiteboarding]: {
        [ResourceTypes.BrowseResourceTypes.WIDGETS]: getI18nString('categories.widgets')
      },
      [TemplateCategory.designTools]: {
        [ResourceTypes.BrowseResourceTypes.PLUGINS]: getI18nString('community.view_bar.plugins')
      }
    };
    return r[e]?.[t];
  }(s, r) : void 0;
  return i || {
    [TemplateCategory.mobileApps]: getI18nString('community.resource_hub.categories.mobile_app_templates'),
    [TemplateCategory.desktopAppsWebsites]: getI18nString('community.resource_hub.categories.websites'),
    [TemplateCategory.make]: getI18nString('community.view_bar.figmake')
  }[s] || _$$xF(e);
}
let li = 'category_menu_button--buttonText--0inUk';
function ln({
  defaultText: e,
  iconPrefix: t,
  categorySlug: r,
  tagSlug: s,
  resourceType: i,
  getTriggerProps: n,
  isSelected: o
}) {
  let l = r ? lr(r, s, i) : void 0;
  return jsx(ButtonPrimitive, {
    'aria-pressed': o,
    'className': U()(_$$x4, Mg, o && _$$wH),
    ...n(),
    'children': jsxs('span', {
      className: IO,
      children: [t, jsx('span', {
        className: li,
        children: l || e
      }), jsx(_$$r6, {})]
    })
  });
}
function lo({
  parentDropdown: e,
  defaultText: t,
  iconPrefix: r,
  menuItemsByGroup: s
}) {
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  let o = useRouteParams(ResourceHubCategoryRoute);
  let l = o?.categorySlug;
  let d = o?.tagSlug;
  let c = useRouteQuery(ResourceHubCategoryRoute);
  let m = c?.resource_type;
  let _ = l && function (e, t) {
    if (!e) return null;
    let r = WG(e);
    return e === TemplateCategory.whiteboarding ? t === ResourceTypes.BrowseResourceTypes.WIDGETS ? o9.PLUGINS_AND_WIDGETS : o9.WHITEBOARDING : o8.has(r) ? o9.WHITEBOARDING : o6.has(r) ? o9.PLUGINS_AND_WIDGETS : o5.has(r) ? o9.DESIGN_RESOURCES : o3.has(r) ? o9.PRESENTATIONS : o7.has(r) ? o9.WEBSITES : null;
  }(l, m) === e;
  return jsxs(MenuRootComp, {
    manager,
    children: [jsx(ln, {
      defaultText: t,
      iconPrefix: r,
      categorySlug: _ ? l : void 0,
      tagSlug: d,
      resourceType: m,
      getTriggerProps,
      isSelected: manager.isOpen
    }), jsx(MenuContainerComp, {
      children: s.map((e, t) => jsx(MenuGroupComp, {
        children: e.map((e, t) => jsx(MenuItemComp, {
          onClick: () => {
            _$$pt(e?.href ?? '');
            customHistory.push(e?.href ?? '');
          },
          children: jsx('div', {
            style: {
              minWidth: 132
            },
            children: e.text
          })
        }, t))
      }, t))
    })]
  });
}
function ll() {
  let e = le([{
    key: 'uikitRoute',
    category: TemplateCategory.uiKits
  }, {
    key: 'wireframesRoute',
    category: TemplateCategory.wireframes
  }, {
    key: 'socialMediaTemplatesRoute',
    category: TemplateCategory.socialMediaTemplates,
    editor_type: _$$k4.Editors.COOPER
  }, {
    key: 'cardTemplatesRoute',
    category: TemplateCategory.cardTemplates,
    editor_type: _$$k4.Editors.COOPER
  }, {
    key: 'designTemplatesRoute',
    category: TemplateCategory.designTemplates
  }, {
    key: 'mobileAppRoute',
    category: TemplateCategory.mobileApps
  }, {
    key: 'portfolioRoute',
    category: TemplateCategory.portfolios
  }, {
    key: 'resumeRoute',
    category: TemplateCategory.resumes
  }, {
    key: 'visualAssetsRoute',
    category: TemplateCategory.visualAssets
  }, {
    key: 'illustrationsRoute',
    category: TemplateCategory.illustrations
  }, {
    key: 'iconsRoute',
    category: TemplateCategory.icons
  }, {
    key: 'shapesColorsRoute',
    category: TemplateCategory.shapesColors
  }]);
  let t = [[{
    href: e.uikitRoute?.href,
    text: getI18nString('categories.ui_kits')
  }, {
    href: e.wireframesRoute?.href,
    text: getI18nString('categories.wireframes')
  }], [{
    href: e.socialMediaTemplatesRoute?.href,
    text: getI18nString('categories.social_media_templates')
  }, {
    href: e.cardTemplatesRoute?.href,
    text: getI18nString('categories.cards_and_invites')
  }], [{
    href: e.mobileAppRoute?.href,
    text: getI18nString('community.resource_hub.categories.mobile_app_templates')
  }, {
    href: e.resumeRoute?.href,
    text: getI18nString('categories.resume_templates')
  }, {
    href: e.portfolioRoute?.href,
    text: getI18nString('categories.portfolio_templates')
  }, {
    href: e.designTemplatesRoute?.href,
    text: getI18nString('community.resource_hub.see_more')
  }], [{
    href: e.iconsRoute?.href,
    text: getI18nString('categories.icons')
  }, {
    href: e.illustrationsRoute?.href,
    text: getI18nString('categories.illustrations')
  }, {
    href: e.shapesColorsRoute?.href,
    text: getI18nString('categories.shapes_colors')
  }, {
    href: e.visualAssetsRoute?.href,
    text: getI18nString('community.resource_hub.see_more')
  }]].filter(e => e.length > 0);
  return jsx(lo, {
    parentDropdown: o9.DESIGN_RESOURCES,
    menuItemsByGroup: t,
    defaultText: getI18nString('community.homepage.figma_section.header'),
    iconPrefix: jsx(_$$n3, {})
  });
}
function lc() {
  let e = le([{
    key: 'editingEffectsRoute',
    category: TemplateCategory.editingEffects,
    resource_type: ResourceTypes.BrowseResourceTypes.PLUGINS
  }, {
    key: 'fileOrganizationRoute',
    category: TemplateCategory.fileOrganization,
    resource_type: ResourceTypes.BrowseResourceTypes.PLUGINS
  }, {
    key: 'developmentRoute',
    category: TemplateCategory.development,
    resource_type: ResourceTypes.BrowseResourceTypes.PLUGINS
  }, {
    key: 'widgetsRoute',
    category: TemplateCategory.whiteboarding,
    resource_type: ResourceTypes.BrowseResourceTypes.WIDGETS
  }, {
    key: 'pluginsRoute',
    category: TemplateCategory.designTools,
    resource_type: ResourceTypes.BrowseResourceTypes.PLUGINS
  }, {
    key: 'importExportRoute',
    category: TemplateCategory.importExport,
    resource_type: ResourceTypes.BrowseResourceTypes.PLUGINS
  }, {
    key: 'accessibilityRoute',
    category: TemplateCategory.accessibility,
    resource_type: ResourceTypes.BrowseResourceTypes.PLUGINS
  }, {
    key: 'prototypingAnimationRoute',
    category: TemplateCategory.prototypingAnimation,
    resource_type: ResourceTypes.BrowseResourceTypes.PLUGINS
  }]);
  let t = [[{
    href: e.fileOrganizationRoute?.href,
    text: getI18nString('categories.file_organization')
  }, {
    href: e.developmentRoute?.href,
    text: getI18nString('categories.navbar.development')
  }, {
    href: e.editingEffectsRoute?.href,
    text: getI18nString('categories.editing_effects')
  }, {
    href: e.importExportRoute?.href,
    text: getI18nString('categories.import_export')
  }, {
    href: e.accessibilityRoute?.href,
    text: getI18nString('categories.accessibility_tools')
  }, {
    href: e.prototypingAnimationRoute?.href,
    text: getI18nString('categories.prototyping_animation')
  }], [{
    href: e.widgetsRoute?.href,
    text: getI18nString('community.resource_hub.categories.see_all_widgets')
  }, {
    href: e.pluginsRoute?.href,
    text: getI18nString('community.resource_hub.categories.see_all_plugins')
  }]];
  return jsx(lo, {
    parentDropdown: o9.PLUGINS_AND_WIDGETS,
    defaultText: getI18nString('community.resource_hub.categories.plugins_and_widgets'),
    iconPrefix: jsx(_$$u5, {}),
    menuItemsByGroup: t
  });
}
function lm() {
  let e = le([{
    key: 'marketingRoute',
    category: TemplateCategory.presentations,
    tag: lt.marketing,
    editor_type: _$$k4.Editors.SLIDES
  }, {
    key: 'productRoute',
    category: TemplateCategory.presentations,
    tag: lt.product,
    editor_type: _$$k4.Editors.SLIDES
  }, {
    key: 'pitchDecksRoute',
    category: TemplateCategory.presentations,
    tag: lt.pitchDeck,
    editor_type: _$$k4.Editors.SLIDES
  }, {
    key: 'salesRoute',
    category: TemplateCategory.presentations,
    tag: lt.sales,
    editor_type: _$$k4.Editors.SLIDES
  }, {
    key: 'presentationsRoute',
    category: TemplateCategory.presentations,
    editor_type: _$$k4.Editors.SLIDES
  }]);
  let t = [[{
    href: e.marketingRoute?.href,
    text: getI18nString('community.resource_hub.categories.marketing_presentations')
  }, {
    href: e.productRoute?.href,
    text: getI18nString('community.resource_hub.categories.product_presentations')
  }, {
    href: e.pitchDecksRoute?.href,
    text: getI18nString('community.resource_hub.categories.pitch_decks')
  }, {
    href: e.salesRoute?.href,
    text: getI18nString('community.resource_hub.categories.sales_presentations')
  }], [{
    href: e.presentationsRoute?.href,
    text: getI18nString('community.resource_hub.see_more')
  }]];
  return jsx(lo, {
    parentDropdown: o9.PRESENTATIONS,
    menuItemsByGroup: t,
    defaultText: getI18nString('categories.presentations'),
    iconPrefix: jsx(_$$l3, {})
  });
}
function l_() {
  let e = le([{
    key: 'websitesRoute',
    category: TemplateCategory.desktopAppsWebsites,
    editor_type: _$$k4.Editors.SITES
  }, {
    key: 'landingPagesRoute',
    category: TemplateCategory.desktopAppsWebsites,
    tag: lt.landingPages,
    editor_type: _$$k4.Editors.SITES
  }, {
    key: 'portfolioRoute',
    category: TemplateCategory.desktopAppsWebsites,
    tag: lt.portfolio,
    editor_type: _$$k4.Editors.SITES
  }, {
    key: 'ecommerceRoute',
    category: TemplateCategory.desktopAppsWebsites,
    tag: lt.ecommerce,
    editor_type: _$$k4.Editors.SITES
  }, {
    key: 'blogRoute',
    category: TemplateCategory.desktopAppsWebsites,
    tag: lt.blog,
    editor_type: _$$k4.Editors.SITES
  }, {
    key: 'weddingRoute',
    category: TemplateCategory.desktopAppsWebsites,
    tag: lt.wedding,
    editor_type: _$$k4.Editors.SITES
  }, {
    key: 'photographyRoute',
    category: TemplateCategory.desktopAppsWebsites,
    tag: lt.photography,
    editor_type: _$$k4.Editors.SITES
  }]);
  let t = [[{
    href: e.landingPagesRoute?.href,
    text: getI18nString('community.resource_hub.categories.landing_pages')
  }, {
    href: e.portfolioRoute?.href,
    text: getI18nString('community.resource_hub.categories.portfolio')
  }, {
    href: e.ecommerceRoute?.href,
    text: getI18nString('community.resource_hub.categories.ecommerce')
  }, {
    href: e.blogRoute?.href,
    text: getI18nString('community.resource_hub.categories.blog')
  }, {
    href: e.weddingRoute?.href,
    text: getI18nString('community.resource_hub.categories.wedding')
  }, {
    href: e.photographyRoute?.href,
    text: getI18nString('community.resource_hub.categories.photography')
  }], [{
    href: e.websitesRoute?.href,
    text: getI18nString('community.resource_hub.see_more')
  }]];
  return jsx(lo, {
    parentDropdown: o9.WEBSITES,
    menuItemsByGroup: t,
    defaultText: getI18nString('community.resource_hub.categories.websites'),
    iconPrefix: jsx(_$$J3, {})
  });
}
function lf() {
  let e = le([{
    key: 'brainstormingRoute',
    category: TemplateCategory.brainstorming
  }, {
    key: 'diagrammingRoute',
    category: TemplateCategory.diagramming
  }, {
    key: 'funGamesRoute',
    category: TemplateCategory.funGames
  }, {
    key: 'teamMeetingsRoute',
    category: TemplateCategory.teamMeetings
  }, {
    key: 'whiteboardingRoute',
    category: TemplateCategory.whiteboarding
  }, {
    key: 'strategicPlanningRoute',
    category: TemplateCategory.strategicPlanning
  }]);
  let t = [[{
    href: e.diagrammingRoute?.href,
    text: getI18nString('categories.diagramming')
  }, {
    href: e.brainstormingRoute?.href,
    text: getI18nString('categories.brainstorming')
  }, {
    href: e.funGamesRoute?.href,
    text: getI18nString('categories.fun_games')
  }, {
    href: e.teamMeetingsRoute?.href,
    text: getI18nString('categories.team_meetings')
  }, {
    href: e.strategicPlanningRoute?.href,
    text: getI18nString('categories.strategic_planning')
  }], [{
    href: e.whiteboardingRoute?.href,
    text: getI18nString('community.resource_hub.see_more')
  }]];
  return jsx(lo, {
    parentDropdown: o9.WHITEBOARDING,
    menuItemsByGroup: t,
    defaultText: getI18nString('categories.whiteboarding'),
    iconPrefix: jsx(_$$D3, {})
  });
}
function lg() {
  let e = getI18nString('community.view_bar.figmake');
  let t = le([{
    key: 'categoryRoute',
    category: TemplateCategory.make
  }]).categoryRoute;
  return t ? jsx(ButtonPrimitive, {
    'aria-label': e,
    'className': U()(_$$x4, Mg, _$$pU),
    'onClick': () => {
      customHistory.push(t.href);
    },
    'children': jsxs('span', {
      className: IO,
      children: [jsx(_$$t3, {}), jsx('span', {
        className: li,
        children: e
      })]
    })
  }) : null;
}
function lx() {
  let e = getI18nString('community.profiles.saved');
  let t = useResourceRouteParams();
  let r = useResourceFuid() ?? void 0;
  return jsx(ButtonPrimitive, {
    'aria-label': e,
    'className': U()(_$$x4, Mg, _$$pU),
    'onClick': () => {
      let e = new _$$e11(t, r);
      customHistory.push(e.href);
      YM();
    },
    'children': jsxs('span', {
      className: IO,
      children: [jsx(_$$k5, {}), jsx('span', {
        className: li,
        children: e
      })]
    })
  });
}
function lb() {
  let e = isTntSavingEnabled();
  let t = isMakeDiscoveryEnabled();
  return jsx(DropdownThemeProvider, {
    mode: 'match',
    children: jsxs('div', {
      className: 'x78zum5 x1q0g3np x167g77z x1a02dak',
      children: [e && jsx(lx, {}), jsx(ll, {}), t && jsx(lg, {}), jsx(lc, {}), jsx(lm, {}), jsx(lf, {}), jsx(l_, {})]
    })
  });
}
let lj = e => Math.ceil(e / MAX_TAGS) * MAX_TAGS;
function lT({
  resourceCount: e,
  resourceType: t,
  category: r,
  editorType: a,
  savedByUserId: i,
  caller: n,
  includeContent: o,
  enabled: l = !0
}) {
  let d = useRef(null);
  useEffect(() => {
    e > 0 && d.current === null && (d.current = lj(e));
  }, [e]);
  let c = getCurrentLocale();
  let [{
    data: u,
    status: m,
    hasNextPage: _
  }, {
    fetchNextPage: p
  }] = setupResourceAtomHandler(_$$a0.ResourcesPaginatedQuery({
    resourceType: t,
    category: r,
    editorType: a,
    savedByUserId: i,
    caller: n,
    pageSize: d.current ?? 0,
    includeContent: o,
    locale: c
  }), {
    enabled: d.current !== null && l
  });
  let g = m === 'loading';
  useEffect(() => {
    !g && _ && e > (u?.length ?? 0) && p();
  }, [g, _, e, u, p]);
  return {
    resources: u,
    loading: g,
    hasNextPage: _
  };
}
let lR = {
  card: {
    borderRadius: 'x1mxnbhz',
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
  cardShadow: {
    boxShadow: 'x1u3p76b',
    $$css: !0
  },
  cardWidth: {
    width: 'xamxeob',
    $$css: !0
  },
  cardTransition: {
    transition: 'x1el4u5y',
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    $$css: !0
  }
};
function lA({
  imageSources: e,
  isHovered: t
}) {
  return jsx('div', {
    className: 'x10l6tqk x1y0lptx xxbcxho x78zum5 x1q0g3np x1v2ro7d x1g75g36',
    children: e.map((e, r) => jsx(_$$oW, {
      ..._$$xk(lO.image, lR.card, t && lO.hoveredImage),
      src: buildUploadUrl(e),
      alt: ''
    }, r))
  });
}
let lO = {
  image: {
    ...lR.cardShadow,
    transition: 'x1i5byms',
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    flexGrow: 'x1iyjqo2',
    aspectRatio: 'xacr46v',
    $$css: !0
  },
  hoveredImage: {
    transform: 'xqc4caa',
    $$css: !0
  }
};
function lF({
  imageSources: e,
  isHovered: t
}) {
  return jsxs(Fragment, {
    children: [jsx(_$$oW, {
      ..._$$xk(lP.image, lP.frontImage, lR.card, t && lP.frontImageHovered),
      src: buildUploadUrl(e[0]),
      alt: ''
    }), jsx(_$$oW, {
      ..._$$xk(lP.image, lP.backImage, lR.card, t && lP.backImageHovered),
      src: buildUploadUrl(e[1]),
      alt: ''
    })]
  });
}
let lP = {
  image: {
    ...lR.cardWidth,
    ...lR.cardShadow,
    ...lR.cardTransition,
    position: 'x10l6tqk',
    left: 'x1nrll8i',
    insetInlineStart: null,
    insetInlineEnd: null,
    $$css: !0
  },
  frontImage: {
    transform: 'xkz1y4k',
    bottom: 'x874rk5',
    $$css: !0
  },
  backImage: {
    transform: 'xpdgo6v',
    bottom: 'x1y0lptx',
    $$css: !0
  },
  frontImageHovered: {
    transform: 'xcvh5f3',
    $$css: !0
  },
  backImageHovered: {
    transform: 'xgz6438',
    $$css: !0
  }
};
function lL({
  imageSource: e,
  isHovered: t
}) {
  return jsx('div', {
    className: 'x10l6tqk x1d9swqr x5yr21d',
    children: jsx(_$$oW, {
      ..._$$xk(lD.image, t && lD.hoveredImage),
      src: buildUploadUrl(e),
      alt: ''
    })
  });
}
let lD = {
  image: {
    ...lR.cardTransition,
    position: 'x1n2onr6',
    height: 'xlxyqfn',
    bottom: 'x1y0lptx',
    $$css: !0
  },
  hoveredImage: {
    transform: 'xeybphm',
    $$css: !0
  }
};
function lM({
  imageSource: e,
  containerStyle: t,
  isHovered: r
}) {
  let s = t === 'sheetStyle' ? lB.hoveredSheetImage : lB.hoveredWidgetImage;
  return jsx('div', {
    ..._$$xk(lB[t]),
    children: jsx(_$$oW, {
      ..._$$xk(lB.image, r && s),
      src: buildUploadUrl(e),
      alt: ''
    })
  });
}
let lB = {
  sheetStyle: {
    ...lR.cardWidth,
    ...lR.cardShadow,
    left: 'x1nrll8i',
    insetInlineStart: null,
    insetInlineEnd: null,
    transform: 'xv9q2wl',
    position: 'x10l6tqk',
    $$css: !0
  },
  hoveredSheetImage: {
    transform: 'xfx47b9',
    $$css: !0
  },
  widgetCardStyle: {
    height: 'x5yr21d',
    top: 'x8l1umf',
    right: 'x3m8u43',
    insetInlineStart: null,
    insetInlineEnd: null,
    opacity: 'x1us6l5c',
    position: 'x10l6tqk',
    $$css: !0
  },
  hoveredWidgetImage: {
    transform: 'x1bao77f',
    $$css: !0
  },
  image: {
    ...lR.cardTransition,
    width: 'xh8yej3',
    height: 'x5yr21d',
    $$css: !0
  }
};
function lU({
  imageSources: e,
  isHovered: t
}) {
  return jsxs(Fragment, {
    children: [jsx(_$$oW, {
      ..._$$xk(lW.image, lW.bottomImage),
      src: buildUploadUrl(e[0]),
      alt: ''
    }), jsx(_$$oW, {
      ..._$$xk(lW.image, lW.middleImage, t && lW.hoveredMiddleImage),
      src: buildUploadUrl(e[1]),
      alt: ''
    }), jsx(_$$oW, {
      ..._$$xk(lW.image, lW.topImage, t && lW.hoveredTopImage),
      src: buildUploadUrl(e[2]),
      alt: ''
    })]
  });
}
let lW = {
  image: {
    ...lR.cardWidth,
    ...lR.cardTransition,
    position: 'x10l6tqk',
    left: 'x1nrll8i',
    insetInlineStart: null,
    insetInlineEnd: null,
    transform: 'xuuh30',
    bottom: 'x1y0lptx',
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
  bottomImage: {
    width: 'xqjhr6n',
    boxShadow: 'x1u3p76b',
    $$css: !0
  },
  middleImage: {
    width: 'x8uc0wx',
    bottom: 'x1g84rlc',
    boxShadow: 'x1wu5q8a',
    $$css: !0
  },
  topImage: {
    bottom: 'x1otreau',
    $$css: !0
  },
  hoveredMiddleImage: {
    transform: 'xbtikzi',
    $$css: !0
  },
  hoveredTopImage: {
    transform: 'x16ui88a',
    $$css: !0
  }
};
function l$({
  header: e,
  route: t,
  content: r,
  showSeeMore: s
}) {
  let i = t && s ? jsxs(_$$e2, {
    'aria-label': getI18nString('community.resource_hub.see_more'),
    'onClick': () => {
      CA(t.pathname);
      customHistory.push(t.href);
    },
    'className': 'x78zum5 x8rdmch x6s0dn4 x19y5rnk x1d4akdp',
    'children': [jsx('h3', {
      ..._$$xk(lG.headerText),
      'data-testid': 'section-header',
      'children': e
    }), jsx(_$$a4, {})]
  }) : jsx('h3', {
    ..._$$xk(lG.headerText),
    'data-testid': 'section-header',
    'children': e
  });
  return jsxs('div', {
    children: [jsx('div', {
      className: 'x78zum5 x6s0dn4 x1y1aw1k xwib8y2 x1jnr06f',
      children: i
    }), r]
  });
}
let lG = {
  headerText: {
    ..._$$g3.textBodyLarge,
    lineHeight: 'x1o2sk6j',
    $$css: !0
  }
};
var lV = (e => (e.BRAINSTORMING = 'brainstorming', e.CARD_TEMPLATES = 'cardTemplates', e.CLASSROOM_ACTIVITIES = 'classroomActivities', e.DATA_TEMPLATES = 'dataTemplates', e.DESIGN_TUTORIALS = 'designTutorials', e.DEVELOPMENT = 'development', e.DIAGRAMMING = 'diagramming', e.EDITING_EFFECTS = 'editingEffects', e.FILE_ORGANIZATION = 'fileOrganization', e.PRESENTATIONS_LARGE = 'presentationsLarge', e.PRESENTATIONS_SMALL = 'presentationsSmall', e.RESUMES = 'resumes', e.STRATEGIC_PLANNING = 'strategicPlanning', e.TEAM_MEETINGS_SMALL = 'teamMeetingsSmall', e.TEAM_MEETINGS_LARGE = 'teamMeetingsLarge', e.UI_KITS = 'uiKits', e.VISUAL_ASSETS = 'visualAssets', e.WIDGETS = 'widgets', e.WIREFRAMES = 'wireframes', e.WORKSHOP_TEMPLATES = 'workshopTemplates', e))(lV || {});
let lz = {
  brainstorming: {
    category: TemplateCategory.brainstorming,
    size: 'large',
    art: e => jsx(lA, {
      imageSources: ['f01ed35801ea5830119fbe503b42f18f8b8fa6bb', 'd96670e9dd7d8f500b1d82f97d4d08ca5762f014', '25a7262271550cf605425ae1f9dbb3186df9e938', '75319ef48f81cc1e0f733b2a9ee834ae20ad7383', '1d6892175c739459b51f88450efd4fd63647a2d6', '0e81b3f80cb2491aac0675bd33fbbbb79db59ddd'],
      isHovered: e
    }),
    backgroundColor: Tj.bgFigjamTertiary,
    brand: 'seascape'
  },
  cardTemplates: {
    category: TemplateCategory.cardTemplates,
    editorType: _$$k4.Editors.COOPER,
    size: 'small',
    art: e => jsx(lM, {
      imageSource: '2c4bc9301e89bc080dbadbdb33df70febe9bf82f',
      containerStyle: 'sheetStyle',
      isHovered: e
    }),
    backgroundColor: Tj.bgBrandTertiary,
    brand: 'cooper'
  },
  classroomActivities: {
    category: TemplateCategory.classroomActivities,
    size: 'small',
    art: e => jsx(lF, {
      imageSources: ['ad9ed6524f8541f00d3968f21e59fcc627be04a6', '9633b9c063fd07075008ee206a4ea712c2931994'],
      isHovered: e
    }),
    backgroundColor: Tj.bgFigjamTertiary,
    brand: 'seascape'
  },
  dataTemplates: {
    category: TemplateCategory.dataTemplates,
    size: 'small',
    art: e => jsx(lF, {
      imageSources: ['85c247027dd036bb720dbaac9ecf63318e138266', '55da4072453228deaa707a61fac742fd6b8a1022'],
      isHovered: e
    }),
    backgroundColor: Tj.bgFigjamTertiary,
    brand: 'seascape'
  },
  designTutorials: {
    category: TemplateCategory.designTutorials,
    size: 'large',
    art: e => jsx(lA, {
      imageSources: ['f341d1cb6464b9ff5d2eb63c89eb380249fc7c78', '985e74dda7ed515202f6b7a55ffc2e1562c9ff94', 'd48320278ece5f694fe686c2c971bcb9c5381f88', '1864952e1f5b8fbc94fe85f548d41b77458dcc87', 'deb79a32eabbdaed5b86904ec9c4adda486345fb', '3e63b05276c55b2d9e95c49e90969cc51023344b'],
      isHovered: e
    }),
    backgroundColor: Tj.bgSecondary
  },
  development: {
    category: TemplateCategory.development,
    resourceType: ResourceTypes.BrowseResourceTypes.PLUGINS,
    size: 'small',
    art: e => jsx(lL, {
      isHovered: e,
      imageSource: '6ce1bcbe88b8f4f202e4307f0de131f8fb6cf61e'
    }),
    backgroundColor: Tj.bgBrandTertiary,
    brand: 'design'
  },
  diagramming: {
    category: TemplateCategory.diagramming,
    size: 'large',
    art: e => jsx(lA, {
      imageSources: ['378c5389dc551daa4f2a3daa5f4e4748fa811eb9', 'f5fa32f34d57e6b4b01f67f10c13fa4ced6fa20f', '82cc8e76b689ad016a0e4871ad99f68fe7c67864', 'b1f9c2bb18232dd55c41e0528227a2a82ecdd151', '37903eb6b345c31cc1ad0967dc6ff8a541a16b90', '9f70f6b78199251bb1213c6f3e5e00df8fc0572b'],
      isHovered: e
    }),
    backgroundColor: Tj.bgFigjamTertiary,
    brand: 'seascape'
  },
  editingEffects: {
    category: TemplateCategory.editingEffects,
    resourceType: ResourceTypes.BrowseResourceTypes.PLUGINS,
    size: 'small',
    art: e => jsx(lL, {
      imageSource: '6ce1bcbe88b8f4f202e4307f0de131f8fb6cf61e',
      isHovered: e
    }),
    backgroundColor: Tj.bgBrandTertiary,
    brand: 'design'
  },
  fileOrganization: {
    category: TemplateCategory.fileOrganization,
    resourceType: ResourceTypes.BrowseResourceTypes.PLUGINS,
    size: 'small',
    art: e => jsx(lL, {
      imageSource: '2f1dc06209ebe620cb42e03cdb85da7ef9d9efa0',
      isHovered: e
    }),
    backgroundColor: Tj.bgBrandTertiary,
    brand: 'design'
  },
  presentationsLarge: {
    category: TemplateCategory.presentations,
    size: 'large',
    art: e => jsx(lA, {
      imageSources: ['0b6a114955ffe1c7a56e993323f212990422a525', '0b8f4c7881cf0404fb105a1a680d74564205bc8c', 'b9d5d2df7dfd58ee29a44ecd72c83dbb6f6588c0', '1eb484ec6df2d5d6874b92bae0b221fcbbebc79c', 'ed0ab6a51ef9b7275a9c123994db37df3188fee7', 'b616eae234aeefb2ad7c62d5f0bd84c843c3d86d'],
      isHovered: e
    }),
    backgroundColor: Tj.bgBrandTertiary,
    brand: 'piper'
  },
  presentationsSmall: {
    category: TemplateCategory.presentations,
    size: 'small',
    art: e => jsx(lU, {
      imageSources: ['8b73180892c70a676c567732411c422e46f1fcae', '4963a5a549df301b0ba8dbdc788c2c3424c4217e', 'e66ce4f446be08f56a330a9b39c5e9c72e6d3338'],
      isHovered: e
    }),
    backgroundColor: Tj.bgBrandTertiary,
    brand: 'piper'
  },
  teamMeetingsLarge: {
    category: TemplateCategory.teamMeetings,
    size: 'large',
    art: e => jsx(lA, {
      imageSources: ['b7e05a6d6b76b8b377e5c4f0eb006dfe99e5875d', '61830de70c1cec8ae28737c1f9c36ff5a7b07d18', '742fbce6b78404d48f62e39a6be510dce4cae699', '6405c322fda966de6578a55cb0c861d2fb774b84', 'd22c05d35fc088e4d089e814f42379b395b86e26', '89d7df8b21116cbf283086a5056f305de01f91a4'],
      isHovered: e
    }),
    backgroundColor: Tj.bgFigjamTertiary,
    brand: 'seascape'
  },
  teamMeetingsSmall: {
    category: TemplateCategory.teamMeetings,
    size: 'small',
    art: e => jsx(lF, {
      imageSources: ['742fbce6b78404d48f62e39a6be510dce4cae699', 'b7e05a6d6b76b8b377e5c4f0eb006dfe99e5875d'],
      isHovered: e
    }),
    backgroundColor: Tj.bgFigjamTertiary,
    brand: 'seascape'
  },
  resumes: {
    category: TemplateCategory.resumes,
    size: 'small',
    art: e => jsx(lM, {
      imageSource: 'ba7504eb5c18069ca8c0455768fcf46c6bc4ee52',
      containerStyle: 'sheetStyle',
      isHovered: e
    }),
    backgroundColor: Tj.bgBrandTertiary,
    brand: 'design'
  },
  strategicPlanning: {
    category: TemplateCategory.strategicPlanning,
    size: 'small',
    art: e => jsx(lF, {
      imageSources: ['3b212f16a905705728bf1dc973fa25001844b4bc', '28c8e9a68927b0f9f55a41efd6df2251b8823eea'],
      isHovered: e
    }),
    backgroundColor: Tj.bgFigjamTertiary,
    brand: 'seascape'
  },
  uiKits: {
    category: TemplateCategory.uiKits,
    size: 'small',
    art: e => jsx(lF, {
      imageSources: ['52e2511dc978b4b6aad9ad3799dd2fb75139cb2a', 'fc614bae349b646e1ea8ffe00e5b6e723ec9f13f'],
      isHovered: e
    }),
    backgroundColor: Tj.bgBrandTertiary,
    brand: 'design'
  },
  visualAssets: {
    category: TemplateCategory.visualAssets,
    size: 'large',
    art: e => jsx(lL, {
      imageSource: 'a9b2bb97699222fc52104170706120e06c6f971a',
      isHovered: e
    }),
    backgroundColor: Tj.bgBrandTertiary,
    brand: 'design'
  },
  widgets: {
    category: TemplateCategory.whiteboarding,
    resourceType: ResourceTypes.BrowseResourceTypes.WIDGETS,
    size: 'large',
    art: e => jsx(lM, {
      imageSource: 'c14d817322fb0a630ceb76de93d5669b91e6bce1',
      containerStyle: 'widgetCardStyle',
      isHovered: e
    }),
    backgroundColor: Tj.bgFigjamTertiary,
    brand: 'seascape'
  },
  wireframes: {
    category: TemplateCategory.wireframes,
    size: 'large',
    art: e => jsx(lA, {
      imageSources: ['4c787218f1399d78e7035575c6041d05b7c51abf', '4a119c09ddc4e5a598728b3121b81e7df52f30f0', 'd380df1c57eb9d1c6d963673d2c718d515b69e9e', 'c04936ee5bd33d718c78e37fd42e4f8dbe058f35', 'c8e4c4f9dd45d76797e4c8f1a7515fbbb0f49a61', '448ad0f1bc089057cf63f983b7fe865ae1395a56'],
      isHovered: e
    }),
    backgroundColor: Tj.bgBrandTertiary,
    brand: 'design'
  },
  workshopTemplates: {
    category: TemplateCategory.workshopTemplates,
    size: 'small',
    art: e => jsx(lF, {
      imageSources: ['c6bfc0d07a504cbb9daa39452cb5d1afa29f4e36', '6899629efb49a4e0cb289017a2a6c8380e494fae'],
      isHovered: e
    }),
    backgroundColor: Tj.bgFigjamTertiary,
    brand: 'seascape'
  }
};
function lH({
  size: e,
  title: t,
  description: r,
  art: i,
  backgroundColor: n,
  brand: o,
  route: l,
  userJobTitle: d
}) {
  let [c, m] = useState(!1);
  return jsx(setupThemeContext, {
    brand: o,
    children: createElement(ButtonPrimitive, {
      'aria-label': t,
      ..._$$xk(lK.card, o ? lK.cardBrandBorder : lK.cardStrongBorder, e === 'large' ? lK.largeCard : lK.smallCard),
      'onClick': () => {
        l && (_$$rC(d, l.href), customHistory.push(l.href));
      },
      'htmlAttributes': {
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1)
      },
      'style': {
        backgroundColor: n
      },
      'key': t
    }, jsxs('div', {
      className: 'x78zum5 xdt5ytf x10l6tqk x13vifvy x1nejdyq x7eqkm1',
      children: [jsx('div', {
        ..._$$xk(lK.title),
        children: t
      }), jsx('div', {
        className: 'x1n0bwc9',
        children: r
      })]
    }), i(c))
  });
}
let lK = {
  smallCard: {
    flexBasis: 'xhnlq4v',
    flexGrow: 'x1iyjqo2',
    $$css: !0
  },
  largeCard: {
    flexBasis: 'x4pfjvb',
    flexGrow: 'xgyuaek',
    $$css: !0
  },
  card: {
    position: 'x1n2onr6',
    display: 'x1lliihq',
    placeItems: 'x1hd2rbs',
    alignItems: null,
    justifyItems: null,
    borderRadius: 'x1mxnbhz',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    height: 'x5yr21d',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    textAlign: 'x1yc453h',
    $$css: !0
  },
  cardBrandBorder: {
    border: 'xehbxol x1fz536k',
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
    $$css: !0
  },
  cardStrongBorder: {
    border: 'xehbxol x12jpku1',
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
    $$css: !0
  },
  title: {
    ..._$$g3.textHeadingSmall,
    fontWeight: 'xk50ysn',
    $$css: !0
  }
};
function lY() {
  let e = _$$w6();
  let t = function (e) {
    let t = {
      'designer': ['visualAssets', 'presentationsSmall', 'editingEffects'],
      'developer': ['diagramming', 'development', 'teamMeetingsSmall'],
      'product-manager': ['widgets', 'presentationsSmall', 'teamMeetingsSmall'],
      'marketer': ['brainstorming', 'cardTemplates', 'resumes'],
      'researcher': ['diagramming', 'teamMeetingsSmall', 'strategicPlanning'],
      'education': ['classroomActivities', 'designTutorials', 'workshopTemplates'],
      'ux-writer': ['uiKits', 'teamMeetingsLarge', 'fileOrganization'],
      'data': ['dataTemplates', 'presentationsLarge', 'strategicPlanning'],
      'other': ['wireframes', 'presentationsSmall', 'uiKits'],
      'unknown': ['wireframes', 'presentationsSmall', 'uiKits']
    };
    return (t[e] || t.unknown).map(e => lz[e]).filter(e => void 0 !== e);
  }(e);
  let r = le(t.map(e => ({
    key: e.category,
    category: e.category,
    resource_type: e.resourceType || void 0,
    editor_type: e.editorType || void 0
  })));
  let i = t.map(t => ({
    ...function (e) {
      switch (e) {
        case TemplateCategory.brainstorming:
          return {
            title: getI18nString('categories.brainstorming'),
            description: getI18nString('community.resource_hub.category_description.brainstorming')
          };
        case TemplateCategory.cardTemplates:
          return {
            title: getI18nString('community.resource_hub.featured_categories.invites_templates'),
            description: getI18nString('community.resource_hub.category_description.card_templates')
          };
        case TemplateCategory.classroomActivities:
          return {
            title: getI18nString('community.resource_hub.featured_categories.classroom_activities'),
            description: getI18nString('community.resource_hub.category_description.classroom_activities')
          };
        case TemplateCategory.dataTemplates:
          return {
            title: getI18nString('community.footer.data_templates'),
            description: getI18nString('community.resource_hub.category_description.data_templates')
          };
        case TemplateCategory.designTutorials:
          return {
            title: getI18nString('community.resource_hub.featured_categories.design_tutorials'),
            description: getI18nString('community.resource_hub.category_description.design_tutorials')
          };
        case TemplateCategory.development:
          return {
            title: getI18nString('community.resource_hub.featured_categories.plugins_for_development'),
            description: getI18nString('community.resource_hub.category_description.development')
          };
        case TemplateCategory.diagramming:
          return {
            title: getI18nString('categories.diagramming'),
            description: getI18nString('community.resource_hub.category_description.diagramming')
          };
        case TemplateCategory.editingEffects:
          return {
            title: getI18nString('community.resource_hub.featured_categories.plugins_for_editing_and_effects'),
            description: getI18nString('community.resource_hub.category_description.editing_effects')
          };
        case TemplateCategory.fileOrganization:
          return {
            title: getI18nString('community.resource_hub.featured_categories.plugins_for_file_organization'),
            description: getI18nString('community.resource_hub.category_description.file_organization')
          };
        case TemplateCategory.presentations:
          return {
            title: getI18nString('categories.presentations'),
            description: getI18nString('community.resource_hub.category_description.presentations')
          };
        case TemplateCategory.resumes:
          return {
            title: getI18nString('categories.resume_templates'),
            description: getI18nString('community.resource_hub.category_description.resumes')
          };
        case TemplateCategory.strategicPlanning:
          return {
            title: getI18nString('categories.strategic_planning'),
            description: getI18nString('community.resource_hub.category_description.strategic_planning')
          };
        case TemplateCategory.teamMeetings:
          return {
            title: getI18nString('community.resource_hub.featured_categories.team_meetings'),
            description: getI18nString('community.resource_hub.category_description.team_meetings')
          };
        case TemplateCategory.uiKits:
          return {
            title: getI18nString('categories.ui_kits'),
            description: getI18nString('community.resource_hub.category_description.ui_kits')
          };
        case TemplateCategory.visualAssets:
          return {
            title: getI18nString('community.resource_hub.featured_categories.assets'),
            description: getI18nString('community.resource_hub.category_description.visual_assets')
          };
        case TemplateCategory.whiteboarding:
          return {
            title: getI18nString('categories.widgets'),
            description: getI18nString('community.resource_hub.category_description.widgets')
          };
        case TemplateCategory.wireframes:
          return {
            title: getI18nString('categories.wireframes'),
            description: getI18nString('community.resource_hub.category_description.wireframes')
          };
        case TemplateCategory.workshopTemplates:
          return {
            title: getI18nString('community.resource_hub.featured_categories.workshop_templates'),
            description: getI18nString('community.resource_hub.category_description.workshop_templates')
          };
        default:
          throwTypeError(e);
      }
    }(t.category),
    size: t.size,
    art: t.art,
    backgroundColor: t.backgroundColor,
    brand: t.brand,
    route: r[t.category],
    userJobTitle: e
  }));
  let n = useRef(null);
  let [o, l] = useState(0);
  useEffect(() => {
    let e = new ResizeObserver(e => {
      l(e[0]?.contentRect.width ?? 0);
    });
    n.current && (l(n.current.clientWidth), e.observe(n.current));
    return () => {
      e.disconnect();
    };
  }, [n]);
  let d = useMemo(() => {
    let e = [];
    let t = 0;
    i.forEach(r => {
      let a = r.size === 'large' ? 420 : 210;
      t + a <= o && (e.push(r), t += a);
    });
    return e;
  }, [o, i]);
  return jsx(l$, {
    header: getI18nString('community.resource_hub.featured_categories'),
    content: jsx('div', {
      className: 'x78zum5 x1q0g3np x1665zp3 xc6p2dh',
      ref: n,
      children: d.map(e => jsx(lH, {
        ...e
      }, e.title))
    }),
    showSeeMore: !1
  });
}
var lq = (e => (e.BRAINSTORMING = 'brainstorming', e.COOPER_TEMPLATE = 'cooperTemplate', e.DATA_TEMPLATE = 'dataTemplate', e.DESIGN_TEMPLATE = 'designTemplate', e.DESIGN_TOOLS = 'designTools', e.DIAGRAMMING = 'diagramming', e.EDUCATION = 'education', e.FIGJAM_TEMPLATE = 'figJamTemplate', e.FUN_AND_GAMES = 'funAndGames', e.MAKE_TEMPLATE = 'makeTemplate', e.PRESENTATION_TEMPLATE = 'presentationTemplate', e.SITE_TEMPLATE = 'siteTemplate', e.STRATEGIC_PLANNING = 'strategicPlanning', e.UI_KITS = 'uiKits', e.WEBSITE_TEMPLATE = 'websiteTemplate', e.WHITEBOARDING = 'whiteboarding', e.WIREFRAMES = 'wireframes', e))(lq || {});
function lX({
  sizingInfo: e
}) {
  let t = function (e) {
    let t = {
      brainstorming: {
        key: 'brainstorming',
        header: getI18nString('categories.brainstorming'),
        categoryForQuery: TemplateCategory.brainstorming,
        categorySlug: TemplateCategory.brainstorming,
        resourceType: ResourceTypeEnum.FIGJAM_TEMPLATE
      },
      cooperTemplate: {
        key: 'cooperTemplate',
        header: getI18nString('categories.social_media_templates'),
        categoryForQuery: TemplateCategory.socialMediaTemplates,
        categorySlug: TemplateCategory.socialMediaTemplates,
        resourceType: ResourceTypeEnum.COOPER_TEMPLATE_FILE,
        resourceEditorType: DesignToolType.COOPER,
        apiEditorType: _$$k4.Editors.COOPER
      },
      dataTemplate: {
        key: 'dataTemplate',
        header: getI18nString('community.footer.data_templates'),
        categoryForQuery: TemplateCategory.dataTemplates,
        categorySlug: TemplateCategory.dataTemplates,
        resourceType: ResourceTypeEnum.DESIGN_TEMPLATE
      },
      designTemplate: {
        key: 'designTemplate',
        header: getI18nString('categories.design_templates'),
        categorySlug: TemplateCategory.designTemplates,
        resourceType: ResourceTypeEnum.DESIGN_TEMPLATE
      },
      designTools: {
        key: 'designTools',
        header: getI18nString('community.view_bar.plugins'),
        categorySlug: TemplateCategory.designTools,
        resourceType: ResourceTypeEnum.PLUGIN,
        isPlugin: !0
      },
      diagramming: {
        key: 'diagramming',
        header: getI18nString('categories.diagramming'),
        categoryForQuery: TemplateCategory.diagramming,
        categorySlug: TemplateCategory.diagramming,
        resourceType: ResourceTypeEnum.FIGJAM_TEMPLATE
      },
      education: {
        key: 'education',
        header: getI18nString('categories.education'),
        categoryForQuery: TemplateCategory.education,
        categorySlug: TemplateCategory.education,
        resourceType: ResourceTypeEnum.DESIGN_TEMPLATE
      },
      figJamTemplate: {
        key: 'figJamTemplate',
        header: getI18nString('community.resource_hub.figjam_templates'),
        categorySlug: TemplateCategory.whiteboarding,
        resourceType: ResourceTypeEnum.FIGJAM_TEMPLATE,
        resourceEditorType: DesignToolType.WHITEBOARD,
        apiEditorType: _$$k4.Editors.FIGJAM
      },
      funAndGames: {
        key: 'funAndGames',
        header: getI18nString('categories.fun_games'),
        categoryForQuery: TemplateCategory.funGames,
        categorySlug: TemplateCategory.funGames,
        resourceType: ResourceTypeEnum.WIDGET,
        apiResourceType: ResourceTypes.BrowseResourceTypes.WIDGETS
      },
      makeTemplate: {
        key: 'makeTemplate',
        header: getI18nString('community.resource_hub.make_shelf_header'),
        categoryForQuery: TemplateCategory.make,
        categorySlug: TemplateCategory.make,
        resourceType: ResourceTypeEnum.FIGMAKE_TEMPLATE
      },
      presentationTemplate: {
        key: 'presentationTemplate',
        header: getI18nString('community.footer.presentations'),
        categoryForQuery: TemplateCategory.presentations,
        categorySlug: TemplateCategory.presentations,
        resourceType: ResourceTypeEnum.SLIDE_TEMPLATE,
        resourceEditorType: DesignToolType.SLIDES,
        apiEditorType: _$$k4.Editors.SLIDES
      },
      siteTemplate: {
        key: 'siteTemplate',
        header: getI18nString('categories.website_templates'),
        categoryForQuery: TemplateCategory.websiteTemplates,
        categorySlug: TemplateCategory.websiteTemplates,
        resourceType: ResourceTypeEnum.SITE_TEMPLATE,
        resourceEditorType: DesignToolType.SITES,
        apiEditorType: _$$k4.Editors.SITES
      },
      strategicPlanning: {
        key: 'strategicPlanning',
        header: getI18nString('categories.strategic_planning'),
        categoryForQuery: TemplateCategory.strategicPlanning,
        categorySlug: TemplateCategory.strategicPlanning,
        resourceType: ResourceTypeEnum.FIGJAM_TEMPLATE
      },
      uiKits: {
        key: 'uiKits',
        header: getI18nString('categories.ui_kits'),
        categoryForQuery: TemplateCategory.uiKits,
        categorySlug: TemplateCategory.uiKits,
        resourceType: ResourceTypeEnum.DESIGN_TEMPLATE
      },
      websiteTemplate: {
        key: 'websiteTemplate',
        header: getI18nString('categories.website_templates'),
        categoryForQuery: TemplateCategory.websiteTemplates,
        categorySlug: TemplateCategory.websiteTemplates,
        resourceType: ResourceTypeEnum.DESIGN_TEMPLATE,
        resourceEditorType: DesignToolType.DESIGN
      },
      whiteboarding: {
        key: 'whiteboarding',
        header: getI18nString('categories.whiteboarding'),
        categoryForQuery: TemplateCategory.whiteboarding,
        categorySlug: TemplateCategory.whiteboarding,
        resourceType: ResourceTypeEnum.FIGJAM_TEMPLATE
      },
      wireframes: {
        key: 'wireframes',
        header: getI18nString('categories.wireframes'),
        categoryForQuery: TemplateCategory.wireframes,
        categorySlug: TemplateCategory.wireframes,
        resourceType: ResourceTypeEnum.DESIGN_TEMPLATE
      }
    };
    let r = {
      'designer': ['siteTemplate', 'uiKits', 'figJamTemplate', 'designTools', 'cooperTemplate'],
      'developer': ['siteTemplate', 'wireframes', 'whiteboarding', 'uiKits', 'cooperTemplate'],
      'product-manager': ['brainstorming', 'strategicPlanning', 'dataTemplate', 'uiKits', 'siteTemplate'],
      'marketer': ['cooperTemplate', 'presentationTemplate', 'strategicPlanning', 'uiKits', 'whiteboarding'],
      'researcher': ['brainstorming', 'presentationTemplate', 'dataTemplate', 'uiKits', 'cooperTemplate'],
      'education': ['education', 'presentationTemplate', 'funAndGames', 'uiKits', 'siteTemplate'],
      'ux-writer': ['brainstorming', 'presentationTemplate', 'wireframes', 'cooperTemplate', 'siteTemplate'],
      'data': ['diagramming', 'brainstorming', 'uiKits', 'siteTemplate', 'cooperTemplate'],
      'other': ['brainstorming', 'cooperTemplate', 'designTools', 'uiKits', 'siteTemplate'],
      'unknown': ['brainstorming', 'cooperTemplate', 'designTools', 'uiKits', 'siteTemplate']
    };
    let a = r[e] || r.unknown || [];
    isMakeDiscoveryEnabled() && a.unshift('makeTemplate');
    return a.map(e => t[e]).filter(e => void 0 !== e);
  }(_$$w6()).map(e => ({
    key: e.key,
    header: e.header,
    categoryForQuery: e.categoryForQuery,
    categorySlug: e.categorySlug,
    resourceType: e.resourceType,
    resourceEditorType: e.resourceEditorType,
    apiResourceType: e.apiResourceType,
    apiEditorType: e.apiEditorType,
    isPlugin: e.isPlugin
  }));
  return jsx('div', {
    className: 'x78zum5 xdt5ytf xh8yej3 x5yr21d x1665zp3',
    children: t.map((t, r) => jsxs('div', {
      children: [r === 2 && jsx('div', {
        className: 'x1hq5gj4',
        children: jsx(lY, {})
      }), t.isPlugin ? jsx(lZ, {
        header: t.header,
        categorySlug: t.categorySlug
      }, t.key) : jsx(lQ, {
        header: t.header,
        categoryForQuery: t.categoryForQuery,
        categorySlug: t.categorySlug,
        resourceType: t.resourceType,
        resourceEditorType: t.resourceEditorType,
        apiResourceType: t.apiResourceType,
        apiEditorType: t.apiEditorType,
        sizingInfo: e
      }, t.key)]
    }, r))
  });
}
function lQ({
  header: e,
  categoryForQuery: t,
  categorySlug: r,
  resourceType: i,
  resourceEditorType: n,
  apiResourceType: o,
  apiEditorType: l,
  sizingInfo: d
}) {
  let {
    resources,
    loading
  } = lT({
    resourceCount: d.numberOfTiles,
    resourceType: [i],
    editorType: n,
    category: t,
    caller: _$$z8.RESOURCE_HUB,
    includeContent: !1
  });
  let m = le([{
    key: 'categoryRoute',
    category: r,
    resource_type: o,
    editor_type: l
  }]);
  let {
    trackResourceImpression
  } = GS();
  let p = useCallback((e, t) => {
    t && trackResourceImpression(e);
  }, [trackResourceImpression]);
  return loading || resources && resources.length !== 0 ? jsx(l$, {
    header: e,
    route: m.categoryRoute,
    content: jsx(_$$T4, {
      resources: (resources && resources.slice(0, d.numberOfTiles)) ?? [],
      loadingTileCount: d.numberOfTiles,
      isLoading: loading,
      resourceImpressionTracking: p
    }),
    showSeeMore: !0
  }) : null;
}
function lZ({
  header: e,
  categorySlug: t
}) {
  let {
    resources,
    loading
  } = lT({
    resourceCount: MAX_CAROUSEL_MEDIA,
    resourceType: [ResourceTypeEnum.PLUGIN],
    category: t,
    caller: _$$z8.RESOURCE_HUB,
    includeContent: !0
  });
  let {
    trackResourceImpression
  } = GS();
  let o = useCallback((e, t) => {
    t && trackResourceImpression(e);
  }, [trackResourceImpression]);
  let l = le([{
    key: 'pluginsRoute',
    category: t,
    resource_type: ResourceTypes.BrowseResourceTypes.PLUGINS
  }]);
  return loading || resources && resources.length !== 0 ? jsx(l$, {
    header: e,
    route: l.pluginsRoute,
    content: jsx(_$$M3, {
      plugins: (resources ?? []).map(e => e.content?.plugin).filter(e => void 0 !== e),
      onIntersectionChange: o,
      isOrgTeamBrowsing: !1,
      isLoading: loading,
      loadingRowCount: MAX_CAROUSEL_MEDIA
    }),
    showSeeMore: !0
  }) : null;
}
function l1({
  currentOrgId: e
}) {
  return jsx(TrackingProvider, {
    name: _$$e7.RESOURCE_HUB_COMMUNITY_TAB_DISABLED_PAGE,
    properties: {
      orgId: e
    },
    children: jsxs('div', {
      className: 'x78zum5 xdt5ytf x6s0dn4 xh8yej3 x16g6g8t xgqmno8 x1sjmt1f xl56j7k',
      children: [jsx('div', {
        className: 'x78zum5 xdt5ytf x6s0dn4 x14o0rcq',
        children: jsx(_$$oW, {
          className: 'x193iq5w xl1xv1r',
          src: buildUploadUrl('8b7c6fb3e353c1972267681e37a56765b96f5b3c'),
          alt: getI18nString('community.resource_hub.your_admins_have_restricted_access'),
          loading: 'lazy'
        })
      }), jsx('div', {
        className: 'x78zum5 xdt5ytf x1665zp3 xycev2y xo3t2mw x6s0dn4 x1nhvcw1',
        children: jsxs('div', {
          className: 'x78zum5 xdt5ytf x6s0dn4 x167g77z xkh2ocl xh8yej3 x2lah0s',
          children: [jsx('div', {
            ..._$$xk(l4.heading),
            children: getI18nString('community.resource_hub.your_admins_have_restricted_access')
          }), jsx('div', {
            ..._$$xk(l4.description),
            children: renderI18nText('community.resource_hub.looking_for_inspiration_you_can', {
              link: jsx(Link, {
                href: '/community',
                newTab: !0,
                children: getI18nString('community.resource_hub.community_link')
              })
            })
          })]
        })
      }), jsx('div', {
        className: 'x78zum5 xdt5ytf xjwf9q1 x98rzlu'
      })]
    })
  });
}
let l4 = {
  heading: {
    color: 'x1akne3o',
    ..._$$g3.textHeadingMedium,
    textAlign: 'x2b8uid',
    $$css: !0
  },
  description: {
    color: 'x1n0bwc9',
    ..._$$g3.textBodyMedium,
    textAlign: 'x2b8uid',
    $$css: !0
  }
};
function l5({
  currentOrgId: e,
  isCommunityTabDisabledForOrg: t
}) {
  let r = _$$X4();
  return t ? jsx(l1, {
    currentOrgId: e
  }) : jsx(TrackingProvider, {
    name: _$$e7.RESOURCE_HUB_COMMUNITY_RESOURCES_HOME_PAGE,
    children: jsxs('div', {
      className: 'x78zum5 xdt5ytf xh8yej3 x5yr21d x1665zp3',
      ref: r.sizeRef,
      children: [jsx(oq, {
        tab: PublishSourceType.COMMUNITY
      }), jsx(lb, {}), jsx(lX, {
        sizingInfo: r
      })]
    })
  });
}
function l3(e, t) {
  let r = {
    orgId: e ?? void 0,
    teamId: t ?? void 0,
    isInternal: !0
  };
  let {
    trackResourceImpression,
    flushAndResetResourceImpressions
  } = GS({
    extraProperties: r
  });
  let {
    trackResourceImpression: _trackResourceImpression,
    flushAndResetResourceImpressions: _flushAndResetResourceImpressions
  } = _$$r7({
    extraProperties: r
  });
  let {
    trackResourceImpression: _trackResourceImpression2,
    flushAndResetResourceImpressions: _flushAndResetResourceImpressions2
  } = FD({
    extraProperties: r
  });
  return {
    onIntersectionChange: useCallback((e, t) => {
      t && (hasLibraryKey(e) ? _trackResourceImpression(e) : hasResourceType(e) ? trackResourceImpression(e) : isPlugin(e) && _trackResourceImpression2(e));
    }, [trackResourceImpression, _trackResourceImpression, _trackResourceImpression2]),
    flushAndResetImpressions: useCallback(() => {
      flushAndResetResourceImpressions();
      _flushAndResetResourceImpressions();
      _flushAndResetResourceImpressions2();
    }, [flushAndResetResourceImpressions, _flushAndResetResourceImpressions, _flushAndResetResourceImpressions2])
  };
}
let ds = new Set([FFileType.COOPER, FFileType.SLIDES, FFileType.WHITEBOARD]);
let di = new Set([FFileType.COOPER, FFileType.SLIDES]);
function dn({
  newFileFrom: e,
  contextClicked: t,
  forceOpenNewTab: r
}) {
  let a = useSelector(e => e.user?.drafts_folder_id);
  let {
    data,
    status
  } = useProjectFileCreationPermissions(a);
  let o = _$$h7(data);
  let l = useCurrentPrivilegedPlan('useTemplatesOmnicreateMenuItemsProps');
  let d = o.filter(({
    editorType: e
  }) => {
    switch (l.data?.tier) {
      case FPlanNameType.STUDENT:
      case FPlanNameType.PRO:
        return di.has(e);
      case FPlanNameType.ORG:
      case FPlanNameType.ENTERPRISE:
        return ds.has(e);
      case FPlanNameType.STARTER:
      default:
        return !0;
    }
  });
  let [c, u] = useAtomValueAndSetter(bW);
  let m = u({
    showOrgTemplateView: !0
  });
  let _ = _$$E4({
    isDraftsFolder: !0,
    newFileFrom: e,
    forceOpenNewTab: r,
    newFileDataLocalStorageKey: m
  });
  let p = status === 'loading' || l.status === 'loading';
  return {
    newFiles: d.map(({
      editorType: e,
      canCreate: r
    }) => _$$p7({
      editorType: e,
      isDisabled: !r,
      isLoading: p,
      onClick: _({
        editorType: e,
        contextClicked: t
      })
    })),
    import: null
  };
}
function dd({
  planTier: e
}) {
  let t;
  let {
    color
  } = useTheme();
  t = e === FPlanNameType.ORG || e === FPlanNameType.ENTERPRISE ? color === 'dark' ? buildUploadUrl('156640b467fc94700549db25a70310582e3ef24b') : buildUploadUrl('923655d3d7ad0e0261946e6b8175911e0daceff3') : color === 'dark' ? buildUploadUrl('199fc5fd43ab7b8cdb2208db7a7a1c8b4f039119') : buildUploadUrl('363ceafa11ccd8ba7b2d9fe2b9aba1f8f8477596');
  let s = dn({
    newFileFrom: FileBrowserLocation.RESOURCE_HUB_FEW_TEMPLATES_UPSELL,
    contextClicked: _$$e7.RESOURCE_HUB_FEW_TEMPLATES_UPSELL,
    forceOpenNewTab: !0
  });
  return jsx(TrackingProvider, {
    name: _$$e7.RESOURCE_HUB_FEW_TEMPLATES_UPSELL,
    children: jsxs('div', {
      className: 'x78zum5 x1q0g3np xh8yej3 xeq9io7 xgqmno8 x3s0vfn',
      children: [jsx('div', {
        className: 'x3nfvp2 x13a6bvl xgqmno8 xb3r6kr',
        children: jsx(_$$oW, {
          className: 'xnq0rdo x15elv7b x1sy10c2 x1d6c7ev xl1xv1r',
          src: t,
          alt: getI18nString('community.resource_hub.get_more_done'),
          loading: 'lazy'
        })
      }), jsx('div', {
        className: 'x1iyjqo2 x1264ykn xmcgfsh'
      }), jsxs('div', {
        className: 'x78zum5 xdt5ytf x1665zp3 x1d3hk7y x1cy8zhl xw8ila8 x1n2onr6',
        children: [jsxs('div', {
          className: 'x78zum5 xdt5ytf xl56j7k x1cy8zhl x167g77z xkh2ocl xh8yej3 x2lah0s',
          children: [jsx('div', {
            ..._$$xk(dc.heading),
            children: getI18nString('community.resource_hub.get_more_done')
          }), jsx('div', {
            ..._$$xk(dc.description),
            children: getI18nString('community.resource_hub.create_custom_templates_to_add')
          })]
        }), jsx(_$$a1, {
          menuItems: s
        })]
      })]
    })
  });
}
let dc = {
  heading: {
    color: 'x1akne3o',
    ..._$$g3.textHeadingMedium,
    $$css: !0
  },
  description: {
    color: 'x1n0bwc9',
    ..._$$g3.textBodyMedium,
    $$css: !0
  }
};
function du({
  planTier: e,
  isTemplatesPublishingDisabledForOrg: t
}) {
  let r;
  let s = useResourceRouteParams();
  let i = useResourceFuid();
  let {
    color
  } = useTheme();
  r = e === FPlanNameType.ORG || e === FPlanNameType.ENTERPRISE ? t ? buildUploadUrl('ceafb20933e03362e3d3f6c8191e892c8321d3db') : color === 'dark' ? buildUploadUrl('156640b467fc94700549db25a70310582e3ef24b') : buildUploadUrl('923655d3d7ad0e0261946e6b8175911e0daceff3') : color === 'dark' ? buildUploadUrl('199fc5fd43ab7b8cdb2208db7a7a1c8b4f039119') : buildUploadUrl('363ceafa11ccd8ba7b2d9fe2b9aba1f8f8477596');
  let o = dn({
    newFileFrom: FileBrowserLocation.RESOURCE_HUB_NO_RESOURCES_UPSELL,
    contextClicked: _$$e7.RESOURCE_HUB_NO_RESOURCES_UPSELL,
    forceOpenNewTab: !0
  });
  let l = new ResourceHubHomeRouteClass({
    ...s,
    tab: PublishSourceType.COMMUNITY
  }, i);
  let d = t ? getI18nString('community.resource_hub.template_publishing_has_been_disabled') : getI18nString('community.resource_hub.streamline_your_work_with_custom');
  return jsx(TrackingProvider, {
    name: _$$e7.RESOURCE_HUB_NO_RESOURCES_UPSELL,
    children: jsxs('div', {
      className: 'x78zum5 xdt5ytf x6s0dn4 xh8yej3 x16g6g8t xgqmno8 x1sjmt1f xl56j7k',
      children: [jsx('div', {
        className: 'x78zum5 xdt5ytf x6s0dn4 xvue9z xwbyk0q x2lah0s xk1l47c',
        children: jsx(_$$oW, {
          className: 'x193iq5w xl1xv1r xetamn0',
          src: r,
          alt: d,
          loading: 'lazy'
        })
      }), jsxs('div', {
        className: 'x78zum5 xdt5ytf x1665zp3 xz84dc7 xo3t2mw x6s0dn4',
        children: [jsxs('div', {
          className: 'x78zum5 xdt5ytf x6s0dn4 x167g77z xkh2ocl xh8yej3 x2lah0s',
          children: [jsx('div', {
            ..._$$xk(dm.heading),
            children: d
          }), jsx('div', {
            ..._$$xk(dm.description),
            children: getI18nString('community.resource_hub.create_templates_to_keep_up')
          })]
        }), jsxs('div', {
          className: 'x78zum5 xdt5ytf x6s0dn4 xou54vl xkh2ocl xh8yej3 x2lah0s',
          children: [!t && jsx(_$$a1, {
            menuItems: o
          }), jsx(TrackedLink, {
            ..._$$xk(dm.browseResourcesFromCommunity),
            to: l.to,
            trackingEventName: HH.RESOURCE_HUB_BROWSE_COMMUNITY_CLICKED,
            trackingProperties: {
              route: l.pathname
            },
            children: getI18nString('community.resource_hub.browse_resources_from_community')
          })]
        })]
      })]
    })
  });
}
let dm = {
  heading: {
    color: 'x1akne3o',
    ..._$$g3.textHeadingMedium,
    textAlign: 'x2b8uid',
    $$css: !0
  },
  description: {
    color: 'x1n0bwc9',
    ..._$$g3.textBodyMedium,
    textAlign: 'x2b8uid',
    $$css: !0
  },
  browseResourcesFromCommunity: {
    color: 'x1quhyk7',
    ..._$$g3.textBodyMedium,
    textAlign: 'x2b8uid',
    cursor: 'x1ypdohk',
    $$css: !0
  }
};
function dp({
  teamId: e
}) {
  let t = useDispatch();
  let r = useResourceRouteParams();
  let s = useResourceFuid();
  let {
    color
  } = useTheme();
  let o = new ResourceHubHomeRouteClass({
    ...r,
    tab: PublishSourceType.COMMUNITY
  }, s);
  return jsx(TrackingProvider, {
    name: _$$e7.RESOURCE_HUB_UPGRADE_UPSELL,
    properties: {
      planTier: FPlanNameType.STARTER,
      teamId: e
    },
    children: jsxs('div', {
      className: 'x78zum5 xdt5ytf x6s0dn4 xh8yej3 x16g6g8t xgqmno8 x1sjmt1f xl56j7k',
      children: [jsx('div', {
        className: 'x78zum5 xdt5ytf x6s0dn4 xvue9z xwbyk0q x2lah0s xk1l47c',
        children: jsx(_$$oW, {
          className: 'x193iq5w xl1xv1r xetamn0',
          src: color === 'dark' ? buildUploadUrl('199fc5fd43ab7b8cdb2208db7a7a1c8b4f039119') : buildUploadUrl('363ceafa11ccd8ba7b2d9fe2b9aba1f8f8477596'),
          alt: getI18nString('community.resource_hub.custom_templates_for_your_team'),
          loading: 'lazy'
        })
      }), jsxs('div', {
        className: 'x78zum5 xdt5ytf x1665zp3 xz84dc7 xo3t2mw x6s0dn4',
        children: [jsxs('div', {
          className: 'x78zum5 xdt5ytf x6s0dn4 x167g77z xkh2ocl xh8yej3 x2lah0s',
          children: [jsx('div', {
            ..._$$xk(df.heading),
            children: getI18nString('community.resource_hub.custom_templates_for_your_team')
          }), jsx('div', {
            ..._$$xk(df.description),
            children: getI18nString('community.resource_hub.upgrade_to_the_professional_plan')
          })]
        }), jsxs('div', {
          className: 'x78zum5 xdt5ytf x6s0dn4 xou54vl xkh2ocl xh8yej3 x2lah0s',
          children: [jsx($z, {
            onClick: () => {
              t(_$$WX({
                teamId: e,
                entryPoint: UpsellSourceType.RESOURCE_HUB,
                openInNewTab: !1
              }));
            },
            children: getI18nString('community.resource_hub.upgrade_to_professional')
          }), jsx(TrackedLink, {
            ..._$$xk(df.browseResourcesFromCommunity),
            to: o.to,
            trackingEventName: HH.RESOURCE_HUB_BROWSE_COMMUNITY_CLICKED,
            children: getI18nString('community.resource_hub.browse_resources_from_community')
          })]
        })]
      })]
    })
  });
}
let df = {
  heading: {
    color: 'x1akne3o',
    ..._$$g3.textHeadingMedium,
    textAlign: 'x2b8uid',
    $$css: !0
  },
  description: {
    color: 'x1n0bwc9',
    ..._$$g3.textBodyMedium,
    textAlign: 'x2b8uid',
    $$css: !0
  },
  browseResourcesFromCommunity: {
    color: 'x1quhyk7',
    ..._$$g3.textBodyMedium,
    textAlign: 'x2b8uid',
    cursor: 'x1ypdohk',
    $$css: !0
  }
};
function dx({
  resourceTypeSlugs: e
}) {
  return jsx('div', {
    className: 'x78zum5 x167g77z x1a02dak',
    children: e.map(e => createElement('div', {
      className: 'x167g77z x4vwp2a',
      key: e
    }, jsx(db, {
      resourceTypeSlug: e
    })))
  });
}
function db({
  resourceTypeSlug: e
}) {
  let t = useResourceRouteParams();
  let r = useResourceFuid();
  let s = _$$i_(e);
  let i = function (e) {
    switch (e) {
      case _$$M2.PLUGINS:
        return jsx(_$$u5, {});
      case _$$M2.FIGJAM_TEMPLATES:
        return jsx(_$$D3, {});
      case _$$M2.WIDGETS:
        return jsx(_$$v5, {});
      case _$$M2.SLIDE_TEMPLATES:
        return jsx(_$$l3, {});
      case _$$M2.LIBRARIES:
        break;
      case _$$M2.COOPER_TEMPLATES:
        return jsx(_$$W3, {});
      case _$$M2.FIGMAKE_TEMPLATES:
        return jsx(_$$t3, {});
      case _$$M2.RECENTLY_ADDED_TEMPLATES:
        break;
      default:
        returnSecond(e, null);
    }
    return null;
  }(e);
  return jsx(ButtonPrimitive, {
    'aria-label': s,
    'className': U()(_$$x4, Mg, _$$pU),
    'onClick': () => {
      let a = new _$$U5({
        ...t,
        resourceTypeSlug: e
      }, r);
      _$$ng(e);
      customHistory.push(a.href);
    },
    'children': jsxs('span', {
      className: IO,
      children: [i, jsx('span', {
        className: li,
        children: s
      })]
    })
  });
}
function dv({
  planTier: e,
  isTemplatesPublishingDisabledForOrg: t,
  currentOrgId: r,
  currentTeamId: s
}) {
  let i;
  let n = _$$X4();
  let {
    onIntersectionChange
  } = l3(r ?? void 0, s ?? void 0);
  let d = _$$er(e, s ?? null, !!t);
  let c = NQ(e, r ?? null, !!t);
  let {
    [FFileType.COOPER]: {
      templates: u,
      isLoading: m,
      hasMoreTemplates: _
    },
    [FFileType.WHITEBOARD]: {
      templates: p,
      isLoading: f,
      hasMoreTemplates: g
    },
    [FFileType.SLIDES]: {
      templates: h,
      isLoading: x,
      hasMoreTemplates: b
    },
    [FFileType.FIGMAKE]: {
      templates: v,
      isLoading: y,
      hasMoreTemplates: w
    }
  } = r ? c : d;
  let {
    resources,
    loading,
    hasNextPage
  } = wO({
    limit: MAX_WIDGETS,
    caller: _$$z8.RESOURCE_HUB,
    orgId: r,
    includeContent: !0
  });
  let {
    resources: _resources,
    loading: _loading,
    hasNextPage: _hasNextPage
  } = GO({
    resourceType: ResourceTypeEnum.WIDGET,
    orgId: r,
    teamId: s,
    planTier: e,
    sortBy: SortOptions.Browse.ALL_TIME,
    isTemplatesPublishingDisabledForOrg: !!t
  });
  if (m || f || x || y || loading || _loading) {
    return jsx('div', {
      className: 'x78zum5 xl56j7k x6s0dn4 xg87l8a',
      ref: n.sizeRef,
      children: jsx(_$$k3, {})
    });
  }
  let S = getFeatureFlags().cooper;
  let k = getFeatureFlags().make_template_discovery;
  let R = (resources ?? []).map(e => e.content?.plugin).filter(e => void 0 !== e);
  let A = [];
  if ([...(k ? [{
    resources: v,
    slug: _$$M2.FIGMAKE_TEMPLATES
  }] : []), ...(S ? [{
    resources: u,
    slug: _$$M2.COOPER_TEMPLATES
  }] : []), {
    resources: p,
    slug: _$$M2.FIGJAM_TEMPLATES
  }, {
    resources: h,
    slug: _$$M2.SLIDE_TEMPLATES
  }, {
    resources: R,
    slug: _$$M2.PLUGINS
  }, {
    resources: _resources,
    slug: _$$M2.WIDGETS
  }].forEach(({
    resources: e,
    slug: t
  }) => {
    e && e.length > 0 && A.push(t);
  }), e === FPlanNameType.STARTER && s) {
    return jsx('div', {
      className: 'x78zum5 xdt5ytf x1665zp3',
      ref: n.sizeRef,
      children: jsx(dp, {
        teamId: s
      })
    });
  }
  let O = R.length === 0 && _resources.length === 0;
  let F = u.length + p.length + h.length + v.length;
  if (t && O || F === 0 && O) {
    return jsx('div', {
      className: 'x78zum5 xdt5ytf x1665zp3',
      ref: n.sizeRef,
      children: jsx(du, {
        planTier: e,
        isTemplatesPublishingDisabledForOrg: t
      })
    });
  }
  if (!t) {
    if (F === 0) {
      i = jsx('div', {
        className: 'x78zum5 xdt5ytf xw7yly9',
        children: jsx(dd, {
          planTier: e
        })
      });
    } else if (F < 4) {
      let t = [...v, ...u, ...p, ...h];
      i = jsxs(Fragment, {
        children: [jsx(dy, {
          resourceImpressionTracking: onIntersectionChange,
          numberOfTiles: n.numberOfTiles,
          resources: t ?? []
        }), jsx('div', {
          className: 'x78zum5 xdt5ytf xw7yly9',
          children: jsx(dd, {
            planTier: e
          })
        })]
      });
    } else {
      i = jsxs(Fragment, {
        children: [k && jsx(dE, {
          resourceImpressionTracking: onIntersectionChange,
          numberOfTiles: n.numberOfTiles,
          resources: v,
          hasNextPage: w
        }), S && jsx(dw, {
          resourceImpressionTracking: onIntersectionChange,
          numberOfTiles: n.numberOfTiles,
          resources: u,
          hasNextPage: _
        }), jsx(dT, {
          resourceImpressionTracking: onIntersectionChange,
          numberOfTiles: n.numberOfTiles,
          resources: p,
          hasNextPage: g
        }), jsx(dj, {
          resourceImpressionTracking: onIntersectionChange,
          numberOfTiles: n.numberOfTiles,
          resources: h,
          hasNextPage: b
        }), A.length === 1 && jsx('div', {
          className: 'x78zum5 xdt5ytf xw7yly9',
          children: jsx(dd, {
            planTier: e
          })
        })]
      });
    }
  }
  return jsx('div', {
    className: 'x78zum5 xdt5ytf x1665zp3',
    ref: n.sizeRef,
    children: jsxs(TrackingProvider, {
      name: _$$e7.RESOURCE_HUB_INTERNAL_RESOURCES_HOME_PAGE,
      children: [jsx(oq, {
        tab: PublishSourceType.INTERNAL
      }), A.length > 1 && jsx('div', {
        className: 'x78zum5 x1qughib x6s0dn4 x1a02dak xou54vl',
        children: jsx(dx, {
          resourceTypeSlugs: A
        })
      }), i, jsx(dI, {
        resourceImpressionTracking: onIntersectionChange,
        resources: R ?? [],
        hasNextPage
      }), jsx(dN, {
        resourceImpressionTracking: onIntersectionChange,
        numberOfTiles: n.numberOfTiles,
        resources: _resources ?? [],
        hasNextPage: _hasNextPage
      })]
    })
  });
}
function dy({
  resourceImpressionTracking: e,
  numberOfTiles: t,
  resources: r
}) {
  return jsx(dC, {
    resourceTypeSlug: _$$M2.RECENTLY_ADDED_TEMPLATES,
    resourceImpressionTracking: e,
    numberOfTiles: t,
    resources: r,
    hasNextPage: !1
  });
}
function dw({
  resourceImpressionTracking: e,
  numberOfTiles: t,
  resources: r,
  hasNextPage: s
}) {
  return jsx(dC, {
    resourceTypeSlug: _$$M2.COOPER_TEMPLATES,
    resourceImpressionTracking: e,
    numberOfTiles: t,
    resources: r,
    hasNextPage: s
  });
}
function dj({
  resourceImpressionTracking: e,
  numberOfTiles: t,
  resources: r,
  hasNextPage: s
}) {
  return jsx(dC, {
    resourceTypeSlug: _$$M2.SLIDE_TEMPLATES,
    resourceImpressionTracking: e,
    numberOfTiles: t,
    resources: r,
    hasNextPage: s
  });
}
function dT({
  resourceImpressionTracking: e,
  numberOfTiles: t,
  resources: r,
  hasNextPage: s
}) {
  return jsx(dC, {
    resourceTypeSlug: _$$M2.FIGJAM_TEMPLATES,
    resourceImpressionTracking: e,
    numberOfTiles: t,
    resources: r,
    hasNextPage: s
  });
}
function dE({
  resourceImpressionTracking: e,
  numberOfTiles: t,
  resources: r,
  hasNextPage: s
}) {
  return jsx(dC, {
    resourceTypeSlug: _$$M2.FIGMAKE_TEMPLATES,
    resourceImpressionTracking: e,
    numberOfTiles: t,
    resources: r,
    hasNextPage: s
  });
}
function dI({
  resourceImpressionTracking: e,
  resources: t,
  hasNextPage: r
}) {
  let s = useResourceRouteParams();
  let i = useResourceFuid();
  return t && t.length !== 0 ? jsx(l$, {
    header: _$$i_(_$$M2.PLUGINS),
    route: new _$$U5({
      ...s,
      resourceTypeSlug: _$$M2.PLUGINS
    }, i),
    content: jsx(_$$M3, {
      plugins: t,
      onIntersectionChange: e,
      isOrgTeamBrowsing: !1,
      isLoading: !1,
      loadingRowCount: MAX_WIDGETS,
      layoutV1: 'twoColumn'
    }),
    showSeeMore: !!r
  }) : null;
}
function dN({
  resourceImpressionTracking: e,
  numberOfTiles: t,
  resources: r,
  hasNextPage: s
}) {
  return jsx(dC, {
    resourceTypeSlug: _$$M2.WIDGETS,
    resourceImpressionTracking: e,
    numberOfTiles: t,
    resources: r,
    hasNextPage: s
  });
}
function dC({
  resourceTypeSlug: e,
  resources: t,
  hasNextPage: r,
  resourceImpressionTracking: s,
  numberOfTiles: i
}) {
  let n = useResourceRouteParams();
  let o = useResourceFuid();
  if (t.length === 0) return null;
  let l = !!r || t.length > i;
  return jsx(l$, {
    header: _$$i_(e),
    route: new _$$U5({
      ...n,
      resourceTypeSlug: e
    }, o),
    content: jsx(_$$T4, {
      resources: t.slice(0, i),
      resourceImpressionTracking: s
    }),
    showSeeMore: l
  });
}
let dS = 'resource_hub--pageContainer--0k53S';
function dk({
  planTier: e,
  isTemplatesPublishingDisabledForOrg: t,
  currentOrgId: r,
  currentTeamId: s,
  isCommunityTabDisabledForOrg: i
}) {
  let n;
  let {
    tab
  } = useSafeRouteParams(ResourceHubHomeRouteClass);
  switch (tab) {
    case PublishSourceType.INTERNAL:
      n = jsx(dv, {
        planTier: e,
        currentOrgId: r ?? void 0,
        currentTeamId: s ?? void 0,
        isTemplatesPublishingDisabledForOrg: t
      });
      break;
    case PublishSourceType.COMMUNITY:
      n = jsx(l5, {
        currentOrgId: r ?? void 0,
        isCommunityTabDisabledForOrg: i
      });
      break;
    default:
      throwTypeError(tab);
  }
  return jsx('div', {
    className: dS,
    children: n
  });
}
function dF() {
  let e = useCurrentPrivilegedPlan('useTeamTemplatesPageData');
  let {
    templatesTeamId,
    resourceTypeSlug
  } = useRouteParams(_$$U5) ?? {};
  let a = null;
  if (resourceTypeSlug) {
    try {
      let e = W6(resourceTypeSlug);
      e.length > 0 && e[0] && (a = mapVtToFileType(e[0]));
    } catch {}
  }
  let s = e.data?.type === FOrganizationLevelType.ORG ? templatesTeamId : e.data?.key.parentId;
  return _$$li({
    teamId: s ?? null,
    editorType: a,
    enabled: !!a && !!s && e.status === 'loaded'
  });
}
function dP() {
  let {
    requestLoadMoreForTeam,
    templatesByTeam,
    isLoading
  } = dF();
  let {
    onIntersectionChange
  } = l3(void 0, templatesByTeam?.teamId);
  let n = useRef(null);
  let o = useRef(null);
  return (_$$X5({
    containerRef: n,
    targetRef: o,
    onIntersectionChange: requestLoadMoreForTeam
  }), isLoading || !templatesByTeam) ? null : jsxs('div', {
    ref: n,
    children: [jsx(_$$T4, {
      resources: templatesByTeam?.templates ?? [],
      resourceImpressionTracking: onIntersectionChange
    }), jsx('div', {
      ref: o
    })]
  });
}
function dL({
  resourceType: e,
  planTier: t,
  orgId: r,
  internalResourcesRoute: i,
  resourceImpressionTracking: n
}) {
  let o;
  let l = mapVtToFileType(e);
  let d = _$$X4();
  let {
    onIntersectionChange
  } = l3(r ?? void 0, void 0);
  let {
    teamTemplates,
    isLoading,
    requestLoadMoreForOrg
  } = _$$e13({
    orgId: r,
    areWorkspacesEnabled: t === FPlanNameType.ENTERPRISE,
    numTemplatesPerTeam: MAX_DESCRIPTION_LENGTH2 + 1,
    editorType: l,
    filterByIds: null,
    enabled: !!l
  });
  let p = teamTemplates?.[teamTemplates.length - 1]?.teamId ?? null;
  let f = useRef(null);
  _$$X5({
    containerRef: d.sizeRef,
    targetRef: f,
    targetKey: p,
    onIntersectionChange: requestLoadMoreForOrg
  });
  o = isLoading ? null : teamTemplates.length === 0 ? jsx(du, {
    planTier: t
  }) : teamTemplates.map(e => {
    let t = e.teamName ?? '';
    let r = e.templates.length > d.numberOfTiles;
    let s = e.templates.slice(0, d.numberOfTiles).map(e => e.template);
    let n = i.copyWith({
      templatesTeamId: e.teamId
    }, void 0);
    return jsx('div', {
      ref: e.teamId === p ? f : null,
      children: jsx(l$, {
        header: getI18nString('community.resource_hub.internal_tab', {
          orgOrTeamName: t
        }),
        route: n,
        content: jsx(_$$T4, {
          resources: s,
          resourceImpressionTracking: onIntersectionChange
        }),
        showSeeMore: r
      })
    }, e.teamId);
  });
  return jsx(_$$P2, {
    scrollContainerRef: d.sizeRef,
    children: jsx('div', {
      className: 'x78zum5 xdt5ytf xou54vl x1120s5i',
      children: o
    })
  });
}
function dD({
  planTier: e,
  currentOrgId: t,
  currentTeamId: r,
  fallbackRedirectRoute: i
}) {
  let n;
  let l = getFeatureFlags().cooper;
  let d = useSafeRouteStateInstance(_$$U5);
  let {
    resourceTypeSlug,
    templatesTeamId
  } = d.params;
  let {
    onIntersectionChange,
    flushAndResetImpressions
  } = l3(t ?? void 0, r ?? void 0);
  if (useEffect(() => {
    flushAndResetImpressions();
  }, [resourceTypeSlug, flushAndResetImpressions]), !resourceTypeSlug) {
    customHistory.redirect(i.href);
    return null;
  }
  let f = W6(resourceTypeSlug).filter(e => l || e !== ResourceTypeEnum.COOPER_TEMPLATE_FILE);
  return f.length === 0 ? null : (f[0] && Pe(e, f[0]) && (n = f[0] === ResourceTypeEnum.PLUGIN ? jsx(dB, {
    orgId: t ?? void 0,
    resourceImpressionTracking: onIntersectionChange,
    planTier: e
  }) : f[0] === ResourceTypeEnum.WIDGET || resourceTypeSlug === _$$M2.RECENTLY_ADDED_TEMPLATES ? jsx(dM, {
    resourceTypes: f,
    orgId: t ?? void 0,
    teamId: r ?? void 0,
    resourceImpressionTracking: onIntersectionChange,
    planTier: e
  }) : r || templatesTeamId ? jsx(dP, {}) : jsx(dL, {
    resourceType: f[0],
    planTier: e,
    orgId: t ?? '',
    internalResourcesRoute: d,
    resourceImpressionTracking: onIntersectionChange
  })), jsx(TrackingProvider, {
    name: _$$e7.RESOURCE_HUB_INTERNAL_RESOURCES_PAGE,
    children: jsx('div', {
      className: dS,
      children: n
    })
  }));
}
function dM({
  resourceTypes: e,
  orgId: t,
  teamId: r,
  resourceImpressionTracking: s,
  planTier: i
}) {
  let n = _$$X4();
  let {
    resources,
    loading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
  } = _$$yH2({
    resourceTypes: e,
    limit: MAX_DESCRIPTION_LENGTH2,
    caller: _$$z8.RESOURCE_HUB,
    orgId: t,
    teamId: r,
    includeContent: !0,
    sortBy: e.some(e => [ResourceTypeEnum.SLIDE_TEMPLATE, ResourceTypeEnum.COOPER_TEMPLATE_FILE, ResourceTypeEnum.FIGJAM_TEMPLATE].includes(e)) ? SortOptions.Browse.PUBLISHED_AT : SortOptions.Browse.ALL_TIME
  });
  if (!loading && (!resources || resources.length === 0)) {
    return jsx(du, {
      planTier: i
    });
  }
  let m = n.numberOfTiles;
  return jsxs('div', {
    ref: n.sizeRef,
    children: [jsx(_$$T4, {
      resources: resources ?? [],
      isLoading: loading,
      loadingTileCount: m * MAX_BANNER_CLICKS,
      resourceImpressionTracking: s
    }), jsx(_$$D4, {
      useInfiniteScroll: !0,
      fetchNextPage,
      isFetchingNextPage,
      hasNextPage: !!hasNextPage,
      containerRef: n.sizeRef
    })]
  });
}
function dB({
  orgId: e,
  resourceImpressionTracking: t,
  planTier: r
}) {
  let {
    resources,
    loading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage
  } = wO({
    limit: 10,
    caller: _$$z8.RESOURCE_HUB,
    orgId: e,
    includeContent: !0
  });
  let c = useRef(null);
  return loading || resources && resources.length !== 0 ? jsxs('div', {
    ref: c,
    children: [jsx(_$$M3, {
      plugins: (resources ?? []).map(e => e.content?.plugin).filter(e => void 0 !== e),
      onIntersectionChange: t,
      isOrgTeamBrowsing: !1,
      isLoading: loading
    }), jsx(_$$D4, {
      useInfiniteScroll: !0,
      fetchNextPage,
      isFetchingNextPage,
      hasNextPage: !!hasNextPage,
      containerRef: c
    })]
  }) : jsx(du, {
    planTier: r
  });
}
function dY({
  text: e,
  isSelected: t,
  onClick: r
}) {
  return jsx(ButtonPrimitive, {
    'aria-label': e,
    'aria-pressed': t,
    'className': U()(_$$x4, Mg, 'category_link_pill--tagPill--vb98J', t && _$$wH),
    'onClick': r,
    'children': jsx('span', {
      className: U()(IO, 'category_link_pill--tagPillContent--tADeA'),
      children: e
    })
  });
}
function dJ({
  links: e
}) {
  let t = useSafeRouteStateInstance(ResourceHubCategoryRoute);
  let {
    tagSlug
  } = useSafeRouteParams(ResourceHubCategoryRoute);
  let i = useRef(null);
  let [n, o] = useState(!1);
  let [l, d] = useState(!1);
  let c = _$$l4();
  let [m, _] = useState(0);
  let [p, f] = useState(0);
  useLayoutEffect(() => {
    if (!i.current) return;
    let t = Array.from(i.current.children).filter(e => !e.className.includes('expansionButton'));
    if (l) {
      t.every(e => e.offsetTop === 0) && d(!1);
      i.current.scrollWidth > i.current.clientWidth && (d(!1), _(-1));
    } else if (i.current.scrollWidth > i.current.clientWidth) {
      let e = i.current.clientWidth - 83;
      let r = Array.from(t).findIndex(t => t.offsetLeft + t.offsetWidth > e) - 1;
      if (_(r), r < 0) {
        o(!1);
        return;
      }
      f(t[r].offsetLeft + t[r].offsetWidth + 8);
      o(!0);
    } else {
      _(e.length - 1);
      o(!1);
    }
  }, [l, n, c, e]);
  return jsx(Fragment, {
    children: jsxs('div', {
      ..._$$xk(dq.container, l ? dq.expandedContainer : dq.collapsedContainer),
      ref: i,
      children: [e.map(({
        to: e,
        translatedTitle: i,
        categorySlug: n,
        tagSlug: o
      }, d) => {
        let c = !!(o && tagSlug && o === tagSlug);
        let _ = l || d <= m;
        return createElement('div', {
          ..._$$xk(dq.pillContainer, !_ && dq.hiddenPill),
          key: e
        }, jsx(dY, {
          text: i,
          categoryTagSlug: o,
          onClick: () => {
            if (c) {
              let e = t.copyWith({
                categorySlug: n,
                tagSlug: void 0
              }).href;
              _$$uo3(t.href, e);
              customHistory.push(e);
            } else {
              _$$uo3(t.href, e);
              customHistory.push(e);
            }
          },
          isSelected: c
        }));
      }), (n || l) && jsx(ButtonPrimitive, {
        className: 'expansion-button',
        ..._$$xk(dq.expansionButton),
        style: n ? {
          left: `${p}px`,
          position: 'absolute'
        } : {},
        onClick: () => {
          o(!n);
          d(!l);
        },
        children: n ? getI18nString('community.shelves.show_more') : getI18nString('community.detail_view.show_less')
      })]
    })
  });
}
let dq = {
  collapsedContainer: {
    flexWrap: 'xozqiw3',
    $$css: !0
  },
  expandedContainer: {
    flexWrap: 'x1a02dak',
    $$css: !0
  },
  container: {
    display: 'x78zum5',
    gap: 'x167g77z',
    rowGap: null,
    columnGap: null,
    maxWidth: 'x193iq5w',
    $$css: !0
  },
  pillContainer: {
    flex: 'xkz0k9k',
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    $$css: !0
  },
  hiddenPill: {
    visibility: 'xlshs6z',
    $$css: !0
  },
  expansionButton: {
    'whiteSpace': 'xuxw1ft',
    'color': 'x1n0bwc9',
    'outlineWidth': 'x1qgsegg',
    'outlineStyle': 'xaatb59',
    'outlineColor': 'xru40mv',
    'borderRadius': 'x1sxf85j',
    'borderStartStartRadius': null,
    'borderStartEndRadius': null,
    'borderEndStartRadius': null,
    'borderEndEndRadius': null,
    'borderTopLeftRadius': null,
    'borderTopRightRadius': null,
    'borderBottomLeftRadius': null,
    'borderBottomRightRadius': null,
    'padding': 'xdqdrvq',
    'paddingInline': null,
    'paddingStart': null,
    'paddingLeft': null,
    'paddingEnd': null,
    'paddingRight': null,
    'paddingBlock': null,
    'paddingTop': null,
    'paddingBottom': null,
    'outlineOffset': 'x1g40iwv',
    ..._$$g3.textBodyMedium,
    ':hover_backgroundColor': 'x133fa97',
    '$$css': !0
  }
};
function dX({
  category: e,
  showTags: t = !1
}) {
  let r = useSafeRouteStateInstance(ResourceHubCategoryRoute);
  let s = getValueOrFallback(e.url_slug, TemplateCategory);
  if (!s) return null;
  let i = _$$m2(e, s, t, r);
  return jsx('div', {
    className: 'x78zum5 x167g77z xgp1u7p',
    children: jsx(dJ, {
      links: i
    })
  });
}
function dZ() {
  let e = _$$X4();
  let t = useSafeRouteStateInstance(ResourceHubCategoryRoute);
  useCategoryResourceHandler(t);
  let r = t.params;
  let {
    categorySlug,
    tagSlug
  } = r;
  let [o, l] = useState(null);
  let d = t.search;
  let c = getCurrentLocale();
  let [{
    data: u,
    status: m
  }] = setupResourceAtomHandler(categoryBySlugQuery({
    categorySlug,
    tagSlug,
    locale: c
  }));
  let _ = m === 'loading';
  useEffect(() => {
    u && !_ && l(u);
  }, [u, _]);
  let p = _$$V5(r, d, MAX_DESCRIPTION_LENGTH2);
  let g = p.filterState;
  return jsx(TrackingProvider, {
    name: _$$e7.RESOURCE_HUB_CATEGORY,
    properties: {
      category: categorySlug,
      tag: tagSlug
    },
    children: jsx('div', {
      className: 'x78zum5 xdt5ytf xou54vl x1gan7if',
      ref: e.sizeRef,
      children: o ? jsxs(Fragment, {
        children: [jsxs('div', {
          className: 'x78zum5 x1qughib x1cy8zhl xozqiw3 xou54vl',
          children: [jsx('div', {
            className: 'x78zum5 xdt5ytf x1n2onr6 x12lumcd xeuugli',
            children: jsx(dX, {
              category: o,
              showTags: !!o.tags.length
            })
          }), jsx('div', {
            className: 'x78zum5 x13a6bvl x3psx0u xuxw1ft',
            children: jsx(_$$W4, {
              context: _$$gM.CATEGORY,
              filterState: g,
              allowedEditorTypes: o.editor_types,
              showEditorFilter: !0,
              showResourceTypeFilter: categorySlug !== TemplateCategory.make,
              showPriceFilter: categorySlug !== TemplateCategory.make,
              allowMixedResourceType: !1
            })
          })]
        }), jsx('div', {
          className: 'xw7yly9',
          children: jsx(_$$e14, {
            category: o,
            categoryPageData: p,
            numTilesPerRow: e.numberOfTiles
          })
        })]
      }) : jsx('div', {
        className: 'x7z7khe',
        children: jsx(_$$y$2, {})
      })
    })
  });
}
let d4 = userFlagExistsAtomFamily(_$$xH);
function d2({
  isCommunityTabDisabledForOrg: e
}) {
  let t = useAtomWithSubscription(d4);
  let r = _$$P4() === PublishSourceType.COMMUNITY;
  let {
    show,
    isShowing,
    complete
  } = _$$e3({
    overlay: cvy,
    priority: _$$N.DEFAULT_MODAL
  }, [t]);
  _$$h(() => {
    show({
      canShow: t => !t && !r && !e
    });
  });
  return jsx(_$$rq, {
    arrowPosition: F_.TOP,
    clickOutsideToHide: !0,
    description: renderI18nText('community.resource_hub.see_what_community_has_to_offer'),
    emphasized: !0,
    isShowing,
    onClose: complete,
    primaryCta: {
      label: renderI18nText('community.resource_hub.got_it'),
      type: 'button',
      onClick: () => complete(),
      ctaTrackingDescriptor: UpgradeAction.GOT_IT
    },
    targetKey: d5,
    title: renderI18nText('community.resource_hub.get_more_inspiration'),
    trackingContextName: HH.COMMUNITY_TAB_ONBOARDING_OVERLAY,
    userFlagOnShow: _$$xH,
    width: 240
  });
}
let d5 = 'resource_hub_community_tab';
function d8({
  selectedTab: e,
  orgOrTeamName: t,
  isCommunityTabDisabledForOrg: r
}) {
  let s = useDispatch();
  let n = useSafeRouteStateInstance(ResourceHubHomeRouteClass);
  let o = useSelector(e => e.userFlags);
  let l = e => {
    e !== PublishSourceType.COMMUNITY || o[w3] || s(postUserFlag({
      [w3]: !0
    }));
    _$$_K(e);
    customHistory.push(n.copyWith({
      tab: e
    }).href);
  };
  let [d, c, m] = _$$t5.useManagedTabs({
    [PublishSourceType.INTERNAL]: !0,
    [PublishSourceType.COMMUNITY]: !0
  }, e, e => {
    l(e);
  });
  let _ = Object.keys(PublishSourceType).map(e => {
    let r = PublishSourceType[e] === PublishSourceType.COMMUNITY;
    return jsx(_$$t5.Tab, {
      ...d[PublishSourceType[e]],
      ...(r && {
        'data-onboarding-key': d5
      }),
      children: function (e, t) {
        switch (e) {
          case PublishSourceType.INTERNAL:
            if (t) {
              return getI18nString('community.resource_hub.internal_tab', {
                orgOrTeamName: t
              });
            }
            return getI18nString('community.resource_hub.internal_tab_default');
          case PublishSourceType.COMMUNITY:
            return getI18nString('community.resource_hub.community_tab');
          default:
            throwTypeError(e);
        }
      }(PublishSourceType[e], t)
    }, e);
  });
  return jsxs('div', {
    children: [jsx(_$$t5.TabStrip, {
      manager: m,
      children: _
    }), jsx(d2, {
      isCommunityTabDisabledForOrg: r
    })]
  });
}
function cs({
  onSelect: e,
  orgOrTeamName: t
}) {
  let r = getActiveResourceHubSearchRoute();
  let i = useResourceRouteParams();
  let n = useResourceFuid();
  let o = useSafeRouteParams(ResourceHubHomeRouteClass).tab;
  let [l, d] = useState(o);
  useEffect(() => {
    d(o);
    e?.(o);
  }, [o, e]);
  return jsx(DropdownThemeProvider, {
    mode: 'match',
    children: jsx('div', {
      className: 'x1iog12x x1db2dqx',
      children: jsxs(_$$bL3, {
        value: l,
        onChange: t => {
          if (t !== l && (d(t), e?.(t), r && i && n)) {
            let e = new (t === PublishSourceType.INTERNAL ? ResourceHubInternalSearchRoute : ResourceHubSearchRoute)(i, {
              ...n,
              query: r.search.query,
              editor_type: r.search.editor_type,
              resource_type: r.search.resource_type
            });
            customHistory.push(e.href);
          }
        },
        children: [jsx(_$$l5, {
          iconLead: jsx(_$$h8, {}),
          label: jsx(HiddenLabel, {
            children: getI18nString('community.search.select_search_scope')
          })
        }), jsxs(_$$mc3, {
          children: [jsx(_$$c$2, {
            value: PublishSourceType.COMMUNITY,
            children: getI18nString('community.community')
          }), jsx(_$$c$2, {
            value: PublishSourceType.INTERNAL,
            children: t
          })]
        })]
      })
    })
  });
}
function ci() {
  let {
    onSubmit,
    setSelectedDropdownTab
  } = function () {
    let e = _$$P4();
    let t = useRouteParams(ResourceHubHomeRouteClass)?.tab || e;
    let [r, a] = useState(t);
    let i = r === PublishSourceType.INTERNAL ? ResourceHubInternalSearchRoute : ResourceHubSearchRoute;
    let n = getActiveResourceHubSearchRoute();
    let o = !!n;
    let l = useResourceRouteParams();
    let d = useResourceFuid();
    return {
      onSubmit: e => {
        let t;
        if (t = n ? n.copyWith({}, {
          query: e
        }).href : new i(l, {
          ...d,
          query: e
        }).href, e.length) {
          customHistory.push(t);
        } else if (o) {
          let e = new ResourceHubHomeRouteClass({
            ...l,
            tab: r
          }, d).href;
          customHistory.push(e);
        }
      },
      setSelectedDropdownTab: a
    };
  }();
  return isResourceHubInternalSearchEnabled() ? jsx(cn, {
    onSubmit,
    setSelectedDropdownTab
  }) : jsx('div', {
    className: 'xhs4bwn xh8yej3 x78zum5 x13a6bvl x4pepcl',
    children: jsx(_$$S6, {
      onSubmit,
      isMobile: !1
    })
  });
}
function cn({
  onSubmit: e,
  setSelectedDropdownTab: t
}) {
  let r = useCurrentPrivilegedPlan('ResourceHubApp');
  let n = _$$LQ(r);
  let o = r.data?.name || '';
  let l = r.status === 'loaded' && !n;
  let d = getActiveResourceHubSearchRoute();
  let c = !!d;
  let u = d?.search.query;
  let m = useDispatch();
  let [_, p] = useState('');
  let f = useDebouncedCallback(e, 400);
  let [g, h] = useState(!1);
  let x = l && (g || c || _);
  let b = x ? '' : getI18nString('community.search.search_templates_and_tools');
  let v = jsx(_$$h8, {
    className: 'xmaevd6'
  });
  useEffect(() => {
    c && u && p(u);
    c || m(searchEndSession());
  }, [c]);
  let y = useCallback(() => {
    p('');
  }, []);
  useEffect(() => {
    c || y();
  }, [y, c]);
  return jsxs(InputComponent.Root, {
    size: 'lg',
    onFocus: () => {
      h(!0);
      c || m(searchStartSession({
        entryPoint: 'resource_hub'
      }));
    },
    onBlur: e => {
      e.currentTarget.contains(e.relatedTarget) || h(!1);
    },
    children: [x && jsx('div', {
      className: 'xpnmzw7 x78zum5 x2lah0s xt0e3qv',
      children: jsx(cs, {
        orgOrTeamName: o,
        onSelect: t
      })
    }), !x && v, jsx(InputComponent, {
      'value': _,
      'onChange': e => {
        p(e);
        e && f(e);
      },
      'aria-label': getI18nString('community.search.search_templates_and_tools'),
      'placeholder': b
    }), _.length > 0 && jsx(ButtonPrimitive, {
      className: 'xt0e3qv xy13l1i',
      onClick: () => {
        p('');
        c && (h(!1), e(''));
        m(searchEndSession());
      },
      children: jsx(_$$L4, {})
    })]
  });
}
function co({
  orgOrTeamName: e,
  isCommunityTabDisabledForOrg: t
}) {
  let {
    tab
  } = useSafeRouteParams(ResourceHubHomeRouteClass);
  let s = !!useRouteStateInstance(ResourceHubResourceRoute);
  let i = tab === PublishSourceType.COMMUNITY && !t && !s && !isResourceHubInternalSearchEnabled();
  let n = jsx('div', {
    className: 'xqyf9gi',
    children: jsx(ci, {}, 'resource-hub-search-bar')
  });
  return jsx(_$$g4, {
    leftSide: jsx(cl, {
      selectedTab: tab || PublishSourceType.INTERNAL,
      orgOrTeamName: e,
      isCommunityTabDisabledForOrg: t
    }),
    rightSide: i ? [n] : []
  });
}
function cl({
  selectedTab: e,
  orgOrTeamName: t,
  isCommunityTabDisabledForOrg: r
}) {
  let s = !!getActiveSearchRouteWithCommunity();
  let i = useRouteMatchExists(ResourceHubHomeRouteClass, !0);
  let n = useRouteStateInstance(ResourceHubCategoryRoute);
  let o = useRouteStateInstance(_$$U5);
  let l = useRouteStateInstance(_$$e11);
  let {
    templatesByTeam
  } = dF();
  if (i) {
    return jsx(d8, {
      selectedTab: e,
      orgOrTeamName: t,
      isCommunityTabDisabledForOrg: r
    });
  }
  let c = '';
  return s || n || o || l ? (s ? c = e === PublishSourceType.INTERNAL ? t ? getI18nString('community.search.search_results_from_org_or_team', {
    orgOrTeamName: t
  }) : getI18nString('community.search.search_results') : getI18nString('community.search.search_results_from_community') : o ? (c = _$$i_(o.params.resourceTypeSlug), o.params.templatesTeamId && (c = templatesByTeam?.teamName ? getI18nString('community.resource_hub.internal_tab', {
    orgOrTeamName: templatesByTeam.teamName
  }) : '')) : n ? c = lr(n.params.categorySlug, void 0, n.search.resource_type) || '' : l && (c = getI18nString('community.saves.saved_by_me')), jsx('h1', {
    ..._$$xk(cd.headerText),
    children: c
  })) : null;
}
let cd = {
  headerText: {
    ..._$$g3.textHeadingMedium,
    $$css: !0
  }
};
function ch() {
  let e = useDispatch();
  let t = useSafeRouteParams(ResourceHubResourceRoute);
  let r = t.apiResourceType;
  let n = t.resourceId;
  let [o] = setupResourceAtomHandler(_$$Z({
    apiResourceType: r,
    id: n
  }));
  let l = o.data;
  let d = l && hasContent(l) ? getMainContent(l) : l;
  useEffect(() => {
    d && _$$S7(e, d);
  }, [e, d]);
  let c = _$$eJ();
  let u = getSearchSessionIdFromSelector();
  let m = getCurrentQueryId();
  let _ = _$$W2(r, n, u, m);
  if (!l || !d) return jsx(Fragment, {});
  let p = isFigmakeTemplate(l);
  return jsx(TrackingProvider, {
    name: _$$e7.RESOURCE_HUB_COMMUNITY_RESOURCE_DETAIL_PAGE,
    properties: _,
    children: jsxs('div', {
      children: [p ? jsx(_$$Y4, {
        resource: l,
        resourceContent: d
      }) : jsx(_$$Y5, {
        resource: l,
        resourceContent: d
      }), jsx(X6, {
        resource: l,
        resourceContent: d,
        rdpImpressionId: c
      })]
    })
  });
}
function cv() {
  let e;
  let {
    color
  } = useTheme();
  e = color === 'dark' ? buildUploadUrl('7ab53d43da451ec79f8b986fd66e173285e8f890') : buildUploadUrl('09318ceb86318f7b9246ee48a8634ef0d126c06f');
  return jsxs('div', {
    className: 'x78zum5 xdt5ytf x6s0dn4 xh8yej3 x16g6g8t xgqmno8 x1sjmt1f xl56j7k',
    children: [jsx('div', {
      className: 'x78zum5 xdt5ytf x6s0dn4 xvue9z x2lah0s xl0j6f1 x1wft13i',
      children: jsx(_$$oW, {
        className: 'x193iq5w xl1xv1r',
        src: e,
        alt: getI18nString('community.saves.no_saves_title'),
        loading: 'lazy'
      })
    }), jsx('div', {
      className: 'x78zum5 xdt5ytf x1665zp3 xz84dc7 xo3t2mw x6s0dn4 xl2nq6h x1bzacg x14ilqb x1egpy1l',
      children: jsxs('div', {
        className: 'x78zum5 xdt5ytf x6s0dn4 x167g77z xkh2ocl xh8yej3 x2lah0s',
        children: [jsx('div', {
          ..._$$xk(cy.heading),
          children: getI18nString('community.saves.no_saves_heading')
        }), jsx('div', {
          ..._$$xk(cy.description),
          children: getI18nString('community.saves.no_saves_subheading')
        })]
      })
    })]
  });
}
let cy = {
  heading: {
    color: 'x1akne3o',
    ..._$$g3.textHeadingMedium,
    textAlign: 'x2b8uid',
    $$css: !0
  },
  description: {
    color: 'x1n0bwc9',
    ..._$$g3.textBodyMedium,
    textAlign: 'x2b8uid',
    $$css: !0
  }
};
function cw() {
  let e = getUserId() ?? void 0;
  let t = useSafeRouteStateInstance(_$$e11);
  let r = _$$X4();
  let {
    resourceType
  } = t.params;
  let i = resourceType ? jsx(cT, {
    resourceType,
    currentUserId: e,
    sizingInfo: r
  }) : jsx(cj, {
    currentUserId: e,
    sizingInfo: r
  });
  return jsx('div', {
    className: dS,
    ref: r.sizeRef,
    children: jsx(TrackingProvider, {
      name: _$$e7.RESOURCE_HUB_SAVES_PAGE,
      children: i
    })
  });
}
function cj({
  currentUserId: e,
  sizingInfo: t
}) {
  let {
    trackResourceImpression
  } = GS({
    extraProperties: {
      tab: 'saves'
    }
  });
  let i = useCallback((e, t) => {
    t && trackResourceImpression(e);
  }, [trackResourceImpression]);
  let n = useCallback((e, t) => {
    t && trackResourceImpression(e);
  }, [trackResourceImpression]);
  let {
    resources,
    loading,
    hasNextPage
  } = lT({
    resourceType: getResourceTypesForBrowse(ResourceTypeSubset.FILES),
    resourceCount: 2 * t.numberOfTiles,
    caller: _$$z8.RESOURCE_HUB,
    savedByUserId: e,
    includeContent: !1,
    enabled: !!e
  });
  let {
    resources: _resources2,
    loading: _loading2,
    hasNextPage: _hasNextPage2
  } = lT({
    resourceType: getResourceTypesForBrowse(ResourceTypeSubset.PLUGINS),
    resourceCount: MAX_WIDGETS,
    caller: _$$z8.RESOURCE_HUB,
    savedByUserId: e,
    includeContent: !0,
    enabled: !!e
  });
  let {
    resources: _resources3,
    loading: _loading3,
    hasNextPage: _hasNextPage3
  } = lT({
    resourceType: getResourceTypesForBrowse(ResourceTypeSubset.WIDGETS),
    resourceCount: 2 * t.numberOfTiles,
    caller: _$$z8.RESOURCE_HUB,
    savedByUserId: e,
    includeContent: !1,
    enabled: !!e
  });
  return loading || _loading2 || _loading3 ? jsx('div', {
    className: 'x78zum5 xl56j7k x6s0dn4 x4ygwfs',
    children: jsx(LoadingSpinner, {})
  }) : resources?.length === 0 && _resources2?.length === 0 && _resources3?.length === 0 ? jsx('div', {
    className: dS,
    children: jsx(cv, {})
  }) : jsxs('div', {
    className: 'x78zum5 xdt5ytf xnfooyd',
    children: [jsx(cE, {
      resources: resources ?? [],
      resourceType: ResourceTypeSubset.FILES,
      header: getI18nString('community.saves.all_files'),
      numTilesPerRow: t.numberOfTiles,
      hasNextPage: !!hasNextPage,
      resourceImpressionTracking: n
    }), jsx(cI, {
      resources: (_resources2 ?? []).map(e => e.content?.plugin).filter(e => void 0 !== e),
      hasNextPage: !!_hasNextPage2,
      resourceImpressionTracking: i
    }), jsx(cE, {
      resources: _resources3 ?? [],
      resourceType: ResourceTypeSubset.WIDGETS,
      header: getI18nString('community.view_bar.widgets'),
      numTilesPerRow: t.numberOfTiles,
      hasNextPage: !!_hasNextPage3,
      resourceImpressionTracking: n
    })]
  });
}
function cT({
  resourceType: e,
  currentUserId: t,
  sizingInfo: r
}) {
  let i = useRef(null);
  let {
    trackResourceImpression
  } = GS({
    extraProperties: {
      tab: 'saves',
      resourceType: e
    }
  });
  let [{
    data: o,
    status: l,
    hasNextPage: d,
    isFetchingNextPage: c
  }, {
    fetchNextPage: u
  }] = setupResourceAtomHandler(_$$a0.ResourcesPaginatedQuery({
    resourceType: getResourceTypesForBrowse(e),
    caller: _$$z8.RESOURCE_HUB,
    savedByUserId: t,
    pageSize: MAX_DESCRIPTION_LENGTH2,
    includeContent: e === ResourceTypeSubset.PLUGINS
  }), {
    enabled: !!t
  });
  return jsxs('div', {
    ref: i,
    children: [jsx(_$$O3, {
      resourcesLoading: l === 'loading',
      totalResources: o ?? [],
      numTilesPerRow: r.numberOfTiles,
      hasNextPage: !!d,
      trackResourceImpression,
      filterState: {
        ..._$$c5(),
        resourceType: e
      },
      customLoadingView: jsx('div', {
        className: 'x78zum5 xl56j7k x6s0dn4 x4ygwfs',
        children: jsx(LoadingSpinner, {})
      }),
      emptyResourceStateQuery: e
    }), d && jsx(_$$D4, {
      useInfiniteScroll: !0,
      fetchNextPage: u,
      isFetchingNextPage: c,
      hasNextPage: d,
      containerRef: i
    })]
  });
}
function cE({
  resources: e,
  resourceType: t,
  header: r,
  numTilesPerRow: s,
  hasNextPage: i,
  resourceImpressionTracking: n
}) {
  let o = useResourceRouteParams();
  let l = useResourceFuid();
  if (e.length === 0) return null;
  let d = !!i || e.length > 2 * s;
  return jsx(l$, {
    header: r,
    content: jsx(_$$T4, {
      resources: e.slice(0, 2 * s),
      resourceImpressionTracking: n
    }),
    route: new _$$e11({
      ...o,
      resourceType: t
    }, l),
    showSeeMore: d
  });
}
function cI({
  resources: e,
  hasNextPage: t,
  resourceImpressionTracking: r
}) {
  let s = useResourceRouteParams();
  let i = useResourceFuid();
  return e.length === 0 ? null : jsx(l$, {
    header: getI18nString('community.view_bar.plugins'),
    content: jsx(_$$M3, {
      plugins: e,
      onIntersectionChange: r,
      isOrgTeamBrowsing: !1,
      isLoading: !1,
      loadingRowCount: MAX_WIDGETS,
      layoutV1: 'twoColumn'
    }),
    route: new _$$e11({
      ...s,
      resourceType: ResourceTypeSubset.PLUGINS
    }, i),
    showSeeMore: !!t
  });
}
function cO({
  selectedTab: e,
  resultsByType: t,
  filtersControlState: r
}) {
  let s = getActiveResourceHubSearchRouteStrict();
  let i = s instanceof ResourceHubSearchRoute ? PublishSourceType.COMMUNITY : PublishSourceType.INTERNAL;
  let n = useResourceFuid();
  let o = _$$v6(t);
  let l = (e, t) => {
    let r = s.copyWith({}, {
      ...n,
      resource_type: t
    }).href;
    customHistory.push(r);
    trackEventAnalytics('resource_type_filter_changed', {
      resource_type: t,
      from: e
    });
  };
  let [d, c, m] = _$$t5.useManagedTabs({
    [ResourceTypeSubset.FILES]: !0,
    [ResourceTypeSubset.PLUGINS]: !0,
    [ResourceTypeSubset.WIDGETS]: !0
  }, e, t => {
    l(e, t);
  });
  let _ = Object.keys(ResourceTypeSubset).map(e => {
    let {
      count = 0,
      hasMore
    } = o[ResourceTypeSubset[e]];
    return jsxs(_$$t5.Tab, {
      ...d[ResourceTypeSubset[e]],
      children: [jsx('span', {
        children: function (e, t) {
          switch (e) {
            case ResourceTypeSubset.FILES:
              if (t === PublishSourceType.COMMUNITY) return getI18nString('community.view_bar.files_and_templates_tab');
              return getI18nString('community.view_bar.templates_tab');
            case ResourceTypeSubset.PLUGINS:
              return getI18nString('community.view_bar.plugins');
            case ResourceTypeSubset.WIDGETS:
              return getI18nString('community.view_bar.widgets');
            default:
              throwTypeError(e);
          }
        }(ResourceTypeSubset[e], i)
      }), jsx('span', {
        children: ` (${count ?? 0}${hasMore ? '+' : ''})`
      })]
    }, e);
  });
  return jsx('div', {
    children: jsx(_$$g4, {
      leftSide: jsx(_$$t5.TabStrip, {
        manager: m,
        children: _
      }),
      rightSide: [jsx(_$$W4, {
        context: _$$gM.SEARCH,
        filterState: r,
        showEditorFilter: !0,
        showResourceTypeFilter: !1,
        showPriceFilter: i !== PublishSourceType.INTERNAL
      }, 'filters')]
    })
  });
}
function cF({
  onSearchInCommunity: e
}) {
  return jsx('div', {
    className: 'x19y5rnk xb3r6kr',
    children: jsxs(BannerFullWidth, {
      variant: 'brand',
      icon: jsx(_$$U4, {}),
      children: [jsx(BannerMessage, {
        title: getI18nString('community.search.search_in_community_banner.title'),
        children: getI18nString('community.search.search_in_community_banner.description')
      }), jsx(_$$N4, {
        href: '#',
        onClick: e,
        children: getI18nString('community.search.search_in_community_banner.cta')
      })]
    })
  });
}
let cP = e => ({
  query: e.search.query ?? '',
  editor_type: e.search.editor_type ?? _$$k4.Editors.ALL,
  price: e.search.price ?? PricingOptions.Price.ALL,
  resource_type: e.search.resource_type ?? ResourceTypeSubset.FILES
});
function cL({
  currentOrgId: e,
  currentTeamId: t
}) {
  let r = !!(e || t);
  let i = getActiveResourceHubSearchRouteStrict();
  syncEditorResourceWithHistory(i, r);
  let n = cP(i);
  let o = n.resource_type;
  let {
    trackResourceImpression,
    flushAndResetResourceImpressions
  } = GS({
    extraProperties: {
      resourceType: n.resource_type
    }
  });
  let c = useMemo(() => ({
    resourceType: n.resource_type,
    editorType: n.editor_type ?? _$$k4.Editors.ALL,
    price: n.price,
    sortBy: getAllTimeSortOption()
  }), [n]);
  useEffect(() => {
    flushAndResetResourceImpressions();
  }, [n.resource_type, n.query, n.editor_type, n.price, flushAndResetResourceImpressions]);
  let {
    resultsByType,
    loadedStatusByType
  } = _$$_w(useMemo(() => ({
    query: n.query,
    editor_type: n.editor_type,
    price: n.price,
    sort_by: SortOptions.Search.RELEVANCY,
    org_id: e,
    team_id: t
  }), [n.query, n.editor_type, n.price, e, t]), o);
  let p = _$$X4();
  let f = useTeamPlanFeatures();
  let g = _$$LQ(f);
  let h = getSearchSessionIdFromSelector();
  let x = getCurrentQueryId();
  let b = resultsByType[o].resources.length;
  let v = useCallback(() => {
    JO(h, x, b);
    let e = new ResourceHubSearchRoute(i.params, n).href;
    customHistory.push(e);
  }, [i.params, n, b, h, x]);
  let y = r && !g && loadedStatusByType[o] && b <= 10;
  let w = y && b > 0;
  let j = y && !w;
  return jsx(TrackingProvider, {
    name: _$$e7.RESOURCE_HUB_SEARCH,
    children: jsxs('div', {
      className: dS,
      ref: p.sizeRef,
      children: [jsx(cO, {
        selectedTab: o,
        resultsByType,
        filtersControlState: c
      }), jsx(_$$G5, {
        searchParams: n,
        trackResourceImpression,
        resultsByType,
        isLoadingThisView: !loadedStatusByType[o],
        emptyStateActions: j ? jsx(_$$N4, {
          href: '#',
          onClick: v,
          children: getI18nString('community.search.search_in_community_instead_cta')
        }) : void 0,
        numTilesPerRow: p.numberOfTiles
      }), w && jsx('div', {
        className: 'xpgiz1h x1buy44e',
        children: jsx(cF, {
          onSearchInCommunity: v
        })
      })]
    })
  });
}
function cD() {
  let e = useDispatch();
  let t = useResourceRouteParams();
  let r = useResourceFuid();
  let n = useCurrentPrivilegedPlan('ResourceHubApp');
  let o = _$$LQ(n);
  let l = isResourceHubInternalSearchEnabled();
  let d = isResourceHubProfilesEnabled();
  let c = n.data?.type === FOrganizationLevelType.ORG ? n.data?.key.parentId : void 0;
  let u = n.data?.type === FOrganizationLevelType.TEAM ? n.data?.key.parentId : void 0;
  let m = Fz();
  let _ = n.data?.type !== FOrganizationLevelType.ORG || getResourceDataOrFallback(n.data.customTemplatesAllowed);
  let p = isTntSavingEnabled();
  let f = useMemo(() => {
    let e = PublishSourceType.INTERNAL;
    n.status === 'loaded' && n.data?.tier === FPlanNameType.STARTER && (e = PublishSourceType.COMMUNITY);
    return new ResourceHubHomeRouteClass({
      ...t,
      tab: e
    }, r);
  }, [t, r, n]);
  return n.status !== 'loading' && t ? (m || e(selectViewAction({
    view: 'recentsAndSharing'
  })), jsx(TrackingProvider, {
    name: _$$e7.RESOURCE_HUB,
    children: jsx(Rj.Provider, {
      value: _$$mk.RESOURCE_HUB,
      children: jsx(UI3ConditionalWrapper, {
        children: jsx(Route, {
          path: RESOURCE_ROUTE,
          children: jsxs('div', {
            className: 'xv90nub x78see',
            children: [jsx(co, {
              orgOrTeamName: n.data?.name,
              isCommunityTabDisabledForOrg: o
            }), jsxs(Switch, {
              children: [jsx(Route, {
                path: ResourceHubProfileRouteState.path,
                children: !o && d ? jsx(_$$P3, {
                  fallbackRedirectRoute: f
                }) : jsx(Redirect, {
                  to: f.to
                })
              }), jsx(Route, {
                path: ResourceHubResourceRoute.path,
                children: o ? jsx(Redirect, {
                  to: f.to
                }) : jsx(ch, {})
              }), jsx(Route, {
                path: ResourceHubSearchRoute.path,
                children: o ? jsx(Redirect, {
                  to: f.to
                }) : jsx(cL, {})
              }), jsx(Route, {
                path: ResourceHubInternalSearchRoute.path,
                children: l && (c || u) ? jsx(cL, {
                  currentOrgId: c,
                  currentTeamId: u
                }) : jsx(Redirect, {
                  to: f.to
                })
              }), jsx(Route, {
                path: _$$U5.path,
                children: jsx(dD, {
                  planTier: n.data?.tier ?? null,
                  currentOrgId: c,
                  currentTeamId: u,
                  fallbackRedirectRoute: f
                })
              }), jsx(Route, {
                path: _$$e11.path,
                children: !o && p ? jsx(cw, {}) : jsx(Redirect, {
                  to: f.to
                })
              }), jsx(Route, {
                path: ResourceHubCategoryRoute.path,
                children: o ? jsx(Redirect, {
                  to: f.to
                }) : jsx(dZ, {})
              }), jsx(Route, {
                path: ResourceHubHomeRouteClass.path,
                children: jsx(dk, {
                  planTier: n.data?.tier ?? null,
                  currentOrgId: c,
                  currentTeamId: u,
                  isCommunityTabDisabledForOrg: o,
                  isTemplatesPublishingDisabledForOrg: !_
                })
              }), jsx(Redirect, {
                to: f.to
              })]
            })]
          })
        })
      })
    })
  })) : null;
}
function cM() {
  let e = useResourceRouteParams();
  let t = useResourceFuid();
  return e ? jsx(cB, {
    sharedRouteParams: e,
    sharedSearchParams: t
  }) : null;
}
function cB({
  sharedRouteParams: e,
  sharedSearchParams: t
}) {
  let [r, i] = useState(null);
  let [n, o] = useState(null);
  let [l, d] = useState(null);
  let {
    templatesByTeam
  } = dF();
  let m = [];
  let _ = useRouteParams(ResourceHubHomeRouteClass)?.tab || PublishSourceType.INTERNAL;
  let p = _ === PublishSourceType.COMMUNITY ? getI18nString('community.resource_hub.templates_and_tools_from_community') : getI18nString('sidebar.templates_and_tools');
  m = [{
    text: p,
    to: new ResourceHubHomeRouteClass({
      ...e,
      tab: _
    }, t).href,
    trackingProperties: {
      name: HH.RESOURCE_HUB_HOME_BREADCRUMB_CLICKED,
      text: p
    }
  }];
  let g = useRouteStateInstance(ResourceHubCategoryRoute);
  let h = !!g;
  let x = useRouteStateInstance(ResourceHubResourceRoute);
  let b = !!x;
  let v = h || b;
  useEffect(() => {
    v || (i(null), d(null), o(null));
  }, [v]);
  let y = x?.params.apiResourceType;
  let w = x?.params.resourceId;
  let [j] = setupResourceAtomHandler(_$$Z({
    apiResourceType: y,
    id: w
  }), {
    enabled: b && !!y && !!w
  });
  let T = g?.params.categorySlug || j.data?.category_slug || '';
  let E = g?.params.tagSlug || '';
  let I = getCurrentLocale();
  let [{
    data: C,
    status: S
  }] = setupResourceAtomHandler(categoryBySlugQuery({
    categorySlug: T,
    tagSlug: E,
    locale: I
  }), {
    enabled: v
  });
  useEffect(() => {
    if (S === 'loaded') {
      d(C?.selected_tag || null);
      let {
        parent_category
      } = C || {
        parent_category: null
      };
      o(parent_category || null);
      i(C);
    }
  }, [C, S]);
  v && r && (m = [...m, ...function ({
    currentCategory: e,
    currentParentCategory: t,
    currentTag: r,
    sharedRouteParams: a,
    sharedSearchParams: s,
    categoryRoute: i
  }) {
    if (!e) return [];
    let n = getValueOrFallback(t?.url_slug, TemplateCategory);
    let o = getValueOrFallback(e.url_slug, TemplateCategory);
    return [t && n && {
      text: lr(n, void 0, i?.search.resource_type) || getTranslatedDynamicContent(t.i18n_meta?.title, t.title),
      to: i ? i.copyWith({
        categorySlug: n,
        tagSlug: void 0
      }).href : new ResourceHubCategoryRoute({
        ...a,
        categorySlug: n
      }, {
        ...s
      }).href,
      trackingProperties: {
        name: HH.RESOURCE_HUB_CATEGORY_BREADCRUMB_CLICKED,
        text: lr(n, void 0, i?.search.resource_type) || getTranslatedDynamicContent(t.i18n_meta?.title, t.title),
        category_slug: n
      }
    }, e && o && {
      text: lr(o, void 0, i?.search.resource_type) || getTranslatedDynamicContent(e.i18n_meta?.title, e.title),
      to: i ? i.copyWith({
        categorySlug: o,
        tagSlug: void 0
      }).href : new ResourceHubCategoryRoute({
        ...a,
        categorySlug: o
      }, {
        ...s
      }).href,
      trackingProperties: {
        name: HH.RESOURCE_HUB_CATEGORY_BREADCRUMB_CLICKED,
        text: lr(o, void 0, i?.search.resource_type) || getTranslatedDynamicContent(e.i18n_meta?.title, e.title),
        category_slug: o
      }
    }, r && {
      text: getTranslatedDynamicContent(r.i18n_meta?.text, r.text)
    }].filter(Boolean);
  }({
    currentCategory: r,
    currentParentCategory: n,
    currentTag: l,
    sharedRouteParams: e,
    sharedSearchParams: t,
    categoryRoute: h ? g : void 0
  })]);
  let k = j.data;
  if (b && k && (r || !k.category_slug)) {
    let e = {
      text: getResourceName(k) || ''
    };
    m = [...m, e];
  }
  let R = useRouteStateInstance(_$$e11);
  if (R) {
    let t = {
      text: getI18nString('community.profiles.saved'),
      to: new _$$e11({
        ...e,
        resourceType: void 0
      }).href
    };
    m = [...m, t];
    let r = R?.params.resourceType;
    let a = r ? M0(r) : void 0;
    a && (m = [...m, {
      text: a
    }]);
  }
  if (getActiveSearchRouteWithCommunity()) {
    let e = {
      text: getI18nString('community.resource_hub.search_breadcrumb')
    };
    m = [...m, e];
  }
  let A = useRouteStateInstance(_$$U5);
  if (A) {
    let e = A.params.resourceTypeSlug;
    let t = {
      text: _$$i_(e)
    };
    if (m = [...m, t], A?.params.templatesTeamId) {
      t.to = A.copyWith({
        templatesTeamId: void 0
      }).href;
      t.trackingProperties = {
        name: HH.RESOURCE_HUB_INTERNAL_RESOURCE_TYPE_BREADCRUMB_CLICKED,
        text: _$$i_(e)
      };
      let r = templatesByTeam?.teamName;
      r && (m = [...m, {
        text: r
      }]);
    }
  }
  if (useRouteMatchExists(ResourceHubProfileRouteState)) {
    let e = {
      text: getI18nString('community.profiles.community_profile')
    };
    m = [...m, e];
  }
  return m.length === 1 ? jsx(Fragment, {
    children: m[0].text
  }) : jsxs(_$$A11, {
    children: [...m.map((e, t) => jsx(J5, {
      text: e.text,
      onClick: () => {
        e.to && customHistory.push(e.to);
        e.trackingProperties && Ox(e.trackingProperties);
      },
      hasTrailingDivider: t < m.length - 1,
      disabled: t === m.length - 1
    }, `resource_hub_breadcrumb_${t}`))]
  });
}
function cU() {
  let e = jsx(cM, {});
  return isResourceHubInternalSearchEnabled() ? jsxs('div', {
    className: 'x78zum5 x6s0dn4 x1qughib xaobbuh xozqiw3',
    children: [e, jsx(Rj.Provider, {
      value: _$$mk.RESOURCE_HUB,
      children: jsx('div', {
        className: 'xflo6bn x14coe6r',
        children: jsx(ci, {})
      })
    })]
  }) : e;
}
let cY = new class {
  markFeedVisited(e) {
    return XHR.post(`/api/feed_visited/${e.currentOrgId}`);
  }
}();
let c1 = new class {
  markFeedViewed(e) {
    XHR.post(`/api/feed_posts/${e.publicUuid}/mark_viewed`);
  }
  vote(e) {
    XHR.post(`/api/feed_posts/${e.publicUuid}/vote`, {
      vote_option: e.voteOption
    });
  }
}();
let ue = 'feed_tile--commentPillText--goQ26';
let ut = 'feed_tile--feedPostHoverContainerSelectable--rhPI9';
function ua(e) {
  let t = useDispatch();
  let r = useRef(null);
  let [n, o] = _$$M();
  let [l, d] = _$$M();
  let {
    requestToOpenPostByFeedIdx
  } = e;
  let u = useCallback((r, a) => {
    r?.stopPropagation();
    let s = e.itemIdx + 1;
    trackEventAnalytics('Team Feed Tile Clicked', {
      postUuid: e.post.publicUuid,
      feedRank: s
    });
    t(showModalHandler({
      type: _$$K4,
      data: {
        postUuid: e.post.publicUuid,
        initialPreloadedPost: e.post,
        feedIdx: e.feedIdx,
        requestToOpenPostByFeedIdx,
        autofocusCommentInput: a?.autofocusCommentInput,
        selectedContentIdx: a?.selectedContentIdx,
        onSetSelectedContentIdx: a?.onSetSelectedContentIdx
      }
    }));
  }, [e.itemIdx, e.post, t, e.feedIdx, requestToOpenPostByFeedIdx]);
  let {
    refSetter
  } = function (e) {
    let t = useRef(null);
    let r = useRef(e);
    r.current = e;
    let a = useMemo(() => new ResizeObserver(() => {
      r.current(t.current);
    }), []);
    useEffect(() => () => {
      a.disconnect();
    }, [a]);
    return {
      refSetter: useCallback(e => {
        t.current !== null && a.unobserve(t.current);
        t.current = e;
        t.current !== null && a.observe(t.current);
      }, [a])
    };
  }(e.virtualRowItem.measureRef);
  let _ = {
    position: 'absolute',
    top: e.virtualRowItem.start,
    left: 0,
    right: 0
  };
  let p = e.feedListRef.current?.getBoundingClientRect().left ?? 0;
  let f = Math.max(0, (r.current?.getBoundingClientRect().left ?? 0) - p);
  let g = jsxs('div', {
    className: 'feed_tile--caughtUpContainer--5uyiy',
    children: [jsx('div', {
      className: 'feed_tile--caughtUpTitle--PVabL',
      children: getI18nString('fig_feed.youre_all_caught_up')
    }), jsx('div', {
      className: 'feed_tile--caughtUpSubtitle--j2qKn',
      children: getI18nString('fig_feed.come_back_later_for_more_posts')
    })]
  });
  return jsxs('div', {
    className: 'feed_tile--postContainer--jD-OA',
    ref: e => {
      refSetter(e);
      e && (r.current = e, n(e));
    },
    style: _,
    children: [jsx('div', {
      className: 'feed_tile--hoverExtension--aYeAh',
      ref: l
    }), jsxs('div', {
      className: 'feed_tile--tileContainer---NbBK',
      children: [jsx(us, {
        feedPost: e.post,
        feedIdx: e.feedIdx,
        onTileMouseDown: u,
        horizontalMargin: f,
        isHovered: o || d
      }), e.mostRecentUnviewed && g]
    })]
  });
}
function us(e) {
  let t = parseInt(e.feedPost.numComments, 10);
  let r = _$$o1(e.feedPost.descriptionMeta);
  let i = [...new Map(e.feedPost.comments.map(e => [e.user.id, e.user])).values()];
  let n = jsx('div', {
    className: 'feed_tile--commentPill--ZWfdc feed_reactions_section--reactionPill--qE8nJ reactions--reaction--BGfYE text--fontPos11--2LvXf text--_fontBase--QdLsd',
    onMouseDown: t => e.onTileMouseDown(t, {
      autofocusCommentInput: !0
    }),
    role: 'button',
    tabIndex: 0,
    children: t > 0 ? jsxs(Fragment, {
      children: [jsx(_$$u6, {
        users: i,
        totalNum: i.length,
        numAvatarsToDisplay: 4
      }), jsx('div', {
        className: ue,
        children: renderI18nText('fig_feed.num_comments', {
          numComments: t
        })
      })]
    }) : jsx('div', {
      className: ue,
      children: renderI18nText('fig_feed.add_comment')
    })
  });
  let [o, l] = useState(!1);
  let d = useRef(null);
  useEffect(() => {
    let e = d.current;
    e && l(e.scrollHeight > e.offsetHeight);
  }, []);
  let c = useMemo(() => (r.length > 0 && (r[0].t = r[0].t?.trimStart(), r[r.length - 1].t = r[r.length - 1].t?.trimEnd()), r), [r]);
  let u = _$$q4();
  let m = useCallback((e = [], t) => e ? e.map((e, r) => {
    let i = (e.user_annotated ? e.user_annotated.handle : e.t) || '';
    let n = sanitizeInput(i);
    let o = null;
    let l = e.link && _$$xT(e.link);
    if (e.user_annotated && n) {
      o = jsx('span', {
        onMouseDown: e => e.stopPropagation(),
        role: 'link',
        tabIndex: 0,
        children: jsx(E4, {
          href: `/files${u}/user/${e.user_id}`,
          userId: e.user_annotated.id,
          handle: n,
          imgUrl: e.user_annotated.img_url
        })
      });
    } else if (l && n && $x(l)) {
      o = jsx('span', {
        onMouseDown: e => e.stopPropagation(),
        role: 'link',
        tabIndex: 0,
        children: jsx(Rk, {
          text: n,
          hyperlink: l
        })
      });
    } else {
      let e = renderEmojiShortcodes(n?.replace(/\n\s*\n/g, '\n').split('\n').join(' ') || '');
      o = jsx('span', {
        children: e
      });
    }
    return jsxs(_$$Fragment, {
      children: [o, e.children?.length && e.styles?.length && e.children.map((i, n) => jsxs(_$$Fragment, {
        children: [' ', e.styles.includes('ol') ? `${n + 1}. ` : '\u2022 ', m(i.children, `${t}-${r}-${n}`), ' ']
      }, `${t}-${r}-${n}`))]
    }, `${t}-${r}`);
  }) : [jsx(Fragment, {})], [u]);
  let _ = useMemo(() => m(c, e.feedPost.id), [c, m, e.feedPost.id]);
  let {
    onTileMouseDown
  } = e;
  let f = useMemo(() => jsxs('div', {
    className: 'feed_tile--postDescriptionContainer--xP5Fz',
    onMouseDown: onTileMouseDown,
    role: 'button',
    tabIndex: 0,
    children: [jsx('div', {
      className: 'feed_tile--postTitle--DY-Hh',
      children: e.feedPost.title
    }), jsxs('div', {
      'className': 'feed_tile--postDescription--PiaCx',
      'data-testid': 'feed-post-description',
      'ref': d,
      'children': [jsx('div', {
        className: U()('feed_tile--postDescriptionMessage--6ThT1 comment_message--commentMessage--kZCzD', 'feed_tile--collapsed--ruER6', o && 'feed_tile--hasShowMore--6Nm-e'),
        children: _
      }), o && jsxs('div', {
        onMouseDown: e => {
          e.stopPropagation();
          onTileMouseDown();
        },
        className: 'feed_tile--viewMore--o-NxF',
        role: 'button',
        tabIndex: 0,
        children: [jsx('div', {
          className: 'feed_tile--viewMoreEllipsis--k1nCe',
          children: '...'
        }), jsx('div', {
          className: 'feed_tile--viewMoreText--WpL2K',
          children: getI18nString('fig_feed.see_more')
        })]
      })]
    })]
  }), [o, d, e.feedPost, onTileMouseDown, _]);
  let g = DG(e.feedPost.publicUuid, _$$dy.TILE);
  let h = Um();
  let x = e.isHovered || h?.type === j8(Hx.USER, e.feedPost.publicUuid, _$$Zp.TILE);
  return jsxs(Fragment, {
    children: [jsxs('div', {
      className: 'feed_tile--topRowUGC--oWJxs',
      children: [jsx('div', {
        className: 'feed_tile--avatarFloat--h-EFM',
        children: jsx(_$$A13, {
          user: e.feedPost.creator,
          size: Pf.LARGE,
          noHandle: !0
        })
      }), jsx(_$$B3, {
        user: e.feedPost.creator,
        date: e.feedPost.createdAt,
        onTileMouseDown: e.onTileMouseDown,
        noAvatar: !0
      }), jsxs('div', {
        className: cssBuilderInstance.flex.flexRow.$,
        children: [jsx(Wu, {
          hideTarget: !x,
          feedPost: e.feedPost,
          source: _$$Zp.TILE
        }), x && jsx(K0, {
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': getI18nString('fig_feed.copy_link_to_post'),
          'onClick': g,
          'children': jsx(In, {
            icon: 'hyperlink-32'
          })
        })]
      })]
    }), f, jsx(ui, {
      feedPost: e.feedPost,
      feedIdx: e.feedIdx,
      backgroundColor: e.feedPost.backgroundColor,
      onTileMouseDown: e.onTileMouseDown,
      horizontalMargin: e.horizontalMargin
    }), jsx('div', {
      className: 'feed_tile--bottomRow--CTXwC',
      children: jsx(Q$, {
        type: _$$Us.FULL,
        source: zY.TILE_POST,
        postUuid: e.feedPost.publicUuid,
        postId: e.feedPost.id,
        feedReactions: e.feedPost.reactions,
        prependToList: [n]
      })
    })]
  });
}
function ui(e) {
  let t = useRef(null);
  let r = e.feedPost.content.map(e => JSON.parse(e));
  let [i, n] = useState(!1);
  let [o, l] = useState(!1);
  let [d, c] = useState(0);
  useEffect(() => {
    d !== 0 && c1.markFeedViewed({
      publicUuid: e.feedPost.publicUuid
    });
  }, [d, e.feedPost.publicUuid]);
  let u = _$$mz({
    type: 'post',
    id: e.feedPost.publicUuid
  }, zY.TILE_CONTENT);
  let m = r.length > 1;
  let _ = U()(m ? 'feed_tile--feedPostHoverContainerWithThumbnails--pAnNB feed_tile--feedPostHoverContainer--238j6' : 'feed_tile--feedPostHoverContainer--238j6', !(i || o || u) && 'feed_tile--hidden--9bafI');
  let p = {
    selectedContentIdx: d,
    onSetSelectedContentIdx: c
  };
  let {
    fileData,
    fileIcon,
    fileLoaded,
    openFile
  } = _$$rS(e.feedPost.publicUuid, r, e.feedPost.fileKey);
  return jsxs('div', {
    ref: e => {
      e && (t.current = e);
    },
    className: U()('feed_tile--fullHeightContentSection--qE0UO feed_tile--contentSection--1-urk', m && 'feed_tile--fullHeightContentSection_WithThumbnails--l-If7'),
    children: [jsx(_$$x6, {
      contentItems: r,
      feedPostIdx: e.feedIdx,
      feedPostUuid: e.feedPost.publicUuid,
      onContentHover: e => n(e),
      onSelectedTileMouseDown: t => e.onTileMouseDown(t, p),
      pageBackgroundColor: e.backgroundColor || void 0,
      selectedContentIdx: d,
      setSelectedContentIdx: c,
      source: _$$Zp.TILE,
      staticContent: !0
    }), fileLoaded && jsxs('button', {
      className: U()(_, ut, 'feed_tile--hoverTopLeft--zVWFQ'),
      onClick: openFile,
      onMouseEnter: () => l(!0),
      onMouseLeave: () => l(!1),
      children: [jsx(w4, {
        type: fileIcon,
        size: 16
      }), jsx('div', {
        children: fileData.name
      })]
    }), jsx('button', {
      className: U()(_, ut, 'feed_tile--hoverTopRight---lyoe'),
      onMouseDown: t => e.onTileMouseDown(t, p),
      onMouseEnter: () => l(!0),
      onMouseLeave: () => l(!1),
      children: jsx(SvgComponent, {
        svg: _$$A14
      })
    })]
  });
}
function un(e) {
  let t = useDispatch();
  let r = useRef(null);
  let n = selectCurrentUser();
  let o = useSelector(e => e.teamFeedRefreshNonce);
  let [l, d] = useState(null);
  let c = getSelectedView();
  let u = c.view === 'teamFeed';
  let m = c.view === 'user';
  useEffect(() => {
    u && (cY.markFeedVisited({
      currentOrgId: e.currentOrgId
    }).then(e => {
      d(e.data.meta ? new Date(e.data.meta) : null);
    }), t(postUserFlag({
      has_visited_feed: !0
    })));
  }, [e.currentOrgId, o, t, u]);
  let f = useSubscription(PaginatedFigFeed, {
    orgId: e.currentOrgId,
    firstPageSize: 50,
    feedFilter: JSON.stringify({
      creator_id: e.selectedUser?.id ?? null
    }),
    refreshNonce: o
  });
  let g = useLatestRef(o);
  g && g !== o && r.current && (r.current.scrollTop = 0);
  useEffect(() => {
    f.status === 'errors' && t(VisualBellActions.enqueue({
      message: getI18nString('general.an_error_occurred'),
      error: !0
    }));
  }, [t, f.status]);
  let h = useMemo(() => f.status === 'loaded' ? {
    isLoadingNextPage: f.data.feedPosts.isLoadingNextPage,
    hasNextPage: f.data.feedPosts.hasNextPage,
    loadNext: f.data.feedPosts.loadNext
  } : null, [f]);
  let x = useMemo(() => f.status === 'loaded' ? {
    ...f,
    data: f.data.feedPosts.filter(e => !!e.feedPost)
  } : f, [f]);
  let b = x.status === 'loaded' && f.status === 'loaded';
  let v = useCallback(() => 512, []);
  let y = x.data ? x.data.length : 0;
  let w = _$$z9({
    size: y,
    parentRef: r,
    estimateSize: v,
    overscan: 15,
    paddingStart: 0
  });
  let j = useRef(0);
  useEffect(() => {
    j.current = x.data?.length ?? 0;
  }, [b, x.data?.length]);
  useEffect(() => {
    b && trackEventAnalytics('Team Feed Posts Rendered', {
      numPosts: j.current,
      view: c.view,
      selectedUserId: e.selectedUser?.id
    }, {
      forwardToDatadog: !0
    });
  }, [e.selectedUser, j, b, c.view]);
  let [T, E] = useState(!1);
  let C = useCallback((e, t) => {
    e > 0 && !T && (trackEventAnalytics('Team Feed User Scrolled Down'), E(!0));
    let r = y / 50;
    let a = e + t.trackHeight;
    let s = t.scrollHeight;
    1 - (s - a) / (s / r) >= 0.5 && h && !h.isLoadingNextPage && h.hasNextPage() && h.loadNext(50);
  }, [T, h, y]);
  let S = useMemo(() => {
    let e = {};
    x.data && x.data.forEach((t, r) => {
      e[t.publicUuid] = r;
    });
    return e;
  }, [x]);
  let [k, R] = useState(void 0);
  let A = useCallback(e => {
    R(e);
  }, []);
  useEffect(() => {
    if (void 0 === k || (R(void 0), k < 0) || (k >= 0.5 * y && h && h.loadNext(50), k >= y)) return;
    let e = x.data[k];
    t(updateModal({
      type: _$$K4.type,
      data: {
        postUuid: e.publicUuid,
        initialPreloadedPost: e.feedPost,
        feedIdx: k,
        requestToOpenPostByFeedIdx: A
      }
    }));
  }, [k, t, x, A, h, y]);
  let O = useMemo(() => {
    if (!l || !x.data) return null;
    let e = 0;
    let t = x.data.length - 1;
    let r = -1;
    let a = 0;
    for (; e <= t;) {
      let s = Math.floor((e + t) / 2);
      if (new Date(x.data[s].createdAt) > l ? (r = s, e = s + 1) : t = s - 1, (a += 1) > 50) break;
    }
    for (; r >= 0 && n && x.data[r].feedPost?.creator.id === n.id;) r -= 1;
    return r;
  }, [l, x.data, n]);
  let F = b && x.data && x.data.length === 0 && e.selectedUser;
  return jsx(_$$P2, {
    scrollContainerRef: r,
    className: 'feed_list_view--scrollContainer--84INP main_feed_view--scrollContainer--BunJg',
    innerClassName: U()('feed_list_view--scrollContainerInner--8Le-r', m && 'feed_list_view--scrollContainerInnerProfile--izApr'),
    onScroll: C,
    children: jsx('div', {
      className: 'feed_list_view--feedListContainer--2BMds',
      children: F ? jsxs('div', {
        className: 'feed_list_view--noPostsFound--COpgM',
        children: [jsx('div', {
          className: cssBuilderInstance.fontMedium.$,
          children: renderI18nText('fig_feed.no_posts_found_title')
        }), jsx('div', {
          className: cssBuilderInstance.colorTextSecondary.$,
          children: renderI18nText('fig_feed.no_posts_found_description')
        })]
      }) : jsx('div', {
        style: {
          margin: '0 8px',
          height: `${w.totalSize}px`,
          position: 'relative'
        },
        children: w.virtualItems.map(e => {
          let t = e.index;
          if (!x.data || !x.data[t].feedPost) return null;
          let s = x.data[t].feedPost;
          return jsx(ua, {
            post: s,
            virtualRowItem: e,
            feedListRef: r,
            itemIdx: t,
            feedIdx: S[s.publicUuid],
            requestToOpenPostByFeedIdx: A,
            mostRecentUnviewed: u && S[s.publicUuid] === O
          }, e.key);
        })
      })
    })
  });
}
function uo(e) {
  let t = useDispatch();
  let r = useSelector(e => e.teamFeedRefreshNonce);
  useEffect(() => {
    t(yu({
      orgId: e.currentOrgId,
      bellActive: !1
    }));
  }, [t, r, e.currentOrgId]);
  return jsx(un, {
    ...e
  });
}
let ul = 'new_post_indicator--icon--uvRMg';
function uu(e) {
  return jsxs('div', {
    className: 'new_post_indicator--notification--NxIRJ text--_negText--j9g-L _overlayBase--_overlayBase--Rkj8l',
    children: [jsxs('div', {
      className: 'new_post_indicator--leftSide--Y7k6-',
      onClick: e.onRefresh,
      role: 'button',
      tabIndex: 0,
      children: [jsx(SvgComponent, {
        svg: _$$A15,
        className: ul
      }), renderI18nText('fig_feed.new_posts')]
    }), jsx('div', {
      className: 'new_post_indicator--dismiss--BAIvc',
      onClick: e.onDismiss,
      role: 'button',
      tabIndex: 0,
      children: jsx(SvgComponent, {
        svg: _$$A16,
        className: ul
      })
    })]
  });
}
function um(e) {
  let t = useDispatch();
  useEffect(() => (trackEventAnalytics('Team Feed Posts List View Visited'), t(yu({
    orgId: e.currentOrgId,
    bellActive: !1
  })), () => {
    trackEventAnalytics('Team Feed List View Closed');
  }), [t, e.currentOrgId]);
  let r = useCallback(() => t(_$$Y6()), [t]);
  let n = useCallback(() => {
    r();
  }, [r]);
  let o = useSelector(t => t.teamFeedBellStates[e.currentOrgId]);
  let [l, d] = useState(!1);
  let c = useLatestRef(o);
  useEffect(() => {
    o && !1 === c ? d(!0) : c && !1 === o && d(!1);
  }, [o, c, t]);
  useEffect(() => {
    e.initialPostUuidToShow && t(showModalHandler({
      type: _$$K4,
      data: {
        postUuid: e.initialPostUuidToShow
      }
    }));
  }, [t, e.initialPostUuidToShow]);
  return jsxs(Fragment, {
    children: [l && jsx(uu, {
      onRefresh: n,
      onDismiss: () => d(!1)
    }), jsx(uo, {
      currentOrgId: e.currentOrgId
    }), jsx(_$$cx, {})]
  });
}
function u_(e) {
  let t = useSelector(e => e.currentUserOrgId);
  let r = useRef(new Timer());
  return (useEffect(() => {
    r.current.start();
  }, []), t) ? jsx(um, {
    currentOrgId: t,
    initialPostUuidToShow: e.postUuid,
    creatorId: e.creatorId,
    feedViewTimer: r.current
  }) : null;
}
function uf(e) {
  let t = e.tabs ? jsx(UI3ConditionalWrapper, {
    children: jsx(_$$t5.TabStrip, {
      manager: e.tabManager,
      children: e.tabs.map(e => createElement(_$$t5.Tab, {
        ...e.tabProps,
        key: e.tabName
      }, e.tabName))
    })
  }) : jsx(Fragment, {});
  return jsx(_$$g4, {
    leftSide: t,
    rightSide: e.viewbarActions || []
  });
}
let uh = e => ({
  tileSortFilterConfig: e.deletedFiles,
  sortKeys: [SortField.TRASHED_AT]
});
let ux = e => ({
  tileSortFilterConfig: e.trashedFolders,
  sortKeys: [SortField.TRASHED_AT, SortField.NAME]
});
let ub = (e, t, r) => {
  let s = memoizeByArgs(uh)(t);
  return [jsx(_$$gr, {
    dispatch: e,
    options: s,
    selectedView: r
  }, 0), jsx(ye, {
    config: s.tileSortFilterConfig
  }, 1), jsx(_$$mc, {
    dispatch: e,
    options: s,
    selectedView: r
  }, 2), jsx($c, {
    initialViewMode: s.tileSortFilterConfig.viewMode,
    onViewModeChange: t => {
      trackEventAnalytics('file view toggle', {
        viewType: t === ViewMode.GRID ? 'grid' : 'list'
      });
      e(setBrowserTileSortView({
        selectedView: r,
        config: {
          ...s.tileSortFilterConfig,
          viewMode: t
        }
      }));
    }
  }, 3)];
};
let uv = (e, t, r) => {
  let s = memoizeByArgs(ux)(t);
  return [jsx(KH, {
    dispatch: e,
    options: s,
    selectedView: r
  }, 6), jsx(_$$mc, {
    dispatch: e,
    options: s,
    selectedView: r
  }, 4), jsx($c, {
    initialViewMode: s.tileSortFilterConfig.viewMode,
    onViewModeChange: t => {
      trackEventAnalytics('folder view toggle', {
        viewType: t === ViewMode.GRID ? 'grid' : 'list'
      });
      e(setBrowserTileSortView({
        selectedView: r,
        config: {
          ...s.tileSortFilterConfig,
          viewMode: t
        }
      }));
      e(setBrowserViewBarModeOptions({
        viewId: _$$l6,
        viewMode: t
      }));
    }
  }, 5)];
};
function uy({
  currView: e
}) {
  let t = useDispatch();
  let r = useSelector(e => e.tileSortFilterStateByView);
  let n = ub(t, r, e);
  let o = uv(t, r, e);
  let [l, d, c] = _$$t5.useManagedTabs({
    deletedFiles: !0,
    trashedFolders: !0
  }, e.view, useCallback(e => {
    t(selectViewAction({
      view: e
    }));
  }, [t]));
  return jsx(uf, {
    tabManager: c,
    tabs: [{
      tabName: getI18nString('file_browser.tool_bar.trashed_files'),
      view: {
        view: 'deletedFiles'
      },
      ariaLabel: getI18nString('file_browser.tool_bar.trashed_files.aria_label'),
      tabProps: l.deletedFiles
    }, {
      tabName: getI18nString('file_browser.tool_bar.trashed_projects'),
      view: {
        view: 'trashedFolders'
      },
      ariaLabel: getI18nString('file_browser.tool_bar.trashed_projects.aria_label'),
      tabProps: l.trashedFolders
    }],
    viewbarActions: e.view === 'deletedFiles' ? n : o
  });
}
function uC({
  currentProgress: e,
  totalAllowed: t
}) {
  return jsxs(AutoLayout, {
    spacing: 'auto',
    children: [jsxs('div', {
      className: cssBuilderInstance.relative.wFull.$,
      className: 'x1b68738 x1n2onr6',
      children: [jsx('div', {
        className: cssBuilderInstance.absolute.wFull.$,
        children: jsx(AutoLayout, {
          cornerRadius: 5,
          height: 6,
          backgroundColor: 'secondary'
        })
      }), jsx('div', {
        className: cssBuilderInstance.absolute.wFull.flex.itemsCenter.$,
        children: jsx(AutoLayout, {
          cornerRadius: 5,
          height: 6,
          width: `${Math.min(e / t * 100, 100)}%`,
          backgroundColor: e >= t ? 'warning' : 'brand'
        })
      })]
    }), jsx('div', {
      className: 'x1i0uq9b x1ok221b xp5pvr8 x4z9k3i xk50ysn x1d3mw78 x122x9cr',
      children: getI18nString('file_browser.starter_limit_global.files_used', {
        numFilesUsed: e,
        totalFiles: t
      })
    })]
  });
}
function uS({
  text: e,
  tooltipText: t,
  currentProgress: r,
  totalProgress: s
}) {
  return jsxs(AutoLayout, {
    direction: 'vertical',
    height: 'hug-contents',
    spacing: '7px',
    children: [jsxs(AutoLayout, {
      horizontalAlignItems: 'space-between',
      children: [jsxs(AutoLayout, {
        spacing: 4,
        children: [jsx(TextWithTruncation, {
          fontSize: 13,
          fontWeight: 'medium',
          children: e
        }), jsx('div', {
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': t,
          'data-tooltip-show-above': !0,
          'data-tooltip-show-immediately': !0,
          'data-tooltip-tip-align-left': !0,
          'data-tooltip-text-left': !0,
          'children': jsx(In, {
            icon: 'info-16',
            fill: 'secondary'
          })
        })]
      }), jsxs(TextWithTruncation, {
        fontSize: 13,
        fontWeight: 'medium',
        children: [r, '/', s]
      })]
    }), jsxs('div', {
      className: cssBuilderInstance.relative.wFull.$,
      children: [jsx('div', {
        className: cssBuilderInstance.absolute.wFull.$,
        children: jsx(AutoLayout, {
          cornerRadius: 5,
          height: 5,
          backgroundColor: 'disabled'
        })
      }), jsx('div', {
        className: cssBuilderInstance.absolute.wFull.$,
        children: jsx(AutoLayout, {
          cornerRadius: 5,
          height: 5,
          width: `${Math.min(r / s * 100, 100)}%`,
          backgroundColor: r >= s ? 'warning' : 'brand'
        })
      })]
    })]
  });
}
let uk = {
  title: {
    ..._$$g3.textBodyLargeStrong,
    $$css: !0
  },
  description: {
    ..._$$g3.textBodyMedium,
    paddingRight: 'xmzs88n',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    marginTop: 'x1xmf6yo',
    $$css: !0
  }
};
let uR = withTrackedClick(Button);
function uA({
  canEditTeam: e,
  isDraftsFolder: t
}) {
  let r = useDispatch();
  let s = getCurrentTeam();
  let n = getSelectedView();
  return t || !s || hasTeamPaidAccess(s) || n.view !== 'folder' ? null : jsx(uO, {
    folderId: n.folderId,
    showPlanComparisonModal: () => {
      r(showModalHandler({
        type: _$$V4,
        data: {
          upsellSource: UpsellModalType.STARTER_LIMIT_OVERVIEW,
          teamId: s.id
        }
      }));
    },
    canEditTeam: e
  });
}
function uO({
  folderId: e,
  showPlanComparisonModal: t,
  canEditTeam: r
}) {
  let s = useStarterGlobalFileLimitsExperiment();
  let i = useSubscription(TeamFileLimitsInfoByProject({
    projectId: e
  }));
  let n = _$$h3.useTrackingContext({
    trigger: UpsellModalType.STARTER_LIMIT_OVERVIEW
  });
  if (i.status !== 'loaded') return null;
  let o = i.data.project?.team?.projectsCount.status === 'loaded' ? i.data.project?.team?.projectsCount.data ?? 1 : 1;
  let l = i.data.project?.team?.teamFileCounts?.designFileCount ?? 0;
  let d = i.data.project?.team?.teamFileCounts?.whiteboardFileCount ?? 0;
  let c = i.data.project?.team?.teamFileCounts?.slideFileCount;
  let u = c ? parseInt(c, 10) : 0;
  let m = getResourceDataOrFallback(i.data.project?.team?.teamFileCounts?.totalFileCount) ?? 0;
  let _ = s ? m >= STANDARD_LIMIT : l >= STANDARD_LIMIT || d >= STANDARD_LIMIT;
  return jsx(TrackingProvider, {
    name: 'Starter Limit Overview',
    properties: n,
    children: jsx('div', {
      className: U()(cssBuilderInstance.cursorDefault.mr32.maxW300.colorBg.$, 'starter_limit_overview--responsiveHide--nMkA0'),
      style: styleBuilderInstance.sticky.add({
        alignSelf: 'flex-start',
        top: '128px',
        maxWidth: s ? '280px' : '300px'
      }).$,
      children: jsxs(AutoLayout, {
        direction: 'vertical',
        padding: s ? 16 : 32,
        spacing: s ? 'auto' : 24,
        cornerRadius: s ? 13 : 8,
        strokeWidth: 1,
        strokeColor: 'default',
        height: 'hug-contents',
        children: [jsx('div', {
          ...(s ? _$$Ay2.props(uk.title) : {}),
          children: s ? renderI18nText('file_browser.starter_limit_global.your_plan_files') : jsx(TextWithTruncation, {
            fontSize: 16,
            fontWeight: 'semi-bold',
            children: renderI18nText('file_browser.starter_limit.your_starter_team_overview')
          })
        }), jsx(uF, {
          numProjects: o,
          numFigmaFilesUsed: l,
          numFigjamFilesUsed: d,
          numSlidesFilesUsed: u,
          totalFilesUsed: m,
          isStarterGlobalFileLimitOn: s
        }), r ? jsxs(AutoLayout, {
          direction: 'vertical',
          spacing: '12px',
          children: [s ? jsx('div', {
            ..._$$Ay2.props(uk.description),
            children: renderI18nText('file_browser.starter_limit_global.description')
          }) : jsx(TextWithTruncation, {
            fontSize: 13,
            children: renderI18nText(_ ? 'file_browser.starter_limit.running_out_of_files' : 'file_browser.starter_limit.enough_for_you_to_get_started')
          }), jsx(uR, {
            onClick: t,
            trackingProperties: {
              trackingDescriptor: UpgradeAction.VIEW_PLANS,
              numFiles: m
            },
            children: renderI18nText('upgrade.view_plans')
          })]
        }) : jsx(TextWithTruncation, {
          fontSize: 13,
          children: renderI18nText('file_browser.starter_limit.trying_things_out')
        })]
      })
    })
  });
}
function uF({
  numProjects: e,
  numFigmaFilesUsed: t,
  numFigjamFilesUsed: r,
  numSlidesFilesUsed: s,
  totalFilesUsed: i,
  isStarterGlobalFileLimitOn: n
}) {
  return jsxs(AutoLayout, {
    direction: 'vertical',
    spacing: 24,
    width: n ? '100%' : 234,
    children: [n && jsx(uC, {
      currentProgress: i,
      totalAllowed: STANDARD_LIMIT
    }), !n && jsxs(Fragment, {
      children: [jsx(uS, {
        text: getI18nString('file_browser.starter_limit.projects'),
        tooltipText: getI18nString('file_browser.starter_limit.projects.tooltip'),
        currentProgress: e,
        totalProgress: PRIMARY_LIMIT
      }), jsx(uS, {
        text: getI18nString('file_browser.starter_limit.design_files'),
        tooltipText: getI18nString('file_browser.starter_limit.design_files.tooltip'),
        currentProgress: t,
        totalProgress: STANDARD_LIMIT
      }), jsx(uS, {
        text: getI18nString('file_browser.starter_limit.figjam_boards'),
        tooltipText: getI18nString('file_browser.starter_limit.figjam_boards.tooltip'),
        currentProgress: r,
        totalProgress: STANDARD_LIMIT
      }), jsx(uS, {
        text: getI18nString('file_browser.starter_limit.slides'),
        tooltipText: getI18nString('file_browser.starter_limit.slides.tooltip'),
        currentProgress: s,
        totalProgress: STANDARD_LIMIT
      })]
    })]
  });
}
let uY = 'open_invoice_reminder_card--icon--gcN35';
function uJ(e) {
  let t = useDispatch();
  let r = e.team.restrictions_list?.includes(FPlanLimitationType.LOCKED);
  let s = e.canAdminTeam ? r ? getI18nString('billing.open_invoice_reminder.title') : getI18nString('billing.open_invoice_reminder.grace_period_title') : getI18nString('billing.open_invoice_reminder.title_viewer');
  let n = e.canAdminTeam ? r ? getI18nString('billing.open_invoice_reminder.locked_admin_description') : getI18nString('billing.open_invoice_reminder.grace_period_admin_description') : getI18nString('billing.open_invoice_reminder.locked_viewer_description');
  let o = e.canAdminTeam ? getI18nString('billing.open_invoice_reminder.cta') : null;
  let l = {
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': getI18nString('billing.open_invoice_reminder.button_tooltip'),
    'data-tooltip-show-immediately': !0
  };
  return jsxs(AutoLayout, {
    direction: 'vertical',
    padding: e.noPaddingOrBorder ? 0 : 20,
    spacing: 24,
    width: 288,
    cornerRadius: e.noPaddingOrBorder ? void 0 : 8,
    strokeWidth: e.noPaddingOrBorder ? void 0 : 1,
    strokeColor: 'default',
    height: 'hug-contents',
    children: [jsx('div', {
      className: cssBuilderInstance.flex.justifyBetween.wFull.$,
      children: jsx('div', {
        className: cssBuilderInstance.flex.itemsCenter.justifyCenter.w32.h32.bRadius5.colorBgWarning.$,
        children: r ? jsx(_$$s5, {
          className: uY
        }) : jsx(_$$R8, {
          className: uY
        })
      })
    }), jsx('div', {
      className: cssBuilderInstance.font14.fontSemiBold.lh24.$,
      children: s
    }), jsx('div', {
      className: cssBuilderInstance.font13.lh24.$,
      children: n
    }), !!o && jsx('div', {
      className: cssBuilderInstance.flex.justifyEnd.wFull.$,
      children: jsx(ButtonWide, {
        onClick: () => t(selectViewAction({
          view: 'teamAdminConsole',
          teamId: e.team.id,
          teamAdminConsoleViewTab: DashboardSections.BILLING
        })),
        variant: 'primary',
        htmlAttributes: l,
        children: o
      })
    })]
  });
}
function uq(e) {
  return e.team.restrictions_list?.includes(FPlanLimitationType.LOCKED) || e.canAdminTeam ? jsx(TrackingProvider, {
    name: 'Open Invoice Reminder Card',
    properties: {
      teamId: e.team.id
    },
    children: jsx(uJ, {
      ...e
    })
  }) : null;
}
let uZ = 'tiles_view--container--u00AG';
let u0 = 'tiles_view--emptyState--jfzsE text--fontPos11--2LvXf text--_fontBase--QdLsd';
function u1({
  tile: e,
  index: t,
  dispatch: r,
  selectedView: a,
  currentPlanFilter: s,
  currentSharedByFilter: i,
  isListView: n
}) {
  e.type === _$$nb.FILE && (r(trackFileClicked({
    fileKey: e.file.key,
    entrypoint: 'file tile',
    currentPlanFilter: s,
    currentSharedByFilter: i,
    viewMode: void 0 !== n ? n ? 'list' : 'grid' : void 0
  })), isRecentsAndSharingView(a) && r(trackRecentFileClicked({
    index: t
  })), desktopAPIInstance && trackEventAnalytics('Open File Click', {
    fileKey: e.file.key,
    fileRepoId: e.file.fileRepoId,
    uiSelectedView: JSON.stringify(a)
  }));
}
let u4 = (e, t) => {
  let r = _$$Tf.getName(e) || '';
  let a = _$$Tf.getName(t) || '';
  return COLLATOR.compare(r, a);
};
let u2 = (e, t) => {
  let r = (_$$Tf.getName(e) || '').toLowerCase();
  let a = (_$$Tf.getName(t) || '').toLowerCase();
  return r === a ? 0 : r < a ? -1 : 1;
};
let u5 = (e, t) => {
  if (e.type !== _$$nb.FILE || t.type !== _$$nb.FILE) return 0;
  let r = e.file;
  let a = t.file;
  return r.createdAt < a.createdAt ? 1 : -1;
};
let u8 = (e, t) => e.type !== _$$nb.PROTOTYPE || t.type !== _$$nb.PROTOTYPE ? 0 : e.prototype.file_key < t.prototype.file_key ? -1 : 1;
let u6 = (e, t) => {
  let r = _$$Tf.getAccessedAt(e);
  let a = _$$Tf.getAccessedAt(t);
  return r && a ? r > a ? 1 : -1 : a ? -1 : r ? 1 : 0;
};
let u3 = (e, t) => _$$Tf.getCreatedAt(e) > _$$Tf.getCreatedAt(t) ? 1 : -1;
let u7 = (e, t) => {
  let r = _$$Tf.getTouchedAt(e);
  let a = _$$Tf.getTouchedAt(t);
  return r === null || a === null ? 0 : r > a ? 1 : -1;
};
let u9 = (e, t) => e.type !== _$$nb.FILE && e.type !== _$$nb.REPO || t.type !== _$$nb.FILE && t.type !== _$$nb.REPO ? 0 : (e.type === _$$nb.FILE ? e.file.trashedAt : e.repo.trashed_at) > (t.type === _$$nb.FILE ? t.file.trashedAt : t.repo.trashed_at) ? 1 : -1;
function me({
  currentPlanFilter: e,
  currentSharedByFilter: t,
  emptyStateContent: r,
  emptyStateText: n,
  isDataPartial: l,
  isFolder: d,
  isEligbileForProTeamLockedRevampUI: m,
  newFileTile: _,
  overFilteredText: f,
  shouldLogVisibleTileCount: g = !1,
  sortFilterOptions: x,
  tileActions: b,
  tiles: v
}) {
  let y = selectCurrentUser();
  let w = getSelectedView();
  let j = w.view === 'folder' ? w.folderId : null;
  let T = liveStoreInstance.Folder.useValue(j).data;
  let C = [y?.drafts_folder_id, y?.personal_drafts_folder_id].includes(T?.id);
  let {
    showing,
    show,
    data
  } = _$$L2();
  let A = selectPermissionsState();
  let O = getCurrentTeam();
  let F = T?.team_id || O?.id;
  let P = useSubscription(TeamById(isReduxDeprecationShadowreadOrCutover(ConfigGroups.GROUP_7) && F ? {
    teamId: F
  } : null));
  let L = useMemo(() => P.transform(({
    team: e
  }) => !!e?.canEdit), [P]);
  let D = useShadowReadLoaded({
    label: adminPermissionConfig.TilesView.canEditTeam,
    oldValue: resourceUtils.useMemoizedLoaded(canEditTeam(T?.team_id || O?.id || '', A)),
    newValue: L,
    enableFullRead: isReduxDeprecationCutover(ConfigGroups.GROUP_7),
    contextArgs: {
      folderTeamId: T?.team_id,
      teamFromFileBrowserId: O?.id
    }
  }).unwrapOr(!1);
  let M = useMemo(() => P.transform(({
    team: e
  }) => !!e?.canAdmin).unwrapOr(!1), [P]);
  useEffect(() => {
    let e = 'page_selected_view';
    let t = globalPerfTimer.get(e);
    if (t && t.isRunning && !t.isUnreliable) {
      let t = globalPerfTimer.tryStop(e);
      t && trackEventAnalytics('File Browser Tab Switch Page Load Time', {
        elapsedMs: t,
        selectedView: w.view
      }, {
        forwardToDatadog: !0,
        batchRequest: !0
      });
    }
  }, [w.view, j]);
  let {
    userStateLoaded,
    userExternallyRestricted,
    selectedBranchKeyByRepoId
  } = selectWithShallowEqual(e => ({
    userStateLoaded: e.userStateLoaded,
    userExternallyRestricted: isOrgUserExternallyRestrictedFromState(A),
    selectedBranchKeyByRepoId: e.selectedBranchKeyByRepoId
  }));
  let $ = useDispatch();
  let G = vt(O?.id);
  let V = !!O && G;
  let z = !!O && !!m;
  let H = x.tileSortFilterConfig.viewMode ?? ViewMode.GRID;
  let K = H === ViewMode.LIST;
  let Y = w.view === 'recentsAndSharing' && w.tab === ViewTypeEnum.SHARED_FILES;
  let J = (e, t, r) => e === PermissionType.ANY || e === PermissionType.SELF && r.type === _$$nb.FILE && r.file.creatorId === t || e === PermissionType.SELF && r.type === _$$nb.REPO && r.branches[0].creator_id === t || e === PermissionType.OTHER && r.type === _$$nb.FILE && r.file.creatorId !== t || e === PermissionType.OTHER && r.type === _$$nb.REPO && r.branches[0].creator_id !== t;
  let X = (e, t) => {
    let r = 'design';
    switch (t.type === _$$nb.FILE ? r = t.file.editorType : t.type === _$$nb.PINNED_FILE ? r = t.file.editorType : t.type === _$$nb.OFFLINE_FILE && (r = t.file.editorType), e) {
      case FileType.ANY:
        return !0;
      case FileType.DESIGN:
        if (t.type === _$$nb.FILE || t.type === _$$nb.REPO || t.type === _$$nb.PINNED_FILE || t.type === _$$nb.OFFLINE_FILE) return r === 'design';
        return !1;
      case FileType.FIGJAM:
        if (t.type === _$$nb.FILE || t.type === _$$nb.PINNED_FILE || t.type === _$$nb.OFFLINE_FILE) return r === 'whiteboard';
        return !1;
      case FileType.PROTOTYPE:
        return t.type === _$$nb.PROTOTYPE;
      case FileType.SLIDES:
        if (t.type === _$$nb.FILE || t.type === _$$nb.PINNED_FILE || t.type === _$$nb.OFFLINE_FILE) return r === 'slides';
        return !1;
      case FileType.SITES:
        if (t.type === _$$nb.FILE || t.type === _$$nb.PINNED_FILE || t.type === _$$nb.OFFLINE_FILE) return r === 'sites';
        return !1;
      case FileType.COOPER:
        if (t.type === _$$nb.FILE || t.type === _$$nb.PINNED_FILE || t.type === _$$nb.OFFLINE_FILE) return r === 'cooper';
        return !1;
      case FileType.MAKE:
        if (t.type === _$$nb.FILE || t.type === _$$nb.PINNED_FILE || t.type === _$$nb.OFFLINE_FILE) return r === 'figmake';
        return !1;
      default:
        throwTypeError(e);
    }
  };
  let Q = (e, t) => !e || e === `${_$$Tf.getSharedBy(t)}`;
  let Z = useCallback((e, t) => {
    if (w.view === 'recentsAndSharing' && w.tab === ViewTypeEnum.SHARED_FILES || !e || !e.planId) return !0;
    let r = e.planId;
    switch (t.type) {
      case _$$nb.FILE:
        return (e.planType === 'org' ? t.file.parentOrgId : t.file.teamId) === r;
      case _$$nb.REPO:
        return (e.planType === 'org' ? t.repo.parent_org_id : t.repo.team_id) === r;
      case _$$nb.PROTOTYPE:
        return (e.planType === 'org' ? t.prototype.parent_org?.id : t.prototype.parent_team?.id) === r;
      case _$$nb.OFFLINE_FILE:
        return e.planType === 'org' && t.file.orgId === r;
      default:
        return !1;
    }
  }, [w]);
  let ee = useCallback((e, t) => {
    let r;
    let a;
    let s;
    let i = e.filter(e => Q(t.filters.sharedBy, e) && X(t.filters.fileType, e) && J(t.filters.creator, A.user?.id, e) && Z(t.filters.plan, e));
    if (r = Y ? i.filter(e => e.type === _$$nb.FILE || e.type === _$$nb.PROTOTYPE || e.type === _$$nb.REPO) : i.filter(e => e.type === _$$nb.FILE || e.type === _$$nb.REPO || e.type === _$$nb.OFFLINE_FILE), w.view === 'recentsAndSharing' && w.tab === ViewTypeEnum.SHARED_FILES) return i;
    let n = t.sort.dir === SortOrder.DESC;
    switch (t.sort.key) {
      case SortField.ACCESSED_AT:
        a = _$$f5.byComparators(u6);
        s = i;
        break;
      case SortField.CREATED_AT:
        a = _$$f5.byComparators(u3);
        s = i;
        break;
      case SortField.TOUCHED_AT:
        a = _$$f5.byComparators(u7);
        s = r;
        break;
      case SortField.NAME:
        if (C) {
          a = _$$f5.byComparators(u4, _$$f5.byProperty('type'));
          s = i;
          break;
        }
        let o = i.length < MAX_LENGTH;
        a = _$$f5.byComparators(o ? u4 : u2, _$$f5.byProperty('type'), u5, u8);
        s = i;
        break;
      case SortField.TRASHED_AT:
        a = _$$f5.byComparators(u9);
        s = r;
        break;
      case SortField.SHARED_AT:
        return i;
      default:
        console.error('Unknown sort key', t.sort.key);
        return [];
    }
    if (a = n ? _$$f5.reverse(a) : a, s.sort(a), l) {
      for (; s[s.length - 1]?.type === _$$nb.OFFLINE_FILE;) s.pop();
    }
    return s;
  }, [Y, Z, l, C, w, A.user?.id]);
  let et = useMemo(() => ee(v, x.tileSortFilterConfig), [ee, v, x.tileSortFilterConfig]);
  let er = useAtomWithSubscription(Y6);
  let ea = useCallback((r, a, s) => {
    u1({
      tile: r,
      index: s,
      dispatch: $,
      selectedView: w,
      currentPlanFilter: e,
      currentSharedByFilter: t,
      isListView: K
    });
    (function ({
      tile: e,
      e: t,
      dispatch: r,
      selectedView: a,
      permissionsState: s,
      selectedBranchKeyByRepoId: i,
      renamingItem: n
    }) {
      if (_$$Tf.isRenaming(e, n) || e.type === _$$nb.FILE && e.file.trashedAt || e.type === _$$nb.REPO && e.repo.trashed_at) {
        t.preventDefault();
        t.stopPropagation();
        return;
      }
      let o = BrowserInfo.mac ? t.metaKey : t.ctrlKey;
      let l = null;
      o && t.shiftKey ? l = OpenTarget.FOCAL_TAB : o ? l = OpenTarget.BACKGROUND_TAB : t.shiftKey && (l = OpenTarget.NEW_WINDOW);
      let d = s.user;
      if (desktopAPIInstance) {
        let a;
        switch (l = l ?? OpenTarget.FOCAL_TAB, t.preventDefault(), t.stopPropagation(), e.type) {
          case _$$nb.FILE:
            a = !!(e.file.isTeamTemplate && LQ(s));
            desktopAPIInstance.openFile({
              fileKey: e.file.key,
              title: e.file.name || 'Untitled',
              fileEditorType: e.file.editorType,
              target: l,
              isBranch: isBranchAlt(e.file),
              isLibrary: !!e.file.lastPublishedAt,
              isTeamTemplate: a,
              userId: d?.id
            });
            break;
          case _$$nb.PINNED_FILE:
            a = !!(e.file.isTeamTemplate && LQ(s));
            desktopAPIInstance.openFile({
              fileKey: e.file.key,
              title: e.file.name || 'Untitled',
              fileEditorType: e.file.editorType,
              isTeamTemplate: a,
              target: l,
              userId: d?.id
            });
            break;
          case _$$nb.PROTOTYPE:
            desktopAPIInstance.openPrototype(e.prototype.file_key, e.prototype.page_id, e.prototype.fig_file.name || '', l, d?.id);
            break;
          case _$$nb.REPO:
            let n = findBranchById(e.repo, e.branches, i);
            desktopAPIInstance.openFile({
              fileKey: n.key,
              title: n.name,
              fileEditorType: n.editor_type,
              target: l,
              isBranch: isBranch(n),
              isLibrary: !!n.last_published_at,
              userId: d?.id
            });
            break;
          case _$$nb.OFFLINE_FILE:
            r(NA({
              file: e.file,
              openNewFileIn: TabOpenBehavior.NEW_TAB,
              source: NotificationType.OFFLINE_FILE_TILE
            }));
            break;
          default:
            throwTypeError(e);
        }
        return;
      }
      if (l != null) {
        if (r(hideDropdownAction()), e.type === _$$nb.OFFLINE_FILE) {
          r(NA({
            file: e.file,
            openNewFileIn: TabOpenBehavior.NEW_TAB,
            source: NotificationType.OFFLINE_FILE_TILE
          }));
          t.preventDefault();
          t.stopPropagation();
          return;
        }
        if (t instanceof KeyboardEvent) {
          let r = _$$Tf.getUrl(e, i);
          customHistory.redirect(r, '_blank');
          t.preventDefault();
          t.stopPropagation();
        }
        return;
      }
      t.preventDefault();
      t.stopPropagation();
      let m = s.currentUserOrgId;
      let _ = s.currentTeamId;
      let p = a.view === 'recentsAndSharing' || a.view === 'folder' ? a : void 0;
      r(setLastVisitedPlan({
        planId: m || _,
        planType: m ? OrganizationType.ORG : OrganizationType.TEAM
      }));
      let f = {
        user: d,
        teamId: _,
        orgId: m,
        selectedView: a
      };
      switch (e.type) {
        case _$$nb.FILE:
          compareValues(m, e.file.parentOrgId, _, e.file.teamId) ? navigateToFile({
            file: {
              key: e.file.key,
              editorType: e.file.editorType || void 0
            }
          }, f) : r(selectViewAction({
            view: 'fullscreen',
            fileKey: e.file.key,
            editorType: _$$z0.getIsExtension() ? FEditorType.DevHandoff : e.file.editorType ? mapFileTypeToEditorType(e.file.editorType) : FEditorType.Design,
            prevSelectedView: p
          }));
          break;
        case _$$nb.PINNED_FILE:
          compareValues(m, e.file.parentOrgId, _, e.file.teamId) ? navigateToFile({
            file: {
              key: e.file.key,
              editorType: e.file.editorType
            }
          }, f) : r(selectViewAction({
            view: 'fullscreen',
            fileKey: e.file.key,
            editorType: e.file.editorType ? mapFileTypeToEditorType(e.file.editorType) : FEditorType.Design,
            prevSelectedView: p
          }));
          break;
        case _$$nb.PROTOTYPE:
          let g = e.prototype.fig_file;
          compareValues(m, g.parent_org_id, _, g.team_id) ? navigateToFile({
            base: 'proto',
            file: {
              key: g.key,
              editorType: g.editor_type || void 0
            },
            nodeId: e.prototype.page_id
          }, f) : r(selectViewAction({
            view: 'prototype',
            file: g,
            nodeId: e.prototype.page_id,
            prevSelectedView: p
          }));
          break;
        case _$$nb.REPO:
          {
            let t = findBranchById(e.repo, e.branches, i);
            if (!t) throw new Error(`Branch not found for repo ${e.repo.id}`);
            let a = t.key;
            compareValues(m, t.parent_org_id, _, t.team_id) ? navigateToFile({
              file: {
                key: a
              }
            }, f) : r(selectViewAction({
              view: 'fullscreen',
              fileKey: a,
              editorType: FEditorType.Design,
              prevSelectedView: p
            }));
            break;
          }
        case _$$nb.OFFLINE_FILE:
          r(NA({
            file: e.file,
            openNewFileIn: TabOpenBehavior.SAME_TAB,
            source: NotificationType.OFFLINE_FILE_TILE
          }));
          break;
        default:
          throwTypeError(e);
      }
    })({
      tile: r,
      e: a,
      dispatch: $,
      selectedView: w,
      permissionsState: A,
      selectedBranchKeyByRepoId,
      renamingItem: er
    });
  }, [K, e, t, $, A, selectedBranchKeyByRepoId, w, er]);
  let es = useCallback((r, a, s) => {
    u1({
      tile: r,
      index: s,
      dispatch: $,
      selectedView: w,
      currentPlanFilter: e,
      currentSharedByFilter: t,
      isListView: K
    });
  }, [K, e, t, w, $]);
  let ei = useCallback((e, t, r) => {
    let a = _$$Tf.getId(e);
    _$$$5.start(a);
    show({
      data: {
        tile: e,
        targetRect: {
          top: t.clientY,
          right: t.clientX,
          bottom: t.clientY,
          left: t.clientX,
          width: 1,
          height: 1
        },
        index: r
      }
    });
  }, [show]);
  let en = _$$nw(v);
  let [eo, el] = useState([]);
  let {
    setVisibleTiles
  } = function ({
    shouldLogVisibleTileCount: e,
    viewMode: t,
    sortedFilteredTilesLength: r
  }) {
    let [a, i] = useState(null);
    let n = getSelectedView().view;
    let o = useRef(!1);
    useEffect(() => {
      let s = o.current;
      e && !s && a && (analyticsEventManager.trackDefinedEvent('file_browser.visible_tiles_count', {
        totalCount: r,
        visibleCount: a.length,
        viewMode: getViewModeKey(t),
        selectedView: n,
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
        isMobileDevice: BrowserInfo.mobile
      }), o.current = !0);
    }, [a, e, t, r, n]);
    return {
      visibleTiles: a,
      setVisibleTiles: i
    };
  }({
    shouldLogVisibleTileCount: g,
    viewMode: H,
    sortedFilteredTilesLength: et.length
  });
  if (Cm(eo), !function (e) {
    let t = getSelectedView();
    let r = useDispatch();
    let a = useMemoStable(() => {
      if (t.view === 'deletedFiles') return [];
      let r = [];
      e.forEach(e => {
        switch (e.type) {
          case _$$nb.FILE:
            r.push({
              fileKey: e.file.key
            });
            break;
          case _$$nb.REPO:
            let t = yF(e);
            r.push({
              fileKey: t.key
            });
        }
      });
      return r;
    }, [t.view, e]);
    let n = useMultiSubscription(ActiveFileUsersForFileView, a);
    useEffect(() => {
      for (let {
        result,
        args
      } of n) {
        if (result.status === 'loaded' && result.data) {
          let a = ZF(result.data);
          r(setActiveFileUsersAction({
            fileKey: args.fileKey,
            users: a
          }));
        }
      }
    }, [n, r]);
  }(eo), et.length === 0) {
    let e = (() => {
      if (v.length > 0 && f !== '') {
        let e = f ?? getI18nString('file_browser.tiles_view.default_overfiltered_text');
        return jsx('div', {
          'className': u0,
          'data-test-id': 'over-filtered-state-text',
          'children': e
        });
      }
      let e = '';
      return (n ? e = n : (BrowserInfo.mobile || BrowserInfo.tablet) && (e = getI18nString('file_browser.folder.this_project_is_empty')), e) ? jsx('div', {
        'className': u0,
        'data-test-id': 'empty-state-text',
        'children': e
      }) : null;
    })();
    if (e) {
      return jsx('div', {
        className: uZ,
        children: jsxs('div', {
          className: cssBuilderInstance.flex.$,
          children: [e, V && jsx('div', {
            className: cssBuilderInstance.mr32.$,
            children: jsx(_$$R9, {
              teamId: O.id,
              canEditTeam: D
            })
          }), z && jsx('div', {
            className: cssBuilderInstance.mr32.$,
            children: jsx(uq, {
              team: O,
              canAdminTeam: M
            })
          })]
        })
      });
    }
    if (r) {
      return jsx('div', {
        className: uZ,
        children: r
      });
    }
  }
  let eu = uZ + (K ? ` ${_$$_O} ` : ` ${CK} `);
  let em = v.length > 0;
  if (!userStateLoaded && !getFeatureFlags().stop_rendering_tiles_view_loading_spinner) {
    return jsx('div', {
      className: 'tiles_view--loading--6rn3X',
      children: jsx(_$$k3, {})
    });
  }
  let e_ = !!O?.restrictions_list?.includes(FPlanLimitationType.LOCKED);
  let ep = V || e_ && z;
  return jsxs('div', {
    className: uZ,
    children: [jsxs('div', {
      className: eu,
      children: [jsxs('div', {
        className: cssBuilderInstance.flex.$,
        children: [em && jsx(_$$d7, {
          sortConfig: x.tileSortFilterConfig.sort,
          handleOpenTile: es,
          items: et,
          sortBy: e => {
            let t = x.tileSortFilterConfig;
            let r = t.sort.dir === SortOrder.DESC ? SortOrder.ASC : SortOrder.DESC;
            $(setBrowserTileSortView({
              selectedView: w,
              config: {
                ...t,
                sort: {
                  key: e,
                  dir: e === t.sort.key ? r : t.sort.dir
                }
              },
              tab: w.view === 'recentsAndSharing' ? w.tab : void 0
            }));
          },
          viewType: K ? ViewMode.LIST : ViewMode.GRID,
          updateRenderedItems: el,
          updateVisibleItems: setVisibleTiles,
          handleOpenDropdown: ei,
          checksForViewOnlyLabels: ep ? {
            teamId: O.id,
            isLockedTeam: !0
          } : void 0
        }), em && (V ? jsx('div', {
          className: cssBuilderInstance.mr32.$,
          children: jsx(_$$R9, {
            teamId: O.id,
            canEditTeam: D
          })
        }) : z ? jsx('div', {
          className: cssBuilderInstance.mr32.$,
          children: jsx(uq, {
            team: O,
            canAdminTeam: M
          })
        }) : jsx(uA, {
          canEditTeam: D,
          isDraftsFolder: C
        }))]
      }), !(BrowserInfo.mobile || BrowserInfo.tablet) && _ && !userExternallyRestricted && !em && jsxs('div', {
        className: cssBuilderInstance.flex.$,
        children: [jsx('div', {
          className: 'tiles_view--importPrompt--srrJn',
          children: jsxs('div', {
            className: u0,
            children: [jsx('div', {
              className: 'tiles_view--emptyTitle--3Vwmu',
              children: d ? getI18nString('file_browser.folder.this_project_doesn_t_have_any_files') : getI18nString('file_browser.folder.no_files_yet')
            }), renderI18nText('file_browser.folder.create_a_new_file_to_start_from_scratch_with_pptx')]
          })
        }), V ? jsx('div', {
          className: cssBuilderInstance.mr32.$,
          children: jsx(_$$R9, {
            teamId: O.id,
            canEditTeam: D
          })
        }) : z ? jsx('div', {
          className: cssBuilderInstance.mr32.$,
          children: jsx(uq, {
            team: O,
            canAdminTeam: M
          })
        }) : jsx(uA, {
          canEditTeam: D,
          isDraftsFolder: C
        })]
      })]
    }), (() => {
      let e = data?.tile ?? null;
      let t = data?.index;
      return jsx(TrackingProvider, {
        name: d ? _$$e7.PROJECT_TILES_VIEW_DROPDOWN : _$$e7.TILES_VIEW_DROP_DOWN,
        enabled: showing,
        properties: {
          tileType: e?.type,
          tileFileId: e?.type === _$$nb.FILE ? e?.file.key : void 0
        },
        children: jsx(_$$i4, {
          tileActions: b,
          tile: e,
          selectedTiles: en,
          openTile: r => {
            e && ea(e, r, t);
          },
          dropdownVisible: showing
        })
      });
    })()]
  });
}
function ma() {
  let e = _$$d2();
  let t = useSelector(e => e.currentTeamId);
  let r = useSelector(e => e.tileSortFilterStateByView);
  let n = vt();
  let o = _$$R3(t);
  let l = memoizeByArgs(e => ({
    tileSortFilterConfig: e,
    sortKeys: [SortField.TRASHED_AT, SortField.NAME, SortField.CREATED_AT, SortField.TOUCHED_AT]
  }))(r.deletedFiles);
  let {
    creatorFilter,
    fileTypeFilter
  } = function (e) {
    let t = 'your_files';
    switch (e.tileSortFilterConfig.filters.creator) {
      case PermissionType.SELF:
        t = 'your_files';
        break;
      case PermissionType.OTHER:
        t = 'other_files';
        break;
      case PermissionType.ANY:
        t = 'all';
        break;
      default:
        throwTypeError(e.tileSortFilterConfig.filters.creator);
    }
    let r = '';
    switch (e.tileSortFilterConfig.filters.fileType) {
      case FileType.DESIGN:
        r = 'design';
        break;
      case FileType.FIGJAM:
        r = 'whiteboard';
        break;
      case FileType.PROTOTYPE:
        r = 'prototype';
        break;
      case FileType.SLIDES:
        r = 'slides';
        break;
      case FileType.SITES:
        r = 'sites';
        break;
      case FileType.COOPER:
        r = 'cooper';
        break;
      case FileType.MAKE:
        r = 'figmake';
        break;
      case FileType.ANY:
        r = '';
        break;
      default:
        throwTypeError(e.tileSortFilterConfig.filters.fileType);
    }
    return {
      creatorFilter: t,
      fileTypeFilter: r
    };
  }(l);
  let u = useSuspendCurrentPrivilegedPlan({
    reportErrorsToTeam: _$$e.WAYFINDING
  });
  let {
    subscription,
    fetchNextPage,
    isFetchingNextPage
  } = function (e) {
    let t = useSubscription(TrashedFilesPageView, {
      ...e,
      firstPageSize: 55
    });
    let r = useCallback(() => {
      let e = t.data?.trashedResources;
      t.status === 'loaded' && e && e.hasNextPage() && e.loadNext(55);
    }, [t, 55]);
    let a = t.status === 'loaded' && t.data.trashedResources.isLoadingNextPage;
    let n = useMemo(() => t.transform(e => {
      let t = e.trashedResources;
      return t ? t.reduce((e, t) => {
        if (t.file && t.file.trashedAt) {
          let r;
          e.push((r = t.file, {
            type: _$$nb.FILE,
            file: {
              ...r,
              signedPreviewThumbnailUrls: null
            },
            sharedWithYouFields: null
          }));
        } else if (t.repo && t.repo.trashedAt) {
          let r = function (e) {
            if (!e.sourceFile) return null;
            let t = _$$H3.toSinatra(e);
            return {
              type: _$$nb.REPO,
              repo: t,
              branches: [fileEntityDataMapper.toSinatra(e.sourceFile)],
              selectedBranchKey: e.sourceFile.key
            };
          }(t.repo);
          r && e.push(r);
        }
        return e;
      }, []) : [];
    }), [t]);
    let o = useDispatch();
    useEffect(() => {
      if (n.data) {
        let e = n.data?.filter(e => e.type === _$$nb.FILE).map(e => fileEntityDataMapper.toSinatra(e.file)) || [];
        let t = n.data?.filter(e => e.type === _$$nb.REPO).map(e => e.repo) || [];
        o(batchPutFileAction({
          files: e
        }));
        o(_$$uo2({
          repos: t
        }));
      }
    }, [n.data, o]);
    return {
      subscription: n,
      fetchNextPage: r,
      isFetchingNextPage: a
    };
  }({
    cursor: null,
    creatorFilter,
    fileTypeFilter,
    sortType: l.tileSortFilterConfig.sort.key === SortField.TRASHED_AT ? 'trashed_at' : 'name',
    sortDirection: l.tileSortFilterConfig.sort.dir === SortOrder.ASC ? 'asc' : 'desc',
    planId: u?.key.parentId ?? null,
    planType: u?.key.type ?? null,
    queryParams: null
  });
  let g = useMemo(() => subscription.unwrapOr([]), [subscription]);
  let {
    trackPerformanceEvent
  } = _$$S8('trashed_resources_pagination_performance', 'livegraph', !0);
  useEffect(() => {
    trackPerformanceEvent('fetch_end');
  }, [trackPerformanceEvent, g.length]);
  useEffect(() => {
    subscription.status === 'errors' && trackPerformanceEvent('fetch_error', {
      errors: JSON.stringify(subscription.errors ?? {})
    });
  }, [trackPerformanceEvent, subscription.status, subscription.errors]);
  useEffect(() => (trackPerformanceEvent('fetch_start'), () => {
    trackPerformanceEvent('fetch_cancel');
  }), [trackPerformanceEvent]);
  let x = useCallback(() => {
    isFetchingNextPage || (trackPerformanceEvent('fetch_next'), fetchNextPage());
  }, [isFetchingNextPage, fetchNextPage, trackPerformanceEvent]);
  let b = l.tileSortFilterConfig.filters;
  let v = l.tileSortFilterConfig.sort;
  return jsxs(_$$A2, {
    loadingElementId: 'loading-content-pane',
    loaded: subscription.status !== 'loading',
    loadingElementClassName: cssBuilderInstance.pr32.$,
    children: [jsx(_$$B4, {
      onShouldFetchNextPage: x,
      isFetchingNextPage,
      children: jsx(ms, {
        tiles: g,
        tileActions: {
          restore: !0,
          restoreToOtherFolders: !0,
          deleteForever: !0,
          duplicateToDrafts: !e
        },
        sortFilterOptions: l,
        isTeamLockedDueToStarterLimits: n,
        isEligbileForProTeamLockedRevampUI: o
      })
    }, `${creatorFilter}-${b.fileType}-${v.key}-${v.dir}`), jsx(_$$cx, {})]
  });
}
function ms({
  tiles: e,
  tileActions: t,
  sortFilterOptions: r,
  isEligbileForProTeamLockedRevampUI: s
}) {
  return jsx(me, {
    tiles: e,
    newFileTile: !1,
    tileActions: t,
    sortFilterOptions: r,
    emptyStateText: getI18nString('file_browser.tool_bar.trashed_empty_state'),
    isEligbileForProTeamLockedRevampUI: s
  });
}
function mc({
  canEditTeam: e
}) {
  let t;
  let r = useDispatch();
  let s = getCurrentTeam();
  let n = getSelectedViewType();
  let o = selectExperimentConfigHook('exp_fbg_project_limit_upsell');
  let l = _$$h3.useTrackingContext({
    trigger: UpsellModalType.FOLDER_UPSELL_CARD
  });
  if (!(t = useCurrentPublicPlan('FolderUpsellCard').unwrapOr(null)) || !e || t.tier !== FPlanNameType.STARTER || n === 'recentsAndSharing' || n === 'trashedFolders' || !o.getConfig().getValue('show_upsell', !1)) return null;
  let d = jsx(linkWithTracking, {
    className: cssBuilderInstance.noWrap.cursorDefault.$,
    onClick: e => {
      e.stopPropagation();
      r(showModalHandler({
        type: _$$V4,
        data: {
          upsellSource: UpsellModalType.FOLDER_UPSELL_CARD,
          teamId: s?.id
        }
      }));
    },
    trackingProperties: {
      trackingDescriptor: UpgradeAction.PROFESSIONAL_PLAN,
      ...l
    },
    trusted: !0,
    children: renderI18nText('team_view.folder_upsell.professional_plan')
  });
  return jsx(TrackingProvider, {
    name: 'Folder Upsell Card',
    properties: l,
    children: jsxs(TrackedButton, {
      className: U()(cssBuilderInstance.flex.flexColumn.alignLeft.p24.$, 'folder_upsell--card--m7-Lh'),
      onClick: () => {
        r(showModalHandler({
          type: ConsumptionPaywallModalPlansPricing,
          data: {
            team: s,
            resource: PageFolderFile.FOLDER,
            action: fileActionEnum.CREATE_FOLDER,
            currentPlan: consumptionPaywallUtils.Plan.STARTER,
            upsellPlan: consumptionPaywallUtils.Plan.PRO,
            editorType: null,
            upsellSource: UpsellModalType.FOLDER_UPSELL_CARD
          }
        }));
      },
      trackingProperties: {
        trackingDescriptor: UpgradeAction.FOLDER_UPSELL_CARD
      },
      dataTestId: 'folder_upsell_button',
      children: [jsxs('div', {
        className: cssBuilderInstance.relative.wFull.$,
        children: [jsx(_$$X6, {
          FileThumbnailComponent: mu
        }), jsx('div', {
          style: styleBuilderInstance.absolute.topHalf.leftHalf.add({
            transform: 'translate(-50%, -50%)'
          }).$,
          children: jsx(AutoLayout, {
            cornerRadius: 20,
            backgroundColor: 'brand',
            height: 40,
            width: 40,
            children: jsx(In, {
              icon: 'new-40',
              fill: 'onbrand'
            })
          })
        })]
      }), jsxs(AutoLayout, {
        direction: 'vertical',
        padding: {
          top: 16
        },
        spacing: 0,
        height: 'hug-contents',
        children: [jsx(TextWithTruncation, {
          fontSize: 13,
          fontWeight: 'medium',
          children: renderI18nText('team_view.folder_upsell.upgrade_to_create_more_projects')
        }), jsx(TextWithTruncation, {
          fontSize: 11,
          color: 'secondary',
          children: renderI18nText('team_view.folder_upsell.get_unlimited_everything', {
            professionalPlanLink: d
          })
        })]
      })]
    })
  });
}
function mu() {
  return jsx('div', {
    className: cssBuilderInstance.wFull.hFull.colorBg.$
  });
}
function mm({
  canEditTeam: e
}) {
  let t = useDispatch();
  let r = getCurrentTeam();
  let s = getSelectedViewType();
  let n = _$$h3.useTrackingContext({
    trigger: UpsellModalType.FOLDER_UPSELL_CARD
  });
  let o = selectExperimentConfigHook('exp_fbg_project_limit_upsell');
  if (!r || !e || hasTeamPaidAccess(r) || s === 'recentsAndSharing' || s === 'trashedFolders' || !o.getConfig().getValue('show_upsell', !1)) return null;
  let l = jsx(linkWithTracking, {
    className: cssBuilderInstance.noWrap.cursorDefault.$,
    onClick: e => {
      e.stopPropagation();
      t(showModalHandler({
        type: _$$V4,
        data: {
          upsellSource: UpsellModalType.FOLDER_UPSELL_CARD,
          teamId: r?.id
        }
      }));
    },
    trackingProperties: {
      trackingDescriptor: UpgradeAction.PROFESSIONAL_PLAN,
      ...n
    },
    trusted: !0,
    children: renderI18nText('team_view.folder_upsell.professional_plan')
  });
  return jsx(TrackingProvider, {
    name: 'Folder Upsell List',
    properties: n,
    children: jsx('div', {
      className: cssBuilderInstance.flex.mt16.bRadius8.b1.colorBorder.$,
      style: styleBuilderInstance.add({
        borderStyle: 'dashed'
      }).$,
      children: jsxs(TrackedButton, {
        className: U()(cssBuilderInstance.flex.alignLeft.gap12.py24.px16.bRadius8.wFull.pl36.$, 'folder_upsell--list--2Higk'),
        onClick: () => {
          t(showModalHandler({
            type: ConsumptionPaywallModalPlansPricing,
            data: {
              team: r,
              resource: PageFolderFile.FOLDER,
              action: fileActionEnum.CREATE_FOLDER,
              currentPlan: consumptionPaywallUtils.Plan.STARTER,
              upsellPlan: consumptionPaywallUtils.Plan.PRO,
              editorType: null,
              upsellSource: UpsellModalType.FOLDER_UPSELL_CARD
            }
          }));
        },
        trackingProperties: {
          trackingDescriptor: UpgradeAction.FOLDER_UPSELL_CARD
        },
        dataTestId: 'folder_upsell_button',
        children: [jsxs('div', {
          className: U()(cssBuilderInstance.relative.flexShrink0.h40.w64.py4.px8.colorBgSecondary.bRadius4.$, 'folder_upsell--listCard--qnkxf'),
          children: [jsx('div', {
            style: styleBuilderInstance.absolute.topHalf.leftHalf.add({
              transform: 'translate(-50%, -50%)'
            }).$,
            children: jsx(AutoLayout, {
              cornerRadius: 12,
              backgroundColor: 'brand',
              height: 24,
              width: 24,
              horizontalAlignItems: 'center',
              verticalAlignItems: 'center',
              children: jsx(In, {
                icon: 'plus-32',
                fill: 'onbrand'
              })
            })
          }), jsxs(AutoLayout, {
            direction: 'vertical',
            spacing: 4,
            children: [jsxs(AutoLayout, {
              direction: 'horizontal',
              spacing: 4,
              children: [jsx(AutoLayout, {
                cornerRadius: 2,
                backgroundColor: 'default'
              }), jsx(AutoLayout, {
                cornerRadius: 2,
                backgroundColor: 'default'
              })]
            }), jsxs(AutoLayout, {
              direction: 'horizontal',
              spacing: 4,
              children: [jsx(AutoLayout, {
                cornerRadius: 2,
                backgroundColor: 'default'
              }), jsx(AutoLayout, {
                cornerRadius: 2,
                backgroundColor: 'default'
              })]
            })]
          })]
        }), jsxs(AutoLayout, {
          direction: 'vertical',
          spacing: 0,
          children: [jsx(TextWithTruncation, {
            fontSize: 13,
            children: renderI18nText('team_view.folder_upsell.upgrade_to_create_more_projects')
          }), jsx(TextWithTruncation, {
            fontSize: 11,
            color: 'secondary',
            children: renderI18nText('team_view.folder_upsell.get_unlimited_everything', {
              professionalPlanLink: l
            })
          })]
        })]
      })
    })
  });
}
let mh = 'folder_list_view--emptyState--8vmgw tiles_view--emptyState--jfzsE text--fontPos11--2LvXf text--_fontBase--QdLsd text--fontPos11--2LvXf text--_fontBase--QdLsd';
function mx(e) {
  let t = useSelector(e => e.dropdownShown);
  let r = useSelector(e => e.currentUserOrgId);
  let s = useSelector(e => e.user);
  let {
    folderList
  } = e;
  let o = () => e.viewMode === ViewMode.LIST;
  let l = vt(e.teamId);
  let d = !!e.teamId && !!e.isEligbileForProTeamLockedRevampUI;
  let c = jn();
  let u = e.teamId ? {
    teamId: e.teamId,
    isLockedTeam: !!l || c
  } : void 0;
  let m = _$$H4(t);
  return folderList.length === 0 ? jsx(Fragment, {
    children: e.onCreateNewFolder && !isExternalRestricted(s, r) ? jsx('div', {
      className: mh,
      children: e.canEditTeamContents ? jsxs('div', {
        className: 'x78zum5 xdt5ytf x6s0dn4 xl56j7k xou54vl',
        children: [jsx('div', {
          className: 'xk50ysn',
          children: renderI18nText('team_view.folder_empty_view.no_projects_yet')
        }), renderI18nText('team_view.folder_empty_view.projects_help_you_organize'), jsx(Button, {
          variant: 'secondary',
          onClick: e.onCreateNewFolder,
          iconPrefix: jsx(_$$x2, {}),
          children: renderI18nText('team_view.folder_empty_view.new_project')
        })]
      }) : renderI18nText('team_view.folder_empty_view.this_team_does_not_have_any_projects_yet')
    }) : e.emptyStateText != null ? jsxs('div', {
      className: 'x78zum5 x1rzw5jd',
      children: [jsx('div', {
        className: mh,
        children: e.emptyStateText
      }), l && jsx(_$$R9, {
        teamId: e.teamId,
        canEditTeam: !!e.canEditTeamContents
      }), e.team && d && jsx(uq, {
        team: e.team,
        canAdminTeam: !!e.canAdminTeam
      })]
    }) : renderI18nText('team_view.folder_empty_view.no_projects')
  }) : jsxs(Fragment, {
    children: [(() => {
      let t = folderList.length >= 2 ? 1 : folderList.length === 1 ? 0 : void 0;
      return jsxs('div', {
        className: 'x78zum5 x1q0g3np',
        children: [jsxs('div', {
          className: 'xh8yej3',
          children: [jsx(_$$m3, {
            checksForViewOnlyLabels: u,
            currentPlanFilter: e.currentPlanFilter,
            dataOnboardingKey: 'project-card',
            dataOnboardingKeyIndex: t,
            folderList,
            isSharerInfoIncluded: e.isSharerInfoIncluded,
            onChangeSortOptions: e.onChangeSortOptions,
            trailingGridElements: l || c ? jsx(Fragment, {}) : jsx(mc, {
              canEditTeam: e.canEditTeamContents
            }),
            viewType: e.viewMode
          }), !l && !c && o() && jsx(mm, {
            canEditTeam: e.canEditTeamContents
          })]
        }), jsxs('div', {
          className: 'folder_list_view--infoCard--DzZGD',
          children: [l && jsx(_$$R9, {
            teamId: e.teamId,
            canEditTeam: !!e.canEditTeamContents
          }), e.team && d && jsx(uq, {
            team: e.team,
            canAdminTeam: !!e.canAdminTeam
          })]
        })]
      });
    })(), m && jsx(_$$p9, {
      folder: m
    })]
  });
}
let mb = {
  name: _$$f5.byProperty('name', _$$f5.LEXICOGRAPHICALLY),
  lastModified: _$$f5.byProperty('folderLastUpdated'),
  team: _$$f5.byProperty('folderTeamName', _$$f5.LEXICOGRAPHICALLY),
  owner: _$$f5.byProperty('folderOwnerName', _$$f5.LEXICOGRAPHICALLY),
  sharedAt: _$$f5.byProperty('folderSharedAt'),
  createdAt: _$$f5.byProperty('created_at'),
  trashedAt: _$$f5.byProperty('trashed_at')
};
function mv(e) {
  let {
    folderList,
    ...r
  } = e;
  let n = useDispatch();
  let o = e.selectedView.view === 'trashedFolders';
  let l = e.selectedView.view === 'team';
  let d = e.selectedView.view === 'recentsAndSharing';
  let c = useSelector(e => e.teams);
  let u = useSelector(e => e.roles);
  let m = useSelector(e => e.tileSortFilterStateByView);
  let _ = useMemo(() => {
    if (l) {
      let e = m.team;
      return {
        viewMode: void 0 !== e.viewMode ? e.viewMode : ViewMode.GRID,
        sortKey: function (e) {
          switch (e) {
            case SortField.NAME:
              return 'name';
            case SortField.TOUCHED_AT:
              return 'lastModified';
            case SortField.CREATED_AT:
              return 'createdAt';
            case SortField.TRASHED_AT:
              return 'trashedAt';
            case SortField.ACCESSED_AT:
            case SortField.SHARED_AT:
              return 'lastModified';
            case SortField.OWNER:
              return 'owner';
            case SortField.SEARCH_RELEVANCE:
            case SortField.PROJECT_NAME:
              return 'name';
            default:
              throwTypeError(e);
          }
        }(e.sort.key),
        sortDesc: e.sort.dir === SortOrder.DESC
      };
    }
    if (o) {
      let e = m.trashedFolders;
      return {
        viewMode: void 0 !== e.viewMode ? e.viewMode : ViewMode.GRID,
        sortKey: getSortFieldProperty(e.sort.key) ?? 'trashedAt',
        sortDesc: e.sort.dir === SortOrder.DESC
      };
    }
    if (!d) {
      return {
        viewMode: ViewMode.GRID,
        sortKey: 'lastModified',
        sortDesc: !0
      };
    }
    {
      let e = m.recentsAndSharing;
      return {
        viewMode: void 0 !== e.sharedProjects.viewMode ? e.sharedProjects.viewMode : ViewMode.GRID,
        sortKey: getSortFieldProperty(e.sharedProjects.sort.key) ?? 'lastModified',
        sortDesc: e.sharedProjects.sort.dir === SortOrder.DESC
      };
    }
  }, [l, o, d, m.team, m.trashedFolders, m.recentsAndSharing]);
  let p = useMemo(() => {
    if (d) return e.folderList;
    let t = mb[_.sortKey];
    if (!t) return e.folderList;
    let r = _.sortDesc ? _$$f5.reverse(t) : t;
    let a = e.folderList.map(e => ({
      ...e,
      ..._$$Z2({
        teams: c,
        roles: u
      }, e)
    }));
    a.sort(r);
    return a;
  }, [d, _.sortKey, _.sortDesc, e.folderList, c, u]);
  return jsxs('div', {
    children: [o && m.trashedFolders.filters.role === PermissionAction.CAN_BE_VIEWED && jsx('div', {
      className: 'x1yztbdb x1tudf5h x1m2p0i2',
      children: jsx(_$$_7, {
        dataTestId: 'may-not-restore-or-permanently-delete-banner',
        color: _$$S9.INFORMATION,
        text: jsxs('p', {
          className: 'xk50ysn',
          children: [jsx('span', {
            className: 'x1s688f',
            children: renderI18nText('file_browser.folder_list_view.may_not_restore_or_permanently_delete_banner')
          }), '\xA0', renderI18nText('file_browser.folder_list_view.may_not_restore_or_permanently_delete_banner_content')]
        })
      })
    }), jsx(mx, {
      folderList: p,
      chunkSize: e.chunkSize,
      viewMode: _.viewMode,
      onChangeSortOptions: t => {
        if (l) {
          let r = t.sortKey === FolderSortKey.NAME ? SortField.NAME : SortField.TOUCHED_AT;
          let a = t.sortDesc ? SortOrder.DESC : SortOrder.ASC;
          n(setBrowserTileSortView({
            selectedView: e.selectedView,
            config: {
              ...m.team,
              sort: {
                key: r,
                dir: a
              }
            }
          }));
        } else {
          n(setBrowserViewBarSortOptions({
            viewId: e.viewId,
            sortMode: {
              sortKey: t.sortKey,
              sortDesc: t.sortDesc
            }
          }));
        }
      },
      ...r
    })]
  });
}
function my() {
  let e = useSelector(e => e.currentUserOrgId);
  let t = getCurrentTeam();
  let r = useSubscription(TeamCanEdit, {
    id: t ? t.id : ''
  }, {
    enabled: !!t?.id
  });
  let s = useSubscription(TeamCanAdmin, {
    id: t ? t.id : ''
  }, {
    enabled: !!t?.id
  });
  let n = useSelector(e => e.tileSortFilterStateByView);
  let o = getSelectedView();
  let l = _$$R3(t?.id);
  let d = n.trashedFolders;
  let [{
    data: c,
    status: u
  }] = setupResourceAtomHandler(trashedFoldersQuery({
    orgId: e,
    teamId: t?.id ?? null,
    roleFilter: d.filters.role
  }));
  let m = r.status === 'loaded' && !!r.data.team && r.data.team.hasPermission;
  let _ = s.status === 'loaded' && !!s.data.team && s.data.team.hasPermission;
  return jsx(_$$A2, {
    loadingElementId: 'loading-content-pane',
    delay: 250,
    loaded: u !== 'loading',
    loadingElementClassName: cssBuilderInstance.pr32.$,
    children: jsx('div', {
      style: styleBuilderInstance.mt1.$,
      children: jsx(mv, {
        canAdminTeam: _,
        canEditTeamContents: m,
        chunkSize: c?.folders?.length || 0,
        emptyStateText: getI18nString('file_browser.trash_project.trashed_empty_state'),
        folderList: c?.folders || [],
        isEligbileForProTeamLockedRevampUI: l,
        isSharerInfoIncluded: !1,
        selectedView: o,
        team: t,
        teamId: t?.id,
        useLGPerms: !0,
        viewId: _$$l6
      })
    })
  });
}
var mw = (e => (e.FILES = 'files', e.FOLDERS = 'folders', e))(mw || {});
function mj(e) {
  let t = getSelectedView();
  if (t.view !== 'deletedFiles' && t.view !== 'trashedFolders') return jsx(Fragment, {});
  let r = jsx(uy, {
    currView: t
  });
  let s = e.selectedTab === 'folders' ? jsx(my, {}) : jsx(ma, {});
  return jsx(_$$r4, {
    viewBarSticky: !0,
    viewbar: r,
    content: s
  });
}
let mE = [Wb3, Ult, kmq, USq, jQF, j0N, Ob5, Qlc, I$z, X5_, LB2, I5n, Msu, UmN, Ql8, Q16, O5v, _$$rv, HaT, rQs, YHe, hxO, sqw, Duq, yjU, BTz, I3H, tZO, LPt, cJy, tUL, tBR, K69, Tp6, XIg, fQh, O9D, c6t, NM0, YPG, j9$, LQ8, r3Y].map(e => e.id);
function mI({
  children: e
}) {
  return jsx(_$$A17, {
    name: 'FileBrowser',
    order: mE,
    children: e
  });
}
function mC({
  folderId: e,
  enabled: t = !0
}) {
  let r = useSelector(t => t.tileSortFilterStateByView.folders.byId[e] ?? t.tileSortFilterStateByView.folders.$$default);
  let a = useMemo(() => ({
    file_type: mS(r.filters.fileType),
    sort_order: r.sort.dir === SortOrder.ASC ? 'asc' : 'desc',
    sort_column: mk(r.sort.key)
  }), [r.filters.fileType, r.sort.dir, r.sort.key]);
  return setupResourceAtomHandler(BU({
    folderId: e,
    ...a
  }), {
    enabled: t
  });
}
let mS = e => {
  switch (e) {
    case FileType.DESIGN:
      return 'design';
    case FileType.FIGJAM:
      return 'whiteboard';
    case FileType.PROTOTYPE:
      return 'prototype';
    case FileType.SITES:
      return 'sites';
    case FileType.SLIDES:
      return 'slides';
    case FileType.COOPER:
      return 'cooper';
    case FileType.MAKE:
      return 'figmake';
    case FileType.ANY:
      return '';
    default:
      throwTypeError(e);
  }
};
let mk = e => {
  switch (e) {
    case SortField.NAME:
      return 'name';
    case SortField.CREATED_AT:
      return 'created_at';
    case SortField.TOUCHED_AT:
      return 'touched_at';
    default:
      reportError(_$$e.WAYFINDING, new Error(`Attempting to sort by an unsupported sort key: ${e}`));
      return 'created_at';
  }
};
let mW = registerModal(e => {
  let t = useDispatch();
  let r = useSelector(e => e.teams)[e.teamId].subscription;
  let n = e.paymentRequiresAction;
  useEffect(() => {
    _$$T6.getHostedInvoicesPage({
      teamId: e.teamId
    }).then(({
      data: e
    }) => {
      openWindow(e.meta.hosted_invoice_url, '_blank', 'noopener');
    });
  }, [e.teamId]);
  useEffect(() => {
    n || r === FPaymentHealthStatusType.INCOMPLETE || t(hideSpecificModal({
      type: mW.type
    }));
  }, [r, t, n]);
  return jsx(Dd, {
    title: getI18nString('payments.pending_subscription_modal_header'),
    hideCancel: !0,
    confirmText: getI18nString('payments.got_it'),
    trackedConfirmationProperties: {
      trackingDescriptor: UpgradeAction.CONFIRM_VERIFY_PAYMENT,
      trackingContextName: 'Confirm Verify Payment'
    },
    children: renderI18nText('payments.pending_subscription_modal_description')
  });
}, 'PENDING_SUBSCRIPTION_CHANGE_MODAL');
let mG = 'banners--warn--bC4ke';
let mV = 'banners--primaryCtaButton--tyhCJ';
let mz = 'banners--content--ciED3';
let mH = 'banners--titleSmall--ceZgU';
let mK = 'banners--bold--qt00U';
let mY = 'banners--message--9BMLM';
let mJ = 'banners--messageSmall--YT-82';
let mq = 'banners--secondaryCtaButton--uYrvi';
let mX = 'banners--ctaButtonGroup--r8cfU';
let mQ = 'banners--closeButton--IXY-V';
let mZ = 'banners--teamBannerWithBackground--CwS6V banners--banner--l8udl';
let m0 = 'banners--teamUpgradeNotice--gqc9c';
let m1 = 'banners--softWarningBanner--QK9Y5';
let m4 = 'banners--softWarningBannerBlue--uQmhb';
function m3(e, t, r) {
  let i = useMemo(() => ({
    canAdmin: canAdminOrg(e.currentUserOrgId, e),
    canMember: canMemberOrg(e.currentUserOrgId, e)
  }), [e]);
  let n = useTeamPlanUser();
  let o = useIsOrgAdminUser(n);
  let l = useIsOrgMemberOrAdminUser(n);
  let d = useMemo(() => resourceUtils.transformAll([o, l], (e, t) => ({
    canAdmin: e,
    canMember: t
  })), [o, l]);
  let c = useShadowReadLoaded({
    oldValue: resourceUtils.useMemoizedLoaded(i),
    newValue: d,
    label: r,
    enableFullRead: isReduxDeprecationCutover(ConfigGroups.GROUP_7),
    contextArgs: {
      callsite: 'useOrgBannerContentQuery'
    }
  });
  return useMemo(() => c.transform(({
    canAdmin: r,
    canMember: s
  }) => function (e, t, r, s) {
    let i;
    if (!e.currentUserOrgId || !isOrgDelinquent(e.currentUserOrgId, e)) return null;
    let n = e.orgById[e.currentUserOrgId];
    if (!n) return null;
    let o = n.past_due_at && _$$A3(n.past_due_at).add(2, 'weeks') > _$$A3(new Date());
    if (!r && o) return null;
    let l = e.orgUsersByOrgId[e.currentUserOrgId] ?? {};
    let d = getTopAdminUsers(l).map(e => jsxs('span', {
      className: mK,
      children: [e.user.handle, ' (', e.user.email, ')']
    }, e.id));
    i = r ? n.billing === BillingSettingEnum.CHARGE_IMMEDIATELY ? renderI18nText('payments.org_past_due_on_payment', {
      invoice: jsx('a', {
        onClick: () => {
          t?.(selectViewAction({
            view: 'orgAdminSettings',
            orgAdminSettingsViewTab: DashboardSection.BILLING
          }));
        },
        children: renderI18nText('payments.outstanding_invoice')
      }),
      orgName: n.name
    }) : renderI18nText('payments.org_past_due_on_payment_invoiced', {
      email: jsx('b', {
        className: mK,
        children: getSupportEmail()
      }),
      orgName: n.name
    }) : renderI18nText('payments.please_reach_out_to_org_admins', {
      orgName: n.name,
      admins: s && jsxs('span', {
        children: [' ', jsx(_$$T5, {
          formatType: 'disjunction',
          children: d
        })]
      }),
      numAdmins: d.length
    });
    return {
      severity: _$$c7.WARN,
      title: getI18nString('payments.payment_not_received'),
      message: i,
      cta: null,
      onClickCta: null
    };
  }(e, t, r, s)), [t, c, e]);
}
function m7(e) {
  return e?.status === 'open' && !!e.payment_intent && [paymentActionRequirementEnum.REQUIRES_ACTION, paymentActionRequirementEnum.REQUIRES_SOURCE_ACTION].includes(e.payment_intent.status);
}
function m9(e, t, r, i, n, l) {
  let d = useMemo(() => ({
    canOwn: !!r && canOwnTeam(r, i),
    canAdmin: !!r && canAdminTeam(r, i),
    canEdit: !!r && canEditTeam(r, i),
    hasEditRoleOnTeam: !!r && hasMinRole(getRolesForUserAndTeam(r, i), AccessLevelEnum.EDITOR)
  }), [r, i]);
  let c = useShadowReadLoaded({
    oldValue: resourceUtils.useMemoizedLoaded(d),
    newValue: function (e) {
      let t = useSubscription(TeamById(isReduxDeprecationShadowreadOrCutover(ConfigGroups.GROUP_7) && e ? {
        teamId: e
      } : null));
      return useMemo(() => t.status === 'disabled' ? resourceUtils.loaded({
        canOwn: !1,
        canAdmin: !1,
        canEdit: !1,
        hasEditRoleOnTeam: !1
      }) : t.transform(({
        team: e
      }) => ({
        canOwn: e?.isOwner ?? !1,
        canAdmin: e?.canAdmin ?? !1,
        canEdit: e?.canEdit ?? !1,
        hasEditRoleOnTeam: e?.canEdit ?? !1
      })), [t]);
    }(r),
    label: l,
    enableFullRead: isReduxDeprecationCutover(ConfigGroups.GROUP_7),
    contextArgs: {
      callsite: 'useBannerContentQuery',
      resourceType: e,
      resourceId: t?.id,
      teamId: r
    }
  });
  let m = m3(i, n, l);
  return useMemo(() => resourceUtils.transformAll([m, c], (s, l) => s || function (e, t, r, s, i, n) {
    let l = r ? s.teams[r] : null;
    if (r && !l || e === 'file') return null;
    let d = s.currentTeamId;
    let c = l && l.subscription === FPaymentHealthStatusType.GRACE_PERIOD;
    let m = s.billingSummary;
    let _ = l?.subscription === FPaymentHealthStatusType.INCOMPLETE;
    let p = !!l?.org_id;
    let f = !!l?.subscription;
    let g = c && !p && f && (m7(m?.last_monthly_invoice) || m7(m?.last_annual_invoice));
    let x = l && (_ || g);
    let b = l && l.subscription === FPaymentHealthStatusType.NO_MONTHLY_SUB_EDITOR_COUNT_EXCEEDED;
    let v = n.canOwn;
    let y = n.canAdmin;
    let w = n.canEdit;
    let j = l && isTeamLocked(l.id, s);
    let T = e === 'folder' ? t : null;
    let E = 0;
    let I = {
      showReminder: !1,
      showAccessRestricted: !1
    };
    let C = e === 'folder' && !T;
    let S = !!getFeatureFlags().limited_plan_spaces && getInitialOptions().is_limited_team_plan && C;
    if (s.user) {
      let t = n.hasEditRoleOnTeam;
      let a = ['folder', 'team'].includes(e) && t;
      let i = isStudentValidated(s.user);
      let o = s.userEduGracePeriods;
      C ? d && hasEditorAccess(s.user.id, s.roles.byTeamId, s.teams[d]) && (I = getGracePeriodAccessStatus(o, i), E = getMinGracePeriodDays(o)) : r && a && (I = getGracePeriodAccessForKey(o, i, r, !!s.teams[r].student_team), E = getGracePeriodDaysOrZero(o, r));
    }
    let k = l && !hasValidSubscription(l) && !l.student_team && T && !isRootPath(T);
    let R = k && T.is_invite_only;
    let A = k && T.is_view_only;
    let O = T && isOrgFolder(T);
    let F = !O && !l && T && hasFolderRestrictions(T, s);
    let P = () => i?.(_$$WX({
      teamId: l.id,
      selectedView: s.selectedView
    }));
    let L = () => customHistory.redirect('/education/apply', BrowserInfo.isIpadNative ? void 0 : '_blank');
    let D = () => i?.(_$$WX({
      teamId: l.id,
      openInNewTab: !1,
      selectedView: {
        view: 'team',
        teamId: l.id
      }
    }));
    let M = () => i?.(showModalHandler({
      type: _$$V4,
      data: {
        upsellSource: UpsellModalType.BANNER
      }
    }));
    let B = isGracePeriodEndingSoon(l);
    let U = l && l.subscription_raw !== FPaymentHealthStatusType.OK && isTeamInGracePeriod(l) && y && _$$ng2.getProTrialStatus(l) !== _$$a10.IN_TRIAL && B;
    let W = ['team', 'folder'].includes(e) && w && hasWhiteboardFilesBetaLimitation(l);
    let $ = w && function (e, t) {
      let r = e && t[e.id]?.dismissed_legacy_team_upgrade_notice_banner;
      return hasLegacyFilesLimitation(e) && !r;
    }(l, s.userTeamFlags);
    let G = isExternalRestricted(s.user, s.currentUserOrgId);
    let V = _$$ng2.canSeeExpiredProTrialBanner(s.userTeamFlags, l, s);
    let z = l && s.userTeamFlags[l.id]?.[_$$lg];
    let H = s.user ? getDaysUntilExpiration(s.eduPeriodEnd, isStudentValidated(s.user)) : 1 / 0;
    let K = H > 0 && H !== 1 / 0;
    let Y = H === 0;
    let J = l && l.student_team_state === FStudentTeamStatusType.STUDENT_TEAM_CURRENT;
    let q = l && l.student_team_state === FStudentTeamStatusType.STUDENT_TEAM_EXPIRED && j;
    let X = K && v && J;
    let Q = Y && v && q;
    let Z = K && w && J;
    let ee = Y && !w && J;
    if (b) {
      return {
        severity: _$$c7.WARN,
        title: getI18nString('payments.locked'),
        message: y ? jsx('span', {
          children: renderI18nText('payments.no_monthly_sub_over_editor_limit_admin.seat_rename', {
            contactSupport: jsx('a', {
              href: `mailto:${getSupportEmail()}`,
              children: renderI18nText('payments.contact_support')
            })
          })
        }) : jsx('span', {
          children: renderI18nText('payments.no_monthly_sub_over_editor_limit.seat_rename')
        }),
        cta: y ? getI18nString('payments.manage_plan') : null,
        onClickCta: y ? () => {
          i?.(selectViewAction({
            view: 'teamAdminConsole',
            teamId: r,
            teamAdminConsoleViewTab: DashboardSections.SETTINGS
          }));
        } : null
      };
    }
    if (V && (j || w && !z)) {
      let e;
      let t;
      let s;
      let n;
      j ? (e = w ? renderI18nText('payments.pro_trial_expiry.locked_description_on_team', {
        teamName: l.name,
        lowerUsageLink: jsx(TrackedButton, {
          onClick: e => {
            e.preventDefault();
            i?.(showModalHandler({
              type: _$$v7,
              data: {
                teamId: r
              }
            }));
          },
          children: renderI18nText('payments.pro_trial_expiry.lower_usage')
        })
      }) : renderI18nText('payments.pro_trial_expiry.locked_description_for_viewer_on_team', {
        teamName: l.name
      }), t = w ? renderI18nText('payments.pro_trial_upgrade_cta.upgrade') : null, s = `${m1} `, n = 'Pro Trial Expiry Banner Locked') : (e = l ? renderI18nText('payments.pro_trial.trial_ended_banner_message', {
        teamName: l.name
      }) : renderI18nText('payments.pro_trial.trial_ended_banner_message.no_name'), t = renderI18nText('payments.pro_trial.trial_ended_banner_upgrade_cta'), s = `${m1} ${m4}`, n = 'Pro Trial Expiry Banner Unlocked');
      return {
        severity: _$$c7.WARN_SOFT,
        title: getI18nString('payments.pro_trial.trial_ended_banner_title'),
        message: e,
        cta: t,
        onClickCta: w ? D : void 0,
        svg: _$$A19,
        bannerClassName: s,
        trackingContextName: n,
        dismissible: !j,
        onClose: j ? void 0 : () => {
          r && i?.(_$$bE({
            all_team_flags: [{
              team_id: r,
              flags: {
                [_$$lg]: !0
              }
            }]
          }));
        }
      };
    }
    if (S) {
      return {
        severity: _$$c7.WARN_SOFT,
        title: renderI18nText('file_browser.limited_space_banner.heading'),
        message: renderI18nText('file_browser.limited_space_banner.description'),
        cta: null,
        hideIcon: !0,
        bannerClassName: 'banners--limitedSpaceBanner--Pq6k8'
      };
    }
    if (X || Q || Z || ee) {
      let e = () => i?.(showModalHandler({
        type: ZL,
        data: {
          teamId: l.id
        }
      }));
      if (X || Z) {
        return {
          severity: _$$c7.WARN_SOFT,
          title: renderI18nText('edu.banner.your_education_status_is_expiring_soon'),
          message: renderI18nText('edu.banner.to_keep_collaborating_upgrade_team', {
            teamName: l.name,
            verify: jsx(linkWithTracking, {
              href: '/education/apply',
              target: '_blank',
              trusted: !0,
              children: renderI18nText('edu.banner.verify_your_education_status')
            })
          }),
          cta: renderI18nText('edu.banner.learn_more'),
          onClickCta: e,
          svg: _$$A18,
          bannerClassName: `${m1} ${m4}`,
          trackingContextName: 'Edu Offboarding Banner'
        };
      }
      if (Q) {
        return {
          severity: _$$c7.WARN_SOFT,
          title: renderI18nText('edu.banner.your_education_plan_has_expired'),
          message: renderI18nText('edu.banner.team_is_now_view_only_for_all_members', {
            teamName: l.name
          }),
          cta: renderI18nText('edu.banner.learn_more'),
          onClickCta: e,
          svg: _$$A18,
          bannerClassName: m1,
          trackingContextName: 'Edu Offboarding Banner'
        };
      }
      if (ee) {
        return {
          severity: _$$c7.WARN_SOFT,
          title: renderI18nText('edu.banner.your_education_plan_has_expired'),
          message: renderI18nText('edu.banner.you_can_no_longer_edit_files', {
            teamName: l.name
          }),
          cta: renderI18nText('edu.banner.learn_more'),
          onClickCta: e,
          svg: _$$A18,
          bannerClassName: m1,
          trackingContextName: 'Edu Offboarding Banner'
        };
      }
    } else if (q) {
      return {
        severity: _$$c7.WARN_SOFT,
        title: renderI18nText('edu.banner.team_s_education_status_has_expired', {
          teamName: l.name
        }),
        message: renderI18nText('edu.banner.move_or_duplicate_files_to_another_location_to_save_your_work'),
        cta: null,
        svg: _$$A18,
        bannerClassName: m1,
        trackingContextName: 'Edu Offboarding Banner'
      };
    } else if (G) {
      let e = s.user.external_restricted_org_id;
      let t = getI18nString('external_collaboration_restricted.banner.restriction_description.no_org');
      if (e && s.orgById[e]) {
        let r = s.orgById[e];
        t = getI18nString('external_collaboration_restricted.banner.restriction_description', {
          organizationName: r.name
        });
      }
      return {
        severity: _$$c7.WARN,
        title: getI18nString('external_collaboration_restricted.banner.title'),
        message: t,
        cta: null,
        ctaTrackingProperties: void 0,
        onClickCta: null
      };
    } else if (s.user && ['team', 'folder'].includes(e) && I.showAccessRestricted) {
      let e;
      let t = getI18nString('banner.edu_grace_period.your_education_plan_has_expired');
      l ? isTeamOwner(s.user.id, s.roles.byTeamId, l) ? e = getI18nString('banner.edu_grace_period.team_is_now_view_only_for_all_members', {
        teamName: l.name
      }) : hasEditorAccessForAnyTeamMember(s.user.id, s.roles.byTeamId, l) ? e = getI18nString('banner.edu_grace_period.you_can_no_longer_edit_files_in_team', {
        teamName: l.name
      }) : (t = getI18nString('banner.edu_grace_period.your_education_plan_has_expired.is_member', {
        teamName: l.name
      }), e = getI18nString('banner.edu_grace_period.move_or_duplicate_files_to_another_location_to_save_your_work')) : e = getI18nString('banner.edu_grace_period.education_team_members_need_to_verify_their_education_status');
      return {
        severity: _$$c7.ANNOUNCEMENT,
        title: t,
        message: e,
        learnMoreUrl: '/education/',
        cta: getI18nString('banner.edu_grace_period.verify_status_button'),
        onClickCta: L,
        svg: _$$A18,
        bannerClassName: m0
      };
    } else if (['team', 'folder'].includes(e) && I.showReminder) {
      return {
        severity: _$$c7.ANNOUNCEMENT,
        title: getI18nString('banner.edu_grace_period.only_edu_grace_period_days_left', {
          daysLeft: E
        }),
        message: getI18nString('banner.edu_grace_period.to_keep_collaborating_on_figma_s_education_plan_please_verify_your_status_soon'),
        cta: getI18nString('banner.edu_grace_period.verify_status_button'),
        onClickCta: L,
        svg: _$$A21
      };
    } else if (R || A) {
      return {
        severity: _$$c7.WARN,
        title: getI18nString('payments.folder_locked'),
        message: getI18nString('payments.folder_locked_description', {
          projectType: (R ? 'Invite' : 'View') == 'Invite' ? getI18nString('payments.invite_only_projects') : getI18nString('payments.view_only_projects'),
          teamName: l.name
        }),
        learnMoreUrl: '/pricing',
        cta: w ? getI18nString('payments.upgrade_now') : getI18nString('payments.contact_admin_for_details'),
        ctaTrackingProperties: w ? {
          trackingDescriptor: UpgradeAction.UPGRADE_NOW,
          upsellSource: UpsellModalType.BANNER
        } : void 0,
        onClickCta: w ? P : null
      };
    } else if (F && e === 'folder') {
      setupShadowRead({
        label: adminPermissionConfig.getBannerContent.personalProjectDeprecated,
        oldValue: F && e === 'folder',
        newValue: !1,
        maxReports: 3
      });
      return {
        severity: _$$c7.WARN,
        title: getI18nString('payments.locked'),
        message: getI18nString('payments.projects_deprecated'),
        learnMoreUrl: '/pricing-faq#what-changes-for-me',
        cta: null,
        onClickCta: null
      };
    } else if (O && e === 'folder') {
      return {
        severity: _$$c7.WARN,
        title: getI18nString('payments.abandoned_project'),
        message: getI18nString('payments.abandoned_project_description'),
        cta: null,
        onClickCta: null
      };
    } else if ($) {
      let e = getI18nString('payments.file_limit_unified', {
        figmaFiles: STANDARD_LIMIT,
        figjamFiles: STANDARD_LIMIT
      });
      W ? $ || (e = getI18nString('payments.file_limit_figjam', {
        figjamFiles: STANDARD_LIMIT
      })) : e = getI18nString('payments.file_limit_figma', {
        figmaFiles: STANDARD_LIMIT
      });
      let t = () => jsx('button', {
        type: 'button',
        onClick: M,
        className: 'banners--bannerInlineTextButton--GRx12',
        children: renderI18nText('payments.check_out_our_paid_plans')
      });
      let r = l ? jsx('span', {
        children: renderI18nText('payments.team_over_starter_team_limit_with_button.legacy_team', {
          fileLimitString: e,
          checkoutOurPlans: t(),
          teamName: l.name
        })
      }) : jsx('span', {
        children: renderI18nText('payments.team_over_starter_team_limit_with_button.no_legacy_team_present', {
          fileLimitString: e,
          checkoutOurPlans: t()
        })
      });
      return {
        severity: _$$c7.ANNOUNCEMENT,
        title: getI18nString('payments.team_over_starter_team_limit_title'),
        message: r,
        cta: getI18nString('payments.upgrade_now'),
        ctaTrackingProperties: {
          trackingDescriptor: UpgradeAction.UPGRADE_NOW,
          upsellSource: UpsellModalType.BANNER
        },
        onClickCta: P,
        svg: _$$A20,
        bannerClassName: m0,
        trackingContextName: 'Unified Legacy / Beta File Limit Banner'
      };
    } else if (U) {
      let e = _$$A3(l.grace_period_end).toDate();
      let t = renderI18nText('payments.pro_plan_ends_relative_time_string', {
        relative_time_string: jsx(_$$h6, {
          date: e
        })
      });
      B || (t = renderI18nText('payments.pro_plan_ends_on_date', {
        end_date: new Intl.DateTimeFormat('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }).format(e)
      }));
      return {
        severity: _$$c7.ANNOUNCEMENT,
        title: t,
        message: getI18nString('payments.pro_plan_ends_for_team_description', {
          teamName: l.name
        }),
        cta: getI18nString('payments.pro_plan_ends_button'),
        onClickCta: D,
        svg: B ? _$$A20 : _$$A19,
        trackingContextName: 'Promo Code Expiration Banner',
        bannerClassName: B ? m0 : void 0
      };
    } else if (x) {
      let e = _ ? getI18nString('payments.complete_team_payment_description', {
        teamName: l.name
      }) : getI18nString('payments.complete_team_renewal_payment_description');
      return {
        severity: _$$c7.WARN,
        title: getI18nString('payments.complete_payment'),
        message: e,
        cta: jsx(_$$V6, {
          trackingProperties: {
            trackingDescriptor: UpgradeAction.VERIFY_PAYMENT,
            trackingContextName: 'Verify Payment Banner'
          },
          onClick: () => i?.(showModalHandler({
            type: mW,
            data: {
              teamId: r,
              paymentRequiresAction: !!g
            }
          })),
          children: renderI18nText('payments.complete_payment_cta')
        }),
        onClickCta: null
      };
    }
    return null;
  }(e, t, r, i, n, l)), [m, c, e, t, r, i, n]);
}
function _e(e) {
  let t = selectPermissionsState();
  let r = useSelector(e => e.userEduGracePeriods);
  let a = useSelector(e => e.userFlags);
  let n = useSelector(e => e.userTeamFlags);
  let o = useSelector(e => e.selectedView);
  let l = useSelector(e => e.isFreeUser);
  let d = useSelector(e => e.userAnalyticsData);
  let c = useSelector(e => e.fileKeysByFolderId);
  let u = useMemo(() => ({
    ...t,
    checks: e.checks,
    fileKeysByFolderId: c,
    isFreeUser: l,
    selectedView: o,
    userAnalyticsData: d,
    userEduGracePeriods: r,
    userFlags: a,
    userTeamFlags: n
  }), [t, e.checks, c, l, o, d, r, a, n]);
  return m9(e.resourceType || FResourceCategoryType.FOLDER, e.resource || null, e.teamId || null, u, null, e.shadowReadLabel).transform(e => !!e);
}
function _t(e, t) {
  let r = {
    ...e
  };
  typeof t.title == 'string' && (r.title = t.title);
  typeof t.message == 'string' && (r.message = t.message);
  return r;
}
let _a = jsxs('svg', {
  width: '48',
  height: '48',
  viewBox: '0 0 48 48',
  fill: 'none',
  children: [jsx('path', {
    d: 'M0 24C0 10.7452 10.7452 0 24 0V0C37.2548 0 48 10.7452 48 24V24C48 37.2548 37.2548 48 24 48V48C10.7452 48 0 37.2548 0 24V24Z',
    fill: 'var(--color-bg-inverse, black)'
  }), jsx('mask', {
    id: 'mask0_4:25',
    style: {
      maskType: 'alpha'
    },
    maskUnits: 'userSpaceOnUse',
    x: '0',
    y: '0',
    width: '48',
    height: '48',
    children: jsx('path', {
      d: 'M0 24C0 10.7452 10.7452 0 24 0V0C37.2548 0 48 10.7452 48 24V24C48 37.2548 37.2548 48 24 48V48C10.7452 48 0 37.2548 0 24V24Z',
      fill: 'var(--color-bg-inverse, black)'
    })
  }), jsx('g', {
    mask: 'url(#mask0_4:25)'
  }), jsx('path', {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M20 20H17.5C16.1193 20 15 21.1193 15 22.5C15 23.8807 16.1193 25 17.5 25H20L20 20ZM21 19.9963L21 25H21.6738C23.3383 25 24.9874 25.3196 26.5314 25.9416L28 26.5333V17.7761L27.3548 18.1614C25.4287 19.3116 23.2393 19.9428 21 19.9963ZM17.5 19H20.6897C22.8561 19 24.9821 18.4135 26.8421 17.3028L28.2437 16.4658C28.5769 16.2668 29 16.507 29 16.8951V27.2737C29 27.628 28.6418 27.8699 28.3132 27.7375L26.1577 26.8692C24.7325 26.2951 23.2103 26 21.6738 26H21.3286L22.5613 29.698C22.7771 30.3455 22.2951 31.0142 21.6126 31.0142H20.4415C19.5807 31.0142 18.8164 30.4634 18.5442 29.6467L17.3333 26.0142L17.3272 25.9958C15.4745 25.9057 14 24.375 14 22.5C14 20.567 15.567 19 17.5 19ZM18.3874 26.0142L19.4928 29.3304C19.6289 29.7388 20.0111 30.0142 20.4415 30.0142H21.6126L20.2792 26.0142H18.3874Z',
    fill: 'var(--color-icon-oninverse, white)'
  }), jsx('path', {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M32.5 22C32.5 21.1716 31.8284 20.5 31 20.5V19.5C32.3807 19.5 33.5 20.6193 33.5 22C33.5 23.3807 32.3807 24.5 31 24.5V23.5C31.8284 23.5 32.5 22.8284 32.5 22Z',
    fill: 'var(--color-icon-oninverse, white)'
  })]
});
function _s(e) {
  let {
    title,
    message,
    cta,
    ctaTrackingProperties,
    learnMoreUrl,
    onClickCta,
    severity,
    secondaryCTA,
    secondaryOnClickCta,
    svg,
    trackingContextName = 'Banner',
    contentStyles,
    reverseCtas,
    dismissible,
    onClose
  } = e;
  return severity === _$$c7.ANNOUNCEMENT ? jsx(TrackingProvider, {
    name: trackingContextName,
    properties: {
      severity,
      ...e.tracking
    },
    children: jsxs('div', {
      className: mz,
      children: [svg && jsx(SvgComponent, {
        svg,
        useOriginalSrcFills_DEPRECATED: !0
      }), jsxs('div', {
        className: mY,
        children: [jsx('div', {
          className: mH,
          children: title
        }), jsx('div', {
          className: mJ,
          children: message
        })]
      }), jsxs(ButtonBaseReversedContainer, {
        reversed: reverseCtas,
        className: mX,
        children: [onClickCta && jsx(ButtonBasePrimaryTracked, {
          className: mV,
          onClick: onClickCta,
          trackingProperties: ctaTrackingProperties,
          children: cta
        }), secondaryOnClickCta && jsx(ButtonSecondaryTracked, {
          className: mq,
          onClick: secondaryOnClickCta,
          children: secondaryCTA
        }), dismissible && onClose && jsx(CloseButton, {
          className: mQ,
          onClick: onClose
        })]
      })]
    })
  }) : severity === _$$c7.EVENT ? jsx(TrackingProvider, {
    name: trackingContextName,
    properties: {
      severity,
      ...e.tracking
    },
    children: jsxs('div', {
      className: `${mz} ${contentStyles}`,
      children: [jsx('div', {
        className: 'banners--eventMegaphoneIcon--7J3rx',
        children: _a
      }), jsxs('div', {
        className: mY,
        children: [jsx('p', {
          className: mH,
          children: title
        }), jsx('p', {
          className: mJ,
          children: message
        })]
      }), jsxs(ButtonBaseReversedContainer, {
        className: mX,
        children: [onClickCta && jsx(ButtonBasePrimaryTracked, {
          className: mV,
          onClick: onClickCta,
          trackingProperties: ctaTrackingProperties,
          children: cta
        }), secondaryOnClickCta && jsx(ButtonSecondaryTracked, {
          className: mq,
          onClick: secondaryOnClickCta,
          children: secondaryCTA
        }), dismissible && onClose && jsx(CloseButton, {
          className: mQ,
          onClick: onClose
        })]
      })]
    })
  }) : jsx(TrackingProvider, {
    name: trackingContextName,
    properties: {
      severity,
      ...e.tracking
    },
    children: jsxs('div', {
      className: `${mz} ${contentStyles}`,
      children: [!e.hideIcon && jsx(SvgComponent, {
        svg: _$$A22,
        className: 'banners--warningIcon--A5YS-',
        autosize: severity === _$$c7.WARN_SOFT
      }), jsxs('div', {
        className: mY,
        children: [jsx('span', {
          className: 'banners--title--OIA0P',
          children: title
        }), message, learnMoreUrl && jsxs('span', {
          children: ['\xA0', jsx('a', {
            target: '_blank',
            rel: 'noopener',
            href: learnMoreUrl,
            children: renderI18nText('payments.learn_more')
          })]
        })]
      }), jsxs(ButtonBaseReversedContainer, {
        reversed: reverseCtas,
        className: mX,
        children: [onClickCta && jsx(ButtonBasePrimaryTracked, {
          className: mV,
          onClick: onClickCta,
          trackingProperties: ctaTrackingProperties,
          children: cta
        }), !onClickCta && jsx('div', {
          className: 'banners--ctaMessage--5MB88',
          children: cta
        }), dismissible && onClose && jsx(CloseButton, {
          className: mQ,
          onClick: onClose
        })]
      })]
    })
  });
}
let _i = connect(e => ({
  userFlags: e.userFlags,
  userTeamFlags: e.userTeamFlags,
  currentOrgId: e.currentUserOrgId,
  selectedView: e.selectedView,
  userEduValidated: !!e.user?.student_validated_at,
  userEduGracePeriods: e.userEduGracePeriods,
  fileKeysByFolderId: e.fileKeysByFolderId,
  isFreeUser: e.isFreeUser,
  userAnalyticsData: e.userAnalyticsData,
  ...getPermissionsState(e)
}))(e => {
  let t;
  let r = useSubscription(EduOffboardingData, {});
  let n = e.folderId ? e.folders[e.folderId] : null;
  let o = n ? n.team_id : null;
  let l = e.dispatch;
  let d = o ? e.teams[o] : null;
  let c = !!d?.org_id;
  let u = !!d?.subscription;
  let m = useSubscription(FolderBannerView(o ? {
    teamId: o
  } : null));
  let _ = useMemo(() => m.transform(({
    team: e
  }) => !!e?.canAdmin), [m]).unwrapOr(!1);
  useEffect(() => {
    o && !c && u && _ && l(Be({
      teamId: o
    }));
  }, [l, o, c, u, _]);
  let f = useSelector(e => e.teamBilling?.summary);
  let g = m9(FResourceCategoryType.FOLDER, n ?? null, o, {
    eduPeriodEnd: r.data?.currentUser?.eduPeriodEnd,
    billingSummary: f,
    ...e
  }, e.dispatch, adminPermissionConfig.FolderBannerInner.bannerContent).unwrapOr(null);
  if (!g) return jsx('div', {});
  t = n ? _t({
    resourceType: FResourceCategoryType.TEAM,
    teamId: o,
    folderId: n.id
  }, g) : _t({
    resourceType: 'recents'
  }, g);
  let h = g.severity === _$$c7.WARN ? mG : '';
  let x = g.bannerClassName || '';
  let b = `${mZ} ${h} ${x}`;
  return jsx('div', {
    className: b,
    children: jsx(_s, {
      ...g,
      tracking: t
    })
  });
});
let _n = () => {
  let e = useSelector(e => e.currentUserOrgId);
  let t = useSelector(e => e.currentTeamId);
  let r = useSubscription(FileBrowserDraftsViewBarView({
    currentOrgId: e,
    currentTeamId: t
  }));
  return r.status === 'loaded' ? r.data : null;
};
function _o() {
  let e;
  let t = useDispatch();
  let r = useSelector(e => e.currentUserOrgId);
  let s = useSelector(e => e.currentTeamId);
  let n = _n();
  r ? e = n?.currentUser.baseOrgUser?.draftsProject : s && (e = n?.currentUser.currentTeamUser?.draftsProject);
  let o = useSelector(e => e.tileSortFilterStateByView);
  let l = getSelectedView();
  if (!n || !e) {
    return jsx(uf, {
      viewbarActions: []
    });
  }
  let d = l.view === 'deletedFiles' ? memoizeByArgs(uh)(o) : memoizeByArgs(getSortFilterConfig)(e.id, o);
  let c = [jsx(ye, {
    config: d.tileSortFilterConfig
  }, 0), jsx(_$$mc, {
    dispatch: t,
    options: d,
    selectedView: l
  }, 1), jsx($c, {
    initialViewMode: d.tileSortFilterConfig.viewMode,
    onViewModeChange: e => {
      trackEventAnalytics('file view toggle', {
        viewType: e === ViewMode.GRID ? 'grid' : 'list'
      });
      t(setBrowserTileSortView({
        selectedView: l,
        config: {
          ...d.tileSortFilterConfig,
          viewMode: e
        }
      }));
    }
  }, 2)];
  return jsx(uf, {
    viewbarActions: c
  });
}
let _l = {
  open: !0,
  openNewTab: !0,
  restoreFromVersion: !0,
  share: !0,
  copyLink: !0,
  rename: !0,
  duplicate: !0,
  delete: !0,
  createBranch: !0,
  moveFile: !0
};
let _d = memoizeByArgs(getSortFilterConfig);
function _c(e) {
  let {
    sortFilterOptions,
    selectedBranchKeyByRepoId
  } = selectWithShallowEqual(t => ({
    sortFilterOptions: _d(e.folderId, t.tileSortFilterStateByView),
    selectedBranchKeyByRepoId: t.selectedBranchKeyByRepoId
  }));
  let n = useUnsyncedAutosaveFiles();
  let o = useSelector(({
    currentUserOrgId: e
  }) => e);
  let l = selectExperimentConfigHook('exp_aa_test_org_drafts');
  o && l.getConfig();
  let d = () => {};
  let [c, u] = mC({
    folderId: e.folderId
  });
  let m = c.data?.folder;
  let _ = _$$R3(m?.team_id);
  let p = _e({
    resourceType: FResourceCategoryType.FOLDER,
    resource: m,
    teamId: m?.team_id || null,
    shadowReadLabel: adminPermissionConfig.DraftsPageView.hasBanner
  }).unwrapOr(!1);
  d = useCallback(() => {
    !c.isFetchingNextPage && c.hasNextPage && u.fetchNextPage();
  }, [c.isFetchingNextPage, c.hasNextPage, u]);
  let f = useMemo(() => {
    let e = (c.data?.files || []).map(e => _$$fA(e));
    let t = c.data?.filesByRepoId || {};
    return [...e, ...(c.data?.repos || []).map(e => ({
      type: _$$nb.REPO,
      repo: e,
      branches: t[e.id],
      selectedBranchKey: selectedBranchKeyByRepoId[e.id] || ''
    })), ...Object.values(n).filter(e => e.orgId === o).map(_$$gB)];
  }, [o, c.data?.files, c.data?.filesByRepoId, c.data?.repos, n, selectedBranchKeyByRepoId]);
  let h = jsxs(Fragment, {
    children: [jsx(me, {
      newFileTile: !0,
      tiles: f,
      tileActions: _l,
      sortFilterOptions,
      emptyStateText: '',
      isDataPartial: !!c.hasNextPage,
      isEligbileForProTeamLockedRevampUI: _
    }), jsx(_$$cx, {})]
  });
  let b = c.status === 'loaded';
  let v = jsx(_$$A2, {
    loadingElementId: 'loading-content-pane',
    loaded: b,
    loadingElementClassName: cssBuilderInstance.pr32.$,
    children: jsx(_$$B4, {
      onShouldFetchNextPage: d,
      children: h
    }, `${sortFilterOptions.tileSortFilterConfig.filters.fileType}`)
  });
  kF('Drafts');
  WX({
    markName: 'MainBodyContent',
    isLoaded: b,
    contextArgs: {
      numFiles: c.transform(e => e.files.length).unwrapOr(null)
    }
  });
  return wrapWithTracking(jsx(_$$r4, {
    viewBarSticky: !0,
    banner: p ? jsx(_i, {
      folderId: e.folderId
    }) : void 0,
    content: v,
    viewbar: jsx(_o, {})
  }), _$$e7.FILE_BROWSER, {
    view: 'drafts'
  });
}
let _b = registerModal(e => {
  let t;
  let r;
  let n = useDispatch();
  let [l, d] = useState('');
  let c = useSelector(e => e.deletedReposById);
  let u = useSelector(e => e.fileByKey);
  let {
    reposToDelete,
    draftsToDelete,
    deleteAllDraftsAsync,
    isDeleteAll,
    isPermanentDeletion
  } = e;
  let h = draftsToDelete.map(e => e.name).concat(reposToDelete.map(e => e.name));
  let x = h.length > 1;
  t = isPermanentDeletion ? x ? getI18nString('file_browser.draft_delete_modal.header_multiple_files_delete', {
    fileCount: h.length
  }) : getI18nString('file_browser.draft_delete_modal.header_single_file_delete', {
    fileName: h[0]
  }) : x ? getI18nString('file_browser.draft_delete_modal.header_multiple_files_trash', {
    fileCount: h.length
  }) : getI18nString('file_browser.draft_delete_modal.header_single_file_trash');
  let b = (t, r) => {
    if (t.length > 0) {
      if (isPermanentDeletion) {
        let r = t.reduce((e, t) => (e[t.key] = !0, e), {});
        n(YK({
          fileKeys: r,
          userInitiated: !0,
          onSuccessCallback: e.onDeleteSuccess
        }));
      } else {
        let r = t.reduce((e, t) => (e[t.key] = fileEntityDataMapper.toSinatra(t), e), {});
        n(VK({
          fileKeys: r,
          userInitiated: !0,
          onSuccessCallback: e.onDeleteSuccess,
          hideVisualBell: !0
        }));
      }
    }
    let a = {};
    r.forEach(e => {
      let t = c[e.id];
      if (t) {
        a[e.id] = t;
      } else {
        let t = e.default_file_key && u[e.default_file_key];
        t && (a[e.id] = {
          repo: e,
          main_file: t
        });
      }
    });
    r.length > 0 && (isPermanentDeletion ? n(_$$YM({
      repoIds: Object.keys(a),
      userInitiated: !0
    })) : n(_$$hT({
      reposById: a,
      userInitiated: !0
    })));
  };
  let v = () => UserAPIHandlers.deleteAllPersonalDrafts().then(() => n(VisualBellActions.enqueue({
    message: getI18nString('file_browser.draft_delete_modal.async_delete_drafts_scheduled')
  }))).catch(() => n(VisualBellActions.enqueue({
    message: getI18nString('file_browser.draft_delete_modal.async_delete_drafts_scheduled_error')
  })));
  let y = () => {
    let {
      draftsToDelete: _draftsToDelete,
      reposToDelete: _reposToDelete
    } = e;
    _draftsToDelete.length + _reposToDelete.length > 100 ? n(FlashActions.error(getI18nString('file_browser.draft_delete_modal.unable_to_delete', {
      maxSize: 100
    }))) : (e.setSynchronousFileTransferInProgress(_draftsToDelete.length > 0), b(_draftsToDelete, _reposToDelete));
  };
  let w = () => {
    deleteAllDraftsAsync ? v() : y();
    e.onClose();
  };
  let j = useMemo(() => l.trim().toLowerCase() !== getI18nString('file_browser.draft_delete_modal.button_delete').toLocaleLowerCase(), [l]);
  r = isPermanentDeletion ? x ? getI18nString('file_browser.draft_delete_modal.permanently_delete_multiple_drafts', {
    fileCount: h.length
  }) : getI18nString('file_browser.draft_delete_modal.permanently_delete_one_draft') : x ? getI18nString('file_browser.draft_delete_modal.you_are_about_to_delete_multiple_drafts', {
    fileCount: h.length
  }) : getI18nString('file_browser.draft_delete_modal.you_are_about_to_delete_single_draft', {
    fileName: h[0]
  });
  let T = isPermanentDeletion ? jsx(ButtonNegativeTracked, {
    onClick: w,
    disabled: j,
    trackingProperties: {
      isDeletingDraftFromDTM: !0,
      isPermanentDeletion
    },
    dataTestId: 'draft-delete-confirmation-button',
    children: jsx('span', {
      'data-tooltip': getI18nString('file_browser.draft_delete_modal.draft_deletion_tooltip', {
        deletionString: getI18nString('file_browser.draft_delete_modal.button_delete')
      }),
      'data-tooltip-type': j ? KindEnum.TEXT : null,
      'data-tooltip-max-width': 180,
      'data-tooltip-show-above': !0,
      'children': getFeatureFlags().ps_trashed_drafts_enabled ? getI18nString('file_browser.draft_delete_modal.button_permanently_delete_files', {
        numFiles: h.length
      }) : getI18nString('file_browser.draft_delete_modal.button_delete')
    })
  }) : jsx(vd, {
    'onClick': w,
    'data-testid': 'draft-delete-confirmation-button',
    'trackingProperties': {
      isDeletingDraftFromDTM: !0,
      isPermanentDeletion
    },
    'children': renderI18nText('file_browser.draft_delete_modal.button_delete_files', {
      numFiles: h.length
    })
  });
  return jsx(TrackingProvider, {
    name: 'draftDeleteModal',
    properties: {
      itemCount: h.length,
      isDeleteAsync: !!deleteAllDraftsAsync,
      isDeleteAll: !!isDeleteAll
    },
    children: jsx(OJ, {
      title: t,
      minWidth: 480,
      maxWidth: 480,
      onClose: e.onClose,
      truncateTitleText: !0,
      fixedCenter: !0,
      children: jsxs('div', {
        className: 'draft_delete_modal--modalContent--QYGIS',
        children: [jsxs('p', {
          children: [r, ' ', !isPermanentDeletion && jsxs('p', {
            children: [jsx('br', {}), renderI18nText('file_browser.draft_delete_modal.you_can_access_drafts_from_deleted_drafts_section', {
              fileCount: h.length
            })]
          })]
        }), jsx('p', {
          className: 'draft_delete_modal--confirmationTextSpacing---MQEW',
          children: isPermanentDeletion && renderI18nText('file_browser.draft_delete_modal.permanently_delete_multiple_drafts_confirmation', {
            deletionString: getI18nString('file_browser.draft_delete_modal.button_delete')
          })
        }), jsxs('form', {
          onSubmit: w,
          children: [isPermanentDeletion && jsx('div', {
            children: jsx(LazyInputForwardRef, {
              autoCapitalize: 'off',
              autoComplete: 'off',
              autoCorrect: 'off',
              className: 'draft_delete_modal--deleteDraftsInput--pCTUB',
              dataTestId: 'draft-delete-confirmation-input',
              onChange: e => {
                d(e.currentTarget.value);
              },
              onKeyDown: e => {
                e.key === 'Enter' && e.preventDefault();
              },
              spellCheck: !1,
              type: 'text',
              value: l
            })
          }), jsxs('div', {
            className: 'draft_delete_modal--footer--SRSo6',
            children: [jsx(ButtonSecondary, {
              onClick: e.onClose,
              children: renderI18nText('modal.cancel')
            }), T]
          })]
        })]
      })
    })
  });
}, 'DraftDeleteModal');
function _j() {
  return jsx('div', {
    children: jsxs(BannerFullWidth, {
      variant: 'warn',
      children: [jsx(BannerMessage, {
        title: renderI18nText('file_browser.drafts_to_move.move_your_drafts_by_august_21'),
        children: renderI18nText('file_browser.drafts_to_move.pre_migration_banner_description')
      }), jsx(_$$N4, {
        href: 'https://help.figma.com/hc/articles/18409526530967',
        newTab: !0,
        children: renderI18nText('file_browser.drafts_to_move.viewbar_learn_more_link')
      })]
    })
  });
}
function _T() {
  return jsx('div', {
    children: jsxs(BannerFullWidth, {
      variant: 'warn',
      children: [jsx(BannerMessage, {
        title: renderI18nText('file_browser.drafts_to_move.migration_will_begin_shortly'),
        children: renderI18nText('file_browser.drafts_to_move.last_chance_to_move_any_files')
      }), jsx(_$$N4, {
        href: 'https://help.figma.com/hc/articles/18409526530967',
        newTab: !0,
        children: renderI18nText('file_browser.drafts_to_move.viewbar_learn_more_link')
      })]
    })
  });
}
let _I = 'drafts_to_move_page_view--fileCellDateSpan--xWiCm';
let _N = 'drafts_to_move_page_view--dateColumn--V3e9G drafts_to_move_page_view--column--jpRzM table--column--974RA';
let _C = 'drafts_to_move_page_view--emptyContentContainer--w1lwc';
let _S = 'drafts_to_move_page_view--emptyContentHeader--35cXt';
let _k = parsePxNumber(ISO);
let _R = buildUploadUrl('c9f2d8cbce5754a2b6e3e3e81adf5fe313429577');
let _A = buildUploadUrl('6212099329ba7714b869112a09f8dfffce71edf5');
var _O = (e => (e.DRAFT_FILES = 'draft-files', e.DELETED_DRAFT_FILES = 'deleted-draft-files', e))(_O || {});
var _F = (e => (e.NONE = 'NONE', e.SYNCHRONOUS_DELETION_OR_MIGRATION = 'SYNCHRONOUS_DELETION_OR_MIGRATION', e.ASYNC_FILE_MIGRATION = 'ASYNC_FILE_MIGRATION', e.ASYNC_FILE_DELETION = 'ASYNC_FILE_DELETION ', e.TRANSFER_COMPLETED = 'TRANSFER_COMPLETED', e))(_F || {});
function _P(e) {
  let t = e => {
    switch (e) {
      case 'draft-files':
        return getI18nString('file_browser.drafts_to_move.drafts');
      case 'deleted-draft-files':
        return getI18nString('file_browser.drafts_to_move.deleted_drafts');
      default:
        throwTypeError(e);
    }
  };
  let r = t => {
    let r = _O[t].replace(/-/g, '_');
    logAndTrackCTA({
      text: r,
      name: 'Drafts to move tab switch'
    }, 'cta_clicked');
    e.setSelectedTab(_O[t]);
  };
  let s = Object.keys(_O).map(s => jsx(_$$r8, {
    tab: _O[s],
    onClick: () => r(s),
    isSelected: e.selectedTab === _O[s],
    tabName: t(_O[s])
  }, s));
  return jsx(_$$g4, {
    leftSide: jsx(_$$f6, {
      tabs: s
    }),
    rightSide: []
  });
}
function _L(e) {
  let t = useDispatch();
  let r = useSelector(e => e.selectedView);
  let s = _$$v4();
  let {
    item
  } = e;
  let o = _$$Tf.getFileOrMainBranchKey(item) ?? '';
  let l = e => a => {
    a.detail > 1 && !_$$Tf.getTrashedAt(item) && (u1({
      tile: e,
      index: 0,
      dispatch: t,
      selectedView: r
    }), s(e, a), a.stopPropagation());
  };
  let d = _$$C2(item);
  return jsxs('div', {
    className: cssBuilderInstance.inlineFlex.minW0.$,
    children: [jsxs('button', {
      'className': 'drafts_to_move_page_view--draftThumbnail--whTtS',
      'onClick': l(item),
      'data-testid': `fileTile-${o}`,
      'children': [jsx(_$$e1, {
        tile: item,
        noBorder: !0
      }), jsx('div', {
        className: 'drafts_to_move_page_view--topLeftControls--kfCRe',
        children: jsx(w4, {
          size: 16,
          type: d
        })
      })]
    }), jsxs('div', {
      className: cssBuilderInstance.ml14.minW0.flex.flexColumn.itemSelfCenter.$,
      children: [jsx('button', {
        className: 'drafts_to_move_page_view--fileName--U3mn4',
        onClick: l(item),
        children: _$$Tf.getName(item)
      }), e.shouldDisplayFileDates && jsxs('div', {
        className: 'drafts_to_move_page_view--fileCellDatesSection--LFnvg',
        children: [jsx('span', {
          className: _I,
          children: renderI18nText('file_browser.drafts_to_move.file_created_at_label', {
            timeDifference: jsx(_$$h6, {
              date: _$$Tf.getCreatedAt(item)
            })
          })
        }), jsx('span', {
          className: _I,
          children: renderI18nText('file_browser.drafts_to_move.file_last_modified_at_label', {
            timeDifference: jsx(_$$h6, {
              date: _$$Tf.getTouchedAt(item) ?? ''
            })
          })
        })]
      })]
    })]
  });
}
function _D({
  currentFileTransferState: e
}) {
  let t = getVisibleTheme() === 'dark';
  let r = e => jsxs(Fragment, {
    children: [jsx(LoadingSpinner, {
      size: 'large'
    }), jsx('p', {
      className: 'drafts_to_move_page_view--transferContentHeader--ljikD',
      children: renderI18nText('file_browser.drafts_to_move.file_transfer_header', {
        transferType: e === 'ASYNC_FILE_MIGRATION' ? renderI18nText('file_browser.drafts_to_move.file_transfer_migration_type') : renderI18nText('file_browser.drafts_to_move.file_transfer_deletion_type')
      })
    }), jsx('p', {
      children: renderI18nText('file_browser.drafts_to_move.file_transfer_description')
    })]
  });
  let s = () => jsx('div', {
    className: 'drafts_to_move_page_view--slideIn--c-NGK',
    children: jsxs('div', {
      className: 'drafts_to_move_page_view--animatedContentContainer--z1sdh',
      children: [jsx(_$$Gv, {
        src: t ? _R : _A,
        containerClassName: 'drafts_to_move_page_view--allDoneGif--mwZxC',
        height: 100,
        width: 100
      }), jsx('p', {
        className: _S,
        children: renderI18nText('file_browser.drafts_to_move.empty_header')
      }), jsx('p', {
        children: renderI18nText('file_browser.drafts_to_move.empty_body_text')
      })]
    })
  });
  let i = () => jsx(LoadingSpinner, {
    size: 'large'
  });
  return jsx('div', {
    className: _C,
    children: (() => {
      switch (e) {
        case 'ASYNC_FILE_MIGRATION':
        case 'ASYNC_FILE_DELETION ':
          return r(e);
        case 'TRANSFER_COMPLETED':
          return s();
        default:
          return i();
      }
    })()
  });
}
function _M() {
  let e = useDispatch();
  let t = useSelector(e => e.user?.personal_drafts_folder_id);
  let r = useSelector(e => e.fileKeysByFolderId);
  let n = useSelector(e => e.fileKeysByRepoId);
  let l = useSelector(e => e.repoIdsByFolderId);
  let d = useSelector(e => e.repos);
  let c = useSelector(e => e.fileByKey);
  let u = useSelector(e => e.selectedView);
  let m = useSelector(e => e.selectedBranchKeyByRepoId);
  let _ = useSelector(e => e.userFlags);
  let f = _.personal_draft_migration_scheduled;
  let g = _.personal_draft_migration_completed;
  let h = _.personal_draft_deletion_scheduled;
  let b = _.personal_draft_deletion_completed;
  let v = useSelector(e => e.loadedFolders);
  let y = useSelector(e => e.deletedFilesByKey);
  let w = useSelector(e => e.deletedReposById);
  let {
    windowInnerWidth
  } = _$$l4();
  let E = useSubscription(DraftsToMoveFoldersByUserId({}));
  let C = useSubscription(FilesInProjectHighLimit({
    projectId: t ?? ''
  }), {
    enabled: !!t
  });
  let S = _$$v4();
  let [k, R] = useState('draft-files');
  let [A, O] = useState(!1);
  let [F, P] = useState('NONE');
  let [L, D] = useState(!1);
  let [M, B] = useState(!1);
  useEffect(() => {
    f && _$$rO(f.updatedAt, g?.updatedAt) ? P('ASYNC_FILE_MIGRATION') : h && _$$rO(h.updatedAt, b?.updatedAt) ? P('ASYNC_FILE_DELETION ') : L ? P('SYNCHRONOUS_DELETION_OR_MIGRATION') : P('NONE');
  }, [f, g, h, b, L]);
  useEffect(() => {
    e(loadTrashedFiles({
      orgId: null
    }));
  }, [e]);
  let W = E.status === 'loaded';
  let $ = useMemo(() => {
    if (!W) return [];
    let e = [];
    E.data?.currentUser?.draftsFolderId && e.push(E.data.currentUser.draftsFolderId);
    return e;
  }, [W, E]);
  let G = useMemo(() => C.data?.project?.status !== ResourceStatus.Loaded ? new Set() : new Set((C.data?.project.data?.undeletedFilesHighLimit ?? []).map(e => e.key)), [C]);
  let V = useMemo(() => {
    if (C.data?.project?.status !== ResourceStatus.Loaded) return new Set();
    let e = new Set();
    (C.data?.project.data?.undeletedFilesHighLimit ?? []).forEach(t => {
      t.fileRepoId && e.add(t.fileRepoId);
    });
    return e;
  }, [C]);
  let z = useCallback(e => G.has(e), [G]);
  let K = useCallback(e => V.has(e), [V]);
  useEffect(() => $.forEach(t => W && e(jl({
    folderId: t,
    loadedFolders: v
  }))), [v, $, e, W]);
  let {
    getConfig
  } = selectExperimentConfigHook('ps_async_draft_move_limit', void 0, !0);
  let J = getConfig().get('async_limit', 100);
  let q = W && $.every(e => e && v[e] === 'loaded');
  let X = useMemo(() => Object.keys(y).map(e => y[e]).filter(e => !e.file_repo_id && e.folder_id === t && z(e.key)), [y, t, z]);
  let Q = useMemo(() => Object.keys(w).map(e => w[e]).filter(e => e && e.main_file && e.main_file.folder_id === t && e.repo && K(e.repo.id)), [w, t, K]);
  let Z = useMemo(() => $.flatMap(e => l[e]).map(e => d[e]).filter(e => !!e && K(e.id)), [$, d, l, K]);
  let ee = useMemo(() => $.flatMap(e => r[e]).map(e => c[e]).filter(e => !!e && z(e.key)), [$, c, r, z]);
  useEffect(() => {
    let e = ee.length + Z.length;
    let t = X.length + Q.length;
    q && !M && (e === 0 && t > 0 && R('deleted-draft-files'), B(!0));
  }, [q, M, ee.length, Z.length, Q.length, X.length]);
  let et = useMemo(() => ee.concat(X).map(e => _$$fA(e)), [ee, X]);
  let er = k === 'deleted-draft-files' ? X : ee;
  let ea = useMemo(() => er.map(e => _$$fA(e)), [er]);
  let ei = useMemo(() => Z.map(e => {
    let t = n[e.id].map(e => c[e]).filter(e => !!e);
    return {
      type: _$$nb.REPO,
      repo: e,
      branches: t,
      selectedBranchKey: m[e.id]
    };
  }), [Z, m, c, n]);
  let en = useMemo(() => Q.map(e => ({
    type: _$$nb.REPO,
    repo: e.repo,
    branches: [e.main_file],
    selectedBranchKey: e.main_file?.key
  })), [Q]);
  let eo = k === 'deleted-draft-files' ? en : ei;
  let el = en.concat(ei);
  let ed = ea.concat(eo);
  let ec = et.length > 0 || el.length > 0;
  let eu = ed.length > 0;
  let [em, e_] = useState([]);
  let ep = () => {
    e(hideModal());
    O(!1);
  };
  let ef = (t, r) => {
    e(VisualBellActions.enqueue({
      message: getI18nString('visual_bell.files_moved_to_folder', {
        fileCount: r,
        folderName: t
      })
    }));
    D(!1);
    e_([]);
  };
  let eg = () => {
    D(!1);
    e_([]);
  };
  let eh = e => {
    let t = [];
    let r = [];
    e.forEach(e => {
      e.type === _$$nb.FILE && t.push(e.file);
      e.type === _$$nb.REPO && r.push(e.repo);
    });
    return {
      draftsToMove: t,
      reposToMove: r
    };
  };
  let ex = t => {
    let {
      draftsToMove,
      reposToMove
    } = eh(em);
    O(!0);
    e(showModalHandler({
      type: _b,
      data: {
        isPermanentDeletion: t,
        draftsToDelete: draftsToMove,
        reposToDelete: reposToMove,
        deleteAllDraftsAsync: em.length > J,
        setSynchronousFileTransferInProgress: D,
        onDeleteSuccess: eg,
        onClose: ep
      }
    }));
  };
  let eb = () => {
    let {
      draftsToMove,
      reposToMove
    } = eh(em);
    O(!0);
    e(showModalHandler({
      type: _$$K6,
      data: {
        draftsToMove,
        reposToMove,
        moveAllDraftsAsync: em.length > J,
        onMoveSuccess: ef,
        onClose: ep,
        setSynchronousFileTransferInProgress: D
      }
    }));
  };
  let ev = function (e, t, r, s) {
    let i = s >= 1200;
    let n = [{
      name: getI18nString('file_browser.drafts_to_move.table_header_name'),
      className: 'drafts_to_move_page_view--nameColumn--sSZYF drafts_to_move_page_view--column--jpRzM table--column--974RA',
      getSortValue: e => _$$Tf.getName(e),
      cellComponent: e => jsx(_L, {
        item: e,
        shouldDisplayFileDates: !i
      })
    }];
    i && n.push({
      name: getI18nString('file_browser.drafts_to_move.table_header_last_modified'),
      className: _N,
      getSortValue: e => _$$Tf.getTouchedAt(e) ?? '',
      cellComponent: e => {
        let t = _$$Tf.getTouchedAt(e);
        return t ? jsx(_$$h6, {
          date: t
        }) : '';
      }
    }, {
      name: getI18nString('file_browser.drafts_to_move.table_header_created'),
      className: _N,
      getSortValue: e => _$$Tf.getCreatedAt(e),
      cellComponent: e => jsx(_$$h6, {
        date: _$$Tf.getCreatedAt(e)
      })
    });
    n.push({
      name: '',
      className: 'drafts_to_move_page_view--moveButtonColumn--Mvc2P drafts_to_move_page_view--column--jpRzM table--column--974RA',
      cellComponent: s => r === 0 ? jsxs(Fragment, {
        children: [jsx(ButtonSecondaryTracked, {
          className: U()('drafts_to_move_page_view--openDraftButton--zXZGf', cssBuilderInstance.$$if(!!_$$Tf.getTrashedAt(s), cssBuilderInstance.invisible).$),
          onClick: e => t(e, s),
          children: renderI18nText('file_browser.drafts_to_move.open_draft_button')
        }), jsx(ButtonSecondaryTracked, {
          className: 'drafts_to_move_page_view--moveDraftButton--GmBWa',
          onClick: t => e(t, s),
          children: renderI18nText('file_browser.drafts_to_move.move_draft_button')
        })]
      }) : jsx(Fragment, {})
    });
    return n;
  }((t, r) => {
    let {
      draftsToMove,
      reposToMove
    } = eh([r]);
    e(showModalHandler({
      type: _$$K6,
      data: {
        draftsToMove,
        reposToMove,
        onMoveSuccess: ef,
        onClose: ep,
        setSynchronousFileTransferInProgress: D
      }
    }));
    t.stopPropagation();
  }, (t, r) => {
    u1({
      tile: r,
      index: 0,
      dispatch: e,
      selectedView: u
    });
    S(r, t);
    t.stopPropagation();
  }, em.length, windowInnerWidth);
  let [ey, ew, ej] = _$$z1({
    columnName: getI18nString('file_browser.drafts_to_move.table_header_last_modified'),
    isReversed: !0
  }, ed, ev);
  let eT = jsxs('div', {
    className: _C,
    children: [jsx('span', {
      className: _S,
      children: renderI18nText('file_browser.drafts_to_move.empty_header')
    }), jsx('span', {
      children: renderI18nText('file_browser.drafts_to_move.empty_content_description', {
        tab: jsx('button', {
          className: 'drafts_to_move_page_view--emptyContentTab--GKlRP',
          onClick: () => R(k === 'draft-files' ? 'deleted-draft-files' : 'draft-files'),
          children: k === 'draft-files' ? getI18nString('file_browser.drafts_to_move.deleted_drafts') : getI18nString('file_browser.drafts_to_move.drafts')
        })
      })
    })]
  });
  if (F !== 'NONE') {
    return jsx(_D, {
      currentFileTransferState: F
    });
  }
  let eE = em.length <= 0 || em.length > J;
  let eI = k === 'deleted-draft-files' || !getFeatureFlags().ps_trashed_drafts_enabled;
  let eN = jsx(_$$A2, {
    loadingElementClassName: 'drafts_to_move_page_view--loadingPage--ZZyqG',
    loadingElementId: 'loading-content-pane',
    loaded: q,
    children: eu ? jsx(Fragment, {
      children: jsx('div', {
        className: 'drafts_to_move_page_view--tableWrapper--b-sz2',
        children: jsx(Cj, {
          actionBar: e => jsxs('div', {
            className: 'drafts_to_move_page_view--actionBarButtons--RUREB',
            children: [!eE && jsx(ButtonLinkTracked, {
              className: 'drafts_to_move_page_view--deleteDraftsButton--Aesaa',
              onClick: () => ex(eI),
              children: eI ? renderI18nText('file_browser.drafts_to_move.bulk_delete_drafts_button') : renderI18nText('file_browser.drafts_to_move.bulk_trash_drafts_button')
            }), jsx(ButtonBasePrimaryTracked, {
              className: 'drafts_to_move_page_view--moveDraftsButton--fZf6H',
              disabled: eE,
              onClick: eb,
              children: renderI18nText('file_browser.drafts_to_move.bulk_move_drafts_button', {
                numSelected: em.length
              })
            })]
          }),
          actionBarClassName: U()('drafts_to_move_page_view--actionBar--BbYQh', {
            'drafts_to_move_page_view--actionBarHidden--l4K4A': A
          }),
          columns: ev,
          emptyContent: '',
          getItemKey: e => _$$Tf.getFileOrMainBranchKey(e) ?? '',
          isLoading: !_$$s6,
          itemTypeContext: {
            itemType: 'draftToMove',
            getSelectedCountString: e => getI18nString('file_browser.drafts_to_move.selected_count_files', {
              numSelected: e
            })
          },
          items: ej,
          minContentWidth: 728,
          onSelectedItemsChange: e_,
          onSetSortState: ew,
          rowHeightOverride: _k,
          scrollContainerInnerClassName: 'drafts_to_move_page_view--scrollContainer--yiQAz',
          selectAllDisabled: ej.length > J,
          shouldRoundBordersForSelectedRows: !0,
          sortState: ey,
          styleOverrideClassNames: {
            row: 'drafts_to_move_page_view--row--v9ugA',
            header: 'drafts_to_move_page_view--header--qsyde',
            unselectedCheckbox: 'drafts_to_move_page_view--visibleCheckbox--UOqli',
            batchActionClearButton: 'drafts_to_move_page_view--batchActionClearButton--Qk923'
          }
        })
      })
    }) : ec ? eT : jsx(_D, {
      currentFileTransferState: 'TRANSFER_COMPLETED'
    })
  });
  return wrapWithTracking(jsx(_$$r4, {
    content: eN,
    viewbar: ec && jsxs(Fragment, {
      children: [jsxs('div', {
        className: 'drafts_to_move_page_view--dtmContainer--NcCUW',
        children: [q && getFeatureFlags().dtm_deprecation_pre_migration_onboarding && jsx(_j, {}), q && getFeatureFlags().dtm_deprecation_migration_onboarding && jsx(_T, {})]
      }), jsx('div', {
        className: 'drafts_to_move_page_view--viewbar--wJ6Pu',
        children: jsxs('div', {
          className: 'drafts_to_move_page_view--viewbarWarning--6T7y-',
          children: [jsx(_$$E9, {
            className: 'drafts_to_move_page_view--yellowIcon--xHN3r'
          }), jsxs('div', {
            children: [jsx('h1', {
              className: 'drafts_to_move_page_view--viewbarHeading--02fvs',
              children: renderI18nText('file_browser.drafts_to_move.viewbar_heading')
            }), jsxs('ul', {
              className: 'drafts_to_move_page_view--viewbarDescription--dV8s3',
              children: [jsx('li', {
                children: renderI18nText('file_browser.drafts_to_move.move_drafts_below')
              }), jsx('li', {
                children: renderI18nText('file_browser.drafts_to_move.drafts_for_personal_work')
              }), jsx('li', {
                children: renderI18nText('file_browser.drafts_to_move.access_to_drafts')
              })]
            }), jsxs('div', {
              className: 'drafts_to_move_page_view--viewbarActions--v-cwt',
              children: [jsx(ButtonBasePrimaryTracked, {
                className: 'drafts_to_move_page_view--moveAllDraftsButton--9-TlX',
                onClick: () => {
                  O(!0);
                  e(showModalHandler({
                    type: _$$K6,
                    data: {
                      reposToMove: el.map(e => e.repo),
                      draftsToMove: et.map(e => e.file),
                      onMoveSuccess: ef,
                      isMoveAll: !0,
                      moveAllDraftsAsync: et.length > J,
                      onClose: ep,
                      setSynchronousFileTransferInProgress: D
                    }
                  }));
                },
                children: renderI18nText('file_browser.drafts_to_move.move_all_drafts_button')
              }), jsx(ButtonSecondaryLinkTracked, {
                className: 'drafts_to_move_page_view--learnMoreButton--lUnQ9 drafts_to_move_page_view--moveAllDraftsButton--9-TlX',
                href: 'https://www.figma.com/blog/updates-to-how-drafts-work/',
                target: '_blank',
                children: renderI18nText('file_browser.drafts_to_move.viewbar_learn_more_link')
              })]
            })]
          })]
        })
      }), jsx('div', {
        className: 'drafts_to_move_page_view--tabViewBarContainer--lsoH0',
        children: jsx(_P, {
          selectedTab: k,
          setSelectedTab: R
        })
      })]
    })
  }), _$$e7.FILE_BROWSER, {
    view: 'draftsToMove',
    selectedTab: k
  });
}
function _B({
  org: e,
  currentResourceId: t,
  hasTrailingDivider: r
}) {
  let s = useDispatch();
  return jsx(J5, {
    text: e.name,
    onClick: r => {
      s(selectViewAction({
        view: 'org',
        orgId: e.id,
        orgViewTab: _$$X.HOME
      }));
      logAndTrackCTA({
        clickedResourceType: 'org',
        clickedResourceId: e.id,
        currentResource: t,
        orgId: e.id
      });
    },
    hasTrailingDivider: r
  });
}
function _W({
  planEntity: e
}) {
  return jsxs(AutoLayout, {
    spacing: 4,
    children: [jsx(_$$H5, {
      entityId: e.id,
      entityName: e.name,
      imgUrl: e.imgUrl ?? void 0
    }), jsx(TextWithTruncation, {
      fontSize: 13,
      color: 'secondary',
      children: e.name
    })]
  });
}
function _$({
  team: e,
  currentResourceId: t,
  orgId: r,
  hasTrailingDivider: s
}) {
  let n = useDispatch();
  return jsx(J5, {
    text: e.name,
    onClick: a => {
      n(selectViewAction({
        view: 'team',
        teamId: e.id
      }));
      logAndTrackCTA({
        clickedResourceType: 'workspace',
        clickedResourceId: e.id,
        currentResource: t,
        orgId: r
      });
    },
    hasTrailingDivider: s
  });
}
function _V({
  workspace: e,
  currentResourceId: t,
  orgId: r,
  hasTrailingDivider: s
}) {
  let i = _$$$6();
  let n = e.id === UNASSIGNED;
  let o = !e.canRead;
  return jsx(J5, {
    text: n ? getI18nString('breadcrumbs.unassigned_license_group') : o ? getI18nString('breadcrumbs.private_workspace_ellipses') : e.name,
    onClick: a => {
      i(e.id, a);
      logAndTrackCTA({
        clickedResourceType: 'workspace',
        clickedResourceId: e.id,
        currentResource: t,
        orgId: r
      });
    },
    hasTrailingDivider: s,
    disabled: n || o
  });
}
function _z({
  folderId: e
}) {
  let t = useSubscription(FolderPageView, {
    projectId: e
  });
  let r = t.data?.project || null;
  let s = useCurrentUserOrgId();
  let i = useCurrentPublicPlan('FolderPageBreadcrumbs').unwrapOr(null);
  let n = i?.key.type === FOrganizationLevelType.ORG;
  if (!r?.team) return null;
  if (n || r.team.org ? s !== r.team.org?.id : !r.team.canRead) {
    return jsx(_W, {
      planEntity: r.team.org ?? r.team
    });
  }
  let o = Zr(r.team.org);
  return jsxs(_$$A11, {
    children: [r.team.org && jsx(_B, {
      org: r.team.org,
      currentResourceId: r.id,
      hasTrailingDivider: !0
    }), (r.team.workspace || o) && r.team.org && jsx(_V, {
      workspace: r.team.workspace ?? {
        id: UNASSIGNED
      },
      currentResourceId: r.id,
      orgId: r.team.org.id,
      hasTrailingDivider: !0
    }), jsx(_$, {
      team: r.team,
      currentResourceId: r.id,
      orgId: r.team.org?.id,
      hasTrailingDivider: !1
    })]
  });
}
let _K = 'seen_folder_settings_disconnected_project_share_copy_onboarding';
let _Y = 'FOLDER_SETTINGS_DISCONNECTED_PROJECT_SHARE_COPY_ONBOARDING_KEY';
let _J = userFlagExistsAtomFamily(_K);
function _q({
  folder: e
}) {
  let t = useAtomWithSubscription(_J);
  let r = useMemo(() => {
    let t = getResourceDataOrFallback(e.mostRecentResourceConnection);
    let r = !!t && !!t.disconnectedAt;
    let a = !!t && !t.assetTransferRequestId;
    let s = e.canTransferCopy;
    return resourceUtils.loaded(r && a && s);
  }, [e]);
  let {
    show,
    isShowing,
    complete
  } = _$$e3({
    overlay: j9$,
    priority: _$$N.DEFAULT_MODAL
  }, [t, r]);
  _$$h(() => {
    show({
      canShow: (e, t) => !e && t
    });
  });
  let l = e => jsx('span', {
    className: 'folder_settings_disconnected_project_share_copy_onboarding_overlay--planName--0GWpT',
    children: e
  });
  return jsx(_$$rq, {
    arrowPosition: F_.TOP,
    clickOutsideToHide: !0,
    description: renderI18nText('resource_connection.onboarding.share_a_project_copy_onboarding_description', {
      hostPlanName: l(getResourceDataOrFallback(e.mostRecentResourceConnection)?.hostPlanName),
      connectedPlanName: l(getResourceDataOrFallback(e.mostRecentResourceConnection)?.connectedPlanName)
    }),
    emphasized: !0,
    isShowing,
    onClose: complete,
    primaryCta: {
      label: renderI18nText('general.got_it'),
      ctaTrackingDescriptor: UpgradeAction.GOT_IT,
      type: 'button',
      onClick: complete
    },
    shouldCenterArrow: EL.FALLBACK,
    targetKey: _Y,
    title: renderI18nText('resource_connection.onboarding.share_a_project_copy_onboarding_title'),
    trackingContextName: 'seen folder settings disconnected project share copy onboarding overlay',
    userFlagOnShow: _K
  });
}
function _X(e) {
  let {
    selectedView,
    userFlags,
    userTeamFlags,
    userEduVerified,
    isFreeUser,
    userAnalyticsData,
    ...c
  } = selectWithShallowEqual(e => ({
    selectedView: e.selectedView,
    userFlags: e.userFlags,
    userTeamFlags: e.userTeamFlags,
    userEduVerified: !!e.user?.student_validated_at,
    isFreeUser: e.isFreeUser,
    userAnalyticsData: e.userAnalyticsData,
    ...getPermissionsState(e)
  }));
  let u = useDispatch();
  let m = useSubscription(EduOffboardingData, {});
  let {
    teamId,
    selectedTab
  } = e;
  let g = c.teams[teamId] ?? null;
  let h = !!g?.org_id;
  let x = !!g?.subscription;
  let b = useSubscription(TeamUpgradeBannerView(teamId ? {
    teamId
  } : null));
  let v = useMemo(() => b.transform(({
    team: e
  }) => !!e?.canAdmin), [b]).unwrapOr(!1);
  let y = useSelector(e => e.loadingState);
  let w = Be.loadingKeyForPayload({
    teamId
  });
  let j = isLoading(y, w);
  useEffect(() => {
    !j && teamId && !h && x && v && u(Be({
      teamId
    }));
  }, [u, teamId, h, x, v, j]);
  let T = useSelector(e => e.teamBilling?.summary);
  let E = m9(FResourceCategoryType.TEAM, g, teamId, {
    selectedView,
    userFlags,
    userTeamFlags,
    selectedTab,
    isFreeUser,
    userAnalyticsData,
    eduPeriodEnd: m.data?.currentUser?.eduPeriodEnd,
    billingSummary: T,
    ...c
  }, u, adminPermissionConfig.TeamUpgradeBanner.bannerContent).unwrapOr(null);
  if (!E) return jsx('div', {});
  let I = _t({
    resourceType: FResourceCategoryType.TEAM,
    teamId
  }, E);
  let N = E.severity === _$$c7.WARN ? mG : '';
  let C = E.bannerClassName || '';
  let S = `${mZ} ${N} ${C}`;
  return jsx('div', {
    className: S,
    children: jsx(_s, {
      ...E,
      tracking: I
    })
  });
}
function _Z({
  folderId: e,
  pinnedFiles: t,
  tileActions: r
}) {
  let n = useDispatch();
  let o = getSelectedView();
  let l = getUserId();
  let {
    showing,
    show,
    data
  } = _$$L2();
  let m = _$$v4();
  let _ = useCallback((t, r, a) => {
    m(t, r);
    let s = t.type === _$$nb.PINNED_FILE ? t.file : null;
    trackFileBrowserFileClick(FILE_BROWSER_FILE_CLICKED, s, {
      entrypoint: a,
      selectedView: o.view,
      resourceType: 'folder',
      resourceId: e,
      pinDescription: `file open from pinned files for file named ${s?.name}`
    });
  }, [m, o.view, e]);
  let p = useCallback((e, t) => {
    _(_4(e.file), t, 'pinned files');
  }, [_]);
  let f = useCallback((e, t, r) => {
    n(_$$an());
    n(PW({
      type: _$$F2.PINNED_FILES,
      keys: e.map(e => e.file.key)
    }));
    show({
      data: {
        tile: _4(e[0].file),
        targetRect: {
          top: t.clientY,
          right: t.clientX,
          bottom: t.clientY,
          left: t.clientX,
          width: 1,
          height: 1
        },
        index: r
      }
    });
  }, [n, show]);
  let g = useCallback(t => {
    if (t.length !== 1) return;
    let r = t[0];
    r?.pinnedByUser?.id === l && n(_$$z10({
      folderId: e,
      fileKey: r.file.key
    }));
  }, [l, n, e]);
  let h = useMemo(() => t.filter(({
    file: e
  }) => !!e).map(e => _4(e.file)), [t]);
  let x = _$$nw(h);
  let b = useMemo(() => t.sort((e, t) => e.file.createdAt > t.file.createdAt ? 1 : -1), [t]);
  return jsxs('div', {
    className: cssBuilderInstance.px32.pb8.m0.$,
    children: [t.length > 0 ? jsx(_$$A10, {
      handleContextMenu: f,
      items: b,
      doNotFocusOnLoad: !0,
      getAriaLabel: e => e.file.name,
      viewType: ViewMode.GRID,
      handleOpenItem: p,
      handleDeleteKey: g,
      gridViewProps: {
        containerStyle: _2.grid,
        renderTile: e => jsx(_0, {
          pinnedFile: e,
          isDropdownOpen: showing
        }),
        renderTileFooter: e => jsx(_1, {
          pinnedFile: e
        }),
        renderTileDragImage: e => jsx(NM, {
          file: e.file,
          noBorder: !0
        })
      }
    }) : jsx('div', {}), (() => {
      let e = data?.tile ?? null;
      return jsx(_$$i4, {
        tile: e,
        selectedTiles: x,
        tileActions: r,
        openTile: t => {
          e && _(e, t, 'pinned files: context menu');
        },
        dropdownVisible: showing
      });
    })()]
  });
}
function _0({
  pinnedFile: e
}) {
  let t = _4(e.file);
  return jsx(_$$e1, {
    tile: t,
    noBorder: !0,
    size: _$$y2.SMALL
  });
}
function _1({
  pinnedFile: e
}) {
  return jsxs('div', {
    className: cssBuilderInstance.pt8.flex.flexColumn.$,
    children: [jsx('span', {
      className: cssBuilderInstance.ellipsis.textBodyLargeStrong.truncate.$,
      children: e.file.name
    }), jsx(TextWithTruncation, {
      truncate: !0,
      showTooltipWhenTruncated: !0,
      color: 'secondary',
      children: getI18nString('tile.file_tile.pinned_by_user', {
        name: e.pinnedByUser?.name ?? ''
      })
    })]
  });
}
function _4(e) {
  return {
    type: _$$nb.PINNED_FILE,
    file: e
  };
}
let _2 = {
  grid: {
    gridTemplateColumns: 'x1g5i94c',
    userSelect: 'x87ps6o',
    $$css: !0
  }
};
let pt = new Set(['PM', 'ENG', 'DES', 'MKT', 'UR']);
let pr = (e, t) => e ? _$$Dw.loadingKeyForPayload({
  shelfType: CommunityPageType.FILE_BROWSER_RECOMMENDED_TEMPLATES,
  filterLabel: t
}) : _$$sz.loadingKeyForPayload({
  shelfType: CommunityPageType.FILE_BROWSER_RECOMMENDED_TEMPLATES
});
let pa = _$$n4(e => function (e) {
  if (!e) return 'OTH';
  let t = {
    'software-development': 'ENG',
    'user-research': 'UR',
    'design': 'DES',
    'marketing': 'MKT',
    'product-management': 'PM',
    'other': 'OTH'
  };
  if (e in t) return t[e];
  let r = {
    'project-manager': 'PM',
    'designer': 'DES',
    'developer': 'ENG',
    'marketer': 'MKT',
    'product-manager': 'PM',
    'consultant': 'OTH',
    'sales': 'MKT',
    'ux-researcher': 'UR',
    'student': 'OTH',
    'educator': 'OTH'
  };
  return e in r ? r[e] : e.endsWith('-developer') ? 'ENG' : e.endsWith('-designer') ? 'DES' : e.includes('Eng') || e.includes('Dev') ? 'ENG' : e.includes('Des') ? 'DES' : e.includes('Lead') || e.includes('Man') ? 'PM' : 'OTH';
}(e?.profile?.job_title ?? 'OTH'));
let pl = [FFileType.WHITEBOARD, FFileType.SLIDES];
let pd = atom(!1);
function pc(e) {
  let t = useDispatch();
  let r = pa(selectCurrentUser());
  let n = pr(!1, r);
  let o = useIsLoading(n);
  let l = useIsLoaded(n);
  let d = pt.has(r) ? r : UserRole.ALL;
  let c = Xr(pd);
  useEffect(() => (c(!0), () => c(!1)), [c]);
  useEffect(() => {
    if (!o && !l) {
      return t(_$$Dw({
        shelfType: CommunityPageType.FILE_BROWSER_TEMPLATES_BAR,
        filterLabel: d
      }));
    }
  }, [o, l, t, r, d]);
  let u = useSelector(e => e.communityHub.shelves[CommunityPageType.FILE_BROWSER_TEMPLATES_BAR] || []);
  let m = useMemo(() => {
    let e = new Map();
    u.forEach(t => {
      e.set(t.id, t.shelf_content.map(e => e));
    });
    return e;
  }, [u]);
  let _ = useCallback(e => {
    switch (e) {
      case 'All':
        return getI18nString('file_browser.templates_shelf.for_you');
      case 'Brainstorm':
        return getI18nString('file_browser.templates_shelf.brainstorm');
      case 'Reviews':
        return getI18nString('file_browser.templates_shelf.reviews');
      case 'Meetings':
        return getI18nString('file_browser.templates_shelf.meetings');
      case 'Planning':
        return getI18nString('file_browser.templates_shelf.planning');
      case 'Diagram':
        return getI18nString('file_browser.templates_shelf.diagram');
      default:
        return null;
    }
  }, []);
  let p = useMemo(() => {
    let e = [];
    u.forEach(t => {
      t.shelf_content.length > 0 && e.push({
        tabKey: t.id,
        tabTitle: t.title,
        modifiedTabTitle: _(t.title)
      });
    });
    return e;
  }, [u, _]);
  return p.length === 0 ? null : jsx(TrackingProvider, {
    name: 'topbar_templates_shown',
    children: jsx('div', {
      className: 'templates_bar--container--0nCIh',
      children: jsx(pu, {
        tabNameToTemplatesMap: m,
        folderId: e.folderId,
        onClose: e.onClose,
        tabList: p,
        newFileFrom: e.newFileFrom
      })
    })
  });
}
function pu(e) {
  let [t, r] = useState(e.tabList[0]);
  let [i, n] = useState(e.tabNameToTemplatesMap.get(t.tabKey) ?? []);
  let [o, l] = useState(null);
  let {
    sizeRef,
    numTemplates,
    templateWidth,
    templateHeight
  } = function (e) {
    let t = useRef(null);
    let [r, a] = useState(0);
    let i = Math.min(r - 4, 2229);
    useLayoutEffect(() => {
      a(t?.current?.offsetWidth ?? 0);
    }, [a, t]);
    wY(t, e => {
      a(e.width);
    });
    let n = useMemo(() => i ? Math.min(Math.floor((i + 16) / 187), e) : 0, [i, e]);
    let o = n && i ? Math.floor((i - 16 * (n + 1)) / n) : 0;
    let l = o ? Math.floor(136 * o / 171) : 0;
    return {
      sizeRef: t,
      numTemplates: n,
      templateWidth: o,
      templateHeight: l
    };
  }(i?.length ?? 0);
  useEffect(() => {
    if (!e.tabList || e.tabList.length === 0) return;
    let t = e.tabList[0];
    r(t);
    n(e.tabNameToTemplatesMap.get(t.tabKey) ?? []);
  }, [e.tabList, e.tabNameToTemplatesMap]);
  useEffect(() => {
    n(e.tabNameToTemplatesMap.get(t.tabKey) ?? []);
  }, [t, e.tabNameToTemplatesMap]);
  let _ = jsx(pf, {
    tabs: e.tabList,
    activeTab: t,
    setActiveTab: r
  });
  return jsxs(Fragment, {
    children: [jsxs('div', {
      className: 'templates_bar--headerContainer--3-3sN',
      children: [jsx('div', {
        className: 'templates_bar--headerLeft--p4T6m',
        children: jsx(pm, {})
      }), jsx('div', {
        className: 'templates_bar--headerEnd--rI6SI',
        children: _
      }), jsx('div', {
        className: 'templates_bar--headerRightOld--j-Via',
        children: jsx('div', {
          className: 'templates_bar--closeButton--XeG8e',
          children: jsx(IconButton, {
            'onClick': e.onClose,
            'aria-label': getI18nString('general.close'),
            'children': jsx(_$$A, {})
          })
        })
      })]
    }), jsx('div', {
      className: 'templates_bar--body--PKvm-',
      ref: sizeRef,
      children: jsx('div', {
        'className': 'templates_bar--tilesContainer--OHkyf',
        'data-testid': 'templates-bar-tiles-container',
        'children': i?.slice(0, numTemplates ?? 0).map((r, s) => jsx('div', {
          style: {
            width: templateWidth,
            height: templateHeight,
            marginRight: 16
          },
          children: jsx(pp, {
            hubFile: r,
            rank: s,
            folderId: e.folderId,
            tab: t,
            duplicatingHubId: o,
            setDuplicatingHubId: l,
            newFileFrom: e.newFileFrom
          })
        }, r.id))
      })
    })]
  });
}
function pm() {
  return jsx('div', {
    className: 'templates_bar--headerTitle--6BSKy text--fontPos13--xW8hS text--_fontBase--QdLsd',
    children: renderI18nText('file_browser.templates_shelf.interim_title')
  });
}
let p_ = e => e === FTemplateCategoryType.WHITEBOARD ? 'whiteboard' : e === FTemplateCategoryType.SLIDE_TEMPLATE ? 'piper' : 'design';
function pp(e) {
  let t = useDispatch();
  let r = e.hubFile;
  let s = r.id;
  let n = e.duplicatingHubId !== null;
  let o = e.duplicatingHubId === s;
  let l = r && _$$a11(e.hubFile);
  let d = a => {
    a.stopPropagation();
    e.setDuplicatingHubId(s);
    t(_$$rL({
      hubFileId: s,
      hubFileName: l?.name || 'this file',
      openInNewTab: !1,
      folderId: e.folderId,
      source: FileBrowserLocation.FILE_BROWSER_TEMPLATES_BAR,
      callback: t => {
        e.setDuplicatingHubId(null);
        logAndTrackCTA({
          fileKey: t,
          rank: e.rank,
          templateId: s,
          productType: _$$L6(r.viewer_mode)
        }, 'topbar_template_selected');
        _$$_8('resource_inserted', {
          fileKey: t,
          resourceId: s,
          resourceName: l.name,
          resourceType: 'template',
          templateType: _$$n5.HubFile,
          triggeredFrom: e.newFileFrom,
          category: e.tab.tabTitle,
          templateCategory: e.tab.tabKey
        });
      }
    }));
  };
  return r ? jsx(_$$zq, {
    containerStyle: 'templates_bar--templatesTileContainer--yy7Q2',
    onClick: n ? void 0 : d,
    image: jsxs(FK, {
      backgroundColor: Cn(r.client_meta),
      removeBorder: !0,
      className: 'templates_bar--templatesTileImage--y0sA9',
      customRatioClassName: 'templates_bar--imageRatio--enx9l',
      children: [jsx(zx.Cover, {
        children: jsx('button', {
          className: 'templates_bar--hoverOverlay--bQBil browse_templates_modal--hoverOverlay--sFj3y',
          onClick: d,
          disabled: n
        })
      }), jsx(zx.Center, {
        children: jsx('div', {
          className: U()('templates_bar--useTemplateButton--4KFhz', cssBuilderInstance.bRadius6.$),
          tabIndex: -1,
          children: jsx(setupThemeContext, {
            brand: p_(r.viewer_mode),
            children: jsx(Button, {
              onClick: d,
              disabled: n,
              children: o ? jsx(_$$k3, {}) : renderI18nText('file_browser.new_file_creation_topbar.use_templates')
            })
          })
        })
      }), jsx(Ho, {
        image: e.overrideThumbnailUrl || r.thumbnail_url || void 0,
        isSet: !!e.overrideThumbnailUrl || !!r.thumbnail_is_set,
        isWhiteboard: r.viewer_mode === FTemplateCategoryType.WHITEBOARD,
        hubFileId: r.id,
        alt: _$$a11(r).name,
        imageClassName: r.viewer_mode === FTemplateCategoryType.SLIDE_TEMPLATE ? 'templates_bar--slidesThumbnailImage--uJ-8c templates_bar--thumbnailImage--ymHpx' : 'templates_bar--thumbnailImage--ymHpx',
        resizedThumbnailUrls: r.resized_thumbnail_urls
      })]
    }),
    bottomRow: jsx(_$$Wf.NameAndFileIconMetadata, {
      name: l.name,
      className: 'templates_bar--tilesBottomRowContainer--GxsNx',
      textClassName: 'templates_bar--tileBottomRowNameOnly--SMVhN text--fontPos11--2LvXf text--_fontBase--QdLsd',
      viewerMode: r.viewer_mode
    }),
    bottomRowStyle: 'templates_bar--bottomRowStyle--a32JN'
  }) : null;
}
function pf(e) {
  return jsx('div', {
    className: 'templates_bar--tabs--a8HOf text--fontPos13--xW8hS text--_fontBase--QdLsd',
    style: styleBuilderInstance.add({
      columnGap: '26px'
    }).$,
    children: e.tabs.map(t => jsx(pg, {
      tab: t,
      isActive: t.tabKey === e.activeTab.tabKey,
      setActiveTab: e.setActiveTab
    }, t.tabKey))
  });
}
function pg(e) {
  return jsx(ButtonPrimitive, {
    className: U()('templates_bar--tab---drzF text--fontPos11--2LvXf text--_fontBase--QdLsd', {
      'templates_bar--activeTab--c7Hid': e.isActive
    }),
    onClick: () => {
      logAndTrackCTA({
        triggeredFrom: 'file-browser',
        category: e.tab.tabTitle
      }, 'template_shelf_category_toggled');
      e.setActiveTab(e.tab);
    },
    children: e.tab.modifiedTabTitle ?? e.tab.tabTitle
  });
}
let pT = 'connected_folder_empty_view--subtitle--eKq7-';
let pE = 'connected_folder_empty_view--betaTag--xypkD';
function pI(e) {
  let t;
  let {
    lgFolder,
    hostPlanName,
    user
  } = e;
  let o = useDispatch();
  let {
    properties
  } = useTracking();
  let {
    handleUpgrade,
    getUpgradeEligibility,
    hasPendingRequest,
    getUpgradePathway
  } = wH({
    folderId: lgFolder.id
  });
  let _ = lgFolder.canCreateDesignFileWithReasons.result && lgFolder.canEdit;
  let p = (e => {
    let t = getUpgradeEligibility(FProductAccessType.DESIGN, _);
    return t === _$$q5.CAN_UPGRADE ? (logAndTrackCTA({
      ...properties,
      trackingDescriptor: UpgradeAction.CREATE_FILE,
      licenseType: FProductAccessType.DESIGN,
      billableProductKey: getMinimumBundle(FProductAccessType.DESIGN),
      needsUpgrade: !0
    }), handleUpgrade({
      afterUpgradeCallback: e,
      licenseType: FProductAccessType.DESIGN,
      upgradeReason: _$$i5.CREATE_FILE,
      entryPoint: DeepLinkType.CREATE_FILE_EMPTY_CONNECTED_PROJECT
    })) : t === _$$q5.CANNOT_UPGRADE ? () => o(VisualBellActions.enqueue({
      message: 'Can\'t upgrade',
      error: !0
    })) : e;
  })(_$$$2({
    isDraftsFolder: hasRootPath(lgFolder),
    editorType: FFileType.DESIGN,
    newFileFrom: FileBrowserLocation.FILE_BROWSER_CONNECT_FOLDER_EMPTY_PAGE,
    contextClicked: 'empty_connected_project_page',
    folderId: lgFolder.id
  }));
  let f = () => !_ && getUpgradeEligibility(FProductAccessType.DESIGN) === _$$q5.CANNOT_UPGRADE && hasPendingRequest(FProductAccessType.DESIGN);
  let g = lgFolder.team?.org?.id;
  let h = isExternalRestricted(user, g);
  let x = _$$ud(lgFolder) && !h;
  return jsxs('div', {
    className: 'connected_folder_empty_view--connectEmptyStateContainer--YGdYq',
    children: [jsx('div', {
      className: 'connected_folder_empty_view--connectedEmptyHeading--UNTZ6',
      children: renderI18nText('file_browser.folder.what_s_a_connected_project_without_files')
    }), jsxs('div', {
      className: 'connected_folder_empty_view--creationButtonsContainer--vedbb',
      children: [jsx(pN, {
        hideDisabledTooltip: f(),
        isDisabled: f(),
        onClick: p,
        showRequestSentTag: f(),
        showRequestTag: !_ && getUpgradeEligibility(FProductAccessType.DESIGN) === _$$q5.CAN_UPGRADE && getUpgradePathway(FProductAccessType.DESIGN) !== _$$J6.AUTO_PATHWAY && !hasPendingRequest(FProductAccessType.DESIGN),
        subtitle: getI18nString('file_browser.folder.create_a_file_in_any_figma_product'),
        title: getI18nString('file_browser.folder.start_from_scratch')
      }), x && jsx(pN, {
        title: getI18nString('file_browser.folder.use_existing_work'),
        onClick: () => {
          lgFolder && (o(selectFolderView(lgFolder.id)), o(_$$L7()));
        },
        subtitle: getI18nString('file_browser.folder.import_images_sketch_files_and_pdfs')
      })]
    }), jsxs('div', {
      className: pT,
      children: [jsx(_$$l7, {
        className: 'connected_folder_empty_view--libraryIcon--jFzUk'
      }), jsx('div', {
        children: renderI18nText('file_browser.folder.the_host_team_can_add_libraries', {
          hostPlanName: jsx('span', {
            className: 'connected_folder_empty_view--bold--6ZKfX',
            children: hostPlanName
          }),
          learnMoreLink: jsx('a', {
            className: 'connected_folder_empty_view--learnMore--4py5l modal--blueLink--9GcJu blue_link--blueLink--9rlnd',
            href: 'https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects#h_01JMJDKJFD68CH88F663KG08AJ',
            target: '_blank',
            children: t || renderI18nText('resource_connection.request_modal.learn_more')
          })
        })
      })]
    })]
  });
}
function pN(e) {
  let t = e.isDisabled;
  let r = e.onClick;
  let i = useRef(null);
  let n = useCallback(e => {
    r(e);
    i.current?.blur();
  }, [r]);
  let o = getDisabledCreationButtonReason().unwrapOr(null);
  return jsxs('button', {
    'className': U()('connected_folder_empty_view--creationButton--CQHPo', t && 'connected_folder_empty_view--disabled--eER6x'),
    'ref': i,
    'data-testid': 'connect_file_browser_create_file_button',
    'tabIndex': 0,
    'disabled': t,
    'onClick': t ? void 0 : n,
    'data-tooltip': e.isDisabled && !e.hideDisabledTooltip && o ? o : void 0,
    'data-tooltip-type': KindEnum.TEXT,
    'children': [jsx('div', {
      className: 'connected_folder_empty_view--creationIcon--ieYan',
      children: jsx(_$$e0, {})
    }), jsxs('div', {
      className: 'connected_folder_empty_view--productNameContainer--w-3vG',
      children: [jsx('span', {
        className: 'connected_folder_empty_view--productName--19C6G',
        children: e.title
      }), jsx('span', {
        className: pT,
        children: e.subtitle
      })]
    }), e.showRequestTag && jsx(Badge, {
      className: pE,
      text: getI18nString('upgrades.request'),
      color: BadgeColor.DEFAULT_TRANSLUCENT
    }), e.showRequestSentTag && jsx(Badge, {
      className: pE,
      text: getI18nString('upgrades.request_sent'),
      color: BadgeColor.DEFAULT_TRANSLUCENT
    })]
  });
}
let pC = {
  open: !0,
  openNewTab: !0,
  restoreFromVersion: !0,
  share: !0,
  copyLink: !0,
  rename: !0,
  duplicate: !0,
  delete: !0,
  createBranch: !0,
  publishOrgTemplate: !0,
  moveFile: !0,
  pinToFolder: !0,
  pinToWorkspace: !0
};
function pS(e) {
  let t = useDispatch();
  let r = useSubscription(PinnedFiles, {
    folderId: e.folderId
  });
  let n = useMemo(() => r.status === 'loaded' ? (r.data.project?.pinnedFiles || []).filter(e => !!e.file) : [], [r]);
  useEffect(() => {
    t(MR({
      folderId: e.folderId,
      fileKeys: n.map(e => e.file.key)
    }));
  }, [n, t, e.folderId]);
  let o = useCallback(() => {
    t(_$$an());
  }, [t]);
  return n.length !== 0 ? jsxs('div', {
    children: [jsx('div', {
      className: 'folder_page_view--pinnedHeader--YJufT',
      onMouseDown: o,
      children: jsx(TextWithTruncation, {
        fontSize: 13,
        color: 'secondary',
        children: renderI18nText('file_browser.folder.pinned')
      })
    }), jsx(_Z, {
      pinnedFiles: n,
      folderId: e.folderId,
      tileActions: e.tileActions
    })]
  }) : null;
}
function pk({
  files: e,
  filesByRepoId: t,
  folderId: r,
  hasBanner: n,
  isEditingLocked: o,
  lgFolder: l,
  repos: d,
  team: c,
  activeProjectConnection: u,
  infiniteScrollOptions: m
}) {
  let _ = selectUser();
  let p = _$$R3(c?.id);
  let f = jn();
  let g = useSelector(e => pR(r, e.tileSortFilterStateByView));
  let x = useSelector(e => e.selectedBranchKeyByRepoId);
  let b = vt(c?.id);
  let v = !!l && canCreateAnyFileType(l);
  let y = v && !o;
  let w = y ? '' : getI18nString('file_browser.folder.no_files_yet');
  let {
    shouldShowTemplatesBar,
    hideTemplatesBar
  } = function ({
    folderId: e,
    hideTemplatesUserFlag: t,
    isShowingLockedRedesign: r,
    additionalVisibilityRequirements: a = !0
  }) {
    let n = useDispatch();
    let o = getUserId();
    let {
      data
    } = useProjectFileCreationPermissions(e);
    let d = !!data && pl.every(e => canCreateFileType(data, e));
    let c = useSelector(isTemplatePickerDisabled);
    let u = useSelector(e => e.userFlags[t]);
    let m = useCurrentPublicPlan('useTemplatesBarVisibility').unwrapOr(null);
    let _ = m?.tier === FPlanNameType.PRO || m?.tier === FPlanNameType.STUDENT;
    return {
      shouldShowTemplatesBar: !BrowserInfo.mobile && d && !c && !u && !r && _ && a,
      hideTemplatesBar: useCallback(() => {
        n(postUserFlag({
          [t]: !0
        }));
        logAndTrackCTA({
          userId: o,
          opening: !1
        }, 'topbar_recommended_templates_toggled');
      }, [o, n, t])
    };
  }({
    folderId: r,
    hideTemplatesUserFlag: 'hide_recommended_templates_in_projects',
    isShowingLockedRedesign: b || f && p,
    additionalVisibilityRequirements: !n
  });
  let E = [...useMemo(() => e.map(e => _$$fA(e)), [e]), ...d.filter(e => !e.trashed_at).map(e => ({
    type: _$$nb.REPO,
    repo: e,
    branches: t[e.id],
    selectedBranchKey: x[e.id] || ''
  }))];
  return jsx(_$$B4, {
    onShouldFetchNextPage: m.onShouldFetchNextPage,
    isFetchingNextPage: m.isFetchingNextPage,
    children: jsxs('div', {
      className: 'folder_page_view--container---glyH',
      children: [shouldShowTemplatesBar && jsx(pc, {
        folderId: r,
        newFileFrom: FileBrowserLocation.FILE_BROWSER_TOPBAR_FOLDER,
        onClose: hideTemplatesBar
      }), jsx(pS, {
        folderId: r,
        repos: d,
        tileActions: pC
      }), jsx(me, {
        newFileTile: y,
        tiles: E,
        tileActions: pC,
        sortFilterOptions: g,
        emptyStateText: w,
        emptyStateContent: (() => {
          if (E.length === 0 && u && v) {
            return jsx(pI, {
              lgFolder: l,
              hostPlanName: u.hostPlanName,
              user: _
            });
          }
        })(),
        isFolder: !0,
        isEligbileForProTeamLockedRevampUI: p
      })]
    })
  });
}
let pR = memoizeByArgs(getSortFilterConfig);
let pP = 'CONNECTED_PROJECTS_PROJECT_PAGE_ONBOARDING_KEY';
function pL({
  resourceConnection: e
}) {
  let t = jsx(Link, {
    href: 'https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects',
    newTab: !0,
    children: renderI18nText('resource_connection.onboarding.connected_projects_capitalized')
  });
  let r = renderI18nText('resource_connection.onboarding.connected_projects_are_just_like_normal_projects', {
    hostPlanName: e.hostPlanName,
    connectedProjects: t,
    connectedPlanName: e.connectedPlanName
  });
  return jsx(_$$b6, {
    description: r,
    title: renderI18nText('resource_connection.onboarding.projects_are_better_together'),
    trackingContext: 'Connected Projects Project Page Onboarding Modal',
    onboardingKey: pP,
    arrowPosition: _$$F_.BOTTOM
  });
}
function p$(e) {
  let t = useDispatch();
  let r = useRef(null);
  let n = useSelector(({
    dropdownShown: e
  }) => e);
  let o = useSelector(t => getOrgIdFromFolderOrTeam(e.folder.id, t)) ?? null;
  let l = _$$Q({
    currentOrgId: o,
    currentTeamId: null
  });
  let d = useMemo(() => {
    if (l.status === 'loaded') return T0(l.data, e.folder.id);
  }, [l, e.folder.id]);
  if (l.status !== 'loaded') {
    return jsx('div', {
      className: cssBuilderInstance.flex.itemsCenter.colorIcon.$,
      children: jsx(SvgComponent, {
        svg: _$$A23
      })
    });
  }
  let c = _$$gV(l.data, o);
  let u = e.dropdownKey && n && n.type === e.dropdownKey && n.data && n.data.targetRect;
  let m = r.current && n?.data?.targetRef === r.current && n?.type === jU;
  let _ = r.current;
  let p = [];
  e.folder.canRead && p.push(jsx(_$$c$, {
    children: renderI18nText('file_browser.folder.share'),
    onClick: e.onShareClick
  }, 'share'));
  p.push(jsx(_$$c$, {
    children: jsxs('div', {
      className: cssBuilderInstance.flex.justifyBetween.itemsCenter.w150.$,
      children: [renderI18nText('favorited_resources.add_to_sidebar'), jsx(SvgComponent, {
        svg: _$$A24
      })]
    }),
    onClick: a => {
      a.stopPropagation();
      r.current && t(showDropdownThunk({
        type: jU,
        data: {
          targetRect: _.getBoundingClientRect(),
          targetRef: _,
          resourceId: e.folder.id
        }
      }));
    }
  }, 'add-to-favorites-section'));
  return jsxs('span', {
    children: [jsx(ButtonPrimitive, {
      className: U()(cssBuilderInstance.flex.itemsCenter.colorIcon.$, HM),
      ref: r,
      onClick: r => {
        e.dropdownKey && _ && t(showDropdownThunk({
          type: e.dropdownKey,
          data: {
            targetRect: _?.getBoundingClientRect()
          }
        }));
      },
      children: jsx(_$$J, {})
    }), u && jsx(Cf, {
      targetRect: n.data.targetRect,
      minWidth: 172,
      maxWidth: 172,
      propagateCloseClick: !0,
      children: p
    }), m && jsx(_$$t8, {
      setFavorite: e.setFavorite,
      resourceId: e.folder.id,
      resourceType: FEntityType.FOLDER,
      favoriteId: d?.id,
      orgId: o,
      sections: getResourceDataOrFallback(l.data?.currentUser?.userSidebarSections) ?? [],
      customSectionOrdering: l.data.currentUser?.baseOrgUser?.fileBrowserPreferences?.orderedSidebarSections ?? [],
      userHasMaxFavorites: c
    })]
  });
}
function p0({
  lgFolder: e,
  currentOrgId: t
}) {
  return !e.canEdit && !!e.plan?.isMember && !e.team?.canAdmin && t !== null;
}
let p4 = 'seen_folder_settings_connected_projects_onboarding';
let p2 = atom(!1);
function p5({
  folder: e,
  lgFolder: t,
  team: r
}) {
  let n = useDispatch();
  let o = useSelector(e => e.selectedView.view === 'folder' && e.selectedView.shouldShowRenameModal || !1);
  let l = function () {
    let e = vt();
    let t = jn();
    return e || t;
  }();
  let d = function () {
    let e = useStore();
    return useCallback(async t => {
      try {
        await XHR.post(`/api/folders/${t}/claim`);
        e.dispatch(qp({
          folderId: t
        }));
        isTempId(t) || e.dispatch(jl({
          folderId: t,
          loadedFolders: {}
        }));
      } catch (t) {
        e.dispatch(FlashActions.error(t.message || getI18nString('file_browser.file_browser_actions.claim_team_error')));
      }
    }, [e]);
  }();
  let c = useCallback(() => d(t.id), [d, t.id]);
  let u = function (e) {
    let t = useDispatch();
    let r = e.canEdit;
    return useCallback(() => {
      e.name && r && t(showModalHandler({
        type: _$$y4(),
        data: {
          folder: e
        }
      }));
    }, [t, e, r]);
  }(t);
  _$$h(() => {
    o && u();
  });
  let _ = useFBGNavigationUpdatesTreatment() === FBGNavigationUpdatesVariants.CONTROL;
  let p = useSelector(e => e.currentUserOrgId);
  let f = useSelector(e => e.teamRoleRequests);
  let g = t.team?.org?.id;
  let h = t.team?.id;
  let x = p0({
    lgFolder: t,
    currentOrgId: p
  });
  let b = function ({
    lgFolder: e
  }) {
    let t = eN({
      project: e
    });
    let r = _$$R0();
    let a = useSelector(e => e.currentUserOrgId);
    return e.canEdit && !e.isEditingLockedForUser && t && (!r || !p0({
      lgFolder: e,
      currentOrgId: a
    }));
  }({
    lgFolder: t
  });
  let v = _$$b7(t.plan?.tier);
  let y = BN(p4);
  let [w, j] = useAtomValueAndSetter(p2);
  useEffect(() => {
    !w && v && (_$$FC(p4), j(!0));
  }, [w, j, v]);
  let T = (t?.canConnect ?? !1) && v;
  let E = y.status === 'loaded' && y.data < 3 && !!T;
  let I = () => {
    n(showModalHandler({
      type: _$$W5,
      data: {
        folderId: t.id
      }
    }));
  };
  let C = t.canRead;
  let S = useMemo(() => {
    if (x && f && r && f[r.id] && f[r.id].status === _$$c8.PENDING) return f[r.id].id;
  }, [x, f, r]);
  useEffect(() => {
    x && p && n(Rw());
  }, [x, n, p]);
  let k = userHasPlan(g, h);
  let R = l ? getI18nString('locked_team.label.tooltip') : void 0;
  let A = l ? KindEnum.TEXT : void 0;
  let O = (t, r, a) => {
    let s = {
      folder: e,
      entrypoint: 'folder_page_view',
      sectionId: a,
      favoriteId: r
    };
    t ? n(Mv(s)) : n(jv(s));
  };
  let F = function (e) {
    let t = _$$u7(e.id);
    let r = e.canRead;
    let i = e.team?.org?.id;
    let n = useMemo(() => t({
      folder: {
        ...e,
        orgId: i ?? null
      },
      shouldShowJoinButton: !1
    }), [t, e, i]);
    return useMemo(() => {
      let t = n.some(e => e.items.length > 0);
      if (r && t) {
        return {
          kind: _$$A9.CUSTOM,
          key: iq.DROPDOWN,
          element: jsx(ns, {
            dataOnboardingKey: _Y,
            buttonAriaLabel: getI18nString('file_browser.folder.page_header_dropdown_label'),
            dropdownKey: `folder-${e.id}`,
            menuGroups: n
          })
        };
      }
    }, [r, n, e.id]);
  }(t);
  let P = t?.activeProjectResourceConnections?.[0];
  return jsxs(ErrorBoundaryCrash, {
    boundaryKey: 'FolderPageViewHeader',
    fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
    severity: SeverityLevel.Critical,
    sentryTags: {
      area: _$$e.MONETIZATION_EXPANSION
    },
    children: [jsx(iV, {
      title: t.name,
      badge: P ? jsx(_$$W, {
        hostPlanName: P?.hostPlanName,
        connectedPlanName: P?.connectedPlanName,
        large: !0,
        dataOnboardingKey: pP
      }) : void 0,
      rightSideActions: (() => {
        let e = [];
        if (!t.ownerRole && t.team?.canAdmin && e.push({
          kind: _$$A9.CUSTOM,
          key: iq.CLAIM,
          element: jsx(_$$c2, {
            variant: 'secondary',
            onClick: c,
            children: getI18nString('file_browser.folder.join_as_owner')
          })
        }), b && e.push({
          kind: _$$A9.CUSTOM,
          key: iq.NEW_RESOURCE,
          showOnMobile: !0,
          element: jsx(FolderPageViewOmnicreateDropdown, {
            lgFolder: t,
            newFileFrom: FileBrowserLocation.FILE_BROWSER_TOPBAR_FOLDER
          })
        }), C) {
          let t = {
            kind: _$$A9.CUSTOM,
            key: iq.SHARE,
            element: jsx(_$$c2, {
              variant: 'secondary',
              onClick: I,
              htmlAttributes: {
                'data-tooltip-type': A,
                'data-tooltip': R
              },
              disabled: l,
              children: getI18nString('file_browser.folder.share')
            })
          };
          e.push(t);
        }
        x && e.push({
          kind: _$$A9.CUSTOM,
          key: iq.REQUEST_TO_EDIT,
          element: jsx(_$$c2, {
            variant: 'secondary',
            onClick: () => {
              S ? n(_$$lT({
                requestId: S
              })) : r && n(showModalHandler({
                type: _$$$7,
                data: {
                  team: r,
                  requesterCurrentLevel: AccessLevelEnum.VIEWER,
                  source: 'FolderPageView'
                }
              }));
            },
            children: void 0 !== S ? getI18nString('file_browser.team.cancel_request') : getI18nString('file_browser.team.request_to_edit')
          })
        });
        e.push({
          kind: _$$A9.CUSTOM,
          key: iq.SETTINGS,
          element: jsxs('div', {
            className: 'x1n2onr6',
            children: [jsx(Me, {
              'variant': 'secondary',
              'size': 'lg',
              'onClick': () => {
                n(showModalHandler({
                  type: _$$l8,
                  data: {
                    folderId: t.id
                  }
                }));
                E && v && _$$H6.upsertUserFlagWithCount(p4, 3);
              },
              'aria-label': getI18nString('file_browser.folder_settings_modal.tooltip.settings'),
              'htmlAttributes': {
                'data-tooltip': getI18nString('file_browser.folder_settings_modal.tooltip.settings')
              },
              'children': jsx(_$$P5, {})
            }), E && jsx('div', {
              className: 'x10l6tqk x1fo6t33 xzkxjte x170jfvy x1fsd2vl x6qnwee xorixrz'
            })]
          })
        });
        _ && k && e.push({
          kind: _$$A9.CUSTOM,
          key: iq.FAVORITE,
          element: jsx(_$$i2, {
            setFavorite: O,
            favoriteType: FEntityType.FOLDER,
            resourceId: t.id,
            orgId: p,
            teamId: h,
            size: 'lg'
          })
        });
        let s = jsx(p$, {
          dropdownKey: 'project-overflow-dropdown',
          folder: t,
          onShareClick: I,
          setFavorite: O
        });
        e.push({
          kind: _$$A9.CUSTOM,
          key: iq.PROJECT_OVERFLOW_MENU,
          showOnMobile: !0,
          hideOnDesktop: !0,
          element: s
        });
        return e;
      })(),
      rightSideOfTitleAction: F
    }), !!P && jsx(pL, {
      resourceConnection: P
    })]
  });
}
function p8({
  folderId: e
}) {
  let t = useSubscription(FolderPageView, {
    projectId: e
  });
  !function (e) {
    let [t] = setupResourceAtomHandler(FileBrowserProjectPageTitleView({
      projectId: e
    }), {
      enabled: !!getFeatureFlags().folder_page_fix_tab_titles
    });
    let r = t.transform(e => e.project?.name ?? null).unwrapOr(null);
    useEffect(() => {
      r && setEditorDocumentTitle(r);
    }, [r]);
  }(e);
  let r = selectPermissionsState();
  let [n, l] = function (e) {
    let t = !!getFeatureFlags().file_browser_paginated_folder_full_reads;
    let r = LK(e, !t);
    let [a, i] = mC({
      folderId: e,
      enabled: t
    });
    let n = useCallback(() => {
      t && !a.isFetchingNextPage && a.hasNextPage && i.fetchNextPage();
    }, [a.isFetchingNextPage, a.hasNextPage, i, t]);
    return [t ? a : r, n];
  }(e);
  let d = n.data?.folder;
  let c = t.data?.project || null;
  let u = useDispatch();
  let m = useSubscription(FolderCanView, {
    id: e
  });
  let _ = getSelectedView();
  let h = m.status === 'loaded' && !m.data.project?.hasPermission || c?.trashedAt;
  let x = c?.trashedAt;
  let b = c?.isAbandonedDrafts && c?.currentPlanUser?.permission === FMemberRoleType.ADMIN;
  useLayoutEffect(() => {
    if (h || x) {
      if (c?.team) {
        let e = c.team.id;
        u(selectViewAction({
          view: 'team',
          teamId: e
        }));
      } else {
        u(selectViewAction({
          view: 'recentsAndSharing'
        }));
      }
    }
    b && c.plan && c.plan.key.parentId && (c.plan.tier === FPlanNameType.PRO ? u(selectViewAction({
      view: 'abandonedDraftFiles',
      abandonedDraftFolderId: c.id,
      planId: c.plan.key.parentId,
      adminPlanType: OrganizationType.TEAM
    })) : c.plan.key.type === FOrganizationLevelType.ORG && u(selectViewAction({
      view: 'abandonedDraftFiles',
      abandonedDraftFolderId: c.id,
      planId: c.plan.key.parentId,
      adminPlanType: OrganizationType.ORG
    })));
  }, [u, m, c, h, x, b]);
  let v = r.teams[c?.teamId || ''] || null;
  useEffect(() => {
    c && !c.inviteOnlyAt && c.teamId && !v && u(getTeamAction({
      teamId: c.teamId
    }));
  }, [u, c, v]);
  let y = c?.activeProjectResourceConnections?.[0];
  let w = !!v && !!c?.teamId;
  let j = _e({
    resource: v,
    resourceType: FResourceCategoryType.TEAM,
    teamId: c?.teamId,
    shadowReadLabel: adminPermissionConfig.FolderPageView.hasBanner
  }).unwrapOr(!1) && w;
  let T = useCurrentUserOrgId();
  let E = memoizeByArgs(getSortFilterConfig);
  let N = useSelector(t => E(e, t.tileSortFilterStateByView));
  let C = !d || !c || n.status !== 'loaded' || t.status !== 'loaded';
  if (kF('Folder'), WX({
    markName: 'MainBodyContent',
    isLoaded: !C,
    contextArgs: {
      numFiles: n.transform(e => e.files.length).unwrapOr(null),
      isPaginated: !!getFeatureFlags().file_browser_paginated_folder_full_reads
    }
  }), C) {
    return jsx('div', {
      className: 'folder_page_view--loading--ZkDG0',
      children: jsx(LoadingSpinner, {})
    });
  }
  let S = {
    view: 'project',
    folderId: e,
    canEdit: c.canEdit,
    userSpace: T ? qo.ORG : qo.PERSONAL
  };
  let k = jsxs('div', {
    className: 'x78zum5 x167g77z x6s0dn4',
    children: [jsx(ye, {
      config: N.tileSortFilterConfig
    }), jsx(_$$mc, {
      dispatch: u,
      options: N,
      selectedView: _
    }), jsx($c, {
      initialViewMode: N.tileSortFilterConfig.viewMode,
      onViewModeChange: e => {
        trackEventAnalytics('file view toggle', {
          viewType: e === ViewMode.GRID ? 'grid' : 'list'
        });
        u(setBrowserTileSortView({
          selectedView: _,
          config: {
            ...N.tileSortFilterConfig,
            viewMode: e
          }
        }));
      }
    })]
  });
  return wrapWithTracking(jsx(_$$r4, {
    content: jsxs('div', {
      className: cssBuilderInstance.flex.flexColumn.$,
      children: [jsx(pk, {
        activeProjectConnection: y ? {
          id: y.id,
          hostPlanName: y.hostPlanName
        } : void 0,
        files: n.data.files,
        filesByRepoId: n.data.filesByRepoId,
        folderId: e,
        hasBanner: j,
        infiniteScrollOptions: {
          onShouldFetchNextPage: l,
          isFetchingNextPage: 'isFetchingNextPage' in n && n.isFetchingNextPage
        },
        isEditingLocked: c.isEditingLockedForUser,
        lgFolder: c,
        repos: n.data.repos,
        team: v
      }), jsx(_$$cx, {})]
    }),
    banner: v && j ? jsx(_X, {
      teamId: v.id
    }) : void 0,
    toolbar: jsxs(Fragment, {
      children: [jsx(p5, {
        folder: d,
        team: v,
        lgFolder: c
      }), jsx(_q, {
        folder: c
      })]
    }),
    viewbar: jsx(_$$g4, {
      leftSide: null,
      rightSide: k
    })
  }), _$$e7.FILE_BROWSER, S);
}
function p6() {
  let e;
  let t = useSelector(e => e.currentTeamId);
  let r = getSelectedView();
  let s = useSubscription(LimitedSpaceSharedProjectsView, {
    teamId: t ?? ''
  }, {
    enabled: !!t
  });
  if (!getFeatureFlags().limited_plan_spaces) return null;
  if (s.status !== 'loaded') {
    e = jsx(LoadingOverlay, {});
  } else {
    let i = (s.data.currentUser.status === 'loaded' && s.data.currentUser.data.teamProjectRoles || []).filter(e => !!e.project && (!getFeatureFlags().dtm_deprecation_org_downgrade || e.project.path !== '')).map(e => {
      let t = e.project;
      let r = t.activeProjectResourceConnections?.[0] ?? null;
      return {
        id: t.id,
        name: t.name,
        description: t.description,
        path: t.path,
        team_id: t.teamId,
        is_invite_only: !!t.inviteOnlyAt,
        is_view_only: !!t.viewOnlyAt,
        deleted_at: t.deletedAt ? t.deletedAt.toISOString() : null,
        updated_at: t.updatedAt.toISOString(),
        created_at: t.createdAt.toISOString(),
        touched_at: t.lastModifiedAt,
        shared_at: e.sharedWithYouFolder?.sharedAt.toISOString(),
        shared_by_user: e.sharedWithYouFolder?.sharedByUser,
        is_connected_project: !!r,
        resource_connection: r ? {
          hostPlanName: r.hostPlanName,
          connectedPlanName: r.connectedPlanName
        } : null
      };
    });
    e = jsx(Fragment, {
      children: jsx(mv, {
        viewId: `limitedTeam-${t}`,
        folderList: i,
        selectedView: r,
        isSharerInfoIncluded: !0
      })
    });
  }
  return wrapWithTracking(jsx(_$$r4, {
    content: jsx(Fragment, {
      children: e
    }),
    viewbar: jsx('div', {
      className: 'limited_space_team_projects_page_view--viewbar--YMqKQ',
      children: jsx('div', {
        className: 'limited_space_team_projects_page_view--viewbarHeading--mTm27',
        children: renderI18nText('file_browser.limited_space_team_projects.heading')
      })
    })
  }), _$$e7.FILE_BROWSER, {
    view: 'limitedSpaceTeamProjects'
  });
}
function p3({
  orgId: e
}) {
  let t = useDispatch();
  let r = useCurrentPlanUser('ViewLibrariesAction');
  return useIsOrgMemberOrAdminUser(r).data ? jsx(_$$K3, {
    action: {
      kind: _$$A9.BUTTON,
      key: iq.VIEW_LIBRARIES,
      displayText: getI18nString('org_view.view_libraries'),
      onClick: () => {
        t(selectViewAction({
          view: 'org',
          orgId: e,
          orgViewTab: _$$X.LIBRARIES
        }));
      }
    }
  }) : null;
}
function p7({
  canCreateTeam: e,
  isEnterpriseOrgDirectoryEnabled: t
}) {
  let r = useDispatch();
  return t || !e ? null : jsx(_$$K3, {
    action: {
      kind: _$$A9.CUSTOM,
      key: iq.NEW_TEAM,
      element: jsx(Button, {
        'aria-label': getI18nString('license_group_view.toolbar.new_team_button_aria_label'),
        'variant': 'primary',
        'onClick': () => {
          r(showModalHandler({
            type: Uc,
            data: {}
          }));
        },
        'iconPrefix': jsx(_$$e0, {}),
        'children': getI18nString('license_group_view.toolbar.new_team_button')
      })
    }
  });
}
function p9({
  orgId: e
}) {
  let t = useEnterpriseOrgDirectoryEnabled(e);
  let {
    canCreateTeam,
    cannotCreateTeamReason
  } = LM({
    id: e
  }, null);
  return t.status !== 'loaded' || cannotCreateTeamReason === z4.LG_LOADING ? null : jsxs(Fragment, {
    children: [jsx(p7, {
      canCreateTeam,
      isEnterpriseOrgDirectoryEnabled: t.data
    }), jsx(p3, {
      orgId: e
    }, 'org-library')]
  });
}
function fr() {
  let e = useDispatch();
  let t = useCurrentUserOrgId();
  let r = m3(selectWithShallowEqual(e => ({
    ...getPermissionsState(e),
    selectedView: e.selectedView,
    userFlags: e.userFlags,
    userTeamFlags: e.userTeamFlags,
    isFreeUser: e.isFreeUser,
    userAnalyticsData: e.userAnalyticsData
  })), e, adminPermissionConfig.OrgDelinquencyBanner.bannerContent).unwrapOr(null);
  if (!r) return jsx('div', {});
  let s = _t({
    resourceType: 'org',
    orgId: t
  }, r);
  let n = r.severity === _$$c7.WARN ? mG : '';
  let o = `${mZ} ${n}`;
  return jsx('div', {
    className: o,
    children: jsx(_s, {
      ...r,
      tracking: s
    })
  });
}
function fn() {
  let e = useCurrentPrivilegedPlan('OrgConnectedProjectsContent');
  let t = e.unwrapOr(null);
  let r = t?.connectionCount ?? 0;
  let i = useSubscription(PlanConnectedProjectsForPlanUser, {
    planType: t?.key.type ?? null,
    planId: t?.key.parentId ?? ''
  }, {
    enabled: t !== null
  });
  let o = useMemo(() => i.status !== 'loaded' ? [] : (getResourceDataOrFallback(i.data?.planConnectedProjectsForUser) || []).map(e => {
    let t = getResourceDataOrFallback(e.project);
    return t != null ? mapProjectSummary(t) : null;
  }).filter(e => e !== null), [i]);
  return e.status !== 'loaded' || i.status !== 'loaded' ? jsx('div', {
    className: cssBuilderInstance.flex.wFull.hFull.alignCenter.justifyCenter.$,
    children: jsx(_$$k3, {
      htmlAttributes: {
        'data-testid': 'loading-spinner'
      }
    })
  }) : r === 0 ? jsx('div', {
    className: 'org_connected_projects_view--emptyContent---1eNq',
    children: jsx(_$$K7, {
      entryPoint: wR.CONNECTED_PROJECT_ORG_PAGE
    })
  }) : jsxs(Fragment, {
    children: [jsx(_$$A25, {}), jsx('div', {
      className: 'org_connected_projects_view--tabContentContainer--qFQ6s',
      children: jsx('div', {
        className: cssBuilderInstance.wFull.$,
        children: jsx(_$$m3, {
          folderList: o,
          dataOnboardingKeyIndex: void 0,
          onChangeSortOptions: _$$lQ,
          viewType: ViewMode.GRID,
          isSharerInfoIncluded: !1
        })
      })
    })]
  });
}
let fd = 'org_meta_content--container--b5Iq3';
function fc({
  org: e
}) {
  return jsxs('div', {
    className: cssBuilderInstance.flex.flexColumn.rowGap16.$,
    children: [jsx(Ro, {
      entity: e,
      size: 36
    }), jsx(TextWithTruncation, {
      fontWeight: 'medium',
      fontSize: 13,
      children: e.name
    })]
  });
}
function fu({
  handle: e
}) {
  let t = useDispatch();
  return jsx('a', {
    href: new ProfileRouteState({
      profileHandle: e
    }).href,
    className: _$$Be,
    onClick: r => {
      r.metaKey || (r.preventDefault(), t(selectViewAction({
        view: 'communityHub',
        subView: 'handle',
        handle: e
      })));
    },
    children: jsxs(TextWithTruncation, {
      fontSize: 11,
      children: ['@', e]
    })
  });
}
function fm({
  orgId: e
}) {
  let t = useSelector(t => getAdminUsers(t.orgUsersByOrgId[e]).map(e => e.user));
  let r = useDispatch();
  return jsx(nR, {
    label: getI18nString('org_home_view_meta.admins'),
    members: t,
    onMemberClick: (e, t) => {
      r(selectViewAction({
        view: 'user',
        userId: t.id,
        userViewTab: InterProfileType.INTERNAL_PROFILE
      }));
    },
    canLeave: !1
  });
}
function f_({
  org: e,
  orgStats: t
}) {
  let r = t ? jsxs(TextWithTruncation, {
    fontSize: 11,
    color: 'secondary',
    children: [renderI18nText('org_home_view_meta.member_count', {
      memberCount: t.memberCount.data
    }), jsx('span', {
      children: '\xA0\xB7\xA0'
    }), 'workspaceCount' in t ? renderI18nText('org_home_view_meta.workspace_count', {
      workspaceCount: t.workspaceCount.data
    }) : renderI18nText('org_home_view_meta.team_count', {
      teamCount: t.discoverableTeamCount.data
    })]
  }) : jsx(Wi, {
    className: cssBuilderInstance.mb4.$,
    animationType: JR.SHIMMER
  });
  return jsxs('div', {
    className: fd,
    children: [jsx(fc, {
      org: e
    }), jsx('span', {
      className: cssBuilderInstance.mt4.$,
      children: r
    }), e.community_profile_handle ? jsx('span', {
      className: cssBuilderInstance.mt2.$,
      children: jsx(fu, {
        handle: e.community_profile_handle
      })
    }) : null, jsx('span', {
      className: cssBuilderInstance.mt32.$,
      children: jsx(fm, {
        orgId: e.id
      })
    })]
  });
}
function fp({
  org: e
}) {
  let t = useSubscription(EnterpriseOrgMetaContentView, {
    orgId: e.id
  });
  return jsx(f_, {
    orgStats: t.data?.org ?? null,
    org: e
  });
}
function ff({
  org: e
}) {
  let t = useSubscription(NonEnterpriseOrgMetaContentView, {
    orgId: e.id
  });
  return jsx(f_, {
    orgStats: t.data?.org ?? null,
    org: e
  });
}
function fg({
  org: e
}) {
  return jsxs('div', {
    className: fd,
    children: [jsx(fc, {
      org: e
    }), e.community_profile_handle ? jsx('span', {
      className: cssBuilderInstance.mt4.$,
      children: jsx(fu, {
        handle: e.community_profile_handle
      })
    }) : null, jsx('span', {
      className: cssBuilderInstance.mt4.$,
      children: jsxs(TextWithTruncation, {
        fontSize: 11,
        color: 'secondary',
        children: [renderI18nText('payments_modal.guest_permission_disclaimer'), ' ', jsx('a', {
          className: _$$Be,
          href: 'https://help.figma.com/hc/articles/360039957374',
          target: '_blank',
          rel: 'noopener',
          children: renderI18nText('org_home_view_meta.learn_more')
        })]
      })
    })]
  });
}
let fx = [_$$X.HOME, _$$X.YOUR_TEAMS, _$$X.CONNECTED_PROJECTS, _$$X.PLUGINS, _$$X.WIDGETS];
let fb = e => {
  switch (e) {
    case _$$X.HOME:
      return getI18nString('org_view.overview');
    case _$$X.YOUR_TEAMS:
      return getI18nString('org_view.your_teams');
    case _$$X.PLUGINS:
      return getI18nString('org_view.plugins');
    case _$$X.WIDGETS:
      return getI18nString('org_view.widgets');
    case _$$X.CONNECTED_PROJECTS:
      return getI18nString('org_view.connected_projects');
    default:
      return null;
  }
};
function fv(e) {
  let t = useDispatch();
  let r = useCurrentPublicPlan('OrgPageViewBar').unwrapOr(null);
  let n = getParentOrgIdIfOrgLevel(r);
  let o = {
    [_$$X.HOME]: !0,
    [_$$X.WIDGETS]: !0,
    [_$$X.PLUGINS]: !0,
    [_$$X.YOUR_TEAMS]: !0,
    [_$$X.LIBRARIES]: !1,
    [_$$X.FONTS]: !1,
    [_$$X.CONNECTED_PROJECTS]: !0
  };
  let l = e => {
    t(selectViewAction({
      view: 'org',
      orgId: n ?? '',
      orgViewTab: e
    }));
  };
  let [d, c, u] = _$$t5.useManagedTabs(o, e.selectedTab, e => {
    l(e);
  });
  let m = fx.map(e => createElement(_$$t5.Tab, {
    ...d[e],
    key: e
  }, fb(e)));
  let _ = jsx(UI3ConditionalWrapper, {
    children: jsx(_$$t5.TabStrip, {
      manager: u,
      children: m
    })
  });
  return jsx(_$$g4, {
    leftSide: _,
    rightSide: []
  });
}
function fw({
  workspace: e,
  targetRect: t,
  isDropdownOpen: r
}) {
  let s = nf();
  let n = useCurrentUserOrg();
  let o = useDispatch();
  if (!n || !r || !t) return null;
  let l = s({
    workspace: e,
    org: n
  });
  return jsx(UI3ConditionalWrapper, {
    children: jsx(noop, {
      parentRect: t,
      items: _$$o7(l),
      dispatch: o,
      onSelectItem: e => {
        e.callback && e.callback('', null, o);
      },
      showPoint: !1,
      shouldUsePortal: !0
    })
  });
}
function fE(e) {
  let {
    isSelected,
    isHovered
  } = e;
  let {
    header,
    footer
  } = useMemo(() => {
    if (e.queryResult && e.queryResult.status !== 'loaded') {
      return {
        header: jsx(Qp, {
          className: 'x100vrsf x1vqgdyp'
        }),
        footer: jsx(Wi, {
          className: 'x1oysuqx',
          dataTestId: 'unassigned-workspace-tile-loading-text'
        })
      };
    }
    let t = e.unassignedTeams || e.queryResult.data;
    return {
      header: jsx(_$$md2, {
        teams: t,
        size: 40,
        isHovered
      }),
      footer: renderI18nText('org_view.license_group.unassigned_tile.description', {
        teamCount: t.length
      })
    };
  }, [e.queryResult, e.unassignedTeams, isHovered]);
  let o = jsx('span', {
    children: '\xA0'
  });
  return jsx(_$$a12, {
    name: getI18nString('org_view.license_group.unassigned_tile.name'),
    headerLeft: header,
    headerRight: o,
    footerLeft: footer,
    canView: !0,
    isCardActive: isHovered || isSelected,
    isSelected,
    isInItemsView: !0
  });
}
function fI(e) {
  let t = useAtomWithSubscription(Fd);
  return e.unassignedTeams ? jsx(fE, {
    isSelected: e.isSelected,
    isHovered: e.isHovered,
    unassignedTeams: e.unassignedTeams
  }) : jsx(fE, {
    isSelected: e.isSelected,
    isHovered: e.isHovered,
    queryResult: t
  });
}
function fk(e) {
  let t;
  let r;
  let {
    workspace,
    isSelected,
    isHovered,
    onChildFocusChange
  } = e;
  let [c, u] = useState(!1);
  let m = useSelector(e => e.currentUserOrgId);
  let _ = _$$aq();
  let p = workspace.colorConfig?.colors ?? [];
  let f = e.isMainWorkspace ? p[0] : void 0;
  let g = useAtomWithSubscription(_$$aN(workspace.id));
  let h = _$$Y8(workspace.id, FEntityType.WORKSPACE, m);
  let x = useMemo(() => h.status === 'loaded' && void 0 !== h.favorite, [h]);
  f && (f = function (e, t, r) {
    try {
      let a = parseColor(t);
      let s = isColorDarkByLuminance(a);
      let i = _$$oN(t, !s, s);
      r && i !== t && trackEventAnalytics('workspace_background_color_adjusted_for_accessibility', {
        workspace_id: e,
        original_background_color: t,
        adjusted_background_color: i
      });
      return i;
    } catch (e) {
      console.error(e);
    }
    return t;
  }(workspace.id, f, _()));
  let b = useDispatch();
  let v = useCallback((e, t, r) => {
    if (workspace) {
      let a = {
        workspace: {
          id: workspace.id,
          name: workspace.name ?? '',
          imgUrl: workspace.imgUrl
        },
        entrypoint: 'workspace_tile',
        sectionId: r,
        favoriteId: t
      };
      e ? b(ZW(a)) : b($$if(a));
    }
  }, [b, workspace]);
  f && (isColorDarkByLuminance(f) ? (t = 'org_page_view--workspaceTileTitleColorForDarkBackground--m6sFp', r = 'org_page_view--secondaryTextColorOnDarkBackground--7Ru-V') : (t = 'org_page_view--workspaceTileTitleColorForLightBackground---zSTU', r = 'org_page_view--secondaryTextColorOnLightBackground--68byE'));
  let y = jsx(z6, {
    entity: workspace,
    size: 40
  });
  let w = useMemo(() => void 0 !== e.teamCount ? renderI18nText('org_view.license_group.team_count', {
    teamCount: e.teamCount
  }) : g.status !== 'loaded' ? jsx(Wi, {
    className: cssBuilderInstance.w64.$,
    dataTestId: 'workspace-tile-teams-loading-text'
  }) : renderI18nText('org_view.license_group.team_count', {
    teamCount: g.data
  }), [e.teamCount, g]);
  let j = jsxs('div', {
    className: U()(cssBuilderInstance.flex.flexRow.itemsCenter.$, r),
    children: [renderI18nText('org_view.license_group.member_count', {
      memberCount: workspace.memberCount.data ?? 0
    }), jsx('span', {
      children: '\xA0\xB7\xA0'
    }), w]
  });
  let T = jsx(_$$H7, {
    setFavorite: v,
    favoriteType: FEntityType.WORKSPACE,
    resourceId: workspace.id,
    orgId: m
  });
  let E = workspace.orgAccess === FAccessLevelType.SECRET ? jsx('div', {
    'className': cssBuilderInstance.ml4.$,
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': getI18nString('workspace_table.secret_workspace_lock_tooltip'),
    'data-tooltip-subtext': getI18nString('workspace_table.secret_workspace_lock_tooltip_subtext'),
    'data-tooltip-timeout-delay': 500,
    'data-tooltip-max-width': 300,
    'children': jsx(In, {
      icon: 'lock-16'
    })
  }) : null;
  let C = isHovered || isSelected || c || x;
  return jsx(_$$a12, {
    backgroundColor: f,
    canView: !0,
    footerLeft: j,
    handleBlur: () => {
      u(!1);
      onChildFocusChange();
    },
    handleFocus: () => {
      u(!0);
      onChildFocusChange();
    },
    headerLeft: y,
    headerRight: T,
    isCardActive: C,
    isInItemsView: !0,
    isSelected,
    name: jsx('span', {
      className: t,
      children: workspace.name
    }),
    titleSubtitleRight: E
  });
}
function fR() {
  let e = useDispatch();
  let t = selectPermissionsState();
  let r = useCurrentUserOrgId();
  let n = Au(r);
  let {
    canCreateTeam
  } = LM(r ? {
    id: r
  } : null, null);
  let d = function (e, {
    description: t,
    level: r = LogLevelStr.INFO,
    start: a = !0,
    context: i
  } = {}) {
    let n = useRef(observabilityClient.createVital(e, {
      level: r,
      description: t,
      context: i
    }));
    useEffect(() => {
      if (e.includes(' ')) throw new Error(`Vital name cannot include spaces: ${e}`);
      a && n.current.start();
    }, [a, e]);
    return n.current;
  }('OrgWorkspacesView.Load');
  let c = useAtomWithSubscription(wT);
  let {
    workspaceTeamCounts,
    unassignedTeams
  } = useMemo(() => {
    let e = (c.data || []).filter(e => _$$ox3(e, t));
    return {
      workspaceTeamCounts: ZM(e),
      unassignedTeams: e.filter(e => e.workspace_id === null || void 0 === e.workspace_id)
    };
  }, [t, c]);
  let _ = useSubscription(WorkspacesDirectoryView, {
    orgId: r
  });
  let f = c.status !== 'loaded';
  let {
    currentWorkspace,
    otherWorkspaces
  } = useMemo(() => {
    let e = _.transform(e => {
      let t = e.org?.workspaces ?? [];
      sortByPropertyWithOptions(t, 'name');
      let r = t.find(e => e.id === n.data);
      let a = t.filter(e => e.id !== r?.id);
      (unassignedTeams.length > 0 || f) && a.push(UNASSIGNED);
      return {
        currentWorkspace: r,
        otherWorkspaces: a
      };
    });
    return e.status === 'loaded' ? e.data : {
      currentWorkspace: null,
      otherWorkspaces: []
    };
  }, [_, n, unassignedTeams, f]);
  useEffect(() => {
    d.addContext({
      currentWorkspaceId: currentWorkspace?.id,
      workspaceQuery: n?.data
    });
    _.status === 'loaded' && d.stop();
  }, [currentWorkspace, _, d, n.data]);
  let b = useCallback(() => {
    e(showModalHandler({
      type: Uc,
      data: {}
    }));
  }, [e]);
  let v = !getFeatureFlags().all_workspaces_incremental_load_teams;
  let y = _.status !== 'loaded' || v && f;
  let w = _.transform(e => e.org?.workspaces?.length ?? null).unwrapOr(null);
  if (kF('OrgAllWorkspaces'), WX({
    markName: 'MainBodyContent',
    isLoaded: !y,
    contextArgs: {
      numWorkspaces: w
    }
  }), y) {
    return jsx(_$$X2, {
      isLoading: !0
    });
  }
  let j = currentWorkspace && jsxs(Fragment, {
    children: [jsx('div', {
      className: 'x1tudf5h',
      children: jsx(TextWithTruncation, {
        color: 'secondary',
        fontSize: 11,
        children: renderI18nText('org_view.your_workspace')
      })
    }), jsx(fA, {
      items: [currentWorkspace],
      isMainWorkspace: !0,
      workspaceTeamCounts,
      waitForOrgTeamsToLoad: v,
      unassignedTeams,
      focusOnLoad: !0
    })]
  });
  return jsxs(Fragment, {
    children: [j, currentWorkspace && jsx('div', {
      className: 'x1tudf5h',
      children: jsx(TextWithTruncation, {
        color: 'secondary',
        fontSize: 11,
        children: renderI18nText('org_view.other_workspaces')
      })
    }), otherWorkspaces.length === 0 ? jsx(_$$C5, {
      onCreateTeam: canCreateTeam ? b : void 0
    }) : jsx(fA, {
      items: otherWorkspaces,
      isMainWorkspace: !1,
      workspaceTeamCounts,
      waitForOrgTeamsToLoad: v,
      unassignedTeams,
      focusOnLoad: !currentWorkspace
    })]
  });
}
function fA({
  items: e,
  isMainWorkspace: t,
  waitForOrgTeamsToLoad: r,
  workspaceTeamCounts: i,
  unassignedTeams: n,
  focusOnLoad: o
}) {
  let {
    showing,
    show,
    data
  } = BK('WORKSPACE_CONTEXT_MENU');
  let u = _$$$6();
  let m = useCallback(e => e === UNASSIGNED ? getI18nString('org_view.license_group.unassigned_tile.name') : e.name, []);
  let _ = useCallback((e, t) => {
    u(e === UNASSIGNED ? null : e.id, t);
  }, [u]);
  let p = useCallback((e, t) => {
    let r = e[0];
    r !== UNASSIGNED && show({
      data: {
        workspace: r,
        targetRect: {
          top: t.clientY,
          right: t.clientX,
          bottom: t.clientY,
          left: t.clientX,
          width: 1,
          height: 1
        }
      }
    });
  }, [show]);
  let f = useMemo(() => ({
    tileBorderRadius: 16,
    nestedFocus: !1,
    containerStyle: fO.grid,
    renderTile: (e, s, {
      isSelected: o,
      isHovered: l
    }) => e === UNASSIGNED ? jsx(fI, {
      isSelected: o,
      isHovered: l,
      unassignedTeams: r ? n : void 0
    }) : jsx(fk, {
      workspace: e,
      teamCount: r ? i[e.id] ?? 0 : void 0,
      isSelected: o,
      isHovered: l,
      isMainWorkspace: t,
      onChildFocusChange: s
    })
  }), [t, n, i, r]);
  return jsxs(Fragment, {
    children: [jsx(_$$A10, {
      viewType: ViewMode.GRID,
      isDraggable: !1,
      items: e,
      multiselectDisabled: !0,
      getAriaLabel: m,
      gridViewProps: f,
      handleOpenItem: _,
      handleContextMenu: p,
      doNotFocusOnLoad: !o
    }), showing && jsx(fw, {
      workspace: data.workspace,
      isDropdownOpen: showing,
      targetRect: data.targetRect
    })]
  });
}
let fO = {
  grid: {
    paddingTop: 'x1p5oq8j',
    paddingBottom: 'x1gan7if',
    paddingLeft: 'x1tudf5h',
    paddingRight: 'x1m2p0i2',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    gridTemplateColumns: 'x192fo39',
    $$css: !0
  }
};
function fF(e) {
  let t = useSelector(t => t.orgById[e.orgId]);
  let r = useDispatch();
  let n = useEnterpriseOrgDirectoryEnabled(e.orgId);
  let o = useCurrentPlanUser('OrgPageView');
  let l = useIsOrgMemberOrAdminUser(o);
  let d = useIsOrgGuestUser(o);
  useEffect(() => {
    l.unwrapOr(!1) && (r(_$$Jt2({
      includeMemberCount: !0,
      includeTopMembers: !1,
      includeProjectCount: !0
    })), r(Pg({
      orgId: e.orgId
    })));
  }, [l, e.orgId, r]);
  let c = null;
  switch (e.selectedTab) {
    case _$$X.WIDGETS:
      c = jsx(_$$x7, {});
      break;
    case _$$X.PLUGINS:
      c = jsx(_$$C4, {});
      break;
    case _$$X.YOUR_TEAMS:
      c = jsx(fP, {});
      break;
    case _$$X.CONNECTED_PROJECTS:
      c = jsx(fn, {});
      break;
    case _$$X.HOME:
    case _$$X.FONTS:
    case _$$X.LIBRARIES:
      c = n.status === 'loading' ? jsx(_$$X2, {
        isLoading: !0
      }) : n.data ? jsx(fR, {}) : jsx(fL, {});
  }
  let u = null;
  d.unwrapOr(!1) ? u = jsx(fg, {
    org: t
  }) : n.status === 'loading' ? u = jsx(f_, {
    orgStats: null,
    org: t
  }) : n.data ? u = jsx(fp, {
    org: t
  }) : n.data || (u = jsx(ff, {
    org: t
  }));
  let m = jsx(fv, {
    selectedTab: e.selectedTab
  });
  return jsx(_$$r4, {
    banner: jsx(fr, {}),
    viewbar: m,
    content: c,
    metaContent: u
  });
}
function fP() {
  let e = iB({
    workspaceId: null,
    onlyJoinedTeams: !0
  });
  return jsx(iD, {
    orgTeamsQuery: e,
    workspaceId: null
  });
}
function fL() {
  let e = iB({
    workspaceId: null,
    onlyJoinedTeams: !1
  });
  return jsx(iD, {
    orgTeamsQuery: e,
    workspaceId: null
  });
}
function fD() {
  let e = useDispatch();
  let t = selectUser();
  return jsx(_$$K3, {
    action: {
      kind: _$$A9.BUTTON,
      key: iq.VIEW_COMMUNITY_PROFILE,
      onClick: () => {
        e(selectViewAction({
          view: 'communityHub',
          subView: 'handle',
          handle: t.community_profile_handle
        }));
      },
      displayText: getI18nString('internal_profile.view_community_profile'),
      styleClass: cssBuilderInstance.colorText.$
    }
  });
}
function fG(e) {
  let t = useCurrentPublicPlan('FileCreationPillButton');
  let r = useIsStarterPlan(t).unwrapOr(!1);
  let s = getDisabledCreationButtonReason().unwrapOr(null);
  let i = '';
  r && !e.isLoading && e.showComingSoon ? i = getI18nString('file_browser.creation_buttons.coming_soon') : e.isDisabled && !e.isLoading && s && (i = s);
  return jsx(fV, {
    ...e,
    tooltipText: i
  });
}
function fV(e) {
  let t = e.isDisabled || e.isLoading;
  let r = _$$O5();
  return jsx(setupThemeContext, {
    brand: e.brand,
    children: jsx(ButtonPrimitive, {
      ..._$$xk(fz.button, e.brand === 'bake-filebrowser' && fz.buttonFigmake, t && fz.buttonDisabled),
      'onClick': e.onClick,
      'data-testid': e.isLoading ? void 0 : e.dataTestId,
      'disabled': t,
      'data-onboarding-key': e.dataOnboardingKey,
      'data-tooltip': e.tooltipText,
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip-timeout-delay': 50,
      'children': jsx(_$$x, {
        loaded: !e.isLoading,
        loadingSkeletonElement: jsx('div', {
          className: 'x1yjdb4r',
          children: jsx(Qp, {
            animationType: JR.LIGHT_SHIMMER,
            className: 'x10w6t97'
          })
        }),
        showElementBeforeLoaded: !0,
        children: jsxs('div', {
          className: 'x1y1aw1k xwib8y2 xyfqnmn xnm25rq x78zum5 x6s0dn4 x167g77z',
          children: [jsx('div', {
            ..._$$xk(!t && fz.iconContainer, r ? fz.fileIconDisplayToggle : fz.fileIconDisplayToggle1x),
            'data-testid': 'file-icon',
            'children': e.icon
          }), jsx('div', {
            ..._$$xk(!t && fz.iconContainer, r ? fz.plusIconDisplayToggle : fz.plusIconDisplayToggle1x),
            'data-testid': 'plus-icon',
            'children': jsx(_$$J7, {})
          }), jsx('span', {
            ..._$$xk(fz.text),
            children: e.title
          })]
        })
      })
    })
  });
}
Tj.border;
let fz = {
  button: {
    '--x9h04y5': 'x11l4ivk xrbdz5j xp8tnzm x1c7hbig x19ojyqu x1x2d8cx',
    '--x1y950bd': 'x17eetdp x1jys9c5 x1cjeetj x1mqyn81 x6g8fao x1nzpo8l',
    '--x5hmtyg': 'x1ulchi7 x12xxy4o x1bfvipf xxi3osj xnurnk3 xkhlbt9',
    '--color-icon': 'xn0whsw',
    'flexShrink': 'x2lah0s',
    'borderRadius': 'x1d36bvo',
    'borderStartStartRadius': null,
    'borderStartEndRadius': null,
    'borderEndStartRadius': null,
    'borderEndEndRadius': null,
    'borderTopLeftRadius': null,
    'borderTopRightRadius': null,
    'borderBottomLeftRadius': null,
    'borderBottomRightRadius': null,
    'backgroundColor': 'x1v8gsql x17c7w1w x1tt564c x8ge37t',
    'boxShadow': 'x6bkol7 xrhlwir xsfrc4e x129mn88',
    'overflow': 'xb3r6kr',
    'overflowX': null,
    'overflowY': null,
    '$$css': !0
  },
  buttonFigmake: {
    '--color-icon': 'xwa2v1s',
    '$$css': !0
  },
  buttonDisabled: {
    '--color-icon': 'xz8z4lq',
    '--color-text': 'x15kbib2',
    'backgroundColor': 'x1yjdb4r',
    'boxShadow': 'x6bkol7 x1icplyp',
    '$$css': !0
  },
  text: {
    ..._$$g3.textBodyMedium,
    color: 'xiuzu7u',
    $$css: !0
  },
  iconContainer: {
    backgroundColor: 'xu5wzci',
    borderRadius: 'x192jxwq',
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
  fileIconDisplayToggle: {
    display: 'x1wbuj8u',
    $$css: !0
  },
  fileIconDisplayToggle1x: {
    display: 'x1h4d7b8',
    alignItems: 'x6s0dn4',
    justifyContent: 'xl56j7k',
    width: 'x1a00udw',
    height: 'xx3o462',
    $$css: !0
  },
  plusIconDisplayToggle: {
    display: 'x1dtuv8b',
    $$css: !0
  },
  plusIconDisplayToggle1x: {
    display: 'x1dtuv8b',
    width: 'x1a00udw',
    height: 'xx3o462',
    $$css: !0
  }
};
function fH({
  isDisabled: e,
  isLoading: t,
  newFileFrom: r
}) {
  let s = _$$$2({
    isDraftsFolder: !0,
    editorType: FFileType.COOPER,
    newFileFrom: r,
    triggerElement: 'pill',
    contextClicked: 'recents_file_creation_thumbnails_created'
  });
  return jsx(fG, {
    title: getI18nString('file_browser.creation_buttons.marketing_asset'),
    brand: 'cooper',
    dataTestId: 'new-cooper-file-button',
    icon: jsx(_$$u8, {}),
    isDisabled: e,
    isLoading: t,
    onClick: s
  });
}
function fY({
  isDisabled: e,
  isLoading: t,
  newFileFrom: r
}) {
  let s = _$$$2({
    isDraftsFolder: !0,
    editorType: FFileType.DESIGN,
    newFileFrom: r,
    triggerElement: 'pill',
    contextClicked: 'recents_file_creation_thumbnails_created'
  });
  return jsx(fG, {
    title: getI18nString('file_browser.creation_buttons.design'),
    brand: 'design',
    dataTestId: 'new-design-file-button',
    icon: jsx(_$$z11, {}),
    isDisabled: e,
    isLoading: t,
    onClick: s
  });
}
function fq({
  isDisabled: e,
  isLoading: t,
  newFileFrom: r
}) {
  let s = _$$$2({
    isDraftsFolder: !0,
    editorType: FFileType.WHITEBOARD,
    newFileFrom: r,
    triggerElement: 'pill',
    contextClicked: 'recents_file_creation_thumbnails_created'
  });
  return jsx(fG, {
    title: getI18nString('file_browser.creation_buttons.figjam'),
    brand: 'whiteboard',
    dataTestId: 'new-whiteboard-file-button',
    icon: jsx(_$$D5, {}),
    isDisabled: e,
    isLoading: t,
    onClick: s
  });
}
function fZ({
  isDisabled: e,
  isLoading: t,
  newFileFrom: r
}) {
  let s = _$$$2({
    isDraftsFolder: !0,
    editorType: FFileType.FIGMAKE,
    newFileFrom: r,
    triggerElement: 'pill',
    contextClicked: 'recents_file_creation_thumbnails_created'
  });
  return jsx(fG, {
    title: getI18nString('file_browser.creation_buttons.figmake'),
    brand: 'bake-filebrowser',
    dataOnboardingKey: _$$O4,
    dataTestId: 'new-figmake-file-button',
    icon: jsx(_$$Z3, {}),
    isDisabled: e,
    isLoading: t,
    onClick: s,
    showComingSoon: _$$W6()
  });
}
function f1(e) {
  return jsx(ButtonPrimitive, {
    'className': 'x2lah0s x1d36bvo xb3r6kr xbzrb6o x1v8gsql x13bsb82 xpzxyvc x1aqsfbg x6bkol7 x622810 xsfrc4e x13nvs6n',
    'onClick': e.onClick,
    'data-testid': e.isLoading ? void 0 : e.dataTestId,
    'data-onboarding-key': e.dataOnboardingKey,
    'data-tooltip': e.tooltipText,
    'data-tooltip-type': KindEnum.TEXT,
    'children': jsx(_$$x, {
      loaded: !e.isLoading,
      loadingSkeletonElement: jsx('div', {
        className: 'x1yjdb4r',
        children: jsx(Qp, {
          animationType: JR.LIGHT_SHIMMER,
          className: 'x10w6t97'
        })
      }),
      showElementBeforeLoaded: !0,
      children: jsx('div', {
        className: 'xfawy5m',
        children: e.icon
      })
    })
  });
}
function f4({
  isLoading: e
}) {
  let t = useDispatch();
  return jsx(f1, {
    dataTestId: 'file-import-button',
    icon: jsx(_$$R1, {}),
    isLoading: e,
    onClick: () => {
      t(_$$L7());
    },
    tooltipText: getI18nString('file_browser.creation_buttons.import')
  });
}
Tj.border;
function f5({
  isDisabled: e,
  isLoading: t,
  newFileFrom: r
}) {
  let s = _$$$2({
    isDraftsFolder: !0,
    editorType: FFileType.SITES,
    newFileFrom: r,
    triggerElement: 'pill',
    contextClicked: 'recents_file_creation_thumbnails_created'
  });
  return jsx(fG, {
    title: getI18nString('file_browser.creation_buttons.sites'),
    brand: 'seascape',
    dataTestId: `new-${SITES_STRING}-file-button`,
    icon: jsx(_$$$8, {}),
    isDisabled: e,
    isLoading: t,
    onClick: s,
    showComingSoon: !getFeatureFlags().sts_starter_enabled
  });
}
function f6({
  isDisabled: e,
  isLoading: t,
  newFileFrom: r
}) {
  let s = _$$$2({
    isDraftsFolder: !0,
    editorType: FFileType.SLIDES,
    newFileFrom: r,
    triggerElement: 'pill',
    contextClicked: 'recents_file_creation_thumbnails_created'
  });
  return jsx(fG, {
    title: getI18nString('file_browser.creation_buttons.slide_deck'),
    brand: 'piper',
    dataTestId: 'new-slides-file-button',
    icon: jsx(_$$T7, {}),
    isDisabled: e,
    isLoading: t,
    onClick: s
  });
}
function f3({
  newFileFrom: e
}) {
  let t = useSelector(e => e.user?.drafts_folder_id);
  let {
    data,
    status
  } = useProjectFileCreationPermissions(t);
  let n = _$$h7(data);
  let o = status === 'loading';
  let l = n.map(({
    editorType: t,
    canCreate: r
  }) => {
    let s = !r;
    switch (t) {
      case FFileType.DESIGN:
        return jsx(fY, {
          isDisabled: s,
          isLoading: o,
          newFileFrom: e
        }, 'design');
      case FFileType.WHITEBOARD:
        return jsx(fq, {
          isDisabled: s,
          isLoading: o,
          newFileFrom: e
        }, 'whiteboard');
      case FFileType.SLIDES:
        return jsx(f6, {
          isDisabled: s,
          isLoading: o,
          newFileFrom: e
        }, 'slides');
      case FFileType.SITES:
        return isSitesFeatureEnabled() ? jsx(f5, {
          isDisabled: s,
          isLoading: o,
          newFileFrom: e
        }, 'seascape') : null;
      case FFileType.COOPER:
        return jsx(fH, {
          isDisabled: s,
          isLoading: o,
          newFileFrom: e
        }, 'cooper');
      case FFileType.FIGMAKE:
        return jsx(fZ, {
          isDisabled: s,
          isLoading: o,
          newFileFrom: e
        }, 'figmake');
      default:
        throwTypeError(t);
    }
  }).filter(Boolean);
  l.push(jsx(f4, {
    isLoading: o
  }, 'import'));
  WX({
    markName: 'FileCreateEntrypoint',
    isLoaded: status === 'loaded'
  });
  return jsx(Fragment, {
    children: l
  });
}
function f7({
  from: e
}) {
  let t = useRef(null);
  let r = useRef(null);
  let [i, n] = useState(!1);
  useLayoutEffect(() => {
    let e = r.current;
    let a = t.current;
    if (!e || !a) return;
    let s = () => {
      n(a.offsetWidth < e.offsetWidth);
    };
    s();
    let i = new ResizeObserver(s);
    i.observe(t.current);
    return () => i.disconnect();
  }, []);
  return jsxs('div', {
    className: 'xh8yej3 x9f619 x78zum5 x7v6yn8 xz9dl7a xsag5q8',
    ref: t,
    children: [jsx('div', {
      ref: r,
      ..._$$xk(f9.contentContainer, i && f9.hide),
      children: jsx(f3, {
        newFileFrom: e
      })
    }), i && jsx(_$$R7, {
      newFileFrom: e,
      dataOnboardingKey: _$$O4
    }), jsx(jS, {
      newFileFrom: e
    })]
  });
}
let f9 = {
  contentContainer: {
    display: 'x3nfvp2',
    gap: 'x167g77z',
    rowGap: null,
    columnGap: null,
    flexShrink: 'x2lah0s',
    $$css: !0
  },
  hide: {
    visibility: 'xlshs6z',
    $$css: !0
  }
};
let gt = atom(!1);
let ga = gr;
let gs = [ResourceTypeEnum.FIGMAKE_TEMPLATE, ResourceTypeEnum.SITE_TEMPLATE, ResourceTypeEnum.COOPER_TEMPLATE_FILE, ResourceTypeEnum.DESIGN_TEMPLATE, ResourceTypeEnum.SLIDE_TEMPLATE, ResourceTypeEnum.FIGJAM_TEMPLATE];
function gi() {
  let e = useSelector(e => e.user?.drafts_folder_id) ?? null;
  let {
    data
  } = useProjectFileCreationPermissions(e);
  return useMemo(() => gs.filter(e => {
    let r = mapVtToFileType(e);
    return r && data && canCreateFileType(data, r);
  }), [data]);
}
function g_({
  buttonProps: e,
  image: t,
  title: r,
  author: s
}) {
  return jsxs(ButtonPrimitive, {
    className: 'home_shelf_resource_tile--resourceTileButton--meEFU',
    ...e,
    children: [jsxs('div', {
      className: 'home_shelf_resource_tile--homeShelfResourceTile--1rgji',
      children: [jsx('div', {
        className: 'home_shelf_resource_tile--homeShelfTileImageContainer--3fiyP',
        children: t
      }), jsx('div', {
        className: 'home_shelf_resource_tile--title--O4Tfl',
        children: r
      })]
    }), s]
  });
}
function gp() {
  return jsx(g_, {
    buttonProps: {
      disabled: !0
    },
    image: jsx(Qp, {
      className: 'home_shelf_resource_tile--loadingImage--I9sFG home_shelf_resource_tile--loadingColor--AlSS5',
      animationType: JR.NO_SHIMMER
    }),
    title: jsx(Wi, {
      className: 'home_shelf_resource_tile--loadingTitleText--8Q0Xx home_shelf_resource_tile--title--O4Tfl home_shelf_resource_tile--loadingColor--AlSS5',
      animationType: JR.NO_SHIMMER
    }),
    author: jsx(Wi, {
      className: 'home_shelf_resource_tile--loadingAuthor--yKCwm home_shelf_resource_tile--author--m5FxW home_shelf_resource_tile--loadingColor--AlSS5',
      animationType: JR.NO_SHIMMER
    })
  });
}
function gf({
  resource: e,
  isSelected: t,
  onFocus: r
}) {
  let n = useDispatch();
  let o = Lj(e);
  let l = useCallback(() => {
    FM(n, e, {
      openInNewTab: !1,
      shouldUpdateUrl: !1
    });
    kg(e.resource_type, e.id);
  }, [n, e]);
  let d = useRef(null);
  useEffect(() => {
    t && d.current?.focus();
  }, [t]);
  let c = useMemo(() => ({
    'onClick': l,
    'aria-label': e.name,
    'aria-current': t,
    'htmlAttributes': {
      onFocus: r
    },
    'ref': d
  }), [l, t, e.name, r, d]);
  return jsx(g_, {
    buttonProps: c,
    image: jsxs(Fragment, {
      children: [jsx(_$$i7, {
        resource: e,
        isSelected: t
      }), jsx('div', {
        className: 'home_shelf_resource_tile--tileEditorIcon--QE-1U',
        children: jsx(_$$dn, {
          editorType: e.editor_types[0]
        })
      })]
    }),
    title: jsx('div', {
      className: 'home_shelf_resource_tile--titleText--NFhch',
      children: e.name
    }),
    author: jsxs('div', {
      className: 'home_shelf_resource_tile--subtitle--VMBH1',
      children: [jsx('span', {
        className: 'home_shelf_resource_tile--author--m5FxW',
        children: renderI18nText('community.resource_tiles.by_author', {
          author: o
        })
      }), '\xA0\xA0\xB7\xA0\xA0', jsxs('div', {
        className: 'home_shelf_resource_tile--metrics--riQEm',
        children: [jsx(_$$cz, {
          currentUserLiked: !1,
          likeCount: e.like_count,
          disableFontStyling: !0
        }), jsx(_$$i6, {
          usageCount: getResourceUserCount(e),
          disableFontStyling: !0
        })]
      })]
    })
  });
}
let gg = 211 / 244;
function gb() {
  let e = useResourceRouteParams();
  let t = useResourceFuid();
  let r = e && t ? new ResourceHubHomeRouteClass({
    ...e,
    tab: PublishSourceType.COMMUNITY
  }, t).href : '';
  return jsxs(LinkPrimitive, {
    'href': r,
    'onClick': a => {
      q5();
      a.preventDefault();
      r ? customHistory.push(r) : reportError(_$$e.COMMUNITY, new Error('NavigationTile: communityTabLink is empty'), {
        extra: {
          sharedRouteParams: e,
          sharedSearchParams: t
        }
      });
    },
    'className': 'xh8yej3 x5yr21d x78zum5 xdt5ytf x6s0dn4 x1nhvcw1 x1v2ro7d x1ypdohk xw4t3mb x1ocegsa xl61zd4 x1nl1fmu xln84v9 xgf1b7j x85jtft',
    'aria-label': getI18nString('community.home_shelf.see_more_on_community'),
    'children': [jsxs('div', {
      className: 'x1lliihq x1n2onr6 x1vjfegm xh8yej3 x1mxnbhz x176lpz5 xb3r6kr xdr6sbx x1klh5xi',
      children: [jsx(_$$oW, {
        className: 'x1vjfegm xxcbz4w x17muf8i x10l6tqk xm6i5cn x2e2xj7 x19y5rnk xbngzmg xgk9eko',
        src: buildUploadUrl('2f1ddf99a93705a145b3e9258c29994c2bcc3296'),
        alt: ''
      }), jsx(_$$oW, {
        className: 'xhtitgo xzc2ltc xjndpiq x10l6tqk xm6i5cn x2e2xj7 x19y5rnk xbngzmg xgk9eko',
        src: buildUploadUrl('3b5e7024cc8ec5912d46ce4c4f555f79de8afa22'),
        alt: ''
      }), jsx(_$$oW, {
        className: 'xzkaem6 x156by65 x1366x3a x10l6tqk xm6i5cn x2e2xj7 x19y5rnk xbngzmg xgk9eko',
        src: buildUploadUrl('1922e9623fd798bcb563e1f4e9ae105b54d904b4'),
        alt: ''
      }), jsx(SvgComponent, {
        svg: _$$A26,
        className: 'x10l6tqk xoegz02 xh8yej3 xqmqy1e xb9t1mx',
        svgWidth: '100%',
        svgHeight: 'auto'
      })]
    }), jsx('span', {
      ..._$$xk(gv.linkText),
      children: getI18nString('community.home_shelf.see_more_on_community')
    })]
  });
}
let gv = {
  linkText: {
    ..._$$g3.textBodyMediumStrong,
    width: 'xh8yej3',
    textAlign: 'xdpxx8g',
    color: 'x1quhyk7',
    $$css: !0
  }
};
function gy() {
  let e = useDispatch();
  let [t, r] = useState([]);
  let [{
    data: n,
    status: o,
    errors: l
  }] = setupResourceAtomHandler(_$$a0.getHomeShelfContent({
    seenResourceIds: t
  }));
  let d = function () {
    let e = useRef(null);
    let [t, r] = useState(0);
    let [a, i] = useState(0);
    let [n, o] = useState(0);
    let l = useCallback(e => {
      let t = e - 48;
      let a = Math.floor((t - 24 - 244 * gg) / 268);
      if (a < 1) {
        r(0);
        i(0);
        o(0);
        return;
      }
      let s = Math.floor((t - 24 - 24 * (a = Math.min(a, 16))) / (a + gg));
      let n = Math.floor(s * a + 24 * (a - 1));
      let l = Math.floor(s * gg);
      r(a);
      i(n);
      o(l);
    }, []);
    useLayoutEffect(() => {
      let t = e.current;
      if (!t) return;
      l(t.clientWidth);
      let r = new ResizeObserver(e => {
        l(e[0]?.target.clientWidth ?? 0);
      });
      r.observe(e.current);
      return () => r.disconnect();
    }, [e, l]);
    return useMemo(() => ({
      tileRowWidth: a,
      navigationSectionWidth: n,
      numberOfTiles: t,
      sizeRef: e
    }), [a, n, t, e]);
  }();
  let c = function (e, t) {
    let r = gi();
    return useMemo(() => {
      let a = r.slice();
      let s = ga()(e, e => e.resource_type);
      let i = [];
      for (let r = 0; r < e.length + a.length && i.length !== t && a.length !== 0; r++) {
        let e = (s[a[r % a.length]] ?? []).shift();
        e ? i.push(e) : a.splice(r % a.length, 1);
      }
      return i;
    }, [e, t, r]);
  }(n?.data.meta.recommended_resources ?? [], d.numberOfTiles);
  let {
    trackRejectedResources
  } = function ({
    visibleResources: e
  }) {
    let {
      trackResourceImpression
    } = GS();
    let {
      properties
    } = useTracking();
    useEffect(() => {
      e.forEach(e => {
        trackResourceImpression(e);
      });
    }, [trackResourceImpression, e]);
    return {
      trackRejectedResources: useCallback(e => {
        trackEventAnalytics('community_home_shelf_resources_rejected', {
          rejectedResourceIds: e.join(),
          ...properties
        });
      }, [properties])
    };
  }({
    visibleResources: c
  });
  let m = useCallback(() => {
    let t = c.map(e => e.id);
    r(t);
    trackRejectedResources(t);
    e(postUserFlag({
      refreshed_community_home_shelf_v2_recommendations: !0
    }));
  }, [trackRejectedResources, c, e]);
  if (o === 'errors') {
    reportError(_$$e.COMMUNITY, l);
    return null;
  }
  let _ = d.numberOfTiles < 2;
  return jsx('div', {
    ref: d.sizeRef,
    className: 'x1p4momh',
    children: !_ && jsxs('div', {
      className: 'xhv1u6h xuwania x1mxnbhz x1sjmt1f',
      children: [jsxs('div', {
        className: 'x78zum5 x1qughib x6s0dn4 xp41m2r xettwda',
        children: [jsx('div', {
          ..._$$xk(gE.homeShelfTitle),
          children: getI18nString('community.home_shelf.title')
        }), jsxs('div', {
          className: 'x78zum5 x1n2onr6 xncym2f x167g77z x6s0dn4',
          children: [jsx(IconButton, {
            'aria-label': getI18nString('community.home_shelf.refresh_label'),
            'onClick': m,
            'disabled': o === 'loading',
            'children': jsx(_$$_9, {})
          }), jsx(IconButton, {
            'aria-label': getI18nString('community.home_shelf.dismiss_label'),
            'onClick': () => e(postUserFlag({
              dismissed_community_home_shelf_v2_recommendations: !0
            })),
            'children': jsx(_$$f7, {})
          })]
        })]
      }), jsx(gj, {
        sizingInfo: d,
        resources: c,
        isLoading: o === 'loading'
      })]
    })
  });
}
function gw() {
  return jsx('div', {
    className: 'x1cqoux5 xeuugli',
    children: jsx('div', {
      className: 'x186iv6y xh8yej3 x176lpz5 x19y5rnk xo1570h'
    })
  });
}
function gj({
  resources: e,
  isLoading: t,
  sizingInfo: r
}) {
  let i = useRef(null);
  let [n, o] = useState(null);
  let [l, d] = useState(null);
  let c = useMemo(() => !t && r.numberOfTiles > e.length ? range(r.numberOfTiles - e.length).map(e => jsx(gw, {}, e)) : [], [r.numberOfTiles, e.length, t]);
  let u = t ? range(r.numberOfTiles).map(e => createElement('div', {
    className: 'x1cqoux5 xeuugli',
    key: e
  }, jsx(gp, {}))) : e.map((e, t) => createElement('div', {
    className: 'x1cqoux5 xeuugli',
    key: e.id
  }, jsx(gf, {
    resource: e,
    isSelected: l === t,
    onFocus: () => {
      o(t);
      d(t);
    }
  })));
  return jsxs('div', {
    className: 'x78zum5 x1665zp3',
    children: [jsxs(_$$S0.div, {
      role: 'grid',
      tabIndex: 0,
      style: {
        width: r.tileRowWidth
      },
      className: 'x78zum5 x1665zp3 xh8yej3 x1qughib',
      onMouseDown: e => {
        e.preventDefault();
        e.stopPropagation();
      },
      onFocus: e => {
        e.target === i.current && l === null && (d(0), o(0));
      },
      onBlur: e => {
        e.relatedTarget && i.current?.contains(e.relatedTarget) || d(null);
      },
      ref: i,
      onKeyDown: t => {
        if (t.key === 'ArrowRight') {
          t.preventDefault();
          t.stopPropagation();
          let r = Math.min((n ?? 0) + 1, e.length - 1);
          o(r);
          d(r);
        } else if (t.key === 'ArrowLeft') {
          t.preventDefault();
          t.stopPropagation();
          let e = Math.max((n ?? 0) - 1, 0);
          o(e);
          d(e);
        }
      },
      children: [u, c]
    }), jsx('div', {
      className: 'x1lliihq x1i1rx1s x1hyhr7 xgcv3f'
    }), jsx('div', {
      style: {
        width: r.navigationSectionWidth
      },
      children: jsx(gb, {})
    })]
  });
}
function gT() {
  let e = useDispatch();
  return jsx(ErrorBoundaryCrash, {
    team: _$$e.COMMUNITY,
    boundaryKey: 'RecommendedResourcesShelf',
    fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
    onError: () => {
      e(VisualBellActions.enqueue({
        message: getI18nString('general.root_error_boundary_title'),
        type: 'react-error'
      }));
    },
    hasCustomWASMBuild: y4,
    children: jsx(TrackingProvider, {
      name: _$$e7.COMMUNITY_HOME_SHELF,
      children: jsx(gy, {})
    })
  });
}
let gE = {
  homeShelfContainer: {
    margin: 'x1p4momh',
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
  homeShelf: {
    margin: 'xhv1u6h',
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    padding: 'xuwania',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    borderRadius: 'x1mxnbhz',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    background: 'x1sjmt1f',
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    $$css: !0
  },
  homeShelfHeader: {
    display: 'x78zum5',
    justifyContent: 'x1qughib',
    alignItems: 'x6s0dn4',
    padding: 'xp41m2r',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    height: 'xettwda',
    $$css: !0
  },
  homeShelfHeaderActions: {
    display: 'x78zum5',
    position: 'x1n2onr6',
    left: 'xncym2f',
    insetInlineStart: null,
    insetInlineEnd: null,
    gap: 'x167g77z',
    rowGap: null,
    columnGap: null,
    alignItems: 'x6s0dn4',
    $$css: !0
  },
  homeShelfTitle: {
    color: 'x1akne3o',
    ..._$$g3.textHeadingSmall,
    $$css: !0
  },
  homeShelfTabContent: {
    display: 'x78zum5',
    gap: 'x1665zp3',
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  resourcesRow: {
    display: 'x78zum5',
    gap: 'x1665zp3',
    rowGap: null,
    columnGap: null,
    width: 'xh8yej3',
    justifyContent: 'x1qughib',
    $$css: !0
  },
  resourceWrapper: {
    flex: 'x1cqoux5',
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    minWidth: 'xeuugli',
    $$css: !0
  },
  homeShelfDivider: {
    display: 'x1lliihq',
    width: 'x1i1rx1s',
    marginBottom: 'x1hyhr7',
    borderLeft: 'xgcv3f',
    borderLeftWidth: null,
    borderInlineStartWidth: null,
    borderInlineEndWidth: null,
    borderLeftStyle: null,
    borderInlineStartStyle: null,
    borderInlineEndStyle: null,
    borderLeftColor: null,
    borderInlineStartColor: null,
    borderInlineEndColor: null,
    $$css: !0
  },
  resourceTilePlaceholder: {
    aspectRatio: 'x186iv6y',
    width: 'xh8yej3',
    backgroundColor: 'x176lpz5',
    borderRadius: 'x19y5rnk',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    border: 'xo1570h',
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
    $$css: !0
  }
};
var gI = (e => (e.SHOW_NOTHING = 'SHOW_NOTHING', e.SHOW_HOME_SHELF = 'SHOW_HOME_SHELF', e))(gI || {});
function gN() {
  let e = Xr(gt);
  let t = function () {
    let e = !!useSelector(e => e.userFlags).dismissed_community_home_shelf_v2_recommendations;
    let t = useSelector(({
      currentUserOrgId: e
    }) => e);
    let r = _$$aH();
    let a = useSelector(({
      orgById: e
    }) => e);
    let s = isTemplatePickerDisabled({
      orgById: a,
      currentUserOrgId: t
    });
    let n = useSelector(e => e.user?.drafts_folder_id) ?? null;
    let o = gi();
    let l = vt();
    let d = jn();
    return BrowserInfo.mobile || !n || l || d || e || s || o.length === 0 || !r() ? 'SHOW_NOTHING' : 'SHOW_HOME_SHELF';
  }();
  return (useEffect(() => {
    e(t === 'SHOW_HOME_SHELF');
  }, [e, t]), t === 'SHOW_NOTHING') ? null : jsx(gT, {});
}
let gR = {
  Banner(e) {
    let t = useDispatch();
    let r = e => {
      t(postUserFlag({
        [e]: !0
      }));
    };
    return jsx(TrackingProvider, {
      name: e.trackingContextName,
      properties: {
        severity: _$$c7.EVENT
      },
      children: jsx(UI3ConditionalWrapper, {
        children: jsxs('div', {
          ..._$$Ay2.props(gA.wrapper, e.size === 'large' && gA.wrapperLarge),
          style: {
            backgroundColor: e.bgColor
          },
          children: [jsx('div', {
            className: 'x78zum5 x6s0dn4 x1qughib x1iyjqo2 x1i71x30 x1rt4tut',
            children: e.children
          }), jsx(IconButton, {
            'aria-label': getI18nString('general.close'),
            'onClick': () => r(e.userFlag),
            'children': jsx(_$$A, {})
          })]
        })
      })
    });
  },
  BannerContent(e) {
    let t = e.copy ? jsx('p', {
      ..._$$Ay2.props(gA.copy, e.title ? gA.copyColorSecondary : gA.copyColorPrimary),
      children: e.copy
    }) : null;
    let r = e.beta ? jsx('div', {
      className: 'x1rg5ohu',
      children: jsx(_$$E0, {
        children: getI18nString('general.beta')
      })
    }) : null;
    return jsxs('div', {
      children: [e.title ? jsxs('div', {
        className: 'xxymvpz x1nfngrj',
        children: [jsx('h2', {
          ..._$$Ay2.props(gA.title, e.beta && gA.titleBadgeSpacing),
          children: e.title
        }), r]
      }) : null, t]
    });
  },
  useShouldShowBanner(e, t) {
    return !!(!selectUserFlag(e) && getFeatureFlags()[t]);
  }
};
Il.textBodyLargeFontFamily;
Il.textBodyMediumFontFamily;
Il.textBodyLargeFontSize;
Il.textBodyMediumFontSize;
Il.textBodyLargeFontWeight;
Il.textBodyMediumFontWeight;
Il.textBodyLargeLetterSpacing;
Il.textBodyMediumLetterSpacing;
Il.textBodyLargeLineHeight;
Il.textBodyMediumLineHeight;
let gA = {
  wrapper: {
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    justifyContent: 'x1qughib',
    padding: 'x1hcpp98 x8lzctc',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    gap: 'x1i71x30 x1rt4tut',
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  wrapperLarge: {
    padding: 'x1tphvzp x8lzctc',
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
  title: {
    fontFamily: 'x17hqfcz xcw2j8d',
    fontSize: 'xemv814 xi9x8a2',
    fontWeight: 'x1ma9mv9 x84028e',
    letterSpacing: 'x12638g3 x4lxrar',
    lineHeight: 'xyny9ap x16r6qr4',
    display: 'xt0psk2',
    color: 'x1akne3o',
    $$css: !0
  },
  titleBadgeSpacing: {
    marginRight: 'x17qaar8',
    marginInlineStart: null,
    marginInlineEnd: null,
    $$css: !0
  },
  copy: {
    fontFamily: 'x17hqfcz xcw2j8d',
    fontSize: 'xemv814 xi9x8a2',
    fontWeight: 'x10p5zqr',
    letterSpacing: 'x12638g3 x4lxrar',
    lineHeight: 'xyny9ap x16r6qr4',
    $$css: !0
  },
  copyColorSecondary: {
    color: 'x1n0bwc9',
    $$css: !0
  },
  copyColorPrimary: {
    color: 'x1akne3o',
    $$css: !0
  }
};
function gL({
  isoCode: e
}) {
  let t = _$$uk.includes(e || 'UNKNOWN');
  let r = getVisibleTheme() === 'dark';
  return jsx(gD, {
    trackingContextName: 'July Release Notes Banner',
    darkModeBgColor: r ? Tj.bgFigjamSecondary : Tj.bgSecondary,
    lightModeBgColor: r ? Tj.bgFigjamSecondary : Tj.bgSecondary,
    registrationLink: t ? 'http://events.figma.com/Jul-rel-notes-APAC-2025/PrB' : 'https://events.figma.com/jul25-rel-notes/PrB',
    copy: t ? getI18nString('banner.marketing_promo.july_release_notes.content_APAC') : getI18nString('banner.marketing_promo.july_release_notes.content')
  });
}
function gD({
  trackingContextName: e,
  darkModeBgColor: t,
  lightModeBgColor: r,
  copy: s,
  registrationLink: i
}) {
  let n = getVisibleTheme() === 'dark';
  return jsxs(gR.Banner, {
    trackingContextName: e,
    bgColor: n ? t : r,
    userFlag: 'seen_july_release_notes_banner_2025',
    size: 'small',
    children: [jsxs('div', {
      className: 'x78zum5 x1q0g3np x1excjyp x6s0dn4 x1nhvcw1',
      children: [jsx(gM, {}), jsx(gR.BannerContent, {
        copy: s
      })]
    }), jsx(setupThemeContext, {
      brand: 'bake-filebrowser',
      children: jsx(_$$pW, {
        href: i,
        size: 'lg',
        children: getI18nString('banner.marketing_promo.register')
      })
    })]
  });
}
function gM() {
  return jsxs('div', {
    className: 'x1q0g3np x6s0dn4 x1nfngrj x78zum5 xi0feg2',
    children: [jsx(SvgComponent, {
      svg: _$$A27,
      style: {
        fill: Tj.icon
      }
    }), jsx('h2', {
      className: 'xdpxx8g x1vzchgk x1ud3kw6 x1yuz8eb x1l13ptj xazcve0 xnq0rdo',
      children: getI18nString('banner.marketing_promo.release_notes.title')
    })]
  });
}
function gB() {
  let e = gR.useShouldShowBanner('seen_july_release_notes_banner_2025', 'marketing_promo_banner_july_release_notes');
  let t = gR.useShouldShowBanner('seen_figmake_launch_banner', 'marketing_promo_banner_figmake_launch');
  let r = getInitialOptions();
  return e ? jsx(gL, {
    isoCode: r.iso_code
  }) : t ? jsx(gU, {}) : null;
}
function gU() {
  let e = _$$$2({
    isDraftsFolder: !0,
    editorType: FFileType.FIGMAKE,
    newFileFrom: FileBrowserLocation.FIGMAKE_LAUNCH_BANNER,
    contextClicked: 'figmake_launch_banner_created'
  });
  let t = useSelector(e => e.user?.drafts_folder_id);
  let {
    data
  } = useProjectFileCreationPermissions(t);
  let s = _$$h7(data).find(e => e.editorType === FFileType.FIGMAKE);
  let n = _$$a13();
  let o = getDisabledCreationButtonReason().unwrapOr(null);
  if (!s) return null;
  let l = !s.canCreate;
  let d = l && o ? o : void 0;
  return jsxs(gR.Banner, {
    trackingContextName: 'Figmake Launch Banner',
    bgColor: Tj.bgSelectedTertiary,
    userFlag: 'seen_figmake_launch_banner',
    size: 'large',
    children: [jsxs('div', {
      className: 'x78zum5 x1i71x30 x6s0dn4 x1w5s15c x1fiy98q',
      children: [jsx('div', {
        className: 'xsqpjig x78zum5 x100vrsf x1vqgdyp x14odnwx x2lah0s x6s0dn4 xl56j7k xfm0j5p',
        children: jsx(_$$e17, {
          className: 'x1849jeq x1gnnpzl xwa2v1s'
        })
      }), jsx(gR.BannerContent, {
        title: getI18nString('banner.marketing_promo.figmake_launch.title'),
        copy: getI18nString('banner.marketing_promo.figmake_launch.content'),
        beta: n
      })]
    }), jsx(setupThemeContext, {
      brand: 'bake-filebrowser',
      children: jsx(setupThemeContext, {
        mode: 'light',
        children: jsx(ButtonLarge, {
          onClick: e,
          disabled: l,
          htmlAttributes: {
            'data-tooltip': d,
            'data-tooltip-type': KindEnum.TEXT
          },
          children: getI18nString('banner.marketing_promo.figmake_launch.cta')
        })
      })
    })]
  });
}
function gV(e) {
  let t = useSubscription(SharedWithYouResources, {
    resourceTypes: e.resourceTypes,
    firstPageSize: 30,
    sortOrder: e.sortOrder,
    cursorColumn: e.sortKey,
    sharedBy: e.sharedBy || null,
    planId: e.planId || null,
    planType: e.planType || null,
    fileType: e.fileType || null,
    orgDeletedDrafts: e.orgDeletedDrafts || null
  });
  let r = useCallback(() => {
    t.status === 'loaded' && t.data.sharedWithYouResources.hasNextPage() && t.data.sharedWithYouResources.loadNext(30);
  }, [t]);
  let a = t.status === 'loaded' && t.data.sharedWithYouResources.isLoadingNextPage;
  return {
    subscription: t,
    fetchNextPage: r,
    isFetchingNextPage: a
  };
}
function gz(e) {
  let t = getSelectedView();
  let r = useSelector(e => e.tileSortFilterStateByView);
  let n = t.view === 'recentsAndSharing' ? r.recentsAndSharing.sharedFiles : r.sharedWithYou;
  let o = {
    tileSortFilterConfig: n,
    sortKeys: [SortField.SHARED_AT]
  };
  let {
    subscription,
    fetchNextPage,
    isFetchingNextPage
  } = function (e) {
    let {
      subscription: _subscription,
      fetchNextPage: _fetchNextPage,
      isFetchingNextPage: _isFetchingNextPage
    } = gV({
      ...e,
      resourceTypes: ['file', 'file_repo', 'prototype']
    });
    return {
      subscription: useMemo(() => _subscription.transform(e => e.sharedWithYouResources.reduce((e, t) => {
        if (t.sharedWithYouFile) {
          let r = function (e) {
            if (e == null || e.file == null) return null;
            let {
              file,
              ...r
            } = e;
            let a = {
              ...file,
              ...r,
              editUrl: `${window.location.origin}/file/${file.key}/${encodeUri(file.name || '')}`,
              signedPreviewThumbnailUrls: null,
              trackTags: null
            };
            return _$$fA(fileEntityDataMapper.toSinatra(a), {
              sharedAt: r.sharedAt,
              sharedByUser: r.sharedByUser
            });
          }(t.sharedWithYouFile);
          r && e.push(r);
        } else if (t.sharedWithYouRepo) {
          let r = function (e) {
            let {
              repo,
              ...r
            } = e;
            if (repo === null) return null;
            let {
              branches,
              ...s
            } = repo;
            let i = branches?.filter(e => e != null)?.map(e => convertCamelToSnakeWithLeading({
              ...e,
              edit_url: e ? `${window.location.origin}/file/${e.key}/${encodeUri(e.name || '')}` : '',
              client_meta: e.checkpointClientMeta
            })) ?? [];
            let n = convertCamelToSnakeWithLeading({
              ...s,
              ...r
            });
            return convertCamelToSnakeWithLeading({
              type: _$$nb.REPO,
              repo: n,
              branches: i,
              selectedBranchKey: ''
            }, {
              repoPerms: zh(repo)
            });
          }(t.sharedWithYouRepo);
          r && e.push(r);
        } else if (t.sharedWithYouPrototype) {
          let r = function (e) {
            let {
              prototype,
              ...r
            } = e;
            if (prototype == null) return null;
            let a = convertCamelToSnakeWithLeading({
              ...prototype,
              ...r
            });
            return convertCamelToSnakeWithLeading({
              type: _$$nb.PROTOTYPE,
              prototype: a
            }, {
              prototypePerms: _$$R10(prototype)
            });
          }(t.sharedWithYouPrototype);
          r && e.push(r);
        }
        return e;
      }, [])), [_subscription]),
      fetchNextPage: _fetchNextPage,
      isFetchingNextPage: _isFetchingNextPage
    };
  }({
    sharedBy: n.filters.sharedBy ?? '',
    planId: n.filters.plan?.planId ?? '',
    planType: n.filters.plan?.planType ?? '',
    fileType: (e => {
      switch (e) {
        case FileType.DESIGN:
          return 'design';
        case FileType.FIGJAM:
          return 'whiteboard';
        case FileType.PROTOTYPE:
          return 'prototype';
        case FileType.SITES:
          return 'sites';
        case FileType.SLIDES:
          return 'slides';
        case FileType.COOPER:
          return 'cooper';
        case FileType.MAKE:
          return 'figmake';
        case FileType.ANY:
          return null;
        default:
          throwTypeError(e);
      }
    })(n.filters.fileType) ?? '',
    sortOrder: n.sort.dir === SortOrder.ASC ? 'asc' : 'desc',
    sortKey: getResourceSortField(n.sort.key) ?? 'shared_at'
  });
  let u = useMemo(() => subscription.unwrapOr([]), [subscription]);
  let {
    trackPerformanceEvent
  } = _$$S8('swy_files_pagination_performance', 'livegraph');
  useEffect(() => {
    trackPerformanceEvent('fetch_end');
  }, [trackPerformanceEvent, u.length]);
  useEffect(() => {
    subscription.status === 'errors' && trackPerformanceEvent('fetch_error', {
      errors: JSON.stringify(subscription.errors ?? {})
    });
  }, [trackPerformanceEvent, subscription.status, subscription.errors]);
  useEffect(() => (trackPerformanceEvent('fetch_start'), () => {
    trackPerformanceEvent('fetch_cancel');
  }), [trackPerformanceEvent]);
  let _ = useCallback(() => {
    isFetchingNextPage || (trackPerformanceEvent('fetch_next'), fetchNextPage());
  }, [isFetchingNextPage, fetchNextPage, trackPerformanceEvent]);
  let p = subscription.status === 'loaded';
  kF('SharedFiles');
  WX({
    markName: 'MainBodyContent',
    isLoaded: p
  });
  return jsx(_$$A2, {
    loadingElementId: 'loading-content-pane',
    delay: 250,
    loaded: p,
    loadingElementClassName: cssBuilderInstance.pr32.$,
    children: jsx(_$$B4, {
      onShouldFetchNextPage: _,
      children: jsx(me, {
        currentPlanFilter: n.filters.plan,
        currentSharedByFilter: n.filters.sharedBy,
        emptyStateText: isFetchingNextPage ? '' : getI18nString('shared_with_you.no_items'),
        isEligbileForProTeamLockedRevampUI: e.isEligbileForProTeamLockedRevampUI,
        newFileTile: !1,
        sortFilterOptions: o,
        tileActions: {
          showInFolder: !0,
          open: !0,
          openNewTab: !0,
          restoreFromVersion: !0,
          rename: !0,
          share: !0,
          copyLink: !0,
          duplicate: !0,
          delete: !0,
          removeFromRecents: !1,
          createBranch: !0,
          publishOrgTemplate: !0,
          moveFile: !0,
          pinToWorkspace: !0
        },
        tiles: u
      })
    })
  });
}
function gH(e) {
  let t = getSelectedView();
  let r = getCurrentTeam();
  let n = useSubscription(TeamCanEdit, {
    id: r?.id || ''
  }, {
    enabled: !!r
  });
  let o = useSubscription(TeamCanAdmin, {
    id: r?.id || ''
  }, {
    enabled: !!r
  });
  let l = useSelector(e => e.tileSortFilterStateByView);
  let d = t.view === 'recentsAndSharing' ? l.recentsAndSharing.sharedProjects : l.sharedWithYou;
  let {
    subscription,
    fetchNextPage,
    isFetchingNextPage
  } = function (e) {
    let {
      subscription: _subscription2,
      fetchNextPage: _fetchNextPage2,
      isFetchingNextPage: _isFetchingNextPage2
    } = gV({
      ...e,
      resourceTypes: ['folder']
    });
    return {
      subscription: useMemo(() => _subscription2.transform(e => e.sharedWithYouResources.reduce((e, t) => {
        if (t.sharedWithYouFolder) {
          let {
            folder,
            ...a
          } = t.sharedWithYouFolder;
          if (folder == null) return e;
          let s = folder.updatedAt.toString();
          let i = folder.activeProjectResourceConnections?.[0] ?? null;
          let n = convertCamelToSnakeWithLeading({
            ...folder,
            ...a
          }, {
            created_at: folder.createdAt.toString(),
            updated_at: s,
            deleted_at: folder.deletedAt?.toString() || null,
            touched_at: s,
            is_connected_project: !!i,
            resource_connection: i ? {
              hostPlanName: i.hostPlanName,
              connectedPlanName: i.connectedPlanName
            } : null
          });
          e.push(n);
        }
        return e;
      }, [])), [_subscription2]),
      fetchNextPage: _fetchNextPage2,
      isFetchingNextPage: _isFetchingNextPage2
    };
  }({
    sharedBy: d.filters.sharedBy ?? '',
    planId: d.filters.plan?.planId ?? '',
    planType: d.filters.plan?.planType ?? '',
    orgDeletedDrafts: '',
    sortOrder: d.sort.dir === SortOrder.ASC ? 'asc' : 'desc',
    sortKey: getResourceSortField(d.sort.key) ?? 'shared_at'
  });
  let _ = useMemo(() => subscription.unwrapOr([]), [subscription]);
  let f = useMemo(() => _.map(e => e.id), [_]);
  let {
    trackPerformanceEvent
  } = _$$S8('swy_projects_pagination_performance', 'livegraph');
  useEffect(() => {
    trackPerformanceEvent('fetch_end');
  }, [trackPerformanceEvent, f.length]);
  useEffect(() => {
    subscription.status === 'errors' && trackPerformanceEvent('fetch_error', {
      errors: JSON.stringify(subscription.errors ?? {})
    });
  }, [trackPerformanceEvent, subscription.status, subscription.errors]);
  useEffect(() => (trackPerformanceEvent('fetch_start'), () => {
    trackPerformanceEvent('fetch_cancel');
  }), [trackPerformanceEvent]);
  let x = useCallback(() => {
    isFetchingNextPage || (trackPerformanceEvent('fetch_next'), fetchNextPage());
  }, [isFetchingNextPage, fetchNextPage, trackPerformanceEvent]);
  let b = n.status === 'loaded' && !!n.data.team && n.data.team.hasPermission;
  let v = !!o.unwrapOr({
    team: {
      hasPermission: !1
    }
  })?.team?.hasPermission;
  let y = subscription.status === 'loaded';
  kF('SharedProjects');
  WX({
    markName: 'MainBodyContent',
    isLoaded: y
  });
  return jsx(_$$A2, {
    loadingElementId: 'loading-content-pane',
    delay: 250,
    loaded: y,
    loadingElementClassName: cssBuilderInstance.pr32.$,
    children: jsx(_$$B4, {
      onShouldFetchNextPage: x,
      children: jsx(mv, {
        canAdminTeam: v,
        canEditTeamContents: b,
        chunkSize: _.length,
        currentPlanFilter: d.filters.plan,
        emptyStateText: isFetchingNextPage ? '' : getI18nString('shared_with_you.no_items'),
        folderList: _,
        isEligbileForProTeamLockedRevampUI: !!r && e.isEligbileForProTeamLockedRevampUI,
        isSharerInfoIncluded: !0,
        selectedView: t,
        team: r,
        teamId: r ? r.id : void 0,
        useLGPerms: !0,
        viewId: 'shared-with-you-projects'
      })
    })
  });
}
let gZ = e => jsx('span', {
  className: 'unsubscribe_confirmation_modal--boldText--dNK-D',
  children: e
});
let g0 = registerModal(e => {
  let t = useDispatch();
  let r = selectCurrentUser();
  return r ? jsxs(_$$u9, {
    tintedModalBackground: !0,
    headerText: getI18nString('interstitial.unsubscribe_success_header'),
    children: [jsx('div', {
      className: Yg,
      children: renderI18nText('interstitial.unsubscribe_success_subheader_with_address', {
        emailName: gZ((() => {
          switch (e.policyType) {
            case 'FileCommentActivity':
              return getI18nString('interstitial.comment_activity_digest');
            case 'TeamCommentActivity':
              return getI18nString('interstitial.team_comment_digest');
            case 'FeedWeeklyDigest':
              return getI18nString('interstitial.feed_weekly_digest');
            case 'WorkspaceActivity':
              return getI18nString('interstitial.workspace_activity');
            default:
              throwTypeError(e.policyType);
          }
        })()),
        emailAddress: gZ(r.email)
      })
    }), jsx(BigButtonPrimaryTracked, {
      onClick: () => {
        t(popModalStack());
      },
      className: 'unsubscribe_confirmation_modal--button--j6qqT',
      children: renderI18nText('interstitial.done')
    }), jsx('button', {
      className: 'unsubscribe_confirmation_modal--notificationSettingsButton--vmHlZ interstitial_modal--secondaryText--IC9Gu',
      onClick: () => {
        t(showModalHandler({
          type: _$$s7,
          data: {
            tab: _$$c9.NOTIFICATIONS
          }
        }));
        t(popPrevModal());
      },
      children: renderI18nText('interstitial.open_notifications_settings')
    })]
  }) : null;
}, 'UNSUBSCRIBE_CONFIRMATION_INTERSTITIAL_MODAL');
let g4 = {
  showInFolder: !0,
  open: !0,
  openNewTab: !0,
  restoreFromVersion: !0,
  rename: !0,
  share: !0,
  copyLink: !0,
  duplicate: !0,
  delete: !0,
  removeFromRecents: !0,
  createBranch: !0,
  publishOrgTemplate: !0,
  moveFile: !0,
  pinToWorkspace: !0
};
function g2({
  isEligbileForProTeamLockedRevampUI: e
}) {
  let t = useSelector(e => e.tileSortFilterStateByView.recentsAndSharing.recents);
  !function ({
    sort: e,
    viewMode: t
  }) {
    let r = t ?? ViewMode.GRID;
    let a = useRef(e);
    let i = useRef(r);
    i.current = r;
    useEffect(() => {
      getFeatureFlags().recents_sort_tracking && analyticsEventManager.trackDefinedEvent('file_browser.recents_sort_on_load', {
        sortKey: getSortFieldKey(a.current.key),
        sortDir: getSortOrderKey(a.current.dir),
        viewMode: getViewModeKey(i.current)
      });
    }, []);
    let n = useRef(!0);
    useEffect(() => {
      if (getFeatureFlags().recents_sort_tracking) {
        if (n.current) {
          n.current = !1;
          return;
        }
        analyticsEventManager.trackDefinedEvent('file_browser.recents_sort_updated', {
          sortKey: getSortFieldKey(e.key),
          sortDir: getSortOrderKey(e.dir),
          viewMode: getViewModeKey(i.current)
        });
      }
    }, [e.dir, e.key]);
  }(t);
  let r = getFileTypeIndex(t.filters.fileType);
  let n = ql({
    _editorTypeRaw: r
  });
  let l = O8();
  let d = useMemo(() => n.transform(e => e.map(e => _$$fA(e))), [n]);
  let c = useMemo(() => l.transform(e => e.map(Nu)), [l]);
  let u = function () {
    let e = useSelector(e => e.recentRepos);
    let t = useSelector(e => e.selectedBranchKeyByRepoId);
    return useMemo(() => e.map(e => _$$uy(e, t)), [e, t]);
  }();
  let m = function () {
    let e = useUnsyncedAutosaveFiles();
    return useMemo(() => Object.values(e).map(_$$gB), [e]);
  }();
  let _ = useMemo(() => resourceUtils.merge([d, c], u, m), [m, d, c, u]);
  let p = useMemo(() => ({
    tileSortFilterConfig: t,
    sortKeys: [SortField.NAME, SortField.CREATED_AT, SortField.ACCESSED_AT]
  }), [t]);
  let f = _.status === 'loaded';
  kF('RecentFiles');
  WX({
    markName: 'MainBodyContent',
    isLoaded: f
  });
  return jsxs(_$$A2, {
    loadingElementId: 'loading-content-pane',
    loaded: f,
    loadingElementClassName: cssBuilderInstance.pr32.$,
    children: [jsx(me, {
      tiles: _.data,
      tileActions: g4,
      sortFilterOptions: p,
      newFileTile: !0,
      emptyStateText: r !== null ? getI18nString('file_browser.tiles_view.default_overfiltered_text') : BrowserInfo.mobile || BrowserInfo.tablet ? getI18nString('file_browser.tool_bar.recently_viewed_empty_state') : '',
      isEligbileForProTeamLockedRevampUI: e,
      shouldLogVisibleTileCount: !0
    }), jsx(_$$cx, {})]
  });
}
let g6 = new class {
  constructor() {
    this.SharerFilterOptionsSchemaValidator = createNoOpValidator();
    this.PlanFilterOptionsSchemaValidator = createNoOpValidator();
  }
  getSharerFilterOptions(e) {
    return this.SharerFilterOptionsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/shared_with_you/sharer_filter_options?resource_type[]=${e.resource_type}`));
  }
  getPlanFilterOptions(e) {
    return this.PlanFilterOptionsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/shared_with_you/plan_filter_options?resource_type[]=${e.resource_type}`));
  }
}();
function g3() {
  return {
    '': {
      label: getI18nString('shared_with_you.filters.all_organizations')
    }
  };
}
let g7 = liveStoreInstance.Query({
  fetch: async e => {
    let t = await g6.getPlanFilterOptions({
      resource_type: e
    });
    let r = {};
    t.data.meta.plan_filters.forEach(e => {
      let t = {
        label: e.label,
        plan_id: e.plan_id,
        plan_type: e.plan_type
      };
      e.plan_id && (r[e.plan_id] = t);
    });
    return {
      ...g3(),
      ...r
    };
  }
});
function g9() {
  return {
    '': getI18nString('shared_with.you.filters.anyone')
  };
}
let he = [ViewTypeEnum.RECENTLY_VIEWED, ViewTypeEnum.SHARED_FILES, ViewTypeEnum.SHARED_PROJECTS];
let ht = e => {
  switch (e) {
    case ViewTypeEnum.RECENTLY_VIEWED:
      return getI18nString('file_browser.recents_and_sharing_view.recent_files_tab_name');
    case ViewTypeEnum.SHARED_PROJECTS:
      return getI18nString('file_browser.recents_and_sharing_view.shared_projects_tab_name');
    case ViewTypeEnum.SHARED_FILES:
      return getI18nString('file_browser.recents_and_sharing_view.shared_files_tab_name');
    default:
      throwTypeError(e);
  }
};
function hr(e) {
  let t = e.options.tileSortFilterConfig.filters.sharedBy;
  let r = e.options.tileSortFilterConfig.filters.plan;
  return jsxs('div', {
    className: cssBuilderInstance.flex.flexWrap.gap8.$,
    children: [e.filters?.sharer && Object.keys(e.filters?.sharer).length > 1 && jsxs(Fragment, {
      children: [t && jsx(qD, {
        userId: t
      }), jsx(_$$lI, {
        config: e.options.tileSortFilterConfig,
        filterOptions: e.filters.sharer,
        tab: e.tab
      })]
    }), e.filters?.plan && Object.keys(e.filters?.plan).length > 1 && jsxs(Fragment, {
      children: [r?.planId && jsx(_$$lV, {
        planOption: e.filters.plan[r.planId]
      }), jsx(FU, {
        config: e.options.tileSortFilterConfig,
        filterOptions: e.filters.plan,
        tab: e.tab
      })]
    }), e.filters?.fileType && jsx(Fragment, {
      children: jsx(ye, {
        config: e.options.tileSortFilterConfig,
        tab: e.tab
      })
    })]
  });
}
function ha(e) {
  let t = e.selectedTab;
  let r = useDispatch();
  let n = getSelectedView();
  let l = useSelector(e => e.tileSortFilterStateByView);
  let d = t === ViewTypeEnum.SHARED_PROJECTS ? ['folder'] : ['file', 'file_repo', 'prototype'];
  let c = function (e) {
    let [t, r] = useState(g9());
    let a = e.join('&resource_type[]=');
    useEffect(() => {
      g6.getSharerFilterOptions({
        resource_type: a
      }).then(({
        data: e
      }) => {
        r(e.meta.shared_by_filters.reduce((e, {
          user_id: t,
          label: r
        }) => ({
          ...e,
          [t]: r
        }), {
          ...g9()
        }));
      });
    }, [a]);
    return t;
  }(d);
  let u = function () {
    let e = getUserId();
    let t = useSelector(e => e.authedUsers);
    let r = useSelector(e => e.plans);
    let a = useSelector(e => e.orgById);
    let s = useSelector(selectTeams);
    let n = getFeatureFlags().limited_plan_spaces;
    let l = e ? t.byId[e] : null;
    return (n ? r.map(e => {
      let t = '';
      if (e.plan_type === OrganizationType.ORG) {
        let r = a[e.plan_id];
        t = r?.name ?? t;
      } else {
        let r = s[e.plan_id];
        t = r?.name ?? t;
      }
      return {
        label: t,
        plan_id: e.plan_id,
        plan_type: e.plan_type === OrganizationType.ORG ? OrganizationType.ORG : OrganizationType.TEAM
      };
    }) : (l?.plans ?? []).map(e => ({
      label: e.name,
      plan_id: e.plan_id,
      plan_type: e.is_org ? 'org' : 'team'
    }))).reduce((e, t) => ({
      ...e,
      [`${t.plan_id}`]: t
    }), {
      ...g3()
    });
  }();
  let m = function (e) {
    let t = e.join('&resource_type[]=');
    let [r] = _$$IT(g7(t));
    return r.data || g3();
  }(d);
  let _ = {
    [FilterType.ALL]: getI18nString('shared_with_you.filters.org_deleted_drafts.all'),
    [FilterType.SHARED]: getI18nString('shared_with_you.filters.org_deleted_drafts.shared'),
    [FilterType.ORG_DELETED_DRAFTS]: getI18nString('shared_with_you.filters.org_deleted_drafts.deleted_user_drafts')
  };
  let p = {
    sharer: t !== ViewTypeEnum.RECENTLY_VIEWED ? c : void 0,
    plan: t === ViewTypeEnum.RECENTLY_VIEWED ? u : m,
    fileType: t !== ViewTypeEnum.SHARED_PROJECTS,
    orgDeletedDrafts: t === ViewTypeEnum.SHARED_PROJECTS ? _ : void 0
  };
  let f = useMemo(() => {
    let e;
    switch (t) {
      case ViewTypeEnum.RECENTLY_VIEWED:
        e = l.recentsAndSharing.recents;
        break;
      case ViewTypeEnum.SHARED_FILES:
        e = l.recentsAndSharing.sharedFiles;
        break;
      case ViewTypeEnum.SHARED_PROJECTS:
        e = l.recentsAndSharing.sharedProjects;
        break;
      default:
        throwTypeError(t);
    }
    return {
      tileSortFilterConfig: e,
      sortKeys: sortOptions[t]
    };
  }, [t, l]);
  let g = e => {
    e === ViewTypeEnum.SHARED_FILES ? trackEventAnalytics('file_browser_shared_files') : e === ViewTypeEnum.SHARED_PROJECTS && trackEventAnalytics('file_browser_shared_projects');
    r(selectViewAction({
      view: 'recentsAndSharing',
      tab: e
    }));
  };
  let h = jsx('div', {
    className: 'x78zum5 x6s0dn4',
    children: jsx($c, {
      initialViewMode: f.tileSortFilterConfig.viewMode,
      onViewModeChange: e => {
        trackEventAnalytics('file view toggle', {
          viewType: e === ViewMode.GRID ? 'grid' : 'list'
        });
        Object.keys(ViewTypeEnum).map(t => {
          r(setBrowserTileSortView({
            selectedView: n,
            config: {
              ...f.tileSortFilterConfig,
              viewMode: e
            },
            tab: ViewTypeEnum[t]
          }));
        }, r(setBrowserViewBarModeOptions({
          viewId: 'shared-with-you-projects',
          viewMode: e
        })));
      }
    })
  });
  let x = jsx(_$$mc, {
    options: f,
    selectedView: n,
    dispatch: r,
    tab: t
  });
  let b = jsxs('div', {
    className: cssBuilderInstance.flex.gap8.$,
    children: [x, h]
  }, 'sortWithViewOptions');
  let v = jsx(hr, {
    options: f,
    filters: p,
    tab: t
  }, 'recentsAndSharingTileFilters');
  let [y, w, j] = _$$t5.useManagedTabs({
    [ViewTypeEnum.RECENTLY_VIEWED]: !0,
    [ViewTypeEnum.SHARED_FILES]: !0,
    [ViewTypeEnum.SHARED_PROJECTS]: !0
  }, e.selectedTab, e => {
    g(e);
  });
  let T = he.map((e, t) => jsx(_$$t5.Tab, {
    ...y[e],
    children: ht(e)
  }, t));
  let C = [v, b];
  return jsx(_$$g4, {
    leftSide: jsx(UI3ConditionalWrapper, {
      children: jsx(_$$t5.TabStrip, {
        manager: j,
        children: T
      })
    }),
    rightSide: C,
    rightSideMobile: C,
    shouldStackRightSideMobile: !0
  });
}
function hs(e) {
  switch (e) {
    case SidebarSection.ACCOUNT:
      return _$$c9.ACCOUNT;
    case SidebarSection.COMMUNITY:
      return _$$c9.COMMUNITY;
    case SidebarSection.NOTIFICATIONS:
      return _$$c9.NOTIFICATIONS;
  }
}
function hi(e) {
  let t = useDispatch();
  let r = _$$R3();
  let n = _e({
    checks: {
      isEligbileForProTeamLockedRevampUI: r
    },
    shadowReadLabel: adminPermissionConfig.RecentsAndSharingPageView.hasBanner
  }).unwrapOr(!1);
  let {
    selectedTab,
    accountModalTab,
    emailPolicyToUnsubscribeFrom
  } = e;
  let c = jsx(ha, {
    selectedTab
  });
  let u = useLatestRef(accountModalTab);
  let m = useLatestRef(emailPolicyToUnsubscribeFrom);
  _$$i8();
  _$$V7();
  useEffect(() => {
    accountModalTab && accountModalTab !== u ? (t(showModalHandler({
      type: _$$s7,
      data: {
        tab: hs(accountModalTab)
      }
    })), t(selectViewAction({
      view: 'recentsAndSharing'
    }))) : emailPolicyToUnsubscribeFrom && emailPolicyToUnsubscribeFrom !== m && (_$$z12.updateUserCommunicationPreference({
      channelType: 'email',
      policyType: emailPolicyToUnsubscribeFrom,
      policySetting: 'none'
    }).then(() => {
      t(showModalHandler({
        type: g0,
        data: {
          policyType: emailPolicyToUnsubscribeFrom
        }
      }));
    }).catch(e => {
      t(showModalHandler({
        type: _$$s7,
        data: {
          tab: hs(SidebarSection.NOTIFICATIONS)
        }
      }));
      t(VisualBellActions.dequeue({}));
    }), t(selectViewAction({
      view: 'recentsAndSharing'
    })));
  }, [accountModalTab, u, emailPolicyToUnsubscribeFrom, m, t]);
  return jsx(_$$r4, {
    banner: n ? jsx(_i, {
      folderId: null
    }) : jsx(gB, {}),
    viewbar: c,
    toolbar: jsx(gN, {}),
    viewBarSticky: !0,
    content: function (e, t) {
      switch (e) {
        case ViewTypeEnum.SHARED_FILES:
          return jsx(gz, {
            isEligbileForProTeamLockedRevampUI: t?.isEligbileForProTeamLockedRevampUI
          });
        case ViewTypeEnum.SHARED_PROJECTS:
          return jsx(gH, {
            isEligbileForProTeamLockedRevampUI: t?.isEligbileForProTeamLockedRevampUI
          });
        case ViewTypeEnum.RECENTLY_VIEWED:
          return jsx(g2, {
            isEligbileForProTeamLockedRevampUI: t?.isEligbileForProTeamLockedRevampUI
          });
        default:
          throwTypeError(e);
      }
    }(selectedTab, {
      isEligbileForProTeamLockedRevampUI: r
    })
  });
}
function ho({
  teamId: e
}) {
  let t = useSubscription(TeamPermissions, {
    teamId: e
  });
  let r = t.data?.team || null;
  let s = useCurrentUserOrgId();
  if (!r?.org) return null;
  if (s !== r.org.id) {
    return jsx(_W, {
      planEntity: r.org
    });
  }
  let i = (r.org?.workspaces?.length || 0) > 0 && r.plan?.tier === Agb.ENTERPRISE;
  return jsxs(_$$A11, {
    children: [r.org && jsx(_B, {
      org: r.org,
      currentResourceId: e,
      hasTrailingDivider: !!r.workspace || i
    }), (r.workspace || i) && jsx(_V, {
      workspace: r.workspace ?? {
        id: UNASSIGNED
      },
      currentResourceId: e,
      orgId: r.org?.id,
      hasTrailingDivider: !1
    })]
  });
}
function h_() {
  return jsxs('div', {
    className: cssBuilderInstance.flex.p12.colorBgSelected.bRadius6.$,
    children: [jsx('div', {
      className: cssBuilderInstance.mr12.colorIcon.itemSelfCenter.$,
      children: jsx(SvgComponent, {
        svg: _$$A28
      })
    }), jsxs('div', {
      children: [renderI18nText('sidebar.meta.this_team_is_for_education_users_only'), ' ', jsx(linkWithTracking, {
        target: '_blank',
        trusted: !0,
        href: '/education/',
        children: renderI18nText('org_home_view_meta.learn_more')
      })]
    })]
  });
}
function hp({
  team: e
}) {
  let t = useDispatch();
  let r = useSubscription(TeamCanEdit, {
    id: e.id
  });
  let s = !!r.data?.team?.hasPermission;
  let [{
    data: n
  }] = setupResourceAtomHandler(Xg({
    teamId: e.id
  }));
  let o = (n || []).filter(e => e.name !== '').length;
  let l = selectExperimentConfigHook('exp_fbg_project_limit_upsell');
  if (!(!e.subscription && !e.org_id && s && o >= PRIMARY_LIMIT) || l.getConfig().getValue('show_upsell', !1)) return null;
  let d = jsx(linkWithTracking, {
    'onClick': () => {
      t(showModalHandler({
        type: _$$V4,
        data: {
          teamId: e.id,
          upsellSource: UpsellModalType.STARTER_TEAM_FOOTER
        }
      }));
    },
    'trusted': !0,
    'trackingProperties': {
      trackingDescriptor: UpgradeAction.UPGRADE_TO_A_PAID_PLAN
    },
    'data-testid': 'starterTeamUpsellFooterUpgradeLink',
    'children': renderI18nText('file_browser.starter_team.upgrade_link')
  });
  return jsx(TrackingProvider, {
    name: 'Starter Team Upsell Footer',
    children: jsx('div', {
      'className': U()(cssBuilderInstance.flex.p32.mt16.bRadius6.justifyCenter.colorBorder.$, 'starter_team_upsell_footer--borderStyle--pM4nA'),
      'data-testid': 'starterTeamUpsellFooter',
      'children': jsxs('div', {
        className: U()(cssBuilderInstance.flex.flexColumn.itemsCenter.lh24.$, 'starter_team_upsell_footer--contentWrapper--H-soB'),
        children: [jsx('strong', {
          children: o === PRIMARY_LIMIT ? renderI18nText('file_browser.starter_team.project_limit_warning', {
            maxProjects: PRIMARY_LIMIT
          }) : renderI18nText('file_browser.starter_team.project_limit_warning_over_max_projects')
        }), jsx('p', {
          className: cssBuilderInstance.alignCenter.$,
          children: renderI18nText('file_browser.starter_team.project_limit_info', {
            upgradeLink: d
          })
        })]
      })
    })
  });
}
function hf(e) {
  let t = useDispatch();
  let r = useRef(null);
  let n = useSelector(({
    dropdownShown: e
  }) => e);
  let o = e.team.org_id ?? null;
  let l = _$$Q({
    currentOrgId: o,
    currentTeamId: null
  });
  let d = useMemo(() => {
    if (l.status === 'loaded') return T0(l.data, e.team.id);
  }, [l, e.team.id]);
  if (l.status !== 'loaded') {
    return jsx('div', {
      className: cssBuilderInstance.flex.itemsCenter.colorIcon.$,
      children: jsx(SvgComponent, {
        svg: _$$A23
      })
    });
  }
  let c = _$$gV(l.data, o);
  let u = e.dropdownKey && n && n.type === e.dropdownKey && n.data && n.data.targetRect;
  let m = r.current && n?.data?.targetRef === r.current && n?.type === jU;
  let _ = r.current;
  let p = [];
  e.showInvite && p.push(jsx(_$$c$, {
    children: renderI18nText('file_browser.team.invite'),
    onClick: e.onInviteClick
  }, 'import'));
  p.push(jsx(_$$c$, {
    children: renderI18nText('file_browser.team.view_members'),
    onClick: t => e.onMembersClick(t)
  }, 'share'));
  p.push(jsx(_$$c$, {
    children: jsxs('div', {
      className: cssBuilderInstance.flex.justifyBetween.itemsCenter.w150.$,
      children: [renderI18nText('favorited_resources.add_to_sidebar'), jsx(SvgComponent, {
        svg: _$$A24
      })]
    }),
    onClick: a => {
      a.stopPropagation();
      r.current && t(showDropdownThunk({
        type: jU,
        data: {
          targetRect: _.getBoundingClientRect(),
          targetRef: _,
          resourceId: e.team.id
        }
      }));
    }
  }, 'add-to-favorites-section'));
  return jsxs('span', {
    children: [jsx(ButtonPrimitive, {
      className: U()(cssBuilderInstance.flex.itemsCenter.colorIcon.$, HM),
      ref: r,
      onClick: r => {
        e.dropdownKey && _ && t(showDropdownThunk({
          type: e.dropdownKey,
          data: {
            targetRect: _?.getBoundingClientRect()
          }
        }));
      },
      children: jsx(_$$J, {})
    }), u && jsx(Cf, {
      targetRect: n.data.targetRect,
      minWidth: 172,
      maxWidth: 172,
      propagateCloseClick: !0,
      children: p
    }), m && jsx(_$$t8, {
      setFavorite: e.setFavorite,
      resourceId: e.team.id,
      resourceType: FEntityType.TEAM,
      favoriteId: d?.id,
      orgId: o,
      sections: (l.data?.currentUser?.userSidebarSections ? getResourceDataOrFallback(l.data.currentUser.userSidebarSections) : null) ?? [],
      userHasMaxFavorites: c,
      customSectionOrdering: l.data.currentUser?.baseOrgUser?.fileBrowserPreferences?.orderedSidebarSections ?? []
    })]
  });
}
let hk = registerModal(({
  teamId: e,
  trackingProperties: t,
  hasSecondaryBtn: r = !0
}) => {
  let n = useMemo(() => To(), []);
  let o = useDispatch();
  let l = () => {
    o(hideModal());
  };
  let d = r ? jsx(_$$V6, {
    onClick: () => {
      customHistory.redirect('/pricing', '_blank');
    },
    children: getI18nString('pro_onboarding.pro_feature_modal.compare_plans')
  }) : null;
  return jsx(TrackingProvider, {
    name: 'Pro Features Modal',
    properties: t ?? _$$S10.getTrackingProperties(e),
    children: jsx(_$$n7, {
      ...n,
      dismissModal: l,
      clickPrimaryBtn: l,
      secondaryBtn: d,
      showPricing: !1,
      panelTitleSize: _$$I5.LARGE,
      cardsClickable: !0
    })
  });
}, 'ProFeaturesModal');
let hA = e => ({
  tileSortFilterConfig: e.team,
  sortKeys: [SortField.NAME, SortField.TOUCHED_AT]
});
let hO = (e, t, r) => {
  let s = memoizeByArgs(hA)(t);
  return [jsx(_$$mc, {
    dispatch: e,
    options: s,
    selectedView: r
  }, 0), jsx($c, {
    initialViewMode: s.tileSortFilterConfig.viewMode,
    onViewModeChange: t => {
      trackEventAnalytics('team folder view toggle', {
        viewType: t === ViewMode.GRID ? 'grid' : 'list'
      });
      e(setBrowserTileSortView({
        selectedView: r,
        config: {
          ...s.tileSortFilterConfig,
          viewMode: t
        }
      }));
    }
  }, 1)];
};
function hF() {
  let e = useDispatch();
  let t = getSelectedView();
  let r = hO(e, useSelector(e => e.tileSortFilterStateByView), t);
  return jsx(_$$g4, {
    leftSide: null,
    rightSide: r
  });
}
function hP(e) {
  let {
    team,
    orgTeamActionType
  } = e;
  switch (orgTeamActionType) {
    case _$$gO.CLICK_JOIN:
    case _$$gO.BYPASS_REQUEST:
      return jsxs(Fragment, {
        children: [renderI18nText('file_browser.team.no_permissions_message', {
          teamName: team.name
        }), jsx('br', {}), renderI18nText('file_browser.team.please_join_team')]
      });
    case _$$gO.CLICK_REQUEST:
      return jsxs(Fragment, {
        children: [renderI18nText('file_browser.team.no_permissions_message', {
          teamName: team.name
        }), jsx('br', {}), renderI18nText('file_browser.team.please_request_to_join_team')]
      });
    case _$$gO.CLICK_WITHDRAW:
      return renderI18nText('file_browser.team.request_to_join_team_is_pending', {
        teamName: team.name
      });
    default:
      return renderI18nText('file_browser.team.no_permissions_message', {
        teamName: team.name
      });
  }
}
function hL({
  team: e
}) {
  let t = useSelector(e => e.currentUserOrgId);
  let r = useSelector(e => getPermissionsStateMemoized(e));
  let s = useSelector(t => t.teamRoleRequests[e.id]);
  let n = useCurrentPlanUser('TeamNonMemberJoinView');
  let o = useShadowReadLoaded({
    oldValue: resourceUtils.loaded(canAdminOrg(t, r)),
    newValue: useIsOrgAdminUser(n),
    enableFullRead: isReduxDeprecationCutover(ConfigGroups.GROUP_7),
    label: adminPermissionConfig.TeamNonMemberJoinView.canAdminOrg
  }).unwrapOr(!1);
  let l = YP(e, s, r, o);
  let d = useDispatch();
  let c = jsxs('div', {
    'className': 'team_page_view--nonMemberViewContainer--uleTt',
    'data-testid': 'non-member-join-content',
    'children': [jsxs('div', {
      className: 'team_page_view--header--sTxh6',
      children: [jsx(_$$nl, {
        team: e,
        size: Pf.LARGE
      }), jsx('span', {
        className: 'team_page_view--teamName--9MXYi text--fontPos18--rYXJb text--_fontBase--QdLsd',
        children: e.name
      })]
    }), jsx('div', {
      className: 'team_page_view--joinOptionText--McFNQ text--fontPos14--OL9Hp text--_fontBase--QdLsd',
      children: jsx(hP, {
        team: e,
        orgTeamActionType: l
      })
    }), jsx('div', {
      className: 'team_page_view--joinButton--waTM-',
      children: jsx(_$$m4, {
        team: e,
        onJoin: GR(d, e.id),
        onLeave: () => {
          d(showModalHandler({
            type: _$$p5,
            data: {
              teamId: e.id
            }
          }));
        },
        isCardActive: !1
      })
    })]
  });
  return jsx(_$$r4, {
    content: c
  });
}
function hD({
  teamId: e,
  selectedTab: t,
  upgradeModalType: r,
  showProOnboardingModal: n,
  showResourceConnectionInviteModal: o
}) {
  let l = selectWithShallowEqual(t => t.teams[e]);
  let d = useSelector(e => e.currentUserOrgId);
  let c = useSelector(e => l && l.org_id && e.orgById[l.org_id] || null);
  let u = useSelector(e => e.loadingState);
  let _ = useDispatch();
  let f = getSelectedView();
  let [g, h] = useState(!1);
  _$$r0(e);
  let x = _$$Z4(o);
  let b = _$$t9(x, o);
  useEffect(() => {
    o && b();
  }, [o, b]);
  let v = _$$Sh(e).transform(e => e.tier === FPlanNameType.PRO || e.tier === FPlanNameType.STUDENT).unwrapOr(!1);
  useSubscription(TeamById, {
    teamId: e
  });
  let y = _$$dr(e);
  let w = y.status === 'loaded';
  let j = y.data;
  let T = {
    canAdminOrg: !!j?.canAdminOrg,
    canAdminTeam: !!j?.canAdmin,
    canEditTeam: !!j?.canEdit,
    canReadTeam: !!j?.canRead,
    canDeleteTeam: !!j?.canDelete,
    isInTeam: !!j?.isInTeam
  };
  _$$h(() => {
    let e = QL('team_role_redemption');
    if (e && parseInt(e) in AccessLevelEnum) {
      let e = VE();
      e && _(VisualBellActions.enqueue({
        message: e
      }));
      EM('team_role_redemption');
    }
  });
  useEffect(() => {
    let e = _$$um.loadingKeyForPayload();
    isLoading(u, e) || isLoaded(u, e) || _(_$$um());
  }, [_, u]);
  useEffect(() => {
    d && _(Rw());
  }, [_, d]);
  useEffect(() => {
    if (l) {
      h(!1);
    } else {
      let t = HD.loadingKeyForPayload({
        teamId: e
      });
      let r = `TEAM_GET_ACTION_${e}`;
      d && !u[t] ? _(HD({
        teamId: e,
        disableFlashError: !0
      })) : isLoading(u, t) || isLoading(u, r) || h(!0);
    }
  }, [_, u, l, e, d]);
  useEffect(() => {
    if (!l || l.org_id) return;
    let e = fetchTeamMembersThunk.loadingKeyForPayload({
      teamId: l.id
    });
    if (isLoading(u, e) || isLoaded(u, e) || _(fetchTeamMembersThunk({
      teamId: l.id
    })), t === NavigationRoutes.BILLING) {
      setupShadowRead({
        label: adminPermissionConfig.TeamPageView.selectTeamViewBillingTab,
        oldValue: !1,
        newValue: !0,
        maxReports: 5
      });
      let e = Be.loadingKeyForPayload({
        teamId: l.id
      });
      isLoaded(u, e) || isLoading(u, e) || _(Be({
        teamId: l.id
      }));
    } else if (t === NavigationRoutes.MEMBERS) {
      let e = fetchTeamMembersThunk.loadingKeyForPayload({
        teamId: l.id
      });
      isLoading(u, e) || isLoaded(u, e) || _(fetchTeamMembersThunk({
        teamId: l.id
      }));
    } else if (t === NavigationRoutes.SETTINGS) {
      let e = Be.loadingKeyForPayload({
        teamId: l.id
      });
      T.canAdminTeam && v && !isLoading(u, e) && !isLoaded(u, e) && _(Be({
        teamId: l.id
      }));
    }
  }, [_, t, u, l, c, v, T.canAdminTeam]);
  let E = selectUser();
  let I = useSubscription(TeamUserStatusAndRequests, {
    teamId: e
  });
  let C = I.data?.team?.currentTeamUser;
  let S = _$$R0();
  useEffect(() => {
    let e;
    if (!(l && E && C && r) || !v) return;
    let a = r === FProductAccessType.WHITEBOARD ? FFileType.WHITEBOARD : FFileType.DESIGN;
    a === FFileType.DESIGN ? e = C.designAccountTypeRequest?.status === 'pending' : a === FFileType.WHITEBOARD && (e = C.whiteboardAccountTypeRequest?.status === 'pending');
    !0 === e && _(FlashActions.flash(getI18nString('team_view.request_upgrade.request_already_sent')));
    _(selectViewAction({
      view: 'team',
      teamId: l.id,
      teamViewTab: t
    }));
  }, [_, l, E, C, r, v, t, S]);
  _$$h(() => {
    n && _(showModalHandler({
      type: _$$C6,
      data: {
        teamId: e
      }
    }));
  });
  let k = useRef(!1);
  useEffect(() => {
    !k.current && f.view === 'team' && f.assetTransferRequestId && _(showModalHandler({
      type: _$$S1(),
      data: {
        selectedAssetTransferRequest: f.assetTransferRequestId
      }
    }));
    k.current = !0;
  });
  let R = g || !T.canReadTeam && !d;
  return w ? R ? jsx(_$$S4, {
    resourceType: EntityType.TEAM
  }) : l ? T.canReadTeam ? jsx(hM, {
    team: l,
    lgTeamPermissions: T,
    org: c,
    user: E,
    selectedTab: t
  }) : jsx(hL, {
    team: l
  }) : null : jsx(LoadingOverlay, {});
}
function hM({
  team: e,
  lgTeamPermissions: t,
  org: r,
  user: o,
  selectedTab: l
}) {
  let d;
  let {
    canAdminOrg,
    canAdminTeam,
    canEditTeam,
    canReadTeam,
    isInTeam,
    canDeleteTeam
  } = t;
  let [{
    status: x,
    data: b
  }] = setupResourceAtomHandler(Xg({
    teamId: e?.id
  }), {
    revalidateOnMount: !0
  });
  let v = x === 'loaded';
  let y = e.id;
  let w = vt(y);
  let j = _$$R3(y);
  let T = jn();
  let E = useSelector(e => e.teamBilling);
  let C = useDispatch();
  let S = getSelectedView();
  let k = useCallback(t => {
    let r = {
      view: 'team',
      teamId: e ? e.id : '',
      teamViewTab: t
    };
    C(selectViewAction(r));
  }, [C, e]);
  let R = useSelector(e => e.avatarEditorState);
  let A = useSelector(e => e.teamRoleRequests);
  let O = useMemo(() => {
    if (e && canReadTeam) {
      switch (e.org_access) {
        case FAccessLevelType.PRIVATE:
          return getI18nString('file_browser.team_header.closed_team_header');
        case FAccessLevelType.SECRET:
          return getI18nString('file_browser.team_header.secret_team_header');
      }
    }
  }, [e, canReadTeam]);
  let F = useMemo(() => {
    if (e && canReadTeam) {
      if (e.org_access === FAccessLevelType.PRIVATE) return getI18nString('file_browser.team_header.closed_team_subtitle');
      if (e.org_access === FAccessLevelType.SECRET) return getI18nString('file_browser.team_header.secret_team_subtitle');
    }
  }, [e, canReadTeam]);
  let P = useCallback((t, r, a) => {
    if (e) {
      let s = {
        team: e,
        entrypoint: 'team_page_view',
        sectionId: a,
        favoriteId: r
      };
      t ? C(DN(s)) : C(_$$ox(s));
    }
  }, [C, e]);
  let L = () => {
    C(SX({
      where: FolderViewType.FolderListView,
      team: {
        ...e,
        canEdit: !!t.canEditTeam
      }
    }));
  };
  let D = () => {
    C(hideDropdownAction());
    G();
    k(NavigationRoutes.SETTINGS);
  };
  let M = _$$s8();
  let B = useCallback(() => {
    M({
      teamId: y,
      canAdmin: t.canAdminTeam
    });
  }, [M, y, t.canAdminTeam]);
  let U = e ? {
    team: e,
    billing: E,
    teamId: e.id
  } : void 0;
  let W = {
    view: 'team',
    teamId: y,
    teamViewTab: NavigationRoutes.HOME
  };
  let $ = _$$n6(_$$am.MEMBERS, U, !!t.canAdminTeam, !!t.canEditTeam, !!t.canReadTeam, W);
  let G = _$$n6(_$$am.SETTINGS, U, !!t.canAdminTeam, !!t.canEditTeam, !!t.canReadTeam, W);
  useEffect(() => {
    l === NavigationRoutes.MEMBERS ? $() : l === NavigationRoutes.SETTINGS && G();
  }, []);
  kF('Team');
  WX({
    markName: 'MainBodyContent',
    isLoaded: v,
    contextArgs: {
      numFolders: b?.length ?? null
    }
  });
  d = e.org_id ? v ? jsxs(Fragment, {
    children: [jsx(mv, {
      canAdminTeam,
      canEditTeamContents: canEditTeam,
      folderList: b || [],
      isEligbileForProTeamLockedRevampUI: j,
      onCreateNewFolder: L,
      selectedView: S,
      team: e,
      teamId: y,
      viewId: `team-${y}`
    }), jsx(_$$cx, {})]
  }) : jsx(LoadingOverlay, {}) : jsx(Fragment, {
    children: v ? jsxs(Fragment, {
      children: [jsx(mv, {
        canAdminTeam,
        canEditTeamContents: canEditTeam,
        folderList: b || [],
        isEligbileForProTeamLockedRevampUI: j,
        onCreateNewFolder: L,
        selectedView: S,
        team: e,
        teamId: y,
        viewId: `team-${y}`
      }), jsx(_$$cx, {})]
    }) : jsx(LoadingOverlay, {})
  });
  let V = t.canAdminTeam ? jsx(FL, {
    entity: e,
    entityType: _$$ck2.TEAM,
    avatarEditorState: R,
    size: 40,
    dispatch: C,
    avatarSvg: _$$A4,
    svgSizeRatio: 0.6
  }) : jsx(_$$nl, {
    team: e,
    size: 40,
    avatarSvg: _$$A4,
    svgSizeRatio: 0.6
  });
  let z = !canReadTeam;
  let K = _$$F8();
  let Y = (() => {
    if (z) return;
    let t = K({
      onChangeTeamIconClick: () => {
        C(_$$o8({
          team: e
        }));
      },
      onRenameClick: () => {
        C(showModalHandler({
          type: _$$h0(),
          data: {
            team: e
          }
        }));
      },
      selectedTeamPermissions: {
        canAdmin: canAdminTeam,
        canAdminOrg,
        canDelete: canDeleteTeam,
        canView: canReadTeam,
        isInTeam
      },
      team: e
    });
    let a = [];
    return (U && (canEditTeam && (r || a.push({
      displayText: getI18nString('teams_table.view_team_members'),
      onClick: $
    }), a.push({
      displayText: getI18nString('team_view.settings.view_settings'),
      onClick: D
    })), r && a.push({
      displayText: getI18nString('teams_table.view_team_members'),
      onClick: $
    })), a.length > 0) ? [{
      key: 'team-page-header-menu-items',
      items: a
    }, ...t] : t;
  })();
  let J = Y ? {
    kind: _$$A9.CUSTOM,
    key: iq.DROPDOWN,
    element: jsx(ns, {
      buttonAriaLabel: getI18nString('team_view.page_header_dropdown_label'),
      dropdownKey: `team-${e.id}`,
      menuGroups: Y
    })
  } : void 0;
  let q = e.pro_team;
  let X = e.student_team ? jsx(h_, {}) : hasTeamPaidAccess(e) ? void 0 : jsx(hp, {
    team: e
  });
  return jsx(_$$r4, {
    content: jsxs(Fragment, {
      children: [d, X]
    }),
    viewbar: jsx(hF, {}),
    banner: jsx(_X, {
      teamId: y,
      selectedTab: l
    }),
    header: jsx(iV, {
      avatar: V,
      title: e.name,
      rightSideActions: function (e, t, r, s, i, o, l, d, c) {
        let u = [];
        let m = !!Object.keys(o).includes(e.id) && o[e.id]?.status === _$$c8.PENDING;
        let _ = i.canAdminTeam && !i.isInTeam;
        let p = {
          kind: _$$A9.CUSTOM,
          key: iq.FAVORITE,
          element: jsx(_$$i2, {
            setFavorite: s,
            favoriteType: FEntityType.TEAM,
            resourceId: e.id,
            orgId: e.org_id,
            size: 'lg'
          })
        };
        _ && u.push({
          kind: _$$A9.CUSTOM,
          key: iq.JOIN_TEAM,
          element: jsx(_$$c2, {
            variant: 'secondary',
            onClick: GR(t, e.id, AccessLevelEnum.ADMIN),
            children: getI18nString('file_browser.team.join_team')
          })
        });
        let f = c ? KindEnum.TEXT : void 0;
        let g = c ? getI18nString('locked_team.label.tooltip') : void 0;
        i.canEditTeam && !isExternalRestricted(r, e.org_id) ? u.push({
          kind: _$$A9.CUSTOM,
          key: iq.NEW_PROJECT,
          element: jsx('div', {
            'data-tooltip': g,
            'data-tooltip-type': f,
            'children': jsx(_$$c2, {
              'data-onboarding-key': 'team-view-new-project-cta',
              'data-testid': 'team-view-new-project-cta',
              'variant': 'primary',
              'disabled': c,
              'aria-label': getI18nString('project_creation.create_project'),
              'iconPrefix': jsx(_$$x2, {}),
              'onClick': () => {
                t(SX({
                  team: {
                    ...e,
                    canEdit: i.canEditTeam
                  },
                  where: FolderViewType.FolderListView
                }));
              },
              'children': renderI18nText('file_browser.team.add_project')
            })
          }),
          showOnMobile: !0
        }) : !e.org_id || e.org_access === FAccessLevelType.SECRET || _ || i.canAdminTeam || u.push({
          kind: _$$A9.CUSTOM,
          key: iq.REQUEST_TO_EDIT,
          element: jsx(_$$c2, {
            variant: 'primary',
            onClick: () => {
              m ? t(_$$lT({
                requestId: o[e.id]?.id
              })) : t(showModalHandler({
                type: _$$$7,
                data: {
                  team: e,
                  requesterCurrentLevel: AccessLevelEnum.VIEWER
                }
              }));
            },
            children: m ? getI18nString('file_browser.team.cancel_request') : getI18nString('file_browser.team.request_to_edit')
          })
        });
        u.push({
          kind: _$$A9.CUSTOM,
          key: iq.INVITE,
          element: jsx(_$$c2, {
            variant: 'secondary',
            onClick: c ? _$$lQ : d,
            disabled: c,
            htmlAttributes: {
              'data-tooltip': g,
              'data-tooltip-type': f
            },
            children: getI18nString('file_browser.team.share')
          })
        });
        e.org_id && u.push(p);
        let h = jsx(hf, {
          dropdownKey: 'team-overflow-dropdown',
          team: e,
          showInvite: !0,
          onInviteClick: d,
          onMembersClick: l,
          setFavorite: s
        });
        u.push({
          kind: _$$A9.CUSTOM,
          key: iq.TEAM_OVERFLOW_MENU,
          showOnMobile: !0,
          hideOnDesktop: !0,
          element: h
        });
        return u;
      }(e, C, o, P, t, A, e => {
        e.stopPropagation();
        C(hideDropdownAction());
        $();
        k(NavigationRoutes.MEMBERS);
      }, B, !!y && w || T),
      rightSideOfTitleAction: J,
      pageHeaderIcon: void 0,
      badge: jsxs(AutoLayout, {
        direction: 'horizontal',
        children: [O ? jsx('div', {
          'className': cssBuilderInstance.ml4.mr4.$,
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': O,
          'data-tooltip-offset-y': -4,
          'data-tooltip-timeout-delay': 50,
          'data-tooltip-max-width': 200,
          'data-tooltip-subtext': F,
          'children': jsx(_$$$4, {})
        }) : void 0, q ? jsx(Fragment, {
          children: jsx(TrackingProvider, {
            name: BadgeLabels.PROFESSIONAL,
            properties: _$$S10.getTrackingProperties(y),
            children: jsx(TrackedButton, {
              type: 'button',
              onClick: () => {
                C(showModalHandler({
                  type: hk,
                  data: {
                    teamId: e.id
                  }
                }));
              },
              className: 'team_page_view--pointerOnHover--at7fp',
              children: jsx(Badge, {
                color: BadgeColor.INFORMATIONAL,
                text: getI18nString('pro_onboarding.professional'),
                size: BadgeSize.EXTRA_LARGE
              })
            })
          })
        }) : void 0]
      })
    })
  });
}
let hJ = {
  ctrlKey: 'metaKey'
};
function hq(e, t = {}) {
  let r = useDispatch();
  let a = useStore();
  let n = useMemo(() => ({
    metaKey: e => {
      let t = getSelectedViewUrl(a.getState(), e);
      r(openUrlInContext({
        url: t
      }));
    },
    ...t
  }), [t, r, a]);
  return useCallback((t, a) => {
    let s = e(a);
    let i = Object.keys(n).find(e => t[e]);
    if (i) {
      let e = n[BrowserInfo.mac ? i : hJ[i] || i];
      if (e) {
        t.preventDefault();
        e(s);
        return;
      }
    }
    r(selectViewAction(s));
  }, [n, r, e]);
}
let h0 = 'org_user_meta_content--teamsHeader--1p4jT org_user_meta_content--sectionHeader--snmkw text--fontPos13--xW8hS text--_fontBase--QdLsd';
function h1(e) {
  let t = useDispatch();
  let r = selectCurrentUser();
  let s = _$$w7(e.user);
  let n = useSelector(t => t.currentUserOrgId === e.orgId);
  let o = () => {
    t(showModalHandler({
      type: _$$u0
    }));
  };
  return jsx('div', {
    className: cssBuilderInstance.flex.flexColumn.ml16.hFull.$,
    children: jsx(_$$x8, {
      isLoading: e.isLoading,
      children: () => jsxs(Fragment, {
        children: [jsxs('div', {
          className: 'org_user_meta_content--userData--NrFpt',
          children: [jsx(H8, {
            user: e.user,
            size: Pf.LARGE
          }), jsx('div', {
            className: 'org_user_meta_content--userName--JeBfv text--fontPos18--rYXJb text--_fontBase--QdLsd',
            children: e.title
          }), e.user.profile?.job_title && jsxs('div', {
            className: 'org_user_meta_content--jobTitle--bWmsS text--fontPos11--2LvXf text--_fontBase--QdLsd',
            children: [jsx(Badge, {
              color: BadgeColor.INVERT,
              text: getJobRoleDisplay(e.user.profile?.job_title)
            }), e.userId === r?.id && jsx('span', {
              className: 'org_user_meta_content--blueLink--u44PB blue_link--blueLink--9rlnd',
              role: 'button',
              tabIndex: 0,
              onClick: o,
              children: renderI18nText('internal_profile.change_job_title')
            })]
          }), e.user.email && jsx('div', {
            className: 'org_user_meta_content--email--tgx7t text--fontPos13--xW8hS text--_fontBase--QdLsd',
            children: e.user.email
          }), (e.description || !e.isReadOnly) && jsx(TI, {
            value: e.description ?? '',
            placeholder: getI18nString('internal_profile.add_a_description'),
            submit: e.submitDescription,
            formatter: qU,
            readOnly: e.isReadOnly,
            className: 'org_user_meta_content--description--gYuxd text--fontPos13--xW8hS text--_fontBase--QdLsd'
          })]
        }), s && e.user?.id === r?.id && jsx(h6, {
          user: e.user
        }), n && jsxs(_$$P2, {
          className: cssBuilderInstance.flexShrink1.bt1.bSolid.colorBorder.$,
          innerClassName: cssBuilderInstance.p16.borderBox.flex.flexColumn.$,
          children: [jsx('div', {
            className: h0,
            children: renderI18nText('internal_profile.teams')
          }), jsx(h3, {
            userId: e.userId,
            orgId: e.orgId
          }), jsx('div', {
            className: h0,
            children: renderI18nText('internal_profile.recent_projects')
          }), jsx(h5, {
            files: e.recents,
            isYourProfile: !e.isReadOnly
          })]
        })]
      })
    })
  });
}
function h4(e) {
  let t = selectCurrentUser();
  let r = useDispatch();
  return jsx(h1, {
    submitDescription: t => {
      r(_$$yJ3({
        user: {
          id: e.userId,
          description: t
        },
        userInitiated: !0
      }));
    },
    isLoading: !e.user,
    isReadOnly: !t || t.id !== e.userId,
    description: e.user.description ?? null,
    title: e.user.name ?? e.user.handle ?? null,
    userId: e.userId,
    user: e.user,
    recents: e.recents,
    orgId: e.orgId
  });
}
function h2(e) {
  let t = useDispatch();
  let r = selectCurrentUser();
  return jsx(h1, {
    isLoading: !e.user || !e.orgUser || !e.org,
    isReadOnly: !r || r.id !== e.userId,
    description: (e.orgId && e.orgUser ? e.orgUser.description : e.user.description) ?? null,
    title: e.user && e.org ? getI18nString('internal_profile.title', {
      userName: e.user.handle,
      orgName: e.org.name
    }) : null,
    recents: e.recents,
    submitDescription: r => {
      e.orgId && e.orgUser && t(_$$yJ2({
        orgUser: {
          id: e.orgUser.id,
          org_id: e.orgId,
          description: r
        },
        userInitiated: !0
      }));
    },
    user: e.user,
    userId: e.userId,
    orgId: e.orgId
  });
}
function h5(e) {
  let t = hq(e => ({
    view: 'folder',
    folderId: e
  }));
  let r = useMemo(() => {
    let t = new Set();
    for (let r of e.files.status === APILoadingStatus.SUCCESS ? e.files.value : []) r.folder_id && t.add(r.folder_id);
    return Array.from(t).slice(0, 10);
  }, [e.files]);
  let i = _$$Cm(r, e.files.status === APILoadingStatus.SUCCESS && !!e.files.value);
  let n = useMemo(() => {
    if (e.files.status !== APILoadingStatus.SUCCESS || i.status === 'loading') return [];
    let t = [];
    let a = [];
    if (!e.files) return t;
    let s = new Set();
    for (let n of e.files.value) {
      let e = n.folder_id;
      if (!e || s.has(e) || !r.includes(e) || (s.add(e), n.folder_name === '' || n.folder_name == null)) continue;
      let o = !!i?.data?.[e];
      let l = {
        id: e,
        name: n.folder_name,
        teamName: n.team_name,
        canView: o
      };
      if (l.canView ? t.push(l) : a.push(l), t.length + a.length >= 5) break;
    }
    return t.concat(a);
  }, [e.files, i, r]);
  return jsx(_$$x8, {
    isLoading: e.files.status === APILoadingStatus.LOADING || i.status === 'loading',
    children: () => jsxs('div', {
      children: [n.length === 0 && jsx('div', {
        className: 'org_user_meta_content--projectEmptyState--zusT6 text--fontPos11--2LvXf text--_fontBase--QdLsd',
        children: e.isYourProfile ? getI18nString('internal_profile.your_recent_projects_will_appear_here') : getI18nString('internal_profile.their_recent_projects_will_appear_here')
      }), n.map(e => jsx('div', {
        onClick: e.canView ? r => t(r, e.id) : void 0,
        className: e.canView ? 'org_user_meta_content--project--t-Nos org_user_meta_content--projectBase--ofeuj text--fontPos13--xW8hS text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa' : 'org_user_meta_content--dimProject--a1lrh org_user_meta_content--dim--aNVfK org_user_meta_content--projectBase--ofeuj text--fontPos13--xW8hS text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa',
        children: jsx('span', {
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': e.canView ? void 0 : getI18nString('internal_profile.you_must_be_a_member_of_team_name', {
            teamName: e.teamName
          }),
          'children': e.name
        })
      }, e.id))]
    })
  });
}
function h8(e) {
  return jsxs('div', {
    className: 'org_user_meta_content--userProfileNotification--qHv4P',
    children: [jsx('div', {
      className: 'org_user_meta_content--userProfileNotificationTitle--lDm8h text--fontNeg11--StdFq text--_fontBase--QdLsd text--_negText--j9g-L',
      children: e.title
    }), jsx('div', {
      className: 'org_user_meta_content--userProfileNotificationText--H2ZHJ text--fontNeg11--StdFq text--_fontBase--QdLsd text--_negText--j9g-L',
      children: e.text
    }), jsx('div', {
      className: 'org_user_meta_content--userProfileNotificationAction--NQLlj',
      children: e.action
    })]
  });
}
function h6(e) {
  let {
    profile
  } = e.user;
  let r = useDispatch();
  return jsx(Fragment, {
    children: profile?.images ? null : jsx(h8, {
      title: getI18nString('internal_profile.profile_image_nudge.title'),
      text: getI18nString('internal_profile.profile_image_nudge.text'),
      action: jsx(BaseLinkComponent, {
        trusted: !0,
        className: 'org_user_meta_content--userProfileNotificationActionLink--sVVav',
        onClick: () => {
          r(_$$X3({
            entity: e.user,
            entityType: _$$ck2.CURRENT_USER,
            shape: 'CIRCLE'
          }));
          logAndTrackCTA({
            trackingContext: _$$e7.FILE_BROWSER,
            context: 'job_title',
            text: 'Update Photo'
          });
        },
        children: renderI18nText('internal_profile.profile_image_nudge.action')
      })
    })
  });
}
let h3 = connect((e, t) => ({
  permissionState: e
}))(e => {
  let [t, r] = useState(null);
  useEffect(() => {
    UserAPIHandlers.getTeams({
      userId: e.userId,
      orgId: e.orgId || void 0
    }).then(e => {
      r(e.data.meta);
    }).catch(e => {
      console.error('Unable to load org user teams', e);
    });
  }, [e.userId, e.orgId]);
  let i = useMemo(() => (t || []).slice(0, 10), [t]);
  let n = GG(i.map(e => e.id), !!i);
  let o = hq(e => ({
    view: 'team',
    teamId: e.id
  }));
  let l = (i || []).sort((e, t) => {
    let r = n.data?.[e.id];
    let a = n.data?.[t.id];
    return r && !a ? -1 : !r && a ? 1 : 0;
  });
  let d = !i || n.status !== 'loaded';
  return jsx(_$$x8, {
    isLoading: d,
    children: () => jsxs('div', {
      className: cssBuilderInstance.flex.flexColumn.gap8.$,
      children: [l.map(e => {
        let t = n.data?.[e.id];
        return jsx(_$$rE, {
          'entity': e,
          'size': 12,
          'hideFallbackInitial': !0,
          'onClick': t ? o : void 0,
          'className': `org_user_meta_content--teamListItem--gXcF- text--fontPos13--xW8hS text--_fontBase--QdLsd ${t ? '' : 'org_user_meta_content--dim--aNVfK'}`,
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': t ? void 0 : getI18nString('internal_profile.you_re_not_a_member_of_this_team'),
          'data-tooltip-offset-y': 4
        }, e.id);
      }), i && i.length === 0 && renderI18nText('internal_profile.no_teams_in_common'), t && t.length > 10 && jsx('div', {
        className: 'org_user_meta_content--numOtherTeamsRow--aAVva',
        children: renderI18nText('internal_profile.N_other_teams', {
          numOtherTeams: t.length - 10
        })
      })]
    })
  });
});
function h9(e) {
  let t = filterPublishedResources(e.publishedPlugins);
  let r = filterResourcesByOrgOrPublisher(filterResourcesByMatch(t, e.userId), e.org);
  let s = Object.keys(r).map(e => r[e]);
  let i = sortByCreatedAt(s);
  return i.length === 0 ? null : jsxs(Fragment, {
    children: [jsx('div', {
      className: 'user_org_resources--sectionHeader--MUg1j internal_user_profile_page_view--sectionHeader--3NNNT text--fontPos13--xW8hS text--_fontBase--QdLsd',
      children: renderI18nText('file_browser.settings.plugins_published', {
        orgName: e.org.name
      })
    }), jsxs('div', {
      className: 'user_org_resources--container---l25- profile_resources_grid--_resourcesGridTemplateColumns--19JO6',
      children: [i.map(e => jsx(_$$cS2, {
        pluginId: e.id,
        showInstallCount: !0,
        viewContext: 'UserOrgResources'
      }, `plugin-${e.id}`)), jsx(_$$hT2, {
        numResources: i.length
      })]
    })]
  });
}
function xe(e) {
  let {
    org
  } = e;
  let r = useSelector(r => (org && org.id && r.orgUsersByOrgId[org.id] || {})[e.user.id]);
  return org ? jsx(h2, {
    orgId: org.id,
    recents: e.recents,
    userId: e.user.id,
    user: e.user,
    org,
    orgUser: r
  }) : jsx(h4, {
    orgId: null,
    recents: e.recents,
    userId: e.user.id,
    user: e.user
  });
}
let xt = {
  showInFolder: !0,
  open: !0,
  openNewTab: !0,
  restoreFromVersion: !0,
  rename: !0,
  share: !0,
  copyLink: !0,
  duplicateToDrafts: !0,
  delete: !0,
  removeFromRecents: !1,
  createBranch: !0,
  publishOrgTemplate: !1,
  moveFile: !0,
  pinToWorkspace: !1
};
let xr = e => {
  let t = e.user.id;
  let r = useDispatch();
  let l = useSelector(e => e.selectedView);
  let d = e.orgUser && e.orgUser.org_id;
  let c = useSelector(e => e.currentUserOrgId);
  let u = void 0 === d ? c : d;
  let m = useSelector(e => u && e.orgById[u] || null);
  let _ = getFeatureFlags().xr_debounce_threshold && m;
  let f = l.view === 'user' ? l.userViewTab : void 0;
  useEffect(() => {
    r(hideSpecificModal({
      type: _$$E1
    }));
  }, [r, f]);
  let g = useSelector(e => e.userFlags);
  useEffect(() => {
    g.seen_profile || r(postUserFlag({
      seen_profile: !0
    }));
  }, [r, g.seen_profile]);
  let h = useSelector(e => e.tileSortFilterStateByView.user);
  let x = useMemo(() => ({
    srcTileSortFilterConfig: {
      filters: {
        creator: PermissionType.ANY,
        fileType: FileType.ANY
      },
      sort: {
        key: SortField.ACCESSED_AT,
        dir: SortOrder.DESC
      }
    },
    tileSortFilterConfig: h,
    sortKeys: [SortField.NAME, SortField.CREATED_AT, SortField.ACCESSED_AT]
  }), [h]);
  let b = useMemo(() => {
    let e = new URLSearchParams();
    u && e.append('org_id', u);
    return `/api/user/${t}/recents${e.toString() === '' ? '' : '?'}${e.toString()}`;
  }, [t, u]);
  let [v, y] = useState([]);
  let [w, j] = useState([]);
  let [T, I] = useState(!0);
  let [C, S] = useState(null);
  let [k, R] = useState(0);
  let [A, O] = useState(0);
  let F = useCallback(e => {
    S(e);
    r(VisualBellActions.enqueue({
      message: getI18nString('internal_profile.an_error_occurred'),
      error: !0
    }));
  }, [r]);
  let {
    fetchNext,
    hasMore
  } = usePaginatedApi(b, F, 55);
  let D = useCallback(async () => {
    if (!hasMore) return;
    let e = async () => {
      try {
        let e = await fetchNext();
        if (!Array.isArray(e)) return;
        getFeatureFlags().livegraph_user_profile_full_read || y(t => [...t, ...e]);
      } catch (e) {
        F(e);
      }
    };
    await e();
  }, [fetchNext, F, hasMore]);
  let {
    data,
    status,
    errors
  } = useSubscription(UserProfilePageView, {
    action: 'edit',
    userId: t,
    firstPageSize: 55,
    sortOrder: 'DESC'
  }, {
    enabled: !!getFeatureFlags().livegraph_user_profile_dark_read
  });
  useEffect(() => {
    if (errors?.length) {
      F(errors[0]);
      return;
    }
    if (status === 'loaded' && data.userPublic?.paginatedRecentFiles.status === 'loaded') {
      let e = data.userPublic?.paginatedRecentFiles.data;
      let t = [];
      for (let r of e || []) {
        r.file === null || r.file.parentOrgId !== u || r.file.isDraftFile || r.file.trashedAt !== null || t.push(function (e) {
          return {
            key: e.file.key,
            name: e.file.name,
            timestamp: e.actionAt.getTime() / 1e3,
            editor_type: e.file.editorType,
            folder_name: e.file.project?.name || '',
            folder_id: e.file.folderId,
            team_id: e.file.teamId,
            team_name: e.file.team?.name || '',
            thumbnail_url: e.file.signedThumbnailUrl,
            client_meta: e.file.clientMeta,
            thumbnail_guid: e.file.thumbnailGuid || null,
            edit_url: e.file.editUrl,
            source_file_name: e.file.sourceFile?.name || null,
            has_file_link_password: !!e.file.hasFileLinkPassword,
            link_access: e.file.linkAccess
          };
        }(r));
      }
      getFeatureFlags().livegraph_user_profile_full_read && y(t);
      j(t);
      t.length < 55 && A < 3 && e?.hasNextPage() && !e?.isLoadingNextPage && (e?.loadNext(55), O(e => e + 1), I(!1));
    }
  }, [data, status, errors, F, u, A]);
  useEffect(() => {
    (async () => {
      v.length < 55 && k < 3 && (await D(), R(e => e + 1), I(!1));
    })();
  }, [k]);
  useShadowRead({
    oldValue: v,
    newValue: w,
    label: adminPermissionConfig.InternalUserProfilePageView.InternalUserProfileViewInner,
    oldValueReady: v.length >= 55 || k >= 3,
    newValueReady: data?.userPublic?.paginatedRecentFiles.status === 'loaded' && (w.length >= 55 || A >= 3),
    enableShadowRead: !!getFeatureFlags().livegraph_user_profile_dark_read,
    comparator: defaultComparator({
      ignore: e => e.includes('handoff_url') || e.includes('timestamp') || e.includes('thumbnail_url') || e.includes('link_access') || e.includes('has_file_link_password')
    })
  });
  let W = useMemo(() => v.filter(e => {
    switch (h.filters.fileType) {
      case FileType.ANY:
        return !0;
      case FileType.DESIGN:
        return e.editor_type === 'design';
      case FileType.FIGJAM:
        return e.editor_type === 'whiteboard';
      case FileType.PROTOTYPE:
        return !1;
      case FileType.SITES:
        return e.editor_type === 'sites';
      case FileType.SLIDES:
        return e.editor_type === 'slides';
      case FileType.COOPER:
        return e.editor_type === 'cooper';
      case FileType.MAKE:
        return e.editor_type === 'figmake';
      default:
        throwTypeError(h.filters.fileType);
    }
  }), [v, h]);
  let $ = useMemo(() => C ? {
    status: APILoadingStatus.FAILURE,
    error: C
  } : T ? {
    status: APILoadingStatus.LOADING
  } : {
    status: APILoadingStatus.SUCCESS,
    value: W
  }, [T, C, W]);
  let G = _$$J8(() => m && m.community_profile_id ? r(_$$pZ({
    profileId: m.community_profile_id
  })) : Promise.resolve([]), [r, m]);
  let V = l.view === 'user' && l.userViewTab === InterProfileType.INTERNAL_PROFILE_POSTS ? InterProfileType.INTERNAL_PROFILE_POSTS : InterProfileType.INTERNAL_PROFILE;
  let z = f === InterProfileType.INTERNAL_PROFILE ? [jsx('div', {
    className: 'internal_user_profile_page_view--hideFilterRightPadding--fd-Z-',
    children: jsx(ye, {
      config: x.tileSortFilterConfig
    })
  }, 'sort-filter')] : [];
  let [H, K, Y] = _$$t5.useManagedTabs({
    [InterProfileType.INTERNAL_PROFILE]: !0,
    [InterProfileType.INTERNAL_PROFILE_POSTS]: !0
  }, V, e => {
    r(selectViewAction({
      view: 'user',
      userId: t,
      userViewTab: e
    }));
  });
  let J = jsx(_$$g4, {
    leftSide: _ ? jsx(UI3ConditionalWrapper, {
      children: jsxs(_$$t5.TabStrip, {
        manager: Y,
        children: [jsx(_$$t5.Tab, {
          ...H[InterProfileType.INTERNAL_PROFILE],
          children: getI18nString('internal_profile.file_contributions')
        }, InterProfileType.INTERNAL_PROFILE), jsx(_$$t5.Tab, {
          ...H[InterProfileType.INTERNAL_PROFILE_POSTS],
          children: getI18nString('internal_profile.posts')
        }, InterProfileType.INTERNAL_PROFILE_POSTS)]
      })
    }) : jsx('div', {
      className: 'internal_user_profile_page_view--sectionHeader--3NNNT text--fontPos13--xW8hS text--_fontBase--QdLsd',
      children: renderI18nText('internal_profile.file_contributions')
    }),
    rightSide: z
  });
  let q = useCallback((e, t, a) => {
    u1({
      tile: e,
      index: a,
      dispatch: r,
      selectedView: l,
      isListView: !1
    });
  }, [l, r]);
  let {
    showing,
    show,
    data: _data
  } = _$$L2();
  let ee = useCallback((e, t, r) => {
    show({
      data: {
        tile: e,
        targetRect: {
          top: t.clientY,
          right: t.clientX,
          bottom: t.clientY,
          left: t.clientX,
          width: 1,
          height: 1
        },
        index: r
      }
    });
  }, [show]);
  let et = useMemo(() => $.status === APILoadingStatus.SUCCESS ? $.value.map(e => function (e) {
    let t = {
      ...e,
      name: e.source_file_name ? `${e.source_file_name}: ${e.name}` : e.name,
      description: null,
      created_at: '',
      url: '',
      creator_id: '',
      deleted_at: null,
      trashed_at: null,
      trashed_user_id: null,
      has_proto_link_password: !1,
      license: null,
      proto_link_access: null,
      touched_at: new Date(1e3 * e.timestamp).toString(),
      prototype_url: '',
      updated_at: '',
      file_repo_id: null,
      source_file_key: null,
      is_try_file: !1
    };
    return _$$fA(t);
  }(e)) : [], [$]);
  return wrapWithTracking(jsx(_$$r4, {
    scrollableContainerClass: 'internal_user_profile_page_view--pageContainer--FQu11',
    containerClass: 'internal_user_profile_page_view--pageContainerInner--2Ep2e',
    content: !e.userNotInPlan && jsxs('div', {
      className: 'internal_user_profile_page_view--content--X0lTp',
      children: [jsx('div', {
        className: 'internal_user_profile_page_view--viewbar--eprew',
        children: J
      }), f === InterProfileType.INTERNAL_PROFILE && (G.status === APILoadingStatus.SUCCESS && $.status === APILoadingStatus.SUCCESS ? jsxs(Fragment, {
        children: [m && jsx(h9, {
          userId: t,
          org: m,
          publishedPlugins: G.value
        }), jsxs(_$$P2, {
          children: [jsx(_$$d7, {
            items: et ?? [],
            handleOpenTile: q,
            handleOpenDropdown: ee,
            sortConfig: h.sort,
            viewType: ViewMode.GRID,
            gridContainerStyle: xs.grid,
            sortBy: _$$lQ
          }), (() => {
            let e = _data?.tile ?? null;
            return jsx(TrackingProvider, {
              name: _$$e7.TILES_VIEW_DROP_DOWN,
              enabled: showing,
              properties: {
                tileType: e?.type,
                tileFileId: e?.type === _$$nb.FILE ? e?.file.key : void 0
              },
              children: jsx(_$$i4, {
                tileActions: xt,
                selectedTiles: e ? [e] : [],
                tile: e,
                openTile: () => {
                  e?.type === _$$nb.FILE && openFileInFullscreen(r, e.file);
                },
                dropdownVisible: showing
              })
            });
          })()]
        })]
      }) : jsx(LoadingOverlay, {})), f === InterProfileType.INTERNAL_PROFILE_POSTS && m && jsx(un, {
        currentOrgId: m.id,
        selectedUser: e.user
      })]
    }),
    metaContent: jsx(xe, {
      user: e.user,
      recents: $,
      org: m,
      orgUser: e.orgUser
    })
  }), _$$e7.USER_DETAILS, {
    view: 'org_user',
    userId: t
  });
};
function xa(e) {
  return jsx(xr, {
    user: e.user,
    orgUser: e.orgUser,
    userNotInPlan: e.userNotInPlan
  }, e.user.id);
}
let xs = {
  grid: {
    paddingRight: 'x1m2p0i2',
    paddingLeft: 'x163pfp',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    paddingBottom: 'x1gan7if',
    $$css: !0
  }
};
let xi = (e, t, r) => e && e.id === r ? Promise.resolve(e) : UserAPIHandlers.getUser({
  userId: r
}).then(e => e.data.meta).catch(e => {
  t(FlashActions.error('Failed to get user', 5e3));
  console.warn('Failed to get user files');
  return e;
});
let xn = (e, t, r) => r ? e(I1({
  orgId: r,
  userId: t,
  allowNoOrgUser: !0
})) : Promise.resolve(null);
let xo = {
  [InterProfileType.INTERNAL_PROFILE]: {
    Component: xa
  },
  [InterProfileType.INTERNAL_PROFILE_POSTS]: {
    Component: xa
  },
  [InterProfileType.PLUGINS]: {
    Component: _$$Fragment
  }
};
function xl(e) {
  return jsx(e.component, {
    ...e.context
  });
}
function xd(e) {
  let t = useDispatch();
  let r = selectCurrentUser();
  let s = e.orgId;
  let o = useSelector(e => e.currentUserOrgId);
  let l = void 0 === s ? o : s;
  let d = useCurrentPrivilegedPlan('UserPageView').unwrapOr(null);
  let c = _$$J8(() => Promise.all([xi(r, t, e.userId), xn(t, e.userId, l)]).then(([r, a]) => (l && !a && t(VisualBellActions.enqueue({
    type: 'org_user_not_found',
    message: d?.name ? getI18nString('org_user_actions.org_user_not_found', {
      userHandle: r.handle,
      planName: d.name
    }) : getI18nString('org_user_actions.org_user_not_found_without_plan_name', {
      userHandle: r.handle
    }),
    error: !0,
    onDismiss: _$$lQ
  })), setEditorDocumentTitle(r.handle), {
    userNotInPlan: !!(l && !a),
    userId: e.userId,
    user: r,
    orgUser: a,
    profileHandle: r.community_profile_handle || null,
    on404Redirect: a ? () => {
      t(selectViewAction({
        view: 'user',
        userId: e.userId,
        orgId: l,
        userViewTab: InterProfileType.INTERNAL_PROFILE
      }));
    } : () => {
      customHistory.redirect('/404');
    }
  })), [t, r, l, e.userId, d]);
  let {
    tab
  } = e;
  if (!tab) return null;
  let {
    Component
  } = xo[tab];
  return jsx(_$$x8, {
    className: 'user_page_view--loadingContainer--vr9Zb',
    state: c,
    failure: void 0,
    children: t => jsx(xl, {
      component: Component,
      tab,
      userId: e.userId,
      context: t
    })
  });
}
function xc({
  workspaceId: e
}) {
  let t = useCurrentUserOrg();
  let r = _$$P(t.id, e);
  return r.status !== 'loaded' ? null : r.data === 'Unassigned' ? jsx(_$$A11, {
    children: jsx(xm, {
      org: t,
      workspaceId: e
    })
  }) : jsx(_$$A11, {
    children: jsx(xu, {
      org: t,
      workspaceId: e,
      workspace: r.data
    })
  });
}
function xu({
  org: e,
  workspaceId: t,
  workspace: r
}) {
  let s = ih(r);
  return jsx(xm, {
    org: e,
    workspaceId: t,
    parentBackgroundColor: s
  });
}
function xm({
  org: e,
  workspaceId: t,
  parentBackgroundColor: r
}) {
  let s = useDispatch();
  return jsx(jT, {
    text: e.name,
    parentBackgroundColor: r,
    onClick: r => {
      s(selectViewAction({
        view: 'org',
        orgId: e.id,
        orgViewTab: _$$X.HOME
      }));
      logAndTrackCTA({
        clickedResourceType: 'org',
        clickedResourceId: e.id,
        currentResource: t,
        orgId: e.id
      });
    }
  });
}
function x_({
  showingFileBrowserLoader: e
}) {
  let t = getSelectedView();
  useEffect(() => {
    trackFileBrowserPageVisit(t);
  }, [t]);
  let r = function () {
    let e = useDispatch();
    let t = selectUser();
    let r = useCurrentUserOrgId();
    let n = getSelectedView();
    let o = getCurrentTeamId();
    let l = useCurrentUserOrg();
    let d = useSelector(e => e.search);
    let c = function () {
      let e = eN({
        project: 'drafts'
      });
      return useCallback(({
        from: t
      }) => e ? [jsx(f7, {
        from: t
      }, t)] : [], [e]);
    }();
    switch (n.view) {
      case 'resourceHub':
        if (!isResourceHubEnabled()) return null;
        return {
          pageHeaderContent: jsx(cU, {}),
          pageContent: jsx(cD, {})
        };
      case 'deletedFiles':
        return {
          pageHeaderContent: getI18nString('file_browser.tool_bar.trash'),
          pageContent: wrapWithTracking(jsx(mj, {
            selectedTab: mw.FILES
          }, 'trashed'), _$$e7.FILE_BROWSER, {
            view: 'trashed'
          })
        };
      case 'litmus':
        if (!OF()) return null;
        switch (n.subView) {
          case 'projects':
            return {
              pageHeaderContent: 'Litmus',
              pageContent: jsx(AJ, {})
            };
          case 'feed':
            return {
              pageHeaderContent: 'Litmus',
              pageContent: jsx(YA, {})
            };
        }
      case 'trashedFolders':
        return {
          pageHeaderContent: getI18nString('file_browser.tool_bar.trash'),
          pageContent: wrapWithTracking(jsx(mj, {
            selectedTab: mw.FOLDERS
          }, 'trashed'), _$$e7.FILE_BROWSER, {
            view: 'trashed'
          })
        };
      case 'draftsToMove':
        return {
          pageHeaderContent: getI18nString('file_browser.tool_bar.drafts_to_move'),
          pageContent: jsx(_M, {}, 'draftsToMove')
        };
      case 'folder':
        if (n.folderId === t?.drafts_folder_id) {
          return {
            pageHeaderContent: getI18nString('file_browser.tool_bar.drafts'),
            pageHeaderActions: c({
              from: FileBrowserLocation.FILE_BROWSER_TOPBAR_DRAFTS
            }),
            pageContent: wrapWithTracking(jsx(_c, {
              folderId: n.folderId,
              userId: t.id
            }, 'drafts'), _$$e7.FILE_BROWSER_DRAFTS, {
              orgId: r,
              teamId: o
            })
          };
        }
        return {
          pageContent: wrapWithTracking(jsx(p8, {
            folderId: n.folderId
          }, `folder-${n.folderId}`), _$$e7.FOLDER_PAGE, {
            orgId: r,
            teamId: o,
            folderId: n.folderId
          }),
          pageHeaderContent: jsx(_z, {
            folderId: n.folderId
          }),
          pageHeaderDividerHidden: !0
        };
      case 'workspace':
        switch (n.subView) {
          case DUserRole.ADMIN:
            return {
              pageHeaderContent: jsx(xc, {
                workspaceId: n.workspaceId
              }),
              pageHeaderDividerHidden: !0,
              pageContent: wrapWithTracking(jsx(y$, {
                workspaceId: n.workspaceId,
                selectedTab: n.selectedTab
              }), _$$e7.WORKSPACE_ADMIN_SETTINGS_PAGE, {
                workspaceId: n.workspaceId,
                workspaceViewTab: n.selectedTab
              })
            };
          case DUserRole.DIRECTORY:
            return {
              pageHeaderContent: jsx(xc, {
                workspaceId: n.workspaceId ?? null
              }),
              pageHeaderDividerHidden: !0,
              pageContent: wrapWithTracking(n.workspaceId ? jsx(oR, {
                workspaceId: n.workspaceId
              }, n.workspaceId) : jsx(iZ, {}), _$$e7.WORKSPACE_DIRECTORY_PAGE, {
                workspaceId: n.workspaceId,
                workspaceGroupViewTab: n.selectedTab
              })
            };
          default:
            throwTypeError(n);
        }
      case 'licenseGroup':
        if (n.subView === UserGroupRole.ADMIN) {
          return {
            pageContent: wrapWithTracking(jsx(VY, {
              licenseGroupId: n.licenseGroupId,
              selectedTab: n.selectedTab
            }), _$$e7.LICENSE_GROUP_ADMIN_SETTINGS_PAGE, {
              licenseGroupId: n.licenseGroupId,
              licenseGroupViewTab: n.selectedTab
            })
          };
        }
        throwTypeError(n);
      case 'org':
        return {
          pageHeaderContent: l ? jsx(al, {}) : void 0,
          pageHeaderActions: [jsx(p9, {
            orgId: n.orgId
          }, 'org-page-header-actions')],
          pageContent: wrapWithTracking(jsx(fF, {
            orgId: n.orgId,
            selectedTab: n.orgViewTab
          }), _$$e7.ORG_PAGE, {
            orgId: n.orgId,
            orgViewTab: (n.orgViewTab === _$$X.HOME ? 'HOME' : n.orgViewTab) || ''
          })
        };
      case 'orgAdminSettings':
        let u = _$$aO(n.orgAdminSettingsViewTab, n.orgAdminSettingsViewSecondaryTab, {
          showResourceConnectionInviteModal: !!n.showResourceConnectionInviteModal,
          showResourceConnectionFlyout: !!n.showResourceConnectionFlyout
        });
        return {
          pageContent: wrapWithTracking(jsx(vW, {
            selectedTab: n.orgAdminSettingsViewTab,
            selectedSecondaryTab: u,
            selectedExtensionId: n.selectedExtensionId,
            selectedWorkspaceId: n.selectedWorkspaceId,
            showResourceConnectionInviteModal: n.showResourceConnectionInviteModal,
            showResourceConnectionFlyout: n.showResourceConnectionFlyout
          }), _$$e7.ORG_ADMIN_SETTINGS_PAGE, {
            orgId: r,
            orgViewTab: n.orgAdminSettingsViewTab,
            source: n.orgAdminSettingsViewTab || 'dashboard',
            orgViewSecondaryTab: u
          })
        };
      case 'abandonedDraftFiles':
        return {
          pageContent: wrapWithTracking(jsx(_$$dZ, {
            abandonedDraftFolderId: n.abandonedDraftFolderId,
            planType: n.adminPlanType,
            planId: n.planId
          }), _$$e7.ABANDONED_DRAFTS_PAGE, n.adminPlanType === OrganizationType.ORG ? {
            orgId: n.planId
          } : {
            teamId: n.planId
          })
        };
      case 'orgDomainManagement':
        let m = jsxs(_$$A11, {
          children: [jsx(J5, {
            text: getI18nString('general.admin'),
            onClick: () => {
              e(selectViewAction({
                view: 'orgAdminSettings',
                orgAdminSettingsViewTab: DashboardSection.DASHBOARD
              }));
            },
            hasTrailingDivider: !0
          }), jsx(J5, {
            text: getI18nString('org_dashboard.settings'),
            onClick: () => {
              e(selectViewAction({
                view: 'orgAdminSettings',
                orgAdminSettingsViewTab: DashboardSection.SETTINGS
              }));
            },
            hasTrailingDivider: !1
          })]
        });
        return {
          pageContent: wrapWithTracking(jsx(Oe, {}), _$$e7.ORG_DOMAIN_MANAGEMENT_PAGE, {
            orgId: r
          }),
          pageHeaderContent: m
        };
      case 'billingGroupDashboard':
        return {
          pageContent: wrapWithTracking(jsx(wu, {
            selectedTab: n.selectedTab
          }), _$$e7.BILLING_GROUP_DASHBOARD_SETTINGS_PAGE, {
            orgId: r,
            orgViewTab: n.selectedTab
          })
        };
      case 'recentsAndSharing':
        let _ = n.tab ?? ViewTypeEnum.RECENTLY_VIEWED;
        let p = c({
          from: FileBrowserLocation.FILE_BROWSER_TOPBAR_RECENTS
        });
        return {
          pageHeaderContent: getI18nString('file_browser.tool_bar.recents'),
          pageHeaderActions: p,
          pageContent: wrapWithTracking(jsx(hi, {
            selectedTab: _,
            userId: t.id,
            accountModalTab: n.accountModalTab,
            emailPolicyToUnsubscribeFrom: n.emailPolicyToUnsubscribeFrom
          }), _$$e7.FILE_BROWSER, {
            view: 'recentsAndSharing',
            userSpace: r ? qo.ORG : qo.PERSONAL
          })
        };
      case 'resourceUnavailable':
        return {
          pageContent: jsx(_$$S4, {
            resourceType: n.resourceType
          })
        };
      case 'search':
        {
          let {
            searchScope,
            query
          } = d.parameters;
          let r = !BrowserInfo.mobile;
          return {
            pageHeaderContent: jsx(xp, {
              query
            }),
            pageContent: wrapWithTracking(jsx(bS, {}), _$$e7.UNIFIED_SEARCH, {
              showInternalModal: r && searchScope !== SpaceAccessType.COMMUNITY,
              showCommunityModal: r && searchScope === SpaceAccessType.COMMUNITY
            })
          };
        }
      case 'seatRequests':
        return {
          pageContent: wrapWithTracking(jsx(_$$m, {}), _$$e7.SEAT_REQUESTS_PAGE, {
            orgId: r,
            teamId: o,
            planType: n.adminPlanType
          })
        };
      case 'limitedTeamSharedProjects':
        return {
          pageContent: jsx(p6, {})
        };
      case 'team':
        {
          let e = n.teamViewTab ?? NavigationRoutes.HOME;
          return {
            pageContent: wrapWithTracking(jsx(hD, {
              teamId: n.teamId,
              selectedTab: e,
              upgradeModalType: n.upgradeModalType,
              showProOnboardingModal: n.isProUpgrade,
              showResourceConnectionInviteModal: n.showResourceConnectionInviteModal
            }, `team-${n.teamId}`), _$$e7.TEAM_PAGE, {
              teamId: n.teamId,
              userSpace: r ? qo.ORG : qo.PERSONAL,
              orgId: r
            }),
            pageHeaderContent: jsx(ho, {
              teamId: n.teamId
            }),
            pageHeaderDividerHidden: !0
          };
        }
      case 'teamAdminConsole':
        {
          let e = n.teamAdminConsoleViewTab ?? (n.isProTeam ? DashboardSections.DASHBOARD : DashboardSections.MEMBERS);
          let t = resolveDashboardSection(e, n.teamAdminConsoleViewSecondaryTab, {
            showResourceConnectionInviteModal: !!n.showResourceConnectionInviteModal,
            showResourceConnectionFlyout: !!n.showResourceConnectionFlyout
          });
          return {
            pageContent: wrapWithTracking(jsx(JC, {
              teamId: n.teamId,
              selectedTab: e,
              selectedSecondaryTab: t,
              showResourceConnectionInviteModal: n.showResourceConnectionInviteModal,
              showResourceConnectionFlyout: n.showResourceConnectionFlyout
            }), _$$e7.TEAM_ADMIN_PAGE, {
              teamId: n.teamId,
              teamAdminConsoleViewTab: e,
              teamAdminConsoleViewSecondaryTab: t
            })
          };
        }
      case 'teamFeed':
        return {
          pageHeaderContent: jsx(_$$A11, {
            children: jsx(J5, {
              text: getI18nString('fig_feed.feed'),
              onClick: () => {
                e(selectViewAction({
                  view: 'teamFeed'
                }));
              },
              hasTrailingDivider: !1
            })
          }),
          pageContent: jsx(xf, {
            postUuid: n.postUuid,
            creatorId: n.creatorId
          })
        };
      case 'user':
        return {
          pageHeaderContent: getI18nString('internal_profile.profile'),
          pageHeaderActions: t.community_profile_handle && t.id === n.userId ? [jsx(fD, {}, 'viewCommunityProfileAction')] : void 0,
          pageContent: jsx(xd, {
            userId: n.userId,
            tab: n.userViewTab,
            orgId: n.orgId
          })
        };
      case 'orgIdpManagement':
        let f = jsxs(_$$A11, {
          children: [jsx(J5, {
            text: getI18nString('general.admin'),
            onClick: () => {
              e(selectViewAction({
                view: 'orgAdminSettings',
                orgAdminSettingsViewTab: DashboardSection.DASHBOARD
              }));
            },
            hasTrailingDivider: !0
          }), jsx(J5, {
            text: getI18nString('org_dashboard.settings'),
            onClick: () => {
              e(selectViewAction({
                view: 'orgAdminSettings',
                orgAdminSettingsViewTab: DashboardSection.SETTINGS
              }));
            },
            hasTrailingDivider: !1
          })]
        });
        return {
          pageContent: wrapWithTracking(jsx(T3, {}), _$$e7.ORG_IDP_MANAGEMENT_PAGE, {
            orgId: r
          }),
          pageHeaderContent: f
        };
      default:
        return null;
    }
  }();
  if (!r) return null;
  let {
    CustomPageLayout,
    pageContent
  } = r;
  return CustomPageLayout ? jsx(mI, {
    children: jsx(CustomPageLayout, {
      children: !e && pageContent
    })
  }) : jsx(mI, {
    children: jsx(iN, {
      showingFileBrowserLoader: e,
      pageHeaderContent: r.pageHeaderContent,
      pageHeaderActions: r.pageHeaderActions,
      pageHeaderDividerHidden: r.pageHeaderDividerHidden,
      children: pageContent
    })
  });
}
function xp(e) {
  return e.query ? jsxs('div', {
    className: cssBuilderInstance.flex.columnGap8.$,
    children: [jsx('span', {
      className: cssBuilderInstance.flexShrink0.$,
      children: jsx(TextWithTruncation, {
        color: 'secondary',
        children: renderI18nText('search.search_results_for')
      })
    }), jsxs('div', {
      className: cssBuilderInstance.flex.fontMedium.minW0.$,
      children: ['\u201C', jsx(TextWithTruncation, {
        truncate: !0,
        children: e.query
      }), '\u201D']
    })]
  }) : jsx('div', {
    className: cssBuilderInstance.flex.columnGap8.$,
    children: jsx('span', {
      className: cssBuilderInstance.flexShrink0.$,
      children: jsx(TextWithTruncation, {
        color: 'secondary',
        children: renderI18nText('search.search_results')
      })
    })
  });
}
function xf(e) {
  return _$$w5() ? jsx(u_, {
    postUuid: e.postUuid,
    creatorId: e.creatorId
  }) : null;
}
let xj = 'add_collaborators--emailListItem--dnvC-';
function xT({
  selectedView: e
}) {
  let [t, r] = useState(['', '', '']);
  let n = useSelector(t => t.teams[e.teamId]);
  let o = useSelector(e => e.teamCreation);
  let l = useSelector(e => e.payment);
  let d = useDispatch();
  let c = useCallback(() => {
    n && d(selectViewAction({
      view: 'team',
      teamId: n.id
    }));
  }, [d, n]);
  let u = useCallback((e, a) => {
    if (a >= t.length) return;
    let s = [...t];
    s[a] = e;
    r(s);
  }, [t]);
  let m = useCallback(() => {
    r([...t, '']);
  }, [t]);
  let _ = useCallback(() => {
    let e = !!o.isEduTeam;
    l.promo ? d(_$$g_2({
      teamId: n.id,
      teamName: n.name,
      previousView: {
        view: 'team',
        teamId: n.id
      }
    })) : e ? d(Vm({
      teamId: n.id,
      showBreadcrumbs: !0
    })) : d(selectViewAction({
      view: 'teamUpgrade',
      teamFlowType: UpgradeAction.UPGRADE_EXISTING_TEAM,
      teamId: n.id,
      paymentStep: UpgradeSteps.UPGRADE_NEW_TEAM,
      previousView: {
        view: 'team',
        teamId: n.id
      },
      planType: TeamType.TEAM
    }));
  }, [d, n, l.promo, o.isEduTeam]);
  let p = useCallback(() => t.filter(e => e).map(e => e.trim()), [t]);
  let f = useCallback(() => {
    d(_$$rq2({
      emails: p(),
      resourceType: FResourceCategoryType.TEAM,
      resourceIdOrKey: n.id,
      level: AccessLevelEnum.EDITOR,
      teamId: n.id,
      onSuccess: () => {
        d(setTeamCreationLoadingAction({
          loading: !1
        }));
        _();
      }
    }));
  }, [p, n, _, d]);
  return jsx(TrackingProvider, {
    name: 'Add Collaborators',
    properties: {
      teamId: n?.id
    },
    children: jsx('div', {
      children: jsxs(_$$O6, {
        menu: jsx(_$$X7, {
          onClick: c,
          children: jsx(SvgComponent, {
            svg: _$$A16,
            className: 'add_collaborators--modalCloseX--sJGp5'
          })
        }),
        children: [jsx(_$$J9, {
          index: 2
        }), jsx(_$$JR, {
          children: renderI18nText('team_creation.add_your_collaborators')
        }), jsx(Kh, {
          children: renderI18nText('team_creation.you_can_update_user_permissions_on_the_team_page_after_setting_up')
        }), jsxs('div', {
          className: 'add_collaborators--formContainer--zTKXv',
          children: [jsx('div', {
            className: 'add_collaborators--emailInputsContainer--19ZBc',
            children: t.map((e, t) => jsx(BigTextInput, {
              className: xj,
              value: e,
              onChange: e => u(e.target.value, t),
              maxLength: 255,
              placeholder: getI18nString('team_creation.email')
            }, `collaborator-email-input-${t}`))
          }), jsx(ButtonSecondary, {
            className: xj,
            onClick: m,
            children: renderI18nText('team_creation.add_another')
          }), jsx('div', {
            className: 'add_collaborators--spacing--2VA7s'
          }), jsxs('div', {
            className: 'add_collaborators--ctaContainer--VGMvb',
            children: [jsx(BigButtonPrimaryTracked, {
              disabled: p().length === 0,
              onClick: f,
              trackingProperties: {
                numCollaborators: p().length
              },
              children: renderI18nText('team_creation.continue')
            }), jsx(clickableBaseLinkTracked, {
              onClick: _,
              trusted: !0,
              children: renderI18nText('team_creation.skip_for_now')
            })]
          })]
        })]
      })
    })
  });
}
let xA = ['folder', 'team', 'search', 'recentsAndSharing'];
function xO() {
  let e = useSelector(e => e.autosave);
  let t = getSelectedView();
  let r = yZ();
  let {
    unsyncedFiles,
    localUnsyncedFiles
  } = useAutosaveFilesWithPermissions();
  return !r || e.lastSnoozeTime != null && Date.now() - e.lastSnoozeTime < 864e5 ? null : (unsyncedFiles.length > 0 || localUnsyncedFiles.length > 0) && xA.includes(t.view) ? jsx(xP, {
    unsyncedFiles,
    localUnsyncedFiles
  }) : null;
}
let xF = !1;
function xP(e) {
  let t = useDispatch();
  useEffect(() => {
    let e = () => {
      t(Jw());
    };
    ipcStorageHandler.register(restoredAutosaveKey, e);
    return function () {
      ipcStorageHandler.unregister(restoredAutosaveKey, e);
      t(hideSpecificModal({
        type: EO.type
      }));
    };
  }, [t]);
  let r = getSelectedView();
  let [n, o] = useState(!1);
  useEffect(() => {
    xF || (xF = !0, sendAutosaveNotification());
    n || (o(!0), trackEventAnalytics('Autosave Notification', {
      hasUnsyncedFiles: e.unsyncedFiles.length > 0,
      hasLocalUnsyncedFiles: e.localUnsyncedFiles.length > 0,
      firstUnsyncedFile: e.unsyncedFiles.length > 0 ? e.unsyncedFiles[0].fileKey : null,
      firstLocalUnsyncedFile: e.localUnsyncedFiles.length > 0 ? e.localUnsyncedFiles[0].fileKey : null,
      view: r.view
    }, {
      forwardToDatadog: !0
    }));
  }, [t, e.unsyncedFiles, e.localUnsyncedFiles, n, r]);
  let l = selectCurrentUser();
  let d = [...e.unsyncedFiles, ...e.localUnsyncedFiles];
  if (d.length === 0 || !l) return jsx(Fragment, {});
  let c = d.length > 1;
  let m = d[0];
  let _ = isAutosaveFile(m) ? m.file.name : m.name;
  let p = _.length > 40 ? `${_.substring(0, 40)}\u2026` : _;
  let f = c ? getI18nString('autosave.notification.message.more_than_one_file') : getI18nString('autosave.notification.message.one_file', {
    fileName: p
  });
  let g = c ? renderI18nText('autosave.notification.action_review') : renderI18nText('autosave.notification.action_open_to_sync');
  return jsxs('div', {
    className: 'autosave_notification--notification--u3sx0 text--_negText--j9g-L',
    children: [jsx(SvgComponent, {
      className: 'autosave_notification--icon--uvtXB',
      svg: _$$A29,
      width: '24',
      height: '24'
    }), jsx('div', {
      className: 'autosave_notification--message--yAhFz',
      children: f
    }), jsxs('div', {
      className: 'autosave_notification--actions--dk-yq',
      children: [jsx('div', {
        className: 'autosave_notification--mainAction--sidqJ autosave_notification--action--Brz-5',
        onClick: () => {
          c ? t(showModalHandler({
            type: EO
          })) : isAutosaveFile(m) ? customHistory.redirect(getDesignFileUrlConditional(fileEntityDataMapper.toLiveGraph(m.file), !0), '_blank') : t(NA({
            file: m,
            openNewFileIn: TabOpenBehavior.NEW_TAB,
            source: NotificationType.AUTOSAVE_NOTIFICATION
          }));
        },
        children: g
      }), jsx('div', {
        className: 'autosave_notification--action--Brz-5',
        onClick: () => {
          trackEventAnalytics('Autosave Notification Snooze', {
            files: d.length,
            firstFile: m.fileKey
          });
          t(_$$zE(Date.now()));
        },
        children: renderI18nText('autosave.notification.action_later')
      })]
    })]
  });
}
let xD = 'team-org-access-dropdown';
function xM(e) {
  let t = useDispatch();
  let r = e.dropdownShown && e.dropdownShown.type === xD;
  return jsxs('div', {
    className: 'team_org_access_dropdown--orgAccess--JAIwP',
    children: [jsxs('button', {
      className: 'team_org_access_dropdown--select--lqx54',
      onClick: e => {
        e.stopPropagation();
        e.preventDefault();
        r ? t(hideDropdownAction()) : t(showDropdownThunk({
          type: xD
        }));
      },
      children: [getAccessLevelLabels()[e.orgAccess], jsx(SvgComponent, {
        svg: _$$A5,
        className: 'team_org_access_dropdown--downCaret--INuva'
      })]
    }), r && jsx('div', {
      className: 'team_org_access_dropdown--orgAccessDropdownContainer--iVvqn',
      children: jsxs(_$$ms, {
        className: 'team_org_access_dropdown--orgAccessDropdown--zJupm',
        children: [jsx(MM, {
          checked: e.orgAccess === FAccessLevelType.PUBLIC,
          onClick: () => {
            e.onChangeOrgAccess(FAccessLevelType.PUBLIC);
          },
          children: getAccessLevelLabels()[FAccessLevelType.PUBLIC]
        }), jsx(MM, {
          checked: e.orgAccess === FAccessLevelType.PRIVATE,
          onClick: () => {
            e.onChangeOrgAccess(FAccessLevelType.PRIVATE);
          },
          children: getAccessLevelLabels()[FAccessLevelType.PRIVATE]
        }), jsx(MM, {
          checked: e.orgAccess === FAccessLevelType.SECRET,
          onClick: () => {
            e.onChangeOrgAccess(FAccessLevelType.SECRET);
          },
          children: getAccessLevelLabels()[FAccessLevelType.SECRET]
        })]
      })
    })]
  });
}
let xB = 'team_creation--createTeamText--VjY8f';
function xU({
  currentTeamId: e,
  currentUserOrgId: t,
  user: r,
  selectedView: n,
  dropdownShown: o,
  teamCreation: l,
  orgById: d
}) {
  let c;
  let m = useDispatch();
  let [_, p] = useState(null);
  let [f, g] = useState(FAccessLevelType.PUBLIC);
  let h = n.ignoreCurrentPlan;
  let x = t && !h ? d[t] : null;
  let b = !e && !t;
  let v = useRef(null);
  useEffect(() => {
    if (v.current) {
      for (let e = 0; e < v.current.elements.length; e++) {
        let t = v.current.elements[e];
        if (!t.value) {
          t.focus();
          break;
        }
      }
    }
    t && !h && trackEventAnalytics('team_creation_started', {
      user_id: r?.id ?? '',
      org_id: t
    });
  }, [t, r, h]);
  let y = e => {
    e.preventDefault();
    e.stopPropagation();
    _ ? (m(_$$KQ({
      teamName: _,
      orgAccess: f,
      dontRedirect: !!n.onSubmitReturnToPrevView,
      ignoreCurrentPlan: h
    })), n.onSubmitReturnToPrevView && m(selectViewAction(getPreviousSelectedView() || {
      view: 'recentsAndSharing'
    }))) : m(FlashActions.error(getI18nString('team_creation.your_team_name_cannot_be_empty')));
  };
  let w = !(t && !h) && !n.onSubmitReturnToPrevView;
  let j = b ? null : jsx(_$$X7, {
    onClick: () => {
      m(selectViewAction(getPreviousSelectedView() || {
        view: 'recentsAndSharing'
      }));
    },
    children: jsx(SvgComponent, {
      svg: _$$A16,
      className: 'team_creation--modalCloseX--TTg32'
    })
  });
  return jsx(TrackingProvider, {
    name: 'Team Creation',
    children: jsx('div', {
      children: jsxs(_$$O6, {
        menu: j,
        children: [w && jsx(_$$J9, {
          index: 1
        }), jsxs('form', {
          ref: v,
          onSubmit: y,
          children: [jsx(_$$JR, {
            children: renderI18nText('team_creation.create_a_team_title')
          }), jsxs('div', {
            className: 'team_creation--newTeamContainer--43mWz team_creation--newTeamContainerBase--nwYzU',
            children: [jsxs('div', {
              className: 'team_creation--teamNameContainer--B6Pc3',
              children: [jsx('div', {
                className: 'team_creation--teamNameLabel--ohZWy',
                children: renderI18nText('team_creation.team_name_label')
              }), jsx(BigTextInput, {
                value: _ || '',
                onChange: e => {
                  p(e.target.value);
                },
                className: 'team_creation--newTeamInput--PdjEW',
                maxLength: 255,
                placeholder: getI18nString('team_creation.team_name_input_placeholder')
              })]
            }), x ? jsxs('div', {
              className: 'team_creation--orgTeamSettings--bDW2R',
              children: [jsxs('div', {
                className: cssBuilderInstance.flex.$,
                children: [jsx('div', {
                  className: cssBuilderInstance.fontSemiBold.$,
                  children: renderI18nText('team_creation.access_within_the_organization')
                }), jsx(xM, {
                  orgAccess: f,
                  dropdownShown: o,
                  onChangeOrgAccess: e => {
                    g(e);
                  }
                })]
              }), jsx('div', {
                className: xB,
                children: (c = x.name, {
                  [FAccessLevelType.PUBLIC]: renderI18nText('org_access_strings.public.description_with_org_name', {
                    orgName: c
                  }),
                  [FAccessLevelType.PRIVATE]: renderI18nText('org_access_strings.closed.description_with_org_name', {
                    orgName: c
                  }),
                  [FAccessLevelType.SECRET]: renderI18nText('org_access_strings.secret.description_with_org_name', {
                    disclaimerLabel: jsx('span', {
                      className: cssBuilderInstance.fontSemiBold.$,
                      children: renderI18nText('org_access_strings.secret.description.disclaimer_label')
                    }),
                    orgName: c
                  })
                })[f]
              })]
            }) : jsx('div', {
              className: xB,
              children: renderI18nText('team_creation.after_creating_a_team_you_can_invite_others_to_join')
            }), jsx(BigButtonPrimaryTracked, {
              className: t ? 'team_creation--createTeamButtonOrg--2rnOw' : 'team_creation--createTeamButton--C8IV7',
              type: 'submit',
              disabled: l.loading,
              onClick: y,
              children: renderI18nText('team_creation.create_team_button')
            })]
          })]
        })]
      })
    })
  });
}
function xW({
  selectedView: e
}) {
  let t = useDispatch();
  let r = useCurrentUserOrgId();
  let s = useSelector(e => e.orgById);
  let n = selectCurrentUser();
  let o = useSelector(e => e.currentTeamId);
  let l = Um();
  let d = useSelector(e => e.teamCreation);
  return isExternalRestricted(n, r) ? (customHistory.redirect('/'), t(FlashActions.error(getI18nString('team_creation.missing_team_creation_controls'))), null) : jsx(xU, {
    currentTeamId: o,
    currentUserOrgId: r,
    user: n,
    dropdownShown: l,
    teamCreation: d,
    orgById: s,
    selectedView: e
  });
}
let x$ = 'team_restore--page--cMEe2';
let xG = 'team_restore--section--AmfWe';
let xV = 'team_restore--button--C-gOz';
function xz({
  selectedView: e
}) {
  let t;
  let r;
  let n = useDispatch();
  let [o, l] = useState(!1);
  let d = e.teamId;
  let c = useSelector(e => e.teams[d]);
  useEffect(() => {
    l(!0);
    teamAPIClient.getDeleted({
      teamId: d
    }).then(({
      data: e
    }) => {
      n(postTeamAction({
        team: e.meta
      }));
      l(!1);
    }).catch(e => {
      e.status !== 400 && (n(selectViewAction({
        view: 'recentsAndSharing'
      })), n(FlashActions.error(`${e.data.message}`)));
      l(!1);
    });
  }, [n, d]);
  let u = () => {
    n(selectViewAction({
      view: 'recentsAndSharing'
    }));
  };
  let m = jsx(ButtonBasePrimaryTracked, {
    className: xV,
    onClick: u,
    children: renderI18nText('team_restore.back')
  });
  if (c) {
    if (c.deleted_at) {
      let e = _$$A3(c.deleted_at).add(28, 'days').toDate();
      t = getI18nString('team_restore.confirm_restore_header', {
        teamName: c.name
      });
      r = jsxs('div', {
        children: [renderI18nText('team_restore.confirm_restore'), jsx('br', {}), jsx('br', {}), renderI18nText('team_restore.confirm_restore_deadline', {
          deleteDeadline: e
        })]
      });
      m = jsx(ButtonBasePrimaryTracked, {
        className: xV,
        onClick: () => {
          n(restoreTeamThunk({
            teamId: d
          }));
        },
        children: renderI18nText('team_restore.restore')
      });
    } else {
      t = getI18nString('team_restore.ineligible');
      r = getI18nString('team_restore.questions_contact_support', {
        supportEmail: getSupportEmail()
      });
    }
  } else {
    if (o) {
      return jsx('div', {
        className: x$,
        children: jsx('div', {
          className: xG,
          children: jsx(LoadingSpinner, {})
        })
      });
    }
    t = getI18nString('team_restore.expired_header');
    r = jsxs('div', {
      children: [renderI18nText('team_restore.expired'), jsx('br', {}), jsx('br', {}), renderI18nText('team_restore.questions_contact_support', {
        supportEmail: getSupportEmail()
      })]
    });
  }
  return jsx(TrackingProvider, {
    name: 'Team Restore',
    properties: {
      teamId: d
    },
    children: jsx(_$$O6, {
      menu: jsx(SvgComponent, {
        svg: _$$A16,
        onClick: u,
        className: 'team_restore--modalCloseX--XNErW'
      }),
      children: jsx('div', {
        className: x$,
        children: jsxs('div', {
          className: xG,
          children: [jsx('div', {
            className: 'team_restore--header--NgU8v text--fontPos20--Bcz97 text--_fontBase--QdLsd',
            children: t
          }), jsx('div', {
            className: 'team_restore--text--F18dW text--fontPos12--YsUAh text--_fontBase--QdLsd',
            children: r
          }), m]
        })
      })
    })
  });
}
function xq(e) {
  let t = selectCurrentUser();
  let [r, n] = useState(() => getUserCurrency());
  let o = UpsellModalType.UPGRADE_NEW_TEAM;
  let l = useDispatch();
  let d = _$$sx3();
  let c = (t, a) => {
    let s = e.selectedView;
    l(_$$WX({
      teamId: e.selectedView.teamId,
      selectedView: s,
      newTeam: !0,
      currency: r,
      billingPeriod: a
    }));
  };
  let u = e.selectedView.teamId === null ? void 0 : () => {
    let r = t?.id;
    if (r) {
      let t = {
        userId: r,
        orgId: null,
        teamId: e.selectedView.teamId
      };
      l(switchAccountAndNavigate({
        workspace: t,
        view: {
          view: 'allProjects'
        }
      }));
    } else {
      l(selectViewAction({
        view: 'team',
        teamId: e.selectedView.teamId
      }));
    }
  };
  let m = () => {
    l(Bq({
      currency: r,
      upsellSource: o
    }));
  };
  let _ = e => {
    n(e);
    l(hideDropdownAction());
  };
  let p = e.selectedView.teamId;
  let f = useRef(null);
  return jsx(TrackingProvider, {
    name: 'Upgrade Team',
    properties: {
      teamId: p,
      step: UpgradeSteps.UPGRADE_NEW_TEAM
    },
    children: jsx('div', {
      className: 'legacy_upgrade--teamUpgrade--auGJz',
      children: jsxs(_$$O6, {
        menu: jsx(_$$X7, {
          onClick: () => {
            let r = t?.id;
            let a = e.selectedView.teamId;
            let s = {
              view: 'recentsAndSharing'
            };
            r && a ? l(switchAccountAndNavigate({
              workspace: {
                userId: r,
                teamId: a,
                orgId: null
              },
              view: e.selectedView.previousView || s
            })) : l(selectViewAction(e.selectedView.previousView || s));
          },
          children: jsx(SvgComponent, {
            svg: _$$A16,
            className: 'legacy_upgrade--closeButton--zJ0JO'
          })
        }),
        pageRef: f,
        children: [jsx(_$$J9, {
          index: 3
        }), jsx(TrackingProvider, {
          name: 'Upgrade New Team',
          properties: {
            teamId: p,
            trackingDescriptor: UpgradeAction.UPGRADE_YOUR_TEAM
          },
          children: jsxs('div', {
            className: U()(e.className, 'step_upgrade_new_team--container--BixhQ'),
            children: [jsx(_$$JR, {
              className: 'step_upgrade_new_team--stepTitleComparisonChart--yyzB5 step_upgrade_new_team--stepTitle--yFYG8',
              children: jsx('span', {
                children: renderI18nText('plan_details.choose_your_team_plan')
              })
            }), d ? jsx('div', {
              className: cssBuilderInstance.mxAuto.$,
              style: styleBuilderInstance.add({
                width: '1049px'
              }).$,
              children: jsx(_$$P7, {
                upsellSource: o,
                currency: r,
                updateCurrency: _,
                chooseStarterPlan: u,
                chooseProPlan: e => c(null, e),
                chooseOrgPlan: m,
                planComparisonModalHeaderOverride: null
              })
            }) : jsx(_$$O7, {
              currency: r,
              chooseStarterPlan: u,
              chooseProPlan: e => c(null, e),
              chooseOrgPlan: m,
              updateCurrency: _,
              upsellSource: o,
              parentRef: f
            })]
          })
        })]
      })
    })
  });
}
class x8 extends PureComponent {
  constructor() {
    super(...arguments);
    this._isMounted = !1;
    this.timer = null;
    this.controller = new AbortController();
    this.payload = null;
    this.fetchScheduledDowntimeInfo = async () => {
      let e = this.controller?.signal;
      let t = buildUploadUrl('011a24693cd9b63ea5492d50d7713dfb7ed18ea6');
      let r = await fetch(t, {
        signal: e,
        cache: 'no-cache'
      });
      let a = await r.json();
      let s = {
        finished: a.finished,
        warningDurationMs: Number(a.warning_ms),
        notifDurationMs: Number(a.notif_ms),
        pollIntervalMinutes: Number(a.poll_interval_minutes),
        downtimeStartDate: new Date(`${a.timestamp} UTC`),
        minLengthMinutes: Number(a.estimated_length_min),
        maxLengthMinutes: Number(a.estimated_length_max),
        helpcenterUrl: a.helpcenter_url
      };
      getFeatureFlags().display_downtime_banner_force && (s.warningDurationMs *= 1e3, s.notifDurationMs *= 1e3);
      'hostname' in a && (s = {
        ...s,
        renderOnHostname: a.hostname
      });
      return s;
    };
    this.onTick = () => {
      this.payload != null && this.props.dispatch(_$$Z5.onTick({
        payload: this.payload,
        hostname: window.location.hostname,
        currentTimeMs: Date.now()
      }));
    };
    this.poll = async () => {
      for (; this._isMounted;) {
        try {
          let e = await this.fetchScheduledDowntimeInfo();
          this._isMounted && (this.payload = e, this.timer || (this.onTick(), this.timer = setInterval(this.onTick, 3e4)));
        } catch (e) {
          e.name !== 'AbortError' && console.warn(e);
        } finally {
          let e = this.payload && 60 * this.payload.pollIntervalMinutes || 900;
          await delay(1e3 * e);
        }
      }
    };
  }
  componentDidMount() {
    this._isMounted = !0;
    this.poll();
  }
  componentWillUnmount() {
    this._isMounted = !1;
    this.controller?.abort();
    this.timer && clearInterval(this.timer);
  }
  render() {
    return null;
  }
}
function x6(e) {
  let {
    dispatch,
    downtime
  } = e;
  let a = useCallback(e => () => {
    dispatch(e);
  }, [dispatch]);
  let i = useCallback((e, t) => () => {
    customHistory.unsafeRedirect(e, '_blank');
    a(t);
  }, [a]);
  let n = useCallback(e => getI18nString('downtime_banner.ongoing.figma_will_be_entering_a_maintenance_period', {
    minutes: e
  }), []);
  let l = useMemo(() => getI18nString('downtime_banner.ongoing.currently_undergoing_maintenance'), []);
  let d = useRef(e.notifications);
  let c = useCallback(() => {
    d.current.length > 0 && dispatch(notificationActions.dequeue({
      type: NotificationType.DOWNTIME
    }));
  }, [dispatch, d]);
  useEffect(() => {
    let {
      payload,
      status,
      hidingDowntimeNotif,
      notifMinutesRemaining
    } = downtime;
    if (getFeatureFlags().display_downtime_banner) {
      switch (status) {
        case _$$A30.Imminent:
        case _$$A30.Warning:
          if (payload && notifMinutesRemaining != null && hidingDowntimeNotif !== _$$y5.warningHidden) {
            let r = n(notifMinutesRemaining);
            let s = i(payload.helpcenterUrl, _$$Z5.hideWarningNotif());
            let o = a(_$$Z5.hideWarningNotif());
            dispatch(notificationActions.dequeue({
              type: NotificationType.DOWNTIME
            }));
            dispatch(notificationActions.enqueue({
              notification: {
                type: NotificationType.DOWNTIME,
                message: r,
                acceptCallback: s,
                dismissCallback: o
              }
            }));
          }
          break;
        case _$$A30.Ongoing:
          if (payload && hidingDowntimeNotif !== _$$y5.ongoingHidden) {
            let r = i(payload.helpcenterUrl, _$$Z5.hideOngoingNotif());
            let s = a(_$$Z5.hideOngoingNotif());
            dispatch(notificationActions.dequeue({
              type: NotificationType.DOWNTIME
            }));
            dispatch(notificationActions.enqueue({
              notification: {
                type: NotificationType.DOWNTIME,
                message: l,
                acceptCallback: r,
                dismissCallback: s
              }
            }));
          }
          break;
        case _$$A30.Finished:
          c();
      }
      return () => {
        c();
      };
    }
  }, [downtime, dispatch, n, i, a, l, c]);
  return null;
}
x8.displayName = 'DowntimePoller';
function x9() {
  let e = _$$W7();
  return jsx(_$$Y9, {
    prioritizedBanners: e,
    location: 'file_browser'
  });
}
function bt(e) {
  let t = useDispatch();
  let r = useSelector(e => e.fileImport.step);
  let n = B2().unwrapOr(!1);
  let [o, l] = useState(!1);
  let d = useCallback(() => l(!0), []);
  let c = useCallback(() => l(!1), []);
  let u = useCallback(e => {
    l(!1);
    n && t(b6(e));
  }, [t, n]);
  return jsxs(_$$Y, {
    className: cssBuilderInstance.flex.flexColumn.$,
    isDragTarget: _$$al,
    onTargetDragEnter: d,
    onTargetDragLeave: c,
    onTargetDrop: u,
    children: [e.children, n && jsx(br, {
      step: r,
      dragging: o
    })]
  });
}
function br({
  step: e,
  dragging: t
}) {
  switch (e) {
    case Y5.CONFIRM_PDF_IMPORT:
    case Y5.IMPORT_REPO:
      return null;
    case Y5.START:
    case Y5.FILE_IMPORT_WITH_CANCELED_PDF:
    case Y5.FILE_IMPORT_WITH_CONFIRMED_PDF:
      return jsx('div', {
        className: t ? 'file_browser_drop_zone--dragTargetDragging--giyPY file_browser_drop_zone--dragTargetNormal--TOR0f' : 'file_browser_drop_zone--dragTargetNormal--TOR0f'
      });
    default:
      throwTypeError(e);
  }
}
function ba(e) {
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: 'FileBrowserDropZone',
    fallback: jsx(Fragment, {
      children: e.children
    }),
    team: _$$e.WAYFINDING,
    children: jsx(bt, {
      ...e
    })
  });
}
let bs = 'file_browser_view--filebrowserHtml--v2BLN';
let bi = 'file_browser_view--filebrowserBody--6MX2i';
let bn = 'file_browser_view--desktop--5VrC1';
export function $$bo0() {
  let e = useDispatch();
  let t = useCurrentUserOrgId();
  let r = Um();
  let E = selectCurrentUser();
  let I = getSelectedView();
  let C = fileBrowserPageManager.useIsLoading();
  let S = useSelector(e => e.payment);
  let k = useSelector(e => e.currentTeamId);
  let R = _$$d2();
  let A = useSelector(e => e.downtime);
  let O = useSelector(e => e.notifications);
  !function () {
    let e = useStore();
    let t = useMemo(() => generateUUIDv4(), []);
    let r = useSubscription(AssetTransferReloadView, {
      cacheNonce: t
    });
    useEffect(() => {
      if (r.status === 'loaded' && r.data.currentUser.assetTransferReload.status === _$$tT.Loaded) {
        let t = getResourceDataOrFallback(r.data.currentUser.assetTransferReload);
        if (!t) return;
        let a = getInitialOptions().user_data?.id;
        let s = e.getState();
        let i = s.selectedView.view === 'folder' && s.selectedView.folderId === t.folderId;
        let n = s.selectedView.view === 'team' && s.selectedView.teamId === t.teamId;
        let o = s.selectedView.view === 'folder' && s.folders[s.selectedView.folderId];
        let l = o && o.team_id === t.teamId;
        let d = t.folderId ? i : n || l;
        let c = {
          view: 'folder',
          folderId: t.folderId || ''
        };
        let u = {
          view: 'team',
          teamId: t.teamId || '',
          teamViewTab: NavigationRoutes.HOME
        };
        if (a && t.userId === a) {
          let r = {
            userId: t.userId,
            orgId: t.destOrgId
          };
          let a = t.folderId ? c : u;
          if (d) {
            let s = t.folderId ? getI18nString('realtime.asset_reload.project_has_been_transferred_redirecting') : getI18nString('realtime.asset_reload.team_has_been_transferred_redirecting');
            e.dispatch(VisualBellActions.enqueue({
              message: s
            }));
            setTimeout(() => {
              e.dispatch(switchAccountAndNavigate({
                workspace: r,
                view: a
              }));
            }, 2e3);
          } else {
            e.dispatch(handleOrgMigration({
              reason: 'asset transfer reload',
              delay: ReloadReasonEnum.DEFAULT
            }));
          }
        }
      }
    }, [e, r]);
  }();
  Tf.enableEventSending({
    allowResourceTracking: !0
  });
  _$$h(() => {
    E && e(Jw());
  });
  setupResourceAtomHandler(XZ({
    currentOrgId: t ?? void 0,
    currentTeamId: k ?? void 0,
    fileTags: ['figjam_template', 'figma_basics']
  }), {
    enabled: getFeatureFlags().create_starter_files_from_file_browser && teamViews.includes(I.view)
  });
  let [F, P] = useState(0);
  let [L, D] = useState(0);
  let [M, B] = useState(!1);
  _$$h(() => (document.body.classList.add(bi), document.documentElement.classList.add(bs), $o(), trackFileBrowserLoaded(I, t, k, R), getExperimentConfigAsync('exp_aa_test_file_browser_view').catch(_$$lQ), () => {
    document.body.classList.remove(bi);
    document.documentElement.classList.remove(bs);
    $E();
    e(hideModalHandler());
  }));
  useEffect(() => {
    if (desktopAPIInstance || isChromebookTabbed()) {
      let e = document.createElement('div');
      e.classList.add('file_browser_view--desktopBackground--kte3I');
      document.body.appendChild(e);
      document.body.classList.add(bn);
      return () => {
        document.body.classList.remove(bn);
        document.body.removeChild(e);
      };
    }
  }, []);
  let U = useLatestRef(I);
  useEffect(() => {
    U && U !== I && (SW(U, I) && window.scrollTo(0, 0), M ? B(!1) : (P(L + 1), D(L + 1)));
  }, [U, I, M, L]);
  useEffect(() => {
    I.view === 'teamCreation' && I.fromNewTab && e(openCreateTeamFlow({
      previousView: I.previousView,
      onSubmitReturnToPrevView: I.onSubmitReturnToPrevView,
      isEduTeam: I.isEduTeam,
      ignoreCurrentPlan: !0
    }));
  }, [I, e]);
  let W = isMobilePlatformNotFigmaMobile;
  if (!function () {
    let e = getSelectedView();
    let t = useDispatch();
    let r = getUserId();
    let a = null;
    (e.view === 'teamUpgrade' || e.view === 'promoReview' || e.view === 'eduReview') && (a = e.teamId);
    let n = useSubscription(TeamUpgradePermissions(a ? {
      teamId: a
    } : null));
    let o = useMemo(() => n.transform(({
      team: e
    }) => {
      if (!e) return !1;
      let t = !isTeamSubscribed(e) || _$$ng2.getProTrialStatusLG(e) === _$$a10.IN_TRIAL;
      return e.canAdmin || e.canEdit && t;
    }), [n]);
    useEffect(() => {
      o.status === 'loaded' && !o.data && a && (r ? t(switchAccountAndNavigate({
        workspace: {
          userId: r,
          teamId: a,
          orgId: null
        },
        view: {
          view: 'allProjects'
        }
      })) : t(selectViewAction({
        view: 'team',
        teamId: a
      })));
    }, [r, t, o.data, o.status, a]);
  }(), I.view === 'teamUpgrade') {
    return I.paymentStep === UpgradeSteps.UPGRADE_NEW_TEAM ? jsx(xq, {
      selectedView: I
    }) : jsx(_$$q, {
      selectedView: I
    });
  }
  if (I.view === 'teamCreation') {
    return I.fromNewTab ? null : jsx(xW, {
      selectedView: I
    });
  }
  if (I.view === 'addCollaborators') {
    return jsx(xT, {
      selectedView: I
    });
  }
  if (I.view === 'orgSelfServe') {
    return jsx(_$$G, {
      step: I.step || OnboardingStepEnum.Initial,
      initialDesignSeats: I.initialDesignEditors || 0,
      orgMigrated: !!I.orgMigrated,
      dropdownShown: r,
      newTeamProps: I.newTeamProps,
      upsellSource: I.upsellSource,
      entryPoint: I.entryPoint
    });
  }
  if (I.view === 'teamRestore') {
    return jsx(xz, {
      selectedView: I
    });
  }
  if (I.view === 'promoReview') {
    return jsx(_$$z, {
      promo: S?.promo,
      selectedView: I
    });
  }
  if (I.view === 'eduReview') {
    return jsx(_$$w, {
      selectedView: I
    });
  }
  return E ? t || k ? jsxs(_$$C7.Provider, {
    value: {
      goBack: () => {
        L > 0 && (history.back(), D(L - 1), B(!0));
      },
      goForward: () => {
        L < F && (history.forward(), D(L + 1), B(!0));
      },
      canGoBack: L > 0,
      canGoForward: L < F
    },
    children: [W && jsx(_$$R, {
      userIdForTracking: E?.id
    }), jsxs(ba, {
      children: [jsx(x9, {}), jsx(x6, {
        downtime: A,
        notifications: O,
        dispatch: e
      }), jsx(xO, {}), jsx(x_, {
        showingFileBrowserLoader: C
      })]
    })]
  }) : (console.error('No current organization or team plan set for user. Redirecting to /files'), customHistory.redirect('/files'), null) : (console.error(`Signed out page: unrecognized route ${customHistory.location.pathname}, redirecting to /`), customHistory.redirect('/'), null);
}
export const FileBrowserView = $$bo0;