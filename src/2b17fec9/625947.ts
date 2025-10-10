import { ListItemNode, ListNode } from '@lexical/list';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $isAtNodeEnd } from '@lexical/selection';
import { stylex, props } from '@stylexjs/stylex';
import e_ from 'classnames';
import { $$if, $createParagraphNode, $getRoot, $getSelection, $isRangeSelection, COMMAND_PRIORITY_NORMAL, KEY_DOWN_COMMAND, KEY_TAB_COMMAND } from 'lexical';
import { Fragment as _$$Fragment, createRef, forwardRef, memo, useCallback, useContext, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { useDebounce, useDebouncedCallback } from 'use-debounce';
import { h5 as _$$h4, hs as _$$hs, mb as _$$mb, sv as _$$sv } from '../0c62c2fd/646972';
import { c as _$$c2 } from '../0c62c2fd/790868';
import { n as _$$n7 } from '../2b17fec9/3836';
import { H as _$$H3 } from '../2b17fec9/68162';
import { D as _$$D5, N as _$$N6 } from '../2b17fec9/152433';
import { t as _$$t5 } from '../2b17fec9/172012';
import { W as _$$W2 } from '../2b17fec9/185058';
import { s as _$$s4, w as _$$w } from '../2b17fec9/254940';
import { H as _$$H } from '../2b17fec9/415304';
import { _H as _$$_H, mJ as _$$mJ } from '../2b17fec9/432935';
import { A as _$$A15 } from '../2b17fec9/467175';
import { dQ as _$$dQ, Q6 } from '../2b17fec9/523222';
import { eg as _$$eg3, h$ as _$$h$, L2, Qc } from '../2b17fec9/592383';
import { m as _$$m5 } from '../2b17fec9/628878';
import { hn as _$$hn, Kj } from '../2b17fec9/696626';
import { h as _$$h3 } from '../2b17fec9/813960';
import { D8, Zh } from '../2b17fec9/873436';
import { B as _$$B9 } from '../2b17fec9/927391';
import { W as _$$W4 } from '../2b17fec9/950005';
import { _ as _$$_ } from '../441/351942';
import { u as _$$u2 } from '../441/357009';
import { W as _$$W } from '../441/503702';
import { P as _$$P2 } from '../469e6e40/160324';
import { E as _$$E4 } from '../469e6e40/167556';
import { _ as _$$_4 } from '../469e6e40/273550';
import { J as _$$J9 } from '../469e6e40/430781';
import { t as _$$t4 } from '../469e6e40/489933';
import { J as _$$J8 } from '../469e6e40/985095';
import { eG as _$$eG, BN } from '../573/404275';
import { n as _$$n3 } from '../573/512493';
import { i as _$$i6 } from '../642/423085';
import { J as _$$J } from '../642/485582';
import { k as _$$k6 } from '../642/978258';
import { reportError } from '../905/11';
import { overlayStateAtom } from '../905/12032';
import { isNullOrFailure, useIsLoaded, useIsLoading } from '../905/18797';
import { i as _$$i9 } from '../905/22844';
import { setupPlaybackHandler, getImagePaintSignedUrl } from '../905/23253';
import { a as _$$a6 } from '../905/29104';
import { fullscreenAlias } from '../905/37051';
import { ModalRootComponent } from '../905/38914';
import { TabCategory } from '../905/42189';
import { k as _$$k5 } from '../905/44647';
import { C as _$$C6 } from '../905/47358';
import { ph as _$$ph } from '../905/50769';
import { E as _$$E5 } from '../905/53857';
import { f as _$$f2 } from '../905/54715';
import { N as _$$N3 } from '../905/57692';
import { isCommandEvent, isCommandModifier, isExactModifier, isModifierMatch, KeyCodes, ModifierKeyCodes } from '../905/63728';
import { T as _$$T2 } from '../905/68180';
import { calculateTypography } from '../905/71149';
import { h1 as _$$h, LQ, MX, wm } from '../905/77316';
import { TeamTemplateType } from '../905/79930';
import { setSideHandler } from '../905/80656';
import { generateRetrievingSubscribedComponentsKey } from '../905/92359';
import { W as _$$W3 } from '../905/95038';
import { m as _$$m6 } from '../905/99004';
import { ModalSupportsBackground, registerModal } from '../905/102752';
import { selectWithShallowEqual } from '../905/103090';
import { useNavigateToViewport } from '../905/104740';
import { K as _$$K5 } from '../905/107582';
import { setUniversalInsertScrolledDevelopmentSection } from '../905/116101';
import { sha1HexFromBytes } from '../905/125019';
import { shapeColorAtom, currentSelectionAtom, counterAtom, shapeStrokeStyleAtom, shapeSidebarModeAtom } from '../905/125333';
import { J as _$$J6 } from '../905/125993';
import { KindEnum, PositionEnum } from '../905/129884';
import { A as _$$A60 } from '../905/139173';
import { Tabs } from '../905/150656';
import { popModalStack, showModal, showModalHandler } from '../905/156213';
import { zW } from '../905/162414';
import { ServiceCategories } from '../905/165054';
import { UpsellModalType } from '../905/165519';
import { F as _$$F6 } from '../905/172964';
import { isFullscreenInterceptElement } from '../905/181774';
import { P as _$$P6 } from '../905/184837';
import { InputComponent } from '../905/185998';
import { W as _$$W8 } from '../905/187396';
import { permissionScopeHandler as _$$l, scopeAwareFunction as _$$nc, zk } from '../905/189185';
import { ActionButton } from '../905/189361';
import { oM as _$$oM, F5 } from '../905/192343';
import { D as _$$D6 } from '../905/198083';
import { FormattedInputVariant1 } from '../905/203369';
import { useSingleEffect } from '../905/791079';
import { A as _$$A78 } from '../905/215698';
import { isInvalidValue, isValidValue, MIXED_MARKER, valueOrFallback } from '../905/216495';
import { FlexBox } from '../905/222272';
import { V as _$$V2 } from '../905/223767';
import { Cn } from '../905/225265';
import { labConfigurations, useLabConfiguration } from '../905/226610';
import { n6 as _$$n0 } from '../905/234821';
import { Panel } from '../905/236825';
import { Rectangle } from '../905/249071';
import { A as _$$A2 } from '../905/251970';
import { z as _$$z2 } from '../905/255946';
import { E2, Hr } from '../905/257019';
import { fullscreenHandler } from '../905/258517';
import { y as _$$y4 } from '../905/263077';
import { HiddenLabel } from '../905/270045';
import { H as _$$H6 } from '../905/270307';
import { useSelectionProperty, useUpdateSelectionProperty, useSelectionPropertyValue } from '../905/275640';
import { q as _$$q2 } from '../905/276489';
import { AIActionIterationResult, AIActionIterationStatus, AIActionIterationAction, AIActionIterationTrigger, AIActionMode } from '../905/278499';
import { setupPromptHistory } from '../905/290931';
import { useIsPopoverClosed, PopoverProvider } from '../905/291714';
import { f as _$$f7 } from '../905/299537';
import { O as _$$O3 } from '../905/301080';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { x as _$$x3 } from '../905/312412';
import { r as _$$r } from '../905/319631';
import { MediaQuerySvgComponent } from '../905/331623';
import { f as _$$f8 } from '../905/335032';
import { f6 as _$$f, ri as _$$ri } from '../905/337179';
import { I as _$$I } from '../905/342732';
import { RecordingScrollContainer } from '../905/347284';
import { O as _$$O2 } from '../905/353086';
import { shouldOptimizeForIpad } from '../905/355607';
import { UpgradeAction } from '../905/370443';
import { getUserId, selectCurrentUser } from '../905/372672';
import { $ as _$$$4 } from '../905/379902';
import { recentItemsThunks } from '../905/381612';
import { F as _$$F4 } from '../905/382217';
import { deepEqual } from '../905/382883';
import { Q as _$$Q4 } from '../905/384324';
import { t as _$$t7 } from '../905/398894';
import { X as _$$X2 } from '../905/399133';
import { debugState } from '../905/407919';
import { LazyInputForwardRef } from '../905/408237';
import { O as _$$O4 } from '../905/410575';
import { _ as _$$_2 } from '../905/410717';
import { useModalManager } from '../905/437088';
import { Link } from '../905/438674';
import { IconButton } from '../905/443068';
import { LoadingSpinner } from '../905/443820';
import { analyticsEventManager, trackEventAnalytics } from '../905/449184';
import { L as _$$L2 } from '../905/453756';
import { $ as _$$$3, h as _$$h8 } from '../905/455748';
import { K as _$$K4 } from '../905/459096';
import { AutoLayout } from '../905/470281';
import { PluginImage } from '../905/480825';
import { formatI18nMessage } from '../905/482208';
import { u as _$$u3 } from '../905/486140';
import { useCanShowJoinConfirmation } from '../905/486443';
import { E as _$$E } from '../905/486517';
import { hm as _$$hm, Q0, SX } from '../905/487011';
import { stripHtmlTags } from '../905/491152';
import { SelectGroupLabel, SelectOptionReset, SelectSeparator, SelectContainer, SelectRoot } from '../905/493196';
import { J as _$$J1 } from '../905/494216';
import { Z as _$$Z5 } from '../905/498136';
import { handleAtomEvent } from '../905/502364';
import { ConnectedPointingDropdown, PointingDropdown } from '../905/504727';
import { V as _$$V } from '../905/506207';
import { RecordableDiv, RecordableSpan } from '../905/511649';
import { Vector2D } from '../905/512402';
import { h as _$$h9 } from '../905/513745';
import { C as _$$C } from '../905/520159';
import { Z as _$$Z } from '../905/521211';
import { Button, ButtonLargeWide, ButtonWide } from '../905/521428';
import { processMenuItems as _$$jv } from '../905/525678';
import { c5 as _$$c4 } from '../905/526509';
import { R as _$$R4 } from '../905/531474';
import { h as _$$h5 } from '../905/537858';
import { F as _$$F7 } from '../905/544329';
import { s7 as _$$s5 } from '../905/551193';
import { BaseLinkComponent } from '../905/551536';
import { s as _$$s7 } from '../905/551945';
import { cb as _$$cb2, Xo } from '../905/561689';
import { N as _$$N4 } from '../905/568293';
import { bL as _$$bL4, c$ as _$$c$4 } from '../905/575478';
import { VisualBellIcon } from '../905/576487';
import { x as _$$x5 } from '../905/587214';
import { u as _$$u4 } from '../905/591949';
import { getFeatureFlags } from '../905/601108';
import { Im as _$$Im } from '../905/608145';
import { customHistory } from '../905/612521';
import { setupThemeContext } from '../905/614223';
import { VU } from '../905/625959';
import { ButtonPrimitive } from '../905/632989';
import { b as _$$b4 } from '../905/635568';
import { z as _$$z5 } from '../905/654860';
import { getStorage } from '../905/657224';
import { L as _$$L } from '../905/657783';
import { WAFImage } from '../905/675859';
import { F as _$$F8 } from '../905/680873';
import { p as _$$p8 } from '../905/682418';
import { textDisplayConfig } from '../905/687265';
import { E as _$$E7 } from '../905/690713';
import { PopoverPrimitiveContainer, usePopoverPrimitive } from '../905/691059';
import { TrackingKeyEnum } from '../905/696396';
import { l as _$$l0 } from '../905/697177';
import { getSingletonSceneGraph } from '../905/700578';
import { dG as _$$dG } from '../905/709354';
import { logDebug, logError } from '../905/714362';
import { SvgComponent } from '../905/714743';
import { TabLoop } from '../905/718764';
import { N as _$$N5 } from '../905/720559';
import { n as _$$n5 } from '../905/734251';
import { E as _$$E8 } from '../905/737393';
import { useWindowDimensions } from '../905/745972';
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from '../905/751457';
import { g as _$$g4 } from '../905/757007';
import { getRepoById } from '../905/760074';
import { H as _$$H5 } from '../905/762413';
import { Fj } from '../905/763714';
import { getSelectedFile } from '../905/766303';
import { C as _$$C2 } from '../905/771975';
import { getMentionsResult } from '../905/772425';
import { L as _$$L4 } from '../905/782297';
import { z as _$$z4 } from '../905/788559';
import { trackTemplateEvent } from '../905/793009';
import { useNavigationStack } from '../905/794154';
import { c$ as _$$c$3, l6 as _$$l9, sK as _$$sK, uQ as _$$uQ2 } from '../905/794875';
import { f as _$$f9 } from '../905/809171';
import { EventShield } from '../905/821217';
import { z as _$$z6 } from '../905/821223';
import { KeyboardFocusManager } from '../905/826900';
import { dY as _$$dY, sU as _$$sU, WM } from '../905/838765';
import { useCurrentUserOrg } from '../905/845253';
import { useDropdown, useDropdownState } from '../905/848862';
import { C as _$$C5 } from '../905/850064';
import { c as _$$c6 } from '../905/850166';
import { K as _$$K6 } from '../905/851274';
import { PositioningStrategy } from '../905/858282';
import { isVsCodeEnvironment } from '../905/858738';
import { FDocumentType } from '../905/862883';
import { convertToRgba } from '../905/862913';
import { W as _$$W7 } from '../905/865092';
import { generateUUIDv4 } from '../905/871474';
import { b as _$$b8 } from '../905/874849';
import { setShouldSearchDefaultLibraries } from '../905/879323';
import { uM as _$$uM, wv as _$$wv5 } from '../905/888175';
import { k as _$$k2 } from '../905/888808';
import { is as _$$is } from '../905/904596';
import { createMenuItems as _$$z3 } from '../905/905430';
import { n as _$$n6 } from '../905/913636';
import { e as _$$e3 } from '../905/916195';
import { dayjs } from '../905/920142';
import { Ow } from '../905/921418';
import { useFullscreenReady } from '../905/924253';
import { IntersectionSentinel } from '../905/925868';
import { hideDropdownAction, showDropdownThunk } from '../905/929976';
import { Legend } from '../905/932270';
import { noop } from 'lodash-es';
import { selectUserFlag } from '../905/940356';
import { styleBuilderInstance } from '../905/941192';
import { p as _$$p9 } from '../905/951634';
import { t as _$$t8 } from '../905/958417';
import { CU, z6 } from '../905/963340';
import { a as _$$a5 } from '../905/964520';
import { DialogTriggerButton } from '../905/976845';
import { postUserFlag } from '../905/985254';
import { RelativeTimeDisplay } from '../905/986103';
import { colorCSSManipulatorInstance } from '../905/989956';
import { iN as _$$iN, sx as _$$sx3, Qs } from '../905/992395';
import { D as _$$D7 } from '../905/993374';
import { P as _$$P4 } from '../905/994270';
import { a as _$$a9 } from '../905/996627';
import { x as _$$x4 } from '../1006/523157';
import { d as _$$d8 } from '../1006/820986';
import { ai as _$$ai2, hF as _$$hF2, kL as _$$kL2, Lt as _$$Lt } from '../1006/823759';
import { jk as _$$jk } from '../1006/969977';
import { ew as _$$ew, V6 } from '../1250/12342';
import { l as _$$l2 } from '../1250/91689';
import { bU as _$$bU } from '../1250/506456';
import { q as _$$q } from '../1291/18399';
import { A as _$$A51 } from '../1291/23528';
import { ts as _$$ts2 } from '../1291/62942';
import { _ as _$$_3, e as _$$e5 } from '../1291/265452';
import { $t, _b as _$$_b2, EP, H_, Jd } from '../1291/326519';
import { e as _$$e7, J as _$$J7 } from '../1291/352115';
import { B as _$$B3 } from '../1291/448960';
import { b as _$$b5 } from '../1291/451154';
import { iU as _$$iU } from '../1291/472727';
import { i8 as _$$i2, VR, Wd } from '../1291/533467';
import { uU as _$$uU2, FN, M8, zz } from '../1291/539089';
import { fc as _$$fc, lI as _$$lI, pG as _$$pG, sD as _$$sD, uA as _$$uA, uV as _$$uV, XV as _$$XV, B6, Gv, kb, N9, NY, wE } from '../1291/616526';
import { F as _$$F2 } from '../1291/661220';
import { he as _$$he, lU as _$$lU, OS as _$$OS } from '../1291/813188';
import { K as _$$K2 } from '../1291/825015';
import { C as _$$C4 } from '../1291/839924';
import { Ib as _$$Ib, Rz } from '../1291/846441';
import { S as _$$S2 } from '../1291/885929';
import { g as _$$g3 } from '../1291/914498';
import { J as _$$J3 } from '../1577/181415';
import { A as _$$A6 } from '../2854/769773';
import { m as _$$m7, v as _$$v3 } from '../3276/99493';
import { m as _$$m8 } from '../3276/310657';
import { e as _$$e0 } from '../3276/460810';
import { B as _$$B2 } from '../3276/578394';
import { S as _$$S } from '../3276/591174';
import { z as _$$z } from '../3276/638169';
import { B as _$$B7 } from '../3276/756841';
import { c as _$$c3 } from '../3276/761211';
import { e2 as _$$e6, PE, WZ } from '../3591/130069';
import { A as _$$A5 } from '../3591/199070';
import { tY as _$$tY } from '../3591/828414';
import { S as _$$S4 } from '../3682/343085';
import { d as _$$d3 } from '../3682/659785';
import { s as _$$s8 } from '../3682/764731';
import { A as _$$A69 } from '../4711/136271';
import { I as _$$I3 } from '../5430/292815';
import { d as _$$d5 } from '../5430/535653';
import { I as _$$I2 } from '../5430/750114';
import { A as _$$A7 } from '../5724/568040';
import { A as _$$A17 } from '../6828/70690';
import { A as _$$A52 } from '../6828/364616';
import { A as _$$A73 } from '../6828/493300';
import { A as _$$A10 } from '../6828/564422';
import { A as _$$A9 } from '../6828/625002';
import { A as _$$A11 } from '../6828/727585';
import { _W as _$$_W, nN as _$$nN2 } from '../7492/254275';
import { a as _$$a1 } from '../9410/20763';
import { H as _$$H2 } from '../9410/25542';
import { En } from '../9410/28424';
import { v2 } from '../9410/43374';
import { b as _$$b2, G as _$$G2 } from '../9410/59055';
import { E as _$$E3 } from '../9410/112838';
import { sK as _$$sK2 } from '../9410/124657';
import { u as _$$u } from '../9410/126479';
import { h as _$$h7 } from '../9410/146161';
import { g as _$$g2 } from '../9410/153133';
import { J as _$$J5 } from '../9410/165619';
import { ML } from '../9410/180472';
import { A as _$$A } from '../9410/188255';
import { Z as _$$Z6 } from '../9410/200844';
import { t as _$$t2 } from '../9410/254335';
import { a as _$$a } from '../9410/306437';
import { l as _$$l3 } from '../9410/331071';
import { fQ as _$$fQ, j6 as _$$j3, l7 as _$$l5, m_ as _$$m_, ue as _$$ue, vh as _$$vh, G0, Lf, Ox, Sn, v7 } from '../9410/335206';
import { xw as _$$xw, QY, Zk } from '../9410/351585';
import { d0 as _$$d4, U5 } from '../9410/353422';
import { p as _$$p4 } from '../9410/363670';
import { A5 as _$$A74, ih as _$$ih, CT, SK, SQ } from '../9410/499229';
import { bY as _$$bY } from '../9410/512956';
import { w as _$$w4 } from '../9410/519056';
import { I_, Od } from '../9410/542126';
import { o as _$$o6, S as _$$S3 } from '../9410/565436';
import { nG as _$$nG, tT as _$$tT } from '../9410/584673';
import { y as _$$y } from '../9410/598921';
import { J as _$$J4 } from '../9410/617561';
import { Q as _$$Q } from '../9410/629866';
import { y as _$$y7 } from '../9410/656872';
import { Cb as _$$Cb } from '../9410/659371';
import { Nz, X5 } from '../9410/728210';
import { G as _$$G } from '../9410/729166';
import { dz as _$$dz } from '../9410/733790';
import { es as _$$es, uB as _$$uB, yX as _$$yX, AE, B8, HB, ke, OP, U_, Yg } from '../9410/757252';
import { s as _$$s2 } from '../9410/760762';
import { bX as _$$bX, i1 as _$$i5, AI } from '../9410/772021';
import { n as _$$n9 } from '../9410/774045';
import { $I, cx as _$$cx, e0 as _$$e2, et as _$$et, fL as _$$fL, jG as _$$jG, lO as _$$lO2, m4 as _$$m3, n_ as _$$n_, nN as _$$nN, rs as _$$rs, uU as _$$uU, xB as _$$xB, Fu, H0, HW, kL, ON, SN, Tk, VL, vq, WB, WH, Z$ } from '../9410/787735';
import { P2, qn, XI } from '../9410/793186';
import { c as _$$c } from '../9410/794676';
import { e as _$$e4 } from '../9410/799000';
import { v7 as _$$v4, Lx } from '../9410/896213';
import { v as _$$v } from '../9410/916286';
import { e as _$$e9, f as _$$f5 } from '../9410/917051';
import { DG as _$$DG, Ld as _$$Ld, oC as _$$oC, yn as _$$yn, YR as _$$YR, Av, FJ, Pd, zi } from '../9410/960980';
import { sk as _$$sk } from '../9410/973081';
import { ai as _$$ai3 } from '../9410/974031';
import { l as _$$l4 } from '../9410/990893';
import { _K as _$$_K, ak as _$$ak, BV as _$$BV, c1 as _$$c9, Cu as _$$Cu, dA as _$$dA2, dH as _$$dH2, G7 as _$$G6, h9 as _$$h1, H0 as _$$H7, lm as _$$lm2, pt as _$$pt, qn as _$$qn, rQ as _$$rQ, sJ as _$$sJ, Vq as _$$Vq3, xf as _$$xf2, yc as _$$yc2, CB, D5, EW, Gg, H$, HK, I5, JK, kj, Mi, N$, QD, QZ, R8, Un, Yl, zp } from '../9410/995608';
import { T as _$$T3 } from '../940032c6/307867';
import { d as _$$d6 } from '../c5e2cae0/368426';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { getWorkshopModeStatus, isWorkshopModeEnabled, useCurrentFileWorkshopModeStatus } from '../figma_app/789';
import { Dm, K9, LO } from '../figma_app/8833';
import { canPerformAction, canRunExtensions } from '../figma_app/12796';
import { y as _$$y5 } from '../figma_app/13082';
import { DZ, Ff, SO } from '../figma_app/15042';
import { w5 } from '../figma_app/15924';
import { atomWithReducer, atom, createLocalStorageAtom, useAtomValueAndSetter, useAtomWithSubscription, useSetAtom } from '../figma_app/27355';
import { cv$, Dts, fh1, if6, N5f, nwk, S3e, tRI, xM9, Yub } from '../figma_app/27776';
import { Lz } from '../figma_app/27927';
import { ec as _$$ec2 } from '../figma_app/29089';
import { bi as _$$bi, cT as _$$cT, g_ as _$$g_, n0 as _$$n, xT as _$$xT, GQ, qm, Ye, Yh } from '../figma_app/32128';
import { lD as _$$lD, T9 } from '../figma_app/38430';
import { pO as _$$pO } from '../figma_app/42945';
import { TeamFileCountsByTeamId } from '../figma_app/43951';
import { CommunityPageType, hasMonetizedResourceMetadata, HubTypeEnum, ResourceTypeNoComment, ShelfViewType } from '../figma_app/45218';
import { FEditorType } from '../figma_app/53721';
import { f as _$$f4 } from '../figma_app/58113';
import { getViewportInfo, getViewportZoom, isRectInside, roundedDivision, scaleRect, viewportToScreen } from '../figma_app/62612';
import { Q as _$$Q3, r as _$$r5 } from '../figma_app/67145';
import { O as _$$O } from '../figma_app/71774';
import { teamLibraryCache } from '../figma_app/80990';
import { getObservableOrFallback, getObservableValue } from '../figma_app/84367';
import { getPublishedWidgetWithPayment, isResourcePaymentFailed, getResourcePaymentFromState, getPluginWithPayment, checkResourceEligibility } from '../figma_app/86989';
import { lM as _$$lM, tJ as _$$tJ, Al, DH, T1 } from '../figma_app/90441';
import { beginRenaming } from '../figma_app/91703';
import { isNotNullish, isNullish } from '../figma_app/95419';
import { eE as _$$eE, Fz } from '../figma_app/106207';
import { zD as _$$zD } from '../figma_app/109758';
import { gR as _$$gR, ts as _$$ts, LR, zo } from '../figma_app/120210';
import { bu as _$$bu, n8 as _$$n2, tO as _$$tO, xG as _$$xG } from '../figma_app/121043';
import { Lk } from '../figma_app/122682';
import { createStartVotingSessionKey, deleteVotingSessionThunk, setTitle, unsetHoveredInModalVotePin, setVotesPerUserLimit, deselectVotePin, dismissJoinConfirmation, startVotingSession, exportVotingSessionAsCsv, setVotingSessionInfo, endVotingSession, setHoveredInModalVotePin, selectVotePin, createEndVotingSessionKey } from '../figma_app/124493';
import { getColorForMultiplayer, multiplayerColors } from '../figma_app/136698';
import { V as _$$V4 } from '../figma_app/144634';
import { DF } from '../figma_app/146384';
import { syncRecentPluginsThunk, syncRecentWidgetsThunk } from '../figma_app/147952';
import { Tv as _$$Tv, uQ as _$$uQ3, I9 } from '../figma_app/151869';
import { canIncrementTimer, TIMER_THRESHOLD_MS, hasTimerRunEnough, isTimerDone, MAX_TIMER_DURATION_MS, TIMER_INCREMENT_STEP, isTimerPausedAndStarted, TIMER_ONBOARDING_EVENT, isTimerFinished, getTimeRemaining, playTimerChime, getTotalSeconds, padTime } from '../figma_app/152368';
import { sE as _$$sE, zS as _$$zS2, BV } from '../figma_app/153399';
import { getPluginAllowListKey, getWidgetAllowListKey, hasLocalFileId, PluginType } from '../figma_app/155287';
import { _b as _$$_b } from '../figma_app/162641';
import { FileKindEnum } from '../figma_app/162807';
import { b as _$$b9, c as _$$c8 } from '../figma_app/166989';
import { useDeepEqualSceneValue, useSingleSceneValue } from '../figma_app/167249';
import { buildUploadUrl, getInitialOptions, getLocaleFallbacks } from '../figma_app/169182';
import { getPluginManager } from '../figma_app/170366';
import { s3 as _$$s6, TH as _$$TH, F1, kz, qI } from '../figma_app/171177';
import { OU } from '../figma_app/175258';
import { dh as _$$dh, nn as _$$nn } from '../figma_app/186343';
import { RECENT_PLUGINS_FIGJAM, RECENT_WIDGETS_FIGJAM } from '../figma_app/190980';
import { _D as _$$_D, _Y as _$$_Y, OL } from '../figma_app/191312';
import { parseColorFormat } from '../figma_app/191804';
import { isWorkshopModeActive } from '../figma_app/193867';
import { Xq } from '../figma_app/194956';
import { fetchActiveSong, areSongArraysEqual, isSameSong, isStale } from '../figma_app/198387';
import { yesNoTrackingEnum } from '../figma_app/198712';
import { getHubFileVersionOrDefault, FileTypeSwitch, getTemplateActionLabel } from '../figma_app/198840';
import { CF, kB } from '../figma_app/201703';
import { ah as _$$ah, Ai as _$$Ai, oW as _$$oW, sz as _$$sz, Hf } from '../figma_app/204478';
import { xl as _$$xl } from '../figma_app/212260';
import { DropdownThemeProvider } from '../figma_app/215667';
import { fetchShelvesForShelfTypeThunk } from '../figma_app/216696';
import { yU as _$$yU } from '../figma_app/221114';
import { OptionComponent, DropdownWithScrim, SeparatorComponent } from '../figma_app/236327';
import { $s, _U as _$$_U, aq as _$$aq, d5 as _$$d2, du as _$$du, eu as _$$eu, iJ as _$$iJ, lK as _$$lK, lO as _$$lO, m3 as _$$m2, pD as _$$pD, uI as _$$uI, uO as _$$uO2, yR as _$$yR, zk as _$$zk, GN, Jg, KQ, Kv, kv, NQ, OS, Pr, qA, QA, qD, UC, w4, Xi, Yu, YV, Zu } from '../figma_app/240545';
import { oW as _$$oW3 } from '../figma_app/247611';
import { cK as _$$cK, dR as _$$dR, hN as _$$hN, Gt, RK } from '../figma_app/248118';
import { l as _$$l7 } from '../figma_app/265420';
import { h_ as _$$h_, oQ as _$$oQ, tJ as _$$tJ2, JX, Mp, P0, VM } from '../figma_app/269100';
import { DialogBody, DialogContents, DialogFooter, DialogHeader } from '../figma_app/272243';
import { queryDefaultLibrariesMeta, getLibraryNameByKey, useLibraryItemsAndMetadata, libraryKeyToNameAtom } from '../figma_app/275938';
import { filterArrayByEditorTypeAndMemo } from '../figma_app/279454';
import { W6 as _$$W5, Jm } from '../figma_app/287316';
import { useSubscription } from '../figma_app/288654';
import { useFocusArea } from '../figma_app/290668';
import { mS as _$$mS, wR, zD } from '../figma_app/293326';
import { kw } from '../figma_app/298911';
import { b as _$$b6 } from '../figma_app/300024';
import { filterPublishedResources, filterResourcesByOrgId, getCurrentPluginVersion, getPluginMetadata, getPluginVersion, pluginMetadata } from '../figma_app/300692';
import { useSingleSelectedKey, useSceneGraphSelectionKeys } from '../figma_app/311375';
import { R as _$$R2 } from '../figma_app/313269';
import { logAndTrackCTA, trackFileEvent } from '../figma_app/314264';
import { KD, O1 } from '../figma_app/317394';
import { bJ as _$$bJ, dO as _$$dO, ft as _$$ft, H4 as _$$H4, l1 as _$$l8, RJ as _$$RJ, Sn as _$$Sn, tz as _$$tz, xc as _$$xc, yt as _$$yt, zS as _$$zS, A0, Ac, J1, JV, KL, Pg, Wl } from '../figma_app/318123';
import { d4 as _$$d7, Fk as _$$Fk2, nB as _$$nB2, rT as _$$rT, te as _$$te, Xb as _$$Xb, AZ, Dz, Id, Mv, Uq } from '../figma_app/325158';
import { B as _$$B6 } from '../figma_app/327027';
import { isBigmaEnabledAlias } from '../figma_app/336853';
import { bE as _$$bE, k as _$$k7, p6 as _$$p6, tj as _$$tj, U9 as _$$U3, xp as _$$xp2, yp as _$$yp, zD as _$$zD2, E5, FC, LK, MC, X4 } from '../figma_app/340893';
import { Tj } from '../figma_app/342207';
import { U1 } from '../figma_app/343967';
import { ek as _$$ek, fT as _$$fT, pf as _$$pf, vD as _$$vD, vo as _$$vo, yw as _$$yw, DP, KE, KG, ko, Ln, N0, Nd, UH, vz, z9 } from '../figma_app/351862';
import { p as _$$p3 } from '../figma_app/353099';
import { ResourceType } from '../figma_app/354658';
import { getKeyboardShortcut, isActionEnabled } from '../figma_app/357047';
import { useMobileGestures } from '../figma_app/358450';
import { fc as _$$fc2, Z0 as _$$Z3, DL } from '../figma_app/359152';
import { $g, gr as _$$gr, nj as _$$nj, OL as _$$OL, qy as _$$qy, Sg, XG } from '../figma_app/360824';
import { isPrimaryLocaleEnglish } from '../figma_app/363242';
import { eX as _$$eX, nm as _$$nm, tA as _$$tA, w5 as _$$w3, XH } from '../figma_app/366203';
import { Cs as _$$Cs, M8 as _$$M4 } from '../figma_app/368611';
import { B as _$$B5, M as _$$M5 } from '../figma_app/371825';
import { G as _$$G3 } from '../figma_app/373780';
import { initializeLocalPluginsThunk } from '../figma_app/378195';
import { Aw } from '../figma_app/383828';
import { stopPresenting } from '../figma_app/385215';
import { pauseTimerThunk, pauseMusicThunk, stopMusicThunk, resetSelectedSongAndMusicStartTime, ACTIVE_SONG_NOT_FOUND, setTimerModalThunk, startMusicThunk, resumeTimerThunk, setMusicStandaloneVolumeThunk, updateEditorDocumentTitle, setMusicIsMutedThunk, getLastReceivedSongTimestamp, updateMusicSongIdThunk, setStartChimePlayed, fetchActiveSongsThunk, startTimerThunk, stopTimerThunk, adjustTimerThunk, setStandaloneMusicPlayer } from '../figma_app/389091';
import { aq as _$$aq2, Xt } from '../figma_app/399472';
import { lJ as _$$lJ3 } from '../figma_app/407856';
import { S4 } from '../figma_app/407993';
import { uv as _$$uv, CR } from '../figma_app/419216';
import { cortexAPI } from '../figma_app/432652';
import { PaymentSection, PaymentInfoTooltip, PaymentButton } from '../figma_app/439332';
import { $n as _$$$n, wv as _$$wv4, K0, W1 } from '../figma_app/439493';
import { usePresenterUser } from '../figma_app/440875';
import { U as _$$U2 } from '../figma_app/441035';
import { bo as _$$bo } from '../figma_app/447445';
import { fu as _$$fu2, iH as _$$iH, jm as _$$jm, lG as _$$lG, nw as _$$nw, At, Mh, O$ } from '../figma_app/449975';
import { J as _$$J2, kv as _$$kv, AW } from '../figma_app/451499';
import { eg as _$$eg, o3 as _$$o3 } from '../figma_app/452252';
import { fullscreenValue } from '../figma_app/455680';
import { isAIFeaturesEnabledForCurrentUser } from '../figma_app/459490';
import { OP as _$$OP } from '../figma_app/463678';
import { useCurrentPlanUser, useCurrentPrivilegedPlan, useIsOrgGuestUser } from '../figma_app/465071';
import { throwTypeError } from '../figma_app/465776';
import { IntegrationUtils, isGoogleMeetIntegration } from '../figma_app/469876';
import { buildCommunityPath } from '../figma_app/471982';
import { equals } from '../figma_app/476572';
import { ContactViewMode } from '../figma_app/477548';
import { R1 } from '../figma_app/479760';
import { P as _$$P5 } from '../figma_app/483257';
import { $3, op as _$$op, QP } from '../figma_app/487970';
import { clamp } from '../figma_app/492908';
import { LinkPrimitive } from '../figma_app/496441';
import { qq as _$$qq } from '../figma_app/514229';
import { selectCurrentFile, useCurrentFileKey } from '../figma_app/516028';
import { L as _$$L3 } from '../figma_app/520315';
import { Ht, O9 } from '../figma_app/522930';
import { B as _$$B8 } from '../figma_app/539422';
import { userFlagAtomFamily } from '../figma_app/545877';
import { rN as _$$rN, yx as _$$yx, BI, F4, kM, Kx } from '../figma_app/546509';
import { getOrgPublishedWidgetsThunk, getResourceVersionsThunk, unpublishedWidgetsQuery, unpublishedPluginsQuery, getOrgPublishedPluginsThunk } from '../figma_app/559491';
import { IW } from '../figma_app/563413';
import { sendUrlToParent } from '../figma_app/564528';
import { uL as _$$uL, k6, w8 } from '../figma_app/565197';
import { i as _$$i4 } from '../figma_app/566312';
import { setupResourceAtomHandler } from '../figma_app/566371';
import { zN } from '../figma_app/579169';
import { I as _$$I5 } from '../figma_app/583780';
import { jz as _$$jz2, C3, NE } from '../figma_app/587765';
import { lX as _$$lX } from '../figma_app/588397';
import { _z as _$$_z, ec as _$$ec, Rs as _$$Rs, Wh } from '../figma_app/599095';
import { vB as _$$vB } from '../figma_app/602467';
import { F as _$$F3 } from '../figma_app/603239';
import { PluginCallbacks } from '../figma_app/603466';
import { es as _$$es2, fF as _$$fF, FN as _$$FN, fV as _$$fV, hZ as _$$hZ, jJ as _$$jJ, sM as _$$sM, UH as _$$UH, w4 as _$$w2, Zj as _$$Zj, assertNotNullish, Cb, Cd, LY, Oo, TQ, Uy, wg } from '../figma_app/610446';
import { En as _$$En } from '../figma_app/613182';
import { Yv } from '../figma_app/616107';
import { WithTrackedButton, WithTrackedIconButton } from '../figma_app/617427';
import { usePaginatedTeamTemplates, hasTemplateEntity, useRecentTemplates, getCurrentTemplateEntity, useTeamTemplates, useOrgTemplates } from '../figma_app/622574';
import { processImageWithThumbnail } from '../figma_app/624361';
import { $ as _$$$5, jo as _$$jo, Ld } from '../figma_app/629335';
import { Ru } from '../figma_app/630194';
import { JT } from '../figma_app/632248';
import { PrimaryWorkflowEnum } from '../figma_app/633080';
import { Z9 } from '../figma_app/634656';
import { ButtonBasePrimary, ButtonSecondary } from '../figma_app/637027';
import { ai as _$$ai, hF as _$$hF, jZ as _$$jZ, kL as _$$kL, oO as _$$oO, D9, FY, Hp, QR, z4, ZS } from '../figma_app/639798';
import { Ii, Yk } from '../figma_app/644079';
import { k as _$$k3 } from '../figma_app/644304';
import { cd as _$$cd2, W1 as _$$W6, xY as _$$xY2, HL, Wj, WW, YR } from '../figma_app/650460';
import { randomPick } from '../figma_app/656233';
import { Fl, wW } from '../figma_app/656450';
import { N as _$$N7 } from '../figma_app/659940';
import { x as _$$x } from '../figma_app/669294';
import { createEmbedAnalyticsHandler, LinkMetadataEvent } from '../figma_app/671547';
import { Zr } from '../figma_app/678782';
import { canRequestExtension, isWhitelistEnforcedAndRequestsAllowed } from '../figma_app/684168';
import { Z as _$$Z2 } from '../figma_app/684783';
import { I as _$$I4 } from '../figma_app/688563';
import { formatPublisherNames } from '../figma_app/690075';
import { i as _$$i7 } from '../figma_app/690245';
import { _o as _$$_o, L3 } from '../figma_app/701001';
import { PH } from '../figma_app/701580';
import { rp as _$$rp, PI } from '../figma_app/703988';
import { PreviewMode } from '../figma_app/707808';
import { useResizeObserverRef } from '../figma_app/708845';
import { useAppModelProperty, useCurrentTool, useIsProgressBarHiddenOrLocked, useSceneGraphSelection, useSceneGraphSelector } from '../figma_app/722362';
import { uiGrayColor5 } from '../figma_app/728075';
import { lB as _$$lB, EE } from '../figma_app/731583';
import { getCurrentOrgAdminInfo } from '../figma_app/740025';
import { clearSelection, replaceSelection } from '../figma_app/741237';
import { M as _$$M6 } from '../figma_app/750676';
import { TH } from '../figma_app/751648';
import { cortexAnalyticsPluginIds, isHandbrakeDisabledForCurrentUser } from '../figma_app/757723';
import { v as _$$v2 } from '../figma_app/759243';
import { cF as _$$cF, QP as _$$QP2, V as _$$V5, v1 } from '../figma_app/761984';
import { AppStateTsApi, CanvasSearchHelpers, CollaborationType, ColorOptions, Command, ConfirmationLevel, ConnectorType, CustomPosition, DesignGraphElements, DiagramElementType, EditAction, EligibilityStatus, Fullscreen, ImageToolsBindings, InteractionCpp, IPanelType, LayoutTabType, MentionsCppBindings, MindmapCppBindings, NavigationDirection, NodePropertyCategory, PointerAction, SelectionState, SessionStatus, ShapeSidebarMode, Side, SourceType, TransactionCommand, UIVisibilitySetting, UserActionState, UserInterfaceElements, ViewType, VisibilityState, WhiteboardAiVisualCppBindings, WhiteboardCanvasAIBindings, WhiteboardFeatures, WhiteboardStarterKitCppBindings, WhiteboardTsApi } from '../figma_app/763686';
import { A3, Fn, k2, SC } from '../figma_app/769101';
import { getResourceTaglineOrDescription } from '../figma_app/777551';
import { K0 as _$$K7 } from '../figma_app/778125';
import { BrowserInfo, isAnyMobile, isIpadDevice, isMobileNotFigmaMobile, isNotMobile } from '../figma_app/778880';
import { wV } from '../figma_app/779965';
import { parsePxInt, parsePxNumber } from '../figma_app/783094';
import { wi as _$$wi, T$, WC } from '../figma_app/792783';
import { _d as _$$_d } from '../figma_app/795674';
import { mW as _$$mW } from '../figma_app/797994';
import { Ro } from '../figma_app/805373';
import { getProductPriceString, hasTrialAvailable } from '../figma_app/808294';
import { memoizeByArgs } from '../figma_app/815945';
import { trackRemovesSong, trackOpensMusicDropdown, trackStopsSong, trackChangesSong, trackPlaysSong } from '../figma_app/818609';
import { i as _$$i } from '../figma_app/825649';
import { TrackedButton, TrackingProvider } from '../figma_app/831799';
import { ez as _$$ez2, um as _$$um2 } from '../figma_app/835718';
import { ie as _$$ie, jP as _$$jP, jW as _$$jW, lR as _$$lR, A$, Kr } from '../figma_app/837500';
import { comparePluginsByName, getLocalPlugins, getPendingPublisherWidgets, getPendingPublisherWidgetsForCurrentUser, isPendingPublisherForCurrentUser, useAllowlistedPlugins, useAllowlistedWidgets, useDedupedRecentlyUsedPlugins, useDedupedRecentlyUsedWidgets, useExtensionAllowlist, useFilteredWidgets, useInstalledPluginsAndWidgets, useLocalPluginsByPluginId, useLocalPluginsExcludingWidgets, usePluginAllowlistValidation, usePublishingPlugins, useUserPublishedPlugins, useUserPublishedWidgets } from '../figma_app/844435';
import { j5 as _$$j0, o5 as _$$o7, VA } from '../figma_app/844818';
import { C as _$$C3 } from '../figma_app/859828';
import { MenuContainerComp, MenuGroupComp, MenuHiddenTitleComp, MenuItemComp, MenuItemTrail, MenuRootComp, MenuSeparator, MenuSubText, setupMenu } from '../figma_app/860955';
import { lt as _$$lt2, tV as _$$tV, Br, Fg } from '../figma_app/862108';
import { Ag as _$$Ag, B3, qy, RL } from '../figma_app/862289';
import { isStarterUserAtom } from '../figma_app/864723';
import { RJ } from '../figma_app/869006';
import { y as _$$y2 } from '../figma_app/873852';
import { desktopAPIInstance } from '../figma_app/876459';
import { generateRecordingKey, useHandleMouseEvent } from '../figma_app/878298';
import { Ho } from '../figma_app/878651';
import { Bj, QK } from '../figma_app/882116';
import { forwardKeyboardEvent, handleKeyboardEventByState, KeyboardEventResponse } from '../figma_app/896988';
import { isInteractionPathCheck } from '../figma_app/897289';
import { trackFileEventWithStore, trackFileEventWithUser } from '../figma_app/901889';
import { M as _$$M } from '../figma_app/904127';
import { II, MR, OO, qM, qU } from '../figma_app/913518';
import { fi as _$$fi, zK } from '../figma_app/913823';
import { CURATOR_GLOBAL_REQUEST_CLOSE, FigJamMenuEvents } from '../figma_app/916469';
import { ConfirmationModal2 } from '../figma_app/918700';
import { Badge, BadgeColor } from '../figma_app/919079';
import { cX as _$$cX, ik as _$$ik, mk as _$$mk, s3 as _$$s3, t$ as _$$t$, H6, Hb, kx, qZ, Sp } from '../figma_app/920333';
import { useLatestRef } from '../figma_app/922077';
import { searchStartSession, generateSessionId } from '../figma_app/925970';
import { base64ToUint8Array, kebabToCamel, pluralize } from '../figma_app/930338';
import { ZE } from '../figma_app/932285';
import { swapToSharedComponent, useFileLibrarySubscriptions } from '../figma_app/933328';
import { $x, _3 as _$$_7, _E as _$$_E, pf as _$$pf2, Vq as _$$Vq, B9, JI, MY, Pi, Ud } from '../figma_app/942553';
import { Ay as _$$Ay5 } from '../figma_app/948389';
import { Vi } from '../figma_app/955650';
import { _q as _$$_q } from '../figma_app/957070';
import { _0 as _$$_5 } from '../figma_app/957552';
import { FK, zq, zx } from '../figma_app/961422';
import { Ay as _$$Ay6, dA as _$$dA, nG as _$$nG2, s_ as _$$s_ } from '../figma_app/967857';
import { FETCH_FIGJAM_DEFAULT_INSERTS, fetchFigjamDefaultInsertsThunk } from '../figma_app/968813';
import { fG as _$$fG2, gp as _$$gp } from '../figma_app/973927';
import { o1 as _$$o5 } from '../figma_app/975811';
import { toggleDropdown } from '../figma_app/976345';
import { getCurrentFileType } from '../figma_app/976749';
import { Rt, Vq } from '../figma_app/979658';
import { A as _$$A53 } from '../quill_composer/816110';
import { A as _$$A56 } from '../svg/4968';
import { A as _$$A46 } from '../svg/16090';
import { A as _$$A16 } from '../svg/16929';
import { A as _$$A47 } from '../svg/31321';
import { A as _$$A30 } from '../svg/32481';
import { A as _$$A48 } from '../svg/39247';
import { A as _$$A1 } from '../svg/55550';
import { A as _$$A71 } from '../svg/82981';
import { A as _$$A55 } from '../svg/124734';
import { A as _$$A37 } from '../svg/126114';
import { A as _$$A43 } from '../svg/130281';
import { A as _$$A67 } from '../svg/130563';
import { A as _$$A57 } from '../svg/131550';
import { A as _$$A80 } from '../svg/142056';
import { A as _$$A76 } from '../svg/147826';
import { A as _$$A81 } from '../svg/164251';
import { A as _$$A12 } from '../svg/164913';
import { A as _$$A36 } from '../svg/178650';
import { A as _$$A58 } from '../svg/198988';
import { A as _$$A27 } from '../svg/226895';
import { A as _$$A41 } from '../svg/237376';
import { A as _$$A63 } from '../svg/247653';
import { A as _$$A64 } from '../svg/304791';
import { A as _$$A31 } from '../svg/312185';
import { A as _$$A45 } from '../svg/319662';
import { A as _$$A19 } from '../svg/325101';
import { A as _$$A0 } from '../svg/336063';
import { A as _$$A42 } from '../svg/359179';
import { A as _$$A39 } from '../svg/376762';
import { A as _$$A77 } from '../svg/391784';
import { A as _$$A75 } from '../svg/395314';
import { A as _$$A28 } from '../svg/413459';
import { A as _$$A25 } from '../svg/415790';
import { A as _$$A24 } from '../svg/445748';
import { A as _$$A34 } from '../svg/449783';
import { A as _$$A62 } from '../svg/450549';
import { A as _$$A49 } from '../svg/483451';
import { A as _$$A44 } from '../svg/520385';
import { A as _$$A59 } from '../svg/537361';
import { A as _$$A40 } from '../svg/576394';
import { A as _$$A8 } from '../svg/586486';
import { A as _$$A70 } from '../svg/636746';
import { A as _$$A68 } from '../svg/681750';
import { A as _$$A29 } from '../svg/687403';
import { A as _$$A54 } from '../svg/689063';
import { A as _$$A26 } from '../svg/724074';
import { A as _$$A35 } from '../svg/738401';
import { A as _$$A20 } from '../svg/830323';
import { A as _$$A32 } from '../svg/848964';
import { A as _$$A72 } from '../svg/854311';
import { A as _$$A79 } from '../svg/861766';
import { A as _$$A23 } from '../svg/869552';
import { A as _$$A65 } from '../svg/870386';
import { A as _$$A82 } from '../svg/871455';
import { A as _$$A38 } from '../svg/883901';
import { A as _$$A33 } from '../svg/886126';
import { A as _$$A18 } from '../svg/888006';
import { A as _$$A21 } from '../svg/894028';
import { A as _$$A66 } from '../svg/915517';
import { A as _$$A22 } from '../svg/952632';
import { A as _$$A13 } from '../svg/972494';
import { n as _$$n8 } from '../vendor/110313';
import { A as _$$A14 } from '../vendor/211731';
import { D as _$$D3 } from '../vendor/212109';
import eM from '../vendor/223926';
import { P as _$$P3 } from '../vendor/348225';
import { E as _$$E6 } from '../vendor/464923';
import ek from '../vendor/656470';
import { a as _$$a7 } from '../vendor/683966';
import { $convertFromMarkdownString, $convertToMarkdownString, ORDERED_LIST, UNORDERED_LIST } from '../vendor/693164';
import { Te } from '../vendor/813803';
import { Q as _$$Q2 } from '../vendor/898216';
import { $ as _$$$2 } from '../vendor/909072';
import { G as _$$G4 } from '../vendor/947080';
let n;
let r;
let a;
let s;
let M = R1;
function D(e) {
  let {
    dispatch,
    targetRect,
    user,
    typeahead,
    onInsert,
    onClear,
    setTypeahead
  } = e;
  let [c, u] = useState(null);
  let p = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  let h = scaleRect(p, targetRect);
  if (!isRectInside(h, p)) return null;
  let m = {
    top: h.y + p.y + h.height + 8,
    right: h.x + p.x,
    bottom: h.y + p.y + h.height + 8,
    left: h.x + p.x,
    height: 0,
    width: 0
  };
  let f = c && m.top + c > p.height ? _$$ri.UPWARDS : _$$ri.DOWNWARDS;
  let _ = {
    left: m.left,
    bottom: p.height - h.y + 8
  };
  let x = _$$f({
    ...e,
    targetRect: m,
    direction: f,
    positionFromBottom: _
  });
  return jsx(_$$E, {
    dispatch,
    entity: user,
    onClear,
    onInsert,
    recordingKey: 'canvasMentionsTypeahead',
    setMaxTypeaheadHeight: u,
    setTypeahead,
    typeahead,
    width: 300,
    ...x,
    getAdditionalMetadata: e => 'has_permission' in e && !e.has_permission ? getI18nString('whiteboard.editor_mentions_typeahead.not_in_file') : null,
    zIndex: M
  });
}
async function Y(e, t, i, n, r, a) {
  let {
    trackEventForFile,
    searchSessionId,
    mentionedByUserId,
    nodeId,
    store
  } = a;
  try {
    let a = (await _$$L.getCanvasMentionsFileNeedsInvite({
      fileKey: e,
      mentionedUserId: n.id
    })).data.meta.needs_invite;
    r(postUserFlag({
      has_used_canvas_mentions: !0
    }));
    let p = _$$x(nodeId, store);
    trackEventForFile('canvas_mention_created', {
      ...p,
      search_session_id: searchSessionId,
      mention_id: t,
      mentioned_user_id: n.id,
      mentioned_by_user_id: mentionedByUserId,
      mentioned_user_can_view_file: !a
    }, {
      forwardToDatadog: !0
    });
    a && r(VisualBellActions.enqueue({
      message: getI18nString('whiteboard.visual_bell.canvas_at_mentions_mentioned_user_will_be_invited_to_file', {
        handle: n.handle
      }),
      button: {
        text: getI18nString('whiteboard.visual_bell.canvas_at_mentions_mentioned_undo_invite'),
        action: () => {
          trackEventForFile('canvas_mention_undo_invite', {
            ...p,
            search_session_id: searchSessionId,
            mention_id: t,
            mentioned_user_id: n.id,
            mentioned_by_user_id: mentionedByUserId,
            mentioned_user_can_view_file: !a
          }, {
            forwardToDatadog: !0
          });
          _$$l.user('undo-at-mention', () => MentionsCppBindings.removeMention(i, t));
        }
      }
    }));
  } catch (e) {
    reportError(ServiceCategories.FIGJAM, e);
  }
}
function X() {
  let e = useDispatch<AppDispatch>();
  let t = selectCurrentUser();
  let [i, n] = useAtomValueAndSetter(LQ);
  let r = useAtomWithSubscription(MX);
  let {
    onInsert,
    onClear
  } = function (e) {
    let t = useDispatch<AppDispatch>();
    let [i, n] = useAtomValueAndSetter(LQ);
    let [r, a] = useAtomValueAndSetter(_$$h);
    let [s, o] = useAtomValueAndSetter(wm);
    let u = zW({
      checkPermissions: ContactViewMode.VIEW_OR_PENDING
    });
    let h = useCurrentFileKey();
    let m = trackFileEventWithStore();
    let f = !!i?.mentions;
    let _ = s === '';
    let x = useStore();
    let g = useSelector(e => function (e) {
      let t = Object.keys(e);
      return t.length === 0 ? null : t[0];
    }(e.mirror.sceneGraphSelection));
    useEffect(() => {
      let e = !1;
      if (r === null) {
        n(null);
        return;
      }
      let t = setTimeout(async () => {
        let t = await getMentionsResult(r, u, !1);
        let i = !!t?.mentions;
        e || (f && !i && (m('canvas_mention_search_no_results', {
          ..._$$x(g, x)
        }), t = {
          mentions: [],
          index: 0,
          maxMentions: 0,
          type: 'mentions',
          search: r
        }), i && _ && o(generateSessionId()), n(t));
      }, 100);
      return function () {
        clearTimeout(t);
        e = !0;
      };
    }, [t, u, r, _, o, n, f, m, g, x]);
    return {
      onInsert: useCallback(() => {
        if (i && i.mentions && i.mentions[i.index] && e?.id) {
          let n = i.mentions[i.index];
          let r = _$$l.user('insert-at-mention', () => MentionsCppBindings.replaceCurrentMentionsQueryWithMention({
            mentionedUserId: n.id,
            mentionedByUserId: e.id,
            handle: n.handle
          }));
          h && r.mentionId && Y(h, r.mentionId, r.stablePath, n, t, {
            trackEventForFile: m,
            searchSessionId: s,
            mentionedByUserId: e.id,
            nodeId: g ?? '',
            store: x
          });
        }
      }, [i, e?.id, s, h, x, t, m, g]),
      onClear: useCallback(() => {
        m('canvas_mention_search_cancelled', {
          ..._$$x(g, x)
        });
        a(null);
      }, [a, m, g, x])
    };
  }(t);
  return !r || !i || !t || i.mentions.length === 0 && !i.search || Fl(t.id) || t.sharing_restricted ? null : jsx(D, {
    dispatch: e,
    targetRect: r,
    user: t,
    typeahead: i,
    onInsert,
    onClear,
    setTypeahead: n
  });
}
function er({
  children: e
}) {
  return jsx(_$$G3.Provider, {
    value: {
      loggerEventName: 'figjam_navigate'
    },
    children: e
  });
}
let ex = e_;
let eR = ek;
let eD = eM;
let eU = new _$$J2();
let eF = new AW();
let eH = () => new Map([['SQUARE', [getI18nString('whiteboard.shape_keywords.rectangle')]], ['ELLIPSE', [getI18nString('whiteboard.shape_keywords.circle'), getI18nString('whiteboard.shape_keywords.connector')]], ['ROUNDED_RECTANGLE', [getI18nString('whiteboard.shape_keywords.pill'), getI18nString('whiteboard.shape_keywords.terminator')]], ['DIAMOND', [getI18nString('whiteboard.shape_keywords.decision')]], ['TRIANGLE_UP', []], ['TRIANGLE_DOWN', [getI18nString('whiteboard.shape_keywords.merge')]], ['PARALLELOGRAM_RIGHT', [getI18nString('whiteboard.shape_keywords.data'), getI18nString('whiteboard.shape_keywords.input'), getI18nString('whiteboard.shape_keywords.output')]], ['PARALLELOGRAM_LEFT', [getI18nString('whiteboard.shape_keywords.data'), getI18nString('whiteboard.shape_keywords.input'), getI18nString('whiteboard.shape_keywords.output')]], ['ENG_DATABASE', [getI18nString('whiteboard.shape_keywords.database')]], ['ENG_QUEUE', [getI18nString('whiteboard.shape_keywords.data'), getI18nString('whiteboard.shape_keywords.storage'), getI18nString('whiteboard.shape_keywords.queue')]], ['ENG_FILE', []], ['ENG_FOLDER', []], ['TRAPEZOID', [getI18nString('whiteboard.shape_keywords.manual_operation')]], ['STAR', []], ['SHIELD', [getI18nString('whiteboard.shape_keywords.off_page_connector')]], ['HEXAGON', [getI18nString('whiteboard.shape_keywords.preparation')]], ['PENTAGON', []], ['OCTAGON', []], ['PLUS', [getI18nString('whiteboard.shape_keywords.cross'), getI18nString('whiteboard.shape_keywords.and')]], ['PREDEFINED_PROCESS', []], ['MANUAL_INPUT', []], ['CHEVRON', [getI18nString('whiteboard.shape_keywords.step'), getI18nString('whiteboard.shape_keywords.process')]], ['DOCUMENT_SINGLE', []], ['DOCUMENT_MULTIPLE', []], ['ARROW_LEFT', []], ['ARROW_RIGHT', []], ['SUMMING_JUNCTION', [getI18nString('whiteboard.shape_keywords.and')]], ['OR', []], ['SPEECH_BUBBLE', [getI18nString('whiteboard.shape_keywords.comment'), getI18nString('whiteboard.shape_keywords.quote')]], ['INTERNAL_STORAGE', []]]);
function eB(e) {
  return [eU.format(e).toLowerCase(), ...((n || (n = eH()), n).get(e) || [])];
}
let eV = () => new Map([['ELBOWED', [getI18nString('whiteboard.connector_keywords.angled'), getI18nString('whiteboard.connector_keywords.arrow'), getI18nString('whiteboard.connector_keywords.bent'), getI18nString('whiteboard.shape_keywords.connector'), getI18nString('whiteboard.connector_keywords.curved'), getI18nString('whiteboard.connector_keywords.elbowed'), getI18nString('whiteboard.connector_keywords.edge'), getI18nString('whiteboard.connector_keywords.line'), getI18nString('whiteboard.connector_keywords.turn')]], ['STRAIGHT', [getI18nString('whiteboard.connector_keywords.arrow'), getI18nString('whiteboard.connector_keywords.edge'), getI18nString('whiteboard.shape_keywords.connector'), getI18nString('whiteboard.connector_keywords.line'), getI18nString('whiteboard.connector_keywords.straight')]], ['STRAIGHT_NO_ENDPOINTS', [getI18nString('whiteboard.connector_keywords.edge'), getI18nString('whiteboard.shape_keywords.connector'), getI18nString('whiteboard.connector_keywords.line'), getI18nString('whiteboard.connector_keywords.straight')]], ['CURVED', [getI18nString('whiteboard.connector_keywords.angled'), getI18nString('whiteboard.connector_keywords.arrow'), getI18nString('whiteboard.connector_keywords.bent'), getI18nString('whiteboard.shape_keywords.connector'), getI18nString('whiteboard.connector_keywords.edge'), getI18nString('whiteboard.connector_keywords.line'), getI18nString('whiteboard.connector_keywords.turn'), getI18nString('whiteboard.connector_keywords.curved')]]]);
let eK = new _$$kv();
let eW = 'DEFAULT_CONTAINING_FRAME_PLACEHOLDER';
let ez = new Map();
function eZ(e) {
  if (e.startsWith(_$$yR)) {
    let t = Fullscreen?.getShapeWithTextTypeFromToolString(e);
    if (t) return ez.get(t);
  }
  return ez.get(e);
}
function e$(e, t, i = !1) {
  let n = getFeatureFlags().ad_branded_shapes_m1;
  ez.clear();
  Object.entries(e.libraryKeyToSubscribedItems).forEach(([e, t]) => {
    t?.forEach(t => {
      ez.set(_$$yw(t), {
        type: 'library',
        item: t,
        libraryKey: e
      });
    });
  });
  let r = Object.keys(e.libraryKeyToSubscribedItems).map(i => {
    let r = e.libraryKeyToSubscribedItems[i]?.filter(e => !t || t.includes(e.library_key));
    let a = eD()(r, e => e.containing_frame?.name ?? eW);
    let s = e.subscribedFiles.find(e => e.library_key === i)?.name || '';
    return Object.keys(a).sort((e, t) => _$$pf(s, e).localeCompare(_$$pf(s, t))).map(e => {
      let t = e !== eW ? e : void 0;
      let r = {
        title: n ? s : t ? `${_$$pf(s)} - ${_$$pf(s, t)}` : _$$pf(s),
        items: a[e],
        libraryKey: i
      };
      t && (r.librarySubCategory = t);
      return r;
    });
  });
  let a = KQ.map(e => ({
    swtCollectionType: e,
    shapes: _$$aq.get(e) ?? []
  }));
  a.forEach(({
    shapes: e
  }) => {
    e.forEach(e => {
      ez.set(e, {
        type: 'swt',
        shapeType: e
      });
    });
  });
  let s = ['STRAIGHT_NO_ENDPOINTS', 'STRAIGHT', 'ELBOWED'];
  getFeatureFlags().ad_curved_connectors && s.push('CURVED');
  i && s.push('MINDMAP_TREE_NUCLEUS');
  s.length === 5 && s.shift();
  return {
    swtData: a,
    shapeLibraryData: eR()(r),
    connectorData: s
  };
}
function eY({
  connectorData: e,
  swtData: t,
  shapeLibraryData: i
}) {
  return e.length === 0 && t.length === 0 && i.length === 0;
}
function eX(e, t) {
  return e.every(e => t.some(t => t.startsWith(e)));
}
let eq = e => e.toLowerCase().trim();
let eJ = e => eq(e).split(/\s+/);
function eQ(e, t) {
  let i = eJ(getI18nString('whiteboard.shapes_sidebar.connections'));
  let n = eJ(getI18nString('whiteboard.shapes_sidebar.connectors'));
  let a = eJ(getI18nString('whiteboard.shapes.mindmap'));
  let s = eJ(t);
  return e.filter(e => e === 'MINDMAP_TREE_NUCLEUS' ? eX(s, [...i, ...a]) : eX(s, [...i, ...n, ...[eF.format(e).toLowerCase(), ...((r || (r = eV()), r).get(e) || [])].reduce((e, t) => [...e, ...eJ(t)], [])]));
}
function e0(e, t) {
  let i = [];
  let n = eJ(t);
  e.forEach(({
    swtCollectionType: e,
    shapes: t
  }) => {
    let r = eJ(eK.format(e));
    let a = t.filter(e => eX(n, [...r, ...eB(e).reduce((e, t) => [...e, ...eJ(t)], [])]));
    a.length !== 0 && i.push({
      swtCollectionType: e,
      shapes: a
    });
  });
  return i;
}
function e1(e, t) {
  let i = [];
  let n = eJ(t);
  e.forEach(({
    libraryKey: e,
    librarySubCategory: t,
    title: r,
    items: a
  }) => {
    let s = [...eJ(r)].concat(t ? eJ(t) : []);
    let o = a.filter(e => eX(n, [...s, ...eJ(e.name)]));
    o.length !== 0 && i.push({
      libraryKey: e,
      librarySubCategory: t,
      title: r,
      items: o
    });
  });
  return i;
}
let ti = atom({});
let tn = createLocalStorageAtom('diagramming-shapes-sidebar-section-expanded-state', {});
var tr = (e => (e[e.Recents = 0] = 'Recents', e[e.Connectors = 1] = 'Connectors', e[e.SWT = 2] = 'SWT', e[e.Advanced = 3] = 'Advanced', e[e.OtherLibrary = 4] = 'OtherLibrary', e[e.OtherLibraryCategory = 5] = 'OtherLibraryCategory', e))(tr || {});
function ta(e) {
  let t = useAtomWithSubscription(_$$Ai);
  let i = useAtomValueAndSetter(ti);
  let n = useAtomValueAndSetter(tn);
  return useMemo(() => {
    let r = [];
    for (let {
      localStorageKey,
      sectionType,
      isDefaultExpanded
    } of e) {
      if (!localStorageKey) {
        r.push([!0, () => {}]);
        continue;
      }
      let [e, l] = !function ({
        isSearching: e,
        sectionType: t
      }) {
        switch (t) {
          case 4:
          case 5:
            return !0;
          default:
            return !e;
        }
      }({
        sectionType,
        isSearching: t
      }) ? i : n;
      let d = isDefaultExpanded ?? (t || ![4, 5].includes(sectionType));
      r.push([e[localStorageKey] ?? d, t => {
        l({
          ...e,
          [localStorageKey]: t
        });
      }]);
    }
    return r;
  }, [t, n, e, i]);
}
function ts(e) {
  let t = {};
  ta(e).forEach(([i], n) => {
    let r = e[n]?.localStorageKey;
    r && (t[r] = i);
  });
  return t;
}
function to(e) {
  return ta([e])[0] ?? [!0, () => {}];
}
function tl({
  title: e,
  localStorageKey: t,
  sectionType: i,
  onboardingKey: n,
  totalItems: r,
  useStrongTypography: a = !0,
  isDefaultExpanded: s,
  testIdPrefix: d
}) {
  let [c, u] = to({
    localStorageKey: t,
    sectionType: i,
    isDefaultExpanded: s
  });
  let p = useCallback(() => {
    u(!c);
  }, [c, u]);
  return jsx(ButtonPrimitive, {
    className: _$$uU,
    onClick: p,
    htmlAttributes: {
      'data-testid': `${d ? `${d}-` : ''}${Pr}-${e}`,
      'data-onboarding-key': n ?? '',
      'data-total-items': r ?? 0
    },
    children: jsx(tc, {
      title: e,
      isExpanded: c,
      useStrongTypography: a
    })
  });
}
function td({
  title: e,
  localStorageKey: t,
  sectionType: i,
  showUpsellBanner: n,
  onboardingKey: r,
  totalItems: a,
  testIdPrefix: s,
  children: l
}) {
  let [d] = to({
    localStorageKey: t,
    sectionType: i
  });
  return jsxs(Fragment, {
    children: [jsx(tl, {
      title: e,
      sectionType: i,
      localStorageKey: t,
      onboardingKey: r,
      totalItems: a,
      testIdPrefix: s
    }), n && d && jsx(tu, {}), d && l]
  });
}
function tc({
  title: e,
  isExpanded: t,
  useStrongTypography: i
}) {
  return jsxs(Fragment, {
    children: [jsx('div', {
      ...props(i ? textDisplayConfig.textBodyMediumStrong : textDisplayConfig.textBodyMedium),
      children: e
    }), jsx('div', {
      className: 'xm2njfp x8x9d4c',
      children: t ? jsx(_$$l2, {
        'aria-label': getI18nString('whiteboard.shapes_sidebar.collapse_section')
      }) : jsx(_$$k2, {
        'aria-label': getI18nString('whiteboard.shapes_sidebar.expand_section')
      })
    })]
  });
}
function tu({
  libraryTitle: e
}) {
  let t = _$$uB();
  return jsxs('div', {
    className: _$$m3,
    children: [jsx('div', {
      className: 'x1sf2cm4 x1j6dyjg x2b8uid x1e56ztr',
      children: e ? getI18nString('whiteboard.shapes_sidebar.upgrade_cta.library', {
        libraryTitle: e
      }) : getI18nString('whiteboard.shapes_sidebar.upgrade_cta')
    }), jsx(ButtonLargeWide, {
      onClick: t,
      children: jsx('span', {
        ...props(textDisplayConfig.textBodyMediumStrong),
        children: getI18nString('whiteboard.shapes_sidebar.view_plans')
      })
    })]
  });
}
let th = 'shapes_sidebar_empty_search_result--emptyResultsLabelQuery--SQlGl';
function tm({
  query: e
}) {
  let [t, i] = useAtomValueAndSetter(_$$ah);
  let n = t ? renderI18nText('whiteboard.shapes_sidebar.search.empty.library', {
    searchQuery: jsx('span', {
      className: th,
      children: e
    }),
    libraryTitle: t
  }) : renderI18nText('whiteboard.shapes_sidebar.search.empty.global', {
    searchQuery: jsx('span', {
      className: th,
      children: e
    })
  });
  return jsxs('div', {
    'className': 'shapes_sidebar_empty_search_result--emptyResultsLabelContainer--tLDfu',
    'data-testid': _$$lO,
    'children': [jsx('span', {
      className: 'shapes_sidebar_empty_search_result--emptyResultsLabel--rY-Xq',
      children: n
    }), t ? jsx(ButtonPrimitive, {
      onClick: () => i(void 0),
      children: jsx('span', {
        className: 'xggk2y7 x1y0c0v0 x2b8uid',
        children: renderI18nText('whiteboard.shapes_sidebar.search.search_all')
      })
    }) : null]
  });
}
let tC = (e, t) => [e, t].join('');
function tT(e, t) {
  if (e) return t ? `shapeLibrary-${e}-${t}` : `shapeLibrary-${e}`;
}
function tE({
  item: e,
  addToRecentsBehavior: t,
  toolSetSource: i,
  isLocked: n,
  metadata: r,
  testId: a
}) {
  useSingleEffect(() => {
    (async () => {
      try {
        await teamLibraryCache.getCanvas(e);
      } catch (e) {
        logError('error', 'teamLibraryItemSceneGraphCache.getCanvas', e);
      }
    })();
  });
  let s = r && r.id ? _$$vo(r.id, e.name) : '';
  let d = HB(e);
  let u = useAtomWithSubscription(shapeSidebarModeAtom) === i;
  let [h, m] = useAtomValueAndSetter(Hf);
  let f = useCallback(() => {
    KG(e, i, s);
    ko({
      event: _$$fT.SelectedShape,
      shape: e.name,
      searchState: h
    });
    m({
      state: 'complete'
    });
  }, [e, h, m, i, s]);
  let _ = useCallback(() => z9(e, t), [e, t]);
  let x = U_();
  let g = _$$yX();
  let j = r?.id ? N0(r.id, e.name, 'sidebar') : void 0;
  let b = j ? jsx(tO, {
    iconSrc: j,
    name: e.name
  }) : null;
  let y = r?.id === _$$iJ ? $s : _$$du;
  return jsx(_$$lX, {
    ThumbnailOverride: b,
    buttonProps: {
      onItemClick: n ? g : f,
      onItemDoubleClick: n ? void 0 : _,
      onFocus: n ? void 0 : f,
      onBlur: x
    },
    className: n ? $I : d && u ? WB : Fu,
    draggable: n ? void 0 : {
      afterSuccessfulInsert: i => {
        (e.type === PrimaryWorkflowEnum.COMPONENT || e.type === PrimaryWorkflowEnum.STATE_GROUP) && KE(_$$yw(e), t, getInitialOptions().user_data?.id);
      },
      onDragStart: () => {
        fullscreenValue.triggerActionEnum(Command.SET_TOOL_DEFAULT);
        Ln();
      },
      onPointerUp: UH
    },
    height: y,
    isFigJam: !0,
    isSearch: !1,
    item: e,
    noBackground: !0,
    shouldHideDescription: !0,
    shouldShowShadowOnHover: !0,
    showName: !1,
    testId: a,
    thumbPaddingGrid: j ? 0 : 16,
    tooltipOverride: s || void 0,
    width: y
  });
}
function tS({
  title: e,
  sectionType: t,
  libraryIcon: i,
  totalItems: n,
  onboardingKey: r,
  testIdPrefix: a,
  localStorageKey: s
}) {
  let [d, c] = to({
    localStorageKey: s,
    sectionType: t
  });
  let u = useCallback(() => {
    c(!d);
  }, [d, c]);
  return jsxs(ButtonPrimitive, {
    className: WH,
    htmlAttributes: {
      'data-testid': `${a ? `${a}-` : ''}${_$$uI}-${e}`,
      'data-onboarding-key': r ?? '',
      'data-total-items': n
    },
    onClick: u,
    children: [jsx('div', {
      className: VL,
      children: i
    }), jsxs('div', {
      className: HW,
      children: [jsx('p', {
        children: _$$pf(e)
      }), n ? jsx('p', {
        className: _$$xB,
        children: getI18nString('whiteboard.shapes_sidebar.shapes_count', {
          numShapes: n
        })
      }) : null]
    }), d ? jsx(_$$k2, {
      'aria-label': getI18nString('whiteboard.shapes_sidebar.collapse_section')
    }) : jsx(_$$l2, {
      'aria-label': getI18nString('whiteboard.shapes_sidebar.expand_section')
    })]
  });
}
function tw({
  title: e,
  icon: t,
  count: i,
  onClick: n,
  onboardingKey: r,
  testIdPrefix: a
}) {
  return jsxs(ButtonPrimitive, {
    className: WH,
    htmlAttributes: {
      'data-testid': `${a ? `${a}-` : ''}${_$$uI}-${e}`,
      'data-onboarding-key': r ?? '',
      'data-total-items': i
    },
    onClick: n,
    children: [jsx('div', {
      className: VL,
      children: t
    }), jsxs('div', {
      className: HW,
      children: [jsx('p', {
        children: _$$pf(e)
      }), jsx('p', {
        className: _$$xB,
        children: getI18nString('whiteboard.shapes_sidebar.shapes_count', {
          numShapes: i
        })
      })]
    }), jsx(_$$e3, {
      className: _$$nN
    })]
  });
}
let tI = [_$$iJ];
function tL(e, t) {
  return tI.includes(e[0]) && !tI.includes(t[0]) ? -1 : !tI.includes(e[0]) && tI.includes(t[0]) ? 1 : e[0].localeCompare(t[0]);
}
let tN = ({
  data: e,
  isLocked: t,
  isExpanded: i,
  isConsolidatedLibrary: n,
  sectionType: r,
  showUpsellBanner: a,
  hasSectionHeader: s,
  onboardingKey: l,
  metadataByLibraryKey: d,
  isDefaultExpanded: u
}) => {
  let p = _$$pf(e.title, e.librarySubCategory);
  return tB({
    isExpanded: i,
    headerInfo: s ? {
      title: p,
      localStorageKey: tT(e.libraryKey, e.librarySubCategory),
      sectionType: r,
      libraryIcon: Nd(e.title),
      key: tC(e.libraryKey, e.librarySubCategory ?? e.title),
      onboardingKey: l,
      totalItems: e.items.length,
      testIdPrefix: UC,
      isConsolidatedLibrary: n,
      useStrongTypography: !0,
      isDefaultExpanded: u
    } : void 0,
    items: e.items,
    getTile: i => jsx(tE, {
      item: i,
      metadata: d?.[i.library_key],
      addToRecentsBehavior: ConfirmationLevel.YES,
      toolSetSource: ShapeSidebarMode.SHAPES_SIDEBAR_REGULAR,
      isLocked: t,
      testId: `${e.title}-${Kv}-${i.id}`
    }, i.id),
    showUpsellBanner: a,
    libraryId: d?.[e.libraryKey]?.id
  });
};
function tA({
  libraryKey: e,
  title: t,
  items: i,
  metadataByLibraryKey: n,
  canShowUpsellBanner: r,
  librarySubCategory: a
}) {
  let s = _$$es();
  let d = _$$ek(i[0]?.library_key, n);
  let u = useMemo(() => {
    let e = i[0]?.library_key;
    if (e) return n?.[e]?.id === _$$iJ ? D8 : void 0;
  }, [i, n]);
  return jsx(td, {
    title: t,
    localStorageKey: tT(e, a),
    sectionType: tk({
      isAdvancedLibrary: d,
      isSubCategory: !!a
    }),
    showUpsellBanner: r && s,
    onboardingKey: u,
    totalItems: i.length,
    testIdPrefix: UC,
    children: i.map(e => jsx(tE, {
      item: e,
      metadata: n?.[e.library_key],
      addToRecentsBehavior: ConfirmationLevel.YES,
      toolSetSource: ShapeSidebarMode.SHAPES_SIDEBAR_REGULAR,
      isLocked: s,
      testId: `${t}-${Kv}-${e.id}`
    }, e.id))
  });
}
function tO({
  iconSrc: e,
  name: t,
  testIdPrefix: i = 'shapes-library-item-tile-thumb-override',
  variant: n = 'sidebar'
}) {
  return jsx('div', {
    'className': ex()({
      [vq]: n === 'sidebar',
      [_$$et]: n === 'swapper'
    }),
    'data-testid': `${i}-${t}`,
    'data-svg-no-gray-fill': !0,
    'children': jsx(SvgComponent, {
      svg: e,
      className: _$$lO2
    })
  });
}
function tk({
  isAdvancedLibrary: e,
  isSubCategory: t
}) {
  return e ? tr.Advanced : t ? tr.OtherLibraryCategory : tr.OtherLibrary;
}
let tR = 'recents';
function tM({
  metadataByLibraryKey: e
}) {
  let t = B8();
  let i = useAtomWithSubscription(shapeColorAtom);
  let n = useAtomWithSubscription(shapeStrokeStyleAtom);
  let r = _$$es();
  if (t.length < 1) return null;
  let a = t.slice(0, qA);
  return jsx(td, {
    title: getI18nString('whiteboard.shapes_sidebar.recents'),
    localStorageKey: tR,
    sectionType: tr.Recents,
    children: a.map(t => {
      let a = eZ(t);
      return a ? a.type === 'library' ? jsx(tE, {
        item: a.item,
        addToRecentsBehavior: ConfirmationLevel.YES_WITHOUT_REORDER,
        toolSetSource: ShapeSidebarMode.SHAPES_SIDEBAR_RECENTS,
        testId: `recents-${Kv}-${a.item.id}`,
        isLocked: r,
        metadata: e?.[a.item.library_key]
      }, `recents-${a.item.id}`) : jsx(_$$h3, {
        shapeType: a.shapeType,
        color: i,
        strokeStyleType: n,
        addToRecentsBehavior: ConfirmationLevel.YES_WITHOUT_REORDER,
        toolSetSource: ShapeSidebarMode.SHAPES_SIDEBAR_RECENTS,
        testId: `recents-${QA}-${a.shapeType}`,
        recordingKey: generateRecordingKey(_$$eu, `${QA}-${a.shapeType}`)
      }, `recents-${a.shapeType}`) : null;
    })
  });
}
let tD = new _$$kv();
let tP = e => `shapesWithText-${e}`;
function tU({
  collectionType: e,
  shapes: t,
  shapeColor: i,
  shapeToolStrokeStyleType: n
}) {
  return jsx(td, {
    title: tD.format(e),
    localStorageKey: tP(e),
    sectionType: tr.SWT,
    children: t.map(t => jsx(_$$h3, {
      shapeType: t,
      color: i,
      strokeStyleType: n,
      addToRecentsBehavior: ConfirmationLevel.YES,
      toolSetSource: ShapeSidebarMode.SHAPES_SIDEBAR_REGULAR,
      testId: `${e}-${QA}-${t}`,
      recordingKey: generateRecordingKey(Yu, `${QA}-${t}`)
    }, `${e}-${t}`))
  }, e);
}
let tF = {
  numColumns: 4,
  height: $s + OS,
  style: H0
};
let tH = {
  numColumns: 5,
  height: _$$du,
  style: Tk
};
function tB({
  isExpanded: e,
  headerInfo: t,
  items: i,
  getTile: n,
  showUpsellBanner: r,
  libraryId: a
}) {
  let s = [];
  return i.length === 0 ? [] : (t && (s.push(t.isConsolidatedLibrary ? {
    element: jsx('div', {
      className: _$$n_,
      children: jsx(tS, {
        ...t
      })
    }),
    height: _$$d2 + 1
  } : {
    element: jsx(tl, {
      ...t
    }),
    height: GN
  }), !e) || (r && s.push({
    element: jsx('div', {
      className: _$$fL,
      children: jsx(tu, {})
    }),
    height: _$$pD
  }), s.push(...function ({
    items: e,
    layout: t,
    getTile: i
  }) {
    let n = [];
    for (let r = 0; r < e.length; r += t.numColumns) {
      let a = e.slice(r, r + t.numColumns);
      let s = [];
      a.forEach(e => {
        let t = i(e);
        t && s.push(t);
      });
      n.push({
        element: jsx('div', {
          className: t.style,
          children: s
        }),
        height: t.height
      });
    }
    return n;
  }({
    items: i,
    layout: a && a !== _$$iJ ? tH : tF,
    getTile: n
  }))), s);
}
function tV({
  data: e,
  shapeColor: t,
  shapeToolStrokeStyleType: i,
  query: n,
  metadataByLibraryKey: r
}) {
  let a = function (e) {
    let t = tr.Recents;
    let [i] = to({
      localStorageKey: tR,
      sectionType: t
    });
    let n = B8();
    let r = useAtomWithSubscription(shapeColorAtom);
    let a = useAtomWithSubscription(shapeStrokeStyleAtom);
    let s = useAtomWithSubscription(_$$Ai);
    let l = _$$es();
    if (n.length < 1 || s) return [];
    let d = n.slice(0, qA);
    return tB({
      isExpanded: i,
      headerInfo: {
        title: getI18nString('whiteboard.shapes_sidebar.recents'),
        localStorageKey: tR,
        sectionType: t
      },
      items: d,
      getTile: t => {
        let i = eZ(t);
        return i ? i.type === 'library' ? jsx(tE, {
          item: i.item,
          addToRecentsBehavior: ConfirmationLevel.YES_WITHOUT_REORDER,
          toolSetSource: ShapeSidebarMode.SHAPES_SIDEBAR_RECENTS,
          testId: `recents-${Kv}-${i.item.id}`,
          isLocked: l,
          metadata: e?.[i.item.library_key]
        }, `recents-${i.item.id}`) : jsx(_$$h3, {
          shapeType: i.shapeType,
          color: r,
          strokeStyleType: a,
          addToRecentsBehavior: ConfirmationLevel.YES_WITHOUT_REORDER,
          toolSetSource: ShapeSidebarMode.SHAPES_SIDEBAR_RECENTS,
          testId: `recents-${QA}-${i.shapeType}`,
          recordingKey: generateRecordingKey(_$$eu, `${QA}-${i.shapeType}`)
        }, `recents-${i.shapeType}`) : null;
      }
    });
  }(r);
  let s = function ({
    connectorStyles: e,
    shapeColor: t,
    shapeToolStrokeStyleType: i
  }) {
    let n = DP();
    let r = vz();
    let a = AE();
    let s = tr.Connectors;
    let [l] = to({
      sectionType: s,
      localStorageKey: tG
    });
    return tB({
      isExpanded: l,
      items: e,
      headerInfo: {
        title: a ? getI18nString('whiteboard.shapes_sidebar.connections') : getI18nString('whiteboard.shapes_sidebar.connectors'),
        localStorageKey: tG,
        sectionType: s
      },
      getTile: e => e === 'MINDMAP_TREE_NUCLEUS' ? jsx(_$$h3, {
        addToRecentsBehavior: ConfirmationLevel.NO,
        color: t,
        disableDragging: !0,
        recordingKey: generateRecordingKey(qD, e),
        shapeType: e,
        size: 'large',
        strokeStyleType: i,
        testId: `${Xi}-${e}`,
        toolSetSource: ShapeSidebarMode.SHAPES_SIDEBAR_REGULAR
      }, e) : jsx(_$$W2, {
        isSelected: n(e),
        connectorStyle: e,
        setConnectorTool: r,
        size: 'large',
        testId: `${Xi}-${e}`,
        recordingKey: generateRecordingKey(qD, `${Xi}-${e}`)
      }, e)
    });
  }({
    connectorStyles: e.connectorData,
    shapeColor: t,
    shapeToolStrokeStyleType: i
  });
  let d = function ({
    swtData: e,
    shapeColor: t,
    shapeToolStrokeStyleType: i
  }) {
    let n = tr.SWT;
    let r = ts(e.map(e => ({
      localStorageKey: tP(e.swtCollectionType),
      sectionType: tr.SWT
    })));
    return e.reduce((e, {
      swtCollectionType: a,
      shapes: s
    }) => {
      let l = tP(a);
      return [...e, ...tB({
        isExpanded: r[l] ?? !0,
        headerInfo: {
          title: tD.format(a),
          localStorageKey: l,
          sectionType: n,
          key: a
        },
        items: s,
        getTile: e => jsx(_$$h3, {
          shapeType: e,
          color: t,
          strokeStyleType: i,
          addToRecentsBehavior: ConfirmationLevel.YES,
          toolSetSource: ShapeSidebarMode.SHAPES_SIDEBAR_REGULAR,
          testId: `${a}-${QA}-${e}`,
          recordingKey: generateRecordingKey(Yu, `${QA}-${e}`)
        }, `${a}-${e}`)
      })];
    }, []);
  }({
    swtData: e.swtData,
    shapeColor: t,
    shapeToolStrokeStyleType: i
  });
  let u = function ({
    shapeLibraryData: e,
    metadataByLibraryKey: t
  }) {
    let i = _$$es();
    let n = useAtomWithSubscription(_$$Ai);
    let r = !!useAtomWithSubscription(_$$ah);
    let a = e.reduce((e, t) => (e[t.title] || (e[t.title] = []), e[t.title]?.push(t), e), {});
    let s = [];
    for (let [, e] of Object.entries(a)) {
      let i = e[0];
      let n = i && !_$$ek(i.libraryKey, t);
      n && s.push({
        localStorageKey: tT(i.libraryKey),
        sectionType: tr.OtherLibrary
      });
      s = s.concat(e.map((e, i) => ({
        localStorageKey: tT(e.libraryKey, e.librarySubCategory),
        sectionType: tk({
          isAdvancedLibrary: _$$ek(e.libraryKey, t),
          isSubCategory: !!e.librarySubCategory
        }),
        isDefaultExpanded: !!n && i === 0 || void 0
      })));
    }
    let d = ts(s);
    return useMemo(() => {
      let e = !1;
      return Object.entries(a).sort(tL).reduce((a, [s, l]) => {
        let c = l[0]?.libraryKey;
        if (!c) return a;
        let u = _$$ek(c, t);
        let p = u ? D8 : void 0;
        let h = [];
        let m = n && !r && !u;
        let f = m ? [{
          libraryKey: c,
          title: s,
          items: l.reduce((e, t) => e.concat(...t.items), [])
        }] : l;
        if (!i || e || u || r || (h = h.concat([{
          element: jsx('div', {
            className: _$$e2,
            children: jsx(tu, {})
          }),
          height: kv
        }]), e = !0), u || n || r) {
          let n = f.reduce((n, a, s) => {
            let o = tT(a.libraryKey, a.librarySubCategory);
            let l = !r || f.length > 1;
            let c = l && s === 0 && i && !a.librarySubCategory && !e;
            e ||= c;
            return [...n, ...tN({
              data: a,
              isExpanded: !o || (d[o] ?? !0),
              sectionType: tk({
                isAdvancedLibrary: u,
                isSubCategory: !!a.librarySubCategory
              }),
              isConsolidatedLibrary: m,
              isLocked: i,
              showUpsellBanner: c,
              hasSectionHeader: l,
              onboardingKey: p,
              metadataByLibraryKey: t,
              isDefaultExpanded: !u && s === 0 || void 0
            })];
          }, []);
          h = h.concat(n);
        }
        return a.concat(h);
      }, []);
    }, [d, r, i, n, t, a]);
  }({
    shapeLibraryData: e.shapeLibraryData,
    metadataByLibraryKey: r
  });
  let h = useAtomWithSubscription(_$$Ai);
  let m = !!useAtomWithSubscription(_$$ah);
  let f = useMemo(() => h && eY(e) ? [{
    element: jsx(tm, {
      query: n
    }),
    height: 200
  }] : m ? u : [...a, ...s, ...d, ...u], [e, m, h, n, s, u, a, d]);
  let _ = useRef(null);
  let x = Te({
    count: f.length,
    getScrollElement: () => _.current,
    estimateSize: e => f[e]?.height ?? 0,
    getItemKey: e => `shapes-sidebar-virtual-row-${e}`,
    overscan: 10,
    paddingEnd: 12
  });
  return jsx(RecordingScrollContainer, {
    scrollContainerRef: _,
    horizontalScrollingDisabled: !0,
    className: _$$jG,
    scrollContainerDataTestId: 'shapes-sidebar-virtual-scroll-container',
    children: jsx('div', {
      style: {
        height: `${x.getTotalSize()}px`,
        width: '100%',
        position: 'relative'
      },
      children: jsx(Lz, {
        children: x.getVirtualItems().map(e => jsx('div', {
          'data-testid': e.key,
          'style': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: `${e.size}px`,
            transform: `translateY(${e.start}px)`
          },
          'children': f[e.index]?.element
        }, e.key))
      })
    })
  });
}
let tG = 'connectors';
function tK({
  connectorStyles: e,
  shapeColor: t,
  shapeToolStrokeStyleType: i
}) {
  let n = DP();
  let r = vz();
  let a = AE();
  return jsx(td, {
    title: a ? getI18nString('whiteboard.shapes_sidebar.connections') : getI18nString('whiteboard.shapes_sidebar.connectors'),
    localStorageKey: tG,
    sectionType: tr.Connectors,
    children: e.map(e => e === 'MINDMAP_TREE_NUCLEUS' ? jsx(_$$h3, {
      addToRecentsBehavior: ConfirmationLevel.NO,
      color: t,
      disableDragging: !0,
      recordingKey: generateRecordingKey(qD, e),
      shapeType: e,
      size: 'large',
      strokeStyleType: i,
      testId: `${Xi}-${e}`,
      toolSetSource: ShapeSidebarMode.SHAPES_SIDEBAR_REGULAR
    }, e) : jsx(_$$W2, {
      isSelected: n(e),
      connectorStyle: e,
      setConnectorTool: r,
      size: 'large',
      testId: `${Xi}-${e}`,
      recordingKey: generateRecordingKey(qD, `${Xi}-${e}`)
    }, e))
  });
}
let tW = {
  otherLibrariesHeaderRow: {
    display: 'x78zum5',
    flexShrink: 'x2lah0s',
    alignItems: 'x6s0dn4',
    justifyContent: 'x1qughib',
    padding: 'x1i0f7ym',
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
  withBottomBorder: {
    borderBottom: 'x1kgkb76',
    borderBottomWidth: null,
    borderBottomStyle: null,
    borderBottomColor: null,
    $$css: !0
  }
};
function tz({
  shapeLibraryData: e,
  metadataByLibraryKey: t,
  isFullyExpanded: i = !1
}) {
  let n = useMemo(() => e.reduce((e, t) => (e[t.title] || (e[t.title] = []), e[t.title]?.push(t), e), {}), [e]);
  let r = useSetAtom(_$$ah);
  let [a, s] = useState(!1);
  let d = useCallback(e => {
    s(e > 0);
  }, []);
  return jsxs(Fragment, {
    children: [jsx('div', {
      ...props(textDisplayConfig.textBodyMediumStrong, tW.otherLibrariesHeaderRow, a && tW.withBottomBorder),
      'style': {
        height: GN
      },
      'data-testid': `platform-shapes-split-panel-${Pr}-other-libraries`,
      'children': jsx('span', {
        className: 'x98rzlu xuxw1ft xb3r6kr xlyipyv x1db2dqx',
        children: getI18nString('whiteboard.shapes_sidebar.other_libraries')
      })
    }), jsx(RecordingScrollContainer, {
      horizontalScrollingDisabled: !0,
      onScroll: d,
      scrollingDisabled: i,
      hideScrollbar: i,
      className: 'x78zum5 xdt5ytf xh8yej3 x6s0dn4 xl56j7k xysyzu8',
      children: Object.entries(n).sort(tL).map(([e, i]) => {
        let n = i[0]?.items[0]?.library_key;
        return _$$ek(n, t) ? null : jsx('div', {
          className: 'xmtjor9',
          children: jsx(tw, {
            title: e,
            icon: Nd(e),
            count: i.reduce((e, t) => e + t.items.length, 0),
            onClick: () => {
              analyticsEventManager.trackDefinedEvent('figjam_advanced_diagramming.shapes_sidebar_library_open', {
                libraryTitle: e,
                libraryKey: n
              });
              r(e);
            },
            testIdPrefix: _$$zk
          }, n)
        });
      })
    })]
  });
}
function tZ() {
  let e = ke();
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: 'FigJamShapesSidebar',
    team: ServiceCategories.FIGJAM,
    fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
    onError: () => {
      e();
    },
    children: jsx(t$, {})
  });
}
function t$() {
  let e = U1();
  let t = useAtomWithSubscription(_$$ah);
  let i = useAtomWithSubscription(shapeColorAtom);
  let n = useAtomWithSubscription(shapeStrokeStyleAtom);
  let {
    libraryItems,
    metadata
  } = useLibraryItemsAndMetadata();
  let [s, d] = useAtomValueAndSetter(Hf);
  let [c, h] = useAtomValueAndSetter(_$$oW);
  let [m, f] = useAtomValueAndSetter(_$$Ai);
  let _ = !!t;
  let x = useSetAtom(ti);
  let g = _$$es();
  let [j, b] = useAtomValueAndSetter(_$$sz);
  let y = useRef(null);
  useSingleEffect(() => {
    void 0 === j && b(y.current ? y.current.clientHeight - Zu : 550);
  });
  let v = useMemo(() => {
    let e = !getFeatureFlags().ad_branded_shapes_m1;
    let t = Object.keys(libraryItems.libraryKeyToSubscribedItems);
    return e ? t.filter(e => !(metadata?.[e]?.tags ?? []).includes('branded')) : void 0;
  }, [metadata, libraryItems]);
  let C = AE();
  let T = useMemo(() => e$(libraryItems, v, C), [libraryItems, v, C]);
  let [E, S] = useState(T);
  let w = useCallback(e => {
    if (e === '') {
      ko({
        event: _$$fT.ClearedSearch,
        searchState: s
      });
      d({
        state: 'inactive'
      });
      S(T);
      h(e);
      x({});
      return;
    }
    let {
      connectorData,
      swtData,
      shapeLibraryData
    } = T;
    S({
      swtData: e0(swtData, e),
      shapeLibraryData: e1(shapeLibraryData, e),
      connectorData: eQ(connectorData, e)
    });
    h(t => (t === '' && analyticsEventManager.trackDefinedEvent('figjam_advanced_diagramming.shapes_sidebar_search', {}), e));
    d(_$$vD({
      searchState: s,
      query: e,
      libraryTitle: t
    }));
    f(!0);
  }, [T, s, f, h, d, x, t]);
  let I = useDebouncedCallback(w, 200);
  let L = useCallback(() => {
    I.cancel();
    w('');
    f(!1);
  }, [I, w, f]);
  let N = useCallback(e => e === '' ? L() : I(e), [L, I]);
  let A = useMemo(() => Object.entries(metadata ?? {}).reduce((e, [t, i]) => e + (i.id && !tI.includes(i.id) ? 1 : 0), 0), [metadata]);
  let [O, k] = useState({
    minTopPanelHeight: void 0,
    maxTopPanelHeight: void 0
  });
  let R = !m && !_ && A > 0;
  useEffect(() => {
    if (!y.current) return;
    let e = new ResizeObserver(() => {
      if (!y.current) return;
      let e = y.current.clientHeight;
      let t = GN + _$$d2 * A + 2;
      let i = e - GN - 2;
      k({
        minTopPanelHeight: e - t,
        maxTopPanelHeight: i
      });
      b(e - Zu);
    });
    e.observe(y.current);
    return () => e.disconnect();
  }, [A, b, R]);
  let {
    minTopPanelHeight,
    maxTopPanelHeight
  } = O;
  let P = useMemo(() => jsx(tV, {
    data: _ ? {
      swtData: [],
      shapeLibraryData: E.shapeLibraryData.filter(e => e.title === t),
      connectorData: []
    } : E,
    shapeColor: i,
    shapeToolStrokeStyleType: n,
    query: c,
    metadataByLibraryKey: metadata
  }), [E, _, metadata, c, t, i, n]);
  return jsx(wV, {
    'ref': e,
    'size': qm,
    'defaultSize': qm,
    'onResize': noop,
    'className': ex()(_$$cx, cssBuilderInstance.relative.wFitContent.flex.flexShrink1.flexGrow1.overflowAuto.$, Dm),
    'disableResizing': !0,
    'side': 'right',
    'data-cancel-insertable-resource-drag-and-drop': !0,
    'children': jsxs('div', {
      'id': YV,
      'data-testid': YV,
      'className': ex()(kL, cssBuilderInstance.relative.wFitContent.borderBox.selectNone.radiusLarge.flex.flexColumn.itemsCenter.colorBg.elevation100.overflowHidden.$),
      'children': [jsx(tQ, {
        searchQuery: c,
        handleSearch: N,
        categoryTitle: t
      }), jsx(tq, {}), _ && !c.length ? jsx(tY, {
        title: t
      }) : null, _ && g ? jsx('div', {
        className: c.length ? _$$e2 : _$$fL,
        children: jsx(tu, {
          libraryTitle: t
        })
      }) : null, getFeatureFlags().ad_branded_shapes_m1 ? R ? jsxs('div', {
        ref: y,
        className: Z$,
        children: [jsx(wV, {
          onResize: e => {
            minTopPanelHeight && maxTopPanelHeight && b(Math.min(Math.max(e, minTopPanelHeight), maxTopPanelHeight));
          },
          size: j,
          side: 'bottom',
          className: SN,
          children: P
        }), jsx(tq, {}), jsx(tz, {
          shapeLibraryData: E.shapeLibraryData,
          metadataByLibraryKey: metadata,
          isFullyExpanded: !!minTopPanelHeight && !!j && j <= minTopPanelHeight
        })]
      }) : P : jsxs(RecordingScrollContainer, {
        horizontalScrollingDisabled: !0,
        className: _$$jG,
        children: [jsx(tJ, {
          data: E,
          shapeColor: i,
          shapeToolStrokeStyleType: n,
          query: c,
          metadataByLibraryKey: metadata
        }), jsx('div', {
          className: cssBuilderInstance.h12.flexShrink0.$
        })]
      })]
    })
  });
}
function tY({
  title: e
}) {
  let t = useSetAtom(_$$ah);
  return jsxs('div', {
    className: 'x78zum5 x1q0g3np xe8ttls x9f619 xh8yej3',
    children: [jsx(IconButton, {
      'htmlAttributes': {
        'data-testid': Jg
      },
      'onClick': () => {
        t(void 0);
      },
      'aria-label': getI18nString('whiteboard.shapes_sidebar.back'),
      'children': jsx(_$$C, {})
    }), jsx('div', {
      className: 'xlup9mm x20nx6h',
      children: _$$pf(e)
    })]
  });
}
function tX({
  children: e,
  closeAction: t,
  testId: i
}) {
  return jsxs('div', {
    'data-testid': i,
    'className': 'x78zum5 x1q0g3np x6s0dn4 x4pvk5x x1ci220x x163pfp',
    'children': [jsx('div', {
      className: 'xmzs88n xv1l7n4',
      children: e
    }), jsx(IconButton, {
      'htmlAttributes': {
        'data-testid': _$$m2
      },
      'aria-label': getI18nString('canvas_search.filter.remove'),
      'onClick': t,
      'children': jsx(_$$f2, {})
    })]
  });
}
function tq() {
  return jsx('div', {
    className: cssBuilderInstance.flexGrow0.flexShrink0.wFull.h1.bt1.bSolid.colorBorder.$
  });
}
function tJ({
  data: e,
  shapeColor: t,
  shapeToolStrokeStyleType: i,
  query: n,
  metadataByLibraryKey: r
}) {
  let a = useAtomWithSubscription(_$$Ai);
  return a && eY(e) ? jsx(tm, {
    query: n
  }) : jsxs('div', {
    'className': _$$rs,
    'data-testid': w4,
    'children': [!a && jsx(Lz, {
      children: jsx(tM, {
        metadataByLibraryKey: r
      })
    }), jsxs(Lz, {
      children: [e.connectorData.length !== 0 && jsx(tK, {
        connectorStyles: e.connectorData,
        shapeColor: t,
        shapeToolStrokeStyleType: i
      }), e.swtData.map(e => jsx(tU, {
        collectionType: e.swtCollectionType,
        shapes: e.shapes,
        shapeColor: t,
        shapeToolStrokeStyleType: i
      }, e.swtCollectionType)), e.shapeLibraryData.map(({
        libraryKey: e,
        title: t,
        items: i,
        librarySubCategory: n
      }, a) => jsx(tA, {
        title: t,
        libraryKey: e,
        items: i,
        metadataByLibraryKey: r,
        canShowUpsellBanner: a === 0,
        librarySubCategory: n
      }, tC(e, t)))]
    })]
  });
}
function tQ({
  searchQuery: e,
  handleSearch: t
}) {
  let i = Kx();
  let [n, r] = useAtomValueAndSetter(_$$ah);
  let a = useCallback(() => t(''), [t]);
  let s = ke();
  let d = n ? getI18nString('whiteboard.shapes_sidebar.search_shapes_in_category', {
    categoryTitle: n
  }) : getI18nString('whiteboard.shapes_sidebar.search_shapes');
  return jsxs('div', {
    className: cssBuilderInstance.wFull.py12.$,
    children: [jsxs('div', {
      'data-onboarding-key': Zh,
      'className': cssBuilderInstance.flex.flexRow.pl16.pr8.gap8.$,
      'children': [jsx('div', {
        className: cssBuilderInstance.itemSelfCenter.textBodyLargeStrong.flexGrow1.$,
        children: getI18nString('whiteboard.shapes_sidebar.title')
      }), jsx('div', {
        className: cssBuilderInstance.flexGrow0.flex.flexRow.gap8.$,
        children: jsx(IconButton, {
          'aria-label': getI18nString('whiteboard.shapes_sidebar.close'),
          'onClick': () => {
            s();
          },
          'recordingKey': 'close-shapes-sidebar',
          'htmlAttributes': {
            'data-testid': NQ
          },
          'children': jsx(_$$A2, {})
        })
      })]
    }), jsx('div', {
      className: cssBuilderInstance.pr8.pl12.mt8.flexGrow1.$,
      children: jsx('div', {
        className: cssBuilderInstance.p0.colorBgSecondary.radiusMedium.mb4.$,
        children: jsx(IW, {
          className: ON,
          clearSearch: a,
          focusOnMount: !i?.shouldOptimizeForIpadApp,
          hasTransparentBackground: !0,
          iconClassName: cssBuilderInstance.colorIconSecondary.$,
          onChange: t,
          placeholder: d,
          query: e,
          selectTextOnMount: !i?.shouldOptimizeForIpadApp,
          smallFont: !0,
          withSmallXIcon: !0,
          withUI3Icon: !0
        })
      })
    }), e.length && n ? jsx('div', {
      className: 'x78zum5 x1q0g3np x1uxwvfr',
      children: jsx(tX, {
        testId: `${_$$_U}-${n}`,
        closeAction: () => r(void 0),
        children: renderI18nText('whiteboard.shapes_sidebar.search.token.in_library', {
          libraryTitle: jsx('span', {
            className: 'xiuzu7u',
            children: _$$pf(n)
          })
        })
      })
    }) : null]
  });
}
function il(e) {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M18 17H19C19.5523 17 20 16.5523 20 16V7.68748V4.99998C20 4.4477 19.5523 3.99998 19 3.99998L8 3.99998C7.44772 3.99998 7 4.4477 7 4.99998V6.00002L6 6.00002L6 4.99998C6 3.89542 6.89543 2.99998 8 2.99998H19C20.1046 2.99998 21 3.89542 21 4.99998V7.68748V16C21 17.1046 20.1046 18 19 18H18V17ZM5 20.0001H16C16.5523 20.0001 17 19.5524 17 19.0001V10.6876V8.00011C17 7.44782 16.5523 7.00011 16 7.00011H5C4.44772 7.00011 4 7.44782 4 8.00011V19.0001C4 19.5524 4.44772 20.0001 5 20.0001ZM16 21.0001H5C3.89543 21.0001 3 20.1047 3 19.0001V8.00011C3 6.89554 3.89543 6.00011 5 6.00011H16C17.1046 6.00011 18 6.89554 18 8.00011V10.6876V19.0001C18 20.1047 17.1046 21.0001 16 21.0001ZM10.5 14.5C11.0523 14.5 11.5 14.0523 11.5 13.5C11.5 12.9477 11.0523 12.5 10.5 12.5C9.94772 12.5 9.5 12.9477 9.5 13.5C9.5 14.0523 9.94772 14.5 10.5 14.5ZM14.5 13.5C14.5 14.0523 14.0523 14.5 13.5 14.5C12.9477 14.5 12.5 14.0523 12.5 13.5C12.5 12.9477 12.9477 12.5 13.5 12.5C14.0523 12.5 14.5 12.9477 14.5 13.5ZM7.5 14.5C8.05228 14.5 8.5 14.0523 8.5 13.5C8.5 12.9477 8.05228 12.5 7.5 12.5C6.94772 12.5 6.5 12.9477 6.5 13.5C6.5 14.0523 6.94772 14.5 7.5 14.5Z',
      fill: 'var(--color-icon)'
    })
  });
}
function id({
  pageCount: e,
  ...t
}) {
  return jsxs('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...t,
    children: [jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M19 17H18V18H19C20.1046 18 21 17.1046 21 16V7.68748V4.99998C21 3.89542 20.1046 2.99998 19 2.99998H8C6.89543 2.99998 6 3.89542 6 4.99998L6 6.00002L7 6.00002V4.99998C7 4.4477 7.44772 3.99998 8 3.99998L19 3.99998C19.5523 3.99998 20 4.4477 20 4.99998V7.68748V16C20 16.5523 19.5523 17 19 17ZM16 20.0001H5C4.44772 20.0001 4 19.5524 4 19.0001V8.00011C4 7.44782 4.44772 7.00011 5 7.00011H16C16.5523 7.00011 17 7.44782 17 8.00011V10.6876V19.0001C17 19.5524 16.5523 20.0001 16 20.0001ZM5 21.0001H16C17.1046 21.0001 18 20.1047 18 19.0001V10.6876V8.00011C18 6.89554 17.1046 6.00011 16 6.00011H5C3.89543 6.00011 3 6.89554 3 8.00011V19.0001C3 20.1047 3.89543 21.0001 5 21.0001Z',
      fill: 'var(--color-icon)'
    }), jsx('text', {
      x: '10.5',
      y: '14.5',
      dominantBaseline: 'middle',
      textAnchor: 'middle',
      fontFamily: 'Inter',
      fontWeight: '550',
      fontSize: '9',
      fill: 'var(--color-icon)',
      children: e
    })]
  });
}
let ic = 'pages_dropdown--pagesDropdownButton--9KRC-';
let iu = 'pages_dropdown--active--R5AFZ';
let ip = 'pages_dropdown--pagesDropdownIcon--nnevp';
let ih = 'pages_dropdown--dropdownHeaderText--dp9ZX ellipsis--ellipsis--Tjyfa';
function im({
  triggerType: e,
  pagesList: t,
  nonDividerPageCount: i,
  isDropdownOpen: n,
  setIsDropdownOpen: r,
  isReadOnly: a
}) {
  let s = useRef(null);
  let d = useCallback(() => r(!1), [r]);
  let c = useCallback(() => r(!n), [r, n]);
  let u = s.current?.getBoundingClientRect();
  let p = useLabConfiguration(labConfigurations.figjamPagePickerA11y);
  let h = `${useId()}-dropdown-trigger`;
  let m = `${useId()}-dropdown-menu`;
  let f = _$$dh();
  let _ = useMemo(() => {
    let e = t.map(e => e.nodeId).findIndex(e => e === f);
    return e < 0 ? null : e + 1;
  }, [f, t]);
  let x = (() => {
    switch (e) {
      case _$$mb.ADD_PAGE:
        return jsx(i_, {
          isDropdownOpen: n,
          toggleDropdown: c,
          ref: s
        });
      case _$$mb.VIEW_PAGES:
        return jsx(ix, {
          pageCount: i,
          isDropdownOpen: n,
          toggleDropdown: c,
          ref: s,
          id: h,
          menuID: m,
          currentPagePosition: _,
          shouldUseAccessibleElements: p
        });
      default:
        throwTypeError(e);
    }
  })();
  return jsxs(Fragment, {
    children: [x, n && u && jsxs(ig, {
      targetRect: u,
      shouldUseAccessibleElements: p,
      close: d,
      id: m,
      triggerID: h,
      children: [jsx(ij, {
        shouldUseAccessibleElements: p
      }), jsx(ib, {
        pagesList: t,
        isReadOnly: a,
        closeDropdown: d,
        shouldUseAccessibleElements: p
      })]
    })]
  });
}
let i_ = forwardRef(({
  isDropdownOpen: e,
  toggleDropdown: t
}, i) => {
  return jsx(ButtonPrimitive, {
    'className': ex()(ic, 'pages_dropdown--singlePage--RS1Vj', {
      [iu]: e
    }),
    'onClick': t,
    'aria-label': getI18nString('pages_panel.toolbar.add_pages_tooltip'),
    'ref': i,
    'aria-pressed': e,
    'htmlAttributes': {
      'data-tooltip': getI18nString('pages_panel.toolbar.add_pages_tooltip'),
      'data-tooltip-type': KindEnum.TEXT
    },
    'children': jsx('span', {
      className: ip,
      children: jsx(id, {})
    })
  });
});
let ix = forwardRef(({
  currentPagePosition: e,
  id: t,
  isDropdownOpen: i,
  menuID: n,
  pageCount: r,
  shouldUseAccessibleElements: a = !1,
  toggleDropdown: s
}, d) => {
  let c = _$$nn();
  let u = useMemo(() => a && c ? e ? getI18nString('pages_panel.toolbar.dropdown_trigger.label', {
    currentPageName: c,
    currentPageNumber: e,
    totalPageCount: r
  }) : getI18nString('pages_panel.toolbar.dropdown_trigger.label_without_position', {
    currentPageName: c
  }) : getI18nString('pages_panel.toolbar.view_pages_tooltip'), [c, e, r, a]);
  return jsxs(ButtonPrimitive, {
    'ref': d,
    'aria-controls': a && n || void 0,
    'aria-expanded': i,
    'aria-haspopup': 'menu',
    'aria-label': u,
    'className': ex()(ic, {
      [iu]: i
    }),
    'onClick': s,
    'htmlAttributes': {
      'data-testid': 'figjam.pages_panel.toolbar.dropdown_trigger',
      'data-tooltip': getI18nString('pages_panel.toolbar.view_pages_tooltip'),
      'data-tooltip-type': KindEnum.TEXT,
      'id': a && t || void 0
    },
    'children': [jsx('span', {
      className: ip,
      children: r > 9 ? jsx(il, {}) : jsx(id, {
        pageCount: r
      })
    }), jsx('span', {
      className: 'pages_dropdown--pagesDropdownButtonText--vxa32 ellipsis--ellipsis--Tjyfa',
      children: c
    })]
  });
});
function ig({
  targetRect: e,
  close: t,
  children: i,
  shouldUseAccessibleElements: n = !1,
  id: r,
  triggerID: a
}) {
  let s = useDispatch<AppDispatch>();
  let c = {
    top: e.y + e.height + 16,
    left: e.x,
    width: 200,
    maxHeight: 312
  };
  useEffect(() => {
    let e = e => {
      e.key === 'Escape' && t();
    };
    window.addEventListener('keydown', e);
    window.addEventListener('blur', t);
    return () => {
      window.removeEventListener('keydown', e);
      window.removeEventListener('blur', t);
    };
  }, [t]);
  return jsx(EventShield, {
    eventListeners: ['onClick', 'onMouseDown'],
    children: jsx(DropdownWithScrim, {
      'id': n && r || void 0,
      'aria-labelledby': n && a || void 0,
      'className': 'pages_dropdown--dropdown--wiw73',
      'style': c,
      'dispatch': s,
      'closeDropdown': t,
      'positionFixed': !0,
      'tabIndex': n ? -1 : void 0,
      'children': jsx('div', {
        className: 'pages_dropdown--dropdownContents--3qDS5',
        children: i
      })
    })
  });
}
function ij({
  shouldUseAccessibleElements: e = !1
}) {
  let t = _$$hs();
  let i = V6();
  return jsxs('div', {
    className: 'pages_dropdown--dropdownHeader--K3jZk',
    children: [e ? jsx('h2', {
      className: ih,
      children: getI18nString('fullscreen.pages_panel.pages')
    }) : jsx('span', {
      className: ih,
      children: renderI18nText('fullscreen.pages_panel.pages')
    }), t && (i ? jsx(_$$t2, {}) : jsx(_$$e4, {}))]
  });
}
function ib({
  pagesList: e,
  isReadOnly: t,
  closeDropdown: i,
  shouldUseAccessibleElements: n = !1
}) {
  let [r, a] = useState(!1);
  let s = useRef(null);
  let d = useCallback(e => {
    a(e > 0);
  }, []);
  _$$a({
    pagesList: e,
    scrollContainerRef: s
  });
  let c = _$$sv();
  let u = _$$g2({
    pagesList: e,
    shouldShowDuplicateOption: c
  });
  return jsx(RecordingScrollContainer, {
    horizontalScrollingDisabled: !0,
    onScroll: d,
    className: ex()('pages_dropdown--scrollContainer--jAJ5C', {
      'pages_dropdown--withTopBorder--LkCLX': r
    }),
    innerClassName: 'pages_dropdown--scrollContainerContents--12wMh',
    ref: s,
    children: jsx(_$$bU, {
      pages: e,
      isReadOnly: t,
      onContextMenu: u,
      isComparingChanges: !1,
      onPageSwitch: i,
      activePageShouldUseBrandColor: !0,
      shouldUseButtonRows: n
    })
  });
}
function iN({
  containerRef: e
}) {
  let t = _$$Z();
  let i = useDispatch<AppDispatch>();
  let n = useDropdownState();
  let r = n?.type === _$$eg;
  let a = useSelector(e => e.isRenaming);
  let s = selectCurrentFile();
  let c = selectCurrentUser();
  let u = !!s && DF(s, c);
  let p = s?.project?.activeProjectResourceConnections?.[0];
  let h = useRef(null);
  let m = h.current?.getBoundingClientRect();
  let f = e.current?.getBoundingClientRect();
  let _ = _$$E3(h, !a);
  let x = {
    top: f?.top ?? 0,
    bottom: f?.bottom ? f?.bottom + 3 : 0,
    left: m?.left ?? 0,
    right: m?.right ?? 0,
    width: m?.width ?? 0,
    height: m?.height ?? 0
  };
  let [g, j] = useState(!1);
  useEffect(() => {
    if (g) {
      let e = setTimeout(() => {
        j(!1);
        fullscreenValue.triggerAction('toggle-sidebar', {
          source: 'figjam-panel'
        });
      }, 200);
      return () => clearTimeout(e);
    }
  }, [i, g]);
  return jsxs(Fragment, {
    children: [a ? jsx('span', {
      className: 'panel_toggle--fileNameInput--hzx4e panel_toggle--containerBase--4sK6N',
      style: {
        width: Math.max(150, _ ?? 0)
      },
      children: jsx(_$$o3, {})
    }) : jsxs(ButtonPrimitive, {
      'className': 'panel_toggle--button--Z3V1x panel_toggle--containerBase--4sK6N',
      'ref': h,
      'onClick': () => {
        j(!0);
      },
      'aria-label': getI18nString('fullscreen_actions.expand-figjam-left-panel-with-filename', {
        fileName: t
      }),
      'htmlAttributes': {
        'onDoubleClick': () => {
          j(!1);
          u && i(beginRenaming());
        },
        'onContextMenu': e => {
          if (e.preventDefault(), r) {
            i(hideDropdownAction());
            return;
          }
          i(showDropdownThunk({
            type: _$$eg,
            data: {
              targetRect: x
            }
          }));
        },
        'data-tooltip': getI18nString('fullscreen_actions.expand-figjam-left-panel'),
        'data-tooltip-type': KindEnum.TEXT
      },
      'recordingKey': 'figjam-panel-toggle',
      'children': [jsx('span', {
        className: 'panel_toggle--text--u2ukq ellipsis--ellipsis--Tjyfa',
        children: t
      }), p && jsx(_$$W3, {
        hostPlanName: p.hostPlanName,
        connectedPlanName: p.connectedPlanName
      })]
    }), jsx(_$$i, {
      dropdownTargetRect: n?.data?.targetRect,
      dispatch: i,
      dropdownVisible: r,
      leanPadding: 0,
      activatePathOnMount: n?.data?.activatePathOnMount,
      trackEvent: trackEventAnalytics
    })]
  });
}
let iA = 'figjam_collapsed_left_panel--divider--l9NPO';
function iO({
  pagesList: e,
  isReadOnly: t
}) {
  let [i, n] = useState(!1);
  let r = useRef(null);
  let a = U1(r);
  let s = trackFileEventWithUser();
  let d = useMemo(() => e.filter(e => !e.isDivider).length, [e]);
  let c = _$$h4({
    nonDividerPageCount: d
  });
  let u = selectCurrentFile();
  let {
    renamingPageId,
    commitRenaming
  } = _$$c2(e);
  let m = !!renamingPageId;
  let f = useCallback(e => {
    n(e);
    e && !i && s('pages_panel_open_toggle', {
      isPagesOpen: e
    }, {
      forwardToDatadog: !0
    });
    !e && m && commitRenaming();
  }, [i, commitRenaming, m, s]);
  return jsx(iD, {
    children: jsxs(iR, {
      ref: a,
      children: [jsx(iD, {
        children: jsx(_$$xG, {})
      }), jsx(iP, {
        children: jsx(iN, {
          containerRef: r
        })
      }), jsx(iD, {
        children: jsxs(iU, {
          children: [u && jsx('div', {
            className: 'figjam_collapsed_left_panel--paidStatusBadgeWrapper--u7dYt',
            children: jsx(_$$s2, {
              openFile: u
            })
          }), jsx(_$$n2, {})]
        })
      }), !!c && jsxs(Fragment, {
        children: [jsx(iM, {}), jsx(iP, {
          children: jsx(im, {
            triggerType: c,
            pagesList: e,
            isDropdownOpen: i,
            setIsDropdownOpen: f,
            nonDividerPageCount: d,
            isReadOnly: t
          })
        })]
      })]
    })
  });
}
function ik() {
  return jsxs(iR, {
    testId: 'figjam-left-panel-loading',
    children: [jsx(iD, {
      children: jsx(iB, {})
    }), jsx(iP, {
      children: jsx(iV, {})
    }), jsx(iH, {}), jsx(iP, {
      children: jsx(iG, {})
    })]
  });
}
let iR = forwardRef(({
  children: e,
  onboardingKey: t,
  testId: i
}, n) => {
  return jsx('div', {
    'ref': n,
    'className': ex()(Dm, 'figjam_collapsed_left_panel--container--FYM0w', 'figjam_collapsed_left_panel--withShapeSidebar--A1L6c'),
    'style': {
      maxWidth: isMobileNotFigmaMobile() ? 300 : _$$g_
    },
    'data-onboarding-key': t,
    'data-testid': i,
    'children': e
  });
});
function iM() {
  return jsx('div', {
    className: iA
  });
}
function iD({
  children: e
}) {
  return jsx('div', {
    className: 'figjam_collapsed_left_panel--noShrink--NWpwj',
    children: e
  });
}
function iP({
  children: e
}) {
  return jsx('div', {
    className: 'figjam_collapsed_left_panel--upToHalfWidth--GUezb',
    children: e
  });
}
function iU({
  children: e
}) {
  return jsx('div', {
    className: 'figjam_collapsed_left_panel--statusSection--N5vuO',
    children: e
  });
}
function iF({
  width: e
}) {
  return jsx('div', {
    className: 'figjam_collapsed_left_panel--loadingPlaceholder--ejxL9',
    style: {
      width: e,
      visibility: 'hidden'
    },
    children: jsx(_$$_b, {})
  });
}
function iH() {
  return jsx('div', {
    className: iA,
    style: {
      visibility: 'hidden'
    }
  });
}
function iB() {
  return jsx(iF, {
    width: 44
  });
}
function iV() {
  return jsx('div', {
    className: 'figjam_collapsed_left_panel--panelTogglePlaceholderContainer--qWqG-',
    children: jsx(iF, {
      width: 180
    })
  });
}
function iG() {
  return jsx(iF, {
    width: 81
  });
}
let iW = atom(!1);
function i0() {
  return jsxs(Fragment, {
    children: [jsx(i1, {}), jsx(_$$d3, {})]
  });
}
function i1() {
  return jsxs('div', {
    className: 'figjam_left_panel_header--iconSection--n7JT9',
    children: [jsx('div', {
      className: 'figjam_left_panel_header--leftSide--OGLAP',
      children: jsx(_$$xG, {})
    }), jsxs('div', {
      className: 'figjam_left_panel_header--rightSide--Kcru4',
      children: [getFeatureFlags().internal_only_debug_tools && jsx(_$$bu, {}), jsx(_$$n2, {}), jsx(En, {}), jsx(_$$J4, {}), jsx(_$$J3, {
        'onClick': () => fullscreenValue.triggerAction('toggle-sidebar', {
          source: 'figjam-left-panel-header'
        }),
        'aria-label': getI18nString('fullscreen_actions.collapse-figjam-left-panel'),
        'htmlAttributes': {
          'data-tooltip': getI18nString('fullscreen_actions.collapse-figjam-left-panel'),
          'data-tooltip-type': KindEnum.TEXT
        },
        'recordingKey': 'figjam-collapse-expanded-left-panel',
        'children': jsx(_$$C2, {})
      })]
    })]
  });
}
let i2 = 'figjam_pages_panel_header--headerText--mvfGF';
function i3({
  shouldUseHeadingElement: e = !1
}) {
  let t = _$$hs();
  let i = V6();
  return jsxs('div', {
    className: ex()('figjam_pages_panel_header--container--o2Ga7', {
      'figjam_pages_panel_header--containerWithNewPageDropdown--SwVmo': t && i
    }),
    children: [e ? jsx('h2', {
      className: i2,
      children: getI18nString('fullscreen.pages_panel.pages')
    }) : jsx('div', {
      className: i2,
      children: renderI18nText('fullscreen.pages_panel.pages')
    }), jsx('div', {
      className: 'figjam_pages_panel_header--buttonGroup--LWXvA',
      children: t && (i ? jsx(_$$t2, {
        recordingKey: 'figjam-new-page-dropdown'
      }) : jsx(_$$e4, {
        recordingKey: 'figjam-new-page-button'
      }))
    })]
  });
}
let i6 = 'figjam_expanded_left_panel--interopPanel--M-7QA';
function i4({
  pagesList: e,
  isReadOnly: t
}) {
  let i = GQ();
  let n = _$$sv();
  let r = _$$g2({
    pagesList: e,
    shouldShowDuplicateOption: n
  });
  let a = U1();
  let s = _$$ew();
  let [d, c] = useAtomValueAndSetter(iW);
  let u = Yg();
  let h = ke();
  let m = useRef(null);
  useEffect(() => {
    d || (c(!0), h());
  }, [d, c, h]);
  let f = useLabConfiguration(labConfigurations.figjamPagePickerA11y);
  let _ = jsxs(i8, {
    width: i,
    ref: a,
    children: [jsxs('div', {
      className: 'figjam_expanded_left_panel--noShrink--mamEZ',
      ref: m,
      children: [jsx(i0, {}), s && jsx(ne, {}), jsx(i3, {
        shouldUseHeadingElement: f
      })]
    }), jsx(i7, {
      pagesList: e,
      children: jsx(_$$bU, {
        pages: e,
        isReadOnly: t,
        onContextMenu: r,
        isComparingChanges: !1,
        activePageShouldUseBrandColor: !0,
        shouldUseButtonRows: f
      })
    })]
  });
  let x = u && d;
  let g = m.current?.clientHeight || 134;
  return x ? jsx('div', {
    style: {
      height: i9(g, e.length)
    },
    children: _
  }) : _;
}
let i9 = (e, t) => {
  let i = parsePxNumber(xM9);
  let n = e + 5;
  return Math.min(n + i * t, n + 4 * i);
};
let i8 = forwardRef(({
  width: e,
  children: t
}, i) => {
  let n = _$$ew();
  return jsx(wV, {
    'ref': i,
    'className': ex()(Dm, 'figjam_expanded_left_panel--resizableContainer--DhTbD', {
      [i6]: n
    }),
    'size': e,
    'defaultSize': qm,
    'side': 'right',
    'onResize': e => _$$xT(e, Yh, _$$g_),
    'style': {
      maxWidth: _$$g_
    },
    'id': _$$k3,
    'data-cancel-insertable-resource-drag-and-drop': !0,
    'children': jsx('div', {
      'style': {
        width: e
      },
      'className': ex()('figjam_expanded_left_panel--panel--rI14k', {
        [i6]: n
      }),
      'data-testid': 'figjam-expanded-left-panel',
      'children': t
    })
  });
});
function i7({
  pagesList: e,
  children: t
}) {
  let [i, n] = useState(!1);
  let r = useRef(null);
  _$$a({
    pagesList: e,
    scrollContainerRef: r
  });
  let a = useCallback(e => {
    n(e > 0);
  }, []);
  return jsx(RecordingScrollContainer, {
    horizontalScrollingDisabled: !0,
    onScroll: a,
    className: ex()('figjam_expanded_left_panel--scrollContainer--V6RoK', {
      'figjam_expanded_left_panel--withTopBorder--OhkVb': i
    }),
    ref: r,
    children: t
  });
}
function ne() {
  let [e,, t] = BN(UserInterfaceElements.LAYERS);
  return jsx(_$$y, {
    withBorder: !0,
    children: jsx(_$$eG, {
      tabPropsMap: e,
      tabManager: t
    })
  });
}
let ns = parsePxNumber(fh1);
let no = parsePxNumber(if6);
function nl({
  includePanelGap: e,
  dltBottomOffset: t,
  collidesWithDLT: i,
  collidesWithTools: n
}) {
  let r = e ? no : 0;
  i && (r += t);
  n && (r += ns + no);
  return r;
}
function nd({
  shouldAnimate: e,
  children: t
}) {
  let i = useRef(null);
  useFocusArea(i);
  let n = _$$ew();
  let r = function (e) {
    let [t, i] = useState(0);
    let n = Yk();
    let r = TH();
    return (useLayoutEffect(() => {
      if (!e.current) return;
      let t = e.current.getBoundingClientRect();
      let n = t.left;
      i(n + t.width);
      let r = new ResizeObserver(t => {
        for (let r of t) {
          if (e.current === r.target) {
            let e = r.borderBoxSize?.[0];
            i(n + (e ? e.inlineSize : r.contentRect.width));
          }
        }
      });
      r.observe(e.current);
      return () => r.disconnect();
    }, [e]), r) ? t + no > r.left ? nl({
      includePanelGap: !1,
      dltBottomOffset: n,
      collidesWithDLT: !0,
      collidesWithTools: !1
    }) : nl({
      includePanelGap: !1,
      dltBottomOffset: n,
      collidesWithDLT: !1,
      collidesWithTools: !1
    }) : 0;
  }(i);
  return jsx(_$$Q, {
    shouldAnimate: e,
    floatingWhenExpanded: !0,
    children: jsx('div', {
      ref: i,
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: n ? 0 : r,
        pointerEvents: 'none'
      },
      children: jsx('div', {
        style: {
          pointerEvents: 'auto',
          display: 'contents'
        },
        children: t
      })
    })
  });
}
let nc = memo(() => {
  let e = useIsProgressBarHiddenOrLocked();
  let t = Ye();
  let i = _$$cT();
  let n = _$$n();
  let r = useAppModelProperty('showUi');
  let a = Yg();
  if (_$$bi(), !r) return null;
  if (e) {
    return jsx(nd, {
      shouldAnimate: !1,
      children: jsx(ik, {})
    });
  }
  let s = t ? jsx(iO, {
    pagesList: n,
    isReadOnly: i
  }) : jsx(i4, {
    pagesList: n,
    isReadOnly: i
  });
  return jsx(nd, {
    children: jsxs(_$$V, {
      className: 'figjam_left_panel--leftPanelContents--kBMIg',
      style: {
        visibility: BrowserInfo.isIpadNative ? 'hidden' : 'visible'
      },
      children: [s, a && jsx(tZ, {})]
    })
  });
});
function nj() {
  let [e, t] = useState(null);
  let [i, n] = useState(!1);
  let r = useRef(null);
  let a = useCallback(() => {
    r.current && clearTimeout(r.current);
    n(!1);
  }, []);
  let s = useCallback(e => {
    e.animationName === 'reactive_guidance_tooltip--fadeout--qFmOg' && t(null);
  }, []);
  let d = useCallback((e, i) => {
    r.current && (clearTimeout(r.current), t(null));
    requestAnimationFrame(() => {
      r.current = setTimeout(a, 5e3);
      t({
        x: e,
        y: i
      });
      n(!0);
    });
  }, [a]);
  useEffect(() => _$$M(d), [d]);
  let c = getViewportInfo({
    subscribeToUpdates_expensive: !!e
  });
  if (!e) return null;
  let u = {
    top: c.y,
    left: c.x,
    height: c.height,
    width: c.width
  };
  let p = viewportToScreen(c, {
    x: e.x + 50 / c.zoomScale,
    y: e.y
  });
  let h = {
    transform: `translate3D(${p.x}px, ${p.y}px, 0) translate(0, -50%)`
  };
  return jsx(TrackingProvider, {
    name: 'Reactive Guidance Tooltip',
    children: jsx('div', {
      className: 'reactive_guidance_tooltip--overflowContainer--RQWcR',
      style: u,
      children: jsxs('div', {
        className: ex()('reactive_guidance_tooltip--tooltip--YkN90', i ? 'reactive_guidance_tooltip--fadeIn--Sipdd' : 'reactive_guidance_tooltip--fadeOut--XaVTK'),
        style: h,
        onAnimationEnd: s,
        children: [jsx(_$$_2, {}), jsx('div', {
          className: 'reactive_guidance_tooltip--text--Si0XF',
          children: renderI18nText('whiteboard.reactive_guidance.view_only', {
            permission: jsx('span', {
              className: 'reactive_guidance_tooltip--textEmphasis--VIQ6b',
              children: renderI18nText('whiteboard.reactive_guidance.view_only_permission')
            })
          })
        }), jsx(RJ, {
          viewOnly: !0,
          variant: 'link-onbrand',
          recordingKey: 'reactiveGuidanceViewPermission',
          hideViewOnlyText: !0
        }), jsx(WithTrackedIconButton, {
          'onClick': a,
          'trackingEventName': 'reactive_guidance_tooltip_closed',
          'recordingKey': 'reactiveGuidanceTooltip',
          'aria-label': getI18nString('general.close'),
          'children': jsx(_$$A2, {})
        })]
      })
    })
  });
}
let nI = parsePxInt(Yub);
let nL = parsePxInt(Dts) + 4;
function nN({
  stamp: e,
  renderChildren: t
}) {
  let i = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  let [n, r] = useState(null);
  let a = Yk();
  let [s, d] = useState(PositionEnum.ABOVE);
  let [c, u] = useState(null);
  let p = e.guid;
  useEffect(() => {
    let e = `stamp-tooltip-${p}`;
    let t = EE(e, [p], e => r(e.position));
    r(t.currentNodePosition[p]?.position || null);
    return () => {
      _$$lB(e);
    };
  }, [p]);
  let h = useMemo(() => n ? scaleRect(i, n.absoluteBounds) : null, [n, i]);
  let m = useMemo(() => h ? {
    ...h,
    x: h.x + i.x,
    y: h.y + i.y
  } : null, [h, i.x, i.y]);
  let f = useMemo(() => !!h && isRectInside(h, i), [h, i]);
  let _ = useCallback((e, t, n) => {
    let r;
    let s = i.y + 10;
    let o = i.y + i.height - 10 - a - t.height;
    let l = i.x + 10;
    let d = i.x + i.width - 10 - t.width;
    let c = PositionEnum.ABOVE;
    let u = clamp(Al(e, t), l, d);
    u + nI + nL > e.x + e.width ? (u = clamp(e.x + e.width + n, l, d), c = PositionEnum.RIGHT) : u + t.width - nI - nL < e.x && (u = clamp(e.x - t.width - n, l, d), c = PositionEnum.LEFT);
    c === PositionEnum.LEFT || c === PositionEnum.RIGHT ? r = _$$tJ(e, t) : (r = T1(e, t, n)) < s && (r = DH(e, t, n), c = PositionEnum.BELOW);
    return {
      pos: c,
      x: u,
      y: clamp(r, s, o)
    };
  }, [a, i]);
  let x = useCallback((e, t, i) => _(e, t, i).x, [_]);
  let g = useCallback((e, t, i) => _(e, t, i).y, [_]);
  let j = useCallback((e, t, i, n) => {
    if (!m) return;
    let r = _(m, i, n).pos;
    d(r);
    u(n => {
      let a = function ({
        targetRect: e,
        tooltipRect: t,
        tooltipPosition: i
      }) {
        let n = e.x - t.x + e.width / 2;
        let r = e.y - t.y + e.height / 2;
        let a = t.width - 2 * nI - nL;
        let s = t.height - 2 * nI - nL;
        switch (i) {
          case PositionEnum.ABOVE:
            return {
              left: clamp(n - nI, nL, a),
              top: Math.floor(t.height)
            };
          case PositionEnum.BELOW:
            return {
              left: clamp(n - nI, nL, a),
              top: -nI
            };
          case PositionEnum.RIGHT:
            return {
              left: -nI,
              top: clamp(r - nI, nL, s)
            };
          case PositionEnum.LEFT:
            return {
              left: Math.floor(t.width),
              top: clamp(r - nI, nL, s)
            };
        }
      }({
        targetRect: m,
        tooltipRect: {
          x: e,
          y: t,
          width: i.width,
          height: i.height
        },
        tooltipPosition: r
      });
      return n && a.top === n.top && a.left === n.left ? n : a;
    });
  }, [_, m]);
  return m && f ? jsx(_$$lM, {
    style: {
      WebkitUserSelect: 'none'
    },
    targetRect: m,
    offset: nI,
    positionX: x,
    positionY: g,
    onPosition: j,
    children: t({
      arrowPosition: c,
      tooltipPosition: s
    })
  }) : null;
}
let nA = 'stamp_overlay--userText--FdBYI ellipsis--ellipsis--Tjyfa';
let nO = 'stamp_overlay--tRexAvatarForeground--6Qkya';
let nk = {
  [PositionEnum.ABOVE]: 'stamp_overlay--downArrow--VJLl5 stamp_overlay--arrow--F8-y5',
  [PositionEnum.BELOW]: 'stamp_overlay--upArrow--PCqYY stamp_overlay--arrowInset--8zLXg stamp_overlay--arrow--F8-y5',
  [PositionEnum.RIGHT]: 'stamp_overlay--leftArrow--u3dvc stamp_overlay--arrow--F8-y5',
  [PositionEnum.LEFT]: 'stamp_overlay--rightArrow--G7DIa stamp_overlay--arrow--F8-y5'
};
let nR = {
  [PositionEnum.ABOVE]: 'stamp_overlay--animationUp--Pq4mv stamp_overlay--animationBase--a-FJI',
  [PositionEnum.BELOW]: 'stamp_overlay--animationDown--mBXfv stamp_overlay--animationBase--a-FJI',
  [PositionEnum.RIGHT]: 'stamp_overlay--animationRight--2KY5g stamp_overlay--animationBase--a-FJI',
  [PositionEnum.LEFT]: 'stamp_overlay--animationLeft--daYLK stamp_overlay--animationBase--a-FJI'
};
function nM(e) {
  let t = e.mirror.sceneGraph;
  let i = Object.keys(e.mirror.sceneGraphSelection);
  if (i.length !== 1) return null;
  let n = t.get(i[0]);
  return n && n.type === 'STAMP' ? n : null;
}
function nD(e) {
  let t = e.mirror.sceneGraph.get(e.mirror.appModel.hoveredNode);
  return t && t.type === 'STAMP' ? t.guid : null;
}
function nP({
  shouldShowAvatar: e,
  avatarEntity: t,
  text: i
}) {
  return jsxs(Fragment, {
    children: [e && jsx(Ro, {
      size: 16,
      entity: t
    }), jsx('div', {
      className: nA,
      children: i
    })]
  });
}
function nU({
  size: e
}) {
  return jsxs('svg', {
    width: e,
    height: e,
    viewBox: '0 0 16 16',
    fill: 'none',
    children: [jsxs('g', {
      clipPath: 'url(#clip0_1941_43995)',
      children: [jsx('rect', {
        className: 'stamp_overlay--tRexAvatarBackground--tprTe',
        width: '16',
        height: '16'
      }), jsx('path', {
        className: nO,
        d: 'M3 9.90476V8H9V9.42857V10.8571V13C9 15.2091 7.20914 17 5 17H0L-0.71875 11.7143L3 9.90476Z'
      }), jsx('path', {
        className: nO,
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M4.81038 2.08926C3.50282 2.45482 3 3.93364 3 5.29134V8C3 8.55228 3.44771 9 4 9H13C13.5523 9 14 8.55228 14 8V6.16667C14 4.50981 12.6569 3.16667 11 3.16667H8.24357C7.98467 3.16667 7.73678 3.06531 7.53359 2.90486C7.09796 2.56089 6.25898 2 5.42 2C5.21483 2 5.00965 2.03354 4.81038 2.08926ZM5.75 5.5C6.16421 5.5 6.5 5.16421 6.5 4.75C6.5 4.33579 6.16421 4 5.75 4C5.33579 4 5 4.33579 5 4.75C5 5.16421 5.33579 5.5 5.75 5.5Z'
      }), jsx('path', {
        className: nO,
        d: 'M11.8504 13.8881C10.8861 14.05 10.9477 12.5057 9.64966 12.5057C8.35158 12.5057 7.14966 13.3116 7.14966 12.1587C7.14966 11.0057 8.35155 11 9.64962 11C11.5299 11 12.8147 13.7262 11.8504 13.8881Z'
      })]
    }), jsx('defs', {
      children: jsx('clipPath', {
        id: 'clip0_1941_43995',
        children: jsx('circle', {
          r: '8',
          cx: '8',
          cy: '8',
          fill: 'black'
        })
      })
    })]
  });
}
function nF({
  stamp: e,
  shouldAnimate: t,
  testId: i
}) {
  let n = e.stampData?.stampedByUserId || null;
  let r = e.stampData?.userId || null;
  let {
    user,
    loading
  } = wW(n);
  let {
    user: _user,
    loading: _loading
  } = wW(r);
  let c = selectCurrentFile()?.org?.name;
  let u = (() => {
    let t = !e.isFaceStamp;
    let i = !!e.stampData?.votingSessionId;
    if (n && loading || r && _loading) {
      return jsxs(Fragment, {
        children: [t && jsx('div', {
          className: 'stamp_overlay--loadingAvatar--DkN-J stamp_overlay--loadingBase--2UAyM'
        }), jsx('div', {
          className: 'stamp_overlay--loadingUserText--845yi stamp_overlay--loadingBase--2UAyM'
        })]
      });
    }
    if (user) {
      let e = user.handle;
      return jsx(nP, {
        shouldShowAvatar: t,
        avatarEntity: user,
        text: i ? renderI18nText('voting.stamp_tooltip.vote', {
          userName: e
        }) : r && n !== r ? jsxs('div', {
          className: 'stamp_overlay--faceStampTooltipText--bMf1l',
          children: [_user?.handle, ' ', jsx('br', {}), jsx('p', {
            className: 'stamp_overlay--stampedByText--fK8AK',
            children: renderI18nText('whiteboard.stamp.stamped_by_tooltip', {
              userName: e
            })
          })]
        }) : e
      });
    }
    if (_user) {
      let e = _user.handle;
      return jsx(nP, {
        shouldShowAvatar: t,
        avatarEntity: _user,
        text: i ? renderI18nText('voting.stamp_tooltip.vote', {
          userName: e
        }) : e
      });
    }
    if (r && Fl(r) || n && Fl(n)) {
      let e = i ? renderI18nText('voting.stamp_tooltip.visitor_vote') : c ? renderI18nText('voting.stamp_tooltip.visitor_with_org', {
        orgName: c
      }) : renderI18nText('voting.stamp_tooltip.visitor_without_org');
      return jsx(nP, {
        shouldShowAvatar: t,
        avatarEntity: {
          id: n || r || void 0
        },
        text: e
      });
    }
    return n || r ? jsx(nP, {
      shouldShowAvatar: t,
      avatarEntity: {},
      text: renderI18nText('voting.stamp_tooltip.unavailable')
    }) : jsxs(Fragment, {
      children: [jsx(nU, {
        size: 16
      }), jsx('div', {
        className: nA,
        children: renderI18nText('voting.stamp_tooltip.old_stamp')
      })]
    });
  })();
  return jsx(nN, {
    stamp: e,
    renderChildren: ({
      tooltipPosition: e,
      arrowPosition: n
    }) => jsxs('div', {
      className: t ? nR[e] : '',
      children: [jsx('div', {
        'className': 'stamp_overlay--tooltip---xJx5 text--fontNeg11--StdFq text--_fontBase--QdLsd text--_negText--j9g-L',
        'data-testid': i,
        'children': u
      }), n && jsx('div', {
        className: nk[e],
        style: n
      })]
    })
  });
}
let nH = memo(() => {
  let e = useSelector(nM);
  return jsx(Fragment, {
    children: e && jsx(nF, {
      stamp: e,
      shouldAnimate: !0,
      testId: 'selected-stamp-tooltip'
    }, e.guid)
  });
});
let nB = memo(() => {
  let e = useSelector(nD);
  let [t, i] = useState(null);
  let [n, r] = useState(!0);
  let a = useSelector(e => t ? e.mirror.sceneGraph.get(t) : null);
  let s = useSelector(nM);
  let c = _$$d4();
  return (useEffect(() => {
    let n = !!t;
    if (e !== t && (e || t)) {
      if (e && n) {
        r(!1);
        i(e);
        return;
      }
      if (e && !n) {
        let t = setTimeout(() => {
          i(e);
        }, 100);
        return () => clearTimeout(t);
      }
      if (!e && n) {
        let e = setTimeout(() => {
          i(null);
          r(!0);
        }, 300);
        return () => clearTimeout(e);
      }
    }
  }, [e, t]), s?.isFaceStamp && !s?.stampData?.votingSessionId && c) ? null : jsx(Fragment, {
    children: a && jsx(nF, {
      stamp: a,
      testId: 'hovered-stamp-tooltip',
      shouldAnimate: n
    }, a.guid)
  });
});
let nV = memo(() => {
  return isNotMobile() ? jsx(nB, {}) : jsx(nH, {});
});
function n3() {
  let e = useAtomWithSubscription(isStarterUserAtom);
  let t = useAtomWithSubscription(zN);
  let i = 1e3 * parseFloat(_$$H2) + 300;
  let [n, r] = useState(!1);
  return (useEffect(() => {
    let e = setTimeout(() => {
      r(!0);
    }, i);
    return () => clearTimeout(e);
  }, [i]), e && t.status === 'loaded' && !1 === t.data && !1 === BrowserInfo.isInNativeApp && n) ? jsx(n5, {}) : null;
}
function n5() {
  let e = useSelector(e => e.userFlags);
  let t = selectCurrentFile();
  let i = t?.teamId;
  let n = t?.key;
  let r = useSelector(e => e.multiplayer.sessionID);
  let a = useSelector(e => e.userAnalyticsData?.first_figjam_at);
  let s = useAtomWithSubscription(Zk);
  if (!_$$mW(e, 'figjam_editor_onboarded')) return null;
  if (i) {
    return jsx(n6, {
      teamId: i,
      userFlags: e,
      currentFileKey: n,
      currentSessionId: r
    });
  }
  {
    let t = _$$mW(e, 'seen_fj_upsell_draft_modal_1') ? _$$mW(e, 'seen_fj_upsell_draft_modal_2') ? _$$mW(e, 'seen_fj_upsell_draft_modal_3') ? null : s.seen_fj_upsell_draft_modal_2.fileKey !== n || s.seen_fj_upsell_draft_modal_2.sessionId !== r ? 'seen_fj_upsell_draft_modal_3' : null : s.seen_fj_upsell_draft_modal_1.fileKey !== n || s.seen_fj_upsell_draft_modal_1.sessionId !== r ? 'seen_fj_upsell_draft_modal_2' : null : 'seen_fj_upsell_draft_modal_1';
    return !t || dayjs(a).add(7, 'day').isSameOrAfter(dayjs()) ? null : jsx(n4, {
      mainText: n9(t),
      userFlag: t,
      secondaryText: n8(t),
      upsellSource: UpsellModalType.FIGJAM_UPSELL_MODAL,
      gif: n7(t),
      teamId: '',
      currentSessionId: r,
      currentFileKey: n
    });
  }
}
function n6(e) {
  let t;
  let {
    teamId,
    userFlags,
    currentSessionId,
    currentFileKey
  } = e;
  let s = useSubscription(TeamFileCountsByTeamId, {
    teamId
  });
  if (s.status !== 'loaded') return null;
  let l = (t = s.data?.team?.teamFileCounts?.whiteboardFileCount ?? 0) !== 1 || _$$mW(userFlags, 'seen_fj_upsell_team_modal_1') ? t !== 2 || _$$mW(userFlags, 'seen_fj_upsell_team_modal_2') ? t !== 3 || _$$mW(userFlags, 'seen_fj_upsell_team_modal_3') ? null : 'seen_fj_upsell_team_modal_3' : 'seen_fj_upsell_team_modal_2' : 'seen_fj_upsell_team_modal_1';
  return l ? jsx(n4, {
    mainText: n9(l),
    userFlag: l,
    secondaryText: n8(l),
    upsellSource: UpsellModalType.FIGJAM_UPSELL_MODAL,
    gif: n7(l),
    teamId,
    currentFileKey,
    currentSessionId
  }) : null;
}
function n4(e) {
  let {
    mainText,
    secondaryText,
    userFlag,
    upsellSource,
    gif,
    teamId
  } = e;
  let c = useSetAtom(_$$xw);
  let u = useDispatch<AppDispatch>();
  let h = useAtomWithSubscription(Zk);
  useEffect(() => {
    c({
      showing: !0,
      userFlag
    });
  }, [c, userFlag]);
  let m = () => {
    u(popModalStack());
    u(postUserFlag({
      [userFlag]: !0
    }));
    h[userFlag] = {
      fileKey: e.currentFileKey,
      sessionId: e.currentSessionId
    };
    c({
      showing: !1
    });
  };
  let f = getLocaleFallbacks()[0];
  let _ = f === 'ja' ? 323 - 2 * _$$uv : 303 - 2 * _$$uv;
  return jsx(TrackingProvider, {
    name: 'FigJamUpsellModal',
    properties: {},
    children: jsxs(CR, {
      additionalOnExplicitDismiss: m,
      className: 'figjam_upsell_modal--modal--04mt-',
      closeButtonClassName: 'figjam_upsell_modal--closeButton--MTKjp',
      disableClickOutsideToHide: !0,
      dismissModal: m,
      shouldCenterArrow: PositioningStrategy.FALLBACK,
      shouldDismissWhenLostDOMTarget: !0,
      targetKey: _$$l4,
      topPadding: 12,
      width: _,
      children: [jsxs('div', {
        className: 'figjam_upsell_modal--genericTopHalf--iECQZ',
        children: [jsx('span', {
          className: 'figjam_upsell_modal--mainText--pe9Vj text--fontNeg14--ARPWl text--_fontBase--QdLsd text--_negText--j9g-L',
          style: {
            width: f === 'ja' ? 154 : 150
          },
          children: mainText
        }), jsx('div', {
          className: 'figjam_upsell_modal--gif--1VlR7',
          children: gif
        })]
      }), jsxs('div', {
        className: 'figjam_upsell_modal--genericBottomHalf--ZGBjw',
        children: [jsx('span', {
          children: secondaryText
        }), jsx(WithTrackedButton, {
          onClick: () => {
            m();
            u(showModalHandler({
              type: _$$V2,
              data: {
                upsellSource,
                teamId,
                openCheckoutInNewTab: !0
              }
            }));
          },
          children: renderI18nText('upsell.history.upgrade_now')
        })]
      })]
    })
  });
}
function n9(e) {
  switch (e) {
    case 'seen_fj_upsell_draft_modal_1':
      return renderI18nText('whiteboard.paywall_upsell.draft.first.main', {
        purpleSection: re(renderI18nText('whiteboard.paywall_upsell.draft.first.main.purpleSection'))
      });
    case 'seen_fj_upsell_draft_modal_2':
      return renderI18nText('whiteboard.paywall_upsell.draft.second.main', {
        purpleSection: re(renderI18nText('whiteboard.paywall_upsell.draft.second.main.purpleSection'))
      });
    case 'seen_fj_upsell_draft_modal_3':
      return renderI18nText('whiteboard.paywall_upsell.draft.third.main', {
        purpleSection: re(renderI18nText('whiteboard.paywall_upsell.draft.third.main.purpleSection'))
      });
    case 'seen_fj_upsell_team_modal_1':
      return renderI18nText('whiteboard.paywall_upsell.team.main', {
        fileCount: re(renderI18nText('whiteboard.paywall_upsell.team.main.first'))
      });
    case 'seen_fj_upsell_team_modal_2':
      return renderI18nText('whiteboard.paywall_upsell.team.main', {
        fileCount: re(renderI18nText('whiteboard.paywall_upsell.team.main.second'))
      });
    case 'seen_fj_upsell_team_modal_3':
      return renderI18nText('whiteboard.paywall_upsell.team.last.main', {
        purpleSection: re(renderI18nText('whiteboard.paywall_upsell.team.last.main.purpleSection'))
      });
    default:
      return jsx(Fragment, {});
  }
}
function n8(e) {
  switch (e) {
    case 'seen_fj_upsell_draft_modal_1':
      return renderI18nText('whiteboard.paywall_upsell.draft.first.secondary');
    case 'seen_fj_upsell_draft_modal_2':
      return renderI18nText('whiteboard.paywall_upsell.draft.second.secondary');
    case 'seen_fj_upsell_draft_modal_3':
      return renderI18nText('whiteboard.paywall_upsell.draft.third.secondary');
    case 'seen_fj_upsell_team_modal_1':
    case 'seen_fj_upsell_team_modal_2':
    case 'seen_fj_upsell_team_modal_3':
      return renderI18nText('whiteboard.paywall_upsell.team.secondary');
    default:
      return jsx(Fragment, {});
  }
}
function n7(e) {
  switch (e) {
    case 'seen_fj_upsell_draft_modal_1':
      return jsx('img', {
        src: buildUploadUrl('2e5f8efd83d4a5faea78203c9c6d306d0d0b862b'),
        alt: 'stamping a sticky animation'
      });
    case 'seen_fj_upsell_draft_modal_2':
      return jsx('img', {
        src: buildUploadUrl('7909d41489939d9259567eeb734d887eb67b95fc'),
        alt: 'voting wheel animation'
      });
    case 'seen_fj_upsell_draft_modal_3':
      return jsx('img', {
        src: buildUploadUrl('c490e715dcc620fce0cff9c6cd11936b30dbe1bd'),
        alt: 'audio call animation'
      });
    case 'seen_fj_upsell_team_modal_1':
      return jsx('img', {
        src: buildUploadUrl('fecccf2b6ed6c72a5269dea45f2f713bdef5b0cb'),
        alt: 'one file used animation'
      });
    case 'seen_fj_upsell_team_modal_2':
      return jsx('img', {
        src: buildUploadUrl('1623cd399db275cf37f3360fbf774696660cd7e6'),
        alt: 'two files used animation'
      });
    case 'seen_fj_upsell_team_modal_3':
      return jsx('img', {
        src: buildUploadUrl('cb781eb3d9a927a0bce7e246f2f8614e47d5ee1c'),
        alt: 'third file used animation'
      });
  }
}
function re(e) {
  return jsx('span', {
    className: 'figjam_upsell_modal--purpleText--gZ21M',
    children: e
  });
}
function ad(e) {
  let t = useDispatch<AppDispatch>();
  let i = useRef(null);
  let n = useDropdownState();
  let r = getCurrentFileType() === 'whiteboard';
  let a = F5();
  let {
    tabManager,
    searchQuery
  } = _$$cX();
  let u = Vq(tabManager.activeTab);
  let p = Gt(e.pluginId, u);
  let m = _$$dR(e.pluginId, u);
  let f = RK(e.pluginId);
  let _ = _$$t4(e.pluginId, p, m).length > 0;
  let x = _ && n?.type === LO;
  let g = _$$b4();
  let {
    validatePublishedPluginInOrgAllowlist,
    isPluginBlockedByAllowlist
  } = usePluginAllowlistValidation(e.pluginId);
  let y = useCallback(n => {
    if (n.stopPropagation(), validatePublishedPluginInOrgAllowlist()) {
      if (r && _$$oM({
        id: e.pluginId,
        type: TabCategory.PLUGINS,
        source: u,
        options: {
          ...a,
          query: searchQuery
        }
      }), _) {
        x ? t(hideDropdownAction()) : t(showDropdownThunk({
          type: LO,
          data: {
            pluginId: e.pluginId,
            view: e.view,
            target: i.current?.getBoundingClientRect(),
            triggeredFrom: u
          }
        }));
        return;
      }
      f ? p() : m();
      g();
    }
  }, [validatePublishedPluginInOrgAllowlist, r, _, g, e.pluginId, e.view, u, a, searchQuery, x, t, f, p, m]);
  let {
    buttonCta,
    isNotInHeader
  } = e;
  let T = useSelector(e => isWorkshopModeActive(e.selectedView) && !e.user);
  let [E, S] = useState(T);
  useEffect(() => {
    S(T);
  }, [T]);
  let w = isNotInHeader ? ButtonBasePrimary : ButtonSecondary;
  let I = T ? void 0 : y;
  return jsx('div', {
    'ref': i,
    'data-not-draggable': !0,
    'data-testid': 'run-cta-button',
    'children': jsxs(w, {
      onClick: BrowserInfo.isIpad ? void 0 : I,
      onPointerDown: BrowserInfo.isIpad ? I : void 0,
      className: T || isPluginBlockedByAllowlist ? NY : _$$lI,
      children: [buttonCta, _ && jsx(SvgComponent, {
        svg: _$$A6,
        className: isNotInHeader || T ? _$$sD : wE
      })]
    })
  });
}
let am = 'browse_plugins_universal_modal_tiles--savedPluginTile--pLNFr browse_plugins_universal_modal_tiles--browsePluginTile--99ESx';
let af = 'browse_plugins_universal_modal_tiles--pluginTileIcon--C0pTJ';
let a_ = 'browse_plugins_universal_modal_tiles--browsePluginTileRightSide--u74qu';
let ax = 'browse_plugins_universal_modal_tiles--savedPluginTileLeftSide--nqHJe browse_plugins_universal_modal_tiles--browsePluginTileRightSide--u74qu';
let ag = 'browse_plugins_universal_modal_tiles--pluginTileDescription--gno7V text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa';
let ay = getPluginManager();
let av = forwardRef((e, t) => {
  let i = useDispatch<AppDispatch>();
  let {
    localFileId,
    view
  } = e;
  let a = useLocalPluginsExcludingWidgets();
  let s = localFileId ? a[localFileId] : null;
  let c = useUserPublishedPlugins();
  let u = s ? s.plugin_id : e.publishedPlugin.id;
  let p = e.publishedPlugin ?? c.find(e => e.id === u);
  let h = p?.versions[p.current_plugin_version_id];
  let m = !!h;
  let f = useRef(null);
  let _ = useDropdownState();
  let x = _?.type === _$$lD && _.data.localFileId === localFileId && _.data.pluginId === u && _.data.view === view && _.data.targetRect;
  let {
    tabManager,
    searchQuery,
    setPreviewResource
  } = _$$cX();
  let {
    dragState,
    onInsertableResourcePointerDown
  } = _$$c3({
    clickToInsert_DEPRECATED: !1,
    afterSuccessfulInsert: _$$b4(),
    triggeredFrom: Vq(tabManager.activeTab),
    resource: s ?? h,
    searchQuery
  });
  if (!s && !p) return null;
  let C = () => {
    localFileId && ay.openExtensionDirectory(localFileId);
  };
  return jsxs(Fragment, {
    children: [jsxs(_$$n5.div, {
      className: am,
      onPointerDown: onInsertableResourcePointerDown,
      ref: t,
      children: [jsxs(ButtonPrimitive, {
        className: ax,
        onClick: () => m ? setPreviewResource({
          id: h.plugin_id,
          type: Rt.PLUGINS
        }) : C(),
        children: [jsx('div', {
          className: af,
          children: m && h ? jsx(PluginImage, {
            plugin: h,
            loading: 'lazy',
            alt: ''
          }) : jsx(SvgComponent, {
            svg: _$$A8
          })
        }), jsxs('div', {
          className: a_,
          children: [jsxs('div', {
            className: 'browse_plugins_universal_modal_tiles--developmentPluginPrimaryText--25RR9',
            children: [jsx('span', {
              className: 'browse_plugins_universal_modal_tiles--developmentPluginName--f75Vj browse_plugins_universal_modal_tiles--pluginTileName--z1OSk text--fontPos13--xW8hS text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa',
              children: h ? h.name : s.name
            }), p && _$$tY.PluginManagementTitleBadge(p)]
          }), jsx(_$$A5, {
            localResource: s,
            publishedResource: p
          })]
        })]
      }), jsxs('div', {
        className: 'browse_plugins_universal_modal_tiles--developmentTileRightSide----HW6',
        children: [jsx(_$$T2, {
          selected: x ?? void 0,
          children: jsx(IconButton, {
            'ref': f,
            'onClick': e => {
              let t = e.currentTarget.getBoundingClientRect();
              i(showDropdownThunk({
                type: _$$lD,
                data: {
                  localFileId,
                  pluginId: u,
                  view,
                  targetRect: t
                }
              }));
            },
            'aria-label': getI18nString('whiteboard.inserts.plugin_development_options_tooltip'),
            'htmlAttributes': {
              'data-tooltip-type': KindEnum.TEXT,
              'data-tooltip': getI18nString('whiteboard.inserts.plugin_development_options_tooltip')
            },
            'children': jsx(_$$J6, {})
          })
        }), x && jsx(T9, {
          localResource: s ?? void 0,
          publishedResource: s ? void 0 : p,
          viewResource: () => setPreviewResource({
            id: u,
            type: Rt.PLUGINS
          })
        }), jsx(ad, {
          pluginId: u,
          buttonCta: getI18nString('whiteboard.inserts.plugin_run_cta'),
          isNotInHeader: !1,
          view
        })]
      })]
    }), jsx(_$$z, {
      dragState
    })]
  });
});
function aC(e) {
  let t = getPluginWithPayment(e.pluginId);
  let i = useInstalledPluginsAndWidgets().plugins[e.pluginId];
  let n = useMemo(() => i || e.pluginVersion || getCurrentPluginVersion(t) || pluginMetadata, [i, t, e.pluginVersion]);
  return jsx(aT, {
    pluginId: e.pluginId,
    pluginVersion: n,
    view: e.view,
    showLockIcon: e.showLockIcon,
    plugin: t
  });
}
let aT = memo(e => {
  let {
    plugin,
    pluginVersion
  } = e;
  let {
    isSavedForUser
  } = QK(e.pluginId, ResourceTypeNoComment.PLUGIN);
  let r = _$$b4();
  let {
    tabManager,
    searchQuery,
    setPreviewResource
  } = _$$cX();
  let d = checkResourceEligibility(plugin);
  let c = isResourcePaymentFailed(plugin);
  let p = useCurrentUserOrg();
  let h = useAllowlistedPlugins();
  let m = canRequestExtension({
    org: p,
    extension: plugin,
    allowlistedExtensions: h
  });
  let {
    dragState,
    onInsertableResourcePointerDown
  } = _$$c3({
    clickToInsert_DEPRECATED: !1,
    afterSuccessfulInsert: r,
    triggeredFrom: Vq(tabManager.activeTab),
    resource: pluginVersion,
    searchQuery,
    showRequestFlow: m
  });
  let x = isPendingPublisherForCurrentUser(pluginVersion.plugin_id) && e.view === TabCategory.PLUGINS;
  let g = BI();
  let j = QP({
    resource: plugin,
    validBadges: [_$$op.FREEMIUM, _$$op.OFF_PLATFORM, _$$op.PURCHASED]
  });
  if (pluginVersion === pluginMetadata || hasMonetizedResourceMetadata(plugin) && (g?.shouldOptimizeForIpadApp || getFeatureFlags().cmty_m10n_test_apple_os)) return null;
  let y = x ? jsx(WZ, {
    resource: plugin
  }) : d ? jsx(aE, {
    plugin
  }) : c ? jsx(PaymentButton, {
    children: renderI18nText('community.buyer.update')
  }) : m ? jsx('div', {
    style: styleBuilderInstance.add({
      width: '80px'
    }).$,
    children: jsx(_$$s4, {
      version: pluginVersion,
      isPlugin: !0,
      variant: _$$w.FigJamPluginTile
    })
  }) : jsx(ad, {
    pluginId: e.pluginId,
    buttonCta: getI18nString('whiteboard.inserts.plugin_run_cta'),
    isNotInHeader: !1,
    view: e.view
  });
  let v = kB(plugin) || CF(pluginVersion);
  let C = x ? jsx(_$$e6, {
    resource: plugin
  }) : jsxs(Fragment, {
    children: [jsx('div', {
      className: 'browse_plugins_universal_modal_tiles--pluginTileHeader--gYj6D',
      children: jsxs('div', {
        className: 'browse_plugins_universal_modal_tiles--pluginTitle--aUkOj resource_tiles--pluginTitle--dP-tg',
        children: [jsx('span', {
          className: 'browse_plugins_universal_modal_tiles--pluginTileName--z1OSk text--fontPos13--xW8hS text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa',
          children: pluginVersion.name
        }), j && jsx('div', {
          className: 'browse_plugins_universal_modal_tiles--pluginTitleBadgeContainer--SQKss resource_tiles--pluginTitleBadgeContainer--Q-9cz',
          children: j
        }), c && jsx('div', {
          className: 'browse_plugins_universal_modal_tiles--browsePluginTilePaymentError--A0pCZ',
          children: jsx(PaymentInfoTooltip, {})
        }), e.showLockIcon && jsx(SvgComponent, {
          svg: _$$A7
        })]
      })
    }), jsx('div', {
      className: ex()(ag, 'browse_plugins_universal_modal_tiles--pluginTileDescriptionPadding--qGAaH'),
      children: getResourceTaglineOrDescription(pluginVersion, stripHtmlTags)
    }), v && jsx('div', {
      className: ag,
      children: v
    })]
  });
  return jsxs(Fragment, {
    children: [jsxs(_$$n5.div, {
      'className': am,
      'onPointerDown': onInsertableResourcePointerDown,
      'data-testid': `figjam-plugin-tile-${e.pluginId}`,
      'children': [jsxs(ButtonPrimitive, {
        className: ax,
        onClick: () => setPreviewResource({
          id: pluginVersion.plugin_id,
          type: Rt.PLUGINS
        }),
        children: [jsxs('div', {
          className: 'browse_plugins_universal_modal_tiles--relativeContainer--yRMHl',
          children: [x && jsx('div', {
            className: 'browse_plugins_universal_modal_tiles--redDot--rXNiG red_dot--baseRedDot--pgZV7'
          }), jsx('div', {
            className: af,
            children: jsx(PluginImage, {
              plugin: pluginVersion,
              loading: 'lazy',
              alt: '',
              draggable: !1
            })
          })]
        }), jsx('div', {
          className: a_,
          children: C
        })]
      }), jsx('div', {
        className: ex()(cssBuilderInstance.flex.itemsCenter.mr8.if(isSavedForUser, cssBuilderInstance.visible).$),
        children: jsx(_$$_W, {
          resourceId: e.pluginId,
          resourceType: ResourceTypeNoComment.PLUGIN,
          parentView: _$$nN2.FIGJAM_PLUGIN_ROW
        })
      }), jsx('div', {
        children: y
      })]
    }), jsx(_$$z, {
      dragState
    })]
  });
});
function aE(e) {
  let t = _$$cX().setPreviewResource;
  let i = getResourcePaymentFromState(e.plugin);
  return hasMonetizedResourceMetadata(e.plugin) ? jsxs(ButtonPrimitive, {
    className: 'browse_plugins_universal_modal_tiles--priceBadgeContainer--Sf172',
    onClick: () => t({
      id: e.plugin.id,
      type: Rt.PLUGINS
    }),
    htmlAttributes: {
      'data-not-draggable': !0
    },
    children: [jsx('div', {
      className: 'browse_plugins_universal_modal_tiles--priceBadge--L2Q5M ellipsis--ellipsis--Tjyfa',
      children: getProductPriceString(e.plugin.monetized_resource_metadata)
    }), hasTrialAvailable({
      resource: e.plugin,
      payment: i
    }) && jsx(w5, {
      metadata: e.plugin.monetized_resource_metadata,
      condensed: !0
    })]
  }) : null;
}
let aM = 'browse_widgets_universal_modal_tiles--widgetImageContainer--Jawtg';
let aD = 'browse_widgets_universal_modal_tiles--widgetTileMeta--pIVCD';
let aP = 'browse_widgets_universal_modal_tiles--widgetMetadataContainer--BLS2U';
let aU = 'browse_widgets_universal_modal_tiles--developmentWidgetPrimaryText--4ORbR';
let aF = 'browse_widgets_universal_modal_tiles--widgetResourceActionContainer--tlXT0';
function aH(e) {
  let {
    publishedWidget
  } = e;
  let i = _$$cX().setPreviewResource;
  let n = useDispatch<AppDispatch>();
  let r = publishedWidget.id;
  let a = publishedWidget?.versions[publishedWidget.current_plugin_version_id];
  let s = !!a;
  let l = useDropdownState();
  let c = l && l?.type === _$$lD && l.data.localFileId === r && l.data.view === e.tab;
  let u = s ? a.redirect_snapshot_url || '' : _$$J8;
  return jsx(Fragment, {
    children: jsx(_$$sU, {
      image: jsx(FK, {
        className: aM,
        children: jsx(_$$z2, {
          src: u,
          context: _$$_Y.WHITEBOARD
        })
      }),
      bottomRow: jsxs('div', {
        className: aD,
        children: [jsx(_$$dY.MetadataContainer, {
          className: aP,
          children: jsx(_$$dY.TextMetadataLayout, {
            onClick: () => i({
              id: r,
              type: Rt.WIDGETS
            }),
            primaryText: jsxs('div', {
              className: aU,
              children: [jsx('span', {
                children: a.name
              }), publishedWidget && _$$tY.PluginManagementTitleBadge(publishedWidget)]
            }),
            secondaryText: jsx(_$$A5, {
              publishedResource: publishedWidget,
              localResource: void 0
            })
          })
        }), jsxs(_$$dY.ResourceActionContainer, {
          className: aF,
          children: [jsx(_$$T2, {
            selected: c ?? void 0,
            children: jsx(IconButton, {
              'onClick': t => {
                let i = t.currentTarget.getBoundingClientRect();
                n(showDropdownThunk({
                  type: _$$lD,
                  data: {
                    localFileId: r,
                    view: e.tab,
                    targetRect: i
                  }
                }));
              },
              'aria-label': getI18nString('whiteboard.inserts.widget_options'),
              'htmlAttributes': {
                'data-tooltip-type': KindEnum.TEXT,
                'data-tooltip': getI18nString('whiteboard.inserts.widget_options')
              },
              'children': jsx(_$$J6, {})
            })
          }), c && jsx(T9, {
            publishedResource: publishedWidget,
            viewResource: () => i({
              id: r,
              type: Rt.WIDGETS
            })
          })]
        })]
      })
    })
  });
}
let aB = getPluginManager();
let aV = forwardRef((e, t) => {
  let i = useLocalPluginsExcludingWidgets();
  let {
    localFileId
  } = e;
  let r = useDispatch<AppDispatch>();
  let a = i[localFileId];
  let s = useUserPublishedWidgets();
  let l = usePublishingPlugins();
  let c = useDropdownState();
  let {
    tabManager,
    searchQuery,
    setPreviewResource
  } = _$$cX();
  if (!a) return null;
  let m = s.find(e => e.id === i[localFileId].plugin_id);
  let f = a.plugin_id;
  let _ = m?.versions[m.current_plugin_version_id];
  let x = !!_;
  let g = c && c?.type === _$$lD && c.data.localFileId === a.localFileId && c.data.view === e.tab;
  let j = () => {
    aB.openExtensionDirectory(a.localFileId);
  };
  let b = x && _.redirect_snapshot_url || l[localFileId] && l[localFileId].metadata.widgetSnapshotImageSrc || _$$J8;
  return jsx(_$$sU, {
    image: jsx(FK, {
      className: aM,
      children: jsx(_$$_4, {
        src: b,
        widget: a,
        analytics: {
          triggeredFrom: Vq(tabManager.activeTab),
          searchQuery
        },
        context: _$$_Y.WHITEBOARD
      })
    }),
    bottomRow: jsxs('div', {
      ref: t,
      className: aD,
      children: [jsx(_$$dY.MetadataContainer, {
        className: aP,
        children: jsx(_$$dY.TextMetadataLayout, {
          onClick: () => x ? setPreviewResource({
            id: f,
            type: Rt.WIDGETS
          }) : j(),
          primaryText: jsxs('div', {
            className: aU,
            children: [jsx('span', {
              children: _?.name ? _?.name : a.name
            }), m && _$$tY.PluginManagementTitleBadge(m)]
          }),
          secondaryText: jsx(_$$A5, {
            localResource: a,
            publishedResource: m
          })
        })
      }), jsxs(_$$dY.ResourceActionContainer, {
        className: aF,
        children: [jsx(_$$T2, {
          selected: g ?? void 0,
          children: jsx(IconButton, {
            'onClick': t => {
              let i = t.currentTarget.getBoundingClientRect();
              r(showDropdownThunk({
                type: _$$lD,
                data: {
                  localFileId: a.localFileId,
                  view: e.tab,
                  targetRect: i
                }
              }));
            },
            'aria-label': getI18nString('whiteboard.inserts.widget_options'),
            'htmlAttributes': {
              'data-tooltip-type': KindEnum.TEXT,
              'data-tooltip': getI18nString('whiteboard.inserts.widget_options')
            },
            'children': jsx(_$$J6, {})
          })
        }), g && jsx(T9, {
          localResource: a,
          viewResource: () => setPreviewResource({
            id: f,
            type: Rt.WIDGETS
          })
        })]
      })]
    })
  });
});
let aG = memo(e => {
  let {
    tabManager,
    setPreviewResource
  } = _$$cX();
  let n = useDispatch<AppDispatch>();
  let r = e.widgetId;
  let a = getPublishedWidgetWithPayment(e.widgetId);
  let s = useMemo(() => e.widgetVersion || getPluginVersion(a), [e.widgetVersion, a]);
  let c = checkResourceEligibility(a);
  let p = isResourcePaymentFailed(a);
  let h = useCurrentUserOrg();
  let f = useAllowlistedWidgets();
  let _ = canRequestExtension({
    org: h,
    extension: a,
    allowlistedExtensions: f
  });
  let x = !!(c || _);
  let {
    searchQuery
  } = _$$cX();
  useEffect(() => {
    a || n(getResourceVersionsThunk({
      id: r,
      resourceType: HubTypeEnum.WIDGET
    }));
  }, [r, n, a]);
  let j = BI();
  let y = useSelector(e => e.authedActiveCommunityProfile);
  let {
    isSavedForUser
  } = QK(e.widgetId, ResourceTypeNoComment.WIDGET);
  return isAIFeaturesEnabledForCurrentUser() && cortexAnalyticsPluginIds.has(r) || !s || hasMonetizedResourceMetadata(a) && (j?.shouldOptimizeForIpadApp || getFeatureFlags().cmty_m10n_test_apple_os) ? null : jsx(_$$sU, {
    className: 'browse_widgets_universal_modal_tiles--widgetCardContainer--yzVBr resource_tiles--_parentWithHoverAction--m180X',
    image: jsxs(FK, {
      className: aM,
      children: [!p && jsx('div', {
        className: 'browse_widgets_universal_modal_tiles--widgetMonetizationBadge--C1Vye',
        children: $3({
          resource: a,
          authedActiveCommunityProfile: y,
          validBadges: [_$$op.PURCHASED, _$$op.OFF_PLATFORM, _$$op.FREEMIUM, _$$op.PRICE]
        })
      }), x ? jsx(_$$z2, {
        src: s.redirect_snapshot_url,
        context: _$$_Y.WHITEBOARD
      }) : jsx(_$$_4, {
        src: s.redirect_snapshot_url,
        widget: s,
        analytics: {
          triggeredFrom: Vq(tabManager.activeTab),
          searchQuery
        },
        context: _$$_Y.WHITEBOARD
      })]
    }),
    bottomRow: jsx(_$$dY.FigJamMetadata, {
      name: s.name,
      onClick: () => setPreviewResource({
        id: r,
        type: Rt.WIDGETS
      }),
      publishers: a?.community_publishers?.accepted,
      showLockIcon: e.showLockIcon,
      showPaymentError: p,
      rightAlignedElement: jsx('div', {
        className: ex()('browse_widgets_universal_modal_tiles--saveButtonInTile--KIOlI', {
          [_$$_5]: !isSavedForUser
        }),
        children: jsx(_$$_W, {
          resourceId: e.widgetId,
          resourceType: ResourceTypeNoComment.WIDGET,
          parentView: _$$nN2.TILE
        })
      })
    }),
    onClick: x || p ? () => setPreviewResource({
      id: r,
      type: Rt.WIDGETS
    }) : void 0,
    dataTestId: `figjam-widget-tile-${r}`
  });
});
let aK = 'browse_resources_all_search_view--sectionHeaderContainer--fg20n';
let aW = 'browse_resources_all_search_view--sectionHeader--0rdpg text--fontPos13--xW8hS text--_fontBase--QdLsd';
let az = 'browse_resources_all_search_view--seeMore--t4uuM text--fontPos13--xW8hS text--_fontBase--QdLsd';
function aY(e) {
  let {
    results
  } = _$$I(Cn.FigJam);
  let i = _$$d4();
  return e.lastPluginSearchQuery !== e.debouncedSearchQuery || e.lastWidgetSearchQuery !== e.debouncedSearchQuery || i && e.lastFaceStampSearchQuery !== e.debouncedSearchQuery ? jsx(Wd, {}) : results.normalizedSearchResults.length === 0 && e.searchTemplatesResult[_$$e7].length === 0 && e.widgetSavedSearchResultIds.length === 0 && e.widgetCommunitySearchResultIds.length === 0 && e.widgetOrgSearchResultIds.length === 0 && e.pluginSavedSearchResultIds.length === 0 && e.pluginOrgSearchResultIds.length === 0 && e.pluginCommunitySearchResultIds.length === 0 && e.widgetDevelopmentSearchResultIds.length === 0 && e.pluginDevelopmentSearchResultIds.length === 0 && e.moreResult.length === 0 && e.teamTemplatesFromSearch.length === 0 ? jsx(_$$e5, {
    illustration: _$$A9,
    query: e.query,
    cta: jsx(_$$_3, {
      url: '/community/figjam'
    })
  }) : jsxs(TrackingProvider, {
    name: 'all',
    properties: {
      resourceType: 'all',
      query: e.query
    },
    children: [jsx(a1, {
      results: e.moreResult
    }), [() => jsx(aQ, {}, 'librarySearchResults'), () => i && jsx(aJ, {
      faceStampSearchIsLoading: e.faceStampSearchIsLoading,
      query: e.query
    }, 'faceStampSearchResults'), () => jsx(a0, {
      templateSearchResults: e.searchTemplatesResult,
      teamTemplatesFromSearch: e.teamTemplatesFromSearch,
      totalNumTeamTemplatesFromSearch: e.totalNumTeamTemplatesFromSearch
    }, 'templateSearchResults'), () => jsx(aX, {
      savedSearchResultIds: e.widgetSavedSearchResultIds,
      communitySearchResultIds: e.widgetCommunitySearchResultIds,
      orgSearchResultIds: e.widgetOrgSearchResultIds,
      developmentSearchResultIds: e.widgetDevelopmentSearchResultIds,
      searchIsLoading: e.widgetSearchIsLoading,
      searchHasResolved: e.widgetSearchHasResolved
    }, 'widgetSearchResults'), () => jsx(aq, {
      savedSearchResultIds: e.pluginSavedSearchResultIds,
      communitySearchResultIds: e.pluginCommunitySearchResultIds,
      orgSearchResultIds: e.pluginOrgSearchResultIds,
      developmentSearchResultIds: e.pluginDevelopmentSearchResultIds,
      searchIsLoading: e.pluginSearchIsLoading,
      searchHasResolved: e.pluginSearchHasResolved
    }, 'pluginSearchResults')].map(e => e())]
  });
}
function aX(e) {
  let t = _$$cX().tabManager;
  let i = e.savedSearchResultIds.concat(e.communitySearchResultIds, e.orgSearchResultIds);
  let n = Math.max(i.length + e.developmentSearchResultIds.length - 4, 0);
  let r = i.slice(0, 4);
  let a = Math.min(e.developmentSearchResultIds.length, 4 - r.length);
  return i.length === 0 ? null : jsxs(Fragment, {
    children: [jsxs('div', {
      className: aK,
      children: [jsx('div', {
        children: jsx('div', {
          className: aW,
          children: renderI18nText('whiteboard.inserts.widgets')
        })
      }), n > 0 && jsx('button', {
        className: az,
        onClick: () => {
          t.setActiveTab(TabCategory.WIDGETS);
        },
        children: `See ${n} more ${pluralize(n, 'result')}`
      })]
    }), jsx('div', {
      className: 'browse_resources_all_search_view--widgetTilesGridContainer--MDlpu browse_widgets_view--widgetTilesGridContainer--t5-lL',
      children: jsxs(Fragment, {
        children: [r.map(e => jsx(aG, {
          widgetId: e
        }, e)), e.developmentSearchResultIds.slice(0, a).map(e => jsx(aV, {
          localFileId: e,
          tab: TabCategory.DEVELOPMENT
        }, e))]
      })
    })]
  });
}
function aq(e) {
  let t = _$$cX().tabManager;
  let i = e.savedSearchResultIds.concat(e.communitySearchResultIds, e.orgSearchResultIds);
  let n = Math.max(i.length + e.developmentSearchResultIds.length - 4, 0);
  let r = i.slice(0, 4);
  let a = Math.min(e.developmentSearchResultIds.length, 4 - r.length);
  return i.length === 0 ? null : jsxs(Fragment, {
    children: [jsxs('div', {
      className: ex()(aK, 'browse_resources_all_search_view--pluginCategorySectionHeaderPadding--RKhPp'),
      children: [jsx('div', {
        children: jsx('div', {
          className: aW,
          children: renderI18nText('whiteboard.inserts.plugins')
        })
      }), n > 0 && jsx('button', {
        className: az,
        onClick: () => {
          t.setActiveTab(TabCategory.PLUGINS);
        },
        children: `See ${n} more ${pluralize(n, 'result')}`
      })]
    }), jsxs(Fragment, {
      children: [r.slice(0, 4).map(e => jsx(aC, {
        pluginId: e,
        view: TabCategory.PLUGINS
      }, e)), e.developmentSearchResultIds.slice(0, a).map(e => jsx(av, {
        localFileId: e,
        view: TabCategory.DEVELOPMENT
      }, e))]
    })]
  });
}
function aJ(e) {
  let t = U5(e.query);
  let {
    setPreviewResource
  } = _$$cX();
  return t.length === 0 ? null : jsxs(Fragment, {
    children: [jsxs('div', {
      className: aK,
      children: [jsx('div', {
        className: aW,
        children: renderI18nText('whiteboard.inserts.faces_title')
      }), t.length > 5 && !e.faceStampSearchIsLoading && jsx('button', {
        className: az,
        onClick: () => {
          setPreviewResource({
            id: 'FACE_STAMPS',
            type: Rt.ORG_FACE_STAMPS
          });
        },
        children: renderI18nText('whiteboard.inserts.see_more')
      })]
    }), jsx('div', {
      className: _$$ts2,
      children: e.faceStampSearchIsLoading ? jsx('div', {
        className: 'browse_resources_all_search_view--skeletonContainer--W9B65',
        children: jsx(_$$_b2, {
          rows: 1,
          showHeader: !1
        })
      }) : jsx(Jd, {
        maxRows: 1,
        isLoading: !1,
        users: t
      })
    })]
  });
}
function aQ() {
  let e = _$$cX().tabManager;
  let {
    results
  } = _$$I(Cn.FigJam);
  let i = useMemo(() => Ow(results.normalizedSearchResults), [results.normalizedSearchResults]);
  let n = Math.max(i.length - 12, 0);
  let r = useDispatch<AppDispatch>();
  let a = selectCurrentFile();
  let {
    fileVersion,
    loadingState
  } = selectWithShallowEqual(e => ({
    fileVersion: e.fileVersion,
    loadingState: e.loadingState
  }));
  let u = a && fileVersion && isNullOrFailure(loadingState, generateRetrievingSubscribedComponentsKey(a.key));
  return (useEffect(() => {
    u && r(zK());
  }, [r, u]), i.length === 0) ? null : jsxs(Fragment, {
    children: [jsxs('div', {
      className: aK,
      children: [jsx('div', {
        children: jsx('div', {
          className: aW,
          children: renderI18nText('whiteboard.inserts.stickers')
        })
      }), n > 0 && jsx('button', {
        className: az,
        onClick: () => {
          e.setActiveTab(TabCategory.STICKERS_AND_COMPONENTS);
        },
        children: renderI18nText('whiteboard.inserts.see_num_more_resources', {
          numMoreResources: n
        })
      })]
    }), jsx(_$$lU, {
      items: M8(i.slice(0, 12)),
      showContextMenu: !0,
      layoutOverride: _$$rp.SMALL
    })]
  });
}
function a0(e) {
  let t = _$$cX().tabManager;
  let i = useSelector(e => e.hubFiles);
  let n = (e.templateSearchResults[_$$e7] || []).map(e => i[e]);
  let r = [...e.teamTemplatesFromSearch.map(e => ({
    type: TeamTemplateType.TeamTemplate,
    template: e
  })), ...n.map(e => ({
    type: TeamTemplateType.HubFile,
    template: e
  }))];
  let a = Math.max(n.length + e.totalNumTeamTemplatesFromSearch - 4, 0);
  return r.length === 0 ? null : jsxs(Fragment, {
    children: [jsxs('div', {
      className: aK,
      children: [jsx('div', {
        className: aW,
        children: renderI18nText('whiteboard.inserts.templates')
      }), a > 0 && jsx('button', {
        className: az,
        onClick: () => {
          t.setActiveTab(TabCategory.TEMPLATES);
        },
        children: renderI18nText('whiteboard.inserts.see_num_more_resources', {
          numMoreResources: a
        })
      })]
    }), jsx(_$$g3, {
      templates: r.slice(0, 4),
      templateInsertionLocation: FileTypeSwitch.CURRENT_FILE
    })]
  });
}
function a1(e) {
  return jsx('div', {
    className: 'browse_resources_all_search_view--moreTopPadding--NroRc',
    children: e.results.map((e, t) => jsx(e, {}, t))
  });
}
let sr = 'browse_resources_use_cases--sectionHeader--bfznu text--fontPos13--xW8hS text--_fontBase--QdLsd';
let sa = 'browse_resources_use_cases--buttonText--zK9DZ';
let ss = 'browse_resources_use_cases--flexContainer--dANvZ';
let so = 'browse_resources_use_cases--useCaseSectionHeader--e5Nxj browse_resources_use_cases--sectionHeader--bfznu text--fontPos13--xW8hS text--_fontBase--QdLsd';
let sl = 'browse_resources_use_cases--sectionHeaderSubtext--5e-e- text--fontPos11--2LvXf text--_fontBase--QdLsd';
let sd = 'browse_resources_use_cases--resourceContainer--rxSfA browse_explore_category_view--resourceContainer--pdbQU';
let sc = 'browse_resources_use_cases--resourceMetadata--AdJJW text--fontPos11--2LvXf text--_fontBase--QdLsd browse_resources_use_cases--hasFocusOutline--ak8SN';
let su = 'browse_resources_use_cases--stickerWidgetEllipsis--KpMzQ ellipsis--ellipsis--Tjyfa';
let sp = 'browse_resources_use_cases--templateEllipsis--8hbx5 ellipsis--ellipsis--Tjyfa';
function sh({
  onClick: e,
  name: t,
  localizedName: i,
  localizedDescription: n,
  children: r
}) {
  let a = e ? jsxs(ButtonPrimitive, {
    className: sr,
    onClick: e,
    children: [jsx('div', {
      className: sa,
      children: i || t
    }), jsx(_$$n6, {})]
  }) : jsx('div', {
    className: sr,
    children: jsx('div', {
      className: sa,
      children: i || t
    })
  });
  return jsxs('div', {
    className: 'browse_resources_use_cases--useCaseSection--c00-9',
    children: [a, jsx('div', {
      className: sl,
      children: n
    }), jsx('div', {
      className: 'browse_resources_use_cases--sectionResources--WMI76',
      children: r
    })]
  }, t);
}
function sm() {
  let e = useSelector(e => e.figjamDefaultInserts.useCases);
  let t = e => e === 'Brainstorm together' ? getI18nString('whiteboard.inserts.use_cases_brainstorm_together') : e === 'Run a meeting' ? getI18nString('whiteboard.inserts.use_cases_run_a_meeting') : e === 'Diagram anything' ? getI18nString('whiteboard.inserts.use_cases_diagram_anything') : e === 'Lead a workshop' ? getI18nString('whiteboard.inserts.use_cases_lead_a_workshop') : e === 'Break the ice' ? getI18nString('whiteboard.inserts.use_cases_break_the_ice') : void 0;
  let i = e => e === 'Brainstorm together' ? getI18nString('whiteboard.inserts.use_cases_brainstorm_together_description') : e === 'Run a meeting' ? getI18nString('whiteboard.inserts.use_cases_run_a_meeting_description') : e === 'Diagram anything' ? getI18nString('whiteboard.inserts.use_cases_diagram_anything_description') : e === 'Lead a workshop' ? getI18nString('whiteboard.inserts.use_cases_lead_a_workshop_description') : e === 'Break the ice' ? getI18nString('whiteboard.inserts.use_cases_break_the_ice_description') : void 0;
  let n = e.filter(e => !e.name.includes('Whats New'));
  return n.length === 0 ? jsx(sb, {}) : jsx(Fragment, {
    children: n.map(e => e.name === 'collage_items' ? null : jsx(sh, {
      name: e.name,
      localizedName: t(e.name),
      localizedDescription: i(e.name),
      children: e.resources.slice(0, 3).map(t => jsxs(_$$Fragment, {
        children: [t && 'is_widget' in t && !!t.is_widget && jsx(sx, {
          widgetId: t.id
        }), t && 'type' in t && t.type === PrimaryWorkflowEnum.COMPONENT && jsx(sj, {
          resource: t
        }), t && 'viewer_mode' in t && !!t.viewer_mode && jsx(s_, {
          template: {
            type: TeamTemplateType.HubFile,
            template: t
          }
        })]
      }, [e.name, t ? t.id : ''].join('_')))
    }, e.name))
  });
}
function sf(e) {
  let t = useSelector(e => e.figjamDefaultInserts.useCases).find(t => t.name === e.useCaseName);
  if (!t) return null;
  let i = t.resources.filter(e => 'viewer_mode' in e && !!e.viewer_mode);
  let n = t.resources.filter(e => 'is_widget' in e && !!e.is_widget);
  let r = t.resources.filter(e => 'type' in e && e.type === PrimaryWorkflowEnum.COMPONENT);
  let a = t.resources.filter(e => 'is_widget' in e && !e.is_widget);
  return jsxs(TrackingProvider, {
    name: 'use_case',
    properties: {
      useCase: t.name
    },
    children: [!!i.length && jsxs(Fragment, {
      children: [jsx('div', {
        className: so,
        children: renderI18nText('whiteboard.inserts.templates')
      }), jsx(_$$g3, {
        templates: i.map(e => ({
          type: TeamTemplateType.HubFile,
          template: e
        })),
        templateInsertionLocation: FileTypeSwitch.CURRENT_FILE
      })]
    }), !!n.length && jsxs(Fragment, {
      children: [jsx('div', {
        className: so,
        children: renderI18nText('whiteboard.inserts.widgets')
      }), jsx('div', {
        className: 'browse_resources_use_cases--widgetTilesGridContainer--gv30z browse_widgets_view--widgetTilesGridContainer--t5-lL',
        children: n.map(e => jsx(ButtonPrimitive, {
          className: sd,
          children: jsx(aG, {
            widgetId: e.id
          }, e.id)
        }, e.id))
      })]
    }), !!r.length && jsxs(Fragment, {
      children: [jsx('div', {
        className: so,
        children: renderI18nText('whiteboard.inserts.stickers_and_components')
      }), jsx(_$$OS, {
        items: r,
        showContextMenu: !0
      })]
    }), !!a.length && jsxs(Fragment, {
      children: [jsx('div', {
        className: so,
        children: renderI18nText('whiteboard.inserts.plugins')
      }), jsx('div', {
        className: 'browse_resources_use_cases--pluginCategoryViewPadding--e1D-M',
        children: a.map(e => jsx(ButtonPrimitive, {
          className: sd,
          children: jsx(aC, {
            pluginId: e.id,
            view: TabCategory.ALL
          }, e.id)
        }, e.id))
      })]
    })]
  });
}
function s_({
  template: e,
  showPublisherName: t = !1
}) {
  let {
    imageUrl,
    clientMeta,
    thumbnailIsSet,
    isWhiteboard,
    hubFileId,
    name,
    primaryKey,
    publishers,
    resizedThumbnailUrls
  } = _$$fG2()(e);
  let p = _$$b4();
  let {
    isInsertingTemplate
  } = Fz();
  let {
    dragState,
    onInsertableResourcePointerDown
  } = _$$B2({
    resource: e,
    clickToInsert_DEPRECATED: !0,
    afterSuccessfulInsert: p,
    triggeredFrom: 'universal-insert-figjam-all-use-case'
  });
  let _ = publishers[0];
  return jsxs('div', {
    className: 'browse_resources_use_cases--templatePreview--vlIll browse_resources_use_cases--resourcePreview--rTL2d',
    children: [jsx(zq, {
      image: jsx('div', {
        onPointerDown: onInsertableResourcePointerDown,
        className: dragState ? _$$J9 : void 0,
        children: jsxs(FK, {
          backgroundColor: convertToRgba(clientMeta),
          children: [jsx(zx.Cover, {
            children: jsx('div', {
              className: 'browse_resources_use_cases--hoverOverlay--84hkm browse_templates_tab--hoverOverlay--BpdyD'
            })
          }), jsx(zx.Center, {
            children: jsx(_$$i4, {
              insertTemplate: noop,
              isInsertingTemplate: isInsertingTemplate(primaryKey),
              shouldUseOpaqueBackground: !0,
              children: getTemplateActionLabel(FileTypeSwitch.CURRENT_FILE)
            })
          }), jsx(Ho, {
            image: imageUrl || void 0,
            isSet: thumbnailIsSet,
            isWhiteboard,
            hubFileId,
            alt: name,
            resizedThumbnailUrls
          })]
        })
      }),
      bottomRow: jsxs('button', {
        className: ex()(sc, t && _ && 'browse_resources_use_cases--resourceMetadataWithPublisher--V9KyE'),
        role: e.type === TeamTemplateType.HubFile ? void 0 : 'presentation',
        children: [jsx('div', {
          className: ss,
          children: jsx('div', {
            className: sp,
            children: name
          })
        }), t && !!_ && jsx('div', {
          className: ss,
          children: jsx('div', {
            className: ex()(sp, 'browse_resources_use_cases--publisher--2akDJ'),
            children: renderI18nText('whiteboard.inserts.by_publisher_name', {
              publisherName: _.name
            })
          })
        })]
      })
    }), jsx(_$$S, {
      dragState
    })]
  });
}
function sx(e) {
  let t = e.widgetId;
  let i = useSelector(e => e.publishedWidgets[t]);
  let n = i ? getCurrentPluginVersion(i) : null;
  return i && n ? jsx(sg, {
    widgetVersion: n
  }) : null;
}
function sg(e) {
  let {
    dragState,
    onInsertableResourcePointerDown
  } = _$$P2({
    resource: e.widgetVersion,
    clickToInsert_DEPRECATED: !0,
    afterSuccessfulInsert: _$$b4(),
    triggeredFrom: 'universal-insert-figjam-all-use-case'
  });
  return jsxs('div', {
    children: [jsx(_$$sU, {
      className: 'browse_resources_use_cases--widgetPreview--egQ9B browse_resources_use_cases--resourcePreview--rTL2d',
      image: jsx(WM, {
        backgroundColor: 'transparent',
        removeBorder: !0,
        className: 'browse_resources_use_cases--widgetImageContainer--diYt5',
        children: jsx(ButtonPrimitive, {
          htmlAttributes: {
            onPointerDown: onInsertableResourcePointerDown
          },
          className: 'browse_resources_use_cases--widgetButtonContainer--hLY9z browse_resources_use_cases--hasFocusOutline--ak8SN',
          children: jsx('img', {
            className: ex()('browse_resources_use_cases--widgetImage--Rciys', {
              [_$$J9]: !!dragState
            }),
            src: e.widgetVersion.redirect_snapshot_url,
            alt: ''
          })
        })
      }),
      bottomRow: jsx(ButtonPrimitive, {
        className: sc,
        children: jsx('div', {
          className: ss,
          children: jsx('div', {
            className: su,
            children: e.widgetVersion.name
          })
        })
      })
    }), jsx(_$$E4, {
      dragState
    })]
  });
}
function sj(e) {
  let t = _$$b4();
  return jsxs('div', {
    className: 'browse_resources_use_cases--stickerPreview--ESlWj browse_resources_use_cases--resourcePreview--rTL2d',
    children: [jsx(_$$lX, {
      buttonProps: {
        clickToInsert: !0
      },
      draggable: {
        sourceForTracking: 'universal-insert-figjam-all-use-case',
        afterSuccessfulInsert: t
      },
      height: 90,
      isFigJam: !0,
      isSearch: !1,
      item: e.resource,
      noBackground: !0,
      shouldHideDescription: !0,
      shouldShowShadowOnHover: !0,
      showName: !1,
      width: 90
    }), jsx('div', {
      className: 'browse_resources_use_cases--stickerResourceMetadata--vE2eG',
      children: jsx(ButtonPrimitive, {
        className: sc,
        children: jsx('div', {
          className: su,
          children: e.resource.name
        })
      })
    }), jsx(_$$he, {})]
  });
}
function sb() {
  return jsxs(Fragment, {
    children: [jsx(sy, {
      name: getI18nString('whiteboard.inserts.use_cases_brainstorm_together'),
      description: getI18nString('whiteboard.inserts.use_cases_brainstorm_together_description')
    }), jsx(sy, {
      name: getI18nString('whiteboard.inserts.use_cases_run_a_meeting'),
      description: getI18nString('whiteboard.inserts.use_cases_run_a_meeting_description')
    }), jsx(sy, {
      name: getI18nString('whiteboard.inserts.use_cases_diagram_anything'),
      description: getI18nString('whiteboard.inserts.use_cases_diagram_anything_description')
    }), jsx(sy, {
      name: getI18nString('whiteboard.inserts.use_cases_lead_a_workshop'),
      description: getI18nString('whiteboard.inserts.use_cases_lead_a_workshop_description')
    }), jsx(sy, {
      name: getI18nString('whiteboard.inserts.use_cases_break_the_ice'),
      description: getI18nString('whiteboard.inserts.use_cases_break_the_ice_description')
    })]
  });
}
function sy({
  name: e,
  description: t,
  miniCardsOnly: i = !1
}) {
  return jsxs('div', {
    className: ex()('browse_resources_use_cases--useCaseSectionLoading--jAjoI browse_resources_use_cases--useCaseSection--c00-9', {
      'browse_resources_use_cases--mini_useCaseSectionLoading--Er0Hh': i
    }),
    children: [jsxs('div', {
      className: sr,
      children: [e, jsx(_$$n6, {})]
    }), jsx('div', {
      className: sl,
      children: t
    })]
  }, e);
}
function sv({
  currentOrg: e
}) {
  let {
    teamTemplates,
    isLoading
  } = useRecentTemplates(_$$_Y.WHITEBOARD);
  let {
    setSelectedCategory
  } = _$$cX();
  let r = !teamTemplates?.length;
  let a = getI18nString('whiteboard.inserts.start_from_a_template');
  let s = getI18nString('whiteboard.inserts.try_handmade_templates_created_by_your_team');
  return isLoading ? jsx(sy, {
    name: a,
    description: s,
    miniCardsOnly: !0
  }) : r ? null : jsx(sh, {
    name: a,
    localizedName: a,
    localizedDescription: s,
    onClick: () => setSelectedCategory({
      resourceType: Rt.TEAM_TEMPLATES,
      id: '',
      title: getI18nString('whiteboard.inserts.org_name_templates', {
        orgName: e.name
      })
    }),
    children: jsx(AutoLayout, {
      spacing: 32,
      horizontalAlignItems: 'center',
      children: teamTemplates.map(e => jsx(s_, {
        template: e,
        showPublisherName: !0
      }, _$$gp(e)))
    })
  });
}
function sL(e) {
  let t = _$$L2();
  let i = _$$d4();
  return jsxs('div', {
    className: e.hasTopPadding ? 'browse_more_view--moreViewContainer--blJLd' : void 0,
    children: [t ? jsx(sN, {}) : jsx(sO, {}), jsx(_$$l5, {}), i && jsx(H_, {}), jsx(_$$j3, {}), jsx(_$$m_, {}), jsx(G0, {}), jsx(_$$fQ, {})]
  });
}
function sN() {
  let {
    numVisibleTools
  } = useAtomWithSubscription(Kj);
  let t = _$$hn(numVisibleTools);
  return jsx(Fragment, {
    children: t.map(({
      toolId: e
    }) => jsx(sA, {
      toolId: e
    }, e))
  });
}
function sA({
  toolId: e
}) {
  switch (e) {
    case DesignGraphElements.TYPE:
      return jsx(_$$ue, {});
    case DesignGraphElements.SECTION:
      return jsx(Sn, {});
    case DesignGraphElements.TABLE:
      return jsx(_$$vh, {});
    case DesignGraphElements.STAMP:
      return jsx(Ox, {});
    case DesignGraphElements.COMMENTS:
      return jsx(v7, {});
    case _$$y2:
      return jsx(Lf, {});
    default:
      return null;
  }
}
function sO() {
  let e = useAtomWithSubscription(_$$c4);
  let t = _$$dQ();
  let i = Q6(e?.numPrimaryTools ?? 0);
  let n = t.filter(e => !i.includes(e));
  return jsx(Fragment, {
    children: n.map(e => jsx(sk, {
      toolKey: e
    }, e))
  });
}
function sk({
  toolKey: e
}) {
  switch (e) {
    case 'text':
      return jsx(_$$ue, {});
    case 'section':
      return jsx(Sn, {});
    case 'table':
      return jsx(_$$vh, {});
    case 'stamp':
      return jsx(Ox, {});
    case 'comments':
      return jsx(v7, {});
    case 'quick-actions-v2':
      return jsx(Lf, {});
    default:
      return null;
  }
}
let sM = memo(e => {
  let t = t => hasLocalFileId(t) ? jsx(av, {
    localFileId: t.localFileId,
    view: e.view
  }, `development_plugin_${t.localFileId}`) : jsx(aC, {
    pluginId: t.plugin_id,
    view: e.view,
    pluginVersion: t
  }, `recent_plugin_${t.plugin_id}`);
  return jsx(Fragment, {
    children: e.items.map(e => t(e))
  });
});
function sD() {
  let e = Hb();
  let t = useDedupedRecentlyUsedPlugins().filter(e);
  return jsx(Fragment, {
    children: jsx(sM, {
      items: t.slice(0, 4),
      view: TabCategory.RECENTS
    })
  });
}
function sP() {
  let e = _$$eE(FDocumentType.FigJam);
  let t = _$$ik(e, 'templates', (e, t) => !t.some(t => t.type === TeamTemplateType.HubFile && t.template.id === e.id), 4);
  let i = _$$mk(t, [useIsLoaded(recentItemsThunks.fetchTemplatesMetadata.loadingKeyForPayload({
    key: FDocumentType.FigJam
  })), useIsLoaded(FETCH_FIGJAM_DEFAULT_INSERTS)]);
  return jsx(_$$g3, {
    templates: i,
    templateInsertionLocation: FileTypeSwitch.CURRENT_FILE
  });
}
let sU = 'browse_widgets_view--sectionHeader--rxCOO text--fontPos13--xW8hS text--_fontBase--QdLsd';
let sF = 'browse_widgets_view--widgetTilesGridContainer--t5-lL';
let sH = memo(e => {
  let t = e => hasLocalFileId(e) ? jsx(aV, {
    localFileId: e.localFileId,
    tab: TabCategory.RECENTS
  }, e.localFileId) : jsx(aG, {
    widgetId: e.plugin_id,
    widgetVersion: e,
    tab: TabCategory.RECENTS
  }, e.plugin_id);
  return jsx('div', {
    className: sF,
    children: e.items.map(e => t(e))
  });
});
function sB({}) {
  let e = Sp();
  let t = useDedupedRecentlyUsedWidgets().filter(e);
  return jsx(sH, {
    items: t.slice(0, 4)
  });
}
let sG = 'browse_resources_all_tab--divider--lN9-d';
let sK = 'browse_resources_all_tab--sectionBottomPadding--3jqXm';
function sW() {
  let e = qZ();
  let t = getCurrentTemplateEntity();
  let i = useIsLoading(FETCH_FIGJAM_DEFAULT_INSERTS);
  let n = useIsLoading(recentItemsThunks.fetchWidgetsMetadata.loadingKeyForPayload({
    key: FDocumentType.FigJam
  }));
  let r = useIsLoading(_$$fi);
  let a = useIsLoading(recentItemsThunks.fetchTemplatesMetadata.loadingKeyForPayload({
    key: FDocumentType.FigJam
  }));
  let s = useSelector(e => e.figjamDefaultInserts.useCases);
  let l = !!e && s.length === 0;
  return i || e && l || !e && (n || r || a) ? jsx(Wd, {}) : jsx(TrackingProvider, {
    name: 'all',
    children: jsxs('div', {
      children: [jsx(O9, {
        applyInsertStyling: !0
      }), t?.type === 'org' && jsx(sv, {
        currentOrg: t.entity
      }), e ? jsx(sm, {}) : jsxs(Fragment, {
        children: [jsx(s$, {}), jsx('div', {
          className: sG
        }), jsx(sY, {}), jsx('div', {
          className: sG
        }), jsx(sz, {}), jsx('div', {
          className: sG
        }), jsx(sZ, {}), jsx('div', {
          className: sG
        }), jsx(sX, {})]
      })]
    })
  });
}
function sz() {
  let e = _$$cX().tabManager;
  return jsxs('div', {
    className: sK,
    children: [jsx(sq, {
      title: getI18nString('whiteboard.inserts.widgets'),
      subtitle: getI18nString('whiteboard.inserts.widgets_subtitle'),
      onClick: () => e.setActiveTab(TabCategory.WIDGETS),
      showCaret: !0,
      shorterSectionHeader: !1
    }), jsx(sB, {})]
  });
}
function sZ() {
  let e = _$$cX().tabManager;
  return jsxs('div', {
    className: sK,
    children: [jsx(sq, {
      title: getI18nString('whiteboard.inserts.plugins'),
      subtitle: getI18nString('whiteboard.inserts.plugins_subtitle'),
      onClick: () => e.setActiveTab(TabCategory.PLUGINS),
      showCaret: !0,
      shorterSectionHeader: !0
    }), jsx(sD, {})]
  });
}
function s$() {
  let e = _$$cX().tabManager;
  return jsxs('div', {
    className: sK,
    children: [jsx(sq, {
      title: getI18nString('whiteboard.inserts.stickers'),
      subtitle: getI18nString('whiteboard.inserts.stickers_subtitle'),
      onClick: () => e.setActiveTab(TabCategory.STICKERS_AND_COMPONENTS),
      showCaret: !0,
      shorterSectionHeader: !1
    }), jsx(zz, {})]
  });
}
function sY() {
  let e = _$$cX().tabManager;
  return jsxs('div', {
    className: sK,
    children: [jsx(sq, {
      title: getI18nString('whiteboard.inserts.templates'),
      subtitle: getI18nString('whiteboard.inserts.templates_subtitle'),
      onClick: () => e.setActiveTab(TabCategory.TEMPLATES),
      showCaret: !0,
      shorterSectionHeader: !1
    }), jsx(sP, {})]
  });
}
function sX() {
  let e = _$$cX().tabManager;
  return jsxs('div', {
    className: sK,
    children: [jsx(sq, {
      title: getI18nString('whiteboard.inserts.more'),
      onClick: () => e.setActiveTab(TabCategory.MORE),
      showCaret: !0,
      shorterSectionHeader: !0
    }), jsx(sL, {
      hasTopPadding: !1
    })]
  });
}
function sq(e) {
  return jsxs(ButtonPrimitive, {
    className: ex()({
      'browse_resources_all_tab--sectionHeaderContainer--2ZoeS': !!e.subtitle,
      'browse_resources_all_tab--sectionHeaderContainerNoSubtitle--qdp9l browse_resources_all_tab--sectionHeaderContainer--2ZoeS': !e.subtitle,
      'browse_resources_all_tab--sectionHeaderContainerShorter--jEE47': !!e.shorterSectionHeader
    }),
    onClick: e.onClick,
    children: [jsxs('div', {
      className: 'browse_resources_all_tab--sectionTitleContainer--5Z1j0',
      children: [jsxs('div', {
        className: 'browse_resources_all_tab--sectionHeader--Xq6Ds text--fontPos16--oMC-G text--_fontBase--QdLsd',
        children: [' ', e.title, ' ']
      }), e.showCaret && jsx(_$$a5, {
        className: 'browse_resources_all_tab--icon--NB560'
      })]
    }), e.subtitle && jsx('div', {
      className: 'browse_resources_all_tab--sectionHeaderSubtext--7a8Mb text--fontPos13--xW8hS text--_fontBase--QdLsd',
      children: e.subtitle
    })]
  });
}
function sQ({
  children: e,
  searchQuery: t,
  setSearchQuery: i,
  resourceDetailViewContent: n,
  resourceDetailViewHeader: r,
  categoryViewContent: a,
  categoryViewHeader: s,
  mainScrollContainerRef: l,
  categoryScrollContainerRef: c,
  initialModalPosition: u,
  modalPosition: p,
  bounds: h,
  showLeftPinBound: m,
  setShowLeftPinBound: f,
  shouldSnapToPosition: _,
  entryPointId: x,
  disableDragging: g,
  setPinned: j
}) {
  let y = useDispatch<AppDispatch>();
  let {
    tabManager
  } = _$$cX();
  let C = !a && !s && !n && !r;
  let T = s && a;
  let E = n && r;
  let S = Kx()?.shouldOptimizeForIpadApp;
  return jsxs(_$$B3.Root, {
    bounds: h,
    disableDragging: g,
    entryPointId: x,
    initialPosition: u,
    modalPosition: p,
    setPinned: j,
    setShowLeftPinBound: f,
    shouldOptimizeForIpadApp: S,
    shouldShowTabView: C,
    shouldSnapToPosition: _,
    showLeftPinBound: m,
    children: [jsxs(_$$B3.TabView, {
      hasSlidingPaneStyle: C,
      children: [jsx(_$$B3.SearchBar, {
        searchQuery: t,
        setSearchQuery: i,
        showCloseButton: !0,
        topBarStyle: 'browse_all_resources_modal_container--figjamTopBarContainer--KF-6s',
        onFocus: () => y(searchStartSession({
          entryPoint: 'figjam:inserts'
        }))
      }), jsx('div', {
        className: 'browse_all_resources_modal_container--divider--U9jtu'
      }), jsx(_$$B3.ScrollContainer, {
        type: 'main',
        currentTab: tabManager.activeTab,
        scrollContainerRef: l,
        shouldShowTabView: C,
        toolbeltHeight: zD,
        children: e
      })]
    }), T && jsxs(_$$B3.TabView, {
      hasSlidingPaneStyle: !E,
      children: [s, jsx(_$$B3.ScrollContainer, {
        type: 'category',
        currentTab: tabManager.activeTab,
        scrollContainerRef: c,
        shouldShowTabView: C,
        toolbeltHeight: zD,
        children: a
      })]
    }), E && jsxs(_$$B3.TabView, {
      hasSlidingPaneStyle: !0,
      children: [r, jsx(_$$B3.ScrollContainer, {
        type: 'detail',
        currentTab: tabManager.activeTab,
        shouldShowTabView: C,
        toolbeltHeight: zD,
        children: n
      })]
    })]
  });
}
let s5 = 'browse_explore_category_view--resourceContainer--pdbQU';
function s6(e) {
  let t = e.selectedCategoryId;
  let {
    shelves,
    isLoading
  } = _$$d5(e.shelfType);
  let r = shelves ? shelves.find(e => e.id === t) : void 0;
  if (!shelves || shelves.length === 0) return null;
  if (isLoading) return jsx(_$$L3, {});
  let a = t => jsx('button', {
    className: s5,
    children: e.renderResource(t)
  }, t.id);
  return r ? jsxs(TrackingProvider, {
    name: 'explore',
    properties: {
      resourceType: e.resourceType,
      selectedCategory: t
    },
    children: [jsx('div', {
      className: e.resourceType === HubTypeEnum.WIDGET ? 'browse_explore_category_view--widgetTilesGridContainer--U4Dl6 browse_widgets_view--widgetTilesGridContainer--t5-lL' : 'browse_explore_category_view--pluginCategoryViewPadding--tst89',
      children: r.shelf_content.map(e => a(e))
    }), jsx(_$$q, {
      resourceType: e.resourceType
    })]
  }) : null;
}
function s4(e) {
  let t = U5(e.debouncedSearchQuery);
  let i = _$$d4();
  return e.results.length === 0 && t.length === 0 ? jsx(TrackingProvider, {
    name: 'more',
    properties: {
      query: e.debouncedSearchQuery
    },
    children: jsx(_$$e5, {
      illustration: _$$A9,
      defaultDisplayStringResourceType: 'items',
      query: e.query
    })
  }) : jsx(TrackingProvider, {
    name: 'more',
    properties: {
      query: e.debouncedSearchQuery
    },
    children: jsxs('div', {
      className: 'browse_more_search_view--searchTopPadding--iZQ6F',
      children: [i && jsx(aJ, {
        faceStampSearchIsLoading: e.faceStampSearchIsLoading,
        query: e.query
      }), e.results.map((e, t) => jsx(e, {}, t))]
    })
  });
}
let s9 = 'browse_plugins_search_view--sectionHeader--OKPiP text--fontPos13--xW8hS text--_fontBase--QdLsd';
function s8(e) {
  let {
    query,
    debouncedSearchQuery,
    hasResolved,
    savedSearchResultIds,
    communitySearchResultIds,
    orgSearchResultIds,
    developmentSearchResultIds,
    lastPluginSearchQuery
  } = e;
  let u = useSelector(e => e.currentUserOrgId && e.orgById[e.currentUserOrgId]);
  let p = savedSearchResultIds && savedSearchResultIds.length > 0;
  let h = communitySearchResultIds && communitySearchResultIds.length > 0;
  let m = developmentSearchResultIds && developmentSearchResultIds.length > 0;
  let f = u && orgSearchResultIds && orgSearchResultIds.length > 0;
  return lastPluginSearchQuery !== debouncedSearchQuery ? jsx(VR, {}) : !hasResolved || p || h || f || m ? jsxs(TrackingProvider, {
    name: 'plugins',
    properties: {
      resourceType: 'plugin',
      query: debouncedSearchQuery
    },
    children: [p && jsxs(Fragment, {
      children: [jsx('div', {
        className: s9,
        children: renderI18nText('whiteboard.inserts.plugin_recents')
      }), savedSearchResultIds.map(e => jsx(aC, {
        pluginId: e,
        view: TabCategory.SAVED
      }, `saved_plugin_${e}`))]
    }), m && jsxs(Fragment, {
      children: [jsx('div', {
        className: s9,
        children: renderI18nText('whiteboard.inserts.development')
      }), developmentSearchResultIds.map(e => jsx(av, {
        localFileId: e,
        view: TabCategory.DEVELOPMENT
      }, `development_plugin_${e}`))]
    }), f && jsxs(Fragment, {
      children: [jsx('div', {
        className: s9,
        children: renderI18nText('whiteboard.inserts.plugin_from_org', {
          orgName: u.name
        })
      }), orgSearchResultIds.map(e => jsx(aC, {
        pluginId: e,
        view: TabCategory.EXPLORE
      }, `org_plugin_${e}`))]
    }), h && jsxs(Fragment, {
      children: [jsx('div', {
        className: s9,
        children: renderI18nText('whiteboard.inserts.plugin_from_community')
      }), communitySearchResultIds.map(e => jsx(aC, {
        pluginId: e,
        view: TabCategory.EXPLORE
      }, `community_plugin_${e}`))]
    })]
  }) : jsx(TrackingProvider, {
    name: 'plugins',
    properties: {
      resourceType: 'plugin',
      query: debouncedSearchQuery
    },
    children: jsx(_$$e5, {
      illustration: _$$A9,
      defaultDisplayStringResourceType: 'plugins',
      query,
      cta: jsx(_$$_3, {
        url: '/community/plugins'
      }),
      orgNameIfAllowlistEnforced: u && u.plugins_whitelist_enforced ? u.name : void 0
    })
  });
}
function os(e) {
  let t = e.extensionType === PluginType.Plugin ? E2 : Hr;
  let i = useCurrentPrivilegedPlan('BrowseExtensionsOrgAllowlistView').unwrapOr(null);
  let n = i?.key.type === OL.ORG ? i.key.parentId : void 0;
  return i && n && t.hasAllowlist({
    id: n,
    plugins_whitelist_enforced: i.pluginsWhitelistEnforced,
    widgets_whitelist_enforced: i.widgetsWhitelistEnforced
  }) && n ? jsx(ol, {
    orgId: n,
    dedupeOrgSaves: e.dedupeOrgSaves,
    extensionType: e.extensionType
  }) : null;
}
function oo(e) {
  let {
    extensionIds,
    extensionType
  } = e;
  return extensionType === PluginType.Plugin ? jsx(Fragment, {
    children: extensionIds.map(e => jsx(aC, {
      pluginId: e,
      view: TabCategory.EXPLORE
    }, e))
  }) : jsx('div', {
    className: sF,
    children: extensionIds.map(e => jsx(aG, {
      widgetId: e
    }, e))
  });
}
function ol(e) {
  let {
    orgId
  } = e;
  let i = (e.extensionType === PluginType.Plugin ? useAllowlistedPlugins : useAllowlistedWidgets)();
  let n = useMemo(() => Object.keys(i), [i]);
  let r = useCurrentFileKey();
  let a = (e.extensionType === PluginType.Plugin ? getPluginAllowListKey : getWidgetAllowListKey)(orgId, r);
  let s = useIsLoaded(a);
  let d = useInstalledPluginsAndWidgets();
  let c = e.extensionType === PluginType.Plugin ? d.orgPlugins : d.orgWidgets;
  let u = useMemo(() => e.dedupeOrgSaves ? n.filter(e => !c[e]) : n, [n, e.dedupeOrgSaves, c]);
  return s ? u.length === 0 ? null : jsxs(Fragment, {
    children: [jsx('div', {
      className: sU,
      children: renderI18nText('universal_insert.approved_from_figma_community')
    }), jsx(oo, {
      extensionType: e.extensionType,
      extensionIds: u
    })]
  }) : jsx(_$$L3, {});
}
var oh = (e => (e.RECENT_AND_SAVED = 'recent_and_saved', e.DEVELOPMENT = 'development', e.ORG = 'org', e))(oh || {});
let om = 'browse_main_view_selector--mainViewHeader--1tbfQ';
function of(e) {
  let t = useDispatch<AppDispatch>();
  let i = useCurrentUserOrg();
  let n = useCallback(e => function (e, t) {
    switch (e) {
      case oh.RECENT_AND_SAVED:
        return getI18nString('universal_insert.recents_and_saved');
      case oh.DEVELOPMENT:
        return getI18nString('universal_insert.development');
      case oh.ORG:
        return t ? getI18nString('whiteboard.inserts.plugin_from_org', {
          orgName: t.name
        }) : getI18nString('universal_insert.from_your_org');
    }
  }(e, i), [i]);
  let r = [oh.RECENT_AND_SAVED];
  let a = useSelector(e => e.universalInsertModal.scrollDevelopmentSectionIntoView);
  let s = useRef(null);
  if (s.current && a) {
    t(setUniversalInsertScrolledDevelopmentSection({}));
    let e = s.current;
    setTimeout(() => e.scrollIntoView({
      behavior: 'smooth'
    }), 0);
  }
  return (desktopAPIInstance && r.push(oh.DEVELOPMENT), r.length !== 1 || i) ? jsx('div', {
    className: om,
    ref: s,
    children: jsxs(SelectGroupLabel, {
      onChange: e.setCurrentView,
      value: e.currentView,
      recordingKey: 'figjam-browse-modal-main-view-select',
      children: [jsx(SelectSeparator, {
        label: jsx(HiddenLabel, {
          children: getI18nString('universal_insert.view_resources_by')
        })
      }), jsxs(SelectContainer, {
        children: [r.map(e => jsx(SelectOptionReset, {
          value: e,
          children: n(e)
        }, e)), i && jsx(SelectRoot, {}), i && jsx(SelectOptionReset, {
          value: oh.ORG,
          children: n(oh.ORG)
        })]
      })]
    })
  }) : jsx('div', {
    className: ex()(om, cssBuilderInstance.ml8.mt2.mb2.$),
    children: jsx('div', {
      className: 'browse_main_view_selector--mainViewSelectorTitle--WL5Qi text--fontPos13--xW8hS text--_fontBase--QdLsd',
      children: n(r[0])
    })
  });
}
let o_ = atom(oh.RECENT_AND_SAVED);
let ox = atom(oh.RECENT_AND_SAVED);
function oj() {
  let e = useLocalPluginsExcludingWidgets();
  let t = useLocalPluginsByPluginId();
  let i = useUserPublishedPlugins().filter(e => !t[e.id]);
  if (Object.keys(e).length === 0 && i.length === 0) {
    return jsx(_$$W4, {
      isWidget: !1
    });
  }
  let n = Object.keys(e).reverse();
  return jsxs(Fragment, {
    children: [n.map(e => jsx(av, {
      localFileId: Number(e),
      view: TabCategory.DEVELOPMENT
    }, `development_plugin_${e}`)), i.map(e => jsx(av, {
      publishedPlugin: e,
      view: TabCategory.DEVELOPMENT
    }, `development_plugin_${e.id}`))]
  });
}
function ob() {
  let e = getPendingPublisherWidgets();
  return e.length === 0 ? null : jsxs(TrackingProvider, {
    name: 'invited',
    children: [e.map(e => jsx(aC, {
      pluginId: e.id,
      view: TabCategory.PLUGINS,
      pluginVersion: getPluginVersion(e)
    }, e.id)), jsx(AutoLayout, {
      padding: {
        horizontal: 24
      },
      children: jsx('div', {
        className: cssBuilderInstance.wFull.h1.$,
        style: styleBuilderInstance.add({
          backgroundColor: 'var(--color-border)'
        }).$
      })
    })]
  });
}
function oE() {
  return jsxs('div', {
    className: cssBuilderInstance.flex.flexColumn.itemsCenter.alignCenter.pl16.pr16.$,
    children: [jsx('div', {
      children: jsx(SvgComponent, {
        svg: _$$A0,
        useOriginalSrcFills_DEPRECATED: !0,
        svgWidth: '90px',
        autosize: !0
      })
    }), jsx('div', {
      className: cssBuilderInstance.mb24.mt16.pl36.pr36.$,
      children: renderI18nText('whiteboard.inserts.plugin_community_disabled', {
        private_plugins: jsx(Link, {
          newTab: !0,
          href: 'https://www.figma.com/plugin-docs',
          trusted: !0,
          children: renderI18nText('whiteboard.inserts.plugin_community_disabled_private_plugins')
        })
      })
    })]
  });
}
let oS = 'browse_plugins_recents_list--loadingSpinner--ydkCW';
function ow() {
  let e = useSelector(e => e.currentUserOrgId ? e.orgById[e.currentUserOrgId] : void 0);
  return e ? jsx(oI, {
    org: e
  }) : jsx('span', {
    'className': oS,
    'data-testid': 'loading-spinner',
    'children': jsx(LoadingSpinner, {})
  });
}
function oI({
  org: e
}) {
  let t = useSelector(t => {
    let {
      orgUsersByOrgId
    } = t;
    let n = orgUsersByOrgId[e.id];
    return n[t.user.id]?.permission === _$$_D.GUEST;
  });
  let i = !!(e && e.plugins_whitelist_enforced);
  let n = useAllowlistedPlugins();
  let r = selectWithShallowEqual(i => e && !t ? filterResourcesByOrgId(filterPublishedResources(H6(Object.values(i.publishedPlugins))), e.id) : {});
  let a = Object.keys(r);
  let s = useCurrentFileKey();
  let c = getPluginAllowListKey(e?.id ?? '', s);
  let u = useIsLoaded(c);
  let p = getOrgPublishedPluginsThunk.loadingKeyForPayload(e?.id ?? '');
  let h = useIsLoaded(p);
  let m = useInstalledPluginsAndWidgets().orgPlugins;
  let f = useMemo(() => {
    let e = Object.values(m).filter(e => !r[e.plugin_id]);
    i && (e = e.filter(e => n[e.plugin_id]));
    return e.sort(comparePluginsByName);
  }, [n, i, r, m]);
  let _ = filterArrayByEditorTypeAndMemo(f);
  let x = !e.public_plugins_allowed || e.plugins_whitelist_enforced && u && Object.keys(n).length === 0;
  let g = t || h && Object.keys(r).length === 0;
  let j = useDispatch<AppDispatch>();
  return (useEffect(() => {
    e && !t && j(Xt());
  }, [j, e, t]), (!i || u) && h) ? x && g ? jsx(oE, {}) : jsxs(TrackingProvider, {
    name: 'explore',
    children: [a.length > 0 && jsx(Fragment, {
      children: a.map(e => jsx(aC, {
        pluginId: e,
        view: TabCategory.EXPLORE,
        showLockIcon: !0
      }, e))
    }), _.length > 0 && jsxs(Fragment, {
      children: [jsx('div', {
        className: 'browse_plugins_recents_list--sectionHeader--az12L text--fontPos13--xW8hS text--_fontBase--QdLsd',
        children: renderI18nText('universal_insert.saved_from_community')
      }), _.map(e => {
        let t = e.plugin_id;
        return jsx(aC, {
          pluginId: t,
          view: TabCategory.EXPLORE
        }, t);
      })]
    }), jsx(os, {
      extensionType: PluginType.Plugin,
      dedupeOrgSaves: !0
    })]
  }) : jsx('span', {
    'className': oS,
    'data-testid': 'loading-spinner',
    'children': jsx(LoadingSpinner, {})
  });
}
let ok = 'browse_recent_and_saved_view--subTitle--04tFz text--fontPos12--YsUAh text--_fontBase--QdLsd';
let oR = 'browse_recent_and_saved_view--showAllSavedExtensionsButton--l1qOq text--fontPos12--YsUAh text--_fontBase--QdLsd';
function oM() {
  let {
    filterByAllowlist,
    filterByPublicResourcesAllowed
  } = useExtensionAllowlist(!1);
  let i = Hb();
  let n = useDedupedRecentlyUsedPlugins().filter(i);
  n = filterByPublicResourcesAllowed(n = filterByAllowlist(n));
  let r = useInstalledPluginsAndWidgets();
  let a = r.plugins;
  let s = useMemo(() => Object.values(a).sort(comparePluginsByName).filter(e => e.installed_by === 'user'), [a]);
  let d = memoizeByArgs(() => s);
  let c = filterArrayByEditorTypeAndMemo(d());
  let [u, p] = useState(!1);
  let h = useMemo(() => u ? c : c.slice(0, 40), [c, u]);
  let m = isWorkshopModeEnabled();
  if (!r.loaded && !m) {
    return jsx('div', {
      className: cssBuilderInstance.flex.justifyCenter.alignCenter.p24.$,
      children: jsx(LoadingSpinner, {})
    });
  }
  if (n.length === 0 && c.length === 0) {
    return jsx(_$$H3, {
      isWidget: !1
    });
  }
  let f = n.slice(0, 6);
  let _ = f.length > 0;
  let x = c.length > 0;
  return jsxs(Fragment, {
    children: [_ && jsxs(Fragment, {
      children: [jsx('div', {
        className: ok,
        children: renderI18nText('universal_insert.recents')
      }), jsx(sM, {
        items: f,
        view: TabCategory.RECENTS
      })]
    }), _ && x && jsx(_$$F2, {}), x && jsxs(Fragment, {
      children: [jsx('div', {
        className: ok,
        children: renderI18nText('universal_insert.saved')
      }), jsx(sM, {
        items: h,
        view: TabCategory.SAVED
      }), c.length > 40 && !u && jsx('button', {
        className: oR,
        onClick: () => p(!0),
        children: renderI18nText('universal_insert.show_all_saved_plugins')
      })]
    })]
  });
}
function oD() {
  return jsx(_$$K2, {
    resourceType: HubTypeEnum.PLUGIN,
    shelfType: CommunityPageType.BROWSE_PLUGINS_MODAL,
    renderResource: e => jsx(aC, {
      pluginId: e.id,
      view: TabCategory.EXPLORE
    }, e.id)
  });
}
function oP() {
  let [e, t] = useAtomValueAndSetter(ox);
  return jsx(of, {
    setCurrentView: t,
    currentView: e
  });
}
function oU() {
  let e = useAtomWithSubscription(ox);
  let t = useCurrentPrivilegedPlan('BrowsePluginsCombinedListView').unwrapOr(null);
  let i = !!t?.pluginsWhitelistEnforced;
  return jsxs('div', {
    children: [jsx(ob, {}), jsxs('div', {
      className: cssBuilderInstance.flex.justifyBetween.wFull.minW0.$,
      children: [jsx(oP, {}), e === oh.DEVELOPMENT && jsx('div', {
        className: cssBuilderInstance.flex.itemsCenter.pr16.$,
        children: jsx(_$$n7, {
          resourceType: HubTypeEnum.PLUGIN
        })
      })]
    }), e === oh.RECENT_AND_SAVED && jsxs(Fragment, {
      children: [jsx(oM, {}), i ? jsx(os, {
        extensionType: PluginType.Plugin
      }) : jsx(oD, {})]
    }), e === oh.DEVELOPMENT && jsx(oj, {}), e === oh.ORG && jsxs(Fragment, {
      children: [jsx(ow, {}), !i && jsx(oD, {})]
    })]
  });
}
function oF() {
  useEffect(() => {
    function e(e) {
      e.key === RECENT_PLUGINS_FIGJAM && debugState.dispatch(syncRecentPluginsThunk({
        storeInRecentsKey: FDocumentType.FigJam
      }));
    }
    debugState.dispatch(syncRecentPluginsThunk({
      storeInRecentsKey: FDocumentType.FigJam
    }));
    window.addEventListener('storage', e, !1);
    return () => {
      window.removeEventListener('storage', e, !1);
    };
  }, []);
  let e = useSelector(e => e.currentUserOrgId ? e.orgById[e.currentUserOrgId] : void 0);
  let t = e ? e.id : '';
  let i = useIsLoading(fetchShelvesForShelfTypeThunk.loadingKeyForPayload({
    shelfType: CommunityPageType.BROWSE_PLUGINS_MODAL
  }));
  let n = useCurrentFileKey();
  let r = useIsLoading(getPluginAllowListKey(t, n));
  let a = useIsLoading(getOrgPublishedPluginsThunk.loadingKeyForPayload(t));
  return i || r || a ? jsx(VR, {}) : jsx(TrackingProvider, {
    name: 'plugins',
    children: jsx(oU, {})
  });
}
function oQ(e) {
  let t = useSelector(e => e.universalInsertModal);
  let i = useDispatch<AppDispatch>();
  let n = getLocalPlugins();
  let r = useSelector(t => getPluginMetadata(e.pluginId, t.publishedPlugins));
  let a = isResourcePaymentFailed(r);
  let s = Object.values(n).find(e => e.plugin_id === r.id);
  let c = !!s;
  let p = !!r.id;
  let h = useInstalledPluginsAndWidgets().plugins[e.pluginId] || getPluginVersion(r);
  let {
    isSavedForOrg,
    isSavedForUser,
    onSaveClick
  } = Bj(h);
  let x = isSavedForOrg || isSavedForUser;
  let g = _$$cX().tabManager;
  let j = Vq(g.activeTab);
  let y = _$$b4();
  let v = Kx();
  let C = selectCurrentFile();
  let {
    orgEntity,
    org,
    appModel,
    selectedView,
    isReadOnly,
    userCanViewPlugins,
    userCanRunExtensions,
    pluginSubmenuDropdownTargetRect,
    activeTextReviewPlugin
  } = selectWithShallowEqual(e => ({
    orgEntity: getCurrentOrgAdminInfo(e),
    org: e.currentUserOrgId && e.orgById[e.currentUserOrgId] || null,
    appModel: e.mirror.appModel,
    selectedView: e.selectedView,
    isReadOnly: e.mirror.appModel.isReadOnly,
    userCanViewPlugins: canPerformAction(e),
    userCanRunExtensions: canRunExtensions(e),
    pluginSubmenuDropdownTargetRect: e.dropdownShown?.data?.targetRect,
    activeTextReviewPlugin: e.mirror.appModel.activeTextReviewPlugin
  }));
  useEffect(() => {
    p || i(getResourceVersionsThunk({
      id: e.pluginId,
      resourceType: HubTypeEnum.PLUGIN
    }));
  }, [i, e.pluginId, p]);
  let R = {};
  R[h.plugin_id] = h;
  let M = {
    openFile: C,
    allSavedPlugins: R,
    localExtensions: n,
    orgEntity,
    org,
    isReadOnly,
    userCanViewPlugins,
    userCanRunExtensions,
    editorType: 'whiteboard',
    activeTextReviewPlugin,
    isDevHandoff: !1,
    publishedPlugins: {},
    publishedWidgets: {}
  };
  let D = {
    openFile: C,
    allSavedPlugins: {},
    localExtensions: n,
    orgEntity,
    org,
    isReadOnly,
    userCanViewPlugins,
    userCanRunExtensions,
    editorType: 'whiteboard',
    activeTextReviewPlugin,
    publishedPlugins: {},
    publishedWidgets: {}
  };
  let P = useDropdownState();
  let U = P?.type === o0 && P.data.pluginId === e.pluginId;
  let F = s?.manifest.menu && s.manifest.menu.length > 0 ? _$$z3(s.manifest.menu, s) : [];
  let H = h.manifest.menu && h.manifest.menu.length > 0 ? _$$z3(h.manifest.menu, h) : [];
  let B = H.length > 0 || F.length > 0;
  let V = c || B;
  let K = () => {
    let e = () => {
      let e = _$$cK(h);
      _$$Im(M, j, e);
    };
    x ? e() : onSaveClick(e, !0);
    y();
  };
  let W = () => {
    if (!s) return;
    let e = () => {
      let e = _$$hN(s);
      _$$Im(D, j, e);
    };
    x ? e() : onSaveClick(e, !0);
    y();
  };
  if (!p) return jsx(_$$L3, {});
  let z = v?.shouldOptimizeForIpadApp || getFeatureFlags().cmty_m10n_test_apple_os;
  return jsxs(TrackingProvider, {
    name: 'detail',
    properties: {
      resourceId: r.id,
      isMonetized: hasMonetizedResourceMetadata(r),
      resourceType: HubTypeEnum.PLUGIN,
      editorType: 'whiteboard'
    },
    children: [jsx(RecordingScrollContainer, {
      height: _$$mS(t.pinned, 500, _$$s3, zD),
      children: jsxs('div', {
        className: _$$tJ2,
        children: [a && jsx(PaymentSection, {}), jsx('img', {
          className: ex()(VM, Mp),
          src: r.redirect_thumbnail_url || '',
          alt: `${h.name}`,
          width: _$$gR,
          height: _$$gR / 2
        }), jsx('div', {
          className: _$$oQ,
          children: jsx(_$$f4, {
            resource: r
          })
        }), jsx('div', {
          className: _$$h_,
          children: jsx(_$$R2, {
            fallback: null,
            errorFallback: null,
            value: h.description
          })
        })]
      })
    }), !z && jsxs(LinkPrimitive, {
      newTab: !0,
      className: P0,
      href: `/community/plugin/${e.pluginId}`,
      trusted: !0,
      children: [jsx(SvgComponent, {
        svg: _$$A1,
        className: JX
      }), renderI18nText('whiteboard.inserts.see_more_details_in_community')]
    }), U && pluginSubmenuDropdownTargetRect && jsx(noop, {
      lean: 'left',
      minWidth: 130,
      rootAndSubmenuMaxWidth: 190,
      leanPadding: 0,
      showPoint: !1,
      items: (() => {
        if (!V) return [];
        if (!B && s) {
          return [{
            displayText: 'In-development version',
            callback: () => W()
          }, {
            displayText: 'Published version',
            callback: () => K()
          }];
        }
        let e = e => () => _$$Im(M, j, e);
        let t = [];
        H.forEach(i => {
          t.push(_$$q2(i, e));
        });
        let n = _$$jv(t, {
          appModel,
          selectedView
        });
        if (!c) return n;
        let r = e => () => _$$Im(D, j, e);
        let a = [];
        F.forEach(e => {
          a.push(_$$q2(e, r));
        });
        let o = _$$jv(a, {
          appModel,
          selectedView
        });
        let l = [];
        s.error ? l.push({
          displayText: '\u26A0 In-development version',
          callback: () => {
            i(showModalHandler({
              type: _$$r,
              data: {
                dispatch: i,
                error: s.error,
                resourceType: HubTypeEnum.PLUGIN
              },
              showModalsBeneath: !0
            }));
          }
        }) : o.length > 0 ? l.push({
          displayText: 'In-development version',
          children: o
        }) : l.push({
          displayText: 'In-development version',
          callback: () => {
            W();
          }
        });
        n.length > 0 ? l.push({
          displayText: 'Published version',
          children: n
        }) : l.push({
          displayText: 'Published version',
          callback: () => {
            K();
          }
        });
        return l;
      })(),
      onSelectItem: e => {
        e.callback && e.callback('', null, i);
      },
      parentRect: pluginSubmenuDropdownTargetRect,
      dispatch: i
    })]
  });
}
let o0 = 'DROPDOWN_TYPE_PLUGIN_DETAIL_SUBMENU';
function o1(e) {
  let t = e.selectedCategoryId;
  let {
    shelves,
    isLoading
  } = _$$d5(e.shelfType);
  let r = shelves ? shelves.find(e => e.id === t) : void 0;
  if (!shelves || shelves.length === 0) return null;
  if (isLoading) return jsx(_$$L3, {});
  let a = t => jsx('div', {
    className: s5,
    role: 'button',
    tabIndex: 0,
    children: e.renderResource(t)
  }, t.id);
  return r ? jsx(TrackingProvider, {
    name: 'explore',
    properties: {
      selectedCategory: t
    },
    children: jsx('div', {
      className: 'browse_explore_category_view--resourcesGrid--Gvw3Y',
      children: r.shelf_content.map(e => a(e))
    })
  }) : null;
}
function o8(e) {
  let t = useDispatch<AppDispatch>();
  let i = useSelector(e => e.universalInsertModal);
  let n = useSelector(e => e.hubFiles)[e.id];
  let r = getHubFileVersionOrDefault(n);
  let a = Kx();
  let s = a?.shouldOptimizeForIpadApp || getFeatureFlags().cmty_m10n_test_apple_os;
  return jsxs(TrackingProvider, {
    name: 'detail',
    properties: {
      resourceId: n.id,
      resourceType: HubTypeEnum.HUB_FILE
    },
    children: [jsxs(RecordingScrollContainer, {
      height: _$$mS(i.pinned, 504, _$$s3, zD),
      children: [jsx('div', {
        className: 'browse_templates_preview--embedContainer--8lgx5 hub_file_detail_view--embedContainer--QMuUr detail_view--embedContainer---TcbF',
        children: jsx(_$$Z2, {
          containerClassName: 'browse_templates_preview--embedContainerInner--0EnCv hub_file_detail_view--iframeContainer---uQYN',
          disableClickToExpand: !0,
          disableComments: !0,
          disableFullscreen: !0,
          dispatch: t,
          fixedSize: !0,
          fullscreenState: PreviewMode.DEFAULT,
          hubFile: n,
          profileIdToAdminResourceAs: null
        }, n.id)
      }), jsx('div', {
        className: 'browse_templates_preview--description--RScN2 text--fontPos13--xW8hS text--_fontBase--QdLsd',
        children: jsx('div', {
          className: 'browse_templates_preview--textDescription--4t3-n',
          children: stripHtmlTags(r.description).trim().length > 0 && jsx(_$$R2, {
            fallback: null,
            errorFallback: null,
            value: r.description
          })
        })
      })]
    }), !s && jsxs(BaseLinkComponent, {
      className: 'browse_templates_preview--communityLinkBase--1NI6W',
      href: buildCommunityPath({
        path: HubTypeEnum.FILE,
        id: n.id
      }),
      target: '_blank',
      trusted: !0,
      children: [jsx(SvgComponent, {
        svg: _$$A1,
        className: 'browse_templates_preview--communityLinkIcon--DC-Q4 text--fontPos11--2LvXf text--_fontBase--QdLsd'
      }), renderI18nText('whiteboard.inserts.see_more_details_in_community')]
    })]
  });
}
function ln(e) {
  let {
    resourceId,
    goBack,
    buttonCta
  } = e;
  let r = useSelector(e => e.hubFiles)[resourceId];
  let a = getHubFileVersionOrDefault(r);
  let {
    insertTemplate,
    isInsertingTemplate
  } = Fz();
  let p = _$$b4();
  let {
    tabManager,
    searchQuery
  } = _$$cX();
  let _ = Vq(tabManager.activeTab);
  let x = LR();
  let g = useCallback(() => x(), [x]);
  let j = getCurrentFileType() === 'whiteboard';
  let b = F5();
  let y = _$$F3();
  let v = r.community_publishers?.accepted || [];
  return jsxs('div', {
    className: 'browse_templates_preview_top_bar--topBar--6SkwK',
    children: [jsxs('div', {
      className: 'browse_templates_preview_top_bar--left--vErPQ',
      children: [jsx(ButtonPrimitive, {
        'className': ex()('browse_templates_preview_top_bar--backButton--d3Iws', 'browse_templates_preview_top_bar--hasFocusOutline--le5ti'),
        'onClick': BrowserInfo.isIpad ? void 0 : goBack,
        'htmlAttributes': {
          onPointerDown: BrowserInfo.isIpad ? goBack : void 0,
          autoFocus: !0
        },
        'aria-label': getI18nString('general.back'),
        'children': jsx(SvgComponent, {
          'svg': _$$A10,
          'data-not-draggable': !0,
          'data-does-not-dismiss-modal': !0
        })
      }), jsxs('div', {
        className: 'browse_templates_preview_top_bar--pluginMetadataContainer--WC29F',
        children: [jsx('div', {
          className: 'browse_templates_preview_top_bar--pluginTileName--iiS-m text--fontPos13--xW8hS text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa',
          children: a.name
        }), (r.community_publishers?.accepted.length || 0) > 0 && jsx('div', {
          className: 'browse_templates_preview_top_bar--pluginTilePublishers--UFpkz text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa',
          children: renderI18nText('whiteboard.inserts.by_publisher', {
            numPublishers: v.length,
            firstPublisherName: v[0]?.name,
            multiplePublisherSuffix: jsx('span', {
              'data-tooltip-type': KindEnum.TEXT,
              'data-tooltip': formatPublisherNames(v.slice(1), v.length, e => e.name),
              'children': renderI18nText('whiteboard.inserts.and_others')
            })
          })
        })]
      })]
    }), jsxs('div', {
      className: 'browse_templates_preview_top_bar--right--jxcsE',
      children: [jsx(_$$i4, {
        insertTemplate: () => {
          insertTemplate({
            template: {
              template: r,
              type: TeamTemplateType.HubFile
            },
            templateInsertionDirection: CustomPosition.RIGHT,
            triggeredFrom: _,
            onSuccess: () => {
              j && _$$oM({
                id: r.id,
                type: TabCategory.TEMPLATES,
                source: _,
                options: {
                  ...b,
                  query: searchQuery
                }
              });
              p();
            }
          });
        },
        isInsertingTemplate: isInsertingTemplate(resourceId),
        children: buttonCta
      }), y ? jsx(_$$O, {
        setPinned: e.setPinned
      }) : jsx(IconButton, {
        'onClick': g,
        'aria-label': getI18nString('general.close'),
        'children': jsx(_$$A2, {})
      })]
    })]
  });
}
function la(e) {
  let t = useSelector(e => e.hubFiles);
  let i = e.templates[_$$e7].map(e => t[e]);
  let n = hasTemplateEntity();
  let [r, a] = useState(!n);
  useEffect(() => {
    n && a(!1);
  }, [e.debouncedSearchQuery, n]);
  let s = [...e.teamTemplatesFromSearch.map(e => ({
    type: TeamTemplateType.TeamTemplate,
    template: e
  })), ...(r ? i.map(e => ({
    type: TeamTemplateType.HubFile,
    template: e
  })) : [])];
  return i.length !== 0 || e.totalNumTeamTemplatesFromSearch !== 0 || e.teamTemplatesFromSearchIsLoading ? jsx(TrackingProvider, {
    name: 'templates',
    properties: {
      query: e.debouncedSearchQuery
    },
    children: jsxs('div', {
      className: _$$iU,
      children: [jsx(_$$g3, {
        templates: s,
        templateInsertionLocation: FileTypeSwitch.CURRENT_FILE
      }), !e.teamTemplatesFromSearchIsLoading && jsx('div', {
        className: cssBuilderInstance.relative.$,
        children: jsx(IntersectionSentinel, {
          'className': cssBuilderInstance.absolute.h300.$,
          'style': {
            top: '-150px'
          },
          'data-testid': 'load-more-search',
          'onIntersectionChange': ({
            isIntersecting: t
          }) => {
            t && !e.requestLoadMoreTeamTemplatesFromSearch() && a(!0);
          }
        })
      })]
    })
  }) : jsx(TrackingProvider, {
    name: 'templates',
    properties: {
      query: e.debouncedSearchQuery
    },
    children: jsx(_$$e5, {
      illustration: _$$A9,
      defaultDisplayStringResourceType: 'templates',
      query: e.query,
      cta: jsx(_$$_3, {
        url: '/community/figjam',
        resourceType: HubTypeEnum.HUB_FILE
      })
    })
  });
}
let lo = 'browse_widgets_search_view--sectionHeader--IDC0e text--fontPos13--xW8hS text--_fontBase--QdLsd';
let ll = 'browse_widgets_search_view--widgetTilesGridContainer--b0tIx browse_widgets_view--widgetTilesGridContainer--t5-lL';
function lc(e) {
  let {
    query,
    debouncedSearchQuery,
    hasResolved,
    savedSearchResultIds,
    communitySearchResultIds,
    orgSearchResultIds,
    developmentSearchResultIds,
    lastWidgetSearchQuery
  } = e;
  let u = useSelector(e => e.currentUserOrgId && e.orgById[e.currentUserOrgId]);
  let p = useFilteredWidgets();
  let h = savedSearchResultIds && savedSearchResultIds.length > 0;
  let m = communitySearchResultIds && communitySearchResultIds.length > 0;
  let f = u && orgSearchResultIds && orgSearchResultIds.length > 0;
  let _ = developmentSearchResultIds && developmentSearchResultIds.length > 0;
  return lastWidgetSearchQuery !== debouncedSearchQuery ? jsx(_$$i2, {}) : !hasResolved || h || m || f || _ ? jsxs(TrackingProvider, {
    name: 'widgets',
    properties: {
      resourceType: 'widget',
      query: debouncedSearchQuery
    },
    children: [h && jsxs(Fragment, {
      children: [jsx('div', {
        className: lo,
        children: renderI18nText('whiteboard.inserts.saved')
      }), jsx('div', {
        className: ll,
        children: savedSearchResultIds.map(e => jsx(aG, {
          widgetId: e,
          widgetVersion: p[e]
        }, `saved_plugin_${e}`))
      })]
    }), _ && jsxs(Fragment, {
      children: [jsx('div', {
        className: lo,
        children: renderI18nText('whiteboard.inserts.development')
      }), jsx('div', {
        className: ll,
        children: developmentSearchResultIds.map(e => jsx(aV, {
          tab: TabCategory.DEVELOPMENT,
          localFileId: e
        }, e))
      })]
    }), f && jsxs(Fragment, {
      children: [jsx('div', {
        className: lo,
        children: renderI18nText('whiteboard.inserts.widgets_from_org', {
          orgName: u.name
        })
      }), jsx('div', {
        className: ll,
        children: orgSearchResultIds.map(e => jsx(aG, {
          widgetId: e
        }, e))
      })]
    }), m && jsxs(Fragment, {
      children: [jsx('div', {
        className: lo,
        children: renderI18nText('whiteboard.inserts.from_community')
      }), jsx('div', {
        className: ll,
        children: communitySearchResultIds.map(e => jsx(aG, {
          widgetId: e
        }, e))
      })]
    })]
  }) : jsx(TrackingProvider, {
    name: 'widgets',
    properties: {
      resourceType: 'widget',
      query: debouncedSearchQuery
    },
    children: jsx(_$$e5, {
      illustration: _$$A11,
      defaultDisplayStringResourceType: 'widgets',
      query,
      cta: jsx(_$$_3, {
        url: '/community/widgets'
      }),
      orgNameIfAllowlistEnforced: u && u.widgets_whitelist_enforced ? u.name : void 0
    })
  });
}
function lu() {
  let {
    filterByAllowlist
  } = useExtensionAllowlist(!0);
  let t = Sp();
  let i = useDedupedRecentlyUsedWidgets().filter(t);
  i = filterByAllowlist(i);
  let n = useInstalledPluginsAndWidgets().widgets;
  let r = useMemo(() => Object.values(n).sort(comparePluginsByName).filter(e => e.installed_by === 'user'), [n]);
  let a = memoizeByArgs(() => r);
  let s = filterArrayByEditorTypeAndMemo(a());
  let [d, c] = useState(!1);
  let u = useMemo(() => d ? s : s.slice(0, 40), [s, d]);
  let p = useMemo(() => i.slice(0, 6), [i]);
  if (p.length === 0 && s.length === 0) {
    return jsx(_$$H3, {
      isWidget: !0
    });
  }
  let h = p.length > 0;
  let m = s.length > 0;
  return jsxs(Fragment, {
    children: [h && jsxs(Fragment, {
      children: [jsx('div', {
        className: ex()(ok, cssBuilderInstance.mb8.$),
        children: renderI18nText('universal_insert.recents')
      }), jsx(sH, {
        items: p
      })]
    }), h && m && jsx(_$$F2, {}), m && jsxs(Fragment, {
      children: [jsx('div', {
        className: ex()(ok, cssBuilderInstance.mb8.$),
        children: renderI18nText('universal_insert.saved')
      }), jsx(sH, {
        items: u
      }), s.length > 40 && !d && jsx('button', {
        className: oR,
        onClick: () => c(!0),
        children: renderI18nText('universal_insert.show_all_saved_widgets')
      })]
    })]
  });
}
function lp() {
  let e = useLocalPluginsExcludingWidgets();
  let t = useUserPublishedWidgets().filter(t => !Object.keys(e).find(i => e[i].plugin_id === t.id));
  if (Object.keys(e).length === 0 && t.length === 0) {
    return jsx(_$$W4, {
      isWidget: !0
    });
  }
  let i = Object.keys(e).reverse();
  return jsxs('div', {
    className: sF,
    children: [i.map(e => jsx(aV, {
      localFileId: Number(e),
      tab: TabCategory.DEVELOPMENT
    }, e)), t.map(e => jsx(aH, {
      tab: TabCategory.DEVELOPMENT,
      publishedWidget: e
    }, e.id))]
  });
}
function lh() {
  let e = getPendingPublisherWidgetsForCurrentUser();
  return e.length === 0 ? null : jsx(TrackingProvider, {
    name: 'invited',
    children: jsx('div', {
      className: cssBuilderInstance.mt16.$,
      children: jsxs(AutoLayout, {
        width: 'fill-parent',
        verticalAlignItems: 'center',
        padding: {
          horizontal: 24,
          vertical: 16
        },
        horizontalAlignItems: 'center',
        spacing: 24,
        direction: 'vertical',
        children: [e.map(e => jsx(lm, {
          widget: e
        }, e.id)), jsx('div', {
          className: cssBuilderInstance.wFull.h1.$,
          style: styleBuilderInstance.add({
            backgroundColor: 'var(--color-border)'
          }).$
        })]
      })
    })
  });
}
function lm({
  widget: e
}) {
  let t = getPluginVersion(e);
  let {
    tabManager
  } = _$$cX();
  return jsxs(AutoLayout, {
    children: [jsxs('div', {
      className: cssBuilderInstance.relative.$,
      children: [jsx('div', {
        className: cssBuilderInstance.absolute.w8.h8.bRadiusHalf.colorBgDanger.$,
        style: styleBuilderInstance.add({
          left: '-8px',
          top: '-8px'
        }).$
      }), jsx(_$$sU, {
        image: jsx(WM, {
          removeBorder: !0,
          children: jsx(_$$_4, {
            src: t.redirect_snapshot_url,
            widget: t,
            analytics: {
              triggeredFrom: Vq(tabManager.activeTab)
            },
            context: _$$_Y.WHITEBOARD
          })
        }),
        className: cssBuilderInstance.w200.$
      })]
    }), jsx(PE, {
      resource: e
    })]
  });
}
function lg() {
  return jsxs('div', {
    className: cssBuilderInstance.flex.flexColumn.itemsCenter.$,
    children: [jsx('div', {
      children: jsx(SvgComponent, {
        svg: _$$A12,
        useOriginalSrcFills_DEPRECATED: !0,
        svgWidth: '60px',
        autosize: !0
      })
    }), jsx('div', {
      className: cssBuilderInstance.mt16.mb24.$,
      children: renderI18nText('whiteboard.inserts.disabled_org_widgets_empty_state_description')
    })]
  });
}
function lj() {
  let e = useSelector(e => e.currentUserOrgId ? e.orgById[e.currentUserOrgId] : void 0);
  return e ? jsx(lb, {
    org: e
  }) : jsx(_$$L3, {});
}
function lb({
  org: e
}) {
  let t = useCurrentPlanUser('_BrowseWidgetsOrgView');
  let i = useIsOrgGuestUser(t).unwrapOr(!1);
  let n = e && e.widgets_whitelist_enforced;
  let r = useAllowlistedWidgets();
  let a = _$$h7('widget');
  let s = useCurrentFileKey();
  let d = getWidgetAllowListKey(e?.id ?? '', s);
  let c = useIsLoaded(d);
  let u = getOrgPublishedWidgetsThunk.loadingKeyForPayload(e.id ?? '');
  let p = useIsLoaded(u);
  let h = !e.public_plugins_allowed || e.widgets_whitelist_enforced && c && Object.keys(r).length === 0;
  let m = i || p && a.length === 0;
  let f = useInstalledPluginsAndWidgets().orgWidgets;
  let _ = useMemo(() => {
    let t = Object.values(f).filter(t => !_$$s5(t, e.id));
    n && (t = t.filter(e => r[e.plugin_id]));
    return t.sort(comparePluginsByName);
  }, [r, n, e.id, f]);
  let x = filterArrayByEditorTypeAndMemo(_);
  return c && p ? h && m ? jsx(lg, {}) : jsxs(TrackingProvider, {
    name: 'explore',
    children: [a.length > 0 && jsx(Fragment, {
      children: jsx('div', {
        className: sF,
        children: a.map(e => {
          let t = e.plugin_id;
          return jsx(aG, {
            widgetId: t,
            showLockIcon: !0
          }, t);
        })
      })
    }), x.length > 0 && jsxs(Fragment, {
      children: [jsx('div', {
        className: sU,
        children: renderI18nText('universal_insert.saved_from_community')
      }), jsx('div', {
        className: sF,
        children: x.map(e => {
          let t = e.plugin_id;
          return jsx(aG, {
            widgetId: t
          }, t);
        })
      })]
    }), jsx(os, {
      extensionType: PluginType.Widget,
      dedupeOrgSaves: !0
    })]
  }) : jsx(_$$L3, {});
}
function ly() {
  return jsx(_$$K2, {
    resourceType: HubTypeEnum.WIDGET,
    shelfType: CommunityPageType.BROWSE_WIDGETS_MODAL,
    renderResource: e => jsx(aG, {
      widgetId: e.id
    }, e.id)
  });
}
function lv() {
  let [e, t] = useAtomValueAndSetter(o_);
  return jsx(of, {
    setCurrentView: t,
    currentView: e
  });
}
function lC() {
  let e = useAtomWithSubscription(o_);
  let t = useCurrentUserOrg();
  let i = !!(t && t.widgets_whitelist_enforced);
  return jsxs('div', {
    children: [jsx(lh, {}), jsxs('div', {
      className: cssBuilderInstance.flex.justifyBetween.wFull.minW0.$,
      children: [jsx(lv, {}), e === oh.DEVELOPMENT && jsx('div', {
        className: cssBuilderInstance.flex.itemsCenter.pr16.$,
        children: jsx(_$$n7, {
          resourceType: HubTypeEnum.WIDGET
        })
      })]
    }), e === oh.RECENT_AND_SAVED && jsxs(Fragment, {
      children: [jsx(lu, {}), i ? jsx(os, {
        extensionType: PluginType.Widget
      }) : jsx(ly, {})]
    }), e === oh.DEVELOPMENT && jsx(lp, {}), e === oh.ORG && jsxs(Fragment, {
      children: [jsx(lj, {}), !i && jsx(ly, {})]
    })]
  });
}
function lT() {
  useEffect(() => {
    function e(e) {
      e.key === RECENT_WIDGETS_FIGJAM && debugState.dispatch(syncRecentWidgetsThunk({
        storeInRecentsKey: FDocumentType.FigJam
      }));
    }
    debugState.dispatch(syncRecentWidgetsThunk({
      storeInRecentsKey: FDocumentType.FigJam
    }));
    window.addEventListener('storage', e, !1);
    return () => {
      window.removeEventListener('storage', e, !1);
    };
  }, []);
  let e = useSelector(e => e.currentUserOrgId ? e.orgById[e.currentUserOrgId] : void 0);
  let t = e ? e.id : '';
  let i = useIsLoading(fetchShelvesForShelfTypeThunk.loadingKeyForPayload({
    shelfType: CommunityPageType.BROWSE_WIDGETS_MODAL
  }));
  let n = useCurrentFileKey();
  let r = useIsLoading(getWidgetAllowListKey(t, n));
  let a = useIsLoading(getOrgPublishedWidgetsThunk.loadingKeyForPayload(t));
  let s = useIsLoaded(recentItemsThunks.fetchWidgetsMetadata.loadingKeyForPayload({
    key: FDocumentType.FigJam
  }));
  return i || r || a || !s ? jsx(_$$i2, {}) : jsx(TrackingProvider, {
    name: 'widgets',
    children: jsx(lC, {})
  });
}
function lN({
  teamId: e
}) {
  let {
    requestLoadMoreForTeam,
    templatesByTeam
  } = usePaginatedTeamTemplates({
    teamId: e,
    editorType: _$$_Y.WHITEBOARD
  });
  return templatesByTeam ? jsx(TrackingProvider, {
    name: 'custom_templates_by_team',
    children: jsxs('div', {
      className: cssBuilderInstance.pt20.$,
      children: [jsx(_$$g3, {
        templates: templatesByTeam.templates.map(e => ({
          type: TeamTemplateType.TeamTemplateLg,
          template: e
        }))
      }), jsx(IntersectionSentinel, {
        className: cssBuilderInstance.relative.$,
        style: {
          bottom: '250px'
        },
        onIntersectionChange: ({
          isIntersecting: e
        }) => {
          e && requestLoadMoreForTeam();
        }
      })]
    })
  }) : jsx(Ht, {});
}
function lk(e) {
  let {
    resourceId,
    goBack
  } = e;
  let n = useSelector(e => e.authedActiveCommunityProfile);
  let r = getPluginWithPayment(resourceId);
  let a = !!r.id;
  let s = useInstalledPluginsAndWidgets().plugins[resourceId] || getPluginVersion(r);
  let c = useSelector(e => isWorkshopModeActive(e.selectedView) && !e.user);
  let p = r.community_publishers?.accepted || [];
  let m = useDispatch<AppDispatch>();
  let f = LR();
  useEffect(() => {
    a || m(getResourceVersionsThunk({
      id: resourceId,
      resourceType: HubTypeEnum.PLUGIN
    }));
  }, [m, resourceId, a]);
  let _ = checkResourceEligibility(r);
  let x = Object.values(getLocalPlugins()).find(t => String(t.plugin_id) === e.resourceId);
  let g = useCurrentUserOrg();
  let j = useAllowlistedPlugins();
  let b = !x && canRequestExtension({
    org: g,
    extension: r,
    allowlistedExtensions: j
  });
  let y = _$$F3();
  let v = useCallback(() => f(), [f]);
  return jsxs('div', {
    className: _$$XV,
    children: [jsxs('div', {
      className: kb,
      children: [jsx(SvgComponent, {
        'svg': _$$A10,
        'className': Gv,
        'onClick': BrowserInfo.isIpad ? void 0 : goBack,
        'onPointerDown': BrowserInfo.isIpad ? goBack : void 0,
        'data-not-draggable': !0,
        'data-does-not-dismiss-modal': !0
      }), jsxs('div', {
        className: _$$uV,
        children: [jsxs('div', {
          className: _$$uA,
          children: [jsx('div', {
            className: B6,
            children: s.name
          }), jsx('div', {
            className: _$$fc,
            children: $3({
              resource: r,
              validBadges: [_$$op.PURCHASED],
              authedActiveCommunityProfile: n
            }) || jsx(_$$I2, {
              badges: r.badges,
              height: '16',
              hideTooltip: !0
            })
          })]
        }), (r.community_publishers?.accepted.length || 0) > 0 && jsx('div', {
          className: N9,
          children: renderI18nText('whiteboard.inserts.by_publisher', {
            numPublishers: p.length,
            firstPublisherName: p[0]?.name,
            multiplePublisherSuffix: jsx('span', {
              'data-tooltip-type': KindEnum.TEXT,
              'data-tooltip': formatPublisherNames(p.slice(1), p.length, e => e.name),
              'children': renderI18nText('whiteboard.inserts.and_others')
            })
          })
        })]
      })]
    }), jsxs('div', {
      className: _$$pG,
      children: [jsx('div', {
        className: cssBuilderInstance.mr8.$,
        children: _ && !getFeatureFlags().community_hub_admin_reviewer ? jsx(_$$I3, {
          resource: r,
          context: ShelfViewType.INSERTS,
          payment: r.community_resource_payment
        }) : jsx('div', {
          'data-tooltip-type': c ? KindEnum.TEXT : void 0,
          'data-tooltip': c ? getI18nString('whiteboard.inserts.log_in_or_sign_up_to_use', {
            resourceType: ResourceTypeNoComment.PLUGIN
          }) : void 0,
          'children': b ? jsx(_$$s4, {
            version: s,
            isPlugin: !0
          }) : jsx(ad, {
            pluginId: r.id,
            buttonCta: getI18nString('whiteboard.inserts.plugin_run_cta'),
            isNotInHeader: !0,
            view: TabCategory.PLUGINS
          })
        })
      }), jsx(_$$_W, {
        resourceId: r.id,
        resourceType: ResourceTypeNoComment.PLUGIN,
        parentView: _$$nN2.DETAIL
      }), y ? jsx(_$$O, {
        setPinned: e.setPinned
      }) : jsx(IconButton, {
        'onClick': v,
        'aria-label': getI18nString('general.close'),
        'children': jsx(_$$A2, {})
      })]
    })]
  });
}
function lD(e) {
  let {
    resourceId,
    goBack
  } = e;
  let n = getPublishedWidgetWithPayment(e.resourceId);
  let r = n?.community_publishers.accepted || [];
  let a = useDispatch<AppDispatch>();
  let s = LR();
  let c = Object.values(useLocalPluginsExcludingWidgets()).find(e => e.plugin_id === resourceId);
  let p = useSelector(e => e.authedActiveCommunityProfile);
  let m = useUserPublishedWidgets().find(e => e.id === resourceId);
  let f = desktopAPIInstance && !!m && !c;
  let _ = !!c || f;
  let x = useDropdownState();
  let g = x?.type === lP && x.data.widgetId === resourceId;
  let j = getPluginVersion(n);
  let {
    tabManager,
    searchQuery
  } = _$$cX();
  let v = Vq(tabManager.activeTab);
  let C = getCurrentFileType() === 'whiteboard';
  let T = F5();
  let E = Object.values(getLocalPlugins()).find(t => String(t.plugin_id) === e.resourceId);
  let S = useCurrentUserOrg();
  let w = useAllowlistedWidgets();
  let I = !E && canRequestExtension({
    extension: n,
    org: S,
    allowlistedExtensions: w
  });
  useEffect(() => {
    n || a(getResourceVersionsThunk({
      id: resourceId,
      resourceType: HubTypeEnum.WIDGET
    }));
  }, [resourceId, a, n]);
  let L = _$$b4();
  let N = _$$nc.user('insert-published-widget', () => {
    noop({
      pluginID: j.plugin_id,
      widgetName: j.name,
      pluginVersionID: j.id,
      triggeredFrom: v
    });
    C && _$$oM({
      id: j.plugin_id,
      type: TabCategory.WIDGETS,
      source: v,
      options: {
        ...T,
        query: searchQuery
      }
    });
    L();
  });
  let O = checkResourceEligibility(n);
  let k = _$$F3();
  let R = useCallback(() => s(), [s]);
  if (!n) return null;
  let M = _ ? e => {
    if (_) {
      if (e.preventDefault(), e.stopPropagation(), g) {
        a(hideDropdownAction());
      } else {
        let i = e.target.getBoundingClientRect();
        a(showDropdownThunk({
          type: lP,
          data: {
            targetRect: i,
            widgetId: resourceId
          }
        }));
      }
    }
  } : N;
  return jsxs('div', {
    className: _$$XV,
    children: [jsxs('div', {
      className: kb,
      children: [jsx(SvgComponent, {
        'svg': _$$A10,
        'className': Gv,
        'onClick': BrowserInfo.isIpad ? void 0 : goBack,
        'onPointerDown': BrowserInfo.isIpad ? goBack : void 0,
        'data-not-draggable': !0,
        'data-does-not-dismiss-modal': !0
      }), jsxs('div', {
        className: _$$uV,
        children: [jsxs('div', {
          className: _$$uA,
          children: [jsx('div', {
            className: B6,
            children: j.name
          }), jsx('div', {
            className: _$$fc,
            children: $3({
              resource: n,
              validBadges: [_$$op.PURCHASED],
              authedActiveCommunityProfile: p
            }) || jsx(_$$I2, {
              badges: n.badges,
              height: '16',
              hideTooltip: !0
            })
          })]
        }), (n.community_publishers?.accepted.length || 0) > 0 && jsx('div', {
          className: N9,
          children: renderI18nText('whiteboard.inserts.by_publisher', {
            numPublishers: r.length,
            firstPublisherName: r[0]?.name,
            multiplePublisherSuffix: jsx('span', {
              'data-tooltip-type': KindEnum.TEXT,
              'data-tooltip': formatPublisherNames(r.slice(1), r.length, e => e.name),
              'children': renderI18nText('whiteboard.inserts.and_others')
            })
          })
        })]
      })]
    }), jsxs('div', {
      className: _$$pG,
      children: [jsx('div', {
        className: cssBuilderInstance.mr8.$,
        children: O && !getFeatureFlags().community_hub_admin_reviewer ? jsx(_$$I3, {
          resource: n,
          context: ShelfViewType.INSERTS
        }) : I ? jsx(_$$s4, {
          version: j,
          isPlugin: !1
        }) : jsx(Button, {
          onClick: BrowserInfo.isIpad ? void 0 : M,
          actionOnPointerDown: BrowserInfo.isIpad ?? void 0,
          variant: 'primary',
          htmlAttributes: {
            'data-testid': 'add-widget-button',
            'data-not-draggable': !0
          },
          children: jsxs('span', {
            className: cssBuilderInstance.flex.flexRow.justifyCenter.itemsCenter.$,
            children: [getI18nString('whiteboard.inserts.add_widget'), _ && jsx(SvgComponent, {
              svg: _$$A6,
              className: _$$sD
            })]
          })
        })
      }), jsx('div', {
        children: jsx(_$$_W, {
          resourceId: n.id,
          resourceType: ResourceTypeNoComment.WIDGET,
          parentView: _$$nN2.DETAIL
        })
      }), k ? jsx(_$$O, {
        setPinned: e.setPinned
      }) : jsx(IconButton, {
        'onClick': R,
        'aria-label': getI18nString('general.close'),
        'children': jsx(_$$A2, {})
      })]
    })]
  });
}
let lP = 'DROPDOWN_TYPE_WIDGET_DETAIL_SUBMENU';
function lU() {
  let {
    universalInsertModal
  } = selectWithShallowEqual(e => ({
    universalInsertModal: e.universalInsertModal
  }));
  let [t, i] = useState(universalInsertModal.initialSelectedCategory ?? a);
  let n = useCurrentFileKey();
  let r = universalInsertModal.initialTab || s || (n ? TabCategory.ALL : TabCategory.WIDGETS);
  let {
    searchQuery,
    setSearchQuery,
    previewResource,
    setPreviewResource
  } = Rz();
  return jsx(kx, {
    initialTab: r,
    setPreviewResource,
    setSelectedCategory: i,
    searchQuery,
    children: jsx(lF, {
      selectedCategory: t,
      setSearchQuery,
      previewResource
    })
  });
}
function lF({
  selectedCategory: e,
  setSearchQuery: t,
  previewResource: i
}) {
  let {
    tabManager,
    setSelectedCategory,
    searchQuery,
    setPreviewResource
  } = _$$cX();
  let m = selectCurrentFile();
  let {
    fileVersion,
    loadingState,
    universalInsertModal
  } = selectWithShallowEqual(e => ({
    fileVersion: e.fileVersion,
    loadingState: e.loadingState,
    universalInsertModal: e.universalInsertModal
  }));
  let {
    searchTemplatesResult,
    moreResult,
    pluginSavedSearchResultIds,
    pluginCommunitySearchResultIds,
    pluginOrgSearchResultIds,
    pluginDevelopmentSearchResultIds,
    pluginSearchIsLoading,
    pluginSearchHasResolved,
    widgetSavedSearchResultIds,
    widgetCommunitySearchResultIds,
    widgetOrgSearchResultIds,
    widgetSearchIsLoading,
    widgetSearchHasResolved,
    widgetDevelopmentSearchResultIds,
    faceStampSearchIsLoading,
    faceStampSearchHasResolved,
    debouncedSearchQuery,
    lastPluginSearchQuery,
    lastWidgetSearchQuery,
    lastFaceStampSearchQuery,
    teamTemplatesFromSearch,
    totalNumTeamTemplatesFromSearch,
    teamTemplatesFromSearchIsLoading,
    requestLoadMoreTeamTemplatesFromSearch
  } = _$$Ib();
  let W = useCurrentUserOrg();
  let z = useAtomWithSubscription(overlayStateAtom);
  useEffect(() => {
    z && !_$$l7.has(z) && handleAtomEvent({
      id: CURATOR_GLOBAL_REQUEST_CLOSE,
      properties: {
        requester: FigJamMenuEvents.FigjamUniversalInsertsMenuOpen
      }
    });
  }, [z]);
  useEffect(() => {
    universalInsertModal.previewResource && setPreviewResource(universalInsertModal.previewResource);
  }, [setPreviewResource, universalInsertModal.previewResource]);
  useEffect(() => {
    a = e;
  }, [e]);
  useEffect(() => {
    s = tabManager.activeTab;
  }, [tabManager.activeTab]);
  useEffect(() => {
    universalInsertModal.initialSearch && t(universalInsertModal.initialSearch);
  }, [universalInsertModal.initialSearch, t]);
  let {
    isInsertingTemplate
  } = Fz();
  let $ = useDispatch<AppDispatch>();
  let Y = _$$W5();
  let X = universalInsertModal.sourceRect;
  let [q, J] = useMemo(() => {
    if (Y && X) {
      return [void 0, {
        kind: 'sourceRect',
        sourceRect: X
      }];
    }
    {
      let e = _$$b6;
      return [e, {
        kind: 'buttonTarget',
        buttonTarget: e
      }];
    }
  }, [Y, X]);
  let {
    initialModalPosition,
    modalPosition,
    setModalPosition
  } = _$$ts(J, zo, _$$gR);
  let {
    bounds,
    showLeftPinBound,
    setShowLeftPinBound,
    shouldSnapToPosition,
    setPinned
  } = _$$C4(lB, setModalPosition, universalInsertModal.pinned, _$$t$, initialModalPosition, universalInsertModal.showing);
  useEffect(() => {
    $(recentItemsThunks.fetchTemplatesMetadata({
      key: FDocumentType.FigJam,
      orgId: m?.parentOrgId
    }));
    $(recentItemsThunks.fetchWidgetsMetadata({
      key: FDocumentType.FigJam
    }));
    $(fetchFigjamDefaultInsertsThunk({}));
  }, [$, m?.parentOrgId]);
  useEffect(() => {
    $(fetchShelvesForShelfTypeThunk({
      shelfType: CommunityPageType.FIGJAM_TEMPLATES_PICKER
    }));
  }, [$]);
  let eo = Object.keys(useLocalPluginsExcludingWidgets()).join(',');
  let el = selectCurrentUser();
  let ed = useCurrentUserOrg();
  let ec = isBigmaEnabledAlias(ed);
  let eu = getCurrentTemplateEntity();
  let ep = useRef(null);
  let eh = useRef(null);
  useEffect(() => {
    el && ($(initializeLocalPluginsThunk()), $(_$$aq2()));
  }, [$, el, eo]);
  setupResourceAtomHandler(unpublishedPluginsQuery());
  setupResourceAtomHandler(unpublishedWidgetsQuery());
  useEffect(() => {
    $(setShouldSearchDefaultLibraries({
      shouldSearchDefaultLibraries: !0
    }));
  }, [$]);
  let em = m && fileVersion && isNullOrFailure(loadingState, generateRetrievingSubscribedComponentsKey(m.key));
  useEffect(() => {
    em && $(zK());
  }, [$, em]);
  useEffect(() => {
    typeof eh.current?.scroll == 'function' && eh.current.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }, [debouncedSearchQuery]);
  let ef = getFeatureFlags().pro_templates_lg;
  let {
    filterOptions,
    selectedTeamOrWorkspaceOrLicenseGroupIds,
    isMyTeamsOnly,
    onFilterChange,
    requestLoadMore,
    requestLoadMoreForTeam,
    templatesByTeam,
    userTeamOrWorkspaceIds,
    isLoadingTeamTemplates
  } = useTeamTemplates(eu?.type === 'org' ? eu.entity : null, _$$_Y.WHITEBOARD);
  let {
    filterOptions: _filterOptions,
    selectedIds,
    isMyTeamsOnly: _isMyTeamsOnly,
    onFilterChange: _onFilterChange,
    requestLoadMoreForOrg,
    teamTemplates,
    userTeamOrWorkspaceIds: _userTeamOrWorkspaceIds,
    isLoading
  } = useOrgTemplates({
    orgId: eu?.type === 'org' ? eu.entity.id : null,
    areWorkspacesEnabled: ec,
    editorType: _$$_Y.WHITEBOARD,
    numTemplatesPerTeam: 4
  });
  let eR = ef ? _filterOptions : filterOptions;
  let eM = ef ? selectedIds : selectedTeamOrWorkspaceOrLicenseGroupIds;
  let eD = ef ? _isMyTeamsOnly : isMyTeamsOnly;
  let eP = ef ? _onFilterChange : onFilterChange;
  let eU = ef ? requestLoadMoreForOrg : requestLoadMore;
  let eF = ef ? _userTeamOrWorkspaceIds : userTeamOrWorkspaceIds;
  let eH = ef ? isLoading : isLoadingTeamTemplates;
  let eB = ef ? teamTemplates : templatesByTeam;
  return jsx(sQ, {
    bounds,
    categoryScrollContainerRef: ep,
    categoryViewContent: e ? e.resourceType === Rt.TEMPLATES ? jsx(o1, {
      selectedCategoryId: e.id,
      shelfType: CommunityPageType.FIGJAM_TEMPLATES_PICKER,
      setPreviewHubFile: setPreviewResource,
      renderResource: e => jsx(_$$S2, {
        template: {
          type: TeamTemplateType.HubFile,
          template: e
        },
        templateInsertionLocation: FileTypeSwitch.CURRENT_FILE,
        triggeredFrom: Vq(tabManager.activeTab),
        isInsertingTemplate: isInsertingTemplate(e.id),
        onClickTitle: () => setPreviewResource({
          id: e.id,
          type: Rt.TEMPLATES
        })
      }, e.id)
    }) : e.resourceType === Rt.STICKERS_AND_COMPONENTS ? jsx(_$$uU2, {
      selectedLibrary: e,
      setSelectedLibrary: setSelectedCategory
    }) : e.resourceType === Rt.WIDGETS ? jsx(s6, {
      selectedCategoryId: e.id,
      goBack: () => setSelectedCategory(void 0),
      resourceType: HubTypeEnum.WIDGET,
      shelfType: CommunityPageType.BROWSE_WIDGETS_MODAL,
      renderResource: e => jsx(aG, {
        widgetId: e.id
      }, e.id)
    }) : e.resourceType === Rt.PLUGINS ? jsx(s6, {
      selectedCategoryId: e.id,
      goBack: () => setSelectedCategory(void 0),
      resourceType: HubTypeEnum.PLUGIN,
      shelfType: CommunityPageType.BROWSE_PLUGINS_MODAL,
      renderResource: e => jsx(aC, {
        pluginId: e.id,
        view: TabCategory.EXPLORE
      }, e.id)
    }) : e.resourceType === Rt.ALL ? jsx(sf, {
      useCaseName: e.id
    }) : e.resourceType === Rt.TEAM_TEMPLATES ? ef && e.id || eu?.type === 'team' ? jsx(lN, {
      teamId: e.id
    }) : eB.length || eH ? jsxs(TrackingProvider, {
      name: 'custom_org_templates',
      children: [eB.map(({
        teamId: e,
        teamName: t,
        workspaceName: i,
        templates: n,
        totalTemplatesByTeam: a
      }) => jsx(_$$Fragment, {
        children: ef ? jsx(_$$Z3, {
          teamName: t ?? '',
          workspaceName: ec ? i ?? '' : null,
          teamId: e,
          minimalSpacing: !0,
          onSeeAllClick: a > 4 ? () => {
            setSelectedCategory({
              id: e,
              resourceType: Rt.TEAM_TEMPLATES,
              title: getI18nString('whiteboard.inserts.team_name_templates', {
                teamName: t ?? ''
              })
            });
          } : void 0,
          children: jsx(_$$g3, {
            templates: n
          })
        }) : jsx(_$$fc2, {
          teamName: t ?? '',
          workspaceName: ec ? i ?? '' : null,
          teamId: e,
          onRequestLoadMoreForTeam: requestLoadMoreForTeam,
          minimalSpacing: !0,
          children: jsx(_$$g3, {
            templates: n
          })
        })
      }, e)), jsx(IntersectionSentinel, {
        'data-testid': 'load-more-teams',
        'className': cssBuilderInstance.relative.$,
        'style': {
          bottom: '250px'
        },
        'onIntersectionChange': ({
          isIntersecting: e
        }) => {
          e && eU();
        }
      })]
    }) : jsx(Ht, {}) : void 0 : null,
    categoryViewHeader: function () {
      if (!e) return;
      let t = e.resourceType === Rt.TEAM_TEMPLATES && e.id === '' ? jsx('div', {
        className: cssBuilderInstance.mr8.$,
        children: jsx(DL, {
          filterOptions: eR,
          selectedIds: eM,
          isMyTeamsOnly: eD,
          onFilterChange: e => {
            typeof ep.current?.scroll == 'function' && ep.current?.scroll({
              top: 0,
              behavior: 'smooth'
            });
            eP(e);
          },
          userTeamOrWorkspaceIds: new Set(eF),
          showWorkspaces: ec
        })
      }) : void 0;
      return jsx(_$$b5, {
        selectedCategory: e,
        goBack: () => {
          ef && e.resourceType === Rt.TEAM_TEMPLATES && e.id && eu?.type === 'org' ? setSelectedCategory({
            id: '',
            title: getI18nString('whiteboard.inserts.org_name_templates', {
              orgName: W?.name ?? ''
            }),
            resourceType: Rt.TEAM_TEMPLATES
          }) : setSelectedCategory(void 0);
        },
        setPinned,
        extraContent: t
      });
    }(),
    entryPointId: q,
    initialModalPosition,
    mainScrollContainerRef: eh,
    modalPosition,
    resourceDetailViewContent: i && i.id && i.type ? i.type === Rt.TEMPLATES ? jsx(o8, {
      id: i.id,
      selectedCategoryId: '',
      setPreviewHubFile: setPreviewResource
    }) : i.type === Rt.WIDGETS ? jsx(_$$xl, {
      id: i.id
    }) : i.type === Rt.PLUGINS ? jsx(oQ, {
      pluginId: i.id
    }) : i.type === Rt.ORG_FACE_STAMPS ? jsx($t, {
      onBack: () => {
        tabManager.setActiveTab(TabCategory.MORE);
      },
      queryFromAllSearch: debouncedSearchQuery !== '' ? debouncedSearchQuery : null
    }) : void 0 : null,
    resourceDetailViewHeader: i && i.id && i.type ? i.type === Rt.TEMPLATES ? jsx(ln, {
      resourceId: i.id,
      goBack: () => {
        setPreviewResource(void 0);
      },
      buttonCta: getI18nString('whiteboard.inserts.add_template'),
      setPinned
    }) : i.type === Rt.WIDGETS ? jsx(lD, {
      resourceId: i.id,
      goBack: () => setPreviewResource(void 0),
      setPinned
    }) : i.type === Rt.PLUGINS ? jsx(lk, {
      resourceId: i.id,
      goBack: () => setPreviewResource(void 0),
      setPinned
    }) : i.type === Rt.ORG_FACE_STAMPS ? jsx(EP, {
      onBack: () => setPreviewResource(void 0),
      setPinned,
      queryFromAllSearch: debouncedSearchQuery
    }) : void 0 : null,
    searchQuery,
    setPinned,
    setSearchQuery: t,
    setShowLeftPinBound,
    shouldSnapToPosition,
    showLeftPinBound,
    children: jsx(lH, {
      debouncedSearchQuery,
      faceStampSearchHasResolved,
      faceStampSearchIsLoading,
      lastFaceStampSearchQuery,
      lastPluginSearchQuery,
      lastWidgetSearchQuery,
      moreResult,
      pluginCommunitySearchResultIds,
      pluginDevelopmentSearchResultIds,
      pluginOrgSearchResultIds,
      pluginSavedSearchResultIds,
      pluginSearchHasResolved,
      pluginSearchIsLoading,
      requestLoadMoreTeamTemplatesFromSearch,
      searchQuery,
      searchTemplatesResult,
      setPinned,
      setPreviewHubFile: setPreviewResource,
      setPreviewResource,
      teamTemplatesFromSearch,
      teamTemplatesFromSearchIsLoading,
      totalNumTeamTemplatesFromSearch,
      widgetCommunitySearchResultIds,
      widgetDevelopmentSearchResultIds,
      widgetOrgSearchResultIds,
      widgetSavedSearchResultIds,
      widgetSearchHasResolved,
      widgetSearchIsLoading
    })
  });
}
function lH({
  setPreviewResource: e,
  searchQuery: t,
  searchTemplatesResult: i,
  moreResult: n,
  pluginSavedSearchResultIds: r,
  pluginCommunitySearchResultIds: a,
  pluginOrgSearchResultIds: s,
  pluginDevelopmentSearchResultIds: d,
  pluginSearchIsLoading: c,
  pluginSearchHasResolved: u,
  widgetSavedSearchResultIds: p,
  widgetCommunitySearchResultIds: h,
  widgetOrgSearchResultIds: m,
  widgetSearchIsLoading: f,
  widgetSearchHasResolved: _,
  widgetDevelopmentSearchResultIds: x,
  faceStampSearchIsLoading: g,
  faceStampSearchHasResolved: j,
  debouncedSearchQuery: b,
  lastPluginSearchQuery: y,
  lastWidgetSearchQuery: v,
  lastFaceStampSearchQuery: C,
  teamTemplatesFromSearch: T,
  teamTemplatesFromSearchIsLoading: E,
  totalNumTeamTemplatesFromSearch: S,
  requestLoadMoreTeamTemplatesFromSearch: w
}) {
  let I = U5(t);
  let L = useCurrentUserOrg();
  let N = useAllowlistedPlugins();
  let A = useAllowlistedWidgets();
  let O = useMemo(() => isWhitelistEnforcedAndRequestsAllowed({
    org: L,
    isWidget: !1
  }) ? a : L && L.plugins_whitelist_enforced ? a.filter(e => N[e]) : a, [L, N, a]);
  let k = useMemo(() => isWhitelistEnforcedAndRequestsAllowed({
    org: L,
    isWidget: !0
  }) ? h : L && L.widgets_whitelist_enforced ? h.filter(e => A[e]) : h, [L, A, h]);
  let {
    tabPanelPropsMap
  } = _$$cX();
  return jsxs(Fragment, {
    children: [jsx(Tabs.TabPanel, {
      ...tabPanelPropsMap.All,
      children: t ? jsx(aY, {
        debouncedSearchQuery: b,
        faceStampSearchHasResolved: j,
        faceStampSearchIsLoading: g,
        faceStampSearchResults: I,
        lastFaceStampSearchQuery: C,
        lastPluginSearchQuery: y,
        lastWidgetSearchQuery: v,
        moreResult: n,
        pluginCommunitySearchResultIds: O,
        pluginDevelopmentSearchResultIds: d,
        pluginOrgSearchResultIds: s,
        pluginSavedSearchResultIds: r,
        pluginSearchHasResolved: u,
        pluginSearchIsLoading: c,
        query: t,
        searchTemplatesResult: i,
        teamTemplatesFromSearch: T,
        totalNumTeamTemplatesFromSearch: S,
        widgetCommunitySearchResultIds: k,
        widgetDevelopmentSearchResultIds: x,
        widgetOrgSearchResultIds: m,
        widgetSavedSearchResultIds: p,
        widgetSearchHasResolved: _,
        widgetSearchIsLoading: f
      }) : jsx(sW, {})
    }), jsx(Tabs.TabPanel, {
      ...tabPanelPropsMap.Widgets,
      children: t ? jsx(lc, {
        query: t,
        debouncedSearchQuery: b,
        hasResolved: _,
        savedSearchResultIds: p,
        communitySearchResultIds: k,
        orgSearchResultIds: m,
        developmentSearchResultIds: x,
        lastWidgetSearchQuery: v
      }) : jsx(lT, {})
    }), jsx(Tabs.TabPanel, {
      ...tabPanelPropsMap.Stickers,
      children: jsx(FN, {
        query: t
      })
    }), jsx(Tabs.TabPanel, {
      ...tabPanelPropsMap.Plugins,
      children: t ? jsx(s8, {
        query: t,
        debouncedSearchQuery: b,
        savedSearchResultIds: r,
        communitySearchResultIds: O,
        developmentSearchResultIds: d,
        orgSearchResultIds: s,
        hasResolved: u,
        lastPluginSearchQuery: y
      }) : jsx(oF, {})
    }), jsx(Tabs.TabPanel, {
      ...tabPanelPropsMap.Templates,
      children: t ? jsx(la, {
        templates: i,
        teamTemplatesFromSearch: T,
        totalNumTeamTemplatesFromSearch: S,
        teamTemplatesFromSearchIsLoading: E,
        requestLoadMoreTeamTemplatesFromSearch: w,
        query: t,
        debouncedSearchQuery: b
      }) : jsx(_$$J7, {
        setPreviewHubFile: e
      })
    }), jsx(Tabs.TabPanel, {
      ...tabPanelPropsMap.More,
      children: t ? jsx(s4, {
        results: n,
        query: t,
        debouncedSearchQuery: b,
        faceStampSearchIsLoading: g
      }) : jsx(TrackingProvider, {
        name: 'more2',
        children: jsx(sL, {
          hasTopPadding: !0
        })
      })
    })]
  });
}
function lB() {
  return {
    x: -_$$gR,
    y: 0,
    width: 2 * _$$gR + wR,
    height: window.innerHeight
  };
}
function lq({
  children: e
}) {
  return jsx(Fragment, {
    children: e
  });
}
function de({
  title: e,
  onClose: t,
  badge: i,
  closeButtonInnerText: n,
  testIdPrefix: r
}) {
  let a = shouldOptimizeForIpad();
  return jsxs('div', {
    className: 'figjam_panel_header--headerContainer--fVdY4',
    children: [jsx('h2', {
      className: 'figjam_panel_header--title--n9fHo',
      children: e
    }), jsxs('div', {
      className: cssBuilderInstance.flex.itemsCenter.gap4.$,
      children: [i, jsx(WithTrackedIconButton, {
        'onClick': t,
        'aria-label': getI18nString('common.close'),
        'actionOnPointerDown': a,
        'trackingProperties': {
          text: n || 'close'
        },
        'data-testid': r && `${r}-close-button`,
        'children': jsx(_$$A2, {})
      })]
    })]
  });
}
let dt = 'ai_modal--suggestionV2--Us2t6';
let di = 'ai_modal--secondaryButton--weULP';
let dn = 'ai_modal--selected--S4ORY';
let dr = 'ai_modal--promptBuilderContents---yRyI';
let da = 'ai_modal--promptBuilderScrollWrapper--iQkhu';
function dl({
  suggestion: {
    title: e,
    subtitle: t,
    useCaseCategory: i
  },
  onClick: n
}) {
  return jsx(ButtonPrimitive, {
    onClick: n,
    className: ex()(cssBuilderInstance.flex.justifyBetween.itemsCenter.py16.pl16.pr12.b1.colorBorder.bRadius6.wFull.alignLeft.$, 'ai_modal--oneClickButton--VqeLK'),
    htmlAttributes: {
      'data-testid': 'figjam-ai-one-click-v2'
    },
    children: jsxs('div', {
      className: cssBuilderInstance.flex.itemsCenter.justifyBetween.gap12.wFull.$,
      children: [jsx('div', {
        className: cssBuilderInstance.flex.flexRow.itemsStart.$,
        children: jsxs('div', {
          className: ex()(cssBuilderInstance.colorTextSecondary.font11.fontInter.normal.overflowHidden.ellipsis.$, 'ai_modal--oneClickText--36sek'),
          children: [jsx('span', {
            className: cssBuilderInstance.colorText.font11.fontInter.fontMedium.normal.$,
            children: e
          }), ` ${t}`]
        })
      }), jsx('div', {
        className: 'ai_modal--oneClickIcon--J1-2k',
        children: wg(i)
      }), jsx(SvgComponent, {
        'className': ex()(cssBuilderInstance.hidden.colorIconBrand.bRadius2.$, 'ai_modal--oneClickAiIcon--fQNmm'),
        'data-tooltip': getI18nString('whiteboard.ai_modal.make'),
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip-show-above': 'true',
        'svg': _$$A13
      })]
    })
  });
}
let df = 'prompt_editor_v2--input--hm43Y text--fontPos13--xW8hS text--_fontBase--QdLsd';
let d_ = 'prompt_editor_v2--promptBoxTextShimmer--pMr3h';
function dx() {
  let [e] = useLexicalComposerContext();
  let [t, i] = useState('');
  useEffect(() => e.registerUpdateListener(({
    editorState: e
  }) => {
    let t = '';
    e.read(() => {
      t = $convertToMarkdownString([UNORDERED_LIST, ORDERED_LIST]);
    });
    i(t);
  }), [e]);
  return t;
}
function dg({
  initialPrompt: e = null,
  setInitialPrompt: t
}) {
  let i = {
    paragraph: ex()(cssBuilderInstance.lh24.$, 'prompt_editor_v2--promptParagraph--NNM8M prompt_editor_v2--paragraph--poJzZ'),
    list: {
      listitem: 'prompt_editor_v2--listItem--annrO',
      ol: 'prompt_editor_v2--ol--ic0Fx',
      olDepth: ['prompt_editor_v2--ol1--faICF', 'prompt_editor_v2--ol2--F-Y-h', 'prompt_editor_v2--ol3--MAJmP', 'prompt_editor_v2--ol4--fqE0M', 'prompt_editor_v2--ol5---WTwx'],
      ul: 'prompt_editor_v2--ul--S8A3v',
      nested: {
        listitem: 'prompt_editor_v2--nestedListItem--JvJWk'
      }
    }
  };
  return {
    namespace: 'FigJamAiPromptEditor',
    editorState: () => {
      if (e) {
        $convertFromMarkdownString(e, [UNORDERED_LIST, ORDERED_LIST]);
      } else {
        let e = $getRoot();
        if (!e.getFirstChild()) {
          let t = $createParagraphNode();
          e.append(t);
        }
      }
      t('');
    },
    nodes: [ListNode, ListItemNode],
    theme: i,
    onError(e) {
      console.error(e);
    }
  };
}
function dj({
  onSubmit: e
}) {
  let t = dx();
  let i = useAtomWithSubscription(_$$dO);
  let n = useAppModelProperty('keyboardShortcuts');
  let r = getKeyboardShortcut(n, 'quick-create');
  return jsx('div', {
    className: 'ai_modal--generateButtonContainer--TZ5A4',
    children: jsx('div', {
      className: 'ai_modal--generateButtonContainerInner--LrHTI',
      children: jsx(Button, {
        'disabled': t.length === 0 || i.status === _$$c6.LOADING,
        'onClick': () => {
          e(t);
        },
        'htmlAttributes': {
          'data-testid': 'figjam-ai-modal-generate-button'
        },
        'aria-label': getI18nString('whiteboard.ai_modal.make_button_aria_label'),
        'aria-description': r,
        'children': renderI18nText('whiteboard.ai_modal.make_shortcut')
      })
    })
  });
}
function dk({
  shouldAutoFocus: e
}) {
  let [t] = useLexicalComposerContext();
  useEffect(() => {
    e && t.focus();
  }, [t, e]);
  return null;
}
function dP({
  hasFreeformEditedPrompt: e,
  updatePillSuggestions: t,
  examplePrompt: i
}) {
  let n = useAtomWithSubscription(_$$xc);
  let [r] = useLexicalComposerContext();
  let a = useAtomWithSubscription(_$$dO);
  let [s, o] = useAtomValueAndSetter(JV);
  let d = useSetAtom(KL);
  useEffect(() => {
    n ? r.update(() => {
      $convertFromMarkdownString(n.prompt, [UNORDERED_LIST, ORDERED_LIST]);
      t(r.getEditorState(), n.useCaseCategory);
    }) : t(r.getEditorState());
  }, [r, n, t]);
  useEffect(() => {
    a.status === _$$c6.LOADING ? r.setEditable(!1) : r.setEditable(!0);
  }, [r, a]);
  let c = useCallback(t => (isCommandEvent(t) && t.key === 'Enter' || t.key === 'Tab' || e.current || (Br(), e.current = !0), !1), [e]);
  useEffect(() => r.registerCommand(KEY_DOWN_COMMAND, c, COMMAND_PRIORITY_NORMAL), [r, c]);
  let u = useCallback(e => {
    if (isCommandEvent(e) || isExactModifier(e, ModifierKeyCodes.SHIFT) || isExactModifier(e, ModifierKeyCodes.ALT)) return !1;
    let n = $convertToMarkdownString([UNORDERED_LIST, ORDERED_LIST]);
    r.update(() => {
      if (n.length === 0) {
        let n = _$$sM(i.title, i.subtitle);
        $convertFromMarkdownString(n, [UNORDERED_LIST, ORDERED_LIST]);
        $getRoot().selectEnd().insertText(' ');
        let a = r.getEditorState();
        o(i.useCaseCategory);
        t(a, i.useCaseCategory);
        e.preventDefault();
        d(n);
        _$$tV(n);
        return !0;
      }
    });
    return !1;
  }, [r, i, o, t, d]);
  useEffect(() => r.registerCommand(KEY_TAB_COMMAND, u, COMMAND_PRIORITY_NORMAL), [r, u]);
  useEffect(() => r.registerUpdateListener(({
    editorState: e,
    prevEditorState: i
  }) => {
    let n = '';
    e.read(() => {
      n = $convertToMarkdownString([UNORDERED_LIST, ORDERED_LIST]);
    });
    let r = !1;
    let a = '';
    i.read(() => {
      a = $convertToMarkdownString([UNORDERED_LIST, ORDERED_LIST]);
      let e = $getSelection();
      let t = $getRoot().getFirstDescendant()?.getKey();
      let i = $getRoot().getLastDescendant()?.getKey();
      $isRangeSelection(e) && (r = a.length > 0 && (e.focus.offset === 0 && e.focus.key === t && e.anchor.key === i && $isAtNodeEnd(e.anchor) || e.anchor.offset === 0 && e.anchor.key === t && e.focus.key === i && $isAtNodeEnd(e.focus)));
    });
    r ? n !== a && (o(void 0), t(e, void 0, !0), n.length > 0 && Br()) : n.length > 0 && !s ? t(e) : n.length === 0 && (o(void 0), t(e));
  }), [r, s, o, t]);
  return null;
}
function dZ() {
  return jsx('div', {
    className: 'ai_announcement_modal--browseInCommunityContainer--03F-u',
    children: jsxs(BaseLinkComponent, {
      href: '/community/collections/best-figjam-ai-prompts',
      target: '_blank',
      className: 'ai_announcement_modal--communityLink--CA-Qf',
      trusted: !0,
      children: [jsx(SvgComponent, {
        svg: _$$A16,
        className: 'ai_announcement_modal--communityIcon--Gmr2-'
      }), renderI18nText('whiteboard.ai_feature_announcement.more_prompts.community_button')]
    })
  });
}
function d$() {
  return jsxs('div', {
    className: 'ai_announcement_modal--morePromptsHeader--Av2QS',
    children: [jsx('span', {
      className: 'ai_announcement_modal--headerText--iJ5yO',
      children: renderI18nText('whiteboard.ai_feature_announcement.more_prompts.title')
    }), jsx('span', {
      className: cssBuilderInstance.font13.$,
      children: renderI18nText('whiteboard.ai_feature_announcement.more_prompts.description')
    })]
  });
}
function dY({
  selectedPrompt: e,
  setSelectedPrompt: t
}) {
  let i = _$$FN();
  return jsx('div', {
    className: 'ai_announcement_modal--morePromptsBodyOuter--3cfNs',
    children: jsx('div', {
      className: 'ai_announcement_modal--morePromptsBody--SEGr5',
      children: Object.entries(i).map(([i, n]) => jsx(dX, {
        category: n.category,
        suggestion: n.suggestion,
        isSelected: e === i,
        onClick: () => t(i)
      }, i))
    })
  });
}
function dX({
  category: e,
  suggestion: t,
  isSelected: i,
  onClick: n
}) {
  let r = wg(e);
  return jsxs('button', {
    className: ex()('ai_announcement_modal--morePromptExample--O3B-f', {
      'ai_announcement_modal--selectedMorePromptExample--TCcYx': i
    }),
    onClick: n,
    children: [jsx('div', {
      className: 'ai_announcement_modal--morePromptIcon--vM2Pj',
      children: r
    }), jsx('div', {
      className: cssBuilderInstance.inline.alignLeft.$,
      children: t.map((e, i) => jsxs('span', {
        className: e.bold ? 'ai_announcement_modal--boldedText--DaSsh' : 'ai_announcement_modal--normalText--zPNO-',
        children: [e.text, i !== t.length ? ' ' : '']
      }, i))
    })]
  });
}
function dq({
  dismissModal: e,
  selectedPromptKey: t
}) {
  let i = useSetAtom(_$$ft);
  let n = useSetAtom(_$$xc);
  let r = getLocaleFallbacks()[0] === 'en';
  let a = _$$dh();
  return jsxs('div', {
    className: 'ai_announcement_modal--morePromptsFooter--peV6H',
    children: [r ? jsx(dZ, {}) : jsx('div', {}), jsx('div', {
      className: cssBuilderInstance.flex.gap16.$,
      children: jsx('button', {
        onClick() {
          let r = _$$FN()[t];
          if (!r) return;
          let s = _$$hZ(r);
          n({
            prompt: s,
            useCaseCategory: r.setUseCaseCategory ? r.category : void 0
          });
          i({
            prompt: s,
            useCaseCategory: r.setUseCaseCategory ? r.category : void 0,
            subtitle: s,
            stage: _$$Zj.GENERATE_MODE,
            entrypoint: _$$fV.IN_EDITOR,
            pageNodeId: a
          });
          e();
        },
        children: jsx('div', {
          className: ex()(cssBuilderInstance.py4.pl8.pr16.b1.bRadius6.font13.fontMedium.lh24.$, 'ai_announcement_modal--primaryBtn--Hp0e- ai_announcement_modal--btn--I8Apa'),
          children: jsxs('div', {
            className: cssBuilderInstance.flex.flexRow.itemsCenter.$,
            children: [jsx(SvgComponent, {
              svg: _$$A13,
              className: 'ai_announcement_modal--aiIcon--u4hnd'
            }), getI18nString('whiteboard.ai_modal.make')]
          })
        })
      })
    })]
  });
}
let dJ = registerModal(e => {
  let t = useModalManager(e);
  let [i, n] = useState(() => Object.keys(_$$FN())[0] ?? '');
  return jsx(ModalRootComponent, {
    manager: t,
    width: 'fit-content',
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx('div', {
          className: ex()(cssBuilderInstance.absolute.h18.$, 'ai_announcement_modal--aiBadge--DSi1-'),
          children: jsx(_$$v2, {
            location: 'MODAL',
            onPointerUp: () => {
              sendUrlToParent(_$$nG) || customHistory.unsafeRedirect(_$$nG, '_blank');
            }
          })
        })
      }), jsxs(DialogBody, {
        padding: 0,
        children: [jsx(d$, {}), jsx('div', {
          className: 'ai_announcement_modal--morePromptsModalBody--8TEvg',
          children: jsx(dY, {
            setSelectedPrompt: n,
            selectedPrompt: i
          })
        })]
      }), jsx(DialogFooter, {
        children: jsx(dq, {
          dismissModal: e.onClose,
          selectedPromptKey: i
        })
      })]
    })
  });
}, 'FigJamAIMorePromptsModal');
function d1({
  suggestions: e,
  setSuggestions: t,
  updatePillSuggestions: i,
  maxHeight: n
}) {
  let r = useDispatch<AppDispatch>();
  let [a] = useLexicalComposerContext();
  let s = useAtomWithSubscription(_$$dO);
  let [l, c] = useAtomValueAndSetter(JV);
  let u = ex()('ai_modal--suggestionPill--w44sw text--fontPos11--2LvXf text--_fontBase--QdLsd', dt);
  let h = ex()(cssBuilderInstance.colorBg.pl10.pr8.font11.lh16.borderBox.b1.bRadius6.wFitContent.$, dt);
  let m = dx();
  return jsx(Fragment, {
    children: e.length > 0 && jsxs('div', {
      className: 'ai_modal--pillSuggestions--G7kp1',
      style: {
        maxHeight: n
      },
      children: [jsx('div', {
        className: 'ai_modal--pillSuggestionsGenerated--6JXOL',
        children: e.map((n, r) => jsx(ButtonPrimitive, {
          className: u,
          onClick: () => {
            void 0 === l ? a.update(() => {
              $convertFromMarkdownString(n.prompt, [UNORDERED_LIST, ORDERED_LIST]);
              n.prompt.endsWith(' ') && $getRoot().selectEnd().insertText(' ');
              $getRoot().selectEnd();
            }) : a.update(() => {
              let t = $convertToMarkdownString([UNORDERED_LIST, ORDERED_LIST]);
              let i = LY(l).length === e.length && l !== _$$es2.MIND_MAP ? `${_$$jJ(t)} 
- ${n.prompt} ` : `${t}
- ${n.prompt} `;
              $convertFromMarkdownString(i, [UNORDERED_LIST, ORDERED_LIST]);
              $getRoot().selectEnd();
            });
            _$$UH(n) ? (c(n.categoryKey), i(a.getEditorState(), n.categoryKey)) : t(e => e.filter(e => e.prompt !== n.prompt));
            _$$lt2(r, n.prompt);
          },
          disabled: s.status === _$$c6.LOADING,
          children: jsxs('div', {
            className: cssBuilderInstance.flex.itemsCenter.gap6.$,
            children: [_$$UH(n) && Oo(n.categoryKey), n.title, !_$$UH(n) && jsx(SvgComponent, {
              svg: _$$A18,
              className: cssBuilderInstance.colorIconTertiary.$
            })]
          })
        }, n.title))
      }), void 0 === l && m.length === 0 && jsx(ButtonPrimitive, {
        className: h,
        disabled: s.status === _$$c6.LOADING,
        onClick: () => {
          r(showModalHandler({
            type: dJ
          }));
        },
        children: jsxs('div', {
          className: cssBuilderInstance.flex.itemsCenter.gap4.cursorDefault.$,
          children: [renderI18nText('whiteboard.ai_modal.suggestion.more_prompts'), jsx(SvgComponent, {
            svg: _$$A17,
            className: cssBuilderInstance.colorIconFigjam.$
          })]
        })
      })]
    })
  });
}
function d2({
  onSubmit: e
}) {
  let [t] = useLexicalComposerContext();
  let i = dx();
  let n = useCallback(t => i.length === 0 || !!isCommandEvent(t) && (t.preventDefault(), e($convertToMarkdownString([UNORDERED_LIST, ORDERED_LIST])), !0), [e, i.length]);
  useEffect(() => t.registerCommand($$if, n, COMMAND_PRIORITY_NORMAL), [t, n]);
  return null;
}
function d3() {
  let e = dx();
  let t = useAtomWithSubscription(JV);
  let i = TQ(e, t);
  if (e.length <= 0 || !i) return null;
  let n = _$$jJ(e);
  return jsx('div', {
    className: ex()(cssBuilderInstance.absolute.zIndex0.top0.left0.bgTransparent.overflowHidden.colorTextTertiary.font13.wFull.lh24.$, 'prompt_editor_v2--placeholderParagraph--D5ueD prompt_editor_v2--paragraph--poJzZ'),
    children: `${n}${getI18nString('whiteboard.ai_modal.prompt_builder.trailing_ellipsis')}`
  });
}
function d5({
  onSubmit: e
}) {
  let t;
  let [i, n] = useAtomValueAndSetter(Ac);
  let r = useRef(!1);
  let a = useAtomWithSubscription(JV);
  let [s, d] = useState(_$$fF(i, a));
  let c = useAtomWithSubscription(_$$dO);
  let [u, h] = useState(() => randomPick([assertNotNullish.TEMPLATE, assertNotNullish.VISUAL]));
  let [m, f] = useState(!0);
  let _ = useMemo(() => Cb(u), [u]);
  let x = _$$sM(_.title, _.subtitle, !1);
  let g = useSetAtom(Ac);
  let j = useRef(null);
  let b = useResizeObserverRef(j);
  t = 180;
  b && (t = 36 * Math.floor((parsePxNumber(N5f) - b.height) / 36));
  let y = t;
  let v = useCallback((e, t, i) => {
    e.read(() => {
      let e = $convertToMarkdownString([UNORDERED_LIST, ORDERED_LIST]);
      d(n => {
        let r = _$$fF(e, t);
        let a = !n.every(_$$UH);
        let s = r.some(_$$UH) && e.length === 0 || i;
        return a && !s ? n : r;
      });
    });
  }, []);
  let C = useRef([]);
  useEffect(() => {
    let e = C.current.map(e => e.title);
    let t = s.map(e => e.title);
    let i = !equals(new Set(e), new Set(t));
    let n = C.current.length > 0 && !C.current.some(_$$UH) && !s.some(_$$UH);
    C.current = s;
    i && !n && Fg(s);
  }, [s]);
  let T = useCallback(e => {
    e.read(() => {
      let e = $convertToMarkdownString([UNORDERED_LIST, ORDERED_LIST]);
      e.length !== 0 || m ? e.length !== 0 && m && f(!1) : (h(e => e === assertNotNullish.TEMPLATE ? assertNotNullish.VISUAL : assertNotNullish.TEMPLATE), f(!0));
      r.current && e.length === 0 && (r.current = !1, g(''));
    });
  }, [m, g]);
  return jsx(Fragment, {
    children: jsxs(_$$n8, {
      initialConfig: dg({
        initialPrompt: i,
        setInitialPrompt: n
      }),
      children: [jsx('div', {
        className: ex()('prompt_editor_v2--promptBox--SdF5B', cssBuilderInstance.flex.flexColumn.colorBgSecondary.p16.mx16.bRadius6.if(c.status === _$$c6.LOADING, cssBuilderInstance.opacity0_5).$),
        children: jsxs('div', {
          className: cssBuilderInstance.relative.flex.flexColumn.font13.resizeNone.wFull.hFull.justifyBetween.$,
          children: [jsx(_$$$2, {
            contentEditable: jsx(d9, {
              contentEditableClassName: df,
              contentEditableStyle: {
                minHeight: b?.height
              },
              disabled: c.status === _$$c6.LOADING,
              dataTestid: 'figjam-ai-modal-prompt-editor-v2',
              isAutoFocused: c.status !== _$$c6.LOADING,
              ariaLabel: getI18nString('whiteboard.ai_modal.prompt_label'),
              ariaPlaceholder: x
            }),
            placeholder: jsxs('div', {
              'aria-hidden': !0,
              'className': ex()('prompt_editor_v2--placeholder--wqsck text--fontPos13--xW8hS text--_fontBase--QdLsd', d_),
              'ref': j,
              'children': [jsx('span', {
                children: x
              }), jsx(d4, {})]
            }),
            ErrorBoundary: _$$A14
          }), jsx(d3, {}), jsx(d1, {
            suggestions: s,
            setSuggestions: d,
            updatePillSuggestions: v,
            maxHeight: y
          })]
        })
      }), jsx(_$$Q2, {}), jsx(_$$m5, {}), jsx(_$$A15, {
        maxDepth: 5
      }), jsx(_$$D3, {
        onChange: T,
        ignoreSelectionChange: !0
      }), jsx(_$$G4, {}), jsx(_$$E6, {
        transformers: [UNORDERED_LIST, ORDERED_LIST]
      }), jsx(dk, {
        shouldAutoFocus: c.status !== _$$c6.LOADING
      }), jsx(d2, {
        onSubmit: e
      }), jsx(dP, {
        hasFreeformEditedPrompt: r,
        updatePillSuggestions: v,
        examplePrompt: _
      }), jsx(dj, {
        onSubmit: e
      })]
    }, 'FigJamAiPromptEditor')
  });
}
function d6({
  onSubmit: e
}) {
  let t = useAtomWithSubscription(QY);
  return jsx('div', {
    'className': ex()(cssBuilderInstance.colorBgSecondary.p16.bRadius6.cursorText.$, 'prompt_editor_v2--entryViewPromptBox--EkmRO'),
    'data-onboarding-key': AI,
    'children': jsxs('div', {
      className: cssBuilderInstance.relative.font13.fontInter.normal.fontNormal.lh24.flex.itemsStart.wFull.hFull.$,
      children: [jsx(_$$$2, {
        contentEditable: jsx(d9, {
          contentEditableClassName: ex()(cssBuilderInstance.overflowYScroll.zIndex1.wFull.hFull.alignLeft.$, df),
          dataTestid: 'figjam-ai-modal-entry-view-prompt-editor',
          disabled: !1,
          isAutoFocused: !0,
          ariaLabel: getI18nString('whiteboard.ai_modal.prompt_label'),
          ariaPlaceholder: getI18nString('whiteboard.ai_modal.prompt_placeholder')
        }),
        placeholder: jsx('div', {
          'aria-hidden': !0,
          'className': ex()(cssBuilderInstance.eventsNone.colorTextTertiary.absolute.$, t.showing ? null : d_),
          'children': jsx('span', {
            children: getI18nString('whiteboard.ai_modal.prompt_placeholder')
          })
        }),
        ErrorBoundary: _$$A14
      }), jsx(_$$Q2, {}), jsx(_$$m5, {}), jsx(_$$A15, {
        maxDepth: 5
      }), jsx(_$$G4, {}), jsx(dk, {
        shouldAutoFocus: !0
      }), jsx(d2, {
        onSubmit: e
      }), jsx(_$$E6, {
        transformers: [UNORDERED_LIST, ORDERED_LIST]
      })]
    })
  });
}
function d4() {
  return jsx(Badge, {
    className: ex()(cssBuilderInstance.font11.fontMedium.h16.px4.bRadius5.ml4.hFitContent.colorTextSecondary.$, 'prompt_editor_v2--tabBadge--bntTA'),
    text: getI18nString('whiteboard.ai_modal.hint_tab'),
    color: BadgeColor.TERTIARY
  });
}
function d9({
  contentEditableClassName: e,
  contentEditableStyle: t,
  disabled: i,
  dataTestid: n,
  isAutoFocused: r,
  ariaLabel: a,
  ariaPlaceholder: s
}) {
  let [d] = useLexicalComposerContext();
  let [c, u] = useState(!!r);
  let p = useRef(null);
  let h = useCallback(() => !!c && (u(!1), p.current?.focus(), !0), [p, c]);
  O1(h, KD.EDITING_TEXT_FIELD);
  return jsxs('section', {
    'aria-label': getI18nString('whiteboard.ai_modal.make_templates_and_diagrams'),
    'className': 'prompt_editor_v2--editableWrapper---hIpF',
    'children': [jsx(ButtonPrimitive, {
      className: 'prompt_editor_v2--visuallyHiddenButton--AsyAA',
      htmlAttributes: {
        onKeyDown: e => {
          e.key !== 'Enter' || c || (e.preventDefault(), u(!0), d.focus());
        }
      },
      onClick: noop,
      ref: p,
      children: getI18nString('whiteboard.ai_modal.edit_prompt_button')
    }), jsx(_$$a7, {
      'aria-placeholder': s,
      'ariaLabel': a,
      'className': e,
      'data-testid': n,
      'disabled': i,
      'onBlur': () => {
        c && u(!1);
      },
      'onClick': () => {
        c || (u(!0), d.focus());
      },
      'onFocus': () => {
        c || u(!0);
      },
      'onKeyDown': e => {
        e.key === 'Escape' && c && (u(!1), p.current?.focus());
      },
      'placeholder': jsx(Fragment, {}),
      'spellCheck': !1,
      'style': t,
      'tabIndex': c ? 0 : -1
    })]
  });
}
function d8({
  onGenerate: e
}) {
  let t = useAtomWithSubscription(_$$zS);
  let i = useSetAtom(_$$H4);
  let n = useCurrentFileKey();
  let r = useMemo(() => _$$w2(1), []);
  let a = useSetAtom(_$$ft);
  let s = useSetAtom(Ac);
  let d = _$$dh();
  let c = t => {
    e();
    s(`${t.title} ${t.subtitle}`);
    a({
      prompt: `${t.title} ${t.subtitle}`,
      useCaseCategory: t.useCaseCategory,
      subtitle: t.subtitle,
      stage: _$$Zj.GENERATE_MODE,
      entrypoint: _$$fV.IN_EDITOR,
      fromGenerateModalV2: !0,
      pageNodeId: d
    });
  };
  let u = async t => {
    e();
    s(t);
    await a({
      prompt: t,
      stage: _$$Zj.GENERATE_MODE,
      entrypoint: _$$fV.IN_EDITOR,
      fromGenerateModalV2: !0,
      pageNodeId: d
    });
  };
  let h = _$$a6() ? getI18nString('whiteboard.ai_modal.beta_badge') : getI18nString('qa.ai');
  return jsx(TrackingProvider, {
    name: TrackingKeyEnum.AI_PROMPT_BUILDER_ENTRY_VIEW,
    properties: {
      fileKey: n
    },
    children: jsx('div', {
      'data-testid': 'figjam-ai-modal-entry-view-v2',
      'className': dr,
      'children': jsxs(_$$n8, {
        initialConfig: dg({
          setInitialPrompt: s
        }),
        children: [jsx(de, {
          title: getI18nString('whiteboard.ai_modal.make_templates_and_diagrams'),
          onClose: i,
          badge: jsx(_$$E5, {
            variant: 'inactiveOutline',
            children: h
          }),
          testIdPrefix: 'ai-modal-header'
        }), jsxs(RecordingScrollContainer, {
          className: da,
          children: [jsx('div', {
            className: 'ai_modal--entryViewPromptEditorWrapper--D6Zwq',
            children: jsx(d6, {
              onSubmit: u
            })
          }), jsx('div', {
            className: 'ai_modal--oneClickPromptSection--K-kml',
            children: jsx('div', {
              className: ex()(cssBuilderInstance.mx16.grid.rowGap12.overflowHidden.$, 'ai_modal--oneClickPromptGridV2--yc8rD'),
              children: r.map((e, i) => jsx(d7, {
                shouldAnimate: t === Wl.NEW_FILE,
                index: i,
                children: jsx(dl, {
                  suggestion: e,
                  onClick: () => c(e)
                })
              }, e.title + e.subtitle))
            })
          }), jsx(dj, {
            onSubmit: u
          })]
        })]
      }, 'FigJamAiEntryViewPromptEditor')
    })
  });
}
function d7({
  shouldAnimate: e,
  index: t,
  children: i
}) {
  return e ? jsx(_$$P3.div, {
    initial: {
      opacity: 0,
      scale: 0.8,
      transform: 'translateY(40px)'
    },
    animate: {
      opacity: 1,
      scale: 1,
      transform: 'translateY(0px)'
    },
    transition: {
      delay: (t + 1) * 0.05
    },
    children: i
  }) : i;
}
function ct() {
  let e = useAtomWithSubscription(_$$dO);
  return getFeatureFlags().cortex_execution_tracing && (e.status === _$$c6.SUCCESS || e.status === _$$c6.ERROR) && e.trace ? jsx('div', {
    style: styleBuilderInstance.mb16.$,
    className: cssBuilderInstance.mx16.mt16.$,
    children: jsxs('div', {
      className: cssBuilderInstance.px12.py12.flex.gap12.bRadius6.colorBgFigjamTertiary.font11.colorTextFigjam.overflowBreakWord.$,
      children: [jsx('div', {
        children: renderI18nText('whiteboard.ai_modal.share_trace_nudge_in_modal', {
          weirdOutput: jsx('span', {
            className: cssBuilderInstance.font11.colorTextFigjam.fontBold.$,
            children: getI18nString('whiteboard.ai_modal.share_trace_nudge_weird_output')
          })
        })
      }), jsx(ButtonPrimitive, {
        className: 'ai_share_trace_nudge--button--9ZX8n',
        onClick: () => {
          noop(JSON.stringify(e.trace, null, 2), 'trace.json');
        },
        children: jsx('div', {
          className: cssBuilderInstance.font11.lh16.noWrap.$,
          children: renderI18nText('whiteboard.ai_modal.share_trace')
        })
      })]
    })
  }) : jsx(Fragment, {});
}
function ci({
  onGenerate: e
}) {
  let t = useSetAtom(_$$H4);
  let i = useAtomWithSubscription(_$$dO);
  let n = useAtomWithSubscription(JV);
  let [r, a] = useAtomValueAndSetter(_$$Sn);
  let s = useAtomWithSubscription(_$$l8);
  let l = selectCurrentFile();
  let d = i.status === _$$c6.SUCCESS ? _$$Zj.REFINEMENT_MODE : _$$Zj.GENERATE_MODE;
  let u = useSetAtom(_$$ft);
  let h = _$$dh();
  let m = async t => {
    e();
    await u({
      prompt: t,
      useCaseCategory: n,
      stage: d,
      entrypoint: _$$fV.IN_EDITOR,
      fromGenerateModalV2: !0,
      pageNodeId: h
    });
  };
  function f(e) {
    e !== r && s && WhiteboardAiVisualCppBindings && (a(e), WhiteboardAiVisualCppBindings.updateFigjamAiGanttChartType(e, s));
  }
  let _ = _$$a6() ? getI18nString('whiteboard.ai_modal.beta_badge') : getI18nString('qa.ai');
  return jsx(TrackingProvider, {
    name: TrackingKeyEnum.AI_PROMPT_BUILDER_GENERATE_STAGE,
    properties: {
      fileKey: l?.key
    },
    children: jsxs('div', {
      'data-testid': 'figjam-ai-modal-prompt-builder-v2',
      'className': dr,
      'children': [jsx(de, {
        title: getI18nString('whiteboard.ai_modal.make_templates_and_diagrams'),
        onClose: t,
        badge: jsx(_$$E5, {
          variant: 'inactiveOutline',
          children: _
        }),
        closeButtonInnerText: 'dismiss',
        testIdPrefix: 'ai-modal-header'
      }), jsxs(RecordingScrollContainer, {
        className: da,
        children: [jsx('div', {
          className: cssBuilderInstance.pt16.$,
          children: jsx(d5, {
            onSubmit: m
          })
        }), jsx(ct, {}), i.status === _$$c6.SUCCESS && i.type === 'gantt' && jsx('div', {
          className: 'ai_modal--ganttChartStyleContainer--lXP5n',
          children: jsxs('div', {
            className: 'ai_modal--ganttChartStyleContainerInner--GQHQh',
            children: [jsx('div', {
              className: ex()(cssBuilderInstance.colorTextSecondary.$),
              children: renderI18nText('whiteboard.ai_modal.style')
            }), jsxs('div', {
              children: [jsx('button', {
                onClick: () => {
                  f(IPanelType.BASIC);
                },
                className: ex()(cssBuilderInstance.inline.itemsCenter.py6.px14.b1.colorBorder.fontMedium.lh16.$, {
                  [di]: !0,
                  [dn]: r === IPanelType.BASIC
                }),
                style: styleBuilderInstance.add({
                  borderRadius: '6px 0px 0px 6px',
                  fontSize: '10px'
                }).$,
                children: renderI18nText('whiteboard.ai_modal.basic')
              }), jsx('button', {
                onClick: () => {
                  f(IPanelType.EXPANDED);
                },
                className: ex()(cssBuilderInstance.inline.itemsCenter.py6.px14.bSolid.br1.bt1.bb1.colorBorder.fontMedium.lh16.$, {
                  [di]: !0,
                  [dn]: r === IPanelType.EXPANDED
                }),
                style: styleBuilderInstance.add({
                  borderRadius: '0px 6px 6px 0px',
                  fontSize: '10px'
                }).$,
                children: renderI18nText('whiteboard.ai_modal.expanded')
              })]
            })]
          })
        })]
      })]
    })
  });
}
let cn = [buildUploadUrl('25d8a30c44eab356d393ee997bc62cd0c85b4a28'), buildUploadUrl('3d959a21151e0b11ad486bd688e54f88d625c00a'), buildUploadUrl('9e7571f06975aa64d8e90ac0289a1b152dcc4dad')];
function cr() {
  let e = useFullscreenReady();
  let t = useIsProgressBarHiddenOrLocked();
  return !!e && !t;
}
function ca() {
  let e = useSelector(e => e.mirror.appModel.showUi);
  let t = useAtomWithSubscription(_$$zS);
  let i = useSetAtom(_$$H4);
  let n = useRef(null);
  O1(() => {
    let r = document.activeElement;
    return !!(e && t !== Wl.NONE && (n.current?.contains(r) || r?.classList.contains('focus-target') || isFullscreenInterceptElement(r))) && (i(), !0);
  }, KD.MODAL);
  return n;
}
function cs() {
  return cr() ? jsx(lq, {
    children: jsx(co, {})
  }) : null;
}
function co() {
  let e;
  let [t, i] = useAtomValueAndSetter(_$$yt);
  !function () {
    let e = _$$dh();
    let t = useAtomWithSubscription(J1);
    let i = useSetAtom(_$$RJ);
    useEffect(() => {
      e !== t && i();
    }, [e, i, t]);
  }();
  (function () {
    let e = useCurrentFileKey();
    let t = useSetAtom(A0);
    useEffect(() => {
      t();
    }, [e, t]);
  })();
  let n = useAppModelProperty('showUi');
  let r = useAtomWithSubscription(_$$zS);
  if (r === Wl.NONE || r === Wl.TOP_BAR) return null;
  if (r === Wl.NEW_FILE) {
    e = jsx(cc, {
      onGenerate: () => {
        i(!0);
      },
      hasGenerated: t
    });
  } else {
    throw new Error('Unsupported AI Modal Display Type');
  }
  return jsx('div', {
    className: cssBuilderInstance.if(!n, cssBuilderInstance.hidden).$,
    children: e
  });
}
function cl({
  onGenerate: e
}) {
  let t = useCurrentFileKey();
  let i = ca();
  U1(i);
  return jsx(TrackingProvider, {
    name: TrackingKeyEnum.AI_PROMPT_BUILDER_MODAL,
    properties: {
      fileKey: t,
      modalSource: Wl.TOP_BAR
    },
    children: jsx('div', {
      'className': 'ai_modal--topBarV2--kJAjC',
      'data-testid': 'figjam-ai-modal-topbar-v2',
      'ref': i,
      'children': jsx(cp, {
        onGenerate: e
      })
    })
  });
}
function cd() {
  let e = !isAIFeaturesEnabledForCurrentUser() && Uy();
  let t = useSetAtom(_$$yt);
  let i = useAtomWithSubscription(_$$zS) === Wl.TOP_BAR;
  let n = cr();
  return e && i && n ? jsx(lq, {
    children: jsx(cl, {
      onGenerate: () => {
        t(!0);
      }
    })
  }) : null;
}
function cc({
  onGenerate: e,
  hasGenerated: t
}) {
  let i = useCurrentFileKey();
  let n = isHandbrakeDisabledForCurrentUser();
  let r = ca();
  return jsxs(Fragment, {
    children: [jsx(TrackingProvider, {
      name: TrackingKeyEnum.AI_PROMPT_BUILDER_MODAL,
      properties: {
        fileKey: i,
        modalSource: Wl.NEW_FILE
      },
      children: jsxs('div', {
        'className': 'ai_modal--modalV2--uHVNF',
        'data-testid': 'figjam-ai-modal-new-file-v2',
        'ref': r,
        'children': [jsx(cp, {
          onGenerate: e
        }), !t && jsx(cu, {})]
      })
    }), n && jsx(_$$p3, {
      children: jsx(_$$i5, {
        targetKey: AI
      })
    })]
  });
}
function cu() {
  let e = useCurrentFileKey();
  let t = useDispatch<AppDispatch>();
  let i = {
    rest: {
      scale: 0.9
    },
    hover: {
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      },
      scale: [0.9, 1],
      y: [0, -9, 3]
    }
  };
  return jsxs(TrackingProvider, {
    name: TrackingKeyEnum.AI_PROMPT_BUILDER_TEMPLATES_CALLOUT,
    properties: {
      fileKey: e
    },
    children: [jsxs('div', {
      className: cssBuilderInstance.flex.justifyCenter.itemsCenter.mt16.mb10.$,
      children: [jsx('div', {
        className: ex()(cssBuilderInstance.h2.flex1.$, 'ai_modal--hrLeft--trcI7')
      }), jsx('div', {
        className: ex()(cssBuilderInstance.relative.px10.py4.font11.colorTextSecondary.fontNormal.$),
        children: renderI18nText('whiteboard.ai_modal.or')
      }), jsx('div', {
        className: ex()(cssBuilderInstance.h2.flex1.$, 'ai_modal--hrRight--rxij6')
      })]
    }), jsx(_$$P3.div, {
      variants: {
        hover: {
          transition: {
            staggerChildren: 0.05
          }
        }
      },
      initial: 'rest',
      whileHover: 'hover',
      children: jsxs(TrackedButton, {
        onClick: () => {
          t(showModal({
            type: PH.type,
            data: {
              triggeredFrom: 'aiModal',
              templateInsertionLocation: FileTypeSwitch.CURRENT_FILE
            }
          }));
        },
        innerText: 'start with template',
        className: cssBuilderInstance.flex.itemsCenter.justifyCenter.py6.bgTransparent.wFull.$,
        style: styleBuilderInstance.add({
          height: '42px'
        }).$,
        children: [jsx('div', {
          children: cn.map((e, t) => jsx(_$$P3.img, {
            src: e,
            alt: getI18nString('whiteboard.ai_modal.template_image_alt'),
            style: styleBuilderInstance.add({
              width: '51px',
              position: 'relative'
            }).if(t === 1, styleBuilderInstance.add({
              width: '44px',
              top: '-5px',
              marginLeft: '-26px'
            })).if(t === 0, styleBuilderInstance.add({
              top: '3px'
            })).if(t === 2, styleBuilderInstance.add({
              marginLeft: '-24px',
              top: '3px'
            })).$,
            variants: i
          }, e))
        }), jsxs(_$$P3.div, {
          className: cssBuilderInstance.flex.itemsCenter.justifyCenter.gap4.$,
          variants: {
            rest: {
              x: 0
            },
            hover: {
              transition: {
                duration: 0.3,
                type: 'spring'
              },
              x: [0, -5, 0]
            }
          },
          children: [jsx('div', {
            className: ex()(cssBuilderInstance.font13.$, 'ai_modal--templateCtaV2--n1GTF'),
            children: renderI18nText('whiteboard.ai_modal.template_cta')
          }), jsx('div', {
            className: ex()(cssBuilderInstance.colorIconSecondary.mt2.$),
            children: jsx(_$$k5, {})
          })]
        })]
      })
    })]
  });
}
function cp({
  onGenerate: e
}) {
  let t = useAtomWithSubscription(_$$zS) === Wl.TOP_BAR;
  let i = useAtomWithSubscription(userFlagAtomFamily(Pg));
  return jsxs('div', {
    'data-fullscreen-prevent-event-capture': !0,
    'className': ex()(cssBuilderInstance.colorBg.flex.flexColumn.$, 'ai_modal--generateContainerV2--vAeZh', {
      'ai_modal--border--WpxWn': !t
    }),
    'data-testid': 'figjam-ai-modal-content-v2',
    'children': [i?.status === 'loaded' && !i?.data && jsx(d8, {
      onGenerate: e
    }), i?.status === 'loaded' && i?.data && jsx(ci, {
      onGenerate: e
    })]
  });
}
let cf = 'ai-loading-bell';
function c_() {
  return jsx(lq, {
    children: jsx(cx, {})
  });
}
function cx() {
  let e = useAtomWithSubscription(_$$dO);
  let t = useDispatch<AppDispatch>();
  let i = _$$um2();
  useEffect(() => {
    e.status === _$$c6.LOADING ? t(VisualBellActions.enqueue({
      message: getI18nString('whiteboard.ai_modal.streaming'),
      icon: VisualBellIcon.SPINNER,
      type: cf,
      timeoutOverride: 1 / 0
    })) : t(VisualBellActions.dequeue({
      matchType: cf
    }));
    e.status === _$$c6.ERROR && i(e.errorMessage, _$$ez2.GENERATE);
  }, [e, t, i]);
  return null;
}
function cW({
  iterateOptions: e,
  children: t,
  content: i,
  recordingKey: n,
  aiTrackingContext: r,
  targets: a,
  stayOpen: s,
  completionString: d,
  showFeedbackInline: c = !1,
  onDismiss: u,
  action: p,
  prompt: h,
  onChange: m,
  onRun: f,
  submitLabel: _,
  additionalCompletionText: x,
  minLength: g = 1,
  showPrompt: j = !0,
  disableActionButton: b = !1,
  hideFeedbackButtons: y = !1,
  ...v
}) {
  let {
    onDismiss,
    toastRef,
    hasAcceptButton
  } = function ({
    iterateOptions: e,
    aiTrackingContext: t,
    targets: i,
    stayOpen: n,
    onDismiss: r
  }) {
    let {
      close
    } = useNavigationStack();
    _$$P4(!!n);
    let s = !!e.find(e => [_$$is.ACCEPT, _$$is.KEEP_IT].includes(e.type));
    let o = useCallback(() => {
      void 0 !== t && _$$hm({
        ...t,
        status: AIActionIterationStatus.COMPLETED,
        interaction: AIActionIterationAction.DISMISS,
        interaction_type: AIActionIterationTrigger.BUTTON_CLICK
      });
      close();
      r?.();
    }, [close, t, r]);
    let d = useRef(null);
    let c = useCallback(() => {
      void 0 !== t && _$$hm({
        ...t,
        status: AIActionIterationStatus.COMPLETED,
        interaction: AIActionIterationAction.DISMISS,
        interaction_type: AIActionIterationTrigger.AUTO
      });
    }, [t]);
    _$$x3({
      ref: d,
      targets: i || [],
      onClose: c,
      disabled: !i
    });
    kz(KeyCodes.ESCAPE, () => {
      t && _$$hm({
        ...t,
        status: AIActionIterationStatus.COMPLETED,
        interaction: AIActionIterationAction.DISMISS,
        interaction_type: AIActionIterationTrigger.KEYBOARD_SHORTCUT,
        keyboard_shortcut: F1({
          key: KeyCodes.ESCAPE
        })
      });
      close();
    }, !s);
    return {
      onDismiss: o,
      toastRef: d,
      hasAcceptButton: s
    };
  }({
    iterateOptions: e,
    aiTrackingContext: r,
    targets: a,
    stayOpen: s,
    onDismiss: u
  });
  let S = !!r;
  let w = jsx('div', {
    className: 'x78zum5 xh8yej3 xdt5ytf x1rjybxy',
    children: jsxs('div', {
      className: 'x9f619',
      children: [j && jsx(XG, {
        action: p,
        value: h,
        onChange: m,
        recordingKey: n,
        minLength: g,
        ...v
      }), jsxs(FlexBox, {
        fullWidth: !0,
        justify: 'space-between',
        children: [S && jsx('div', {
          ...props(y && cZ.visibilityHidden),
          children: jsx(_$$z4, {
            aiTrackingContext: r
          }, 'feedbackButtons')
        }), jsx(ActionButton, {
          shortcuts: j ? [{
            key: KeyCodes.ENTER,
            modifier: [ModifierKeyCodes.META]
          }] : [],
          onAction: e => {
            r && SX({
              ...r,
              ...Q0(e),
              interaction: AIActionMode.GENERATE
            });
            f();
          },
          disabled: b || j && h.trim().length < g,
          recordingKey: generateRecordingKey(n, 'enter'),
          variant: j ? 'primary' : 'secondary',
          children: _
        })]
      })]
    })
  });
  return jsx(Panel, {
    extra: w,
    content: i,
    onDismiss: hasAcceptButton ? void 0 : onDismiss,
    recordingKey: generateRecordingKey(n, 'toast'),
    ref: toastRef,
    shouldAutoFocus: !0,
    children: jsx(FlexBox, {
      justify: 'space-between',
      align: 'center',
      fullWidth: !0,
      children: jsxs(FlexBox, {
        gap: 4,
        align: 'center',
        children: [jsx(cz, {
          completionString: d,
          additionalCompletionText: x
        }), jsx('span', {
          className: 'x17akokd x1qxcl5b x1n0bwc9 x1h67ju5',
          children: t
        })]
      })
    })
  });
}
function cz({
  completionString: e,
  additionalCompletionText: t
}) {
  return jsxs(Fragment, {
    children: [jsx(_$$g4, {
      style: {
        '--color-icon': 'var(--color-icon-success)'
      }
    }), jsx('span', {
      'className': 'xiqqdae xkezfkh',
      'data-testid': 'iterateDoneText',
      'children': e || renderI18nText('ai.done')
    }), t && jsx('span', {
      className: 'x17akokd x1qxcl5b',
      children: t
    })]
  });
}
let cZ = {
  visibilityHidden: {
    visibility: 'xlshs6z',
    $$css: !0
  }
};
let c3 = 'ai_canvas_prompt_data_user_prompt';
let c5 = 'ai_canvas_prompt_data_parent_node_guids';
function c6(e, t) {
  _$$l.ai('fj-ai-canvas-prompting-history-recording', () => {
    e.setInteractiveSlideConfigData(c3, t.userPrompt);
    e.setInteractiveSlideConfigData(c5, JSON.stringify(t.sourceNodeIds));
  });
}
function c4(e) {
  let t = e.interactiveSlideConfigData[c3];
  let i = e.interactiveSlideConfigData[c5];
  if (void 0 === t || !i) return;
  let n = [];
  try {
    n = JSON.parse(i);
  } catch {
    return;
  }
  return {
    userPrompt: t,
    sourceNodeIds: n
  };
}
var c9 = (e => (e.TEXT = 'text', e.IMAGE = 'image', e.UNSUPPORTED = 'unsupported', e))(c9 || {});
function c8(e, t) {
  return WhiteboardCanvasAIBindings?.getCanvasAiElibilityForNode(t) === EligibilityStatus.Eligible;
}
async function c7(e) {
  try {
    let t = _$$R4(e);
    return {
      content: await getImagePaintSignedUrl(t),
      type: 'image'
    };
  } catch (e) {
    console.error('Error fetching image URL:', e);
    return {
      content: '',
      type: 'unsupported'
    };
  }
}
function ue(e) {
  return {
    content: e.textSublayer?.textContent || '',
    type: 'text'
  };
}
async function ut(e, t) {
  return (await Promise.all(e.filter(e => c8(t, e)).map(async e => {
    let i = t.get(e);
    return i ? i.isImage ? await c7(i) : ue(i) : {
      content: '',
      type: 'unsupported'
    };
  }))).filter(({
    content: e,
    type: t
  }) => e.length > 0 && t !== 'unsupported').reduce((e, {
    type: t,
    content: i
  }) => (t === 'text' ? e.nodeTextContents.push(i) : t === 'image' && e.nodeImageContents.push(i), e), {
    nodeTextContents: [],
    nodeImageContents: []
  });
}
async function ui(e, t, i, n, r = 0) {
  if (r > n || e.guid in t) return;
  let a = await ur(e);
  if (!a) return;
  t[e.guid] = a;
  let s = c4(e);
  if (s) {
    for (let e of s.sourceNodeIds) {
      let a = i.get(e);
      a && (await ui(a, t, i, n, r + 1));
    }
  }
}
async function un(e, t, i) {
  let n = {};
  for (let r of e) {
    let e = t.get(r);
    e && (await ui(e, n, t, i, 0));
  }
  return n;
}
async function ur(e) {
  if (e.isImage) {
    return {
      type: 'IMG',
      imgUri: (await c7(e)).content,
      guid: e.guid
    };
  }
  {
    let t = ue(e);
    return t.content.length <= 0 ? null : {
      type: 'STICKY',
      text: t.content,
      guid: e.guid
    };
  }
}
async function ua(e, t) {
  let i = await un(e, t, 3);
  let n = function (e, t) {
    let i = [];
    for (let n of Object.values(e)) {
      let e = t.get(n.guid);
      if (!e) continue;
      let r = c4(e);
      if (r) {
        let e = i.find(e => function (e, t) {
          if (e.userPrompt !== t.userPrompt) return !1;
          for (let i of e.sourceNodeIds) {
            if (!t.selectedNodesPromptedOn.includes(i)) return !1;
          }
          return !0;
        }(r, e));
        if (e) {
          n.aiParentPromptId = e.id;
        } else {
          let e = i.length.toString();
          i.push({
            userPrompt: r.userPrompt,
            selectedNodesPromptedOn: r.sourceNodeIds,
            id: i.length.toString()
          });
          n.aiParentPromptId = e;
        }
      }
    }
    return i;
  }(i, t);
  let r = [];
  let a = [];
  for (let [t, n] of Object.entries(i)) e.includes(t) ? r.push(n) : a.push(n);
  return {
    selectedNodes: r,
    otherRelevantNodes: a,
    pastPrompts: n
  };
}
let us = async ({
  params: {
    userPrompt: e,
    nodeTextContents: t,
    nodeImageContents: i,
    selectedNodes: n,
    otherRelevantNodes: r,
    pastPrompts: a,
    onGenerationCompleted: s,
    generateUserPromptFromTexts: o
  },
  abortController: l
}) => {
  let d = _$$Ay5();
  await cortexAPI.figjam.canvasIdeate({
    nodeTextContents: t,
    nodeImageContents: i,
    selectedNodes: n,
    otherRelevantNodes: r,
    previousPrompts: a,
    userPrompt: e,
    generateUserPromptFromTexts: o
  }, d).then(e => {
    l.signal.aborted || s(e.data, e.enhancedPrompt);
  });
};
let uo = async ({
  params: {
    shouldEnhancePrompt: e,
    imageContents: t,
    textContents: i,
    selectedNodes: n,
    setEnhancedPrompt: r,
    otherRelevantNodes: a,
    pastPrompts: s,
    ...o
  },
  abortController: l,
  clientLifecycleId: d
}) => {
  let c = _$$Ay5();
  let p = o.prompt;
  if (p += `\n${i.join('\n')}`, e) {
    let e = await cortexAPI.figjam.canvasEnhancePrompt({
      userPrompt: o.prompt,
      imageContents: t,
      outputType: 'image'
    }, c);
    !l.signal.aborted && e.data && (r(e.data), p = e.data);
  }
  getFeatureFlags().figjam_ai_canvas_threaded_context && (p = function (e, t, i, n) {
    let r = function (e, t, i) {
      let n = function (e, t) {
        let i = {};
        for (let t of e) i[t.guid] = t;
        for (let e of t) i[e.guid] = e;
        return i;
      }(e, t);
      let r = [];
      for (let e of i) {
        let t = {
          selectedNodes: [],
          userPrompt: e.userPrompt,
          knownOutcomes: []
        };
        for (let i of e.selectedNodesPromptedOn) {
          let e = n[i];
          e && t.selectedNodes.push(e);
        }
        t.knownOutcomes = Object.values(n).filter(t => t.aiParentPromptId === e.id);
        t.knownOutcomes.length !== 0 && r.push(t);
      }
      return r;
    }(t, i, n);
    return r.length === 0 ? e : `Here are some past conversations we've had. They're not super important but I'm including them so you have context on what has already been said and done.
${r.map((e, t) => `Interaction ${t + 1}:
${function (e) {
      let t = e.userPrompt.length > 0 ? `## Prompt given to you by the user
- ${e.userPrompt}
` : '';
      return `## Text submitted by user
${e.selectedNodes.map(e => `- ${e.type === 'IMG' ? 'UNKNOWN_IMAGE' : e.text}`).join('\n')}
${t}
## Your response
${e.knownOutcomes.map(e => `- ${e.type === 'IMG' ? 'UNKNOWN_IMAGE' : e.text}`).join('\n')}
`;
    }(e)}`).join('\n')}

  ${e}`;
  }(p, n, a, s));
  let h = await _$$cb2({
    abortController: l,
    params: {
      ...o,
      prompt: p
    },
    clientLifecycleId: d
  });
  c6(o.targetNode, {
    userPrompt: o.prompt,
    sourceNodeIds: n.map(e => e.guid)
  });
  return h;
};
let ul = async ({
  params: {
    targetNode: e,
    onImageSuccess: t,
    imageContents: i,
    textContents: n,
    selectedNodes: r,
    otherRelevantNodes: a,
    pastPrompts: s,
    shouldEnhancePrompt: o,
    setEnhancedPrompt: l,
    ...d
  },
  abortController: c
}) => {
  let u = _$$Ay5();
  let p = await cortexAPI.figjam.canvasMakeImageFromImages({
    userPrompt: d.prompt,
    nodeTextContents: n,
    nodeImageContents: i,
    selectedNodes: r,
    otherRelevantNodes: a,
    previousPrompts: s,
    shouldEnhancePrompt: !!o,
    targetWidth: 480,
    targetHeight: 480
  }, u);
  if (c.signal.aborted) return;
  o && p.enhancedPrompt && l(p.enhancedPrompt);
  t(p.base64Image);
  let h = await processImageWithThumbnail(base64ToUint8Array(p.base64Image), 'image/png', d.prompt);
  _$$l.ai('figjam-ai-canvas-make-image-from-canvas-content', () => {
    e.insertImageInFillPaint(h);
    c6(e, {
      userPrompt: d.prompt,
      sourceNodeIds: r.map(e => e.guid)
    });
  });
};
let ud = async ({
  params: e,
  abortController: t,
  clientLifecycleId: i
}) => !function (e) {
  let t = getSingletonSceneGraph();
  return e.some(e => {
    let i = t.get(e);
    return i?.isImage && c8(t, e);
  });
}(e.selectedNodes.map(e => e.guid)) ? await uo({
  params: e,
  abortController: t,
  clientLifecycleId: i
}) : await ul({
  params: e,
  abortController: t,
  clientLifecycleId: i
});
var uc = (e => (e[e.SHOW_PROMPT_BOX = 0] = 'SHOW_PROMPT_BOX', e[e.HIDE_PROMPT_BOX = 1] = 'HIDE_PROMPT_BOX', e))(uc || {});
var uu = (e => (e.STICKIES = 'STICKIES', e.IMAGE = 'IMAGE', e))(uu || {});
let up = atomWithReducer({
  currentAction: null,
  longRunningAction: null,
  prompt: '',
  generationResult: null,
  generationDoneState: 1
}, (e, t) => {
  switch (t.type) {
    case 'RESET':
      AppStateTsApi?.figjamState().currentAICanvasInputNodeIds.set([]);
      return {
        ...e,
        currentAction: null,
        longRunningAction: null,
        prompt: ''
      };
    case 'SET_CURRENT_ACTION':
      return {
        ...e,
        currentAction: t.action
      };
    case 'SET_LONG_RUNNING_ACTION':
      return {
        ...e,
        longRunningAction: t.longRunningAction
      };
    case 'SET_PROMPT':
      return {
        ...e,
        prompt: t.prompt
      };
    case 'SET_GENERATION_RESULT':
      return {
        ...e,
        generationResult: t.generationResult
      };
    case 'SET_GENERATION_DONE_STATE':
      return {
        ...e,
        generationDoneState: t.doneState
      };
    default:
      throwTypeError(t);
  }
});
function uh() {
  return useAtomValueAndSetter(up);
}
function um({
  currentAction: e
}) {
  let [, t] = uh();
  let i = function (e) {
    switch (e) {
      case JT.CANVAS_GENERATE_IMAGE:
        return ud;
      case JT.CREATE_IDEAS:
        return us;
      default:
        throwTypeError(e);
    }
  }(e);
  let n = RL(e, i);
  let {
    state
  } = n;
  let a = useLatestRef(state);
  let s = useLatestRef(e);
  useEffect(() => {
    (state !== a || e !== s) && t({
      type: 'SET_LONG_RUNNING_ACTION',
      longRunningAction: n
    });
  }, [e, t, n, s, a, state]);
  return null;
}
function uv() {
  let e = useSceneGraphSelectionKeys();
  let t = useSceneGraphSelector();
  let i = useRef([]);
  let n = useRef(null);
  return useCallback(async () => {
    if (!(i.current.length !== e.length || !e.every(e => i.current.includes(e))) && n.current) return n.current;
    i.current = e;
    let r = await ut(e, t);
    let a = await ua(e, t);
    let s = {
      ...r,
      ...a
    };
    n.current = s;
    return s;
  }, [i, n, e, t]);
}
function uC() {
  let [{
    currentAction: e
  }] = uh();
  return useMemo(() => e !== null, [e]);
}
function uT(e, t) {
  let i = e.map(e => t.get(e)?.absoluteBoundingBox).filter(e => void 0 !== e);
  if (i.length === 0) {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
  let n = i[0].x;
  let r = i[0].y;
  let a = i[0].x + i[0].w;
  let s = i[0].y + i[0].h;
  for (let e = 1; e < i.length; e++) {
    let t = i[e];
    n = Math.min(n, t.x);
    r = Math.min(r, t.y);
    a = Math.max(a, t.x + t.w);
    s = Math.max(s, t.y + t.h);
  }
  let o = a - n;
  let l = s - r;
  return {
    x: n,
    y: r,
    width: o,
    height: l
  };
}
function uE(e, t) {
  let i = uT(t, getSingletonSceneGraph());
  _$$l.user('figjam ai canvas positioning', () => {
    e.x = i.x + i.width + 32;
    e.y = i.y;
  });
}
function uS() {
  let e = getViewportInfo({
    subscribeToUpdates_expensive: !1
  });
  let t = useNavigateToViewport();
  return useCallback(i => {
    let n = uT(i, getSingletonSceneGraph());
    let r = {
      x: e.offsetX - e.width / 2 / e.zoomScale,
      y: e.offsetY - e.height / 2 / e.zoomScale,
      width: e.width / e.zoomScale,
      height: e.height / e.zoomScale
    };
    if (!(r.x <= n.x) || !(r.y <= n.y) || !(r.x + r.width >= n.x + n.width) || !(r.y + r.height >= n.y + n.height)) {
      if (n.width <= r.width && n.height <= r.height) {
        t({
          centerX: n.x + n.width / 2,
          centerY: n.y + n.height / 2,
          scale: e.zoomScale
        }, {
          jumpOnAbort: !0
        });
        return;
      }
      t({
        centerX: n.x + n.width / 2,
        centerY: n.y + n.height / 2,
        scale: 0.5 * Math.min(e.width / n.width, e.height / n.height)
      }, {
        jumpOnAbort: !0
      });
    }
  }, [t, e]);
}
function uw(e) {
  return [e.x + e.width, e.y];
}
function uI() {
  return getObservableValue(AppStateTsApi?.figjamState().currentAICanvasInputNodeIds, []);
}
function uL(e) {
  AppStateTsApi?.figjamState().currentAICanvasInputNodeIds.set(e);
}
function uN() {
  let {
    close
  } = useNavigationStack();
  let [{
    currentAction: t
  }, i] = uh();
  return useCallback(() => {
    t && B3(t);
    i({
      type: 'RESET'
    });
    close();
  }, [close, i, t]);
}
function uD({
  action: e,
  value: t,
  onChange: i,
  suggestion: n,
  suggestionPills: r = [],
  promptHistory: a = [],
  recordingKey: s,
  featureNameForInstrumentation: c,
  minLength: u,
  header: p,
  aiTrackingContext: h,
  onRun: m
}) {
  let f = useRef(null);
  let _ = n && t !== n && n.startsWith(t);
  let x = n?.slice(t.length) || '';
  let g = t.length <= 0;
  let j = g && r.length > 0;
  let b = a.length > 0 && g;
  let y = useStore().getState();
  let v = qI();
  let C = document.activeElement?.tagName === 'TEXTAREA';
  kz(KeyCodes.TAB, e => {
    _ && (!v || C) && (e.preventDefault(), i(n), trackFileEvent('actions_prompt_tab_completed', y.openFile?.key, y, {
      feature: c,
      suggestion: n
    }));
  });
  _$$y4(t, f);
  _$$z5();
  let T = Sg(!0, !1);
  return jsxs('div', {
    className: 'x1hmxfdi x9f619',
    children: [jsx('div', {
      className: 'x6drftx',
      children: p
    }), jsxs('div', {
      className: ex()(cssBuilderInstance.borderBox.p4.colorBg.wFull.flex.flexColumn.bRadius5.relative.$),
      onClick: () => {
        let e = f?.current;
        e && e.focus();
      },
      children: [jsx('div', {
        className: ex()(cssBuilderInstance.flex.relative.overflowHidden.$, Dm),
        children: jsxs('div', {
          className: cssBuilderInstance.flex1.relative.font13.ml8.$,
          style: styleBuilderInstance.add({
            lineHeight: `${$g}px`
          }).$,
          children: [jsx('div', {
            children: jsx(_$$gr, {
              ref: f,
              height: _$$OL,
              maxHeight: _$$OL,
              minLength: u,
              onChange: i,
              recordingKey: s,
              value: t,
              verticalPromptLayout: !0
            })
          }), _ && jsxs('div', {
            ...props(uU.suggestionText, _ ? uU.promptBoxTextShimmer : null),
            style: T,
            children: [jsx('span', {
              className: cssBuilderInstance.invisible.$,
              children: t
            }), jsx('span', {
              children: x
            }), _ && jsx('span', {
              className: cssBuilderInstance.inlineFlex.itemsCenter.ml4.$,
              children: jsx(_$$qy, {})
            })]
          }), jsx('div', {
            className: cssBuilderInstance.absolute.flex.flexRow.$,
            style: {
              top: 4,
              right: 4
            },
            children: jsx(_$$y5, {
              helpUrlVariant: e
            })
          })]
        })
      }), jsx('div', {
        className: 'x1swbamy',
        children: jsxs(FlexBox, {
          fullWidth: !0,
          justify: j || b ? 'space-between' : 'end',
          children: [(j || b) && jsxs(FlexBox, {
            gap: 8,
            children: [jsx(_$$nj, {
              promptHistory: a,
              onChange: i,
              textAreaRef: f
            }), r.map((e, t) => jsx(Button, {
              variant: 'secondary',
              onClick: () => {
                i(e.prompt);
                f.current?.focus();
                c && trackFileEvent('actions_prompt_suggestion_clicked', y.openFile?.key, y, {
                  feature: c,
                  suggestion: e.prompt
                });
              },
              children: e.label
            }, t))]
          }), jsx(uP, {
            shortcuts: [{
              key: KeyCodes.ENTER,
              modifier: [ModifierKeyCodes.META]
            }],
            onAction: e => {
              h && SX({
                ...h,
                ...Q0(e),
                interaction: AIActionMode.GENERATE
              });
              m();
            }
          })]
        })
      })]
    })]
  });
}
function uP({
  onAction: e,
  shortcuts: t
}) {
  _$$TH(t || [], (t, i) => {
    e && (t.preventDefault(), e({
      shortcut: i,
      target: null
    }));
  }, !!e);
  return jsx(ButtonPrimitive, {
    className: 'x16rqkct x1f4uy0e xvy4d1p xxk0z11 x78zum5 x6s0dn4 xl56j7k x1gs6z28',
    onClick: () => e({
      shortcut: null,
      target: null
    }),
    children: jsx(_$$d6, {
      stroke: 'white'
    })
  });
}
let uU = {
  promptBoxTextShimmer: {
    WebkitMask: 'x1h85hx6',
    mask: 'xcg3dqn',
    maskClip: null,
    maskComposite: null,
    maskImage: null,
    maskMode: null,
    maskOrigin: null,
    maskPosition: null,
    maskRepeat: null,
    maskSize: null,
    backgroundRepeat: 'xiy17q3',
    animationName: 'x18zoeg8',
    animationDuration: 'x1h5mrz9',
    animationIterationCount: 'xa4qsjk',
    $$css: !0
  },
  suggestionText: {
    position: 'x10l6tqk',
    top: 'x13vifvy',
    width: 'xh8yej3',
    userSelect: 'x87ps6o',
    pointerEvents: 'x47corl',
    color: 'x3vvef7',
    overflowWrap: 'xj0a0fe',
    $$css: !0
  }
};
function uF({
  selectedTab: e,
  onTabChange: t
}) {
  return jsxs('div', {
    className: 'x78zum5 x1q0g3np x167g77z x1e56ztr',
    children: [jsxs('button', {
      ...props(uV.tab(e === 'stickies')),
      onClick: () => t('stickies'),
      children: [jsx(_$$i6, {}), getI18nString('figjam_ai.canvas.prompt_box.tab_stickies')]
    }), jsxs('button', {
      ...props(uV.tab(e === 'image')),
      onClick: () => t('image'),
      children: [jsx(_$$s7, {}), getI18nString('figjam_ai.canvas.prompt_box.tab_image')]
    })]
  });
}
let uH = atom('stickies');
function uB() {
  let [e, t] = useAtomValueAndSetter(uH);
  let {
    promptHistory
  } = setupPromptHistory(_$$i7, e => e);
  let n = useSceneGraphSelection();
  !function () {
    let [{
      longRunningAction: e,
      generationResult: t,
      currentAction: i
    }] = uh();
    let n = e?.state ?? qy.INITIAL;
    let r = uI();
    let a = useSceneGraphSelection();
    let s = _$$$3(a);
    let o = _$$$3(i);
    let d = uN();
    let c = useMemo(() => {
      if (!i || o && i !== null || n === qy.RUNNING || n === qy.CANCELLED) return !1;
      if (n === qy.DONE && t) {
        let e = Object.keys(a);
        let {
          generatedNodeIds
        } = t;
        let n = r.some(t => e.includes(t));
        let s = generatedNodeIds.some(t => e.includes(t));
        if (n || s) return !1;
      }
      return !0;
    }, [o, i, n, t, a, r]);
    useEffect(() => {
      s && c && d();
    }, [s, c, d]);
    kz(KeyCodes.ESCAPE, () => {
      n !== qy.RUNNING && d();
    });
  }();
  let r = uN();
  let a = function () {
    let {
      addPromptToHistory
    } = setupPromptHistory(_$$i7, e => e);
    let t = RL(JT.CREATE_IDEAS, us);
    let i = uv();
    let n = useSceneGraphSelector();
    let r = uS();
    let [{
      prompt: a
    }, s] = uh();
    return useCallback(async ({
      targetSourceNodeIds: o,
      generatedNodeIdsToReplace: l,
      shouldUpdateDoneState: d
    }) => {
      a.trim() !== '' && addPromptToHistory(a);
      let {
        nodeTextContents,
        nodeImageContents,
        selectedNodes,
        otherRelevantNodes,
        pastPrompts
      } = await i();
      clearSelection();
      let x = a.trim();
      await t?.start({
        userPrompt: x,
        nodeTextContents,
        nodeImageContents,
        selectedNodes,
        otherRelevantNodes,
        pastPrompts,
        generateUserPromptFromTexts: !a.length && !!getFeatureFlags().figjam_ai_canvas_enhance_prompt,
        onGenerationCompleted: (e, t) => {
          l && l.length > 0 && WhiteboardCanvasAIBindings?.deleteGeneratedNodes(l);
          getFeatureFlags().figjam_ai_canvas_enhance_prompt && t && s({
            type: 'SET_PROMPT',
            prompt: t
          });
          s({
            type: 'SET_GENERATION_RESULT',
            generationResult: function (e, t, i, n, r) {
              let a = getFeatureFlags().figjam_ai_canvas_noodles ? WhiteboardCanvasAIBindings?.createStickiesFromStringsWithNoodles(e, t) : WhiteboardCanvasAIBindings?.createStickiesFromStrings(e, t);
              if (a?.generatedNodeIds) {
                for (let t of a?.generatedNodeIds) {
                  let r = n.get(t);
                  r && c6(r, {
                    userPrompt: i,
                    sourceNodeIds: e
                  });
                }
              }
              if (!getFeatureFlags().figjam_ai_canvas_noodles && a?.generatedNodeIds && a?.generatedNodeIds.length > 0 && n.get(a?.generatedNodeIds[0] ?? null)?.isSection) {
                let t = n.get(a?.generatedNodeIds[0] ?? null);
                t && (uE(t, e), r([...e, t.id]));
              }
              return {
                generationType: uu.STICKIES,
                generatedNodeIds: a?.generatedNodeIds ?? []
              };
            }(o, e, x, n, r)
          });
          d && s({
            type: 'SET_GENERATION_DONE_STATE',
            doneState: uc.HIDE_PROMPT_BOX
          });
        }
      });
    }, [a, i, t, addPromptToHistory, n, r, s]);
  }();
  let s = function () {
    let e = uv();
    let t = uS();
    let [{
      prompt: i
    }, n] = uh();
    let r = RL(JT.CANVAS_GENERATE_IMAGE, ud);
    let {
      receiveImage,
      imageFailed
    } = function () {
      let [{
        generationResult: e
      }, t] = uh();
      let i = uv();
      let n = useRef(e);
      useEffect(() => {
        n.current = e;
      }, [e]);
      let r = useCallback(() => {
        t({
          type: 'SET_GENERATION_RESULT',
          generationResult: e?.generationType === uu.IMAGE ? {
            ...e,
            imageResult: {
              state: 'FAILURE'
            }
          } : e
        });
      }, [t, e]);
      return {
        receiveImage: useCallback(async e => {
          let r = (await i()).nodeTextContents.join('\n');
          let a = await processImageWithThumbnail(base64ToUint8Array(e), 'image/png', r);
          t({
            type: 'SET_GENERATION_RESULT',
            generationResult: n.current?.generationType === uu.IMAGE ? {
              ...n.current,
              imageResult: {
                state: 'SUCCESS',
                image: a
              }
            } : n.current
          });
        }, [t, i]),
        imageFailed: r
      };
    }();
    let o = useCurrentUserOrg();
    let d = useMemo(() => {
      let e = _$$O2(JT.GENERATE_IMAGE, o);
      return e[0]?.value;
    }, [o]);
    let {
      addPromptToHistory
    } = setupPromptHistory(_$$i7, e => e);
    return useCallback(async ({
      sourceNodeIds: o,
      generatedNodeIdsToReplace: l
    }) => {
      let {
        nodeImageContents,
        nodeTextContents,
        selectedNodes,
        otherRelevantNodes,
        pastPrompts
      } = await e();
      clearSelection();
      i.trim() !== '' && addPromptToHistory(i);
      let g = _$$qq({
        create: !0,
        selectTargetNode: !1,
        size: {
          x: 480,
          y: 480
        }
      });
      uE(g, o);
      n({
        type: 'SET_GENERATION_RESULT',
        generationResult: {
          generationType: uu.IMAGE,
          generatedNodeIds: [g.id],
          imageResult: {
            state: 'PENDING'
          }
        }
      });
      let j = setupPlaybackHandler(g);
      t([...o, g.id]);
      l && l.length > 0 && WhiteboardCanvasAIBindings?.deleteGeneratedNodes(l);
      try {
        await r?.start({
          targetNode: g,
          dimensions: {
            width: g.size.x,
            height: g.size.y
          },
          images: [],
          prompt: i.trim(),
          imageContents: nodeImageContents,
          textContents: nodeTextContents,
          selectedNodes,
          otherRelevantNodes,
          pastPrompts,
          onImageSuccess: receiveImage,
          onImageFailed: imageFailed,
          action: JT.GENERATE_IMAGE,
          modelType: d,
          shouldEnhancePrompt: !i.length && getFeatureFlags().figjam_ai_canvas_enhance_prompt,
          setEnhancedPrompt: e => {
            getFeatureFlags().figjam_ai_canvas_enhance_prompt && e && n({
              type: 'SET_PROMPT',
              prompt: e
            });
          }
        });
      } catch (e) {
        _$$zD({
          node: g
        });
        return e;
      } finally {
        j();
      }
    }, [e, i, t, addPromptToHistory, r, receiveImage, imageFailed, d, n]);
  }();
  let d = useMemo(() => ({
    stickies: {
      action: JT.CREATE_IDEAS,
      runningText: getI18nString('figjam_ai.canvas.create_ideas.in_progress'),
      featureName: 'create_ideas'
    },
    image: {
      action: JT.CANVAS_GENERATE_IMAGE,
      runningText: getI18nString('image_ai.make_image.processing'),
      featureName: 'generate_image'
    }
  }), []);
  let h = d[e];
  let [{
    longRunningAction: m,
    prompt: f,
    generationResult: _,
    generationDoneState: x
  }, g] = uh();
  let b = uI();
  let y = useCallback(e => {
    g({
      type: 'SET_PROMPT',
      prompt: e
    });
  }, [g]);
  let v = useMemo(() => e === 'stickies' ? [{
    label: getI18nString('figjam_ai.canvas.prompt_box.more_ideas'),
    prompt: getI18nString('figjam_ai.canvas.prompt_box.give_more_ideas')
  }, {
    label: getI18nString('figjam_ai.canvas.prompt_box.copy_inspirations'),
    prompt: getI18nString('figjam_ai.canvas.prompt_box.create_copy_inspirations')
  }, {
    label: getI18nString('figjam_ai.canvas.prompt_box.user_stories'),
    prompt: getI18nString('figjam_ai.canvas.prompt_box.write_user_stories')
  }] : [{
    label: getI18nString('figjam_ai.canvas.prompt_box.mockup'),
    prompt: getI18nString('figjam_ai.canvas.prompt_box.mockup_prompt')
  }, {
    label: getI18nString('figjam_ai.canvas.prompt_box.storyboard'),
    prompt: getI18nString('figjam_ai.canvas.prompt_box.draw_storyboard')
  }, {
    label: getI18nString('figjam_ai.canvas.prompt_box.concept_image'),
    prompt: getI18nString('figjam_ai.canvas.prompt_box.make_concept_image')
  }], [e]);
  let C = useMemo(() => e === 'stickies' ? [{
    content: getI18nString('figjam_ai.canvas.create_ideas.five_more_wild_ideas')
  }] : [{
    content: getI18nString('figjam_ai.canvas.prompt_box.make_image')
  }], [e]);
  let T = _$$U2(C);
  let E = useCallback(async () => {
    let t = Object.keys(n);
    uL(t);
    e === 'stickies' ? await a({
      targetSourceNodeIds: t
    }) : await s({
      sourceNodeIds: t
    });
  }, [n, e, a, s]);
  let S = useCallback(async () => {
    if (!_) return;
    let t = Object.keys(n);
    if (uL(t), e === 'stickies') {
      if (_.generationType !== uu.STICKIES) return;
      await a({
        targetSourceNodeIds: t,
        generatedNodeIdsToReplace: _.generatedNodeIds,
        shouldUpdateDoneState: !0
      });
    } else {
      if (_.generationType !== uu.IMAGE) return;
      let e = _?.generatedNodeIds ?? [];
      await s({
        sourceNodeIds: t,
        generatedNodeIdsToReplace: e
      });
    }
  }, [_, n, e, a, s]);
  let w = uS();
  let I = useCallback(() => {
    replaceSelection(b);
    x === uc.HIDE_PROMPT_BOX ? (_ && (replaceSelection(b), w(b)), g({
      type: 'SET_GENERATION_DONE_STATE',
      doneState: uc.SHOW_PROMPT_BOX
    })) : (g({
      type: 'SET_GENERATION_DONE_STATE',
      doneState: uc.HIDE_PROMPT_BOX
    }), S());
  }, [b, x, _, g, w, S]);
  let L = useCallback(() => {}, []);
  let N = qy.INITIAL;
  m && (L = m.stop, N = m.state);
  let O = useCallback(() => {
    L();
    replaceSelection(b);
    uL([]);
  }, [b, L]);
  useEffect(() => {
    N === qy.INITIAL && g({
      type: 'SET_GENERATION_DONE_STATE',
      doneState: uc.HIDE_PROMPT_BOX
    });
  }, [N, g]);
  let k = useCallback(e => {
    L();
    B3(JT.CREATE_IDEAS);
    B3(JT.CANVAS_GENERATE_IMAGE);
    t(e);
    g({
      type: 'SET_CURRENT_ACTION',
      action: d[e].action
    });
  }, [g, t, L, d]);
  if (useEffect(() => {
    (N === qy.INITIAL || N === qy.CANCELLED) && (B3(JT.CREATE_IDEAS), B3(JT.CANVAS_GENERATE_IMAGE), g({
      type: 'SET_CURRENT_ACTION',
      action: h.action
    }));
  }, [N, g, h.action]), useEffect(() => {
    N === qy.CANCELLED && (e === 'image' && _?.generationType === uu.IMAGE && _.generatedNodeIds.length > 0 && WhiteboardCanvasAIBindings?.deleteGeneratedNodes(_.generatedNodeIds), B3(h.action));
  }, [N, e, h.action, _?.generatedNodeIds, _?.generationType]), !m) {
    return null;
  }
  let R = m.aiTrackingContext;
  switch (N) {
    case qy.INITIAL:
      return jsx(uD, {
        action: h.action,
        aiTrackingContext: R,
        featureNameForInstrumentation: h.featureName,
        header: jsx(uF, {
          selectedTab: e,
          onTabChange: k
        }),
        minLength: 0,
        onChange: y,
        onRun: E,
        promptHistory,
        recordingKey: 'canvas-unified-ai-action-view-initial',
        suggestion: T,
        suggestionPills: v,
        value: f
      });
    case qy.RUNNING:
      return jsx(_$$F4, {
        onCancel: O,
        aiTrackingContext: R,
        children: h.runningText
      });
    case qy.DONE:
      return jsx(cW, {
        action: h.action,
        aiTrackingContext: {
          ...R,
          iteration_view_type: AIActionIterationResult.SUCCESS_WITH_ITERATION
        },
        completionString: getI18nString('ai.done'),
        featureNameForInstrumentation: h.featureName,
        hideFeedbackButtons: x === uc.SHOW_PROMPT_BOX,
        iterateOptions: [],
        minLength: 0,
        onChange: y,
        onDismiss: r,
        onRun: I,
        prompt: f,
        promptHistory,
        showPrompt: x === uc.SHOW_PROMPT_BOX,
        submitLabel: x === uc.HIDE_PROMPT_BOX ? getI18nString('figjam_ai.canvas.create_ideas.add_more_context') : getI18nString('figjam_ai.canvas.create_ideas.start'),
        suggestion: ''
      });
    case qy.ERROR:
      return jsx(_$$E7, {
        error: m.error,
        aiTrackingContext: R,
        onDismiss: r
      });
    case qy.CANCELLED:
      return null;
    default:
      throwTypeError(N);
  }
}
let uV = {
  tab: e => [{
    'paddingLeft': 'xj9uezu',
    'paddingRight': 'xy13l1i',
    'paddingInlineStart': null,
    'paddingInlineEnd': null,
    'borderRadius': 'x1sxf85j',
    'borderStartStartRadius': null,
    'borderStartEndRadius': null,
    'borderEndStartRadius': null,
    'borderEndEndRadius': null,
    'borderTopLeftRadius': null,
    'borderTopRightRadius': null,
    'borderBottomLeftRadius': null,
    'borderBottomRightRadius': null,
    'display': 'x78zum5',
    'flexDirection': 'x1q0g3np',
    'alignItems': 'x6s0dn4',
    'justifyContent': 'xl56j7k',
    'color': (e ? Tj.textFigjam : Tj.textSecondary) == null ? null : 'xfx01vb',
    'backgroundColor': (e ? Tj.bgFigjamTertiary : null) == null ? null : 'xr5ldyu',
    '--color-icon': (e ? Tj.iconFigjam : Tj.iconSecondary) == null ? null : 'xhxir3b',
    ...textDisplayConfig.textBodyMedium,
    '$$css': !0
  }, {
    '--color': (e ? Tj.textFigjam : Tj.textSecondary) != null ? e ? Tj.textFigjam : Tj.textSecondary : void 0,
    '--backgroundColor': (e ? Tj.bgFigjamTertiary : null) != null ? e ? Tj.bgFigjamTertiary : null : void 0,
    '----color-icon': (e ? Tj.iconFigjam : Tj.iconSecondary) != null ? e ? Tj.iconFigjam : Tj.iconSecondary : void 0
  }]
};
function uG({
  isHovered: e
}) {
  return jsx('svg', {
    style: {
      fill: e ? 'var(--color-icon-onbrand)' : 'var(--color-icon-figjam)',
      zIndex: 1
    },
    width: '14',
    height: '14',
    viewBox: '0 0 14 14',
    children: jsx('path', {
      d: 'M5.83447 1.30095C6.23643 0.239814 7.76365 0.239726 8.16552 1.30095L8.20165 1.41131L9.17822 4.82341L12.5972 5.79802L12.7065 5.83416C13.7701 6.23512 13.7701 7.76526 12.7065 8.16619L12.5972 8.20232L9.17822 9.17595L8.20165 12.589C7.86658 13.7593 6.24939 13.7958 5.83447 12.6984L5.79833 12.589L4.8208 9.17595L1.40283 8.20232C0.193214 7.85738 0.193183 6.14293 1.40283 5.79802L4.8208 4.82341L5.79833 1.41131L5.83447 1.30095ZM1.67626 7.24041L5.4956 8.32927L1.67724 7.24041C1.67568 7.23996 1.6739 7.23892 1.67236 7.23845C1.67373 7.23887 1.67488 7.24001 1.67626 7.24041ZM1.8247 6.71697L1.67626 6.75994C1.67497 6.76031 1.67364 6.76053 1.67236 6.76091C1.67381 6.76047 1.67577 6.76036 1.67724 6.75994L5.4956 5.67107L1.8247 6.71697ZM12.3227 6.75994L12.1733 6.71697L8.50341 5.67107L12.3227 6.75994Z'
    })
  });
}
function uK() {
  return jsx('svg', {
    width: '360',
    height: '159',
    viewBox: '0 0 360 159',
    fill: 'none',
    children: jsxs('g', {
      opacity: '0.7',
      children: [jsx('path', {
        d: 'M0 13C0 5.8203 5.8203 0 13 0L347 0C354.18 0 360 5.8203 360 13V146C360 153.18 354.18 159 347 159L13 159C5.8203 159 0 153.18 0 146L0 13Z',
        fill: 'white'
      }), jsx('path', {
        d: 'M17 11.5L343 11.5C345.485 11.5 347.5 13.5147 347.5 16V106C347.5 108.485 345.485 110.5 343 110.5L17 110.5C14.5147 110.5 12.5 108.485 12.5 106L12.5 16C12.5 13.5147 14.5147 11.5 17 11.5Z',
        fill: '#F5F5F5',
        stroke: '#E6E6E6'
      }), jsx('path', {
        d: 'M12 128C12 125.239 14.2386 123 17 123H31C33.7614 123 36 125.239 36 128V142C36 144.761 33.7614 147 31 147H17C14.2386 147 12 144.761 12 142L12 128Z',
        fill: '#E6E6E6'
      }), jsx('path', {
        d: 'M48 128C48 125.239 50.2386 123 53 123L104 123C106.761 123 109 125.239 109 128V142C109 144.761 106.761 147 104 147H53C50.2386 147 48 144.761 48 142V128Z',
        fill: '#E6E6E6'
      }), jsx('path', {
        d: 'M31 26C31 24.8954 31.8954 24 33 24L120 24C121.105 24 122 24.8954 122 26V34C122 35.1046 121.105 36 120 36L33 36C31.8954 36 31 35.1046 31 34V26Z',
        fill: '#D9D9D9'
      }), jsx('rect', {
        x: '320',
        y: '119',
        width: '28',
        height: '28',
        rx: '14',
        fill: '#8638E5'
      }), jsx('g', {
        style: {
          mixBlendMode: 'multiply'
        },
        children: jsx('rect', {
          x: '25',
          y: '21',
          width: '2',
          height: '18',
          rx: '1',
          fill: '#8638E5'
        })
      })]
    })
  });
}
function uW({
  isHovered: e,
  setIsHovered: t
}) {
  let [{
    currentAction: i
  }, n] = uh();
  let r = useCallback(() => {
    i && B3(i);
    B3(JT.CREATE_IDEAS);
    n({
      type: 'SET_CURRENT_ACTION',
      action: JT.CREATE_IDEAS
    });
  }, [i, n]);
  return jsxs('div', {
    className: 'x1vqgdyp x100vrsf x78zum5 xl56j7k x6s0dn4 x1n2onr6',
    children: [jsx('button', {
      'className': 'x1vqgdyp x100vrsf x78zum5 xl56j7k x6s0dn4 x10l6tqk x13vifvy xu96u03 x71s49j',
      'onMouseOver': () => {
        t(!0);
      },
      'onMouseLeave': () => {
        t(!1);
      },
      'onClick': r,
      'style': {
        cursor: 'pointer',
        background: 'transparent',
        border: 'none',
        padding: 0
      },
      'aria-label': getI18nString('figjam_ai.canvas.overlay_label'),
      'data-fullscreen-intercept': !0,
      'children': jsx('div', {
        ...stylex.props(uq.buttonBackgroundCircle(e))
      })
    }), jsx(uG, {
      isHovered: e
    })]
  });
}
function uz() {
  let [{
    currentAction: e
  }] = uh();
  return jsxs(Fragment, {
    children: [e && jsx(um, {
      currentAction: e
    }), jsx(uY, {}), jsx(uX, {})]
  });
}
function uZ({
  isHovered: e,
  setIsEntrypointHovered: t
}) {
  return jsx('div', {
    className: 'x1n2onr6 xg7h5cd',
    children: jsx(uW, {
      isHovered: e,
      setIsHovered: t
    })
  });
}
function u$() {
  let [e, t] = useState(!1);
  return jsxs('div', {
    className: 'x1n2onr6 x78zum5 xg7h5cd x5ttheu x1jc569q',
    children: [jsx(uZ, {
      isHovered: e,
      setIsEntrypointHovered: t
    }), e && jsx('div', {
      className: 'x1iog12x',
      children: jsx(uK, {})
    })]
  });
}
function uY() {
  let e = function () {
    let e = useSelector(({
      mirror: {
        appModel: e
      }
    }) => e.showUi);
    let t = useSceneGraphSelection();
    let i = useDeepEqualSceneValue((e, t) => {
      let i = Object.keys(t);
      let n = i.length > 0;
      let r = i.map(e => WhiteboardCanvasAIBindings?.getCanvasAiElibilityForNode(e) ?? EligibilityStatus.Ineligible);
      return n && r.includes(EligibilityStatus.Eligible) && !r.includes(EligibilityStatus.Ineligible);
    }, t);
    let n = uC();
    let r = function (e) {
      let t = uI();
      return useDeepEqualSceneValue((e, t, i) => {
        let n = Object.keys(t);
        return n.length > 0 && i.length > 0 && i.some(e => n.includes(e));
      }, e, t);
    }(t);
    let a = useSelector(({
      mirror: {
        appModel: e
      }
    }) => [UserActionState.DEFAULT, UserActionState.SELECTING_TEXT, UserActionState.CLICKING_TO_CHANGE_SELECTION].includes(e.activeUserAction));
    let s = useSelector(({
      mirror: {
        appModel: e
      }
    }) => e.activeCanvasEditModeType);
    let o = useDeepEqualSceneValue((e, t, i) => {
      let n = Object.keys(t);
      return i === LayoutTabType.TEXT && n.some(t => e.get(t)?.isStickyText);
    }, t, s);
    return (!n || !r) && e && (i || o) && a;
  }();
  let t = getViewportInfo({
    subscribeToUpdates_expensive: e
  });
  let i = noop(e);
  return !e || t.zoomScale < 0.35 ? null : jsx(_$$lM, {
    targetRect: i,
    positionXY: uw,
    children: jsx(_$$m6, {
      'role': 'region',
      'aria-label': getI18nString('figjam_ai.canvas.overlay_label'),
      'children': jsx(u$, {})
    })
  });
}
function uX() {
  !function () {
    let [{
      generationResult: e
    }] = uh();
    useEffect(() => {
      if (e?.generationType !== uu.IMAGE) return;
      let t = e.generatedNodeIds;
      let i = t.length === 1 ? getSingletonSceneGraph().get(t[0] || null) : null;
      i && e.imageResult.state === 'SUCCESS' && Xo({
        node: i,
        image: e.imageResult.image,
        action: JT.GENERATE_IMAGE
      });
    }, [e]);
  }();
  let e = Object.keys(useSceneGraphSelection());
  let t = function () {
    let e = useSelector(({
      mirror: {
        appModel: e
      }
    }) => e.showUi);
    let t = uC();
    return e && t;
  }();
  let i = useCurrentTool();
  let n = function (e, t) {
    let i = getViewportInfo({
      subscribeToUpdates_expensive: e
    });
    let n = useDeepEqualSceneValue((e, t) => uT(t ?? [], e), t);
    return useMemo(() => scaleRect(i, n), [i, n]);
  }(t, e);
  let [{
    currentAction: r,
    longRunningAction: a,
    generationDoneState: s
  }] = uh();
  let u = a?.state ?? qy.INITIAL;
  return (useEffect(() => {
    let e = u === qy.INITIAL || u === qy.DONE && s === uc.SHOW_PROMPT_BOX;
    r !== null && e ? AppStateTsApi?.figjamState().isInCanvasAiMode.set(!0) : AppStateTsApi?.figjamState().isInCanvasAiMode.set(!1);
  }, [r, u, s]), useEffect(() => {
    AppStateTsApi?.figjamState().isInCanvasAiMode.set(!1);
  }, [i]), t && n && r) ? u === qy.RUNNING || u === qy.DONE || u === qy.ERROR ? jsx(_$$p4, {
    children: jsx(_$$s6, {
      name: 'figjamAICanvas',
      recordingKey: 'figjamAICanvas',
      forwardUnhandledEventsToFullscreen: !0,
      children: jsx(uB, {})
    })
  }) : jsx(_$$lM, {
    targetRect: n,
    positionXY: uw,
    children: jsx(_$$m6, {
      'role': 'region',
      'aria-label': getI18nString('figjam_ai.canvas.overlay_label'),
      'children': jsx(_$$s6, {
        name: 'figjamAICanvas',
        recordingKey: 'figjamAICanvas',
        forwardUnhandledEventsToFullscreen: !0,
        children: jsx('div', {
          ...stylex.props(uq.promptView, u === qy.INITIAL && uq.withMarginLeft),
          children: jsx(uB, {})
        })
      })
    })
  }) : jsx(Fragment, {});
}
let uq = {
  buttonBackgroundCircle: e => [{
    pointerEvents: 'x67bb7w',
    height: 'xxk0z11',
    width: 'xvy4d1p',
    borderRadius: 'x16rqkct',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    outline: 'x1sdedzc',
    outlineColor: null,
    outlineStyle: null,
    outlineWidth: null,
    outlineOffset: 'x1g40iwv',
    backgroundColor: 'xr5ldyu',
    display: 'x1hq8ynl',
    justifyContent: 'xl56j7k',
    alignItems: 'x6s0dn4',
    animationName: 'x1dq9r3j',
    animationDuration: 'x5hsz1j',
    animationTimingFunction: 'xvvy8qz',
    $$css: !0
  }, {
    '--backgroundColor': e ? 'var(--color-icon-figjam)' : 'var(--color-icon-onbrand)'
  }],
  promptView: {
    pointerEvents: 'x67bb7w',
    width: 'x3p9ev8',
    background: 'x1qfvsp',
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
    borderRadius: 'x137qmg1',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    boxShadow: 'xbxdop8',
    $$css: !0
  },
  withMarginLeft: {
    marginLeft: 'x1czzo2b',
    marginInlineStart: null,
    marginInlineEnd: null,
    $$css: !0
  }
};
function u6(e) {
  let [t, i] = useSelectionProperty('accessibleLabel');
  let [n, r] = useState(t);
  let {
    setIsEditorOpen
  } = e;
  let s = useId();
  let c = useDispatch<AppDispatch>();
  let p = useSelector(e => e.userFlags.seen_alt_text_explanation);
  let h = useCallback(() => {
    !p && n && c(postUserFlag({
      seen_alt_text_explanation: !0
    }));
  }, [p, n, c]);
  let m = useCallback(e => {
    r(e.target.value);
    i(e.target.value);
  }, [r, i]);
  let f = useCallback(e => {
    r(e);
    i(e);
  }, [r, i]);
  let _ = useCallback(e => {
    e.key === 'Enter' && (setIsEditorOpen(!1), h());
  }, [setIsEditorOpen, h]);
  let x = p ? 'image_description_editor--popup--l-kiW _overlayBase--_overlayBase--Rkj8l' : 'image_description_editor--popupWithExplanation--0XudB image_description_editor--popup--l-kiW _overlayBase--_overlayBase--Rkj8l';
  let g = n && !isInvalidValue(n) ? n : '';
  let j = getI18nString('whiteboard.inline_menu.image_description_placeholder');
  return jsxs(Fragment, {
    children: [!p && jsx('div', {
      className: 'image_description_editor--explanation--JK2UL',
      children: renderI18nText('whiteboard.inline_menu.image_description_explanation')
    }), jsx('div', {
      className: `${x} ${Dm}`,
      children: getFeatureFlags().figjam_a11y_inline_toolbar ? jsx('div', {
        className: 'xt7dq6l xs1vzh6 xfifm61',
        children: jsx(setupThemeContext, {
          mode: 'dark',
          children: jsx(InputComponent, {
            id: s,
            value: g,
            onChange: f,
            onKeyDown: _,
            onClick: h,
            placeholder: j,
            autoFocus: !0,
            size: 'lg'
          })
        })
      }) : jsx('input', {
        className: 'image_description_editor--input--GzlDz input--darkInput--zfbnG',
        value: g,
        onChange: m,
        onKeyDown: _,
        onClick: h,
        placeholder: j,
        autoComplete: 'off',
        autoCapitalize: 'off',
        autoFocus: !0
      })
    })]
  });
}
let pu = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M3.253 18.433H2L6.762 5.342H8.04l4.763 13.09H11.55L7.446 6.896h-.09zm.901-5.018h6.494v1.074H4.154zm13.398 5.241a3.8 3.8 0 0 1-1.624-.345 2.84 2.84 0 0 1-1.17-1.01q-.434-.665-.434-1.61 0-.729.275-1.228.274-.498.78-.818a4.3 4.3 0 0 1 1.195-.505 11 11 0 0 1 1.521-.288q.825-.102 1.394-.178.575-.078.875-.243.3-.166.3-.537v-.23q0-1.004-.6-1.58-.594-.58-1.713-.581-1.061 0-1.732.467-.666.465-.934 1.1l-1.08-.39q.332-.806.92-1.286.59-.486 1.317-.696a5.1 5.1 0 0 1 1.477-.218q.563 0 1.17.147.613.147 1.137.512.525.358.85 1.003.327.64.327 1.624v6.667h-1.138v-1.554h-.07a3.15 3.15 0 0 1-1.617 1.515q-.608.262-1.426.262m.153-1.041q.908 0 1.573-.403a2.76 2.76 0 0 0 1.022-1.068q.365-.671.365-1.476v-1.42q-.128.123-.428.218a6 6 0 0 1-.684.173 16 16 0 0 1-.768.121l-.69.09a6.4 6.4 0 0 0-1.419.32q-.588.216-.901.6-.313.377-.313.972 0 .894.639 1.387.639.486 1.604.485'
    })
  });
});
let pp = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M6.696 5.28h1.449l4.433 12.328 1.148.159v.76h-4.31v-.76l1.555-.16-.936-2.808H4.524l-.936 2.791 1.572.177v.76H1.186v-.76l1.13-.16zM7.721 8l-.495-1.68-.476 1.732-1.925 5.829h4.893zm6.669 7.947q0-1.713 1.695-2.472 1.695-.777 4.221-.83v-.548q0-.9-.194-1.413-.177-.53-.636-.76-.459-.246-1.29-.247-.9 0-1.642.283a9.6 9.6 0 0 0-1.413.653l-.389-.777q.194-.177.813-.494a9 9 0 0 1 1.413-.566 5.2 5.2 0 0 1 1.537-.247q1.2 0 1.89.336.706.336 1.006 1.077.318.742.318 1.996v5.829h1.095v.653q-.971.265-1.642.265-.424 0-.583-.141-.16-.125-.16-.6v-.654a8.6 8.6 0 0 1-1.394 1.007q-.742.423-1.696.424-1.271 0-2.12-.707-.83-.707-.83-2.067m3.479 1.731q.495 0 1.183-.318.69-.318 1.254-.759v-3.126q-2.137.017-3.25.636-1.095.618-1.095 1.66 0 1.007.512 1.466.513.441 1.396.441'
    })
  });
});
let ph = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'm9.285 14.922 1.17 3.68h1.087L7.282 5.405h-.979L2.016 18.602h1.088l1.17-3.68zm-4.704-.97 2.212-6.915 2.193 6.915zm17.403-.571v-2.755a8.6 8.6 0 0 0-.345-2.402q-.326-1.142-1.024-1.876a3.4 3.4 0 0 0-1.196-.834q-.708-.3-1.586-.3-1.07 0-1.85.427-.77.417-1.277 1.15a5.2 5.2 0 0 0-.77 1.732 8.5 8.5 0 0 0-.255 2.103v2.755q0 1.278.327 2.402.335 1.125 1.07 1.885.498.544 1.196.834.697.282 1.577.281 1.078 0 1.858-.426.78-.435 1.278-1.169t.743-1.713q.255-.979.254-2.094m-7.115.789a9.5 9.5 0 0 1-.11-1.414v-2.311q0-.898.182-1.732.19-.833.59-1.386.39-.562.933-.87.553-.309 1.369-.309.634 0 1.124.2.49.19.842.553.355.361.58.87.236.498.354 1.115zm6.036-.617a8 8 0 0 1-.19 1.713 3.7 3.7 0 0 1-.59 1.396 2.6 2.6 0 0 1-.915.87q-.561.327-1.36.327-.616 0-1.096-.182a2.6 2.6 0 0 1-.825-.525 3 3 0 0 1-.607-.834 5 5 0 0 1-.363-1.097l5.855-5.275q.046.345.064.761t.027.707z'
    })
  });
});
let pm = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M1.991 19.691q-.395-.22-.44-.484-.022-.264.308-.924t1.034-2.046q.528-.99.792-1.54.286-.572.374-.814.11-.242.11-.308-.044-.198.044-.308a.65.65 0 0 1 .286-.22 7 7 0 0 0 .352-.396q.264-.285.484-.682.198-.462.462-.946.263-.484.704-1.21l1.144-1.936q.44-.77.968-1.562.528-.814 1.122-1.606.243-.308.44-.484.198-.197.396-.176.264 0 .594.176.353.176.638.462t.418.616q.11.176.088.748-.021.572-.088 1.386a126 126 0 0 1-.154 1.738q-.066.902-.198 2.134t-.264 2.574q-.11 1.342-.176 2.596-.066 1.232 0 2.156a1.6 1.6 0 0 1 0 .374 2 2 0 0 0-.022.286q-.132.132-.44.11-.285 0-.572-.132-.264-.132-.308-.33a.33.33 0 0 1-.088-.176q0-.132.022-.528.023-.396.044-1.254l.11-3.564-.286.022q-.198 0-.748.044-.549.044-1.188.132-.637.066-1.188.154-.528.066-.726.132-.198 0-.484.264a3.3 3.3 0 0 0-.506.682 2.3 2.3 0 0 1-.33.66q-.22.33-.22.44-.153.11-.264.264l-.088.154q0 .132-.22.66-.197.506-.506 1.144-.307.616-.616 1.078l-.462.704zm4.554-7.084.22-.044q.243-.045.55-.088.33-.066.594-.066a20 20 0 0 1 1.342-.286q.419-.088.572-.088a.7.7 0 0 1 .308.066q.088.11.154.132l.088.022q.023-.044.066-.506l.11-1.144q.088-.682.154-1.408.088-.748.132-1.364l.066-.968q.023-.418.044-.748l.022-.352q-.132 0-.572.484-.417.484-.946 1.276a17 17 0 0 0-.99 1.694q-.22.418-.418.748t-.308.33q-.044.044-.264.396-.197.33-.44.77a8 8 0 0 0-.396.77q-.154.33-.088.374m7.325 5.566a.66.66 0 0 0-.22-.264q-.132-.11-.132-.198a.7.7 0 0 0-.022-.176q0-.11-.088-.198-.11-.132.022-.594.132-.484.44-1.166.309-.704.726-1.474.176-.176.352-.462.175-.285.264-.374 0-.088.066-.154.066-.088.154-.088v-.132q0-.11.198-.374.22-.264.528-.572.308-.33.638-.616.33-.308.55-.44.462-.308.946-.374.506-.066.858.22l.22.22.352.352q.22.176.44.374l.814.726-.396 1.1q-.286.88-.154 1.54.155.66.44 1.144.11.242.44.462.352.22.66.264a.7.7 0 0 1 .33.132q.154.11.154.352 0 .22-.088.352-.087.132-.308.176a1.93 1.93 0 0 1-1.364-.352q-.616-.44-1.144-1.452a3.6 3.6 0 0 1-.242-.484q-.133-.374-.154-.484l-.33.418q-.242.285-.374.418-1.562 1.584-2.706 2.134-1.122.528-1.87.044m.792-1.232q0 .155.462 0 .484-.176 1.034-.616.748-.638 1.496-1.408.77-.77 1.232-1.43l.484-.792q-.22-.506-.484-.682-.241-.198-.418-.198-.286 0-.858.528-.549.528-1.188 1.408a17.5 17.5 0 0 0-1.21 1.936q-.219.44-.396.858z'
    })
  });
});
let pv = 'font_family_control--dotOption--dSxZU';
class pA extends _$$c$3 {}
var pO = (e => (e.SANS_SERIF = 'sansSerif', e.SERIF = 'serif', e.MONOSPACE = 'monospace', e.SCRIPT = 'script', e))(pO || {});
let pk = jsx(pu, {});
let pR = {
  sansSerif: {
    getLabel: () => getI18nString('whiteboard.fonts.simple'),
    fontFamily: 'Inter',
    icon: _$$A20,
    fplIcon: jsx(pu, {})
  },
  serif: {
    getLabel: () => getI18nString('whiteboard.fonts.bookish'),
    fontFamily: 'Merriweather',
    icon: _$$A25,
    fplIcon: jsx(pp, {})
  },
  monospace: {
    getLabel: () => getI18nString('whiteboard.fonts.technical'),
    fontFamily: 'Roboto Mono',
    icon: _$$A21,
    fplIcon: jsx(ph, {})
  },
  script: {
    getLabel: () => getI18nString('whiteboard.fonts.cute'),
    fontFamily: 'Figma Hand',
    icon: _$$A23,
    fplIcon: jsx(pm, {})
  }
};
function pM() {
  return new Set(Object.values(pR).map(e => e.fontFamily));
}
let pD = e => Object.values(pR).find(t => e === t.fontFamily);
let pP = e => e.filter(e => !pM().has(e)).sort((e, t) => e < t ? -1 : 1).slice(0, 5);
let pU = e => {
  if (e.length !== 1 || void 0 === e[0]) return;
  let t = pD(e[0]);
  return t?.getLabel();
};
let pF = e => {
  if (e.length !== 1 || void 0 === e[0]) return _$$A20;
  let t = pD(e[0]);
  return t?.icon || _$$A20;
};
let pH = e => {
  if (e.length !== 1 || void 0 === e[0]) return pk;
  let t = pD(e[0]);
  return t?.fplIcon || pk;
};
let pB = (e, t) => {
  if (t) {
    if (e === pR.monospace.fontFamily) return _$$A22;
    if (e === pR.script.fontFamily) return _$$A24;
    if (e === pR.serif.fontFamily) return _$$A26;
  }
};
function pV({
  reportWidth: e,
  value: t,
  optionProps: i
}) {
  let n = useRef(null);
  useLayoutEffect(() => {
    let i = n.current;
    i && e(t, i.getBoundingClientRect().width);
    return () => e(t, void 0);
  }, [n, t, e, i.svg]);
  return jsx('div', {
    'className': 'font_family_control--offscreenMeasurementContainer--owMGS',
    'aria-hidden': !0,
    'children': jsx(pA, {
      ...i,
      additionalStylesClassName: ex()(i.additionalStylesClassName, 'font_family_control--optionForMeasurement--HH-4F'),
      forwardedRef: n
    })
  });
}
function p0({
  onChange: e,
  options: t,
  tooltip: i,
  ariaLabel: n,
  buttonContent: r,
  disabled: a = !1,
  recordingKey: s,
  dataTestId: d,
  trackingProperties: c,
  menuAriaLabel: u
}) {
  let [p, h] = useState(!1);
  let {
    getTriggerProps,
    getContainerProps
  } = usePopoverPrimitive({
    isOpen: p,
    onOpenChange: h,
    type: 'menu',
    placement: 'top'
  });
  let _ = useCallback(t => {
    e(t);
    h(!1);
  }, [e, h]);
  return jsxs(Fragment, {
    children: [jsx(_$$V4, {
      variant: 'menu',
      tooltip: i,
      ariaLabel: n,
      disabled: a,
      recordingKey: s,
      dataTestId: d,
      trackingProperties: c,
      getPopoverTriggerProps: getTriggerProps,
      children: r
    }), jsx(PopoverPrimitiveContainer, {
      className: 'xon4yw5 x1u3p76b x19y5rnk x78zum5 x1q0g3np xeq5yr9 x6s0dn4 xb3r6kr',
      ...getContainerProps({}),
      children: jsx(_$$N3, {
        'orientation': 'horizontal',
        'aria-label': u || i,
        'className': 'xon4yw5 x1u3p76b x19y5rnk x78zum5 x1q0g3np xeq5yr9 x6s0dn4 xb3r6kr',
        'children': jsx(_$$bL4, {
          onChange: _,
          legend: jsx(Legend, {
            children: u || i
          }),
          readonly: a,
          recordingKey: generateRecordingKey(s, 'radioOptions'),
          children: jsx('div', {
            className: 'inline_toolbar_menu--optionContainer--jjLSi',
            children: t.map(e => jsx(_$$c$4, {
              'value': e.value,
              'aria-label': e.label,
              'readonly': e.disabled || a || void 0,
              ...props(p1.option, e.isSelected && p1.optionSelected, (e.disabled || a) && p1.optionDisabled),
              'htmlAttributes': {
                'data-tooltip': e.disabled ? void 0 : e.label,
                'data-tooltip-show-above': 'true',
                'data-tooltip-type': KindEnum.TEXT,
                'data-tooltip-shortcut-key': e.shortcutKey
              },
              'children': jsx('div', {
                'className': 'x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp',
                'aria-hidden': !0,
                'children': e.content
              })
            }, e.value))
          })
        })
      })
    })]
  });
}
let p1 = {
  option: {
    'display': 'x78zum5',
    'alignItems': 'x6s0dn4',
    'justifyContent': 'xl56j7k',
    'width': 'x100vrsf',
    'height': 'x1vqgdyp',
    'cursor': 'x1ypdohk',
    'border': 'x1gs6z28',
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
    'backgroundColor': 'xjbqb8w',
    'fill': 'x11h9p1v',
    '--color-icon': 'x30jfuo',
    '--color-icon-tertiary': 'x1hk3a5i',
    'color': 'xkrz9af',
    'position': 'x1n2onr6',
    'boxSizing': 'x1afcbsf',
    ':hover_backgroundColor': 'x1793mbz',
    ':hover_fill': 'x1qnvb1m',
    ':hover_color': 'x14vgbwh',
    ':has(:focus-visible)_outline': 'x104mfq1',
    ':has(:focus-visible)_outlineColor': null,
    ':has(:focus-visible)_outlineStyle': null,
    ':has(:focus-visible)_outlineWidth': null,
    ':has(:focus-visible)_outlineOffset': 'x1h3at1i',
    '$$css': !0
  },
  optionSelected: {
    'backgroundColor': 'x3vy5ar',
    'fill': 'x1izjc7m',
    '--color-icon': 'x7vbk4z',
    'color': 'x1g8r3bf',
    ':hover_backgroundColor': 'x1uy4bra',
    ':hover_fill': 'xbbycpj',
    ':hover_color': 'x1j6599z',
    '$$css': !0
  },
  optionDisabled: {
    'fill': 'xcvvleq',
    'color': 'xyqngj2',
    'cursor': 'xt0e3qv',
    ':hover_backgroundColor': 'x1n5bzlp',
    ':hover_fill': 'xmof37z',
    ':hover_color': 'xf1th98',
    '$$css': !0
  }
};
function p8(e) {
  let t = p7(e);
  t && fullscreenValue.triggerAction(t);
}
function p7(e) {
  switch (e) {
    case 'LEFT':
      return 'text-align-left';
    case 'CENTER':
      return 'text-align-center';
    case 'RIGHT':
      return 'text-align-right';
  }
  return '';
}
function he(e) {
  switch (e) {
    case 'LEFT':
      break;
    case 'CENTER':
      return _$$A30;
    case 'RIGHT':
      return _$$A32;
  }
  return _$$A31;
}
function ht(e) {
  let t = hi(e);
  t && fullscreenValue.triggerAction(t);
}
function hi(e) {
  switch (e) {
    case 'TOP':
      return 'text-align-top';
    case 'CENTER':
      return 'text-align-middle';
    case 'BOTTOM':
      return 'text-align-bottom';
  }
  return '';
}
function hn(e) {
  switch (e) {
    case 'TOP':
      return _$$A28;
    case 'CENTER':
      break;
    case 'BOTTOM':
      return _$$A27;
  }
  return _$$A29;
}
let hd = _$$l9;
let hc = _$$c$3;
var hu = (e => (e[e.HUGE = 96] = 'HUGE', e[e.EXTRA_LARGE = 64] = 'EXTRA_LARGE', e[e.LARGE = 40] = 'LARGE', e[e.MEDIUM = 24] = 'MEDIUM', e[e.SMALL = 16] = 'SMALL', e))(hu || {});
let hp = [16, 24, 40, 64, 96];
let hh = new Set(hp);
let hm = e => e >= 64 ? 40 : 32;
let hf = e => calculateTypography({
  96: 18,
  64: 16,
  40: 14,
  24: 13,
  16: 12
}[e], 'neg');
let h_ = {
  omnipresent: {
    getLabel: () => getI18nString('whiteboard.text_sizes.omnipresent'),
    maxValue: 1 / 0,
    minValue: 1385
  },
  towering: {
    getLabel: () => getI18nString('whiteboard.text_sizes.towering'),
    maxValue: 1384,
    minValue: 745
  },
  mammoth: {
    getLabel: () => getI18nString('whiteboard.text_sizes.mammoth'),
    maxValue: 744,
    minValue: 377
  },
  ginormous: {
    getLabel: () => getI18nString('whiteboard.text_sizes.ginormous'),
    maxValue: 376,
    minValue: 185
  },
  huge: {
    getLabel: () => getI18nString('whiteboard.text_sizes.huge'),
    maxValue: 96,
    minValue: 96
  },
  extraLarge: {
    getLabel: () => getI18nString('whiteboard.text_sizes.extra_large'),
    maxValue: 64,
    minValue: 64
  },
  large: {
    getLabel: () => getI18nString('whiteboard.text_sizes.large'),
    maxValue: 40,
    minValue: 40
  },
  medium: {
    getLabel: () => getI18nString('whiteboard.text_sizes.medium'),
    maxValue: 24,
    minValue: 24
  },
  small: {
    getLabel: () => getI18nString('whiteboard.text_sizes.small'),
    maxValue: 16,
    minValue: 16
  },
  teensy: {
    getLabel: () => getI18nString('whiteboard.text_sizes.teensy'),
    maxValue: 4,
    minValue: -1 / 0
  }
};
let hx = [...Object.values(h_).map(e => e.minValue), MIXED_MARKER];
let hg = {
  format: e => {
    let t = Object.values(h_).find(t => e >= t.minValue && e <= t.maxValue);
    return t ? t.getLabel() : `${e}`;
  }
};
let hj = e => e.length > 1 ? e.filter(e => !hh.has(e)).sort((e, t) => e - t).slice(0, 5) : [];
function hb({
  reportWidth: e,
  inputProps: t
}) {
  let i = useRef(null);
  let n = t.property;
  useLayoutEffect(() => {
    let t = i.current;
    t && e(n, t.getBoundingClientRect().width);
    return () => e(n, void 0);
  }, [i, n, e]);
  return jsx('div', {
    'className': D9,
    'aria-hidden': !0,
    'children': jsx(_$$uQ2, {
      ...t,
      containerClassName: ex()(t.containerClassName, _$$oO),
      ref: i
    })
  });
}
function hy({
  reportWidth: e,
  value: t,
  optionProps: i
}) {
  let n = useRef(null);
  useLayoutEffect(() => {
    let i = n.current;
    i && e(t, i.getBoundingClientRect().width);
    return () => e(t, void 0);
  }, [n, t, e]);
  return jsx('div', {
    'className': D9,
    'aria-hidden': !0,
    'children': jsx(hc, {
      ...i,
      additionalStylesClassName: ex()(i.additionalStylesClassName, ZS),
      forwardedRef: n
    })
  });
}
let hC = () => !!useSelector(hT);
function hT(e) {
  let t = e.mirror.sceneGraph;
  let i = Object.keys(e.mirror.sceneGraphSelection);
  if (i.length !== 1) return null;
  let n = t.get(i[0]);
  return n && n.type === 'SHAPE_WITH_TEXT' && n.childrenAreAllGhosts ? n : null;
}
function hE(e) {
  let t = Object.keys(e.mirror.sceneGraphSelection);
  return t.length !== 1 ? Side.RIGHT : InteractionCpp.getConnectorCardinalDirection(t[0]);
}
function hS(e) {
  let t = hT(e);
  if (!t) return null;
  let i = t.attachedConnectorIDs;
  if (i.length !== 1) return null;
  let n = e.mirror.sceneGraph;
  let r = n.get(i[0]);
  if (!r) return null;
  switch (InteractionCpp.getQuickAddInteraction()) {
    case PointerAction.DRAG:
      return r;
    case PointerAction.CLICK:
      {
        let e = n.get(r.connectorStart.endpointNodeID);
        if (!e) return null;
        return e;
      }
  }
}
function hw() {
  let e = useSelector(e => e.mirror.appModel.hyperlinkLocation);
  let t = useDropdownState();
  let i = useAtomWithSubscription(_$$n9);
  let n = t && t.type === K9;
  let r = useSelector(e => e.progressBarState.mode === UIVisibilitySetting.HIDE_UI);
  let a = useSelector(e => e.mirror.selectionProperties.name && e.mirror.selectionProperties.name.includes('FigJam Stamp Icon') && e.mirror.selectionProperties.numSelectedByType?.ROUNDED_RECTANGLE === 1 && e.mirror.selectionProperties.numSelected === 1);
  let s = useSelector(e => a || e.mirror.selectionProperties.numSelectedByType?.STAMP === 1 && e.mirror.selectionProperties.numSelected === 1);
  let o = useSelector(e => {
    let t = e.mirror.selectionProperties.numSelectedByType?.TABLE;
    let i = e.mirror.selectionProperties.numSelectedByType?.TABLE_CELL;
    return t && t > 0 || i && i > 0;
  });
  let l = useSelector(e => !e.mirror.selectionProperties.numSelected || e.mirror.selectionProperties.numSelected === 0);
  let u = getObservableValue(AppStateTsApi?.figjamState().isInCanvasAiMode, !1);
  let m = useSelector(hT);
  let f = _$$d4();
  return !l && !e && !r && (!o || !n) && !m && (s && !isIpadDevice ? f : !i && !u);
}
let hM = 'whiteboard_transparency--icon--LOJ7P';
let hD = 'whiteboard_transparency--separator--t8wmx';
let hP = SeparatorComponent;
let hU = {
  [VisibilityState.VISIBLE]: 'VISIBLE',
  [VisibilityState.TRANSPARENT]: 'TRANSPARENT',
  [VisibilityState.TRANSPARENT_CUSTOM]: 'TRANSPARENT_CUSTOM',
  [VisibilityState.HIDDEN]: 'HIDDEN'
};
let hF = {
  [VisibilityState.VISIBLE]: jsx(_$$H5, {}),
  [VisibilityState.TRANSPARENT]: jsx(_$$N5, {}),
  [VisibilityState.TRANSPARENT_CUSTOM]: jsx(_$$N5, {}),
  [VisibilityState.HIDDEN]: jsx(_$$a9, {})
};
var hH = (e => (e[e.NONE = 0] = 'NONE', e[e.CONNECTOR = 1] = 'CONNECTOR', e[e.SHAPE_WITH_TEXT = 2] = 'SHAPE_WITH_TEXT', e[e.PLATFORM_SHAPE = 4] = 'PLATFORM_SHAPE', e[e.ALL = 7] = 'ALL', e))(hH || {});
function hB(e, t, i, n, r) {
  2 & t && i(e);
  1 & t && n(e === VisibilityState.HIDDEN);
  4 & t && r(e);
}
function hV() {
  let e = useSelector(e => e.mirror.selectionProperties.whiteboardNumSelected);
  let t = useSelector(e => e.mirror.selectionProperties.whiteboardNumSelectedByType);
  let i = useSelector(e => e.mirror.selectionProperties.whiteboardNumSelectedPlatformShape ?? 0);
  let n = 0;
  if (e && e > 0 && t) {
    let r = t.SHAPE_WITH_TEXT ?? 0;
    let a = t.CONNECTOR ?? 0;
    r + a + i === e && (r > 0 && (n |= 2), a > 0 && (n |= 1), i > 0 && (n |= 4));
  }
  return n;
}
function hG(e) {
  return 1 & e ? [VisibilityState.VISIBLE, VisibilityState.HIDDEN] : 2 & e || 4 & e ? [VisibilityState.VISIBLE, VisibilityState.TRANSPARENT, VisibilityState.HIDDEN] : [];
}
function hK(e, t, i, n) {
  if (!(isInvalidValue(i) || isInvalidValue(t) || isInvalidValue(n))) {
    let r = i ? VisibilityState.HIDDEN : VisibilityState.VISIBLE;
    let a = t ?? n ?? r;
    if ((!(2 & e) || a === t) && (!(4 & e) || a === n) && (!(1 & e) || a === r)) return a;
  }
}
let hW = e => Number(e);
function hz(e) {
  return e.toString();
}
function hZ({
  isColorPopoverOpen: e
}) {
  let [t, i] = useSelectionProperty('shapeWithTextFillType');
  let n = {
    [VisibilityState.VISIBLE]: getI18nString('whiteboard.inline_menu.shape_visibility_visible'),
    [VisibilityState.TRANSPARENT]: getI18nString('whiteboard.inline_menu.shape_visibility_transparent'),
    [VisibilityState.TRANSPARENT_CUSTOM]: getI18nString('whiteboard.inline_menu.shape_visibility_transparent'),
    [VisibilityState.HIDDEN]: getI18nString('whiteboard.inline_menu.shape_visibility_hidden')
  };
  let [r, a] = useSelectionProperty('connectorTextBackgroundTransparent');
  let [s, l] = useSelectionProperty('platformShapeFillType');
  let d = hV();
  let u = hG(d);
  let p = hK(d, t, r, s);
  let h = e => {
    hB(hW(e), d, i, a, l);
  };
  return d === 1 ? jsxs(Fragment, {
    children: [jsxs(RecordableDiv, {
      className: 'whiteboard_transparency--connectorFillContainer--yUHqE',
      onPointerUp: e ? () => {
        a(p !== VisibilityState.HIDDEN);
      } : void 0,
      role: 'button',
      recordingKey: 'connectorTextBackgroundVisibility',
      children: [p === VisibilityState.HIDDEN ? jsx(noop, {
        className: hM
      }) : jsx(_$$_2, {
        className: hM
      }), jsx('div', {
        className: 'whiteboard_transparency--connectorFillText--N-Ydb text--fontNeg12--2PWcg text--_fontBase--QdLsd text--_negText--j9g-L',
        children: getI18nString('whiteboard.inline_menu.text_background')
      })]
    }), jsx(hP, {
      className: hD
    })]
  }) : jsxs(Fragment, {
    children: [jsx('div', {
      className: 'whiteboard_transparency--container---6CxE',
      children: jsx(_$$b9, {
        value: void 0 === p || isInvalidValue(p) ? void 0 : hz(p),
        legend: jsx(Legend, {
          children: getI18nString('whiteboard.inline_menu.shape_visibility.legend')
        }),
        onChange: h,
        recordingKey: 'shapeWithTextFillType',
        children: u.map(t => {
          let i = hz(t);
          return jsx(_$$c8, {
            'icon': hF[t],
            'value': i,
            'aria-label': n[t],
            'htmlAttributes': {
              onPointerUp: e ? () => h(i) : noop
            },
            'children': n[t]
          }, generateRecordingKey('shapeWithTextFillTypeKey', hU[t]));
        })
      })
    }), jsx(hP, {
      className: hD
    })]
  });
}
function hq() {
  return new Map([['ADD_COLUMN_LEFT', {
    identifier: 'ADD_COLUMN_LEFT',
    iconImageURL: buildUploadUrl('9400f62ae966871748dbc8fe8bb5db43905451f9'),
    label: getI18nString('fullscreen_actions.add-table-column-before'),
    style: _$$_7.normal
  }], ['ADD_COLUMN_RIGHT', {
    identifier: 'ADD_COLUMN_RIGHT',
    iconImageURL: buildUploadUrl('a304100b18ea5bc6ac701d1702639b19584f572b'),
    label: getI18nString('fullscreen_actions.add-table-column-after'),
    style: _$$_7.normal
  }], ['ADD_ROW_ABOVE', {
    identifier: 'ADD_ROW_ABOVE',
    iconImageURL: buildUploadUrl('af73d211189324f341d869dbe6ad31d9293f3b02'),
    label: getI18nString('fullscreen_actions.add-table-row-above'),
    style: _$$_7.normal
  }], ['ADD_ROW_BELOW', {
    identifier: 'ADD_ROW_BELOW',
    iconImageURL: buildUploadUrl('3ff9e470d8ff8b00bda37a1a7cffbc5cf71f9c50'),
    label: getI18nString('fullscreen_actions.add-table-row-below'),
    style: _$$_7.normal
  }], ['DELETE_CONTENT', {
    identifier: 'DELETE_CONTENT',
    iconImageURL: buildUploadUrl('fa39374a2621258ff204c8b3d19fabcac205a8bb'),
    label: getI18nString('fullscreen_actions.delete-table-contents'),
    style: _$$_7.normal
  }], ['DELETE_COLUMN', {
    identifier: 'DELETE_COLUMN',
    iconImageURL: buildUploadUrl('0cdf2f7792c22668c4128463ce1ab2b7daf6cc04'),
    label: getI18nString('fullscreen_actions.delete-current-table-column'),
    style: _$$_7.normal
  }], ['DELETE_ROW', {
    identifier: 'DELETE_ROW',
    iconImageURL: buildUploadUrl('b7c2f4ee6638f3636435f94e34b112c111c8a000'),
    label: getI18nString('fullscreen_actions.delete-current-table-row'),
    style: _$$_7.normal
  }], ['MOVE_ROW_UP', {
    identifier: 'MOVE_ROW_UP',
    iconImageURL: buildUploadUrl('76b29748240a680d3c70193da514abf2fd7da3bd'),
    label: getI18nString('fullscreen_actions.move-table-row-up'),
    style: _$$_7.normal
  }], ['MOVE_ROW_DOWN', {
    identifier: 'MOVE_ROW_DOWN',
    iconImageURL: buildUploadUrl('8a24043471d379715530ceb9a27ee89415e80a4e'),
    label: getI18nString('fullscreen_actions.move-table-row-down'),
    style: _$$_7.normal
  }], ['MOVE_COLUMN_LEFT', {
    identifier: 'MOVE_COLUMN_LEFT',
    iconImageURL: buildUploadUrl('ced31cac875250517fc43e5503917c727ce83697'),
    label: getI18nString('fullscreen_actions.move-table-column-left'),
    style: _$$_7.normal
  }], ['MOVE_COLUMN_RIGHT', {
    identifier: 'MOVE_COLUMN_RIGHT',
    iconImageURL: buildUploadUrl('90a6ce44002cb629d48a1152811a25e1f8542e9b'),
    label: getI18nString('fullscreen_actions.move-table-column-right'),
    style: _$$_7.normal
  }], ['ADD_COMMENT', {
    identifier: 'ADD_COMMENT',
    iconImageURL: buildUploadUrl('ef8e7f34cbdd40b6360bfb68ed73e9435f5df6d3'),
    label: getI18nString('comments.add_a_comment'),
    style: _$$_7.normal
  }], ['CUT', {
    identifier: 'CUT',
    iconImageURL: buildUploadUrl('4906ac36ad87b2fbc8c1131de33e50ffcd0f931c'),
    label: getI18nString('fullscreen_actions.cut'),
    style: _$$_7.normal
  }], ['COPY', {
    identifier: 'COPY',
    iconImageURL: buildUploadUrl('a9a157a59bc9bea59323414709220f1aabc8e5b0'),
    label: getI18nString('fullscreen_actions.copy'),
    style: _$$_7.normal
  }], ['PASTE_HERE', {
    identifier: 'PASTE_HERE',
    iconImageURL: buildUploadUrl('403745040a09ea356a24a823ce8aaa9729275bfc'),
    label: getI18nString('fullscreen_actions.paste'),
    style: _$$_7.normal
  }], ['PASTE_TO_REPLACE', {
    identifier: 'PASTE_TO_REPLACE',
    iconImageURL: buildUploadUrl('403745040a09ea356a24a823ce8aaa9729275bfc'),
    label: getI18nString('fullscreen_actions.paste-to-replace'),
    style: _$$_7.normal
  }], ['EXPORT_SELECTION', {
    identifier: 'EXPORT_SELECTION',
    iconImageURL: buildUploadUrl('069e62f3f6d36c863fcaf132b661541bae26f3b4'),
    label: getI18nString('fullscreen.context_menu.export_selection'),
    style: _$$_7.normal
  }], ['BRING_TO_FRONT', {
    identifier: 'BRING_TO_FRONT',
    iconImageURL: buildUploadUrl('4ea2ce642395384d4e068112439edce0ae6eb308'),
    label: getI18nString('fullscreen_actions.bring-to-front'),
    style: _$$_7.normal
  }], ['SEND_TO_BACK', {
    identifier: 'SEND_TO_BACK',
    iconImageURL: buildUploadUrl('1cd7645083299efad768ed580af47f6e449f3881'),
    label: getI18nString('fullscreen_actions.send-to-back'),
    style: _$$_7.normal
  }], ['LOCK_UNLOCK', {
    identifier: 'LOCK_UNLOCK',
    iconImageURL: buildUploadUrl('5b57575766ec6e015d3ad82abdead130f38b51ee'),
    label: getI18nString('fullscreen.context_menu.lock_unlock'),
    style: _$$_7.normal
  }], ['MULTISELECT_MODE', {
    identifier: 'MULTISELECT_MODE',
    iconImageURL: buildUploadUrl('5142f326fd3191c3bd589944cd9b9f89e70d53b5'),
    label: getI18nString('fullscreen.context_menu.multiselect'),
    style: _$$_7.normal
  }]]);
}
let hJ = new Map([['MOVE_ROW_UP', 'move-table-row-up'], ['MOVE_ROW_DOWN', 'move-table-row-down'], ['MOVE_COLUMN_LEFT', 'move-table-column-left'], ['MOVE_COLUMN_RIGHT', 'move-table-column-right'], ['ADD_COLUMN_LEFT', 'add-table-column-before'], ['ADD_COLUMN_RIGHT', 'add-table-column-after'], ['ADD_ROW_ABOVE', 'add-table-row-above'], ['ADD_ROW_BELOW', 'add-table-row-below'], ['DELETE_CONTENT', 'delete-table-contents'], ['DELETE_COLUMN', 'delete-current-table-column'], ['DELETE_ROW', 'delete-current-table-row'], ['CUT', 'cut'], ['COPY', 'copy'], ['PASTE_HERE', 'paste-here'], ['PASTE_TO_REPLACE', 'paste-to-replace'], ['EXPORT_SELECTION', 'export-selection-or-current-page'], ['BRING_TO_FRONT', 'bring-to-front'], ['SEND_TO_BACK', 'send-to-back'], ['LOCK_UNLOCK', 'toggle-locked-for-selected-nodes'], ['MULTISELECT_MODE', 'set-tool-multiselect']]);
let hQ = () => {
  let e = useSelector(e => e.selectedView);
  let t = useSelector(e => e.mirror.appModel);
  let i = useSelector(e => !e.mirror.selectionProperties.numSelected || e.mirror.selectionProperties.numSelected === 0);
  let n = t.showComments && !!e.commentsEnabled;
  let r = new Set();
  let a = (e, i) => {
    isActionEnabled(t, i) && r.add(e);
  };
  let s = useSelector(e => e.mirror.appModel.activeCanvasEditModeType);
  for (let [e, o] of (n && r.add('ADD_COMMENT'), hJ.entries())) {
    switch (e) {
      case 'PASTE_TO_REPLACE':
      case 'EXPORT_SELECTION':
        i || a(e, o);
        break;
      case 'PASTE_HERE':
        i && a(e, o);
        break;
      case 'LOCK_UNLOCK':
        s !== LayoutTabType.RASTER && a(e, o);
        break;
      case 'MULTISELECT_MODE':
        t.currentTool === DesignGraphElements.HAND_SELECT && a(e, o);
        break;
      default:
        a(e, o);
    }
  }
  return r;
};
var h0 = (e => (e[e.CANVAS = 0] = 'CANVAS', e[e.CONTEXTUAL_TOOLBAR = 1] = 'CONTEXTUAL_TOOLBAR', e))(h0 || {});
function h1(e, t) {
  let i = hQ();
  let n = [['MOVE_ROW_UP', 'MOVE_ROW_DOWN', 'MOVE_COLUMN_LEFT', 'MOVE_COLUMN_RIGHT'], ['ADD_COLUMN_LEFT', 'ADD_COLUMN_RIGHT'], ['ADD_ROW_ABOVE', 'ADD_ROW_BELOW'], ['ADD_COMMENT'], ['CUT', 'COPY', 'PASTE_HERE', 'PASTE_TO_REPLACE'], ['EXPORT_SELECTION'], ['LOCK_UNLOCK'], ['BRING_TO_FRONT', 'SEND_TO_BACK'], ['DELETE_CONTENT', 'DELETE_COLUMN', 'DELETE_ROW']];
  t === 0 && n.push(['MULTISELECT_MODE']);
  let r = n.map(e => e.filter(e => i.has(e))).filter(e => e.length > 0);
  return {
    itemStringType: 'menu',
    identifier: e,
    visibleActionIdentifiers: r,
    visibleActionGroups: r.map(e => ({
      actionIdentifiers: e
    }))
  };
}
function h4() {
  return useSelector(e => e.mirror.selectionProperties.textLineType === 'UNORDERED_LIST');
}
function h9() {
  return useSelector(e => e.mirror.selectionProperties.textLineType === 'ORDERED_LIST');
}
let mt = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M16.5 3a.5.5 0 0 1 0 1H14v16h2.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1H13V4h-2.5a.5.5 0 0 1 0-1zm-5 4a.5.5 0 0 1 0 1h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 1 0 1h-7A1.5 1.5 0 0 1 3 15.5v-7A1.5 1.5 0 0 1 4.5 7zm8 0A1.5 1.5 0 0 1 21 8.5v7a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1 0-1z'
    })
  });
});
function mr() {
  return useSelector(e => e.mirror.appModel.onCanvasNameEditorInfo.mode === DiagramElementType.SECTION_NAME);
}
function ma() {
  let e = mr();
  return () => {
    e ? Fullscreen?.hideOnCanvasNameEditor() : Fullscreen?.triggerActionInUserEditScope('rename-selection', null);
  };
}
function mc() {
  let e = useSelectionPropertyValue('whiteboardColor');
  let t = useSelectionPropertyValue('whiteboardDividedSwatchColors');
  return isInvalidValue(t) ? (console.error('whiteboardDividedSwatchColors should never be mixed'), []) : e && isValidValue(e) ? e : t ?? [];
}
function mu() {
  let e = selectWithShallowEqual(e => e.mirror.selectionProperties.whiteboardNumSelectedByType);
  let t = useSelector(e => e.mirror.selectionProperties.whiteboardNumSelectedPlatformShape ?? 0);
  let i = useSelector(e => e.mirror.selectionProperties.whiteboardNumSelected);
  let n = selectWithShallowEqual(e => e.mirror.appModel.activeCanvasEditModeType);
  let r = useSelector(e => Object.keys(e.mirror.sceneGraphSelection).some(t => {
    let i = e.mirror.sceneGraph.get(t);
    return !!i?.textSublayer?.textContent.length;
  }));
  if (!e) return !1;
  let a = e.SHAPE_WITH_TEXT ?? 0;
  let s = e.CONNECTOR ?? 0;
  let o = a + s + t === i;
  s === i && (o = (o = r) && n !== LayoutTabType.TEXT);
  return o;
}
let mp = ['alignLeft', 'alignHorizontalCenter', 'alignRight', 'alignTop', 'alignVerticalCenter', 'alignBottom'];
let mh = new Map([['alignLeft', buildUploadUrl('01f4cc9eee24ffbf868d0a33aaaf8e82033a5d93')], ['alignHorizontalCenter', buildUploadUrl('ec77fcac2bc8db07c26c6e4b4b7258796a458ae9')], ['alignRight', buildUploadUrl('224ca896c598305c54981a912de06bc78ddf191f')], ['alignTop', buildUploadUrl('f70b64d1b08cb18c6d2afe696d33a6a47580732c')], ['alignVerticalCenter', buildUploadUrl('1981f7237279e2b10c0611f022a5f05a1a1aa70b')], ['alignBottom', buildUploadUrl('9860241afe3ebb4af6f6e49edeaa68b27ce9b354')]]);
let mm = mp.map(e => ({
  itemStringType: 'iconAction',
  identifier: e,
  flashesOnPress: !1,
  iconImageURL: mh.get(e)
}));
let mf = {
  itemStringType: 'actionSelector',
  identifier: 'ALIGNMENT',
  submenu: {
    position: _$$pf2.pinnedToFloatingBar,
    rowMaxSize: 3,
    items: mm,
    pages: [{
      rowMaxSize: 3,
      items: mm
    }]
  }
};
let m_ = {
  itemStringType: 'actionSelector',
  identifier: 'PENCIL_STROKE',
  submenu: {
    position: _$$pf2.pinnedToFloatingBar,
    rowMaxSize: 0,
    items: _$$yp,
    pages: [{
      rowMaxSize: 0,
      items: _$$yp
    }]
  },
  iconImageURLs: [buildUploadUrl('e138358eb8b3a07efda73c406e4c61cc3d9fe6d3')]
};
let mx = _$$xp2.slice().reverse();
let mg = {
  itemStringType: 'actionSelector',
  identifier: 'HIGHLIGHTER_STROKE',
  submenu: {
    position: _$$pf2.pinnedToFloatingBar,
    rowMaxSize: 0,
    items: mx,
    pages: [{
      rowMaxSize: 0,
      items: mx
    }]
  },
  iconImageURLs: [buildUploadUrl('c1837ca930ad93b0f6cc7e262e425757c34bca44')]
};
let mj = new Map([['alignLeft', 'align-left'], ['alignHorizontalCenter', 'align-horizontal-center'], ['alignRight', 'align-right'], ['alignTop', 'align-top'], ['alignVerticalCenter', 'align-vertical-center'], ['alignBottom', 'align-bottom']]);
function mb() {
  let e = mu();
  let t = hV();
  return e && t !== hH.CONNECTOR;
}
let my = new Map([['WHITEBOARD_COLOR', ['base', 'baseLight']], ['HIGHLIGHT_COLOR', ['highlight']], ['STICKY_COLOR', ['sticky']]]);
let mv = buildUploadUrl('faebe7cf9aae2c9be1f26be56081a6fa4cc09f88');
let mC = buildUploadUrl('d355d0f21e8416bbdcae9f46430642c6b59cc915');
var mT = (e => (e.START = 'START', e.END = 'END', e))(mT || {});
let mE = ['NONE', 'ARROW', 'ARROW_FILLED', 'ARROW_INVERTED', 'CIRCLE', 'DIAMOND'];
let mS = new Map([['NONE', 'ROUND'], ['DIAMOND', 'DIAMOND_FILLED'], ['CIRCLE', 'CIRCLE_FILLED'], ['ARROW', 'ARROW_LINES'], ['ARROW_FILLED', 'ARROW_EQUILATERAL'], ['ARROW_INVERTED', 'TRIANGLE_FILLED']]);
let mw = new Map([['ROUND', 'NONE'], ['DIAMOND_FILLED', 'DIAMOND'], ['CIRCLE_FILLED', 'CIRCLE'], ['ARROW_LINES', 'ARROW'], ['ARROW_EQUILATERAL', 'ARROW_FILLED'], ['TRIANGLE_FILLED', 'ARROW_INVERTED']]);
let mI = (e, t) => `CONNECTOR/${e}/${t}`;
function mL(e) {
  for (let t in mT) {
    let i = e.split(`CONNECTOR/${t}/`);
    if (i.length === 2) return i[1];
  }
  return null;
}
let mN = mE.map(e => mI('START', e));
let mA = mE.map(e => mI('END', e));
function mO(e) {
  return mE.map(t => ({
    itemStringType: 'iconAction',
    identifier: mI(e, t),
    flashesOnPress: !1
  }));
}
let mk = new Map([['left', new Map([['NONE', buildUploadUrl('7a9930b1e4aca1b5d06c36b00bd2cc64758c5849')], ['ARROW', buildUploadUrl('deb5540ae4b6484e3bdb0025b52bf8e71a79391c')], ['ARROW_FILLED', buildUploadUrl('fa76c9565eddcf56affd7797c5d393fed72b9028')], ['ARROW_INVERTED', buildUploadUrl('2336592069ee1de7da07da2aa881ff85c1c77989')], ['CIRCLE', buildUploadUrl('7c285e3fcbace487b65e53e626cc2ad2133e9acd')], ['DIAMOND', buildUploadUrl('1ab747ab4697d5f6bf7e5b99160883f70aa4c2a5')]])], ['up', new Map([['NONE', buildUploadUrl('157b46536766087af28320f95b2f0c98f71a1032')], ['ARROW', buildUploadUrl('8c3280098fe09c5e14d57d507f390c3bae24733a')], ['ARROW_FILLED', buildUploadUrl('de8f03cc76289efcb5ae472d7cb53e899a0e8d80')], ['ARROW_INVERTED', buildUploadUrl('465e721389b5e2f23116e26869dd90370cb10f2c')], ['CIRCLE', buildUploadUrl('eaa032fe2bcf35f92d9276227a0f2ac4f32c7edc')], ['DIAMOND', buildUploadUrl('711223c18ed61a1df0e414cc340334133720333d')]])], ['right', new Map([['NONE', buildUploadUrl('7a9930b1e4aca1b5d06c36b00bd2cc64758c5849')], ['ARROW', buildUploadUrl('53332df23dae692567e44b5c3321d0ec811c23d5')], ['ARROW_FILLED', buildUploadUrl('d2d126c19a44a29d01f2c8927ce496c7b4906a5f')], ['ARROW_INVERTED', buildUploadUrl('e644ae782ac2d99dccc8684fc8acf0627fe9bce1')], ['CIRCLE', buildUploadUrl('b272c1b69833952f3054bc74183ca23bd5d6b288')], ['DIAMOND', buildUploadUrl('2959df2f9f7f86724b0dfbdd24718af3742dfb76')]])], ['down', new Map([['NONE', buildUploadUrl('157b46536766087af28320f95b2f0c98f71a1032')], ['ARROW', buildUploadUrl('31d42fe0be5b036376d289ea121d5a1db20d3bc6')], ['ARROW_FILLED', buildUploadUrl('1e60f91397fba49e24f812cc92d52ca98d88e183')], ['ARROW_INVERTED', buildUploadUrl('cf37c05e83fc534cfa16a63f2f6eb49b187fdcd3')], ['CIRCLE', buildUploadUrl('ce81c97a7610b01854553d55585931d67c48b657')], ['DIAMOND', buildUploadUrl('aadf8da4a886c4ddf2950ce9863376fafe05543a')]])]]);
function mR(e, t, i) {
  let n = mL(e);
  if (n) return isInvalidValue(i) ? mk.get(t === 'START' ? 'left' : 'right')?.get(n) : mk.get(i)?.get(n);
}
function mM() {
  let e = useSelectionPropertyValue('connectorStartCapForSelection');
  return mw.get(e);
}
function mD() {
  let e = useSelectionPropertyValue('connectorEndCapForSelection');
  return mw.get(e);
}
function mP(e) {
  return {
    itemStringType: 'divider',
    identifier: `DIVIDER_${e}`,
    padding: JI.none
  };
}
function mU() {
  return Array.from({
    length: 15
  }).fill(0).map((e, t) => mP(t));
}
let mF = 'FONT_FAMILY/';
let mH = ['sansSerif', 'serif', 'monospace', 'script'];
let mB = {
  sansSerif: {
    url: buildUploadUrl('af15617d2091d08e7dfdb4b6485a71d5f786f53a'),
    height: 28,
    width: 58
  },
  serif: {
    url: buildUploadUrl('d5d38cc21df531208977d180f40828171ce3d6ba'),
    height: 28,
    width: 70
  },
  monospace: {
    url: buildUploadUrl('21c2519d1eeb90e02169035dc8365f593e652acc'),
    height: 28,
    width: 100
  },
  script: {
    url: buildUploadUrl('4be856c46adce506823c69ea83b054e1e7438b44'),
    height: 28,
    width: 84
  }
};
function mV() {
  return mH.map(e => {
    let t = pR[e];
    return {
      itemStringType: 'textAction',
      identifier: `${mF}${e}`,
      text: t.fontFamily,
      textImage: mB[e]
    };
  });
}
let mG = new Map([['sansSerif', buildUploadUrl('4d90c5e665fa16415b0b261e302696e4c706553a')], ['serif', buildUploadUrl('14457d0d904ce9c5c570f9557fc760a18cde12ea')], ['monospace', buildUploadUrl('a96474304a571c7ef149023afd13beb0c196f764')], ['script', buildUploadUrl('6e257bdd5a3789fd0013eb9611f503d44b1c4a56')]]);
function mK() {
  let e = useSelectionPropertyValue('whiteboardFontFamilies');
  if (!(!e || isInvalidValue(e))) return e;
}
let mW = 'FONT_SIZE/';
let mz = 'FONT_SIZE/CUSTOM';
let mZ = ['small', 'medium', 'large', 'extraLarge', 'huge'];
function m$() {
  let e = mZ.map(e => {
    let t = h_[e];
    return {
      itemStringType: 'textAction',
      identifier: `${mW}${e}`,
      text: t.getLabel(),
      decoratorText: t.maxValue.toString()
    };
  });
  e.push({
    itemStringType: 'textAction',
    identifier: mz,
    text: getI18nString('whiteboard.text_sizes.custom')
  });
  return e;
}
function mY() {
  let e = useSelectionPropertyValue('whiteboardFontSizes');
  if (e && isValidValue(e)) return e;
}
let mX = 'IMAGE_CROP/';
function mq() {
  return Array.from(Id.keys()).map(e => ({
    itemStringType: 'textAction',
    identifier: `${mX}${e}`,
    text: _$$Fk2(e),
    decoratorText: _$$d7(e)
  }));
}
let mJ = {
  itemStringType: 'action',
  identifier: 'TIDY_UP',
  iconImageURL: buildUploadUrl('f2098719f6f91ba59c36128eefa62954357cc185')
};
let mQ = {
  itemStringType: 'action',
  identifier: 'GROUP_SELECTION',
  iconImageURL: buildUploadUrl('935d977c723aac4b950cefa8d425248f5517ed37')
};
let m0 = {
  itemStringType: 'action',
  identifier: 'UNGROUP_SELECTION',
  iconImageURL: buildUploadUrl('a7761689c8cf9bf64b5d39d85aa780fa8691a1ad')
};
let m1 = {
  itemStringType: 'action',
  identifier: 'CREATE_SECTION',
  iconImageURL: buildUploadUrl('c44b2b4e1e45119f431e222606f087169ce2f6bd')
};
function m2() {
  return {
    identifier: 'AI_SUMMARIZE',
    label: getI18nString('whiteboard.inline_menu.ai_quick_actions_summarize_button'),
    iconImageURL: buildUploadUrl('1d27a05c1b24aba212490339088465fe5f599e4c'),
    style: _$$_7.normal
  };
}
function m3() {
  return {
    identifier: 'AI_SORT',
    label: getI18nString('whiteboard.inline_menu.ai_quick_actions_sort_stickies_button'),
    iconImageURL: buildUploadUrl('56fafc9be0e983648b1b6daee4136bc0897aed21'),
    style: _$$_7.normal
  };
}
function m5() {
  return {
    identifier: 'AI_LEARN_MORE',
    label: getI18nString('whiteboard.inline_menu.ai_quick_actions_dropdown_disclaimer_cta'),
    iconImageURL: null,
    style: _$$_7.normal
  };
}
function m6() {
  let e = [m5()];
  e.push(m3());
  e.push(m2());
  return {
    itemStringType: 'menu',
    identifier: 'AI_QUICK_ACTIONS',
    iconImageURL: buildUploadUrl('a5413bcebea4f5328627303644667c40a97cd319'),
    items: e
  };
}
let m4 = {
  itemStringType: 'action',
  identifier: 'DUPLICATE',
  iconImageURL: buildUploadUrl('0f15e280ad450f4edef016319dfacd32c00de40b')
};
let m9 = {
  itemStringType: 'action',
  identifier: 'DELETE',
  iconImageURL: buildUploadUrl('947de7441fdaeb98b831a6dbaa025489abccba86'),
  isDestructive: !0
};
let m8 = {
  itemStringType: 'action',
  identifier: 'UNLOCK',
  iconImageURL: buildUploadUrl('abeca90f50320b169ca8b8430eaff2026dda30e7')
};
function m7() {
  let e = [...mk.values()].map(e => [...e.values()]).flatMap(e => {
    let t = [];
    e.forEach(e => {
      t.push(e);
    });
    return t;
  });
  let t = mU().map(e => [e.identifier, e]);
  let i = [{
    itemStringType: 'palette',
    identifier: 'paletteWhiteboardColor',
    rowMaxSize: 6,
    swatches: _$$bE(LK('WHITEBOARD_COLOR'), !0, 'base')
  }, {
    itemStringType: 'divider',
    identifier: 'DIVIDER_WHITEBOARD_COLOR',
    padding: JI.none,
    axis: _$$Vq.vertical
  }, {
    itemStringType: 'iconAction',
    identifier: 'fillTypeVisible',
    iconImageURL: buildUploadUrl('bdf989a007b1d459bbad4949c595ecadbbad5d88'),
    flashesOnPress: !1
  }, {
    itemStringType: 'iconAction',
    identifier: 'fillTypeTransparent',
    iconImageURL: buildUploadUrl('fd9dfdbcf1ded21e76e0f013c8b3c4c2ade59591'),
    flashesOnPress: !1
  }, {
    itemStringType: 'iconAction',
    identifier: 'fillTypeHidden',
    iconImageURL: buildUploadUrl('f907f6942bab5d553b95bd448a1b30b4eb54733d'),
    flashesOnPress: !1
  }];
  let n = [{
    itemStringType: 'iconAction',
    identifier: 'whiteboardStrokeSolid',
    iconImageURL: buildUploadUrl('d355d0f21e8416bbdcae9f46430642c6b59cc915'),
    flashesOnPress: !1
  }, {
    itemStringType: 'iconAction',
    identifier: 'whiteboardStrokeDashed',
    iconImageURL: buildUploadUrl('1592518d3124a6b186044c3843d78f58f3424693'),
    flashesOnPress: !1
  }, {
    itemStringType: 'iconAction',
    identifier: 'whiteboardStrokeNone',
    iconImageURL: buildUploadUrl('f907f6942bab5d553b95bd448a1b30b4eb54733d'),
    flashesOnPress: !1
  }, {
    itemStringType: 'divider',
    identifier: 'DIVIDER_WHITEBOARD_STROKE',
    padding: JI.none,
    axis: _$$Vq.horizontal
  }, {
    itemStringType: 'iconAction',
    identifier: 'whiteboardStrokeThin',
    iconImageURL: buildUploadUrl('f45e43941c4deb776804efc35fe840177a275bf7'),
    flashesOnPress: !1
  }, {
    itemStringType: 'iconAction',
    identifier: 'whiteboardStrokeThick',
    iconImageURL: buildUploadUrl('89047150eaa941f24465aa324fa11dbb8b68be25'),
    flashesOnPress: !1
  }];
  let r = [{
    itemStringType: 'palette',
    identifier: 'paletteHighlightColor',
    rowMaxSize: 0,
    swatches: _$$bE(LK('HIGHLIGHTER'), !1, 'base')
  }];
  let a = [{
    itemStringType: 'palette',
    identifier: 'paletteWashiTapePattern',
    rowMaxSize: 0,
    swatches: MC(FC, !0)
  }];
  let s = [{
    itemStringType: 'palette',
    identifier: 'paletteStickyColor',
    rowMaxSize: 0,
    swatches: _$$bE(LK('STICKY'), !1, 'base')
  }];
  let o = mV();
  let l = m$();
  let d = [{
    itemStringType: 'iconAction',
    identifier: 'textAlignLeft',
    iconImageURL: buildUploadUrl('ffa1896c3a7c5ebb5a9faca54ab4b262d625d113'),
    flashesOnPress: !1
  }, {
    itemStringType: 'iconAction',
    identifier: 'textAlignCenter',
    iconImageURL: buildUploadUrl('d229c1db5d7709c1242ee4743c6ccf918e955dbb'),
    flashesOnPress: !1
  }, {
    itemStringType: 'iconAction',
    identifier: 'textAlignRight',
    iconImageURL: buildUploadUrl('e1b765fa3f0498e863004a473d9afd59791fa85d'),
    flashesOnPress: !1
  }];
  let c = mO(mT.START);
  let p = mO(mT.END);
  let h = [{
    itemStringType: 'iconAction',
    identifier: 'connectorLineElbowed',
    iconImageURL: mv,
    flashesOnPress: !1
  }, {
    itemStringType: 'iconAction',
    identifier: 'connectorLineStraight',
    iconImageURL: mC,
    flashesOnPress: !1
  }];
  let m = mq();
  let f = [{
    itemStringType: 'slider',
    requiredFields: ['sliderStyle'],
    identifier: 'imageCropSlider',
    start: 1,
    numIntervals: 21,
    step: 0.1,
    axis: B9.horizontal,
    sliderStyle: Pi.base
  }, {
    itemStringType: 'iconAction',
    identifier: 'imageRotate',
    iconImageURL: buildUploadUrl('4e36f7828b150be693cb78641b249e20cadd0af8'),
    flashesOnPress: !1
  }, {
    itemStringType: 'divider',
    identifier: 'DIVIDER_IMAGE_CONTROLS',
    padding: JI.none,
    axis: _$$Vq.horizontal
  }, {
    itemStringType: 'actionSelector',
    identifier: 'imageCropPresets',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      rowMaxSize: 1,
      items: m,
      pages: [{
        rowMaxSize: 1,
        items: m
      }]
    }
  }];
  let _ = new Map([...t, ['WHITEBOARD_COLOR', {
    itemStringType: 'paletteSelector',
    identifier: 'WHITEBOARD_COLOR',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      rowMaxSize: 0,
      items: i,
      pages: [{
        rowMaxSize: 0,
        items: i
      }]
    }
  }], ['HIGHLIGHT_COLOR', {
    itemStringType: 'paletteSelector',
    identifier: 'HIGHLIGHT_COLOR',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      rowMaxSize: 0,
      items: r,
      pages: [{
        rowMaxSize: 0,
        items: r
      }]
    }
  }], ['WASHI_TAPE_PATTERN', {
    itemStringType: 'paletteSelector',
    identifier: 'WASHI_TAPE_PATTERN',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      rowMaxSize: 0,
      items: a,
      pages: [{
        rowMaxSize: 0,
        items: a
      }]
    }
  }], ['STICKY_COLOR', {
    itemStringType: 'paletteSelector',
    identifier: 'STICKY_COLOR',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      rowMaxSize: 0,
      items: s,
      pages: [{
        rowMaxSize: 0,
        items: s
      }]
    }
  }], ['WHITEBOARD_SHAPE', {
    itemStringType: 'actionSelector',
    identifier: 'WHITEBOARD_SHAPE',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      items: _$$zD2,
      rowMaxSize: 4,
      pages: _$$p6
    },
    iconImageURLs: [buildUploadUrl('d8365bd2d17cecaa713c289f051114fdf6590505')]
  }], ['WHITEBOARD_STROKE', {
    itemStringType: 'actionSelector',
    identifier: 'WHITEBOARD_STROKE',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      rowMaxSize: 0,
      items: n,
      pages: [{
        rowMaxSize: 0,
        items: n
      }]
    },
    iconImageURLs: [buildUploadUrl('7f22083a673f802cfe0bddda8f70e81b4c45240a')]
  }], ['RESIZE_TO_FIT', {
    itemStringType: 'action',
    identifier: 'RESIZE_TO_FIT',
    iconImageURL: buildUploadUrl('067c607fa0b1963d525c2fed4f3855551ff8dbc2')
  }], ['FONT_FAMILY', {
    itemStringType: 'actionSelector',
    identifier: 'FONT_FAMILY',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      rowMaxSize: 1,
      items: o,
      pages: [{
        rowMaxSize: 1,
        items: o
      }]
    },
    iconImageURLs: [buildUploadUrl('4d90c5e665fa16415b0b261e302696e4c706553a'), buildUploadUrl('14457d0d904ce9c5c570f9557fc760a18cde12ea'), buildUploadUrl('e74fba46bfc5460a15ef53aebcfa25949c2efadf'), buildUploadUrl('6e257bdd5a3789fd0013eb9611f503d44b1c4a56')]
  }], ['WHITEBOARD_TEXT_STYLE', {
    itemStringType: 'actionSelector',
    identifier: 'WHITEBOARD_TEXT_STYLE',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      rowMaxSize: 1,
      items: l,
      pages: [{
        rowMaxSize: 1,
        items: l
      }]
    }
  }], ['TEXT_DECORATION_BOLD', {
    itemStringType: 'action',
    identifier: 'TEXT_DECORATION_BOLD',
    iconImageURL: buildUploadUrl('2e55e848e932e04b2a3ec12256f1407f1749c7cf')
  }], ['TEXT_DECORATION_STRIKETHROUGH', {
    itemStringType: 'action',
    identifier: 'TEXT_DECORATION_STRIKETHROUGH',
    iconImageURL: buildUploadUrl('db2a6ade78f8c64674af80577ac698c4d1768ef0')
  }], ['ORDERED_LIST', {
    itemStringType: 'action',
    identifier: 'ORDERED_LIST',
    iconImageURL: buildUploadUrl('64097c5924bf0f3d41682f3809419ad50c8410e3')
  }], ['UNORDERED_LIST', {
    itemStringType: 'action',
    identifier: 'UNORDERED_LIST',
    iconImageURL: buildUploadUrl('1c66cc53230fac0242092543577d33e3c4b9391c')
  }], ['TEXT_ALIGN', {
    itemStringType: 'actionSelector',
    identifier: 'TEXT_ALIGN',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      rowMaxSize: 0,
      items: d,
      pages: [{
        rowMaxSize: 0,
        items: d
      }]
    }
  }], ['CONNECTOR_START_CAP', {
    itemStringType: 'actionSelector',
    identifier: 'CONNECTOR_START_CAP',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      rowMaxSize: 3,
      items: c,
      pages: [{
        rowMaxSize: 3,
        items: c
      }]
    },
    iconImageURLs: e
  }], ['CONNECTOR_END_CAP', {
    itemStringType: 'actionSelector',
    identifier: 'CONNECTOR_END_CAP',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      rowMaxSize: 3,
      items: p,
      pages: [{
        rowMaxSize: 3,
        items: p
      }]
    }
  }], ['CONNECTOR_LINE_STYLE', {
    itemStringType: 'actionSelector',
    identifier: 'CONNECTOR_LINE_STYLE',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      rowMaxSize: 0,
      items: h,
      pages: [{
        rowMaxSize: 0,
        items: h
      }]
    }
  }], ['ADD_CONNECTOR_TEXT', {
    itemStringType: 'action',
    identifier: 'ADD_CONNECTOR_TEXT',
    iconImageURL: buildUploadUrl('88f9ce67669812647d9c63f5efc7a1c5d2524337')
  }], ['REPLACE_IMAGE', {
    itemStringType: 'imageSelector',
    identifier: 'REPLACE_IMAGE',
    iconImageURL: buildUploadUrl('986c5dae8611db9ff3268f71c8983362678e83ca')
  }], ['IMAGE_BORDER', {
    itemStringType: 'action',
    identifier: 'IMAGE_BORDER',
    iconImageURL: buildUploadUrl('3b6787676a2d47080de10be6b12a32e6582c2207')
  }], ['SECTION_SHOW_HIDE', {
    itemStringType: 'action',
    identifier: 'SECTION_SHOW_HIDE'
  }], ['SECTION_RENAME', {
    itemStringType: 'action',
    identifier: 'SECTION_RENAME',
    iconImageURL: buildUploadUrl('9900d0f2ba10afd0b725938bcdbd81b642b9f473')
  }], ['EMBED_OPEN_EXTERNAL', {
    itemStringType: 'action',
    identifier: 'EMBED_OPEN_EXTERNAL',
    iconImageURL: buildUploadUrl('359a1a130090b203d422ea8f6df24c78ef36c0db')
  }], ['EMBED_CONVERT_TO_TEXT', {
    itemStringType: 'action',
    identifier: 'EMBED_CONVERT_TO_TEXT',
    iconImageURL: buildUploadUrl('e2b50062892be8eafdce7b788a47861d514ec2d6')
  }], ['HYPERLINK', {
    itemStringType: 'action',
    identifier: 'HYPERLINK',
    iconImageURL: buildUploadUrl('a7e495e823feb85770faae7cd178747af064f1b3')
  }], ['AUTHOR_VISIBILITY', {
    itemStringType: 'action',
    identifier: 'AUTHOR_VISIBILITY',
    iconImageURL: buildUploadUrl('675ac35ac57109af8724ac5735f1d592763fe78f')
  }], ['ALIGNMENT', mf], ['TIDY_UP', mJ], ['GROUP_SELECTION', mQ], ['UNGROUP_SELECTION', m0], ['CREATE_SECTION', m1], ['DUPLICATE', m4], ['MENU', {
    itemStringType: 'menu',
    identifier: 'MENU',
    iconImageURL: buildUploadUrl('d60a6c532647557aa1a222446779c8c8b7a8e74e'),
    items: [...hq().values()]
  }], ['DELETE', m9], ['UNLOCK', m8], ['PENCIL_STROKE', m_], ['HIGHLIGHTER_STROKE', mg], ['IMAGE_CONTROLS', {
    itemStringType: 'actionSelector',
    identifier: 'IMAGE_CONTROLS',
    iconImageURLs: [buildUploadUrl('4e36f7828b150be693cb78641b249e20cadd0af8'), buildUploadUrl('4bec08abeba0aaba641629d741396842f7f72790')],
    submenu: {
      requiredFields: ['dismissal', 'webNotificationOnOpen', 'webNotificationOnClose'],
      position: _$$pf2.pinnedToFloatingBar,
      dismissal: $x.persistent,
      webNotificationOnOpen: _$$_E.enterCropMode,
      webNotificationOnClose: _$$_E.exitCropMode,
      items: f,
      rowMaxSize: 0,
      pages: [{
        rowMaxSize: 0,
        items: f
      }]
    }
  }]]);
  getFeatureFlags().figjam_synthesize_handbrake || _.set('AI_QUICK_ACTIONS', m6());
  return _;
}
function fe() {
  let e = [...mk.values()].map(e => [...e.values()]).flatMap(e => {
    let t = [];
    e.forEach(e => {
      t.push(e);
    });
    return t;
  });
  let t = new Map([...mU().map(e => [e.identifier, e]), ['WHITEBOARD_COLOR', {
    itemStringType: 'paletteSelector',
    identifier: 'WHITEBOARD_COLOR',
    submenu: {
      shouldCenterAlignItems: AppStateTsApi?.uiState().showUI3Colors.getCopy() ?? !1,
      position: _$$pf2.pinnedToFloatingBar,
      pages: [{
        rowMaxSize: 0,
        items: [{
          itemStringType: 'palette',
          identifier: 'paletteWhiteboardColor',
          rowMaxSize: AppStateTsApi?.uiState().showUI3Colors.getCopy() ? 8 : 6,
          swatches: _$$bE(LK('WHITEBOARD_COLOR'), !0, 'base')
        }, {
          itemStringType: 'divider',
          identifier: 'DIVIDER_WHITEBOARD_COLOR',
          padding: JI.none,
          axis: _$$Vq.vertical
        }, {
          itemStringType: 'iconAction',
          identifier: 'fillTypeVisible',
          iconImageURL: buildUploadUrl('bdf989a007b1d459bbad4949c595ecadbbad5d88'),
          flashesOnPress: !1
        }, {
          itemStringType: 'iconAction',
          identifier: 'fillTypeTransparent',
          iconImageURL: buildUploadUrl('fd9dfdbcf1ded21e76e0f013c8b3c4c2ade59591'),
          flashesOnPress: !1
        }, {
          itemStringType: 'iconAction',
          identifier: 'fillTypeHidden',
          iconImageURL: buildUploadUrl('f907f6942bab5d553b95bd448a1b30b4eb54733d'),
          flashesOnPress: !1
        }]
      }]
    }
  }], ['HIGHLIGHT_COLOR', {
    itemStringType: 'paletteSelector',
    identifier: 'HIGHLIGHT_COLOR',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      pages: [{
        rowMaxSize: 0,
        items: [{
          itemStringType: 'palette',
          identifier: 'paletteHighlightColor',
          rowMaxSize: 0,
          swatches: _$$bE(LK('HIGHLIGHTER'), !1, 'base')
        }]
      }]
    }
  }], ['WASHI_TAPE_PATTERN', {
    itemStringType: 'paletteSelector',
    identifier: 'WASHI_TAPE_PATTERN',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      pages: [{
        rowMaxSize: 0,
        items: [{
          itemStringType: 'palette',
          identifier: 'paletteWashiTapePattern',
          rowMaxSize: 0,
          swatches: MC(FC, !0)
        }]
      }]
    }
  }], ['STICKY_COLOR', {
    itemStringType: 'paletteSelector',
    identifier: 'STICKY_COLOR',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      pages: [{
        rowMaxSize: 0,
        items: [{
          itemStringType: 'palette',
          identifier: 'paletteStickyColor',
          rowMaxSize: 0,
          swatches: _$$bE(LK('STICKY'), !1, 'base')
        }]
      }]
    }
  }], ['WHITEBOARD_SHAPE', {
    itemStringType: 'actionSelector',
    identifier: 'WHITEBOARD_SHAPE',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      pages: _$$p6
    },
    iconImageURLs: [buildUploadUrl('d8365bd2d17cecaa713c289f051114fdf6590505')]
  }], ['WHITEBOARD_STROKE', {
    itemStringType: 'actionSelector',
    identifier: 'WHITEBOARD_STROKE',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      pages: [{
        rowMaxSize: 0,
        items: [{
          itemStringType: 'iconAction',
          identifier: 'whiteboardStrokeSolid',
          iconImageURL: buildUploadUrl('d355d0f21e8416bbdcae9f46430642c6b59cc915'),
          flashesOnPress: !1
        }, {
          itemStringType: 'iconAction',
          identifier: 'whiteboardStrokeDashed',
          iconImageURL: buildUploadUrl('1592518d3124a6b186044c3843d78f58f3424693'),
          flashesOnPress: !1
        }, {
          itemStringType: 'iconAction',
          identifier: 'whiteboardStrokeNone',
          iconImageURL: buildUploadUrl('f907f6942bab5d553b95bd448a1b30b4eb54733d'),
          flashesOnPress: !1
        }, {
          itemStringType: 'divider',
          identifier: 'DIVIDER_WHITEBOARD_STROKE',
          padding: JI.none,
          axis: _$$Vq.horizontal
        }, {
          itemStringType: 'iconAction',
          identifier: 'whiteboardStrokeThin',
          iconImageURL: buildUploadUrl('f45e43941c4deb776804efc35fe840177a275bf7'),
          flashesOnPress: !1
        }, {
          itemStringType: 'iconAction',
          identifier: 'whiteboardStrokeThick',
          iconImageURL: buildUploadUrl('89047150eaa941f24465aa324fa11dbb8b68be25'),
          flashesOnPress: !1
        }]
      }]
    },
    iconImageURLs: [buildUploadUrl('7f22083a673f802cfe0bddda8f70e81b4c45240a')]
  }], ['RESIZE_TO_FIT', {
    itemStringType: 'action',
    identifier: 'RESIZE_TO_FIT',
    iconImageURL: buildUploadUrl('067c607fa0b1963d525c2fed4f3855551ff8dbc2')
  }], ['FONT_FAMILY', {
    itemStringType: 'actionSelector',
    identifier: 'FONT_FAMILY',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      pages: [{
        rowMaxSize: 1,
        items: mV()
      }]
    },
    iconImageURLs: [buildUploadUrl('4d90c5e665fa16415b0b261e302696e4c706553a'), buildUploadUrl('14457d0d904ce9c5c570f9557fc760a18cde12ea'), buildUploadUrl('e74fba46bfc5460a15ef53aebcfa25949c2efadf'), buildUploadUrl('6e257bdd5a3789fd0013eb9611f503d44b1c4a56')]
  }], ['WHITEBOARD_TEXT_STYLE', {
    itemStringType: 'actionSelector',
    identifier: 'WHITEBOARD_TEXT_STYLE',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      pages: [{
        rowMaxSize: 1,
        items: m$()
      }]
    }
  }], ['TEXT_DECORATION_BOLD', {
    itemStringType: 'action',
    identifier: 'TEXT_DECORATION_BOLD',
    iconImageURL: buildUploadUrl('2e55e848e932e04b2a3ec12256f1407f1749c7cf')
  }], ['TEXT_DECORATION_STRIKETHROUGH', {
    itemStringType: 'action',
    identifier: 'TEXT_DECORATION_STRIKETHROUGH',
    iconImageURL: buildUploadUrl('db2a6ade78f8c64674af80577ac698c4d1768ef0')
  }], ['ORDERED_LIST', {
    itemStringType: 'action',
    identifier: 'ORDERED_LIST',
    iconImageURL: buildUploadUrl('64097c5924bf0f3d41682f3809419ad50c8410e3')
  }], ['UNORDERED_LIST', {
    itemStringType: 'action',
    identifier: 'UNORDERED_LIST',
    iconImageURL: buildUploadUrl('1c66cc53230fac0242092543577d33e3c4b9391c')
  }], ['TEXT_ALIGN', {
    itemStringType: 'actionSelector',
    identifier: 'TEXT_ALIGN',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      pages: [{
        rowMaxSize: 0,
        items: [{
          itemStringType: 'iconAction',
          identifier: 'textAlignLeft',
          iconImageURL: buildUploadUrl('ffa1896c3a7c5ebb5a9faca54ab4b262d625d113'),
          flashesOnPress: !1
        }, {
          itemStringType: 'iconAction',
          identifier: 'textAlignCenter',
          iconImageURL: buildUploadUrl('d229c1db5d7709c1242ee4743c6ccf918e955dbb'),
          flashesOnPress: !1
        }, {
          itemStringType: 'iconAction',
          identifier: 'textAlignRight',
          iconImageURL: buildUploadUrl('e1b765fa3f0498e863004a473d9afd59791fa85d'),
          flashesOnPress: !1
        }]
      }]
    }
  }], ['CONNECTOR_START_CAP', {
    itemStringType: 'actionSelector',
    identifier: 'CONNECTOR_START_CAP',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      pages: [{
        rowMaxSize: 3,
        items: mO(mT.START)
      }]
    },
    iconImageURLs: e
  }], ['CONNECTOR_END_CAP', {
    itemStringType: 'actionSelector',
    identifier: 'CONNECTOR_END_CAP',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      pages: [{
        rowMaxSize: 3,
        items: mO(mT.END)
      }]
    }
  }], ['CONNECTOR_LINE_STYLE', {
    itemStringType: 'actionSelector',
    identifier: 'CONNECTOR_LINE_STYLE',
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      pages: [{
        rowMaxSize: 0,
        items: [{
          itemStringType: 'iconAction',
          identifier: 'connectorLineElbowed',
          iconImageURL: mv,
          flashesOnPress: !1
        }, {
          itemStringType: 'iconAction',
          identifier: 'connectorLineStraight',
          iconImageURL: mC,
          flashesOnPress: !1
        }]
      }]
    }
  }], ['ADD_CONNECTOR_TEXT', {
    itemStringType: 'action',
    identifier: 'ADD_CONNECTOR_TEXT',
    iconImageURL: buildUploadUrl('88f9ce67669812647d9c63f5efc7a1c5d2524337')
  }], ['REPLACE_IMAGE', {
    itemStringType: 'imageSelector',
    identifier: 'REPLACE_IMAGE',
    iconImageURL: buildUploadUrl('986c5dae8611db9ff3268f71c8983362678e83ca')
  }], ['IMAGE_BORDER', {
    itemStringType: 'action',
    identifier: 'IMAGE_BORDER',
    iconImageURL: buildUploadUrl('3b6787676a2d47080de10be6b12a32e6582c2207')
  }], ['SECTION_SHOW_HIDE', {
    itemStringType: 'action',
    identifier: 'SECTION_SHOW_HIDE'
  }], ['SECTION_RENAME', {
    itemStringType: 'action',
    identifier: 'SECTION_RENAME',
    iconImageURL: buildUploadUrl('9900d0f2ba10afd0b725938bcdbd81b642b9f473')
  }], ['EMBED_OPEN_EXTERNAL', {
    itemStringType: 'action',
    identifier: 'EMBED_OPEN_EXTERNAL',
    iconImageURL: buildUploadUrl('359a1a130090b203d422ea8f6df24c78ef36c0db')
  }], ['EMBED_CONVERT_TO_TEXT', {
    itemStringType: 'action',
    identifier: 'EMBED_CONVERT_TO_TEXT',
    iconImageURL: buildUploadUrl('e2b50062892be8eafdce7b788a47861d514ec2d6')
  }], ['HYPERLINK', {
    itemStringType: 'action',
    identifier: 'HYPERLINK',
    iconImageURL: buildUploadUrl('a7e495e823feb85770faae7cd178747af064f1b3')
  }], ['AUTHOR_VISIBILITY', {
    itemStringType: 'action',
    identifier: 'AUTHOR_VISIBILITY',
    iconImageURL: buildUploadUrl('675ac35ac57109af8724ac5735f1d592763fe78f')
  }], ['ALIGNMENT', mf], ['TIDY_UP', mJ], ['GROUP_SELECTION', mQ], ['UNGROUP_SELECTION', m0], ['CREATE_SECTION', m1], ['DUPLICATE', m4], ['MENU', {
    itemStringType: 'menu',
    identifier: 'MENU',
    iconImageURL: buildUploadUrl('d60a6c532647557aa1a222446779c8c8b7a8e74e'),
    items: [...hq().values()]
  }], ['DELETE', m9], ['UNLOCK', m8], ['PENCIL_STROKE', m_], ['HIGHLIGHTER_STROKE', mg], ['IMAGE_CONTROLS', {
    itemStringType: 'actionSelector',
    identifier: 'IMAGE_CONTROLS',
    iconImageURLs: [buildUploadUrl('4e36f7828b150be693cb78641b249e20cadd0af8'), buildUploadUrl('4bec08abeba0aaba641629d741396842f7f72790')],
    submenu: {
      position: _$$pf2.pinnedToFloatingBar,
      dismissal: $x.persistent,
      webNotificationOnOpen: _$$_E.enterCropMode,
      webNotificationOnClose: _$$_E.exitCropMode,
      pages: [{
        rowMaxSize: 0,
        items: [{
          itemStringType: 'slider',
          identifier: 'imageCropSlider',
          start: 1,
          numIntervals: 21,
          step: 0.1,
          axis: B9.horizontal,
          sliderStyle: Pi.base
        }, {
          itemStringType: 'iconAction',
          identifier: 'imageRotate',
          iconImageURL: buildUploadUrl('4e36f7828b150be693cb78641b249e20cadd0af8'),
          flashesOnPress: !1
        }, {
          itemStringType: 'divider',
          identifier: 'DIVIDER_IMAGE_CONTROLS',
          padding: JI.none,
          axis: _$$Vq.horizontal
        }, {
          itemStringType: 'actionSelector',
          identifier: 'imageCropPresets',
          submenu: {
            position: _$$pf2.pinnedToFloatingBar,
            pages: [{
              rowMaxSize: 1,
              items: mq()
            }]
          }
        }]
      }]
    }
  }]]);
  getFeatureFlags().figjam_synthesize_handbrake || t.set('AI_QUICK_ACTIONS', m6());
  return t;
}
let fa = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M10.103 8.005A1 1 0 0 1 11 9h7a1 1 0 0 1 .898-.995L19 8h1l.102.005A1 1 0 0 1 21 9v1l-.005.102a1 1 0 0 1-.893.893L20 11v7l.102.005A1 1 0 0 1 21 19v1l-.005.102a1 1 0 0 1-.893.893L20 21h-1l-.102-.005a1 1 0 0 1-.893-.893L18 20h-7l-.005.102a1 1 0 0 1-.893.893L10 21H9l-.103-.005a1 1 0 0 1-.892-.893L8 20v-1a1 1 0 0 1 .897-.995L9 18v-7l-.103-.005a1 1 0 0 1-.892-.893L8 10V9a1 1 0 0 1 .897-.995L9 8h1zM9 20h1v-1H9zm10 0h1v-1h-1zm-8-10-.005.102a1 1 0 0 1-.893.893L10 11v7l.102.005A1 1 0 0 1 11 19h7a1 1 0 0 1 .898-.995L19 18v-7l-.102-.005a1 1 0 0 1-.893-.893L18 10zM5.103 3.005A1 1 0 0 1 6 4h7a1 1 0 0 1 .898-.995L14 3h1l.102.005A1 1 0 0 1 16 4v1l-.005.103a1 1 0 0 1-.893.892L15 6v1.5a.5.5 0 0 1-1 0V6l-.102-.005a1 1 0 0 1-.893-.892L13 5H6l-.005.103a1 1 0 0 1-.892.892L5 6v7l.103.005A1 1 0 0 1 6 14h1.5a.5.5 0 0 1 0 1H6l-.005.102a1 1 0 0 1-.892.893L5 16H4l-.103-.005a1 1 0 0 1-.892-.893L3 15v-1a1 1 0 0 1 .897-.995L4 13V6l-.103-.005a1 1 0 0 1-.892-.892L3 5V4a1 1 0 0 1 .897-.995L4 3h1zM4 15h1v-1H4zm5-5h1V9H9zm10 0h1V9h-1zM4 5h1V4H4zm10 0h1V4h-1z'
    })
  });
});
function fl() {
  let e = () => {
    fullscreenValue.triggerActionInUserEditScope('ungroup-selection');
  };
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(_$$V4, {
    variant: 'button',
    tooltip: getI18nString('fullscreen_actions.ungroup-selection'),
    tooltipShortcutActionKey: 'ungroup-selection',
    ariaLabel: getI18nString('fullscreen_actions.ungroup-selection'),
    onClick: e,
    recordingKey: 'ungroupSelection',
    children: jsx(fa, {})
  }) : jsx(K0, {
    tooltip: 'ungroup-selection',
    tooltipType: KindEnum.LOOKUP,
    svg: _$$A37,
    onClick: e,
    recordingKey: 'ungroupSelection'
  });
}
function fd() {
  return useSelector(e => {
    let t = e.mirror.selectionProperties.numSelectedByType;
    return isActionEnabled(e.mirror.appModel, 'ungroup-selection') && t && OU(t, ['FRAME', 'GROUP']);
  });
}
function fp() {
  let e = useSelectionPropertyValue('washiTapePaint');
  let t = useMemo(() => !e || isInvalidValue(e) ? null : _$$dG('fillPaints', e), [e]);
  let i = t?.data;
  let n = i && i.length > 0 ? i[0] : void 0;
  let r = e => !!e;
  return [useMemo(() => (i ?? []).map(e => {
    if (e?.type !== 'IMAGE' || !e?.image?.hash) return;
    let t = sha1HexFromBytes(e.image.hash);
    return _$$B5.find(e => e.image === t) || {
      image: t,
      name: 'w-custom',
      label: 'Custom'
    };
  }).filter(r), [i]), n];
}
function fh({
  recordingKey: e
}) {
  let [t, i] = fp();
  let n = useSelectionPropertyValue('washiTapePaintIsMixed');
  let r = t.length === 1 ? t[0] : t;
  let [a, s] = useState(!1);
  let [d, u] = useState(!1);
  useEffect(() => {
    s(!1);
  }, [i]);
  let p = () => {
    fullscreenValue.updateAppModel({
      currentSelectedProperty: {
        type: NodePropertyCategory.STROKE,
        indices: [0]
      }
    });
    Fullscreen?.uploadPaintImage('NORMAL', 1);
  };
  let h = useMemo(() => generateUUIDv4(), []);
  let m = useMemo(() => generateUUIDv4(), []);
  let f = useMemo(() => Wj(_$$B5.length + 1, getI18nString('whiteboard.inline_menu.washi_tape_pattern'), h), [h]);
  let _ = e => jsx('div', {
    'id': m,
    'className': ex()({
      [_$$H6]: e
    }),
    'aria-label': getI18nString('whiteboard.washi_tapes.custom'),
    'role': 'option',
    'aria-selected': e,
    'children': !Array.isArray(r) && _$$B5.includes(r) ? jsx(HL, {
      value: WW,
      swatchStyle: {
        fill: 'rgba(255, 255, 255, 1)',
        boxShadow: '0px 0px 0px 1px rgba(255, 255, 255, 0.6) inset'
      },
      onPointerUp: p,
      tooltip: getI18nString('whiteboard.washi_tapes.custom'),
      fallbackSvg: _$$xY2
    }) : jsx(YR, {
      imagePaint: i,
      background: 'dark',
      size: 'medium',
      selectionState: 'selected',
      hovered: a,
      onPointerUp: p,
      onMouseEnter: () => {
        s(!0);
      },
      onMouseLeave: () => {
        s(!1);
      }
    })
  });
  return jsx(Fn, {
    OptionWrapper: f,
    additionalOptionId: m,
    additionalOptionOnChange: p,
    additionalOptions: (e = !1) => _(e),
    onChange: e => {
      _$$Cs(_$$M4(e), SourceType.USER);
    },
    onToggleMenuOpen: u,
    optionEquality: (e, t) => !(Array.isArray(e) || Array.isArray(t)) && e.image === t.image,
    options: _$$B5,
    renderButton: ({
      value: t,
      ref: n,
      onClick: r,
      onKeyDown: a,
      active: s,
      activeOptionId: l
    }) => jsx(_$$$n, {
      active: s ? 'NORMAL' : 'NONE',
      ariaActiveDescendant: l,
      ariaControls: h,
      ariaLabel: getI18nString('whiteboard.inline_menu.washi_tape_pattern_selector_label', {
        currentPattern: _$$M5(t).toLocaleLowerCase()
      }),
      caret: 'down',
      onKeyDown: a,
      onPointerDown: r,
      recordingKey: generateRecordingKey(e, 'washiTapePatternSelectorButton'),
      role: 'combobox',
      tooltip: Array.isArray(t) ? getI18nString('whiteboard.delightful_toolbar.mixed') : _$$M5(t),
      children: !Array.isArray(t) && _$$B5.includes(t) ? jsx(_$$W6, {
        size: 'small',
        value: _$$M4(t),
        ref: n
      }) : jsx(YR, {
        imagePaint: i,
        background: 'dark',
        size: 'small',
        ref: n
      })
    }),
    renderOption: ({
      value: t,
      onClick: i,
      id: r,
      isSelected: a,
      isFocused: s
    }) => jsx('div', {
      'aria-label': _$$M5(t),
      'aria-selected': a,
      'className': ex()({
        [_$$H6]: s
      }),
      'data-tooltip': _$$M5(t),
      'data-tooltip-show-above': !0,
      'data-tooltip-type': KindEnum.TEXT,
      'id': r,
      'role': 'option',
      'tabIndex': -1,
      'children': jsx(_$$W6, {
        value: _$$M4(t),
        onPointerUp: e => {
          d && i(e);
        },
        selectionState: !n && a ? 'selected' : 'unselected',
        recordingKey: generateRecordingKey(e, 'washiTapePatternSelectorOption', t.name)
      })
    }, t.name),
    value: r
  });
}
function fx(e, t) {
  return {
    itemStringType: e.itemStringType,
    identifier: e.identifier,
    isActive: t
  };
}
function fg({
  item: e,
  submenuActionEnabledMap: t,
  submenuActionActiveMap: i,
  toolbarPaletteSelectionsMap: n,
  startCapDirection: r,
  endCapDirection: a,
  customWhiteboardFontSize: s,
  strokeOpacity: o,
  strokeColor: l,
  imageScale: d
}) {
  let c = [];
  let u = e.submenu.pages ? e.submenu.pages?.flatMap(e => e.items) : e.submenu.items;
  u && (u = u.flatMap(e => e.itemStringType === 'itemGroupWithFallbacks' ? e.options.flatMap(e => e) : e)).forEach(u => {
    switch (u.itemStringType) {
      case 'iconAction':
        c.push(fj({
          submenuItem: u,
          submenuActionEnabledMap: t,
          submenuActionActiveMap: i,
          startCapDirection: r,
          endCapDirection: a
        }));
        break;
      case 'textAction':
        c.push(fb({
          submenuItem: u,
          submenuActionEnabledMap: t,
          submenuActionActiveMap: i,
          customWhiteboardFontSize: s
        }));
        break;
      case 'palette':
        if (n) {
          let t = n.get(e.identifier);
          t && c.push(t);
        }
        break;
      case 'divider':
        switch (e.identifier) {
          case 'WHITEBOARD_COLOR':
            {
              let e = !!t.get('fillTypeVisible') || !!t.get('fillTypeTransparent') || !!t.get('fillTypeHidden');
              c.push({
                itemStringType: 'divider',
                identifier: u.identifier,
                isVisible: e
              });
              break;
            }
          case 'WHITEBOARD_STROKE':
            {
              let e = (!!t.get('whiteboardStrokeSolid') || !!t.get('whiteboardStrokeDashed') || !!t.get('whiteboardStrokeNone')) && (!!t.get('whiteboardStrokeThin') || !!t.get('whiteboardStrokeThick'));
              c.push({
                itemStringType: 'divider',
                identifier: 'DIVIDER_WHITEBOARD_STROKE',
                isVisible: e
              });
              break;
            }
          case 'PENCIL_STROKE':
            {
              let e = !1;
              E5.forEach((i, n) => {
                t.get(n) && (e = !0);
              });
              let i = !!t.get('CONTEXTUAL_PENCIL_OPACITY') && e;
              c.push({
                itemStringType: 'divider',
                identifier: u.identifier,
                isVisible: i
              });
              break;
            }
          case 'IMAGE_CONTROLS':
            c.push({
              itemStringType: 'divider',
              identifier: u.identifier,
              isVisible: !0
            });
        }
        break;
      case 'slider':
        switch (e.identifier) {
          case 'PENCIL_STROKE':
            if (o && l) {
              let e = isInvalidValue(o) ? 1 : o;
              let i = isInvalidValue(l) ? {
                r: 0,
                g: 0,
                b: 0,
                a: 1
              } : l;
              c.push({
                itemStringType: 'slider',
                identifier: u.identifier,
                isVisible: !!t.get(u.identifier),
                color: i,
                value: e
              });
            }
            break;
          case 'IMAGE_CONTROLS':
            c.push({
              itemStringType: 'slider',
              identifier: u.identifier,
              isVisible: !!t.get(u.identifier),
              color: {
                r: 56 / 255,
                g: 56 / 255,
                b: 56 / 255,
                a: 1
              },
              value: d ?? 1
            });
        }
        break;
      case 'actionSelector':
        c.push({
          itemStringType: 'actionSelector',
          identifier: u.identifier,
          iconImageURL: buildUploadUrl('4bec08abeba0aaba641629d741396842f7f72790'),
          submenuItemStates: fg({
            item: u,
            submenuActionEnabledMap: t,
            submenuActionActiveMap: i
          })
        });
    }
  });
  return c;
}
let fj = ({
  submenuItem: e,
  submenuActionEnabledMap: t,
  submenuActionActiveMap: i,
  startCapDirection: n,
  endCapDirection: r
}) => {
  let a = {
    itemStringType: 'iconAction',
    identifier: e.identifier,
    isActive: i.get(e.identifier) ?? !1,
    isVisible: t.get(e.identifier) ?? !1
  };
  let s = mN.includes(e.identifier);
  let o = mA.includes(e.identifier);
  s && (a.iconImageURL = mR(e.identifier, mT.START, n));
  o && (a.iconImageURL = mR(e.identifier, mT.END, r));
  return a;
};
let fb = ({
  submenuItem: e,
  submenuActionEnabledMap: t,
  submenuActionActiveMap: i,
  customWhiteboardFontSize: n
}) => {
  let r = {
    itemStringType: 'textAction',
    identifier: e.identifier,
    isActive: i.get(e.identifier) ?? !1,
    isVisible: t.get(e.identifier) ?? !1
  };
  e.identifier === mz && n && (r.decoratorText = n.toString());
  return r;
};
let fC = () => {
  let e = _$$rN();
  if (e && e.nativeContextualToolbarSupportedVersions) {
    let t = e.nativeContextualToolbarSupportedVersions.min;
    let i = e.nativeContextualToolbarSupportedVersions.max;
    let n = MY.MIN;
    let r = MY.MAX;
    if (n <= i && t <= r) return Math.min(i, r);
  }
};
let fT = () => ({
  version: MY.V5,
  identifier: 'CONTEXTUAL',
  items: Array.from(m7().values())
});
let fE = () => ({
  version: MY.V6,
  identifier: 'CONTEXTUAL',
  items: Array.from(fe().values())
});
let fS = (e, t) => {
  let i = function () {
    let e = h9();
    return new Map([[WhiteboardFeatures.RESIZE_TO_FIT, ['RESIZE_TO_FIT']], [WhiteboardFeatures.TEXT_DECORATION, ['TEXT_DECORATION_BOLD', 'TEXT_DECORATION_STRIKETHROUGH']], [WhiteboardFeatures.WHITEBOARD_COLOR, ['WHITEBOARD_COLOR']], [WhiteboardFeatures.HIGHLIGHT_COLOR, ['HIGHLIGHT_COLOR']], [WhiteboardFeatures.STICKY_COLOR, ['STICKY_COLOR']], [WhiteboardFeatures.WASHI_TAPE_PATTERN, ['WASHI_TAPE_PATTERN']], [WhiteboardFeatures.IMAGE, ['REPLACE_IMAGE', 'IMAGE_CONTROLS']], [WhiteboardFeatures.BORDER, ['IMAGE_BORDER']], [WhiteboardFeatures.WHITEBOARD_SHAPE, ['WHITEBOARD_SHAPE']], [WhiteboardFeatures.WHITEBOARD_STROKE, ['WHITEBOARD_STROKE', 'PENCIL_STROKE', 'HIGHLIGHTER_STROKE']], [WhiteboardFeatures.FONT_FAMILY, ['FONT_FAMILY']], [WhiteboardFeatures.WHITEBOARD_TEXT_STYLE, ['WHITEBOARD_TEXT_STYLE']], [WhiteboardFeatures.TEXT_ALIGN_H, ['TEXT_ALIGN']], [WhiteboardFeatures.BULLETED_LIST, [e ? 'ORDERED_LIST' : 'UNORDERED_LIST']], [WhiteboardFeatures.CONNECTOR_START_CAP, ['CONNECTOR_START_CAP']], [WhiteboardFeatures.CONNECTOR_END_CAP, ['CONNECTOR_END_CAP']], [WhiteboardFeatures.CONNECTOR_LINE_STYLE, ['CONNECTOR_LINE_STYLE']], [WhiteboardFeatures.ADD_TEXT, ['ADD_CONNECTOR_TEXT']], [WhiteboardFeatures.SECTION_SHOW_HIDE, ['SECTION_SHOW_HIDE']], [WhiteboardFeatures.SECTION_RENAME, ['SECTION_RENAME']], [WhiteboardFeatures.EMBED_OPEN_EXTERNAL, ['EMBED_OPEN_EXTERNAL']], [WhiteboardFeatures.EMBED_CONVERT_TO_TEXT, ['EMBED_CONVERT_TO_TEXT']], [WhiteboardFeatures.HYPERLINK, ['HYPERLINK']], [WhiteboardFeatures.AUTHOR_VISIBILITY, ['AUTHOR_VISIBILITY']], [WhiteboardFeatures.DIVIDER, ['DIVIDER']]]);
  }();
  let n = function () {
    let e = isAIFeaturesEnabledForCurrentUser();
    let t = _$$V5();
    let i = useSelector(e => e.mirror.appModel.activeCanvasEditModeType);
    return new Map([['TIDY_UP', Zr('tidy-up')], ['GROUP_SELECTION', Zr('group-selection')], ['UNGROUP_SELECTION', fd() ?? !1], ['CREATE_SECTION', Zr('create-section-from-selection')], ['ALIGNMENT', Zr('align-top') && i !== LayoutTabType.RASTER], ['AI_QUICK_ACTIONS', !e && t]]);
  }();
  let r = function () {
    let e = useSelectionPropertyValue('imageHasNoStroke');
    let t = useSelectionPropertyValue('sectionContentsHidden');
    let i = useSelector(e => e.mirror.appModel.onCanvasNameEditorInfo.mode === DiagramElementType.SECTION_NAME);
    let n = getObservableValue(AppStateTsApi?.editorState().selectionIsHyperlink, !1);
    let r = useSelectionPropertyValue('authorVisibility');
    return new Map([['TEXT_DECORATION_BOLD', useSelector(e => _$$N6(e.mirror.selectionProperties.fontStyle?.toString() || ''))], ['TEXT_DECORATION_STRIKETHROUGH', useSelector(e => e.mirror.selectionProperties.whiteboardTextDecoration === 'STRIKETHROUGH')], ['ORDERED_LIST', h9()], ['UNORDERED_LIST', h4()], ['IMAGE_BORDER', !1 === e], ['SECTION_SHOW_HIDE', !0 === t], ['SECTION_RENAME', i], ['HYPERLINK', !0 === n], ['AUTHOR_VISIBILITY', !0 === r]]);
  }();
  let a = function () {
    let e = useSelectionPropertyValue('sectionContentsHidden');
    let t = useSelectionPropertyValue('name');
    let i = !t || t.trim() === '';
    return new Map([['SECTION_SHOW_HIDE', e ? buildUploadUrl('4bd0b77f61f3fb82ef05fd310b8e2687b869c06a') : buildUploadUrl('84b3f8771f16c5ea90e5d8274335a9ba095035af')], ['SECTION_RENAME', i ? buildUploadUrl('88f9ce67669812647d9c63f5efc7a1c5d2524337') : buildUploadUrl('9900d0f2ba10afd0b725938bcdbd81b642b9f473')]]);
  }();
  let s = function () {
    let e = useSelectionPropertyValue('whiteboardColor');
    let t = mc();
    let [i, n] = fp();
    let r = new Map();
    [['WHITEBOARD_COLOR', 'paletteWhiteboardColor'], ['HIGHLIGHT_COLOR', 'paletteHighlightColor'], ['STICKY_COLOR', 'paletteStickyColor']].forEach(([i, n]) => {
      let a = () => {
        r.set(i, {
          itemStringType: 'palette',
          paletteIdentifier: n,
          selectionType: Ud.customColor,
          colors: Array.isArray(t) ? t : [t]
        });
      };
      if (e == null || isInvalidValue(e)) {
        a();
      } else {
        let t = my.get(i)?.map(t => _$$zS2(e, t));
        let s = t?.find(e => e !== ColorOptions.CUSTOM) ?? ColorOptions.CUSTOM;
        s !== ColorOptions.CUSTOM ? r.set(i, {
          itemStringType: 'palette',
          paletteIdentifier: n,
          selectionType: Ud.presetColor,
          presetIdentifier: _$$sE.get(s),
          color: e
        }) : a();
      }
    });
    let a = i[0];
    let s = n?.imageThumbnail?.hash;
    i.length === 1 && _$$B5.includes(a) ? r.set('WASHI_TAPE_PATTERN', {
      itemStringType: 'palette',
      paletteIdentifier: 'paletteWashiTapePattern',
      selectionType: Ud.presetImage,
      presetIdentifier: a.name
    }) : n?.type === 'IMAGE' && s && r.set('WASHI_TAPE_PATTERN', {
      itemStringType: 'palette',
      paletteIdentifier: 'paletteWashiTapePattern',
      selectionType: Ud.customImage,
      imageIdentifier: sha1HexFromBytes(s)
    });
    return r;
  }();
  let o = function () {
    let e;
    switch (useSelectionPropertyValue('whiteboardTextAlignHorizontal')) {
      case 'CENTER':
        e = buildUploadUrl('d229c1db5d7709c1242ee4743c6ccf918e955dbb');
        break;
      case 'LEFT':
      default:
        e = buildUploadUrl('ffa1896c3a7c5ebb5a9faca54ab4b262d625d113');
        break;
      case 'RIGHT':
        e = buildUploadUrl('e1b765fa3f0498e863004a473d9afd59791fa85d');
    }
    let t = useSelectionPropertyValue('connectorStartCapDirection');
    let i = useSelectionPropertyValue('connectorEndCapDirection');
    let n = mM();
    let r = mD();
    let a = useSelectionPropertyValue('connectorLineStyleForSelection');
    let s = mK();
    let o = Object.keys(pR).find(e => {
      let t = pR[e];
      if (void 0 !== s) return s[0] === t.fontFamily;
    });
    return new Map([['WHITEBOARD_SHAPE', buildUploadUrl('d8365bd2d17cecaa713c289f051114fdf6590505')], ['WHITEBOARD_STROKE', buildUploadUrl('7f22083a673f802cfe0bddda8f70e81b4c45240a')], ['PENCIL_STROKE', buildUploadUrl('e138358eb8b3a07efda73c406e4c61cc3d9fe6d3')], ['HIGHLIGHTER_STROKE', buildUploadUrl('c1837ca930ad93b0f6cc7e262e425757c34bca44')], ['TEXT_ALIGN', e], ['CONNECTOR_START_CAP', mk.get(t)?.get(n) ?? buildUploadUrl('deb5540ae4b6484e3bdb0025b52bf8e71a79391c')], ['CONNECTOR_END_CAP', mk.get(i)?.get(r) ?? buildUploadUrl('53332df23dae692567e44b5c3321d0ec811c23d5')], ['CONNECTOR_LINE_STYLE', a === 'STRAIGHT' ? mC : mv], ['ALIGNMENT', buildUploadUrl('01f4cc9eee24ffbf868d0a33aaaf8e82033a5d93')], ['FONT_FAMILY', mG.get(o) ?? buildUploadUrl('4d90c5e665fa16415b0b261e302696e4c706553a')], ['IMAGE_CONTROLS', buildUploadUrl('24060631afd5e4b0d2e5ace6f05f016f79b67f2b')]]);
  }();
  let l = function () {
    let e = mY();
    let t = getI18nString('whiteboard.text_sizes.custom');
    if (e && e.length > 0) {
      let i = e[0];
      if (e.length > 1) {
        t = getI18nString('whiteboard.inline_menu.font_size_mixed');
      } else {
        let e = m$().find(e => {
          let t = e.identifier.substring(mW.length);
          return t in h_ && h_[t].maxValue === i;
        });
        e && (t = e.text);
      }
    }
    return new Map([['WHITEBOARD_TEXT_STYLE', t]]);
  }();
  let u = function () {
    let e = _$$w3();
    let t = _$$tA();
    let i = XH();
    let n = I9();
    let r = n?.every(e => e?.type === 'VECTOR') ?? !1;
    let a = n?.every(e => e?.type === 'HIGHLIGHT') ?? !1;
    return new Map([['WHITEBOARD_STROKE', t || i], ['PENCIL_STROKE', e && r], ['HIGHLIGHTER_STROKE', e && a]]);
  }();
  let p = generateSessionId();
  let h = fI(!1, p);
  let f = useSelectionPropertyValue('locked');
  let _ = function () {
    let e = mb();
    let t = hG(hV());
    let i = _$$w3();
    let n = _$$tA();
    let r = XH();
    let a = function () {
      let e = [];
      for (let t in mT) {
        mE.forEach(i => {
          e.push([mI(t, i), !0]);
        });
      }
      return e;
    }();
    let s = mp.map(e => [e, !0]);
    let o = mV().map(e => [e.identifier, !0]);
    let l = function () {
      let e = mY();
      return m$().map(t => {
        if (t.identifier === mz) {
          if (!e || e.length === 0) return [t.identifier, !1];
          let i = e.some(e => !hp.includes(e));
          return [t.identifier, i];
        }
        return [t.identifier, !0];
      });
    }();
    let d = function () {
      let e = Uq();
      return mq().map(t => t.identifier === 'CIRCLE' ? [t.identifier, e] : [t.identifier, !0]);
    }();
    let u = new Map([['fillTypeVisible', e && t.includes(VisibilityState.VISIBLE)], ['fillTypeTransparent', e && t.includes(VisibilityState.TRANSPARENT)], ['fillTypeHidden', e && t.includes(VisibilityState.HIDDEN)], ['whiteboardStrokeSolid', n], ['whiteboardStrokeDashed', n], ['whiteboardStrokeNone', r], ['whiteboardStrokeThin', i], ['whiteboardStrokeThick', i], ['textAlignLeft', !0], ['textAlignCenter', !0], ['textAlignRight', !0], ...a, ['connectorLineStraight', !0], ['connectorLineElbowed', !0], ['imageCropSlider', !0], ['imageRotate', !0], ...s, ...o, ...l, ...d, ['CONTEXTUAL_PENCIL_OPACITY', !0]]);
    E5.forEach((e, t) => {
      u.set(t, i);
    });
    _$$tj.forEach((e, t) => {
      u.set(t, i);
    });
    _$$p6.forEach(e => {
      e.items.forEach(e => {
        u.set(e.identifier, !0);
      });
    });
    return u;
  }();
  let x = function () {
    let e = useSelectionPropertyValue('shapeWithTextFillType');
    let t = useSelectionPropertyValue('connectorTextBackgroundTransparent');
    let i = useSelectionPropertyValue('platformShapeFillType');
    let n = mb();
    let r = hK(hV(), e, t, i);
    let a = useSelectionPropertyValue('whiteboardStrokeStyle');
    let s = useSelectionPropertyValue('whiteboardStrokeWeight');
    let o = useSelectionPropertyValue('whiteboardTextAlignHorizontal');
    let l = function () {
      let e = mM();
      let t = mD();
      let i = [];
      for (let n in mT) {
        let r = n === 'START' ? e : t;
        mE.forEach(e => {
          i.push([mI(n, e), r === e]);
        });
      }
      return i;
    }();
    let d = useSelectionPropertyValue('connectorLineStyleForSelection');
    let u = mp.map(e => [e, !1]);
    let p = function () {
      let e = mK();
      return mV().map(t => {
        let i = t.identifier.substring(mF.length);
        return [t.identifier, e?.includes(pR[i].fontFamily) ?? !1];
      });
    }();
    let h = function () {
      let e = mY();
      return m$().map(t => {
        if (t.identifier === mz) return [t.identifier, !0];
        {
          let i = t.identifier.substring(mW.length);
          let n = !1;
          i in h_ && (n = e?.includes(h_[i].maxValue) ?? !1);
          return [t.identifier, n];
        }
      });
    }();
    let m = function () {
      let e = Mv();
      return mq().map(t => [t.identifier, t.identifier === `${mX}${e}`]);
    }();
    let f = _$$eX('VECTOR');
    let _ = _$$eX('HIGHLIGHT');
    let x = Ru(s ?? 0, f ? 'VECTOR' : _ ? 'HIGHLIGHT' : 'NONE');
    let g = new Map([['fillTypeVisible', n && r === VisibilityState.VISIBLE], ['fillTypeTransparent', n && r === VisibilityState.TRANSPARENT], ['fillTypeHidden', n && r === VisibilityState.HIDDEN], ['whiteboardStrokeSolid', a === 'solid'], ['whiteboardStrokeDashed', a === 'dashed'], ['whiteboardStrokeNone', a === 'none'], ['whiteboardStrokeThin', x === 'THIN'], ['whiteboardStrokeThick', x === 'THICK'], ['textAlignLeft', o === 'LEFT'], ['textAlignCenter', o === 'CENTER'], ['textAlignRight', o === 'RIGHT'], ...l, ['connectorLineStraight', d === 'STRAIGHT'], ['connectorLineElbowed', d === 'ELBOWED'], ...u, ...p, ...h, ...m]);
    E5.forEach((e, t) => {
      g.set(t, s === e);
    });
    _$$tj.forEach((e, t) => {
      g.set(t, s === e);
    });
    let j = useSelectionPropertyValue('shapeWithTextTypeForSelection');
    _$$p6.forEach(e => {
      e.items.forEach(e => {
        g.set(e.identifier, e.identifier === j);
      });
    });
    return g;
  }();
  let g = h1('MENU', h0.CONTEXTUAL_TOOLBAR);
  let j = useSelector(e => e.mirror.appModel.activeCanvasEditModeType);
  let b = useSelectionPropertyValue('connectorStartCapDirection');
  let y = useSelectionPropertyValue('connectorEndCapDirection');
  let v = mY();
  let T = useSelectionPropertyValue('opacity');
  let E = useSelectionPropertyValue('whiteboardColor');
  let S = _$$nB2();
  let w = function () {
    let e = v1();
    let t = _$$cF();
    let i = _$$a6();
    let n = [];
    if (e && n.push(m3().identifier), t && n.push(m2().identifier), !n.length) return null;
    let r = i ? getI18nString('whiteboard.inline_menu.ai_quick_actions_dropdown_mobile_disclaimer') : getI18nString('whiteboard.inline_menu.ai_quick_actions_dropdown_mobile_disclaimer.ga');
    return {
      itemStringType: 'menu',
      identifier: m6().identifier,
      visibleActionIdentifiers: [],
      visibleActionGroups: [{
        title: r,
        actionIdentifiers: n
      }, {
        actionIdentifiers: [m5().identifier]
      }],
      requiredFields: ['visibleActionGroups']
    };
  }();
  let I = 0;
  let L = () => {
    let e = mP(I);
    I++;
    return e;
  };
  if (void 0 === e) return null;
  if (f) {
    return {
      version: e,
      identifier: 'CONTEXTUAL',
      itemStates: [fx(m8, !1)],
      anchorPoints: h,
      id: p
    };
  }
  let N = [];
  if (t) {
    for (let n of t) {
      i.get(n)?.map(t => {
        if (t === 'DIVIDER') return L();
        switch (e) {
          case MY.V5:
            return m7().get(t);
          case MY.V6:
            return fe().get(t);
        }
      }).filter(e => !!e).flatMap(e => e.itemStringType === 'itemGroupWithFallbacks' ? e.options.flatMap(e => e) : e).forEach(e => {
        switch (e.itemStringType) {
          case 'action':
            let t = e.identifier;
            N.push({
              itemStringType: 'action',
              identifier: t,
              isActive: r.get(t) ?? !1,
              iconImageURL: a.get(t)
            });
            return;
          case 'paletteSelector':
            let i = fg({
              item: e,
              submenuActionEnabledMap: _,
              submenuActionActiveMap: x,
              toolbarPaletteSelectionsMap: s
            });
            N.push({
              itemStringType: 'paletteSelector',
              identifier: e.identifier,
              submenuItemStates: i
            });
            return;
          case 'actionSelector':
            let n = e.identifier;
            if (!(u.get(n) ?? !0)) return;
            let d = fg({
              item: e,
              submenuActionEnabledMap: _,
              submenuActionActiveMap: x,
              startCapDirection: b,
              endCapDirection: y,
              customWhiteboardFontSize: v?.find(e => Object.values(h_).every(t => t.maxValue !== e)),
              strokeOpacity: T,
              strokeColor: E,
              imageScale: S
            });
            N.push({
              itemStringType: 'actionSelector',
              identifier: e.identifier,
              submenuItemStates: d,
              iconImageURL: o.get(n),
              label: l.get(n)
            });
            return;
          case 'imageSelector':
            j !== LayoutTabType.RASTER && N.push(e);
            return;
          case 'divider':
            N.length > 0 && N[N.length - 1].itemStringType !== 'divider' && N.push(e);
        }
      });
    }
  }
  n.get('ALIGNMENT') && N.push({
    itemStringType: 'actionSelector',
    identifier: 'ALIGNMENT',
    iconImageURL: buildUploadUrl('01f4cc9eee24ffbf868d0a33aaaf8e82033a5d93'),
    submenuItemStates: fg({
      item: mf,
      submenuActionEnabledMap: _,
      submenuActionActiveMap: x
    })
  });
  n.get('TIDY_UP') && N.push(fx(mJ, !1));
  n.get('GROUP_SELECTION') && N.push(fx(mQ, !1));
  n.get('UNGROUP_SELECTION') && N.push(fx(m0, !1));
  n.get('CREATE_SECTION') && N.push(fx(m1, !1));
  n.get('AI_QUICK_ACTIONS') && w && N.push(w);
  N.length && N[N.length - 1].itemStringType !== 'divider' && N.push(L());
  N.push(fx(m4, !1));
  N.push(g);
  N.push(fx(m9, !1));
  return {
    version: e,
    identifier: 'CONTEXTUAL',
    itemStates: N,
    anchorPoints: h,
    id: p
  };
};
function fw({
  displayStateRef: e,
  anchorPointsStateRef: t
}) {
  let i = _$$rN();
  let n = fS(fC(), selectWithShallowEqual(e => e.mirror.selectionProperties.whiteboardControls));
  !n || deepEqual(n.itemStates, e.current?.itemStates) && deepEqual({
    ...n.anchorPoints,
    displayStateId: null
  }, {
    ...e.current?.anchorPoints,
    displayStateId: null
  }) || (i?.nativeContextualToolbarUpdateDisplayState?.(n), e.current = n);
  return jsx(fL, {
    anchorPointsStateRef: t,
    displayStateId: e.current?.id
  });
}
let fI = (e, t) => {
  let i = hw();
  let n = getObservableOrFallback(AppStateTsApi.canvasViewState().selectionBoundingRect);
  let r = getObservableOrFallback(AppStateTsApi.canvasViewState().inlineMenuTarget);
  let a = r?.boundingBox || n;
  let s = v2();
  let o = getViewportInfo({
    subscribeToUpdates_expensive: e
  });
  let u = scaleRect(o, a);
  let h = useSelector(({
    mirror: {
      appModel: e
    }
  }) => [UserActionState.DEFAULT, UserActionState.SELECTING_TEXT].includes(e.activeUserAction));
  let m = WC();
  let f = T$();
  let _ = useSelector(e => e.universalInsertModal);
  let x = _$$wi();
  let g = useSelector(e => e.universalInsertModal.pinned !== 'NOT_PINNED');
  let j = !!useAtomWithSubscription(_$$ph);
  let b = !!useAtomWithSubscription(LQ);
  let y = useSelector(({
    mirror: {
      appModel: e
    }
  }) => e.showUi);
  let v = _$$_o();
  let T = useRef({});
  let E = useSelector(e => e.mirror.sceneGraphSelection);
  let S = useRef(null);
  let w = useSelector(e => e.mirror.appModel.activeCanvasEditModeType);
  let I = w === LayoutTabType.RASTER;
  let L = S.current === LayoutTabType.RASTER;
  let A = Object.keys(E);
  let k = Object.keys(T.current);
  let R = !(A.length === k.length && k.every(e => A.includes(e)));
  if (T.current = E, S.current = w, !t) return null;
  let M = new Vector2D(_.initialX, _.initialY);
  let D = new Vector2D(_$$gR, zo);
  let P = new Vector2D(u.x, u.y);
  let U = new Vector2D(u.width, u.height);
  let F = g && new Rectangle(M, D).containsIncludingBoundary(new Rectangle(P, U));
  if (u.y + u.height <= VA() + v || !isRectInside(u, o) || !i || !h || F || a.x === 1 / 0 || a.y === 1 / 0 || m || f || x && !g || j || b) return null;
  let H = _$$j0();
  let B = y ? 0 : H;
  let V = {
    x: a.x + a.width / 2,
    y: a.y
  };
  let G = viewportToScreen(o, V);
  let K = {
    x: G.x,
    y: G.y + H - s - B
  };
  let W = {
    x: a.x + a.width / 2,
    y: a.y + a.height
  };
  let z = viewportToScreen(o, W);
  return {
    above: K,
    below: {
      x: z.x,
      y: z.y + H + s - B
    },
    displayStateId: t,
    selectionChanged: R,
    shouldResetToolbar: L && !I || R
  };
};
function fL({
  anchorPointsStateRef: e,
  displayStateId: t
}) {
  let i = fI(!0, t);
  let n = _$$rN();
  let r = useRef(!1);
  let a = useCallback(() => {
    n?.nativeContextualToolbarUpdateAnchorPoints && t && !deepEqual(e.current, i) && (n.nativeContextualToolbarUpdateAnchorPoints(i), e.current = i);
  }, [i, e, t, n]);
  let s = useDebouncedCallback(() => {
    a();
    r.current = !1;
  }, 100);
  let o = getViewportInfo({
    subscribeToUpdates_expensive: !1
  });
  let d = useLatestRef(o.y);
  let c = o.y !== d;
  useEffect(() => {
    c ? (r.current = !0, s()) : r.current || a();
  }, [s, a, c]);
  return null;
}
let fN = () => {
  let e = getObservableOrFallback(AppStateTsApi.canvasViewState().selectionBoundingRect);
  let t = getObservableOrFallback(AppStateTsApi.canvasViewState().inlineMenuTarget);
  let i = t?.boundingBox || e;
  let n = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  if (i.x === 1 / 0 || i.y === 1 / 0) return null;
  let r = {
    x: i.x + i.width / 2,
    y: i.y + i.height / 2
  };
  return viewportToScreen(n, r);
};
function fA(e) {
  let t = BI();
  let i = fN();
  let {
    commentPosition,
    setShouldAddComment
  } = e;
  let a = 10 * Math.random();
  let s = 10 * Math.random();
  let d = i ? {
    x: i.x + a,
    y: i.y + s
  } : null;
  let c = commentPosition ?? d;
  if (c) {
    let {
      x,
      y
    } = c;
    t?.requestToAddDraftCommentPin?.({
      x: Math.round(x),
      y: Math.round(y),
      width: 32 * 1.15,
      height: 32 * 1.15
    });
  }
  useEffect(() => {
    setShouldAddComment(!1);
  }, [setShouldAddComment]);
  return jsx(Fragment, {});
}
function fO(e) {
  let {
    contextMenuPosition,
    setShouldUpdateMenu
  } = e;
  let n = _$$rN();
  let r = fC();
  let a = h1('MENU', h0.CANVAS);
  r && n?.nativeContextualToolbarUpdateMenuState?.({
    version: r,
    menuState: a,
    position: contextMenuPosition
  });
  useEffect(() => {
    setShouldUpdateMenu(!1);
  }, [setShouldUpdateMenu]);
  return jsx(Fragment, {});
}
let fk = e => {
  if (void 0 !== e) {
    switch (e) {
      case MY.V5:
        return fT();
      case MY.V6:
        return fE();
      default:
        throwTypeError(e);
    }
  }
};
function fR() {
  let e = kM();
  let t = function () {
    let e = _$$Xb();
    let [t, i] = useSelectionProperty('sectionContentsHidden');
    let n = ma();
    let r = _$$f5();
    let a = _$$o6(SourceType.USER);
    let [s, o] = useSelectionProperty('authorVisibility');
    return new Map([['TEXT_DECORATION_BOLD', () => Jm('toggle-bold')], ['TEXT_DECORATION_STRIKETHROUGH', () => Jm('text-toggle-strikethrough')], ['TIDY_UP', () => Jm('tidy-up')], ['CREATE_SECTION', () => Jm('create-section-from-selection')], ['GROUP_SELECTION', () => Jm('group-selection')], ['UNGROUP_SELECTION', () => Jm('ungroup-selection')], ['RESIZE_TO_FIT', () => Jm('resize-to-fit')], ['DUPLICATE', () => {
      Jm('leave-edit-mode');
      Jm('duplicate-in-place');
    }], ['DELETE', () => {
      Jm('leave-edit-mode');
      Jm('delete-selection');
    }], ['UNLOCK', () => Jm('unlock-selected-nodes')], ['ORDERED_LIST', () => Jm('text-toggle-ordered-list')], ['UNORDERED_LIST', () => Jm('text-toggle-unordered-list')], ['IMAGE_BORDER', () => e()], ['SECTION_SHOW_HIDE', () => i(!t)], ['SECTION_RENAME', () => n()], ['EMBED_OPEN_EXTERNAL', () => r()], ['EMBED_CONVERT_TO_TEXT', () => a()], ['HYPERLINK', () => fullscreenValue.triggerAction('text-edit-hyperlink')], ['AUTHOR_VISIBILITY', () => o(!s)], ['ADD_CONNECTOR_TEXT', () => Jm('add-connector-text')]]);
  }();
  useEffect(() => {
    e && (e._native_contextual_toolbar_perform_action = e => {
      t.get(e)?.();
    });
  }, [t, e]);
  let i = hV();
  let n = useUpdateSelectionProperty('shapeWithTextTypeForSelection');
  let r = useUpdateSelectionProperty('shapeWithTextFillType');
  let a = useUpdateSelectionProperty('connectorTextBackgroundTransparent');
  let s = useUpdateSelectionProperty('platformShapeFillType');
  let u = useUpdateSelectionProperty('whiteboardStrokeStyle');
  let p = useUpdateSelectionProperty('whiteboardStrokeWeight');
  let h = useUpdateSelectionProperty('connectorStartCapForSelection');
  let m = useUpdateSelectionProperty('connectorEndCapForSelection');
  let f = useUpdateSelectionProperty('connectorLineStyleForSelection');
  let _ = useUpdateSelectionProperty('whiteboardFontFamilies');
  let x = useUpdateSelectionProperty('whiteboardFontSizes');
  let g = _$$te();
  useEffect(() => {
    e && (e._native_contextual_toolbar_activate_submenu_item = e => {
      let t = e;
      switch (_$$U3.includes(e) ? t = 'SHAPE_NAME' : mN.includes(e) ? t = 'START_CAP_TYPE' : mA.includes(e) ? t = 'END_CAP_TYPE' : mp.includes(e) ? t = 'ALIGNMENT' : e.startsWith(mF) ? t = 'FONT_FAMILY' : e.startsWith(mW) ? t = 'FONT_SIZE' : e.startsWith(mX) ? t = 'IMAGE_CROP' : _$$k7.includes(e) ? t = 'HIGHLIGHTER_STROKE_WIDTH' : X4.includes(e) && (t = 'PENCIL_STROKE_WIDTH'), t) {
        case 'fillTypeVisible':
          hB(VisibilityState.VISIBLE, i, r, a, s);
          break;
        case 'fillTypeTransparent':
          hB(VisibilityState.TRANSPARENT, i, r, a, s);
          break;
        case 'fillTypeHidden':
          hB(VisibilityState.HIDDEN, i, r, a, s);
          break;
        case 'whiteboardStrokeSolid':
          u('solid');
          break;
        case 'whiteboardStrokeDashed':
          u('dashed');
          break;
        case 'whiteboardStrokeNone':
          u('none');
          break;
        case 'whiteboardStrokeThin':
          p(_$$wv5);
          break;
        case 'whiteboardStrokeThick':
          p(_$$uM);
          break;
        case 'PENCIL_STROKE_WIDTH':
          {
            let t = E5.get(e);
            t && p(t);
            break;
          }
        case 'HIGHLIGHTER_STROKE_WIDTH':
          {
            let t = _$$tj.get(e);
            t && p(t);
            break;
          }
        case 'textAlignLeft':
          p8('LEFT');
          break;
        case 'textAlignCenter':
          p8('CENTER');
          break;
        case 'textAlignRight':
          p8('RIGHT');
          break;
        case 'connectorLineStraight':
          f('STRAIGHT');
          break;
        case 'connectorLineElbowed':
          f('ELBOWED');
          break;
        case 'START_CAP_TYPE':
          let o = mL(e);
          let l = o != null ? mS.get(o) : null;
          l && h(l);
          break;
        case 'END_CAP_TYPE':
          let d = mL(e);
          let j = d != null ? mS.get(d) : null;
          j && m(j);
          break;
        case 'SHAPE_NAME':
          n(e);
          break;
        case 'ALIGNMENT':
          let b = mj.get(e);
          b && Jm(b);
          break;
        case 'FONT_FAMILY':
          let y = e.substring(mF.length);
          y in pR && _([pR[y].fontFamily]);
          break;
        case 'FONT_SIZE':
          let v = e.substring(mW.length);
          mZ.includes(v) && x([h_[v].maxValue]);
          break;
        case 'IMAGE_CROP':
          let C = e.substring(mX.length);
          C && Id.has(C) && (fullscreenValue.triggerActionInUserEditScope('crop-image'), g?.(C));
          break;
        case 'imageRotate':
          fullscreenValue.triggerActionInUserEditScope('rotate-image-90-clockwise');
      }
    });
  }, [e, i, f, a, m, g, s, n, r, h, u, p, _, x]);
  let y = function () {
    let e = new Map();
    e.set('WHITEBOARD_COLOR', new Map(LK('WHITEBOARD_COLOR').map(([e, t]) => [t, e])));
    e.set('HIGHLIGHT_COLOR', new Map(LK('HIGHLIGHTER').map(([e, t]) => [t, e])));
    e.set('STICKY_COLOR', new Map(LK('STICKY').map(([e, t]) => [t, e])));
    return e;
  }();
  let v = useUpdateSelectionProperty('whiteboardColor');
  useEffect(() => {
    e && (e._native_toolbar_set_palette_color = (e, t) => {
      v(t);
    }, e._native_toolbar_set_palette_preset = (e, t) => {
      if (e === 'WASHI_TAPE_PATTERN') {
        let e = _$$B5.find(e => e.name === t);
        e && _$$Cs(_$$M4(e), SourceType.USER);
        return;
      }
      let i = y.get(e)?.get(t);
      i && v(i);
    }, e._native_toolbar_set_palette_image_data = (e, t, i) => {
      if (e === 'WASHI_TAPE_PATTERN') {
        let e = base64ToUint8Array(i);
        fullscreenValue.updateAppModel({
          currentSelectedProperty: {
            type: NodePropertyCategory.STROKE,
            indices: [0]
          }
        });
        Fullscreen.setCustomWashiTapeImageFromFile(e);
      }
    });
  }, [y, e, v]);
  let C = noop();
  useEffect(() => {
    e && (e._native_toolbar_set_image_selector_data = (e, t, i) => {
      if (e !== 'REPLACE_IMAGE' || !C) return;
      let {
        paint,
        paintIndex
      } = C;
      let a = base64ToUint8Array(i);
      fullscreenValue.updateAppModel({
        currentSelectedProperty: {
          type: NodePropertyCategory.FILL,
          indices: [paintIndex]
        }
      });
      let s = paint.blendMode || 'NORMAL';
      let o = paint.opacity || 1;
      Fullscreen.replaceImageFromFile({
        data: a,
        mimeType: t,
        name: 'File'
      }, s, o);
    });
  }, [C, e]);
  let [T, E] = useState({
    x: 0,
    y: 0
  });
  let [S, w] = useState(!1);
  let [I, L] = useState(null);
  let [N, A] = useState(!1);
  let O = _$$dA();
  let k = h1('MENU', h0.CANVAS);
  let R = fC();
  useEffect(() => {
    R && e && (e._native_contextual_toolbar_get_canvas_context_menu_state = () => ({
      version: R,
      menuState: k,
      position: T
    }));
  }, [T, k, e, R]);
  let M = useAppModelProperty('showUi');
  useEffect(() => {
    e && (e._native_contextual_toolbar_perform_menu_action = (e, t, i) => {
      switch (e) {
        case 'MENU':
          Jm('set-tool-default');
          let n = hJ.get(t);
          n ? Jm(n) : t === 'ADD_COMMENT' && (L(i), A(!0));
          break;
        case 'AI_QUICK_ACTIONS':
          switch (t) {
            case 'AI_SUMMARIZE':
              O({
                type: _$$Ay6.SUMMARIZE,
                enabled: !0
              });
              break;
            case 'AI_SORT':
              O({
                type: _$$Ay6.CLUSTER,
                enabled: !0
              });
              break;
            case 'AI_LEARN_MORE':
              customHistory.unsafeRedirect(_$$nG2, '_blank');
          }
      }
    }, e._native_contextual_toolbar_request_menu_items = e => {
      E(e);
      w(!0);
    });
  }, [e, O, M]);
  let D = useSelector(({
    mirror: {
      appModel: e
    }
  }) => e.activeUserAction === UserActionState.RESIZING);
  useEffect(() => {
    e && (e._native_contextual_toolbar_web_notification = e => {
      switch (e) {
        case 'enterCropMode':
          fullscreenValue.triggerActionInUserEditScope('crop-image');
          break;
        case 'exitCropMode':
          D || Jm('leave-edit-mode');
      }
    });
  }, [e, D]);
  let P = useRef(null);
  let U = useRef(null);
  let F = useSelector(e => e.mirror.appModel.isReadOnly);
  return jsxs(Fragment, {
    children: [F ? null : jsx(fw, {
      displayStateRef: P,
      anchorPointsStateRef: U
    }), S ? jsx(fO, {
      contextMenuPosition: T,
      setShouldUpdateMenu: w
    }) : null, N ? jsx(fA, {
      commentPosition: I,
      setShouldAddComment: A
    }) : null]
  });
}
let fD = 'animated_lock_svg--active--fHnjO';
let fP = {
  duration: 500,
  fill: 'forwards'
};
let fU = {
  duration: 250,
  fill: 'forwards'
};
var fF = (e => (e[e.LOCKED = 0] = 'LOCKED', e[e.UNLOCKED = 1] = 'UNLOCKED', e))(fF || {});
function fH(e) {
  return e.map(e => new Animation(e, document.timeline));
}
function fB(e, t) {
  let [i, n] = useState([]);
  let [r, a] = useState([]);
  let s = useRef(null);
  let d = useRef(null);
  useLayoutEffect(() => {
    n(fH([new KeyframeEffect(s.current, [{
      transform: 'translateY(2px)',
      offset: 0,
      easing: 'linear'
    }, {
      transform: 'translateY(3px)',
      offset: 0.4,
      easing: 'ease-out'
    }, {
      transform: 'translateY(4px)',
      offset: 0.6,
      easing: 'ease-out'
    }, {
      transform: 'translateY(0px)',
      offset: 1
    }], fP), new KeyframeEffect(s.current, [{
      strokeDashoffset: -2,
      offset: 0,
      easing: 'linear'
    }, {
      strokeDashoffset: -2,
      offset: 0.4,
      easing: 'ease-out'
    }, {
      strokeDashoffset: -2,
      offset: 0.6,
      easing: 'ease-out'
    }, {
      strokeDashoffset: 0,
      offset: 1
    }], fP), new KeyframeEffect(d.current, [{
      transform: 'translateY(0px)',
      offset: 0,
      easing: 'linear'
    }, {
      transform: 'translateY(1px)',
      offset: 0.4,
      easing: 'ease-out'
    }, {
      transform: 'translateY(1px)',
      offset: 0.6,
      easing: 'ease-out'
    }, {
      transform: 'translateY(0px)',
      offset: 1
    }], fP)]));
    a(fH([new KeyframeEffect(s.current, [{
      transform: 'translateY(0px)',
      offset: 0,
      easing: 'ease-out'
    }, {
      transform: 'translateY(2px)',
      offset: 1
    }], fU), new KeyframeEffect(s.current, [{
      strokeDashoffset: 0,
      offset: 0,
      easing: 'ease-out'
    }, {
      strokeDashoffset: -2,
      offset: 1
    }], fU)]));
  }, [n, a]);
  let c = useCallback(e => {
    e.forEach(e => {
      e.playbackRate = 1;
      e.play();
    });
  }, []);
  let u = useCallback(e => {
    e.forEach(e => {
      e.cancel();
    });
  }, []);
  return {
    unlockAnimation: () => {
      u(r);
      c(i);
    },
    lockAnimation: () => {
      u(i);
      c(r);
    },
    AnimatedLockSvg: jsxs('svg', {
      className: 'animated_lock_svg--lockSvg--vBUvA',
      width: '40',
      height: '40',
      viewBox: '0 0 40 40',
      fill: 'none',
      children: [jsx('rect', {
        className: ex()('animated_lock_svg--lockBody--h8eXF', {
          [fD]: t
        }),
        x: '14.5',
        y: '18.5',
        width: '11',
        height: '7',
        ref: d
      }), jsx('path', {
        className: ex()('animated_lock_svg--lockShackle--Zaieb', {
          [fD]: t,
          'animated_lock_svg--locked--eN8B-': e === 0
        }),
        d: 'M23.5 18V15C23.5 13.067 21.933 11.5 20 11.5V11.5C18.067 11.5 16.5 13.067 16.5 15L16.5 16',
        ref: s
      })]
    })
  };
}
function fG(e) {
  let {
    lockAnimation,
    unlockAnimation,
    AnimatedLockSvg
  } = fB(fF.LOCKED);
  return e.shouldAnimateOnHover ? getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(_$$V4, {
    tooltip: getI18nString('whiteboard.inline_menu.unlock'),
    ariaLabel: getI18nString('whiteboard.inline_menu.unlock'),
    dataTestId: 'unlock-control-v2',
    htmlAttributes: {
      onMouseEnter: unlockAnimation,
      onMouseLeave: lockAnimation
    },
    onClick: () => fullscreenValue.triggerActionInUserEditScope('unlock-selected-nodes'),
    recordingKey: 'unlockV2',
    variant: 'button',
    children: AnimatedLockSvg
  }) : jsx(_$$$n, {
    tooltip: getI18nString('whiteboard.inline_menu.unlock'),
    onClick: () => fullscreenValue.triggerActionInUserEditScope('unlock-selected-nodes'),
    recordingKey: 'unlockV2',
    onMouseEnter: unlockAnimation,
    onMouseLeave: lockAnimation,
    testId: 'unlock-control-v2',
    buttonStyle: {
      padding: '0px'
    },
    children: AnimatedLockSvg
  }) : getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(_$$V4, {
    'variant': 'button',
    'tooltip': getI18nString('whiteboard.inline_menu.unlock'),
    'onClick': () => fullscreenValue.triggerActionInUserEditScope('unlock-selected-nodes'),
    'recordingKey': 'unlock',
    'data-testid': 'unlock-control',
    'ariaLabel': getI18nString('whiteboard.inline_menu.unlock'),
    'children': jsx(_$$$4, {})
  }) : jsx(K0, {
    svg: _$$A38,
    tooltip: getI18nString('whiteboard.inline_menu.unlock'),
    onClick: () => fullscreenValue.triggerActionInUserEditScope('unlock-selected-nodes'),
    recordingKey: 'unlock',
    testId: 'unlock-control',
    svgStyle: {
      stroke: 'var(--color-icon-menu-secondary)',
      fill: 'none'
    }
  });
}
class fK extends _$$c$3 {}
var fW = (e => (e.LOCK_ALL = 'lock_all', e.LOCK_SECTION_BACKGROUND_ONLY = 'lock_section_background_only', e))(fW || {});
let fz = ['lock_all', 'lock_section_background_only'];
let fZ = () => ({
  lock_all: getI18nString('whiteboard.inline_menu.lock_all'),
  lock_section_background_only: getI18nString('whiteboard.inline_menu.lock_background_only')
});
function f$() {
  let [e, t] = useState([]);
  let [i, n] = useState(!1);
  let [r, a] = useState(!1);
  let s = useRef(null);
  let d = useRef(null);
  let c = useRef(null);
  let {
    lockAnimation,
    unlockAnimation,
    AnimatedLockSvg
  } = fB(fF.LOCKED, r);
  let m = (c.current?.getBoundingClientRect().width || 0) + 40;
  useLayoutEffect(() => {
    t([new KeyframeEffect(d.current, [{
      maxWidth: '40px'
    }, {
      maxWidth: `${m}px`
    }], {
      duration: 200,
      fill: 'forwards',
      easing: 'ease-out'
    }), new KeyframeEffect(c.current, [{
      opacity: '0'
    }, {
      opacity: '1'
    }], {
      duration: 200,
      fill: 'forwards'
    })].map(e => new Animation(e, document.timeline)));
  }, [m]);
  let f = useCallback(e => {
    e.forEach(e => {
      e.playbackRate = 1;
      e.play();
    });
  }, []);
  return jsx(ButtonPrimitive, {
    'className': 'lock_control--buttonWrapper--Xlvr9',
    'onClick': () => {
      i ? fullscreenValue.triggerActionInUserEditScope('unlock-selected-nodes') : (n(!0), f(e));
    },
    'ref': s,
    'htmlAttributes': {
      'onMouseEnter': () => {
        unlockAnimation();
        a(!0);
      },
      'onMouseLeave': () => {
        lockAnimation();
        a(!1);
      },
      'data-tooltip-type': i ? void 0 : 'text',
      'data-tooltip': i ? void 0 : getI18nString('whiteboard.inline_menu.unlock'),
      'data-testid': 'unlock-with-friction-control'
    },
    'recordingKey': 'unlock-with-friction-control',
    'aria-label': i ? void 0 : getI18nString('whiteboard.inline_menu.unlock'),
    'children': jsxs('div', {
      className: 'lock_control--button--XGLsY',
      ref: d,
      children: [AnimatedLockSvg, jsx('span', {
        className: 'lock_control--text--YFFB- text--fontNeg11--StdFq text--_fontBase--QdLsd text--_negText--j9g-L',
        ref: c,
        children: renderI18nText('whiteboard.inline_menu.click_again_to_unlock')
      })]
    })
  });
}
function fY({
  reportWidth: e,
  value: t,
  optionProps: i
}) {
  let n = useRef(null);
  useLayoutEffect(() => {
    let i = n.current;
    i && e(t, i.getBoundingClientRect().width);
    return () => e(t, void 0);
  }, [n, t, e, i.svg]);
  return jsx('div', {
    'className': 'lock_control--offscreenMeasurementContainer---yCeM',
    'aria-hidden': !0,
    'children': jsx(fK, {
      ...i,
      additionalStylesClassName: ex()(i.additionalStylesClassName, 'lock_control--optionForMeasurement--q4Xze'),
      forwardedRef: n
    })
  });
}
let fX = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M18.37 10.225a1 1 0 0 1 1.337.068l2 2a1 1 0 0 1 0 1.414l-7 7A1 1 0 0 1 14 21h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 .293-.707l7-7zM12 18v2h2l7-7-2-2zm-2-6c1.246 0 2.416.326 3.43.898.277.156.31.532.086.757a.54.54 0 0 1-.64.08 5.993 5.993 0 0 0-7.759 1.78c-.193.268-.578.337-.81.101a.48.48 0 0 1-.054-.612A6.99 6.99 0 0 1 10 12m0-9a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6'
    })
  });
});
function f1({
  ariaLabel: e,
  tooltip: t,
  ...i
}) {
  let n = useDispatch<AppDispatch>();
  let r = useDropdownState();
  return jsx('div', {
    'data-tooltip-show-above': !0,
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': t,
    'className': _$$kL2,
    'children': jsx(_$$l9, {
      ariaLabel: e ?? _$$En({
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': t
      }),
      blurOnChange: !0,
      chevronClassName: _$$ai2,
      className: _$$Lt,
      dispatch: n,
      dropdownAlignment: 'right',
      dropdownClassName: Dm,
      dropdownShown: r,
      dropdownWidth: 144,
      id: 'codeBlockLanguageSelector',
      inputClassName: _$$hF2,
      role: 'combobox',
      targetDomNode: document.body,
      ...i
    })
  });
}
function f2(e) {
  return e ? isInvalidValue(e) ? getI18nString('whiteboard.code_blocks.mixed') : getI18nString('whiteboard.inline_menu.programming_language_label', {
    currentLanguage: _$$lR.format(e)
  }) : void 0;
}
function f3(e) {
  return e ? isInvalidValue(e) ? 'MIXED' : e : void 0;
}
function f6(e) {
  return e ? isInvalidValue(e) ? 'MIXED' : e : void 0;
}
let _l = {
  ROUND: _$$A43,
  ARROW_LINES: _$$A42,
  ARROW_EQUILATERAL: _$$A44,
  TRIANGLE_FILLED: _$$A45,
  DIAMOND_FILLED: _$$A41,
  CIRCLE_FILLED: _$$A40
};
let _d = {
  ROUND: jsx(_$$t7, {}),
  ARROW_LINES: jsx(_$$D6, {}),
  ARROW_EQUILATERAL: jsx(_$$l0, {}),
  TRIANGLE_FILLED: jsx(_$$C5, {}),
  DIAMOND_FILLED: jsx(_$$L4, {}),
  CIRCLE_FILLED: jsx(_$$t8, {})
};
let _c = ['ROUND', 'ARROW_LINES', 'ARROW_EQUILATERAL', 'TRIANGLE_FILLED', 'CIRCLE_FILLED', 'DIAMOND_FILLED'];
let _u = e => function () {
  let t;
  let [i, n] = useSelectionProperty(e === 'connectorStartCap' ? 'connectorStartCapForSelection' : 'connectorEndCapForSelection');
  let r = useSelectionPropertyValue(e === 'connectorStartCap' ? 'connectorStartCapDirection' : 'connectorEndCapDirection');
  let a = e === 'connectorStartCap' ? getI18nString('whiteboard.inline_menu.connector_start_point') : getI18nString('whiteboard.inline_menu.connector_end_point');
  let s = useMemo(() => generateUUIDv4(), []);
  let [d, p] = useState(!1);
  let h = useSelectionPropertyValue('connectorLineStyleForSelection');
  let m = e => {
    n(e);
    h === 'STRAIGHT' && WhiteboardTsApi?.snapshotStraightConnectorCaps();
  };
  let f = _f(i);
  f && (t = e === 'connectorStartCap' ? getI18nString('whiteboard.inline_menu.connector_start_point_selector_label', {
    currentStartCap: f.toLocaleLowerCase()
  }) : getI18nString('whiteboard.inline_menu.connector_end_point_selector_label', {
    currentEndCap: f.toLocaleLowerCase()
  }));
  let _ = _c.map(t => ({
    value: t,
    content: jsx('div', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: _p(e, r),
        pointerEvents: 'none'
      },
      children: _m(t)
    }),
    label: _f(t),
    isSelected: !isInvalidValue(i) && i === t
  }));
  let x = useMemo(() => jsx('div', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: _p(e, r)
    },
    children: _m(i)
  }), [i, r]);
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(p0, {
    onChange: m,
    options: _,
    tooltip: a,
    ariaLabel: t,
    buttonContent: x,
    recordingKey: `${e}Control`
  }) : jsx(Fn, {
    value: i,
    onChange: m,
    renderButton: ({
      onClick: n,
      onKeyDown: l,
      ref: d,
      active: c,
      activeOptionId: u
    }) => jsx(K0, {
      ref: d,
      active: c ? 'NORMAL' : 'NONE',
      ariaActiveDescendant: u,
      ariaControls: s,
      ariaLabel: t,
      caret: 'down',
      onKeyDown: l,
      onPointerDown: n,
      recordingKey: `${e}Control`,
      role: 'combobox',
      svg: _h(i),
      svgStyle: {
        transform: _p(e, r)
      },
      tooltip: a
    }),
    options: _c,
    renderOption: ({
      value: t,
      onClick: i,
      id: n,
      isSelected: a,
      isFocused: s
    }) => jsx(K0, {
      active: a ? 'LOUD' : 'NONE',
      focused: s,
      id: n,
      onPointerUp: e => {
        d && i(e);
      },
      recordingKey: generateRecordingKey(`${e}Control`, String(t)),
      role: 'option',
      svg: _h(t),
      svgStyle: {
        transform: _p(e, r)
      },
      tooltip: _f(t)
    }, String(t)),
    OptionWrapper: SC(a, s),
    onToggleMenuOpen: p
  });
};
function _p(e, t) {
  switch (valueOrFallback(t, e === 'connectorStartCap' ? 'left' : 'right')) {
    case 'up':
      return 'rotate(-90deg)';
    case 'right':
      return 'rotate(0deg)';
    case 'down':
      return 'rotate(90deg)';
    case 'left':
      return 'rotate(180deg)';
  }
}
function _h(e) {
  switch (e) {
    case 'ARROW_EQUILATERAL':
    case 'ARROW_LINES':
    case 'DIAMOND_FILLED':
    case 'TRIANGLE_FILLED':
    case 'CIRCLE_FILLED':
    case 'ROUND':
      return _l[e];
    default:
      return _l.ROUND;
  }
}
function _m(e) {
  switch (e) {
    case 'ARROW_EQUILATERAL':
    case 'ARROW_LINES':
    case 'DIAMOND_FILLED':
    case 'TRIANGLE_FILLED':
    case 'CIRCLE_FILLED':
    case 'ROUND':
      return _d[e];
    default:
      return _d.ROUND;
  }
}
function _f(e) {
  switch (e) {
    case 'ARROW_EQUILATERAL':
      return getI18nString('whiteboard.connector_caps.solid_arrow');
    case 'ARROW_LINES':
      return getI18nString('whiteboard.connector_caps.line_arrow');
    case 'TRIANGLE_FILLED':
      return getI18nString('whiteboard.connector_caps.triangle');
    case 'DIAMOND_FILLED':
      return getI18nString('whiteboard.connector_caps.diamond');
    case 'CIRCLE_FILLED':
      return getI18nString('whiteboard.connector_caps.circle');
    default:
      return getI18nString('whiteboard.connector_caps.none');
  }
}
let __ = _u('connectorStartCap');
let _x = _u('connectorEndCap');
let _g = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M18.5 4a.5.5 0 0 1 0 1h-4A2.5 2.5 0 0 0 12 7.5v9A3.5 3.5 0 0 1 8.5 20h-4a.5.5 0 0 1 0-1h4a2.5 2.5 0 0 0 2.5-2.5v-9A3.5 3.5 0 0 1 14.5 4z'
    })
  });
});
let _j = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M18.135 4.16a.5.5 0 1 1 .73.681l-14 15a.5.5 0 1 1-.73-.682z'
    })
  });
});
let _b = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M18.5 4a.5.5 0 0 1 0 1 6.5 6.5 0 0 0-6.5 6.5v1A7.5 7.5 0 0 1 4.5 20a.5.5 0 0 1 0-1 6.5 6.5 0 0 0 6.5-6.5v-1A7.5 7.5 0 0 1 18.5 4'
    })
  });
});
let _T = {
  ELBOWED: _$$A47,
  STRAIGHT: _$$A48,
  CURVED: _$$A46
};
let _E = {
  ELBOWED: jsx(_g, {}),
  STRAIGHT: jsx(_j, {}),
  CURVED: jsx(_b, {})
};
function _S(e) {
  switch (e) {
    case 'ELBOWED':
    case 'STRAIGHT':
    case 'CURVED':
      return _T[e];
    default:
      return _T.ELBOWED;
  }
}
function _w(e) {
  switch (e) {
    case 'ELBOWED':
      return getI18nString('whiteboard.inline_menu.line_shape_elbowed');
    case 'STRAIGHT':
      return getI18nString('whiteboard.inline_menu.line_shape_straight');
    case 'CURVED':
      return getI18nString('whiteboard.inline_menu.line_shape_curved');
    default:
      return '';
  }
}
function _I(e) {
  switch (e) {
    case 'ELBOWED':
    default:
      return ConnectorType.ELBOWED;
    case 'STRAIGHT':
      return ConnectorType.STRAIGHT;
    case 'CURVED':
      return ConnectorType.CURVED;
  }
}
function _O(e) {
  let t = _$$uQ3();
  let i = useSelectionPropertyValue('embedData');
  let n = createEmbedAnalyticsHandler(i);
  let [r, a] = useAtomValueAndSetter(_$$n9);
  let s = useCallback(() => {
    t && (n(LinkMetadataEvent.EMBED_EXPAND), a({
      type: 'ACTIVATE_AND_MAXIMIZE',
      payload: {
        embedNodeID: t
      }
    }));
  }, [a, t, n]);
  return i && t && (!r || e.inModal) ? getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(_$$V4, {
    variant: 'button',
    tooltip: getI18nString('whiteboard.embeds.inline_menu.maximize'),
    ariaLabel: getI18nString('whiteboard.embeds.inline_menu.maximize'),
    onClick: s,
    recordingKey: 'embedMaximizeControl',
    children: jsx(_$$O3, {})
  }) : jsx(K0, {
    svg: _$$A49,
    active: 'NONE',
    tooltip: getI18nString('whiteboard.embeds.inline_menu.maximize'),
    onClick: s,
    recordingKey: 'embedMaximizeControl'
  }) : null;
}
let _H = 'face_stamp_control--userLabeliPad--HZsHg';
let _B = 'face_stamp_control--faceStampOption--bMfTI';
let _G = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};
function _K({
  onSelect: e
}) {
  let [t, i] = useState('');
  let [n] = useDebounce(t, 200);
  let {
    faceStampServerSideSearch,
    faceStampSearchIsLoading,
    faceStampSearchHasResolved
  } = _$$A51({
    maxResults: 5
  });
  let d = U5(n, 6);
  let c = faceStampSearchIsLoading || !faceStampSearchHasResolved;
  useEffect(() => {
    faceStampServerSideSearch(n);
  }, [faceStampServerSideSearch, n]);
  let u = useDropdown('face_stamp_replacement_dropdown');
  let p = _W(d);
  let m = _$$Tv();
  let f = useMemo(() => {
    let t = [];
    switch (!0) {
      case c:
        t = [jsx(OptionComponent, {
          className: ex()(_B, 'face_stamp_control--faceStampOption__loading--o6hDI'),
          children: jsx(LoadingSpinner, {
            size: 'lg'
          })
        }, 'loading')];
        break;
      case d.length > 0:
        t = d.filter(e => !!p[e.id]).map((t, i) => jsxs(OptionComponent, {
          recordingKey: `faceStampInlineSwitcherOption-${t.id}`,
          onClick: async () => {
            let i = await _$$uL({
              profileImageUrl: `${t.hi_res_img_url || t.img_url}?c=1`,
              userName: t.name || t.handle || '',
              userColor: getColorForMultiplayer(t.id, multiplayerColors),
              noCircleOutline: !1
            });
            let n = _$$lJ3(i).filter(e => e.name === 's-profile');
            let r = k6(n[0], 'F24822') || '';
            if (m) {
              for (let e of m) w8(r, t.id, e, zk.USER);
            }
            e();
          },
          className: _B,
          children: [jsx('img', {
            className: 'face_stamp_control--faceStampOptionThumb--Aoyvy',
            src: p[t.id],
            alt: getI18nString('whiteboard.inserts.faces_inline_search_image_alt_text', {
              user: t.handle
            })
          }), jsx('span', {
            className: ex()('face_stamp_control--userDropdownOption--WodTi ellipsis--ellipsis--Tjyfa', {
              [_H]: isIpadDevice
            }),
            children: t.handle
          })]
        }, i));
        break;
      case d.length === 0:
        t = [jsx(OptionComponent, {
          className: _B,
          children: jsx('span', {
            className: 'face_stamp_control--noSearchFoundText--CAeSf ellipsis--ellipsis--Tjyfa',
            children: renderI18nText('whiteboard.inserts.faces_inline_search_no_results', {
              searchQuery: jsx('span', {
                className: 'face_stamp_control--emptyStateStrongText--Og0Ql',
                children: n
              })
            })
          })
        }, 'no-results')];
    }
    return t;
  }, [c, d, n, p, e, m]);
  return jsx(PointingDropdown, {
    autofocusPrevElementOnEsc: !0,
    autofocusPrevElementOnSelect: !0,
    className: 'face_stamp_control--faceStampDropdown--fSoHZ',
    hideDropdown: u.hide,
    lean: 'right',
    leanPadding: 0,
    maxWidth: 226,
    minWidth: 226,
    options: [jsx(IW, {
      className: 'face_stamp_control--searchBar--xHXdo',
      clearSearch: () => i(''),
      focusOnMount: !0,
      hideSearchIcon: !0,
      hideXIcon: !n,
      isKeyDownHandled: t => t.key === 'Escape' && (e(), !0),
      onChange: i,
      placeholder: getI18nString('whiteboard.face_stamps.enter_name'),
      query: n,
      selectTextOnMount: !0
    }, 'search'), ...f],
    propagateCloseClick: !0,
    recordingKey: 'faceStampSwitcherDropdown',
    showPoint: !1,
    targetRect: _G
  });
}
let _W = e => {
  let [t, i] = useState({});
  useEffect(() => {
    (async function () {
      i((await Promise.all(e.map(async e => ({
        id: e.id,
        profileUrl: await _$$uL({
          profileImageUrl: `${e.hi_res_img_url || e.img_url}?c=1`,
          userName: e.name || e.handle || '',
          userColor: getColorForMultiplayer(e.id, multiplayerColors),
          noCircleOutline: !0
        })
      })))).reduce((e, {
        id: t,
        profileUrl: i
      }) => ({
        ...e,
        [t]: i
      }), {}));
    })();
  }, [e]);
  return t;
};
let _$ = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M8.725 11.083a.5.5 0 0 1 .629.064l7.853 7.854H18a1 1 0 0 0 1-1v-.5a.5.5 0 0 1 1 0v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.5a.5.5 0 0 1 1 0v.293l3.646-3.647zM5 16.208V18a1 1 0 0 0 1 1h9.793L9 12.208zM19.5 14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m-15-3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m-3.354-3.854a.5.5 0 1 1 .707.707L15.707 9l1.146 1.146.065.078a.5.5 0 0 1-.693.694l-.079-.065L15 9.708l-1.146 1.146a.5.5 0 0 1-.707-.707l1.146-1.146-1.146-1.147-.065-.078a.5.5 0 0 1 .693-.693l.079.064L15 8.294zM4.5 8.001a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m-13-4a.5.5 0 0 1 0 1H6a1 1 0 0 0-1 1v.5a.5.5 0 0 1-1 0V6a2 2 0 0 1 2-2zm12.515-1.56c.126-.505.844-.505.97 0l.315 1.26 1.26.314c.505.127.505.845 0 .971l-1.26.315-.315 1.26c-.126.504-.844.504-.97 0L18.7 5.3l-1.26-.315c-.505-.126-.505-.844 0-.97L18.7 3.7zM9.5 4.001a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm3 0a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm3 0a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1z'
    })
  });
});
let _3 = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M18.204 4.01A2 2 0 0 1 20 6v2l-.01.204a2 2 0 0 1-1.786 1.785L18 10h-2l-.204-.01a2 2 0 0 1-1.785-1.786L14 8v-.5h-1a1 1 0 0 0-1 1v2c0 .598-.264 1.133-.68 1.5.416.367.68.902.68 1.5v2a1 1 0 0 0 1 1h1V16a2 2 0 0 1 1.796-1.99L16 14h2l.204.01A2 2 0 0 1 20 16v2l-.01.204a2 2 0 0 1-1.786 1.785L18 20h-2l-.204-.01a2 2 0 0 1-1.785-1.786L14 18v-.5h-1a2 2 0 0 1-2-2v-2a1 1 0 0 0-1-1H9v.5l-.01.204a2 2 0 0 1-1.786 1.785L7 15H5l-.204-.01a2 2 0 0 1-1.785-1.786L3 13v-2a2 2 0 0 1 1.796-1.99L5 9h2l.204.01A2 2 0 0 1 9 11v.5h1a1 1 0 0 0 1-1v-2a2 2 0 0 1 2-2h1V6a2 2 0 0 1 1.796-1.99L16 4h2zM16 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zM5 10a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm11-5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z'
    })
  });
});
var _8 = (e => (e.fontFamilyControl = 'fontFamilyControl', e))(_8 || {});
let _7 = parsePxNumber(cv$);
let xe = parsePxNumber(S3e);
let xt = parsePxNumber(tRI);
function xi({
  children: e,
  padding: t
}) {
  return jsx(W1, {
    padding: t,
    children: jsx('div', {
      className: _$$ec,
      children: e
    })
  });
}
function xn({
  value: e,
  onChange: t,
  options: i,
  optionsPerRow: n,
  renderOption: r,
  renderButton: a,
  optionEquality: s,
  additionalContentsTop: d,
  additionalContentsBottom: c,
  additionalOption: u,
  PopoverWrapper: p = xi,
  positionX: h,
  positionY: m,
  responsivePositionY: f,
  popoverClassName: _,
  onToggleMenuOpen: x,
  parentComponent: g,
  customOptions: j,
  overrideMenuOpenState: b,
  renderButtonRef: y,
  overrideMenuFocused: v,
  rowKeyPrefix: C,
  overscan: T = 5,
  scrollContainerDimensionOverrides: E,
  scrollContainerRef: S,
  showHeaders: w = !0
}) {
  let I = useRef(null);
  let L = useRef(null);
  let [N, A] = useState(!1);
  let O = b ? b.isOpenOverride : N;
  let k = b ? b.setIsOpenOverride : A;
  let [R, M] = useState(0);
  let [D, P] = useState(!1);
  let U = v ? v.focusedIndexOverride : R;
  let F = v ? v.setFocusedIndexOverride : M;
  let H = v ? v.isFocusedByKeyboardOverride : D;
  let B = v ? v.setIsFocusedByKeyboardOverride : P;
  let V = i.reduce((e, t) => e + t.items.length, 0) + (j ? j.reduce((e, t) => e + t.items.length, 0) : 0) + (u ? 1 : 0);
  let [G] = useState(() => {
    let e = new Array(V);
    for (let t = 0; t < i.length; t++) e[t] = generateUUIDv4();
    return e;
  });
  let K = new _$$W8();
  let [W, z] = useState(!0);
  useEffect(() => {
    x && x(O);
  }, [O, x]);
  let Z = e => {
    if (e < 0) return;
    let t = 0;
    for (let n = 0; n < i.length; n++) {
      let r = i[n];
      if (!r) return;
      if (e < r.items.length + t) return r.items[e - t];
      t += r.items.length;
    }
    if (j) {
      for (let i = 0; i < j?.length; i++) {
        let n = j[i];
        if (!n) break;
        if (e < n.items.length + t) return n.items[e - t];
        t += n.items.length;
      }
    }
  };
  let $ = useMemo(() => {
    {
      let a = 0;
      let l = (i, l, d) => {
        let c = l.header && w ? {
          element: jsx('div', {
            className: _$$Rs,
            children: l.header
          }, `header-${d}`),
          height: (l.headerHeight ?? 24) + 2 * xt
        } : null;
        c && i.push(c);
        let u = Math.ceil(l.items.length / n);
        for (let d = 0; d < u; d++) {
          let p = l.items.slice(d * n, (d + 1) * n);
          let h = d === u - 1;
          let m = l.itemHeight ?? 0;
          let f = h && c ? m + xe : m;
          let _ = {
            element: jsx('div', {
              className: ex()({
                [_$$_z]: d === u - 1
              }),
              style: {
                height: `${f}px`
              },
              children: p.map(i => {
                let n = e => t(i, e);
                let o = e => {
                  n(e);
                  k(!1);
                };
                let l = e => {
                  (!g || g !== 'fontFamilyControl' || W) && o(e);
                };
                let d = r({
                  value: i,
                  id: G[a],
                  index: a,
                  onClick: l,
                  isSelected: s ? s(i, e) : i === e,
                  isFocused: H && U === a
                });
                a++;
                return d;
              })
            }),
            height: f
          };
          i.push(_);
        }
        return i;
      };
      let d = i.reduce(l, []);
      let c = j?.reduce(l, []);
      let p = u ? u(H) : null;
      return [...d, ...(c || []), ...(p ? [p] : [])];
    }
  }, [u, W, j, U, H, t, s, G, i, n, g, r, k, w, e]);
  let Y = Te({
    count: $.length,
    getScrollElement: () => (S ?? L).current,
    getItemKey: e => C ? `${C}-${e}` : e,
    estimateSize: e => $[e]?.height ?? 0,
    overscan: T
  });
  return jsx(_$$A60, {
    target: a({
      value: e,
      ref: y ?? I,
      onKeyDown: e => {
        switch (e.keyCode) {
          case KeyCodes.ESCAPE:
            O ? k(!1) : e.currentTarget?.blur();
            break;
          case KeyCodes.ENTER:
            if (O && U >= 0 && U < V) {
              let i = Z(U);
              i && (t(i, e), k(!1));
            }
            break;
          case KeyCodes.RIGHT_ARROW:
          case KeyCodes.LEFT_ARROW:
          case KeyCodes.UP_ARROW:
          case KeyCodes.DOWN_ARROW:
            if (!isModifierMatch(e, 0)) {
              forwardKeyboardEvent(e);
              break;
            }
            if (B(!0), O && V) {
              let t = U;
              (t += e.keyCode === KeyCodes.UP_ARROW || e.keyCode === KeyCodes.LEFT_ARROW ? -1 : 1) >= V ? t = 0 : t < 0 && (t = V - 1);
              F(t);
            } else {
              O || k(!0);
            }
            e.preventDefault();
            e.stopPropagation();
            break;
          case KeyCodes.TAB:
            B(!1);
            break;
          case KeyCodes.C:
          case KeyCodes.V:
          case KeyCodes.X:
            isCommandModifier(e) && (fullscreenValue.triggerAction(e.keyCode === KeyCodes.C ? 'copy' : e.keyCode === KeyCodes.X ? 'cut' : 'paste'), e.stopPropagation(), e.preventDefault());
            break;
          default:
            forwardKeyboardEvent(e);
        }
      },
      onClick: () => {
        B(!1);
        k(!O);
        g && g === 'fontFamilyControl' && (isInteractionPathCheck() ? z(!0) : (z(!1), K.reset(), K.scheduleOnce(() => {
          z(!0);
        }, 250)));
      },
      active: O,
      activeOptionId: U != null ? G[U] : void 0
    }),
    onClose: () => {
      g && g === 'fontFamilyControl' && K.reset();
      k(!1);
    },
    renderPopoverContents: e => jsxs(p, {
      side: e,
      children: [d, jsx(RecordingScrollContainer, {
        height: E?.height ?? _7,
        width: E?.width,
        className: 'x78zum5 x1q0g3np x1a02dak xfawy5m',
        scrollContainerRef: S ?? L,
        horizontalScrollingDisabled: !0,
        disableScrollbarBorder: !0,
        scrollContainerDataTestId: 'virtualized-menu-selector-scroll-container',
        children: jsx('div', {
          style: {
            position: 'relative',
            height: `${Y.getTotalSize()}px`,
            width: '100%'
          },
          children: Y.getVirtualItems().map(e => jsx('div', {
            'data-testid': e.key,
            'className': 'x10l6tqk x13vifvy xu96u03 xh8yej3 xb3r6kr',
            'style': {
              height: `${e.size}px`,
              transform: `translateY(${e.start}px)`
            },
            'children': $[e.index]?.element
          }, e.key))
        })
      }), c]
    }),
    isOpen: O,
    positionX: h,
    positionY: m,
    responsivePositionY: f,
    className: _
  });
}
let xr = parsePxNumber(S3e);
let xa = parsePxNumber(tRI);
let xs = parsePxNumber(nwk);
function xo(e, t) {
  let i = 0;
  let n = 0;
  let r = 0;
  for (let a of e) {
    let e = a.options.length;
    let s = Math.ceil(e / 5);
    let o = Math.floor((t - i) / 5);
    if (t < i + e) {
      return {
        section: a,
        sectionIndex: n,
        rowIndex: r + o
      };
    }
    n += 1;
    r += s;
    i += e;
  }
}
let xl = 'whiteboard_platform_shape_selector--searchBar--GCfUj';
let xd = 'whiteboard_platform_shape_selector--searchIcon--ovupR';
let xc = 'whiteboard_platform_shape_selector--shapeSectionTile--tI3Yz';
let xu = 'whiteboard_platform_shape_selector--showFocus--f0nS2';
let xp = 'whiteboard_platform_shape_selector--shapeSectionTileWrapper--mYx1e';
function xh({
  platformShapeNodeId: e,
  renderButton: t,
  value: i,
  onChange: n,
  isOpen: r = !1
}) {
  let [a, s] = useDeepEqualSceneValue((e, t) => {
    let i = e.get(t);
    return [i?.mainComponent?.sourceLibraryKey, i?.mainComponent?.name];
  }, e);
  let d = useAtomWithSubscription(libraryKeyToNameAtom);
  let {
    libraryItems,
    metadata
  } = useLibraryItemsAndMetadata();
  let h = useMemo(() => e$(libraryItems, a ? [a] : void 0), [libraryItems, a]);
  let m = useRef(null);
  let f = useRef(null);
  let _ = useRef(null);
  let [x, g] = useState(r);
  let [j, b] = useState('');
  let [y, v] = useState(h);
  let [C, T] = useState(-1);
  let [E, S] = useState(!1);
  let w = useCallback(e => {
    g(e);
    !e && (T(-1), S(!1), f.current && f.current.scrollTo({
      top: 0
    }));
  }, []);
  useEffect(() => {
    !j && y.shapeLibraryData.length === 0 && h.shapeLibraryData.length > 0 && v(h);
  }, [h, y.shapeLibraryData.length, j]);
  let I = useCallback(e => {
    if (T(-1), !e || !e.trim()) {
      v(h);
      b('');
      S(!1);
      return;
    }
    b(e);
    S(!0);
    T(0);
    v(function (e, t) {
      let {
        connectorData,
        swtData,
        shapeLibraryData
      } = t;
      return {
        swtData: e0(swtData, e),
        shapeLibraryData: e1(shapeLibraryData, e),
        connectorData: eQ(connectorData, e)
      };
    }(e, h));
  }, [h]);
  let L = useDebouncedCallback(I, 200);
  let N = useCallback(() => I(''), [I]);
  let O = useCallback(e => e === '' ? N() : L(e), [N, L]);
  let k = useCallback(e => {
    e && setTimeout(() => {
      m.current?.focus(!0);
    }, 100);
  }, []);
  let R = useMemo(() => y.shapeLibraryData.reduce((e, t) => {
    let i = t.librarySubCategory;
    let n = t.libraryKey;
    let r = getLibraryNameByKey(d, n);
    let a = i ? `${r} - ${i}` : r;
    let o = {
      items: t.items,
      header: a,
      itemHeight: 40,
      headerHeight: 24
    };
    return s && t.items.find(e => e.name === s) ? [o, ...e] : [...e, o];
  }, []), [d, y.shapeLibraryData, s]);
  useEffect(() => {
    if (f.current) {
      let e = function (e, t) {
        let i = function (e, t) {
          let i = 0;
          let n = 0;
          let r = 0;
          for (let a of e) {
            let e = a.items.length;
            let s = Math.ceil(e / 5);
            let o = Math.floor((t - i) / 5);
            if (t < i + e) {
              return {
                option: a,
                sectionIndex: n,
                rowIndex: r + o
              };
            }
            n += 1;
            r += s;
            i += e;
          }
        }(t, e);
        let n = xs;
        let r = t.length > 1 && i?.option.header ? (i?.option.headerHeight ?? 0) + 2 * xa : 0;
        let a = r ? xr : 0;
        if (!i) return 0;
        let s = 0;
        let o = Math.ceil(t.reduce((e, t, i) => {
          let o = t.items.length;
          let l = t.itemHeight ?? 40;
          let d = i === 0 ? 0 : a;
          let c = Math.ceil(o / 5) * l + r + a;
          if (c <= n) {
            n -= c;
            s += 1;
            return e + o;
          }
          if (r + d + l > n) {
            r + d <= n && (s += 1, n -= r + d);
            return e;
          }
          {
            let t = Math.floor((n - (r + d)) / l);
            t > 0 && (s += 1, n -= t * l + r + d);
            return e + Math.min(5 * t, o);
          }
        }, 0) / 5);
        let l = Math.max(i.rowIndex - o + 1, 0);
        let d = Math.max(i.sectionIndex - s + 1, 0);
        return Math.max(0, 40 * l + (d * r + Math.max(d - 1, 0) * a));
      }(C, R);
      f.current?.scrollTop !== e && f.current.scrollTo({
        top: e
      });
    }
  }, [C, R, y]);
  return jsx(xn, {
    additionalContentsTop: jsx(IW, {
      ref: m,
      className: xl,
      clearSearch: N,
      focusOnMount: !1,
      hideXIcon: !0,
      iconClassName: xd,
      isKeyDownHandled: e => {
        let t = y.shapeLibraryData.reduce((e, t) => e + t.items.length, 0);
        if (e.code === 'Escape' || e.key === 'Escape') {
          j !== '' ? N() : w(!1);
        } else if (e.code === 'Enter' || e.key === 'Enter') {
          if (j !== '' && t > 0) {
            let t = y.shapeLibraryData[0]?.items[0];
            t && (n(t, e), w(!1));
          }
        } else {
          (e.code === 'ArrowUp' || e.code === 'ArrowDown') && (_.current?.focus(), t > 0 && (S(!0), T(e.code === 'ArrowDown' ? 0 : t - 1)), e.preventDefault());
        }
        return !0;
      },
      onChange: O,
      placeholder: getI18nString('whiteboard.inline_menu.change_shape_search'),
      query: j
    }),
    onChange: n,
    onToggleMenuOpen: k,
    options: R,
    optionsPerRow: 5,
    overrideMenuFocused: {
      focusedIndexOverride: C,
      setFocusedIndexOverride: T,
      isFocusedByKeyboardOverride: E,
      setIsFocusedByKeyboardOverride: S
    },
    overrideMenuOpenState: {
      isOpenOverride: x,
      setIsOpenOverride: w
    },
    renderButton: t,
    renderButtonRef: _,
    renderOption: ({
      value: e,
      onClick: t,
      id: i,
      isFocused: n,
      index: r
    }) => {
      if (!e) return null;
      let a = metadata?.[e.library_key];
      return jsx(xm, {
        currentOption: e,
        id: i,
        isFocused: n,
        onOptionClick: e => {
          x && t(e);
        },
        collection: a?.id,
        testIdPrefix: _$$uO2
      }, `${i}-${r}`);
    },
    rowKeyPrefix: _$$lK,
    scrollContainerDimensionOverrides: {
      width: 200,
      height: xs
    },
    scrollContainerRef: f,
    showHeaders: R.length > 1,
    value: i
  }, a);
}
function xm({
  currentOption: e,
  id: t,
  onOptionClick: i,
  collection: n,
  isFocused: r,
  testIdPrefix: a
}) {
  let s = e.containing_frame?.name;
  let l = e.library_key;
  let d = OP(l, s);
  let c = a ? `${a}-${e.name}` : `whiteboardShapeSwapButton.${e.name}`;
  let u = n ? N0(n, e.name, 'swapper', s) : void 0;
  let p = u ? jsx(tO, {
    iconSrc: u,
    name: e.name,
    testIdPrefix: 'shapes-library-swapper-thumb-override',
    variant: 'swapper'
  }) : null;
  return jsx(Fragment, {
    children: jsx(ButtonPrimitive, {
      'onClick': i,
      'recordingKey': `whiteboardShapeSwapButton.${e.name}`,
      'data-testid': c,
      'className': ex()({
        [xc]: !0,
        [xu]: r
      }),
      'children': jsx(_$$lX, {
        ThumbnailOverride: p,
        height: 40,
        isFigJam: !0,
        isSearch: !1,
        item: e,
        noBackground: !0,
        shouldHideDescription: !0,
        shouldShowShadowOnHover: !0,
        showName: !1,
        thumbPaddingGrid: u ? 0 : 8,
        thumbWrapperClassName: xp,
        tooltipOverride: _$$vo(d, e.name),
        width: 40
      })
    }, `${t}-${e.name}`)
  });
}
function xf({
  platformShapeNodeId: e,
  renderButton: t,
  value: i,
  onChange: n,
  wrapperId: r,
  isOpen: a = !1
}) {
  let s;
  let d = useDeepEqualSceneValue((e, t) => {
    let i = e.get(t);
    return i?.mainComponent?.sourceLibraryKey;
  }, e);
  let {
    libraryItems,
    metadata
  } = useLibraryItemsAndMetadata();
  let p = useMemo(() => e$(libraryItems, d ? [d] : void 0), [libraryItems, d]);
  let h = useRef(null);
  let m = useRef(null);
  let f = useRef(null);
  let [_, x] = useState(a);
  let [g, j] = useState('');
  let [b, y] = useState(p);
  let [v, C] = useState(0);
  let [T, E] = useState(!1);
  useEffect(() => {
    !g && b.shapeLibraryData.length === 0 && p.shapeLibraryData.length > 0 && y(p);
  }, [p, b.shapeLibraryData.length, g]);
  let S = useCallback(e => {
    if (C(-1), !e || !e.trim()) {
      y(p);
      j('');
      E(!1);
      return;
    }
    j(e);
    E(!0);
    C(0);
    y(function (e, t) {
      let {
        connectorData,
        swtData,
        shapeLibraryData
      } = t;
      return {
        swtData: e0(swtData, e),
        shapeLibraryData: e1(shapeLibraryData, e),
        connectorData: eQ(connectorData, e)
      };
    }(e, p));
  }, [p]);
  let w = useDebouncedCallback(S, 200);
  let I = useCallback(() => S(''), [S]);
  let L = useCallback(e => e === '' ? I() : w(e), [I, w]);
  let N = useCallback(e => {
    e && setTimeout(() => {
      h.current?.focus(!0);
    }, 100);
  }, []);
  let O = useMemo(() => b.shapeLibraryData.map(e => ({
    libraryKey: e.libraryKey ?? '',
    options: e.items
  })), [b.shapeLibraryData]);
  let k = useMemo(() => b.shapeLibraryData.reduce((e, t) => e = e.concat(t.items), []), [b.shapeLibraryData]);
  let R = O.length > 1;
  useEffect(() => {
    if (m.current) {
      let e = function (e, t, i) {
        let n = xo(t, e);
        let r = xs;
        let a = i && t.length > 1 ? 24 : 0;
        if (!n) return 0;
        let s = 0;
        let o = Math.ceil(t.reduce((e, t) => {
          let i = t.options.length;
          let n = 40 * Math.ceil(i / 5) + a;
          if (n <= r) {
            r -= n;
            s += 1;
            return e + i;
          }
          if (a + 40 > r) {
            a <= r && (s += 1, r -= a);
            return e;
          }
          {
            let t = Math.floor((r - a) / 40);
            t > 0 && (s += 1, r -= 40 * t + a);
            return e + Math.min(5 * t, i);
          }
        }, 0) / 5);
        return Math.max(0, 40 * Math.max(n.rowIndex - o + 1, 0) + Math.max(n.sectionIndex - s + 1, 0) * a);
      }(v, O, R);
      m.current?.scrollTop !== e && m.current.scrollTo({
        top: e
      });
    }
  }, [v, b, O, R]);
  let M = new Set();
  return jsx(Fn, {
    OptionWrapper: (s = {
      wrapperId: r,
      scrollContainerRef: m
    }, function ({
      children: e
    }) {
      return jsx(RecordingScrollContainer, {
        height: xs,
        disableScrollbarBorder: !0,
        scrollContainerRef: s.scrollContainerRef,
        children: jsx('div', {
          tabIndex: -1,
          className: 'whiteboard_platform_shape_selector--shapeContainer--dRUYD',
          id: s.wrapperId,
          children: e
        })
      });
    }),
    additionalContentsTop: jsx(IW, {
      ref: h,
      className: xl,
      clearSearch: I,
      focusOnMount: !1,
      hideXIcon: !0,
      iconClassName: xd,
      isKeyDownHandled: e => {
        let t = b.shapeLibraryData.reduce((e, t) => e + t.items.length, 0);
        if (e.code === 'Escape' || e.key === 'Escape') {
          g !== '' ? I() : x(!1);
        } else if (e.code === 'Enter' || e.key === 'Enter') {
          if (g !== '' && t > 0) {
            let t = b.shapeLibraryData[0]?.items[0];
            t && (n(t, e), x(!1));
          }
        } else {
          (e.code === 'ArrowUp' || e.code === 'ArrowDown') && (f.current?.focus(), t > 0 && (E(!0), C(e.code === 'ArrowDown' ? 0 : t - 1)), e.preventDefault());
        }
        return !0;
      },
      onChange: L,
      placeholder: getI18nString('whiteboard.inline_menu.change_shape_search'),
      query: g
    }),
    onChange: n,
    onToggleMenuOpen: N,
    options: k,
    overrideMenuFocused: {
      focusedIndexOverride: v,
      setFocusedIndexOverride: C,
      isFocusedByKeyboardOverride: T,
      setIsFocusedByKeyboardOverride: E
    },
    overrideMenuOpenState: {
      isOpenOverride: _,
      setIsOpenOverride: x
    },
    renderButton: t,
    renderButtonRef: f,
    renderOption: ({
      value: e,
      onClick: t,
      id: i,
      isFocused: n
    }) => {
      let r = k.indexOf(e);
      if (r === 0 && M.clear(), !xo(O, r) || !e) return null;
      let a = metadata?.[e.library_key];
      return jsx(x_, {
        currentOption: e,
        addedSections: M,
        id: i,
        isFocused: n,
        onOptionClick: e => {
          _ && t(e);
        },
        showHeaders: R,
        collection: a?.id
      }, `${i}-${r}`);
    },
    value: i
  });
}
function x_({
  currentOption: e,
  addedSections: t,
  id: i,
  onOptionClick: n,
  showHeaders: r,
  collection: a,
  isFocused: s
}) {
  let l = e.containing_frame?.name;
  let d = e.library_key;
  let c = OP(d, l);
  let u = `${l ?? ''}-${d}`;
  let p = !1;
  r && d && !t.has(u) && (t.add(u), p = !0);
  let h = p ? jsx('div', {
    className: 'whiteboard_platform_shape_selector--shapeSectionTitle--GV26T',
    children: _$$pf(c)
  }) : null;
  let m = a ? N0(a, e.name, 'swapper', l) : void 0;
  let f = m ? jsx(tO, {
    iconSrc: m,
    name: e.name,
    testIdPrefix: 'shapes-library-swapper-thumb-override',
    variant: 'swapper'
  }) : null;
  return jsxs(A3, {
    children: [h, jsx(ButtonPrimitive, {
      'onClick': n,
      'recordingKey': `whiteboardShapeSwapButton.${e.name}`,
      'data-testid': `whiteboardShapeSwapButton.${e.name}`,
      'className': ex()({
        [xc]: !0,
        [xu]: s
      }),
      'children': jsx(_$$lX, {
        ThumbnailOverride: f,
        height: 40,
        isFigJam: !0,
        isSearch: !1,
        item: e,
        noBackground: !0,
        shouldHideDescription: !0,
        shouldShowShadowOnHover: !0,
        showName: !1,
        thumbWrapperClassName: xp,
        tooltipOverride: _$$vo(c, e.name),
        width: 40
      })
    }, `${i}-${e.name}`)]
  });
}
let xg = e => {
  if (!e) return null;
  let t = getSingletonSceneGraph().get(e);
  if (!t) return null;
  let i = t?.findContainingPlatformShape();
  if (t.guid === i) {
    return {
      guid: i,
      type: t.type
    };
  }
  let n = t;
  for (; n && n.type !== 'CANVAS';) {
    if (n.parentGuid === i) {
      return {
        guid: n.parentNode?.guid,
        type: n.parentNode?.type
      };
    }
    n = n.parentNode;
  }
  return null;
};
function xj(e) {
  let t = function (e) {
    let t = [];
    let i = e && isValidValue(e) ? e : void 0;
    if (!i) return t;
    t.push(i);
    let n = WhiteboardTsApi?.getAllShapeWithTextTypesInCanvas();
    if (!n) return t;
    let r = Array.from(new Map([...n.entries()].sort((e, t) => t[1] - e[1])).keys()).filter(t => t !== e);
    r.length > 0 && t.push(...r);
    return t;
  }(e);
  let i = L2.filter(e => !t.includes(e));
  return [...t, ...i];
}
let xb = new _$$J2();
function xy(e = 4, t) {
  return {
    getShapeGrid(e) {
      return function ({
        children: i
      }) {
        let n = jsx('div', {
          'role': 'listbox',
          'aria-label': e.ariaLabel,
          'tabIndex': -1,
          'className': t,
          'id': e.wrapperId,
          'children': i
        });
        return e.withScroll ? jsx(RecordingScrollContainer, {
          height: 184,
          disableScrollbarBorder: !0,
          ref: e.scrollContainerRef,
          children: n
        }) : n;
      };
    },
    getShapeGridIconStyle(t, i, n = {
      top: !0,
      bottom: !0
    }, r = !1) {
      let a;
      let s = {};
      let o = r ? 'margin' : 'padding';
      t < e && n.top && (s[`${o}Top`] = '4px');
      t >= Math.floor((i - 1) / e) * e && n.bottom && (s[`${o}Bottom`] = '4px');
      t % e == 0 ? s[`${o}Left`] = '4px' : t % e == e - 1 && (s[`${o}Right`] = '4px');
      a = 10;
      (t % e == 0 || t % e == e - 1) && (a += 1);
      s.gridColumn = `span ${a}`;
      r && (s.borderRadius = '3px');
      return s;
    },
    scrollTopForIndex(t) {
      return 40 * Math.ceil((t - Math.floor(4.6) * e + 1) / e);
    }
  };
}
let xv = xy(4, 'whiteboard_shape_selector--shapeGridFourPerRow--K5Vt5');
let xC = xy(5, 'whiteboard_shape_selector--shapeGridFivePerRow--ON-iR');
function xT({
  renderButton: e,
  value: t,
  onChange: i,
  ariaLabel: n,
  wrapperId: r
}) {
  let a = useRef(null);
  let s = useRef(null);
  let d = useRef(null);
  let [c, u] = useState(!1);
  let [p, h] = useState('');
  let [m, f] = useState(() => xj(t));
  let [_, x] = useState(0);
  let [g, j] = useState(!1);
  let b = useCallback(e => {
    let i = xj(t);
    if (!e || !e.trim()) {
      f(i);
      h('');
      j(!1);
      return;
    }
    h(e);
    j(!0);
    x(0);
    f(i.filter(t => eB(t).some(t => t.toLowerCase().includes(e.toLowerCase()))));
  }, [t]);
  let y = useDebouncedCallback(b, 200);
  let v = useCallback(() => {
    y.cancel();
    b('');
  }, [b, y]);
  let C = useCallback(e => e === '' ? v() : y(e), [v, y]);
  let T = useCallback(e => {
    e && setTimeout(() => {
      a.current?.focus(!0);
    }, 50);
  }, []);
  useEffect(() => {
    if (s.current) {
      let e = xC.scrollTopForIndex(_);
      s.current?.getScrollTop() !== e && s.current.scrollTo(e);
    }
  }, [xC, _, m]);
  return jsx(Fn, {
    OptionWrapper: xC.getShapeGrid({
      ariaLabel: n,
      wrapperId: r,
      withScroll: !0,
      scrollContainerRef: s
    }),
    additionalContentsTop: jsx(IW, {
      ref: a,
      className: 'whiteboard_shape_selector--searchBar--ey24g',
      clearSearch: v,
      focusOnMount: !1,
      hideXIcon: !0,
      iconClassName: 'whiteboard_shape_selector--searchIcon--wXneH',
      isKeyDownHandled: e => (e.keyCode === KeyCodes.ESCAPE || e.code === 'Escape' || e.key === 'Escape' ? p !== '' ? v() : u(!1) : e.keyCode === KeyCodes.ENTER ? p !== '' && m.length > 0 && (i(m[0], e), u(!1)) : (e.code === 'ArrowUp' || e.code === 'ArrowDown') && (d.current?.focus(), m.length > 0 && (j(!0), x(e.code === 'ArrowDown' ? m.length > 1 && p !== '' ? 1 : 0 : m.length - 1)), e.preventDefault()), !0),
      onChange: C,
      placeholder: getI18nString('whiteboard.inline_menu.change_shape_search'),
      query: p
    }),
    onChange: i,
    onToggleMenuOpen: T,
    options: m,
    overrideMenuFocused: {
      focusedIndexOverride: _,
      setFocusedIndexOverride: x,
      isFocusedByKeyboardOverride: g,
      setIsFocusedByKeyboardOverride: j
    },
    overrideMenuOpenState: {
      isOpenOverride: c,
      setIsOpenOverride: u
    },
    renderButton: e,
    renderButtonRef: d,
    renderOption: ({
      value: e,
      onClick: t,
      id: i,
      isFocused: n
    }) => {
      let r = isInvalidValue(e) || !e ? '1' : `${xb.format(e)}`;
      return jsx(K0, {
        active: 'NONE',
        ariaLabel: r === '1' ? void 0 : r.toLocaleLowerCase(),
        buttonStyle: xC.getShapeGridIconStyle(m.indexOf(e), m.length, {
          top: !0,
          bottom: !0
        }, !0),
        focused: n,
        id: i,
        onPointerUp: e => {
          c && t(e);
        },
        recordingKey: `whiteboardShapeSwapButton.${e}`,
        role: 'option',
        svg: _$$eg3(e),
        tooltip: r
      }, String(e));
    },
    value: t
  });
}
function xE({
  onSelect: e,
  showShapePreview: t = () => {},
  hideShapePreview: i = () => {},
  ariaLabel: n
}) {
  let r = xv.getShapeGrid({
    ariaLabel: n
  });
  let a = selectWithShallowEqual(hT);
  if (!a) {
    reportError(ServiceCategories.FIGJAM, new Error('No selected shape ghost node'));
    return null;
  }
  let s = a.shapeWithTextType;
  let l = `${xb.format(s)}`;
  return jsxs('div', {
    className: 'whiteboard_shape_selector--menuWrapper--9RzvT',
    children: [jsx(r, {
      children: Qc.map(n => {
        let r = `${xb.format(n)}`;
        return jsx(K0, {
          ariaLabel: r.toLocaleLowerCase(),
          buttonStyle: xv.getShapeGridIconStyle(Qc.indexOf(n), Qc.length, {
            top: !0,
            bottom: !1
          }),
          onMouseEnter: e => t(n),
          onMouseLeave: e => i(),
          onPointerUp: t => {
            e(n, t);
          },
          recordingKey: `whiteboardInlineQuickAddShapeSelectorButton.${n}`,
          role: 'option',
          svg: _$$eg3(n),
          tooltip: r
        }, String(n));
      })
    }), jsxs(_$$$n, {
      className: 'whiteboard_shape_selector--sameShapeButton--McSOb',
      tooltip: l,
      onClick: t => e(s, t),
      onMouseEnter: e => t(s),
      onMouseLeave: e => i(),
      recordingKey: 'whiteboardInlineQuickAddShapeSelectorSameShapeButton',
      role: 'button',
      ariaLabel: l.toLocaleLowerCase(),
      buttonChildrenStyle: {
        width: '100%'
      },
      children: [jsx(SvgComponent, {
        svg: _$$eg3(s),
        className: 'whiteboard_shape_selector--sameShapeSvg--JnJli'
      }), renderI18nText('whiteboard.inline_menu.add_same_shape')]
    })]
  });
}
let xS = new _$$J2();
function xw() {
  let e = _$$nc.user('create-shape-from-inline-quick-add', e => {
    Fullscreen?.createShapeFromInlineQuickAdd(e);
  });
  let t = getI18nString('whiteboard.inline_menu.change_shape');
  return jsx(xE, {
    onSelect: e,
    showShapePreview(e) {
      Fullscreen?.showGhostShapeFromInlineQuickAdd(e);
    },
    hideShapePreview() {
      Fullscreen?.hideGhostShapeFromInlineQuickAdd();
    },
    ariaLabel: t
  });
}
let xI = new Map([[WhiteboardFeatures.WHITEBOARD_COLOR, function () {
  let e;
  let t = useUpdateSelectionProperty('whiteboardColor');
  let i = mc();
  let [n, r] = useState(!1);
  let a = selectWithShallowEqual(e => e.mirror.selectionProperties.whiteboardNumSelectedByType);
  let s = useSelector(e => e.mirror.selectionProperties.whiteboardNumSelectedPlatformShape ?? 0);
  let u = useSelector(e => e.mirror.selectionProperties.whiteboardNumSelected);
  let p = useSelector(e => {
    let t = Object.keys(e.mirror.sceneGraphSelection);
    return t.length !== 0 && t.every(t => {
      let i = e.mirror.sceneGraph.get(t);
      return !!i && i.type === 'SECTION' && i.sectionContentsHidden;
    });
  });
  let h = mu();
  let m = useUpdateSelectionProperty('shapeWithTextOpacityOverride');
  let f = useUpdateSelectionProperty('platformShapeOpacityOverride');
  let _ = useSelectionPropertyValue('shapeWithTextFillType');
  let x = useSelectionPropertyValue('platformShapeFillType');
  let g = a ? a.SHAPE_WITH_TEXT ?? 0 : 0;
  let j = a && a.SHAPE_WITH_TEXT === u;
  let b = s === u;
  let y = g > 0;
  let v = s > 0;
  if (u && u > 0 && g + s === u) {
    let t = _ != null && _ !== VisibilityState.HIDDEN;
    let n = x != null && x !== VisibilityState.HIDDEN;
    (y && t || v && n) && (e = Array.isArray(i) ? i.length > 0 ? i[0].a : void 0 : i.a);
  }
  return p ? jsx(_$$$n, {
    onClick: noop,
    active: 'NONE',
    caret: 'down',
    tooltip: getI18nString('whiteboard.no-edit-hidden-section-tooltip'),
    disabled: !0,
    children: jsx(_$$cd2, {
      size: 'small',
      value: i,
      paletteType: 'base',
      background: 'dark'
    })
  }) : jsx(ZE, {
    additionalContentsTop: (() => {
      if (h) {
        return jsx(hZ, {
          isColorPopoverOpen: n
        });
      }
    })(),
    ariaLabel: getI18nString('whiteboard.inline_menu.color_list_box'),
    buttonSize: 'small',
    customOpacity: e,
    isColorPopoverOpen: n,
    onColorChange: i => {
      u && (t(i), e == null || _ !== VisibilityState.TRANSPARENT_CUSTOM || j && u > 1 || m(e), e == null || x !== VisibilityState.TRANSPARENT_CUSTOM || b && u > 1 || f(e));
    },
    onOpacityChange: e != null ? e => {
      let t = e;
      t < 0.01 && (t = 0.01);
      y && m(t);
      v && f(t);
    } : void 0,
    optionSize: 'medium',
    paletteType: 'base',
    recordingKey: 'whiteboardColorControl',
    setIsColorPopoverOpen: r,
    value: i
  });
}], [WhiteboardFeatures.STICKY_COLOR, function () {
  let e = useUpdateSelectionProperty('whiteboardColor');
  let t = mc();
  let [i, n] = useState(!1);
  return jsx(ZE, {
    value: t,
    onColorChange: e,
    recordingKey: 'stickyColorControl',
    paletteType: 'sticky',
    buttonSize: 'small',
    optionSize: 'medium',
    ariaLabel: getI18nString('whiteboard.inline_menu.color_list_box'),
    isColorPopoverOpen: i,
    setIsColorPopoverOpen: n
  });
}], [WhiteboardFeatures.HIGHLIGHT_COLOR, function () {
  let e = useUpdateSelectionProperty('whiteboardColor');
  let t = mc();
  let [i, n] = useState(!1);
  return jsx(ZE, {
    value: t,
    onColorChange: e,
    recordingKey: 'highlightColorControl',
    paletteType: 'highlight',
    buttonSize: 'small',
    optionSize: 'medium',
    isColorPopoverOpen: i,
    setIsColorPopoverOpen: n
  });
}], [WhiteboardFeatures.PENCIL_COLOR, function () {
  let e = useUpdateSelectionProperty('whiteboardColor');
  let t = mc();
  let [i, n] = useState(!1);
  let r = function () {
    let e = AppStateTsApi?.uiState().showUI3Colors.getCopy();
    let t = Z9().type === Yv.CUSTOM;
    return e && !t ? 'pencilUI3' : 'base';
  }();
  return jsx(ZE, {
    value: t,
    onColorChange: e,
    recordingKey: 'pencilColorControl',
    paletteType: r,
    buttonSize: 'small',
    optionSize: 'medium',
    isColorPopoverOpen: i,
    setIsColorPopoverOpen: n
  });
}], [WhiteboardFeatures.WHITEBOARD_STROKE, _$$nm], [WhiteboardFeatures.WHITEBOARD_SHAPE, function () {
  let [e, t] = useSelectionProperty('shapeWithTextTypeForSelection');
  let i = generateUUIDv4();
  if (!e) return null;
  let n = isInvalidValue(e) || !e ? '1' : `${xS.format(e)}`;
  let r = getI18nString('whiteboard.inline_menu.change_shape');
  let a = n !== '1' ? getI18nString('whiteboard.inline_menu.change_shape_label', {
    currentShape: n.toLocaleLowerCase()
  }) : void 0;
  return jsx(xT, {
    value: e,
    onChange: e => t(e),
    ariaLabel: r,
    wrapperId: i,
    renderButton: ({
      onClick: e,
      onKeyDown: t,
      activeOptionId: n,
      ref: s,
      active: l
    }) => jsx(K0, {
      ref: s,
      active: l ? 'NORMAL' : 'NONE',
      ariaActiveDescendant: n,
      ariaControls: i,
      ariaLabel: a,
      caret: 'down',
      onKeyDown: t,
      onPointerDown: e,
      recordingKey: 'whiteboardShapeSwapButton',
      role: 'combobox',
      svg: _$$h$,
      tooltip: r
    })
  }, n);
}], [WhiteboardFeatures.WHITEBOARD_PLATFORM_SHAPE, function () {
  let e = _$$es();
  let t = useSingleSelectedKey();
  let i = useDeepEqualSceneValue((e, t) => {
    if (!t) return null;
    let i = e.get(t);
    return i?.type;
  }, t);
  if (t && i === 'TEXT') {
    let e = xg(t);
    e && (t = e.guid ?? '', i = e.type);
  }
  let n = useDeepEqualSceneValue((e, t) => {
    if (!t) return null;
    let i = e.get(t);
    return i?.mainComponent?.name;
  }, t);
  let r = useMemo(() => t ? [t] : [], [t]);
  let a = useDispatch<AppDispatch>();
  let s = useCallback(e => {
    _$$l.user('swap-instance', () => {
      a(swapToSharedComponent({
        item: e,
        instanceGUIDs: r,
        sourceForTracking: 'FigJam Instance Swapper',
        storeInRecentsKey: FDocumentType.FigJam,
        usedSwapInstanceKeyboardShortcut: !1
      }));
    });
  }, [a, r]);
  let [c, p] = useState(null);
  let h = useCallback(e => {
    e && (p(e), replaceSelection(r, !1), s(e));
  }, [s, r]);
  if (!t || i !== 'INSTANCE' || !n || e) return null;
  let m = generateUUIDv4();
  let f = getI18nString('whiteboard.inline_menu.change_shape');
  let _ = getI18nString('whiteboard.inline_menu.change_shape_label', {
    currentShape: n
  });
  let g = getFeatureFlags().ad_branded_shapes_m1 ? xh : xf;
  return jsx(g, {
    platformShapeNodeId: t,
    value: c,
    onChange: h,
    wrapperId: m,
    renderButton: ({
      onClick: e,
      onKeyDown: t,
      activeOptionId: i,
      ref: n,
      active: r
    }) => jsx(K0, {
      ref: n,
      active: r ? 'NORMAL' : 'NONE',
      ariaActiveDescendant: i,
      ariaControls: m,
      ariaLabel: _,
      caret: 'down',
      onKeyDown: t,
      onPointerDown: e,
      recordingKey: 'whiteboardShapeSwapButton',
      role: 'combobox',
      svg: _$$h$,
      tooltip: f
    })
  }, t);
}], [WhiteboardFeatures.TEXT_DECORATION, _$$D5], [WhiteboardFeatures.HYPERLINK, function () {
  let e = getObservableValue(AppStateTsApi?.editorState().selectionIsHyperlink, !1);
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(_$$V4, {
    variant: 'button',
    tooltip: getI18nString('fullscreen_actions.text-edit-hyperlink'),
    ariaLabel: getI18nString('fullscreen_actions.text-edit-hyperlink'),
    onClick: () => fullscreenValue.triggerAction('text-edit-hyperlink'),
    recordingKey: 'editHyperlink',
    tooltipShortcutActionKey: 'text-edit-hyperlink',
    children: jsx(_$$W7, {})
  }) : jsx(K0, {
    svg: _$$A53,
    tooltip: 'text-edit-hyperlink',
    tooltipType: KindEnum.LOOKUP,
    active: !0 === e ? 'LOUD' : void 0,
    onClick: () => fullscreenValue.triggerAction('text-edit-hyperlink'),
    recordingKey: 'editHyperlink',
    blurOnClick: !0
  });
}], [WhiteboardFeatures.BULLETED_LIST, function () {
  let e = h4();
  let t = h9();
  return getFeatureFlags().figjam_a11y_inline_toolbar ? t ? jsx(_$$V4, {
    variant: 'toggle',
    tooltip: getI18nString('fullscreen_actions.text-toggle-ordered-list'),
    ariaLabel: getI18nString('fullscreen_actions.text-toggle-ordered-list'),
    checked: t,
    offIcon: jsx(_$$p8, {}),
    onIcon: jsx(_$$p8, {}),
    onChange: () => fullscreenValue.triggerActionInUserEditScope('text-toggle-ordered-list'),
    recordingKey: 'orderedListControl',
    tooltipShortcutActionKey: 'text-toggle-ordered-list'
  }) : jsx(_$$V4, {
    variant: 'toggle',
    tooltip: getI18nString('fullscreen_actions.text-toggle-unordered-list'),
    ariaLabel: getI18nString('fullscreen_actions.text-toggle-unordered-list'),
    checked: e,
    offIcon: jsx(_$$Z5, {}),
    onIcon: jsx(_$$Z5, {}),
    onChange: () => fullscreenValue.triggerActionInUserEditScope('text-toggle-unordered-list'),
    recordingKey: 'unorderedListControl',
    tooltipShortcutActionKey: 'text-toggle-unordered-list'
  }) : jsx(Fragment, {
    children: t ? jsx(K0, {
      svg: _$$A33,
      tooltip: 'text-toggle-ordered-list',
      tooltipType: KindEnum.LOOKUP,
      active: t ? 'LOUD' : void 0,
      onClick: () => fullscreenValue.triggerActionInUserEditScope('text-toggle-ordered-list'),
      recordingKey: 'orderedListControl',
      role: 'switch',
      blurOnClick: !0
    }) : jsx(K0, {
      svg: _$$A34,
      tooltip: 'text-toggle-unordered-list',
      tooltipType: KindEnum.LOOKUP,
      active: e ? 'LOUD' : void 0,
      onClick: () => fullscreenValue.triggerActionInUserEditScope('text-toggle-unordered-list'),
      recordingKey: 'unorderedListControl',
      role: 'switch',
      blurOnClick: !0
    })
  });
}], [WhiteboardFeatures.FONT_FAMILY, function () {
  let [e, t] = useSelectionProperty('whiteboardFontFamilies');
  let i = selectWithShallowEqual(e => e.mirror.selectionProperties.whiteboardNumSelectedByType);
  let n = isPrimaryLocaleEnglish();
  let [r, a] = useState(void 0);
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  if (!e || isInvalidValue(e)) return null;
  let c = pP(e);
  let p = e => {
    if (e) {
      let n = pD(e);
      n && (trackEventAnalytics('FigJam font family changed', {
        source: 'default',
        fontFamily: e,
        nodeType: i && Object.keys(i).length === 1 && Object.keys(i).pop() || 'MIXED',
        ...i
      }), t([n.fontFamily]));
    }
  };
  let h = Array.from(pM());
  let m = c.length > 0 ? [...h, 'divider', ...c] : [...h];
  let f = Math.max(4, 32 * m.indexOf(e[0]));
  let _ = getI18nString('whiteboard.inline_menu.font_family');
  let x = generateUUIDv4();
  let g = c.length > 0;
  let j = pU(e);
  let b = j ? getI18nString('whiteboard.inline_menu.font_family_label', {
    currentFont: j.toLocaleLowerCase()
  }) : getI18nString('whiteboard.inline_menu.font_family');
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsxs(MenuRootComp, {
    manager,
    children: [jsx(_$$V4, {
      variant: 'menu',
      tooltip: getI18nString('whiteboard.inline_menu.font_family'),
      getTriggerProps,
      ariaLabel: b,
      recordingKey: 'fontFamilyControl',
      children: pH(e)
    }), jsx(MenuContainerComp, {
      children: jsxs(z6, {
        title: jsx(MenuHiddenTitleComp, {
          children: getI18nString('whiteboard.inline_menu.font_family')
        }),
        onChange: p,
        value: e[0],
        recordingKey: generateRecordingKey('fontFamilyControl', 'radioOptions'),
        children: [h.map(e => {
          let t = pD(e);
          if (!t) return null;
          let i = pB(e, n);
          let r = t ? t.getLabel() : e;
          return jsx(CU, {
            'value': e,
            'aria-label': r,
            'data-testid': 'fontFamilyOption',
            'children': i ? jsx(SvgComponent, {
              svg: i,
              ariaLabel: t.getLabel(),
              className: 'xk99fgg'
            }) : t.getLabel()
          }, e);
        }), g && jsxs(Fragment, {
          children: [jsx(MenuSeparator, {}), c.map(e => jsx(CU, {
            'value': e,
            'aria-label': getI18nString('whiteboard.inline_menu.font_family_label', {
              currentFont: e.toLocaleLowerCase()
            }),
            'data-testid': 'fontFamilyOption',
            'children': e
          }, e))]
        })]
      })
    })]
  }) : jsxs(Fragment, {
    children: [jsx(_$$r5, {
      setMaxWidth: a,
      render: ({
        reportWidthOfValue: t
      }) => jsx(Fragment, {
        children: m.map(i => {
          let r = pD(i);
          let a = r ? r.fontFamily : i;
          let s = r ? r.getLabel() : i;
          let l = pB(a, n);
          return jsx(pV, {
            value: s,
            reportWidth: t,
            optionProps: {
              height: 32,
              fullWidth: !0,
              svg: l,
              formattedValue: l ? void 0 : s,
              additionalStylesClassName: e.length > 1 ? pv : void 0,
              checkSvg: e.length > 1 ? _$$A19 : void 0,
              selected: !0
            }
          }, s);
        })
      })
    }), jsx(Fn, {
      value: null,
      onChange: p,
      renderButton: ({
        onClick: t,
        onKeyDown: i,
        activeOptionId: n,
        ref: r,
        active: a
      }) => {
        let s;
        let l = pU(e);
        l && (s = getI18nString('whiteboard.inline_menu.font_family_label', {
          currentFont: l.toLocaleLowerCase()
        }));
        return jsx(K0, {
          ref: r,
          active: a ? 'NORMAL' : 'NONE',
          ariaActiveDescendant: n,
          ariaControls: x,
          ariaLabel: s,
          caret: 'down',
          onKeyDown: i,
          onPointerDown: t,
          recordingKey: 'fontFamilyControl',
          role: 'combobox',
          svg: pF(e),
          tooltip: getI18nString('whiteboard.inline_menu.font_family')
        });
      },
      options: m,
      renderOption: t => {
        let i = pD(t.value);
        let a = i ? i.fontFamily : t.value;
        let s = i ? i.getLabel() : t.value;
        let l = e.includes(a);
        let d = pB(a, n);
        return t.value !== 'divider' ? jsx('div', {
          'id': t.id,
          'className': 'font_family_control--optionContainer--joX6w',
          'style': {
            width: isNullish(r) ? 136 : r
          },
          'aria-label': s,
          'role': 'option',
          'tabIndex': -1,
          'children': jsx(pA, {
            additionalStylesClassName: e.length > 1 ? pv : void 0,
            checkSvg: e.length > 1 ? _$$A19 : void 0,
            dataTestId: 'fontFamilyOption',
            focused: t.isFocused,
            formattedValue: d ? void 0 : s,
            fullWidth: !0,
            height: 32,
            onMouseUp: t.onClick,
            recordingKey: `fontFamilyControl.${s}`,
            selected: l,
            svg: d,
            value: s
          }, s)
        }, s) : jsx(SeparatorComponent, {}, 'divider');
      },
      OptionWrapper({
        children: e
      }) {
        return jsx('div', {
          'className': 'font_family_control--flexColumn---Eol3',
          'aria-label': _,
          'id': x,
          'role': 'listbox',
          'tabIndex': -1,
          'data-fullscreen-intercept': !0,
          'children': e
        });
      },
      positionY: e => e.y - f,
      popoverClassName: 'font_family_control--popover--uawA-',
      parentComponent: k2.fontFamilyControl
    })]
  });
}], [WhiteboardFeatures.WHITEBOARD_TEXT_STYLE, function () {
  let e = new _$$o5({
    normalizeFactor: 1,
    min: 1,
    max: 2e3
  });
  let t = useDispatch<AppDispatch>();
  let i = useDropdownState();
  let [n, r] = useState(void 0);
  let [a, s] = useState(void 0);
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  let h = selectWithShallowEqual(e => e.mirror.selectionProperties.whiteboardNumSelectedByType);
  let [m, f] = useSelectionProperty('whiteboardFontSizes');
  if (!m || !isValidValue(m)) return null;
  let _ = isValidValue(m) ? m : [];
  let x = e => {
    e && (f([e]), fullscreenHandler.trackFromFullscreen('figjam_text_style_change', {
      source: 'default',
      size: e,
      node_type: h && Object.keys(h).length === 1 && Object.keys(h).pop() || 'MIXED',
      ...h
    }));
  };
  let g = e => {
    e.key === 'Enter' ? (j(parseInt(e.currentTarget?.value)), t(hideDropdownAction())) : e.key !== 'ArrowUp' || e.shiftKey ? e.key !== 'ArrowDown' || e.shiftKey || j(parseInt(e.currentTarget?.value) - 1) : j(parseInt(e.currentTarget?.value) + 1);
    let i = ['ArrowUp', 'ArrowDown'].includes(e.key);
    i && (!i || e.shiftKey) || e.stopPropagation();
  };
  let j = t => {
    if (!isNaN(t)) {
      let i = e.clamp(t);
      f([i]);
      fullscreenHandler.trackFromFullscreen('figjam_text_style_change', {
        source: 'custom',
        size: i,
        node_type: h && Object.keys(h).length === 1 && Object.keys(h).pop() || 'MIXED',
        ...h
      });
    }
  };
  let b = _.some(e => !hh.has(e));
  let y = {
    inputClassName: _$$hF,
    formatter: hg,
    customMixedText: getI18nString('whiteboard.inline_menu.font_size_mixed')
  };
  let v = {
    height: 40,
    fullWidth: !0,
    additionalStylesClassName: _$$jZ
  };
  let C = getI18nString('whiteboard.inline_menu.font_size_input');
  let T = getI18nString('whiteboard.inline_menu.font_size');
  let E = _.length === 1 ? _[0] : void 0;
  let S = E ? hg.format(E) : y.customMixedText;
  let w = e => x(e ? parseInt(e) : void 0);
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsxs(MenuRootComp, {
    manager,
    children: [jsx(_$$V4, {
      variant: 'menu',
      tooltip: T,
      getTriggerProps,
      ariaLabel: getI18nString('whiteboard.inline_menu.font_size_label', {
        currentFontSize: S.toLocaleLowerCase()
      }),
      recordingKey: 'whiteboardTextStyle',
      children: jsx('div', {
        className: 'x1exxlbk',
        children: S
      })
    }), jsxs(MenuContainerComp, {
      children: [jsx(z6, {
        title: jsx(MenuHiddenTitleComp, {
          children: T
        }),
        onChange: w,
        value: E?.toString(),
        recordingKey: generateRecordingKey('whiteboardTextStyle', 'radioOptions'),
        children: hp.map(e => jsxs(CU, {
          'value': e.toString(),
          'aria-label': hg.format(e),
          'children': [jsx('div', {
            style: hf(e),
            children: hg.format(e)
          }), b && jsx(MenuItemTrail, {
            children: jsx(MenuSubText, {
              children: e
            })
          })]
        }, e))
      }), jsx('div', {
        className: 'x1xq1gxn',
        children: jsx(InputComponent, {
          'type': 'number',
          'aria-label': getI18nString('whiteboard.inline_menu.custom_font_size'),
          'placeholder': C,
          'recordingKey': 'whiteboardTextStyleNumberInput',
          'data-testid': 'whiteboardTextStyleNumberInputDataTestId',
          'onChange': w,
          'value': _.length === 1 ? _[0]?.toString() : void 0,
          'onKeyDown': g
        })
      }), hj(_).length > 0 && jsx(MenuSeparator, {}), jsx(z6, {
        title: '',
        onChange: w,
        children: hj(_).map(e => jsx(CU, {
          'value': e.toString(),
          'aria-label': hg.format(e),
          'children': hg.format(e)
        }, e))
      })]
    })]
  }) : jsxs('div', {
    'className': _$$kL,
    'data-tooltip-show-above': !0,
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': T,
    'children': [jsx(_$$r5, {
      setMaxWidth: r,
      render: ({
        reportWidthOfValue: e
      }) => jsx(Fragment, {
        children: hx.map(t => jsx(hb, {
          reportWidth: e,
          inputProps: {
            ...y,
            property: t
          }
        }, isValidValue(t) ? t : '__mixed'))
      })
    }), jsx(_$$r5, {
      setMaxWidth: s,
      render: ({
        reportWidthOfValue: t
      }) => jsxs(Fragment, {
        children: [hp.map(e => jsx(hy, {
          value: e,
          reportWidth: t,
          optionProps: {
            value: e,
            formattedValue: hg.format(e),
            height: hm(e),
            style: hf(e),
            rightLabel: `${e}`
          }
        }, e)), jsx(hy, {
          value: 'number_input',
          reportWidth: t,
          optionProps: {
            ...v,
            children: jsx(Fragment, {
              children: jsx(FormattedInputVariant1, {
                formatter: e,
                onChange: noop,
                className: FY,
                property: null,
                size: C.length,
                tabIndex: -1
              })
            })
          }
        }, 'number_input'), hj(_).map(e => jsx(hy, {
          value: e,
          reportWidth: t,
          optionProps: {
            height: 32,
            value: e,
            formattedValue: hg.format(e)
          }
        }, e))]
      })
    }), jsxs(hd, {
      ...y,
      ariaLabel: getI18nString('whiteboard.inline_menu.font_size_label', {
        currentFontSize: _.length === 1 ? hg.format(_[0]).toLocaleLowerCase() : y.customMixedText.toLocaleLowerCase()
      }),
      blurOnChange: !0,
      chevronClassName: _$$ai,
      dispatch: t,
      dropdownAlignment: 'right',
      dropdownClassName: ex()(z4, Dm),
      dropdownShown: i,
      dropdownWidth: a,
      id: 'whiteboardTextStyleControl',
      inputWidth: n,
      multipleSelections: _,
      onChange: x,
      preventHiddenInput: 'until_keydown',
      property: _.length === 1 ? _[0] : MIXED_MARKER,
      recordingKey: 'whiteboardTextStyle',
      role: 'combobox',
      targetDomNode: document.body,
      children: [hp.map(e => jsx(hc, {
        value: e,
        height: hm(e),
        style: hf(e),
        rightLabel: b ? `${e}` : void 0,
        fullWidth: !0,
        additionalStylesClassName: _.length > 1 ? Hp : void 0,
        checkSvg: _.length > 1 ? _$$A19 : void 0
      }, e)), jsx(_$$sK, {}), jsx(hc, {
        ...v,
        selected: _.length === 1 && !hh.has(_[0]),
        ariaLabel: T,
        children: jsx(FormattedInputVariant1, {
          ariaLabel: getI18nString('whiteboard.inline_menu.custom_font_size'),
          autoFocus: !0,
          className: QR,
          dataTestId: 'whiteboardTextStyleNumberInputDataTestId',
          formatter: e,
          onChange: noop,
          onKeyDown: g,
          placeholder: C,
          property: _.length === 1 ? _[0] : null,
          recordingKey: 'whiteboardTextStyleNumberInput'
        })
      }), hj(_).map(e => jsx(hc, {
        height: 32,
        value: e,
        additionalStylesClassName: _.length > 1 ? Hp : void 0,
        checkSvg: _.length > 1 ? _$$A19 : void 0
      }, e))]
    })]
  });
}], [WhiteboardFeatures.START_MIND_MAP, function () {
  let e = () => {
    fullscreenValue.triggerActionInUserEditScope('start-mind-map');
  };
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(_$$V4, {
    variant: 'button',
    tooltip: getI18nString('whiteboard.inline_menu.start_mind_map'),
    ariaLabel: getI18nString('whiteboard.inline_menu.start_mind_map'),
    onClick: e,
    recordingKey: 'startMindMapControl',
    children: jsx(_3, {})
  }) : jsx(K0, {
    svg: _$$A59,
    tooltip: getI18nString('whiteboard.inline_menu.start_mind_map'),
    onClick: e,
    recordingKey: 'startMindMapControl'
  });
}], [WhiteboardFeatures.TEXT_ALIGN_H, function () {
  let e = useSelectionPropertyValue('whiteboardTextAlignHorizontal');
  let t = getI18nString('whiteboard.inline_menu.text_alignment');
  let i = _$$nc.user('set-text-align', e => {
    p8(e);
  });
  let n = useId();
  let [r, a] = useState(!1);
  let s = e && isValidValue(e) ? _$$En({
    'data-tooltip-type': KindEnum.LOOKUP,
    'data-tooltip': p7(e)
  }) : '';
  let d = s ? getI18nString('whiteboard.inline_menu.text_alignment_label', {
    currentTextAlignment: s.toLocaleLowerCase()
  }) : void 0;
  let c = useMemo(() => [{
    value: 'LEFT',
    content: jsx(_$$h9, {}),
    label: getI18nString('fullscreen_actions.text-align-left'),
    isSelected: e === 'LEFT'
  }, {
    value: 'CENTER',
    content: jsx(_$$N4, {}),
    label: getI18nString('fullscreen_actions.text-align-center'),
    isSelected: e === 'CENTER'
  }, {
    value: 'RIGHT',
    content: jsx(_$$K4, {}),
    label: getI18nString('fullscreen_actions.text-align-right'),
    isSelected: e === 'RIGHT'
  }], [e]);
  let p = useMemo(() => {
    let e = c.find(e => e.isSelected);
    return e?.content || jsx(_$$h9, {});
  }, [c]);
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(p0, {
    onChange: i,
    options: c,
    tooltip: t,
    ariaLabel: d,
    buttonContent: p,
    recordingKey: 'textAlignmentControl'
  }) : jsx(Fn, {
    value: e,
    onChange: i,
    renderButton: ({
      value: e,
      onClick: i,
      onKeyDown: r,
      activeOptionId: a,
      ref: s,
      active: l
    }) => {
      let d = e && isValidValue(e) ? _$$En({
        'data-tooltip-type': KindEnum.LOOKUP,
        'data-tooltip': p7(e)
      }) : '';
      let c = d ? getI18nString('whiteboard.inline_menu.text_alignment_label', {
        currentTextAlignment: d.toLocaleLowerCase()
      }) : void 0;
      return jsx(K0, {
        ref: s,
        active: l ? 'NORMAL' : 'NONE',
        ariaActiveDescendant: a,
        ariaControls: n,
        ariaLabel: c,
        caret: 'down',
        onKeyDown: r,
        onPointerDown: i,
        recordingKey: 'textAlignmentControl',
        role: 'combobox',
        svg: he(e),
        tooltip: t
      });
    },
    options: ['LEFT', 'CENTER', 'RIGHT'],
    renderOption: ({
      value: e,
      onClick: t,
      isSelected: i,
      id: n,
      isFocused: a
    }) => jsx(K0, {
      active: i ? 'LOUD' : 'NONE',
      focused: a,
      id: n,
      onPointerUp: e => {
        r && t(e);
      },
      recordingKey: generateRecordingKey('textAlignmentControl', function (e) {
        switch (e) {
          case 'LEFT':
            break;
          case 'CENTER':
            return 'center';
          case 'RIGHT':
            return 'right';
        }
        return 'left';
      }(e)),
      role: 'option',
      svg: he(e),
      tooltip: p7(e),
      tooltipType: KindEnum.LOOKUP
    }, String(e)),
    OptionWrapper: SC(t, n),
    onToggleMenuOpen: a
  });
}], [WhiteboardFeatures.TEXT_ALIGN_V, function () {
  let e = useSelectionPropertyValue('whiteboardTextAlignVertical');
  let t = getI18nString('whiteboard.inline_menu.text_alignment_v');
  let i = useId();
  let [n, r] = useState(!1);
  let a = _$$nc.user('set-text-align-v', e => {
    ht(e);
  });
  let s = e && isValidValue(e) ? _$$En({
    'data-tooltip-type': KindEnum.LOOKUP,
    'data-tooltip': hi(e)
  }) : '';
  let d = s ? getI18nString('whiteboard.inline_menu.text_alignment_v_label', {
    currentTextAlignment: s.toLocaleLowerCase()
  }) : void 0;
  let c = useMemo(() => [{
    value: 'TOP',
    content: jsx(_$$b8, {}),
    label: getI18nString('fullscreen_actions.text-align-top'),
    isSelected: e === 'TOP'
  }, {
    value: 'CENTER',
    content: jsx(_$$X2, {}),
    label: getI18nString('fullscreen_actions.text-align-middle'),
    isSelected: e === 'CENTER'
  }, {
    value: 'BOTTOM',
    content: jsx(_$$z6, {}),
    label: getI18nString('fullscreen_actions.text-align-bottom'),
    isSelected: e === 'BOTTOM'
  }], [e]);
  let p = useMemo(() => jsx(SvgComponent, {
    svg: hn(e)
  }), [e]);
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(p0, {
    options: c,
    onChange: a,
    buttonContent: p,
    recordingKey: 'textAlignmentVControl',
    tooltip: t,
    ariaLabel: d
  }) : jsx(Fn, {
    value: e,
    onChange: _$$nc.user('set-text-align-v', e => ht(e)),
    renderButton: ({
      value: e,
      onClick: n,
      onKeyDown: r,
      activeOptionId: a,
      ref: s,
      active: l
    }) => {
      let d = e && isValidValue(e) ? _$$En({
        'data-tooltip-type': KindEnum.LOOKUP,
        'data-tooltip': hi(e)
      }) : '';
      let c = d ? getI18nString('whiteboard.inline_menu.text_alignment_v_label', {
        currentTextAlignment: d.toLocaleLowerCase()
      }) : void 0;
      return jsx(K0, {
        ref: s,
        active: l ? 'NORMAL' : 'NONE',
        ariaActiveDescendant: a,
        ariaControls: i,
        ariaLabel: c,
        caret: 'down',
        onKeyDown: r,
        onPointerDown: n,
        recordingKey: 'textAlignmentVControl',
        role: 'combobox',
        svg: hn(e),
        tooltip: t
      });
    },
    options: ['TOP', 'CENTER', 'BOTTOM'],
    renderOption: ({
      value: e,
      onClick: t,
      isSelected: i,
      id: r,
      isFocused: a
    }) => jsx(K0, {
      active: i ? 'LOUD' : 'NONE',
      focused: a,
      id: r,
      onPointerUp: e => {
        n && t(e);
      },
      recordingKey: generateRecordingKey('textAlignmentVControl', function (e) {
        switch (e) {
          case 'TOP':
            return 'top';
          case 'CENTER':
            break;
          case 'BOTTOM':
            return 'bottom';
        }
        return 'center';
      }(e)),
      role: 'option',
      svg: hn(e),
      tooltip: hi(e),
      tooltipType: KindEnum.LOOKUP
    }, String(e)),
    OptionWrapper: SC(t, i),
    onToggleMenuOpen: r
  });
}], [WhiteboardFeatures.CONNECTOR_LINE_STYLE, function () {
  let e;
  let [t, i] = useSelectionProperty('connectorLineStyleForSelection');
  let [n, r] = useState(!1);
  let a = getFeatureFlags().ad_curved_connectors ? ['ELBOWED', 'CURVED', 'STRAIGHT'] : ['ELBOWED', 'STRAIGHT'];
  let s = e => {
    (e !== 'CURVED' || getFeatureFlags().ad_curved_connectors) && (WhiteboardTsApi?.handleConnectorLineStyleSwap(_I(t), _I(e)), i(e));
  };
  let d = useId();
  let p = _w(t);
  p && (e = getI18nString('whiteboard.inline_menu.line_shape_selector_label', {
    currentLineShape: p.toLocaleLowerCase()
  }));
  let h = a.map(e => ({
    value: e,
    content: _E[e],
    label: _w(e),
    isSelected: !isInvalidValue(t) && t === e
  }));
  let m = useMemo(() => function (e) {
    switch (e) {
      case 'ELBOWED':
      case 'STRAIGHT':
      case 'CURVED':
        return _E[e];
      default:
        return _E.ELBOWED;
    }
  }(t), [t]);
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(p0, {
    onChange: s,
    options: h,
    tooltip: getI18nString('whiteboard.inline_menu.line_shape'),
    ariaLabel: e,
    buttonContent: m,
    recordingKey: 'connectorLineStyleControl'
  }) : jsx(Fn, {
    value: t,
    onChange: s,
    renderButton: ({
      onClick: i,
      ref: n,
      onKeyDown: r,
      active: a,
      activeOptionId: s
    }) => jsx(K0, {
      ref: n,
      active: a ? 'NORMAL' : 'NONE',
      ariaActiveDescendant: s,
      ariaControls: d,
      ariaLabel: e,
      caret: 'down',
      onKeyDown: r,
      onPointerDown: i,
      recordingKey: 'connectorLineStyleControl',
      role: 'combobox',
      svg: _S(t),
      tooltip: getI18nString('whiteboard.inline_menu.line_shape')
    }),
    options: a,
    renderOption: ({
      value: e,
      onClick: t,
      id: i,
      isSelected: r,
      isFocused: a
    }) => jsx(K0, {
      id: i,
      tooltip: _w(e),
      svg: _S(e),
      onPointerUp: e => {
        n && t(e);
      },
      active: r ? 'LOUD' : 'NONE',
      focused: a,
      recordingKey: generateRecordingKey('connectorLineStyleControl', String(e)),
      role: 'option'
    }, String(e)),
    OptionWrapper: SC(getI18nString('whiteboard.inline_menu.line_shape'), d),
    onToggleMenuOpen: r
  });
}], [WhiteboardFeatures.CONNECTOR_START_CAP, __], [WhiteboardFeatures.CONNECTOR_END_CAP, _x], [WhiteboardFeatures.AUTHOR_VISIBILITY, function () {
  let [e, t] = useSelectionProperty('authorVisibility');
  let i = () => {
    t(!e);
  };
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(_$$V4, {
    variant: 'toggle',
    tooltip: getI18nString('whiteboard.inline_menu.show_hide_author'),
    ariaLabel: getI18nString('whiteboard.inline_menu.show_hide_author'),
    checked: !!e,
    offIcon: jsx(fX, {}),
    onIcon: jsx(fX, {}),
    onChange: i,
    recordingKey: 'authorVisibility'
  }) : jsx(K0, {
    svg: _$$A39,
    tooltip: getI18nString('whiteboard.inline_menu.show_hide_author'),
    active: e ? 'LOUD' : void 0,
    onClick: i,
    recordingKey: 'authorVisibility',
    role: 'switch',
    blurOnClick: !0
  });
}], [WhiteboardFeatures.ADD_TEXT, function () {
  let e = () => {
    _$$l.user('add-connector-text', () => fullscreenValue.triggerAction('add-connector-text'));
  };
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(_$$V4, {
    variant: 'button',
    tooltip: getI18nString('whiteboard.inline_menu.add_connector_text'),
    ariaLabel: getI18nString('whiteboard.inline_menu.add_connector_text'),
    onClick: e,
    recordingKey: 'addTextControl',
    children: jsx(_$$B6, {})
  }) : jsx(K0, {
    svg: _$$A35,
    tooltip: getI18nString('whiteboard.inline_menu.add_connector_text'),
    active: void 0,
    onClick: e,
    recordingKey: 'addTextControl'
  });
}], [WhiteboardFeatures.DIVIDER, () => jsx(_$$wv4, {})], [WhiteboardFeatures.CODE_BLOCK_LANGUAGE, function () {
  let [e, t] = useSelectionProperty('codeBlockLanguage');
  let i = trackFileEventWithUser();
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  let a = useMemo(() => isInvalidValue(e) ? getI18nString('whiteboard.code_blocks.mixed') : _$$lR.format(e ?? _$$jW), [e]);
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsxs(MenuRootComp, {
    manager,
    children: [jsx(_$$V4, {
      variant: 'menu',
      tooltip: getI18nString('whiteboard.inline_menu.programming_language'),
      getTriggerProps,
      ariaLabel: f2(e),
      recordingKey: 'codeBlockLanguageSelector',
      children: jsx('div', {
        className: 'xj35x94',
        children: a
      })
    }), jsx(MenuContainerComp, {
      children: jsx(z6, {
        title: jsx(MenuHiddenTitleComp, {
          children: getI18nString('whiteboard.inline_menu.programming_language')
        }),
        onChange: n => {
          i('figjam_code_block_language_select', {
            previousLanguage: f3(e),
            language: f3(n)
          });
          t(n, yesNoTrackingEnum.YES);
        },
        value: isInvalidValue(e) ? void 0 : e ?? _$$jW,
        recordingKey: generateRecordingKey('codeBlockLanguageSelector', 'radioOptions'),
        children: _$$ie.map(e => jsx(CU, {
          'value': e,
          'aria-label': _$$lR.format(e),
          'children': _$$lR.format(e)
        }, e))
      })
    })]
  }) : jsx(f1, {
    tooltip: getI18nString('whiteboard.inline_menu.programming_language'),
    ariaLabel: f2(e),
    property: e ?? _$$jW,
    id: 'codeBlockLanguageSelector',
    formatter: _$$lR,
    customMixedText: getI18nString('whiteboard.code_blocks.mixed'),
    onChange: n => {
      i('figjam_code_block_language_select', {
        previousLanguage: f3(e),
        language: f3(n)
      });
      t(n, yesNoTrackingEnum.YES);
    },
    onCancel: () => {
      i('figjam_code_block_language_select', {
        previousLanguage: f3(e)
      });
    },
    recordingKey: 'codeBlockLanguageSelector',
    children: _$$ie.map(e => jsx(_$$c$3, {
      value: e,
      ariaLabel: f2(e),
      recordingKey: `codeBlockLanguageSelector.${e}`
    }, e))
  });
}], [WhiteboardFeatures.CODE_BLOCK_THEME, function () {
  let [e, t] = useSelectionProperty('codeBlockTheme');
  let i = trackFileEventWithUser();
  let [n, r] = useState(!1);
  return jsx(ZE, {
    ariaLabel: e ? isInvalidValue(e) ? getI18nString('whiteboard.code_blocks.mixed') : getI18nString('whiteboard.inline_menu.code_block_theme', {
      currentTheme: A$.format(e)
    }) : void 0,
    buttonSize: 'small',
    inlineButtonTooltip: getI18nString('whiteboard.inline_menu.theme'),
    isColorPopoverOpen: n,
    onColorChange: n => {
      i('figjam_code_block_theme_select', {
        previousTheme: f6(e),
        theme: f6(Kr(n))
      });
      t(Kr(n), yesNoTrackingEnum.YES);
    },
    optionSize: 'medium',
    paletteType: 'codeBlockTheme',
    recordingKey: 'codeBlockThemeSelector',
    setIsColorPopoverOpen: r,
    value: parseColorFormat(_$$jP(e)) ?? []
  });
}], [WhiteboardFeatures.EMBED_OPEN_EXTERNAL, function () {
  return jsx(_$$e9, {});
}], [WhiteboardFeatures.EMBED_MAXIMIZE, function () {
  return jsx(_O, {});
}], [WhiteboardFeatures.EMBED_CONVERT_TO_TEXT, function () {
  return jsx(_$$S3, {});
}], [WhiteboardFeatures.IMAGE, AZ], [WhiteboardFeatures.REMOVE_IMAGE_BACKGROUND, function () {
  let e = useUpdateSelectionProperty('imageHasNoStroke');
  let t = () => {
    let t = ImageToolsBindings?.getNodeImagePairsForEdit() ?? [];
    B3(JT.REMOVE_BACKGROUND);
    _$$Ag(JT.REMOVE_BACKGROUND, _$$J1, {
      source: 'fullscreen-action',
      targets: t
    }, {
      isBatch: t.length > 1
    });
    e(!0);
  };
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(_$$V4, {
    variant: 'button',
    tooltip: getI18nString('whiteboard.inline_menu.remove_background'),
    ariaLabel: getI18nString('whiteboard.inline_menu.remove_background'),
    onClick: t,
    children: jsx(_$, {})
  }) : jsx(K0, {
    tooltip: getI18nString('whiteboard.inline_menu.remove_background'),
    svg: _$$A54,
    onClick: t
  });
}], [WhiteboardFeatures.BORDER, _$$rT], [WhiteboardFeatures.DESCRIPTION, Dz], [WhiteboardFeatures.SECTION_SHOW_HIDE, function () {
  let [e, t] = useSelectionProperty('sectionContentsHidden');
  let i = () => {
    t(!e);
  };
  let n = e ? getI18nString('fullscreen_actions.show-section') : getI18nString('fullscreen_actions.hide-section');
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(_$$V4, {
    ariaLabel: n,
    checked: !!e,
    dataTestId: 'section-show-hide-control',
    offIcon: jsx(_$$T3, {}),
    onChange: i,
    onIcon: jsx(noop, {}),
    recordingKey: 'showHideSection',
    tooltip: n,
    tooltipShortcutActionKey: 'toggle-section-visibility',
    variant: 'toggle'
  }) : jsx(K0, {
    svg: e ? _$$A57 : _$$A58,
    tooltip: n,
    ariaLabel: n,
    role: 'switch',
    tooltipShortcutActionKey: 'toggle-section-visibility',
    active: e ? 'LOUD' : void 0,
    onClick: i,
    recordingKey: 'showHideSection'
  });
}], [WhiteboardFeatures.SECTION_RENAME, function () {
  let e = mr();
  let t = ma();
  let i = useSelectionPropertyValue('name');
  let n = !i || i.trim() === '';
  let r = n ? getI18nString('fullscreen_actions.add-title') : getI18nString('fullscreen_actions.rename-section');
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(_$$V4, {
    variant: 'button',
    tooltip: r,
    ariaLabel: r,
    onClick: t,
    recordingKey: 'renameSection',
    tooltipShortcutActionKey: 'rename-selection',
    children: n ? jsx(_$$B6, {}) : jsx(mt, {})
  }) : jsx(K0, {
    svg: n ? _$$A35 : _$$A36,
    tooltip: r,
    tooltipShortcutActionKey: 'rename-selection',
    resourceId: 'rename-selection',
    onClick: t,
    active: e ? 'LOUD' : void 0,
    recordingKey: 'renameSection'
  });
}], [WhiteboardFeatures.WASHI_TAPE_PATTERN, function () {
  return jsx(fh, {
    recordingKey: 'washiTapePatternControl'
  });
}], [WhiteboardFeatures.RESIZE_TO_FIT, function () {
  let e = useSelectionPropertyValue('sectionContentsOverflowing');
  let t = useSelectionPropertyValue('sectionContentsHidden');
  let i = () => {
    fullscreenValue.triggerActionInUserEditScope('resize-to-fit');
  };
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(_$$V4, {
    variant: 'button',
    tooltip: getI18nString('fullscreen_actions.resize-to-fit'),
    tooltipShortcutActionKey: 'resize-to-fit',
    ariaLabel: getI18nString('fullscreen_actions.resize-to-fit'),
    onClick: i,
    recordingKey: 'resizeToFitSection',
    disabled: !!t,
    children: jsx(_$$F6, {})
  }) : jsx(K0, {
    svg: e ? _$$A55 : _$$A56,
    disabled: !!t,
    tooltip: getI18nString('fullscreen_actions.resize-to-fit'),
    tooltipShortcutActionKey: 'resize-to-fit',
    onClick: i,
    recordingKey: 'resizeToFitSection'
  });
}], [WhiteboardFeatures.FACE_STAMP, function () {
  let e = useSelectionPropertyValue('stampData');
  let {
    label,
    loading
  } = function (e) {
    let {
      user,
      loading: _loading2
    } = wW(e?.userId || e?.stampedByUserId || null);
    return {
      label: e && isInvalidValue(e) ? getI18nString('whiteboard.face_stamps.mixed') : user?.handle || null,
      loading: _loading2
    };
  }(e);
  let [n, r] = useState(!1);
  let a = _$$d4();
  let s = useRef(null);
  return (useEffect(() => {
    let e = () => r(!1);
    let t = t => {
      s.current?.contains(t.target) || e();
    };
    let i = t => {
      t.key === 'Escape' && e();
    };
    document.addEventListener('click', t);
    document.addEventListener('focus', t, !0);
    window.addEventListener('keydown', i);
    return () => {
      document.removeEventListener('click', t);
      document.removeEventListener('focus', t);
      window.removeEventListener('keydown', i);
    };
  }, []), a && e) ? jsxs('div', {
    ref: s,
    children: [jsxs(RecordableSpan, {
      className: ex()(Wh, 'face_stamp_control--userLabel--S-WLt', {
        [_H]: isIpadDevice
      }),
      onClick: () => r(!n),
      role: 'button',
      tabIndex: 0,
      recordingKey: 'faceStampControl',
      dataTestId: 'faceStampControl',
      children: [jsx('div', {
        className: ex()({
          'face_stamp_control--loadingUserText--r884u': loading,
          'face_stamp_control--userNameLabel--X-7PN': !loading,
          'face_stamp_control--userNameLabeliPad--P1bIB': isIpadDevice
        }),
        children: jsxs('span', {
          className: 'face_stamp_control--userNameOverflow--lNvYi ellipsis--ellipsis--Tjyfa',
          children: [loading ? '' : label, ' ']
        })
      }), jsx(SvgComponent, {
        svg: _$$A52,
        className: 'face_stamp_control--chevronButton--0T018'
      })]
    }), n && jsx(_K, {
      onSelect: () => r(!1)
    })]
  }) : null;
}], [WhiteboardFeatures.LOCK, function () {
  let e = useSelectionPropertyValue('locked');
  let t = useSelectionPropertyValue('sectionContentsHidden');
  let [i, n] = useState(void 0);
  let r = generateUUIDv4();
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  let d = () => {
    e ? fullscreenValue.triggerActionInUserEditScope('unlock-selected-nodes') : fullscreenValue.triggerActionInUserEditScope('lock-selected-nodes');
  };
  if (!t) {
    let c;
    return getFeatureFlags().figjam_a11y_inline_toolbar ? jsxs(MenuRootComp, {
      manager,
      children: [jsx(_$$V4, {
        variant: 'menu',
        tooltip: getI18nString('whiteboard.inline_menu.lock_options'),
        getTriggerProps: () => getTriggerProps({
          onClick: () => {
            analyticsEventManager.trackDefinedEvent('figjam.lock_options.clicked', {});
          }
        }),
        ariaLabel: getI18nString('whiteboard.inline_menu.lock_options'),
        recordingKey: 'lockUnlockOptions',
        dataTestId: 'lock-control-inline-options-v2',
        children: jsx(_$$$4, {})
      }), jsx(MenuContainerComp, {
        children: jsxs(MenuGroupComp, {
          'aria-label': getI18nString('whiteboard.inline_menu.lock_options'),
          'children': [jsx(MenuItemComp, {
            'onClick': () => {
              fullscreenValue.triggerActionInUserEditScope('lock-selected-nodes');
              analyticsEventManager.trackDefinedEvent('figjam.lock_options.lock_all.selected', {});
            },
            'recordingKey': generateRecordingKey('lockOption', 'lock_all'),
            'aria-label': getI18nString('whiteboard.inline_menu.lock_all'),
            'children': getI18nString('whiteboard.inline_menu.lock_all')
          }), jsx(MenuItemComp, {
            'onClick': () => {
              fullscreenValue.triggerActionInUserEditScope('lock-selected-section-only');
              analyticsEventManager.trackDefinedEvent('figjam.lock_options.lock_background_only.selected', {});
            },
            'recordingKey': generateRecordingKey('lockOption', 'lock_section_background_only'),
            'aria-label': getI18nString('whiteboard.inline_menu.lock_background_only'),
            'children': getI18nString('whiteboard.inline_menu.lock_background_only')
          })]
        })
      })]
    }) : jsxs(Fragment, {
      children: [jsx(_$$r5, {
        setMaxWidth: n,
        render: ({
          reportWidthOfValue: e
        }) => jsx(Fragment, {
          children: Object.entries(fZ()).map(([t, i]) => jsx(fY, {
            value: t,
            reportWidth: e,
            optionProps: {
              height: 24,
              fullWidth: !0,
              formattedValue: i,
              ignoreCheck: !0
            }
          }, t))
        })
      }), jsx(Fn, {
        value: null,
        onChange: e => {
          switch (e) {
            case 'lock_all':
              fullscreenValue.triggerActionInUserEditScope('lock-selected-nodes');
              analyticsEventManager.trackDefinedEvent('figjam.lock_options.lock_all.selected', {});
              break;
            case 'lock_section_background_only':
              fullscreenValue.triggerActionInUserEditScope('lock-selected-section-only');
              analyticsEventManager.trackDefinedEvent('figjam.lock_options.lock_background_only.selected', {});
          }
        },
        renderButton: ({
          onClick: t
        }) => jsx(K0, {
          svg: _$$A38,
          tooltip: e ? getI18nString('whiteboard.inline_menu.unlock') : getI18nString('whiteboard.inline_menu.lock'),
          onClick: () => {
            t();
            analyticsEventManager.trackDefinedEvent('figjam.lock_options.clicked', {});
          },
          recordingKey: 'lockUnlockOptions',
          testId: 'lock-control-inline-options-v2',
          caret: 'down',
          svgStyle: {
            stroke: 'var(--color-icon-menu-secondary)',
            fill: 'none'
          }
        }),
        options: fz,
        renderOption: e => {
          let t = Object.values(fW).find(t => t === e.value);
          if (!t) return;
          let n = fZ()[t];
          return jsx('div', {
            'id': e.id,
            'className': 'lock_control--optionContainer--RG6tY',
            'style': {
              width: i ?? 208
            },
            'aria-label': n,
            'role': 'option',
            'aria-selected': e.isSelected,
            'tabIndex': -1,
            'children': jsx(fK, {
              value: t,
              height: 24,
              fullWidth: !0,
              selected: e.isSelected,
              onMouseUp: e.onClick,
              recordingKey: generateRecordingKey('lockOption', t),
              ignoreCheck: !0,
              children: n
            }, t)
          }, t);
        },
        OptionWrapper: (c = getI18nString('whiteboard.inline_menu.lock_options'), function ({
          children: e
        }) {
          return jsx('div', {
            'className': 'lock_control--flexColumn--dwOZC',
            'aria-label': c,
            'id': r,
            'role': 'listbox',
            'tabIndex': -1,
            'data-fullscreen-intercept': !0,
            'children': e
          });
        })
      })]
    });
  }
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(_$$V4, {
    variant: 'button',
    tooltip: getI18nString('whiteboard.inline_menu.unlock'),
    onClick: d,
    ariaLabel: e ? getI18nString('whiteboard.inline_menu.unlock') : getI18nString('whiteboard.inline_menu.lock'),
    recordingKey: 'lockUnlock',
    dataTestId: 'lock-control-inline-v2',
    children: jsx(_$$$4, {})
  }) : jsx(K0, {
    svg: _$$A38,
    tooltip: e ? getI18nString('whiteboard.inline_menu.unlock') : getI18nString('whiteboard.inline_menu.lock'),
    onClick: d,
    recordingKey: 'lockUnlock',
    testId: 'lock-control-inline-v2',
    svgStyle: {
      stroke: 'var(--color-icon-menu-secondary)',
      fill: 'none'
    }
  });
}]]);
function xL({
  control: e
}) {
  let t = xI.get(e);
  return t ? jsx(t, {}) : null;
}
let xZ = {
  'align-top': _$$A66,
  'align-vertical-center': _$$A67,
  'align-bottom': _$$A62,
  'align-left': _$$A64,
  'align-horizontal-center': _$$A63,
  'align-right': _$$A65
};
let x$ = {
  'align-top': jsx(_$$Q4, {}),
  'align-vertical-center': jsx(_$$O4, {}),
  'align-bottom': jsx(_$$u3, {}),
  'align-left': jsx(_$$K5, {}),
  'align-horizontal-center': jsx(_$$E8, {}),
  'align-right': jsx(_$$F7, {})
};
function xY() {
  let e = ['align-left', 'align-horizontal-center', 'align-right', 'align-top', 'align-vertical-center', 'align-bottom'];
  let t = e => {
    fullscreenValue.triggerActionInUserEditScope(e);
  };
  let i = generateUUIDv4();
  let [n, r] = useState(!1);
  let a = e.map(e => ({
    value: e,
    content: x$[e],
    label: formatI18nMessage(e),
    shortcutKey: e,
    isSelected: !1
  }));
  let s = useMemo(() => jsx(_$$K5, {}), []);
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(p0, {
    onChange: t,
    options: a,
    tooltip: getI18nString('whiteboard.inline_menu.alignment_button'),
    buttonContent: s,
    recordingKey: 'alignmentControl'
  }) : jsx(Fn, {
    value: 'align-left',
    onChange: t,
    renderButton: ({
      onClick: e,
      onKeyDown: t,
      activeOptionId: n,
      ref: r,
      active: a
    }) => jsx(K0, {
      ref: r,
      active: a ? 'NORMAL' : 'NONE',
      ariaActiveDescendant: n,
      ariaControls: i,
      caret: 'down',
      onKeyDown: t,
      onPointerDown: e,
      recordingKey: 'alignmentControl',
      role: 'combobox',
      svg: xZ['align-left'],
      tooltip: getI18nString('whiteboard.inline_menu.alignment_button')
    }),
    options: e,
    renderOption: ({
      value: e,
      onClick: t,
      id: i,
      isFocused: r
    }) => jsx(K0, {
      active: 'NONE',
      focused: r,
      id: i,
      onPointerUp: e => {
        n && t(e);
      },
      recordingKey: generateRecordingKey('alignmentControl', kebabToCamel(e)),
      role: 'option',
      svg: xZ[e],
      tooltip: e,
      tooltipType: KindEnum.LOOKUP
    }, e),
    OptionWrapper: SC(getI18nString('whiteboard.inline_menu.alignment_button'), i),
    onToggleMenuOpen: r
  });
}
function xJ() {
  let e = () => {
    fullscreenValue.triggerActionInUserEditScope('create-section-from-selection');
  };
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(_$$V4, {
    variant: 'button',
    tooltip: getI18nString('fullscreen_actions.create-section-from-selection'),
    tooltipShortcutActionKey: 'create-section-from-selection',
    ariaLabel: getI18nString('fullscreen_actions.create-section-from-selection'),
    onClick: e,
    recordingKey: 'createSectionFromSelection',
    dataTestId: 'createSectionFromSelection',
    children: jsx(_$$P5, {})
  }) : jsx(K0, {
    tooltip: 'create-section-from-selection',
    tooltipType: KindEnum.LOOKUP,
    svg: _$$A68,
    onClick: e,
    recordingKey: 'createSectionFromSelection',
    testId: 'createSectionFromSelection'
  });
}
let x2 = 'state_swap_library_items--scrollContainer--OX-3k';
let x3 = 'state_swap_library_items--header--9Mr9Y text--fontPos11--2LvXf text--_fontBase--QdLsd';
let x5 = memo(({
  onClose: e
}) => {
  let t = useSelector(e => e.mirror.selectionProperties.stateGroupSelectionInfo);
  let i = useSelector(e => e.mirror.sceneGraphSelection);
  let n = _$$mJ();
  let r = _$$_H();
  let {
    height,
    width,
    gridClassName
  } = function (e) {
    switch (e) {
      case _$$rp.SMALL:
        return {
          height: 70,
          width: 70,
          gridClassName: 'state_swap_library_items--gridContainerSmall---L0dp state_swap_library_items--_gridContainerBase--uPEDp'
        };
      case _$$rp.NORMAL:
        return {
          height: 114,
          width: 114,
          gridClassName: 'state_swap_library_items--gridContainerNormal--sgzpl state_swap_library_items--_gridContainerBase--uPEDp'
        };
      case _$$rp.WIDE:
        return {
          width: 246,
          gridClassName: 'state_swap_library_items--gridContainerWide--UDAfb state_swap_library_items--_gridContainerBase--uPEDp'
        };
      case _$$rp.THIN_2_COL:
        throw new Error('THIN_2_COL layout not implemented for state swap control');
      case _$$rp.THIN_3_COL:
        throw new Error('THIN_3_COL layout not implemented for state swap control');
    }
  }(PI(r.map(e => n.get(e)).filter(isNotNullish)));
  let p = useMemo(() => {
    let l = new Set(t?.selectedStates?.map(e => e.symbol.nodeId));
    return new Map(r.map(t => [t, jsx(_$$lX, {
      item: n.get(t),
      height,
      width,
      shouldHideDescription: !0,
      className: l.has(t) ? 'state_swap_library_items--selected--Pdhuy' : 'state_swap_library_items--notSelected--kXGoA',
      noBackground: !0,
      buttonProps: {
        onItemClick: () => {
          let n = {};
          n[t] = Object.keys(i);
          _$$l.user('swap-states', () => Aw(n));
          e();
        }
      }
    }, t)]));
  }, [n, r, i, height, width, t?.selectedStates, e]);
  return t?.allStates && t?.selectedStates ? getFeatureFlags().figjam_a11y_inline_toolbar ? jsxs(Fragment, {
    children: [jsx('div', {
      className: x3,
      children: renderI18nText('whiteboard.inline_menu.variants')
    }), jsx(RecordingScrollContainer, {
      className: x2,
      children: jsx('div', {
        className: gridClassName,
        children: r.map(e => p.get(e))
      })
    })]
  }) : jsxs('div', {
    className: 'state_swap_library_items--stateSwapMenuContainer--5TGRL',
    children: [jsx('div', {
      className: x3,
      children: renderI18nText('whiteboard.inline_menu.variants')
    }), jsx(RecordingScrollContainer, {
      className: x2,
      children: jsx('div', {
        className: gridClassName,
        children: r.map(e => p.get(e))
      })
    })]
  }) : null;
});
let x4 = memo(() => {
  let e = useRef(null);
  let [t, i] = useState(!1);
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  let a = useSelector(e => e.mirror.selectionProperties.stateGroupSelectionInfo);
  return a?.allStates && a?.selectedStates ? getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(DropdownThemeProvider, {
    mode: 'match',
    children: jsxs(MenuRootComp, {
      manager,
      children: [jsx(_$$V4, {
        variant: 'menu',
        tooltip: getI18nString('whiteboard.inline_menu.see_variants'),
        getTriggerProps,
        ariaLabel: getI18nString('whiteboard.inline_menu.see_variants'),
        recordingKey: 'stateSwapOptions',
        children: jsx(SvgComponent, {
          svg: _$$A69
        })
      }), jsx(MenuContainerComp, {
        children: jsx(x5, {
          onClose: noop
        })
      })]
    })
  }) : jsx(_$$A60, {
    target: jsx(K0, {
      svg: _$$A69,
      ref: e,
      onClick: () => i(!0),
      caret: 'down',
      tooltip: getI18nString('whiteboard.inline_menu.see_variants')
    }),
    onClose: () => i(!1),
    renderPopoverContents: () => jsx(x5, {
      onClose: () => i(!1)
    }),
    isOpen: t,
    positionX: (e, t) => e.x + e.width / 2 - t.width / 2 + 138,
    positionY: e => e.y + e.height + 4
  }) : null;
});
function x7() {
  let e = () => {
    fullscreenValue.triggerActionInUserEditScope('tidy-up');
  };
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(_$$V4, {
    variant: 'button',
    tooltip: getI18nString('fullscreen_actions.tidy-up'),
    tooltipShortcutActionKey: 'tidy-up',
    ariaLabel: getI18nString('fullscreen_actions.tidy-up'),
    onClick: e,
    recordingKey: 'tidyUp',
    dataTestId: 'tidyUp',
    children: jsx(_$$D7, {})
  }) : jsx(K0, {
    svg: _$$A70,
    tooltip: 'tidy-up',
    tooltipType: KindEnum.LOOKUP,
    onClick: e,
    recordingKey: 'tidyUp',
    testId: 'tidyUp'
  });
}
function gn() {
  let e = () => {
    fullscreenValue.triggerActionInUserEditScope('leave-edit-mode');
    fullscreenValue.triggerActionInUserEditScope('delete-selection');
  };
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(_$$V4, {
    variant: 'button',
    tooltip: getI18nString('whiteboard.inline_menu.delete'),
    ariaLabel: getI18nString('whiteboard.inline_menu.delete'),
    onClick: e,
    recordingKey: 'delete',
    children: jsx(_$$i9, {})
  }) : jsx(K0, {
    svg: _$$A71,
    tooltip: getI18nString('whiteboard.inline_menu.delete'),
    onClick: e,
    recordingKey: 'delete'
  });
}
function gs() {
  let e = () => {
    fullscreenValue.triggerActionInUserEditScope('leave-edit-mode');
    fullscreenValue.triggerActionInUserEditScope('duplicate-in-place');
  };
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(_$$V4, {
    variant: 'button',
    tooltip: getI18nString('whiteboard.inline_menu.duplicate'),
    ariaLabel: getI18nString('whiteboard.inline_menu.duplicate'),
    onClick: e,
    recordingKey: 'duplicate',
    children: jsx(_$$u4, {})
  }) : jsx(K0, {
    svg: _$$A72,
    tooltip: getI18nString('whiteboard.inline_menu.duplicate'),
    onClick: e,
    recordingKey: 'duplicate'
  });
}
function gl() {
  let e = e => {
    fullscreenValue.triggerAction('leave-edit-mode');
    fullscreenValue.showSelectionContextMenu(e.clientX, e.clientY);
  };
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(_$$V4, {
    variant: 'button',
    tooltip: getI18nString('whiteboard.inline_menu.show_additional_items'),
    ariaLabel: getI18nString('whiteboard.inline_menu.show_additional_items'),
    onClick: e,
    recordingKey: 'showAdditionalItems',
    children: jsx(_$$J6, {})
  }) : jsx(K0, {
    svg: _$$A73,
    tooltip: getI18nString('whiteboard.inline_menu.show_additional_items'),
    onClick: e,
    recordingKey: 'showAdditionalItems'
  });
}
function gd(e) {
  return BrowserInfo.isIpad ? jsxs(Fragment, {
    children: [e.showLeftSeparator ? jsx(_$$wv4, {}) : null, jsx(gn, {}), jsx(_$$wv4, {}), jsx(gs, {}), jsx(_$$wv4, {}), jsx(gl, {})]
  }) : BrowserInfo.isMeetDevice ? jsxs(Fragment, {
    children: [e.showLeftSeparator ? jsx(_$$wv4, {}) : null, jsx(gs, {}), jsx(_$$wv4, {}), jsx(gn, {})]
  }) : null;
}
let gc = 'whiteboard_inline_menu--faceStampsIPadToolbar--eMV12';
let gu = 'whiteboard_inline_menu--whiteboardInlineMenu--5l5jy';
let gp = memo(() => {
  let e = hw();
  return !function () {
    let e = fC();
    let t = _$$rN();
    let i = void 0 !== e;
    let n = kM();
    let r = _$$yx();
    useEffect(() => {
      let i = fk(e);
      if (i) {
        if (n) {
          let t = setTimeout(() => {
            window.FigmaMobile.nativeContextualToolbarSupportedVersions = void 0;
            n._native_contextual_toolbar_confirm_configuration = () => {};
            reportError(ServiceCategories.FIGJAM, new Error(`Native contextual toolbar did not confirm configuration before timeout, version ${e}`));
          }, 2e3);
          n._native_contextual_toolbar_confirm_configuration = () => {
            clearTimeout(t);
          };
        }
        t?.nativeContextualToolbarAcceptConfiguration?.(i);
        _$$o7(!1);
      } else {
        t?.nativeContextualToolbarRejected?.();
        _$$o7(!0);
      }
      _$$I4(r);
    }, [e, t, n, r]);
    return i;
  }() ? jsx(_$$k6, {
    isShown: e,
    children: jsx(PopoverProvider, {
      children: jsx(gh, {
        testID: 'WhiteboardInlineMenu',
        focusableDivTestId: 'WhiteboardInlineMenuFocusableDiv'
      })
    })
  }) : jsx(fR, {});
});
let gh = memo(({
  testID: e,
  focusableDivTestId: t
}) => {
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(g_, {
    testID: e
  }) : jsx(gm, {
    testID: e,
    focusableDivTestId: t
  });
});
let gm = memo(({
  testID: e,
  focusableDivTestId: t
}) => {
  let i = createRef();
  let n = useAtomWithSubscription(_$$f7);
  let r = useSelector(e => e.mirror.selectionProperties.whiteboardNumSelected);
  let a = useSelector(e => e.mirror.selectionProperties.whiteboardNumSelectedPlatformShape ?? 0);
  let s = useSelector(e => e.mirror.selectionProperties.stateGroupSelectionInfo?.stateGroup);
  let f = useSelector(e => e.mirror.sceneGraphSelection);
  let _ = selectWithShallowEqual(e => e.mirror.selectionProperties.whiteboardControls);
  let x = !!_?.includes(WhiteboardFeatures.DESCRIPTION);
  let g = !!useSelectionPropertyValue('locked');
  let [j, b] = useState(!1);
  let [y, v] = useState(g);
  let C = _$$$3(f);
  let T = _$$h8(g);
  useEffect(() => {
    C && b(!1);
  }, [C, b]);
  gj({
    lockStateChanged: T,
    selectionChanged: C,
    setShouldSectionShowUnlockWithFriction: v
  });
  useFocusArea(i);
  let E = useSelector(e => {
    let t = Object.keys(e.mirror.sceneGraphSelection);
    return t.length === 1 && n.currentlySelectedNode.nodeId === t[0] ? n.currentlySelectedNode.ariaLabel : null;
  });
  let S = fd();
  let [w, I] = useState(!0);
  let L = _$$d4();
  let N = _$$Cb();
  let O = _$$QP2();
  let k = !isAIFeaturesEnabledForCurrentUser();
  let R = Zr('align-top');
  let M = Zr('tidy-up');
  let D = R && M && !N;
  let P = Zr('create-section-from-selection') && !N;
  if (g) {
    return jsx(gf, {
      testID: e,
      menuRef: i,
      shouldSectionShowUnlockWithFriction: y
    });
  }
  if (!_) return null;
  if (x && j) {
    return jsx(u6, {
      setIsEditorOpen: b
    });
  }
  let {
    leftContentControls,
    menuMarginBottom,
    rightControlsEnabled
  } = gb({
    controls: _,
    setIsImageDescriptionEditorOpen: b,
    imageDescriptionControlShown: x,
    stateGroup: s,
    numberSelected: r,
    numSelectedPlatformShape: a
  });
  let B = jsxs(Fragment, {
    children: [...leftContentControls]
  });
  let V = k && O;
  let G = gy({
    rightControlsEnabled,
    alignEnabled: R,
    ungroupEnabled: S,
    showTidyUpControl: D,
    showCreateSectionControl: P,
    shouldShowOrganizeDropdown: N,
    leftContentControls,
    figjamAiQuickActionShown: V
  });
  let K = G && jsxs(Fragment, {
    children: [...G]
  });
  let W = getFeatureFlags().figjam_a11y_inline_toolbar ? _$$bo : _$$Fragment;
  return jsx(TrackingProvider, {
    name: 'inline_toolbar',
    properties: {
      figjam_ai_control_shown: V,
      figjam_organize_control_shown: N
    },
    children: jsx('div', {
      className: ex()(gu, {
        [gc]: L && isIpadDevice
      }),
      children: jsx(TabLoop, {
        children: jsx(W, {
          children: jsxs(W1, {
            ariaHidden: w,
            ariaLabel: E == null ? getI18nString('whiteboard.inline_menu.inline_menu_label') : getI18nString('whiteboard.inline_menu.inline_menu_label_with_selected_node', {
              selectedNodeAriaLabel: E
            }),
            focusableDivTestId: t,
            marginBottom: menuMarginBottom,
            menuRef: i,
            onBlurCapture: e => {
              e.relatedTarget && !e.currentTarget.contains(e.relatedTarget) && I(!0);
            },
            onFocus: () => {
              I(!1);
            },
            propagateInputToFullscreen: !0,
            role: 'region',
            tabIndex: -1,
            testID: e,
            children: [B, K, jsx(gd, {
              showLeftSeparator: B !== null || K !== null
            }), jsx(_$$x4, {})]
          })
        })
      })
    })
  });
});
function gf({
  testID: e,
  menuRef: t,
  shouldSectionShowUnlockWithFriction: i
}) {
  return jsx(W1, {
    testID: e,
    menuRef: t,
    children: i ? jsx(f$, {}) : jsx(fG, {
      shouldAnimateOnHover: !0
    })
  });
}
let g_ = memo(({
  testID: e
}) => {
  let t;
  let i;
  let n;
  let r = createRef();
  let a = useAtomWithSubscription(_$$f7);
  let s = useSelector(e => e.mirror.sceneGraphSelection);
  let u = selectWithShallowEqual(e => e.mirror.selectionProperties.whiteboardControls);
  let f = !!u?.includes(WhiteboardFeatures.DESCRIPTION);
  let _ = !!useSelectionPropertyValue('locked');
  let [x, g] = useState(!1);
  let [j, b] = useState(_);
  let y = _$$$3(s);
  let v = _$$h8(_);
  useEffect(() => {
    y && g(!1);
  }, [y, g]);
  gj({
    lockStateChanged: v,
    selectionChanged: y,
    setShouldSectionShowUnlockWithFriction: b
  });
  useFocusArea(r);
  let C = useSelector(e => {
    let t = Object.keys(e.mirror.sceneGraphSelection);
    return t.length === 1 && a.currentlySelectedNode.nodeId === t[0] ? a.currentlySelectedNode.ariaLabel : null;
  });
  let [T, E] = useState(!0);
  let [S, w] = useState(void 0);
  let I = _$$d4();
  let L = useCallback(e => {
    e.relatedTarget && !e.currentTarget.contains(e.relatedTarget) && E(!0);
  }, [E]);
  let N = useCallback(() => {
    E(!1);
  }, [E]);
  let O = _$$Cb();
  let k = _$$QP2();
  let R = !isAIFeaturesEnabledForCurrentUser() && k;
  if (!u) return null;
  if (f && x) {
    return jsx(u6, {
      setIsEditorOpen: g
    });
  }
  let M = ex()(gu, {
    [gc]: I && isIpadDevice
  });
  _ ? (i = getI18nString('whiteboard.inline_menu.lock_options'), t = jsx(gx, {
    shouldSectionShowUnlockWithFriction: j
  }), n = {}) : (i = C == null ? getI18nString('whiteboard.inline_menu.inline_menu_label') : getI18nString('whiteboard.inline_menu.inline_menu_label_with_selected_node', {
    selectedNodeAriaLabel: C
  }), n = {
    figjam_ai_control_shown: R,
    figjam_organize_control_shown: O
  }, t = jsx(gg, {
    controls: u || [],
    imageDescriptionControlShown: f,
    setIsImageDescriptionEditorOpen: g,
    figjamAiQuickActionShown: R,
    onMenuMarginBottomChange: w
  }));
  return jsx(TrackingProvider, {
    name: 'inline_toolbar',
    properties: n,
    children: jsx('div', {
      className: M,
      children: jsx(TabLoop, {
        children: jsx(_$$bo, {
          children: jsx(_$$N3, {
            'aria-hidden': T,
            'orientation': 'horizontal',
            'aria-label': i,
            'className': 'whiteboard_inline_menu--toolbarPrimitive--W8vkv',
            'data-testid': e,
            'htmlAttributes': {
              onBlurCapture: L,
              onFocus: N,
              role: 'region'
            },
            'ref': r,
            'style': S ? {
              marginBottom: S
            } : void 0,
            'children': t
          })
        })
      })
    })
  });
});
let gx = memo(({
  shouldSectionShowUnlockWithFriction: e
}) => {
  return jsx(Fragment, {
    children: e ? jsx(f$, {}) : jsx(fG, {
      shouldAnimateOnHover: !0
    })
  });
});
let gg = memo(({
  controls: e,
  setIsImageDescriptionEditorOpen: t,
  imageDescriptionControlShown: i,
  figjamAiQuickActionShown: n,
  onMenuMarginBottomChange: r
}) => {
  let a = useSelector(e => e.mirror.selectionProperties.whiteboardNumSelected);
  let s = useSelector(e => e.mirror.selectionProperties.whiteboardNumSelectedPlatformShape ?? 0);
  let c = useSelector(e => e.mirror.selectionProperties.stateGroupSelectionInfo?.stateGroup);
  let u = _$$Cb();
  let p = Zr('align-top');
  let h = Zr('tidy-up');
  let m = p && h && !u;
  let f = Zr('create-section-from-selection');
  let _ = fd();
  let {
    leftContentControls,
    rightControlsEnabled,
    menuMarginBottom
  } = gb({
    controls: e,
    setIsImageDescriptionEditorOpen: t,
    imageDescriptionControlShown: i,
    stateGroup: c,
    numberSelected: a,
    numSelectedPlatformShape: s
  });
  useEffect(() => {
    r(menuMarginBottom);
  }, [r, menuMarginBottom]);
  let b = jsxs(Fragment, {
    children: [...leftContentControls]
  });
  let y = gy({
    rightControlsEnabled,
    alignEnabled: p,
    ungroupEnabled: _,
    showTidyUpControl: m,
    showCreateSectionControl: f && !u,
    shouldShowOrganizeDropdown: u,
    leftContentControls,
    figjamAiQuickActionShown: n
  });
  let v = y && jsxs(Fragment, {
    children: [...y]
  });
  return jsxs(Fragment, {
    children: [b, v, jsx(gd, {
      showLeftSeparator: b !== null || v !== null
    }), jsx(_$$x4, {})]
  });
});
function gj({
  lockStateChanged: e,
  selectionChanged: t,
  setShouldSectionShowUnlockWithFriction: i
}) {
  useLayoutEffect(() => {
    e && !t ? i(!1) : t && i(!0);
  }, [e, t, i]);
}
function gb({
  controls: e,
  setIsImageDescriptionEditorOpen: t,
  imageDescriptionControlShown: i,
  stateGroup: n,
  numberSelected: r,
  numSelectedPlatformShape: a
}) {
  let s;
  let l = [];
  let d = !1;
  i ? e.forEach((e, i) => {
    let n = jsx(xL, {
      control: e
    }, `${e}-${i}`);
    e === WhiteboardFeatures.DESCRIPTION && (n = jsx(Dz, {
      setIsEditorOpen: t
    }, `${e}-${i}`));
    l.push(n);
  }) : n && r === 1 && a === 0 ? l.push(jsx(x4, {}, 'state-swap-control')) : e.length === 1 && e[0] === WhiteboardFeatures.WIDGET && r === 1 ? (l.push(jsx(_$$jk, {}, 'widget-controls')), s = 16) : (d = !0, e.length > 0 && l.push(jsx(gv, {
    controls: e
  }, 'control-set')));
  return {
    leftContentControls: l,
    menuMarginBottom: s,
    rightControlsEnabled: d
  };
}
function gy({
  rightControlsEnabled: e,
  alignEnabled: t,
  showTidyUpControl: i,
  ungroupEnabled: n,
  showCreateSectionControl: r,
  shouldShowOrganizeDropdown: a,
  leftContentControls: s,
  figjamAiQuickActionShown: l
}) {
  if (!e) return null;
  let d = [t && jsx(xY, {}), i && jsx(x7, {}), n && jsx(fl, {}), r && jsx(xJ, {}), a && jsx(_$$tT, {}), l && jsx(_$$s_, {})].filter(Boolean);
  d.length && s.length && d.unshift(jsx(_$$wv4, {}, 'separator-right-content'));
  return d;
}
function gv({
  controls: e
}) {
  return e.length ? jsx(Fragment, {
    children: e.map((e, t) => jsx(xL, {
      control: e
    }, `${e}-${t}`))
  }) : null;
}
let gC = memo(() => {
  let e = function () {
    let e = useSelector(e => e.mirror.appModel.hyperlinkLocation);
    let t = useDropdownState();
    let i = t && t.type === K9;
    let n = useSelector(e => e.progressBarState.mode === UIVisibilitySetting.HIDE_UI);
    let r = hC();
    let a = useSelector(e => e.mirror.selectionProperties.numSelectedByType?.SHAPE_WITH_TEXT === 1 && e.mirror.selectionProperties.numSelected === 1);
    return !useSelector(e => !e.mirror.selectionProperties.numSelected || e.mirror.selectionProperties.numSelected === 0) && !e && !n && !i && a && r;
  }();
  let t = useSelector(hE);
  let i = getViewportZoom({
    subscribeToUpdates_expensive: !1
  });
  let n = useSelector(hS);
  if (!n) return null;
  let r = function (e, t, i) {
    let n = roundedDivision(168, i);
    let r = roundedDivision(130, i);
    let a = roundedDivision(40, i);
    let s = roundedDivision(4, i);
    switch (InteractionCpp.getQuickAddInteraction()) {
      case PointerAction.CLICK:
        {
          let o = {
            x: e.absoluteBoundingBox.x,
            y: e.absoluteBoundingBox.y,
            width: e.absoluteBoundingBox.w,
            height: e.absoluteBoundingBox.h
          };
          let l = roundedDivision(20, i);
          let d = {
            x: 0,
            y: 0,
            width: n,
            height: r
          };
          let u = o.x + o.width / 2 - n / 2;
          let p = o.y + o.height / 2 - (r - a / 2 - s);
          switch (t) {
            case Side.TOP:
              d.x = u;
              d.y = o.y + -r;
              return d;
            case Side.BOTTOM:
              d.x = u;
              d.y = o.y + o.height + -(r - a / 2 - 2 * s - l);
              return d;
            case Side.LEFT:
              d.x = o.x + -(n / 2 + l);
              d.y = p;
              return d;
            case Side.RIGHT:
              d.x = o.x + o.width + -(n / 2 - l);
              d.y = p;
              return d;
          }
        }
      case PointerAction.DRAG:
        return {
          x: e.connectorEndCanvasPosition.x - n / 2,
          y: e.connectorEndCanvasPosition.y - r + a / 2 + s,
          width: n,
          height: r
        };
    }
  }(n, t, i);
  return r ? jsx(_$$k6, {
    isShown: e,
    centerInFrame: !0,
    anchorToRect: r,
    children: jsx(PopoverProvider, {
      children: jsx(gT, {
        testID: 'WhiteboardInlineQuickAddMenu',
        focusableDivTestId: 'WhiteboardInlineQuickAddMenuFocusableDiv'
      })
    })
  }) : null;
});
let gT = memo(({
  testID: e,
  focusableDivTestId: t
}) => {
  let i = useRef(null);
  return useSelectionPropertyValue('locked') ? jsx(W1, {
    testID: e,
    menuRef: i,
    children: jsx(fG, {})
  }) : jsx('div', {
    children: jsx(W1, {
      testID: e,
      focusableDivTestId: t,
      menuRef: i,
      ariaLabel: getI18nString('whiteboard.inline_menu.inline_menu_label'),
      role: 'region',
      tabIndex: -1,
      propagateInputToFullscreen: !0,
      children: jsx(xw, {})
    })
  });
});
let gM = 'figjam_search';
function gD() {
  return L3() ? jsx(gP, {}) : null;
}
function gP() {
  let {
    query,
    next,
    exit,
    setNavigateNearestOnce,
    search,
    isLoading,
    mode
  } = SQ();
  let {
    focusedByButtons,
    hidden,
    setHidden,
    inputRef,
    navDisabled
  } = CT();
  let x = BI();
  useSingleEffect(() => {
    setHidden(!1);
  });
  _$$A74(inputRef, next, focusedByButtons);
  let [g, j] = useState('');
  let y = useCallback(e => {
    e.keyCode === KeyCodes.ESCAPE ? (e.target?.blur?.(), setHidden(!0)) : e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && handleKeyboardEventByState(e, KeyboardEventResponse.YES, KeyboardEventResponse.NO) && e.stopPropagation();
  }, [setHidden]);
  let v = useCallback(e => {
    switch (e.keyCode) {
      case KeyCodes.P:
      case KeyCodes.UP_ARROW:
        (e.keyCode !== KeyCodes.P || BrowserInfo.mac && isExactModifier(e, ModifierKeyCodes.CONTROL)) && (next(_$$OP.PREV, 'keyboard'), e.stopPropagation(), e.preventDefault());
        break;
      case KeyCodes.N:
      case KeyCodes.DOWN_ARROW:
        (e.keyCode !== KeyCodes.N || BrowserInfo.mac && isExactModifier(e, ModifierKeyCodes.CONTROL)) && (next(_$$OP.NEXT, 'keyboard'), e.stopPropagation(), e.preventDefault());
        break;
      case KeyCodes.ENTER:
        if (isCommandEvent(e)) {
          CanvasSearchHelpers?.exitSearchMode(SelectionState.SELECT_ACTIVE);
          break;
        }
        next(e.shiftKey ? _$$OP.PREV : _$$OP.NEXT, 'keyboard');
        e.stopPropagation();
        e.preventDefault();
    }
  }, [next]);
  let C = U1();
  let T = !x?.shouldOptimizeForIpadApp;
  return jsx(TabLoop, {
    children: jsxs('div', {
      ref: C,
      className: ex()(Dm, 'figjam_search--container--p-leE', {
        'figjam_search--hidden--FjJ1m': hidden
      }),
      onTransitionEnd: () => {
        hidden && exit();
      },
      onBlurCapture: e => {
        e.relatedTarget && !e.currentTarget.contains(e.relatedTarget) && (CanvasSearchHelpers?.setOverlayVisible(!1), setNavigateNearestOnce());
      },
      onKeyDown: y,
      children: [jsxs('div', {
        className: 'figjam_search--searchBarRow--sTc8s',
        children: [jsx(_$$ih, {
          onChange: e => search(e),
          query,
          focusedByButtons,
          innerRef: inputRef,
          onKeyDown: v,
          editorType: FileKindEnum.FIGJAM
        }), isLoading ? jsx('div', {
          className: _$$dz,
          children: jsx(LoadingSpinner, {
            htmlAttributes: {
              'data-testid': 'canvas-search-loading-spinner'
            }
          })
        }) : jsxs(Fragment, {
          children: [!!query && jsx(gU, {}), !navDisabled && jsxs(Fragment, {
            children: [jsx(IconButton, {
              'disabled': navDisabled,
              'onClick': e => {
                next(_$$OP.PREV, 'button');
                !SK(e) && T && (focusedByButtons.current = !0, inputRef.current.focus());
              },
              'aria-label': getI18nString('canvas_search.previous'),
              'recordingKey': 'canvas_search.previous',
              'htmlAttributes': {
                'data-tooltip-type': KindEnum.TEXT,
                'data-tooltip': getI18nString('canvas_search.previous'),
                'data-tooltip-shortcut-key': 'canvas-search-prev'
              },
              'children': jsx(_$$l2, {})
            }), jsx(IconButton, {
              'disabled': navDisabled,
              'onClick': e => {
                next(_$$OP.NEXT, 'button');
                !SK(e) && T && (focusedByButtons.current = !0, inputRef.current.focus());
              },
              'aria-label': getI18nString('canvas_search.next'),
              'recordingKey': 'canvas_search.next',
              'htmlAttributes': {
                'data-tooltip-type': KindEnum.TEXT,
                'data-tooltip': getI18nString('canvas_search.next'),
                'data-tooltip-shortcut-key': 'canvas-search-next'
              },
              'children': jsx(_$$k2, {})
            })]
          })]
        }), jsx(Od, {
          lean: I_.LEFT,
          minWidth: getFeatureFlags().eu_fpl_migration_search_settings_menu ? 160 : 116,
          recordingKey: gM,
          shouldShowSearchCategories: !1
        }), jsx(IconButton, {
          'onClick': () => {
            setHidden(!0);
          },
          'aria-label': getI18nString('canvas_search.close'),
          'recordingKey': 'canvas_search.close',
          'htmlAttributes': {
            'data-tooltip-type': KindEnum.TEXT,
            'data-tooltip': getI18nString('canvas_search.close')
          },
          'children': jsx(_$$A2, {})
        })]
      }), mode === EditAction.REPLACE && jsx(_$$a1, {
        query,
        value: g,
        onChange: j,
        recordingKey: gM,
        onFocus: (t, i) => {
          !query && i && inputRef.current?.focus();
        },
        hasMultipleSelections: !1
      })]
    })
  });
}
function gU() {
  let {
    total
  } = useAtomWithSubscription(counterAtom);
  let t = useAtomWithSubscription(currentSelectionAtom);
  let i = t?.index == null ? '?' : `${t.index + 1}`;
  let n = total === 0 ? getI18nString('canvas_search.no_results') : getI18nString('canvas_search.results_index_count', {
    index: i,
    total
  });
  return jsx('span', {
    'className': 'figjam_search--resultsCount--VfQrc',
    'data-testid': 'canvas-search-info',
    'children': n
  });
}
let gG = forwardRef((e, t) => {
  return jsx('div', {
    ref: t,
    style: e.style,
    className: ex()('whiteboard_sidebar_modal--WhiteboardSidebarModal--PALf6', e.className),
    children: e.children
  });
});
let gz = 500;
let gZ = 'audioplayinvoked';
let g$ = 'audioplaysuccess';
class gY {
  constructor(e) {
    this.play = ({
      onSuccess: e,
      onNoInteractionFailure: t
    }) => {
      let i = () => {
        window.removeEventListener(gZ, this.audioPlayInvokedHandler);
        window.removeEventListener(g$, this.audioPlaySuccessHandler);
      };
      window.dispatchEvent(this.audioPlayInvokedEvent);
      this.audio.play().then(() => {
        if (this.shouldBlockPlay) {
          this.audio.pause();
          this.isAttemptingToPlay = !1;
          return;
        }
        this.lastPlayedTimestamp = Date.now();
        window.dispatchEvent(this.audioPlaySuccessEvent);
        this.isFadingOut ? this.fadeOut({}) : (this.internalVolumeMultiplier = 0, this.fadeIn({
          fadeInLength: 1e3
        }));
        e && e();
        this.isAttemptingToPlay = !1;
        i();
      }).catch(e => {
        if (this.isAttemptingToPlay = !1, e.name === 'NotAllowedError' && t) {
          t();
          return;
        }
        if (e.message.toLowerCase().includes('interrupted by a new load request')) {
          logDebug('FigJam MusicPlayer', 'Benign race condition: new track was requested while the promise to play the previous track was resolving (no user impact)');
          return;
        }
        throw new Error(`Failed to play music in the FigJam timer: ${e}`);
      });
    };
    this.playLoadingAudio = () => {
      this.loadingAudio.currentSrc && this.loadingAudio.play().catch(e => {
        if (e.name !== 'NotAllowedError') throw new Error(`Failed to play loading music in the FigJam timer: ${e}`);
      });
    };
    this.stopLoadingAudio = () => {
      this.loadingAudio.currentSrc && (this.loadingAudio.pause(), this.setTimestamp(0, this.loadingAudio));
    };
    this.isPaused = () => this.audio.paused || this.shouldBlockPlay;
    this.isPlaying = () => !this.isPaused();
    this.setTimestamp = (e, t) => {
      if (t) {
        if (t.seeking || t.readyState <= 0) {
          console.warn('Already seeking or audio isn\'t ready, can\'t set timestamp.');
          return;
        }
        t.fastSeek ? t.fastSeek(e) : t.currentTime = e;
      }
    };
    this.playAtTimestamp = ({
      src: e,
      timestamp: t,
      onSuccess: i,
      onFailure: n
    }) => {
      this.isAttemptingToPlay = !1;
      let r = () => {
        this.setTimestamp(t / 1e3 % this.audio.duration, this.audio);
        this.play({
          onSuccess: i,
          onNoInteractionFailure: n
        });
      };
      window.addEventListener(gZ, this.audioPlayInvokedHandler);
      window.addEventListener(g$, this.audioPlaySuccessHandler);
      this.playLoadingAudio();
      this.setSource('');
      this.shouldBlockPlay = !1;
      this.audio.oncanplaythrough = () => {
        this.audio.oncanplaythrough = null;
        this.handleVolumeUpdate();
        r();
      };
      this.setSource(e);
    };
    this.playPreview = ({
      src: e,
      timestampMs: t = 0,
      playLengthMs: i,
      fadeLengthMs: n = gz
    }) => {
      let r = this.hasSource();
      this.playAtTimestamp({
        src: e,
        timestamp: t,
        onSuccess: () => {
          this.isPaused() || !r ? this.internalVolumeMultiplier = 0 : this.clearFadeTimeouts();
          this.fadeIn({});
          this.internalFadeOutTimeoutId = window.setTimeout(() => {
            this.internalFadeOutTimeoutId = 0;
            this.fadeOut({
              fadeOutLength: n,
              shouldStopWhenFadedOut: !0,
              targetVolumeMultiplier: 0
            });
          }, i + 2 * n);
        }
      });
    };
    this.stopPreview = () => {
      this.internalFadeOutTimeoutId && clearTimeout(this.internalFadeOutTimeoutId);
      this.internalFadeOutTimeoutId = 0;
      this.stop();
    };
    this.clearFadeTimeouts = () => {
      this.internalFadeOutTimeoutId && clearTimeout(this.internalFadeOutTimeoutId);
      this.internalFadeInTimeoutId && clearTimeout(this.internalFadeInTimeoutId);
    };
    this.resetFades = () => {
      this.clearFadeTimeouts();
      this.internalVolumeMultiplier = 1;
      this.isFadingOut = !1;
      this.isFadingIn = !1;
    };
    this.pause = () => {
      this.stopLoadingAudio();
      this.audio.paused || this.shouldBlockPlay || this.isAttemptingToPlay || (this.audio.pause(), this.clearFadeTimeouts());
      this.shouldBlockPlay = !0;
    };
    this.stop = () => {
      this.stopLoadingAudio();
      this.resetFades();
      this.shouldBlockPlay = !0;
      this.audio.pause();
      this.audio.removeAttribute('src');
    };
    this.hasSource = () => this.audio.currentSrc !== '';
    this.setSource = e => {
      this.audio.src = e;
    };
    this.setIsMuted = e => {
      this.audio.muted = e;
      this.loadingAudio.muted = e;
      this.isMuted = e;
      this.handleVolumeUpdate();
    };
    this.getCurrentVolume = () => this.isMuted ? 0 : clamp(this.externalVolume * this.internalVolumeMultiplier, 0, 1);
    this.handleVolumeUpdate = () => {
      this.audio.volume = this.getCurrentVolume();
    };
    this.setVolume = e => {
      this.externalVolume = e;
      this.handleVolumeUpdate();
    };
    this.fadeOut = ({
      fadeOutLength: e = 5e3,
      shouldStopWhenFadedOut: t = !1,
      targetVolumeMultiplier: i = 0,
      callbackWhenDoneFading: n,
      resumeFadingIfInterrupted: r = !0
    }) => {
      this.clearFadeTimeouts();
      let a = 1 / (e / 50);
      let s = () => {
        !this.audio.paused && (this.internalVolumeMultiplier > i ? (this.internalVolumeMultiplier -= a, this.handleVolumeUpdate(), this.internalFadeOutTimeoutId = window.setTimeout(s, 50)) : (this.internalFadeOutTimeoutId = 0, t && this.stop(), this.handleVolumeUpdate(), this.isFadingOut = !1, n && n()));
      };
      r && (this.isFadingOut = !0);
      s();
    };
    this.fadeIn = ({
      fadeInLength: e = 1e3,
      callbackWhenDoneFading: t
    }) => {
      this.clearFadeTimeouts();
      let i = 1 / (e / 50);
      let n = () => {
        !this.audio.paused && (this.internalVolumeMultiplier < 1 ? (this.internalVolumeMultiplier += i, this.handleVolumeUpdate(), this.internalFadeInTimeoutId = window.setTimeout(n, 50)) : (this.internalFadeInTimeoutId = 0, this.handleVolumeUpdate(), this.isFadingIn = !1, t && t()));
      };
      this.isFadingIn = !0;
      n();
    };
    this.isAttemptingToPlay = !1;
    this.audio = new Audio();
    this.audio.src = '';
    this.audio.loop = !0;
    this.loadingAudio = new Audio();
    e && e.loadingPlaybackUrl && (this.loadingAudio.src = e.loadingPlaybackUrl);
    this.loadingAudio.loop = !0;
    this.audioPlayInvokedEvent = new Event(gZ);
    this.audioPlayInvokedHandler = () => {
      this.isAttemptingToPlay = !0;
    };
    this.audioPlaySuccessEvent = new Event(g$);
    this.audioPlaySuccessHandler = () => {
      this.loadingAudio.currentSrc && this.loadingAudio.pause();
      this.isAttemptingToPlay = !1;
    };
    this.externalVolume = 0.7;
    this.isMuted = !1;
    this.isFadingOut = !1;
    this.isFadingIn = !1;
    this.shouldBlockPlay = !1;
    this.internalVolumeMultiplier = 1;
    this.internalFadeOutTimeoutId = 0;
    this.internalFadeInTimeoutId = 0;
    this.lastPlayedTimestamp = null;
  }
}
let gq = e => useSelector(t => {
  let i = t.music.activeSongs.filter(t => e === t.song_id);
  return i.length ? i[0] : void 0;
}, isSameSong);
function gJ() {
  let e = useSelector(e => e.music.music);
  return !e?.isPaused && !e?.isStopped;
}
let gQ = buildUploadUrl('f4e48159672101a168b296a94e39ef02f032e171');
let g0 = () => {
  let [e, t] = useState({});
  let i = useSelector(e => e.music.music);
  useEffect(() => {
    if (!i || i?.isPaused || i?.isStopped) return;
    let e = setTimeout(() => t({}), 500);
    return () => {
      clearTimeout(e);
    };
  }, [e, i, i?.isPaused]);
  return e;
};
let g5 = 'music_dropdown--inDropdownAlbumArt---OmqE';
let g4 = {
  song_id: 'fake track for no selection',
  localization_key: '',
  title: '',
  album_art: '',
  playback_url: '',
  start_at_ms: 0,
  cuesheet: {
    tracks: []
  }
};
function g9({
  selectedSong: e,
  activeSongs: t,
  isLoading: i,
  withBorder: n,
  withHeavyFont: r
}) {
  let a = useSelector(e => e.dropdownShown?.type === 'song-dropdown' ? e.dropdownShown : null);
  let [s, c] = useState(void 0);
  let u = useStore();
  let p = useDispatch<AppDispatch>();
  let h = useSelector(e => e.music.playerInstance);
  let m = e || g4;
  let f = shouldOptimizeForIpad();
  let x = [jsx(_$$c$3, {
    fullWidth: !0,
    ignoreCheck: !0,
    children: jsx('div', {
      className: 'music_dropdown--loadingSpinner--0IUIG',
      children: jsx(LoadingSpinner, {})
    })
  }, 'loading-music-options')];
  useEffect(() => {
    let n = t.length && !i;
    let r = !e;
    let a = t[0];
    n && r && a && p(updateMusicSongIdThunk({
      selectedSongID: a.song_id
    }));
  }, [i, e, p, t]);
  i || (x = t.map(e => jsx(_$$c$3, {
    value: e,
    icon: jsx(WAFImage, {
      src: e.album_art,
      alt: `album art for ${e.title}`,
      className: g5
    }),
    height: 48
  }, e.song_id)));
  let g = jsx(_$$Q3, {
    setMaxWidth: e => {
      void 0 === e ? c(void 0) : c(Math.max(e, 224));
    },
    options: x,
    formatOption: e => g8.format(e.props.value),
    getIcon: e => jsx(WAFImage, {
      src: e.props.value.album_art,
      alt: `album art for ${e.props.value.album_art.title}`,
      className: g5
    })
  });
  let j = async t => {
    t.song_id === g4.song_id ? e && (trackRemovesSong(u.getState(), e.song_id), p(resetSelectedSongAndMusicStartTime({
      selectedSongID: '',
      musicStartTimeMs: 0
    }))) : await fetchActiveSong({
      songID: t.song_id,
      onSuccess: () => {
        let e = h?.isPlaying();
        trackChangesSong(u.getState(), t.song_id, e || !1);
        let i = t.song_id;
        p(updateMusicSongIdThunk({
          selectedSongID: i,
          dontTransmitWhenPaused: !0
        }));
      },
      onNotFound: () => {
        p(fetchActiveSongsThunk());
        p(VisualBellActions.enqueue({
          message: getI18nString('whiteboard.timer.song_not_available_error'),
          error: !0,
          type: ACTIVE_SONG_NOT_FOUND
        }));
      }
    });
  };
  let b = m === g4 ? getI18nString('whiteboard.music.loading') : void 0;
  return jsxs(Fragment, {
    children: [jsx(_$$l9, {
      'ariaLabel': getI18nString('whiteboard.music_player_select.aria_label'),
      'className': 'music_dropdown--songDropdownClosed--PEWeP',
      'data-testid': 'music-dropdown-button',
      'dispatch': p,
      'dropdownAlignment': 'right',
      'dropdownOverride': b,
      'dropdownShown': a,
      'dropdownWidth': s,
      'formatter': g8,
      'hideDropdownWhenContainerMoves': !0,
      'icon': m === g4 ? jsx(MediaQuerySvgComponent, {
        className: 'music_dropdown--musicIcon--rYDUF',
        svg: _$$A75
      }) : void 0,
      'id': 'song-dropdown',
      'inputClassName': ex()('music_dropdown--songDropdownInput--VQjWF', {
        'music_dropdown--songInputTextSongSelected--4mWzH': !!e,
        'music_dropdown--songInputTextNoSongSelected--AW4Zi': !e,
        'music_dropdown--songDropdownHeavyFont--fIlJd': r,
        'music_dropdown--border--8RslA': n,
        'music_dropdown--withHover--5STIo': n && !f
      }),
      'neverConstrain': !0,
      'onChange': j,
      'property': m,
      'targetDomNode': document.body,
      'willShowDropdown': () => new Promise(e => {
        trackOpensMusicDropdown(u.getState());
        e();
      }),
      'children': x
    }), g]
  });
}
let g8 = {
  format: e => {
    let t;
    return e?.localization_key ? (t = e.localization_key, getI18nString(`figjam_songs.${t}.title`)) : '';
  }
};
function g7({
  useLightShadow: e
}) {
  return jsxs('svg', {
    width: '96',
    height: '96',
    viewBox: '0 0 96 96',
    fill: 'none',
    style: {
      height: '100%',
      width: '100%',
      filter: e ? 'drop-shadow(0px 0.325px 0.813px rgba(0, 0, 0, 0.15)) drop-shadow(0px 1.625px 2.6px rgba(0, 0, 0, 0.12)) drop-shadow(0px 0px 0.081px rgba(0, 0, 0, 0.12))' : 'drop-shadow(0px 1.625px 4.062500476837158px rgba(0, 0, 0, 0.15)) drop-shadow(0px 8.125000953674316px 13px rgba(0, 0, 0, 0.12)) drop-shadow(0px 0px 0.40625px rgba(0, 0, 0, 0.12))'
    },
    children: [jsxs('mask', {
      id: 'mask0_134_226',
      style: {
        maskType: 'alpha'
      },
      maskUnits: 'userSpaceOnUse',
      x: '0',
      y: '0',
      width: '96',
      height: '96',
      children: [jsx('circle', {
        cx: '48',
        cy: '48',
        r: '48',
        fill: 'black'
      }), jsx('circle', {
        cx: '48',
        cy: '48',
        r: '48',
        fill: 'url(#paint0_radial_134_226)'
      }), jsx('circle', {
        cx: '48',
        cy: '48',
        r: '47.1875',
        stroke: 'black',
        strokeOpacity: '0.8',
        strokeWidth: '1.625'
      })]
    }), jsxs('g', {
      mask: 'url(#mask0_134_226)',
      children: [jsx('circle', {
        cx: '48',
        cy: '48',
        r: '48',
        fill: 'black'
      }), jsx('circle', {
        cx: '48',
        cy: '48',
        r: '48',
        fill: 'url(#paint1_radial_134_226)'
      }), jsx('circle', {
        cx: '48',
        cy: '48',
        r: '47.1875',
        stroke: 'black',
        strokeOpacity: '0.3',
        strokeWidth: '1.625'
      }), jsx('circle', {
        cx: '47.9999',
        cy: '48',
        r: '48.3438',
        stroke: 'url(#paint2_linear_134_226)',
        strokeWidth: '0.8125'
      }), jsx('circle', {
        cx: '47.9999',
        cy: '48',
        r: '45.0938',
        stroke: 'url(#paint3_linear_134_226)',
        strokeWidth: '0.8125'
      }), jsx('circle', {
        cx: '47.9999',
        cy: '48',
        r: '41.8438',
        stroke: 'url(#paint4_linear_134_226)',
        strokeWidth: '0.8125'
      }), jsx('circle', {
        cx: '47.9999',
        cy: '48',
        r: '38.5938',
        stroke: 'url(#paint5_linear_134_226)',
        strokeWidth: '0.8125'
      }), jsx('circle', {
        cx: '47.9999',
        cy: '48',
        r: '35.3438',
        stroke: 'url(#paint6_linear_134_226)',
        strokeWidth: '0.8125'
      }), jsx('circle', {
        cx: '47.9999',
        cy: '48',
        r: '32.0938',
        stroke: 'url(#paint7_linear_134_226)',
        strokeWidth: '0.8125'
      }), jsx('g', {
        filter: 'url(#filter0_f_134_226)',
        children: jsx('path', {
          d: 'M47.6379 42.7921L50.2388 118.707L-34.6776 45.6123L47.6379 42.7921Z',
          fill: 'url(#paint8_linear_134_226)'
        })
      }), jsx('g', {
        filter: 'url(#filter1_f_134_226)',
        children: jsx('path', {
          d: 'M56.3805 43.3806L56.3805 -32.5788L138.744 43.3806L56.3805 43.3806Z',
          fill: 'url(#paint9_linear_134_226)'
        })
      })]
    }), jsxs('defs', {
      children: [jsxs('filter', {
        id: 'filter0_f_134_226',
        x: '-42.8026',
        y: '34.6671',
        width: '101.166',
        height: '92.1648',
        filterUnits: 'userSpaceOnUse',
        colorInterpolationFilters: 'sRGB',
        children: [jsx('feFlood', {
          floodOpacity: '0',
          result: 'BackgroundImageFix'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'BackgroundImageFix',
          result: 'shape'
        }), jsx('feGaussianBlur', {
          stdDeviation: '4.0625',
          result: 'effect1_foregroundBlur_134_226'
        })]
      }), jsxs('filter', {
        id: 'filter1_f_134_226',
        x: '48.2555',
        y: '-40.7038',
        width: '98.6138',
        height: '92.2094',
        filterUnits: 'userSpaceOnUse',
        colorInterpolationFilters: 'sRGB',
        children: [jsx('feFlood', {
          floodOpacity: '0',
          result: 'BackgroundImageFix'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'BackgroundImageFix',
          result: 'shape'
        }), jsx('feGaussianBlur', {
          stdDeviation: '4.0625',
          result: 'effect1_foregroundBlur_134_226'
        })]
      }), jsxs('radialGradient', {
        id: 'paint0_radial_134_226',
        cx: '0',
        cy: '0',
        r: '1',
        gradientUnits: 'userSpaceOnUse',
        gradientTransform: 'translate(48 48) rotate(135) scale(65.7609 27.1741)',
        children: [jsx('stop', {
          stopColor: 'white',
          stopOpacity: '0.63'
        }), jsx('stop', {
          offset: '0.66129',
          stopColor: 'white',
          stopOpacity: '0.17'
        }), jsx('stop', {
          offset: '1',
          stopColor: 'white',
          stopOpacity: '0'
        })]
      }), jsxs('radialGradient', {
        id: 'paint1_radial_134_226',
        cx: '0',
        cy: '0',
        r: '1',
        gradientUnits: 'userSpaceOnUse',
        gradientTransform: 'translate(48 48) rotate(135) scale(65.7609 27.1741)',
        children: [jsx('stop', {
          stopColor: 'white',
          stopOpacity: '0.63'
        }), jsx('stop', {
          offset: '0.66129',
          stopColor: 'white',
          stopOpacity: '0.17'
        }), jsx('stop', {
          offset: '1',
          stopColor: 'white',
          stopOpacity: '0'
        })]
      }), jsxs('linearGradient', {
        id: 'paint2_linear_134_226',
        x1: '96.7498',
        y1: '96.75',
        x2: '-0.750201',
        y2: '-0.75003',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: 'white',
          stopOpacity: '0.05'
        }), jsx('stop', {
          offset: '0.394591',
          stopColor: 'white',
          stopOpacity: '0.12'
        }), jsx('stop', {
          offset: '0.498177',
          stopColor: 'white',
          stopOpacity: '0.2'
        }), jsx('stop', {
          offset: '0.60488',
          stopColor: 'white',
          stopOpacity: '0.12'
        }), jsx('stop', {
          offset: '1',
          stopColor: 'white',
          stopOpacity: '0.05'
        })]
      }), jsxs('linearGradient', {
        id: 'paint3_linear_134_226',
        x1: '93.4998',
        y1: '93.5',
        x2: '2.49981',
        y2: '2.49997',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: 'white',
          stopOpacity: '0.05'
        }), jsx('stop', {
          offset: '0.394591',
          stopColor: 'white',
          stopOpacity: '0.12'
        }), jsx('stop', {
          offset: '0.498177',
          stopColor: 'white',
          stopOpacity: '0.2'
        }), jsx('stop', {
          offset: '0.60488',
          stopColor: 'white',
          stopOpacity: '0.12'
        }), jsx('stop', {
          offset: '1',
          stopColor: 'white',
          stopOpacity: '0.05'
        })]
      }), jsxs('linearGradient', {
        id: 'paint4_linear_134_226',
        x1: '90.2498',
        y1: '90.25',
        x2: '5.74982',
        y2: '5.74997',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: 'white',
          stopOpacity: '0.05'
        }), jsx('stop', {
          offset: '0.394591',
          stopColor: 'white',
          stopOpacity: '0.12'
        }), jsx('stop', {
          offset: '0.498177',
          stopColor: 'white',
          stopOpacity: '0.2'
        }), jsx('stop', {
          offset: '0.60488',
          stopColor: 'white',
          stopOpacity: '0.12'
        }), jsx('stop', {
          offset: '1',
          stopColor: 'white',
          stopOpacity: '0.05'
        })]
      }), jsxs('linearGradient', {
        id: 'paint5_linear_134_226',
        x1: '86.9998',
        y1: '87',
        x2: '8.99983',
        y2: '8.99997',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: 'white',
          stopOpacity: '0.05'
        }), jsx('stop', {
          offset: '0.394591',
          stopColor: 'white',
          stopOpacity: '0.12'
        }), jsx('stop', {
          offset: '0.498177',
          stopColor: 'white',
          stopOpacity: '0.2'
        }), jsx('stop', {
          offset: '0.60488',
          stopColor: 'white',
          stopOpacity: '0.12'
        }), jsx('stop', {
          offset: '1',
          stopColor: 'white',
          stopOpacity: '0.05'
        })]
      }), jsxs('linearGradient', {
        id: 'paint6_linear_134_226',
        x1: '83.7498',
        y1: '83.75',
        x2: '12.2498',
        y2: '12.25',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: 'white',
          stopOpacity: '0.05'
        }), jsx('stop', {
          offset: '0.394591',
          stopColor: 'white',
          stopOpacity: '0.12'
        }), jsx('stop', {
          offset: '0.498177',
          stopColor: 'white',
          stopOpacity: '0.2'
        }), jsx('stop', {
          offset: '0.60488',
          stopColor: 'white',
          stopOpacity: '0.12'
        }), jsx('stop', {
          offset: '1',
          stopColor: 'white',
          stopOpacity: '0.05'
        })]
      }), jsxs('linearGradient', {
        id: 'paint7_linear_134_226',
        x1: '80.4998',
        y1: '80.5',
        x2: '15.4998',
        y2: '15.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: 'white',
          stopOpacity: '0.05'
        }), jsx('stop', {
          offset: '0.394591',
          stopColor: 'white',
          stopOpacity: '0.12'
        }), jsx('stop', {
          offset: '0.498177',
          stopColor: 'white',
          stopOpacity: '0.2'
        }), jsx('stop', {
          offset: '0.60488',
          stopColor: 'white',
          stopOpacity: '0.12'
        }), jsx('stop', {
          offset: '1',
          stopColor: 'white',
          stopOpacity: '0.05'
        })]
      }), jsxs('linearGradient', {
        id: 'paint8_linear_134_226',
        x1: '11.6492',
        y1: '45.2351',
        x2: '48.238',
        y2: '80.972',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: 'white',
          stopOpacity: '0'
        }), jsx('stop', {
          offset: '0.452124',
          stopColor: 'white',
          stopOpacity: '0.1'
        }), jsx('stop', {
          offset: '0.539969',
          stopColor: 'white',
          stopOpacity: '0.48'
        }), jsx('stop', {
          offset: '0.635517',
          stopColor: 'white',
          stopOpacity: '0.1'
        }), jsx('stop', {
          offset: '1',
          stopColor: 'white',
          stopOpacity: '0'
        })]
      }), jsxs('linearGradient', {
        id: 'paint9_linear_134_226',
        x1: '92.4318',
        y1: '42.1712',
        x2: '57.088',
        y2: '5.20249',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: 'white',
          stopOpacity: '0'
        }), jsx('stop', {
          offset: '0.452124',
          stopColor: 'white',
          stopOpacity: '0.1'
        }), jsx('stop', {
          offset: '0.539969',
          stopColor: 'white',
          stopOpacity: '0.48'
        }), jsx('stop', {
          offset: '0.635517',
          stopColor: 'white',
          stopOpacity: '0.1'
        }), jsx('stop', {
          offset: '1',
          stopColor: 'white',
          stopOpacity: '0'
        })]
      })]
    })]
  });
}
function je() {
  return jsxs('svg', {
    width: '45',
    height: '46',
    viewBox: '0 0 45 46',
    fill: 'none',
    children: [jsx('circle', {
      cx: '13.5002',
      cy: '8',
      r: '1.5',
      fill: 'url(#paint0_linear_1414_55682)'
    }), jsx('circle', {
      cx: '19.5001',
      cy: '8',
      r: '1.5',
      fill: 'url(#paint1_linear_1414_55682)'
    }), jsx('circle', {
      cx: '25.4994',
      cy: '8',
      r: '1.5',
      fill: 'url(#paint2_linear_1414_55682)'
    }), jsx('circle', {
      cx: '31.5001',
      cy: '8',
      r: '1.5',
      fill: 'url(#paint3_linear_1414_55682)'
    }), jsx('circle', {
      cx: '7.50049',
      cy: '14',
      r: '1.5',
      fill: 'url(#paint4_linear_1414_55682)'
    }), jsx('circle', {
      cx: '7.50049',
      cy: '8',
      r: '1.5',
      fill: 'url(#paint5_linear_1414_55682)'
    }), jsx('circle', {
      cx: '1.5',
      cy: '14',
      r: '1.5',
      fill: 'url(#paint6_linear_1414_55682)'
    }), jsx('circle', {
      cx: '43.4999',
      cy: '14',
      r: '1.5',
      fill: 'url(#paint7_linear_1414_55682)'
    }), jsx('circle', {
      cx: '13.5002',
      cy: '14',
      r: '1.5',
      fill: 'url(#paint8_linear_1414_55682)'
    }), jsx('circle', {
      cx: '19.5001',
      cy: '14',
      r: '1.5',
      fill: 'url(#paint9_linear_1414_55682)'
    }), jsx('circle', {
      cx: '25.4994',
      cy: '14.0002',
      r: '1.5',
      fill: 'url(#paint10_linear_1414_55682)'
    }), jsx('circle', {
      cx: '31.5001',
      cy: '14',
      r: '1.5',
      fill: 'url(#paint11_linear_1414_55682)'
    }), jsx('circle', {
      cx: '37.5002',
      cy: '14',
      r: '1.5',
      fill: 'url(#paint12_linear_1414_55682)'
    }), jsx('circle', {
      cx: '37.5002',
      cy: '8',
      r: '1.5',
      fill: 'url(#paint13_linear_1414_55682)'
    }), jsx('circle', {
      cx: '7.50049',
      cy: '20',
      r: '1.5',
      fill: 'url(#paint14_linear_1414_55682)'
    }), jsx('circle', {
      cx: '1.5',
      cy: '20',
      r: '1.5',
      fill: 'url(#paint15_linear_1414_55682)'
    }), jsx('circle', {
      cx: '43.4999',
      cy: '20',
      r: '1.5',
      fill: 'url(#paint16_linear_1414_55682)'
    }), jsx('circle', {
      cx: '13.5002',
      cy: '20',
      r: '1.5',
      fill: 'url(#paint17_linear_1414_55682)'
    }), jsx('circle', {
      cx: '19.5001',
      cy: '20',
      r: '1.5',
      fill: 'url(#paint18_linear_1414_55682)'
    }), jsx('circle', {
      cx: '25.4994',
      cy: '20',
      r: '1.5',
      fill: 'url(#paint19_linear_1414_55682)'
    }), jsx('circle', {
      cx: '31.5001',
      cy: '20',
      r: '1.5',
      fill: 'url(#paint20_linear_1414_55682)'
    }), jsx('circle', {
      cx: '37.5002',
      cy: '20',
      r: '1.5',
      fill: 'url(#paint21_linear_1414_55682)'
    }), jsx('circle', {
      cx: '7.50049',
      cy: '26',
      r: '1.5',
      fill: 'url(#paint22_linear_1414_55682)'
    }), jsx('circle', {
      cx: '1.5',
      cy: '26',
      r: '1.5',
      fill: 'url(#paint23_linear_1414_55682)'
    }), jsx('circle', {
      cx: '43.4999',
      cy: '26',
      r: '1.5',
      fill: 'url(#paint24_linear_1414_55682)'
    }), jsx('circle', {
      cx: '13.5002',
      cy: '26',
      r: '1.5',
      fill: 'url(#paint25_linear_1414_55682)'
    }), jsx('circle', {
      cx: '19.5001',
      cy: '26',
      r: '1.5',
      fill: 'url(#paint26_linear_1414_55682)'
    }), jsx('circle', {
      cx: '25.4994',
      cy: '25.9998',
      r: '1.5',
      fill: 'url(#paint27_linear_1414_55682)'
    }), jsx('circle', {
      cx: '31.5001',
      cy: '26',
      r: '1.5',
      fill: 'url(#paint28_linear_1414_55682)'
    }), jsx('circle', {
      cx: '37.5002',
      cy: '26',
      r: '1.5',
      fill: 'url(#paint29_linear_1414_55682)'
    }), jsx('circle', {
      cx: '7.50049',
      cy: '32',
      r: '1.5',
      fill: 'url(#paint30_linear_1414_55682)'
    }), jsx('circle', {
      cx: '7.50049',
      cy: '38',
      r: '1.5',
      fill: 'url(#paint31_linear_1414_55682)'
    }), jsx('circle', {
      cx: '1.5',
      cy: '32',
      r: '1.5',
      fill: 'url(#paint32_linear_1414_55682)'
    }), jsx('circle', {
      cx: '43.4999',
      cy: '32',
      r: '1.5',
      fill: 'url(#paint33_linear_1414_55682)'
    }), jsx('circle', {
      cx: '13.5002',
      cy: '32',
      r: '1.5',
      fill: 'url(#paint34_linear_1414_55682)'
    }), jsx('circle', {
      cx: '19.5001',
      cy: '32',
      r: '1.5',
      fill: 'url(#paint35_linear_1414_55682)'
    }), jsx('circle', {
      cx: '25.4994',
      cy: '32',
      r: '1.5',
      fill: 'url(#paint36_linear_1414_55682)'
    }), jsx('circle', {
      cx: '31.5001',
      cy: '32',
      r: '1.5',
      fill: 'url(#paint37_linear_1414_55682)'
    }), jsx('circle', {
      cx: '37.5002',
      cy: '32',
      r: '1.5',
      fill: 'url(#paint38_linear_1414_55682)'
    }), jsx('circle', {
      cx: '37.5002',
      cy: '38',
      r: '1.5',
      fill: 'url(#paint39_linear_1414_55682)'
    }), jsx('circle', {
      cx: '13.5002',
      cy: '38',
      r: '1.5',
      fill: 'url(#paint40_linear_1414_55682)'
    }), jsx('circle', {
      cx: '19.5001',
      cy: '38',
      r: '1.5',
      fill: 'url(#paint41_linear_1414_55682)'
    }), jsx('circle', {
      cx: '25.4994',
      cy: '38',
      r: '1.5',
      fill: 'url(#paint42_linear_1414_55682)'
    }), jsx('circle', {
      cx: '31.5001',
      cy: '38',
      r: '1.5',
      fill: 'url(#paint43_linear_1414_55682)'
    }), jsx('circle', {
      cx: '13.5002',
      cy: '44',
      r: '1.5',
      fill: 'url(#paint44_linear_1414_55682)'
    }), jsx('circle', {
      cx: '19.5001',
      cy: '44',
      r: '1.5',
      fill: 'url(#paint45_linear_1414_55682)'
    }), jsx('circle', {
      cx: '25.4994',
      cy: '44',
      r: '1.5',
      fill: 'url(#paint46_linear_1414_55682)'
    }), jsx('circle', {
      cx: '31.5001',
      cy: '44',
      r: '1.5',
      fill: 'url(#paint47_linear_1414_55682)'
    }), jsx('circle', {
      cx: '13.5002',
      cy: '2',
      r: '1.5',
      fill: 'url(#paint48_linear_1414_55682)'
    }), jsx('circle', {
      cx: '19.5001',
      cy: '2',
      r: '1.5',
      fill: 'url(#paint49_linear_1414_55682)'
    }), jsx('circle', {
      cx: '25.4994',
      cy: '2',
      r: '1.5',
      fill: 'url(#paint50_linear_1414_55682)'
    }), jsx('circle', {
      cx: '31.5001',
      cy: '2',
      r: '1.5',
      fill: 'url(#paint51_linear_1414_55682)'
    }), jsxs('defs', {
      children: [jsxs('linearGradient', {
        id: 'paint0_linear_1414_55682',
        x1: '13.5002',
        y1: '6.5',
        x2: '13.5002',
        y2: '9.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint1_linear_1414_55682',
        x1: '19.5001',
        y1: '6.5',
        x2: '19.5001',
        y2: '9.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint2_linear_1414_55682',
        x1: '25.4994',
        y1: '6.5',
        x2: '25.4994',
        y2: '9.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint3_linear_1414_55682',
        x1: '31.5001',
        y1: '6.5',
        x2: '31.5001',
        y2: '9.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint4_linear_1414_55682',
        x1: '7.50049',
        y1: '12.5',
        x2: '7.50049',
        y2: '15.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint5_linear_1414_55682',
        x1: '7.50049',
        y1: '6.5',
        x2: '7.50049',
        y2: '9.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint6_linear_1414_55682',
        x1: '1.5',
        y1: '12.5',
        x2: '1.5',
        y2: '15.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint7_linear_1414_55682',
        x1: '43.4999',
        y1: '12.5',
        x2: '43.4999',
        y2: '15.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint8_linear_1414_55682',
        x1: '13.5002',
        y1: '12.5',
        x2: '13.5002',
        y2: '15.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint9_linear_1414_55682',
        x1: '19.5001',
        y1: '12.5',
        x2: '19.5001',
        y2: '15.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint10_linear_1414_55682',
        x1: '25.4994',
        y1: '12.5002',
        x2: '25.4994',
        y2: '15.5002',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint11_linear_1414_55682',
        x1: '31.5001',
        y1: '12.5',
        x2: '31.5001',
        y2: '15.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint12_linear_1414_55682',
        x1: '37.5002',
        y1: '12.5',
        x2: '37.5002',
        y2: '15.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint13_linear_1414_55682',
        x1: '37.5002',
        y1: '6.5',
        x2: '37.5002',
        y2: '9.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint14_linear_1414_55682',
        x1: '7.50049',
        y1: '18.5',
        x2: '7.50049',
        y2: '21.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint15_linear_1414_55682',
        x1: '1.5',
        y1: '18.5',
        x2: '1.5',
        y2: '21.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint16_linear_1414_55682',
        x1: '43.4999',
        y1: '18.5',
        x2: '43.4999',
        y2: '21.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint17_linear_1414_55682',
        x1: '13.5002',
        y1: '18.5',
        x2: '13.5002',
        y2: '21.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint18_linear_1414_55682',
        x1: '19.5001',
        y1: '18.5',
        x2: '19.5001',
        y2: '21.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint19_linear_1414_55682',
        x1: '25.4994',
        y1: '18.5',
        x2: '25.4994',
        y2: '21.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint20_linear_1414_55682',
        x1: '31.5001',
        y1: '18.5',
        x2: '31.5001',
        y2: '21.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint21_linear_1414_55682',
        x1: '37.5002',
        y1: '18.5',
        x2: '37.5002',
        y2: '21.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint22_linear_1414_55682',
        x1: '7.50049',
        y1: '24.5',
        x2: '7.50049',
        y2: '27.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint23_linear_1414_55682',
        x1: '1.5',
        y1: '24.5',
        x2: '1.5',
        y2: '27.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint24_linear_1414_55682',
        x1: '43.4999',
        y1: '24.5',
        x2: '43.4999',
        y2: '27.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint25_linear_1414_55682',
        x1: '13.5002',
        y1: '24.5',
        x2: '13.5002',
        y2: '27.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint26_linear_1414_55682',
        x1: '19.5001',
        y1: '24.5',
        x2: '19.5001',
        y2: '27.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint27_linear_1414_55682',
        x1: '25.4994',
        y1: '24.4998',
        x2: '25.4994',
        y2: '27.4998',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint28_linear_1414_55682',
        x1: '31.5001',
        y1: '24.5',
        x2: '31.5001',
        y2: '27.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint29_linear_1414_55682',
        x1: '37.5002',
        y1: '24.5',
        x2: '37.5002',
        y2: '27.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint30_linear_1414_55682',
        x1: '7.50049',
        y1: '30.5',
        x2: '7.50049',
        y2: '33.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint31_linear_1414_55682',
        x1: '7.50049',
        y1: '36.5',
        x2: '7.50049',
        y2: '39.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint32_linear_1414_55682',
        x1: '1.5',
        y1: '30.5',
        x2: '1.5',
        y2: '33.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint33_linear_1414_55682',
        x1: '43.4999',
        y1: '30.5',
        x2: '43.4999',
        y2: '33.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint34_linear_1414_55682',
        x1: '13.5002',
        y1: '30.5',
        x2: '13.5002',
        y2: '33.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint35_linear_1414_55682',
        x1: '19.5001',
        y1: '30.5',
        x2: '19.5001',
        y2: '33.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint36_linear_1414_55682',
        x1: '25.4994',
        y1: '30.5',
        x2: '25.4994',
        y2: '33.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint37_linear_1414_55682',
        x1: '31.5001',
        y1: '30.5',
        x2: '31.5001',
        y2: '33.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint38_linear_1414_55682',
        x1: '37.5002',
        y1: '30.5',
        x2: '37.5002',
        y2: '33.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint39_linear_1414_55682',
        x1: '37.5002',
        y1: '36.5',
        x2: '37.5002',
        y2: '39.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint40_linear_1414_55682',
        x1: '13.5002',
        y1: '36.5',
        x2: '13.5002',
        y2: '39.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint41_linear_1414_55682',
        x1: '19.5001',
        y1: '36.5',
        x2: '19.5001',
        y2: '39.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint42_linear_1414_55682',
        x1: '25.4994',
        y1: '36.5',
        x2: '25.4994',
        y2: '39.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint43_linear_1414_55682',
        x1: '31.5001',
        y1: '36.5',
        x2: '31.5001',
        y2: '39.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint44_linear_1414_55682',
        x1: '13.5002',
        y1: '42.5',
        x2: '13.5002',
        y2: '45.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint45_linear_1414_55682',
        x1: '19.5001',
        y1: '42.5',
        x2: '19.5001',
        y2: '45.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint46_linear_1414_55682',
        x1: '25.4994',
        y1: '42.5',
        x2: '25.4994',
        y2: '45.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint47_linear_1414_55682',
        x1: '31.5001',
        y1: '42.5',
        x2: '31.5001',
        y2: '45.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint48_linear_1414_55682',
        x1: '13.5002',
        y1: '0.5',
        x2: '13.5002',
        y2: '3.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint49_linear_1414_55682',
        x1: '19.5001',
        y1: '0.5',
        x2: '19.5001',
        y2: '3.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint50_linear_1414_55682',
        x1: '25.4994',
        y1: '0.5',
        x2: '25.4994',
        y2: '3.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      }), jsxs('linearGradient', {
        id: 'paint51_linear_1414_55682',
        x1: '31.5001',
        y1: '0.5',
        x2: '31.5001',
        y2: '3.5',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#252525'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#A4A4A4'
        })]
      })]
    })]
  });
}
function jt(e) {
  let {
    onTonearmHeadMouseDown
  } = e;
  return jsxs('svg', {
    width: '27',
    height: '80',
    viewBox: '0 0 27 80',
    fill: 'none',
    children: [jsx('path', {
      d: 'M18.7042 8.19556C18.7042 8.19556 18.7042 34.7407 18.7042 47.6641C18.7042 60.5876 13.9589 64.9213 13.9589 64.9213',
      stroke: 'black',
      strokeOpacity: '0.2',
      strokeWidth: '5.33844',
      strokeLinecap: 'round'
    }), jsx('g', {
      filter: 'url(#filter0_dii_242_919)',
      children: jsx('path', {
        d: 'M18.7042 8.19556C18.7042 8.19556 18.7042 34.7407 18.7042 47.6641C18.7042 60.5876 13.9589 64.9213 13.9589 64.9213',
        stroke: 'white',
        strokeWidth: '4.15212',
        strokeLinecap: 'round'
      })
    }), jsxs('g', {
      filter: 'url(#filter1_d_242_919)',
      children: [jsx('rect', {
        x: '14',
        y: '2',
        width: '9.49057',
        height: '11.8632',
        fill: 'url(#paint0_linear_242_919)'
      }), jsx('rect', {
        x: '14.2966',
        y: '2.29658',
        width: '8.89741',
        height: '11.27',
        stroke: 'black',
        strokeOpacity: '0.2',
        strokeWidth: '0.59316'
      })]
    }), jsxs('g', {
      'filter': 'url(#filter2_d_242_919)',
      'onMouseDown': onTonearmHeadMouseDown,
      'className': 'tonearm-svg--tonearmBottom--3JC--',
      'aria-hidden': 'true',
      'children': [jsx('g', {
        filter: 'url(#filter3_iii_242_919)',
        children: jsx('path', {
          d: 'M9.30333 62.425C9.93167 61.6761 11.0481 61.5785 11.7969 62.2068L16.3554 66.0318C17.1042 66.6601 17.2019 67.7766 16.5735 68.5254L10.4596 75.8116C9.8313 76.5604 8.71489 76.6581 7.96606 76.0298L7.14087 75.3374L4.23279 72.8972L3.40761 72.2048C2.65878 71.5764 2.56111 70.46 3.18945 69.7112L9.30333 62.425Z',
          fill: '#E9E9E9'
        })
      }), jsx('path', {
        d: 'M16.546 65.8046L11.9876 61.9796C11.1132 61.246 9.80976 61.36 9.07614 62.2343L2.96225 69.5206C2.22863 70.3949 2.34267 71.6984 3.21697 72.432L4.04216 73.1244L6.95024 75.5646L7.77542 76.257C8.64972 76.9906 9.95321 76.8766 10.6868 76.0023L16.8007 68.716C17.5343 67.8417 17.4203 66.5382 16.546 65.8046Z',
        stroke: 'black',
        strokeOpacity: '0.25',
        strokeWidth: '0.59316'
      })]
    }), jsxs('defs', {
      children: [jsxs('filter', {
        id: 'filter0_dii_242_919',
        x: '9.51017',
        y: '3.74674',
        width: '13.6427',
        height: '65.6232',
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
        }), jsx('feOffset', {}), jsx('feGaussianBlur', {
          stdDeviation: '1.18632'
        }), jsx('feComposite', {
          in2: 'hardAlpha',
          operator: 'out'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_242_919'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_242_919',
          result: 'shape'
        }), jsx('feColorMatrix', {
          in: 'SourceAlpha',
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
          result: 'hardAlpha'
        }), jsx('feOffset', {
          dx: '1.18632'
        }), jsx('feGaussianBlur', {
          stdDeviation: '0.415212'
        }), jsx('feComposite', {
          in2: 'hardAlpha',
          operator: 'arithmetic',
          k2: '-1',
          k3: '1'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0.709804 0 0 0 0 0.709804 0 0 0 0 0.709804 0 0 0 0.5 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'shape',
          result: 'effect2_innerShadow_242_919'
        }), jsx('feColorMatrix', {
          in: 'SourceAlpha',
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
          result: 'hardAlpha'
        }), jsx('feOffset', {
          dx: '-1.18632'
        }), jsx('feGaussianBlur', {
          stdDeviation: '0.415212'
        }), jsx('feComposite', {
          in2: 'hardAlpha',
          operator: 'arithmetic',
          k2: '-1',
          k3: '1'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0.708333 0 0 0 0 0.708333 0 0 0 0 0.708333 0 0 0 0.5 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'effect2_innerShadow_242_919',
          result: 'effect3_innerShadow_242_919'
        })]
      }), jsxs('filter', {
        id: 'filter1_d_242_919',
        x: '11.3451',
        y: '0.672526',
        width: '14.8005',
        height: '17.1732',
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
          dy: '1.32747'
        }), jsx('feGaussianBlur', {
          stdDeviation: '1.32747'
        }), jsx('feComposite', {
          in2: 'hardAlpha',
          operator: 'out'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_242_919'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_242_919',
          result: 'shape'
        })]
      }), jsxs('filter', {
        id: 'filter2_d_242_919',
        x: '0.412163',
        y: '60.3145',
        width: '18.9386',
        height: '19.3776',
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
          dy: '0.884983'
        }), jsx('feGaussianBlur', {
          stdDeviation: '0.884983'
        }), jsx('feComposite', {
          in2: 'hardAlpha',
          operator: 'out'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_242_919'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_242_919',
          result: 'shape'
        })]
      }), jsxs('filter', {
        id: 'filter3_iii_242_919',
        x: '1.29715',
        y: '60.3145',
        width: '16.8768',
        height: '17.3158',
        filterUnits: 'userSpaceOnUse',
        colorInterpolationFilters: 'sRGB',
        children: [jsx('feFlood', {
          floodOpacity: '0',
          result: 'BackgroundImageFix'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'BackgroundImageFix',
          result: 'shape'
        }), jsx('feColorMatrix', {
          in: 'SourceAlpha',
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
          result: 'hardAlpha'
        }), jsx('feOffset', {
          dy: '2.37264'
        }), jsx('feGaussianBlur', {
          stdDeviation: '0.29658'
        }), jsx('feComposite', {
          in2: 'hardAlpha',
          operator: 'arithmetic',
          k2: '-1',
          k3: '1'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.86 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'shape',
          result: 'effect1_innerShadow_242_919'
        }), jsx('feColorMatrix', {
          in: 'SourceAlpha',
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
          result: 'hardAlpha'
        }), jsx('feOffset', {
          dx: '1.77948',
          dy: '1.77948'
        }), jsx('feGaussianBlur', {
          stdDeviation: '0.29658'
        }), jsx('feComposite', {
          in2: 'hardAlpha',
          operator: 'arithmetic',
          k2: '-1',
          k3: '1'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'effect1_innerShadow_242_919',
          result: 'effect2_innerShadow_242_919'
        }), jsx('feColorMatrix', {
          in: 'SourceAlpha',
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
          result: 'hardAlpha'
        }), jsx('feOffset', {
          dx: '-0.884983',
          dy: '-0.884983'
        }), jsx('feGaussianBlur', {
          stdDeviation: '0.884983'
        }), jsx('feComposite', {
          in2: 'hardAlpha',
          operator: 'arithmetic',
          k2: '-1',
          k3: '1'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'effect2_innerShadow_242_919',
          result: 'effect3_innerShadow_242_919'
        })]
      }), jsxs('linearGradient', {
        id: 'paint0_linear_242_919',
        x1: '14',
        y1: '7.9316',
        x2: '23.4906',
        y2: '7.9316',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#CACACA'
        }), jsx('stop', {
          offset: '0.253125',
          stopColor: '#E2E2E2'
        }), jsx('stop', {
          offset: '0.384375',
          stopColor: '#F3F3F3'
        }), jsx('stop', {
          offset: '0.500704',
          stopColor: 'white'
        }), jsx('stop', {
          offset: '0.625',
          stopColor: '#F3F3F3'
        }), jsx('stop', {
          offset: '0.753125',
          stopColor: '#E2E2E2'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#CACACA'
        })]
      })]
    })]
  });
}
function ji(e) {
  let {
    onPause,
    onResume
  } = e;
  let [n, r] = useState(null);
  let a = useRef(0);
  let s = useRef(0);
  let c = useSelector(e => e.music?.music?.isPaused);
  let u = F4();
  let p = u?.shouldOptimizeForIpadApp || BrowserInfo.isIpad;
  let m = useCallback(e => {
    if (!1 === c) {
      let t = e.clientX;
      r(22 - 22 * (clamp(t - a.current, 0, 21) / 21));
    } else {
      let t = e.clientX;
      r(22 * (clamp(a.current - t, 0, 21) / 21));
    }
  }, [c, 22, 21]);
  let f = useCallback(e => {
    document.removeEventListener('mousemove', m);
    document.removeEventListener('mouseup', f);
    let n = !1 === c;
    if (Date.now() - s.current < 100) {
      n ? onPause() : onResume();
    } else if (n) {
      let i = e.clientX;
      clamp(i - a.current, 0, 21) > 10.5 && onPause();
    } else {
      let t = e.clientX;
      clamp(a.current - t, 0, 21) > 10.5 && onResume();
    }
    a.current = 0;
    r(null);
  }, [m, c, onPause, onResume]);
  let _ = n !== null ? n : !1 === c ? 22 : 0;
  return jsx('div', {
    className: ex()('tonearm--tonearmStandalone--UOmob', {
      'tonearm--play--cp3C1': n === null,
      'tonearm--paused--pe2EE': n !== null
    }),
    style: {
      transform: `rotate(${_}deg)`
    },
    children: jsx(jt, {
      onTonearmHeadMouseDown: p ? void 0 : e => {
        a.current = e.clientX;
        s.current = Date.now();
        document.addEventListener('mousemove', m);
        document.addEventListener('mouseup', f);
      }
    })
  });
}
let jn = 'turntable--gray--OY0Du';
function ja(e) {
  let {
    handlePause,
    handleTonearmResume
  } = e;
  return jsxs('div', {
    'className': 'turntable--recordPlayerBase--WG5CH',
    'aria-hidden': 'true',
    'children': [jsx(js, {
      handlePause,
      handleTonearmResume
    }), jsx('div', {
      className: 'turntable--speakerGrill--DXQjl',
      children: jsx(je, {})
    })]
  });
}
function js(e) {
  let {
    handlePause,
    handleTonearmResume
  } = e;
  return jsxs('div', {
    className: 'turntable--recordPlayer--0aMTu',
    children: [jsx(jl, {
      size: 'large'
    }), jsx(ji, {
      onPause: handlePause,
      onResume: handleTonearmResume
    })]
  });
}
var jo = (e => (e.XSMALL = 'xsmall', e.LARGE = 'large', e))(jo || {});
function jl(e) {
  let {
    size,
    maskAlbumArtWhenPaused,
    maskRef,
    useGrayMask,
    useLightShadow
  } = e;
  let s = function () {
    let e = useSelector(e => e.music.music);
    let t = gq(e?.selectedSongID || '');
    let i = gJ();
    let n = t && t.album_art;
    return !i || !n;
  }() && !!maskAlbumArtWhenPaused;
  return jsxs('div', {
    className: ex()('turntable--record--96NxV', {
      'turntable--xsmall--eqtGp': size === 'xsmall',
      'turntable--large--oXtu6': size === 'large'
    }),
    children: [jsx(g7, {
      useLightShadow
    }), jsx(jd, {
      size,
      showMask: s,
      maskRef,
      useGrayMask
    })]
  });
}
function jd(e) {
  let t = useSelector(e => e.music.music);
  let i = gq(t?.selectedSongID || '');
  let n = gJ();
  let r = i && i.album_art;
  return useAppModelProperty('showUi') ? jsxs('div', {
    className: ex()('turntable--spinningAlbum--N7jwa', {
      'turntable--spinningAlbumXSmall--vzhVj': e.size === 'xsmall',
      'turntable--spinningAlbumLarge--SWUZ2': e.size === 'large'
    }),
    children: [r && jsx(WAFImage, {
      className: ex()('turntable--spinningAlbumImage--H-qwO', {
        'turntable--spinningAlbumPlaying--UDk-I': t?.isPaused === !1,
        [jn]: !n
      }),
      src: i.album_art,
      alt: 'spinning album art'
    }), jsx('div', {
      ref: e.maskRef,
      className: ex()('turntable--spinningAlbumImageMask--PZ7Cr turntable--spinningAlbumImage--H-qwO', {
        'turntable--noOpacity--ZKZnl': !e.showMask,
        [jn]: e.useGrayMask
      }),
      children: jsx(SvgComponent, {
        className: 'turntable--maskIcon--mZo9b',
        svg: _$$A76
      })
    })]
  }) : null;
}
function ju() {
  let e = useCurrentFileWorkshopModeStatus(!0);
  let t = !_$$N7() && e.enabled;
  let i = useSelector(e => e.userFlags.dismissed_figjam_music_volume_hint);
  let n = useSelector(e => e.music.music?.selectedSongID && e.music.music?.selectedSongID !== '');
  let r = useSelector(e => e.music.music?.isPaused === !1 && e.music.music?.isStopped === !1);
  let a = useDispatch<AppDispatch>();
  return t || i || !r || !n ? null : jsxs('div', {
    'className': ex()('volume_hint--hintContainer--A9gj2', Dm),
    'data-testid': 'volume-hint',
    'children': [jsx('div', {
      children: renderI18nText('whiteboard.timer.music_volume_hint_prompt_cta_v2', {
        promptQuestion: jsx('span', {
          className: 'volume_hint--bold--vS77N',
          children: getI18nString('whiteboard.timer.music_volume_hint_prompt_question')
        })
      })
    }), jsx(IconButton, {
      'onClick': () => {
        a(postUserFlag({
          dismissed_figjam_music_volume_hint: !0
        }));
      },
      'aria-label': getI18nString('general.close'),
      'children': jsx(_$$A2, {})
    })]
  });
}
let jp = 'buttons--flexGrow--Qu8-s';
function jh(e) {
  let {
    flexGrow,
    ...i
  } = e;
  return jsx('div', {
    className: ex()('buttons--secondaryButton--Y7X0E', {
      [jp]: e.flexGrow
    }),
    children: jsx(ButtonWide, {
      ...i,
      variant: 'secondary',
      children: e.children
    })
  });
}
function jm(e) {
  let {
    flexGrow,
    ...i
  } = e;
  return jsx('div', {
    className: ex()('buttons--primaryButton--cOfBR', {
      [jp]: e.flexGrow
    }),
    children: jsx(ButtonWide, {
      ...i,
      variant: 'primary',
      children: e.children
    })
  });
}
function jf(e) {
  let {
    titleText,
    bodyText,
    cancelButtonText,
    confirmButtonText,
    onCancel,
    onConfirm,
    onCancelDisabled,
    onConfirmDisabled,
    recordingKey
  } = e;
  return jsxs('div', {
    className: 'meeting_tool_cancel_view--cancelViewContainer--W8dpk',
    children: [jsx('div', {
      className: 'meeting_tool_cancel_view--headerTitle--UIcBu text--fontPos14--OL9Hp text--_fontBase--QdLsd',
      children: titleText
    }), jsx('div', {
      className: 'meeting_tool_cancel_view--descriptionSection--9D1U7 text--fontPos11--2LvXf text--_fontBase--QdLsd',
      children: bodyText
    }), jsxs('div', {
      className: cssBuilderInstance.flex.gap10.$,
      children: [jsx(jh, {
        flexGrow: !0,
        onClick: onCancel,
        disabled: onCancelDisabled,
        recordingKey: generateRecordingKey(recordingKey, 'cancel'),
        children: cancelButtonText
      }), jsx(jm, {
        flexGrow: !0,
        onClick: onConfirm,
        disabled: onConfirmDisabled,
        recordingKey: generateRecordingKey(recordingKey, 'confirm'),
        children: confirmButtonText
      })]
    })]
  });
}
let jj = 'playback_control_button--mediaControlButton--Wp3H1';
let jb = 'playback_control_button--withHover--9DG-T';
var jy = (e => (e.PLAY = 'play', e.PAUSE = 'pause', e.STOP = 'stop', e))(jy || {});
function jv(e) {
  let t = shouldOptimizeForIpad();
  let {
    buttonState,
    onClick,
    disabled,
    dataTooltip,
    dataOnboardingKey
  } = e;
  switch (buttonState) {
    case 'play':
      return jsx('button', {
        'className': ex()('playback_control_button--playButton--a1I8c playback_control_button--mediaControlButton--Wp3H1', {
          [jb]: !t
        }),
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': dataTooltip,
        'data-onboarding-key': dataOnboardingKey,
        disabled,
        onClick,
        'aria-label': dataTooltip,
        'children': jsx(_$$K6, {})
      });
    case 'pause':
      return jsx('button', {
        'className': ex()(jj, {
          [jb]: !t
        }),
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': dataTooltip,
        'data-onboarding-key': dataOnboardingKey,
        disabled,
        onClick,
        'aria-label': dataTooltip,
        'children': jsx(_$$p9, {})
      });
    case 'stop':
      return jsx('button', {
        'className': ex()(jj, {
          [jb]: !t
        }),
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': dataTooltip,
        disabled,
        onClick,
        'data-onboarding-key': dataOnboardingKey,
        'aria-label': dataTooltip,
        'children': jsx(_$$d8, {})
      });
  }
}
function jC() {
  let [e, t] = useState(!1);
  let i = useSelector(e => e.music.music);
  let n = useSelector(e => e.music.playerInstance);
  let r = i?.selectedSongID || '';
  let a = gq(r);
  let s = a?.start_at_ms;
  let c = useSelector(e => e.multiplayer.allUsers.length);
  let [u, p] = useState(!1);
  let h = useSelector(e => e.music.activeSongs, areSongArraysEqual);
  let m = gJ();
  let f = useDispatch<AppDispatch>();
  useEffect(() => {
    h.length && p(!1);
  }, [h.length]);
  let _ = useStore();
  let x = useCallback(() => {
    r && trackPlaysSong(_.getState(), r);
    f(startMusicThunk({
      musicStartTimeMs: s
    }));
  }, [f, s, r, _]);
  let g = useCallback(() => {
    r && trackStopsSong(_.getState(), r);
    f(stopMusicThunk());
  }, [f, r, _]);
  let j = useCallback(() => {
    x();
  }, [x]);
  let b = useCallback(() => {
    let e = n?.lastPlayedTimestamp ? n.lastPlayedTimestamp : 0;
    isStale(e, c) ? t(!0) : g();
  }, [g, n, c]);
  let y = useCallback(() => x(), [x]);
  return e ? jsx(jf, {
    titleText: getI18nString('whiteboard.music.stop_music_confirmation_prompt'),
    bodyText: getI18nString('whiteboard.music.stop_music_confirmation_subtext'),
    cancelButtonText: getI18nString('whiteboard.music.stop_music_cancel_button'),
    confirmButtonText: getI18nString('whiteboard.timer.stop_timer_confirmation_button'),
    onCancel: () => t(!1),
    onConfirm: () => {
      t(!1);
      g();
    }
  }) : jsxs(Fragment, {
    children: [jsxs('div', {
      'id': 'musicModal',
      'className': 'music_view--musicView--XegVa',
      'data-testid': 'music-modal',
      'children': [jsx(ja, {
        handlePause: g,
        handleTonearmResume: j
      }), jsxs('div', {
        className: 'music_view--controlContainer--GYIKD',
        children: [jsx('div', {
          className: 'music_view--selectSongContainer--qoUiA',
          children: jsx(g9, {
            selectedSong: a,
            activeSongs: h,
            isLoading: u,
            withBorder: !0,
            withHeavyFont: !0
          })
        }), jsx(jv, {
          buttonState: m ? jy.STOP : jy.PLAY,
          onClick: m ? b : y,
          dataTooltip: m ? getI18nString('whiteboard.music.end_music_tooltip') : getI18nString('whiteboard.music.play_music_tooltip')
        })]
      })]
    }), jsx(ju, {})]
  });
}
let jk = null;
let jR = null;
let jM = null;
let jD = () => useSelector(e => e.music.playerInstance);
let jP = () => 1e3;
function jU() {
  let [e, t] = useState({});
  let i = useSelector(e => e.timer);
  useEffect(() => {
    if (!i || !i.time || i?.time?.isPaused) return;
    let e = setTimeout(() => t({}), jP());
    return () => {
      clearTimeout(e);
    };
  }, [e, i, i.time?.isPaused]);
}
function jF() {
  let e = useSelector(e => e.timer);
  let t = useSelector(e => getSelectedFile(e));
  let i = useSelector(e => t ? getRepoById(t, e.repos) : null);
  let n = Math.ceil(getTimeRemaining(e.time) / 1e3);
  n > 0 ? updateEditorDocumentTitle(t, i, n) : updateEditorDocumentTitle(t, i);
}
let jH = () => {
  jM && jM.pause();
  jk && jk.pause();
  jR && jR.pause();
  jk = new Audio(jK);
  jR = new Audio(jG);
  jM = new Audio(jV);
};
let jB = (e, t, i, n, r, a) => {
  if (!i.current || !e) return;
  let s = getTimeRemaining(i.current.time);
  if (e.lastAction.type === 'add-minutes') {
    if (jk && jk.pause(), a.current?.resetFades(), a.current?.fadeIn({}), !i.current.time || i.current.time.totalTimeMs === 0) return;
    let n = 6e4 * e.lastAction.minutes;
    i.current.time && s + n < MAX_TIMER_DURATION_MS && t(adjustTimerThunk({
      timer: i.current.time,
      deltaMs: n
    }));
  }
  e.lastAction.type === 'start-timer' && (getStorage().set('last-timer-set-time', e.lastUsedTime), t(startTimerThunk({
    totalTimeMs: 1e3 * e.lastUsedTime,
    musicStartTimeMs: i.current.musicStartTimeMs
  })), jM && n.current && !r.current && e.lastUsedTime > 5 && playTimerChime(jM, n.current));
  e.lastAction.type === 'pause-timer' && t(pauseTimerThunk(i.current.time));
  e.lastAction.type === 'resume-timer' && t(resumeTimerThunk(i.current.time));
  e.lastAction.type === 'stop-timer' && (jH(), t(stopTimerThunk()));
};
let jV = buildUploadUrl('304a1a341a619feb4af7d377c75dd325534e1734');
let jG = buildUploadUrl('f45e11344ee4f618173695e2405a9a988affc910');
let jK = buildUploadUrl('54a944bea3fce3ca45c91429993683685bec5782');
let jW = () => {
  useEffect(() => {
    jM === null && (jM = new Audio(jV));
    jR === null && (jR = new Audio(jG));
    jk === null && (jk = new Audio(jK));
  }, []);
};
let jz = e => {
  let t = _$$F8(e);
  let i = useDispatch<AppDispatch>();
  let n = useSelector(e => e.timer);
  let r = _$$F8(n);
  let a = _$$F8(useSelector(e => e.timer.volume));
  let s = _$$F8(useSelector(e => e.timer.isMuted));
  let o = _$$F8(jD());
  useEffect(() => {
    jB(e, i, r, a, s, o);
  }, [t, i, s, o, r, e, a]);
};
let jZ = () => {
  let e = useDispatch<AppDispatch>();
  let t = _$$F8(useSelector(e => e.timer.volume));
  let i = _$$F8(useSelector(e => e.timer.setBy));
  let n = _$$F8(selectCurrentUser());
  let r = _$$F8(useSelector(e => e.timer.isMuted));
  let a = _$$F8(jD());
  let s = useSelector(e => e.music.music);
  return {
    callbackToRunAtFiveSecondsLeft: useCallback((i, n) => {
      i.current && jk?.paused && !r.current && (a.current && a.current.fadeOut({
        fadeOutLength: 5e3,
        shouldStopWhenFadedOut: !0,
        targetVolumeMultiplier: 0
      }), playTimerChime(jk, t.current));
      n.current || e(setTimerModalThunk({
        state: 'open',
        userInitiated: !1
      }));
    }, [e, r, a, t]),
    callbackToRunWhenTimerFinishes: useCallback((i, n) => {
      jk && jk.pause();
      i.current && jR && !r.current && playTimerChime(jR, t.current);
      PluginCallbacks.timerChange('timerdone');
      n.current || e(setTimerModalThunk({
        state: 'open',
        userInitiated: !1
      }));
    }, [e, r, t]),
    callbackToRunAfterAnimationFinishes: useCallback(t => {
      if (s && e(pauseMusicThunk(s)), document.visibilityState === 'visible') {
        e(stopTimerThunk());
        t({
          type: 'reset-state'
        });
        i.current !== n.current?.name && e(setTimerModalThunk({
          state: 'closed',
          userInitiated: !1
        }));
      } else {
        let t = () => {
          e(setTimerModalThunk({
            state: 'open',
            userInitiated: !1
          }));
          window.removeEventListener('focus', t);
        };
        window.addEventListener('focus', t);
      }
      jH();
      a.current?.resetFades();
    }, [n, e, s, i, a])
  };
};
let j$ = e => {
  let t = useDispatch<AppDispatch>();
  let i = useSelector(e => e.timer.time);
  let n = _$$F8(useSelector(e => e.timer.audioEnabled));
  let r = _$$F8(useSelector(e => e.timer && e.timer.modalState === 'open'));
  let a = _$$F8(useSelector(e => e.timer.volume));
  let s = _$$F8(jD());
  let o = useSelector(e => e.timer.isMuted);
  let c = !i || i.isPaused;
  let u = useSelector(e => e.music.music?.isPaused);
  let {
    callbackToRunAtFiveSecondsLeft,
    callbackToRunWhenTimerFinishes,
    callbackToRunAfterAnimationFinishes
  } = jZ();
  useEffect(() => {
    if (c) {
      jk && jk.pause();
      !1 === u && s.current?.fadeIn({
        fadeInLength: 1e3
      });
      return;
    }
    let t = getTimeRemaining(i);
    t < 5e3 && n.current && jk?.paused && !o && playTimerChime(jk, a.current);
    jk && (jk.muted = o);
    t > 5e3 && jk && (jk.pause(), s.current?.resetFades(), s.current?.fadeIn({}));
    let l = [];
    t > 5e3 && l.push(window.setTimeout(() => callbackToRunAtFiveSecondsLeft(n, r), t - 5e3));
    l.push(window.setTimeout(() => callbackToRunWhenTimerFinishes(n, r), t));
    l.push(window.setTimeout(() => callbackToRunAfterAnimationFinishes(e), t + TIMER_THRESHOLD_MS));
    return () => {
      l.forEach(clearTimeout);
    };
  }, [i, c, t, e, callbackToRunWhenTimerFinishes, callbackToRunAfterAnimationFinishes, callbackToRunAtFiveSecondsLeft, r, a, n, s, o, u]);
};
let jY = (e, t) => {
  useEffect(() => {
    e.length > 0 && e.forEach(e => {
      e && (e.volume = t / 100);
    });
  }, [e, t]);
};
let jX = e => useCallback(() => {
  e({
    type: 'start-timer'
  });
}, [e]);
function jq() {
  let [e, t] = useAtomValueAndSetter(_$$$5);
  let i = useSelector(e => e.timer.volume);
  let n = _$$F8(useSelector(e => e.timer.volume));
  let r = _$$F8(useSelector(e => e.timer.isMuted));
  let a = useRef(e.lastUsedTime);
  let s = jX(t);
  return [e, useMemo(() => ({
    setMinutes: e => t({
      type: 'set-minutes',
      minutes: e
    }),
    setSeconds: e => t({
      type: 'set-seconds',
      seconds: e
    }),
    setTime: (e, i) => t({
      type: 'set-time',
      minutes: e,
      seconds: i
    }),
    addMinutes: e => t({
      type: 'add-minutes',
      minutes: e
    }),
    startTimer: s,
    stopTimer: () => t({
      type: 'stop-timer'
    }),
    pauseTimer: () => t({
      type: 'pause-timer'
    }),
    resumeTimer: () => t({
      type: 'resume-timer'
    }),
    playStartChime: () => {
      jM && n.current && !r.current && a.current > 5 && playTimerChime(jM, i);
    }
  }), [n, r, i, t, s])];
}
let jJ = 'time_display--xsmall--RksCd';
let jQ = 'time_display--medium--bxQbL';
let j0 = 'time_display--large--nQrfq';
let j1 = 'time_display--xlarge--HRGrX';
let j2 = 'time_display--clockStyleWrapper--TN05b';
let j3 = 'time_display--timeDiv--Y0hTB';
var j5 = (e => (e.XSMALL = 'xsmall', e.MEDIUM = 'medium', e.LARGE = 'large', e.XLARGE = 'xlarge', e))(j5 || {});
var j6 = (e => (e.DEFAULT = 'DEFAULT', e.SECONDARY = 'SECONDARY', e.TERTIARY = 'TERTIARY', e))(j6 || {});
let j4 = ({
  minutesRef: e,
  disabled: t
}) => {
  useLayoutEffect(() => {
    t || (e.current?.focus(), e.current?.select());
  }, [t, e]);
};
function j9({
  timerActions: e,
  timerState: t,
  isStopped: i,
  withoutUnderline: n,
  withoutClockDisplay: r,
  isInUI3Toolbar: a,
  size: s = 'medium'
}) {
  let c = function (e, t) {
    let {
      setMinutes,
      setSeconds,
      startTimer,
      setTime,
      addMinutes
    } = e;
    let o = useRef(null);
    let c = useRef(null);
    let u = useDispatch<AppDispatch>();
    let p = useCallback(e => {
      if (!e.currentTarget.value.match(/^\d{0,2}$/)) {
        e.preventDefault();
        return;
      }
      setMinutes(e.currentTarget.value);
      e.currentTarget.value.length > 1 && c.current?.select();
    }, [c, setMinutes]);
    let h = useCallback(e => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        isNaN(parseInt(e.currentTarget.value)) || (addMinutes((e.key === 'ArrowUp' ? 1 : -1) * (e.shiftKey ? 5 : 1)), setTimeout(() => o.current?.select(), 0), e.preventDefault());
      } else if (e.key === 'ArrowRight' && o.current) {
        if (o.current.selectionStart === o.current.value.length && c.current) {
          c.current.select();
          e.preventDefault();
        }
      } else if (e.key === 'Enter') {
        startTimer();
      } else if (e.key === 'Escape') {
        u(setTimerModalThunk({
          state: 'closed',
          userInitiated: !0,
          source: 'keyboard'
        }));
      } else if (e.key === ':') {
        c.current?.select();
        e.preventDefault();
      } else {
        handleKeyboardEventByState(e);
      }
    }, [addMinutes, u, startTimer]);
    let m = useCallback(() => {
      if (!o.current) return;
      let e = o.current.value;
      e.length === 0 ? setMinutes('00') : e.length < 2 ? setMinutes(`0${e}`) : setMinutes(e);
    }, [o, setMinutes]);
    let f = useCallback(() => {
      o.current?.select();
    }, [o]);
    let _ = useCallback(e => {
      if (!e.currentTarget.value.match(/^\d{0,2}$/)) {
        e.preventDefault();
        return;
      }
      let i = parseInt(e.currentTarget.value);
      i > 59 && t.minutes !== '99' ? (i -= 60, setTime(padTime(parseInt(t.minutes) + 1), padTime(i))) : i > 59 ? setSeconds(padTime(59)) : (i < 60 || isNaN(i)) && setSeconds(e.currentTarget.value);
    }, [setSeconds, setTime, t.minutes]);
    return {
      handleMinutesChange: p,
      handleMinutesKeyDown: h,
      handleMinutesBlur: m,
      handleMinutesFocus: f,
      handleSecondsChange: _,
      handleSecondsKeyDown: useCallback(e => {
        let s;
        if (e.key === 'ArrowLeft' && c.current) {
          if (c.current.selectionEnd === 0 && o.current) {
            o.current.select();
            e.preventDefault();
            return;
          }
        } else if (e.key === 'Enter') {
          t.minutes !== '' && t.seconds !== '' && parseInt(t.minutes) + parseInt(t.seconds) !== 0 && startTimer();
          return;
        } else if (e.key === 'Escape') {
          u(setTimerModalThunk({
            state: 'closed',
            userInitiated: !0,
            source: 'keyboard'
          }));
          return;
        } else if (c.current?.value === '' && e.key === 'Backspace' && o.current?.value) {
          setMinutes(o.current.value.substring(0, o.current.value.length - 1) || '0');
          o.current.focus();
          e.preventDefault();
          return;
        }
        if (handleKeyboardEventByState(e) || e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        let l = parseInt(t.seconds);
        if (!isNaN(l)) {
          if (e.key === 'ArrowUp') {
            if ((l += e.shiftKey ? 5 : 1) > 59 && t.minutes === '99') return;
            l >= 60 && (l -= 60, s = 1);
          } else if (e.key === 'ArrowDown' && (l -= e.shiftKey ? 5 : 1) < 0) {
            if (parseInt(t.minutes) === 0) return;
            s = -1;
            l += 60;
          }
          setTimeout(() => c.current?.select(), 0);
          e.preventDefault();
          s ? setTime(padTime(parseInt(t.minutes) + s), padTime(l)) : setSeconds(padTime(l));
        }
      }, [u, o, c, setMinutes, setSeconds, setTime, startTimer, t.minutes, t.seconds]),
      handleSecondsBlur: useCallback(() => {
        setSeconds(padTime(parseInt(t.seconds || '00')));
      }, [setSeconds, t.seconds]),
      handleSecondsFocus: useCallback(() => {
        c.current?.select();
      }, [c]),
      secondsRef: c,
      minutesRef: o
    };
  }(e, t);
  j4({
    minutesRef: c.minutesRef,
    disabled: BrowserInfo.isMeetDevice
  });
  return jsx(Fragment, {
    children: i ? jsx(be, {
      timerState: t,
      timerEventHandlers: c,
      withoutUnderline: n,
      withoutClockDisplay: r,
      size: s
    }) : jsx(j8, {
      withoutUnderline: n,
      withoutClockDisplay: r,
      size: s,
      isInUI3Toolbar: a
    })
  });
}
function j8(e) {
  let {
    withoutUnderline,
    withoutClockDisplay,
    withoutTimeShadow,
    withoutFlashOnPause,
    size,
    isSelected,
    prominence,
    timeDivRef,
    isInUI3Toolbar
  } = e;
  let u = useAtomWithSubscription(_$$jo);
  let h = useAtomWithSubscription(Ld);
  return jsx(j7, {
    flashing: isTimerPausedAndStarted(u.time) && !withoutFlashOnPause,
    isInUI3Toolbar,
    isSelected,
    prominence,
    size,
    timeDivRef,
    timeInSeconds: h,
    withoutClockDisplay,
    withoutTimeShadow,
    withoutUnderline
  });
}
function j7(e) {
  let {
    timeInSeconds,
    withoutUnderline,
    withoutClockDisplay,
    withoutTimeShadow,
    flashing,
    size,
    isSelected,
    prominence,
    timeDivRef,
    isInUI3Toolbar
  } = e;
  let {
    seconds,
    minutes
  } = _$$_d(timeInSeconds);
  return jsx('div', {
    className: ex()({
      [j2]: !withoutClockDisplay
    }),
    children: jsxs('div', {
      ref: timeDivRef,
      className: ex()(j3, {
        [jJ]: size === 'xsmall',
        [jQ]: size === 'medium',
        [j0]: size === 'large',
        [j1]: size === 'xlarge',
        'time_display--selected--Idl4y': isSelected,
        'time_display--secondary--r44Yf': prominence === 'SECONDARY',
        'time_display--tertiary--oyx7n': prominence === 'TERTIARY',
        'time_display--inUI3Toolbar--SFjvm': isInUI3Toolbar
      }),
      children: [!withoutClockDisplay && !withoutTimeShadow && jsx(bt, {
        size,
        withoutUnderline
      }), jsxs('div', {
        className: ex()('time_display--timeDisplay--MuaRS', {
          'time_display--flashing--1Hw1m': flashing,
          [jJ]: size === 'xsmall',
          [jQ]: size === 'medium',
          [j0]: size === 'large',
          [j1]: size === 'xlarge'
        }),
        children: [jsx(bi, {
          isMinute: !0,
          size,
          value: padTime(minutes),
          displayOnly: !0
        }), ':', jsx(bi, {
          size,
          value: padTime(seconds),
          displayOnly: !0
        })]
      })]
    })
  });
}
function be({
  timerState: e,
  timerEventHandlers: t,
  withoutUnderline: i,
  withoutClockDisplay: n,
  size: r
}) {
  let {
    handleMinutesChange,
    handleMinutesKeyDown,
    handleMinutesBlur,
    handleMinutesFocus,
    handleSecondsChange,
    handleSecondsKeyDown,
    handleSecondsBlur,
    handleSecondsFocus,
    secondsRef,
    minutesRef
  } = t;
  return jsx(Fragment, {
    children: jsx('div', {
      className: ex()({
        [j2]: !n
      }),
      children: jsxs('div', {
        className: ex()(j3, {
          [jQ]: r === 'medium',
          [j0]: r === 'large',
          [j1]: r === 'xlarge'
        }),
        children: [jsx(bt, {
          size: r,
          withoutUnderline: i
        }), jsxs('div', {
          children: [jsx(bi, {
            ref: minutesRef,
            onFocus: handleMinutesFocus,
            onChange: handleMinutesChange,
            onKeyDown: handleMinutesKeyDown,
            onBlur: handleMinutesBlur,
            value: e.minutes,
            size: r,
            isMinute: !0
          }), jsx('span', {
            'aria-hidden': 'true',
            'children': ':'
          }), jsx(bi, {
            ref: secondsRef,
            onChange: handleSecondsChange,
            onFocus: handleSecondsFocus,
            onKeyDown: handleSecondsKeyDown,
            onBlur: handleSecondsBlur,
            value: e.seconds,
            size: r
          })]
        })]
      })
    })
  });
}
function bt(e) {
  return jsxs('div', {
    'className': ex()('time_display--timeShadow--dyosl', {
      [jJ]: e.size === 'xsmall',
      [jQ]: e.size === 'medium',
      [j0]: e.size === 'large',
      [j1]: e.size === 'xlarge'
    }),
    'aria-hidden': 'true',
    'children': [jsx(bi, {
      isMinute: !0,
      size: e.size,
      value: 88,
      displayOnly: !0
    }), ':', jsx(bi, {
      size: e.size,
      value: 88,
      displayOnly: !0
    }), !e.withoutUnderline && jsx('div', {
      className: 'time_display--timeInputUnderline--4Gxkr'
    })]
  });
}
let bi = forwardRef((e, t) => {
  let {
    size,
    isMinute,
    onFocus,
    onChange,
    onKeyDown,
    onBlur,
    value,
    displayOnly
  } = e;
  let u = ex()('time_display--timeInput--4Evh3', {
    'time_display--minute--Q8e3H': isMinute,
    [jJ]: size === 'xsmall',
    [jQ]: size === 'medium',
    [j0]: size === 'large',
    [j1]: size === 'xlarge'
  });
  return displayOnly ? jsx('span', {
    'className': u,
    'data-testid': 'stopped-time',
    'children': value
  }) : jsx('input', {
    'ref': t,
    'aria-label': isMinute ? getI18nString('whiteboard.timer.minutes.aria_label') : getI18nString('whiteboard.timer.seconds.aria_label'),
    'className': u,
    'inputMode': 'numeric',
    'maxLength': 2,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    'type': 'text',
    value
  });
});
function bn() {
  jU();
  jF();
  let [e, t] = jq();
  let {
    startTimer,
    stopTimer,
    addMinutes,
    pauseTimer,
    resumeTimer
  } = t;
  let c = useAtomWithSubscription(_$$jo);
  let u = useSelector(e => e.multiplayer.allUsers.length);
  let [h, m] = useState(!1);
  let f = c.time;
  let _ = getTotalSeconds(e);
  let x = isTimerDone(f);
  let g = isTimerPausedAndStarted(f);
  let j = isTimerFinished(f);
  let b = canIncrementTimer(f, e) && !j;
  useEffect(() => {
    j && m(!1);
  }, [j]);
  let y = useCallback(() => {
    pauseTimer();
  }, [pauseTimer]);
  let v = useCallback(() => {
    startTimer();
  }, [startTimer]);
  let C = useCallback(() => {
    resumeTimer();
  }, [resumeTimer]);
  let T = useCallback(() => {
    stopTimer();
  }, [stopTimer]);
  if (h && !j) {
    return jsx(jf, {
      titleText: getI18nString('whiteboard.timer.end_timer_confirmation_new'),
      bodyText: getI18nString('whiteboard.timer.end_timer_confirmation_subtext_new'),
      cancelButtonText: getI18nString('whiteboard.timer.end_timer_go_back_new'),
      confirmButtonText: getI18nString('whiteboard.timer.end_timer_button_new'),
      onCancel: () => m(!1),
      onConfirm: () => {
        m(!1);
        T();
      }
    });
  }
  let E = x ? getI18nString('whiteboard.timer.start_timer_tooltip') : f?.isPaused ? getI18nString('whiteboard.timer.resume_timer_tooltip') : getI18nString('whiteboard.timer.pause_timer_tooltip');
  let S = x && _ <= 0;
  let w = f?.isPaused || x;
  return jsx('div', {
    'className': 'timer_view--timerContainer--kRcU1',
    'data-testid': 'timer-modal',
    'children': jsxs('div', {
      className: cssBuilderInstance.flex.flexColumn.p16.gap12.$,
      children: [jsx('div', {
        className: 'timer_view--timerBackground--NUQ4g',
        children: jsx(j9, {
          timerActions: t,
          timerState: e,
          isStopped: x,
          size: j5.XLARGE,
          withoutUnderline: !0,
          isInUI3Toolbar: !1
        })
      }), jsxs('div', {
        className: cssBuilderInstance.flex.justifyBetween.itemsCenter.$,
        children: [jsx(jh, {
          'onClick': e => {
            addMinutes(TIMER_INCREMENT_STEP);
            e.preventDefault();
          },
          'disabled': !b,
          'aria-label': getI18nString('whiteboard.timer.add_one_minute.aria_label'),
          'children': jsxs('div', {
            className: 'timer_view--addTimeButton--tKy9r',
            children: [jsx(_$$x5, {}), renderI18nText('whiteboard.timer.min', {
              timeIncrement: TIMER_INCREMENT_STEP
            })]
          })
        }), jsxs('div', {
          className: cssBuilderInstance.flex.gap12.$,
          children: [!x && jsx(jv, {
            buttonState: jy.STOP,
            onClick: () => {
              f && (hasTimerRunEnough(f, u) ? m(!0) : T());
            },
            dataTooltip: getI18nString('whiteboard.timer.end_timer_tooltip'),
            disabled: x || j
          }), jsx(jv, {
            buttonState: w ? jy.PLAY : jy.PAUSE,
            onClick: w ? () => {
              g ? C() : v();
            } : y,
            dataTooltip: E,
            disabled: w ? S : j,
            dataOnboardingKey: TIMER_ONBOARDING_EVENT
          })]
        })]
      })]
    })
  });
}
bi.displayName = 'TwoDigitTimeInput';
function bs({
  onCancel: e
}) {
  let t = C3();
  let i = useDispatch<AppDispatch>();
  let n = useCurrentFileKey();
  let r = useIsLoading(createEndVotingSessionKey(n || ''));
  let a = useCallback(() => {
    i(endVotingSession({
      uiSurface: 'MeetingsPanel'
    }));
    trackEventAnalytics('confirm_end_voting_session', {
      source: 'voting_modal',
      votingSessionId: t?.id,
      fileKey: n
    });
  }, [i, t, n]);
  let s = useCallback(() => {
    e();
    trackEventAnalytics('cancel_end_voting_session', {
      source: 'voting_modal',
      votingSessionId: t?.id,
      fileKey: n
    });
  }, [e, t, n]);
  return jsx(jf, {
    titleText: getI18nString('voting.modal.end_voting_session_modal_header'),
    bodyText: getI18nString('voting.modal.end_voting_session_modal_description'),
    cancelButtonText: getI18nString('meetings_panel.voting.go_back'),
    confirmButtonText: getI18nString('voting.modal.end_voting_session_modal_confirm_button'),
    onCancel: s,
    onConfirm: a,
    onCancelDisabled: r || !t,
    onConfirmDisabled: r || !t,
    recordingKey: 'endVotingModal'
  });
}
let bd = 'face_pile--facePileAvatarPositioner--pWI9a';
let bc = 'face_pile--active--5AAUF';
function bp({
  userId: e,
  isActive: t
}) {
  let {
    user,
    loading
  } = wW(e);
  return jsx(_$$v3, {
    userId: e,
    size: 16,
    user,
    loading,
    defaultClassName: ex()('face_pile--facePileAvatar--pZDZe', t && bc),
    loadingClassName: ex()('face_pile--facePileAvatarLoading--uhhTa face_pile--facePileAvatar--pZDZe', t && bc)
  });
}
function bh({
  overflowUserIds: e,
  isActive: t
}) {
  return jsx(Fragment, {
    children: jsx('div', {
      className: bd,
      children: jsx('div', {
        className: ex()({
          'face_pile--facePileOverflowIcon--qL11N': !0,
          [bc]: t
        }),
        children: jsx(SvgComponent, {
          className: 'face_pile--overflowIcon--q-7wp',
          svg: _$$A77
        })
      })
    })
  });
}
function bm({
  userIds: e,
  maxHeadsBeforeOverflow: t,
  isActive: i
}) {
  let n = e.length > t;
  let r = n ? e.slice(0, t - 1) : e;
  let a = n ? e.slice(t - 1) : [];
  return jsxs('div', {
    className: 'face_pile--facePileContainer--DzqrO',
    children: [a.length ? jsx(bh, {
      overflowUserIds: a,
      isActive: i
    }) : null, [...r].reverse().map(e => jsx('div', {
      className: bd,
      children: jsx(bp, {
        userId: e,
        isActive: i
      })
    }, e))]
  });
}
function b_({
  userId: e
}) {
  let {
    user,
    loading
  } = wW(e);
  return jsxs(Fragment, {
    children: [jsx(_$$v3, {
      userId: e,
      user,
      loading,
      size: 24,
      loadingClassName: 'voting_user_overflow_dropdown--loadingAvatar---1jYn'
    }), jsx(_$$m7, {
      userId: e,
      user,
      loading,
      defaultClassName: 'voting_user_overflow_dropdown--userName--huz8P text--fontNeg13--7Ebf5 text--_fontBase--QdLsd text--_negText--j9g-L ellipsis--ellipsis--Tjyfa',
      loadingClassName: 'voting_user_overflow_dropdown--loadingUserName--pC-X-'
    })]
  });
}
let bx = e => {
  let {
    windowInnerHeight
  } = useWindowDimensions();
  let i = Yk();
  return windowInnerHeight - (e.y + e.height) - i - 22;
};
function bg({
  userIds: e,
  targetRect: t
}) {
  let i = bx(t);
  let n = e.length === 0;
  return jsx(ConnectedPointingDropdown, {
    className: 'voting_user_overflow_dropdown--pointingDropdown--equm6',
    targetRect: t,
    lean: 'center',
    disableDropdownScrollContainer: !0,
    propagateCloseClick: !0,
    children: jsx(RecordingScrollContainer, {
      maxHeight: i,
      width: 192,
      children: jsx('ol', {
        className: 'voting_user_overflow_dropdown--dropdownPadding---VKEq',
        children: n ? jsx('div', {
          className: 'voting_user_overflow_dropdown--noVotesText--T2dVF text--fontNeg13--7Ebf5 text--_fontBase--QdLsd text--_negText--j9g-L',
          children: renderI18nText('voting.modal.during_voting_no_votes_dropdown')
        }) : e.map(e => jsx('li', {
          className: 'voting_user_overflow_dropdown--listItem--d7eTA',
          children: jsx(b_, {
            userId: e
          })
        }, e))
      })
    })
  });
}
let bb = 'users_voted--rootSelected--y6VPJ';
function by({
  votingSessionInfo: e
}) {
  return useMemo(() => e.votedNodes.reduce((e, t) => (Object.entries(t.userIdToNodeVotes).forEach(([t, i]) => {
    e[t] = (e[t] || 0) + i.length;
  }), e), {}), [e.votedNodes]);
}
let bv = e => {
  let t = useDispatch<AppDispatch>();
  return {
    isDropdownOpen: useSelector(e => e.dropdownShown?.type === bT),
    handleTargetClick: () => {
      t(toggleDropdown({
        type: bT
      }));
    }
  };
};
function bC({
  votingSessionInfo: e,
  userVoteLimit: t
}) {
  let [i, n] = useState(null);
  let [r, a] = useState(!1);
  let s = getUserId();
  let d = by({
    votingSessionInfo: e
  });
  let c = useMemo(() => Object.entries(d).filter(([e, i]) => i && i >= t).map(([e]) => e).sort(zi(s)), [d, t, s]);
  let {
    isDropdownOpen,
    handleTargetClick
  } = bv(c);
  return jsxs(Fragment, {
    children: [jsxs('button', {
      className: ex()({
        'users_voted--duringSessionRoot--XC-59 users_voted--rootBase--KRjQs text--fontPos12--YsUAh text--_fontBase--QdLsd': !0,
        [bb]: isDropdownOpen
      }),
      onMouseDown: e => e.stopPropagation(),
      onMouseEnter: () => a(!0),
      onMouseLeave: () => a(!1),
      onClick: handleTargetClick,
      ref: e => n(e),
      children: [jsx(bm, {
        userIds: c,
        maxHeadsBeforeOverflow: 4,
        isActive: r || isDropdownOpen
      }), jsx('p', {
        className: 'users_voted--duringSessionText--glncG',
        children: c.length > 0 ? renderI18nText('voting.modal.people_voted', {
          numVotes: c.length
        }) : renderI18nText('voting.modal.during_voting_no_ones_voted')
      }), jsx(SvgComponent, {
        className: ex()({
          'users_voted--chevronDown--LWnXw': !0,
          'users_voted--chevronDownActive---IB9j': isDropdownOpen
        }),
        svg: _$$A52
      })]
    }), isDropdownOpen && i && jsx(bg, {
      targetRect: i.getBoundingClientRect(),
      userIds: c
    })]
  });
}
let bT = 'USERS_VOTED_DROPDOWN';
function bE({
  votingSessionInfo: e
}) {
  let [t, i] = useState(null);
  let n = getUserId();
  let r = by({
    votingSessionInfo: e
  });
  let a = useMemo(() => Object.keys(r).sort(zi(n)), [r, n]);
  let {
    isDropdownOpen,
    handleTargetClick
  } = bv(a);
  return jsxs(Fragment, {
    children: [jsx('button', {
      className: ex()({
        'users_voted--resultsDetailRoot--K2wEg users_voted--rootBase--KRjQs text--fontPos12--YsUAh text--_fontBase--QdLsd': !0,
        [bb]: isDropdownOpen
      }),
      onMouseDown: e => e.stopPropagation(),
      onClick: handleTargetClick,
      ref: e => i(e),
      children: jsx('p', {
        children: a.length > 0 ? renderI18nText('voting.modal.voted', {
          numVotes: a.length
        }) : renderI18nText('voting.modal.after_voting_no_one_voted')
      })
    }), isDropdownOpen && t && jsx(bg, {
      targetRect: t.getBoundingClientRect(),
      userIds: a
    })]
  });
}
function bS({
  title: e,
  useSmallerText: t
}) {
  let [i, n] = useState(!1);
  let r = useRef(null);
  useEffect(() => {
    let e = r.current;
    e ? n(e.scrollHeight > e.clientHeight) : n(!1);
  }, [e, r]);
  return jsx('div', {
    'ref': r,
    'className': ex()('voting_components--votingSessionTitle--KDhQJ text--fontPos14--OL9Hp text--_fontBase--QdLsd ellipsis--ellipsisAfter3Lines--h405C ellipsis--_ellipsisAfterNLines--LzI7k', {
      'voting_components--smallerText--rtDFU text--fontPos11--2LvXf text--_fontBase--QdLsd': t
    }),
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': i ? e : void 0,
    'children': e
  });
}
function bw({
  votingSessionInfo: e,
  onEndClick: t,
  recordingKey: i
}) {
  let n = C3();
  let r = useSelector(e => !e.user);
  let a = useCurrentFileKey();
  return n ? jsxs('div', {
    className: 'joined_vote_view--joinedVoteViewContainer--2w8-v',
    children: [jsx('div', {
      children: jsx(bS, {
        title: _$$DG(n),
        useSmallerText: !0
      })
    }), jsx('div', {
      className: 'joined_vote_view--usersVotedContainer--nEFTt',
      children: jsx(bC, {
        votingSessionInfo: e,
        userVoteLimit: n.userVoteLimit
      })
    }), !BrowserInfo.isMeetDevice && jsx('div', {
      className: cssBuilderInstance.flex.$,
      children: jsx(jh, {
        'flexGrow': !0,
        'onClick': () => {
          t();
          trackEventAnalytics('click_end_voting_session', {
            source: 'voting_modal',
            votingSessionId: n.id,
            fileKey: a
          });
        },
        'disabled': r,
        'data-tooltip-type': r ? KindEnum.TEXT : void 0,
        'data-tooltip': r ? getI18nString('voting.modal.end_disabled_logged_out_tooltip') : void 0,
        'recordingKey': generateRecordingKey(i, 'endVotingSession'),
        'children': jsx('span', {
          children: renderI18nText('voting.modal.end_for_all')
        })
      })
    })]
  }) : null;
}
function bI({
  votingSessionInfo: e,
  recordingKey: t
}) {
  let [i, n] = useState(!1);
  let r = useCallback(() => {
    n(!1);
  }, [n]);
  let a = useCallback(() => {
    n(!0);
  }, [n]);
  return jsx(Fragment, {
    children: i ? jsx(bs, {
      onCancel: r
    }) : jsx(bw, {
      votingSessionInfo: e,
      onEndClick: a,
      recordingKey: t
    })
  });
}
function bL() {
  return jsxs('svg', {
    width: '142',
    height: '115',
    viewBox: '0 0 142 115',
    fill: 'none',
    children: [jsxs('g', {
      filter: 'url(#filter0_d_536_1194)',
      children: [jsx('mask', {
        id: 'mask0_536_1194',
        style: {
          maskType: 'luminance'
        },
        maskUnits: 'userSpaceOnUse',
        x: '9',
        y: '7',
        width: '112',
        height: '121',
        children: jsx('path', {
          d: 'M30.3749 27.8343C32.0497 25.2359 34.6296 23.3518 37.6144 22.5472L95.2853 7.00006L120.973 102.285L25.6874 127.973L9.4772 67.8424C8.5589 64.4361 9.1256 60.8001 11.037 57.8348L30.3749 27.8343Z',
          fill: 'white'
        })
      }), jsxs('g', {
        mask: 'url(#mask0_536_1194)',
        children: [jsx('path', {
          d: 'M95.2854 7.00012L120.973 102.285L25.6875 127.973L0 32.6875L95.2854 7.00012Z',
          fill: '#FFD966'
        }), jsx('g', {
          filter: 'url(#filter1_f_536_1194)',
          children: jsx('rect', {
            x: '-9.06198',
            y: '72.871',
            width: '80.2756',
            height: '13.9108',
            transform: 'rotate(-57 -9.06198 72.871)',
            fill: 'black',
            fillOpacity: '0.3'
          })
        }), jsx('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M29.7476 28.8039L10.2326 59.1223C15.1411 51.4964 30.0572 48.6566 30.0572 48.6566C30.0572 48.6566 25.2827 35.7405 29.7476 28.8039Z',
          fill: '#FFD966'
        }), jsx('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M29.7476 28.8039L10.2326 59.1223C15.1411 51.4964 30.0572 48.6566 30.0572 48.6566C30.0572 48.6566 25.2827 35.7405 29.7476 28.8039Z',
          fill: 'url(#paint0_linear_536_1194)'
        })]
      })]
    }), jsxs('defs', {
      children: [jsxs('filter', {
        id: 'filter0_d_536_1194',
        x: '-20.5598',
        y: '-13.5598',
        width: '162.092',
        height: '162.092',
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
        }), jsx('feOffset', {}), jsx('feGaussianBlur', {
          stdDeviation: '10.2799'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_536_1194'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_536_1194',
          result: 'shape'
        })]
      }), jsxs('filter', {
        id: 'filter1_f_536_1194',
        x: '-35.6799',
        y: '-21.0717',
        width: '108.624',
        height: '128.137',
        filterUnits: 'userSpaceOnUse',
        colorInterpolationFilters: 'sRGB',
        children: [jsx('feFlood', {
          floodOpacity: '0',
          result: 'BackgroundImageFix'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'BackgroundImageFix',
          result: 'shape'
        }), jsx('feGaussianBlur', {
          stdDeviation: '13.3089',
          result: 'effect1_foregroundBlur_536_1194'
        })]
      }), jsxs('linearGradient', {
        id: 'paint0_linear_536_1194',
        x1: '20.32',
        y1: '42.4426',
        x2: '29.6252',
        y2: '49.517',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: 'white',
          stopOpacity: '0.5'
        }), jsx('stop', {
          offset: '0.319642',
          stopColor: 'white',
          stopOpacity: '0.2'
        }), jsx('stop', {
          offset: '1',
          stopColor: 'white',
          stopOpacity: '0.2'
        })]
      })]
    })]
  });
}
function bN() {
  return jsxs('svg', {
    width: '52',
    height: '52',
    viewBox: '0 0 52 52',
    fill: 'none',
    children: [jsxs('g', {
      filter: 'url(#filter0_d_1904_66844)',
      children: [jsx('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M18.6975 43.3947V28.2216C17.2146 28.9246 15.5806 29.3745 13.8194 29.4818L9.75977 29.729L9.75977 13.542L13.3208 13.2938C16.2911 13.0869 18.6537 11.8389 19.8608 8.79489L20.819 6.37863H34.6307V43.3947H18.6975ZM18.6975 23.7911C20.2723 22.6622 21.5839 21.1021 22.5245 19.3196V39.5677H30.8037V10.2056H23.4183C21.5367 14.9506 17.6323 16.8297 13.5868 17.1116V25.6618C14.9507 25.5788 16.2382 25.1962 17.4138 24.5825C17.8583 24.3505 18.2869 24.0855 18.6975 23.7911Z',
        fill: 'white'
      }), jsx('path', {
        d: 'M22.5245 39.5677H30.8037V10.2057H23.4183C21.5367 14.9506 17.6323 16.8297 13.5868 17.1116V25.6618C17.4441 25.427 20.6899 22.7961 22.5245 19.3196V39.5677Z',
        fill: '#9747FF'
      }), jsx('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M7.64916 24.2332H9.86288L17 28L20.5 28.0597V39.5527H19.1422V43.3803H7.64916V39.5527L3.82166 39.5527L3.82166 28.0597L7.64916 28.0597V24.2332ZM11.4822 35.7197H7.65466V31.8927L11.4822 31.8927V28.0662H15.3092L15.3092 31.8867M15.3092 31.8927H19.1357ZM15.3092 35.7197H15.3152ZM19.1357 35.7197V31.8927ZM15.3092 35.7257V39.5473ZM11.4822 39.5473H15.3092ZM11.4822 35.7197V39.5473ZM15.3152 35.7197L19.1357 35.7197Z',
        fill: 'white'
      }), jsx('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M15.3092 28.0662H11.4822V31.8927L7.65466 31.8927V35.7197L11.4822 35.7197V39.5473H15.3092V35.7197L19.1357 35.7197V31.8927L15.3092 31.8927V28.0662Z',
        fill: '#9747FF'
      }), jsx('path', {
        d: 'M38.9984 23.4121C39.1678 22.8781 39.9234 22.8781 40.0928 23.4121L41.5337 27.9551C41.584 28.1137 41.7006 28.2427 41.8533 28.3086L45.9788 30.0896C46.4408 30.289 46.4408 30.9442 45.9788 31.1437L41.8533 32.9246C41.7006 32.9906 41.584 33.1195 41.5337 33.2781L40.0928 37.8211C39.9234 38.3551 39.1678 38.3551 38.9984 37.8211L37.5575 33.2781C37.5072 33.1195 37.3906 32.9906 37.2378 32.9246L33.1124 31.1437C32.6503 30.9442 32.6503 30.289 33.1124 30.0896L37.2378 28.3086C37.3906 28.2427 37.5072 28.1137 37.5575 27.9551L38.9984 23.4121Z',
        fill: '#EFBA00'
      }), jsx('path', {
        d: 'M38.9984 23.4121C39.1678 22.8781 39.9234 22.8781 40.0928 23.4121L41.5337 27.9551C41.584 28.1137 41.7006 28.2427 41.8533 28.3086L45.9788 30.0896C46.4408 30.289 46.4408 30.9442 45.9788 31.1437L41.8533 32.9246C41.7006 32.9906 41.584 33.1195 41.5337 33.2781L40.0928 37.8211C39.9234 38.3551 39.1678 38.3551 38.9984 37.8211L37.5575 33.2781C37.5072 33.1195 37.3906 32.9906 37.2378 32.9246L33.1124 31.1437C32.6503 30.9442 32.6503 30.289 33.1124 30.0896L37.2378 28.3086C37.3906 28.2427 37.5072 28.1137 37.5575 27.9551L38.9984 23.4121Z',
        fill: 'url(#paint0_linear_1904_66844)'
      }), jsx('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M37.3739 28.313C37.4969 28.2595 37.5912 28.1537 37.6324 28.023L39.0624 23.4807C39.1998 23.0443 39.8002 23.0443 39.9376 23.4807L41.3676 28.023C41.4088 28.1537 41.5031 28.2595 41.6261 28.313L45.6529 30.0643C46.0273 30.2272 46.0273 30.7728 45.6529 30.9357L41.6261 32.687C41.5031 32.7405 41.4088 32.8463 41.3676 32.977L39.9376 37.5193C39.8002 37.9557 39.1998 37.9557 39.0624 37.5193L37.6324 32.977C37.5912 32.8463 37.4969 32.7405 37.3739 32.687L33.3471 30.9357C32.9727 30.7728 32.9727 30.2272 33.3471 30.0643L37.3739 28.313ZM42.8548 22.5094L43.9178 25.8859L46.8472 27.1599C49.7176 28.4083 49.7176 32.5917 46.8472 33.8401L43.9178 35.1141L42.8548 38.4906C41.8014 41.8365 37.1986 41.8364 36.1452 38.4906L35.0822 35.1141L32.1528 33.8401C32.1009 33.8175 32.05 33.794 32 33.7696L32 27.2304C32.05 27.206 32.1009 27.1825 32.1528 27.1599L35.0822 25.8859L36.1452 22.5094C37.1986 19.1635 41.8014 19.1636 42.8548 22.5094Z',
        fill: 'white'
      }), jsx('path', {
        d: 'M38.9985 23.4116C39.1678 22.8776 39.9235 22.8776 40.0929 23.4116L41.5338 27.9546C41.5841 28.1132 41.7007 28.2422 41.8534 28.3081L45.9789 30.0891C46.4409 30.2886 46.4409 30.9437 45.9789 31.1432L41.8534 32.9241C41.7007 32.9901 41.5841 33.1191 41.5338 33.2776L40.0929 37.8206C39.9235 38.3546 39.1678 38.3546 38.9985 37.8206L37.5576 33.2776C37.5073 33.1191 37.3906 32.9901 37.2379 32.9241L33.1125 31.1432C32.6504 30.9437 32.6504 30.2886 33.1125 30.0891L37.2379 28.3081C37.3906 28.2422 37.5073 28.1132 37.5576 27.9546L38.9985 23.4116Z',
        fill: 'url(#paint1_linear_1904_66844)'
      }), jsx('path', {
        d: 'M38.9985 23.4116C39.1678 22.8776 39.9235 22.8776 40.0929 23.4116L41.5338 27.9546C41.5841 28.1132 41.7007 28.2422 41.8534 28.3081L45.9789 30.0891C46.4409 30.2886 46.4409 30.9437 45.9789 31.1432L41.8534 32.9241C41.7007 32.9901 41.5841 33.1191 41.5338 33.2776L40.0929 37.8206C39.9235 38.3546 39.1678 38.3546 38.9985 37.8206L37.5576 33.2776C37.5073 33.1191 37.3906 32.9901 37.2379 32.9241L33.1125 31.1432C32.6504 30.9437 32.6504 30.2886 33.1125 30.0891L37.2379 28.3081C37.3906 28.2422 37.5073 28.1132 37.5576 27.9546L38.9985 23.4116Z',
        fill: 'url(#paint2_linear_1904_66844)'
      })]
    }), jsxs('defs', {
      children: [jsxs('filter', {
        id: 'filter0_d_1904_66844',
        x: '-1.91351',
        y: '-1.27567',
        width: '54.8539',
        height: '54.8539',
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
          dy: '0.637836'
        }), jsx('feGaussianBlur', {
          stdDeviation: '0.956754'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_1904_66844'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_1904_66844',
          result: 'shape'
        })]
      }), jsxs('linearGradient', {
        id: 'paint0_linear_1904_66844',
        x1: '46.6528',
        y1: '37.3139',
        x2: '29.2026',
        y2: '24.1295',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: 'white',
          stopOpacity: '0'
        }), jsx('stop', {
          offset: '0.33271',
          stopColor: 'white',
          stopOpacity: '0.11'
        }), jsx('stop', {
          offset: '0.449925',
          stopColor: 'white',
          stopOpacity: '0.5'
        }), jsx('stop', {
          offset: '0.562473',
          stopColor: 'white',
          stopOpacity: '0.11'
        }), jsx('stop', {
          offset: '1',
          stopColor: 'white',
          stopOpacity: '0'
        })]
      }), jsxs('linearGradient', {
        id: 'paint1_linear_1904_66844',
        x1: '31.8916',
        y1: '21.6864',
        x2: '47.5581',
        y2: '39.2257',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#F7C000'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#E8B604'
        })]
      }), jsxs('linearGradient', {
        id: 'paint2_linear_1904_66844',
        x1: '47.1997',
        y1: '39.5458',
        x2: '31.5331',
        y2: '22.0066',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: 'white',
          stopOpacity: '0'
        }), jsx('stop', {
          offset: '0.418743',
          stopColor: 'white',
          stopOpacity: '0.15'
        }), jsx('stop', {
          offset: '0.504534',
          stopColor: 'white',
          stopOpacity: '0.63'
        }), jsx('stop', {
          offset: '0.588015',
          stopColor: 'white',
          stopOpacity: '0.15'
        }), jsx('stop', {
          offset: '1',
          stopColor: 'white',
          stopOpacity: '0'
        })]
      })]
    })]
  });
}
function bA() {
  return jsxs('svg', {
    width: '46',
    height: '45',
    viewBox: '0 0 46 45',
    fill: 'none',
    children: [jsxs('g', {
      filter: 'url(#filter0_d_1904_66832)',
      children: [jsx('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M5.6036 25.0556C1.12383 20.6128 1.12383 13.3775 5.6036 8.93478C7.76292 6.7933 10.6465 5.61081 13.6925 5.61081C16.5194 5.61081 19.209 6.62902 21.3102 8.49271C23.4103 6.62969 26.0996 5.60886 28.9298 5.60886C31.9764 5.60886 34.8598 6.79177 37.0207 8.93478C39.1809 11.0772 40.3839 13.9501 40.3839 16.9962C40.3839 20.038 39.1847 22.91 37.0234 25.0548C37.0232 25.055 37.0236 25.0547 37.0234 25.0548C37.0226 25.0556 37.0214 25.0568 37.0207 25.0575L35.3114 26.7566L21.3162 40.6361L5.6036 25.0556ZM21.3102 13.2071L19.4117 11.3243C17.8838 9.80902 15.8532 8.97612 13.6925 8.97612C11.5298 8.97612 9.49924 9.81097 7.97334 11.3243C4.821 14.4506 4.821 19.5398 7.97334 22.6661L21.3161 35.8966L32.9417 24.3671L34.6509 22.6681C36.1788 21.1528 37.0186 19.139 37.0186 16.9962C37.0186 14.8514 36.1768 12.8376 34.6509 11.3243C33.1231 9.80902 31.0925 8.97416 28.9298 8.97416C26.7671 8.97416 24.7365 9.80902 23.2087 11.3243L21.3102 13.2071Z',
        fill: 'white'
      }), jsx('path', {
        d: 'M7.97332 22.6661C4.82098 19.5398 4.82098 14.4506 7.97332 11.3243C9.49922 9.81098 11.5298 8.97612 13.6925 8.97612C15.8532 8.97612 17.8838 9.80902 19.4116 11.3243L21.3101 13.2071L23.2087 11.3243C24.7365 9.80902 26.7671 8.97417 28.9298 8.97417C31.0924 8.97417 33.123 9.80902 34.6509 11.3243C36.1768 12.8376 37.0186 14.8514 37.0186 16.9962C37.0186 19.139 36.1788 21.1528 34.6509 22.6681L32.9417 24.3671L21.3161 35.8966L7.97332 22.6661Z',
        fill: '#FF8577'
      }), jsx('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M31.0424 27.6444C30.9973 27.7838 30.8938 27.8968 30.7588 27.9538L26.3392 29.8229C25.9283 29.9966 25.9283 30.579 26.3392 30.7527L30.7588 32.6217C30.8938 32.6788 30.9973 32.7918 31.0424 32.9312L32.6119 37.7787C32.7627 38.2444 33.4216 38.2444 33.5724 37.7787L35.142 32.9312C35.1871 32.7918 35.2906 32.6788 35.4256 32.6217L39.8452 30.7527C40.2561 30.579 40.2561 29.9966 39.8452 29.8229L35.4256 27.9538C35.2906 27.8968 35.1871 27.7838 35.142 27.6444L33.5724 22.7969C33.4216 22.3312 32.7627 22.3312 32.6119 22.7969L31.0424 27.6444ZM37.9408 25.3637L36.7741 21.7603C35.618 18.1897 30.5664 18.1896 29.4103 21.7603L28.2436 25.3637L25.0284 26.7233C21.8781 28.0556 21.8781 32.52 25.0284 33.8523L28.2436 35.2119L29.4103 38.8153C30.5664 42.3859 35.618 42.386 36.7741 38.8153L37.9408 35.2119L41.156 33.8523C44.3062 32.52 44.3062 28.0556 41.156 26.7233L37.9408 25.3637Z',
        fill: 'white'
      }), jsx('path', {
        d: 'M32.6119 22.7969C32.7627 22.3312 33.4216 22.3312 33.5724 22.7969L35.142 27.6444C35.1871 27.7838 35.2906 27.8968 35.4256 27.9538L39.8452 29.8229C40.2561 29.9966 40.2561 30.5789 39.8452 30.7527L35.4256 32.6217C35.2906 32.6788 35.1871 32.7917 35.142 32.9312L33.5724 37.7787C33.4216 38.2444 32.7627 38.2444 32.6119 37.7787L31.0424 32.9312C30.9973 32.7917 30.8938 32.6788 30.7588 32.6217L26.3392 30.7527C25.9283 30.5789 25.9283 29.9966 26.3392 29.8229L30.7588 27.9538C30.8938 27.8968 30.9973 27.7838 31.0424 27.6444L32.6119 22.7969Z',
        fill: 'url(#paint0_linear_1904_66832)'
      }), jsx('path', {
        d: 'M32.6119 22.7969C32.7627 22.3312 33.4216 22.3312 33.5724 22.7969L35.142 27.6444C35.1871 27.7838 35.2906 27.8968 35.4256 27.9538L39.8452 29.8229C40.2561 29.9966 40.2561 30.5789 39.8452 30.7527L35.4256 32.6217C35.2906 32.6788 35.1871 32.7917 35.142 32.9312L33.5724 37.7787C33.4216 38.2444 32.7627 38.2444 32.6119 37.7787L31.0424 32.9312C30.9973 32.7917 30.8938 32.6788 30.7588 32.6217L26.3392 30.7527C25.9283 30.5789 25.9283 29.9966 26.3392 29.8229L30.7588 27.9538C30.8938 27.8968 30.9973 27.7838 31.0424 27.6444L32.6119 22.7969Z',
        fill: 'url(#paint1_linear_1904_66832)'
      })]
    }), jsxs('defs', {
      children: [jsxs('filter', {
        id: 'filter0_d_1904_66832',
        x: '-1.68265',
        y: '-1.12177',
        width: '48.2361',
        height: '48.2361',
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
          dy: '0.560885'
        }), jsx('feGaussianBlur', {
          stdDeviation: '0.841327'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_1904_66832'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_1904_66832',
          result: 'shape'
        })]
      }), jsxs('linearGradient', {
        id: 'paint0_linear_1904_66832',
        x1: '25.2398',
        y1: '21.3136',
        x2: '40.9446',
        y2: '39.2619',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#F7C000'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#E8B604'
        })]
      }), jsxs('linearGradient', {
        id: 'paint1_linear_1904_66832',
        x1: '40.9446',
        y1: '39.2619',
        x2: '25.2398',
        y2: '21.3136',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: 'white',
          stopOpacity: '0'
        }), jsx('stop', {
          offset: '0.418743',
          stopColor: 'white',
          stopOpacity: '0.15'
        }), jsx('stop', {
          offset: '0.504534',
          stopColor: 'white',
          stopOpacity: '0.63'
        }), jsx('stop', {
          offset: '0.588015',
          stopColor: 'white',
          stopOpacity: '0.15'
        }), jsx('stop', {
          offset: '1',
          stopColor: 'white',
          stopOpacity: '0'
        })]
      })]
    })]
  });
}
function bO() {
  return jsxs('svg', {
    width: '41',
    height: '40',
    viewBox: '0 0 41 40',
    fill: 'none',
    children: [jsxs('g', {
      filter: 'url(#filter0_d_1972_66634)',
      children: [jsx('path', {
        d: 'M25.0742 24.5505V24.5597H25.7273C26.0169 24.5611 26.3027 24.6243 26.565 24.7451C26.8274 24.8659 27.0598 25.0414 27.2464 25.2593L27.2793 25.3009C27.5241 25.587 27.6808 25.9359 27.7307 26.3067C27.7807 26.6774 27.7219 27.0545 27.5612 27.3935C27.4006 27.7324 27.1448 28.0191 26.824 28.2198C26.5033 28.4204 26.1309 28.5267 25.7508 28.526H25.0068V28.5368C25.2967 28.5379 25.5827 28.6012 25.8451 28.7223C26.1075 28.8434 26.3398 29.0194 26.526 29.2379L26.5589 29.2764C26.8032 29.5625 26.9595 29.9114 27.0091 30.2818C27.0588 30.6523 26.9999 31.0291 26.8393 31.3678C26.6787 31.7064 26.4232 31.9929 26.1027 32.1935C25.7822 32.3941 25.4102 32.5004 25.0303 32.5H8.91728C8.46859 32.5002 8.02426 32.4134 7.60966 32.2446C7.19507 32.0758 6.81834 31.8283 6.50099 31.5162C6.18365 31.2041 5.93191 30.8336 5.76016 30.4257C5.5884 30.0179 5.5 29.5808 5.5 29.1393V19.8199H6.85C7.91966 19.8199 8.49287 19.6181 9.14907 18.1249C11.16 13.1555 14.6305 11.3018 14.6305 8.66534V7.82863C14.633 7.54171 14.7506 7.26738 14.9577 7.06536C15.1647 6.86334 15.4446 6.74999 15.7362 6.75H16.0682C16.5994 6.74951 17.1152 6.9252 17.5323 7.24869C17.9495 7.57218 18.2437 8.02458 18.3673 8.53282C18.5022 9.0959 18.5705 9.67242 18.5709 10.2509C18.5703 11.2371 18.3745 12.2137 17.9945 13.1262L17.058 15.379C17.0007 15.5145 16.9783 15.6619 16.9929 15.8079C17.0074 15.954 17.0584 16.0942 17.1413 16.2162C17.2242 16.3382 17.3365 16.4382 17.4682 16.5072C17.5998 16.5762 17.7467 16.6121 17.8959 16.6118H25.7508C26.0404 16.6131 26.3262 16.6764 26.5885 16.7971C26.8508 16.9179 27.0833 17.0934 27.2699 17.3113L27.3028 17.3545C27.5467 17.6406 27.7025 17.9893 27.7519 18.3595C27.8013 18.7298 27.7423 19.1062 27.5818 19.4446C27.4212 19.783 27.1659 20.0692 26.8457 20.2698C26.5255 20.4703 26.1538 20.5767 25.7742 20.5765H25.1478H26.479C26.7688 20.5775 27.0549 20.6408 27.3173 20.7619C27.5797 20.883 27.8121 21.059 27.9981 21.2776L28.0326 21.3177C28.2769 21.6037 28.4331 21.9524 28.4828 22.3227C28.5326 22.6931 28.4738 23.0697 28.3134 23.4083C28.153 23.7469 27.8976 24.0334 27.5774 24.2341C27.2572 24.4348 26.8853 24.5414 26.5056 24.5412L25.0742 24.5505Z',
        fill: '#0FA958'
      }), jsx('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M25.0742 24.5505V24.5597H25.7273C25.9951 24.561 26.2598 24.6152 26.5056 24.7189C26.506 24.719 26.5064 24.7192 26.5068 24.7194C26.5263 24.7276 26.5457 24.7362 26.565 24.7451C26.8274 24.8659 27.0598 25.0414 27.2464 25.2593L27.2793 25.3009C27.5241 25.587 27.6808 25.9359 27.7307 26.3067C27.7326 26.3206 27.7343 26.3346 27.7359 26.3485C27.7761 26.7057 27.7158 27.0672 27.5612 27.3935C27.5549 27.4069 27.5484 27.4202 27.5417 27.4334C27.3802 27.7549 27.1321 28.027 26.824 28.2198C26.5566 28.387 26.2533 28.4887 25.9396 28.5175C25.8794 28.5231 25.8187 28.5259 25.7579 28.526C25.7555 28.526 25.7531 28.526 25.7508 28.526H25.0069L25.0068 28.5368C25.2622 28.5378 25.5146 28.587 25.7505 28.6815C25.7504 28.6815 25.7506 28.6816 25.7505 28.6815C25.7822 28.6943 25.814 28.7079 25.8451 28.7223C26.1075 28.8434 26.3398 29.0194 26.526 29.2379L26.5589 29.2764C26.8032 29.5625 26.9595 29.9113 27.0091 30.2818C27.0588 30.6523 26.9999 31.0291 26.8393 31.3678C26.8322 31.3827 26.825 31.3975 26.8175 31.4123C26.6561 31.7315 26.409 32.0018 26.1027 32.1935C25.7822 32.3941 25.4102 32.5004 25.0303 32.5H8.91728C8.46859 32.5002 8.02426 32.4134 7.60966 32.2446C7.19507 32.0758 6.81834 31.8283 6.50099 31.5162C6.18365 31.2041 5.93191 30.8336 5.76016 30.4257C5.5884 30.0179 5.5 29.5808 5.5 29.1393V19.8199H6.85C7.91966 19.8199 8.49287 19.6181 9.14907 18.1249C10.1339 15.6911 11.4689 14.0047 12.5748 12.6076C13.727 11.152 14.6305 10.0106 14.6305 8.66534V7.82863C14.633 7.54171 14.7506 7.26738 14.9577 7.06536C15.1647 6.86333 15.4446 6.74999 15.7362 6.75H16.0682C16.5994 6.74951 17.1152 6.9252 17.5323 7.24869C17.9495 7.57218 18.2437 8.02458 18.3673 8.53282C18.5022 9.0959 18.5705 9.67242 18.5709 10.2509C18.5703 11.2371 18.3745 12.2137 17.9945 13.1262L17.058 15.379C17.0007 15.5145 16.9783 15.6619 16.9929 15.8079C17.0074 15.954 17.0584 16.0942 17.1413 16.2162C17.2242 16.3382 17.3365 16.4382 17.4682 16.5072C17.5998 16.5762 17.7467 16.6121 17.8959 16.6118H25.7508C26.0404 16.6131 26.3262 16.6764 26.5885 16.7971C26.8508 16.9179 27.0833 17.0934 27.2699 17.3113L27.3028 17.3545C27.3916 17.4587 27.4687 17.5711 27.5333 17.6899C27.646 17.8974 27.7205 18.1241 27.7519 18.3595C27.8013 18.7298 27.7423 19.1062 27.5818 19.4446C27.4212 19.783 27.1659 20.0692 26.8457 20.2698C26.7297 20.3424 26.6069 20.4027 26.4794 20.45C26.4793 20.4501 26.4796 20.45 26.4794 20.45C26.2558 20.5331 26.0174 20.5764 25.7761 20.5765H26.479C26.6908 20.5772 26.9005 20.6112 27.1005 20.6767C27.1742 20.7008 27.2466 20.7292 27.3173 20.7619C27.5797 20.883 27.8121 21.059 27.9981 21.2776L28.0326 21.3177C28.2769 21.6037 28.4331 21.9524 28.4828 22.3227C28.486 22.3465 28.4888 22.3703 28.4911 22.3941C28.5035 22.5228 28.5029 22.6519 28.4896 22.7795C28.4671 22.9963 28.4078 23.2089 28.3134 23.4083C28.153 23.7469 27.8976 24.0334 27.5774 24.2341C27.3012 24.4072 26.9866 24.5103 26.6617 24.5353C26.6099 24.5393 26.5578 24.5413 26.5056 24.5412L25.7273 24.5463L25.0742 24.5505ZM30.6292 19.7802C31.0668 20.4164 31.3522 21.1496 31.4561 21.9234C31.5833 22.8701 31.4325 23.8314 31.0246 24.6926C30.9059 24.9431 30.7671 25.1818 30.6102 25.4067C30.6498 25.5708 30.6811 25.7375 30.7039 25.9061C30.8315 26.8538 30.6807 27.8162 30.2721 28.6783C30.1597 28.9155 30.0293 29.142 29.8825 29.3563C29.9252 29.5293 29.9587 29.7051 29.9825 29.8831C30.1095 30.8302 29.9584 31.7918 29.55 32.6531C29.1418 33.514 28.4957 34.2349 27.6943 34.7365C26.8943 35.2372 25.9703 35.5004 25.0303 35.5C25.0299 35.5 25.0295 35.5 25.0291 35.5C25.0284 35.5 25.0277 35.5 25.027 35.5L8.91864 35.5C8.91819 35.5 8.91774 35.5 8.91728 35.5C8.08167 35.5002 7.25308 35.3386 6.4784 35.0231C5.70321 34.7075 4.99568 34.2435 4.39746 33.6552C3.79913 33.0667 3.32186 32.3655 2.99533 31.5901C2.66875 30.8146 2.5 29.9817 2.5 29.1393V16.8199H6.44186C7.5825 14.0786 9.10204 12.1602 10.1873 10.7901C10.2224 10.7458 10.2571 10.702 10.2913 10.6587C10.8805 9.91414 11.2289 9.45761 11.4543 9.0645C11.5547 8.8895 11.5982 8.78019 11.6169 8.72094C11.6258 8.69274 11.6288 8.67673 11.6298 8.67077L11.6305 8.66562L11.6305 7.81567L11.6306 7.80272C11.6401 6.70885 12.0887 5.67306 12.8628 4.91793C13.6352 4.1644 14.6688 3.74999 15.7362 3.75M30.6292 19.7802C30.773 19.1888 30.807 18.5728 30.7255 17.9626C30.6037 17.0498 30.2293 16.1933 29.6503 15.4855L29.6042 15.425L29.5489 15.3604C29.0789 14.8114 28.4963 14.3728 27.8434 14.0722C27.1906 13.7716 26.4815 13.6151 25.7646 13.6118L21.0159 13.6118C21.382 12.5311 21.5702 11.3969 21.5709 10.2528L21.5709 10.2489C21.5703 9.43548 21.4743 8.62505 21.2847 7.8339L21.2823 7.82375C20.9966 6.64915 20.3191 5.61336 19.3707 4.87796C18.424 4.14383 17.2605 3.74951 16.0682 3.75C16.0679 3.75 16.0685 3.75 16.0682 3.75H15.7362',
        fill: 'white'
      }), jsx('path', {
        d: 'M29.0719 19.3222C29.2063 18.9071 29.7937 18.9071 29.9281 19.3222L31.3273 23.6435C31.3675 23.7678 31.4598 23.8685 31.5801 23.9194L35.5199 25.5855C35.8862 25.7404 35.8862 26.2595 35.5199 26.4145L31.5801 28.0806C31.4598 28.1315 31.3675 28.2321 31.3273 28.3564L29.9281 32.6777C29.7937 33.0929 29.2063 33.0929 29.0719 32.6777L27.6727 28.3564C27.6325 28.2321 27.5402 28.1315 27.4199 28.0806L23.48 26.4145C23.1137 26.2595 23.1137 25.7404 23.48 25.5855L27.4199 23.9194C27.5402 23.8685 27.6325 23.7678 27.6727 23.6435L29.0719 19.3222Z',
        fill: 'url(#paint0_linear_1972_66634)'
      }), jsx('path', {
        d: 'M29.0719 19.3222C29.2063 18.9071 29.7937 18.9071 29.9281 19.3222L31.3273 23.6435C31.3675 23.7678 31.4598 23.8685 31.5801 23.9194L35.5199 25.5855C35.8862 25.7404 35.8862 26.2595 35.5199 26.4145L31.5801 28.0806C31.4598 28.1315 31.3675 28.2321 31.3273 28.3564L29.9281 32.6777C29.7937 33.0929 29.2063 33.0929 29.0719 32.6777L27.6727 28.3564C27.6325 28.2321 27.5402 28.1315 27.4199 28.0806L23.48 26.4145C23.1137 26.2595 23.1137 25.7404 23.48 25.5855L27.4199 23.9194C27.5402 23.8685 27.6325 23.7678 27.6727 23.6435L29.0719 19.3222Z',
        fill: 'url(#paint1_linear_1972_66634)'
      }), jsx('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M27.6727 23.6435C27.6325 23.7678 27.5402 23.8685 27.4199 23.9194L23.48 25.5855C23.1137 25.7404 23.1137 26.2595 23.48 26.4145L27.4199 28.0806C27.5402 28.1315 27.6325 28.2321 27.6727 28.3564L29.0719 32.6777C29.2063 33.0929 29.7937 33.0929 29.9281 32.6777L31.3273 28.3564C31.3675 28.2321 31.4598 28.1315 31.5801 28.0806L35.5199 26.4145C35.8862 26.2595 35.8862 25.7404 35.5199 25.5855L31.5801 23.9194C31.4598 23.8685 31.3675 23.7678 31.3273 23.6435L29.9281 19.3222C29.7937 18.9071 29.2063 18.9071 29.0719 19.3222L27.6727 23.6435ZM33.8223 21.6104L32.7822 18.3981C31.7516 15.2151 27.2484 15.2151 26.2177 18.3981L25.1777 21.6104L22.3116 22.8224C19.5033 24.0101 19.5032 27.9899 22.3116 29.1775L25.1777 30.3896L26.2177 33.6018C27.2483 36.7849 31.7516 36.7849 32.7822 33.6018L33.8223 30.3896L36.6884 29.1775C39.4967 27.9899 39.4968 24.0101 36.6884 22.8225L33.8223 21.6104Z',
        fill: 'white'
      })]
    }), jsxs('defs', {
      children: [jsxs('filter', {
        id: 'filter0_d_1972_66634',
        x: '-1.5',
        y: '-1',
        width: '43',
        height: '43',
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
          dy: '0.5'
        }), jsx('feGaussianBlur', {
          stdDeviation: '0.75'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_1972_66634'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_1972_66634',
          result: 'shape'
        })]
      }), jsxs('linearGradient', {
        id: 'paint0_linear_1972_66634',
        x1: '23.2053',
        y1: '19.0109',
        x2: '35.3845',
        y2: '33.3378',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#F7C000'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#E8B604'
        })]
      }), jsxs('linearGradient', {
        id: 'paint1_linear_1972_66634',
        x1: '35.7947',
        y1: '32.9891',
        x2: '23.6155',
        y2: '18.6622',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: 'white',
          stopOpacity: '0'
        }), jsx('stop', {
          offset: '0.418743',
          stopColor: 'white',
          stopOpacity: '0.15'
        }), jsx('stop', {
          offset: '0.504534',
          stopColor: 'white',
          stopOpacity: '0.63'
        }), jsx('stop', {
          offset: '0.588015',
          stopColor: 'white',
          stopOpacity: '0.15'
        }), jsx('stop', {
          offset: '1',
          stopColor: 'white',
          stopOpacity: '0'
        })]
      })]
    })]
  });
}
function bk() {
  return jsxs('div', {
    'className': 'vote_graphic--stampContainer--Gg9nN',
    'aria-hidden': 'true',
    'children': [jsx('div', {
      className: 'vote_graphic--sticky--5vnwr',
      children: jsx(bL, {})
    }), jsx('div', {
      className: 'vote_graphic--plusOneStamp--lqNsf vote_graphic--stamp---bJ3m',
      children: jsx(bN, {})
    }), jsx('div', {
      className: 'vote_graphic--heartStamp--EhTYO vote_graphic--stamp---bJ3m',
      children: jsx(bA, {})
    }), jsx('div', {
      className: 'vote_graphic--thumbsUpStamp--d1jHf vote_graphic--stamp---bJ3m',
      children: jsx(bO, {})
    })]
  });
}
function bR({
  recordingKey: e
}) {
  let t = useDispatch<AppDispatch>();
  let i = Pd(useCallback(() => {
    t(setVotingSessionInfo({
      votingStage: SessionStatus.JOINED
    }));
  }, [t]));
  return jsxs('div', {
    className: cssBuilderInstance.flex.flexColumn.p16.$,
    children: [jsx('div', {
      className: cssBuilderInstance.flex.gap8.itemsCenter.mb8.$,
      children: jsx(bk, {})
    }), jsx('div', {
      className: cssBuilderInstance.flex.justifyCenter.$,
      children: jsx(jm, {
        onClick: i,
        recordingKey: generateRecordingKey(e, 'joinVotingSession'),
        children: renderI18nText('meetings_panel.voting.join_vote')
      })
    })]
  });
}
let bP = 'create_new_vote_view--stepperButtonWrapper--MA6-g';
let bU = e => {
  let t = null;
  try {
    t = parseInt(e, 10);
  } catch (e) {}
  return t;
};
function bF() {
  let e = useDispatch<AppDispatch>();
  let t = useCurrentFileKey();
  let {
    title,
    userVoteLimit
  } = useSelector(e => e.voting.votingParams);
  let r = useSelector(e => !e.user);
  let a = useIsLoading(createStartVotingSessionKey(t || ''));
  let [s, c] = useState(userVoteLimit.toString());
  useEffect(() => {
    let t = bU(s);
    t && e(setVotesPerUserLimit(t));
  }, [s, e]);
  let u = r || a;
  return jsxs('div', {
    className: cssBuilderInstance.flex.flexColumn.p16.gap12.$,
    children: [jsx(bk, {}), jsx(bH, {
      userVoteLimitInput: s,
      setUserVoteLimitInput: c,
      title,
      isTitleDisabled: u,
      isLimitDisabled: u,
      userVoteLimit,
      setTitle: useCallback(t => e(setTitle(t)), [e])
    })]
  });
}
function bH(e) {
  let t = useRef(null);
  let i = useDispatch<AppDispatch>();
  let n = useCurrentFileKey();
  let r = useSelector(e => !e.user);
  let a = useIsLoading(createStartVotingSessionKey(n || ''));
  let s = useSelector(e => e.multiplayer.allUsers.length);
  let c = useDeepEqualSceneValue(e => e.getCurrentPage()?.guid);
  let u = NE()?.id;
  let p = r || a || !c;
  let {
    userVoteLimitInput,
    userVoteLimit,
    title,
    setTitle,
    isLimitDisabled,
    isTitleDisabled,
    setUserVoteLimitInput
  } = e;
  let b = useCallback(e => {
    let t = parseInt(userVoteLimitInput);
    (t += e) < 1 || t > 99 || setUserVoteLimitInput(t.toString());
  }, [setUserVoteLimitInput, userVoteLimitInput]);
  let y = useCallback(e => {
    e.key === 'ArrowUp' || e.key === 'ArrowDown' ? (b(e.key === 'ArrowUp' ? 1 : -1), e.preventDefault()) : (e.key === 'Enter' || e.key === 'Escape') && t.current?.blur();
  }, [b]);
  let v = useCallback(() => {
    t.current?.select();
  }, [t]);
  let C = useCallback(e => {
    if (!e.currentTarget.value.match(/^(\s*|\d+)$/)) {
      e.preventDefault();
      return;
    }
    setUserVoteLimitInput(e.currentTarget.value);
  }, [setUserVoteLimitInput]);
  let T = useCallback(e => {
    let i = t.current.value;
    let n = bU(userVoteLimitInput);
    (i === '' || !n || isNaN(n) || n < 1) && setUserVoteLimitInput('1');
  }, [userVoteLimitInput, setUserVoteLimitInput]);
  let E = getI18nString('voting.modal.voting_setup_responsive_placeholder_prompt', {
    numVotes: userVoteLimit
  });
  let S = Pd(useCallback(() => {
    if (!c) throw new Error('Cannot start a voting session since currentPageNodeId is null');
    i(startVotingSession({
      source: 'voting_modal',
      usedCustomTitle: title !== '',
      requestBody: {
        title,
        in_progress: !0,
        user_vote_limit: userVoteLimit,
        num_people_in_file: s,
        page_node_id: c,
        voting_session_id_to_end: u
      },
      uiSurface: 'MeetingsPanel'
    }));
  }, [i, title, userVoteLimit, s, c, u]));
  return jsxs('div', {
    className: 'create_new_vote_view--container--mzVZ7',
    children: [jsx(LazyInputForwardRef, {
      'aria-label': getI18nString('voting.modal.voting_setup_prompt_input_field_aria_label'),
      'autoComplete': 'off',
      'autoCorrect': 'off',
      'autoFocus': !0,
      'className': 'create_new_vote_view--promptInput--Fd2W3 text--fontPos11--2LvXf text--_fontBase--QdLsd',
      'disabled': isTitleDisabled,
      'onChange': e => setTitle(e.target.value),
      'placeholder': E,
      'spellCheck': !1,
      'value': title
    }), jsxs('div', {
      className: 'create_new_vote_view--voteLimitContainer--ga1AC',
      children: [jsxs('div', {
        className: 'create_new_vote_view--voteLimitControls--7D-Fi',
        children: [jsx('div', {
          className: bP,
          children: jsx(IconButton, {
            'onClick': () => {
              isLimitDisabled || b(-1);
            },
            'aria-label': getI18nString('voting.modal.reduce_limit_tooltip_aria_label'),
            'aria-disabled': isLimitDisabled,
            'children': jsx(_$$f8, {})
          })
        }), jsx('input', {
          'ref': t,
          'aria-label': getI18nString('voting.modal.voting_limit_input_field_aria_label'),
          'className': 'create_new_vote_view--limitInput--1dzSR create_new_vote_view--promptInput--Fd2W3 text--fontPos11--2LvXf text--_fontBase--QdLsd',
          'disabled': isLimitDisabled,
          'inputMode': 'numeric',
          'maxLength': 2,
          'onBlur': T,
          'onChange': C,
          'onFocus': v,
          'onKeyDown': y,
          'type': 'text',
          'value': userVoteLimitInput
        }), jsx('div', {
          className: bP,
          children: jsx(IconButton, {
            'onClick': () => {
              isLimitDisabled || b(1);
            },
            'aria-label': getI18nString('voting.modal.increase_limit_tooltip_aria_label'),
            'aria-disabled': isLimitDisabled,
            'children': jsx(_$$x5, {})
          })
        })]
      }), jsx(jm, {
        'flexGrow': !0,
        'onClick': S,
        'disabled': p,
        'data-tooltip-type': r ? KindEnum.TEXT : void 0,
        'data-tooltip': r ? getI18nString('voting.modal.start_disabled_logged_out_tooltip') : void 0,
        'recordingKey': 'votingModalStartVotingSession',
        'children': jsx('span', {
          children: renderI18nText('voting.modal.start_voting_session')
        })
      })]
    })]
  });
}
function bV(e) {
  let {
    setOnPastVotesClick,
    setOnNewSessionClick,
    recordingKey
  } = e;
  let r = useCurrentFileKey();
  let a = void 0 !== setOnPastVotesClick;
  return jsxs('div', {
    className: cssBuilderInstance.flex.flexColumn.p16.$,
    children: [jsx('div', {
      className: cssBuilderInstance.flex.gap8.itemsCenter.mb12.$,
      children: jsx(bk, {})
    }), jsxs('div', {
      className: cssBuilderInstance.flex.gap6.justifyCenter.$,
      children: [a && jsx(jh, {
        flexGrow: a,
        onClick: () => {
          trackEventAnalytics('view_past_voting_sessions', {
            source: 'meetings_panel',
            fileKey: r
          });
          setOnPastVotesClick();
        },
        recordingKey: generateRecordingKey(recordingKey, 'viewPastVotingSessions'),
        children: renderI18nText('meetings_panel.voting.view_past_results_prompt')
      }), !BrowserInfo.isMeetDevice && jsx(jm, {
        flexGrow: a,
        onClick: () => {
          trackEventAnalytics('creating_new_vote_start', {
            source: 'meetings_panel',
            fileKey: r
          });
          setOnNewSessionClick();
        },
        recordingKey: generateRecordingKey(recordingKey, 'newVote'),
        children: jsx('div', {
          className: cssBuilderInstance.px4.$,
          children: renderI18nText('meetings_panel.voting.new_vote')
        })
      })]
    })]
  });
}
function bG({
  recordingKey: e
}) {
  let [t, i] = useState(!1);
  let n = _$$Ld();
  let r = useSetAtom(Qs);
  let a = Pd(useCallback(() => {
    i(!0);
  }, []));
  let s = Pd(useCallback(() => {
    r({
      type: 'SET_VIEW',
      payload: _$$iN.PAST_VOTES
    });
  }, [r]));
  return t ? jsx(bF, {}) : jsx(bV, {
    setOnPastVotesClick: n ? s : void 0,
    setOnNewSessionClick: a,
    recordingKey: e
  });
}
function bK() {
  let e = useSelector(e => e.mirror.appModel.votingSessionInfo);
  let t = useSelector(e => e.mirror.appModel.votingSessionInfo);
  let i = 'meetingsPanel';
  switch (t.votingStage) {
    case SessionStatus.JOINED:
      return jsx(bI, {
        votingSessionInfo: e,
        recordingKey: i
      });
    case SessionStatus.NOT_JOINED:
      return jsx(bR, {
        recordingKey: i
      });
    case SessionStatus.NO_SESSION:
    case SessionStatus.ENDED:
      return jsx(bG, {
        recordingKey: i
      });
  }
}
let bZ = 'meetings_panel';
let b$ = registerModal(({
  votingSessionId: e
}) => {
  let t = useDispatch<AppDispatch>();
  let i = useCurrentFileKey();
  let n = () => {
    trackEventAnalytics('cancel_delete_voting_session', {
      source: bZ,
      votingSessionId: e,
      fileKey: i
    });
  };
  return jsx(ConfirmationModal2, {
    cancelText: getI18nString('voting.modal.delete_voting_session_modal_cancel_button'),
    confirmText: getI18nString('voting.modal.delete_voting_session_modal_confirm_button'),
    confirmationTitle: getI18nString('voting.modal.delete_voting_session_modal_header'),
    content: getI18nString('voting.modal.delete_voting_session_modal_description'),
    destructive: !0,
    disableClickOutsideToHide: !0,
    hideCancel: !1,
    hideOnConfirm: !0,
    onCancel: n,
    onCloseButtonClick: n,
    onConfirm: () => {
      t(deleteVotingSessionThunk({
        votingSessionId: e
      }));
      t(setVotingSessionInfo({
        votingStage: SessionStatus.NO_SESSION
      }));
      trackEventAnalytics('confirm_delete_voting_session', {
        source: bZ,
        votingSessionId: e,
        fileKey: i
      });
    },
    popStack: !0,
    recordingKey: 'deleteVotingSessionModal',
    size: 'small'
  });
}, 'DeleteVotingSessionModal', ModalSupportsBackground.YES);
function bX({
  recordingKey: e,
  onClick: t
}) {
  let i = _$$jz2();
  let [n, r] = useState(null);
  return jsx(Fragment, {
    children: i && i.length > 0 ? jsx(RecordingScrollContainer, {
      className: 'previous_votes_view--scrollContainer--Jb0sL',
      children: jsx('ol', {
        className: 'previous_votes_view--resultsList--IWpfo',
        children: i.map((i, a, s) => {
          let l = s[a + 1]?.id;
          let d = i.id !== n && (!l || l !== n) && !!l;
          return jsx(bq, {
            createdAt: i.createdAt,
            id: i.id,
            onClick: t,
            recordingKey: e,
            setAsHovered: () => r(i.id),
            setAsNotHovered: () => r(e => e === i.id ? null : e),
            shouldShowSeparator: d,
            title: _$$DG(i),
            userId: i.userId
          }, i.id);
        })
      })
    }) : jsxs('div', {
      className: 'previous_votes_view--nullResultsList--xAcum',
      children: [jsx('p', {
        className: 'previous_votes_view--nullResultsListTextHeader--vWsPe previous_votes_view--nullResultsListText--qaiMF text--fontPos11--2LvXf text--_fontBase--QdLsd',
        children: renderI18nText('voting.modal.previous_votes_null_text_title')
      }), jsx('p', {
        className: 'previous_votes_view--nullResultsListTextDescription--CNedi previous_votes_view--nullResultsListText--qaiMF text--fontPos11--2LvXf text--_fontBase--QdLsd',
        children: renderI18nText('voting.modal.after_you_vote_results_will_show_up_right_here')
      })]
    })
  });
}
function bq({
  title: e,
  id: t,
  userId: i,
  createdAt: n,
  shouldShowSeparator: r,
  setAsHovered: a,
  setAsNotHovered: s,
  recordingKey: l,
  onClick: u
}) {
  let p = useDispatch<AppDispatch>();
  let h = useCurrentFileKey();
  return jsx('li', {
    children: jsxs(ButtonPrimitive, {
      'recordingKey': generateRecordingKey(l, 'viewPastVotingSession'),
      'className': ex()('previous_votes_view--previousVotesListItem--77yUn', r && 'previous_votes_view--showSeparator--nHjDd'),
      'onClick': () => {
        trackEventAnalytics('view_past_voting_session', {
          votingSessionId: t,
          source: 'meetings_panel',
          fileKey: h
        });
        p(setVotingSessionInfo({
          sessionId: t,
          votingStage: SessionStatus.ENDED
        }));
        u();
      },
      'aria-label': e,
      'htmlAttributes': {
        onMouseEnter: () => a(),
        onMouseLeave: () => s()
      },
      'children': [jsx('div', {
        className: 'previous_votes_view--title--ndUJI text--fontPos13--xW8hS text--_fontBase--QdLsd ellipsis--ellipsisAfter2Lines--Qo-Xh ellipsis--_ellipsisAfterNLines--LzI7k',
        children: e
      }), jsxs('div', {
        className: 'previous_votes_view--previousVotesListItemMetadata--BDnIc',
        children: [jsx(bJ, {
          userId: i
        }), jsx('div', {
          className: 'previous_votes_view--timestamp--A1VKx',
          children: jsx(RelativeTimeDisplay, {
            date: n
          })
        })]
      })]
    })
  });
}
function bJ({
  userId: e
}) {
  let {
    user,
    loading
  } = wW(e);
  return jsxs(Fragment, {
    children: [jsx(_$$v3, {
      userId: e,
      user,
      loading,
      size: 24,
      loadingClassName: 'previous_votes_view--loadingAvatar--JzmIH',
      defaultClassName: 'previous_votes_view--userAvatarPadding---Zhpj'
    }), jsx(_$$m7, {
      userId: e,
      user,
      loading,
      defaultClassName: 'previous_votes_view--username--l6MHn text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa',
      loadingClassName: 'previous_votes_view--loadingUsername--VL2uA'
    })]
  });
}
function b5() {
  return jsx('div', {
    className: 'figjam_panel_separator--separator--D-ffn'
  });
}
let b4 = new Map([['STICKY', _$$BV], ['TEXT', N$], ['FRAME', _$$H7], ['SYMBOL', _$$yc2], ['ROUNDED_RECTANGLE', _$$xf2], ['CODE_BLOCK', I5]]);
let b9 = ['ROUNDED_RECTANGLE', 'SYMBOL', 'FRAME'];
let b8 = memo(({
  votingSessionInfo: e
}) => {
  let t = _$$jz2();
  let i = t?.find(t => t.id === e.sessionId);
  let n = useMemo(() => [...e.votedNodes].sort((e, t) => {
    let i = _$$oC(e);
    let n = _$$oC(t);
    return i !== n ? n - i : e.guid.localeCompare(t.guid);
  }), [e]);
  let r = useMemo(() => _$$yn(e.votedNodes), [e.votedNodes]);
  if (!i) return null;
  let a = !!n.length;
  return jsxs('div', {
    className: cssBuilderInstance.flex.flexColumn.minH0.flexGrow1.$,
    children: [jsx('div', {
      className: 'voting_results_detail_view--titleContainer--gt1pA',
      children: jsx(bS, {
        title: _$$DG(i)
      })
    }), jsxs('div', {
      className: 'voting_results_detail_view--byline--Fye6w',
      children: [jsx(bE, {
        votingSessionInfo: e
      }), jsx('p', {
        className: 'voting_results_detail_view--bylineTimestamp--3Ugv4 text--fontPos12--YsUAh text--_fontBase--QdLsd',
        children: jsx(RelativeTimeDisplay, {
          date: i.createdAt
        })
      })]
    }), a && jsx(b5, {}), a && jsx(RecordingScrollContainer, {
      children: jsx('ol', {
        className: 'voting_results_detail_view--resultsList---owZd',
        children: n.map((e, t) => {
          let i = r.size === 1 && r.has(e.guid);
          return jsx(b7, {
            isMostVoted: i,
            nodeVoteInfo: e,
            nextNodeId: n[t + 1]?.guid ?? null
          }, e.guid);
        })
      })
    })]
  });
});
function b7({
  nodeVoteInfo: e,
  nextNodeId: t,
  isMostVoted: i
}) {
  let n = e.guid;
  let r = useSingleSceneValue(n);
  let a = useNavigateToViewport('figjam_voting');
  let s = useDispatch<AppDispatch>();
  let c = useSelector(e => e.voting.selectedVotePinId === n);
  let u = useSelector(e => !!t && e.voting.selectedVotePinId === t);
  let p = useSelector(e => e.voting.hoveredInModalVotePinId === n);
  let m = useSelector(e => !!t && e.voting.hoveredInModalVotePinId === t);
  let f = useContext(kw);
  useEffect(() => {
    if (p) {
      return () => {
        s(unsetHoveredInModalVotePin({
          votePinId: n
        }));
      };
    }
  }, [p, s, n]);
  let _ = function (e) {
    if (!e) return uiGrayColor5;
    let t = e.whiteboardColor;
    let i = BV(t, e.type === 'STICKY' ? 'sticky' : 'base');
    return i ? colorCSSManipulatorInstance.format(i) : uiGrayColor5;
  }(r);
  let x = r ? r.type === 'SHAPE_WITH_TEXT' ? function (e) {
    switch (e) {
      case 'SQUARE':
        return _$$dH2;
      case 'ELLIPSE':
        return Yl;
      case 'ROUNDED_RECTANGLE':
        return EW;
      case 'TRIANGLE_UP':
        return D5;
      case 'TRIANGLE_DOWN':
        return kj;
      case 'PARALLELOGRAM_RIGHT':
        return _$$h1;
      case 'PARALLELOGRAM_LEFT':
        return _$$_K;
      case 'ENG_DATABASE':
        return _$$rQ;
      case 'ENG_QUEUE':
        return _$$pt;
      case 'ENG_FILE':
        return _$$ak;
      case 'ENG_FOLDER':
        return Mi;
      case 'TRAPEZOID':
        return _$$qn;
      case 'PREDEFINED_PROCESS':
        return _$$dA2;
      case 'SHIELD':
        return _$$lm2;
      case 'PENTAGON':
        return Un;
      case 'OCTAGON':
        return JK;
      case 'HEXAGON':
        return CB;
      case 'PLUS':
        return _$$c9;
      case 'STAR':
        return Gg;
      case 'MANUAL_INPUT':
        return _$$Cu;
      case 'DOCUMENT_SINGLE':
        return R8;
      case 'DOCUMENT_MULTIPLE':
        return H$;
      case 'CHEVRON':
        return zp;
      case 'ARROW_LEFT':
      case 'ARROW_RIGHT':
        return HK;
      case 'SUMMING_JUNCTION':
        return QZ;
      case 'OR':
        return _$$Vq3;
      case 'SPEECH_BUBBLE':
        return QD;
      case 'INTERNAL_STORAGE':
        return _$$sJ;
      default:
        logError('voting', 'error unhandled shape type for shapeTypeToSvg', {
          shapeType: e
        });
        return _$$_K;
    }
  }(r.shapeWithTextType) : b4.get(r.type) || _$$BV : _$$BV;
  let g = !!r && b9.includes(r.type);
  let j = (() => {
    if (!r) {
      return {
        width: 0,
        height: 0
      };
    }
    let e = r.absoluteBoundingBox;
    let t = e.w;
    let i = e.h;
    let n = Math.min(t / 72, i / 72);
    return {
      width: t / n,
      height: i / n
    };
  })();
  let b = _$$ai3({
    nodeId: n,
    width: j.width,
    height: j.height,
    shouldSkip: !g
  });
  let y = useMemo(() => {
    if (r) {
      if (r.textSublayer) return r.textSublayer.textContent;
      if (r.textContent) return r.textContent;
      if (r.name) return r.name;
    }
    return '';
  }, [r]);
  let v = _$$oC(e);
  function C() {
    isNotMobile() && s(setHoveredInModalVotePin({
      votePinId: n
    }));
  }
  function T() {
    isNotMobile() && s(unsetHoveredInModalVotePin({
      votePinId: n
    }));
  }
  return jsx('li', {
    children: jsxs(ButtonPrimitive, {
      'className': ex()('voting_results_detail_view--resultsListItemButton--4llQi', {
        'voting_results_detail_view--resultsListItemButtonWinner--6bIhk': i,
        'voting_results_detail_view--resultsListItemButtonSelected--Z3vdm': c,
        'voting_results_detail_view--showSeparator--6aQOA': !c && !u && !p && !m && !!t
      }),
      'onClick': function () {
        s(selectVotePin({
          votePinId: e.guid
        }));
        r && a(_$$e0(r, f, 'vote'));
      },
      'aria-describedby': n,
      'htmlAttributes': {
        onMouseEnter: C,
        onMouseLeave: T,
        onFocus: C,
        onBlur: T
      },
      'children': [jsx('div', {
        className: 'voting_results_detail_view--resultsListItemCountContainer--1fD-h',
        children: jsx('div', {
          className: 'voting_results_detail_view--resultsListItemCountText--m6rWN text--fontPos11--2LvXf text--_fontBase--QdLsd',
          children: renderI18nText('voting.modal.votes', {
            numVotes: v,
            numVotesElem: jsx('p', {
              className: 'voting_results_detail_view--resultsListItemCount--DLrXt text--fontPos13--xW8hS text--_fontBase--QdLsd',
              children: v
            })
          })
        })
      }), jsx('p', {
        className: 'voting_results_detail_view--resultsListItemDetails--hz7gX text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsisAfter3Lines--h405C ellipsis--_ellipsisAfterNLines--LzI7k',
        children: y
      }), jsxs('div', {
        className: 'voting_results_detail_view--resultsListItemThumbnail--Qjux6',
        children: [b && g ? jsx('img', {
          className: 'voting_results_detail_view--nodePreviewImage--fugfT',
          src: b.src,
          width: b.displaySize.x,
          height: b.displaySize.y,
          alt: getI18nString('voting.modal.voting_results_image_preview_alt')
        }) : jsx(x, {
          color: _
        }), i && jsx('img', {
          src: _$$G6,
          className: 'voting_results_detail_view--medal--JzOBO',
          alt: getI18nString('voting.modal.medal_img_alt')
        })]
      })]
    })
  });
}
function yn(e) {
  let {
    headerText,
    goBack,
    options,
    onMinimize,
    onOptionsMenuClick,
    recordingKey,
    backButtonRef
  } = e;
  return jsxs('div', {
    className: 'meetings_panel_header--meetingsPanelPageContainer--TK5qd',
    children: [jsx(yr, {
      headerText,
      goBack,
      options,
      onMinimize,
      onOptionsMenuClick,
      recordingKey,
      backButtonRef
    }), jsx(b5, {}), e.children]
  });
}
let yr = memo(e => {
  let {
    headerText,
    goBack,
    options,
    onMinimize,
    onOptionsMenuClick,
    recordingKey,
    backButtonRef
  } = e;
  let {
    Dropdown,
    toggleDropdown,
    dropdownTargetRef,
    isDropdownShown
  } = _$$B8('MEETINGS_PANEL_HEADER_OVERFLOW_MENU');
  let f = useCallback(e => {
    onOptionsMenuClick?.();
    toggleDropdown();
  }, [toggleDropdown, onOptionsMenuClick]);
  let _ = useMemo(() => options && options.length > 0 ? options.map(e => ({
    displayText: e.text,
    isChecked: !1,
    callback: e.callback,
    recordingKey: e.recordingKey
  })) : null, [options]);
  return jsx(Fragment, {
    children: jsxs('div', {
      className: 'meetings_panel_header--meetingsPanelHeader--6cBGV',
      children: [jsx(IconButton, {
        'aria-label': getI18nString('general.back'),
        'onClick': goBack,
        'actionOnPointerDown': BrowserInfo.isIpad,
        'recordingKey': generateRecordingKey(recordingKey, 'backButton'),
        'ref': backButtonRef,
        'children': jsx(_$$C, {})
      }), headerText && jsx('span', {
        className: 'meetings_panel_header--meetingsPanelHeaderText--KW2Jw text--fontPos11--2LvXf text--_fontBase--QdLsd',
        children: headerText
      }), jsx('div', {
        className: cssBuilderInstance.mlAuto.$,
        ref: dropdownTargetRef,
        children: _ && jsx(DialogTriggerButton, {
          'aria-label': getI18nString('meetings_panel.header.overflow_menu_aria_label'),
          'onClick': f,
          'htmlAttributes': {
            'data-tooltip-type': KindEnum.TEXT,
            'data-tooltip': getI18nString('meetings_panel.header.overflow_menu_aria_label')
          },
          'recordingKey': generateRecordingKey(recordingKey, 'expandMenuItems'),
          'aria-expanded': isDropdownShown,
          'children': jsx(_$$A78, {})
        })
      }), jsxs('div', {
        children: [_ && jsx(Dropdown, {
          items: _,
          showPoint: !0,
          minWidth: 135,
          recordingKey: generateRecordingKey(recordingKey, 'expandMenuItems')
        }), onMinimize && jsx(IconButton, {
          'onClick': onMinimize,
          'aria-label': getI18nString('common.close'),
          'children': jsx(_$$A2, {})
        })]
      })]
    })
  });
});
let ya = 'meetings_panel';
function ys() {
  let e = useSelector(e => e.mirror.appModel.votingSessionInfo);
  let t = useMemo(() => e && e.sessionId.length > 0, [e]);
  let i = useDispatch<AppDispatch>();
  let n = useSetAtom(Qs);
  let r = qU();
  let a = useStore();
  let s = trackFileEventWithUser();
  let u = 'pastVotingSessions';
  let m = useRef(null);
  let f = useCallback(() => {
    m.current?.focus();
  }, []);
  useLayoutEffect(() => {
    f();
  }, [f]);
  let _ = useCallback(() => {
    t ? i(setVotingSessionInfo({
      votingStage: SessionStatus.NO_SESSION
    })) : n({
      type: 'SET_VIEW',
      payload: _$$iN.DEFAULT
    });
  }, [t, i, n]);
  let x = useCallback(() => {
    r({
      source: OO.MEETINGS_PANEL
    });
  }, [r]);
  let g = useCallback(() => {
    s('click_voting_results_more_options', {
      votingSessionId: e.sessionId,
      source: ya
    });
  }, [s, e]);
  let j = useCallback(() => {
    i(showModal({
      type: b$.type,
      showModalsBeneath: !0,
      data: {
        votingSessionId: e.sessionId
      }
    }));
    s('click_delete_voting_session', {
      votingSessionId: e.sessionId,
      source: ya
    });
  }, [i, e, s]);
  let b = useCallback(() => {
    s('click_export_voting_session_as_csv', {
      votingSessionId: e.sessionId,
      source: ya
    });
    exportVotingSessionAsCsv(a.getState(), e.sessionId);
  }, [a, e, s]);
  let y = useMemo(() => {
    if (t) {
      let e = [{
        text: getI18nString('voting.modal.actions.delete_voting_session'),
        callback: j,
        recordingKey: 'votingModalDeleteVotingSession'
      }];
      BrowserInfo.isIpadNative || e.unshift({
        text: getI18nString('voting.modal.actions.export_as_csv'),
        callback: b,
        recordingKey: 'votingModalExportAsCsv'
      });
      return e;
    }
  }, [t, b, j]);
  return jsx(yn, {
    headerText: getI18nString('meetings_panel.voting.results'),
    goBack: _,
    onMinimize: x,
    onOptionsMenuClick: g,
    options: y,
    recordingKey: u,
    backButtonRef: m,
    children: t ? jsx(b8, {
      votingSessionInfo: e
    }) : jsx(bX, {
      recordingKey: u,
      onClick: f
    })
  });
}
let yd = 'volume_slider--thick--OwB1Y';
var yc = (e => (e.LEFT = 'LEFT', e.RIGHT = 'RIGHT', e.CENTER = 'CENTER', e.INLINE = 'INLINE', e))(yc || {});
function yu({
  muteButtonRef: e,
  volumeJustification: t,
  fullWidth: i,
  isMinimized: n
}) {
  let r = useSelector(e => e.music.isMuted);
  let a = useSelector(e => r ? 0 : e.music.volume);
  let s = useDispatch<AppDispatch>();
  let l = e => {
    e.preventDefault();
    e.stopPropagation();
    let t = Number(e.target.value);
    s(setMusicStandaloneVolumeThunk(t));
  };
  let c = 0;
  let u = 0;
  if (t !== 'INLINE') {
    let i = e.current?.getClientRects()[0];
    if (!i) {
      return jsx(Fragment, {
        children: ' '
      });
    }
    c = i.x;
    t === 'CENTER' ? c += (i.width - 144) / 2 : t === 'RIGHT' && (c = c + i.width - 144);
    u = (i.y || 0) + 32 + 5;
  }
  let p = a - (a - 50) / 50 * 3.8;
  return jsxs('div', {
    className: ex()('volume_slider--volumeContainer--jqCRj', {
      'volume_slider--volumeContainerRelative--2bSYx': t === 'INLINE',
      [yd]: !n,
      'volume_slider--fullWidth--jnzDi': i
    }),
    style: {
      left: `${c || 0}px`,
      top: `${u}px`
    },
    children: [jsx('input', {
      className: ex()('volume_slider--volumeSliderInput--RHbwq', {
        'volume_slider--isMuted--cDjt7': r,
        [yd]: !n
      }),
      max: 100,
      min: 0,
      onChange: l,
      onInput: l,
      onMouseUp: e => {
        let t = Number(e.target.value);
        s(setMusicIsMutedThunk({
          isMuted: t === 0,
          userInitiated: !0
        }));
      },
      onTouchEnd: e => {
        e.preventDefault();
        e.stopPropagation();
      },
      step: 1,
      style: {
        background: `linear-gradient(to right,
            var(--active-slider-color) 0%,
            var(--active-slider-color) ${p}%,
            var(--inactive-slider-color) ${p}%,
            var(--inactive-slider-color) 100%
          )`
      },
      type: 'range',
      value: a
    }), t !== 'INLINE' && jsx('div', {
      className: ex()({
        'volume_slider--additionalHoverDetection--IDArn': !n,
        'volume_slider--shallowAdditionalHoverDetection---8pNd': n
      })
    })]
  });
}
var y_ = (e => (e.DEFAULT = 'default', e.ON_FIGJAM = 'onFigjam', e.FIGJAM = 'figjam', e))(y_ || {});
let yx = (e, t) => t || e === 0 ? _$$A82 : e < 40 ? _$$A80 : e < 80 ? _$$A81 : _$$A79;
var yg = (e => (e.DEFAULT = 'default', e.LARGE = 'large', e))(yg || {});
function yj(e) {
  let {
    isMinimized,
    withDarkHoverBg,
    muteButtonRef,
    muteOnTouch,
    iconColor,
    blockTooltip,
    size
  } = e;
  let u = useSelector(e => e.music.volume);
  let p = useSelector(e => e.music.isMuted);
  let h = useDispatch<AppDispatch>();
  let m = useCallback(() => {
    h(setMusicIsMutedThunk({
      isMuted: !p,
      userInitiated: !0
    }));
  }, [h, p]);
  let f = useCallback(e => {
    e.preventDefault();
    e.stopPropagation();
    m();
  }, [m]);
  return jsx('div', {
    onTouchEnd: muteOnTouch ? f : noop,
    children: jsx(_$$K7, {
      'onClick': m,
      'className': ex()('volume_control_button--button--6JyR-', {
        'volume_control_button--minimized--esj8w': isMinimized,
        'volume_control_button--withDarkHoverBg--p-OS1': withDarkHoverBg,
        'volume_control_button--defaultSpeakerColor--ZF9o2': iconColor === 'default',
        'volume_control_button--figjamSpeakerColor--0W5TO': iconColor === 'figjam',
        'volume_control_button--onFigjamSpeakerColor--KEcX8': iconColor === 'onFigjam',
        'volume_control_button--large--BF5Mq': size === 'large'
      }),
      'svg': yx(u, p),
      'data-tooltip-type': KindEnum.TEXT,
      'tooltipForScreenReadersOnly': blockTooltip,
      'data-tooltip': p ? getI18nString('whiteboard.timer.timer_unmute_tooltip') : getI18nString('whiteboard.timer.timer_mute_tooltip'),
      'data-tooltip-show-above': !0,
      'ref': muteButtonRef
    })
  });
}
var yb = (e => (e[e.DEFAULT = 0] = 'DEFAULT', e[e.ALWAYS = 1] = 'ALWAYS', e[e.NEVER = 2] = 'NEVER', e))(yb || {});
function yy({
  volumeJustification: e,
  sliderVisibilitySetting: t,
  sliderFullWidth: i,
  buttonGap: n,
  isMinimized: r,
  withDarkHoverBg: a,
  iconColor: s,
  blockButtonTooltip: c,
  muteOnTouch: u,
  size: p
}) {
  let h = useRef(-1);
  let [m, f] = useState(!1);
  let _ = useCallback(() => {
    h.current && clearTimeout(h.current);
    h.current = window.setTimeout(() => {
      f(!0);
    }, 100);
  }, [f]);
  let x = useCallback(() => {
    h.current && clearTimeout(h.current);
    f(!1);
  }, [f]);
  let g = useRef(null);
  let j = useCallback(() => {
    x();
  }, [x]);
  Xq(g, 'touchend', j);
  let b = useRef(null);
  let y = useSelector(e => e.timer);
  let v = isTimerFinished(y.time);
  useEffect(() => {
    v && f(!1);
  }, [v]);
  useEffect(() => {
    f(!1);
  }, [t]);
  let C = m;
  switch (t) {
    case 1:
      C = !0;
      break;
    case 2:
      C = !1;
  }
  return jsxs('div', {
    ref: g,
    onTouchEnd: e => {
      e.preventDefault();
      e.stopPropagation();
      m ? x() : _();
    },
    onMouseEnter: _,
    onMouseLeave: x,
    className: 'volume_control_button--volumeButtonAndSliderContainer--HyG-F',
    style: {
      gap: n
    },
    children: [jsx(yj, {
      muteButtonRef: b,
      isMinimized: r,
      withDarkHoverBg: a,
      iconColor: s,
      blockTooltip: c,
      muteOnTouch: u,
      size: p
    }), C && jsx(yu, {
      muteButtonRef: b,
      volumeJustification: e,
      fullWidth: i,
      isMinimized: r
    })]
  });
}
function yv() {
  let e = shouldOptimizeForIpad();
  return jsx('div', {
    className: 'volume_view--volumeView--XbP1r',
    children: jsx(yy, {
      volumeJustification: yc.INLINE,
      sliderVisibilitySetting: e ? yb.NEVER : yb.ALWAYS,
      sliderFullWidth: !0,
      buttonGap: 5,
      iconColor: y_.DEFAULT,
      withDarkHoverBg: !0,
      muteOnTouch: e
    })
  });
}
function yT() {
  let [e, t] = jq();
  let i = useSelector(e => e.mirror.appModel.showUi);
  return (!function (e) {
    let t = useDispatch<AppDispatch>();
    let i = useSelector(e => e.timer);
    useEffect(() => {
      !1 !== i.startChimePlayed || isTimerFinished(i.time) || isTimerPausedAndStarted(i.time) || isTimerDone(i.time) || (e(), t(setStartChimePlayed(!0)));
    }, [t, e, i.startChimePlayed, i.time]);
  }(t.playStartChime), !function () {
    jW();
    let [e, t] = useAtomValueAndSetter(_$$$5);
    let i = useSelector(e => e.timer.volume);
    j$(t);
    jz(e);
    jY([jk, jM, jR], i);
  }(), !function () {
    g0();
    let e = function (e) {
      let [t] = useState(() => e?.previousPlayerInstance || new gY(e));
      let i = useSelector(t => e.musicSource === 'StandaloneMusic' ? t.music.volume : t.timer.volume);
      let n = useSelector(t => e.musicSource === 'StandaloneMusic' ? t.music.isMuted : t.timer.isMuted);
      useEffect(() => {
        t.setVolume(i / 100);
      }, [i, t]);
      useEffect(() => {
        t.setIsMuted(n);
      }, [n, t]);
      return t;
    }({
      musicSource: 'StandaloneMusic',
      loadingPlaybackUrl: gQ,
      previousPlayerInstance: useSelector(e => e.music.playerInstance) || void 0
    });
    let t = useSelector(e => e.music.music);
    let i = t?.selectedSongID;
    let n = gq(i || '')?.playback_url;
    let r = useSelector(e => e.music.volume);
    let a = useSelector(e => e.music.isMuted);
    let s = useDispatch<AppDispatch>();
    useEffect(() => {
      s(fetchActiveSongsThunk());
    }, [s]);
    useEffect(() => {
      s(setStandaloneMusicPlayer(e));
    }, [s, e]);
    useEffect(() => () => {
      e.stop();
    }, [e]);
    useEffect(() => {
      s(setMusicIsMutedThunk({
        isMuted: r === 0,
        userInitiated: !1
      }));
    }, [s, r]);
    let o = useCallback(() => {
      s(setMusicIsMutedThunk({
        isMuted: !0,
        userInitiated: !1
      }));
      s(VisualBellActions.enqueue({
        message: getI18nString('whiteboard.timer.unmute_music_message'),
        button: {
          text: getI18nString('whiteboard.timer.unmute_music_button'),
          action: () => {
            s(setMusicIsMutedThunk({
              isMuted: !1,
              userInitiated: !0
            }));
          }
        },
        type: 'unmute-timer-music',
        onDismiss: () => {}
      }));
    }, [s]);
    useEffect(() => {
      if (n !== e.audio.currentSrc && e.setSource(n || ''), !n) {
        e.stop();
        return;
      }
      if (t?.isPaused) {
        e.pause();
        return;
      }
      if (!t?.isPaused) {
        if (!e.isPaused() || !n) return;
        e.playAtTimestamp({
          src: n,
          timestamp: getLastReceivedSongTimestamp(t),
          onFailure: o
        });
      }
    }, [n, t, e, o, a]);
  }(), _$$YR(), FJ(), jF(), jU(), useAtomWithSubscription(Qs).isOpen && i) ? jsx(yE, {}) : null;
}
function yE() {
  let e = useAtomWithSubscription(Qs);
  let t = shouldOptimizeForIpad();
  let i = qU();
  let n = Av();
  let r = U1();
  return jsx('div', {
    className: SO,
    ref: r,
    children: e.view !== _$$iN.PAST_VOTES || t ? jsxs('div', {
      className: DZ,
      children: [jsx(de, {
        title: n ? getI18nString('meetings_panel.toolbar_tooltip') : getI18nString('meetings_panel.toolbar_tooltip.no_voting'),
        onClose: () => i({
          source: OO.MEETINGS_PANEL
        })
      }), jsx(RecordingScrollContainer, {
        className: Ff,
        children: jsx(yS, {})
      })]
    }) : jsx(ys, {})
  });
}
function yS() {
  let e = Av();
  let t = _$$Ld();
  let i = e && BrowserInfo.isMeetDevice && t;
  let n = BrowserInfo.isMeetDevice ? i : e;
  return jsxs('div', {
    className: cssBuilderInstance.colorBg.$,
    children: [jsx(yv, {}), jsx(b5, {}), jsx(bn, {}), jsx(b5, {}), jsx(jC, {}), n && jsxs(Fragment, {
      children: [jsx(b5, {}), jsx(bK, {})]
    })]
  });
}
function yI({
  children: e,
  hasHoverableBackground: t,
  onboardingKey: i
}) {
  return jsx('div', {
    'className': ex()('floating_panel--container--3qp3k', {
      'floating_panel--hoverableBackground--h8B5i': t
    }),
    'data-onboarding-key': i,
    'children': e
  });
}
function yF() {
  let e = generateRecordingKey('toolbarView', _$$ec2.recordingKey);
  let t = useRef(null);
  let i = selectCurrentFile();
  let n = useSelector(e => isActionEnabled(e.mirror.appModel, _$$ec2.action) && i);
  let r = useSelector(e => e.mirror.appModel.currentTool === _$$ec2.tool);
  let a = _$$n0();
  let s = fullscreenAlias.getIsExtension();
  useEffect(() => {
    !r && t.current && t.current === document.activeElement && KeyboardFocusManager.focusCustomCanvasFocusElement();
  }, [r, t]);
  useEffect(() => {
    if (n && r) {
      let e = !0;
      setSideHandler('right', () => {
        e && fullscreenValue.triggerAction('set-tool-default');
      });
      return () => {
        e = !1;
      };
    }
  }, [n, r]);
  let c = useCallback(e => {
    if (!n) return;
    let i = e.nativeEvent instanceof KeyboardEvent;
    r ? (fullscreenValue.triggerAction('set-tool-default'), i && t.current?.focus()) : VU.get(_$$ec2.action, 'toolbar')(e);
  }, [n, r]);
  let u = !s && a > 0;
  return jsx(_$$Z6, {
    tooltip: {
      type: KindEnum.LOOKUP,
      key: _$$ec2.action,
      ariaLabel: getI18nString(u ? 'fullscreen.accessibility.view_comments_with_unreads' : 'fullscreen.accessibility.view_comments')
    },
    isActive: r,
    onClick: c,
    recordingKey: e,
    onboardingKey: _$$ec2.onboardingKey,
    disabled: !n,
    dataTestId: _$$ec2.action,
    ref: t,
    children: jsx('div', {
      className: ex()('figjam_comments_toolbar_item--iconContainer--4S5T1', {
        'figjam_comments_toolbar_item--withUnreadIndicator--JLSN4': u
      }),
      children: jsx('div', {
        className: 'figjam_comments_toolbar_item--iconMask--a0fae',
        children: jsx(_$$f9, {})
      })
    })
  });
}
function yW() {
  let e = useAtomWithSubscription(_$$zS);
  let t = useSetAtom(_$$bJ);
  let i = useSetAtom(_$$tz);
  let n = useCallback(n => {
    n.preventDefault();
    e === Wl.TOP_BAR ? i() : (setSideHandler('right', i), t());
  }, [e, i, t]);
  let r = getFeatureFlags().figjam_generate_handbrake;
  let a = r ? getI18nString('whiteboard.ai_modal.generate_handbrake') : getI18nString('whiteboard.ai_modal.make');
  let s = useSelector(e => e.mirror.appModel.topLevelMode === ViewType.LAYOUT);
  useEffect(() => {
    s || i();
  }, [s, i]);
  return jsx(_$$Z6, {
    tooltip: {
      type: KindEnum.TEXT,
      text: a
    },
    isActive: e === Wl.TOP_BAR,
    onClick: n,
    trackingProperties: {
      trackingDescriptor: UpgradeAction.FIGJAM_AI_TOOLBAR_ITEM
    },
    onboardingKey: _$$bX,
    innerText: 'AI Toolbar Entrypoint',
    disabled: r,
    dataTestId: 'figjam-ai-toolbar-item',
    recordingKey: 'figjam-ai-toolbar-item',
    children: jsx(_$$C6, {})
  });
}
let yZ = e => e.multiplayer.allUsers.filter((e, t, i) => t === i.findIndex(t => t.userID === e.userID)).length;
let y$ = 'seen_figjam_meetings_panel_gleam';
let yY = {
  duration: 1500,
  fill: 'none'
};
function yX() {
  return jsxs('svg', {
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    style: {
      width: '100%',
      height: '100%'
    },
    children: [jsxs('g', {
      filter: 'url(#filter0_d_3305_12330)',
      children: [jsx('path', {
        d: 'M20.2469 10.6915L20.2471 10.6913C21.1037 9.81654 20.693 8.21534 19.3809 8.01578C19.3809 8.01577 19.3808 8.01576 19.3807 8.01575L14.8346 7.32381L12.7941 2.99403C12.2333 1.80375 10.5666 1.79999 10.0055 2.99476C10.0054 2.99498 10.0053 2.99521 10.0052 2.99543L7.96535 7.32381L3.41928 8.01575C3.41921 8.01576 3.41914 8.01577 3.41908 8.01578C2.107 8.21534 1.69633 9.81654 2.55291 10.6913L2.55308 10.6915L5.86693 14.0741L5.08327 18.8605C5.08326 18.8606 5.08325 18.8606 5.08324 18.8607C4.88746 20.0559 6.12574 21.1809 7.34457 20.5087L11.4 18.2756L15.4554 20.5087C15.4556 20.5088 15.4558 20.5088 15.456 20.5089C16.6746 21.1805 17.9125 20.0557 17.7168 18.8607C17.7167 18.8606 17.7167 18.8606 17.7167 18.8605L16.9331 14.0741L20.2469 10.6915Z',
        fill: '#FFC700',
        stroke: 'white',
        strokeWidth: '1.8'
      }), jsx('path', {
        d: 'M18.8131 12.5161C18.4636 11.4367 16.9364 11.4367 16.5869 12.5161L15.8361 14.8349L13.7375 15.7224C12.7851 16.1252 12.7851 17.4748 13.7375 17.8776L15.8361 18.7651L16.5869 21.0839C16.9364 22.1634 18.4636 22.1633 18.8131 21.0839L19.5639 18.7651L21.6625 17.8776C22.6149 17.4748 22.6149 16.1252 21.6625 15.7224L19.5639 14.8349L18.8131 12.5161Z',
        fill: 'url(#paint0_linear_3305_12330)'
      }), jsx('path', {
        d: 'M18.8131 12.5161C18.4636 11.4367 16.9364 11.4367 16.5869 12.5161L15.8361 14.8349L13.7375 15.7224C12.7851 16.1252 12.7851 17.4748 13.7375 17.8776L15.8361 18.7651L16.5869 21.0839C16.9364 22.1634 18.4636 22.1633 18.8131 21.0839L19.5639 18.7651L21.6625 17.8776C22.6149 17.4748 22.6149 16.1252 21.6625 15.7224L19.5639 14.8349L18.8131 12.5161Z',
        fill: 'url(#paint1_linear_3305_12330)'
      }), jsx('path', {
        d: 'M18.8131 12.5161C18.4636 11.4367 16.9364 11.4367 16.5869 12.5161L15.8361 14.8349L13.7375 15.7224C12.7851 16.1252 12.7851 17.4748 13.7375 17.8776L15.8361 18.7651L16.5869 21.0839C16.9364 22.1634 18.4636 22.1633 18.8131 21.0839L19.5639 18.7651L21.6625 17.8776C22.6149 17.4748 22.6149 16.1252 21.6625 15.7224L19.5639 14.8349L18.8131 12.5161Z',
        stroke: 'white',
        strokeWidth: '1.8'
      })]
    }), jsxs('defs', {
      children: [jsxs('filter', {
        id: 'filter0_d_3305_12330',
        x: '-1.5',
        y: '-1',
        width: '27',
        height: '27',
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
          dy: '0.5'
        }), jsx('feGaussianBlur', {
          stdDeviation: '0.75'
        }), jsx('feColorMatrix', {
          type: 'matrix',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'
        }), jsx('feBlend', {
          mode: 'normal',
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_3305_12330'
        }), jsx('feBlend', {
          mode: 'normal',
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_3305_12330',
          result: 'shape'
        })]
      }), jsxs('linearGradient', {
        id: 'paint0_linear_3305_12330',
        x1: '13.5',
        y1: '12',
        x2: '21.9',
        y2: '21.6',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: '#F7C000'
        }), jsx('stop', {
          offset: '1',
          stopColor: '#E8B604'
        })]
      }), jsxs('linearGradient', {
        id: 'paint1_linear_3305_12330',
        x1: '21.9',
        y1: '21.6',
        x2: '13.5',
        y2: '12',
        gradientUnits: 'userSpaceOnUse',
        children: [jsx('stop', {
          stopColor: 'white',
          stopOpacity: '0'
        }), jsx('stop', {
          offset: '0.418743',
          stopColor: 'white',
          stopOpacity: '0.15'
        }), jsx('stop', {
          offset: '0.504534',
          stopColor: 'white',
          stopOpacity: '0.63'
        }), jsx('stop', {
          offset: '0.588015',
          stopColor: 'white',
          stopOpacity: '0.15'
        }), jsx('stop', {
          offset: '1',
          stopColor: 'white',
          stopOpacity: '0'
        })]
      })]
    })]
  });
}
let yq = 'meeting_tools_toolbar--withHover--r7Sks';
let yJ = 'meeting_tools_toolbar--selected--Lt0iR';
let yQ = 'meeting_tools_toolbar--hide--t1ZI-';
function y0() {
  let e = useAtomWithSubscription(Qs);
  let t = qU();
  let i = MR();
  let n = II();
  let [r] = jq();
  let {
    renderGleam
  } = function (e) {
    let [t, i] = useState(!1);
    let n = useSelector(yZ);
    let r = selectUserFlag(y$);
    let a = useDispatch<AppDispatch>();
    let s = n > 1 && !r;
    useEffect(() => {
      if (!s) return;
      let t = window.setTimeout(() => {
        i(!0);
        a(postUserFlag({
          [y$]: !0
        }));
      }, e?.delay_ms || 1e4);
      return () => clearTimeout(t);
    }, [s, e?.delay_ms, a]);
    return {
      renderGleam: t
    };
  }({
    delay_ms: 2e3
  });
  let s = useCallback(() => {
    e.isOpen ? t({
      source: OO.MEETINGS_TOOLBAR
    }) : i({
      source: OO.MEETINGS_TOOLBAR
    });
  }, [e, t, i]);
  let c = function () {
    let e = II();
    if (e.length === 0) return 'ALL';
    let t = e.length === 1 && e.includes(_$$sx3.TIMER);
    return e.length === 1 && e.includes(_$$sx3.VOTING) || e.length === 2 && e.includes(_$$sx3.VOTING) && e.includes(_$$sx3.TIMER) ? 'VOTE' : t ? 'NONE' : 'MUSIC';
  }();
  let u = function () {
    let e = II();
    return e.length === 0 ? j6.SECONDARY : e.includes(_$$sx3.TIMER) && e.includes(_$$sx3.VOTING) ? j6.SECONDARY : j6.DEFAULT;
  }();
  let m = n.includes(_$$sx3.TIMER) || n.length === 0;
  let f = n.includes(_$$sx3.MUSIC);
  let _ = function () {
    let e = II();
    let t = C3();
    let i = useSelector(e => e.music.music);
    let n = gq(i?.selectedSongID || '');
    return e.includes(_$$sx3.VOTING) && t ? _$$DG(t) : e.includes(_$$sx3.MUSIC) && e.length === 1 ? n ? g8.format(n) : '' : void 0;
  }();
  let x = useRef(null);
  let g = useRef(null);
  let j = useRef(null);
  let b = useRef(null);
  let y = useRef(null);
  !function (e, t, i, n, r, a) {
    let [s, o] = useState([]);
    useLayoutEffect(() => {
      let e = {
        backgroundColor: 'var(--color-bg-figjam)',
        borderColor: 'var(--color-bg-figjam)'
      };
      let a = new KeyframeEffect(r.current, [{
        offset: 0.4,
        ...e
      }, {
        offset: 0.62,
        ...e
      }, {
        offset: 0.77,
        backgroundColor: 'var(--color-bg-secondary)'
      }], yY);
      let s = new KeyframeEffect(t.current, [{
        offset: 0,
        backgroundColor: '#959595'
      }, {
        offset: 0.5,
        backgroundColor: '#959595'
      }, {
        offset: 1,
        backgroundColor: 'var(--color-bg-figjam)'
      }], yY);
      let l = new KeyframeEffect(n.current, [{
        offset: 0,
        filter: 'grayscale(80%)'
      }, {
        offset: 0.5,
        filter: 'grayscale(80%)'
      }, {
        offset: 1,
        filter: 'grayscale(0%)'
      }], yY);
      o([s, new KeyframeEffect(i.current, [{
        offset: 0.4,
        color: 'var(--color-text-onfigjam)'
      }, {
        offset: 0.62,
        color: 'var(--color-text-onfigjam)'
      }], yY), l, a].map(e => new Animation(e, document.timeline)));
    }, [e, t, i, n, r]);
    (function (e, t, i) {
      let n = useLatestRef(e);
      let r = useAtomWithSubscription(Qs);
      let a = II();
      let s = r.isOpen || a.length > 0;
      useEffect(() => {
        s || (e && !n && t(), !e && n && i());
      }, [e, t, i, n, a, s]);
    })(a, useCallback(() => {
      s.forEach(e => {
        e.playbackRate = 1;
        e.play();
      });
    }, [s]), useCallback(() => {
      s.forEach(e => {
        e.playbackRate = -1;
        e.play();
      });
    }, [s]));
  }(x, j, b, y, g, renderGleam);
  let v = function (e) {
    let t = useAtomWithSubscription(Qs);
    let i = II();
    return !e && !t.isOpen && i.length === 0;
  }(renderGleam);
  let C = shouldOptimizeForIpad();
  let T = Av();
  let E = e.isOpen || n.length > 0;
  return jsxs('div', {
    ref: x,
    className: ex()('meeting_tools_toolbar--toolbarItemContainer--3HgdD', {
      'meeting_tools_toolbar--meetDeviceToolbarItemContainer--8R79s': isGoogleMeetIntegration(),
      'meeting_tools_toolbar--hasVolumeControl--jaTZr': f
    }),
    children: [jsxs('button', {
      'ref': g,
      'className': ex()('meeting_tools_toolbar--toolbarItemButton--VBNmh', {
        [yJ]: E,
        [yq]: !C
      }),
      'onClick': useHandleMouseEvent('meetingsPanelToolbar', 'click', s),
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': T ? getI18nString('meetings_panel.toolbar_tooltip') : getI18nString('meetings_panel.toolbar_tooltip.no_voting'),
      'aria-label': T ? getI18nString('meetings_panel.toolbar.aria_label') : getI18nString('meetings_panel.toolbar.aria_label.no_voting'),
      'aria-pressed': E,
      'data-onboarding-key': 'meeting-panel-button',
      'children': [jsx(y1, {
        icon: c,
        maskRef: j,
        starContainerRef: y,
        renderAsPreGleam: v
      }), jsx('div', {
        className: ex()('meeting_tools_toolbar--textWrapper--eikYA text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa', {
          [yJ]: E
        }),
        style: {
          maxWidth: isMobileNotFigmaMobile() ? 44 : 122
        },
        children: _
      }), jsx(y2, {
        width: _ && m ? 8 : 0
      }), jsx('div', {
        className: ex()('meeting_tools_toolbar--minimizedTimerWrapper--adc47', {
          [yQ]: !m
        }),
        children: n.includes(_$$sx3.TIMER) ? jsx(Fragment, {
          children: jsx(j8, {
            isSelected: E,
            prominence: u,
            size: j5.XSMALL,
            withoutTimeShadow: !0,
            withoutFlashOnPause: !0,
            withoutUnderline: !0,
            timeDivRef: b,
            isInUI3Toolbar: !0
          })
        }) : jsx(Fragment, {
          children: jsx(j7, {
            isSelected: E,
            prominence: u,
            size: j5.XSMALL,
            withoutTimeShadow: !0,
            withoutUnderline: !0,
            timeDivRef: b,
            timeInSeconds: getTotalSeconds(r),
            isInUI3Toolbar: !0
          })
        })
      })]
    }), n.includes(_$$sx3.MUSIC) && jsx('div', {
      className: ex()('meeting_tools_toolbar--volumeControlContainer--gXf-m', {
        [yJ]: E,
        [yQ]: !n.includes(_$$sx3.MUSIC),
        [yq]: !C
      }),
      children: jsx(yy, {
        volumeJustification: yc.CENTER,
        isMinimized: !0,
        iconColor: E ? y_.FIGJAM : y_.DEFAULT,
        blockButtonTooltip: !0,
        sliderVisibilitySetting: e.isOpen || C ? yb.NEVER : yb.DEFAULT,
        muteOnTouch: C,
        size: yg.LARGE
      })
    })]
  });
}
function y1({
  icon: e,
  maskRef: t,
  starContainerRef: i,
  renderAsPreGleam: n
}) {
  return e === 'NONE' ? null : jsxs('div', {
    className: ex()('meeting_tools_toolbar--iconContainer--n2hs5', {
      'meeting_tools_toolbar--single--h9cHX': e !== 'ALL'
    }),
    children: [jsx('div', {
      className: ex()('meeting_tools_toolbar--recordIcon--D6vfx meeting_tools_toolbar--icon--EVBBt', {
        [yQ]: e !== 'MUSIC' && e !== 'ALL'
      }),
      children: jsx(jl, {
        size: jo.XSMALL,
        maskAlbumArtWhenPaused: !0,
        maskRef: t,
        useGrayMask: n,
        useLightShadow: !0
      })
    }), jsx('div', {
      className: ex()('meeting_tools_toolbar--starIcon--37MdY meeting_tools_toolbar--icon--EVBBt', {
        'meeting_tools_toolbar--leftAlign--G1Vob': e === 'VOTE',
        [yQ]: e !== 'VOTE' && e !== 'ALL'
      }),
      children: jsx('div', {
        ref: i,
        className: ex()('meeting_tools_toolbar--starContainer--4lbzy', {
          'meeting_tools_toolbar--grayedOut--deQf-': n
        }),
        children: jsx(yX, {})
      })
    })]
  });
}
function y2(e) {
  return jsx('div', {
    style: {
      width: e.width || 0
    }
  });
}
var y3 = (e => (e.ALL = 'ALL', e.MUSIC = 'MUSIC', e.VOTE = 'VOTE', e.NONE = 'NONE', e))(y3 || {});
let y5 = 'figjam_right_panel--container--z4q5E';
let y6 = 'figjam_right_panel--controls--1DAKo';
let y4 = 'figjam_right_panel--leftSection--wZTVw';
let y9 = 'figjam_right_panel--middleSection--xMAsd';
function y8() {
  let e = useDispatch<AppDispatch>();
  let t = selectCurrentFile();
  let i = useDropdownState();
  let n = useSelector(e => e.multiplayer);
  let r = usePresenterUser();
  let a = selectCurrentUser();
  let s = useMemo(() => n.allUsers.find(e => e.sessionID === n.sessionID) || null, [n.allUsers, n.sessionID]);
  let u = stopPresenting();
  let p = useIsProgressBarHiddenOrLocked();
  let f = useSelector(e => e.mirror.appModel.topLevelMode === ViewType.HISTORY);
  let _ = !isAIFeaturesEnabledForCurrentUser() && Uy() && !Cd();
  let x = BrowserInfo.isMeetDevice;
  let g = _$$L2();
  let b = getWorkshopModeStatus(t?.key || '').enabled;
  let y = useCallback(t => {
    Lx(t, s?.sessionID, e, !1, n, r, u);
  }, [s?.sessionID, e, n, r, u]);
  let v = U1();
  let C = useRef(null);
  return (useFocusArea(C, p), p) ? jsx('div', {
    className: y5,
    style: {
      visibility: BrowserInfo.isIpadNative ? 'hidden' : 'visible'
    },
    children: jsx(yI, {
      hasHoverableBackground: !1,
      children: jsxs('div', {
        className: y6,
        children: [jsx('div', {
          className: y4,
          children: jsx(ve, {})
        }), jsxs('div', {
          className: y9,
          children: [jsx(vt, {}), jsx(vt, {}), jsx(vt, {}), jsx(vi, {}), jsx(vt, {})]
        }), jsx(vn, {})]
      })
    })
  }) : jsx(_$$bo, {
    children: jsx(_$$V, {
      'ref': v,
      'className': ex()(y5, Dm),
      'style': {
        visibility: BrowserInfo.isIpadNative ? 'hidden' : 'visible'
      },
      'data-cancel-insertable-resource-drag-and-drop': !0,
      'children': jsx(yI, {
        hasHoverableBackground: !1,
        children: jsxs('div', {
          className: y6,
          ref: C,
          children: [jsxs('div', {
            className: y4,
            children: [jsx(_$$sK2, {
              isUI3: !0
            }), n && t && s && jsx(_$$v4, {
              dropdownShown: i,
              multiplayer: n,
              currentUser: s,
              onUserClick: y
            })]
          }), !f && jsxs('div', {
            className: y9,
            children: [_ && jsx(yW, {}), jsx(_$$y7, {}), !g && !x && jsx(yF, {}), jsx(y0, {})]
          }), t && jsx(_$$w4, {
            user: a,
            editingFile: t,
            isFileInWorkshop: b
          }), !a && !x && jsx(_$$tO, {})]
        })
      })
    })
  });
}
function y7({
  width: e,
  borderRadius: t = 'medium'
}) {
  return jsx('div', {
    className: 'figjam_right_panel--loadingPlaceholder--Z4Q63',
    style: {
      width: e,
      borderRadius: t === 'full' ? 'var(--radius-full)' : 'var(--radius-medium)',
      visibility: 'hidden'
    },
    children: jsx(_$$_b, {})
  });
}
function ve() {
  return jsx('div', {
    className: 'figjam_right_panel--multiplayerPlaceholderContainer--ZLhPf',
    children: jsx(y7, {
      width: 40,
      borderRadius: 'full'
    })
  });
}
function vt() {
  return jsx(y7, {
    width: 32
  });
}
function vi() {
  return jsx(y7, {
    width: 90
  });
}
function vn() {
  return jsx(y7, {
    width: 55
  });
}
let vr = 'whiteboard_ui--stackedContainer--2mtV9';
let va = 'whiteboard_ui--rightSidebar--CJHYf';
let vs = memo(() => {
  let e = Vi();
  let t = useSelector(e => e.mirror.appModel.topLevelMode === ViewType.HISTORY);
  let i = useAppModelProperty('showUi');
  (function () {
    let e = Kx();
    let t = useSelector(e => e.timer.modalState);
    let i = useAtomWithSubscription(Qs);
    useEffect(() => {
      e?.updateTimerModalState && e.updateTimerModalState(i.isOpen ? 'open' : 'closed');
    }, [e, t, i.isOpen]);
    let n = useSelector(e => e.timer.time);
    useEffect(() => {
      e?.updateTimerTime && n && e.updateTimerTime(n);
    }, [e, n]);
  })();
  _$$M6();
  (function () {
    let e = useSetAtom(Qs);
    useEffect(() => () => {
      e({
        type: 'CLOSE'
      });
    }, [e]);
  })();
  let n = Kx();
  let r = i && !n?.shouldOptimizeForIpadApp && e;
  return jsx(vo, {
    showUi: i,
    inVersionHistory: t,
    isCommentsPanelOpen: r
  });
});
function vo({
  showUi: e,
  inVersionHistory: t,
  isCommentsPanelOpen: i
}) {
  let n = useAtomWithSubscription(Qs).isOpen;
  let r = useAtomWithSubscription(_$$zS) === Wl.TOP_BAR;
  let a = _$$S4();
  let s = Lk();
  let d = L3();
  let c = useRef(null);
  let [u, h] = useState(null);
  let m = function (e) {
    let t = Yk();
    let i = TH();
    let n = _$$C3()?.bottomRightToolsNode?.getBoundingClientRect();
    let r = e?.getBoundingClientRect();
    return i && r && n ? i.right + no > n.left ? nl({
      includePanelGap: !0,
      dltBottomOffset: t,
      collidesWithDLT: !0,
      collidesWithTools: !0
    }) : i.right + no > r.left ? nl({
      includePanelGap: !0,
      dltBottomOffset: t,
      collidesWithDLT: !0,
      collidesWithTools: !1
    }) : nl({
      includePanelGap: !0,
      dltBottomOffset: t,
      collidesWithDLT: !1,
      collidesWithTools: !0
    }) : 0;
  }(u);
  useLayoutEffect(() => {
    h(c.current?.lastElementChild);
  }, [c, i, n, r, a, t, d]);
  let f = t ? e ? jsx(vc, {}) : null : jsx(vd, {
    isCommentsPanelOpen: i
  });
  return IntegrationUtils.isGoogleClassroomIntegration() ? jsx('div', {
    className: va,
    style: {
      bottom: m
    },
    children: jsx('div', {
      ref: c,
      className: ex()(vr, Dm),
      children: i && jsx(vl, {})
    })
  }) : jsx('div', {
    className: va,
    style: {
      bottom: m
    },
    children: jsxs('div', {
      ref: c,
      className: ex()(vr, Dm),
      children: [e && jsx(y8, {}), jsx(gD, {}), s && jsx(_$$s8, {}), f]
    })
  });
}
function vl() {
  return jsx('div', {
    className: 'whiteboard_ui--commentsContainer--HLR1i',
    children: jsx(gG, {
      children: jsx(_$$B7, {
        hidePageName: !0,
        hideResolve: !1,
        onCloseButton: () => Fullscreen.triggerActionInUserEditScope('set-tool-default', null)
      })
    })
  });
}
function vd({
  isCommentsPanelOpen: e
}) {
  let [t, i] = useAtomValueAndSetter(qM);
  let n = useSelector(e => isActionEnabled(e.mirror.appModel, JT.SLIDES_REWRITE_TEXT));
  useEffect(() => {
    t && !n && i(!1);
  }, [t, n, i]);
  return jsxs(Fragment, {
    children: [t ? jsx(_$$vB, {}) : jsx(yT, {}), jsx(cd, {}), e && jsx(vl, {})]
  });
}
function vc() {
  let e = U1();
  return jsx(gG, {
    ref: e,
    children: jsx(_$$yU, {
      fileHasCMSData: !1
    })
  });
}
let vm = isAnyMobile ? 18 : 9;
function vf({
  initiatorId: e,
  initiatorHandle: t,
  votingSessionId: i
}) {
  let n = useDispatch<AppDispatch>();
  let r = Ii();
  let a = function (e) {
    let t = useSelector(e => e.multiplayer).allUsers.find(t => t.userID === e) ?? null;
    return t ? t.color : null;
  }(e);
  let s = useCurrentFileKey();
  let u = useAtomWithSubscription(Fj);
  let h = isInteractionPathCheck() ? 1e3 : u;
  let m = useCallback(e => {
    n(setVotingSessionInfo({
      votingStage: SessionStatus.JOINED
    }));
    trackEventAnalytics('join_voting_session', {
      source: e,
      votingSessionId: i,
      fileKey: s
    });
  }, [n, s, i]);
  let f = useCallback(e => {
    n(dismissJoinConfirmation());
    trackEventAnalytics('cancel_join_voting_session', {
      source: e,
      votingSessionId: i,
      fileKey: s
    });
  }, [n, s, i]);
  useEffect(() => {
    let e = setTimeout(() => m('join_bell_auto_join'), h);
    return () => clearTimeout(e);
  }, [h, m, i]);
  let _ = useCallback(() => (f('keyboard'), !0), [f]);
  O1(_, KD.OVERLAY);
  return jsx('div', {
    className: 'join_voting_overlay--bellPositioner--TVyYX',
    style: {
      top: vm + r
    },
    children: jsx('div', {
      className: 'join_voting_overlay--bellContainer--OQxCq',
      children: jsx(_$$m8, {
        color: a,
        message: {
          text: t ? renderI18nText('voting.join_bell.message_with_username', {
            name: t
          }) : renderI18nText('voting.join_bell.message_without_username'),
          onClick: () => m('join_bell_click')
        },
        renderKey: i,
        progressBar: !0,
        progressBarDurationMs: h,
        autoHide: !1,
        recordingKey: 'multiplayerBell',
        button: {
          text: getI18nString('voting.join_bell.cancel'),
          onClick: () => f('join_bell_cancel_click')
        }
      })
    })
  });
}
function v_() {
  let e = C3();
  let {
    user
  } = wW(e?.userId || null);
  return function () {
    let e = C3();
    let t = useCanShowJoinConfirmation();
    let {
      loading
    } = wW(e?.userId || null);
    return !!t && !loading && !!e;
  }() && e ? jsx(vf, {
    initiatorHandle: user ? user.handle : null,
    votingSessionId: e.id,
    initiatorId: e.userId
  }) : null;
}
let vg = memo(() => {
  let e = useDispatch<AppDispatch>();
  let t = getUserId();
  let i = useSelector(e => e.mirror.appModel.votingSessionInfo);
  let n = useSelector(e => e.voting.selectedVotePinId);
  let r = [SessionStatus.ENDED, SessionStatus.JOINED].includes(i.votingStage);
  let {
    pageIdForNodeId
  } = useContext(kw);
  let s = useDeepEqualSceneValue(e => e.getCurrentPage()?.guid);
  let u = useMemo(() => {
    let e;
    return i.votingStage === SessionStatus.JOINED ? (e = i.votedNodes, t ? e.filter(e => e.userIdToNodeVotes[t]?.length).map(e => ({
      ...e,
      userIdToNodeVotes: {
        [t]: e.userIdToNodeVotes[t]
      }
    })) : []) : i.votedNodes;
  }, [i.votingStage, i.votedNodes, t]);
  let p = useMemo(() => u.filter(e => pageIdForNodeId(e.guid) === s), [u, pageIdForNodeId, s]);
  return (useEffect(() => {
    n && (r && p.some(e => e.guid === n) || e(deselectVotePin({
      votePinId: n
    })));
  }, [p, r, n, e]), r) ? jsx(ML, {
    votedNodes: p,
    votingStage: i.votingStage,
    selectedNodeId: n,
    currentUserId: t
  }) : null;
});
let vj = 'mindmap_quick_add_buttons--mindmapButton--3C5fm';
function vb({
  backgroundColor: e,
  iconColor: t,
  scaleX: i
}) {
  return jsxs('svg', {
    width: '28',
    height: '28',
    viewBox: '0 0 28 28',
    fill: 'none',
    className: vj,
    style: {
      transform: `scaleX(${i})`
    },
    children: [jsx('rect', {
      x: '1',
      y: '1',
      width: '26',
      height: '26',
      rx: '13',
      fill: e
    }), jsx('rect', {
      x: '13',
      y: '11',
      width: '8',
      height: '6',
      rx: '1',
      fill: t
    }), jsx('rect', {
      x: '7',
      y: '13',
      width: '6',
      height: '2',
      fill: t
    }), jsx('rect', {
      x: '1',
      y: '1',
      width: '26',
      height: '26',
      rx: '13',
      stroke: '#0D99FF',
      strokeWidth: '2'
    })]
  });
}
function vy({
  backgroundColor: e,
  iconColor: t,
  scaleX: i
}) {
  return jsxs('svg', {
    width: '28',
    height: '28',
    viewBox: '0 0 28 28',
    fill: 'none',
    className: vj,
    style: {
      transform: `scaleX(${i})`
    },
    children: [jsx('rect', {
      x: '1',
      y: '1',
      width: '26',
      height: '26',
      rx: '13',
      fill: e
    }), jsx('rect', {
      opacity: '0.3',
      x: '12.5',
      y: '7.5',
      width: '8',
      height: '6',
      rx: '1',
      fill: t
    }), jsx('rect', {
      x: '12.5',
      y: '15.5',
      width: '8',
      height: '6',
      rx: '1',
      fill: t
    }), jsx('rect', {
      opacity: '0.3',
      x: '6.5',
      y: '9.5',
      width: '6',
      height: '2',
      fill: t
    }), jsx('path', {
      d: 'M12.5 18.5V18.5C10.8431 18.5 9.5 17.1569 9.5 15.5V13.5C9.5 11.8431 8.15685 10.5 6.5 10.5V10.5',
      stroke: t,
      strokeWidth: '2'
    }), jsx('rect', {
      x: '1',
      y: '1',
      width: '26',
      height: '26',
      rx: '13',
      stroke: '#0D99FF',
      strokeWidth: '2'
    })]
  });
}
let vv = '#0D99FF';
function vC() {
  let e = Zr('quick-create');
  let t = Zr('quick-create-diagram-sibling');
  let i = useSelectionPropertyValue('singleDiagramNodeDirection');
  let n = useSelectionPropertyValue('isDiagramRootNode');
  let r = function (e, t) {
    let i = useSelectionPropertyValue('isSingleDiagramNodeSelected');
    let n = useSelectionPropertyValue('locked');
    let r = useSelector(e => e.mirror.appModel.activeUserAction);
    return !!(i && !n && (e || t) && r !== UserActionState.DRAGGING && r !== UserActionState.RESIZING && r !== UserActionState.ROTATING);
  }(e, t);
  let a = getViewportInfo({
    subscribeToUpdates_expensive: r
  });
  let s = function (e) {
    let t = getObservableValue(AppStateTsApi?.canvasViewState().selectionBoundingRect, {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    });
    let i = scaleRect(e, t);
    return {
      ...i,
      x: i.x + e.x,
      y: i.y + e.y
    };
  }(a);
  let l = i === NavigationDirection.BACKWARD ? -1 : 1;
  return !r || a.zoomScale < 0.35 ? null : jsxs(Fragment, {
    children: [e && jsx(vT, {
      selectionBounds: s,
      Icon: vb,
      onClick: _$$nc.user('quick-add-mindmap', () => MindmapCppBindings?.quickAddMindmapChild(null)),
      recordingKey: 'mindmap-add-child-button',
      direction: l > 0 ? NavigationDirection.FORWARD : NavigationDirection.BACKWARD,
      includeTooltipKeyboardShortcut: !0
    }), e && n && jsx(vT, {
      selectionBounds: s,
      Icon: vb,
      onClick: _$$nc.user('quick-add-mindmap', () => MindmapCppBindings?.quickAddMindmapChild(NavigationDirection.BACKWARD)),
      recordingKey: 'mindmap-add-backward-child-button',
      direction: NavigationDirection.BACKWARD,
      includeTooltipKeyboardShortcut: !1
    }), t && jsx(vE, {
      Icon: vy,
      onClick: _$$nc.user('quick-add-mindmap', () => MindmapCppBindings?.quickAddMindmapSibling()),
      positionX: Al,
      positionY: DH,
      recordingKey: 'mindmap-add-sibling-button',
      scaleX: l,
      selectionBounds: s,
      tooltip: getI18nString('whiteboard.mindmaps.add-sibling-tooltip'),
      tooltipDirection: l > 0 ? 'right' : 'left',
      tooltipShortcutActionKey: 'quick-create-diagram-sibling'
    })]
  });
}
function vT({
  selectionBounds: e,
  Icon: t,
  onClick: i,
  recordingKey: n,
  direction: r,
  includeTooltipKeyboardShortcut: a
}) {
  let s = r === NavigationDirection.BACKWARD ? -1 : 1;
  return jsx(vE, {
    Icon: t,
    onClick: i,
    positionX: (e, t) => e.x + (s > 0 ? e.width : -t.width) + 8 * s,
    positionY: _$$tJ,
    recordingKey: n,
    scaleX: s,
    selectionBounds: e,
    tooltip: getI18nString('whiteboard.mindmaps.add-child-tooltip'),
    tooltipDirection: r === NavigationDirection.BACKWARD ? 'left' : 'right',
    tooltipShortcutActionKey: a ? 'quick-create' : void 0
  });
}
function vE({
  selectionBounds: e,
  positionX: t,
  positionY: i,
  Icon: n,
  onClick: r,
  recordingKey: a,
  scaleX: s,
  tooltip: d,
  tooltipShortcutActionKey: c,
  tooltipDirection: u
}) {
  let p = useIsPopoverClosed();
  let [h, m] = useState(!1);
  return jsx(_$$lM, {
    targetRect: e,
    onMouseEnter: () => m(!0),
    onMouseLeave: () => m(!1),
    positionX: t,
    positionY: i,
    offset: 8,
    children: jsx('div', {
      className: 'mindmap_quick_add_buttons--button--iRZL8',
      children: jsx(IconButton, {
        'aria-label': getI18nString('whiteboard.mindmaps.add-child-tooltip'),
        'onClick': e => {
          e.preventDefault();
          r(e);
        },
        'recordingKey': a,
        'htmlAttributes': {
          'data-tooltip-offset-x': u === 'left' ? -4 : 4,
          'data-tooltip-show-right': u === 'right' || void 0,
          'data-tooltip-show-left': u === 'left' || void 0,
          'data-tooltip-type': d && p ? KindEnum.TEXT : void 0,
          'data-tooltip': d,
          'data-tooltip-shortcut-key': c,
          'data-fullscreen-intercept': !0
        },
        'children': jsx(n, {
          backgroundColor: h ? vv : 'white',
          iconColor: h ? 'white' : vv,
          scaleX: s
        })
      })
    })
  });
}
function vA() {
  return jsx('svg', {
    className: 'svg',
    width: '32',
    height: '32',
    viewBox: '0 0 32 32',
    fill: 'none',
    children: jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M16 15.293L20.6465 10.6465L21.3536 11.3536L16.7071 16.0001L21.3536 20.6465L20.6465 21.3536L16 16.7072L11.3536 21.3536L10.6465 20.6465L15.2929 16.0001L10.6465 11.3537L11.3536 10.6466L16 15.293Z',
      fill: 'var(--color-icon)'
    })
  });
}
function vO(e) {
  let {
    children
  } = e;
  return jsx('svg', {
    className: 'svg',
    width: '32',
    height: '32',
    viewBox: '0 0 40 40',
    fill: 'none',
    children
  });
}
function vk(e) {
  let {
    options,
    selectedIndex,
    setSelectedIndex
  } = e;
  let r = selectedIndex !== -1 ? options[selectedIndex] : void 0;
  return jsx('div', {
    'className': 'starter_kit_ui--optionList--6X7XJ',
    'aria-label': getI18nString('whiteboard.starter_kit.subtitle'),
    'role': 'listbox',
    'data-fullscreen-intercept': !0,
    'aria-activedescendant': r?.ariaId,
    'tabIndex': 0,
    'children': options.map((e, t) => jsx(vR, {
      option: e,
      selected: selectedIndex === t,
      onMouseEnter: () => setSelectedIndex(t),
      onClick: () => {
        _$$oW3.trigger('action', TransactionCommand.COMMIT);
      }
    }, e.key))
  });
}
function vR(e) {
  let {
    option,
    selected,
    onMouseEnter,
    onClick
  } = e;
  let a = option.localizedLabel();
  return jsxs('div', {
    'id': option.ariaId,
    'className': ex()('starter_kit_ui--option--A988Y text--fontNeg14--ARPWl text--_fontBase--QdLsd text--_negText--j9g-L', option.className),
    'aria-label': a,
    'aria-selected': selected,
    onMouseEnter,
    onClick,
    'role': 'option',
    'data-fullscreen-intercept': !0,
    'tabIndex': -1,
    'children': [option.svg, jsx('span', {
      style: {
        flex: 1
      },
      children: a
    })]
  });
}
let vD = {
  brainstorm: {
    ariaId: generateUUIDv4(),
    key: 'brainstorm',
    localizedLabel: () => getI18nString('whiteboard.starter_kit.options.brainstorm'),
    svg: jsx(() => {
      return jsxs(vO, {
        children: [jsx('path', {
          d: 'm27 19.5-7.5 7.7H12V12h15v7.5Z',
          fill: '#FFC700'
        }), jsx('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M19.5 19.5H27v-1h-8.5v8.7h.9v-7.7Z',
          fill: '#332800'
        })]
      });
    }, {}),
    onSelect() {
      WhiteboardStarterKitCppBindings.showFigjamStarterKitPreview(CollaborationType.STICKY);
    },
    onCommit() {
      WhiteboardStarterKitCppBindings.commitFigjamStarterKitPreview(CollaborationType.STICKY);
    }
  },
  agenda: {
    ariaId: generateUUIDv4(),
    key: 'agenda',
    localizedLabel: () => getI18nString('whiteboard.starter_kit.options.agenda'),
    svg: jsx(() => {
      return jsxs(vO, {
        children: [jsx('rect', {
          x: '13',
          y: '13',
          width: '17',
          height: '17',
          rx: '3',
          fill: '#699BF7'
        }), jsx('rect', {
          x: '11',
          y: '11',
          width: '13.3333',
          height: '10',
          rx: '3',
          fill: 'white'
        }), jsx('rect', {
          x: '13.45',
          y: '13.6722',
          width: '7.98889',
          height: '4.65556',
          rx: '1.55',
          fill: '#CFE2FF',
          stroke: '#333333',
          strokeWidth: '0.9'
        })]
      });
    }, {}),
    onSelect() {
      WhiteboardStarterKitCppBindings.showFigjamStarterKitPreview(CollaborationType.SECTION);
    },
    onCommit() {
      WhiteboardStarterKitCppBindings.commitFigjamStarterKitPreview(CollaborationType.SECTION);
    }
  },
  flow: {
    ariaId: generateUUIDv4(),
    key: 'flow',
    localizedLabel: () => getI18nString('whiteboard.starter_kit.options.flow'),
    svg: jsx(() => {
      return jsxs(vO, {
        children: [jsx('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M18 11C14.134 11 11 14.134 11 18C11 21.5265 13.6077 24.4439 17 24.9291V17H24.9291C24.4439 13.6077 21.5265 11 18 11Z',
          fill: '#0FA958'
        }), jsx('rect', {
          x: '18',
          y: '18',
          width: '12',
          height: '12',
          fill: '#A259FF'
        })]
      });
    }, {}),
    onSelect() {
      WhiteboardStarterKitCppBindings.showFigjamStarterKitPreview(CollaborationType.SHAPE_WITH_TEXT);
    },
    onCommit() {
      WhiteboardStarterKitCppBindings.commitFigjamStarterKitPreview(CollaborationType.SHAPE_WITH_TEXT);
    }
  },
  bug_bash: {
    ariaId: generateUUIDv4(),
    key: 'bug_bash',
    localizedLabel: () => getI18nString('whiteboard.starter_kit.options.bug_bash'),
    svg: jsx(() => {
      return jsxs(vO, {
        children: [jsx('path', {
          d: 'M20.8247 12.7078L20.5065 13.026L21.1429 13.6624L21.4611 13.3442L20.8247 12.7078ZM23.487 11.3183C23.6628 11.1425 23.6628 10.8576 23.487 10.6819C23.3113 10.5061 23.0264 10.5061 22.8506 10.6819L23.487 11.3183ZM21.4611 13.3442L23.487 11.3183L22.8506 10.6819L20.8247 12.7078L21.4611 13.3442Z',
          fill: '#1F1F1F'
        }), jsx('path', {
          d: 'M17.6818 14.3182L18 14.6364L18.6364 14L18.3182 13.6818L17.6818 14.3182ZM15.3182 10.6818C15.1425 10.5061 14.8575 10.5061 14.6818 10.6818C14.5061 10.8575 14.5061 11.1425 14.6818 11.3182L15.3182 10.6818ZM18.3182 13.6818L15.3182 10.6818L14.6818 11.3182L17.6818 14.3182L18.3182 13.6818Z',
          fill: '#1F1F1F'
        }), jsx('line', {
          x1: '25.8143',
          y1: '22.6143',
          x2: '28.6794',
          y2: '22.6143',
          stroke: '#1F1F1F',
          strokeWidth: '0.771429',
          strokeLinecap: 'round'
        }), jsx('path', {
          d: 'M28.6207 22.1643C28.8693 22.1643 29.0707 22.3657 29.0707 22.6143C29.0707 22.8628 28.8693 23.0643 28.6207 23.0643V22.1643ZM25.7556 23.0643H25.3056V22.1643H25.7556V23.0643ZM28.6207 23.0643H25.7556V22.1643H28.6207V23.0643Z',
          fill: '#1F1F1F'
        }), jsx('line', {
          x1: '0.45',
          y1: '-0.45',
          x2: '3.18655',
          y2: '-0.45',
          transform: 'matrix(-0.866025 0.5 0.5 0.866025 28.1493 18.6626)',
          stroke: '#1F1F1F',
          strokeWidth: '0.9',
          strokeLinecap: 'round'
        }), jsx('path', {
          d: 'M27.826 27.0634C28.0412 27.1877 28.3164 27.1139 28.4407 26.8987C28.5649 26.6835 28.4912 26.4083 28.276 26.284L27.826 27.0634ZM25.7947 24.8514L25.405 24.6264L24.955 25.4059L25.3447 25.6309L25.7947 24.8514ZM28.276 26.284L25.7947 24.8514L25.3447 25.6309L27.826 27.0634L28.276 26.284Z',
          fill: '#1F1F1F'
        }), jsx('path', {
          d: 'M10 22.1643C9.75147 22.1643 9.55 22.3657 9.55 22.6143C9.55 22.8628 9.75147 23.0643 10 23.0643V22.1643ZM12.8651 23.0643H13.3151V22.1643H12.8651V23.0643ZM10 23.0643H12.8651V22.1643H10V23.0643Z',
          fill: '#1F1F1F'
        }), jsx('path', {
          d: 'M11.3111 18.1082C11.0959 17.9839 10.8207 18.0577 10.6964 18.2729C10.5721 18.4882 10.6459 18.7634 10.8611 18.8876L11.3111 18.1082ZM13.231 20.2559L13.6208 20.4809L14.0708 19.7015L13.681 19.4765L13.231 20.2559ZM10.8611 18.8876L13.231 20.2559L13.681 19.4765L11.3111 18.1082L10.8611 18.8876Z',
          fill: '#1F1F1F'
        }), jsx('path', {
          d: 'M10.3724 26.2693C10.1491 26.3783 10.0564 26.6477 10.1653 26.871C10.2743 27.0944 10.5437 27.1871 10.7671 27.0781L10.3724 26.2693ZM14.1973 25.4044L14.6018 25.2071L14.2071 24.3982L13.8027 24.5956L14.1973 25.4044ZM10.7671 27.0781L14.1973 25.4044L13.8027 24.5956L10.3724 26.2693L10.7671 27.0781Z',
          fill: '#1F1F1F'
        }), jsx('circle', {
          cx: '19.4286',
          cy: '16.1428',
          r: '3.42857',
          fill: '#FF8577'
        }), jsx('rect', {
          x: '13.7857',
          y: '16.5',
          width: '11.2857',
          height: '13',
          rx: '5.64286',
          fill: '#FF8577',
          stroke: 'white'
        })]
      });
    }, {}),
    onSelect() {
      WhiteboardStarterKitCppBindings.showFigjamStarterKitPreview(CollaborationType.BUG_BASH);
    },
    onCommit() {
      WhiteboardStarterKitCppBindings.commitFigjamStarterKitPreview(CollaborationType.BUG_BASH);
    }
  },
  design_crit: {
    ariaId: generateUUIDv4(),
    key: 'design_crit',
    localizedLabel: () => getI18nString('whiteboard.starter_kit.options.design_crit'),
    svg: jsx(() => {
      return jsxs(vO, {
        children: [jsx('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M29 24.9352L28.2929 24.2281L26.0724 22.0076C26.2633 21.4079 26.3664 20.769 26.3664 20.106C26.3664 17.1927 24.3764 14.7442 21.6816 14.0456L12.1329 11.323L11 11L11.3246 12.1324L13.9746 21.3762C14.5616 24.2247 17.0837 26.3664 20.106 26.3664C20.7916 26.3664 21.4514 26.2562 22.0687 26.0526L24.2686 28.2524L24.9757 28.9595L25.6828 28.2524L28.2929 25.6423L29 24.9352Z',
          fill: '#333333'
        }), jsx('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M11.3246 12.1326L11.2557 11.8923L16.9847 17.6214C16.842 17.8708 16.7604 18.1598 16.7604 18.4678C16.7604 19.4108 17.5249 20.1752 18.4678 20.1752C19.4108 20.1752 20.1752 19.4108 20.1752 18.4678C20.1752 17.5249 19.4108 16.7604 18.4678 16.7604C18.1597 16.7604 17.8706 16.8421 17.621 16.9849L11.8902 11.254L12.1328 11.3232L21.6815 14.0458C24.3764 14.7444 26.3664 17.1929 26.3664 20.1062C26.3664 20.7692 26.2633 21.4081 26.0723 22.0078L28.2928 24.2283L29 24.9354L28.2928 25.6425L25.6827 28.2526L24.9756 28.9597L24.2685 28.2526L22.0686 26.0527C21.4513 26.2564 20.7915 26.3666 20.106 26.3666C17.0836 26.3666 14.5615 24.2249 13.9745 21.3764L11.3246 12.1326Z',
          fill: '#C7B9FF'
        })]
      });
    }, {}),
    onSelect() {
      WhiteboardStarterKitCppBindings.showFigjamStarterKitPreview(CollaborationType.DESIGN_CRIT);
    },
    onCommit() {
      WhiteboardStarterKitCppBindings.commitFigjamStarterKitPreview(CollaborationType.DESIGN_CRIT);
    }
  },
  user_journey: {
    ariaId: generateUUIDv4(),
    key: 'user_journey',
    localizedLabel: () => getI18nString('whiteboard.starter_kit.options.user_journey'),
    svg: jsx(() => {
      return jsxs(vO, {
        children: [jsx('path', {
          d: 'M17 12L11 15.134V28L17 25V12Z',
          fill: '#5551FF'
        }), jsx('path', {
          d: 'M18 12L23 15V28L18 25V12Z',
          fill: '#5551FF'
        }), jsx('path', {
          d: 'M17.5 12V25',
          stroke: 'white'
        }), jsx('path', {
          d: 'M17.5 12V25',
          stroke: 'white'
        }), jsx('path', {
          d: 'M23.5 15V28',
          stroke: 'white'
        }), jsx('path', {
          d: 'M30 12L24 15V28L30 25.0309V12Z',
          fill: '#5551FF'
        })]
      });
    }, {}),
    onSelect() {
      WhiteboardStarterKitCppBindings.showFigjamStarterKitPreview(CollaborationType.USER_JOURNEY);
    },
    onCommit() {
      WhiteboardStarterKitCppBindings.commitFigjamStarterKitPreview(CollaborationType.USER_JOURNEY);
    }
  },
  standup: {
    ariaId: generateUUIDv4(),
    key: 'standup',
    localizedLabel: () => getI18nString('whiteboard.starter_kit.standup.title'),
    svg: jsx(() => {
      return jsxs(vO, {
        children: [jsx('circle', {
          cx: '24',
          cy: '17',
          r: '3',
          fill: '#0FA958'
        }), jsx('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M29 25.7143C29 22.5584 26.7614 20 24 20C21.2386 20 19 22.5584 19 25.7143H29Z',
          fill: '#0FA958'
        }), jsxs('mask', {
          id: 'path-3-outside-1_878_74485',
          maskUnits: 'userSpaceOnUse',
          x: '10',
          y: '13',
          width: '12',
          height: '14',
          fill: 'black',
          children: [jsx('rect', {
            fill: 'white',
            x: '10',
            y: '13',
            width: '12',
            height: '14'
          }), jsx('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M16 20C17.6569 20 19 18.6569 19 17C19 15.3431 17.6569 14 16 14C14.3431 14 13 15.3431 13 17C13 18.6569 14.3431 20 16 20ZM16 20C13.2386 20 11 22.5584 11 25.7143H21C21 22.5584 18.7614 20 16 20Z'
          })]
        }), jsx('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M16 20C17.6569 20 19 18.6569 19 17C19 15.3431 17.6569 14 16 14C14.3431 14 13 15.3431 13 17C13 18.6569 14.3431 20 16 20ZM16 20C13.2386 20 11 22.5584 11 25.7143H21C21 22.5584 18.7614 20 16 20Z',
          fill: '#0FA958'
        }), jsx('path', {
          d: 'M11 25.7143H10V26.7143H11V25.7143ZM21 25.7143V26.7143H22V25.7143H21ZM18 17C18 18.1046 17.1046 19 16 19V21C18.2091 21 20 19.2091 20 17H18ZM16 15C17.1046 15 18 15.8954 18 17H20C20 14.7909 18.2091 13 16 13V15ZM14 17C14 15.8954 14.8954 15 16 15V13C13.7909 13 12 14.7909 12 17H14ZM16 19C14.8954 19 14 18.1046 14 17H12C12 19.2091 13.7909 21 16 21V19ZM16 19C12.565 19 10 22.1357 10 25.7143H12C12 22.9811 13.9121 21 16 21V19ZM11 26.7143H21V24.7143H11V26.7143ZM22 25.7143C22 22.1357 19.435 19 16 19V21C18.0879 21 20 22.9811 20 25.7143H22Z',
          fill: 'white',
          mask: 'url(#path-3-outside-1_878_74485)'
        })]
      });
    }, {}),
    onSelect() {
      WhiteboardStarterKitCppBindings.showFigjamStarterKitPreview(CollaborationType.STANDUP);
    },
    onCommit() {
      WhiteboardStarterKitCppBindings.commitFigjamStarterKitPreview(CollaborationType.STANDUP);
    }
  },
  retro: {
    ariaId: generateUUIDv4(),
    key: 'retro',
    localizedLabel: () => getI18nString('whiteboard.starter_kit.options.retro'),
    svg: jsx(() => {
      return jsxs(vO, {
        children: [jsx('circle', {
          cx: '20.009',
          cy: '20.003',
          r: '6.125',
          fill: '#0FA958'
        }), jsx('path', {
          fill: '#332800',
          fillRule: 'evenodd',
          d: 'M28.6 20a8.6 8.6 0 1 1-16.62-3.11l-.82-.378A9.475 9.475 0 0 0 10.5 20a9.5 9.5 0 1 0 9.5-9.5c-2.129 0-4.094.7-5.678 1.883l.575.694A8.6 8.6 0 0 1 28.6 20Z',
          clipRule: 'evenodd'
        }), jsx('path', {
          stroke: '#332800',
          strokeLinecap: 'round',
          strokeWidth: '.9',
          d: 'M20.009 15.718v4.285s2.586-.009 3.281 0'
        }), jsx('path', {
          fill: '#332800',
          d: 'm11.755 14.387 2.207-3.967 2.332 3.894-4.539.073Z'
        }), jsx('ellipse', {
          cx: '11.556',
          cy: '16.736',
          fill: '#332800',
          rx: '.451',
          ry: '.557',
          transform: 'rotate(20 11.556 16.736)'
        })]
      });
    }, {}),
    onSelect() {
      WhiteboardStarterKitCppBindings.showFigjamStarterKitPreview(CollaborationType.RETRO);
    },
    onCommit() {
      WhiteboardStarterKitCppBindings.commitFigjamStarterKitPreview(CollaborationType.RETRO);
    }
  },
  templates: {
    ariaId: generateUUIDv4(),
    key: 'templates',
    localizedLabel: () => getI18nString('whiteboard.starter_kit.options.templates'),
    className: 'starter_kit_ui--optionTemplates--UEEVb',
    onSelect() {
      WhiteboardStarterKitCppBindings.clearFigjamStarterKitPreview();
    },
    onCommit(e) {
      e(showModal({
        type: PH.type,
        data: {
          triggeredFrom: 'starterKitMore',
          templateInsertionLocation: FileTypeSwitch.CURRENT_FILE
        }
      }));
    }
  }
};
let vP = [vD.brainstorm, vD.agenda, vD.flow, vD.bug_bash, vD.design_crit, vD.user_journey, vD.retro, vD.templates];
function vU(e) {
  let {
    children,
    show,
    hasPreview
  } = e;
  let r = O$(show, hasPreview);
  return jsx('div', {
    'data-testid': show ? 'starter-kit-ui-show' : 'starter-kit-ui-hide',
    'className': ex()('starter_kit_ui--positioner--nIKAz', {
      'starter_kit_ui--positionerOpaque--eN5Q4': r
    }),
    'style': {
      display: show ? 'flex' : 'none'
    },
    children
  });
}
let vF = generateUUIDv4();
let vH = generateUUIDv4();
function vB({
  isFromNewFile: e
}) {
  let t = useAtomWithSubscription(_$$P6);
  let i = useCurrentTool();
  let n = useCurrentFileKey() || void 0;
  let r = useDispatch<AppDispatch>();
  let [a, s] = useState(!1);
  let u = useRef(!1);
  let h = e ? 'newFile' : 'recurring';
  _$$lG(t, a, r);
  At({
    fileKey: n,
    didUserCancel: a,
    showStarterKit: t
  });
  let [m, f] = useState(-1);
  let _ = !a && t === _$$iH.TRUE;
  let x = vP && m !== -1;
  let g = x ? vP[m] : void 0;
  let b = _$$fu2(_, x);
  useEffect(() => {
    b && f(-1);
  }, [b]);
  useEffect(() => {
    WhiteboardStarterKitCppBindings.setFigjamStarterKitEnabled(_);
    _ && e && f(0);
    _ || f(-1);
  }, [_, e, f]);
  useEffect(() => () => {
    WhiteboardStarterKitCppBindings?.setFigjamStarterKitEnabled(!1);
  }, []);
  useEffect(() => {
    i !== DesignGraphElements.SELECT && i !== DesignGraphElements.HAND && f(-1);
  }, [i]);
  let y = _$$I5(m === 0);
  useEffect(() => {
    if (!_ || !g) return;
    let e = document.getElementById(g.ariaId);
    e && e.focus();
  }, [y, _, m, g]);
  useEffect(() => {
    _ || WhiteboardStarterKitCppBindings.clearFigjamStarterKitPreview();
  }, [_]);
  useEffect(() => {
    if (_) {
      if (!g) {
        WhiteboardStarterKitCppBindings.clearFigjamStarterKitPreview();
        return;
      }
      g.key !== 'templates' && (logAndTrackCTA({
        fileKey: n,
        source: h,
        placeholderKey: g.key,
        starterKitPosition: m
      }, 'starter_kit_previewed'), trackTemplateEvent('resource_previewed', {
        fileKey: n,
        resourceType: 'placeholder',
        resourceName: g.key,
        placeholderSource: h,
        starterKitPosition: m
      }));
      g.onSelect();
    }
  }, [n, h, _, g, m]);
  !function (e, t) {
    let i = useCallback(e, t);
    useEffect(() => (_$$oW3.on('action', i), () => {
      _$$oW3.removeListener('action', i);
    }), [i]);
  }(e => {
    switch (e) {
      case TransactionCommand.PREVIOUS:
        f(e => (e - 1 + vP.length) % vP.length);
        break;
      case TransactionCommand.NEXT:
        f(e => (e + 1) % vP.length);
        break;
      case TransactionCommand.CLEAR:
        _ && logAndTrackCTA({
          fileKey: n,
          source: h,
          placeholderKey: g?.key
        }, 'starter_kit_alt_user_action');
        f(-1);
        break;
      case TransactionCommand.CANCEL:
        s(!0);
        break;
      case TransactionCommand.COMMIT:
        if (!g) break;
        g.key !== 'templates' && (logAndTrackCTA({
          fileKey: n,
          source: h,
          placeholderKey: g.key,
          starterKitPosition: m
        }, 'starter_kit_inserted'), trackTemplateEvent('resource_inserted', {
          fileKey: n,
          resourceType: 'placeholder',
          placeholderSource: h,
          resourceName: g.key,
          starterKitPosition: m
        }));
        g.onCommit(r);
    }
  }, [r, vP, g, f, s, _, n, h, m]);
  return jsx(vU, {
    show: _,
    hasPreview: x,
    children: jsx(TrackingProvider, {
      name: 'starter_kit_shown',
      properties: {
        fileKey: n,
        source: h
      },
      enabled: _,
      children: _ && jsx('div', {
        'className': 'starter_kit_ui--container--RLzBD',
        'style': _$$jm,
        'role': 'dialog',
        'aria-labelledby': vF,
        'aria-describedby': vH,
        'onMouseLeave': () => u.current = !0,
        'onMouseEnter': () => {
          u.current && (WhiteboardStarterKitCppBindings.rotateFigjamStarterKitStrings(), u.current = !1);
        },
        'children': jsxs(TabLoop, {
          children: [jsx(ButtonPrimitive, {
            'className': 'starter_kit_ui--closeButton--f40J9',
            'onClick': () => s(!0),
            'aria-label': getI18nString('whiteboard.starter_kit.close'),
            'children': jsx(vA, {})
          }), jsx('div', {
            className: 'starter_kit_ui--title--LN48H text--fontNeg14--ARPWl text--_fontBase--QdLsd text--_negText--j9g-L',
            id: vF,
            children: getI18nString('whiteboard.starter_kit.title')
          }), jsx('div', {
            className: 'starter_kit_ui--subtitle--RFGlJ text--fontNeg14--ARPWl text--_fontBase--QdLsd text--_negText--j9g-L',
            id: vH,
            children: getI18nString('whiteboard.starter_kit.subtitle')
          }), jsx(vk, {
            options: vP,
            selectedIndex: m,
            setSelectedIndex: f
          })]
        })
      })
    })
  });
}
function vV() {
  let e = Mh();
  let t = _$$nw(e);
  let i = !isAIFeaturesEnabledForCurrentUser() && Uy();
  let n = !!getFeatureFlags().figjam_generate_handbrake;
  let r = useSetAtom(_$$P6);
  useEffect(() => {
    r(e);
  }, [r, e]);
  useEffect(() => () => r(_$$iH.FALSE), [r]);
  return i && !n ? null : jsx(vB, {
    isFromNewFile: t
  });
}
function vK() {
  let e = useSelector(e => e.multiplayerEmoji);
  let t = useAppModelProperty('showUi');
  let i = useAppModelProperty('topLevelMode');
  let n = useAppModelProperty('currentTool') === DesignGraphElements.COMMENTS;
  let r = i === ViewType.HISTORY;
  let a = !isAIFeaturesEnabledForCurrentUser() && Uy();
  let s = getFeatureFlags().figjam_quick_actions_v2;
  let h = useSetAtom(_$$H4);
  useEffect(() => {
    r && h();
  }, [r, h]);
  return jsxs(Fragment, {
    children: [jsx(nV, {}), jsx(S4, {
      multiplayerEmoji: e
    }), jsx(cs, {}), a && s && jsx(_$$bY, {}), a && jsx(c_, {}), jsx(vC, {}), !n && !r && jsx(gp, {}), !n && !r && jsx(gC, {}), !isAIFeaturesEnabledForCurrentUser() && getFeatureFlags().figjam_ai_canvas_expand && jsx(uz, {}), jsx(_$$J, {}), jsx(X, {}), jsx(Nz, {}), jsx(v_, {}), t && jsx(n3, {})]
  });
}
let vW = memo(({
  shouldShowDragAndDropBorder: e
}) => {
  let t = useAppModelProperty('isReadOnly');
  let i = useSelector(e => e.progressBarState);
  let n = useAppModelProperty('loadingEmbeds');
  let r = getObservableValue(AppStateTsApi?.uiState().showCanvasSearch, !1);
  let a = useIsProgressBarHiddenOrLocked();
  let s = useRef(null);
  let p = useSelector(e => e.openFile);
  let m = p ? p.key : '';
  let y = useSelector(e => e.universalInsertModal);
  let w = useSelector(e => _$$h5(e));
  let I = useDispatch<AppDispatch>();
  useFileLibrarySubscriptions(m);
  _$$W(!0);
  let L = BI();
  _$$B9();
  let N = getFeatureFlags().figjam_toolbelt_in_page_view;
  return jsx(er, {
    children: jsxs(_$$sk, {
      versionHistoryEnabled: !1,
      children: [!(BrowserInfo.isIpad || BrowserInfo.isIpadNative) && !t && jsx(vV, {}), i.mode !== UIVisibilitySetting.OFF && jsx('div', {
        className: _$$_q
      }), jsxs(_$$pO, {
        initialFilterState: {
          currentPage: !1
        },
        children: [n.map(e => jsx(_$$_, {
          nodeId: e
        }, `loading-embed-${e}`)), jsx(qn, {}), jsx(_$$u2, {}), getFeatureFlags().video_in_canvas_figjam && jsx(_$$H, {}), r && jsx(_$$n3, {}), jsx(_$$G2, {}), jsx(_$$b2, {}), jsx(_$$J5, {}), jsx(vg, {}), jsx(XI, {
          commentsDetailContainerRef: s
        }), jsx(vK, {}), jsx('div', {
          ref: s
        }), !isVsCodeEnvironment() && jsx(nc, {}), jsxs(_$$G, {
          children: [jsx(vs, {}), !!L?.shouldOptimizeForIpadApp && jsx(useMobileGestures, {}), !!L?.shouldOptimizeForIpadApp && jsx(_$$t5, {})]
        }), e && jsx(X5, {})]
      }), jsx(_$$A, {
        editorType: FEditorType.Whiteboard,
        openFile: p
      }), jsx(_$$l3, {}), y.showing && jsx(ErrorBoundaryCrash, {
        boundaryKey: 'FigJamBrowseAllResourcesModal',
        onError: () => {
          I(VisualBellActions.enqueue({
            message: 'Unable to open inserts menu',
            type: 'react-error'
          }));
        },
        fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
        children: jsx(lU, {})
      }), !a && w && jsx(nj, {}), N && jsx(_$$u, {})]
    })
  });
});
export function $$vz0() {
  let e = useCurrentTool();
  let [t, i] = useState(!1);
  setupResourceAtomHandler(queryDefaultLibrariesMeta({}));
  return jsx(_$$c, {
    children: jsx(_$$v, {
      setShouldShowDragAndDropBorder: i,
      isDragTarget: !0,
      onPointerDown: (t, i) => {
        P2(t, i, e);
      },
      children: jsx(vW, {
        shouldShowDragAndDropBorder: t
      })
    })
  });
}
export const FigjamView = $$vz0;