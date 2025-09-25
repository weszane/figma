import { xk as _$$xk, Ay } from '@stylexjs/stylex';
import ep from 'classnames';
import j from 'lodash-es/mapValues';
import { createContext, createElement, createRef, forwardRef, memo, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState, useTransition } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { _H, mJ } from '../2b17fec9/432935';
import { $ as _$$$5, A as _$$A13 } from '../7a72fc59/43307';
import { c as _$$c4 } from '../7a72fc59/376662';
import { W as _$$W3 } from '../7a72fc59/509666';
import { R as _$$R4 } from '../7a72fc59/583347';
import { ar as _$$ar, Em, JE } from '../7a72fc59/842982';
import { n as _$$n9 } from '../573/512493';
import { L as _$$L5 } from '../642/269105';
import { J as _$$J7 } from '../642/485582';
import { A as _$$A20 } from '../642/502017';
import { noop } from '../642/671529';
import { o as _$$o3 } from '../642/854123';
import { k as _$$k5 } from '../642/978258';
import { reportError } from '../905/11';
import { consumptionPaywallUtils } from '../905/224';
import { T as _$$T2 } from '../905/2124';
import { useMemoStable } from '../905/19536';
import { zD, zz } from '../905/32188';
import { ModalRootComponent } from '../905/38914';
import { k as _$$k3 } from '../905/44647';
import { lJ as _$$lJ, GQ } from '../905/50159';
import { W as _$$W4 } from '../905/63398';
import { KeyCodes } from '../905/63728';
import { s as _$$s9 } from '../905/66404';
import { d as _$$d6 } from '../905/68441';
import { q as _$$q6 } from '../905/74101';
import { n as _$$n3 } from '../905/79930';
import { m as _$$m } from '../905/99004';
import { useSprigWithSampling } from '../905/99656';
import { registerModal } from '../905/102752';
import { selectWithShallowEqual } from '../905/103090';
import { K as _$$K2 } from '../905/107582';
import { C as _$$C3 } from '../905/108595';
import { q as _$$q5 } from '../905/112768';
import { IN } from '../905/116101';
import { t as _$$t4 } from '../905/117577';
import { h as _$$h4 } from '../905/123399';
import { sha1HexFromBytes } from '../905/125019';
import { J as _$$J4 } from '../905/125483';
import { J as _$$J3 } from '../905/125993';
import { KindEnum } from '../905/129884';
import { A as _$$A7 } from '../905/139173';
import { ScrollContainer } from '../905/143421';
import { _ as _$$_5 } from '../905/144222';
import { e as _$$e9 } from '../905/149844';
import { t as _$$t5 } from '../905/150656';
import { hideModal, popModalStack, showModalHandler } from '../905/156213';
import { ServiceCategories } from '../905/165054';
import { UpsellModalType } from '../905/165519';
import { L as _$$L3 } from '../905/173490';
import { rA as _$$rA, bL, ke, QB, y_ } from '../905/174266';
import { P as _$$P2 } from '../905/175083';
import { oh as _$$oh, jX, kh, R4, y8, Z7 } from '../905/188169';
import { permissionScopeHandler as _$$l2, scopeAwareFunction as _$$nc } from '../905/189185';
import { P as _$$P7 } from '../905/201667';
import { h as _$$h5 } from '../905/207101';
import { A as _$$A18 } from '../905/215698';
import { isInvalidValue, isValidValue, MIXED_MARKER, normalizeValue, valueOrFallback } from '../905/216495';
import { Cn } from '../905/225265';
import { n6 as _$$n } from '../905/234821';
import { z as _$$z } from '../905/239603';
import { sanitizeHtml } from '../905/241044';
import { A as _$$A3 } from '../905/251970';
import { PluginUIManager } from '../905/261467';
import { V as _$$V4 } from '../905/261687';
import { n as _$$n5 } from '../905/264891';
import { createReduxSubscriptionAtomWithState } from '../905/270322';
import { useSelectionProperty, useSelectionPropertyValue } from '../905/275640';
import { AutoInteractableWrapper } from '../905/277716';
import { Cj } from '../905/291654';
import { Wv as _$$Wv, IA } from '../905/291714';
import { y as _$$y } from '../905/292472';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { v as _$$v3 } from '../905/318279';
import { B as _$$B3 } from '../905/330741';
import { a as _$$a9 } from '../905/339331';
import { I as _$$I2 } from '../905/342732';
import { P as _$$P } from '../905/347284';
import { P as _$$P3 } from '../905/351996';
import { UpgradeAction } from '../905/370443';
import { selectCurrentUser } from '../905/372672';
import { W as _$$W2 } from '../905/378870';
import { deepEqual } from '../905/382883';
import { Q as _$$Q2 } from '../905/384324';
import { u as _$$u7 } from '../905/389684';
import { X as _$$X4 } from '../905/399133';
import { LazyInputForwardRef } from '../905/408237';
import { O as _$$O2 } from '../905/410575';
import { $ as _$$$3 } from '../905/411599';
import { useLibraries } from '../905/420347';
import { c as _$$c3 } from '../905/425573';
import { F as _$$F9 } from '../905/427107';
import { i as _$$i2 } from '../905/433860';
import { e as _$$e5 } from '../905/435763';
import { useModalManager } from '../905/437088';
import { k as _$$k6, P as _$$P4 } from '../905/437398';
import { UV } from '../905/438367';
import { Link } from '../905/438674';
import { I as _$$I } from '../905/439783';
import { w as _$$w2 } from '../905/442596';
import { IconButton } from '../905/443068';
import { k as _$$k7 } from '../905/443820';
import { w4, y1 } from '../905/445814';
import { trackEventAnalytics } from '../905/449184';
import { $ as _$$$ } from '../905/455748';
import { K as _$$K4 } from '../905/459096';
import { E as _$$E5 } from '../905/465157';
import { jB, Uh } from '../905/465941';
import { L as _$$L4 } from '../905/473569';
import { V as _$$V5 } from '../905/477816';
import { e as _$$e0 } from '../905/483726';
import { u as _$$u5 } from '../905/486140';
import { Z as _$$Z2 } from '../905/498136';
import { C as _$$C } from '../905/504203';
import { Y as _$$Y3 } from '../905/506207';
import { r6 as _$$r2 } from '../905/507950';
import { appendUserIdToUrl, appendNavigationContext } from '../905/508367';
import { l as _$$l3 } from '../905/509505';
import { RecordableButton } from '../905/511649';
import { h as _$$h3 } from '../905/513745';
import { C as _$$C2 } from '../905/520159';
import { j as _$$j2 } from '../905/521149';
import { Button, ButtonWide } from '../905/521428';
import { j as _$$j3 } from '../905/523935';
import { q as _$$q3 } from '../905/524117';
import { A as _$$A9, O as _$$O3 } from '../905/536006';
import { globalPerfTimer } from '../905/542194';
import { r6 as _$$r3 } from '../905/542608';
import { F as _$$F3 } from '../905/544329';
import { P as _$$P5 } from '../905/547523';
import { s as _$$s4 } from '../905/551945';
import { a as _$$a7 } from '../905/558168';
import { LM, PK, vK } from '../905/566585';
import { N as _$$N2 } from '../905/568293';
import { AH, V0 } from '../905/571648';
import { a as _$$a8 } from '../905/575557';
import { VisualBellIcon } from '../905/576487';
import { k as _$$k4 } from '../905/582200';
import { x as _$$x2 } from '../905/587214';
import { O as _$$O4 } from '../905/587457';
import { D as _$$D2 } from '../905/591570';
import { getFeatureFlags } from '../905/601108';
import { QL } from '../905/609392';
import { customHistory } from '../905/612521';
import { setupThemeContext } from '../905/614223';
import { canvasGridAtom } from '../905/618447';
import { jS, Q1 } from '../905/619652';
import { R as _$$R3 } from '../905/621802';
import { convertTeamToRaw } from '../905/628874';
import { T as _$$T3 } from '../905/632137';
import { ButtonPrimitive } from '../905/632989';
import { useSyncedRef } from '../905/633914';
import { F as _$$F5 } from '../905/634016';
import { eo as _$$eo, fp as _$$fp2 } from '../905/634218';
import { getVisibleTheme } from '../905/640017';
import { X as _$$X3 } from '../905/647103';
import { R as _$$R7 } from '../905/649743';
import { FeatureFlag } from '../905/652992';
import { y as _$$y2 } from '../905/661502';
import { communityShelfService } from '../905/665703';
import { oW as _$$oW } from '../905/675859';
import { e as _$$e8 } from '../905/678389';
import { p as _$$p6 } from '../905/682418';
import { g as _$$g2 } from '../905/687265';
import { e2 as _$$e6, kF as _$$kF, sp as _$$sp, G8, HP, Km, Qr } from '../905/690539';
import { Uw } from '../905/698759';
import { UN } from '../905/700578';
import { s as _$$s2 } from '../905/702260';
import { L as _$$L } from '../905/704296';
import { sortByPosition, sortByPositionWithDefault } from '../905/706046';
import { U as _$$U2 } from '../905/708285';
import { n8 as _$$n8, T_ } from '../905/713167';
import { setupResourceAtomHandler, liveStoreInstance } from '../905/713695';
import { pn as _$$pn, If } from '../905/714538';
import { SvgComponent, V as _$$V2 } from '../905/714743';
import { l as _$$l } from '../905/716947';
import { S as _$$S } from '../905/720922';
import { E as _$$E7 } from '../905/730894';
import { Point } from '../905/736624';
import { E as _$$E3 } from '../905/737393';
import { ConsumptionPaywallModalPlansPricing } from '../905/739964';
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from '../905/751457';
import { H as _$$H2, i as _$$i3 } from '../905/777871';
import { I as _$$I3 } from '../905/783004';
import { cq as _$$cq } from '../905/794154';
import { n as _$$n6 } from '../905/796896';
import { K as _$$K5 } from '../905/799615';
import { f as _$$f } from '../905/809171';
import { z as _$$z6 } from '../905/821223';
import { KeyboardReceiver } from '../905/826900';
import { Spacer, AutoLayout } from '../905/470281';
import { q as _$$q } from '../905/838985';
import { useCurrentUserOrgId, useCurrentUserOrg } from '../905/845253';
import { Um } from '../905/848862';
import { isVsCodeEnvironment } from '../905/858738';
import { FDocumentType } from '../905/862883';
import { u as _$$u8 } from '../905/866761';
import { bL as _$$bL4, RT } from '../905/867927';
import { vu } from '../905/870778';
import { generateUUIDv4 } from '../905/871474';
import { b as _$$b3 } from '../905/874849';
import { A as _$$A14 } from '../905/891805';
import { V as _$$V3 } from '../905/900932';
import { bL as _$$bL } from '../905/911410';
import { e as _$$e7 } from '../905/916195';
import { A as _$$A6 } from '../905/920165';
import { a as _$$a5 } from '../905/925868';
import { q as _$$q7 } from '../905/932270';
import { W as _$$W6 } from '../905/933320';
import { lQ as _$$lQ } from '../905/934246';
import { Sn } from '../905/946805';
import { t as _$$t6 } from '../905/947268';
import { Uh as _$$Uh } from '../905/956994';
import { B as _$$B2 } from '../905/957400';
import { cn as _$$cn, TS } from '../905/959568';
import { a as _$$a4 } from '../905/964520';
import { O as _$$O } from '../905/969533';
import { d as _$$d3 } from '../905/976845';
import { gg, Rk } from '../905/981217';
import { TextWithTruncation } from '../905/984674';
import { postUserFlag } from '../905/985254';
import { colorCSSManipulatorInstance } from '../905/989956';
import { X as _$$X2 } from '../1250/115566';
import { nR as _$$nR, RG, XF } from '../1250/182479';
import { Q as _$$Q } from '../1250/220026';
import { a2 as _$$a3, aZ as _$$aZ, fp as _$$fp, pI as _$$pI, pK as _$$pK, _M, g5, gF, Gu, Ij, jL, jv, M1, Nd, TE, Th, Ui, v3, VU } from '../1250/322393';
import { F as _$$F8 } from '../1250/368860';
import { ah as _$$ah, iW as _$$iW, p9 as _$$p2, px as _$$px, rG as _$$rG, T5 as _$$T, Vg as _$$Vg, DM, EI, ON } from '../1250/444794';
import { r5 as _$$r, AO, go, Kq, YS } from '../1250/447088';
import { yH } from '../1250/461992';
import { Z as _$$Z } from '../1250/621895';
import { z as _$$z4 } from '../1250/993385';
import { $ as _$$$6 } from '../1291/295522';
import { W as _$$W5 } from '../1291/451154';
import { uU as _$$uU, FN } from '../1291/539089';
import { s as _$$s7 } from '../1291/549862';
import { Rz } from '../1291/846441';
import { c5 as _$$c, pw as _$$pw, XW } from '../1528/157131';
import { $ as _$$$8 } from '../1528/660656';
import { o as _$$o } from '../1528/709529';
import { f as _$$f2 } from '../1528/716387';
import { A as _$$A12 } from '../1617/720598';
import { z as _$$z7 } from '../3271/42512';
import { t7 as _$$t3, un as _$$un, qz } from '../3271/440214';
import { e as _$$e } from '../3271/584206';
import { d as _$$d5 } from '../3682/659785';
import { s as _$$s1 } from '../3682/764731';
import { A as _$$A1 } from '../3850/824007';
import { W as _$$W } from '../5132/887999';
import { A as _$$A10 } from '../5724/56519';
import { A as _$$A11 } from '../5724/768410';
import { u as _$$u3 } from '../6388/39003';
import { Hg, Zc } from '../6388/64652';
import { v as _$$v5 } from '../6388/254246';
import { Y as _$$Y2 } from '../6388/262412';
import { K as _$$K7 } from '../6388/341838';
import { cH as _$$cH, mA as _$$mA } from '../6388/447908';
import { g as _$$g4 } from '../6388/491290';
import { F as _$$F6 } from '../6388/618426';
import { UB } from '../6388/685012';
import { G as _$$G2 } from '../6388/697965';
import { v as _$$v } from '../6388/904362';
import { v as _$$v2 } from '../6388/913037';
import { c3 as _$$c7, DG, jZ, YB } from '../6388/934960';
import { A as _$$A5 } from '../6828/625002';
import { A as _$$A0 } from '../6828/673039';
import { _8, gH, J_ } from '../7222/396421';
import { j as _$$j5 } from '../8618/256463';
import { Y as _$$Y4 } from '../8618/378618';
import { _ as _$$_3 } from '../8618/427799';
import { $ as _$$$2, _ as _$$_2 } from '../8618/537054';
import { j as _$$j6, p as _$$p5 } from '../8618/896045';
import { s as _$$s5 } from '../9314/287043';
import { A as _$$A16 } from '../9314/687951';
import { J as _$$J5, En } from '../9410/28424';
import { yx } from '../9410/43627';
import { R as _$$R5 } from '../9410/46722';
import { b as _$$b5, G as _$$G5 } from '../9410/59055';
import { h as _$$h } from '../9410/60125';
import { AP, O7 } from '../9410/60600';
import { Fj as _$$Fj, me as _$$me, Vg } from '../9410/148230';
import { J as _$$J8 } from '../9410/165619';
import { A as _$$A22 } from '../9410/188255';
import { l as _$$l4 } from '../9410/331071';
import { _8 as _$$_ } from '../9410/430140';
import { EA, SQ } from '../9410/499229';
import { V as _$$V } from '../9410/526350';
import { K as _$$K3 } from '../9410/565440';
import { $ as _$$$4 } from '../9410/589087';
import { $k } from '../9410/607888';
import { J as _$$J6 } from '../9410/617561';
import { Q as _$$Q3 } from '../9410/629866';
import { mc as _$$mc, DD } from '../9410/640042';
import { x$ as _$$x$2, Fp } from '../9410/692397';
import { e as _$$e1 } from '../9410/707590';
import { Nz, X5 } from '../9410/728210';
import { G as _$$G4 } from '../9410/729166';
import { s as _$$s6 } from '../9410/760762';
import { qn, XI } from '../9410/793186';
import { c as _$$c8 } from '../9410/794676';
import { v as _$$v6 } from '../9410/916286';
import { o as _$$o2 } from '../9410/935965';
import { sk as _$$sk } from '../9410/973081';
import { g as _$$g3 } from '../9410/995605';
import { z as _$$z2 } from '../940032c6/245112';
import { a as _$$a2 } from '../940032c6/310444';
import { A as _$$A15 } from '../af221b13/388839';
import { K as _$$K6 } from '../b2835def/230877';
import u_ from '../b2835def/987714';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { renderAvatar } from '../figma_app/3731';
import { H as _$$H } from '../figma_app/7677';
import { a8 as _$$a, Dm } from '../figma_app/8833';
import { EI as _$$EI } from '../figma_app/21029';
import { um as _$$um, atom, atomStoreManager, AY, useAtomValueAndSetter, useAtomWithSubscription, Xr } from '../figma_app/27355';
import { CVP, Ep1, j4N, oBL } from '../figma_app/27776';
import { GQ as _$$GQ, nJ as _$$nJ, bQ } from '../figma_app/32128';
import { useLatestRef } from '../figma_app/922077';
import { pO as _$$pO } from '../figma_app/42945';
import { TeamCanAdmin } from '../figma_app/43951';
import { Kk } from '../figma_app/47085';
import { kF, Q6 } from '../figma_app/48566';
import { FEditorType } from '../figma_app/53721';
import { getViewportInfo, scaleRect } from '../figma_app/62612';
import { v as _$$v4 } from '../figma_app/79979';
import { getObservableValue } from '../figma_app/84367';
import { showPickerThunk, hidePickerThunk } from '../figma_app/91703';
import { Iy, XS } from '../figma_app/95367';
import { isNotNullish, isNullish } from '../figma_app/95419';
import { dP as _$$dP2 } from '../figma_app/119475';
import { n8 as _$$n7, Kd } from '../figma_app/121043';
import { Lk as _$$Lk } from '../figma_app/122682';
import { Rp } from '../figma_app/149989';
import { Tv } from '../figma_app/151869';
import { useSubscribedLibraries } from '../figma_app/155728';
import { GV, P5 } from '../figma_app/159296';
import { JR, Qp, Wi } from '../figma_app/162641';
import { useStrictDeepEqualSceneValue, useDeepEqualSceneValue } from '../figma_app/167249';
import { buildUploadUrl, isLocalCluster, isProdCluster } from '../figma_app/169182';
import { Kl, OU } from '../figma_app/175258';
import { N as _$$N } from '../figma_app/176280';
import { ScrubbableInput } from '../figma_app/178475';
import { APIParameterUtils, createPaginatedValidator } from '../figma_app/181241';
import { dh as _$$dh } from '../figma_app/186343';
import { FFileType, FOrganizationLevelType, FPlanNameType } from '../figma_app/191312';
import { yesNoTrackingEnum } from '../figma_app/198712';
import { pt as _$$pt } from '../figma_app/198840';
import { ih as _$$ih } from '../figma_app/200284';
import { B0 } from '../figma_app/201703';
import { Uf } from '../figma_app/223206';
import { rM as _$$rM } from '../figma_app/241541';
import { p as _$$p7, vo as _$$vo, xn as _$$xn2, MM } from '../figma_app/246831';
import { hasJubileePermissionForDesign } from '../figma_app/251115';
import { G as _$$G, h as _$$h2 } from '../figma_app/257072';
import { S7 } from '../figma_app/259578';
import { DialogBody, DialogTitle, DialogActionStrip, DialogContents, DialogFooter, DialogHeader } from '../figma_app/272243';
import { cZ as _$$cZ } from '../figma_app/272902';
import { rgbToNormalized, packNormalizedRgb, colorsEqual } from '../figma_app/273493';
import { isBuzzTemplatePickerCmtyShelvesEnabled, isBuzzImportFromDesignEnabled } from '../figma_app/275462';
import { StyleType } from '../figma_app/276332';
import { DesignToolType } from '../figma_app/277543';
import { useSubscription } from '../figma_app/288654';
import { L as _$$L6 } from '../figma_app/297778';
import { ResourceTypeEnum } from '../figma_app/306946';
import { $I, MK } from '../figma_app/322845';
import { SortOptions } from '../figma_app/324237';
import { AO as _$$AO, KT } from '../figma_app/325158';
import { useFocusedNodeId, isNotInFocusedNodeView, isFullscreenAndInFocusedNodeView, getFocusedNodeId, canShowBuzzTemplateSets } from '../figma_app/327588';
import { hasImageFill, useAllSelectedNodesHaveVideoFill, useAnyCooperFrameHasVideoPaint, useCooperFrameAssetCategorySwitch, useCooperFrameSelectionInfo, useNodeMediaPaintById, useSelectedImageOrVideoNodeGuids, useSelectedComponentLibraryKey, selectComponentCooperFrameIds, useIsCooperBulkCreateMode } from '../figma_app/334505';
import { jH, Tj, Vq } from '../figma_app/342207';
import { U1 } from '../figma_app/343967';
import { hasValidSubscription } from '../figma_app/345997';
import { p as _$$p4 } from '../figma_app/353099';
import { c1 as _$$c5, Yh } from '../figma_app/357047';
import { isSelfDesignMode, syncDesignModePermission } from '../figma_app/357367';
import { lW as _$$lW, tM as _$$tM, uh as _$$uh, AE } from '../figma_app/370763';
import { G as _$$G3, T as _$$T6 } from '../figma_app/373780';
import { oe as _$$oe } from '../figma_app/376315';
import { Aw } from '../figma_app/383828';
import { LH } from '../figma_app/384673';
import { getColorAtStop, validateGradientPaint, isGradientType, rotatePaint, getSolidPaint, paintManager, getImageOrVideoPaint } from '../figma_app/385874';
import { useSelectedSlideRowGuids, useSelectedCooperFrameId, useSelectedCooperFrameIds, useCooperFrameGuids } from '../figma_app/396464';
import { aq as _$$aq } from '../figma_app/399472';
import { rg as _$$rg } from '../figma_app/401069';
import { R as _$$R } from '../figma_app/421558';
import { u7 as _$$u, hg } from '../figma_app/425489';
import { A as _$$A2 } from '../figma_app/426577';
import { hasContent, getTeamTemplateLg, isCooperTemplateAsset } from '../figma_app/427318';
import { aE as _$$aE } from '../figma_app/433401';
import { W1 } from '../figma_app/439493';
import { q as _$$q4 } from '../figma_app/446378';
import { D as _$$D, ZB } from '../figma_app/451499';
import { fullscreenValue } from '../figma_app/455680';
import { useCurrentPlanUser, useIsProOrStudentPlan, useCurrentPrivilegedPlan, useCurrentPublicPlan } from '../figma_app/465071';
import { throwTypeError } from '../figma_app/465776';
import { d4 as _$$d4, be } from '../figma_app/474636';
import { V$ } from '../figma_app/479760';
import { aZ as _$$aZ2 } from '../figma_app/481279';
import { Xo } from '../figma_app/482495';
import { roundTo2Decimals } from '../figma_app/492908';
import { s as _$$s8 } from '../figma_app/504088';
import { Ep } from '../figma_app/504823';
import { u as _$$u4 } from '../figma_app/514229';
import { useCurrentFileKey, selectCurrentFile, openFileKeyAtom } from '../figma_app/516028';
import { ie as _$$ie, Z as _$$Z3 } from '../figma_app/524655';
import { t as _$$t2 } from '../figma_app/532797';
import { userFlagAtomFamily } from '../figma_app/545877';
import { S as _$$S2 } from '../figma_app/552746';
import { u4 as _$$u2, _o, DN, I$, kB } from '../figma_app/552821';
import { A as _$$A } from '../figma_app/556971';
import { ne as _$$ne, RE } from '../figma_app/563413';
import { jL as _$$jL } from '../figma_app/576669';
import { FP, hO, zM } from '../figma_app/580736';
import { lX as _$$lX } from '../figma_app/588397';
import { w as _$$w } from '../figma_app/588564';
import { setupDynamicConfigHandler } from '../figma_app/594947';
import { a as _$$a6, z as _$$z3 } from '../figma_app/601188';
import { setupRemovableAtomFamily } from '../figma_app/615482';
import { $z, e6 as _$$e3, Me } from '../figma_app/617427';
import { i as _$$i4 } from '../figma_app/622160';
import { li as _$$li, Gi, O$, RD, wv } from '../figma_app/622574';
import { getColorSpaceString } from '../figma_app/622881';
import { processImageWithThumbnail } from '../figma_app/624361';
import { fI } from '../figma_app/626177';
import { UG, Wc } from '../figma_app/628987';
import { JT } from '../figma_app/632248';
import { isEventType } from '../figma_app/632319';
import { LibraryTabEnum, isPublishedLibraryWithAssets } from '../figma_app/633080';
import { hg as _$$hg } from '../figma_app/635062';
import { AssetCategoryEnum, assetCategoryAtom } from '../figma_app/639711';
import { xn as _$$xn, Yk } from '../figma_app/644079';
import { $ as _$$$7 } from '../figma_app/644304';
import { R as _$$R2 } from '../figma_app/652260';
import { _ as _$$_4 } from '../figma_app/658134';
import { X as _$$X } from '../figma_app/668312';
import { Zr } from '../figma_app/678782';
import { useCachedSubtree } from '../figma_app/679183';
import { rp as _$$rp } from '../figma_app/703988';
import { wY } from '../figma_app/708845';
import { useIsProgressBarHiddenOrLocked, useSceneGraphSelector, useAppModelProperty, useOnSelectionChange, useSceneGraphSelection } from '../figma_app/722362';
import { tG as _$$tG } from '../figma_app/723183';
import { Ay as _$$Ay2, Tu } from '../figma_app/724968';
import { E as _$$E4 } from '../figma_app/726115';
import { lB as _$$lB, tB as _$$tB, EE } from '../figma_app/731583';
import { getSidebarSplitPosition, getColorFormat, shouldRenderRulers, getNudgeAmounts, EditorPreferencesApi } from '../figma_app/740163';
import { renameNode, replaceSelection, setPropertiesPanelTab } from '../figma_app/741237';
import { Jo } from '../figma_app/755783';
import { az as _$$az, ce as _$$ce, d2 as _$$d2, xB as _$$xB, Co, EC, Ef, Fs, Hb, hc, Ku, Lm, Lo, mF, Tw, U_, YA } from '../figma_app/755939';
import { AppStateTsApi, CooperHelpers, CooperTemplateTypesTsBindings, DesignGraphElements, DesignWorkspace, DiagramElementType, Fullscreen, GradientToolApi, ImageToolsBindings, ItemType, LayoutTabType, NodePropertyCategory, SceneGraphHelpers, SchemaJoinStatus, SelfDesignType, SocialMediaFormats, UIVisibilitySetting, VariableResolvedDataType, ViewType } from '../figma_app/763686';
import { wV } from '../figma_app/779965';
import { parsePxInt, parsePxNumber } from '../figma_app/783094';
import { Ad } from '../figma_app/811257';
import { _YF } from '../figma_app/822011';
import { TrackingProvider } from '../figma_app/831799';
import { F as _$$F2 } from '../figma_app/832508';
import { WH } from '../figma_app/836943';
import { dM as _$$dM, Eh } from '../figma_app/837840';
import { rE as _$$rE, bW, Oj } from '../figma_app/850075';
import { setupMenu, MenuRootComp, MenuContainerComp, MenuItemComp, MenuItemLead, MenuGroupComp } from '../figma_app/860955';
import { Ag as _$$Ag, B3 } from '../figma_app/862289';
import { s as _$$s0 } from '../figma_app/874592';
import { generateRecordingKey, SKIP_RECORDING } from '../figma_app/878298';
import { selectSceneGraphSelectionKeys } from '../figma_app/889655';
import { isInteractionOrEvalMode, isInteractionPathCheck } from '../figma_app/897289';
import { trackFileEventWithStore } from '../figma_app/901889';
import { j as _$$j, k as _$$k2 } from '../figma_app/904944';
import { mY } from '../figma_app/915281';
import { utilityNoop } from '../figma_app/918700';
import { kx } from '../figma_app/920333';
import { searchStartSession, searchEndSession } from '../figma_app/925970';
import { capitalize } from '../figma_app/930338';
import { AV, Gb, Oe } from '../figma_app/933328';
import { _Y as _$$_Y } from '../figma_app/936646';
import { EditorUIState } from '../figma_app/941983';
import { Vi } from '../figma_app/955650';
import { _q, PA } from '../figma_app/957070';
import { tZ as _$$tZ } from '../figma_app/960196';
import { T as _$$T4 } from '../figma_app/962636';
import { fG, NH } from '../figma_app/973927';
import { KD } from '../figma_app/975811';
import { trackFileClicked } from '../figma_app/976345';
import { jv as _$$jv, Wh as _$$Wh } from '../figma_app/985200';
import { A as _$$A19 } from '../vendor/21595';
import { useDebouncedCallback } from 'use-debounce';
import { P as _$$P6 } from '../vendor/348225';
import s, { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'use-debounce';
import xh from '../vendor/907065';
import { N as _$$N3 } from '../vendor/930821';
import { createPortal } from 'react-dom';
import { z as _$$z5 } from '../vendor/999105';
let l;
let r;
let i;
class h extends Error {
  constructor() {
    super('Export canceled');
    this.name = 'ExportCanceledError';
  }
}
!function (e) {
  e.AVC_MAIN_LEVEL_4 = 'avc1.4d0028';
  e.AVC_HIGH_LEVEL_5 = 'avc1.640032';
  e.AVC_HIGH_LEVEL_6 = 'avc1.64003c';
  e.AVC_HIGH_LEVEL_6_2 = 'avc1.64003e';
  e.AVC_HIGH_PROGRESSIVE_LEVEL_6_2 = 'avc1.64083e';
  e.AVC_HIGH_10_LEVEL_4 = 'avc1.6e0028';
  e.AVC_HIGH_10_LEVEL_5 = 'avc1.6e0032';
  e.AVC_HIGH_10_LEVEL_6 = 'avc1.6e003c';
  e.AVC_HIGH_10_INTRA_LEVEL_1 = 'avc1.6e100a';
  e.AVC_HIGH_10_INTRA_LEVEL_6 = 'avc1.6e103c';
  e.AVC_HIGH_4_2_2_LEVEL_6 = 'avc1.7a003c';
  e.AVC_HIGH_4_4_4_PREDICTIVE_LEVEL_6 = 'avc1.f4003c';
  e.AV1_MAIN_LEVEL_4 = 'av01.0.08M.08';
  e.VP9_PROFILE_2_LEVEL_1 = 'vp09.02.10.10.01.09.16.09.01';
  e.HEVC_BASIC = 'hev1.1.6.L93.90';
  e.HEVC_MAIN_PROGRESSIVE_LEVEL_3_1 = 'hvc1.1.6.L93.B0';
}(i || (i = {}));
let y = j;
function K(e, t) {
  let n = [];
  !function e(l, r = 0) {
    if (r > 10) return;
    let i = t.get(l);
    if (!i) return;
    let o = i && i.hasEnabledVideoPaint ? i.guid : null;
    o && n.push(o);
    i.childrenGuids && i.childrenGuids.forEach(t => {
      e(t, r + 1);
    });
  }(e);
  return n;
}
function W() {
  let e = function () {
    let e = useCooperFrameGuids();
    let t = isFullscreenAndInFocusedNodeView();
    let n = useFocusedNodeId();
    return useDeepEqualSceneValue((e, t, n, l) => {
      let r = [];
      if (n) {
        let t = e.get(l);
        t?.hasVideoPaintOrHasVideoPaintDescendant && r.push(l);
        return r;
      }
      t.forEach(t => {
        let n = e.get(t);
        n?.hasVideoPaintOrHasVideoPaintDescendant && r.push(t);
      });
      return r;
    }, e, t, n);
  }();
  return e.length ? jsx(H, {
    buzzFrameIds: e
  }) : null;
}
function H({
  buzzFrameIds: e
}) {
  let t = function (e) {
    let t = useCallback((e, t) => e.nodeId ? {
      nodeId: e.nodeId,
      position: t
    } : void 0, []);
    return _$$tB('BuzzVideoOverlays', e, t, {
      useFlushSyncExpensive: !0
    });
  }(useMemo(() => e, [e]));
  let n = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  return n ? jsx(Fragment, {
    children: e.map(e => {
      let l = t[e]?.position;
      return l ? jsx(X, {
        buzzFrameId: e,
        position: l,
        viewportInfo: n
      }, e) : null;
    })
  }) : null;
}
function X({
  position: e,
  viewportInfo: t,
  buzzFrameId: n
}) {
  let [l, r] = useState(!1);
  let i = useMemo(() => scaleRect(t, e), [t, e]);
  let s = useCallback(() => {
    r(!0);
  }, []);
  let d = {
    position: 'fixed',
    width: i.width,
    height: i.height,
    top: t.y,
    left: t.x,
    transform: `translate(${i.x}px, ${i.y}px) rotate(${e.angle}deg)`,
    transformOrigin: 'top left',
    pointerEvents: 'none'
  };
  return DD(n, {
    mediaPlayBadgeRadius: 32
  }) ? null : jsx('div', {
    style: d,
    onMouseEnter: s,
    children: l || isInteractionPathCheck() ? jsx(Y, {
      viewportInfo: t,
      buzzFrameId: n,
      viewportNodeBounds: i
    }) : jsx('div', {
      className: 'x10l6tqk x8ow593 xibut22 x10w6t97 x78zum5 x6s0dn4 x1q0g3np xg2d0mh x1nd36k x19y5rnk x67bb7w',
      children: jsx(_$$c, {
        videoState: 'dormant',
        buttonSize: 'lg',
        togglePlay: _$$lQ,
        inExportView: !1
      })
    })
  });
}
function Y({
  buzzFrameId: e,
  viewportInfo: t,
  viewportNodeBounds: n
}) {
  let l = useSceneGraphSelector();
  let r = useSelectedCooperFrameId() === e;
  let i = useMemo(() => K(e, l), [e, l]);
  let [s, c, u] = function (e, t, n, l) {
    let [r, i] = useState('dormant');
    let [o, s, c] = useSyncedRef([]);
    let [u, x, p] = useSyncedRef([]);
    let [m, h, g] = useSyncedRef([]);
    let [f] = useAtomValueAndSetter(_$$oe);
    let b = useStrictDeepEqualSceneValue((e, t) => {
      let n = [];
      t.forEach(t => {
        let l = e.get(t);
        if (!l || !l.hasEnabledVideoPaint) return;
        let r = l.fills.findIndex(e => getImageOrVideoPaint(e)?.video?.hash);
        if (r === -1) return;
        let i = l.fills[r];
        i && i.video?.hash && n.push({
          nodeId: t,
          hexHash: sha1HexFromBytes(i.video.hash),
          paintIndex: r,
          showControls: !!(l.videoPlayback?.showControls || l.isInImmutableFrame)
        });
      });
      return n;
    }, e);
    let j = useMemo(() => b.map(e => {
      let t = f[e.nodeId]?.currentVolume;
      return t != null ? t : 1;
    }), [b, f]);
    let y = function (e, t, n, l, r, i, o, s) {
      let d = useRef(i);
      let c = useRef(o);
      return useCallback(async () => {
        if (e.length === 0) return;
        t('loading');
        let i = [];
        let o = [];
        let a = [];
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          let l = s[t];
          let r = document.createElement('video');
          r.crossOrigin = 'anonymous';
          r.autoplay = !1;
          r.muted = l === 0;
          r.volume = l ?? 1;
          r.preload = 'metadata';
          i.push(r);
          let u = document.createElement('div');
          u.appendChild(r);
          u.style.width = `${d.current}px`;
          u.style.height = `${c.current}px`;
          document.body.appendChild(u);
          o.push(u);
          a.push(_$$mc(null, r, n.hexHash));
        }
        let u = (await Promise.allSettled(a)).map((t, n) => {
          if (t.status === 'fulfilled') return t.value;
          {
            let l = e[n];
            console.error(`Failed to load video ${l.nodeId}:`, t.reason);
            return null;
          }
        }).filter(e => e != null);
        n(i);
        l(o);
        r(u);
        t('loaded');
      }, [e, t, n, l, r, s]);
    }(b, i, c, p, g, t, n, j);
    let E = useMemo(() => {
      let e = new XW();
      isInteractionOrEvalMode();
      return e;
    }, []);
    useEffect(() => () => {}, [E]);
    useEffect(() => {
      E.updateUnderlyingVideoState(s, r, y);
    }, [s, r, y, E]);
    let v = useCallback(({
      preserveEndedState: t
    } = {
      preserveEndedState: !1
    }) => {
      function n() {
        b.forEach(e => {
          let t = UN().get(e.nodeId);
          t && e.paintIndex != null && (AppStateTsApi?.markContainingIndependentLayerNodesDirty(t.guid) || AppStateTsApi?.invalidateCanvas(), AppStateTsApi?.moveFromIndependentRenderLayer(t.guid), t.invalidateCanvasSpaceBoundsForSelfAndParents());
        });
      }
      t && E.preserveStateForCleanup?.();
      m.current && (m.current.forEach(e => {
        if (e) {
          try {
            e.dispose();
          } catch (e) {
            console.error('Error disposing of video player', e);
          }
        }
      }), g([]));
      o.current && (o.current.forEach(e => {
        e && e.parentNode && e.remove();
      }), c([]));
      u.current && (u.current.forEach(e => {
        e && e.parentNode && e.remove();
      }), p([]));
      e.forEach(e => {
        AppStateTsApi?.removeAllVideoNodeReferences(e);
      });
      i('dormant');
      n();
      setTimeout(n, 0);
    }, [E, m, o, u, e, i, g, c, p, b]);
    let T = useRef(v);
    T.current = v;
    (function (e, t, n, l, r, i) {
      let o = useRef(i);
      o.current = i;
      useEffect(() => {
        n.length !== 0 && l.length !== 0 && t.length !== 0 && n.forEach((e, n) => {
          let r = l[n];
          let i = t[n];
          e && r && i && r.parentNode && i.paintIndex != null && (e.on('playing', () => {
            let e = UN().get(i.nodeId);
            if (e) {
              e.initializeVideoTextureInFillPaint(i.paintIndex, r.videoWidth, r.videoHeight);
              e.setVideoElementInFillPaint(i.paintIndex, r);
              AppStateTsApi?.moveToIndependentRenderLayer(e.guid);
              let t = () => {
                if (!o.current && (e = UN().get(i.nodeId))) {
                  let t = Math.floor(1e3 * r.currentTime);
                  e.setVideoCurrentTimeInFillPaint(i.paintIndex, t);
                  e.setVideoIsPlayingInFillPaint(i.paintIndex, !r.paused);
                  AppStateTsApi?.markContainingIndependentLayerNodesDirty(e.guid) || AppStateTsApi?.invalidateCanvas();
                  e.invalidateCanvasSpaceBoundsForSelfAndParents();
                }
              };
              if ('requestVideoFrameCallback' in HTMLVideoElement.prototype) {
                let e = () => {
                  t();
                  r.requestVideoFrameCallback(e);
                };
                e();
              } else {
                let e = () => {
                  t();
                  requestAnimationFrame(e);
                };
                e();
              }
            }
          }), (UN().get(i.nodeId)?.videoPlayback?.muted || isInteractionOrEvalMode()) && (e.muted(!0), e.volume(0)));
        });
      }, [e, t, n, l, r]);
    })(e, b, h, s, i, l);
    useEffect(() => () => {
      T.current({
        preserveEndedState: !1
      });
    }, []);
    useEffect(() => {
      let e = _$$tG().subscribeToContextLost(() => {
        T.current({
          preserveEndedState: !1
        });
      });
      return () => {
        e();
      };
    }, []);
    return [E, r, v];
  }(i, n.width, n.height, t.isPanning || t.isZooming);
  let [x, p] = useState(!1);
  useEffect(() => {
    function e(e) {
      return e.clientX < n.x || e.clientX > n.x + n.width || e.clientY < n.y || e.clientY > n.y + n.height;
    }
    let t = t => {
      e(t) && (p(!1), s?.triggerReset?.());
    };
    let l = t => {
      e(t) ? p(!0) : p(!1);
    };
    document.addEventListener('mousedown', t);
    document.addEventListener('mousemove', l);
    return () => {
      document.removeEventListener('mousedown', t);
      document.removeEventListener('mousemove', l);
    };
  }, [s, n, p]);
  return jsx(Fragment, {
    children: s && jsx('div', {
      'style': {
        pointerEvents: 'auto'
      },
      'data-testid': 'buzz-video-controls-container',
      'children': jsx(_$$pw, {
        videoPlayerAdapter: s,
        isLoading: c === 'loading',
        shouldHidePlaybackButton: !1,
        onEnded: () => {
          s.markAsWatched?.();
          u({
            preserveEndedState: !1
          });
        },
        onReset: () => {
          s.preserveStateForCleanup?.();
          u({
            preserveEndedState: !0
          });
        },
        nodeId: i[0] || '',
        isVideoNodeHovered: !0,
        isAssetSelected: r,
        hideControls: x
      })
    })
  });
}
function J() {
  let e = useAtomWithSubscription(_$$o);
  let [t, n] = useState(0);
  let l = Yk();
  let {
    leftOffset,
    rightOffset
  } = _$$h();
  let s = useSceneGraphSelector();
  let [d] = useAtomValueAndSetter(_$$oe);
  let c = useMemo(() => {
    let t = {
      ...y()(d, e => e.currentVolume)
    };
    e.mp4Configs.forEach(e => {
      if (e.includeAudio) return;
      let n = s.get(e.nodeId);
      n?.hasVideoPaintOrHasVideoPaintDescendant && K(e.nodeId, s).forEach(e => {
        t[e] = 0;
      });
    });
    return t;
  }, [d, e.mp4Configs, s]);
  let {
    setHasStartedExport,
    showProgressToast,
    setShowProgressToast,
    shouldStartExports,
    setShouldStartExports
  } = et(e);
  en(shouldStartExports, e, c, n, setShowProgressToast, setShouldStartExports, setHasStartedExport);
  let {
    isCanceling,
    handleCancelExport
  } = el(e, useCallback(() => {
    setShowProgressToast(!1);
    setShouldStartExports(!1);
    setHasStartedExport(!1);
    n(0);
    Z();
  }, [setHasStartedExport, setShouldStartExports, setShowProgressToast]));
  let v = Q(e, t);
  let S = ee(leftOffset, rightOffset, l + 10);
  let A = v.progressUnits > 0 ? t / v.progressUnits : 0;
  return jsx(setupThemeContext, {
    mode: 'dark',
    brand: 'cooper',
    children: showProgressToast && jsx('div', {
      className: 'xixxii4 xu96u03 x3m8u43 x78zum5 xl56j7k x6s0dn4 x14atkfc xlm99nl x67bb7w',
      style: S,
      children: jsxs(bL, {
        children: [jsx(ke, {
          progressFraction: A
        }), jsx(QB, {
          children: getI18nString('buzz.toolbar.export_modal.export_button_text_exporting', {
            assetCount: e.total
          })
        }), jsx(y_, {
          children: `${v.completed} of ${e.total}`
        }), e.mp4Configs.length > 0 && jsx(_$$rA, {
          action: handleCancelExport,
          disabled: isCanceling,
          children: getI18nString('cooper.toolbar.export_modal.cancel_export')
        })]
      })
    })
  });
}
let Q = (e, t) => {
  let {
    imageConfigs,
    pdfConfigs,
    mp4Configs
  } = e;
  let i = imageConfigs.length + pdfConfigs.length + mp4Configs.length;
  return {
    total: i,
    completed: Math.floor(t / 10),
    progressUnits: 10 * i
  };
};
let Z = () => {
  atomStoreManager.set(_$$o, {
    mp4Configs: [],
    imageConfigs: [],
    pdfConfigs: [],
    completed: 0,
    total: 0,
    isExporting: !1
  });
};
let ee = (e, t, n) => ({
  marginLeft: -1 * t,
  marginRight: -1 * e,
  bottom: n
});
let et = e => {
  let [t, n] = useState(!1);
  let [l, r] = useState(!1);
  let [i, o] = useState(!1);
  useEffect(() => {
    let {
      isExporting,
      total
    } = e;
    isExporting && total !== 0 && !t && (n(!0), r(!0), atomStoreManager.set(_$$o, {
      ...e,
      isExporting: !0
    }));
  }, [e, t]);
  useEffect(() => {
    l && t && !i && o(!0);
  }, [l, t, i]);
  return {
    setHasStartedExport: n,
    showProgressToast: l,
    setShowProgressToast: r,
    shouldStartExports: i,
    setShouldStartExports: o
  };
};
let en = (e, t, n, l, r, i, o) => {
  let d = useDispatch();
  let c = trackFileEventWithStore();
  useEffect(() => {
    if (!e) return;
    let {
      imageConfigs,
      pdfConfigs,
      mp4Configs
    } = t;
    let {
      total,
      progressUnits
    } = Q(t, 0);
    let g = 0;
    let f = e => {
      l(g += e);
      g >= progressUnits && b(total);
    };
    let b = e => {
      r(!1);
      i(!1);
      d(VisualBellActions.enqueue({
        message: getI18nString('cooper.toolbar.export_modal.visual_bell.exported_asset_success', {
          assetCount: e
        })
      }));
      Z();
      d(_$$rg());
      o(!1);
      l(0);
    };
    er(imageConfigs, f);
    ei(pdfConfigs, f);
    eo(mp4Configs, n, f, c);
  }, [e, t, d, n, c, l, r, i, o]);
};
let el = (e, t) => {
  let [n, l] = useState(!1);
  useEffect(() => {
    if (!n || e.mp4Configs.length === 0) return;
    let r = e => {
      isEventType(e, 'EXPORT_COMPLETED') && e.data.data.error && function (e) {
        let t = new h();
        return e.name === t.name;
      }(e.data.data.error) && (t(), l(!1), window.removeEventListener('message', r));
    };
    window.addEventListener('message', r);
    return () => window.removeEventListener('message', r);
  }, [n, e.mp4Configs.length, t]);
  return {
    isCanceling: n,
    handleCancelExport: () => {
      n || (l(!0), e.mp4Configs.length > 0 ? atomStoreManager.set(hg, {
        type: 'CANCEL_EXPORT'
      }) : (t(), l(!1)));
    }
  };
};
let er = (e, t) => {
  e.length > 0 && setTimeout(() => {
    Fullscreen?.exportFramesFromConfigs(e);
    t(10 * e.length);
  }, 0);
};
let ei = (e, t) => {
  e.length > 0 && e[0] && setTimeout(() => {
    let n = e[0];
    if (!n) return;
    let l = n.type === 'PDF Print' ? 1 : n.exportQuality;
    let r = n.colorProfile;
    let i = n.shouldAddPrintMarks;
    Fullscreen?.exportSelectedCooperFramesToPdf(e.map(e => e.nodeId), l, r, i);
    t(10 * e.length);
  }, 0);
};
let eo = (e, t, n, l) => {
  if (e.length > 0) {
    let r = e.map(e => e.nodeId);
    let i = Date.now();
    atomStoreManager.set(hg, {
      type: 'REQUEST_EXPORT',
      payload: {
        nodeIds: r,
        videoVolumeByNodeId: t
      }
    });
    let o = e => {
      isEventType(e, 'EXPORT_PROGRESS') ? void 0 !== e.data.data.progressPercent && n(1) : isEventType(e, 'EXPORT_COMPLETED') && (l('video_export_finished', {
        zipTime: (Date.now() - i) / 1e3,
        numFiles: r.length,
        exportType: 'mp4',
        failure: e.data.data.error
      }), window.removeEventListener('message', o));
    };
    window.addEventListener('message', o);
  }
};
let em = ep;
let ek = 'floating_panel__';
var eC = (e => (e.COLOR_PICKER = `${ek}color_picker`, e.ADJUST_IMAGE = `${ek}adjust_image`, e.ADJUST_VIDEO = `${ek}adjust_video`, e.ADJUST_TONE = `${ek}adjust_tone`, e.VARIANT_SWAP = `${ek}variant_swap`, e))(eC || {});
var eA = (e => (e.COMMENTS = 'docked_panel__comments', e))(eA || {});
function ez(e) {
  return Object.values(eA).includes(e);
}
function eN(e) {
  return Object.values(eC).includes(e);
}
var eR = (e => (e.OPEN = 'open_panel', e.CLOSE = 'close_panel', e.TOGGLE = 'toggle_panel', e))(eR || {});
function ew() {
  let [e, t] = useAtomValueAndSetter(eO);
  let n = e.activePanel;
  return {
    activePanel: n,
    openPanel: useCallback(e => {
      t({
        type: 'open_panel',
        payload: eL(e)
      });
    }, [t]),
    closePanel: useCallback(() => t({
      type: 'close_panel'
    }), [t]),
    togglePanel: useCallback(e => {
      t({
        type: 'toggle_panel',
        payload: eL(e)
      });
    }, [t])
  };
}
function eL(e) {
  return typeof e == 'object' ? e : {
    panel: e
  };
}
function eP() {
  return useAtomWithSubscription(eO).activePanel;
}
let eO = _$$um({
  activePanel: null
}, (e, t) => {
  switch (t.type) {
    case 'open_panel':
      ez(t.payload.panel) ? DN() : _$$u2();
      return {
        ...e,
        activePanel: t.payload
      };
    case 'close_panel':
      if (!e.activePanel) return e;
      ez(e.activePanel.panel) && _$$u2();
      return {
        ...e,
        activePanel: null
      };
    case 'toggle_panel':
      if (!e.activePanel) {
        ez(t.payload.panel) ? DN() : _$$u2();
        return {
          ...e,
          activePanel: t.payload
        };
      }
      if (e.activePanel.panel === t.payload.panel) {
        _$$u2();
        return {
          ...e,
          activePanel: null
        };
      }
      ez(t.payload.panel) ? DN() : _$$u2();
      return {
        ...e,
        activePanel: t.payload
      };
    default:
      return e;
  }
});
let eJ = parsePxNumber(j4N);
var eQ = (e => (e.SelectTools = 'SelectTools', e.ShapeTools = 'ShapeTools', e))(eQ || {});
function eZ() {
  let e = U1();
  let t = isSelfDesignMode();
  let n = useAtomWithSubscription(_$$o2);
  let l = useIsProgressBarHiddenOrLocked();
  let r = getObservableValue(AppStateTsApi?.interopToolMode(), SelfDesignType.SELF);
  let i = useIsCooperBulkCreateMode();
  let s = r === SelfDesignType.DESIGN && !i;
  let {
    topLevelMode,
    activateTool,
    activeToolId,
    editModeType
  } = _$$rM(_$$lW);
  let h = topLevelMode === ViewType.HISTORY;
  let {
    openPanel,
    activePanel
  } = ew();
  let b = _$$uh();
  let j = _$$n();
  let {
    activeSecondaryToolbeltId,
    setActiveSecondaryToolbeltId,
    closeSecondaryToolbelt
  } = LH();
  let T = !!selectCurrentUser();
  let I = AE();
  useEffect(() => {
    activeToolId !== DesignGraphElements.VECTOR_BEND && activeToolId !== DesignGraphElements.VECTOR_PAINT_BUCKET && activeToolId !== DesignGraphElements.SHAPE_BUILDER && (editModeType === LayoutTabType.VECTOR ? setActiveSecondaryToolbeltId(_$$R2.PenTool) : setActiveSecondaryToolbeltId(null));
  }, [activeToolId, editModeType, setActiveSecondaryToolbeltId]);
  let S = useMemo(() => [jsxs(kF, {
    children: [jsx(_$$N, {
      toolId: DesignGraphElements.SELECT,
      icon: jsx(_$$H, {}),
      onActivateTool: activateTool,
      activeToolId,
      tooltipText: getI18nString('fullscreen_actions.set-tool-default'),
      tooltipShortcut: b(DesignGraphElements.SELECT)
    }, 'select'), jsx(_$$N, {
      toolId: DesignGraphElements.HAND,
      icon: jsx(_$$t2, {}),
      onActivateTool: activateTool,
      activeToolId,
      tooltipText: getI18nString('fullscreen_actions.set-tool-hand'),
      tooltipShortcut: b(DesignGraphElements.HAND)
    }, 'hand'), !h && jsx(_$$N, {
      toolId: DesignGraphElements.COMMENTS,
      icon: j > 0 ? jsx(_$$X, {}) : jsx(_$$f, {}),
      onActivateTool: activateTool,
      activeToolId,
      recordingKey: generateRecordingKey('toolbarView', 'toolComment'),
      tooltipText: getI18nString('fullscreen_actions.comment'),
      tooltipShortcut: b(DesignGraphElements.COMMENTS)
    }, 'comments'), n && !h && T && jsx(_$$F2, {})]
  }, 'cooper'), jsx(_$$R, {
    toolbeltMode: 'design',
    topLevelMode: ViewType.LAYOUT,
    activateTool
  }, 'design')], [activateTool, activeToolId, b, n, h, j, T]);
  return l ? null : jsx(e0, {
    editorTheme: t ? 'cooper' : 'design',
    children: jsx(_$$m, {
      'role': 'region',
      'aria-label': getI18nString('buzz.toolbar_label'),
      'children': jsx('div', {
        ref: e,
        children: jsxs(XS, {
          'data-onboarding-key': _$$aE,
          'children': [jsxs(Iy, {
            children: [jsx(Q6, {
              rows: S,
              activeRowIndex: s ? 1 : 0
            }), !n && !h && jsx(_$$u3, {
              modeIdentifier: 'buzz',
              modeIcon: jsx(_$$W, {}),
              modeLabel: getI18nString('fullscreen.toolbar.toolbelt_mode_segmented_control.buzz'),
              onToggleMode: () => {
                _o();
                r === SelfDesignType.DESIGN ? activePanel && activePanel.panel !== eA.COMMENTS && openPanel(activePanel.panel) : activeToolId === DesignGraphElements.COMMENTS ? setPropertiesPanelTab(DesignWorkspace.COMMENT) : setPropertiesPanelTab(DesignWorkspace.DESIGN);
              },
              getTooltipShortcut: (e, t) => e !== t ? I('toggle-buzz-tool-mode') : void 0
            })]
          }), s && activeSecondaryToolbeltId === _$$R2.PenTool && editModeType === LayoutTabType.VECTOR && jsx(_$$A2, {
            activeToolId,
            activateTool,
            getShortcutTextForTool: b,
            closeSecondaryToolbelt
          })]
        })
      })
    })
  });
}
function e0({
  children: e,
  editorTheme: t
}) {
  let {
    leftOffset,
    rightOffset
  } = _$$h();
  let r = _$$xn();
  return jsx(setupThemeContext, {
    brand: t,
    children: jsx('div', {
      className: em()(Dm, cssBuilderInstance.fixed.flex.justifyCenter.eventsNone.$),
      style: {
        marginBottom: r,
        marginLeft: -1 * rightOffset,
        marginRight: -1 * leftOffset,
        left: 0,
        right: 0,
        zIndex: 8,
        bottom: eJ
      },
      children: e
    })
  });
}
let e4 = 'Buzz Template Picker';
let ts = 'cooper:import_from_design';
function td({
  searchQuery: e,
  setSearchQuery: t
}) {
  let n = useSelector(e => e.search.sessionId);
  let l = useDispatch();
  let r = g5('import_from_design_search_bar');
  let i = Xr(Lm);
  let d = useCallback(e => {
    e === '' && n ? l(searchEndSession()) : e === '' || n || l(searchStartSession({
      entryPoint: ts
    }));
    t(e);
  }, [n, l, t]);
  let c = () => {
    r();
    n && l(searchEndSession());
    t('');
  };
  let u = useCallback(() => {
    e === '' || n || l(searchStartSession({
      entryPoint: ts
    }));
  }, [n, e, l]);
  return jsxs('div', {
    className: qz,
    children: [jsx(RE, {
      className: _$$t3,
      clearSearch: () => {
        t('');
        n && l(searchEndSession());
      },
      customClearSearchIcon: jsx(_$$C, {
        style: {
          '--color-icon': 'var(--color-icon-tertiary)'
        }
      }),
      focusOnMount: !0,
      iconClassName: _$$un,
      onBack: () => {
        i({
          type: mF.ALL
        });
      },
      onChange: d,
      onFocus: u,
      placeholder: getI18nString('cooper.templates.search_figma_design_files'),
      query: e,
      withUI3Icon: !0
    }), c != null && jsx(IconButton, {
      'aria-label': getI18nString('common.close'),
      'onClick': c,
      'children': jsx(_$$L, {})
    })]
  });
}
let tu = 'cooper:templates';
function tx({
  searchQuery: e,
  setSearchQuery: t,
  customPlaceholder: n
}) {
  let l = useSelector(e => e.search.sessionId);
  let r = useDispatch();
  let i = v3();
  let d = Xr(Tw);
  let c = g5('search_bar');
  let u = i === Gu.NEW_FILE_MODAL;
  let x = useCallback(e => {
    e === '' && l ? r(searchEndSession()) : e === '' || l || r(searchStartSession({
      entryPoint: tu
    }));
    t(e);
  }, [l, r, t]);
  let m = useCallback(() => {
    e === '' || l || r(searchStartSession({
      entryPoint: tu
    }));
  }, [l, e, r]);
  return jsx(_$$e, {
    location: u ? 'modal' : 'leftRail',
    searchQuery: e,
    clearSearch: () => {
      t('');
      l && r(searchEndSession());
    },
    placeholder: n ?? getI18nString('cooper.templates.search'),
    onChange: x,
    onClose: () => {
      u ? c() : d(!1);
      l && r(searchEndSession());
      t('');
    },
    onFocus: m
  });
}
let tE = _$$z.array(_$$z.string());
function tv() {
  let e = setupDynamicConfigHandler(isProdCluster() ? 'cooper_use_case_to_categories_and_resource_ids_map' : 'cooper_use_case_to_categories_and_resource_ids_map_staging');
  let t = setupDynamicConfigHandler(isProdCluster() ? 'buzz_use_case_to_categories_and_shelf_ids_map' : 'buzz_use_case_to_categories_and_shelf_ids_map_staging');
  let n = setupDynamicConfigHandler(isProdCluster() ? 'cooper_explore_resource_ids' : 'cooper_explore_resource_ids_staging');
  return useMemo(() => function (e, t, n) {
    let l = isBuzzTemplatePickerCmtyShelvesEnabled();
    if (isLocalCluster()) {
      return {
        exploreResourceIds: [],
        useCaseMap: {},
        useCaseMapV2: {}
      };
    }
    let r = tE.parse(n.getDynamicConfig().get('explore_resource_ids', []));
    let i = {};
    let o = {};
    if (l) {
      let e = t.getDynamicConfig().value;
      if (e) {
        let {
          use_case_map
        } = tS.parse(e);
        o = use_case_map;
      }
    } else {
      let t = e.getDynamicConfig().value;
      if (t) {
        let {
          use_case_map
        } = tI.parse(t);
        i = use_case_map;
      }
    }
    return {
      exploreResourceIds: r,
      useCaseMap: i,
      useCaseMapV2: o
    };
  }(e, t, n), [e, t, n]);
}
var tT = (e => (e.SOCIAL = 'SOCIAL', e.ADS = 'ADS', e.PRINT = 'PRINT', e.BUSINESS = 'BUSINESS', e.PROMOTIONS = 'PROMOTIONS', e.EVENTS = 'EVENTS', e.CELEBRATIONS = 'CELEBRATIONS', e))(tT || {});
let tI = _$$z.object({
  use_case_map: _$$z.record(_$$z.nativeEnum(tT), _$$z.object({
    category_slugs: _$$z.array(_$$z.string()),
    resource_ids: _$$z.array(_$$z.string())
  }))
});
let tS = _$$z.object({
  use_case_map: _$$z.record(_$$z.nativeEnum(tT), _$$z.object({
    category_slugs: _$$z.array(_$$z.string()),
    shelf_ids: _$$z.array(_$$z.string())
  }))
});
function tk() {
  let {
    useCaseMap
  } = tv();
  return useCaseMap;
}
function tC() {
  let {
    useCaseMapV2
  } = tv();
  return useCaseMapV2;
}
function tz({
  selectedView: e,
  onViewSelected: t
}) {
  let n = isBuzzTemplatePickerCmtyShelvesEnabled();
  let l = tk();
  let r = tC();
  let i = n ? r : l;
  let s = _$$Z('cooper_template_picker_sidebar_click');
  let d = useCurrentPrivilegedPlan('CooperTemplateSidebar');
  let c = d.data?.name;
  let u = d.status !== 'loaded';
  let x = _$$j2();
  let m = useMemo(() => [{
    type: _$$k2.TEXT,
    id: mF.ALL,
    text: getI18nString('cooper.templates.explore')
  }], []);
  let h = useMemo(() => x || u ? [{
    type: _$$k2.TEXT,
    id: mF.ORG,
    loading: u,
    text: c ? getI18nString('cooper.templates.from_plan_name', {
      planName: c
    }) : getI18nString('cooper.templates.from_your_team')
  }] : [], [c, x, u]);
  let g = useMemo(() => [{
    type: _$$k2.DIVIDER,
    key: generateUUIDv4()
  }, ...Object.entries(i).map(([e]) => ({
    type: _$$k2.TEXT,
    id: mF.USE_CASE,
    text: function (e) {
      switch (e) {
        case 'SOCIAL':
          return getI18nString('cooper.templates.use_case.social');
        case 'ADS':
          return getI18nString('cooper.templates.use_case.ads');
        case 'PRINT':
          return getI18nString('cooper.templates.use_case.print');
        case 'BUSINESS':
          return getI18nString('cooper.templates.use_case.business');
        case 'PROMOTIONS':
          return getI18nString('cooper.templates.use_case.promotions');
        case 'EVENTS':
          return getI18nString('cooper.templates.use_case.events');
        case 'CELEBRATIONS':
          return getI18nString('cooper.templates.use_case.celebrations');
      }
    }(e),
    category: e
  }))], [i]);
  let f = useMemo(() => [...m, ...h, ...g], [m, h, g]);
  return jsx(_$$j, {
    items: f,
    selectedItemId: e.type === mF.START_FROM_SCRATCH ? mF.ALL : e.type,
    selectedCategory: e.type === mF.USE_CASE ? e.useCase : void 0,
    onItemSelected: e => {
      let n = e.id;
      switch (n) {
        case mF.USE_CASE:
          let l = e.category;
          l ? (t({
            type: mF.USE_CASE,
            useCase: l
          }), s({
            sidebarItem: l
          })) : reportError(ServiceCategories.COMMUNITY, new Error('Missing useCase for use case view'));
          break;
        case mF.ALL:
          s({
            sidebarItem: 'explore'
          });
          t({
            type: n
          });
          break;
        case mF.ORG:
          s({
            sidebarItem: 'from_plan_name'
          });
          t({
            type: n
          });
          break;
        case mF.START_FROM_SCRATCH:
          s({
            sidebarItem: 'new_blank_asset'
          });
          t({
            type: n
          });
          break;
        default:
          reportError(ServiceCategories.COMMUNITY, new Error(`Unhandled view type: ${n}`), {
            extra: {
              viewType: n
            }
          });
      }
    },
    selectedItemClassName: 'cooper_template_sidebar--selectedSidebarItem--TgynJ'
  });
}
function tD({
  files: e,
  debouncedSearchQuery: t,
  status: n
}) {
  let {
    showSeparator
  } = gH();
  return jsxs(Fragment, {
    children: [jsx('div', {
      className: em()(cssBuilderInstance.pt16.pb24.px16.flex.flexColumn.gap2.$, {
        [_$$me]: showSeparator
      }),
      children: jsx(_$$_, {
        icon: jsx(w4, {
          size: 16,
          type: y1.DESIGN
        }),
        title: getI18nString('cooper.templates.import_from_design.header'),
        subtitle: getI18nString('cooper.templates.import_from_design.subheader')
      })
    }), jsx(t$, {
      status: n,
      debouncedSearchQuery: t,
      files: e
    })]
  });
}
function t$({
  status: e,
  debouncedSearchQuery: t,
  files: n
}) {
  let {
    scrollPosition,
    scrollRef,
    onScroll
  } = Nd(mF.IMPORT_FROM_DESIGN);
  let {
    onShowSeparatorScroll
  } = gH();
  let c = useSelector(e => e.mirror.appModel.multiplayerSessionState === SchemaJoinStatus.JOINED);
  let u = useCurrentFileKey() === null;
  return e === J_.LOADING || !c || u ? jsx(yx, {}) : e !== J_.SUCCESS ? jsx('div', {
    className: cssBuilderInstance.flex.itemsCenter.justifyCenter.hFull.wFull.colorText.textBodyLarge.pre.$,
    children: jsx(tG, {
      debouncedSearchQuery: t,
      status: e
    })
  }) : jsx(_$$P, {
    className: em()(cssBuilderInstance.px8.hFull.$),
    onScroll: (e, t) => {
      onScroll(e, t);
      onShowSeparatorScroll(e, t);
    },
    scrollContainerRef: scrollRef,
    initialScrollTop: scrollPosition,
    children: jsx('div', {
      className: em()(Vg, cssBuilderInstance.pb12.$),
      children: n.map(e => jsx(tV, {
        file: e
      }, e.key))
    })
  });
}
function tV({
  file: e
}) {
  let t = selectCurrentUser();
  let n = useDispatch();
  let l = _$$aZ();
  let r = useSelector(e => e.currentUserOrgId);
  let i = useSelector(e => e.currentTeamId);
  let a = useSelector(e => e.selectedView);
  return jsx('div', {
    className: em()(cssBuilderInstance.pt8.px8.$, _$$Fj),
    children: jsx(GQ, {
      activeFileUsers: [],
      currentUser: t,
      disableIconOverlays: !0,
      file: e,
      overrideOnClick: !0,
      onClick: () => {
        n(trackFileClicked({
          fileKey: e.key,
          entrypoint: 'cooper import from design view',
          viewMode: 'grid'
        }));
        let o = `/file/${e.key}`;
        o = appendUserIdToUrl(o, t);
        o = appendNavigationContext(o, r, i, a);
        customHistory.redirect(o, '_blank');
        l();
      },
      subtitle: jsx(_$$lJ, {
        file: e
      }),
      titleFontSize: 11
    })
  });
}
function tG({
  debouncedSearchQuery: e,
  status: t
}) {
  return t === J_.NO_QUERY_RESULTS ? renderI18nText('slides.templates.file_picker.no_files_match', {
    searchQuery: jsx('p', {
      className: cssBuilderInstance.colorText.textBodyLargeStrong.$,
      children: e
    })
  }) : t === J_.NO_RECENT_FILES ? jsx('h1', {
    className: cssBuilderInstance.colorText.textBodyLarge.$,
    children: renderI18nText('cooper.templates.import_from_design.no_recent_files')
  }) : null;
}
function tQ({
  title: e,
  onBack: t,
  actions: n,
  description: l,
  trackingProperties: r
}) {
  let i = VU() ? t0 : tZ;
  let s = useRef(null);
  let [d, c] = useState(!1);
  useEffect(() => {
    s.current && c(s.current.scrollWidth > s.current.clientWidth);
  }, [e]);
  let u = d ? {
    'data-tooltip': e,
    'data-tooltip-type': KindEnum.TEXT
  } : void 0;
  return jsxs('div', {
    ...Ay.props(i.container, !l && i.extraPaddingBottom),
    children: [jsxs('div', {
      ...Ay.props(i.content),
      children: [jsxs('div', {
        ...Ay.props(i.header),
        children: [t && jsx(Me, {
          'aria-label': getI18nString('cooper.templates.header.back'),
          'onClick': t,
          'trackingProperties': {
            trackingDescriptor: UpgradeAction.BACK,
            ...r
          },
          'children': jsx(_$$t4, {})
        }), jsx('div', {
          ref: s,
          ...Ay.props(i.title),
          ...u,
          children: e
        })]
      }), n]
    }), l]
  });
}
let tZ = {
  container: {
    display: 'x78zum5',
    flexDirection: 'xdt5ytf',
    borderBottom: 'x1n5zjp5',
    borderBottomWidth: null,
    borderBottomStyle: null,
    borderBottomColor: null,
    padding: 'x1a527bs',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    gap: 'x1i71x30',
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  extraPaddingBottom: {
    $$css: !0
  },
  content: {
    display: 'x78zum5',
    justifyContent: 'x1qughib',
    alignItems: 'x6s0dn4',
    alignSelf: 'xkh2ocl',
    gap: 'x167g77z',
    rowGap: null,
    columnGap: null,
    width: 'xh8yej3',
    $$css: !0
  },
  header: {
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    gap: 'x1nfngrj',
    rowGap: null,
    columnGap: null,
    alignSelf: 'xkh2ocl',
    minWidth: 'xeuugli',
    $$css: !0
  },
  title: {
    color: 'x1akne3o',
    textOverflow: 'xlyipyv',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    whiteSpace: 'xuxw1ft',
    ..._$$g2.textBodyLargeStrong,
    $$css: !0
  },
  icon: {
    '--color-icon': 'xtc4nxu',
    '$$css': !0
  }
};
let t0 = {
  container: {
    display: 'x78zum5',
    flexDirection: 'xdt5ytf',
    borderBottom: 'x1n5zjp5',
    borderBottomWidth: null,
    borderBottomStyle: null,
    borderBottomColor: null,
    padding: 'xo9lzh',
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
  extraPaddingBottom: {
    paddingBottom: 'xp6roeo',
    $$css: !0
  },
  content: {
    display: 'x78zum5',
    justifyContent: 'x1qughib',
    alignItems: 'x6s0dn4',
    alignSelf: 'xkh2ocl',
    gap: 'x167g77z',
    rowGap: null,
    columnGap: null,
    width: 'xh8yej3',
    $$css: !0
  },
  header: {
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    alignSelf: 'xkh2ocl',
    height: 'xxk0z11',
    gap: 'x1jnr06f',
    rowGap: null,
    columnGap: null,
    minWidth: 'xeuugli',
    $$css: !0
  },
  title: {
    color: 'x1akne3o',
    textOverflow: 'xlyipyv',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    whiteSpace: 'xuxw1ft',
    ..._$$g2.textBodyMediumStrong,
    $$css: !0
  },
  icon: {
    '--color-icon': 'xtc4nxu',
    '$$css': !0
  }
};
function t8({
  title: e,
  onClick: t,
  recordingKey: n,
  actions: l,
  showWorkspaceIcon: r = !1,
  trackingProperties: i,
  ariaLabel: a
}) {
  let s = VU();
  let d = s ? nt : ne;
  return t ? jsxs('div', {
    ...Ay.props(d.container),
    children: [jsxs(_$$e3, {
      'aria-label': a || getI18nString('cooper.templates.template_picker.org_view.see_more'),
      'onClick': t,
      'recordingKey': n,
      ...Ay.props(d.button),
      'trackingProperties': {
        trackingDescriptor: UpgradeAction.NEW_TEMPLATE_DROPDOWN_OPENED,
        ...i
      },
      'children': [jsx('h3', {
        ...Ay.props(d.title),
        children: e
      }), s ? jsx(_$$R3, {
        ...Ay.props(d.icon)
      }) : jsx(_$$a4, {
        ...Ay.props(d.icon)
      })]
    }), l]
  }) : jsx('div', {
    ...Ay.props(d.container),
    children: jsxs('div', {
      ...Ay.props(d.header),
      children: [r && jsx(t9, {}), jsx('h3', {
        ...Ay.props(d.title),
        children: e
      })]
    })
  });
}
function t3() {
  let e = VU();
  let t = e ? nt : ne;
  return jsx('div', {
    ...Ay.props(t.container),
    children: jsx('div', {
      ...Ay.props(t.header),
      children: jsx(Wi, {
        animationType: JR.LIGHT_SHIMMER,
        style: e ? nl : nn
      })
    })
  });
}
function t9() {
  let e = useCurrentUserOrg();
  return e ? jsx('div', {
    className: 'x1057jvv',
    children: jsx(renderAvatar, {
      userId: e.id,
      orgId: e.id,
      teamId: null
    })
  }) : null;
}
let ne = {
  container: {
    display: 'x78zum5',
    height: 'x10w6t97',
    padding: 'x17f4yl9',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    alignItems: 'x6s0dn4',
    alignSelf: 'xkh2ocl',
    justifyContent: 'x1qughib',
    $$css: !0
  },
  header: {
    display: 'x78zum5',
    padding: 'xx99whi',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    alignItems: 'x6s0dn4',
    alignSelf: 'xkh2ocl',
    height: 'x10w6t97',
    $$css: !0
  },
  button: {
    'display': 'x78zum5',
    'paddingLeft': 'x8rdmch',
    'paddingInlineStart': null,
    'paddingInlineEnd': null,
    'alignItems': 'x6s0dn4',
    'alignSelf': 'xkh2ocl',
    'borderRadius': 'x19y5rnk',
    'borderStartStartRadius': null,
    'borderStartEndRadius': null,
    'borderEndStartRadius': null,
    'borderEndEndRadius': null,
    'borderTopLeftRadius': null,
    'borderTopRightRadius': null,
    'borderBottomLeftRadius': null,
    'borderBottomRightRadius': null,
    'border': 'xfj9a5l',
    'borderWidth': null,
    'borderInlineWidth': null,
    'borderInlineStartWidth': null,
    'borderLeftWidth': null,
    'borderInlineEndWidth': null,
    'borderRightWidth': null,
    'borderBlockWidth': null,
    'borderTopWidth': null,
    'borderBottomWidth': null,
    'borderStyle': null,
    'borderInlineStyle': null,
    'borderInlineStartStyle': null,
    'borderLeftStyle': null,
    'borderInlineEndStyle': null,
    'borderRightStyle': null,
    'borderBlockStyle': null,
    'borderTopStyle': null,
    'borderBottomStyle': null,
    'borderColor': null,
    'borderInlineColor': null,
    'borderInlineStartColor': null,
    'borderLeftColor': null,
    'borderInlineEndColor': null,
    'borderRightColor': null,
    'borderBlockColor': null,
    'borderTopColor': null,
    'borderBottomColor': null,
    'height': 'x10w6t97',
    ':hover_background': 'x1d4akdp',
    ':hover_backgroundAttachment': null,
    ':hover_backgroundClip': null,
    ':hover_backgroundColor': null,
    ':hover_backgroundImage': null,
    ':hover_backgroundOrigin': null,
    ':hover_backgroundPosition': null,
    ':hover_backgroundPositionX': null,
    ':hover_backgroundPositionY': null,
    ':hover_backgroundRepeat': null,
    ':hover_backgroundSize': null,
    ':focus_border': 'xy9wu7h',
    ':focus_borderWidth': null,
    ':focus_borderInlineWidth': null,
    ':focus_borderInlineStartWidth': null,
    ':focus_borderLeftWidth': null,
    ':focus_borderInlineEndWidth': null,
    ':focus_borderRightWidth': null,
    ':focus_borderBlockWidth': null,
    ':focus_borderTopWidth': null,
    ':focus_borderBottomWidth': null,
    ':focus_borderStyle': null,
    ':focus_borderInlineStyle': null,
    ':focus_borderInlineStartStyle': null,
    ':focus_borderLeftStyle': null,
    ':focus_borderInlineEndStyle': null,
    ':focus_borderRightStyle': null,
    ':focus_borderBlockStyle': null,
    ':focus_borderTopStyle': null,
    ':focus_borderBottomStyle': null,
    ':focus_borderColor': null,
    ':focus_borderInlineColor': null,
    ':focus_borderInlineStartColor': null,
    ':focus_borderLeftColor': null,
    ':focus_borderInlineEndColor': null,
    ':focus_borderRightColor': null,
    ':focus_borderBlockColor': null,
    ':focus_borderTopColor': null,
    ':focus_borderBottomColor': null,
    '$$css': !0
  },
  title: {
    color: 'x1akne3o',
    ..._$$g2.textBodyMediumStrong,
    $$css: !0
  },
  icon: {
    '--color-icon': 'xtc4nxu',
    '$$css': !0
  }
};
let nt = {
  container: {
    display: 'x78zum5',
    height: 'xxk0z11',
    padding: 'x17f4yl9',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    margin: 'x499qwo',
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    alignItems: 'x6s0dn4',
    alignSelf: 'xkh2ocl',
    justifyContent: 'x1qughib',
    $$css: !0
  },
  header: {
    display: 'x78zum5',
    padding: 'xx99whi',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    alignItems: 'x6s0dn4',
    alignSelf: 'xkh2ocl',
    height: 'xxk0z11',
    $$css: !0
  },
  button: {
    'display': 'x78zum5',
    'paddingLeft': 'x8rdmch',
    'paddingInlineStart': null,
    'paddingInlineEnd': null,
    'alignItems': 'x6s0dn4',
    'alignSelf': 'xkh2ocl',
    'borderRadius': 'x19y5rnk',
    'borderStartStartRadius': null,
    'borderStartEndRadius': null,
    'borderEndStartRadius': null,
    'borderEndEndRadius': null,
    'borderTopLeftRadius': null,
    'borderTopRightRadius': null,
    'borderBottomLeftRadius': null,
    'borderBottomRightRadius': null,
    'border': 'xfj9a5l',
    'borderWidth': null,
    'borderInlineWidth': null,
    'borderInlineStartWidth': null,
    'borderLeftWidth': null,
    'borderInlineEndWidth': null,
    'borderRightWidth': null,
    'borderBlockWidth': null,
    'borderTopWidth': null,
    'borderBottomWidth': null,
    'borderStyle': null,
    'borderInlineStyle': null,
    'borderInlineStartStyle': null,
    'borderLeftStyle': null,
    'borderInlineEndStyle': null,
    'borderRightStyle': null,
    'borderBlockStyle': null,
    'borderTopStyle': null,
    'borderBottomStyle': null,
    'borderColor': null,
    'borderInlineColor': null,
    'borderInlineStartColor': null,
    'borderLeftColor': null,
    'borderInlineEndColor': null,
    'borderRightColor': null,
    'borderBlockColor': null,
    'borderTopColor': null,
    'borderBottomColor': null,
    'height': 'xxk0z11',
    ':hover_background': 'x1d4akdp',
    ':hover_backgroundAttachment': null,
    ':hover_backgroundClip': null,
    ':hover_backgroundColor': null,
    ':hover_backgroundImage': null,
    ':hover_backgroundOrigin': null,
    ':hover_backgroundPosition': null,
    ':hover_backgroundPositionX': null,
    ':hover_backgroundPositionY': null,
    ':hover_backgroundRepeat': null,
    ':hover_backgroundSize': null,
    ':focus_border': 'xy9wu7h',
    ':focus_borderWidth': null,
    ':focus_borderInlineWidth': null,
    ':focus_borderInlineStartWidth': null,
    ':focus_borderLeftWidth': null,
    ':focus_borderInlineEndWidth': null,
    ':focus_borderRightWidth': null,
    ':focus_borderBlockWidth': null,
    ':focus_borderTopWidth': null,
    ':focus_borderBottomWidth': null,
    ':focus_borderStyle': null,
    ':focus_borderInlineStyle': null,
    ':focus_borderInlineStartStyle': null,
    ':focus_borderLeftStyle': null,
    ':focus_borderInlineEndStyle': null,
    ':focus_borderRightStyle': null,
    ':focus_borderBlockStyle': null,
    ':focus_borderTopStyle': null,
    ':focus_borderBottomStyle': null,
    ':focus_borderColor': null,
    ':focus_borderInlineColor': null,
    ':focus_borderInlineStartColor': null,
    ':focus_borderLeftColor': null,
    ':focus_borderInlineEndColor': null,
    ':focus_borderRightColor': null,
    ':focus_borderBlockColor': null,
    ':focus_borderTopColor': null,
    ':focus_borderBottomColor': null,
    '$$css': !0
  },
  title: {
    color: 'x1akne3o',
    ..._$$g2.textBodyMediumStrong,
    $$css: !0
  },
  icon: {
    '--color-icon': 'xtc4nxu',
    '$$css': !0
  }
};
let nn = {
  width: '100px',
  height: '24px',
  borderRadius: Vq.medium
};
let nl = {
  width: '100px',
  height: '16px',
  borderRadius: Vq.medium
};
let na = 'cooper_template_view--scrollContainer--TrpYq';
let ns = 'cooper_template_view--scrollContainerWithHeader--GD99i';
let nd = 'cooper_template_view--leftRailTemplatePickerScrollContainer--fV23R';
function nc({
  onBackCallback: e
}) {
  let t = v3();
  let [n, l] = useAtomValueAndSetter(Lm);
  let {
    scrollPosition,
    scrollRef,
    onScroll
  } = Nd(n.type);
  let s = CooperTemplateTypesTsBindings?.getAllExceptCustomTemplateGroups() || [];
  let c = nu();
  let u = getVisibleTheme() === 'dark';
  return jsxs(Fragment, {
    children: [t === Gu.NEW_FILE_MODAL && jsx(nx, {
      onBackCallback: e
    }), jsxs(_$$P, {
      className: ns,
      scrollContainerRef: scrollRef,
      initialScrollTop: scrollPosition,
      onScroll,
      children: [t === Gu.LEFT_RAIL && jsx(DM, {
        onPointerDown: c
      }), s.map(e => jsx(np, {
        title: e.groupName,
        iconUrl: u && e.darkImageUrl || e.imageUrl,
        templateTypes: e.types
      }, e.groupName))]
    })]
  });
}
let nu = () => {
  let e = v3();
  let [t] = useAtomValueAndSetter(Lm);
  let n = Xr(Tw);
  let [l, r] = useAtomValueAndSetter(Ku);
  let [i, o] = useAtomValueAndSetter(assetCategoryAtom);
  return useCallback(() => _$$r({
    templateType: SocialMediaFormats.CUSTOM,
    closeTemplatePicker: () => {
      n(!1);
      e === Gu.LEFT_RAIL && o(AssetCategoryEnum.ASSETS);
    },
    shouldInsertFrame: t.type === mF.NEW_TEMPLATE,
    shouldEnterGridView: e === Gu.NEW_FILE_MODAL,
    setDimensionsSubmenuOpen: r
  }), [e, t, n, o, r]);
};
function nx({
  onBackCallback: e
}) {
  let t = nu();
  return jsx(tQ, {
    title: getI18nString('cooper.templates.new_blank_asset'),
    actions: jsx(Button, {
      variant: 'secondary',
      onClick: t,
      iconPrefix: jsx(_$$q, {}),
      children: getI18nString('cooper.templates.custom_size')
    }),
    onBack: e ? () => e() : void 0
  });
}
function np({
  title: e,
  iconUrl: t,
  templateTypes: n
}) {
  return VU() ? jsx(nh, {
    title: e,
    iconUrl: t,
    templateTypes: n
  }) : jsx(nm, {
    title: e,
    iconUrl: t,
    templateTypes: n
  });
}
function nm({
  title: e,
  iconUrl: t,
  templateTypes: n
}) {
  let [l, r] = useAtomValueAndSetter(Lm);
  let i = Xr(Tw);
  let [s, d] = useAtomValueAndSetter(Ku);
  let c = Xr(assetCategoryAtom);
  let u = Xr(_$$az);
  let x = Xr(hc);
  let {
    numColumns,
    containerRef
  } = function () {
    let e = useRef(null);
    let [t, n] = useState(4);
    useEffect(() => {
      let t = new ResizeObserver(() => {
        n(Math.min(Math.max(Math.floor(((e.current?.getBoundingClientRect().width ?? 0) - 16) / 106), 2), 4));
      });
      e.current && t.observe(e.current);
      let l = e.current;
      return () => {
        l && t.unobserve(l);
      };
    }, [e]);
    return {
      numColumns: t,
      containerRef: e
    };
  }();
  return jsxs('div', {
    ref: containerRef,
    children: [jsx(t8, {
      title: getI18nString('cooper.templates.blank_title_assets', {
        title: e ?? ''
      })
    }), jsx(_$$p2, {
      numColumns,
      children: n.map(e => jsx(_$$T, {
        iconUrl: t,
        templateType: e,
        onPointerDown: () => {
          _$$r({
            templateType: e.type,
            closeTemplatePicker: () => i(!1),
            shouldInsertFrame: l.type === mF.NEW_TEMPLATE,
            shouldEnterGridView: !1,
            setDimensionsSubmenuOpen: d,
            setActiveTab: c,
            setCooperTemplateShouldUseAssetType: u
          });
          x(!0);
        }
      }, e.name))
    })]
  });
}
function nh({
  title: e,
  iconUrl: t,
  templateTypes: n
}) {
  let [l, r] = useAtomValueAndSetter(Lm);
  let [i, a] = useAtomValueAndSetter(Ku);
  let s = Xr(Tw);
  let d = Xr(assetCategoryAtom);
  let c = Xr(_$$az);
  return jsxs('div', {
    children: [jsx(t8, {
      title: getI18nString('cooper.templates.blank_title_assets', {
        title: e ?? ''
      })
    }), jsx('div', {
      className: 'cooper_template_view--templateList--nztcy',
      children: n.map(e => jsx(_$$px, {
        iconUrl: t,
        templateType: e,
        onPointerDown: () => _$$r({
          templateType: e.type,
          closeTemplatePicker: () => s(!1),
          shouldInsertFrame: l.type === mF.NEW_TEMPLATE,
          shouldEnterGridView: !1,
          setDimensionsSubmenuOpen: a,
          setActiveTab: d,
          setCooperTemplateShouldUseAssetType: c
        })
      }, e.name))
    })]
  });
}
function ng({
  hideNewTemplateTile: e = !1
}) {
  let t = useAtomWithSubscription(Lm);
  let n = Xr(Tw);
  let [l, r] = useAtomValueAndSetter(Ku);
  let i = Xr(assetCategoryAtom);
  let a = Xr(Lm);
  let s = Xr(_$$az);
  let c = Xr(hc);
  let u = _$$j2() && !e;
  let x = _$$aZ();
  let m = (u ? CooperTemplateTypesTsBindings?.getShortenedExploreNewAssetTemplateGroups() : CooperTemplateTypesTsBindings?.getExploreNewAssetTemplateGroups()) ?? [];
  return jsxs('div', {
    children: [jsx(t8, {
      title: getI18nString('cooper.templates.new_blank_asset'),
      onClick: () => {
        a({
          type: mF.START_FROM_SCRATCH
        });
      },
      trackingProperties: {
        section: 'new_blank_asset'
      },
      ariaLabel: getI18nString('cooper.templates.new_blank_asset')
    }), jsxs(_$$p2, {
      numColumns: 4,
      children: [u && jsx(_$$rG, {
        onPointerDown: x
      }, 'create-new-template-tile'), m.map(e => {
        let l = e.types?.[0];
        return l ? jsx(_$$T, {
          iconUrl: e.imageUrl,
          templateType: l,
          onPointerDown: () => {
            _$$r({
              templateType: l.type,
              closeTemplatePicker: () => n(!1),
              shouldInsertFrame: t.type === mF.NEW_TEMPLATE,
              shouldEnterGridView: !1,
              setDimensionsSubmenuOpen: r,
              setActiveTab: i,
              setCooperTemplateShouldUseAssetType: s
            });
            c(!0);
          }
        }, l.name) : null;
      })]
    })]
  });
}
function nT({
  items: e,
  renderItem: t,
  numColumns: n = 3,
  isLeftRail: l = !1,
  getItemHeight: r = () => 1,
  containerStyleXStyle: i,
  columnStyleXStyle: s
}) {
  let d = useMemo(() => {
    let t = new Array(n).fill([]).map(() => []);
    let l = new Array(n).fill(0);
    e.forEach(e => {
      let i = 0;
      let o = 1 / 0;
      for (let e = 0; e < n; e++) l[e] < o && (o = l[e], i = e);
      let a = t[i] ?? [];
      t[i] = [...a, e];
      l[i] += r(e);
    });
    return t;
  }, [r, e, n]);
  return jsx('div', {
    ...Ay.props(nS.masonryGridBase, l && nS.masonryGridLeftRail, nS.defaultPadding, i),
    style: {
      gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`
    },
    children: d.map((e, n) => jsx('div', {
      ...Ay.props(nS.masonryColumn, s),
      children: e.map((e, n) => t(e, n))
    }, n))
  });
}
function nI(e) {
  return e ? Math.min(Math.max(e.height / e.width, 0.5), 2) : 1;
}
jH.spacer25;
let nS = {
  masonryGridBase: {
    display: 'xrvj5dj',
    gap: 'x1pulhmw',
    rowGap: null,
    columnGap: null,
    maxWidth: 'x193iq5w',
    $$css: !0
  },
  masonryGridLeftRail: {
    gap: 'x1nfngrj',
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  masonryColumn: {
    display: 'x78zum5',
    flexDirection: 'xdt5ytf',
    gap: 'x1pulhmw',
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  defaultPadding: {
    padding: 'x1j179x1',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: !0
  }
};
let nF = userFlagAtomFamily(RG);
function nB() {
  let e = useDispatch();
  let t = VU();
  let n = useAtomWithSubscription(nF);
  return n?.status !== 'loaded' || n?.status === 'loaded' && n?.data ? null : jsx('div', {
    ...Ay.props(t ? nD.container : n$.container),
    children: jsx('div', {
      className: 'x78zum5 xe8ttls x1cy8zhl x883omv x5mp9sv x7xtdkp x1sjmt1f',
      children: jsxs('div', {
        ...Ay.props(t ? nD.content : n$.content),
        children: [jsxs('div', {
          ...Ay.props(t ? nD.iconAndText : n$.iconAndText),
          children: [jsx(_$$c3, {
            className: 'xbzrb6o xjwf9q1 xnei2rj'
          }), jsx('div', {
            ...Ay.props(n$.text),
            children: t ? renderI18nText('cooper.templates.internal.banner_left_rail') : renderI18nText('cooper.templates.internal.banner')
          })]
        }), jsx(IconButton, {
          'aria-label': getI18nString('banner.shared.close_banner'),
          'onClick': () => {
            e(postUserFlag({
              [RG]: !0
            }));
          },
          'children': jsx(_$$A3, {
            className: 'xbzrb6o'
          })
        })]
      })
    })
  });
}
let nD = {
  container: {
    display: 'x78zum5',
    alignItems: 'x1cy8zhl',
    gap: 'x883omv',
    rowGap: null,
    columnGap: null,
    alignSelf: 'xkh2ocl',
    padding: 'x1a527bs',
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
  content: {
    display: 'x78zum5',
    justifyContent: 'x1qughib',
    alignItems: 'x1cy8zhl',
    flex: 'x5mp9sv',
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    gap: 'x1nfngrj',
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  iconAndText: {
    display: 'x78zum5',
    alignItems: 'x1cy8zhl',
    gap: 'xg2d0mh',
    rowGap: null,
    columnGap: null,
    $$css: !0
  }
};
let n$ = {
  container: {
    display: 'x78zum5',
    alignItems: 'x1cy8zhl',
    gap: 'x883omv',
    rowGap: null,
    columnGap: null,
    alignSelf: 'xkh2ocl',
    padding: 'x1a527bs',
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
  content: {
    display: 'x78zum5',
    justifyContent: 'x1qughib',
    alignItems: 'x6s0dn4',
    flex: 'x5mp9sv',
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    $$css: !0
  },
  iconAndText: {
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    gap: 'x167g77z',
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  text: {
    color: 'x1akne3o',
    ..._$$g2.textBodyMedium,
    paddingTop: 'x1gskr33',
    $$css: !0
  }
};
function nH({
  templateSet: e,
  library: t
}) {
  let {
    isExpanded,
    setIsExpanded,
    headerRef,
    isHeaderStickied,
    setIsHeaderStickied
  } = function () {
    let [e, t] = useState(!0);
    let [n, l] = useState(!1);
    let r = useRef(null);
    useEffect(() => {
      !0 !== n || e || r.current?.scrollIntoView();
    }, [e, n]);
    return {
      isExpanded: e,
      setIsExpanded: t,
      headerRef: r,
      isHeaderStickied: n,
      setIsHeaderStickied: l
    };
  }();
  let d = VU();
  return jsxs('section', {
    children: [jsx(_$$a5, {
      onIntersectionChange: ({
        isIntersecting: e
      }) => {
        setIsHeaderStickied(!e);
      }
    }), jsx('div', {
      ..._$$xk(nZ.headerContainer, isHeaderStickied && isExpanded && nZ.headerStickied),
      children: jsxs(ButtonPrimitive, {
        ref: headerRef,
        onClick: () => setIsExpanded(!isExpanded),
        ..._$$xk(nZ.collapsibleHeader, d ? nZ.leftRailHeight : nZ.defaultHeight),
        children: [isExpanded ? jsx(_$$O, {
          className: 'xe5c7bq'
        }) : jsx(_$$k3, {
          className: 'xe5c7bq'
        }), e.name]
      })
    }), isExpanded && jsx(nq, {
      library: t,
      templateSet: e
    })]
  }, e.node_id);
}
function nX({
  libraryKey: e
}) {
  let [t, n] = useAtomValueAndSetter(Lm);
  let l = VU();
  let r = useDispatch();
  let i = useLibraries([_$$l(e)]);
  let d = i.data;
  let u = i.status === 'loading';
  let x = _M(_$$l(e));
  let h = x.data.templates;
  let g = x.data.template_name;
  let f = x.data.description;
  let j = useSelector(e => e.search.sessionId);
  let y = useAtomWithSubscription(_$$ce);
  let E = useMemo(() => [...h].sort(go), [h]);
  if (!getFeatureFlags().buzz_video_export) {
    for (let e of E) e.components = e.components.filter(e => !e.has_video);
    E = E.filter(e => e.components.length > 0);
  }
  let v = useCallback(() => {
    j && y.length === 0 && r(searchEndSession());
    n(t.type === mF.TEMPLATES ? t.parentView : {
      type: mF.ALL
    });
  }, [j, y, r, n, t]);
  if (x.status !== 'loaded' || u) return jsx(_$$ah, {});
  h.length || (r(VisualBellActions.enqueue({
    type: 'buzz-template',
    message: getI18nString('slides.templates.toast.no_longer_available'),
    error: !0,
    icon: VisualBellIcon.EXCLAMATION
  })), n({
    type: mF.ALL
  }));
  let T = d[0];
  T && !isPublishedLibraryWithAssets(T) && (T = void 0);
  return jsxs(Fragment, {
    children: [jsx(tQ, {
      title: g || '',
      actions: T ? jsxs('div', {
        className: 'x6s0dn4 x78zum5 x1q0g3np x167g77z',
        children: [jsx(vu, {
          editorType: FFileType.COOPER,
          libraryKey: T.library_key,
          showText: !l,
          variant: l ? 'borderless' : 'secondary'
        }), getFeatureFlags().buzz_bulk_insert && jsx(nY, {
          library: T,
          isLeftRail: l
        })]
      }) : void 0,
      description: f && jsx('div', {
        ..._$$xk(nZ.templateDescription, l ? _$$g2.textBodyMedium : _$$g2.textBodyLarge),
        dangerouslySetInnerHTML: {
          __html: sanitizeHtml(f)
        }
      }),
      onBack: v
    }), jsxs(_$$P, {
      className: ns,
      children: [jsx(nB, {}), E.length === 1 && E[0] ? jsx('div', {
        className: 'xyamay9',
        children: jsx(nq, {
          library: T,
          templateSet: E[0]
        })
      }) : jsx('div', {
        className: cssBuilderInstance.relative.$,
        children: E.map(e => jsx(nH, {
          templateSet: e,
          library: T
        }, e.node_id))
      })]
    })]
  });
}
function nY({
  library: e,
  isLeftRail: t
}) {
  let n = Ui({
    library: e
  });
  return jsx($z, {
    variant: 'secondary',
    onClick: n,
    trackingProperties: {
      trackingDescriptor: UpgradeAction.ADD_ALL_TEMPLATES,
      libraryKey: e.library_key,
      source: t ? 'left_rail' : 'modal'
    },
    children: t ? renderI18nText('cooper.templates.add_all') : renderI18nText('cooper.templates.add_all_templates')
  });
}
function nq({
  templateSet: e,
  library: t
}) {
  let n = VU();
  return jsx(nT, {
    items: e.components,
    renderItem: e => createElement('div', {
      className: 'x78zum5 xdt5ytf x1jnr06f xeuugli',
      key: e.node_id
    }, jsx(nQ, {
      library: t,
      template: e,
      dimensions: nJ(e)
    }, e.node_id), jsx('div', {
      ..._$$xk(nZ.templateName),
      children: e.name
    })),
    numColumns: n ? 2 : 3,
    isLeftRail: n,
    getItemHeight: e => nI(nJ(e))
  });
}
let nJ = e => {
  let t = e.min_node_width;
  let n = e.min_node_height;
  return t && n ? {
    width: t,
    height: n
  } : void 0;
};
function nQ({
  template: e,
  library: t,
  insertDetached: n = !1,
  isAboveFold: l = !1,
  resourceId: r,
  fromCommunity: i = !1,
  dimensions: a,
  assetTypeName: c,
  showAssetTypeName: u = !1
}) {
  let x = 'insert-cooper-template';
  let m = trackFileEventWithStore();
  let h = Xr(Tw);
  let g = isNotInFocusedNodeView();
  let f = v3();
  let b = useCurrentFileKey();
  let j = useSelector(e => e.search.sessionId);
  let y = _$$nc.user(x, (e, l, r) => {
    _$$fp({
      getGridCoord: AppStateTsApi?.getInsertGridCoord || (() => ({
        row: 0,
        col: 0
      })),
      libraryKey: t?.library_key,
      detatchInstances: n
    })(e, l, r);
  });
  let {
    onInsertableResourcePointerDown,
    dragState
  } = _$$j3({
    resource: e,
    isList: !1,
    sourceForTracking: 'cooper-add-template-panel',
    clickToInsert_DEPRECATED: !0,
    insertAsChildOfCanvas: !0,
    insertionCallback: (n, l, r) => {
      let o;
      n.length === 1 && (o = CooperTemplateTypesTsBindings?.getCooperTemplateType(n[0]), i && _$$l2.user('set-community-asset-name-untitled', () => renameNode(n[0], getI18nString('cooper.templates.new_asset'))));
      y(n, l, r);
      m('brand_template_inserted', {
        product_type: 'buzz',
        template_id: e.id,
        library_key: t?.library_key,
        template_entry_point: f,
        template_source: i ? 'Community' : 'Internal',
        template_asset_type: o,
        searchSessionId: j
      });
      n.forEach(e => {
        CooperTemplateTypesTsBindings?.getCooperTemplateType(e) || _$$l2.user('insert-cooper-template-without-type', () => {
          CooperTemplateTypesTsBindings?.setCooperTemplateType(e, SocialMediaFormats.CUSTOM);
        });
      });
    },
    allowDroppingOnLockedTemplate: !0,
    afterSuccessfulInsert: () => {
      r && noop.addResourceUse({
        resourceId: r
      });
      h(!1);
    },
    selectAfterInsert: !1,
    isDraggingDisabled: !g
  });
  let I = _$$nc.user(x, onInsertableResourcePointerDown);
  return jsxs('span', {
    className: 'cooper_template_view--insertableModuleTile--b6GIl',
    children: [g ? jsx(_$$q3, {
      dragState,
      isList: !1,
      opacityOverride: 0.5
    }) : null, jsx(_$$Vg, {
      name: e.name,
      thumbnailUrl: e.thumbnail_url,
      onPointerDown: e => {
        b && I(e);
      },
      isAboveFold: l,
      dimensions: a,
      assetTypeName: u ? c : null,
      hasVideo: e.has_video ?? !1
    }, e.node_id)]
  });
}
let nZ = {
  templateName: {
    ..._$$g2.textBodySmall,
    color: 'x1akne3o',
    textOverflow: 'xlyipyv',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    whiteSpace: 'xuxw1ft',
    minWidth: 'xeuugli',
    $$css: !0
  },
  templateDescription: {
    padding: 'x1tgzeca',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    color: 'x1n0bwc9',
    $$css: !0
  },
  headerContainer: {
    width: 'xh8yej3',
    position: 'x7wzq59',
    top: 'x13vifvy',
    zIndex: 'x1vjfegm',
    backgroundColor: 'x1yjdb4r',
    boxSizing: 'x1afcbsf',
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
  headerStickied: {
    borderBottomWidth: 'xso031l',
    $$css: !0
  },
  collapsibleHeader: {
    ..._$$g2.textBodyMediumStrong,
    width: 'xh8yej3',
    textAlign: 'xdpxx8g',
    paddingLeft: 'x1kpt5kx',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    boxSizing: 'x9f619',
    gap: 'x1jnr06f',
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  leftRailHeight: {
    paddingTop: 'x1y1aw1k',
    paddingBottom: 'xwib8y2',
    marginBottom: 'x1e56ztr',
    $$css: !0
  },
  defaultHeight: {
    height: 'xsdox4t',
    $$css: !0
  }
};
function n0({
  assets: e,
  fetchNextPage: t,
  hasNextPage: n,
  isFetchingNextPage: l,
  singleColumn: r
}) {
  let i = VU();
  let s = useMemo(() => e.filter(hasContent).filter(isCooperTemplateAsset).map(e => ({
    component: e.content.component_v2?._component_v2_record,
    categorySlug: e.category_slug,
    tags: e.tags_v2
  })).filter(e => !!e.component).filter(e => !e.component?.has_video || getFeatureFlags().buzz_video_export), [e]);
  let d = Ij(s, {
    usePrettyName: !0
  });
  return jsxs(Fragment, {
    children: [jsx(nT, {
      items: e,
      renderItem: (e, t) => {
        if (hasContent(e) && isCooperTemplateAsset(e)) {
          let n = e.content.component_v2?._component_v2_record;
          if (!n) return null;
          let l = d.get(n.id);
          return jsx(nQ, {
            assetTypeName: i ? null : l,
            dimensions: Kq(e),
            fromCommunity: !0,
            insertDetached: !0,
            isAboveFold: t < 3,
            library: void 0,
            resourceId: e.id,
            showAssetTypeName: !i,
            template: n
          }, n.id);
        }
        return null;
      },
      numColumns: r ? 1 : i ? 2 : 3,
      isLeftRail: i,
      getItemHeight: e => nI(Kq(e))
    }), jsx(_$$a5, {
      onIntersectionChange: ({
        isIntersecting: e
      }) => {
        t && e && n && !l && t();
      },
      className: 'cooper_first_party_asset_tiles--scrollSentinel--Lor4n',
      style: {
        bottom: '600px'
      }
    })]
  });
}
function n1({
  singleColumn: e,
  aspectRatio: t,
  numTiles: n
}) {
  let l = VU();
  let r = useMemo(() => Array.from({
    length: n ?? 12
  }).map((e, n) => ({
    id: `skeleton-${n}`,
    aspectRatio: t ?? 0.8 + 0.4 * Math.random()
  })), [n, t]);
  return jsx(nT, {
    items: r,
    renderItem: e => jsx('div', {
      className: 'cooper_first_party_asset_tiles--tile--8DTcx',
      style: {
        aspectRatio: e.aspectRatio
      },
      children: jsx(Qp, {
        className: 'cooper_first_party_asset_tiles--tilePlaceholderImage--FaXoj',
        animationType: JR.LIGHT_SHIMMER,
        primary: !0
      })
    }, e.id),
    numColumns: e ? 1 : l ? 2 : 3,
    isLeftRail: l,
    getItemHeight: e => e.aspectRatio
  });
}
function n4({
  source: e,
  variant: t = 'secondary'
}) {
  let n = _$$aZ();
  return jsx($z, {
    'aria-label': getI18nString('cooper.templates.new_template'),
    'onClick': n,
    'variant': t,
    'iconPrefix': jsx(_$$x2, {}),
    'trackingProperties': {
      trackingDescriptor: UpgradeAction.NEW_TEMPLATE,
      source: e
    },
    'children': renderI18nText('cooper.templates.new_template')
  });
}
let n6 = userFlagAtomFamily(_$$nR);
let n7 = buildUploadUrl('aaa012bc9019933eac51395f8d09842efe26d15d');
function n8({
  planName: e,
  isLoading: t,
  dismissible: n = !0
}) {
  let l = useDispatch();
  let r = useAtomWithSubscription(n6);
  return (r?.status !== 'loaded' || r?.status === 'loaded' && r?.data) && n ? null : t ? jsx('div', {
    className: 'x2iayur',
    children: jsx(Qp, {
      className: 'xh8yej3 x1yzmhis xyosu76',
      animationType: JR.LIGHT_SHIMMER,
      primary: !0
    })
  }) : jsx('div', {
    className: 'x78zum5 x2iayur xdt5ytf x1cy8zhl x167g77z xkh2ocl',
    children: jsxs('div', {
      className: 'x78zum5 xwn6lyq x6s0dn4 x18x6v2m xkh2ocl x19y5rnk x1sjmt1f x1n2onr6',
      children: [jsx(_$$oW, {
        src: n7,
        className: 'xafpxmx x1fb2l0r xgwsg93'
      }), jsxs('div', {
        className: 'x78zum5 xdt5ytf x1cy8zhl x1i71x30 x98rzlu',
        children: [jsxs('div', {
          className: 'x78zum5 xdt5ytf x1cy8zhl x1nfngrj xkh2ocl',
          children: [jsx('div', {
            ...Ay.props(n3.header),
            children: renderI18nText('cooper.templates.internal.creation_banner_header', {
              orgName: e
            })
          }), jsx('div', {
            ...Ay.props(n3.subheader),
            children: renderI18nText('cooper.templates.internal.creation_banner_subheader')
          })]
        }), jsxs('div', {
          className: 'x78zum5 x6s0dn4 x167g77z',
          children: [jsx(n4, {
            source: n ? 'internal_template_creation_banner' : 'explore_internal_template_creation_banner',
            variant: n ? 'secondary' : 'primary'
          }), jsx(_$$iW, {})]
        })]
      }), n && jsx('div', {
        className: 'x10l6tqk x19up5dg xfr5jun x78zum5 x6s0dn4',
        children: jsx(IconButton, {
          'aria-label': getI18nString('banner.shared.close_banner'),
          'onClick': () => {
            l(postUserFlag({
              [_$$nR]: !0
            }));
          },
          'children': jsx(_$$A3, {
            className: 'xc7nwfd'
          })
        })
      })]
    })
  });
}
let n3 = {
  header: {
    color: 'x1akne3o',
    ..._$$g2.textBodyLargeStrong,
    $$css: !0
  },
  subheader: {
    color: 'x1akne3o',
    ..._$$g2.textBodyMedium,
    $$css: !0
  }
};
function le({
  template: e,
  libraryKey: t,
  section: n
}) {
  let l = Xr(Lm);
  let r = useAtomWithSubscription(Lm);
  let {
    name,
    imageUrl,
    publishers
  } = fG()(e);
  let d = publishers[0] ? publishers[0].name : null;
  let c = _$$Z('cooper_template_picker_view_templates_click');
  return jsx(EI, {
    name,
    label: d ? getI18nString('cooper.templates.by_author', {
      author: d
    }) : void 0,
    thumbnailUrl: imageUrl,
    libraryKey: t,
    onClick: () => {
      c({
        section: n,
        templateId: e.template.id,
        templateLibraryKey: t
      });
      l({
        type: mF.TEMPLATES,
        parentView: r,
        libraryKey: t
      });
    }
  }, e.template.id);
}
function lu({
  onMakeATemplateSelected: e,
  onStartFromDesignSelected: t
}) {
  let n = [{
    id: 'start_from_design',
    onClick: t,
    icon: jsx(_$$e5, {}),
    title: getI18nString('cooper.templates.start_from_design.title'),
    subtitle: getI18nString('cooper.templates.start_from_design.subtitle'),
    dataTestId: 'start-from-design'
  }, {
    id: 'make_a_template',
    onClick: e,
    icon: jsx(_$$Q, {}),
    title: getI18nString('cooper.templates.make_a_template.title'),
    subtitle: getI18nString('cooper.templates.make_a_template.subtitle'),
    iconStyle: 'makeATemplate',
    dataTestId: 'make-a-template'
  }];
  return jsx(_$$V, {
    buttons: n,
    editorType: _YF.COOPER,
    wrapperStyle: lx.wrapper
  });
}
let lx = {
  wrapper: {
    padding: 'xi4r6k5',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: !0
  }
};
function lh({
  libraryKeyToPublishedLibrary: e,
  components: t
}) {
  let n = VU();
  getFeatureFlags().buzz_video_export || (t = t.filter(e => !e.has_video));
  return jsx(nT, {
    items: t,
    renderItem: t => {
      if (!t || !t.library_key) return null;
      let n = e.get(t.library_key);
      return n ? jsx(nQ, {
        library: n,
        template: t,
        insertDetached: !0,
        dimensions: lg(t)
      }, t.node_id) : null;
    },
    numColumns: n ? 2 : 3,
    isLeftRail: n,
    getItemHeight: e => nI(lg(e))
  });
}
let lg = e => {
  let t = e.min_node_width;
  let n = e.min_node_height;
  return t && n ? {
    width: t,
    height: n
  } : void 0;
};
function lb({
  trimmedSearchQuery: e,
  templateResults: t,
  internalAssetResults: n,
  communityAssetResults: l,
  requestLoadMore: r,
  numPlaceholderTiles: i
}) {
  let a = useAtomWithSubscription(EC);
  let s = useAtomWithSubscription(_$$xB);
  let d = useAtomWithSubscription(Fs);
  let {
    isLoading,
    libraryKeyToPublishedLibrary,
    components
  } = _$$z4(n.map(e => e.model));
  let m = useCurrentPrivilegedPlan('CooperTemplateSearchView');
  if (a || s || d || isLoading || m.status === 'loading') {
    return jsxs(_$$P, {
      className: na,
      children: [jsx(t3, {}), jsx(_$$p2, {
        children: Array.from({
          length: i
        }).map((e, t) => jsx(ON, {}, `tile-placeholder-${t}`))
      }), jsx(t3, {}), jsx(n1, {
        numTiles: i
      }), jsx(t3, {}), jsx(n1, {
        numTiles: i
      })]
    });
  }
  let h = t.length === 0 && n.length === 0 && l.length === 0;
  let g = t.length > 0 || n.length > 0;
  return h ? jsx(lj, {
    query: e
  }) : jsxs(_$$P, {
    className: na,
    children: [t.length > 0 && jsxs(Fragment, {
      children: [jsx(t8, {
        title: getI18nString('cooper.templates.template_files_from_plan', {
          planName: m.data?.name || ''
        }),
        showWorkspaceIcon: !0
      }), jsx(_$$p2, {
        children: t.map(e => {
          let t = NH(e);
          return t ? jsx(l_, {
            template: e,
            libraryKey: _$$l(t)
          }, e.template.id) : null;
        })
      })]
    }), n.length > 0 && jsxs(Fragment, {
      children: [jsx(t8, {
        title: getI18nString('cooper.templates.assets_from_plan', {
          planName: m.data?.name || ''
        })
      }), jsx(lh, {
        components,
        libraryKeyToPublishedLibrary
      })]
    }), g && l.length > 0 && jsx('div', {
      className: 'xh8yej3 xjm9jq1 x10c9m7z'
    }), l.length > 0 && jsxs(Fragment, {
      children: [jsx(t8, {
        title: getI18nString('cooper.templates.assets_from_figma')
      }), jsx(n0, {
        assets: l.map(e => e.model)
      })]
    }), jsx(_$$a5, {
      onIntersectionChange: ({
        isIntersecting: e
      }) => {
        e && r();
      }
    })]
  });
}
function l_({
  template: e,
  libraryKey: t
}) {
  let n = Xr(_$$d2);
  let {
    name,
    imageUrl,
    publishers
  } = fG()(e);
  let a = publishers[0] ? publishers[0].name : null;
  return jsx(EI, {
    name,
    label: a ? getI18nString('cooper.templates.by_author', {
      author: a
    }) : void 0,
    thumbnailUrl: imageUrl,
    libraryKey: t,
    onClick: () => {
      n({
        type: Ef.BROWSING_TEMPLATE,
        libraryKey: t
      });
    },
    truncateHoverText: !0
  }, e.template.id);
}
function lj({
  query: e
}) {
  let t = e ? renderI18nText('cooper.templates.couldnt_find_templates_error', {
    searchTerm: jsx('span', {
      className: cssBuilderInstance.fontBold.$,
      children: e
    })
  }) : renderI18nText('cooper.templates.no_templates_found');
  return jsxs('div', {
    className: 'x1nz7w5u xyx8554 xzc32ve x1w4f5ud x78zum5 x98rzlu xdt5ytf x6s0dn4',
    children: [jsx(SvgComponent, {
      svg: _$$A5,
      useOriginalSrcFills_DEPRECATED: !0,
      svgHeight: '120px'
    }), jsx('div', {
      ..._$$xk(ly.emptyStateText),
      children: t
    })]
  });
}
let ly = {
  emptyStateText: {
    color: 'xge78cn',
    ..._$$g2.textBodyMedium,
    $$css: !0
  }
};
function lE() {
  let e = Xr(_$$az);
  let [t, n] = useAtomValueAndSetter(Hb);
  let l = M1();
  let r = t?.name ?? l;
  return r ? jsx(tQ, {
    title: r,
    onBack: () => {
      e(!1);
      n(null);
    }
  }) : null;
}
function lv() {
  let e = function () {
    let {
      exploreResourceIds
    } = tv();
    return exploreResourceIds;
  }();
  let t = _$$j2();
  let n = isBuzzImportFromDesignEnabled();
  let l = _$$aZ();
  let r = useAtomWithSubscription(Lm);
  let {
    resetScrollTop
  } = Nd(mF.ALL);
  let s = Xr(Lm);
  let d = useCurrentPrivilegedPlan('CooperTemplateAllView');
  useEffect(() => () => resetScrollTop([mF.ALL]), [resetScrollTop]);
  return r.type === mF.ALL ? jsx(Fragment, {
    children: jsxs(_$$P, {
      className: na,
      children: [t && n() && jsx(lu, {
        onMakeATemplateSelected: l,
        onStartFromDesignSelected() {
          s({
            type: mF.IMPORT_FROM_DESIGN
          });
        }
      }), jsx(ng, {
        hideNewTemplateTile: n()
      }), d?.data?.type === FOrganizationLevelType.ORG && jsx(lI, {}), d?.data?.type === FOrganizationLevelType.TEAM && jsx(lw, {
        plan: d.data
      }), jsx(t8, {
        title: getI18nString('cooper.templates.from_figma')
      }), jsx(lz, {
        includeCuratedAssets: !0,
        resourceIds: e
      }, 'explore')]
    })
  }) : jsx(nc, {
    onBackCallback: () => s({
      type: mF.ALL
    })
  });
}
function lT() {
  let {
    scrollPosition,
    scrollRef,
    onScroll,
    resetScrollTop
  } = Nd(mF.ALL);
  let [r, i] = useAtomValueAndSetter(_$$az);
  useEffect(() => {
    r && i(!1);
  }, [r, i]);
  useEffect(() => () => resetScrollTop([mF.ALL]), [resetScrollTop]);
  return jsx(_$$P, {
    className: nd,
    scrollContainerRef: scrollRef,
    initialScrollTop: scrollPosition,
    onScroll,
    children: jsx(lA, {})
  });
}
function lI() {
  let e = Xr(Lm);
  let t = useCurrentUserOrg();
  let n = _$$j2();
  let [{
    data: l,
    status: r
  }] = setupResourceAtomHandler(lS(t?.id), {
    enabled: n
  });
  if (!n || r === 'errors' || r === 'disabled') return null;
  let i = (l?.length ?? 0) > YS;
  let a = i ? l?.slice(0, YS) : l;
  let s = a && a.length > 0;
  let d = i ? () => e({
    type: mF.ORG
  }) : void 0;
  let c = jsx(t8, {
    title: getI18nString('cooper.templates.from_org_name', {
      orgName: t?.name ?? ''
    }),
    onClick: d,
    trackingProperties: {
      section: 'explore_org_templates'
    }
  });
  return r === 'loading' ? jsxs(Fragment, {
    children: [c, jsx(_$$p2, {
      children: Array.from({
        length: YS
      }, (e, t) => jsx(ON, {}, `tile-placeholder-${t}`))
    })]
  }) : s ? jsxs(Fragment, {
    children: [c, jsx(_$$p2, {
      children: a.filter(e => e.library_key).map(e => jsx(le, {
        template: {
          type: _$$n3.TeamTemplate,
          template: e
        },
        libraryKey: e.library_key,
        section: 'explore_org_templates'
      }, e.id))
    })]
  }) : jsxs(Fragment, {
    children: [c, jsx(n8, {
      planName: t?.name ?? '',
      isLoading: !1,
      dismissible: !1
    })]
  });
}
let lS = liveStoreInstance.Query({
  fetch: async e => e ? await _$$q4.getSearchPaginated({
    orgId: e,
    size: 8,
    from: 0,
    templateType: FFileType.COOPER
  }).then(e => e.data.meta.templates) : []
});
function lk({
  assetType: e,
  name: t,
  dimensions: n
}) {
  let l = Xr(_$$az);
  let r = Xr(Hb);
  let i = jv(e);
  return i ? jsx(t8, {
    title: i,
    onClick: () => {
      l(!0);
      r({
        assetType: e,
        name: t,
        dimensions: n
      });
    },
    trackingProperties: {
      section: 'asset_type_header',
      assetType: e,
      name: t
    }
  }) : null;
}
function lC({
  assetType: e,
  name: t,
  dimensions: n
}) {
  let l = useAtomWithSubscription(Co);
  let {
    category_slug,
    tags_slug
  } = gF(e);
  let [{
    data: a,
    isFetchingNextPage: s
  }] = setupResourceAtomHandler(_$$a6.ResourcesPaginatedQuery({
    resourceType: [ResourceTypeEnum.COOPER_TEMPLATE_ASSET],
    caller: _$$z3.COOPER_TEMPLATE_PICKER,
    pageSize: 12,
    editorType: DesignToolType.COOPER,
    sortBy: SortOptions.Browse.PUBLISHED_AT,
    includeContent: !0,
    category: category_slug,
    tags: tags_slug
  }), {
    enabled: !0
  });
  let d = _$$z2({
    items: a,
    pageSize: 12,
    randomSeed: l
  });
  let c = AO({
    dimensions: {
      width: n.x,
      height: n.y
    },
    assets: d
  });
  if (!c || c.length === 0) return null;
  let u = n.x > 1.5 * n.y;
  return jsxs(Fragment, {
    children: [jsx(lk, {
      assetType: e,
      name: t,
      dimensions: n
    }), jsx(n0, {
      assets: c.slice(0, 4),
      fetchNextPage: _$$lQ,
      hasNextPage: !1,
      isFetchingNextPage: s,
      singleColumn: u
    })]
  });
}
function lA() {
  let e = (CooperTemplateTypesTsBindings?.getAllExceptCustomTemplateGroups() || []).flatMap(e => e.types);
  return e && e.length !== 0 ? jsx(Fragment, {
    children: e.map(e => jsx(lC, {
      assetType: e.type,
      name: e.name,
      dimensions: e.dimension
    }, e.type))
  }) : jsx(Fragment, {});
}
function lz({
  category: e,
  tags: t,
  resourceIds: n,
  shelfId: l,
  singleColumn: r = !1,
  fixedAspectRatio: i,
  includeCuratedAssets: s = !1,
  isAssetTypeView: c = !1
}) {
  let u = useAtomWithSubscription(Co);
  let x = VU();
  let p = useAtomWithSubscription(Lm);
  let {
    scrollPosition,
    scrollRef,
    onScroll
  } = Nd(p.type);
  let f = useSelectedCooperFrameId();
  let b = useAtomWithSubscription(Hb);
  let j = s && !!n && n.length > 0 && !l;
  let y = {
    resourceType: [ResourceTypeEnum.COOPER_TEMPLATE_ASSET],
    caller: _$$z3.COOPER_TEMPLATE_PICKER,
    pageSize: 20,
    editorType: DesignToolType.COOPER,
    sortBy: SortOptions.Browse.PUBLISHED_AT,
    includeContent: !0,
    includeCategorySlug: !0,
    includeTags: !0
  };
  let [{
    data: E,
    status: v
  }] = setupResourceAtomHandler(_$$a6.ResourcesPaginatedQuery({
    ...y,
    resourceIds: n
  }), {
    enabled: j
  });
  let [{
    data: T,
    status: I,
    hasNextPage: S,
    isFetchingNextPage: k
  }, {
    fetchNextPage: C
  }] = setupResourceAtomHandler(_$$a6.ResourcesPaginatedQuery({
    ...y,
    category: e,
    tags: t,
    resourceIds: j ? void 0 : n
  }), {
    enabled: !l
  });
  let [{
    data: A,
    status: z,
    hasNextPage: N,
    isFetchingNextPage: R
  }, {
    fetchNextPage: L
  }] = setupResourceAtomHandler(communityShelfService.ShelfContentPaginatedQuery({
    shelfId: l,
    includeContent: !0,
    pageSize: 20
  }), {
    enabled: !!l
  });
  let {
    assets,
    status,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage
  } = l ? {
    assets: A,
    status: z,
    hasNextPage: N,
    isFetchingNextPage: R,
    fetchNextPage: L
  } : {
    assets: T,
    status: I,
    hasNextPage: S,
    isFetchingNextPage: k,
    fetchNextPage: C
  };
  let D = status === 'loading' || j && v === 'loading';
  let $ = b?.dimensions ? {
    width: b.dimensions.x,
    height: b.dimensions.y
  } : f ? SceneGraphHelpers?.getNodeSize(f) : null;
  let V = c && $ ? AO({
    dimensions: $,
    assets
  }) : assets ?? void 0;
  let G = function ({
    shuffledCuratedAssets: e,
    shuffledFirstPartyAssets: t,
    queryCuratedAssets: n,
    curatedStatus: l
  }) {
    return useMemo(() => {
      if (!n) return t;
      if (l === 'loading') return [];
      let r = [...e, ...t];
      let i = new Set();
      return r.filter(e => !i.has(e.id) && (i.add(e.id), !0));
    }, [n, l, e, t]);
  }({
    shuffledCuratedAssets: _$$z2({
      items: E,
      pageSize: 20,
      randomSeed: u,
      enabled: j
    }),
    shuffledFirstPartyAssets: _$$z2({
      items: V,
      pageSize: 20,
      randomSeed: u
    }),
    queryCuratedAssets: j,
    curatedStatus: v
  });
  let U = D ? jsx(n1, {
    singleColumn: r,
    aspectRatio: i
  }, e ?? n?.slice(0, 3).join(',')) : jsx(n0, {
    assets: G,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    singleColumn: r
  });
  return x ? D || G.length !== 0 ? jsx(_$$P, {
    className: nd,
    scrollContainerRef: scrollRef,
    initialScrollTop: scrollPosition,
    onScroll,
    children: U
  }) : jsx(lj, {}) : U;
}
function lN({
  size: e = 24
}) {
  let t = useCurrentPrivilegedPlan('CurrentWorkspaceIcon');
  let n = useCurrentPlanUser('CurrentWorkspaceIcon').unwrapOr(null);
  let l = n?.userId;
  return l ? jsx(renderAvatar, {
    size: e,
    userId: l,
    teamId: t.data?.key.type === 'team' ? t.data.key.parentId : void 0,
    orgId: t.data?.key.type === 'organization' ? t.data.key.parentId : void 0
  }) : null;
}
function lR() {
  let e = useCurrentPrivilegedPlan('CooperTemplateLeftRailEmptyState');
  let t = e.status === 'loaded' ? e.data.name : '';
  let n = _$$j2();
  let l = useCurrentPlanUser('CooperTemplateLeftRailEmptyState').unwrapOr(null);
  return l?.userId ? jsx(Fragment, {
    children: n && jsxs('div', {
      className: 'x78zum5 xdt5ytf x1excjyp xzlf1m7 x2b8uid x7hzu26',
      children: [jsxs('div', {
        className: 'x78zum5 xdt5ytf x1nfngrj',
        children: [jsx('div', {
          className: 'x1ihwiht x78zum5 xl56j7k x6s0dn4',
          children: jsx(lN, {})
        }), jsx('div', {
          ..._$$xk(lL.bodyMediumStrong),
          children: renderI18nText('cooper.templates.empty_team_templates.header', {
            planName: t
          })
        }), jsx('div', {
          ..._$$xk(lL.bodyMedium),
          children: renderI18nText('cooper.templates.empty_team_templates.description')
        })]
      }), jsx('div', {
        className: 'x78zum5 xdt5ytf x1nfngrj',
        children: jsx(_$$iW, {
          isWide: !0
        })
      })]
    })
  }) : null;
}
function lw({
  plan: e
}) {
  let t = Xr(Lm);
  let n = useCurrentPublicPlan('CooperTemplateAllViewTeamTemplateSection');
  let l = useIsProOrStudentPlan(n).unwrapOr(!1);
  let {
    templatesByTeam,
    isLoading
  } = _$$li({
    teamId: e.key.parentId,
    editorType: FFileType.COOPER,
    pageSize: YS,
    enabled: l
  });
  if (!l) return null;
  if (isLoading) {
    return jsxs(Fragment, {
      children: [jsx(t8, {
        title: getI18nString('cooper.templates.from_org_name', {
          orgName: e.name ?? ''
        })
      }), jsx(_$$p2, {
        children: Array.from({
          length: YS
        }).map((e, t) => jsx(ON, {}, `tile-placeholder-${t}`))
      })]
    });
  }
  if (!templatesByTeam || templatesByTeam.templates.length === 0) {
    return jsxs(Fragment, {
      children: [jsx(t8, {
        title: getI18nString('cooper.templates.from_org_name', {
          orgName: e.name ?? ''
        }),
        trackingProperties: {
          section: 'explore_team_templates'
        }
      }), jsx(n8, {
        planName: e.name ?? '',
        isLoading: !1,
        dismissible: !1
      })]
    });
  }
  let a = templatesByTeam.totalTemplatesByTeam > YS;
  let s = templatesByTeam.templates;
  let d = a ? () => {
    t({
      type: mF.ORG
    });
  } : void 0;
  return jsxs(Fragment, {
    children: [jsx(t8, {
      title: getI18nString('cooper.templates.from_org_name', {
        orgName: e.name ?? ''
      }),
      onClick: d,
      actions: jsx(n4, {
        source: 'from_plan_name_header'
      }),
      trackingProperties: {
        section: 'explore_team_templates'
      }
    }), jsx(_$$p2, {
      children: templatesByTeam ? s.map(e => {
        if (e.libraryKey) {
          return jsx(le, {
            template: {
              type: _$$n3.TeamTemplateLg,
              template: e
            },
            libraryKey: _$$l(e.libraryKey),
            section: 'explore_team_templates'
          }, e.id);
        }
      }) : Array.from({
        length: YS
      }).map((e, t) => jsx(ON, {}, `tile-placeholder-${t}`))
    })]
  });
}
let lL = {
  bodyMedium: {
    ..._$$g2.textBodyMedium,
    $$css: !0
  },
  bodyMediumStrong: {
    ..._$$g2.textBodyMediumStrong,
    $$css: !0
  }
};
let lO = buildUploadUrl('f154d729096e62f801de754ea07c93c45ffc2565');
function lM({
  planName: e
}) {
  return jsxs('div', {
    className: 'x78zum5 x5yr21d x1y64a76 xi4r6k5 xdt5ytf xl56j7k x6s0dn4 x18x6v2m x19y5rnk xn6q82d',
    children: [jsxs('div', {
      className: 'x78zum5 xdt5ytf xl56j7k x6s0dn4 x1nfngrj xkh2ocl',
      children: [jsx(lN, {
        size: 32
      }), jsx('div', {
        ...Ay.props(lF.header),
        children: renderI18nText('cooper.templates.internal.creation_banner_header', {
          orgName: e
        })
      }), jsx('div', {
        ...Ay.props(lF.subheader),
        children: renderI18nText('cooper.templates.internal.creation_banner_subheader')
      })]
    }), jsx(_$$oW, {
      src: lO,
      className: 'x1cvmir6 x1ohnph8 x2lah0s x1159492 x19y5rnk xehbxol x3nwc95'
    }), jsxs('div', {
      className: 'x78zum5 x6s0dn4 x167g77z',
      children: [jsx(n4, {
        variant: 'primary',
        source: 'internal_templates_null_state'
      }), jsx(_$$iW, {})]
    })]
  });
}
let lF = {
  header: {
    color: 'x1akne3o',
    textAlign: 'x2b8uid',
    ..._$$g2.textHeadingMedium,
    $$css: !0
  },
  subheader: {
    color: 'x1akne3o',
    textAlign: 'x2b8uid',
    ..._$$g2.textBodyMedium,
    maxWidth: 'xpqan2r',
    $$css: !0
  }
};
function lD({
  teamId: e,
  displayName: t
}) {
  let n = useCurrentUserOrgId();
  let {
    requestLoadMoreForTeam,
    templatesByTeam,
    isLoading
  } = _$$li({
    teamId: e,
    editorType: FFileType.COOPER
  });
  let a = Xr(Lm);
  let {
    scrollPosition,
    scrollRef,
    onScroll
  } = Nd(mF.TEAM);
  return jsxs(Fragment, {
    children: [jsx(tQ, {
      title: t,
      onBack: () => n ? a({
        type: mF.ORG
      }) : a({
        type: mF.ALL
      })
    }), templatesByTeam ? jsx(_$$P, {
      className: ns,
      scrollContainerRef: scrollRef,
      initialScrollTop: scrollPosition,
      onScroll,
      children: jsx(l$, {
        scrollContainerRef: scrollRef,
        templates: templatesByTeam.templates,
        onRequestMore: requestLoadMoreForTeam,
        isLoading
      })
    }) : null]
  });
}
function l$({
  templates: e,
  scrollContainerRef: t,
  onRequestMore: n,
  isLoading: l
}) {
  let r = e?.[e.length - 1]?.id;
  let i = useRef(null);
  _$$X2({
    containerRef: t,
    targetRef: i,
    targetKey: r,
    onIntersectionChange: n
  });
  return jsx('div', {
    className: 'xz9dl7a',
    children: jsx(_$$p2, {
      children: l ? Array.from({
        length: 11
      }).map((e, t) => jsx(ON, {}, `tile-placeholder-${t}`)) : e.map(e => {
        let t = e.libraryKey;
        if (t) {
          return jsx(le, {
            template: {
              type: _$$n3.TeamTemplateLg,
              template: e
            },
            libraryKey: _$$l(t),
            section: 'single_team_view'
          }, e.id);
        }
      })
    })
  });
}
function lV({
  plan: e
}) {
  let t = VU();
  let {
    scrollPosition,
    scrollRef,
    onScroll
  } = Nd(mF.ORG);
  let i = useCurrentPublicPlan('CooperTemplateOrgView').transform(e => e.tier === FPlanNameType.ENTERPRISE);
  let {
    yourTemplates,
    isLoading
  } = function ({
    plan: e
  }) {
    let {
      type,
      key: {
        parentId
      }
    } = e;
    let l = useCurrentPublicPlan('useCooperYourTemplates');
    let r = useIsProOrStudentPlan(l).unwrapOr(!1);
    let i = type === FOrganizationLevelType.ORG && parentId ? parentId : void 0;
    let o = r && parentId ? parentId : void 0;
    let {
      resources,
      loading
    } = yH({
      resourceTypes: [ResourceTypeEnum.COOPER_TEMPLATE_FILE],
      limit: 3,
      orgId: i,
      teamId: o,
      caller: _$$z3.COOPER_TEMPLATE_PICKER,
      sortBy: SortOptions.Browse.PUBLISHED_AT,
      selfPublished: !0,
      includeContent: !0,
      enableQuery: !!(i || o)
    });
    return {
      yourTemplates: !loading && resources ? resources.map(e => getTeamTemplateLg(e)).filter(Boolean) : [],
      isLoading: loading
    };
  }({
    plan: e
  });
  let {
    templates,
    isLoading: _isLoading,
    requestLoadMoreTemplates
  } = RD({
    plan: e,
    areWorkspacesEnabled: i.status === 'loaded' && i.data,
    numTemplatesPerTeam: YS,
    editorType: FFileType.COOPER,
    filterByIds: null
  });
  let p = templates?.type === 'org_plus' ? templates.data[templates.data.length - 1]?.teamId ?? null : null;
  let m = useRef(null);
  _$$X2({
    containerRef: scrollRef,
    targetRef: m,
    targetKey: p,
    onIntersectionChange: requestLoadMoreTemplates
  });
  let h = templates?.type === O$.ORG_PLUS && templates.data.length > 0;
  let g = templates?.type === O$.PRO_OR_STUDENT_TEAM && templates.data?.templates;
  let f = yourTemplates.length > 0;
  let b = _isLoading || isLoading;
  return b || h || g || f ? jsxs(Fragment, {
    children: [jsx(lG, {
      planName: e.name,
      isLeftRail: t
    }), jsxs(_$$P, {
      className: ns,
      scrollContainerRef: scrollRef,
      initialScrollTop: scrollPosition,
      onScroll,
      children: [!t && !f && jsx(n8, {
        planName: e.name,
        isLoading: b
      }), jsx(lX, {
        templates: yourTemplates
      }), b ? jsx(lH, {}) : jsx(lU, {
        templates,
        requestLoadMoreTemplates,
        isLoading: b,
        lastTeamId: p,
        targetRef: m,
        scrollRef
      })]
    })]
  }) : t ? jsx(lR, {}) : jsx(lM, {
    planName: e.name
  });
}
function lG({
  planName: e,
  isLeftRail: t
}) {
  return t ? null : jsxs('div', {
    className: 'cooper_template_view--orgHeader--I9JMN',
    children: [jsxs('div', {
      className: 'cooper_template_view--orgContainer--2Ihox',
      children: [jsx('div', {
        className: 'cooper_template_view--orgAvatar--wRUGh',
        children: jsx(lN, {})
      }), jsx('div', {
        className: cssBuilderInstance.textBodyLargeStrong.$,
        children: getI18nString('cooper.templates.from_plan_name', {
          planName: e
        })
      })]
    }), jsx('div', {
      className: 'cooper_template_view--orgHeaderButtons--1U6-0',
      children: jsx(n4, {
        variant: 'primary',
        source: 'plan_view_header'
      })
    })]
  });
}
function lU({
  templates: e,
  requestLoadMoreTemplates: t,
  isLoading: n,
  lastTeamId: l,
  targetRef: r,
  scrollRef: i
}) {
  let a = Xr(Lm);
  return e ? e.type === 'org_plus' ? jsx(Fragment, {
    children: e.data.map(e => jsx('div', {
      ref: l === e.teamId ? r : null,
      children: jsx(lK, {
        title: e.teamName ?? '',
        templates: e.templates,
        teamId: e.teamId,
        onSeeAllClick: e.totalTemplatesByTeam > YS ? () => a({
          type: mF.TEAM,
          teamId: e.teamId,
          displayName: e.teamName ?? ''
        }) : void 0
      }, e.teamId)
    }, e.teamId))
  }) : jsxs(Fragment, {
    children: [jsx(tQ, {
      title: e.data?.teamName ?? ''
    }), jsx(l$, {
      scrollContainerRef: i,
      templates: e.data?.templates ?? [],
      onRequestMore: t,
      isLoading: n
    })]
  }) : null;
}
function lK({
  title: e,
  teamId: t,
  templates: n,
  onSeeAllClick: l
}) {
  return jsxs('div', {
    children: [jsx(t8, {
      title: e,
      onClick: l,
      trackingProperties: {
        section: 'org_view_team_templates',
        teamId: t
      }
    }), jsx(_$$p2, {
      children: n.map(e => {
        let t = NH(e);
        if (t) {
          return jsx(le, {
            template: e,
            libraryKey: _$$l(t),
            section: 'org_view_team_templates'
          }, e.template.id);
        }
      })
    })]
  });
}
let lW = [6, 3, 4, 5];
function lH() {
  return jsx(Fragment, {
    children: Array.from({
      length: 4
    }).map((e, t) => jsxs('div', {
      children: [jsx(t3, {}), jsx(_$$p2, {
        children: Array.from({
          length: lW[t] ?? YS
        }).map((e, t) => jsx(ON, {}, `tile-placeholder-${t}`))
      })]
    }, `team-placeholder-${t}`))
  });
}
function lX({
  templates: e
}) {
  return e.length === 0 ? null : jsxs('div', {
    children: [jsx(t8, {
      title: getI18nString('cooper.templates.template_picker.org_view.your_templates.title')
    }), jsx(_$$p2, {
      children: e.map(e => {
        let t = NH(e);
        if (t) {
          return jsx(le, {
            template: e,
            libraryKey: _$$l(t),
            section: 'org_view_your_templates'
          }, e.template.id);
        }
      })
    })]
  });
}
function lY({
  libraryKey: e
}) {
  let t = Xr(_$$d2);
  let n = VU();
  let l = useDispatch();
  let r = useLibraries([_$$l(e)]);
  let i = r.data;
  let d = r.status === 'loading';
  let c = _M(_$$l(e));
  let u = c.data.templates;
  let x = c.data.template_name;
  let h = useMemo(() => [...u].sort(go), [u]);
  if (c.status !== 'loaded' || d) return jsx(_$$ah, {});
  u.length || (l(VisualBellActions.enqueue({
    type: 'buzz-template',
    message: getI18nString('slides.templates.toast.no_longer_available'),
    error: !0,
    icon: VisualBellIcon.EXCLAMATION
  })), t({
    type: Ef.DEFAULT
  }));
  let g = i[0];
  g && !isPublishedLibraryWithAssets(g) && (g = void 0);
  return jsxs(Fragment, {
    children: [jsx(tQ, {
      title: x || '',
      actions: g ? jsx(vu, {
        editorType: FFileType.COOPER,
        libraryKey: g.library_key,
        showText: !n
      }) : void 0,
      onBack: () => t({
        type: Ef.DEFAULT
      })
    }), jsx(_$$P, {
      className: cssBuilderInstance.hFull.$,
      children: jsx('div', {
        className: 'xz9dl7a',
        children: h.length === 1 && h[0] ? jsx(nq, {
          library: g,
          templateSet: h[0]
        }) : jsx('div', {
          className: cssBuilderInstance.relative.$,
          children: h.map(e => jsx(nH, {
            templateSet: e,
            library: g
          }, e.node_id))
        })
      })
    })]
  });
}
function lq({
  useCase: e
}) {
  let t = function (e) {
    let t = isBuzzTemplatePickerCmtyShelvesEnabled();
    let {
      useCaseMap,
      useCaseMapV2
    } = tv();
    let r = (t ? useCaseMapV2 : useCaseMap)[e]?.category_slugs;
    return r && r.length > 0 ? r[0] : void 0;
  }(e);
  let n = function (e) {
    let t = tk();
    return t[e]?.resource_ids || [];
  }(e);
  let l = function (e) {
    let t = tC();
    let n = t[e]?.shelf_ids;
    return n && n.length > 0 ? n[0] : void 0;
  }(e);
  let r = useRef(null);
  useEffect(() => {
    r.current && (r.current.scrollTop = 0);
  }, [e]);
  return jsx(_$$P, {
    className: na,
    scrollContainerRef: r,
    children: jsx('div', {
      className: 'x1w4f5ud',
      children: jsx(lz, {
        category: t,
        resourceIds: n.length > 0 ? n : void 0,
        shelfId: l
      }, `use-case-view-${e}`)
    })
  });
}
function lJ() {
  let e = Xr(_$$ce);
  let t = Xr(_$$d2);
  let n = Xr(Lo);
  let l = Xr(Lm);
  return useCallback(() => {
    e('');
    l({
      type: mF.ALL
    });
    t({
      type: Ef.DEFAULT
    });
    n();
  }, [e, l, t, n]);
}
function lQ() {
  let {
    trimmedSearchQuery,
    searchQuery,
    setSearchQuery,
    templateResults,
    internalAssetResults,
    communityAssetResults,
    requestLoadMore
  } = _$$pI();
  let {
    files,
    searchQuery: _searchQuery,
    debouncedSearchQuery,
    setSearchQuery: _setSearchQuery,
    status
  } = _8(FFileType.DESIGN);
  let h = useAtomWithSubscription(Lm);
  let g = Xr(Lm);
  let f = useAtomWithSubscription(_$$d2);
  let b = useAtomWithSubscription(openFileKeyAtom);
  let j = useCurrentPrivilegedPlan('CooperTemplateContent');
  let y = lJ();
  useEffect(() => () => {
    y();
  }, [y]);
  _$$a2({
    atom: Co
  });
  let E = !trimmedSearchQuery && h.type !== mF.IMPORT_FROM_DESIGN;
  let v = f.type === Ef.DEFAULT && h.type !== mF.IMPORT_FROM_DESIGN;
  let T = h.type === mF.IMPORT_FROM_DESIGN;
  let I = null;
  switch (h.type) {
    case mF.ALL:
    case mF.START_FROM_SCRATCH:
      I = jsx(lv, {});
      break;
    case mF.NEW_TEMPLATE:
      I = jsx(nc, {});
      break;
    case mF.ORG:
      I = j.status === 'loaded' ? jsx(lV, {
        plan: j.data
      }) : null;
      break;
    case mF.TEAM:
      I = jsx(lD, {
        teamId: h.teamId,
        displayName: h.displayName
      });
      break;
    case mF.TEMPLATES:
      I = jsx(nX, {
        libraryKey: h.libraryKey
      });
      break;
    case mF.USE_CASE:
      I = jsx(lq, {
        useCase: h.useCase
      });
      break;
    case mF.IMPORT_FROM_DESIGN:
      I = jsx(tD, {
        files,
        debouncedSearchQuery,
        status
      });
  }
  return jsx(TrackingProvider, {
    name: e4,
    properties: {
      productType: 'buzz',
      fileKey: b
    },
    children: jsxs('div', {
      className: 'cooper_template_picker--pickerContent--0u3V5',
      children: [v && jsx(tx, {
        searchQuery,
        setSearchQuery,
        customPlaceholder: getI18nString('cooper.templates.search_bar.placeholder')
      }), T && jsx(td, {
        searchQuery: _searchQuery,
        setSearchQuery: _setSearchQuery
      }), jsxs('div', {
        className: 'cooper_template_picker--pickerContentWithSidebar--juClB',
        children: [E && jsx(tz, {
          selectedView: h,
          onViewSelected: e => g(e)
        }), jsx('div', {
          className: 'cooper_template_picker--pickerMainContent--3TeJ9',
          children: trimmedSearchQuery ? f.type === Ef.DEFAULT ? jsx(lb, {
            trimmedSearchQuery,
            templateResults,
            internalAssetResults,
            communityAssetResults,
            requestLoadMore,
            numPlaceholderTiles: 6
          }) : jsx(lY, {
            libraryKey: f.libraryKey
          }) : I
        })]
      })]
    })
  });
}
function l5({
  children: e
}) {
  let t = g5('modal');
  return jsx(utilityNoop, {
    'className': 'cooper_template_modal--templateModal--s4Z-R',
    'size': parsePxInt(CVP),
    'tintedModalBackground': !0,
    'onHide': t,
    'disableClickOutsideToHide': !1,
    'enableEscapeToClose': !0,
    'data-testid': 'cooper-template-modal',
    'children': jsx('div', {
      className: cssBuilderInstance.overflowHidden.$,
      style: {
        height: '600px'
      },
      children: e
    })
  });
}
function l2() {
  let e = useAppModelProperty('isReadOnly');
  let t = useAtomWithSubscription(Tw);
  let n = _$$pK();
  let l = _$$EI();
  let r = XF();
  let i = !!useAtomWithSubscription(Uf);
  return !(!l || e || !n || i || !t || isInteractionPathCheck()) && !!r;
}
function l4() {
  let e = useCurrentFileKey();
  return l2() ? jsx(TrackingProvider, {
    name: 'Buzz Template Overlay Modal',
    properties: {
      productType: 'buzz',
      fileKey: e
    },
    children: jsx(TE.Provider, {
      value: Gu.NEW_FILE_MODAL,
      children: jsx(l5, {
        children: jsx(lQ, {})
      })
    })
  }) : null;
}
function l7() {
  syncDesignModePermission();
  return jsxs(Fragment, {
    children: [jsx(_$$p4, {
      children: jsx(O7, {})
    }), jsx(l4, {})]
  });
}
function ro({
  leftItems: e,
  rightItems: t,
  padding: n
}) {
  let l = createRef();
  let [r, i] = useState(null);
  let s = createRef();
  let [d, c] = useState(null);
  let [u, x] = useState(0);
  wY(l, e => {
    i(e.width);
  });
  wY(s, e => {
    c(e.width);
  });
  let p = r !== null && r > 0 && d !== null && d > 0;
  useEffect(() => {
    x(r !== null ? ra(r) : 0);
    let e = () => {
      x(r !== null ? ra(r) : 0);
    };
    window.addEventListener('resize', e);
    return () => {
      window.removeEventListener('resize', e);
    };
  }, [r]);
  return jsxs(rs, {
    padding: n,
    children: [jsx('div', {
      ref: l,
      className: 'x78zum5 xc26acl',
      children: e
    }), p ? jsx(_$$c4, {}) : null, jsx('div', {
      ref: s,
      className: 'x78zum5 xc26acl',
      children: t(u)
    })]
  });
}
function ra(e) {
  return Math.max(window.innerWidth - e - 300 - 240 - 200, 0);
}
function rs({
  padding: e = 4,
  children: t
}) {
  let n = U1();
  return jsx(W1, {
    menuRef: n,
    padding: e === 0 ? void 0 : e,
    darkModePreferred: !0,
    editorTheme: 'cooper',
    children: t
  });
}
let ry = {
  rowBase: {
    width: 'xh8yej3',
    display: 'xrvj5dj',
    columnGap: 'xfex06f',
    alignItems: 'x6s0dn4',
    $$css: !0
  }
};
let rE = {
  sliderAndInputRow: {
    ...ry.rowBase,
    gridTemplateColumns: 'xzi7dhk',
    $$css: !0
  },
  sliderInputAndIconRow: {
    ...ry.rowBase,
    gridTemplateColumns: 'xu1rsmc',
    $$css: !0
  }
};
let rv = forwardRef(({
  children: e
}, t) => {
  return jsx('div', {
    ref: t,
    ..._$$xk(rE.sliderAndInputRow),
    children: e
  });
});
let rT = forwardRef(({
  children: e
}, t) => {
  return jsx('div', {
    ref: t,
    ..._$$xk(rE.sliderInputAndIconRow),
    children: e
  });
});
function rS({
  value: e,
  ariaLabel: t,
  numberInput: n,
  min: l,
  max: r,
  step: i,
  bigStep: a,
  hints: s,
  onChange: d,
  recordingKey: c
}) {
  return jsxs(rv, {
    children: [jsx(_$$A6, {
      'aria-label': t,
      'bigStep': a,
      'hints': s,
      'max': r,
      'min': l,
      'mixed': isInvalidValue(e),
      'onChange': d,
      'rangeAnchor': l,
      'recordingKey': generateRecordingKey(c, 'slider'),
      'step': i,
      'value': isValidValue(e) ? e : 0
    }), n]
  });
}
let rL = {
  effectsContainer: {
    display: 'xrvj5dj',
    gridTemplateColumns: 'xptrnzf',
    gap: 'x167g77z',
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  effectToggleButtonContainer: {
    borderRadius: 'x4pvk5x',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    boxSizing: 'x9f619',
    outline: 'xczwrxl',
    outlineStyle: null,
    outlineWidth: null,
    outlineColor: 'x1uczgqu',
    outlineOffset: 'x1hl8ikr',
    $$css: !0
  },
  effectToggleButtonContainer_active: {
    outlineColor: 'x14zshoy',
    $$css: !0
  },
  effectToggleButtonContent: {
    display: 'x78zum5',
    flexDirection: 'xdt5ytf',
    alignItems: 'x6s0dn4',
    justifyContent: 'xl56j7k',
    gap: 'x1jnr06f',
    rowGap: null,
    columnGap: null,
    width: 'x1exxlbk',
    height: 'xpyat2d',
    background: 'x8cg4ur',
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
    borderRadius: 'x4pvk5x',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: !0
  }
};
function rP() {
  let {
    isPopoverOpen,
    togglePopover,
    closePopover
  } = _$$j6(_$$p5.CORNERS);
  return jsx(_$$R4, {
    children: jsx(_$$A7, {
      className: 'xxk0z11',
      positionY: _$$j5,
      target: jsx(AutoInteractableWrapper, {
        name: _$$_2.CornersControlEntryPoint,
        children: jsx(rO, {
          isActive: isPopoverOpen,
          onClick: togglePopover
        })
      }),
      renderPopoverContents: () => jsx(_$$k4, {
        name: _$$$2.CornersSubmenu,
        children: jsx(rM, {
          recordingKey: 'cooperInlineCornersPanel'
        })
      }),
      isOpen: isPopoverOpen,
      onClose: closePopover
    })
  });
}
function rO({
  isActive: e,
  onClick: t
}) {
  return jsx(_$$ar, {
    'data-testid': 'cooper-inline-corners-control',
    'aria-label': getI18nString('cooper.inline_menu.corners'),
    'aria-pressed': e,
    'tooltip': getI18nString('cooper.inline_menu.corners'),
    'tooltipType': KindEnum.TEXT,
    'showCaret': !0,
    'isActive': e,
    'onClick': t,
    'recordingKey': 'cooperInlineCornersControl',
    'children': jsx(_$$a7, {})
  });
}
function rM({
  recordingKey: e
}) {
  let t = useDispatch();
  let [n, l] = useSelectionProperty('cornerRadius');
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = getNudgeAmounts();
  let d = useRef(new KD({
    min: 0
  }));
  let c = n ? isInvalidValue(n) ? MIXED_MARKER : n : 0;
  let u = e => l(e, yesNoTrackingEnum.YES);
  return jsx(rs, {
    children: jsx(AutoInteractableWrapper, {
      name: _$$_2.CornersSlider,
      children: jsx('div', {
        className: 'x12xui46 xe8ttls',
        children: jsx(rS, {
          min: 0,
          max: 100,
          step: 1,
          bigStep: 10,
          value: c,
          onChange: u,
          ariaLabel: getI18nString('cooper.inline_menu.corners'),
          numberInput: jsx(AutoInteractableWrapper, {
            name: _$$_2.CornersInput,
            children: jsx(ScrubbableInput, {
              bigNudgeAmount,
              'data-tooltip': getI18nString('cooper.inline_menu.corners'),
              'data-tooltip-type': KindEnum.TEXT,
              'dispatch': t,
              'formatter': d.current,
              'labelWidth': 88,
              'onValueChange': u,
              'recordingKey': generateRecordingKey(e, 'cornersInput'),
              'resolution': 1,
              'scrubMultiplier': 0.1,
              smallNudgeAmount,
              'value': c,
              'wheelMultiplier': 4,
              'children': jsx(_$$a7, {})
            })
          }),
          recordingKey: generateRecordingKey(e, 'cornersSlider')
        })
      })
    })
  });
}
let rB = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M10 12H8.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zM9 8a3 3 0 1 1 6 0v.5a.5.5 0 0 1-1 0V8a2 2 0 1 0-4 0v3h5.5a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 16.5v-4A1.5 1.5 0 0 1 8.5 11H9z',
      clipRule: 'evenodd'
    })
  });
});
let rW = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'm16.7 5.7.315-1.259c.126-.505.844-.505.97 0l.315 1.26 1.26.315c.505.126.505.844 0 .97l-1.26.315-.315 1.26c-.126.505-.844.505-.97 0L16.7 7.3l-1.26-.315c-.505-.126-.505-.844 0-.97zm-6.846 7.446 3.822 3.822A.5.5 0 0 0 14 16.5v-6a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5v4.793l2.146-2.147a.5.5 0 0 1 .708 0m-2.822 3.53L9.5 14.207 12.293 17H7.5a.5.5 0 0 1-.468-.325M13.499 18H7.5A1.5 1.5 0 0 1 6 16.5v-6A1.5 1.5 0 0 1 7.5 9h6a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.497 1.5zM6 7.5A1.5 1.5 0 0 1 7.5 6a.5.5 0 0 1 0 1 .5.5 0 0 0-.5.5.5.5 0 0 1-1 0m3-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m5.5 3.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m0 3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m0 3a.5.5 0 0 1 .5.5 1.5 1.5 0 0 1-1.5 1.5.5.5 0 0 1 0-1 .5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2',
      clipRule: 'evenodd'
    })
  });
});
let r6 = {
  container: {
    width: 'xh8yej3',
    minWidth: 'xt7fyls',
    borderRadius: 'x19y5rnk',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    gap: 'x1jnr06f',
    rowGap: null,
    columnGap: null,
    paddingRight: 'xmzs88n',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    backgroundColor: 'xon4yw5 xvbkg0c',
    $$css: !0
  },
  containerDisabled: {
    'default': 'xg2264',
    ':hover': 'x1xpb28n',
    '$$css': !0
  },
  label: {
    display: 'x1rg5ohu',
    textOverflow: 'xlyipyv',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    textAlign: 'xdpxx8g',
    color: 'xz16r55',
    whiteSpace: 'xuxw1ft',
    $$css: !0
  },
  labelDisabled: {
    color: 'x19bcr95',
    $$css: !0
  },
  shortcutText: {
    ..._$$g2.textBodyMedium,
    color: 'xkrz9af',
    $$css: !0
  },
  iconContainerDisabled: {
    '--color-icon': 'x180r7m8',
    '$$css': !0
  }
};
function r7({
  icon: e,
  label: t,
  fullscreenAction: n,
  onClick: l,
  recordingKey: r,
  disabled: i,
  tooltip: a
}) {
  let d = useSelector(e => e.mirror.appModel.keyboardShortcuts);
  let c = _$$c5(d, n ?? '');
  return jsxs(ButtonPrimitive, {
    onClick: l,
    ..._$$xk(r6.container, i && r6.containerDisabled),
    recordingKey: r,
    disabled: i,
    htmlAttributes: {
      'data-tooltip': a,
      'data-tooltip-type': KindEnum.TEXT
    },
    children: [jsx('span', {
      ..._$$xk(i && r6.iconContainerDisabled),
      children: e
    }), jsx('div', {
      ..._$$xk(r6.label, i && r6.labelDisabled),
      children: t
    }), jsx('span', {
      className: 'x2wgani x1iyjqo2'
    }), c.length > 0 ? jsx('p', {
      ..._$$xk(r6.shortcutText),
      children: c
    }) : jsx('span', {
      className: 'x1849jeq'
    })]
  });
}
function ii() {
  let e = useDispatch();
  let {
    close
  } = _$$cq();
  return useCallback(() => {
    B3(JT.EDIT_IMAGE);
    scheduler.postTask(() => {
      $I({
        moduleToOpen: {
          type: 'custom',
          module: jsx(Tu, {}),
          name: Sn.EDIT_IMAGE
        },
        trackingData: {
          source: 'buzz-inline-toolbar'
        }
      });
      e(hideModal());
    });
    close();
  }, [close, e]);
}
let ix = {
  r: 0,
  g: 0,
  b: 0,
  a: 1
};
let ip = {
  r: 1,
  g: 1,
  b: 1,
  a: 1
};
let im = {
  r: 245 / 255,
  g: 245 / 255,
  b: 245 / 255,
  a: 1
};
let ih = [ix, ip];
function ig(e) {
  let t = roundTo2Decimals(e.opacity ?? 0);
  return !!((colorsEqual(e.color, ix) || colorsEqual(e.color, ip)) && t === 1 || colorsEqual(e.color, ix) && (t === 0 || t === 0.18 || t === 0.1) || colorsEqual(e.color, im) && t === 1);
}
function ib(e, t) {
  return !(!e || isInvalidValue(e)) && t.some(t => colorsEqual(e.color, t));
}
let i_ = ['SOLID', 'GRADIENT_LINEAR', 'GRADIENT_ANGULAR', 'GRADIENT_DIAMOND', 'GRADIENT_RADIAL', 'IMAGE', 'VIDEO'];
function ij() {
  let [e] = useSelectionProperty('imageOverlayPaint');
  let t = useSelectionPropertyValue('fillPaints');
  return useCallback((n, l) => {
    paintManager.clearCache();
    let r = [{
      ...n,
      opacity: n.color?.a
    }, ...(!t || isInvalidValue(t) ? [] : t.filter(e => !i_.includes(e.type)))];
    e && isValidValue(e) && r.push(e);
    fullscreenValue.updateSelectionProperties({
      fillPaints: r
    }, {
      shouldCommit: l
    });
  }, [e, t]);
}
var iy = (e => (e[e.DISABLED = 0] = 'DISABLED', e[e.ACTIVE = 1] = 'ACTIVE', e))(iy || {});
let iE = ['bold', 'semibold', 'semi bold', 'black'];
function iv(e, t) {
  let n = Zr('toggle-bold');
  let l = Zr('text-toggle-italic');
  let r = t && isValidValue(t) && e[t] ? Object.keys(e[t]) : [];
  let i = r.every(e => !iT(e));
  let o = r.every(e => !iI(e));
  let a = !n || i ? 0 : void 0;
  let s = !l || o ? 0 : void 0;
  let d = useSelectionPropertyValue('fontStyle');
  return useMemoStable(() => {
    if (!d || isInvalidValue(d)) {
      return {
        bold: a,
        italic: s
      };
    }
    let e = iT(d) ? 1 : void 0;
    let t = iI(d) ? 1 : void 0;
    return {
      bold: a ?? e,
      italic: s ?? t
    };
  }, [d, a, s]);
}
function iT(e) {
  return iE.some(t => e.toLowerCase().includes(t));
}
function iI(e) {
  return e.toLowerCase().includes('italic');
}
function iS() {
  let e = function () {
    let e = ik();
    return e ? e.type === 'MIXED_PAINT' ? MIXED_MARKER : e.paint.type === 'IMAGE' ? [e.paint, e.index] : void 0 : e;
  }();
  return !e || isInvalidValue(e) ? null : e[0];
}
function ik() {
  let [e] = useSelectionProperty('fillsType');
  return function (e, t, n) {
    if (!t) return;
    if (isInvalidValue(t)) {
      return {
        type: 'MIXED_PAINT',
        paint: MIXED_MARKER,
        fillsType: e
      };
    }
    if (!t.length) return;
    for (let e = t.length - 1; e >= 0; e--) {
      let l = t[e];
      if ((!(n && isValidValue(n)) || n.opacity === 1 || n.id !== l.id) && i_.includes(l.type) && l.visible && l.opacity === 1) {
        return {
          type: 'SINGLE_PAINT',
          paint: l,
          index: e
        };
      }
    }
    let l = t[0];
    if (l.visible) {
      return {
        type: 'SINGLE_PAINT',
        paint: l,
        index: 0
      };
    }
  }(e, useSelectionPropertyValue('fillPaints'), useSelectionPropertyValue('imageOverlayPaint'));
}
function iD() {
  let {
    isPopoverOpen,
    togglePopover,
    closePopover
  } = _$$j6(_$$p5.FONT_SPACING);
  return jsx(_$$R4, {
    children: jsx(_$$A7, {
      positionY: _$$j5,
      target: jsx(_$$ar, {
        'data-testid': 'cooper-inline-font-spacing-control',
        'aria-label': getI18nString('cooper.inline_menu.spacing'),
        'aria-pressed': isPopoverOpen,
        'tooltip': getI18nString('cooper.inline_menu.spacing'),
        'tooltipType': KindEnum.TEXT,
        'isActive': isPopoverOpen,
        'onClick': togglePopover,
        'showCaret': !0,
        'children': jsx(_$$y, {})
      }),
      renderPopoverContents: i$,
      isOpen: isPopoverOpen,
      onClose: closePopover
    })
  });
}
function i$() {
  let e = useSelectionPropertyValue('lineHeight');
  let t = _$$B2();
  let n = useSelectionPropertyValue('letterSpacing');
  return jsxs(rs, {
    children: [jsx(iV, {
      lineHeight: e,
      lineHeightInContext: t
    }), jsx(iG, {
      letterSpacing: n
    })]
  });
}
function iV({
  lineHeight: e,
  lineHeightInContext: t
}) {
  let n = createRef();
  let l = vK();
  return !e || l ? null : jsx(_$$R4, {
    ref: n,
    children: jsx(AutoInteractableWrapper, {
      name: _$$_2.LineHeightInput,
      children: jsx('span', {
        'data-testid': 'cooper-inline-line-height-control',
        'children': jsx(_$$a8, {
          lineHeight: e,
          lineHeightInContext: t,
          disabled: l,
          rowElementRef: n,
          editingStyleGuid: void 0,
          disableVariables: !0
        })
      })
    })
  });
}
function iG({
  letterSpacing: e
}) {
  let t = useDispatch();
  let {
    bigNudgeAmount,
    smallNudgeAmount
  } = getNudgeAmounts();
  let r = createRef();
  return e ? jsx(_$$R4, {
    ref: r,
    children: jsx(AutoInteractableWrapper, {
      name: _$$_2.FontSpacingInput,
      children: jsx('span', {
        'data-testid': 'cooper-inline-letter-spacing-control',
        'children': jsx(_$$I, {
          dispatch: t,
          letterSpacing: e,
          disabled: !1,
          editingStyleGuid: void 0,
          rowElementRef: r,
          bigNudgeAmount,
          smallNudgeAmount,
          disableVariables: !0
        })
      })
    })
  }) : null;
}
function iq() {
  let {
    isPopoverOpen,
    togglePopover,
    closePopover
  } = _$$j6(_$$p5.LAYOUT_ALIGNMENT);
  let l = iJ();
  return Object.values(l).some(({
    enabled: e
  }) => e) ? jsx(_$$R4, {
    children: jsx(_$$A7, {
      positionY: _$$j5,
      target: jsx(_$$ar, {
        'data-testid': 'cooper-inline-layout-control',
        'aria-label': getI18nString('cooper.inline_menu.layout_control_label'),
        'aria-pressed': isPopoverOpen,
        'tooltip': getI18nString('cooper.inline_menu.layout_control_label'),
        'tooltipType': KindEnum.TEXT,
        'showCaret': !0,
        'isActive': isPopoverOpen,
        'onClick': togglePopover,
        'children': jsx(_$$K2, {})
      }),
      renderPopoverContents: () => jsx(iQ, {
        alignItems: l,
        onClick: e => fullscreenValue.triggerActionInUserEditScope(e)
      }),
      isOpen: isPopoverOpen,
      onClose: closePopover
    })
  }) : null;
}
function iJ() {
  let e = Zr('align-left');
  let t = Zr('align-horizontal-center');
  let n = Zr('align-right');
  let l = Zr('align-top');
  let r = Zr('align-vertical-center');
  let i = Zr('align-bottom');
  return useMemo(() => ({
    'align-left': {
      label: getI18nString('fullscreen_actions.align-left'),
      enabled: e,
      icon: () => jsx(_$$K2, {})
    },
    'align-horizontal-center': {
      label: getI18nString('fullscreen_actions.align-horizontal-center'),
      enabled: t,
      icon: () => jsx(_$$E3, {})
    },
    'align-right': {
      label: getI18nString('fullscreen_actions.align-right'),
      enabled: n,
      icon: () => jsx(_$$F3, {})
    },
    'align-top': {
      label: getI18nString('fullscreen_actions.align-top'),
      enabled: l,
      icon: () => jsx(_$$Q2, {})
    },
    'align-vertical-center': {
      label: getI18nString('fullscreen_actions.align-vertical-center'),
      enabled: r,
      icon: () => jsx(_$$O2, {})
    },
    'align-bottom': {
      label: getI18nString('fullscreen_actions.align-bottom'),
      enabled: i,
      icon: () => jsx(_$$u5, {})
    }
  }), [e, t, n, l, r, i]);
}
function iQ({
  alignItems: e,
  onClick: t
}) {
  return jsx(rs, {
    children: jsx(_$$W3, {
      children: Object.entries(e).map(([e, {
        label: n,
        enabled: l,
        icon: r
      }]) => jsx(AutoInteractableWrapper, {
        name: _$$_2.LayoutAlignmentSelector,
        children: jsx(_$$ar, {
          'aria-label': n,
          'tooltip': n,
          'tooltipType': KindEnum.TEXT,
          'tooltipShowAbove': !1,
          'onClick': () => t(e),
          'disabled': !l,
          'children': r()
        })
      }, e))
    })
  });
}
let oI = 'font_picker--fontPickerItemRow--EXS-O text--fontPos11--2LvXf text--_fontBase--QdLsd';
let oS = 'font_picker--fauxFocused--DISrI';
let ok = 'font_picker--check--pO21Q';
let oC = 'font_picker--badgeContainer--WZyXG';
let oA = 'font_picker--newBadge--X0MRm text--fontPos9--naThA text--_fontBase--QdLsd';
let oP = 'font-set-dropdown';
let oO = memo(({
  dispatch: e,
  recordingKey: t,
  currentFont: n,
  onFontChange: l,
  fonts: r,
  versionsForStyles: i,
  selectedNodeIds: d,
  dropdown: u,
  googleFontPreviews: x,
  localFontAgentVersion: m,
  clearable: h,
  selectedView: g,
  searchRowButton: f,
  hideFontSetDropdown: b
}) => {
  let j = useRef(null);
  let y = useRef(null);
  let [E, v] = useState('');
  let [T, I] = useState(!1);
  let [S, k] = useState(jB());
  let C = useRef(!1);
  let [A, z] = useState(null);
  useEffect(() => {
    C.current || (typeof n == 'string' ? z(n) : z(null));
  }, [n, C]);
  let N = useDebouncedCallback(useCallback(e => {
    let t = UN().getCurrentPage();
    !((t?.directlySelectedNodes?.length ?? 0) > 50) && e && (C.current || (C.current = !0), l(void 0, {
      fontFamily: e
    }, yesNoTrackingEnum.NO));
  }, [l]), 50);
  let R = useCallback(() => {
    if (N.cancel(), C.current) {
      C.current = !1;
      let e = '';
      typeof A == 'string' && (e = A);
      l(void 0, {
        fontFamily: '',
        selectedFontFamily: e
      }, yesNoTrackingEnum.NO);
    }
  }, [l, A, N]);
  let w = R4(m);
  let L = void 0 !== x;
  let P = y8(r, i, w, x, g);
  let O = jX(!1, S, A);
  let M = useMemo(() => G8(P, S, O), [P, S, O]);
  let B = useRef(null);
  let D = useCallback(() => {
    B.current?.focus();
  }, []);
  let $ = useCallback(() => {
    D();
    B.current?.searchInput?.select();
  }, [D]);
  let V = Z7(M, P, E);
  let G = useCurrentUserOrg() ?? null;
  let U = selectCurrentFile()?.team ?? null;
  let K = selectCurrentFile();
  let W = useSubscription(TeamCanAdmin, {
    id: U?.id
  }, {
    enabled: !!U
  });
  let H = selectCurrentUser();
  let X = Rk({
    enabled: S === Qr.SHARED_FONTS || u?.type === oP,
    user: H,
    hasCurrentTeam: !!U,
    hasCurrentOrg: !!G
  });
  let Y = useCallback(e => {
    k(e);
    Uh(e);
    trackEventAnalytics('font picker font set updated', {
      section: e
    });
  }, []);
  useEffect(() => {
    S !== Qr.SHARED_FONTS || G || X || Y(Qr.ALL_FONTS);
  }, [, S, G, X, Y]);
  let q = _$$z5({
    size: V.length,
    parentRef: j,
    estimateSize: useCallback(() => parsePxNumber(Ep1), []),
    overscan: 10
  });
  let J = useSelector(e => e.mirror.appModel.currentPage);
  useEffect(() => {
    v('');
  }, [d]);
  let Q = useMemo(() => V.findIndex(e => e.family === A), [A, V]);
  useEffect(() => {
    $();
  }, [$]);
  let {
    searchQueryPlaceholderFontFamily,
    setSearchQueryPlaceholderFontFamily
  } = kh({
    isModalHidden: !1,
    searchQuery: E,
    focusAndSelectSearchBar: $,
    currentFont: n,
    isPreviewing: C.current,
    selectedFontBeforePreviews: A,
    selectedNodeIds: d
  });
  let et = useCallback(e => {
    v(e);
    I(!0);
    setSearchQueryPlaceholderFontFamily('');
    window.requestAnimationFrame(() => {
      I(!1);
    });
  }, [setSearchQueryPlaceholderFontFamily]);
  let en = useCallback(() => {
    e(hidePickerThunk());
    e(_$$B3());
  }, [e]);
  let el = E.length === 0;
  let er = _$$oh(q, el, {
    itemRowHeight: parseInt(Ep1),
    scrollContainerHeight: 160,
    fontSetRowHeight: parseInt(oBL)
  });
  let [ei, eo] = useAtomValueAndSetter(_$$k6);
  let ea = useRef(null);
  useEffect(() => {
    E ? window.requestAnimationFrame(() => {
      er(0);
      eo({
        id: 0
      });
    }) : window.requestAnimationFrame(() => {
      ea.current && (q.scrollToOffset(ea.current.scrollTop), ea.current.fauxFocusIndex && eo({
        id: ea.current.fauxFocusIndex
      }));
    });
  }, [E]);
  useEffect(() => {
    ea.current = null;
    v('');
  }, [A, S]);
  useEffect(() => {
    !E && (ea.current ? (q.scrollToOffset(ea.current.scrollTop), ea.current.fauxFocusIndex && eo({
      id: ea.current.fauxFocusIndex
    })) : (er(Math.max(Q, 0)), eo({
      id: Q
    })));
  }, [Q, S, E, ea]);
  useEffect(() => {
    D();
  }, [D, d]);
  let es = useRef(!1);
  let ed = useCallback(e => {
    Y(e);
    D();
    es.current = !0;
  }, [D, Y]);
  let ec = useSelector(e => e.userFlags);
  let eu = useCallback(async (t, n = !0, i = !0) => {
    if (getFeatureFlags().dse_sf_pro_font && !(await Cj(t, ec, r, e, 'font_picker'))) return;
    globalPerfTimer.start('update_text_node_font');
    R();
    z(t ?? null);
    l(t, void 0, i ? yesNoTrackingEnum.YES : yesNoTrackingEnum.NO);
    let o = t ? r[t] : void 0;
    let a = If(o)?.source;
    trackEventAnalytics('font picker font selected', {
      pageId: J,
      nodeIds: d,
      section: S,
      font: t,
      fontSource: a,
      fileKey: K?.key,
      fileTeamId: U?.id,
      fileParentOrgId: G?.id
    });
    n && e(hidePickerThunk());
  }, [R, l, J, d, S, ec, r, K, U, G, e]);
  useEffect(() => {
    let e = ei && V[ei?.id]?.family;
    e && e !== A ? N(e) : R();
  }, [ei, V, A]);
  let ex = useCallback(e => {
    let t = document.getElementsByTagName('canvas')[0];
    t && e.target === t && R();
  }, [R]);
  let ep = useCallback(e => {
    !E && y.current && (ea.current = {
      scrollTop: e,
      fauxFocusIndex: ei?.id
    });
  }, [E, ei]);
  useEffect(() => (window.addEventListener('mousedown', ex, !0), () => {
    window.removeEventListener('mousedown', ex, !0);
  }), [R, ex]);
  let ef = () => {
    if (!U) return;
    let t = W.status === 'loaded' && !!W.data.team?.hasPermission;
    let n = t ? void 0 : jsxs(AutoLayout, {
      direction: 'vertical',
      spacing: 24,
      padding: {
        top: 24
      },
      children: [jsx('div', {
        className: cssBuilderInstance.wFull.h2.colorBgTertiary.$
      }), jsxs(AutoLayout, {
        spacing: 8,
        verticalAlignItems: 'center',
        children: [jsx(SvgComponent, {
          className: cssBuilderInstance.colorIcon.$,
          svg: _$$A11
        }), jsx('div', {
          children: renderI18nText('fullscreen.properties_panel.font_picker.org_consumption_modal.non_admin.text')
        }), jsx(Spacer, {}), jsx($z, {
          variant: 'primary',
          onClick: () => e(popModalStack()),
          children: renderI18nText('fullscreen.properties_panel.font_picker.org_consumption_modal.non_admin.cta')
        })]
      })]
    });
    e(showModalHandler({
      type: ConsumptionPaywallModalPlansPricing,
      data: {
        team: U,
        resource: FeatureFlag.SHARED_FONTS,
        editorType: FFileType.DESIGN,
        currentPlan: hasValidSubscription(convertTeamToRaw(U)) ? consumptionPaywallUtils.Plan.PRO : consumptionPaywallUtils.Plan.STARTER,
        upsellPlan: consumptionPaywallUtils.Plan.ORG,
        upsellSource: UpsellModalType.FONT_PICKER_UPSELL,
        hideUpsellPlanCta: !t,
        modalFooter: n
      }
    }));
  };
  return jsxs(Fragment, {
    children: [jsxs('div', {
      className: 'font_picker--fontPickerSearchRow--mC7HF',
      children: [jsxs('div', {
        className: 'font_picker--searchContainer--TjPf8',
        children: [jsx(SvgComponent, {
          svg: _$$A12,
          className: 'font_picker--searchIcon--ddk2i'
        }), jsx(oB, {
          query: searchQueryPlaceholderFontFamily || E,
          recordingKey: generateRecordingKey(t, 'search'),
          onClose: en,
          onChange: et,
          searchBarInputRef: B
        })]
      }), f]
    }), !E && !b && jsx(fI, {
      className: 'font_picker--fontPickerFontSetRow--92422',
      onKeyDown: o$,
      children: jsx(oM, {
        currentFontSet: S,
        recordingKey: t,
        dispatch: e,
        onChange: ed,
        onCancel: D,
        dropdownShown: u,
        currentOrg: G,
        currentTeamName: U?.name ?? null,
        showFontsUpsell: X
      })
    }), jsx(_$$P, {
      ref: y,
      onScroll: ep,
      scrollContainerRef: j,
      height: 160 + (E && !b ? parseInt(oBL) : 0),
      children: V.length > 0 ? jsxs('div', {
        'data-testid': 'font-list-div',
        'style': {
          height: q.totalSize,
          position: 'relative'
        },
        'children': [T ? jsx('div', {
          className: em()(oI, oS)
        }) : jsx('div', {
          className: 'font_picker--fontPreviewLoadingRect--dOfvm',
          style: {
            height: `${parseInt(Ep1) * V.length}px`,
            paddingLeft: '4px'
          },
          children: jsx(SvgComponent, {
            svg: _$$V2(_$$kF)
          })
        }), q.virtualItems.map(e => {
          let n = V[e.index];
          return n ? jsx('div', {
            style: {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              transform: `translateY(${e.start}px)`
            },
            children: jsx(oF, {
              applyFont: eu,
              currentFontSet: S,
              fontItem: n,
              hasFetchedGoogleFontPreviews: L,
              index: e.index,
              isMouseDisabled: es,
              isSelected: A === n.family,
              recordingKey: generateRecordingKey(t, n.family),
              selectedNodeIds: d || []
            }, `font-list-item-${Km(n)}`)
          }, Km(n)) : null;
        })]
      }) : (() => {
        if (E || S !== Qr.SHARED_FONTS) {
          return jsx('div', {
            'data-testid': 'no-fonts-item-row',
            'className': em()('font_picker--fontPickerNoFontsToShow--qhjgL text--fontPos11--2LvXf text--_fontBase--QdLsd', {
              'font_picker--extraSearchPadding--LcXe7': E
            }),
            'children': E ? getI18nString('fullscreen.properties_panel.font_picker.no_search_results') : getI18nString('fullscreen.properties_panel.font_picker.no_fonts_in_current_set')
          });
        }
        let e = X ? _$$A0 : _$$A10;
        let t = X ? renderI18nText('fullscreen.properties_panel.font_picker.org_upsell') : G ? renderI18nText('fullscreen.properties_panel.font_picker.no_shared_fonts_orgname', {
          orgName: G.name
        }) : renderI18nText('fullscreen.properties_panel.font_picker.no_shared_fonts');
        let n = jsx($z, {
          variant: 'secondary',
          innerText: 'Learn more',
          onClick: () => {
            customHistory.unsafeRedirect(gg, '_blank');
          },
          children: renderI18nText('fullscreen.properties_panel.font_picker.no_shared_fonts.cta')
        });
        let l = jsx($z, {
          variant: 'primary',
          innerText: 'Upgrade',
          onClick: ef,
          children: renderI18nText('fullscreen.properties_panel.font_picker.org_upsell.cta')
        });
        let r = X ? l : n;
        return jsxs(AutoLayout, {
          direction: 'vertical',
          horizontalAlignItems: 'center',
          padding: {
            top: 86,
            left: 16,
            right: 16
          },
          spacing: '12px',
          children: [jsx(SvgComponent, {
            className: cssBuilderInstance.colorIcon.$,
            svg: e
          }), jsx('p', {
            className: cssBuilderInstance.px4.alignCenter.$,
            children: t
          }), r]
        });
      })()
    }), !!h && A != null && jsx('div', {
      className: cssBuilderInstance.bt1.bSolid.colorBorder.p8.$,
      children: jsx(ButtonWide, {
        variant: 'secondary',
        onClick: () => {
          eu(void 0, !0, !0);
        },
        iconPrefix: jsx(_$$S, {}),
        children: getI18nString('fullscreen.properties_panel.font_picker.clear_selection')
      })
    })]
  });
});
function oM({
  currentFontSet: e,
  onChange: t,
  onCancel: n,
  recordingKey: l,
  dropdownShown: r,
  dispatch: i,
  currentOrg: a,
  currentTeamName: s,
  showFontsUpsell: d
}) {
  let c = _$$Uh({
    hasCurrentOrg: !!a,
    showFontsUpsell: d,
    recordingKey: l
  });
  return jsx('div', {
    className: 'font_picker--fontSetDropdown--OYxF2',
    children: jsx(_$$e6, {
      dispatch: i,
      dropdownShown: r,
      formatter: {
        format: e => {
          if (e === Qr.SHARED_FONTS) {
            if (a) {
              return getI18nString('fullscreen.properties_panel.font_picker.font_set.shared_fonts.org', {
                orgName: a.name
              });
            }
            if (d && s) {
              return getI18nString('fullscreen.properties_panel.font_picker.font_set.shared_fonts.team', {
                teamName: s
              });
            }
          }
          return getI18nString(`fullscreen.properties_panel.font_picker.font_set.${e}`);
        }
      },
      id: oP,
      inputClassName: 'font_picker--fontPickerFontSetOption---vokc text--fontPos11--2LvXf text--_fontBase--QdLsd',
      onCancel: n,
      onChange: t,
      property: e,
      recordingKey: generateRecordingKey(l, 'select'),
      targetDomNode: document.body,
      children: c
    })
  });
}
let oF = memo(({
  fontItem: e,
  index: t,
  isSelected: n,
  hasFetchedGoogleFontPreviews: l,
  applyFont: r,
  recordingKey: i,
  isMouseDisabled: s
}) => {
  let d = _$$P4(t);
  let u = Xr(_$$k6);
  let x = d?.id === t;
  let m = x && d?.scrollIntoView;
  let h = useRef(null);
  useEffect(() => {
    x && m && h.current?.scrollIntoView({
      block: 'nearest'
    });
  }, [x, m]);
  let [g, f] = useState(_$$O3.IS_LOADING);
  let b = useCallback(() => {
    s.current || u({
      id: t,
      scrollIntoView: !1
    });
  }, [s, u, t]);
  let j = useCallback(() => {
    s.current || u(null);
  }, [s, u]);
  let y = (e, t) => {
    e.stopPropagation();
    e.preventDefault();
    r(t);
  };
  let E = g === _$$O3.LOADED || e.family.length > HP;
  let [v, T] = useState(!1);
  let I = useCallback(() => T(!0), []);
  let S = useCallback(() => T(!1), []);
  return jsxs(_$$S2.recordableButton, {
    'className': em()(oI, {
      [oS]: (x || v) && g !== _$$O3.IS_LOADING
    }),
    'data-family-name': `${e.family}`,
    'data-faux-focused': x,
    'data-idx': t,
    'data-tooltip': E ? e.family : void 0,
    'data-tooltip-hide-immediately': !0,
    'data-tooltip-show-right': !0,
    'data-tooltip-type': E ? KindEnum.TEXT : void 0,
    'forwardedRef': h,
    'onBlur': S,
    'onClick': t => y(t, e.family),
    'onFocus': I,
    'onMouseEnter': b,
    'onMouseLeave': j,
    'recordingKey': i,
    'tabIndex': -1,
    'children': [n ? jsx(SvgComponent, {
      className: ok,
      svg: _$$A1,
      dataTestId: 'font-picker-check-icon'
    }) : jsx('div', {
      className: ok
    }), jsx('div', {
      className: 'font_picker--previewContainer--YFSVE',
      children: jsx(_$$A9, {
        fontItem: e,
        setPreviewState: f,
        hasFetchedGoogleFontPreviews: l
      })
    }), getFeatureFlags().ce_show_gf_new_badge && Uw.has(e.previewPath) && g !== _$$O3.IS_LOADING ? jsx('div', {
      className: oC,
      children: jsx('div', {
        className: oA,
        children: getI18nString('fullscreen.properties_panel.font_picker.new_font_badge')
      })
    }) : '', e.recentlyInstalled && g !== _$$O3.IS_LOADING ? jsx('div', {
      className: oC,
      children: jsx('div', {
        className: oA,
        children: getI18nString('fullscreen.properties_panel.font_picker.new_font_badge')
      })
    }) : '', g === _$$O3.IS_LOADING || x ? '' : jsx(SvgComponent, {
      className: 'font_picker--fontPickerLoadingPreviewCover--2V5xe',
      svg: _$$V2(_$$sp)
    })]
  });
});
function oB({
  query: e,
  recordingKey: t,
  onChange: n,
  searchBarInputRef: l,
  onClose: r
}) {
  return jsx(oD, {
    ref: l,
    recordingKey: t,
    focusOnMount: !0,
    query: e,
    onChange: n,
    clearSearch: () => n(''),
    isKeyDownHandled: t => {
      if (t.keyCode === KeyCodes.ESCAPE || t.code === 'Escape' || t.key === 'Escape') {
        if (e !== '') {
          n('');
          return !0;
        }
        r();
      } else {
        (t.code === 'ArrowUp' || t.code === 'ArrowDown') && t.preventDefault();
      }
      return !0;
    }
  });
}
let oD = forwardRef((e, t) => {
  let {
    searchInputRef,
    onMouseDown,
    onMouseUp,
    onBlur,
    onSearchClick,
    onSearchKeyDown,
    onSearchChange
  } = _$$ne(e, t);
  return jsx('div', {
    className: 'font_picker--fontPickerSearchBar--NuQ0L',
    children: jsx(LazyInputForwardRef, {
      ref: searchInputRef,
      className: 'font_picker--fontPickerSearchBarInput--bXbGN',
      dataTestId: 'font-picker-search-input',
      onBlur,
      onChange: onSearchChange,
      onKeyDown: onSearchKeyDown,
      onMouseDown: e => {
        onSearchClick();
        onMouseDown(e);
      },
      onMouseUp,
      placeholder: e.placeholder || getI18nString('fullscreen.properties_panel.font_picker.search_fonts'),
      spellCheck: !1,
      value: e.query
    })
  });
});
function o$(e) {
  e.key === 'Enter' && e.stopPropagation();
}
let o2 = 'random-picker-text-here-fun';
let o4 = 'CooperLibraryTextPicker';
function o6({
  initialPosition: e,
  onClose: t,
  inheritStyleKey: n,
  inheritStyleID: l,
  onApplyStyle: r
}) {
  let i = U1();
  let {
    onToggleLibraryModal
  } = _$$u7({
    entrypoint: _$$r3.COOPER_LIBRARY_TEXT_PICKER,
    modalType: 'editor',
    initialTab: LibraryTabEnum.LIBRARIES
  });
  return jsx(_$$bL, {
    onClose: t,
    defaultPosition: {
      top: e.y,
      left: e.x
    },
    width: 240,
    ref: i,
    children: jsxs(DialogContents, {
      children: [jsxs(DialogHeader, {
        children: [jsx(DialogTitle, {
          children: renderI18nText('cooper.inline_menu.fill_panel.library_text_style_picker.title')
        }), jsx(DialogActionStrip, {
          children: jsx(IconButton, {
            'aria-label': getI18nString('design_systems.styles.tooltips.library'),
            'onClick': onToggleLibraryModal,
            'variant': 'ghost',
            'children': jsx(_$$l3, {})
          })
        })]
      }), jsx(DialogBody, {
        padding: 0,
        children: jsx(o7, {
          onClose: t,
          inheritStyleKey: n,
          inheritStyleID: l,
          onApplyStyle: r
        })
      })]
    })
  });
}
function o7({
  onClose: e,
  inheritStyleKey: t,
  inheritStyleID: n,
  onApplyStyle: l
}) {
  let r = StyleType.TEXT;
  let i = useRef(null);
  let s = useCallback(() => {
    i.current?.scrollTo(0);
  }, [i]);
  let [d, c] = useState('');
  let u = !!d;
  let x = useSubscribedLibraries();
  _$$hg(r);
  let p = WH(t, n, r)?.key ?? null;
  let m = AH(p, normalizeValue(n));
  let {
    stylePreviewShown
  } = selectWithShallowEqual(e => ({
    stylePreviewShown: e.stylePreviewShown
  }));
  let g = useRef(m);
  let {
    status,
    items,
    height,
    initialOffset
  } = V0(r, p, g.current, !0, d, []);
  let y = _$$_Y();
  let E = useMemo(() => m?.status !== 'loaded' ? null : m.data.library_key, [m]);
  let v = (() => {
    if (!p || !m || isNullish(E)) return !1;
    let e = y[E];
    return e && e.status !== 'loaded';
  })();
  let T = useRef(!0);
  useEffect(() => {
    d || T.current || initialOffset == null || (i.current?.scrollTo(initialOffset), T.current = !0);
  }, [initialOffset, d]);
  let I = useRef(null);
  let S = useCallback(e => {
    I.current = e;
  }, []);
  let [k, C] = useState(!1);
  let A = useCallback(() => C(!0), []);
  let z = useCallback(() => C(!1), []);
  let N = useMemo(() => ({
    selectStyle(e) {
      l(e, u);
    },
    showStyleDetails(e, t, n) {},
    showStyleContextMenu(e, t) {},
    deleteStyle(e) {},
    stylePreviewShown
  }), [l, u, stylePreviewShown]);
  let R = _$$F5.useCombobox({
    expanded: !0,
    onSelect: t => {
      t && (l(t, !0), e());
    }
  });
  return jsx(_$$dP2, {
    recordingKey: o4,
    onKeyDown: A,
    onMouseMove: z,
    children: jsx(_$$h2.Provider, {
      value: k,
      children: jsx(mY, {
        children: jsxs(_$$G.Provider, {
          value: N,
          children: [jsx(_$$p7, {
            query: d,
            inputProps: R.getInputProps({
              value: d,
              onChange: c,
              recordingKey: generateRecordingKey(o4, 'styleSearchBar')
            }),
            setQuery: c,
            setKeyboardNavigationItem: S,
            scrollToTop: s,
            recordingKey: generateRecordingKey(o4, 'styleSearchBar'),
            onClose: e
          }), x.status === 'loaded' && !v && jsx(_$$vo, {
            recordingKey: o4,
            children: jsx(_$$xn2, {
              height,
              initialFocusRef: T,
              initialOffset,
              isEditable: !1,
              items,
              listProps: R.getListProps(),
              listRef: i,
              mainStyleKey: p,
              overscanCount: 5,
              recordingKey: o4,
              searchQuery: d,
              stylePickerListLayout: !0,
              width: 240
            })
          })]
        })
      })
    })
  });
}
let at = {
  fontFamilyButtonDisplay: {
    overflowX: 'x6ikm8r',
    textOverflow: 'xlyipyv',
    whiteSpace: 'xuxw1ft',
    $$css: !0,
    width: 'x1exxlbk',
    $$css: !0
  }
};
function an({
  inheritTextStyleKey: e
}) {
  let t = createRef();
  let {
    fontFamily
  } = function ({
    inheritTextStyleKey: e
  }) {
    let {
      styleIdForText
    } = selectWithShallowEqual(e => ({
      styleIdForText: e.mirror.selectionProperties.styleIdForText || null
    }));
    let n = WH(e, styleIdForText, 'TEXT');
    let l = useSelectionPropertyValue('fontFamily');
    return useMemo(() => {
      let e = {
        fontFamily: isInvalidValue(l) ? getI18nString('common.mixed') : normalizeValue(l),
        isMixed: isInvalidValue(l)
      };
      return styleIdForText ? isInvalidValue(styleIdForText) ? {
        fontFamily: getI18nString('common.mixed'),
        isMixed: !0
      } : n ? {
        fontFamily: n.name,
        isMixed: !1
      } : e : e;
    }, [styleIdForText, n, l]);
  }({
    inheritTextStyleKey: e
  });
  let {
    isPopoverOpen,
    togglePopover,
    closePopover
  } = _$$j6(_$$p5.FONT_FAMILY);
  return fontFamily ? jsx(_$$R4, {
    ref: t,
    children: jsx(_$$A7, {
      positionY: _$$j5,
      target: jsx(AutoInteractableWrapper, {
        name: _$$_2.FontFamilyControlEntryPoint,
        children: jsx(ar, {
          fontFamily,
          onClick: togglePopover,
          isActive: isPopoverOpen
        })
      }),
      renderPopoverContents: () => jsx(_$$k4, {
        name: _$$$2.FontFamilySubmenu,
        children: jsx(al, {
          isShown: isPopoverOpen,
          onNewFontSelected: closePopover
        })
      }),
      isOpen: isPopoverOpen,
      onClose: closePopover
    })
  }) : null;
}
function al({
  isShown: e,
  onNewFontSelected: t
}) {
  let n = useSelectionPropertyValue('fontFamily');
  let l = normalizeValue(n);
  let r = useRef(null);
  let i = 'inheritTextStyleKey';
  let {
    inheritTextStyleKey,
    styleIdForText
  } = selectWithShallowEqual(e => ({
    inheritTextStyleKey: e.mirror.selectionProperties.inheritTextStyleKey || null,
    styleIdForText: e.mirror.selectionProperties.styleIdForText || null
  }));
  let u = useDispatch();
  let x = useSelector(e => e.pickerShown && e.pickerShown.id === o2 ? e.pickerShown : null);
  let m = useCallback((e, t) => {
    if (t.current) {
      let {
        x,
        y
      } = TS({
        el: t.current
      });
      u(showPickerThunk({
        id: e,
        initialX: x + 4,
        initialY: y
      }));
    }
  }, [u]);
  let h = useCallback(() => {
    u(hidePickerThunk());
  }, [u]);
  let g = useCallback((e, t) => {
    x && x.id === e ? h() : m(e, t);
  }, [x, h, m]);
  let f = useSelector(e => e.fonts);
  let b = useSelector(e => e.selectedView);
  let _ = useMemo(() => _$$pn(f), [f]);
  let j = useSelector(e => e.mirror.selectionProperties.fontVariations);
  let y = _$$B2();
  let E = Um();
  let v = Wc();
  let T = useSelector(e => e.localFontAgentVersion);
  let I = UG();
  let S = useCallback(() => {
    h();
    _$$cZ(r, null);
    t();
  }, [h, t, r]);
  let k = useCallback((e, t) => {
    u(AV({
      style: e,
      inheritStyleKeyField: i,
      fromSearch: t
    }));
    S();
  }, [u, i, S]);
  let C = useCallback((e, t, n) => {
    PK({
      fontFamily: e,
      previewFontFamily: inheritTextStyleKey ? void 0 : t,
      lineHeightInContext: y,
      fonts: f,
      fontVariations: j,
      versionsForStyles: _,
      shouldCommit: n
    });
    e && S();
  }, [inheritTextStyleKey, f, j, y, _, S]);
  let A = _$$$(e) && e;
  useEffect(() => {
    A && inheritTextStyleKey && r.current && requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        m(o2, r);
      });
    });
  }, [m, inheritTextStyleKey, r, A]);
  return jsx(rs, {
    padding: 0,
    children: jsxs('div', {
      'className': 'xafpxmx xg7h5cd',
      'ref': r,
      'data-testid': 'cooper-inline-font-family-picker',
      'children': [jsx(AutoInteractableWrapper, {
        name: _$$_2.FontPicker,
        children: jsx(oO, {
          currentFont: l,
          dispatch: u,
          dropdown: E,
          fonts: f,
          googleFontPreviews: I,
          hideFontSetDropdown: !0,
          hideTypographyVariableOptions: !0,
          localFontAgentVersion: T,
          onFontChange: C,
          recordingKey: 'cooper_inline_font_family_control',
          searchRowButton: jsx(AutoInteractableWrapper, {
            name: _$$_2.LibraryFontStyle,
            children: jsx('div', {
              className: 'controls--libraryFontPickerButton--H8P2S',
              children: jsx(_$$d3, {
                'aria-expanded': !!(x && x.id === o2),
                'aria-label': getI18nString('fullscreen.properties_panel.tooltip_applyStyles'),
                'recordingKey': 'cooperFontPickerLibraryPickerButton',
                'htmlAttributes': {
                  'data-tooltip': getI18nString('fullscreen.properties_panel.tooltip_applyStyles'),
                  'data-tooltip-type': KindEnum.TEXT
                },
                'onClick': () => g(o2, r),
                'children': jsx(_$$y2, {})
              })
            })
          }),
          selectedNodeIds: v.current,
          selectedView: b,
          versionsForStyles: _
        })
      }), jsx(MM, {
        inheritStyleKey: inheritTextStyleKey,
        inheritStyleID: styleIdForText,
        styleType: StyleType.TEXT
      }), x && x.id === o2 && jsx(o6, {
        initialPosition: new Point(x.initialX, x.initialY),
        inheritStyleKey: inheritTextStyleKey,
        inheritStyleID: styleIdForText,
        onClose: h,
        onApplyStyle: k
      })]
    })
  });
}
function ar({
  fontFamily: e,
  onClick: t,
  isActive: n
}) {
  return jsx(JE, {
    'data-testid': 'cooper-inline-font-family-control',
    'aria-label': getI18nString('cooper.inline_menu.font_family_control_label_with_font', {
      currentFont: e
    }),
    'onClick': t,
    'aria-expanded': n,
    'iconSuffix': jsx(_$$O, {}),
    'recordingKey': 'cooperInlineFontFamilyControl',
    'children': jsx('span', {
      ..._$$xk(at.fontFamilyButtonDisplay),
      children: e
    })
  });
}
function ai({
  inheritTextStyleKey: e
}) {
  let t = useSelector(e => e.fonts);
  let n = useMemo(() => _$$pn(t), [t]);
  let l = useSelectionPropertyValue('fontFamily');
  let r = useSelectionPropertyValue('fontStyle');
  let i = l ? LM({
    fontFamily: l,
    fontStyle: r,
    fonts: t,
    versionsForStyles: n
  }) : void 0;
  let d = _$$B2();
  let c = useSelector(e => e.mirror.selectionProperties.fontVariations);
  let u = createRef();
  return e ? null : jsx(_$$R4, {
    ref: u,
    children: jsx('div', {
      'data-testid': 'cooper-inline-font-style-control',
      'className': 'x1dmp6jm x1yc453h',
      'style': {
        '--color-bg': 'transparent'
      },
      'onPointerDownCapture': () => {
        document.dispatchEvent(new Event('pointerdown'));
      },
      'children': jsx(AutoInteractableWrapper, {
        name: _$$_2.FontStyleSelector,
        children: jsx(zz, {
          dropdownAlignment: 'right',
          editingStyleGuid: void 0,
          enablePreview: !1,
          fontFamily: l,
          fontStyle: r,
          fontVariationAxes: i?.variationAxes,
          fontVariations: c,
          fonts: t,
          hideTypographyVariableOptions: !0,
          hideVariableFontOptions: !0,
          id: 'cooper-inline-type-panel-font-style',
          onChange: (e, t, n) => {
            zD({
              fontStyle: e,
              shouldCommit: t,
              fontVariations: n,
              lineHeightInContext: d,
              showVariableFontSettings: _$$lQ,
              showTypeVariablePicker: _$$lQ
            });
          },
          showMissingIcon: !1,
          targetDomNode: document.body,
          versionsForStyles: n
        })
      })
    })
  });
}
function ap() {
  let {
    isPopoverOpen,
    togglePopover,
    closePopover
  } = _$$j6(_$$p5.TEXT_ALIGNMENT);
  let [l, r] = useSelectionProperty('textAlignHorizontal');
  let i = useMemo(() => ({
    LEFT: {
      label: getI18nString('fullscreen.type_panel.align_left'),
      icon: () => jsx(_$$h3, {})
    },
    CENTER: {
      label: getI18nString('fullscreen.type_panel.align_center'),
      icon: () => jsx(_$$N2, {})
    },
    RIGHT: {
      label: getI18nString('fullscreen.type_panel.align_right'),
      icon: () => jsx(_$$K4, {})
    },
    JUSTIFIED: {
      label: getI18nString('inspect_panel.properties.justify'),
      icon: () => jsx(_$$h4, {})
    }
  }), []);
  let [s, d] = useSelectionProperty('textAlignVertical');
  let c = useMemo(() => ({
    TOP: {
      label: getI18nString('fullscreen.type_panel.align_top'),
      icon: () => jsx(_$$b3, {})
    },
    CENTER: {
      label: getI18nString('fullscreen.type_panel.align_center'),
      icon: () => jsx(_$$X4, {})
    },
    BOTTOM: {
      label: getI18nString('fullscreen.type_panel.align_bottom'),
      icon: () => jsx(_$$z6, {})
    }
  }), []);
  return jsx(_$$R4, {
    children: jsx(_$$A7, {
      positionY: _$$j5,
      target: jsx(AutoInteractableWrapper, {
        name: _$$_2.TextAlignmentControlEntryPoint,
        children: jsx(_$$ar, {
          'data-testid': 'cooper-inline-text-alignment-control',
          'aria-label': getI18nString('whiteboard.inline_menu.text_alignment'),
          'aria-pressed': isPopoverOpen,
          'tooltip': getI18nString('whiteboard.inline_menu.text_alignment'),
          'tooltipType': KindEnum.TEXT,
          'showCaret': !0,
          'isActive': isPopoverOpen,
          'onClick': togglePopover,
          'recordingKey': 'cooperInlineTextAlignmentControl',
          'children': l ? isInvalidValue(l) ? jsx(_$$h3, {}) : i[l].icon() : jsx(_$$h3, {})
        })
      }),
      renderPopoverContents: () => jsx(_$$k4, {
        name: _$$$2.TextAlignmentSubmenu,
        children: jsx(am, {
          horizontalAlignment: l,
          horizontalAlignmentOptions: i,
          updateHorizontalAlignment: r,
          verticalAlignment: s,
          verticalAlignmentOptions: c,
          updateVerticalAlignment: d,
          recordingKey: 'cooperInlineTextAlignmentPanel'
        })
      }),
      isOpen: isPopoverOpen,
      onClose: closePopover
    })
  });
}
function am({
  horizontalAlignment: e,
  horizontalAlignmentOptions: t,
  updateHorizontalAlignment: n,
  verticalAlignment: l,
  verticalAlignmentOptions: r,
  updateVerticalAlignment: i,
  recordingKey: a
}) {
  return jsx(rs, {
    children: jsxs(_$$W3, {
      children: [jsx(ah, {
        alignment: e,
        alignmentOptions: t,
        onAlignmentChanged: e => n(e, yesNoTrackingEnum.YES),
        recordingKey: generateRecordingKey(a, 'horizontal')
      }), jsx(ag, {
        alignment: l,
        alignmentOptions: r,
        onAlignmentChanged: e => i(e, yesNoTrackingEnum.YES),
        recordingKey: generateRecordingKey(a, 'vertical')
      })]
    })
  });
}
function ah({
  alignment: e,
  alignmentOptions: t,
  onAlignmentChanged: n,
  recordingKey: l
}) {
  let r = useMemo(() => Object.entries(t).filter(([e, t]) => e !== 'JUSTIFIED'), [t]);
  return jsx(Fragment, {
    children: r.map(([t, {
      label: r,
      icon: i
    }]) => {
      let a = isValidValue(e) && e === t;
      return jsx(AutoInteractableWrapper, {
        name: _$$_2.TextHorizontalAlignmentSelector,
        children: jsx(_$$ar, {
          'aria-label': r,
          'aria-pressed': a,
          'tooltip': r,
          'tooltipType': KindEnum.TEXT,
          'tooltipShowAbove': !1,
          'isActive': a,
          'onClick': () => n(t),
          'recordingKey': generateRecordingKey(l, t),
          'children': i()
        })
      }, t);
    })
  });
}
function ag({
  alignment: e,
  alignmentOptions: t,
  onAlignmentChanged: n,
  recordingKey: l
}) {
  let r = useMemo(() => Object.entries(t), [t]);
  return jsx(Fragment, {
    children: r.map(([t, {
      label: r,
      icon: i
    }]) => {
      let a = isValidValue(e) && e === t;
      return jsx(AutoInteractableWrapper, {
        name: _$$_2.TextVerticalAlignmentSelector,
        children: jsx(_$$ar, {
          'aria-label': r,
          'aria-pressed': a,
          'tooltip': r,
          'tooltipType': KindEnum.TEXT,
          'tooltipShowAbove': !1,
          'isActive': a,
          'onClick': () => n(t),
          'recordingKey': generateRecordingKey(l, t),
          'children': i()
        })
      }, t);
    })
  });
}
function af() {
  let e = Zr('text-toggle-underline');
  let {
    isUnderlined,
    toggleUnderline
  } = ab();
  return jsx(_$$R4, {
    children: jsx(_$$ar, {
      'data-testid': 'cooper-inline-underline-control',
      'aria-label': getI18nString('type_settings.decoration.underline'),
      'aria-pressed': isUnderlined,
      'tooltip': 'text-toggle-underline',
      'tooltipType': KindEnum.LOOKUP,
      'isActive': isUnderlined,
      'disabled': !e,
      'onClick': toggleUnderline,
      'recordingKey': 'cooperInlineUnderlineControl',
      'children': jsx(_$$W2, {})
    })
  });
}
function ab() {
  let [e, t] = useSelectionProperty('textDecoration');
  let n = e && !isInvalidValue(e) && e === 'UNDERLINE';
  let l = useCallback(() => {
    n ? t('NONE', yesNoTrackingEnum.YES) : t('UNDERLINE', yesNoTrackingEnum.YES);
  }, [n, t]);
  return {
    isUnderlined: n,
    toggleUnderline: l
  };
}
function a_({
  state: e
}) {
  return jsxs(_$$R4, {
    children: [jsx(_$$ar, {
      'data-testid': 'cooper-inline-bold-control',
      'aria-label': getI18nString('cooper.inline_menu.bold'),
      'aria-pressed': e === iy.ACTIVE,
      'tooltip': 'toggle-bold',
      'tooltipType': KindEnum.LOOKUP,
      'isActive': e === iy.ACTIVE,
      'disabled': e === iy.DISABLED,
      'onClick': () => fullscreenValue.triggerActionInUserEditScope('toggle-bold'),
      'recordingKey': 'cooperInlineBoldControl',
      'children': jsx(noop, {})
    }), ' ']
  });
}
function aj({
  state: e
}) {
  return jsx(_$$R4, {
    children: jsx(_$$ar, {
      'data-testid': 'cooper-inline-italic-control',
      'aria-label': getI18nString('cooper.inline_menu.italic'),
      'aria-pressed': e === iy.ACTIVE,
      'tooltip': 'text-toggle-italic',
      'tooltipType': KindEnum.LOOKUP,
      'isActive': e === iy.ACTIVE,
      'disabled': e === iy.DISABLED,
      'onClick': () => fullscreenValue.triggerActionInUserEditScope('text-toggle-italic'),
      'recordingKey': 'cooperInlineItalicControl',
      'children': jsx(_$$s2, {})
    })
  });
}
function ay() {
  let {
    inheritTextStyleKey
  } = selectWithShallowEqual(e => ({
    inheritTextStyleKey: e.mirror.selectionProperties.inheritTextStyleKey || null
  }));
  let t = aI();
  return jsxs(Fragment, {
    children: [jsx(_$$c4, {}), jsx(an, {
      inheritTextStyleKey
    }), jsx(ai, {
      inheritTextStyleKey
    }), !inheritTextStyleKey && jsx(aE, {}), !inheritTextStyleKey && !t && jsx(av, {}), !t && jsx(aT, {}), jsx(ap, {})]
  });
}
function aE() {
  let e = useSelectionPropertyValue('fontSize');
  let t = useCallback(e => {
    fullscreenValue.updateSelectionProperties({
      fontSize: e
    }, {
      shouldCommit: yesNoTrackingEnum.YES
    });
  }, []);
  return e ? jsx(_$$R4, {
    children: jsx(AutoInteractableWrapper, {
      name: _$$_2.FontSizeInput,
      children: jsx('span', {
        'data-testid': 'cooper-inline-text-size-control',
        'className': 'xni59qk',
        'children': jsx(_$$q6, {
          dataTooltip: getI18nString('cooper.inline_menu.font_size'),
          value: isInvalidValue(e) ? e : Math.round(e),
          min: 1,
          step: 4,
          bigStep: 16,
          onValueChange: t,
          recordingKey: 'cooperInlineMenuFontSize',
          fullWidth: !0
        })
      })
    })
  }) : null;
}
function av() {
  let e = useSelector(e => e.fonts);
  let t = useSelectionPropertyValue('fontFamily');
  let n = iv(useMemo(() => _$$pn(e), [e]), t);
  return jsxs(Fragment, {
    children: [jsx(AutoInteractableWrapper, {
      name: _$$_2.ToggleBold,
      children: jsx(a_, {
        state: n.bold
      })
    }), jsx(AutoInteractableWrapper, {
      name: _$$_2.ToggleItalic,
      children: jsx(aj, {
        state: n.italic
      })
    })]
  });
}
function aT() {
  return jsx(AutoInteractableWrapper, {
    name: _$$_2.ToggleUnderline,
    children: jsx(af, {})
  });
}
function aI() {
  return Zr('multi-edit-text');
}
function aS() {
  return aI() ? jsxs(Fragment, {
    children: [jsx(ak, {}), jsx(_$$c4, {})]
  }) : null;
}
function ak() {
  return jsx(_$$R4, {
    children: jsx(AutoInteractableWrapper, {
      name: _$$_2.MultiEditText,
      children: jsx(JE, {
        'aria-label': getI18nString('fullscreen_actions.multi-edit-text'),
        'iconPrefix': jsx(_$$P3, {}),
        'onClick': () => fullscreenValue.triggerActionInUserEditScope('multi-edit-text'),
        'recordingKey': 'cooperInlineMenuMultiEditText',
        'children': getI18nString('fullscreen_actions.multi-edit-text')
      })
    })
  });
}
var aC = (e => (e[e.FULLSCREEN_ACTION = 0] = 'FULLSCREEN_ACTION', e[e.CUSTOM_ACTION = 1] = 'CUSTOM_ACTION', e[e.AI_ACTION = 2] = 'AI_ACTION', e))(aC || {});
var aA = (e => (e.DEFAULT = 'DEFAULT', e.FONT_SPACING_CONTROL = 'FONT_SPACING_CONTROL', e.POSITION = 'POSITION', e))(aA || {});
let az = 'buzz-inline-toolbar';
function aN({
  idealMaxWidth: e
}) {
  let [t, n] = useState('DEFAULT');
  let l = function () {
    let e = [function () {
      let e = hasJubileePermissionForDesign();
      let t = MK(JT.SHORTEN_TEXT);
      let n = MK(JT.REWRITE_TEXT);
      let l = MK(JT.TRANSLATE_TEXT);
      let r = aR({
        actions: [{
          type: 2,
          icon: jsx(_$$g3, {}),
          label: getI18nString('fullscreen_actions.quick_actions.shorten-text'),
          customTooltip: getI18nString('fullscreen_actions.quick_actions.shorten-text'),
          fullscreenAction: JT.SHORTEN_TEXT,
          execute: () => {
            B3(JT.SHORTEN_TEXT);
            _$$Ag(JT.SHORTEN_TEXT, _$$$4, {
              featureType: JT.SHORTEN_TEXT,
              source: az
            });
          },
          trackingId: _$$_2.AIShortenText,
          atUsageLimit: !t
        }, {
          type: 2,
          icon: jsx(_$$T2, {}),
          label: getI18nString('fullscreen_actions.quick_actions.rewrite-this'),
          customTooltip: getI18nString('fullscreen_actions.quick_actions.rewrite-this'),
          fullscreenAction: JT.REWRITE_TEXT,
          execute: () => {
            scheduler.postTask(() => {
              $I({
                moduleToOpen: {
                  type: 'custom',
                  name: Sn.REWRITE,
                  module: jsx(_$$w, {}),
                  beforeModuleOpen: () => {
                    B3(JT.REWRITE_TEXT);
                  }
                },
                trackingData: {
                  source: az
                }
              });
            });
          },
          trackingId: _$$_2.AIRewriteText,
          atUsageLimit: !n
        }, {
          type: 2,
          icon: jsx(_$$R5, {}),
          label: getI18nString('fullscreen_actions.quick_actions.translate-text'),
          customTooltip: getI18nString('fullscreen_actions.quick_actions.translate-text'),
          fullscreenAction: JT.TRANSLATE_TEXT,
          execute: () => {
            scheduler.postTask(() => {
              $I({
                moduleToOpen: {
                  type: 'custom',
                  name: Sn.TRANSLATE,
                  module: jsx(_$$K3, {}),
                  beforeModuleOpen: () => {
                    B3(JT.TRANSLATE_TEXT);
                  }
                },
                trackingData: {
                  source: az
                }
              });
            });
          },
          trackingId: _$$_2.AITranslateText,
          atUsageLimit: !l
        }]
      });
      return e ? r : null;
    }(), ...function () {
      let e = ii();
      let t = hasJubileePermissionForDesign();
      let n = Zr(JT.EDIT_IMAGE);
      let l = _$$u4();
      let r = MK(JT.REMOVE_BACKGROUND);
      let i = MK(JT.UPSCALE_IMAGE);
      let a = {
        actions: [{
          type: 2,
          icon: jsx(_$$$3, {}),
          label: getI18nString('cooper.inline_menu.image.remove_background'),
          fullscreenAction: JT.REMOVE_BACKGROUND,
          execute: () => {
            fullscreenValue.triggerActionInUserEditScope(JT.REMOVE_BACKGROUND);
          },
          trackingId: _$$_2.AIRemoveBackground,
          atUsageLimit: !r
        }, {
          type: 2,
          icon: jsx(_$$X3, {}),
          label: getI18nString('cooper.inline_menu.image.boost_resolution'),
          fullscreenAction: 'upscale-image',
          execute: () => {
            $I({
              moduleToOpen: {
                type: 'custom',
                name: Sn.UPSCALE_IMAGE_TOAST,
                beforeModuleOpen: () => {
                  let e = ImageToolsBindings?.getNodeImagePairsForEdit() ?? [];
                  B3(JT.UPSCALE_IMAGE);
                  _$$Ag(JT.UPSCALE_IMAGE, _$$r2, {
                    source: az,
                    targets: e
                  }, {
                    isBatch: e.length > 1
                  });
                },
                module: jsx(_$$q5, {
                  source: az
                })
              },
              trackingData: {
                source: az
              }
            });
          },
          trackingId: _$$_2.AIUpscaleImage,
          atUsageLimit: !i
        }]
      };
      let s = MK(JT.EDIT_IMAGE);
      let c = l ? {
        actions: [{
          type: 2,
          icon: jsx(rW, {}),
          label: getI18nString('cooper.inline_menu.edit_image'),
          fullscreenAction: JT.EDIT_IMAGE,
          execute: e,
          trackingId: _$$_2.AIEditImage,
          atUsageLimit: !s
        }]
      } : {
        actions: []
      };
      let u = aR(a);
      let x = aR(c);
      return t && n ? [u, x].filter(isNotNullish) : [];
    }()].filter(isNotNullish);
    return e.length ? e : null;
  }();
  let {
    topLevelActions,
    remainingSections
  } = function (e, t) {
    let n = aR({
      actions: [{
        type: 0,
        icon: jsx(_$$i2, {}),
        label: getI18nString('cooper.inline_menu.select-matching'),
        fullscreenAction: 'select-matching',
        execute: () => {
          fullscreenValue.triggerActionInUserEditScope('select-matching');
        },
        trackingId: _$$_2.SelectMatching
      }]
    });
    let l = function () {
      let {
        anyCooperFrames
      } = useCooperFrameSelectionInfo();
      let t = aR({
        actions: [{
          type: 0,
          icon: jsx(_$$U2, {}),
          label: getI18nString('fullscreen_actions.detach-instance'),
          fullscreenAction: 'detach-instance',
          execute: () => {
            fullscreenValue.triggerActionInUserEditScope('detach-instance');
          },
          trackingId: _$$_2.DetachInstance
        }]
      });
      return anyCooperFrames ? null : t;
    }();
    let r = function () {
      let e = useSelectionPropertyValue('inheritTextStyleKey');
      let t = aI();
      let n = useSelector(e => e.fonts);
      let l = useSelectionPropertyValue('fontFamily');
      let r = iv(useMemo(() => _$$pn(n), [n]), l);
      let i = [];
      e || r.bold === iy.DISABLED || i.push({
        type: 0,
        icon: jsx(noop, {}),
        label: getI18nString('cooper.inline_menu.bold'),
        fullscreenAction: 'toggle-bold',
        execute: () => {
          fullscreenValue.triggerActionInUserEditScope('toggle-bold');
        },
        asTopLevelAction: () => jsx(a_, {
          state: r.bold
        }),
        trackingId: _$$_2.ToggleBold
      });
      e || r.italic === iy.DISABLED || i.push({
        type: 0,
        icon: jsx(_$$s2, {}),
        label: getI18nString('cooper.inline_menu.italic'),
        fullscreenAction: 'text-toggle-italic',
        execute: () => {
          fullscreenValue.triggerActionInUserEditScope('text-toggle-italic');
        },
        asTopLevelAction: () => jsx(aj, {
          state: r.italic
        }),
        trackingId: _$$_2.ToggleItalic
      });
      let {
        toggleUnderline
      } = ab();
      i.push({
        type: 0,
        icon: jsx(_$$W2, {}),
        label: getI18nString('cooper.inline_menu.underline'),
        fullscreenAction: 'text-toggle-underline',
        execute: toggleUnderline,
        asTopLevelAction: () => jsx(af, {}),
        trackingId: _$$_2.ToggleUnderline
      });
      let c = aR({
        actions: i
      });
      return t ? c : null;
    }();
    let i = [n, l, r, function () {
      let e = GV();
      let t = aR({
        actions: [{
          type: 0,
          icon: jsx(_$$Z2, {}),
          label: getI18nString('cooper.inline_menu.unordered_list_style'),
          fullscreenAction: 'text-toggle-unordered-list',
          execute: () => {
            fullscreenValue.triggerActionInUserEditScope('text-toggle-unordered-list');
          },
          trackingId: _$$_2.UnorderedListStyle
        }, {
          type: 0,
          icon: jsx(_$$p6, {}),
          label: getI18nString('cooper.inline_menu.ordered_list_style'),
          fullscreenAction: 'text-toggle-ordered-list',
          execute: () => {
            fullscreenValue.triggerActionInUserEditScope('text-toggle-ordered-list');
          },
          trackingId: _$$_2.OrderedListStyle
        }]
      });
      let n = vK();
      return !e[ItemType.TYPE_ITEM] || n ? null : t;
    }(), function (e) {
      let {
        anyCooperFrames,
        onlyDetached
      } = useCooperFrameSelectionInfo();
      let l = GV();
      let {
        inheritTextStyleKey
      } = selectWithShallowEqual(e => ({
        inheritTextStyleKey: e.mirror.selectionProperties.inheritTextStyleKey || null
      }));
      let i = !!l[ItemType.TYPE_ITEM] && !inheritTextStyleKey && onlyDetached;
      let a = Object.values(iJ()).some(({
        enabled: e
      }) => e);
      let s = !!(!anyCooperFrames && l[ItemType.TRANSFORM_ITEM] && a);
      return aR({
        actions: [{
          type: 1,
          icon: jsx(_$$y, {}),
          label: getI18nString('cooper.inline_menu.letter_and_line_spacing'),
          enabled: i,
          execute: () => {
            e('FONT_SPACING_CONTROL');
          },
          dontCloseOnExecute: !0,
          asTopLevelAction: () => jsx(iD, {}),
          trackingId: _$$_2.FontSpacingAndLineHeightEntryPoint
        }, {
          type: 1,
          icon: jsx(_$$K2, {}),
          label: getI18nString('cooper.inline_menu.layout_control_label'),
          enabled: s,
          execute: () => {
            e('POSITION');
          },
          dontCloseOnExecute: !0,
          asTopLevelAction: () => jsx(iq, {}),
          trackingId: _$$_2.LayoutAlignmentEntryPoint
        }]
      });
    }(t), function () {
      let e = useSelectionPropertyValue('locked');
      let t = !!(isInvalidValue(e) || e);
      let n = 'lock-selected-nodes';
      let l = getI18nString('cooper.inline_menu.more_options.lock_selection');
      let r = {
        type: 0,
        icon: jsx(_$$c3, {}),
        label: l,
        customTooltip: l,
        fullscreenAction: n,
        execute: () => {
          fullscreenValue.triggerActionInUserEditScope(n);
        },
        trackingId: _$$_2.ToggleLock,
        enabled: !t
      };
      return aR({
        actions: [{
          type: 0,
          icon: jsx(_$$L, {}),
          label: getI18nString('cooper.inline_menu.more_options.remove_autolayout'),
          fullscreenAction: 'unstack-selection',
          execute: () => {
            fullscreenValue.triggerActionInUserEditScope('unstack-selection');
          },
          trackingId: _$$_2.RemoveAutolayout
        }, r]
      });
    }()].filter(isNotNullish);
    if (!i.length) {
      return {
        topLevelActions: [],
        remainingSections: null
      };
    }
    let c = e;
    let u = [];
    let x = [];
    return (i.forEach(e => {
      if (c <= 0) {
        x.push(e);
        return;
      }
      let t = [];
      e.actions.forEach(e => {
        c <= 0 ? t.push(e) : (u.push(e), c--);
      });
      t.length > 0 && x.push({
        ...e,
        actions: t
      });
    }), x.flatMap(e => e.actions).length !== 1) ? {
      topLevelActions: u.length > 0 ? u : null,
      remainingSections: x.length > 0 ? x : null
    } : {
      topLevelActions: u = [...u, ...x.flatMap(e => e.actions)],
      remainingSections: null
    };
  }(l !== null ? 0 : Math.min(Math.floor((e - 34 - 8) / 34), 2), n);
  let c = useSelectionPropertyValue('locked');
  let u = !!(isInvalidValue(c) || c);
  return topLevelActions || l || remainingSections || u ? jsxs(Fragment, {
    children: [l && jsx(aL, {
      aiActionSections: l
    }), topLevelActions && jsx(aw, {
      actions: topLevelActions
    }), u && jsx(_$$R4, {
      children: jsx(AutoInteractableWrapper, {
        name: _$$_2.ToggleLock,
        children: jsx(_$$ar, {
          'data-testid': 'cooper-inline-top-level-unlock-action',
          'aria-label': getI18nString('cooper.inline_menu.more_options.unlock_selection'),
          'onClick': () => fullscreenValue.triggerActionInUserEditScope('unlock-selected-nodes'),
          'recordingKey': _$$_2.ToggleLock,
          'tooltip': getI18nString('cooper.inline_menu.more_options.unlock_selection'),
          'tooltipType': KindEnum.TEXT,
          'children': jsx(rB, {})
        })
      })
    }), remainingSections && jsx(aP, {
      overflowActionSections: remainingSections,
      moreOptionsSubmenuPanelType: t,
      setMoreOptionsSubmenuPanelType: n
    })]
  }) : null;
}
function aR(e) {
  return selectWithShallowEqual(t => {
    let n = e.actions.filter(e => e.type === 0 || e.type === 2 ? void 0 === e.enabled ? Yh(t.mirror.appModel, e.fullscreenAction) : Yh(t.mirror.appModel, e.fullscreenAction) && e.enabled : e.enabled);
    return n.length ? {
      ...e,
      actions: n
    } : null;
  });
}
function aw({
  actions: e
}) {
  return jsx(Fragment, {
    children: e.map((e, t) => e.type === 1 && e.asTopLevelAction ? e.asTopLevelAction() : jsx(_$$R4, {
      children: jsx(AutoInteractableWrapper, {
        name: e.trackingId,
        children: jsx(_$$ar, {
          'data-testid': 'cooper-inline-top-level-action',
          'aria-label': e.label,
          ...(e.type === 1 ? {
            tooltip: e.label,
            tooltipType: KindEnum.TEXT
          } : e.customTooltip ? {
            tooltip: e.customTooltip,
            tooltipType: KindEnum.TEXT
          } : {
            tooltip: e.fullscreenAction,
            tooltipType: KindEnum.LOOKUP
          }),
          'onClick': e.execute,
          'recordingKey': e.trackingId,
          'children': e.icon
        })
      })
    }, `top-level-action-${t}`))
  });
}
function aL({
  aiActionSections: e
}) {
  let {
    isPopoverOpen,
    togglePopover,
    closePopover
  } = _$$j6(_$$p5.AI_ACTION_OVERFLOW);
  return jsx(_$$R4, {
    children: jsx(_$$A7, {
      positionY: _$$j5,
      target: jsx(AutoInteractableWrapper, {
        name: _$$_2.AIToolsEntryPoint,
        children: jsx(_$$ar, {
          'aria-label': getI18nString('cooper.inline_menu.ai_tools'),
          'aria-pressed': isPopoverOpen,
          'tooltip': getI18nString('cooper.inline_menu.ai_tools'),
          'tooltipType': KindEnum.TEXT,
          'isActive': isPopoverOpen,
          'onClick': togglePopover,
          'showCaret': !0,
          'recordingKey': 'cooperInlineAITools',
          'children': jsx(_$$V3, {})
        })
      }),
      renderPopoverContents: () => jsx(_$$k4, {
        name: _$$$2.AIActionSubmenu,
        children: jsx(aO, {
          overflowActionSections: e,
          onClose: closePopover,
          recordingKey: 'cooperInlineAIActionMenu'
        })
      }),
      isOpen: isPopoverOpen,
      onClose: closePopover
    })
  });
}
function aP({
  overflowActionSections: e,
  moreOptionsSubmenuPanelType: t,
  setMoreOptionsSubmenuPanelType: n
}) {
  let {
    isPopoverOpen,
    togglePopover,
    closePopover
  } = _$$j6(_$$p5.MORE_ACTION_OVERFLOW);
  useEffect(() => {
    isPopoverOpen || n('DEFAULT');
  }, [isPopoverOpen, n]);
  return jsx(_$$R4, {
    children: jsx(_$$A7, {
      positionY: _$$j5,
      target: jsx(AutoInteractableWrapper, {
        name: _$$_2.ActionOverflowEntryPoint,
        children: jsx(_$$ar, {
          'data-testid': 'cooper-inline-more-actions',
          'aria-label': getI18nString('cooper.inline_menu.more_options'),
          'aria-pressed': isPopoverOpen,
          'tooltip': getI18nString('cooper.inline_menu.more_options'),
          'tooltipType': KindEnum.TEXT,
          'isActive': isPopoverOpen,
          'onClick': togglePopover,
          'recordingKey': 'cooperInlineMoreActions',
          'children': jsx(_$$J3, {})
        })
      }),
      renderPopoverContents: () => jsx(_$$k4, {
        name: _$$$2.ActionOverflowSubmenu,
        children: jsx(aO, {
          overflowActionSections: e,
          onClose: closePopover,
          moreOptionsSubmenuPanelType: t,
          recordingKey: 'cooperInlineActionOverflowMenu'
        })
      }),
      isOpen: isPopoverOpen,
      onClose: closePopover
    })
  });
}
function aO({
  overflowActionSections: e,
  onClose: t,
  moreOptionsSubmenuPanelType: n,
  recordingKey: l
}) {
  let r = iJ();
  switch (n || 'DEFAULT') {
    case 'FONT_SPACING_CONTROL':
      return jsx(i$, {});
    case 'POSITION':
      return jsx(iQ, {
        alignItems: r,
        onClick: e => fullscreenValue.triggerActionInUserEditScope(e)
      });
    default:
      return jsx(rs, {
        padding: 0,
        children: jsx('div', {
          className: 'x1y1aw1k xwib8y2',
          children: e.map((n, r) => jsxs(Fragment, {
            children: [n.actions.map((e, n) => jsx(aM, {
              action: e,
              onActionExecuted: () => {
                e.dontCloseOnExecute || t();
              },
              recordingKey: generateRecordingKey(l, e.trackingId)
            }, `menu-action-${r}-${n}`)), r < e.length - 1 ? jsx(aF, {}, `divider-${r}`) : null]
          }))
        })
      });
  }
}
function aM({
  action: e,
  onActionExecuted: t,
  recordingKey: n
}) {
  let l;
  e.type === 0 && (l = e.fullscreenAction);
  return jsx(AutoInteractableWrapper, {
    name: e.trackingId,
    children: jsx('div', {
      className: 'x163pfp xy13l1i',
      children: jsx(r7, {
        icon: e.icon,
        label: e.label,
        fullscreenAction: l,
        onClick: () => {
          e.execute();
          t();
        },
        recordingKey: n,
        disabled: e.type === 2 && e.atUsageLimit,
        ...(e.type === 2 && {
          tooltip: e.atUsageLimit ? getI18nString('figmake.meter_limit.primary') : e.customTooltip || e.label
        })
      })
    })
  });
}
function aF() {
  return jsx('div', {
    className: 'xh8yej3 xjm9jq1 x1xmf6yo x1e56ztr x176lpz5'
  });
}
let aD = forwardRef(({
  title: e,
  children: t,
  padding: n = 'normal'
}, l) => jsx('div', {
  ref: l,
  children: jsxs('div', {
    className: em()({
      [cssBuilderInstance.px16.py12.$]: n === 'normal',
      [cssBuilderInstance.px12.py12.$]: n === 'small'
    }),
    children: [e ? jsx('p', {
      className: cssBuilderInstance.textBodyMediumStrong.pb12.colorText.$,
      children: e
    }) : null, t]
  })
}));
function a$() {
  return jsx('div', {
    className: cssBuilderInstance.bSolid.bb1.wFull.colorBorder.$
  });
}
function aV({
  padding: e,
  recordingKey: t
}) {
  let n = useDispatch();
  let [l, r] = useSelectionProperty('blur');
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = getNudgeAmounts();
  let c = useRef(new KD({
    min: 0
  }));
  let u = e => r(e, yesNoTrackingEnum.YES);
  let x = l ? isInvalidValue(l) ? MIXED_MARKER : l : 0;
  return jsx(aD, {
    padding: e,
    children: jsx(AutoInteractableWrapper, {
      name: _$$_2.BlurSlider,
      children: jsx(rS, {
        min: 0,
        max: 30,
        step: 1,
        bigStep: 3,
        value: x,
        onChange: u,
        ariaLabel: getI18nString('cooper.inline_menu.blur_strength'),
        numberInput: jsx(AutoInteractableWrapper, {
          name: _$$_2.BlurInput,
          children: jsx(ScrubbableInput, {
            bigNudgeAmount,
            'data-tooltip': getI18nString('cooper.inline_menu.blur_strength'),
            'data-tooltip-type': KindEnum.TEXT,
            'dispatch': n,
            'formatter': c.current,
            'labelWidth': 88,
            'onValueChange': u,
            'recordingKey': generateRecordingKey(t, 'blurInput'),
            'resolution': 1,
            'scrubMultiplier': 0.1,
            smallNudgeAmount,
            'value': x,
            'wheelMultiplier': 2,
            'children': jsx(_$$V4, {})
          })
        }),
        recordingKey: generateRecordingKey(t, 'blurSlider')
      })
    })
  });
}
aD.displayName = 'SubpanelContainer';
function aU(e) {
  return jsx('div', {
    style: {
      '--color-bg': 'transparent'
    },
    children: jsx(_$$t5.TabStrip, {
      ...e
    })
  });
}
function aK({
  effects: e,
  effectControls: t,
  recordingKey: n
}) {
  let [l, r, i] = _$$t5.useTabs(e.reduce((e, t) => (e[t] = !0, e), {}));
  return e.length ? jsxs('div', {
    className: 'xoxg38l x1rg5ohu',
    children: [jsx('div', {
      className: 'xe8ttls',
      children: jsx(aU, {
        manager: i,
        children: e.map(e => createElement(_$$t5.Tab, {
          ...l[e],
          key: e,
          recordingKey: generateRecordingKey(n, 'tab', e)
        }, t[e].displayName))
      })
    }), jsx(a$, {}), e.map(e => createElement(_$$t5.TabPanel, {
      ...r[e],
      key: e
    }, t[e].renderDetailsPanel()))]
  }) : null;
}
function aH({
  padding: e = 'normal',
  recordingKey: t
}) {
  let n = useDispatch();
  let [l, r] = useSelectionProperty('opacity');
  let i = isInvalidValue(l) ? MIXED_MARKER : valueOrFallback(l, 1);
  return jsx(aD, {
    padding: e,
    children: jsx(AutoInteractableWrapper, {
      name: _$$_2.OpacitySlider,
      children: jsx(rS, {
        value: i,
        min: 0,
        max: 1,
        step: 0.01,
        bigStep: 0.1,
        onChange: e => r(e, yesNoTrackingEnum.YES),
        ariaLabel: getI18nString('cooper.inline_menu.opacity'),
        numberInput: jsx(AutoInteractableWrapper, {
          name: _$$_2.OpacityInput,
          children: jsx(_$$Y2, {
            'dispatch': n,
            'value': i,
            'onValueChange': e => r(e, yesNoTrackingEnum.YES),
            'labelWidth': 88,
            'data-tooltip': getI18nString('cooper.inline_menu.opacity'),
            'recordingKey': generateRecordingKey(t, 'opacityInput')
          })
        }),
        recordingKey: generateRecordingKey(t, 'opacitySlider')
      })
    })
  });
}
let aq = forwardRef(({
  paint: e,
  ...t
}, n) => {
  return jsx(JE, {
    ref: n,
    iconPrefix: jsx('div', {
      className: 'x6wrskw',
      children: jsx(_$$A13, {
        paint: e
      })
    }),
    iconSuffix: jsx(_$$k3, {}),
    ...t,
    children: jsx('span', {
      className: 'x51ohtg'
    })
  });
});
let aJ = {
  type: 'SOLID',
  color: {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  },
  opacity: 0.4,
  blendMode: 'NORMAL',
  visible: !0
};
function aQ({
  padding: e,
  recordingKey: t
}) {
  let {
    activePanel,
    togglePanel,
    closePanel
  } = ew();
  let i = activePanel?.panel === eC.COLOR_PICKER && activePanel.args?.type === 'IMAGE_OVERLAY';
  let s = useCallback(() => {
    togglePanel({
      panel: eC.COLOR_PICKER,
      args: {
        type: 'IMAGE_OVERLAY'
      }
    });
  }, [togglePanel]);
  useEffect(() => () => {
    i && closePanel();
  }, [closePanel, i]);
  return jsx(aD, {
    padding: e,
    children: jsx(aZ, {
      isOverlayColorPickerOpen: i,
      toggleOverlayColorPicker: s,
      recordingKey: t
    })
  });
}
function aZ({
  isOverlayColorPickerOpen: e,
  toggleOverlayColorPicker: t,
  recordingKey: n
}) {
  let l = useDispatch();
  let {
    opacity,
    paint,
    onOpacityChange
  } = a0();
  return jsxs(rT, {
    children: [jsx(AutoInteractableWrapper, {
      name: _$$_2.OverlayOpacitySlider,
      children: jsx(_$$A6, {
        'aria-label': getI18nString('cooper.inline_menu.overlay_opacity'),
        'bigStep': 0.1,
        'max': 0.9,
        'min': 0,
        'mixed': isInvalidValue(opacity),
        'onChange': onOpacityChange,
        'rangeAnchor': 0,
        'recordingKey': generateRecordingKey(n, 'overlayOpacitySlider'),
        'step': 0.01,
        'value': isValidValue(opacity) ? opacity ?? 0 : 0
      })
    }), jsx(AutoInteractableWrapper, {
      name: _$$_2.OverlayOpacityInput,
      children: jsx(_$$Y2, {
        'data-tooltip': getI18nString('cooper.inline_menu.opacity'),
        'dispatch': l,
        'value': opacity,
        'max': 0.9,
        'onValueChange': onOpacityChange,
        'labelWidth': 88,
        'recordingKey': generateRecordingKey(n, 'overlayOpacityInput')
      })
    }), jsx(AutoInteractableWrapper, {
      name: _$$_2.OverlayColorPicker,
      children: jsx(aq, {
        'aria-expanded': e,
        'onClick': t,
        paint,
        'recordingKey': generateRecordingKey(n, 'overlayColorPicker')
      })
    })]
  });
}
function a0() {
  let {
    canAddOverlay,
    overlayPaint,
    onOpacityChange,
    onPaintChange
  } = _$$g4();
  let r = isInvalidValue(overlayPaint) || overlayPaint && canAddOverlay;
  return {
    opacity: r ? MIXED_MARKER : overlayPaint?.opacity ?? 0,
    paint: r ? MIXED_MARKER : overlayPaint ?? aJ,
    onOpacityChange,
    onPaintChange
  };
}
function a5({
  padding: e,
  recordingKey: t
}) {
  let n = useDispatch();
  let {
    selectedShadowStyle,
    shadowOpacity,
    onChangeShadowStyleControl,
    onChangeShadowOpacity
  } = _$$F6();
  useEffect(() => {
    selectedShadowStyle && selectedShadowStyle !== 'NONE' || onChangeShadowStyleControl('MEDIUM');
  }, [selectedShadowStyle, onChangeShadowStyleControl]);
  return jsx(aD, {
    padding: e,
    children: jsx(AutoInteractableWrapper, {
      name: _$$_2.ShadowSlider,
      children: jsx(rS, {
        value: shadowOpacity,
        min: 0,
        max: 1,
        step: 0.01,
        bigStep: 0.1,
        onChange: onChangeShadowOpacity,
        ariaLabel: getI18nString('cooper.inline_menu.shadow_opacity'),
        numberInput: jsx(AutoInteractableWrapper, {
          name: _$$_2.ShadowInput,
          children: jsx(_$$Y2, {
            'labelWidth': 88,
            'data-tooltip': getI18nString('cooper.inline_menu.shadow_opacity'),
            'value': shadowOpacity,
            'onValueChange': onChangeShadowOpacity,
            'dispatch': n,
            'recordingKey': generateRecordingKey(t, 'shadowOpacityInput')
          })
        }),
        recordingKey: generateRecordingKey(t, 'shadowOpacitySlider')
      })
    })
  });
}
let a2 = [];
function a4() {
  let {
    isPopoverOpen,
    togglePopover,
    closePopover
  } = _$$j6(_$$p5.EFFECTS);
  let l = Um();
  let r = l != null && a2.includes(l.type);
  return jsx(_$$R4, {
    children: jsx(_$$A7, {
      className: 'xxk0z11',
      positionY: _$$j5,
      target: jsx(AutoInteractableWrapper, {
        name: _$$_2.EffectsEntryPoint,
        children: jsx(a6, {
          isActive: isPopoverOpen,
          onClick: togglePopover
        })
      }),
      renderPopoverContents: () => jsx(a7, {}),
      isOpen: isPopoverOpen,
      onClose: () => {
        r || closePopover();
      }
    })
  });
}
function a6({
  isActive: e,
  onClick: t
}) {
  return jsx(JE, {
    'data-testid': 'cooper-inline-effects-entry-point',
    'aria-expanded': e,
    'aria-label': getI18nString('cooper.inline_menu.effects'),
    'iconSuffix': jsx(_$$O, {}),
    'onClick': t,
    'noBorder': !0,
    'recordingKey': 'cooperInlineEffectsEntryPoint',
    'children': renderI18nText('cooper.inline_menu.effects')
  });
}
function a7() {
  return jsx(_$$k4, {
    name: _$$$2.EffectsSubmenu,
    children: jsx(rs, {
      children: jsx(a8, {
        recordingKey: 'cooperInlineEffectsPanel'
      })
    })
  });
}
function a8({
  recordingKey: e
}) {
  let t = function () {
    let {
      anyCooperFrames
    } = useCooperFrameSelectionInfo();
    let t = GV();
    let n = iS();
    return useMemoStable(() => {
      let l = [];
      anyCooperFrames || l.push('OPACITY');
      t[ItemType.EFFECTS_ITEM] && l.push('SHADOW');
      t[ItemType.EFFECTS_ITEM] && l.push('BLUR');
      n && l.push('OVERLAY');
      return l;
    }, [t, n, anyCooperFrames]);
  }();
  let n = function ({
    recordingKey: e
  }) {
    return useMemo(() => ({
      OPACITY: {
        displayName: getI18nString('cooper.inline_menu.opacity'),
        renderDetailsPanel: () => jsx(aH, {
          padding: 'small',
          recordingKey: e
        })
      },
      SHADOW: {
        displayName: getI18nString('cooper.inline_menu.shadow'),
        renderDetailsPanel: () => jsx(a5, {
          padding: 'small',
          recordingKey: e
        })
      },
      BLUR: {
        displayName: getI18nString('cooper.inline_menu.blur'),
        renderDetailsPanel: () => jsx(aV, {
          padding: 'small',
          recordingKey: e
        })
      },
      OVERLAY: {
        displayName: getI18nString('cooper.inline_menu.overlay'),
        renderDetailsPanel: () => jsx(aQ, {
          padding: 'small',
          recordingKey: e
        })
      }
    }), [e]);
  }({
    recordingKey: e
  });
  return jsx(aK, {
    effects: t,
    effectControls: n,
    recordingKey: e
  });
}
let se = {
  chitContainer: {
    position: 'x1n2onr6',
    width: 'x1j4bni0',
    height: 'x100nsjd',
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    justifyContent: 'xl56j7k',
    border: 'x14vn8ze',
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
let st = {
  selected: {
    border: 'x1btwt44',
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
  colorChitContainer: {
    ...se.chitContainer,
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
  styleChitContainer: {
    ...se.chitContainer,
    borderRadius: 'xyzc7yw',
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
  chitBackground: {
    width: 'x10lmdbm',
    height: 'x4ayska',
    borderRadius: 'x192jxwq',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    border: 'xehbxol',
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    borderStyle: 'x18ya6xy',
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    boxSizing: 'x9f619',
    $$css: !0
  },
  chitAlpha: {
    borderTopRightRadius: 'xxw1wii',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderBottomRightRadius: 'xxxmosu',
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    $$css: !0
  }
};
let sn = buildUploadUrl('bdf32fe13fe9a9be5b40c3de4a18572f14c9a1eb');
function sl({
  color: e,
  opacity: t,
  onClick: n,
  isSelected: l,
  recordingKey: r
}) {
  return jsxs(ButtonPrimitive, {
    'aria-label': _$$E4(e),
    'aria-pressed': l,
    'onClick': n,
    'className': Ay.props(st.colorChitContainer, l && st.selected).className,
    'recordingKey': r,
    'children': [jsx('div', {
      className: 'x10lmdbm x4ayska x192jxwq xehbxol x18ya6xy x9f619',
      style: {
        background: colorCSSManipulatorInstance.format(e)
      }
    }), jsx('div', {
      className: 'xxw1wii xxxmosu',
      style: {
        opacity: 1 - t
      }
    })]
  });
}
function sr({
  onClick: e
}) {
  return jsx(ButtonPrimitive, {
    'htmlAttributes': {
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': getI18nString('cooper.inline_menu.fill_panel.custom_color_picker_button_tooltip')
    },
    'className': cssBuilderInstance.h32.w32.flex.itemsCenter.justifyCenter.$,
    'aria-label': getI18nString('cooper.inline_menu.fill_panel.custom_color_picker_button_tooltip'),
    'onClick': e,
    'children': jsx(_$$oW, {
      src: sn,
      alt: '',
      className: cssBuilderInstance.w24.h24.$
    })
  });
}
function sa({
  onClick: e,
  recordingKey: t
}) {
  return jsx(ButtonPrimitive, {
    'onClick': e,
    'recordingKey': generateRecordingKey('cooperInlineMenuExpandOptionsButton', t || ''),
    'aria-label': getI18nString('cooper.inline_menu.expand_button_label'),
    'className': 'x78zum5 xl56j7k x6s0dn4 xe5c7bq x1x9btor',
    'htmlAttributes': {
      'data-tooltip': getI18nString('cooper.inline_menu.expand_button_label'),
      'data-tooltip-type': KindEnum.TEXT
    },
    'children': jsx(_$$e7, {})
  });
}
var sd = (e => (e.NONE = 'NONE', e.SOLID = 'SOLID', e.GRADIENT = 'GRADIENT', e.MEDIA = 'MEDIA', e.MIXED = 'MIXED', e))(sd || {});
function sc() {
  let e = UV();
  return useMemo(() => e.map(e => {
    if (e.type === 'paint' && e.stylePaint.paint.color) return e.stylePaint.paint;
  }).filter(isNotNullish), [e]);
}
function su() {
  let e = ik();
  return useCallback(() => {
    if (!e) return 'NONE';
    if (e.type === 'MIXED_PAINT') return e.fillsType === 'SOLID' ? 'SOLID' : 'MIXED';
    let t = e.paint.type;
    if (!t) return 'NONE';
    switch (t) {
      case 'SOLID':
        return 'SOLID';
      case 'IMAGE':
      case 'VIDEO':
        return 'MEDIA';
      case 'GRADIENT_LINEAR':
      case 'GRADIENT_RADIAL':
      case 'GRADIENT_ANGULAR':
      case 'GRADIENT_DIAMOND':
        return 'GRADIENT';
      default:
        return 'NONE';
    }
  }, [e]);
}
function sx(e) {
  let t = new Set();
  return e.filter(e => e.color && e.opacity).filter(e => !ig(e)).filter(e => {
    if (!e.color) return !1;
    {
      let n = packNormalizedRgb(rgbToNormalized(e.color));
      return !t.has(n) && (t.add(n), !0);
    }
  });
}
let sp = 'fill_colors--colors--FAwzk';
let sm = 'fill_colors--colorContainer--Aa7mP';
function sh({
  pickerRef: e,
  paint: t,
  onPaintChange: n,
  onCustomColorClick: l,
  onLibraryClick: r
}) {
  let i = useRef(null);
  let s = e || i;
  let d = sx(sc());
  let c = sf.filter(e => !d.some(t => colorsEqual(e, t.color)));
  let u = function (e, t, n) {
    let l = !ib(e, t.map(e => e?.color).filter(isNotNullish)) && !ib(e, n);
    return useMemo(() => l && e && isValidValue(e) && !ig(e) ? [...t].concat(e) : t, [l, e, t]);
  }(t, d, c);
  return jsxs('div', {
    className: 'fill_colors--container--MBSYA',
    children: [jsxs('div', {
      className: 'fill_colors--documentColorsHeader--QL-tJ',
      ref: s,
      children: [getI18nString('cooper.inline_menu.fill_submenu.color.document_colors'), r && jsx(AutoInteractableWrapper, {
        name: _$$_2.LibraryColorPicker,
        children: jsx(ButtonPrimitive, {
          onClick: () => r(s),
          children: jsx(_$$y2, {})
        })
      })]
    }), jsxs('div', {
      className: sp,
      children: [ih.map((e, l) => jsx(sg, {
        children: jsx(sl, {
          color: e,
          onClick: () => n({
            color: e,
            opacity: 1,
            type: 'SOLID'
          }, yesNoTrackingEnum.YES),
          opacity: 1,
          isSelected: isValidValue(t) && colorsEqual(e, t?.color) && t?.opacity === 1,
          recordingKey: `cooperFloatingPanelColorChit-${l}`
        }, l)
      }, l)), u.map((e, l) => e.color && e.opacity && jsx(sg, {
        children: jsx(sl, {
          color: e.color,
          opacity: e.opacity,
          onClick: () => n(e, yesNoTrackingEnum.YES),
          isSelected: isValidValue(t) && colorsEqual(e.color, t?.color) && e.opacity === t?.opacity
        }, l)
      }, l))]
    }), jsx('div', {
      className: cssBuilderInstance.py8.pl16.pr12.textBodyMediumStrong.colorTextSecondary.$,
      children: getI18nString('cooper.inline_menu.fill_submenu.color.other_colors')
    }), jsxs('div', {
      className: sp,
      children: [jsx('div', {
        className: sm,
        children: jsx(sr, {
          onClick: () => l(s)
        })
      }), c.map((e, l) => jsx(sg, {
        children: jsx(sl, {
          color: e,
          onClick: () => n({
            color: e,
            opacity: 1,
            type: 'SOLID'
          }, yesNoTrackingEnum.YES),
          opacity: 1,
          isSelected: isValidValue(t) && colorsEqual(e, t?.color) && t?.opacity === 1
        }, l)
      }, l))]
    })]
  });
}
function sg({
  children: e
}) {
  return jsx(AutoInteractableWrapper, {
    name: _$$_2.ColorChit,
    children: jsx('div', {
      className: sm,
      children: e
    })
  });
}
let sf = [{
  r: 77,
  g: 77,
  b: 77,
  a: 1
}, {
  r: 136,
  g: 136,
  b: 136,
  a: 1
}, {
  r: 173,
  g: 173,
  b: 173,
  a: 1
}, {
  r: 204,
  g: 204,
  b: 204,
  a: 1
}, {
  r: 250,
  g: 250,
  b: 250,
  a: 1
}, {
  r: 252,
  g: 236,
  b: 153,
  a: 1
}, {
  r: 255,
  g: 209,
  b: 166,
  a: 1
}, {
  r: 250,
  g: 161,
  b: 161,
  a: 1
}, {
  r: 255,
  g: 185,
  b: 248,
  a: 1
}, {
  r: 215,
  g: 175,
  b: 248,
  a: 1
}, {
  r: 232,
  g: 205,
  b: 255,
  a: 1
}, {
  r: 249,
  g: 217,
  b: 52,
  a: 1
}, {
  r: 255,
  g: 164,
  b: 79,
  a: 1
}, {
  r: 244,
  g: 68,
  b: 68,
  a: 1
}, {
  r: 255,
  g: 112,
  b: 241,
  a: 1
}, {
  r: 176,
  g: 94,
  b: 241,
  a: 1
}, {
  r: 121,
  g: 43,
  b: 255,
  a: 1
}, {
  r: 202,
  g: 248,
  b: 175,
  a: 1
}, {
  r: 175,
  g: 248,
  b: 182,
  a: 1
}, {
  r: 202,
  g: 255,
  b: 233,
  a: 1
}, {
  r: 175,
  g: 248,
  b: 241,
  a: 1
}, {
  r: 175,
  g: 227,
  b: 248,
  a: 1
}, {
  r: 175,
  g: 203,
  b: 248,
  a: 1
}, {
  r: 95,
  g: 241,
  b: 93,
  a: 1
}, {
  r: 93,
  g: 241,
  b: 165,
  a: 1
}, {
  r: 94,
  g: 220,
  b: 168,
  a: 1
}, {
  r: 93,
  g: 221,
  b: 241,
  a: 1
}, {
  r: 93,
  g: 153,
  b: 241,
  a: 1
}, {
  r: 54,
  g: 80,
  b: 208,
  a: 1
}].map(e => ({
  ...e,
  r: e.r / 255,
  g: e.g / 255,
  b: e.b / 255
}));
function sb({
  children: e
}) {
  return jsx('div', {
    className: 'x78zum5 xbu5dzu xsdox4t x6s0dn4',
    children: e
  });
}
function s_({
  fillColor: e,
  closeMenu: t
}) {
  let {
    openPanel
  } = ew();
  return jsxs(sb, {
    children: [jsx(sj, {
      fillColor: e,
      closeMenu: t
    }), jsx('div', {
      className: 'color_control_submenu--expandButtonContainer--DIWAK',
      children: jsx(sa, {
        onClick: () => {
          t();
          openPanel({
            panel: eC.COLOR_PICKER,
            args: {
              type: 'FILL'
            }
          });
        },
        recordingKey: 'colorFill'
      })
    })]
  });
}
function sj({
  fillColor: e,
  closeMenu: t
}) {
  let {
    togglePanel
  } = ew();
  let l = ij();
  let r = sx(sc()).slice(0, 4);
  let i = r.length;
  let a = Math.max(0, 6 - i - 3);
  let s = sf.filter(e => !r.some(t => colorsEqual(e, t.color))).slice(0, a);
  return jsxs('div', {
    className: 'color_control_submenu--colorRow--LgET5',
    children: [ih.map((t, n) => jsx(sy, {
      children: jsx(sl, {
        color: t,
        recordingKey: `cooperInlineMenuColorChit-${n}`,
        onClick: () => l({
          color: t,
          opacity: 1,
          type: 'SOLID'
        }, yesNoTrackingEnum.YES),
        opacity: 1,
        isSelected: !!(e && isValidValue(e) && colorsEqual(t, e?.color) && e.opacity === 1)
      }, n)
    }, n)), r.map((t, n) => t.color && t.opacity && jsx(sy, {
      children: jsx(sl, {
        color: t.color,
        opacity: t.opacity,
        onClick: () => l(t, yesNoTrackingEnum.YES),
        isSelected: !!(e && isValidValue(e) && colorsEqual(t.color, e?.color) && e?.opacity === t.opacity)
      }, n)
    }, n)), i < 4 && jsx(sE, {}), jsx(sy, {
      children: jsx(sr, {
        onClick: () => {
          t();
          togglePanel({
            panel: eC.COLOR_PICKER,
            args: {
              openCustomColorPicker: !0,
              type: 'FILL'
            }
          });
        }
      })
    }), a > 0 && s.map((t, n) => jsx(sy, {
      children: jsx(sl, {
        color: t,
        onClick: () => l({
          color: t,
          opacity: 1,
          type: 'SOLID'
        }, yesNoTrackingEnum.YES),
        opacity: 1,
        isSelected: !!(e && isValidValue(e) && colorsEqual(t, e?.color))
      }, n)
    }, n))]
  });
}
function sy({
  children: e
}) {
  return jsx(AutoInteractableWrapper, {
    name: _$$_2.ColorChit,
    children: jsx('div', {
      className: 'color_control_submenu--colorContainer--a0th4',
      children: e
    })
  });
}
function sE() {
  return jsx('div', {
    className: 'color_control_submenu--dividerContainer--3e7cN',
    children: jsx('div', {
      className: 'color_control_submenu--divider--qd4O7'
    })
  });
}
function sz({
  paint: e,
  closeMenu: t
}) {
  let {
    openPanel
  } = ew();
  let l = ij();
  if (!e || isInvalidValue(e)) return null;
  let r = validateGradientPaint(e);
  return r ? jsx(sb, {
    children: jsxs('div', {
      className: 'gradient_control_submenu--gradientSubmenuContainer--0scDr',
      children: [jsx(AutoInteractableWrapper, {
        name: _$$_2.Gradient,
        children: jsx(sR, {
          gradientPaint: r,
          onClick: () => {
            t();
            openPanel({
              panel: eC.COLOR_PICKER,
              args: {
                type: 'FILL'
              }
            });
          }
        })
      }), jsxs('div', {
        className: 'gradient_control_submenu--gradientSubmenuButtonsContainer--pFvmo',
        children: [jsx(AutoInteractableWrapper, {
          name: _$$_2.FlipGradient,
          children: jsx(_$$n5, {
            gradientPaint: r,
            onChange: l
          })
        }), jsx(AutoInteractableWrapper, {
          name: _$$_2.RotateGradient,
          children: jsx(sN, {})
        })]
      })]
    })
  }) : null;
}
function sN() {
  return jsx(IconButton, {
    'actionOnPointerDown': !0,
    'onClick': GradientToolApi?.rotateGradient90Degrees,
    'aria-label': getI18nString('fullscreen.properties_panel.gradient_picker.rotate_90'),
    'htmlAttributes': {
      'data-tooltip': getI18nString('fullscreen.properties_panel.gradient_picker.rotate_90'),
      'data-tooltip-type': KindEnum.TEXT
    },
    'children': jsx(_$$R7, {})
  });
}
function sR({
  gradientPaint: e,
  onClick: t
}) {
  let n = Ep();
  let l = getColorSpaceString(n);
  let r = useRef(null);
  let i = useCallback(t => {
    let n = Eh(t, l);
    if (!n || !e) return;
    let r = n.createPattern(_$$L3, 'repeat');
    r && (n.fillStyle = r);
    n.fillRect(0, 0, 218, 32);
    let i = n.createLinearGradient(0, 0, 218, 0);
    for (let t of e.stops) i.addColorStop(_$$H2(t.position), colorCSSManipulatorInstance.format(t.color, l));
    n.fillStyle = i;
    n.fillRect(0, 0, 218, 32);
  }, [l, e]);
  useEffect(() => {
    r.current && _$$dM({
      canvas: r.current,
      canvasWidth: 218,
      canvasHeight: 32,
      renderCanvas: i,
      colorSpace: l
    });
  }, [e, i, r, l]);
  return jsxs(ButtonPrimitive, {
    className: 'gradient_control_submenu--canvasContainer--NGhNH',
    onClick: t,
    children: [jsxs('div', {
      className: 'gradient_control_submenu--hoverOverlay--IgWdF',
      children: [renderI18nText('cooper.inline_menu.fill_submenu.gradient_button'), jsx(_$$e7, {})]
    }), jsx('canvas', {
      ref: r,
      width: 218,
      height: 32
    })]
  });
}
function sL() {
  let {
    activePanel,
    togglePanel
  } = ew();
  let n = iS();
  let l = activePanel?.panel === eC.ADJUST_IMAGE;
  return n ? jsx(_$$ar, {
    'aria-label': getI18nString('cooper.inline_menu.floating_panel.adjust_image'),
    'aria-pressed': l,
    'tooltip': getI18nString('cooper.inline_menu.floating_panel.adjust_image'),
    'tooltipType': KindEnum.TEXT,
    'isActive': l,
    'onClick': () => togglePanel(eC.ADJUST_IMAGE),
    'children': jsx(_$$A14, {})
  }) : null;
}
function sP() {
  let {
    activePanel,
    togglePanel
  } = ew();
  return !function () {
    let e = function () {
      let e = ik();
      return e ? e.type === 'MIXED_PAINT' ? MIXED_MARKER : e.paint.type === 'VIDEO' ? [e.paint, e.index] : void 0 : e;
    }();
    return !e || isInvalidValue(e) ? null : e[0];
  }() ? null : jsx(_$$ar, {
    'aria-label': getI18nString('cooper.inline_menu.floating_panel.adjust_video'),
    'tooltip': getI18nString('cooper.inline_menu.floating_panel.adjust_video'),
    'tooltipType': KindEnum.TEXT,
    'isActive': activePanel?.panel === eC.ADJUST_VIDEO,
    'onClick': () => togglePanel(eC.ADJUST_VIDEO),
    'children': jsx(_$$A14, {})
  });
}
function sM({
  trackingSource: e
}) {
  let t = hasJubileePermissionForDesign();
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  return t ? jsxs(MenuRootComp, {
    manager,
    children: [jsx(IconButton, {
      ...getTriggerProps(),
      'variant': e === 'buzz-fields-panel' ? 'secondary' : 'ghost',
      'data-tooltip-show-above': !0,
      'aria-label': getI18nString('cooper.inline_menu.ai_tools'),
      'htmlAttributes': {
        'data-testid': 'buzz-ai-image-tools-button'
      },
      'children': jsx(_$$V3, {})
    }), jsxs(MenuContainerComp, {
      children: [jsxs(MenuGroupComp, {
        children: [jsx(sF, {}), jsx(sB, {
          trackingSource: e
        })]
      }), jsx(MenuGroupComp, {
        children: jsx(sD, {})
      })]
    })]
  }) : null;
}
function sF() {
  let e = Zr(JT.REMOVE_BACKGROUND);
  let t = MK(JT.REMOVE_BACKGROUND);
  return jsx(AutoInteractableWrapper, {
    name: _$$_2.AIRemoveBackground,
    children: jsxs(MenuItemComp, {
      'aria-label': getI18nString('cooper.inline_menu.image.remove_background'),
      'data-testid': 'buzz-ai-image-tools-remove-background-button',
      'disabled': !e || !t,
      'data-tooltip': t ? void 0 : getI18nString('figmake.meter_limit.primary'),
      'data-tooltip-type': 'text',
      'onClick': () => fullscreenValue.triggerActionInUserEditScope(JT.REMOVE_BACKGROUND),
      'children': [jsx(MenuItemLead, {
        children: jsx(_$$$3, {})
      }), renderI18nText('cooper.inline_menu.image.remove_background')]
    })
  });
}
function sB({
  trackingSource: e
}) {
  let t = Zr(JT.UPSCALE_IMAGE);
  let n = MK(JT.UPSCALE_IMAGE);
  return jsx(AutoInteractableWrapper, {
    name: _$$_2.AIUpscaleImage,
    children: jsxs(MenuItemComp, {
      'aria-label': getI18nString('cooper.inline_menu.image.boost_resolution'),
      'data-testid': 'buzz-ai-image-tools-upscale-image-button',
      'disabled': !t || !n,
      'data-tooltip': n ? void 0 : getI18nString('figmake.meter_limit.primary'),
      'data-tooltip-type': 'text',
      'onClick': () => {
        $I({
          moduleToOpen: {
            type: 'custom',
            name: Sn.UPSCALE_IMAGE_TOAST,
            beforeModuleOpen: () => {
              let t = ImageToolsBindings?.getNodeImagePairsForEdit() ?? [];
              B3(JT.UPSCALE_IMAGE);
              _$$Ag(JT.UPSCALE_IMAGE, _$$r2, {
                source: e,
                targets: t
              }, {
                isBatch: t.length > 1
              });
            },
            module: jsx(_$$q5, {
              source: e
            })
          },
          trackingData: {
            source: e
          }
        });
      },
      'children': [jsx(MenuItemLead, {
        children: jsx(_$$X3, {})
      }), renderI18nText('cooper.inline_menu.image.boost_resolution')]
    })
  });
}
function sD() {
  let e = Zr(JT.EDIT_IMAGE);
  let t = MK(JT.EDIT_IMAGE);
  let n = ii();
  return jsx(AutoInteractableWrapper, {
    name: _$$_2.AIEditImage,
    children: jsxs(MenuItemComp, {
      'aria-label': getI18nString('cooper.inline_menu.edit_image'),
      'data-testid': 'buzz-ai-image-tools-edit-image-button',
      'disabled': !e || !t,
      'data-tooltip': t ? void 0 : getI18nString('figmake.meter_limit.primary'),
      'data-tooltip-type': 'text',
      'onClick': n,
      'children': [jsx(MenuItemLead, {
        children: jsx(rW, {})
      }), renderI18nText('cooper.inline_menu.edit_image')]
    })
  });
}
function sU(e, t) {
  Fullscreen?.updateAppModel({
    currentSelectedProperty: {
      type: NodePropertyCategory.FILL,
      indices: [e]
    }
  });
  let n = t?.blendMode ?? 'NORMAL';
  let l = t?.opacity ?? 1;
  Fullscreen?.uploadPaintImage(n, l);
}
function sK(e, t) {
  Fullscreen?.updateAppModel({
    currentSelectedProperty: {
      type: NodePropertyCategory.FILL,
      indices: [e]
    }
  });
  let n = t?.blendMode ?? 'NORMAL';
  let l = t?.opacity ?? 1;
  Fullscreen?.uploadPaintMedia(n, l);
}
function sW(e, t, n) {
  let l = ik();
  return useCallback(() => {
    let r;
    let i;
    void 0 !== n ? (r = n, i = t) : l && l.type !== 'MIXED_PAINT' ? (r = l.paint, i = l.index) : (r = {
      type: 'IMAGE'
    }, i = void 0);
    e ? sK(i, r) : sU(i, r);
  }, [n, t, l, e]);
}
function sH({
  paintIndex: e,
  paint: t,
  variant: n = 'inlineMenu'
}) {
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  return jsx(_$$R4, {
    children: jsxs(MenuRootComp, {
      manager,
      children: [jsx(AutoInteractableWrapper, {
        name: _$$_2.ChooseMediaEntryPoint,
        children: jsx(sX, {
          triggerProps: getTriggerProps(),
          isOpen: manager.isOpen,
          variant: n
        })
      }), jsx(sY, {
        paintIndex: e,
        paint: t,
        closeSubmenu: () => manager.setOpen(!1)
      })]
    })
  });
}
function sX({
  triggerProps: e,
  isOpen: t,
  variant: n
}) {
  let l = jsx(_$$O, {
    style: n === 'fieldsPanel' ? {
      '--color-icon': 'var(--color-icon-onbrand)'
    } : void 0
  });
  return n === 'inlineMenu' ? jsx(JE, {
    ...e,
    'data-testid': 'buzz-inline-menu-choose-media-dropdown',
    'aria-label': getI18nString('buzz.inline_menu.choose_media'),
    'aria-expanded': t,
    'iconSuffix': l,
    'recordingKey': 'buzzInlineMenuChooseMediaEntryPoint',
    'children': jsx('div', {
      className: 'x193iq5w xb3r6kr xlyipyv xuxw1ft',
      children: renderI18nText('buzz.inline_menu.choose_media')
    })
  }) : jsx(Em, {
    ...e,
    'data-testid': 'buzz-fields-panel-choose-media-dropdown',
    'aria-label': getI18nString('buzz.inline_menu.choose_media'),
    'aria-expanded': t,
    'iconSuffix': l,
    'recordingKey': 'buzzFieldsPanelChooseMediaEntryPoint',
    'children': jsx('div', {
      className: 'x193iq5w xb3r6kr xlyipyv xuxw1ft',
      children: renderI18nText('buzz.inline_menu.choose_media')
    })
  });
}
function sY({
  paintIndex: e,
  paint: t,
  closeSubmenu: n
}) {
  let l = getFeatureFlags().buzz_video_export;
  let r = getFeatureFlags().buzz_unsplash;
  let i = hasJubileePermissionForDesign();
  let d = _$$u4();
  let u = MK(JT.GENERATE_IMAGE);
  let x = Xr(assetCategoryAtom);
  let m = function () {
    let e = useDispatch();
    let {
      close
    } = _$$cq();
    return useCallback(() => {
      B3(JT.GENERATE_IMAGE);
      scheduler.postTask(() => {
        $I({
          moduleToOpen: {
            type: 'custom',
            module: jsx(_$$Ay2, {}),
            name: Sn.GENERATE_IMAGE
          },
          trackingData: {
            source: 'buzz-inline-toolbar'
          }
        });
        e(hideModal());
      });
      close();
    }, [close, e]);
  }();
  let h = useCallback((...e) => {
    l ? sK(...e) : sU(...e);
  }, [l]);
  let g = useCallback(() => {
    h(e, t);
    n();
  }, [h, e, t, n]);
  let f = useCallback(() => {
    x(AssetCategoryEnum.MEDIA);
    n();
  }, [x, n]);
  let b = useCallback(() => {
    m();
    n();
  }, [m, n]);
  return jsxs(MenuContainerComp, {
    children: [jsx(AutoInteractableWrapper, {
      name: _$$_2.UploadMedia,
      children: jsxs(MenuItemComp, {
        'aria-label': getI18nString('buzz.inline_menu.choose_media.upload'),
        'data-testid': 'buzz-inline-menu-choose-media-upload-button',
        'data-paint-type': t?.type,
        'onClick': g,
        'children': [jsx(MenuItemLead, {
          children: jsx(_$$A15, {})
        }), renderI18nText('buzz.inline_menu.choose_media.upload')]
      })
    }), r && jsx(AutoInteractableWrapper, {
      name: _$$_2.BrowseStockPhotos,
      children: jsxs(MenuItemComp, {
        'aria-label': getI18nString('buzz.inline_menu.choose_media.browse'),
        'data-testid': 'buzz-inline-menu-choose-media-browse-button',
        'onClick': f,
        'children': [jsx(MenuItemLead, {
          children: jsx(_$$s4, {})
        }), renderI18nText('buzz.inline_menu.choose_media.browse')]
      })
    }), i && d && jsx(AutoInteractableWrapper, {
      name: _$$_2.AIMakeImage,
      children: jsxs(MenuItemComp, {
        'aria-label': getI18nString('buzz.inline_menu.choose_media.make_image'),
        'data-testid': 'buzz-inline-menu-choose-media-make-image-button',
        'disabled': !u,
        'data-tooltip': u ? void 0 : getI18nString('figmake.meter_limit.primary'),
        'data-tooltip-type': 'text',
        'onClick': b,
        'children': [jsx(MenuItemLead, {
          children: jsx(_$$T3, {})
        }), renderI18nText('buzz.inline_menu.choose_media.make_image')]
      })
    })]
  });
}
function sQ({
  paint: e,
  paintIndex: t
}) {
  let n = !!getFeatureFlags().buzz_video_export;
  let l = getFeatureFlags().buzz_unsplash;
  let r = useMemo(() => e && isValidValue(e) ? e : {
    type: 'IMAGE'
  }, [e]);
  let i = getImageOrVideoPaint(r);
  let s = r?.type === 'IMAGE';
  let d = n && r?.type === 'VIDEO';
  let u = s || d;
  let [x, p] = useState('');
  useEffect(() => {
    if (!u || !i) {
      p('');
      return;
    }
    let e = {
      ...i,
      imageScaleMode: 'FILL'
    };
    let t = jS(e, new Point(96, 96), {
      r: 0,
      g: 0,
      b: 0,
      a: 0
    });
    if (!t || !t.pixels || !t.pixelSize) {
      p('');
      return;
    }
    let n = Q1(t.pixels, t.pixelSize);
    let l = n.getContext('2d');
    if (!l) {
      p('');
      return;
    }
    let r = l.getImageData(0, 0, n.width, n.height);
    let o = r.width;
    let a = r.height;
    let s = -1;
    let d = -1;
    for (let e = 0; e < r.height; e++) {
      for (let t = 0; t < r.width; t++) {
        let n = (e * r.width + t) * 4;
        (r.data[n + 3] ?? 0) > 0 && (t < o && (o = t), e < a && (a = e), t > s && (s = t), e > d && (d = e));
      }
    }
    (s < o || d < a) && (o = 0, a = 0, s = n.width - 1, d = n.height - 1);
    let c = Math.max(1, s - o + 1);
    let x = Math.max(1, d - a + 1);
    let m = document.createElement('canvas');
    m.width = 96;
    m.height = 96;
    let h = m.getContext('2d');
    if (!h) {
      p('');
      return;
    }
    h.imageSmoothingEnabled = !0;
    h.imageSmoothingQuality = 'high';
    let g = Math.max(96 / c, 96 / x);
    let f = c * g;
    let b = x * g;
    h.drawImage(n, o, a, c, x, (96 - f) / 2, (96 - b) / 2, f, b);
    p(m.toDataURL());
  }, [u, i]);
  let m = useMemo(() => {
    if (r) return new ZB(() => r);
  }, [r]);
  return r && m && (s || d) ? jsx(sb, {
    children: jsxs('div', {
      className: 'x78zum5 x2b8uid x1qughib xh8yej3 xfawy5m x9f619',
      children: [jsx('div', {
        className: 'x78zum5 x6s0dn4 x1rjybxy',
        children: u && i ? jsxs(Fragment, {
          children: [jsxs('div', {
            className: 'x1cp7g1s xb3r6kr x3nfvp2 x14ju556 x19y5rnk x1n2onr6',
            children: [jsx('img', {
              src: x,
              width: 32,
              height: 32,
              alt: '',
              className: 'xl1xv1r x115dhu7 x1lliihq'
            }), jsx('div', {
              className: 'x10l6tqk x10a8y8t x47corl x19y5rnk x1cp7g1s'
            })]
          }), jsx('div', {
            className: 'x1akne3o xb3r6kr x104kibb x1ua5tub xh0615m',
            children: m.format(r.type)
          })]
        }) : null
      }), jsxs('div', {
        className: 'x78zum5 x6s0dn4 x1rjybxy',
        children: [jsx(s0, {
          isImage: s,
          isVideo: d
        }), l ? jsx(sH, {
          paintIndex: t,
          paint: r
        }) : jsx(sZ, {
          paintIndex: t,
          currentPaint: r
        })]
      })]
    })
  }) : null;
}
function sZ({
  paintIndex: e,
  currentPaint: t
}) {
  let n = !!getFeatureFlags().buzz_video_export;
  let l = sW(n, e, t);
  return jsx(AutoInteractableWrapper, {
    name: _$$_2.UploadMedia,
    children: jsx(Button, {
      'recordingKey': 'cooperInlineMenuFillControlUploadMedia',
      'data-testid': 'cooper-inline-menu-upload-media-button',
      'data-paint-type': t?.type,
      'variant': 'secondary',
      'onClick': l,
      'children': renderI18nText(n ? 'cooper.inline_menu.choose_media' : 'cooper.inline_menu.upload_image')
    })
  });
}
function s0({
  isImage: e,
  isVideo: t
}) {
  let n = getFeatureFlags().buzz_video_export;
  let l = hasJubileePermissionForDesign();
  return t && n ? jsx(Fragment, {
    children: jsx(AutoInteractableWrapper, {
      name: _$$_2.AdjustVideoControl,
      children: jsx(sP, {})
    })
  }) : e ? jsxs(Fragment, {
    children: [jsx(AutoInteractableWrapper, {
      name: _$$_2.AdjustImageControl,
      children: jsx(sL, {})
    }), l && jsx(AutoInteractableWrapper, {
      name: _$$_2.AIToolsEntryPoint,
      children: jsx(sM, {
        trackingSource: 'buzz-inline-toolbar'
      })
    })]
  }) : null;
}
function s1({
  displayText: e
}) {
  return jsx(sb, {
    children: jsx('div', {
      className: 'x78zum5 xh8yej3 x6s0dn4 x2b8uid xl56j7k x3vvef7',
      children: e
    })
  });
}
let s2 = {
  type: 'SOLID',
  color: {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  },
  opacity: 1,
  blendMode: 'NORMAL'
};
function s4() {
  let e = useSelector(e => e.mirror.appModel.activeCanvasEditModeType);
  let t = function () {
    let e = useSelector(e => e.mirror.appModel.activeCanvasEditModeType);
    let {
      activePanel
    } = ew();
    return useCallback(() => {
      e === LayoutTabType.GRADIENT && activePanel?.panel !== eC.COLOR_PICKER && fullscreenValue.triggerAction('leave-edit-mode');
    }, [e, activePanel]);
  }();
  let {
    isPopoverOpen,
    togglePopover,
    closePopover
  } = _$$j6(_$$p5.FILL);
  let i = ik();
  let c = su();
  let u = !i || i.type === 'MIXED_PAINT';
  let x = i ? i.paint : void 0;
  let m = u ? void 0 : i.index;
  let [h, g, f] = function () {
    let {
      anyCooperFrames
    } = useCooperFrameSelectionInfo();
    let t = su();
    let n = useSelector(e => e.mirror.selectionProperties.numSelectedByType);
    let l = !!n && Kl(n, ['TEXT']);
    return _$$t5.useTabs({
      [sd.NONE]: !l && !anyCooperFrames,
      [sd.SOLID]: !0,
      [sd.GRADIENT]: !0,
      [sd.MEDIA]: !0,
      [sd.MIXED]: !0
    }, {
      defaultActive: t(),
      recordingKey: 'cooperInlineMenuFillSubmenu'
    });
  }();
  let b = _$$$(isPopoverOpen) && !isPopoverOpen;
  useEffect(() => {
    b && t();
  }, [b, t]);
  return jsx(_$$R4, {
    children: jsx(_$$A7, {
      positionY: _$$j5,
      target: jsx(AutoInteractableWrapper, {
        name: _$$_2.FillControlEntryPoint,
        children: jsx(_$$ar, {
          'recordingKey': 'cooperInlineMenuFillControl',
          'data-testid': 'cooper-inline-fill-control',
          'aria-label': getI18nString('cooper.inline_menu.fill_control'),
          'aria-pressed': isPopoverOpen,
          'tooltip': getI18nString('cooper.inline_menu.fill_control'),
          'tooltipType': KindEnum.TEXT,
          'showCaret': !0,
          'isActive': isPopoverOpen,
          'onClick': togglePopover,
          'children': c() === sd.MIXED ? jsx(_$$$5, {}) : jsx(_$$A13, {
            paint: x
          })
        })
      }),
      renderPopoverContents: () => jsx(s6, {
        tabPropsMap: h,
        tabPanelProps: g,
        tabManager: f,
        fillPaint: x,
        paintIndex: m,
        getCurrentFillTypePreset: c,
        closeMenu: closePopover
      }),
      isOpen: isPopoverOpen,
      onClose: () => {
        (e !== LayoutTabType.GRADIENT || f.activeTab !== sd.GRADIENT) && closePopover();
      }
    })
  });
}
function s6({
  tabPropsMap: e,
  tabPanelProps: t,
  tabManager: n,
  fillPaint: l,
  paintIndex: r,
  getCurrentFillTypePreset: i,
  closeMenu: u
}) {
  let x;
  useOnSelectionChange(() => {
    n.setActiveTab(i());
  });
  let m = useRef(!0);
  x = i();
  useEffect(() => {
    n.setActiveTab(x);
  }, [x]);
  !function (e, t, n) {
    let l = ij();
    let r = function () {
      let e = useSelector(e => e.mirror.appModel.activeCanvasEditModeType);
      return useCallback(t => {
        isValidValue(t) && isGradientType(t?.type) && e !== LayoutTabType.GRADIENT && fullscreenValue.triggerAction('toggle-gradient-edit-mode');
      }, [e]);
    }();
    let i = useRef(e);
    i.current = e;
    let o = useRef(void 0);
    let c = useRef(void 0);
    let u = useRef(void 0);
    let [x] = useSelectionProperty('dividedSwatchColors');
    let p = useRef(x);
    p.current = x;
    let m = _$$$(t.activeTab);
    useEffect(() => {
      if (n.current) {
        n.current = !1;
        t.activeTab === sd.GRADIENT && r(i.current);
        return;
      }
      if (!m) return;
      let e = i.current;
      if (e && isValidValue(e)) {
        e.type === 'SOLID' ? o.current = e : e.type?.startsWith('GRADIENT') ? c.current = e : (e.type === 'IMAGE' || e.type === 'VIDEO') && (u.current = e);
      } else if (isInvalidValue(e) && p.current && Array.isArray(p.current) && p.current.length > 1) {
        let e = p.current[p.current.length - 1];
        o.current = {
          type: 'SOLID',
          color: e,
          opacity: 1,
          blendMode: 'NORMAL'
        };
      }
      switch (t.activeTab) {
        case sd.SOLID:
          let a = o.current;
          a ? l(a, yesNoTrackingEnum.NO) : l(paintManager.initPaint('SOLID', s2.color, valueOrFallback(i.current, {}), 'cooper-inline-toolbar-fill-panel'), yesNoTrackingEnum.YES);
          break;
        case sd.GRADIENT:
          let s = c.current;
          if (s) {
            l(s, yesNoTrackingEnum.NO);
            r(s);
          } else {
            let e = paintManager.initPaint('GRADIENT_LINEAR', s2.color, valueOrFallback(i.current, {}), 'cooper-inline-toolbar-fill-panel');
            l(e, yesNoTrackingEnum.YES);
            r(e);
          }
          break;
        case sd.MEDIA:
          let d = u.current;
          d ? l(d, yesNoTrackingEnum.NO) : l(paintManager.initPaint('IMAGE', s2.color, valueOrFallback(i.current, {}), 'cooper-inline-toolbar-fill-panel'), yesNoTrackingEnum.YES);
          break;
        case sd.NONE:
          fullscreenValue.updateSelectionProperties({
            fillPaints: []
          });
        case sd.MIXED:
      }
    }, [i, n, l, m, t.activeTab, r]);
  }(l, n, m);
  return jsx(_$$k4, {
    name: _$$$2.FillSubmenu,
    children: jsx(rs, {
      children: jsxs('div', {
        className: 'x1rkcj0o',
        children: [jsxs(aU, {
          manager: n,
          children: [jsx(_$$t5.Tab, {
            ...e.NONE,
            htmlAttributes: {
              'data-testid': 'cooper-inline-fill-submenu-tab-none'
            },
            children: getI18nString('cooper.inline_menu.fill_submenu.no_fill')
          }), jsx(_$$t5.Tab, {
            ...e.SOLID,
            htmlAttributes: {
              'data-testid': 'cooper-inline-fill-submenu-tab-solid'
            },
            children: getI18nString('cooper.inline_menu.fill_submenu.color')
          }), jsx(_$$t5.Tab, {
            ...e.GRADIENT,
            htmlAttributes: {
              'data-testid': 'cooper-inline-fill-submenu-tab-gradient'
            },
            children: getI18nString('cooper.inline_menu.fill_submenu.gradient')
          }), jsx(_$$t5.Tab, {
            ...e.MEDIA,
            htmlAttributes: {
              'data-testid': 'cooper-inline-fill-submenu-tab-media'
            },
            children: getFeatureFlags().buzz_video_export ? getI18nString('cooper.inline_menu.fill_submenu.media') : getI18nString('cooper.inline_menu.fill_submenu.image')
          })]
        }), jsx('div', {
          className: 'xdn4y7b xm73e5p xjm9jq1 xzqstp9'
        }), jsx(_$$t5.TabPanel, {
          ...t.MIXED,
          children: jsx(s1, {
            displayText: getI18nString('cooper.inline_menu.fill_submenu.mixed_selection_body')
          })
        }), jsx(_$$t5.TabPanel, {
          ...t.NONE,
          children: jsx(s1, {
            displayText: getI18nString('cooper.inline_menu.fill_submenu.no_fill_body')
          })
        }), jsx(_$$t5.TabPanel, {
          ...t.SOLID,
          children: jsx(s_, {
            fillColor: l,
            closeMenu: u
          })
        }), jsx(_$$t5.TabPanel, {
          ...t.GRADIENT,
          children: jsx(sz, {
            paint: l,
            closeMenu: u
          })
        }), jsx(_$$t5.TabPanel, {
          ...t.MEDIA,
          children: jsx(sQ, {
            paint: l,
            paintIndex: r
          })
        })]
      })
    })
  });
}
function de({
  singleImagePaint: e
}) {
  let t = ij();
  return e ? jsx(dt, {
    paint: e,
    onChange: t
  }) : null;
}
function dt({
  paint: e,
  onChange: t
}) {
  let n = useSelector(e => e.mirror.appModel.activeCanvasEditModeType);
  let {
    isPopoverOpen,
    togglePopover,
    closePopover
  } = _$$j6(_$$p5.IMAGE_CROP);
  let c = _$$$(n);
  useEffect(() => {
    c && n === LayoutTabType.RASTER && !isPopoverOpen && togglePopover();
  }, [c, n, isPopoverOpen, togglePopover]);
  let u = _$$$(isPopoverOpen) && !isPopoverOpen;
  useEffect(() => {
    u && n === LayoutTabType.RASTER && fullscreenValue.triggerActionInUserEditScope('leave-edit-mode');
  }, [u, n]);
  return jsx(_$$R4, {
    children: jsx(_$$A7, {
      positionY: _$$j5,
      target: jsx(AutoInteractableWrapper, {
        name: _$$_2.ImageCropEntryPoint,
        children: jsx(_$$ar, {
          'data-testid': 'cooper-inline-crop-image-button',
          'aria-label': getI18nString('cooper.inline_menu.image.crop_image'),
          'aria-pressed': isPopoverOpen,
          'tooltip': 'crop-image',
          'tooltipType': KindEnum.LOOKUP,
          'isActive': isPopoverOpen,
          'onClick': togglePopover,
          'showCaret': !0,
          'recordingKey': 'cooperInlineImageCropEntryPoint',
          'children': jsx(_$$V5, {})
        })
      }),
      renderPopoverContents: () => jsx(dn, {
        editModeType: n,
        paint: e,
        onChange: t,
        recordingKey: 'cooperInlineImageCropPanel'
      }),
      isOpen: isPopoverOpen,
      onClose: () => {
        n !== LayoutTabType.RASTER && closePopover();
      }
    })
  });
}
function dn({
  editModeType: e,
  paint: t,
  onChange: n,
  recordingKey: l
}) {
  let [r, i, s] = _$$t5.useTabs({
    STRETCH: !0,
    FIT: !0,
    FILL: !0,
    NONE: !0
  }, {
    defaultActive: () => dl(t.imageScaleMode)
  });
  let c = useCallback(e => {
    e === 'STRETCH' ? fullscreenValue.triggerActionInUserEditScope('crop-image') : n({
      ...t,
      imageScaleMode: e
    });
  }, [n, t]);
  let u = _$$$(s.activeTab);
  useEffect(() => {
    u && s.activeTab !== 'NONE' && c(s.activeTab);
  }, [u, s.activeTab, c]);
  let x = _$$$(t.imageScaleMode);
  useEffect(() => {
    x && s.setActiveTab(dl(t.imageScaleMode));
  }, [x, t.imageScaleMode, s]);
  let p = function (e) {
    let {
      onlyDetached
    } = useCooperFrameSelectionInfo();
    return e === LayoutTabType.RASTER && onlyDetached;
  }(e);
  let m = Zr('rotate-90-clockwise') || p;
  let h = Zr('flip-horizontal') || p;
  let g = Zr('flip-vertical') || p;
  let f = jsxs(Fragment, {
    children: [(m || h || g) && jsx(_$$c4, {}), m && jsx(ds, {
      editModeType: e,
      paint: t,
      onPaintChange: n,
      disabled: !m
    }), h && jsx(dd, {
      editModeType: e
    }), g && jsx(dc, {
      editModeType: e
    })]
  });
  let b = jsxs(Fragment, {
    children: [jsx(_$$c4, {}), jsx(da, {
      paint: t,
      onChange: n
    }), f]
  });
  return jsx(_$$k4, {
    name: _$$$2.ImageCropSubmenu,
    children: jsxs(rs, {
      children: [jsx(di, {
        tabManager: s,
        tabProps: r,
        recordingKey: l
      }), jsx(dr, {
        ...i.FIT,
        children: f
      }), jsx(dr, {
        ...i.FILL,
        children: f
      }), jsx(dr, {
        ...i.STRETCH,
        children: b
      })]
    })
  });
}
function dl(e) {
  return e && e !== 'TILE' ? e : 'NONE';
}
function dr({
  children: e,
  ...t
}) {
  return jsx(_$$t5.TabPanel, {
    ...t,
    children: jsx('div', {
      className: 'x78zum5',
      children: e
    })
  });
}
function di({
  tabManager: e,
  tabProps: t,
  recordingKey: n
}) {
  let l = useRef(new _$$D());
  return jsx(_$$R4, {
    children: jsxs(aU, {
      manager: e,
      children: [jsx(_$$t5.Tab, {
        ...t.FIT,
        recordingKey: generateRecordingKey(n, 'tab', 'FIT'),
        children: l.current.format('FIT')
      }), jsx(_$$t5.Tab, {
        ...t.FILL,
        recordingKey: generateRecordingKey(n, 'tab', 'FILL'),
        children: l.current.format('FILL')
      }), jsx(_$$t5.Tab, {
        ...t.STRETCH,
        recordingKey: generateRecordingKey(n, 'tab', 'STRETCH'),
        children: l.current.format('STRETCH')
      })]
    })
  });
}
function da({
  paint: e,
  onChange: t
}) {
  let [n, l] = useState(1);
  let [r, i] = useState(3);
  let s = KT(e);
  useEffect(() => {
    s && (s < n && l(s), s > r && i(s));
  }, [n, r, s]);
  return jsx(_$$R4, {
    children: jsx(AutoInteractableWrapper, {
      name: _$$_2.ImageCropSlider,
      children: jsx('div', {
        className: cssBuilderInstance.w150.contentCenter.$,
        children: jsx(_$$A6, {
          'aria-label': getI18nString('cooper.inline_menu.image.scale_image'),
          'value': s,
          'min': n,
          'max': r,
          'rangeAnchor': n,
          'step': 0.01,
          'bigStep': 0.1,
          'onChange': (n, {
            commit: l
          }) => {
            let r = _$$AO(e, s, n) ?? e.transform;
            t({
              ...e,
              transform: r
            }, l ? yesNoTrackingEnum.YES : yesNoTrackingEnum.NO);
          }
        })
      })
    })
  });
}
function ds({
  editModeType: e,
  paint: t,
  onPaintChange: n,
  disabled: l
}) {
  let r = useCallback(() => {
    e === LayoutTabType.RASTER ? (n(rotatePaint(t, 90), yesNoTrackingEnum.YES), _$$l2.user('image-rotate-clockwise', () => {
      Fullscreen?.repairThumbnails();
    })) : fullscreenValue.triggerActionInUserEditScope('rotate-90-clockwise');
  }, [e, n, t]);
  return jsx(_$$R4, {
    children: jsx(AutoInteractableWrapper, {
      name: _$$_2.ImageRotate,
      children: jsx(_$$ar, {
        'aria-label': getI18nString('cooper.inline_menu.image.rotate_image'),
        'tooltip': getI18nString('cooper.inline_menu.image.rotate_image'),
        'tooltipType': KindEnum.TEXT,
        'tooltipShowAbove': !1,
        'onClick': r,
        'disabled': l,
        'children': jsx(_$$R7, {})
      })
    })
  });
}
function dd({
  editModeType: e,
  disabled: t
}) {
  return jsx(_$$R4, {
    children: jsx(AutoInteractableWrapper, {
      name: _$$_2.ImageFlipHorizontal,
      children: jsx(_$$ar, {
        'aria-label': getI18nString('fullscreen_actions.flip-horizontal'),
        'tooltip': 'flip-horizontal',
        'tooltipType': KindEnum.LOOKUP,
        'tooltipShowAbove': !1,
        'onClick': () => {
          e === LayoutTabType.RASTER && fullscreenValue.triggerActionInUserEditScope('leave-edit-mode');
          fullscreenValue.triggerActionInUserEditScope('flip-horizontal');
        },
        'disabled': t,
        'children': jsx(_$$W4, {})
      })
    })
  });
}
function dc({
  editModeType: e,
  disabled: t
}) {
  return jsx(_$$R4, {
    children: jsx(AutoInteractableWrapper, {
      name: _$$_2.ImageFlipVertical,
      children: jsx(_$$ar, {
        'aria-label': getI18nString('fullscreen_actions.flip-vertical'),
        'tooltip': 'flip-vertical',
        'tooltipType': KindEnum.LOOKUP,
        'tooltipShowAbove': !1,
        'onClick': () => {
          e === LayoutTabType.RASTER && fullscreenValue.triggerActionInUserEditScope('leave-edit-mode');
          fullscreenValue.triggerActionInUserEditScope('flip-vertical');
        },
        'disabled': t,
        'children': jsx(_$$D2, {})
      })
    })
  });
}
let dx = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M9.28 13.017c-.394 1.016.61 2.015 1.625 1.615l1.688-.666a1.5 1.5 0 0 0 .51-.335l3.743-3.742.707-.707a1.5 1.5 0 0 0 0-2.121l-.707-.708a1.5 1.5 0 0 0-2.122 0l-.707.708-3.74 3.74a1.5 1.5 0 0 0-.338.518zm1.258.684a.25.25 0 0 1-.325-.323l.659-1.698a.5.5 0 0 1 .112-.172l3.387-3.387 1.414 1.414-3.389 3.389a.5.5 0 0 1-.17.112zm5.954-4.873-1.414-1.414.354-.353a.5.5 0 0 1 .707 0l.707.707a.5.5 0 0 1 0 .707zM11.5 6a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 1 0v4a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 16.5v-9A1.5 1.5 0 0 1 7.5 6z',
      clipRule: 'evenodd'
    })
  });
});
let dh = registerModal(e => {
  let t = useModalManager(e);
  let {
    onClose
  } = e;
  let l = useSelector(selectComponentCooperFrameIds);
  let r = useCallback(() => {
    _$$l2.user('detach-instances', () => Fullscreen?.detachInstances(l, !0));
    onClose();
  }, [l, onClose]);
  return jsx(ModalRootComponent, {
    manager: t,
    width: 'md',
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: getI18nString('cooper.properties_panel.remove_restrictions.modal_title')
        })
      }), jsx(DialogBody, {
        children: getI18nString('cooper.properties_panel.remove_restrictions.modal_description')
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            variant: 'secondary',
            onClick: onClose,
            children: getI18nString('cooper.properties_panel.remove_restrictions.modal_cancel')
          }), jsx(Button, {
            variant: 'destructive',
            onClick: r,
            recordingKey: 'cooperUnlockTemplateModalButton',
            children: getI18nString('cooper.properties_panel.remove_restrictions.modal_remove')
          })]
        })
      })]
    })
  });
});
function dg(e) {
  let [t] = useAtomValueAndSetter(assetCategoryAtom);
  return t === e;
}
function df(e) {
  let [, t] = useAtomValueAndSetter(assetCategoryAtom);
  return useCallback(() => {
    t(e);
  }, [t, e]);
}
var db = (e => (e.EDIT_CONTENT = 'EDIT_CONTENT', e.EDIT_TEXT = 'EDIT_TEXT', e.MULTI_EDIT_TEXT = 'MULTI_EDIT_TEXT', e.UPLOAD_MEDIA = 'UPLOAD_MEDIA', e.REMOVE_EDITING_RESTRICTIONS = 'REMOVE_EDITING_RESTRICTIONS', e))(db || {});
function d_() {
  let e = dg(AssetCategoryEnum.FIELDS);
  let t = df(AssetCategoryEnum.FIELDS);
  let n = isNotInFocusedNodeView();
  let l = useCallback(() => {
    n || e ? fullscreenValue.triggerActionInUserEditScope('request-edit-mode-via-toolbar') : t();
  }, [e, n, t]);
  return jsx(_$$R4, {
    children: jsx(JE, {
      'aria-label': getI18nString('cooper.inline_menu.edit-text'),
      'iconPrefix': jsx(_$$e8, {}),
      'onClick': l,
      'children': getI18nString('cooper.inline_menu.edit-text')
    })
  });
}
function dj() {
  let e = df(AssetCategoryEnum.FIELDS);
  return jsx(_$$R4, {
    children: jsx(AutoInteractableWrapper, {
      name: _$$_2.EditContent,
      children: jsx(JE, {
        'aria-label': getI18nString('cooper.inline_menu.edit-content'),
        'iconPrefix': jsx(dx, {}),
        'onClick': e,
        'children': getI18nString('cooper.inline_menu.edit-content')
      })
    })
  });
}
function dy() {
  let e = !!getFeatureFlags().buzz_video_export;
  let t = sW(e);
  return jsx(_$$R4, {
    children: jsx(AutoInteractableWrapper, {
      name: _$$_2.UploadMedia,
      children: jsx(JE, {
        'aria-label': getI18nString(e ? 'cooper.inline_menu.upload_media_button' : 'cooper.inline_menu.upload_image_button'),
        'iconPrefix': jsx(_$$s4, {}),
        'onClick': t,
        'children': getI18nString(e ? 'cooper.inline_menu.upload_media_button' : 'cooper.inline_menu.upload_image_button')
      })
    })
  });
}
function dE() {
  let e = useDispatch();
  let [t, n] = useState(!1);
  return jsx(_$$R4, {
    children: jsx(AutoInteractableWrapper, {
      name: _$$_2.RemoveEditingRestrictions,
      children: jsx('span', {
        onMouseEnter: () => n(!0),
        onMouseLeave: () => n(!1),
        children: jsx(_$$ar, {
          'aria-label': getI18nString('cooper.inline_menu.remove_guidelines'),
          'tooltip': getI18nString('cooper.inline_menu.remove_guidelines'),
          'tooltipType': KindEnum.TEXT,
          'onClick': () => {
            e(showModalHandler({
              type: dh
            }));
          },
          'recordingKey': 'cooperInlineMenuRemoveEditingRestrictions',
          'children': t ? jsx(rB, {}) : jsx(_$$c3, {})
        })
      })
    })
  });
}
function dv() {
  let e = function () {
    let {
      onlyCooperFrames
    } = useCooperFrameSelectionInfo();
    let t = GV();
    let n = dg(AssetCategoryEnum.FIELDS);
    let l = function () {
      let e = useSelector(selectSceneGraphSelectionKeys);
      let t = useSceneGraphSelector();
      return e.every(e => {
        let n = t.get(e);
        return !!n && n.type !== 'TEXT' && hasImageFill(n);
      });
    }();
    let r = useAllSelectedNodesHaveVideoFill();
    let i = aI();
    let o = isNotInFocusedNodeView();
    let a = function () {
      let e = useSelectionPropertyValue('numSelectedByType');
      return !(!e || isInvalidValue(e)) && OU(e, ['TEXT', 'TEXT_PATH']);
    }();
    let c = ['REMOVE_EDITING_RESTRICTIONS'];
    onlyCooperFrames ? o || n || c.push('EDIT_CONTENT') : (t[ItemType.TYPE_ITEM] && a && !i ? c.push('EDIT_TEXT') : t[ItemType.TYPE_ITEM] && i && c.push('MULTI_EDIT_TEXT'), (l || r) && t[ItemType.FILL_ITEM] && c.push('UPLOAD_MEDIA'));
    return c;
  }();
  let t = getFeatureFlags().buzz_unsplash;
  return e.length === 0 ? null : jsx(Fragment, {
    children: e.map((n, l) => {
      let r = `${n}-${l}`;
      switch (n) {
        case 'EDIT_CONTENT':
          return jsx(dj, {}, r);
        case 'EDIT_TEXT':
          return jsx(d_, {}, r);
        case 'UPLOAD_MEDIA':
          return t ? jsx(sH, {}, r) : jsx(dy, {}, r);
        case 'REMOVE_EDITING_RESTRICTIONS':
          return jsxs(Fragment, {
            children: [jsx(dE, {}, r), l < e.length - 1 ? jsx(_$$c4, {}, 'separator') : null]
          });
        case 'MULTI_EDIT_TEXT':
          return jsx(ak, {}, r);
        default:
          return null;
      }
    })
  });
}
function dI() {
  let e = useSelector(e => e.mirror.selectionProperties.stateGroupSelectionInfo);
  let {
    onlyCooperFrames
  } = useCooperFrameSelectionInfo();
  return !onlyCooperFrames && e?.allStates && e?.selectedStates ? jsx(_$$R4, {
    children: jsx(AutoInteractableWrapper, {
      name: _$$_2.VariantSwapEntryPoint,
      children: jsx(dS, {})
    })
  }) : null;
}
let dS = memo(() => {
  let {
    activePanel,
    togglePanel
  } = ew();
  let n = activePanel?.panel === eC.VARIANT_SWAP;
  return jsx(dk, {
    isActive: n,
    onClick: () => togglePanel(eC.VARIANT_SWAP)
  });
});
function dk({
  isActive: e,
  onClick: t
}) {
  return jsx(JE, {
    'data-testid': 'cooper-inline-state-group-item-controls',
    'aria-expanded': e,
    'aria-label': getI18nString('cooper.inline_menu.swap_content'),
    'onClick': t,
    'iconPrefix': jsx(_$$K5, {}),
    'children': getI18nString('cooper.inline_menu.swap_content')
  });
}
function dN({
  strokePaint: e
}) {
  let {
    activePanel,
    togglePanel,
    closePanel
  } = ew();
  let r = activePanel?.panel === eC.COLOR_PICKER && activePanel.args?.type === 'STROKE';
  let i = useCallback(() => {
    togglePanel({
      panel: eC.COLOR_PICKER,
      args: {
        type: 'STROKE'
      }
    });
  }, [togglePanel]);
  useEffect(() => () => {
    r && closePanel();
  }, [closePanel, r]);
  return jsx(dR, {
    strokePaint: e,
    strokePaintPickerOpen: r,
    onStrokePaintClick: i
  });
}
function dR({
  strokePaint: e,
  strokePaintPickerOpen: t,
  onStrokePaintClick: n
}) {
  let [l, r] = useSelectionProperty('dashPattern');
  let [i, s] = useSelectionProperty('strokeWeight');
  let d = useMemo(() => ({
    NONE: {
      label: getI18nString('cooper.inline_menu.no_border_label')
    },
    SOLID: {
      dashPattern: [],
      label: getI18nString('cooper.inline_menu.solid_border_label')
    },
    DASHED: {
      dashPattern: [28, 28],
      label: getI18nString('cooper.inline_menu.dashed_border_label')
    }
  }), []);
  return jsx('div', {
    className: 'x78zum5 xdt5ytf xthkip5',
    children: jsx(dw, {
      presets: d,
      dashPattern: l,
      strokeWeight: i,
      strokePaint: e,
      onStrokeWeightChange: e => s(e, yesNoTrackingEnum.YES),
      onDashPatternChange: e => r(e ?? [], yesNoTrackingEnum.YES),
      strokePaintPickerOpen: t,
      onStrokePaintClick: n
    })
  });
}
function dw({
  presets: e,
  dashPattern: t,
  strokeWeight: n,
  onStrokeWeightChange: l,
  onDashPatternChange: r,
  strokePaint: i,
  strokePaintPickerOpen: s,
  onStrokePaintClick: d
}) {
  let c = useMemo(() => t && i ? isInvalidValue(t) ? MIXED_MARKER : t.length > 1 ? 'DASHED' : deepEqual(t, e.SOLID.dashPattern) ? 'SOLID' : 'NONE' : 'NONE', [t, i, e]);
  let [u, x, p] = _$$t5.useTabs(Object.keys(e).reduce((e, t) => (e[t] = !0, e), {
    MIXED: !0
  }), {
    defaultActive: isInvalidValue(c) ? 'MIXED' : c,
    recordingKey: 'cooperInlineMenuBorderSubmenu'
  });
  useEffect(() => {
    p.setActiveTab(isInvalidValue(c) ? 'MIXED' : c);
  }, [c, p]);
  let m = useLatestRef(p.activeTab);
  useEffect(() => {
    let t = p.activeTab;
    m !== t && t !== 'MIXED' && (t === 'NONE' && fullscreenValue.triggerActionInUserEditScope('remove-stroke'), r(e[t].dashPattern), m && m !== 'NONE' && m !== 'MIXED' || t === 'NONE' || n && i || fullscreenValue.triggerActionInUserEditScope('add-stroke-to-selection'));
  }, [m, r, l, e, n, i, p.activeTab]);
  let h = jsx('div', {
    className: 'xe8ttls',
    children: jsx(dO, {
      strokePaint: i,
      strokePaintPickerOpen: s,
      onStrokePaintClick: d,
      strokeWeight: n,
      onStrokeWeightChange: l
    })
  });
  return jsxs(Fragment, {
    children: [jsx('div', {
      className: 'xe8ttls',
      children: jsx(AutoInteractableWrapper, {
        name: _$$_2.StrokeDashPatternSelector,
        children: jsx(aU, {
          manager: p,
          children: Object.entries(e).map(([e, t]) => jsx(_$$t5.Tab, {
            ...u[e],
            htmlAttributes: {
              'data-testid': `cooper-inline-border-tab-${e}`
            },
            children: t.label
          }, e))
        })
      })
    }), jsx('div', {
      className: 'xjm9jq1 xh8yej3 xbpqucl'
    }), jsx(_$$t5.TabPanel, {
      ...x.MIXED,
      children: jsx(dP, {})
    }), jsx(_$$t5.TabPanel, {
      ...x.NONE,
      children: jsx(dL, {})
    }), jsx(_$$t5.TabPanel, {
      ...x.SOLID,
      children: h
    }), jsx(_$$t5.TabPanel, {
      ...x.DASHED,
      children: h
    })]
  });
}
function dL() {
  return jsx('div', {
    className: 'x1peatla x78zum5 x3vvef7 x6s0dn4 xl56j7k',
    children: renderI18nText('cooper.inline_menu.no_border_body')
  });
}
function dP() {
  return jsx('div', {
    className: 'x1peatla x78zum5 x3vvef7 x6s0dn4 xl56j7k',
    children: renderI18nText('cooper.inline_menu.mixed_border_body')
  });
}
function dO({
  strokePaint: e,
  strokePaintPickerOpen: t,
  onStrokePaintClick: n,
  strokeWeight: l,
  onStrokeWeightChange: r
}) {
  let i = useDispatch();
  let d = useRef(new KD({
    min: 0
  }));
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = getNudgeAmounts();
  return jsxs(rT, {
    children: [jsx(AutoInteractableWrapper, {
      name: _$$_2.StrokeWeightSlider,
      children: jsx(_$$A6, {
        'min': 0,
        'max': 50,
        'rangeAnchor': 0,
        'step': 1,
        'bigStep': 5,
        'mixed': isInvalidValue(l),
        'value': isValidValue(l) ? l ?? 0 : 0,
        'onChange': r,
        'aria-label': getI18nString('cooper.inline_menu.border_width')
      })
    }), jsx(AutoInteractableWrapper, {
      name: _$$_2.StrokeWeightInput,
      children: jsx(ScrubbableInput, {
        'dispatch': i,
        smallNudgeAmount,
        bigNudgeAmount,
        'formatter': d.current,
        'value': l,
        'onValueChange': r,
        'data-tooltip': getI18nString('cooper.inline_menu.border_width'),
        'data-tooltip-type': KindEnum.TEXT,
        'labelWidth': 88,
        'children': jsx(_$$E5, {})
      })
    }), jsx(AutoInteractableWrapper, {
      name: _$$_2.StrokePaintPicker,
      children: jsx(aq, {
        'aria-expanded': t,
        'onClick': n,
        'paint': e
      })
    })]
  });
}
function dM() {
  let e = useSelectionPropertyValue('strokePaints');
  let t = e ? isValidValue(e) ? e[0] : MIXED_MARKER : void 0;
  let {
    isPopoverOpen,
    togglePopover,
    closePopover
  } = _$$j6(_$$p5.STROKE);
  return jsx(_$$R4, {
    children: jsx(_$$A7, {
      positionY: _$$j5,
      target: jsx(AutoInteractableWrapper, {
        name: _$$_2.StrokeControlEntryPoint,
        children: jsx(_$$ar, {
          'recordingKey': 'cooperInlineMenuStrokeControl',
          'data-testid': 'cooper-inline-stroke-control',
          'aria-label': getI18nString('cooper.inline_menu.border'),
          'aria-pressed': isPopoverOpen,
          'tooltip': getI18nString('cooper.inline_menu.border'),
          'tooltipType': KindEnum.TEXT,
          'isActive': isPopoverOpen,
          'onClick': togglePopover,
          'showCaret': !0,
          'children': jsx(_$$E5, {})
        })
      }),
      renderPopoverContents: () => jsx(_$$k4, {
        name: _$$$2.StrokeSubmenu,
        children: jsx(rs, {
          children: jsx(dN, {
            strokePaint: t
          })
        })
      }),
      isOpen: isPopoverOpen,
      onClose: closePopover
    })
  });
}
function d$({
  nodeIds: e
}) {
  let {
    isPopoverOpen,
    togglePopover,
    closePopover
  } = _$$j6(_$$p5.VOLUME_CONTROL);
  let [r] = useAtomValueAndSetter(_$$oe);
  let i = useMemo(() => e.every(e => (r[e]?.currentVolume ?? 1) === 0), [e, r]);
  return getFeatureFlags().buzz_video_export ? jsx(_$$R4, {
    children: jsx(_$$A7, {
      positionY: _$$j5,
      target: jsx(AutoInteractableWrapper, {
        name: _$$_2.VideoVolumeControl,
        children: jsx(_$$ar, {
          'data-testid': 'buzz-inline-volume-control-button',
          'aria-label': getI18nString('cooper.inline_menu.video.volume_control'),
          'aria-pressed': isPopoverOpen,
          'tooltip': getI18nString('cooper.inline_menu.video.volume_control'),
          'tooltipType': KindEnum.TEXT,
          'isActive': isPopoverOpen,
          'onClick': togglePopover,
          'showCaret': !0,
          'recordingKey': 'buzzInlineVolumeControlEntryPoint',
          'children': i ? jsx(_$$P5, {}) : jsx(_$$L4, {})
        })
      }),
      renderPopoverContents: () => jsx(dV, {
        nodeIds: e,
        isAllMuted: i
      }),
      isOpen: isPopoverOpen,
      onClose: closePopover
    })
  }) : null;
}
function dV({
  nodeIds: e,
  isAllMuted: t
}) {
  let [n, l] = useAtomValueAndSetter(_$$oe);
  let r = useMemo(() => Math.max(...e.map(e => n[e]?.currentVolume ?? 1)), [e, n]);
  return jsx(_$$k4, {
    name: _$$$2.VideoVolumeControlSubmenu,
    children: jsx(rs, {
      children: jsxs('div', {
        className: 'x705fwa x1vqgdyp x3nfvp2 x8rdmch x3t71xm x1nfngrj x6s0dn4 xl56j7k',
        children: [jsx(AutoInteractableWrapper, {
          name: _$$_2.VideoVolumeControl,
          children: jsx(_$$ar, {
            'data-testid': 'buzz-inline-volume-mute-control',
            'aria-label': getI18nString('cooper.inline_menu.video.mute'),
            'tooltip': getI18nString('cooper.inline_menu.video.mute'),
            'tooltipType': KindEnum.TEXT,
            'isActive': t,
            'onClick': () => {
              l(t => {
                let n = {
                  ...t
                };
                e.forEach(e => {
                  let l = t[e]?.currentVolume ?? 1;
                  n[e] = {
                    currentVolume: l === 0 ? t[e]?.previousVolume ?? 1 : 0,
                    previousVolume: l === 0 ? t[e]?.previousVolume ?? 1 : l
                  };
                });
                return n;
              });
            },
            'recordingKey': 'buzzInlineVolumeMuteControl',
            'children': jsx(_$$P5, {})
          })
        }), jsx(_$$c4, {}), jsx(_$$A6, {
          'aria-label': getI18nString('cooper.inline_menu.video.volume_control'),
          'min': 0,
          'max': 1,
          'step': 0.01,
          'bigStep': 0.1,
          'value': r,
          'onChange': t => {
            l(n => {
              let l = {
                ...n
              };
              e.forEach(e => {
                l[e] = {
                  currentVolume: t,
                  previousVolume: t === 0 ? n[e]?.previousVolume ?? 1 : t
                };
              });
              return l;
            });
          },
          'rangeAnchor': 0
        })]
      })
    })
  });
}
let dU = memo(() => {
  let e = isSelfDesignMode();
  let t = GV();
  let n = Vi();
  let {
    hasInstanceSelected
  } = useCooperFrameSelectionInfo();
  let r = useSelectedCooperFrameIds();
  let i = useSelectedSlideRowGuids();
  let c = iS();
  let u = useAllSelectedNodesHaveVideoFill();
  let x = useSelector(selectSceneGraphSelectionKeys);
  let p = isFullscreenAndInFocusedNodeView();
  let m = canShowBuzzTemplateSets();
  let h = useSelector(e => e.mirror.appModel.showUi);
  let g = useSceneGraphSelection();
  let f = useSelector(e => {
    let t = e.mirror.appModel.onCanvasNameEditorInfo.mode;
    return t === DiagramElementType.FRAME_NAME || t === DiagramElementType.CANVAS_GRID_ROW_NAME;
  });
  let b = function () {
    let e = useSelectedCooperFrameIds();
    let [t, n] = useState({});
    let l = useMemoStable(() => t, [t]);
    useLayoutEffect(() => {
      if (!e.length) {
        n({});
        return;
      }
      let t = 'cooper-frame-positions';
      let l = EE(t, e, e => {
        n(t => ({
          ...t,
          [e.nodeId]: e.position
        }));
      });
      n(Object.entries(l.currentNodePosition).reduce((e, [t, n]) => (n && (e[t] = n.position), e), {}));
      return () => {
        _$$lB(t);
      };
    }, [e]);
    return useMemo(() => Object.entries(l).reduce((e, [t, n]) => {
      let l = n?.absoluteBounds;
      return l ? function (e, t) {
        if (e == null && t == null) return null;
        {
          if (e == null) return t;
          if (t == null) return e;
          let n = Math.min(e.x, t.x);
          let l = Math.min(e.y, t.y);
          return {
            x: n,
            y: l,
            width: Math.max(e.x + e.width, t.x + t.width) - n,
            height: Math.max(e.y + e.height, t.y + t.height) - l
          };
        }
      }(e, l) : e;
    }, null), [l]);
  }();
  let _ = Object.keys(g).length === 0 || !e || f || !h || n || p && r.length > 1 || i.length > 0 && !m;
  return jsx(_$$k5, {
    isShown: !_,
    anchorToRect: b ?? void 0,
    respectPreferredPosition: !0,
    disableAnimation: p,
    zIndex: V$,
    obstacleMargin: 32,
    children: jsxs(IA, {
      children: [jsx(dK, {}), jsxs('span', {
        'data-testid': 'cooper-inline-menu',
        'children': [m && jsx(dW, {}), !m && (hasInstanceSelected ? jsx(dX, {
          shownPanels: t,
          directlySelectedGUIDs: x,
          singleImagePaint: c,
          allNodesHaveVideoPaint: u
        }) : jsx(dY, {
          shownPanels: t,
          directlySelectedGUIDs: x,
          singleImagePaint: c,
          allNodesHaveVideoPaint: u
        }))]
      })]
    })
  });
});
function dK() {
  let e = isSelfDesignMode();
  let {
    activePanel,
    closePanel
  } = ew();
  let l = activePanel && eN(activePanel.panel);
  let r = _$$Wv();
  let i = _$$$(r.state.isPopoverOpen) && r.state.isPopoverOpen;
  useEffect(() => {
    i && l && closePanel();
  }, [i, l, closePanel]);
  useOnSelectionChange(() => {
    l && closePanel();
  });
  useEffect(() => {
    !e && l && closePanel();
  }, [e, l, closePanel]);
  return jsx(Fragment, {});
}
function dW({}) {
  return jsx(_$$k4, {
    name: _$$$2.TemplateSetNudgeDesignModeMenu,
    children: jsx(ro, {
      leftItems: jsx(Fragment, {
        children: jsx(dH, {})
      }),
      rightItems: () => jsx(Fragment, {})
    })
  });
}
function dH() {
  return jsx(_$$R4, {
    children: jsx(AutoInteractableWrapper, {
      name: _$$_2.SwitchToDesignMode,
      children: jsxs(JE, {
        'data-testid': 'cooper-inline-effects-entry-point',
        'aria-label': getI18nString('cooper.toolbelt.toast.switch_design_mode_edit_template'),
        'onClick': _o,
        'recordingKey': 'cooperInlineEffectsEntryPoint',
        'children': [jsx(_$$P2, {}), getI18nString('cooper.toolbelt.toast.switch_design_mode_edit_template')]
      })
    })
  });
}
function dX({
  shownPanels: e,
  singleImagePaint: t,
  directlySelectedGUIDs: n,
  allNodesHaveVideoPaint: l
}) {
  return jsx(_$$k4, {
    name: _$$$2.FocusedEditingMenu,
    children: jsx(ro, {
      leftItems: jsxs(Fragment, {
        children: [jsx(dv, {}), getFeatureFlags().buzz_video_export && jsx(useCachedSubtree, {
          isVisible: l,
          children: () => jsx(d$, {
            nodeIds: n
          })
        }), jsx(useCachedSubtree, {
          isVisible: e[ItemType.FILL_ITEM] && !!t,
          children: () => jsx(de, {
            singleImagePaint: t
          })
        }), jsx(useCachedSubtree, {
          isVisible: e[ItemType.INSTANCE_ITEM],
          children: () => jsx(dI, {})
        })]
      }),
      rightItems: e => jsx(aN, {
        idealMaxWidth: e
      })
    })
  });
}
function dY({
  shownPanels: e,
  singleImagePaint: t,
  directlySelectedGUIDs: n,
  allNodesHaveVideoPaint: l
}) {
  let {
    onlyCooperFrames,
    anyCooperFrames
  } = useCooperFrameSelectionInfo();
  let a = function () {
    let e = Jo();
    let {
      anyCooperFrames: _anyCooperFrames
    } = useCooperFrameSelectionInfo();
    return e.cornerRadius && !_anyCooperFrames;
  }();
  let s = e[ItemType.FILL_ITEM] && !!t;
  return jsx(_$$k4, {
    name: _$$$2.FreeformEditingMenu,
    children: jsx(ro, {
      leftItems: jsxs(Fragment, {
        children: [jsx(useCachedSubtree, {
          isVisible: onlyCooperFrames,
          children: () => jsx(_$$_3, {})
        }), jsx(useCachedSubtree, {
          isVisible: e[ItemType.TYPE_ITEM],
          children: () => jsx(aS, {})
        }), jsx(useCachedSubtree, {
          isVisible: e[ItemType.INSTANCE_ITEM],
          children: () => jsx(dI, {})
        }), jsx(useCachedSubtree, {
          isVisible: e[ItemType.FILL_ITEM],
          children: () => jsx(s4, {})
        }), getFeatureFlags().buzz_video_export && jsx(useCachedSubtree, {
          isVisible: l,
          children: () => jsx(d$, {
            nodeIds: n
          })
        }), jsx(useCachedSubtree, {
          isVisible: e[ItemType.STROKE_ITEM],
          children: () => jsx(dM, {})
        }), jsx(useCachedSubtree, {
          isVisible: s,
          children: () => jsx(de, {
            singleImagePaint: t
          })
        }), jsx(useCachedSubtree, {
          isVisible: a,
          children: () => jsx(rP, {})
        }), jsx(useCachedSubtree, {
          isVisible: e[ItemType.TYPE_ITEM],
          children: () => jsx(ay, {})
        }), jsx(useCachedSubtree, {
          isVisible: !anyCooperFrames,
          children: () => jsx(dq, {})
        })]
      }),
      rightItems: e => jsx(aN, {
        idealMaxWidth: e
      })
    })
  });
}
function dq() {
  return jsxs(Fragment, {
    children: [jsx(_$$c4, {}), jsx(a4, {})]
  });
}
let dQ = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M17.5 17a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zm-.398-7.995A1 1 0 0 1 18 10v4l-.005.102a1 1 0 0 1-.893.893L17 15H7l-.103-.005a1 1 0 0 1-.892-.893L6 14v-4a1 1 0 0 1 .897-.995L7 9h10zM7 14h10v-4H7zm10.5-8a.5.5 0 0 1 0 1h-11l-.1-.01a.5.5 0 0 1 0-.98L6.5 6z'
    })
  });
});
let d3 = setupRemovableAtomFamily(() => atom(null));
let d9 = setupRemovableAtomFamily(() => atom(''));
var ce = (e => (e.UNSPLASH = 'UNSPLASH', e))(ce || {});
var ct = (e => (e.LEFT_RAIL = 'LEFT_RAIL', e))(ct || {});
var cn = (e => (e.SEARCH = 'SEARCH', e.EDITORIAL = 'EDITORIAL', e))(cn || {});
let cl = setupRemovableAtomFamily(() => atom({
  provider: 'UNSPLASH',
  viewType: 'LEFT_RAIL',
  libraryType: 'EDITORIAL',
  isLoading: !1
}));
var co = (e => (e.BLACK_AND_WHITE = 'black_and_white', e.BLACK = 'black', e.WHITE = 'white', e.YELLOW = 'yellow', e.ORANGE = 'orange', e.RED = 'red', e.PURPLE = 'purple', e.MAGENTA = 'magenta', e.GREEN = 'green', e.TEAL = 'teal', e.BLUE = 'blue', e))(co || {});
var ca = (e => (e.RELEVANT = 'relevant', e.LATEST = 'latest', e))(ca || {});
var cs = (e => (e.LOW = 'low', e.HIGH = 'high', e))(cs || {});
var cd = (e => (e.LANDSCAPE = 'landscape', e.PORTRAIT = 'portrait', e.SQUARISH = 'squarish', e))(cd || {});
let cc = _$$z.object({
  id: _$$z.string(),
  width: _$$z.number(),
  height: _$$z.number(),
  color: _$$z.string().nullable(),
  blur_hash: _$$z.string().nullable(),
  likes: _$$z.number().nullable(),
  alt_description: _$$z.string().nullable(),
  user: _$$z.object({
    id: _$$z.string(),
    username: _$$z.string(),
    name: _$$z.string(),
    first_name: _$$z.string().nullable(),
    last_name: _$$z.string().nullable(),
    profile_image: _$$z.object({
      small: _$$z.string().nullable(),
      medium: _$$z.string().nullable(),
      large: _$$z.string().nullable()
    }).nullable(),
    links: _$$z.object({
      self: _$$z.string(),
      html: _$$z.string(),
      portfolio: _$$z.string()
    })
  }),
  urls: _$$z.object({
    raw: _$$z.string(),
    full: _$$z.string(),
    regular: _$$z.string(),
    small: _$$z.string(),
    thumb: _$$z.string()
  }),
  links: _$$z.object({
    self: _$$z.string(),
    html: _$$z.string(),
    download: _$$z.string(),
    download_location: _$$z.string()
  })
});
let cu = _$$z.object({
  total: _$$z.number(),
  total_pages: _$$z.number(),
  results: _$$z.array(cc)
});
let cx = _$$z.object({
  prev: _$$z.number().nullable(),
  next: _$$z.number().nullable(),
  first: _$$z.number().nullable(),
  last: _$$z.number().nullable()
});
let cp = _$$z.object({
  results: _$$z.array(cc),
  pagination_info: cx
});
let cm = new class {
  constructor() {
    this.UnsplashSearchSchemaValidator = createPaginatedValidator('UnsplashSearchResponseSchemaValidator', cu, 'buzz_unsplash', !0);
    this.UnsplashPaginatedSearchQuery = liveStoreInstance.PaginatedQuery({
      fetch: async (e, {
        pageParam: t
      }) => {
        try {
          let n = t ? Number(t) : 1;
          let l = (await this.UnsplashSearchSchemaValidator.validate(async ({
            xr: t
          }) => {
            let l = APIParameterUtils.toAPIParameters({
              ...e,
              page: n
            });
            return await t.getPaginated(`/api/unsplash/${e.fileKey}/search`, l);
          })).data.meta;
          let r = l.total_pages > 0 && n < l.total_pages ? String(n + 1) : null;
          let i = l.total_pages > 0 && n > 1 ? String(n - 1) : null;
          return {
            data: l.results,
            nextPage: r,
            prevPage: i
          };
        } catch (e) {
          reportError(ServiceCategories.PROJECT_BUZZ, e);
          return e;
        }
      }
    });
    this.UnsplashEditorialSchemaValidator = createPaginatedValidator('UnsplashEditorialResponseSchemaValidator', cp, 'buzz_unsplash', !0);
    this.UnsplashPaginatedEditorialQuery = liveStoreInstance.PaginatedQuery({
      fetch: async (e, {
        pageParam: t
      }) => {
        try {
          let n = t ? Number(t) : 1;
          let l = (await this.UnsplashEditorialSchemaValidator.validate(async ({
            xr: t
          }) => {
            let l = APIParameterUtils.toAPIParameters({
              ...e,
              page: n
            });
            return await t.getPaginated(`/api/unsplash/${e.fileKey}/editorial`, l);
          })).data.meta;
          let {
            nextPage,
            prevPage
          } = this.computePaginationInfo(l.pagination_info);
          return {
            data: l.results,
            nextPage,
            prevPage
          };
        } catch (e) {
          reportError(ServiceCategories.PROJECT_BUZZ, e);
          return e;
        }
      }
    });
  }
  computePaginationInfo(e) {
    let {
      prev,
      next,
      first,
      last
    } = e;
    let i = e => e != null && (first != null && last != null ? e >= first && e <= last : first != null ? e >= first : last != null && e <= last);
    return {
      prevPage: i(prev) ? String(prev) : null,
      nextPage: i(next) ? String(next) : null
    };
  }
}();
let ch = createContext(null);
function cg() {
  let e = isFullscreenAndInFocusedNodeView();
  let t = getFocusedNodeId();
  let {
    onlyInstances
  } = useCooperFrameSelectionInfo();
  if (e) {
    let e = UN().get(t);
    return e?.type === 'INSTANCE';
  }
  return onlyInstances ?? !1;
}
let c_ = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M16.204 6.01A2 2 0 0 1 18 8v8l-.01.204a2 2 0 0 1-1.786 1.785L16 18H8a2 2 0 0 1-1.99-1.796L6 16V8a2 2 0 0 1 2-2h8zM8 7a1 1 0 0 0-.995.897L7 8v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-.898-.995L16 7zm7.5 1a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5zM13 11h2V9h-2z'
    })
  });
});
let cR = createReduxSubscriptionAtomWithState(e => e.universalInsertModal);
let cw = {
  headerTextOverride: {
    ..._$$g2.textBodyMediumStrong,
    $$css: !0
  }
};
function cL({
  positionerRef: e
}) {
  let {
    searchQuery,
    setPreviewResource,
    setSearchQuery
  } = Rz();
  let i = useAtomWithSubscription(cR);
  let [s, d] = useState(i.initialSelectedCategory ?? l);
  let {
    setQuery
  } = _$$I2(Cn.FigJam);
  let [u] = useDebounce(searchQuery, 200);
  let x = useCallback(e => {
    setSearchQuery(e);
  }, [setSearchQuery]);
  let m = useRef(null);
  useEffect(() => {
    setQuery(u);
  }, [u, setQuery]);
  useEffect(() => {
    l = s;
  }, [s]);
  useEffect(() => {
    m.current?.scrollToTop();
  }, [s]);
  return jsxs(kx, {
    setPreviewResource,
    setSelectedCategory: d,
    searchQuery,
    children: [s ? jsx('div', {
      className: 'x178xt8z x1y0btm7 x7z60cl',
      children: jsx(_$$W5, {
        title: s.title,
        goBack: () => {
          d(void 0);
        },
        layoutOverride: _$$rp.THIN_2_COL,
        includeBorderBottom: !1,
        titleFontSize: cw.headerTextOverride,
        children: jsx(_$$$6, {
          libraryKey: _$$l(s.id),
          showAuthor: !1
        })
      })
    }) : jsx('div', {
      className: 'xbk38c5 xso031l x1y0btm7 x7z60cl',
      children: jsx(_$$e, {
        location: 'leftRail',
        searchQuery,
        placeholder: getI18nString('cooper.inline_menu.search_for_library'),
        onChange: x,
        clearSearch: () => x('')
      })
    }), jsx(_$$P, {
      ref: m,
      children: s ? jsx(Fragment, {
        children: jsx(_$$uU, {
          selectedLibrary: s,
          setSelectedLibrary: d,
          layoutOverride: _$$rp.THIN_2_COL,
          positionerRef: e,
          showName: !0,
          includeTopPadding: !1,
          shouldHideTooltip: !0
        })
      }) : jsx('div', {
        'className': 'x1lliihq',
        'data-not-draggable': !0,
        'children': jsx(FN, {
          addLibraryButtonType: 'small',
          hideRecentsIfEmpty: !0,
          isResponsive: !0,
          layoutOverride: _$$rp.THIN_2_COL,
          positionerRef: e,
          query: searchQuery,
          recentlyUsedItemsKey: FDocumentType.Cooper,
          recentsLayoutOverride: _$$rp.THIN_3_COL,
          showLocalComponents: !1,
          showOrgLibraryLoadingState: !1,
          toggleLibraryModalType: 'editor'
        })
      })
    })]
  });
}
function cP(e, t, n) {
  e.forEach(e => {
    n && CooperHelpers?.centerNodeInCooperFrame(e);
    CooperHelpers?.detachInstanceAndRemoveFrame(e);
  });
}
function cO(e) {
  return e.sort((e, t) => e.name.localeCompare(t.name)).map(e => ({
    ...e,
    name: e.name.replace(/^\d+\s+/, '')
  }));
}
let cF = {
  itemContainer: {
    display: 'x78zum5',
    $$css: !0
  },
  invertedItemContainer: {
    filter: 'x1dftt0s',
    $$css: !0
  }
};
function cB({
  item: e,
  height: t = 64,
  width: n = 64,
  sourceForTracking: l,
  noCenter: r = !1,
  shouldInvertThumbnailColor: i = !1,
  shouldHideTooltip: a = !1,
  tooltipOverride: s,
  thumbPaddingGrid: d
}) {
  return jsx('div', {
    className: 'x1v8gsql x19y5rnk',
    children: jsx('div', {
      ..._$$xk(cF.itemContainer, i ? cF.invertedItemContainer : {}),
      children: jsx(_$$lX, {
        buttonProps: {
          clickToInsert: !0
        },
        draggable: {
          sourceForTracking: l,
          insertionCallback: cP
        },
        height: t,
        isCooper: !0,
        isFigJam: !1,
        isSearch: !1,
        isSlides: !1,
        item: e,
        itemPadding: 0,
        noBackground: !0,
        noCenter: r,
        shouldHideDescription: !0,
        shouldHideTooltip: a,
        shouldShowNamePopout: !0,
        shouldShowShadowOnHover: !0,
        showName: !1,
        thumbPaddingGrid: d,
        tooltipOverride: s,
        useSmartPositioning: !0,
        width: n
      })
    })
  });
}
let cD = {
  shapesContainer: {
    padding: 'xi4r6k5',
    boxSizing: 'x9f619',
    display: 'xrvj5dj',
    justifyItems: 'x1o2pa38',
    gridTemplateColumns: 'x1wlfl8j',
    gap: 'x1nfngrj',
    opacity: 'x1hc1fzr',
    transition: 'x19n8f2o',
    $$css: !0
  },
  shapesHidden: {
    visibility: 'xlshs6z',
    opacity: 'xg01cxk',
    $$css: !0
  }
};
function c$({
  shapes: e,
  positionerRef: t
}) {
  let [n, l] = useState(0);
  let [r, i] = useState(!1);
  useEffect(() => {
    if (!r || !t) return;
    let e = new ResizeObserver(e => {
      for (let t of e) l(t.contentRect.width);
    });
    e.observe(t.current);
    return () => {
      e && e.disconnect();
    };
  }, [r, t]);
  useEffect(() => {
    i(!0);
  }, []);
  let s = t ? (n - 48) / 3 : 64;
  return e.length === 0 ? null : jsx('div', {
    ...Ay.props(cD.shapesContainer, n === 0 && cD.shapesHidden),
    children: e.map((e, t) => jsx(cB, {
      item: e,
      sourceForTracking: 'cooper_shapes_panel',
      width: s,
      height: s,
      shouldHideTooltip: !0
    }, t))
  });
}
let cV = {
  sectionHeader: {
    ..._$$g2.textBodyMediumStrong,
    color: 'x1akne3o',
    $$css: !0
  },
  shapesSectionHeader: {
    padding: 'x1hslx8c',
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
  objectsSectionHeader: {
    padding: 'x1p3osf5',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: !0
  }
};
function cG({
  positionerRef: e,
  searchQuery: t,
  debouncedSearchQuery: n
}) {
  let {
    setPreviewResource
  } = Rz();
  let {
    setQuery
  } = _$$I2(Cn.FigJam);
  let i = bW();
  useEffect(() => {
    setQuery(n);
  }, [n, setQuery]);
  let s = useMemo(() => t ? cO(i.filter(e => e.name.toLowerCase().includes(t.toLowerCase()))) : cO(i), [i, t]);
  return jsx(_$$P, {
    children: jsxs('div', {
      className: 'x78zum5 xdt5ytf',
      children: [s.length > 0 && jsxs(Fragment, {
        children: [jsx(cU, {
          label: getI18nString('cooper.left_rail.shapes'),
          paddingStyle: cV.shapesSectionHeader
        }), jsx(c$, {
          shapes: s,
          positionerRef: e
        })]
      }), jsx(cU, {
        label: getI18nString('cooper.left_rail.objects'),
        paddingStyle: cV.objectsSectionHeader
      }), jsx('div', {
        'className': 'x1lliihq',
        'data-not-draggable': !0,
        'children': jsx(kx, {
          setPreviewResource,
          setSelectedCategory: _$$lQ,
          searchQuery: t,
          children: jsx(FN, {
            addLibraryButtonType: 'small',
            hideRecentsIfEmpty: !0,
            isResponsive: !0,
            layoutOverride: _$$rp.THIN_2_COL,
            positionerRef: e,
            query: t,
            recentlyUsedItemsKey: FDocumentType.Cooper,
            recentsLayoutOverride: _$$rp.THIN_3_COL,
            showLocalComponents: !1,
            showOrgLibraryLoadingState: !1,
            toggleLibraryModalType: 'editor'
          })
        })
      })]
    })
  });
}
function cU({
  label: e,
  paddingStyle: t
}) {
  return jsx('div', {
    ...Ay.props(cV.sectionHeader, t),
    children: e
  });
}
let cK = createReduxSubscriptionAtomWithState(e => e.universalInsertModal);
let cW = {
  headerTextOverride: {
    ..._$$g2.textBodyMediumStrong,
    $$css: !0
  }
};
function cH({
  positionerRef: e
}) {
  let {
    searchQuery,
    setSearchQuery
  } = Rz();
  let [l] = useDebounce(searchQuery, 200);
  let r = useCallback(e => {
    setSearchQuery(e.trim());
  }, [setSearchQuery]);
  let [i, s, d] = _$$t5.useTabs({
    objects: !0,
    shapes: !0
  });
  return jsxs(Fragment, {
    children: [jsxs('div', {
      className: 'xnnrejo xso031l x1y0btm7 x7z60cl',
      children: [jsx('div', {
        className: 'x1l8tcv',
        children: jsx(_$$e, {
          location: 'leftRail',
          searchQuery,
          placeholder: getI18nString('cooper.inline_menu.search_shapes_and_libraries'),
          onChange: r,
          clearSearch: () => r('')
        })
      }), !searchQuery && jsx('div', {
        className: 'x77yl0c',
        children: jsxs(_$$t5.TabStrip, {
          manager: d,
          children: [jsx(_$$t5.Tab, {
            ...i.objects,
            children: getI18nString('cooper.left_rail.objects')
          }), jsx(_$$t5.Tab, {
            ...i.shapes,
            children: getI18nString('cooper.left_rail.shapes')
          })]
        })
      })]
    }), searchQuery ? jsx(cG, {
      positionerRef: e,
      searchQuery,
      debouncedSearchQuery: l
    }) : jsxs(Fragment, {
      children: [jsx(_$$t5.TabPanel, {
        ...s.objects,
        children: jsx(cX, {
          positionerRef: e
        })
      }), jsx(_$$t5.TabPanel, {
        ...s.shapes,
        children: jsx(cY, {
          positionerRef: e
        })
      })]
    })]
  });
}
function cX({
  positionerRef: e
}) {
  let {
    setPreviewResource
  } = Rz();
  let n = useAtomWithSubscription(cK);
  let [l, i] = useState(n.initialSelectedCategory ?? r);
  let s = useRef(null);
  useEffect(() => {
    r = l;
  }, [l]);
  useEffect(() => {
    s.current?.scrollToTop();
  }, [l]);
  return jsxs(kx, {
    setPreviewResource,
    setSelectedCategory: i,
    searchQuery: '',
    children: [l && jsx('div', {
      className: 'x178xt8z x1y0btm7 x7z60cl',
      children: jsx(_$$W5, {
        title: l.title,
        goBack: () => {
          i(void 0);
        },
        layoutOverride: _$$rp.THIN_2_COL,
        includeBorderBottom: !1,
        titleFontSize: cW.headerTextOverride,
        children: jsx(_$$$6, {
          libraryKey: _$$l(l.id),
          showAuthor: !1
        })
      })
    }), jsx(_$$P, {
      ref: s,
      children: l ? jsx(_$$uU, {
        selectedLibrary: l,
        setSelectedLibrary: i,
        layoutOverride: _$$rp.THIN_2_COL,
        positionerRef: e,
        showName: !0,
        includeTopPadding: !1,
        shouldHideTooltip: !0
      }) : jsx('div', {
        'className': 'x1lliihq',
        'data-not-draggable': !0,
        'children': jsx(FN, {
          addLibraryButtonType: 'small',
          hideRecentsIfEmpty: !0,
          isResponsive: !0,
          layoutOverride: _$$rp.THIN_2_COL,
          positionerRef: e,
          query: '',
          recentlyUsedItemsKey: FDocumentType.Cooper,
          recentsLayoutOverride: _$$rp.THIN_3_COL,
          showLocalComponents: !1,
          showOrgLibraryLoadingState: !1,
          toggleLibraryModalType: 'editor'
        })
      })
    })]
  });
}
function cY({
  positionerRef: e
}) {
  let t = bW();
  let n = useMemo(() => cO(t), [t]);
  return jsx(_$$P, {
    children: jsx(c$, {
      shapes: n,
      positionerRef: e
    })
  });
}
let cq = {
  container: {
    padding: 'xi4r6k5',
    borderTop: 'xdyg6lv',
    boxSizing: 'x9f619',
    display: 'xrvj5dj',
    justifyItems: 'x1o2pa38',
    gridTemplateColumns: 'x1wlfl8j',
    gap: 'x1nfngrj',
    opacity: 'x1hc1fzr',
    transition: 'x19n8f2o',
    $$css: !0
  },
  hidden: {
    visibility: 'xlshs6z',
    opacity: 'xg01cxk',
    $$css: !0
  }
};
function cJ({
  positionerRef: e
}) {
  let t = bW();
  let [n, l] = useState(0);
  let [r, i] = useState(!1);
  let s = useMemo(() => {
    let e = t.sort((e, t) => e.name.localeCompare(t.name));
    e.forEach(e => {
      e.name = e.name.replace(/^\d+\s+/, '');
    });
    return e;
  }, [t]);
  useEffect(() => {
    if (!r || !e) return;
    let t = new ResizeObserver(e => {
      for (let t of e) l(t.contentRect.width);
    });
    t.observe(e.current);
    return () => {
      t && t.disconnect();
    };
  }, [r, e]);
  useEffect(() => {
    i(!0);
  }, []);
  let d = e ? (n - 48) / 3 : 64;
  return jsx(_$$P, {
    children: jsx('div', {
      ...Ay.props(cq.container, n === 0 && cq.hidden),
      children: s.map((e, t) => jsx(cB, {
        item: e,
        sourceForTracking: 'cooper_shapes_panel',
        width: d,
        height: d,
        shouldHideTooltip: !0
      }, t))
    })
  });
}
let cZ = {
  fontCombinationsHeader: {
    ..._$$g2.textBodyMediumStrong,
    color: 'x1akne3o',
    paddingTop: 'x1w4f5ud',
    paddingBottom: 'xdmjnt8',
    paddingRight: 'x1jwbysl',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    textAlign: 'xdpxx8g',
    justifySelf: 'x1lqcxt8',
    $$css: !0
  }
};
let c0 = [{
  names: {
    Title: getI18nString('cooper.text_panel.text_style.title')
  },
  key: 'title'
}, {
  names: {
    Headline: getI18nString('cooper.text_panel.text_style.headline')
  },
  key: 'headline'
}, {
  names: {
    Subheadline: getI18nString('cooper.text_panel.text_style.subheadline')
  },
  key: 'subheadline'
}, {
  names: {
    'Body text': getI18nString('cooper.text_panel.text_style.body_text')
  },
  key: 'normal text'
}];
function c1({
  positionerRef: e
}) {
  let t = Oj();
  let n = useMemo(() => {
    let e = c0.map(e => Object.keys(e.names)).flat();
    let n = t.filter(t => !e.includes(t.name)).sort((e, t) => e.name.localeCompare(t.name));
    n.forEach(e => {
      e.name = e.name.replace(/^\d+\s+/, '');
    });
    return n;
  }, [t]);
  let [l, r] = useState(_$$nJ);
  let [i, s] = useState(!1);
  useEffect(() => {
    if (!i || !e) return;
    let t = new ResizeObserver(e => {
      for (let t of e) r(t.contentRect.width - 32);
    });
    t.observe(e.current);
    return () => {
      t && t.disconnect();
    };
  }, [i, e]);
  useEffect(() => {
    s(!0);
  }, []);
  let d = e ? (l - 8) / 2 : 100;
  let c = t.find(e => e.name === 'Body text');
  let u = getVisibleTheme() === 'dark';
  return jsxs(Fragment, {
    children: [c && jsx(c5, {
      item: c
    }), jsx(_$$P, {
      children: jsxs('div', {
        className: 'x1o2pa38 x1gcgh60 x1jwbysl',
        children: [jsx('div', {
          className: 'x78zum5 xdt5ytf x1nfngrj x1w4f5ud',
          children: c0.map(e => {
            let n = t.find(t => Object.keys(e.names).includes(t.name));
            return n && jsx(cB, {
              item: n,
              height: 46,
              width: l,
              sourceForTracking: 'cooper_text_panel',
              noCenter: !0,
              shouldInvertThumbnailColor: u,
              tooltipOverride: e.names[n.name],
              thumbPaddingGrid: 24
            }, e.key);
          })
        }), jsx('div', {
          ...Ay.props(cZ.fontCombinationsHeader),
          children: getI18nString('cooper.inserts.font_combinations')
        }), jsx('div', {
          className: 'xrvj5dj x9f619 x1p9eum2 x1nfngrj x7oc15f',
          children: n.map((e, t) => jsx(cB, {
            item: e,
            height: d,
            width: d,
            shouldHideTooltip: !0,
            sourceForTracking: 'cooper_text_panel'
          }, t))
        })]
      })
    })]
  });
}
function c5({
  item: e
}) {
  let {
    onInsertableResourcePointerDown
  } = _$$j3({
    resource: e,
    isList: !1,
    sourceForTracking: 'cooper_text_panel',
    clickToInsert_DEPRECATED: !0,
    insertionCallback: cP,
    useSmartPositioning: !0
  });
  let n = _$$nc.user('insert-cooper-text', onInsertableResourcePointerDown);
  return jsx('div', {
    'className': 'xh8yej3 x78zum5 x1gcgh60 x1jwbysl x1vamu9a xso031l x1y0btm7 x7z60cl x9f619',
    'data-element-target': 'cooper-inserts-default-text-box',
    'children': jsx(ButtonWide, {
      variant: 'secondary',
      onClick: n,
      actionOnPointerDown: !0,
      children: jsxs('span', {
        className: 'x78zum5 xl56j7k x6s0dn4',
        children: [jsx(_$$e8, {}), getI18nString('cooper.inserts.default_text_box')]
      })
    })
  });
}
let ur = [0.15, 1, 0.4, 1];
let ui = [0.4, 0.1, 0.2, 1];
function uu({
  positionerRef: e
}) {
  let t = _$$GQ();
  let [n, l] = useAtomValueAndSetter(assetCategoryAtom);
  let r = getObservableValue(AppStateTsApi?.interopToolMode(), SelfDesignType.SELF);
  let i = useSelector(e => e.mirror.sceneGraphSelection);
  let c = r === SelfDesignType.DESIGN && Object.keys(i).length > 0;
  let u = useSelectedCooperFrameId();
  let [x, m] = useState(340);
  let [h, g] = useState(!0);
  let f = h && c;
  let b = e.current?.clientHeight || window.innerHeight;
  let j = useSelector(e => !e.mirror.appModel.isReadOnly);
  let y = Xr(U_);
  let E = Xr(Lm);
  let v = useSelectedComponentLibraryKey();
  let T = useCallback(() => {
    v ? (y('INTERNAL'), E({
      type: mF.TEMPLATES,
      libraryKey: v,
      parentView: {
        type: mF.ALL
      }
    }), l(AssetCategoryEnum.TEMPLATES)) : (l(AssetCategoryEnum.TEMPLATES), y('COMMUNITY'));
  }, [l, y, v, E]);
  return jsxs(Fragment, {
    children: [j && jsx(() => {
      let e = jL();
      return jsx('div', {
        className: 'x78zum5 xh8yej3 xctdprf x1n5zjp5 x9f619',
        children: jsxs('div', {
          'className': cssBuilderInstance.wFull.h24.flex.justifyCenter.$,
          'data-element-target': 'left-panel-add-template-button',
          'children': [jsxs(RecordableButton, {
            'className': 'x78zum5 x6s0dn4 xxk0z11 x16v0e3u x1bamp8i xl56j7k xq5q4zq x1iyjqo2 xy5cce4 xgfja2r xda6en0',
            'onClick': T,
            'recordingKey': 'addTemplateButton',
            'data-fullscreen-intercept': !0,
            'data-testid': 'addTemplateButton',
            'aria-label': getI18nString('cooper.templates.new_asset_alt'),
            'children': [jsx(_$$n6, {}), jsx('p', {
              children: getI18nString('cooper.templates.new_asset_alt')
            })]
          }), jsx(RecordableButton, {
            'className': 'x78zum5 x6s0dn4 xxk0z11 x16v0e3u x1bamp8i xl56j7k xq5q4zq xww3pen xvy4d1p x1717udv',
            'onClick': e,
            'recordingKey': 'addTemplateButtonPlus',
            'aria-label': getI18nString('cooper.templates.new_blank_asset'),
            'data-fullscreen-intercept': !0,
            'children': jsx(_$$e9, {})
          })]
        })
      });
    }, {}), jsx(wV, {
      size: b - (c ? x + 1 : 1),
      side: 'bottom',
      onResize: e => m(b - e),
      disableResizing: !f,
      unsetSizeWhenDisabled: !0,
      className: cssBuilderInstance.relative.flex.flexColumn.$$if(!f, cssBuilderInstance.flex1.overflowHidden).$,
      children: jsx(_$$G2, {})
    }), c && u && jsx(Hg, {
      isLayersPanelExpanded: h,
      onToggleExpanded: () => g(e => !e),
      constrainedSidebarWidth: t,
      guid: u
    })]
  });
}
function ux({
  animationStatus: e
}) {
  let t = getSidebarSplitPosition();
  let n = t + _$$_4;
  let l = useRef(null);
  let r = U1();
  let i = useCallback(t => {
    _$$cZ(l, t);
    r(e === 'visible' ? t : null);
  }, [r, e]);
  return jsx(_$$N3, {
    children: jsx(_$$P6.div, {
      variants: {
        fullyHidden: {
          translateX: `-${t}px`,
          opacity: 0
        },
        hiding: {
          translateX: `-${t}px`,
          opacity: 1,
          transition: {
            duration: 0.35,
            ease: ui
          }
        },
        visible: {
          translateX: 0,
          opacity: 1,
          transition: {
            duration: 0.35,
            ease: ur
          }
        }
      },
      initial: 'fullyHidden',
      animate: e,
      exit: 'hidden',
      className: 'x1v8gsql xspf3my xixxii4 x5yr21d xni59qk x78zum5 xdt5ytf x1v7j62i x8knxv4',
      style: {
        left: n
      },
      children: jsxs('div', {
        className: 'x5yr21d',
        ref: i,
        children: [jsx('div', {
          className: 'x1yr13c1 x13vifvy',
          children: jsx(up, {})
        }), jsx(_$$G2, {
          showRowDivider: !0,
          hideRows: !0,
          showRowNumber: !1,
          smallSquares: !0,
          collapsedStatesDisabled: !0
        })]
      })
    })
  });
}
function up() {
  let e = jL();
  return jsx(RecordableButton, {
    'className': 'x16v0e3u x1sxf85j x1useyqa xsdox4t x78zum5 xl56j7k x6s0dn4 xehbxol x1hlb6i2 xq5q4zq',
    'onClick': e,
    'aria-label': getI18nString('cooper.templates.new_blank_asset'),
    'recordingKey': 'addNewAssetButton',
    'data-fullscreen-intercept': !0,
    'children': jsx(_$$x2, {})
  });
}
function ug({
  panelClassName: e,
  children: t,
  hideBorderBottom: n,
  dataTestId: l
}) {
  return jsx('div', {
    'className': em()('cooper_panel--panel--XgbxY', {
      'cooper_panel--withBorderBottom--mzdCw': !n
    }, e),
    'data-non-interactive': !0,
    'data-testid': l,
    'children': t
  });
}
let uj = u_;
let uT = `IMAGE_NOT_LOADED${YB}`;
function uI({
  onImportSuccess: e,
  onImportFailure: t
}) {
  let [n, l] = useState(!1);
  let r = useCallback(e => {
    l(!1);
    t(e);
  }, [t]);
  let i = useCallback((t, n) => {
    l(!1);
    e(t, n);
  }, [e]);
  let d = function ({
    onImportFailure: e
  }) {
    let t = useDispatch();
    return useCallback(n => {
      e(n);
      t(VisualBellActions.enqueue({
        message: n,
        error: !0
      }));
    }, [t, e]);
  }({
    onImportFailure: r
  });
  let c = function ({
    onImportSuccess: e,
    importFileError: t
  }) {
    let n = Xr(_$$v2);
    return useCallback(l => {
      if (l.type === 'text/csv') {
        uj().parse(l, {
          header: !1,
          dynamicTyping: !1,
          skipEmptyLines: !0,
          complete: t => {
            e(t.data[0] || [], t.data.slice(1));
          },
          error: () => {
            t(getI18nString('buzz.bulk_create.import.failure'));
          }
        });
      } else if (l.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        let r = new FileReader();
        r.onload = l => {
          _$$jL().then(r => {
            let i = l.target?.result;
            new r.Workbook().xlsx.load(i).then(l => {
              let r = l.getWorksheet(1);
              if (!r) {
                t(getI18nString('buzz.bulk_create.import.failure'));
                return;
              }
              let i = {};
              let o = {};
              let a = r.getImages();
              for (let e = 0; e < a.length; e++) {
                let t = a[e];
                if (!t) continue;
                let n = l.model.media[parseInt(t.imageId)];
                if (n) {
                  let e = t.range.tl.nativeRow + 1;
                  let l = t.range.tl.nativeCol + 1;
                  let r = jZ(e, l);
                  if (e < _$$c7) {
                    let e = DG(n);
                    i[r] = e;
                  } else {
                    i[r] = uT + r;
                    n && (o[r] = n);
                  }
                }
              }
              let s = [];
              r.rowCount > 0 && r.getRow(1).eachCell({
                includeEmpty: !0
              }, e => {
                s.push(e.value?.toString() || '');
              });
              let d = [];
              let c = 0;
              let u = 0;
              r.eachRow((e, t) => {
                if (t === 1) return;
                let n = [];
                let l = !1;
                let r = !1;
                for (let a = 1; a <= s.length; a++) {
                  let s = e.getCell(a);
                  let d = s.richMedia();
                  let x = jZ(t, a);
                  let p = i[x];
                  let m = s.value && s.value.toString().trim().length > 0;
                  if (!m && u < _$$c7) {
                    let e = o[x];
                    if (e) {
                      let t = DG(e);
                      i[x] = t;
                      p = t;
                      l = !0;
                    }
                  }
                  if (p) {
                    n.push(p);
                  } else if (d) {
                    c < _$$c7 ? (n.push(DG(d)), m || (r = !0)) : (i[x] = uT + x, o[x] = d, n.push(uT + x));
                  } else {
                    let e = s.value || '';
                    n.push(e.toString());
                  }
                }
                l && u++;
                r && c++;
                d.push(n);
              });
              n(e => ({
                ...e,
                ...o
              }));
              e(s, d);
            }).catch(e => {
              console.error('Error loading Excel file:', e);
              t(getI18nString('buzz.bulk_create.import.failure'));
            });
          });
        };
        r.readAsArrayBuffer(l);
      }
    }, [e, t, n]);
  }({
    onImportSuccess: i,
    importFileError: d
  });
  let u = function ({
    setIsLoading: e,
    importFileError: t,
    importLocalFile: n
  }) {
    return useCallback(() => {
      let l = document.createElement('input');
      function r() {
        e(!1);
        l.remove();
      }
      l.type = 'file';
      l.multiple = !1;
      l.accept = '.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      l.style.display = 'none';
      l.onblur = r;
      l.oncancel = r;
      l.onchange = r => {
        e(!0);
        let i = r.target?.files;
        let o = i?.[0];
        o ? n(o) : t(getI18nString('buzz.bulk_create.import.no_valid_file'));
        l.remove();
      };
      document.body.appendChild(l);
      l.click();
    }, [t, n, e]);
  }({
    setIsLoading: l,
    importFileError: d,
    importLocalFile: c
  });
  return jsx(ButtonWide, {
    disabled: n,
    variant: 'primary',
    onClick: u,
    recordingKey: 'buzzBulkCreateUploadButton',
    children: jsx('div', {
      'className': 'x78zum5 xl56j7k x6s0dn4 xh8yej3',
      'data-testid': 'buzzBulkCreateChooseFile',
      'children': n ? jsx(_$$k7, {}) : getI18nString('buzz.bulk_create.import.button_text')
    })
  });
}
function uS({
  onUploadCsvClick: e
}) {
  let t = trackFileEventWithStore();
  let n = useCallback(e => {
    t('buzz_bulk_create_upload_failure', {
      productType: 'buzz',
      error: e
    });
  }, [t]);
  return jsxs('div', {
    className: 'x78zum5 xdt5ytf x5yr21d x6s0dn4 xbj06nx x1gcgh60 x1jwbysl',
    children: [jsx('div', {
      className: 'x1ghs5zp x1aue78i x19y5rnk x78zum5 xfawy5m x6s0dn4 x167g77z',
      children: jsx(_$$s7, {})
    }), jsx('div', {
      className: 'x1w7y96w'
    }), jsx('div', {
      ...Ay.props(uk.addDataTitle),
      children: getI18nString('buzz.bulk_create.add_data_header')
    }), jsx('div', {
      ...Ay.props(uk.addDataInstructions),
      children: getI18nString('buzz.bulk_create.add_data_instructions')
    }), jsx('div', {
      className: 'x1w7y96w'
    }), jsx(uI, {
      onImportSuccess: e,
      onImportFailure: n
    }), jsx('div', {
      ...Ay.props(uk.addDataDescription),
      children: getI18nString('buzz.bulk_create.import.supported_file_types')
    })]
  });
}
let uk = {
  addDataTitle: {
    marginBottom: 'x1ah0xmj',
    textAlign: 'x2b8uid',
    ..._$$g2.textBodyMediumStrong,
    $$css: !0
  },
  addDataInstructions: {
    color: 'x1n0bwc9',
    textAlign: 'x2b8uid',
    ..._$$g2.textBodyMedium,
    $$css: !0
  },
  addDataDescription: {
    marginTop: 'x7hzu26',
    color: 'x1n0bwc9',
    textAlign: 'x2b8uid',
    ..._$$g2.textBodyMedium,
    $$css: !0
  }
};
let uA = memo(e => {
  return _$$O4() ? jsx('svg', {
    width: '16',
    height: '16',
    fill: 'none',
    viewBox: '0 0 16 16',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M4.5 10.5a2.5 2.5 0 1 1 2.45-3h2.1a2.5 2.5 0 1 1 0 1h-2.1a2.5 2.5 0 0 1-2.45 2m0-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M10 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0',
      clipRule: 'evenodd'
    })
  }) : jsx('svg', {
    width: '16',
    height: '16',
    fill: 'none',
    viewBox: '0 0 16 16',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M4.5 10a2.5 2.5 0 1 1 2.45-3h2.1a2.5 2.5 0 1 1 0 1h-2.1a2.5 2.5 0 0 1-2.45 2m0-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M10 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0',
      clipRule: 'evenodd'
    })
  });
});
function uR({
  guid: e,
  pillText: t,
  onClickActionLabel: n,
  onClickAction: l,
  leadingIcon: r,
  trailingIcon: i
}) {
  let a = useSceneGraphSelector().get(e);
  let s = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  if (!a || !s) return null;
  let d = a.absoluteBoundingBox;
  let c = {};
  let u = scaleRect(s, {
    x: d.x,
    y: d.y,
    width: d.w,
    height: d.h
  });
  c.left = u.x + s.x + u.width / 2;
  c.top = u.y + s.y + u.height;
  return createPortal(jsx('span', {
    className: Dm,
    children: jsx('div', {
      className: 'x10l6tqk x78zum5',
      style: {
        ...c,
        marginTop: 8,
        position: 'absolute',
        transform: 'translateX(-50%)'
      },
      children: jsxs('div', {
        className: 'x3nfvp2 xilkfi8 x6s0dn4 xg2d0mh x19y5rnk x131gfan xrvlha3',
        children: [jsxs('div', {
          className: 'x78zum5 x6s0dn4 x195vfkc',
          children: [jsx('span', {
            className: 'xwa2v1s',
            children: r
          }), jsx('span', {
            ..._$$xk(uw.pillText),
            children: t
          })]
        }), i && n && l && jsxs('div', {
          className: 'x78zum5 x6s0dn4',
          children: [jsx('div', {
            className: 'x1i1rx1s xkh2ocl xadz4q5'
          }), jsx('div', {
            className: 'x19phtnz xw4jnvo x78zum5 x6s0dn4 xl56j7k',
            children: jsx(IconButton, {
              'aria-label': n,
              'onClick': l,
              'children': jsx('span', {
                className: 'xwa2v1s',
                children: i
              })
            })
          })]
        })]
      })
    })
  }), document.getElementById('fullscreen-root'));
}
let uw = {
  pillText: {
    color: 'x1tk3asg',
    ..._$$g2.textBodyMedium,
    $$css: !0
  }
};
function uL({
  mappings: e,
  removeMapping: t
}) {
  let n = useIsCooperBulkCreateMode();
  let l = useMemo(() => {
    let t = {};
    Object.entries(e).forEach(([e, n]) => {
      n.forEach(n => {
        t[n] = e;
      });
    });
    return t;
  }, [e]);
  return n ? jsx(Fragment, {
    children: Object.entries(l).map(([e, n]) => jsx(uR, {
      guid: e,
      pillText: n,
      onClickActionLabel: getI18nString('buzz.bulk_create.remove_binding_badge_aria_label'),
      onClickAction: () => t(e, n),
      leadingIcon: jsx(uA, {}),
      trailingIcon: jsx(_$$w2, {})
    }, e))
  }) : null;
}
var uO = (e => (e[e.SELECT_FILE = 0] = 'SELECT_FILE', e[e.MAP_DATA = 1] = 'MAP_DATA', e))(uO || {});
let uM = setupRemovableAtomFamily(() => atom(0));
function uF() {
  let [e, t] = useAtomValueAndSetter(uM);
  let n = Xr(assetCategoryAtom);
  let [l, r] = useAtomValueAndSetter(_$$v);
  let [i, s] = useState({});
  let c = useSceneGraphSelector();
  let u = trackFileEventWithStore();
  _$$h5(() => {
    t(uO.SELECT_FILE);
    r({});
  });
  let x = useCallback((e, t) => {
    r(n => {
      let l = {
        ...n
      };
      l[t] && (l[t].$$delete(e), l[t].size === 0 && delete l[t]);
      return l;
    });
  }, [r]);
  useEffect(() => {
    let e = Object.values(l).flatMap(e => Array.from(e));
    let t = AppStateTsApi?.cooperState().bulkCreateConnectedNodes.getCopy() || [];
    AppStateTsApi?.cooperState().bulkCreateConnectedNodes.set(e);
    t.forEach(e => {
      let t = c.get(e);
      t && t.invalidateRenderTreeForSelfAndParents();
    });
  }, [l, c]);
  let p = useCallback((e, t) => {
    r(n => ({
      ...n,
      [e]: t
    }));
  }, [r]);
  let m = useCallback(e => Object.values(l).some(t => t.has(e)), [l]);
  let h = useCallback((e, n) => {
    s(e.reduce((e, t, l) => {
      let r = n.map(e => e[l]).filter(e => void 0 !== e);
      (t.trim().length > 0 || r.filter(e => e.trim().length > 0).length > 0) && (e[t] = r);
      return e;
    }, {}));
    t(uO.MAP_DATA);
  }, [t, s]);
  let g = useCallback(e => {
    u('buzz_bulk_create_success', {
      productType: 'buzz',
      numInserts: e
    });
    t(uO.SELECT_FILE);
    s({});
    r({});
    n(AssetCategoryEnum.ASSETS);
  }, [n, r, t, u]);
  return jsxs('div', {
    className: 'x5yr21d xh8yej3 x78zum5 xdt5ytf',
    children: [e === uO.SELECT_FILE && jsx(uS, {
      onUploadCsvClick: h
    }), e === uO.MAP_DATA && jsxs(Fragment, {
      children: [jsx(_$$p4, {
        children: jsx(AP, {
          hasMappings: !!Object.keys(l).length
        })
      }), jsx(uL, {
        mappings: l,
        removeMapping: x
      }), jsx(uB, {}), jsx(_$$P, {
        children: jsx('div', {
          className: 'x78zum5 xdt5ytf x1odjw0f x6ikm8r',
          children: jsx(ug, {
            hideBorderBottom: !0,
            children: jsxs('div', {
              className: 'x78zum5 xdt5ytf x1w4f5ud x1gcgh60 x1jwbysl x1nfngrj',
              children: [jsx(_$$mA, {}), Object.entries(i).map(([e, t], n) => jsx(_$$cH, {
                fieldName: e,
                data: Array.from(t),
                isGuidMapped: m,
                fieldBlockClickCallback: p,
                initialMappedGuids: l[e] ? Array.from(l[e]) : [],
                numFieldsMapped: Object.keys(l).length
              }, n))]
            })
          })
        })
      }), jsx(UB, {
        mappings: l,
        importData: i,
        onCreateFinished: g
      })]
    })]
  });
}
function uB() {
  let e = useSceneGraphSelector();
  let t = useAtomWithSubscription(assetCategoryAtom);
  let n = useRef(t);
  let l = useCallback(() => {
    CooperHelpers?.setBulkCreateEditMode();
  }, []);
  let r = useCallback(() => {
    (AppStateTsApi?.cooperState().bulkCreateConnectedNodes.getCopy() || []).forEach(t => {
      let n = e.get(t);
      n && n.invalidateRenderTreeForSelfAndParents();
    });
    CooperHelpers?.setBuzzEditMode();
  }, [e]);
  _$$h5(() => (l(), () => {
    r();
  }));
  useEffect(() => {
    n.current !== AssetCategoryEnum.BULK_CREATE && t === AssetCategoryEnum.BULK_CREATE && l();
    n.current === AssetCategoryEnum.BULK_CREATE && t !== AssetCategoryEnum.BULK_CREATE && r();
    n.current = t;
  }, [t, l, r]);
  return null;
}
function uK() {
  let {
    setCurrentView,
    currentPluginView
  } = function () {
    let e = Xr(hO);
    let [t, n] = useAtomValueAndSetter(zM);
    let l = AY(zM);
    let r = useCallback(() => {
      e(t);
    }, [t, e]);
    let i = useCallback(({
      newView: e
    }) => {
      e && t !== e && (r(), n(e));
    }, [t, n, r]);
    useEffect(() => {
      r();
    }, [r]);
    useEffect(() => () => {
      l();
    }, [l]);
    return useMemo(() => ({
      currentPluginView: t,
      setCurrentView: i
    }), [t, i]);
  }();
  let n = useDispatch();
  let l = useMemo(() => ({
    activeTab: _$$s8.PLUGIN,
    viewResource: e => {
      n(IN({
        fdPreviewResource: e
      }));
    },
    closeResource: () => {
      n(IN({
        fdPreviewResource: void 0
      }));
    },
    setCurrentViewOrTab: setCurrentView,
    currentView: currentPluginView,
    closeModal: () => {},
    pinModal: () => {}
  }), [n, setCurrentView, currentPluginView]);
  return jsx(AutoLayout, {
    direction: 'vertical',
    spacing: 0,
    height: 'fill-parent',
    children: jsx(B0.Provider, {
      value: l,
      children: jsx(_$$z7, {})
    })
  });
}
function uW() {
  let e = useAtomWithSubscription(_$$d4);
  let t = useAtomWithSubscription(FP);
  return e === 'RUNNING' && t === _$$Wh.BUZZ_LEFT_PANEL;
}
function uH({
  panelWidth: e
}) {
  let t = useAtomWithSubscription(_$$d4) === 'LOADING';
  let n = uW();
  let l = useDispatch();
  useEffect(() => {
    l(_$$aq());
  }, [l]);
  useEffect(() => {
    let e = PluginUIManager.getInstance();
    n && e && e.hideProgress();
  }, [n]);
  return jsxs('div', {
    className: 'x78zum5 xdt5ytf x5yr21d xh8yej3',
    children: [t && jsx(uX, {}), jsx('div', {
      ..._$$xk(uY.iframeContainer, n && uY.iframeContainerVisible),
      'data-testid': 'cooperPluginPanelContainer',
      'children': jsx(useCachedSubtree, {
        isVisible: !0,
        children: () => jsx(_$$jv, {
          iframeId: _$$Wh.BUZZ_LEFT_PANEL,
          width: e,
          fillParent: !0
        })
      })
    }), !t && !n && jsx(uK, {})]
  });
}
function uX() {
  let e = useAtomWithSubscription(be);
  return e ? jsxs(AutoLayout, {
    direction: 'vertical',
    verticalAlignItems: 'center',
    horizontalAlignItems: 'center',
    children: [jsx('div', {
      className: 'x1afcbsf x1fuwyyc xuzhngd',
      children: jsx(_$$k7, {})
    }), jsx('div', {
      className: 'xuzqwsy xw9jctd x10134s8 x2b8uid',
      children: jsx(TextWithTruncation, {
        fontSize: 12,
        color: 'secondary',
        children: getI18nString('cooper.plugins.loading', {
          pluginName: e?.name
        })
      })
    })]
  }) : null;
}
let uY = {
  iframeContainer: {
    display: 'x1s85apg',
    $$css: !0
  },
  iframeContainerVisible: {
    display: 'x1lliihq',
    height: 'x5yr21d',
    width: 'xh8yej3',
    $$css: !0
  }
};
let u2 = {
  dragTarget: {
    position: 'x1n2onr6',
    height: 'x5yr21d',
    marginTop: 'x1gslohp',
    marginBottom: 'x12nagc',
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    justifyContent: 'xl56j7k',
    borderRadius: 'x19y5rnk',
    borderStyle: 'x1y0btm7',
    borderColor: 'x7z60cl',
    borderWidth: 'xmkeg23',
    boxSizing: 'x9f619',
    overflow: 'xb3r6kr',
    backgroundImage: 'xxbxv1e',
    backgroundRepeat: 'x182nak8',
    backgroundColor: 'x1yjdb4r',
    $$css: !0
  },
  dragTargetDragged: {
    borderColor: 'x1va2ikv',
    borderWidth: 'xdh2fpr',
    $$css: !0
  },
  dragTargetActive: {
    borderColor: 'x1va2ikv',
    $$css: !0
  }
};
function u4({
  guid: e,
  hideChooseMediaOverlay: t
}) {
  let [n, l] = useState(!1);
  let [r, i] = useState(!1);
  let [s, u] = useState(!1);
  let x = useRef(null);
  let m = useSceneGraphSelector();
  let h = Th();
  let g = trackFileEventWithStore();
  let f = hasJubileePermissionForDesign();
  let {
    togglePanel
  } = ew();
  let j = !!getFeatureFlags().buzz_video_export;
  let y = !!getFeatureFlags().buzz_unsplash;
  let {
    paint,
    paintIndex,
    isImage,
    isVideo,
    isMedia
  } = function (e, t) {
    let {
      mediaPaint,
      mediaPaintIndex
    } = useNodeMediaPaintById(t);
    let r = mediaPaint != null && isValidValue(mediaPaint);
    let i = r ? mediaPaint : void 0;
    let o = i?.type === 'IMAGE';
    let a = i?.type === 'VIDEO' && e;
    return {
      paint: i,
      paintIndex: r && mediaPaintIndex != null ? mediaPaintIndex : void 0,
      isImage: o,
      isVideo: a,
      isMedia: o || a
    };
  }(j, e);
  let A = sW(j, paintIndex, paint);
  if (!paint) return null;
  let z = () => {
    A();
    g('edit_template_field', {
      product_type: 'buzz',
      content_type: isVideo ? 'video' : 'image',
      field: m.get(e)?.name ?? e,
      is_multi_edit: !1,
      num_assets_edited: 1,
      library_key: h
    });
  };
  let N = Ay.props(u2.dragTarget, r && u2.dragTargetDragged, s && u2.dragTargetActive);
  return jsx(Ad, {
    label: null,
    appendedClassName: 'x1db2dqx x12nagc',
    input: jsxs(_$$Y3, {
      ...N,
      forwardedRef: x,
      isDragTarget: () => !0,
      onBlur: () => {
        u(!1);
      },
      onFocus: () => {
        replaceSelection([e]);
        u(!0);
      },
      onKeyDown: e => {
        switch (e.key) {
          case ' ':
          case 'Enter':
            z();
            e.preventDefault();
        }
      },
      onMouseEnter: () => l(!0),
      onMouseLeave: () => l(!1),
      onTargetDragEnter: () => i(!0),
      onTargetDragLeave: () => i(!1),
      onTargetDrop: t => {
        if (fullscreenValue.fileArrayToString) {
          replaceSelection([e]);
          let n = isValidValue(paint) ? paint : void 0;
          let l = fullscreenValue.fileArrayToString(Array.from(t.files));
          Fullscreen?.dropImageOnPaintThumbnail(n?.blendMode ?? 'NORMAL', n?.opacity ?? 1, l, paintIndex ?? 0, NodePropertyCategory.FILL);
          i(!1);
        }
      },
      role: 'button',
      tabIndex: 0,
      children: [isInvalidValue(paint) ? jsx('span', {
        children: getI18nString('common.mixed')
      }) : jsx(_$$i4, {
        dataTestId: 'cooperFieldsImageThumbnail',
        imagePaint: paint,
        width: 240,
        height: 100,
        forceUpdate: !1
      }), (n || s) && !t && isMedia && jsx('div', {
        className: 'x10l6tqk x13vifvy xu96u03 x3m8u43 x1ey2m1c x78zum5 x1a02dak xl56j7k x6s0dn4 xc26acl x167g77z x1yqky9x',
        children: jsxs(AutoInteractableWrapper, {
          name: 'cooper_media_upload',
          children: [isImage && jsx('div', {
            className: 'x19y5rnk x16v0e3u',
            children: jsx(IconButton, {
              'variant': 'secondary',
              'data-tooltip-show-above': !0,
              'aria-label': getI18nString('cooper.properties_panel.adjust_image'),
              'onClick': () => togglePanel(eC.ADJUST_IMAGE),
              'children': jsx(_$$A14, {})
            })
          }), f && isImage && jsx('div', {
            className: 'x19y5rnk x16v0e3u',
            children: jsx(sM, {
              trackingSource: 'buzz-fields-panel'
            })
          }), y ? jsx(sH, {
            paintIndex,
            paint,
            variant: 'fieldsPanel'
          }) : jsx(Button, {
            variant: 'primary',
            onClick: z,
            children: isVideo ? renderI18nText('cooper.properties_panel.choose_image_video') : renderI18nText('cooper.properties_panel.choose_media')
          })]
        })
      })]
    })
  });
}
var u9 = (e => (e.Content = 'content', e))(u9 || {});
function xe({
  name: e,
  value: t,
  onFocus: n,
  indexForTestId: l,
  isActive: r,
  onChange: i
}) {
  let s = isInvalidValue(t) ? getI18nString('design_systems.component_properties.mixed') : t;
  let d = useRef(null);
  let [c, u] = useState(null);
  let x = function (e, t) {
    let n = Th();
    let l = isNotInFocusedNodeView();
    let r = trackFileEventWithStore();
    return _$$A19(() => {
      r('edit_template_field', {
        product_type: 'buzz',
        content_type: 'text',
        field: t,
        is_multi_edit: !!e && e.length > 1,
        num_assets_edited: e?.length,
        view: l ? 'grid_view' : 'single_asset_view',
        library_key: n
      });
    }, 1e4);
  }(Tv(), e);
  let m = e => {
    isNotNullish(e) && (x(), _$$l2.user('set-text-field-assignment', () => {
      i ? i(e) : fullscreenValue.updateSelectionProperties({
        textContent: e
      });
    }));
  };
  return jsx(Kk, {
    dataTestId: 'cooperFieldsTextPanelInputWrapper',
    label: e,
    alwaysShowLabel: !0,
    input: jsx(_$$v3, {
      dataTestId: `cooperFieldsTextPanelInput-${l}`,
      recordingKey: `cooperFieldsTextPanelInput-${l}`,
      ref: d,
      value: s,
      placeholder: isInvalidValue(t) ? s : null,
      onChange: e => {
        m(e.currentTarget.value);
      },
      focusToEnd: !0,
      className: c === 'content' || r ? 'cooper_typed_prop_assignment_row--textInputActive--rjii3' : ''
    }),
    onFocus: () => {
      u('content');
      n?.();
    },
    onBlur: () => {
      u(null);
    },
    appendedClassName: 'cooper_typed_prop_assignment_row--inputOffset--nNTfc'
  });
}
let xt = {
  editRestrictionBannerTitle: {
    ..._$$g2.textBodyMediumStrong,
    $$css: !0
  },
  editRestrictionBannerMessage: {
    ..._$$g2.textBodyMedium,
    color: 'x1n0bwc9',
    $$css: !0
  },
  showAllFieldsButton: {
    'display': 'x78zum5',
    'alignItems': 'x6s0dn4',
    'color': 'x1n0bwc9',
    ..._$$g2.textBodyMedium,
    'gap': 'x167g77z',
    'rowGap': null,
    'columnGap': null,
    'margin': 'x1ju8c3c',
    'marginInline': null,
    'marginInlineStart': null,
    'marginLeft': null,
    'marginInlineEnd': null,
    'marginRight': null,
    'marginBlock': null,
    'marginTop': null,
    'marginBottom': null,
    'padding': 'xd8jtse',
    'paddingInline': null,
    'paddingStart': null,
    'paddingLeft': null,
    'paddingEnd': null,
    'paddingRight': null,
    'paddingBlock': null,
    'paddingTop': null,
    'paddingBottom': null,
    'width': 'xkxa9zd',
    'borderRadius': 'x192jxwq',
    'borderStartStartRadius': null,
    'borderStartEndRadius': null,
    'borderEndStartRadius': null,
    'borderEndEndRadius': null,
    'borderTopLeftRadius': null,
    'borderTopRightRadius': null,
    'borderBottomLeftRadius': null,
    'borderBottomRightRadius': null,
    '--color-icon': 'xmauxvm',
    ':focus-visible_outline': 'x5hs570',
    ':focus-visible_outlineColor': null,
    ':focus-visible_outlineOffset': null,
    ':focus-visible_outlineStyle': null,
    ':focus-visible_outlineWidth': null,
    '$$css': !0
  },
  emptyOrErrorState: {
    ..._$$g2.textBodyMedium,
    color: 'x1n0bwc9',
    padding: 'x15fnm84',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    textAlign: 'x2b8uid',
    $$css: !0
  }
};
function xn({
  text: e
}) {
  return jsx('div', {
    ..._$$xk(xt.emptyOrErrorState),
    children: e
  });
}
function xl() {
  let e = useDispatch();
  let t = useSelectedCooperFrameIds();
  let n = isFullscreenAndInFocusedNodeView();
  let l = getFocusedNodeId();
  let r = useMemo(() => n ? [l] : t, [n, l, t]);
  let i = getFeatureFlags().buzz_video_export;
  let u = useSelectedImageOrVideoNodeGuids(r);
  let x = r.length > 0;
  let m = cg();
  let h = t.length > 1;
  let g = !h && !!l;
  let f = useDeepEqualSceneValue((e, t) => {
    let n = e.get(t);
    return n ? n.getBuzzTextFields?.() ?? [] : [];
  }, l);
  let _ = f.length <= 4;
  let [j, y] = useState(_);
  let E = f.length;
  let v = _ || j ? f : f.slice(0, 4);
  let T = f.length > 0 && g;
  let I = Object.keys(u).length > 0 && g;
  let S = T || I;
  let k = useAppModelProperty('activeCanvasEditModeType');
  let A = Object.keys(useSceneGraphSelection());
  let z = k !== LayoutTabType.TEXT || A.length === 0 ? void 0 : A;
  let {
    mediaFieldsToShow,
    showAllMediaFields,
    setShowAllMediaFields,
    shouldNeverTruncateMediaFields
  } = function (e) {
    let t = e.length <= 3;
    let [n, l] = useState(t);
    return {
      mediaFieldsToShow: useCallback(() => n ? e : e.slice(0, 2), [e, n])(),
      showAllMediaFields: n,
      setShowAllMediaFields: l,
      shouldNeverTruncateMediaFields: t
    };
  }(u);
  let [F, B] = useState(!1);
  return h ? jsx(xn, {
    text: getI18nString('cooper.fields.multiple_selection_warning')
  }) : x ? S ? jsxs(_$$k4, {
    name: 'cooper_fields_tab',
    children: [m && jsx(ug, {
      hideBorderBottom: !T,
      children: jsxs('div', {
        className: 'x78zum5 xdt5ytf x1ov5egs x7f5121',
        children: [jsxs('div', {
          className: 'xh8yej3 x78zum5 x1qughib x6s0dn4',
          children: [jsx('span', {
            ..._$$xk(xt.editRestrictionBannerTitle),
            children: getI18nString('cooper.properties_panel.fields.detach_title')
          }), jsx('span', {
            className: 'x1aue78i xcr9a89 x19y5rnk',
            onMouseEnter: () => B(!0),
            onMouseLeave: () => B(!1),
            children: jsx(IconButton, {
              'aria-label': getI18nString('cooper.inline_menu.remove_guidelines'),
              'onClick': () => {
                e(showModalHandler({
                  type: dh
                }));
              },
              'children': F ? jsx(rB, {}) : jsx(_$$c3, {})
            })
          })]
        }), jsx('div', {
          ..._$$xk(xt.editRestrictionBannerMessage),
          children: getI18nString('cooper.properties_panel.fields.detach_description')
        })]
      })
    }), T && jsxs(ug, {
      hideBorderBottom: !I,
      dataTestId: 'cooperFieldsTextPanel',
      children: [jsxs('div', {
        className: cssBuilderInstance.flex.flexColumn.$,
        children: [jsx(xi, {
          icon: jsx(_$$I3, {}),
          title: getI18nString('cooper.properties_panel.fields.text')
        }), v.map((e, t) => jsx(xe, {
          name: e.title,
          indexForTestId: t,
          value: e.value,
          isActive: e.guids.some(e => z?.includes(e)),
          onChange: e.setValue,
          onFocus: e.onFocus
        }, t))]
      }), _ ? null : jsx(xr, {
        showAllFields: j,
        setShowAll: y,
        text: j ? getI18nString('cooper.properties_panel.fields.hide_text_fields', {
          count: E - 4
        }) : getI18nString('cooper.properties_panel.fields.show_all_text_fields', {
          count: E
        })
      })]
    }), I && jsxs(ug, {
      hideBorderBottom: !0,
      children: [jsx(xi, {
        icon: jsx(_$$_5, {}),
        title: i ? getI18nString('cooper.properties_panel.fields.media', {
          numMedia: u.length
        }) : getI18nString('cooper.properties_panel.fields.images', {
          numImages: u.length
        })
      }), mediaFieldsToShow.map(e => jsx(u4, {
        guid: e
      }, e)), shouldNeverTruncateMediaFields ? null : jsx(xr, {
        showAllFields: showAllMediaFields,
        setShowAll: setShowAllMediaFields,
        text: i ? showAllMediaFields ? getI18nString('cooper.properties_panel.fields.hide_media_fields', {
          count: u.length - 2
        }) : getI18nString('cooper.properties_panel.fields.show_all_media_fields', {
          count: u.length
        }) : showAllMediaFields ? getI18nString('cooper.properties_panel.fields.hide_image_fields', {
          count: u.length - 2
        }) : getI18nString('cooper.properties_panel.fields.show_all_image_fields', {
          count: u.length
        })
      })]
    })]
  }) : m ? jsx(xn, {
    text: getI18nString('cooper.fields.no_content_swappable_fields_for_brand_template')
  }) : jsx(xn, {
    text: getI18nString('cooper.fields.no_content_swappable_fields_for_freeform_template')
  }) : jsx(xn, {
    text: getI18nString('cooper.fields.empty_selection')
  });
}
function xr({
  showAllFields: e,
  setShowAll: t,
  text: n
}) {
  return jsxs('button', {
    onClick: () => t(!e),
    ..._$$xk(xt.showAllFieldsButton),
    children: [e ? jsx(_$$a9, {}) : jsx(_$$A18, {}), jsx('span', {
      children: n
    })]
  });
}
function xi({
  icon: e,
  title: t
}) {
  return jsxs('div', {
    className: cssBuilderInstance.flex.flexRow.pl16.pb14.pt12.$,
    children: [e, jsx('h2', {
      className: cssBuilderInstance.colorText.textBodyMediumStrong.pl8.$,
      children: t
    })]
  });
}
function xo() {
  let e = getObservableValue(AppStateTsApi?.cooperFocusView().focusedNodeId, null);
  return jsx('div', {
    'data-testid': 'cooperFieldsTab',
    'children': jsx(xl, {}, e ?? '')
  });
}
function xs() {
  return jsx(EA.Provider, {
    value: !0,
    children: jsx(_$$f2, {
      showFilter: !0
    })
  });
}
function xx({
  tab: e
}) {
  let t = function (e) {
    let t = useAtomWithSubscription(uM);
    let n = useAtomWithSubscription(_$$d6);
    let l = useAtomWithSubscription(d3);
    let r = uW();
    switch (e) {
      case AssetCategoryEnum.ASSETS:
        return getI18nString('cooper.left_rail.assets');
      case AssetCategoryEnum.TEMPLATES:
        return getI18nString('cooper.left_rail.templates');
      case AssetCategoryEnum.TEXT:
        return getI18nString('cooper.left_rail.text');
      case AssetCategoryEnum.MEDIA:
        if (getFeatureFlags().buzz_unsplash) return l ? getI18nString('buzz.left_rail.image') : getI18nString('buzz.left_rail.media');
        if (getFeatureFlags().buzz_video_export) return getI18nString('cooper.left_rail.images_videos');
        return getI18nString('cooper.left_rail.images');
      case AssetCategoryEnum.SHAPES:
        return getI18nString('cooper.left_rail.shapes');
      case AssetCategoryEnum.INSERTS:
        return getI18nString('cooper.left_rail.inserts');
      case AssetCategoryEnum.FIELDS:
        return getI18nString('cooper.left_rail.fields');
      case AssetCategoryEnum.BULK_CREATE:
        if (t === uO.MAP_DATA) return getI18nString('buzz.bulk_create.connect_data');
        return getI18nString('cooper.left_rail.bulk_create');
      case AssetCategoryEnum.PLUGINS:
        if (r && n.title) return n.title;
        return getI18nString('cooper.left_rail.plugins');
      default:
        return '';
    }
  }(e);
  let n = useAtomWithSubscription(_$$d6);
  let l = uW();
  return e === AssetCategoryEnum.PLUGINS && l ? jsxs('div', {
    className: 'x78zum5 x6s0dn4 x1nfngrj xeuugli',
    children: [n.titleIconURL && jsx('div', {
      className: _$$eo,
      children: jsx(_$$oW, {
        src: n.titleIconURL,
        alt: ''
      })
    }), n.titleIconSvgSrc && jsx('div', {
      className: _$$fp2,
      children: jsx(SvgComponent, {
        svg: n.titleIconSvgSrc,
        className: _$$v4
      })
    }), jsx('span', {
      className: 'xb3r6kr xlyipyv xuxw1ft xeuugli x1iyjqo2',
      children: t
    })]
  }) : jsx('span', {
    className: 'xb3r6kr xlyipyv xuxw1ft xeuugli x1iyjqo2',
    children: t
  });
}
let xg = xh;
let xj = {
  x: 1e3,
  y: 1e3
};
function xy() {
  return useCallback(async (e, t, n) => {
    let l = atomStoreManager.get(canvasGridAtom);
    await xE(e, t, n, l);
  }, []);
}
async function xE(e, t, n, l) {
  _$$J4.startLoadingImage(0);
  let r = UN();
  let i = r.getDirectlySelectedNodes();
  let o = [];
  let a = [];
  for (let e of i) hasImageFill(e) ? o.push(e) : e.type !== 'FRAME' && a.push(e);
  let s = o.length > 0 || a.length > 0;
  let c = AppStateTsApi?.cooperFocusView()?.focusedNodeId.getCopy();
  let u = c ? r.get(c) : null;
  try {
    let i = await fetch(e);
    let c = await i.arrayBuffer();
    let x = new Uint8Array(c);
    let p = await processImageWithThumbnail(x, 'image/png', t);
    _$$l2.user('insert-unsplash-photo', () => {
      if (s) {
        o.forEach(e => function (e, t) {
          let n = xg()(e.fills, e => e.type === 'IMAGE');
          e.setImageInFillPaint(t, n);
        }(e, p));
        a.forEach(e => function (e, t) {
          e.insertImageInFillPaint(t, 'FILL');
        }(e, p));
      } else if (u) {
        let e = r.createNode('RECTANGLE');
        xv(e, u, n);
        u.appendChild(e);
        e.insertImageInFillPaint(p, 'FILL');
      } else {
        !function (e, t, n, l) {
          let r = fullscreenValue.getViewportInfo();
          let i = {
            x: r.offsetX,
            y: r.offsetY
          };
          let o = null;
          if (t && t.length > 0) {
            let {
              row = 0,
              col = 0
            } = AppStateTsApi?.canvasGrid()?.getClosestGridCoord(i, null) ?? {};
            let r = Math.max(row, 0);
            let a = Math.max(col, 0);
            let s = t?.[r]?.[a];
            let c = s ? e.get(s) : null;
            if (c && !c.isInstance) {
              let e = function (e) {
                let t = e.absoluteBoundingBox;
                return {
                  x: t.x + t.w / 2,
                  y: t.y + t.h / 2
                };
              }(c);
              Math.sqrt((e.x - i.x) ** 2 + (e.y - i.y) ** 2) <= 1e3 && (o = c);
            }
          }
          let a = e.createNode('RECTANGLE');
          if (o) {
            xv(a, o, l);
            o.appendChild(a);
            a.insertImageInFillPaint(n, 'FILL');
          } else {
            a.size = xT(l);
            r.zoomScale > 0 && (a.size = {
              x: a.size.x / r.zoomScale,
              y: a.size.y / r.zoomScale
            });
            a.x = i.x - a.size.x / 2;
            a.y = i.y - a.size.y / 2;
            a.insertImageInFillPaint(n, 'FILL');
            let t = e.getCurrentPage();
            if (!t) throw new Error('No page found to append the image node.');
            t.appendChild(a);
          }
        }(r, l, p, n);
      }
    });
  } catch (e) {
    throw new Error(`Failed to insert Unsplash photo with ID: ${t} - ${e}`);
  } finally {
    _$$J4.finishLoadingImage();
  }
}
function xv(e, t, n) {
  e.size = xT(n, t.size);
  e.x = (t.size.x - e.size.x) / 2;
  e.y = (t.size.y - e.size.y) / 2;
}
function xT(e, t = xj) {
  let n = Math.min(1, t.x / e.x, t.y / e.y);
  return {
    x: e.x * n,
    y: e.y * n
  };
}
function xI({
  photo: e,
  providerName: t
}) {
  let {
    regular,
    raw
  } = e.urls;
  let {
    id,
    width,
    height,
    user,
    alt_description
  } = e;
  let {
    name,
    links: {
      html
    }
  } = s;
  let x = alt_description || getI18nString('buzz.stock_photos.alt_description_default', {
    provider: t
  });
  let m = xy();
  return jsxs('div', {
    className: 'x78zum5 xdt5ytf xdyg6lv x7gbno3',
    children: [jsx('div', {
      className: 'x78zum5 xdt5ytf x1n2onr6 x1x7x7il xb3r6kr',
      style: {
        aspectRatio: width / height
      },
      children: jsx(_$$oW, {
        src: regular,
        alt: x,
        loading: 'eager',
        className: 'x1lliihq xh8yej3 xt7dq6l x1n2onr6 xs3i2wk x1g40iwv x19y5rnk xy1kmf0'
      })
    }), jsx('div', {
      className: 'x78zum5 xdt5ytf x1ttywg8',
      children: jsx(ButtonWide, {
        'aria-label': getI18nString('buzz.stock_photos.add_image'),
        'iconPrefix': jsx(_$$x2, {
          style: {
            '--color-icon': Tj.iconOnbrand
          }
        }),
        'onClick': () => {
          m(raw, id, {
            x: width,
            y: height
          });
        },
        'htmlAttributes': {
          'data-testid': 'buzz-stock-photos-add-image-button'
        },
        'children': getI18nString('buzz.stock_photos.add_image')
      })
    }), jsx(xS, {}), alt_description && function ({
      description: e
    }) {
      return jsx('p', {
        className: 'x1akne3o x77yl0c',
        children: capitalize(e)
      });
    }({
      description: alt_description
    }), jsx(xk, {
      userName: name,
      userUrl: html,
      providerName: t
    })]
  });
}
function xS() {
  return jsx('div', {
    className: 'xdyg6lv xk0qfmw'
  });
}
function xk({
  userName: e,
  userUrl: t,
  providerName: n
}) {
  return jsxs('div', {
    ...Ay.props(xC.attribution),
    children: [jsx('p', {
      children: renderI18nText('buzz.stock_photos.photo_by', {
        photographer: jsx(Link, {
          'aria-label': e,
          'href': t,
          'trusted': !1,
          'newTab': !0,
          'children': e
        }),
        provider: jsx(Link, {
          'aria-label': n,
          'href': 'https://unsplash.com/?utm_source=figma&utm_medium=referral',
          'trusted': !1,
          'newTab': !0,
          'children': n
        })
      })
    }), jsx('p', {
      children: renderI18nText('buzz.stock_photos.license', {
        license_name: jsx(Link, {
          'aria-label': getI18nString('buzz.stock_photos.license.unsplash'),
          'href': 'https://unsplash.com/license?utm_source=figma&utm_medium=referral',
          'trusted': !1,
          'newTab': !0,
          'children': renderI18nText('buzz.stock_photos.license.unsplash')
        })
      })
    })]
  });
}
let xC = {
  attribution: {
    ..._$$g2.textBodySmall,
    display: 'x78zum5',
    flexDirection: 'xdt5ytf',
    color: 'x1n0bwc9',
    padding: 'x1nn34kk',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    gap: 'xg2d0mh',
    rowGap: null,
    columnGap: null,
    $$css: !0
  }
};
let xN = memo(({
  thumbnailUrl: e,
  altText: t,
  onClickImage: n,
  onClickMoreButton: l
}) => {
  let [r, i] = useState(!1);
  let [s, d] = useState(!1);
  return jsxs('div', {
    className: 'x78zum5 xdt5ytf x1n2onr6',
    onMouseEnter: () => i(!0),
    onMouseLeave: () => i(!1),
    children: [jsx(ButtonPrimitive, {
      className: 'xs3i2wk x5hs570 x1g40iwv x19y5rnk xb3r6kr',
      onClick: n,
      htmlAttributes: {
        'data-testid': 'buzz-stock-photos-image-tile'
      },
      children: jsx(_$$oW, {
        src: e,
        alt: t,
        loading: 'eager',
        className: 'x1lliihq xh8yej3 xt7dq6l'
      })
    }), jsx('div', {
      ...Ay.props(xw.iconContainer, (r || s) && xw.iconContainerVisible),
      children: jsx(IconButton, {
        'onClick': l,
        'aria-label': getI18nString('buzz.stock_photos.more_details'),
        'htmlAttributes': {
          'data-testid': 'buzz-stock-photos-more-icon-button',
          'onFocus': () => d(!0),
          'onBlur': () => d(!1)
        },
        'children': jsx(_$$J3, {
          className: 'xbzrb6o'
        })
      })
    })]
  });
});
function xR({
  height: e
}) {
  return jsx(Qp, {
    className: 'xh8yej3 x5yr21d x19y5rnk x1v8gsql',
    style: {
      height: e
    },
    animationType: JR.LIGHT_SHIMMER,
    dataTestId: 'buzz-stock-photos-tile-loading-image'
  });
}
let xw = {
  iconContainer: {
    position: 'x10l6tqk',
    top: 'x1bfpjnn',
    right: 'x1473dw',
    insetInlineStart: null,
    insetInlineEnd: null,
    zIndex: 'x1vjfegm',
    display: 'x78zum5',
    boxSizing: 'x9f619',
    width: 'xvy4d1p',
    height: 'xxk0z11',
    flexDirection: 'x1q0g3np',
    justifyContent: 'xl56j7k',
    alignItems: 'x6s0dn4',
    backgroundColor: 'x1yjdb4r xv2f06h x1m5i512',
    outline: 'xctca69',
    outlineColor: null,
    outlineStyle: null,
    outlineWidth: null,
    outlineOffset: 'x167vgm8',
    borderRadius: 'x19y5rnk',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    opacity: 'xg01cxk',
    $$css: !0
  },
  iconContainerVisible: {
    opacity: 'x1hc1fzr',
    $$css: !0
  }
};
function xL({
  numColumns: e = 2,
  isLeftRail: t = !0,
  photoResults: n,
  hasNextPage: l,
  isFetchingNextPage: r,
  fetchNextPage: i
}) {
  let s = xy();
  let d = Xr(d3);
  let c = useCallback(e => d(e), [d]);
  let u = useMemo(() => n.map(e => ({
    key: e.id,
    thumbnailUrl: e.urls.thumb,
    altText: e.alt_description || getI18nString('buzz.stock_photos.alt_description_default', {
      provider: getI18nString('buzz.stock_photos.header.unsplash')
    }),
    width: e.width,
    height: e.height,
    onClickImage: () => s(e.urls.raw, e.id, {
      x: e.width,
      y: e.height
    }),
    onClickMoreButton: () => c(e)
  })), [n, s, c]);
  return jsxs(Fragment, {
    children: [jsx(nT, {
      items: u,
      renderItem: ({
        key: e,
        thumbnailUrl: t,
        altText: n,
        onClickImage: l,
        onClickMoreButton: r
      }) => jsx(xN, {
        thumbnailUrl: t,
        altText: n,
        onClickImage: l,
        onClickMoreButton: r
      }, e),
      numColumns: e,
      isLeftRail: t,
      getItemHeight: ({
        width: e,
        height: t
      }) => nI({
        width: e,
        height: t
      }),
      containerStyleXStyle: xO.gridPadding,
      columnStyleXStyle: xO.columnGap
    }), r && jsx('div', {
      className: 'x78zum5 xl56j7k x6s0dn4 x1aaf699',
      children: jsx(_$$k7, {})
    }), jsx(_$$a5, {
      onIntersectionChange: ({
        isIntersecting: e
      }) => {
        e && l && !r && i();
      }
    })]
  });
}
function xP({
  numColumns: e = 2,
  numTiles: t = 80,
  isLeftRail: n = !0
}) {
  let l = Array.from({
    length: t
  }, (t, n) => function (e, t) {
    let n = Math.floor(e / t);
    return e % t == 0 == (n % 2 == 0) ? 140 : 80;
  }(n, e));
  l.push(112);
  return jsx(nT, {
    items: l,
    renderItem: (e, t) => jsx(xR, {
      height: e
    }, `${t}-${e}`),
    numColumns: e,
    isLeftRail: n,
    containerStyleXStyle: xO.gridPadding,
    columnStyleXStyle: xO.columnGap,
    getItemHeight: e => e
  });
}
let xO = {
  gridPadding: {
    padding: 'xhsbapj',
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
  columnGap: {
    gap: 'x1nfngrj',
    rowGap: null,
    columnGap: null,
    $$css: !0
  }
};
function xM({
  providerName: e
}) {
  return jsx('div', {
    className: 'x78zum5 x1q0g3np x1cy8zhl x1ihwiht x19y5rnk',
    children: jsx('h2', {
      ...Ay.props(xF.headerTitle),
      children: e
    })
  });
}
let xF = {
  headerTitle: {
    ..._$$g2.textBodyMediumStrong,
    paddingBottom: 'x1ihwiht',
    color: 'x1n0bwc9',
    $$css: !0
  }
};
function xB({
  photoResults: e,
  isLoadingFirstPage: t,
  libraryType: n,
  hasNoResults: l,
  hasError: r,
  hasNextPage: i,
  isFetchingNextPage: a,
  fetchNextPage: s
}) {
  return t ? jsx(xP, {}) : l ? jsx(xD, {}) : r ? jsx(x$, {}) : jsxs(Fragment, {
    children: [n === cn.EDITORIAL && jsx(xM, {
      providerName: getI18nString('buzz.stock_photos.header.unsplash')
    }), jsx(xL, {
      photoResults: e,
      hasNextPage: i,
      isFetchingNextPage: a,
      fetchNextPage: s
    })]
  });
}
function xD() {
  return jsx(xV, {
    icon: jsx(_$$W6, {
      'aria-hidden': 'true',
      'className': 'xmauxvm x1mh6rdz'
    }),
    title: getI18nString('buzz.stock_photos.no_result'),
    subtitle: getI18nString('buzz.stock_photos.no_result_secondary')
  });
}
function x$() {
  return jsx(xV, {
    icon: jsx(_$$e0, {
      'aria-hidden': 'true',
      'className': 'xmauxvm x1mh6rdz'
    }),
    title: getI18nString('buzz.stock_photos.error'),
    subtitle: getI18nString('buzz.stock_photos.error_secondary')
  });
}
function xV({
  icon: e,
  title: t,
  subtitle: n
}) {
  return jsxs('div', {
    className: 'x78zum5 xdt5ytf x6s0dn4 xl56j7k x1pulhmw x2xy8zw x5rwcs5',
    children: [e, jsxs('div', {
      className: 'x78zum5 xdt5ytf x6s0dn4 xl56j7k x1n0bwc9',
      children: [jsx('p', {
        ...Ay.props(xG.title),
        children: t
      }), jsx('p', {
        ...Ay.props(xG.subtitle),
        children: n
      })]
    })]
  });
}
let xG = {
  title: {
    ..._$$g2.textBodyMediumStrong,
    $$css: !0
  },
  subtitle: {
    textAlign: 'x2b8uid',
    ..._$$g2.textBodyMedium,
    $$css: !0
  }
};
let xU = 'buzz:stock_photos';
function xK({
  searchQuery: e,
  setSearchQuery: t
}) {
  let n = useSelector(e => e.search.sessionId);
  let l = useDispatch();
  let r = useCallback(e => {
    e === '' && n ? l(searchEndSession()) : e === '' || n || l(searchStartSession({
      entryPoint: xU
    }));
    t(e);
  }, [n, l, t]);
  let i = useCallback(() => {
    t('');
    n && l(searchEndSession());
  }, [t, n, l]);
  let d = useCallback(() => {
    e === '' || n || l(searchStartSession({
      entryPoint: xU
    }));
  }, [n, e, l]);
  return jsx(_$$e, {
    location: 'leftRail',
    searchQuery: e,
    placeholder: getI18nString('buzz.stock_photos.search_placeholder'),
    onChange: r,
    clearSearch: i,
    onFocus: d
  });
}
function xW() {
  let e = useAtomWithSubscription(d3);
  let t = getI18nString('buzz.stock_photos.header.unsplash');
  return jsx('div', {
    className: 'x78zum5 xdt5ytf x9f619 x5yr21d',
    children: e ? jsx(xI, {
      photo: e,
      providerName: t
    }) : jsx(xH, {})
  });
}
function xH() {
  let e = hasJubileePermissionForDesign();
  let t = getFeatureFlags().buzz_unsplash;
  let {
    searchQuery,
    setSearchQuery,
    libraryType,
    photoResults,
    isLoadingFirstPage,
    hasNoResults,
    hasError,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage
  } = function (e, t = !0) {
    let [n, l] = useAtomValueAndSetter(d9);
    let [r, i] = useAtomValueAndSetter(cl);
    let o = n.trim();
    let [d] = useDebounce(o, 200);
    let c = t && !!e.trim();
    let u = !!d;
    let x = u ? cm.UnsplashPaginatedSearchQuery({
      fileKey: e,
      query: d,
      per_page: 30
    }) : cm.UnsplashPaginatedEditorialQuery({
      fileKey: e,
      per_page: 30
    });
    let [{
      data: p,
      status: m,
      hasNextPage: h,
      isFetchingNextPage: g
    }, {
      fetchNextPage: f
    }] = setupResourceAtomHandler(x, {
      enabled: c && r.provider === ce.UNSPLASH
    });
    let b = u ? cn.SEARCH : cn.EDITORIAL;
    useEffect(() => {
      i(e => ({
        ...e,
        libraryType: b,
        isLoading: m === 'loading' || g
      }));
    }, [b, m, g, i]);
    (function (e, t, n, l) {
      let r = trackFileEventWithStore();
      let i = useSelector(e => e.search.sessionId);
      let o = function () {
        let e = useContext(ch);
        if (!e) throw new Error('useBuzzStockPhotosViewType must be used within a BuzzStockPhotosViewTypeContext');
        return e;
      }();
      let [d] = useAtomValueAndSetter(cl);
      let c = useRef(!1);
      useEffect(() => {
        c.current = !1;
      }, [n]);
      useEffect(() => {
        l && e && t > 0 && !c.current && (r('buzz_stock_photos_search_result', {
          query: n,
          searchSessionId: i,
          productType: 'buzz',
          photoProvider: d.provider,
          numResultsLoaded: t,
          entryPoint: o
        }), c.current = !0);
      }, [l, e, t, n, i, d.provider, o, r]);
    })(m === 'loaded', p?.length || 0, o, u);
    return {
      searchQuery: n,
      setSearchQuery: l,
      libraryType: b,
      photoResults: p || [],
      isLoading: m === 'loading' || g,
      isLoadingFirstPage: m === 'loading' && !p,
      hasNoResults: m === 'loaded' && p && p.length === 0,
      hasError: m === 'errors',
      hasNextPage: h || !1,
      isFetchingNextPage: g,
      fetchNextPage: f
    };
  }(useAtomWithSubscription(openFileKeyAtom) || '', t);
  let g = isLoadingFirstPage || hasNoResults || hasError;
  return t ? jsxs(Fragment, {
    children: [jsx('div', {
      className: 'x2lah0s x1j179x1',
      children: jsx(xK, {
        searchQuery,
        setSearchQuery
      })
    }), jsx('div', {
      className: 'x78zum5 xdt5ytf x98rzlu x10wlt62 xdyg6lv',
      children: jsx(_$$P, {
        disableScrollbarBorder: !0,
        hideScrollbar: g,
        scrollingDisabled: g,
        children: jsx('div', {
          className: 'x78zum5 xdt5ytf x1hslx8c',
          children: jsx(xB, {
            photoResults,
            isLoadingFirstPage,
            libraryType,
            hasNoResults,
            hasError,
            hasNextPage,
            isFetchingNextPage,
            fetchNextPage
          })
        })
      })
    }), jsxs('div', {
      className: 'x78zum5 xdt5ytf x1hslx8c x1yjdb4r xdyg6lv',
      children: [e && jsx(xX, {}), jsx(xq, {})]
    })]
  }) : jsxs('div', {
    className: 'x78zum5 xdt5ytf xi4r6k5 x1i71x30 xdyg6lv',
    children: [e && jsx(xX, {}), jsx(xq, {})]
  });
}
function xX() {
  let e = useDispatch();
  let t = useCallback(() => {
    B3(JT.GENERATE_IMAGE);
    scheduler.postTask(() => {
      $I({
        moduleToOpen: {
          type: 'custom',
          module: jsx(_$$Ay2, {}),
          name: Sn.GENERATE_IMAGE
        },
        trackingData: {
          source: 'image_settings_swap_image_generate_new'
        }
      });
      e(hideModal());
    });
  }, [e]);
  return jsx(xY, {
    onClick: t
  });
}
function xY({
  onClick: e
}) {
  return getFeatureFlags().buzz_unsplash ? jsx('div', {
    className: 'x78zum5 xdt5ytf x1gskr33 x1ihwiht',
    children: jsx(ButtonWide, {
      'variant': 'secondary',
      'onClick': e,
      'aria-label': getI18nString('buzz.media_panel.make_image'),
      'iconPrefix': jsx(_$$T3, {
        style: {
          '--color-icon': Tj.iconBrand
        }
      }),
      'htmlAttributes': {
        'data-testid': 'buzz-media-generate-image-button'
      },
      'children': getI18nString('buzz.media_panel.make_image')
    })
  }) : jsx('button', {
    className: 'x1ypdohk x16z9rzl xb3r6kr xh8yej3 xdpxx8g x1uvtmcs x19jb23i xymzi0t x1mxnbhz x1bamp8i x1fz536k',
    onClick: e,
    tabIndex: 0,
    children: jsxs('div', {
      className: 'x78zum5 xuzqwsy x1i71x30 xdt5ytf xb3r6kr x5yr21d x2b8uid x6s0dn4 x1ty5bnc',
      children: [jsxs('div', {
        className: 'x78zum5 xdt5ytf x1pulhmw x6s0dn4 x1gcgh60 x1jwbysl',
        children: [jsx('div', {
          className: 'x78zum5 x6s0dn4 xl56j7k x1td3qas x10w6t97 x19y5rnk x1ghs5zp',
          children: jsx(_$$T3, {
            style: {
              '--color-icon': Tj.iconBrand
            }
          })
        }), jsxs('div', {
          className: 'x78zum5 xdt5ytf x6s0dn4 xg2d0mh',
          children: [jsx('span', {
            ...Ay.props(xQ.buttonTitle),
            children: getI18nString('buzz.media_panel.make_image')
          }), jsx('span', {
            ...Ay.props(xQ.buttonSecondary),
            children: getI18nString('buzz.media_panel.generate_button_secondary')
          })]
        })]
      }), jsx('div', {
        className: 'xh8yej3 xdolth3 xb3r6kr',
        children: jsx('img', {
          className: 'x1j7kr1c x5yr21d x1rm44br xl1xv1r x1mxnbhz',
          src: buildUploadUrl('d8884d8d272d9500074b07ed3fbda260cb1898bb'),
          alt: getI18nString('buzz.media_panel.make_image')
        })
      })]
    })
  });
}
function xq() {
  let e = isInteractionPathCheck();
  let t = Xr(_$$tM);
  let n = useCallback(() => t(DesignGraphElements.IMAGE_OR_VIDEO), [t]);
  let l = jsx(xJ, {
    onClick: n
  });
  return e ? jsx(_$$Y3, {
    isDragTarget: () => !0,
    onTargetDragEnter: () => SKIP_RECORDING,
    onTargetDragLeave: () => SKIP_RECORDING,
    onTargetDrop: e => {
      if (fullscreenValue.fileArrayToString) {
        let t = fullscreenValue.fileArrayToString(Array.from(e.files)).replace('File', 'File.png');
        Fullscreen?.handleOpenFromJsonString(t, null);
      }
    },
    recordingKey: 'buzzImageDragTarget',
    children: l
  }) : l;
}
function xJ({
  onClick: e
}) {
  let t = getFeatureFlags().buzz_unsplash;
  let n = getFeatureFlags().buzz_video_export;
  return t && n ? jsx('div', {
    className: 'x78zum5 xdt5ytf x1gskr33 x1ihwiht',
    children: jsx(ButtonWide, {
      'variant': 'secondary',
      'onClick': e,
      'aria-label': getI18nString('buzz.media_panel.upload_image_or_video'),
      'iconPrefix': jsx(_$$A15, {}),
      'htmlAttributes': {
        'data-testid': 'buzz-media-insertion-button'
      },
      'children': getI18nString('buzz.media_panel.upload_image_or_video')
    })
  }) : jsx('button', {
    'className': 'x1ypdohk x1mxnbhz x1bamp8i x16z9rzl xb3r6kr xh8yej3 xdpxx8g x1fz536k x1uvtmcs x19jb23i',
    'onClick': e,
    'tabIndex': 0,
    'data-testid': 'buzz-media-insertion-button',
    'children': jsx('div', {
      className: 'x78zum5 x1i71x30 xdt5ytf xb3r6kr x2b8uid x6s0dn4 xi4r6k5 xt7dq6l',
      children: jsxs('div', {
        className: 'x78zum5 x1pulhmw x6s0dn4 xh8yej3',
        children: [jsx(_$$A15, {}), jsxs('div', {
          className: 'x78zum5 xdt5ytf x1cy8zhl',
          children: [jsx('span', {
            ...Ay.props(xQ.buttonTitle),
            children: n ? getI18nString('buzz.media_panel.upload_image_or_video') : getI18nString('cooper.images.upload_image')
          }), jsx('span', {
            ...Ay.props(xQ.buttonSecondary, xQ.uploadSecondary),
            children: n ? getI18nString('buzz.media_panel.upload_button_secondary') : getI18nString('cooper.images.upload_button_secondary')
          })]
        })]
      })
    })
  });
}
let xQ = {
  buttonTitle: {
    ..._$$g2.textBodyMediumStrong,
    color: 'x1akne3o',
    $$css: !0
  },
  buttonSecondary: {
    ..._$$g2.textBodyMedium,
    color: 'x1n0bwc9',
    maxWidth: 'x16em4ew',
    $$css: !0
  },
  uploadSecondary: {
    textAlign: 'xdpxx8g',
    $$css: !0
  }
};
function x1() {
  let {
    selectedAssetType,
    categorySlug,
    tagsSlug
  } = x5();
  let l = useRef(null);
  let r = selectedAssetType?.dimensions;
  let i = !!r && r.x > 1.5 * r.y;
  let s = r?.x && r?.y ? r.x / r.y : void 0;
  useEffect(() => {
    l.current && (l.current.scrollTop = 0);
  }, [selectedAssetType]);
  return jsxs(Fragment, {
    children: [jsx(lE, {}), jsx(_$$P, {
      className: na,
      scrollContainerRef: l,
      children: jsx('div', {
        className: 'xyamay9',
        children: jsx(lz, {
          category: categorySlug,
          tags: tagsSlug,
          singleColumn: i,
          fixedAspectRatio: s,
          isAssetTypeView: !0
        }, `asset-type-view-${categorySlug}-${tagsSlug?.join('-')}`)
      })
    })]
  });
}
function x5() {
  let e = useAtomWithSubscription(Hb);
  let {
    category_slug,
    tags_slug
  } = gF(e?.assetType ?? null);
  let {
    category_slug: _category_slug,
    tags_slug: _tags_slug
  } = _$$a3();
  category_slug || (t = _category_slug);
  tags_slug || (n = _tags_slug);
  return {
    selectedAssetType: e,
    categorySlug: category_slug,
    tagsSlug: tags_slug
  };
}
function x2() {
  let [e, t] = useAtomValueAndSetter(U_);
  let n = useAtomWithSubscription(Lm);
  let l = useAtomWithSubscription(_$$d2);
  let r = useAtomWithSubscription(_$$az);
  let i = _$$j2();
  let s = Gi();
  let {
    teamTemplates,
    isLoading
  } = wv(FFileType.COOPER, void 0, i);
  let [u, x] = useAtomValueAndSetter(hc);
  let {
    searchQuery,
    setSearchQuery,
    trimmedSearchQuery,
    templateResults,
    internalAssetResults,
    communityAssetResults,
    requestLoadMore
  } = _$$pI();
  let E = useAtomWithSubscription(openFileKeyAtom);
  let v = useCurrentPrivilegedPlan('TemplatesLeftRailContent');
  let T = v.status === 'loaded' ? v.data.name : '';
  let I = getI18nString('cooper.templates.from_plan_name', {
    planName: T
  });
  let {
    categorySlug
  } = x5();
  if (useEffect(() => {
    !u && !r && i && s && teamTemplates && teamTemplates.length > 0 && (t('INTERNAL'), x(!0));
  }, [s, teamTemplates, t, r, i, u, x]), isLoading) {
    return jsx(_$$ah, {});
  }
  let k = null;
  if (e === 'COMMUNITY') {
    k = r && categorySlug ? jsx(x1, {}) : jsx(lT, {});
  } else {
    switch (n.type) {
      case mF.ALL:
      case mF.ORG:
      case mF.IMPORT_FROM_DESIGN:
        k = v.status === 'loaded' ? jsx(lV, {
          plan: v.data
        }) : null;
        break;
      case mF.TEAM:
        k = jsx(lD, {
          teamId: n.teamId,
          displayName: n.displayName
        });
        break;
      case mF.TEMPLATES:
        k = jsx(nX, {
          libraryKey: n.libraryKey
        });
        break;
      default:
        k = jsx(lI, {});
    }
  }
  return jsx(TrackingProvider, {
    name: e4,
    properties: {
      productType: 'buzz',
      fileKey: E
    },
    children: jsxs('div', {
      className: 'x78zum5 xdt5ytf xou54vl x9f619 x5yr21d',
      children: [n.type !== mF.TEMPLATES && jsxs('div', {
        className: 'x78zum5 xdt5ytf x1asosoz x167g77z x2lah0s',
        children: [jsx(tx, {
          searchQuery,
          setSearchQuery
        }), trimmedSearchQuery.length === 0 && i && jsx('div', {
          className: 'x1lliihq xh8yej3',
          children: jsxs(_$$bL4, {
            legend: jsx(_$$q7, {
              children: renderI18nText('cooper.templates.template_picker.left_rail_tab.hidden_legend')
            }),
            value: e,
            onChange: e => {
              t(e);
              setSearchQuery('');
            },
            children: [jsx(RT, {
              'value': 'COMMUNITY',
              'label': getI18nString('cooper.templates.template_picker.left_rail_tab.community_tab'),
              'data-testid': 'communityTab',
              'truncate': !0
            }, 'community'), jsx(RT, {
              'value': 'INTERNAL',
              'label': I,
              'data-testid': 'internalTab',
              'truncate': !0,
              'htmlAttributes': {
                'data-tooltip-type': KindEnum.TEXT,
                'data-tooltip': I,
                'data-tooltip-timeout-delay': 1e3
              }
            }, 'internal')]
          })
        })]
      }), jsx('div', {
        className: 'x1a2m2up x98rzlu x78zum5 xdt5ytf xgqtt45 xb3r6kr',
        children: trimmedSearchQuery ? l.type === Ef.DEFAULT ? jsx(lb, {
          trimmedSearchQuery,
          templateResults,
          internalAssetResults,
          communityAssetResults,
          requestLoadMore,
          numPlaceholderTiles: 4
        }) : jsx(lY, {
          libraryKey: l.libraryKey
        }) : k
      })]
    })
  });
}
function x4() {
  let [e, t] = useAtomValueAndSetter(assetCategoryAtom);
  let n = function () {
    let [e, t] = useAtomValueAndSetter(assetCategoryAtom);
    let n = getObservableValue(AppStateTsApi?.uiState().showCanvasSearch, !1);
    let {
      exit
    } = SQ();
    let r = useRef(e);
    let i = useRef(n);
    let o = useRef(exit);
    r.current = e;
    i.current = n;
    o.current = exit;
    useEffect(() => {
      n && r.current !== AssetCategoryEnum.FIND ? t(AssetCategoryEnum.FIND) : n || r.current !== AssetCategoryEnum.FIND || t(AssetCategoryEnum.ASSETS);
    }, [n, t]);
    useEffect(() => {
      i.current && e !== AssetCategoryEnum.FIND && o.current();
    }, [e]);
    return e === AssetCategoryEnum.FIND;
  }();
  let [l, r] = function (e) {
    let [t, n] = useState(e);
    let [l, r] = useState(!1);
    let i = useLatestRef(e);
    let o = useRef(null);
    useEffect(() => {
      o.current && (clearTimeout(o.current), o.current = null);
      let t = e === AssetCategoryEnum.ASSETS;
      i && i !== e ? t ? (n(i), r(!0), o.current = window.setTimeout(() => {
        n(AssetCategoryEnum.ASSETS);
        r(!1);
      }, 350)) : (n(e), r(!1)) : i || (n(e), r(!1));
      return () => {
        o.current && clearTimeout(o.current);
      };
    }, [e, i]);
    return [t, e === AssetCategoryEnum.ASSETS ? l ? 'hiding' : 'fullyHidden' : 'visible'];
  }(e);
  let i = isNotInFocusedNodeView();
  let c = e === AssetCategoryEnum.ASSETS && i;
  useEffect(() => {
    I$(c);
  }, [c]);
  let u = useSelector(e => !e.mirror.appModel.isReadOnly);
  let x = Xr(U_);
  let m = useSelectedCooperFrameId();
  let h = useRef(null);
  let g = function ({
    tab: e
  }) {
    let [t, n] = useAtomValueAndSetter(uM);
    let l = Xr(_$$v);
    let [r, i] = useAtomValueAndSetter(d3);
    let o = uW();
    let {
      fdPreviewResource
    } = useSelector(e => e.universalInsertModal);
    let c = useDispatch();
    switch (e) {
      case AssetCategoryEnum.BULK_CREATE:
        if (t === 0) {
          l({});
          AppStateTsApi?.cooperState().bulkCreateConnectedNodes.set([]);
          return null;
        }
        return () => n(t - 1);
      case AssetCategoryEnum.MEDIA:
        if (r) return () => i(null);
        return null;
      case AssetCategoryEnum.PLUGINS:
        if (o) {
          return () => {
            let e = PluginUIManager.getInstance();
            e?.tearDown();
            atomStoreManager.set(_$$d4, null);
          };
        }
        if (fdPreviewResource) {
          return () => {
            c(IN({
              fdPreviewResource: void 0
            }));
          };
        }
        return null;
      default:
        return null;
    }
  }({
    tab: l
  });
  let f = function () {
    let e = lJ();
    let t = Xr(YA);
    let n = Xr(_$$az);
    return useCallback(({
      tab: l
    }) => {
      l === AssetCategoryEnum.TEMPLATES && (e(), t(!1), n(!1));
    }, [e, t, n]);
  }();
  let j = bQ;
  return c ? jsxs(Fragment, {
    children: [jsx(x8, {
      onClickNew: () => {
        t(AssetCategoryEnum.TEMPLATES);
        x('COMMUNITY');
      },
      canEdit: u
    }), c && m && jsx('div', {
      className: 'x10l6tqk x1ey2m1c x1tpqehw',
      children: jsx(Zc, {
        guid: m
      })
    })]
  }) : jsx(_$$$7, {
    transparentBackground: i,
    useMarginInsteadOfTranslateX: !0,
    defaultWidth: 280,
    maxWidth: 320,
    allowOverflow: l === AssetCategoryEnum.PLUGINS,
    children: jsxs('div', {
      'ref': h,
      'className': 'x78zum5 xdt5ytf x1iyjqo2 x5yr21d x1md70p1',
      'data-testid': 'buzz-left-panel-content',
      'children': [!i && !c && jsx('div', {
        className: 'xz9dl7a',
        children: jsx(_$$d5, {})
      }), jsx(useCachedSubtree, {
        isVisible: !i,
        children: () => jsxs('div', {
          className: 'x1n2onr6 x1iyjqo2 x78zum5 xdt5ytf x6ikm8r x10wlt62',
          children: [jsx(uu, {
            positionerRef: h
          }), jsx(ux, {
            animationStatus: r
          })]
        })
      }), jsx(_$$P6.div, {
        variants: {
          fullyHidden: {
            translateX: `-${j}px`
          },
          hiding: {
            translateX: `-${j}px`,
            transition: {
              duration: 0.35,
              ease: ui
            }
          },
          visible: {
            translateX: 0,
            transition: {
              duration: 0.35,
              ease: ur
            }
          }
        },
        initial: 'fullyHidden',
        animate: r,
        exit: 'hidden',
        className: 'x10l6tqk x13vifvy xu96u03 x1kc4spy x1ey2m1c x1yjdb4r xoegz02 xspf3my',
        children: jsxs('div', {
          className: 'x78zum5 xdt5ytf x5yr21d',
          children: [!n && jsx('div', {
            className: 'xs83m0k xg2d0mh',
            children: jsxs('div', {
              ..._$$xk(x9.closeableHeaderContainer, (l === AssetCategoryEnum.FIELDS || l === AssetCategoryEnum.BULK_CREATE) && x9.closeableHeaderContainerWithBorder),
              'data-testid': 'buzz-closeable-header',
              'children': [jsxs('h2', {
                className: 'x78zum5 x6s0dn4 xg2d0mh xeuugli',
                children: [!!g && jsx('div', {
                  className: 'x1bawvfr',
                  children: jsx(IconButton, {
                    'aria-label': getI18nString('cooper.templates.header.back'),
                    'onClick': g,
                    'children': jsx(_$$C2, {})
                  })
                }), jsx(xx, {
                  tab: l
                })]
              }), jsxs('div', {
                className: 'x78zum5 x6s0dn4 x1nfngrj x8x9d4c',
                children: [jsx(x3, {
                  activeTab: l
                }), jsx(IconButton, {
                  'aria-label': getI18nString('cooper.left_rail.close_panel'),
                  'onClick': () => {
                    f({
                      tab: l
                    });
                    t(AssetCategoryEnum.ASSETS);
                  },
                  'data-testid': 'close-left-panel-button',
                  'children': jsx(_$$A3, {})
                })]
              })]
            })
          }), jsx('div', {
            className: 'x78zum5 xdt5ytf x1iyjqo2 x6ikm8r x1odjw0f',
            children: jsx(x6, {
              activeTab: l,
              positionerRef: h
            })
          })]
        })
      })]
    })
  });
}
function x6({
  activeTab: e,
  positionerRef: t
}) {
  return jsxs(Fragment, {
    children: [jsx(useCachedSubtree, {
      isVisible: e === AssetCategoryEnum.FIELDS,
      children: () => jsx(xo, {})
    }), jsx(useCachedSubtree, {
      isVisible: e === AssetCategoryEnum.FIND,
      children: () => jsx(xs, {})
    }), jsx(useCachedSubtree, {
      isVisible: e === AssetCategoryEnum.BULK_CREATE,
      children: () => jsx(uF, {})
    }), jsx(useCachedSubtree, {
      isVisible: e === AssetCategoryEnum.SHAPES,
      children: () => jsx(cJ, {
        positionerRef: t
      })
    }), jsx(useCachedSubtree, {
      isVisible: e === AssetCategoryEnum.INSERTS,
      children: () => getFeatureFlags().buzz_plugins ? jsx(cH, {
        positionerRef: t
      }) : jsx(cL, {
        positionerRef: t
      })
    }), jsx(useCachedSubtree, {
      isVisible: e === AssetCategoryEnum.TEXT,
      children: () => jsx(c1, {
        positionerRef: t
      })
    }), jsx(useCachedSubtree, {
      isVisible: e === AssetCategoryEnum.MEDIA,
      children: () => jsx(xW, {})
    }), jsx(useCachedSubtree, {
      isVisible: e === AssetCategoryEnum.TEMPLATES,
      children: () => jsx(x2, {})
    }), getFeatureFlags().buzz_plugins && jsx(useCachedSubtree, {
      isVisible: e === AssetCategoryEnum.PLUGINS,
      children: () => jsx(uH, {
        panelWidth: bQ
      })
    })]
  });
}
function x7({
  onClickNew: e
}) {
  return jsx(Button, {
    variant: 'secondary',
    onClick: e,
    iconPrefix: jsx(_$$x2, {}),
    children: jsx('div', {
      className: 'x78zum5 x6s0dn4',
      children: getI18nString('cooper.templates.new_asset_alt')
    })
  });
}
function x8({
  onClickNew: e,
  canEdit: t
}) {
  let n = selectCurrentFile();
  return jsxs('div', {
    'className': 'x78zum5 x1qughib x6s0dn4 xz9dl7a xnuq7ks xsag5q8 x1gcgh60 xgk9eko x1mxnbhz x1yjdb4r x1tpqehw x1nfngrj',
    'data-fullscreen-prevent-event-capture': !0,
    'data-testid': 'buzz-minimized-header',
    'children': [jsx(_$$x$2, {
      shouldShowFileMenu: !0,
      recordingKey: Fp
    }), n && jsx(_$$s6, {
      openFile: n
    }), t && jsx(x7, {
      onClickNew: e
    })]
  });
}
function x3({
  activeTab: e
}) {
  let t = uW();
  return e === AssetCategoryEnum.PLUGINS && t ? jsx(IconButton, {
    'onClick': () => {
      let e = PluginUIManager.getInstance();
      e?.switchContainer(_$$Wh.MODAL);
      atomStoreManager.set(FP, _$$Wh.MODAL);
    },
    'aria-label': getI18nString('cooper.plugins.open_in_modal'),
    'children': jsx(c_, {})
  }) : null;
}
let x9 = {
  closeableHeaderContainer: {
    ..._$$g2.textBodyLargeStrong,
    display: 'x78zum5',
    justifyContent: 'x1qughib',
    alignItems: 'x6s0dn4',
    paddingTop: 'xz9dl7a',
    paddingRight: 'xnuq7ks',
    paddingBottom: 'xsag5q8',
    paddingLeft: 'x1gcgh60',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  },
  closeableHeaderContainerWithBorder: {
    borderBottom: 'x1n5zjp5',
    borderBottomWidth: null,
    borderBottomStyle: null,
    borderBottomColor: null,
    $$css: !0
  }
};
function po() {
  return jsx('div', {
    style: {
      height: '4px'
    }
  });
}
function pa() {
  let e = Kd();
  let t = _$$J5();
  let n = getObservableValue(AppStateTsApi?.uiState().showMissingFontsButton, !1);
  let {
    shouldShow
  } = _$$A20({
    entrypoint: _$$r3.LEFT_RAIL_FOOTER,
    hideIfNoUpdates: !0,
    initialTabOverride: LibraryTabEnum.UPDATES
  });
  return jsxs(Fragment, {
    children: [jsx(En, {}), jsx(pd, {}), jsx(_$$n7, {
      isLeftRail: !0
    }), jsx(_$$J6, {
      isLeftRail: !0
    }), (e || t || n || shouldShow) && jsxs(Fragment, {
      children: [jsx(po, {}), jsx(po, {}), jsx(po, {}), jsx(_$$A16.Divider, {}), jsx(po, {}), jsx(po, {})]
    }), jsx(ps, {})]
  });
}
function ps() {
  let e = Zr('undo');
  let t = Zr('redo');
  return jsxs(Fragment, {
    children: [jsx(_$$A16.IconButton, {
      disabled: !e,
      active: !1,
      label: getI18nString('fullscreen_actions.undo'),
      icon: createElement(_$$E7),
      onClick: () => fullscreenValue.triggerAction('undo')
    }), jsx(_$$A16.IconButton, {
      disabled: !t,
      active: !1,
      label: getI18nString('fullscreen_actions.redo'),
      icon: createElement(_$$s9),
      onClick: () => fullscreenValue.triggerAction('redo')
    })]
  });
}
function pd() {
  let {
    expanded,
    onClick,
    shouldShow,
    badge
  } = _$$A20({
    entrypoint: _$$r3.LEFT_RAIL_FOOTER,
    hideIfNoUpdates: !0,
    initialTabOverride: LibraryTabEnum.UPDATES
  });
  return shouldShow ? jsx(_$$A16.IconButton, {
    active: expanded,
    label: getI18nString('cooper.inserts.review_library_updates'),
    onClick: () => {
      onClick?.();
    },
    icon: createElement(_$$l3),
    badge
  }, getI18nString('cooper.inserts.review_library_updates')) : null;
}
let pc = getFeatureFlags().buzz_plugins ? [AssetCategoryEnum.TEXT, AssetCategoryEnum.MEDIA, AssetCategoryEnum.INSERTS] : [AssetCategoryEnum.TEXT, AssetCategoryEnum.MEDIA, AssetCategoryEnum.SHAPES, AssetCategoryEnum.INSERTS];
function pu() {
  return jsx('div', {
    style: {
      height: '4px'
    }
  });
}
function px() {
  let [e, t] = useAtomValueAndSetter(assetCategoryAtom);
  let n = useSelectedComponentLibraryKey();
  let l = Xr(Lm);
  let r = Xr(U_);
  let i = trackFileEventWithStore();
  let c = Xr(_$$az);
  let u = isNotInFocusedNodeView();
  let x = useSelector(e => !e.mirror.appModel.isReadOnly);
  let m = cg();
  let h = !u;
  useEffect(() => {
    m && h && pc.includes(e) && t(AssetCategoryEnum.FIELDS);
  }, [m, u, e, t, h]);
  useCooperFrameAssetCategorySwitch();
  let g = useRef(null);
  let f = useCurrentFileKey();
  let b = getObservableValue(AppStateTsApi?.interopToolMode(), SelfDesignType.SELF) === SelfDesignType.DESIGN;
  let j = m && x;
  let y = useCallback(e => {
    i('cooper_panel_switch', {
      product_type: 'buzz',
      fileKey: f,
      panelUserIsSwitchingTo: e,
      panelMode: b ? 'design_view' : 'buzz_view',
      viewMode: u ? 'grid_view' : 'single_asset_view'
    });
  }, [i, f, b, u]);
  let v = useCallback(() => {
    i('cooper_view_mode_switch', {
      product_type: 'buzz',
      fileKey: f,
      currentlyActivePanel: e,
      viewModeUserIsSwitchingTo: u ? 'single_asset_view' : 'grid_view',
      panelMode: b ? 'design_view' : 'buzz_view'
    });
  }, [i, f, u, b, e]);
  let T = useCallback(i => {
    y(i);
    i === AssetCategoryEnum.TEMPLATES && e !== AssetCategoryEnum.TEMPLATES && n && (r('INTERNAL'), l({
      type: mF.TEMPLATES,
      libraryKey: n,
      parentView: {
        type: mF.ALL
      }
    }));
    t(e === i ? AssetCategoryEnum.ASSETS : i);
  }, [e, t, n, l, r, y]);
  return jsx(TE.Provider, {
    value: Gu.LEFT_RAIL,
    children: jsxs(ch.Provider, {
      value: ct.LEFT_RAIL,
      children: [jsxs(_$$A16, {
        children: [jsx(_$$A16.Divider, {}), jsx(pu, {}), jsx(_$$A16.Section, {
          children: jsxs(_$$A16.SegmentedIconButtonGroup, {
            children: [jsx(_$$A16.IconButton, {
              active: !u,
              label: getI18nString('cooper.left_rail.single_asset_view_toggle'),
              icon: createElement(dQ),
              onClick: () => {
                v();
                u ? AppStateTsApi?.cooperFocusView().enterFocusedNodeView() : t(AssetCategoryEnum.ASSETS);
              },
              recordingKey: 'cooperFocusViewToggle',
              dataTestId: 'cooper-focus-view-toggle'
            }), jsx(_$$A16.IconButton, {
              active: u,
              label: getI18nString('cooper.left_rail.grid_view_toggle'),
              icon: createElement(_$$t6),
              onClick: () => {
                v();
                u ? t(AssetCategoryEnum.ASSETS) : (e === AssetCategoryEnum.FIELDS && t(AssetCategoryEnum.ASSETS), AppStateTsApi?.cooperFocusView().exitFocusedNodeViewAndLeavePanelsOpen(), e !== AssetCategoryEnum.ASSETS && AppStateTsApi?.cooperFocusView().flushQueuedAnimation());
              },
              recordingKey: 'cooperGridViewToggle',
              dataTestId: 'cooper-grid-view-toggle'
            })]
          })
        }), b ? jsx(pp, {
          activeTab: e,
          toggleTab: T,
          canEdit: x,
          setCooperTemplateShouldUseAssetType: c,
          isEditingInstancesOnly: m,
          shouldShowDisabledInsertsMessages: j
        }) : jsx(pm, {
          activeTab: e,
          toggleTab: T,
          canEdit: x,
          setCooperTemplateShouldUseAssetType: c,
          isEditingInstancesOnly: m,
          shouldShowDisabledInsertsMessages: j
        }), jsx(_$$A16.Divider, {}), jsxs(_$$A16.Section, {
          children: [jsx(pu, {}), jsx(pu, {}), jsxs(Fragment, {
            children: [h && jsx(_$$A16.IconButton, {
              active: e === AssetCategoryEnum.FIELDS,
              label: getI18nString('cooper.left_rail.fields'),
              icon: createElement(dx),
              onClick: () => T(AssetCategoryEnum.FIELDS),
              disabled: !x,
              recordingKey: 'buzzFieldsButton',
              dataTestId: 'buzz-left-rail-fields-button'
            }, AssetCategoryEnum.FIELDS), jsx(_$$A16.IconButton, {
              active: e === AssetCategoryEnum.BULK_CREATE,
              label: getI18nString('cooper.left_rail.bulk_create'),
              icon: createElement(_$$T4),
              onClick: () => T(AssetCategoryEnum.BULK_CREATE),
              disabled: !x,
              recordingKey: 'buzzBulkCreateButton',
              dataTestId: 'buzz-left-rail-bulk-create-button'
            }, AssetCategoryEnum.BULK_CREATE)]
          })]
        }), jsx(_$$A16.Footer, {
          children: jsx(pa, {})
        })]
      }), jsx('div', {
        className: 'x47corl',
        children: jsx(_$$Q3, {
          ref: g,
          leftOffset: _$$_4,
          children: jsx('div', {
            className: 'x67bb7w',
            children: jsx(x4, {})
          })
        })
      })]
    })
  });
}
function pp({
  activeTab: e,
  toggleTab: t,
  canEdit: n,
  setCooperTemplateShouldUseAssetType: l,
  isEditingInstancesOnly: r,
  shouldShowDisabledInsertsMessages: i
}) {
  return jsxs(_$$A16.Section, {
    children: [jsx(_$$A16.IconButton, {
      active: e === AssetCategoryEnum.TEMPLATES,
      label: getI18nString('cooper.left_rail.templates'),
      icon: createElement(_$$n6),
      onClick: () => {
        t(AssetCategoryEnum.TEMPLATES);
        l(!1);
      },
      disabled: !n,
      recordingKey: 'buzzTemplatesButton',
      dataTestId: 'buzz-left-rail-templates-button'
    }, AssetCategoryEnum.TEMPLATES), jsx(_$$A16.IconButton, {
      active: e === AssetCategoryEnum.INSERTS,
      label: i ? getI18nString('cooper.left_rail.can_t_add_new_layers') : getI18nString('cooper.left_rail.inserts'),
      icon: createElement(_$$s5),
      onClick: () => t(AssetCategoryEnum.INSERTS),
      disabled: r || !n,
      recordingKey: 'buzzInsertsButton',
      dataTestId: 'buzz-left-rail-inserts-button'
    }, AssetCategoryEnum.INSERTS), getFeatureFlags().buzz_plugins && jsx(_$$A16.IconButton, {
      active: e === AssetCategoryEnum.PLUGINS,
      label: getI18nString('cooper.left_rail.plugins'),
      icon: createElement(_$$u8),
      onClick: () => t(AssetCategoryEnum.PLUGINS),
      disabled: !n,
      recordingKey: 'buzzPluginsButton',
      dataTestId: 'buzz-left-rail-plugins-button'
    }, AssetCategoryEnum.PLUGINS)]
  });
}
function pm({
  activeTab: e,
  toggleTab: t,
  canEdit: n,
  setCooperTemplateShouldUseAssetType: l,
  isEditingInstancesOnly: r,
  shouldShowDisabledInsertsMessages: i
}) {
  return jsxs(_$$A16.Section, {
    children: [jsx(_$$A16.IconButton, {
      active: e === AssetCategoryEnum.TEMPLATES,
      label: getI18nString('cooper.left_rail.templates'),
      icon: createElement(_$$n6),
      onClick: () => {
        t(AssetCategoryEnum.TEMPLATES);
        l(!1);
      },
      disabled: !n,
      recordingKey: 'buzzTemplatesButton',
      dataTestId: 'buzz-left-rail-templates-button'
    }, AssetCategoryEnum.TEMPLATES), jsx(_$$A16.IconButton, {
      active: e === AssetCategoryEnum.TEXT,
      label: i ? getI18nString('cooper.left_rail.can_t_add_new_layers') : getI18nString('cooper.left_rail.text'),
      icon: createElement(_$$e8),
      onClick: () => t(AssetCategoryEnum.TEXT),
      disabled: r || !n,
      recordingKey: 'buzzTextButton',
      dataTestId: 'buzz-left-rail-text-button'
    }, AssetCategoryEnum.TEXT), jsx(_$$A16.IconButton, {
      active: e === AssetCategoryEnum.MEDIA,
      label: i ? getI18nString('cooper.left_rail.can_t_add_new_layers') : getFeatureFlags().buzz_unsplash ? getI18nString('buzz.left_rail.media') : getFeatureFlags().buzz_video_export ? getI18nString('cooper.left_rail.images_videos_tooltip') : getI18nString('cooper.left_rail.images'),
      icon: createElement(_$$s4),
      onClick: () => t(AssetCategoryEnum.MEDIA),
      disabled: r || !n,
      recordingKey: 'buzzMediaButton',
      dataTestId: 'buzz-left-rail-images-button'
    }, AssetCategoryEnum.MEDIA), !getFeatureFlags().buzz_plugins && jsx(_$$A16.IconButton, {
      active: e === AssetCategoryEnum.SHAPES,
      label: i ? getI18nString('cooper.left_rail.can_t_add_new_layers') : getI18nString('cooper.left_rail.shapes'),
      icon: createElement(_$$F8),
      onClick: () => t(AssetCategoryEnum.SHAPES),
      disabled: r || !n,
      recordingKey: 'buzzShapesButton',
      dataTestId: 'buzz-left-rail-shapes-button'
    }, AssetCategoryEnum.SHAPES), jsx(_$$A16.IconButton, {
      active: e === AssetCategoryEnum.INSERTS,
      label: i ? getI18nString('cooper.left_rail.can_t_add_new_layers') : getI18nString('cooper.left_rail.inserts'),
      icon: createElement(_$$s5),
      onClick: () => t(AssetCategoryEnum.INSERTS),
      disabled: r || !n,
      recordingKey: 'buzzInsertsButton',
      dataTestId: 'buzz-left-rail-inserts-button'
    }, AssetCategoryEnum.INSERTS), getFeatureFlags().buzz_plugins && jsx(_$$A16.IconButton, {
      active: e === AssetCategoryEnum.PLUGINS,
      label: getI18nString('cooper.left_rail.plugins'),
      icon: createElement(_$$u8),
      onClick: () => t(AssetCategoryEnum.PLUGINS),
      disabled: !n,
      recordingKey: 'buzzPluginsButton',
      dataTestId: 'buzz-left-rail-plugins-button'
    }, AssetCategoryEnum.PLUGINS)]
  });
}
function pf() {
  let e = getObservableValue(AppStateTsApi?.cooperThumbnailEdits(), new Map());
  let t = _$$ie();
  let n = useCooperFrameGuids();
  let {
    width,
    height
  } = _$$Z3();
  return jsx(_$$v5, {
    ids: n,
    thumbnailEdits: e,
    focusedNodeId: t,
    width,
    height
  });
}
function pI() {
  let e = getObservableValue(AppStateTsApi?.interopToolMode(), SelfDesignType.SELF);
  let {
    onlyDetached
  } = useCooperFrameSelectionInfo();
  let n = useCallback(n => onlyDetached && e === SelfDesignType.DESIGN ? DesignWorkspace.DESIGN : n, [e, onlyDetached]);
  let l = P5({
    defaultTab: DesignWorkspace.DESIGN,
    getActiveTab: n
  });
  let r = function () {
    let e = GV();
    let t = getColorFormat();
    let n = Um();
    let l = useSelector(e => e.library);
    let r = useSelector(e => e.mirror.sceneGraphSelection);
    let i = Xo();
    let o = useSelector(e => e.openFile);
    let d = useSelector(e => e.saveAsState);
    let c = useSelector(e => e.installedPluginVersions);
    let u = useSelector(e => e.localPlugins);
    let x = useSelector(e => e.publishedPlugins);
    let p = useSelector(e => e.stylePickerListLayout);
    let m = useSelector(e => e.pickerInStyleCreationShown);
    let h = useSelector(e => e.stylePickerShown);
    let g = useSelector(e => e.modalShown);
    return useMemo(() => ({
      shownPanels: e,
      dropdownShown: n,
      sceneGraphSelection: r,
      library: l,
      pickerShown: i,
      stylePickerListLayout: p,
      colorFormat: t,
      openFile: o,
      allSavedPlugins: c,
      localPlugins: u,
      publishedPlugins: x,
      pickerInStyleCreationShown: m,
      stylePickerShown: h,
      modalShown: g,
      saveAsState: d
    }), [e, n, r, l, i, p, t, o, c, u, x, m, h, g, d]);
  }();
  let i = useAtomWithSubscription(_$$tM);
  let c = i === DesignGraphElements.COMMENTS;
  let u = e === SelfDesignType.DESIGN;
  let x = _$$P7();
  let p = useRef(null);
  let m = useRef(!0);
  return (useEffect(() => {
    m.current ? m.current = !1 : kB(p.current?.offsetWidth || 0);
    l !== DesignWorkspace.COMMENT || EditorPreferencesApi().propertiesPanelSplitPosition.getCopy() !== 0 || u || EditorPreferencesApi().propertiesPanelSplitPosition.set(p.current?.offsetWidth || EditorUIState.propertiesPanelSplitPosition);
  }, [l, x, i, u]), u) ? jsxs(noop, {
    recordingKey: 'propertiesPanel',
    activeTab: l,
    children: [jsx('div', {
      ref: p
    }), i === DesignGraphElements.COMMENTS && jsx(_$$L5, {}), i !== DesignGraphElements.COMMENTS && jsx(_$$Y4, {
      ...r,
      scrollContainer: null
    })]
  }) : c ? jsxs(noop, {
    recordingKey: 'propertiesPanel',
    activeTab: DesignWorkspace.COMMENT,
    children: [jsx('div', {
      ref: p
    }), jsx(_$$L5, {})]
  }) : jsx(noop, {
    recordingKey: 'propertiesPanel',
    activeTab: l !== DesignWorkspace.COMMENT ? l : DesignWorkspace.DESIGN,
    children: jsx('div', {
      ref: p
    })
  });
}
let pC = memo(() => {
  return jsxs(_$$o3, {
    boundaryKey: 'CooperPropertiesPanel',
    children: [jsx(pI, {}), jsx(_$$tZ, {})]
  });
});
function pR({
  paint: e,
  onChange: t,
  additionalControls: n
}) {
  let l = e ? isInvalidValue(e) ? s2 : e : s2;
  let r = getSolidPaint(l);
  let i = validateGradientPaint(l);
  let a = useAppModelProperty('currentSelectedGradientStop');
  let d = getColorAtStop(r ?? i ?? s2, a);
  let c = getColorFormat();
  let {
    currentTool,
    dropdownShown
  } = selectWithShallowEqual(e => ({
    currentTool: e.mirror.appModel.currentTool,
    dropdownShown: e.dropdownShown
  }));
  let p = useDispatch();
  return jsx(S7, {
    dispatch: p,
    color: d,
    currentTool,
    dropdownShown,
    canAcceptStyles: !0,
    canAcceptVariables: !0,
    colorFormat: c,
    onColorChange: t,
    additionalControls: n
  });
}
let pw = `${_$$a}-custom`;
function pL({
  paint: e,
  onClose: t,
  onChange: n,
  initialPosition: l
}) {
  let r = U1();
  return jsx(_$$bL, {
    onClose: t,
    defaultPosition: {
      top: l.y,
      left: l.x
    },
    width: 240,
    ref: r,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText('cooper.inline_menu.fill_panel.custom_color_picker_header')
        })
      }), jsx(DialogBody, {
        padding: 0,
        children: jsx(pR, {
          paint: e,
          onChange: n
        })
      })]
    })
  });
}
let pF = `${_$$a}-library`;
function pB({
  paint: e,
  initialPosition: t,
  onClose: n,
  onPaintChange: l
}) {
  let r = U1();
  let i = useSelectionPropertyValue('numSelectedByType');
  let c = function (e) {
    let t = useDispatch();
    return useCallback(async n => {
      let l = await t(Oe(n));
      let r = VariableIdHandler.fromString(l);
      if (r) {
        e({
          type: 'SOLID',
          opacity: 1,
          visible: !0,
          blendMode: 'NORMAL',
          colorVar: {
            value: {
              alias: VariableIdHandler.toKiwi(r)
            },
            dataType: 'ALIAS',
            resolvedDataType: 'COLOR'
          }
        }, yesNoTrackingEnum.YES);
      }
    }, [t, e]);
  }(l);
  let u = function (e) {
    let t = useDispatch();
    return useCallback((n, l) => {
      t(AV({
        style: n,
        inheritStyleKeyField: e,
        fromSearch: l?.fromSearch
      }));
    }, [t, e]);
  }('inheritFillStyleKey');
  let x = useMemo(() => e && isValidValue(e) ? _$$L6(e) : null, [e]);
  let {
    onToggleLibraryModal
  } = _$$u7({
    entrypoint: _$$r3.COOPER_LIBRARY_COLOR_PICKER,
    modalType: 'editor',
    initialTab: LibraryTabEnum.LIBRARIES
  });
  let h = useMemo(() => new Set(), []);
  let g = useMemo(() => {
    if (i) return _$$aZ2(NodePropertyCategory.FILL, i);
  }, [i]);
  return jsx(_$$bL, {
    onClose: n,
    defaultPosition: {
      top: t.y,
      left: t.x
    },
    width: 240,
    ref: r,
    children: jsxs(DialogContents, {
      children: [jsxs(DialogHeader, {
        children: [jsx(DialogTitle, {
          children: renderI18nText('cooper.inline_menu.fill_panel.library_color_picker.title')
        }), jsx(DialogActionStrip, {
          children: jsx(ButtonPrimitive, {
            onClick: onToggleLibraryModal,
            children: jsx(_$$l3, {})
          })
        })]
      }), jsx(DialogBody, {
        padding: 0,
        children: jsx(Rp, {
          selectedItem: x,
          resolvedType: VariableResolvedDataType.COLOR,
          disabledVariableIds: h,
          pickerType: 'color-picker',
          recordingKey: generateRecordingKey('cooperColorPicker', 'libraryColors'),
          onVariableSelected: c,
          onStyleSelected: u,
          onClose: _$$lQ,
          variableScopes: g
        })
      })]
    })
  });
}
let pG = 'floating_color_picker_panel--gradientControlButton---NCuN';
let pU = 'floating_color_picker_panel--gradientControlButtonInnerContent--1zyI4';
function pK({
  paint: e,
  onPaintChange: t
}) {
  let n = eP();
  let l = useRef(null);
  let r = useSelector(e => e.pickerShown && (e.pickerShown.id === pw || e.pickerShown.id === pF) ? e.pickerShown : null);
  let i = useDispatch();
  let d = useCallback((e, t, n) => {
    if (t.current) {
      let {
        x,
        y
      } = _$$cn(t.current, n);
      i(showPickerThunk({
        id: e,
        initialX: x - 8,
        initialY: y
      }));
    }
  }, [i]);
  let c = useCallback(() => {
    i(hidePickerThunk());
  }, [i]);
  let u = useCallback((e, t, n) => {
    r && r.id === e ? c() : d(e, t, n);
  }, [r, c, d]);
  useEffect(() => {
    n?.panel === eC.COLOR_PICKER && n.args?.openCustomColorPicker && d(pw, l, 240);
  }, [n, l, d]);
  return jsxs(DialogContents, {
    'data-testid': 'cooper-floating-color-picker',
    'children': [jsxs(DialogHeader, {
      children: [jsx(DialogTitle, {
        children: jsx(pW, {
          paint: e
        })
      }), jsx(DialogActionStrip, {
        children: jsx(AutoInteractableWrapper, {
          name: _$$_2.LibraryColorPicker,
          children: jsx(_$$d3, {
            'aria-expanded': !!(r && r.id === pF),
            'aria-label': getI18nString('fullscreen.properties_panel.tooltip_applyStylesAndVariables'),
            'recordingKey': 'cooperFillPanelLibaryPickerButton',
            'htmlAttributes': {
              'data-tooltip': getI18nString('fullscreen.properties_panel.tooltip_applyStylesAndVariables'),
              'data-tooltip-type': KindEnum.TEXT
            },
            'onClick': () => u(pF, l, 240),
            'children': jsx(_$$y2, {})
          })
        })
      })]
    }), jsx(DialogBody, {
      padding: 0,
      children: jsxs('div', {
        className: cssBuilderInstance.flex.flexColumn.$,
        children: [jsx(pH, {
          pickerRef: l,
          paint: e,
          onPaintChange: t,
          onCustomColorClick: e => u(pw, e, 240)
        }), r && r.id === pw && jsx(pL, {
          paint: e,
          initialPosition: new Point(r.initialX, r.initialY),
          onChange: (e, n) => {
            t({
              type: 'SOLID',
              color: e
            }, n);
          },
          onClose: c
        }), r && r.id === pF && jsx(pB, {
          paint: e,
          initialPosition: new Point(r.initialX, r.initialY),
          onClose: c,
          onPaintChange: t
        })]
      })
    })]
  });
}
function pW({
  paint: e
}) {
  if (!e || isInvalidValue(e)) return renderI18nText('cooper.inline_menu.fill_panel.title');
  let t = isGradientType(e.type);
  let n = validateGradientPaint(e);
  return t && n ? renderI18nText('cooper.inline_menu.fill_submenu.gradient') : renderI18nText('cooper.inline_menu.fill_panel.title');
}
function pH({
  pickerRef: e,
  paint: t,
  onPaintChange: n,
  onCustomColorClick: l
}) {
  let r = useSelector(e => e.mirror.appModel.activeCanvasEditModeType);
  let i = Ep();
  let c = useRef(null);
  let u = useDispatch();
  let x = _$$C3();
  let p = useAppModelProperty('currentSelectedGradientStop');
  let m = !t || isInvalidValue(t);
  let h = m ? null : validateGradientPaint(t);
  let g = h !== null;
  return (useEffect(() => {
    g && r !== LayoutTabType.GRADIENT && fullscreenValue.triggerAction('toggle-gradient-edit-mode');
    g || r !== LayoutTabType.GRADIENT || fullscreenValue.triggerAction('leave-edit-mode');
  }, [r, g]), useEffect(() => () => {
    r === LayoutTabType.GRADIENT && fullscreenValue.triggerAction('leave-edit-mode');
  }, [r]), m) ? jsx(sh, {
    pickerRef: e,
    paint: t,
    onPaintChange: n,
    onCustomColorClick: l
  }) : g ? jsxs(Fragment, {
    children: [jsx(KeyboardReceiver, {
      name: 'Cooper gradient picker',
      ref: c,
      handleKeyDown: e => {
        h && T_(e, h, r, p, n);
      },
      focusOnMount: !0,
      forceUpdate: x,
      children: jsx('div', {
        className: 'floating_color_picker_panel--gradientControlContainer--eSs0A',
        ref: e,
        children: jsx(AutoInteractableWrapper, {
          name: _$$_2.Gradient,
          children: jsx(_$$i3, {
            paint: h,
            onChange: n,
            currentSelectedGradientStop: p,
            colorProfile: i,
            hasFocus: !!c.current && c.current.hasFocus(),
            dispatch: u,
            recordingKey: 'cooperGradientControl'
          })
        })
      })
    }), jsx(AutoInteractableWrapper, {
      name: _$$_2.CustomColor,
      children: jsx(pR, {
        paint: t,
        onChange: (e, l) => {
          _$$n8(e, t, p, n, l);
        },
        additionalControls: jsx(pX, {
          gradientPaint: h,
          onChange: n
        })
      })
    })]
  }) : jsx(sh, {
    pickerRef: e,
    paint: t,
    onPaintChange: n,
    onCustomColorClick: l
  });
}
function pX({
  gradientPaint: e,
  onChange: t
}) {
  return jsxs('div', {
    className: 'floating_color_picker_panel--gradientSubmenuButtonsContainer--REE5o',
    children: [jsx('div', {
      className: pG,
      children: jsx(AutoInteractableWrapper, {
        name: _$$_2.FlipGradient,
        children: jsx(ButtonWide, {
          variant: 'secondary',
          onClick: () => {
            if (!e) return;
            let n = e.stops.slice();
            for (let e of n.values()) e.position = _$$H2(1 - e.position);
            let l = e.stopsVar.slice();
            for (let e of l.values()) e.position = _$$H2(1 - e.position);
            sortByPosition(n);
            sortByPositionWithDefault(l);
            t({
              ...e,
              stops: n,
              stopsVar: l
            }, yesNoTrackingEnum.YES);
          },
          disabled: e.stops.length < 2,
          children: jsxs('div', {
            className: pU,
            children: [jsx(_$$F9, {}), renderI18nText('cooper.inline_menu.fill_panel.gradient_flip_button')]
          })
        })
      })
    }), jsx('div', {
      className: pG,
      children: jsx(AutoInteractableWrapper, {
        name: _$$_2.RotateGradient,
        children: jsx(ButtonWide, {
          variant: 'secondary',
          onClick: GradientToolApi?.rotateGradient90Degrees,
          children: jsxs('div', {
            className: pU,
            children: [jsx(_$$R7, {}), renderI18nText('cooper.inline_menu.fill_panel.gradient_rotate_button')]
          })
        })
      })
    })]
  });
}
let pY = ['exposure', 'contrast', 'vibrance', 'temperature', 'tint', 'highlights', 'shadows'];
function pJ({
  paint: e,
  onPaintChange: t,
  interactableId: n
}) {
  let l = useCallback((n, l, r) => {
    !function (e, t, n, l, r) {
      let i = {
        ...e.paintFilter,
        [t]: n
      };
      r({
        ...e,
        paintFilter: i
      }, l ? yesNoTrackingEnum.YES : yesNoTrackingEnum.NO);
    }(e, n, l, r, t);
  }, [e, t]);
  return jsx('div', {
    className: 'x61vf09 x1m21vav',
    children: pY.map(t => jsx(AutoInteractableWrapper, {
      name: n,
      children: jsx(_$$ih, {
        propertyName: t,
        onChange: l,
        filterColorAdjust: e.paintFilter,
        min: t === 'contrast' ? -0.3 : -1,
        max: t === 'contrast' ? 0.3 : 1
      })
    }, t))
  });
}
function pQ({
  imagePaint: e
}) {
  let t = ij();
  return jsx(pJ, {
    paint: e,
    onPaintChange: t,
    interactableId: _$$_2.AdjustImageProperty
  });
}
function p5() {
  let e = useSelector(e => e.mirror.selectionProperties.stateGroupSelectionInfo);
  let t = useSelector(selectSceneGraphSelectionKeys);
  let n = mJ();
  let l = _H();
  let {
    activePanel,
    closePanel
  } = ew();
  useEffect(() => {
    let e = activePanel?.panel === eC.VARIANT_SWAP;
    l.length === 0 && e && closePanel();
  }, [l, closePanel, activePanel]);
  let d = useMemo(() => new Set(e?.selectedStates?.map(e => e.symbol.nodeId)), [e?.selectedStates]);
  let c = useMemo(() => new Map(l.map(e => [e, jsx(_$$lX, {
    item: n.get(e),
    height: 70,
    width: 70,
    className: 'xvk8qkp',
    shouldHideDescription: !0,
    noBackground: !0
  }, e)])), [n, l]);
  return jsx(Fragment, {
    children: Array.from(c.entries()).map(([e, n]) => jsx(AutoInteractableWrapper, {
      name: _$$_2.VariantTile,
      children: jsx(p2, {
        isActive: d.has(e),
        onClick: _$$nc.user('buzz-swap-states', () => {
          let n = {};
          n[e] = t;
          Aw(n);
        }),
        children: n
      })
    }, e))
  });
}
function p2({
  isActive: e,
  onClick: t,
  children: n
}) {
  return jsx(ButtonPrimitive, {
    ..._$$xk(rL.effectToggleButtonContainer, e ? rL.effectToggleButtonContainer_active : null),
    onClick: t,
    children: jsx('div', {
      ..._$$xk(rL.effectToggleButtonContent),
      children: n
    })
  });
}
function p4({
  videoPaint: e
}) {
  let t = ij();
  return jsx(pJ, {
    paint: e,
    onPaintChange: t,
    interactableId: _$$_2.AdjustVideoProperty
  });
}
let p6 = '12px';
let p7 = {
  [eC.COLOR_PICKER]: {
    entireContentsOverride: jsx(() => {
      let [e, t] = function () {
        let e = function () {
          let e = eP();
          return e?.panel === eC.COLOR_PICKER ? e.args?.type ?? 'FILL' : 'FILL';
        }();
        let t = function () {
          let e = useSelector(e => e.mirror.selectionProperties?.fillPaints);
          return {
            paint: isInvalidValue(e) ? MIXED_MARKER : e?.[0],
            onPaintChange: ij()
          };
        }();
        let n = function () {
          let [e, t] = useSelectionProperty('strokePaints');
          return {
            paint: e ? isValidValue(e) ? e[0] : MIXED_MARKER : void 0,
            onPaintChange: useCallback((e, n) => {
              t([e], n);
            }, [t])
          };
        }();
        let l = {
          ...a0()
        };
        switch (e) {
          case 'STROKE':
            return [n, _$$$2.StrokeColorPickerPanel];
          case 'FILL':
          default:
            return [t, _$$$2.FillColorPickerPanel];
          case 'IMAGE_OVERLAY':
            return [l, _$$$2.ImageOverlayColorPickerPanel];
        }
      }();
      return jsx(_$$k4, {
        name: t,
        children: jsx(pK, {
          ...e
        })
      });
    }, {})
  },
  [eC.ADJUST_IMAGE]: {
    headerLeft: getI18nString('cooper.inline_menu.floating_panel.adjust_image'),
    body: jsx(() => {
      let e = function () {
        let e = useSelectionPropertyValue('fillPaints');
        if (!e || isInvalidValue(e)) return null;
        for (let t = e.length - 1; t >= 0; t--) {
          let n = e[t];
          if (n.type === 'IMAGE') return n;
        }
        return null;
      }();
      return e ? jsx(_$$k4, {
        name: _$$$2.AdjustImagePanel,
        children: jsx(pQ, {
          imagePaint: e
        })
      }) : null;
    }, {})
  },
  [eC.ADJUST_VIDEO]: {
    headerLeft: getI18nString('cooper.inline_menu.floating_panel.adjust_video'),
    body: jsx(() => {
      let e = getFeatureFlags().buzz_video_export;
      let t = function () {
        let e = useSelectionPropertyValue('fillPaints');
        if (!e || isInvalidValue(e)) return null;
        for (let t = e.length - 1; t >= 0; t--) {
          let n = e[t];
          if (n.type === 'VIDEO') return n;
        }
        return null;
      }();
      return e && t ? jsx(_$$k4, {
        name: _$$$2.AdjustVideoPanel,
        children: jsx(p4, {
          videoPaint: t
        })
      }) : null;
    }, {})
  },
  [eC.ADJUST_TONE]: {
    headerLeft: getI18nString('cooper.inline_menu.floating_panel.adjust_tone'),
    body: jsx('div', {
      children: getI18nString('cooper.inline_menu.floating_panel.adjust_tone')
    })
  },
  [eC.VARIANT_SWAP]: {
    headerLeft: getI18nString('cooper.inline_menu.floating_panel.variant_swap'),
    body: jsx(() => {
      return jsx(_$$k4, {
        name: _$$$2.VariantSwapPanel,
        children: jsx(aD, {
          children: jsx(ScrollContainer, {
            children: jsx('div', {
              ..._$$xk(rL.effectsContainer),
              children: jsx(p5, {})
            })
          })
        })
      });
    }, {})
  }
};
function p8({
  activePanel: e
}) {
  let t = p7[e];
  let n = U1();
  let {
    closePanel
  } = ew();
  let r = useCallback(() => {
    AppStateTsApi?.uiState().cooperLeftSideOfRightPanel.getCopy() !== 0 && kB(0);
  }, []);
  useEffect(() => (kB(240 + parsePxNumber(p6)), () => {
    kB(0);
  }), []);
  let i = shouldRenderRulers();
  return jsx(_$$bL, {
    onTransform: r,
    onClose: ({
      source: e
    }) => {
      e !== 'outside' && closePanel();
    },
    defaultPosition: {
      top: i ? 'calc(40px + var(--toolbar-height) + var(--editor-banner-height))' : 'calc(20px + var(--toolbar-height) + var(--editor-banner-height))',
      right: p6
    },
    width: 240,
    ref: n,
    children: 'entireContentsOverride' in t ? t.entireContentsOverride : jsxs(DialogContents, {
      children: [jsxs(DialogHeader, {
        children: [jsx(DialogTitle, {
          children: t.headerLeft
        }), jsx(DialogActionStrip, {
          children: t.headerRight
        })]
      }), jsx(DialogBody, {
        padding: 0,
        children: t.body
      })]
    })
  });
}
function p3() {
  let e = useAtomWithSubscription(eO).activePanel?.panel;
  if (!e) return null;
  switch (!0) {
    case ez(e):
      return null;
    case eN(e):
      return jsx(p8, {
        activePanel: e
      }, e);
    default:
      throwTypeError(e);
  }
}
function p9() {
  return jsxs(Fragment, {
    children: [jsx(pC, {}), jsx(p3, {})]
  });
}
function mh({
  children: e
}) {
  return jsx(_$$G3.Provider, {
    value: {
      loggerEventName: 'cooper_navigate'
    },
    children: jsx(_$$s0.Provider, {
      value: {
        allowLibraryPublish: !1
      },
      children: e
    })
  });
}
let mI = memo(({
  pageId: e,
  viewerControl: t
}) => {
  let [{
    previewKeyForErrorBoundary: n,
    buzzInlinePreviewStatus: l,
    sizeInfo: r,
    buzzInlinePreviewPosition: i
  }, s] = useAtomValueAndSetter(t.stateAtom);
  let d = useSceneGraphSelector();
  let c = _$$$8();
  let x = useAnyCooperFrameHasVideoPaint();
  let [, p] = useTransition();
  let m = isInteractionOrEvalMode();
  return (useEffect(() => {
    let e = c[0];
    x && e && !m && l === _$$u.LOAD_PENDING && p(() => {
      s({
        type: 'OPEN_BUZZ_INLINE_PREVIEW',
        payload: {
          sceneGraph: d,
          requestedNodeId: e,
          onOpen: () => {}
        }
      });
    });
  }, [d, c, l, x, s, m]), l !== _$$u.HIDDEN && l !== _$$u.SHOWN) ? null : jsx(ErrorBoundaryCrash, {
    boundaryKey: 'BuzzInlinePreview',
    fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
    onError: () => {
      s({
        type: 'HANDLE_PREVIEW_CRASHED'
      });
    },
    children: jsx(mS, {
      pageId: e,
      viewerControl: t,
      sizeInfo: r,
      position: i,
      buzzInlinePreviewStatus: l
    })
  }, n);
});
let mS = memo(({
  pageId: e,
  viewerControl: t,
  sizeInfo: n,
  position: l,
  buzzInlinePreviewStatus: r
}) => {
  let i = useRef(null);
  let s = useCurrentFileKey();
  let d = r === _$$u.HIDDEN;
  let c = useMemo(() => n?.initialViewerSize ? n.initialViewerSize : {
    x: 400,
    y: 400
  }, [n]);
  return jsx('div', {
    'className': 'x47corl x10l6tqk xb3r6kr x1of6sz5',
    'style': {
      width: c.x,
      height: c.y,
      visibility: d ? 'hidden' : 'visible',
      left: l.left,
      top: l.top,
      ...(d ? {} : {
        animationName: mk,
        animationDuration: '0.1s'
      })
    },
    'data-testid': 'buzz-inline-preview',
    'children': (() => {
      let n = t.ViewerComponent;
      return jsx(n, {
        ref: i,
        backgroundColorHex: 'f5f5f5',
        closeInlinePreview: _$$lQ,
        contentScalingMode: 'fixed',
        iframeFocused: !1,
        isOpen: !0,
        onIframeFocus: _$$lQ,
        openFileKey: s || void 0,
        pageId: e,
        scalingMode: 'contain',
        setIframeFocused: _$$lQ
      }, e);
    })()
  });
});
let mk = 'xekv6nw-B';
let mw = memo(({
  shouldShowDragAndDropBorder: e
}) => {
  let t = useSelector(e => e.progressBarState);
  let n = useCooperFrameGuids();
  let [l, r] = useState(!1);
  let i = _$$dh();
  $k();
  let x = QL(_$$pt.KEY) === _$$pt.VALUE;
  useEffect(() => {
    x && n && n.length === 1 && n[0] && !l && (CooperHelpers?.detachAndReplaceSymbolOnCommunityLoad(n[0]), r(!0));
  }, [x, n, l]);
  let h = getObservableValue(AppStateTsApi?.uiState().showCanvasSearch, !1);
  let g = _$$Lk();
  _$$rE();
  let f = useRef(null);
  let b = useSelector(e => e.openFile);
  let _ = b ? b.key : '';
  let j = useAppModelProperty('showUi');
  let y = useSelector(e => e.universalInsertModal);
  let E = useDispatch();
  Gb(_);
  !function () {
    let {
      Sprig
    } = useSprigWithSampling();
    let t = XF();
    let n = _$$EI();
    let l = l2();
    useEffect(() => {
      t && !l && n && Sprig('track', 'buzz_visited_file');
    }, [Sprig, t, l, n]);
  }();
  return jsxs(mh, {
    children: [jsx(pf, {}), jsxs(_$$sk, {
      children: [j && jsx(eZ, {}), t.mode !== UIVisibilitySetting.OFF && jsx('div', {
        className: _q
      }), jsxs(_$$pO, {
        initialFilterState: {
          currentPage: !1
        },
        children: [getFeatureFlags().buzz_video_export && jsx(mI, {
          pageId: i,
          viewerControl: _$$e1
        }), jsx(qn, {}), getFeatureFlags().buzz_video_export && jsx(W, {}), h && jsx(_$$n9, {}), jsx(_$$G5, {}), jsx(_$$b5, {}), jsx(_$$J8, {}), jsx(XI, {
          commentsDetailContainerRef: f
        }), jsx(Nz, {}), jsx(_$$J7, {}), jsx(dU, {}), jsx('div', {
          ref: f
        }), !isVsCodeEnvironment() && j && jsx(_$$m, {
          'role': 'region',
          'aria-label': getI18nString('buzz.left_panel_label'),
          'children': jsx(px, {})
        }), jsxs(_$$G4, {
          children: [jsx(l7, {}), jsx(_$$o3, {
            boundaryKey: 'CooperRightPanels',
            children: jsx(p9, {})
          }), getFeatureFlags().buzz_video_export && jsx(J, {})]
        }), e && jsx(X5, {})]
      }), jsx(_$$A22, {
        editorType: FEditorType.Cooper,
        openFile: b
      }), jsx(_$$l4, {
        centeredInPanels: !0
      }), y.showing && jsx(ErrorBoundaryCrash, {
        boundaryKey: 'CooperBrowseAllResourcesModal',
        onError: () => {
          E(VisualBellActions.enqueue({
            message: 'Unable to open inserts menu',
            type: 'react-error'
          }));
        },
        fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
        children: jsx(_$$K7, {})
      })]
    }), g && jsx(_$$K6, {
      className: PA,
      children: jsx(_$$s1, {})
    }), jsx(_$$T6, {})]
  });
});
export function $$mL0() {
  let [e, t] = useState(!1);
  return jsx(_$$A.Provider, {
    value: !0,
    children: jsx(_$$c8, {
      children: jsx(_$$v6, {
        setShouldShowDragAndDropBorder: t,
        isDragTarget: !1,
        children: jsx(mw, {
          shouldShowDragAndDropBorder: e
        })
      })
    })
  });
}
export const CooperView = $$mL0;