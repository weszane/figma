import { Ay as _$$Ay3, xk } from '@stylexjs/stylex';
import F from 'classnames';
import { Fragment as _$$Fragment, Children, cloneElement, createContext, createElement, forwardRef, isValidElement, memo, PureComponent, Suspense, useCallback, useDeferredValue, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { H as _$$H3 } from 'react-dom';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import _require5 from '../6db9f521/460010';
import _require3 from '../7a72fc59/824430';
import _require from '../451de8f0/94979';
import { reportError, captureException } from '../905/11';
import { consumptionPaywallUtils } from '../905/224';
import { s as _$$s5 } from '../905/6512';
import { a as _$$a1 } from '../905/10468';
import { D as _$$D7 } from '../905/12032';
import { L as _$$L3 } from '../905/13390';
import { isNullOrFailure, isLoading } from '../905/18797';
import { P4 as _$$P2 } from '../905/18800';
import { useMemoCustom, useMemoStable, useStableMemo } from '../905/19536';
import { a as _$$a8 } from '../905/29104';
import { z4 } from '../905/37051';
import { ModalRootComponent } from '../905/38914';
import { yx } from '../905/41973';
import { d as _$$d7 } from '../905/68441';
import { resourceDataAndPresetKeysV2SetAtom } from '../905/72677';
import { t } from '../905/78171';
import { an as _$$an, y$ } from '../905/81009';
import { x as _$$x } from '../905/89282';
import { X as _$$X } from '../905/91006';
import { FP as _$$FP } from '../905/98947';
import { m as _$$m3 } from '../905/99004';
import { selectWithShallowEqual } from '../905/103090';
import { x as _$$x6 } from '../905/106997';
import { g as _$$g4 } from '../905/125190';
import { fullscreenPerfManager } from '../905/125218';
import { GI, Vi } from '../905/125333';
import { y as _$$y3 } from '../905/129046';
import { KindEnum } from '../905/129884';
import { a as _$$a4, J as _$$J } from '../905/142348';
import { E as _$$E2 } from '../905/142894';
import { t as _$$t2 } from '../905/150656';
import { M as _$$M2 } from '../905/152487';
import { showModalHandler } from '../905/156213';
import { ox as _$$ox } from '../905/163832';
import { ServiceCategories as _$$e } from '../905/165054';
import { UpsellModalType } from '../905/165519';
import { m as _$$m2 } from '../905/168176';
import { NotificationType } from '../905/170564';
import { P as _$$P3 } from '../905/175083';
import { g as _$$g2 } from '../905/181093';
import { Y as _$$Y3 } from '../905/185567';
import { ThemeContext } from '../905/187165';
import { LO } from '../905/189279';
import { AUTH_COMPLETE } from '../905/194276';
import { W as _$$W4 } from '../905/200727';
import { h as _$$h9 } from '../905/207101';
import { Z as _$$Z2 } from '../905/224161';
import { AE, Nn } from '../905/225144';
import { C as _$$C2 } from '../905/226458';
import { nt as _$$nt, o3 as _$$o } from '../905/226610';
import { delay } from '../905/236856';
import { x as _$$x2 } from '../905/239551';
import { d as _$$d6 } from '../905/241150';
import { l as _$$l4 } from '../905/241412';
import { W as _$$W3 } from '../905/244810';
import { trackAuthEvent } from '../905/248178';
import { H as _$$H2 } from '../905/250770';
import { A as _$$A9 } from '../905/251970';
import { $7, o8 as _$$o4, B_, QB } from '../905/258397';
import { F as _$$F2 } from '../905/258517';
import { PluginUIManager } from '../905/261467';
import { F as _$$F } from '../905/268366';
import { Label } from '../905/270045';
import { memoizeWithDeepEquality } from '../905/270781';
import { b as _$$b } from '../905/275748';
import { E as _$$E8 } from '../905/277716';
import { handleUrlAction } from '../905/280005';
import { h as _$$h5 } from '../905/284399';
import { V as _$$V2 } from '../905/292707';
import { e as _$$e1 } from '../905/295932';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { R as _$$R5 } from '../905/304671';
import { b as _$$b3, c as _$$c3 } from '../905/308099';
import { nr as _$$nr, Op } from '../905/337355';
import { L as _$$L2 } from '../905/348758';
import { X as _$$X4 } from '../905/350405';
import { V as _$$V4 } from '../905/355181';
import { BannerMessage } from '../905/363675';
import { n as _$$n } from '../905/366526';
import { UpgradeAction } from '../905/370443';
import { selectCurrentUser, getUserId } from '../905/372672';
import { k as _$$k2 } from '../905/381239';
import { deepEqual } from '../905/382883';
import { e as _$$e10 } from '../905/383776';
import { h as _$$h6 } from '../905/388624';
import { A as _$$A0 } from '../905/389851';
import { transformAtom } from '../905/401885';
import { U as _$$U2 } from '../905/405962';
import { x as _$$x4 } from '../905/407439';
import { debugState } from '../905/407919';
import { LazyInputForwardRef } from '../905/408237';
import { A as _$$A8 } from '../905/408320';
import { browserCapabilities } from '../905/409121';
import { rq as _$$rq } from '../905/425180';
import { useModalManager } from '../905/437088';
import { N as _$$N6 } from '../905/438674';
import { W as _$$W2 } from '../905/442612';
import { IconButton } from '../905/443068';
import { k as _$$k4 } from '../905/443820';
import { NN, w4, y1 } from '../905/445814';
import { analyticsEventManager, getAnonymousId, trackEventAnalytics } from '../905/449184';
import { E as _$$E7 } from '../905/453826';
import { e as _$$e0 } from '../905/457828';
import { useMenu } from '../905/465888';
import { Q as _$$Q4 } from '../905/467310';
import { A as _$$A7 } from '../905/475480';
import { sendHistogram } from '../905/485103';
import { handleAtomEvent } from '../905/502364';
import { Y as _$$Y } from '../905/506207';
import { getCurrentPath } from '../905/508367';
import { hR, hW } from '../905/508457';
import { ProductAccessTypeEnum } from '../905/513035';
import { s as _$$s } from '../905/513506';
import { RR } from '../905/514666';
import { v as _$$v } from '../905/516963';
import { dD as _$$dD } from '../905/519113';
import { APILoadingStatus } from '../905/520829';
import { Button, ButtonLarge } from '../905/521428';
import { ex as _$$ex } from '../905/524523';
import { d as _$$d2 } from '../905/531325';
import { _T as _$$_T, E5, jv, k4, Yi } from '../905/531551';
import { B3, Sr } from '../905/535224';
import { globalPerfTimer } from '../905/542194';
import { N as _$$N3 } from '../905/544669';
import { lu as _$$lu } from '../905/545842';
import { U as _$$U3 } from '../905/566881';
import { d as _$$d8, O as _$$O } from '../905/572941';
import { FlashActions } from '../905/573154';
import { jO } from '../905/573265';
import { VisualBellIcon } from '../905/576487';
import { e as _$$e7 } from '../905/579635';
import { uo as _$$uo } from '../905/581543';
import { k as _$$k6 } from '../905/582200';
import { loadFeatureFlags } from '../905/586361';
import { c1 as _$$c2, SW } from '../905/589717';
import { nl as _$$nl2, H8, Pf } from '../905/590952';
import { K as _$$K } from '../905/591700';
import { h as _$$h4 } from '../905/593407';
import { useIsCanvasEditDisabled } from '../905/595131';
import { bL as _$$bL3, gZ, HG } from '../905/598775';
import { c as _$$c8 } from '../905/598842';
import { $z as _$$$z } from '../905/599896';
import { getFeatureFlags } from '../905/601108';
import { K as _$$K3 } from '../905/604638';
import { QL } from '../905/609392';
import { i as _$$i3 } from '../905/610691';
import { customHistory } from '../905/612521';
import { getDesignFileUrl } from '../905/612685';
import { setupThemeContext } from '../905/614223';
import { b as _$$b4, c as _$$c4 } from '../905/618904';
import { e as _$$e8 } from '../905/621515';
import { ButtonPrimitive } from '../905/632989';
import { parseAndNormalizeQuery, parseQuery, parseQuerySimple } from '../905/634134';
import { eo as _$$eo, fp as _$$fp, TX } from '../905/634218';
import { useCurrentTheme, getVisibleTheme, useThemeContext } from '../905/640017';
import { u as _$$u } from '../905/644087';
import { FeatureFlag, PageFolderFile } from '../905/652992';
import { getSessionStorage } from '../905/657224';
import { isLocalFileKey } from '../905/657242';
import { Z as _$$Z4 } from '../905/658753';
import { oW as _$$oW } from '../905/675859';
import { u as _$$u4 } from '../905/684425';
import { IM } from '../905/687477';
import { BannerButton } from '../905/692618';
import { isFigmascopeView } from '../905/694285';
import { e0 as _$$e9, qo } from '../905/696396';
import { getSingletonSceneGraph } from '../905/700578';
import { IT as _$$IT, liveStoreInstance } from '../905/713695';
import { z5 as _$$z, Nv } from '../905/713722';
import { XA } from '../905/714160';
import { SvgComponent } from '../905/714743';
import { l as _$$l } from '../905/716947';
import { getFilteredFeatureFlags } from '../905/717445';
import { N as _$$N2 } from '../905/718123';
import { S as _$$S3 } from '../905/720922';
import { a as _$$a3 } from '../905/720941';
import { getResourceDataOrFallback, tT as _$$tT, gB } from '../905/723791';
import { Point } from '../905/736624';
import { Ji } from '../905/739314';
import { ConsumptionPaywallModalPlansPricing } from '../905/739964';
import { H as _$$H7 } from '../905/740869';
import { R as _$$R2 } from '../905/741991';
import { c as _$$c0, s as _$$s7 } from '../905/744710';
import { T as _$$T3 } from '../905/745591';
import { u as _$$u5 } from '../905/747030';
import { EL } from '../905/748636';
import { H4 as _$$H4, tH as _$$tH, Hb, S1 } from '../905/751457';
import { Bm } from '../905/755627';
import { isDefaultFile } from '../905/760074';
import { D as _$$D2 } from '../905/771179';
import { X as _$$X3 } from '../905/776923';
import { isSingleSceneGraphSelectionInDevHandoff } from '../905/782918';
import { useSingleEffect } from '../905/791079';
import { cq as _$$cq } from '../905/794154';
import { B as _$$B } from '../905/797453';
import { Ig } from '../905/805224';
import { MultiValueMap } from '../905/810750';
import { $ as _$$$ } from '../905/819786';
import { EventShield } from '../905/821217';
import { m as _$$m4 } from '../905/822676';
import { F2 } from '../905/826900';
import { AutoLayout } from '../905/470281';
import { K as _$$K4 } from '../905/833668';
import { l as _$$l7 } from '../905/840533';
import { o0 as _$$o3 } from '../905/844131';
import { d2 as _$$d5, rp as _$$rp } from '../905/845277';
import { a as _$$a0 } from '../905/847494';
import { notificationActions } from '../905/851662';
import { isCommunityHubSubView } from '../905/856857';
import { isVsCodeEnvironment } from '../905/858738';
import { n3 as _$$n3, sg as _$$sg } from '../905/859698';
import { AuthFlowStep } from '../905/862321';
import { ud as _$$ud } from '../905/862913';
import { q9 } from '../905/865071';
import { bL as _$$bL2, c$ as _$$c$ } from '../905/867927';
import { defaultSessionLocalIDString } from '../905/871411';
import { createDeferredPromise } from '../905/874553';
import { Cp as _$$Cp, ow as _$$ow2, KQ, Ty, U$, UA, WE } from '../905/879323';
import { generateUUIDv4 } from '../905/871474';
import { Db } from '../905/881862';
import { NP } from '../905/889931';
import { IY } from '../905/901759';
import { le as _$$le } from '../905/904854';
import { getRequest, XHR } from '../905/910117';
import { _L as _$$_L } from '../905/911410';
import { y as _$$y } from '../905/913008';
import { F as _$$F6 } from '../905/915030';
import { A as _$$A6 } from '../905/920142';
import { useFullscreenReady } from '../905/924253';
import { Jn } from '../905/927294';
import { selectViewAction } from '../905/929976';
import { J as _$$J2 } from '../905/931050';
import { q as _$$q2, s as _$$s6 } from '../905/932270';
import { I as _$$I2 } from '../905/932503';
import { lQ as _$$lQ } from '../905/934246';
import { v as _$$v4 } from '../905/939922';
import { selectUserFlag } from '../905/940356';
import { sx as _$$sx2 } from '../905/941192';
import { fileEntityDataMapper } from '../905/943101';
import { h as _$$h2 } from '../905/943864';
import { PluginIframeMode } from '../905/968269';
import { O as _$$O2 } from '../905/969533';
import { R9 } from '../905/977824';
import { TextWithTruncation } from '../905/984674';
import { postUserFlag } from '../905/985254';
import { h1 } from '../905/986103';
import { Q as _$$Q } from '../905/986450';
import { rn as _$$rn2 } from '../905/988099';
import { colorCSSManipulatorInstance } from '../905/989956';
import { resourceUtils } from '../905/989992';
import { NONE_SYMBOL } from '../905/992467';
import { pasteEmbedThunk } from '../905/994901';
import { LineBreakProcessor } from '../905/994917';
import { R as _$$R3 } from '../905/995587';
import { a as _$$a2, j as _$$j } from '../1577/143479';
import { e8 as _$$e2, fd, he, ql } from '../1577/159553';
import { N as _$$N4 } from '../1577/472492';
import { H as _$$H } from '../1577/640070';
import { d as _$$d3 } from '../1577/847459';
import { normalizePathnameStrict } from '../3973/348894';
import { h as _$$h8 } from '../3973/647885';
import { A as _$$A12 } from '../4711/136271';
import { z as _$$z2 } from '../5132/283698';
import { e7 as _$$e6 } from '../5132/288241';
import { t as _$$t5 } from '../5132/435788';
import { D as _$$D3 } from '../5132/780644';
import { Sm } from '../5132/879759';
import { W as _$$W } from '../5132/887999';
import { A as _$$A } from '../5724/172808';
import { e as _$$e5 } from '../9831/266717';
import { tV as _$$tV } from '../9831/302304';
import { J as _$$J3 } from '../9831/379831';
import _require4 from '../940032c6/115119';
import _require2 from '../af221b13/303081';
import { s as _$$s3 } from '../cssbuilder/589278';
import { aBI, Dkp, evB, GFz, KP, MYY, t8H, Ujx, Xu4 } from '../figma_app/6204';
import { bN } from '../figma_app/16595';
import { $t, lW as _$$lW, FC, JO, y7 } from '../figma_app/20203';
import { H as _$$H5, U as _$$U } from '../figma_app/23564';
import { atom, useAtomValueAndSetter, createRemovableAtomFamily, useAtomWithSubscription, mg, Xr, atomStoreManager } from '../figma_app/27355';
import { createSnapshotComponent, setupLoadablePageManager, hideElementById } from '../figma_app/27829';
import { assetMirrorInstance } from '../figma_app/31188';
import { Ye } from '../figma_app/32128';
import { ZS } from '../figma_app/33126';
import { useLatestRef } from '../figma_app/922077';
import { Y9 as _$$Y4 } from '../figma_app/42724';
import { i as _$$i2 } from '../figma_app/43065';
import { FileCreationDropdownView, ComponentByKey, PinnedFiles, OpenEditorFileData, DesktopPushNotificationView, ActiveFileUsersForFileView, FolderPageView, LibraryPublish, FileThumbnail, ProductTrialsView, ClientReloadView, LegacySourceStyleData, RecentIdleTimeoutSettingChangeView, DesktopNewTabRecentFilesView, RecentNetworkControlRejectionView, StyleByKey } from '../figma_app/43951';
import { ComposerLocation } from '../figma_app/45218';
import { e as _$$e11, n as _$$n5 } from '../figma_app/48514';
import { Q6 } from '../figma_app/48566';
import { ts as _$$ts } from '../figma_app/49598';
import { AS } from '../figma_app/50271';
import { I as _$$I4 } from '../figma_app/51637';
import { FEditorType, isDesignOrIllustration } from '../figma_app/53721';
import { BannerInline } from '../figma_app/59509';
import { h as _$$h } from '../figma_app/61485';
import { useFullscreenViewportUpdates, scaleRect } from '../figma_app/62612';
import { jm } from '../figma_app/67099';
import { mX } from '../figma_app/76123';
import { setActiveFileUsersAction } from '../figma_app/78808';
import { o as _$$o2, v as _$$v3 } from '../figma_app/79979';
import { getObservableValue } from '../figma_app/84367';
import { useIsFullscreenOverview, useIsFullscreenDevModeComponentBrowser, useDevModeFocusId } from '../figma_app/88239';
import { O8, Wn } from '../figma_app/88484';
import { eH as _$$eH } from '../figma_app/91703';
import { Iy, XS } from '../figma_app/95367';
import { isNotNullish } from '../figma_app/95419';
import { BF, fh } from '../figma_app/98072';
import { Cg as _$$Cg } from '../figma_app/99436';
import { xo } from '../figma_app/106634';
import { b as _$$b2 } from '../figma_app/108592';
import { u as _$$u6 } from '../figma_app/110635';
import { sitesViewSetterAtomFamily } from '../figma_app/115923';
import { dP as _$$dP, M3 as _$$M3 } from '../figma_app/119475';
import { yB } from '../figma_app/120294';
import { $ as _$$$2, E as _$$E5 } from '../figma_app/126651';
import { F as _$$F8 } from '../figma_app/127204';
import { Iu } from '../figma_app/141088';
import { OQ, qC } from '../figma_app/141508';
import { cQ as _$$cQ } from '../figma_app/144692';
import { ub as _$$ub, jM, RO, wI } from '../figma_app/146905';
import { rb as _$$rb } from '../figma_app/151869';
import { zN as _$$zN2, je } from '../figma_app/155728';
import { NU } from '../figma_app/156285';
import { xZ } from '../figma_app/165422';
import { buildUploadUrl, getInitialOptions, setEditingFile } from '../figma_app/169182';
import { Zc } from '../figma_app/171569';
import { N as _$$N8 } from '../figma_app/176280';
import { i1 as _$$i, Dq, q0, TN } from '../figma_app/177697';
import { FFileType, FPlanFeatureType, FBillingEntityType, FProductAccessType, FPlanTierType, FOrganizationLevelType, FPlanLimitationType } from '../figma_app/191312';
import { getThemeBackgroundColor, isColorDarkByLuminance } from '../figma_app/191804';
import { zT } from '../figma_app/192142';
import { isMainView, selectedViewToPath } from '../figma_app/193867';
import { yesNoTrackingEnum } from '../figma_app/198712';
import { a6 as _$$a6, M3 } from '../figma_app/198840';
import { LK } from '../figma_app/199513';
import { NM } from '../figma_app/204891';
import { gR } from '../figma_app/204937';
import { Vm } from '../figma_app/209965';
import { C5 } from '../figma_app/213643';
import { DropdownThemeProvider } from '../figma_app/215667';
import { getProductAccessTypeByKey } from '../figma_app/217457';
import { vt } from '../figma_app/231614';
import { a as _$$a9 } from '../figma_app/234156';
import { rM as _$$rM } from '../figma_app/241541';
import { lS as _$$lS } from '../figma_app/242565';
import { hasLibraryKeyInSet, styleByKeyQuery, handleResourceQuery } from '../figma_app/255679';
import { isInteractionPathCheck, isInteractionOrEvalMode } from '../figma_app/897289';
import { gH, ZF } from '../figma_app/258114';
import { rG as _$$rG } from '../figma_app/260703';
import { J as _$$J6 } from '../figma_app/261874';
import { X as _$$X2 } from '../figma_app/266084';
import { z5 } from '../figma_app/268172';
import { N as _$$N5 } from '../figma_app/268271';
import { DialogBody, DialogTitle, DialogActionStrip, DialogContents, DialogFooter, DialogHeader } from '../figma_app/272243';
import { td as _$$td } from '../figma_app/273118';
import { h as _$$h3 } from '../figma_app/276445';
import { W6 } from '../figma_app/287316';
import { useMultiSubscription, useSubscription, getLivegraphClient } from '../figma_app/288654';
import { imageAPI } from '../figma_app/291892';
import { hasUserAccess, useHighPriorityNotificationsExperiment } from '../figma_app/297957';
import { F$, LH, y4 } from '../figma_app/298277';
import { XO } from '../figma_app/299859';
import { I as _$$I } from '../figma_app/304633';
import { Pp } from '../figma_app/305244';
import { uQ as _$$uQ } from '../figma_app/311375';
import { logAndTrackCTA, mapEditorTypeToProductType, trackContextViewed } from '../figma_app/314264';
import { lX as _$$lX, G2 } from '../figma_app/314591';
import { CX, gT, If, NA } from '../figma_app/319440';
import { pq as _$$pq } from '../figma_app/319732';
import { ty as _$$ty, DT, Rm, Y2 } from '../figma_app/320164';
import { ZO } from '../figma_app/322845';
import { I$, Mx, x3 } from '../figma_app/327577';
import { h as _$$h7 } from '../figma_app/334471';
import { V as _$$V } from '../figma_app/339971';
import { ds as _$$ds } from '../figma_app/343967';
import { DQ } from '../figma_app/345195';
import { mapRecentFilesAndRepos } from '../figma_app/349248';
import { p as _$$p2 } from '../figma_app/353099';
import { u as _$$u2 } from '../figma_app/353758';
import { c1 as _$$c9, Yh } from '../figma_app/357047';
import { Tl } from '../figma_app/357433';
import { $v } from '../figma_app/370763';
import { r as _$$r5 } from '../figma_app/375550';
import { LH as _$$LH, zm } from '../figma_app/384673';
import { getSelectedView, getFullscreenFileKey, getSelectedViewType } from '../figma_app/386952';
import { T as _$$T2 } from '../figma_app/399971';
import { Cj } from '../figma_app/407993';
import { aq as _$$aq } from '../figma_app/412189';
import { rr as _$$rr, tw as _$$tw, CL, FH, RS, zH } from '../figma_app/412796';
import { FplStringsProvider } from '../figma_app/415899';
import { R as _$$R4 } from '../figma_app/421558';
import { fC } from '../figma_app/422471';
import { H as _$$H6 } from '../figma_app/423008';
import { A as _$$A1 } from '../figma_app/426577';
import { M as _$$M6 } from '../figma_app/427802';
import { qm } from '../figma_app/431689';
import { aE as _$$aE } from '../figma_app/433401';
import { CB } from '../figma_app/442259';
import { q3 } from '../figma_app/450829';
import { flagValue, userValue, inputValue, modalValue, additionalValue, fullscreenValue, sessionValue } from '../figma_app/455680';
import { Ws } from '../figma_app/459125';
import { wV } from '../figma_app/462456';
import { useCurrentPlanUser, useIsOrgAdminUser } from '../figma_app/465071';
import { assert, throwTypeError } from '../figma_app/465776';
import { useCanAccessFullDevMode, useIsLoggedOutDevModeDemoFile, useCanUseDevModeDemoFile, useCanAccessDevModeEntryPoint } from '../figma_app/473493';
import { A as _$$A4 } from '../figma_app/475340';
import { yZ } from '../figma_app/476572';
import { $X, n6 as _$$n2, pD as _$$pD, f7, FZ, KN, LD, ZB } from '../figma_app/476677';
import { WH } from '../figma_app/485258';
import { nz as _$$nz } from '../figma_app/492354';
import { LinkPrimitive, LinkPrimitiveProvider } from '../figma_app/496441';
import { zj } from '../figma_app/502363';
import { p as _$$p4 } from '../figma_app/502587';
import { wG } from '../figma_app/504823';
import { $4 } from '../figma_app/506364';
import { useRequireOpenFileOrSuspend, useCurrentFileKey, useFileLibraryKeys, useFullscreenViewFile, selectCurrentFile, openFileKeyAtom } from '../figma_app/516028';
import { D as _$$D6, z as _$$z4 } from '../figma_app/516075';
import { _c as _$$_c, l0 as _$$l3, wV as _$$wV, BX, Dp, Eo, wF } from '../figma_app/516324';
import { IF, Lo } from '../figma_app/518364';
import { dh as _$$dh, TS } from '../figma_app/519839';
import { jn } from '../figma_app/522082';
import { Qw } from '../figma_app/527668';
import { hasRootPathOptional } from '../figma_app/528509';
import { sb as _$$sb, wz } from '../figma_app/532170';
import { yu } from '../figma_app/533986';
import { q4 } from '../figma_app/536669';
import { Lj, xM } from '../figma_app/539925';
import { yH } from '../figma_app/540726';
import { nb as _$$nb, fA, Tf } from '../figma_app/543100';
import { userFlagExistsAtomFamily, userFlagAtomFamily, latestSurveyResponseDateAtom } from '../figma_app/545877';
import { N as _$$N, Gm } from '../figma_app/548577';
import { isFigmakeSitesEnabled, useIsSelectedFigmakeFullscreen } from '../figma_app/552876';
import { ZO as _$$ZO } from '../figma_app/557318';
import { isUserNotLoggedInAndEditorSupported } from '../figma_app/564183';
import { getAtomMutate, setupResourceAtomHandler, handleSuspenseRetainRelease, handleResourceAtomMetrics } from '../figma_app/566371';
import { NX } from '../figma_app/568591';
import { Pm } from '../figma_app/569743';
import { st as _$$st } from '../figma_app/578011';
import { d2 as _$$d9, nZ as _$$nZ, t as _$$t4, zN as _$$zN } from '../figma_app/579169';
import { FP } from '../figma_app/580736';
import { xE } from '../figma_app/581520';
import { safeModeRenderController } from '../figma_app/582563';
import { ConfigManagerProxy } from '../figma_app/594947';
import { getCurrentTeam, checkTeamFileRestrictions, AddOperationType } from '../figma_app/598018';
import { MR } from '../figma_app/598926';
import { oR as _$$oR, wA as _$$wA } from '../figma_app/598952';
import { d1 as _$$d4 } from '../figma_app/603466';
import { Bu } from '../figma_app/604494';
import { hG } from '../figma_app/613182';
import { $z, Ih } from '../figma_app/617427';
import { sv as _$$sv } from '../figma_app/617606';
import { Eh } from '../figma_app/617654';
import { j5 } from '../figma_app/624361';
import { normalizeTeamData, fileActionEnum } from '../figma_app/630077';
import { getPrototypeAppBindingsForTest } from '../figma_app/632319';
import { PublishStatusEnum, LibraryPublishStatusEnum } from '../figma_app/633080';
import { X_ } from '../figma_app/634146';
import { BigButtonPrimaryTracked, ButtonBase, SecureLink, Spacing, EnhancedInput, interactiveAnchorTracked } from '../figma_app/637027';
import { UK, WN } from '../figma_app/638601';
import { x as _$$x3, Lk } from '../figma_app/639711';
import { jW } from '../figma_app/640683';
import { zl as _$$zl, ST } from '../figma_app/641749';
import { xn, Yk } from '../figma_app/644079';
import { rS as _$$rS } from '../figma_app/644255';
import { f2 } from '../figma_app/646357';
import { P as _$$P4 } from '../figma_app/650304';
import { R as _$$R6 } from '../figma_app/652260';
import { sortByDateProperty, sortByMultiple, filterNotNullish } from '../figma_app/656233';
import { n1 as _$$n4, JB } from '../figma_app/657017';
import { aJ as _$$aJ, Sz, ZQ } from '../figma_app/673202';
import { Gm as _$$Gm } from '../figma_app/675605';
import { KI, wH } from '../figma_app/680166';
import { Z as _$$Z3 } from '../figma_app/684783';
import { useProjectFileCreationPermissions } from '../figma_app/687776';
import { R as _$$R7 } from '../figma_app/690591';
import { viewMappings, PreviewMode, OnboardingStep } from '../figma_app/707808';
import { cU as _$$cU, wY } from '../figma_app/708845';
import { EX, xI } from '../figma_app/709323';
import { eJ as _$$eJ, ub as _$$ub2, uh as _$$uh, D_, q8, Uv, wX } from '../figma_app/710136';
import { k as _$$k5 } from '../figma_app/717083';
import { useIsProgressBarHiddenOrLocked, useSceneGraphSelector, useAppModelProperty } from '../figma_app/722362';
import { iC as _$$iC, nd as _$$nd, tP as _$$tP, TZ } from '../figma_app/722791';
import { fm } from '../figma_app/723183';
import { x as _$$x5 } from '../figma_app/731109';
import { YN as _$$YN } from '../figma_app/738358';
import { isHubFileEmbedView, isMonetizationRedirectView } from '../figma_app/740025';
import { D as _$$D4, UX } from '../figma_app/740163';
import { C as _$$C } from '../figma_app/747354';
import { K7 } from '../figma_app/749805';
import { Cg } from '../figma_app/751648';
import { YA } from '../figma_app/755939';
import { c as _$$c6 } from '../figma_app/763535';
import { ThemeType, OffsetPathTsApi, RichTextType, TextDirection, AppStateTsApi, DrawBindingsCpp, Fullscreen, ComponentPropType, FileSourceType, ViewType, LayoutTabType, DesignGraphElements, SimplifyVectorToolTsApi, Command, JoinType, UserAppType, PerfQuality, TextData_Internal } from '../figma_app/763686';
import { c as _$$c7 } from '../figma_app/765216';
import { l as _$$l2 } from '../figma_app/773170';
import { BrowserInfo } from '../figma_app/778880';
import { jw, Yd } from '../figma_app/781981';
import { parsePxNumber } from '../figma_app/783094';
import { fileApiHandler } from '../figma_app/787550';
import { Z as _$$Z } from '../figma_app/788481';
import { em as _$$em, eN as _$$eN, lq as _$$lq, G5, I_ } from '../figma_app/792958';
import { M0 as _$$M5 } from '../figma_app/803054';
import { Ro } from '../figma_app/805373';
import { handleMouseEvent, RecordingPureComponent, useHandleMouseEvent, generateRecordingKey } from '../figma_app/878298';
import { O as _$$O3 } from '../figma_app/806649';
import { fD } from '../figma_app/816671';
import { I as _$$I3 } from '../figma_app/827540';
import { TrackingProvider } from '../figma_app/831799';
import { V1, XU } from '../figma_app/834392';
import { OL as _$$OL } from '../figma_app/840917';
import { M0, VG } from '../figma_app/841197';
import { A as _$$A2 } from '../figma_app/849799';
import { a as _$$a5 } from '../figma_app/850056';
import { uW as _$$uW2, ux as _$$ux, NY } from '../figma_app/851625';
import { M as _$$M4 } from '../figma_app/854365';
import { ip as _$$ip } from '../figma_app/857454';
import { LoadingSpinner } from '../figma_app/858013';
import { w as _$$w2 } from '../figma_app/859828';
import { r as _$$r2 } from '../figma_app/860474';
import { setupMenu, MenuRootComp, MenuTitleComp, MenuSubTrigger, MenuSubMenu, MenuContainerComp, MenuSubContainerComp, MenuItemComp, MenuItemLead, MenuSeparator, MenuGroupComp } from '../figma_app/860955';
import { mv } from '../figma_app/861252';
import { bellFeedAPIInstance, hasDesktopAPI } from '../figma_app/876459';
import { t7 as _$$t3 } from '../figma_app/880974';
import { ld as _$$ld } from '../figma_app/881578';
import { selectLocalStylesWithUsagesOnLoadedPages, selectPublishableStyleNodeIds } from '../figma_app/889655';
import { S as _$$S2 } from '../figma_app/894185';
import { trackFileEventWithStore } from '../figma_app/901889';
import { rn as _$$rn } from '../figma_app/903573';
import { j as _$$j2 } from '../figma_app/911344';
import { Dt } from '../figma_app/912411';
import { f as _$$f } from '../figma_app/913332';
import { QE, z0 } from '../figma_app/914216';
import { ai as _$$ai, f6 } from '../figma_app/915202';
import { utilityNoop } from '../figma_app/918700';
import { Badge, BadgeColor } from '../figma_app/919079';
import { w as _$$w } from '../figma_app/922802';
import { E as _$$E } from '../figma_app/924252';
import { w4 as _$$w3, Fj, go } from '../figma_app/927140';
import { formatList } from '../figma_app/930338';
import { e_ as _$$e_, Cn } from '../figma_app/936061';
import { z5 as _$$z3, Bh, fN } from '../figma_app/936646';
import { $ as _$$$4 } from '../figma_app/938538';
import { we } from '../figma_app/945605';
import { aQ as _$$aQ, Qj } from '../figma_app/947348';
import { yw } from '../figma_app/953049';
import { nP as _$$nP } from '../figma_app/957070';
import { mn } from '../figma_app/968938';
import { e2 as _$$e4, C$, Ml } from '../figma_app/971485';
import { flashMfaAndRedirect, handleOrgMigration, ReloadReasonEnum } from '../figma_app/976345';
import { isSitesFileType, getCurrentFileType, isWhiteboardFileType, getSelectedEditorType, isDesignFileType, isDevHandoffEditorType, getEditorTypeOrNull, isIllustrationEditorType, getEditorTypeFromView } from '../figma_app/976749';
import { ZU } from '../figma_app/986347';
import { gY } from '../figma_app/991245';
import { A as _$$A11 } from '../svg/95997';
import { A as _$$A3 } from '../svg/278438';
import { A as _$$A5 } from '../svg/402856';
import { A as _$$A13 } from '../svg/416922';
import { A as _$$A15 } from '../svg/443105';
import { A as _$$A14 } from '../svg/518683';
import { A as _$$A10 } from '../svg/903227';
import { A as _$$A16 } from '../svg/974433';
import nn from '../vendor/7508';
import { highlight, languages } from '../vendor/87676';
import db from '../vendor/128080';
import { rH as _$$rH, Ck, fK, IN, zB } from '../vendor/167083';
import av from '../vendor/260986';
import { P as _$$P } from '../vendor/348225';
import { useSelector, connect, useStore, useDispatch } from 'react-redux';
import { useAtomValue } from '../vendor/525001';
import { N as _$$N7 } from '../vendor/930821';
import { flushSync } from 'react-dom';
let n;
let i;
let a;
let s;
let o;
let d = performance.now();
let j = F;
let ed = 'user_notifications_desktop_dropdown_container--icon--vYcJe';
function ec(e) {
  let {
    notificationFeedMap,
    isFetchingNotifications,
    markAllAsReadFn,
    updateNotification
  } = ql(!1, e.selectedPlan);
  let [a, s] = useState([]);
  let o = useDispatch();
  let d = he([...notificationFeedMap.values()], a);
  let c = _$$e2(d);
  let u = useHighPriorityNotificationsExperiment(c);
  let [p, _, h] = _$$t2.useTabs({
    all: !0,
    priority: !!u && c,
    unread: !0
  });
  let m = useLatestRef(h.activeTab);
  useEffect(() => {
    h.activeTab !== m && trackContextViewed({
      name: 'user_notifications_filter_viewed',
      filter_type: h.activeTab,
      dropdown_location: 'desktop_tray'
    });
  }, [m, h.activeTab]);
  let g = useMemo(() => d.filter(e => e.filters.is_priority), [d]);
  let f = useMemo(() => d.filter(e => e.is_unread), [d]);
  let E = t => jsx(fd.Feed, {
    currentNotificationFilter: h.activeTab,
    currentPlanFilter: e.selectedPlan === _$$td ? _$$a2 : e.selectedPlan,
    fillParent: !0,
    hiddenNotificationIds: a,
    inCommunity: !1,
    inDesktopTray: !0,
    isFetchingNotifications,
    notifications: t,
    setHiddenNotificationIds: s,
    updateNotificationCallback: updateNotification
  });
  let y = useMemo(() => ({
    onClick: () => !1,
    onMouseMove: _$$lQ,
    onRemove: _$$lQ,
    inDesktopTray: !0,
    toggleQuickReply: (e, t, r) => (o(selectViewAction({
      view: 'feed',
      quickReplyInfo: AS(t) || void 0
    })), !0)
  }), [o]);
  return jsx(_$$H.Provider, {
    value: y,
    children: jsxs('div', {
      className: 'user_notifications_desktop_dropdown_container--scrollContainer--Fg4Ls',
      onMouseDown: e => {
        e.stopPropagation();
      },
      children: [jsx(fd.FilterToggle, {
        tabManager: h,
        tabPropsMap: p,
        notificationFilter: h.activeTab,
        toggleNotificationFilter: e => {
          logAndTrackCTA({
            filter_type: e
          }, 'user_notifications_filter_clicked');
        },
        isFetchingNotifications,
        notifications: d,
        markAllAsReadFn
      }), jsx(_$$t2.TabPanel, {
        ..._.all,
        children: E(d)
      }), jsx(_$$t2.TabPanel, {
        ..._.priority,
        children: E(g)
      }), jsx(_$$t2.TabPanel, {
        ..._.unread,
        children: E(f)
      })]
    })
  });
}
function eu() {
  let e = useDispatch();
  !function () {
    let e = useStore();
    let t = useMemo(() => generateUUIDv4(), []);
    let r = useAtomWithSubscription(_$$d2);
    let n = useSubscription(DesktopPushNotificationView, {
      cacheNonce: t
    }, {
      enabled: !r
    });
    useEffect(() => {
      if (n.status === 'loaded' && n.data.currentUser.desktopPushNotification.status === _$$tT.Loaded) {
        let t = getResourceDataOrFallback(n.data.currentUser.desktopPushNotification);
        if (t) {
          if (t.userId !== e.getState().user?.id) {
            trackEventAnalytics('desktop_push_not_current_user');
            return;
          }
          gY(e.dispatch, e.getState().selectedView.view, {
            id: t.notificationId,
            notification_space_id: t.notificationSpaceId,
            openUrl: t.openUrl || void 0,
            message: {
              title: t.message.title || '',
              subtitle: t.message.subtitle || '',
              body: t.message.body || '',
              thumbnailUrl: t.message.thumbnailUrl || ''
            }
          });
        }
      }
    }, [e, n]);
  }();
  let {
    currentOrgId,
    selectedView,
    userStateLoaded,
    user
  } = selectWithShallowEqual(e => ({
    currentOrgId: e.currentUserOrgId,
    selectedView: e.selectedView,
    userStateLoaded: e.userStateLoaded,
    user: e.user
  }));
  assert(selectedView.view === 'feed', 'UserNotificationDesktopDropdownContainer: wrong view, quick replies may not work');
  let a = selectedView.quickReplyInfo;
  let [s, o] = useState(0);
  useEffect(() => {
    bellFeedAPIInstance?.setListener({
      name: 'openTray',
      listener: () => {
        o(s + 1);
      }
    });
  }, [e, o, s]);
  let [d, c] = useState(_$$td);
  return (useEffect(() => {
    let t = () => {
      bellFeedAPIInstance && a && e(selectViewAction({
        view: 'feed'
      }));
    };
    window.addEventListener('blur', t);
    return () => {
      window.removeEventListener('blur', t);
    };
  }), userStateLoaded) ? jsx('div', {
    className: 'user_notifications_desktop_dropdown_container--page--pJgtr',
    children: jsxs('div', {
      className: j()({
        'user_notifications_desktop_dropdown_container--container--ir8tA': !0,
        'user_notifications_desktop_dropdown_container--windows--k06Km': BrowserInfo.windows
      }),
      children: [jsxs('div', {
        className: 'user_notifications_desktop_dropdown_container--navbarContainer--iszDD text--fontPos11--2LvXf text--_fontBase--QdLsd',
        children: [jsx('div', {
          className: 'user_notifications_desktop_dropdown_container--title--7X12w ellipsis--ellipsis--Tjyfa',
          children: jsx(_$$j, {
            currentPlanFilter: d === _$$td ? _$$a2 : d,
            onPlanFilterUpdate: e => {
              e === _$$a2 && (e = _$$td);
              c(e);
            },
            displaySettings: !1
          })
        }), jsx(LinkPrimitive, {
          'href': '/files/recent',
          'className': ed,
          'aria-label': getI18nString('user_notifications.home'),
          'children': jsx(_$$I, {
            'aria-hidden': !0
          })
        }), bellFeedAPIInstance && user && currentOrgId && jsx(LinkPrimitive, {
          'href': `/files/${currentOrgId}/user/${user.id}/settings?tab=notifications`,
          'className': ed,
          'aria-label': getI18nString('user_notifications.settings'),
          'children': jsx(_$$I2, {
            'aria-hidden': !0
          })
        }), user && jsx('div', {
          style: _$$sx2.w24.h24.p8.pr0.$,
          children: jsx(H8, {
            user
          })
        })]
      }), jsx('div', {
        className: 'user_notifications_desktop_dropdown_container--notificationContainer--0xl5V text--fontPos11--2LvXf text--_fontBase--QdLsd',
        children: a && a.threadId && a.fileKey ? jsx(_$$d3, {
          quickReplyInfo: a,
          onClose: () => {
            e(selectViewAction({
              view: 'feed'
            }));
          }
        }) : (!bellFeedAPIInstance || s > 0) && jsx(ec, {
          selectedPlan: d
        }, s)
      })]
    })
  }) : null;
}
let ew = new class {
  openTemplatePicker() {
    atomStoreManager.set(YA, !0);
  }
  getTextFields(e) {
    let t = getSingletonSceneGraph();
    let r = t.get(e);
    if (!r) return [];
    let n = r.containingCooperFrame();
    if (!n) return [];
    let i = Yi([n.guid], t) || k4([n.guid], t) || '-1:1';
    let a = {};
    let s = [n.guid];
    let o = t.get(i);
    for (let e of (o && s.push(o.guid), s)) {
      let r = t.get(e);
      r && Object.assign(a, r.componentPropsJsonForNode);
    }
    let l = a[i]?.defs ? Object.values(a[i].defs) : [];
    let d = _$$_T(n, t);
    let c = E5(d, l, n.guid);
    let u = l.filter(e => e.type === ComponentPropType.TEXT);
    let p = a[i]?.assignments?.[n.guid];
    return jv(n, u, p, s, t, e => r.setSelectionToSingleNode(e), c);
  }
}();
let e0 = new class {
  clearSlideThemeStylePreview(e) {
    atomStoreManager.set(q0, t => {
      let r = {
        ...t
      };
      for (let t of e) delete r[t];
      return r;
    });
  }
  syncSlideThemeAtom(e, t) {
    _$$i(e).syncFromFullscreen({
      id: e,
      data: t
    });
    X_(e) && (TN.syncFromFullscreen(r => t ? r.includes(e) ? r : [...r, e] : r.filter(t => t !== e)), Dq.syncFromFullscreen(r => {
      if (t) {
        if (!(e in r) || r[e] !== t.name) {
          return {
            ...r,
            [e]: t.name
          };
        }
      } else {
        let {
          [e]: e,
          ...n
        } = r;
        return n;
      }
      return r;
    }));
  }
  chainShuffle(e) {
    let t = 0;
    let r = [];
    for (let t = 1; t < e.length; t++) r.push(t);
    for (; r.length > 0;) {
      let n = Math.floor(Math.random() * r.length);
      let i = r[n];
      r.splice(n, 1);
      let a = e[i];
      e[i] = e[t];
      e[t] = a;
      t = i;
    }
  }
  computeThemeSwapColorVariableMapping(e, t) {
    let r = Array.from(e.keys());
    let n = Array.from(t.keys());
    this.chainShuffle(n);
    let i = new Map();
    for (let t = 0; t < e.size; t++) {
      let e = r[t];
      let a = n[t % n.length];
      e && a && i.set(e, a);
    }
    return i;
  }
}();
let ta = _$$z.parse('#282A36');
let ts = _$$z.parse('#F8F8F2');
let to = _$$z.parse('#AEAFAD');
let tl = _$$z.parse('#999');
let td = _$$z.parse('#6272A4');
let tc = _$$z.parse('#8BE9FD');
let tu = _$$z.parse('#50FA7B');
let tp = _$$z.parse('#FFB86C');
let t_ = _$$z.parse('#FF79C6');
let th = _$$z.parse('#BD93F9');
let tm = _$$z.parse('#FF5555');
let tg = _$$z.parse('#F1FA8C');
let tf = {
  backgroundColor: ta,
  defaultColor: ts,
  cursorColor: to,
  lineNumberColor: tl,
  tokenColors: {
    atrule: tu,
    attrName: tu,
    attrValue: tg,
    boolean: th,
    builtin: tc,
    className: tc,
    comment: td,
    constant: tp,
    entity: t_,
    function: tu,
    important: t_,
    keyword: t_,
    number: th,
    operator: tc,
    property: tp,
    punctuation: ts,
    regex: tm,
    selector: t_,
    string: tg,
    symbol: tp,
    tag: t_,
    url: tc,
    variable: td
  }
};
let tE = _$$z.parse('#322d29');
let ty = _$$z.parse('#88786d');
let tb = _$$z.parse('#bfa05a');
let tT = _$$z.parse('#ffdac2');
let tI = _$$z.parse('#bd987f');
let tS = _$$z.parse('#fcc440');
let tv = {
  defaultColor: tI,
  backgroundColor: tE,
  lineNumberColor: ty,
  cursorColor: tI,
  tokenColors: {
    'comment': ty,
    'prolog': ty,
    'doctype': ty,
    'cdata': ty,
    'punctuation': _$$z.parse('#da70d6'),
    'namespace': {
      ...tI,
      a: 0.7
    },
    'tag': tb,
    'operator': tb,
    'property': tI,
    'function': tT,
    'tag-id': tT,
    'selector': tT,
    'atrule-id': tT,
    'attr-name': tI,
    'boolean': tS,
    'number': tS,
    'string': tS,
    'entity': tS,
    'url': tS,
    'attr-value': tS,
    'keyword': tS,
    'control': tS,
    'directive': tS,
    'unit': tS,
    'statement': tS,
    'regex': tS,
    'atrule': tS,
    'placeholder': tS,
    'variable': tS,
    'important': tI
  }
};
let tA = _$$z.parse('#2a2d2a');
let tx = _$$z.parse('#a1b5a2');
let tN = _$$z.parse('#535f53');
let tC = _$$z.parse('#a2b34d');
let tw = _$$z.parse('#f0fff0');
let tO = _$$z.parse('#b3d6b3');
let tR = _$$z.parse('#e5fb79');
let tL = {
  defaultColor: tx,
  backgroundColor: tA,
  lineNumberColor: tN,
  cursorColor: tx,
  tokenColors: {
    'comment': tN,
    'prolog': tN,
    'doctype': tN,
    'cdata': tN,
    'punctuation': tC,
    'namespace': {
      ...tx,
      a: 0.7
    },
    'tag': tC,
    'operator': tC,
    'number': tC,
    'property': tx,
    'function': tO,
    'tag-id': tw,
    'selector': tw,
    'atrule-id': tw,
    'attr-name': tO,
    'boolean': tR,
    'string': tR,
    'entity': tR,
    'url': tR,
    'attr-value': tR,
    'keyword': tR,
    'control': tR,
    'directive': tR,
    'unit': tR,
    'statement': tR,
    'regex': tR,
    'atrule': tR,
    'placeholder': tR,
    'variable': tR,
    'important': tO
  }
};
let tP = _$$z.parse('#faf8f5');
let tD = _$$z.parse('#728fcb');
let tk = _$$z.parse('#063289');
let tM = _$$z.parse('#93abdc');
let tF = _$$z.parse('#cdc4b1');
let tj = _$$z.parse('#b6ad9a');
let tU = _$$z.parse('#b29762');
let tB = _$$z.parse('#2d2006');
let tG = _$$z.parse('#896724');
let tV = {
  defaultColor: tG,
  backgroundColor: tP,
  lineNumberColor: tF,
  cursorColor: tD,
  tokenColors: {
    'comment': tj,
    'prolog': tj,
    'doctype': tj,
    'cdata': tj,
    'punctuation': tj,
    'namespace': {
      ...tD,
      a: 0.7
    },
    'tag': tk,
    'operator': tk,
    'number': tk,
    'property': tU,
    'function': tU,
    'tag-id': tB,
    'selector': tB,
    'atrule-id': tB,
    'attr-name': tG,
    'boolean': tD,
    'string': tD,
    'entity': tD,
    'url': tD,
    'attr-value': tD,
    'keyword': tD,
    'control': tD,
    'directive': tD,
    'unit': tD,
    'statement': tD,
    'regex': tD,
    'atrule': tD,
    'placeholder': tM,
    'variable': tM,
    'important': tG
  }
};
let tH = _$$z.parse('#1d262f');
let tz = _$$z.parse('#57718e');
let tW = _$$z.parse('#4a5f78');
let tK = _$$z.parse('#88b4e7');
let tY = _$$z.parse('#0aa370');
let t$ = _$$z.parse('#ebf4ff');
let tX = _$$z.parse('#7eb6f6');
let tq = _$$z.parse('#47ebb4');
let tJ = {
  defaultColor: tK,
  backgroundColor: tH,
  lineNumberColor: tW,
  cursorColor: tz,
  tokenColors: {
    'comment': tW,
    'prolog': tW,
    'doctype': tW,
    'cdata': tW,
    'punctuation': _$$z.parse('#f3cd12'),
    'namespace': {
      ...tz,
      a: 0.7
    },
    'tag': tY,
    'operator': tY,
    'property': tK,
    'function': t$,
    'tag-id': t$,
    'selector': t$,
    'atrule-id': t$,
    'attr-name': tX,
    'boolean': tq,
    'number': tq,
    'string': tq,
    'entity': tq,
    'url': tq,
    'attr-value': tq,
    'keyword': tq,
    'control': tq,
    'directive': tq,
    'unit': tq,
    'statement': tq,
    'regex': tq,
    'atrule': tq,
    'placeholder': tq,
    'variable': tq,
    'important': tX
  }
};
let tZ = _$$z.parse('#24242e');
let tQ = _$$z.parse('#8686cb');
let t0 = _$$z.parse('#5b5b76');
let t1 = _$$z.parse('#dd672c');
let t2 = _$$z.parse('#ebebff');
let t5 = _$$z.parse('#aaaaca');
let t3 = _$$z.parse('#fe8c52');
let t4 = {
  defaultColor: tQ,
  backgroundColor: tZ,
  lineNumberColor: t0,
  cursorColor: tQ,
  tokenColors: {
    'comment': t0,
    'prolog': t0,
    'doctype': t0,
    'cdata': t0,
    'punctuation': t0,
    'namespace': {
      ...tQ,
      a: 0.7
    },
    'tag': t1,
    'operator': t1,
    'number': t1,
    'property': t5,
    'function': t5,
    'tag-id': t2,
    'selector': t2,
    'atrule-id': t2,
    'attr-name': t5,
    'boolean': t3,
    'string': t3,
    'entity': t3,
    'url': t3,
    'attr-value': t3,
    'keyword': t3,
    'control': t3,
    'directive': t3,
    'unit': t3,
    'statement': t3,
    'regex': t3,
    'atrule': t3,
    'placeholder': t3,
    'variable': t3,
    'important': t5
  }
};
let t8 = _$$z.parse('#9A93AE');
let t6 = _$$z.parse('#ED4F62');
let t7 = _$$z.parse('#EB8559');
let t9 = _$$z.parse('#F8D41C');
let re = _$$z.parse('#53E37C');
let rt = _$$z.parse('#1BCDF4');
let rr = _$$z.parse('#C3AAFF');
let rn = _$$z.parse('#FFFFFF');
let ri = {
  defaultColor: rn,
  backgroundColor: _$$z.parse('#2F2746'),
  lineNumberColor: {
    ...rn,
    a: 0.5
  },
  cursorColor: rn,
  tokenColors: {
    'comment': t8,
    'prolog': t8,
    'doctype': t8,
    'cdata': t8,
    'variable': t6,
    'constant': t6,
    'tag': t6,
    'selector': t6,
    'regexp': t6,
    'deleted': t6,
    'important': t6,
    'builtin': t7,
    'url': t7,
    'number': t9,
    'property': t9,
    'attr-name': t9,
    'literal-property': t9,
    'string': re,
    'string-property': re,
    'char': re,
    'symbol': re,
    'inserted': t7,
    'title': rt,
    'section': rt,
    'params': rt,
    'parameter': rt,
    'function': rt,
    'class-name': rt,
    'keyword': rr,
    'selector-tag': rr,
    'atrule': rr,
    'attr-value': rr,
    'punctuation': rn,
    'namespace': rn,
    'operator': rn,
    'entity': rn,
    'attr-equals': rn,
    'decorator': rn,
    'generic-function': rn,
    'generic': rn,
    'raw-string': re,
    'directive': rt,
    'macro': rn,
    'macro-name': rn,
    'directive-hash': rn,
    'expression': rn,
    'module': rn,
    'double-colon': rn,
    'base-clause': rn,
    'method-definition': rt,
    'interpolation': rn,
    'delimiter': rn,
    'spread': rn,
    'special-attr': rn,
    'script': rn,
    'language-javascript': rn,
    'script-punctuation': rn,
    'boolean': rr,
    'null': rr,
    'scalar': t6,
    'property-query': t9,
    'definition-query': rt,
    'definition-mutation': rt,
    'fragment': rt,
    'description': rn,
    'atom-input': rn,
    'object': rn,
    'triple-quoted-string': re,
    'label': re,
    'annotation': t7
  }
};
function ra(e) {
  switch (e) {
    case ThemeType.FIGJAM_DARK:
      return ri;
    case ThemeType.DUOTONE_LIGHT:
      return tV;
    case ThemeType.DUOTONE_SEA:
      return tJ;
    case ThemeType.DUOTONE_SPACE:
      return t4;
    case ThemeType.DUOTONE_FOREST:
      return tL;
    case ThemeType.DUOTONE_EARTH:
      return tv;
    case ThemeType.DRACULA:
      return tf;
  }
}
let rs = 'token';
let ro = new Set(['tsx', 'cpp', 'ruby', 'css', 'jsx', 'markup', 'json', 'graphql', 'python', 'go', 'sql', 'swift', 'kotlin', 'rust', 'bash', 'plaintext']);
function rl(e, t) {
  if (e.length === 0) {
    e.push(t);
    return;
  }
  let r = e[e.length - 1];
  if (r.color === t.color && r.endIndex === t.startIndex) {
    r.endIndex = Math.max(r.endIndex, t.endIndex);
    return;
  }
  e.push(t);
}
let rd = new class {
  getParsedCodeTokens(e, t, r) {
    return function (e, t, r) {
      let n = '';
      switch (t) {
        case 'typescript':
          t = 'tsx';
          break;
        case 'javascript':
          t = 'jsx';
          break;
        case 'html':
          t = 'markup';
      }
      n = ro.has(t) ? highlight(e, languages[t], t) : highlight(e, languages.tsx, 'tsx');
      let i = [];
      let a = new DOMParser().parseFromString(`<span id="code">${n}</span>`, 'text/html');
      let s = [];
      let o = ra(r);
      let l = (e, t) => {
        let {
          nodeType
        } = e;
        if (nodeType === Node.TEXT_NODE) {
          let r = [...(e.textContent ?? '')];
          t === 1 && rl(i, {
            startIndex: s.length,
            endIndex: s.length + r.length,
            color: Nv.format(o.defaultColor),
            isItalic: !1
          });
          s.push(...r);
          return;
        }
        let n = [...(e.innerText ?? e.textContent)];
        if (e.classList.contains(rs)) {
          for (let t of e.classList) {
            t !== rs && rl(i, {
              startIndex: s.length,
              endIndex: s.length + n.length,
              color: Nv.format(o.tokenColors[t] || o.defaultColor),
              isItalic: t === 'comment'
            });
          }
        }
        for (let r of e.childNodes) l(r, t + 1);
      };
      l(a.getElementById('code'), 0);
      return i;
    }(e, t, r);
  }
  getBackgroundColor(e) {
    return Nv.format(ra(e).backgroundColor);
  }
  getLineNumberColor(e) {
    return Nv.format(ra(e).lineNumberColor);
  }
  getCursorColor(e) {
    return Nv.format(ra(e).cursorColor);
  }
}();
let rx = new class {
  constructor() {
    this.counterAtom = hR({
      value: 0
    }, {
      changeFileBehavior: hW.RESET_VALUE_ON_FILE_CHANGE
    });
    this.arrayAtom = hR([{
      value: 0
    }], {
      changeFileBehavior: hW.RESET_VALUE_ON_FILE_CHANGE
    });
    this.jsValueTestsCallback = null;
  }
  jsEchoUintValue(e) {
    if (e < 0) throw new Error('Unsigned value was negative');
    return e;
  }
  jsEchoStringValue(e) {
    return e;
  }
  jsEchoInt64Value(e) {
    return e;
  }
  jsEchoUint64Value(e) {
    return e;
  }
  jsEchoInt64Struct(e) {
    return e;
  }
  jsEchoIntArrayValue(e) {
    return e;
  }
  jsEchoBoolArrayValue(e) {
    return e;
  }
  jsEchoJsonValue(e) {
    return e;
  }
  jsEchoJsValue(e) {
    return e;
  }
  jsEchoOptionalJsValue(e) {
    return e;
  }
  jsEchoDeeplyNestedJsValue(e) {
    return e;
  }
  jsEchoIntMapValue(e) {
    return e;
  }
  jsEchoFastParseableStructValue(e) {
    return e;
  }
  jsEchoNonFastParseableStructValue(e) {
    return e;
  }
  jsEchoIntSetValue(e) {
    return e;
  }
  jsEchoOptionalStringValue(e) {
    return e;
  }
  jsEchoOptionalStringStruct(e) {
    return e;
  }
  jsEchoCallbackValue(e) {
    return e;
  }
  getObservableCounter() {
    return this.counterAtom.observable;
  }
  getObservableArray() {
    return this.arrayAtom.observable;
  }
  jsValueTestsDone(e) {
    this.jsValueTestsCallback?.(e);
    this.jsValueTestsCallback = null;
  }
  setJsValueTestsCallback(e) {
    this.jsValueTestsCallback = e;
  }
}();
let rF = {
  bulletStyle: RichTextType.PLAIN,
  indent: 0,
  direction: null
};
var rj = (e => (e[e.SKIP = 0] = 'SKIP', e[e.BREAK = 1] = 'BREAK', e[e.BLOCK = 2] = 'BLOCK', e[e.SPAN = 3] = 'SPAN', e))(rj || {});
function rU(e) {
  return [...e].length;
}
function rB(e) {
  return {
    bulletStyle: e.bulletStyle,
    direction: e.direction,
    indent: e.indent
  };
}
function rG(e) {
  let t = {
    hyperlink: e.hyperlink || null
  };
  return Object.values(t).some(e => !!e) ? t : void 0;
}
function rV(e) {
  return e && Array.isArray(e) && e.length === 1 && e[0] === '';
}
function rH(e) {
  return !isValidElement(e) && !rV(e);
}
function rz(e) {
  let t = [];
  for (let r of e) {
    let e = function (e) {
      let t = [{
        node: e,
        children: isValidElement(e) && 'children' in e.props ? Children.toArray(e.props.children) : null,
        parent: null,
        parentIdx: null
      }];
      let r = new Map();
      for (; t.length > 0;) {
        let {
          node,
          children,
          parent,
          parentIdx
        } = t[t.length - 1];
        if (children && children.length > 0) {
          let e = children.pop();
          isValidElement(e) && t.push({
            node: e,
            children: 'children' in e.props ? Children.toArray(e.props.children) : null,
            parentIdx: children.length,
            parent: node
          });
        } else if (t.pop(), isValidElement(node)) {
          let t = [];
          let i = !1;
          'children' in node.props && Children.forEach(node.props.children, (e, a) => {
            isValidElement(e) || i || (i = !0);
            t.push(r.get(node)?.get(a) || e);
          });
          let o = i ? {
            style: {
              ...node.props.style,
              whiteSpace: 'pre-wrap'
            }
          } : void 0;
          let l = cloneElement(node, o, ...t);
          if (node === e) return l;
          parent && parentIdx !== null && (r.has(parent) || r.set(parent, new Map()), r.get(parent)?.set(parentIdx, l));
        }
      }
      return e;
    }(function (e) {
      let t = [];
      for (let r = 0; r < e.length; r++) {
        let n = e[r];
        let i = e[r];
        rV(n) ? i = createElement('br') : rH(n) && (i = createElement('span', null, n));
        t.push(i);
        rH(n) && r < e.length - 1 && t.push(createElement('br'));
      }
      return createElement(_$$Fragment, null, t);
    }(_$$rp(r, _$$d5.DISPLAY)));
    let n = document.createElement('div');
    let i = _$$H3(n);
    flushSync(() => {
      i.render(createElement(_$$Fragment, null, e));
    });
    n.innerHTML && t.push(n.innerHTML);
  }
  return t.join('<br>');
}
let rW = new class {
  readRichTextFromHtml(e) {
    return function (e) {
      let t = '';
      let r = [];
      let n = [];
      function i(e) {
        let i = rB(e);
        e.whiteSpace || (t = t.replace(/[ \t]+$/, ''));
        t && (t = t.replace(/^[\n\u2028\u2029]/u, ''), n.push({
          content: t,
          lineStyle: i,
          styleOverrides: r
        }));
        t = '';
        r = [];
      }
      (function e(n, a) {
        switch (n.nodeType) {
          case Node.TEXT_NODE:
            {
              let e;
              let i = rU(t);
              if (a.whiteSpace) {
                e = n.textContent.replace(/[\n\u2029]/gu, '\u2028');
              } else if (getFeatureFlags().ce_preserve_rich_text_whitespace) {
                let t = n.textContent.match(/^\n+$/);
                e = n.textContent.replace(/\n\u0020*/gu, t ? '' : ' ');
              } else {
                e = n.textContent.replace(/[\t\n\r\u0020]+/g, ' ');
                (!t || /[\t\n\r\u0020]$/.test(t)) && (e = e.replace(/^[\t\n\r\u0020]+/, ''));
              }
              t += e;
              let s = rG(a);
              if (s) {
                let e = rU(t);
                let n = r.length > 0 ? r[r.length - 1] : void 0;
                n && n.end === i && deepEqual(n.style, s) ? n.end = e : r.push({
                  start: i,
                  end: e,
                  style: s
                });
              }
              break;
            }
          case Node.ELEMENT_NODE:
            {
              let {
                treatment,
                style
              } = function (e, t) {
                let r = null;
                let n = t;
                if (['block', 'inline', 'none'].includes(e.style.display)) {
                  switch (e.style.display) {
                    case 'block':
                      r = 2;
                      break;
                    case 'inline':
                      r = 3;
                      break;
                    default:
                      r = 0;
                  }
                } else {
                  r = e.matches('style, meta, title, script') ? 0 : e.matches('br') ? 1 : e.matches('html, body, h1, h2, h3, h4, h5, h6, p, div, li, ol, ul') ? 2 : 3;
                }
                {
                  let r = e.getAttribute('dir');
                  let i = t.direction;
                  r === 'rtl' ? i = TextDirection.RTL : r === 'ltr' && (i = TextDirection.LTR);
                  n = i !== n.direction ? {
                    ...n,
                    direction: i
                  } : n;
                }
                ['pre', 'pre-wrap'].includes(e.style.whiteSpace) && (n = {
                  ...n,
                  whiteSpace: 'pre'
                });
                e.matches('ul') && (n = {
                  ...n,
                  bulletStyle: RichTextType.UNORDERED_LIST,
                  indent: 1 + t.indent
                });
                e.matches('ol') && (n = {
                  ...n,
                  bulletStyle: RichTextType.ORDERED_LIST,
                  indent: 1 + t.indent
                });
                e.matches('a[href]') && (n = {
                  ...n,
                  hyperlink: e.getAttribute('href')
                });
                return {
                  treatment: r,
                  style: n
                };
              }(n, a);
              switch (treatment) {
                case 2:
                  {
                    let t = rB(style);
                    for (let r of (i(rB(a)), n.childNodes)) e(r, t);
                    i(t);
                    break;
                  }
                case 1:
                  {
                    let e = rU(t);
                    t += '\u2028';
                    let n = rG(a);
                    if (n) {
                      let i = rU(t);
                      let a = r.length > 0 ? r[r.length - 1] : void 0;
                      a && a.end === e && deepEqual(a.style, n) ? a.end = i : r.push({
                        start: e,
                        end: i,
                        style: n
                      });
                    }
                    break;
                  }
                case 3:
                  for (let t of n.childNodes) e(t, style);
              }
              break;
            }
          case Node.DOCUMENT_FRAGMENT_NODE:
          case Node.DOCUMENT_NODE:
            for (let t of n.childNodes) e(t, a);
        }
      })(e, rF);
      i(rF);
      return n;
    }(new DOMParser().parseFromString(e, 'text/html'));
  }
  createHtmlFromTextNodes(e) {
    return function (e) {
      let t = [];
      for (let r of e) {
        let e = getSingletonSceneGraph().get(r);
        e && t.push(q4(e));
      }
      return rz(t);
    }(e);
  }
  createHtmlFromTextData(e) {
    if (e === -1) return '';
    let t = TextData_Internal.getOrCreateJsCopy(e);
    return rz([{
      characters: t.characters,
      characterStyleIDs: t.characterStyleIDs,
      styleOverrideTable: t.styleOverrideTable,
      lines: t.lines
    }]);
  }
}();
let rq = new class {
  setSitesViewState(e) {
    atomStoreManager.set(sitesViewSetterAtomFamily, e);
  }
  getSitesViewState() {
    return atomStoreManager.get(sitesViewSetterAtomFamily);
  }
}();
let ni = nn;
let na = {
  readSync(e) {
    let t = new (ni())();
    t.load(e);
    return Object.keys(t.files).map(e => {
      let r = t.file(e).asUint8Array();
      return {
        name: e,
        contents: r
      };
    });
  },
  writeSync(e) {
    try {
      let t = new (ni())();
      for (let r of e) {
        t.file(r.name, r.contents, {
          compression: r.compressionLevel === PerfQuality.NONE ? 'STORE' : 'DEFLATE'
        });
      }
      return t.generate({
        type: 'uint8array'
      });
    } catch (e) {
      reportError(_$$e.SCENEGRAPH_AND_SYNC, e);
      return new Uint8Array();
    }
  }
};
let ns = {
  CommonApp: () => ({
    ...LO,
    ..._$$N3(),
    appType: () => UserAppType.FullscreenApp
  }),
  AccessibleAreasBindings: () => _$$H2,
  OOMHelpers: () => userValue,
  WebReporting: () => _$$F2,
  PlatformInfo: () => browserCapabilities,
  FontManagerJs: () => _$$h,
  WebAsync: () => _$$F,
  JsBindingsTestHelpers: () => rx,
  ImageTsBindings: () => j5,
  PdfImportBindings: () => IY,
  InteractionBindings: () => Dt,
  SitesBindings: () => rq,
  SitesJsBindings: () => _$$u2,
  SlidesTsBindings: () => e0,
  CooperTsBindings: () => ew,
  BoundsWatcherTs: Iu,
  FigmaApp: () => fullscreenValue,
  AutoLayoutBindings: () => mX,
  CurrentUserInfo: () => inputValue,
  WebSelection: () => sessionValue,
  WebMultiplayer: () => flagValue,
  WebUserSyncing: () => R9,
  EmojiWheelBindings: () => CB,
  Comments: () => _$$lS,
  PluginCallbacks: () => _$$d4,
  WidgetBindings: () => _$$x2,
  VideoTsBindings: () => fm,
  JsKiwiSerialization: () => _$$K,
  TsFontManualLoader: () => _$$S2,
  StylesCheckBindings: () => modalValue,
  AutosaveSessionBindings: () => _$$X2,
  CanvasSearchBindings: () => _$$r2,
  AccessibilityBindings: () => Lj,
  HandoffScenegraphBindings: () => _$$ld,
  RichTextBindings: () => rW,
  SpellCheckAPIBindings: () => $4,
  VariablesBindingsWeb: () => WH,
  VariablesMirrorBindings: () => DQ,
  AssetMirrorBindings: () => assetMirrorInstance,
  AssetConsumptionMirrorBindings: () => BF,
  HandoffBindings: () => z4,
  HandoffCallbacks: () => _$$rS,
  JSTextLayout: () => LineBreakProcessor,
  ScaleToolAPIBindings: () => _$$h2,
  LinterBindings: () => zT,
  EmojiTsBindings: () => jm,
  NodeChatMessageHelper: () => _$$sv,
  MentionsTsBindings: () => _$$YN,
  EditScopeWebBindings: () => xo,
  StateManagementBindings: () => XO,
  ColorManagementBindings: () => _$$l2,
  KeyboardShortcutBindings: () => _$$Gm,
  WhiteboardTemplatePreviewTsBindings: () => _$$t3,
  FrameDistributionTrackerBindings: () => _$$ip,
  WhiteboardTsBindings: () => _$$nz,
  CodeBlockBindings: () => rd,
  ColorRampBindings: () => C5,
  WhiteboardAnalyticsTsBindings: () => bN,
  ExperimentBuildersTsBindings: () => Zc,
  ZipImpl: () => na,
  CoreUtils: () => _$$x,
  SummaryBindings: () => Vm,
  SceneGraphHookBindings: () => _$$uo,
  MissingFontsTrackerJs: () => _$$ZO,
  StatsigConfigBindings: () => gR,
  WhiteboardThemeTsBindings: () => _$$rG,
  QuickActionsBindings: () => ZO,
  BranchingWebBindings: () => _$$B,
  SafeModeOptions: () => safeModeRenderController,
  DSAWebBindings: () => Tl,
  WhiteboardDltConstantBindings: () => yu,
  DeprecatedXHRSendBindings: () => yx,
  ComponentPropBindings: () => XA,
  ImageIo: () => imageAPI,
  HTMLWindowBindings: () => IM,
  WebGPUTsContext: () => NP,
  TsGlContextBindings: _$$X,
  ScreenBindings: () => _$$N2,
  FullscreenWebSocketTsCallbacks: () => Pp,
  AutosuggestTextBindings: () => z5,
  VariablesJsRuntimeAliasTsBindings: () => additionalValue,
  AutoSuggestAssetBindings: () => Qw,
  UndoRedoEventsBindings: () => wV,
  ScenegraphStringManagementBindings: () => Bm,
  ThumbnailRequestManager: Db,
  UserActionTimingBindings: () => _$$st,
  PrototypingFormatter: () => _$$u,
  SlotsBindingsWeb: () => mn,
  jsHelpers: {
    reportError: captureException,
    preventEnteringCpp: () => _$$y.preventEnteringCpp(),
    fatalCppError(e, t) {
      _$$y.fatalCppError(e, t);
    }
  },
  ThumbhashBindings: () => we
};
let nu = function () {
  return null;
};
let nB = document.documentElement.style;
let nG = memo(e => {
  let t;
  let r;
  let n = isWhiteboardFileType();
  let i = isDesignFileType();
  let a = useIsSelectedFigmakeFullscreen();
  let s = isSitesFileType();
  let o = Ye();
  let d = getVisibleTheme();
  let c = useThemeContext().colorBg;
  let u = useSelector(e => {
    if (i || s) {
      let t = e.mirror.selectionProperties.backgroundColor;
      return colorCSSManipulatorInstance.format(t);
    }
    return n ? getThemeBackgroundColor('light') : a ? c : getThemeBackgroundColor(d);
  });
  let p = isColorDarkByLuminance(u);
  let _ = Yk();
  let h = Cg();
  let m = useRef(null);
  let {
    width
  } = wY(m) || {
    EMPTY_SIZE: _$$cU
  };
  let f = h < (width || 0) + 32 ? _ : 0;
  useEffect(() => {
    nB.setProperty('--cookie-banner-persistent-message-bottom-margin', `${f}px`);
  }, [f]);
  useEffect(() => () => {
    nB.setProperty('--cookie-banner-persistent-message-bottom-margin', '0px');
  }, []);
  e.consentRegion === 'implicit' ? (t = Ml, r = _$$e4) : e.consentRegion === 'explicit' && (t = _$$aJ(), r = Sz());
  return jsx('div', {
    'role': 'region',
    'aria-label': t,
    'style': {
      backgroundColor: u
    },
    'className': j()(o && jM, RO, p ? _$$ub : wI),
    'ref': m,
    'children': jsx(interactiveAnchorTracked, {
      rel: 'noopener',
      target: '_blank',
      href: r,
      children: t
    })
  });
});
let nV = memo(() => {
  let e = useSelector(e => e.mirror.appModel.isInitialized);
  let t = getUserId();
  return !e || t ? null : getInitialOptions().consent_region === 'implicit' ? jsx(C$, {
    variant: _$$a3.FILE_VIEWER,
    dismissIcon: _$$A,
    verticalPadding: 32,
    SecondaryButton: e => jsx(Button, {
      'onClick': e.onClick,
      'variant': 'primary',
      'data-testid': e['data-testid'],
      'children': e.children
    }),
    persistentMessage: jsx(nG, {
      consentRegion: 'implicit'
    })
  }) : getInitialOptions().consent_region === 'explicit' ? jsx(ZQ, {
    variant: _$$a3.FILE_VIEWER,
    dismissIcon: _$$A,
    verticalPadding: 32,
    PrimaryButton: e => jsx(Button, {
      'onClick': e.onClick,
      'variant': 'primary',
      'data-testid': e['data-testid'],
      'children': e.children
    }),
    SecondaryButton: e => jsx(Button, {
      'onClick': e.onClick,
      'variant': 'secondary',
      'data-testid': e['data-testid'],
      'children': e.children
    }),
    persistentMessage: jsx(nG, {
      consentRegion: 'explicit'
    })
  }) : null;
});
let nY = new _$$b({
  name: 'community',
  description: 'The figma community product surface',
  exports: {
    './views': './views.tsx'
  },
  dependencies: [],
  enforce: !1,
  eslint: {
    rules: {
      'react/no-array-index-key': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
});
let nX = setupLoadablePageManager(atomStoreManager, 'Community');
let nq = 'filebrowser-loading-page';
let nJ = createSnapshotComponent(nq, e => {
  e.setAttribute('id', '');
  e.classList.remove('hidden');
  e.classList.remove('fadeOut');
});
function nZ() {
  hideElementById(nq);
}
let nQ = nY.createLazyComponent(async () => {
  let {
    CommunityLoggedInView
  } = await Promise.all([]).then(_require2);
  return nX.LoadablePage(CommunityLoggedInView, nJ, nZ);
}, {
  loading: nJ,
  error: NONE_SYMBOL.NONE,
  componentName: 'CommunityView'
});
let n0 = new _$$b({
  name: 'fullscreen_cooper',
  dependencies: [],
  exports: {
    './atoms': './atoms.ts',
    './cooper_right_panels': './cooper_right_panels.tsx',
    './constants': './constants.ts',
    './cooper_bindings': './cooper_bindings.ts',
    './cooper_default_templates': './cooper_default_templates.ts',
    './is_buzz': './is_buzz.ts',
    './buzz_view_state': './hooks/buzz_view_state.ts',
    './assets': './assets/**/*',
    './behaviors': './behaviors/**/*',
    './toolbar': './toolbar/**/*',
    './left_panel': './left_panel/**/*',
    './inline_menu': './inline_menu/**/*',
    './inserts': './inserts/**/*',
    './onboarding': './onboarding/**/*',
    './right_panels': './right_panels/**/*',
    './search': './search/**/*',
    './shared': './shared/**/*',
    './templates': './templates/**/*',
    './utils': './utils/**/*',
    './properties_panel': './properties_panel/**/*',
    './lazy_cooper_view': './lazy_cooper_view.tsx',
    './buzz_bulk_create_atoms': './buzz_bulk_create_atoms.ts',
    './hooks': './hooks/**/*'
  },
  sideEffects: !1,
  routeHints: ['fullscreen_cooper'],
  eslint: {
    rules: {
      'react/no-array-index-key': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
}).createLazyComponent(() => Promise.all([]).then(_require3).then(e => e.CooperView), {
  componentName: 'LazyCooperView',
  error: NONE_SYMBOL.NONE
});
var n5 = (e => (e[e.ReloadNow = 0] = 'ReloadNow', e[e.ReloadWhenConvenient = 1] = 'ReloadWhenConvenient', e))(n5 || {});
function n6(e) {
  getFeatureFlags().ip_restrictions_livegraph_auth_failure && e.type === 'CONNECTION_STATE' && e.state.type === 'error' && e.state.errorType === 'authFail' && getRequest('/api/ip_check').catch(e => {
    if (e?.data?.status === 403 && ['ip_allowlist', 'ip_account_restriction'].includes(e?.data?.reason) && !customHistory.location.pathname.includes('ip_account_restriction')) {
      let t = e.data.reason === 'ip_account_restriction' ? 'network_access_restriction' : e.data.reason;
      let r = `/ip_account_restriction?reason=${t}&redirect_uri=${encodeURIComponent(window.location.href)}`;
      location.assign(r);
    }
  });
}
let im = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v6.172c0 2.227-2.693 3.342-4.268 1.767L10 10.707V14a.5.5 0 0 1-1 0V9.5a.5.5 0 0 1 .5-.5H14a.5.5 0 0 1 0 1h-3.293l4.732 4.732c.945.945 2.561.276 2.561-1.06V7.5A1.5 1.5 0 0 0 16.5 6h-9A1.5 1.5 0 0 0 6 7.5v9A1.5 1.5 0 0 0 7.5 18h5a.5.5 0 0 1 0 1h-5A2.5 2.5 0 0 1 5 16.5z',
      clipRule: 'evenodd'
    })
  });
});
function iL() {
  let {
    cancelCallback,
    onDragEnd,
    initialPosition,
    width,
    height,
    displayed
  } = useAtomWithSubscription(_$$D2);
  let {
    titleIconURL,
    titleIconSvgSrc,
    title
  } = useAtomWithSubscription(_$$d7);
  let c = _$$ox({
    preventUserResize: !0
  });
  let [u, p] = useState(!1);
  let [_, h] = useState(!1);
  let m = useRef(null);
  let g = useCallback(e => {
    if (!1 !== e.commit || u || p(!0), !0 === e.commit) {
      let r;
      let n = new Point(e.position.x, e.position.y);
      let i = (r = m.current) ? ik(r.getBoundingClientRect(), n, !0) : null;
      p(!1);
      i && !i.equals(c.position) ? (c.setPosition(i), onDragEnd && onDragEnd(i)) : onDragEnd && onDragEnd(n);
    }
  }, [c, u, onDragEnd]);
  useEffect(() => {
    if (m.current && displayed) {
      let e = m.current.getBoundingClientRect().height;
      c.setSize({
        x: width,
        y: height + e
      });
      let {
        x,
        y
      } = r;
      let s = ik(new DOMRect(x, y, width, e), initialPosition, !0);
      c.setPosition(s);
    }
  }, [c, width, height, initialPosition, displayed]);
  useLayoutEffect(() => {
    _ || h(!0);
  }, [_, h]);
  let f = useCallback(t => {
    switch (t.source) {
      case 'outside':
      case 'escape':
        break;
      case 'button':
      case 'other':
        cancelCallback && cancelCallback();
        break;
      default:
        throwTypeError(t.source);
    }
  }, [cancelCallback]);
  return _ ? jsxs('div', {
    style: {
      display: displayed ? '' : 'none'
    },
    className: `${_$$o2} ${xE}`,
    children: [jsx(_$$_L, {
      manager: c,
      onClose: f,
      defaultPosition: initialPosition,
      onTransform: g,
      htmlAttributes: {
        'hidden': !displayed,
        'data-testid': 'pluginModalWindow'
      },
      recordingKey: 'pluginModal',
      children: jsxs(DialogContents, {
        children: [jsxs(DialogHeader, {
          ref: m,
          children: [jsx(DialogTitle, {
            children: jsx('div', {
              className: _$$s3.flex.justifyBetween.alignCenter.cursorDefault.selectNone.$,
              children: jsxs('div', {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  flex: 1
                },
                children: [titleIconURL && jsx('div', {
                  className: _$$eo,
                  children: jsx(_$$oW, {
                    src: titleIconURL,
                    alt: ''
                  })
                }), titleIconSvgSrc && jsx('div', {
                  className: _$$fp,
                  children: jsx(SvgComponent, {
                    svg: titleIconSvgSrc,
                    className: _$$v3
                  })
                }), jsx('div', {
                  className: TX,
                  style: {
                    maxWidth: `calc(${width}px - 120px`
                  },
                  children: title
                })]
              })
            })
          }), jsx(DialogActionStrip, {
            children: jsx(iD, {})
          })]
        }), jsx(DialogBody, {
          padding: 0,
          children: jsx(_$$j2, {
            iframeId: PluginIframeMode.MODAL,
            dragging: u
          })
        })]
      })
    }), jsx(_$$j2, {
      iframeId: PluginIframeMode.FETCH
    })]
  }) : null;
}
let iP = [FEditorType.Cooper];
function iD() {
  let e = debugState.getState().selectedView;
  let t = getEditorTypeFromView(e);
  return iP.includes(t) ? jsx(IconButton, {
    'onClick': () => {
      let e = PluginUIManager.getInstance();
      t === FEditorType.Cooper && (e?.switchContainer(PluginIframeMode.BUZZ_LEFT_PANEL), atomStoreManager.set(FP, PluginIframeMode.BUZZ_LEFT_PANEL), atomStoreManager.set(Lk, _$$x3.PLUGINS));
    },
    'aria-label': getI18nString('cooper.plugins.dock'),
    'children': jsx(im, {})
  }) : null;
}
function ik(e, t, r) {
  let {
    top,
    bottom,
    width,
    height,
    right,
    left
  } = e;
  let d = r ? G5 : _$$eN;
  let c = I_;
  let u = t.y;
  top < d ? u = d : bottom > window.innerHeight - c && (u = Math.max(d, window.innerHeight - (height + c)));
  let p = _$$lq;
  let _ = _$$em;
  let h = t.x;
  left < _ ? h = _ : right > window.innerWidth - p && (h = window.innerWidth - (p + width));
  return new Point(h, u);
}
function ij(e) {
  return jsx('div', {
    className: 'abuse_report_form_view-module--reportAbusePage--yB3Iw',
    children: jsxs('div', {
      className: 'abuse_report_form_view-module--reportAbuseFormBox--7ckjg',
      children: [jsx('div', {
        className: 'abuse_report_form_view-module--title--T--Mc',
        children: renderI18nText('report_abuse.title')
      }), jsx(_$$A2, {
        reportedContent: e.reportedContent
      })]
    })
  });
}
function iW() {
  let e;
  let t;
  let r;
  let n;
  let i = getSelectedView();
  if (!isMonetizationRedirectView(i)) return null;
  let {
    redirectUrl,
    interstitialType
  } = i;
  interstitialType === OnboardingStep.ONBOARDING && (e = renderI18nText('community.seller.setup_complete'), t = renderI18nText('community.seller.head_back_to_figma_to_start_selling'), r = _$$A3, n = 'community_monetization_desktop_interstitial--stripeToFigmaLogo--819Zk');
  return jsx(_$$w, {
    children: jsx(_$$u4, {
      useOriginalSrcFills: !0,
      imageSrc: r,
      imageClassName: n,
      headerText: e,
      secondaryText: t,
      children: jsx(BigButtonPrimaryTracked, {
        onClick: () => {
          Sr(redirectUrl, B3.COMMUNITY_INTERSTITIAL);
        },
        className: 'community_monetization_desktop_interstitial--button--Eq1kl',
        children: renderI18nText('community.buyer.return_to_desktop_app')
      })
    })
  });
}
function iq() {
  let e = _$$aq();
  let t = useDispatch();
  let r = QL('locale');
  let n = QL('hub_file_id');
  let i = QL('name');
  useEffect(() => {
    XHR.post('/api/try/figjam', {
      hub_file_id: n,
      locale: r,
      name: i
    }).then(r => {
      e() && (t(selectViewAction({
        view: 'fullscreen',
        fileKey: r.data.meta.file_key,
        editorType: FEditorType.Whiteboard
      })), r.data.meta.missing_hub_file && t(FlashActions.error(getI18nString('figjam_try.template_creation_failed'))));
    }).catch(e => {
      console.error(e);
      t(FlashActions.error(getI18nString('figjam_try.failed_to_create_file')));
      setTimeout(() => window.history.go(-1), 2e3);
    });
  }, [t, e, n, r, i]);
  return jsx(_$$A4, {
    loaded: !1,
    loadingElementId: 'loading-content-pane'
  });
}
class al extends _$$X3 {
  constructor(e, t) {
    super();
    this.resource = e;
    this.blobs = t;
    this.rootNodes = [];
    this.nodesById = new Map();
    this.nodesByGuid = new Map();
    this.isComplete = !1;
  }
  addNode(e, t = !0) {
    this.nodesById.set(e.id, e);
    this.nodesByGuid.set(e.guid, e);
    t && this.rootNodes.push(e);
  }
  getNodeById(e) {
    return this.nodesById.get(e) ?? null;
  }
  getNodeByGuid(e) {
    return this.nodesByGuid.get(e) ?? null;
  }
  getStyleByStyleId(e) {
    return this.searchNodes({
      type: 'style',
      styleId: e
    })[0] ?? null;
  }
  getVariableByVariableId(e) {
    return this.searchNodes({
      type: 'variable',
      variableId: e
    })[0] ?? null;
  }
  getVariableOverrideByVariableOverrideId(e) {
    return this.searchNodes({
      type: 'variable_override',
      variableOverrideId: e
    })[0] ?? null;
  }
  getVariableCollectionByCollectionId(e) {
    return this.searchNodes({
      type: 'variable_collection',
      variableCollectionId: e
    })[0] ?? null;
  }
  getCodeFileById(e) {
    return this.searchNodes({
      type: 'code_file',
      codeFileId: e
    })[0] ?? null;
  }
  getCodeComponentById(e) {
    return this.searchNodes({
      type: 'code_component',
      codeComponentId: e
    })[0] ?? null;
  }
  getCodeLibraryById(e) {
    return this.searchNodes({
      type: 'code_library',
      codeLibraryId: e
    })[0] ?? null;
  }
  getBlobByIndex(e) {
    return this.blobs[e] ?? null;
  }
  get searchDb() {
    this._searchDb || (this._searchDb = new _$$H5(), this._searchDb.indexObjects(Array.from(this.nodesByGuid.values())));
    return this._searchDb;
  }
  searchNodes(e) {
    return this.searchDb.searchWithProperties(e).map(e => e.object);
  }
}
class ad extends al {
  constructor() {
    super(...arguments);
    this.nodesByParentGuid = new MultiValueMap();
    this.isComplete = !0;
  }
  addNode(e) {
    let t = e.parentGuid;
    t && this.nodesByParentGuid.add(t, e);
    super.addNode(e, e.parentGuid == null);
  }
  getChildrenByParentGuid(e) {
    return this.nodesByParentGuid.get(e);
  }
  getStyleConsumers(e) {
    return this.searchNodes({
      consumedStyleIds: e
    });
  }
  getVariableConsumers(e) {
    return [];
  }
  getNodesWithExplicitModeForVariableSet(e) {
    return [];
  }
  getVariablesInCollection(e) {
    return [];
  }
  getVariableOverridesInExtendedCollection(e) {
    return [];
  }
  getDirectVariableDependenciesToVariable(e) {
    return [];
  }
  get document() {
    return this.rootNodes.find(e => e.isDocument);
  }
  get pages() {
    return this.rootNodes.filter(e => e.isPage);
  }
  get internalCanvas() {
    return this.pages.find(e => e.nodeChange.internalOnly) ?? null;
  }
}
class ac extends _$$$ {
  setSceneGraphValidationInfo(e) {
    this.sceneGraphValidationInfo = new _$$m2(this.scene, e);
  }
  constructor({
    name: e,
    sensitiveTextPolicy: t,
    nodeChanges: r,
    blobs: n,
    migrationVersion: i
  }) {
    super({
      name: e,
      sensitiveTextPolicy: t
    });
    this.scene = new au(this, r, n);
    this.migrationVersion = i;
  }
  get metadata() {
    return {
      'Migration version': this.migrationVersion.toString()
    };
  }
  getSearch() {
    return Promise.resolve(this.scene.searchDb);
  }
  getAdditionalProperties(e) {
    if (!this.sceneGraphValidationInfo) return [];
    let t = this.sceneGraphValidationInfo.generateProperty(e);
    return t ? [t] : [];
  }
  getAdditionalBadges(e) {
    return this.sceneGraphValidationInfo ? this.sceneGraphValidationInfo.generateBadges(e) : [];
  }
}
class au extends ad {
  constructor(e, t, r) {
    for (let n of (super(e, r), t)) {
      let e = n.guid;
      if (!e) {
        console.error('NodeChange missing guid', this, n);
        continue;
      }
      let t = SW.fromString(_$$c2.fromKiwi(e));
      this.addNode(new ap(t, n, this));
    }
  }
}
class ap extends _$$E2 {}
class af extends _$$R3 {
  constructor({
    migrationVersion: e,
    blobs: t,
    chunks: r,
    ...n
  }) {
    super(n);
    this.migrationVersion = e;
    this.chunks = r.map((e, r) => new aE(this, {
      index: r,
      blobs: t,
      ...e
    }));
    this.journalSearchDB = new _$$H5();
    this.journalSearchDB.indexObjects(this.chunks);
    this.combinedSearchDB = new _$$U([this.journalSearchDB, ...this.chunks.map(e => e.scene.searchDb)]);
  }
  get rootObjects() {
    return this.chunks;
  }
  get metadata() {
    return {
      'Migration version': this.migrationVersion.toString()
    };
  }
  getObject(e) {
    let {
      chunkIndex,
      guid
    } = function (e) {
      let [t, r] = e.split('-');
      return {
        chunkIndex: Number(t),
        guid: r ? _$$c2.fromString(r) : void 0
      };
    }(e);
    let n = this.chunks[chunkIndex];
    return guid ? n?.scene.getNodeByGuid(guid) : n;
  }
  getSearch() {
    return Promise.resolve(this.combinedSearchDB);
  }
}
class aE extends _$$s5 {
  constructor(e, {
    canvasId: t,
    canvasName: r,
    canvasIsInternal: n,
    chunksAffectingThisChunk: i,
    displayNode: a,
    parentNodeChanges: s,
    index: o,
    nodeChanges: l,
    blobs: d
  }) {
    super(aT({
      chunkIndex: o
    }));
    this.resource = e;
    this.index = o;
    this.canvasId = t ? _$$c2.fromKiwi(t) : null;
    this.canvasName = r ?? null;
    this.canvasIsInternal = n ?? null;
    this.chunksAffectingThisChunk = i ?? null;
    this.scene = new ay(this, l, d);
    this.displayNode = a ?? null;
    this.parentNodeChanges = s;
  }
  get parent() {
    return null;
  }
  get children() {
    return this.scene.rootNodes;
  }
  generateDisplayProperties() {
    let e = this.index === aI ? 'Unchunked Nodes' : 'Chunk';
    return {
      leftBadges: [{
        type: 'type',
        value: 'DIFF_CHUNK'
      }],
      primaryId: this.index === aI ? '?' : String(this.index),
      secondaryId: null,
      name: '',
      longName: `Page ${this.canvasName ?? 'unknown'} > ${e}`,
      rightBadges: [],
      memoryFraction: null
    };
  }
  generateSearchProperties() {
    return {};
  }
  generateRawProperties() {
    return QB([this.canvasId != null && B_('Canvas id', {
      type: 'genericGuid',
      value: this.canvasId
    }), this.canvasName != null && B_('Canvas name', {
      type: 'userInputtedText',
      value: this.canvasName,
      scene: this.scene
    }), this.canvasIsInternal != null && B_('Canvas is internal', {
      type: 'boolean',
      value: this.canvasIsInternal
    }), this.chunksAffectingThisChunk != null && $7({
      label: 'Chunks affecting this chunk',
      list: this.chunksAffectingThisChunk,
      generateChild: (e, t) => B_(e, {
        type: 'objectId',
        value: aT({
          chunkIndex: t
        })
      })
    }), this.displayNode != null && {
      label: 'Display node',
      children: this.scene.generateNodeChangeItems(this.displayNode)
    }, $7({
      label: 'Parent node changes',
      list: this.parentNodeChanges,
      generateChild: (e, t) => ({
        label: e,
        key: t.guid && _$$c2.fromKiwi(t.guid),
        children: this.scene.generateNodeChangeItems(t)
      })
    })]);
  }
  generateComputedProperties() {
    return [];
  }
}
class ay extends al {
  constructor(e, t, r) {
    for (let n of (super(e.resource, r), this.chunk = e, t)) {
      let e = n.guid;
      if (!e) {
        console.error('NodeChange missing guid', this, n);
        continue;
      }
      let t = aT({
        chunkIndex: this.chunk.index,
        guid: _$$c2.fromKiwi(e)
      });
      this.addNode(new ab(t, n, this));
    }
  }
}
class ab extends _$$R2 {
  constructor(e, t, r) {
    super(e, t, r);
    this.id = e;
    this.nodeChange = t;
    this.scene = r;
  }
  get parent() {
    return this.scene.chunk;
  }
  get children() {
    return [];
  }
}
function aT({
  chunkIndex: e,
  guid: t
}) {
  return SW.fromString(t ? `${e}-${t}` : String(e));
}
let aI = -1;
let aA = av;
class aC extends _$$R3 {
  constructor({
    journalInputs: e,
    sensitiveTextPolicy: t,
    fileKey: r,
    startSequenceNumber: n,
    endSequenceNumber: i
  }) {
    super({
      name: 'Multiplayer Journal Browser',
      sensitiveTextPolicy: t
    });
    this.fileKey = r;
    this.startSequenceNumber = n;
    this.endSequenceNumber = i;
    this.journals = e.map(e => new aw(e, this));
    this.journalSearchDB = new _$$H5();
    this.journalSearchDB.indexObjects(this.journals);
    this.combinedSearchDB = new _$$U([this.journalSearchDB, ...this.journals.map(e => e.scene.searchDb)]);
  }
  get metadata() {
    return {
      fileKey: this.fileKey,
      startSequenceNumber: this.startSequenceNumber,
      endSequenceNumber: this.endSequenceNumber
    };
  }
  get rootObjects() {
    return this.journals;
  }
  getObject(e) {
    let {
      endSequenceNumber,
      guid
    } = aL(e);
    let n = this.journals.find(e => e.endSequenceNumber === endSequenceNumber) ?? null;
    return n ? guid ? n.scene.getNodeByGuid(guid) : n : null;
  }
  getSearch() {
    return Promise.resolve(this.combinedSearchDB);
  }
}
class aw extends _$$s5 {
  constructor({
    startSequenceNumber: e,
    endSequenceNumber: t,
    userIdToChangeCount: r,
    createdAt: n,
    ...i
  }, a) {
    super(aP({
      endSequenceNumber: t
    }));
    this.collection = a;
    this.startSequenceNumber = e;
    this.endSequenceNumber = t;
    this.createdAtUtc = n;
    this.migrationVersion = i.migrationVersion;
    this.userIdToChangeCount = r;
    this.scene = new aO(i, this);
    this.createdCount = this.scene.rootNodes.filter(e => e.phase === 'CREATED').length;
    this.modifiedCount = this.scene.rootNodes.filter(e => e.phase === 'MODIFIED').length;
    this.removedCount = this.scene.rootNodes.filter(e => e.phase === 'REMOVED').length;
  }
  get type() {
    return 'JOURNAL_ENTRY';
  }
  get parent() {
    return null;
  }
  get children() {
    return this.scene.rootNodes;
  }
  get fileKey() {
    return this.collection.fileKey;
  }
  get sequenceRange() {
    return `(${this.startSequenceNumber}..${this.endSequenceNumber})`;
  }
  get changeCount() {
    return this.scene.rootNodes.length;
  }
  get createdAtLocal() {
    return new Date(this.createdAtUtc).toLocaleString();
  }
  get localTime() {
    return new Date(this.createdAtUtc).toLocaleTimeString();
  }
  get utcTime() {
    return this.createdAtUtc.slice(11);
  }
  get editScopes() {
    return aA()(this.scene.rootNodes.map(e => e.editScopes).flat(), JSON.stringify).sort(_$$nd);
  }
  get editScopeSnapshots() {
    return aA()(this.scene.rootNodes.flatMap(e => e.nodeChange.editScopeInfo?.snapshots ?? []), JSON.stringify);
  }
  generateDisplayProperties() {
    let e = this.editScopes;
    let t = `${this.changeCount} changes at ${this.createdAtLocal}`;
    return {
      leftBadges: [{
        type: 'type',
        value: 'JOURNAL_ENTRY'
      }, TZ(e)],
      primaryId: this.sequenceRange,
      secondaryId: null,
      name: t,
      longName: `Journal with ${t}`,
      rightBadges: [],
      memoryFraction: null
    };
  }
  generateSearchProperties() {
    return {
      startSequenceNumber: this.startSequenceNumber,
      endSequenceNumber: this.endSequenceNumber,
      userId: Object.keys(this.userIdToChangeCount),
      createdAt: [this.createdAtUtc, this.createdAtLocal, this.localTime, this.utcTime]
    };
  }
  generateRawProperties() {
    return [B_('Start sequence number', {
      type: 'numeric',
      value: Number(this.startSequenceNumber)
    }), B_('End sequence number', {
      type: 'numeric',
      value: Number(this.endSequenceNumber)
    }), {
      label: 'Created at',
      children: [B_('In UTC', {
        type: 'nonUserText',
        value: this.createdAtUtc
      }), B_('In local time', {
        type: 'nonUserText',
        value: this.createdAtLocal
      })],
      expandByDefault: !0
    }, B_('Migration version', {
      type: 'numeric',
      value: this.migrationVersion
    }), _$$o4({
      label: 'User change counts',
      object: this.userIdToChangeCount,
      generateChild: (e, t) => t != null ? B_(e, {
        type: 'numeric',
        value: t
      }) : null,
      expandByDefault: !0
    })];
  }
  generateComputedProperties() {
    return [this.scene.editScopePropertyGenerator.generateEditScopeSnapshotsItem(this.editScopeSnapshots), this.generateChangedNodesItem()];
  }
  generateChangedNodesItem() {
    return {
      label: 'Changed nodes',
      value: {
        type: 'numeric',
        value: this.scene.rootNodes.length
      },
      children: [B_('Created', {
        type: 'numeric',
        value: this.scene.rootNodes.filter(e => e.phase === 'CREATED').length
      }), B_('Modified', {
        type: 'numeric',
        value: this.scene.rootNodes.filter(e => e.phase === 'MODIFIED').length
      }), B_('Removed', {
        type: 'numeric',
        value: this.scene.rootNodes.filter(e => e.phase === 'REMOVED').length
      })],
      expandByDefault: !0
    };
  }
}
class aO extends al {
  constructor({
    schema: e,
    nodeChanges: t,
    blobs: r
  }, n) {
    for (let e of (super(n.collection, r), this.journal = n, t)) {
      let t = e.guid;
      if (!t) {
        console.error('NodeChange missing guid', this, e);
        continue;
      }
      let r = aP({
        endSequenceNumber: n.endSequenceNumber,
        guid: _$$c2.fromKiwi(t)
      });
      this.addNode(new aR(r, e, this));
    }
    this.editScopePropertyGenerator = new _$$tP(e);
  }
  getObject(e) {
    let {
      guid
    } = aL(e);
    return this.getNodeByGuid(guid);
  }
}
class aR extends _$$R2 {
  constructor(e, t, r) {
    super(e, t, r);
    this.id = e;
    this.nodeChange = t;
    this.scene = r;
  }
  get parent() {
    return this.scene.journal;
  }
  get children() {
    return [];
  }
  get phase() {
    return this.nodeChange.phase ?? 'MODIFIED';
  }
  get editScopes() {
    return _$$iC(this.nodeChange.editScopeInfo);
  }
  generateDisplayProperties() {
    let e = this.editScopes;
    let {
      name,
      longName
    } = (() => {
      if (e.length === 0) {
        return {
          name: 'No edit scopes',
          longName: 'No edit scopes'
        };
      }
      if (e.length === 1) {
        let t = e[0].label;
        return {
          name: t,
          longName: t
        };
      }
      return {
        name: `${e[0].label} + ${e.length - 1} more`,
        longName: e.map(e => e.label).join(', ')
      };
    })();
    return {
      ...super.generateDisplayProperties(),
      leftBadges: [{
        type: 'phase',
        value: this.phase
      }, TZ(e)],
      name,
      longName
    };
  }
  generateSearchProperties() {
    return {
      ...this.scene.journal.searchProperties,
      ...super.generateSearchProperties(),
      name: this.nodeChange.name,
      phase: [this.phase, _$$x4[this.phase]],
      editScopeLabel: this.editScopes.map(e => e.label).filter(isNotNullish)
    };
  }
  generateComputedProperties() {
    return QB([...this.scene.editScopePropertyGenerator.generateEditScopeItems(this.nodeChange)]);
  }
}
function aL(e) {
  let [t, r] = e.split('-');
  return {
    endSequenceNumber: t,
    guid: r ? _$$c2.fromString(r) : void 0
  };
}
function aP({
  endSequenceNumber: e,
  guid: t
}) {
  return SW.fromString(t ? `${e}-${t}` : e);
}
class aD extends _$$$ {
  constructor({
    sensitiveTextPolicy: e,
    fileKey: t,
    checkpointKey: r,
    startSequenceNumber: n,
    endSequenceNumber: i,
    migrationVersion: a,
    nodeChanges: s,
    blobs: o,
    kiwiSchema: l,
    editScopeInfoByGuid: d
  }) {
    super({
      name: 'Multiplayer Journal Diff',
      sensitiveTextPolicy: e
    });
    this.scene = new ak(this, {
      nodeChanges: s,
      blobs: o,
      kiwiSchema: l,
      editScopeInfoByGuid: d
    });
    this.fileKey = t;
    this.checkpointKey = r;
    this.startSequenceNumber = n;
    this.endSequenceNumber = i;
    this.migrationVersion = a;
  }
  get metadata() {
    return {
      'File key': this.fileKey,
      'Checkpoint key': this.checkpointKey,
      'Start sequence number': this.startSequenceNumber,
      'End sequence number': this.endSequenceNumber,
      'Migration version': this.migrationVersion.toString()
    };
  }
  getSearch() {
    return Promise.resolve(this.scene.searchDb);
  }
  getAdditionalProperties(e) {
    return QB([this.scene.generateEditScopeSnapshotsItem(e)]);
  }
}
class ak extends ad {
  constructor(e, {
    nodeChanges: t,
    blobs: r,
    kiwiSchema: n,
    editScopeInfoByGuid: i
  }) {
    for (let n of (super(e, r), t)) {
      let e = n.guid;
      if (!e) {
        console.error('NodeChange missing guid', this, n);
        continue;
      }
      let t = SW.fromString(_$$c2.fromKiwi(e));
      this.addNode(new aM(t, n, this));
    }
    this.editScopeInfoByGuid = i;
    this.editScopePropertyGenerator = new _$$tP(n);
  }
  generateEditScopeSnapshotsItem(e) {
    let t = this.editScopeInfoByGuid?.get(_$$c2.fromString(e))?.snapshots;
    return t ? this.editScopePropertyGenerator.generateEditScopeSnapshotsItem(t) : null;
  }
}
class aM extends _$$E2 {}
async function aF(e) {
  for (let t of [250, 250, 250, 500, 1e3, 1e3, ...Array.from({
    length: 24
  }).fill(5e3)]) {
    await delay(t);
    try {
      let t = await fetch(e);
      if (t.ok) return await t.json();
    } catch (e) {
      console.error(e);
      continue;
    }
  }
  throw new Error('failed to redact figma file in time');
}
async function aj(e, t) {
  let r = await fetch(`/api/admin/start_redact_figmascope_file/${t}/${e}`).then(e => e.text());
  return (await aF(`/api/admin/check_redact_figmascope_file/${r}`)).message;
}
async function aU(e, t, r) {
  let n = await fetch(`/api/admin/start_redact_figmascope_file_validation/${e}?prefix=${t}&locality=${r}`).then(e => e.text());
  return (await aF(`/api/admin/check_redact_figmascope_file/${n}`)).message;
}
async function aB(e) {
  let t = await fetch(`/api/admin/start_redact_figmascope_journal/${e.fileKey}/${e.endSequenceNumber}`).then(e => e.text());
  let {
    message
  } = await aF(`/api/admin/check_redact_figmascope_journal/${t}`);
  return await a$(message);
}
async function aG(e) {
  if (M0()) {
    try {
      let t = await aj(e, 'fig-file');
      return {
        buffer: await a$(t),
        sensitiveTextPolicy: 'show'
      };
    } catch (e) {
      console.error(e);
    }
  }
  let t = `/api/admin/files/${e}`;
  let r = await aK(t);
  aY(r);
  return {
    buffer: await a$(r),
    sensitiveTextPolicy: 'hide'
  };
}
async function aV(e, t, r) {
  if (M0()) {
    try {
      let n = await aU(e, t, r);
      return {
        buffer: await a$(n),
        sensitiveTextPolicy: 'show'
      };
    } catch (e) {
      console.error(e);
    }
  }
  return aW({
    redactedBufferUrl: `/api/admin/figmascope_file_validation/${e}?prefix=${t}&locality=${r}`,
    unredactedMetadataUrl: `/api/admin/figmascope_file_validation_unredacted/${e}?prefix=${t}&locality=${r}`
  });
}
async function aH(e) {
  if (M0()) {
    try {
      let t = await aj(e, 'checkpoint');
      return {
        buffer: await a$(t),
        sensitiveTextPolicy: 'show'
      };
    } catch (e) {
      console.error(e);
    }
  }
  return aW({
    redactedBufferUrl: `/api/admin/figmascope_checkpoints/${e}`,
    unredactedMetadataUrl: `/api/admin/checkpoints/${e}`
  });
}
async function az(e) {
  if (M0()) {
    try {
      let t = await aj(e, 'fig-diff');
      return {
        buffer: await a$(t),
        sensitiveTextPolicy: 'show'
      };
    } catch (e) {
      console.error(e);
    }
  }
  return aW({
    redactedBufferUrl: `/api/admin/figmascope_checkpoint_diffs/${e}`,
    unredactedMetadataUrl: `/api/admin/checkpoint_diffs/${e}`
  });
}
async function aW({
  redactedBufferUrl: e,
  unredactedMetadataUrl: t
}) {
  if (M0()) {
    try {
      return {
        buffer: await a$(e),
        sensitiveTextPolicy: 'show'
      };
    } catch (e) {
      console.error(e);
    }
  }
  let r = await aK(t);
  aY(r);
  return {
    buffer: await a$(r),
    sensitiveTextPolicy: 'hide'
  };
}
async function aK(e) {
  let t = await getRequest(e);
  return atob(decodeURIComponent(t?.data?.meta?.metadata?.figmascope_hash || ''));
}
function aY(e) {
  let t = new URL(e).pathname;
  let r = t.slice(t.lastIndexOf('/') + 1);
  let n = r.slice(r.indexOf('.'));
  if (n) {
    switch (n) {
      case '.fig':
      case '.figd':
        return;
      case '.png':
        throw new Error('Can\'t open a .png file in FigmaScope. This can happen when viewing a checkpoint for a state component. Try viewing the checkpoint for the state group instead.');
      default:
        throw new Error(`Can't open a ${n} file in FigmaScope.`);
    }
  }
}
async function a$(e) {
  let t = await fetch(e, {
    headers: {
      'Cache-Control': 'no-cache'
    }
  });
  if (!t.ok) throw new Error(`invalid response: ${t.status}`);
  let r = await t.blob();
  let n = new FileReader();
  let i = await new Promise((e, t) => {
    n.addEventListener('loadend', r => {
      n.result instanceof ArrayBuffer ? e(new Uint8Array(n.result)) : t(new Error('bad file result type'));
    });
    n.readAsArrayBuffer(r);
  });
  return BX(i);
}
function aX(e, t, r) {
  return Promise.all([r(e), t ? r(t) : Promise.resolve(void 0)]).then(([e, t]) => ({
    primaryResource: e,
    diffResource: t
  }));
}
async function aq(e) {
  let {
    buffer,
    sensitiveTextPolicy
  } = await az(e.key);
  return a4(buffer, `Checkpoint Diff ${e.key}`, sensitiveTextPolicy);
}
async function aJ(e) {
  let {
    buffer,
    sensitiveTextPolicy
  } = await aV(e.key, e.prefix, e.locality);
  return a4(buffer, `File Validation Diff ${e.key}`, sensitiveTextPolicy);
}
async function aZ(e, t, r, n) {
  let i;
  let a = n(e);
  let s = t === 'derivedSubtreeDiff';
  let o = t && !s ? n(t) : Promise.resolve(void 0);
  let [l, d] = await Promise.all([a, o, fullscreenValue.loadAndStartFullscreenIfNecessary()]);
  Fullscreen?.loadFigFileFromBuffer(l.buffer, FileSourceType.FIGMASCOPE, null, LayoutTabType.PREVIEW, !s && null);
  s && (Fullscreen?.loadFigFileFromBuffer(l.buffer, FileSourceType.FIGMASCOPE, null, LayoutTabType.PREVIEW, !!s || null), i = new _$$lX({
    name: r,
    sensitiveTextPolicy: l.sensitiveTextPolicy
  }));
  d && (Fullscreen?.loadFigFileFromBuffer(d.buffer, FileSourceType.FIGMASCOPE, null, LayoutTabType.PREVIEW, null), i = new _$$lX({
    name: r,
    sensitiveTextPolicy: d.sensitiveTextPolicy
  }));
  return {
    primaryResource: new G2({
      name: r,
      type: 'standalone',
      sensitiveTextPolicy: l.sensitiveTextPolicy
    }),
    diffResource: i
  };
}
async function aQ({
  fileKey: e,
  startSequenceNumber: t,
  endSequenceNumber: r
}) {
  let n = await a2(e, t, r);
  return {
    primaryResource: new aC({
      journalInputs: await Promise.all(n.map(async e => {
        let t;
        let r = await a5(e);
        let n = await (t = e.encodedKiwiSchemaUrl, _$$_c(t));
        let {
          message: {
            nodeChanges = [],
            blobs = []
          }
        } = await Dp(r, !0, n);
        return {
          ...e,
          nodeChanges,
          blobs,
          schema: n
        };
      })),
      sensitiveTextPolicy: VG() ? 'show' : 'hide',
      fileKey: e,
      startSequenceNumber: t ?? null,
      endSequenceNumber: r ?? null
    })
  };
}
async function a0({
  fileKey: e,
  endSequenceNumber: t
}) {
  let r = await a1(e, t);
  if (r == null) throw new Error('No checkpoint found');
  let {
    key,
    sequenceNumber
  } = r;
  let [{
    buffer: a,
    sensitiveTextPolicy: s
  }, o] = await Promise.all([aH(key), a2(e, String(sequenceNumber), t)]);
  let [l, d] = await Promise.all([await _$$wV(a, !0), Promise.all(o.map(async e => {
    let t;
    let r = await a5(e);
    let n = await (t = e.encodedKiwiSchemaUrl, _$$_c(t));
    return {
      ...e,
      ...(await Dp(r, !0, n))
    };
  }))]);
  let c = d.slice(0, -1);
  let u = c[c.length - 1];
  let p = d[d.length - 1];
  let _ = new Map();
  for (let e of l.message.nodeChanges ?? []) {
    let {
      phase,
      editScopeInfo,
      ...n
    } = e;
    _.set(_$$c2.fromKiwi(e.guid), n);
  }
  let h = (e, t) => {
    let {
      phase,
      editScopeInfo,
      ...i
    } = e;
    let a = _$$c2.fromKiwi(e.guid);
    if (phase === 'CREATED') {
      _.set(a, i);
    } else if (phase === 'REMOVED') {
      _.$$delete(a);
    } else {
      let t = _.get(a);
      t ? _.set(a, {
        ...t,
        ...i
      }) : console.error('Journal has a change for node that doesn\'t exist', {
        nodeChange: e,
        inCheckpoint: l.message.nodeChanges?.find(e => _$$c2.fromKiwi(e.guid) === a),
        inIntermediateJournals: c.flatMap(e => e.message.nodeChanges?.filter(e => _$$c2.fromKiwi(e.guid) === a) ?? [])
      });
    }
    t && editScopeInfo && t.set(a, editScopeInfo);
  };
  for (let e of c) {
    for (let t of e.message.nodeChanges ?? []) h(t);
  }
  let m = {
    sensitiveTextPolicy: s,
    fileKey: e,
    checkpointKey: key,
    startSequenceNumber: p.startSequenceNumber,
    endSequenceNumber: t,
    blobs: l.message.blobs ?? []
  };
  let g = new aD({
    ...m,
    migrationVersion: (u ?? l).migrationVersion,
    nodeChanges: Array.from(_.values()),
    kiwiSchema: (u ?? l).schema
  });
  let f = new Map();
  for (let e of p.message.nodeChanges ?? []) h(e, f);
  return {
    diffResource: g,
    primaryResource: new aD({
      ...m,
      migrationVersion: p.migrationVersion,
      nodeChanges: Array.from(_.values()),
      kiwiSchema: p.schema,
      editScopeInfoByGuid: f
    })
  };
}
async function a1(e, t) {
  let r = (await getRequest(`/api/admin/files/${e}`)).data.meta.metadata.checkpoints;
  if (r.length !== 0) return r.reduce((e, r) => r.sequenceNumber <= Number(t) && r.sequenceNumber > e.sequenceNumber ? r : e);
}
async function a2(e, t, r) {
  let n = {};
  t && (n.start_sequence_number = t);
  r && (n.end_sequence_number = r);
  let i = await getRequest(`/api/admin/multiplayer_journals/${e}`, n);
  return sortByMultiple(i.data.meta.metadata.journalEntries, e => -1 * e.end_sequence_number).map(t => ({
    fileKey: e,
    migrationVersion: t.file_version,
    createdAt: t.created_at,
    encodedKiwiSchemaUrl: t.schema_url,
    startSequenceNumber: t.start_sequence_number.toString(),
    endSequenceNumber: t.end_sequence_number.toString(),
    userIdToChangeCount: t.user_ids_to_change_count
  })).filter(e => !(t && Number(e.endSequenceNumber) < Number(t) || r && Number(e.startSequenceNumber) > Number(r)));
}
async function a5(e) {
  if (VG()) return aB(e);
  let {
    entry
  } = (await getRequest(`/api/admin/multiplayer_journal/${e.fileKey}/${e.endSequenceNumber}`)).data.meta;
  return new Uint8Array(function (e) {
    let t = atob(e);
    let r = t.length;
    let n = new Uint8Array(r);
    for (let e = 0; e < r; e++) n[e] = t.charCodeAt(e);
    return n.buffer;
  }(entry));
}
async function a3(e, t, r) {
  let {
    message: {
      nodeChanges = [],
      blobs = []
    },
    migrationVersion
  } = await _$$wV(e, !0);
  return new ac({
    name: t,
    sensitiveTextPolicy: r,
    nodeChanges,
    blobs,
    migrationVersion
  });
}
async function a4(e, t, r) {
  let {
    diffPayload,
    migrationVersion
  } = await wF(e, !0);
  let {
    diffChunks = [],
    nodeChanges = [],
    diffBasis = [],
    basisParentNodeChanges = [],
    parentNodeChanges = [],
    blobs = []
  } = n;
  let u = [];
  let p = [];
  let _ = new Set();
  let h = new Set();
  for (let e of diffChunks) {
    let t = new Set(e.nodeChanges ?? []);
    let r = diffBasis.filter((e, r) => t.has(r)).filter(e => e.guid);
    let n = nodeChanges.filter((e, r) => t.has(r)).map((e, t) => ({
      ...r[t],
      ...e
    })).filter(e => e.phase !== 'REMOVED');
    let i = new Set((e.basisParentHierarchyGuids ?? []).map(_$$c2.fromKiwi));
    let a = new Set((e.parentHierarchyGuids ?? []).map(_$$c2.fromKiwi));
    let c = (basisParentNodeChanges ?? []).filter(({
      guid: e
    }) => e && i.has(_$$c2.fromKiwi(e)));
    let m = (parentNodeChanges ?? []).filter(({
      guid: e
    }) => e && a.has(_$$c2.fromKiwi(e)));
    for (let t of (u.push({
      ...e,
      nodeChanges: r,
      parentNodeChanges: c
    }), p.push({
      ...e,
      nodeChanges: n,
      parentNodeChanges: m
    }), r)) _.add(_$$c2.fromKiwi(t.guid));
    for (let e of n) _.add(_$$c2.fromKiwi(e.guid));
    for (let e of c) h.add(_$$c2.fromKiwi(e.guid));
    for (let e of m) h.add(_$$c2.fromKiwi(e.guid));
  }
  if (_.size !== nodeChanges.length || h.size !== parentNodeChanges?.length) {
    let e = diffBasis.filter(({
      guid: e
    }) => e && !_.has(_$$c2.fromKiwi(e)));
    let t = nodeChanges.filter(({
      guid: e
    }) => e && !_.has(_$$c2.fromKiwi(e))).map((t, r) => ({
      ...e[r],
      ...t
    })).filter(e => e.phase !== 'REMOVED');
    let r = (basisParentNodeChanges ?? []).filter(({
      guid: e
    }) => e && !h.has(_$$c2.fromKiwi(e)));
    let n = (parentNodeChanges ?? []).filter(({
      guid: e
    }) => e && !h.has(_$$c2.fromKiwi(e)));
    u.push({
      nodeChanges: e,
      parentNodeChanges: r
    });
    p.push({
      nodeChanges: t,
      parentNodeChanges: n
    });
  }
  let m = {
    name: t,
    sensitiveTextPolicy: r,
    blobs,
    migrationVersion
  };
  return {
    diffResource: new af({
      ...m,
      chunks: u
    }),
    primaryResource: new af({
      ...m,
      chunks: p
    })
  };
}
async function a8(e) {
  let t = await new Promise((t, r) => {
    let n = new FileReader();
    n.addEventListener('loadend', e => {
      n.result instanceof ArrayBuffer ? t(new Uint8Array(n.result)) : r(new Error('bad file result type'));
    });
    n.readAsArrayBuffer(e);
  });
  return BX(t);
}
async function a6(e) {
  let t = yH(e);
  if (!t) throw new Error('Unable to parse clipboard data');
  if (t = await BX(t), _$$l3(t) === Eo) throw new Error('Unexpected figd data in clipboard');
  return {
    primaryResource: await a3(t, 'Pasted data', 'show')
  };
}
async function a7(e, t) {
  if (t == null) {
    let t = await a8(e);
    return _$$l3(t) === Eo ? await a4(t, `Local figd file ${e.name}`, 'show') : {
      primaryResource: await a3(t, `Local fig file ${e.name}`, 'show')
    };
  }
  {
    let [r, n] = await Promise.all([a8(e), a8(t)]);
    let [i, a] = [_$$l3(r), _$$l3(n)];
    if (i === Eo || a === Eo) throw new Error('Diffing diff files is not supported');
    {
      let [i, a] = await Promise.all([a3(r, `Local file ${e.name}`, 'show'), a3(n, `Local file ${t.name}`, 'show')]);
      return {
        primaryResource: a,
        diffResource: i
      };
    }
  }
}
function si() {
  let e = getSelectedView();
  let t = useDispatch();
  let r = useCallback(e => {
    t(selectViewAction({
      view: 'figmascope',
      urlParams: {
        type: 'server_file',
        key: e,
        backend: 'kiwi'
      }
    }));
  }, [t]);
  let n = useCallback(() => {
    t(selectViewAction({
      view: 'figmascope',
      urlParams: null
    }));
  }, [t]);
  let i = useCurrentTheme();
  let a = useRef(null);
  _$$Z2(i === 'legacy' ? 'light' : i, a, e);
  let s = isFigmascopeView(e);
  let o = useStableMemo(s ? e.urlParams : null);
  return s ? jsx('div', {
    ref: a,
    style: _$$sx2.overflowHidden.m0.colorBg.colorText.add({
      height: '100vh'
    }).$,
    children: o ? 'backend' in o && o.backend === 'fullscreen' ? jsx(ss, {
      urlParams: o,
      onClose: n
    }) : jsx(sa, {
      urlParams: o,
      onClose: n
    }) : jsx(so, {
      navigateToFile: r
    })
  }) : null;
}
function sa({
  urlParams: e,
  onClose: t
}) {
  sl(_$$J2(() => {
    switch (e.type) {
      case 'server_file':
        return aX(e.key, e.diffKey, async e => {
          let {
            buffer,
            sensitiveTextPolicy
          } = await aG(e);
          return a3(buffer, `File ${e}`, sensitiveTextPolicy);
        });
      case 'server_checkpoint':
        return aX(e.key, e.diffKey, async e => {
          let {
            buffer,
            sensitiveTextPolicy
          } = await aH(e);
          return a3(buffer, `Checkpoint ${e}`, sensitiveTextPolicy);
        });
      case 'server_file_validation_checkpoint':
        return aX(e.prefix, e.diffPrefix, async t => {
          let {
            buffer,
            sensitiveTextPolicy
          } = await aV(e.key, t, e.locality);
          return a3(buffer, `File Validation ${e.key}`, sensitiveTextPolicy);
        });
      case 'server_file_validation_checkpoint_diff':
        return aJ(e);
      case 'server_checkpoint_diff':
        return aq(e);
      case 'multiplayer_journal_browser':
        return aQ(e);
      case 'multiplayer_journal_diff':
        return a0(e);
    }
  }, [e]));
  return jsx(_$$J3, {
    onClose: t
  });
}
function ss({
  urlParams: e,
  onClose: t
}) {
  let r = _$$J2(() => {
    switch (e.type) {
      case 'server_file':
        return aZ(e.key, e.diffKey, `File ${e.key}`, e => aG(e));
      case 'server_checkpoint':
        return aZ(e.key, e.diffKey, `Checkpoint ${e.key}`, e => aH(e));
      case 'server_file_validation_checkpoint':
        return aZ(e.key, e.diffPrefix, `File validation ${e.prefix}`, t => aV(t, e.prefix, e.locality));
    }
  }, [e]);
  sl(useFullscreenReady() ? r : _$$ux());
  return jsx(_$$J3, {
    onClose: t
  });
}
function so({
  navigateToFile: e
}) {
  let [t, r] = useState({
    status: APILoadingStatus.INIT
  });
  let n = useCallback(() => r({
    status: APILoadingStatus.INIT
  }), []);
  sl(t);
  let i = t.status === APILoadingStatus.INIT || t.status === APILoadingStatus.FAILURE;
  let a = useCallback(e => !!i && new _$$le(e).isFile(), [i]);
  let s = useCallback(async e => {
    if (i) {
      r(_$$ux());
      try {
        let t = e.files[0];
        let n = e.files[1];
        if (t == null) return;
        let i = await a7(t, n);
        r(NY(i));
      } catch (e) {
        r(_$$uW2(e));
      }
    }
  }, [i]);
  useEffect(() => {
    if (!i) return;
    let t = async t => {
      r(_$$ux());
      try {
        if (t.clipboardData?.files.length) {
          await s(t.clipboardData);
        } else if (t.clipboardData?.getData('text/html')) {
          let e = await a6(t.clipboardData);
          r(NY(e));
        } else if (t.clipboardData?.getData('text/plain')) {
          let r = t.clipboardData.getData('text/plain');
          let n = new URL(r);
          let i = jW.exec(n.pathname);
          if (!i || !i[1]) throw new Error('Unable to parse file key from URL');
          e(i[1]);
        }
      } catch (e) {
        r({
          status: APILoadingStatus.FAILURE,
          error: e
        });
      }
    };
    document.addEventListener('paste', t);
    return () => document.removeEventListener('paste', t);
  }, [i, s, e]);
  let o = useMemo(() => jsxs(_$$tV, {
    children: [jsx('h1', {
      style: _$$sx2.font24.fontBold.mb16.$,
      children: 'Welcome to FigmaScope!'
    }), jsxs('p', {
      children: ['This tool lets you inspect the internals of Fig files. Check out the Readme', ' ', jsx('a', {
        href: _$$e5,
        target: '_blank',
        children: 'here'
      }), '.']
    }), jsx('h2', {
      style: _$$sx2.font20.fontBold.mt32.mb16.$,
      children: 'Getting started'
    }), jsx('p', {
      children: 'Drag a .fig or .figd file here to view its contents. Or drag two files to diff them.'
    }), jsx('p', {
      children: 'Copy a selection from a Figma file and paste it here to view it.'
    }), jsx('p', {
      children: 'Copy a file key or URL and paste it here to view it.'
    }), jsx('h2', {
      style: _$$sx2.font20.fontBold.mt32.mb16.$,
      children: 'Other ways to access FigmaScope'
    }), jsx('p', {
      children: 'Use the "Show in FigmaScope" menu option in the editor to open an embedded version of FigmaScope.'
    }), jsx('p', {
      children: 'Click the "Open in FigmaScope" links from the admin pages for a file, diff, or checkpoint.'
    })]
  }), []);
  return jsx(_$$Y, {
    isDragTarget: a,
    onTargetDrop: s,
    onTargetDragEnter: _$$lQ,
    onTargetDragLeave: _$$lQ,
    style: _$$sx2.hFull.$,
    children: jsx(_$$J3, {
      onClose: n,
      emptyStateContent: o
    })
  });
}
function sl(e) {
  let t = Xr(_$$lu);
  useEffect(() => {
    t(e);
  }, [e, t]);
}
let sf = new _$$b({
  name: 'fullscreen_sites',
  dependencies: [],
  exports: {
    './accessibility': './accessibility.ts',
    './atoms': './atoms.ts',
    './code_components': './code_components.ts',
    './components': './components.ts',
    './constants': './constants.ts',
    './devtools': './devtools.ts',
    './error_overlay': './error_overlay.ts',
    './figma_api': './figma_api.ts',
    './fullscreen': './fullscreen.tsx',
    './hooks': './hooks.ts',
    './html_widget': './html_widget.ts',
    './is_sites': './is_sites.ts',
    './lazy_sites_view': './lazy_sites_view.tsx',
    './living_designs': './living_designs.ts',
    './multilayer_codegen': './multilayer_codegen.ts',
    './open_html_preview': './open_html_preview.ts',
    './plans': './plans.ts',
    './responsive_text_styles': './responsive_text_styles.ts',
    './snapshot': './snapshot.ts',
    './utils': './utils.ts',
    './links': './links.ts',
    './modals': './modals.ts',
    './is_figmake': './is_figmake.ts',
    './use_should_show_figmake_file_create': './use_should_show_figmake_file_create.ts',
    './figmake': './figmake.ts',
    './left_rail': './left_rail.ts',
    './left_rail_atoms': './left_rail_atoms.ts',
    './lint_atoms': './lint_atoms.ts',
    './internal/code_nodes/hooks': './internal/code_nodes/hooks.ts',
    './internal/code_nodes/chat/atoms': './internal/code_nodes/chat/atoms.tsx',
    './internal/code_nodes/chat/hooks/use_attachments': './internal/code_nodes/chat/hooks/use_attachments.ts',
    './internal/code_nodes/chat/hooks/use_chat_errors': './internal/code_nodes/chat/hooks/use_chat_errors.ts',
    './internal/code_nodes/chat/hooks/use_context_limit_check': './internal/code_nodes/chat/hooks/use_context_limit_check.ts',
    './internal/code_nodes/chat/utils/attachment_helpers': './internal/code_nodes/chat/utils/attachment_helpers.ts',
    './figmake_monetization_helpers': './figmake_monetization_helpers.ts',
    './figmake_paywall_modal': './figmake_paywall_modal.tsx',
    './internal/code_nodes/chat/code_chat': './internal/code_nodes/chat/code_chat.tsx',
    './internal/code_nodes/chat/code_chat_error': './internal/code_nodes/chat/code_chat_error.tsx',
    './internal/code_nodes/chat/utils/code_file_cache': './internal/code_nodes/chat/utils/code_file_cache.ts',
    './internal/code_nodes/code_window_components': './internal/code_nodes/code_window_components.tsx',
    './internal/code_nodes/figmake/direct_manipulation/code_sublayer_nodes': './internal/code_nodes/figmake/direct_manipulation/code_sublayer_nodes.ts',
    './internal/code_nodes/figmake/direct_manipulation/classname_editing_controller': './internal/code_nodes/figmake/direct_manipulation/classname_editing_controller.ts',
    './internal/code_nodes/figmake/direct_manipulation/classname_editing_types': './internal/code_nodes/figmake/direct_manipulation/classname_editing_types.ts',
    './internal/code_nodes/figmake/direct_manipulation/direct_manipulation_canvas_editor': './internal/code_nodes/figmake/direct_manipulation/direct_manipulation_canvas_editor.ts',
    './internal/code_nodes/figmake/direct_manipulation/tailwind_font_utils': './internal/code_nodes/figmake/direct_manipulation/tailwind_font_utils.ts',
    './internal/code_nodes/figmake/figmake_full_view_atoms': './internal/code_nodes/figmake/figmake_full_view_atoms.tsx',
    './internal/code_nodes/chat/hooks/use_messages_for_rendering': './internal/code_nodes/chat/hooks/use_messages_for_rendering.ts',
    './internal/code_nodes/chat/chat': './internal/code_nodes/chat/chat.tsx',
    './internal/code_nodes/chat/message_types': './internal/code_nodes/chat/message_types.ts'
  },
  sideEffects: !1,
  routeHints: ['fullscreen_sites'],
  eslint: {
    rules: {
      'react/no-array-index-key': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
}).createLazyComponent(() => Promise.all([]).then(_require4).then(e => e.SitesView), {
  componentName: 'LazySitesView',
  error: NONE_SYMBOL.NONE
});
let sE = new _$$b({
  name: 'fullscreen_slides',
  dependencies: [],
  exports: {
    './ai/present_summary/constants': './ai/present_summary/constants.ts',
    './ai/outline_to_deck/constants': './ai/outline_to_deck/constants.ts',
    './ai/outline_to_deck/manager/flow_manager': './ai/outline_to_deck/manager/flow_manager.ts',
    './ai/outline_to_deck/outline_to_deck_controller': './ai/outline_to_deck/outline_to_deck_controller.ts',
    './ai/outline_to_deck/utils': './ai/outline_to_deck/utils.ts',
    './ai/present_summary/use_ai_slide_generator': './ai/present_summary/use_ai_slide_generator.tsx',
    './ai/present_summary/util/canvas_data_util': './ai/present_summary/util/canvas_data_util.ts',
    './ai/present_summary/ai_slides_hooks': './ai/present_summary/ai_slides_hooks.tsx',
    './ai/slides_ai_permissions': './ai/slides_ai_permissions.ts',
    './atoms': './atoms.ts',
    './behaviors/move_embedded_prototype_behavior': './behaviors/move_embedded_prototype_behavior.ts',
    './behaviors/slide_deck_add_behavior': './behaviors/slide_deck_add_behavior.ts',
    './behaviors/slide_deck_reorder_row_behavior': './behaviors/slide_deck_reorder_row_behavior.ts',
    './charts_and_graphs/import_data_modal': './charts_and_graphs/import_data_modal.tsx',
    './comments/carousel_comment': './comments/carousel_comment.tsx',
    './file_browser/new_slides_action': './file_browser/new_slides_action.tsx',
    './flapps/common/themed_flapp_config_data': './flapps/common/themed_flapp_config_data.ts',
    './flapps/flapp_overlay': './flapps/flapp_overlay.tsx',
    './flapps/flapp_definition': './flapps/flapp_definition.ts',
    './flapps/youtube/youtube_oembed': './flapps/youtube/youtube_oembed.ts',
    './flapps/poll/poll_option': './flapps/poll/poll_option.tsx',
    './flapps/poll/poll_types': './flapps/poll/poll_types.ts',
    './hooks/experiments': './hooks/experiments.ts',
    './hooks/is_slides_hooks': './hooks/is_slides_hooks.ts',
    './hooks/use_selected_slide': './hooks/use_selected_slide.ts',
    './hooks/use_selected_slide_like_nodes': './hooks/use_selected_slide_like_nodes.ts',
    './hooks/use_slide_like_node_ids': './hooks/use_slide_like_node_ids.ts',
    './is_slides': './is_slides.ts',
    './lazy_slides_view': './lazy_slides_view.tsx',
    './left_panel/generate_thumbnail': './left_panel/generate_thumbnail.ts',
    './left_panel/single_slide_view_utils': './left_panel/single_slide_view_utils.ts',
    './left_panel/slides_left_panel': './left_panel/slides_left_panel.tsx',
    './left_panel/slide_thumbnails_generator': './left_panel/slide_thumbnails_generator.tsx',
    './onboarding/onboarding_keys': './onboarding/onboarding_keys.ts',
    './onboarding/slides_ai_welcome': './onboarding/slides_ai_welcome.tsx',
    './properties_panel/color_controls/slides_color_input_row': './properties_panel/color_controls/slides_color_input_row.tsx',
    './properties_panel/color_controls/slides_color_picker': './properties_panel/color_controls/slides_color_picker.tsx',
    './properties_panel/color_controls/slides_color_picker_context_menu': './properties_panel/color_controls/slides_color_picker_context_menu.tsx',
    './properties_panel/color_controls/slides_overlay_input': './properties_panel/color_controls/slides_overlay_input.tsx',
    './properties_panel/components/slides_slider_input_row': './properties_panel/components/slides_slider_input_row.tsx',
    './properties_panel/components/slides_scrubbable_percentage_input': './properties_panel/components/slides_scrubbable_percentage_input.tsx',
    './properties_panel/object_animations/object_animation_list': './properties_panel/object_animations/object_animation_list.ts',
    './properties_panel/object_animations/slides_animation_context_menu': './properties_panel/object_animations/slides_animation_context_menu.tsx',
    './properties_panel/rewrite_controls/slides_rewrite_modal': './properties_panel/rewrite_controls/slides_rewrite_modal.tsx',
    './properties_panel/rewrite_controls/slides_rewrite_text_utils': './properties_panel/rewrite_controls/slides_rewrite_text_utils.tsx',
    './properties_panel/rewrite_controls/slides_rewrite_utils': './properties_panel/rewrite_controls/slides_rewrite_utils.tsx',
    './properties_panel/slides_align_panel': './properties_panel/slides_align_panel.tsx',
    './properties_panel/slides_animation_panel': './properties_panel/slides_animation_panel.tsx',
    './properties_panel/slides_border_panel': './properties_panel/slides_border_panel.tsx',
    './properties_panel/slides_corner_panel': './properties_panel/slides_corner_panel.tsx',
    './properties_panel/slides_embeddable_prototype_panel': './properties_panel/slides_embeddable_prototype_panel.tsx',
    './properties_panel/slides_fill_panel': './properties_panel/slides_fill_panel.tsx',
    './properties_panel/slides_instance_panel': './properties_panel/slides_instance_panel.tsx',
    './properties_panel/slides_interactive_widget_panel': './properties_panel/slides_interactive_widget_panel.tsx',
    './properties_panel/slides_link_panel': './properties_panel/slides_link_panel.tsx',
    './properties_panel/slides_opacity_panel': './properties_panel/slides_opacity_panel.tsx',
    './properties_panel/slides_shadow_panel': './properties_panel/slides_shadow_panel.tsx',
    './properties_panel/slides_theme_panel': './properties_panel/slides_theme_panel.tsx',
    './properties_panel/slides_type_panel': './properties_panel/slides_type_panel.tsx',
    './properties_panel/type_panel_controls/slides_text_style_actions': './properties_panel/type_panel_controls/slides_text_style_actions.tsx',
    './presentation/shared/row_title_helpers': './presentation/shared/row_title_helpers.ts',
    './presentation/shared/table_of_contents_button': './presentation/shared/table_of_contents_button.tsx',
    './presentation/slides_presentation_view': './presentation/slides_presentation_view.tsx',
    './presentation/slides_presentation_app_entry': './presentation/slides_presentation_app_entry.tsx',
    './presentation/audience_view/audience_view_header': './presentation/audience_view/audience_view_header.tsx',
    './presentation/popout_audience_view/presenter_view_api': './presentation/popout_audience_view/presenter_view_api.tsx',
    './slide_deck_utils': './slide_deck_utils.ts',
    './slides_bindings': './slides_bindings.ts',
    './slides_fullscreen_view': './slides_fullscreen_view.ts',
    './slides_ui': './slides_ui.tsx',
    './speaker_notes/speaker_notes_generate': './speaker_notes/speaker_notes_generate.ts',
    './speaker_notes/speaker_notes_overlay': './speaker_notes/speaker_notes_overlay.tsx',
    './speaker_notes/speaker_notes_generate_logging': './speaker_notes/speaker_notes_generate_logging.ts',
    './templates/components/slides_template_content': './templates/components/slides_template_content.tsx',
    './templates/modal/slides_template_theme_picker_modal': './templates/modal/slides_template_theme_picker_modal.tsx',
    './templates/template_atoms': './templates/template_atoms.ts',
    './templates/template_hooks': './templates/template_hooks.ts',
    './templates/template_helpers': './templates/template_helpers.ts',
    './templates/template_publish': './templates/template_publish.ts',
    './templates/use_slides_template_publish': './templates/use_slides_template_publish.ts',
    './templates/components/loading_state': './templates/components/loading_state.tsx',
    './templates/components/slides_template_header': './templates/components/slides_template_header.tsx',
    './templates/announcement/slides_pro_templates_announcement': './templates/announcement/slides_pro_templates_announcement.tsx',
    './themes/theme_atoms': './themes/theme_atoms.ts',
    './themes/theme_id_hooks': './themes/theme_id_hooks.ts',
    './themes/theme_utils': './themes/theme_utils.ts',
    './toolbars/copy_presentation_link': './toolbars/copy_presentation_link.tsx',
    './toolbars/slide_view_toggle': './toolbars/slide_view_toggle.tsx',
    './toolbars/slides_browse_resource_modal': './toolbars/slides_browse_resource_modal.tsx',
    './toolbars/slides_editor_toolbar': './toolbars/slides_editor_toolbar.tsx',
    './toolbars/slides_insert_embed_modal': './toolbars/slides_insert_embed_modal.tsx',
    './toolbars/slides_insert_shape_modal': './toolbars/slides_insert_shape_modal.tsx',
    './toolbars/slides_toolbelt': './toolbars/slides_toolbelt.tsx',
    './utils/slides_creation_helpers': './utils/slides_creation_helpers.ts',
    './utils/slides_local_storage': './utils/slides_local_storage.ts',
    './utils/slides_logging': './utils/slides_logging.ts',
    './utils/slides_mode_toggle': './utils/slides_mode_toggle.ts',
    './utils/slides_panel_helpers': './utils/slides_panel_helpers.ts',
    './utils/slides_select_view_helpers': './utils/slides_select_view_helpers.ts',
    './utils/slides_selection': './utils/slides_selection.ts',
    './utils/slides_tone_dial_menu': './utils/slides_tone_dial_menu.ts'
  },
  friendFiles: [],
  routeHints: ['fullscreen_slides'],
  eslint: {
    rules: {
      'react/no-array-index-key': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
}).createLazyComponent(() => Promise.all([]).then(_require5).then(e => e.SlidesView), {
  componentName: 'LazySlidesView',
  error: NONE_SYMBOL.NONE
});
class sx extends PureComponent {
  constructor() {
    super(...arguments);
    this.isLoadingVersions = () => isLoading(this.props.loadingState, _$$ts.loadingKeyForPayload({
      hubFileId: this.props.hubFileId
    }));
    this.shouldRetryLoadingVersions = () => isNullOrFailure(this.props.loadingState, _$$ts.loadingKeyForPayload({
      hubFileId: this.props.hubFileId
    }));
  }
  componentDidMount() {
    this.props.dispatch(_$$ts({
      hubFileId: this.props.hubFileId
    }));
  }
  render() {
    let e = !(this.isLoadingVersions() || this.shouldRetryLoadingVersions());
    let t = !!_$$a6(this.props.hubFile).id;
    return jsx(Fragment, {
      children: e && t ? jsx(_$$Z3, {
        containerClassName: 'hub_file_embed_view--container---KHBD',
        hubFile: this.props.hubFile,
        profileIdToAdminResourceAs: null,
        disableClickToExpand: !0,
        fullscreenState: PreviewMode.DEFAULT,
        dispatch: this.props.dispatch
      }) : null
    });
  }
}
sx.displayName = 'HubFileDetailView';
let sN = connect((e, t) => ({
  hubFile: {
    ...M3(t.hubFileId, e.hubFiles),
    comments_setting: null
  },
  loadingState: e.loadingState
}))(sx);
var sU = (e => (e[e.FIRST_QUESTION = 0] = 'FIRST_QUESTION', e[e.SECOND_QUESTION = 1] = 'SECOND_QUESTION', e[e.HOW_CAN_WE_IMPROVE = 2] = 'HOW_CAN_WE_IMPROVE', e[e.COMPLETE = 3] = 'COMPLETE', e))(sU || {});
var sB = (e => (e[e.WHY_ABANDON_QUESTION = 0] = 'WHY_ABANDON_QUESTION', e[e.FREE_FORM_INPUT = 1] = 'FREE_FORM_INPUT', e[e.COMPLETE = 2] = 'COMPLETE', e))(sB || {});
var sG = (e => (e[e.OPINION_QUESTION = 0] = 'OPINION_QUESTION', e[e.IMPROVEMENT_QUESTION = 1] = 'IMPROVEMENT_QUESTION', e[e.COMPLETE = 2] = 'COMPLETE', e))(sG || {});
var sV = (e => (e.OVERALL_HELPFUL = 'OVERALL_HELPFUL', e.MISSING_COMPONENTS = 'MISSING_COMPONENTS', e.ANYTHING_ELSE = 'ANYTHING_ELSE', e.COMPLETE = 'COMPLETE', e))(sV || {});
var sH = (e => (e.INTRO = 'INTRO', e.FIGMA_USE = 'FIGMA_USE', e.USE_CASES = 'USE_CASES', e.NONE_APPLY = 'NONE_APPLY', e.INTENT_TO_UPGRADE = 'INTENT_TO_UPGRADE', e.LIKELIHOOD_OF_UPGRADING = 'LIKELIHOOD_OF_UPGRADING', e.REASON_FOR_FREE_PLAN = 'REASON_FOR_FREE_PLAN', e.NO_INTENT_TO_UPGRADE = 'NO_INTENT_TO_UPGRADE', e.COMPLETE = 'COMPLETE', e))(sH || {});
let s2 = 'survey_view--multipleChoiceQuestionsGrid--VZOFn';
let s5 = 'survey_view--multipleChoiceQuestionsChoice---6Xmx';
(e => {
  e.DEFAULT_WIDTH = 340;
  e.useSurveyState = function (t) {
    let {
      completeStates,
      dismissModal,
      heightProvider,
      initialState,
      autoDismissTime,
      widthProvider
    } = t;
    let [l, d] = useState(initialState);
    let [c, u] = useState('');
    let [p, _] = useState(!1);
    let [h, m] = useState(heightProvider(l));
    let [g, f] = useState(widthProvider ? widthProvider(l) : e.DEFAULT_WIDTH);
    let E = t => {
      _(!0);
      setTimeout(() => {
        m(heightProvider(t));
        f(widthProvider ? widthProvider(t) : e.DEFAULT_WIDTH);
      }, 300);
      setTimeout(() => {
        d(t);
        _(!1);
      }, 600);
      completeStates.includes(t) && setTimeout(dismissModal, autoDismissTime ?? 2e3);
    };
    return {
      state: l,
      mostRecentAnswer: c,
      setNextState: E,
      clickAnswer: e => {
        u(e.answer);
        E(e.nextState);
        e.onSubmit?.();
      },
      fadingOut: p,
      height: h,
      width: g
    };
  };
  e.useAutosizedSurveyState = function (e) {
    let {
      completeStates,
      dismissModal,
      initialState,
      autoDismissTime,
      offscreenBoundsRef
    } = e;
    let [s, o] = useState(void 0);
    let [l, d] = useState(initialState);
    let [c, u] = useState('');
    let [p, _] = useState(!1);
    let [h, m] = useState(void 0);
    let [g, f] = useState(void 0);
    useEffect(() => {
      m(offscreenBoundsRef.current?.offsetHeight);
      f(offscreenBoundsRef.current?.offsetWidth);
      o(initialState);
    }, [initialState, offscreenBoundsRef]);
    let E = e => {
      _(!0);
      d(e);
      setTimeout(() => {
        m(offscreenBoundsRef.current?.offsetHeight);
        f(offscreenBoundsRef.current?.offsetWidth);
      }, 300);
      setTimeout(() => {
        o(e);
        d(void 0);
        _(!1);
      }, 600);
      completeStates.includes(e) && setTimeout(dismissModal, autoDismissTime ?? 2e3);
    };
    return {
      state: s,
      upcomingState: l,
      mostRecentAnswer: c,
      setNextState: E,
      clickAnswer: e => {
        u(e.answer);
        E(e.nextState);
        e.onSubmit?.();
      },
      fadingOut: p,
      height: h,
      width: g
    };
  };
})(a || (a = {}));
(e => {
  function t(e) {
    return jsx('div', {
      className: 'survey_view--surveyContent--tFdrC text--fontPos11--2LvXf text--_fontBase--QdLsd',
      style: e.style,
      children: e.children
    });
  }
  function r(e) {
    return jsxs('div', {
      className: j()(_$$s3.grid.columnGap8.py16.px0.bb1.bSolid.colorBorder.$, s2),
      children: [jsx('div', {
        className: _$$s3.textBodyMedium.lhNormal.p0.$
      }), e.choices.map((e, t) => jsx('p', {
        className: j()(_$$s3.mb0.flex.justifyCenter.itemsCenter.alignCenter.textBodySmall.lhNormal.$, s5),
        children: e
      }, t))]
    });
  }
  function n(e) {
    return jsx(_$$b4, {
      'value': e.currentChoice,
      'onChange': e.onClickChoice,
      'aria-labelledby': e.id,
      'children': jsxs('div', {
        className: j()(_$$s3.grid.columnGap8.py16.px0.bb1.bSolid.colorBorder.$, s2),
        children: [jsx(_$$s6, {
          id: e.id,
          children: jsx('span', {
            className: _$$s3.textBodyMedium.lhNormal.p0.$,
            children: e.question
          })
        }), e.choices.map((t, r) => jsxs('div', {
          className: j()(_$$s3.mb0.flex.justifyCenter.itemsCenter.alignCenter.textBodySmall.lhNormal.$, s5),
          children: [jsx(q9, {
            htmlFor: `${e.id}-${t}`,
            children: t
          }), jsx(_$$c4, {
            id: `${e.id}-${t}`,
            value: t
          })]
        }, r))]
      })
    });
  }
  function i(e) {
    let r = e.height && e.height - 32;
    let n = (e.width || a.DEFAULT_WIDTH) - 32;
    let i = jsx(t, {
      style: {
        height: r,
        width: n
      },
      children: e.children
    });
    return jsxs('div', {
      className: 'survey_view--surveyModal--XsAuZ',
      children: [e.fadingOut ? jsx('div', {
        className: 'survey_view--fadeOut--8YBM0',
        children: i
      }) : jsx('div', {
        className: 'survey_view--fadeIn--CPaie',
        children: i
      }), !e.hideCloseButton && jsx(EventShield, {
        eventListeners: ['onMouseDown'],
        children: jsx('div', {
          className: 'survey_view--closeButton--Z6aRE',
          children: jsx(Jn, {
            onClick: e.dismissModal,
            innerText: getI18nString('rcs.surveys.close'),
            trackingProperties: e.trackingPropertiesOnClose
          })
        })
      })]
    });
  }
  e.SurveyContent = t;
  e.SurveyButton = function (e) {
    return jsx(Ih, {
      variant: 'secondary',
      onClick: () => e.onClickAnswer(e.answer),
      children: e.answer.answer
    });
  };
  e.QuestionView = function ({
    question: e,
    surveyAnswers: t,
    onSubmitAnswer: r
  }) {
    let [n, i] = useState(null);
    return jsxs('form', {
      children: [jsx(_$$b3, {
        value: n?.answer,
        onChange: e => i(t.find(t => t.answer === e) ?? null),
        legend: jsx('legend', {
          className: _$$s3.fontBold.textBodyLarge.pr36.mb8.$,
          children: e
        }),
        children: t.map(({
          answer: e
        }) => jsx(_$$c3, {
          label: jsx(Label, {
            children: e
          }),
          value: e
        }, e))
      }), jsx('div', {
        className: _$$s3.mt6.flex.justifyEnd.$,
        children: jsx(Button, {
          disabled: !n,
          variant: 'secondary',
          onClick: () => r(n),
          children: renderI18nText('rcs.surveys.submit')
        })
      })]
    });
  };
  e.MultipleChoiceQuestionsView = function (e) {
    let t = Array.from({
      length: e.questions.length
    }).fill(e.defaultChoice.displayValue);
    let i = {};
    for (let t of e.questions) i[t.trackingValue] = e.defaultChoice.trackingValue;
    let [a, s] = useState(t);
    let [o, d] = useState(i);
    let c = (t, r) => {
      s(e => {
        let n = [...e];
        n[t] = r;
        return n;
      });
      d(n => {
        let i = {
          ...n
        };
        let a = e.choices.find(e => e.displayValue == r) || e.defaultChoice;
        i[e.questions[t].trackingValue] = a.trackingValue;
        return i;
      });
    };
    return jsxs('div', {
      children: [jsx('h1', {
        className: _$$s3.textHeadingSmall.$,
        children: e.header
      }), jsx(Spacing, {
        multiple: 1
      }), e.subHeader && jsx('p', {
        children: e.subHeader
      }), jsxs('div', {
        children: [jsx(r, {
          choices: e.choices.map(e => e.displayValue)
        }), e.questions.map((t, r) => jsx(n, {
          id: t.trackingValue,
          question: t.displayValue,
          choices: e.choices.map(e => e.displayValue),
          currentChoice: a[r],
          onClickChoice: e => c(r, e)
        }, r))]
      }), jsx(Spacing, {
        multiple: 2
      }), jsxs('div', {
        className: _$$s3.wFull.flex.justifyBetween.itemsCenter.selectNone.$,
        children: [e.progress && jsx('p', {
          className: _$$s3.colorTextSecondary.$,
          children: renderI18nText('rcs.surveys.question_counter', {
            currentStep: e.progress.currentStep,
            totalSteps: e.progress.totalSteps
          })
        }), jsx($z, {
          variant: 'secondary',
          onClick: e.onSubmit,
          trackingProperties: {
            ...e.trackingProperties,
            ...o
          },
          innerText: getI18nString('rcs.surveys.submit_opinions'),
          children: renderI18nText('rcs.surveys.next')
        })]
      })]
    });
  };
  e.EnterFreeFormView = function (e) {
    let [t, r] = useState('');
    let [n, i] = useState(void 0);
    let a = useRef(null);
    useEffect(() => {
      a.current && a.current.focus();
    }, []);
    let s = e => {
      r(e.target.value);
      i(void 0);
    };
    let o = {
      freeFormInput: t,
      initialAnswer: e.subtext
    };
    let d = e.customResponseFieldName ? {
      [e.customResponseFieldName]: JSON.stringify(o)
    } : o;
    return jsxs(Fragment, {
      children: [e.badge_text && jsxs(Fragment, {
        children: [jsx(Badge, {
          color: BadgeColor.DEFAULT,
          text: e.badge_text
        }), jsx(Spacing, {
          multiple: 1.5
        })]
      }), jsxs('div', {
        className: j()(_$$s3.flex.flexColumn.justifyStart.$, 'survey_view--surveyOtherInput--68kbm'),
        children: [jsx('p', {
          className: _$$s3.fontBold.textBodyLarge.pr36.$,
          children: e.question
        }), jsx(Spacing, {
          multiple: 2
        }), e.subtext && jsxs(Fragment, {
          children: [jsx('p', {
            children: e.subtext
          }), jsx(Spacing, {
            multiple: 1.5
          })]
        }), e.label ? jsx(EnhancedInput, {
          type: 'textarea',
          htmlName: 'enter-free-form',
          placeholder: e.placeholder_text || getI18nString('rcs.surveys.would_love_to_know'),
          label: e.label,
          className: 'survey_view--labeledTextInput--GJSJP',
          value: t,
          onChange: s,
          maxLength: 1e3
        }) : jsx(LazyInputForwardRef, {
          type: 'textarea',
          placeholder: e.placeholder_text || getI18nString('rcs.surveys.would_love_to_know'),
          ref: a,
          rows: 5,
          className: `${n && 'survey_view--inputError---xPSn' || ''}`,
          value: t,
          onChange: s,
          maxLength: 1e3
        }), n ? jsx('p', {
          className: _$$s3.textBodyMedium.colorTextDanger.$,
          children: n
        }) : jsx(Spacing, {
          multiple: 2
        }), jsxs('div', {
          className: _$$s3.wFull.flex.justifyBetween.itemsCenter.selectNone.$,
          children: [e.progress && jsx('p', {
            className: _$$s3.colorTextSecondary.$,
            children: renderI18nText('rcs.surveys.question_counter', {
              currentStep: e.progress.currentStep,
              totalSteps: e.progress.totalSteps
            })
          }), jsx('div', {
            className: _$$s3.mlAuto.$,
            children: jsx($z, {
              onClick: () => {
                !e.required || t ? e.onSubmit() : i(getI18nString('rcs.surveys.this_field_is_required'));
              },
              trackingProperties: {
                ...e.trackingProperties,
                ...d,
                trackingDescriptor: UpgradeAction.SUBMIT_FREE_FORM
              },
              innerText: getI18nString('rcs.surveys.submit_free_form'),
              variant: e.usePrimaryButton ? 'primary' : 'secondary',
              autoFocus: !e.required,
              children: renderI18nText('rcs.surveys.submit')
            })
          })]
        })]
      })]
    });
  };
  e.CompleteView = function ({
    customSuccessMessage: e
  }) {
    return jsx(Fragment, {
      children: jsxs('div', {
        className: 'survey_view--surveyComplete--5LM73',
        children: [jsx(SvgComponent, {
          className: 'survey_view--successIcon---l6LH',
          svg: _$$A5
        }), jsx(Spacing, {
          direction: 'x',
          multiple: 1.5
        }), jsx('p', {
          className: 'survey_view--completeViewText--hOTK2',
          children: e || renderI18nText('rcs.surveys.thanks_for_your_feedback')
        })]
      })
    });
  };
  e.ModalView = function (e) {
    let t = jsx(i, {
      ...e
    });
    return e.position === 'center' ? jsxs(_$$sb, {
      children: [t, ' ']
    }) : jsx(wz, {
      children: t
    });
  };
  e.OffscreenModalView = forwardRef((e, t) => jsx('div', {
    'ref': t,
    'aria-hidden': !0,
    'className': 'survey_view--offscreenSurveyBoundsMeasurer--4y6x0',
    'children': jsx(i, {
      ...e
    })
  }));
  e.AutosizedModalView = forwardRef((t, r) => jsxs(Fragment, {
    children: [void 0 !== t.upcomingState && jsx(e.OffscreenModalView, {
      fadingOut: !1,
      ref: r,
      dismissModal: _$$lQ,
      hideCloseButton: t.shouldHideCloseButton(t.upcomingState),
      width: t.getDefaultWidth ? t.getDefaultWidth(t.upcomingState) : void 0,
      height: t.getDefaultHeight ? t.getDefaultHeight(t.upcomingState) : void 0,
      children: t.view(t.upcomingState)
    }), void 0 !== t.state && jsx(e.ModalView, {
      position: t.position,
      width: t.width,
      height: t.height,
      fadingOut: t.fadingOut,
      dismissModal: t.dismissModal,
      hideCloseButton: t.shouldHideCloseButton(t.state),
      trackingPropertiesOnClose: t.trackingPropertiesOnClose,
      children: t.view(t.state)
    })]
  }));
})(s || (s = {}));
let s4 = {
  [sG.OPINION_QUESTION]: 622,
  [sG.IMPROVEMENT_QUESTION]: 340,
  [sG.COMPLETE]: 340
};
let s8 = () => [{
  displayValue: getI18nString('org_admin_survey.n_a'),
  trackingValue: 0
}, {
  displayValue: getI18nString('org_admin_survey.strongly_disagree'),
  trackingValue: 1
}, {
  displayValue: getI18nString('org_admin_survey.disagree'),
  trackingValue: 2
}, {
  displayValue: getI18nString('org_admin_survey.neither_agree_nor_disagree'),
  trackingValue: 3
}, {
  displayValue: getI18nString('org_admin_survey.agree'),
  trackingValue: 4
}, {
  displayValue: getI18nString('org_admin_survey.strongly_agree'),
  trackingValue: 5
}];
let s6 = [{
  displayValue: renderI18nText('org_admin_survey.figma_s_billing_model_is_fair'),
  trackingValue: 'billingModal'
}, {
  displayValue: renderI18nText('org_admin_survey.figma_makes_it_efficient_to_give_users_the_access_they_need'),
  trackingValue: 'userAccess'
}, {
  displayValue: renderI18nText('org_admin_survey.figma_makes_it_easy_to_manage_costs'),
  trackingValue: 'costManagement'
}];
function s7({
  dismissModal: e
}) {
  let t = useSelector(e => e.currentUserOrgId);
  let r = useRef(null);
  let {
    state,
    upcomingState,
    setNextState,
    fadingOut,
    height
  } = a.useAutosizedSurveyState({
    initialState: sG.OPINION_QUESTION,
    completeStates: [sG.COMPLETE],
    offscreenBoundsRef: r,
    dismissModal: e
  });
  let u = {
    orgId: t
  };
  return jsx(s.AutosizedModalView, {
    ref: r,
    dismissModal: e,
    fadingOut,
    getDefaultHeight: e => e === sG.COMPLETE ? 236 : void 0,
    getDefaultWidth: e => s4[e],
    height,
    shouldHideCloseButton: e => e === sG.COMPLETE,
    state,
    upcomingState,
    view: e => {
      switch (e) {
        case sG.OPINION_QUESTION:
          return jsx(s.MultipleChoiceQuestionsView, {
            choices: s8(),
            defaultChoice: {
              displayValue: getI18nString('org_admin_survey.not_answered'),
              trackingValue: 0
            },
            questions: s6,
            header: getI18nString('org_admin_survey.can_you_tell_us_about_your_experience_using_figma'),
            subHeader: getI18nString('org_admin_survey.rate_your_level_of_agreement_with_the_following_statements'),
            progress: {
              currentStep: 1,
              totalSteps: 2
            },
            trackingProperties: u,
            onSubmit: () => setNextState(sG.IMPROVEMENT_QUESTION)
          });
        case sG.IMPROVEMENT_QUESTION:
          return jsx(s.EnterFreeFormView, {
            question: getI18nString('org_admin_survey.what_would_improve_your_experience'),
            progress: {
              currentStep: 2,
              totalSteps: 2
            },
            trackingProperties: u,
            onSubmit: () => setNextState(sG.COMPLETE)
          });
        case sG.COMPLETE:
          return jsx(s.CompleteView, {});
      }
    },
    width: s4[state]
  });
}
var or = (e => (e.AWAIT_ADMIN_PANEL = 'await_admin_panel', e.AWAIT_LEAVE_SETTINGS = 'await_leave_settings', e.COMPLETED = 'completed', e))(or || {});
let on = Op({
  initial: 'await_admin_panel',
  states: [{
    id: 'await_admin_panel',
    transitions: [_$$nr('Context Viewed', 'await_leave_settings', {
      condition: ({
        event: e
      }) => e.properties.name === _$$e9.ORG_ADMIN_SETTINGS_PAGE
    })]
  }, {
    id: 'await_leave_settings',
    transitions: [_$$nr('Context Viewed', 'completed', {
      condition: ({
        event: e
      }) => e.properties.name !== _$$e9.ORG_ADMIN_SETTINGS_PAGE
    })]
  }, {
    id: 'completed',
    terminal: !0
  }]
});
let oi = _$$rn('left_admin_settings', on);
let oa = 'seen_org_admin_survey';
let os = userFlagAtomFamily(oa);
function oo(e) {
  return (Date.now() - e.getTime()) / 864e5;
}
function ol(e, t, r) {
  let n = !!r && r.canAdmin;
  let i = e && oo(new Date(e.updatedAt)) < 90;
  let a = t && oo(t) <= 7;
  return n && !i && !a;
}
function od() {
  let e = _$$zl(oi);
  let t = useAtomWithSubscription(os);
  let r = useAtomWithSubscription(latestSurveyResponseDateAtom);
  let n = useAtomWithSubscription(ZS);
  let i = _$$e8({
    overlay: GFz,
    priority: _$$N5.SURVEY
  }, [t, r, n]);
  useEffect(() => {
    e.completed && (e.reset(), i.show({
      canShow: ol
    }));
  }, [i, e]);
  return jsx(_$$M2, {
    isShowing: i.isShowing,
    userFlagOnShow: oa,
    children: jsx(TrackingProvider, {
      name: 'Org Admin Survey Modal',
      properties: {
        surveyVersion: 2
      },
      children: jsx(s7, {
        dismissModal: i.complete,
        onClickPrimaryCta: i.complete,
        forceRender: _$$lQ
      })
    })
  });
}
function o_({
  dismissModal: e
}) {
  let t = useRef(null);
  let {
    state,
    upcomingState,
    clickAnswer,
    setNextState,
    fadingOut,
    height,
    width
  } = a.useAutosizedSurveyState({
    initialState: sB.WHY_ABANDON_QUESTION,
    offscreenBoundsRef: t,
    completeStates: [sB.COMPLETE],
    dismissModal: e
  });
  return jsx(s.AutosizedModalView, {
    ref: t,
    dismissModal: e,
    fadingOut,
    getDefaultHeight: e => e === sB.COMPLETE ? 240 : void 0,
    height,
    shouldHideCloseButton: e => e === sB.COMPLETE,
    state,
    upcomingState,
    view: e => {
      switch (e) {
        case sB.WHY_ABANDON_QUESTION:
          return jsx(s.QuestionView, {
            question: getI18nString('rcs.surveys.abandoned_org_upgrade_question'),
            surveyAnswers: [{
              answer: getI18nString('rcs.surveys.abandoned_org_upgrade_reason_cost'),
              nextState: sB.COMPLETE
            }, {
              answer: getI18nString('rcs.surveys.abandoned_org_upgrade_reason_billing_complexity'),
              nextState: sB.COMPLETE
            }, {
              answer: getI18nString('rcs.surveys.abandoned_org_upgrade_reason_annual_billing'),
              nextState: sB.COMPLETE
            }, {
              answer: getI18nString('rcs.surveys.abandoned_org_upgrade_reason_just_looking'),
              nextState: sB.COMPLETE
            }, {
              answer: getI18nString('rcs.surveys.abandoned_org_upgrade_reason_other'),
              nextState: sB.FREE_FORM_INPUT
            }],
            onSubmitAnswer: clickAnswer
          });
        case sB.FREE_FORM_INPUT:
          return jsx(s.EnterFreeFormView, {
            question: getI18nString('rcs.surveys.abandoned_org_upgrade_question'),
            onSubmit: () => setNextState(sB.COMPLETE)
          });
        case sB.COMPLETE:
          return jsx(s.CompleteView, {});
      }
    },
    width
  });
}
let om = Op({
  initial: 'await_cart',
  states: [{
    id: 'await_cart',
    transitions: [_$$nr('Context Viewed', 'await_abandon_cart', {
      condition: ({
        event: e
      }) => e.properties.name === _$$e9.ORG_CHECKOUT_FLOW
    })]
  }, {
    id: 'await_abandon_cart',
    transitions: [_$$nr('Context Viewed', 'complete', {
      condition: ({
        event: {
          properties: {
            name: e
          }
        }
      }) => e === _$$e9.FILE_BROWSER || e === _$$e9.TEAM_PAGE
    })]
  }, {
    id: 'complete',
    terminal: !0
  }]
});
let og = _$$rn2('org_cart_abandon_survey', om);
let of = 'seen_org_cart_abandon_survey';
let oE = userFlagExistsAtomFamily('completed_org_cart_flow');
let oy = userFlagExistsAtomFamily(of);
let ob = {
  surveyVersion: 1
};
function oT() {
  let e = useAtomWithSubscription(oE);
  let t = useAtomWithSubscription(latestSurveyResponseDateAtom);
  let r = useAtomWithSubscription(_$$zN);
  let n = useAtomWithSubscription(_$$nZ);
  let i = useAtomWithSubscription(oy);
  let a = _$$zl(og);
  let s = _$$e8({
    overlay: MYY,
    priority: _$$N5.SURVEY
  }, [e, t, r, n, i]);
  let o = useCallback(() => {
    s.show({
      canShow(e, t, r, n, i) {
        let a = new Date(Date.now() - 7776e6);
        return !e && !r && !n && (t == null || t < a) && !i;
      }
    });
  }, [s]);
  ST(a, ({
    to: e
  }) => {
    e === 'complete' && (o(), a.reset());
  });
  return jsx(_$$h5, {
    element: o_,
    isShowing: s.isShowing,
    modalType: q3.SELF_CONTAINED,
    onClickPrimaryCta: s.complete,
    onClose: s.complete,
    onManualDismiss: s.complete,
    testId: 'org-cart-abandon-survey',
    trackingContextName: 'Org Cart Abandon Survey',
    trackingProperties: ob,
    userFlagOnShow: of
  });
}
let ow = 'org_trial_modal--modal--B-euv';
function oO({
  orgTrial: e
}) {
  if (!e || e.status !== _$$Q4.EXPIRED) return null;
  let t = e.planType === FPlanTierType.ENTERPRISE ? renderI18nText('payments_modal.org_trial.enterprise') : renderI18nText('payments_modal.org_trial.organization');
  return jsxs(utilityNoop, {
    'className': ow,
    'size': 360,
    'title': jsx(TextWithTruncation, {
      fontSize: 11,
      fontWeight: 'bold',
      children: renderI18nText('payments_modal.org_trial_expired.title', {
        planText: t
      })
    }),
    'disableClickOutsideToHide': !0,
    'disableKeyboardEventPropagation': !0,
    'data-testid': 'org_trial_expired_modal',
    'children': [jsx(AutoLayout, {
      children: jsx(TextWithTruncation, {
        children: renderI18nText('payments_modal.org_trial_expired.description')
      })
    }), jsx(AutoLayout, {
      padding: {
        top: 24
      },
      children: jsx(_$$h6, {
        text: renderI18nText('payments_modal.org_trial.switch_my_workspace'),
        dataTestId: 'workspace-switcher-link'
      })
    })]
  });
}
function oR() {
  let e = useSelector(e => e.currentUserOrgId);
  return e ? jsx(oL, {
    currentOrgId: e
  }) : null;
}
function oL({
  currentOrgId: e
}) {
  let t = useAtomValue(_$$U2(e));
  let {
    show,
    complete,
    isShowing
  } = _$$e8({
    overlay: Ujx,
    priority: _$$N5.URGENT_ALERT
  }, [t]);
  useEffect(() => {
    isShowing && t.data?.status !== _$$Q4.EXPIRED ? complete() : show({
      canShow: e => !!e && e.status === _$$Q4.EXPIRED
    });
  }, [show, complete, isShowing, t]);
  return jsx(_$$h5, {
    isShowing,
    element: () => jsx(oO, {
      orgTrial: t.data
    }),
    modalType: q3.SELF_CONTAINED,
    trackingContextName: 'org_trial_expired_modal',
    onClose: complete,
    onClickPrimaryCta: complete,
    onManualDismiss: complete,
    testId: 'org_trial_expired_overlay'
  });
}
function oj(e) {
  let {
    orgTrial
  } = e;
  let [r, n] = useState(!1);
  let i = useDispatch();
  let a = getAtomMutate(_$$A7.validateOrgTrialMutation);
  let s = useCurrentPlanUser('OrgTrialPendingModal');
  let o = useIsOrgAdminUser(s);
  if (orgTrial.status !== _$$Q4.PENDING || o.status !== 'loaded') return null;
  let d = o.data;
  let c = orgTrial.planType === FPlanTierType.ENTERPRISE ? renderI18nText('payments_modal.org_trial.enterprise') : renderI18nText('payments_modal.org_trial.organization');
  let u = d ? jsx(TextWithTruncation, {
    children: renderI18nText('payments_modal.org_trial_pending.welcome_to_your_figma_trial', {
      planText: c
    })
  }) : jsx(TextWithTruncation, {
    children: renderI18nText('payments_modal.org_trial_pending.your_trial_is_almost_ready')
  });
  let p = _$$A6(orgTrial.trialPeriodEnd).utc().format('ll');
  let _ = _$$A7.getEstimatedEditorCount(orgTrial);
  let h = jsx(SecureLink, {
    'href': '/ssa/',
    'target': '_blank',
    'trusted': !0,
    'data-testid': 'ssa-link',
    'children': renderI18nText('payments_modal.org_trial_pending.ssa_link')
  });
  let m = renderI18nText('payments_modal.org_trial_pending.i_agree');
  return jsxs(utilityNoop, {
    'className': ow,
    'size': d ? 380 : 360,
    'title': jsx(TextWithTruncation, {
      fontSize: 11,
      fontWeight: 'bold',
      children: u
    }),
    'disableClickOutsideToHide': !0,
    'disableKeyboardEventPropagation': !0,
    'data-testid': 'org_trial_pending_modal',
    'children': [d ? jsxs(AutoLayout, {
      direction: 'vertical',
      spacing: 16,
      padding: {
        right: 8
      },
      children: [jsx(TextWithTruncation, {
        children: renderI18nText('payments_modal.org_trial_pending.make_sure_things_look_right', {
          planText: c
        })
      }), jsx(oU, {
        text: jsx(TextWithTruncation, {
          children: renderI18nText('payments_modal.org_trial_pending.expiration_date', {
            planText: c,
            endDate: p
          })
        })
      }), jsx(oU, {
        text: jsx(TextWithTruncation, {
          children: renderI18nText('payments_modal.org_trial_pending.editor_count.seat_rename', {
            planText: c,
            editorCount: _
          })
        })
      }), jsx(oU, {
        text: jsx(TextWithTruncation, {
          children: renderI18nText('payments_modal.org_trial_pending.no_obligation_to_purchase', {
            planText: c
          })
        })
      }), jsx(oU, {
        text: jsx(TextWithTruncation, {
          children: renderI18nText('payments_modal.org_trial_pending.terms_and_conditions', {
            ssaLink: h
          })
        })
      }), jsx(TextWithTruncation, {
        children: renderI18nText('payments_modal.org_trial_pending.by_clicking_agree', {
          agreeText: m,
          ssaLink: h
        })
      })]
    }) : jsx('div', {
      className: _$$s3.pr8.$,
      children: jsx(TextWithTruncation, {
        children: renderI18nText('payments_modal.org_trial_pending.trial_still_needs_admin_approval', {
          planText: c
        })
      })
    }), jsxs(AutoLayout, {
      direction: 'horizontal',
      horizontalAlignItems: 'space-between',
      verticalAlignItems: 'center',
      padding: {
        top: 24
      },
      children: [jsx(_$$h6, {
        text: renderI18nText('payments_modal.org_trial.switch_my_workspace'),
        dataTestId: 'workspace-switcher-link'
      }), d && jsx(_$$$z, {
        disabled: r,
        variant: 'primary',
        onClick: () => {
          r || (n(!0), a({
            orgId: orgTrial.resourceId,
            billingTrialId: orgTrial.id
          }).then(() => {
            i(FlashActions.flash(getI18nString('payments_modal.org_trial_pending.success')));
          }).catch(e => {
            console.error(e);
            i(FlashActions.error(getI18nString('payments_modal.org_trial_pending.error')));
            n(!1);
          }));
        },
        dataTestId: 'submit-validation-button',
        trackingProperties: {
          trackingDescriptor: UpgradeAction.AGREE,
          orgId: e.orgTrial.resourceId
        },
        children: m
      })]
    })]
  });
}
function oU(e) {
  return jsxs(AutoLayout, {
    direction: 'horizontal',
    spacing: 8,
    verticalAlignItems: 'start',
    children: [jsx('div', {
      className: _$$s3.h16.flex.flexColumn.justifyCenter.$,
      children: jsx('div', {
        className: _$$s3.colorBgInverse.h4.w4.$
      })
    }), e.text]
  });
}
function oB() {
  let e = useSelector(e => e.currentUserOrgId);
  return e ? jsx(oG, {
    currentOrgId: e
  }) : null;
}
function oG({
  currentOrgId: e
}) {
  let t = useAtomWithSubscription(_$$U2(e));
  let {
    show,
    complete,
    isShowing
  } = _$$e8({
    overlay: aBI,
    priority: _$$N5.URGENT_ALERT
  }, [t]);
  useEffect(() => {
    isShowing && t.data?.status !== _$$Q4.PENDING ? complete() : show({
      canShow: e => !!e && e.status === _$$Q4.PENDING
    });
  }, [show, complete, isShowing, t]);
  return jsx(_$$h5, {
    isShowing,
    element: () => t.data ? jsx(oj, {
      orgTrial: t.data
    }) : null,
    modalType: q3.SELF_CONTAINED,
    trackingContextName: 'org_trial_pending_modal',
    onClose: complete,
    onClickPrimaryCta: complete,
    onManualDismiss: complete,
    testId: 'org_trial_pending_overlay'
  });
}
let oz = liveStoreInstance.Mutation(async e => {
  await Eh.validateTrial(e);
});
let oK = createRemovableAtomFamily(e => transformAtom(ProductTrialsView.Query({
  orgId: e
}), e => e?.org?.canAdmin && e.org.billingTrials?.length ? function (e) {
  let t = e.filter(e => e.status === _$$Q4.PENDING && e.trialType === FBillingEntityType.PRODUCT);
  return sortByDateProperty(t, 'createdAt')[0] || null;
}(e.org.billingTrials) : null));
function oZ({
  productTrial: e
}) {
  let [t, r] = useState(!1);
  let n = useDispatch();
  let i = getAtomMutate(oz);
  let a = useModalManager({
    preventUserClose: !0,
    open: !0,
    onClose: () => {}
  });
  let s = useCallback(async () => {
    if (!t) {
      r(!0);
      try {
        await i({
          orgId: e.resourceId,
          billingTrialId: e.id
        });
        n(FlashActions.flash(getI18nString('payments_modal.org_trial_pending.success')));
      } catch (e) {
        console.error(e);
        n(FlashActions.error(getI18nString('payments_modal.org_trial_pending.error')));
      } finally {
        r(!1);
      }
    }
  }, [t, r, e, i, n]);
  if (e.status !== _$$Q4.PENDING) return null;
  let o = _$$A6(e.trialPeriodEnd).local().format('ll');
  let d = jsx(SecureLink, {
    'href': '/ssa/',
    'target': '_blank',
    'trusted': !0,
    'data-testid': 'ssa-link',
    'children': renderI18nText('payments_modal.org_trial_pending.ssa_link')
  });
  let c = renderI18nText('payments_modal.org_trial_pending.i_agree');
  let u = formatList(e.productLicenseTypes?.map(e => _$$E5(e)) || []);
  let p = formatList(e.productLicenseTypes?.map(e => _$$$2(e)) || []);
  let _ = e.productLicenseTypes?.length || 0;
  return jsx(ModalRootComponent, {
    'manager': a,
    'width': 380,
    'data-testid': 'product_trial_pending_modal',
    'children': jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: jsx(TextWithTruncation, {
            fontSize: 11,
            fontWeight: 'bold',
            children: renderI18nText('payments_modal.product_trial_pending.welcome_to_your_figma_trial')
          })
        })
      }), jsx(DialogBody, {
        children: jsxs(AutoLayout, {
          direction: 'vertical',
          spacing: 16,
          padding: {
            right: 8
          },
          children: [jsx(TextWithTruncation, {
            children: renderI18nText('payments_modal.product_trial_pending.make_sure_things_look_right', {
              productNames: u
            })
          }), jsx(oQ, {
            text: jsx(TextWithTruncation, {
              children: renderI18nText('payments_modal.product_trial_pending.expiration_date', {
                productNamesShort: p,
                numProducts: _,
                endDate: o
              })
            })
          }), jsx(oQ, {
            text: jsx(TextWithTruncation, {
              children: renderI18nText('payments_modal.product_trial_pending.available_to_users_in_org')
            })
          }), jsx(oQ, {
            text: jsx(TextWithTruncation, {
              children: renderI18nText('payments_modal.product_trial_pending.no_obligation_to_purchase', {
                productNames: u,
                numProducts: _
              })
            })
          }), jsx(oQ, {
            text: jsx(TextWithTruncation, {
              children: renderI18nText('payments_modal.org_trial_pending.terms_and_conditions', {
                ssaLink: d
              })
            })
          }), jsx(oQ, {
            text: jsx(TextWithTruncation, {
              children: renderI18nText('payments_modal.product_trial_pending.help_make_decisions')
            })
          }), jsx(TextWithTruncation, {
            children: renderI18nText('payments_modal.product_trial_pending.by_clicking_agree', {
              agreeText: c,
              ssaLink: d
            })
          })]
        })
      }), jsx(DialogFooter, {
        children: jsxs(AutoLayout, {
          direction: 'horizontal',
          horizontalAlignItems: 'space-between',
          verticalAlignItems: 'center',
          padding: 4,
          children: [jsx(_$$h6, {
            text: renderI18nText('payments_modal.org_trial.switch_my_workspace'),
            dataTestId: 'workspace-switcher-link'
          }), jsx(_$$V4, {
            disabled: t,
            variant: 'primary',
            onClick: s,
            dataTestId: 'submit-validation-button',
            trackingProperties: {
              trackingDescriptor: UpgradeAction.AGREE,
              orgId: e.resourceId
            },
            children: c
          })]
        })
      })]
    })
  });
}
function oQ(e) {
  return jsxs(AutoLayout, {
    direction: 'horizontal',
    spacing: 8,
    verticalAlignItems: 'start',
    children: [jsx('div', {
      className: _$$s3.h16.flex.flexColumn.justifyCenter.$,
      children: jsx('div', {
        className: _$$s3.colorBgInverse.h4.w4.$
      })
    }), e.text]
  });
}
function o0() {
  let e = useSelector(e => e.currentUserOrgId);
  return e ? jsx(o1, {
    currentOrgId: e
  }) : null;
}
function o1({
  currentOrgId: e
}) {
  let t = useAtomWithSubscription(oK(e));
  let {
    show,
    complete,
    isShowing
  } = _$$e8({
    overlay: t8H,
    priority: _$$N5.URGENT_ALERT
  }, [t]);
  return (useEffect(() => {
    isShowing && t.data?.status !== _$$Q4.PENDING ? complete() : show({
      canShow: e => e?.status === _$$Q4.PENDING
    });
  }, [show, complete, isShowing, t]), getFeatureFlags().product_trials_lg) ? jsx(_$$M2, {
    isShowing,
    testId: 'product_trial_pending_overlay',
    children: t.data ? jsx(TrackingProvider, {
      name: _$$e9.PENDING_PRODUCT_TRIAL_OVERLAY,
      properties: {
        trialId: t.data.id,
        orgId: t.data.resourceId
      },
      children: jsx(oZ, {
        productTrial: t.data
      })
    }) : null
  }) : null;
}
let o3 = memo(() => {
  return jsxs(Suspense, {
    fallback: null,
    children: [jsx(_$$x5, {}), jsxs(_$$p2, {
      children: [jsx(oB, {}), jsx(oR, {}), jsx(o0, {})]
    }), jsx(_$$p2, {
      children: jsx(oT, {})
    }), jsx(_$$p2, {
      children: jsx(od, {})
    }), jsx(_$$p2, {
      children: jsx(_$$h4, {})
    })]
  });
});
let lp = 'desktop_new_tab_folder_dropdown--teamAvatar--Ok-K9';
function l_({
  currentFolder: e,
  teamsWithEditableProjects: t,
  setSelectedFolder: r
}) {
  let n = getCurrentTeam();
  let i = vt(n?.id);
  let a = jn();
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  let [d, c] = useMemo(() => {
    let e = t.map(e => {
      let t = e.projects?.[0];
      return t ? {
        ...e,
        project: t
      } : null;
    }).filter(e => !!e);
    return e.length <= 5 ? [e, null] : [e.slice(0, 3), e.slice(3)];
  }, [t]);
  let u = e => () => {
    r(e);
  };
  let p = e ? `${e.team.name} / ${e.project.path}` : getI18nString('desktop_new_tab.drafts');
  return jsx(Fragment, {
    children: jsx(DropdownThemeProvider, {
      mode: 'match',
      children: jsxs(MenuRootComp, {
        manager,
        children: [jsx(Button, {
          'variant': 'ghost',
          'aria-label': getI18nString('desktop_new_tab.create_new_file_in_folder', {
            folderName: p
          }),
          ...getTriggerProps(),
          'children': jsxs('div', {
            className: 'desktop_new_tab_folder_dropdown--dropdownButton--99FCC',
            children: [e && jsx('div', {
              className: lp,
              children: jsx(_$$nl2, {
                size: {
                  imgSize: Pf.SMALL,
                  fallbackSize: Pf.XSMALL
                },
                fallbackDisplay: _$$U3.HIDDEN,
                team: {
                  id: e.team.id
                }
              })
            }), p, jsx(_$$O2, {})]
          })
        }), jsxs(MenuContainerComp, {
          children: [jsxs(MenuGroupComp, {
            title: jsx(MenuTitleComp, {
              children: renderI18nText('desktop_new_tab.create_new_file_in')
            }),
            children: [d.map(e => jsxs(MenuItemComp, {
              onClick: u({
                team: e,
                project: e.project
              }),
              children: [jsx(MenuItemLead, {
                children: jsx('div', {
                  className: lp,
                  children: jsx(_$$nl2, {
                    size: {
                      imgSize: Pf.SMALL,
                      fallbackSize: Pf.XSMALL
                    },
                    fallbackDisplay: _$$U3.HIDDEN,
                    team: {
                      id: e.id
                    }
                  })
                })
              }), jsxs(TextWithTruncation, {
                truncate: !0,
                children: [e.name, ' / ', e.project.path]
              })]
            }, e.id)), c && c.length > 0 && jsxs(MenuSubMenu, {
              children: [jsx(MenuSubTrigger, {
                children: renderI18nText('file_browser.tool_bar.see_more_editable_projects', {
                  numberOfEditableProjects: c.length
                })
              }), jsx(MenuSubContainerComp, {
                children: c.map(e => jsxs(MenuItemComp, {
                  onClick: u({
                    team: e,
                    project: e.project
                  }),
                  children: [jsx(MenuItemLead, {
                    children: jsx('div', {
                      className: lp,
                      children: jsx(_$$nl2, {
                        size: {
                          imgSize: Pf.SMALL,
                          fallbackSize: Pf.XSMALL
                        },
                        fallbackDisplay: _$$U3.HIDDEN,
                        team: {
                          id: e.id
                        }
                      })
                    })
                  }), jsxs(TextWithTruncation, {
                    truncate: !0,
                    children: [e.name, ' / ', e.project.path]
                  })]
                }, e.id))
              })]
            })]
          }), !i && !a && jsxs(MenuItemComp, {
            onClick: u(null),
            children: [jsx(MenuItemLead, {
              children: jsx(_$$A8, {})
            }), jsx(TextWithTruncation, {
              truncate: !0,
              children: renderI18nText('sidebar.drafts')
            })]
          })]
        })]
      })
    })
  });
}
function lF({
  editorType: e,
  index: t,
  userSelectedFolder: r,
  isDisabled: n,
  isLoading: i
}) {
  let a;
  let s;
  let o = useDispatch();
  switch (useCurrentTheme(), e) {
    case FFileType.DESIGN:
      a = getI18nString('desktop_new_tab.file_type.design');
      s = _$$pD;
      break;
    case FFileType.WHITEBOARD:
      a = getI18nString('desktop_new_tab.file_type.figjam');
      s = _$$n2;
      break;
    case FFileType.SLIDES:
      a = getI18nString('desktop_new_tab.file_type.slides');
      s = ZB;
      break;
    case FFileType.SITES:
      a = getI18nString('desktop_new_tab.file_type.site');
      s = f7;
      break;
    case FFileType.COOPER:
      a = getI18nString('desktop_new_tab.file_type.buzz');
      s = FZ;
      break;
    case FFileType.FIGMAKE:
      a = getI18nString('desktop_new_tab.file_type.make');
      s = $X;
      break;
    default:
      throwTypeError(e);
  }
  let d = r ? r.project.id : void 0;
  let c = !!r && !checkTeamFileRestrictions(normalizeTeamData(r.team), {
    type: AddOperationType.ADD_FILE,
    editorType: e
  });
  let u = n && !i;
  let p = n || i;
  let {
    setKeyboardNavigationElement
  } = _$$M3({
    path: [$t],
    column: t,
    disabled: p
  });
  let h = e === FFileType.SITES && _$$z2() === 'BETA';
  let g = _$$a8();
  let f = h || e === FFileType.COOPER || g && e === FFileType.FIGMAKE;
  return jsx(setupThemeContext, {
    brand: _$$K4(e),
    children: jsx(ButtonPrimitive, {
      'ref': setKeyboardNavigationElement,
      'className': j()('new_file_card--fileCard--O7OCx', {
        'new_file_card--disabledCard--HLDVs': u,
        'new_file_card--preventInteraction--iAf9o': p
      }),
      'disabled': p,
      'onClick': function () {
        if (!n) {
          if (c && r) {
            e === FFileType.SITES && _$$M4 ? o(showModalHandler({
              type: _$$M4,
              data: {
                team: r.team
              }
            })) : e === FFileType.FIGMAKE && _$$W2() ? o(showModalHandler({
              type: _$$i2,
              data: {
                team: r.team
              }
            })) : o(showModalHandler({
              type: ConsumptionPaywallModalPlansPricing,
              data: {
                team: r.team,
                resource: e !== FFileType.FIGMAKE || getFeatureFlags().bake_starter_limit ? PageFolderFile.FILE : FeatureFlag.FIGMAKE,
                action: fileActionEnum.CREATE_FILE_FROM_DROPDOWN,
                editorType: e,
                currentPlan: consumptionPaywallUtils.Plan.STARTER,
                upsellPlan: consumptionPaywallUtils.Plan.PRO,
                upsellSource: UpsellModalType.CREATE_NEW_FILE
              }
            }));
            return;
          }
          o(x3({
            editorType: e,
            projectId: d
          }));
        }
      },
      'aria-label': a,
      'htmlAttributes': {
        'data-testid': s
      },
      'children': !i && jsxs(Fragment, {
        children: [jsx('div', {
          className: 'new_file_card--plus--W6UAz',
          children: jsx(lj, {
            editorType: e
          })
        }), jsx('div', {
          className: 'new_file_card--title---ZPHj',
          children: a
        }), f && jsx(Badge, {
          className: 'new_file_card--betaTag--2H7Va',
          text: getI18nString('file_browser.creation_buttons.beta'),
          color: BadgeColor.DEFAULT_TRANSLUCENT
        })]
      })
    })
  });
}
function lj({
  editorType: e
}) {
  switch (e) {
    case FFileType.DESIGN:
      return jsx(_$$k2, {});
    case FFileType.WHITEBOARD:
      return jsx(_$$D3, {});
    case FFileType.SLIDES:
      return jsx(_$$l4, {});
    case FFileType.SITES:
      return jsx(_$$Y3, {});
    case FFileType.COOPER:
      return jsx(_$$W, {});
    case FFileType.FIGMAKE:
      return jsx(_$$t5, {});
    default:
      return null;
  }
}
function lJ() {
  let [e] = setupResourceAtomHandler(DesktopNewTabRecentFilesView({}));
  let t = useMemo(() => e.transform(e => mapRecentFilesAndRepos(e.currentUser.recentFiles)), [e]);
  useEffect(() => {
    t.status === 'loaded' && Wn(t.data);
  }, [t]);
  return useMemo(() => t.transform(e => e.recent_files), [t]);
}
let lZ = 'recent_files--placeholdersContainer--mAriX';
let lQ = 'recent_files--fadeOut--A045K';
var l0 = (e => (e[e.LOADING = 0] = 'LOADING', e[e.TRANSITIONING = 1] = 'TRANSITIONING', e[e.LOADED = 2] = 'LOADED', e))(l0 || {});
function l1(e) {
  return e.type === _$$nb.FILE ? e.file : fileEntityDataMapper.toLiveGraph(e.mainFile);
}
function l2(e) {
  let [t, r] = useState(e ? 2 : 0);
  let n = useRef(null);
  useEffect(() => {
    e ? (r(1), n.current = setTimeout(() => {
      r(2);
      n.current = null;
    }, 2e3)) : (r(0), n.current && clearTimeout(n.current));
  }, [e, n]);
  return t;
}
function l5({
  recentItems: e
}) {
  let t = useDispatch();
  let r = selectCurrentUser();
  let n = useSelector(e => e.activeFileUsers);
  let i = lJ().status === 'loaded';
  let a = useMemoCustom(() => filterNotNullish(e.map(e => e.type === _$$nb.FILE || e.type === _$$nb.REPO ? l1(e).key : null)), [e], (e, t) => {
    let r = new Set(e);
    for (let e of t) {
      if (!r.has(e)) return !1;
      r.$$delete(e);
    }
    return r.size === 0;
  });
  let s = useMemo(() => a.map(e => ({
    fileKey: e
  })), [a]);
  let o = useMultiSubscription(ActiveFileUsersForFileView, s, {
    enabled: !0
  });
  useEffect(() => {
    for (let e of o) {
      if (e.result.status === 'loaded' && e.result.data) {
        let r = e.args.fileKey;
        let n = ZF(e.result.data);
        t(setActiveFileUsersAction({
          fileKey: r,
          users: n
        }));
      }
    }
  }, [t, a, o]);
  let d = e.length !== 0;
  let c = l2(i);
  let u = l2(i && d);
  return jsxs('div', {
    className: 'recent_files--fileList--2lPcn',
    children: [jsxs('div', {
      className: 'recent_files--recentFilesHeaderContainer--bwBGr',
      children: [c !== 2 && jsx(l6, {
        state: c
      }), c !== 0 && jsx(Fragment, {
        children: jsx('p', {
          className: 'recent_files--recentFilesHeader--cQ-VC',
          children: d ? renderI18nText('desktop_new_tab.recent_files_header') : renderI18nText('desktop_new_tab.no_recent_files_header')
        })
      })]
    }), jsxs('div', {
      className: 'recent_files--recentFilesContainer--fCLN8',
      children: [u !== 2 && jsx(l7, {
        state: u
      }), u !== 0 && jsx('ul', {
        className: 'recent_files--loadedRecentFiles--lT-EL',
        children: e.map((e, t) => {
          let i = Tf.getId(e);
          return jsx(_$$Fragment, {
            children: jsx(l3, {
              item: e,
              index: t,
              activeFileUsers: n,
              user: r
            })
          }, i);
        })
      })]
    }), u !== 0 && jsx(l8, {})]
  });
}
function l3({
  item: e,
  index: t,
  activeFileUsers: r,
  user: n
}) {
  let i;
  let a = useDispatch();
  let s = Tf.getName(e);
  let o = useRef(null);
  let [d, c] = useState(null);
  useEffect(() => {
    o.current && (o.current.offsetWidth < o.current.scrollWidth && s ? c(s) : c(null));
  }, [o, s]);
  let u = useRef(null);
  let p = _$$M3({
    path: [FC, t]
  });
  useEffect(() => {
    if (p.isFocused && u.current) {
      let e = window.getComputedStyle(u.current);
      let t = parseInt(e.getPropertyValue('scroll-margin-top')) || 0;
      let r = parseInt(e.getPropertyValue('scroll-margin-bottom')) || 0;
      let n = u.current.getBoundingClientRect();
      let i = n.top < t;
      let a = n.bottom > window.innerHeight - r;
      i ? u.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      }) : a && u.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      });
    }
  }, [p.isFocused]);
  let _ = [];
  switch (e.type) {
    case _$$nb.FILE:
    case _$$nb.REPO:
      {
        let t = l1(e);
        i = getDesignFileUrl(t);
        _ = gH(r, n.id, t.key);
        break;
      }
    case _$$nb.PROTOTYPE:
      i = e.prototype.url;
      break;
    default:
      throwTypeError(e);
  }
  let h = Tf.getAccessedAt(e);
  return jsx('li', {
    className: 'recent_files--fileListItemContainer--HM7J0',
    children: jsxs(LinkPrimitive, {
      className: 'recent_files--fileListItem--Czr-8',
      href: i,
      onClick(t) {
        if (t.preventDefault(), e.type === _$$nb.FILE || e.type === _$$nb.REPO) {
          let t = l1(e);
          a(I$({
            fileKey: t.key
          }));
        } else {
          e.type === _$$nb.PROTOTYPE && a(Mx({
            fileKey: e.prototype.file_key,
            pageId: e.prototype.page_id
          }));
        }
      },
      ref: e => {
        u.current = e;
        p.setKeyboardNavigationElement(e);
      },
      htmlAttributes: {
        'data-testid': LD
      },
      children: [jsx(l4, {
        item: e
      }), jsx('p', {
        'className': 'recent_files--titleMetadata--G2Ju6 recent_files--metadata--MhlWS',
        'ref': o,
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': d,
        'dir': 'auto',
        'children': s
      }), jsx('p', {
        className: 'recent_files--timestampMetadata--GvxiV recent_files--metadata--MhlWS',
        children: h ? jsx(h1, {
          date: h,
          capitalize: !0
        }) : null
      }), jsx(_$$W3, {
        className: 'recent_files--facePile--M1rjO',
        entityList: _,
        maxNumHeads: 3,
        currentUser: n
      })]
    })
  });
}
function l4({
  item: e
}) {
  let t = _$$C2(e);
  return jsxs('div', {
    className: 'recent_files--thumbnailContainer--WJlvr',
    children: [jsx(_$$e0, {
      tile: e,
      borderRadius: 4,
      noBorder: !0
    }), jsx('div', {
      className: 'recent_files--fileIconTypeBadge--DBApO',
      children: jsx(w4, {
        'size': 16,
        'type': t,
        'aria-label': function (e) {
          switch (e) {
            case y1.DESIGN:
              return getI18nString('desktop_new_tab.file_type.design');
            case y1.SLIDES:
              return getI18nString('desktop_new_tab.file_type.slides');
            case y1.WHITEBOARD:
              return getI18nString('desktop_new_tab.file_type.figjam');
            case y1.SITES:
              return getI18nString('desktop_new_tab.file_type.site');
            case y1.FIGMAKE:
              return getI18nString('general.figma_rev_short');
            case y1.COOPER:
              return getI18nString('desktop_new_tab.file_type.buzz');
            case y1.PROTOTYPE:
              return getI18nString('desktop_new_tab.file_type.prototype');
            case y1.SLIDES_TEMPLATE:
              return getI18nString('desktop_new_tab.file_type.slides_template');
            case y1.REPO:
              return getI18nString('desktop_new_tab.file_type.repo');
            case y1.PUBLISHED:
              return getI18nString('desktop_new_tab.file_type.published');
            case y1.WHITEBOARD_TEMPLATE:
              return getI18nString('desktop_new_tab.file_type.figjam_template');
            case y1.COOPER_TEMPLATE:
              return getI18nString('desktop_new_tab.file_type.buzz_template');
            default:
              throwTypeError(e, `Unknown FileIconType: ${e}`);
          }
        }(t)
      })
    })]
  });
}
function l8() {
  let e = useDispatch();
  let t = useSelector(e => selectedViewToPath(e, {
    view: 'recentsAndSharing'
  }));
  let {
    setKeyboardNavigationElement
  } = _$$M3({
    path: [_$$lW]
  });
  return jsx('div', {
    className: 'recent_files--browseMoreLink--Ohk3y',
    children: jsx(_$$N6, {
      ref: setKeyboardNavigationElement,
      href: t,
      onClick(t) {
        trackEventAnalytics('Desktop New Tab Browse More Recents');
        t.preventDefault();
        e(selectViewAction({
          view: 'recentsAndSharing'
        }));
      },
      htmlAttributes: {
        'data-testid': KN
      },
      children: renderI18nText('desktop_new_tab.browser_more_recent_files_link')
    })
  });
}
function l6({
  state: e
}) {
  let t = j()(lZ, 'recent_files--headerPlaceholderContainer--II265', e === 1 && lQ);
  return jsx('div', {
    className: t,
    children: jsx('div', {
      className: 'recent_files--headerPlaceholder--4W0ry recent_files--placeholder--C3q68'
    })
  });
}
function l7({
  state: e
}) {
  let t = [];
  for (let e = 0; e < 10; e++) {
    t.push(jsx(_$$Fragment, {
      children: jsxs('div', {
        className: 'recent_files--placeholderRow--EKNLE',
        children: [jsx('div', {
          className: 'recent_files--thumbnailPlaceholder--p3ZL6 recent_files--placeholder--C3q68'
        }), jsx('div', {
          className: 'recent_files--titlePlaceholder--jISa4 recent_files--placeholder--C3q68'
        }), jsx('div', {
          className: 'recent_files--timestampPlaceholder--SwyAW recent_files--placeholder--C3q68'
        })]
      })
    }, e));
  }
  let r = j()(lZ, e === 1 && lQ);
  return jsx('div', {
    className: r,
    children: t
  });
}
let l9 = 'desktop_new_tab_view--newTabView--xPTS3';
let de = 'desktop_new_tab_view--folderDropdown--NyFdh';
let dt = 'desktop_new_tab_view--folderHeader--72sHl';
function dr() {
  let e;
  let t = lJ().data;
  let r = O8().data;
  let n = useSelector(e => e.recentRepos);
  let i = useSelector(e => e.selectedBranchKeyByRepoId);
  let a = useSelector(e => e.desktopNewTab.isCreatingFile);
  let s = useSelector(e => e.desktopNewTab.loadingBackgroundColor);
  let o = useRef(null);
  let [d, c] = useState(0);
  let u = useAtomWithSubscription(_$$d9);
  let p = (u.data ? u.data : qo.ORG) === qo.ORG;
  let _ = hasUserAccess(!!useAtomWithSubscription(_$$t4).data, p);
  let [h, m] = useState(void 0);
  let g = null;
  let f = function ({
    enabled: e = !0
  } = {}) {
    let t = useSubscription(FileCreationDropdownView, {
      orgId: null
    }, {
      enabled: e
    });
    if (t.status !== 'loaded') return null;
    {
      let {
        teamEditRoles
      } = t.data.currentUser;
      return teamEditRoles.map(e => e.team).filter(e => !!(e && e.projects && !e.deletedAt && e.isStarterTeam && e.projects.length > 0 && !e.restrictionsList.includes(FPlanLimitationType.LOCKED)));
    }
  }({
    enabled: _
  });
  if (f) {
    let t = f[0];
    let r = t?.projects;
    e = f.length > 0 && _;
    f.length > 0 && r && r.length > 0 && (g = void 0 === h ? {
      team: t,
      project: r[0]
    } : h);
  }
  let E = useSelector(e => e.user?.drafts_folder_id);
  let y = e ? g : null;
  let b = useProjectFileCreationPermissions(E);
  let T = y ? y.project : b.data;
  let I = !y && b.status === 'loading';
  let S = _$$h7(T);
  let v = useRef([]);
  let A = useMemo(() => {
    if (a) return v.current;
    let e = [];
    for (let r of t ?? []) e.push(fA(r));
    for (let t of r ?? []) {
      e.push({
        type: _$$nb.PROTOTYPE,
        prototype: t
      });
    }
    for (let t of n) {
      let r = t.files.find(e => isDefaultFile(e, t.repo));
      r && e.push({
        type: _$$nb.REPO,
        repo: t.repo,
        branches: t.files,
        accessed_at: t.timestamp,
        mainFile: r,
        selectedBranchKey: i[t.repo.id] || ''
      });
    }
    e.sort((e, t) => {
      let r = Tf.getAccessedAt(e);
      let n = Tf.getAccessedAt(t);
      return r && n ? -r.localeCompare(n) : n ? 1 : r ? -1 : 0;
    });
    return e.slice(0, 10);
  }, [t, r, n, i, a, v]);
  v.current = A;
  useEffect(() => {
    let e = () => {
      document.visibilityState === 'visible' && o.current && o.current.scrollTo({
        top: 0
      });
    };
    document.addEventListener('visibilitychange', e);
    return () => document.removeEventListener('visibilitychange', e);
  }, [o]);
  let x = useCallback(() => {
    o.current && c(o.current.scrollTop);
  }, [o]);
  let N = parsePxNumber('-120px');
  let C = getUserId();
  setupResourceAtomHandler(_$$OL({
    userId: C ?? ''
  }), {
    enabled: C != null
  });
  let {
    overrideUp,
    overrideDown
  } = JO();
  return s ? jsx(dn, {
    backgroundColor: s
  }) : jsxs(_$$dP, {
    overrideUp,
    overrideDown,
    children: [jsx(y7, {}), jsxs('div', {
      ref: o,
      className: j()('desktopNewTabViewHideable', l9),
      onScroll: x,
      children: [jsx('div', {
        className: j()({
          'desktop_new_tab_view--topSection--YiYaE': !0,
          'desktop_new_tab_view--topSectionDivider--hQ6La': d > -N,
          'desktop_new_tab_view--topSectionWithDropdown--i82fQ': e
        }),
        children: jsxs('div', {
          className: 'desktop_new_tab_view--topSectionContent--CzXg6',
          children: [e ? f ? jsxs('div', {
            className: de,
            children: [jsx('div', {
              className: dt,
              children: getI18nString('desktop_new_tab.create_file_in')
            }), jsx(l_, {
              currentFolder: g,
              teamsWithEditableProjects: f,
              setSelectedFolder: m
            })]
          }) : jsx('div', {
            className: de,
            children: jsx('div', {
              className: dt,
              children: jsx('div', {
                className: 'desktop_new_tab_view--folderDropdownPlaceholder--bosVZ'
              })
            })
          }) : '', jsx('div', {
            className: 'desktop_new_tab_view--fileCardsSection--d7yQC',
            children: S.map(({
              editorType: e,
              canCreate: t
            }, r) => jsx(lF, {
              index: r,
              editorType: e,
              userSelectedFolder: y,
              isDisabled: !t,
              isLoading: I
            }, e))
          }), jsx(zj, {})]
        })
      }), jsx('div', {
        className: 'desktop_new_tab_view--bottomSection--aWNBL',
        children: jsx(l5, {
          recentItems: A
        })
      })]
    })]
  });
}
function dn({
  backgroundColor: e
}) {
  return jsx('div', {
    className: l9,
    style: {
      backgroundColor: e
    }
  });
}
let df = createContext({
  shouldDiff: () => !1,
  handleDiffReport: () => ({
    didDiff: !1
  })
});
function dE({
  children: e,
  onDiff: t
}) {
  let r = useRef({});
  let n = function (e) {
    let t = trackFileEventWithStore();
    return useMemo(() => e ?? ((e, r, n) => {
      t('LiveGraph Diff', {
        diffId: e,
        expectedIds: r.expectedIds,
        actualIds: r.actualIds,
        removedIds: r.removedIds,
        addedIds: r.addedIds,
        commonIds: r.commonIds,
        changedIds: r.changedIds,
        unchangedIds: r.unchangedIds,
        removedPaths: r.removedPaths,
        addedPaths: r.addedPaths,
        changedPaths: r.changedPaths,
        ...n
      });
    }), [e, t]);
  }(t);
  let i = useMemo(() => ({
    shouldDiff: e => !r.current[e],
    handleDiffReport: (e, t, i) => (r.current[e] = !0, t.hasDiffs) ? (n(e, t, i), {
      didDiff: !0,
      report: t,
      args: i
    }) : {
      didDiff: !1
    }
  }), [n]);
  return jsx(df.Provider, {
    value: i,
    children: e
  });
}
let dT = db;
let dO = e => {
  let t = {};
  e.forEach(({
    args: e,
    result: r
  }) => {
    t[e.key] = _$$L2(r);
  });
  return t;
};
function dR() {
  (function () {
    let e = useDispatch();
    !function () {
      let e = !!getFeatureFlags().ds_componentbykey_shadow_read;
      let t = useSelector(OQ);
      let r = useMemo(() => t.map(e => ({
        key: e
      })), [t]);
      useMultiSubscription(ComponentByKey, r, {
        enabled: e
      });
    }();
    let t = function () {
      let e = useCurrentFileKey();
      let t = _$$n4();
      let r = useAtomWithSubscription(resourceDataAndPresetKeysV2SetAtom);
      let [n, i] = useAtomValueAndSetter(dP);
      let a = useAtomWithSubscription(dD);
      let s = useSelector(qC);
      let o = useMemo(() => s.filter(e => !n.has(e)), [s, n]);
      let l = useMemo(() => o.map(t => ({
        key: t,
        openFileKey: e
      })), [o, e]);
      let d = useMultiSubscription(StyleByKey, l);
      let c = useMemo(() => dO(d), [d]);
      let u = useMemo(() => ({
        ...a,
        ...c
      }), [a, c]);
      useEffect(() => {
        if (t) {
          let e = new Set(n);
          Object.entries(c).forEach(([t, {
            result: n
          }]) => {
            n.status === 'loaded' && hasLibraryKeyInSet(n.data, r) && e.add(_$$sg(t));
          });
          Object.entries(a).forEach(([t, {
            result: n
          }]) => {
            n.status !== 'loaded' || hasLibraryKeyInSet(n.data, r) || e.$$delete(_$$sg(t));
          });
          dT()(n, e) || i(e);
        }
      }, [c, a, n, r, i, e, t]);
      return u;
    }();
    let {
      localUnpublishedStyles,
      unpublishedLocalStyleKeyToNodeIds,
      usedLocalStyles
    } = function () {
      let e = useCurrentFileKey();
      let t = useFileLibraryKeys();
      let r = useSceneGraphSelector();
      let n = Bh(t);
      let i = useSelector(selectPublishableStyleNodeIds);
      let a = useSelector(selectLocalStylesWithUsagesOnLoadedPages);
      let s = useMemo(() => {
        if (!r || n.status !== 'loaded') return {};
        let e = new Set(_$$z3(n).map(e => e.node_id));
        return dL({
          allStyles: [...new Set([...i, ...a])],
          publishedStyleNodeIds: e,
          sceneGraph: r
        });
      }, [i, n, r, a]);
      let o = useMemo(() => Object.keys(s).map(t => ({
        key: t,
        openFileKey: e
      })), [s, e]);
      let l = useMultiSubscription(StyleByKey, o);
      return {
        localUnpublishedStyles: useMemo(() => dO(l), [l]),
        unpublishedLocalStyleKeyToNodeIds: s,
        usedLocalStyles: a
      };
    }();
    useEffect(() => {
      let a = Object.entries(localUnpublishedStyles).filter(([e, {
        movedAssetData: t
      }]) => {
        let r = t && unpublishedLocalStyleKeyToNodeIds[t.sourceKey];
        return r && usedLocalStyles.includes(r);
      });
      let s = [...Object.entries(t), ...a].reduce((e, [t, {
        result: r
      }]) => {
        if (r.status === 'loaded') {
          if (r.data.unpublished_at) return e;
          e[r.data.key] = r;
        } else {
          e[t] = r;
        }
        return e;
      }, Object.create(null));
      e(_$$ow2(s));
    }, [e, usedLocalStyles, localUnpublishedStyles, t, unpublishedLocalStyleKeyToNodeIds]);
    useEffect(() => {
      let {
        sourceAssetKeyToDestinationKey,
        sourceAssetKeyToFileName,
        destinationStyleKeyToLegacySourceStyle
      } = function (e) {
        let t = Object.create(null);
        let r = Object.create(null);
        let n = Object.create(null);
        for (let [i, {
          result: a,
          movedAssetData: s,
          legacySourceStyle: o
        }] of Object.entries(e)) {
          s && (t[_$$sg(i)] = s.destinationKey, s.sourceFileName && (r[_$$sg(i)] = s.sourceFileName));
          o && a.status === 'loaded' && (n[_$$sg(a.data.key)] = o);
        }
        return {
          sourceAssetKeyToDestinationKey: t,
          sourceAssetKeyToFileName: r,
          destinationStyleKeyToLegacySourceStyle: n
        };
      }(t);
      e(KQ(sourceAssetKeyToDestinationKey));
      e(UA(sourceAssetKeyToFileName));
      e(Ty(destinationStyleKeyToLegacySourceStyle));
    }, [e, t]);
    useEffect(() => {
      let t = Object.create(null);
      let i = Object.create(null);
      for (let {
        movedAssetData
      } of Object.values(localUnpublishedStyles)) {
        if (!movedAssetData) continue;
        let r = unpublishedLocalStyleKeyToNodeIds[movedAssetData.sourceKey];
        r && (t[r] = movedAssetData.destinationKey, movedAssetData.destinationFileName && (i[r] = movedAssetData.destinationFileName));
      }
      e(WE(t));
      e(U$(i));
    }, [e, usedLocalStyles, localUnpublishedStyles, unpublishedLocalStyleKeyToNodeIds]);
  })();
  return null;
}
let dL = memoizeWithDeepEquality(({
  allStyles: e,
  publishedStyleNodeIds: t,
  sceneGraph: r
}) => e.reduce((e, n) => {
  if (t.has(n)) return e;
  let i = r.get(n)?.styleKeyForPublish ?? null;
  i && (e[i] = n);
  return e;
}, Object.create(null)));
let dP = atom(new Set());
let dD = atom(e => {
  if (!e(JB)) return {};
  let t = e(openFileKeyAtom);
  let r = Array.from(e(dP)).map(e => ({
    key: e,
    openFileKey: t
  }));
  let n = handleResourceQuery(styleByKeyQuery, r, e);
  return n.data ? dO(n.data) : {};
});
let dj = atom(e => {
  let t = [];
  for (let r of Object.values(fh)) {
    let n = e(r.subscribed);
    t.push(...Object.values(n));
  }
  return t;
});
let dU = mg(dj, e => new Set(e.map(e => e.sourceLibraryKey)), yZ);
function dB({
  children: e,
  maxSubscriptionsBeforeCleanup: t
}) {
  !function () {
    let e = useDispatch();
    let t = useCurrentFileKey();
    let r = useSubscription(LegacySourceStyleData, {
      fileKey: t ?? ''
    }, {
      enabled: !!t
    });
    useLayoutEffect(() => {
      if (r.status !== 'loaded') return;
      let t = r.data.file?.stylesWithLegacySourceAssets;
      if (!t) return;
      let n = Object.create(null);
      for (let e of t) e.legacySourceAsset && (n[_$$n3(e.legacySourceAsset.key)] = _$$n3(e.key));
      e(_$$Cp(n));
    }, [e, r]);
  }();
  return jsxs(dG, {
    maxSubscriptionsBeforeCleanup: t,
    children: [jsx(dH, {}), jsx(dR, {}), e]
  });
}
function dG({
  children: e,
  maxSubscriptionsBeforeCleanup: t
}) {
  let r = selectCurrentFile()?.canEdit;
  !function () {
    let e = useRef(new Set());
    let t = useDispatch();
    let r = useAtomWithSubscription(dU);
    let n = _$$ud();
    let i = useMemoStable(() => {
      let e = {};
      for (let t of Object.values(n)) {
        let r = t?.library_key;
        r && (e[_$$l(r)] = t.key);
      }
      return e;
    }, [n]);
    let a = Array.from(r).filter(t => !i[t] && !e.current.has(t));
    if (a.length > 0) {
      for (let r of (f2(a, t), a)) e.current.add(r);
    }
  }();
  return jsxs(_$$zN2, {
    children: [r && jsx(dV, {}), jsx(fN, {
      maxSubscriptionsBeforeCleanup: t,
      children: jsx(dE, {
        children: e
      })
    })]
  });
}
function dV() {
  je();
  return null;
}
function dH() {
  !function () {
    let e = useDispatch();
    let t = getCurrentFileType();
    let r = useSelector(e => e.library.publishProgress);
    let [n, i] = useState(0);
    let [a, s] = useState(void 0);
    let [o, l] = useState(null);
    let d = useRef(200);
    let c = useMemo(() => r.state === LibraryPublishStatusEnum.UPLOADING ? r.libraryPublishId : null, [r]);
    o !== c && (l(c), i(0), s(void 0));
    let u = useSubscription(LibraryPublish, {
      id: c || ''
    }, {
      enabled: !!c
    });
    let p = useMemo(() => {
      if (u.status !== 'loaded') return u;
      let {
        libraryPublishV2
      } = u.data;
      return libraryPublishV2 ? gB({
        libraryPublishV2: {
          ...libraryPublishV2,
          assetSuccessCount: parseInt(libraryPublishV2.assetSuccessCount ?? '0', 10),
          assetFailureCount: parseInt(libraryPublishV2.assetFailureCount ?? '0', 10),
          assetPendingCount: parseInt(libraryPublishV2.assetPendingCount ?? '0', 10)
        }
      }) : gB({
        libraryPublishV2: null
      });
    }, [u]);
    let _ = useCurrentFileKey();
    useEffect(() => {
      e(TS());
    }, [e, _]);
    let h = useMemo(() => 'publishStartMs' in r ? r.publishStartMs : null, [r]);
    let m = useRef(null);
    useEffect(() => {
      if (!h) return;
      let e = new TaskController({
        priority: 'user-blocking'
      });
      let t = () => {
        let e = Math.floor((performance.now() - h) / 36e5);
        e !== m.current && (m.current = e, sendHistogram('publish.periodic_progress.hours', e));
      };
      let r = Symbol('__PUBLISH_COMPLETE__');
      let n = () => {
        scheduler.postTask(() => {
          t();
          n();
        }, {
          delay: 36e5,
          signal: e.signal
        }).catch(e => {
          if (e !== r) throw e;
        });
      };
      n();
      return () => {
        t();
        m.current = null;
        e.abort(r);
      };
    }, [h]);
    useEffect(() => {
      if (r.state !== LibraryPublishStatusEnum.UPLOADING || p.status === 'loading' || p.status === 'disabled' || !c || p.status === 'errors') return;
      let e = p.data.libraryPublishV2;
      if (!e || e.error) return;
      let t = setInterval(() => {
        i(t => {
          if (e.count < 0) return 0;
          let r = e.assetSuccessCount + e.assetFailureCount;
          let n = t + 1;
          let i = Math.min((n + 1) / (r + 1), 1);
          d.current = 200 * i;
          return Math.max(0, Math.min(n, Math.min(r + 200, e.count) - 1));
        });
      }, d.current);
      return () => {
        clearInterval(t);
      };
    }, [c, r.state, p]);
    useEffect(() => {
      if (r.state !== LibraryPublishStatusEnum.UPLOADING || p.status === 'loading' || p.status === 'disabled') return;
      if (!c) {
        console.error('Expected libraryPublishId to be set during server-side publish');
        return;
      }
      let {
        onPublishSuccess,
        onPublishError,
        onPublishProgress
      } = _$$u5(t);
      let d = t => {
        _$$dh(r, t ?? {
          __tag: 'UNKNOWN'
        }, r.publishType === PublishStatusEnum.UNPUBLISH, e, r.savepoint, !0, onPublishSuccess, onPublishError);
      };
      if (p.status === 'errors') {
        d();
        onPublishError({
          error: jO.ErrorReason,
          publishType: r.publishType,
          dispatch: e,
          errorReason: getI18nString('design_systems.publish_actions.reload')
        });
        return;
      }
      let u = p.data.libraryPublishV2;
      if (!u) {
        console.error('Error fetching library publish data from LG', p.errors);
        d();
        onPublishError({
          error: jO.ErrorReason,
          publishType: r.publishType,
          dispatch: e,
          errorReason: getI18nString('design_systems.publish_actions.reload')
        });
        return;
      }
      if (u.error) {
        u.error;
        let t = getI18nString('design_systems.publish_actions.reload');
        d(u.assetFailureCount);
        onPublishError({
          error: jO.ErrorReason,
          publishType: r.publishType,
          dispatch: e,
          errorReason: t
        });
        return;
      }
      let _ = u.count < 0;
      if (_ || (s(t => (t || onPublishProgress({
        publishType: r.publishType,
        dispatch: e,
        icon: VisualBellIcon.PROGRESS,
        progressKey: 'library-publish'
      }), u.count)), e(_$$h8({
        key: 'library-publish',
        progress: n,
        total: a || 0
      }))), _ || u.count !== u.assetFailureCount + u.assetSuccessCount) {
        return;
      }
      if (u.firstAssetError) {
        d(u.assetFailureCount);
        let t = (() => {
          switch (u.firstAssetError) {
            case 'design_systems.publish_actions.reload':
            default:
              return getI18nString('design_systems.publish_actions.reload');
            case 'design_systems.publish_actions.payload_too_large':
              return getI18nString('design_systems.publish_actions.payload_too_large');
            case 'design_systems.publish_actions.validations_failed':
              return getI18nString('design_systems.publish_actions.validations_failed');
          }
        })();
        onPublishError({
          error: jO.ErrorReason,
          publishType: r.publishType,
          dispatch: e,
          errorReason: t
        });
        return;
      }
      let h = r.numSkippedPriorToPublish + u.assetFailureCount;
      _$$dh(r, h, r.publishType === PublishStatusEnum.UNPUBLISH, e, r.savepoint, !1, onPublishSuccess, onPublishError);
    }, [e, c, r, p, n, a, t]);
  }();
  return null;
}
let d$ = {
  fileDrawerWidth: 'var(--xvkstzz)',
  fileDrawerAppBorderRadius: 'var(--x1ncduiq)'
};
let dX = {
  container: {
    position: 'xixxii4',
    width: 'xax647b',
    backgroundColor: 'xei258h',
    height: 'x5yr21d',
    zIndex: 'x1up6g3',
    $$css: !0
  },
  containerCovered: {
    zIndex: 'xl4d90n',
    $$css: !0
  },
  closeButton: {
    position: 'x10l6tqk',
    right: 'x1f6937p',
    insetInlineStart: null,
    insetInlineEnd: null,
    top: 'xcli33n',
    $$css: !0
  },
  background: {
    position: 'xixxii4',
    backgroundColor: 'xei258h',
    height: 'x5yr21d',
    width: 'xax647b',
    paddingRight: 'x1nx2rwh',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    zIndex: 'x1ja2u2z',
    $$css: !0
  }
};
function dJ() {
  let e = getFullscreenFileKey();
  let [t] = _$$IT(OpenEditorFileData({
    fileKey: e
  }), {
    enabled: !!e
  });
  let r = t.unwrapOr(void 0)?.file?.folderId;
  let n = useDeferredValue(r);
  handleResourceAtomMetrics(t, n ? 'passthrough' : 'suspend');
  return n;
}
function d1({
  onRetry: e
}) {
  let t = Hb();
  return jsx('div', {
    className: 'x1mg88bx x1gcgh60 x1jwbysl',
    children: jsxs(BannerInline, {
      variant: 'warn',
      children: [jsx(BannerMessage, {
        children: getI18nString('general.root_error_boundary_title')
      }), jsx(BannerMessage, {
        children: t.error?.message
      }), e && jsx(BannerButton, {
        onClick: e,
        children: getI18nString('auth.try_again')
      })]
    })
  });
}
let d9 = new _$$b({
  name: 'File Browser UI',
  dependencies: [],
  exports: {
    './views': './views.tsx'
  },
  exceptions: [],
  friendFiles: ['js/browse/file_browser/**/*', 'js/browse/admin_settings/**/*', 'js/litmus/internal/**/*', 'js/figma_app/views/community_hub/resource_hub/**/*'],
  eslint: {}
}).createLazyComponent(async () => {
  let {
    SidebarRow
  } = await _require;
  return SidebarRow;
}, {
  loading: NONE_SYMBOL.NONE,
  error: NONE_SYMBOL.NONE,
  componentName: 'SidebarRow'
});
let ct = {
  fileRowContainer: {
    'position': 'x1n2onr6',
    '--thumbnail-display': 'xaud4p3',
    '--thumbnail-opacity': 'x1bt78sr',
    ':hover_--thumbnail-display': 'xn5uhsl',
    ':hover_--thumbnail-opacity': 'x1xf5jto',
    '$$css': !0
  },
  emojiIcon: {
    fontSize: 'xfifm61',
    flexBasis: 'xf40zah',
    $$css: !0
  },
  fileRowText: {
    color: 'x1akne3o',
    maxWidth: 'x193iq5w',
    whiteSpace: 'xuxw1ft',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    textOverflow: 'xlyipyv',
    $$css: !0
  },
  fileThumbnail: {
    left: 'x15qzkjw',
    insetInlineStart: null,
    insetInlineEnd: null,
    width: 'xax647b',
    position: 'x10l6tqk',
    top: 'x13vifvy',
    display: 'x1rd6929',
    opacity: 'x101ute8',
    transition: 'xp79ov3',
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    pointerEvents: 'x47corl',
    $$css: !0
  }
};
let cr = memo(({
  tile: e,
  isSelected: t,
  onContextMenu: r
}) => {
  let n = NN();
  let i = e.file.name;
  let a = AE(i);
  let s = n(e.file);
  let o = a ? jsx('div', {
    ..._$$Ay3.props(ct.emojiIcon),
    children: a
  }) : jsx(w4, {
    size: 16,
    type: s
  });
  let d = _$$v4();
  let c = a ? Nn(i, a) : i;
  let u = useCallback(t => {
    d(e, t);
  }, [d, e]);
  let p = useSubscription(FileThumbnail({
    fileKey: e.file.key
  })).unwrapOr(void 0)?.file;
  return jsxs('div', {
    ..._$$Ay3.props(ct.fileRowContainer),
    children: [jsx(d9, {
      isSelected: t,
      onContextMenu: r,
      onClick: u,
      icon: o,
      text: jsx('span', {
        ..._$$Ay3.props(ct.fileRowText),
        children: c
      }),
      wrapInListItem: !1
    }, e.file.key), p && !t && jsx('div', {
      ..._$$Ay3.props(ct.fileThumbnail),
      children: jsx(NM, {
        borderRadius: 6,
        file: p
      })
    })]
  });
});
let cn = {
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
function ci({
  tiles: e
}) {
  let {
    showing,
    data,
    show
  } = _$$L3();
  let i = data?.tile ?? null;
  let a = getFullscreenFileKey();
  let s = _$$v4();
  let o = useCallback(e => {
    i && s(i, e);
  }, [i, s]);
  let d = useDispatch();
  return jsxs(Fragment, {
    children: [e.map(e => jsx(cr, {
      tile: e,
      isSelected: e.file.key === a,
      onContextMenu: t => {
        t.preventDefault();
        d(_$$an());
        d(y$({
          type: e.type === _$$nb.PINNED_FILE ? _$$F6.PINNED_FILES : _$$F6.FILES,
          tiles: [e]
        }));
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
            index: 0
          }
        });
      }
    }, e.file.key)), i && jsx(_$$i3, {
      selectedTiles: [i],
      openTile: o,
      tile: i,
      tileActions: cn,
      dropdownVisible: showing
    })]
  });
}
function ca() {
  return jsx('div', {
    className: 'xf7z5ut x78zum5 xdt5ytf xg2d0mh',
    children: Array.from({
      length: 9
    }).map((e, t) => createElement('div', {
      className: 'xxk0z11 x12lumcd xh8yej3',
      key: t,
      style: {
        opacity: 1 - 0.1 * t
      }
    }, jsx(_$$cQ, {})))
  });
}
function cs() {
  return getFullscreenFileKey() ? jsx(_$$tH, {
    boundaryKey: 'file-list-other-files',
    fallback: e => jsx(d1, {
      onRetry: e
    }),
    children: jsx(Suspense, {
      fallback: jsx(ca, {}),
      children: jsx(co, {})
    })
  }) : jsx(ca, {});
}
function co() {
  let e = dJ();
  assert(!!e, 'Folder id is undefined');
  let t = LK(e);
  let [r] = handleSuspenseRetainRelease(t);
  let n = r.unwrapOr(void 0)?.files;
  assert(!!n, 'Files is undefined');
  assert(n.length > 0, 'No files in folder');
  let [i] = setupResourceAtomHandler(PinnedFiles({
    folderId: e
  }));
  handleSuspenseRetainRelease(i);
  let a = i.unwrapOr(void 0)?.project?.pinnedFiles;
  let s = useMemo(() => n.filter(e => !a || !a.some(t => t.file?.key === e.key)).map(e => fA(e)).sort((e, t) => {
    let r = Tf.getTouchedAt(e);
    let n = Tf.getTouchedAt(t);
    return r === null || n === null ? 0 : r > n ? -1 : 1;
  }).slice(0, 50), [n, a]);
  return jsx(ci, {
    tiles: s
  });
}
function cd() {
  return jsx('div', {
    className: 'xh8yej3 xjm9jq1 xbpqucl xehsoiq x12sbs06'
  });
}
function cc() {
  return getFullscreenFileKey() ? jsx(_$$tH, {
    boundaryKey: 'file-list-pinned-files',
    fallback: e => jsx(d1, {
      onRetry: e
    }),
    children: jsx(Suspense, {
      children: jsx(cu, {})
    })
  }) : null;
}
function cu() {
  let e = dJ();
  assert(!!e, 'Folder id is undefined');
  let [t] = setupResourceAtomHandler(PinnedFiles({
    folderId: e
  }));
  let [r] = handleSuspenseRetainRelease(t);
  let n = r.unwrapOr(void 0)?.project?.pinnedFiles;
  assert(!!n, 'Pinned Files is undefined');
  let i = useMemo(() => n.filter(e => !!e.file).map(e => ({
    type: _$$nb.PINNED_FILE,
    file: e.file
  })), [n]);
  let a = useDispatch();
  return (useEffect(() => {
    a(MR({
      folderId: e,
      fileKeys: i.map(e => e.file.key)
    }));
  }, [a, e, i]), i.length === 0) ? null : jsxs(Fragment, {
    children: [jsx(ci, {
      tiles: i
    }), jsx(cd, {})]
  });
}
let ch = {
  header: {
    paddingTop: 'x1w4f5ud',
    paddingLeft: 'x1gcgh60',
    paddingRight: 'x1jwbysl',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    display: 'x78zum5',
    flexDirection: 'xdt5ytf',
    minHeight: 'xcr9lap',
    $$css: !0
  },
  folderButton: {
    marginLeft: 'xmvh4l2',
    marginInlineStart: null,
    marginInlineEnd: null,
    marginTop: 'x1rdy4ex',
    marginBottom: 'xzueoph',
    $$css: !0
  },
  folderDescription: {
    color: 'x1n0bwc9',
    marginBottom: 'x12sbs06',
    $$css: !0
  },
  folderName: {
    fontSize: 'xemv814',
    fontWeight: 'x1ma9mv9',
    $$css: !0
  },
  loadingContainer: {
    marginTop: 'x15r87gk',
    height: 'x1w7y96w',
    $$css: !0
  }
};
function cm() {
  return getFullscreenFileKey() ? jsx(_$$tH, {
    boundaryKey: 'file-drawer-header',
    fallback: e => jsx(d1, {
      onRetry: e
    }),
    children: jsx(Suspense, {
      fallback: jsx(cf, {}),
      children: jsx(cg, {})
    })
  }) : jsx(cf, {});
}
function cg() {
  let e = dJ();
  assert(!!e, 'Folder id is undefined');
  let [t] = setupResourceAtomHandler(FolderPageView({
    projectId: e
  }));
  let [r] = handleSuspenseRetainRelease(t);
  let n = r.unwrapOr(void 0)?.project;
  let i = useDispatch();
  assert(!!n, 'Project is null');
  return jsxs(Fragment, {
    children: [jsxs('div', {
      ...xk(ch.header),
      children: [jsx('span', {
        ...xk(ch.folderButton),
        children: jsx(ButtonLarge, {
          variant: 'ghost',
          iconPrefix: jsx(_$$e1, {}),
          onClick: () => {
            i(_$$eH());
          },
          children: jsx('h2', {
            ...xk(ch.folderName),
            children: n.name ? n.name : getI18nString('fullscreen.filename_view.drafts')
          })
        })
      }), n.description && jsx('p', {
        ...xk(ch.folderDescription),
        children: n.description
      }), jsx(Lo, {
        lgFolder: n,
        newFileFrom: f6.FULLSCREEN_FILE_DRAWER
      })]
    }), jsx(cd, {})]
  });
}
function cf() {
  return jsxs(Fragment, {
    children: [jsx('div', {
      ...xk(ch.header),
      children: jsx('div', {
        ...xk(ch.loadingContainer),
        children: jsx(_$$cQ, {})
      })
    }), jsx(cd, {})]
  });
}
function cE() {
  let e = useAtomWithSubscription(V1);
  let t = useDeferredValue(e);
  let r = _$$o(_$$nt.interopFiles);
  let n = Xr(V1);
  let i = useAtomWithSubscription(XU);
  return r ? jsxs(setupThemeContext, {
    mode: 'dark',
    children: [jsx(_$$N7, {
      children: t && jsxs(_$$P.div, {
        'initial': {
          opacity: 0
        },
        'animate': {
          opacity: 1
        },
        'exit': {
          opacity: 0
        },
        'transition': {
          duration: 0.3
        },
        'data-testid': 'file-drawer-container',
        ..._$$Ay3.props(dX.container, (i || !t) && dX.containerCovered),
        'children': [jsx('div', {
          ..._$$Ay3.props(dX.closeButton),
          children: jsx(IconButton, {
            'recordingKey': 'file-drawer-close',
            'aria-label': getI18nString('general.close'),
            'onClick': () => n(!1),
            'children': jsx(_$$A9, {})
          })
        }), jsx(cm, {}), jsx(cc, {}), jsx(cs, {})]
      })
    }), jsx('div', {
      ..._$$Ay3.props(dX.background)
    })]
  }) : null;
}
function cX() {
  let e = useDispatch();
  let t = !selectCurrentUser();
  let r = _$$e11();
  let n = useCanUseDevModeDemoFile();
  let i = useIsLoggedOutDevModeDemoFile();
  let a = useSelector(e => e.selectedView);
  let s = getEditorTypeOrNull();
  let o = s === FEditorType.Design;
  let l = s === FEditorType.DevHandoff;
  let d = s === FEditorType.Illustration;
  useEffect(() => {
    r === _$$n5.NO_ACCESS && (DrawBindingsCpp.setCanAccessDrawMode(!1), DrawBindingsCpp.setCanEnterDrawMode(!1));
  }, [r]);
  useEffect(() => {
    !t || o || i || e(selectViewAction({
      ...a,
      view: 'fullscreen',
      editorType: FEditorType.Design
    }));
  }, [t, o, e, a, i]);
  useEffect(() => {
    r === _$$n5.NO_ACCESS && d && e(selectViewAction({
      ...a,
      view: 'fullscreen',
      editorType: FEditorType.Design
    }));
  }, [r, d, e, a]);
  useEffect(() => {
    (n || i) && !l && e(selectViewAction({
      ...a,
      view: 'fullscreen',
      editorType: FEditorType.DevHandoff
    }));
  }, [n, l, e, a, i]);
}
let c0 = atom(new Set());
let c1 = 'true';
function c2() {
  let e = useDispatch();
  let t = selectCurrentFile();
  let r = useCurrentFileKey();
  let n = selectCurrentUser();
  let i = function () {
    let e = selectCurrentFile();
    let t = _$$J6();
    let r = useCurrentFileKey();
    let n = selectCurrentUser();
    let {
      userLacksLicenseAccess
    } = KI({
      fileKey: r,
      userId: n?.id ?? null,
      enabled: !0
    });
    let a = userLacksLicenseAccess(FFileType.DESIGN);
    return t && !0 === a && e?.canAccessFullDevMode && e?.canEdit === !1;
  }();
  let a = useAtomWithSubscription(_$$FP);
  let s = isDesignFileType();
  let o = isDevHandoffEditorType();
  let l = isIllustrationEditorType();
  let d = useSelector(e => e.selectedView);
  let [, c] = useAtomValueAndSetter(c0);
  let u = !!t && !!r;
  let _ = u && !!n && n.id !== t.creatorId;
  let h = u && t.canView && !t.canEdit;
  let m = 'prevSelectedView' in (customHistory.location.state ?? {});
  let g = useRef(void 0);
  d.view === 'fullscreen' && void 0 !== d.commentThreadId && void 0 === g.current && (g.current = d.commentThreadId);
  let f = getSessionStorage();
  let y = `hasSeenOrAttemptedDevMode-${r}`;
  let b = !1;
  if (u && f) {
    try {
      o ? f.setItem(y, c1) : b = f.getItem(y) !== c1;
    } catch (t) {
      let e = 'Unknown error';
      t instanceof Error && (e = t.message);
      reportError(_$$e.ACTIVATION, new Error(`[Dev Mode Link Defaulting] Error checking session storage: ${e}`));
    }
  }
  let I = d.view === 'fullscreen' && !o && (s || l) && !m && !hasDesktopAPI() && h && _ && !a && b && i;
  useEffect(() => {
    I && queueMicrotask(() => {
      e(selectViewAction({
        ...d,
        commentThreadId: g.current,
        view: 'fullscreen',
        editorType: FEditorType.DevHandoff
      }));
      analyticsEventManager.trackDefinedEvent('activation.users_defaulted_to_dev_mode', {
        userId: n.id,
        fileKey: r
      });
      c(e => {
        let t = new Set(e);
        t.add(r);
        return t;
      });
      f?.setItem(y, c1);
    });
  }, [I, e, d, r, f, c, n?.id, y]);
}
let c6 = _$$ex('dev_mode_toggle_disabled_tracked_tooltip', () => {
  let e = trackFileEventWithStore();
  let t = selectCurrentUser();
  let r = useCurrentPlanUser('ModeSwitcherTrackedTooltip').unwrapOr(null);
  let n = r?.planKey.type === FOrganizationLevelType.TEAM;
  let i = selectCurrentFile();
  let a = t?.external_restricted_org_id ? getI18nString('dev_handoff.paywall.external_content_control_hint') : i?.parentOrgId ? getI18nString('dev_handoff.paywall.org_not_member_hint') : n ? void 0 : getI18nString('dev_handoff.paywall.team_not_member_hint');
  let s = t?.external_restricted_org_id ? 'ecc' : i?.parentOrgId ? 'not_member_org' : n ? void 0 : 'not_member_pro_team';
  _$$h9(() => {
    e('Dev Mode Disabled Tooltip Viewed', {
      reason: s
    });
  });
  return jsx('div', {
    className: _$$s3.cursorDefault.colorTextTooltip.$,
    style: {
      textAlign: 'center',
      maxWidth: 180
    },
    children: jsx('span', {
      children: a
    })
  });
}, () => ({
  unconstrainWidth: !0
}));
let c7 = _$$ex('devmode_toggle_disabled_personal_draft', ({
  isCurrentUserFileOwner: e
}) => {
  let t = trackFileEventWithStore();
  return (_$$h9(() => {
    t('Dev Mode Disabled Tooltip Viewed', {
      reason: e ? 'personal_draft_owner' : 'personal_draft'
    });
  }), e) ? jsxs('div', {
    className: _$$s3.cursorDefault.colorTextTooltip.$,
    children: [jsx('span', {
      children: renderI18nText('dev_handoff.paywall.toggle_disabled_for_personal_drafts')
    }), jsx('div', {
      className: _$$s3.bl1.hFull.inline.bSolid.colorBorderMenu.ml8.mr8.$
    }), jsx('a', {
      href: '/files/drafts-to-move',
      className: _$$s3.cursorPointer.noUnderline.fontBold.colorTextTooltip.$,
      children: renderI18nText('dev_handoff.paywall.toggle_disabled_go_to_drafts_to_move')
    })]
  }) : jsxs('div', {
    className: _$$s3.cursorDefault.colorTextTooltip.flex.flexColumn.gap4.$,
    style: {
      width: 'min-content'
    },
    children: [jsx('div', {
      className: _$$s3.noWrap.$,
      children: renderI18nText('dev_handoff.paywall.toggle_disabled_viewer_title')
    }), jsx('div', {
      className: _$$s3.colorTextTooltipSecondary.$,
      children: renderI18nText('dev_handoff.paywall.toggle_disabled_viewer_details')
    })]
  });
}, e => {
  let t = e.getAttribute('data-tooltip-is-current-user-file-owner');
  return {
    isCurrentUserFileOwner: !!t && JSON.parse(t),
    unconstrainWidth: !0
  };
});
let c9 = 'mode_switcher_toggle--toggleWrapper--kHykz';
function ue({
  disabled: e,
  isDevHandoff: t,
  tooltip: r,
  tooltipType: n,
  onClick_UI3_DO_NOT_REUSE: i
}) {
  let a = selectCurrentUser();
  let s = selectCurrentFile();
  let {
    onModeSwitch,
    newModeWhenLoaded,
    isDesignViewLoaded,
    isDevHandoffViewLoaded
  } = _$$eJ();
  let p = useHandleMouseEvent(generateRecordingKey('designToolbelt', 'toggleDevMode'), 'click', () => {
    i?.();
    e || onModeSwitch(t ? 'design' : 'handoff');
  });
  let _ = !!s && a?.id === s.creatorId;
  let h = r ?? (t ? getI18nString('dev_handoff.inspect_mode.leave_dev_mode') : getI18nString('general.dev_mode'));
  let m = {
    'data-tooltip-type': n ?? KindEnum.TEXT,
    'data-tooltip': h,
    'data-tooltip-shortcut-key': r ? void 0 : t ? 'enter-design-mode' : 'enter-inspect-mode',
    'data-tooltip-interactive': n === KindEnum.SPECIAL,
    'data-tooltip-is-current-user-file-owner': JSON.stringify(_),
    'data-onboarding-key': _$$oR,
    'data-tooltip-offset-y': -4
  };
  let g = n === KindEnum.SPECIAL ? getI18nString('general.dev_mode') : h;
  return (newModeWhenLoaded !== 'design' || isDesignViewLoaded) && (newModeWhenLoaded !== 'handoff' || isDevHandoffViewLoaded) ? jsx('div', {
    ...m,
    'data-tooltip-show-above': !0,
    'className': c9,
    'children': jsx(_$$k5, {
      'aria-label': g,
      'checked': t,
      'onClick': p,
      'icon': jsx(_$$l7, {}),
      'disabled': e,
      'recordingKey': 'toolbarView.switchToDevModeButton'
    })
  }) : jsx('div', {
    ...m,
    'data-tooltip-show-above': !0,
    'className': c9,
    'children': jsx(_$$k4, {})
  });
}
function ut({
  onClick_UI3_DO_NOT_REUSE: e
}) {
  let t = isDevHandoffEditorType();
  let r = useCurrentFileKey();
  let n = selectCurrentFile();
  let i = useCanAccessDevModeEntryPoint();
  let a = useCanAccessFullDevMode();
  let s = useCanUseDevModeDemoFile();
  let o = selectCurrentUser();
  let d = !!useDevModeFocusId() && a;
  !function () {
    let e = useDispatch();
    let t = useCurrentFileKey();
    let r = useCanUseDevModeDemoFile();
    let n = getFilteredFeatureFlags().ce_il_root;
    let i = getEditorTypeOrNull();
    let a = useRef(i);
    let s = i === FEditorType.DevHandoff;
    let o = i === FEditorType.Illustration;
    let [l, d] = useAtomValueAndSetter(c0);
    useEffect(() => {
      if (a.current !== i && t) {
        let i;
        let a;
        let c;
        n ? (i = s ? getI18nString('fullscreen.toolbar.toolbelt_mode_segmented_control.switched_to_dev_mode') : o ? getI18nString('fullscreen.toolbar.toolbelt_mode_segmented_control.switched_to_draw') : getI18nString('fullscreen.toolbar.toolbelt_mode_segmented_control.switched_to_design'), a = s ? 'dev-mode' : o ? 'draw-mode' : 'design-mode', c = 3e3) : (i = s ? getI18nString('dev_handoff.inspect_mode.switched_to_inspect') : getI18nString('dev_handoff.inspect_mode.switched_to_design'), a = s ? 'dev-mode' : 'design-mode', c = 1200);
        l.has(t) || r ? (l.$$delete(t), d(new Set(l))) : (e(VisualBellActions.dequeue({
          matchType: 'switched_editor_mode'
        })), e(VisualBellActions.enqueue({
          type: 'switched_editor_mode',
          message: i,
          delay: 200,
          timeoutOverride: c
        })), e(VisualBellActions.enqueue({
          type: `${xM}-switched-to-${a}`,
          message: i,
          role: 'status',
          delay: 200
        })));
      }
      a.current = i;
    }, [i, n, s, o, t, r, e, l, d]);
  }();
  cX();
  c2();
  let c = (t ? 'handoff' : 'design') == 'handoff';
  let u = isUserNotLoggedInAndEditorSupported();
  if (!u && (!o || d)) return null;
  let p = !u && !c && !i && !isInteractionPathCheck();
  let _ = c && s;
  let h = !!n && !n.parentOrgId && !n.teamId;
  return jsx(ue, {
    onClick_UI3_DO_NOT_REUSE: e,
    disabled: !r || p || _,
    tooltip: p ? h ? c7 : c6 : s ? getI18nString('dev_handoff.paywall.design_mode_disabled') : void 0,
    tooltipType: p ? KindEnum.SPECIAL : KindEnum.TEXT,
    isDevHandoff: c
  });
}
function un() {
  return jsx('div', {
    className: 'mode_toggle_switch_divider--hideIfLast--4VYfW',
    children: jsx(_$$X4, {
      'data-testid': 'mode-toggle-switch-divider'
    })
  });
}
function ui({
  setDelayViewOnlyBanner: e
}) {
  let t = WN();
  let r = isUserNotLoggedInAndEditorSupported();
  return jsxs(Fragment, {
    children: [jsx(un, {}), jsx(ut, {
      onClick_UI3_DO_NOT_REUSE: r ? () => t(Command.SET_TOOL_DEFAULT_DEV_HANDOFF) : () => e(!0)
    })]
  });
}
function ud(e) {
  let {
    topLevelMode,
    activateTool,
    showDisabledTools,
    textureModeAccess
  } = e;
  let a = isUserNotLoggedInAndEditorSupported();
  let s = WN();
  let o = isDevHandoffEditorType();
  let d = getFilteredFeatureFlags().ce_il_root && textureModeAccess === _$$n5.HAS_ACCESS;
  let c = useMemo(() => d ? ['handoff', 'design', 'illustration'] : ['design', 'handoff'], [d]);
  let u = _$$ub2();
  let p = c.findIndex(e => e === u);
  let _ = o ? ViewType.LAYOUT : topLevelMode;
  let h = useMemo(() => c.map(e => {
    let t = e === 'design' || e === 'illustration';
    return jsx(_$$R4, {
      toolbeltMode: e,
      topLevelMode: t ? _ : ViewType.DEV_HANDOFF,
      activateTool: t && a ? s : activateTool,
      suppressRecordingKeys: e !== u,
      showDisabledTools: t ? showDisabledTools : void 0
    }, e);
  }), [_, a, s, activateTool, u, c, showDisabledTools]);
  let m = useCallback(() => {
    handleAtomEvent({
      id: wX(o ? 'dev' : u === 'illustration' ? 'illustration' : 'design')
    });
  }, [o, u]);
  _$$h9(() => {
    m();
  });
  return jsx(Q6, {
    rows: h,
    activeRowIndex: p,
    onAnimationCompletion: () => {
      globalPerfTimer.tryStop('switch_to_illustration_mode.toolbelt_animation');
      globalPerfTimer.tryStop('switch_to_design_mode.toolbelt_animation');
      m();
    }
  });
}
let uc = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M13.407 5.06c.61-.123 1.227-.079 1.658.342l.134.15c.277.362.316.79.208 1.205-.114.44-.397.887-.734 1.314-.679.86-1.74 1.828-2.748 2.76-1.031.951-2.01 1.866-2.606 2.662-.3.4-.466.724-.517.969-.044.21-.003.34.12.46l.065.053c.073.043.167.061.313.039.217-.034.505-.156.866-.378.72-.445 1.561-1.183 2.445-1.966.862-.763 1.768-1.571 2.57-2.076.4-.252.817-.457 1.221-.528.427-.073.87.002 1.223.347l.102.112c.22.271.297.593.266.917-.032.345-.183.684-.364.993-.363.618-.963 1.297-1.515 1.922-.574.652-1.1 1.252-1.403 1.768-.151.257-.218.449-.23.581-.01.105.012.163.072.22l.054.04c.074.038.214.062.474-.031.356-.128.853-.456 1.465-1.101a.5.5 0 0 1 .726.688c-.666.702-1.292 1.152-1.854 1.354-.535.192-1.08.173-1.485-.163l-.08-.071a1.23 1.23 0 0 1-.369-1.03c.033-.344.183-.684.365-.993.362-.617.964-1.297 1.515-1.923.574-.651 1.1-1.25 1.403-1.766.15-.258.219-.45.231-.581.007-.08-.004-.132-.035-.177l-.038-.045c-.07-.068-.162-.108-.353-.075-.213.037-.5.161-.858.388-.717.451-1.555 1.194-2.44 1.978-.862.764-1.773 1.57-2.584 2.07-.404.248-.826.45-1.237.514-.38.059-.767 0-1.095-.247l-.136-.118c-.402-.394-.502-.887-.399-1.38.097-.46.367-.924.697-1.363.662-.885 1.717-1.865 2.727-2.798C12.28 9.14 13.27 8.234 13.89 7.45c.31-.394.489-.71.55-.946.04-.152.029-.246-.017-.32l-.057-.069c-.082-.08-.284-.172-.76-.076-.467.094-1.091.352-1.863.803-1.537.898-3.552 2.495-5.892 4.786a.5.5 0 0 1-.7-.715c2.37-2.32 4.45-3.98 6.087-4.935.816-.477 1.55-.794 2.17-.92'
    })
  });
});
let um = memo(e => {
  return jsx('svg', {
    width: '16',
    height: '16',
    fill: 'none',
    viewBox: '0 0 16 16',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M9.073 2.053c.519-.105 1.07-.072 1.457.307l.12.136c.248.324.282.71.187 1.074-.1.384-.343.768-.627 1.126-.57.723-1.46 1.535-2.298 2.309-.861.795-1.67 1.552-2.162 2.208-.247.33-.377.588-.417.774-.031.152-.002.23.077.307l.037.03c.041.026.1.04.207.024.164-.026.394-.12.691-.304.593-.366 1.288-.976 2.027-1.63.716-.634 1.476-1.313 2.15-1.738.337-.212.697-.39 1.05-.451.375-.065.774.001 1.09.311l.093.102c.198.244.267.533.24.823-.03.304-.161.6-.315.862-.307.523-.814 1.096-1.272 1.615-.48.546-.912 1.039-1.16 1.46-.123.21-.172.357-.181.45-.006.065.006.088.036.117l.021.015c.038.021.131.044.332-.028.28-.1.684-.364 1.189-.896l.362.344.364.344c-.56.59-1.092.975-1.578 1.15-.463.166-.95.153-1.318-.15l-.071-.064a1.11 1.11 0 0 1-.332-.926c.028-.305.16-.6.314-.862.307-.523.814-1.095 1.272-1.615.48-.545.912-1.038 1.16-1.46.123-.21.173-.356.181-.449a.2.2 0 0 0-.004-.072l-.032-.045c-.034-.034-.082-.065-.221-.041-.162.028-.39.126-.686.312-.59.372-1.283.985-2.022 1.64-.717.635-1.482 1.313-2.164 1.733-.34.21-.704.384-1.063.44-.334.052-.68 0-.974-.22l-.123-.106c-.358-.35-.446-.793-.355-1.228.084-.4.318-.798.595-1.168.557-.744 1.443-1.567 2.283-2.342.863-.798 1.682-1.549 2.192-2.195.257-.325.397-.578.445-.759.028-.109.018-.164-.008-.205l-.032-.037c-.04-.038-.173-.12-.559-.042-.376.076-.887.286-1.526.66-1.273.743-2.947 2.069-4.895 3.975l-.079.063a.501.501 0 0 1-.62-.777l.73-.7C4.556 4.68 6.038 3.53 7.24 2.829c.683-.399 1.303-.67 1.833-.776m2.572 9.003a.5.5 0 0 1 .726.688z'
    })
  });
});
function uy(e) {
  let {
    activeMode,
    illustrationLoading
  } = e;
  let n = useIsCanvasEditDisabled();
  let {
    show,
    isShowing,
    complete,
    uniqueId
  } = _$$e8({
    overlay: Dkp,
    priority: _$$N5.DEFAULT_MODAL
  });
  _$$h9(() => {
    activeMode !== 'illustration' || illustrationLoading || show({
      canShow: () => (getFeatureFlags().ce_il_onboarding && !n) ?? !1
    });
  });
  _$$E7(uniqueId, 'ui3_finished_entering_illustration_mode', () => {
    show({
      canShow: () => getFeatureFlags().ce_il_onboarding ?? !1
    });
  });
  let d = {
    type: 'button',
    label: renderI18nText('draw.onboarding.dismiss_button'),
    onClick: complete,
    ctaTrackingDescriptor: UpgradeAction.GOT_IT
  };
  let c = {
    type: 'link',
    label: renderI18nText('draw.onboarding.first_time.learn_more'),
    href: 'https://help.figma.com/hc/articles/31440394517143',
    ctaTrackingDescriptor: UpgradeAction.LEARN_MORE
  };
  return jsx(_$$rq, {
    description: jsx('span', {
      children: renderI18nText('draw.onboarding.first_time.description', {
        icon: jsx('span', {
          className: 'x1rg5ohu x4vbgl9',
          children: jsx(um, {})
        }),
        featureNameBolded: jsx('span', {
          className: 'xkezfkh',
          children: renderI18nText('draw.onboarding.first_time.feature_name')
        })
      })
    }),
    disableHighlight: !0,
    isShowing,
    media: jsx(_$$y3, {
      src: buildUploadUrl('bb4a56b5776b80f89d3b94fe4d3066c3470213fe'),
      alt: '',
      aspectRatio: 1920 / 1080
    }),
    onClose: complete,
    primaryCta: d,
    secondaryCta: c,
    targetKey: _$$aQ,
    title: renderI18nText('draw.onboarding.first_time.title'),
    trackingContextName: 'draw_onboarding',
    userFlagOnShow: 'seen_draw_first_time_onboarding'
  });
}
let ub = userFlagExistsAtomFamily('seen_draw_first_time_onboarding');
function uT(e) {
  let {
    activeMode
  } = e;
  let r = useAtomWithSubscription(ub);
  let n = useIsCanvasEditDisabled();
  let {
    show,
    isShowing,
    complete
  } = _$$e8({
    overlay: evB,
    priority: _$$N5.DEFAULT_MODAL
  }, [r]);
  useEffect(() => {
    let e = getFeatureFlags().ce_il_onboard_nudge;
    !n && activeMode === 'design' && e && show({
      canShow: e => (getFeatureFlags().ce_il_onboarding ?? !1) && !e
    });
  }, [activeMode, show, n]);
  useEffect(() => {
    isShowing && activeMode !== 'design' && complete();
  }, [activeMode, complete, isShowing]);
  let o = {
    type: 'button',
    label: renderI18nText('draw.onboarding.dismiss_button'),
    onClick: complete,
    ctaTrackingDescriptor: UpgradeAction.GOT_IT
  };
  return jsx(_$$rq, {
    description: jsx('span', {
      children: renderI18nText('draw.onboarding.post_config_nudge.description', {
        icon: jsx('span', {
          style: {
            display: 'inline-block',
            marginBottom: '-4px'
          },
          children: jsx(um, {})
        })
      })
    }),
    disableHighlight: !0,
    isShowing,
    onClose: complete,
    primaryCta: o,
    targetKey: _$$aQ,
    title: renderI18nText('draw.onboarding.post_config_nudge.title'),
    trackingContextName: 'draw_onboarding',
    userFlagOnShow: 'seen_draw_post_config_nudge'
  });
}
function uv(e) {
  let {
    activeMode,
    prevActiveMode
  } = e;
  let n = useDispatch();
  let i = selectUserFlag('has_toggled_from_draw');
  let {
    show,
    isShowing,
    complete
  } = _$$e8({
    overlay: KP,
    priority: _$$N5.DEFAULT_MODAL
  });
  let [d, c] = useState(!1);
  useEffect(() => {
    if (activeMode === 'illustration') {
      let e = setTimeout(() => {
        c(!0);
      }, 12e5);
      return () => clearTimeout(e);
    }
    c(!1);
  }, [activeMode]);
  useEffect(() => {
    prevActiveMode === 'illustration' && activeMode !== 'illustration' && (c(!1), n(postUserFlag({
      has_toggled_from_draw: !0
    })));
  }, [activeMode, prevActiveMode, n]);
  useEffect(() => {
    getFeatureFlags().ce_il_onboard_back_to_design && !i && d ? show() : complete();
  }, [d, complete, show, i]);
  let u = {
    type: 'button',
    label: renderI18nText('draw.onboarding.dismiss_button'),
    onClick: complete,
    ctaTrackingDescriptor: UpgradeAction.GOT_IT
  };
  return jsx(_$$rq, {
    description: renderI18nText('draw.onboarding.back_to_design.description'),
    disableHighlight: !0,
    isShowing,
    onClose: complete,
    primaryCta: u,
    targetKey: Qj,
    title: renderI18nText('draw.onboarding.back_to_design.title'),
    trackingContextName: 'draw_onboarding',
    userFlagOnShow: 'seen_draw_back_to_design_nudge'
  });
}
function uA() {
  cX();
  c2();
  let {
    onModeSwitch,
    newModeWhenLoaded,
    isDesignViewLoaded,
    isDevHandoffViewLoaded,
    isIllustrationViewLoaded
  } = _$$eJ();
  let [a, s] = useState({
    illustration: !1,
    design: !1,
    handoff: !1
  });
  useEffect(() => {
    s(e => ({
      illustration: !isIllustrationViewLoaded && (newModeWhenLoaded === 'illustration' || e.illustration),
      design: !isDesignViewLoaded && (newModeWhenLoaded === 'design' || e.design),
      handoff: !isDevHandoffViewLoaded && (newModeWhenLoaded === 'handoff' || e.handoff)
    }));
  }, [isIllustrationViewLoaded, isDesignViewLoaded, isDevHandoffViewLoaded, newModeWhenLoaded]);
  let o = useMemo(() => [{
    mode: 'illustration',
    icon: a.illustration ? jsx(_$$k4, {}) : jsx(uc, {}),
    label: getI18nString('fullscreen.toolbar.toolbelt_mode_segmented_control.draw'),
    onboardingKey: _$$aQ
  }, {
    mode: 'design',
    icon: a.design ? jsx(_$$k4, {}) : jsx(_$$P3, {}),
    label: getI18nString('fullscreen.toolbar.toolbelt_mode_segmented_control.design'),
    onboardingKey: Qj
  }, {
    mode: 'handoff',
    icon: a.handoff ? jsx(_$$k4, {}) : jsx(_$$A0, {}),
    label: getI18nString('fullscreen.toolbar.toolbelt_mode_segmented_control.dev_mode'),
    onboardingKey: _$$wA
  }], [a]);
  let d = _$$ub2();
  let c = useRef(null);
  useEffect(() => {
    d !== c.current && c.current !== null ? c.current = d : c.current === null && (c.current = d);
  }, [d]);
  return jsxs(Fragment, {
    children: [jsx(un, {}), jsx(uy, {
      activeMode: d,
      illustrationLoading: a.illustration
    }), jsx(uT, {
      activeMode: d
    }), jsx(uv, {
      activeMode: d,
      prevActiveMode: c.current
    }), jsx(_$$a9, {
      modes: o,
      activeMode: d,
      onModeSwitch,
      onboardingKey: _$$oR,
      recordingKey: 'toolbarView.toolbeltModeSegmentedControl'
    })]
  });
}
function uO() {
  let [e, t] = useState(!1);
  let r = _$$oR;
  let {
    getPendingRequest
  } = wH();
  let i = getPendingRequest(FProductAccessType.DEV_MODE);
  useEffect(() => {
    if (!i || !i.billableProductKey || getProductAccessTypeByKey(i.billableProductKey) !== ProductAccessTypeEnum.DEVELOPER) return;
    let {
      showNudgeEligibility
    } = qm(i);
    t(showNudgeEligibility);
  }, [i]);
  return jsx(_$$rq, {
    clickOutsideToHide: !0,
    description: jsx(Fragment, {
      children: renderI18nText('fullscreen.dev_mode_nudge_tooltip.description')
    }),
    emphasized: !0,
    forceEditorTheme: 'dev-handoff',
    hideCloseButton: !0,
    isShowing: e,
    onClose: () => t(!1),
    shouldCenterArrow: EL.BEST_EFFORT,
    targetKey: r,
    title: renderI18nText('fullscreen.dev_mode_nudge_tooltip.title'),
    trackingContextName: 'Dev Mode Nudge'
  });
}
let uM = userFlagAtomFamily('dev_mode_notified_of_approved_org_request');
function uF() {
  let e = useAtomWithSubscription(uM);
  let t = useDispatch();
  let {
    show,
    isShowing,
    complete
  } = _$$e8({
    overlay: Xu4,
    priority: _$$N5.DEFAULT_MODAL
  }, [e]);
  let a = _$$W4();
  let s = useCallback(() => {
    t(postUserFlag({
      dev_mode_notified_of_approved_org_request: !0,
      dev_mode_seen_paywall_reminder: !0
    }));
    complete();
  }, [complete, t]);
  useSingleEffect(() => {
    show({
      canShow: e => !e
    });
  });
  useEffect(() => s, [s]);
  return jsx(_$$rq, {
    description: renderI18nText('dev_handoff.paywall.approved.description'),
    disableHighlight: !1,
    emphasized: !0,
    forceEditorTheme: 'dev-handoff',
    isShowing,
    onClose: s,
    shouldCenterArrow: EL.BEST_EFFORT,
    targetKey: _$$oR,
    title: renderI18nText('dev_handoff.paywall.approved.title'),
    trackingContextName: 'Dev Mode Approved Access Hint',
    trackingEnabled: a?.gracePeriod !== void 0,
    trackingProperties: a
  });
}
function uj() {
  let e = function () {
    let e = useCanAccessFullDevMode();
    let t = selectCurrentFile();
    let r = t?.currentPartialOrgUser?.designAccountTypeRequest;
    let n = t?.currentPartialOrgUser?.devModeAccountTypeRequest;
    let i = !!t?.parentOrgId;
    let a = !1;
    n?.status === 'approved' ? a = !0 : n?.status === 'denied' && r?.status === 'approved' && (a = !0);
    return !!e && !!i && a;
  }();
  let t = function () {
    let e = useCanAccessFullDevMode();
    let t = useAtomWithSubscription(fC).data;
    let r = useFullscreenViewFile();
    let n = _$$R5({
      preferOpenFilePlan: !0
    });
    return resourceUtils.useTransform(r, t => {
      let r = t?.canEdit && (n ? t?.currentPlanUser?.seatTypeLicenseTypes?.includes(FProductAccessType.DESIGN) : t?.currentPartialOrgUser?.accountType === FPlanFeatureType.FULL);
      let i = t?.currentPartialOrgUser?.designAccountTypeRequest;
      let a = t?.currentPartialOrgUser?.devModeAccountTypeRequest;
      let s = !!t?.parentOrgId;
      let o = !1;
      a?.status === 'approved' ? o = !0 : a?.status === 'denied' && i?.status === 'approved' && (o = !0);
      return s && !o && !r && e;
    }).unwrapOr(!1) && !t;
  }();
  let {
    getHasProvisionalAccess
  } = wH();
  return getHasProvisionalAccess(FProductAccessType.DEV_MODE) || !(t || e) ? null : jsx(uF, {});
}
function uY() {
  let e = _$$Y4(getI18nString('auth.sign_up_for_figma'));
  let [t, r] = useState(!1);
  let n = useDispatch();
  useEffect(() => {
    let e = setTimeout(() => {
      r(!0);
    }, 400);
    return () => clearTimeout(e);
  }, []);
  return jsx(TrackingProvider, {
    name: 'Logged Out File Toolbelt Banner',
    children: jsxs('div', {
      className: j()({
        'logged_out_banner--container--rKzzw': !0,
        'logged_out_banner--moveUp--r2wwD': t
      }),
      children: [jsx('div', {
        className: 'logged_out_banner--text--sgucR',
        children: getI18nString('auth.sign_up_to_comment_edit_inspect')
      }), jsxs('div', {
        className: 'logged_out_banner--buttonGroup--YGRJ9',
        children: [jsx(Button, {
          variant: 'secondary',
          onClick: () => {
            UK('SIGN_UP_BUTTON_BANNER');
            e({
              origin: _$$ty.LOGGED_OUT_FOOTER,
              formState: AuthFlowStep.SIGN_UP
            });
          },
          children: getI18nString('auth.sign_up')
        }), jsx(_$$H6, {
          onClick: () => {
            UK('GOOGLE_SSO_BUTTON');
            Rm({
              dispatch: n,
              origin: _$$ty.LOGGED_OUT_FOOTER_CONTINUE_WITH_GOOGLE,
              redirectUrl: getCurrentPath()
            }).then(e => {
              e.type === 'login' && n(AUTH_COMPLETE({
                userId: e.user.id
              }));
            }, e => {
              trackAuthEvent('google_signup_error', _$$ty.LOGGED_OUT_FOOTER_CONTINUE_WITH_GOOGLE, {
                error: e.message
              });
              getFeatureFlags().ff_show_auth_modal_on_google_sso_error && Y2({
                dispatch: n,
                origin: _$$ty.LOGGED_OUT_FOOTER_CONTINUE_WITH_GOOGLE,
                message: e.message,
                redirectUrl: getCurrentPath()
              });
            });
          },
          brandTextColor: !0,
          children: getI18nString('auth.continue')
        })]
      }), jsx(_$$P4, {
        origin: DT.LOGGED_OUT_FILE,
        overrideUseFedCMPrompt: !1
      })]
    })
  });
}
function u3(e) {
  return !e || e.wiggle === 0;
}
function u4(e, t) {
  return !!(u3(e) && u3(t)) || dT()(e, t);
}
function u8() {
  let {
    getTriggerProps,
    manager
  } = useMenu({
    offset: 8
  });
  let r = useAtomWithSubscription(NU);
  let [n, i] = useAtomValueAndSetter(GI);
  let a = n.dynamicStrokeSettings;
  let {
    currentStroke,
    defaultStrokes
  } = useMemo(() => ({
    currentStroke: r.Current,
    defaultStrokes: Object.values(r).sort((e, t) => e.optionIndexForMenu - t.optionIndexForMenu).filter(({
      name: e
    }) => e !== 'Current')
  }), [r]);
  let d = useMemo(() => defaultStrokes.some(e => e.name !== 'Current' && u4(e.config, a)), [a, defaultStrokes]);
  let c = useMemo(() => d ? defaultStrokes.find(e => u4(e.config, a))?.name ?? 'Smooth' : 'Current', [a, defaultStrokes, d]);
  let u = useCallback(e => {
    let t = r[e]?.config;
    t && i(e => ({
      ...e,
      dynamicStrokeSettings: t
    }));
  }, [i, r]);
  let p = useCallback(({
    preset: e,
    isSelected: t
  }) => jsx(MenuItemComp, {
    onClick: () => u(e.name),
    children: jsxs('div', {
      className: RS,
      children: [jsx('div', {
        className: CL,
        children: t && jsx(_$$c8, {})
      }), jsx(_$$oW, {
        src: e.imageUrl,
        alt: e.name,
        className: _$$tw
      })]
    })
  }, e.name), [u]);
  return jsxs(MenuRootComp, {
    manager,
    children: [jsxs('button', {
      className: j()(zH, _$$rr),
      ...getTriggerProps(),
      children: [jsx(_$$oW, {
        src: r[c]?.imageUrl,
        alt: c,
        className: _$$tw
      }), jsx('div', {
        className: FH,
        children: jsx(_$$O2, {})
      })]
    }), jsxs(MenuContainerComp, {
      children: [defaultStrokes.map(e => {
        let t = e.name === c;
        return p({
          preset: e,
          isSelected: t
        });
      }), !d && currentStroke && jsxs(Fragment, {
        children: [jsx(MenuSeparator, {}), p({
          preset: currentStroke,
          isSelected: !0
        })]
      })]
    })]
  });
}
let u7 = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M7.5 6A1.5 1.5 0 0 1 8 8.912v1.675a1.5 1.5 0 0 1 0 2.825v1.675a1.5 1.5 0 1 1-1 0v-1.675a1.498 1.498 0 0 1 0-2.825V8.912A1.498 1.498 0 0 1 7.5 6m9 0a1.5 1.5 0 0 1 .5 2.912V15l-.009.084a1.5 1.5 0 1 1-.983 0L16 15V8.912A1.498 1.498 0 0 1 16.5 6m-9 10a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m9 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-4.353-6.354a.5.5 0 0 1 .707 0l2 2q.05.052.082.113a.5.5 0 0 1 .054.142.5.5 0 0 1 0 .197.5.5 0 0 1-.054.142.5.5 0 0 1-.082.114l-2 2a.5.5 0 1 1-.707-.707l1.146-1.147H10.5a.5.5 0 0 1 0-1h2.793l-1.146-1.146a.5.5 0 0 1 0-.708M7.5 11.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m0-4.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m9 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1'
    })
  });
});
function p_(e) {
  let t = isIllustrationEditorType();
  let r = jsx(Ig, {
    children: jsx(pm, {
      ...e
    })
  });
  return t ? jsx(_$$p4, {
    children: r
  }) : r;
}
function ph(e) {
  let {
    activeToolId,
    activateTool,
    getShortcutTextForTool
  } = e;
  let i = _$$rb();
  let a = z0();
  let s = getFilteredFeatureFlags().ce_il_vem_offset_path && Yh(a, 'set-tool-offset-path');
  let o = getFilteredFeatureFlags().ce_il_simplify && Yh(a, 'set-tool-simplify-vector');
  let d = mapEditorTypeToProductType(debugState.getState().selectedView.editorType);
  let c = getFilteredFeatureFlags().ce_il_vem_offset_path && jsx(_$$N8, {
    activeToolId,
    disabled: !1,
    icon: jsx(_$$Z4, {}),
    onActivateTool: () => {
      analyticsEventManager.trackDefinedEvent('illustration.offset_path', {
        action: 'select_tool',
        productType: d,
        nodeType: i
      });
      activateTool(DesignGraphElements.OFFSET_PATH);
    },
    onDeactivateTool: () => {
      activateTool(DesignGraphElements.SELECT);
    },
    recordingKey: 'toolbarView.toolOffsetPath',
    secondary: !0,
    toolId: DesignGraphElements.OFFSET_PATH,
    tooltipShortcut: getShortcutTextForTool(DesignGraphElements.OFFSET_PATH),
    tooltipText: getI18nString('fullscreen_actions.set-tool-offset-path')
  });
  let u = getFilteredFeatureFlags().ce_il_simplify && jsx(_$$N8, {
    activeToolId,
    icon: jsx(u7, {}),
    onActivateTool: e => {
      analyticsEventManager.trackDefinedEvent('illustration.simplify', {
        action: 'select_tool',
        productType: d
      });
      activateTool(e);
    },
    onDeactivateTool: () => {
      activateTool(DesignGraphElements.SELECT);
    },
    recordingKey: 'toolbarView.toolSimplify',
    secondary: !0,
    toolId: DesignGraphElements.SIMPLIFY_VECTOR,
    tooltipShortcut: getShortcutTextForTool(DesignGraphElements.SIMPLIFY_VECTOR),
    tooltipText: getI18nString('fullscreen_actions.set-tool-simplify-vector')
  });
  return s || o ? jsxs(_$$k6, {
    name: 'secondary_toolbelt_offset_path',
    children: [jsx(_$$X4, {
      extended: !0
    }), s && c, o && u]
  }) : null;
}
function pm(e) {
  let {
    hoistedToolbeltItems,
    modalTargetPanelRef
  } = function () {
    let e = useRef(null);
    let t = getObservableValue(AppStateTsApi?.propertiesPanelState().shownPropertiesPanels, []);
    let r = _$$M5(t);
    let n = gT(r, e);
    let i = isIllustrationEditorType();
    let a = jw();
    let s = useMemo(() => i ? Yd(n, a) : n, [i, n, a]);
    let {
      orderedHoistableToolbarItems
    } = NA(s);
    return {
      modalTargetPanelRef: e,
      hoistedToolbeltItems: useMemo(() => i ? orderedHoistableToolbarItems : orderedHoistableToolbarItems.slice(0, 5), [i, orderedHoistableToolbarItems])
    };
  }();
  return hoistedToolbeltItems.length ? jsx(_$$k6, {
    name: 'selection_actions_secondary_toolbar',
    children: jsxs(_$$a0, {
      ariaLabel: '',
      ignoreQuickActionsSpacing: !0,
      children: [jsx('div', {
        ref: modalTargetPanelRef,
        style: {
          display: 'contents'
        },
        children: hoistedToolbeltItems.map(e => e.type === ZU.FLYOUT ? jsx(_$$E8, {
          name: 'layer_header_button',
          children: jsx(_$$F8, {
            flyoutConfig: e,
            recordingKey: generateRecordingKey(If, e.flyoutRecordingKey)
          })
        }, e.dropdownKey) : e.type === ZU.ACTION ? jsx(_$$E8, {
          name: 'layer_header_button',
          children: jsx(QE, {
            item: e,
            numUnreadComments: 0,
            recordingKey: If
          })
        }, e.recordingKey) : e.type === ZU.ACTION_SUBMENU ? jsx(_$$E8, {
          name: 'layer_header_button',
          children: jsx(QE, {
            item: e,
            numUnreadComments: 0,
            recordingKey: generateRecordingKey(If, e.recordingKey)
          })
        }, e.recordingKey) : e.type === ZU.CUSTOM_ACTION ? jsx(CX, {
          item: e
        }, e.recordingKey) : null)
      }), jsx(ph, {
        ...e
      })]
    })
  }) : null;
}
let pg = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M17 5a2 2 0 1 1-1.843 2.778l-.034-.092a9.51 9.51 0 0 0-7.437 7.437A1.999 1.999 0 1 1 5 17a2 2 0 0 1 1.724-1.979l-.037.005a10.51 10.51 0 0 1 8.34-8.34q-.004.019-.005.038A2 2 0 0 1 17 5M7 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2M17 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2'
    })
  });
});
let pf = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M17 5a2 2 0 1 1-1.843 2.778l-.034-.092a9.5 9.5 0 0 0-3.353 1.383 2 2 0 0 1-2.7 2.7 9.5 9.5 0 0 0-1.384 3.354A1.999 1.999 0 1 1 5 17a2 2 0 0 1 1.724-1.979l-.037.005a10.5 10.5 0 0 1 1.635-3.94 2 2 0 0 1 2.77-2.76l-.005-.004a10.4 10.4 0 0 1 3.94-1.635q-.004.018-.005.037A2 2 0 0 1 17 5M7 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m7-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2'
    })
  });
});
function pb() {
  let [e, t] = useState(3);
  let r = mapEditorTypeToProductType(debugState.getState().selectedView.editorType);
  let n = t => analyticsEventManager.trackDefinedEvent('illustration.simplify', {
    action: t,
    productType: r,
    threshold: e
  });
  let i = (e, r) => {
    r && n('change_threshold');
    t(e);
    SimplifyVectorToolTsApi?.setThreshold(e);
  };
  return jsxs('div', {
    className: 'design_toolbelt_simplify_vector--container--OQ-MS',
    children: [jsx('div', {
      className: 'design_toolbelt_simplify_vector--title--5Vw22',
      children: getI18nString('fullscreen.toolbar.simplify_vector.title')
    }), jsx(_$$X4, {
      extended: !0
    }), jsxs('div', {
      className: 'design_toolbelt_simplify_vector--sliderAndIconContainer--rxTBg',
      children: [jsx(pg, {
        'data-tooltip': getI18nString('fullscreen.toolbar.simplify_vector.tooltip.simpler'),
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip-show-above': !0
      }), jsx('div', {
        className: 'design_toolbelt_simplify_vector--sliderContainer--RmzzC',
        children: jsx(xI, {
          min: -2,
          sliderMax: 3,
          step: 0.01,
          bigStep: 0.1,
          sliderValue: e,
          onChange: (e, {
            commit: t
          }) => {
            i(Number(e), t);
          },
          rangeAnchor: -2,
          ariaLabel: getI18nString('fullscreen.toolbar.simplify_vector.threshold')
        })
      }), jsx(pf, {
        'data-tooltip': getI18nString('fullscreen.toolbar.simplify_vector.tooltip.more_detailed'),
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip-show-above': !0
      })]
    }), jsx(_$$X4, {
      extended: !0
    }), jsx(Button, {
      variant: 'secondary',
      onClick: () => {
        n('cancel');
        SimplifyVectorToolTsApi?.cancel();
      },
      children: getI18nString('fullscreen.toolbar.simplify_vector.cancel')
    }), jsx(ButtonPrimitive, {
      'onClick': () => {
        n('apply');
        SimplifyVectorToolTsApi?.apply();
      },
      'aria-label': getI18nString('fullscreen.toolbar.simplify_vector.apply'),
      'className': 'design_toolbelt_simplify_vector--applyButton--4ECWk',
      'children': jsx(_$$g4, {})
    })]
  });
}
function pN() {
  let e = useCanAccessFullDevMode();
  let t = useDevModeFocusId();
  let r = pw();
  if (!e) return !1;
  if (t == null) return r !== -1;
  {
    let e = getSingletonSceneGraph();
    return e.get(t ?? '')?.isSection ?? !1;
  }
}
function pC() {
  let e = getObservableValue(AppStateTsApi?.devHandoffState().nodeIds, []);
  let t = function () {
    let e = useDevModeFocusId();
    let t = getObservableValue(AppStateTsApi?.devHandoffState().focusNodeVisuallySortedChildren, []);
    return e ? t : [];
  }();
  return useDevModeFocusId() ? t : e;
}
function pw() {
  let e = _$$uQ();
  let t = pC();
  return e ? t.indexOf(e) : -1;
}
function pP({
  handleAction: e
}) {
  let t = function () {
    !function () {
      let e = Xr(_$$r5);
      let t = pN();
      useEffect(() => {
        e(t);
      }, [t, e]);
    }();
    let e = getObservableValue(AppStateTsApi?.devHandoffState()?.focusAnimationIsRunning, !1);
    let t = _$$uQ() ?? defaultSessionLocalIDString;
    let r = isSingleSceneGraphSelectionInDevHandoff();
    let n = useCanAccessFullDevMode();
    let i = useSceneGraphSelector();
    let [a, s] = useState(!1);
    useFullscreenViewportUpdates({
      subscribeToUpdates_expensive: !0
    }, useCallback(a => {
      if (!n || a.isPanning || a.isZooming || e) return;
      let o = i.get(t);
      let l = o?.absoluteBoundingBox;
      if (!l || !r) {
        s(!1);
        return;
      }
      let d = scaleRect(a, {
        x: l.x,
        y: l.y,
        width: l.w,
        height: l.h
      });
      s(function (e, t) {
        let r = 0;
        let n = 0;
        if (t.width / e.width > t.height / e.height ? (r = t.width, n = e.width) : (r = t.height, n = e.height), e.zoomScale < 0.5 && r / n < 0.25) return !0;
        let i = Math.min(t.width, 0.25 * e.width);
        let a = Math.min(t.height, 0.25 * e.height);
        return t.x + t.width < i || t.x > e.width - i || t.y + t.height < a || t.y > e.height - a;
      }(a, d));
    }, [n, e, i, t, r]));
    return a;
  }();
  let r = useSelector(e => e.mirror.appModel.keyboardShortcuts);
  let n = useCanAccessFullDevMode();
  let i = !!useDevModeFocusId();
  let a = pN();
  let {
    nodeIndex,
    nodesForStepper,
    handleStepForward,
    handleStepBack
  } = function (e) {
    let t = pC();
    let r = pw();
    let n = r < t.length - 1;
    let i = r > 0;
    return {
      nodeIndex: r,
      nodesForStepper: t,
      navigateForwardEnabled: n,
      navigateBackwardEnabled: i,
      handleStepForward: () => {
        n && e('dev-handoff-focus-next');
      },
      handleStepBack: () => {
        i && e('dev-handoff-focus-previous');
      }
    };
  }(e);
  return n && (t || nodeIndex !== -1 && (!i || a)) ? t ? jsx(_$$a0, {
    ariaLabel: getI18nString('dev_handoff.toolbar.inspect_aria_label'),
    children: jsxs(_$$$4, {
      onMouseDown: () => {
        e('zoom-to-selection');
      },
      tooltipText: getI18nString('dev_handoff.recenter'),
      children: [jsx(_$$S3, {}), jsxs('div', {
        className: 'secondary_toolbelt_for_dev_mode_inspect--reCenterLabelContainer--WaA1N',
        children: [jsx('span', {
          className: _$$Cg,
          children: renderI18nText('dev_handoff.recenter')
        }), jsx('span', {
          style: {
            marginLeft: 'var(--spacer-1)',
            color: 'var(--color-text-secondary)'
          },
          children: _$$c9(r, 'zoom-to-selection')
        })]
      })]
    })
  }) : jsx(_$$M6, {
    ariaLabel: getI18nString('dev_handoff.toolbar.inspect_aria_label'),
    currentFrameIndex: nodeIndex,
    frameCount: nodesForStepper.length,
    onNavigateBackward: handleStepBack,
    onNavigateForward: handleStepForward,
    shouldShowFrameCounter: !0
  }) : null;
}
function pB() {
  let e = mapEditorTypeToProductType(debugState.getState().selectedView.editorType);
  let t = t => analyticsEventManager.trackDefinedEvent('illustration.offset_path', {
    action: t,
    productType: e,
    offset: r,
    joinType: n === JoinType.MITER ? 'MITER' : 'ROUND'
  });
  let r = getObservableValue(AppStateTsApi?.offsetPathState().offset, 0);
  let n = getObservableValue(AppStateTsApi?.offsetPathState().joinType, JoinType.MITER);
  let i = getObservableValue(AppStateTsApi?.offsetPathState().minSliderOffset, 0);
  let a = getObservableValue(AppStateTsApi?.offsetPathState().maxSliderOffset, 0);
  let s = (e, r) => {
    r === yesNoTrackingEnum.YES && t('change_offset_with_slider');
    OffsetPathTsApi?.setOffset(e);
    OffsetPathTsApi?.apply();
  };
  return jsx(_$$a0, {
    ariaLabel: '',
    ignoreQuickActionsSpacing: !0,
    children: jsxs('div', {
      className: 'secondary_toolbelt_offset_path--container--XV3Iw',
      children: [jsx('div', {
        className: 'secondary_toolbelt_offset_path--title--q9C4J',
        children: getI18nString('fullscreen.toolbar.offset-path-slider-label')
      }), jsx(_$$X4, {
        extended: !0
      }), jsx('div', {
        className: 'secondary_toolbelt_offset_path--slider--veLPl',
        children: jsx(EX, {
          ariaLabel: getI18nString('fullscreen.toolbar.offset-path-slider-label'),
          bigStep: 5,
          dataTooltip: getI18nString('fullscreen.toolbar.offset-path-slider-tooltip'),
          dataTooltipShowAbove: !0,
          min: i,
          onValueChange: (e, t) => {
            s(Number(e), t);
          },
          sliderMax: a,
          step: 1,
          value: r
        })
      }), jsxs(_$$bL2, {
        onChange: e => {
          let r = e === 'miter' ? JoinType.MITER : JoinType.ROUND;
          t('change_join_type');
          OffsetPathTsApi?.setJoinType(r);
          OffsetPathTsApi?.apply();
        },
        value: n === JoinType.MITER ? 'miter' : 'round',
        legend: jsx(_$$q2, {
          children: getI18nString('fullscreen.toolbar.offset-path-join-type-aria-label')
        }),
        children: [jsx(_$$c$, {
          'value': 'miter',
          'icon': jsx(_$$H7, {}),
          'aria-label': getI18nString('fullscreen.toolbar.offset-path-join-type-square'),
          'data-tooltip-show-above': !0
        }), jsx(_$$c$, {
          'value': 'round',
          'icon': jsx(_$$m4, {}),
          'aria-label': getI18nString('fullscreen.toolbar.offset-path-join-type-round'),
          'data-tooltip-show-above': !0
        })]
      }), jsx(_$$X4, {
        extended: !0
      }), jsx(Button, {
        variant: 'secondary',
        onClick: () => {
          t('cancel');
          OffsetPathTsApi?.cancel();
        },
        children: getI18nString('fullscreen.toolbar.offset-path-cancel-button')
      }), jsx(ButtonPrimitive, {
        'onClick': () => {
          t('apply');
          Fullscreen?.triggerAction('set-tool-default', null);
        },
        'aria-label': getI18nString('fullscreen.toolbar.offset-path-apply-button'),
        'className': 'secondary_toolbelt_offset_path--applyButton--HMal0',
        'children': jsx(_$$g4, {})
      })]
    })
  });
}
function pV(e) {
  let {
    activeToolId,
    activateTool,
    topLevelMode,
    editModeType
  } = _$$rM(_$$u6);
  let a = topLevelMode === ViewType.LAYOUT;
  let s = topLevelMode === ViewType.DEV_HANDOFF;
  let {
    activeSecondaryToolbeltId,
    setActiveSecondaryToolbeltId,
    closeSecondaryToolbelt
  } = _$$LH();
  let u = useAtomWithSubscription(Bu);
  let p = _$$uh(s);
  let _ = isIllustrationEditorType();
  let h = _$$T2();
  let g = _ && getFilteredFeatureFlags().ce_il_root && h === DesignGraphElements.VECTOR_PEN;
  return (useEffect(() => {
    activeToolId !== DesignGraphElements.VECTOR_BEND && activeToolId !== DesignGraphElements.VECTOR_PAINT_BUCKET && activeToolId !== DesignGraphElements.VECTOR_LASSO && activeToolId !== DesignGraphElements.VECTOR_CUT && (activeToolId !== DesignGraphElements.SIMPLIFY_VECTOR && (a && editModeType === LayoutTabType.VECTOR || g) ? setActiveSecondaryToolbeltId(_$$R6.PenTool) : activeToolId === DesignGraphElements.IMAGE_OR_VIDEO ? setActiveSecondaryToolbeltId(_$$R6.ImageOrVideoTool) : s && activeToolId === DesignGraphElements.SELECT ? setActiveSecondaryToolbeltId(_$$R6.DevModeInspectTool) : h === DesignGraphElements.BRUSH && _ ? setActiveSecondaryToolbeltId(_$$R6.BrushTool) : h === DesignGraphElements.VECTOR_PENCIL && _ ? setActiveSecondaryToolbeltId(_$$R6.PencilTool) : getFilteredFeatureFlags().ce_il_vem_offset_path && activeToolId === DesignGraphElements.OFFSET_PATH ? setActiveSecondaryToolbeltId(_$$R6.OffsetPathTool) : h === DesignGraphElements.SIMPLIFY_VECTOR ? setActiveSecondaryToolbeltId(_$$R6.SimplifyVectorTool) : _ ? setActiveSecondaryToolbeltId(_$$R6.SecondaryToolbeltForSelectionActions) : setActiveSecondaryToolbeltId(null));
  }, [h, activeToolId, a, s, editModeType, setActiveSecondaryToolbeltId, g, _]), activeSecondaryToolbeltId === _$$R6.PenTool && (editModeType === LayoutTabType.VECTOR || g)) ? jsx(_$$A1, {
    activeToolId: h,
    activateTool,
    getShortcutTextForTool: p,
    closeSecondaryToolbelt
  }) : activeSecondaryToolbeltId === _$$R6.DevModeInspectTool ? jsx(pP, {
    handleAction: $v
  }) : activeSecondaryToolbeltId === _$$R6.ImageOrVideoTool ? jsx(_$$O3, {
    handleAction: $v
  }) : activeSecondaryToolbeltId === _$$R6.BrushTool && _ ? jsx(_$$a0, {
    ariaLabel: getI18nString('fullscreen.toolbar.aria-label-brush'),
    children: jsx(_$$c7, {
      atom: Vi,
      includeStrokePicker: !0,
      recordingKey: e.recordingKey
    })
  }) : activeSecondaryToolbeltId === _$$R6.PencilTool && _ ? jsx(_$$a0, {
    ariaLabel: getI18nString('fullscreen.toolbar.aria-label-pencil'),
    children: jsx(_$$c7, {
      atom: GI,
      addon: getFeatureFlags().ce_il_pencil_stroke_presets && jsx(u8, {})
    })
  }) : activeSecondaryToolbeltId === _$$R6.SimplifyVectorTool ? jsx(_$$a0, {
    ariaLabel: getI18nString('fullscreen.toolbar.simplify_vector.aria-label'),
    children: jsx(pb, {})
  }) : _ && !u && activeSecondaryToolbeltId === _$$R6.SecondaryToolbeltForSelectionActions ? jsx(p_, {
    activeToolId,
    activateTool,
    getShortcutTextForTool: p,
    closeSecondaryToolbelt
  }) : activeSecondaryToolbeltId === _$$R6.OffsetPathTool ? jsx(pB, {}) : null;
}
function pH() {
  return jsx(_$$x6, {
    children: jsx(_$$m3, {
      'role': 'region',
      'aria-label': getI18nString('fullscreen_actions.toolbar_label'),
      'children': jsx(pz, {})
    })
  });
}
function pz() {
  let {
    activeToolId,
    activateTool,
    topLevelMode
  } = _$$rM(_$$u6);
  let n = getSelectedEditorType();
  let i = useIsProgressBarHiddenOrLocked();
  let a = function () {
    let e = useIsFullscreenOverview();
    let t = _$$e10();
    let r = useIsFullscreenDevModeComponentBrowser();
    return e || t || r;
  }();
  let s = D_(n);
  let o = n === FEditorType.DevHandoff;
  let d = q8();
  let c = _$$e11();
  let {
    getProvisionalAccessBanner
  } = wH();
  let _ = o ? FProductAccessType.DEV_MODE : FProductAccessType.DESIGN;
  let h = useMemo(() => getProvisionalAccessBanner(_), [getProvisionalAccessBanner, _]);
  let [m, g] = useState(!1);
  let f = useIsCanvasEditDisabled();
  let E = selectCurrentFile();
  let y = hasRootPathOptional(E?.project);
  let b = _$$I4();
  let T = h?.showBanner && !m && (!f || o) && (!y || o) && !(o && b);
  let {
    close
  } = _$$cq();
  let S = zm();
  let v = Uv(m);
  let A = isUserNotLoggedInAndEditorSupported();
  let [x, N] = useState(!1);
  return (useEffect(() => {
    if (s) {
      close();
      activeToolId === DesignGraphElements.COMMENTS || activeToolId === DesignGraphElements.SELECT || (activeToolId === DesignGraphElements.MEASURE || activeToolId === DesignGraphElements.ANNOTATE ? n === FEditorType.DevHandoff || n === FEditorType.Design : activeToolId === DesignGraphElements.BRUSH ? n === FEditorType.Illustration : n === FEditorType.Design || n === FEditorType.Illustration) || activateTool(DesignGraphElements.SELECT);
      h?.showBanner && (g(!0), setTimeout(() => g(!1), 1e3));
    }
  }, [s, n, activateTool, activeToolId, close, g, h?.showBanner]), i || a || getFilteredFeatureFlags().ce_il_root && c === _$$n5.LOADING) ? jsx(Fragment, {}) : jsx(TrackingProvider, {
    name: _$$e9.EDITOR_TOOLBELT,
    children: jsxs(XS, {
      'data-testid': 'design-toolbelt-wrapper',
      'children': [jsxs(Iy, {
        children: [jsx('div', {
          'data-onboarding-key': _$$aE,
          'children': jsx(ud, {
            topLevelMode,
            activateTool,
            showDisabledTools: v || A,
            textureModeAccess: c
          })
        }), !d && jsxs(Fragment, {
          children: [getFilteredFeatureFlags().ce_il_root && c === _$$n5.HAS_ACCESS ? jsx(uA, {}) : jsx(ui, {
            setDelayViewOnlyBanner: N
          }), !o && jsxs(_$$p2, {
            children: [jsx(uj, {}), jsx(uO, {})]
          })]
        })]
      }), jsx(_$$tH, {
        boundaryKey: 'DesignSecondaryToolbelts',
        team: _$$e.EDITOR_USABILITY,
        fallback: _$$H4.NONE_I_KNOW_WHAT_IM_DOING,
        children: jsx(pV, {
          recordingKey: 'secondary_toolbelt'
        })
      }), jsx(pW, {
        delayViewOnlyBanner: x,
        hasSecondaryToolbelt: S,
        isDevMode: o,
        isLoggedOutCommentUser: A,
        provisionalAccess: h,
        setIsMinimized: g,
        showDisabledTools: v,
        showProvisionalAccess: T
      })]
    })
  });
}
function pW({
  showDisabledTools: e,
  isLoggedOutCommentUser: t,
  showProvisionalAccess: r,
  setIsMinimized: n,
  delayViewOnlyBanner: i,
  provisionalAccess: a,
  hasSecondaryToolbelt: s,
  isDevMode: o
}) {
  return e && !t ? jsx(_$$f, {
    onClose: () => n(!0),
    delayBanner: i,
    isDesignEditor: !0
  }) : r ? jsx(_$$c6, {
    text: a.text,
    licenseType: o ? FProductAccessType.DEV_MODE : FProductAccessType.DESIGN,
    hasSecondaryToolbelt: s && !o,
    shouldShowCurf: a.shouldShowCurf
  }) : t ? jsx(uY, {}) : null;
}
function pY() {
  let e = useCanAccessFullDevMode();
  let t = _$$I3();
  let r = !!useDevModeFocusId() && e;
  let n = UX();
  let i = xn();
  let a = r && !(isVsCodeEnvironment() && getFeatureFlags().dt_vscode_ready_for_dev) ? n : 0;
  let s = useAtomWithSubscription(_$$P2);
  return jsx('div', {
    className: j()(_$$z4, {
      [_$$D6]: t
    }),
    style: {
      marginBottom: i + s,
      marginRight: a
    },
    children: jsx(pH, {})
  });
}
function p$({
  children: e
}) {
  let t = selectCurrentFile();
  let r = selectWithShallowEqual(e => e.comments);
  let {
    anchorPositions,
    boundingBoxPositions,
    DEPRECATED_updateWatchedNodeIds,
    updateWatchedStablePaths
  } = Cn();
  let o = _$$e_();
  let d = getUserId();
  let c = useAppModelProperty('showUi');
  let u = useFullscreenReady();
  return jsx(Fragment, {
    children: jsxs(NX, {
      userId: d,
      file: t,
      orgId: t?.parentOrgId ?? null,
      activeId: r.activeThread?.id || null,
      anchorPositions,
      boundingBoxPositions,
      DEPRECATED_updateWatchedNodeIds,
      updateWatchedStablePaths,
      getPageIdsForNodes: o,
      children: [e, c && u && jsx(pY, {})]
    })
  });
}
var pZ = (e => (e[e.FILE_BROWSER_LOADED = 0] = 'FILE_BROWSER_LOADED', e[e.CLOSE_MODAL = 1] = 'CLOSE_MODAL', e))(pZ || {});
class pQ {
  constructor(e) {
    this.type = e;
  }
}
function p0(e) {
  preloadAuthIFrame();
  n && window.clearTimeout(n);
  window.removeEventListener('mousemove', p0);
  window.removeEventListener('scroll', p0);
  window.removeEventListener('keydown', p0);
  window.removeEventListener('click', p0);
  window.removeEventListener('touchstart', p0);
}
function p3(e) {
  let [t, r] = useState(!1);
  let n = useSelector(e => e.modalShown);
  _$$h9(() => {
    e.showModal();
    document.body.style.backgroundColor = 'transparent';
    window.parent?.postMessage(new pQ(pZ.FILE_BROWSER_LOADED), '*');
  });
  let i = () => {
    window.parent?.postMessage(new pQ(pZ.CLOSE_MODAL), '*');
  };
  useEffect(() => {
    !n && t && i();
    n && n.type === e.modalType && r(!0);
  }, [t, n, e.modalType]);
  return jsx('div', {
    onClick: i
  });
}
(e => {
  function t(e) {
    let t = useDispatch();
    return jsx(p3, {
      showModal: () => t(showModalHandler({
        type: _$$s7,
        data: {
          tab: e.tab
        }
      })),
      modalType: _$$s7.type
    });
  }
  e.AccountSettingsModalInIframe = function () {
    return jsx(t, {
      tab: _$$c0.ACCOUNT
    });
  };
})(o || (o = {}));
let p4 = {
  [viewMappings.ACCOUNT_SETTINGS]: o.AccountSettingsModalInIframe,
  [viewMappings.UNIVERSAL_PUBLISHING]() {
    let e = useDispatch();
    return jsx(p3, {
      showModal: () => e(showModalHandler({
        type: _$$R7,
        data: {
          source: ComposerLocation.IFRAME
        }
      })),
      modalType: _$$R7.type
    });
  }
};
let _r = 'notification--button--FF-NW text--_negText--j9g-L';
let _n = 'notification--action--v-pvn';
var _i = (e => (e[e.BOTTOM_RIGHT = 0] = 'BOTTOM_RIGHT', e[e.TOP_CENTER = 1] = 'TOP_CENTER', e))(_i || {});
class _a extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.notificationStyle = () => {
      switch (this.position()) {
        case 0:
          return this.props.hideHelpWidget ? 'notification--bottomRightNotificationHelpIconHidden--plZlM notification--bottomRightNotification--i1z7X notification--notification--Q5PkV text--_negText--j9g-L _overlayBase--_overlayBase--Rkj8l' : 'notification--bottomRightNotification--i1z7X notification--notification--Q5PkV text--_negText--j9g-L _overlayBase--_overlayBase--Rkj8l';
        case 1:
          return 'notification--topCenterNotification---nbgh notification--notification--Q5PkV text--_negText--j9g-L _overlayBase--_overlayBase--Rkj8l';
      }
    };
    this.icon = () => {
      throw new Error('icon must be implemented in subclass.');
    };
    this.isError = () => {
      throw new Error('isError must be implemented in subclass.');
    };
    this.actionText = () => {
      throw new Error('actionText must be implemented in subclass.');
    };
    this.actionCallback = () => {
      throw new Error('actionCallback must be implemented in subclass.');
    };
    this.dequeueNotification = () => {
      throw new Error('dequeueNotification must be implemented in subclass.');
    };
    this.position = () => {
      throw new Error('position must be implemented in subclass.');
    };
    this.onDisplay = null;
    this.onAccept = handleMouseEvent(this, 'click', e => {
      e.stopPropagation();
      this.getCurrentNotif() && (this.actionCallback(), this.dequeueNotification());
    });
    this.onDismiss = e => {
      e.stopPropagation();
      let t = this.getCurrentNotif();
      t && (t.dismissCallback && t.dismissCallback(), this.dequeueNotification());
    };
    this.getCurrentNotif = () => this.props.notifications[0] || null;
  }
  componentDidUpdate(e, t) {
    super.componentDidUpdate(e, t);
    let r = this.getCurrentNotif();
    if (!r) return;
    let n = r.displayCallback;
    n && n !== this.onDisplay && n();
    this.onDisplay = n || null;
  }
  render() {
    let e = this.getCurrentNotif();
    if (!e) return null;
    let t = this.icon();
    let r = this.isError();
    let n = this.actionText();
    let i = this.position() === 1;
    return jsx(_$$bL3, {
      className: i ? 'notification--centeredContainer--KOKEL' : '',
      children: jsxs('div', {
        className: this.notificationStyle(),
        children: [t && jsx(SvgComponent, {
          className: r ? 'notification--iconError--aqnJU notification--icon--ZWNx5' : 'notification--icon--ZWNx5',
          svg: t
        }), jsx(_$$T3, {
          className: 'notification--message--6GSx7',
          children: e.message
        }), jsxs('div', {
          className: 'notification--actions--GUX-p',
          children: [n && jsx(gZ, {
            className: _n,
            children: jsx(ButtonPrimitive, {
              onClick: this.onAccept,
              recordingKey: generateRecordingKey(this.props, 'accept'),
              className: _r,
              children: n
            })
          }), jsx(HG, {
            className: _n,
            children: jsx(ButtonPrimitive, {
              onClick: this.onDismiss,
              className: _r,
              children: renderI18nText('base_notifications.dismiss')
            })
          })]
        })]
      })
    });
  }
}
_a.displayName = 'NotificationView';
class _p extends _a {
  constructor() {
    super(...arguments);
    this.icon = () => {
      let e = this.getCurrentNotif();
      if (!e) return null;
      switch (e.type) {
        case NotificationType.COMPONENT_PUBLISH_ERROR:
        case NotificationType.DOWNTIME:
          return _$$A15;
        case NotificationType.AUTOSAVE_CHANGES_RESTORED:
          return _$$A10;
        case NotificationType.BRANCHING_SOURCE_FILE_UPDATED:
          return _$$A13;
        case NotificationType.MOVE_COMPONENTS_PROMPT:
          return _$$A12;
        case NotificationType.BRANCHING_OTHER_USER_MERGING:
        case NotificationType.SEE_WHATS_CHANGED:
          return _$$A13;
        case NotificationType.CLIPBOARD_DATA_AVAILABLE:
          return _$$A11;
        case NotificationType.SUBSCRIBED_TO_COMMENT_NOTIFICATIONS:
          return _$$A14;
      }
    };
    this.actionText = () => {
      let e = this.getCurrentNotif();
      if (!e) return null;
      let t = e.type;
      switch (t) {
        case NotificationType.COMPONENT_PUBLISH_ERROR:
          return 'Retry...';
        case NotificationType.DOWNTIME:
          return 'Learn more';
        case NotificationType.AUTOSAVE_CHANGES_RESTORED:
          return null;
        case NotificationType.BRANCHING_SOURCE_FILE_UPDATED:
          return getI18nString('collaboration.branching.update');
        case NotificationType.MOVE_COMPONENTS_PROMPT:
          return getI18nString('design_systems.updates.publish');
        case NotificationType.BRANCHING_OTHER_USER_MERGING:
          return null;
        case NotificationType.SEE_WHATS_CHANGED:
          return getI18nString('collaboration.feedback.compare');
        case NotificationType.CLIPBOARD_DATA_AVAILABLE:
          return getI18nString('fullscreen_actions.paste');
        case NotificationType.SUBSCRIBED_TO_COMMENT_NOTIFICATIONS:
          return getI18nString('comments.turn_on');
        default:
          throwTypeError(t);
      }
    };
    this.actionCallback = () => {
      let e = this.getCurrentNotif();
      if (!e) return;
      let t = e.type;
      switch (t) {
        case NotificationType.COMPONENT_PUBLISH_ERROR:
          this.props.dispatch(showModalHandler({
            type: _$$dD,
            data: {
              entrypoint: RR.COMPONENT_PUBLISH_ERROR_NOTIFICATION
            }
          }));
          return;
        case NotificationType.DOWNTIME:
        case NotificationType.BRANCHING_SOURCE_FILE_UPDATED:
        case NotificationType.MOVE_COMPONENTS_PROMPT:
          e && e.acceptCallback && e.acceptCallback();
          return;
        case NotificationType.AUTOSAVE_CHANGES_RESTORED:
        case NotificationType.BRANCHING_OTHER_USER_MERGING:
          return;
        case NotificationType.SEE_WHATS_CHANGED:
        case NotificationType.SUBSCRIBED_TO_COMMENT_NOTIFICATIONS:
          e && e.acceptCallback && e.acceptCallback();
          return;
        case NotificationType.CLIPBOARD_DATA_AVAILABLE:
          e && (Fullscreen.pasteFromSerializedClipboardData(e.downloadUrl, e.deviceType, e.timestamp), e.acceptCallback && e.acceptCallback());
          return;
        default:
          throwTypeError(t);
      }
    };
    this.position = () => {
      let e = this.getCurrentNotif();
      if (!e) return _i.BOTTOM_RIGHT;
      if (this.props.hasMobileNativeToolbar) return _i.TOP_CENTER;
      let t = e.type;
      switch (t) {
        case NotificationType.COMPONENT_PUBLISH_ERROR:
        case NotificationType.DOWNTIME:
        case NotificationType.BRANCHING_SOURCE_FILE_UPDATED:
        case NotificationType.MOVE_COMPONENTS_PROMPT:
        case NotificationType.AUTOSAVE_CHANGES_RESTORED:
        case NotificationType.BRANCHING_OTHER_USER_MERGING:
        case NotificationType.SEE_WHATS_CHANGED:
        case NotificationType.SUBSCRIBED_TO_COMMENT_NOTIFICATIONS:
          return _i.BOTTOM_RIGHT;
        case NotificationType.CLIPBOARD_DATA_AVAILABLE:
          return e.isFigJam ? _i.TOP_CENTER : _i.BOTTOM_RIGHT;
        default:
          throwTypeError(t);
      }
    };
    this.isError = () => {
      let e = this.getCurrentNotif();
      if (!e) return !1;
      let t = e.type;
      switch (t) {
        case NotificationType.COMPONENT_PUBLISH_ERROR:
          return !0;
        case NotificationType.DOWNTIME:
        case NotificationType.AUTOSAVE_CHANGES_RESTORED:
        case NotificationType.BRANCHING_SOURCE_FILE_UPDATED:
        case NotificationType.MOVE_COMPONENTS_PROMPT:
        case NotificationType.BRANCHING_OTHER_USER_MERGING:
        case NotificationType.SEE_WHATS_CHANGED:
        case NotificationType.CLIPBOARD_DATA_AVAILABLE:
        case NotificationType.SUBSCRIBED_TO_COMMENT_NOTIFICATIONS:
          return !1;
        default:
          throwTypeError(t);
      }
    };
    this.dequeueNotification = () => {
      let e = this.getCurrentNotif();
      e && this.props.dispatch(notificationActions.dequeue({
        type: e.type
      }));
    };
  }
}
_p.displayName = 'NotificationsView';
function _m(e) {
  let t = useSelector(e => e.notifications);
  let r = _$$D4();
  let n = W6();
  let i = useDispatch();
  let a = useAtomWithSubscription(_$$D7);
  let s = t[0]?.type ?? null;
  return (useEffect(() => {
    a && s !== null && trackEventAnalytics('curator_collision', {
      blocking_overlay_id: a,
      blocked_notif_type: NotificationType[s]
    });
  }, [a, s]), a) ? null : jsx(_p, {
    recordingKey: e.recordingKey,
    notifications: t,
    hideHelpWidget: r,
    hasMobileNativeToolbar: n,
    dispatch: i
  });
}
let _b = 'locked_account_view--addAccountButton--M2CKK';
function _I() {
  let e = useDispatch();
  let t = useSelector(e => e.user);
  let r = useSelector(e => e.authedUsers);
  let n = useSelector(e => e.orgById);
  let i = useSelector(e => e.currentUserOrgId);
  let a = i ? n[i] : null;
  let s = r.orderedIds.filter(e => t?.id !== e).map(e => r.byId[e]);
  useEffect(() => {
    !function () {
      let e = document.getElementById('filebrowser-loading-page');
      e && (e.classList.add('fadeOut'), setTimeout(() => {
        e.classList.add('hidden');
      }, 1e3));
    }();
  });
  trackEventAnalytics('browser_locked_account_screen_viewed', {
    user: t?.id,
    org: i
  });
  let o = e => jsxs('div', {
    className: 'locked_account_view--header--5ANme',
    children: [a ? jsxs('div', {
      className: 'locked_account_view--loadingAvatarContainer--RcSO0',
      children: [jsx(Ro, {
        entity: a,
        size: 54
      }), jsx('div', {
        className: 'locked_account_view--spinnerContainer--qmoqQ',
        children: jsx(LoadingSpinner, {})
      })]
    }) : jsx('div', {
      className: 'locked_account_view--worldIllo--ZgRY9',
      children: jsx(SvgComponent, {
        svg: _$$A16,
        useOriginalSrcFills_DEPRECATED: !0
      })
    }), jsx('div', {
      className: 'locked_account_view--title--zZnPc',
      children: renderI18nText('locked_org.title')
    }), jsx('div', {
      className: 'locked_account_view--description--FgKxX',
      children: e()
    })]
  });
  let d = () => {
    customHistory.redirect('/login?cont=', '_blank');
  };
  return jsx(_$$w, {
    children: jsx('div', {
      'className': 'locked_account_view--pageContainer--fq6gF',
      'data-testid': 'LockedAccountView',
      'children': jsx('div', {
        className: 'locked_account_view--contentContainer--pfiqF',
        children: s.length > 0 ? jsx(_$$a1, {
          dispatch: e,
          header: o(() => a ? renderI18nText('locked_org.description_no_other_accounts', {
            orgName: a.name
          }) : renderI18nText('locked_org.description_no_other_accounts_no_org')),
          users: s,
          onUserSelect: t => {
            e(AUTH_COMPLETE({
              userId: t
            }));
          },
          onChangeAccount: d,
          footer: renderI18nText('locked_org.footer', {
            addAnotherLink: jsx(ButtonBase, {
              'defaultClass': _b,
              'onClick': d,
              'data-testid': 'add-account-button',
              'children': renderI18nText('locked_org.footer_button')
            })
          })
        }) : jsxs('div', {
          className: 'locked_account_view--loginAccount--VEvAN',
          children: [o(() => a ? renderI18nText('locked_org.description', {
            orgName: a.name
          }) : renderI18nText('locked_org.description_no_org')), jsx('div', {
            className: 'locked_account_view--addAccountText--zFHaY',
            children: renderI18nText('locked_org.footer_no_other_accounts', {
              addAnotherLink: jsx(ButtonBase, {
                'defaultClass': _b,
                'onClick': d,
                'data-testid': 'add-account-button',
                'children': renderI18nText('locked_org.footer_no_other_accounts_button')
              })
            })
          })]
        })
      })
    })
  });
}
function _S({
  editorType: e,
  fileKey: t
}) {
  switch (useRequireOpenFileOrSuspend(t), yB(t), e) {
    case FEditorType.Cooper:
      return jsx(n0, {
        fallback: NONE_SYMBOL.NONE
      });
    case FEditorType.Design:
      return jsx(p$, {
        children: jsx(_$$a5, {
          fallback: NONE_SYMBOL.NONE
        })
      });
    case FEditorType.Illustration:
      return jsx(p$, {
        children: getFilteredFeatureFlags().ce_il_root ? jsx(_$$C, {
          fallback: NONE_SYMBOL.NONE
        }) : jsx(_$$a5, {
          fallback: NONE_SYMBOL.NONE
        })
      });
    case FEditorType.DevHandoff:
      return jsx(p$, {
        children: jsx(_$$b2, {
          fallback: NONE_SYMBOL.NONE
        })
      });
    case FEditorType.Whiteboard:
      return jsx(Ws, {
        fallback: NONE_SYMBOL.NONE
      });
    case FEditorType.Figmake:
    case FEditorType.Sites:
      return jsx(sf, {
        fallback: NONE_SYMBOL.NONE
      });
    case FEditorType.Slides:
      return jsx(sE, {
        fallback: NONE_SYMBOL.NONE
      });
  }
}
function _v({
  editorType: e,
  fileKey: t
}) {
  let r = _$$o(_$$nt.interopFiles);
  let n = useAtomWithSubscription(V1);
  let i = Xr(XU);
  let a = jsx(_$$e7, {
    condition: r,
    wrapper: e => jsxs(Fragment, {
      children: [jsx(cE, {}), jsx(_$$P.div, {
        variants: {
          fileDrawerOpen: {
            marginLeft: d$.fileDrawerWidth,
            borderTopLeftRadius: d$.fileDrawerAppBorderRadius,
            borderBottomLeftRadius: d$.fileDrawerAppBorderRadius,
            overflow: 'hidden'
          },
          fileDrawerClosed: {
            marginLeft: '0',
            borderTopLeftRadius: '0',
            borderBottomLeftRadius: '0',
            overflow: 'visible'
          }
        },
        animate: n ? 'fileDrawerOpen' : 'fileDrawerClosed',
        transition: {
          type: 'easeOut',
          duration: 0.3
        },
        onAnimationStart: () => {
          i(!0);
        },
        onAnimationComplete: () => {
          i(!1);
        },
        className: 'x78zum5 x12lumcd',
        children: e
      })]
    }),
    children: jsxs(_$$g2, {
      fallback: jsx(xZ, {}),
      children: [(isDesignOrIllustration(e) || e === FEditorType.DevHandoff) && jsx(_A, {}), jsx(_S, {
        editorType: e,
        fileKey: t
      })]
    })
  });
  return jsx(Fragment, {
    children: jsx('div', {
      className: _$$nP,
      children: a
    })
  });
}
function _A() {
  useAtomValueAndSetter(Fj);
  useAtomValueAndSetter(_$$w3);
  useAtomValueAndSetter(go);
  return null;
}
(e, t) => {
  reportError(_$$e.FPL, e, {
    extra: t
  });
};
loadFeatureFlags().fpl_sentry_reporting;
let _x = memo(() => {
  let e = getSelectedView();
  let t = _$$N4();
  if (isMainView(e) && t) return jsx(_I, {});
  if (e.view === 'fullscreen') {
    return jsx(_v, {
      editorType: e.editorType,
      fileKey: e.fileKey
    });
  }
  if (e.view === 'figmascope') return jsx(si, {});
  if (e.view === 'figjamTry') return jsx(iq, {});
  if (e.view === 'desktopNewTab') return jsx(dr, {});
  if (e.view === 'prototype') throw new Error('Unexpected prototype view');
  if (e === _$$o3) {
    return jsx(Fragment, {});
  } else if (e.view === 'modalInIFrame') {
    let t = p4[e.modalInIFrameType];
    return jsx(t, {});
  } else if (_$$e6(e)) {
    return jsx(Sm, {});
  } else if (isCommunityHubSubView(e)) {
    return jsx(nQ, {});
  } else if (e.view === 'abuseReportForm') {
    return jsx(ij, {
      reportedContent: e.reportedContent
    });
  }
  return jsx(IF, {});
});
function _N(e) {
  let t = getSelectedView();
  let r = useAtomWithSubscription(_$$h3);
  if (t.view === 'fullscreen' && r !== 'ok') {
    let {
      type,
      sentryId
    } = r;
    return type === 'oom' ? jsx(_$$V2, {}) : jsx(S1, {
      sentryId
    });
  }
  return jsx(Fragment, {
    children: e.children
  });
}
let _C = memo(() => {
  let e = useDispatch();
  let t = useSelector(e => e.flashes);
  let r = getSelectedView();
  let n = useSelector(e => e.interactionTestDialogShown);
  let i = useSelector(e => e.blockedUILoadingIndicator);
  let a = useSelector(e => e.mirror.appModel.showUi);
  useLayoutEffect(() => {
    let e = () => {
      setTimeout(() => F2.focusIfUnfocused());
    };
    document.body.addEventListener('blur', e, !0);
    return () => {
      document.body.removeEventListener('blur', e, !0);
    };
  }, []);
  (function () {
    let e = useDispatch();
    let t = function () {
      let e = useMemo(() => generateUUIDv4(), []);
      let t = useSubscription(ClientReloadView, {
        cacheNonce: e
      });
      return useMemo(() => {
        if (t.status === 'loaded') {
          let e = t.data.clientReload;
          if (e) {
            return {
              shouldReload: function (e, t) {
                let r = getInitialOptions().user_data?.id;
                if (r && e.target_user_id === r) {
                  let n = getAnonymousId();
                  if (trackEventAnalytics('lg_realtime_client_reload', {
                    userId: r,
                    msgTargetUserId: e.target_user_id,
                    analyticsAnonymousId: n,
                    source: t,
                    msgClientId: e.client_id
                  }), !e.client_id || !n || e.client_id !== n) {
                    return 0;
                  }
                } else if (e.target_version && e.target_version !== getInitialOptions().release_manifest_hash) {
                  return 1;
                }
              }({
                target_user_id: e.targetUserId,
                client_id: e.clientId
              }, 'livegraph') === 0,
              reason: getResourceDataOrFallback(e.reason)
            };
          }
        }
        return {
          shouldReload: !1,
          reason: null
        };
      }, [t.status, t.data?.clientReload]);
    }();
    useEffect(() => {
      t.shouldReload && (t.reason === 'mfa_required' ? e(flashMfaAndRedirect({
        reason: t.reason,
        delay: ReloadReasonEnum.DEFAULT
      })) : e(handleOrgMigration({
        reason: 'livegraph client reload',
        delay: ReloadReasonEnum.DEFAULT
      })));
    }, [e, t.shouldReload, t.reason]);
  })();
  (function () {
    let e = useMemo(() => generateUUIDv4(), []);
    let t = useSubscription(RecentNetworkControlRejectionView, {
      cacheNonce: e
    });
    useEffect(() => {
      if (t.status === 'loaded' && t.data.recentNetworkControlRejection.status === 'loaded' && t.data.recentNetworkControlRejection.data?.reason) {
        let e = t.data.recentNetworkControlRejection.data?.reason;
        let r = `/ip_account_restriction?reason=${e}&redirect_uri=${encodeURIComponent(window.location.href)}`;
        window.location.href = r;
      }
    }, [t]);
  })();
  (function () {
    let e = getLivegraphClient();
    useEffect(() => {
      if (e != null) {
        e.addEventListener(n6);
        return () => e.removeEventListener(n6);
      }
    }, [e]);
  })();
  (function () {
    let e = debugState;
    let t = useMemo(() => generateUUIDv4(), []);
    let r = useSubscription(RecentIdleTimeoutSettingChangeView, {
      cacheNonce: t
    });
    useEffect(() => {
      r.status === 'loaded' && r.data.recentIdleTimeoutSettingChange.status === 'loaded' && r.data.recentIdleTimeoutSettingChange.data?.durationInSecs && r.data.recentIdleTimeoutSettingChange.data?.orgName && r.data.recentIdleTimeoutSettingChange.data?.lastActiveAt && K7(e, {
        duration_in_secs: r.data.recentIdleTimeoutSettingChange.data?.durationInSecs,
        last_active_at: r.data.recentIdleTimeoutSettingChange.data?.lastActiveAt,
        org_name: r.data.recentIdleTimeoutSettingChange.data?.orgName
      });
    }, [r, e]);
  })();
  let s = useStableMemo({
    back: getI18nString('common.back'),
    close: getI18nString('common.close'),
    danger: getI18nString('common.danger'),
    dismiss: getI18nString('common.dismiss'),
    error: getI18nString('common.error'),
    hasChecked: getI18nString('common.hasChecked'),
    help: getI18nString('common.help'),
    loading: getI18nString('common.loading'),
    mixed: getI18nString('common.mixed'),
    moveRowDown: getI18nString('common.moveDown'),
    moveRowToBottom: getI18nString('common.moveToBottom'),
    moveRowToTop: getI18nString('common.moveToTop'),
    moveRowUp: getI18nString('common.moveUp'),
    remainingCharacters: getI18nString('common.remainingCharacters'),
    select: getI18nString('common.select'),
    success: getI18nString('common.success'),
    warning: getI18nString('common.warning')
  });
  return _$$d8() ? jsx(_$$O, {}) : isHubFileEmbedView(r) ? jsx(sN, {
    hubFileId: r.hubFileId
  }) : isMonetizationRedirectView(r) ? jsx(iW, {}) : jsx(_$$K3, {
    recordingKey: 'inAppPage',
    children: jsx(_N, {
      children: jsx(_$$w2, {
        children: jsx(dB, {
          children: jsx(wG, {
            children: jsx(LinkPrimitiveProvider, {
              value: e => {
                let t = e.currentTarget.href;
                t && handleUrlAction(t, e) && e.preventDefault();
              },
              children: jsx(_$$ds, {
                children: jsxs(FplStringsProvider, {
                  strings: s,
                  children: [!1, jsx(_$$tH, {
                    boundaryKey: 'InAppPage',
                    fallback: _$$H4.DEFAULT_FULL_PAGE,
                    hasCustomWASMBuild: y4,
                    children: jsx(_x, {})
                  }), getFeatureFlags().fpl_flash_view_migration ? jsx(_$$J, {
                    flashes: t
                  }) : jsx(_$$a4, {
                    flashes: t
                  }), jsx(_$$V2, {}), a && jsx(_m, {
                    recordingKey: 'notificationsView'
                  }), jsx(iL, {}), jsx(_$$Z, {
                    positioner: Pm
                  }), jsx(_$$pq, {
                    getLinkMetadata: pasteEmbedThunk
                  }), jsx(_$$V, {
                    blockedUILoadingIndicator: i,
                    dispatch: e
                  }), jsx(hG, {
                    enableTracking: r.view === 'fullscreen' && isDesignOrIllustration(r.editorType)
                  }), jsx(o3, {}), jsx(mv, {}), n && null, jsx(_$$d6, {
                    children: jsx(Ji, {})
                  }), jsx(nV, {}), jsx(Cj, {})]
                })
              })
            })
          })
        })
      })
    })
  });
});
let _O = createDeferredPromise();
_$$v.setDelegate(new ConfigManagerProxy());
(function (e) {
  if (!getFeatureFlags().web_vitals_report) return;
  let t = customHistory.location.pathname + customHistory.location.search;
  let r = !!document.querySelector('meta[name="is_preload_streaming"]');
  let n = !!document.querySelector('meta[name="is_serving_resized_image"]');
  function i(i) {
    let a = {
      name: i.name,
      google_rating: i.rating,
      navigation: i.navigationType,
      id: i.id,
      value: i.value,
      initialPath: t,
      normalized_current_path: normalizePathnameStrict(customHistory.location.pathname),
      bundle: e,
      used_codesplitting: !0,
      bundle_streaming: r,
      resized_images: n,
      statsig_client_bootstrap: !0,
      statsig_has_bootstrap_values: !!getInitialOptions().statsig_bootstrap_values
    };
    trackEventAnalytics('Web Vital Metrics', a, {
      forwardToDatadog: !0,
      sendAsBeacon: !0
    });
  }
  function a(i, a) {
    let s = {
      name: a,
      google_rating: 'not-applicable',
      navigation: function () {
        let e = window.performance && performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
        return e ? document.prerendering || (e.activationStart || 0) > 0 ? 'prerender' : document.wasDiscarded ? 'restore' : e.type.replace(/_/g, '-') : 'navigate';
      }(),
      value: i.timeStamp,
      initialPath: t,
      normalized_current_path: normalizePathnameStrict(customHistory.location.pathname),
      id: generateUUIDv4(),
      bundle: e,
      used_codesplitting: !0,
      bundle_streaming: r,
      resized_images: n
    };
    trackEventAnalytics('Web Vital Metrics', s, {
      forwardToDatadog: !0,
      sendAsBeacon: !0
    });
  }
  fK(i);
  zB(i);
  IN(i);
  Ck(i);
  _$$rH(i, {
    reportAllChanges: !0
  });
  document.addEventListener('DOMContentLoaded', e => a(e, 'DCL'));
  window.addEventListener('load', e => a(e, 'LOAD'));
})('figma_app');
i = 'figma_app';
window.addEventListener('load', () => {
  let e = performance.getEntriesByType('resource');
  let t = [];
  {
    let r = new Set(Array.from(document.querySelectorAll('link[rel="preload"]')).filter(e => e.href.includes('webpack') && (e.href.endsWith('.js') || e.href.endsWith('.js.gz') || e.href.endsWith('.js.br'))).map(e => e.href));
    t = e.filter(e => r.has(e.name));
  }
  function r(e, t) {
    e.compressed += t.encodedBodySize;
    e.uncompressed += t.decodedBodySize;
    return e;
  }
  let n = t.reduce(r, {
    compressed: 0,
    uncompressed: 0
  });
  let a = t.filter(e => e.transferSize === 0);
  let s = a.reduce(r, {
    compressed: 0,
    uncompressed: 0
  });
  console.log(`Loaded ${t.length} scripts (${n.compressed}b), ${a.length} from cache (${s.compressed}b)`);
  trackEventAnalytics('scripts_loaded', {
    entry: i,
    totalScripts: t.length,
    totalSizeCompressed: n.compressed,
    totalSizeUncompressed: n.uncompressed,
    cachedScripts: a.length,
    cachedSizeCompressed: s.compressed,
    cachedSizeUncompressed: s.uncompressed,
    is_webpack: !0
  }, {
    forwardToDatadog: !0
  });
});
LH();
let _R = !1;
function _L() {
  let e = getSelectedViewType();
  let t = _$$s();
  yw();
  e !== 'prototype' || isInteractionOrEvalMode() || _R || (reportError(_$$e.PROTOTYPING, new Error('Loading PrototypeAppView as part of AppView')), _R = !0);
  return jsx(ThemeContext.Provider, {
    value: t,
    children: e === 'prototype' ? jsx(nu, {}) : e === 'feed' ? jsx(eu, {}) : jsx(_C, {})
  });
}
function _P() {
  let e = getSelectedViewType();
  let t = _$$s();
  return jsx(ThemeContext.Provider, {
    value: t,
    children: e === 'prototype' ? jsx(nu, {}) : e === 'feed' ? jsx(eu, {}) : jsx(_C, {})
  });
}
function _D() {
  let e = parseAndNormalizeQuery(customHistory.location.search);
  let t = FFileType.DESIGN;
  e.editor_type === 'whiteboard' || e.type === 'whiteboard' || customHistory.location.pathname === '/jam' || customHistory.location.pathname === '/board/new' ? t = FFileType.WHITEBOARD : customHistory.location.pathname === '/slides/new' || e.type === 'slides' || e.editor_type === 'slides' ? t = FFileType.SLIDES : getFeatureFlags().sites && (customHistory.location.pathname === '/site/new' || e.type === 'sites' || e.editor_type === 'sites') ? t = FFileType.SITES : getFeatureFlags().cooper && (customHistory.location.pathname === '/buzz/new' || e.type === 'buzz' || e.editor_type === 'buzz' || e.type === 'cooper' || e.editor_type === 'cooper') ? t = FFileType.COOPER : isFigmakeSitesEnabled() && (customHistory.location.pathname === '/rev/new' || customHistory.location.pathname === '/make/new' || e.type === 'figmake' || e.editor_type === 'figmake') && (t = FFileType.FIGMAKE);
  t !== 'whiteboard' && _$$Q().render(jsx('div', {
    style: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '48px',
      backgroundColor: '#2c2c2c'
    }
  }));
  let r = e.localFileKey && isLocalFileKey(e.localFileKey) ? e.localFileKey : void 0;
  let n = e.figjamAiNewFile_prompt ? {
    prompt: e.figjamAiNewFile_prompt,
    useCaseCategory: e.figjamAiNewFile_useCaseCategory,
    subtitle: e.figjamAiNewFile_subtitle,
    entrypoint: e.figjamAiNewFile_entrypoint
  } : void 0;
  let i = e.slidesAiNewFile_source ? {
    source: e.slidesAiNewFile_source
  } : void 0;
  let a = Object.values(fD).includes(e.figjam_make_something_use_case) ? e.figjam_make_something_use_case : void 0;
  let s = Object.values(_$$E).some(t => t.toLowerCase() === e.figmakeInitialMessage?.toLowerCase()) ? e.figmakeInitialMessage : void 0;
  let o = e.newFileDataLocalStorageKey ? e.newFileDataLocalStorageKey : void 0;
  let d = null;
  e.from && (d = {
    from: e.from
  });
  _$$n(_L, () => ns, {
    newFileInfo: {
      editorType: t,
      folder_id: e.folder_id,
      org_id: e.org_id,
      trackingInfo: d,
      openNewFileIn: _$$ai.SAME_TAB,
      framePresetName: e.frame_preset_name,
      fileName: e.name,
      localFileKey: r,
      viewport: e.viewport,
      nodeId: e['node-id'],
      figjamAiNewFileData: n,
      slidesAiNewFileData: i,
      figjamMakeSomethingUseCase: a,
      newFileDataLocalStorageKey: o,
      figmakeInitialMessage: s,
      slideTemplateLibraryKey: _$$l(e['slide-template-library-key']),
      cooperTemplateLibraryKey: _$$l(e['buzz-template-library-key']),
      initialLibKey: e['initial-library-key']
    }
  });
}
let _k = performance.now();
t(async () => {
  if (customHistory.location.pathname === '/preload-editor') {
    F$('prototype-lib').then(() => {
      fullscreenPerfManager.start('editorPreloaded');
      window.startPreloadedTab = function (e) {
        if (window.preloadedTabStart = performance.now(), !getInitialOptions().user_data) {
          customHistory.replace(e.path, null);
          customHistory.reload('preloaded tab not logged in');
          return;
        }
        let t = !1;
        e.params && (e.path += e.params, t = parseQuery(e.params).$$new === '1');
        fileApiHandler.getIncludeFolderTeamCanEdit({
          includeFolderTeamCanEdit: !0,
          fileKey: e.fileKey
        }).then(({
          data: {
            meta: r
          }
        }) => {
          let n = r.parent_org_id;
          setEditingFile(r);
          console.log(`Opening file ${e.fileKey} in a preloaded tab at ${e.path} with org ${n}`);
          getInitialOptions().org_id = n;
          window.startUserStateXHR();
          customHistory.replace(e.path, null);
          _$$n(_P, () => ns, {
            loadBlank: t
          });
        }, t => {
          console.error('Reloading because of', t);
          customHistory.replace(e.path, null);
          customHistory.reload('preloaded tab error');
        });
      };
    });
  } else if (customHistory.location.pathname === '/file/new' || customHistory.location.pathname === '/design/new' || customHistory.location.pathname === '/board/new' || customHistory.location.pathname === '/slides/new' || customHistory.location.pathname === '/site/new' || customHistory.location.pathname === '/buzz/new' || customHistory.location.pathname === '/rev/new' || customHistory.location.pathname === '/make/new' || customHistory.location.pathname === '/jam') {
    if (document.visibilityState === 'prerender') {
      document.addEventListener('visibilitychange', function e() {
        document.visibilityState !== 'prerender' && (_D(), document.removeEventListener('visibilitychange', e));
      });
    } else {
      let e = parseQuery(customHistory.location.search);
      e['try-plugin-id'] && e['try-plugin-version-id'] && e['try-plugin-name'] ? await _$$n(_L, () => ns) : _D();
    }
  } else {
    fullscreenPerfManager.updateAppEntryTimeEvents(d, _k);
    let e = ns;
    if (isInteractionPathCheck()) {
      let t = parseQuerySimple(customHistory.location.search);
      let r = {
        prototypeApp: void 0,
        skewKiwiSerialization: void 0,
        deprecatedJsSceneHooks: void 0
      };
      t.skipViewer || (r = await getPrototypeAppBindingsForTest());
      e = function (e) {
        return {
          CommonApp: () => ({
            appType: () => UserAppType.InteractionTest,
            ...LO,
            ..._$$N3()
          }),
          AccessibleAreasBindings: () => _$$H2,
          OOMHelpers: () => userValue,
          PlatformInfo: () => browserCapabilities,
          FontManagerJs: () => _$$h,
          JSTextLayout: () => LineBreakProcessor,
          SitesBindings: () => rq,
          SitesJsBindings: () => _$$u2,
          SlidesTsBindings: () => e0,
          CooperTsBindings: () => ew,
          BoundsWatcherTs: Iu,
          FigmaApp: () => fullscreenValue,
          AutoLayoutBindings: () => mX,
          CurrentUserInfo: () => inputValue,
          WebAsync: () => _$$F,
          WebSelection: () => sessionValue,
          WebMultiplayer: () => flagValue,
          WebUserSyncing: () => R9,
          EmojiWheelBindings: () => CB,
          JsBindingsTestHelpers: () => rx,
          WebReporting: () => _$$F2,
          Comments: () => _$$lS,
          PluginCallbacks: () => _$$d4,
          HTMLWindowBindings: () => IM,
          ImageIo: () => imageAPI,
          ImageTsBindings: () => j5,
          VideoTsBindings: () => fm,
          JsKiwiSerialization: () => _$$K,
          TsFontManualLoader: () => _$$S2,
          StylesCheckBindings: () => modalValue,
          PdfImportBindings: () => IY,
          AutosaveSessionBindings: () => _$$X2,
          InteractionBindings: () => Dt,
          AccessibilityBindings: () => Lj,
          HandoffScenegraphBindings: () => _$$ld,
          RichTextBindings: () => rW,
          CanvasSearchBindings: () => _$$r2,
          SpellCheckAPIBindings: () => $4,
          VariablesBindingsWeb: () => WH,
          VariablesMirrorBindings: () => DQ,
          AssetMirrorBindings: () => assetMirrorInstance,
          AssetConsumptionMirrorBindings: () => BF,
          HandoffBindings: () => z4,
          LinterBindings: () => zT,
          HandoffCallbacks: () => _$$rS,
          ScaleToolAPIBindings: () => _$$h2,
          EmojiTsBindings: () => jm,
          NodeChatMessageHelper: () => _$$sv,
          MentionsTsBindings: () => _$$YN,
          StateManagementBindings: () => XO,
          ColorManagementBindings: () => _$$l2,
          KeyboardShortcutBindings: () => _$$Gm,
          WhiteboardTemplatePreviewTsBindings: () => _$$t3,
          FrameDistributionTrackerBindings: () => _$$ip,
          WhiteboardTsBindings: () => _$$nz,
          CodeBlockBindings: () => rd,
          ColorRampBindings: () => C5,
          WhiteboardAnalyticsTsBindings: () => bN,
          ExperimentBuildersTsBindings: () => Zc,
          CoreUtils: () => _$$x,
          SummaryBindings: () => Vm,
          SceneGraphHookBindings: () => _$$uo,
          MissingFontsTrackerJs: () => _$$ZO,
          EditScopeWebBindings: () => xo,
          QuickActionsBindings: () => ZO,
          BranchingWebBindings: () => _$$B,
          DSAWebBindings: () => Tl,
          WhiteboardDltConstantBindings: () => yu,
          DeprecatedXHRSendBindings: () => yx,
          ComponentPropBindings: () => XA,
          FullscreenWebSocketTsCallbacks: () => Pp,
          ThumbhashBindings: () => we,
          AutosuggestTextBindings: () => z5,
          VariablesJsRuntimeAliasTsBindings: () => additionalValue,
          AutoSuggestAssetBindings: () => Qw,
          UndoRedoEventsBindings: () => wV,
          ScenegraphStringManagementBindings: () => Bm,
          ThumbnailRequestManager: Db,
          UserActionTimingBindings: () => _$$st,
          PrototypingFormatter: () => _$$u,
          SlotsBindingsWeb: () => mn,
          PrototypeApp: () => e.prototypeApp || new Gm(),
          SkewKiwiSerialization: () => e.skewKiwiSerialization || null,
          DeprecatedJsSceneHooks: () => e.deprecatedJsSceneHooks || new _$$N(),
          WidgetBindings: () => _$$x2,
          ZipImpl: () => na,
          StatsigConfigBindings: () => gR,
          WebGPUTsContext: () => NP,
          TsGlContextBindings: _$$X,
          ScreenBindings: () => _$$N2,
          WhiteboardThemeTsBindings: () => _$$rG,
          SafeModeOptions: () => safeModeRenderController,
          jsHelpers: {
            reportError(e) {
              console.error('Stack Trace:', e.stack);
            },
            preventEnteringCpp: () => _$$y.preventEnteringCpp(),
            fatalCppError(e, t) {
              _$$y.fatalCppError(e, t);
            }
          }
        };
      }(r);
    }
    await _$$n(_L, () => e);
    window.FigmaMobile && document.body.classList.add('FigmaMobile');
  }
  _O.resolve();
});