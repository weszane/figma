import { CodeNode } from '@lexical/code';
import { $generateNodesFromDOM } from '@lexical/html';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { ListItemNode, ListNode } from '@lexical/list';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createHeadingNode, $isHeadingNode, HeadingNode, QuoteNode } from '@lexical/rich-text';
import { $setBlocksType } from '@lexical/selection';
import { Ay as _$$Ay, xk as _$$xk } from '@stylexjs/stylex';
import y from 'classnames';
import { $createParagraphNode, $getRoot, $getSelection, $insertNodes, $isRangeSelection, $isRootOrShadowRoot, $nodesOfType, BLUR_COMMAND, COMMAND_PRIORITY_EDITOR, createCommand, FORMAT_ELEMENT_COMMAND, FORMAT_TEXT_COMMAND, SELECTION_CHANGE_COMMAND } from 'lexical';
import { Fragment as _$$Fragment, Children, createContext, createElement, forwardRef, lazy, memo, Suspense, useCallback, useContext, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { useDebouncedCallback } from 'use-debounce';
import { B as _$$B9 } from '../7a72fc59/288229';
import { _ as _$$_ } from '../441/351942';
import { u as _$$u } from '../441/357009';
import { W as _$$W } from '../441/503702';
import { a as _$$a0 } from '../642/26273';
import { h as _$$h15, s as _$$s11 } from '../642/31878';
import { OG as _$$OG } from '../642/38487';
import { X as _$$X6 } from '../642/183469';
import { BS } from '../642/202922';
import { g as _$$g7 } from '../642/216228';
import { L as _$$L3 } from '../642/269105';
import { v as _$$v1 } from '../642/281455';
import { o as _$$o8 } from '../642/343724';
import { j2 as _$$j12 } from '../642/384859';
import { qh } from '../642/435480';
import { J as _$$J2 } from '../642/485582';
import { A as _$$A19 } from '../642/502017';
import { u as _$$u9, noop } from '../642/638075';
import { c as _$$c0 } from '../642/688711';
import { B as _$$B8 } from '../642/707257';
import { X2 } from '../642/755347';
import { C as _$$C0 } from '../642/776991';
import { o as _$$o9 } from '../642/854123';
import { _ as _$$_10 } from '../642/896644';
import { h as _$$h14, k as _$$k11 } from '../642/927471';
import { I as _$$I5, n as _$$n11 } from '../642/950153';
import { Ay as _$$Ay8 } from '../642/964720';
import { Um as _$$Um } from '../897/50897';
import { xX as _$$xX, PQ } from '../897/564585';
import { O as _$$O10, y as _$$y11 } from '../897/572017';
import { w_ as _$$w_ } from '../897/602108';
import { R as _$$R1 } from '../897/631032';
import { dR as _$$dR2 } from '../897/641331';
import { BP } from '../897/934363';
import { reportError, setTagGlobal } from '../905/11';
import { F as _$$F4 } from '../905/224';
import { t as _$$t9 } from '../905/1946';
import { a as _$$a6 } from '../905/5627';
import { r as _$$r9 } from '../905/11924';
import { D as _$$D6 } from '../905/12032';
import { tc as _$$tc } from '../905/15667';
import { getRumLoggingConfig } from '../905/16237';
import { useMemoStable } from '../905/19536';
import { findContainingResponsiveSet } from '../905/26360';
import { a as _$$a5 } from '../905/29104';
import { a as _$$a1 } from '../905/38236';
import { ModalFormContents, ModalRootComponent } from '../905/38914';
import { k as _$$k0 } from '../905/44647';
import { i as _$$i4 } from '../905/46262';
import { d as _$$d5 } from '../905/49800';
import { E as _$$E6 } from '../905/53857';
import { f as _$$f1 } from '../905/54715';
import { R as _$$R } from '../905/57445';
import { Fo, Uz } from '../905/63728';
import { M as _$$M2 } from '../905/69907';
import { hE as _$$hE3, Ej } from '../905/71683';
import { n as _$$n10 } from '../905/79930';
import { o as _$$o1 } from '../905/89370';
import { c as _$$c3 } from '../905/90943';
import { useSprigWithSampling } from '../905/99656';
import { ModalSupportsBackground, registerModal } from '../905/102752';
import { h as _$$h } from '../905/104000';
import { Z as _$$Z7 } from '../905/104740';
import { R as _$$R9 } from '../905/105002';
import { E as _$$E2 } from '../905/105281';
import { t as _$$t6 } from '../905/117577';
import { m as _$$m } from '../905/118468';
import { h as _$$h0 } from '../905/123399';
import { sha1Hex } from '../905/125019';
import { J as _$$J5 } from '../905/125993';
import { A as _$$A3 } from '../905/126947';
import { setupAutofocusHandler } from '../905/128376';
import { w as _$$w3, y as _$$y1 } from '../905/129046';
import { KindEnum } from '../905/129884';
import { MM } from '../905/136701';
import { _ as _$$_9 } from '../905/144222';
import { Q as _$$Q4 } from '../905/149004';
import { Av } from '../905/149328';
import { x as _$$x2 } from '../905/149501';
import { e as _$$e9 } from '../905/149844';
import { hideModal, hideModalHandler, popModalStack, showModal, showModalConditional, showModalHandler } from '../905/156213';
import { pW as _$$pW } from '../905/160095';
import { ServiceCategories as _$$e2 } from '../905/165054';
import { R as _$$R6 } from '../905/165069';
import { Of as _$$Of, ol as _$$ol2, w2 as _$$w6 } from '../905/165465';
import { UpsellModalType } from '../905/165519';
import { setupToggleButton } from '../905/167712';
import { ScreenReaderOnly } from '../905/172252';
import { F as _$$F9 } from '../905/172964';
import { y as _$$y2 } from '../905/175043';
import { lk as _$$lk } from '../905/182453';
import { p as _$$p5 } from '../905/185998';
import { a3 as _$$a15, ow as _$$ow } from '../905/188421';
import { d as _$$d10 } from '../905/189168';
import { permissionScopeHandler as _$$l, zk } from '../905/189185';
import { My } from '../905/194276';
import { m as _$$m8 } from '../905/194327';
import { h as _$$h2 } from '../905/200386';
import { Hz, Of, Yw } from '../905/201596';
import { q as _$$q4 } from '../905/202542';
import { Q7 } from '../905/203369';
import { h as _$$h3 } from '../905/207101';
import { O as _$$O9 } from '../905/208152';
import { N2 } from '../905/213527';
import { isInvalidValue, isValidValue, MIXED_MARKER, toArray, valueOrFallback } from '../905/216495';
import { b as _$$b14 } from '../905/217163';
import { y as _$$y } from '../905/225297';
import { resolveMessage } from '../905/231762';
import { n6 as _$$n3 } from '../905/234821';
import { E as _$$E10 } from '../905/235326';
import { o as _$$o0 } from '../905/237202';
import { z as _$$z11 } from '../905/239603';
import { Y as _$$Y3 } from '../905/246212';
import { g as _$$g4 } from '../905/248178';
import { A as _$$A7 } from '../905/251970';
import { z as _$$z6 } from '../905/252950';
import { R as _$$R4 } from '../905/256203';
import { T as _$$T2 } from '../905/256551';
import { F as _$$F8 } from '../905/258517';
import { HiddenLabel, Label } from '../905/270045';
import { m as _$$m3 } from '../905/270214';
import { O as _$$O3 } from '../905/273186';
import { Checkbox } from '../905/274480';
import { U as _$$U3 } from '../905/275247';
import { Gt as _$$Gt, kl as _$$kl, lJ as _$$lJ2, tN as _$$tN, A5, DQ, zj } from '../905/275640';
import { b as _$$b } from '../905/275748';
import { E as _$$E11 } from '../905/277716';
import { j4 as _$$j9, G5 } from '../905/278499';
import { Z as _$$Z5 } from '../905/279476';
import { G as _$$G4 } from '../905/289770';
import { createSavepoint } from '../905/294113';
import { a as _$$a8, G as _$$G5 } from '../905/298663';
import { $ as _$$$ } from '../905/302575';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { R as _$$R10 } from '../905/309415';
import { t as _$$t2 } from '../905/316903';
import { v as _$$v8 } from '../905/318279';
import { f as _$$f11 } from '../905/335032';
import { Q as _$$Q0 } from '../905/346809';
import { P as _$$P2 } from '../905/347284';
import { a as _$$a18 } from '../905/361302';
import { Q as _$$Q5 } from '../905/363675';
import { O as _$$O0 } from '../905/365108';
import { c as _$$c8 } from '../905/370443';
import { selectCurrentUser, selectUser } from '../905/372672';
import { W as _$$W6 } from '../905/378870';
import { k as _$$k4 } from '../905/381239';
import { deepEqual } from '../905/382883';
import { X as _$$X8 } from '../905/399133';
import { Z as _$$Z } from '../905/404142';
import { H as _$$H9 } from '../905/404982';
import { debugState } from '../905/407919';
import { SelectPrimitiveTrigger, useSelectPrimitiveState } from '../905/408073';
import { L as _$$L4 } from '../905/408237';
import { A as _$$A0 } from '../905/408320';
import { _ as _$$_0 } from '../905/410717';
import { h4 as _$$h1, Nz as _$$Nz } from '../905/417232';
import { rq as _$$rq } from '../905/425180';
import { e as _$$e10 } from '../905/428849';
import { N as _$$N8 } from '../905/430294';
import { useModalManager } from '../905/437088';
import { N as _$$N6 } from '../905/438674';
import { v as _$$v10 } from '../905/439487';
import { ConfirmationModal } from '../905/441305';
import { v as _$$v7 } from '../905/442517';
import { W as _$$W3 } from '../905/442612';
import { K as _$$K2 } from '../905/443068';
import { k as _$$k7 } from '../905/443820';
import { J as _$$J0 } from '../905/445197';
import { analyticsEventManager, trackEventAnalytics } from '../905/449184';
import { hK as _$$hK } from '../905/450589';
import { E as _$$E8 } from '../905/453826';
import { z as _$$z13 } from '../905/454433';
import { U as _$$U4 } from '../905/455766';
import { K as _$$K5 } from '../905/459096';
import { P as _$$P5 } from '../905/460261';
import { v as _$$v3 } from '../905/479136';
import { O as _$$O1 } from '../905/487602';
import { r as _$$r3 } from '../905/490676';
import { U as _$$U } from '../905/492359';
import { bL as _$$bL6, c$ as _$$c$5, l9 as _$$l7, mc as _$$mc2, wv as _$$wv2, zW } from '../905/493196';
import { PrimaryWorkflowEnum } from '../905/497152';
import { Z as _$$Z4 } from '../905/498136';
import { eventEmitterAtom, handleAtomEvent } from '../905/502364';
import { C as _$$C8 } from '../905/504203';
import { Cf as _$$Cf, it as _$$it, Jz } from '../905/504727';
import { Y as _$$Y4 } from '../905/506207';
import { FJ } from '../905/508367';
import { l as _$$l9 } from '../905/509505';
import { D8 } from '../905/511649';
import { h as _$$h9 } from '../905/513745';
import { C as _$$C6 } from '../905/520159';
import { Z as _$$Z3 } from '../905/521211';
import { Button, ButtonLarge, ButtonWide } from '../905/521428';
import { ex as _$$ex } from '../905/524523';
import { r6 as _$$r6 } from '../905/542608';
import { e as _$$e14 } from '../905/545750';
import { s as _$$s7 } from '../905/551945';
import { l as _$$l3 } from '../905/556594';
import { B as _$$B } from '../905/559262';
import { isSitesFeatureEnabled, useIsFullscreenSitesView } from '../905/561485';
import { N as _$$N9 } from '../905/568293';
import { r as _$$r2 } from '../905/571562';
import { N as _$$N7 } from '../905/572042';
import { FlashActions } from '../905/573154';
import { VisualBellIcon } from '../905/576487';
import { e as _$$e7 } from '../905/579755';
import { k as _$$k10 } from '../905/582200';
import { y as _$$y9 } from '../905/582657';
import { s as _$$s13 } from '../905/583953';
import { x as _$$x5 } from '../905/587214';
import { O as _$$O5 } from '../905/587457';
import { H8, Pf } from '../905/590952';
import { G as _$$G8 } from '../905/594445';
import { getFeatureFlags } from '../905/601108';
import { customHistory } from '../905/612521';
import { jN as _$$jN } from '../905/612685';
import { J as _$$J } from '../905/614223';
import { compareVersions } from '../905/616700';
import { e as _$$e5 } from '../905/621515';
import { R as _$$R0 } from '../905/621802';
import { ButtonPrimitive } from '../905/632989';
import { z as _$$z9 } from '../905/634240';
import { A as _$$A10 } from '../905/639174';
import { Bi } from '../905/652992';
import { i as _$$i3 } from '../905/661697';
import { getResourceDataOrFallback, ResourceStatus } from '../905/663269';
import { N as _$$N0 } from '../905/670143';
import { F as _$$F6 } from '../905/672930';
import { oW as _$$oW } from '../905/675859';
import { g as _$$g } from '../905/687265';
import { Qr as _$$Qr } from '../905/690539';
import { a as _$$a7 } from '../905/693578';
import { e0 as _$$e4 } from '../905/696396';
import { getSingletonSceneGraph } from '../905/700578';
import { s as _$$s6 } from '../905/702260';
import { L as _$$L2 } from '../905/704296';
import { G as _$$G6 } from '../905/707993';
import { M4 } from '../905/713695';
import { logError } from '../905/714362';
import { pn as _$$pn } from '../905/714538';
import { SvgComponent } from '../905/714743';
import { i as _$$i7 } from '../905/718764';
import { h4 as _$$h11, Nz as _$$Nz2 } from '../905/720338';
import { N as _$$N1 } from '../905/720559';
import { Point } from '../905/736624';
import { DV } from '../905/739964';
import { A as _$$A22 } from '../905/744692';
import { T as _$$T3 } from '../905/745591';
import { l as _$$l4 } from '../905/745972';
import { F_ as _$$F_, od as _$$od, Ao } from '../905/748636';
import { H as _$$H6 } from '../905/748658';
import { G as _$$G9 } from '../905/750789';
import { tH as _$$tH, H4 } from '../905/751457';
import { g as _$$g2 } from '../905/757007';
import { WB } from '../905/761735';
import { I as _$$I3 } from '../905/783004';
import { z as _$$z3 } from '../905/788559';
import { c$ as _$$c$6, l6 as _$$l1, sK as _$$sK, tV as _$$tV } from '../905/794875';
import { X as _$$X7 } from '../905/797503';
import { W as _$$W9 } from '../905/798224';
import { K as _$$K7 } from '../905/799615';
import { J as _$$J4 } from '../905/799737';
import { f as _$$f3 } from '../905/809171';
import { e as _$$e15 } from '../905/810361';
import { x as _$$x3 } from '../905/811596';
import { EventShield } from '../905/821217';
import { z as _$$z12 } from '../905/821223';
import { z as _$$z4 } from '../905/825185';
import { vL as _$$vL } from '../905/826900';
import { dY as _$$dY, sU as _$$sU, Wh as _$$Wh, WM as _$$WM } from '../905/838765';
import { q as _$$q } from '../905/838985';
import { useCurrentUserOrg } from '../905/845253';
import { BK, Um } from '../905/848862';
import { K as _$$K3 } from '../905/851274';
import { EL, F_ } from '../905/858282';
import { isVsCodeEnvironment } from '../905/858738';
import { qB } from '../905/862321';
import { h as _$$h7 } from '../905/864281';
import { Ay as _$$Ay7 } from '../905/865071';
import { bL as _$$bL, c$ as _$$c$2, RT } from '../905/867927';
import { defaultSessionLocalID, defaultSessionLocalIDString, isValidSessionLocalID, parseSessionLocalID, sessionLocalIDToString } from '../905/871411';
import { generateUUIDv4 } from '../905/871474';
import { b as _$$b11 } from '../905/874849';
import { d as _$$d6 } from '../905/884707';
import { k as _$$k9 } from '../905/888808';
import { DM } from '../905/889062';
import { A as _$$A20 } from '../905/891805';
import { Z as _$$Z2 } from '../905/909123';
import { ManuallyLabeledCheckbox } from '../905/909715';
import { XHR, XHRError } from '../905/910117';
import { _L as _$$_L, bL as _$$bL2 } from '../905/911410';
import { F as _$$F5 } from '../905/911981';
import { e as _$$e12 } from '../905/916195';
import { $S, $Y } from '../905/918620';
import { A as _$$A21 } from '../905/920165';
import { X as _$$X4 } from '../905/924044';
import { A as _$$A16 } from '../905/925160';
import { a as _$$a11 } from '../905/925868';
import { j7 as _$$j2, oB as _$$oB, sf as _$$sf } from '../905/929976';
import { z as _$$z8 } from '../905/931953';
import { q as _$$q2 } from '../905/932270';
import { I as _$$I4 } from '../905/932503';
import { lQ as _$$lQ } from '../905/934246';
import { O as _$$O } from '../905/936515';
import { sD as _$$sD } from '../905/937198';
import { f as _$$f0 } from '../905/940356';
import { sx as _$$sx2 } from '../905/941192';
import { R as _$$R3 } from '../905/943003';
import { b as _$$b7 } from '../905/946806';
import { B as _$$B3 } from '../905/950875';
import { A as _$$A11 } from '../905/956262';
import { r as _$$r } from '../905/957643';
import { cn as _$$cn } from '../905/959568';
import { a as _$$a4 } from '../905/964520';
import { b as _$$b8 } from '../905/966382';
import { xp as _$$xp } from '../905/966582';
import { O as _$$O4 } from '../905/969533';
import { d as _$$d2 } from '../905/976845';
import { J as _$$J12 } from '../905/980942';
import { TextWithTruncation } from '../905/984674';
import { b as _$$b10 } from '../905/985254';
import { h1 as _$$h5 } from '../905/986103';
import { resourceUtils } from '../905/989992';
import { NONE_SYMBOL as _$$H5 } from '../905/992467';
import { h as _$$h12 } from '../905/994594';
import { X as _$$X3 } from '../905/999307';
import { H as _$$H8 } from '../905/999677';
import { nt as _$$nt } from '../1156/71049';
import { u as _$$u5 } from '../1156/83782';
import { d as _$$d8 } from '../1156/154963';
import { D as _$$D3 } from '../1156/189378';
import { E as _$$E3 } from '../1156/200958';
import { hJ as _$$hJ, AA, Kj } from '../1156/201513';
import { q as _$$q3 } from '../1156/234923';
import { lN as _$$lN } from '../1156/250784';
import { V as _$$V2 } from '../1156/291626';
import { Oz } from '../1156/354790';
import { cG as _$$cG, ls as _$$ls, lV as _$$lV2, p1 as _$$p7, p_ as _$$p_, Gt } from '../1156/395731';
import { oR as _$$oR, oU as _$$oU, qE as _$$qE, Hu, Pd } from '../1156/418246';
import { S as _$$S7 } from '../1156/521776';
import { Lh, UP, Uy } from '../1156/578260';
import { m as _$$m7 } from '../1156/605578';
import { K as _$$K4 } from '../1156/668894';
import { t as _$$t4 } from '../1156/670515';
import { y as _$$y8 } from '../1156/673497';
import { h5 as _$$h8 } from '../1156/717481';
import { $i, eq as _$$eq, HB as _$$HB, hj as _$$hj, kx as _$$kx, S$ as _$$S$, t$ as _$$t$, wj as _$$wj, NR, OU, Xe } from '../1156/721826';
import { X as _$$X } from '../1156/731676';
import { D as _$$D } from '../1156/759811';
import { r as _$$r5 } from '../1156/791040';
import { A as _$$A8 } from '../1156/829829';
import { P as _$$P4 } from '../1156/852405';
import { S1 as _$$S8 } from '../1156/867089';
import { n as _$$n6 } from '../1156/930733';
import { sl as _$$sl } from '../1156/993639';
import { l as _$$l0 } from '../1250/91689';
import { y as _$$y6 } from '../1250/295724';
import { B as _$$B5 } from '../1250/314515';
import { M as _$$M } from '../1250/475573';
import { QU } from '../1250/559338';
import { g as _$$g3 } from '../1250/701065';
import { R as _$$R8 } from '../1250/835893';
import { ev as _$$ev } from '../1250/868645';
import { V as _$$V4 } from '../1250/925098';
import { v2 as _$$v4 } from '../1528/88743';
import { e as _$$e, N as _$$N } from '../1528/93111';
import { b as _$$b9 } from '../1528/127188';
import { Q as _$$Q11 } from '../1528/190444';
import { RK as _$$RK } from '../1528/277451';
import { n as _$$n5 } from '../1528/289390';
import { wu as _$$wu } from '../1528/306300';
import { _ as _$$_7 } from '../1528/446737';
import { f as _$$f10 } from '../1528/716387';
import { J as _$$J10 } from '../1556/905117';
import { J as _$$J6 } from '../1577/181415';
import { V as _$$V5 } from '../1577/311426';
import { L as _$$L } from '../1577/392861';
import { A as _$$A12 } from '../3276/701353';
import { NuxOnboardingOverlay } from '../4452/529989';
import { z as _$$z0 } from '../5132/283698';
import { t as _$$t1 } from '../5132/435788';
import { J as _$$J8 } from '../5132/948584';
import { $q, dD as _$$dD, fw as _$$fw, g_ as _$$g_2, gn as _$$gn, sH as _$$sH, u3 as _$$u3, L9, WW, Yd, Yh } from '../5421/58503';
import { r as _$$r4 } from '../5421/109125';
import { m as _$$m2 } from '../5421/111531';
import { q as _$$q0 } from '../5421/116496';
import { q as _$$q6, y as _$$y7 } from '../5421/145480';
import { a as _$$a3 } from '../5421/219397';
import { Ay as _$$Ay6 } from '../5421/231229';
import { u as _$$u2 } from '../5421/310610';
import { HL as _$$HL, m$ as _$$m$, xF as _$$xF, DY } from '../5421/389127';
import { d as _$$d3, k as _$$k5 } from '../5421/548912';
import { p as _$$p9 } from '../5421/559978';
import { _ as _$$_3 } from '../5421/566691';
import { D as _$$D8 } from '../5421/592431';
import { rC as _$$rC2 } from '../5421/658325';
import { Z0 as _$$Z8 } from '../5421/670646';
import { U as _$$U2 } from '../5421/699069';
import { h as _$$h16, t as _$$t0 } from '../5421/711842';
import { A as _$$A6 } from '../5421/738450';
import { m as _$$m5 } from '../5421/747859';
import { E as _$$E } from '../5421/797890';
import { a1 as _$$a17, dT as _$$dT, wU as _$$wU, y7 as _$$y10 } from '../5421/828271';
import { qd } from '../5421/889757';
import { I as _$$I6 } from '../5421/927984';
import { S as _$$S } from '../5421/959002';
import { d as _$$d7 } from '../5421/986644';
import { a as _$$a13 } from '../5430/14230';
import { T as _$$T4 } from '../5430/528285';
import { Q as _$$Q3 } from '../5430/662041';
import { k as _$$k3 } from '../5430/846627';
import _require3 from '../5609/597604';
import { O as _$$O7 } from '../6020/752349';
import { A as _$$A17, n as _$$n9 } from '../6020/932863';
import { C5 as _$$C3 } from '../7021/95197';
import { q as _$$q1 } from '../8826/33573';
import { Vy } from '../8826/611318';
import _require from '../9197/669197';
import { s as _$$s1 } from '../9314/287043';
import { Q as _$$Q1 } from '../9314/475980';
import { A as _$$A18 } from '../9314/687951';
import { En as _$$En, Ty as _$$Ty } from '../9410/28424';
import { b as _$$b3, G as _$$G2 } from '../9410/59055';
import { W as _$$W5 } from '../9410/92046';
import { A as _$$A13 } from '../9410/103334';
import { J as _$$J3 } from '../9410/165619';
import { A as _$$A2 } from '../9410/188255';
import { H as _$$H7 } from '../9410/195555';
import { e5 as _$$e11, gA as _$$gA, MO as _$$MO } from '../9410/228031';
import { l as _$$l2 } from '../9410/331071';
import { uF as _$$uF2 } from '../9410/398228';
import { EA } from '../9410/499229';
import { w as _$$w2 } from '../9410/519056';
import { _ as _$$_11, b as _$$b13 } from '../9410/595260';
import { J as _$$J1 } from '../9410/614829';
import { K as _$$K6 } from '../9410/617561';
import { Q as _$$Q6 } from '../9410/629866';
import { l9 as _$$l6, SZ as _$$SZ, t7 as _$$t5, x$ as _$$x$, Fp } from '../9410/692397';
import { q0 } from '../9410/695259';
import { Nz, X5 } from '../9410/728210';
import { G as _$$G } from '../9410/729166';
import { ut as _$$ut2, WS } from '../9410/747144';
import { s as _$$s0 } from '../9410/760762';
import { n as _$$n0 } from '../9410/783801';
import { qn, XI } from '../9410/793186';
import { c as _$$c2 } from '../9410/794676';
import { v7 as _$$v6 } from '../9410/896213';
import { v as _$$v } from '../9410/916286';
import { B as _$$B7 } from '../9410/966396';
import { sk as _$$sk } from '../9410/973081';
import { yh as _$$yh } from '../9410/974031';
import { z as _$$z1 } from '../940032c6/245112';
import { z as _$$z7 } from '../940032c6/265110';
import { T as _$$T5 } from '../940032c6/307867';
import { a as _$$a10 } from '../940032c6/310444';
import { n as _$$n } from '../940032c6/563173';
import { uC as _$$uC, K1 } from '../940032c6/718024';
import { A as _$$A15 } from '../af221b13/388839';
import { A as _$$A9 } from '../b2835def/114344';
import ha from '../b2835def/987714';
import { d as _$$d4 } from '../c5e2cae0/368426';
import { s as _$$s4 } from '../cssbuilder/589278';
import _require2 from '../f2246930/453829';
import { getWorkshopModeStatus } from '../figma_app/789';
import { at as _$$at, lz as _$$lz, N as _$$N4, uy as _$$uy, we as _$$we, Ab, Iv, R0, Vc, ZH } from '../figma_app/987';
import { bY as _$$bY, Jj } from '../figma_app/2023';
import { l4 as _$$l5, __X, bbp, Bd, BZN, Htp, KYV, Nbd, p2q, sfE, TtK, zpn } from '../figma_app/6204';
import { H as _$$H } from '../figma_app/7677';
import { jQ as _$$jQ, s9 as _$$s, uR as _$$uR, Dm, J7, Qx, Uu, V6, Zn } from '../figma_app/8833';
import { k2 as _$$k8 } from '../figma_app/10554';
import { lW as _$$lW2 } from '../figma_app/11182';
import { dC as _$$dC, iO as _$$iO, lf as _$$lf, lT as _$$lT, Mj as _$$Mj, ou as _$$ou, rx as _$$rx, UU } from '../figma_app/11329';
import { hv as _$$hv, YZ as _$$YZ, BW, WD, z_ } from '../figma_app/11610';
import { EI } from '../figma_app/21029';
import { a1 as _$$a } from '../figma_app/23780';
import { mg as _$$mg, atom, atomStoreManager, createRemovableAtomFamily, useAtomValueAndSetter, useAtomWithSubscription, Ut, Xr } from '../figma_app/27355';
import { MGP } from '../figma_app/27776';
import { AssetAtomMap } from '../figma_app/31188';
import { bi as _$$bi, cT as _$$cT, g_ as _$$g_, TU as _$$TU, vr as _$$vr, GQ } from '../figma_app/32128';
import { hM as _$$hM, Sn as _$$Sn } from '../figma_app/32891';
import { Y9 as _$$Y } from '../figma_app/42724';
import { pO as _$$pO } from '../figma_app/42945';
import { c as _$$c7 } from '../figma_app/43065';
import { FilePublishSitePermissions, SiteBundles, SiteMount, SiteMountWithPublishEvents, WebFontsForFile } from '../figma_app/43951';
import { ResourceTypeNoComment } from '../figma_app/45218';
import { H as _$$H3 } from '../figma_app/47866';
import { z as _$$z } from '../figma_app/47967';
import { kF as _$$kF2 } from '../figma_app/48566';
import { rH as _$$rH } from '../figma_app/49598';
import { R as _$$R7 } from '../figma_app/53049';
import { FEditorType, mapFileTypeToEditorType } from '../figma_app/53721';
import { $y, Cs as _$$Cs, cV as _$$cV } from '../figma_app/59509';
import { cF as _$$cF2, Az } from '../figma_app/61758';
import { addViewportOffset, getViewportInfo, computeFullscreenViewportForNode } from '../figma_app/62612';
import { Q as _$$Q13 } from '../figma_app/67145';
import { p7 as _$$p8, Ut as _$$Ut } from '../figma_app/72338';
import { Nw } from '../figma_app/78808';
import { getObservableOrFallback, getObservableValue } from '../figma_app/84367';
import { $5 } from '../figma_app/84580';
import { o0 as _$$o6, u3 as _$$u6, Kd } from '../figma_app/85384';
import { bS as _$$bS, u1 as _$$u7, FP, Uv, XE } from '../figma_app/91703';
import { Iy, XS } from '../figma_app/95367';
import { isNotNullish, isNullish } from '../figma_app/95419';
import { hE as _$$hE2, sO as _$$sO } from '../figma_app/97020';
import { Df, Jo, Xs } from '../figma_app/98483';
import { wg as _$$wg, LZ } from '../figma_app/101956';
import { Fz } from '../figma_app/106207';
import { S as _$$S9 } from '../figma_app/106763';
import { om as _$$om, ON } from '../figma_app/109413';
import { b5 as _$$b4, hi as _$$hi, iI as _$$iI, T_ as _$$T_, wh as _$$wh, xB as _$$xB, yq as _$$yq, zl as _$$zl, DW, Jl, LS, OY, UM, US, Wn, Xq, Y3, ZY, Zy } from '../figma_app/114522';
import { $e, bP as _$$bP, s0 as _$$s3, Nl } from '../figma_app/115923';
import { bm as _$$bm, g$ as _$$g$, Lc } from '../figma_app/116234';
import { _9 as _$$_6, qQ } from '../figma_app/119420';
import { n8 as _$$n7, Py as _$$Py, xG as _$$xG } from '../figma_app/121043';
import { I as _$$I } from '../figma_app/131348';
import { cu as _$$cu, rh as _$$rh, Mg } from '../figma_app/139865';
import { O as _$$O6 } from '../figma_app/142811';
import { VQ } from '../figma_app/144692';
import { hI as _$$hI } from '../figma_app/151766';
import { Tv as _$$Tv, I9 } from '../figma_app/151869';
import { S2 as _$$S0, GV, P5 } from '../figma_app/159296';
import { JR, Qp, Wi } from '../figma_app/162641';
import { dl as _$$dl, wd as _$$wd, O2 } from '../figma_app/164212';
import { z2 } from '../figma_app/165422';
import { wA as _$$wA2, Fk } from '../figma_app/167249';
import { buildUploadUrl, getInitialOptions } from '../figma_app/169182';
import { _t as _$$_t, dH as _$$dH, hr as _$$hr, RT as _$$RT, S5 as _$$S4, uw as _$$uw, V7 } from '../figma_app/171413';
import { JT as _$$JT } from '../figma_app/173838';
import { OU as _$$OU } from '../figma_app/175258';
import { N as _$$N3 } from '../figma_app/176280';
import { aQ as _$$aQ } from '../figma_app/176302';
import { U1 } from '../figma_app/178419';
import { $j, gq as _$$gq, j5 as _$$j0, Pd as _$$Pd, vD as _$$vD2, w2 as _$$w4, Ht, W4, Zp } from '../figma_app/178475';
import { R as _$$R2 } from '../figma_app/184628';
import { $P, dh as _$$dh, A$ } from '../figma_app/186343';
import { _Y as _$$_Y, KB as _$$KB, G_, QK } from '../figma_app/191312';
import { b as _$$b1 } from '../figma_app/192260';
import { $C, jx as _$$jx, Ic } from '../figma_app/198516';
import { yesNoTrackingEnum } from '../figma_app/198712';
import { a6 as _$$a14 } from '../figma_app/198840';
import { Xw } from '../figma_app/201694';
import { o0 as _$$o2, Nm } from '../figma_app/202307';
import { m as _$$m4 } from '../figma_app/203842';
import { b as _$$b12 } from '../figma_app/203891';
import { TS as _$$TS } from '../figma_app/205280';
import { q as _$$q5 } from '../figma_app/216831';
import { $K, me as _$$me } from '../figma_app/223206';
import { gc as _$$gc, tC as _$$tC, w5 as _$$w5, B8, F$, GR } from '../figma_app/229710';
import { c$ as _$$c$4, gw as _$$gw, wv as _$$wv } from '../figma_app/236327';
import { P as _$$P6 } from '../figma_app/237095';
import { F as _$$F2 } from '../figma_app/241247';
import { rM as _$$rM } from '../figma_app/241541';
import { StyleIdHandler } from '../figma_app/243058';
import { Q as _$$Q9 } from '../figma_app/246112';
import { MM as _$$MM, UP as _$$UP } from '../figma_app/246831';
import { Bf } from '../figma_app/249941';
import { Si as _$$Si, uQ as _$$uQ, PE } from '../figma_app/251115';
import { Pu, Py } from '../figma_app/251814';
import { aq as _$$aq } from '../figma_app/257798';
import { a as _$$a2 } from '../figma_app/258808';
import { e as _$$e0 } from '../figma_app/259678';
import { gs as _$$gs2, lt as _$$lt, Z0 } from '../figma_app/263905';
import { N as _$$N5 } from '../figma_app/268271';
import { hE as _$$hE, i3 as _$$i2, jk as _$$jk, nB as _$$nB, Pt as _$$Pt, vo as _$$vo, wi as _$$wi, Wk, Y9 } from '../figma_app/272243';
import { s4 as _$$s10, Zk as _$$Zk2 } from '../figma_app/276332';
import { q as _$$q9 } from '../figma_app/277543';
import { useSubscription } from '../figma_app/288654';
import { C_ as _$$C_ } from '../figma_app/290668';
import { em as _$$em } from '../figma_app/297957';
import { C9 as _$$C2, f6 as _$$f5, gz as _$$gz, pO as _$$pO2, tq as _$$tq, vD as _$$vD, wE as _$$wE, yj as _$$yj, I4, qe, XW } from '../figma_app/302802';
import { p as _$$p0 } from '../figma_app/304289';
import { I as _$$I2 } from '../figma_app/304633';
import { is as _$$is, Hg } from '../figma_app/304955';
import { t as _$$t7, z as _$$z5 } from '../figma_app/305141';
import { v as _$$v2 } from '../figma_app/306727';
import { vt as _$$vt2 } from '../figma_app/306946';
import { getProductType, logAndTrackCTA, mapFileToProductType } from '../figma_app/314264';
import { N as _$$N2 } from '../figma_app/316881';
import { KD, O1 } from '../figma_app/317394';
import { _i as _$$_i } from '../figma_app/319440';
import { ty as _$$ty, DT, Rm, Y2 } from '../figma_app/320164';
import { bL as _$$bL5, Y9 as _$$Y2, JU, UC, X0 } from '../figma_app/322555';
import { e as _$$e13 } from '../figma_app/324237';
import { $W, mC as _$$mC } from '../figma_app/325537';
import { C4 as _$$C7, kR as _$$kR, kS as _$$kS, n1 as _$$n4 } from '../figma_app/325912';
import { B as _$$B2 } from '../figma_app/327027';
import { gP as _$$gP, ve as _$$ve, OK } from '../figma_app/328423';
import { L6 } from '../figma_app/328825';
import { gm as _$$gm, pW as _$$pW2 } from '../figma_app/335781';
import { Jr as _$$Jr } from '../figma_app/338442';
import { Tj as _$$Tj2 } from '../figma_app/342207';
import { aV as _$$aV2, CQ as _$$CQ, lj as _$$lj, wc as _$$wc } from '../figma_app/346269';
import { Sk as _$$Sk } from '../figma_app/348938';
import { mv as _$$mv } from '../figma_app/350203';
import { Ig } from '../figma_app/350332';
import { p as _$$p3 } from '../figma_app/353099';
import { u as _$$u8 } from '../figma_app/353758';
import { Yh as _$$Yh } from '../figma_app/357047';
import { nC as _$$nC } from '../figma_app/357655';
import { V7 as _$$V, Hh } from '../figma_app/359181';
import { nl as _$$nl3 } from '../figma_app/359943';
import { $Y as _$$$Y, p4 as _$$p1, q0 as _$$q10, rb as _$$rb, Q5 } from '../figma_app/369750';
import { el as _$$el, y2 as _$$y4, MR } from '../figma_app/369767';
import { $v, lW as _$$lW, Q as _$$Q, tM as _$$tM, uh as _$$uh, AE } from '../figma_app/370763';
import { p as _$$p } from '../figma_app/372802';
import { G as _$$G3 } from '../figma_app/373780';
import { O as _$$O8 } from '../figma_app/373984';
import { LH } from '../figma_app/384673';
import { j$ as _$$j$, B4, NB } from '../figma_app/385215';
import { rC as _$$rC, Em } from '../figma_app/385874';
import { rq as _$$rq2 } from '../figma_app/386160';
import { HL, O5, PA, ZQ } from '../figma_app/387100';
import { j as _$$j4 } from '../figma_app/397127';
import { createIdentityFunction } from '../figma_app/404307';
import { _H as _$$_H2, ry as _$$ry } from '../figma_app/408883';
import { G7 } from '../figma_app/409807';
import { H as _$$H4 } from '../figma_app/423008';
import { b as _$$b0, yF as _$$yF, IL, MS, Rp, zQ } from '../figma_app/427309';
import { XW as _$$XW } from '../figma_app/427318';
import { B3, LE } from '../figma_app/427737';
import { d as _$$d11, s as _$$s12 } from '../figma_app/429226';
import { Ay as _$$Ay2 } from '../figma_app/432652';
import { JW } from '../figma_app/433317';
import { Ij } from '../figma_app/433401';
import { $0, dR as _$$dR, Ww } from '../figma_app/440875';
import { D as _$$D7 } from '../figma_app/446411';
import { Q as _$$Q10 } from '../figma_app/447352';
import { cP as _$$cP, dg as _$$dg, vX as _$$vX } from '../figma_app/451499';
import { o3 as _$$o3, O0 } from '../figma_app/452252';
import { additionalValue, fullscreenValue } from '../figma_app/455680';
import { useCurrentPublicPlan, useIsStarterOrProPlan, useIsStarterPlan, useTeamPlanFeatures, useTeamPlanPublicInfo } from '../figma_app/465071';
import { assert, debug, throwTypeError } from '../figma_app/465776';
import { _ as _$$_2 } from '../figma_app/467504';
import { _t as _$$_t2, VJ } from '../figma_app/471982';
import { i as _$$i5 } from '../figma_app/472709';
import { NP } from '../figma_app/473317';
import { D as _$$D2, o as _$$o4 } from '../figma_app/478029';
import { kG as _$$kG, Xo } from '../figma_app/482495';
import { P as _$$P } from '../figma_app/483257';
import { clamp, nearlyEqual } from '../figma_app/492908';
import { LinkPrimitive } from '../figma_app/496441';
import { t as _$$t8 } from '../figma_app/501766';
import { y as _$$y5 } from '../figma_app/504415';
import { selectCurrentFile, useCurrentFileKey, useIsCurrentUserCreator, useOpenFileLibraryKey } from '../figma_app/516028';
import { z as _$$z2 } from '../figma_app/516075';
import { h0 as _$$h10, o3 as _$$o7, Yu as _$$Yu, Zr as _$$Zr, B_ } from '../figma_app/525810';
import { VA } from '../figma_app/528509';
import { c as _$$c1 } from '../figma_app/528598';
import { tz as _$$tz } from '../figma_app/531331';
import { t as _$$t3 } from '../figma_app/532797';
import { B as _$$B6 } from '../figma_app/539422';
import { C4 as _$$C1, fG as _$$fG } from '../figma_app/540726';
import { r1 as _$$r7 } from '../figma_app/545877';
import { N0 } from '../figma_app/547638';
import { x as _$$x4 } from '../figma_app/550678';
import { S as _$$S2 } from '../figma_app/552746';
import { useIsSelectedFigmakeFullscreen, useToggleFigmakeMode } from '../figma_app/552876';
import { hl as _$$hl } from '../figma_app/553024';
import { A as _$$A, b as _$$b2 } from '../figma_app/556971';
import { td as _$$td, EB, FX } from '../figma_app/558805';
import { k as _$$k6 } from '../figma_app/564183';
import { $h, Tu as _$$Tu, uE as _$$uE, Mo, QM, VC } from '../figma_app/565242';
import { i as _$$i6 } from '../figma_app/566312';
import { getAtomMutate, setupMemoizedAtomSubscription, setupResourceAtomHandler } from '../figma_app/566371';
import { nc as _$$nc } from '../figma_app/570630';
import { nl as _$$nl, wk as _$$wk, JZ } from '../figma_app/572363';
import { $p, UA } from '../figma_app/580959';
import { gJ as _$$gJ, p3 as _$$p4, Xu } from '../figma_app/588582';
import { q as _$$q8 } from '../figma_app/590592';
import { S as _$$S5 } from '../figma_app/590972';
import { W as _$$W2 } from '../figma_app/592474';
import { Fj } from '../figma_app/594947';
import { ol as _$$ol } from '../figma_app/598018';
import { v4 as _$$v9, Qr } from '../figma_app/598952';
import { f7 as _$$f8, j4 as _$$j3, jr as _$$jr, Tn as _$$Tn, MO, Rv, Z7 } from '../figma_app/599979';
import { mU as _$$mU, x7 as _$$x6 } from '../figma_app/600968';
import { e as _$$e6 } from '../figma_app/601186';
import { a as _$$a12, z as _$$z10 } from '../figma_app/601188';
import { Bu } from '../figma_app/604494';
import { setupRemovableAtomFamily } from '../figma_app/615482';
import { $z, c as _$$c9, Ih } from '../figma_app/617427';
import { lV as _$$lV, AD, H5, MK } from '../figma_app/617606';
import { c5 as _$$c, c$ as _$$c$, gL as _$$gL, Tx as _$$Tx, Qw } from '../figma_app/618433';
import { _b as _$$_b, uP as _$$uP, Dw, HA, IX, Og, q9 } from '../figma_app/618665';
import { Fy } from '../figma_app/623300';
import { Jr, Mj, UD } from '../figma_app/624361';
import { gs as _$$gs } from '../figma_app/624706';
import { fI as _$$fI, jT as _$$jT, JU as _$$JU, ks as _$$ks2, Zk as _$$Zk } from '../figma_app/626177';
import { E as _$$E4, H as _$$H2 } from '../figma_app/626557';
import { o as _$$o } from '../figma_app/628776';
import { ay as _$$ay } from '../figma_app/628987';
import { n as _$$n2 } from '../figma_app/630671';
import { JT } from '../figma_app/632248';
import { LibraryTabEnum } from '../figma_app/633080';
import { CY as _$$CY, ks as _$$ks, Us } from '../figma_app/637027';
import { g as _$$g8 } from '../figma_app/638268';
import { UK } from '../figma_app/638601';
import { xn as _$$xn } from '../figma_app/644079';
import { $ as _$$$2 } from '../figma_app/644304';
import { _ as _$$_1 } from '../figma_app/645682';
import { _Z as _$$_Z, dx as _$$dx, gg as _$$gg, Sp as _$$Sp, Tj as _$$Tj, BM, IR, KB, Vp, W0 } from '../figma_app/649254';
import { P as _$$P3 } from '../figma_app/650304';
import { lg as _$$lg2, QY } from '../figma_app/651753';
import { _ as _$$_4 } from '../figma_app/658134';
import { X as _$$X2 } from '../figma_app/668312';
import { K3 } from '../figma_app/678300';
import { VF } from '../figma_app/679183';
import { wH as _$$wH } from '../figma_app/680166';
import { TJ as _$$TJ, YD } from '../figma_app/690664';
import { m as _$$m6 } from '../figma_app/694193';
import { f as _$$f4, K as _$$K } from '../figma_app/695131';
import { _o as _$$_o, GW, L3 } from '../figma_app/701001';
import { $X, B8 as _$$B0, gq as _$$gq2, oM as _$$oM, Eu, JQ, LU, Xc } from '../figma_app/703447';
import { AppView } from '../figma_app/707808';
import { wY as _$$wY } from '../figma_app/708845';
import { iE as _$$iE, r as _$$r8, Wv as _$$Wv } from '../figma_app/711157';
import { y0 as _$$y0 } from '../figma_app/718307';
import { aV as _$$aV, eY as _$$eY, f4 as _$$f2, p8 as _$$p2, s6 as _$$s2, KH, Mw } from '../figma_app/722362';
import { zp } from '../figma_app/740025';
import { sT as _$$sT, UK as _$$UK, EU, Ku, RU } from '../figma_app/740163';
import { addToSelection, getPropertiesPanelTab, normalizeTrackingEnum, removeFromSelection, renameNode, replaceSelection, setPropertiesPanelTab, transferSelection, updateHoveredNode } from '../figma_app/741237';
import { s as _$$s9 } from '../figma_app/749682';
import { wo as _$$wo } from '../figma_app/753501';
import { c as _$$c5 } from '../figma_app/763535';
import { AccessibilityAttributes, AppStateTsApi, ChatMessageType, CmsHelpers, CodeComponentHelper, Command, ComponentPropType, CustomPosition, DataLoadStatus, DesignGraphElements, DesignWorkspace, EqualityType, FontHelpers, FontSourceType, Fullscreen, GraphicObjectTypes, ImageExportType, InsertSourceType, ItemType, MatchType, MixedBlockType, Multiplayer, NodePropertyCategory, NodeTsApi, PanelType, PrototypingTsApi, SceneGraphHelpers, ScrollBehavior, SelectionPanelType, SideType, SitesBindingsCpp, SquareShapes, TextBlockType, TrackType, UIVisibilitySetting, UserInterfaceElements, VariableDataType, VariableResolvedDataType, ViewType } from '../figma_app/763686';
import { C as _$$C } from '../figma_app/765025';
import { e6 as _$$e1, hu as _$$hu, kI as _$$kI, TZ as _$$TZ, Ez } from '../figma_app/766708';
import { K2 } from '../figma_app/777551';
import { YW as _$$YW } from '../figma_app/778125';
import { getIsAndroidOrIphoneNotFigmaMobile } from '../figma_app/778880';
import { wV as _$$wV } from '../figma_app/779965';
import { parsePxInt, parsePxNumber } from '../figma_app/783094';
import { prototypeInteractionModalWidth, sitesFullscreenPreviewZ } from '../figma_app/786175';
import { Q as _$$Q2 } from '../figma_app/789979';
import { TL as _$$TL, wT as _$$wT, GC, RK, zA } from '../figma_app/791586';
import { uF as _$$uF, OP } from '../figma_app/792958';
import { _I as _$$_I } from '../figma_app/798608';
import { cR as _$$cR, iP as _$$iP, jd as _$$jd, NR as _$$NR, SJ as _$$SJ, So as _$$So, tV as _$$tV2, Ws as _$$Ws, ww as _$$ww, Br, GG, M0 } from '../figma_app/803054';
import { O as _$$O2 } from '../figma_app/806649';
import { fn as _$$fn2, s2 as _$$s8, Y9 as _$$Y5, Ad, DE } from '../figma_app/811257';
import { C5 as _$$C4, c$ as _$$c$3, h5 as _$$h4, mg as _$$mg2, oA as _$$oA2, Gu, Ve } from '../figma_app/812915';
import { Agb, G_h } from '../figma_app/822011';
import { fu as _$$fu } from '../figma_app/831799';
import { e as _$$e8 } from '../figma_app/831857';
import { F as _$$F3 } from '../figma_app/832508';
import { Q as _$$Q12 } from '../figma_app/834744';
import { _S as _$$_S, OS, WH } from '../figma_app/836943';
import { _j as _$$_j, ap as _$$ap, Cg as _$$Cg, rU as _$$rU, se as _$$se, K5 } from '../figma_app/843119';
import { W as _$$W8 } from '../figma_app/854365';
import { LoadingSpinner } from '../figma_app/858013';
import { n as _$$n1 } from '../figma_app/859750';
import { q as _$$q7 } from '../figma_app/860297';
import { b as _$$b5, bL as _$$bL3, mc as _$$mc, q7, Q$ } from '../figma_app/860955';
import { DF } from '../figma_app/861252';
import { A2 } from '../figma_app/872077';
import { y as _$$y3 } from '../figma_app/873852';
import { wh as _$$wh2, AP, OG } from '../figma_app/876589';
import { createRecordingCallback, generateRecordingKey, SKIP_RECORDING, useHandleChangeEvent, useHandleGenericEvent, useHandleKeyboardEvent, useHandleMouseEvent } from '../figma_app/878298';
import { w as _$$w7 } from '../figma_app/883622';
import { jr as _$$jr2, W0 as _$$W7 } from '../figma_app/896988';
import { isInteractionPathCheck, PN } from '../figma_app/897289';
import { i as _$$i8 } from '../figma_app/901786';
import { trackDefinedFileEventWithStore, trackFileEventWithStore, trackFileEventWithUser } from '../figma_app/901889';
import { $D as _$$$D, up as _$$up, HB, MT } from '../figma_app/903209';
import { j as _$$j1, k as _$$k1 } from '../figma_app/904944';
import { cF as _$$cF, iG as _$$iG2, LS as _$$LS, ZH as _$$ZH, P4, PR } from '../figma_app/911880';
import { z0 } from '../figma_app/914216';
import { zy } from '../figma_app/915202';
import { KJ } from '../figma_app/916560';
import { utilityNoop } from '../figma_app/918700';
import { vj as _$$vj, Ex, zE } from '../figma_app/919079';
import { useLatestRef } from '../figma_app/922077';
import { f as _$$f7 } from '../figma_app/924252';
import { capitalize, formatList, slugify } from '../figma_app/930338';
import { nh as _$$nh, Gb, Zl } from '../figma_app/933328';
import { h as _$$h13 } from '../figma_app/935454';
import { dA as _$$dA, U_, VR, Ws, zq } from '../figma_app/938628';
import { Ay as _$$Ay3 } from '../figma_app/948389';
import { rY as _$$rY } from '../figma_app/952035';
import { e as _$$e3 } from '../figma_app/952436';
import { p as _$$p6 } from '../figma_app/952952';
import { _q as _$$_q } from '../figma_app/957070';
import { tZ as _$$tZ, G6 } from '../figma_app/960196';
import { T as _$$T7 } from '../figma_app/962636';
import { hD as _$$hD, LI } from '../figma_app/970285';
import { zY } from '../figma_app/973219';
import { Lk, LN, X9, z7 } from '../figma_app/975811';
import { a2 as _$$a16, Ay as _$$Ay9, Cy as _$$Cy, n9 as _$$n12, HS } from '../figma_app/976110';
import { V3 } from '../figma_app/976345';
import { lg as _$$lg } from '../figma_app/976749';
import { kk as _$$kk, Hb } from '../figma_app/986594';
import { Mq } from '../figma_app/991591';
import { bA as _$$bA, j$ as _$$j$2, oD as _$$oD, tE as _$$tE, F8 } from '../figma_app/991782';
import { _l as _$$_l } from '../figma_app/995208';
import aQ from '../vendor/3757';
import { createHeadlessEditor } from '../vendor/24766';
import { s as _$$s14 } from '../vendor/45699';
import { V as _$$V3 } from '../vendor/71542';
import { n as _$$n8 } from '../vendor/110313';
import { FB, qg, ZN } from '../vendor/149334';
import { vF as _$$vF } from '../vendor/150583';
import jJ from '../vendor/197638';
import _v from '../vendor/200551';
import { g as _$$g6 } from '../vendor/202032';
import { cJ as _$$cJ2 } from '../vendor/210601';
import { A as _$$A14 } from '../vendor/211731';
import { _U as _$$_U, DP } from '../vendor/261608';
import { j as _$$j8 } from '../vendor/282386';
import { P as _$$P7 } from '../vendor/348225';
import { $findMatchingParent, $wrapNodeInElement, mergeRegister } from '../vendor/425002';
import { E as _$$E9 } from '../vendor/464923';
import { T as _$$T6 } from '../vendor/513042';
import { Q as _$$Q8 } from '../vendor/568295';
import { _ as _$$_8 } from '../vendor/646701';
import { TW as _$$TW, YZ, Zk } from '../vendor/677121';
import { d as _$$d0 } from '../vendor/683721';
import { a as _$$a9 } from '../vendor/683966';
import { $convertFromMarkdownString, BOLD_ITALIC_STAR, BOLD_ITALIC_UNDERSCORE, BOLD_STAR, BOLD_UNDERSCORE, HEADING, ITALIC_STAR, ITALIC_UNDERSCORE, LINK, ORDERED_LIST, QUOTE, STRIKETHROUGH, UNORDERED_LIST } from '../vendor/693164';
import { E as _$$E0 } from '../vendor/807288';
import { A as _$$A4 } from '../vendor/850789';
import { Q as _$$Q7 } from '../vendor/898216';
import { $ as _$$$3 } from '../vendor/909072';
import { N as _$$N10 } from '../vendor/930821';
import { G as _$$G7 } from '../vendor/947080';
import { F as _$$F7 } from '../vendor/961806';
import { Ec, RZ } from '../vendor/969425';
let n;
let v = y;
let S = createContext({
  zoomScale: 1,
  selectedNodeId: null,
  hoveredNodeId: null,
  selectedNodeParentResponsiveSetId: null
});
let C = memo(e => {
  return jsx('svg', {
    width: '16',
    height: '16',
    fill: 'none',
    viewBox: '0 0 16 16',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M4.465 8a.5.5 0 0 1 .707.708l-.732.732a1.5 1.5 0 1 0 2.121 2.121l.732-.732a.5.5 0 0 1 .707.707l-.732.732a2.5 2.5 0 0 1-3.535-3.535zm7.307 3.772a.5.5 0 0 1 .629-.064l.078.064.375.375.064.078a.5.5 0 0 1-.693.694l-.078-.065-.375-.375-.065-.078a.5.5 0 0 1 .065-.629m-2.25-2.25a.5.5 0 0 1 .629-.064l.078.064.75.75.064.078a.5.5 0 0 1-.693.694l-.078-.065-.75-.75-.065-.078a.5.5 0 0 1 .065-.629m-2.25-2.25a.5.5 0 0 1 .629-.064l.078.064.75.75.064.078a.5.5 0 0 1-.693.694l-.078-.065-.75-.75-.065-.078a.5.5 0 0 1 .065-.629m1.46-3.539a2.5 2.5 0 1 1 3.536 3.535l-.732.733a.5.5 0 0 1-.707-.707l.732-.733A1.5 1.5 0 0 0 9.44 4.44l-.733.732A.5.5 0 0 1 8 4.465zm-3.71 1.29a.5.5 0 0 1 .629-.065l.078.064.75.75.064.078a.5.5 0 0 1-.693.694l-.078-.065-.75-.75-.065-.078a.5.5 0 0 1 .065-.629M3.147 3.146a.5.5 0 0 1 .629-.064l.078.064.375.375.064.078a.5.5 0 0 1-.693.694l-.078-.065-.375-.375-.065-.078a.5.5 0 0 1 .065-.629'
    })
  });
});
let T = 'cms_binding_indicators--indicator--Klszv';
function I({
  focused: e,
  icon: t,
  onClickUnbind: i,
  name: n,
  repeater: a,
  onMouseOver: s,
  onMouseLeave: r
}) {
  return jsxs('div', {
    onMouseOver: s,
    onMouseLeave: r,
    className: v()('cms_binding_indicators--pill--cFvFK', e && 'cms_binding_indicators--focused--hIPAx', a && 'cms_binding_indicators--repeater--ZbL1Z'),
    children: [jsx('div', {
      className: 'cms_binding_indicators--icon--ztoSP',
      children: t
    }), jsx('div', {
      className: 'cms_binding_indicators--label--fjIB5',
      children: n
    }), jsx('div', {
      tabIndex: 0,
      role: 'button',
      className: 'cms_binding_indicators--detach--R138b',
      onClick: i,
      children: jsx(C, {})
    })]
  });
}
function E({
  left: e,
  top: t,
  collectionId: i,
  guid: n,
  repeater: s
}) {
  let o = _$$gL(i).data;
  let {
    zoomScale,
    selectedNodeId,
    hoveredNodeId,
    selectedNodeParentResponsiveSetId
  } = useContext(S);
  let x = useCallback(() => {
    let e = getSingletonSceneGraph().get(n);
    e && _$$l.user('dakota-set-collection-binding', () => {
      e.setDakotaSelectorCollection('', InsertSourceType.CMS_CONNECT_MODE);
    });
  }, [n]);
  let m = useCallback(() => {
    updateHoveredNode(n);
  }, [n]);
  let g = useCallback(() => {
    updateHoveredNode('');
  }, []);
  if (!o) return null;
  let f = e * zoomScale - 1;
  let y = t * zoomScale - (s ? 1 : 46);
  let C = {
    transform: `translate(${s ? `calc(${f}px - 100%)` : `${f}px`}, ${s ? `${y}px` : `calc(${y}px - 100%)`})`
  };
  return jsx('div', {
    style: C,
    className: v()(Dm, T),
    children: jsx(I, {
      focused: selectedNodeId === n || hoveredNodeId === n || selectedNodeParentResponsiveSetId === n,
      icon: jsx(_$$r, {}),
      name: o.name,
      onClickUnbind: x,
      repeater: s,
      onMouseOver: m,
      onMouseLeave: g
    })
  });
}
function A({
  collectionId: e,
  fieldSchemaId: t,
  focused: i,
  guid: n
}) {
  let s = (_$$uE(e) ?? []).find(e => e.id === t);
  let o = useCallback(() => {
    let e = s?.fieldType;
    e && SceneGraphHelpers && (SceneGraphHelpers.clearSelection(), SceneGraphHelpers.addToSelection([n]), fullscreenValue.triggerActionEnumInUserEditScope(Command.UNBIND_SELECTION, {
      fieldSchemaId: t,
      fieldType: e,
      removeBoundData: !1
    }));
  }, [n, t, s?.fieldType]);
  let d = useCallback(() => {
    updateHoveredNode(n);
  }, [n]);
  let c = useCallback(() => {
    updateHoveredNode('');
  }, []);
  return s ? jsx(I, {
    focused: i,
    icon: _$$Tu(s.fieldType),
    name: s.name,
    onClickUnbind: o,
    onMouseOver: d,
    onMouseLeave: c
  }) : null;
}
function L({
  guid: e,
  left: t,
  top: i,
  aliasValues: n,
  isHiddenRepeaterChild: s
}) {
  let {
    zoomScale,
    selectedNodeId,
    hoveredNodeId
  } = useContext(S);
  let c = {
    transform: `translate(${t * zoomScale - 1}px, calc(${i * zoomScale - 6}px - 100%))`
  };
  let u = selectedNodeId === e || hoveredNodeId === e;
  return s && !u ? null : jsx('div', {
    style: c,
    className: v()(Dm, T),
    children: n.filter((e, t, i) => t === i.findIndex(t => t.fieldSchemaId === e.fieldSchemaId)).map(t => zoomScale < 0.1 ? null : jsx(A, {
      collectionId: t.collectionId,
      fieldSchemaId: t.fieldSchemaId,
      focused: u,
      guid: e
    }, `${t.collectionId}-${t.fieldSchemaId}`))
  });
}
function F({
  children: e
}) {
  let t = useRef(null);
  let [i, n] = useState(null);
  useEffect(() => {
    if (t.current) {
      let e = t.current.attachShadow({
        mode: 'open'
      });
      let i = document.createElement('style');
      i.nonce = getInitialOptions().csp_nonce;
      i.textContent = '/** @postcss-export-raw */\n.cms_binding_indicators--container--AGBTv {\n  position: relative;\n  /* stylelint-disable-next-line @fpl/no-manual-z-index */\n  z-index: 0;\n}\n.cms_binding_indicators--indicator--Klszv {\n  position: absolute;\n  width: max-content;\n  display: flex;\n  flex-direction: row;\n  gap: 2px;\n  height: 24px;\n  align-items: flex-start;\n  /* stylelint-disable-next-line @fpl/no-manual-z-index */\n  z-index: 0;\n}\n/* When a pill is hovered or focused, it should appear above other pills in the z-index stack.\n   This is particularly important for Repeaters where multiple indicators may overlap. */\n.cms_binding_indicators--indicator--Klszv:has(.cms_binding_indicators--pill--cFvFK:hover, .cms_binding_indicators--pill--cFvFK.cms_binding_indicators--focused--hIPAx) {\n  /* stylelint-disable-next-line @fpl/no-manual-z-index */\n  z-index: 1;\n}\n.cms_binding_indicators--pill--cFvFK {\n  /* stylelint-disable-next-line @fpl/color-semantic-token-spellcheck */\n  background-color: var(--ramp-violet-300);\n\n  /* stylelint-disable @figma/color-no-raw -- TODO: Figure out how to use brand colors in a shadowroot */\n  color: #443deb;\n  --color-icon: #443deb;\n  /* stylelint-enable @figma/color-no-raw */\n\n  border-radius: 5px;\n  display: flex;\n  gap: 1px;\n  justify-content: center;\n  pointer-events: auto;\n  font-size: 11px;\n  line-height: 16px;\n}\n.cms_binding_indicators--pill--cFvFK.cms_binding_indicators--repeater--ZbL1Z {\n    border-radius: 5px 0 0 5px;\n  }\n.cms_binding_indicators--icon--ztoSP {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px 0 4px 4px;\n}\n.cms_binding_indicators--label--fjIB5 {\n  display: block;\n  padding: 4px 6px 4px 0;\n}\n.cms_binding_indicators--detach--R138b {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  /* stylelint-disable-next-line @fpl/color-semantic-token-spellcheck */\n  border-left: 1px solid var(--ramp-violet-800);\n  padding: 0 6px 0 4px;\n}\n.cms_binding_indicators--pill--cFvFK:hover,\n.cms_binding_indicators--pill--cFvFK.cms_binding_indicators--focused--hIPAx {\n  /* stylelint-disable-next-line @fpl/color-semantic-token-spellcheck */\n  background-color: var(--ramp-violet-700);\n  /* TODO: Figure out how to use brand colors in a shadowroot */\n  /* stylelint-disable-next-line @figma/color-no-raw */\n  color: white;\n  /* stylelint-disable-next-line @figma/color-no-raw */\n  --color-icon: white;\n}\n.cms_binding_indicators--pill--cFvFK:hover .cms_binding_indicators--label--fjIB5, .cms_binding_indicators--pill--cFvFK.cms_binding_indicators--focused--hIPAx .cms_binding_indicators--label--fjIB5 {\n    padding-right: 4px;\n  }\n.cms_binding_indicators--pill--cFvFK:hover .cms_binding_indicators--detach--R138b, .cms_binding_indicators--pill--cFvFK.cms_binding_indicators--focused--hIPAx .cms_binding_indicators--detach--R138b {\n    display: flex;\n  }\n';
      e.append(i);
      n(e);
    }
  }, []);
  return jsx('div', {
    'ref': t,
    'data-testid': 'cms-shadow-dom-container',
    'className': v()('cms_binding_indicators--container--AGBTv', Dm, Uu),
    'children': i && createPortal(e, i)
  });
}
let U = () => {
  let e = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  return useMemoStable(() => e, [e]);
};
let K = memo(({
  children: e
}) => {
  let t = Mw();
  let i = t?.guid ?? null;
  let n = t ? findContainingResponsiveSet(t)?.guid ?? null : null;
  let r = useSelector(e => e.mirror.appModel.hoveredNode);
  let o = U();
  let d = useMemo(() => ({
    zoomScale: o.zoomScale,
    selectedNodeId: i,
    hoveredNodeId: r,
    selectedNodeParentResponsiveSetId: n
  }), [o, i, r, n]);
  return jsx(_$$J, {
    brand: 'seascape',
    children: jsx('div', {
      style: {
        position: 'absolute',
        top: `${o.y + o.height / 2}px`,
        left: `${o.x + o.width / 2}px`,
        transform: `translate(${-o.offsetX * o.zoomScale}px, calc(${-o.offsetY * o.zoomScale}px))`
      },
      children: jsx(S.Provider, {
        value: d,
        children: e
      })
    })
  });
});
function H() {
  let e = getSingletonSceneGraph();
  let t = getObservableOrFallback(AppStateTsApi.dakotaBindings().nodeIdToSelectorMap);
  let i = getObservableOrFallback(AppStateTsApi.dakotaBindings().nodeIdToAliasMap);
  let n = [];
  let a = [];
  for (let [t, n] of i) {
    let i = e.get(t);
    if (!i) continue;
    let s = i.absoluteBoundingBox;
    let r = s.x;
    let o = s.y;
    a.push(jsx(L, {
      guid: t,
      left: r,
      top: o,
      aliasValues: n,
      isHiddenRepeaterChild: i.isInDakotaRepeater && !i.isInFirstDakotaRepeaterChild()
    }, t));
  }
  for (let [i, a] of t) {
    let t = e.get(i);
    if (t && a.collectionId) {
      let e = t.absoluteBoundingBox;
      let i = e.x;
      let s = e.y;
      n.push(jsx(E, {
        left: i,
        top: s,
        collectionId: a.collectionId,
        guid: t.guid,
        repeater: t.type === 'REPEATER'
      }, t.guid));
    }
  }
  return jsxs(K, {
    children: [n, a]
  });
}
function q() {
  return _$$e() ? jsx(_$$p, {
    forceNoScroll: !0,
    children: jsx(F, {
      children: jsx(H, {})
    })
  }) : null;
}
function Y() {
  let e = BK('DAKOTA_ITEM_DROPDOWN');
  let t = e.data?.layoutSetId || '';
  let i = getViewportInfo({
    subscribeToUpdates_expensive: !1
  });
  let n = e.data?.dakotaItemId || '';
  let a = Mw();
  let s = Vp(e.data?.dakotaCollectionId);
  let r = VC(e.data?.dakotaCollectionId);
  if (!(e.showing && t && s.data.length > 0)) return null;
  let o = function (e, t, i) {
    let n = getSingletonSceneGraph().get(e);
    if (!n) {
      return {
        top: 0,
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        width: 0
      };
    }
    let l = n.absoluteBoundingBox;
    let a = l.x;
    let s = l.y;
    let r = addViewportOffset(t, {
      x: a,
      y: s
    });
    let o = document.createElement('canvas').getContext('2d');
    let d = 0;
    o && (o.font = '11px Inter', d = o.measureText(`${n.name}/ `).width);
    r.x += 36 + d;
    r.y -= 24 + 24 * i + 8 + 6;
    return {
      top: r.y,
      bottom: r.y + 24,
      height: 24,
      left: r.x,
      right: r.x,
      width: 0
    };
  }(t, i, s.data.findIndex(e => e.id === n));
  return jsx(_$$Cf, {
    targetRect: o,
    type: _$$it.DEFAULT,
    minWidth: 50,
    maxWidth: 320,
    leanPadding: 32,
    displayOverTarget: !0,
    lean: 'right',
    children: s.data.map(e => {
      let t = e.id;
      let i = e.fields?.find(e => e.fieldSchemaId === r)?.value ?? '';
      return jsx(_$$a, {
        text: i,
        isChecked: n === t,
        isEnabled: !0,
        onClick: () => {
          _$$l.user('cms-set-item-page-item', () => {
            a?.setDakotaSelectorSingleItemFilter(t ?? '');
          });
        }
      }, t);
    })
  });
}
function ei(e, t) {
  let i = new Map();
  for (let e of t) e.id && e.fieldType && i.set(e.id, e.fieldType);
  let n = {};
  for (let t of e.fields ?? []) {
    let e = i.get(t.fieldSchemaId);
    if (e === _$$_j.RICH_TEXT) {
      let e = function (e) {
        if (additionalValue === null) throw new Error('variablesJsRuntimeAliasTsBindings is null');
        let t = {
          type: VariableDataType.STRING,
          resolvedType: VariableResolvedDataType.STRING,
          value: e
        };
        return {
          type: VariableDataType.JS_RUNTIME_ALIAS,
          resolvedType: VariableResolvedDataType.STRING,
          value: {
            lookupKey: additionalValue.storeVariableData(t)
          }
        };
      }(t.value || '');
      n[t.fieldSchemaId] = e;
    } else if (e === _$$_j.LINK) {
      let e = function (e) {
        try {
          let t = _$$se.parse(JSON.parse(e));
          if (t) {
            return {
              type: VariableDataType.LINK,
              resolvedType: VariableResolvedDataType.LINK,
              value: t
            };
          }
        } catch (e) {
          reportError(_$$e2.CMS, new Error('could not parse CMS link field value'), {
            extra: e
          });
        }
      }(t.value ?? '');
      e && (n[t.fieldSchemaId] = e);
    } else if (e === _$$_j.IMAGE) {
      let e = function (e) {
        if (e) {
          try {
            let t = _$$Cg.parse(JSON.parse(e));
            if (t) {
              return {
                type: VariableDataType.IMAGE,
                resolvedType: VariableResolvedDataType.IMAGE,
                value: (({
                  fileName: e,
                  ...t
                }) => t)(t)
              };
            }
          } catch (e) {
            reportError(_$$e2.CMS, new Error('could not parse CMS image field value'), {
              extra: e
            });
          }
        }
      }(t.value ?? '');
      e && (n[t.fieldSchemaId] = e);
    } else if (e === _$$_j.DATE) {
      let e = function (e) {
        let t = {
          year: 0,
          month: 0,
          day: 0,
          hour: 0,
          minute: 0,
          offset: 0
        };
        if (e) {
          try {
            let i = new Date(e);
            isNaN(i.getTime()) || (t = {
              year: i.getFullYear(),
              month: i.getMonth() + 1,
              day: i.getDate(),
              hour: i.getHours(),
              minute: i.getMinutes(),
              offset: -i.getTimezoneOffset() / 60
            });
          } catch (e) {
            reportError(_$$e2.CMS, new Error('could not parse CMS date field value'), {
              extra: e
            });
          }
        }
        return {
          type: VariableDataType.DATE,
          resolvedType: VariableResolvedDataType.STRING,
          value: t
        };
      }(t.value ?? '');
      e && (n[t.fieldSchemaId] = e);
    } else {
      n[t.fieldSchemaId] = {
        type: VariableDataType.STRING,
        resolvedType: VariableResolvedDataType.STRING,
        value: t.value || ''
      };
    }
  }
  return {
    itemId: e.id,
    fieldIdToDataMap: n
  };
}
function en({
  itemId: e,
  collectionId: t,
  nodeId: i
}) {
  let n = _$$dx({
    itemId: e,
    collectionId: t
  });
  let l = _$$uE(t);
  let a = n.data;
  let s = VC(t);
  let r = getSingletonSceneGraph().get(i);
  r == null ? _$$sD('No node found', {
    nodeId: i
  }) : n.status === 'loaded' && a && _$$l.system('dakota-set-item-ids', () => {
    _$$n(() => {
      r.setDakotaItemDatas([{
        ...ei(a, l),
        slugFieldId: s
      }], i, '');
    });
  });
  return null;
}
function el({
  selector: e,
  nodeId: t
}) {
  let i = _$$uE(e.collectionId);
  let {
    status,
    data
  } = Vp(e.collectionId);
  let a = VC(e.collectionId);
  if (status !== 'loaded') return null;
  let s = data ? BM(data).map(e => {
    let t = {
      ...e,
      fields: e.fields ?? []
    };
    let n = new Set(t.fields.map(e => e.fieldSchemaId));
    for (let l of i) {
      l.id && !n.has(l.id) && t.fields.push({
        id: '',
        itemId: e.id,
        fieldSchemaId: l.id,
        fieldSchemaDatabaseId: '',
        fieldSchemaStableId: '',
        value: ''
      });
    }
    return ei(t, i);
  }) : [];
  e.limit > 0 && s.length > e.limit && s.splice(e.limit);
  let r = getSingletonSceneGraph().get(t);
  r == null ? _$$sD('No node found', {
    nodeId: t
  }) : _$$l.system('dakota-set-item-ids', () => {
    _$$n(() => {
      r.setDakotaItemDatas(s.map(e => ({
        ...e,
        slugFieldId: a
      })), t, e.collectionId);
    });
  });
  return null;
}
function ea() {
  let e = getObservableOrFallback(AppStateTsApi.dakotaBindings().nodeIdToSelectorMap);
  return jsx(Fragment, {
    children: Array.from(e).map(([e, t]) => {
      let {
        collectionId
      } = t;
      let n = function (e) {
        let t = e.filterCriteria;
        if (t.matchType !== MatchType.MATCH_ALL || t.filters.length !== 1) return null;
        let i = t.filters[0];
        return i.fieldId !== 'itemId' || i.op !== EqualityType.EQUALS ? null : i.comparisonValue;
      }(t);
      return jsx('div', {
        children: n ? jsx(en, {
          itemId: n,
          nodeId: e,
          collectionId
        }) : jsx(el, {
          selector: t,
          nodeId: e
        })
      }, `dakotaSubscriber:${collectionId}${e}`);
    })
  });
}
function eS({
  children: e
}) {
  return jsx(_$$G3.Provider, {
    value: {
      loggerEventName: 'sites_navigate'
    },
    children: e
  });
}
let eD = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M6.5 7h10a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5c.26 0 .5-.193.5-.453V7.5A1.5 1.5 0 0 0 16.5 6h-10A1.5 1.5 0 0 0 5 7.5v9A1.5 1.5 0 0 0 6.5 18h5.047c.26 0 .453-.24.453-.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 1-.5-.5V10h5.73c.186 0 .345-.137.405-.313.105-.306-.097-.687-.42-.687H6V7.5a.5.5 0 0 1 .5-.5m8 3h3a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5m-1.5.5A1.5 1.5 0 0 1 14.5 9h3a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5zm3 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1',
      clipRule: 'evenodd'
    })
  });
});
let eQ = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M16.38 14.38a.29.29 0 0 1 .348-.055q.291.162.54.407a2.5 2.5 0 0 1 0 3.536l-2 2a2.5 2.5 0 0 1-3.536-3.536l.572-.57c.249-.25.692-.11.81.223a.46.46 0 0 1-.097.477l-.577.578a1.5 1.5 0 0 0 2.12 2.12l2-2a1.5 1.5 0 0 0 0-2.12c-.23-.23-.491-.51-.356-.805a.9.9 0 0 1 .177-.254M18 4a2 2 0 0 1 2 2v3.5a.5.5 0 0 1-1 0V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3.5a.5.5 0 0 1 0 1H6l-.204-.01A2 2 0 0 1 4 18V6a2 2 0 0 1 1.796-1.99L6 4zm-1.269 7.732a2.5 2.5 0 0 1 3.536 3.536l-.471.471c-.253.253-.717.081-.817-.262a.44.44 0 0 1 .101-.436l.48-.48a1.5 1.5 0 1 0-2.121-2.121l-2 2a1.5 1.5 0 0 0 0 2.12c.136.137.169.365.033.502l-.183.182c-.154.154-.404.178-.558.024a2.5 2.5 0 0 1 0-3.536z'
    })
  });
});
let e0 = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M12.922 13.56a2.5 2.5 0 0 1 3.156 0l.19.172.064.079a.5.5 0 0 1-.693.692l-.079-.063-.114-.104a1.5 1.5 0 0 0-2.006.104l-1 1a1.5 1.5 0 1 0 2.12 2.12.5.5 0 0 1 .708.708 2.5 2.5 0 1 1-3.536-3.536l1-1zM16 6a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-1 0V8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1.5a.5.5 0 0 1 0 1H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm-1.268 5.732a2.5 2.5 0 0 1 3.536 3.536l-1 1a2.5 2.5 0 0 1-3.346.171l-.19-.171-.064-.079a.5.5 0 0 1 .693-.692l.079.063.114.104a1.5 1.5 0 0 0 2.007-.104l1-1a1.5 1.5 0 1 0-2.121-2.12.5.5 0 0 1-.708-.708'
    })
  });
});
function tO() {
  let e = _$$xn();
  return jsx('div', {
    className: v()(Dm, _$$z2),
    style: {
      marginBottom: e
    },
    children: jsx(tz, {})
  });
}
var tF = (e => (e.SelectTools = 'SelectTools', e.PenTools = 'PenTools', e.FrameTools = 'FrameTools', e.ShapeAndMediaTools = 'ShapeAndMediaTools', e.ToolkitMode = 'ToolkitMode', e.SitesLayoutMode = 'SitesLayoutMode', e.CodeTools = 'CodeTools', e))(tF || {});
var tM = (e => (e.ImageOrVideoTool = 'ImageOrVideoTool', e))(tM || {});
let tD = 'toolbarView';
function tz() {
  let {
    activeToolId,
    activateTool,
    topLevelMode,
    editModeType
  } = _$$rM(_$$lW);
  let {
    activeSecondaryToolbeltId,
    setActiveSecondaryToolbeltId
  } = LH();
  let c = _$$n3();
  let p = _$$aV();
  let x = topLevelMode === ViewType.LAYOUT;
  let m = topLevelMode === ViewType.HISTORY;
  let h = _$$z(editModeType);
  let f = useAtomWithSubscription(_$$wg);
  let _ = useAtomWithSubscription(Bu);
  let b = useRef(null);
  _$$C_(b, p);
  let y = AE();
  let v = _$$uh();
  let j = getObservableValue(getPropertiesPanelTab(), DesignWorkspace.DESIGN);
  let k = useIsSelectedFigmakeFullscreen();
  let S = selectCurrentUser();
  if (useEffect(() => {
    j !== DesignWorkspace.PROTOTYPE && activeToolId === DesignGraphElements.SITES_LINK && (activateTool(DesignGraphElements.SELECT), Fullscreen.setDefaultEditMode());
  }, [activeToolId, j, activateTool]), useEffect(() => {
    activeToolId === DesignGraphElements.IMAGE_OR_VIDEO ? setActiveSecondaryToolbeltId('ImageOrVideoTool') : setActiveSecondaryToolbeltId(null);
  }, [activeToolId, editModeType, setActiveSecondaryToolbeltId]), p || k) {
    return jsx(Fragment, {});
  }
  let C = [{
    toolId: DesignGraphElements.SECTION,
    text: getI18nString('fullscreen_actions.set-tool-section'),
    shortcutText: v(DesignGraphElements.SECTION),
    icon: jsx(_$$P, {}),
    smallIcon: jsx(_$$c3, {}),
    recordingKey: 'toolSection'
  }];
  C.push({
    toolId: DesignGraphElements.SITES_RESPONSIVE_SET,
    text: getI18nString('fullscreen_actions.set-tool-sites-responsive-set'),
    shortcutText: v(DesignGraphElements.SITES_RESPONSIVE_SET),
    icon: jsx(_$$k3, {}),
    smallIcon: jsx(eD, {}),
    recordingKey: 'toolLayoutSet'
  });
  getFeatureFlags().sts_responsive_node_sets && (C.push({
    toolId: DesignGraphElements.SITES_WEBPAGE,
    text: `${getI18nString('fullscreen_actions.set-tool-sites-webpage')} (RNS)`,
    icon: jsx(_$$k3, {}),
    smallIcon: jsx(eD, {}),
    recordingKey: 'toolWebpage'
  }), C.push({
    toolId: DesignGraphElements.SITES_RESPONSIVE_NODE_SET,
    text: getI18nString('fullscreen_actions.set-tool-sites-responsive-node-set'),
    shortcutText: v(DesignGraphElements.SITES_RESPONSIVE_NODE_SET),
    icon: jsx(_$$k3, {}),
    smallIcon: jsx(eD, {}),
    recordingKey: 'toolResponsiveNodeSet'
  }));
  C.push({
    toolId: DesignGraphElements.FRAME,
    text: getI18nString('fullscreen_actions.set-tool-frame'),
    shortcutText: v(DesignGraphElements.FRAME),
    icon: jsx(_$$v2, {}),
    smallIcon: jsx(_$$q, {}),
    recordingKey: 'toolFrame'
  });
  let T = jsx(_$$I, {
    activeToolId,
    initialToolId: DesignGraphElements.SITES_RESPONSIVE_SET,
    items: C,
    onActivateTool: activateTool,
    onboardingKey: 'frame',
    overlayId: 'FrameTools',
    recordingKey: generateRecordingKey(tD, 'regionFlyout'),
    tooltipText: getI18nString('fullscreen.flyout.region_tools')
  });
  let I = [{
    toolId: DesignGraphElements.SHAPE_RECTANGLE,
    text: getI18nString('fullscreen_actions.set-tool-rectangle'),
    shortcutText: v(DesignGraphElements.SHAPE_RECTANGLE),
    icon: jsx(_$$n2, {}),
    smallIcon: jsx(_$$y, {}),
    recordingKey: 'toolShapeRectangle'
  }, {
    toolId: DesignGraphElements.SHAPE_LINE,
    text: getI18nString('fullscreen_actions.set-tool-line'),
    shortcutText: v(DesignGraphElements.SHAPE_LINE),
    icon: jsx(_$$W2, {}),
    smallIcon: jsx(_$$h, {}),
    recordingKey: 'toolShapeLine'
  }, {
    toolId: DesignGraphElements.SHAPE_ARROW,
    text: getI18nString('fullscreen_actions.set-tool-arrow'),
    shortcutText: v(DesignGraphElements.SHAPE_ARROW),
    icon: jsx(_$$F2, {}),
    smallIcon: jsx(_$$E2, {}),
    recordingKey: 'toolShapeArrow'
  }, {
    toolId: DesignGraphElements.SHAPE_ELLIPSE,
    text: getI18nString('fullscreen_actions.set-tool-ellipse'),
    shortcutText: v(DesignGraphElements.SHAPE_ELLIPSE),
    icon: jsx(_$$m, {}),
    smallIcon: jsx(_$$B, {}),
    recordingKey: 'toolShapeEllipse'
  }, {
    toolId: DesignGraphElements.SHAPE_REGULAR_POLYGON,
    text: getI18nString('fullscreen_actions.set-tool-regular-polygon'),
    icon: jsx(_$$o, {}),
    smallIcon: jsx(_$$h2, {}),
    recordingKey: 'toolShapePolygon'
  }, {
    toolId: DesignGraphElements.SHAPE_STAR,
    text: getI18nString('fullscreen_actions.set-tool-star'),
    icon: jsx(_$$e3, {}),
    smallIcon: jsx(_$$Z, {}),
    recordingKey: 'toolShapeStar'
  }];
  let E = jsx(_$$I, {
    activeToolId,
    initialToolId: DesignGraphElements.SHAPE_RECTANGLE,
    items: I,
    onActivateTool: activateTool,
    overlayId: 'ShapeAndMediaTools',
    recordingKey: generateRecordingKey(tD, 'shapeFlyout'),
    tooltipText: getI18nString('fullscreen.flyout.shape_tools')
  });
  let N = getFeatureFlags().sts_code_authoring || getFeatureFlags().sts_code_authoring_by_plan;
  let R = jsx(_$$I, {
    activeToolId,
    initialToolId: N ? DesignGraphElements.CODE_COMPONENT : DesignGraphElements.SITES_EMBED,
    items: [{
      toolId: DesignGraphElements.SITES_EMBED,
      text: getI18nString('fullscreen_actions.set-tool-sites-embed'),
      icon: jsx(eQ, {}),
      smallIcon: jsx(e0, {}),
      shortcutText: v(DesignGraphElements.SITES_EMBED),
      recordingKey: 'toolSitesEmbed'
    }, {
      toolId: DesignGraphElements.CODE_COMPONENT,
      text: N ? getI18nString('fullscreen_actions.set-tool-code-component') : getI18nString('fullscreen_actions.create-code-layer-from-design-disabled'),
      icon: jsx(_$$C, {}),
      smallIcon: jsx(_$$t2, {}),
      shortcutText: N ? v(DesignGraphElements.CODE_COMPONENT) : void 0,
      recordingKey: 'toolCodeComponent',
      onboardingKey: _$$N4,
      disabled: !N
    }],
    onActivateTool: activateTool,
    onboardingKey: _$$N4,
    overlayId: 'CodeTools',
    recordingKey: generateRecordingKey(tD, 'codeFlyout'),
    tooltipText: getI18nString('fullscreen.flyout.code_tools')
  });
  let A = jsx(_$$I, {
    overlayId: 'PenTools',
    recordingKey: generateRecordingKey(tD, 'penFlyout'),
    tooltipText: getI18nString('fullscreen.flyout.drawing_tools'),
    items: [{
      toolId: DesignGraphElements.VECTOR_PEN,
      text: getI18nString('fullscreen_actions.set-tool-pen'),
      shortcutText: v(DesignGraphElements.VECTOR_PEN),
      icon: jsx(_$$N2, {}),
      smallIcon: jsx(_$$k4, {}),
      recordingKey: 'toolPen'
    }, {
      toolId: DesignGraphElements.VECTOR_PENCIL,
      text: getI18nString('fullscreen_actions.set-tool-pencil'),
      shortcutText: v(DesignGraphElements.VECTOR_PENCIL),
      icon: jsx(_$$L, {}),
      smallIcon: jsx(_$$A3, {}),
      recordingKey: 'toolPencil'
    }],
    activeToolId,
    onActivateTool: activateTool
  });
  return jsx(_$$fu, {
    name: _$$e4.EDITOR_TOOLBELT,
    children: jsx('div', {
      ref: b,
      children: jsxs(XS, {
        children: [jsx(Iy, {
          children: jsxs(_$$kF2, {
            editorTheme: 'seascape',
            children: [x && jsx(_$$I, {
              overlayId: 'SelectTools',
              recordingKey: generateRecordingKey(tD, 'moveFlyout'),
              tooltipText: getI18nString('fullscreen.flyout.move_tools'),
              items: [{
                toolId: DesignGraphElements.SELECT,
                text: getI18nString('fullscreen_actions.set-tool-default'),
                shortcutText: v(DesignGraphElements.SELECT),
                icon: jsx(_$$H, {}),
                smallIcon: jsx(_$$y2, {}),
                recordingKey: 'toolDefault'
              }, {
                toolId: DesignGraphElements.HAND,
                text: getI18nString('fullscreen_actions.set-tool-hand'),
                shortcutText: v(DesignGraphElements.HAND),
                icon: jsx(_$$t3, {}),
                smallIcon: jsx(_$$O, {}),
                recordingKey: 'toolHand'
              }, {
                toolId: DesignGraphElements.SCALE,
                text: getI18nString('fullscreen_actions.set-tool-scale'),
                shortcutText: v(DesignGraphElements.SCALE),
                icon: jsx(_$$a2, {}),
                smallIcon: jsx(_$$l3, {}),
                recordingKey: 'toolScale'
              }],
              activeToolId,
              onActivateTool: activateTool
            }), h && jsxs(Fragment, {
              children: [jsx(_$$N3, {
                toolId: DesignGraphElements.SELECT,
                icon: jsx(_$$H, {}),
                onActivateTool: activateTool,
                activeToolId,
                tooltipText: getI18nString('fullscreen_actions.set-tool-default'),
                tooltipShortcut: v(DesignGraphElements.SELECT)
              }), jsx(_$$N3, {
                toolId: DesignGraphElements.HAND,
                icon: jsx(_$$t3, {}),
                onActivateTool: activateTool,
                activeToolId,
                tooltipText: getI18nString('fullscreen_actions.set-tool-hand'),
                tooltipShortcut: v(DesignGraphElements.HAND)
              })]
            }), x && T, x && R, x && E, x && A, x && jsx(_$$N3, {
              toolId: DesignGraphElements.IMAGE_OR_VIDEO,
              icon: jsx(_$$T2, {}),
              onActivateTool: activateTool,
              activeToolId,
              tooltipText: getFeatureFlags().sts_video ? getI18nString('fullscreen_actions.place_image_or_video') : getI18nString('fullscreen_actions.place_image'),
              tooltipShortcut: v(DesignGraphElements.IMAGE_OR_VIDEO),
              recordingKey: generateRecordingKey(tD, 'image-tool')
            }), x && jsx(_$$N3, {
              toolId: DesignGraphElements.TYPE,
              icon: jsx(_$$B2, {}),
              onActivateTool: activateTool,
              activeToolId,
              recordingKey: generateRecordingKey(tD, 'toolType'),
              tooltipText: getI18nString('fullscreen_actions.set-tool-type'),
              tooltipShortcut: v(DesignGraphElements.TYPE),
              onboardingKey: 'tool-type-onboarding'
            }), !m && jsx(_$$N3, {
              toolId: DesignGraphElements.COMMENTS,
              icon: c > 0 ? jsx(_$$X2, {}) : jsx(_$$f3, {}),
              onActivateTool: activeToolId === DesignGraphElements.COMMENTS ? () => activateTool(DesignGraphElements.SELECT) : activateTool,
              activeToolId,
              recordingKey: generateRecordingKey(tD, 'toolComment'),
              tooltipText: getI18nString('fullscreen_actions.comment'),
              tooltipShortcut: v(DesignGraphElements.COMMENTS)
            }), x && jsx(_$$N3, {
              toolId: _$$y3,
              icon: jsx(_$$_2, {}),
              onActivateTool: () => $v('toggle-menu'),
              activeToolId: _ ? _$$y3 : activeToolId,
              tooltipText: getI18nString('qa.extensions.tooltip_actions'),
              tooltipShortcut: y('toggle-menu'),
              onboardingKey: Ij
            }), h && !f && S && jsx(_$$F3, {})]
          })
        }), jsx(tB, {
          activeSecondaryToolbeltId
        })]
      })
    })
  });
}
function tB(e) {
  let {
    activeSecondaryToolbeltId
  } = e;
  let {
    getProvisionalAccessBanner
  } = _$$wH();
  let n = getProvisionalAccessBanner(G_.SITES);
  let s = _$$aV();
  let r = selectCurrentFile();
  let d = VA(r?.project);
  let c = useAtomWithSubscription(_$$wg);
  let u = useMemo(() => n?.showBanner && !s && !d && c, [n?.showBanner, s, d, c]);
  return jsxs(Fragment, {
    children: [activeSecondaryToolbeltId === 'ImageOrVideoTool' && jsx(_$$O2, {
      handleAction: $v
    }), u && jsx(_$$c5, {
      text: n.text,
      licenseType: G_.SITES,
      hasSecondaryToolbelt: activeSecondaryToolbeltId !== null,
      shouldShowCurf: n.shouldShowCurf
    })]
  });
}
let tQ = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M7.694 12c.316 0 .538.31.466.618a.49.49 0 0 1-.464.382h-.514c-.635 0-.953 0-1.206-.095a1.5 1.5 0 0 1-.881-.88C5 11.77 5 11.452 5 10.817V9a4 4 0 0 1 7.764-1.356c.088.244-.082.495-.333.563-.268.073-.548-.086-.654-.343A3 3 0 0 0 6 9v1.818c0 .33 0 .532.01.684.009.145.023.177.022.173a.5.5 0 0 0 .293.293 1 1 0 0 0 .173.022c.152.01.354.01.684.01zM14 18h2.692c.392 0 .631 0 .811-.014a1.3 1.3 0 0 0 .196-.028l.005-.002h.001a.5.5 0 0 0 .25-.25l.002-.002.001-.005.008-.03a1 1 0 0 0 .02-.166c.013-.18.014-.42.014-.81V14a4 4 0 1 0-4 4m5-4a5 5 0 1 0-5 5h2.692c.753 0 1.13 0 1.424-.132a1.5 1.5 0 0 0 .752-.752c.132-.294.132-.67.132-1.424z',
      clipRule: 'evenodd'
    })
  });
});
let t0 = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M18 16.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 16.5v-9A1.5 1.5 0 0 1 7.5 6h9A1.5 1.5 0 0 1 18 7.5zM7.5 7a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h2V7zm6 0h-3v10h3zm3.5.5a.5.5 0 0 0-.5-.5h-2v10h2a.5.5 0 0 0 .5-.5z'
    })
  });
});
let iy = {
  emptyStateContainer: {
    ..._$$g.textBodyLarge,
    width: 'x1h93xvk',
    display: 'x78zum5',
    flexDirection: 'xdt5ytf',
    alignItems: 'x6s0dn4',
    gap: 'x1v2ro7d',
    rowGap: null,
    columnGap: null,
    textAlign: 'x2b8uid',
    padding: 'x1rmx8ao',
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
function iv({
  isDefaultCode: e,
  onClickSuggestion: t
}) {
  let i = _$$ry();
  let n = ['Make a component that displays a numeric stat. It should have a single large number (that can be set via a property) and a description underneath (that can also be set via a property). When the component is visible on the viewport, the stat should smoothly count up from 0 to the number. Make sure the text is immediately visible.', 'Make a background component that shows a subtle gradient animation. It should use pastel colors. Make the animation speed configurable via a property.', 'Create a digital clock showing the time in San Francisco. Modern, minimalist design with smooth animations when digits change. Include subtle grid lines in the background. Implement a \'frosted glass\' backdrop filter effect. Add a micro hover effect. Make sure the text is immediately visible.', `Make a component that implements Conway's Game of Life:
* When a user clicks on the component, spawn a group of "living" cells at the position of the mouse click.
* Each time the user clicks, the cells should be a different random color.
* When the newest cells reach other cells, those cells should match the newest cells' color.
* The cells should be relatively small so that the component works even at small sizes.`];
  return jsxs('div', {
    ..._$$xk(iy.emptyStateContainer),
    children: [jsx('div', {
      className: 'x16rqkct x1v8gsql xe8ttls',
      children: jsx(_$$C, {})
    }), e ? getI18nString('living_designs.chat.empty_state.from_scratch') : getI18nString('living_designs.chat.empty_state.from_design'), e && jsx('div', {
      className: 'xh8yej3 x78zum5 x1q0g3np x1a02dak x167g77z xl56j7k',
      children: ['Stat counter', 'Gradient background', 'Digital clock', 'Small game'].map((e, a) => jsx(_$$t4, {
        label: e,
        onClick: () => t(n[a]),
        disabled: i
      }, a))
    })]
  });
}
function ij({
  codeFile: e,
  codeInstanceGuid: t,
  isResizingPanel: i,
  showCodeStreaming: n
}) {
  let [a, s] = useAtomValueAndSetter(_$$mC(e?.guid ?? ''));
  let d = getFeatureFlags().living_designs_image_attachments;
  let c = selectCurrentUser();
  let u = useCurrentFileKey();
  let {
    changedFiles
  } = _$$E3(e, _$$lV.CODE_IN_SITES);
  async function x(t, i) {
    let n = {
      ...t,
      plainText: t.plainText ?? a
    };
    s('');
    return await Oz({
      featureType: _$$lV.CODE_IN_SITES,
      userMessageContent: n,
      rawUserChatDetails: i,
      user: c,
      chatMessagesNode: e,
      setInput: s,
      fileKey: u,
      autoFixingUserMessageId: null,
      canUseSupabase: !1,
      changedFiles
    });
  }
  let m = e ? CodeFileIdHandler.fromLocalNodeIdStr(e.guid) : void 0;
  let h = e?.codeFilePath && getFeatureFlags().multi_file_code_layers;
  let g = m && e && !h ? _$$nt(e, m).name : void 0;
  return jsx(_$$U2, {
    chatMessagesNode: e,
    chatMessagesNodeGuid: e?.guid ?? '',
    codeInstanceGuid: t,
    emptyState: jsx(iv, {
      isDefaultCode: !!e?.sourceCode && e?.sourceCode === CodeComponentHelper.getDefaultCode(),
      onClickSuggestion: s
    }),
    enableImageAttachment: d,
    featureType: _$$lV.CODE_IN_SITES,
    isResizingPanel: i,
    layerDisplayName: g,
    sendMessage: x,
    setInput: s,
    showChatHeader: !0,
    showCodeStreaming: n
  });
}
let iA = {
  windowTitle: {
    flex: 'x98rzlu',
    flexShrink: null,
    maxWidth: 'x1y8h3ww',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    textOverflow: 'xlyipyv',
    whiteSpace: 'xuxw1ft',
    flexGrow: 'x1iyjqo2',
    flexBasis: 'x1r8uery',
    alignSelf: 'xamitd3',
    marginLeft: 'xshs1va',
    marginInlineStart: null,
    marginInlineEnd: null,
    userSelect: 'x87ps6o',
    ..._$$g.textBodyMediumStrong,
    $$css: !0
  }
};
function iL() {
  let e = useAtomWithSubscription(_$$wh);
  let t = Fk((e, t) => t.flatMap(t => e.get(t)?.guid ?? []), e);
  let i = useMemo(() => {
    if (!getFeatureFlags().sts_code_authoring && !getFeatureFlags().sts_code_authoring_by_plan) return new Map();
    let e = getSingletonSceneGraph();
    return new Map(t.map(t => [t, e.get(t)]).filter(e => e[1] != null));
  }, [t]);
  if (!LS) {
    let e = Array.from(i.values())[0];
    return e ? jsx(iD, {
      node: e
    }) : null;
  }
  return jsx(Fragment, {
    children: Array.from(i.values()).map(e => jsx(iD, {
      node: e
    }, e.guid))
  });
}
function iP(e, t) {
  switch (e) {
    case 'chat':
      return [{
        id: 'chat',
        defaultSize: 25
      }, {
        id: 'preview',
        defaultSize: 75
      }];
    case 'split':
      return [{
        id: 'chat',
        defaultSize: 25
      }, {
        id: 'code',
        defaultSize: 37.5
      }, {
        id: 'preview',
        defaultSize: 37.5
      }];
    case 'code':
      let i = [{
        id: 'code',
        defaultSize: 25
      }, {
        id: 'preview',
        defaultSize: 70
      }];
      t && i.unshift({
        id: 'file',
        defaultSize: 5
      });
      return i;
    case 'preview':
      return [{
        id: 'preview',
        defaultSize: 100
      }];
  }
}
function iO({
  enabled: e,
  panelConfiguration: t,
  handleSegmentChange: i
}) {
  return e ? jsx('div', {
    className: 'x78zum5 x6s0dn4 xl56j7k x1iyjqo2 x1excjyp',
    children: jsxs(_$$bL, {
      value: t,
      onChange: i,
      legend: jsx(_$$q2, {
        children: getI18nString('sites.panel.code_window_display_picker.hidden_legend')
      }),
      recordingKey: generateRecordingKey('codeWindow', 'panelConfiguration'),
      children: [jsx(_$$A6, {
        selectedValue: t,
        value: 'chat',
        IconComponent: tQ,
        text: getI18nString('sites.panel.code_window_display_picker.chat')
      }), jsx(_$$A6, {
        selectedValue: t,
        value: 'split',
        IconComponent: t0,
        text: getI18nString('sites.panel.code_window_display_picker.split')
      }), jsx(_$$A6, {
        selectedValue: t,
        value: 'code',
        IconComponent: _$$X3,
        text: getI18nString('sites.panel.code_window_display_picker.code')
      })]
    })
  }) : null;
}
function iF({
  node: e,
  panels: t,
  onAddToCanvas: i,
  windowRef: n,
  isFullscreen: s,
  autoSaveId: d,
  minPanelSize: c = 10
}) {
  let [u, p] = useState(!1);
  let x = _$$f5(e);
  let m = x?.guid;
  let g = useAtomWithSubscription(_$$zl);
  let f = useAtomWithSubscription(_$$hi);
  let _ = s ? g : f;
  let b = Mg();
  let y = qe(e, b);
  let v = useCallback(e => {
    if (!m) return;
    let t = _$$O3.get(m);
    t && (e === _$$d3.ERROR ? t.hasErrors = !0 : e === _$$d3.LOADED && (t.hasErrors = !1));
  }, [m]);
  let j = useCurrentFileKey();
  useEffect(() => {
    if (!m) return;
    let e = _$$O3.start(j, m);
    return () => e.end();
  }, [m, j]);
  let {
    triggerSelfHeal
  } = _$$u2({
    chatMessagesNode: x,
    disabled: !getFeatureFlags().bake_auto_error_fix,
    featureType: _$$lV.CODE_IN_SITES
  });
  let w = useCallback((e, t, i, n) => {
    x && triggerSelfHeal(x, i, n);
  }, [triggerSelfHeal, x]);
  let S = useAtomWithSubscription(Jl);
  let C = getSingletonSceneGraph().get(S);
  let T = useAtomWithSubscription(_$$T_);
  let I = getSingletonSceneGraph().get(T);
  let E = (useAtomWithSubscription(_$$s3) === PanelType.CODE ? I : C) ?? x;
  let N = useMemo(() => {
    let e = x?.codeFilePath || void 0;
    return jsx(_$$S, {
      selectedCodeFileNode: E,
      nodeWithChatMessages: x,
      rootPath: e
    });
  }, [x, E]);
  let R = useMemo(() => {
    let e = y?.type === 'instance' ? y.codeInstanceNode.guid : null;
    return jsx(ij, {
      codeFile: x,
      codeInstanceGuid: e,
      isResizingPanel: u,
      showCodeStreaming: _ === 'chat'
    });
  }, [x, y, u, _]);
  let A = useMemo(() => jsx(_$$R2, {
    codeFile: E,
    nodeWithChatMessages: x,
    fullHeight: !0
  }), [E, x]);
  let L = useMemo(() => jsx(_$$m2, {
    chatNodeId: x?.guid ?? null,
    codeSelectionToRender: y,
    disablePointerEvents: u,
    isFullscreen: s,
    isVisible: !0,
    jsxDev: getFeatureFlags().code_layers_click_to_inspect,
    onAddToCanvas: i,
    onError: w,
    onPreviewStateChange: v,
    sandbox: null,
    showViewOptions: !0,
    windowRef: n
  }), [y, n, x?.guid, v, i, s, u, w]);
  let P = useMemo(() => t.map((e, i) => {
    let n = i === t.length - 1;
    let s = e.id;
    return jsxs(_$$Fragment, {
      children: [jsxs(Zk, {
        collapsible: !1,
        ...e,
        order: i,
        minSize: c,
        children: [s === 'file' && N, s === 'chat' && R, s === 'code' && A, s === 'preview' && L]
      }), !n && jsx(_$$TW, {
        onDragging: e => {
          p(e);
        },
        className: 'x1i1rx1s xbpqucl'
      })]
    }, s);
  }), [t, c, N, R, A, L]);
  return jsx(Fragment, {
    children: jsx('div', {
      className: 'xh8yej3 x1n2onr6',
      style: {
        height: s ? 'calc(100% - 48px)' : '100%'
      },
      children: jsx(YZ, {
        direction: 'horizontal',
        autoSaveId: d,
        className: 'x10l6tqk x10a8y8t',
        children: P
      })
    })
  });
}
let iM = ({
  node: e
}) => {
  let t = [];
  let i = useAtomWithSubscription(_$$hi);
  let [, n] = useAtomValueAndSetter(_$$zl);
  let [, l] = useAtomValueAndSetter(_$$s3);
  let {
    readOnlyUser
  } = _$$Sn();
  let d = _$$cu();
  let c = d.length > 0 && d[0];
  let p = Fk(e => !!c && !!e.get(c)?.canBeRestoredToDesignNode(), c);
  let x = useCallback(() => {
    Pu(e, i, n, l);
  }, [n, i, e, l]);
  let m = useCallback(() => {
    fullscreenValue.triggerActionEnumInUserEditScope(Command.RESTORE_DESIGN_IN_PLACE_FROM_CODE, {
      targetCodeSelection: !0
    });
  }, []);
  let h = useCallback(() => {
    fullscreenValue.triggerActionEnumInUserEditScope(Command.COPY_OUT_DESIGN_FROM_CODE, {
      targetCodeSelection: !0
    });
  }, []);
  let g = {
    displayText: getI18nString('sites.panel.code_window_open_in_code_view'),
    callback: x
  };
  let f = {
    displayText: getI18nString('fullscreen_actions.restore-design-in-place-from-code'),
    callback: m
  };
  let _ = {
    displayText: getI18nString('fullscreen_actions.copy-out-design-from-code'),
    callback: h
  };
  !readOnlyUser && (t.push(g), p && (t.push(f), t.push(_)));
  return t;
};
function iD({
  node: e,
  onClose: t
}) {
  let {
    Sprig
  } = useSprigWithSampling();
  let n = useAtomWithSubscription(_$$f4);
  let d = useDispatch();
  useEffect(() => {
    e && CodeComponentHelper?.convertToMultiFileCodeLayer(e.guid);
  }, [e]);
  let c = useCallback(e => {
    e.source !== 'outside' && (UM(), t?.(), getFeatureFlags().sts_sprig_targeted_feedback && n && Sprig('track', 'sites_code_layer_edit'));
  }, [t, n, Sprig]);
  let p = function () {
    let e;
    let [{
      windowInnerWidth: t,
      windowInnerHeight: i
    }] = _$$A4(_$$l4(), 300, {
      equalityFn: deepEqual
    });
    let [n, l] = useAtomValueAndSetter(_$$yq);
    if (n) {
      let l = clamp(n.x, 0, t - n.width);
      let a = clamp(n.y, 0, i - n.height);
      let s = clamp(n.width, 640, t - l);
      let r = clamp(n.height, 480, i - a);
      e = {
        x: l,
        y: a,
        width: s,
        height: r
      };
    } else {
      let n = clamp(t * iB.targetPercentWidth, iB.minWidth, iB.maxWidth - 2 * iB.margin);
      let l = clamp(Math.min(n / iB.aspectRatio, i - 2 * iB.margin), iB.minHeight, iB.maxHeight);
      e = {
        x: (t - n) / 2,
        y: (i - l) / 2,
        width: n,
        height: l
      };
    }
    let s = useMemo(() => new Point(e.x, e.y), [e.x, e.y]);
    let r = useCallback(({
      x: e,
      y: t,
      width: i,
      height: a
    }) => {
      n && e === n.x && t === n.y && i === n.width && a === n.height || l({
        x: e,
        y: t,
        width: i,
        height: a
      });
    }, [n, l]);
    let d = useCallback(t => {
      let i = t.size?.x ?? e.width;
      let n = t.size?.y ?? e.height;
      r({
        x: t.position?.x ?? e.x,
        y: t.position?.y ?? e.y,
        width: i,
        height: n
      });
    }, [r, e.width, e.height, e.x, e.y]);
    return {
      initialPosition: s,
      initialHeight: e.height,
      initialWidth: e.width,
      handleTransform: d,
      constraints: iz
    };
  }();
  let [x, m] = useState(p.initialWidth);
  let g = getSingletonSceneGraph();
  let f = _$$cu();
  let _ = f[0] ? g.get(f[0]) : null;
  let b = _$$wE(_);
  let y = useAtomWithSubscription(ZY);
  let v = Mq();
  let [j, k] = useAtomValueAndSetter(_$$hi);
  let w = iP(b && !y ? 'preview' : v ? j : 'code', void 0 !== e.codeFilePath && !!getFeatureFlags().multi_file_code_layers);
  let S = useCallback(() => {
    k(e => e === 'code' || e === 'split' ? e : 'split');
  }, [k]);
  _$$sl(S);
  let C = useRef(null);
  let T = useRef(null);
  let I = BK('OPEN_IN_CODE_VIEW_DROPDOWN');
  let E = useAtomWithSubscription(DW);
  let N = Xr(YD);
  _$$h3(() => {
    N(!1);
  });
  let R = iM({
    node: e
  });
  let A = useRef(null);
  let L = _$$R(A);
  return e && e.isAlive ? jsx(_$$_L, {
    defaultWidth: p.initialWidth,
    defaultHeight: p.initialHeight,
    onClose: c,
    defaultPosition: p.initialPosition,
    onTransform: e => {
      p.handleTransform(e);
      e.size && m(e.size.x);
    },
    ref: C,
    recordingKey: 'sites-code-window',
    draggable: 'header',
    constraints: p.constraints,
    children: jsxs(_$$vo, {
      children: [jsxs(Y9, {
        children: [jsx(_$$J4, {
          ref: A,
          ..._$$Ay.props(iA.windowTitle),
          htmlAttributes: {
            'data-tooltip': L ? E : void 0,
            'data-tooltip-type': 'text'
          },
          children: y ? e?.name : E
        }), jsx(iO, {
          enabled: v && (!b || y),
          panelConfiguration: j,
          handleSegmentChange: k
        }), jsxs('div', {
          className: 'x98rzlu x78zum5 x13a6bvl',
          children: [R.length > 0 && jsx('div', {
            className: 'x1mh6rdz',
            children: jsx(_$$d2, {
              'ref': T,
              'aria-label': getI18nString('sites.panel.code_window_more_options'),
              'aria-expanded': I.showing,
              'onClick': () => {
                I.toggle();
              },
              'children': jsx(_$$J5, {})
            })
          }), R.length > 0 && I.showing && T.current && jsx(noop, {
            items: R,
            parentRect: T.current.getBoundingClientRect(),
            dispatch: d,
            showPoint: !0,
            onSelectItem: e => {
              e.callback && e.callback('', null, d);
            }
          })]
        })]
      }), jsx(_$$nB, {
        padding: 0,
        scrolling: 'none',
        children: jsx(iF, {
          node: e,
          windowRef: C,
          panels: w,
          minPanelSize: 200 / x * 100,
          autoSaveId: 'CODE_WINDOW_AUTOSAVE_ID'
        })
      })]
    })
  }) : null;
}
let iz = {
  minWidth: 640,
  minHeight: 480,
  maxWidth: '100vw',
  maxHeight: '100vh'
};
let iB = {
  minWidth: 750,
  minHeight: 500,
  maxWidth: 1200,
  maxHeight: 800,
  margin: 16,
  targetPercentWidth: 0.6,
  aspectRatio: 1.5
};
function ni(e, t, i) {
  let n = _$$qE(e, t?.guid || '');
  let l = Pd(e, t?.guid || '', i.id);
  return i.type !== ChatMessageType.USER_MESSAGE ? {
    persistentEntityId: n,
    clientLifecycleId: l
  } : {
    persistentEntityId: n,
    clientLifecycleId: l,
    requestUuid: MK(i.textContent).requestUuid
  };
}
let na = {
  skeletonItem: (e, t, i, n) => [{
    backgroundColor: 'x176lpz5',
    position: 'x1n2onr6',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    animationName: 'xj75l1o',
    animationDuration: 'xmg6eyc',
    animationTimingFunction: 'xw1l40g',
    animationIterationCount: 'xa4qsjk',
    borderRadius: i == null ? null : 'x1kptayx',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    width: e == null ? null : 'x1bl4301',
    height: t == null ? null : 'x1f5funs',
    display: 'x4ppo68',
    $$css: !0
  }, {
    '--borderRadius': (e => typeof e == 'number' ? `${e}px` : e != null ? e : void 0)(i),
    '--width': (e => typeof e == 'number' ? `${e}px` : e != null ? e : void 0)(e),
    '--height': (e => typeof e == 'number' ? `${e}px` : e != null ? e : void 0)(t),
    '--display': n ? 'none' : 'block'
  }]
};
let ns = Array.from({
  length: 50
}).map((e, t) => ({
  key: t,
  width: 40 + 210 * Math.random(),
  hidden: Math.random() > 0.3
}));
function nr() {
  return jsxs('div', {
    className: 'xh8yej3 x5yr21d x78zum5 xdt5ytf xou54vl x1v8gsql x1ygklov',
    children: [jsxs('div', {
      className: 'x78zum5 x1q0g3np x1qughib',
      children: [jsx('div', {
        ..._$$Ay.props(na.skeletonItem(68, 16, 50))
      }), jsx('div', {
        ..._$$Ay.props(na.skeletonItem(200, 16, 50))
      }), jsxs('div', {
        className: 'x78zum5 x1jnr06f',
        children: [jsx('div', {
          ..._$$Ay.props(na.skeletonItem(123, 16, 50))
        }), jsx('div', {
          ..._$$Ay.props(na.skeletonItem(16, 16, 50))
        })]
      })]
    }), jsx('div', {
      className: 'x1miatn0',
      children: jsx('div', {
        ..._$$Ay.props(na.skeletonItem(172, 20, 50))
      })
    }), jsxs('div', {
      className: 'x78zum5 x1qughib',
      children: [jsx('div', {
        ..._$$Ay.props(na.skeletonItem(234, 16, 50))
      }), jsx('div', {
        ..._$$Ay.props(na.skeletonItem(41, 16, 50))
      })]
    }), jsxs('div', {
      className: 'x1miatn0 xrvj5dj x1o61qjw xou54vl xh8yej3 x127qqk8',
      children: [jsx('div', {
        className: 'x78zum5 x6s0dn4 x5yr21d',
        children: jsx('div', {
          ..._$$Ay.props(na.skeletonItem('100%', '100%', 0))
        })
      }), jsxs('div', {
        className: 'xrvj5dj x1o61qjw x6ec99f xou54vl x5yr21d',
        children: [jsx('div', {
          ..._$$Ay.props(na.skeletonItem('100%', '100%', 0))
        }), jsx('div', {
          ..._$$Ay.props(na.skeletonItem('100%', '100%', 0))
        }), jsx('div', {
          ..._$$Ay.props(na.skeletonItem('100%', '100%', 0))
        }), jsx('div', {
          ..._$$Ay.props(na.skeletonItem('100%', '100%', 0))
        })]
      })]
    }), jsx('div', {
      className: 'x1miatn0 x78zum5 x1a02dak x1q0g3np x1rzw5jd xh8yej3',
      children: ns.map(({
        key: e,
        width: t,
        hidden: i
      }) => jsx(no, {
        width: t,
        hidden: i
      }, e))
    })]
  });
}
function no({
  width: e,
  hidden: t
}) {
  return t ? jsx('div', {
    style: {
      width: e
    }
  }) : jsx('div', {
    ..._$$Ay.props(na.skeletonItem(e, 16, 50))
  });
}
let nh = 'sites_full_page_preview--bottomResizeHandle--4AoWF sites_full_page_preview--resizeHandle--plr3i';
let ng = 'sites_full_page_preview--leftRightResizeHandle--gT2Nq sites_full_page_preview--resizeHandle--plr3i';
let nf = Math.max(...Object.values(WW).map(e => e.height).filter(e => void 0 !== e));
let n_ = {
  wrapper: {
    width: 'xh8yej3',
    height: 'x5yr21d',
    position: 'x1n2onr6',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    $$css: !0
  },
  background: {
    width: 'xh8yej3',
    height: 'x5yr21d',
    backgroundColor: 'x1v8gsql',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    $$css: !0
  },
  deviceWithHandles: {
    position: 'x1n2onr6',
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    justifyContent: 'x1nhvcw1',
    flexDirection: 'xdt5ytf',
    $$css: !0
  },
  deviceWithSideHandles: {
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    position: 'x1n2onr6',
    $$css: !0
  },
  device: {
    borderRadius: 'xqx0amy',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    backgroundColor: 'x1v8gsql',
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    justifyContent: 'xl56j7k',
    marginTop: 'xw7yly9',
    position: 'x1n2onr6',
    $$css: !0
  },
  content: {
    width: 'xh8yej3',
    height: 'x5yr21d',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    position: 'x1n2onr6',
    borderRadius: 'xqx0amy',
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
  noop: {
    display: 'xjp7ctv',
    $$css: !0
  }
};
function nb({
  children: e
}) {
  let [t] = useAtomValueAndSetter(_$$gn);
  let [i, n] = useAtomValueAndSetter(_$$u3);
  let [s, r] = useAtomValueAndSetter(_$$dD);
  let [d, c] = useAtomValueAndSetter(_$$sH);
  let [u, p] = useState(void 0);
  let [x, m] = useState(0);
  let h = useRef(null);
  let g = getFeatureFlags().bake_mobile_preview && t;
  let f = useMemo(() => 'zoom' in document.createElement('div').style, []);
  useEffect(() => {
    if (!g) return;
    let e = () => {
      h.current && m(h.current.getBoundingClientRect().height);
    };
    e();
    let t = new ResizeObserver(e);
    h.current && t.observe(h.current);
    return () => {
      t.disconnect();
    };
  }, [h, g]);
  let _ = () => ({
    top: 0,
    left: 0,
    right: i,
    bottom: s
  });
  let b = (e, t) => {
    (e[OP.LEFT] || e[OP.RIGHT]) && n(Math.min(Math.max(t.right - t.left, Yh), _$$g_2));
    e[OP.BOTTOM] && r(Math.min(Math.max(t.bottom, _$$fw), L9));
  };
  let y = e => _$$Ay.props(g ? e : n_.noop);
  useEffect(() => {
    getFeatureFlags().bake_mobile_preview_autoscaling && x && c(Math.min(Math.max(0.5, (x - 40) / nf), 1));
  }, [x, c, d]);
  let v = 1 / d;
  let j = useMemo(() => f ? {
    zoom: d
  } : {
    transform: `scale(${d})`,
    transformOrigin: 'top center'
  }, [f, d]);
  return jsxs('div', {
    ...y(n_.wrapper),
    ref: h,
    children: [jsx('div', {
      ...y(n_.background),
      children: jsxs('div', {
        ...y(n_.deviceWithHandles),
        style: g ? j : void 0,
        children: [jsxs('div', {
          ...y(n_.deviceWithSideHandles),
          children: [g && jsx('div', {
            style: {
              transform: `scale(${v})`
            },
            children: jsx(ny, {
              getCurrentContainerBounds: _,
              resizeTo: b,
              isResizing: u,
              setIsResizing: p,
              direction: OP.LEFT
            })
          }), jsx('div', {
            ...y(n_.device),
            style: g ? {
              width: i,
              height: s
            } : void 0,
            children: jsx('div', {
              ...y(n_.content),
              children: e
            })
          }), g && jsx('div', {
            style: {
              transform: `scale(${v})`
            },
            children: jsx(ny, {
              getCurrentContainerBounds: _,
              resizeTo: b,
              isResizing: u,
              setIsResizing: p,
              direction: OP.RIGHT
            })
          })]
        }), g && jsx('div', {
          style: {
            transform: `scale(${v})`
          },
          children: jsx(ny, {
            getCurrentContainerBounds: _,
            resizeTo: b,
            isResizing: u,
            setIsResizing: p,
            direction: OP.BOTTOM
          })
        })]
      })
    }), g && u && jsx('div', {
      className: 'x10l6tqk x10a8y8t x1vjfegm x71s49j'
    })]
  });
}
function ny({
  resizeTo: e,
  getCurrentContainerBounds: t,
  isResizing: i,
  setIsResizing: n,
  direction: a
}) {
  let s = `resizeHandle-${a}`;
  let {
    startResizing
  } = _$$Q2({
    resizeTo: e,
    getCurrentContainerBounds: t,
    isResizing: i,
    setIsResizing: n,
    setResizeDirections: _$$lQ,
    lockAspectRatio: !1,
    hidden: !1,
    recordingKey: s,
    mirrorResizeHorizontally: !0
  });
  let o = useHandleMouseEvent(s, 'mousedown', e => {
    e.stopPropagation();
    e.preventDefault();
    startResizing([a], {
      x: e.clientX,
      y: e.clientY
    });
  });
  let d = a === OP.BOTTOM ? nh : ng;
  return jsx(_$$S2.div, {
    className: d,
    onMouseDown: o,
    children: jsx('div', {
      className: 'x1evwjr3'
    })
  });
}
function nI() {
  let {
    show,
    isShowing,
    complete
  } = _$$e5({
    overlay: zpn,
    priority: _$$N5.HIGH_PRIORITY_MODAL
  });
  let n = useCurrentPublicPlan('FigMakePaywallOverlay');
  let a = useIsStarterPlan(n).unwrapOr(!1);
  let s = selectCurrentFile();
  let r = s && s.teamId ? s.teamId : null;
  let o = $Y(r);
  let d = !s?.canEdit;
  let c = s && s.teamId && a;
  let u = !!(d && c && _$$W3());
  return (_$$h3(() => {
    u && show();
  }), u && r) ? jsx(_$$c7, {
    open: isShowing,
    team: {
      id: r
    },
    hideCTA: !o,
    onClose: complete
  }) : jsx(Fragment, {});
}
let nM = {
  mobilePopupPromptBody: {
    marginTop: 'x7hzu26',
    ..._$$g.textBodyLarge,
    flex: 'x98rzlu',
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    color: 'x1mqxbix',
    $$css: !0
  },
  mobilePopupPromptModel: {
    ..._$$g.textBodyMedium,
    color: 'xv1l7n4',
    lineHeight: 'x1o2sk6j',
    marginRight: 'x17qaar8',
    marginInlineStart: null,
    marginInlineEnd: null,
    $$css: !0
  },
  mobilePopupCardTitle: {
    ..._$$g.textHeadingLarge,
    color: 'x1mqxbix',
    $$css: !0
  },
  mobilePopupCardBody: {
    ..._$$g.textBodyLarge,
    marginTop: 'x15r87gk',
    color: 'x1mqxbix',
    $$css: !0
  },
  mobilePopupCardButton: {
    marginTop: 'xehsoiq',
    width: 'xh8yej3',
    ..._$$g.textBodyLarge,
    $$css: !0
  }
};
function nD() {
  let e = getIsAndroidOrIphoneNotFigmaMobile();
  let t = getFeatureFlags().make_mobile_blocking_banner;
  let {
    show,
    isShowing
  } = _$$e5({
    overlay: __X,
    priority: _$$N5.HIGH_PRIORITY_MODAL - 1
  });
  return (useEffect(() => {
    e && t && show();
  }, [e, t, show]), isShowing) ? jsx(nz, {}) : null;
}
function nz() {
  return getFeatureFlags().make_mobile_blocking_banner ? jsx(_$$fu, {
    name: 'Figmake Mobile Blocking Popup',
    children: jsx(_$$J, {
      mode: 'light',
      children: jsx('div', {
        className: 'x78zum5 xixxii4 x13vifvy xu96u03 xh8yej3 x1dr59a3 xl56j7k xfo81ep xj4c5ne',
        children: jsxs('div', {
          className: 'x9f619 x1hc1fzr xhtitgo x78zum5 xdt5ytf x13a6bvl x1pfbilc xb3r6kr x1a53g4 xg0jo4d xb8htw9 x1n2onr6 xpvyfi4 x1eshf1s xwpen87 x1aupjfw x1th7t2p',
          children: [jsx('div', {
            className: 'x10l6tqk x13vifvy xu96u03 xh8yej3 x39lw6i x18d0r48 x1xsqp64',
            style: {
              backgroundImage: `url(${buildUploadUrl('16b63845bb5570408bac0dba288a2afec1de4b09')})`
            }
          }), jsxs('div', {
            className: 'x10l6tqk x1dfx0jo x1nrll8i x11lhmoz x78zum5 xdt5ytf x1nhvcw1 x1r7xphn x1dc814f x1xiyphd x1cpyowe xktia5q x18n5i07 xixl9f9 xhtitgo x1tamke2 x9f619',
            children: [jsx(_$$oW, {
              className: 'x46vnbo x11daxxc x12oqio5',
              src: buildUploadUrl('c5b8c66d1796d0246ed3ef72acd4fd12075444af'),
              alt: getI18nString('figmake.toolbar.upload_alt')
            }), jsx('p', {
              ..._$$xk(nM.mobilePopupPromptBody),
              children: renderI18nText('figmake.mobile_blocking_banner.example_prompt')
            }), jsxs('div', {
              className: 'x78zum5 x1q0g3np x6s0dn4 xpvyfi4 x1qughib xh8yej3 x7hzu26',
              children: [jsxs('div', {
                className: 'x78zum5 x1q0g3np x6s0dn4 x1nhvcw1 x1b0bnr5',
                children: [jsx(_$$D, {
                  className: 'x1057jvv'
                }), jsx(_$$T2, {})]
              }), jsxs('div', {
                className: 'x78zum5 x1q0g3np x6s0dn4 x13a6bvl x98rzlu',
                children: [jsx('div', {
                  ..._$$xk(nM.mobilePopupPromptModel),
                  children: renderI18nText('figmake.mobile_blocking_banner.model_version')
                }), jsx(_$$d4, {
                  className: 'xorixrz x1hhpjz6 x1awj2ng x9a15t0 x1qx5ct2 xw4jnvo x1i3ajwb',
                  style: {
                    fill: 'white'
                  }
                })]
              })]
            })]
          }), jsxs('div', {
            className: 'x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x1pfbilc xxbcxho x6s0dn4 x1r7xphn x2b8uid x7dh2ff x1a53g4 xhtitgo xixxii4 x1ey2m1c',
            children: [jsx(_$$X4, {
              className: 'x1dmp6jm xwzfr38 x10l6tqk x1nrll8i xuuh30 x1toy1gi x1p3pnes x4pepcl'
            }), jsxs('div', {
              className: 'x78zum5 xdt5ytf xl56j7k x1dc814f x1nfngrj x1mqxbix',
              children: [jsx('h2', {
                ..._$$xk(nM.mobilePopupCardTitle),
                children: renderI18nText('figmake.mobile_blocking_banner.header')
              }), jsx('p', {
                ..._$$xk(nM.mobilePopupCardBody),
                children: renderI18nText('figmake.mobile_blocking_banner.body')
              }), jsx('div', {
                ..._$$xk(nM.mobilePopupCardButton),
                children: jsx(_$$pW, {
                  size: 'lg',
                  trackingProperties: {
                    trackingDescriptor: _$$c8.GO_BACK
                  },
                  width: 'fill',
                  href: '/files/recents',
                  children: renderI18nText('figmake.mobile_blocking_banner.back_button')
                })
              })]
            })]
          })]
        })
      })
    })
  }) : null;
}
function nH({
  children: e
}) {
  let t = useIsSelectedFigmakeFullscreen();
  let {
    fileLoading
  } = _$$Sn();
  return fileLoading || !e ? null : jsx('div', {
    ..._$$Ay.props(nX.fullscreenPanel, nX.leftOffset(!t)),
    children: e
  });
}
function nq() {
  let e = function () {
    let e = useIsSelectedFigmakeFullscreen();
    let t = Xr(_$$s3);
    let i = _$$C4();
    return e ? () => {
      i(AppView.FILE);
    } : () => {
      t(PanelType.FILE);
    };
  }();
  return jsx(_$$K2, {
    'aria-label': getI18nString('left_rail.back_to_canvas'),
    'htmlAttributes': {
      'data-tooltip': getI18nString('left_rail.back_to_canvas'),
      'data-tooltip-type': KindEnum.TEXT
    },
    'onClick': e,
    'recordingKey': 'leftPanelFullscreen.backButton',
    'children': jsx(_$$C6, {})
  });
}
nH.Header = function ({
  title: e,
  children: t,
  dataTestId: i
}) {
  let n = useIsSelectedFigmakeFullscreen();
  return jsxs('div', {
    ..._$$Ay.props(nX.header(!!n)),
    'data-testid': i,
    'children': [jsxs('div', {
      className: 'x78zum5 xl56j7k xc26acl x1jnr06f',
      children: [jsx(nq, {}), jsx('span', {
        ..._$$Ay.props(nX.headerTitle),
        children: e
      })]
    }), t]
  });
};
let nX = {
  header: e => [{
    display: 'x78zum5',
    justifyContent: 'x1qughib',
    height: 'xsdox4t',
    paddingLeft: 'xf18ygs',
    alignItems: 'x6s0dn4',
    flexShrink: 'x2lah0s',
    borderBottom: 'x1n5zjp5',
    borderBottomWidth: null,
    borderBottomStyle: null,
    borderBottomColor: null,
    background: 'x16v0e3u',
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
    paddingRight: 'x1hb41fa',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  }, {
    '--paddingRight': (e => typeof e == 'number' ? `${e}px` : e != null ? e : void 0)(e ? '8px' : '0px')
  }],
  headerTitle: {
    ..._$$g.textBodyLarge,
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    $$css: !0
  },
  fullscreenPanel: {
    backgroundColor: 'x1yjdb4r',
    position: 'x10l6tqk',
    top: 'x13vifvy',
    right: 'x3m8u43',
    insetInlineStart: null,
    insetInlineEnd: null,
    bottom: 'x1ey2m1c',
    display: 'x78zum5',
    alignItems: 'x1qjc9v5',
    flexDirection: 'xdt5ytf',
    zIndex: 'xqwa026',
    $$css: !0
  },
  leftOffset: e => [{
    left: (e && _$$_4, 'x837sfr'),
    insetInlineStart: null,
    insetInlineEnd: null,
    $$css: !0
  }, {
    '--left': (e => typeof e == 'number' ? `${e}px` : e != null ? e : void 0)(`calc(var(--left-panel-width) + ${e ? _$$_4 + 1 : 0}px)`)
  }]
};
let n1 = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M18 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6l-.204-.01A2 2 0 0 1 4 18V6a2 2 0 0 1 1.796-1.99L6 4zM5 16v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zM6 5a1 1 0 0 0-1 1v9h14V6a1 1 0 0 0-1-1z'
    })
  });
});
let n5 = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M15.647 3.147a.5.5 0 1 1 .707.707l-1.5 1.5q-.027.024-.056.045A3.48 3.48 0 0 1 15.464 8h-.22l.18.009c.885.09 1.576.838 1.576 1.747v.28l1.75-1.01a.5.5 0 0 0 .25-.433V6.5l.01-.1a.5.5 0 0 1 .99.1v2.093a1.5 1.5 0 0 1-.75 1.299L17 11.19V13h2.5a.5.5 0 0 1 0 1H17v1l-.007.256a5 5 0 0 1-.054.518l2.311 1.334c.464.268.75.764.75 1.3l-.001 1.091A.5.5 0 1 1 19 19.5v-1.094a.5.5 0 0 0-.25-.432l-2.077-1.2a5 5 0 0 1-9.347 0l-2.076 1.2a.5.5 0 0 0-.25.432V19.5a.5.5 0 0 1-.999 0L4 18.407c0-.535.286-1.031.75-1.3l2.31-1.333a5 5 0 0 1-.053-.518L7 15v-1H4.5a.5.5 0 0 1 0-1H7v-1.81L4.75 9.893a1.5 1.5 0 0 1-.75-1.3V6.5a.5.5 0 0 1 .99-.1l.01.1v2.093a.5.5 0 0 0 .25.433L7 10.036v-.28c0-.909.69-1.657 1.576-1.747L8.756 8h-.22a3.48 3.48 0 0 1 .665-2.602l-.055-.044-1.5-1.5-.064-.078a.5.5 0 0 1 .693-.694l.079.065 1.5 1.5.044.054a3.5 3.5 0 0 1 2.102-.7c.788 0 1.515.26 2.1.7l.046-.054zM8.756 9A.756.756 0 0 0 8 9.756V15a4 4 0 0 0 8 0V9.756A.756.756 0 0 0 15.244 9zM12 5a2.5 2.5 0 0 0-2.45 3h4.9q.05-.242.05-.5A2.5 2.5 0 0 0 12 5'
    })
  });
});
function lX({
  size: e,
  recordingKey: t
}) {
  let {
    title,
    placeholder,
    updateTitle
  } = _$$t7();
  return jsx(lG, {
    title: title ?? '',
    placeholder,
    updateTitle,
    size: e,
    recordingKey: t
  });
}
function lV({
  guid: e,
  size: t,
  recordingKey: i
}) {
  let {
    title,
    placeholder,
    updateTitle
  } = function (e) {
    let t = _$$Z3();
    let i = _$$z5({
      guid: e,
      isSite: !1
    });
    let {
      siteTitle,
      pageTitle,
      defaultPageTitleSuffix
    } = Fk(t => {
      let i;
      let n = t.getCurrentPage();
      let l = n?.responsiveSetSettings;
      let a = _$$wk(n).find(t => t.guid === e);
      (i = a?.name ?? '').startsWith('/') && (i = i.substring(1));
      (i = i.replace(/-/g, ' ')).length > 0 && (i = i.charAt(0).toUpperCase() + i.slice(1));
      let s = i;
      return {
        siteTitle: l?.title,
        pageTitle: a?.responsiveSetSettings?.title,
        defaultPageTitleSuffix: s ? ` - ${s}` : ''
      };
    });
    return {
      title: pageTitle,
      placeholder: siteTitle ? siteTitle + defaultPageTitleSuffix : t + defaultPageTitleSuffix,
      updateTitle: i
    };
  }(e);
  return jsx(lG, {
    title: title ?? '',
    placeholder,
    updateTitle,
    size: t,
    recordingKey: i
  });
}
function lG({
  title: e,
  placeholder: t,
  updateTitle: i,
  size: n,
  recordingKey: s
}) {
  let [r, o] = useState(e);
  let d = useRef(null);
  let c = useRef(!1);
  useEffect(() => {
    c.current || r === e || (o(e), d.current = null);
  }, [e, r]);
  let u = useHandleGenericEvent(s, 'blur', () => {
    c.current = !1;
    d.current?.();
  });
  useEffect(() => () => {
    d.current?.();
  }, []);
  return jsx(_$$p5, {
    value: r,
    onChange: e => {
      o(e);
      d.current = i(e);
    },
    placeholder: t,
    id: 'site-title-input',
    size: n,
    onKeyDown: e => {
      e.currentTarget === document.activeElement && (e.key === 'Escape' || e.key === 'Enter') && (e.stopPropagation(), e.currentTarget.blur());
    },
    htmlAttributes: {
      onBlur: u,
      onFocus: () => {
        c.current = !0;
      },
      autoComplete: 'off'
    },
    style: n === 'lg' ? _$$sx2.px12.$ : void 0,
    recordingKey: s
  });
}
let lZ = setupRemovableAtomFamily(() => atom(null));
let lQ = setupRemovableAtomFamily(() => atom(!1));
let l0 = 'styles-module--selectWebpagesButton--jz-y6';
var l1 = (e => (e.SECONDARY = 'secondary', e.DANGER = 'danger', e.WARNING = 'warning', e))(l1 || {});
function l5({
  icon: e,
  bannerType: t,
  title: i,
  children: n,
  legacyMargin: a,
  inLine: s
}) {
  return jsxs('div', {
    className: v()(_$$s4.$$case([[t === 'secondary', _$$s4.colorBgSecondary], [t === 'danger', _$$s4.colorBgDangerTertiary], [t === 'warning', _$$s4.colorBgWarningTertiary]]).$$if(a, _$$s4.mx16.mt16.mb20, _$$s4.mb12).$$if(s, _$$s4.flex.flexRow.itemsCenter.p8, _$$s4.pt4.pb8.px8).bRadius5.$),
    children: [e && jsx('div', {
      className: v()('styles-module--warningIconWrapper--1toyP', _$$s4.$$if(s, _$$s4.mbAuto, _$$s4.mb4).$),
      children: e
    }), i && jsx('h4', {
      className: _$$s4.textBodyMediumStrong.$,
      children: i
    }), n]
  });
}
function an({
  isPublished: e,
  dataTestId: t
}) {
  return jsx(_$$F5, {
    'className': _$$s4.inlineBlock.px4.bRadius5.textBodyMedium.$$if(e, _$$s4.colorBgSelected.colorTextBrand, _$$s4.colorBgSecondary.colorText).$,
    'data-testid': t,
    'children': e ? renderI18nText('sites.metadata.controls.publish_status.published') : renderI18nText('sites.metadata.controls.publish_status.not_published')
  });
}
function al({
  isSitePublished: e,
  allResponsiveSetGuids: t,
  selectedResponsiveSetGuids: i,
  lastSuccessfulPublishedResponsiveSetGuids: n,
  updateGuidSelectionState: a
}) {
  let s = _$$e6();
  return jsxs('div', {
    className: _$$s4.maxH400.$,
    children: [jsx('div', {
      className: _$$s4.h32.flex.itemsCenter.colorTextSecondary.$,
      children: getI18nString('sites.toolbar.publish_modal.ready_to_publish')
    }), s && jsx(as, {
      guid: s,
      isHomepage: !0,
      isSelected: i.has(s),
      onChange: a,
      isSitePublished: e,
      isPagePublished: n?.includes(s) ?? !1
    }), Array.from(i).filter(e => e !== s).map(t => jsx(as, {
      guid: t,
      isSelected: !0,
      onChange: a,
      isSitePublished: e,
      isPagePublished: n?.includes(t) ?? !1
    }, t)), t.some(e => !i.has(e)) && jsx('div', {
      className: _$$s4.h32.flex.itemsCenter.colorTextSecondary.$,
      children: getI18nString('sites.toolbar.publish_modal.hide_from_publish')
    }), t.filter(e => !i.has(e)).map(t => jsx(as, {
      guid: t,
      isSelected: !1,
      onChange: a,
      isSitePublished: e,
      isPagePublished: n?.includes(t) ?? !1
    }, t))]
  });
}
function aa({
  isSitePublished: e,
  isPagePublished: t
}) {
  return e ? jsx('div', {
    className: _$$s4.ml8.$,
    children: jsx(an, {
      isPublished: t,
      dataTestId: 'sitesPagePublishStatusBadge'
    })
  }) : null;
}
function as({
  guid: e,
  isSelected: t,
  onChange: i,
  isHomepage: n = !1,
  isSitePublished: s,
  isPagePublished: r
}) {
  let d = Fk(t => t.get(e)?.name, e);
  let c = Fk(t => t.get(e)?.responsiveSetSettings?.title ?? '', e);
  let p = useAtomWithSubscription(_$$up).inProgress;
  let x = `checkbox-${useId()}`;
  let m = `label-${useId()}`;
  return d ? jsxs('div', {
    className: _$$s4.h48.flex.flexRow.itemsCenter.$,
    children: [jsx(ManuallyLabeledCheckbox, {
      'htmlAttributes': {
        'data-testid': `${d}-checkbox`
      },
      'id': x,
      'disabled': p || n,
      'checked': t,
      'onChange': t => i(e, t),
      'aria-describedby': m
    }), jsx('div', {
      className: _$$s4.ml4.$,
      children: n ? jsx(_$$I2, {}) : jsx(_$$g3, {})
    }), jsx(Label, {
      htmlAttributes: {
        id: m
      },
      className: _$$s4.maxW250.ml4.$,
      children: c ? jsxs(Fragment, {
        children: [jsx(ar, {
          labelText: c,
          isSitePublished: s,
          isPagePublished: r
        }), jsx('div', {
          className: _$$s4.colorTextSecondary.maxW250.truncate.$,
          children: d
        })]
      }) : jsx(ar, {
        labelText: d,
        isSitePublished: s,
        isPagePublished: r
      })
    }), !t && s && r && jsx(_$$b7, {
      'className': _$$s4.mlAuto.colorIconWarningPressed.$,
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': getI18nString('sites.toolbar.publish_modal.page_will_unpublish_at_next_update'),
      'data-tooltip-show-above': !0,
      'data-tooltip-max-width': 300,
      'data-testid': 'page-unpublish-warning'
    })]
  }, e) : (logError('sites_publish_modal', 'node_not_found', {
    guid: e
  }), null);
}
function ar({
  labelText: e,
  isSitePublished: t,
  isPagePublished: i
}) {
  return jsxs('div', {
    className: _$$s4.flex.flexRow.itemsCenter.$,
    children: [jsx('div', {
      className: _$$s4.truncate.maxW150.$,
      children: e
    }), jsx('div', {
      children: jsx(aa, {
        isSitePublished: t,
        isPagePublished: i
      })
    })]
  });
}
function ax({
  fileKey: e,
  onClose: t
}) {
  let [i] = setupResourceAtomHandler(SiteMountWithPublishEvents.Query({
    fileKey: e
  }));
  if (i.status === _$$H3.LOADING) {
    return jsx(_$$k7, {
      'data-testid': 'loading-spinner'
    });
  }
  if (i.status === _$$H3.ERRORS) {
    return jsx('div', {
      children: getI18nString('sites.toolbar.publish_modal.error_loading_publish_history')
    });
  }
  let n = getResourceDataOrFallback(i.data?.siteMount);
  let a = n?.publishEvents ?? [];
  return a.length === 0 ? jsx('div', {
    children: getI18nString('sites.toolbar.publish_modal.no_publish_history')
  }) : jsx('div', {
    children: a.map(e => jsx(am, {
      publishEvent: e,
      isLatest: e.id === a[0]?.id,
      isOldest: e.id === a[a.length - 1]?.id,
      onClose: t
    }, e.id))
  });
}
function am({
  publishEvent: e,
  isLatest: t,
  isOldest: i,
  onClose: n
}) {
  let r;
  let o = useIsSelectedFigmakeFullscreen();
  let d = o ? getI18nString('figmake.publish_modal.publish_history_dropdown.published_app') : getI18nString('sites.toolbar.publish_modal.publish_history_dropdown.published_site');
  let c = o ? getI18nString('figmake.toolbar.publish_modal.publish_history_dropdown.unpublished_app') : getI18nString('sites.toolbar.publish_modal.publish_history_dropdown.unpublished_site');
  let p = () => {
    if (e.action !== 'unpublish' && e.siteBundle?.fileVersion?.label) return e.siteBundle.fileVersion.label;
    switch (e.action) {
      case 'publish_new_bundle':
        return i ? d : getI18nString('sites.toolbar.publish_modal.publish_history_dropdown.published_changes');
      case 'publish_preexisting_bundle':
        return getI18nString('sites.toolbar.publish_modal.publish_history_dropdown.republished_previous_version');
      case 'unpublish':
        return c;
      default:
        console.error(`Unknown publish event action: ${e.action}`);
        return null;
    }
  };
  let x = useDispatch();
  let m = Um();
  let h = useRef(null);
  let g = `site-publish-history-dropdown-${e.id}`;
  let f = m?.type === g;
  let _ = useCurrentFileKey();
  let {
    onUpdateBundle
  } = MT({
    fileKey: _ ?? ''
  });
  let y = JW(_);
  if (_$$$D({
    fileKey: _ ?? ''
  }), !p() || !_) {
    return null;
  }
  let v = () => {
    trackEventAnalytics('sites_publish_history_republish_clicked', {
      fileKey: _,
      siteBundleId: e.siteBundle?.id,
      productType: o ? 'figmake' : 'sites'
    });
    onUpdateBundle(e);
    n();
  };
  let j = [];
  e.action !== 'unpublish' && getFeatureFlags().sites_named_versions && j.push(jsx(_$$c$4, {
    onClick: () => {
      let {
        label,
        description,
        id
      } = e.siteBundle?.fileVersion ?? {};
      id && x(showModalHandler({
        type: _$$y5,
        data: {
          label: label ?? void 0,
          description: description ?? void 0,
          savepointID: id,
          hideShowFullVersionHistoryCTA: !0
        }
      }));
    },
    children: jsx('span', {
      'data-testid': 'name-this-version-button',
      'children': getI18nString('sites.toolbar.publish_modal.publish_history_dropdown.name_this_version')
    })
  }, 0));
  e.action !== 'unpublish' && !t && e.siteBundle?.id && j.push(jsx(_$$c$4, {
    onClick: () => v(),
    children: jsx('span', {
      'data-testid': 'republish-button',
      'children': getI18nString('sites.toolbar.publish_modal.publish_history_dropdown.republish')
    })
  }, 1));
  let k = j.length > 0;
  r = t ? ah.timelineLineFirst : i ? ah.timelineLineLast : ah.timelineLine;
  return jsxs('div', {
    className: 'x1n2onr6',
    children: [jsx('div', {
      ..._$$xk(r)
    }), jsxs('div', {
      'className': 'x78zum5 x1nhvcw1 x1qjc9v5 x1jnr06f x1n2onr6 x12nagc',
      'data-testid': 'publish-event-row',
      'children': [jsx('div', {
        className: 'x78zum5 xdt5ytf x1nhvcw1 x5yr21d xkh2ocl x1vjfegm',
        children: jsx('div', {
          className: 'x78zum5 x6s0dn4 xl56j7k xezl2tj xlrawln x167g77z x2lah0s x1d36bvo x1v8gsql x1gslohp',
          children: jsx(_$$z6, {})
        })
      }), jsxs('div', {
        className: 'x78zum5 x1qughib x19y5rnk xt0e3qv x163pfp xmzs88n x1iorvi4 xjkvuk6 xh8yej3 xv2f06h',
        children: [jsxs('div', {
          className: 'x78zum5 xdt5ytf x1jnr06f',
          children: [jsxs('div', {
            className: 'x78zum5 x1nhvcw1 x6s0dn4 xbcm6b9',
            children: [jsx('div', {
              className: 'x1j6dyjg x6xwguf x1akne3o',
              children: p()
            }), '\xB7', jsx('div', {
              className: 'x1j6dyjg x1n0bwc9',
              children: t ? getI18nString('sites.toolbar.publish_modal.publish_history_dropdown.latest') : getI18nString('sites.toolbar.publish_modal.publish_history_dropdown.published_date', {
                publishedDate: e.createdAt
              })
            })]
          }), jsx('div', {
            className: 'x1j6dyjg x1n0bwc9',
            children: e.action !== 'unpublish' && e.siteBundle?.fileVersion?.description ? e.siteBundle.fileVersion.description : t ? getI18nString('sites.toolbar.publish_modal.publish_history_dropdown.from_date', {
              publishedDate: e.createdAt
            }) : null
          }), jsxs('div', {
            className: 'x78zum5 x6s0dn4 x1jnr06f',
            children: [jsx(H8, {
              size: Pf.SMALL,
              user: e.actor || {
                handle: ' '
              }
            }), jsx('span', {
              children: e.actor?.handle
            })]
          })]
        }), f && h.current && jsx(Jz, {
          options: j,
          hideDropdown: () => {
            x(_$$oB());
          },
          targetRect: h.current.getBoundingClientRect(),
          lean: 'left'
        }), k && jsx(ButtonPrimitive, {
          'ref': h,
          'className': 'x1717udv xvy4d1p xxk0z11 x1epfdc xwbv1nw',
          'aria-label': getI18nString('sites.toolbar.publish_modal.version_operations', {
            publishedDate: e.createdAt,
            user: e.actor?.handle ?? getI18nString('sites.toolbar.publish_modal.unknown_user')
          }),
          'onClick': e => {
            x(_$$j2({
              type: g,
              data: {
                targetRect: e.currentTarget.getBoundingClientRect()
              }
            }));
          },
          'data-testid': 'more-button',
          'disabled': y.isLoading || y.isPublishing,
          'children': jsx(_$$J5, {})
        })]
      })]
    })]
  });
}
let ah = {
  timelineLine: {
    position: 'x10l6tqk',
    backgroundColor: 'x1v8gsql',
    width: 'x1i1rx1s',
    marginLeft: 'x1tpqehw',
    marginInlineStart: null,
    marginInlineEnd: null,
    paddingBottom: 'xjkvuk6',
    zIndex: 'x1ja2u2z',
    height: 'x5yr21d',
    $$css: !0
  },
  timelineLineFirst: {
    position: 'x10l6tqk',
    backgroundColor: 'x1v8gsql',
    width: 'x1i1rx1s',
    marginLeft: 'x1tpqehw',
    marginInlineStart: null,
    marginInlineEnd: null,
    marginTop: 'x1xmf6yo',
    zIndex: 'x1ja2u2z',
    height: 'x5yr21d',
    $$css: !0
  },
  timelineLineLast: {
    position: 'x10l6tqk',
    backgroundColor: 'x1v8gsql',
    width: 'x1i1rx1s',
    marginLeft: 'x1tpqehw',
    marginInlineStart: null,
    marginInlineEnd: null,
    zIndex: 'x1ja2u2z',
    height: 'x1kpxq89',
    $$css: !0
  }
};
function af({
  label: e,
  content: t,
  action: i,
  forceShortContentStyle: n
}) {
  return jsxs('div', {
    className: _$$s4.flex.justifyBetween.itemsCenter.minH24.$,
    children: [jsxs('div', {
      className: _$$s4.flex.itemsCenter.$,
      children: [jsx('div', {
        className: 'styles-module--publishModalRowLabel--WRR8e',
        children: jsx('span', {
          className: _$$s4.colorTextSecondary.$,
          children: e
        })
      }), jsx('div', {
        className: i || n ? 'styles-module--publishModalRowContent--YPJb5' : 'styles-module--publishModalRowContentLong--huC-L',
        children: t
      })]
    }), i && jsx('div', {
      className: _$$s4.maxW32.$,
      children: i
    })]
  });
}
function a_(e) {
  let {
    selectedResponsiveSetGuids,
    onViewErrors
  } = e;
  let n = useAtomWithSubscription(_$$o4);
  let a = Array.from(selectedResponsiveSetGuids).reduce((e, t) => e + (n[t]?.length ?? 0), 0);
  return jsx('div', {
    'data-testid': 'site-review-issues-row',
    'className': _$$s4.py4.$,
    'children': jsx(af, {
      label: getI18nString('sites.toolbar.publish_modal.issues_label'),
      content: a > 0 ? jsx('div', {
        className: _$$s4.flex.justifyBetween.itemsCenter.overflowHidden.$,
        children: jsx(ButtonPrimitive, {
          className: v()(_$$s4.wFull.flex.justifyBetween.py4.bRadius5.$),
          onClick: onViewErrors,
          children: jsx(_$$E6, {
            variant: 'warningFilled',
            children: renderI18nText('sites.toolbar.publish_modal.num_issues_to_review', {
              numIssues: a
            })
          })
        })
      }) : jsx('span', {
        children: renderI18nText('sites.lint.no-issues')
      }),
      action: a > 0 ? jsx(ButtonPrimitive, {
        'aria-label': getI18nString('sites.toolbar.publish_modal.review_issues_aria'),
        'className': v()(_$$s4.wFull.flex.justifyBetween.bRadius5.$, l0),
        'onClick': onViewErrors,
        'children': jsx(_$$a4, {
          style: {
            minWidth: 'fit-content'
          }
        })
      }) : null
    })
  });
}
function ab() {
  return jsx('div', {
    className: _$$s4.py4.$,
    children: jsx(af, {
      label: getI18nString('sites.toolbar.publish_modal.issues_label'),
      content: jsxs('div', {
        className: 'x78zum5 x1q0g3np',
        children: [jsx(_$$k7, {
          size: 'sm'
        }), jsx('span', {
          className: 'x1iog12x x1n0bwc9',
          children: renderI18nText('sites.lint.looking-for-issues')
        })]
      })
    })
  });
}
function ay(e) {
  return jsx(Suspense, {
    fallback: jsx(ab, {}),
    children: jsx(a_, {
      selectedResponsiveSetGuids: e.selectedResponsiveSetGuids,
      onViewErrors: e.onViewErrors
    })
  });
}
function aj(e) {
  let {
    selectedResponsiveSetGuids
  } = e;
  let i = useAtomWithSubscription(_$$o4);
  return Array.from(selectedResponsiveSetGuids).reduce((e, t) => e + (i[t]?.length ?? 0), 0) === 0 ? jsx(_$$tE, {
    title: getI18nString('sites.toolbar.publish_modal.no_issues.title'),
    description: getI18nString('sites.toolbar.publish_modal.no_issues.description')
  }) : jsx(F8, {
    lintingResults: i,
    onlyShowResponsiveSetGuids: Array.from(selectedResponsiveSetGuids),
    recordingKey: 'sites-publish-modal'
  });
}
function ak(e) {
  return jsx(_$$nB, {
    padding: 0,
    children: jsx(Suspense, {
      fallback: jsx(_$$j$2, {}),
      children: jsx(aj, {
        selectedResponsiveSetGuids: e.selectedResponsiveSetGuids
      })
    })
  });
}
let aC = '/legal/acceptable-publication-policy/';
let aT = '/legal/creator-agreement/';
let aI = '/product-specific-terms/';
function aE({
  isPublishing: e,
  isUpdating: t
}) {
  let i = null;
  return (e ? i = jsx(aN, {}) : t || (i = jsxs('div', {
    children: [jsx(aA, {}), jsx(aR, {})]
  })), i) ? jsx('div', {
    ..._$$Ay.props(aL.publishingSubtext),
    'data-testid': 'publishing-subtext',
    'children': i
  }) : null;
}
function aN() {
  return renderI18nText('sites.toolbar.publish_modal.publish_in_progress_description');
}
function aR() {
  let e = _$$a5();
  let t = useAtomWithSubscription(lZ);
  let i = useIsSelectedFigmakeFullscreen();
  let n = useTeamPlanPublicInfo();
  let a = useIsStarterOrProPlan(n).unwrapOr(!0);
  return i && t && getFeatureFlags().cmty_make_publishing ? a ? renderI18nText('sites.toolbar.publish_modal.community_publish_disclaimer', {
    creator_agreement: jsx(_$$CY, {
      href: aT,
      target: '_blank',
      trusted: !0,
      children: renderI18nText('sites.toolbar.publish_modal.creator_agreement')
    })
  }) : renderI18nText('sites.toolbar.publish_modal.community_publish_disclaimer_with_web', {
    creator_agreement: jsx(_$$CY, {
      href: aT,
      target: '_blank',
      trusted: !0,
      children: renderI18nText('sites.toolbar.publish_modal.creator_agreement')
    }),
    beta_terms: jsx(_$$CY, {
      href: aI,
      target: '_blank',
      trusted: !0,
      children: renderI18nText('sites.toolbar.publish_modal.beta_terms')
    })
  }) : e ? renderI18nText('sites.toolbar.publish_modal.acceptable_publication_policy_agreement', {
    acceptable_publication_policy: jsx(_$$CY, {
      href: aC,
      target: '_blank',
      trusted: !0,
      children: renderI18nText('sites.toolbar.publish_modal.acceptable_publication_policy')
    })
  }) : renderI18nText('sites.toolbar.publish_modal.terms_agreement', {
    figmas_beta_terms: jsx(_$$CY, {
      href: aI,
      target: '_blank',
      trusted: !0,
      children: renderI18nText('sites.toolbar.publish_modal.beta_terms')
    }),
    acceptable_publication_policy: jsx(_$$CY, {
      href: aC,
      target: '_blank',
      trusted: !0,
      children: renderI18nText('sites.toolbar.publish_modal.acceptable_publication_policy')
    })
  });
}
function aA() {
  return useIsSelectedFigmakeFullscreen() && (FontHelpers?.getLocalTextStyleFontInfo() || []).filter(e => e.source !== FontSourceType.GOOGLE).length !== 0 ? jsxs('div', {
    className: 'x78zum5 x1q0g3np x1jnr06f',
    children: [jsx(_$$B3, {
      style: {
        '--color-icon': 'var(--color-icon-secondary)'
      }
    }), jsx('div', {
      ..._$$Ay.props(aL.publishingSubtext),
      children: renderI18nText('sites.toolbar.publish_modal.make_fonts_warning')
    })]
  }) : null;
}
let aL = {
  publishingSubtext: {
    ..._$$g.textBodyMedium,
    marginBottom: 'xod5an3',
    color: 'x1n0bwc9',
    $$css: !0
  }
};
function aD({
  fileKey: e
}) {
  let t = useDispatch();
  let i = useIsSelectedFigmakeFullscreen();
  let n = _$$_t(e);
  let a = n ? jsx(_$$N6, {
    href: _$$uw(n),
    newTab: !0,
    children: jsx('span', {
      className: _$$s4.overflowHidden.ellipsis.colorTextBrand.$,
      children: _$$RT(n)
    })
  }) : jsxs('div', {
    className: _$$s4.flex.itemsStart.gap4.$,
    children: [jsx('span', {
      className: _$$s4.overflowHidden.ellipsis.colorTextSecondary.$,
      children: `example.${_$$nC()}`
    }), jsx(_$$B3, {
      'data-testid': 'info-icon',
      'style': {
        '--color-icon': 'var(--color-icon-secondary)'
      },
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': getI18nString('sites.toolbar.publish_modal.publish_your_site_to_get_your_figma_site_subdomain', {
        domain: _$$nC()
      }),
      'data-tooltip-show-immediately': !0,
      'data-tooltip-show-below': !0
    })]
  });
  let r = n ? jsx(_$$K2, {
    'onClick': () => {
      t(_$$lW2({
        stringToCopy: _$$uw(n),
        ignoreLineBreaks: !1
      }));
    },
    'aria-label': getI18nString('sites.toolbar.publish_modal.copy_label_to_clipboard', {
      label: getI18nString('sites.toolbar.publish_modal.domain_header')
    }),
    'htmlAttributes': {
      'data-tooltip': getI18nString('sites.toolbar.publish_modal.copy_to_clipboard'),
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip-show-immediately': 'true'
    },
    'children': jsx(_$$a6, {})
  }) : void 0;
  return jsx(af, {
    label: i ? getI18nString('figmake.toolbar.publish_modal.url_header') : getI18nString('sites.toolbar.publish_modal.site_url'),
    content: a,
    action: r
  });
}
function az({
  isSitePublished: e
}) {
  return jsx(l5, {
    bannerType: e ? l1.DANGER : l1.SECONDARY,
    children: jsxs('p', {
      className: _$$s4.pt4.flex.itemsCenter.gap8.fontMedium.$,
      children: [jsx(_$$b7, {
        style: {
          minWidth: '24px'
        }
      }), renderI18nText('sites.toolbar.publish_modal.publish_disabled_incident')]
    })
  });
}
function aX({
  hubFileId: e
}) {
  let [t] = setupResourceAtomHandler(_$$Z2({
    apiResourceType: 'file',
    id: e
  }));
  let i = t.data?.creator.name || t.data?.creator.handle;
  let n = t.data ? K2(t.data) : '';
  return t.status === 'errors' ? null : jsx('div', {
    className: 'show_love_modal--rowContainer--0t7nv',
    children: t.status === 'loaded' && t.data && jsxs(Fragment, {
      children: [jsxs('div', {
        className: 'show_love_modal--leftColumn--4BFPf',
        children: [jsx(_$$e7, {
          size: 16,
          entity: t.data.creator
        }), jsx('div', {
          children: jsxs('a', {
            href: _$$XW(t.data) ? VJ({
              resource: t.data
            }) : _$$_t2({
              resource: t.data
            }),
            target: '_blank',
            children: [jsx('span', {
              className: 'show_love_modal--resourceName--TDRVA',
              children: n
            }), jsx('span', {
              className: 'show_love_modal--creatorName--Gklrz',
              children: renderI18nText('community.figma_make.show_love.attribution_row', {
                author: i
              })
            })]
          })
        })]
      }), jsx('div', {
        className: 'show_love_modal--rightColumn--VCAkU',
        children: jsx(_$$fu, {
          name: _$$e4.FIGMA_MAKE_COMMUNITY_ATTRIBUTION,
          children: jsx(_$$Q3, {
            resource: t.data,
            viewContext: 'Figma Make Community Attribution',
            removeButtonBorder: !0
          })
        })
      })]
    })
  });
}
function aV() {
  let e = _$$G4();
  let {
    codeLibraryInstance
  } = _$$oA2();
  let i = _$$yj(codeLibraryInstance);
  let n = i.map(({
    hubFileId: e
  }) => _$$Z2({
    apiResourceType: 'file',
    id: e
  }));
  let a = setupMemoizedAtomSubscription(n);
  if (i.length === 0 || a.some(e => e.status === 'loading') || a.every(e => e.status === 'errors')) return null;
  let s = e.color === 'dark';
  return jsxs(Wk, {
    className: 'x1w7iyvz xdz8niu xa3vuyk x10e4vud',
    children: [jsxs('div', {
      className: 'show_love_modal--header--5nCB3',
      children: [jsx('div', {
        className: 'show_love_modal--imgContainer--LA7Fk',
        children: jsx(_$$oW, {
          src: buildUploadUrl(s ? '8c5f36e7686970472553e5da4650c78cb52673b0' : '5181875ecee4c670077941a2e262b305b425f77b')
        })
      }), jsx('div', {
        className: 'show_love_modal--headerText--fVEG9',
        children: getI18nString('community.figma_make.show_love.header')
      })]
    }), i.map(e => jsx(aX, {
      hubFileId: e.hubFileId
    }, e.hubFileId))]
  });
}
let a0 = aQ;
let a4 = {
  collectionLabel: {
    ..._$$g.textBodyMediumStrong,
    color: 'x3vvef7',
    marginBottom: 'xkdneqi',
    fontWeight: 'xh88oxj',
    $$css: !0
  },
  title: {
    ..._$$g.textBodyMedium,
    color: 'x1akne3o',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    textOverflow: 'xlyipyv',
    whiteSpace: 'xuxw1ft',
    $$css: !0
  },
  author: {
    ..._$$g.textBodySmall,
    color: 'x1n0bwc9',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    textOverflow: 'xlyipyv',
    whiteSpace: 'xuxw1ft',
    $$css: !0
  }
};
function a3({
  isFirst: e = !1,
  name: t,
  authorName: i,
  imageUrl: n,
  isLoading: a = !1
}) {
  return !e || a ? jsxs('div', {
    className: 'x1yjdb4r x19y5rnk x1mh6rdz x1sh0mly x78zum5 xdt5ytf xg2d0mh x193iq5w xeuugli',
    children: [jsx('div', {
      className: 'xb3r6kr x192jxwq x176lpz5 xh8yej3 xn6wvy2'
    }), jsx('div', {
      className: 'x78zum5 xdt5ytf x195vfkc xe0p6wg'
    })]
  }) : jsxs('div', {
    className: 'x1yjdb4r x19y5rnk x1mh6rdz x1sh0mly x78zum5 xdt5ytf xg2d0mh x193iq5w xeuugli',
    children: [jsx('div', {
      className: 'xb3r6kr x192jxwq x176lpz5 xh8yej3 xn6wvy2',
      children: n && jsx('img', {
        className: 'xh8yej3 x5yr21d x193iq5w xeuugli xl1xv1r x1lliihq x2lah0s',
        src: n,
        loading: 'lazy',
        alt: getI18nString('community.publishing.thumbnail_image'),
        draggable: !1
      })
    }), jsxs('div', {
      className: 'x78zum5 xdt5ytf x195vfkc xe0p6wg x15hkz2h',
      children: [t && jsx('div', {
        ..._$$xk(a4.title),
        children: t
      }), i && jsx('div', {
        ..._$$xk(a4.author),
        children: getI18nString('community.publishing.by_author', {
          authorName: i
        })
      })]
    })]
  });
}
function a8({
  fileKey: e
}) {
  let {
    data
  } = M4.useFile(e);
  let i = selectUser();
  let n = function (e) {
    let t = useSelector(t => Rv(e?.team_id ?? null, t, null, e?.parent_org_id ?? null), deepEqual);
    let i = useSelector(e => e.authedActiveCommunityProfile ?? void 0);
    return useMemo(() => {
      if (a0()(t)) return null;
      let e = _$$Tn(i);
      if (e && t.some(t => _$$f8(t, e))) return _$$j3(e)?.name ?? null;
      let n = t.find(_$$jr);
      if (n) return _$$j3(n)?.name ?? null;
      let l = t.find(MO);
      if (l) return _$$j3(l)?.name ?? null;
      let a = t.find(Z7);
      return a ? _$$j3(a)?.name ?? null : null;
    }, [t, i]);
  }(data ?? void 0);
  let [r, o] = useState('');
  let [d, c] = useState(null);
  let [p, x] = useState(!0);
  return (useEffect(() => {
    data && i && (o(data?.name || ''), DM(data, i).then(e => {
      c(e?.url ?? null);
      x(!1);
    }));
  }, [data, i]), i && data) ? jsxs('div', {
    className: 'x1v8gsql x19y5rnk xi4r6k5 x18d9i69 xkh2ocl x78zum5 xdt5ytf x7hzu26',
    children: [jsx('div', {
      ..._$$xk(a4.collectionLabel),
      children: getI18nString('sites.toolbar.publish_modal.make_collection_label')
    }), jsxs('div', {
      className: 'xrvj5dj x1p9eum2 x1nfngrj xzp6m1v xb3r6kr',
      children: [jsx(a3, {
        isFirst: !0,
        name: r,
        authorName: n,
        imageUrl: d,
        isLoading: p
      }), jsx(a3, {}), jsx(a3, {}), jsx(a3, {})]
    })]
  }) : null;
}
let a6 = {
  isCommunityPublishingToggledOffForStarter: !1,
  isCommunityPublishingDisabledForEmptyFigmakeFile: !1,
  cannotPublishAsHubFileReason: void 0,
  isHubFileRestrictionBlockingCommunityPublish: !1,
  isUpdatingCommunity: !1
};
function a7({
  fileKey: e,
  setCommunityPublishingState: t
}) {
  let i = useTeamPlanFeatures();
  let n = useIsStarterPlan(i).unwrapOr(!1);
  let a = useIsStarterOrProPlan(i);
  if (!useIsSelectedFigmakeFullscreen() || !getFeatureFlags().cmty_make_publishing || a.status !== 'loaded') return null;
  let s = a.data;
  return jsx(a9, {
    fileKey: e,
    isStarter: n,
    isStarterOrPro: s,
    setCommunityPublishingState: t
  });
}
function a9({
  fileKey: e,
  isStarter: t,
  isStarterOrPro: i,
  setCommunityPublishingState: n
}) {
  !function ({
    fileKey: e,
    setCommunityPublishingState: t
  }) {
    let i = useDispatch();
    let n = useIsSelectedFigmakeFullscreen();
    let l = selectCurrentFile();
    let r = getFeatureFlags().cmty_make_publishing ?? !1;
    let d = useAtomWithSubscription(lZ) ?? !1;
    let c = function () {
      let [e] = useAtomValueAndSetter(lZ);
      let t = useTeamPlanFeatures();
      let i = useIsStarterPlan(t);
      return !!useIsSelectedFigmakeFullscreen() && !!getFeatureFlags().cmty_make_publishing && (i.status !== 'loaded' || i.data && !e);
    }();
    let u = useAtomWithSubscription(_$$td) ?? !1;
    let p = n && d && r && u;
    let {
      canPublishAsHubFile,
      reason
    } = Of(l);
    let h = n && d && r && !1 === canPublishAsHubFile;
    let g = l?.publishedHubFile?.publishingStatus === _$$KB.APPROVED_PUBLIC;
    useEffect(() => {
      i(_$$rH({
        fileKey: e
      }));
    }, [i, e]);
    useEffect(() => {
      t({
        isCommunityPublishingToggledOffForStarter: c,
        isCommunityPublishingDisabledForEmptyFigmakeFile: p,
        cannotPublishAsHubFileReason: reason,
        isHubFileRestrictionBlockingCommunityPublish: h,
        isUpdatingCommunity: g
      });
    }, [t, c, p, reason, h, g]);
  }({
    fileKey: e,
    setCommunityPublishingState: n
  });
  let [r, d] = useAtomValueAndSetter(lZ);
  let [c, u] = useAtomValueAndSetter(lQ);
  let p = getFeatureFlags().cmty_make_publishing_default_off_for_pro ? t : i;
  return (useEffect(() => {
    c || (d(p), u(!0));
  }, [p, c, d, u]), r === null) ? null : jsxs('div', {
    className: 'x78zum5 x12sbs06 xdt5ytf x1cy8zhl x1nfngrj xkh2ocl x1n5zjp5 xfb5sle xh1goz3 x1gcgh60 x1jwbysl x1vamu9a',
    children: [jsx(se, {}), jsx(st, {}), r && jsx(a8, {
      fileKey: e
    })]
  });
}
function se() {
  let [e, t] = useAtomValueAndSetter(lZ);
  let i = useId();
  let n = useTeamPlanFeatures();
  let s = useIsStarterPlan(n).unwrapOr(!1);
  let r = useCallback(e => {
    e?.stopPropagation?.();
    t(e => !e);
  }, [t]);
  return jsxs('button', {
    onClick: r,
    className: 'x78zum5 xdt5ytf x1nfngrj x98rzlu xh8yej3 xkh2ocl',
    children: [jsxs('div', {
      className: 'x78zum5 x1q0g3np x1qughib x6s0dn4 x98rzlu x1nfngrj xkh2ocl',
      children: [jsx('div', {
        ..._$$xk(si.strongLabel),
        children: getI18nString('sites.toolbar.publish_modal.allow_others_to_remix_on_community')
      }), jsx(_$$v7, {
        id: i,
        checked: e ?? !1
      })]
    }), !(s && !e) && jsx('div', {
      ..._$$xk(si.subtitle),
      children: getI18nString('sites.toolbar.publish_modal.feature_on_community_subtitle')
    })]
  });
}
function st() {
  let [e] = useAtomValueAndSetter(lZ);
  let t = _$$ol();
  let i = _$$h7.useTrackingContext({
    trigger: UpsellModalType.FIGMAKE_PUBLISH_SITE
  });
  let n = useTeamPlanFeatures();
  let a = useIsStarterPlan(n);
  let s = _$$y6(t?.id || '', UpsellModalType.FIGMAKE_PUBLISH_SITE);
  return e || !a.data ? null : jsx('div', {
    children: renderI18nText('sites.toolbar.publish_modal.allow_others_to_remix_on_community.description', {
      upgradePlanLink: jsx(Us, {
        className: _$$s4.noWrap.cursorDefault.$,
        onClick: s,
        trackingProperties: {
          trackingDescriptor: _$$c8.PROFESSIONAL_PLAN,
          ...i
        },
        trusted: !0,
        children: renderI18nText('sites.toolbar.publish_modal.allow_others_to_remix_on_community.upgrade_plan_link')
      })
    })
  });
}
let si = {
  strongLabel: {
    ..._$$g.textBodyMediumStrong,
    $$css: !0
  },
  subtitle: {
    ..._$$g.textBodyMedium,
    color: 'x1n0bwc9',
    textAlign: 'xdpxx8g',
    $$css: !0
  }
};
let sr = registerModal(({
  figFileKey: e,
  entryPoint: t
}) => {
  let i = selectCurrentUser();
  let n = useCurrentUserOrg();
  let {
    status,
    data
  } = M4.useFile(e);
  let d = $S({
    fileKey: e,
    file: data ?? null
  });
  let c = useMemo(() => data ? d.status === 'loaded' && d.data.file ? Jj(d.data.file) : _$$bY(data) : void 0, [data, d]);
  let p = useSelector(t => {
    let i = t.figFilePublishedAsHubFile[e];
    return i ? t.hubFiles[i] : void 0;
  });
  return status === 'loading' || d.status === 'loading' ? null : c ? jsx(_$$fu, {
    name: _$$e4.COMMUNITY_HUB_FILE_PUBLISH_MODAL_V2,
    properties: {
      userId: i?.id,
      orgId: n?.id,
      resourceType: ResourceTypeNoComment.HUB_FILE,
      resourceId: p?.id,
      fileKey: e,
      editorType: _$$_Y.FIGMAKE,
      entryPoint: t
    },
    children: jsx(_$$S5, {
      figFile: c,
      existingHubFile: p,
      createNewVersionOnSubmit: !0
    })
  }) : jsx(_$$r3, {
    title: getI18nString('community.publishing.publish_your_file_to_community')
  });
});
function so({
  numUnpublishingPages: e
}) {
  return jsx(l5, {
    bannerType: l1.WARNING,
    icon: jsx(_$$b7, {}),
    inLine: !0,
    children: jsx('p', {
      children: getI18nString('sites.toolbar.publish_modal.pages_will_unpublish_with_the_next_update', {
        numPages: e
      })
    })
  });
}
var sd = (e => (e.Main = 'main', e.PageSelection = 'page-selection', e.ReviewIssues = 'review-issues', e.PublishHistory = 'publish-history', e))(sd || {});
function sc({
  isFigmake: e
}) {
  let t = e ? getI18nString('figmake.publish_modal.site_title_label') : getI18nString('sites.metadata.controls.title_site.label');
  return jsx('div', {
    'data-testid': 'site-title-row',
    'className': _$$s4.py4.$,
    'children': jsx(af, {
      label: t,
      content: jsx(lX, {}),
      forceShortContentStyle: !0
    })
  });
}
async function su(e, t, i) {
  try {
    await N0(e, t, i.guid, 'sites_publish');
  } catch (e) {
    console.warn('Failed to report lint errors during publish:', e);
  }
}
function sp({
  fileKey: e,
  onClose: t,
  onPublishChanges: i,
  onConnectDomainClick: n,
  isPublishing: r,
  lastSuccessfulPublishAt: d,
  allResponsiveSetGuids: c,
  selectedResponsiveSetGuids: p,
  publishedBy: x,
  lastPublishAttemptStatus: m,
  lastPublishAttemptAt: g,
  isSitePublished: f,
  lastSuccessfulPublishedResponsiveSetGuids: _,
  updateGuidSelectionState: b,
  hasPublishEvents: y,
  domainInfo: j
}) {
  let k = useDispatch();
  let [w] = _$$_I();
  let [S, C] = useState('main');
  let T = useTeamPlanFeatures();
  let I = useIsStarterPlan(T).unwrapOr(!1);
  let E = _$$ol();
  let N = selectCurrentUser();
  let R = useCurrentUserOrg();
  let A = useIsSelectedFigmakeFullscreen();
  let L = {
    top: _$$f7 + 8,
    right: 14
  };
  let P = A ? L : w;
  let O = getFeatureFlags().sts_ppp && !A;
  let F = !A;
  let M = null;
  switch (S) {
    case 'main':
      M = jsx(_$$nB, {
        children: jsxs('div', {
          className: _$$s4.py4.$,
          children: [jsx(sc, {
            isFigmake: A
          }), jsx('div', {
            'data-testid': 'site-domain-row',
            'className': _$$s4.py4.$,
            'children': jsx(aD, {
              fileKey: e
            })
          }), jsx('div', {
            'data-testid': 'site-status-row',
            'className': _$$s4.py4.$,
            'children': jsx(af, {
              label: getI18nString('sites.toolbar.publish_modal.status_header'),
              content: jsx('div', {
                className: _$$s4.flex.itemsCenter.h24.$,
                children: jsx(an, {
                  isPublished: f,
                  dataTestId: 'sitesPublishStatusBadge'
                })
              })
            })
          }), O && jsx('div', {
            'data-testid': 'site-pages-row',
            'className': _$$s4.py4.$,
            'children': jsx(af, {
              label: getI18nString('sites.toolbar.publish_modal.pages_label'),
              content: jsx('div', {
                className: _$$s4.flex.justifyBetween.itemsCenter.overflowHidden.$,
                children: jsx(ButtonPrimitive, {
                  className: v()(_$$s4.wFull.flex.justifyBetween.py4.bRadius5.$),
                  onClick: () => C('page-selection'),
                  children: renderI18nText('sites.toolbar.publish_modal.num_pages', {
                    numPages: p.size
                  })
                })
              }),
              action: jsx(ButtonPrimitive, {
                'aria-label': getI18nString('sites.toolbar.publish_modal.select_pages_to_publish'),
                'className': v()(_$$s4.wFull.flex.justifyBetween.bRadius5.$, l0),
                'onClick': () => C('page-selection'),
                'children': jsx(_$$a4, {
                  style: {
                    minWidth: 'fit-content'
                  }
                })
              })
            })
          }), F && jsx(ay, {
            selectedResponsiveSetGuids: p,
            onViewErrors: () => {
              C('review-issues');
              trackEventAnalytics('sites_open_lint_modal', {
                source: 'publish_modal'
              });
            }
          }), d && jsx('div', {
            'data-testid': 'site-last-published-row',
            'className': _$$s4.py4.$,
            'children': jsx(af, {
              label: getI18nString('sites.toolbar.publish_modal.last_published_header'),
              content: jsxs('div', {
                className: _$$s4.flex.itemsCenter.$,
                children: [jsx(_$$h5, {
                  date: d,
                  capitalize: !0
                }), x && jsxs('span', {
                  className: _$$s4.flex.justifyCenter.itemsCenter.ml4.$,
                  children: [` \xB7 `, jsxs('div', {
                    className: _$$s4.flex.justifyCenter.itemsCenter.$,
                    children: [jsx('div', {
                      className: _$$s4.flex.itemsCenter.justifyCenter.h24.w24.$,
                      children: jsx(H8, {
                        size: Pf.SMALL,
                        user: x || {
                          handle: ' '
                        }
                      })
                    }), jsx('span', {
                      className: 'styles-module--publishedByHandle--d-S6y',
                      children: x.handle
                    })]
                  })]
                })]
              }),
              action: getFeatureFlags().sts_revert_publish && y ? jsx(ButtonPrimitive, {
                'aria-label': getI18nString('sites.toolbar.publish_modal.publish_history'),
                'className': v()(_$$s4.wFull.flex.justifyBetween.bRadius5.$, l0),
                'onClick': () => {
                  C('publish-history');
                  trackEventAnalytics('sites_publish_history_opened', {
                    productType: A ? 'figmake' : 'sites'
                  });
                },
                'children': jsx(_$$a4, {
                  style: {
                    minWidth: 'fit-content'
                  }
                })
              }) : null
            })
          })]
        })
      });
      break;
    case 'page-selection':
      M = jsx(_$$nB, {
        children: jsx('div', {
          className: _$$s4.py4.$,
          children: jsx(al, {
            isSitePublished: f,
            allResponsiveSetGuids: c,
            selectedResponsiveSetGuids: p,
            lastSuccessfulPublishedResponsiveSetGuids: _,
            updateGuidSelectionState: b
          })
        })
      });
      break;
    case 'review-issues':
      M = jsx(ak, {
        selectedResponsiveSetGuids: p
      });
      break;
    case 'publish-history':
      M = jsx(_$$nB, {
        padding: {
          right: 8
        },
        children: jsx(ax, {
          fileKey: e,
          onClose: () => C('main')
        })
      });
      break;
    default:
      throwTypeError(S);
  }
  let D = _?.filter(e => !p.has(e)) || [];
  let z = function () {
    let e = useIsSelectedFigmakeFullscreen();
    let t = useIsFullscreenSitesView();
    return e ? !getFeatureFlags().bake_pub : !!t && !getFeatureFlags().sts_pub_enabled;
  }();
  let B = getFeatureFlags().cmty_make_publishing;
  let $ = useAtomWithSubscription(lZ) ?? !1;
  let U = A && B && $;
  let [{
    isCommunityPublishingToggledOffForStarter: K,
    isCommunityPublishingDisabledForEmptyFigmakeFile: H,
    cannotPublishAsHubFileReason: q,
    isHubFileRestrictionBlockingCommunityPublish: X,
    isUpdatingCommunity: V
  }, G] = useState(a6);
  let {
    inProgress,
    doSetup
  } = Hz({
    figFileKey: e
  });
  let J = useCallback(async () => {
    let t = getSingletonSceneGraph();
    let n = t.getCurrentPage();
    n && su(e, t, n);
    U ? (await doSetup()) && (trackEventAnalytics(_$$mv, {
      fileKey: e,
      userId: N?.id,
      orgId: R?.id,
      entryPoint: _$$k8.SITES_PUBLISH_MODAL,
      editorType: _$$_Y.FIGMAKE
    }), k(hideModalHandler()), k(showModalHandler({
      type: sr,
      data: {
        figFileKey: e,
        entryPoint: _$$k8.SITES_PUBLISH_MODAL
      }
    }))) : i();
  }, [U, doSetup, k, e, i, N, R]);
  let Z = U ? V : f;
  return jsxs(_$$bL2, {
    width: 380,
    onClose: t,
    defaultPosition: P,
    children: [jsxs(_$$vo, {
      children: [jsx(Y9, {
        children: jsx(sm, {
          view: S,
          setPublishModalView: C
        })
      }), M, S === 'main' && jsx(_$$Pt, {
        className: 'xi4r6k5',
        children: jsxs('div', {
          className: 'xh8yej3',
          children: [z && jsx(az, {
            isSitePublished: f
          }), m === 'failed' && g && !r && jsx(l5, {
            bannerType: l1.DANGER,
            children: jsxs('p', {
              className: _$$s4.pt4.flex.itemsCenter.gap8.fontMedium.$,
              children: [jsx(_$$z4, {
                style: {
                  minWidth: '16px'
                }
              }), d ? renderI18nText('sites.toolbar.publish_modal.last_update_failed') : renderI18nText('sites.toolbar.publish_modal.last_publish_failed')]
            })
          }), getFeatureFlags().sts_ppp && f && D.length > 0 && jsx(so, {
            numUnpublishingPages: D.length
          }), jsx(a7, {
            fileKey: e,
            setCommunityPublishingState: G
          }), X && q && jsx(l5, {
            bannerType: l1.WARNING,
            children: jsxs('p', {
              className: _$$s4.pt4.flex.itemsCenter.gap8.fontMedium.$,
              children: [jsx(_$$z4, {
                style: {
                  minWidth: '16px'
                }
              }), Yw(q)]
            })
          }), !K && jsx(aE, {
            isPublishing: r,
            isUpdating: Z
          }), jsxs('div', {
            className: _$$s4.flex.gap8.$,
            children: [j && !j.hasCustomDomain && jsx(ButtonWide, {
              'variant': 'secondary',
              'onClick': () => {
                I ? k(showModalHandler({
                  type: DV,
                  data: {
                    team: E,
                    resource: Bi.CONNECT_DOMAIN,
                    editorType: _$$_Y.SITES,
                    currentPlan: _$$F4.Plan.STARTER,
                    upsellPlan: _$$F4.Plan.PRO,
                    upsellSource: UpsellModalType.SITES_PUBLISH_MODAL
                  }
                })) : (n(), t());
              },
              'data-testid': 'sitesModalPublishButton',
              'children': renderI18nText('sites.toolbar.publish_modal.connect_a_domain')
            }), jsx(ButtonWide, {
              'variant': 'primary',
              'onClick': J,
              'disabled': r || inProgress || z || K || H || X,
              'data-testid': 'sitesModalPublishButton',
              'children': r || inProgress ? jsxs('div', {
                className: v()(_$$s4.flex.itemsCenter.gap4.justifyCenter.$, 'styles-module--loadingSpinnerWrapper--mnPxw'),
                children: [jsx(_$$k7, {
                  size: 'sm'
                }), renderI18nText('sites.toolbar.publish_modal.publishing_label')]
              }) : Z ? renderI18nText('sites.toolbar.publish_modal.update') : renderI18nText('sites.toolbar.publish_modal.publish')
            })]
          })]
        })
      })]
    }), A && jsx(aV, {})]
  });
}
function sx() {
  return jsx('span', {
    className: 'xilkfi8',
    children: jsx(_$$E6, {
      variant: 'inactiveOutline',
      children: getI18nString('general.beta')
    })
  });
}
function sm({
  view: e,
  setPublishModalView: t
}) {
  let i = useIsSelectedFigmakeFullscreen();
  let n = _$$a5();
  let a = i ? renderI18nText('figmake.publish_modal.modal_title') : renderI18nText('sites.toolbar.publish_modal.publish_site');
  let s = i && !n ? jsx(sx, {}) : null;
  switch (e) {
    case 'main':
      return jsxs(_$$hE, {
        children: [a, s]
      });
    case 'page-selection':
      return jsxs(_$$J4, {
        className: _$$s4.flex.itemsCenter.gap4.textBodyMediumStrong.$,
        children: [jsx(ButtonPrimitive, {
          'onClick': () => t('main'),
          'aria-label': getI18nString('general.back'),
          'children': jsx(_$$t6, {})
        }), jsxs('span', {
          className: _$$s4.colorTextSecondary.$,
          children: [a, ' /']
        }), jsx('span', {
          children: renderI18nText('sites.toolbar.publish_modal.pages_label')
        })]
      });
    case 'review-issues':
      return jsxs(_$$J4, {
        className: _$$s4.flex.itemsCenter.gap4.textBodyMediumStrong.$,
        children: [jsx(ButtonPrimitive, {
          'onClick': () => t('main'),
          'aria-label': getI18nString('general.back'),
          'children': jsx(_$$t6, {})
        }), jsxs('span', {
          className: _$$s4.colorTextSecondary.$,
          children: [a, ' /']
        }), jsx('span', {
          children: renderI18nText('sites.toolbar.publish_modal.review_issues_label')
        })]
      });
    case 'publish-history':
      return jsxs(_$$J4, {
        className: _$$s4.flex.itemsCenter.gap4.textBodyMediumStrong.$,
        children: [jsx(ButtonPrimitive, {
          'onClick': () => t('main'),
          'aria-label': getI18nString('general.back'),
          'children': jsx(_$$t6, {})
        }), jsxs('span', {
          className: _$$s4.colorTextSecondary.$,
          children: [a, ' /']
        }), jsx('span', {
          children: renderI18nText('sites.toolbar.publish_modal.publish_history_label')
        })]
      });
    default:
      throwTypeError(e);
  }
}
let sh = registerModal(e => {
  let t = function (e) {
    let {
      fileKey,
      onClose
    } = e;
    let {
      onPublishChanges,
      publishStatus
    } = HB({
      fileKey
    });
    let a = _$$y4(_$$p6.DOMAINS);
    let {
      allResponsiveSetGuids,
      selectedResponsiveSetGuids,
      updateGuidSelectionState
    } = _$$q5(publishStatus);
    let c = _$$_t(fileKey);
    let u = useAtomWithSubscription(_$$up).inProgress;
    if (publishStatus.isLoading || !selectedResponsiveSetGuids) return null;
    let {
      isPublishing,
      lastPublishedAt,
      publishedBy,
      lastAttemptedPublish,
      isNotPublished,
      lastSuccessfulPublishedResponsiveSetGuids,
      hasPublishEvents
    } = publishStatus;
    return {
      allResponsiveSetGuids,
      fileKey,
      hasPublishEvents,
      isPublishing: isPublishing || u,
      isSitePublished: !isNotPublished,
      lastPublishAttemptAt: lastAttemptedPublish?.completedAt || null,
      lastPublishAttemptStatus: lastAttemptedPublish?.status,
      lastSuccessfulPublishAt: lastPublishedAt,
      lastSuccessfulPublishedResponsiveSetGuids,
      onClose,
      onPublishChanges,
      onConnectDomainClick: a,
      publishedBy,
      selectedResponsiveSetGuids,
      updateGuidSelectionState,
      domainInfo: c
    };
  }(e);
  return e.fileKey && t ? jsx(sp, {
    ...t,
    ...e
  }) : null;
}, MM, ModalSupportsBackground.YES);
let sy = e => e.length === 1 && e[0] === QK.FILE_DENY_PUBLISH_SITE_LACKS_LICENSE ? 'must-upgrade' : e.includes(QK.FILE_DENY_PUBLISH_SITE_ORG_DISABLED_PUBLISHING) ? 'disabled-for-org' : e.includes(QK.FILE_DENY_EDIT_SITE_FILE_STUDENT) || e.includes(QK.FILE_DENY_EDIT_FIGMAKE_FILE_STUDENT) ? 'student-team' : e.includes(QK.FILE_DENY_PUBLISH_SITE_USER_RESTRICTED) ? 'disabled-for-user' : void 0;
function sv(e) {
  let t = e.key;
  let i = useDispatch();
  let n = JW(t);
  let {
    selectedResponsiveSetGuids
  } = _$$q5(n);
  let r = useIsSelectedFigmakeFullscreen();
  let o = useIsFullscreenSitesView();
  let d = useMemo(() => r ? G_.FIGMAKE : G_.SITES, [r]);
  let c = useTeamPlanFeatures();
  let p = useIsStarterPlan(c).unwrapOr(!1);
  let {
    isUpgradeHandlerLoadingCallback,
    handleUpgradeCallback,
    upgradeEligibilityCallback,
    hasPendingUpgradeRequestCallback,
    showUpgradeEntryPoint,
    canRequestUpgrade,
    upgradeDisabledReason
  } = function (e, t) {
    let i = function (e, t) {
      let i = useSubscription(FilePublishSitePermissions, {
        fileKey: e.key
      });
      return resourceUtils.useTransform(i, i => {
        let n = i.file?.canPublishSiteWithReasons;
        if (!n || n.status !== ResourceStatus.Loaded) {
          return {
            result: e.canEdit,
            canRequestUpgrade: !1
          };
        }
        let l = n.data;
        if (l.result) {
          return {
            result: !0,
            canRequestUpgrade: !1
          };
        }
        let a = sy(l.publicDenyReasons);
        let s = t ? getFeatureFlags().bake_monetization_plan : getFeatureFlags().sites_publish_upgrade_entry_point;
        return {
          result: !1,
          canRequestUpgrade: a === 'must-upgrade' && !!s,
          upgradeDisabledReason: a
        };
      });
    }(e, useIsSelectedFigmakeFullscreen());
    let {
      handleUpgrade,
      getUpgradeEligibility,
      hasPendingRequest,
      getIsUpgradeHandlerLoading
    } = _$$wH({
      folderId: null,
      entryPoint: _$$tc.PUBLISH_SITES
    });
    let o = useCallback(() => getUpgradeEligibility(t), [getUpgradeEligibility, t]);
    let d = useCallback(() => hasPendingRequest(t), [hasPendingRequest, t]);
    let c = useCallback(() => handleUpgrade({
      licenseType: t,
      upgradeReason: _$$i4.PUBLISH_SITES,
      entryPoint: _$$tc.PUBLISH_SITES
    }), [handleUpgrade, t]);
    let u = getIsUpgradeHandlerLoading();
    return {
      isUpgradeHandlerLoadingCallback: useCallback(() => u || i.status === 'loading', [u, i.status]),
      handleUpgradeCallback: c,
      upgradeEligibilityCallback: o,
      hasPendingUpgradeRequestCallback: d,
      showUpgradeEntryPoint: i.data && !i.data.result,
      canRequestUpgrade: i.data && i.data.canRequestUpgrade,
      upgradeDisabledReason: i.data && i.data.upgradeDisabledReason
    };
  }(e, d);
  let y = isUpgradeHandlerLoadingCallback();
  let v = r && getFeatureFlags().cmty_make_publishing;
  let j = p && !v && (r && getFeatureFlags().bake_starter_limit || o && getFeatureFlags().sts_starter_enabled);
  if (!isSitesFeatureEnabled() || !t || n.isLoading || !selectedResponsiveSetGuids || y) {
    return {
      isPublishingDisabled: !0,
      publishButtonProps: {
        recordingKey: 'publish-site',
        trackingProperties: {
          fileKey: t,
          productType: 'sites',
          trackingDescriptor: _$$c8.PUBLISH
        }
      }
    };
  }
  if (j) {
    return {
      handlePublish: () => {
        i(showModalHandler({
          type: DV,
          data: {
            team: e.team,
            resource: Bi.PUBLISH_SITE,
            currentPlan: _$$F4.Plan.STARTER,
            upsellPlan: _$$F4.Plan.PRO,
            editorType: o ? _$$_Y.SITES : _$$_Y.FIGMAKE,
            upsellSource: r ? UpsellModalType.FIGMAKE_PUBLISH_SITE : UpsellModalType.UNSET
          }
        }));
      }
    };
  }
  if (showUpgradeEntryPoint) {
    if (canRequestUpgrade) {
      let e = hasPendingUpgradeRequestCallback();
      let t = upgradeEligibilityCallback() === _$$q4.CANNOT_UPGRADE;
      return {
        handlePublish: t ? _$$lQ : handleUpgradeCallback(),
        isPublishingDisabled: t,
        publishButtonTooltipHtmlAttributes: {
          'data-tooltip': e ? getI18nString('fullscreen.toolbar.we_ve_sent_your_request_to_your_team_s_admins_we_ll_let_you_know_when_they_respond') : null,
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip-max-width': 200,
          'data-tooltip-show-below': !0
        },
        trackingContextKey: 'sites_publish_button_upgrade_entry_point'
      };
    }
    return {
      isPublishingDisabled: !0,
      publishButtonTooltipHtmlAttributes: {
        'data-tooltip': upgradeDisabledReason === 'disabled-for-org' ? getI18nString('sites.toolbar.org_disabled_publishing') : upgradeDisabledReason === 'student-team' ? getI18nString('sites.toolbar.publish_modal.publish_disabled_rollout') : upgradeDisabledReason === 'disabled-for-user' ? getI18nString('sites.toolbar.publishing_is_disabled_for_your_account_please_contact_support') : void 0,
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip-show-immediately': 'true'
      }
    };
  }
  return {
    handlePublish: () => {
      i(showModalConditional({
        type: sh,
        data: {
          fileKey: t
        }
      }));
    },
    publishButtonProps: {
      recordingKey: 'publish-site',
      trackingProperties: {
        fileKey: t,
        productType: 'sites',
        trackingDescriptor: _$$c8.PUBLISH
      }
    }
  };
}
function sj({
  file: e,
  isLarge: t,
  hasEllipsis: i
}) {
  let n = e.key;
  let a = t ? _$$c9 : Ih;
  let s = renderI18nText('sites.toolbar.publish');
  let r = renderI18nText('figmake.header.publish');
  _$$$D({
    fileKey: n
  });
  let o = sv(e);
  let d = jsx(a, {
    ...o.publishButtonProps,
    children: i ? s : r,
    disabled: o.isPublishingDisabled,
    htmlAttributes: {
      ...o.publishButtonTooltipHtmlAttributes,
      'data-onboarding-key': ZH
    },
    onClick: o.handlePublish,
    variant: 'secondary'
  });
  return 'trackingContextKey' in o && o.trackingContextKey ? jsx(_$$fu, {
    name: o.trackingContextKey,
    children: d
  }) : d;
}
function sT({
  asLargeVariant: e
} = {}) {
  let [t, i] = useAtomValueAndSetter(_$$gn);
  let n = $q();
  if (useEffect(() => () => {
    n();
  }, [n]), !getFeatureFlags().bake_mobile_preview) {
    return null;
  }
  let s = e ? _$$y8 : setupToggleButton;
  let r = jsx(_$$k3, {});
  return jsx(s, {
    'variant': 'highlighted',
    'checked': t,
    'onIcon': r,
    'offIcon': r,
    'aria-label': getI18nString('figmake.mobile_preview'),
    'htmlAttributes': {
      'data-tooltip': getI18nString('figmake.mobile_preview'),
      'data-tooltip-type': KindEnum.TEXT
    },
    'onChange': () => i(!t)
  });
}
function sA({
  file: e
}) {
  let {
    getTriggerProps,
    manager
  } = _$$b5({
    initialPosition: 'bottom-end'
  });
  let n = useCurrentFileKey();
  let {
    openFigmakeFullscreenInNewTab
  } = Ve();
  let r = sv(e);
  _$$$D({
    fileKey: e.key
  });
  let d = useCallback(() => {
    analyticsEventManager.trackDefinedEvent('ai_for_production.figmake_open_preview_in_new_tab_clicked', {
      fileKey: n ?? ''
    });
    openFigmakeFullscreenInNewTab();
  }, [openFigmakeFullscreenInNewTab, n]);
  let c = useAtomWithSubscription(eventEmitterAtom);
  useEffect(() => {
    let e = () => {
      manager.setOpen(!0);
    };
    c.addEventListener(_$$hj, e);
    return () => c.removeEventListener(_$$hj, e);
  }, [manager, c]);
  return jsxs(_$$bL3, {
    manager,
    children: [jsx(_$$c9, {
      'children': renderI18nText('figmake.header.publish'),
      'variant': 'secondary',
      'data-testid': 'make-publish-button',
      'htmlAttributes': {
        ...r.publishButtonTooltipHtmlAttributes,
        'data-onboarding-key': ZH
      },
      ...r.publishButtonProps,
      ...getTriggerProps()
    }), jsxs(_$$mc, {
      children: [jsxs(q7, {
        onClick: d,
        htmlAttributes: {
          'data-onboarding-key': NR
        },
        children: [jsx(Q$, {
          children: jsx(_$$K3, {})
        }), getI18nString('sites.toolbar.make_publish_menu.preview_in_new_tab')]
      }), jsxs(q7, {
        disabled: r.isPublishingDisabled,
        onClick: r.handlePublish ?? _$$lQ,
        htmlAttributes: {
          'data-onboarding-key': _$$eq
        },
        children: [jsx(Q$, {
          children: jsx(_$$J8, {})
        }), getI18nString('sites.toolbar.make_publish_menu.publish_to_web')]
      })]
    })]
  });
}
function sq(e, t, i = qB.SIGN_IN) {
  let n = _$$Y();
  return useCallback(() => {
    UK(e);
    n({
      origin: t,
      formState: i
    });
  }, [n, e, t, i]);
}
function sX() {
  let e = sq('SIGN_UP_BUTTON_BANNER', _$$ty.FIGMA_REV_LOGGED_OUT_HEADER, qB.SIGN_UP);
  return jsx(ButtonLarge, {
    htmlAttributes: {
      'data-test-id': 'email-btn'
    },
    onClick: e,
    children: renderI18nText('footer_banner.sign_up_with_email')
  });
}
function sV() {
  let e = useDispatch();
  return jsxs(Fragment, {
    children: [jsx(_$$H4, {
      large: !0,
      brandTextColor: !0,
      onClick: () => {
        UK('GOOGLE_SSO_BUTTON');
        Rm({
          dispatch: e,
          origin: _$$ty.FIGMA_REV_LOGGED_OUT_HEADER_WITH_GOOGLE,
          redirectUrl: customHistory.location.pathname
        }).then(t => {
          t.type === 'login' && e(My({
            userId: t.user.id
          }));
        }, t => {
          _$$g4('google_signup_error', _$$ty.FIGMA_REV_LOGGED_OUT_HEADER_WITH_GOOGLE, {
            error: t.message
          });
          getFeatureFlags().ff_show_auth_modal_on_google_sso_error && Y2({
            dispatch: e,
            origin: _$$ty.FIGMA_REV_LOGGED_OUT_HEADER_WITH_GOOGLE,
            message: t.message,
            redirectUrl: customHistory.location.pathname
          });
        });
      },
      children: getI18nString('footer_banner.continue_with_google')
    }), jsx(_$$P3, {
      origin: DT.LOGGED_OUT_FILE,
      overrideUseFedCMPrompt: !1
    })]
  });
}
function sG() {
  return jsxs(Fragment, {
    children: [jsx(sX, {}), jsx('div', {
      className: 'x1bamp8i x7xtdkp',
      children: jsx(sV, {})
    })]
  });
}
function sW() {
  let e = sq('SHARE_BUTTON', _$$ty.FIGMA_REV_LOGGED_OUT_HEADER);
  return jsx(ButtonLarge, {
    variant: 'primary',
    onClick: e,
    children: getI18nString('fullscreen.toolbar.multiplayer.share')
  });
}
function sY() {
  let {
    canDuplicate
  } = _$$tz();
  let t = _$$e8();
  return (!getFeatureFlags().filter_pro_plus_sites_make_web || canDuplicate) && t;
}
function sJ({
  blockWithAuthModal: e
}) {
  let {
    duplicateFile
  } = _$$tz();
  let i = sY();
  let n = sq(Command.PAGE_DUPLICATE, _$$ty.FIGMA_REV_LOGGED_OUT_HEADER);
  return i ? jsx(ButtonLarge, {
    variant: 'secondary',
    onClick: e ? n : duplicateFile,
    htmlAttributes: {
      'data-onboarding-key': _$$S$
    },
    children: getI18nString('figmake.make_a_copy')
  }) : jsx(Fragment, {});
}
let sZ = _$$ex('figmake_open_fullscreen_preview_new_tab', () => {
  return jsxs('div', {
    className: 'x78zum5 xdt5ytf xl56j7k x6s0dn4',
    children: [jsx('div', {
      children: getI18nString('figmake.open_new_tab_preview')
    }), jsx('div', {
      className: 'xkrz9af x1470adl',
      children: getI18nString('figmake.open_new_tab_preview_footer')
    })]
  });
});
function sQ() {
  let {
    openFigmakeFullscreenInNewTab
  } = Ve();
  let t = useCurrentFileKey();
  let i = useCallback(() => {
    analyticsEventManager.trackDefinedEvent('ai_for_production.figmake_open_preview_in_new_tab_clicked', {
      fileKey: t ?? ''
    });
    openFigmakeFullscreenInNewTab();
  }, [openFigmakeFullscreenInNewTab, t]);
  return jsx(_$$J6, {
    'onClick': i,
    'aria-label': getI18nString('figmake.open_new_tab_preview'),
    'data-testid': 'open-fullscreen-preview-button',
    'htmlAttributes': {
      'data-tooltip': sZ,
      'data-tooltip-type': KindEnum.SPECIAL,
      'data-tooltip-offset-y': 2,
      'data-onboarding-key': NR
    },
    'children': jsx(_$$K3, {})
  });
}
function s0() {
  let e = Gu();
  let t = useCallback(() => {
    fullscreenValue.triggerActionEnumInUserEditScope(Command.COPY_MAKE_FOR_DESIGN);
  }, []);
  if (!getFeatureFlags().bake_canvas) return null;
  let i = getI18nString('figmake.copy-make-for-design');
  return jsx(_$$J6, {
    'onClick': t,
    'aria-label': i,
    'data-testid': 'copy-make-for-design-button',
    'htmlAttributes': {
      'data-tooltip': i,
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip-max-width': 200
    },
    'disabled': e,
    'children': jsx(_$$a7, {})
  });
}
function s1({
  children: e
}) {
  return jsx('div', {
    className: 'xe8ttls x78zum5 x6s0dn4 x1qughib x1n5zjp5 xk82a7y x15sc1rj x1n2onr6 x1yjdb4r x10w6t97',
    children: e
  });
}
function s5({
  selectedTab: e,
  setSelectedTab: t,
  figmakeInFullscreen: i,
  codeInstanceNodeToRender: n
}) {
  let a;
  let r = selectCurrentFile();
  let d = getRumLoggingConfig();
  let c = I4(n);
  let p = useDispatch();
  let [x, m] = useAtomValueAndSetter($C);
  let h = _$$_H2();
  let {
    getUpgradeEligibility
  } = _$$wH({
    folderId: null
  });
  if (getFeatureFlags().enable_make_code_view_for_dev_seat) {
    let e = r?.currentPlanUser?.seatTypeLicenseTypes?.includes(G_h.DEV_MODE);
    a = !!getFeatureFlags().bake_monetization_plan && !e && !!h;
  } else {
    let e = getUpgradeEligibility(G_h.FIGMAKE);
    a = !!getFeatureFlags().bake_monetization_plan && e !== _$$q4.UPGRADE_NOT_NEEDED && !!h;
  }
  return jsxs(s1, {
    children: [jsxs('div', {
      className: 'x78zum5 x6s0dn4 x98rzlu x1iyjqo2 x1r8uery x1nhvcw1 x1jnr06f',
      children: [i && jsx(_$$K2, {
        'aria-label': getI18nString('figmake.fullscreen_preview_back_to_files_tooltip'),
        'onClick': () => {
          p(_$$sf({
            view: 'recentsAndSharing'
          }));
        },
        'htmlAttributes': {
          'data-onboarding-key': Xe
        },
        'children': jsx(_$$m3, {})
      }), i ? jsx(_$$M, {}) : null, !i && jsxs(Fragment, {
        children: [jsx(_$$J6, {
          'onClick': () => {
            c();
          },
          'aria-label': getI18nString('figmake.refresh'),
          'htmlAttributes': {
            'data-tooltip': getI18nString('figmake.refresh'),
            'data-tooltip-type': KindEnum.TEXT
          },
          'children': jsx(_$$T4, {})
        }), jsx(_$$r4, {
          openText: getI18nString('sites.code_component.drawer.open_console_only'),
          hideText: getI18nString('sites.code_component.drawer.hide_console_only'),
          asLargeVariant: !0,
          children: jsx(n1, {})
        }), jsx(sT, {
          asLargeVariant: !0
        }), getFeatureFlags().internal_only_debug_tools && jsx(_$$J6, {
          'onClick': () => {
            m(!x);
          },
          'aria-label': x ? getI18nString('figmake.scope.hide_scope_view') : getI18nString('figmake.scope.show_scope_view'),
          'htmlAttributes': {
            'data-tooltip': x ? getI18nString('figmake.scope.hide_scope_view') : getI18nString('figmake.scope.show_scope_view'),
            'data-tooltip-type': KindEnum.TEXT
          },
          'children': jsx(n5, {
            style: {
              '--color-icon': '#3373C4'
            }
          })
        })]
      })]
    }), jsxs('div', {
      className: 'x78zum5 x6s0dn4 xl56j7k x167g77z x98rzlu',
      children: [i && jsx(s2, {}), !i && !a && jsx('div', {
        className: 'x1ek1gt5',
        children: jsxs(_$$bL, {
          'size': 'lg',
          'value': e,
          'legend': jsx(_$$q2, {
            children: getI18nString('figmake.panel.display_picker.hidden_legend')
          }),
          'onChange': e => {
            t(e);
            logAndTrackCTA({
              trackingContext: `make_${e === Ic.PREVIEW ? 'preview' : 'code_view'}_toggle`,
              fileKey: r?.key
            }, void 0, void 0, d);
          },
          'data-testid': 'code-display-toggle',
          'children': [jsx(_$$A6, {
            selectedValue: e,
            value: Ic.PREVIEW,
            IconComponent: _$$T5,
            text: getI18nString('figmake.preview.label')
          }), jsx(_$$A6, {
            selectedValue: e,
            value: Ic.CODE,
            IconComponent: _$$i3,
            text: getI18nString('figmake.code.label')
          })]
        })
      })]
    }), jsx(s4, {})]
  });
}
function s2() {
  let {
    getTriggerProps,
    manager
  } = _$$b5();
  let {
    exitFigmakeFullscreenView
  } = Ve();
  return jsxs('div', {
    className: 'x78zum5 x195vfkc',
    children: [jsx(_$$o3, {}), jsxs(_$$bL3, {
      manager,
      children: [jsx(_$$K2, {
        ...getTriggerProps(),
        'aria-label': getI18nString('fullscreen.filename_view.edit_file_menu'),
        'data-tooltip': void 0,
        'children': jsx(_$$r2, {})
      }), jsx(_$$mc, {
        children: jsx(q7, {
          onClick: exitFigmakeFullscreenView,
          children: getI18nString('figmake.open_in_editor_2')
        })
      })]
    })]
  });
}
function s4() {
  let e = selectCurrentFile();
  let t = useToggleFigmakeMode();
  return jsxs('div', {
    className: 'x78zum5 x6s0dn4 x167g77z x98rzlu x1iyjqo2 x1r8uery x13a6bvl',
    children: [e ? jsx(Fragment, {
      children: jsx(s8, {})
    }) : null, getFeatureFlags().switch_canvas_mode ? jsx(_$$K2, {
      'onClick': t,
      'aria-label': getI18nString('sites.panel.exit_make_mode'),
      'children': jsx(_$$A7, {})
    }) : null]
  });
}
function s3() {
  let e = useDispatch();
  let {
    keyboardShortcuts,
    isEditingFile,
    modalShown,
    orgUser,
    user,
    unsortedTeams
  } = DF();
  return jsx(_$$gs, {
    asFigmakeHeaderWidget: !0,
    dispatch: e,
    hide: !1,
    isEditingFile,
    keyboardShortcuts,
    modalShown,
    orgUser,
    shouldShowBottomRightZoomMenu: !1,
    unsortedTeams,
    user
  });
}
function s8() {
  let e = selectCurrentFile();
  let t = _$$k6();
  let i = e?.canView && !e?.canEdit;
  return t ? jsx(s6, {}) : i ? jsx(s7, {}) : jsx(re, {});
}
function s6() {
  let {
    figmakeInFullscreen
  } = Ve();
  let t = selectCurrentFile();
  return figmakeInFullscreen ? jsxs(Fragment, {
    children: [jsx(s3, {}), jsx(sJ, {
      blockWithAuthModal: !0
    }), jsx(sG, {})]
  }) : jsxs(Fragment, {
    children: [jsx(rt, {}), jsx(sQ, {}), jsx(sJ, {
      blockWithAuthModal: !0
    }), t && jsx(sW, {})]
  });
}
function s7() {
  let {
    figmakeInFullscreen
  } = Ve();
  let t = selectCurrentFile();
  let i = selectCurrentUser();
  let n = getWorkshopModeStatus(t?.key || '').enabled;
  return figmakeInFullscreen ? jsxs(Fragment, {
    children: [jsx(s3, {}), jsx(sJ, {}), t && jsx(_$$w2, {
      user: i,
      editingFile: t,
      isFileInWorkshop: n
    })]
  }) : jsxs(Fragment, {
    children: [jsx(rt, {}), jsx(sQ, {}), jsx(sJ, {}), t && jsx(_$$w2, {
      user: i,
      editingFile: t,
      isFileInWorkshop: n
    })]
  });
}
function s9() {
  let {
    handleHtmlToDesign,
    isProcessing,
    isEnabled
  } = _$$q6();
  let {
    getTriggerProps,
    manager
  } = _$$b5();
  let s = Gu();
  return getFeatureFlags().bake_m2d ? getFeatureFlags().bake_m2d_local ? jsxs(_$$bL3, {
    manager,
    children: [jsx(_$$J6, {
      'aria-label': getI18nString('sites.panel.copy_make_as_design'),
      'disabled': isProcessing || s || !isEnabled,
      ...getTriggerProps(),
      'children': jsx(_$$a3, {})
    }), jsxs(_$$mc, {
      children: [jsx(q7, {
        onClick: () => handleHtmlToDesign({
          mode: _$$y7.API,
          target: 'clipboard'
        }),
        children: getI18nString('sites.panel.copy_make_as_design_api')
      }), jsx(q7, {
        onClick: () => handleHtmlToDesign({
          mode: _$$y7.RESPONSIVE,
          target: 'clipboard'
        }),
        children: getI18nString('sites.panel.copy_make_as_design_responsive')
      }), jsx(q7, {
        onClick: () => handleHtmlToDesign({
          mode: _$$y7.ABSOLUTE,
          target: 'clipboard'
        }),
        children: getI18nString('sites.panel.copy_make_as_design_absolute')
      }), jsx(q7, {
        onClick: () => handleHtmlToDesign({
          mode: _$$y7.MIXED,
          target: 'clipboard'
        }),
        children: getI18nString('sites.panel.copy_make_as_design_mixed')
      })]
    })]
  }) : jsx(_$$J6, {
    'onClick': () => handleHtmlToDesign({
      mode: _$$y7.API,
      target: 'clipboard'
    }),
    'aria-label': getI18nString('sites.panel.copy_make_as_design'),
    'disabled': isProcessing || s || !isEnabled,
    'children': jsx(_$$a3, {})
  }) : null;
}
function re() {
  let {
    figmakeInFullscreen
  } = Ve();
  let t = _$$h4();
  let i = !getFeatureFlags().bake_publish_flow;
  let n = Fk(e => e.getCurrentPage()?.guid);
  let a = selectCurrentFile();
  let s = selectCurrentUser();
  let r = getWorkshopModeStatus(a?.key || '').enabled;
  let {
    codeLibraryInstance
  } = _$$oA2();
  let d = _$$yj(codeLibraryInstance).map(({
    hubFileId: e
  }) => _$$Z2({
    apiResourceType: 'file',
    id: e
  }));
  return (setupMemoizedAtomSubscription(d), a) ? figmakeInFullscreen ? jsxs(Fragment, {
    children: [jsx(s3, {}), jsx(s9, {}), jsx(sJ, {}), a && jsx(_$$w2, {
      user: s,
      editingFile: a,
      isFileInWorkshop: r
    })]
  }) : jsxs(Fragment, {
    children: [jsx(rt, {}), !t && i && jsx(sQ, {}), jsx(MR, {
      recordingKey: Fp,
      page: n
    }), jsx(s0, {}), jsx(s9, {}), getFeatureFlags().bake_publish_flow ? jsx(sA, {
      file: a
    }) : jsx('div', {
      'data-onboarding-key': _$$eq,
      'children': jsx(sj, {
        file: a,
        isLarge: !0
      })
    }), jsx(_$$w2, {
      user: s,
      editingFile: a,
      isFileInWorkshop: r
    })]
  }) : null;
}
function rt() {
  let e = useSelector(e => e.multiplayer);
  let t = useMemo(() => e.allUsers.find(t => t.sessionID === e.sessionID) || null, [e.allUsers, e.sessionID]);
  return t ? jsx('div', {
    className: 'xl010v5',
    children: jsx(_$$v6, {
      multiplayer: e,
      dropdownShown: null,
      currentUser: t,
      onUserClick: _$$lQ
    })
  }) : null;
}
function ru() {
  let e = _$$wT();
  let t = useCurrentFileKey();
  let i = async () => {
    if (t) {
      _$$oU({
        persistentEntityId: '',
        clientLifecycleId: ''
      }, 'settings', t);
      try {
        await _$$R3.disconnectFile({
          fileKey: t
        });
        await _$$R3.deauthorizeFile({
          fileKey: t
        });
        e();
      } catch (e) {
        _$$lN(e);
      }
    }
  };
  return jsx(Gt, {
    children: jsx(_$$p7, {
      inactive: !0,
      header: getI18nString('figmake.settings.auth_expired.title'),
      badge: jsx(_$$E6, {
        variant: 'dangerOutline',
        children: getI18nString('figmake.settings.auth_expired.badge')
      }),
      actions: jsxs(Fragment, {
        children: [jsx(Button, {
          variant: 'primary',
          onClick: i,
          children: getI18nString('figmake.settings.auth_expired.button')
        }), jsx(_$$K2, {
          'aria-label': getI18nString('figmake.settings.auth_expired.delete_label'),
          'htmlAttributes': {
            'data-tooltip': getI18nString('figmake.settings.auth_expired.delete_label'),
            'data-tooltip-type': 'text'
          },
          'onClick': () => {
            t && _$$R3.disconnectFile({
              fileKey: t
            });
          },
          'children': jsx(_$$z7, {})
        })]
      })
    })
  });
}
function rx() {
  return jsxs(Gt, {
    children: [jsx(_$$p_, {}), jsx(_$$cG, {}), jsxs('div', {
      className: 'x78zum5 xdt5ytf x1tamke2 xou54vl',
      children: [jsxs('div', {
        className: 'x78zum5 xdt5ytf x1cy8zhl',
        children: [jsx('p', {
          ..._$$Ay.props(_$$g.textBodyLargeStrong),
          children: getI18nString('figmake.settings.connect_existing_project.status.title')
        }), jsx('p', {
          ..._$$Ay.props(rm.textBodyMediumSecondary),
          children: getI18nString('figmake.settings.connect_existing_project.status.subtitle')
        })]
      }), jsx(_$$K4, {
        source: 'settings'
      })]
    })]
  });
}
let rm = {
  textBodyMediumSecondary: {
    ..._$$g.textBodyMedium,
    color: 'x1n0bwc9',
    $$css: !0
  }
};
function rj() {
  let e = useCurrentFileKey();
  let t = getAtomMutate(_$$rY);
  let i = Xr(Kj);
  let {
    connectedProject,
    isConnectedNonOwner
  } = GC();
  let a = RK();
  return async () => {
    if (e) {
      if (isConnectedNonOwner) {
        if (!a) return;
        let e = a.name;
        i({
          projectName: getI18nString('figmake.settings.connected_project.multiplayer.project', {
            name: e
          }),
          orgName: getI18nString('figmake.settings.connected_project.multiplayer.org', {
            name: e
          }),
          ownerAvatar: a,
          state: 'nonOwnerDisconnecting'
        });
      } else {
        if (!connectedProject) return;
        i({
          project: connectedProject,
          state: 'disconnecting'
        });
      }
      await t({
        fileKey: e
      });
      await _$$r5();
      i(null);
    }
  };
}
function rk() {
  let e = Xr(_$$p8);
  let {
    connectedProject,
    connectedProjectExpired,
    isConnectedNonOwner
  } = zA();
  if (useEffect(() => () => {
    e(_$$Ut.INIT);
  }, [e]), isConnectedNonOwner) {
    return jsx(rI, {});
  }
  if (connectedProjectExpired) return jsx(rS, {});
  switch (connectedProject?.status.toLowerCase()) {
    case _$$TL.REMOVED:
      return jsx(rS, {});
    case _$$TL.INACTIVE:
    case _$$TL.PAUSING:
    case _$$TL.RESTORING:
      return jsx(rC, {});
    case _$$TL.ACTIVE_UNHEALTHY:
    case _$$TL.UNKNOWN:
    case _$$TL.INIT_FAILED:
    case _$$TL.RESTORE_FAILED:
    case _$$TL.PAUSE_FAILED:
      return jsx(rw, {});
    case _$$TL.ACTIVE_HEALTHY:
    default:
      return jsx(rT, {});
  }
}
function rw() {
  let {
    connectedProject
  } = zA();
  return jsx(Gt, {
    children: jsx(rR, {
      inactive: !0,
      badge: jsx(_$$E6, {
        variant: 'dangerOutline',
        children: getI18nString('figmake.settings.connected_project.generic_error.badge')
      }),
      actions: jsx(Fragment, {
        children: connectedProject && jsx(Button, {
          variant: 'primary',
          onClick: () => {
            FJ(_$$kR(connectedProject.id));
          },
          children: getI18nString('figmake.settings.connected_project.generic_error.button')
        })
      })
    })
  });
}
function rS() {
  let e = _$$h8({
    source: 'settings'
  });
  return jsx(Gt, {
    children: jsx(rR, {
      inactive: !0,
      header: getI18nString('figmake.settings.connected_project.removed.header'),
      badge: jsx(_$$E6, {
        variant: 'dangerOutline',
        children: getI18nString('figmake.settings.connected_project.removed.badge')
      }),
      actions: jsx(Button, {
        variant: 'primary',
        onClick: e,
        children: getI18nString('figmake.settings.connected_project.removed.button')
      })
    })
  });
}
function rC() {
  let {
    connectedProject
  } = zA();
  return jsx(Gt, {
    children: jsx(rR, {
      inactive: !0,
      badge: jsxs(Fragment, {
        children: [jsx(_$$E6, {
          variant: 'inactiveFilled',
          children: getI18nString('figmake.settings.connected_project.paused.badge')
        }), jsx('span', {
          'data-tooltip-type': 'text',
          'data-tooltip': getI18nString('figmake.settings.connected_project.paused.tooltip'),
          'data-tooltip-show-below': !0,
          'data-tooltip-show-immediately': !0,
          'children': jsx(_$$B3, {
            style: {
              '--color-icon': 'var(--color-icon-secondary)'
            }
          })
        })]
      }),
      actions: jsxs(Fragment, {
        children: [jsx(Button, {
          variant: 'primary',
          onClick: () => {
            connectedProject?.id && FJ(_$$kR(connectedProject.id));
          },
          children: getI18nString('figmake.settings.connected_project.paused.button')
        }), connectedProject && jsx(rN, {
          connectedProject
        })]
      })
    })
  });
}
function rT() {
  let {
    connectedProject
  } = zA();
  return jsx(Gt, {
    children: jsx(rR, {
      badge: jsx(_$$E6, {
        variant: 'successOutline',
        children: getI18nString('figmake.settings.connected_project.badge')
      }),
      actions: jsxs(Fragment, {
        children: [jsx(rE, {}), connectedProject && jsx(rN, {
          connectedProject
        })]
      })
    })
  });
}
function rI() {
  let e = RK();
  let t = e?.name ?? '';
  let i = rj();
  return jsx(Gt, {
    children: jsx(_$$p7, {
      badge: jsx(_$$E6, {
        variant: 'successOutline',
        children: getI18nString('figmake.settings.connected_project.badge')
      }),
      actions: jsx(Button, {
        variant: 'destructiveSecondary',
        onClick: i,
        children: getI18nString('figmake.settings.connected_project.disconnect_button')
      }),
      header: getI18nString('figmake.settings.connected_project.multiplayer.project', {
        name: t
      }),
      orgAlt: jsxs('div', {
        className: 'x78zum5 x6s0dn4 x1jnr06f',
        children: [jsx(_$$ls, {
          size: Pf.SMALL
        }), jsx('p', {
          ..._$$Ay.props(rA.textBodyMediumSecondary),
          children: getI18nString('figmake.settings.connected_project.multiplayer.org', {
            name: t
          })
        })]
      })
    })
  });
}
function rE() {
  let e = useAtomWithSubscription(_$$p8);
  let t = _$$A8();
  switch (e) {
    case _$$Ut.INIT:
      return jsx(Button, {
        variant: 'secondary',
        onClick: () => t({
          showVisualBells: !0
        }),
        children: getI18nString('figmake.settings.connected_project.deploy_button')
      });
    case _$$Ut.DEPLOYING:
      return jsx(_$$lV2, {
        variant: 'secondary',
        children: getI18nString('figmake.settings.connected_project.deploying_button')
      });
  }
}
function rN({
  connectedProject: e,
  isPending: t = !1
}) {
  let i = useDispatch();
  let n = BK('CONNECTED_PROJECT_MORE_MENU');
  let r = rj();
  let o = useMemo(() => [{
    displayText: getI18nString('figmake.settings.connected_project.dropdown.disconnect'),
    callback: r,
    disabled: t
  }, {
    displayText: '',
    separator: !0
  }, {
    displayText: getI18nString('figmake.settings.connected_project.dropdown.manage_project'),
    callback: () => {
      FJ(_$$kR(e.id));
    }
  }, {
    displayText: getI18nString('figmake.settings.connected_project.dropdown.manage_organization'),
    callback: () => {
      FJ(_$$n4(e.organization_id));
    }
  }, {
    displayText: getI18nString('figmake.settings.connected_project.dropdown.manage_secrets'),
    callback: () => {
      FJ(_$$C7(e.id));
    }
  }], [r, e, t]);
  let d = useRef(null);
  let c = d.current?.getBoundingClientRect();
  c || (n.showing && reportError(_$$e2.AI_PRODUCTIVITY, new Error('FigMake connected project view: dropdownBoundingRect is null')), c = new DOMRect(0, 0, 0, 0));
  return jsxs(Fragment, {
    children: [jsx(_$$d2, {
      'aria-expanded': n.showing,
      'ref': d,
      'aria-label': getI18nString('figmake.settings.connected_project.dropdown.label'),
      'onClick': () => n.toggle(),
      'htmlAttributes': {
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': getI18nString('figmake.settings.connected_project.dropdown.label')
      },
      'children': jsx(_$$J5, {})
    }), n.showing && jsx(noop, {
      dispatch: i,
      parentRect: c,
      onSelectItem: e => {
        e.callback && e.callback();
      },
      showPoint: !1,
      items: o,
      lean: 'left'
    })]
  });
}
function rR({
  badge: e,
  actions: t,
  inactive: i,
  header: n
}) {
  let {
    connectedProject
  } = zA();
  return jsx(_$$p7, {
    inactive: i,
    badge: e,
    actions: t,
    header: n ?? connectedProject?.name ?? ''
  });
}
let rA = {
  textBodyMediumSecondary: {
    ..._$$g.textBodyMedium,
    color: 'x1n0bwc9',
    $$css: !0
  }
};
function rP() {
  let e = _$$h8({
    source: 'settings'
  });
  return jsx(Gt, {
    children: jsxs('div', {
      className: 'x78zum5 xdt5ytf xl56j7k x6s0dn4 x2b8uid xh8yej3',
      children: [jsx(_$$p_, {}), jsxs('div', {
        className: 'x78zum5 xdt5ytf xl56j7k x6s0dn4 x1v2ro7d xiqz8rq x1gan7if',
        children: [jsx(rF, {}), jsxs('div', {
          className: 'x78zum5 xdt5ytf xl56j7k x6s0dn4 x2b8uid xfp4ol3',
          children: [jsx('p', {
            ..._$$Ay.props(rO.textBodyLargeStrong),
            children: getI18nString('figmake.settings.create_project.title')
          }), jsx('p', {
            ..._$$Ay.props(rO.textBodyMediumSecondary),
            children: getI18nString('figmake.settings.create_project.subtitle')
          })]
        }), jsx(Button, {
          variant: 'primary',
          onClick: e,
          children: getI18nString('figmake.settings.create_project.button')
        })]
      })]
    })
  });
}
let rO = {
  textBodyLargeStrong: {
    ..._$$g.textBodyLargeStrong,
    $$css: !0
  },
  textBodyMediumSecondary: {
    ..._$$g.textBodyMedium,
    color: 'x1n0bwc9',
    $$css: !0
  }
};
function rF() {
  return jsxs('svg', {
    width: '166',
    height: '112',
    viewBox: '0 0 166 112',
    children: [jsxs('g', {
      filter: 'url(#cardShadow)',
      children: [jsx('path', {
        d: 'M5.47935 20.8421C5.18009 16.5625 8.40677 12.8507 12.6863 12.5514L139.631 3.67459C143.91 3.37533 147.622 6.60201 147.922 10.8816L153.313 87.9778C153.612 92.2574 150.385 95.9692 146.106 96.2685L19.1611 105.145C14.8816 105.445 11.1697 102.218 10.8704 97.9383L5.47935 20.8421Z',
        fill: _$$Tj2.bg
      }), jsx('path', {
        d: 'M12.7036 12.8008L139.648 3.92396C143.79 3.63447 147.382 6.75716 147.672 10.8988L153.063 87.9957C153.353 92.1373 150.23 95.7297 146.088 96.0194L19.1435 104.896C15.0018 105.186 11.4094 102.062 11.1198 97.9204L5.72873 20.8245C5.43921 16.6828 8.56191 13.0905 12.7036 12.8008Z',
        stroke: _$$Tj2.border,
        strokeWidth: '0.5',
        fill: _$$Tj2.bg
      })]
    }), jsxs('g', {
      filter: 'url(#cardShadow)',
      children: [jsx('path', {
        d: 'M11.6949 16.2829C11.5452 11.9955 14.8995 8.39853 19.1869 8.24881L146.364 3.80769C150.651 3.65797 154.248 7.01222 154.398 11.2996L157.095 88.537C157.245 92.8244 153.891 96.4214 149.603 96.5711L22.4262 101.012C18.1388 101.162 14.5418 97.8077 14.3921 93.5203L11.6949 16.2829Z',
        fill: _$$Tj2.bg
      }), jsx('path', {
        d: 'M19.1954 8.49866L146.373 4.05753C150.522 3.91276 154.003 7.15892 154.148 11.3082L156.845 88.5462C156.99 92.6954 153.744 96.1766 149.595 96.3216L22.4173 100.763C18.268 100.908 14.7868 97.6605 14.6419 93.5111L11.9448 16.274C11.8 12.1247 15.0461 8.64365 19.1954 8.49866Z',
        stroke: _$$Tj2.border,
        strokeWidth: '0.5',
        fill: _$$Tj2.bg
      })]
    }), jsxs('g', {
      filter: 'url(#cardShadow)',
      children: [jsx('path', {
        d: 'M18 11.7678C18 7.47774 21.4777 4 25.7678 4H153.022C157.312 4 160.79 7.47774 160.79 11.7678V89.0522C160.79 93.3423 157.312 96.82 153.022 96.82H25.7678C21.4777 96.82 18 93.3423 18 89.0522V11.7678Z',
        fill: _$$Tj2.bg
      }), jsx('path', {
        d: 'M25.7676 4.25H153.022C157.174 4.25012 160.54 7.6158 160.54 11.7676V89.0527C160.54 93.2044 157.174 96.5702 153.022 96.5703H25.7676C21.6157 96.5702 18.25 93.2036 18.25 89.0518V11.7676C18.2501 7.61578 21.6158 4.2501 25.7676 4.25Z',
        stroke: _$$Tj2.border,
        strokeWidth: '0.5',
        fill: _$$Tj2.bg
      })]
    }), jsx('path', {
      d: 'M22.0039 10.2227C22.0039 8.57976 23.3358 7.24786 24.9788 7.24786H46.398C48.0409 7.24786 49.3728 8.57976 49.3728 10.2227V89.9496C49.3728 91.5926 48.0409 92.9245 46.398 92.9245H24.9788C23.3358 92.9245 22.0039 91.5926 22.0039 89.9496V10.2227Z',
      fill: _$$Tj2.bgSecondary
    }), jsx('path', {
      d: 'M88.7935 15.4865C88.7935 13.7575 90.1952 12.3558 91.9243 12.3558H133.492C135.222 12.3558 136.623 13.7575 136.623 15.4865V41.1115C136.623 42.8406 135.222 44.2423 133.492 44.2423H91.9243C90.1952 44.2423 88.7935 42.8406 88.7935 41.1115V15.4865Z',
      fill: _$$Tj2.bgSecondary
    }), jsx('path', {
      d: 'M59.8971 23.4583C59.8971 21.7292 61.2988 20.3275 63.0279 20.3275H78.6883C80.4174 20.3275 81.8191 21.7292 81.8191 23.4583V59.0478C81.8191 60.7768 80.4174 62.1785 78.6883 62.1785H63.0279C61.2988 62.1785 59.8971 60.7768 59.8971 59.0478V23.4583Z',
      fill: _$$Tj2.bgSecondary
    }), jsx('path', {
      d: 'M86.8003 53.7059C86.8003 51.781 88.3608 50.2206 90.2858 50.2206H105.502C107.427 50.2206 108.987 51.781 108.987 53.706V68.9218C108.987 70.8468 107.427 72.4072 105.502 72.4072H90.2858C88.3608 72.4072 86.8003 70.8468 86.8003 68.9218V53.7059Z',
      fill: _$$Tj2.bgSecondary
    }), jsx('path', {
      d: 'M105.503 71.2982V72.4075H90.2871V71.2982H105.503ZM107.879 68.9222V53.7064C107.879 52.3941 106.815 51.3294 105.503 51.3294H90.2871C88.9748 51.3294 87.9111 52.3941 87.9111 53.7064V68.9222C87.9113 70.2343 88.975 71.2982 90.2871 71.2982V72.4075L90.1074 72.4026C88.3253 72.3122 86.8969 70.8831 86.8066 69.1009L86.8018 68.9222V53.7064C86.8018 51.8417 88.266 50.3184 90.1074 50.2249L90.2871 50.221H105.503L105.683 50.2249C107.524 50.3184 108.988 51.8417 108.988 53.7064V68.9222L108.983 69.1009C108.893 70.8831 107.465 72.3122 105.683 72.4026L105.503 72.4075V71.2982C106.815 71.2982 107.879 70.2343 107.879 68.9222ZM78.6895 61.0696V62.178H63.0293V61.0696H78.6895ZM80.7109 59.0482V23.4583C80.7109 22.3419 79.8058 21.4368 78.6895 21.4368H63.0293C61.9129 21.4368 61.0078 22.3419 61.0078 23.4583V59.0482C61.008 60.1644 61.913 61.0696 63.0293 61.0696V62.178L62.8682 62.1741C61.2674 62.093 59.9837 60.8099 59.9023 59.2093L59.8984 59.0482V23.4583C59.8984 21.7832 61.2139 20.4152 62.8682 20.3314L63.0293 20.3275H78.6895C80.4185 20.3275 81.8203 21.7293 81.8203 23.4583V59.0482L81.8164 59.2093C81.7323 60.8633 80.3643 62.178 78.6895 62.178V61.0696C79.8057 61.0696 80.7107 60.1644 80.7109 59.0482ZM133.494 43.1331V44.2425H91.9258V43.1331H133.494ZM135.516 41.1116V15.4866C135.516 14.3704 134.61 13.4653 133.494 13.4651H91.9258C90.8094 13.4651 89.9043 14.3702 89.9043 15.4866V41.1116C89.9044 42.228 90.8094 43.1331 91.9258 43.1331V44.2425L91.7646 44.2386C90.1638 44.1575 88.8801 42.8736 88.7988 41.2728L88.7949 41.1116V15.4866C88.7949 13.8115 90.1104 12.4434 91.7646 12.3597L91.9258 12.3558H133.494L133.655 12.3597C135.309 12.4437 136.625 13.8117 136.625 15.4866V41.1116L136.62 41.2728C136.539 42.8734 135.256 44.1573 133.655 44.2386L133.494 44.2425V43.1331C134.61 43.1329 135.516 42.2278 135.516 41.1116Z',
      fill: _$$Tj2.border
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M33.0117 12.0071C33.9974 12.0072 34.7969 12.8066 34.7969 13.7923C34.7967 14.4133 34.4784 14.9589 33.9971 15.2786C34.4785 15.5984 34.7959 16.1457 34.7959 16.7669C34.7957 17.7525 33.9964 18.5521 33.0107 18.5521C32.5525 18.552 32.1364 18.377 31.8203 18.0931V19.7425C31.8201 20.7281 31.0208 21.5276 30.0352 21.5276C29.0496 21.5276 28.2502 20.7281 28.25 19.7425C28.25 19.1211 28.568 18.5739 29.0498 18.2542C28.5682 17.9345 28.2501 17.3881 28.25 16.7669C28.25 16.1458 28.5674 15.5984 29.0488 15.2786C28.5679 14.9588 28.2501 14.413 28.25 13.7923C28.25 12.8066 29.0494 12.0072 30.0352 12.0071H33.0117ZM30.0352 18.5521C29.378 18.5521 28.8457 19.0853 28.8457 19.7425C28.8459 20.3995 29.3782 20.9319 30.0352 20.9319C30.6922 20.9319 31.2254 20.3995 31.2256 19.7425V18.5521H30.0352ZM30.0254 15.5765C29.3728 15.5818 28.8457 16.113 28.8457 16.7669C28.8459 17.4239 29.3782 17.9563 30.0352 17.9564H31.2256V15.5775H30.0352C30.0319 15.5775 30.0286 15.5765 30.0254 15.5765ZM33.0117 15.5775H32.9902C32.3426 15.5885 31.8213 16.1166 31.8213 16.7669C31.8215 17.4239 32.3537 17.9563 33.0107 17.9564C33.6678 17.9564 34.201 17.4239 34.2012 16.7669C34.2012 16.113 33.6732 15.5817 33.0205 15.5765C33.0176 15.5765 33.0147 15.5775 33.0117 15.5775ZM30.0352 12.6019C29.378 12.6019 28.8457 13.1351 28.8457 13.7923C28.8459 14.4493 29.3782 14.9817 30.0352 14.9818H31.2256V12.6019H30.0352ZM31.8213 14.9818H33.0117C33.6687 14.9817 34.201 14.4493 34.2012 13.7923C34.2012 13.1351 33.6688 12.6019 33.0117 12.6019H31.8213V14.9818Z',
      fill: _$$Tj2.iconTertiary
    }), jsx('path', {
      d: 'M42.3361 16.2744C42.4522 16.1582 42.6411 16.1582 42.7573 16.2744C42.8733 16.3906 42.8727 16.5788 42.7566 16.695L41.2844 18.1672L39.8122 16.695C39.696 16.5788 39.6954 16.3906 39.8115 16.2744C39.9276 16.1582 40.1165 16.1582 40.2327 16.2744L41.2844 17.3261L42.3361 16.2744Z',
      fill: _$$Tj2.iconTertiary
    }), jsx('defs', {
      children: jsx('filter', {
        id: 'cardShadow',
        x: '0',
        y: '0',
        width: '180',
        height: '120',
        filterUnits: 'userSpaceOnUse',
        colorInterpolationFilters: 'sRGB',
        children: jsx('feDropShadow', {
          dx: '0',
          dy: '2',
          stdDeviation: '2.4',
          floodColor: 'black',
          floodOpacity: '0.15'
        })
      })
    })]
  });
}
function rM() {
  let e = useAtomWithSubscription(Kj);
  if (!e) return null;
  switch (e.state) {
    case 'connecting':
      {
        let {
          project
        } = e;
        return jsx(rD, {
          badgeText: getI18nString('figmake.settings.connecting_to_project.badge'),
          header: project.name,
          showMoreMenu: !0,
          project
        });
      }
    case 'disconnecting':
      {
        let {
          project
        } = e;
        return jsx(rD, {
          badgeText: getI18nString('figmake.settings.disconnecting_from_project.badge'),
          header: project.name,
          showMoreMenu: !0,
          project
        });
      }
    case 'nonOwnerDisconnecting':
      {
        let {
          projectName,
          orgName,
          ownerAvatar
        } = e;
        return jsx(rD, {
          badgeText: getI18nString('figmake.settings.disconnecting_from_project.badge'),
          header: projectName,
          orgAlt: jsxs('div', {
            className: 'x78zum5 x6s0dn4 x1jnr06f',
            children: [jsx(H8, {
              user: ownerAvatar,
              size: Pf.SMALL
            }), jsx('p', {
              ..._$$Ay.props(rz.textBodyMediumSecondary),
              children: orgName
            })]
          }),
          showMoreMenu: !1
        });
      }
  }
}
function rD({
  badgeText: e,
  header: t,
  showMoreMenu: i,
  project: n,
  orgAlt: a
}) {
  return jsx(Gt, {
    children: jsx(_$$p7, {
      inactive: !0,
      badge: jsx(_$$E6, {
        variant: 'inactiveOutline',
        children: e
      }),
      actions: jsxs(Fragment, {
        children: [jsx(_$$k7, {}), i && n && jsx(rN, {
          connectedProject: n,
          isPending: !0
        })]
      }),
      header: t,
      orgAlt: a
    })
  });
}
let rz = {
  textBodyMediumSecondary: {
    ..._$$g.textBodyMedium,
    color: 'x1n0bwc9',
    $$css: !0
  }
};
function r$() {
  let [e, t] = useAtomValueAndSetter(AA);
  let i = useAtomWithSubscription(Kj);
  let {
    authenticated,
    authenticationExpired,
    connectedProject,
    connectedProjectExpired,
    isConnectedNonOwner,
    existingProjects,
    isLoading
  } = zA();
  let x = _$$gJ();
  useEffect(() => {
    if (isLoading) {
      t(_$$hJ.LOADING_VIEW);
      return;
    }
    if (x) {
      t(_$$hJ.AUTH);
      return;
    }
    if (i) {
      t(_$$hJ.PENDING_PROJECT);
      return;
    }
    authenticated && authenticationExpired && !isConnectedNonOwner ? t(_$$hJ.AUTH_EXPIRED) : connectedProject || connectedProjectExpired || isConnectedNonOwner ? t(_$$hJ.CONNECTED_PROJECT) : authenticated && existingProjects.length ? t(_$$hJ.CONNECT_TO_EXISTING_PROJECTS) : authenticated ? t(_$$hJ.CREATE_PROJECT) : t(_$$hJ.AUTH);
  }, [authenticated, authenticationExpired, connectedProject, connectedProjectExpired, isConnectedNonOwner, t, isLoading, x, existingProjects.length, i]);
  return jsx('div', {
    className: 'x78zum5 xl56j7k x6s0dn4 x1tamke2',
    children: jsx(rq, {
      children: jsx(rU, {
        view: e
      })
    })
  });
}
function rU({
  view: e
}) {
  let t = useRef(!1);
  let i = useCurrentFileKey() || '';
  switch (useEffect(() => {
    if (t.current) return;
    let n = _$$oR({
      persistentEntityId: '',
      clientLifecycleId: ''
    }, 'settings', e, i);
    t.current = n;
  }, [e, i]), e) {
    case _$$hJ.AUTH:
      return jsx(rH, {});
    case _$$hJ.AUTH_EXPIRED:
      return jsx(ru, {});
    case _$$hJ.PENDING_PROJECT:
      return jsx(rM, {});
    case _$$hJ.CONNECTED_PROJECT:
      return jsx(rk, {});
    case _$$hJ.CREATE_PROJECT:
      return jsx(rP, {});
    case _$$hJ.CONNECT_TO_EXISTING_PROJECTS:
      return jsx(rx, {});
    case _$$hJ.LOADING_VIEW:
      return jsx(rK, {});
    default:
      _$$vF.error('FigMakeSupabaseSettingsInner: Unknown view');
      return null;
  }
}
function rK() {
  return jsx('div', {
    className: 'x78zum5 xl56j7k x6s0dn4 x98rzlu',
    children: jsx(_$$k7, {})
  });
}
function rH() {
  let e = _$$wT();
  let t = _$$gJ();
  let i = useCurrentFileKey() || '';
  let n = useCallback(() => {
    _$$oU({
      persistentEntityId: '',
      clientLifecycleId: ''
    }, 'settings', i);
    e();
  }, [e, i]);
  return jsxs('div', {
    className: 'x78zum5 xdt5ytf xl56j7k x6s0dn4 x1v2ro7d xeez02y',
    children: [jsx('div', {
      className: 'x78zum5 x100vrsf x1vqgdyp xl56j7k x6s0dn4 x1mxnbhz x1ci220x',
      children: jsx(SvgComponent, {
        svg: _$$A9,
        useOriginalSrcFills_DEPRECATED: !0,
        svgWidth: '16px',
        svgHeight: '16px'
      })
    }), jsxs('div', {
      className: 'x78zum5 xdt5ytf xl56j7k x6s0dn4 x2b8uid xvfrdwh',
      children: [jsx('p', {
        ..._$$Ay.props(rX.textBodyLargeStrong),
        children: getI18nString('figmake.settings.auth.title')
      }), jsxs('p', {
        ..._$$Ay.props(rX.textBodyLargeSecondary),
        children: [getI18nString('figmake.settings.auth.subtitle'), ' ', jsx('a', {
          target: '_blank',
          href: _$$kS,
          children: getI18nString('figmake.settings.auth.link')
        })]
      })]
    }), jsx(ButtonLarge, {
      variant: 'primary',
      onClick: n,
      disabled: t,
      htmlAttributes: {
        'data-tooltip': t ? getI18nString('figmake.settings.auth.disabled_tooltip') : void 0,
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip-show-immediately': 'true'
      },
      children: getI18nString('figmake.settings.auth.button')
    })]
  });
}
function rq({
  children: e
}) {
  return jsx('div', {
    className: 'x1mxnbhz x1ci220x x78zum5 xdt5ytf xht4xr3 x1qpco5h',
    children: e
  });
}
let rX = {
  textBodyLargeStrong: {
    ..._$$g.textBodyLargeStrong,
    $$css: !0
  },
  textBodyLargeSecondary: {
    ..._$$g.textBodyLarge,
    color: 'x1n0bwc9',
    $$css: !0
  }
};
let rQ = registerModal(({
  fontFileIds: e,
  fontName: t,
  open: i,
  onClose: n
}) => {
  let r = useDispatch();
  let [o, d] = useState(!1);
  let c = setupAutofocusHandler();
  let x = async () => {
    d(!0);
    let t = 0;
    try {
      let i = await XHR.del('/api/fonts', {
        font_ids: e
      });
      i.status === 200 && Object.keys(i.data.meta.errors).length > 0 && (t = Object.keys(i.data.meta.errors).length);
    } catch (i) {
      t = e.length;
    }
    t > 0 && r(VisualBellActions.enqueue({
      type: 'font_deleted',
      message: getI18nString('shared_fonts.unsuccessful_deletes', {
        numUnsuccessfulDeletes: t,
        totalDeletes: e.length
      }),
      icon: VisualBellIcon.EXCLAMATION,
      error: !0
    }));
    d(!1);
    n();
  };
  let m = useModalManager({
    open: i,
    onClose: n
  });
  return jsx(ModalRootComponent, {
    manager: m,
    width: 'md',
    children: jsxs(ModalFormContents, {
      onSubmit: e => {
        e.preventDefault();
        x();
      },
      children: [jsx(Y9, {
        children: jsx(_$$hE, {
          children: renderI18nText('sites.metadata.fonts.remove_font_from_this_site')
        })
      }), jsx(_$$nB, {
        children: jsx('div', {
          ..._$$xk(r0.bodyText),
          children: renderI18nText('sites.metadata.fonts.text_set_in_font_name_will_revert_to_a_default_sans_serif_font_when_this_site_is_published_you_ll_need_to_upload_the_file_again_to_use_it_later', {
            fontName: t
          })
        })
      }), jsx(_$$wi, {
        children: jsxs(_$$jk, {
          children: [jsx(Button, {
            variant: 'secondary',
            onClick: n,
            disabled: o,
            ref: c,
            children: renderI18nText('general.cancel')
          }), jsx(Button, {
            type: 'submit',
            variant: 'destructive',
            disabled: o,
            children: o ? renderI18nText('sites.metadata.fonts.removing') : renderI18nText('general.remove')
          })]
        })
      })]
    })
  });
}, 'DeleteUploadedFontModal');
let r0 = {
  bodyText: {
    ..._$$g.textBodyMedium,
    color: 'x1akne3o',
    $$css: !0
  }
};
function r1({
  fontKey: e,
  isUploading: t,
  onUpload: i,
  disabled: n = !1
}) {
  return jsx('div', {
    className: 'x78zum5 x13a6bvl',
    children: jsx(Button, {
      variant: 'secondary',
      disabled: n || t,
      onClick: t => i(t, e),
      children: t ? renderI18nText('sites.metadata.fonts.uploading') : renderI18nText('sites.metadata.fonts.upload')
    })
  });
}
function r5({
  fontFileIds: e,
  fontName: t
}) {
  let i = useDispatch();
  return jsx(_$$K2, {
    'aria-label': getI18nString('sites.metadata.fonts.delete_font'),
    'onClick': () => i(showModalHandler({
      type: rQ,
      data: {
        fontFileIds: e,
        fontName: t
      }
    })),
    'children': jsx(_$$z7, {})
  });
}
function r2({
  styles: e,
  displayName: t,
  showStylesSummary: i = !1
}) {
  let n = i && e.length > 1;
  return jsxs('div', {
    className: 'x98rzlu xeuugli',
    children: [jsx('div', {
      ..._$$xk(r8.name),
      children: t
    }), n && jsx('div', {
      ..._$$xk(r8.summary),
      children: renderI18nText('sites.metadata.fonts.styles_count', {
        numStyles: e.length,
        styles: formatList(e)
      })
    })]
  });
}
function r4({
  fileInputRef: e,
  onFileSelect: t
}) {
  return jsx('input', {
    ref: e,
    type: 'file',
    accept: '.woff,.woff2,font/woff,font/woff2',
    multiple: !0,
    style: {
      display: 'none'
    },
    onChange: t
  });
}
function r3() {
  return jsx('hr', {
    className: 'xqtp20y x1gs6z28 x1n5zjp5 x4mzsf2'
  });
}
let r8 = {
  name: {
    ..._$$g.textBodyMedium,
    color: 'x1akne3o',
    $$css: !0
  },
  summary: {
    ..._$$g.textBodyMedium,
    color: 'x1n0bwc9',
    $$css: !0
  }
};
function r9({
  styleName: e,
  fontFamily: t,
  data: i,
  renderAction: n
}) {
  return jsxs('div', {
    className: 'x78zum5 x1q0g3np x1qughib x6s0dn4 x1ba4aug x1duevw5 x1jwbysl xv2f06h',
    children: [jsx('div', {
      ..._$$xk(ol.styleName),
      children: e
    }), n({
      family: t,
      data: i,
      styleName: e
    })]
  });
}
function oe({
  styles: e,
  fontFamily: t,
  data: i,
  renderAction: n
}) {
  return jsx(Fragment, {
    children: e.map(e => {
      let a = `${t}-${e.style}`;
      return jsx(r9, {
        styleName: e.style,
        fontFamily: t,
        data: i,
        renderAction: n
      }, a);
    })
  });
}
function ot({
  family: e,
  data: t,
  isExpanded: i,
  onToggle: n,
  renderAction: a
}) {
  let {
    styles
  } = t;
  let r = styles.map(e => e.style);
  return jsxs(_$$bL5, {
    isOpen: i,
    toggle: n,
    children: [jsxs(_$$Y2, {
      ..._$$xk(os.header, i ? os.expandedHeight : os.collapsedHeight),
      children: [jsxs(JU, {
        ..._$$xk(os.label, i ? os.expandedHeight : os.collapsedHeight),
        children: [jsx(_$$O4, {
          ..._$$xk(oa.icon, i && oa.expanded)
        }), jsx(r2, {
          styles: r,
          displayName: e,
          showStylesSummary: !i
        })]
      }), !i && jsx(X0, {
        children: a({
          family: e,
          data: t
        })
      })]
    }), jsx(UC, {
      children: jsx(oe, {
        styles,
        fontFamily: e,
        data: t,
        renderAction: a
      })
    })]
  });
}
function oi({
  family: e,
  data: t,
  renderAction: i
}) {
  let {
    styles,
    isVariableFont
  } = t;
  let s = styles.length === 1 && styles[0] ? `${e} ${styles[0].style}` : e;
  let r = styles.map(e => e.style);
  return jsx('div', {
    className: 'x1duevw5 x1jwbysl xv2f06h',
    children: jsxs('div', {
      className: 'x78zum5 x1q0g3np x6s0dn4 xbktkl8',
      children: [jsx(r2, {
        styles: r,
        displayName: s,
        showStylesSummary: styles.length > 1 && !isVariableFont
      }), i({
        family: e,
        data: t
      })]
    })
  });
}
function on({
  family: e,
  data: t,
  expandedFonts: i,
  onToggleExpanded: n,
  renderAction: a
}) {
  let {
    styles,
    isVariableFont
  } = t;
  let o = styles.length === 1;
  let d = `${e}-${t.isUploaded ? 'uploaded' : 'not-uploaded'}`;
  let c = i.has(d);
  return o || isVariableFont ? jsx(oi, {
    family: e,
    data: t,
    renderAction: a
  }) : jsx(ot, {
    family: e,
    data: t,
    isExpanded: c,
    onToggle: () => n(d),
    renderAction: a
  });
}
let ol = {
  styleName: {
    ..._$$g.textBodyMedium,
    color: 'x1n0bwc9',
    $$css: !0
  }
};
let oa = {
  icon: {
    '--color-icon': 'xe5c7bq',
    'transition': 'x1jaox4c',
    'transitionBehavior': null,
    'transitionDelay': null,
    'transitionDuration': null,
    'transitionProperty': null,
    'transitionTimingFunction': null,
    '$$css': !0
  },
  expanded: {
    transform: 'x19jd1h0',
    $$css: !0
  }
};
let os = {
  header: {
    'display': 'x78zum5',
    'flexDirection': 'x1q0g3np',
    'alignItems': 'x6s0dn4',
    'minHeight': 'xbktkl8',
    'paddingRight': 'x1jwbysl',
    'paddingInlineStart': null,
    'paddingInlineEnd': null,
    ':hover_backgroundColor': 'xv2f06h',
    '$$css': !0
  },
  collapsedHeight: {
    minHeight: 'xbktkl8',
    $$css: !0
  },
  expandedHeight: {
    minHeight: 'x1ba4aug',
    $$css: !0
  },
  label: {
    display: 'x78zum5',
    flexDirection: 'x1q0g3np',
    alignItems: 'x6s0dn4',
    flex: 'x98rzlu',
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    minWidth: 'xeuugli',
    cursor: 'x1ypdohk',
    textAlign: 'xdpxx8g',
    paddingLeft: 'x1nz7w5u',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  }
};
var od = (e => (e.NOT_UPLOADED = 'NOT_UPLOADED', e.UPLOADED = 'UPLOADED', e))(od || {});
function oc({
  title: e,
  subtitle: t,
  type: i
}) {
  let n;
  i === 'NOT_UPLOADED' ? n = jsx(_$$m4, {
    className: 'x2lah0s xvijh9v x1aue78i xme1ltx x1v7gvps'
  }) : i === 'UPLOADED' && (n = jsx(_$$U3, {
    className: 'x2lah0s xvijh9v xmauxvm xe0morl x9cwpky'
  }));
  return jsxs('div', {
    className: 'x1yjdb4r',
    children: [jsxs('div', {
      className: 'x78zum5 x1q0g3np x1nfngrj x1cy8zhl x1w4f5ud x1vamu9a x8rdmch x1jwbysl',
      children: [n, jsxs('div', {
        className: 'x98rzlu xeuugli',
        children: [jsx('div', {
          ..._$$xk(ou.title),
          children: e
        }), jsx('div', {
          ..._$$xk(ou.subtext),
          children: t
        })]
      })]
    }), jsx(r3, {})]
  });
}
let ou = {
  title: {
    ..._$$g.textBodyLargeStrong,
    color: 'x1akne3o',
    paddingBottom: 'x1120s5i',
    $$css: !0
  },
  subtext: {
    ..._$$g.textBodyMedium,
    color: 'x1n0bwc9',
    $$css: !0
  }
};
let ox = ['font/woff', 'font/woff2'];
var om = (e => (e[e.UPLOADS_PARTIALLY_FAILED = 0] = 'UPLOADS_PARTIALLY_FAILED', e[e.STYLE_DOES_NOT_MATCH = 1] = 'STYLE_DOES_NOT_MATCH', e[e.FILE_SIZE_TOO_LARGE = 2] = 'FILE_SIZE_TOO_LARGE', e[e.FONT_DOES_NOT_MATCH = 3] = 'FONT_DOES_NOT_MATCH', e))(om || {});
async function oh(e, t, i) {
  let n = [];
  for (let l of e) {
    let e = XHR.post('/api/upnode/font', l, {
      params: {
        resourceType: 'file',
        resourceId: i,
        acceptedFonts: encodeURIComponent(JSON.stringify(t))
      },
      headers: {
        ...XHR.requiredHeaders,
        'content-type': function (e) {
          let t = e.name.toLowerCase();
          let i = e.type.toLowerCase();
          return t.endsWith('.woff2') ? 'font/woff2' : t.endsWith('.woff') ? 'font/woff' : ox.includes(i) ? i : (console.warn(`Unsupported font file: ${e.name} (type: ${e.type})`), '');
        }(l)
      },
      raw: !0
    });
    n.push(e);
  }
  let l = await Promise.allSettled(n);
  let a = l.some(e => e.status === 'rejected');
  let s = l.some(e => e.status === 'fulfilled');
  if (a && s) {
    return {
      success: !1,
      error: 0
    };
  }
  for (let e of l) {
    if (e.status === 'rejected') {
      try {
        let t = JSON.parse(e?.reason?.data);
        if (t?.meta?.styleNotInFamily) {
          return {
            success: !1,
            error: 1
          };
        }
      } catch {}
      return {
        success: !1,
        error: 3
      };
    }
  }
  return {
    success: !0
  };
}
function og(e, t, i, n) {
  for (let [l, a] of n.entries()) {
    if (a.postscriptName === t.postscriptName) return l;
    if (i && a.variationInstances) {
      for (let i of a.variationInstances) {
        if (i.postscriptName === t.postscriptName || e === a.family && i.name === t.style) return l;
      }
    }
    if (a.family === e && a.style === t.style) return l;
  }
  return null;
}
let of = atom({
  data: null,
  isLoading: !1,
  isStale: !1,
  error: null
});
let o_ = atom(e => e(of), (e, t) => {
  let i = e(of);
  if (i.data && !i.isStale || i.isLoading) return i;
  t(of, {
    ...i,
    isLoading: !0,
    error: null
  });
  try {
    let i = function () {
      try {
        let e = FontHelpers?.aggregateCustomFontsInSite()?.fonts;
        if (!e) return null;
        let t = {};
        let i = {
          postscriptNames: [],
          familyAndStyleNames: []
        };
        for (let n of e) {
          let {
            family,
            isVariableFont,
            styles
          } = n;
          for (let n of (t[family] = {
            styles: styles.map(e => ({
              style: e.style,
              postscriptName: e.postscriptName
            })),
            isVariableFont
          }, styles)) {
            i.postscriptNames.push(n.postscriptName);
            i.familyAndStyleNames.push(`${family}:${n.style}`);
          }
        }
        return {
          fontFamilies: t,
          acceptedFonts: i
        };
      } catch (e) {
        console.error('Failed to aggregate custom fonts:', e);
        return e;
      }
    }();
    t(of, {
      data: i,
      isLoading: !1,
      isStale: !1,
      error: null
    });
    return e(of);
  } catch (n) {
    t(of, {
      ...i,
      isLoading: !1,
      error: n
    });
    return e(of);
  }
});
function ob() {
  let e = useCurrentFileKey();
  let {
    data
  } = function () {
    let e = useAtomWithSubscription(o_);
    let t = Xr(o_);
    useEffect(() => {
      e.data || e.isLoading || e.error || t();
    }, [e, t]);
    return e;
  }();
  let i = data?.fontFamilies ?? {};
  let n = data?.acceptedFonts ?? {
    postscriptNames: [],
    familyAndStyleNames: []
  };
  let d = function () {
    let e = useCurrentFileKey();
    let t = useSubscription(WebFontsForFile({
      fileKey: e || ''
    }), {
      enabled: !!e
    });
    return t.status !== 'loaded' ? null : getResourceDataOrFallback(t.data?.webFonts) ?? null;
  }();
  let c = function (e, t) {
    let [i, n] = useState(new Set());
    let l = useDispatch();
    let d = function () {
      let [e, t] = useState(null);
      let i = useRef(null);
      let n = useCallback(() => {
        i.current?.click();
      }, []);
      let l = useCallback(() => {
        i.current && (i.current.value = '', t(null));
      }, []);
      return {
        uploadTarget: e,
        setUploadTarget: t,
        fileInputRef: i,
        triggerFileInput: n,
        resetFileInput: l
      };
    }();
    let [c, x] = useAtomValueAndSetter(_$$j4);
    let [m, h] = useAtomValueAndSetter(_$$s3);
    let g = useCallback((e, t) => {
      e.stopPropagation();
      d.setUploadTarget(t);
      d.triggerFileInput();
    }, [d]);
    let f = useCallback(e => {
      c !== _$$p6.FONTS || m !== PanelType.SETTINGS ? (h(PanelType.SETTINGS), x(_$$p6.FONTS)) : (d.setUploadTarget(e), d.triggerFileInput());
    }, [d, c, x, h, m]);
    let _ = useCallback((e, t, i) => {
      let n = {
        [om.UPLOADS_PARTIALLY_FAILED]: getI18nString('sites.metadata.fonts.some_files_were_not_uploaded_successfully_check_files_and_try_again'),
        [om.STYLE_DOES_NOT_MATCH]: getI18nString('sites.metadata.fonts.file_doesn_t_match_font_style_in_use_check_file_and_try_again', {
          numFiles: t
        }),
        [om.FONT_DOES_NOT_MATCH]: getI18nString('sites.metadata.fonts.file_doesn_t_match_font', {
          numFiles: t
        }),
        [om.FILE_SIZE_TOO_LARGE]: getI18nString('sites.metadata.fonts.file_size_is_over_limit_of_25_mb_and_couldn_t_be_uploaded')
      };
      let a = e !== om.FILE_SIZE_TOO_LARGE;
      n[e] ? l(VisualBellActions.enqueue({
        message: n[e],
        icon: VisualBellIcon.WARNING_EXCLAMATION_WITH_TRIANGLE,
        ...(a && {
          button: {
            text: getI18nString('sites.metadata.fonts.upload'),
            action: () => f(i)
          }
        })
      })) : l(FlashActions.error(getI18nString('general.an_error_occurred_while_performing_that_action')));
    }, [f, l]);
    let b = useCallback(async i => {
      let a = i.target.files;
      let {
        uploadTarget
      } = d;
      if (!a || a.length === 0 || !uploadTarget) {
        l(FlashActions.error(getI18nString('general.an_error_occurred_while_performing_that_action')));
        return;
      }
      let r = Array.from(a).filter(e => {
        let t = e.name.toLowerCase();
        return t.endsWith('.woff') || t.endsWith('.woff2');
      });
      if (r.length === 0) return;
      n(e => new Set(e).add(uploadTarget));
      l(VisualBellActions.enqueue({
        type: 'web-font-uploading',
        message: getI18nString('sites.metadata.fonts.uploading_font_file', {
          numFiles: r.length
        }),
        icon: VisualBellIcon.SPINNER,
        timeoutOverride: 1 / 0
      }));
      let o = await oh(r, e, t ?? '');
      l(VisualBellActions.dequeue({
        matchType: 'web-font-uploading'
      }));
      n(e => {
        let t = new Set(e);
        t.$$delete(uploadTarget);
        return t;
      });
      o.success ? l(VisualBellActions.enqueue({
        type: 'web-font-uploaded',
        message: getI18nString('sites.metadata.fonts.success_the_uploaded_font_is_ready_to_publish', {
          numFiles: r.length
        }),
        icon: VisualBellIcon.CHECK
      })) : _(o.error, r.length, uploadTarget);
      d.resetFileInput();
    }, [e, l, t, d, _]);
    return {
      ...d,
      uploadingFonts: i,
      handleUploadClick: g,
      handleFileSelect: b
    };
  }(n, e);
  let x = function (e = new Set()) {
    let [t, i] = useState(e);
    let n = useCallback(e => {
      i(t => {
        let i = new Set(t);
        i.has(e) ? i.$$delete(e) : i.add(e);
        return i;
      });
    }, []);
    let l = useCallback(e => t.has(e), [t]);
    return {
      expanded: t,
      toggle: n,
      isExpanded: l
    };
  }();
  let {
    notUploadedFonts,
    uploadedFonts
  } = function (e, t) {
    if (!t || t.length === 0) {
      let t = {};
      for (let [i, n] of Object.entries(e)) {
        t[i] = {
          ...n,
          isUploaded: !1
        };
      }
      return {
        notUploadedFonts: t,
        uploadedFonts: {}
      };
    }
    let i = {
      webFonts: t,
      matchedIndices: new Set(),
      uploadedFonts: {},
      notUploadedFonts: {}
    };
    for (let [t, n] of Object.entries(e)) {
      n.isVariableFont ? function (e, t, i) {
        let n = function (e, t, i) {
          for (let n of t) {
            let t = og(e, n, !0, i);
            if (t !== null) return t;
          }
          return null;
        }(e, t.styles, i.webFonts);
        n !== null ? (i.uploadedFonts[e] = {
          ...t,
          isUploaded: !0,
          isVariableFont: !0,
          fontFileId: i.webFonts[n]?.id ?? ''
        }, i.matchedIndices.add(n)) : i.notUploadedFonts[e] = {
          ...t,
          isUploaded: !1
        };
      }(t, n, i) : function (e, t, i) {
        let {
          uploadedStyles,
          notUploadedStyles
        } = function (e, t, i) {
          let n = [];
          let l = [];
          for (let a of t) {
            let t = og(e, a, !1, i.webFonts);
            t !== null ? (n.push({
              ...a,
              fontFileId: i.webFonts[t]?.id ?? ''
            }), i.matchedIndices.add(t)) : l.push(a);
          }
          return {
            uploadedStyles: n,
            notUploadedStyles: l
          };
        }(e, t.styles, i);
        uploadedStyles.length > 0 && (i.uploadedFonts[e] = {
          isUploaded: !0,
          isVariableFont: !1,
          styles: uploadedStyles
        });
        notUploadedStyles.length > 0 && (i.notUploadedFonts[e] = {
          isUploaded: !1,
          isVariableFont: !1,
          styles: notUploadedStyles
        });
      }(t, n, i);
    }
    !function (e) {
      for (let [t, i] of e.webFonts.entries()) {
        if (e.matchedIndices.has(t)) continue;
        let n = i.family;
        let l = e.uploadedFonts[n];
        l && !l.isVariableFont ? l.styles.push({
          postscriptName: i.postscriptName,
          style: i.style,
          fontFileId: i.id
        }) : e.uploadedFonts[n] = function (e) {
          let t = {
            postscriptName: e.postscriptName,
            style: e.style
          };
          if (e.variationInstances) {
            let i = e.variationInstances.map(e => ({
              postscriptName: e.postscriptName,
              style: e.name
            }));
            return {
              isUploaded: !0,
              isVariableFont: !0,
              fontFileId: e.id,
              styles: [t, ...i]
            };
          }
          return {
            isUploaded: !0,
            isVariableFont: !1,
            styles: [{
              ...t,
              fontFileId: e.id
            }]
          };
        }(i);
      }
    }(i);
    return {
      notUploadedFonts: i.notUploadedFonts,
      uploadedFonts: i.uploadedFonts
    };
  }(i, d);
  if (!i || Object.keys(i).length === 0) return null;
  let g = Object.keys(notUploadedFonts).length > 0;
  let f = Object.keys(uploadedFonts).length > 0;
  return jsxs('div', {
    children: [jsx(r4, {
      fileInputRef: c.fileInputRef,
      onFileSelect: c.handleFileSelect
    }), g && jsxs('div', {
      className: 'x1yjdb4r x1mxnbhz x1bamp8i xb3r6kr',
      children: [jsx(oc, {
        type: od.NOT_UPLOADED,
        title: renderI18nText('sites.metadata.fonts.upload_web_fonts'),
        subtitle: renderI18nText('sites.metadata.fonts.to_ensure_these_fonts_display_correctly_on_your_published_site_upload_their_woff_w_o_f_f_2_files', {
          learnMoreLink: jsx(_$$N6, {
            href: '#',
            children: renderI18nText('sites.metadata.domain.learn_more')
          })
        })
      }), Object.entries(notUploadedFonts).map(([e, t], i, n) => jsxs(_$$Fragment, {
        children: [jsx(on, {
          family: e,
          data: t,
          expandedFonts: x.expanded,
          onToggleExpanded: x.toggle,
          renderAction: e => {
            let t = e.styleName ? `${e.family}-${e.styleName}` : e.family;
            return jsx(r1, {
              fontKey: t,
              isUploading: c.uploadingFonts.has(t),
              onUpload: c.handleUploadClick
            });
          }
        }), i < n.length - 1 && jsx(r3, {})]
      }, e))]
    }), f && jsxs('div', {
      ..._$$xk(oy.section, g && oy.uploadedSection),
      children: [jsx(oc, {
        type: od.UPLOADED,
        title: renderI18nText('sites.metadata.fonts.uploaded_for_publishing'),
        subtitle: renderI18nText('sites.metadata.fonts.these_are_custom_fonts_for_this_site_other_fonts_available_for_publishing_like_google_fonts_won_t_appear_here')
      }), Object.entries(uploadedFonts).map(([e, t], i, n) => jsxs(_$$Fragment, {
        children: [jsx(on, {
          family: e,
          data: t,
          expandedFonts: x.expanded,
          onToggleExpanded: x.toggle,
          renderAction: e => {
            let t = e.data.isUploaded ? function (e, t) {
              if (e.isVariableFont) return [e.fontFileId];
              if (t) {
                let i = e.styles.find(e => e.style === t);
                if (i) return [i.fontFileId];
              }
              return e.styles.map(e => e.fontFileId);
            }(e.data, e.styleName) : [];
            let i = e.family;
            e.styleName ? i = `${e.family} ${e.styleName}` : e.data.isUploaded && e.data.styles.length === 1 && e.data.styles[0] && (i = `${e.family} ${e.data.styles[0].style}`);
            return jsx(r5, {
              fontFileIds: t,
              fontName: i
            });
          }
        }), i < n.length - 1 && jsx(r3, {})]
      }, e))]
    })]
  });
}
atom(null, (e, t) => {
  let i = e(of);
  t(of, {
    ...i,
    isStale: !0
  });
  i.isLoading || t(o_);
});
atom(null, (e, t) => {
  t(of, {
    data: null,
    isLoading: !1,
    isStale: !1,
    error: null
  });
});
let oy = {
  section: {
    backgroundColor: 'x1yjdb4r',
    borderRadius: 'x1mxnbhz',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
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
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    $$css: !0
  },
  uploadedSection: {
    marginTop: 'xehsoiq',
    $$css: !0
  }
};
let oj = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M17.5 6A1.5 1.5 0 0 1 19 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 16.5v-9A1.5 1.5 0 0 1 6.5 6zM8 17h9.5l.1-.01a.5.5 0 0 0 .39-.39l.01-.1v-9a.5.5 0 0 0-.4-.49L17.5 7H8zM6.5 7a.5.5 0 0 0-.5.5v9l.01.1a.5.5 0 0 0 .49.4H7V7zm6.828 2.006a.5.5 0 0 1 .394.329l1.75 5 .024.099a.5.5 0 0 1-.925.323l-.042-.092L13.946 13h-1.891l-.583 1.665a.5.5 0 0 1-.943-.33l1.75-5 .03-.072A.5.5 0 0 1 12.75 9h.5zM12.405 12h1.19L13 10.298z'
    })
  });
});
let oC = memo(e => {
  return _$$O5() ? jsx('svg', {
    width: '16',
    height: '16',
    fill: 'none',
    viewBox: '0 0 16 16',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M4 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2m8.6.51a.5.5 0 0 1 0 .98l-.1.01h-5a.5.5 0 0 1 0-1h5zM4 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2m8.6.51a.5.5 0 0 1 0 .98l-.1.01h-5a.5.5 0 0 1 0-1h5zM4 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m8.6.51a.5.5 0 0 1 0 .98l-.1.01h-5a.5.5 0 0 1 0-1h5z'
    })
  }) : jsx('svg', {
    width: '16',
    height: '16',
    fill: 'none',
    viewBox: '0 0 16 16',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M4 10.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m8.5.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM4 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m8.5.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM4 2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m8.5.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z'
    })
  });
});
function oI() {
  let e = getSingletonSceneGraph().getCurrentPage();
  let t = getSingletonSceneGraph().getDirectlySelectedNodes();
  let i = t.length === 1 ? t[0] : void 0;
  let n = Xr(_$$j4);
  let l = _$$b2();
  return {
    currentPage: e,
    setWebpage: useCallback(e => {
      if (!l) {
        let t = getSingletonSceneGraph().getCurrentPage();
        t && i?.guid !== e && t.setSelectionToSingleNode(e);
      }
      n(e);
    }, [l, i, n])
  };
}
function oE() {
  let {
    currentPage,
    setWebpage
  } = oI();
  let i = getFeatureFlags().sts_custom_domains;
  let n = getFeatureFlags().sites_web_fonts;
  return jsxs(Fragment, {
    children: [jsx(oL, {
      pageId: _$$p6.WEBSITE,
      pageName: getI18nString('sites.metadata.left_panel.site.label'),
      node: currentPage,
      setWebpage
    }), i && jsx(oL, {
      pageId: _$$p6.DOMAINS,
      pageName: getI18nString('sites.metadata.left_panel.site.domains'),
      node: currentPage,
      setWebpage
    }), n && jsx(oL, {
      pageId: _$$p6.FONTS,
      pageName: getI18nString('sites.metadata.left_panel.site.fonts'),
      node: currentPage,
      setWebpage
    })]
  });
}
function oN() {
  let {
    currentPage,
    setWebpage
  } = oI();
  let i = JZ(currentPage);
  return jsx(Fragment, {
    children: i.map(e => jsx(oL, {
      pageId: e.guid,
      node: e,
      setWebpage
    }, e.guid))
  });
}
function oR({
  includeSeparator: e
}) {
  let {
    currentPage,
    setWebpage
  } = oI();
  let n = _$$p4();
  return (useEffect(() => {
    n && _$$r5();
  }, [n]), n) ? jsxs(Fragment, {
    children: [e && jsx('div', {
      className: 'xv42yna xh8yej3 xjm9jq1'
    }), jsx(oL, {
      pageId: _$$p6.SUPABASE,
      pageName: 'Supabase',
      node: currentPage,
      setWebpage
    })]
  }) : null;
}
let oA = ({
  isPage: e,
  isHome: t,
  isPageTakeover: i,
  pageId: n,
  isLeftRail: a,
  isFigmake: s
}) => {
  if (a && e) return null;
  if (i) {
    if (n === _$$p6.WEBSITE) return jsx(_$$Z4, {});
    if (n === _$$p6.DOMAINS) return jsx(_$$J8, {});
    if (n === _$$p6.FONTS) return jsx(oj, {});
    if (n === _$$p6.SUPABASE) {
      return jsx(SvgComponent, {
        svg: _$$A9,
        useOriginalSrcFills_DEPRECATED: !0,
        svgWidth: '24px',
        svgHeight: '24px'
      });
    }
  }
  return e ? t ? jsx(_$$Q4, {
    className: _$$s4.flexShrink0.$
  }) : jsx(_$$A0, {
    className: _$$s4.flexShrink0.$
  }) : n === _$$p6.SUPABASE ? jsx('div', {
    className: 'x78zum5 x6s0dn4 xlup9mm x1kky2od',
    children: jsx(SvgComponent, {
      svg: _$$A9,
      useOriginalSrcFills_DEPRECATED: !0,
      svgWidth: '12px',
      svgHeight: '12px'
    })
  }) : s && n === _$$p6.WEBSITE ? jsx(oC, {}) : jsx(_$$$, {});
};
function oL({
  pageId: e,
  pageName: t,
  setWebpage: i,
  node: n
}) {
  let a = useAtomWithSubscription(_$$j4);
  let s = n?.type === 'RESPONSIVE_SET' || n?.type === 'WEBPAGE';
  let r = n?.name === '/';
  let d = r ? getI18nString('sites.panel.home') : n?.name;
  let p = a !== null ? e === a : e === 'website';
  let x = _$$b2();
  let m = useIsSelectedFigmakeFullscreen();
  let h = t => {
    t.preventDefault();
    i(e);
  };
  let g = oA({
    isPage: s,
    isHome: r,
    isPageTakeover: x,
    pageId: e,
    isLeftRail: x,
    isFigmake: m
  });
  return jsxs('button', {
    ..._$$Ay.props(oP.webpageItem, p && oP.webpageItemActive, !g && oP.webpageItemNoIcon, !x && oP.webpageItemNonFullPage),
    'onMouseDown': h,
    'onClick': h,
    'data-testid': `site-pages-list-item-${e}`,
    'children': [g, jsx('div', {
      className: 'xlyipyv xb3r6kr xuxw1ft',
      children: t || d
    })]
  });
}
let oP = {
  webpageItem: {
    display: 'x78zum5',
    justifyContent: 'xlqzeqv',
    padding: 'xfawy5m',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    paddingRight: 'xy13l1i',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    alignItems: 'x6s0dn4',
    backgroundColor: 'xjbqb8w',
    borderRadius: 'x19y5rnk',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    textOverflow: 'xlyipyv',
    height: 'xxk0z11',
    marginTop: 'x1gslohp',
    marginBottom: 'x12nagc',
    $$css: !0
  },
  webpageItemNonFullPage: {
    gap: 'x1jnr06f',
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  webpageItemActive: {
    backgroundColor: 'x1v8gsql',
    ..._$$g.textBodyMediumStrong,
    $$css: !0
  },
  webpageItemNoIcon: {
    paddingLeft: 'x163pfp',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  }
};
let oX = JSON.parse('["above","accent","access","acorn","acre","act","action","actor","adapt","adjust","admin","adobe","afar","affix","agate","aged","agency","agenda","agent","agile","ahead","ai","aid","ajar","alarm","album","alert","alias","align","alike","alive","almond","aloe","aloft","aloha","alone","alpha","alter","amber","amend","amity","amount","amused","anchor","angel","angle","anime","ankle","app","appeal","append","apple","apply","apron","aqua","arc","arch","arctic","ardent","area","arena","armor","aroma","array","arrow","art","ascii","ash","ashen","aspect","asset","assist","atlas","atom","attach","attic","auburn","audio","author","awake","award","axis","azalea","azul","azure","bacon","badge","badger","bagel","baggy","bake","ballet","bamboo","banana","banjo","banner","barge","barn","base","basic","basil","bask","bass","baste","batch","baton","bats","bead","beam","bear","beauty","beaver","bee","beige","bell","beluga","bend","berry","best","bet","beta","big","binary","bind","birch","bird","bistre","bit","black","blanch","blank","blast","bleak","blend","blimp","blink","bliss","blob","block","blog","bloom","blot","blotch","blue","blues","blur","blurb","blurry","blush","boar","board","boat","bobbin","body","boho","boil","bold","bolt","bone","bonus","bony","book","booth","boots","border","bot","botany","both","bottom","bounce","box","brain","branch","brand","brave","break","brick","bridge","brief","bright","brim","bring","brink","brisk","broad","broil","broken","bronze","brook","broom","brown","brush","bubble","buck","bucket","buffer","buffet","bug","bugle","build","bulb","bulk","bunch","bundle","bush","bust","busy","butter","button","buy","buzz","byte","cabin","cable","cache","cactus","cafe","cage","cake","calm","camel","cameo","camera","camp","campus","canal","canary","candle","candy","cane","canon","canvas","cape","caper","capri","card","care","cargo","carol","carrot","carry","cart","carve","case","cash","cashew","cast","casual","cat","cause","caveat","cedar","cel","cell","cello","center","cerise","chain","chair","chalk","change","chant","chaos","charm","chart","chase","chat","check","cheer","chef","cherry","chess","chest","chew","chief","child","chili","chill","chip","chisel","chomp","chop","chord","chorus","chroma","chrome","chuck","chunk","churn","chute","cider","cinch","cipher","circle","circus","citron","city","civic","civil","clad","claim","clamp","clap","clash","clasp","class","claw","clay","clean","clear","cleat","cleave","clever","click","client","cling","clink","clip","cloak","clock","clone","close","closed","cloth","cloud","cloudy","clover","clump","coach","coal","coast","coat","cobalt","cocoa","cod","code","coding","coffee","coil","coin","cola","cold","color","column","comet","comic","comma","cone","cookie","cool","copper","copy","coral","core","cork","corner","cosmic","cost","cot","cotton","couch","cough","count","coup","cover","cow","coyote","cozy","crab","craft","crane","crank","crate","crater","crave","crayon","cream","create","creme","crepe","crisp","crit","crop","cross","crow","crowd","crown","crumb","crush","crust","cub","cube","cupid","cure","curl","curry","curse","cursor","curve","curved","cushy","custom","cut","cute","cyan","cycle","cyprus","dab","dahlia","daily","dairy","daisy","dance","dandy","dark","dart","dash","data","date","dawn","dazzle","deaf","deal","dean","debug","decaf","decal","decay","deck","decor","decoy","deed","deep","deer","define","degree","delay","delete","denim","dense","dent","depict","depth","derby","desert","design","desk","detach","detail","device","dew","dial","dialog","diary","dice","dig","digest","dijon","dill","dime","dimly","dingy","direct","dirt","disc","disco","dish","disk","distort","ditch","divide","dizzy","dock","dodge","dog","doge","doll","domain","dome","done","donkey","donor","donut","door","dot","double","dove","down","doze","draft","drag","dragon","drama","draw","drawer","drawn","dream","dress","dried","drift","drill","drink","drive","driver","drone","droop","drop","drums","dry","duck","duct","dude","dull","dun","duo","dusk","dust","duty","dwarf","dwell","eagle","early","earth","ease","easel","easing","east","easy","eat","ebony","ebook","echo","edge","edit","editor","eel","effect","effort","egg","ego","eject","elbow","elf","elk","elm","elude","email","embed","emblem","emboss","emit","emoji","emote","empty","emu","enamel","energy","engine","enjoy","enter","entry","envoy","epic","equal","equity","erase","eraser","erd","error","erupt","essay","etch","ethics","evade","even","event","evict","evil","evoke","exact","excel","exit","expand","expert","export","extra","eye","fable","fabric","face","facet","fact","factor","fade","fair","fairy","fake","fall","false","fancy","fang","fast","faux","fawn","fax","feast","feed","femur","fence","fend","fern","ferry","fetch","fever","fiber","field","fiesta","fifth","fifty","fig","figma","figure","file","fill","filled","film","filter","final","finch","find","finder","finish","finite","fir","fire","fish","fit","five","fix","fixed","fixing","fizzy","flag","flaky","flame","flap","flare","flash","flask","flat","fleck","flee","flex","flick","flight","fling","flint","flip","float","flock","floor","flop","floral","floret","floss","flow","flower","fluent","fluid","flute","fly","flyer","foam","focus","fog","foil","folder","folk","follow","fond","font","food","footer","forest","form","formal","format","forum","found","fox","foyer","frail","frame","framer","fray","free","fresco","fresh","fried","frill","frog","from","front","frost","froth","frown","froze","fruit","full","fully","fun","funky","funnel","funny","future","gadget","gains","gala","galaxy","gale","game","gaming","gap","garb","garnet","gas","gauge","gave","gear","gecko","geek","gem","genius","genre","gentle","geo","gif","gift","gig","gills","ginger","git","give","gizmo","glad","glade","glass","glassy","glaze","glide","global","glory","gloss","glossy","glove","glow","glue","glyph","goal","goat","goblin","gold","golden","golf","gong","good","goofy","gothic","gown","grab","grace","grain","grainy","grant","grape","graph","grasp","grass","gravy","gray","great","green","greet","grey","grid","grill","grip","grit","groove","group","grow","growl","growth","grub","guard","guess","guide","guitar","gulf","gum","gush","gut","gutter","habit","hack","hacks","half","hall","halo","halt","hand","handle","happy","harp","hash","hasty","hatch","haven","haze","hazel","hazy","header","heap","heaps","heart","heat","heave","heavy","hedge","hefty","height","hello","help","helper","hem","herbs","hero","hex","hidden","hide","high","hire","holly","home","honey","hoodie","hook","hope","horn","horse","hot","house","hover","hub","hue","hug","hull","human","humid","hungry","hurry","hush","hut","ice","icing","icon","icy","id","ide","idea","ideate","iframe","igloo","ignite","image","impact","import","indent","index","indigo","ink","inner","input","insert","inside","inter","invert","invite","ion","iris","iron","iso","italic","item","ivory","ivy","jab","jade","jam","jargon","jasper","java","jaw","jazz","jeep","jelly","jet","job","jog","join","jolly","jolt","jot","joy","judge","juice","july","jumbo","jump","jungle","juror","jury","kale","karate","keep","kernel","key","khaki","kilt","kind","kinder","kindle","king","kiosk","kit","kite","kitten","kiwi","knee","kneel","knob","koala","lab","label","lace","ladle","lair","lake","lance","land","lapel","lapis","laptop","large","lasso","last","latch","latte","laud","launch","laurel","layer","layout","lead","lean","learn","leaves","left","legal","legend","lemon","lend","lens","less","letter","level","lever","lid","life","lift","light","like","lilac","lily","limb","lime","line","linear","linen","lines","link","linked","lint","linter","lion","lip","liquid","list","listen","liter","lively","liver","lizard","load","loader","local","lock","log","logic","login","logo","long","loom","loop","loud","love","lovely","low","lunar","lunch","lung","lurch","luxury","lyric","mac","mace","made","magic","magma","main","maize","make","maker","making","malt","manage","manga","mango","manor","manual","many","map","maple","marble","march","margin","marine","mark","marker","market","markup","maroon","marsh","marvel","mask","master","match","math","matrix","matte","matter","mature","mauve","maze","media","median","medium","medley","melody","melon","memo","memory","mentor","menu","menus","merge","merry","mesh","mess","meta","metal","meteor","meter","method","metric","micro","middle","mild","mince","mind","mining","mint","minus","mirror","misty","miter","mix","mobile","mocha","mock","mockup","modal","mode","model","modem","modern","modify","module","mold","money","monkey","mono","mood","moon","mop","morph","morse","mosaic","moss","most","motion","motor","motto","mount","mouse","move","movie","moving","mower","mud","mug","mulch","mule","mull","mummy","mural","muse","music","mute","myrtle","nacre","nail","name","naming","nap","narrow","native","nature","navy","near","neat","nebula","nectar","need","needle","neo","neon","nest","net","new","next","nice","niche","nicks","night","nimbus","ninth","nit","nix","node","noise","noodle","north","notch","note","notice","notify","notion","nougat","nova","novel","number","oak","oasis","oats","object","ocean","ochre","oculus","odd","office","offset","oil","olive","omen","onion","online","only","onyx","opal","open","opera","opt","option","orange","orbit","orchid","order","os","otter","ounce","outer","output","oval","oven","owl","ozone","pace","pacing","pack","pad","pager","pages","paint","pair","pale","palm","pan","panda","panel","panic","pants","paper","parent","park","parrot","parse","party","pascal","pasta","paste","pastel","patch","patent","path","patio","patron","pause","payer","peace","peach","peak","peanut","pear","pearl","pebble","pecan","pen","pencil","penny","peony","people","pep","pepper","perch","period","perm","person","petal","petri","phase","photo","piano","pic","pickle","pie","piece","pin","pine","pink","pitch","pivot","pixel","place","plain","plan","plane","planet","plank","plant","plaque","plasma","play","player","plaza","pleat","plot","plow","pluck","plug","plugin","plum","plus","pod","poem","poet","pogo","point","poise","poker","polar","polish","polka","poll","pollen","polo","pond","pony","poodle","pop","poppy","port","portal","pose","post","poster","posts","potato","pouch","pound","powder","power","preset","press","pride","prime","primer","print","prior","prism","prize","pro","probe","prompt","prong","proof","props","proto","proud","prove","proxy","prune","pry","pseudo","public","puce","pug","pull","pulp","pulse","puma","pun","punch","pupil","puppet","puppy","pure","purple","purr","purse","push","putt","puzzle","python","quake","quartz","query","quest","queue","quick","quiet","quill","quilt","quirky","quota","quote","rabbit","rabid","race","rack","radar","radial","radio","radius","radix","raft","rage","raid","rail","rake","rally","ramp","ranch","random","range","rank","rapid","rare","raster","rate","rating","ratio","ravel","raven","reach","react","read","reader","ready","real","ream","recap","record","red","reduce","refine","relate","relax","relay","relic","relink","relume","rem","remake","remix","remote","rename","render","repair","repay","repeat","reply","repo","report","rerun","reset","resin","resist","resize","result","retain","retina","return","reuse","revamp","reveal","revel","review","revise","rhyme","rhythm","ribbon","rice","rich","riff","right","rigid","rigor","ring","rinse","ripen","rise","ritzy","rival","river","roast","robe","robin","robot","robust","rock","role","roman","roof","root","rope","rose","rotate","rouge","round","route","rover","row","royal","ruby","rug","rule","ruler","run","runny","runway","rush","russet","rust","sable","sadly","safari","safe","sage","said","saint","salad","sale","salmon","salon","salsa","salt","salty","same","sample","sand","sandy","sans","santa","sap","satin","sauna","savant","save","saved","savor","savvy","sax","say","scale","scan","scarf","scene","schema","scheme","school","scoop","scoot","scope","score","scout","screen","script","scroll","scrub","scrum","scuba","scuff","sculpt","seam","search","secure","sedan","seed","select","self","semi","send","sepia","serene","series","serif","serifs","serve","server","sesame","set","setup","seven","sew","shade","shadow","shaky","shape","share","shared","sharp","shed","sheen","sheep","sheet","shelf","shell","shield","shift","shine","shiny","ship","shirt","shock","shop","shore","short","shout","shove","show","shown","shred","shrub","shrug","shush","shut","shy","side","sienna","siesta","sift","sign","signal","silk","silly","silo","silver","simple","sip","siren","sixth","size","skate","sketch","skew","skid","skier","skill","skip","skirr","skit","sky","slab","slack","slam","slash","slate","slaw","sled","sleek","sleep","sleet","sleeve","slept","slice","slide","sling","slip","slogan","slot","slush","small","smart","smile","smog","smoke","smoky","smooth","smudge","snack","snail","snake","snare","sniff","snore","snort","snout","snow","snowy","snuff","social","soft","solar","solid","solo","sonata","song","sorbet","sort","sorted","sound","source","space","speak","spec","speck","speech","speed","spend","spent","sphere","spice","spider","spill","spin","spiny","spiral","splash","spline","split","spoke","spoof","spool","spoon","spore","sport","spot","spout","spray","spree","spring","sprint","sprout","spruce","spur","squad","square","squat","squid","stable","stack","staff","stage","stain","stair","stall","stamp","stand","star","stark","start","stash","state","static","statue","status","steam","steel","steep","stem","step","stew","stick","sticky","sting","stir","stitch","stock","stomp","stone","stony","stood","stool","stoop","stop","storm","story","stove","strain","strata","straw","stray","stream","string","stripe","stroke","strong","stuck","studio","study","stuff","stump","stung","stunt","style","stylus","suds","sugar","suite","sun","sunny","sunset","surf","surge","surly","swab","swan","swarm","sway","swear","sweat","sweep","sweet","swell","swept","swim","swing","swipe","swirl","swoop","swore","symbol","sync","syntax","syrup","system","table","tacit","tack","tacky","taffy","tag","take","tall","talon","tame","tamp","tan","tape","taper","taps","target","tarot","tart","task","taste","taupe","tawny","teal","team","tech","tempo","terms","terra","test","tested","text","thank","thaw","theme","theory","thick","thin","thing","think","thorn","thread","throb","thud","thumb","thus","tiara","tidal","tidy","tiger","tile","tilt","time","timer","tint","tiny","title","toad","toffee","tofu","toggle","tokens","tomato","tone","tool","top","topaz","touch","tower","trace","track","trade","train","trait","trance","trass","tray","treat","tree","trek","trend","trial","trice","trick","trill","trim","trio","trout","truce","truck","true","trunk","trust","try","tuba","tug","tulip","turn","turtle","tusk","tutor","tutu","tux","tweak","tweet","twice","twine","twins","twirl","twist","type","typo","umber","uncut","undo","uneven","unify","union","unique","unit","unity","untie","upbeat","update","upload","upon","upper","urban","used","user","utter","valley","value","vapor","vary","vast","vector","veggie","venue","verify","verse","vertex","vest","veto","video","view","viewer","vine","viola","violet","violin","viral","visa","vision","visor","visual","vital","vivid","vocal","voice","void","volt","volume","vote","vowel","wad","wafer","waffle","wager","wages","wagon","wake","walk","wallow","walnut","waltz","wand","warm","warmth","washi","wasp","watch","water","wave","wavy","web","weight","whale","wheat","wheel","whirl","white","whole","whoop","wick","wide","widen","widget","width","wifi","wild","willow","wind","window","wing","wink","wired","wiry","wise","wish","wispy","wok","wolf","wonder","wool","words","work","world","woven","wrap","wreath","wrist","write","yam","yang","yard","year","yearn","yellow","yew","yield","yin","yodel","yoga","young","yoyo","zaffre","zebra","zero","zip","zipper","zippy","zone","zoo"]');
let oV = () => {
  let e = oX[Math.floor(Math.random() * oX.length)];
  let t = oX[Math.floor(Math.random() * oX.length)];
  let i = Math.floor(1e8 * Math.random());
  return `${e}-${t}-${i.toString().padStart(8, '0')}`;
};
let oG = registerModal(e => {
  let t = useModalManager({
    ...e,
    onClose: () => {
      e.onClose();
    }
  });
  return jsx(ModalRootComponent, {
    manager: t,
    width: 'md',
    children: jsxs(_$$vo, {
      children: [jsx(Y9, {
        children: jsx(_$$hE, {
          children: renderI18nText('sites.metadata.domains.change_url_confirmation_modal.title')
        })
      }), jsx(_$$nB, {
        children: renderI18nText('sites.metadata.domains.change_url_confirmation_modal.body')
      }), jsx(_$$wi, {
        children: jsxs(_$$jk, {
          children: [jsx(Button, {
            variant: 'secondary',
            onClick: () => t.props.close({
              source: 'button'
            }),
            children: renderI18nText('sites.metadata.domains.cancel')
          }), jsx(Button, {
            variant: 'primary',
            onClick: e.onSubmit,
            children: renderI18nText('sites.metadata.domains.change_url')
          })]
        })
      })]
    })
  });
}, 'CustomSubdomainConfirmationModal');
let oW = {
  domain: {
    ..._$$g.textBodyMedium,
    color: 'x1n0bwc9',
    marginRight: 'x17qaar8',
    marginInlineStart: null,
    marginInlineEnd: null,
    $$css: !0
  },
  description: {
    ..._$$g.textBodyMedium,
    color: 'x1n0bwc9',
    $$css: !0
  },
  inputRoot: {
    'display': 'x78zum5',
    'alignItems': 'x6s0dn4',
    'padding': 'xf7z5ut',
    'paddingInline': null,
    'paddingStart': null,
    'paddingLeft': null,
    'paddingEnd': null,
    'paddingRight': null,
    'paddingBlock': null,
    'paddingTop': null,
    'paddingBottom': null,
    'borderRadius': 'x19y5rnk',
    'borderStartStartRadius': null,
    'borderStartEndRadius': null,
    'borderEndStartRadius': null,
    'borderEndEndRadius': null,
    'borderTopLeftRadius': null,
    'borderTopRightRadius': null,
    'borderBottomLeftRadius': null,
    'borderBottomRightRadius': null,
    'background': 'x1sjmt1f',
    'backgroundAttachment': null,
    'backgroundClip': null,
    'backgroundColor': null,
    'backgroundImage': null,
    'backgroundOrigin': null,
    'backgroundPosition': null,
    'backgroundPositionX': null,
    'backgroundPositionY': null,
    'backgroundRepeat': null,
    'backgroundSize': null,
    'outline': 'xe0qb83',
    'outlineColor': null,
    'outlineStyle': null,
    'outlineWidth': null,
    'outlineOffset': 'x1g40iwv',
    'cursor': 'x1ed109x',
    ':hover_outline': 'x1g1fkpm',
    ':hover_outlineColor': null,
    ':hover_outlineOffset': null,
    ':hover_outlineStyle': null,
    ':hover_outlineWidth': null,
    ':focus-within_outline': 'xiym6m8',
    ':focus-within_outlineColor': null,
    ':focus-within_outlineOffset': null,
    ':focus-within_outlineStyle': null,
    ':focus-within_outlineWidth': null,
    ':hover:focus-within_outline': 'xmpccpp',
    ':hover:focus-within_outlineColor': null,
    ':hover:focus-within_outlineOffset': null,
    ':hover:focus-within_outlineStyle': null,
    ':hover:focus-within_outlineWidth': null,
    '$$css': !0
  },
  inputRootWarning: {
    'outline': 'x25guqb',
    'outlineColor': null,
    'outlineOffset': null,
    'outlineStyle': null,
    'outlineWidth': null,
    ':hover_outline': 'x1fg7uy4',
    ':hover_outlineColor': null,
    ':hover_outlineOffset': null,
    ':hover_outlineStyle': null,
    ':hover_outlineWidth': null,
    ':focus-within_outline': 'x1aytxde',
    ':focus-within_outlineColor': null,
    ':focus-within_outlineOffset': null,
    ':focus-within_outlineStyle': null,
    ':focus-within_outlineWidth': null,
    ':hover:focus-within_outline': 'xwns3zk',
    ':hover:focus-within_outlineColor': null,
    ':hover:focus-within_outlineOffset': null,
    ':hover:focus-within_outlineStyle': null,
    ':hover:focus-within_outlineWidth': null,
    '$$css': !0
  },
  inputRootError: {
    'outline': 'xsaklrq',
    'outlineColor': null,
    'outlineOffset': null,
    'outlineStyle': null,
    'outlineWidth': null,
    ':hover_outline': 'x9dvrup',
    ':hover_outlineColor': null,
    ':hover_outlineOffset': null,
    ':hover_outlineStyle': null,
    ':hover_outlineWidth': null,
    ':focus-within_outline': 'xgej7s5',
    ':focus-within_outlineColor': null,
    ':focus-within_outlineOffset': null,
    ':focus-within_outlineStyle': null,
    ':focus-within_outlineWidth': null,
    ':hover:focus-within_outline': 'xzjahtp',
    ':hover:focus-within_outlineColor': null,
    ':hover:focus-within_outlineOffset': null,
    ':hover:focus-within_outlineStyle': null,
    ':hover:focus-within_outlineWidth': null,
    '$$css': !0
  },
  inputField: {
    ..._$$g.textBodyMedium,
    'flex': 'x98rzlu',
    'flexGrow': null,
    'flexShrink': null,
    'flexBasis': null,
    'minWidth': 'xeuugli',
    'background': 'x1md70p1',
    'backgroundAttachment': null,
    'backgroundClip': null,
    'backgroundColor': null,
    'backgroundImage': null,
    'backgroundOrigin': null,
    'backgroundPosition': null,
    'backgroundPositionX': null,
    'backgroundPositionY': null,
    'backgroundRepeat': null,
    'backgroundSize': null,
    'outline': 'x1a2a7pz',
    'outlineColor': null,
    'outlineOffset': null,
    'outlineStyle': null,
    'outlineWidth': null,
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
    'color': 'x1akne3o',
    '::placeholder_color': 'xuggh6c',
    ':disabled_color': 'xu42cvc',
    ':disabled_background': 'xo1oxrk',
    ':disabled_backgroundAttachment': null,
    ':disabled_backgroundClip': null,
    ':disabled_backgroundColor': null,
    ':disabled_backgroundImage': null,
    ':disabled_backgroundOrigin': null,
    ':disabled_backgroundPosition': null,
    ':disabled_backgroundPositionX': null,
    ':disabled_backgroundPositionY': null,
    ':disabled_backgroundRepeat': null,
    ':disabled_backgroundSize': null,
    '$$css': !0
  },
  warningMessage: {
    ..._$$g.textBodyMedium,
    color: 'x12fzf0q',
    $$css: !0
  },
  errorMessage: {
    ..._$$g.textBodyMedium,
    color: 'x172n1ly',
    $$css: !0
  }
};
function oY({
  domainInfo: e,
  onCancel: t,
  setDomainLoading: i
}) {
  let n = useDispatch();
  let r = qg(e.domain).subdomain ?? '';
  let o = `.${qg(e.domain).domain ?? ''}`;
  let d = useCurrentFileKey();
  let [c, x] = useState(r);
  let [m, h] = useState(null);
  let [g, f] = useState(!1);
  let _ = useSubscription(SiteMount({
    fileKey: d || ''
  }), {
    enabled: !!d
  });
  let b = useSelector(e => e.modalShown);
  let y = useDebouncedCallback(e => {
    if (e === '') {
      h(null);
      return;
    }
    /^[a-z0-9-]+$/.test(e) ? /^[a-z0-9]/.test(e) && /[a-z0-9]$/.test(e) ? e.length > 63 ? h({
      message: getI18nString('sites.metadata.domains.sub_domain_restrictions_length'),
      type: 'error'
    }) : h(null) : h({
      message: getI18nString('sites.metadata.domains.sub_domain_restrictions_start_end'),
      type: 'error'
    }) : h({
      message: getI18nString('sites.metadata.domains.sub_domain_restrictions'),
      type: 'error'
    });
  }, 600);
  let v = !!m || c === '' || e.domain === `${c}${o}` || b?.type === oG.type;
  let j = async () => {
    if (d) {
      y.cancel();
      f(!0);
      try {
        await _$$z8.validateSubdomain({
          fileKey: d,
          new_base_domain: `${c}${o}`
        });
      } catch (e) {
        h({
          message: resolveMessage(e, e.message),
          type: 'warning'
        });
        f(!1);
        return;
      }
      n(showModalHandler({
        type: oG,
        data: {
          onSubmit: () => {
            i(!0);
            t();
            n(hideModalHandler());
            let e = _$$z8.updateSubdomain({
              fileKey: d,
              new_base_domain: `${c}${o}`
            }).then(() => {
              n(VisualBellActions.dequeue({
                matchType: _$$V.PublishingSuccess
              }));
              n(VisualBellActions.enqueue({
                message: getI18nString('sites.metadata.domains.domain_updated'),
                timeoutOverride: 5e3,
                icon: VisualBellIcon.CHECK
              }));
            }).catch(() => {
              n(VisualBellActions.enqueue({
                message: getI18nString('sites.metadata.domains.domain_updated_error'),
                error: !0,
                icon: VisualBellIcon.WARNING_EXCLAMATION_WITH_TRIANGLE
              }));
            }).$$finally(() => {
              i(!1);
            });
            let l = getResourceDataOrFallback(_.data?.siteMount)?.siteDomain?.id ?? '';
            WB()?.optimisticallyUpdate({
              SiteDomain: {
                [l]: {
                  domain: `${c}${o}`
                }
              }
            }, e);
          }
        }
      }));
      f(!1);
    }
  };
  return jsxs('div', {
    className: 'x78zum5 xdt5ytf',
    children: [jsxs('div', {
      className: 'x78zum5 x1q0g3np x6s0dn4 xxk0z11 xztvwtv x1nfngrj',
      children: [jsx('div', {
        className: 'x98rzlu',
        children: jsxs(_$$Y3.Root, {
          ..._$$xk(oW.inputRoot, m?.type === 'warning' && oW.inputRootWarning, m?.type === 'error' && oW.inputRootError),
          children: [jsx(_$$Y3, {
            id: 'subdomain-input',
            value: c,
            ..._$$xk(oW.inputField),
            onChange: e => {
              x(e);
              y(e);
            },
            onKeyDown: e => {
              e.key === 'Enter' ? v || j() : e.key !== 'Escape' || g || t();
            },
            placeholder: getI18nString('sites.metadata.domains.subdomain_input_placeholder')
          }), jsx('span', {
            ..._$$xk(oW.domain),
            children: o
          })]
        })
      }), jsx(_$$K2, {
        'aria-label': getI18nString('sites.metadata.domains.generate_new_subdomain'),
        'onClick': () => {
          h(null);
          x(oV());
        },
        'htmlAttributes': {
          'data-tooltip': getI18nString('sites.metadata.domains.generate_new_subdomain'),
          'data-tooltip-type': 'text'
        },
        'children': jsx(_$$x2, {})
      })]
    }), jsx('div', {
      className: 'x78zum5 x1q0g3np x6s0dn4 xxk0z11 xztvwtv x1nfngrj',
      children: m ? jsx('span', {
        ..._$$xk(m.type === 'warning' ? oW.warningMessage : oW.errorMessage),
        children: m.message
      }) : jsx('span', {
        ..._$$xk(oW.description),
        children: renderI18nText('sites.metadata.domains.sub_domain_restrictions')
      })
    }), jsx('div', {
      className: 'x78zum5 x1q0g3np x6s0dn4 xxk0z11 xztvwtv x1nfngrj',
      children: g ? jsx(_$$k7, {}) : jsxs(Fragment, {
        children: [jsx(Button, {
          variant: 'secondary',
          onClick: t,
          type: 'button',
          children: renderI18nText('sites.metadata.domains.cancel')
        }), jsx(Button, {
          variant: 'primary',
          disabled: v,
          onClick: j,
          children: renderI18nText('sites.metadata.domains.save')
        })]
      })
    })]
  });
}
let oJ = {
  description: {
    ..._$$g.textBodyMedium,
    color: 'x1n0bwc9',
    $$css: !0
  },
  row: {
    display: 'x78zum5',
    flexDirection: 'x1q0g3np',
    alignItems: 'x6s0dn4',
    height: 'xxk0z11',
    padding: 'xztvwtv',
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
  customDomain: {
    color: 'x1quhyk7',
    cursor: 'x1ypdohk',
    ..._$$g.textBodyLargeStrong,
    $$css: !0
  },
  secondaryText: {
    color: 'x1n0bwc9',
    ..._$$g.textBodyMedium,
    $$css: !0
  },
  publishStatusRow: {
    gap: 'x167g77z',
    rowGap: null,
    columnGap: null,
    ..._$$g.textBodyMedium,
    $$css: !0
  },
  loadingText: {
    ..._$$g.textBodyMedium,
    width: 'x2pejg6',
    $$css: !0
  }
};
function oZ({
  domainInfo: e
}) {
  let t = _$$b2();
  let i = useIsSelectedFigmakeFullscreen();
  let n = jsxs(Fragment, {
    children: [jsxs('div', {
      className: 'x78zum5 xdt5ytf xg2d0mh xod5an3',
      children: [jsx('div', {
        ..._$$xk(_$$g.textBodyLargeStrong),
        children: renderI18nText('sites.metadata.domains.base_domain')
      }), jsx('div', {
        ..._$$xk(oJ.description),
        children: e ? jsx(Fragment, {
          children: i ? renderI18nText('figmake.metadata.domains.your_make_is_always_available_at_this_domain') : renderI18nText('sites.metadata.domains.your_site_is_always_available_at_this_domain')
        }) : renderI18nText('sites.metadata.domains.unpublished_site_description')
      })]
    }), jsx(oQ, {
      domainInfo: e
    })]
  });
  return t ? jsx('div', {
    children: n
  }) : jsx('div', {
    className: 'x1chd833',
    children: n
  });
}
function oQ({
  domainInfo: e
}) {
  let t = useCurrentFileKey();
  let i = JW(t);
  let [n, s] = useState(!1);
  let [r, o] = useState(!1);
  let d = useIsSelectedFigmakeFullscreen();
  if (i.isLoading) return null;
  let {
    isNotPublished,
    lastPublishedAt,
    publishedBy
  } = i;
  let m = e && getFeatureFlags().sites_custom_subdomains;
  return n && e ? jsx(oY, {
    onCancel: () => {
      s(!1);
    },
    domainInfo: e,
    setDomainLoading: o
  }) : jsxs('div', {
    className: 'x78zum5 xdt5ytf',
    children: [e ? jsx('div', {
      'className': 'x1qughib x78zum5 x1q0g3np x6s0dn4 xxk0z11 xztvwtv',
      'data-testid': 'baseDomainDomainRow',
      'children': r ? jsxs(Fragment, {
        children: [jsx(Wi, {
          ..._$$xk(oJ.loadingText)
        }), jsx(LoadingSpinner, {
          'data-testid': 'loading-spinner'
        })]
      }) : jsx(LinkPrimitive, {
        newTab: !0,
        href: e.fullURL,
        htmlAttributes: {
          rel: 'noreferrer'
        },
        ..._$$xk(oJ.customDomain),
        children: e.domain
      })
    }) : jsxs('div', {
      ..._$$xk(oJ.publishStatusRow, oJ.row),
      'data-testid': 'baseDomainExampleInfo',
      'children': [jsx('div', {
        className: 'xwrg52n xuxw1ft x1rea2x4 x1n0bwc9',
        children: renderI18nText('sites.metadata.domains.site_url')
      }), jsx('div', {
        ..._$$xk(oJ.secondaryText),
        children: renderI18nText('sites.metadata.domains.example_figma_site')
      })]
    }), jsxs('div', {
      ..._$$xk(oJ.publishStatusRow, oJ.row),
      children: [jsx('div', {
        className: 'xwrg52n xuxw1ft x1rea2x4 x1n0bwc9',
        children: d ? renderI18nText('figmake.metadata.domains.make_status') : renderI18nText('sites.metadata.domains.site_status')
      }), jsx(an, {
        isPublished: !isNotPublished,
        dataTestId: 'sitesPublishStatusBadge'
      })]
    }), lastPublishedAt && jsxs('div', {
      ..._$$xk(oJ.publishStatusRow, oJ.row),
      children: [jsx('div', {
        className: 'xwrg52n xuxw1ft x1rea2x4 x1n0bwc9',
        children: renderI18nText('sites.toolbar.publish_modal.last_published_header')
      }), jsxs('div', {
        children: [jsx(_$$h5, {
          date: lastPublishedAt,
          capitalize: !0
        }), publishedBy && jsxs(Fragment, {
          children: [jsx('span', {
            className: 'x1n0bwc9',
            children: ` \xB7 `
          }), jsx('span', {
            className: 'x1n0bwc9',
            children: publishedBy.handle
          })]
        })]
      })]
    }), m && jsx('div', {
      className: 'x78zum5 x1q0g3np x6s0dn4 xxk0z11 xztvwtv',
      children: jsx($z, {
        'variant': 'secondary',
        'recordingKey': 'edit-subdomain',
        'data-testid': 'edit-subdomain-cta',
        'onClick': () => {
          s(!0);
        },
        'disabled': r,
        'children': renderI18nText('sites.metadata.domains.edit_domain')
      })
    })]
  });
}
function o2({
  activationStatus: e
}) {
  let t;
  return (_$$dH(e, 'domain_already_activated') ? t = {
    variant: 'warn',
    title: getI18nString('sites.metadata.domains.this_domain_is_already_connected_to_another_site')
  } : _$$hr(e) ? t = {
    variant: 'warn',
    title: getI18nString('sites.metadata.domain.dns_records_not_verified'),
    message: renderI18nText('sites.metadata.domain.check_your_dns_host_to_ensure_the_following_records_have_been_added_with_learn_more_link', {
      learnMoreLink: jsx(_$$N6, {
        href: 'https://help.figma.com/hc/articles/31414274019863',
        newTab: !0,
        children: renderI18nText('sites.metadata.domain.learn_more')
      })
    })
  } : V7(e) && (t = {
    variant: 'default',
    title: getI18nString('sites.metadata.domain.awaiting_ssl_cert'),
    message: renderI18nText('sites.metadata.domain.awaiting_ssl_cert_message')
  }), t) ? jsx('div', {
    className: 'x1fzhlzt',
    children: jsx($y, {
      variant: t.variant,
      children: jsx(_$$Q5, {
        title: t.title,
        children: t.message
      })
    })
  }) : jsx(Fragment, {});
}
let o9 = {
  redirectDescription: {
    ..._$$g.textBodyMedium,
    color: 'x1n0bwc9',
    $$css: !0
  }
};
var de = (e => (e.ApexToWww = 'apex-to-www', e.WwwToApex = 'www-to-apex', e))(de || {});
function dt({
  domain: e,
  redirectConfig: t,
  setRedirectConfig: i
}) {
  let [n, s] = useState(t !== null);
  let r = ZN(e);
  let o = FB(e);
  if (!o) return null;
  let d = !r;
  let c = r === 'www';
  if (!d && !c) return null;
  let p = d ? e : o;
  let x = c ? e : `www.${e}`;
  let m = {
    from: p,
    to: x,
    direction: 'apex-to-www'
  };
  let h = {
    from: x,
    to: p,
    direction: 'www-to-apex'
  };
  let g = d ? [h, m] : [m, h];
  return jsxs('div', {
    'className': 'x1vi7shn xp6roeo',
    'data-testid': 'domain-redirect-config',
    'children': [jsxs('div', {
      className: 'x78zum5 x6s0dn4 x1qughib xkdneqi x1i71x30',
      children: [jsxs('div', {
        className: 'x98rzlu',
        children: [jsx('div', {
          ..._$$xk(_$$g.textBodyMediumStrong),
          children: getI18nString('sites.metadata.domains.add_subdomain_redirect')
        }), jsx('div', {
          ..._$$xk(o9.redirectDescription),
          children: getI18nString('sites.metadata.domains.subdomain_redirect_description')
        })]
      }), jsx(_$$d5, {
        label: jsx(HiddenLabel, {
          children: getI18nString('sites.metadata.domains.add_subdomain_redirect')
        }),
        checked: n,
        onChange: e => {
          s(e);
          i(e ? g[0].direction : null);
        }
      })]
    }), n && t !== null && jsx('div', {
      className: 'xkdneqi',
      children: jsxs(_$$bL6, {
        value: t,
        onChange: e => {
          e && Object.values(de).includes(e) ? i(e) : i(null);
        },
        children: [jsx(_$$l7, {
          label: jsx(HiddenLabel, {
            children: getI18nString('sites.metadata.domains.redirect_direction')
          }),
          size: 'lg'
        }), jsx(_$$mc2, {
          children: g.map(e => jsx(_$$c$5, {
            value: e.direction,
            children: getI18nString('sites.metadata.domains.redirect_option_label', {
              from: e.from,
              to: e.to
            })
          }, e.direction))
        })]
      })
    })]
  });
}
let di = {
  warning: {
    color: 'x12fzf0q',
    paddingTop: 'x1y1aw1k',
    $$css: !0
  }
};
function dn({
  onCancel: e,
  fileKey: t,
  recordingKey: i
}) {
  let n = useDispatch();
  let r = Xr(AP);
  let [d, c] = useState(null);
  let [p, x] = useState(!1);
  let [m, h] = useState('');
  let g = !!getFeatureFlags().apex_domain_support;
  let [f, _] = useState(!1);
  let [b, y] = useState(null);
  let v = _$$_t(t)?.hasCustomDomain;
  useEffect(() => {
    p && v && x(!1);
  }, [p, v]);
  let j = useCallback(e => FB(e) ? ZN(e) || g ? null : getI18nString('sites.metadata.domains.domain_must_include_a_subdomain_ex_www') : getI18nString('sites.metadata.domains.enter_a_valid_domain_name'), [g]);
  let k = useCallback(async e => {
    x(!0);
    try {
      let i = await _$$z8.addCustomDomain({
        fileKey: t,
        domain: e,
        createPairedDomain: g && f && b !== null
      });
      r(i.data.meta);
    } catch (e) {
      e instanceof XHRError && (e.data.message === 'Invalid domain' ? c(getI18nString('sites.metadata.domains.invalid_domain')) : n(FlashActions.error(e.data.message, 4e3)));
      x(!1);
    }
  }, [t, g, f, b, r, n]);
  let w = useCallback(e => {
    let t = ZN(e);
    let i = !t;
    if (g && (i || t === 'www')) {
      _(!0);
      y(i ? de.WwwToApex : de.ApexToWww);
      return;
    }
    k(e);
  }, [g, k]);
  let S = useCallback(e => e.replace(/^https?:\/\//, ''), []);
  let C = S(m);
  return jsxs('form', {
    onSubmit: e => {
      e.preventDefault();
      let t = S(m);
      let i = j(t);
      if (i) {
        c(i);
        return;
      }
      if (g && f) {
        let e = t;
        if (b !== null) {
          let i = FB(t);
          if (!i) return;
          b === de.WwwToApex ? e = i : b === de.ApexToWww && (e = `www.${i}`);
        }
        k(e);
      } else {
        w(t);
      }
    },
    children: [jsxs('div', {
      className: 'xwib8y2',
      children: [jsxs('div', {
        className: 'x78zum5 x6s0dn4',
        children: [jsx(_$$p5, {
          id: 'domain',
          className: _$$s4.wFull.ellipsis.$,
          style: _$$sx2.py8.hAuto.$,
          value: m,
          onChange: e => {
            h(e);
            f && (_(!1), y(null));
            d && c(j(S(e)));
          },
          placeholder: 'www.mywebsite.com',
          recordingKey: generateRecordingKey(i, 'title')
        }), !!d && jsx(_$$Z5, {
          'style': {
            'marginLeft': '-28px',
            '--color-icon': 'var(--color-icon-warning-pressed, --fallback-color-icon-warning-pressed)'
          },
          'data-testid': 'warning-icon'
        })]
      }), d ? jsx('div', {
        ..._$$xk(_$$g.textBodyMedium, di.warning),
        children: d
      }) : null]
    }), g && f && jsx(dt, {
      domain: C,
      redirectConfig: b,
      setRedirectConfig: y
    }), jsxs('div', {
      className: 'x78zum5',
      children: [jsx('div', {
        className: 'x1db2dqx',
        children: jsx($z, {
          variant: 'secondary',
          onClick: e,
          type: 'button',
          disabled: p,
          trackingProperties: {
            trackingDescriptor: _$$c8.CANCEL
          },
          children: renderI18nText('sites.metadata.domains.cancel')
        })
      }), jsx($z, {
        type: 'submit',
        disabled: p,
        trackingProperties: {
          trackingDescriptor: _$$c8.SAVE
        },
        children: p ? jsx(_$$k7, {}) : renderI18nText('sites.metadata.domains.save')
      })]
    })]
  });
}
function dl({
  fileKey: e,
  recordingKey: t,
  customDomainPlanLimitReachedQueryResult: i,
  siteNeverPublished: n
}) {
  let r = useDispatch();
  let [o, d] = useState(!1);
  let c = useTeamPlanFeatures();
  let p = useIsStarterPlan(c);
  let x = _$$ol();
  let m = _$$lg();
  let h = i.status === 'loading';
  let g = i.status === 'loaded' && i.data.limitReached;
  if (o && !h && !g) {
    return jsx(dn, {
      fileKey: e,
      onCancel: () => d(!1),
      recordingKey: t
    });
  }
  let f = o && h || p.status === 'loading';
  let _ = f || n || p.status !== 'loaded';
  return jsx('div', {
    children: jsx($z, {
      'variant': 'secondary',
      'disabled': _,
      'onClick': () => {
        p.unwrapOr(!1) && g ? r(showModalHandler({
          type: DV,
          data: {
            team: x,
            resource: Bi.CONNECT_DOMAIN,
            editorType: m,
            currentPlan: _$$F4.Plan.STARTER,
            upsellPlan: _$$F4.Plan.PRO,
            upsellSource: UpsellModalType.SITES_DOMAIN_SETTINGS
          }
        })) : d(!0);
      },
      'recordingKey': 'add-domain',
      'data-testid': 'add-connected-domain-cta',
      'trackingProperties': {
        trackingDescriptor: _$$c8.ADD_CONNECTED_DOMAIN
      },
      'children': f ? jsx(_$$k7, {
        'data-testid': 'loading-spinner'
      }) : jsx('div', {
        className: 'x8rdmch xctkrei x1gskr33 x1ihwiht',
        children: renderI18nText('sites.metadata.domains.connect_a_domain')
      })
    })
  });
}
let ds = registerModal(e => {
  let {
    fileKey
  } = e;
  let i = useModalManager(e);
  let n = useDispatch();
  let [a] = setupResourceAtomHandler(SiteMount.Query({
    fileKey: e.fileKey
  }));
  let r = getResourceDataOrFallback(a.data?.siteMount);
  let o = r?.customDomain?.verifiedAt != null;
  let d = getAtomMutate(dr);
  let c = useIsSelectedFigmakeFullscreen();
  let x = c ? renderI18nText('figmake.metadata.domain.confirm_connected_domain_removal') : renderI18nText('sites.metadata.domain.confirm_connected_domain_removal');
  let m = c ? renderI18nText('figmake.metadata.domain.remove_connected_domain_confirmation') : renderI18nText('sites.metadata.domain.you_are_about_to_remove_your_site_s_connected_domain_url_existing_external_links_to_your_site_may_break');
  let h = c ? renderI18nText('figmake.metadata.domain.confirm_connected_domain_removal_button') : renderI18nText('general.confirm');
  return jsx(ModalRootComponent, {
    manager: i,
    width: 'md',
    children: jsxs(_$$vo, {
      children: [jsx(Y9, {
        children: jsx(_$$hE, {
          children: x
        })
      }), jsx(_$$nB, {
        children: m
      }), jsx(_$$wi, {
        children: jsxs(_$$jk, {
          children: [jsx(Button, {
            variant: 'secondary',
            onClick: () => n(hideModalHandler()),
            children: renderI18nText('general.cancel')
          }), jsx(Button, {
            onClick: () => {
              let e = d({
                fileKey,
                domainVerified: o
              });
              WB()?.optimisticallyDelete({
                SiteDomain: {
                  [r?.customDomain?.id ?? '']: null
                }
              }, e);
              e.then(e => {
                e.status === 200 && n(VisualBellActions.enqueue({
                  type: 'custom_domain_removed',
                  message: getI18nString('sites.metadata.domain.domain_removed')
                }));
              }).catch(e => {
                e instanceof XHRError ? n(FlashActions.error(e.data.message)) : n(FlashActions.error(getI18nString('general.an_error_occurred_while_performing_that_action')));
              }).$$finally(() => {
                n(hideModalHandler());
              });
            },
            children: h
          })]
        })
      })]
    })
  });
});
let dr = M4.Mutation((e, {
  query: t
}) => {
  let {
    fileKey,
    domainVerified
  } = e;
  t.mutate(_$$q7(fileKey), e => {
    if (domainVerified) {
      let t = e.num_domains -= 1;
      e.limit_reached && t < e.num_domains_allowed && (e.limit_reached = !1);
    }
  });
  return _$$z8.removeCustomDomain({
    fileKey: e.fileKey
  });
});
let dd = 'custom-domain-more-options';
function dc({
  fileKey: e,
  domainInfo: t
}) {
  let i = useDispatch();
  let n = Um();
  let r = n?.type === dd;
  let o = useCallback(() => {
    r ? i(_$$oB()) : i(_$$j2({
      type: dd
    }));
  }, [i, r]);
  return jsx(Fragment, {
    children: jsx('div', {
      className: 'x1n2onr6',
      children: jsxs(EventShield, {
        eventListeners: r ? ['onMouseDown'] : [],
        children: [jsx(_$$d2, {
          'aria-expanded': r,
          'aria-label': getI18nString('sites.metadata.domain.more_options'),
          'onClick': o,
          'children': jsx(_$$J5, {})
        }), r && jsx(du, {
          fileKey: e,
          domainInfo: t
        })]
      })
    })
  });
}
function du({
  fileKey: e,
  domainInfo: t
}) {
  let i = useDispatch();
  let n = !!getFeatureFlags().apex_domain_support;
  let a = t.customDomainType === 'apex' || t.customDomainType === 'subdomain' && qg(t.customDomain).subdomain === 'www';
  return jsxs(_$$gw, {
    closeDropdown: () => i(_$$oB()),
    positionAbsolute: !0,
    id: dd,
    style: {
      right: 0,
      left: 'auto'
    },
    children: [jsx(dp, {
      fileKey: e
    }), n && !t.pairedDomain && a && jsx(dx, {
      fileKey: e,
      domain: t.customDomain
    }), !!t.pairedDomain && jsx(dm, {
      fileKey: e,
      redirectedDomain: t.pairedDomain.domain
    })]
  });
}
function dp({
  fileKey: e
}) {
  let t = useDispatch();
  return jsx(_$$c$4, {
    onClick: () => {
      t(showModalHandler({
        type: ds,
        data: {
          fileKey: e
        }
      }));
    },
    children: getI18nString('sites.metadata.domain.remove_connected_domain')
  });
}
function dx({
  fileKey: e,
  domain: t
}) {
  let i = useDispatch();
  let n = Xr(AP);
  let r = useCallback(async () => {
    try {
      let t = await _$$z8.configureRedirect({
        fileKey: e
      });
      n(t.data.meta);
    } catch (e) {
      e instanceof XHRError ? i(FlashActions.error(e.data.message)) : i(FlashActions.error(getI18nString('general.an_error_occurred_while_performing_that_action')));
    }
  }, [e, n, i]);
  let d = qg(t).subdomain ? getI18nString('sites.metadata.domain.add_redirect_from_apex_domain') : getI18nString('sites.metadata.domain.add_redirect_from_www_subdomain');
  return jsx(_$$c$4, {
    onClick: r,
    children: d
  });
}
function dm({
  fileKey: e,
  redirectedDomain: t
}) {
  let i = useDispatch();
  let [n] = setupResourceAtomHandler(SiteMount.Query({
    fileKey: e
  }));
  let a = getResourceDataOrFallback(n.data?.siteMount);
  let [r, d] = useAtomValueAndSetter(AP);
  let c = async () => {
    try {
      let i = _$$z8.removeCustomDomainRedirect({
        fileKey: e
      });
      let n = a?.customDomain?.pairedDomain?.id;
      n && WB()?.optimisticallyDelete({
        SiteDomain: {
          [n]: null
        }
      }, i);
      await i;
      let l = qg(t).subdomain ? 'CNAME' : 'A';
      r.some(e => e.type === l) && d(e => e.filter(e => e.type !== l));
    } catch (e) {
      i(FlashActions.error(getI18nString('general.an_error_occurred_while_performing_that_action')));
    }
  };
  return jsx(_$$c$4, {
    onClick: c,
    children: getI18nString('sites.metadata.domain.remove_redirect')
  });
}
let dg = {
  row: {
    display: 'x78zum5',
    flexDirection: 'x1q0g3np',
    alignItems: 'x6s0dn4',
    paddingTop: 'x1iorvi4',
    paddingBottom: 'xjkvuk6',
    gap: 'x167g77z',
    rowGap: null,
    columnGap: null,
    height: 'xxk0z11',
    ..._$$g.textBodyMedium,
    $$css: !0
  }
};
function df({
  domainInfo: {
    customDomain: e,
    pairedDomain: t,
    verifiedAt: i
  }
}) {
  if (!t) return null;
  let {
    domain,
    verifiedAt
  } = t;
  return jsxs('div', {
    ..._$$xk(dg.row),
    children: [jsx('div', {
      className: 'xwrg52n xuxw1ft x1rea2x4 x1n0bwc9',
      children: renderI18nText('sites.metadata.domain.redirect')
    }), jsxs('div', {
      className: 'x78zum5 x1q0g3np x6s0dn4 x1jnr06f',
      children: [domain, ' ', jsx('span', {
        className: 'x1n0bwc9',
        children: '\u2192'
      }), ' ', e, i != null && verifiedAt == null && jsx(_$$R4, {
        'className': 'x1gviqkx xdxz5ap xw8er2b',
        'data-tooltip-type': 'text',
        'data-tooltip': getI18nString('sites.metadata.domain.redirect_pending'),
        'data-tooltip-show-above': !0
      })]
    })]
  });
}
function db() {
  return jsx(_$$x3, {
    className: 'x11vm0g5 x1j4m7mb x34y7k0'
  });
}
function dy({
  type: e
}) {
  let t = e === 'conflicting_record' ? getI18nString('sites.metadata.domain.conflicting_record_found') : getI18nString('sites.metadata.domain.no_record_found');
  return jsx(_$$R4, {
    'className': 'x1gviqkx xdxz5ap xw8er2b',
    'data-tooltip': t,
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip-show-above': !0
  });
}
function dv({
  dnsVerificationErrors: e,
  recordType: t
}) {
  return void 0 === e ? null : !function (e, t) {
    switch (t) {
      case 'A':
        return e.includes('no_valid_a') || e.includes('conflicting_a_record');
      case 'CNAME':
        return e.includes('no_valid_cname');
      case 'TXT':
        return e.includes('no_valid_txt');
      default:
        throwTypeError(t);
    }
  }(e, t) ? jsx(db, {}) : jsx(dy, {});
}
let dj = {
  recordTypeColumn: {
    width: 'xni59qk',
    $$css: !0
  },
  cellBase: {
    height: 'x1vqgdyp',
    verticalAlign: 'xxymvpz',
    paddingLeft: 'xnm25rq',
    paddingRight: 'xy13l1i',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    ..._$$g.textBodyMedium,
    $$css: !0
  },
  tableHeader: {
    color: 'x1n0bwc9',
    textAlign: 'xdpxx8g',
    backgroundColor: 'x1yjdb4r',
    ..._$$g.textBodyMedium,
    $$css: !0
  },
  tableCell: {
    borderTop: 'xdyg6lv',
    borderTopWidth: null,
    borderTopStyle: null,
    borderTopColor: null,
    position: 'x1n2onr6',
    $$css: !0
  },
  copyableCell: {
    'backgroundColor': 'xgcd1z6 xv2f06h',
    'cursor': 'xt0e3qv x1277o0a',
    '--x1ec80mi': 'x18vt1ge xg68icu',
    '$$css': !0
  }
};
function dk({
  fileKey: e,
  domainInfo: t
}) {
  let i = _$$wh2(e);
  let {
    status
  } = i;
  if (status === 'loading') {
    return jsx('div', {
      className: 'x78zum5 xl56j7k',
      children: jsx(_$$k7, {})
    });
  }
  let {
    dnsRecords
  } = i;
  if (dnsRecords.length === 0) return null;
  let s = function ({
    customDomain: e,
    pairedDomain: t
  }) {
    if (!(Object.keys(e.activationStatus).length > 0 || t && Object.keys(t.activationStatus).length > 0)) {
      return {
        CNAME: null,
        TXT: null,
        A: null
      };
    }
    let i = e.activationStatus.dns_verification;
    let n = t ? t.activationStatus.dns_verification : void 0;
    let l = e.type === 'apex';
    let a = l ? i : n;
    let s = l ? n : i;
    let r = [...(i ?? []), ...(n ?? [])];
    return {
      A: dv({
        dnsVerificationErrors: a,
        recordType: 'A'
      }),
      CNAME: dv({
        dnsVerificationErrors: s,
        recordType: 'CNAME'
      }),
      TXT: dv({
        dnsVerificationErrors: r,
        recordType: 'TXT'
      })
    };
  }({
    customDomain: {
      domain: t.customDomain,
      activationStatus: t.activationStatus,
      type: t.customDomainType
    },
    pairedDomain: t.pairedDomain ? {
      domain: t.pairedDomain.domain,
      activationStatus: t.pairedDomain.activationStatus,
      type: t.customDomainType === 'apex' ? 'subdomain' : 'apex'
    } : void 0
  });
  return jsxs('table', {
    className: 'xh8yej3 x140o2bo x1vathgz x1gukg7c x1bamp8i x9h44rk xb3r6kr',
    children: [jsx('thead', {
      children: jsxs('tr', {
        children: [jsx('th', {
          ..._$$xk(dj.cellBase, dj.tableHeader, dj.recordTypeColumn),
          children: renderI18nText('sites.metadata.domains.dns_record_type')
        }), jsx('th', {
          ..._$$xk(dj.cellBase, dj.tableHeader),
          children: renderI18nText('sites.metadata.domains.dns_record_host')
        }), jsx('th', {
          ..._$$xk(dj.cellBase, dj.tableHeader),
          children: renderI18nText('sites.metadata.domains.dns_record_value')
        })]
      })
    }), jsx('tbody', {
      children: dnsRecords.map((e, t) => jsxs('tr', {
        children: [jsx('td', {
          ..._$$xk(dj.cellBase, dj.tableCell, dj.recordTypeColumn),
          children: jsxs('div', {
            className: 'x78zum5 x1q0g3np x1jnr06f x6s0dn4 x1rfj78v',
            children: [jsx('span', {
              className: 'xb3r6kr xlyipyv xuxw1ft',
              children: e.type
            }), s[e.type]]
          })
        }), jsx(dw, {
          text: e.host
        }), jsx(dw, {
          text: e.value
        })]
      }, t))
    })]
  });
}
function dw({
  text: e
}) {
  let t = useDispatch();
  return jsx('td', {
    ..._$$xk(dj.cellBase, dj.tableCell, dj.copyableCell),
    onClick: () => t(_$$lW2({
      stringToCopy: e
    })),
    children: jsxs('div', {
      className: 'x78zum5 x1q0g3np x1qughib x6s0dn4 x1jnr06f xh8yej3',
      children: [jsx('span', {
        className: 'xb3r6kr xlyipyv xuxw1ft',
        children: e
      }), jsx('div', {
        className: 'xm7qwpk',
        children: jsx(_$$a6, {})
      })]
    })
  });
}
function dS({
  domainInfo: e,
  fileKey: t,
  planLimitReachedQueryResult: i
}) {
  let n = useDispatch();
  let [r, o] = useState(!1);
  let [d, c] = useState(!1);
  let p = i.status === 'loading';
  let x = i.unwrapOr(!1);
  let m = useCallback(async () => {
    if (!r && !x) {
      o(!0);
      try {
        await _$$z8.activateCustomDomain({
          fileKey: t
        });
      } catch (e) {
        n(FlashActions.error(getI18nString('sites.metadata.domain.domain_verification_failed')));
      } finally {
        o(!1);
      }
    }
  }, [n, t, r, x]);
  let h = useCallback(() => {
    p ? c(!0) : x || m();
  }, [p, x, m]);
  useEffect(() => {
    !d || p || (c(!1), x || m());
  }, [d, p, x, m]);
  let g = r || d;
  return jsxs('div', {
    className: _$$s4.flex.flexRow.justifyBetween.itemsCenter.pt4.pb4.$,
    children: [jsxs('div', {
      className: _$$s4.flex.flexRow.gap8.h16.$,
      children: [jsx('div', {
        className: 'xwrg52n xuxw1ft x1rea2x4 x1n0bwc9',
        children: renderI18nText('sites.metadata.domains.domain_status')
      }), jsxs('div', {
        className: 'x78zum5 x1q0g3np x1jnr06f',
        children: [jsx(dC, {
          domainInfo: e
        }), g && jsx(_$$k7, {
          'data-testid': 'loading-spinner',
          'size': 'sm'
        })]
      })]
    }), !x && jsx(_$$K2, {
      'onClick': h,
      'aria-label': getI18nString('sites.metadata.domain.refresh'),
      'data-tooltip': getI18nString('sites.metadata.domain.refresh'),
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip-show-above': !0,
      'disabled': g,
      'children': jsx(_$$T4, {})
    })]
  });
}
function dC({
  domainInfo: e
}) {
  let t = !!e.verifiedAt;
  let i = V7(e.activationStatus);
  let n = 'defaultFilled';
  let a = getI18nString('sites.metadata.domains.pending');
  t ? (n = 'successOutline', a = getI18nString('sites.metadata.domains.connected')) : i && (n = 'warningOutline', a = getI18nString('sites.metadata.domains.awaiting_certificates'));
  return jsx(_$$E6, {
    variant: n,
    children: a
  });
}
let dT = {
  header: {
    ..._$$g.textBodyLargeStrong,
    paddingBottom: 'xjkvuk6',
    $$css: !0
  },
  text: {
    ..._$$g.textBodyMedium,
    color: 'x1n0bwc9',
    paddingBottom: 'xsag5q8',
    $$css: !0
  },
  customDomain: {
    color: 'x1quhyk7',
    cursor: 'x1ypdohk',
    ..._$$g.textBodyLargeStrong,
    $$css: !0
  },
  secondaryText: {
    color: 'x1n0bwc9',
    ..._$$g.textBodyMedium,
    $$css: !0
  }
};
function dI({
  domainInfo: e,
  recordingKey: t
}) {
  let i = useCurrentFileKey();
  let n = e && e.hasCustomDomain;
  let [a] = setupResourceAtomHandler(_$$q7(i ?? ''));
  return i ? jsxs(_$$fu, {
    name: 'Sites Domain Settings',
    children: [jsx('h2', {
      ..._$$xk(dT.header),
      children: renderI18nText('sites.metadata.domains.connected_domains')
    }), jsx('div', {
      ..._$$xk(dT.text),
      children: renderI18nText(e === null ? 'sites.metadata.domain.publish_site_to_connect_a_domain_with_learn_more_link' : 'sites.metadata.domain.connect_a_domain_with_learn_more_link', {
        learnMoreLink: jsx(_$$N6, {
          href: 'https://help.figma.com/hc/articles/31414274019863',
          newTab: !0,
          children: renderI18nText('sites.metadata.domain.learn_more')
        })
      })
    }), n && jsx(dE, {
      domainInfo: e,
      fileKey: i,
      customDomainPlanLimitReachedQueryResult: a
    }), !n && jsx(dl, {
      fileKey: i,
      recordingKey: t,
      siteNeverPublished: e === null,
      customDomainPlanLimitReachedQueryResult: a
    })]
  }) : null;
}
function dE({
  domainInfo: e,
  fileKey: t,
  customDomainPlanLimitReachedQueryResult: i
}) {
  if (!e.hasCustomDomain) return null;
  let n = i.transform(e => e.limitReached);
  let {
    isDomainFullyActivated
  } = e;
  return jsxs(Fragment, {
    children: [jsxs('div', {
      className: 'x78zum5 x1q0g3np x6s0dn4 x1qughib xztvwtv',
      children: [jsx(LinkPrimitive, {
        newTab: !0,
        href: `https://${e.customDomain}`,
        htmlAttributes: {
          rel: 'noreferrer'
        },
        ..._$$xk(dT.customDomain),
        children: e.customDomain
      }), jsx(dc, {
        fileKey: t,
        domainInfo: e
      })]
    }), jsxs('div', {
      className: 'x78zum5 xdt5ytf xp6roeo',
      children: [jsx(dS, {
        domainInfo: e,
        fileKey: t,
        planLimitReachedQueryResult: n
      }), jsx(df, {
        domainInfo: e
      })]
    }), !isDomainFullyActivated && jsx(dN, {
      fileKey: t,
      domainInfo: e
    })]
  });
}
function dN({
  fileKey: e,
  domainInfo: t
}) {
  let {
    combinedActivationStatus
  } = t;
  let n = !_$$S4(combinedActivationStatus);
  return jsxs('div', {
    className: 'x78zum5 xdt5ytf x167g77z',
    children: [combinedActivationStatus && jsx(o2, {
      activationStatus: combinedActivationStatus
    }), n && jsx('div', {
      ..._$$xk(dT.secondaryText),
      children: renderI18nText('sites.metadata.domain.add_the_following_records_to_the_dns_host_for_your_domain')
    }), jsx(dk, {
      fileKey: e,
      domainInfo: t
    }), Object.keys(combinedActivationStatus).length === 0 && jsx($y, {
      variant: 'default',
      children: jsx(_$$Q5, {
        children: renderI18nText('sites.metadata.domain.it_can_take_up_to_24_hours_for_dns_settings_to_propagate_with_learn_more_link', {
          learnMoreLink: jsx(_$$N6, {
            href: 'https://help.figma.com/hc/articles/31414274019863',
            newTab: !0,
            children: renderI18nText('sites.metadata.domain.learn_more')
          })
        })
      })
    })]
  });
}
let dR = {
  container: {
    display: 'x78zum5',
    flexDirection: 'xdt5ytf',
    padding: 'x1ff1495',
    $$css: !0
  },
  fullPageViewContainer: {
    display: 'x78zum5',
    flexDirection: 'xdt5ytf',
    gap: 'xou54vl',
    $$css: !0
  },
  section: e => [{
    width: e == null ? null : 'x1bl4301',
    borderRadius: 'x9h44rk',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    padding: 'x1b5akj9',
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
    boxSizing: 'x9f619',
    $$css: !0
  }, {
    '--width': (e => typeof e == 'number' ? `${e}px` : e != null ? e : void 0)(e)
  }]
};
function dA(e) {
  return jsx('div', {
    ..._$$Ay.props(dR.section(640)),
    children: e
  });
}
function dL({
  recordingKey: e,
  domainInfo: t
}) {
  let i = _$$b2();
  let n = _$$Ay.props(i ? dR.fullPageViewContainer : dR.container);
  return jsxs('div', {
    className: v()(n.className, {
      [Qx]: i
    }),
    children: [i ? dA(jsx(oZ, {
      domainInfo: t
    })) : jsx(oZ, {
      domainInfo: t
    }), i ? dA(jsx(dI, {
      domainInfo: t,
      recordingKey: e
    })) : jsx(dI, {
      domainInfo: t,
      recordingKey: e
    })]
  });
}
var dM = (e => (e.REQUIRED = 'REQUIRED', e.WHITESPACE = 'WHITESPACE', e.TOO_SHORT = 'TOO_SHORT', e.API_SET_FAILED = 'API_SET_FAILED', e.API_UNSET_FAILED = 'API_UNSET_FAILED', e))(dM || {});
function dD(e) {
  switch (e) {
    case 'REQUIRED':
      return getI18nString('sites.settings.password_protection.password_required');
    case 'WHITESPACE':
      return getI18nString('sites.settings.password_protection.password_whitespace');
    case 'TOO_SHORT':
      return getI18nString('sites.settings.password_protection.password_too_short');
    case 'API_SET_FAILED':
      return getI18nString('sites.settings.password_protection.set_password_error');
    case 'API_UNSET_FAILED':
      return getI18nString('sites.settings.password_protection.unset_password_error');
    default:
      throwTypeError(e);
  }
}
function dz({
  recordingKey: e,
  fileKey: t
}) {
  let i = useSubscription(SiteMount({
    fileKey: t
  }), {
    enabled: !0
  });
  let n = _$$lg();
  let r = mapFileToProductType({
    editorType: n
  });
  let o = useMemo(() => !!(i.status === 'loaded' && getResourceDataOrFallback(i.data?.siteMount)?.pwdConfig?.id), [i]);
  let d = useDispatch();
  let c = function () {
    let e = selectCurrentFile();
    if (!e) return !1;
    let {
      sharedContainerSetting
    } = e;
    return !!sharedContainerSetting && sharedContainerSetting.status === ResourceStatus.Loaded && (sharedContainerSetting.data?.autogenPasswordControls ?? !1);
  }();
  let x = useIsSelectedFigmakeFullscreen();
  let [m, h] = useState(o);
  let [g, f] = useState(!1);
  let [_, b] = useState(!1);
  let [y, v] = useState('');
  let [j, k] = useState(null);
  let w = useRef(null);
  useEffect(() => {
    h(o);
  }, [o]);
  let S = useCallback(async e => {
    if (k(null), f(e), trackEventAnalytics('site_password_protection_toggle', {
      editor_type: r,
      fileKey: t,
      enabled: e,
      hadExistingPassword: o
    }), m && !e) {
      h(!1);
      try {
        let e = WB();
        if (e) {
          await e.optimisticallyUpdate({
            SiteMount: {
              [t]: {
                pwdConfig: null
              }
            }
          }, _$$z8.unsetPassword({
            fileKey: t
          }));
          d(VisualBellActions.enqueue({
            type: 'site-password-unset-success',
            message: getI18nString('sites.settings.password_protection.unset_password_success')
          }));
        } else {
          throw new Error('Livegraph client unavailable');
        }
      } catch (e) {
        h(!0);
        k('API_UNSET_FAILED');
      }
    } else {
      h(e);
    }
  }, [m, t, d, r, o]);
  let C = useCallback(e => {
    v(e.target.value);
    k(null);
  }, []);
  let T = useCallback(() => {
    f(!0);
    b(!0);
  }, []);
  let I = useCallback(async e => {
    if (e.preventDefault(), logAndTrackCTA({
      trackingDescriptor: 'site_password',
      text: 'Save',
      productType: r
    }), !y) {
      k('REQUIRED');
      return;
    }
    if (y !== y.trim()) {
      k('WHITESPACE');
      return;
    }
    if (y.length < 4) {
      k('TOO_SHORT');
      return;
    }
    f(!1);
    k(null);
    try {
      let e = WB();
      if (e) {
        let n = `optimistic-pwd-config-${t}`;
        await e.optimisticallyCreate({
          SitePwdConfig: {
            [n]: {
              siteMountId: getResourceDataOrFallback(i.data?.siteMount)?.id || '',
              setByUserId: null,
              updatedAt: new Date(),
              version: '1',
              canRead: !0
            }
          }
        }, _$$z8.setPassword({
          fileKey: t,
          password: y
        }));
        d(VisualBellActions.enqueue({
          type: 'site-password-set-success',
          message: getI18nString('sites.settings.password_protection.set_password_success'),
          icon: VisualBellIcon.CHECK
        }));
      } else {
        throw new Error('Livegraph client unavailable');
      }
    } catch (e) {
      T();
      k('API_SET_FAILED');
    }
  }, [y, t, d, T, i.data?.siteMount, r]);
  let E = useCallback(e => {
    e.preventDefault();
    f(!1);
    k(null);
    o || h(!1);
  }, [o]);
  let N = useCallback(() => {
    logAndTrackCTA({
      trackingDescriptor: 'site_password',
      text: 'Edit',
      productType: r
    });
    f(!0);
    b(!1);
    k(null);
  }, [r]);
  let R = useCallback(() => {
    v(_$$b8());
    k(null);
  }, []);
  let A = useCallback(() => {
    d(_$$lW2({
      stringToCopy: y,
      successText: getI18nString('sites.settings.password_protection.password_copied')
    }));
  }, [d, y]);
  useEffect(() => {
    g && (_ || (c ? v(_$$b8()) : v(''), k(null)), w.current?.focus());
  }, [g, c, _, r]);
  let L = !!j;
  return jsxs('div', {
    className: 'x1ff1495',
    children: [jsxs('div', {
      className: 'x78zum5 x1qughib x1cy8zhl x1i71x30',
      children: [jsxs('div', {
        className: 'x78zum5 xdt5ytf xg2d0mh x98rzlu',
        children: [jsx(Label, {
          htmlFor: 'password-protection',
          children: jsx('strong', {
            ..._$$xk(dB.labelText),
            children: getI18nString('sites.settings.password_protection.require_password')
          })
        }), jsx('span', {
          ..._$$xk(dB.descriptionText),
          children: x ? getI18nString('figmake.settings.password_protection.description') : getI18nString('sites.settings.password_protection.description')
        })]
      }), jsx(_$$v7, {
        id: 'password-protection',
        onChange: S,
        checked: m,
        recordingKey: generateRecordingKey(e, 'password_protection')
      })]
    }), m && jsxs('form', {
      onSubmit: I,
      className: 'xehsoiq',
      children: [jsxs('div', {
        className: 'x78zum5 xdt5ytf xg2d0mh x98rzlu',
        children: [g && jsxs('div', {
          className: 'x78zum5 x1qughib x6s0dn4 x1ah0xmj',
          children: [jsx(Label, {
            htmlFor: 'password-input',
            children: jsx('span', {
              ..._$$xk(dB.labelText),
              children: getI18nString('sites.settings.password_protection.password_label')
            })
          }), jsx(Button, {
            'variant': 'ghost',
            'iconPrefix': jsx(_$$x2, {}),
            'onClick': R,
            'aria-label': getI18nString('sites.settings.password_protection.generate_password'),
            'children': getI18nString('sites.settings.password_protection.generate')
          })]
        }), g ? jsxs(Fragment, {
          children: [jsxs('div', {
            className: 'x1n2onr6 x78zum5 x6s0dn4',
            children: [jsx(_$$ks, {
              'id': 'password-input',
              'ref': w,
              'type': 'text',
              'placeholder': getI18nString('sites.settings.password_protection.set_password_placeholder'),
              'onChange': C,
              'aria-invalid': L,
              ..._$$xk(dB.passwordInput, L && dB.passwordInputError, c && dB.passwordInputDisabled),
              'value': y,
              'readOnly': c,
              'recordingKey': generateRecordingKey(e, 'password')
            }), jsx('span', {
              className: 'x10l6tqk xibut22 x78zum5 x6s0dn4',
              children: y.length > 0 && jsx(_$$K2, {
                'aria-label': getI18nString('sites.settings.password_protection.copy_password'),
                'onClick': A,
                'children': jsx(_$$a6, {})
              })
            })]
          }), y.length > 0 && jsx('div', {
            className: 'x7hzu26',
            children: jsx($y, {
              variant: 'warn',
              children: jsx(_$$Q5, {
                children: getI18nString('sites.settings.password_protection.store_password_warning')
              })
            })
          }), L && jsx('div', {
            ..._$$xk(dB.errorMessage),
            'data-testid': 'password-error-message',
            'children': dD(j)
          })]
        }) : jsxs(Fragment, {
          children: [jsx(_$$ks, {
            type: 'password',
            placeholder: getI18nString('sites.settings.password_protection.set_password_placeholder'),
            disabled: !0,
            className: 'x153ncpu xt7dq6l xh8yej3 xge78cn',
            value: '**************',
            recordingKey: generateRecordingKey(e, 'password')
          }), L && j === 'API_UNSET_FAILED' && jsx('div', {
            ..._$$xk(dB.errorMessage),
            'data-testid': 'password-error-message',
            'children': dD(j)
          })]
        })]
      }), jsx('div', {
        className: 'xehsoiq x78zum5 x1nfngrj',
        children: g ? jsxs(Fragment, {
          children: [jsx(ButtonLarge, {
            variant: 'secondary',
            onClick: E,
            children: getI18nString('sites.settings.password_protection.cancel')
          }), jsx(ButtonLarge, {
            type: 'submit',
            children: getI18nString('sites.settings.password_protection.save')
          })]
        }) : jsx(ButtonLarge, {
          variant: 'secondary',
          onClick: N,
          children: getI18nString('sites.settings.password_protection.edit')
        })
      })]
    })]
  });
}
let dB = {
  labelText: {
    ..._$$g.textBodyMediumStrong,
    $$css: !0
  },
  descriptionText: {
    ..._$$g.textBodyMedium,
    color: 'x1n0bwc9',
    $$css: !0
  },
  passwordInput: {
    padding: 'x153ncpu',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    height: 'xt7dq6l',
    width: 'xh8yej3',
    $$css: !0
  },
  passwordInputError: {
    borderColor: 'xqsu7zk',
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
  passwordInputDisabled: {
    padding: 'x153ncpu',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    height: 'xt7dq6l',
    width: 'xh8yej3',
    color: 'xge78cn',
    $$css: !0
  },
  errorMessage: {
    ..._$$g.textBodyMedium,
    color: 'x172n1ly',
    marginTop: 'x15r87gk',
    $$css: !0
  }
};
function d$({
  children: e
}) {
  return jsx('h2', {
    className: _$$s4.textBodyLargeStrong.px16.py8.$,
    children: e
  });
}
function dU({
  children: e,
  useLabel: t = !0
}) {
  return t ? jsx('label', {
    children: e
  }) : jsx('div', {
    children: e
  });
}
function dK({
  label: e,
  control: t,
  description: i,
  isInvalid: n,
  useLabel: a = !0
}) {
  return jsx('div', {
    style: {
      paddingBottom: '8px',
      paddingLeft: 16,
      paddingRight: 16
    },
    className: _$$s4.flex.flexColumn.$,
    children: jsxs(dU, {
      useLabel: a,
      children: [jsx('div', {
        className: _$$s4.textBodyMediumStrong.minH32.flex.itemsCenter.$,
        children: e
      }), jsxs('div', {
        className: _$$s4.flex.itemsCenter.$,
        children: [t, n && jsx(_$$Z5, {
          style: {
            'marginLeft': '-28px',
            '--color-icon': 'var(--color-icon-warning-pressed, --fallback-color-icon-warning-pressed)'
          }
        })]
      }), i ? jsx('div', {
        className: _$$s4.colorTextSecondary.$$if(n, _$$s4.colorTextWarning).textBodyMedium.minH24.flex.itemsCenter.$,
        children: i
      }) : null]
    })
  });
}
let dJ = lazy(() => _require);
function dZ({
  code: e,
  onChange: t,
  placeholder: i
}) {
  let n = _$$b2() ? 608 : 431;
  return jsx(Suspense, {
    fallback: null,
    children: jsx(dJ, {
      value: e,
      width: `${n}px`,
      minHeight: '24px',
      maxHeight: '152px',
      onChange: e => {
        t(e);
      },
      placeholder: i
    })
  });
}
let d5 = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M18.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 1a2.5 2.5 0 1 0-2.45-3H16C9.925 5 5 9.925 5 16v.05a2.5 2.5 0 1 0 1 0V16c0-5.523 4.477-10 10-10h.05a2.5 2.5 0 0 0 2.45 2m-13 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3',
      clipRule: 'evenodd'
    })
  });
});
let d3 = {
  description: {
    ..._$$g.textBodyMedium,
    margin: 'x1ghz6dp',
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    color: 'x1n0bwc9',
    $$css: !0
  },
  trigger: {
    ..._$$g.textBodyMedium,
    'display': 'x78zum5',
    'alignItems': 'x6s0dn4',
    'padding': 'x1717udv',
    'paddingInline': null,
    'paddingStart': null,
    'paddingLeft': null,
    'paddingEnd': null,
    'paddingRight': null,
    'paddingBlock': null,
    'paddingTop': null,
    'paddingBottom': null,
    'boxSizing': 'x9f619',
    'color': 'x1akne3o',
    'border': 'x1bamp8i',
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
    'borderRadius': 'x19y5rnk',
    'borderStartStartRadius': null,
    'borderStartEndRadius': null,
    'borderEndStartRadius': null,
    'borderEndEndRadius': null,
    'borderTopLeftRadius': null,
    'borderTopRightRadius': null,
    'borderBottomLeftRadius': null,
    'borderBottomRightRadius': null,
    'backgroundColor': 'x1yjdb4r',
    'userSelect': 'x87ps6o',
    'width': 'xh8yej3',
    'textAlign': 'xdpxx8g',
    ':focus-visible_outline': 'x5hs570',
    ':focus-visible_outlineColor': null,
    ':focus-visible_outlineStyle': null,
    ':focus-visible_outlineWidth': null,
    ':focus-visible_outlineOffset': 'xy9f4xx',
    ':disabled_color': 'xu42cvc',
    '$$css': !0
  },
  triggerContainer: {
    display: 'xrvj5dj',
    gridTemplateColumns: 'xsdrwxk',
    alignItems: 'x6s0dn4',
    width: 'xh8yej3',
    marginTop: 'x1y332i5',
    $$css: !0
  },
  triggerContainerDisabled: {
    gridTemplateColumns: 'x1y6fwsi',
    $$css: !0
  }
};
function d8({
  addImage: e,
  selectImage: t,
  removeImage: i,
  imageCandidates: n,
  base64String: s,
  nodeId: r,
  removeString: o,
  disableUpload: d,
  label: c,
  description: p,
  labelHidden: x,
  recordingKey: m
}) {
  let g = createRecordingCallback(m);
  let f = r ? getSingletonSceneGraph().get(r) : void 0;
  useEffect(() => {
    r && !f && t('');
  }, [f, r, t]);
  let _ = n?.length || 0;
  let b = d && !(_ > 0) && !f;
  let y = useId();
  let v = `${y}-input`;
  let j = f ? f.guid : void 0;
  return jsxs(_$$bL6, {
    value: j,
    onChange: n => {
      if (void 0 === n) {
        i();
        return;
      }
      if (n === 'new') {
        e();
        return;
      }
      t(n);
    },
    recordingKey: g('imageSelector'),
    children: [jsxs('div', {
      className: 'x78zum5 xdt5ytf xg2d0mh',
      children: [x ? jsx(HiddenLabel, {
        htmlFor: v,
        children: c
      }) : jsx(Label, {
        htmlFor: v,
        children: c
      }), jsx(d6, {
        id: v,
        disabled: b,
        iconLead: jsx('img', {
          alt: '',
          src: s ?? _$$A10(),
          className: 'x1td3qas x10w6t97 xkib98w xz74otr x1bamp8i'
        }),
        placeholder: b ? getI18nString('sites.metadata.image_selector.nothing_to_select') : getI18nString('sites.metadata.image_selector.placeholder')
      }), p && jsx('p', {
        ..._$$Ay.props(d3.description),
        children: p
      })]
    }), jsx(EventShield, {
      eventListeners: ['onWheel'],
      children: jsxs(_$$mc2, {
        children: [!d && jsxs(Fragment, {
          children: [jsx(_$$c$5, {
            value: 'new',
            children: jsxs('div', {
              className: 'x78zum5 x6s0dn4 x167g77z',
              children: [jsx('div', {
                className: 'xvy4d1p x19c8fqo',
                children: jsx(_$$T2, {})
              }), jsx('div', {
                className: 'x1iyjqo2 xb3r6kr xlyipyv xfawy5m xw5ewwj',
                children: getI18nString('sites.metadata.image_selector.upload_image')
              })]
            })
          }, 'new'), n?.length ? jsx(_$$wv2, {}) : null]
        }), n?.map(e => jsx(_$$c$5, {
          value: e.guid,
          children: jsxs('div', {
            ...{
              className: 'x78zum5 x6s0dn4 x167g77z'
            },
            children: [jsx('div', {
              ...{
                className: 'xvy4d1p x19c8fqo'
              },
              children: d7(e.type)
            }), jsx('div', {
              ...{
                className: 'x1iyjqo2 xb3r6kr xlyipyv xfawy5m xw5ewwj'
              },
              children: e.name
            }), jsx(ScreenReaderOnly, {
              children: ' - '
            }), jsx('div', {
              ...{
                className: 'xkrz9af'
              },
              children: getI18nString('sites.metadata.image_selector.dropdown_dimensions', {
                width: Math.trunc(e.size.x),
                height: Math.trunc(e.size.y)
              })
            })]
          })
        }, e.guid)), !!f && jsxs(Fragment, {
          children: [jsx(_$$wv2, {}), jsx(zW, {
            children: o
          })]
        })]
      })
    })]
  });
}
let d6 = forwardRef(({
  placeholder: e,
  children: t,
  iconLead: i,
  ...n
}, a) => {
  let {
    selectedItem
  } = useSelectPrimitiveState();
  let r = selectedItem && void 0 !== selectedItem.value ? selectedItem.label : e ?? '';
  return jsxs(SelectPrimitiveTrigger, {
    ..._$$Ay.props(d3.trigger),
    ...n,
    ref: a,
    children: [i, jsxs('div', {
      ..._$$Ay.props(d3.triggerContainer, n.disabled && d3.triggerContainerDisabled),
      children: [jsx('span', {
        className: 'xdpxx8g xebhuq6 xlyipyv xb3r6kr',
        children: t ?? r
      }), !n.disabled && jsx(_$$r2, {})]
    })]
  });
});
let d7 = e => {
  switch (e) {
    case 'GROUP':
      return jsx(_$$M2, {});
    case 'FRAME':
      return jsx(_$$v2, {});
    case 'VECTOR':
      return jsx(d5, {});
    case 'STAR':
      return jsx(_$$e3, {});
    case 'ELLIPSE':
      return jsx(_$$m, {});
    case 'RECTANGLE':
    case 'ROUNDED_RECTANGLE':
      return jsx(_$$T2, {});
    case 'TEXT':
      return jsx(_$$B2, {});
    case 'INSTANCE':
      return jsx(_$$y9, {});
    default:
      return jsx(_$$T2, {
        className: _$$s4.invisible.$
      });
  }
};
function d9(e) {
  return Fk(t => {
    let i = t.getCurrentPage();
    let n = i?.responsiveSetSettings;
    let l = _$$wk(i).find(t => t.guid === e);
    let a = l?.responsiveSetSettings || n;
    return {
      title: a?.title ?? '',
      description: a?.description ?? '',
      lang: a?.lang ?? '',
      faviconID: a?.faviconID ?? '',
      socialImageID: a?.socialImageID ?? '',
      googleAnalyticsID: a?.googleAnalyticsID ?? '',
      blockSearchIndexing: a?.blockSearchIndexing,
      customCodeHeadStart: a?.customCodeHeadStart ?? '',
      customCodeHeadEnd: a?.customCodeHeadEnd ?? '',
      customCodeBodyStart: a?.customCodeBodyStart ?? '',
      customCodeBodyEnd: a?.customCodeBodyEnd ?? '',
      addBypassLinks: a?.addBypassLinks ?? !1,
      ignoreReducedMotion: a?.ignoreReducedMotion ?? !1
    };
  });
}
let ct = registerModal(({
  onClose: e
}) => {
  let t = useIsSelectedFigmakeFullscreen();
  let i = selectCurrentFile();
  if (!i) return null;
  let n = i.key;
  let a = async () => {
    trackEventAnalytics('sites_unpublish_started', {
      fileKey: n,
      productType: 'sites'
    });
    try {
      await _$$z8.unpublishSite({
        fileKey: n
      });
      e();
    } catch (e) {
      Hh(t);
    }
  };
  return jsx(ci, {
    fileKey: n,
    onClose: e,
    onUnpublish: a
  });
}, 'SITES_UNPUBLISH_MODAL', ModalSupportsBackground.YES);
function ci({
  fileKey: e,
  onClose: t,
  onUnpublish: i
}) {
  let n = function (e) {
    let t = GQ() + _$$_4;
    let i = window.innerWidth - t;
    return {
      left: t + (i - 320) / 2,
      bottom: window.innerHeight / 2
    };
  }(0);
  let a = _$$_t(e);
  let s = _$$JT();
  let r = useIsSelectedFigmakeFullscreen();
  let o = r ? renderI18nText('figmake.unpublish_modal.header') : renderI18nText('sites.toolbar.publish_modal.unpublish_site');
  let d = a && a.hasCustomDomain && a.verifiedAt ? a.customDomain : a?.domain;
  let c = jsx('span', {
    className: _$$s4.overflowHidden.ellipsis.colorTextBrand.$,
    children: d ?? ''
  });
  let p = s ? renderI18nText('figmake.unpublish_modal.unpublish_from_web_and_cmty_confirmation', {
    domain: c
  }) : r ? renderI18nText('figmake.unpublish_modal.unpublish_confirmation', {
    domain: c
  }) : renderI18nText('sites.toolbar.publish_modal.unpublish_confirmation', {
    domain: c
  });
  return jsx(_$$bL2, {
    width: 320,
    onClose: t,
    defaultPosition: n,
    children: jsxs(_$$vo, {
      children: [jsx(Y9, {
        children: jsx(_$$hE, {
          children: o
        })
      }), jsx(_$$nB, {
        children: jsx('div', {
          className: _$$s4.py8.$,
          children: p
        })
      }), jsx(_$$wi, {
        children: jsxs(_$$jk, {
          children: [jsx(Button, {
            variant: 'secondary',
            onClick: t,
            children: renderI18nText('general.cancel')
          }), jsx(Button, {
            variant: 'destructive',
            onClick: i,
            disabled: !1,
            children: renderI18nText('sites.toolbar.publish_modal.unpublish')
          })]
        })
      })]
    })
  });
}
let cn = e => {
  e.keyCode !== Uz.ESCAPE && (e.keyCode !== Uz.ENTER || e.shiftKey) || (e.stopPropagation(), e.currentTarget.blur());
};
function cl({
  recordingKey: e,
  page: t,
  isSiteLevelSetting: i
}) {
  let n = generateRecordingKey(e, 'title');
  let s = useIsSelectedFigmakeFullscreen();
  let r = useMemo(() => s ? getI18nString('figmake.metadata.controls.site_title.label') : i ? getI18nString('sites.metadata.controls.title_site.label') : getI18nString('sites.metadata.controls.title_page.label'), [i, s]);
  return jsx(dK, {
    label: r,
    control: i ? jsx(lX, {
      size: 'lg',
      recordingKey: n
    }) : jsx(lV, {
      guid: t,
      size: 'lg',
      recordingKey: n
    }),
    description: i ? void 0 : getI18nString('sites.metadata.controls.title_page.infotext')
  });
}
function ca({
  recordingKey: e,
  page: t,
  isSiteLevelSetting: i
}) {
  let n = d9(t);
  let [s, o] = useState(n.description);
  let d = OG(i ? 'description' : 'page_description');
  let c = useIsSelectedFigmakeFullscreen();
  let p = useMemo(() => c ? getI18nString('figmake.metadata.controls.description_site.label') : i ? getI18nString('sites.metadata.controls.description_site.label') : getI18nString('sites.metadata.controls.description_page.label'), [c, i]);
  return jsx(dK, {
    label: p,
    control: jsx(_$$v8, {
      className: 'site_settings_components--textareaDescription--savOz',
      onChange: e => {
        let i = e.currentTarget.value;
        i ? o(i) : o(null);
        _$$l.user('set-responsive-set-settings', () => {
          Fullscreen?.setResponsiveSetSettings({
            description: i?.trim() ?? void 0
          }, [t]);
        });
        d();
      },
      onKeyDown: cn,
      value: s ?? n.description,
      placeholder: i ? getI18nString('sites.metadata.controls.description_site.placeholder') : getI18nString('sites.metadata.controls.description_page.placeholder'),
      recordingKey: generateRecordingKey(e, 'description'),
      minHeight: 104,
      maxHeight: 156
    }),
    description: i ? void 0 : getI18nString('sites.metadata.controls.description_page.infotext')
  });
}
let cs = /^[a-z]{2,3}(-[a-z]{4})?(-[a-z]{2}|\d{3})?$/i;
function cr({
  recordingKey: e,
  page: t,
  isSiteLevelSetting: i
}) {
  let n = d9(t);
  let [s, o] = useState(n.lang);
  let d = OG(i ? 'language' : 'page_language');
  let c = !!(n.lang && !cs.test(n.lang));
  return jsx(dK, {
    label: getI18nString('sites.metadata.controls.language.label'),
    control: jsx(_$$ks, {
      'aria-invalid': c,
      'className': _$$s4.wFull.$,
      'style': _$$sx2.py8.px12.hAuto.$$if(c, _$$sx2.colorBorderWarningStrong).$,
      'onChange': e => {
        let i = e.currentTarget.value;
        i ? o(i) : o(null);
        _$$l.user('set-responsive-set-settings', () => {
          Fullscreen?.setResponsiveSetSettings({
            lang: i?.trim() ?? void 0
          }, [t]);
        });
        d();
      },
      'onKeyDown': cn,
      'value': s ?? n.lang,
      'placeholder': getI18nString('sites.metadata.controls.language.placeholder'),
      'recordingKey': generateRecordingKey(e, 'lang')
    }),
    description: c ? getI18nString('sites.metadata.controls.language.infotext_invalid') : getI18nString('sites.metadata.controls.language.infotext'),
    isInvalid: c
  });
}
function co({
  recordingKey: e
}) {
  let t = selectCurrentUser();
  let i = useIsSelectedFigmakeFullscreen();
  let {
    codeLibraryInstance
  } = _$$oA2();
  let s = useCurrentFileKey();
  let [o, d] = useState(!1);
  let c = useCallback(() => {
    if (t && codeLibraryInstance && codeLibraryInstance.type === 'CODE_LIBRARY' && codeLibraryInstance.chatMessages) {
      let e = {
        id: Fullscreen?.generateUniqueID() ?? '',
        type: ChatMessageType.SYSTEM_MESSAGE,
        userId: t.id,
        textContent: JSON.stringify({
          type: 'deleted_chat_history',
          plainText: '',
          timestamp: Date.now(),
          userId: t.id
        }),
        sentAt: Date.now(),
        toolCalls: [],
        toolResults: [],
        sentAt64: Date.now().toString()
      };
      let i = codeLibraryInstance.chatMessages.filter(e => e.type === ChatMessageType.SYSTEM_MESSAGE && U1(e.textContent || '')?.type === 'deleted_chat_history');
      if (!(i.length < codeLibraryInstance.chatMessages.length)) return;
      let l = codeLibraryInstance.chatMessages.length - i.length;
      let a = i.length;
      i.push(e);
      _$$l.user('delete-chat-history', () => {
        codeLibraryInstance.chatMessages = i;
        codeLibraryInstance.chatCompressionState && (codeLibraryInstance.chatCompressionState = {
          startIndex: i.length,
          summary: ''
        });
      });
      Hu(s || '', l, a);
    }
  }, [t, codeLibraryInstance, s]);
  let p = useCallback(() => {
    d(!0);
  }, []);
  let x = useCallback(() => {
    c();
    d(!1);
  }, [c]);
  let m = useCallback(() => {
    d(!1);
  }, []);
  return i && getFeatureFlags().bake_wipe_chat_history && t && codeLibraryInstance ? jsxs(Fragment, {
    children: [jsx(dK, {
      label: getI18nString('figmake.chat_management.wipe_chat_settings.title'),
      control: jsxs('div', {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          color: 'var(--color-text-secondary)'
        },
        children: [getI18nString('figmake.chat_management.wipe_chat_settings.description'), jsx('div', {
          style: {
            maxWidth: '196px'
          },
          children: jsx(Button, {
            variant: 'destructiveSecondary',
            onClick: p,
            recordingKey: generateRecordingKey(e, 'wipe_chat_history_button'),
            children: getI18nString('figmake.chat_management.wipe_chat_settings.label')
          })
        })]
      })
    }), jsx(ConfirmationModal, {
      open: o,
      onClose: m,
      onConfirm: x,
      title: getI18nString('figmake.chat_management.wipe_chat_settings.confirmation.title'),
      confirmText: getI18nString('figmake.chat_management.wipe_chat_settings.confirmation.button_text'),
      destructive: !0,
      recordingKey: generateRecordingKey(e, 'confirm_delete_chat_modal'),
      children: getI18nString('figmake.chat_management.wipe_chat_settings.confirmation.message')
    })]
  }) : null;
}
let cd = /^(G-[A-Z0-9]{10}|GTM-[A-Z0-9]{6,8})$/;
function cc({
  recordingKey: e,
  page: t,
  isSiteLevelSetting: i
}) {
  let n = d9(t);
  let [s, o] = useState(n.googleAnalyticsID);
  let d = OG(i ? 'google_analytics_id' : 'page_google_analytics_id');
  let c = !!(n.googleAnalyticsID && !cd.test(n.googleAnalyticsID));
  return jsx(dK, {
    label: getI18nString('sites.metadata.controls.google_analytics_id.label'),
    control: jsx(_$$ks, {
      'aria-invalid': c,
      'className': _$$s4.wFull.$,
      'style': _$$sx2.py8.px12.hAuto.$$if(c, _$$sx2.colorBorderWarningStrong).$,
      'maxLength': 13,
      'onChange': e => {
        let i = e.currentTarget.value;
        i ? o(i) : o(null);
        _$$l.user('set-responsive-set-settings', () => {
          Fullscreen?.setResponsiveSetSettings({
            googleAnalyticsID: i?.trim() ?? void 0
          }, [t]);
        });
        d();
      },
      'onKeyDown': cn,
      'value': s ?? n.googleAnalyticsID,
      'placeholder': getI18nString('sites.metadata.controls.google_analytics_id.placeholder'),
      'recordingKey': generateRecordingKey(e, 'google_analytics_id')
    }),
    description: c ? getI18nString('sites.metadata.controls.google_analytics_id.infotext_invalid') : void 0,
    isInvalid: c
  });
}
function cu({
  recordingKey: e,
  page: t,
  isSiteLevelSetting: i,
  allResponsiveSetGuids: n
}) {
  let s = d9(t);
  let o = d9(null).blockSearchIndexing && !i;
  let [d, c] = useState(s.blockSearchIndexing);
  let p = OG(i ? 'search_indexing' : 'page_search_indexing');
  let x = useIsSelectedFigmakeFullscreen();
  let m = [t];
  x && (m = [t, ...(n ?? [])]);
  let h = useMemo(() => x ? getI18nString('figmake.metadata.controls.no_indexing_site.label') : i ? getI18nString('sites.metadata.controls.no_indexing_site.label') : getI18nString('sites.metadata.controls.no_indexing_page.label'), [i, x]);
  return jsx('div', {
    className: _$$s4.flex.flexColumn.px16.minH24.justifyCenter.pt4.pb8.$,
    children: jsx(Checkbox, {
      disabled: o,
      label: jsxs(Label, {
        className: 'x78zum5',
        children: [h, o && jsx('span', {
          'data-tooltip': getI18nString('sites.metadata.controls.no_indexing_page.disabled_hover_tooltip'),
          'data-tooltip-type': KindEnum.TEXT,
          'className': 'x1h67ju5',
          'children': jsx(_$$B3, {})
        })]
      }),
      onChange: e => {
        c(e);
        _$$l.user('set-responsive-set-settings', () => {
          Fullscreen?.setResponsiveSetSettings({
            blockSearchIndexing: e ?? void 0
          }, m);
        });
        p();
      },
      checked: !!d,
      recordingKey: generateRecordingKey(e, 'allow_search_indexing')
    })
  });
}
function cp({
  recordingKey: e,
  page: t
}) {
  let i = d9(t);
  let [n, s] = useState(i.addBypassLinks);
  let o = OG('bypass_link');
  return jsx('div', {
    className: _$$s4.flex.flexColumn.px16.minH24.justifyCenter.pt4.pb8.$,
    children: jsx(Checkbox, {
      label: jsx(Label, {
        className: 'x78zum5',
        children: getI18nString('sites.metadata.controls.bypass_link_site.label')
      }),
      onChange: e => {
        s(e);
        _$$l.user('set-responsive-set-settings', () => {
          Fullscreen?.setResponsiveSetSettings({
            addBypassLinks: e ?? void 0
          }, [t]);
        });
        o();
      },
      checked: !!n,
      recordingKey: generateRecordingKey(e, 'add_bypass_link'),
      children: getI18nString('sites.metadata.controls.bypass_link_site.description')
    })
  });
}
function cx({
  recordingKey: e,
  page: t
}) {
  let i = d9(t);
  let [n, s] = useState(i.ignoreReducedMotion);
  let o = OG('ignore_reduced_motion');
  return jsx('div', {
    className: _$$s4.flex.flexColumn.px16.minH24.justifyCenter.pt4.pb8.$,
    children: jsx(Checkbox, {
      label: jsx(Label, {
        className: 'x78zum5',
        children: getI18nString('sites.metadata.controls.reduced_motion.label')
      }),
      onChange: e => {
        let i = !e;
        s(i);
        _$$l.user('set-responsive-set-settings', () => {
          Fullscreen?.setResponsiveSetSettings({
            ignoreReducedMotion: i ?? void 0
          }, [t]);
        });
        o();
      },
      checked: !n,
      recordingKey: generateRecordingKey(e, 'ignore_reduced_motion'),
      children: getI18nString('sites.metadata.controls.reduced_motion.description')
    })
  });
}
function cm({
  page: e,
  closeModal: t,
  isSiteLevelSetting: i,
  recordingKey: n
}) {
  let s = d9(e);
  let o = OG(i ? 'favicon' : 'page_favicon');
  let d = Fk(e => {
    let t = e.getCurrentPage();
    if (t) {
      return ZQ(e, t.id).filter(e => e.type === 'FRAME' || e.type === 'ROUNDED_RECTANGLE').map(e => ({
        guid: e.guid,
        name: e.name,
        size: e.size,
        type: e.type
      }));
    }
  });
  let c = t => {
    _$$l.user('set-responsive-set-settings', () => {
      Fullscreen?.setResponsiveSetSettings({
        faviconID: t ?? void 0
      }, [e]);
    });
    o();
  };
  let [p, x] = useState(null);
  useEffect(() => {
    x(null);
    let e = async () => {
      x(await c_(s.faviconID, {
        type: 'WIDTH',
        value: 96
      }));
    };
    if (s.faviconID) {
      let t = getSingletonSceneGraph();
      let i = t.get(s.faviconID)?.editInfo;
      if (!s.faviconID || !i) return;
      let n = t.onChange(() => {
        let n = t.get(s.faviconID);
        n && i?.lastEditedAt !== n.editInfo?.lastEditedAt && (scheduler.postTask(e), i = n.editInfo);
      }, {
        allowDeferral: !0
      });
      scheduler.postTask(e);
      return n;
    }
  }, [s.faviconID]);
  useEffect(() => {}, [s.faviconID]);
  return jsx('div', {
    className: 'x1dc814f x1ff1495',
    children: jsx(d8, {
      addImage: () => {
        _$$l.user('create-favicon-frame', () => {
          let e = Fullscreen?.createFrame('Favicon', 48, 48, SideType.LEFT, !0);
          e && isValidSessionLocalID(parseSessionLocalID(e)) && (c(e), cg(), t?.());
        });
      },
      base64String: p,
      description: getI18nString('sites.metadata.controls.favicon.infotext', {
        width: 48,
        height: 48
      }),
      imageCandidates: d,
      label: getI18nString('sites.metadata.controls.favicon.label'),
      nodeId: s.faviconID,
      recordingKey: generateRecordingKey(n, 'favicon'),
      removeImage: () => c(''),
      removeString: getI18nString('sites.metadata.image_selector.remove_selection'),
      selectImage: c
    })
  });
}
function ch({
  page: e,
  closeModal: t,
  isSiteLevelSetting: i,
  recordingKey: n
}) {
  let s = d9(e);
  let o = OG(i ? 'social_image' : 'page_social_image');
  let d = Fk(e => {
    let t = e.getCurrentPage();
    if (t) {
      return ZQ(e, t.id).filter(e => e.type === 'FRAME' || e.type === 'ROUNDED_RECTANGLE').map(e => ({
        guid: e.guid,
        name: e.name,
        size: e.size,
        type: e.type
      }));
    }
  });
  let c = t => {
    _$$l.user('set-responsive-set-settings', () => {
      Fullscreen?.setResponsiveSetSettings({
        socialImageID: t ?? void 0
      }, [e]);
    });
    o();
  };
  let [p, x] = useState(null);
  useEffect(() => {
    x(null);
    let e = async () => {
      x(await c_(s.socialImageID, {
        type: 'WIDTH',
        value: 1200
      }));
    };
    if (s.socialImageID) {
      let t = getSingletonSceneGraph();
      let i = t.get(s.socialImageID)?.editInfo;
      if (!s.socialImageID || !i) return;
      let n = t.onChange(() => {
        let n = t.get(s.socialImageID);
        n && i?.lastEditedAt !== n.editInfo?.lastEditedAt && (scheduler.postTask(e), i = n.editInfo);
      }, {
        allowDeferral: !0
      });
      scheduler.postTask(e);
      return n;
    }
  }, [s.socialImageID]);
  return jsx('div', {
    className: 'x1dc814f x1ff1495',
    children: jsx(d8, {
      addImage: () => {
        _$$l.user('create-social-image-frame', () => {
          let e = Fullscreen?.createFrame('Social image', 1200, 630, SideType.LEFT, !0);
          e && isValidSessionLocalID(parseSessionLocalID(e)) && (c(e), cg(), t?.());
        });
      },
      base64String: p,
      description: getI18nString('sites.metadata.controls.social_image.infotext', {
        width: 1200,
        height: 630
      }),
      imageCandidates: d,
      label: getI18nString('sites.metadata.controls.social_image.label'),
      nodeId: s.socialImageID,
      recordingKey: generateRecordingKey(n, 'social_image'),
      removeImage: () => c(''),
      removeString: getI18nString('sites.metadata.image_selector.remove_selection'),
      selectImage: c
    })
  });
}
function cg() {
  fullscreenValue.updateAppModel({
    currentSelectedProperty: {
      type: NodePropertyCategory.FILL,
      indices: [0]
    }
  });
  Fullscreen && Fullscreen.uploadPaintImage('NORMAL', 1);
}
function cf({
  page: e
}) {
  let t = d9(e);
  let [i, n] = useState(t.customCodeHeadStart);
  let [s, o] = useState(t.customCodeHeadEnd);
  let [d, c] = useState(t.customCodeBodyStart);
  let [p, x] = useState(t.customCodeBodyEnd);
  let m = OG('custom_code_head_start');
  let h = OG('custom_code_head_end');
  let g = OG('custom_code_body_start');
  let f = OG('custom_code_body_end');
  let _ = t => {
    _$$l.user('set-responsive-set-settings', () => {
      Fullscreen?.setResponsiveSetSettings(t, [e]);
    });
  };
  return jsxs(Fragment, {
    children: [jsx(dK, {
      label: getI18nString('sites.metadata.controls.custom_code.start_head.label'),
      control: jsx(dZ, {
        placeholder: getI18nString('sites.metadata.controls.custom_code.placeholder'),
        code: i,
        onChange: e => {
          n(e);
          _({
            customCodeHeadStart: e
          });
          m();
        }
      })
    }), jsx(dK, {
      label: getI18nString('sites.metadata.controls.custom_code.end_head.label'),
      control: jsx(dZ, {
        placeholder: getI18nString('sites.metadata.controls.custom_code.placeholder'),
        code: s,
        onChange: e => {
          o(e);
          _({
            customCodeHeadEnd: e
          });
          h();
        }
      })
    }), jsx(dK, {
      label: getI18nString('sites.metadata.controls.custom_code.start_body.label'),
      control: jsx(dZ, {
        placeholder: getI18nString('sites.metadata.controls.custom_code.placeholder'),
        code: d,
        onChange: e => {
          c(e);
          _({
            customCodeBodyStart: e
          });
          g();
        }
      })
    }), jsx(dK, {
      label: getI18nString('sites.metadata.controls.custom_code.end_body.label'),
      control: jsx(dZ, {
        placeholder: getI18nString('sites.metadata.controls.custom_code.placeholder'),
        code: p,
        onChange: e => {
          x(e);
          _({
            customCodeBodyEnd: e
          });
          f();
        }
      })
    })]
  });
}
async function c_(e, t) {
  let i = _$$F6().getNodeById(e);
  if (!i || !('exportAsync' in i)) return null;
  let n = new Blob([await i?.exportAsync({
    format: 'PNG',
    constraint: t
  })], {
    type: 'image/png'
  });
  return await new Promise(e => {
    let t = new FileReader();
    t.onloadend = () => e(t.result);
    t.onerror = () => e(null);
    t.readAsDataURL(n);
  });
}
function cb({
  recordingKey: e,
  openFile: t
}) {
  let i = t.key;
  let n = JW(i || null);
  let a = useDispatch();
  let r = useIsSelectedFigmakeFullscreen();
  if (_$$$D({
    fileKey: i
  }), n.isLoading) {
    return jsx(_$$k7, {
      size: 'sm'
    });
  }
  let o = n.lastPublishedAt !== null;
  return jsxs('div', {
    className: _$$s4.wFull.flex.gap4.justifyBetween.itemsCenter.$,
    children: [jsx(an, {
      isPublished: o
    }), jsx('div', {
      className: _$$s4.flex.gap4.$,
      children: o ? jsx(Button, {
        onClick: () => a(showModalConditional({
          type: ct
        })),
        variant: 'destructiveSecondary',
        recordingKey: generateRecordingKey(e, 'unpublishButton'),
        children: r ? renderI18nText('figmake.metadata.controls.publish_status.unpublish_site') : renderI18nText('sites.metadata.controls.publish_status.unpublish_site')
      }) : jsx(sj, {
        file: t
      })
    })]
  });
}
function cy({
  recordingKey: e
}) {
  let t = selectCurrentFile();
  return t ? jsx(dK, {
    useLabel: !1,
    label: getI18nString('sites.metadata.controls.publish_status.label'),
    control: jsx(cb, {
      openFile: t,
      recordingKey: e
    })
  }) : null;
}
function cv({
  children: e
}) {
  return _$$b2() ? jsx('div', {
    ..._$$Ay.props(cw.section(640)),
    children: e
  }) : jsx('div', {
    children: e
  });
}
function cj({
  recordingKey: e,
  page: t,
  closeModal: i
}) {
  let n = _$$b2();
  let a = noop();
  let s = function () {
    let e = selectCurrentFile();
    let t = e?.plan?.tier === Agb.STARTER;
    let i = useIsSelectedFigmakeFullscreen();
    let n = function (e) {
      let t = useSubscription(FilePublishSitePermissions({
        fileKey: e || ''
      }), {
        enabled: !!e
      });
      return resourceUtils.useTransform(t, e => {
        let t = e.file?.canPublishSiteWithReasons;
        return t != null && t.status === ResourceStatus.Loaded && t.data.result;
      }).data ?? !1;
    }(e?.key);
    return !!getFeatureFlags().sts_passwords && (!t || !i) && n;
  }();
  let r = useIsSelectedFigmakeFullscreen();
  let o = jsxs(Fragment, {
    children: [jsx(d$, {
      children: getI18nString('sites.metadata.heading.general')
    }), jsx(cy, {
      recordingKey: e
    }), jsx(cl, {
      isSiteLevelSetting: !0,
      page: t,
      recordingKey: e
    }), jsx(ca, {
      isSiteLevelSetting: !0,
      page: t,
      recordingKey: e
    }), jsx(cr, {
      isSiteLevelSetting: !0,
      page: t,
      recordingKey: e
    }), jsx(cc, {
      isSiteLevelSetting: !0,
      page: t,
      recordingKey: e
    }), jsx(cu, {
      isSiteLevelSetting: !0,
      page: t,
      recordingKey: e,
      allResponsiveSetGuids: a
    }), getFeatureFlags().bake_wipe_chat_history && jsx(co, {
      recordingKey: e
    })]
  });
  let d = getFeatureFlags().sts_a11y_reduced_motion || getFeatureFlags().sts_a11y_bypass_link_setting;
  let p = jsxs(Fragment, {
    children: [jsx(d$, {
      children: getI18nString('sites.metadata.heading.accessibility')
    }), getFeatureFlags().sts_a11y_reduced_motion && jsx(cx, {
      isSiteLevelSetting: !0,
      page: t,
      recordingKey: e
    }), getFeatureFlags().sts_a11y_bypass_link_setting && jsx(cp, {
      isSiteLevelSetting: !0,
      page: t,
      recordingKey: e
    })]
  });
  let x = jsxs(Fragment, {
    children: [jsx(d$, {
      children: getI18nString('sites.metadata.heading.images')
    }), jsx(cm, {
      isSiteLevelSetting: !0,
      page: t,
      recordingKey: e,
      closeModal: i
    }), jsx(ch, {
      isSiteLevelSetting: !0,
      page: t,
      recordingKey: e,
      closeModal: i
    })]
  });
  let m = selectCurrentFile();
  let h = m?.key;
  let g = h ? jsxs(Fragment, {
    children: [jsx(d$, {
      children: r ? getI18nString('figmake.settings.password_protection.title') : getI18nString('sites.metadata.heading.site_access')
    }), jsx(dz, {
      recordingKey: e,
      fileKey: h
    })]
  }) : null;
  let f = jsxs(Fragment, {
    children: [jsx(d$, {
      children: getI18nString('sites.metadata.heading.custom_code')
    }), jsx(cf, {
      isSiteLevelSetting: !0,
      page: t,
      recordingKey: e
    })]
  });
  return t && isValidSessionLocalID(parseSessionLocalID(t)) ? jsxs('div', {
    className: v()(_$$s4.flex.flexColumn.gap24.$, {
      [Qx]: n
    }),
    children: [jsx(cv, {
      children: o
    }), d && jsx(cv, {
      children: p
    }), jsx(cv, {
      children: x
    }), s && jsx(cv, {
      children: g
    }), jsx(cv, {
      children: f
    })]
  }) : null;
}
function ck({
  recordingKey: e,
  page: t,
  closeModal: i
}) {
  let n = _$$b2();
  let a = noop();
  let s = jsxs(Fragment, {
    children: [jsx(d$, {
      children: getI18nString('sites.metadata.heading.general')
    }), jsx(cl, {
      page: t,
      recordingKey: e
    }, `title-${t}`), jsx(ca, {
      page: t,
      recordingKey: e
    }, `description-${t}`), jsx(cr, {
      page: t,
      recordingKey: e
    }, `language-${t}`), jsx(cu, {
      page: t,
      recordingKey: e,
      allResponsiveSetGuids: a
    }, `search-indexing-${t}`)]
  });
  let r = jsxs(Fragment, {
    children: [jsx(d$, {
      children: getI18nString('sites.metadata.heading.images')
    }), jsx(ch, {
      page: t,
      recordingKey: e,
      closeModal: i
    }, `social-image-${t}`)]
  });
  return t && isValidSessionLocalID(parseSessionLocalID(t)) ? jsxs('div', {
    className: v()(_$$s4.flex.flexColumn.gap24.$, {
      [Qx]: n
    }),
    children: [jsx(cv, {
      children: s
    }), jsx(cv, {
      children: r
    })]
  }) : null;
}
let cw = {
  section: e => [{
    width: e == null ? null : 'x1bl4301',
    borderRadius: 'x9h44rk',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    padding: 'x1ib1h6n',
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
    boxSizing: 'x9f619',
    $$css: !0
  }, {
    '--width': (e => typeof e == 'number' ? `${e}px` : e != null ? e : void 0)(e)
  }]
};
function cS({
  recordingKey: e,
  closeModal: t
}) {
  let i = useAtomWithSubscription(_$$j4);
  let n = _$$dh();
  let a = useCurrentFileKey();
  let s = _$$_t(a ?? '');
  return i === null || i === n || i === _$$p6.WEBSITE ? jsx(cj, {
    page: n,
    recordingKey: e,
    closeModal: t
  }) : i === _$$p6.DOMAINS ? jsx(dL, {
    domainInfo: s,
    recordingKey: e
  }) : i === _$$p6.FONTS ? jsx(ob, {}) : i === _$$p6.SUPABASE ? jsx(r$, {}) : jsx(ck, {
    page: i,
    recordingKey: e,
    closeModal: t
  });
}
function cC() {
  return jsxs(nH, {
    children: [jsx(nH.Header, {
      title: getI18nString('sites.side_rail.settings'),
      dataTestId: 'site-settings-view-header',
      children: jsx(_$$v4, {})
    }), jsx(_$$P2, {
      className: 'xh8yej3',
      children: jsx('div', {
        'className': 'x78zum5 xl56j7k x6s0dn4 x1efd9su x1kx8hp3',
        'data-testid': 'site-settings-view-container',
        'children': jsx(cS, {
          closeModal: () => null,
          recordingKey: 'sitesSettingsForm'
        })
      })
    })]
  });
}
function cT() {
  return jsxs(nH, {
    children: [jsx(nH.Header, {
      title: getI18nString('figmake.side_rail.settings'),
      children: jsx(s4, {})
    }), jsx(_$$P2, {
      className: 'xh8yej3',
      children: jsx('div', {
        className: 'x78zum5 xl56j7k x6s0dn4 x1efd9su x1kx8hp3',
        children: jsx(cS, {
          closeModal: () => null,
          recordingKey: 'sitesSettingsForm'
        })
      })
    })]
  });
}
function cI() {
  return jsxs(_$$P2, {
    children: [jsxs('div', {
      className: 'x78zum5 xdt5ytf',
      children: [jsx('span', {
        ..._$$Ay.props(cN.navSectionTitle),
        children: getI18nString('sites.settings.site_heading')
      }), jsx('nav', {
        className: 'x78zum5 xdt5ytf x1jl38hy x5jayri xsgzr2y x1n5zjp5',
        children: jsx(oE, {})
      })]
    }), jsxs('div', {
      className: 'x78zum5 xdt5ytf',
      children: [jsx('span', {
        ..._$$Ay.props(cN.navSectionTitle),
        children: getI18nString('sites.panel.link_panel.webpages_header')
      }), jsx('nav', {
        className: 'x78zum5 xdt5ytf x1jl38hy x5jayri',
        children: jsx(oN, {})
      })]
    })]
  });
}
function cE() {
  let e = _$$p4();
  return jsxs(_$$P2, {
    children: [jsxs('div', {
      className: 'x78zum5 xdt5ytf',
      children: [jsx('span', {
        ..._$$Ay.props(cN.navSectionTitle),
        children: getI18nString('sites.settings.site_heading')
      }), jsx('nav', {
        ..._$$Ay.props(cN.nav, e ? cN.withBottomBorder : {}),
        children: jsx(oE, {})
      })]
    }), e && jsxs('div', {
      className: 'x78zum5 xdt5ytf',
      children: [jsx('span', {
        ..._$$Ay.props(cN.navSectionTitle),
        children: getI18nString('sites.settings.integrations_heading')
      }), jsx('nav', {
        className: 'x78zum5 xdt5ytf x1jl38hy x5jayri',
        children: jsx(oR, {})
      })]
    })]
  });
}
let cN = {
  nav: {
    display: 'x78zum5',
    flexDirection: 'xdt5ytf',
    paddingLeft: 'x1jl38hy',
    paddingRight: 'x5jayri',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  },
  withBottomBorder: {
    paddingBottom: 'xsgzr2y',
    borderBottom: 'x1n5zjp5',
    borderBottomWidth: null,
    borderBottomStyle: null,
    borderBottomColor: null,
    $$css: !0
  },
  navSectionTitle: {
    display: 'x78zum5',
    padding: 'x1iwkndl',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    alignItems: 'x6s0dn4',
    ..._$$g.textBodyMediumStrong,
    $$css: !0
  }
};
let cL = '../assets/';
function cP(e) {
  return e.replace(/^\/+/, '');
}
async function cO(e, t, i) {
  let n = {};
  let l = {};
  if (!e) {
    return {
      codeFiles: {},
      assetFiles: {}
    };
  }
  let a = await _$$gz({
    node: e,
    tailwind: !0,
    jsxDev: !1,
    shadcn: !0,
    noWrapper: !0
  });
  if (!a) {
    return {
      codeFiles: {},
      assetFiles: {}
    };
  }
  let s = getSingletonSceneGraph();
  let o = _$$is(s.getInternalCanvas(), e => e && e.isCodeFile);
  await Jr().loadAllImagesUnder(o.map(e => e.id), ImageExportType.ALL, 'sites.assetGeneration');
  let d = {};
  o.forEach(e => {
    e.imageImports.forEach(e => {
      d[e.variableName] = e;
      l[cL + e.variableName] = e.data;
    });
  });
  let {
    viteAliases,
    packageDependencies
  } = function (e, t) {
    let i = {
      '@': 'path.resolve(__dirname, \'./src\')'
    };
    let n = {
      'react': '^18.3.1',
      'react-dom': '^18.3.1'
    };
    try {
      for (let t of JSON.parse(e)?.sources ?? []) {
        let e = /^https:\/\/esm\.sh\/(@?[^@]+)@([^/]+)\/.*/;
        let l = t.match(e);
        if (l) {
          let [, e, t] = l;
          if (e && t) {
            if (i[`${e}@${t}`] = `'${e}'`, n[e]) {
              let i = n[e].slice(1);
              n[e] = `^${compareVersions(i, t) === 1 ? t : i}`;
            } else {
              n[e] = `^${t}`;
            }
          }
        }
      }
      for (let e of t) i[`figma:asset/${e.variableName}`] = `path.resolve(__dirname, './${cL}${e.variableName}')`;
    } catch (e) {
      console.error('Failed to parse sources:', e);
    }
    return {
      viteAliases: i,
      packageDependencies: n
    };
  }(a.sourceMap ?? '{}', Object.values(d));
  let p = Object.entries(viteAliases).sort().reverse().map(([e, t]) => `        '${e}': ${t}`).join(',\n');
  let x = Object.entries(packageDependencies).sort().map(([e, t]) => `          "${e}": "${t}"`).join(',\n');
  for (let [e, l] of (n['../main.tsx'] = `
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

  createRoot(document.getElementById("root")!).render(<App />);
  `, n['vite.config.ts'] = `
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
${p},
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });`, n['index.html'] = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${t}</title>
    </head>

    <body>
      <div id="root"></div>
      <script type="module" src="/src/main.tsx"></script>
    </body>
  </html>
  `, n['../index.css'] = a.css, n['package.json'] = `
  {
      "name": "${t}",
      "version": "0.1.0",
      "private": true,
      "dependencies": {
${x}
      },
      "devDependencies": {
          "@types/node": "^20.10.0",
          "@vitejs/plugin-react-swc": "^3.10.2",
          "vite": "^5.4.19"
      },
      "scripts": {
          "dev": "vite",
          "build": "vite build"
      }
  }`, n['README.md'] = `
  # ${t}

  This is a code bundle for ${t}. The original project is available at ${i}.

  ## Running the code

  Run \`npm i\` to install the dependencies.

  Run \`npm run dev\` to start the development server.
  `, Object.entries(a.codeFilesystem))) {
    let t = cP(e.replace(/^file:\/\//, ''));
    t || (t = e);
    n[`src/${t}`] = l;
  }
  return {
    codeFiles: n,
    assetFiles: l
  };
}
function cB() {
  let {
    color
  } = _$$G4();
  return jsxs('div', {
    className: 'x10l6tqk x1vazsj0 x16v0e3u xb3r6kr',
    children: [jsxs('div', {
      'className': 'x10l6tqk xles8b3 xz5rk10 x7t3om8 x30pxwf x4hg4is xa4qsjk',
      'data-name': 'Gradient',
      'children': [jsx('div', {
        style: {
          '--gradient-base-color': color === 'dark' ? '#8B7EFF' : '#B9B8FF'
        },
        className: 'x10l6tqk xtr96b9 xbyci1x xvr7zsw x4k3uqp x1809qqa x1p4oqka xard7js xqc6e60 x1l4ijlw'
      }), jsx('div', {
        style: {
          '--gradient-base-color': color === 'dark' ? '#6B5EFF' : '#3D38F5'
        },
        className: 'x10l6tqk xtr96b9 xbyci1x xeqbchg xk0kkwd x1s3zi22 x38zqab x1ef2iwa xewbwdu x1l4ijlw'
      })]
    }), jsx('div', {
      className: 'x10l6tqk x1vazsj0 x1us6l5c x52sp44 x1ht9rhz x5fesq1 x3b2oae x16fucec x1fm4cag x1p8iuce'
    })]
  });
}
let cJ = forwardRef(({
  icon: e,
  children: t,
  type: i = 'button',
  ...n
}, a) => jsxs(ButtonPrimitive, {
  ref: a,
  className: 'x78zum5 x1q0g3np x6s0dn4 x167g77z x1yjdb4r xv2f06h x1bamp8i xgqmno8 x10w6t97 x13dej2s x3t71xm x1n2onr6 x9f619 xb3r6kr',
  type: i,
  ...n,
  children: [jsx('div', {
    className: 'x1kky2od xlup9mm x1d3vzwk',
    children: e
  }), jsx('span', {
    ..._$$xk(cZ.text),
    children: t
  })]
}));
let cZ = {
  text: {
    ..._$$g.textBodyMedium,
    color: 'x1akne3o',
    fontWeight: 'x10p5zqr',
    fontSize: 'x1j6dyjg',
    lineHeight: 'x1d3mw78',
    whiteSpace: 'xuxw1ft',
    $$css: !0
  }
};
function c5() {
  let e = useCurrentFileKey();
  let t = useTeamPlanPublicInfo();
  let i = useIsStarterPlan(t).unwrapOr(!1);
  let [n, r] = useState(!1);
  let o = useRef(null);
  let {
    libraryImport
  } = _$$S8();
  let c = useDispatch();
  return i && getFeatureFlags().bake_starter_limit ? null : jsx(Fragment, {
    children: jsx(cJ, {
      ref: o,
      onClick: () => {
        let t = o.current;
        if (!t || n) return;
        analyticsEventManager.trackDefinedEvent('ds_import.library_import_button_clicked', {
          selected_library_key: libraryImport?.library.library_key,
          file_key: e || ''
        });
        let i = t.getBoundingClientRect();
        let l = new Point(i.left, i.bottom + 4);
        r(!0);
        c(showModalHandler({
          type: _$$u5,
          data: {
            defaultPosition: l,
            onCloseCallback: () => {
              r(!1);
            },
            hasExistingChatMessages: !1
          }
        }));
      },
      icon: jsx(_$$l9, {}),
      children: libraryImport ? jsx('div', {
        className: 'x1ncir08 xlup9mm xb3r6kr xlyipyv xuxw1ft',
        children: libraryImport.library.library_name
      }) : getI18nString('figmake.empty_state.select_a_library')
    })
  });
}
function c4({
  attachments: e,
  clearAttachment: t
}) {
  let i = e.filter(e => e.status !== 'error');
  return i.length === 0 ? null : jsx('div', {
    className: 'x78zum5 x1q0g3np x1nfngrj x6s0dn4',
    children: i.map(e => jsx(_$$V2, {
      attachment: e,
      clearAttachment: t
    }, e.uniqueId))
  });
}
let c3 = forwardRef((e, t) => jsx(cJ, {
  icon: jsx(_$$e9, {}),
  type: 'button',
  ref: t,
  ..._$$d6(e),
  children: getI18nString('figmake.empty_state.attach_a_design')
}));
function c8({
  chatMessagesNodeGuid: e,
  requestClose: t
}) {
  let [i, n] = useAtomValueAndSetter(_$$mC(e));
  let [s, r] = useState(!1);
  let d = useRef(null);
  let {
    attachments,
    clearAttachment,
    createLoadedAttachment
  } = _$$_6(e);
  let m = _$$S7({
    textareaRef: d,
    maxHeight: 200
  });
  let h = useRef(!1);
  let g = selectCurrentFile();
  useEffect(() => {
    m();
  }, [i, m]);
  useEffect(() => {
    d.current && d.current.focus();
  }, []);
  let f = i.length === 0;
  let _ = e => {
    e.preventDefault();
    f || (t(), Uy.trigger('submit'));
  };
  let b = attachments.length < qQ;
  let y = async e => {
    if (e.files.length === 0 || e.files.length + attachments.length > qQ) {
      r(!1);
      return;
    }
    try {
      let t = Array.from(e.files).map(async e => {
        e && _$$xp.some(t => e.type.startsWith(t.replace('*', ''))) && (await _$$z9(e, createLoadedAttachment));
      });
      await Promise.all(t);
    } catch (e) {
      console.error(e);
    } finally {
      r(!1);
    }
  };
  return jsx(_$$Y4, {
    isDragTarget: () => b,
    onTargetDragEnter: () => r(!0),
    onTargetDragLeave: () => r(!1),
    onTargetDrop: y,
    className: 'xjp7ctv',
    children: jsxs('form', {
      ..._$$Ay.props(c6.container, s && c6.dragBorder),
      onSubmit: e => e.preventDefault(),
      children: [jsxs('div', {
        className: 'xh8yej3 x78zum5 xdt5ytf x1nfngrj x1qjc9v5',
        children: [jsx(c4, {
          attachments,
          clearAttachment
        }), jsx('textarea', {
          className: 'x78zum5 x1iyjqo2 xtt52l0 x8nclml x15hkz2h x1vi7shn x1ed109x x4z9k3i x1akne3o x1yjdb4r xuggh6c',
          value: i,
          onChange: e => n(e.target.value),
          onKeyDown: e => {
            e.key !== 'Enter' || e.shiftKey || e.nativeEvent.isComposing || _(e);
            h.current || (h.current = !0, analyticsEventManager.trackDefinedEvent('figmake.empty_state_chat_input_used', {
              fileKey: g?.key ?? ''
            }));
          },
          placeholder: getI18nString('figmake.empty_state.chat_placeholder'),
          ref: d
        })]
      }), jsx('div', {
        className: 'xh8yej3 x78zum5 x1q0g3np x6s0dn4',
        children: jsxs('div', {
          className: 'xh8yej3 x78zum5 x1q0g3np x6s0dn4 x1qughib',
          children: [jsxs('div', {
            className: 'x78zum5 x1q0g3np x1nfngrj x6s0dn4',
            children: [jsx(_$$D3, {
              toggleComponent: c3,
              enableAssetImport: !0,
              enableImageAttachment: !0,
              attachments,
              isViewOnly: !1,
              chatMessagesNodeGuid: e,
              createLoadedAttachment
            }), jsx(c5, {})]
          }), jsx(ButtonPrimitive, {
            ..._$$Ay.props(c6.sendIcon, f && c6.sendIconDisabled),
            type: 'submit',
            disabled: f,
            onClick: _,
            children: jsx(_$$W5, {})
          })]
        })
      })]
    })
  });
}
let c6 = {
  dragBorder: {
    outline: 'xeef5f6',
    outlineColor: null,
    outlineStyle: null,
    outlineWidth: null,
    outlineOffset: 'xctpj3z',
    $$css: !0
  },
  container: {
    backgroundColor: 'x1yjdb4r',
    borderRadius: 'x1mxnbhz',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    boxShadow: 'xtuhdl6',
    width: 'xh8yej3',
    maxWidth: 'x11gisft',
    display: 'x78zum5',
    flexDirection: 'xdt5ytf',
    gap: 'x1pulhmw',
    rowGap: null,
    columnGap: null,
    alignItems: 'x1cy8zhl',
    padding: 'x1kzcg16',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    boxSizing: 'x9f619',
    $$css: !0
  },
  sendIcon: {
    'width': 'x23j0i4',
    'height': 'xd7y6wv',
    'display': 'x78zum5',
    'alignItems': 'x6s0dn4',
    'justifyContent': 'xl56j7k',
    'borderRadius': 'x1d36bvo',
    'borderStartStartRadius': null,
    'borderStartEndRadius': null,
    'borderEndStartRadius': null,
    'borderEndEndRadius': null,
    'borderTopLeftRadius': null,
    'borderTopRightRadius': null,
    'borderBottomLeftRadius': null,
    'borderBottomRightRadius': null,
    'backgroundColor': 'xu5wzci xazsp2l',
    '--color-icon': 'xwa2v1s',
    '$$css': !0
  },
  sendIconDisabled: {
    backgroundColor: 'xgbcquw',
    borderColor: 'x7oc584',
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
function c7({
  image: e,
  title: t,
  onClick: i
}) {
  return jsxs(ButtonPrimitive, {
    className: 'x19y5rnk xfp4ol3 x78zum5 xdt5ytf x1i71x30 x1cy8zhl x1ypdohk x1y2ay1z x1dwso5e',
    onClick: i,
    children: [jsx(_$$oW, {
      src: e,
      className: 'xfp4ol3 xtuhdl6 x19y5rnk xb3r6kr x71s49j x1auwtj7 x1e3tvwc'
    }), jsxs('div', {
      className: 'x78zum5 xdt5ytf x1cy8zhl x1717udv xwekt4t',
      children: [jsx('span', {
        ..._$$xk(c9.cardTitle),
        children: t
      }), jsx('span', {
        ..._$$xk(c9.cardSubtitle),
        children: getI18nString('figmake.empty_state.by_figma')
      })]
    })]
  });
}
let c9 = {
  cardTitle: {
    ..._$$g.textBodyLargeStrong,
    color: 'x1akne3o',
    fontSize: 'x4z9k3i',
    lineHeight: 'x19v9tvf',
    whiteSpace: 'xuxw1ft',
    letterSpacing: 'xsoyr4f',
    $$css: !0
  },
  cardSubtitle: {
    ..._$$g.textBodyMedium,
    color: 'x1n0bwc9',
    fontSize: 'x1j6dyjg',
    lineHeight: 'x1d3mw78',
    letterSpacing: 'xqp8s7e',
    $$css: !0
  }
};
let ue = {
  glass_material_editor: 'b650b46dfa4adb6603fcd7cf6cfe517d630dec14',
  synth_maker: 'b8a14e750d1593988731b2d671e7f237c4e1ba1b',
  image_dithering_tool: '377b9bae9f583e9e442c4b4e64ff11adea73ea65',
  shopping_app: '1a04bb967d10fbbac43042ee4689d1cdcf7b4382'
};
let ut = {
  glass_material_editor: '454b341b7bbc066446e69b5ce63efa8b14ccdd3f',
  synth_maker: '89d8ffcc93551933faa943eb069bdb1a0af3fe25',
  image_dithering_tool: '03cf3d5e9234b2868d6984d39e587d4871643149',
  shopping_app: 'b8b7e5e2f408a6826c33a1b467b56194b2c1ce5c'
};
let ui = {
  glass_material_editor: '07f5f5877c9197f32f6a14c0edf0f79c8d4bcb97',
  synth_maker: '202102d905a3764428d641196b0f255952f8c7f3',
  image_dithering_tool: 'a24fcfacc43abd65ef814cb8a3efcfd348861ee2',
  shopping_app: '92f10b875fbb3b60bbcc902a74c1f18ac71ebe02'
};
let un = {
  image_dithering_tool: 'This image dithering tool comes prebuilt with a classic monochrome UI, dithering support, and adjustable thresholds\u2014so you can create pixel art with ease.\n\nStart chatting to customize: you can add new dithering algorithms, expand the image controls, or completely redesign the interface.',
  synth_maker: 'This synth maker includes a full grid sequencer, tempo controls, and instrument toggles\u2014so you can jump right into composing loops or testing out patterns.\n\nStart chatting to customize: you can add more sound packs, layer in new effects, or completely redesign the interface.',
  glass_material_editor: 'This glass material editor lets you create customizable glass effects with support for backgrounds, distortion settings, and text overlays\u2014giving you a polished base to experiment with visual styles.\n\nStart chatting to customize: you can tweak properties, swap out components, or completely redesign the interface.',
  shopping_app: 'This shopping app comes with built-in item sorting, a cart flow, and a basic checkout experience\u2014so you have a solid starting point.\n\nStart chatting to customize: you can adjust the layout, swap out components, or add entirely new features.'
};
let ul = e => ({
  glass_material_editor: getI18nString('figmake.empty_state.template.glass_material_editor'),
  synth_maker: getI18nString('figmake.empty_state.template.synth_maker'),
  image_dithering_tool: getI18nString('figmake.empty_state.template.image_dithering_tool'),
  shopping_app: getI18nString('figmake.empty_state.template.shopping_app')
})[e];
let ua = (e, t) => {
  let i = t ? ui[e] : ut[e];
  return buildUploadUrl(i);
};
function us({
  requestClose: e,
  codeLibraryInstance: t
}) {
  return jsx(_$$tH, {
    boundaryKey: 'figmake.full_width_empty_state',
    fallback: jsx(Fragment, {}),
    team: _$$e2.ACTIVATION,
    children: jsx(_$$fu, {
      name: 'Make Full Width Empty State',
      children: jsx(ur, {
        requestClose: e,
        codeLibraryInstance: t
      })
    })
  });
}
function ur({
  requestClose: e,
  codeLibraryInstance: t
}) {
  let i = selectCurrentFile();
  let n = GQ();
  let {
    color
  } = _$$G4();
  let d = Xr(FX);
  let c = useDispatch();
  let p = Xr(EB);
  let {
    noDataLoaded
  } = Ig(JT.FIGMAKE);
  let m = async n => {
    if (i && t) {
      try {
        await UP(buildUploadUrl(`${ue[n]}.zip`), un[n], i.key, t);
        p(!0);
        i.name === getI18nString('fullscreen.fullscreen_view_selector.untitled') && c(Nw({
          file: {
            key: i.key
          },
          name: ul(n)
        }));
        analyticsEventManager.trackDefinedEvent('figmake.empty_state_template_inserted', {
          fileKey: i.key,
          templateName: n
        });
        handleAtomEvent({
          id: 'ai_for_production.chat_response_received'
        });
      } catch (e) {
        reportError(_$$e2.ACTIVATION, e, {
          extra: {
            template: n
          }
        });
      } finally {
        e();
      }
    }
  };
  if (useLayoutEffect(() => (d(!0), () => {
    d(!1);
  }), [d]), noDataLoaded) {
    return jsx(ud, {});
  }
  let h = color === 'dark';
  return jsxs('div', {
    className: 'xixxii4 x10a8y8t xh8yej3 x68eaa8 x8v75bx x78zum5 xl56j7k x1cy8zhl x1gcw5o8 x1pjxmj4 x6dyoi3',
    children: [jsx(cB, {}), jsx('div', {
      className: 'x10l6tqk x3m8u43 x3t71xm x17p55me xsdox4t x78zum5 x13a6bvl x1yjdb4r x3uc4y2',
      style: {
        width: `calc(100% - ${n}px)`,
        right: 0
      },
      children: jsx(_$$M, {})
    }), jsxs('div', {
      className: 'xdai5fg xh8yej3 x78zum5 xdt5ytf x6s0dn4 x1vjfegm xv2w18j x1xjkx7e',
      children: [jsx('h1', {
        ..._$$xk(uc.title),
        children: getI18nString('figmake.empty_state.prompt_title')
      }), jsx(c8, {
        chatMessagesNodeGuid: t?.guid ?? '',
        requestClose: e
      }), jsxs('div', {
        className: 'xx4vt8u xrvj5dj x5xkp29 x1rz4g7b x17rkj2b xl56j7k x1excjyp',
        children: [jsx(c7, {
          image: ua('glass_material_editor', h),
          title: getI18nString('figmake.empty_state.template.glass_material_editor'),
          onClick: () => m('glass_material_editor')
        }), jsx(c7, {
          image: ua('synth_maker', h),
          title: getI18nString('figmake.empty_state.template.synth_maker'),
          onClick: () => m('synth_maker')
        }), jsx(c7, {
          image: ua('image_dithering_tool', h),
          title: getI18nString('figmake.empty_state.template.image_dithering_tool'),
          onClick: () => m('image_dithering_tool')
        }), jsx(c7, {
          image: ua('shopping_app', h),
          title: getI18nString('figmake.empty_state.template.shopping_app'),
          onClick: () => m('shopping_app')
        })]
      })]
    })]
  });
}
function uo() {
  return jsxs('div', {
    children: [jsx('div', {
      ..._$$xk(uu.skeletonItem(215, 120, 8))
    }), jsx('div', {
      className: 'x1w4f5ud xp6roeo',
      children: jsx('div', {
        ..._$$xk(uu.skeletonItem(137, 16, 8))
      })
    }), jsx('div', {
      ..._$$xk(uu.skeletonItem(47, 16, 8))
    })]
  });
}
function ud() {
  let e = GQ();
  return jsxs('div', {
    className: 'xixxii4 x10a8y8t xh8yej3 x68eaa8 x8v75bx x78zum5 xl56j7k x1cy8zhl x1gcw5o8 x1pjxmj4 x6dyoi3',
    children: [jsx('div', {
      className: 'x1yjdb4r xh8yej3 x5yr21d x10l6tqk x10a8y8t x1pdr0v7 xdyg6lv'
    }), jsx('div', {
      className: 'x10l6tqk x3m8u43 x3t71xm x17p55me xsdox4t x78zum5 x13a6bvl x1yjdb4r x3uc4y2',
      style: {
        width: `calc(100% - ${e - 20}px)`,
        right: 0
      },
      children: jsx(_$$M, {})
    }), jsxs('div', {
      className: 'xdai5fg xh8yej3 x78zum5 xdt5ytf x6s0dn4 x1vjfegm xv2w18j x1xjkx7e',
      children: [jsx('h1', {
        ..._$$xk(uc.title),
        children: getI18nString('figmake.empty_state.prompt_title')
      }), jsxs('div', {
        className: 'x11i3ho8 xhjk10j x78zum5 xdt5ytf x1qughib x1qrh7qg x9h44rk x1bamp8i x1yjdb4r x9f619',
        children: [jsx('div', {
          ..._$$xk(uu.skeletonItem('60%', 16, 8))
        }), jsxs('div', {
          className: 'xgo1hui x78zum5 x1qughib x6s0dn4',
          children: [jsxs('div', {
            className: 'x78zum5 x1nfngrj',
            children: [jsx('div', {
              ..._$$xk(uu.skeletonItem(125, 32, 16))
            }), jsx('div', {
              ..._$$xk(uu.skeletonItem(121, 32, 16))
            })]
          }), jsx('div', {
            ..._$$xk(uu.skeletonItem(26, 26, 13))
          })]
        })]
      }), jsxs('div', {
        className: 'xx4vt8u xrvj5dj x5xkp29 x1rz4g7b x17rkj2b xl56j7k x1excjyp',
        children: [jsx(uo, {}), jsx(uo, {}), jsx(uo, {}), jsx(uo, {})]
      })]
    })]
  });
}
let uc = {
  title: {
    ..._$$g.textHeadingLarge,
    color: 'x1akne3o',
    marginBottom: 'x1buy44e',
    $$css: !0
  }
};
let uu = {
  skeletonItem: (e, t, i) => [{
    backgroundColor: 'x176lpz5',
    position: 'x1n2onr6',
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    animationName: 'xj75l1o',
    animationDuration: 'xmg6eyc',
    animationTimingFunction: 'xw1l40g',
    animationIterationCount: 'xa4qsjk',
    borderRadius: i == null ? null : 'x1kptayx',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    width: e == null ? null : 'x1bl4301',
    height: t == null ? null : 'x1f5funs',
    $$css: !0
  }, {
    '--borderRadius': (e => typeof e == 'number' ? `${e}px` : e != null ? e : void 0)(i),
    '--width': (e => typeof e == 'number' ? `${e}px` : e != null ? e : void 0)(e),
    '--height': (e => typeof e == 'number' ? `${e}px` : e != null ? e : void 0)(t)
  }]
};
function u_({
  steps: e,
  complete: t,
  isShowing: i,
  onStepChange: n
}) {
  let s = e.length;
  let {
    currentStep,
    next
  } = _$$A11({
    numSteps: s,
    onComplete: t
  });
  useEffect(() => {
    n && e[currentStep] && n(e[currentStep].stepId);
  }, [currentStep, n, e]);
  return jsx(_$$U4, {
    currentStep,
    isShowing: i,
    children: e.map((e, n) => {
      let {
        title,
        description,
        trackingContextName,
        ...c
      } = e;
      let p = n === s - 1;
      return jsx(_$$rq, {
        description,
        emphasized: !0,
        isShowing: i,
        onClose: t,
        onTargetLost: () => {
          next ? next() : t();
        },
        primaryCta: p ? {
          label: renderI18nText('general.done'),
          type: 'button',
          onClick: t,
          variantOverride: 'white',
          ctaTrackingDescriptor: _$$c8.DONE
        } : {
          label: renderI18nText('general.next'),
          type: 'button',
          onClick: next,
          variantOverride: 'white',
          ctaTrackingDescriptor: _$$c8.NEXT
        },
        stepCounter: {
          stepNum: n + 1,
          totalNumSteps: s
        },
        title,
        trackingContextName,
        ...c
      }, trackingContextName);
    })
  });
}
let ub = 'Figmake Existing File Fullscreen Onboarding';
function uy() {
  let e = useIsCurrentUserCreator();
  let {
    figmakeInFullscreen
  } = Ve();
  let {
    componentPreviewState
  } = _$$k5();
  let n = !!_$$f0('seen_figmake_new_file_onboarding');
  let s = !!_$$f0('seen_figmake_new_file_pre_generation_onboarding');
  let r = n || s;
  let o = !!_$$f0('seen_figmake_existing_files_editor_onboarding');
  let d = sY();
  let {
    isShowing,
    complete,
    show
  } = _$$e5({
    overlay: Htp,
    priority: _$$N5.OVERRIDING_MODAL
  });
  useEffect(() => {
    r || o || e || !figmakeInFullscreen || componentPreviewState !== _$$d3.LOADED || show();
  }, [r, e, figmakeInFullscreen, componentPreviewState, show, o]);
  let m = useMemo(() => function ({
    showMakeACopyStep: e
  }) {
    return [{
      stepId: 'welcome_to_figma_make',
      title: renderI18nText('figmake.onboarding.title.welcome_to_figma_make'),
      description: renderI18nText('figmake.onboarding.description.this_is_a_fully_interactive_app'),
      trackingContextName: ` ${ub} > Welcome to Figma Make`,
      targetKey: Xe,
      disableHighlight: !0,
      shouldHideArrow: !0,
      arrowPosition: F_.TOP,
      arrowPadding: 10,
      pointerOffsetOverride: 10
    }, e ? {
      stepId: 'make_a_copy',
      title: renderI18nText('figmake.onboarding.title.make_a_copy'),
      description: renderI18nText('figmake.onboarding.description.want_to_build_on_this_idea'),
      trackingContextName: ` ${ub} > Make a copy`,
      targetKey: _$$S$,
      arrowPosition: F_.TOP
    } : void 0, {
      stepId: 'share_and_invite',
      title: renderI18nText('figmake.onboarding.title.share_and_invite'),
      description: renderI18nText('figmake.onboarding.description.you_can_share_a_link_or_invite_others_via_email'),
      trackingContextName: ` ${ub} > Share and invite`,
      targetKey: _$$v9,
      arrowPosition: F_.TOP
    }].filter(e => e);
  }({
    showMakeACopyStep: d
  }), [d]);
  return isShowing ? jsx(_$$fu, {
    name: ub,
    children: jsx(u_, {
      steps: m,
      complete,
      isShowing
    })
  }) : null;
}
let uk = memo(({
  handleClosePanel: e
}) => {
  let t = useAtomWithSubscription($C);
  return getFeatureFlags().internal_only_debug_tools && t ? jsx(uw, {
    handleClosePanel: e
  }) : null;
});
let uw = _$$A12.createLazyComponent(() => Promise.all([]).then(_require2).then(e => e.FigmakeScopeViewInner), {
  componentName: 'FigmakeScopeViewInner',
  loading: () => null,
  error: () => null
});
let uC = setupRemovableAtomFamily(() => atom(!1));
function uT() {
  let e = Xr(uC);
  return !function () {
    let [e] = useAtomValueAndSetter(uC);
    let {
      figmakeInFullscreen
    } = Ve();
    return figmakeInFullscreen && !e;
  }() ? null : jsx('div', {
    className: 'xh8yej3 x1rfw5dq',
    children: jsxs(_$$Cs, {
      variant: 'warn',
      onDismiss: () => {
        e(!0);
      },
      children: [jsx(_$$Q5, {
        title: getI18nString('figmake.fullscreen_preview.unsafe_content_warning'),
        children: jsx(Fragment, {})
      }), jsx(_$$N7, {
        href: 'https://help.figma.com/hc/articles/31304412302231',
        newTab: !0,
        children: getI18nString('figmake.fullscreen_preview.unsafe_content_warning_learn_more')
      })]
    })
  });
}
let uE = 'Figmake Existing File Editor Onboarding';
function uN({
  chatMessagesNodeGuid: e
}) {
  let t = useIsCurrentUserCreator();
  let {
    figmakeInFullscreen
  } = Ve();
  let n = !!_$$_H2();
  let s = useAtomWithSubscription(_$$o2(e));
  let {
    componentPreviewState
  } = _$$k5();
  let d = !!_$$f0('seen_figmake_new_file_onboarding');
  let c = !!_$$f0('seen_figmake_new_file_pre_generation_onboarding');
  let p = !!_$$f0('seen_figmake_existing_files_fullscreen_onboarding');
  let x = d || c;
  let m = sY();
  let {
    isShowing,
    complete,
    show
  } = _$$e5({
    overlay: p2q,
    priority: _$$N5.OVERRIDING_MODAL
  });
  useEffect(() => {
    x || p || t || figmakeInFullscreen || s || componentPreviewState !== _$$d3.LOADED || show();
  }, [s, componentPreviewState, show, t, figmakeInFullscreen, x, p]);
  let _ = useMemo(() => function ({
    isViewOnly: e,
    showMakeACopyStep: t
  }) {
    let i = e ? {
      stepId: 'make_a_copy',
      title: renderI18nText('figmake.onboarding.title.make_a_copy'),
      description: renderI18nText('figmake.onboarding.description.want_to_build_on_this_idea'),
      trackingContextName: ` ${uE} > Make a copy`,
      targetKey: _$$S$,
      arrowPosition: F_.TOP
    } : {
      stepId: 'make_a_copy',
      title: renderI18nText('figmake.onboarding.title.make_a_copy'),
      description: renderI18nText('figmake.onboarding.description.want_to_build_on_this_idea_file_menu'),
      trackingContextName: ` ${uE} > Make a copy file menu`,
      targetKey: O0,
      arrowPosition: F_.TOP
    };
    return [{
      stepId: 'welcome_to_figma_make',
      title: renderI18nText('figmake.onboarding.title.welcome_to_figma_make'),
      description: renderI18nText('figmake.onboarding.description.this_is_a_fully_interactive_app'),
      trackingContextName: ` ${uE} > Welcome to Figma Make`,
      targetKey: $i,
      disableHighlight: !0,
      shouldHideArrow: !0,
      arrowPosition: F_.BOTTOM,
      shouldCenterArrow: EL.BEST_EFFORT
    }, t ? i : void 0, {
      stepId: 'play_around',
      title: renderI18nText('figmake.onboarding.title.play_around'),
      description: renderI18nText('figmake.onboarding.description.switch_to_full_screen'),
      trackingContextName: ` ${uE} > Play around`,
      targetKey: NR,
      arrowPosition: F_.TOP
    }, {
      stepId: 'share_and_invite',
      title: renderI18nText('figmake.onboarding.title.share_and_invite'),
      description: renderI18nText('figmake.onboarding.description.you_can_share_a_link_or_invite_others_via_email'),
      trackingContextName: ` ${uE} > Share and invite`,
      targetKey: _$$v9
    }].filter(e => e);
  }({
    isViewOnly: n,
    showMakeACopyStep: m
  }), [n, m]);
  return isShowing ? jsx(_$$fu, {
    name: uE,
    children: jsx(u_, {
      steps: _,
      complete,
      isShowing
    })
  }) : null;
}
let uA = 'Figmake New File Onboarding V2';
let uL = [{
  stepId: 'got_an_idea',
  title: renderI18nText('figmake.onboarding_v2.got_an_idea.title'),
  description: renderI18nText('figmake.onboarding_v2.got_an_idea.description'),
  trackingContextName: ` ${uA} > Got an idea`,
  targetKey: _$$HB,
  disableHighlight: !0,
  arrowPosition: F_.BOTTOM
}, {
  stepId: 'not_sure_what_to_make',
  title: renderI18nText('figmake.onboarding_v2.not_sure_what_to_make.title'),
  description: renderI18nText('figmake.onboarding_v2.not_sure_what_to_make.description'),
  trackingContextName: ` ${uA} > Not sure what to make`,
  targetKey: OU,
  disableHighlight: !0,
  arrowPosition: F_.LEFT_TITLE
}];
let uP = [{
  stepId: 'point_and_edit',
  title: renderI18nText('figmake.onboarding_v2.point_and_edit.title'),
  description: renderI18nText('figmake.onboarding_v2.point_and_edit.description'),
  trackingContextName: ` ${uA} > Point and edit`,
  targetKey: _$$kx,
  arrowPosition: F_.TOP
}, {
  stepId: 'guide_with_visuals',
  title: renderI18nText('figmake.onboarding_v2.guide_with_visuals.title'),
  description: renderI18nText('figmake.onboarding_v2.guide_with_visuals.description'),
  trackingContextName: ` ${uA} > Guide with visuals`,
  targetKey: _$$wj
}, {
  stepId: 'reference_your_own_styles',
  title: renderI18nText('figmake.onboarding_v2.reference_your_own_styles.title'),
  description: renderI18nText('figmake.onboarding_v2.reference_your_own_styles.description'),
  trackingContextName: ` ${uA} > Reference your own styles`,
  targetKey: _$$t$
}, {
  stepId: 'put_it_on_the_web',
  title: renderI18nText('figmake.onboarding_v2.put_it_on_the_web.title'),
  description: renderI18nText('figmake.onboarding_v2.put_it_on_the_web.description'),
  trackingContextName: ` ${uA} > Put it on the web`,
  targetKey: _$$eq
}];
function uO() {
  let {
    isShowing,
    complete,
    show,
    uniqueId
  } = _$$e5({
    overlay: Bd,
    priority: _$$N5.OVERRIDING_MODAL
  });
  let s = _$$f0('seen_figmake_new_file_post_generation_onboarding');
  return (_$$E8(uniqueId, 'ai_for_production.chat_message_sent', () => {
    complete();
  }), useEffect(() => {
    s || show();
  }, [show, s]), isShowing) ? jsx(_$$fu, {
    name: uA,
    children: jsx(u_, {
      steps: uL,
      complete,
      isShowing
    })
  }) : null;
}
function uF({
  chatMessagesNodeGuid: e
}) {
  let t = getFeatureFlags().bake_publish_flow;
  let [i, n] = useState(!1);
  let s = useAtomWithSubscription(_$$o2(e));
  let {
    componentPreviewState
  } = _$$k5();
  let [d, c] = useState(null);
  let {
    isShowing,
    complete,
    show,
    uniqueId
  } = _$$e5({
    overlay: KYV,
    priority: _$$N5.OVERRIDING_MODAL
  });
  return (_$$E8(uniqueId, 'ai_for_production.chat_response_received', () => n(!0)), useEffect(() => {
    t && d === 'put_it_on_the_web' && handleAtomEvent({
      id: _$$hj
    });
  }, [d, t]), useEffect(() => {
    i && !s && componentPreviewState === _$$d3.LOADED && show();
  }, [i, s, componentPreviewState, show]), isShowing) ? jsx(_$$fu, {
    name: uA,
    children: jsx(u_, {
      steps: uP,
      complete() {
        complete();
        handleAtomEvent({
          id: 'make_onboarding_completed'
        });
      },
      isShowing,
      onStepChange: c
    })
  }) : null;
}
function uM() {
  let {
    isShowing,
    complete,
    show,
    uniqueId
  } = _$$e5({
    overlay: bbp,
    priority: _$$N5.OVERRIDING_MODAL
  });
  let s = useRef(null);
  let r = useRef(!1);
  return (_$$E8(uniqueId, 'make_onboarding_completed', () => {
    r.current || (s.current = setTimeout(() => {
      show();
    }, 3e4));
  }), _$$E8(uniqueId, 'ai_for_production.chat_message_sent', () => {
    r.current = !0;
    s.current && clearTimeout(s.current);
  }), useEffect(() => {
    let e = () => {
      s.current && clearTimeout(s.current);
    };
    window.addEventListener('keydown', e);
    return () => {
      window.removeEventListener('keydown', e);
      e();
    };
  }, []), isShowing) ? jsx(_$$fu, {
    name: uA,
    children: jsx(_$$rq, {
      description: renderI18nText('figmake.onboarding_v2.give_it_a_try.description'),
      disableHighlight: !0,
      emphasized: !0,
      isShowing,
      onClose: complete,
      onTargetLost: () => {
        complete();
      },
      primaryCta: {
        label: renderI18nText('general.done'),
        type: 'button',
        onClick: complete,
        variantOverride: 'white',
        ctaTrackingDescriptor: _$$c8.DONE
      },
      targetKey: _$$HB,
      title: renderI18nText('figmake.onboarding_v2.give_it_a_try.title'),
      trackingContextName: 'Try it out'
    })
  }) : null;
}
function uD({
  chatMessagesNodeGuid: e
}) {
  let t = useIsCurrentUserCreator();
  let {
    figmakeInFullscreen
  } = Ve();
  let n = _$$ry();
  let a = _$$f0('seen_figmake_new_file_onboarding');
  let s = useAtomWithSubscription(FX);
  return figmakeInFullscreen || n || !t || a ? null : jsxs(Fragment, {
    children: [!s && jsx(uO, {}), jsx(uF, {
      chatMessagesNodeGuid: e
    }), jsx(uM, {})]
  });
}
let uB = 'Send to Make From Design Onboarding Overlay';
let u$ = {
  stepId: 'bring_frame_to_life',
  title: renderI18nText('figmake.onboarding_v2.bring_frame_to_life.title'),
  description: renderI18nText('figmake.onboarding_v2.bring_frame_to_life.description_v2'),
  trackingContextName: ` ${uB} > Bring frame to life`,
  targetKey: _$$HB,
  disableHighlight: !0,
  arrowPosition: F_.BOTTOM
};
function uU() {
  let e = _$$ry();
  let t = _$$f0('seen_figmake_send_to_make_onboarding');
  let i = useAtomWithSubscription(_$$aQ);
  let {
    isShowing,
    complete,
    show,
    uniqueId
  } = _$$e5({
    overlay: BZN,
    priority: _$$N5.OVERRIDING_MODAL
  });
  let c = useCallback(() => {
    show({
      canShow: () => !e && !t && i
    });
  }, [show, e, t, i]);
  if (_$$E8(uniqueId, 'ai_for_production.chat_message_sent', () => {
    complete();
  }), useEffect(() => {
    c();
  }, [c]), !isShowing) {
    return null;
  }
  let {
    trackingContextName
  } = u$;
  return jsx(_$$fu, {
    name: uB,
    children: jsx(_$$J, {
      mode: 'light',
      children: jsx(_$$rq, {
        ...u$,
        emphasized: !0,
        onClose: complete,
        isShowing,
        onTargetLost: () => complete()
      })
    }, trackingContextName)
  });
}
let uH = {
  previewTabContentVisible: {
    display: 'x1lliihq',
    width: 'xh8yej3',
    height: 'x5yr21d',
    $$css: !0
  },
  previewTabContentHidden: {
    display: 'x1s85apg',
    $$css: !0
  }
};
function uq() {
  let e = selectCurrentFile();
  let t = !!(e && e.key && e.name);
  let i = _$$aV();
  let n = _$$h4();
  _$$Si(e);
  let a = _$$em({
    logExposure: !1
  });
  return !t && (!e || e.canEdit) && a() ? jsx(ud, {}) : !t || i ? jsx(uG, {}) : n ? jsxs(uV, {
    children: [jsx(s1, {}), jsx(cT, {})]
  }) : jsx(uX, {});
}
function uX() {
  let {
    figmakeInFullscreen
  } = Ve();
  let {
    entryPointCodeInstance,
    selectedCodeFileNode,
    codeLibraryInstance
  } = _$$oA2();
  let {
    exchange
  } = $W(codeLibraryInstance?.guid);
  let d = Gu();
  let c = d && !!exchange?.messages?.length;
  let {
    showFullWidthEmptyState,
    requestClose
  } = Lh(d && !c, codeLibraryInstance);
  _$$pO2();
  _$$c$3();
  let x = useRef(d);
  x.current ||= d;
  let m = x.current;
  let [h, g] = useAtomValueAndSetter(_$$jx);
  let [f, _] = useAtomValueAndSetter($C);
  let {
    onBuild,
    onError
  } = function (e, t) {
    let i = useAtomWithSubscription(Nm(e?.guid || ''));
    let n = _$$E4(e);
    let l = useCurrentFileKey();
    let s = function (e) {
      let t = _$$E4(e);
      if (!t) return null;
      for (let e = t.length - 1; e >= 0; e--) {
        let i = t[e];
        if (i?.type === ChatMessageType.USER_MESSAGE) return i;
      }
      return null;
    }(e);
    let d = n?.filter(e => e.type === ChatMessageType.USER_MESSAGE).length;
    return {
      onBuild: useCallback(() => {
        if (i !== 'assistant' || void 0 === d || !l || !s || !e?.guid) return;
        let n = ni(l, e, s);
        analyticsEventManager.trackDefinedEvent('ai_for_production.llm_generation_built', {
          generationIndex: d,
          featureType: t,
          fileKey: l,
          ...n
        });
      }, [i, d, l, s, e, t]),
      onError: useCallback((n, a) => {
        if (i !== 'assistant' || void 0 === d || !l || !s || !e?.guid) return;
        let r = ni(l, e, s);
        analyticsEventManager.trackDefinedEvent('ai_for_production.llm_generation_error', {
          phase: a,
          generationIndex: d,
          featureType: t,
          ...r
        });
        getFeatureFlags().bake_log_generation_errors && _$$Ay2.shared.generationErrorLog({
          error: n.message.slice(0, 1e3),
          clientLifecycleId: r.clientLifecycleId,
          requestUuid: r.requestUuid ?? '',
          phase: a,
          generationIndex: d,
          featureType: t
        }, {
          ..._$$Ay3(),
          persistentEntityId: r.persistentEntityId,
          clientLifecycleId: r.clientLifecycleId
        });
      }, [i, d, l, s, e, t])
    };
  }(codeLibraryInstance, _$$lV.FIGMAKE);
  let {
    triggerSelfHeal
  } = _$$u2({
    chatMessagesNode: codeLibraryInstance,
    disabled: !getFeatureFlags().bake_auto_error_fix,
    featureType: _$$lV.FIGMAKE
  });
  let j = useCallback((e, t, i, l) => {
    onError(e, t);
    codeLibraryInstance && triggerSelfHeal(codeLibraryInstance, i, l);
  }, [triggerSelfHeal, onError, codeLibraryInstance]);
  let k = useCallback(() => {
    g(Ic.CODE);
  }, [g]);
  _$$sl(k);
  let w = useAtomWithSubscription(_$$TJ);
  let S = entryPointCodeInstance ? w[entryPointCodeInstance.guid] ?? entryPointCodeInstance.guid : null;
  let C = _$$vD(S);
  let T = selectCurrentFile();
  let I = useAtomWithSubscription(_$$o2(codeLibraryInstance?.guid || ''));
  let E = _$$d7(T?.key ?? null, _$$lV.FIGMAKE);
  if (!T || !entryPointCodeInstance) return jsx(uG, {});
  let N = figmakeInFullscreen ? Ic.PREVIEW : h;
  return jsxs(uV, {
    children: [jsx(uT, {}), jsxs(_$$p3, {
      children: [jsx(NuxOnboardingOverlay, {
        entryPoint: _$$C3.FigMake
      }), jsx(_$$ev, {}), jsx(nD, {})]
    }), jsx(_$$p3, {
      children: m && jsx(uD, {
        chatMessagesNodeGuid: entryPointCodeInstance.guid
      })
    }), jsx(_$$p3, {
      children: jsx(uU, {})
    }), jsxs(_$$p3, {
      children: [jsx(uN, {
        chatMessagesNodeGuid: entryPointCodeInstance.guid
      }), jsx(uy, {})]
    }), jsx(_$$p3, {
      children: jsx(nI, {})
    }), jsx(s5, {
      selectedTab: h,
      setSelectedTab: g,
      figmakeInFullscreen: !!figmakeInFullscreen,
      codeInstanceNodeToRender: C
    }), N === 'preview' && jsx(Yd, {}), jsx('div', {
      className: 'x78zum5 xb3r6kr xh8yej3 x98rzlu x2lwn1j x1qjc9v5',
      children: jsxs(YZ, {
        direction: 'vertical',
        autoSaveId: 'figmake-figmascope-panels',
        children: [jsxs(Zk, {
          defaultSize: 60,
          minSize: 30,
          children: [jsxs('div', {
            ..._$$Ay.props(N === 'preview' ? uH.previewTabContentVisible : uH.previewTabContentHidden),
            children: [I ? jsx('div', {
              className: 'x78zum5 x6s0dn4 xl56j7k x5yr21d xh8yej3',
              children: jsx(_$$Ay6, {
                frozenPhase: 'fixingErrors'
              })
            }) : c ? jsx('div', {
              className: 'x78zum5 x6s0dn4 xl56j7k x5yr21d xh8yej3',
              children: jsx(_$$Ay6, {})
            }) : d ? jsx('div', {
              className: 'x78zum5 x6s0dn4 xl56j7k x5yr21d xh8yej3',
              children: jsx(_$$p9, {})
            }) : void 0, jsx(uY, {
              codeInstanceNodeToRender: C,
              chatNodeId: codeLibraryInstance?.guid ?? null,
              isVisible: N === 'preview',
              sandbox: E,
              onError: j,
              onBuild
            })]
          }), N === 'code' && jsx(uJ, {
            selectedCodeFileNode,
            nodeWithChatMessages: codeLibraryInstance
          })]
        }), f && jsxs(Fragment, {
          children: [jsx(_$$TW, {
            className: 'xjm9jq1 xbpqucl'
          }), jsx(Zk, {
            defaultSize: 40,
            minSize: 30,
            children: jsx(uk, {
              handleClosePanel: () => _(!1)
            })
          })]
        })]
      })
    }), jsx('div', {
      'className': 'x1n2onr6 x1wb5xmz',
      'data-onboarding-key': $i
    }), jsx(_$$_3, {
      showPropertiesTab: !1
    }), showFullWidthEmptyState && jsx(us, {
      codeLibraryInstance,
      requestClose
    })]
  });
}
function uV({
  children: e
}) {
  let t = _$$mg2();
  let i = GQ();
  let n = _$$_o();
  return jsx('div', {
    'className': Dm,
    'data-testid': 'figmake-full-view',
    'children': jsx('div', {
      className: 'x9f619 x10l6tqk x78zum5 x1qjc9v5 x1szn6h9 x13vifvy xu96u03 x3m8u43 x1ey2m1c x1yjdb4r',
      style: {
        left: t ? i : 0,
        top: n
      },
      children: jsx('div', {
        className: 'x1yjdb4r x98rzlu xof1wgs x78zum5 xdt5ytf xb3r6kr x1n2onr6',
        children: e
      })
    })
  });
}
function uG() {
  return jsxs(uV, {
    children: [jsx(s1, {}), jsx('div', {
      className: 'x78zum5 xb3r6kr xh8yej3 x98rzlu x2lwn1j x1qjc9v5',
      children: jsx(nr, {})
    })]
  });
}
function uW({
  message: e
}) {
  let t = selectCurrentFile();
  let {
    codeLibraryInstance
  } = _$$oA2();
  let [n, s] = useState(!0);
  let r = useAtomWithSubscription(_$$mC(codeLibraryInstance?.guid ?? ''));
  let d = Pd(t?.key ?? '', codeLibraryInstance?.guid ?? '', e.id);
  let {
    feedbackState,
    setFeedbackState,
    sentimentFeedbackCallback,
    additionalFeedbackCallback,
    productType
  } = _$$q3({
    persistentEntityId: _$$qE(t?.key ?? '', codeLibraryInstance?.guid ?? ''),
    clientLifecycleId: d
  }, t?.key ?? null, _$$lV.FIGMAKE, e.id, codeLibraryInstance?.guid);
  let g = useCallback(async (e, t) => {
    await sentimentFeedbackCallback(e, t);
    s(!1);
  }, [sentimentFeedbackCallback]);
  return !n || r ? null : jsxs('div', {
    className: 'x10l6tqk xwajptj x1nrll8i xuuh30 x13o0s5z x1yjdb4r xe8ttls x9h44rk x1kpx6y5 xfo81ep x78zum5 x1q0g3np x6s0dn4 x1qughib x1v2ro7d',
    children: [jsxs('div', {
      className: 'x78zum5 x1q0g3np x6s0dn4 x167g77z',
      children: [jsx(_$$g2, {
        className: 'xoqga94 x1iog12x'
      }), jsx(_$$T3, {
        role: 'alert',
        className: 'x1g2dr8m xiqqdae xkezfkh x1giz659 x14kxzw3',
        children: getI18nString('figmake.feedback_modal.title')
      })]
    }), jsxs('div', {
      className: 'x78zum5 x1q0g3np x6s0dn4 x167g77z',
      children: [jsx('div', {
        className: 'xet2fuk x78zum5 x6s0dn4 x1v2ro7d',
        children: jsx(_$$z3, {
          aiTrackingContext: {
            action: JT.CODE_CHAT,
            source: _$$lV.FIGMAKE,
            clientLifecycleId: d,
            quick_actions_session_id: null,
            file_key: t?.key ?? null,
            product_type: productType
          },
          sentimentFeedbackCallback: g,
          additionalFeedbackCallback,
          hideInitialText: !0,
          externalFeedbackState: feedbackState,
          setExternalFeedbackState: setFeedbackState,
          thumbsUpLabel: getI18nString('figmake.chat.thumbs_up'),
          thumbsDownLabel: getI18nString('figmake.chat.thumbs_down')
        })
      }), jsx('div', {
        className: 'xtc4nxu x1ydjwli',
        children: jsx(_$$K2, {
          'onClick': () => s(!1),
          'aria-label': getI18nString('general.close'),
          'children': jsx(_$$A7, {})
        })
      })]
    })]
  });
}
function uY({
  codeInstanceNodeToRender: e,
  chatNodeId: t,
  isVisible: i,
  sandbox: n,
  onError: s,
  onBuild: o
}) {
  let {
    codeLibraryInstance
  } = _$$oA2();
  let c = _$$E4(codeLibraryInstance);
  let {
    exchange
  } = $W(codeLibraryInstance?.guid);
  let p = _$$rh(e);
  let x = c?.filter(e => e.type === ChatMessageType.USER_MESSAGE && !H5(e.textContent).hidden);
  let m = c?.[c.length - 1];
  let h = m?.type === ChatMessageType.ASSISTANT_MESSAGE && m.toolCalls.some(e => AD.includes(e.toolName));
  let g = x?.length === 1 && !exchange?.messages.length && !h;
  let f = useMemo(() => jsx(_$$m2, {
    chatNodeId: t,
    codeSelectionToRender: p,
    isVisible: i,
    jsxDev: !0,
    onBuild: o,
    onError: s,
    sandbox: n,
    showToolbar: !1
  }), [p, i, t, n, s, o]);
  return p ? jsxs('div', {
    className: 'x1n2onr6 xh8yej3 x5yr21d xb3r6kr x98rzlu',
    children: [jsx(nb, {
      children: jsx('div', {
        className: 'x10l6tqk x13vifvy xu96u03 x3m8u43 x1ey2m1c x78zum5 x6s0dn4 xl56j7k x1yjdb4r',
        children: f
      })
    }), g && jsx(uW, {
      message: x[x.length - 1]
    })]
  }) : null;
}
function uJ({
  nodeWithChatMessages: e,
  selectedCodeFileNode: t
}) {
  let i = selectCurrentFile();
  let [n, s] = useState(!1);
  let [r, o] = useState(!1);
  let d = _$$Y();
  let c = _$$k6();
  let u = useCallback(() => {
    UK('DOWNLOAD_CODE_BUTTON');
    d({
      origin: 'figma_make_download_code_button',
      formState: qB.SIGN_IN
    });
  }, [d]);
  let p = useCallback(async () => {
    o(!0);
    let e = {};
    let n = {};
    try {
      if (getFeatureFlags().make_download && t) {
        let l = i?.key ? _$$jN({
          file: {
            key: i.key,
            name: i.name
          }
        }) : null;
        let a = await cO(t, i?.name ?? 'code', l);
        e = a.codeFiles;
        n = a.assetFiles;
      } else {
        let t = Hg(_$$nc);
        for (let [i, n] of Object.entries(t)) {
          let t = cP(i);
          t || (t = n.name);
          e[t] = n.sourceCode;
        }
      }
      let l = await _$$v3();
      let a = new l.ZipWriter(new l.BlobWriter('application/zip'));
      for (let [t, i] of Object.entries(e)) await a.add(t, new l.TextReader(i));
      for (let [e, t] of Object.entries(n)) {
        await a.add(e, new l.BlobReader(new Blob([t], {
          type: 'application/octet-stream'
        })));
      }
      let s = await a.close();
      let r = URL.createObjectURL(s);
      let o = document.createElement('a');
      o.href = r;
      o.download = `${i?.name ?? 'code'}.zip`;
      document.body.appendChild(o);
      o.click();
      document.body.removeChild(o);
      URL.revokeObjectURL(r);
    } catch (e) {
      console.error('Failed to download code files:', e);
    } finally {
      o(!1);
    }
  }, [i?.name, i?.key, t]);
  let x = c ? u : p;
  let m = useMemo(() => jsx(_$$R2, {
    codeFile: t,
    nodeWithChatMessages: e,
    fullHeight: !0,
    downloadCode: x,
    isDownloadProcessing: r
  }, t?.guid), [t, e, x, r]);
  return jsx('div', {
    className: 'x78zum5 xb3r6kr x5yr21d x98rzlu x2lwn1j x1yjdb4r',
    children: jsxs(YZ, {
      direction: 'horizontal',
      autoSaveId: 'figmake-file-view-panels',
      children: [jsx(Zk, {
        defaultSize: 20,
        minSize: 10,
        children: jsx(_$$S, {
          selectedCodeFileNode: t,
          nodeWithChatMessages: e
        })
      }), jsx(_$$TW, {
        onDragging: e => {
          s(e);
        },
        className: 'x1i1rx1s xbpqucl'
      }), jsx(Zk, {
        defaultSize: 80,
        style: {
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        },
        children: jsx('div', {
          className: 'x1n2onr6 x98rzlu xysyzu8 x78zum5 xdt5ytf x5yr21d',
          style: n ? {
            pointerEvents: 'none'
          } : void 0,
          children: m
        })
      })]
    })
  });
}
async function u5({
  fileKey: e,
  selectedNodeId: t
}) {
  let i = [t];
  let n = await _$$R7({
    fileKey: e,
    selectedGuids: i
  });
  Fullscreen?.applyNodesFromBuffer(n, e, i, !1);
}
function u2(e) {
  let t = getSingletonSceneGraph();
  let i = t.getCurrentPage();
  debug(!!i, 'currentPage invalid.');
  let n = i.defaultResponsiveSetId;
  debug(!!n, 'existingDefaultResponsiveSetId invalid.');
  i.setSelectionToSingleNode(e);
  fullscreenValue.triggerActionEnum(Command.SET_AS_DEFAULT_RESPONSIVE_SET);
  let l = t.get(n);
  debug(!!l, 'existingDefaultResponsiveSet not found.');
  l.removeSelfAndChildren();
}
let u3 = atom(!1);
function pr({
  codeLibraryNode: e,
  isResizingPanel: t,
  codeInstanceGuid: i
}) {
  let n = selectCurrentUser();
  let r = useCurrentFileKey();
  let d = useAtomWithSubscription(EB);
  zA();
  _$$m5();
  (function (e) {
    let t = useDispatch();
    let i = selectCurrentFile();
    let n = i?.key;
    let [l] = useAtomValueAndSetter(_$$n6);
    let r = e.chatMessagesNode || null;
    let d = _$$H2(r);
    let c = d && d.length === 0;
    useEffect(() => {
      let e = getI18nString('fullscreen.fullscreen_view_selector.untitled');
      i && n && l && i.name === e && c && t(Nw({
        file: {
          key: n
        },
        name: l
      }));
    }, [i, n, l, t, c]);
  })({
    chatMessagesNode: e
  });
  let c = e?.guid ?? '';
  let p = useMemo(() => jsx(_$$d8, {
    nodeGuid: c
  }), [c]);
  let x = Xr(_$$mC(c));
  let m = Xu();
  let {
    changedFiles
  } = _$$E3(e, _$$lV.FIGMAKE, {
    shouldIncludeFile: e => e !== _$$e0
  });
  let g = _$$P4();
  return jsx(Fragment, {
    children: jsx('div', {
      className: 'x78zum5 xdt5ytf xh8yej3 x5yr21d xdyg6lv x1gslohp',
      children: jsx('div', {
        className: 'x98rzlu',
        children: jsx(_$$U2, {
          chatMessagesNode: e,
          chatMessagesNodeGuid: e?.guid ?? '',
          codeInstanceGuid: i,
          emptyState: p,
          enableAssetImport: getFeatureFlags().bake_import,
          enableDragUpload: !0,
          enableDsImport: getFeatureFlags().bake_ds_import_plan_enabled,
          enableImageAttachment: !0,
          featureType: _$$lV.FIGMAKE,
          isResizingPanel: t,
          onChatInputFocus: () => {
            d && analyticsEventManager.trackDefinedEvent('figmake.input_focus_after_empty_state_template_inserted', {
              fileKey: r ?? ''
            });
          },
          sendMessage: (t, i) => {
            let l = t.plainText;
            l || (l = t.hidden ? '' : atomStoreManager.get(_$$mC(c)));
            let a = {
              ...t,
              plainText: l
            };
            x('');
            return Oz({
              featureType: _$$lV.FIGMAKE,
              userMessageContent: a,
              rawUserChatDetails: i,
              user: n,
              chatMessagesNode: e,
              setInput: x,
              fileKey: r,
              autoFixingUserMessageId: null,
              canUseSupabase: m,
              changedFiles,
              model: g
            });
          },
          setInput: x,
          showCodeStreaming: !0,
          showCopyButton: !0
        })
      })
    })
  });
}
function po({
  isResizingPanel: e
}) {
  let t = selectCurrentFile();
  let {
    codeLibraryInstance,
    entryPointCodeInstance
  } = _$$oA2();
  return _$$h4() ? jsx(cE, {}) : jsxs(_$$A13, {
    isFullHeight: !0,
    children: [t && jsx(QU, {
      fileKey: t.key
    }), jsx(pr, {
      codeLibraryNode: codeLibraryInstance,
      codeInstanceGuid: entryPointCodeInstance?.guid ?? null,
      isResizingPanel: e
    })]
  });
}
function pp() {
  let e = _$$aV();
  let t = useSelector(e => e.mirror.appModel.showUi);
  let i = useAtomWithSubscription(FX);
  return !e && t ? jsx(_$$_7, {
    isCollapsed: !1,
    children: jsxs('div', {
      className: 'x78zum5 x1nfngrj x6s0dn4 xh8yej3 xeuugli',
      children: [jsx(_$$xG, {}), jsx('div', {
        className: 'xeuugli x1iyjqo2',
        children: jsx(_$$x$, {
          recordingKey: Fp
        })
      }), jsxs('div', {
        className: 'x78zum5 x6s0dn4 x2lah0s x8x9d4c x1nfngrj',
        children: [jsx(_$$n7, {}), jsx(_$$En, {}), !i && jsx(_$$M, {})]
      })]
    })
  }) : null;
}
let px = memo(() => {
  _$$bi();
  let {
    figmakeInFullscreen
  } = Ve();
  let [t, i] = useState(!1);
  return figmakeInFullscreen ? null : jsx('div', {
    className: 'x10l6tqk x13vifvy x1ey2m1c',
    children: jsx(_$$Q6, {
      children: jsxs(_$$$2, {
        defaultWidth: 368,
        onDragStart: () => i(!0),
        onDragEnd: () => i(!1),
        children: [jsx(pp, {}), jsx(_$$n5, {}), jsx(po, {
          isResizingPanel: t
        })]
      })
    })
  });
});
setupRemovableAtomFamily(() => atom(0));
var pf = (e => (e[e.EDIT = 0] = 'EDIT', e[e.CONNECT = 1] = 'CONNECT', e))(pf || {});
let p_ = setupRemovableAtomFamily(() => atom(0));
let pb = setupRemovableAtomFamily(() => atom(!1));
let pv = new _$$b({
  name: 'dakota',
  dependencies: [],
  exports: {
    './cms_node_utils': './cms_node_utils.ts',
    './binding': './binding/**/*',
    './data': './data/**/*',
    './data_layer': './data_layer/**/*',
    './preview': './preview/**/*',
    './types': './types.ts',
    './utils': './utils/**/*',
    './views': './views/**/*'
  },
  sideEffects: !1,
  friendFiles: [],
  eslint: {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
});
function pk(e, t) {
  let i = new Set(e);
  i.$$delete(t);
  return i;
}
let pw = registerModal(e => {
  let t = useModalManager(e);
  let i = (() => {
    switch (e.type) {
      case 'item':
        return getI18nString('dakota.table_view.deletion_modal.delete_item_title');
      case 'items':
        return getI18nString('dakota.table_view.deletion_modal.delete_items_title');
      case 'collection':
        return getI18nString('dakota.table_view.deletion_modal.delete_collection_title');
      default:
        throwTypeError(e.type);
    }
  })();
  let n = (() => {
    switch (e.type) {
      case 'item':
        return getI18nString('dakota.table_view.deletion_modal.delete_item_body');
      case 'items':
        return getI18nString('dakota.table_view.deletion_modal.delete_items_body');
      case 'collection':
        return getI18nString('dakota.table_view.deletion_modal.delete_collection_body');
      default:
        throwTypeError(e.type);
    }
  })();
  return jsx(ModalRootComponent, {
    manager: t,
    width: 'lg',
    children: jsxs(_$$vo, {
      children: [jsx(Y9, {
        children: jsx(_$$hE, {
          children: i
        })
      }), jsx(_$$nB, {
        children: n
      }), jsx(_$$wi, {
        children: jsxs(_$$jk, {
          children: [jsx(Button, {
            variant: 'secondary',
            onClick: e.onClose,
            children: getI18nString('dakota.table_view.deletion_modal.cancel')
          }), jsx(Button, {
            variant: 'destructive',
            onClick: () => {
              e.deleteRecordOrRecords();
              e.onClose();
            },
            children: getI18nString('dakota.table_view.deletion_modal.delete')
          })]
        })
      })]
    })
  });
});
var pS = (e => (e.ITEM = 'item', e.ITEMS = 'items', e.COLLECTION = 'collection', e))(pS || {});
let pC = createRemovableAtomFamily(() => atom(new Set()));
let pT = createRemovableAtomFamily(() => atom({}));
let pI = createRemovableAtomFamily(() => atom({}));
let pE = createRemovableAtomFamily(() => atom(void 0));
function pL(e, t, i) {
  let n = useAtomWithSubscription(_$$iO);
  let l = i ?? n;
  let s = useAtomWithSubscription(_$$ou);
  let [r, d] = useAtomValueAndSetter(_$$Mj(l + (t || '')));
  let [c, u] = useState('');
  let p = l && s.has(l);
  let x = useRef();
  useEffect(() => {
    if (!p || r === 'DONE' || !e) {
      u(e ?? '');
      return;
    }
    if (!r) {
      d(Date.now());
      return;
    }
    let t = () => {
      let i = Math.min(Math.floor((Date.now() - r) / 25), e.length);
      u(e.substring(0, i));
      i < e.length ? x.current = requestAnimationFrame(t) : (x.current = void 0, d('DONE'));
    };
    x.current = requestAnimationFrame(t);
    return () => {
      x.current && cancelAnimationFrame(x.current);
    };
  }, [r, d, e, p]);
  return c;
}
let pz = [CodeNode, LinkNode, ListNode, ListItemNode, HeadingNode, QuoteNode, AutoLinkNode, LinkNode, K1];
let p7 = e => new Promise((t, i) => {
  let n = new Image();
  n.onload = () => {
    t({
      height: n.height,
      width: n.width,
      src: n.src
    });
  };
  n.onerror = i;
  n.src = URL.createObjectURL(e);
});
function p9(e) {
  if (!e) return;
  let t = Array.from(e);
  if (t.length === 1) return t?.[0];
}
async function xe(e, t, i) {
  let {
    cmsImage
  } = await xi(t, e);
  let l = cmsImage.image;
  let a = (await Mj([l], {
    type: 'figFile',
    fileKey: i ?? ''
  })).s3_urls[l];
  if (!a) throw new Error(`Failed to resolve image URL for sha: ${l}`);
  return {
    cmsImage,
    signedImageUrl: a
  };
}
let xt = e => e.arrayBuffer();
async function xi(e, t) {
  let i = new Uint8Array(await xt(t));
  let n = sha1Hex(i);
  await _$$x4({
    collection: e,
    contentType: t.type,
    imageBytes: i,
    sha1: n
  });
  let {
    height,
    width,
    src
  } = await p7(t);
  return {
    cmsImage: {
      image: n,
      imageThumbnail: n,
      originalImageHeight: height,
      originalImageWidth: width,
      altText: '',
      fileName: t.name
    },
    objectUrlSrc: src
  };
}
function xn() {
  return jsx('div', {
    className: 'toolbar_plugin--divider--93LfM'
  });
}
let xl = createCommand('INSERT_IMAGE_COMMAND');
function xa({
  onBlur: e,
  collection: t
}) {
  let i = useCurrentFileKey();
  let [n] = useLexicalComposerContext();
  let s = useRef(null);
  let r = useRef(null);
  let [o, d] = useState(!1);
  let [c, p] = useState(!1);
  let [x, m] = useState(!1);
  let [h, g] = useState(!1);
  let [f, _] = useState('paragraph');
  let b = useRef(null);
  let y = useCallback(() => {
    if (!n || !e) return;
    let t = n.getEditorState();
    let i = JSON.stringify(t);
    t.read(() => {
      e(i, $nodesOfType(K1).map(e => e.exportAsAssetForPublish()));
    });
  }, [n, e]);
  let v = useCallback(() => {
    let e = $getSelection();
    if ($isRangeSelection(e)) {
      d(e.hasFormat('bold'));
      p(e.hasFormat('italic'));
      m(e.hasFormat('underline'));
      g(e.hasFormat('strikethrough'));
      let t = e.anchor.getNode();
      let i = t.getKey() === 'root' ? t : $findMatchingParent(t, e => {
        let t = e.getParent();
        return t !== null && $isRootOrShadowRoot(t);
      });
      (i === null && (i = t.getTopLevelElementOrThrow()), $isHeadingNode(i)) ? _(i.getTag()) : (i.getType(), _('paragraph'));
    }
  }, []);
  useEffect(() => mergeRegister(n.registerUpdateListener(({
    editorState: e
  }) => {
    e.read(() => {
      v();
    });
  }), n.registerCommand(SELECTION_CHANGE_COMMAND, (e, t) => (v(), !1), 1), n.registerCommand(BLUR_COMMAND, e => !(s?.current && s.current.contains(e.relatedTarget) || r?.current && r.current.contains(e.relatedTarget)) && (y(), !0), COMMAND_PRIORITY_EDITOR), n.registerCommand(xl, e => {
    let t = _$$uC(e);
    $insertNodes([t]);
    $isRootOrShadowRoot(t.getParentOrThrow()) && $wrapNodeInElement(t, $createParagraphNode).selectEnd();
    return !0;
  }, COMMAND_PRIORITY_EDITOR)), [n, v, y]);
  let j = (e, t) => {
    e.update(() => {
      let e = $getSelection();
      $setBlocksType(e, () => $createHeadingNode(t));
    });
  };
  let k = e => {
    e.update(() => {
      let e = $getSelection();
      $isRangeSelection(e) && $setBlocksType(e, () => $createParagraphNode());
    });
  };
  let w = async e => {
    let l = p9(e.target.files);
    if (l) {
      e.target && (e.target.value = '');
      try {
        let {
          cmsImage,
          signedImageUrl
        } = await xe(l, t, i);
        let s = {
          src: signedImageUrl,
          altText: '',
          originalImageWidth: cmsImage.originalImageWidth,
          originalImageHeight: cmsImage.originalImageHeight,
          hash: cmsImage.image
        };
        n.dispatchCommand(xl, s);
      } catch (e) {
        reportError(_$$e2.CMS, new Error('Error uploading Rich Text field\'s image embed to CMS'), {
          extra: e
        });
      }
    }
  };
  return jsxs('div', {
    className: 'toolbar_plugin--toolbar--ieWyt',
    ref: s,
    children: [jsx('div', {
      className: 'toolbar_plugin--textStyleSelect--87Zz6',
      children: jsxs(_$$bL6, {
        value: f,
        onChange: e => {
          switch (e) {
            case 'h1':
              j(n, 'h1');
              break;
            case 'h2':
              j(n, 'h2');
              break;
            case 'h3':
              j(n, 'h3');
              break;
            case 'h4':
              j(n, 'h4');
              break;
            case 'h5':
              j(n, 'h5');
              break;
            case 'h6':
              j(n, 'h6');
              break;
            case 'paragraph':
              k(n);
          }
        },
        children: [jsx(_$$l7, {
          width: 'fill',
          label: jsx(HiddenLabel, {
            children: getI18nString('dakota.rich_text_editor.toolbar.text_style.select_label')
          })
        }), jsxs(_$$mc2, {
          ref: r,
          children: [jsx(_$$c$5, {
            value: 'h1',
            children: getI18nString('dakota.properties_panel.cms_rich_text_styles.label_heading', {
              number: 1
            })
          }), jsx(_$$c$5, {
            value: 'h2',
            children: getI18nString('dakota.properties_panel.cms_rich_text_styles.label_heading', {
              number: 2
            })
          }), jsx(_$$c$5, {
            value: 'h3',
            children: getI18nString('dakota.properties_panel.cms_rich_text_styles.label_heading', {
              number: 3
            })
          }), jsx(_$$c$5, {
            value: 'h4',
            children: getI18nString('dakota.properties_panel.cms_rich_text_styles.label_heading', {
              number: 4
            })
          }), jsx(_$$c$5, {
            value: 'h5',
            children: getI18nString('dakota.properties_panel.cms_rich_text_styles.label_heading', {
              number: 5
            })
          }), jsx(_$$c$5, {
            value: 'h6',
            children: getI18nString('dakota.properties_panel.cms_rich_text_styles.label_heading', {
              number: 6
            })
          }), jsx(_$$c$5, {
            value: 'paragraph',
            children: getI18nString('dakota.properties_panel.cms_rich_text_styles.label_paragraph')
          })]
        })]
      })
    }), jsx(setupToggleButton, {
      'aria-label': getI18nString('dakota.rich_text_editor.toolbar.bold'),
      'onIcon': jsx(noop, {}),
      'offIcon': jsx(noop, {}),
      'checked': o,
      'variant': 'highlighted',
      'onChange': () => {
        n.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
      }
    }), jsx(setupToggleButton, {
      'aria-label': getI18nString('dakota.rich_text_editor.toolbar.italic'),
      'onIcon': jsx(_$$s6, {}),
      'offIcon': jsx(_$$s6, {}),
      'checked': c,
      'variant': 'highlighted',
      'onChange': () => {
        n.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
      }
    }), jsx(setupToggleButton, {
      'aria-label': getI18nString('dakota.rich_text_editor.toolbar.underline'),
      'onIcon': jsx(_$$W6, {}),
      'offIcon': jsx(_$$W6, {}),
      'checked': x,
      'variant': 'highlighted',
      'onChange': () => {
        n.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
      }
    }), jsx(setupToggleButton, {
      'aria-label': getI18nString('dakota.rich_text_editor.toolbar.strikethrough'),
      'onIcon': jsx(_$$N8, {}),
      'offIcon': jsx(_$$N8, {}),
      'checked': h,
      'variant': 'highlighted',
      'onChange': () => {
        n.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
      }
    }), jsx(xn, {}), jsx(_$$K2, {
      'aria-label': getI18nString('dakota.rich_text_editor.toolbar.alignLeft'),
      'onClick': () => {
        n.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
      },
      'children': jsx(_$$h9, {})
    }), jsx(_$$K2, {
      'aria-label': getI18nString('dakota.rich_text_editor.toolbar.alignCenter'),
      'onClick': () => {
        n.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
      },
      'children': jsx(_$$N9, {})
    }), jsx(_$$K2, {
      'aria-label': getI18nString('dakota.rich_text_editor.toolbar.alignRight'),
      'onClick': () => {
        n.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
      },
      'children': jsx(_$$K5, {})
    }), jsx(_$$K2, {
      'aria-label': getI18nString('dakota.rich_text_editor.toolbar.alignJustify'),
      'onClick': () => {
        n.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify');
      },
      'children': jsx(_$$h0, {})
    }), getFeatureFlags().cms_rt_field_image_embed && jsxs(Fragment, {
      children: [jsx(xn, {}), jsx('input', {
        ref: b,
        type: 'file',
        accept: 'image/*',
        onChange: w,
        style: {
          display: 'none'
        }
      }), jsx(_$$K2, {
        'aria-label': getI18nString('dakota.rich_text_editor.toolbar.insertImage'),
        'onClick': () => b.current?.click(),
        'children': jsx(_$$s7, {})
      })]
    })]
  });
}
let xs = {
  code: 'editor_theme--code--tGdzg',
  heading: {
    h1: 'editor_theme--headingH1--kzTMz',
    h2: 'editor_theme--headingH2--g4rI2',
    h3: 'editor_theme--headingH3--1PPIo',
    h4: 'editor_theme--headingH4--7OfK2',
    h5: 'editor_theme--headingH5--aQXlK',
    h6: 'editor_theme--headingH6--HWU2y'
  },
  link: 'editor_theme--link--4FaVt',
  list: {
    listitem: 'editor_theme--listItem--Cubnj',
    nested: {
      listitem: 'editor_theme--nestedListItem--EOfaD'
    },
    ol: 'editor_theme--listOl--0NEb7',
    ul: 'editor_theme--listUl--HLcIx'
  },
  ltr: 'editor_theme--ltr--28QNc',
  rtl: 'editor_theme--rtl--50fA4',
  paragraph: 'editor_theme--paragraph--ZPMED',
  placeholder: 'editor_theme--placeholder--pN8BL',
  quote: 'editor_theme--quote--LYt9Z',
  text: {
    bold: 'editor_theme--textBold--SusUq',
    code: 'editor_theme--textCode---IQZC',
    italic: 'editor_theme--textItalic--wbcLM',
    strikethrough: 'editor_theme--textStrikethrough--I5F58',
    underline: 'editor_theme--textUnderline--6BeCQ',
    underlineStrikethrough: 'editor_theme--textUnderlineStrikethrough--ZpWr1'
  }
};
let xr = '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1,"textStyle":"", "textFormat":0}],"direction":null,"format":"","indent":0,"type":"root","version":1}}';
let xo = [HEADING, QUOTE, UNORDERED_LIST, ORDERED_LIST, BOLD_ITALIC_STAR, BOLD_ITALIC_UNDERSCORE, BOLD_STAR, BOLD_UNDERSCORE, ITALIC_STAR, ITALIC_UNDERSCORE, STRIKETHROUGH, LINK];
function xd({
  shouldAutoFocus: e
}) {
  let [t] = useLexicalComposerContext();
  useEffect(() => {
    e && t.focus();
  }, [t, e]);
  return null;
}
function xc(e) {
  let [t] = useLexicalComposerContext();
  useEffect(() => {
    let i;
    try {
      i = t.parseEditorState(e.value || xr);
    } catch (e) {
      console.error('Error parsing editor state. Default to empty lexical state', e);
      i = t.parseEditorState(xr);
    }
    t.setEditorState(i);
  }, [e.value, t]);
  return jsx('div', {
    children: jsx(_$$$3, {
      contentEditable: jsx(_$$a9, {
        'id': e.id,
        'className': _$$s4.flexGrow1.p14.$,
        'spellCheck': !0,
        'data-testid': 'dakota-content-editable'
      }),
      placeholder: null,
      ErrorBoundary: _$$A14
    })
  });
}
function xu({
  autoFocus: e,
  value: t,
  onBlur: i,
  id: n,
  collection: a
}) {
  return jsxs(_$$n8, {
    initialConfig: {
      namespace: 'dakota-rich-text-editor',
      onError(e) {
        throw e;
      },
      theme: xs,
      nodes: pz
    },
    children: [jsx(xa, {
      onBlur: i,
      collection: a
    }), jsx(_$$G7, {}), jsx(xc, {
      value: t,
      id: n
    }), jsx(_$$E9, {
      transformers: xo
    }), jsx(_$$Q7, {}), jsx(xd, {
      shouldAutoFocus: e
    })]
  });
}
function xx(e) {
  let {
    value
  } = e;
  let i = useMemo(() => createHeadlessEditor({
    namespace: 'dakota-table-viewer',
    onError(e) {
      reportError(_$$e2.CMS, e);
    },
    nodes: pz
  }), []);
  let n = pL(useMemo(() => {
    let e;
    if (!value) return '';
    try {
      e = i.parseEditorState(value);
    } catch (t) {
      e = i.parseEditorState(xr);
    }
    let n = e.read(() => $getRoot().getTextContent());
    return n.length > 300 ? `${n.slice(0, 300)}...` : n;
  }, [i, value]), x_(e));
  return jsx(Fragment, {
    children: n
  });
}
function xm(e) {
  let {
    value
  } = e;
  let i = value ? _$$o6(value) : null;
  let n = getSingletonSceneGraph().getCurrentPage();
  let a = (n?.childrenNodes.filter(e => e.isResponsiveSet && !e.getNearestDakotaCollectionId()) ?? []).sort((e, t) => e.name.localeCompare(t.name));
  let s = (n?.childrenNodes.filter(e => e.isResponsiveSet && e.getNearestDakotaCollectionId()) ?? []).sort((e, t) => e.name.localeCompare(t.name));
  let r = pL(_$$u6(i, a, s), x_(e));
  return jsx(Fragment, {
    children: r
  });
}
function xh({
  value: e
}) {
  let [t, i] = useState(null);
  let n = useCurrentFileKey();
  return (useEffect(() => {
    async function t() {
      try {
        let t = _$$Cg.parse(JSON.parse(e));
        if (t.imageThumbnail && n) {
          let e = t.imageThumbnail;
          let l = (await Mj([e], {
            type: 'figFile',
            fileKey: n
          })).s3_urls[e];
          l && i({
            hash: e,
            url: l,
            fileName: t.fileName,
            altText: t.altText
          });
        }
      } catch (e) {
        reportError(_$$e2.CMS, new Error('could not parse CMS image field value'));
      }
    }
    e ? t() : i(null);
  }, [e, n, i]), t) ? jsxs(Fragment, {
    children: [jsx('div', {
      className: 'dakota_table--chitBorder--8-ask',
      children: jsx(_$$oW, {
        src: t.url,
        className: 'dakota_table--chitThumbnail--neJkB',
        alt: t.altText
      })
    }), jsx('div', {
      className: 'dakota_table--imageFilename--nGUH-',
      children: t.fileName
    })]
  }) : null;
}
function xg(e) {
  let {
    value
  } = e;
  let i = pL(function (e, t) {
    if (!e) return '';
    let i = '';
    let n = new Date(e);
    isNaN(n.getTime()) ? reportError(_$$e2.CMS, new Error('Invalid date value.')) : i = function (e, t) {
      let i = (() => {
        switch (t) {
          case _$$ap.PLAIN_DATE_TIME:
            return {
              dateStyle: 'long',
              timeStyle: 'short',
              timeZone: 'UTC'
            };
          case _$$ap.ZONED_DATE_TIME:
            return {
              dateStyle: 'long',
              timeStyle: 'short'
            };
          case _$$ap.PLAIN_DATE:
          default:
            return {
              dateStyle: 'long',
              timeZone: 'UTC'
            };
        }
      })();
      return new Intl.DateTimeFormat('en-US', i).format(e);
    }(n, function (e) {
      if (!(e != null && typeof e == 'object' && 'properties' in e && e.properties != null && typeof e.properties == 'object' && 'dateType' in e.properties)) return null;
      let t = e.properties.dateType;
      return Object.values(_$$ap).includes(t) ? t : (_$$sD('Invalid or missing dateType in fieldSchema.', {
        fieldSchema: e,
        dateType: t
      }), null);
    }(t));
    return i;
  }(value, e.colDef?.context), x_(e));
  return jsx(Fragment, {
    children: i
  });
}
function xf({
  value: e,
  onValueChange: t,
  stopEditing: i
}) {
  let n = useCallback(i => {
    e && t(i.currentTarget.value);
  }, [e, t]);
  return jsx(_$$v8, {
    className: 'dakota_table--editableTextArea--r3us6',
    onChange: n,
    value: e ?? '',
    minHeight: 36,
    selectOnMount: !0,
    submit: () => {
      i();
    }
  });
}
function x_(e) {
  let t = e.colDef?.context;
  if (!(t != null && typeof t == 'object' && 'id' in t && typeof t.id == 'string')) {
    _$$sD('fieldSchema ID is missing.', {
      params: e
    });
    return null;
  }
  let i = t.id;
  let n = e.data?.fieldByFieldSchemaId[i ?? ''];
  let l = n?.id;
  return l;
}
function xb(e) {
  let t = pL(e.value, x_(e));
  return jsx(Fragment, {
    children: t
  });
}
function xy(e) {
  let t = pL(e.value, x_(e));
  return jsxs('div', {
    className: 'dakota_table--slugCell--MJV8a',
    children: [jsx('span', {
      className: 'dakota_table--slugSlash--7JbFr',
      children: '/'
    }), t]
  });
}
function xv(e) {
  let t = pL(e.displayName, e.fieldSchemaId);
  return jsxs('div', {
    className: 'dakota_table--cellHeaderContainer--DOgdR',
    children: [jsx('div', {
      className: 'dakota_table--cellHeaderIcon--8K9hX',
      children: _$$Tu(e.slug ? _$$_j.SLUG : e.fieldType)
    }), jsx('div', {
      className: 'ag-cell-label-container',
      children: jsx('div', {
        className: 'ag-header-cell-label',
        children: jsx('span', {
          className: 'ag-header-cell-text',
          children: t
        })
      })
    })]
  });
}
function xj(e) {
  useAtomWithSubscription(UU);
  let t = useAtomWithSubscription(pE(e.collectionId));
  let i = e.numRows ?? 0;
  let n = e.api.getSelectedRows();
  let a = !t && n.length > 0 && n.length !== i;
  let s = !t && n.length > 0 && n.length === i;
  return jsx(Checkbox, {
    label: jsx(HiddenLabel, {
      children: getI18nString('dakota.table_view.select_all')
    }),
    checked: s,
    mixed: a,
    onChange: t => {
      if (a) {
        e.api.selectAll('all');
        return;
      }
      if (s) {
        e.api.deselectAll('all');
        return;
      }
      t && e.api.selectAll('all');
    }
  });
}
function xk(e) {
  let t = useRef(null);
  let i = e.node.isSelected();
  useEffect(() => {
    e.registerRowDragger(t.current);
  }, [e]);
  return jsxs('div', {
    className: v()('dakota_table--checkboxWithDragger--S-bWd', i && 'dakota_table--multiSelecting--VKIc-'),
    children: [jsx('div', {
      className: 'dakota_table--rowNumber--Ujkeq',
      children: e.data?.number
    }), jsxs('div', {
      className: 'dakota_table--checkboxContainer--YUYPi',
      children: [jsx('div', {
        className: 'dakota_table--dragger--w0UIu',
        ref: t,
        children: jsx(_$$B5, {})
      }), jsx(Checkbox, {
        label: jsx(HiddenLabel, {
          children: getI18nString('dakota.table_view.select_row')
        }),
        checked: i,
        onChange: t => {
          e.node.setSelected(t, !1);
        }
      })]
    })]
  });
}
async function xw(e, t, i) {
  let n = `
    <div>
      ${e}
      <div style="display: none;" data-figma-cms='${JSON.stringify(t)}'></div>
    </div>
  `.trim();
  let l = new ClipboardItem({
    'text/plain': new Blob([e], {
      type: 'text/plain'
    }),
    'text/html': new Blob([n], {
      type: 'text/html'
    })
  });
  let a = () => {
    i(VisualBellActions.enqueue({
      type: 'copied_to_clipboard',
      message: getI18nString('fullscreen_actions.copied_to_clipboard')
    }));
  };
  try {
    await navigator.clipboard.write([l]);
    a();
  } catch (i) {
    try {
      let i = new ClipboardItem({
        'text/plain': new Blob([JSON.stringify({
          value: e,
          ...t
        })], {
          type: 'text/plain'
        })
      });
      await navigator.clipboard.write([i]);
      a();
    } catch (e) {}
  }
}
async function xS(e, t) {
  let i = await navigator.clipboard.read();
  let n = !1;
  for (let l of i) {
    if (!n) {
      if (l.types.includes('text/html')) {
        let i = await l.getType('text/html');
        let a = await l.getType('text/plain');
        let s = await i.text();
        let r = await a.text();
        let o = new DOMParser().parseFromString(s, 'text/html').querySelector('[data-figma-cms]');
        if (!o) continue;
        try {
          let i = JSON.parse(o.getAttribute('data-figma-cms') || '');
          if (!e(r, i)) continue;
          n = t(r, i);
        } catch (e) {
          continue;
        }
      } else if (l.types.includes('text/plain')) {
        let i = await l.getType('text/plain');
        let {
          value,
          ...s
        } = JSON.parse(await i.text());
        if (!e(value, s)) continue;
        n = t(value, s);
      }
    }
  }
}
let xT = pv.createLazyComponent(() => Promise.all([]).then(_require3).then(e => e.$$default), {
  componentName: 'AgGridReact',
  error: _$$H5.NONE
});
let xI = memo(({
  children: e
}) => {
  let t = useAtomWithSubscription(_$$rx);
  let i = useAtomWithSubscription(UU);
  return jsx('div', {
    style: {
      width: `calc(100% - ${i.size === 1 ? t : 0}px`
    },
    className: 'dakota_table--dakotaTableWrapper--fv90E',
    children: e
  });
});
let xE = memo(({
  collection: e
}) => {
  let t = e.id;
  let i = useRef(null);
  let {
    fieldSchemas,
    rows
  } = function (e) {
    let t = _$$uE(e);
    let i = Vp(e).data;
    return {
      fieldSchemas: t,
      rows: BM(i).map((e, t) => ({
        item: e,
        number: t + 1,
        fieldByFieldSchemaId: _$$Sp(e.fields)
      }))
    };
  }(t);
  let {
    onRowContextMenu
  } = function (e) {
    let [t, i] = useState(null);
    let n = Xr(UU);
    let l = useDispatch();
    let r = useCallback(t => {
      KB({
        collection: e,
        item: t
      });
      n(e => e.has(t.id) ? pk(e, t.id) : e);
    }, [e, n]);
    let d = BK(_$$s);
    return {
      editingCellId: t,
      setEditingCellId: i,
      onRowContextMenu: useCallback((e, t) => {
        t.stopPropagation();
        t.preventDefault();
        let {
          clientX,
          clientY
        } = t;
        d.show({
          data: {
            clientX,
            clientY,
            deleteItemOrItems: () => {
              l(showModal({
                type: pw.type,
                data: {
                  type: e.length === 1 ? pS.ITEM : pS.ITEMS,
                  deleteRecordOrRecords: () => {
                    for (let t of e) r(t);
                  }
                }
              }));
            }
          }
        });
      }, [r, d, l])
    };
  }(e);
  let [u, p] = useAtomValueAndSetter(UU);
  let [x, m] = useAtomValueAndSetter(pE(t));
  let h = useDispatch();
  let g = useMemo(() => ({
    editable: !1,
    sortable: !1,
    suppressMovable: !0,
    headerComponent: xv,
    cellRenderer: xb,
    cellRendererParams: {},
    onCellContextMenu: e => {
      let t = e.event;
      let i = e.data?.item;
      if (i == null) return;
      let n = e.api.getSelectedRows();
      if (n.length === 0) {
        onRowContextMenu([i], t);
      } else {
        let e = n.map(e => e.item);
        e.some(e => e.id === i.id) ? onRowContextMenu(e, t) : onRowContextMenu([i], t);
      }
    },
    suppressKeyboardEvent: e => e.event.key === 'Enter',
    onCellClicked: e => {
      if (e.data == null) {
        _$$sD('Data is missing.', {
          evt: e
        });
        return;
      }
      p(new Set([e.data.item.id]));
      m(void 0);
    },
    onCellDoubleClicked: e => {
      if (e.data == null) {
        _$$sD('Data is missing.', {
          evt: e
        });
        return;
      }
      p(new Set([e.data.item.id]));
      m(void 0);
    }
  }), [onRowContextMenu, p, m]);
  let f = fieldSchemas.sort(e => e.name === _$$rU.Title ? -1 : 1).map(e => {
    let t = e.id;
    let i = `fieldByFieldSchemaId.${t}.value`;
    let n = {
      fieldType: e.fieldType,
      fieldSchemaId: t,
      slug: e.name === _$$rU.Slug
    };
    let l = {
      field: i,
      context: e,
      headerName: e.name,
      headerComponentParams: n
    };
    return e.name === _$$rU.Title ? {
      ...l,
      suppressHeaderMenuButton: !0
    } : e.name === _$$rU.Slug ? {
      ...l,
      suppressHeaderMenuButton: !0,
      cellRenderer: xy
    } : e.fieldType === _$$_j.RICH_TEXT ? {
      ...l,
      editable: !1,
      cellRenderer: xx
    } : e.fieldType === _$$_j.PLAIN_TEXT ? {
      ...l,
      cellEditor: xf
    } : e.fieldType === _$$_j.LINK ? {
      ...l,
      cellRenderer: xm,
      editable: !1
    } : e.fieldType === _$$_j.IMAGE ? {
      ...l,
      cellRenderer: xh,
      cellStyle: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }
    } : e.fieldType === _$$_j.DATE ? {
      ...l,
      cellRenderer: xg,
      editable: !1
    } : (_$$sD('Unexpected field type', {
      field: e
    }), {
      ...l
    });
  });
  let _ = useCallback(e => e.data.item.id, []);
  let b = useCallback(({
    newValue: e,
    colDef: t,
    source: i,
    data: n
  }) => {
    if (i !== 'edit') return;
    let l = t.context;
    if (!(l != null && typeof l == 'object' && 'id' in l && typeof l.id == 'string' && 'databaseId' in l && typeof l.databaseId == 'string')) {
      _$$sD('fs is not a WebFieldSchema', {
        colDef: t
      });
      return;
    }
    let {
      item,
      fieldByFieldSchemaId
    } = n;
    let r = fieldByFieldSchemaId[l.id];
    if (r == null) {
      _$$sD('field is nullish', {
        data: n,
        colDef: t
      });
      return;
    }
    let o = r.id;
    let d = {
      databaseId: l.databaseId
    };
    _$$_Z({
      fieldId: o,
      fieldSchema: d,
      item,
      value: e
    });
  }, []);
  let y = useCallback(e => {
    let {
      data,
      colDef
    } = e;
    if (colDef.colId === 'ag-Grid-SelectionColumn') return;
    p(e => e && data?.item.id ? new Set([data.item.id]) : e);
    let n = colDef.context;
    if (!(n != null && typeof n == 'object' && 'id' in n && typeof n.id == 'string')) {
      _$$sD('fieldSchema ID is missing.', {
        evt: e
      });
      return;
    }
    AppStateTsApi.cmsState().bindingFieldSchema.set({
      id: n.id,
      type: colDef.headerComponentParams.fieldType
    });
  }, [p]);
  let v = useCallback(async e => {
    if (!e.data?.item.id) return;
    let t = e.event;
    switch (t.key.toLowerCase()) {
      case 'c':
        if (t.metaKey) {
          t.preventDefault();
          let i = e.value;
          let n = e.colDef.headerComponentParams.fieldSchemaId;
          let l = e.colDef.headerComponentParams.fieldType;
          await xw(i, {
            fieldSchemaId: n,
            fieldType: l
          }, h);
        }
        break;
      case 'v':
        t.metaKey && (t.preventDefault(), await xS((t, i) => {
          let {
            fieldSchemaId,
            fieldType
          } = i;
          return e.colDef.headerComponentParams.fieldSchemaId === fieldSchemaId || e.colDef.headerComponentParams.fieldType === fieldType;
        }, t => {
          if (!e.data) return !1;
          let i = e.colDef.headerComponentParams.fieldSchemaId;
          let {
            item,
            fieldByFieldSchemaId
          } = e.data;
          let a = fieldByFieldSchemaId[i];
          if (a == null) {
            _$$sD('field is null', {
              params: e
            });
            return !1;
          }
          let s = e.colDef.context;
          if (!(s != null && typeof s == 'object' && 'databaseId' in s && typeof s.databaseId == 'string')) {
            _$$sD('fs is not a WebFieldSchema', {
              params: e
            });
            return !1;
          }
          let r = {
            databaseId: s.databaseId
          };
          _$$_Z({
            fieldId: a.id,
            fieldSchema: r,
            item,
            value: t
          });
          return !0;
        }));
        break;
      case 'enter':
        if (t.preventDefault(), e.data == null) {
          _$$sD('Data is missing.', {
            params: e
          });
          return;
        }
        p(new Set([e.data.item.id]));
    }
  }, [p, h]);
  let j = useMemo(() => ({
    mode: 'multiRow',
    enableClickSelection: !0,
    headerCheckbox: !0,
    checkboxes: !1,
    enableSelectionWithoutKeys: !0
  }), []);
  let w = useMemo(() => ({
    pinned: 'left',
    sortable: !1,
    resizable: !1,
    cellRenderer: xk,
    cellClass: 'dakota_table--checkboxCell--ft6Xv',
    headerComponent: xj,
    headerComponentParams: {
      numRows: rows.length,
      collectionId: t
    }
  }), [rows.length, t]);
  let S = useCallback((e, t) => {
    if (x) {
      for (let t of e?.getSelectedNodes() ?? []) t.setSelected(!1, !1);
      return;
    }
    if (e && t.size === 1) {
      for (let i of t) {
        let t = e.getRowNode(i);
        t && t.setSelected(!0, !0);
      }
    }
  }, [x]);
  let C = useCallback(e => {
    S(e.api, u);
  }, [u, S]);
  let T = useCallback(e => {
    x || p(new Set(e.api.getSelectedRows().map(e => {
      if (!(e != null && typeof e == 'object' && 'item' in e && e.item != null && typeof e.item == 'object' && 'id' in e.item && typeof e.item.id == 'string')) {
        _$$sD('Row is missing item ID.', {
          row: e
        });
        return;
      }
      return e.item.id;
    })));
  }, [p, x]);
  let I = useCallback(t => {
    let {
      startPosition,
      endPosition
    } = function (e) {
      let t;
      let i;
      switch (e.overIndex) {
        case -1:
          if (!(t = e.api.getDisplayedRowAtIndex(e.api.getDisplayedRowCount() - 1)?.data?.item.position)) break;
          i = _$$e1(t);
          break;
        default:
          let n;
          let l;
          if (e.overIndex === 0 && e.y < (e.node.rowHeight ?? 0) / 2) {
            if (!(i = e.api.getDisplayedRowAtIndex(0)?.data?.item.position)) break;
            t = _$$hu(i);
            break;
          }
          let a = e.overNode;
          if (e.api.forEachNode((t, i) => {
            i === e.overIndex + 1 && (n = t);
            l = t;
          }), !n?.data?.item.position && !l?.data?.item.position || !a?.data?.item.position) {
            break;
          }
          i = !n && l?.data?.item.position ? _$$e1(l?.data?.item.position) : n?.data?.item.position;
          t = a?.data?.item.position;
      }
      return {
        startPosition: t,
        endPosition: i
      };
    }(t);
    if (!startPosition || !endPosition) return;
    let l = t.api.getSelectedRows();
    for (let a of function (e, t, i) {
      let n = [t, i].sort((e, t) => -Ez(e, t));
      let l = [];
      for (let [t, i] of e.entries()) {
        let e;
        if (t === 0) {
          e = _$$kI(n[0], n[1]);
        } else {
          let t = l[l.length - 1];
          if (!t) continue;
          e = _$$kI(t.newPosition, n[1]);
        }
        l.push({
          item: i.item,
          newPosition: e
        });
      }
      return l;
    }(l.length > 0 ? l : t.nodes.map(e => e.data), startPosition, endPosition)) {
      let {
        item
      } = a;
      let i = {
        position: a.newPosition,
        status: item.status
      };
      W0({
        collection: e,
        item,
        updatedItemAttributes: i
      });
    }
  }, [e]);
  let E = useCallback(e => {}, []);
  useEffect(() => {
    S(i.current?.api, u);
  }, [u, S]);
  return jsx(xI, {
    children: jsx(xT, {
      ref: i,
      animateRows: !1,
      columnDefs: f,
      defaultColDef: g,
      fallback: jsx(Fragment, {}),
      getRowId: _,
      noRowsOverlayComponent: xN,
      onCellClicked: y,
      onCellEditRequest: b,
      onCellKeyDown: v,
      onFirstDataRendered: C,
      onRowDragEnd: I,
      onRowDragMove: E,
      onSelectionChanged: T,
      preventDefaultOnContextMenu: !0,
      readOnlyEdit: !0,
      rowData: rows,
      rowSelection: j,
      selectionColumnDef: w,
      stopEditingWhenCellsLoseFocus: !0,
      suppressHeaderFocus: !0
    })
  });
});
function xN() {
  return jsx(Fragment, {});
}
function xR() {
  let e = useAtomWithSubscription(_$$iO);
  let {
    collection,
    status
  } = _$$G6({
    collectionStableId: e
  });
  let n = useAtomWithSubscription(_$$lT);
  return !e || n ? null : collection == null ? (status === 'loaded' && _$$sD('Collection for table not found', {
    selectedCollectionId: e
  }), null) : jsx(Suspense, {
    fallback: jsx(Fragment, {}),
    children: jsx(xE, {
      collection
    })
  });
}
function x$({
  children: e,
  id: t,
  label: i
}) {
  return jsxs('fieldset', {
    className: 'x78zum5 xdt5ytf x1nfngrj',
    children: [jsx(Label, {
      htmlFor: t,
      className: 'cms_fieldset--label--lGgLU',
      children: i
    }), e]
  }, t);
}
function xU({
  collectionId: e
}) {
  let t = _$$uE(e);
  return t.length === 0 ? null : jsx(Fragment, {
    children: t.map(e => {
      switch (e.fieldType) {
        case _$$_j.LINK:
          return jsx(x$, {
            id: e.id,
            label: capitalize(e.name),
            children: jsx('div', {
              className: 'x1yrfp1h x1lliihq x1yjhc3n x9f619 xiuzu7u xlyipyv x1gs6z28 xnsahwu xh8yej3 xxk0z11'
            })
          }, e.id);
        case _$$_j.IMAGE:
          return jsx(x$, {
            id: e.id,
            label: capitalize(e.name),
            children: jsx('div', {
              className: 'x1lliihq x1yjhc3n x9f619 xiuzu7u xlyipyv x1md70p1 x1plog1 xur7f20 x1d786w4 xo1570h'
            })
          }, e.id);
        case _$$_j.SLUG:
        case _$$_j.PLAIN_TEXT:
          return jsx(x$, {
            id: e.id,
            label: capitalize(e.name),
            children: jsx('div', {
              className: 'x1yrfp1h x1lliihq x1yjhc3n x9f619 xiuzu7u xlyipyv x1gs6z28 xnsahwu xh8yej3 xxk0z11'
            })
          }, e.id);
        case _$$_j.RICH_TEXT:
          return jsx(x$, {
            id: e.id,
            label: capitalize(e.name),
            children: jsx('div', {
              className: 'x1yrfp1h x1lliihq x1yjhc3n x9f619 xiuzu7u xlyipyv x1gs6z28 xnsahwu xh8yej3 xlo07zb'
            })
          }, e.id);
      }
    })
  });
}
let xJ = 'en-US';
let xZ = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
function x4({
  state: e,
  date: t
}) {
  let i = useRef(null);
  let {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    formattedDate,
    isInvalid
  } = _$$E0({
    date: t
  }, e, i);
  let p = Ec('UTC');
  let x = t.compare(p) === 0;
  return jsx('td', {
    ...cellProps,
    ..._$$xk(x6.calendarCell),
    children: !isOutsideVisibleRange && jsxs('div', {
      ...buttonProps,
      ref: i,
      ..._$$xk(x6.calendarCellButton, isDisabled && !isInvalid && x6.disabledText, isSelected && !isDisabled && (isInvalid ? x6.selectedInvalid : x6.selected), !isSelected && !isDisabled && x6.hoverable, x && !isSelected && x6.todayIndicator),
      children: [formattedDate, x && !isSelected && jsx('div', {
        className: 'x10l6tqk xbfrwjf x1nrll8i xuuh30 x1g8rjiy xuoj239 x16rqkct xu5wzci'
      })]
    })
  });
}
function x3({
  state: e
}) {
  let {
    gridProps,
    headerProps
  } = _$$g6({}, e);
  let n = RZ(e.visibleRange.start, xJ);
  return jsx('div', {
    className: 'xh8yej3 xjbqb8w',
    children: jsxs('table', {
      ...gridProps,
      cellPadding: '0',
      className: 'xh8yej3 x1vathgz x4tk4ra x140o2bo',
      children: [jsx('thead', {
        ...headerProps,
        className: 'x1n5zjp5',
        children: jsx('tr', {
          children: xZ.map(e => jsx('th', {
            ..._$$xk(x8.calendarWeekDay),
            children: e
          }, e))
        })
      }), jsx('tbody', {
        children: [...new Array(n).keys()].map(t => jsx('tr', {
          children: e.getDatesInWeek(t).map(i => i ? jsx(x4, {
            state: e,
            date: i
          }, i.toString()) : jsx('td', {
            'aria-hidden': 'true'
          }, t))
        }, t))
      })]
    })
  });
}
let x8 = {
  calendarWeekDay: {
    ..._$$g.textBodyMedium,
    color: 'x1n0bwc9',
    fontWeight: 'xk50ysn',
    textAlign: 'x2b8uid',
    verticalAlign: 'xxymvpz',
    width: 'x1j4bni0',
    height: 'x100nsjd',
    boxSizing: 'x9f619',
    padding: 'x1717udv',
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
let x6 = {
  calendarCell: {
    ..._$$g.textBodyMedium,
    width: 'x1j4bni0',
    height: 'x100nsjd',
    backgroundColor: 'xjbqb8w',
    border: 'x1gs6z28',
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
    color: 'x1akne3o',
    cursor: 'xt0e3qv',
    position: 'x1n2onr6',
    textAlign: 'x2b8uid',
    verticalAlign: 'xxymvpz',
    boxSizing: 'x9f619',
    $$css: !0
  },
  calendarCellButton: {
    width: 'x1j4bni0',
    height: 'x100nsjd',
    border: 'x1gs6z28',
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
    cursor: 'x1ypdohk',
    borderRadius: 'x192jxwq',
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
    justifyContent: 'xl56j7k',
    transition: 'x111pd7f',
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    ..._$$g.textBodyMedium,
    color: 'x1akne3o',
    boxSizing: 'x9f619',
    backgroundColor: 'xjbqb8w xv2f06h',
    $$css: !0
  },
  selected: {
    backgroundColor: 'xu5wzci',
    color: 'x1tk3asg',
    $$css: !0
  },
  disabledText: {
    color: 'xge78cn',
    $$css: !0
  },
  selectedInvalid: {
    backgroundColor: 'xxvmw7z',
    color: 'x1ihmbg5',
    $$css: !0
  },
  hoverable: {
    backgroundColor: 'xv2f06h',
    $$css: !0
  },
  todayIndicator: {
    position: 'x1n2onr6',
    $$css: !0
  }
};
function x7({
  onClose: e,
  buttonRef: t,
  calendarProps: i
}) {
  let n = _$$T6({
    ...i,
    locale: xJ,
    createCalendar: _$$d0
  });
  let {
    title
  } = _$$_8(i, n);
  let s = t.current?.getBoundingClientRect();
  if (!s) return null;
  let r = {
    x: s.left,
    y: s.bottom + 4
  };
  return jsx(_$$bL2, {
    onClose: e,
    defaultPosition: r,
    width: 240,
    children: jsxs(_$$vo, {
      children: [jsx(_$$i2, {
        position: 'top',
        offset: '50%'
      }), jsx(Y9, {
        children: jsxs('div', {
          className: 'x78zum5 x6s0dn4 x13a6bvl x1nfngrj xh8yej3 x82l30n',
          children: [jsx('div', {
            className: 'x5inmi5 x1mazlvb',
            children: jsx(_$$hE, {
              children: title
            })
          }), jsx('div', {
            className: 'xl56j7k x5mp9sv',
            children: jsx(Button, {
              onClick: () => {
                n.setValue(Ec('UTC'));
                n.setFocusedDate(Ec('UTC'));
              },
              variant: 'secondary',
              children: getI18nString('dakota.date_picker.today')
            })
          }), jsxs('div', {
            className: 'x78zum5 x2lah0s x8x9d4c',
            children: [jsx('div', {
              className: 'x2lah0s',
              children: jsx(_$$K2, {
                'size': 'md',
                'aria-label': getI18nString('dakota.date_picker.navigate_previous_month'),
                'onClick': n.focusPreviousPage,
                'children': jsx(_$$t6, {})
              })
            }), jsx('div', {
              className: 'x2lah0s',
              children: jsx(_$$K2, {
                'size': 'md',
                'aria-label': getI18nString('dakota.date_picker.navigate_next_month'),
                'onClick': n.focusNextPage,
                'children': jsx(_$$a4, {})
              })
            })]
          })]
        })
      }), jsx(_$$nB, {
        padding: 8,
        children: jsx(x3, {
          state: n
        })
      })]
    })
  });
}
function x9({
  segment: e,
  state: t
}) {
  let i = useRef(null);
  let {
    segmentProps
  } = _$$V3(e, t, i);
  return jsx('div', {
    ...segmentProps,
    'ref': i,
    'data-segment': e.type,
    'style': {
      ...segmentProps.style
    },
    ..._$$xk(mi.dateSegment, !e.isEditable && mi.nonEditable),
    'children': e.text
  });
}
function me(e) {
  let t = _$$F7({
    ...e,
    isDisabled: !1,
    locale: xJ,
    createCalendar: _$$d0
  });
  let i = useRef(null);
  let {
    fieldProps
  } = _$$cJ2(e, t, i);
  let s = !e.value;
  let r = () => {
    e.onOpenChange && e.onOpenChange(!0);
  };
  return jsx('button', {
    ...fieldProps,
    className: 'x78zum5 x6s0dn4 x98rzlu x195vfkc xeuugli x1v8gsql',
    onClick: () => r(),
    children: s ? jsx('span', {
      className: 'x1n0bwc9',
      children: getI18nString('dakota.date_picker.placeholder')
    }) : t.segments.map(e => jsx(x9, {
      segment: e,
      state: t
    }, e.type))
  });
}
function mt({
  fieldSchema: e,
  value: t,
  submit: i
}) {
  let n = e.properties?.dateType || _$$ap.PLAIN_DATE;
  let s = n === _$$ap.PLAIN_DATE_TIME || n === _$$ap.ZONED_DATE_TIME;
  let r = s ? 'minute' : 'day';
  let o = () => {
    i(e, t);
  };
  let d = _$$j8({
    value: function (e, t) {
      if (!e) return null;
      try {
        if (t) return DP(e);
        return _$$_U(e);
      } catch {
        return null;
      }
    }(t, s),
    onChange: t => {
      i(e, t ? t.toString() : '');
    },
    granularity: r,
    onBlur: o,
    shouldCloseOnSelect: !1
  });
  let c = useRef(null);
  let {
    groupProps,
    labelProps,
    fieldProps,
    calendarProps
  } = _$$Q8({
    'granularity': r,
    'aria-label': e.name || getI18nString('dakota.date_picker.date_name')
  }, d, c);
  return jsxs('div', {
    className: 'x78zum5 xdt5ytf xg2d0mh',
    children: [jsx('span', {
      ...labelProps,
      className: 'x10l6tqk x1i1rx1s xjm9jq1 x1717udv xkdpibf xb3r6kr xzpqnlu xuxw1ft x1wty727',
      children: e.name || getI18nString('dakota.date_picker.date_name')
    }), jsxs('button', {
      ...groupProps,
      ref: c,
      className: 'x78zum5 x6s0dn4 xh8yej3 x4ayska x1v8gsql x1bamp8i x19y5rnk xx99whi x1nfngrj x1aq93mo x9f619 x7z60cl x1h9eu9e xgqun6i',
      type: 'button',
      children: [jsx(_$$p0, {}), jsx('div', {
        className: 'x78zum5 x6s0dn4 x98rzlu x195vfkc xeuugli x1v8gsql',
        children: jsx(me, {
          ...fieldProps,
          onBlur: o,
          onOpenChange: e => d.setOpen(e)
        })
      }), jsx(_$$K2, {
        'size': 'md',
        'aria-label': getI18nString('dakota.date_picker.open_calendar'),
        'onClick': () => d.setOpen(!d.isOpen),
        'children': jsx(_$$r2, {
          className: 'xvy4d1p xxk0z11 x1heor9g'
        })
      })]
    }), d.isOpen && jsx(x7, {
      onClose: () => d.setOpen(!1),
      buttonRef: c,
      calendarProps
    })]
  });
}
let mi = {
  dateSegment: {
    ..._$$g.textBodyMedium,
    border: 'x1gs6z28',
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
    outline: 'x1a2a7pz',
    outlineColor: null,
    outlineOffset: null,
    outlineStyle: null,
    outlineWidth: null,
    padding: 'xyf9f8g',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    borderRadius: 'x1cum3z5',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    minWidth: 'xeuugli',
    textAlign: 'x2b8uid',
    boxSizing: 'x9f619',
    backgroundColor: 'xjbqb8w x1qfli6o',
    color: 'x1akne3o x1d8rvlk',
    $$css: !0
  },
  nonEditable: {
    cursor: 'xt0e3qv',
    userSelect: 'x87ps6o',
    $$css: !0
  }
};
let mo = new Point(-16, -56);
let md = {
  dropArea: {
    position: 'x1n2onr6',
    width: 'xh8yej3',
    height: 'x5yr21d',
    borderWidth: 'xmkeg23',
    borderRadius: 'xur7f20',
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    justifyContent: 'xl56j7k',
    textAlign: 'x2b8uid',
    cursor: 'xt0e3qv',
    backgroundSize: 'x1tbiz1a',
    backgroundPosition: 'x1xsqp64',
    backgroundRepeat: 'xiy17q3',
    $$css: !0
  },
  dropAreaDefault: {
    border: 'xo1570h',
    borderWidth: null,
    backgroundColor: 'xjbqb8w',
    $$css: !0
  },
  dropAreaHover: {
    border: 'xk1x9i1',
    borderWidth: null,
    backgroundColor: 'xcr9a89',
    $$css: !0
  },
  dropAreaWithImageDefault: {
    border: 'xehbxol',
    borderWidth: null,
    backgroundColor: 'x1v8gsql',
    $$css: !0
  },
  dropAreaWithImageDrag: {
    border: 'xh2u52t',
    borderWidth: null,
    $$css: !0
  },
  emptyState: {
    'fontSize': 'x1j6dyjg',
    'display': 'x78zum5',
    'flexDirection': 'xdt5ytf',
    'alignItems': 'x6s0dn4',
    'gap': 'x167g77z',
    'color': 'x1n0bwc9',
    '--color-icon': 'xmauxvm',
    '$$css': !0
  },
  emptyStateHovered: {
    'color': 'x1b12ngv',
    '--color-icon': 'x1aue78i',
    '$$css': !0
  },
  loadingState: {
    backgroundColor: 'x1v8gsql',
    $$css: !0
  }
};
var mc = (e => (e[e.LOADING_EXISTING = 0] = 'LOADING_EXISTING', e[e.UPLOADING = 1] = 'UPLOADING', e[e.READY = 2] = 'READY', e))(mc || {});
function mu({
  backgroundImage: e,
  imageStatus: t,
  onDrop: i,
  onChange: n,
  deleteImage: s,
  showDeleteButton: r,
  imageHoverButton: o,
  toggleDetailView: d,
  recordingKey: c
}) {
  let [p, x] = useState(!1);
  let [m, h] = useState(!1);
  let g = p || m;
  let f = useRef(null);
  return jsx(Fragment, {
    children: jsxs(_$$Y4, {
      isDragTarget: () => !0,
      onTargetDragEnter: () => {
        x(!0);
      },
      onTargetDragLeave: () => {
        x(!1);
      },
      onMouseEnter: () => h(!0),
      onMouseLeave: () => h(!1),
      onTargetDrop: e => {
        i(e);
        x(!1);
      },
      onClick: () => {
        if (t !== 1) {
          if (e && d) {
            d();
            return;
          }
          f.current?.click();
        }
      },
      recordingKey: generateRecordingKey(c, 'dropTarget'),
      ..._$$xk(md.dropArea, t === 1 && md.loadingState, g ? md.dropAreaHover : md.dropAreaDefault, e && md.dropAreaWithImageDefault, e && p && md.dropAreaWithImageDrag),
      style: {
        backgroundImage: e && t === 2 ? m ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${e.url})` : `url(${e.url})` : void 0
      },
      children: [jsx('input', {
        type: 'file',
        ref: f,
        accept: 'image/*',
        onChange: n,
        className: 'x1s85apg'
      }), t !== 2 && jsxs('div', {
        className: 'x1j6dyjg x78zum5 xdt5ytf x6s0dn4 x167g77z x1n0bwc9 xmauxvm',
        children: [jsx(LoadingSpinner, {
          size: 'medium',
          className: 'x1i3ajwb'
        }), t === 1 && renderI18nText('dakota.side_panel.uploading')]
      }), t === 2 && !e && jsxs('div', {
        ..._$$xk(md.emptyState, g && md.emptyStateHovered),
        children: [jsx(_$$T2, {}), renderI18nText('dakota.side_panel.add_image')]
      }), m && t === 2 && e && r && jsx(ButtonPrimitive, {
        onClick: e => {
          s();
          h(!1);
          e.stopPropagation();
          e.preventDefault();
        },
        className: 'x10l6tqk x1v4kod4 x11jdl05 x1kky2od xlup9mm x16rqkct xon4yw5 xwa2v1s x78zum5 x6s0dn4 xl56j7k xt0e3qv xhtitgo',
        children: jsx(_$$f1, {})
      }), m && t === 2 && e && o]
    })
  });
}
function mp({
  imageUploaderProps: e,
  initialPosition: t,
  initialFilename: i,
  initialAltText: n,
  fieldSchemaId: s,
  updateFilename: r,
  updateAltText: o,
  onClose: d,
  recordingKey: c
}) {
  let [p, x] = useState('');
  let [m, h] = useState('');
  useEffect(() => {
    x(i || '');
  }, [i]);
  useEffect(() => {
    h(n || '');
  }, [n]);
  return jsx(_$$bL2, {
    draggable: 'header',
    onClose: d,
    defaultPosition: t,
    recordingKey: c,
    children: jsxs(_$$vo, {
      children: [jsxs(Y9, {
        children: [jsx(_$$hE, {
          children: getI18nString('dakota.image_detail_modal.image')
        }), jsx(_$$jk, {
          children: jsx(_$$K2, {
            'onClick': e.deleteImage,
            'aria-label': getI18nString('dakota.image_detail_modal.delete_image_tooltip'),
            'children': jsx(_$$z7, {})
          })
        })]
      }), jsx(_$$nB, {
        padding: '16px',
        children: jsxs('div', {
          className: 'x78zum5 xdt5ytf xou54vl',
          children: [jsx('div', {
            className: 'x12bdpze x1y5e3q9 x1n2onr6',
            children: jsx(mu, {
              ...e,
              recordingKey: generateRecordingKey(c, 'imageUploader')
            })
          }), jsx(x$, {
            id: s,
            label: getI18nString('dakota.image_detail_modal.filename'),
            children: jsx(_$$p5, {
              id: s,
              type: 'text',
              value: p,
              onChange: e => x(e),
              htmlAttributes: {
                onBlur: () => r(p)
              }
            })
          }), jsx(x$, {
            id: s,
            label: getI18nString('dakota.image_detail_modal.alt_text'),
            children: jsx(_$$p5, {
              id: s,
              type: 'text',
              value: m,
              onChange: e => h(e),
              htmlAttributes: {
                onBlur: () => o(m)
              }
            })
          })]
        })
      })]
    })
  });
}
function mx({
  collection: e,
  fieldSchema: t,
  currentImageFieldValue: i,
  submit: n,
  recordingKey: r
}) {
  let o = useMemo(() => {
    if (i) {
      try {
        return _$$Cg.parse(JSON.parse(i));
      } catch (e) {
        reportError(_$$e2.CMS, new Error('could not parse CMS image field value'), {
          extra: e
        });
      }
    }
    return null;
  }, [i]);
  let [d, c] = useState(null);
  let [p, x] = useState(2);
  let m = useCurrentFileKey();
  useEffect(() => {
    async function e() {
      if (o?.imageThumbnail && m && d?.hash !== o.imageThumbnail) {
        x(0);
        let e = o.imageThumbnail;
        let t = (await Mj([e], {
          type: 'figFile',
          fileKey: m
        })).s3_urls[e];
        t && c({
          hash: e,
          url: t
        });
        x(2);
      }
    }
    o ? e() : c(null);
  }, [d?.hash, m, o]);
  let h = async t => {
    try {
      x(1);
      let {
        cmsImage,
        objectUrlSrc
      } = await xi(e, t);
      _(cmsImage);
      c({
        hash: cmsImage.image,
        url: objectUrlSrc
      });
    } catch (e) {
      reportError(_$$e2.CMS, new Error('Error uploading image to CMS'), {
        extra: e
      });
    } finally {
      x(2);
    }
  };
  let g = e => {
    if (p !== 2) return;
    let t = p9(e.files);
    t && h(t);
  };
  let f = e => {
    let t = p9(e.target.files);
    t && (h(t), e.target && (e.target.value = ''));
  };
  let _ = e => {
    let i = [{
      type: 'image',
      hash: e.image,
      height: e.originalImageHeight,
      width: e.originalImageWidth
    }];
    n(t, JSON.stringify(e), i);
  };
  let b = () => {
    n(t, '');
    c(null);
  };
  let y = useRef(null);
  let v = useDispatch();
  let j = `image_detail_modal-${t.id}`;
  let k = _$$kG(j);
  let w = () => {
    v(XE());
  };
  return jsxs(Fragment, {
    children: [jsx('div', {
      className: 'x1d786w4 x1y5e3q9 xvijh9v x1ty9z65 x1n2onr6',
      ref: y,
      children: jsx(mu, {
        backgroundImage: d,
        deleteImage: b,
        imageStatus: p,
        onChange: f,
        onDrop: g,
        recordingKey: generateRecordingKey(r, 'imageUploader'),
        showDeleteButton: !0,
        toggleDetailView: () => {
          if (k.showing) {
            w();
          } else {
            if (!y.current) return;
            let {
              x,
              y
            } = _$$cn(y.current, 240).add(mo);
            v(_$$u7({
              id: j,
              initialX: x,
              initialY: y
            }));
          }
        }
      })
    }), k.showing && jsx(mp, {
      fieldSchemaId: t.id,
      imageUploaderProps: {
        backgroundImage: d,
        imageStatus: p,
        onDrop: g,
        onChange: f,
        deleteImage: b,
        showDeleteButton: !1,
        imageHoverButton: jsx(Button, {
          iconPrefix: jsx(_$$A15, {}),
          recordingKey: generateRecordingKey(r, 'uploadButton'),
          variant: 'primary',
          children: renderI18nText('dakota.image_detail_modal.replace_image')
        })
      },
      initialAltText: o?.altText,
      initialFilename: o?.fileName,
      initialPosition: k.initialPosition,
      onClose: w,
      recordingKey: generateRecordingKey('imageDetailsModal', t.id),
      updateAltText: e => {
        o && _({
          ...o,
          altText: e
        });
      },
      updateFilename: e => {
        o && _({
          ...o,
          fileName: e
        });
      }
    })]
  });
}
function mm(e) {
  return {
    id: e,
    databaseId: e,
    stableId: e,
    fields: [],
    position: null,
    status: null
  };
}
let mg = 'dakota_item_panel--rows--30izv';
function mf({
  item: e,
  collectionId: t,
  fieldSchema: i,
  focusedFieldSchemaId: n,
  value: s,
  onBlur: r,
  recordingKey: d
}) {
  let c = e.id;
  let p = Mo(t);
  let [x, m] = useAtomValueAndSetter(pT(c));
  let h = Xr(pC(c));
  let [g, f] = useAtomValueAndSetter(pI(c));
  let _ = useRef('');
  let b = async (t, n, l) => {
    _.current = l;
    try {
      h(e => function (e, t) {
        if (e.has(t)) return e;
        let i = new Set(e);
        i.add(t);
        return i;
      }(e, n));
      let t = await _$$hl.validateItemData({
        item: e,
        fieldSchema: i,
        newValue: l
      });
      if (l !== _.current) return;
      let a = [];
      t.data?.meta.valid ? h(e => pk(e, n)) : (a = (t.data?.meta.failure_info?.i18n_keys ?? []).map(e => {
        if (e === 'cms_errors.fields.slug_unique') return getI18nString('cms_errors.fields.slug_unique');
      }).filter(e => void 0 !== e), a.length === 0 && (a = t.data?.meta.failure_info?.errors ?? []));
      f(e => ({
        ...e,
        [n]: a
      }));
    } catch (e) {
      if (l !== _.current) return;
      f(e => ({
        ...e,
        [n]: [getI18nString('cms_errors.fields.validation_failed')]
      }));
    }
  };
  let y = useDebouncedCallback(b, 150);
  let v = (e, t, i, n) => {
    let l = {};
    l[i.id] = {
      fieldSchema: i,
      newValue: n
    };
    m(e => ({
      ...e,
      ...l
    }));
    e === _$$_j.SLUG && y(t, j, n);
  };
  let j = i.id;
  let k = (g[j] ?? []).length > 0;
  function w(e, t = {}) {
    i.name === _$$rU.Title && p != null && v(_$$_j.SLUG, c, p, slugify(e));
    let n = i.fieldType;
    if (n === _$$_j.SLUG && (e = slugify(e, {
      stripTrailingHyphens: t.stripSlugLeadingTrailingHyphens,
      stripLeadingHyphens: t.stripSlugLeadingTrailingHyphens
    })), !K5(n)) {
      _$$sD('Unknown field schema type', {
        fieldSchema: i
      });
      return;
    }
    v(n, c, i, e);
  }
  let S = useHandleGenericEvent(d, 'blur', r);
  return jsxs(Fragment, {
    children: [jsx(_$$Y3.Root, {
      className: k ? 'dakota_item_panel--fieldset__hasErrors--Y0QK5' : void 0,
      children: jsx(_$$p5, {
        recordingKey: d,
        id: j,
        autoFocus: n === j,
        type: 'text',
        value: x[j]?.newValue ?? s ?? '',
        onChange: e => {
          w(e, {
            stripSlugLeadingTrailingHyphens: !1
          });
        },
        htmlAttributes: {
          onBlur: S,
          onPaste: e => {
            e.preventDefault();
            w(e.clipboardData.getData('text'), {
              stripSlugLeadingTrailingHyphens: !0
            });
          }
        }
      })
    }), g[j]?.map(e => jsx('div', {
      'data-testid': 'cms-error-container',
      'className': 'dakota_item_panel--errors--H9Iqt',
      'children': e
    }, e))]
  });
}
function mb({
  fieldSchema: e,
  value: t,
  submit: i,
  recordingKey: n
}) {
  return jsx(_$$MO, {
    id: e.id,
    recordingKey: n,
    link: t ? _$$o6(t) : null,
    onLinkChange: t => {
      t && i(e, JSON.stringify(Kd(t)));
    },
    showCMSLinkFields: !1
  });
}
function mv({
  collection: e,
  focusedFieldSchemaId: t,
  itemQuery: i,
  recordingKey: n
}) {
  let s;
  let r = e.id;
  let d = function (e) {
    let t = useAtomWithSubscription(pE(e));
    let i = useAtomWithSubscription(UU);
    return t != null && !(i.size > 1) && i.has(t);
  }(r);
  let [c, u] = useAtomValueAndSetter(pE(r));
  d ? c == null ? (_$$sD('pendingCmsItemId is null'), s = mm(generateUUIDv4())) : s = mm(c) : s = i.item;
  let p = _$$uE(r);
  let [x, m] = useAtomValueAndSetter(pT(s?.id));
  let h = useAtomWithSubscription(pC(s?.id));
  let g = Xr(UU);
  let f = p.find(e => e.fieldType === _$$_j.SLUG);
  let _ = _$$gg(r);
  let b = useRef(!1);
  if (i.status !== 'loaded') {
    return jsx('div', {
      className: mg,
      children: jsx(xU, {
        collectionId: r
      })
    });
  }
  if (s == null) {
    _$$sD('Item is null', {
      itemQuery: i
    });
    return null;
  }
  let y = IR(s?.fields ?? []);
  let j = (e, t, i) => {
    let n = s?.fields?.find(t => t.fieldSchemaId === e.id)?.id;
    d ? m(i => ({
      ...i,
      [e.id]: {
        fieldSchema: e,
        newValue: t
      }
    })) : _$$_Z({
      fieldId: n,
      item: s,
      fieldSchema: e,
      value: t,
      assetsForPublish: i
    });
  };
  let k = e => Object.values(e).map(({
    newValue: e,
    fieldSchema: t,
    assetsForPublish: i
  }) => {
    if (h.has(t.id)) return;
    let n = s.fields.find(e => e.fieldSchemaId === t.id);
    return _$$_Z({
      fieldId: n?.id,
      item: s,
      fieldSchema: t,
      value: e,
      assetsForPublish: i
    });
  });
  let w = () => {
    let {
      pass,
      fail
    } = noop(Object.keys(x), e => !h.has(e));
    let n = Object.fromEntries(pass.map(e => (x[e] == null && _$$sD('pending update is missing', {
      pendingUpdatedFields: x,
      fieldSchemaId: e
    }), [e, x[e]])).filter(isNotNullish));
    let l = Object.fromEntries(fail.map(e => (x[e] == null && _$$sD('pending update is missing', {
      pendingUpdatedFields: x,
      fieldSchemaId: e
    }), [e, x[e]])).filter(isNotNullish));
    f && (d ? n[f.id] && !b.current && (_$$Tj(e, s.id, async e => {
      try {
        await Promise.all(k(n));
        g(new Set([e]));
        u(void 0);
        m(e => ({
          ...Object.fromEntries(Object.entries(e).filter(([e]) => !n[e])),
          ...l
        }));
      } catch (e) {} finally {
        b.current = !1;
      }
    }, _), b.current = !0) : (k(n), m(l)));
  };
  let S = (e, t, i) => {
    let n = {};
    n[e.id] = {
      fieldSchema: e,
      newValue: t,
      assetsForPublish: i
    };
    d ? m(e => ({
      ...e,
      ...n
    })) : k(n);
  };
  let C = e => x[e]?.newValue ?? y[e] ?? '';
  return jsx('div', {
    className: mg,
    children: p.map(i => jsx(x$, {
      id: i.id,
      label: capitalize(i.name),
      children: (() => {
        switch (i.fieldType) {
          case _$$_j.LINK:
            return jsx(mb, {
              recordingKey: generateRecordingKey(n, `inputRow.${i.name}`),
              fieldSchema: i,
              value: C(i.id),
              submit: S
            });
          case _$$_j.IMAGE:
            return jsx(mx, {
              recordingKey: generateRecordingKey(n, `inputRow.${i.name}`),
              collection: e,
              fieldSchema: i,
              currentImageFieldValue: C(i.id),
              submit: S
            });
          case _$$_j.SLUG:
          case _$$_j.PLAIN_TEXT:
            return jsx(mf, {
              recordingKey: generateRecordingKey(n, `inputRow.${i.name}`),
              item: s,
              collectionId: r,
              fieldSchema: i,
              focusedFieldSchemaId: t,
              value: y[i.id] ?? '',
              onBlur: () => w()
            });
          case _$$_j.RICH_TEXT:
            return jsx('div', {
              className: v()(_$$s4.flexGrow1.$, 'dakota_item_panel--rowRichTextEditor--YewDN'),
              children: jsx(xu, {
                id: i.id,
                collection: e,
                value: C(i.id),
                autoFocus: t === i.id,
                onBlur: (e, t) => j(i, e, t)
              })
            });
          case _$$_j.DATE:
            return jsx(mt, {
              fieldSchema: i,
              value: C(i.id),
              submit: S
            });
          default:
            return null;
        }
      })()
    }, `${i.id}-${s.id}`))
  });
}
function mj({
  collection: e,
  itemQuery: t,
  focusedFieldSchemaId: i
}) {
  let n;
  n = useAtomWithSubscription(_$$s3) === PanelType.DAKOTA ? 'connect_mode' : 'properties_panel';
  return jsx(_$$fu, {
    name: 'CMS View',
    properties: {
      source: n
    },
    children: jsx(mv, {
      recordingKey: 'cmsItemFieldsEditor',
      collection: e,
      focusedFieldSchemaId: i,
      itemQuery: t
    })
  });
}
function mk({
  collection: e,
  itemQuery: t,
  focusedFieldSchemaId: i
}) {
  return jsx(mv, {
    recordingKey: 'cmsItemFieldsEditor',
    collection: e,
    focusedFieldSchemaId: i,
    itemQuery: t
  });
}
function mw({
  selection: e
}) {
  let t = useMemo(() => e ? Object.keys(e) : [], [e]);
  let i = _$$a0(t);
  let n = i?.collectionStableId;
  let s = i?.itemStableId;
  let r = _$$G6({
    collectionStableId: n
  });
  let o = _$$H6({
    itemStableId: s,
    collectionStableId: n
  });
  return i && n && s && r.status === 'loaded' && o.status === 'loaded' ? r.collection == null ? (_$$sD('Collection is nullish', {
    selection: e
  }), null) : o.item == null ? (_$$sD('Item is nullish', {
    selection: e
  }), null) : jsx(_$$Zk, {
    children: jsx(mj, {
      collection: r.collection,
      itemQuery: o,
      focusedFieldSchemaId: i.fieldSchemaStableId
    }, i.itemStableId)
  }) : null;
}
let mC = parsePxNumber('300px');
function mT() {
  let [e, t] = useAtomValueAndSetter(UU);
  let i = useAtomWithSubscription(_$$iO);
  let n = Vp(i || '');
  BM(n.data);
  let a = n.data.findIndex(t => e.has(t.id));
  let s = a === n.data.length - 1;
  let r = i => {
    if (e.size === 0) return;
    let l = n.data[i === 'next' ? a + 1 : a - 1];
    l ? t(new Set([l.id])) : t(new Set());
  };
  return jsxs('div', {
    className: 'dakota_table_item_panel--header--6kPjQ',
    children: [jsxs(_$$e10, {
      'variant': 'secondary',
      'aria-label': getI18nString('dakota.table_view.aria_label.navigate_items'),
      'children': [jsx(_$$K2, {
        'disabled': a === 0,
        'onClick': () => {
          r('previous');
        },
        'variant': 'secondary',
        'aria-label': getI18nString('dakota.table_view.aria_label.previous_item'),
        'children': jsx(_$$l0, {})
      }), jsx(_$$K2, {
        'disabled': s,
        'onClick': () => {
          r('next');
        },
        'variant': 'secondary',
        'aria-label': getI18nString('dakota.table_view.aria_label.next_item'),
        'children': jsx(_$$k9, {})
      })]
    }), jsx(_$$K2, {
      'onClick': () => {
        t(new Set());
      },
      'aria-label': getI18nString('dakota.table_view.aria_label.close_editor'),
      'children': jsx(_$$A7, {})
    })]
  });
}
function mI({
  parentContainerWidth: e
}) {
  let [t, i] = useAtomValueAndSetter(_$$rx);
  let n = useAtomWithSubscription(_$$iO);
  let a = useAtomWithSubscription(UU);
  let s = useAtomWithSubscription(_$$dC);
  let r = useAtomWithSubscription(pE(n ?? ''));
  let d = _$$G6({
    collectionStableId: n
  });
  let c = r ?? Array.from(a)[0];
  let u = _$$H6({
    collectionStableId: n,
    itemStableId: c
  });
  if (!(n && c) || d.status !== 'loaded') return null;
  let {
    collection
  } = d;
  return collection == null ? (_$$sD('Collection is null', {
    selectedCollectionId: n
  }), null) : jsxs(_$$wV, {
    className: 'dakota_table_item_panel--itemPanel--MvyPa',
    onResize: t => {
      i(t = clamp(t, mC, e));
    },
    defaultSize: 480,
    size: t,
    side: 'left',
    children: [jsx(mT, {}), jsx(_$$P2, {
      className: _$$s4.overflowHidden.hFull.wFull.$,
      children: jsx(mk, {
        collection,
        itemQuery: u,
        focusedFieldSchemaId: s
      }, n)
    })]
  });
}
let mE = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M19 15.526V18c0 .026-.01.17-.292.42-.28.248-.744.518-1.402.765-1.31.49-3.185.815-5.306.815s-3.997-.324-5.306-.815c-.658-.247-1.121-.517-1.402-.765C5.01 18.17 5 18.025 5 18v-2.474c.415.279.942.517 1.539.716C7.959 16.716 9.89 17 12 17s4.04-.284 5.461-.758c.597-.199 1.124-.437 1.539-.716M19 14c0 .126-.076.326-.399.58-.317.25-.806.497-1.456.713-1.294.432-3.113.707-5.145.707s-3.851-.275-5.145-.707c-.65-.216-1.14-.463-1.456-.713-.322-.253-.399-.453-.399-.579v-2.475c.415.279.942.517 1.539.716C7.959 12.716 9.89 13 12 13s4.04-.284 5.461-.758c.597-.199 1.124-.437 1.539-.716zM5.399 10.58C5.076 10.326 5 10.126 5 10V7.526c.415.278.942.517 1.539.716C7.959 8.716 9.89 9 12 9s4.04-.284 5.461-.758c.597-.199 1.124-.438 1.539-.716V10c0 .127-.077.326-.399.58-.317.25-.806.496-1.456.712-1.294.432-3.113.707-5.145.707s-3.851-.275-5.145-.707c-.65-.216-1.14-.463-1.456-.713M20 6v12c0 1.657-3.582 3-8 3s-8-1.343-8-3V6c0-1.657 3.582-3 8-3s8 1.343 8 3M5 6.001V6c0-.026.01-.17.292-.42.28-.248.744-.518 1.402-.765C8.004 4.325 9.88 4 12 4s3.997.324 5.306.815c.658.247 1.121.517 1.402.766.282.25.292.393.292.419 0 .126-.076.326-.399.58-.317.25-.806.497-1.456.713C15.851 7.725 14.032 8 12 8s-3.851-.275-5.145-.707c-.65-.216-1.14-.463-1.456-.713C5.077 6.327 5 6.127 5 6.001',
      clipRule: 'evenodd'
    })
  });
});
let mN = memo(e => {
  return _$$O5() ? jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M18.015 15.44c.126-.504.843-.504.97 0l.315 1.26 1.26.316c.505.126.504.843 0 .97l-1.26.315-.316 1.26c-.126.504-.843.504-.97 0L17.7 18.3l-1.258-.316c-.505-.126-.505-.843 0-.97l1.258-.315zM9.01 6.5H17l.203.012A2 2 0 0 1 19 8.5V14a.5.5 0 0 1-.5.5H10V17h4.5a.5.5 0 0 1 0 1H7l-.205-.01a2 2 0 0 1-1.785-1.785L5 16.001V10.5a.5.5 0 0 1 .5-.5H9V7.5l-.1-.01A.5.5 0 0 1 9 6.5zM6 16a1 1 0 0 0 1 1h2v-2.5H6zm0-2.5h3V11H6zm4 0h8V11h-8zM5 10V8.465zm5 0h8V8.5a1 1 0 0 0-1-1h-7zM5.18 5.282c.083-.333.556-.333.64 0l.28 1.12 1.119.28c.333.083.333.556 0 .64l-1.12.28-.28 1.119c-.083.333-.556.333-.64 0L4.9 7.6l-1.12-.28c-.333-.083-.333-.556 0-.64L4.9 6.4z'
    })
  }) : jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M18.015 14.44c.126-.505.843-.505.97 0l.315 1.26 1.26.315c.505.126.505.844 0 .97l-1.26.315-.316 1.26c-.126.505-.843.505-.97 0L17.7 17.3l-1.26-.315c-.504-.126-.504-.844 0-.97l1.26-.315zm-.812-7.43A2 2 0 0 1 19 8.999v3.491l.001.01a.5.5 0 0 1-1 0v-1.501h-8v2h7l.1.01a.5.5 0 0 1-.1.99H10v2h4.5l.1.01a.5.5 0 0 1-.1.99H7l-.204-.01a2 2 0 0 1-1.785-1.786L5 14.999v-4.5a.5.5 0 0 1 .5-.5H9V8.001l-.1-.01A.5.5 0 0 1 9 7v-.002h8zM6 14.999a1 1 0 0 0 1 1h2v-2H6zm0-2h3v-2H6zm-.999-3V8.962zm5 0h8v-1a1 1 0 0 0-1-1h-7zm-4.82-4.22c.083-.333.556-.333.64 0L6.1 6.9l1.119.28c.333.083.333.556 0 .64l-1.12.28-.28 1.119c-.083.333-.556.333-.64 0l-.28-1.12-1.119-.28c-.333-.083-.333-.556 0-.64l1.12-.28z'
    })
  });
});
function mz(e) {
  let [t, i] = useState(null);
  let [n, s] = useState(!1);
  let r = useRef(null);
  let o = useRef(null);
  let d = useRef(null);
  let c = useCallback(e => {
    i(null);
    e && (d.current = e, d.current.select());
  }, []);
  let u = useHandleChangeEvent(e.recordingKey, 'change', t => {
    e.readOnly || i(t.currentTarget?.value);
  });
  let p = useHandleKeyboardEvent(e.recordingKey, 'keydown', t => {
    if (!e.readOnly && !n) {
      if (t.keyCode === Uz.ESCAPE) {
        e.stopRenaming?.(!1);
      } else if (t.keyCode === Uz.ENTER) {
        e.stopRenaming?.(!0, t.currentTarget.value, e.value);
      } else {
        if (t.keyCode !== Uz.TAB) return SKIP_RECORDING;
        t.preventDefault();
        e.stopRenaming?.(!0, t.currentTarget.value, e.value);
      }
    }
  });
  let x = useHandleGenericEvent(e.recordingKey, 'blur', t => {
    e.readOnly || e.stopRenaming?.(!0, t.currentTarget.value, e.value);
  });
  let {
    dragItem,
    position
  } = _$$h1(() => ({
    type: 'collection-field-schema-item',
    item: {
      id: e.id,
      position: e.position,
      value: e.value
    },
    element: r,
    canDrag: !!e.reorderItem,
    onDrop: t => {
      e.reorderItem && t.dragItem.position && t.dropItem.position && e.reorderItem(t.dragItem.id, t.dropItem.id, t.position);
    }
  }));
  let g = useMemo(() => {
    let e = r.current;
    if (e && position) return position === _$$Nz.BEFORE ? e.offsetTop : e.offsetTop + e.offsetHeight;
  }, [position]);
  let f = !!e.Icon && jsx('div', {
    className: 'x1cnu6j2',
    children: e.Icon
  });
  let _ = jsxs(Fragment, {
    children: [f, jsx('div', {
      ..._$$Ay.props(mB.content, mB.ellipsis, !e.meta && mB.fullSpan),
      children: !e.isRenaming && e.value
    })]
  });
  return jsxs(Fragment, {
    children: [g && jsx('div', {
      ..._$$Ay.props(mB.divider(g)),
      'aria-hidden': !0
    }), jsx(_$$b9, {
      ..._$$Ay.props(mB.row, (e.selected || dragItem?.id === e.id) && mB.active, !e.selected && !dragItem && mB.hover, e.disabled && mB.disabled),
      onClick: t => {
        e.disabled || (t.stopPropagation(), o.current && o.current.contains(t.target) || e.onClick());
      },
      onDoubleClick: t => {
        !e.disabled && (t.stopPropagation(), !e.readOnly) && !(o.current && o.current.contains(t.target)) && e.startRenaming?.(e.id);
      },
      onContextMenu: e.onContextMenu,
      tag: 'div',
      ref: r,
      children: e.isRenaming ? jsxs(Fragment, {
        children: [!e.indented && f, jsx(_$$ks, {
          className: 'x1x55y9o xl9wa41 x1iyjqo2 xh8yej3 xeuugli x4zv5z4 xvra0b2 xdpxx8g',
          ref: c,
          autoCapitalize: 'off',
          autoCorrect: 'off',
          onBlur: x,
          onChange: u,
          onCompositionEnd: () => s(!1),
          onCompositionStart: () => s(!0),
          onKeyDown: p,
          spellCheck: !1,
          value: t !== null ? t : e.value
        })]
      }) : jsxs(Fragment, {
        children: [jsx('div', {
          ref: o,
          className: 'x1c4558c',
          children: e.rowPrefix
        }), e.indented ? jsx('div', {
          className: 'xrvj5dj xjokdfc xq2y068 x1y36oru x1fdo2jl',
          children: _
        }) : _, e.meta ? jsx('div', {
          className: 'xxiv3zo x87ps6o',
          children: e.meta
        }) : null]
      })
    })]
  });
}
let mB = {
  row: {
    'display': 'xrvj5dj',
    'gridTemplateColumns': 'xqqheac',
    'gridTemplateRows': 'x1tu4anv',
    'gridTemplateAreas': 'x1fw1t1k',
    'position': 'x1n2onr6',
    'height': 'x10w6t97',
    'alignItems': 'x6s0dn4',
    'zIndex': 'x1ja2u2z',
    'width': 'xh8yej3',
    'boxSizing': 'x9f619',
    'paddingRight': 'xnuq7ks',
    'paddingInlineStart': null,
    'paddingInlineEnd': null,
    '::after_content': 'x1s928wv',
    '::after_height': 'x5vykd1',
    '::after_borderRadius': 'x1iz56wj',
    '::after_borderStartStartRadius': null,
    '::after_borderStartEndRadius': null,
    '::after_borderEndStartRadius': null,
    '::after_borderEndEndRadius': null,
    '::after_borderTopLeftRadius': null,
    '::after_borderTopRightRadius': null,
    '::after_borderBottomLeftRadius': null,
    '::after_borderBottomRightRadius': null,
    '::after_backgroundColor': 'xyhc2n1',
    '::after_position': 'x1j6awrg',
    '::after_left': 'x1jl5xyf',
    '::after_right': 'x14cqbmr',
    '::after_insetInlineStart': null,
    '::after_insetInlineEnd': null,
    '::after_top': 'x1kj8dem',
    '::after_zIndex': 'xi4xitw',
    ':hover_::after_backgroundColor': 'x1be9ii2',
    '$$css': !0
  },
  active: {
    '::after_backgroundColor': 'x1en27d1',
    ':hover_::after_backgroundColor': 'x1yodtwh',
    '$$css': !0
  },
  hover: {
    ':hover_::after_backgroundColor': 'x1be9ii2',
    '$$css': !0
  },
  content: {
    gridArea: 'x1fdo2jl',
    gridRow: null,
    gridRowStart: null,
    gridRowEnd: null,
    gridColumn: null,
    gridColumnStart: null,
    gridColumnEnd: null,
    userSelect: 'x87ps6o',
    $$css: !0
  },
  fullSpan: {
    gridColumnStart: 'x1x55y9o',
    gridColumnEnd: 'xl9wa41',
    $$css: !0
  },
  divider: e => [{
    width: 'xh8yej3',
    height: 'x36qwtl',
    display: 'x78zum5',
    zIndex: 'xbqvh2t',
    backgroundColor: 'xmt2vk1',
    position: 'x10l6tqk',
    top: 'x13vifvy',
    right: 'x3m8u43',
    left: 'xu96u03',
    insetInlineStart: null,
    insetInlineEnd: null,
    pointerEvents: 'x47corl',
    transform: 'x1uosm7l',
    $$css: !0
  }, {
    '--transform': `translateY(${e}px)`
  }],
  ellipsis: {
    overflowX: 'x6ikm8r',
    textOverflow: 'xlyipyv',
    whiteSpace: 'xuxw1ft',
    $$css: !0
  },
  disabled: {
    opacity: 'xbyyjgo',
    pointerEvents: 'x47corl',
    $$css: !0
  }
};
let mK = 'dakota_field_editor--newFieldDropdownItemIcon--XV5Go';
function mH({
  createField: e
}) {
  let {
    Dropdown,
    toggleDropdown,
    dropdownTargetRef,
    isDropdownShown
  } = _$$B6('cms_create_collection_fields_dropdown');
  let s = [{
    icon: jsx('div', {
      className: mK,
      children: jsx(_$$I3, {})
    }),
    displayText: getI18nString('dakota.collection_field_editor.create_dropdown.plain_text'),
    callback: () => {
      e(_$$_j.PLAIN_TEXT);
    }
  }, {
    icon: jsx('div', {
      className: mK,
      children: jsx(_$$G8, {})
    }),
    displayText: getI18nString('dakota.collection_field_editor.create_dropdown.rich_text'),
    callback: () => {
      e(_$$_j.RICH_TEXT);
    }
  }, {
    icon: jsx('div', {
      className: mK,
      children: jsx(_$$N0, {})
    }),
    displayText: getI18nString('dakota.collection_field_editor.create_dropdown.link'),
    callback: () => {
      e(_$$_j.LINK);
    }
  }, ...(getFeatureFlags().dakota_field_image ? [{
    icon: jsx('div', {
      className: mK,
      children: jsx(_$$_9, {})
    }),
    displayText: getI18nString('dakota.collection_field_editor.create_dropdown.image'),
    callback: () => {
      e(_$$_j.IMAGE);
    }
  }] : []), ...(getFeatureFlags().dakota_field_date_time ? [{
    icon: jsx('div', {
      className: mK,
      children: jsx(_$$p0, {})
    }),
    displayText: getI18nString('dakota.collection_field_editor.create_dropdown.date_time'),
    callback: () => {
      e(_$$_j.DATE);
    }
  }] : [])];
  return jsx(Fragment, {
    children: jsxs('div', {
      ref: dropdownTargetRef,
      className: v()(_$$s4.wFull.$),
      children: [jsx(ButtonWide, {
        'variant': 'secondary',
        'onClick': toggleDropdown,
        'recordingKey': 'newDakotaCollection',
        'aria-label': getI18nString('dakota.collection_field_editor.add_field'),
        'htmlAttributes': {
          'data-tooltip': getI18nString('dakota.collection_field_editor.add_field'),
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip-show-above': !0
        },
        'iconPrefix': jsx(_$$x5, {}),
        'children': renderI18nText('dakota.collection_field_editor.add_field')
      }), isDropdownShown && jsx(Dropdown, {
        items: s,
        minWidth: 160,
        lean: 'center',
        showPoint: !1,
        displayOverTarget: !0
      })]
    })
  });
}
function mq({
  children: e
}) {
  return jsx(Fragment, {
    children: e
  });
}
function mX({
  fieldSchema: e,
  renameField: t
}) {
  let [i, n] = useState('idle');
  let [s, r] = useState(e.name);
  useEffect(() => {
    r(e.name);
  }, [e.name]);
  let o = useCallback(e => {
    e && e.select();
  }, []);
  let d = i === 'renaming' ? s : e.name;
  return jsx(Ad, {
    label: jsx('span', {
      className: _$$s4.textBodyMedium.selectNone.colorTextSecondary.$,
      children: renderI18nText('dakota.collection_field_editor.property.name')
    }),
    alwaysShowLabel: !0,
    input: jsx(_$$jT, {
      autoFocus: !0,
      ref: o,
      value: d,
      onFocus: () => n('renaming'),
      onBlur: () => {
        n('idle');
        t(!0, e.id, s, e.name);
      },
      disabled: Object.values(_$$rU).includes(e.name),
      onChange: e => r(e.currentTarget.value),
      onKeyDown: e => {
        e.key === 'Enter' && (e.currentTarget.blur(), e.preventDefault());
      }
    })
  });
}
function mV({
  fieldSchema: e,
  updateFieldProperties: t
}) {
  let {
    dakota_field_include_time
  } = getFeatureFlags();
  if (!dakota_field_include_time) return null;
  let n = e.properties?.dateType || _$$ap.PLAIN_DATE;
  let a = n === _$$ap.PLAIN_DATE_TIME || n === _$$ap.ZONED_DATE_TIME;
  return jsx(Ad, {
    label: jsx('span', {
      className: _$$s4.textBodyMedium.selectNone.colorTextSecondary.$,
      children: renderI18nText('dakota.collection_field_editor.property.include_time')
    }),
    alwaysShowLabel: !0,
    input: jsx(_$$d5, {
      checked: a,
      onChange: i => {
        let n = i ? _$$ap.PLAIN_DATE_TIME : _$$ap.PLAIN_DATE;
        t(e.id, {
          dateType: n
        });
      },
      label: jsx(HiddenLabel, {
        children: renderI18nText('dakota.collection_field_editor.property.include_time')
      })
    })
  });
}
function mG({
  fieldSchema: e,
  renameField: t,
  updateFieldProperties: i
}) {
  let n = [jsx(mX, {
    fieldSchema: e,
    renameField: t
  }, 'name')];
  e.fieldType === _$$_j.DATE && n.push(jsx(mV, {
    fieldSchema: e,
    updateFieldProperties: i
  }, 'datetime'));
  return jsxs('div', {
    className: _$$s4.flex.flexColumn.$,
    children: [n, e.name === _$$rU.Slug && jsx('div', {
      className: 'dakota_field_editor--slugInfoPadding--SBNCU',
      children: jsx('span', {
        className: 'dakota_field_editor--slugInfoLabel--eXoHv',
        children: renderI18nText('dakota.collection_field_editor.slug_detail_panel.default_value_created_from_title', {
          title_field_name: _$$rU.Title
        })
      })
    })]
  });
}
let mW = registerModal(({
  open: e,
  onClose: t,
  collectionId: i,
  fileKey: n,
  collectionName: r
}) => {
  let d = useModalManager({
    open: e,
    onClose: ({
      source: e
    }) => {
      e === 'button' && b(hideModal());
    }
  });
  let [c, p] = useAtomValueAndSetter(_$$lT);
  let [x, m] = useState(!1);
  let h = useRef(null);
  let g = useRef(null);
  let f = _$$gL(i ?? '').data;
  let _ = r ?? f?.name;
  let b = useDispatch();
  let y = Xr(_$$iO);
  let {
    collectionFields,
    createField,
    renameField,
    deleteField,
    submitFieldChanges,
    canEditField,
    reorderField,
    duplicateField,
    canSubmit,
    updateFieldProperties
  } = $h(f);
  let [O, F] = useAtomValueAndSetter(_$$lf);
  useEffect(() => {
    O === null && collectionFields.length > 0 && F(collectionFields[0]?.id ?? null);
  }, [O, collectionFields, F]);
  let M = BK(Zn);
  let D = e => t => {
    t.stopPropagation();
    t.preventDefault();
    let {
      clientX,
      clientY
    } = t;
    canEditField(e.id) && M.show({
      data: {
        clientX,
        clientY,
        deleteField: () => deleteField(e),
        duplicateField: () => duplicateField(e.id)
      }
    });
  };
  _$$wY(g, () => {
    g.current && h.current && m(h.current.scrollHeight > h.current.clientHeight);
  });
  let z = useCallback(async () => {
    if (i != null || _ == null) {
      submitFieldChanges();
    } else if (n) {
      p(!0);
      let e = null;
      try {
        e = await Qw({
          id: null,
          name: _,
          description: '',
          fileKey: n,
          fields: collectionFields
        });
      } catch (t) {
        let e = t instanceof Error ? t.message : String(t);
        _$$sD('failed to create collection', {
          fileKey: n,
          message: e
        });
        b(FlashActions.error(getI18nString('dakota.collection_field_editor.create_collection.error'), 5e3));
      }
      e != null && y(e.id);
    } else {
      _$$sD('fileKey not null invariant violated in CollectionFieldEditorModal');
    }
    p(!1);
    b(hideModal());
  }, [collectionFields, i, _, b, n, p, y, submitFieldChanges]);
  let B = collectionFields.find(e => e.id === O);
  return jsx(_$$fu, {
    name: 'Dakota Collection Field Editor',
    children: jsx(ModalRootComponent, {
      manager: d,
      width: 'lg',
      children: jsxs(_$$vo, {
        children: [jsx(Y9, {
          children: jsx(_$$hE, {
            children: _
          })
        }), jsx(_$$nB, {
          padding: 0,
          children: jsxs('div', {
            className: v()(_$$s4.flex.flexRow.$),
            children: [jsxs('div', {
              className: v()(_$$s4.flex.flexColumn.$, 'dakota_field_editor--fieldList--IquMu'),
              children: [jsx(_$$P2, {
                scrollContainerRef: h,
                scrollContentRef: g,
                className: v()(_$$s4.flex.flex1.$),
                children: jsx('div', {
                  className: _$$s4.flex.flexColumn.relative.pt4.pb2.$,
                  children: collectionFields.map(e => jsx(mz, {
                    Icon: _$$Tu(e.fieldType),
                    id: e.id,
                    isRenaming: !1,
                    onClick: () => {
                      F(e.id);
                    },
                    onContextMenu: D(e),
                    position: e.position,
                    readOnly: !0,
                    recordingKey: 'rename-cms-collection-field',
                    reorderItem: reorderField,
                    selected: e.id === O,
                    value: e.name
                  }, e.id))
                })
              }), jsx('div', {
                className: v()(_$$s4.flex.itemsCenter.justifyBetween.p8.borderBox.wFull.$, x && 'dakota_field_editor--overscroll--opa1C'),
                children: jsx(mH, {
                  createField
                })
              })]
            }), jsx('div', {
              className: _$$s4.flex.flexColumn.flex1.pt8.pr8.$,
              children: jsx(mq, {
                children: O && B && jsx(mG, {
                  fieldSchema: B,
                  renameField,
                  updateFieldProperties
                })
              }, O ?? 'no-field-selected')
            })]
          })
        }), jsxs(_$$wi, {
          children: [!1, jsxs(_$$jk, {
            children: [jsx(Button, {
              disabled: c,
              variant: 'secondary',
              onClick: t,
              children: i ? renderI18nText('dakota.collection_field_editor.cancel') : renderI18nText('dakota.collection_field_editor.back')
            }), jsx(Button, {
              disabled: !canSubmit || c,
              variant: 'primary',
              onClick: z,
              children: i ? renderI18nText('dakota.collection_field_editor.done') : renderI18nText('dakota.collection_field_editor.create_collection')
            })]
          })]
        })]
      })
    })
  });
}, 'CollectionFieldEditorModal', ModalSupportsBackground.YES);
let mY = registerModal(e => {
  let t = useDispatch();
  let i = useModalManager({
    open: e.open,
    onClose: ({
      source: t
    }) => {
      t === 'button' && e.onClose();
    }
  });
  let n = setupAutofocusHandler();
  let [r, o] = useState(e.placeholder);
  return jsx(_$$fu, {
    name: 'CMS New Collection Modal',
    children: jsx(ModalRootComponent, {
      manager: i,
      width: 'md',
      children: jsxs(ModalFormContents, {
        onSubmit: () => {
          t(showModalHandler({
            type: mW,
            data: {
              collectionName: r,
              fileKey: e.fileKey
            }
          }));
        },
        children: [jsx(Y9, {
          children: jsx(_$$hE, {
            children: renderI18nText('dakota.new_collection_modal.new_collection')
          })
        }), jsx(_$$nB, {
          children: jsxs(Label, {
            htmlFor: 'collectionName',
            children: [renderI18nText('dakota.new_collection_modal.name'), jsx('br', {}), jsx(_$$jT, {
              value: r,
              onChange: e => o(e.target.value || ''),
              ref: n,
              name: 'collectionName'
            })]
          })
        }), jsx(_$$wi, {
          children: jsx(_$$jk, {
            children: jsx(Button, {
              disabled: !r || !r.trim(),
              type: 'submit',
              children: renderI18nText('dakota.new_collection_modal.next')
            })
          })
        })]
      })
    })
  });
}, 'CMSNewCollectionModal', ModalSupportsBackground.YES);
function mJ() {
  let e = useDispatch();
  let t = useCurrentFileKey();
  let i = _$$c$(t);
  let n = (i.data?.length ?? 0) + 1;
  return () => e(showModalHandler({
    type: mY,
    data: {
      placeholder: `Collection ${n}`,
      fileKey: t
    }
  }));
}
function m0(e, t) {
  return e[1].fieldType === _$$_j.TITLE ? -1 : t[1].fieldType === _$$_j.TITLE ? 1 : e[1].fieldType === _$$_j.SLUG ? -1 : t[1].fieldType === _$$_j.SLUG ? 1 : e[1].index - t[1].index;
}
function m1(e) {
  switch (e) {
    case _$$_j.SLUG:
      return renderI18nText('dakota.import_csv_modal.field_type.slug');
    case _$$_j.TITLE:
      return renderI18nText('dakota.import_csv_modal.field_type.title');
    case _$$_j.RICH_TEXT:
      return renderI18nText('dakota.import_csv_modal.field_type.rich_text');
    case _$$_j.PLAIN_TEXT:
      return renderI18nText('dakota.import_csv_modal.field_type.plain_text');
    case _$$_j.IMAGE:
      return renderI18nText('dakota.import_csv_modal.field_type.image');
    case _$$_j.LINK:
      return renderI18nText('dakota.import_csv_modal.field_type.link');
    default:
      throw new Error('Unexpected fieldType');
  }
}
async function m5({
  rows: e,
  fieldSchemasByIndex: t,
  collection: i
}) {
  return await Promise.all(e.map(async e => ({
    fields: (await Promise.all(e.map(async (e, n) => {
      let l = t[n];
      return l ? {
        fieldSchemaId: l.id,
        value: await m4(e, l.fieldType, i)
      } : null;
    }))).filter(e => e !== null)
  })));
}
async function m2({
  items: e,
  collection: t
}) {
  return (await _$$hl.importItems({
    collection: t,
    items: e
  })).data.meta.count;
}
async function m4(e, t, i) {
  try {
    switch (t) {
      case _$$_j.RICH_TEXT:
        return JSON.stringify(function (e) {
          let t = createHeadlessEditor({
            namespace: 'dakota-csv-parser',
            nodes: pz
          });
          if (t.setEditorState(t.parseEditorState(xr)), !e || e.trim().length === 0) return t.getEditorState().toJSON();
          if (!m3(e)) {
            t.update(() => {
              $convertFromMarkdownString(e, xo);
            }, {
              discrete: !0
            });
            return t.getEditorState().toJSON();
          }
          let i = new DOMParser().parseFromString(e, 'text/html');
          t.update(() => {
            let e = $getRoot();
            e.clear();
            let n = $generateNodesFromDOM(t, i);
            n && n.length > 0 && n.forEach(t => e.append(t));
          }, {
            discrete: !0
          });
          return t.getEditorState().toJSON();
        }(e));
      case _$$_j.IMAGE:
        let n = await m8(e);
        let {
          cmsImage
        } = await xi(i, n);
        return JSON.stringify(cmsImage);
      case _$$_j.LINK:
        return JSON.stringify({
          url: e,
          openInNewTab: !0
        });
      case _$$_j.PLAIN_TEXT:
      case _$$_j.SLUG:
      case _$$_j.TITLE:
      default:
        return e;
    }
  } catch (n) {
    _$$sD('Failed to format value from CSV', {
      value: e,
      fieldType: t,
      collectionId: i.id
    });
    return e;
  }
}
function m3(e) {
  return /<[a-z][\\s]*>/i.test(e);
}
async function m8(e) {
  try {
    let t = await fetch(e);
    if (!t.ok) throw new Error(`Failed to fetch image: ${t.status} ${t.statusText}`);
    let i = await t.blob();
    let n = m7(e) || i.type || 'application/octet-stream';
    let l = function (e) {
      try {
        let {
          pathname
        } = new URL(e);
        let i = pathname.split('/');
        let n = i[i.length - 1];
        if (n && n.length > 0) return n;
        return null;
      } catch (e) {
        return null;
      }
    }(e) || `image-${Date.now()}`;
    return new File([i], l, {
      type: n
    });
  } catch (e) {
    console.error('Error converting image URL to File:', e);
    return e;
  }
}
let m6 = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
  bmp: 'image/bmp',
  webp: 'image/webp',
  svg: 'image/svg+xml',
  ico: 'image/x-icon',
  tif: 'image/tiff',
  tiff: 'image/tiff',
  heic: 'image/heic'
};
function m7(e) {
  let t = function (e) {
    try {
      let {
        pathname
      } = new URL(e);
      let i = pathname.split('.');
      let n = i[i.length - 1];
      if (n && n.length > 0) return n.toLowerCase();
      return null;
    } catch (e) {
      return null;
    }
  }(e);
  return t && m6[t] || null;
}
function m9(e) {
  try {
    new URL(e);
    return !0;
  } catch (e) {
    return !1;
  }
}
function ht({
  collectionName: e,
  fields: t,
  onChangeCollectionName: i,
  updateHeaderFieldMeta: n
}) {
  return jsxs('div', {
    ..._$$xk(_$$A16.flex, _$$A16.flexColumn, _$$A16.flex1, _$$A16.gap24, _$$A16.p24),
    children: [jsxs('div', {
      ..._$$xk(_$$A16.flex, _$$A16.flexColumn, _$$A16.gap4),
      children: [jsx(Label, {
        htmlFor: 'collectionName',
        children: renderI18nText('dakota.new_collection_modal.name')
      }), jsx(_$$jT, {
        name: 'collectionName',
        placeholder: 'Collection name',
        value: e,
        onChange: e => i(e.target.value)
      })]
    }), jsxs('div', {
      ..._$$xk(_$$A16.flex, _$$A16.flexColumn, _$$A16.gap8),
      children: [jsx(Label, {
        htmlFor: 'collectionFields',
        children: renderI18nText('dakota.import_csv_modal.labels.fields')
      }), jsxs('div', {
        className: 'xrvj5dj xc26acl x6s0dn4 xl56j7k x18573h1 xkh65bq',
        children: [jsx('span', {
          children: jsx(Checkbox, {
            checked: !0,
            label: jsx(HiddenLabel, {
              children: renderI18nText('dakota.import_csv_modal.labels.included')
            })
          })
        }), jsx('span', {
          ..._$$xk(_$$A16.textBodyMedium, _$$A16.colorTextSecondary),
          children: renderI18nText('dakota.import_csv_modal.labels.type')
        }), jsx('span', {
          ..._$$xk(_$$A16.textBodyMedium, _$$A16.colorTextSecondary),
          children: renderI18nText('dakota.import_csv_modal.labels.name')
        }), Object.entries(t).sort(m0).map(([e, t]) => jsx(hi, {
          meta: t,
          onUpdateMeta: t => n(e, t)
        }, e))]
      })]
    })]
  });
}
function hi({
  meta: e,
  onUpdateMeta: t
}) {
  return jsxs(Fragment, {
    children: [jsx(Checkbox, {
      label: jsx(HiddenLabel, {
        children: getI18nString('dakota.import_csv_modal.labels.included')
      }),
      checked: e.included,
      disabled: e.required,
      onChange: e => t({
        included: e
      })
    }), e.required ? jsx('div', {
      ..._$$xk(_$$A16.textBodyMedium, _$$A16.colorText, _$$A16.px8),
      children: m1(e.fieldType)
    }) : jsx(hn, {
      value: e.fieldType,
      isDisabled: e.required || !e.included,
      onChange: e => t({
        fieldType: e
      })
    }), jsx(_$$jT, {
      placeholder: 'Field name',
      disabled: e.required || !e.included,
      value: e.name,
      onChange: e => t({
        name: e.target.value
      })
    })]
  });
}
function hn({
  value: e,
  isDisabled: t,
  onChange: i
}) {
  return jsxs(_$$bL6, {
    value: e,
    onChange: i,
    children: [jsx(_$$l7, {
      disabled: t,
      label: jsx(HiddenLabel, {
        children: renderI18nText('dakota.import_csv_modal.labels.type')
      }),
      width: 'fill'
    }), jsxs(_$$mc2, {
      children: [jsx(_$$c$5, {
        value: 'plain_text',
        children: m1(_$$_j.PLAIN_TEXT)
      }), jsx(_$$c$5, {
        value: 'rich_text',
        children: m1(_$$_j.RICH_TEXT)
      }), jsx(_$$c$5, {
        value: 'image',
        children: m1(_$$_j.IMAGE)
      }), jsx(_$$c$5, {
        value: 'link',
        children: m1(_$$_j.LINK)
      })]
    })]
  });
}
let hs = ha;
function hr({
  onImportSuccess: e,
  onImportFailure: t
}) {
  let [i, n] = useState(!1);
  let s = useCallback(() => {
    n(!1);
    t();
  }, [t]);
  let r = useCallback(t => {
    n(!1);
    e(t);
  }, [e]);
  let o = function ({
    onImportFailure: e
  }) {
    return useCallback(t => {
      e();
      VisualBellActions.enqueue({
        message: t,
        error: !0
      });
    }, [e]);
  }({
    onImportFailure: s
  });
  let d = function ({
    onImportSuccess: e,
    importFileError: t
  }) {
    return useCallback(i => {
      i.type === 'text/csv' ? hs().parse(i, {
        header: !1,
        dynamicTyping: !1,
        skipEmptyLines: !0,
        complete: t => {
          e({
            name: function (e) {
              let t = e.split('-').map(e => e.trim());
              return t[t.length - 1].replace(/\.csv$/, '');
            }(i.name),
            headers: t.data[0] || [],
            rows: t.data.slice(1),
            size: i.size
          });
        },
        error: () => {
          t(getI18nString('dakota.import_csv_modal.failed_to_import'));
        }
      }) : (console.error('Unsupported file type:', i.type), t(getI18nString('dakota.import_csv_modal.unsupported_file_type', {
        fileType: i.type
      })));
    }, [e, t]);
  }({
    onImportSuccess: r,
    importFileError: o
  });
  let c = function ({
    setIsLoading: e,
    importFileError: t,
    importLocalFile: i
  }) {
    return useCallback(() => {
      let n = document.createElement('input');
      function l() {
        e(!1);
        n.remove();
      }
      n.type = 'file';
      n.multiple = !1;
      n.accept = '.csv';
      n.style.display = 'none';
      n.onblur = l;
      n.oncancel = l;
      n.onchange = l => {
        e(!0);
        let a = l.target?.files;
        let s = a?.[0];
        s ? i(s) : t(getI18nString('dakota.import_csv_modal.no_valid_file'));
        n.remove();
      };
      document.body.appendChild(n);
      n.click();
    }, [t, i, e]);
  }({
    setIsLoading: n,
    importFileError: o,
    importLocalFile: d
  });
  return jsx(Button, {
    disabled: i,
    variant: 'primary',
    onClick: c,
    children: i ? jsx(_$$k7, {}) : renderI18nText('dakota.import_csv_modal.select_file_button')
  });
}
function ho({
  onImportSuccess: e,
  onImportFailure: t
}) {
  let [i, n] = useState(null);
  return jsx('div', {
    ..._$$xk(_$$A16.flex, _$$A16.flexColumn, _$$A16.itemsCenter, _$$A16.justifyCenter, _$$A16.flex1, _$$A16.p24),
    children: jsxs('div', {
      children: [jsx('h1', {
        ..._$$xk(_$$A16.textBodyMediumStrong, _$$A16.colorText),
        children: renderI18nText('dakota.import_csv_modal.import_panel.title')
      }), jsx('p', {
        ..._$$xk(_$$A16.textBodyMedium, _$$A16.colorTextSecondary, _$$A16.mt4),
        children: renderI18nText('dakota.import_csv_modal.import_panel.description')
      }), jsxs('div', {
        className: 'xbsl7fq xmkeg23 x7z60cl x19y5rnk x1v8gsql x1dipnxa xehsoiq x1buy44e x78zum5 xdt5ytf x1i71x30 x6s0dn4 xl56j7k x2b8uid',
        children: [i ? jsxs(Fragment, {
          children: [jsx(_$$C8, {
            style: {
              '--color-icon': 'var(--color-icon-danger)'
            }
          }), jsxs('div', {
            children: [jsx('p', {
              ..._$$xk(_$$A16.textBodyMediumStrong, _$$A16.colorText),
              children: i.title
            }), jsx('p', {
              ..._$$xk(_$$A16.textBodyMedium, _$$A16.colorTextSecondary),
              children: i.description
            })]
          })]
        }) : jsxs(Fragment, {
          children: [jsx(_$$A15, {}), jsx('p', {
            ..._$$xk(_$$A16.textBodyMedium, _$$A16.colorTextSecondary),
            children: renderI18nText('dakota.import_csv_modal.import_panel.instructions')
          })]
        }), jsx(hr, {
          onImportFailure: t,
          onImportSuccess: t => {
            let i = function ({
              headers: e,
              rows: t,
              size: i
            }) {
              if (i >= 2097152) {
                return {
                  title: renderI18nText('dakota.import_csv_modal.validations.file_too_large.title'),
                  description: renderI18nText('dakota.import_csv_modal.validations.file_too_large.description')
                };
              }
              let n = e.map(e => e.trim().toLowerCase());
              if (!n.includes('title')) {
                return {
                  title: renderI18nText('dakota.import_csv_modal.validations.missing_title_header.title'),
                  description: renderI18nText('dakota.import_csv_modal.validations.missing_title_header.description')
                };
              }
              if (!n.includes('slug')) {
                return {
                  title: renderI18nText('dakota.import_csv_modal.validations.missing_slug_header.title'),
                  description: renderI18nText('dakota.import_csv_modal.validations.missing_slug_header.description')
                };
              }
              if (n.includes('')) {
                return {
                  title: renderI18nText('dakota.import_csv_modal.validations.empty_headers.title'),
                  description: renderI18nText('dakota.import_csv_modal.validations.empty_headers.description')
                };
              }
              if ([...new Set(n)].length !== n.length) {
                return {
                  title: renderI18nText('dakota.import_csv_modal.validations.duplicate_headers.title'),
                  description: renderI18nText('dakota.import_csv_modal.validations.duplicate_headers.description')
                };
              }
              if (t.length === 0) {
                return {
                  title: renderI18nText('dakota.import_csv_modal.validations.missing_row_values.title'),
                  description: renderI18nText('dakota.import_csv_modal.validations.missing_row_values.description')
                };
              }
              if (t[0].length !== e.length) {
                return {
                  title: renderI18nText('dakota.import_csv_modal.validations.missing_headers.title'),
                  description: renderI18nText('dakota.import_csv_modal.validations.missing_headers.description')
                };
              }
              let l = n.indexOf('slug');
              return t.some(e => (e[l] || '').trim() === '') ? {
                title: renderI18nText('dakota.import_csv_modal.validations.missing_slug_value.title'),
                description: renderI18nText('dakota.import_csv_modal.validations.missing_slug_value.description')
              } : null;
            }(t);
            i ? n(i) : (n(null), e(t));
          }
        })]
      })]
    })
  });
}
let hd = registerModal(e => {
  let t = useDispatch();
  let i = useModalManager({
    ...e,
    onClose: ({
      source: e
    }) => {
      e !== 'outside' && t(hideModal());
    }
  });
  let [n, r] = useState(null);
  let [o, d] = useState('');
  let [c, p] = useState({});
  return jsx(_$$fu, {
    name: 'Dakota CSV Import',
    children: jsx(ModalRootComponent, {
      manager: i,
      width: 'lg',
      children: jsxs(_$$vo, {
        children: [jsx(Y9, {
          children: jsx(_$$hE, {
            children: renderI18nText('dakota.import_csv_modal.title')
          })
        }), jsx(_$$nB, {
          padding: 0,
          children: jsxs('div', {
            ..._$$xk(_$$A16.flex, _$$A16.flexRow),
            children: [jsx('div', {
              ..._$$xk(_$$A16.flex, _$$A16.flexColumn, _$$A16.br1),
              children: jsxs('div', {
                ..._$$xk(_$$A16.flex, _$$A16.flexColumn, _$$A16.p8, _$$A16.gap4),
                children: [jsx(hc, {
                  step: 1,
                  label: renderI18nText('dakota.import_csv_modal.steps.add_file'),
                  isSelected: n === null
                }, 'add_file'), jsx(hc, {
                  step: 2,
                  label: renderI18nText('dakota.import_csv_modal.steps.set_up_fields'),
                  isSelected: n !== null
                }, 'set_up_fields')]
              })
            }), n ? jsx(ht, {
              collectionName: o,
              fields: c,
              onChangeCollectionName: d,
              updateHeaderFieldMeta: (e, t) => {
                p(i => ({
                  ...i,
                  [e]: {
                    ...i[e],
                    ...t
                  }
                }));
              }
            }) : jsx(ho, {
              onImportFailure: () => {},
              onImportSuccess: e => {
                r(e);
                d(e.name);
                p(function ({
                  rows: e,
                  headers: t
                }) {
                  let i = function ({
                    rows: e,
                    headers: t
                  }) {
                    return Object.fromEntries(Object.entries(e.reduce((e, i) => (i.forEach((i, n) => {
                      let l = t[n];
                      l && i && i.trim().length !== 0 && (e[l] = e[l] || [], e[l].push({
                        value: i,
                        type: function (e, t) {
                          return e.toLowerCase() === 'slug' ? _$$_j.SLUG : e.toLowerCase() === 'title' ? _$$_j.TITLE : m3(t) ? _$$_j.RICH_TEXT : m9(t) && m7(t) ? _$$_j.IMAGE : m9(t) ? _$$_j.LINK : _$$_j.PLAIN_TEXT;
                        }(l, i)
                      }));
                    }), e), {})).map(([e, t]) => {
                      let i;
                      return [e, (i = [...new Set(t.map(e => e.type))]).length === 0 ? _$$_j.PLAIN_TEXT : i.length === 1 ? i[0] : i.includes(_$$_j.PLAIN_TEXT) ? _$$_j.PLAIN_TEXT : i.every(e => e === _$$_j.IMAGE || e === _$$_j.LINK) ? _$$_j.LINK : _$$_j.PLAIN_TEXT];
                    }));
                  }({
                    rows: e,
                    headers: t
                  });
                  return t.reduce((e, t, n) => {
                    let l = i[t] || _$$_j.PLAIN_TEXT;
                    let a = l === _$$_j.SLUG || l === _$$_j.TITLE;
                    return {
                      ...e,
                      [t]: {
                        name: t,
                        fieldType: l,
                        required: a,
                        included: !0,
                        index: n
                      }
                    };
                  }, {});
                }(e));
              }
            })]
          })
        }), jsx(_$$wi, {
          children: jsxs(_$$jk, {
            children: [jsx(Button, {
              variant: 'secondary',
              onClick: e.onClose,
              children: renderI18nText('dakota.import_csv_modal.buttons.cancel')
            }), jsx(Button, {
              variant: 'primary',
              disabled: !n,
              onClick: () => {
                if (!n) return;
                let t = Object.values(c).sort((e, t) => e.index - t.index);
                e.onSubmit({
                  name: o,
                  fieldSchemasByIndex: t.map(e => {
                    let {
                      name,
                      fieldType,
                      index,
                      required,
                      included
                    } = e;
                    return included ? {
                      id: generateUUIDv4(),
                      name,
                      fieldType,
                      required,
                      position: function (e) {
                        let t = _$$TZ;
                        for (let i = 0; i < e; i++) t = _$$e1(t);
                        return t;
                      }(index),
                      properties: {}
                    } : null;
                  }),
                  rows: n.rows
                });
                e.onClose();
              },
              children: renderI18nText('dakota.import_csv_modal.buttons.import')
            })]
          })
        })]
      })
    })
  });
}, 'ImportCsvModal', ModalSupportsBackground.YES);
function hc({
  step: e,
  label: t,
  isSelected: i
}) {
  return jsxs('div', {
    ..._$$xk(hu.importStepContainer, i ? hu.importStepContainerActive : null),
    children: [jsx('span', {
      ..._$$xk(hu.importStepNumber, i ? hu.importStepNumberActive : hu.importStepNumberInactive),
      children: e
    }), jsx('span', {
      ..._$$xk(_$$A16.colorText, _$$A16.textBodyMedium),
      children: t
    })]
  });
}
let hu = {
  importStepContainer: {
    paddingLeft: 'x8rdmch',
    paddingRight: 'xctkrei',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    paddingTop: 'x1gskr33',
    paddingBottom: 'x1ihwiht',
    borderRadius: 'x1ax54dn',
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
    gap: 'x1nfngrj',
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  importStepContainerActive: {
    backgroundColor: 'x1ghs5zp',
    $$css: !0
  },
  importStepNumber: {
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
    borderColor: 'x7z60cl',
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
    display: 'x3nfvp2',
    justifyContent: 'xl56j7k',
    height: 'xlup9mm',
    width: 'x1kky2od',
    $$css: !0
  },
  importStepNumberActive: {
    borderColor: 'x1fa9rx7',
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    color: 'x1akne3o',
    $$css: !0
  },
  importStepNumberInactive: {
    borderColor: 'x7z60cl',
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    color: 'x1n0bwc9',
    $$css: !0
  }
};
function hp() {
  let e = useDispatch();
  let t = function () {
    let e = useCurrentFileKey();
    return async function ({
      name: t,
      fieldSchemasByIndex: i,
      rows: n
    }) {
      return e && n.length !== 0 ? await Qw({
        id: null,
        name: t,
        description: '',
        fileKey: e,
        fields: i.filter(e => !!e)
      }) : null;
    };
  }();
  let i = Xr(_$$iO);
  let n = trackDefinedFileEventWithStore();
  let l = t => {
    reportError(_$$e2.CMS, new Error('Failed to import CSV'), {
      extra: {
        error: t.message
      }
    });
    e(VisualBellActions.enqueue({
      type: 'cms_import_csv',
      message: 'Failed to import',
      icon: VisualBellIcon.EXCLAMATION
    }));
  };
  return () => e(showModalHandler({
    type: hd,
    data: {
      onSubmit: async a => {
        try {
          e(VisualBellActions.enqueue({
            type: 'cms_import_csv',
            message: 'Importing data...',
            icon: VisualBellIcon.SPINNER
          }));
          let l = await t(a);
          let s = l?.id;
          if (!s) {
            e(VisualBellActions.enqueue({
              type: 'cms_import_csv',
              message: 'Failed to import',
              icon: VisualBellIcon.EXCLAMATION
            }));
            return;
          }
          i(s);
          e(VisualBellActions.enqueue({
            type: 'cms_import_csv',
            message: 'Processing data...',
            icon: VisualBellIcon.SPINNER
          }));
          let r = await m5({
            rows: a.rows,
            fieldSchemasByIndex: a.fieldSchemasByIndex,
            collection: l
          });
          await m2({
            items: r,
            collection: l
          });
          n('cms.collection_csv_import', {
            collection_id: s,
            num_items: r.length
          });
          e(VisualBellActions.enqueue({
            type: 'cms_import_csv',
            message: 'Done!',
            icon: VisualBellIcon.CHECK_WITH_CIRCLE
          }));
        } catch (e) {
          l(e);
        }
      }
    }
  }));
}
class hm {
  constructor(e) {
    this.processChunk = async e => {
      switch (e.type) {
        case 'collection':
          return await this._createCollection(e);
        case 'field':
          return await this._createFieldSchema(e);
        case 'item':
          return this._createItem(e);
      }
    };
    this.finish = () => {
      this._flushItemQueue();
    };
    this._createCollection = async ({
      collectionName: e
    }) => {
      if (!this.fileKey) return 'Invalid filekey when creating collection';
      let t = {
        id: this.getCollectionId(),
        name: e,
        description: null,
        fileKey: this.fileKey,
        fields: null
      };
      let i = await Qw(t);
      return i == null ? 'Failed to create collection' : (this._collection = i, null);
    };
    this._aiFieldTypeToFieldType = e => {
      switch (e) {
        case 'PLAIN_TEXT':
          return _$$_j.PLAIN_TEXT;
        case 'SLUG':
          return _$$_j.SLUG;
        case 'IMAGE':
          return _$$_j.IMAGE;
        case 'RICH_TEXT':
          return _$$_j.RICH_TEXT;
        case 'LINK':
          return _$$_j.LINK;
        default:
          return null;
      }
    };
    this._createFieldSchema = async e => {
      if (!this.fileKey) return 'Invalid filekey when creating collection';
      let t = this.#e();
      if (t == null) return 'Collection has not been created yet';
      let i = this._aiFieldTypeToFieldType(e.fieldType);
      if (!i) return 'Invalid field type';
      let n = await A2.createFieldSchema({
        collection: t,
        attributes: {
          name: e.name,
          required: Object.values(_$$rU).includes(e.name),
          position: this._currentFieldPos,
          fieldType: i,
          properties: {}
        }
      });
      return (this._currentFieldPos = _$$e1(this._currentFieldPos), n.data) ? (this._fieldNameToIdMap[e.name] = n.data.meta.id, this._fieldNameToTypeMap[e.name] = i, null) : 'Failed to create field';
    };
    this._setItemFieldData = (e, t, i, n) => {
      let l;
      switch (i) {
        case _$$_j.PLAIN_TEXT:
        case _$$_j.SLUG:
        case _$$_j.TITLE:
          l = n;
          break;
        case _$$_j.IMAGE:
          return;
        case _$$_j.RICH_TEXT:
          let a = createHeadlessEditor({
            namespace: 'dakota-ai-munger',
            nodes: pz
          });
          a.setEditorState(a.parseEditorState(xr));
          a.update(() => {
            $convertFromMarkdownString(n, xo);
          }, {
            discrete: !0
          });
          l = JSON.stringify(a.getEditorState());
          break;
        case _$$_j.LINK:
          l = JSON.stringify({
            url: n,
            openInNewTab: !0
          });
          break;
        case _$$_j.DATE:
          l = n;
      }
      let s = generateUUIDv4();
      _$$hl.updateSingleItemData({
        fieldId: s,
        item: {
          databaseId: e
        },
        fieldSchema: {
          databaseId: t
        },
        newValue: l
      });
    };
    this._flushItemQueue = () => {
      if (this.#e() == null) return 'Collection has not been created yet';
      let e = [];
      this._itemQueue.forEach(t => {
        let i = this._fieldNameToIdMap[t.fieldName];
        let n = this._fieldNameToTypeMap[t.fieldName];
        let l = this._itemToIdMap[t.collectionItemId];
        if (!n || !i || !l) {
          e.push(t);
          return;
        }
        this._setItemFieldData(l, i, n, t.value);
      });
      this._itemQueue = e;
    };
    this._createItem = e => {
      let t = this.#e();
      if (t == null) return 'Collection has not been created yet';
      let i = this._itemToIdMap[e.collectionItemId];
      if (i) {
        let t = this._fieldNameToIdMap[e.fieldName];
        let n = this._fieldNameToTypeMap[e.fieldName];
        i !== 'LOADING' && t && n ? this._setItemFieldData(i, t, n, e.value) : this._itemQueue.push(e);
      } else {
        let i = generateUUIDv4();
        this._itemToIdMap[e.collectionItemId] = 'LOADING';
        _$$hl.createItem({
          collection: t,
          itemId: i
        }).then(t => {
          if (!t.data) return 'Failed to create item';
          this._itemToIdMap[e.collectionItemId] = t.data.meta.id;
          this._itemQueue.push(e);
          this._flushItemQueue();
        });
      }
      return null;
    };
    this.fileKey = e;
    this._collection = {
      id: generateUUIDv4(),
      idOnly: !0
    };
    this._currentFieldPos = _$$TZ;
    this._fieldNameToIdMap = {};
    this._fieldNameToTypeMap = {};
    this._itemToIdMap = {};
    this._itemQueue = [];
  }
  getCollectionId() {
    return this._collection.id;
  }
  #e() {
    return 'idOnly' in this._collection ? null : this._collection;
  }
}
async function hg(e) {
  return await _$$Ay2.shared.streamCMSCollection({
    prompt: e
  }, {
    ..._$$Ay3()
  });
}
function hf() {
  let e = Xr(pb);
  return jsxs('div', {
    className: 'x1n2onr6 x78zum5 xdt5ytf xl56j7k x6s0dn4 xsag5q8 x167g77z xemv814 x1ma9mv9 x17hqfcz xyny9ap',
    children: [jsx('div', {
      className: 'x78zum5 x6s0dn4 xl56j7k x1mh6rdz x19y5rnk x1v8gsql',
      children: jsx(mN, {})
    }), jsx('div', {
      children: renderI18nText('dakota.ai.generate_collection')
    }), jsx('div', {
      className: 'x10l6tqk x3m8u43 x13vifvy',
      children: jsx(_$$K2, {
        'onClick': () => {
          e(!1);
        },
        'aria-label': getI18nString('dakota.ai.close'),
        'children': jsx(_$$A7, {})
      })
    })]
  });
}
function h_({
  suggestion: e,
  setPlaceholder: t,
  setValue: i,
  resetPlaceholder: n,
  prompt: a
}) {
  return jsx('button', {
    className: 'x1mxnbhz x1bamp8i x78zum5 x6s0dn4 xl56j7k xv2f06h',
    onMouseEnter: () => t(a),
    onMouseLeave: n,
    onClick: e => {
      e.preventDefault();
      i(a);
    },
    children: jsx('div', {
      className: 'x1n0bwc9 xf67zum x17akokd x1qxcl5b xclx6tv',
      children: e
    })
  });
}
function hb() {
  let e = useDispatch();
  let [t, i] = useState('');
  let [n, r] = useState(!1);
  let d = getI18nString('dakota.ai.prompt_placeholder');
  let [c, x] = useState(d);
  let m = useCurrentFileKey();
  let h = Xr(pb);
  let g = Xr(_$$iO);
  let f = Xr(_$$ou);
  let _ = t.length > 0;
  let b = () => x(d);
  let y = _ && !n;
  let v = PE();
  let j = useSelector(e => getProductType(e.selectedView, null));
  let k = _$$a5();
  if (!m || !v) return null;
  let w = {
    source: 'cms',
    action: 'generate_cms_collection',
    file_key: m,
    product_type: j
  };
  let S = k ? renderI18nText('dakota.ai.beta_badge') : getI18nString('qa.ai');
  return jsxs('form', {
    onSubmit: async i => {
      if (i.preventDefault(), !_) return;
      trackEventAnalytics(_$$j9, w, {
        mlEvent: !0
      });
      r(!0);
      e(VisualBellActions.enqueue({
        type: 'cms_ai_collection_creation',
        message: getI18nString('dakota.ai.visual_bell.working'),
        icon: VisualBellIcon.SPINNER
      }));
      let n = new hm(m);
      let l = n.getCollectionId();
      g(l);
      f(e => new Set(e).add(l));
      let a = (await hg(t)).getReader();
      for (h(!1);;) {
        let {
          done,
          value
        } = await a.read();
        if (done) break;
        await n.processChunk(value);
      }
      n.finish();
      r(!1);
      h(!1);
      trackEventAnalytics(G5, w, {
        mlEvent: !0
      });
      e(VisualBellActions.enqueue({
        type: 'cms_ai_collection_creation',
        message: getI18nString('dakota.ai.visual_bell.done'),
        icon: VisualBellIcon.CHECK_WITH_CIRCLE
      }));
    },
    className: 'x1n2onr6 x78zum5 xdt5ytf x1qughib x1edz59j',
    children: [jsxs('div', {
      className: 'x14cutqn x78zum5 x1q0g3np x7a106z x1qughib x1iyjqo2',
      children: [jsx('textarea', {
        value: t,
        onChange: e => i(e.target.value || ''),
        placeholder: c,
        className: 'xtt52l0 x11g6tue x1iyjqo2 xkh2ocl x17akokd x1qxcl5b xclx6tv xno9bf3 x1akne3o xuggh6c'
      }), jsx(_$$E6, {
        variant: 'inactiveOutline',
        children: S
      })]
    }), jsxs('div', {
      ..._$$Ay.props(hv.footer, _ && hv.hidden),
      children: [jsx(h_, {
        suggestion: getI18nString('dakota.ai.suggestion.blog_suggestion'),
        setPlaceholder: x,
        resetPlaceholder: b,
        setValue: i,
        prompt: getI18nString('dakota.ai.suggestion.blog_prompt')
      }), jsx(h_, {
        suggestion: getI18nString('dakota.ai.suggestion.job_posting_suggestion'),
        setPlaceholder: x,
        resetPlaceholder: b,
        setValue: i,
        prompt: getI18nString('dakota.ai.suggestion.job_posting_prompt')
      }), jsx(h_, {
        suggestion: getI18nString('dakota.ai.suggestion.product_listing_suggestion'),
        setPlaceholder: x,
        resetPlaceholder: b,
        setValue: i,
        prompt: getI18nString('dakota.ai.suggestion.product_listing_prompt')
      })]
    }), jsx('div', {
      ..._$$Ay.props(hv.submitButton, y && hv.submitButtonEnabled, !y && hv.submitButtonDisabled),
      children: jsx(_$$K2, {
        'aria-label': getI18nString('dakota.ai.generate_collection'),
        'disabled': !y,
        'type': 'submit',
        'children': jsx(_$$W5, {
          className: 'xwa2v1s'
        })
      })
    })]
  });
}
function hy() {
  return jsxs('div', {
    className: 'xqb5aye x5yr21d x98rzlu',
    children: [jsx(hf, {}), jsx('div', {
      className: 'x78zum5 x13a6bvl xdt5ytf x1o8i5o8 x9h44rk xtuhdl6',
      children: jsx(hb, {})
    })]
  });
}
let hv = {
  hidden: {
    display: 'x1s85apg',
    $$css: !0
  },
  footer: {
    padding: 'x1ua4r6m',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    display: 'x78zum5',
    flexDirection: 'x1q0g3np',
    alignItems: 'x6s0dn4',
    gap: 'x167g77z',
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  submitButton: {
    position: 'x10l6tqk',
    borderRadius: 'x16rqkct',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    right: 'x1xui8nh',
    insetInlineStart: null,
    insetInlineEnd: null,
    bottom: 'xzf9hrv',
    $$css: !0
  },
  submitButtonEnabled: {
    backgroundColor: 'xu5wzci',
    $$css: !0
  },
  submitButtonDisabled: {
    backgroundColor: 'xgbcquw',
    $$css: !0
  }
};
let hj = 'dakota_view_empty_state--dakotaEmptyStateButton--uOQGY';
let hk = 'dakota_view_empty_state--dakotaEmptyStateGenerateButtonContents--QE5Gd';
function hw() {
  let e = mJ();
  let t = Xr(pb);
  let i = hp();
  let n = PE();
  return jsxs(Fragment, {
    children: [jsx('div', {
      className: 'dakota_view_empty_state--dakotaIconHeader--DAjh0',
      children: jsx(mE, {})
    }), jsx('div', {
      className: 'dakota_view_empty_state--dakotaEmptyStateText--FYj3A',
      children: n ? renderI18nText('sites.side_rail.cms_no_collections_ai_enabled') : renderI18nText('sites.side_rail.cms_no_collections_ai_disabled')
    }), jsxs('div', {
      className: 'dakota_view_empty_state--dakotaEmptyStateButtonContainer--InjD9',
      children: [jsx('div', {
        className: hj,
        children: jsx(ButtonWide, {
          variant: 'primary',
          onClick: t => {
            t.stopPropagation();
            e();
          },
          children: renderI18nText('sites.side_rail.add_collection')
        })
      }), n && jsx('div', {
        className: hj,
        children: jsx(ButtonWide, {
          variant: 'secondary',
          onClick: e => {
            e.stopPropagation();
            t(!0);
          },
          children: jsxs('span', {
            className: hk,
            children: [jsx(mN, {}), renderI18nText('sites.side_rail.generate_collection')]
          })
        })
      }), getFeatureFlags().dakota_import_csv && jsx('div', {
        className: hj,
        children: jsx(ButtonWide, {
          variant: 'secondary',
          onClick: e => {
            e.stopPropagation();
            i();
          },
          children: jsxs('span', {
            className: hk,
            children: [jsx(_$$R8, {}), renderI18nText('sites.side_rail.import_from_csv')]
          })
        })
      })]
    })]
  });
}
function hS() {
  let e = useAtomWithSubscription(pb);
  let t = PE();
  return jsx('div', {
    className: 'dakota_view_empty_state--dakotaEmptyStateContainer---1nRn',
    children: e && t ? jsx(hy, {}) : jsx('div', {
      'className': 'dakota_view_empty_state--dakotaEmptyStateContents--quk7T',
      'data-testid': 'dakota-empty-state',
      'children': jsx(hw, {})
    })
  });
}
function hE() {
  FJ(_$$m6, '_blank');
}
function hN(e) {
  return jsx(_$$Cf, {
    targetRect: e.targetRect,
    closeDropdown: e.onClose,
    children: jsx(_$$J, {
      mode: 'dark',
      children: jsxs('div', {
        className: 'x78zum5 xdt5ytf x6s0dn4 xl56j7k xqyf9gi',
        children: [jsxs('div', {
          className: 'x78zum5 xdt5ytf x6s0dn4 xl56j7k x1gskr33 x3t71xm x13dej2s xdmjnt8 x2b8uid',
          children: [jsx('div', {
            className: 'x6xwguf xz16r55 x1ah0xmj',
            children: getI18nString('dakota.alpha_cta.cms_is_still_under_wraps')
          }), jsx('div', {
            className: 'xz16r55',
            children: getI18nString('dakota.alpha_cta.be_careful_when_others_can_see_your_screen_and_only_share_feedback_below')
          })]
        }), jsx('div', {
          className: 'x4ipri6 x1ef8nbk xh8yej3 x5yr21d'
        }), jsx(Button, {
          variant: 'primary',
          onClick: hE,
          children: getI18nString('dakota.alpha_cta.share_feedback')
        })]
      })
    })
  });
}
function hR() {
  let e = useRef(null);
  let [t, i] = useState(!1);
  return jsxs('div', {
    ref: e,
    children: [jsx(Ex, {
      className: 'x1yf7rl7 x1htgra6',
      text: getI18nString('dakota.alpha_cta.alpha'),
      color: zE.DEFAULT,
      size: _$$vj.SMALL,
      onClick: () => i(e => !e)
    }), e.current && t && jsx(hN, {
      targetRect: e.current.getBoundingClientRect(),
      onClose: () => i(!1)
    })]
  });
}
function hA(e) {
  return jsxs('div', {
    className: 'x78zum5 x6s0dn4 x1qughib x13dej2s x1nfngrj x98rzlu',
    children: [jsx(hR, {}), e.children]
  });
}
function hL({
  isCollectionListLoading: e
}) {
  let t = useCurrentFileKey();
  let i = useAtomWithSubscription(_$$iO);
  let {
    collection
  } = _$$G6({
    collectionStableId: i
  });
  return t ? i ? collection == null ? null : jsx(hO, {
    collection,
    fileKey: t,
    recordingKey: 'cmsTableHeaderWithCollection'
  }) : jsx(hP, {
    title: e ? '' : getI18nString('dakota.table_view.header.default_title')
  }) : (reportError(_$$e2.CMS, new Error('fileKey not found in DakotaTableViewHeader')), null);
}
function hP({
  title: e
}) {
  return jsx(nH.Header, {
    title: e,
    dataTestId: 'dakota-view-header',
    children: jsx(hA, {
      children: jsx(_$$v4, {})
    })
  });
}
function hO({
  collection: e,
  fileKey: t,
  recordingKey: i
}) {
  let n = useDispatch();
  let a = _$$c$(t).data;
  let r = a?.find(t => t.id === e.id);
  let d = pL(r?.name ?? '', 'header', e.id);
  let c = Xr(UU);
  let p = Xr(pE(e.id));
  return jsx(nH.Header, {
    title: d,
    children: jsx(hA, {
      children: jsxs('div', {
        className: 'x78zum5 x6s0dn4 x1nfngrj',
        children: [jsx(Button, {
          recordingKey: generateRecordingKey(i, 'newItemButton'),
          iconPrefix: jsx(_$$x5, {}),
          variant: 'secondary',
          onClick: () => {
            let e = generateUUIDv4();
            p(e);
            c(new Set([e]));
          },
          children: renderI18nText('dakota.table_view.header.new_item')
        }), jsx(Button, {
          recordingKey: generateRecordingKey(i, 'editFieldsButton'),
          iconPrefix: jsx(_$$I4, {}),
          variant: 'secondary',
          onClick() {
            r && n(showModalHandler({
              type: mW,
              data: {
                collectionId: r.id
              }
            }));
          },
          children: renderI18nText('dakota.table_view.header.edit_fields')
        }), jsx(_$$v4, {})]
      })
    })
  });
}
function hF() {
  let e;
  let t = useAtomWithSubscription(p_);
  let i = useAtomWithSubscription(pb);
  let n = useAtomWithSubscription(_$$iO);
  let s = useCurrentFileKey();
  let {
    status,
    data
  } = _$$c$(s);
  let u = useAtomWithSubscription(UU);
  let p = useRef(null);
  let x = _$$wY(p)?.width;
  let m = _$$b2();
  let h = useMemo(() => {
    let e = data && data.length > 0;
    return status !== 'loading' && !n && !e || i;
  }, [status, n, i, data]);
  switch (t) {
    case pf.CONNECT:
      e = null;
      break;
    case pf.EDIT:
      let g = m ? jsx(Fragment, {
        children: h ? jsx('div', {
          className: 'dakota--dakotaEmptyStateContainer--vFBVu',
          children: jsx(hS, {})
        }) : jsx(xR, {})
      }) : jsx(xR, {});
      e = jsxs(nH, {
        children: [jsx(hL, {
          isCollectionListLoading: status === 'loading'
        }), jsxs('div', {
          className: v()(_$$s4.relative.wFull.hFull.flex.$, Dm),
          ref: p,
          children: [g, u.size === 1 && jsx(mI, {
            parentContainerWidth: x ?? 0
          })]
        })]
      });
      break;
    default:
      e = null;
      noop(t);
  }
  return jsx(_$$fu, {
    name: 'CMS View',
    properties: {
      source: 'cms_tab'
    },
    children: e
  });
}
function h0(e) {
  let {
    renamingNodeGuid,
    startRenamingNode,
    stopRenamingNode
  } = e;
  let d = useDispatch();
  let c = A$();
  let p = useSelector(e => e.versionHistory);
  let x = useSelector(e => !e.mirror.appModel.isReadOnly && e.mirror.appModel.topLevelMode !== ViewType.HISTORY);
  let m = !x;
  let {
    windowInnerHeight
  } = _$$l4();
  let [_, y] = useAtomValueAndSetter(_$$Yu);
  let [v, j] = useAtomValueAndSetter(_$$o7);
  let {
    topLevelObjectRowHeight
  } = useContext(_$$y0);
  let [S, C] = useAtomValueAndSetter(_$$Zr);
  let {
    layerCount,
    componentCount,
    interactionCount,
    buildCodeComponentRows,
    buildCodeLayerRows,
    buildCodeInteractionsRows
  } = function () {
    let e = useAtomWithSubscription(AssetAtomMap[PrimaryWorkflowEnum.CODE_FILE].local);
    let t = useAtomWithSubscription(AssetAtomMap[PrimaryWorkflowEnum.CODE_COMPONENT].local);
    let i = _$$wA2((e, t) => Object.values(t).filter(t => {
      let i = e.get(t.localGuid);
      return !!i && !i.isSoftDeleted;
    }).map(e => e.localGuid), t);
    let {
      codeComponentRows,
      codeLayerRows,
      codeInteractionRows,
      filePathCounts,
      visibleCodeNodeGuids
    } = useMemo(() => {
      let t = Object.values(e).filter(h4);
      let i = [];
      let n = [];
      let l = [];
      let a = {};
      for (let e of t) {
        let t = getSingletonSceneGraph().get(e.localGuid);
        if (!t || t.codeFilePath && !t.isEntrypointCodeFile) continue;
        a[t.codeFileFullPathWithoutScheme] = (a[t.codeFileFullPathWithoutScheme] || 0) + 1;
        let s = _$$nt(t, e.assetId);
        t.isLayerLikeCodeNode ? n.push({
          file: t,
          node: s
        }) : s.isCodeBehavior ? l.push({
          file: t,
          node: s
        }) : i.push({
          file: t,
          node: s
        });
      }
      return {
        codeComponentRows: i,
        codeLayerRows: n,
        codeInteractionRows: l,
        filePathCounts: a,
        visibleCodeNodeGuids: []
      };
    }, [e, i]);
    let p = _$$wA2((e, t) => {
      let i = [];
      for (let n of t) {
        let t = e.get(n);
        t && i.push(t.name);
      }
      return i;
    }, visibleCodeNodeGuids);
    let x = useMemo(() => [...codeComponentRows].sort((e, t) => e.node.name.localeCompare(t.node.name)), [codeComponentRows]);
    let m = useMemo(() => [...codeLayerRows].sort((e, t) => e.node.name.localeCompare(t.node.name)), [codeLayerRows]);
    let f = useMemo(() => [...codeInteractionRows].sort((e, t) => e.node.name.localeCompare(t.node.name)), [codeInteractionRows]);
    let {
      topLevelObjectRowHeight: _topLevelObjectRowHeight
    } = useContext(_$$y0);
    let b = getObservableValue(AppStateTsApi?.codeSelection().fullscreenCodeNodeIds, []);
    let y = useMemo(() => b[0] ? getSingletonSceneGraph().get(b[0])?.exportedFromCodeFile?.guid ?? b[0] : null, [b]);
    let v = useCallback(e => {
      let t = {
        rowData: [],
        topByGuid: {},
        leftByGuid: {},
        heightByGuid: {},
        sectionById: {},
        totalHeight: 0
      };
      let i = 0;
      e.forEach((e, n) => {
        if (!e) return;
        let l = _topLevelObjectRowHeight * i;
        let a = (filePathCounts[e.file.codeFileFullPathWithoutScheme] ?? 0) > 1;
        t.rowData.push({
          rowType: 'object',
          level: 0,
          height: _topLevelObjectRowHeight,
          guid: e.node.guid,
          isExpanded: !1,
          isTemporarilyExpanded: !1,
          hasChildren: !1,
          isDescendantOfSymbol: !1,
          isDescendantOfInstanceExcludingSlotSublayers: !1,
          isDescendantOfModule: !1,
          prevNodeGuid: null,
          nextNodeGuid: null,
          recordingKey: `codeComponentsList.row.${n}`,
          top: l,
          isSelected: y === e.file.guid,
          ignoreAncestorSelection: !0,
          hasWarning: a,
          warningMessage: a ? getI18nString('sites.code_components.code_file_name_warning') : void 0
        });
        t.topByGuid[e.node.guid] = l;
        t.heightByGuid[e.node.guid] = _topLevelObjectRowHeight;
        t.totalHeight += _topLevelObjectRowHeight;
        i++;
      });
      return t;
    }, [_topLevelObjectRowHeight, y, filePathCounts, p, i]);
    return useMemo(() => ({
      componentCount: x.length,
      layerCount: m.length,
      interactionCount: f.length,
      buildCodeComponentRows: () => v(x),
      buildCodeLayerRows: () => v(m),
      buildCodeInteractionsRows: () => v(f)
    }), [v, x, m, f]);
  }();
  let P = Xr(_$$s3);
  let O = e => {
    let t = getSingletonSceneGraph().get(e);
    t && _$$xB(t);
  };
  let F = (e, t) => {
    let i = getSingletonSceneGraph().get(e);
    if (!i) return;
    let {
      clientX,
      clientY
    } = t;
    d(_$$j2({
      type: _$$jQ,
      data: {
        clientX,
        clientY,
        isLayerLike: i.isLayerLikeCodeNode,
        isInteraction: i.isCodeBehavior,
        deleteItem: () => {
          _$$l.user('delete-code-component', () => {
            let t = getSingletonSceneGraph().get(e);
            if (t?.isCodeFile) Fullscreen.deleteCodeFile(e);else if (t?.isCodeComponent && t.exportedFromCodeFile) Fullscreen.deleteCodeFile(t.exportedFromCodeFile.guid);else if (t?.isCodeInstance && t.backingCodeComponent && t.backingCodeComponent.exportedFromCodeFile) Fullscreen.deleteCodeFile(t.backingCodeComponent.exportedFromCodeFile.guid);else throw new Error(`Invalid node type for deletion: ${t?.type}`);
            fullscreenValue.triggerAction('commit');
          });
        },
        renameItem: () => {
          fullscreenValue.fromFullscreen.trigger('startRenamingNode', {
            nodeId: e
          });
        },
        selectOnCanvas: () => {
          _$$l.user('select-code-layer-on-canvas', () => {
            P(PanelType.FILE);
            i && (Fullscreen?.panToNode(e, !0), fullscreenValue.triggerAction('commit'));
          });
        }
      }
    }));
  };
  let M = Math.min(topLevelObjectRowHeight * componentCount + 8, Math.round(0.5 * (windowInnerHeight - parsePxInt(MGP) - _$$uF2)));
  return jsxs('div', {
    className: 'code_components_list--codeComponentsPanelContent--5nEHr',
    children: [jsx(h5, {
      isOpen: _,
      onToggle: () => {
        m || y(!_);
      },
      fileInEditableState: x
    }), _ && componentCount > 0 && jsx('div', {
      style: {
        height: M
      },
      children: jsx(_$$X6, {
        currentPage: c,
        customRowBuilder: buildCodeComponentRows,
        hideCanvasDropTargets: !0,
        hideRowActions: !0,
        ignoreRightClickForSelection: !0,
        isReadOnly: !0,
        onRowContextMenu: F,
        onSelectionUpdated: O,
        panelType: _$$g$.CodeComponent,
        recordingKey: 'codeComponentsList',
        renamingGuid: renamingNodeGuid,
        startRenaming: startRenamingNode,
        stopRenaming: stopRenamingNode,
        thumbnailGuid: null,
        topNodeProperties: null,
        versionHistory: p,
        width: e.width
      })
    }), getFeatureFlags().prototype_code_presets_creation && jsxs(Fragment, {
      children: [jsx(h2, {
        isOpen: S,
        onToggle: () => {
          m || C(!S);
        },
        fileInEditableState: x
      }), S && interactionCount > 0 && jsx('div', {
        children: jsx(_$$X6, {
          currentPage: c,
          customRowBuilder: buildCodeInteractionsRows,
          hideCanvasDropTargets: !0,
          hideRowActions: !0,
          ignoreRightClickForSelection: !0,
          isReadOnly: !0,
          onRowContextMenu: F,
          onSelectionUpdated: e => {
            let t = getSingletonSceneGraph().get(e);
            t && _$$iI(t, {
              targetNodeId: null,
              exampleObject: SquareShapes.SIMPLE_SQUARE
            });
          },
          panelType: _$$g$.CodeComponent,
          recordingKey: 'codeInteractionsList',
          renamingGuid: renamingNodeGuid,
          startRenaming: startRenamingNode,
          stopRenaming: stopRenamingNode,
          thumbnailGuid: null,
          topNodeProperties: null,
          versionHistory: p,
          width: e.width
        })
      })]
    }), layerCount > 0 && jsxs(Fragment, {
      children: [jsx(h1, {
        isOpen: v,
        onToggle: () => {
          m || j(!v);
        },
        title: renderI18nText('sites.panel.pages_panel.code_layers')
      }), v && jsx(_$$X6, {
        currentPage: c,
        customRowBuilder: buildCodeLayerRows,
        hideCanvasDropTargets: !0,
        hideRowActions: !0,
        ignoreRightClickForSelection: !0,
        isReadOnly: !0,
        onRowContextMenu: F,
        onSelectionUpdated: O,
        panelType: _$$g$.CodeComponent,
        recordingKey: 'codeLayersList',
        renamingGuid: renamingNodeGuid,
        startRenaming: startRenamingNode,
        stopRenaming: stopRenamingNode,
        thumbnailGuid: null,
        topNodeProperties: null,
        versionHistory: p,
        width: e.width
      })]
    })]
  });
}
function h1(e) {
  let {
    isOpen,
    onToggle,
    fileInEditableState,
    title,
    addButtonProps
  } = e;
  return jsx(_$$B7, {
    children: jsxs(_$$H7, {
      children: [jsxs(ButtonPrimitive, {
        className: 'code_components_list--toggleButton--eKzaU',
        htmlAttributes: {
          onContextMenu: e => {
            e.preventDefault();
            e.stopPropagation();
          },
          tabIndex: 0
        },
        onClick: onToggle,
        children: [isOpen ? jsx(_$$O4, {}) : jsx(_$$k0, {}), title]
      }), addButtonProps && fileInEditableState && jsx('div', {
        className: _$$s4.flex.gap8.itemsCenter.$,
        children: jsx(_$$K2, {
          'recordingKey': generateRecordingKey(e.recordingKey, addButtonProps.recordingKey ?? ''),
          'aria-label': addButtonProps.label,
          'onClick': addButtonProps.onClick,
          'htmlAttributes': {
            'data-testid': addButtonProps.testId,
            'data-tooltip-type': KindEnum.TEXT,
            'data-tooltip': addButtonProps.label,
            'data-tooltip-show-above': !0
          },
          'children': jsx(_$$x5, {})
        })
      })]
    })
  });
}
function h5(e) {
  let {
    isOpen,
    onToggle,
    fileInEditableState
  } = e;
  let a = Xr(_$$f4);
  return jsx(h1, {
    isOpen,
    onToggle,
    title: renderI18nText('sites.panel.pages_panel.code_components'),
    fileInEditableState,
    addButtonProps: {
      label: getI18nString('sites.panel.pages_panel.add_new_code_component'),
      onClick: e => {
        e.preventDefault();
        e.stopPropagation();
        debugState.dispatch(VisualBellActions.dequeue({
          matchType: US
        }));
        _$$J0(() => {
          _$$l.user('create-new-code-file', () => {
            let e = '';
            getFeatureFlags().multi_file_code_layers && (e = CodeComponentHelper?.createCodeFilePathName() ?? '');
            let t = Fullscreen?.createNewCodeFile(e, null, 'layers_panel', !0);
            if (t) {
              fullscreenValue.triggerAction('commit');
              let e = getSingletonSceneGraph().get(t);
              e && (_$$xB(e), a(!0));
            }
          });
        });
      },
      testId: 'new-code-component-btn',
      recordingKey: 'newCodeComponent'
    },
    recordingKey: 'codeComponentsListHeader'
  });
}
function h2({
  isOpen: e,
  onToggle: t,
  fileInEditableState: i
}) {
  return jsx(h1, {
    isOpen: e,
    onToggle: t,
    title: renderI18nText('sites.panel.pages_panel.code_interactions'),
    fileInEditableState: i,
    addButtonProps: {
      label: getI18nString('sites.panel.pages_panel.add_new_code_interaction'),
      onClick: e => {
        e.preventDefault();
        e.stopPropagation();
        _$$J0(() => {
          _$$l.user('create-new-code-interaction', () => {
            let e = Fullscreen?.createNewCodeInteraction('layers_panel');
            if (e) {
              fullscreenValue.triggerAction('commit');
              let t = getSingletonSceneGraph().get(e);
              t && _$$iI(t, {
                targetNodeId: null,
                exampleObject: SquareShapes.SIMPLE_SQUARE
              });
            }
          });
        });
      },
      testId: 'new-code-interaction-btn',
      recordingKey: 'newCodeInteraction'
    },
    recordingKey: 'codeInteractionsListHeader'
  });
}
function h4(e) {
  return !e.isSoftDeleted && !e.canvasNodeId;
}
function h3({
  videoSrc: e,
  cardLabel: t,
  onClick: i
}) {
  let [n, s] = useState(!1);
  let r = useRef(null);
  useEffect(() => {
    if (r.current) {
      if (n) {
        try {
          r.current.play();
        } catch (e) {
          console.error('Error playing code example video', e);
        }
      } else {
        try {
          r.current.pause();
        } catch (e) {
          console.error('Error pausing code example video', e);
        }
      }
    }
  }, [n]);
  return jsxs(ButtonPrimitive, {
    className: 'x9f619 xoa0rjt x9h44rk xehbxol x78zum5 x688lhu x6s0dn4 x2b8uid x1vc294i xdt5ytf x17aw9rc xv2f06h xe6jlm5',
    onClick: i,
    htmlAttributes: {
      onMouseEnter: () => s(!0),
      onMouseLeave: () => s(!1)
    },
    children: [jsx('div', {
      className: 'x16s0kzc x1h5wmu3 x1sxf85j',
      children: jsx('video', {
        className: 'x5yr21d xh8yej3 xz74otr x1sxf85j',
        loop: !0,
        muted: !0,
        ref: r,
        src: e
      })
    }), jsx('div', {
      className: 'x1bpp3o7 xkezfkh',
      children: t
    })]
  });
}
function h8() {
  let e = Xr(_$$zl);
  let t = () => {
    _$$l.user('create-new-code-file', () => {
      let e = '';
      getFeatureFlags().multi_file_code_layers && (e = CodeComponentHelper?.createCodeFilePathName() ?? '');
      let t = Fullscreen?.createNewCodeFile(e, null, 'empty_state', !0);
      if (t) {
        fullscreenValue.triggerAction('commit');
        let e = getSingletonSceneGraph().get(t);
        e && _$$xB(e);
      }
    });
  };
  let i = e => {
    e.preventDefault();
    e.stopPropagation();
    t && _$$J0(t);
  };
  return jsxs('div', {
    'className': 'x9f619 xou54vl x78zum5 xdt5ytf x6s0dn4',
    'data-testid': 'code-empty-state',
    'children': [jsxs('div', {
      className: 'x78zum5 x1r05qx8',
      children: [jsx(h3, {
        videoSrc: buildUploadUrl('101e51ab608cec2f92e68b4e92682cea84fd94bd'),
        cardLabel: getI18nString('left_rail.code_view_empty_state.gradient_shader'),
        onClick: () => {
          Fullscreen && (Fullscreen.createGradientShaderStarterComponent(), e('chat'));
        }
      }), jsx(h3, {
        videoSrc: buildUploadUrl('a8c2a634bcd399c9cc56f4b776e47ab36f4a14af'),
        cardLabel: getI18nString('left_rail.code_view_empty_state.card_carousel'),
        onClick: () => {
          Fullscreen && (Fullscreen.createCardCarouselStarterComponent(), e('chat'));
        }
      }), jsx(h3, {
        videoSrc: buildUploadUrl('2aa4ed6f3a933cb59934c296f5ffdf852baed204'),
        cardLabel: getI18nString('left_rail.code_view_empty_state.animated_text'),
        onClick: () => {
          Fullscreen && (Fullscreen.createAnimatedTextStarterComponent(), e('chat'));
        }
      })]
    }), jsx('div', {
      className: 'x1n0bwc9 x2b8uid',
      children: getI18nString('left_rail.code_view_empty_state.start_with_example_or_make_anything')
    }), jsx(Button, {
      variant: 'primary',
      onClick: t => {
        i(t);
        e('code');
      },
      children: getI18nString('left_rail.code_view_empty_state.start_from_scratch')
    })]
  });
}
function h6() {
  return jsx(nH.Header, {
    title: getI18nString('left_rail.code'),
    dataTestId: 'code-view-empty-state-header',
    children: jsx(_$$v4, {})
  });
}
function h7() {
  let [e, t] = useAtomValueAndSetter(_$$zl);
  let i = useCallback(() => {
    t(e => e === 'code' || e === 'split' ? e : 'split');
  }, [t]);
  _$$sl(i);
  let n = Mq() || getFeatureFlags().make_ai_allowlist_for_atlassian;
  return jsxs(nH.Header, {
    title: getI18nString('left_rail.code'),
    children: [jsx('div', {
      className: 'x10l6tqk x1nrll8i xuuh30',
      children: jsx(iO, {
        enabled: n ?? !1,
        panelConfiguration: e,
        handleSegmentChange: t
      })
    }), jsx(_$$v4, {})]
  });
}
function h9() {
  let e = _$$b2();
  let t = Xr(_$$s3);
  let i = !!Object.values(useAtomWithSubscription(AssetAtomMap[PrimaryWorkflowEnum.CODE_FILE].local)).filter(h4).length;
  let n = function () {
    let e = useAtomWithSubscription(Y3);
    let t = Fk((e, t) => t.flatMap(t => e.get(t)?.guid ?? []), e);
    return useMemo(() => {
      let e = getSingletonSceneGraph();
      return new Map(t.flatMap(t => {
        let i = e.get(t);
        return i ? [[t, i]] : [];
      }));
    }, [t]).values().next().value;
  }();
  let [s, d] = useAtomValueAndSetter(_$$b4);
  let x = _$$C2();
  XW();
  useEffect(() => {
    n && CodeComponentHelper?.convertToMultiFileCodeLayer(n.guid);
  }, [n]);
  useEffect(() => () => {
    d(null);
    debugState.dispatch(VisualBellActions.dequeue({
      matchType: US
    }));
  }, [d]);
  useEffect(() => {
    s && (s === n?.guid || s === n?.exportedFromCodeFile?.guid) ? debugState.dispatch(VisualBellActions.enqueue({
      type: US,
      message: getI18nString('sites.panel.code_view_opened_in_make_view'),
      icon: VisualBellIcon.UNDO,
      onDismiss: () => {
        d(null);
      },
      button: {
        text: getI18nString('sites.panel.code_view_back_to_design'),
        action: () => {
          t(PanelType.FILE);
        }
      },
      timeoutOverride: 1 / 0
    })) : debugState.dispatch(VisualBellActions.dequeue({
      matchType: US
    }));
  }, [s, n?.guid, n?.exportedFromCodeFile?.guid, t, d]);
  let m = function (e) {
    let [t] = useAtomValueAndSetter(_$$zl);
    return iP(_$$uQ() ? t : 'code', e?.codeFilePath !== void 0 && !!getFeatureFlags().multi_file_code_layers);
  }(n);
  let g = _$$g_ + _$$_4;
  let {
    windowInnerWidth
  } = _$$l4();
  return e ? jsx(nH, {
    children: i ? jsxs(Fragment, {
      children: [jsx(h7, {}), jsx(iF, {
        node: n,
        panels: m,
        onAddToCanvas: x,
        isFullscreen: !0,
        minPanelSize: 200 / (windowInnerWidth - g) * 100,
        autoSaveId: 'FULL_PAGE_VIEW_AUTOSAVE_ID'
      })]
    }) : jsxs(Fragment, {
      children: [jsx(h6, {}), jsx('div', {
        'className': 'x78zum5 xamitd3 x1bpp3o7',
        'data-testid': 'code-view-empty-state',
        'children': jsx(h8, {})
      })]
    })
  }) : null;
}
let ge = atom(!1);
let gt = createRemovableAtomFamily(e => setupRemovableAtomFamily(() => atom(!1)));
function gl() {
  let [e, t] = useAtomValueAndSetter(p_);
  !function () {
    let e = useAtomWithSubscription(p_);
    useEffect(() => {
      let t = atomStoreManager.get(_$$iO);
      switch (e) {
        case pf.CONNECT:
          CmsHelpers?.enterCmsBindingEditMode();
          SceneGraphHelpers?.clearSelection();
          t && (atomStoreManager.set(gt(t), !0), atomStoreManager.set(_$$iO, null), AppStateTsApi.cmsState().reset());
          break;
        case pf.EDIT:
          CmsHelpers?.exitCmsBindingEditMode();
          AppStateTsApi.cmsState().bindingCollectionId.getCopy() && (AppStateTsApi.cmsState().bindingCollectionId.set(''), atomStoreManager.set(_$$iO, AppStateTsApi.cmsState().bindingCollectionId.getCopy()));
          break;
        default:
          noop(e);
      }
    }, [e]);
    useEffect(() => () => {
      CmsHelpers?.exitCmsBindingEditMode();
    }, []);
  }();
  return jsx('div', {
    onClick: e => {
      e.stopPropagation();
    },
    className: 'xkotu8v x1rdy4ex',
    children: jsxs(_$$bL, {
      value: e === pf.CONNECT ? 'connect' : 'edit',
      legend: jsx(_$$q2, {
        children: renderI18nText('dakota.table_view.mode_toggle_switch.alt_text')
      }),
      onChange: e => {
        switch (e) {
          case 'connect':
            t(pf.CONNECT);
            break;
          case 'edit':
            t(pf.EDIT);
            break;
          default:
            noop(e);
        }
      },
      children: [jsx(RT, {
        value: 'edit',
        label: getI18nString('dakota.table_view.mode_toggle_switch.edit')
      }, 'edit'), jsx(RT, {
        value: 'connect',
        label: getI18nString('dakota.table_view.mode_toggle_switch.connect')
      }, 'connect')]
    })
  });
}
function ga() {
  let e = useDispatch();
  let t = Xr(pb);
  let i = mJ();
  let n = _$$ut2();
  let a = PE();
  let r = hp();
  let {
    Dropdown,
    toggleDropdown,
    dropdownTargetRef,
    isDropdownShown
  } = _$$B6('cms_create_collection_dropdown');
  let h = [{
    displayText: getI18nString('dakota.collections_creation_context_menu.manual'),
    callback: () => {
      t(!1);
      i();
    }
  }];
  getFeatureFlags().dakota_content_gen && a && h.push({
    displayText: getI18nString('dakota.collections_creation_context_menu.ai'),
    callback: () => {
      t(!0);
    }
  });
  getFeatureFlags().dakota_import_export && h.push({
    displayText: getI18nString('dakota.collections_creation_context_menu.import_internal'),
    callback: () => {
      WS().then(t => {
        if (!t) {
          e(VisualBellActions.enqueue({
            message: 'Invalid CMS data from clipboard'
          }));
          return;
        }
        n(t);
      });
    }
  });
  getFeatureFlags().dakota_import_csv && h.push({
    displayText: getI18nString('dakota.import_csv_modal.title'),
    callback: () => r()
  });
  let g = h.length > 1;
  let f = useAtomWithSubscription(ge);
  let _ = useAtomWithSubscription(_$$lT);
  let b = useCurrentFileKey();
  b || reportError(_$$e2.CMS, new Error('fileKey not found in DakotaCollectionsPanel'));
  let y = _$$c$(b);
  let k = e => {
    e.stopPropagation();
    i();
  };
  let w = y.status === ResourceStatus.Loaded && !_;
  let S = (y?.data?.length ?? 0) > 0;
  return jsxs(Fragment, {
    children: [jsxs('div', {
      className: v()(_$$s4.relative.zIndex1.flex.itemsCenter.pl16.pr8.minH40.$, {
        'dakota_collections_panel--headerScrollLine--cJpPa': f
      }),
      children: [jsx('div', {
        className: v()(_$$s4.flex.flexGrow1.itemsCenter.pl0.pr4.fontSemiBold.colorText.$),
        onContextMenu: e => {
          e.preventDefault();
          e.stopPropagation();
        },
        role: 'button',
        tabIndex: 0,
        children: renderI18nText('sites.panel.pages_panel.cms_collections')
      }), jsx('div', {
        ref: dropdownTargetRef,
        children: w ? jsxs(Fragment, {
          children: [jsx(_$$K2, {
            'recordingKey': 'newDakotaCollection',
            'aria-label': getI18nString('sites.panel.pages_panel.add_new_dakota_collection'),
            'onClick': e => {
              e.stopPropagation();
              g ? toggleDropdown() : k(e);
            },
            'htmlAttributes': {
              'data-tooltip': getI18nString('sites.panel.pages_panel.add_new_dakota_collection'),
              'data-tooltip-type': KindEnum.TEXT,
              'data-tooltip-show-above': !0
            },
            'children': jsx(_$$x5, {})
          }), g && isDropdownShown ? jsx(Dropdown, {
            showPoint: !1,
            displayOverTarget: !0,
            items: h
          }) : null]
        }) : jsx(_$$k7, {})
      })]
    }), getFeatureFlags().dakota_focus_binding && S && jsx(gl, {})]
  });
}
function gs(e) {
  let t = Xr(UU);
  let i = AppStateTsApi.cmsState();
  let n = Xr(_$$iO);
  let a = _$$e();
  let {
    type,
    id
  } = getObservableOrFallback(i.bindingFieldSchema);
  let c = id === e.fieldSchemaId && type === e.fieldType;
  let u = a && e.fieldType === _$$_j.SLUG;
  return jsx(mz, {
    id,
    indented: !0,
    value: e.fieldName,
    selected: c,
    Icon: _$$Tu(e.fieldType),
    onClick: () => {
      SceneGraphHelpers?.clearSelection();
      i.bindingFieldSchema.set({
        id: e.fieldSchemaId,
        type: e.fieldType
      });
      a ? i.bindingCollectionId.set(e.collectionId) : n(e.collectionId);
      t(new Set());
    },
    onContextMenu: _$$lQ,
    isRenaming: !1,
    disabled: u
  });
}
function gr(e) {
  let t = _$$uE(e.collectionId);
  useEffect(() => () => {
    SceneGraphHelpers?.clearSelection();
    AppStateTsApi.cmsState().bindingFieldSchema.set({
      id: '',
      type: ''
    });
  }, []);
  return jsx(Fragment, {
    children: t.map(t => jsx(gs, {
      collectionId: e.collectionId,
      fieldSchemaId: t.id,
      fieldType: t.fieldType,
      fieldName: t.name
    }, t.id))
  });
}
function go({
  collection: e,
  nextId: t,
  prevId: i
}) {
  let n = e.name;
  let d = e.id;
  let c = useDispatch();
  let u = pL(n, 'leftPanel', d);
  let [p, m] = useAtomValueAndSetter(gt(d));
  let h = _$$e();
  let f = AppStateTsApi.cmsState();
  let b = getObservableOrFallback(f.bindingCollectionId);
  let {
    id
  } = getObservableOrFallback(f.bindingFieldSchema);
  let [v, w] = useAtomValueAndSetter(_$$iO);
  let S = Xr(_$$ou);
  let C = BK(V6);
  let [T, I] = useState(!1);
  let E = Xr(UU);
  let N = b === d && !id;
  let R = v === d && !id;
  let A = () => {
    d === v && (w(null), E(new Set()));
    S(e => {
      let t = new Set(e);
      t.$$delete(d);
      return t;
    });
    _$$Tx({
      collection: e
    });
  };
  return jsxs(Fragment, {
    children: [jsx(mz, {
      Icon: jsx(_$$r, {}),
      id: d,
      isRenaming: T,
      nextRowId: t,
      onClick: () => {
        E(new Set());
        SceneGraphHelpers?.clearSelection();
        f.bindingFieldSchema.set({
          id: '',
          type: ''
        });
        h ? (f.bindingCollectionId.set(d), m(!0)) : w(d);
      },
      onContextMenu: e => {
        e.stopPropagation();
        e.preventDefault();
        let {
          clientX,
          clientY
        } = e;
        C.show({
          data: {
            clientX,
            clientY,
            deleteCollection: () => {
              c(showModal({
                type: pw.type,
                data: {
                  type: pS.COLLECTION,
                  deleteRecordOrRecords: A
                }
              }));
            },
            collectionId: d
          }
        });
      },
      previousRowId: i,
      readOnly: h,
      recordingKey: 'rename-cms-collection',
      rowPrefix: getFeatureFlags().dakota_focus_binding ? jsx('div', {
        role: 'button',
        tabIndex: 0,
        onClick: () => {
          m(e => !e);
        },
        className: 'xe5c7bq',
        children: p ? jsx(_$$O4, {}) : jsx(_$$k0, {})
      }) : void 0,
      selected: h ? N : R,
      startRenaming: () => {
        I(!0);
      },
      stopRenaming: (t, i, n) => {
        if (t && T && i) {
          let t = i.trim();
          t !== n && t.length > 0 && _$$c({
            collection: e,
            name: t
          });
        }
        I(!1);
      },
      value: u
    }, d), p && jsx(gr, {
      collectionId: d
    })]
  });
}
function gd() {
  let e = useCurrentFileKey();
  let t = _$$c$(e).data;
  let [i, n] = useAtomValueAndSetter(_$$iO);
  let s = useAtomWithSubscription(_$$ou);
  useEffect(() => {
    !i && t && t.length && n(t[0]?.id ?? null);
  }, [t, i, n]);
  let r = Array.from(s).filter(e => !(t ?? []).some(t => t.id === e));
  return jsxs(Fragment, {
    children: [r.map(e => jsx(go, {
      collection: {
        id: e,
        databaseId: e,
        name: ''
      },
      prevId: void 0,
      nextId: t?.[0]?.id ?? void 0
    }, e)), (t ?? []).map((e, t, i) => jsx(go, {
      collection: e,
      prevId: t - 1 >= 0 ? i[t - 1]?.id ?? void 0 : void 0,
      nextId: t + 1 < i.length ? i[t + 1]?.id ?? void 0 : void 0
    }, e.id))]
  });
}
function gc() {
  _$$N();
  return null;
}
function gu(e) {
  let {
    width
  } = e;
  let i = useAtomWithSubscription(p_);
  let n = Xr(ge);
  return (useEffect(() => () => {
    CmsHelpers?.exitCmsBindingEditMode();
  }, []), _$$U()) ? jsxs(Fragment, {
    children: [i === pf.CONNECT && jsx(gc, {}), jsxs('div', {
      'className': 'x98rzlu',
      'data-testid': 'dakota-collections-panel',
      'children': [jsx(ga, {}), jsx(_$$P2, {
        enableOverscroll: !0,
        recordingKey: generateRecordingKey('scrollContainer'),
        width,
        onScroll(e) {
          n(e > 0);
        },
        className: 'dakota_collections_panel--scrollContainer--7m1oK',
        children: jsx(gd, {})
      })]
    })]
  }) : null;
}
let gp = setupRemovableAtomFamily(() => atom(null));
let gN = ({
  guid: e,
  prevNodeGuid: t,
  nextNodeGuid: i,
  objectName: n,
  recordingKey: l,
  startRenaming: s,
  stopRenaming: r
}) => {
  let [o, d] = useState(null);
  let [c, u] = useState(!1);
  let p = useRef(null);
  let x = useCallback(e => {
    e && (p.current = e, p.current.select());
  }, []);
  let m = useHandleMouseEvent(l, 'dblclick', () => {
    _$$F8.trackFromFullscreen('action_rename_selection', {
      source: 'click'
    });
    s(e);
  });
  let h = useHandleChangeEvent(l, 'change', e => {
    d(e.currentTarget?.value);
  });
  let g = (...e) => {
    r(...e);
    d(null);
  };
  let f = useHandleKeyboardEvent(l, 'keydown', e => {
    if (!c) {
      if (e.keyCode === Uz.ESCAPE) {
        g(!1);
      } else if (e.keyCode === Uz.ENTER) {
        g(!0, p.current?.value, n);
      } else {
        if (e.keyCode !== Uz.TAB) {
          _$$jr2(e, _$$W7.NO);
          return SKIP_RECORDING;
        }
        e.preventDefault();
        g(!0, p.current?.value, n);
        e.shiftKey ? t && s(t) : i && s(i);
      }
    }
  });
  return {
    renamingValue: o,
    initInputRef: x,
    onDoubleClick: m,
    onBlur: useHandleGenericEvent(l, 'blur', () => {
      g(!0, p.current?.value, n);
    }),
    onKeyDown: f,
    onInputChange: h,
    setIsComposing: u
  };
};
function gR({
  dropTarget: e,
  guid: t,
  defaultResponsiveSetGuid: i,
  isRenaming: n,
  nextNodeGuid: r,
  onContextMenu: o,
  onCtrlClick: d,
  onReorder: c,
  onShiftClick: u,
  prevNodeGuid: p,
  recordingKey: x,
  scrollTop: m,
  selected: h,
  setDropTarget: f,
  startRenaming: _,
  stopRenaming: b,
  updateSelection: y
}) {
  let v = Fk((e, t) => e.get(t)?.name ?? '', t);
  let j = !!Fk((e, t) => e.get(t)?.isResponsiveSetOrWebpage ?? '', t);
  let k = Fk((e, t) => e.get(t)?.editInfo?.lastEditedAt ?? '-', t);
  let S = useSelector(e => e.mirror.sceneGraphSelection);
  let C = getObservableOrFallback(_$$UK().showGuids);
  let T = _$$OG({
    abbreviatedStateName: null,
    guid: t,
    name: v,
    shouldShowGuids: C,
    isWebpage: j,
    isDefaultResponsiveSet: i === t,
    nodeType: null
  });
  let I = useCurrentFileKey();
  let {
    guid,
    width,
    height
  } = Fk((e, t) => {
    let i = e.get(t)?.childrenNodes.map(e => ({
      width: e.size.x,
      height: e.size.y,
      guid: e.guid
    }));
    return i && i.length > 0 ? i.reduce((e, t) => t.width > e.width ? t : e) : {
      guid: t,
      width: 56,
      height: 40
    };
  }, t);
  let A = _$$yh({
    fileKey: I,
    nodeId: guid,
    width: 112,
    height: height / (width / 56) * 2,
    version: k,
    reason: `${x}.thumbnail`,
    shouldSkip: !1,
    regenerateAfterImagesLoaded: !0
  });
  let L = useHandleMouseEvent(x, 'click', useCallback(e => {
    e.shiftKey ? u(t) : Fo(e) ? d(t) : y(t);
  }, [y, u, d, t]));
  let P = useHandleMouseEvent(x, 'contextmenu', useCallback(e => {
    o?.(t, e);
  }, [o, t]));
  let {
    renamingValue,
    initInputRef,
    onBlur,
    onDoubleClick,
    onInputChange,
    onKeyDown,
    setIsComposing
  } = gN({
    guid: t,
    prevNodeGuid: p,
    nextNodeGuid: r,
    objectName: T,
    recordingKey: x,
    startRenaming: _,
    stopRenaming: b
  });
  let U = useRef(null);
  let K = _$$s9(U);
  let H = U.current;
  let q = H ? H.offsetTop + H.offsetHeight - m : 0;
  _$$h11(() => ({
    type: 'collection-field-schema-item',
    item: {
      id: t,
      position: _$$Nz2.AFTER,
      value: T
    },
    element: U,
    canDrag: !0,
    onHover: e => {
      e.dragItem.id !== i && f(e.dropItem.id);
    },
    onDrop: e => {
      e.dragItem.position && e.dropItem.position && e.dragItem.id !== e.dropItem.id && e.dragItem.id !== i && c();
      f(null);
    },
    onStart: e => {
      S[e.dragItem.id] || replaceSelection([e.dragItem.id]);
    }
  }));
  let X = h ? gA.webpageRowBgSelected : K && !e ? gA.webpageRowBgHover : null;
  return jsxs(Fragment, {
    children: [e === t && jsx('div', {
      ..._$$Ay.props(gA.dropTarget, gA.dropTargetTransform(q - 2)),
      'aria-hidden': !0
    }), jsxs(_$$b9, {
      ..._$$Ay.props(gA.webpageRow, X),
      onClick: L,
      onDoubleClick,
      onContextMenu: P,
      ref: U,
      tag: 'div',
      children: [I && A ? jsx('div', {
        className: 'x2lah0s x15yg21f x1vqgdyp x1cum3z5 x1kylzug x7z60cl x1n2onr6 xb3r6kr',
        children: jsx(_$$oW, {
          ..._$$Ay.props(gA.thumbnail, h ? gA.thumbnailBorderSelected : gA.thumbnailBorder),
          src: A.src,
          alt: v
        })
      }) : jsx('div', {
        className: 'x1u78mur x5kalc8 x1yjdb4r'
      }), jsx('div', {
        className: 'x1tpqehw xs83m0k xb3r6kr xebhuq6',
        children: n ? jsx(_$$ks2, {
          autoCapitalize: 'off',
          autoCorrect: 'off',
          innerRef: initInputRef,
          onBlur,
          onChange: onInputChange,
          onCompositionEnd: () => setIsComposing(!1),
          onCompositionStart: () => setIsComposing(!0),
          onKeyDown,
          spellCheck: !1,
          value: renamingValue !== null ? renamingValue : v
        }) : jsx('span', {
          children: T
        })
      }), jsx('div', {
        ..._$$Ay.props(gA.webpageSettingsIcon, K && !n && gA.webpageSettingsIconHover),
        children: jsx(_$$el, {
          page: t,
          recordingKey: 'webpagesListSettingsButton'
        })
      })]
    })]
  });
}
let gA = {
  webpageRow: {
    position: 'x1n2onr6',
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    padding: 'xe8ttls',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    overflow: 'xb3r6kr',
    overflowX: null,
    overflowY: null,
    borderRadius: 'x4pvk5x',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    zIndex: 'x1vjfegm',
    $$css: !0
  },
  webpageRowBgSelected: {
    backgroundColor: 'xcr9a89',
    $$css: !0
  },
  webpageRowBgHover: {
    backgroundColor: 'x30nh5c',
    $$css: !0
  },
  webpageSettingsIcon: {
    position: 'x10l6tqk',
    opacity: 'xg01cxk',
    right: 'x19up5dg',
    insetInlineStart: null,
    insetInlineEnd: null,
    backgroundColor: 'x30nh5c',
    borderRadius: 'x1pjcqnp',
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
  webpageSettingsIconHover: {
    opacity: 'x1hc1fzr',
    $$css: !0
  },
  thumbnail: {
    position: 'x10l6tqk',
    top: 'x13vifvy',
    left: 'xu96u03',
    insetInlineStart: null,
    insetInlineEnd: null,
    width: 'x15yg21f',
    height: 'xt7dq6l',
    $$css: !0
  },
  thumbnailBorder: {
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
  thumbnailBorderSelected: {
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
  dropTarget: {
    height: 'x36qwtl',
    display: 'x78zum5',
    position: 'x10l6tqk',
    top: 'x13vifvy',
    left: 'xu96u03',
    right: 'x3m8u43',
    insetInlineStart: null,
    insetInlineEnd: null,
    width: 'xh8yej3',
    pointerEvents: 'x47corl',
    backgroundColor: 'xi0y1te',
    borderRadius: 'x4pvk5x',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    zIndex: 'xbqvh2t',
    $$css: !0
  },
  dropTargetTransform: e => [{
    transform: 'x1uosm7l',
    $$css: !0
  }, {
    '--transform': `translateY(${e}px)`
  }]
};
function gL(e) {
  let [t, i] = useState(null);
  let [n, d] = useState(null);
  let {
    renamingNodeGuid,
    startRenamingNode,
    stopRenamingNode
  } = e;
  let m = _$$Z7();
  let g = useDispatch();
  let f = useSelector(e => !e.mirror.appModel.isReadOnly && e.mirror.appModel.topLevelMode !== ViewType.HISTORY);
  let _ = useSelector(e => e.mirror.sceneGraphSelection);
  let y = useRef(null);
  let v = useRef(null);
  let j = _$$O6();
  let S = getSingletonSceneGraph();
  let C = S.get(j);
  let T = !f;
  let [I, E] = useAtomValueAndSetter(_$$h10);
  let {
    windowInnerHeight
  } = _$$l4();
  let A = q0({
    scrollContainerInnerRef: y,
    windowInnerHeight
  });
  let [L, P] = useAtomValueAndSetter(B_);
  let O = function () {
    let e = _$$Z7();
    let t = useDispatch();
    let i = _$$O6();
    let n = useSelector(e => e.mirror.appModel.currentPage);
    let l = useSelector(e => e.versionHistory);
    let a = trackFileEventWithStore();
    let o = getSingletonSceneGraph();
    let d = useSelector(e => e.mirror.appModel.pagesList);
    return s => {
      s.stopPropagation();
      let c = o.getCurrentPage();
      _$$J0(() => {
        _$$l.user('create-new-webpage', () => {
          c && c.guid === i ? Fullscreen.createResponsiveSet(null) : $P(i, n, l, t, Fy(d, i) === DataLoadStatus.LOADED, a, e).then(() => {
            Fullscreen.createResponsiveSet(null);
          });
        });
      });
    };
  }();
  let F = _$$e6();
  let M = useCallback(e => {
    m(computeFullscreenViewportForNode({
      nodeId: e,
      alwaysPan: !0
    }));
  }, [m]);
  let z = !_ || Object.values(_).filter(Boolean).length;
  useEffect(() => {
    z || i(null);
  }, [z]);
  let $ = Fk((e, t) => e.get(t)?.uiOrderedChildren, e.currentPageGuid) || [];
  let U = $.filter(e => F !== e);
  F && U.unshift(F);
  let K = Math.min(56 * _$$wk(C).length + 8, Math.round(0.25 * (windowInnerHeight - parsePxInt(MGP) - _$$uF2)));
  let H = useDebouncedCallback(e => {
    let t = U.indexOf(e);
    let i = (t + 0.5) * 56;
    let n = v.current?.getClipContainer().clientHeight || K;
    (W.current > i || W.current + n < i) && v.current?.scrollTo((t - 1) * 56);
    G.current = e;
  }, 100);
  let q = Fk((e, t) => {
    let i = {};
    t.forEach(t => {
      let n = e.get(t);
      i[t] = n ? n.isOrInResponsiveSet ? findContainingResponsiveSet(n)?.guid : n.containingWebpage?.guid : void 0;
    });
    return i;
  }, Object.keys(_));
  let X = Object.keys(_).filter(e => !!_[e]);
  let V = useRef(X);
  let G = useRef(null);
  useEffect(() => {
    let e = V.current;
    let t = X.filter(t => t && !e.includes(t));
    if (t[0]) {
      let e = q[t[0]];
      e && H(e);
    }
    V.current = X;
  }, [q, X]);
  let W = useRef(0);
  useEffect(() => {
    renamingNodeGuid && H(renamingNodeGuid);
  }, [renamingNodeGuid]);
  useEffect(() => {
    let e = e => {
      if (n && v.current) {
        let t = v.current.getClipContainer();
        let i = t.clientHeight;
        let n = t.getBoundingClientRect();
        let l = e.clientY - n.top + W.current;
        if (l < W.current) {
          let e = W.current - l;
          v.current.scrollTo(W.current - _$$bm(e, 56));
          return;
        }
        if (l > W.current + i) {
          let e = l - W.current - i;
          v.current.scrollTo(W.current + _$$bm(e, 56));
        }
      }
    };
    let t = () => {
      n && d(null);
    };
    document.addEventListener('mousemove', e);
    document.addEventListener('mouseup', t);
    return () => {
      document.removeEventListener('mousemove', e);
      document.removeEventListener('mouseup', t);
    };
  }, [n]);
  let Y = e => {
    _$$S9('panel');
    getSingletonSceneGraph().setCurrentPageFromNodeAsync(e);
    replaceSelection([e]);
    fullscreenValue.commit();
    M(e);
    i(e);
  };
  let J = e => {
    if (t) {
      let i = $.indexOf(e);
      let n = $.indexOf(t);
      let l = $.slice(Math.min(i, n), Math.max(i, n) + 1);
      addToSelection(l);
      fullscreenValue.commit();
    } else {
      Y(e);
      i(e);
    }
  };
  let Z = e => {
    _[e] ? removeFromSelection([e]) : (addToSelection([e]), i(e));
    fullscreenValue.commit();
  };
  let Q = () => {
    if (!n) return;
    let e = $.indexOf(n);
    let t = PA(S, n);
    t && _$$l.user('reparent-selection', () => transferSelection(t.guid, Lc(t, e) - 1));
  };
  let ee = (e, t) => {
    let i = S.get(e);
    if (!i) return;
    K3(_, i.guid) || Y(i.guid);
    let {
      clientX,
      clientY
    } = t;
    g(_$$j2({
      type: J7,
      data: {
        clientX,
        clientY
      }
    }));
  };
  let et = [];
  if (C) {
    let e = JZ(C);
    for (let t = 0; t < e.length; t++) {
      let i = e[t];
      et.push({
        guid: i.guid,
        prevNodeGuid: e[t - 1]?.guid || null,
        nextNodeGuid: e[t + 1]?.guid || null,
        recordingKey: `webpagesList.row.${t}`
      });
    }
  }
  let ei = L ? A(L) : K;
  return jsx(EventShield, {
    eventListeners: ['onClick'],
    children: jsxs('div', {
      className: 'xh8yej3 xs83m0k xt0e3qv x1ba4aug xb3r6kr x78zum5 xdt5ytf x1n5zjp5 x1n2onr6',
      children: [jsx(_$$J1, {
        hasMultiplePageTypes: !1,
        hasScrollLine: !1,
        isComparingChanges: !1,
        isPagesOpen: I,
        isReadOnly: !f,
        onClickNewPage: O,
        onTogglePages: () => {
          T || E(!I);
        },
        recordingKey: 'webpagesListHeader',
        title: getI18nString('sites.panel.pages_panel.webpages'),
        tooltipText: getI18nString('sites.panel.pages_panel.add_new_webpage')
      }), I && jsx(_$$wV, {
        className: '',
        size: ei,
        defaultSize: K,
        onResize: e => {
          P(e);
          updateHoveredNode('');
        },
        side: 'bottom',
        ref: y,
        children: jsx(_$$P2, {
          className: 'x78zum5 xdt5ytf x5yr21d x1yjhc3n',
          onContextMenu: e => {
            e.stopPropagation();
            e.preventDefault();
          },
          onScroll: e => {
            W.current = e;
          },
          ref: v,
          children: et.map(e => jsx(gR, {
            defaultResponsiveSetGuid: F,
            dropTarget: n,
            guid: e.guid,
            isRenaming: e.guid === renamingNodeGuid,
            nextNodeGuid: e.nextNodeGuid,
            onContextMenu: ee,
            onCtrlClick: Z,
            onReorder: Q,
            onShiftClick: J,
            prevNodeGuid: e.prevNodeGuid,
            recordingKey: e.recordingKey,
            scrollTop: W.current,
            selected: Object.values(q).includes(e.guid),
            setDropTarget: d,
            startRenaming: startRenamingNode,
            stopRenaming: stopRenamingNode,
            updateSelection: Y
          }, e.guid))
        })
      })]
    })
  });
}
function gO() {
  let e = GQ();
  let t = _$$cT();
  let i = selectCurrentFile();
  let n = useSelector(e => e.versionHistory);
  let d = function () {
    let e = _$$dh();
    let t = A$();
    let [i, n] = useAtomValueAndSetter(gp);
    let l = e === t;
    let s = getFeatureFlags().show_internal_only_canvas;
    return (useEffect(() => {
      (!l || s) && n(e);
    }, [e, l, s, n]), l && !s) ? i || '0:1' : e;
  }();
  let c = useAtomWithSubscription(_$$h10);
  let {
    isLayersOpen,
    toggleLayersAction
  } = _$$vr();
  let {
    renamingNodeGuid,
    startRenamingNode,
    stopRenamingNode
  } = _$$TU();
  let _ = c && (e => {
    let t = getSingletonSceneGraph().get(e || '');
    return !!t?.isResponsiveSetOrWebpage;
  })(renamingNodeGuid) ? null : renamingNodeGuid;
  let {
    isFocused,
    showAllLayers,
    customRowBuilder
  } = function () {
    let e = getSingletonSceneGraph();
    let t = AppStateTsApi.sitesState();
    let i = getObservableOrFallback(t.focusedLayoutSetNodes);
    let n = _$$O6();
    let l = Fk((e, t) => e.get(t)?.uiOrderedChildren, n);
    let s = l?.every(e => i.has(e)) || l?.every(e => !i.has(e));
    let o = Array.from(i);
    let {
      topLevelObjectRowHeight,
      nestedObjectRowHeight
    } = useContext(_$$y0);
    let u = [];
    let p = useCallback(() => {
      t.focusedLayoutSetNodes.set(new Set());
    }, [t.focusedLayoutSetNodes]);
    let x = !s && i && i.size !== 0 ? () => _$$Sk({
      sceneGraph: e,
      rootNodeGuids: o,
      showImmutableFrameSublayers: !1,
      temporarilyExpandedInstanceLayers: u,
      topLevelObjectRowHeight,
      nestedObjectRowHeight
    }) : void 0;
    return {
      isFocused: !s && t.focusedLayoutSetNodes.getCopy().size > 0,
      showAllLayers: p,
      customRowBuilder: x
    };
  }();
  let j = jsxs(Fragment, {
    children: [i && jsx(QU, {
      fileKey: i.key
    }), jsx(gL, {
      width: e,
      currentPageGuid: d,
      renamingNodeGuid,
      startRenamingNode,
      stopRenamingNode
    }), jsx(_$$m7, {
      children: jsx(_$$o8, {
        currentPage: d,
        customRowBuilder,
        isLayersOpen,
        isReadOnly: t,
        onSelectionUpdated: e => {
          getSingletonSceneGraph().setCurrentPageFromNodeAsync(e);
          _$$S9('panel');
          replaceSelection([e]);
          fullscreenValue.commit();
        },
        onToggleLayers: toggleLayersAction,
        recordingKey: 'sitesLeftPanelContent',
        renamingGuid: _,
        reserveBottomHeight: isLayersOpen && isFocused,
        showAllLayers,
        startRenaming: startRenamingNode,
        stopRenaming: stopRenamingNode,
        topNodeProperties: null,
        versionHistory: n,
        width: e
      })
    })]
  });
  let k = jsx(h0, {
    width: e,
    renamingNodeGuid,
    startRenamingNode,
    stopRenamingNode
  });
  let S = jsx('div', {
    className: 'x1n2onr6 xb3r6kr x1yjdb4r x98rzlu x78zum5 xdt5ytf',
    children: jsx(gu, {
      width: e
    })
  });
  let C = jsx(cI, {});
  let T = useAtomWithSubscription(_$$s3);
  let I = _$$q8();
  let E = (() => {
    if (I) return j;
    switch (T) {
      case PanelType.FILE:
        return j;
      case PanelType.CODE:
        return k;
      case PanelType.DAKOTA:
        return S;
      case PanelType.SETTINGS:
        return C;
      default:
        return j;
    }
  })();
  return jsx(_$$A13, {
    isFullHeight: !0,
    children: E
  });
}
let gF = memo(e => {
  return jsx('svg', {
    width: '16',
    height: '16',
    fill: 'none',
    viewBox: '0 0 16 16',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M10 2a4 4 0 1 1-1 7.874V10a1 1 0 0 1-1 1H7v.5a1 1 0 0 1-1 1h-.5v.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1.586a1 1 0 0 1 .293-.707l3.809-3.81A4 4 0 0 1 10 2m0 1a3 3 0 0 0-2.924 3.674l.124.539-.391.391L3 11.414V13h1.5v-1.5H6V10h2V8.584l1.249.321Q9.608 9 10 9a3 3 0 1 0 0-6m.5 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2'
    })
  });
});
function gB() {
  return jsx(_$$SZ, {
    shouldUseBottomBorder: !0,
    children: jsx(VQ, {})
  });
}
function g$() {
  let e = selectCurrentFile();
  if (!(e && e.key && e.name)) return jsx(VQ, {});
  let t = jsxs('div', {
    className: 'x78zum5 x6s0dn4 x1qughib x8439ig',
    children: [jsx(_$$x$, {
      recordingKey: Fp
    }), jsx('div', {
      className: 'x78zum5 x6s0dn4 x1qughib x8439ig',
      children: jsx('div', {
        className: 'xv8wvd9',
        children: jsx(_$$n9, {})
      })
    })]
  });
  return jsxs('div', {
    className: 'x1vi7shn xsag5q8 x1gcgh60 x1jwbysl x1n5zjp5',
    children: [t, jsx(_$$l6, {}), jsx(_$$t5, {
      openFile: e
    }), jsx(gU, {
      fileKey: e.key
    }), jsx('div', {
      'className': 'x14vqqas',
      'data-testid': 'sitesSidebarPublishButton',
      'children': jsx(sj, {
        file: e,
        hasEllipsis: !0
      })
    })]
  });
}
function gU({
  fileKey: e
}) {
  let t = _$$_t(e);
  if (!function () {
    let e = selectCurrentFile();
    let t = e?.key;
    let i = useSubscription(SiteBundles, {
      fileKey: t ?? ''
    }, {
      enabled: !!t
    });
    let n = useSubscription(SiteMount, {
      fileKey: t || ''
    }, {
      enabled: !!t
    });
    if (i.status !== 'loaded' || n.status !== 'loaded') return null;
    let l = getResourceDataOrFallback(i.data?.siteBundles);
    let a = getResourceDataOrFallback(n.data?.siteMount);
    let s = a?.status !== 'published';
    let r = null;
    l != null && (r = l.find(e => e.completedAt != null) || null);
    let o = r?.completedAt ?? null;
    return s ? null : o;
  }() || !t) {
    return null;
  }
  let i = t.hasCustomDomain && t.verifiedAt != null;
  let n = i ? t.customDomainURL : t.fullURL;
  let a = i ? t.customDomain : t.domain;
  let s = jsx('div', {
    className: 'xb3r6kr',
    children: jsx(_$$N6, {
      'newTab': !0,
      'href': n,
      'data-testid': 'sitesSidebarDomainLink',
      'children': jsxs('span', {
        className: 'x78zum5 xg2d0mh',
        children: [jsx(_$$G9, {
          text: a
        }), t.isPasswordProtected && jsx(gF, {
          'style': {
            '--color-icon': _$$Tj2.iconBrand
          },
          'aria-label': getI18nString('sites.metadata.domain.password_protected'),
          'data-tooltip': getI18nString('sites.metadata.domain.password_protected'),
          'data-tooltip-show-immediately': !0,
          'data-tooltip-hide-immediately': !0,
          'data-tooltip-type': KindEnum.TEXT
        })]
      })
    })
  });
  let r = t.hasCustomDomain && t.verifiedAt == null && jsx('div', {
    className: 'x2lah0s',
    children: jsx(gK, {})
  });
  return jsxs('div', {
    className: 'x78zum5 x1q0g3np x6s0dn4 x1qughib x167g77z x1qgqq4l',
    children: [s, r]
  });
}
function gK() {
  let e = Xr(_$$s3);
  let t = Xr(_$$j4);
  return jsx(_$$K2, {
    'aria-label': getI18nString('sites.metadata.domain.warning_icon_indicating_that_the_custom_domain_has_not_been_verified'),
    'data-tooltip': getI18nString('sites.metadata.domains.unverified_custom_domain'),
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip-show-above': !0,
    'onClick': () => {
      e(PanelType.SETTINGS);
      t(_$$p6.DOMAINS);
    },
    'children': jsx(_$$Z5, {})
  });
}
function gV() {
  let e = selectCurrentFile();
  return jsxs(_$$O7, {
    children: [jsx('div', {
      className: 'xs83m0k x1iyjqo2 xeuugli',
      children: jsx(_$$n0, {
        shouldShowConnectedBadge: !0
      })
    }), e && jsx(_$$s0, {
      openFile: e
    }), jsx(_$$n7, {}), jsx(_$$A17, {})]
  });
}
function gG() {
  let e = _$$aV();
  let t = useSelector(e => e.mirror.appModel.showUi);
  return !e && t ? jsxs(_$$_7, {
    isCollapsed: !0,
    children: [jsx(_$$xG, {}), jsx(gV, {})]
  }) : null;
}
let gQ = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M6.5 6a.5.5 0 0 1 .5.5V7h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7v2.5a.5.5 0 0 1-1 0v-12a.5.5 0 0 1 .5-.5M7 8v7h10V8zm6.854 1.446a.5.5 0 0 1 0 .707L12.707 11.3l1.147 1.146a.5.5 0 0 1-.708.707L12 12.007l-1.146 1.146a.5.5 0 0 1-.708-.707l1.147-1.146-1.147-1.147a.5.5 0 0 1 .708-.707L12 10.593l1.146-1.147a.5.5 0 0 1 .708 0',
      clipRule: 'evenodd'
    })
  });
});
function g6({
  iconProps: e,
  ...t
}) {
  let i = _$$hM(e.key);
  return jsx(_$$A18.IconButton, {
    ...e,
    ...t,
    disabled: i || e.disabled,
    icon: createElement(e.icon),
    recordingKey: `sitesLeftRailIcon.${e.key}`,
    dataTestId: `left-rail-icon-button-${e.key}`
  });
}
function g7() {
  let {
    alerts,
    canvasViews,
    fullViews
  } = function () {
    let {
      Sprig
    } = useSprigWithSampling();
    let t = useAtomWithSubscription(Nl);
    let i = useAtomWithSubscription(_$$f4);
    let {
      search: {
        toggle
      },
      inserts: {
        toggle: _toggle
      },
      hasOverlay,
      overlayClosing,
      closeOverlay
    } = _$$h13();
    let x = hasOverlay && !overlayClosing;
    let [h, g] = useAtomValueAndSetter(_$$s3);
    let f = useDispatch();
    let _ = useCallback(t => {
      getFeatureFlags().sts_sprig_targeted_feedback && i && h === PanelType.CODE && t === PanelType.FILE && Sprig('track', 'sites_code_layer_edit');
      t !== h && f(hideModalHandler());
      g(t);
      setTimeout(() => {
        closeOverlay();
      }, 1);
    }, [i, h, g, f, Sprig, closeOverlay]);
    let b = getFeatureFlags().sts_code;
    let y = !!getFeatureFlags().sts_code && !!(getFeatureFlags().sts_code_authoring || getFeatureFlags().sts_code_authoring_by_plan);
    let v = _$$U();
    let j = [{
      active: h === PanelType.FILE && !x,
      hide: !1,
      key: _$$R9(PanelType.FILE),
      label: getI18nString('sites.side_rail.file'),
      icon: _$$g3,
      onClick: () => {
        analyticsEventManager.trackDefinedEvent('sites.left_rail_tab_selected', {
          name: 'file'
        });
        _(PanelType.FILE);
      },
      shortcut: 'set-sites-view-file'
    }, {
      active: t === $e.INSERT && x,
      key: 'insert',
      label: getI18nString('sites.side_rail.insert'),
      icon: _$$s1,
      onClick: () => {
        t !== $e.INSERT && analyticsEventManager.trackDefinedEvent('sites.left_rail_tab_selected', {
          name: 'insert'
        });
        _toggle();
      },
      shortcut: 'set-sites-inserts-overlay',
      dataOnboardingKey: _$$we
    }, {
      active: t === $e.FIND && x,
      key: 'search',
      label: getI18nString('sites.side_rail.search'),
      icon: _$$h12,
      onClick: () => {
        t !== $e.FIND && analyticsEventManager.trackDefinedEvent('sites.left_rail_tab_selected', {
          name: 'find'
        });
        toggle();
      },
      shortcut: 'canvas-search'
    }].filter(e => !e.hide);
    let k = [{
      active: h === PanelType.CODE,
      disabled: !y,
      hide: !b,
      key: _$$R9(PanelType.CODE),
      label: getI18nString('sites.side_rail.code'),
      icon: _$$t2,
      onClick: () => _(PanelType.CODE),
      shortcut: y ? 'set-sites-view-code' : void 0,
      customTooltip: y ? void 0 : {
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': getI18nString('sites.coming_soon_tooltip.make.title'),
        'data-tooltip-subtext': getI18nString('sites.coming_soon_tooltip.make.description')
      }
    }, {
      active: h === PanelType.DAKOTA,
      disabled: !v,
      key: _$$R9(PanelType.DAKOTA),
      label: getI18nString('sites.side_rail.cms'),
      icon: _$$i5,
      onClick: () => _(PanelType.DAKOTA),
      shortcut: v ? 'set-sites-view-cms' : void 0,
      customTooltip: v ? void 0 : {
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': getI18nString('sites.coming_soon_tooltip.cms.title'),
        'data-tooltip-subtext': getI18nString('sites.coming_soon_tooltip.cms.description')
      }
    }, {
      active: h === PanelType.SETTINGS,
      key: _$$R9(PanelType.SETTINGS),
      label: getI18nString('sites.side_rail.settings'),
      icon: _$$I4,
      onClick: () => {
        analyticsEventManager.trackDefinedEvent('sites.left_rail_tab_selected', {
          name: 'settings'
        });
        _(PanelType.SETTINGS);
      }
    }].filter(e => !e.hide);
    let w = _$$Ty();
    let S = _$$Py();
    let C = function () {
      let e = useDispatch();
      let t = _$$p2('isReadOnly');
      let i = useAtomWithSubscription(_$$oD);
      let n = _$$D2();
      let l = trackFileEventWithUser();
      let a = i ? getI18nString('sites.panel.hide_unsupported_properties') : getI18nString('sites.panel.see_unsupported_properties');
      return {
        expanded: !!i,
        icon: gQ,
        label: a,
        onClick: () => {
          i ? e(popModalStack()) : (l('sites_open_lint_modal'), e(showModalHandler({
            type: _$$bA
          })));
        },
        shouldShow: !t && !n
      };
    }();
    let T = _$$K6();
    let I = _$$A19({
      entrypoint: _$$r6.LEFT_RAIL_FOOTER,
      hideIfNoUpdates: !0,
      initialTabOverride: LibraryTabEnum.UPDATES
    });
    let E = [w, S, C, T, I];
    O1(() => (!!T.expanded || !!I.expanded || !!C.expanded) && (f(popModalStack()), !0), KD.OVERLAY);
    return {
      alerts: E,
      canvasViews: j,
      fullViews: k
    };
  }();
  let [n, d] = useAtomValueAndSetter(_$$s3);
  let c = canvasViews.map(e => jsx(g6, {
    iconProps: e
  }, e.key));
  let p = fullViews.map(e => jsx(g6, {
    iconProps: e
  }, e.key));
  return jsxs(_$$A18, {
    loadingShimmerCounts: [canvasViews.length, fullViews.length],
    children: [canvasViews.length && jsxs(Fragment, {
      children: [jsx(_$$A18.Divider, {}), jsx(_$$A18.Section, {
        children: c
      })]
    }), fullViews.length && jsxs(Fragment, {
      children: [jsx(_$$A18.Divider, {}), jsx(_$$A18.Section, {
        children: p
      })]
    }), jsx(_$$A18.Footer, {
      children: alerts.map(({
        expanded: e,
        icon: t,
        label: i,
        onClick: s,
        shouldShow: o,
        badge: c
      }) => o ? jsx(_$$A18.IconButton, {
        active: e,
        label: i,
        onClick: () => {
          n !== PanelType.FILE && d(PanelType.FILE);
          s?.();
        },
        recordingKey: `sitesLeftRailAlert.${i}`,
        icon: createElement(t),
        badge: c
      }, i) : null)
    })]
  });
}
let g9 = memo(() => {
  let e = useAtomWithSubscription(_$$s3);
  let t = useAtomWithSubscription(Nl);
  let i = useAtomWithSubscription(_$$bP);
  let n = useDispatch();
  useEffect(() => {
    let i = _$$R9(e);
    t && (i = t);
    setTagGlobal('sites-area', i);
    return () => setTagGlobal('sites-area', void 0);
  }, [e, t]);
  let {
    isLeftPanelCollapsed
  } = useContext(_$$t8);
  let c = _$$q8();
  let x = _$$aV();
  let m = t && e === PanelType.FILE;
  let h = (() => {
    if (c || m) return null;
    switch (e) {
      case PanelType.SETTINGS:
        return jsx(cC, {});
      case PanelType.DAKOTA:
        return jsx(hF, {});
      case PanelType.CODE:
        return jsx(h9, {});
      default:
        return null;
    }
  })();
  _$$bi();
  let g = GQ();
  if (!_$$p2('showUi')) return null;
  let f = null;
  if (t === $e.FIND ? f = jsx(EA.Provider, {
    value: !0,
    children: jsx(_$$f10, {
      showFilter: !0
    })
  }) : t === $e.INSERT && (f = jsx(_$$g7, {
    width: g
  })), isLeftPanelCollapsed) {
    return jsx('div', {
      className: 'x10l6tqk x13vifvy x1ey2m1c',
      children: jsx(_$$Q6, {
        children: jsx(gG, {})
      })
    });
  }
  let _ = jsxs('div', {
    className: 'x78zum5 xdt5ytf x1yjdb4r x5yr21d',
    children: [jsx(g$, {}), jsx(gO, {})]
  });
  let b = !c && !x && jsx('div', {
    ..._$$Ay.props(fe.overlay, m && !i ? fe.overlayVisible : fe.overlayHidden),
    children: f
  });
  let y = jsx(_$$Q6, {
    leftOffset: _$$_4,
    children: jsxs(_$$$2, {
      customLoadingView: jsx(gB, {}),
      children: [!h && b, _]
    })
  });
  return jsxs(_$$tH, {
    boundaryKey: 'SitesLeftPanel',
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    team: _$$e2.SITES_EDITOR,
    onError: () => {
      n(VisualBellActions.enqueue({
        message: getI18nString('sites.left_panel.visual_bell.left_panel_error_boundary_message'),
        type: 'react-error'
      }));
    },
    children: [jsxs('div', {
      ..._$$Ay.props(fe.leftPanel, !!h && fe.fullPagePanel),
      children: [jsx(g7, {}), y]
    }), h]
  });
});
let fe = {
  leftPanel: {
    position: 'x10l6tqk',
    top: 'x13vifvy',
    bottom: 'x1ey2m1c',
    $$css: !0
  },
  fullPagePanel: {
    zIndex: 'xjwufaf',
    $$css: !0
  },
  overlay: {
    position: 'x10l6tqk',
    top: 'x13vifvy',
    bottom: 'x1ey2m1c',
    width: 'xh8yej3',
    backgroundColor: 'x1yjdb4r',
    zIndex: 'xtuu48p',
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
    boxShadow: 'x1tu7v9l',
    $$css: !0
  },
  overlayVisible: {
    transition: 'xdq4c2z',
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    $$css: !0
  },
  overlayHidden: {
    transform: 'xwy64hf',
    transition: 'x5np2d6',
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    $$css: !0
  }
};
function fa() {
  let {
    duplicatedBreakpointId
  } = useAtomWithSubscription(_$$O8) ?? {};
  return duplicatedBreakpointId ? jsx(fs, {}) : null;
}
function fs() {
  let e = trackFileEventWithUser();
  let [t, i] = useAtomValueAndSetter(_$$O8);
  let {
    duplicatedBreakpointId,
    parentId
  } = t ?? {};
  let r = Xr(_$$K);
  let [d, c] = useState('');
  let [p, x] = useState('');
  let [m, h] = useState(!1);
  if (useEffect(() => {
    let e = !!parseInt(p);
    h(!!d && e);
  }, [d, p]), !duplicatedBreakpointId) {
    return null;
  }
  function g() {
    i(null);
  }
  return jsx(_$$bL2, {
    defaultPosition: new Point(window.innerWidth / 2 - 120, window.innerHeight / 2 - 120),
    onClose: g,
    children: jsxs(_$$vo, {
      children: [jsx(Y9, {
        children: jsx(_$$hE, {
          children: getI18nString('sites.add_breakpoint_modal.title')
        })
      }), jsx(_$$nB, {
        padding: 0,
        children: jsxs('form', {
          autoComplete: 'off',
          onSubmit: t => {
            t.preventDefault();
            (function () {
              if (m) {
                if (!duplicatedBreakpointId) {
                  console.warn('No duplicated breakpoint id provided');
                  return;
                }
                setTimeout(() => {
                  _$$b1({
                    guid: duplicatedBreakpointId,
                    name: d,
                    width: parseInt(p),
                    parentId
                  });
                });
                r(!0);
                e('sites_add_breakpoint', {
                  type: 'Custom',
                  width: p
                });
                g();
              }
            })();
          },
          children: [jsxs('div', {
            className: 'x1eimmx0 x1ov5mx2 xrvj5dj x1o61qjw x1plvh44 x1ti6jby x6s0dn4',
            children: [jsx(_$$Ay7, {
              className: 'x1n0bwc9',
              htmlFor: 'breakpoint-name',
              children: getI18nString('sites.add_breakpoint_modal.name')
            }), jsx(_$$p5, {
              'id': 'breakpoint-name',
              'value': d,
              'onChange': c,
              'autoFocus': !0,
              'data-1p-ignore': !0
            }), jsx(_$$Ay7, {
              className: 'x1n0bwc9',
              htmlFor: 'breakpoint-width',
              children: getI18nString('sites.add_breakpoint_modal.width')
            }), jsx(_$$p5, {
              'id': 'breakpoint-width',
              'value': p,
              'onChange': x,
              'data-1p-ignore': !0
            })]
          }), jsx('div', {
            className: 'breakpoints--customFooter--sFCTe',
            children: jsx(Button, {
              disabled: !m,
              type: 'submit',
              children: renderI18nText('sites.add_breakpoint_modal.button')
            })
          })]
        })
      })]
    })
  });
}
function fd() {
  let {
    show,
    isShowing,
    complete
  } = _$$e5({
    overlay: _$$l5,
    priority: _$$N5.HIGH_PRIORITY_MODAL
  });
  let {
    isEligible,
    teamId,
    canEditTeam
  } = _$$V4();
  let r = useCurrentPublicPlan('SitesPaywallOverlay');
  let o = useIsStarterPlan(r).unwrapOr(!1);
  return (_$$h3(() => {
    isEligible && o && show();
  }), isEligible && teamId && o) ? jsx(_$$W8, {
    open: isShowing,
    team: {
      id: teamId
    },
    hideCTA: !canEditTeam,
    onClose: complete
  }) : jsx(Fragment, {});
}
var ff = (e => (e.WEBPAGES = 'webpages', e.BLOCKS = 'blocks', e.CODE = 'code', e.PREVIEW = 'preview', e.PUBLISH = 'publish', e))(ff || {});
let f_ = 240 / 135;
function fb() {
  let e = useCurrentPublicPlan('OnboardSitesTOS');
  return e.status === 'errors' || e.status === 'disabled' ? null : jsx(fy, {});
}
function fy() {
  let e = _$$r7(Vc);
  let t = useAtomWithSubscription(e);
  let i = useCurrentPublicPlan('OnboardSitesTOSInner');
  let n = useDispatch();
  let a = _$$eY();
  let r = useAtomWithSubscription(LZ);
  let d = Xr(P4);
  let c = fR();
  let p = PR(a);
  let {
    show,
    isShowing,
    complete
  } = _$$e5({
    overlay: sfE,
    priority: _$$N5.DEFAULT_MODAL
  }, [t, i]);
  _$$h3(() => {
    r || show({
      canShow: (e, t) => {
        let i = t.tier === Agb.STARTER && !getFeatureFlags().sts_starter_enabled || t.tier === Agb.STUDENT;
        return !e && !i;
      }
    });
  });
  let g = e => {
    e === 'close_button_clicked' && (n(_$$b10({
      [Vc]: !1
    })), n(_$$sf({
      view: 'recentsAndSharing'
    })));
  };
  return r ? null : jsx(_$$_l, {
    closeButtonColor: 'light',
    description: renderI18nText('sites.onboarding.welcome.description'),
    disclaimerFooter: renderI18nText('sites.onboarding.welcome.terms_of_service', {
      beta_terms: jsx(_$$N6, {
        newTab: !0,
        href: '/product-specific-terms/',
        trusted: !0,
        children: renderI18nText('sites.onboarding.welcome.beta_terms')
      }),
      acceptable_publication_policy: jsx(_$$N6, {
        newTab: !0,
        href: '/legal/acceptable-publication-policy/',
        trusted: !0,
        children: renderI18nText('sites.onboarding.welcome.acceptable_publication_policy')
      }),
      ai_subprocessors: jsx(_$$N6, {
        newTab: !0,
        href: '/sub-processors/',
        trusted: !0,
        children: renderI18nText('sites.onboarding.welcome.ai_subprocessors')
      })
    }),
    isShowing,
    media: jsx(_$$oW, {
      src: buildUploadUrl('5cce6a0fbea25e98e646f188d32b8441a0aa0679'),
      alt: getI18nString('sites.onboarding.welcome.alt'),
      width: 332
    }),
    onClose: g,
    preventUserClose: !0,
    primaryCta: {
      type: 'button',
      label: jsx(TextWithTruncation, {
        fontSize: 11,
        children: renderI18nText('sites.onboarding.welcome.accept')
      }),
      onClick: () => {
        n(_$$b10({
          [Vc]: !0,
          [_$$at]: !0,
          [R0]: c
        }));
        complete();
        p || d(!0);
      },
      ctaTrackingDescriptor: _$$c8.AGREE
    },
    secondaryCta: {
      type: 'button',
      label: jsx(TextWithTruncation, {
        fontSize: 11,
        children: renderI18nText('sites.onboarding.welcome.decline')
      }),
      onClick: () => {
        g('close_button_clicked');
      },
      ctaTrackingDescriptor: _$$c8.DECLINE
    },
    title: jsxs('div', {
      children: [renderI18nText('sites.onboarding.welcome.title'), _$$z0() === 'BETA' ? jsx(Ex, {
        className: 'xxymvpz xet2fuk',
        color: zE.BRAND,
        subtle: !0,
        text: renderI18nText('file_browser.creation_buttons.beta')
      }) : null]
    }),
    trackingContextName: 'Sites Onboarding > Terms of Service'
  });
}
function fv() {
  let e = useDispatch();
  let t = _$$r7(_$$at);
  let i = useAtomWithSubscription(t);
  let n = _$$r7(_$$uy);
  let r = useAtomWithSubscription(n);
  let d = fR();
  let {
    show,
    isShowing,
    complete,
    uniqueId
  } = _$$e5({
    overlay: Nbd,
    priority: _$$N5.DEFAULT_MODAL
  }, [i, r]);
  let [m, h] = useState(!1);
  _$$E8(uniqueId, [_$$lz], () => {
    h(!1);
    show({
      canShow: (e, t) => e && !t
    });
  });
  _$$E8(uniqueId, [Ab], () => {
    h(!0);
    show({
      canShow: (e, t) => e && !t
    });
  });
  let g = useMemo(() => ['webpages', 'blocks', ...(d ? ['code'] : []), 'preview', 'publish'], [d]);
  let {
    currentStep,
    next
  } = _$$A11({
    numSteps: g.length,
    onComplete: () => {
      e(_$$b10({
        [R0]: d
      }));
      complete();
    }
  });
  let b = useMemo(() => g.map((e, t) => jsx(fk, {
    onClickPrimaryCta: next,
    onClose: complete,
    isShowing,
    currentStep: t + 1,
    totalSteps: g.length,
    isTemplateFlow: m,
    stepType: e,
    nextStepType: t < g.length - 1 ? g[t + 1] : void 0
  }, e)), [next, complete, isShowing, m, g]);
  return isShowing && b ? jsx(_$$U4, {
    currentStep,
    isShowing,
    children: b
  }) : jsx(fj, {});
}
function fj() {
  let e = useDispatch();
  let t = _$$r7(_$$at);
  let i = useAtomWithSubscription(t);
  let n = _$$r7(_$$uy);
  let d = useAtomWithSubscription(n);
  let c = _$$r7(R0);
  let u = useAtomWithSubscription(c);
  let p = useAtomWithSubscription(P4);
  let x = fR();
  let {
    show,
    isShowing,
    complete
  } = _$$e5({
    overlay: TtK,
    priority: _$$N5.DEFAULT_MODAL
  }, [i, d, u]);
  useEffect(() => {
    p || show({
      canShow: (e, t, i) => e && t && !i && x
    });
  }, [p, show, x]);
  let f = useCallback(() => {
    e(_$$b10({
      [R0]: !0
    }));
    complete();
  }, [e, complete]);
  let _ = Xr(_$$tM);
  let b = useCallback(() => {
    _(DesignGraphElements.CODE_COMPONENT);
    f();
  }, [_, f]);
  return isShowing && x ? jsx(fk, {
    onClickPrimaryCta: b,
    onClose: f,
    isShowing,
    currentStep: 1,
    totalSteps: 1,
    stepType: 'code',
    nextStepType: void 0
  }) : null;
}
function fk(e) {
  switch (e.stepType) {
    case 'webpages':
      return jsx(fC, {
        ...e
      });
    case 'blocks':
      return jsx(fT, {
        ...e
      });
    case 'code':
      return jsx(fI, {
        ...e
      });
    case 'preview':
      return jsx(fE, {
        ...e
      });
    case 'publish':
      return jsx(fN, {
        ...e
      });
  }
}
function fw({
  onClickPrimaryCta: e,
  currentStep: t,
  totalSteps: i,
  nextStepType: n
}) {
  let l = renderI18nText('sites.onboarding.callout.next');
  n && t !== i || (l = renderI18nText('sites.onboarding.callout.finish'));
  let a = null;
  switch (n) {
    case 'blocks':
      a = renderI18nText('sites.onboarding.blocks.next');
      break;
    case 'code':
      a = renderI18nText('sites.onboarding.code.next');
      break;
    case 'preview':
      a = renderI18nText('sites.onboarding.preview.next');
      break;
    case 'publish':
      a = renderI18nText('sites.onboarding.publish.next');
  }
  i - t == 1 ? l = renderI18nText('sites.onboarding.callout.last_colon', {
    last_step: a
  }) : n && (l = renderI18nText('sites.onboarding.callout.next_colon', {
    next_step: a
  }));
  return {
    type: 'button',
    label: l,
    onClick: e,
    ctaTrackingDescriptor: n ? _$$c8.NEXT : _$$c8.FINISH
  };
}
function fS(e) {
  return {
    type: 'link',
    label: renderI18nText('sites.onboarding.callout.learn_more'),
    href: e,
    ctaTrackingDescriptor: _$$c8.LEARN_MORE
  };
}
function fC({
  onClickPrimaryCta: e,
  onClose: t,
  isShowing: i,
  currentStep: n,
  totalSteps: s,
  nextStepType: r
}) {
  let o = _$$eY();
  let d = _$$e6();
  let c = useRef(null);
  if (d) {
    let e = o.get(d);
    if (e && e.childrenNodes && e.childCount > 0) {
      for (let t of e.childrenNodes) t.isPrimaryBreakpointFrame && (c.current = t);
    }
  }
  return jsx(_$$rq, {
    arrowPosition: F_.LEFT_TITLE,
    description: renderI18nText('sites.onboarding.webpages.description'),
    disableHighlight: !0,
    isCanvasNode: !0,
    isShowing: i,
    media: jsx(_$$w3, {
      src: buildUploadUrl('3d6d3d536057fa86a5aa55439449eb573cd183a3'),
      aspectRatio: f_,
      hideBorder: !0
    }),
    onClose: t,
    primaryCta: fw({
      onClickPrimaryCta: e,
      currentStep: n,
      totalSteps: s,
      nextStepType: r
    }),
    stepCounter: {
      stepNum: n,
      totalNumSteps: s
    },
    targetKey: c.current?.guid || '',
    title: renderI18nText('sites.onboarding.webpages.title'),
    trackingContextName: 'Sites Onboarding > Webpages'
  });
}
function fT({
  onClickPrimaryCta: e,
  onClose: t,
  isShowing: i,
  currentStep: n,
  totalSteps: a,
  isTemplateFlow: s,
  nextStepType: r
}) {
  let o = _$$b2();
  return jsx(_$$rq, {
    arrowPosition: F_.RIGHT_TITLE,
    description: renderI18nText('sites.onboarding.blocks.description'),
    isShowing: i,
    media: jsx(_$$w3, {
      src: buildUploadUrl(s ? '5a06b9550cb947e69c316efaaf1e22f5754cf19b' : '5373a71c8b5908a6b35030e235cfce84981f9120'),
      aspectRatio: f_,
      hideBorder: !0
    }),
    onClose: t,
    primaryCta: fw({
      onClickPrimaryCta: e,
      currentStep: n,
      totalSteps: a,
      nextStepType: r
    }),
    stepCounter: {
      stepNum: n,
      totalNumSteps: a
    },
    targetKey: o || !s ? _$$we : Qr,
    title: renderI18nText('sites.onboarding.blocks.title'),
    trackingContextName: 'Sites Onboarding > Blocks'
  });
}
function fI({
  onClickPrimaryCta: e,
  onClose: t,
  isShowing: i,
  currentStep: n,
  totalSteps: a,
  nextStepType: r
}) {
  let o = useDispatch();
  _$$h3(() => {
    o(_$$b10({
      [R0]: !0
    }));
  });
  return jsx(_$$rq, {
    arrowPosition: F_.BOTTOM,
    description: renderI18nText('sites.onboarding.code.description'),
    isShowing: i,
    media: jsx(_$$y1, {
      src: buildUploadUrl('6a84e5415e73728b6be860ca115c407b07691df8'),
      alt: getI18nString('sites.onboarding.code.alt'),
      aspectRatio: f_
    }),
    onClose: t,
    primaryCta: a === 1 ? {
      type: 'button',
      label: renderI18nText('sites.onboarding.code.try_it_out'),
      onClick: e,
      ctaTrackingDescriptor: r ? _$$c8.NEXT : _$$c8.FINISH
    } : fw({
      onClickPrimaryCta: e,
      currentStep: n,
      totalSteps: a,
      nextStepType: r
    }),
    secondaryCta: fS('https://help.figma.com/hc/articles/31242824165143'),
    stepCounter: a > 1 ? {
      stepNum: n,
      totalNumSteps: a
    } : void 0,
    targetKey: _$$N4,
    title: renderI18nText('sites.onboarding.code.title'),
    trackingContextName: 'Sites Onboarding > Code'
  });
}
function fE({
  onClickPrimaryCta: e,
  onClose: t,
  isShowing: i,
  currentStep: n,
  totalSteps: a,
  nextStepType: s
}) {
  return jsx(_$$rq, {
    arrowPosition: F_.TOP,
    description: renderI18nText('sites.onboarding.preview.description'),
    isShowing: i,
    media: jsx(_$$y1, {
      src: buildUploadUrl('f4556dd29bb49bbe6798cd4bef11e12a37ac4778'),
      alt: getI18nString('sites.onboarding.preview.alt'),
      aspectRatio: f_
    }),
    onClose: t,
    primaryCta: fw({
      onClickPrimaryCta: e,
      currentStep: n,
      totalSteps: a,
      nextStepType: s
    }),
    stepCounter: {
      stepNum: n,
      totalNumSteps: a
    },
    targetKey: Iv,
    title: renderI18nText('sites.onboarding.preview.title'),
    trackingContextName: 'Sites Onboarding > Preview'
  });
}
function fN({
  onClickPrimaryCta: e,
  onClose: t,
  isShowing: i,
  currentStep: n,
  totalSteps: a,
  nextStepType: s
}) {
  return jsx(_$$rq, {
    arrowPosition: F_.RIGHT_TITLE,
    description: renderI18nText('sites.onboarding.publish.description'),
    isShowing: i,
    media: jsx(_$$y1, {
      src: buildUploadUrl('bcd0b976a7fbe595b90b688425f8ca52eafd672a'),
      alt: getI18nString('sites.onboarding.publish.alt'),
      aspectRatio: f_
    }),
    onClose: t,
    primaryCta: fw({
      onClickPrimaryCta: e,
      currentStep: n,
      totalSteps: a,
      nextStepType: s
    }),
    secondaryCta: n === a ? fS('https://help.figma.com/hc/articles/31242845959703') : void 0,
    stepCounter: {
      stepNum: n,
      totalNumSteps: a
    },
    targetKey: ZH,
    title: renderI18nText('sites.onboarding.publish.title'),
    trackingContextName: 'Sites Onboarding > Publish'
  });
}
function fR() {
  let e = useAtomWithSubscription(_$$Q) === ViewType.LAYOUT;
  return ((getFeatureFlags().sts_code_authoring || getFeatureFlags().sts_code_authoring_by_plan) && e) ?? !1;
}
function fD({
  recordingKey: e
}) {
  let t = useAtomWithSubscription(_$$_b);
  assert(!!t, 'sitePreviewState should not be null');
  let i = useAtomWithSubscription(t.history.currentAtom);
  return jsx(_$$K2, {
    'aria-label': getI18nString('sites.modal.back'),
    'onClick': () => {
      t.history.back();
    },
    'disabled': !i.canMoveBackward,
    'recordingKey': generateRecordingKey(e, 'back'),
    'children': jsx(_$$C6, {})
  });
}
function fz({
  recordingKey: e
}) {
  let t = useAtomWithSubscription(_$$_b);
  assert(!!t, 'sitePreviewState should not be null');
  let i = useAtomWithSubscription(t.history.currentAtom);
  return jsx(_$$K2, {
    'aria-label': getI18nString('sites.modal.forward'),
    'onClick': () => {
      t.history.forward();
    },
    'disabled': !i.canMoveForward,
    'recordingKey': generateRecordingKey(e, 'forward'),
    'children': jsx(_$$e12, {})
  });
}
function fB({
  recordingKey: e
}) {
  let t = useAtomWithSubscription(_$$_b);
  assert(!!t, 'sitePreviewState should not be null');
  return jsx(_$$K2, {
    'aria-label': getI18nString('sites.modal.reload'),
    'onClick': () => {
      t.history.refresh();
    },
    'recordingKey': generateRecordingKey(e, 'reload'),
    'children': jsx(_$$T4, {})
  });
}
var f$ = (e => (e.INLINE_EDGE_RESIZE = 'Inline Edge Resize', e.SIZE_INPUT = 'Size Input', e.BREAKPOINT_CHANGE = 'Breakpoint Change', e.FULL_RESIZE_HANDLE = 'Full Preview Resize Handle', e.INLINE_FIT_TO_SCREEN = 'Fit To Screen', e))(f$ || {});
function fU() {
  let e = trackFileEventWithUser();
  return useDebouncedCallback(t => {
    e('sites_resize_preview', {
      mode: atomStoreManager.get(_$$_b)?.mode,
      resizeSource: t
    });
  }, 2e3);
}
function fK(e) {
  return useMemo(() => {
    if (!e) return [];
    let t = !1;
    let i = !1;
    let n = !1;
    let l = [];
    for (let a of e.childrenNodes) {
      let e;
      a.size.x <= _$$b0 ? (t = !0, e = 'mobile') : a.size.x <= zQ ? (i = !0, e = 'tablet') : (n = !0, e = 'desktop');
      l.push({
        name: a.name + a.guid,
        label: a.name.toLowerCase() === e ? getI18nString(`sites.modal.${e}`) : a.name,
        width: a.size.x,
        height: a.size.y,
        type: e
      });
    }
    t || l.push({
      name: 'Mobile',
      label: getI18nString('sites.modal.mobile'),
      width: MS,
      height: 0,
      type: 'mobile'
    });
    i || l.push({
      name: 'Tablet',
      label: getI18nString('sites.modal.tablet'),
      width: IL,
      height: 0,
      type: 'tablet'
    });
    n || l.push({
      name: 'Desktop',
      label: getI18nString('sites.modal.desktop'),
      width: _$$yF,
      height: 0,
      type: 'desktop'
    });
    l.sort((e, t) => t.width - e.width);
    return l;
  }, [e]);
}
function fH(e, t) {
  return useMemo(() => {
    debug(e.length > 0, 'No breakpoints found');
    let i = e.find(e => e.width <= t) ?? e[e.length - 1];
    return i?.name || 'Desktop';
  }, [e, t]);
}
function fq(e) {
  let t = function (e, t) {
    let i = fK(e);
    let n = [];
    for (let e of i) e.width >= 320 && n.push(e);
    return n;
  }(e.currentLayoutSet, 0);
  let i = fH(t, e.previewWidth);
  let n = useRef(null);
  let r = BK('breakpoint-picker-dropdown');
  let o = useMemo(() => {
    let e = t.find(e => e.type === 'mobile');
    let i = t.find(e => e.type === 'tablet');
    return [t.find(e => e.type === 'desktop'), i, e].filter(e => void 0 !== e);
  }, [t]);
  let d = useDispatch();
  let c = fU();
  let p = useMemo(() => t.map(e => ({
    displayText: e.label,
    displayTextIcon: _$$n1(e.width),
    sideText: `${e.width}`,
    rightJustifySideText: !0,
    isChecked: e.name === i,
    args: e.name
  })), [t, i]);
  let x = useCallback(i => {
    let n = t.find(e => e.name === i);
    n && (c(f$.BREAKPOINT_CHANGE), e.setPreviewWidth(n.width, !0));
  }, [t, e, c]);
  let m = useCallback(e => {
    let {
      value
    } = e.currentTarget;
    i === value && x(value);
  }, [i, x]);
  let h = useCallback(e => {
    let {
      value
    } = e.currentTarget;
    e.key === 'Enter' && i === value && x(value);
  }, [i, x]);
  if (!e.currentLayoutSet) return null;
  let g = r.showing && n.current && jsx(noop, {
    showPoint: !0,
    shouldUsePortal: e.isFullPagePreview,
    parentRect: n.current.getBoundingClientRect(),
    items: p,
    onSelectItem: e => x(e.args),
    dispatch: d,
    lean: 'left'
  });
  let f = jsx(_$$K2, {
    'aria-label': getI18nString('inline_preview.overflow_menu'),
    'ref': n,
    'htmlAttributes': {
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': getI18nString('inline_preview.overflow_menu')
    },
    'onClick': e => {
      e.stopPropagation();
      r.toggle({});
    },
    'children': jsx(_$$r2, {})
  });
  return jsxs(Fragment, {
    children: [jsxs('div', {
      className: 'breakpoint_picker--wrapper--XrHGV',
      children: [jsx(_$$bL, {
        onChange: x,
        value: i,
        legend: jsx(_$$q2, {
          children: getI18nString('sites.preview.layouts')
        }),
        children: (o || []).map(e => jsx(_$$c$2, {
          'value': e.name,
          'icon': jsx('div', {
            className: 'breakpoint_picker--toggleStyle--edMn8',
            children: _$$n1(e.width)
          }),
          'aria-label': e.label,
          'htmlAttributes': {
            'data-tooltip': e.label,
            'data-tooltip-type': KindEnum.TEXT,
            'onClick': m,
            'onKeyDownCapture': h
          }
        }, e.name))
      }), f]
    }), g]
  });
}
let fX = 'resize_controls--scrubbableInput--Bd5TX';
let fV = 'resize_controls--input--O3LqJ raw_components--flushLeft--YH-5P';
let fG = 'resize_controls--inactiveLabel--G8Rru raw_components--iconInsideBorderFocusWithin--2g7fO';
function fW(e) {
  let t = useDispatch();
  let i = fU();
  return jsxs('div', {
    className: 'resize_controls--controlGroup--M4UEb',
    children: [jsx(fq, {
      previewWidth: e.width,
      setPreviewWidth: e.setWidth,
      currentLayoutSet: e.currentLayoutSet,
      isFullPagePreview: e.isFullPagePreview
    }), !e.hideSizeSettings && jsxs(Fragment, {
      children: [jsx($j, {
        'bigNudgeAmount': 10,
        'className': fX,
        'data-tooltip': getI18nString('fullscreen.properties_panel.transform_panel.width'),
        'data-tooltip-type': KindEnum.TEXT,
        'disabled': void 0 === e.width,
        'dispatch': t,
        'inputClassName': fV,
        'min': 100,
        'onValueChange': t => {
          i(f$.SIZE_INPUT);
          e.setWidth(t, !1);
        },
        'smallNudgeAmount': 10,
        'value': e.width,
        'children': jsx('span', {
          className: `${fG} svg`,
          children: renderI18nText('fullscreen.properties_panel.transform_panel.w')
        })
      }), jsx($j, {
        'bigNudgeAmount': 10,
        'className': fX,
        'data-tooltip': getI18nString('fullscreen.properties_panel.transform_panel.height'),
        'data-tooltip-type': KindEnum.TEXT,
        'dispatch': t,
        'inputClassName': fV,
        'min': 100,
        'onValueChange': t => {
          i(f$.SIZE_INPUT);
          e.setHeight(t);
        },
        'smallNudgeAmount': 10,
        'value': e.height,
        'children': jsx('span', {
          className: `${fG} svg`,
          children: renderI18nText('fullscreen.properties_panel.transform_panel.h')
        })
      }), jsx($j, {
        'bigNudgeAmount': 1,
        'className': fX,
        'data-tooltip': getI18nString('sites.preview.scale'),
        'data-tooltip-type': KindEnum.TEXT,
        'dispatch': t,
        'inputClassName': fV,
        'min': 2,
        'onValueChange': e.setScale,
        'smallNudgeAmount': 1,
        'value': e.scale,
        'children': jsx('span', {
          className: `${fG} svg`,
          children: renderI18nText('fullscreen.scrubbable.percent')
        })
      })]
    })]
  });
}
function fY() {
  let [e, t] = useState(null);
  let [i, n] = useState(null);
  let [l, s] = useState(100);
  return {
    requestedWidth: e,
    setRequestedWidth: t,
    requestedHeight: i,
    setRequestedHeight: n,
    scale: l,
    setScale: s
  };
}
function fJ(e) {
  let t = useAtomWithSubscription(e.currentAtom);
  return useMemo(() => {
    let e = getSingletonSceneGraph().getCurrentPage();
    let i = _$$sO(t.url);
    if (!e) return null;
    for (let n of e.childrenNodes) {
      if (n.isResponsiveSet && n.name === t.url || n.isResponsiveSet && n.name === i) return n;
    }
    return null;
  }, [t]);
}
let f0 = e => e === '/' ? getI18nString('sites.panel.home') : e;
function f1({
  modalHistory: e
}) {
  let t = Fk(e => JZ(e.getCurrentPage()).map(e => e.name));
  let i = Fk(e => e.getCurrentPage()?.guid);
  let [n, s] = useState({});
  useEffect(() => {
    (async () => {
      s(await _$$nl(i));
    })();
  }, [i]);
  let r = t;
  getFeatureFlags().dakota_preview && (r = _$$hE2(t, n));
  let d = useAtomWithSubscription(e.currentAtom);
  let c = d.url;
  let p = f0(c);
  return jsxs(_$$bL6, {
    value: c,
    onChange: t => {
      t !== d.url && e.restartAt({
        url: t
      });
    },
    children: [jsx('div', {
      className: 'xjp7ctv xuvv7d7',
      children: jsx(_$$l7, {
        label: jsx(HiddenLabel, {
          children: getI18nString('sites.panel.selectPage')
        }),
        size: 'md',
        iconLead: jsx(f5, {
          url: c
        }),
        children: p
      })
    }), jsx(_$$mc2, {
      children: r.map(e => jsx(f2, {
        name: e
      }, e))
    })]
  });
}
function f5({
  url: e
}) {
  return jsx('span', {
    className: 'x1mh6rdz',
    children: e === '/' ? jsx(_$$Q4, {
      className: 'xmauxvm'
    }) : jsx(_$$A0, {
      className: 'xmauxvm'
    })
  });
}
function f2({
  name: e
}) {
  let t = useMemo(() => f0(e), [e]);
  return jsxs(_$$c$5, {
    value: e,
    children: [' ', t]
  });
}
function f8({
  recordingKey: e,
  toggleDebugTools: t
}) {
  let i = useAtomWithSubscription(_$$_b);
  assert(!!i, 'sitePreviewState should not be null');
  let n = getFeatureFlags().sts_runtime_debug_tools;
  return jsxs('div', {
    className: 'sites_full_page_preview--rightControlGroup--x3yAk sites_full_page_preview--controlGroup--vHfcT',
    children: [n && jsx(_$$K2, {
      'aria-label': getI18nString('sites.modal.open-debug-tools'),
      'onClick': t,
      'recordingKey': generateRecordingKey(e, 'open-debug-tools'),
      'children': jsx(_$$J10, {})
    }), jsx(fB, {
      recordingKey: e
    }), jsx(fD, {
      recordingKey: e
    }), jsx(fz, {
      recordingKey: e
    }), jsx(_$$K2, {
      'aria-label': getI18nString('sites.modal.restart'),
      'onClick': () => {
        i.history.restart();
      },
      'recordingKey': generateRecordingKey(e, 'restart'),
      'children': jsx(_$$H8, {})
    })]
  });
}
function f6({
  onClose: e,
  modalHistory: t,
  recordingKey: i
}) {
  let n = selectCurrentFile();
  return jsxs('div', {
    className: 'sites_full_page_preview--leftControlGroup--tfTiF sites_full_page_preview--controlGroup--vHfcT',
    children: [jsx(_$$K2, {
      'aria-label': getI18nString('sites.modal.close'),
      'onClick': e,
      'recordingKey': generateRecordingKey(i, 'close'),
      'children': jsx(_$$C6, {})
    }), jsx('div', {
      className: 'sites_full_page_preview--headerTitle---5-ip',
      children: n !== null ? n.name : getI18nString('fullscreen.filename_view.title_placeholder')
    }), jsx('div', {
      className: 'sites_full_page_preview--pageSelectDropdownContainer--T56hQ',
      children: jsx(f1, {
        modalHistory: t
      })
    })]
  });
}
function f7(e) {
  let t = 'websitePreviewFull';
  let i = fJ(e.modalHistory);
  return jsxs('div', {
    'className': 'sites_full_page_preview--previewHeader--zWVOh',
    'data-preferred-theme': 'dark',
    'children': [jsx('div', {
      className: 'sites_full_page_preview--leftControls--nbIXH',
      children: jsx(f6, {
        recordingKey: generateRecordingKey(t, 'navigation-controls'),
        onClose: e.onClose,
        modalHistory: e.modalHistory
      })
    }), jsx('div', {
      className: 'sites_full_page_preview--centerControls--EyX7N',
      children: jsx(fW, {
        isFullPagePreview: !0,
        height: e.height,
        setHeight: e.setHeight,
        width: e.width,
        setWidth: e.setWidth,
        currentLayoutSet: i,
        scale: e.scale,
        setScale: e.setScale
      })
    }), jsx('div', {
      className: 'sites_full_page_preview--rightControls--boJ0z',
      children: jsx(f8, {
        recordingKey: generateRecordingKey(t, 'controls'),
        toggleDebugTools: e.toggleDebugTools
      })
    })]
  });
}
function f9() {
  let {
    Sprig
  } = useSprigWithSampling();
  let t = useAtomWithSubscription(_$$_b);
  return useAtomWithSubscription(IX) !== 'fullscreen' ? null : jsx(_e, {
    modalHistory: t?.history,
    initialSize: t?.initialSize,
    testFlags: t?.testFlags,
    onClose: () => {
      _$$uP(Sprig);
    }
  });
}
function _e({
  modalHistory: e,
  initialSize: t,
  onClose: i,
  testFlags: n
}) {
  let s = useRef(null);
  let d = useAtomWithSubscription(Og);
  let c = t?.x;
  let {
    requestedWidth,
    setRequestedWidth,
    requestedHeight,
    setRequestedHeight,
    scale,
    setScale
  } = fY();
  let f = useAtomWithSubscription(HA);
  let [_, b] = useState(window.innerWidth);
  let [y, v] = useState(window.innerHeight);
  let [j, k] = useState(void 0);
  let [w, S] = useState(!0);
  let [C, T] = useState(!1);
  let I = e => {
    setRequestedWidth(e);
    let t = _ - 44;
    e > t && setScale(t / e * 100);
  };
  useEffect(() => {
    let e = new ResizeObserver(() => {
      if (s.current) {
        let e = s.current.offsetWidth || window.innerWidth;
        let t = s.current.offsetHeight || window.innerHeight;
        b(e);
        v(t);
      }
    });
    s.current && e.observe(s.current);
    return () => {
      e.disconnect();
    };
  }, []);
  let E = () => {
    let e = 100 / scale * _ - 44;
    return requestedWidth !== null ? clamp(requestedWidth, 320, e) : clamp(c ?? 0, 320, e);
  };
  let N = () => {
    let e = 100 / scale * y - 22;
    return requestedHeight !== null ? clamp(requestedHeight, 320, e) : e;
  };
  O1(() => {
    let e = f !== null;
    e && i();
    return e;
  }, KD.OVERLAY);
  let R = fU();
  let A = (e, t) => {
    let i = t.left;
    let n = i / (scale / 100);
    let l = t.right - n + i;
    e[OP.LEFT] && setRequestedWidth(Math.max(l - n, 320));
    e[OP.RIGHT] && setRequestedWidth(Math.max(l - n, 320));
    e[OP.BOTTOM] && setRequestedHeight(t.bottom / (scale / 100));
    R(f$.FULL_RESIZE_HANDLE);
  };
  let L = {
    width: `${E()}px`,
    height: `${N()}px`,
    transformOrigin: 'top center',
    transform: `scale(${scale / 100})`,
    transition: 'transform 0.2s ease-in-out',
    overflow: 'hidden',
    borderRadius: 'var(--radius-large)',
    ...(j ? {
      pointerEvents: 'none'
    } : {})
  };
  let P = () => ({
    top: 0,
    left: 0,
    right: E(),
    bottom: scale / 100 * N()
  });
  return jsxs('div', {
    'className': 'sites_full_page_preview--fullPagePreview--Xz3JG',
    'onWheel': e => {
      e.stopPropagation();
    },
    'data-preferred-theme': 'light',
    'children': [e && jsx(f7, {
      onClose: i,
      width: E(),
      setWidth: (e, t) => {
        t ? I(e) : setRequestedWidth(e);
      },
      height: N(),
      scale,
      setScale,
      setHeight: setRequestedHeight,
      modalHistory: e,
      toggleDebugTools: () => {
        T(!C);
        f && f.sendMessage('toggleDebugTools', {});
      }
    }), jsxs('div', {
      ref: s,
      className: 'sites_full_page_preview--previewBounds--V0iWO',
      children: [jsxs('div', {
        className: 'sites_full_page_preview--horizontalResizeContainer--adzo-',
        children: [jsx(_t, {
          getCurrentContainerBounds: P,
          resizeTo: A,
          isResizing: j,
          setIsResizing: k,
          direction: OP.LEFT
        }), jsx('div', {
          className: 'sites_full_page_preview--resizeContainer--Ax-Sh',
          style: {
            width: `${scale / 100 * E()}px`,
            height: `${scale / 100 * N()}px`
          },
          children: jsxs('div', {
            className: 'sites_full_page_preview--contentContainer--rhvCv',
            children: [w && jsx('div', {
              className: 'sites_full_page_preview--progressBarContainer--3iafs',
              children: jsx(z2, {
                editorType: _$$_Y.SITES,
                isViewer: !1,
                progressBarMode: UIVisibilitySetting.ON_AND_LOCKED
              })
            }), _ !== null && y !== null && jsx(_$$gs2, {
              previewHistory: e,
              onFirstRender: () => {
                S(!1);
              },
              onCloseRequested: () => {
                i();
              },
              style: L,
              skipSetPreviewedNode: !getFeatureFlags().sts_live_preview,
              testFlags: n
            }, d)]
          })
        }), jsx(_t, {
          getCurrentContainerBounds: P,
          resizeTo: A,
          isResizing: j,
          setIsResizing: k,
          direction: OP.RIGHT
        })]
      }), jsx(_t, {
        getCurrentContainerBounds: P,
        resizeTo: A,
        isResizing: j,
        setIsResizing: k,
        direction: OP.BOTTOM
      })]
    }), C && e && jsx(_$$Q9, {
      modalHistory: e
    })]
  });
}
function _t({
  resizeTo: e,
  getCurrentContainerBounds: t,
  isResizing: i,
  setIsResizing: n,
  direction: a
}) {
  let s = `resizeHandle-${a}`;
  let {
    startResizing
  } = _$$Q2({
    resizeTo: e,
    getCurrentContainerBounds: t,
    isResizing: i,
    setIsResizing: n,
    setResizeDirections: _$$lQ,
    lockAspectRatio: !1,
    hidden: !1,
    recordingKey: s,
    mirrorResizeHorizontally: !0
  });
  let o = useHandleMouseEvent(s, 'mousedown', e => {
    e.stopPropagation();
    e.preventDefault();
    startResizing([a], {
      x: e.clientX,
      y: e.clientY
    });
  });
  let d = a === OP.BOTTOM ? nh : ng;
  return jsx(_$$S2.div, {
    className: d,
    onMouseDown: o,
    children: jsx('div', {})
  });
}
function _r(e, t) {
  return Math.min(Math.round(t), e - 100);
}
function _o(e, t, i) {
  return Math.min(Math.round(i), e - t - 100) + _$$uF;
}
let _p = new Set(['children', 'id', 'interactions', 'isInAnimateTree', 'key', 'assets', 'isDynamic']);
let _x = new Set(['isolatedAbsoluteRenderBounds', 'absoluteBoundingBox', 'relativeTransform', 'size', 'fills', 'characterStyleOverrides', 'styleOverrideTable', 'interactionHandlers', 'materializedChildNodeProps', 'transitionProps']);
async function _m(e, {
  ignoreKnown: t,
  widths: i
}) {
  let n = new Z0();
  await n.ready;
  let l = e.filter(e => e.isResponsiveSet);
  let a = [];
  let s = t ? e => !_x.has(e.key) : void 0;
  for (let e of l) {
    let t = await _h(n.sitesPreview, n.setWidth.bind(n), e, s, i);
    let l = [];
    let r = 0;
    let o = 0;
    let d = 0;
    for (let e of t) {
      l = [...l, ...e.differenceProps];
      r = Math.max(r, e.propDifferenceScore);
      o = Math.max(o, e.treeDifferenceScore);
      d = Math.max(d, e.differences.length);
    }
    a.push({
      name: e.name,
      widthResults: t,
      differenceProps: [...new Set(l).values()],
      propDifferenceScore: r,
      treeDifferenceScore: o,
      differenceCount: d
    });
  }
  n.unmount();
  return a.flat();
}
async function _h(e, t, i, n, l) {
  let a = await B3([i.guid]);
  let s = await _$$YZ(i, e => B3([e.guid]));
  let r = [];
  for (let o of l = l ?? i.childrenNodes.map(e => e.size.x)) {
    await t(o);
    let i = await e.debugGetMaterializedTree(a, '/');
    let l = await e.debugGetMaterializedTree(s, '/');
    assert(o === l.width && o === i.width);
    let d = {
      width: o,
      actual: i,
      expected: l
    };
    let c = function (e, t, i) {
      let n = [];
      let {
        propDifferenceScore,
        treeDifferenceScore
      } = function e(t, i, n, l) {
        let a = l?.nodesInSubtree ?? 1;
        if (!n || !l) {
          t.push({
            path: i,
            key: 'node',
            actual: n,
            expected: l
          });
          return {
            propDifferenceScore: a,
            treeDifferenceScore: a
          };
        }
        if (n.node.name !== l.node.name) {
          t.push({
            path: i,
            key: 'name',
            actual: n.node.name,
            expected: l.node.name
          });
          return {
            propDifferenceScore: a,
            treeDifferenceScore: a
          };
        }
        if (n.node.type === 'ERROR' || l.node.type === 'ERROR') {
          t.push({
            path: i,
            key: 'error',
            actual: n.node,
            expected: l.node
          });
          return {
            propDifferenceScore: a,
            treeDifferenceScore: a
          };
        }
        if (i = `${i} ${n.node.name}`, _g(n) || _g(l)) {
          return {
            propDifferenceScore: 0,
            treeDifferenceScore: 0
          };
        }
        let s = 0;
        let r = 0;
        for (let e of new Set(Object.keys(n.node).concat(Object.keys(l.node))).values()) {
          if (_p.has(e) || (!n.node.strokePaints || n.node.strokePaints.length === 0) && e === 'strokeWeight') continue;
          let a = n.node[e];
          let r = l.node[e];
          deepEqual(a, r) || (t.push({
            path: i,
            key: e,
            actual: a,
            expected: r
          }), s = 1);
        }
        let o = Math.max(n.children?.length ?? 0, l.children?.length ?? 0);
        for (let a = 0; a < o; a++) {
          let {
            propDifferenceScore: _propDifferenceScore,
            treeDifferenceScore: _treeDifferenceScore
          } = e(t, `${i} > children[${a}]`, n.children?.[a], l.children?.[a]);
          s += _propDifferenceScore;
          r += _treeDifferenceScore;
        }
        return {
          propDifferenceScore: s,
          treeDifferenceScore: r
        };
      }(n, '', e, t);
      i && (n = n.filter(i));
      return {
        propDifferenceScore: Math.min(1, propDifferenceScore / (t?.nodesInSubtree ?? 1)),
        treeDifferenceScore: Math.min(1, treeDifferenceScore / (t?.nodesInSubtree ?? 1)),
        differenceProps: [...new Set(n.map(e => e.key)).values()],
        differences: n
      };
    }(i.tree, l.tree, n);
    r.push({
      metadata: d,
      ...c
    });
  }
  return r;
}
function _g(e) {
  return e?.node.type === 'IMAGE' || e?.node.type === 'SVG';
}
async function _b(e, t, i, n, l, a = !1) {
  assert(!!i);
  let {
    styling = !1,
    windowWidths = [],
    saveSnapshot = !1
  } = n ?? {};
  if (styling) {
    for (let e of i.childrenNodes ?? []) {
      !function (e, t) {
        _$$l.testSetup('sites-compare-layout', () => {
          e.findAllWithCriteria({
            types: ['TEXT']
          }).forEach(([e]) => {
            let i = t.get(e);
            i && (i.opacity = 0);
          });
        });
      }(e, t);
    }
  }
  let d = i.guid;
  let c = i.childrenNodes[0];
  assert(!!c);
  let u = new _$$a1({
    url: d
  });
  let p = new Z0(u, {
    x: c.size.x,
    y: 1
  }, {
    useGuidUrls: !0,
    generateFullAssets: saveSnapshot
  });
  let x = p.sitesPreview;
  try {
    let t;
    let n = {
      name: e,
      pass: !0,
      positionDifferenceCount: 0,
      sizeDifferenceCount: 0,
      layoutDifferenceScore: 0,
      sizeDifferenceScore: 0,
      widthDifferences: [],
      debugData: l
    };
    for (let l of [null, ...windowWidths]) {
      if (t === l) continue;
      l === null && (l = c.size.x);
      t = l;
      p.setWidth(l);
      let s = await x.oncePageRendered();
      if (saveSnapshot) {
        let {
          png
        } = await x.sendMessage('snapshotPage', {});
        let i = await png.arrayBuffer();
        let n = `data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(i)))}`;
        _$$hI.downloadFile(n, `${e}_${l}.png`);
      }
      let r = s.elementData ?? void 0;
      let d = s.documentData ?? void 0;
      let u = s.bodyData ?? void 0;
      let m = function (e, t) {
        let i = e.childrenNodes.slice().sort((e, t) => t.size.x - e.size.x);
        for (let e of i) {
          if (e.size.x <= t) return e;
        }
        return i[i.length - 1];
      }(i, l);
      if (assert(void 0 !== r), !(await WD(m, r.rect, e => {
        _$$l.testSetup('sites-compare-layout', () => BW(e, r));
        let {
          differences,
          layoutDifferenceScore,
          sizeDifferenceScore
        } = z_(e, r, {
          threshold: 1
        });
        let s = [...differences];
        m.parentNode.type === 'RESPONSIVE_SET' && (s.push(..._$$hv(e, u, {
          threshold: 1
        })), s.push(..._$$hv(e, d, {
          threshold: 1
        })));
        let o = s.filter(e => e.type === 'position').length;
        let c = s.filter(e => e.type === 'size').length;
        n.widthDifferences.push({
          width: l,
          differences: s,
          layoutDifferenceScore,
          sizeDifferenceScore,
          positionDifferenceCount: o,
          sizeDifferenceCount: c
        });
        n.layoutDifferenceScore = Math.max(n.layoutDifferenceScore, layoutDifferenceScore);
        n.sizeDifferenceScore = Math.max(n.sizeDifferenceScore, sizeDifferenceScore);
        n.positionDifferenceCount = Math.max(n.positionDifferenceCount, o);
        n.sizeDifferenceCount = Math.max(n.sizeDifferenceCount, c);
        return !s.length;
      })) && (n.pass = !1, a)) {
        break;
      }
    }
    return n;
  } finally {
    p.unmount();
  }
}
async function _j(e, t) {
  let {
    assetInstructions
  } = await LE([e.guid]);
  let n = void 0 !== t ? new _w() : null;
  let l = [];
  for (let e of assetInstructions) {
    if (e.type !== 'GENERATED_ASSET' || e.exportSetting.format !== 'SVG') continue;
    let i = {
      ...e,
      filename: e.filename.replace('svg', 'png'),
      exportSetting: {
        format: 'PNG',
        suffix: '',
        constraint: {
          type: 'SCALE',
          value: 2
        }
      }
    };
    let a = await _$$TS([e, i]);
    let s = a.files[e.filename];
    let r = a.files[i.filename];
    assert(void 0 !== s && void 0 !== r);
    let o = Math.ceil(2 * e.size.x);
    let d = Math.ceil(2 * e.size.y);
    let c = await _k(s, o, d);
    let u = await _k(r, o, d);
    let p = new ImageData(o, d);
    let x = _v(c.data, u.data, p.data, o, d);
    let m = x / Math.sqrt(o * d);
    l.push({
      pixels: o * d,
      pixelsDifferent: x,
      pixelsDifferentPercent: x / (o * d),
      pixelsDifferentPercentOfEdge: m,
      assetInstruction: e
    });
    void 0 !== t && x >= t && n?.addAsset(e, c, u, p);
  }
  return function (e) {
    let t = 0;
    let i = 0;
    let n = 0;
    let l = 0;
    let a = 0;
    let s = 0;
    for (let r of e) {
      t += r.pixels;
      i += r.pixelsDifferent;
      n += r.pixelsDifferentPercent;
      l += r.pixelsDifferentPercentOfEdge;
      a = Math.max(a, r.pixelsDifferentPercent);
      s = Math.max(s, r.pixelsDifferentPercentOfEdge);
    }
    return {
      svgPixelsDifferentPercent: i / t,
      svgPixelsDifferentAveragePercent: n / e.length,
      svgPixelsDifferentAveragePercentOfEdge: l / e.length,
      svgPixelsDifferentMaxPercent: a,
      svgPixelsDifferentMaxPercentOfEdge: s,
      results: e.slice().sort((e, t) => e.pixelsDifferentPercentOfEdge - t.pixelsDifferentPercentOfEdge)
    };
  }(l);
}
function _k(e, t, i) {
  let n = URL.createObjectURL(e);
  let l = () => URL.revokeObjectURL(n);
  return new Promise((e, a) => {
    let s = new Image();
    s.src = n;
    s.onload = () => {
      let n = document.createElement('canvas');
      n.width = t;
      n.height = i;
      let a = n.getContext('2d');
      a.drawImage(s, 0, 0, t, i);
      l();
      e(a.getImageData(0, 0, t, i));
    };
    s.onerror = () => {
      l();
      a();
    };
  });
}
class _w {
  constructor() {
    let e = this.div = document.createElement('div');
    document.body.appendChild(e);
    e.style.position = 'absolute';
    e.style.top = '0';
    e.style.left = '0';
    e.style.maxHeight = '100%';
    e.style.maxWidth = '100%';
    e.style.overflow = 'scroll';
    e.style.zIndex = '1000000';
    e.style.background = 'rgb(222, 222, 222)';
  }
  addAsset(e, t, i, n) {
    let l = document.createElement('div');
    let a = e => {
      let t = function (e) {
        let t = document.createElement('canvas');
        let i = t.getContext('2d');
        t.width = e.width;
        t.height = e.height;
        t.style.width = `${e.width / window.devicePixelRatio}px`;
        t.style.height = `${e.height / window.devicePixelRatio}px`;
        i.putImageData(e, 0, 0);
        return t;
      }(e);
      t.style.border = '1px solid #aeaed6';
      l.appendChild(t);
    };
    a(t);
    a(i);
    a(n);
    this.div.appendChild(l);
  }
}
function _S() {
  assert(!!getFeatureFlags().sts_runtime_debug_tools, 'runtime debug tools not enabled');
}
function _C() {
  let e = getSingletonSceneGraph();
  let t = e.getDirectlySelectedNodes();
  let i = t.length ? t : e.getCurrentPage()?.childrenNodes;
  assert(void 0 !== i);
  return i.filter(e => e.isResponsiveSet);
}
async function _T({
  ignoreKnown: e = !1,
  widths: t
} = {
  ignoreKnown: !1
}) {
  _S();
  let i = _C();
  if (!i.length) throw new Error('No breakpoint frames in selection');
  let n = await _m(i, {
    ignoreKnown: e,
    widths: t
  });
  console.warn('materialization differences', n);
  return n;
}
async function _I({
  widths: e,
  widthIncrements: t
} = {}) {
  _S();
  let i = _C();
  let n = [];
  for (let l of i) {
    let i = e => {
      e.behaviors && (e.behaviors = {});
      e.childrenNodes.forEach(i);
    };
    let a = _$$l.system('sites-debug-compare-layout', () => {
      let e = _$$X7(l);
      e.childrenNodes.forEach(i);
      return e;
    });
    let s = t;
    s || (s = a.responsiveSetSettings?.scalingMode === 'SCALE' ? [0] : [0, 100, 250]);
    try {
      let t = e;
      if (!e) {
        for (let e of (t = [], a.childrenNodes)) {
          for (let i of s) t.push(e.size.x + i);
        }
      }
      let i = await _b(a.name, getSingletonSceneGraph(), a, {
        windowWidths: t
      });
      n.push(i);
    } finally {
      _$$l.system('sites-debug-compare-layout', () => {
        a.removeSelfAndChildren();
      });
    }
  }
  console.warn('layout comparison results', n);
  return n;
}
async function _E({
  showDiff: e
} = {}) {
  _S();
  let t = [];
  for (let i of _C()) {
    t.push({
      name: i.name,
      ...(await _j(i, e))
    });
  }
  console.warn('SVG/PNG comparison result', t);
}
async function _R(e) {
  let t = new _A(e);
  await t.run();
}
class _A {
  constructor(e = {
    dryRun: !0
  }) {
    this.sceneGraph = getSingletonSceneGraph();
    this.imageCache = new Map();
    this.nodeFillsToFlatten = [];
    this.stats = {
      totalImagesGenerated: 0,
      cacheHits: 0,
      totalNodesVisited: 0
    };
    this.fillCheckFns = [e => e.type === 'IMAGE' && !!(_L(e.paintFilter?.contrast) || _L(e.paintFilter?.exposure) || _L(e.paintFilter?.highlights) || _L(e.paintFilter?.shadows) || _L(e.paintFilter?.temperature) || _L(e.paintFilter?.tint) || _L(e.paintFilter?.vibrance))];
    this.options = e;
  }
  async run() {
    console.warn('Running SitesFillOptimizer with options:', this.options);
    console.warn('Collecting fills to flatten...');
    let e = this.sceneGraph.getCurrentPage();
    if (e) {
      console.warn('Analyzing fills in current page...');
      let t = this.recursivelyFindAllFillsForNodes(e);
      console.warn(`Found ${t.length} fill(s) in current page`, {
        fills: t
      });
    }
    let t = this.sceneGraph.getInternalCanvas();
    if (t) {
      console.warn('Analyzing fills in internal canvas...');
      let e = this.recursivelyFindAllFillsForNodes(t);
      console.warn(`Found ${e.length} fill(s) in internal canvas`, {
        fills: e
      });
    }
    if (this.nodeFillsToFlatten.length === 0) {
      console.warn('No fills to flatten found. Optimizer done.');
      console.warn('Optimizer stats:', this.stats);
      return;
    }
    for (let {
      nodeId,
      fillsToFlatten
    } of (console.warn('Found fills to flatten:', this.nodeFillsToFlatten), this.options.dryRun ? console.warn('Dry run mode enabled. Skipping file version creation.') : (console.warn('Saving file version before running optimizer...'), await this.saveFileVersion(), console.warn('File version saved successfully.')), console.warn('Starting to generate new image fills...'), this.nodeFillsToFlatten)) {
      for (let {
        index,
        fill
      } of fillsToFlatten) {
        if (this.options.dryRun) {
          console.warn('Dry run: would generate new image fill for', {
            nodeId,
            fill,
            index
          });
          continue;
        }
        await this.generateNewImageFill(nodeId, fill, index);
      }
    }
    console.warn('All fills processed.');
    console.warn('SitesFillOptimizer run completed.');
    console.warn('BE SURE TO WAIT FOR ALL IMAGES TO BE UPLOADED TO S3!!!!');
    console.warn('Optimizer stats:', this.stats);
  }
  async saveFileVersion() {
    let e = debugState.getState();
    let t = e.selectedView?.view === 'fullscreen' ? e.selectedView.fileKey : null;
    if (!t) throw new Error('No file key found in state. Cannot save version.');
    await createSavepoint(t, 'Pre-optimization savepoint', 'This savepoint was created before running the Sites Fill Optimizer.', debugState.dispatch);
  }
  recursivelyFindAllFillsForNodes(e) {
    let t = this.analyzeNodeForFillsToFlatten(e);
    for (let i of e.childrenNodes) t = t.concat(this.recursivelyFindAllFillsForNodes(i));
    return t;
  }
  analyzeNodeForFillsToFlatten(e) {
    let t = [];
    let i = e.fills ?? [];
    e.isInstanceSublayer || (this.stats.totalNodesVisited += 1, i.forEach((e, i) => {
      if (e.type === 'IMAGE') {
        for (let n of this.fillCheckFns) {
          if (n(e)) {
            t.push({
              index: i,
              fill: e
            });
            return;
          }
        }
      }
    }), t.length !== 0 && this.nodeFillsToFlatten.push({
      nodeId: e.guid,
      fillsToFlatten: t
    }));
    return t;
  }
  async generateNewImageFill(e, t, i) {
    let n = getSingletonSceneGraph();
    let l = n.getInternalCanvas();
    console.warn('Generating new image fill for node', {
      nodeId: e,
      paint: t,
      index: i
    });
    let a = n.get(e);
    if (!a) {
      console.error('Node not found:', e);
      return;
    }
    if (!l) {
      console.error('Internal canvas not found. Unable to generate new image fill.');
      return;
    }
    let {
      originalImageWidth,
      originalImageHeight
    } = t;
    if (!originalImageWidth || !originalImageHeight) {
      console.error('Image fill has no original image size. Unable to generate new image fill.', t);
      return;
    }
    console.warn('Creating new fill object for image generation...');
    let d = {
      ...t,
      visible: !0,
      blendMode: 'NORMAL',
      imageScaleMode: 'FILL',
      rotation: 0,
      opacity: 1,
      transform: void 0
    };
    let c = await _P(JSON.stringify(d));
    console.warn('New fill hash:', c);
    let u = this.imageCache.get(c);
    if (u) {
      this.stats.cacheHits += 1;
      console.warn('Image already cached for fill, using cached image', {
        fill: d,
        newImage: u
      });
    } else {
      console.warn('Creating temporary node to use for image export...');
      let e = n.createNode('RECTANGLE', {
        tracking: TrackType.IGNORE
      });
      l.appendChild(e);
      e.size = {
        x: originalImageWidth,
        y: originalImageHeight
      };
      e.fills = [d];
      console.warn('Loading images and exporting... (this may take a moment)');
      let t = await e.loadImagesAndExport([{
        imageType: 'PNG',
        contentsOnly: !0,
        useAbsoluteBounds: !1
      }]);
      console.warn('Image data loaded, decoding...');
      u = await UD(t, 'image/png', 'flattened-image');
      console.warn('Image decoded, caching image for future use');
      this.imageCache.set(c, u);
      this.stats.totalImagesGenerated += 1;
      console.warn('Removing temporary fill node from scene graph');
      e.removeSelfAndChildren();
    }
    console.warn('Replacing fill in original node with new image...');
    _$$l.system('sites-fill-optimizer', () => {
      a.insertImageInFillPaint(u, t.imageScaleMode, i);
      let e = a.fills ?? [];
      let n = e[i];
      n && (n.imageScaleMode = t.imageScaleMode, n.opacity = t.opacity, n.blendMode = t.blendMode, n.visible = t.visible, n.rotation = t.rotation, n.transform = t.transform);
      e.splice(i + 1, 1);
      a.fills = e;
    });
    console.warn('Fill replaced successfully');
  }
}
function _L(e) {
  return void 0 !== e && !nearlyEqual(e, 0);
}
async function _P(e) {
  let t = new TextEncoder().encode(e);
  return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-1', t))).map(e => e.toString(16).padStart(2, '0')).join('');
}
function _z(e) {
  return useAtomWithSubscription(_$$_b) ? jsx(_B, {
    ...e
  }) : null;
}
function _B({
  recordingKey: e,
  height: t,
  width: i,
  setWidth: n,
  setHeight: r,
  scale: d,
  setScale: c
}) {
  let p = useAtomWithSubscription(_$$_b);
  assert(!!p, 'sitePreviewState should not be null');
  let x = fJ(p.history);
  let m = useDispatch();
  let [h, g] = useState({
    showOverflow: !1,
    layoutsInOverflow: !1
  });
  let f = useRef(null);
  let _ = useRef(null);
  let {
    showing,
    toggle
  } = BK('SITES_INLINE_PREVIEW_OVERFLOW_DROPDOWN');
  useEffect(() => {
    let e = new ResizeObserver(e => {
      let t = e[0];
      let i = t?.target.clientWidth;
      if (i) {
        let e = !1;
        let t = {
          ...h
        };
        i < 670 && !h.showOverflow ? (e = !0, t.showOverflow = !0) : i >= 670 && h.showOverflow && (e = !0, t.showOverflow = !1);
        i < 350 && !h.layoutsInOverflow ? (e = !0, t.layoutsInOverflow = !0) : i >= 350 && h.layoutsInOverflow && (e = !0, t.layoutsInOverflow = !1);
        e && g(t);
      }
    });
    let t = f.current;
    t && e.observe(t);
    return () => {
      t && e.unobserve(t);
    };
  }, [f, h]);
  let v = fK(x);
  let j = fH(v, i);
  let {
    windowInnerWidth,
    windowInnerHeight
  } = _$$l4();
  let S = fU();
  let C = useCallback(() => {
    let e = [];
    h.layoutsInOverflow && (e.push({
      disabled: !0,
      displayText: getI18nString('sites.modal.layouts'),
      alwaysShowCheckMarkOffset: !0
    }), v.forEach(t => {
      e.push({
        displayText: t.label,
        icon: _$$n1(t.width),
        sideText: `${t.width}`,
        rightJustifySideText: !0,
        recordingKey: `set-layout-${t.name}`,
        isChecked: t.name === j,
        name: `set-layout-${t.name}`,
        callback: () => {
          n(t.width, !0);
        }
      });
    }), e.push({
      separator: !0,
      displayText: ''
    }));
    h.showOverflow && (e.push({
      disabled: !0,
      displayText: getI18nString('sites.modal.scaling-options'),
      alwaysShowCheckMarkOffset: !0
    }), e.push({
      displayText: getI18nString('sites.modal.actual-size'),
      icon: jsx(_$$O0, {}),
      alwaysShowCheckMarkOffset: !0,
      recordingKey: 'toggle-actual-size',
      name: 'toggle-actual-sizes',
      callback: () => {
        c(100);
      }
    }), e.push({
      displayText: getI18nString('sites.modal.fit-to-screen'),
      icon: jsx(_$$H9, {}),
      alwaysShowCheckMarkOffset: !0,
      recordingKey: 'toggle-fit-to-screen',
      name: 'toggle-fit-to-screen',
      callback: () => {
        S(f$.INLINE_FIT_TO_SCREEN);
        n(windowInnerWidth / (d / 100), !1);
        r(windowInnerHeight / (d / 100));
      }
    }));
    return e;
  }, [h, v, j, n, r, windowInnerWidth, windowInnerHeight, d, c, S]);
  return jsxs(Fragment, {
    children: [jsxs('div', {
      className: 'sites_inline_preview_header--previewRoot--NAfKs',
      ref: f,
      children: [jsxs('div', {
        className: 'sites_inline_preview_header--previewContainer--WomCr',
        children: [jsx(fD, {
          recordingKey: e
        }), jsx(fz, {
          recordingKey: e
        })]
      }), jsx('div', {
        className: 'sites_inline_preview_header--middleContainer---R7pf sites_inline_preview_header--previewContainer--WomCr',
        children: !h.layoutsInOverflow && jsx(fW, {
          height: t,
          setHeight: r,
          width: i,
          setWidth: n,
          currentLayoutSet: x,
          scale: d,
          setScale: c,
          hideSizeSettings: h.showOverflow
        })
      }), jsxs('div', {
        className: 'sites_inline_preview_header--rightContainer--P5-cA sites_inline_preview_header--previewContainer--WomCr',
        children: [jsx(fB, {
          recordingKey: e
        }), jsx(_$, {
          recordingKey: e
        }), h.showOverflow && jsx('div', {
          ref: _,
          children: jsx(_$$K2, {
            'aria-label': getI18nString('inline_preview.overflow_menu'),
            'htmlAttributes': {
              'data-tooltip-type': KindEnum.TEXT,
              'data-tooltip': getI18nString('inline_preview.overflow_menu')
            },
            'actionOnPointerDown': !0,
            'onClick': e => {
              e.stopPropagation();
              toggle({});
            },
            'recordingKey': generateRecordingKey(e, 'overflowMenuButton'),
            'children': jsx(_$$A20, {})
          })
        })]
      })]
    }), showing && _.current && jsx(noop, {
      dispatch: m,
      parentRect: _.current.getBoundingClientRect(),
      onFocus: e => {
        e.stopPropagation();
      },
      showPoint: !0,
      lean: 'left',
      onSelectItem: e => {
        e.callback && e.callback();
      },
      recordingKey: generateRecordingKey(e, 'overflowMenu'),
      items: C()
    })]
  });
}
function _$({
  recordingKey: e
}) {
  let [t, i] = useAtomValueAndSetter(_$$_b);
  assert(!!t, 'sitePreviewState should not be null');
  return jsx(_$$K2, {
    'aria-label': getI18nString('sites.modal.open-full-preview'),
    'onClick': () => {
      i({
        ...t,
        mode: 'fullscreen'
      });
    },
    'recordingKey': generateRecordingKey(e, 'open-full-preview'),
    'children': jsx(_$$V5, {})
  });
}
getFeatureFlags().internal_only_debug_tools && (window.SitesDebuggingHelpers = {
  compareMaterialization: _T,
  compareLayout: _I,
  showLayoutDebugStyles: _$$lt,
  compareGeneratedSVGs: _E
});
getFeatureFlags().internal_only_debug_tools && (window.SitesFillOptimizer = {
  runOptimizer: _R
});
let _U = 'websitePreviewModal';
function _K() {
  let e = useAtomWithSubscription(_$$_b);
  return useAtomWithSubscription(IX) !== 'modal' ? null : jsx(_X, {
    modalHistory: e?.history,
    initialSize: e?.initialSize
  });
}
let _H = {
  x: 260,
  y: 200
};
let _q = e => {
  for (let t of e.directlySelectedNodes) {
    for (; t;) {
      if (t.isBreakpointFrame || t.isResponsiveSet) return t;
      if (t.parentNode) t = t.parentNode;else break;
    }
  }
};
function _X({
  modalHistory: e,
  initialSize: t = {
    x: 800,
    y: 600
  }
}) {
  let {
    Sprig
  } = useSprigWithSampling();
  let {
    width,
    setWidth,
    height,
    setHeight,
    setWidthForWindow,
    setHeightForWindow,
    minWidth,
    minHeight,
    position,
    setPosition
  } = function (e, t) {
    let {
      windowInnerWidth,
      windowInnerHeight
    } = _$$l4();
    let l = Av();
    let [s, r] = useState(() => _r(windowInnerWidth, e.x));
    let [o, d] = useState(() => _o(windowInnerHeight, l, e.y));
    let c = PN() ? 100 : t.x;
    let [u, p] = useState(new Point(100, 100));
    let x = useCallback(e => {
      let t = _r(windowInnerWidth, e);
      r(t);
      return t;
    }, [windowInnerWidth]);
    let m = useCallback(e => {
      let t = _o(windowInnerHeight, l, e);
      d(t);
      return t;
    }, [windowInnerHeight, l]);
    return {
      width: s,
      setWidth: r,
      height: o,
      setHeight: d,
      setWidthForWindow: x,
      setHeightForWindow: m,
      minWidth: c,
      minHeight: t.y,
      position: u,
      setPosition: p
    };
  }(t, _H);
  let [_, b] = useAtomValueAndSetter(_$$_b);
  let y = Xr(q9);
  let [v, j] = useAtomValueAndSetter(Og);
  let k = () => {
    _$$uP(Sprig);
  };
  O1(() => {
    let e = _ !== null;
    e && k();
    return e;
  }, KD.OVERLAY);
  let w = useRef(null);
  let S = useCallback(async () => {
    await new Promise(e => requestAnimationFrame(e));
    let e = w.current ? w.current.el : void 0;
    e && e.contains(document.activeElement) || y(Dw.None);
  }, [y]);
  let C = useCallback(async () => {
    await new Promise(e => requestAnimationFrame(e));
    y(Dw.Modal);
  }, [y]);
  let T = Object.keys(useSelector(e => e.mirror.sceneGraphSelection)).find(e => e) || null;
  let [I, E] = useState(!1);
  useEffect(() => {
    if (!T || getFeatureFlags().sts_disable_preview_selection) return;
    let e = getSingletonSceneGraph().getCurrentPage();
    assert(e !== null);
    let t = _q(e);
    if (!t) return;
    let i = _$$d10(t.guid);
    _ && i && i.startingNodeId !== _.startingNodeId && (I || (setWidthForWindow(i.initialSize.x), setHeightForWindow(i.initialSize.y)), b({
      mode: 'modal',
      ...i
    }), j(e => e + 1));
  }, [T, _, b, setWidthForWindow, setHeightForWindow, I, j]);
  let {
    requestedWidth,
    setRequestedWidth,
    requestedHeight,
    setRequestedHeight,
    scale,
    setScale
  } = fY();
  useEffect(() => {
    I || (setRequestedWidth(null), setRequestedHeight(null));
  }, [t.x, t.y, setRequestedWidth, setRequestedHeight, I]);
  let F = () => {
    let e = 100 / scale * width;
    return requestedWidth !== null ? clamp(requestedWidth, _H.x, e) : clamp(t.x, _H.x, e);
  };
  let M = () => {
    let e = (height - _$$uF) * (100 / scale);
    return requestedHeight !== null ? clamp(requestedHeight, _H.y, e) : e;
  };
  let D = e => {
    setRequestedWidth(e);
    let t = setWidthForWindow(e);
    e > t && setScale(width / e * 100);
    E(!0);
  };
  let z = e => {
    setRequestedWidth(e);
    setWidthForWindow(e);
    E(!0);
  };
  let B = fU();
  return jsx(_$$od, {
    ref: w,
    allowResizeHeight: !0,
    allowResizeWidth: !0,
    dragHeaderOnly: !0,
    frameStyle: {
      overflow: 'hidden'
    },
    fullFrame: !0,
    height: scale / 100 * M() + _$$uF,
    ignoreCloseShortcut: !0,
    minHeight,
    minWidth,
    onBlur: S,
    onClose: k,
    onFocus: C,
    position,
    recordingKey: _U,
    setHeight: e => {
      B(f$.INLINE_EDGE_RESIZE);
      let t = e / (scale / 100);
      setRequestedHeight(t - _$$uF);
      setHeight(t);
      E(!0);
    },
    setPosition,
    setWidth: e => {
      B(f$.INLINE_EDGE_RESIZE);
      let t = e / (scale / 100);
      setRequestedWidth(t);
      setWidth(t);
      E(!0);
    },
    tabIndex: 0,
    title: jsx(_z, {
      recordingKey: generateRecordingKey(_U, 'header'),
      height: M(),
      width: F(),
      scale,
      setScale,
      setHeight: e => {
        setRequestedHeight(e);
        setHeightForWindow(e);
        E(!0);
      },
      setWidth: (e, t) => {
        t ? D(e) : z(e);
      }
    }),
    width: scale / 100 * F(),
    children: jsx(_V, {
      previewHistory: e,
      onCloseRequested: k,
      scale,
      width: F(),
      height: M()
    }, v)
  });
}
function _V({
  previewHistory: e,
  onCloseRequested: t,
  scale: i,
  width: n,
  height: s
}) {
  let {
    isResizing,
    isDragging
  } = useContext(_$$O9);
  let c = useMemo(() => isResizing || isDragging, [isResizing, isDragging]);
  let u = useMemo(() => ({
    transformOrigin: 'top left',
    transform: `scale(${i / 100})`,
    width: `${n}px`,
    height: `${s}px`
  }), [i, n, s]);
  let p = useMemo(() => ({
    pointerEvents: c ? 'none' : void 0,
    ...(isInteractionPathCheck() ? {} : u)
  }), [c, u]);
  let x = useAtomWithSubscription(_$$_b);
  return jsx(_$$gs2, {
    style: p,
    previewHistory: e,
    onCloseRequested: t,
    skipSetPreviewedNode: !getFeatureFlags().sts_live_preview,
    testFlags: x?.testFlags
  });
}
var _8 = (e => (e.EVENT = 'event', e.LANDING_PAGE = 'landing-page', e.PERSONAL = 'personal', e.PORTFOLIO = 'portfolio', e.BUSINESS = 'business', e))(_8 || {});
let _6 = [{
  type: _$$k1.TEXT,
  id: 'explore',
  text: getI18nString('sites.onboarding.templates.explore')
}, {
  type: _$$k1.DIVIDER,
  key: generateUUIDv4()
}, {
  type: _$$k1.SECTION_HEADER,
  text: getI18nString('sites.onboarding.templates.templates')
}];
function _7() {
  let [e, t] = useAtomValueAndSetter(_$$LS);
  let i = be();
  return jsx(_$$j1, {
    items: i,
    selectedItemId: e.id,
    onItemSelected: t,
    selectedItemClassName: 'site_templates_sidebar--selectedSidebarItem--GkcUc'
  });
}
let _9 = _$$z11.object({
  categories: _$$z11.array(_$$z11.object({
    category: _$$z11.string(),
    id: _$$z11.string(),
    tags: _$$z11.array(_$$z11.string()),
    text: _$$z11.string()
  })).optional().$$default([])
});
let be = () => {
  let {
    getDynamicConfig
  } = Fj('sites_template_picker_categories_prod');
  let {
    categories
  } = _9.parse(getDynamicConfig().value);
  return [..._6, ...categories.map(e => ({
    ...e,
    type: _$$k1.TEXT,
    text: function (e, t) {
      switch (e) {
        case 'event':
          return getI18nString('sites.onboarding.templates.category.event');
        case 'landing-page':
          return getI18nString('sites.onboarding.templates.category.landing-page');
        case 'personal':
          return getI18nString('sites.onboarding.templates.category.personal');
        case 'portfolio':
          return getI18nString('sites.onboarding.templates.category.portfolio');
        case 'business':
          return getI18nString('sites.onboarding.templates.category.business');
        default:
          return t;
      }
    }(e.id, e.text)
  }))];
};
function bt() {
  let {
    onStartFromScratch
  } = bi();
  return jsxs('button', {
    className: 'sites_blank_site_tile--blankSiteTileContainer--pNsJb',
    onClick: onStartFromScratch,
    children: [jsx('div', {
      'className': 'sites_blank_site_tile--blankSiteTile--oQtE3',
      'data-testid': 'start-from-scratch',
      'children': jsx('span', {
        className: 'sites_blank_site_tile--blankSiteTileIcon--lWy9h',
        children: jsx(_$$e9, {
          style: {
            width: 36,
            height: 36
          }
        })
      })
    }), jsx('div', {
      className: 'sites_blank_site_tile--blankSiteTileText--vcFwe',
      children: getI18nString('sites.onboarding.template_picker.blank_website')
    })]
  });
}
let bi = () => {
  let {
    Sprig
  } = useSprigWithSampling();
  let t = Xr(P4);
  let i = useDispatch();
  let n = trackFileEventWithStore();
  return {
    onStartFromScratch: () => {
      i(FP({
        tab: UserInterfaceElements.ASSETS,
        persist: !1
      }));
      handleAtomEvent({
        id: _$$lz
      });
      t(!1);
      n('sites_template_start_from_scratch');
      getFeatureFlags().sts_sprig_templates && Sprig('track', 'sites_template_picker_exit');
    }
  };
};
function bs(e) {
  let t = trackFileEventWithStore();
  return useCallback((i, n) => {
    t(e, {
      resourceId: i,
      templateName: n
    });
  }, [e, t]);
}
let br = 'sites_template_tile--cardLayout--WDMFY';
let bo = 'sites_template_tile--templateCoverBottomRow--Q8cqY';
function bd({
  name: e,
  thumbnailUrl: t,
  onPointerDown: i,
  showLoadingSpinner: n = !1
}) {
  return jsx(ButtonPrimitive, {
    className: 'sites_template_tile--sitesTileButtonContainer--mExZF',
    onClick: i,
    actionOnPointerDown: !0,
    children: jsxs('div', {
      className: 'sites_template_tile--sitesTile--YocFZ',
      children: [n && jsx('div', {
        className: 'sites_template_tile--loadingSpinner--uPkfX',
        children: jsx(_$$k7, {})
      }), jsx(_$$oW, {
        onDragStart: _$$wo,
        className: 'sites_template_tile--tileImage---JSpP',
        src: t,
        alt: e,
        loading: 'lazy'
      })]
    })
  });
}
function bc({
  text: e,
  dataTestId: t,
  onPointerDown: i,
  imageContainerContent: n
}) {
  return jsx(_$$sU, {
    className: br,
    dataTestId: t,
    image: jsx('div', {
      onPointerDown: i,
      children: jsx(_$$WM, {
        className: 'sites_template_tile--templateCoverCard--YtneE',
        removeBorder: !0,
        backgroundColor: 'none',
        children: n
      })
    }),
    bottomRow: jsx(_$$dY.MetadataContainer, {
      children: jsx(_$$dY.TextMetadataLayout, {
        onClick: i,
        primaryText: jsx('div', {
          className: _$$s4.font11.colorText.ellipsis.overflowHidden.$,
          children: e
        })
      })
    }),
    bottomRowClassName: bo
  });
}
function bu({
  template: e
}) {
  let t = Xr(_$$ZH);
  let i = bs('sites_template_previewed');
  let {
    id,
    name,
    thumbnail_url
  } = e;
  let r = l => {
    l.stopPropagation();
    t(e);
    i(id, name);
  };
  return jsx(bc, {
    text: name,
    dataTestId: 'sitesTemplateCoverTile',
    onPointerDown: r,
    imageContainerContent: jsxs(Fragment, {
      children: [jsx(_$$Wh.Cover, {
        children: jsx('div', {
          className: 'sites_template_tile--hoverOverlay--umehe'
        })
      }), jsx(_$$Wh.Center, {
        children: jsx(_$$i6, {
          insertTemplate: _$$lQ,
          isInsertingTemplate: !1,
          shouldUseOpaqueBackground: !0,
          children: renderI18nText('slides.templates.view_template')
        })
      }), thumbnail_url != null && jsx(bd, {
        thumbnailUrl: thumbnail_url,
        onPointerDown: r
      }, name)]
    })
  });
}
function bp() {
  return jsx(_$$sU, {
    className: br,
    image: jsx(Qp, {
      className: 'sites_template_tile--templateCoverCardSkeleton--O-77E',
      animationType: JR.LIGHT_SHIMMER,
      primary: !0
    }),
    bottomRow: jsx(_$$dY.MetadataContainer, {
      children: jsx(_$$dY.TextMetadataLayout, {
        primaryText: jsx(Wi, {
          className: 'sites_template_tile--templateCoverBottomRowSkeleton--DOFEp',
          animationType: JR.LIGHT_SHIMMER
        })
      })
    }),
    bottomRowClassName: bo
  });
}
let bx = 'sites_template_selection_tile_grid--templatesGrid--Gn9ku';
function bm({
  templates: e
}) {
  let t = !e?.length;
  let i = useAtomWithSubscription(_$$LS);
  return t ? jsxs('div', {
    className: bx,
    children: [i.id === 'explore' && jsx(bt, {}), Array.from({
      length: 7
    }).map((e, t) => jsx(bp, {}, `skeleton-template-tile-${t}`))]
  }) : jsxs('div', {
    className: bx,
    children: [i.id === 'explore' && jsx(bt, {}), e.map((e, t) => jsx(bu, {
      template: e
    }, `template-tile-${t}`))]
  });
}
function bh() {
  return jsxs('div', {
    className: 'site_templates_view--container--J1QfR',
    children: [jsx(bf, {}), jsxs('div', {
      className: 'site_templates_view--content--SPtSQ',
      children: [jsx(_7, {}), jsx(bg, {})]
    })]
  });
}
function bg() {
  let e = useRef(null);
  let t = useAtomWithSubscription(_$$iG2);
  let [i, n] = useAtomValueAndSetter(_$$cF);
  let s = useAtomWithSubscription(_$$LS);
  let r = `${s.category}-${s.tags?.join('-')}`;
  let [{
    data: d,
    hasNextPage: c,
    isFetchingNextPage: u
  }, {
    fetchNextPage: p
  }] = setupResourceAtomHandler(_$$a12.ResourcesPaginatedQuery({
    resourceType: [_$$vt2.SITE_TEMPLATE],
    caller: _$$z10.SITES_TEMPLATE_PICKER,
    pageSize: 20,
    editorType: _$$q9.SITES,
    sortBy: _$$e13.Browse.PUBLISHED_AT,
    includeContent: !0,
    category: s.category,
    tags: s.tags
  }));
  let x = _$$z1({
    items: d ?? [],
    pageSize: 20,
    randomSeed: t
  });
  useEffect(() => {
    e.current != null && (e.current.scrollTop = i[r] ?? 0);
  }, [r]);
  return jsxs(_$$P2, {
    className: 'site_templates_view--scrollContainer--iVTvr',
    scrollContainerRef: e,
    initialScrollTop: i[r],
    onScroll: e => {
      n(r, e);
    },
    children: [jsx(bm, {
      templates: x
    }), jsx(_$$a11, {
      onIntersectionChange: ({
        isIntersecting: e
      }) => {
        p && e && c && !u && p();
      },
      className: 'site_templates_view--scrollSentinel--dVU0T',
      style: {
        bottom: '200px'
      }
    })]
  });
}
function bf() {
  let {
    Sprig
  } = useSprigWithSampling();
  let t = trackFileEventWithStore();
  let i = Xr(P4);
  let n = useDispatch();
  return jsxs('div', {
    className: v()('site_templates_view--header--kKbXy', 'site_templates_view--separator--NIAqk'),
    children: [jsx('div', {
      className: 'site_templates_view--titleTextContainer--3vZ0O',
      children: jsx('div', {
        className: 'site_templates_view--templateTitleText--DXgwN text--fontPos13--xW8hS text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa',
        children: getI18nString('sites.onboarding.template_picker.title')
      })
    }), jsx(_$$K2, {
      'aria-label': getI18nString('common.close'),
      'onClick': () => {
        t('sites_template_picker_dismissed');
        n(FP({
          tab: UserInterfaceElements.ASSETS,
          persist: !1
        }));
        handleAtomEvent({
          id: _$$lz
        });
        getFeatureFlags().sts_sprig_templates && Sprig('track', 'sites_template_picker_exit');
        i(!1);
      },
      'children': jsx(_$$L2, {})
    })]
  });
}
let bk = M4.Query({
  fetch: async ({
    id: e
  }) => {
    let t = (await _$$a12.getResourceWithContentID({
      resourceType: 'file',
      contentId: e
    })).data.meta;
    if (!t.resource) {
      let e = new Error('Resource or Private Plugin must be present');
      reportError(_$$e2.COMMUNITY, e);
      return e;
    }
    return t.resource;
  }
});
function bw({
  template: e
}) {
  let t = useRef(null);
  let i = _$$a14(e.content.hub_file);
  let [n] = setupResourceAtomHandler(bk({
    id: e.content.hub_file.id
  }));
  let s = !n.data?.carousel_media.images || n.status !== 'loaded';
  let r = {
    id: e.id,
    created_at: new Date(e.created_at),
    url: e.thumbnail_url
  };
  let o = (n.data != null ? [r, ...Object.values(n.data.carousel_media.images).slice(1)] : [r]).filter(Boolean);
  return jsxs('div', {
    className: _$$s4.flex.flexColumn.hFull.$,
    children: [jsx(bS, {
      title: i.name,
      publisherName: getI18nString('community.view_bar.figma')
    }), jsx(_$$P2, {
      className: _$$s4.px8.hFull.$,
      scrollContainerRef: t,
      children: jsxs('div', {
        className: 'sites_template_view--grid--mnDHb',
        children: [o.map(t => jsx(bC, {
          thumbnail: t,
          altText: i.name,
          resourceId: e.id
        }, `thumbnail-${t.id}`)), s && Array.from({
          length: 5
        }).map((e, t) => jsx(bT, {}, `skeleton-thumbnail-${t}`))]
      })
    }), jsx(bI, {
      template: e,
      templateName: i.name
    })]
  });
}
function bS({
  title: e,
  publisherName: t
}) {
  let {
    Sprig
  } = useSprigWithSampling();
  let n = trackFileEventWithStore();
  let a = Xr(P4);
  let d = Xr(_$$ZH);
  let c = useDispatch();
  let p = () => {
    d(null);
  };
  return jsxs('div', {
    className: v()('sites_template_view--headerContainer--9-w3Q', 'sites_template_view--separator--takJY'),
    children: [jsxs('div', {
      className: 'sites_template_view--titleTextContainer--YjnHM',
      children: [jsx(_$$K2, {
        'aria-label': getI18nString('slides.templates.back'),
        'onClick': p,
        'children': jsx(_$$C6, {
          'data-not-draggable': !0,
          'data-does-not-dismiss-modal': !0
        })
      }), jsxs('div', {
        className: 'sites_template_view--templateTitleText--91WCQ text--fontPos13--xW8hS text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa',
        children: [jsx(ButtonPrimitive, {
          onClick: p,
          className: 'sites_template_view--templateTitleTextButton--zsfiM',
          children: renderI18nText('slides.templates.templates_modal.templates_title')
        }), jsx('span', {
          className: 'sites_template_view--headerSeparator--quqAY',
          children: ' / '
        }), e]
      }), jsx('div', {
        className: 'sites_template_view--publisherTitleText--GQaw1 text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa',
        children: renderI18nText('slides.templates.templates_modal.published_by', {
          publisherName: t
        })
      })]
    }), jsx(_$$K2, {
      'aria-label': getI18nString('common.close'),
      'onClick': () => {
        n('sites_template_picker_dismissed');
        c(FP({
          tab: UserInterfaceElements.ASSETS,
          persist: !1
        }));
        handleAtomEvent({
          id: _$$lz
        });
        getFeatureFlags().sts_sprig_templates && Sprig('track', 'sites_template_picker_exit');
        a(!1);
      },
      'children': jsx(_$$L2, {})
    })]
  });
}
function bC({
  thumbnail: e,
  altText: t,
  resourceId: i
}) {
  let [n, s] = useState(void 0);
  let {
    url,
    resized_thumbnail_urls
  } = e;
  let d = resized_thumbnail_urls?.[800];
  useEffect(() => {
    s(d ?? url);
  }, [url, d]);
  return jsx('div', {
    className: 'sites_template_view--gridMediaContainer--BDoVK',
    children: jsx(_$$oW, {
      className: 'sites_template_view--gridMedia--H7y40',
      src: n,
      loading: 'lazy',
      alt: t,
      draggable: !1,
      onError: () => {
        logError('community', 'Failed to load thumbail image on Sites template picker', {
          thumbnailUrl: n,
          resourceId: i
        });
        n === d && s(url);
      }
    })
  });
}
function bT() {
  return jsx(Qp, {
    className: 'sites_template_view--gridMediaSkeleton--CBiZJ',
    animationType: JR.LIGHT_SHIMMER,
    primary: !0
  });
}
function bI({
  template: e,
  templateName: t
}) {
  let [i, n] = useState(!1);
  let s = bs('sites_template_try_in_browser_clicked');
  let r = bs('sites_template_inserted');
  let {
    onUseThisTemplate
  } = bE({
    template: e,
    onInsertTemplateFinished: () => n(!1)
  });
  let d = useCurrentFileKey();
  let c = _$$a13({
    isSitesTemplate: !0,
    resourceContentId: e.content.hub_file.id
  });
  return d == null ? null : jsxs('div', {
    className: 'sites_template_view--footer--oAwNz',
    children: [jsx(_$$N6.Button, {
      newTab: !0,
      href: c ?? e.rdp_url,
      onClick: () => s(e.id, t),
      variant: 'secondary',
      children: jsxs('div', {
        className: 'sites_template_view--templateSecondaryButton--XTUPL',
        children: [jsx(_$$V5, {}), renderI18nText('sites.onboarding.templates.preview_in_browser')]
      })
    }), jsx(Button, {
      onClick: () => {
        n(!0);
        onUseThisTemplate();
        r(e.id, t);
      },
      variant: 'primary',
      children: i ? jsx(_$$k7, {}) : renderI18nText('sites.onboarding.templates.use_this_template')
    })]
  });
}
let bE = ({
  template: e,
  onInsertTemplateFinished: t
}) => {
  let i = useDispatch();
  let n = Xr(P4);
  let {
    insertTemplate
  } = Fz();
  let a = _$$eY();
  return {
    onUseThisTemplate: () => {
      let s = {
        template: e.content.hub_file,
        type: _$$n10.HubFile
      };
      let o = () => {
        insertTemplate({
          template: s,
          userTriggered: !0,
          editScopeType: zk.ONBOARDING,
          triggeredFrom: 'sites-templates-modal',
          cloneLocalStylesAndVariablesForTemplate: !0,
          templateInsertionDirection: CustomPosition.RIGHT,
          onSuccess: () => {
            t();
            noop.addResourceUse({
              resourceId: e.id
            });
            n(!1);
            i(FP({
              tab: UserInterfaceElements.LAYERS,
              persist: !1
            }));
            handleAtomEvent({
              id: Ab
            });
          },
          onFailure: () => {
            t();
          }
        });
      };
      if (PR(a)) {
        o();
        return;
      }
      let d = a.getCurrentPage();
      if (!d) {
        o();
        return;
      }
      let c = O5(a, d.guid);
      if (!(c.length === 1 ? c[0] : void 0)) {
        o();
        return;
      }
      insertTemplate({
        template: s,
        userTriggered: !0,
        editScopeType: zk.ONBOARDING,
        triggeredFrom: 'sites-templates-modal',
        cloneLocalStylesAndVariablesForTemplate: !0,
        templateInsertionDirection: CustomPosition.RIGHT,
        onSuccess: () => {
          noop.addResourceUse({
            resourceId: e.id
          });
          n(!1);
          i(FP({
            tab: UserInterfaceElements.LAYERS,
            persist: !1
          }));
          _$$l.user('sites-insert-template', () => {
            let e = O5(a, d.guid);
            e.length > 1 && u2(e[0].guid);
          });
          handleAtomEvent({
            id: Ab
          });
        }
      });
    }
  };
};
function bN() {
  let [e, t] = useAtomValueAndSetter(_$$ZH);
  _$$a10({
    atom: _$$iG2
  });
  useEffect(() => () => {
    t(null);
  }, [t]);
  return e?.content?.hub_file != null ? jsx(bw, {
    template: e
  }) : jsx(bh, {});
}
function bA({
  children: e
}) {
  let t = trackFileEventWithStore();
  let i = Xr(P4);
  let n = useDispatch();
  _$$h3(() => t('sites_template_picker_shown'));
  return jsx(utilityNoop, {
    'className': 'sites_template_modal--templateModal--a3YSn',
    'size': 900,
    'onHide': () => {
      n(FP({
        tab: UserInterfaceElements.ASSETS,
        persist: !1
      }));
      handleAtomEvent({
        id: _$$lz
      });
      i(!1);
    },
    'tintedModalBackground': !0,
    'disableClickOutsideToHide': !1,
    'enableEscapeToClose': !0,
    'data-testid': 'sites-template-modal',
    'children': jsx('div', {
      className: _$$s4.overflowHidden.$,
      style: {
        height: '600px'
      },
      children: e
    })
  });
}
function bL() {
  let e = _$$p2('isReadOnly');
  let t = EI();
  let i = useAtomWithSubscription(_$$D6);
  let n = _$$r7(_$$at);
  let a = useAtomWithSubscription(n);
  let s = a.status === 'loaded' && !0 === a.data;
  let r = useAtomWithSubscription(_$$me);
  let d = selectCurrentFile();
  let c = d?.key;
  let u = _$$eY();
  let p = useAtomWithSubscription(u3);
  let [x, m] = useAtomValueAndSetter(P4);
  if (!t || !x || i || !s || r || p) return null;
  let h = PR(u);
  return e || h ? (m(!1), null) : jsx(_$$fu, {
    name: 'Sites Template Overlay Modal',
    properties: {
      productType: 'sites',
      fileKey: c
    },
    children: jsx(bA, {
      children: jsx(bN, {})
    })
  });
}
function bO() {
  useEffect(() => {
    setPropertiesPanelTab(DesignWorkspace.SITE);
  }, []);
  return jsxs(Fragment, {
    children: [jsx('div', {
      id: 'lint-error-container',
      style: {
        zIndex: sitesFullscreenPreviewZ + 1,
        position: 'fixed',
        inset: 0,
        isolation: 'isolate',
        pointerEvents: 'none'
      }
    }), jsx(bF, {}), jsx(Rp, {}), jsx(fa, {}), _$$U() && jsx(Y, {}), jsxs(_$$p3, {
      children: [jsx(fb, {}), jsx(fv, {}), jsx(bL, {})]
    }), jsx(_$$p3, {
      children: jsx(fd, {})
    })]
  });
}
function bF() {
  let e = useAtomWithSubscription(_$$_b);
  return jsxs('div', {
    id: 'sites-preview-wrapper',
    style: {
      display: e ? 'block' : 'none'
    },
    children: [jsx(f9, {}), jsx(_K, {})]
  });
}
function bH() {
  let e = KH();
  return jsx(_$$i7, {
    children: jsx(VF, {
      isVisible: !0,
      children: () => jsx(mw, {
        selection: e
      })
    })
  });
}
function bQ({
  recordingKey: e
}) {
  let [t, i] = _$$lJ2('stackCounterSizing');
  let [n, s] = _$$lJ2('stackPrimarySizing');
  let r = 'NONE';
  r = t === 'RESIZE_TO_FIT_WITH_IMPLICIT_SIZE' && n === 'RESIZE_TO_FIT_WITH_IMPLICIT_SIZE' ? 'WIDTH_AND_HEIGHT' : t === 'FIXED' && n === 'RESIZE_TO_FIT_WITH_IMPLICIT_SIZE' ? 'HEIGHT' : 'NONE';
  let o = useCallback((e, t) => {
    _$$l.user('update-cms-rich-text-layout', () => {
      switch (e) {
        case 'WIDTH_AND_HEIGHT':
          i('RESIZE_TO_FIT_WITH_IMPLICIT_SIZE', yesNoTrackingEnum.NO);
          s('RESIZE_TO_FIT_WITH_IMPLICIT_SIZE', yesNoTrackingEnum.NO);
          break;
        case 'HEIGHT':
          i('FIXED', yesNoTrackingEnum.NO);
          s('RESIZE_TO_FIT_WITH_IMPLICIT_SIZE', yesNoTrackingEnum.NO);
          break;
        case 'NONE':
          i('FIXED', yesNoTrackingEnum.NO);
          s('FIXED', yesNoTrackingEnum.NO);
      }
      fullscreenValue.commit();
    });
  }, [i, s]);
  let d = jsx(NP, {
    disabled: !1,
    textAutoResize: r,
    recordingKey: e,
    setTextResizing: o
  });
  return jsx(DE, {
    input: d,
    icon: null,
    label: getI18nString('fullscreeen.type_panel.resizing')
  });
}
function b0() {
  let e = useRef(null);
  return jsxs(Fragment, {
    children: [jsx(bQ, {
      recordingKey: 'cms_rich_text_layout_panel.text_auto_resize'
    }), jsx(Ws, {
      recordingKey: 'widthHeightRow',
      forwardedRef: e
    })]
  });
}
function b1() {
  let e = _$$kk(getSingletonSceneGraph().getDirectlySelectedNodes());
  let t = e?.type === 'CMS_RICH_TEXT';
  let i = useRef(null);
  return _$$U() && e && t ? jsx(_$$k10, {
    name: 'dakota_rich_content_node_panel',
    children: jsxs(_$$Zk, {
      ref: i,
      children: [jsx(_$$fI, {
        children: jsx(_$$Q0, {
          extended: !0,
          children: renderI18nText('inspect_panel.properties.layout')
        })
      }), jsx(b0, {})]
    })
  }) : null;
}
let yt = {
  [TextBlockType.HEADING1]: renderI18nText('dakota.properties_panel.cms_rich_text_styles.label_heading', {
    number: 1
  }),
  [TextBlockType.HEADING2]: renderI18nText('dakota.properties_panel.cms_rich_text_styles.label_heading', {
    number: 2
  }),
  [TextBlockType.HEADING3]: renderI18nText('dakota.properties_panel.cms_rich_text_styles.label_heading', {
    number: 3
  }),
  [TextBlockType.HEADING4]: renderI18nText('dakota.properties_panel.cms_rich_text_styles.label_heading', {
    number: 4
  }),
  [TextBlockType.HEADING5]: renderI18nText('dakota.properties_panel.cms_rich_text_styles.label_heading', {
    number: 5
  }),
  [TextBlockType.HEADING6]: renderI18nText('dakota.properties_panel.cms_rich_text_styles.label_heading', {
    number: 6
  }),
  [TextBlockType.PARAGRAPH]: renderI18nText('dakota.properties_panel.cms_rich_text_styles.label_paragraph'),
  [TextBlockType.LINK]: renderI18nText('dakota.properties_panel.cms_rich_text_styles.label_link')
};
function yi({
  inheritTextStyleKey: e,
  styleIdForText: t,
  onInspectStyle: i,
  isSelected: n
}) {
  let a = useOpenFileLibraryKey();
  let s = WH(e, t, _$$s10.TEXT);
  return jsx(Fragment, {
    children: jsx('div', {
      'className': 'cms_rich_text_style_panel--styleTitle--qGZx9',
      'data-non-interactive': !0,
      'children': jsx(_$$g8, {
        recordingKey: 'titleButton',
        dsStyle: s,
        displayAsDonut: !1,
        onClick: i,
        onMouseDown: _$$lQ,
        selected: n,
        isNarrow: !1,
        libraryKey: a,
        styleType: 'TEXT'
      })
    })
  });
}
function yn({
  onInspectStyle: e
}) {
  return jsxs(ButtonPrimitive, {
    'onClick': e,
    'className': 'x1imki4n xh8yej3 x78zum5 xxk0z11 xctkrei x19y5rnk x1bhetga x8srhbo',
    'aria-label': getI18nString('dakota.properties_panel.cms_rich_text_styles.select_style_label'),
    'children': [jsx(_$$W9, {}), jsx('div', {
      className: 'cms_rich_text_style_panel--buttonText--4T5sj ellipsis--ellipsis--Tjyfa',
      children: renderI18nText('dakota.properties_panel.cms_rich_text_styles.select_style_label')
    })]
  });
}
function yl(e) {
  let t = e.cmsRichTextDescriptor.textStyleId;
  let i = t.guid !== defaultSessionLocalIDString ? StyleIdHandler.fromLocalNodeIdStr(t.guid) : StyleIdHandler.fromRef(t.ref);
  let n = null;
  let a = null;
  if (i && StyleIdHandler.isValid(i)) {
    let e = getSingletonSceneGraph().getStyleNode(i);
    e && !e.isSoftDeleted && (n = StyleIdHandler.toKiwi(i), a = e.styleKeyForPublish);
  }
  let s = () => {
    e.openStylePicker && e.openStylePicker(e.cmsStyleClass, n, a);
  };
  let r = e.currStyleId === n && e.currStyleKey === a;
  return n === null && a === null ? jsx(yn, {
    onInspectStyle: s
  }) : jsx(yi, {
    inheritTextStyleKey: a,
    styleIdForText: n,
    onInspectStyle: s,
    isSelected: r
  });
}
function ya({
  panelRefBounds: e,
  cmsRichTextStyleMap: t,
  setCmsRichTextStyle: i
}) {
  let n = useDispatch();
  let [o, d] = useState(null);
  let [c, u] = useState(null);
  let [p, x] = useState(null);
  let m = 'inheritTextStyleKey';
  let h = _$$_S(m);
  let g = useLatestRef(h);
  let f = useContext(_$$lk);
  let _ = h || g;
  let y = useCallback((t, i, l) => {
    _ && o === t ? n(Uv()) : e && n(_$$bS({
      id: OS(m),
      initialX: e.left - N2,
      initialY: e.top,
      modal: !0
    }));
    d(t);
    u(i);
    x(l);
  }, [_, o, e, n]);
  return jsxs(Fragment, {
    children: [jsx(_$$MM, {
      inheritStyleKey: p,
      inheritStyleID: c,
      styleType: _$$s10.TEXT
    }), _ && jsx(_$$UP, {
      hideBrowseLibraries: !1,
      hideCreateStyleButton: !1,
      hideLocalStyles: !1,
      inheritStyleID: c,
      inheritStyleKey: p,
      minBottomMargin: 4,
      onApplyStyle: (e, t) => {
        o != null && e.key && e.content_hash && n(_$$nh({
          style: e,
          callback: (e, t) => {
            if (t) {
              Zl(n);
              return;
            }
            _$$l.user('update-cms-rich-text-style-mapping', () => {
              i(o, e);
              fullscreenValue.commit();
            });
          }
        }));
      },
      onCreateStyle: (e, t) => {
        let i = _$$Zk2(_$$s10.TEXT);
        i && f({
          styleType: 'TEXT',
          inheritStyleKeyField: i,
          rowLeft: e,
          rowTop: t
        });
      },
      onToggleListLayout: _$$lQ,
      picker: _,
      recordingKey: 'cmsRichTextStylePicker',
      stylePickerListLayout: !0,
      styleType: _$$s10.TEXT
    }), t.map(e => {
      if (e.styleClass === TextBlockType.BLOCKQUOTE) return null;
      let t = yt[e.styleClass];
      return jsx(_$$fn2, {
        leftLabel: null,
        leftInput: jsx('div', {
          className: 'cms_rich_text_style_panel--rowLabel--lrT1Y',
          children: t
        }),
        rightLabel: null,
        rightInput: jsx(yl, {
          cmsStyleClass: e.styleClass,
          cmsRichTextDescriptor: e.textDescriptor,
          currStyleId: c,
          currStyleKey: p,
          openStylePicker: y
        }),
        icon: null
      }, e.styleClass);
    })]
  });
}
function ys() {
  let e = _$$kk(getSingletonSceneGraph().getDirectlySelectedNodes());
  let t = e?.type === 'CMS_RICH_TEXT';
  let i = e?.getCmsRichTextStyleMap();
  let n = useRef(null);
  let s = n?.current?.getBoundingClientRect() ?? null;
  return _$$U() && e && t && i ? jsx(_$$k10, {
    name: 'dakota_rich_content_node_panel',
    children: jsxs(_$$Zk, {
      ref: n,
      children: [jsx(_$$fI, {
        children: jsx(_$$Q0, {
          extended: !0,
          children: renderI18nText('dakota.properties_panel.cms_rich_text_styles.title')
        })
      }), jsx(ya, {
        cmsRichTextStyleMap: i,
        setCmsRichTextStyle: (t, i) => {
          e.gluedNodes.length > 0 ? e.gluedNodes.forEach(e => {
            _$$hx(e).setCmsRichTextStyle(t, i);
          }) : e.isInstanceSublayer && e.isInDakotaRepeater ? e.getNodesForCmsBinding().forEach(e => {
            e.setCmsRichTextStyle(t, i);
          }) : e.setCmsRichTextStyle(t, i);
        },
        panelRefBounds: s
      })]
    })
  }) : null;
}
let yu = 'dakota_collection_panel--componentCellContainer--OufMz select--container--UJhOt raw_components--singleRowHeight--dKM4t';
let yp = 'dakota_collection_panel--ui3DescriptionText--blYD8 ellipsis--ellipsis--Tjyfa';
let yx = 'dakota_collection_panel--ui3DescriptionButton--QcR9n';
let ym = 'dakota_collection_panel--iconContainer--OvMdu';
let yh = 'dakota_collection_panel--iconDefault--Syq2m';
let yg = 'dakota_collection_panel--iconHover--2uIIN';
let yf = 'dakota_collection_panel--content--eHAOk';
function y_({
  label: e,
  input: t,
  action: i,
  showActionOnHover: n = !1
}) {
  return jsx(_$$fn2, {
    appendedClassName: n ? 'dakota_collection_panel--row--Xq2jN' : '',
    leftLabel: null,
    leftInput: jsx('div', {
      className: 'dakota_collection_panel--rowLabel--0iCDw',
      children: e
    }),
    rightLabel: null,
    rightInput: t,
    icon: jsxs('div', {
      className: 'dakota_collection_panel--action--m6GeD',
      children: [' ', i]
    })
  });
}
function yb(e) {
  return jsxs(_$$bL6, {
    recordingKey: generateRecordingKey(e.recordingKey, 'collectionDropdown'),
    value: e.currentCollection?.name ?? getI18nString('dakota.properties_panel.collection_panel.collection_dropdown_nullstate'),
    onChange: t => {
      e.setCollectionAction(e.collectionList.find(e => e.name === t)?.id ?? null);
    },
    children: [jsx(_$$l7, {
      width: 'fill',
      label: jsx(HiddenLabel, {
        children: getI18nString('dakota.properties_panel.collection_panel.page_collection_label')
      })
    }), jsx(_$$mc2, {
      children: e.collectionList.map(e => jsx(_$$c$5, {
        value: e.name,
        children: e.name
      }, e.id))
    })]
  });
}
function yy(e) {
  let t = e => {
    _$$l.user('dakota-set-text-binding', () => {
      getSingletonSceneGraph().getDirectlySelectedNodes().forEach(t => t?.setDakotaSelectorCollection(e ?? '', InsertSourceType.CMS_PROPERTIES_PANEL));
    });
  };
  let i = jsx(yb, {
    recordingKey: e.recordingKey,
    setCollectionAction: t,
    currentCollection: e.currentCollection,
    collectionList: e.collectionList
  });
  let n = jsx(_$$K2, {
    'recordingKey': generateRecordingKey(e.recordingKey, 'removeCollectionButton'),
    'onClick': () => t(null),
    'aria-label': getI18nString('dakota.collection_selector.disconnect_submenu_title'),
    'htmlAttributes': {
      'data-tooltip': getI18nString('dakota.collection_selector.disconnect_submenu_title'),
      'data-tooltip-type': 'text'
    },
    'children': jsx(_$$f11, {})
  });
  return jsx(y_, {
    label: getI18nString('dakota.properties_panel.collection_panel.page_collection_label'),
    input: i,
    action: e.currentCollection ? n : null,
    showActionOnHover: !0
  });
}
function yv({
  currentCollection: e,
  recordingKey: t
}) {
  let [, i] = useAtomValueAndSetter(_$$s3);
  let [, n] = useAtomValueAndSetter(_$$iO);
  let a = jsx('div', {
    className: yu,
    children: jsx(ButtonPrimitive, {
      'recordingKey': generateRecordingKey(t, 'goToCollectionButton'),
      'className': yx,
      'aria-label': getI18nString('dakota.properties_panel.collection_panel.go_to_collection_label'),
      'htmlAttributes': {
        'data-tooltip': getI18nString('dakota.properties_panel.collection_panel.go_to_collection_label'),
        'data-tooltip-type': KindEnum.TEXT
      },
      'onClick': () => {
        if (i(PanelType.DAKOTA), e?.id == null) {
          reportError(_$$e2.CMS, new Error('CMS Collection ID is null in the properties panel'), {
            extra: {
              currentCollection: e
            }
          });
          return;
        }
        n(e.id);
      },
      'children': jsxs('div', {
        className: yf,
        children: [jsxs('div', {
          className: ym,
          children: [jsx(_$$T7, {
            className: yh
          }), jsx(_$$E10, {
            className: yg
          })]
        }), jsx('div', {
          className: yp,
          children: e?.name
        })]
      })
    })
  });
  return jsx(y_, {
    label: getI18nString('dakota.properties_panel.collection_panel.repeater_collection_label'),
    input: a,
    action: null
  });
}
function yj({
  collectionId: e,
  recordingKey: t
}) {
  let i = QM(e ?? null);
  let n = Fk(e => e.getDirectlySelectedNodes()[0]?.getDakotaItemData().itemId ?? null);
  let a = Vp(e ?? '').data;
  if (!e || !a || !n || !i) return null;
  let s = new Map();
  a.forEach(e => s.set(e.id, e.fields?.find(e => e.fieldSchemaId === i)?.value ?? ''));
  let r = a.map(e => jsx(_$$c$5, {
    value: e.id,
    children: s.get(e.id) ?? ''
  }, e.id));
  let o = jsxs(_$$bL6, {
    recordingKey: generateRecordingKey(t, 'itemSelectorDropdown'),
    value: n,
    onChange: e => {
      e && _$$l.user('cms-update-item-page-item', () => {
        getSingletonSceneGraph().getDirectlySelectedNodes().forEach(t => t.setDakotaSelectorSingleItemFilter(e));
      });
    },
    children: [jsx(_$$l7, {
      width: 'fill',
      label: jsx(HiddenLabel, {
        children: getI18nString('dakota.properties_panel.collection_panel.item_switcher_label')
      }),
      disabled: a.length === 0
    }), jsx(_$$mc2, {
      children: r
    })]
  });
  return jsx(y_, {
    label: getI18nString('dakota.properties_panel.collection_panel.item_switcher_label'),
    input: o,
    action: null
  });
}
function yk({
  recordingKey: e
}) {
  let t = _$$kk(getSingletonSceneGraph().getDirectlySelectedNodes());
  if (!t) return null;
  let i = t.childrenNodes[0]?.mainComponent?.name;
  let n = jsx('div', {
    className: yu,
    children: jsx(ButtonPrimitive, {
      'recordingKey': generateRecordingKey(e, 'goToMainComponentRowButton'),
      'className': yx,
      'aria-label': getI18nString('dakota.properties_panel.collection_panel.go_to_component_label'),
      'htmlAttributes': {
        'data-tooltip': getI18nString('dakota.properties_panel.collection_panel.go_to_component_label'),
        'data-tooltip-type': KindEnum.TEXT
      },
      'onClick': () => fullscreenValue.triggerActionEnum(Command.GO_TO_REPEATER_COMPONENT),
      'children': jsxs('div', {
        className: yf,
        children: [jsxs('div', {
          className: ym,
          children: [jsx(_$$K7, {
            className: yh
          }), jsx(_$$E10, {
            className: yg
          })]
        }), jsx('div', {
          className: yp,
          children: i
        })]
      })
    })
  });
  return jsx(y_, {
    label: getI18nString('dakota.properties_panel.collection_panel.list_component_label'),
    input: n,
    action: null
  });
}
function yw({
  collectionId: e,
  recordingKey: t
}) {
  let {
    data,
    status
  } = Vp(e ?? '');
  let a = Fk(e => e.getDirectlySelectedNodes()[0]?.getDakotaSelector()?.limit);
  let s = [jsx(_$$c$5, {
    value: '0',
    children: getI18nString('dakota.properties_panel.collection_panel.repeater_limit_dropdown_no_limit')
  }, 0)];
  if (status === 'loaded') {
    for (let e = 1; e <= data.length; e++) {
      s.push(jsx(_$$c$5, {
        value: e.toString(),
        children: e
      }, e));
    }
  } else {
    a && s.push(jsx(_$$c$5, {
      value: a.toString(),
      children: a
    }, a));
  }
  let r = jsxs(_$$bL6, {
    recordingKey: generateRecordingKey(t, 'repeaterLimitDropdown'),
    value: a ? a.toString() : '0',
    onChange: e => {
      _$$l.user('dakota-update-selector-limit', () => {
        getSingletonSceneGraph().getDirectlySelectedNodes().forEach(t => t.updateDakotaSelectorLimit(Number(e)));
      });
    },
    children: [jsx(_$$l7, {
      width: 'fill',
      label: jsx(HiddenLabel, {
        children: getI18nString('dakota.properties_panel.collection_panel.limit_label')
      }),
      disabled: status !== 'loaded',
      placeholder: getI18nString('dakota.properties_panel.collection_panel.repeater_limit_dropdown_no_limit')
    }), jsx(_$$mc2, {
      children: s
    })]
  }, (e ?? '') + (a ?? 0) + data.length);
  return jsx(y_, {
    label: getI18nString('dakota.properties_panel.collection_panel.limit_label'),
    input: r,
    action: null
  });
}
function yS() {
  let e;
  let t = 'dakotaCollectionPanel';
  let i = Hb();
  let n = Fk(e => e.getDirectlySelectedNodes().every(e => e.type === 'REPEATER'));
  let a = Fk(e => e.getDirectlySelectedNodes().every(e => e.type === 'FRAME' || e.type === 'RESPONSIVE_SET' && e.name !== '/' || e.type === 'REPEATER'));
  let s = Fk(e => e.getDirectlySelectedNodes()[0]?.getDakotaSelector() ?? null);
  let r = s?.collectionId;
  let o = useCurrentFileKey();
  let d = _$$c$(o).data ?? [];
  let c = d.find(e => e.id === r) || null;
  let u = !r || i;
  let p = Fk(e => e.getDirectlySelectedNodes().every(e => e.type === 'RESPONSIVE_SET' && e.name !== '/' && !e.getDakotaSelectorCollectionId()));
  let x = getFeatureFlags().cms_bindings_ux_improvements && p;
  if (!_$$U() || !u || !a || d.length === 0 || x) return null;
  let h = getFeatureFlags().cms_bindings_ux_improvements ? jsx(yv, {
    recordingKey: t,
    currentCollection: c
  }) : jsx(yy, {
    recordingKey: t,
    currentCollection: c,
    collectionList: d
  });
  let g = n ? jsx(yv, {
    recordingKey: t,
    currentCollection: c
  }) : h;
  e = n ? jsxs(Fragment, {
    children: [jsx(yk, {
      recordingKey: t
    }), g, jsx(yw, {
      recordingKey: t,
      collectionId: r
    })]
  }) : jsxs(Fragment, {
    children: [g, jsx(yj, {
      recordingKey: t,
      collectionId: r
    })]
  });
  return jsx(_$$k10, {
    name: 'dakota_collection_panel',
    children: jsx(_$$Zk, {
      children: e
    })
  });
}
function yq({
  disabled: e = !1,
  directManipulationEditor: t,
  classNameEditingController: i,
  ...n
}) {
  let s = _$$CQ('visibility', t) ?? 'visible';
  let r = s === 'visible';
  let o = useCallback(() => {
    let e = !r;
    let t = e ? 'visible' : 'hidden';
    i.addClassesToInspectedElements([{
      className: e ? 'visible' : 'invisible',
      cssRules: [{
        property: 'visibility',
        propertiesExpandedFromShorthand: [],
        value: t,
        computedStylesValue: t
      }]
    }], yesNoTrackingEnum.YES, 'visibility');
  }, [i, r]);
  let d = r ? getI18nString('fullscreen.properties_panel.tooltip_hide') : getI18nString('fullscreen.properties_panel.tooltip_show');
  return jsx('div', {
    className: _$$RK,
    children: jsx(setupToggleButton, {
      'aria-label': d,
      'checked': !e && !r,
      'disabled': e,
      'htmlAttributes': {
        'data-test-id': 'visibility-variable-control',
        'data-tooltip': d,
        'data-tooltip-type': KindEnum.TEXT
      },
      'mixed': !e && s === MIXED_MARKER,
      'offIcon': jsx(_$$_0, {}),
      'onChange': o,
      'onIcon': jsx(noop, {}),
      'recordingKey': generateRecordingKey(n, 'visibleToggle'),
      'variant': 'highlighted'
    })
  });
}
function yW({
  recordingKey: e,
  disabled: t,
  topLeftValue: i,
  topRightValue: n,
  bottomLeftValue: a,
  bottomRightValue: s,
  onValueChange: r
}) {
  function o({
    corner: e,
    value: i,
    recordingKey: n
  }) {
    return jsx(yY, {
      corner: e,
      onValueChange: r,
      recordingKey: n,
      tooltip: _$$gP(e),
      ui3Icon: _$$ve(e),
      value: i,
      disabled: t
    });
  }
  return jsxs('div', {
    children: [jsx(_$$fn2, {
      leftInput: o({
        corner: OK.TOP_LEFT,
        value: i,
        recordingKey: generateRecordingKey(e, 'rectangleTopLeftCornerRadiusInput')
      }),
      rightInput: o({
        corner: OK.TOP_RIGHT,
        value: n,
        recordingKey: generateRecordingKey(e, 'rectangleTopRightCornerRadiusInput')
      }),
      rightLabel: null,
      leftLabel: null,
      icon: null
    }), jsx(_$$fn2, {
      leftInput: o({
        corner: OK.BOTTOM_LEFT,
        value: a,
        recordingKey: generateRecordingKey(e, 'rectangleBottomLeftCornerRadiusInput')
      }),
      rightInput: o({
        corner: OK.BOTTOM_RIGHT,
        value: s,
        recordingKey: generateRecordingKey(e, 'rectangleBottomRightCornerRadiusInput')
      }),
      rightLabel: null,
      leftLabel: null,
      icon: null
    })]
  });
}
let yY = forwardRef(({
  value: e,
  tooltip: t,
  recordingKey: i,
  corner: n,
  onValueChange: r,
  ui3Icon: o,
  mixedMathHandler: d,
  disabled: c
}) => {
  let u = useDispatch();
  let {
    smallNudgeAmount,
    bigNudgeAmount,
    wheelMultiplier,
    scrubMultiplier
  } = Xs();
  let g = useId();
  let f = useCallback((e, t) => {
    r(n, e, t);
  }, [r, n]);
  return jsx($j, {
    bigNudgeAmount,
    'data-tooltip': t,
    'data-tooltip-type': KindEnum.TEXT,
    'disabled': c,
    'dispatch': u,
    'inputClassName': _$$h14,
    'isTokenizable': !0,
    'mixedMathHandler': d,
    'noBorderOnHover': !0,
    'onValueChange': f,
    'recordingKey': i,
    'scrubMultiplier': 0.1 * scrubMultiplier,
    smallNudgeAmount,
    'value': isInvalidValue(e) ? e : e ?? 0,
    wheelMultiplier,
    'children': jsx('div', {
      className: _$$k11,
      id: g,
      children: o
    })
  });
});
let yZ = memo(({
  directManipulationEditor: e,
  classNameEditingController: t,
  classNameEditingEnabledState: i,
  ...n
}) => {
  let r = useRef(null);
  let o = _$$aV2('opacity', e);
  let d = useRef(null);
  let c = useCallback((e, i) => {
    let n = Math.round(100 * e);
    t.addClassesToInspectedElements([{
      className: `opacity-${n}`,
      cssRules: [{
        property: 'opacity',
        propertiesExpandedFromShorthand: [],
        value: `${n}%`,
        computedStylesValue: String(e)
      }]
    }], i, 'opacity');
  }, [t]);
  let {
    borderRadiusValue,
    isIndependentCornerExpanded,
    setIsIndependentCornerExpanded,
    onValueChange,
    ...g
  } = function (e, t) {
    let i = _$$wc('border-top-left-radius', e) ?? 0;
    let n = _$$wc('border-top-right-radius', e) ?? 0;
    let l = _$$wc('border-bottom-left-radius', e) ?? 0;
    let s = _$$wc('border-bottom-right-radius', e) ?? 0;
    let r = i === n && i === l && i === s;
    let o = r ? i : MIXED_MARKER;
    let [d, c] = useState(!r);
    return {
      borderRadiusValue: o,
      topLeftValue: i,
      topRightValue: n,
      bottomLeftValue: l,
      bottomRightValue: s,
      onValueChange: useCallback((e, i, n) => {
        t.addClassesToInspectedElements([function (e, t) {
          let i = `${t}px`;
          let n = String(t);
          if (e === 'all') {
            return {
              className: `rounded-[${t}px]`,
              cssRules: [{
                property: 'border-radius',
                propertiesExpandedFromShorthand: ['border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius'],
                value: i,
                computedStylesValue: n
              }]
            };
          }
          switch (e) {
            case OK.TOP_RIGHT:
              return {
                className: `rounded-tr-[${t}px]`,
                cssRules: [{
                  property: 'border-top-right-radius',
                  propertiesExpandedFromShorthand: [],
                  value: i,
                  computedStylesValue: n
                }]
              };
            case OK.TOP_LEFT:
              return {
                className: `rounded-tl-[${t}px]`,
                cssRules: [{
                  property: 'border-top-left-radius',
                  propertiesExpandedFromShorthand: [],
                  value: i,
                  computedStylesValue: n
                }]
              };
            case OK.BOTTOM_LEFT:
              return {
                className: `rounded-bl-[${t}px]`,
                cssRules: [{
                  property: 'border-bottom-left-radius',
                  propertiesExpandedFromShorthand: [],
                  value: i,
                  computedStylesValue: n
                }]
              };
            case OK.BOTTOM_RIGHT:
              return {
                className: `rounded-br-[${t}px]`,
                cssRules: [{
                  property: 'border-bottom-right-radius',
                  propertiesExpandedFromShorthand: [],
                  value: i,
                  computedStylesValue: n
                }]
              };
          }
        }(e, i)], n, 'border-radius');
      }, [t]),
      isIndependentCornerExpanded: d,
      setIsIndependentCornerExpanded: c
    };
  }(e, t);
  let f = i === _$$D7.Enabled;
  let _ = useDispatch();
  let b = _$$P5(getI18nString('fullscreen.properties_panel.transform_panel.corner_radius'));
  return jsxs(_$$Zk, {
    'data-testid': 'appearance-panel-web-direct-manipulation',
    'children': [jsx(_$$Wv, {
      titleTx: renderI18nText('fullscreen.appearance_panel.appearance'),
      children: jsx(yq, {
        recordingKey: n.recordingKey,
        directManipulationEditor: e,
        classNameEditingController: t,
        disabled: !f
      })
    }), jsx(_$$fn2, {
      ref: r,
      leftInput: jsx(_$$Pd, {
        disabled: !f,
        dispatch: _,
        forwardedRef: d,
        inputClassName: _$$h15,
        isTokenizable: !0,
        noBorderOnHover: !0,
        onValueChange: c,
        recordingKey: generateRecordingKey(n, 'opacity'),
        ui3RightJustifyPercentSign: !1,
        value: o,
        children: jsx('div', {
          className: _$$s11,
          children: jsx(_$$N1, {})
        })
      }),
      rightInput: jsx(yY, {
        recordingKey: n.recordingKey,
        value: borderRadiusValue,
        tooltip: b,
        corner: 'all',
        onValueChange,
        ui3Icon: jsx(_$$Q10, {}),
        disabled: !f
      }),
      icon: jsx(_$$j12, {
        recordingKey: n.recordingKey,
        disabled: !1,
        rectangleCornerToolIndependentActive: isIndependentCornerExpanded,
        setRectangleCornerToolIndependentActive: setIsIndependentCornerExpanded
      }),
      leftLabel: renderI18nText('fullscreen.properties_panel.section_appearance.label_opacity'),
      rightLabel: renderI18nText('fullscreen.properties_panel.transform_panel.corner_radius')
    }), isIndependentCornerExpanded && jsx(yW, {
      onValueChange,
      ...g,
      recordingKey: generateRecordingKey(n, 'independentCornerRadius'),
      disabled: !f
    })]
  });
});
let y9 = [10, 11, 12, 13, 14, 15, 16, 20, 24, 32, 36, 40, 48, 64, 96, 128];
function ve({
  id: e,
  fontSize: t,
  onFontSizeChange: i,
  disabled: n,
  recordingKey: r
}) {
  let o = useRef(null);
  let d = useDispatch();
  let c = Um();
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = _$$sT();
  let m = [];
  m.push(y9.map(e => jsx(vt, {
    value: e,
    recordingKey: generateRecordingKey(r, `${e}`),
    children: e
  }, `font-size-${e}`)));
  return jsx(Fragment, {
    children: jsx(_$$ow, {
      value: {
        select: _$$pW2,
        inputComponent: _$$gm
      },
      children: jsx(_$$tV, {
        value: {
          chevron: _$$t9
        },
        children: jsx(_$$vD2, {
          'ariaLabel': getI18nString('fullscreen.type_panel.font_size'),
          bigNudgeAmount,
          'className': Ej,
          'data-tooltip': getI18nString('fullscreen.type_panel.font_size'),
          'data-tooltip-type': KindEnum.TEXT,
          'disabled': n,
          'dispatch': d,
          'dropdownClassName': _$$hE3,
          'dropdownShown': c,
          'enablePreview': !1,
          'formatter': new Lk({
            min: 1,
            max: void 0,
            smallNudgeAmount,
            bigNudgeAmount
          }),
          'forwardedRef': o,
          'id': e,
          'isTokenizable': !1,
          'min': 1,
          'onValueChange': i,
          'recordingKey': r,
          smallNudgeAmount,
          'tooltipForScreenReadersOnly': !0,
          'value': t,
          'children': m
        })
      })
    })
  });
}
class vt extends _$$c$6 {}
function vs({
  directManipulationEditor: e,
  classNameEditingController: t,
  editingEnabled: i,
  alignmentRowRef: n,
  ...s
}) {
  let r = function (e) {
    let t = _$$CQ('text-align', e);
    if (t === MIXED_MARKER) return t;
    switch (t) {
      case 'left':
      default:
        return 'LEFT';
      case 'center':
        return 'CENTER';
      case 'right':
        return 'RIGHT';
      case 'justified':
        return 'JUSTIFIED';
    }
  }(e);
  let o = useCallback(e => {
    let i = e.toLowerCase();
    t.addClassesToInspectedElements([{
      className: function () {
        switch (e) {
          case 'LEFT':
            return 'text-left';
          case 'CENTER':
            return 'text-center';
          case 'RIGHT':
            return 'text-right';
          case 'JUSTIFIED':
            return 'text-justify';
        }
      }(),
      cssRules: [{
        property: 'text-align',
        propertiesExpandedFromShorthand: [],
        value: i,
        computedStylesValue: i
      }]
    }], yesNoTrackingEnum.YES, 'text-align');
  }, [t]);
  let d = function (e) {
    let t = _$$CQ('vertical-align', e);
    if (t === MIXED_MARKER) return t;
    switch (t) {
      case 'top':
      case 'text-top':
      default:
        return 'TOP';
      case 'middle':
        return 'CENTER';
      case 'bottom':
      case 'text-bottom':
      case 'baseline':
      case 'sub':
        return 'BOTTOM';
    }
  }(e);
  let c = useCallback(e => {
    let i = e.toLowerCase();
    t.addClassesToInspectedElements([{
      className: function () {
        switch (e) {
          case 'TOP':
            return 'align-top';
          case 'CENTER':
            return 'align-middle';
          case 'BOTTOM':
            return 'align-bottom';
        }
      }(),
      cssRules: [{
        property: 'vertical-align',
        propertiesExpandedFromShorthand: [],
        value: i,
        computedStylesValue: i
      }]
    }], yesNoTrackingEnum.YES, 'vertical-align');
  }, [t]);
  return jsx(_$$fn2, {
    ref: n,
    leftLabel: renderI18nText('properties.label.alignment'),
    leftInput: jsx(_$$E11, {
      name: 'text_align_horizontal',
      children: jsx(vo, {
        textAlignHorizontal: r,
        onChange: o,
        disabled: !i,
        recordingKey: generateRecordingKey(s.recordingKey, 'textAlignHorizontal')
      })
    }),
    rightLabel: null,
    rightInput: jsx(_$$E11, {
      name: 'text_align_vertical',
      children: jsx(vd, {
        textAlignVertical: d,
        onChange: c,
        disabled: !i,
        recordingKey: generateRecordingKey(s.recordingKey, 'textAlignVertical')
      })
    }),
    icon: void 0
  });
}
var vr = (e => (e.LEFT = 'text-align-left', e.CENTER = 'text-align-center', e.RIGHT = 'text-align-right', e.JUSTIFIED = 'text-align-justified', e))(vr || {});
function vo({
  recordingKey: e,
  textAlignHorizontal: t,
  disabled: i,
  onChange: n
}) {
  return jsxs(_$$bL, {
    legend: jsx(_$$q2, {
      children: getI18nString('fullscreen.type_panel.align_horizontal')
    }),
    value: t,
    onChange: n,
    readonly: i,
    recordingKey: e,
    children: [jsx(_$$c$2, {
      'value': 'LEFT',
      'aria-label': getI18nString('fullscreen.type_panel.align_left'),
      'icon': jsx(_$$h9, {})
    }), jsx(_$$c$2, {
      'value': 'CENTER',
      'aria-label': getI18nString('fullscreen.type_panel.align_center'),
      'icon': jsx(_$$N9, {})
    }), jsx(_$$c$2, {
      'value': 'RIGHT',
      'aria-label': getI18nString('fullscreen.type_panel.align_right'),
      'icon': jsx(_$$K5, {})
    })]
  });
}
function vd({
  recordingKey: e,
  textAlignVertical: t,
  disabled: i,
  onChange: n
}) {
  return jsxs(_$$bL, {
    value: t,
    onChange: n,
    readonly: i,
    recordingKey: e,
    legend: jsx(_$$q2, {
      children: getI18nString('fullscreen.type_panel.align_vertical')
    }),
    children: [jsx(_$$c$2, {
      'value': 'TOP',
      'aria-label': getI18nString('fullscreen.type_panel.align_top'),
      'icon': jsx(_$$b11, {})
    }), jsx(_$$c$2, {
      'value': 'CENTER',
      'aria-label': getI18nString('fullscreen.type_panel.align_middle'),
      'icon': jsx(_$$X8, {})
    }), jsx(_$$c$2, {
      'value': 'BOTTOM',
      'aria-label': getI18nString('fullscreen.type_panel.align_bottom'),
      'icon': jsx(_$$z12, {})
    })]
  });
}
let vc = memo(({
  directManipulationEditor: e,
  classNameEditingController: t,
  classNameEditingEnabledState: i,
  ...n
}) => {
  let s = useRef(null);
  let r = useRef(null);
  let o = _$$xF();
  let d = useMemo(() => _$$pn(o), [o]);
  let c = function (e, t) {
    let i = _$$CQ('font-family', e);
    let n = 'sans-serif';
    if (typeof i != 'string') return i ?? n;
    {
      let e = _$$m$(i, n);
      return Object.keys(t).some(t => t.toLocaleLowerCase() === e.toLocaleLowerCase()) ? e : n;
    }
  }(e, o);
  let p = _$$wc('font-size', e);
  let x = useRef(null);
  let m = useCallback((e, i, n = yesNoTrackingEnum.YES) => {
    let l = DY(e, o);
    l && (t.addClassesToInspectedElements([{
      className: `font-[${e.replace(/ /g, '_')}]`,
      cssRules: [{
        property: 'font-family',
        propertiesExpandedFromShorthand: [],
        value: e,
        computedStylesValue: e
      }]
    }], n, 'font-family'), normalizeTrackingEnum(n) && _$$l.user('direct-manipulation', () => {
      _$$HL(l, x);
    }));
  }, [t, o]);
  let h = useCallback((e, i) => {
    let n = `${e}px`;
    t.addClassesToInspectedElements([{
      className: `text-[${e}px]`,
      cssRules: [{
        property: 'font-size',
        propertiesExpandedFromShorthand: [],
        value: n,
        computedStylesValue: n
      }]
    }], i, 'font-size');
  }, [t]);
  let g = i === _$$D7.Enabled;
  return jsxs(_$$Zk, {
    'data-testid': 'text-panel-web-direct-manipulation',
    'children': [jsx(_$$iE, {
      titleTx: renderI18nText('fullscreen.type_panel.typography')
    }), jsx(_$$ay, {
      disabled: !g,
      editingStyleGuid: void 0,
      fontFamily: c,
      fonts: o,
      hideTypographyVariableOptions: !0,
      id: 'web-direct-manipulation-font-family-combo-box',
      onChange: m,
      recordingKey: generateRecordingKey(n, 'fontFamily'),
      restrictedFontSet: _$$Qr.GOOGLE_FONTS,
      useLegacyFontPickerDropdown: !1,
      versionsForStyles: d
    }), jsx(_$$fn2, {
      ref: s,
      leftInput: jsx(ve, {
        id: 'web-direct-manipulation-font-size-combo-box',
        fontSize: p ?? 16,
        onFontSizeChange: h,
        disabled: !g,
        recordingKey: generateRecordingKey(n, 'fontSize')
      }),
      rightInput: void 0,
      icon: void 0,
      leftLabel: null,
      rightLabel: null
    }), jsx(vs, {
      directManipulationEditor: e,
      classNameEditingController: t,
      editingEnabled: g,
      alignmentRowRef: r,
      recordingKey: generateRecordingKey(n, 'textAlignment')
    })]
  });
});
let vu = memo(e => {
  let t = _$$u8.directManipulationCanvasEditor();
  let i = useRef(!1);
  let n = useDispatch();
  let r = useCallback(e => {
    if (i.current) return;
    i.current = !0;
    let t = e === 'on_selection' ? getI18nString('figmake.toolbar.error.inconsistency') : getI18nString('figmake.toolbar.error.save');
    n(VisualBellActions.enqueue({
      message: t,
      error: !0,
      button: {
        action: () => {},
        text: getI18nString('figmake.refresh')
      }
    }));
  }, [n]);
  let o = useMemo(() => new _$$q0(t, e => {}, r), [t, r]);
  let d = _$$lj(t);
  return jsxs(Fragment, {
    children: [jsx(yZ, {
      directManipulationEditor: t,
      classNameEditingController: o,
      classNameEditingEnabledState: d,
      recordingKey: generateRecordingKey(e, 'WebAppearancePanel')
    }), jsx(vc, {
      directManipulationEditor: t,
      classNameEditingController: o,
      classNameEditingEnabledState: d,
      recordingKey: generateRecordingKey(e, 'WebTypePanel')
    })]
  });
});
let vR = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M11.319 4a.501.501 0 0 1 0 1.001H6.5a1.5 1.5 0 0 0-1.499 1.5v11a1.5 1.5 0 0 0 1.5 1.498h10.997A1.5 1.5 0 0 0 19 17.5v-4.802a.5.5 0 1 1 1.001 0V17.5c0 1.381-1.12 2.5-2.5 2.501H6.5a2.5 2.5 0 0 1-2.5-2.5v-11a2.5 2.5 0 0 1 2.5-2.502zm4.523.445a1.865 1.865 0 0 1 2.637 0l.964.964a1.864 1.864 0 0 1 0 2.637l-6.067 6.066c-.18.181-.396.324-.633.417l-2.303.908-.115.04c-1.196.37-2.33-.81-1.865-2.01l.899-2.314.079-.177q.133-.26.34-.467zm-5.354 6.773a.9.9 0 0 0-.158.216l-.037.082-.898 2.315a.522.522 0 0 0 .599.697l.079-.024 2.301-.907a.9.9 0 0 0 .294-.193l4.748-4.748-2.183-2.183zm7.283-6.064a.863.863 0 0 0-1.22 0l-.61.61 2.183 2.183.61-.609a.863.863 0 0 0 0-1.22z'
    })
  });
});
let vO = ['none'];
let vF = ['banner', 'complementary', 'contentinfo', 'form', 'main', 'navigation', 'region', 'search'];
let vM = ['application', 'article', 'blockquote', 'caption', 'cell', 'code', 'columnheader', 'definition', 'deletion', 'directory', 'document', 'emphasis', 'feed', 'figure', 'generic', 'group', 'heading', 'img', 'insertion', 'list', 'listitem', 'mark', 'math', 'meter', 'note', 'paragraph', 'presentation', 'row', 'rowgroup', 'rowheader', 'separator', 'strong', 'subscript', 'superscript', 'table', 'term', 'time', 'toolbar', 'tooltip'];
let vD = ['button', 'checkbox', 'gridcell', 'link', 'menuitem', 'menuitemcheckbox', 'menuitemradio', 'option', 'progressbar', 'radio', 'scrollbar', 'searchbox', 'slider', 'spinbutton', 'switch', 'tab', 'tabpanel', 'textbox', 'treeitem', 'combobox', 'grid', 'listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid', 'alert', 'log', 'marquee', 'status', 'timer', 'alertdialog', 'dialog', 'comment', 'suggestion'];
let vz = [...vO, ...vF, ...vM, ...vD];
var vB = (e => (e[e.UNKNOWN = 0] = 'UNKNOWN', e[e.STRING = 1] = 'STRING', e[e.BOOLEAN = 2] = 'BOOLEAN', e[e.BOOLEAN_UNDEFINED = 3] = 'BOOLEAN_UNDEFINED', e[e.INTEGER = 4] = 'INTEGER', e[e.FLOAT = 5] = 'FLOAT', e[e.TOKEN = 6] = 'TOKEN', e[e.TOKEN_LIST = 7] = 'TOKEN_LIST', e))(vB || {});
let v$ = {
  'alt': 1,
  'aria-autocomplete': 6,
  'aria-checked': 6,
  'aria-current': 6,
  'aria-disabled': 2,
  'aria-expanded': 3,
  'aria-hidden': 3,
  'aria-invalid': 6,
  'aria-label': 1,
  'aria-live': 6,
  'aria-modal': 2,
  'aria-multiline': 2,
  'aria-placeholder': 1,
  'aria-pressed': 6,
  'aria-readonly': 2,
  'aria-required': 2,
  'aria-selected': 3,
  'aria-atomic': 2,
  'aria-busy': 2,
  'aria-colcount': 4,
  'aria-colindex': 4,
  'aria-colspan': 4,
  'aria-keyshortcuts': 1,
  'aria-multiselectable': 2,
  'aria-relevant': 7,
  'aria-rowcount': 4,
  'aria-rowindex': 4,
  'aria-rowspan': 4,
  'aria-setsize': 4,
  'aria-sort': 6,
  'aria-valuemax': 5,
  'aria-valuemin': 5,
  'aria-valuenow': 5,
  'aria-valuetext': 1,
  'role': 7
};
function vU(e) {
  switch (e) {
    case 'aria-autocomplete':
      return ['none', 'inline', 'list', 'both'];
    case 'aria-pressed':
    case 'aria-checked':
      return ['undefined', 'true', 'false', 'mixed'];
    case 'aria-invalid':
      return ['false', 'true', 'grammar', 'spelling'];
    case 'aria-live':
      return ['off', 'polite', 'assertive'];
    case 'aria-sort':
      return ['none', 'ascending', 'descending', 'other'];
    case 'aria-current':
      return ['false', 'page', 'step', 'location', 'date', 'time', 'true'];
    case 'role':
      return vz;
  }
  return [];
}
function vq() {
  let e = _$$kl('accessibilityLabelType');
  let t = _$$kl('accessibilityCategory');
  let i = Fk(e => {
    let t;
    for (let i of e.getDirectlySelectedNodes()) {
      if (i?.type === 'TEXT' && i.characters) {
        let e = i.getRangeLineType(0, i.characters.length - 1);
        if (e === 'mixed' || t && e !== t) {
          t = MIXED_MARKER;
          break;
        }
        e && (t = e);
      }
    }
    return t;
  });
  return _$$b13(e, t, i);
}
function vX() {
  let [e, t] = _$$lJ2('isDecorativeImage');
  return [e, t];
}
function vV(e) {
  let t = trackFileEventWithStore();
  return useCallback(i => {
    t(e, {
      tagType: i
    });
  }, [e, t]);
}
function vG(e) {
  switch (e) {
    case AccessibilityAttributes.ARIA:
      return 'aria_label';
    case AccessibilityAttributes.ALT_TEXT:
      return 'alt_text';
    case AccessibilityAttributes.TITLE:
      return 'title';
    default:
      return 'unknown';
  }
}
function vW() {
  let [e] = _$$lJ2('ariaAttributes');
  let t = vV('sites_add_accessibility_tag');
  let i = vV('sites_remove_accessibility_tag');
  let n = useMemo(() => {
    let t = {};
    if (!e) return [];
    let i = {};
    let n = toArray(e);
    n.forEach(e => {
      e.entries?.forEach(e => {
        let n = e.attribute;
        i[n] = n in i ? i[n] + 1 : 1;
        n in t ? deepEqual(t[n], e.value) || (t[n] = MIXED_MARKER) : t[e.attribute] = e.value;
      });
    });
    return Object.keys(t).map(e => ({
      attribute: e,
      value: i[e] === n.length ? t[e] : MIXED_MARKER
    }));
  }, [e]);
  let l = useCallback((e, i) => {
    (function (e, t) {
      let i = v$[e];
      if (!i) return !1;
      let n = typeof t;
      if (n === 'undefined' || t === null || i === vB.BOOLEAN && n === 'boolean' || i === vB.BOOLEAN_UNDEFINED && n === 'boolean' || i === vB.STRING && n === 'string' || i === vB.INTEGER && n === 'number' && Number.isInteger(t) || i === vB.FLOAT && n === 'number' && Number.isFinite(t)) return !0;
      if (i === vB.TOKEN_LIST && Array.isArray(t) && t.every(e => typeof e == 'string')) {
        let i = new Set(vU(e));
        return t.every(e => i.has(e));
      }
      return i === vB.TOKEN && n === 'string' && new Set(vU(e)).has(t);
    })(e, i) && (isNullish(i) && (i = function (e) {
      let t = v$[e];
      return t !== vB.BOOLEAN && (t === vB.BOOLEAN_UNDEFINED ? void 0 : t === vB.STRING ? '' : t === vB.FLOAT || t === vB.INTEGER ? 0 : t === vB.TOKEN_LIST ? [] : t === vB.TOKEN ? vU(e)[0] : void 0);
    }(e)), n.find(t => t.attribute === e) || t(e), _$$l.user('sites-accessibility-set-aria-attribute', () => {
      Fullscreen?.setARIAAttribute(e, i);
    }));
  }, [n, t]);
  let s = useCallback(e => {
    _$$l.user('sites-accessibility-remove-aria-attribute', () => {
      Fullscreen?.removeARIAAttribute(e);
    });
    i(e);
  }, [i]);
  return [useCallback(e => {
    let t;
    t = n.find(t => t.attribute === e)?.value;
    let i = isInvalidValue(t) ? MIXED_MARKER : t?.value ? t.type === 'BOOLEAN' ? t.value.boolValue : t.type === 'STRING' ? t.value.stringValue : t.type === 'INT' ? t.value.intValue : t.type === 'FLOAT' ? t.value.floatValue : t.type === 'STRING_LIST' ? t.value.stringArrayValue : null : null;
    return {
      isSet: i !== null,
      value: i
    };
  }, [n]), l, s];
}
let vY = ['page', 'step', 'location', 'date', 'time', 'true', 'false'];
function vJ({
  value: e,
  onChange: t,
  onDropdownHidden: i,
  recordingKey: n
}) {
  let a = useDispatch();
  let r = Um();
  return jsx(vZ, {
    dispatch: a,
    dropdownAlignment: 'right',
    dropdownShown: r,
    dropdownWidth: 140,
    formatter: v0,
    id: 'sites_aria_current',
    neverConstrain: !0,
    onChange: t,
    onDropdownHidden: i,
    property: e,
    recordingKey: n,
    children: vY.map(e => jsx(vQ, {
      value: e
    }, e))
  });
}
let vZ = _$$l1;
let vQ = _$$c$6;
let v0 = new class {
  format(e) {
    return e.toString().toLowerCase();
  }
}();
let v1 = 'styles-module--tagRow--yYBUE';
let v5 = 'styles-module--tagLabel--Vm1OJ';
let v2 = 'styles-module--tagInput--CYaw2';
let v4 = 'styles-module--labelInput--93Aid basic_form--textInput--e9Rn5';
function v3({
  value: e,
  onChange: t,
  onDropdownHidden: i,
  recordingKey: n
}) {
  let r = useDispatch();
  let o = Um();
  let d = useMemo(() => [{
    roles: vO
  }, {
    category: getI18nString('sites.panel.accessibility.role.regions'),
    roles: vF
  }, {
    category: getI18nString('sites.panel.accessibility.role.document'),
    roles: vM
  }, {
    category: getI18nString('sites.panel.accessibility.role.interactive'),
    roles: vD
  }], []);
  let c = useMemo(() => d.map(e => e.roles).flat(), [d]);
  let p = {
    format: e => e,
    parse: e => {
      if (c.includes(e)) return e;
      throw new Error('Invalid HTML element');
    },
    autocomplete: e => {
      for (let t of (e = e.toLowerCase(), c)) {
        let i = p.format(t);
        if (i && i.toLowerCase().startsWith(e)) return i;
      }
      return null;
    }
  };
  let x = useMemo(() => d.map((e, t) => {
    let i = t > 0 ? [jsx(_$$sK, {}, `${e.category ?? e.roles[0]}-separator`)] : [];
    e.category && i.push(jsx(v6, {
      formattedValue: e.category,
      isHeader: !0
    }, `${e.category}-header`));
    i.push(e.roles.map(e => jsx(v6, {
      value: e
    }, `${e}-header`)));
    return i;
  }), [d]);
  return jsx(_$$ow, {
    value: {
      inputComponent: v7
    },
    children: jsx(v8, {
      dispatch: r,
      dropdownAlignment: 'right',
      dropdownOverride: e ? void 0 : 'none',
      dropdownShown: o,
      dropdownWidth: 170,
      forceInputPlaceholder: e === null,
      formatter: p,
      id: 'accessibility-annotation-role-select',
      onChange: t,
      onDropdownHidden: i,
      placeholder: getI18nString('sites.panel.accessibility.role.no_role_selected'),
      property: e,
      recordingKey: n,
      children: x
    })
  });
}
let v8 = _$$a15;
let v6 = _$$c$6;
function v7({
  OriginalComponent: e,
  ...t
}) {
  return jsx(e, {
    ...t,
    className: 'styles-module--ui3ComboBoxInput--0X3PS ellipsis--ellipsis--Tjyfa'
  });
}
function v9({
  value: e,
  options: t,
  onChange: i,
  onDropdownHidden: n,
  recordingKey: a,
  ariaLabelledBy: r
}) {
  let o = useDispatch();
  let d = Um();
  return jsx(je, {
    ariaLabelledBy: r,
    disabled: t.length < 2,
    dispatch: o,
    dropdownAlignment: 'right',
    dropdownShown: d,
    dropdownWidth: 140,
    formatter: ji,
    id: 'sites_accessibility_panel',
    neverConstrain: !0,
    onChange: i,
    onDropdownHidden: n,
    property: e,
    recordingKey: a,
    children: t.map((e, t) => 'divider' in e ? jsx(_$$sK, {}, t) : e.description ? jsx(jt, {
      value: e.value,
      height: 40,
      children: jsxs('span', {
        className: 'x78zum5 xdt5ytf x1d3mw78',
        children: [jsx('span', {
          children: e.value.toString().toLowerCase()
        }), jsx('span', {
          className: 'x7ey041 xuxw1ft xb3r6kr xlyipyv',
          children: e.description()
        })]
      })
    }, e.value) : jsx(jt, {
      value: e.value
    }, e.value))
  });
}
let je = _$$l1;
let jt = _$$c$6;
let ji = new class {
  format(e) {
    return e.toString().toLowerCase();
  }
}();
let jn = 'aria-hidden';
let jl = 'aria-current';
let ja = 'role';
var js = (e => (e[e.NONE = 0] = 'NONE', e[e.TAG = 1] = 'TAG', e[e.LABEL = 2] = 'LABEL', e[e.ARIA_HIDDEN = 3] = 'ARIA_HIDDEN', e[e.ARIA_CURRENT = 4] = 'ARIA_CURRENT', e[e.ARIA_ROLE = 5] = 'ARIA_ROLE', e))(js || {});
function jr(e) {
  let t = vq();
  let [i, n] = function () {
    let [e, t] = _$$lJ2('accessibleLabel');
    return [e, t];
  }();
  let [o, d] = vW();
  let [c] = vX();
  let p = function () {
    let e = Mw();
    if (!_$$U() || !e || e.fills.length === 0) return null;
    for (let t of e.fills) {
      if (t.type === 'IMAGE' && t.altText && t.imageVar && t.imageVar.dataType === 'CMS_ALIAS' && t.imageVar.value?.cmsAliasValue) return t.altText;
    }
    return null;
  }();
  let {
    isSet
  } = o(jn);
  let {
    isSet: _isSet
  } = o(jl);
  let {
    isSet: _isSet2
  } = o(ja);
  let [f, _] = useState(!1);
  let b = function () {
    let e = Fk(e => e.getDirectlySelectedNodes().every(e => e.type === 'FRAME' || e.type === 'SYMBOL' || e.type === 'INSTANCE')) && Fullscreen?.isSelectionContainedInStateOrStateInstance();
    let t = useSelector(_$$Cy);
    let i = t.length === 1 && !!_$$p1(t);
    let n = _$$e11();
    let l = _$$gA();
    return e || i || n || l;
  }();
  let y = function () {
    let e = useSelector(_$$Cy);
    let t = e.length > 0;
    let i = e.length === 1 && !!_$$p1(e);
    return !t || i;
  }();
  let v = function () {
    let e = useSelector(_$$Cy).length > 0;
    let t = _$$e11();
    let i = _$$gA();
    return !t && !i && !e;
  }();
  let {
    Dropdown,
    dropdownTargetRef,
    toggleDropdown
  } = _$$B6('sites_accessibility_dropdown');
  let [C, T] = useState(0);
  let I = t.labelType !== AccessibilityAttributes.NONE && (f || !!(i || p)) && !c;
  let E = t.category === MixedBlockType.BLOCK_WITH_IMAGE || t.category === MixedBlockType.BLOCK_WITH_VIDEO;
  let N = vV('sites_add_accessibility_tag');
  let R = vV('sites_remove_accessibility_tag');
  let A = useCallback((e, t) => ({
    onMouseEnter: useHandleMouseEvent(e, 'mouseenter', () => {
      T(t);
    }),
    onMouseLeave: useHandleMouseEvent(e, 'mouseleave', () => {
      T(0);
    })
  }), [T]);
  let L = generateRecordingKey(e.recordingKey, jn) ?? '';
  let {
    onMouseEnter,
    onMouseLeave
  } = A(L, 3);
  let F = generateRecordingKey(e.recordingKey, 'aria-current') ?? '';
  let {
    onMouseEnter: _onMouseEnter,
    onMouseLeave: _onMouseLeave
  } = A(F, 4);
  let z = generateRecordingKey(e.recordingKey, ja) ?? '';
  let {
    onMouseEnter: _onMouseEnter2,
    onMouseLeave: _onMouseLeave2
  } = A(z, 5);
  if (_$$f2(() => {
    _(!1);
  }), !getFeatureFlags().sites || t.category === MixedBlockType.NONE) {
    return null;
  }
  let K = [];
  t.labelType !== AccessibilityAttributes.NONE && (K.push({
    displayText: jp(t.labelType),
    isChecked: I,
    disabled: I || !!c,
    callback: () => {
      _(!0);
      N(vG(t.labelType));
    },
    recordingKey: 'label'
  }), K.push({
    displayText: jn,
    isChecked: isSet,
    disabled: isSet || !y,
    callback: () => {
      d(jn, !1);
    },
    hidden: !getFeatureFlags().sts_a11y_aria_attributes,
    recordingKey: jn
  }), K.push({
    displayText: jl,
    isChecked: _isSet,
    disabled: _isSet || !b,
    callback: () => {
      d(jl, 'false');
    },
    hidden: !getFeatureFlags().sts_a11y_aria_attributes,
    recordingKey: jl
  }), K.push({
    displayText: ja,
    isChecked: _isSet2,
    disabled: _isSet2 || !v,
    callback: () => {
      d(ja, void 0);
    },
    recordingKey: ja,
    hidden: !getFeatureFlags().sts_a11y_aria_attributes
  }));
  let H = K.every(e => e.disabled);
  let q = K.length > 0 ? jsx(jo, {
    forwardRef: dropdownTargetRef,
    onClick: toggleDropdown,
    recordingKey: e.recordingKey,
    disabled: H
  }) : void 0;
  return jsxs(Fragment, {
    children: [jsxs(_$$Zk, {
      children: [jsx(_$$n11, {
        titleTx: renderI18nText('sites.panel.accessibility_header'),
        onClick: H ? void 0 : toggleDropdown,
        icon: q
      }), jsx(jx, {
        hoveredRowType: C,
        setHoveredRowType: T,
        config: t,
        recordingKey: e.recordingKey || ''
      }), E && jsx(jm, {
        recordingKey: e.recordingKey || ''
      }), function () {
        let a = jsx('span', {
          'aria-hidden': 'true',
          'className': 'styles-module--labelLabel--XGnK-',
          'data-non-interactive': !0,
          'children': jp(t.labelType)
        });
        return I && p ? jsxs(Fragment, {
          children: [jsx(DE, {
            label: null,
            input: a,
            icon: null
          }), jsx(DE, {
            appendedClassName: 'styles-module--inputRowWithIcon--8XfSh',
            label: null,
            input: jsx(_$$L4, {
              className: `${v4} styles-module--cmsText--5DDN2`,
              name: 'sites_accessible_label',
              value: p,
              type: 'textarea',
              disabled: !0,
              recordingKey: generateRecordingKey(e.recordingKey, 'labelInput')
            }),
            icon: jsx('span', {
              className: 'styles-module--iconVisibleOnHover--W-hXx',
              children: jsx(ju, {
                onClick: () => {
                  setPropertiesPanelTab(DesignWorkspace.DAKOTA);
                }
              })
            })
          })]
        }) : I ? jsxs(Fragment, {
          children: [jsx(DE, {
            label: null,
            input: a,
            onMouseEnter: () => T(2),
            onMouseLeave: () => T(0),
            icon: C === 2 ? jsx(jd, {
              onClick: () => {
                n('');
                _(!1);
                R(vG(t.labelType));
              },
              recordingKey: generateRecordingKey(e.recordingKey, 'label')
            }) : null,
            dataTestId: 'accessibility-label-row'
          }), jsx('div', {
            className: 'styles-module--labelInputRow--kcjQR',
            children: jsx(_$$L4, {
              className: v4,
              name: 'sites_accessible_label',
              placeholder: isInvalidValue(i) ? getI18nString('common.mixed') : void 0,
              value: isInvalidValue(i) ? '' : i,
              type: 'textarea',
              onChange: e => {
                n(e.currentTarget.value);
              },
              onMouseEnter: () => T(2),
              onMouseLeave: () => T(0),
              recordingKey: generateRecordingKey(e.recordingKey, 'labelInput')
            })
          })]
        }) : null;
      }(), getFeatureFlags().sts_a11y_aria_attributes && isSet && y && jsx(jh, {
        hoveredRowType: C,
        onMouseEnter,
        onMouseLeave,
        recordingKey: L
      }), getFeatureFlags().sts_a11y_aria_attributes && _isSet && jsx(jg, {
        hoveredRowType: C,
        setHoveredRowType: T,
        onMouseEnter: _onMouseEnter,
        onMouseLeave: _onMouseLeave,
        recordingKey: F
      }), getFeatureFlags().sts_a11y_aria_attributes && _isSet2 && v && jsx(jf, {
        hoveredRowType: C,
        setHoveredRowType: T,
        onMouseEnter: _onMouseEnter2,
        onMouseLeave: _onMouseLeave2,
        recordingKey: z
      })]
    }), jsx(Dropdown, {
      items: K,
      className: 'styles-module--accessibilityDropdown--vl6Sz',
      showPoint: !1,
      alwaysShowCheckMarkOffset: !0,
      recordingKey: generateRecordingKey(e.recordingKey, 'dropdown')
    })]
  });
}
function jo({
  forwardRef: e,
  onClick: t,
  disabled: i,
  recordingKey: n
}) {
  return jsx(_$$K2, {
    'aria-label': getI18nString('sites.panel.add_tooltip'),
    'ref': e,
    'onClick': t,
    'disabled': i,
    'recordingKey': generateRecordingKey(n, 'plus_button'),
    'htmlAttributes': {
      'data-tooltip': getI18nString('sites.panel.add_tooltip'),
      'data-tooltip-type': KindEnum.TEXT
    },
    'children': jsx(_$$e9, {})
  });
}
function jd({
  onClick: e,
  recordingKey: t
}) {
  return jsx(_$$K2, {
    'aria-label': getI18nString('sites.panel.remove_tooltip'),
    'onClick': e,
    'recordingKey': generateRecordingKey(t, 'minus_button'),
    'htmlAttributes': {
      'data-tooltip': getI18nString('sites.panel.remove_tooltip'),
      'data-tooltip-type': KindEnum.TEXT
    },
    'children': jsx(_$$O1, {})
  });
}
function jc({
  onClick: e,
  recordingKey: t
}) {
  return jsx(_$$K2, {
    'aria-label': getI18nString('sites.panel.reset_tooltip'),
    'onClick': e,
    'recordingKey': generateRecordingKey(t, 'reset_button'),
    'htmlAttributes': {
      'data-tooltip': getI18nString('sites.panel.reset_tooltip'),
      'data-tooltip-type': KindEnum.TEXT
    },
    'children': jsx(_$$f11, {})
  });
}
function ju({
  onClick: e,
  recordingKey: t
}) {
  return jsx(_$$K2, {
    'aria-label': getI18nString('sites.panel.edit_cms_accessibility_label_tooltip'),
    'onClick': e,
    'recordingKey': generateRecordingKey(t, 'edit_accessible_label_button'),
    'htmlAttributes': {
      'data-tooltip': getI18nString('sites.panel.edit_cms_accessibility_label_tooltip'),
      'data-tooltip-type': KindEnum.TEXT
    },
    'children': jsx(vR, {})
  });
}
function jp(e) {
  switch (e) {
    case AccessibilityAttributes.ARIA:
      return getFeatureFlags().sts_a11y_aria_attributes ? 'aria-label' : getI18nString('sites.panel.accessibility_aria_label_label');
    case AccessibilityAttributes.ALT_TEXT:
      return getI18nString('sites.panel.accessibility_alt_text_label');
    case AccessibilityAttributes.TITLE:
      return getFeatureFlags().sts_a11y_aria_attributes ? 'title' : getI18nString('sites.panel.accessibility_title_label');
    default:
      return '';
  }
}
function jx({
  hoveredRowType: e,
  setHoveredRowType: t,
  config: i,
  recordingKey: n
}) {
  let s = useId();
  let [o, d] = function () {
    let e = vq();
    let [t, i] = _$$lJ2('accessibleHTMLTag');
    let n = t;
    n || (n = _$$_11.AUTO);
    e.tagEditable || (n = e.tagDefaultValue);
    e.category === MixedBlockType.MIXED && (n = MIXED_MARKER);
    return [n, i];
  }();
  let c = o === _$$_11.AUTO ? i.tagDefaultValue : o;
  let p = i.tagEditable && c !== i.tagDefaultValue;
  let x = vV('sites_remove_accessibility_tag');
  return jsx(DE, {
    label: null,
    onMouseEnter: () => t(1),
    onMouseLeave: () => t(0),
    input: jsxs('div', {
      className: v1,
      children: [jsx('div', {
        'id': s,
        'aria-hidden': 'true',
        'className': v5,
        'data-non-interactive': !0,
        'children': renderI18nText('sites.panel.accessibility_tag_label')
      }), jsx('div', {
        className: v2,
        children: jsx(v9, {
          ariaLabelledBy: s,
          value: c,
          options: i.tagOptions,
          onChange: d,
          onDropdownHidden: () => t(0),
          recordingKey: generateRecordingKey(n, 'tagInput')
        })
      })]
    }),
    icon: p && e === 1 ? jsx(jc, {
      onClick: () => {
        d(_$$_11.AUTO);
        x('html_tag');
      },
      recordingKey: generateRecordingKey(n, 'tag')
    }) : null
  });
}
function jm({
  recordingKey: e
}) {
  let [t, i] = vX();
  return jsx(DE, {
    label: null,
    input: jsxs('div', {
      className: v1,
      children: [jsxs('div', {
        className: v5,
        children: [getI18nString('sites.panel.accessibility.decorative'), jsx(_$$b7, {
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': getI18nString('sites.panel.accessibility.decorative_tooltip'),
          'data-tooltip-show-above': !0,
          'data-tooltip-show-immediately': !0
        })]
      }), jsx('div', {
        className: v2,
        children: jsx(_$$d5, {
          onChange: e => i(e),
          label: jsx(HiddenLabel, {
            children: getI18nString('sites.panel.accessibility.decorative')
          }),
          checked: !!t,
          recordingKey: generateRecordingKey(e, 'isDecorativeImageToggle')
        })
      })]
    }),
    icon: null
  });
}
function jh({
  hoveredRowType: e,
  onMouseEnter: t,
  onMouseLeave: i,
  recordingKey: n
}) {
  let [a, s, r] = vW();
  let {
    isSet,
    value
  } = a(jn);
  return jsx(DE, {
    label: null,
    onMouseEnter: t,
    onMouseLeave: i,
    input: jsxs('div', {
      className: v1,
      children: [jsx('div', {
        className: v5,
        children: jn
      }), jsx('div', {
        className: v2,
        children: jsx(_$$d5, {
          onChange: e => s(jn, e),
          label: jsx(HiddenLabel, {
            children: jn
          }),
          checked: !!value,
          recordingKey: n
        })
      })]
    }),
    icon: isSet && e === 3 ? jsx(jc, {
      onClick: () => {
        r(jn);
      },
      recordingKey: n
    }) : null
  });
}
function jg({
  hoveredRowType: e,
  setHoveredRowType: t,
  onMouseEnter: i,
  onMouseLeave: n,
  recordingKey: a
}) {
  let [s, r, o] = vW();
  let {
    isSet,
    value
  } = s(jl);
  return jsx(DE, {
    label: null,
    onMouseEnter: i,
    onMouseLeave: n,
    input: jsxs('div', {
      className: v1,
      children: [jsx('div', {
        className: v5,
        children: jl
      }), jsx('div', {
        className: v2,
        children: jsx(vJ, {
          value,
          onChange: e => r(jl, e),
          onDropdownHidden: () => t(0),
          recordingKey: a
        })
      })]
    }),
    icon: isSet && e === 4 ? jsx(jc, {
      onClick: () => {
        o(jl);
      },
      recordingKey: a
    }) : null
  });
}
function jf({
  hoveredRowType: e,
  setHoveredRowType: t,
  onMouseEnter: i,
  onMouseLeave: n,
  recordingKey: s
}) {
  let [r, o, d] = vW();
  let {
    isSet,
    value
  } = useMemo(() => {
    let {
      isSet: _isSet3,
      value: _value
    } = r(ja);
    return Array.isArray(_value) && _value.length > 0 ? {
      isSet: _isSet3,
      value: _value[0]
    } : {
      isSet: _isSet3,
      value: null
    };
  }, [r]);
  return jsx(DE, {
    label: null,
    onMouseEnter: i,
    onMouseLeave: n,
    input: jsxs('div', {
      className: v1,
      children: [jsx('div', {
        className: v5,
        children: ja
      }), jsx('div', {
        className: v2,
        children: jsx(v3, {
          value,
          onChange: e => {
            o(ja, [e]);
          },
          onDropdownHidden: () => t(0),
          recordingKey: s
        })
      })]
    }),
    icon: isSet && e === 5 ? jsx(jc, {
      onClick: () => {
        d(ja);
      },
      recordingKey: s
    }) : null
  });
}
function jv({
  codeFile: e,
  canvasNode: t
}) {
  let i = e?.sourceCodeLength;
  let n = _$$wE(t);
  let r = Zy(t ?? null);
  let o = useCallback(() => {
    t && (n ? Py({
      node: t
    }) : r());
  }, [t, n, r]);
  let d = useDispatch();
  let c = e?.sourceLibraryKey;
  let p = _$$b14({
    libraryKey: c,
    nodeId: e?.publishID ?? void 0,
    mainComponent: !0
  });
  let x = c && p.data?.link;
  let m = useCallback(() => {
    x && p.data?.link && d(V3({
      url: p.data?.link
    }));
  }, [x, p.data?.link, d]);
  if (!getFeatureFlags().sites || !getFeatureFlags().sts_code || i === 0) return null;
  if (c) {
    return x ? jsx(ButtonWide, {
      'onClick': m,
      'aria-label': getI18nString('design_systems.playground.open_component_in_library'),
      'htmlAttributes': {
        'data-tooltip': getI18nString('design_systems.playground.open_component_in_library'),
        'data-tooltip-type': KindEnum.TEXT
      },
      'variant': 'secondary',
      'children': getI18nString('design_systems.playground.open_component_in_library')
    }) : null;
  }
  let h = getFeatureFlags().sts_code_authoring || getFeatureFlags().sts_code_authoring_by_plan;
  return jsx(ButtonWide, {
    'onClick': o,
    'aria-label': n ? getI18nString('fullscreen_actions.edit-main-component') : getI18nString('fullscreen_actions.edit-code'),
    'recordingKey': 'openCodeWindow',
    'variant': 'secondary',
    'disabled': !h,
    ...(!h && {
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': getI18nString('sites.coming_soon_tooltip.make.title'),
      'data-tooltip-subtext': getI18nString('sites.coming_soon_tooltip.make.description')
    }),
    'children': n ? getI18nString('fullscreen_actions.edit-main-component') : getI18nString('fullscreen_actions.edit-code')
  });
}
let jj = memo(e => {
  let t = useAtomWithSubscription(Xq);
  let i = t.length > 0 && t[0] ? getSingletonSceneGraph().get(t[0]) : null;
  let n = i?.backingCodeComponent;
  let a = i?.backingCodeComponent?.exportedFromCodeFile?.guid;
  let s = a ? getSingletonSceneGraph().get(a) : null;
  let r = Fk((e, t, i) => i?.isSoftDeleted || t?.isSoftDeleted, n, s);
  let d = Wn(a);
  let c = (s === null || r) && !d;
  return t.length === 0 ? null : jsx(_$$Zk, {
    children: c ? jsxs('div', {
      className: 'x78zum5 xdt5ytf xf7z5ut x19y5rnk x1v8gsql x1y64a76',
      children: [jsx(_$$b7, {}), jsxs('div', {
        className: 'x78zum5 xdt5ytf x1gskr33 xctkrei x47lyk1',
        children: [jsx('div', {
          className: 'x1qxcl5b x1ihwiht',
          children: renderI18nText('sites.panel.code_instance_panel.missing_code.title')
        }), jsx('div', {
          className: 'x1n0bwc9 x1qxcl5b xdmjnt8',
          children: renderI18nText('sites.panel.code_instance_panel.missing_code.description')
        }), r && jsx('div', {
          children: jsx(Button, {
            variant: 'secondary',
            type: 'button',
            onClick: () => {
              _$$l.user('restore-deleted-code-component', () => {
                i?.restoreCodeInstanceWithSoftDeletedBackingNodes();
              });
            },
            children: renderI18nText('sites.panel.code_instance_panel.missing_code.restore_button')
          })
        })]
      })]
    }) : jsxs(Fragment, {
      children: [jsx('div', {
        children: jsx(_$$D8, {
          guids: t,
          recordingKey: e.recordingKey
        })
      }), jsx('div', {
        className: 'x1xvsi7n x1jwbysl x1ihwiht x1gcgh60',
        children: jsx(jv, {
          codeFile: s,
          canvasNode: i
        })
      })]
    })
  });
});
function jw(e) {
  return function (e) {
    if (void 0 === e || isInvalidValue(e)) return e;
    try {
      return JSON.parse(e);
    } catch (t) {
      e && console.error('Error parsing HTML Widget selection property value', e, t);
    }
  }(_$$kl(e));
}
function jS(e) {
  let t = jw(e);
  let i = A5(e);
  return [t, useCallback((e, t) => {
    i(e ? e.toString() : '', t);
  }, [i])];
}
function jT(e) {
  let {
    value,
    onParseValue,
    onSet,
    placeholder,
    recordingKey
  } = e;
  let [o, d] = useState('');
  useEffect(() => {
    let e = '';
    isInvalidValue(value) ? e = 'Mixed' : typeof value == 'number' ? e = value.toString() : value && (e = value);
    d(e);
  }, [value]);
  return jsx(_$$ks2, {
    className: 'html_widget_panel--input--kO6mE expanding_textarea--expandingTextarea--sWlgy',
    onChange: e => {
      d(e.currentTarget.value);
    },
    onBlur: () => {
      if (o === 'Mixed') return;
      let e = onParseValue ? onParseValue(o) : o;
      d(e.toString());
      onSet(e);
    },
    onFocus: e => {
      o === 'Mixed' && e.currentTarget.select();
    },
    onKeyDown: e => {
      e.keyCode !== Uz.ESCAPE && (e.keyCode !== Uz.ENTER || e.shiftKey) || (e.stopPropagation(), e.currentTarget.blur());
    },
    value: o,
    placeholder,
    recordingKey
  });
}
function jL(e) {
  switch (e) {
    case _$$Of.SHOW_UI:
      return getI18nString('sites.panel.html_widget.youtube.show_ui');
    case _$$Of.AUTOPLAY:
      return getI18nString('sites.panel.html_widget.youtube.autoplay');
    case _$$Of.ALLOW_FULLSCREEN:
      return getI18nString('sites.panel.html_widget.youtube.allow_fullscreen');
    case _$$Of.MAPS_ZOOM_LEVEL:
      return getI18nString('sites.panel.html_widget.google_map.zoom');
    case _$$Of.MAPS_LOCATION:
      return getI18nString('sites.panel.html_widget.google_map.location');
    case _$$Of.ALLOW_COOKIES:
      return getI18nString('sites.panel.html_widget.youtube.allow_cookies');
  }
}
let jP = [ON, _$$om, _$$m8];
function jO(e, t) {
  let i = {};
  e.specialParameters.forEach(e => {
    e.location === 'queryParam' ? i[e.parameterName] = function (e, t) {
      try {
        if (!t) return e.defaultValue;
        let i = new URL(t).searchParams.get(e.parameterName);
        if (e.parameterType === 'boolean') {
          if (!i) return e.defaultValue;
          return i === '1';
        }
        if (e.parameterType === 'number') {
          if (!i) return e.defaultValue;
          return Number(i);
        }
        if (e.parameterType === 'string') return i || e.defaultValue;
        return !1;
      } catch (t) {
        return e.defaultValue;
      }
    }(e, t) : e.location === 'sourceURL' && e.parameterName === 'allowcookies' && (i[e.parameterName] = !t.includes('youtube-nocookie.com'));
  });
  return i;
}
function jF({
  parameter: e,
  onChange: t,
  value: i,
  recordingKey: n
}) {
  return jsx(_$$ks2, {
    value: i,
    onChange: e => t(e.currentTarget.value),
    placeholder: function (e) {
      if (e === _$$Of.MAPS_LOCATION) return getI18nString('sites.panel.html_widget.google_map.location_hint');
    }(e.parameterName),
    recordingKey: n
  });
}
function jM({
  parameter: e,
  onChange: t,
  value: i,
  recordingKey: n
}) {
  return e.htmlWidgetDerivedProperty ? jsx(jD, {
    parameter: e,
    htmlWidgetDerivedProperty: e.htmlWidgetDerivedProperty,
    recordingKey: n
  }) : jsx(_$$d5, {
    checked: i,
    onChange: t,
    label: jsxs('label', {
      className: 'x3nfvp2 xg2d0mh',
      children: [jL(e.parameterName), e.parameterName === 'allowcookies' ? jsx(_$$B3, {
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': getI18nString('sites.panel.html_widget.youtube.allow_cookies_info')
      }) : null]
    }),
    recordingKey: n
  });
}
function jD({
  parameter: e,
  htmlWidgetDerivedProperty: t,
  recordingKey: i
}) {
  let [n, a] = jS(t);
  return void 0 === n || isInvalidValue(n) ? null : jsx(_$$d5, {
    checked: n,
    onChange: e => {
      a(e, yesNoTrackingEnum.YES);
    },
    label: jsx('label', {
      children: jL(e.parameterName)
    }),
    recordingKey: i
  });
}
function jz({
  parameter: e,
  onChange: t,
  value: i,
  recordingKey: n
}) {
  let r = useDispatch();
  let [o, d] = useState(i);
  useEffect(() => {
    d(i);
  }, [i]);
  return jsxs('div', {
    children: [jsx('div', {
      className: _$$s4.textBodyMedium.colorTextSecondary.pb8.$,
      children: jL(e.parameterName)
    }), jsxs('div', {
      className: _$$s4.flex.gap8.itemsCenter.$,
      children: [jsx('div', {
        className: _$$s4.flex1.$,
        children: jsx(_$$A21, {
          'aria-label': jL(e.parameterName),
          'min': e.min,
          'max': e.max,
          'value': o,
          'defaultValue': e.defaultValue,
          'step': 1,
          'bigStep': 5,
          'onChange': (e, i) => {
            i.commit && t(e);
            d(e);
          },
          'recordingKey': n ? `${n}-slider` : void 0
        })
      }), jsx(Ht, {
        'className': 'embed_config_controls--scrubbableIntInput--OrgR9',
        'value': o,
        'onValueChange': e => {
          d(e);
          t(e);
        },
        'min': e.min,
        'max': e.max,
        'data-tooltip': jL(e.parameterName),
        'data-tooltip-type': KindEnum.TEXT,
        'dispatch': r,
        'recordingKey': n ? `${n}-input` : void 0
      })]
    })]
  });
}
function jB({
  parameter: e,
  htmlWidgetDerivedProperty: t,
  recordingKey: i
}) {
  return e.parameterType === 'boolean' ? jsx(jD, {
    parameter: e,
    htmlWidgetDerivedProperty: t,
    recordingKey: i
  }) : (console.error(`Unsupported parameter type for widget synced state property: ${e.parameterType}`), null);
}
function j$({
  parameter: e,
  onChange: t,
  value: i,
  recordingKey: n
}) {
  return e.parameterType === 'boolean' ? jsx(jM, {
    parameter: e,
    onChange: t,
    value: i,
    recordingKey: n
  }) : e.parameterType === 'number' ? jsx(jz, {
    parameter: e,
    onChange: t,
    value: i,
    recordingKey: n
  }) : e.parameterType === 'string' ? jsx(jF, {
    parameter: e,
    onChange: t,
    value: i,
    recordingKey: n
  }) : null;
}
function jU({
  embedType: e,
  parameters: t,
  values: i,
  onChange: n,
  recordingKey: a
}) {
  return t && t.length && i ? jsx('div', {
    children: t.map(t => {
      let s = i[t.parameterName];
      let r = a ? `${a}-param-${t.parameterName}` : void 0;
      return t.location === 'widgetProperty' && t.htmlWidgetDerivedProperty ? jsx(DE, {
        icon: null,
        label: null,
        input: jsx('div', {
          className: _$$s4.pb8.$,
          children: jsx(jB, {
            parameter: t,
            htmlWidgetDerivedProperty: t.htmlWidgetDerivedProperty,
            recordingKey: r
          })
        })
      }, t.parameterName) : void 0 === s || t.location === 'htmlAttribute' && e !== _$$w6.HTML ? null : jsx(DE, {
        icon: null,
        label: null,
        input: jsx('div', {
          className: _$$s4.pb8.$,
          children: jsx(j$, {
            parameter: t,
            onChange: e => n(t, e),
            value: s,
            recordingKey: r
          })
        })
      }, t.parameterName);
    })
  }) : null;
}
function jK({
  isInvalid: e,
  placeholder: t,
  value: i,
  onChange: n,
  submit: s,
  submitOnEnter: r = !1,
  recordingKey: o,
  ...d
}) {
  let c = useCallback(e => {
    r && e.key === 'Enter' && (e.preventDefault(), s && s(e.currentTarget.value), e.currentTarget.blur());
    d.onKeyDown?.(e);
  }, [r, s, d]);
  return jsx(_$$v8, {
    placeholder: t,
    value: i,
    onChange: n,
    onKeyDown: c,
    submit: s,
    maxHeight: 120,
    recordingKey: generateRecordingKey(o, 'embedTextInput'),
    ...d
  });
}
function jH({
  value: e,
  onChange: t,
  options: i,
  recordingKey: n
}) {
  return jsx('div', {
    className: 'text_segmented_control--root--Ov88W',
    children: i.map((i, a) => {
      let s = e === i.value;
      return jsx(ButtonPrimitive, {
        className: v()('text_segmented_control--option--iiNv3', _$$s4.textBodyMedium.$, {
          'text_segmented_control--selected--K-gRk': s
        }),
        onClick: () => t(i.value),
        recordingKey: n ? `${n}-option-${a}` : void 0,
        children: i.label
      }, a);
    })
  });
}
let jq = ['width', 'height', 'src', 'title', 'frameborder', 'allow', 'allowfullscreen', 'style'];
let jX = new Set(['allowfullscreen']);
function jV(e, t, i) {
  t.parameterType === 'boolean' ? i ? e.searchParams.set(t.parameterName, '1') : e.searchParams.set(t.parameterName, '0') : t.parameterType === 'number' ? e.searchParams.set(t.parameterName, i.toString()) : t.parameterType === 'string' && e.searchParams.set(t.parameterName, i);
  return e;
}
function jG(e) {
  return e && !isInvalidValue(e);
}
function jW(e) {
  let [t, i] = jS('htmlWidgetGenericEmbedCodeType');
  let [n, s] = jS('htmlWidgetGenericEmbedUrl');
  let [r, o] = jS('htmlWidgetGenericEmbedIframeHtml');
  let [d, c] = useState('');
  let [p, x] = useState('');
  function m(e) {
    s(JSON.stringify(e).slice(1, -1));
  }
  function h(e) {
    o(JSON.stringify(e).slice(1, -1));
  }
  useEffect(() => {
    c(n);
  }, [n]);
  useEffect(() => {
    x(r);
  }, [r]);
  useEffect(() => {
    jG(t) && i(t);
  }, [t, i]);
  let g = useMemo(() => t === _$$w6.HTML ? jP.find(e => e.allowedEmbedTypes?.includes(t) && e.urlPatterns.some(e => e.test(function (e) {
    let t = new DOMParser().parseFromString(e, 'text/html').querySelector('iframe');
    return t ? t.getAttribute('src') ?? '' : '';
  }(p)))) : jP.find(e => e.allowedEmbedTypes?.includes(t) && e.urlPatterns.some(e => e.test(d))), [d, p, t]);
  let f = useMemo(() => g ? t === _$$w6.HTML ? function (e, t) {
    let i = {};
    try {
      let n = new DOMParser().parseFromString(t, 'text/html').querySelector('iframe');
      if (n) {
        e.specialParameters.filter(e => e.location === 'htmlAttribute').forEach(e => {
          i[e.parameterName] = e.parameterType === 'boolean' ? n.hasAttribute(e.parameterName) : e.defaultValue;
        });
        let t = n.getAttribute('src');
        t && Object.assign(i, jO(e, t));
      }
    } catch (e) {
      console.error('Error getting transformation value:', e);
    }
    return i;
  }(g, p) : jO(g, d) : {}, [g, p, d, t]);
  if (!jG(t) || isInvalidValue(d) || isInvalidValue(p) || isInvalidValue(n) || isInvalidValue(r)) return null;
  let {
    isValid,
    errorMessage
  } = t === _$$w6.HTML ? function (e) {
    let t = new DOMParser().parseFromString(e, 'text/html');
    if (getFeatureFlags().sites_generic_html_embeds) {
      if (t.body.children.length === 0 && t.head.children.length === 0) {
        return {
          isValid: !1,
          errorMessage: getI18nString('sites.panel.generic_embed.invalid_html_input_error')
        };
      }
    } else {
      let i = t.querySelector('iframe');
      if (!e.startsWith('<iframe') || !i) {
        return {
          isValid: !1,
          errorMessage: getI18nString('sites.panel.generic_embed.only_iframes')
        };
      }
    }
    return {
      isValid: !0
    };
  }(r || '') : function (e) {
    let t = e.length > 0 ? KJ(e)?.url : '';
    return isInvalidValue(e) || void 0 === t ? {
      isValid: !1,
      errorMessage: getI18nString('sites.panel.generic_embed.invalid_url_input_error')
    } : {
      isValid: !0
    };
  }(n || '');
  let y = t === _$$w6.HTML ? !isValid && (r || '').length > 0 : !isValid && (n || '').length > 0;
  let v = t === _$$w6.HTML ? jsx('div', {
    className: 'x1gskr33',
    children: jsx(jK, {
      submitOnEnter: !0,
      placeholder: getFeatureFlags().sites_generic_html_embeds ? getI18nString('sites.panel.html_widget.generic.html_input_placeholder') : getI18nString('sites.panel.html_widget.generic.html_placeholder'),
      value: p,
      onChange: e => x(e.currentTarget.value),
      submit: h,
      minHeight: 120,
      isInvalid: y,
      recordingKey: generateRecordingKey(e.recordingKey, 'genericEmbedHtmlInput')
    }, 'generic-embed-html-input-row')
  }) : jsx('div', {
    className: 'x1gskr33',
    children: jsx(jK, {
      submitOnEnter: !0,
      placeholder: getI18nString('sites.panel.html_widget.generic.url_placeholder'),
      value: d,
      onChange: e => c(e.currentTarget.value),
      submit: m,
      delay: 50,
      isInvalid: y,
      recordingKey: generateRecordingKey(e.recordingKey, 'genericEmbedUrlInput')
    }, 'generic-embed-url-input-row')
  });
  return jsxs(Fragment, {
    children: [jsx(DE, {
      icon: null,
      label: null,
      input: jsx(jH, {
        value: t,
        onChange: i,
        options: [{
          value: _$$w6.URL,
          label: getI18nString('sites.panel.html_widget.generic.url_label')
        }, {
          value: _$$w6.HTML,
          label: getI18nString('sites.panel.html_widget.generic.html_label')
        }],
        recordingKey: generateRecordingKey(e.recordingKey, 'genericEmbedTypeControl')
      })
    }), jsx(DE, {
      icon: null,
      label: null,
      input: v
    }), y && errorMessage && jsx('div', {
      className: 'x1gcgh60 x1jwbysl x1vi7shn xp6roeo',
      children: jsx(_$$cV, {
        'variant': 'default',
        'data-testid': 'generic-embed-error-banner',
        'children': jsx(_$$Q5, {
          children: errorMessage
        })
      })
    }), g && f && g.specialParameters.length > 0 && jsxs(Fragment, {
      children: [jsx(_$$r8, {
        titleTx: function (e) {
          switch (e) {
            case _$$ol2.YOUTUBE:
              return renderI18nText('sites.panel.html_widget.youtube_settings.title');
            case _$$ol2.GOOGLE_MAPS:
              return renderI18nText('sites.panel.html_widget.location_settings.title');
            default:
              return null;
          }
        }(g.configType) ?? jsx(Fragment, {})
      }), jsx(jU, {
        parameters: g.specialParameters,
        values: f,
        onChange(e, i) {
          if (t === _$$w6.HTML) {
            let t = typeof r == 'string' ? r : '';
            if (!t) return;
            let n = new DOMParser().parseFromString(t, 'text/html').querySelector('iframe');
            if (!n) return;
            let l = function (e, t, i) {
              if (t.location === 'queryParam') {
                let n = e.getAttribute('src');
                if (!n) return e;
                try {
                  let l = new URL(n);
                  let a = jV(l, t, i);
                  e.setAttribute('src', a.toString());
                } catch (e) {
                  console.error('Error updating URL parameter:', e);
                }
              } else {
                t.parameterType === 'boolean' && (i ? e.setAttribute(t.parameterName, '') : e.removeAttribute(t.parameterName));
              }
              return e;
            }(n, e, i);
            let a = function (e) {
              let t = jq.map(t => {
                let i = e.getAttribute(t);
                return i !== null && jX.has(t) ? t : i !== null ? `${t}="${i}"` : null;
              }).filter(e => e !== null);
              return `<iframe ${t.join(' ')}></iframe>`;
            }(l);
            x(a);
            h(a);
            let s = l.getAttribute('src');
            s && (c(s), m(s));
          } else {
            let t = typeof n == 'string' ? n : '';
            if (!t) return;
            let l = function (e, t, i) {
              if (t.location !== 'queryParam' && t.location !== 'sourceURL') return e;
              try {
                let n = new URL(e);
                if (t.location === 'queryParam') return jV(n, t, i).toString();
                t.location === 'sourceURL' && t.parameterName === 'allowcookies' && t.parameterType === 'boolean' && (n.hostname = i ? 'www.youtube.com' : 'www.youtube-nocookie.com');
                return n.toString();
              } catch (t) {
                console.error('Error updating URL parameter:', t);
                return e;
              }
            }(t, e, i);
            l !== t && (c(l), m(l));
          }
        },
        embedType: t,
        recordingKey: generateRecordingKey(e.recordingKey, 'embedConfigControls')
      })]
    })]
  });
}
function jY() {
  let [e, t] = jS('htmlWidgetGoogleMapLocation');
  let [i, n] = jS('htmlWidgetGoogleMapZoom');
  return jsxs(Fragment, {
    children: [jsx(_$$fI, {
      children: jsx('span', {
        className: _$$s4.gridColumnStart2.gridColumnEnd19.$,
        children: renderI18nText('sites.panel.html_widget.google_map.location')
      })
    }), jsx(_$$fI, {
      children: jsx(jT, {
        value: e,
        onSet: t,
        placeholder: getI18nString('sites.panel.html_widget.google_map.location')
      })
    }), jsx(_$$fI, {
      children: jsx('span', {
        className: _$$s4.gridColumnStart2.gridColumnEnd19.$,
        children: renderI18nText('sites.panel.html_widget.google_map.zoom')
      })
    }), jsx(_$$fI, {
      children: jsx(jT, {
        value: i,
        onParseValue: e => {
          let t = parseInt(e);
          let i = t;
          isNaN(t) ? i = 12 : t < 0 ? i = 0 : t > 21 && (i = 21);
          return i;
        },
        onSet: n,
        placeholder: getI18nString('sites.panel.html_widget.google_map.zoom')
      })
    })]
  });
}
let jZ = jJ;
function jQ() {
  let [e, t] = jS('htmlWidgetMailchimpFormURL');
  let [i, n] = jS('htmlWidgetMailchimpInputPlaceholder');
  let [a, s] = jS('htmlWidgetMailchimpSubmitButtonLabel');
  return jsxs(Fragment, {
    children: [jsx(_$$fI, {
      children: jsx('span', {
        className: _$$s4.gridColumnStart2.gridColumnEnd19.$,
        children: renderI18nText('sites.panel.html_widget.mailchimp.form_url')
      })
    }), jsx(_$$fI, {
      children: jsx(jT, {
        value: e,
        onSet: e => t(function (e) {
          if (!e) return '';
          let t = document.createElement('textarea');
          t.innerHTML = jZ().sanitize(e);
          return t.textContent || '';
        }(e)),
        placeholder: getI18nString('sites.panel.html_widget.mailchimp.form_url')
      })
    }), jsx('div', {
      className: _$$s4.gridColumnStart2.gridColumnEnd19.font11.colorTextSecondary.pt8.pb8.pl18.pr36.$,
      children: renderI18nText('sites.panel.html_widget.mailchimp.form_url_tip')
    }), jsx(_$$fI, {
      children: jsx('span', {
        className: _$$s4.gridColumnStart2.gridColumnEnd19.$,
        children: renderI18nText('sites.panel.html_widget.mailchimp.input_placeholder')
      })
    }), jsx(_$$fI, {
      children: jsx(jT, {
        value: i,
        onSet: n,
        placeholder: getI18nString('sites.panel.html_widget.mailchimp.input_placeholder')
      })
    }), jsx(_$$fI, {
      children: jsx('span', {
        className: _$$s4.gridColumnStart2.gridColumnEnd19.$,
        children: renderI18nText('sites.panel.html_widget.mailchimp.submit_button_label')
      })
    }), jsx(_$$fI, {
      children: jsx(jT, {
        value: a,
        onSet: s,
        placeholder: getI18nString('sites.panel.html_widget.mailchimp.submit_button_label')
      })
    })]
  });
}
function j0() {
  let e = I9();
  let t = jw('htmlWidgetType');
  if (!e?.length || !t || isInvalidValue(t)) return null;
  let i = null;
  switch (t) {
    case _$$hK.MAILCHIMP:
      i = jsx(jQ, {});
      break;
    case _$$hK.GOOGLE_MAP:
      i = jsx(jY, {});
      break;
    case _$$hK.YOUTUBE:
      i = jsx(j1, {});
      break;
    case _$$hK.GENERIC:
      i = jsx(jW, {
        recordingKey: 'embedPanel'
      });
      break;
    default:
      i = null;
  }
  return jsx(_$$Zk, {
    children: i
  });
}
function j1() {
  let [e, t] = jS('htmlWidgetYouTubeVideoURL');
  return jsxs(Fragment, {
    children: [jsx(_$$fI, {
      children: jsx('span', {
        className: _$$s4.gridColumnStart2.gridColumnEnd19.$,
        children: renderI18nText('sites.panel.html_widget.youtube.video_link')
      })
    }), jsx(_$$fI, {
      children: jsx(jT, {
        value: e,
        onSet: t,
        placeholder: 'Video URL',
        recordingKey: 'youtubeVideoURLInput'
      })
    })]
  });
}
let j4 = 'responsivenessPanel';
function j3() {
  let e = _$$kl('responsiveSetScalingMode');
  let t = useId();
  return getFeatureFlags().sites ? jsxs(_$$Zk, {
    children: [jsx(_$$r8, {
      titleTx: renderI18nText('sites.panel.responsiveness')
    }), jsx(DE, {
      labelId: t,
      label: renderI18nText('sites.panel.responsiveness.scaling_mode'),
      input: jsx(j8, {
        ariaLabelledBy: t
      }),
      icon: null
    }), e === 'SCALE' && jsxs(Fragment, {
      children: [jsx(j6, {
        label: renderI18nText('sites.panel.responsiveness.scaling_max_layout_width'),
        input: jsx(j9, {
          property: 'responsiveSetScalingMaxLayoutWidth'
        })
      }), jsx(j6, {
        label: renderI18nText('sites.panel.responsiveness.scaling_min_layout_width'),
        input: jsx(j9, {
          property: 'responsiveSetScalingMinLayoutWidth'
        })
      }), jsx(j6, {
        label: renderI18nText('sites.panel.responsiveness.scaling_max_font_size'),
        input: jsx(j7, {
          property: 'responsiveSetScalingMaxFontSize'
        })
      }), jsx(j6, {
        label: renderI18nText('sites.panel.responsiveness.scaling_min_font_size'),
        input: jsx(j7, {
          property: 'responsiveSetScalingMinFontSize'
        })
      })]
    })]
  }) : null;
}
function j8({
  ariaLabelledBy: e
}) {
  let t = _$$kl('responsiveSetScalingMode') ?? 'REFLOW';
  let i = useDispatch();
  let n = Um();
  let a = trackFileEventWithStore();
  return jsxs(_$$l1, {
    ariaLabelledBy: e,
    id: 'scaling_mode_combobox',
    dispatch: i,
    dropdownShown: n,
    formatter: ke,
    property: t,
    onChange: e => {
      _$$l.user('responsive-set-scaling-mode', () => {
        Fullscreen.setResponsiveSetScalingMode(e);
        a('sites_scaling_mode_change', {
          scalingMode: e
        });
      });
    },
    icon: t === 'REFLOW' ? jsx(_$$F9, {}) : jsx(_$$l3, {}),
    recordingKey: generateRecordingKey(j4, 'scalingModeDropdown'),
    children: [jsx(_$$c$6, {
      value: 'REFLOW',
      icon: jsx(_$$F9, {})
    }), jsx(_$$c$6, {
      value: 'SCALE',
      icon: jsx(_$$l3, {})
    })]
  });
}
function j6({
  label: e,
  input: t
}) {
  return jsx(DE, {
    label: null,
    input: jsxs('div', {
      className: 'styles-module--inlineInputRow--BExaq',
      children: [jsx('div', {
        className: 'styles-module--label--1OjCR',
        children: e
      }), jsx('div', {
        className: 'styles-module--input--OiXjl',
        children: t
      })]
    }),
    icon: null
  });
}
function j7({
  property: e
}) {
  let t = _$$kl(e);
  isInvalidValue(t);
  let i = t;
  return jsx(Q7, {
    property: i,
    formatter: kt,
    onChange: t => {
      _$$l.user(`responsive-set-scaling-${e}`, () => {
        e === 'responsiveSetScalingMinFontSize' ? Fullscreen.setResponsiveSetScalingMinFontSize(t) : Fullscreen.setResponsiveSetScalingMaxFontSize(t);
      });
    },
    recordingKey: generateRecordingKey(j4, e)
  });
}
function j9({
  property: e
}) {
  let t = _$$kl(e);
  isInvalidValue(t);
  let i = t;
  return jsx(Q7, {
    property: i,
    formatter: kt,
    onChange: t => {
      _$$l.user(`responsive-set-scaling-${e}`, () => {
        e === 'responsiveSetScalingMinLayoutWidth' ? Fullscreen.setResponsiveSetScalingMinLayoutWidth(t) : Fullscreen.setResponsiveSetScalingMaxLayoutWidth(t);
      });
    },
    recordingKey: generateRecordingKey(j4, e)
  });
}
let ke = {
  format: e => {
    switch (e) {
      case 'REFLOW':
        return getI18nString('sites.panel.responsiveness.scaling_mode.reflow');
      case 'SCALE':
        return getI18nString('sites.panel.responsiveness.scaling_mode.scale');
      default:
        throwTypeError(e);
    }
  },
  parse: e => {
    switch (e) {
      case 'REFLOW':
      case 'SCALE':
        return e;
      default:
        return 'REFLOW';
    }
  }
};
let kt = new X9({
  min: 0,
  max: void 0
});
let ko = _$$l1;
let kd = _$$c$6;
function kc(e) {
  let t = useDispatch();
  let i = Um();
  let n = Df();
  let o = Jo();
  let [d, c] = Xw();
  let p = useCurrentFileKey();
  let [x, m] = _$$lJ2('stackPositioning');
  let g = _$$kl('scrollBehavior');
  let f = G7();
  let _ = _$$Tv();
  let y = useMemo(() => {
    if (!_) return !1;
    for (let e of _) {
      let t = getSingletonSceneGraph().get(e);
      if (t && t.parentGuid) {
        let e = getSingletonSceneGraph().get(t.parentGuid);
        if (e && e.parentGuid) {
          let t = e.parentNode;
          if (!t?.isResponsiveSet) return !0;
        }
      }
    }
    return !1;
  }, [_]);
  let v = useMemo(() => _?.some(e => {
    let t = getSingletonSceneGraph().get(e);
    return t?.isInDakotaRepeater;
  }), [_]);
  let j = useCallback(e => {
    switch (e) {
      case 'RELATIVE':
        m('AUTO');
        _$$l.user('set-scroll-behavior', () => PrototypingTsApi.aggressivelySetScrollBehaviorOfSelection(ScrollBehavior.SCROLLS));
        break;
      case 'ABSOLUTE':
        f && !v && m('ABSOLUTE');
        _$$l.user('set-scroll-behavior', () => PrototypingTsApi.aggressivelySetScrollBehaviorOfSelection(ScrollBehavior.SCROLLS));
        break;
      case 'FIXED':
        !y && f && m('ABSOLUTE');
        _$$l.user('set-scroll-behavior', () => PrototypingTsApi.aggressivelySetScrollBehaviorOfSelection(ScrollBehavior.FIXED));
        break;
      case 'STICKY':
        _$$l.user('set-scroll-behavior', () => PrototypingTsApi.aggressivelySetScrollBehaviorOfSelection(ScrollBehavior.STICKY_SCROLLS));
    }
    fullscreenValue.commit();
  }, [v, f, m, y]);
  let k = useMemo(() => isInvalidValue(x) || isInvalidValue(g) ? MIXED_MARKER : g === 'STICKY_SCROLLS' ? 'STICKY' : g === 'FIXED_WHEN_CHILD_OF_SCROLLING_FRAME' ? 'FIXED' : f ? x === 'AUTO' ? 'RELATIVE' : x === 'ABSOLUTE' ? 'ABSOLUTE' : void debug(!1, 'Do not expect any other conditions to be met') : 'ABSOLUTE', [g, f, x]);
  return jsx(_$$k10, {
    name: 'sites_position_panel',
    children: jsxs(_$$Zk, {
      ...c,
      children: [jsx(_$$Wv, {
        titleTx: renderI18nText('sites.panel.position_panel.position'),
        faded: !1,
        children: jsx('div', {
          className: 'sites_position_panel--positionSelect--jJf4p',
          children: jsxs(ko, {
            ariaLabel: getI18nString('sites.panel.position_panel.position'),
            borderless: !0,
            dispatch: t,
            dropdownAlignment: 'right',
            dropdownShown: i,
            dropdownWidth: 104,
            formatter: _$$dg,
            id: 'sites-position-select',
            onChange: j,
            property: k,
            recordingKey: generateRecordingKey(e.recordingKey, 'dropdown'),
            textAlign: 'right',
            children: [jsx(kd, {
              disabled: !f,
              tooltip: f ? void 0 : 'position-panel-relative-disabled',
              value: 'RELATIVE',
              recordingKey: generateRecordingKey(e.recordingKey, 'relative')
            }), jsx(kd, {
              disabled: v,
              value: 'ABSOLUTE',
              recordingKey: generateRecordingKey(e.recordingKey, 'absolute')
            }), jsx(kd, {
              disabled: y || v,
              tooltip: y ? 'position-panel-fixed-disabled' : void 0,
              value: 'FIXED',
              recordingKey: generateRecordingKey(e.recordingKey, 'fixed')
            }), jsx(kd, {
              disabled: v,
              value: 'STICKY',
              recordingKey: generateRecordingKey(e.recordingKey, 'sticky')
            })]
          })
        })
      }), jsx(_$$aq, {
        isHoveringOverPanel: d
      }), (k === 'ABSOLUTE' || k === 'FIXED' || k === 'STICKY') && jsx(Fragment, {
        children: jsx(_$$dA, {
          recordingKey: e.recordingKey,
          openFileKey: p,
          transformDisabled: !1,
          showFrameFitButton: !1,
          canEditConstraints: !0
        })
      }), (n.angle || n.cornerRadius) && jsx(_$$Q12, {
        cornerRadiusShown: n.cornerRadius,
        cornerRadiusDisabled: !o.cornerRadius,
        rectangleCornersShown: n.rectangleCornerRadii,
        rectangleCornersDisabled: !o.rectangleCornerRadii,
        angleShown: n.angle,
        angleDisabled: !o.angle,
        recordingKey: e.recordingKey
      })]
    })
  });
}
function ku({
  pickerShown: e,
  sceneGraphSelection: t,
  shownPanels: i,
  scrollContainer: n,
  dropdownShown: a,
  colorFormat: d,
  modalShown: c,
  stylePickerShown: u,
  pickerInStyleCreationShown: p,
  library: x,
  stylePickerListLayout: g,
  allSavedPlugins: f,
  localPlugins: _,
  publishedPlugins: b
}) {
  let y = useDispatch();
  let v = useAtomWithSubscription(_$$b12);
  let j = selectCurrentFile();
  let k = _$$hD();
  let w = zp();
  let S = _$$s2('currentPage', 'currentSelectedProperty');
  let C = useSelector(e => e.saveAsState);
  let T = _$$kk(getSingletonSceneGraph().getDirectlySelectedNodes());
  let I = _$$U() && (T?.type === 'REPEATER' || T?.isResponsiveSet);
  let E = _$$U() && T?.type === 'CMS_RICH_TEXT';
  let N = qh();
  let R = _$$Ws(i, t);
  let A = _$$So(i, !0) && !E;
  let {
    numSelected,
    areOnlyResponsiveSetsSelected,
    pluginRelaunchData
  } = DQ('numSelected', 'areOnlyResponsiveSetsSelected', 'pluginRelaunchData');
  let {
    exportSettings,
    maskType
  } = zj('exportSettings', 'maskType');
  let D = _$$Gt('stateGroupSelectionInfo');
  let z = _$$SJ();
  return jsxs(_$$i7, {
    children: [jsx(_$$_i, {
      recordingKey: 'toolbarView',
      shouldShowCodeInstancePanel: _$$jd(i),
      shouldShowComponentPropertiesPanel: _$$tV2(i, D),
      shouldShowInstancePanel: M0(i),
      shouldShowSlotPanel: Br(i),
      withBottomBorder: !_$$jd(i) && !_$$cR(i) && !I
    }), getFeatureFlags().react_scenegraph && jsx(VF, {
      isVisible: i[ItemType.JSX_ITEM],
      children: () => jsx(_$$_10, {})
    }), jsx(VF, {
      isVisible: !!numSelected && areOnlyResponsiveSetsSelected,
      children: () => jsx(_$$wu, {
        showExplicitOnly: !0,
        recordingKey: 'sitesDesignPanel-variableModeEntries'
      })
    }), jsx(VF, {
      isVisible: I,
      children: () => jsx(yS, {})
    }), jsx(VF, {
      isVisible: i[ItemType.SITES_HTML_WIDGET_ITEM],
      children: () => jsx(j0, {})
    }), jsx(VF, {
      isVisible: _$$tV2(i, D),
      children: () => jsx(BS, {
        recordingKey: 'propsPanel'
      }, 'componentProperties')
    }), jsx(VF, {
      isVisible: i[ItemType.COMPONENT_ITEM],
      children: () => jsx(_$$c0, {
        recordingKey: 'componentPanel'
      }, 'component')
    }), jsx(VF, {
      isVisible: !_$$NR(i) && M0(i),
      children: () => jsx(_$$_1, {
        recordingKey: 'instancePanel'
      }, 'instance')
    }), jsx(VF, {
      isVisible: !_$$NR(i) && _$$jd(i),
      children: () => jsx(jj, {
        recordingKey: 'codeInstancePanel'
      }, 'codeInstance')
    }), jsx(VF, {
      isVisible: i[ItemType.CODE_INSTANCE_HTML_FIBER],
      children: () => jsx(vu, {
        recordingKey: 'webDirectManipulation'
      })
    }), jsx(VF, {
      isVisible: i[ItemType.SITES_LINK_ITEM],
      children: () => jsx(_$$rC2, {
        recordingKey: 'linkPanel'
      })
    }), jsx(VF, {
      isVisible: i[ItemType.SITES_POSITION_ITEM],
      children: () => jsx(kc, {
        recordingKey: 'positionPanel'
      })
    }), jsx(VF, {
      isVisible: i[ItemType.TRANSFORM_ITEM],
      children: () => jsx(zq, {
        recordingKey: 'transformPanel',
        openFileKey: j?.key || null,
        propertiesPanelState: v,
        canEditConstraints: GG(i),
        onlyShowXYInputsRow: v === GR.DEFAULT_SIMPLIFIED || (areOnlyResponsiveSetsSelected ?? !1)
      }, 'transform')
    }), jsx(VF, {
      isVisible: i[ItemType.VECTOR_TRANSFORM_UNIFIED_ITEM],
      children: () => jsx(U_, {
        recordingKey: 'transformPanel',
        openFileKey: j?.key || null,
        dispatch: y,
        dropdownShown: a
      }, 'vector-transform')
    }), jsx(VF, {
      isVisible: A,
      children: () => jsx(Vy, {
        onlyShowResizingRow: v === GR.DEFAULT_SIMPLIFIED,
        onlyStacksAndGridsSelected: !!i[ItemType.STACK_ITEM],
        hideToggleButton: I,
        recordingKey: 'stackPanel'
      }, 'stack')
    }), jsx(VF, {
      isVisible: E,
      children: () => jsx(b1, {})
    }), jsx(F$, {
      isVisible: i[ItemType.SCALE_ITEM]
    }), jsx(VF, {
      isVisible: i[ItemType.VECTOR_ITEM],
      children: () => jsx(VR, {
        recordingKey: 'vectorTransformPanel',
        useContextualSelectionProperties: !0,
        dispatch: y,
        dropdownShown: a,
        isUI3: !0
      }, 'vector-transform')
    }), jsx(VF, {
      isVisible: i[ItemType.PENCIL_TOOL],
      children: () => jsx(_$$q1, {
        id: 'pencilToolPanel',
        recordingKey: 'pencilToolPanel',
        openFile: j
      }, 'pencilToolPanel')
    }), jsx(VF, {
      isVisible: i[ItemType.MASK_ITEM],
      children: () => jsx(_$$B8, {
        recordingKey: 'maskPanel',
        maskType
      }, 'mask')
    }), jsx(VF, {
      isVisible: i[ItemType.LAYER_ITEM],
      children: () => jsx(X2, {
        recordingKey: 'appearancePanel'
      })
    }), jsx(VF, {
      isVisible: i[ItemType.TYPE_ITEM],
      children: () => jsx(_$$gc, {}, 'type')
    }), jsx(VF, {
      isVisible: E,
      children: () => jsx(ys, {})
    }), jsx(VF, {
      isVisible: i[ItemType.CANVAS_ITEM],
      children: () => jsx(_$$v1, {
        colorFormat: d,
        defaultColor: _$$rC,
        dispatch: y,
        dropdownShown: a,
        hasExports: !!exportSettings && valueOrFallback(exportSettings, []).length > 0,
        library: x,
        modalShown: c,
        openFile: j,
        pickerShown: e,
        recordingKey: 'canvasBackgroundPanel',
        sceneGraphSelection: t
      }, 'canvas-background')
    }), jsx(VF, {
      isVisible: i[ItemType.REMOVE_GROUP_BACKGROUND_ITEM],
      children: () => jsx(_$$C0, {}, 'remove-group-fill-stroke')
    }), jsx(VF, {
      isVisible: i[ItemType.FILL_ITEM],
      children: () => jsx(B8, {
        variableScopes: N
      }, 'fill')
    }), jsx(VF, {
      isVisible: i[ItemType.STROKE_ITEM],
      children: () => jsx($p, {
        colorFormat: d,
        defaultColor: Em,
        dispatch: y,
        dropdownShown: a,
        isPanelBodyCollapsedAtom: null,
        library: x,
        modalShown: c,
        openFile: j,
        pickerInStyleCreationShown: p,
        pickerShown: e,
        recordingKey: 'strokePanel',
        sceneGraphSelection: t,
        stylePickerListLayout: g,
        stylePickerShown: u
      }, 'stroke')
    }), jsx(VF, {
      isVisible: i[ItemType.EFFECTS_ITEM],
      children: () => jsx(_$$w5, {}, 'effects')
    }), jsx(VF, {
      isVisible: z,
      children: () => jsx(UA, {
        colorFormat: d,
        defaultColor: _$$rC,
        dispatch: y,
        dropdownShown: a,
        library: x,
        openFile: j,
        pickerShown: e,
        recordingKey: 'selectionPaintsPanel',
        sceneGraphSelection: t,
        stylePickerListLayout: g
      }, 'selection-paints')
    }), jsx(VF, {
      isVisible: i[ItemType.GRIDS_ITEM],
      children: () => jsx(_$$tC, {}, 'grids')
    }), jsx(VF, {
      isVisible: i[ItemType.SITES_ACCESSIBILITY_ITEM],
      children: () => jsx(jr, {
        recordingKey: 'accessibilityPanel'
      })
    }), jsx(VF, {
      isVisible: i[ItemType.SITES_RESPONSIVENESS_ITEM],
      children: () => jsx(j3, {}, 'responsiveness')
    }), jsx(VF, {
      isVisible: R,
      children: () => jsx(_$$B9, {}, 'local-variables')
    }), jsx(VF, {
      isVisible: _$$ww(i, t),
      children: () => jsx(_$$Q1, {
        scrollContainer: n,
        recordingKey: 'local-styles'
      }, 'local-styles')
    }), jsx(VF, {
      isVisible: !_$$NR(i),
      children: () => jsx(_$$Q11, {
        allSavedPlugins: f.plugins,
        dispatch: y,
        editorType: j?.editorType ? mapFileTypeToEditorType(j.editorType) : null,
        localPlugins: _,
        numSelected: numSelected ?? 0,
        openFileKey: j?.key || null,
        orgEntity: w,
        pluginRelaunchData,
        publishedPlugins: b,
        recordingKey: 'pluginPanel'
      }, 'plugin')
    }), jsx(VF, {
      isVisible: i[ItemType.EXPORT_ITEM],
      children: () => jsx(LI, {
        currentPage: S.currentPage,
        currentSelectedProperty: S.currentSelectedProperty,
        dispatch: y,
        dropdownShown: a,
        exportSettings,
        isSelectionRenamable: LI.isSelectionRenamable(Object.keys(t)),
        numSelected,
        openFile: j,
        panelWidth: _$$iP,
        pickerShown: e,
        recordingKey: 'exportsPanel',
        saveAsState: C,
        sceneGraphSelection: t,
        singleNodeName: k
      }, 'export')
    }), getFeatureFlags().jsx_debugging && jsx(_$$Ay8, {
      recordingKey: 'jsxDebugPanel'
    })]
  });
}
var kE = (e => (e.UPDATE = 'UPDATE', e.DELETE = 'DELETE', e))(kE || {});
function kN(e) {
  return t => kO({
    ...e,
    context: t
  });
}
function kR(e) {
  return () => kO({
    ...e,
    context: void 0
  });
}
function kA(e) {
  return t => kF({
    ...e,
    context: t
  });
}
function kL(e) {
  return () => kF({
    ...e,
    context: void 0
  });
}
let kP = !1;
function kO({
  behaviorType: e,
  editName: t,
  get: i,
  create: n = () => void 0,
  update: l = () => void 0,
  context: s
}) {
  let [r, o] = _$$lJ2(e);
  return [kF({
    behaviorType: e,
    get: i,
    context: s
  }), useCallback((i, a) => {
    _$$l.user(`sites-behavior-${e}-${t}-change`, () => {
      if (!r || void 0 === r || isInvalidValue(r)) {
        !function () {
          let e = n(i, s);
          e && o(e, a);
        }();
        return;
      }
      l(r, i, s) === 'DELETE' ? o(null, a) : o(r, a);
    });
  }, [e, t, l, s, n, o, r])];
}
function kF({
  behaviorType: e,
  get: t,
  context: i
}) {
  let n = _$$kl(e);
  return isInvalidValue(n) ? MIXED_MARKER : t(n && n || void 0, i);
}
let k$ = 'styles-module--previewRow--ma294 ui3_modal_rows--_row--x9xQX ui3_rows--_row--DnZFk ui3_rows--_grid--cP2Wu';
let kU = 'styles-module--previewBackground--kT8lJ';
let kK = 'styles-module--previewElement--v4kJB';
let kH = 'styles-module--behaviorSettingsPickerDetailsTitle--PMHRQ';
let kq = 'styles-module--behaviorPickerLabelInputRow--PMb2j ui3_modal_rows--_row--x9xQX ui3_rows--_row--DnZFk ui3_rows--_grid--cP2Wu';
let kX = 'styles-module--label--uNdBj';
let kV = 'styles-module--input--SQt-1 raw_components--flushLeft--YH-5P';
let kG = 'styles-module--button--PudAV';
let kW = 'styles-module--inputIcon--c9dnM';
let kY = 'styles-module--inputIconText--DRtTZ';
let kJ = 'styles-module--cursorInputLabel--p-Swq transform_panel--inactiveLabel--fPCxr raw_components--iconInsideBorderFocusWithin--2g7fO';
let kZ = 'styles-module--ellipsis--1VdNk';
let kQ = 'styles-module--iconButton--LvKaI';
function k0({
  labelId: e,
  label: t
}) {
  return jsx('div', {
    className: kq,
    children: jsx('div', {
      className: kX,
      children: jsx(_$$JU, {
        id: e,
        children: t
      })
    })
  });
}
function k1({
  input: e
}) {
  return jsx('div', {
    className: 'styles-module--behaviorPickerInputRow--uuzMK ui3_modal_rows--_row--x9xQX ui3_rows--_row--DnZFk ui3_rows--_grid--cP2Wu',
    children: jsx('div', {
      className: kV,
      children: e
    })
  });
}
function k5({
  labelId: e,
  label: t,
  input: i
}) {
  return jsxs('div', {
    className: kq,
    children: [jsx('div', {
      className: kX,
      children: jsx(_$$JU, {
        id: e,
        children: t
      })
    }), jsx('div', {
      className: kV,
      children: i
    })]
  });
}
function k2({
  label: e,
  labelId: t,
  input: i,
  onClick: n,
  recordingKey: a
}) {
  let {
    tooltipText,
    showTooltip
  } = QY(i);
  return jsxs('div', {
    className: 'styles-module--behaviorPickerLabelInputDrilldown--j7sVW ui3_modal_rows--_row--x9xQX ui3_rows--_row--DnZFk ui3_rows--_grid--cP2Wu',
    children: [jsx('div', {
      className: kX,
      children: jsx(_$$JU, {
        id: t,
        children: e
      })
    }), jsx(ButtonPrimitive, {
      'className': 'styles-module--buttonScrollTransformPanel--R2ONQ styles-module--secondary--Ayip9',
      'onClick': n,
      'recordingKey': a ?? void 0,
      'aria-label': getI18nString('sites.panel.interactions_panel.details_tooltip'),
      'htmlAttributes': {
        'data-tooltip': tooltipText ?? void 0,
        'data-tooltip-type': KindEnum.TEXT,
        'onMouseEnter': showTooltip
      },
      'children': jsxs('div', {
        className: 'styles-module--behaviorPickerLabelInputDrilldownButton--7nK-P',
        children: [jsx('div', {
          className: kV,
          children: i
        }), jsx('div', {
          className: kG,
          children: jsx(_$$R0, {})
        })]
      })
    })]
  });
}
function k4({
  label: e,
  labelId: t,
  input: i,
  button: n
}) {
  return jsxs('div', {
    className: 'styles-module--behaviorPickerLabelInputButtonRow--yQ1ut ui3_modal_rows--_row--x9xQX ui3_rows--_row--DnZFk ui3_rows--_grid--cP2Wu',
    children: [jsx('div', {
      className: kX,
      children: jsx(_$$JU, {
        id: t,
        children: e
      })
    }), jsx('div', {
      className: kV,
      children: i
    }), jsx('div', {
      className: kG,
      children: n
    })]
  });
}
function k3({
  label: e,
  leftInput: t,
  rightInput: i
}) {
  return jsxs('div', {
    className: 'styles-module--behaviorPickerLabelTwoInputsRow--r47ZL ui3_modal_rows--_row--x9xQX ui3_rows--_row--DnZFk ui3_rows--_grid--cP2Wu',
    children: [jsx('div', {
      className: kX,
      children: jsx(_$$JU, {
        children: e
      })
    }), jsx('div', {
      className: 'styles-module--leftInput---szFo',
      children: t
    }), jsx('div', {
      className: 'styles-module--rightInput--zxVNN',
      children: i
    })]
  });
}
function k8({
  children: e
}) {
  return jsx('div', {
    'data-testid': 'behaviorPicker',
    'className': 'styles-module--behaviorPickerSection--15q5R',
    'children': e
  });
}
function k6(e, t) {
  let i = KH();
  useEffect(() => {
    let n = Object.keys(i);
    for (let i of n) {
      let n = getSingletonSceneGraph().get(i);
      if (!(!n || isInvalidValue(t) || isInvalidValue(e)) && (n.behaviorStatePreviewEnabled = !0, e != null && (n.localOpacity = e), t != null)) {
        let e = function (e) {
          let t = _$$s13.fromFigMatrix(e.relativeTransform);
          let i = t.offset();
          let n = t.toScale();
          return new Point(i.x + n.x * e.size.x / 2, i.y + n.y * e.size.y / 2);
        }(n);
        n.overlayTransform = function (e, t, i) {
          let n = _$$s13.fromNumbers(1, 0, t, 0, 1, i);
          n.multiply(_$$s13.fromFigMatrix(e));
          let l = _$$s13.fromNumbers(1, 0, -t, 0, 1, -i);
          n.multiply(l);
          return n.toFigMatrix();
        }(t, e.x, e.y);
      }
    }
    let l = i => {
      let n = getSingletonSceneGraph().get(i);
      n && (n.behaviorStatePreviewEnabled = !1, e != null && n.removeLocalOpacity(), t != null && (n.overlayTransform = _$$s13.identity().toFigMatrix()));
    };
    return () => {
      n.map(l);
    };
  }, [i, t, e]);
}
function k7({
  onClick: e,
  recordingKey: t
}) {
  return jsx(ButtonPrimitive, {
    'className': 'styles-module--chevronButton--h6gDU',
    'onClick': e,
    'recordingKey': t,
    'aria-label': getI18nString('sites.panel.interactions_panel.details_tooltip'),
    'htmlAttributes': {
      'data-tooltip': getI18nString('sites.panel.interactions_panel.details_tooltip'),
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip-show-above': !0,
      'data-tooltip-show-below': !1
    },
    'children': jsx(_$$k0, {})
  });
}
function wl({
  delay: e,
  setDelay: t,
  recordingKey: i
}) {
  let n = EU();
  let a = useDispatch();
  return jsx(Fragment, {
    children: isValidValue(e) && e != null && t != null && jsx(k5, {
      label: renderI18nText('sites.panel.interactions_panel.transition_delay'),
      input: jsx(W4, {
        'data-tooltip': getI18nString('sites.panel.interactions_panel.transition_delay'),
        'data-tooltip-type': KindEnum.TEXT,
        'dispatch': a,
        'min': 0,
        'onValueChange': t,
        'recordingKey': generateRecordingKey(i, 'delayInput'),
        'scrubMultiplier': ws,
        'tooltipForScreenReadersOnly': !0,
        'value': e,
        'wheelMultiplier': n / 10
      })
    })
  });
}
function wa({
  easingType: e,
  easingFunction: t,
  transitionDuration: i,
  setTransitionDuration: n,
  recordingKey: a,
  setEasingFunction: r
}) {
  let o = EU();
  let d = useDispatch();
  let c = isValidValue(e) ? wr(e) : e;
  let p = wd(e);
  let x = e => {
    isValidValue(t) && r(PQ(e, _$$w_(t)));
  };
  return jsx(Fragment, {
    children: isValidValue(c) && isValidValue(t) && (!p || c === 'CUSTOM_SPRING') && jsx(k5, {
      label: renderI18nText('sites.panel.interactions_panel.transition_duration'),
      input: p ? jsx(_$$y11.Consumer, {
        children: ([e]) => jsx(W4, {
          'dispatch': d,
          'value': _$$xX(_$$w_(e)),
          'onValueChange': x,
          'wheelMultiplier': o / 10,
          'scrubMultiplier': ws,
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': getI18nString('proto.animation_panel.easing_duration_tooltip'),
          'tooltipForScreenReadersOnly': !0,
          'recordingKey': generateRecordingKey(a, 'springDurationInput')
        })
      }) : jsx(W4, {
        'dispatch': d,
        'value': i,
        'onValueChange': n,
        'wheelMultiplier': o / 10,
        'scrubMultiplier': ws,
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': getI18nString('proto.animation_panel.easing_duration_tooltip'),
        'tooltipForScreenReadersOnly': !0,
        'recordingKey': generateRecordingKey(a, 'durationInput')
      })
    })
  });
}
let ws = 0.004166666666666667;
function wr(e) {
  switch (e) {
    case 'IN_CUBIC':
      return 'EASE_IN';
    case 'OUT_CUBIC':
    default:
      return 'EASE_OUT';
    case 'INOUT_CUBIC':
      return 'EASE_IN_AND_OUT';
    case 'LINEAR':
      return 'LINEAR';
    case 'IN_BACK_CUBIC':
      return 'EASE_IN_BACK';
    case 'OUT_BACK_CUBIC':
      return 'EASE_OUT_BACK';
    case 'INOUT_BACK_CUBIC':
      return 'EASE_IN_AND_OUT_BACK';
    case 'CUSTOM_CUBIC':
      return 'CUSTOM_BEZIER';
    case 'GENTLE_SPRING':
      return 'GENTLE';
    case 'SPRING_PRESET_ONE':
      return 'QUICK';
    case 'SPRING_PRESET_TWO':
      return 'BOUNCY';
    case 'SPRING_PRESET_THREE':
      return 'SLOW';
    case 'CUSTOM_SPRING':
      return 'CUSTOM_SPRING';
  }
}
function wo(e) {
  switch (e) {
    case 'EASE_IN':
      return 'IN_CUBIC';
    case 'EASE_OUT':
    default:
      return 'OUT_CUBIC';
    case 'EASE_IN_AND_OUT':
      return 'INOUT_CUBIC';
    case 'LINEAR':
      return 'LINEAR';
    case 'EASE_IN_BACK':
      return 'IN_BACK_CUBIC';
    case 'EASE_OUT_BACK':
      return 'OUT_BACK_CUBIC';
    case 'EASE_IN_AND_OUT_BACK':
      return 'INOUT_BACK_CUBIC';
    case 'CUSTOM_BEZIER':
      return 'CUSTOM_CUBIC';
    case 'GENTLE':
      return 'GENTLE_SPRING';
    case 'QUICK':
      return 'SPRING_PRESET_ONE';
    case 'BOUNCY':
      return 'SPRING_PRESET_TWO';
    case 'SLOW':
      return 'SPRING_PRESET_THREE';
    case 'CUSTOM_SPRING':
      return 'CUSTOM_SPRING';
  }
}
function wd(e) {
  return !!e && isValidValue(e) && (e === 'GENTLE_SPRING' || e === 'SPRING' || e === 'SPRING_PRESET_ONE' || e === 'SPRING_PRESET_TWO' || e === 'SPRING_PRESET_THREE' || e === 'CUSTOM_SPRING');
}
function wu({
  easingType: e,
  setEasingType: t,
  transitionDuration: i,
  setTransitionDuration: n,
  easingFunction: a,
  setEasingFunction: r,
  delay: o,
  setDelay: d,
  recordingKey: c
}) {
  let p = useDispatch();
  let x = Um();
  let m = wl({
    delay: o,
    setDelay: d,
    recordingKey: c
  });
  let h = wa({
    easingType: e,
    easingFunction: a,
    transitionDuration: i,
    setTransitionDuration: n,
    setEasingFunction: r,
    recordingKey: c
  });
  let g = isValidValue(e) ? wr(e) : e;
  let f = isValidValue(g) && isValidValue(a) && (g === 'CUSTOM_BEZIER' || g === 'CUSTOM_SPRING');
  let _ = jsx(_$$Um, {
    className: _$$dR2,
    property: g,
    dispatch: p,
    dropdownShown: x,
    onChange: e => {
      t(wo(e));
    },
    recordingKey: generateRecordingKey(c, 'drilldownEasingType')
  });
  return jsx(k8, {
    children: jsxs(_$$O10, {
      easingFunction: isValidValue(a) ? a : null,
      children: [jsx(k5, {
        label: renderI18nText('sites.panel.interactions_panel.transition'),
        input: _
      }), h, m, f && jsx(_$$R1, {
        easingType: g,
        easingFunction: a,
        duration: i,
        updateSelectionProperties: e => {
          r(e.easingFunction);
        },
        recordingKey: generateRecordingKey(c, 'easingEditor')
      })]
    })
  });
}
function wm({
  value: e,
  onChange: t,
  ariaLabelledBy: i
}) {
  let n = function () {
    let e = _$$eY();
    return useMemo(() => new _$$cP(e), [e]);
  }();
  let o = useDispatch();
  let d = Um();
  let c = function () {
    let e = KH();
    let t = GW();
    return Fk((e, i) => {
      let n = _$$e15 && t === SelectionPanelType.RESPONSIVE_SET;
      if (!i) return [];
      let l = new Set();
      let a = new Set();
      Object.keys(i).forEach(t => {
        if (n) {
          let i = e.get(t);
          let n = i?.containingBreakpointFrame;
          if (!(n && createIdentityFunction(n).isPrimaryBreakpointFrame)) return;
        }
        a.add(t);
      });
      a.forEach(t => {
        let i = e.get(t);
        if (!i) return;
        let n = i.containingBreakpointFrame;
        n && n.childrenGuids.forEach(e => {
          a.has(e) || l.add(e);
        });
      });
      return Array.from(l);
    }, e);
  }();
  let u = !isInvalidValue(e) && isValidSessionLocalID(e) ? sessionLocalIDToString(e) : isInvalidValue(e) ? MIXED_MARKER : null;
  !u || isInvalidValue(u) || c.includes(u) || (u = null);
  let p = useCallback(e => {
    t(parseSessionLocalID(e) ?? defaultSessionLocalID);
  }, [t]);
  let x = e => {
    updateHoveredNode(e);
  };
  let m = () => {
    updateHoveredNode('');
  };
  return jsx(wh, {
    ariaLabelledBy: i,
    id: 'interaction-panel-layer-select',
    property: u,
    formatter: n,
    onChange: p,
    dispatch: o,
    dropdownShown: d,
    dropdownWidth: 140,
    icon: u && !isInvalidValue(u) ? jsx(Bf, {
      guid: u
    }) : null,
    children: c.map(e => jsx(wg, {
      value: e,
      onMouseEnter: () => x(e),
      onMouseLeave: m
    }, e))
  });
}
let wh = _$$l1;
let wg = _$$c$6;
function w_({
  value: e,
  onChange: t,
  recordingKey: i
}) {
  let n = isInvalidValue(e) ? 'MIXED' : e ? 'ON' : 'OFF';
  let s = useCallback(e => {
    t(e === 'ON');
  }, [t]);
  return jsxs(_$$bL, {
    value: n,
    onChange: s,
    legend: jsx(_$$q2, {
      children: getI18nString('sites.panel.interactions_panel.replay_label')
    }),
    recordingKey: i,
    children: [jsx(_$$c$2, {
      'icon': jsx(_$$O1, {}),
      'value': 'OFF',
      'aria-label': getI18nString('sites.panel.interactions_panel.replay_off_label')
    }), jsx(_$$c$2, {
      'icon': jsx(_$$r9, {}),
      'value': 'ON',
      'aria-label': getI18nString('sites.panel.interactions_panel.replay_on_label')
    })]
  });
}
function wy({
  scale: e,
  setScale: t,
  opacity: i,
  setOpacity: n,
  offsetX: a,
  setOffsetX: r,
  offsetY: o,
  setOffsetY: d,
  rotation: c,
  setRotation: p,
  recordingKey: x
}) {
  let m = useDispatch();
  let h = Xs();
  let g = e => e.stopPropagation();
  return jsxs(k8, {
    children: [jsx(k5, {
      label: renderI18nText('sites.panel.interactions_panel.opacity'),
      input: jsx(_$$Pd, {
        inputClassName: kV,
        value: i,
        onValueChange: n,
        dispatch: m,
        onMouseDown: g,
        ui3RightJustifyPercentSign: !1,
        recordingKey: generateRecordingKey(x, 'opacity'),
        children: jsx(_$$N1, {
          className: kW
        })
      })
    }), jsx(k5, {
      label: renderI18nText('sites.panel.interactions_panel.scale'),
      input: jsx(_$$j0, {
        'bigNudgeAmount': 0.1,
        'data-tooltip': getI18nString('sites.panel.interactions_panel.scale'),
        'data-tooltip-type': KindEnum.TEXT,
        'dispatch': m,
        'formatter': wv,
        'inputClassName': kV,
        'onMouseDown': g,
        'onValueChange': t,
        'postScrubMultiplier': 0.1,
        'recordingKey': generateRecordingKey(x, 'scale'),
        'scrubMultiplier': 1,
        'scrubStartValue': 0.1,
        'smallNudgeAmount': 0.01,
        'value': e,
        'children': jsx(_$$l3, {
          className: kW
        })
      })
    }), jsx(k3, {
      label: renderI18nText('sites.panel.interactions_panel.offset'),
      leftInput: jsx(_$$gq, {
        'inputClassName': kV,
        'value': a,
        'onValueChange': r,
        'dispatch': m,
        'onMouseDown': g,
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': getI18nString('sites.panel.interactions_panel.offset_x'),
        'recordingKey': generateRecordingKey(x, 'offsetX'),
        ...h,
        'children': jsx('span', {
          className: kY,
          children: renderI18nText('fullscreen.properties_panel.transform_panel.x')
        })
      }),
      rightInput: jsx(_$$gq, {
        'inputClassName': kV,
        'value': o,
        'onValueChange': d,
        'dispatch': m,
        'onMouseDown': g,
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': getI18nString('sites.panel.interactions_panel.offset_y'),
        'recordingKey': generateRecordingKey(x, 'offsetY'),
        ...h,
        'children': jsx('span', {
          className: kY,
          children: renderI18nText('fullscreen.properties_panel.transform_panel.y')
        })
      })
    }), jsx(k5, {
      label: renderI18nText('fullscreen.properties_panel.transform_panel.rotation'),
      input: jsx(Zp, {
        'inputClassName': kV,
        'value': c,
        'onValueChange': p,
        'dispatch': m,
        'onMouseDown': g,
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': getI18nString('fullscreen.properties_panel.transform_panel.rotation'),
        'recordingKey': generateRecordingKey(x, 'rotation'),
        ...h,
        'children': jsx(_$$a18, {
          className: kW
        })
      })
    })]
  });
}
let wv = new z7({
  min: 0.01,
  max: 1024,
  bigNudgeAmount: 0.1,
  smallNudgeAmount: 0.01
});
function wj({
  easingType: e,
  setEasingType: t,
  transitionDuration: i,
  setTransitionDuration: n,
  easingFunction: a,
  setEasingFunction: r,
  delay: o,
  setDelay: d,
  recordingKey: c,
  drilldownCallback: p
}) {
  let x = useDispatch();
  let m = Um();
  let h = wl({
    delay: o,
    setDelay: d,
    recordingKey: c
  });
  let g = wa({
    easingType: e,
    easingFunction: a,
    transitionDuration: i,
    setTransitionDuration: n,
    setEasingFunction: r,
    recordingKey: c
  });
  let f = isValidValue(e) ? wr(e) : e;
  let _ = isValidValue(f) && isValidValue(a) && (f === 'CUSTOM_BEZIER' || f === 'CUSTOM_SPRING');
  let b = jsx(_$$Um, {
    className: _$$dR2,
    property: f,
    dispatch: x,
    dropdownShown: m,
    onChange: e => {
      t(wo(e));
    },
    recordingKey: generateRecordingKey(c, 'easingType')
  });
  let y = renderI18nText('sites.panel.interactions_panel.transition');
  return jsx(k8, {
    children: jsxs(_$$O10, {
      easingFunction: isValidValue(a) ? a : null,
      children: [_ ? jsx(k4, {
        label: y,
        input: b,
        button: jsx(k7, {
          onClick: p,
          recordingKey: generateRecordingKey(c, 'drilldownButton')
        })
      }) : jsx(k5, {
        label: y,
        input: b
      }), g, h]
    })
  });
}
function wk({
  pushDetailsComponent: e,
  recordingKey: t
}) {
  let i = useDispatch();
  let n = Um();
  let [r, o] = wI();
  let [d, c] = wE();
  let [p, x] = wN();
  let m = useId();
  let h = useId();
  return jsxs(Fragment, {
    children: [jsxs(k8, {
      children: [jsx(k5, {
        labelId: m,
        label: renderI18nText('sites.panel.interactions_panel.trigger'),
        input: jsxs(wC, {
          ariaLabelledBy: m,
          id: 'animation-trigger-select',
          property: r,
          formatter: _$$vX,
          onChange: o,
          dispatch: i,
          dropdownShown: n,
          dropdownWidth: 140,
          recordingKey: generateRecordingKey(t, 'trigger'),
          children: [jsx(wT, {
            value: 'THIS_LAYER_IN_VIEW',
            recordingKey: generateRecordingKey(t, 'thisLayerInView')
          }), jsx(wT, {
            value: 'PAGE_LOAD',
            recordingKey: 'pageLoad'
          }), jsx(wT, {
            value: 'OTHER_LAYER_IN_VIEW',
            recordingKey: generateRecordingKey(t, 'otherLayerInView')
          })]
        })
      }), r === 'OTHER_LAYER_IN_VIEW' && jsx(k5, {
        labelId: h,
        label: renderI18nText('sites.panel.interactions_panel.layer_label'),
        input: jsx(wm, {
          ariaLabelledBy: h,
          value: d,
          onChange: c
        })
      })]
    }), jsx(k8, {
      children: !isInvalidValue(r) && jsxs(Fragment, {
        children: [jsx(ww, {
          stateName: 'enter',
          pushDetailsComponent: e,
          recordingKey: t
        }), (r === 'THIS_LAYER_IN_VIEW' || r === 'OTHER_LAYER_IN_VIEW') && jsx(ww, {
          stateName: 'exit',
          pushDetailsComponent: e,
          recordingKey: t
        })]
      })
    }), isValidValue(r) && r !== 'PAGE_LOAD' ? jsx(k8, {
      children: jsx(k5, {
        label: renderI18nText('sites.panel.interactions_panel.replay_label'),
        input: jsx(w_, {
          value: p,
          onChange: x,
          recordingKey: generateRecordingKey(t, 'replay')
        })
      })
    }) : null]
  });
}
function ww({
  stateName: e,
  pushDetailsComponent: t,
  recordingKey: i
}) {
  let n = useDispatch();
  let r = Um();
  let [o, d] = wP(e);
  let c = null;
  switch (e) {
    case 'enter':
      c = renderI18nText('sites.panel.interactions_panel.enter_preset');
      break;
    case 'exit':
      c = renderI18nText('sites.panel.interactions_panel.exit_preset');
  }
  let p = useCallback(() => {
    t(c, jsx(wS, {
      stateName: e,
      recordingKey: i,
      pushDetailsComponent: t,
      showExtendedTransitionPropertiesView: !1
    }));
  }, [c, t, e, i]);
  let x = useId();
  return jsx(k4, {
    labelId: x,
    label: c,
    input: jsxs(wR, {
      ariaLabelledBy: x,
      dispatch: n,
      dropdownShown: r,
      dropdownWidth: '140px',
      formatter: e === 'enter' ? wJ : wZ,
      id: `animation-preset-select-${e}`,
      neverConstrain: !0,
      onChange: d,
      property: o,
      recordingKey: 'presetDropdown',
      children: [o === 'CUSTOM' ? jsx(wA, {
        value: 'CUSTOM'
      }) : null, o === 'CUSTOM' ? jsx(_$$sK, {}) : null, jsx(wA, {
        value: 'FADE_IN',
        recordingKey: 'fadeIn'
      }), jsx(wA, {
        value: 'SCALE_IN',
        recordingKey: 'scaleIn'
      }), jsx(wA, {
        value: 'SCALE_IN_BOTTOM',
        recordingKey: 'scaleInBottom'
      }), jsx(wA, {
        value: 'SLIDE_IN_TOP',
        recordingKey: 'slideInTop'
      }), jsx(wA, {
        value: 'SLIDE_IN_BOTTOM',
        recordingKey: 'slideInBottom'
      }), jsx(wA, {
        value: 'SLIDE_IN_LEFT',
        recordingKey: 'slideInLeft'
      }), jsx(wA, {
        value: 'SLIDE_IN_RIGHT',
        recordingKey: 'slideInRight'
      }), jsx(_$$sK, {}), jsx(wA, {
        value: 'NONE'
      })]
    }),
    button: jsx(k7, {
      onClick: p,
      recordingKey: generateRecordingKey(i, e, 'drilldownButton')
    })
  });
}
function wS({
  stateName: e,
  recordingKey: t,
  pushDetailsComponent: i,
  showExtendedTransitionPropertiesView: n
}) {
  let [s, r] = wM(e);
  let [o, d] = wO(e);
  let [c, p] = wD(e);
  let [x, m] = wz(e);
  let [h, g] = wB(e);
  let [f, _] = w$(e);
  let [b, y] = wU(e);
  let [v, j] = wK(e);
  let [k, w] = wH(e);
  k6(o, wF(e));
  let S = n ? wu : wj;
  let C = useCallback(() => {
    n || n || i(renderI18nText('sites.panel.interactions_panel.transition'), jsx(wS, {
      stateName: e,
      recordingKey: t,
      pushDetailsComponent: _$$lQ,
      showExtendedTransitionPropertiesView: !0
    }));
  }, [n, i, e, t]);
  let T = !n;
  return jsxs(Fragment, {
    children: [T && jsx(wy, {
      offsetX: c,
      offsetY: x,
      opacity: o,
      recordingKey: generateRecordingKey(t, e),
      rotation: h,
      scale: s,
      setOffsetX: p,
      setOffsetY: m,
      setOpacity: d,
      setRotation: g,
      setScale: r
    }), jsx(S, {
      delay: k,
      drilldownCallback: C,
      easingFunction: v,
      easingType: f,
      recordingKey: generateRecordingKey(t, e),
      setDelay: w,
      setEasingFunction: j,
      setEasingType: _,
      setTransitionDuration: y,
      transitionDuration: b
    })]
  });
}
let wC = _$$l1;
let wT = _$$c$6;
let wI = kR({
  behaviorType: Xc.Appear,
  editName: 'appearTrigger',
  get: e => e?.trigger === 'PAGE_LOAD' ? 'PAGE_LOAD' : e?.trigger === 'THIS_LAYER_IN_VIEW' ? 'THIS_LAYER_IN_VIEW' : e?.trigger === 'OTHER_LAYER_IN_VIEW' ? 'OTHER_LAYER_IN_VIEW' : e?.trigger === 'SCROLL_DIRECTION' ? 'SCROLL_DIRECTION' : 'THIS_LAYER_IN_VIEW',
  update: (e, t) => {
    e && (e.trigger = t);
  }
});
let wE = kR({
  behaviorType: Xc.Appear,
  editName: 'appearOtherLayerGUID',
  get: e => e?.otherLayer,
  update: (e, t) => {
    e.otherLayer = t;
  }
});
let wN = kR({
  behaviorType: Xc.Appear,
  editName: 'appearReplay',
  get: e => !e?.playsOnce,
  update: (e, t) => {
    e.playsOnce = !t;
  }
});
let wR = _$$l1;
let wA = _$$c$6;
function wL(e, t) {
  return e?.easingType === t?.easingType && (e?.easingFunction?.length ?? 0) === (t?.easingFunction?.length ?? 0) && (e?.easingFunction ?? []).every((e, i) => _$$o0(e ?? 0, t?.easingFunction?.[i] ?? 0)) && _$$o0(e?.transitionDuration ?? 0, t?.transitionDuration ?? 0) && _$$o0(e?.delay ?? 0, t?.delay ?? 0);
}
let wP = kN({
  behaviorType: Xc.Appear,
  editName: 'preset',
  get: (e, t) => {
    if (!e) return 'CUSTOM';
    let i = wq(e, t);
    let n = wV(e, t);
    if (wL(_$$gq2, n)) {
      for (let [e, t] of Object.entries(Eu)) {
        if (function (e, t) {
          return _$$o0(e?.opacity ?? 1, t?.opacity ?? 1) && _$$o0(e?.transform?.m00 ?? 1, t?.transform?.m00 ?? 1) && _$$o0(e?.transform?.m01 ?? 0, t?.transform?.m01 ?? 0) && _$$o0(e?.transform?.m02 ?? 0, t?.transform?.m02 ?? 0) && _$$o0(e?.transform?.m10 ?? 0, t?.transform?.m10 ?? 0) && _$$o0(e?.transform?.m11 ?? 1, t?.transform?.m11 ?? 1) && _$$o0(e?.transform?.m12 ?? 0, t?.transform?.m12 ?? 0);
        }(t, i) && wL(_$$gq2, n)) {
          return e;
        }
      }
    }
    return 'CUSTOM';
  },
  update: (e, t, i) => {
    t !== 'CUSTOM' && (e[wW(i)] = Eu[t], e[wY(i)] = _$$gq2);
  }
});
let wO = kN({
  behaviorType: Xc.Appear,
  editName: 'trigger',
  get: (e, t) => wq(e, t).opacity ?? 1,
  update: (e, t, i) => {
    wq(e, i).opacity = t;
  }
});
let wF = kA({
  behaviorType: Xc.Appear,
  get: (e, t) => wq(e, t).transform
});
let wM = kN({
  behaviorType: Xc.Appear,
  editName: 'scale',
  get: (e, t) => wX(e, t).toScale().x,
  update: (e, t, i) => {
    wG(e, i, e => {
      let i = _$$s13.identity();
      let n = e.offset();
      i.translate(n.x, n.y);
      i.scale(t, t);
      i.rotate(e.toRadians());
      return i;
    });
  }
});
let wD = kN({
  behaviorType: Xc.Appear,
  editName: 'offsetX',
  get: (e, t) => wX(e, t).offset().x,
  update: (e, t, i) => {
    wG(e, i, e => {
      let i = _$$s13.identity();
      let n = e.offset();
      i.translate(t, n.y);
      let l = e.toScale();
      i.scale(l.x, l.y);
      i.rotate(e.toRadians());
      return i;
    });
  }
});
let wz = kN({
  behaviorType: Xc.Appear,
  editName: 'offsetY',
  get: (e, t) => wX(e, t).offset().y,
  update: (e, t, i) => {
    wG(e, i, e => {
      let i = _$$s13.identity();
      let n = e.offset();
      i.translate(n.x, t);
      let l = e.toScale();
      i.scale(l.x, l.y);
      i.rotate(e.toRadians());
      return i;
    });
  }
});
let wB = kN({
  behaviorType: Xc.Appear,
  editName: 'rotation',
  get: (e, t) => wX(e, t).toDegrees(),
  update: (e, t, i) => {
    wG(e, i, e => {
      let i = _$$s13.identity();
      let n = e.offset();
      i.translate(n.x, n.y);
      let l = e.toScale();
      i.scale(l.x, l.y);
      i.rotate(Math.PI / 180 * t);
      return i;
    });
  }
});
let w$ = kN({
  behaviorType: Xc.Appear,
  editName: 'easingType',
  get: (e, t) => wV(e, t).easingType ?? 'OUT_CUBIC',
  update: (e, t, i) => {
    let n = wV(e, i);
    let l = wd(n.easingType);
    n.easingType = t;
    t === 'CUSTOM_CUBIC' && l ? n.easingFunction = _$$oM.OUT_CUBIC : t !== 'CUSTOM_SPRING' || l ? t !== 'CUSTOM_CUBIC' && t !== 'CUSTOM_SPRING' && t !== 'SPRING' && (n.easingFunction = _$$oM[t]) : n.easingFunction = _$$oM.GENTLE_SPRING;
  }
});
let wU = kN({
  behaviorType: Xc.Appear,
  editName: 'transitionDuration',
  get: (e, t) => wV(e, t).transitionDuration ?? 0.3,
  update: (e, t, i) => {
    wV(e, i).transitionDuration = t;
  }
});
let wK = kN({
  behaviorType: Xc.Appear,
  editName: 'easingFunction',
  get: (e, t) => {
    let i = wV(e, t);
    let n = i.easingFunction?.length === 4;
    return i.easingType === 'CUSTOM_SPRING' ? n ? i.easingFunction : _$$oM.GENTLE_SPRING : i.easingType === 'CUSTOM_CUBIC' ? n ? i.easingFunction : _$$oM.OUT_CUBIC : [];
  },
  update: (e, t, i) => {
    wV(e, i).easingFunction = t;
  }
});
let wH = kN({
  behaviorType: Xc.Appear,
  editName: 'delay',
  get: (e, t) => wV(e, t).delay ?? 0,
  update: (e, t, i) => {
    wV(e, i).delay = t;
  }
});
function wq(e, t) {
  return e?.[wW(t)] ?? {};
}
function wX(e, t) {
  let i = wq(e, t).transform;
  return i ? _$$s13.fromFigMatrix(i) : _$$s13.identity();
}
function wV(e, t) {
  return e?.[wY(t)] ?? {};
}
function wG(e, t, i) {
  let n = wW(t);
  let l = e[n] ?? {};
  e[n] = l;
  let a = i(l.transform ? _$$s13.fromFigMatrix(l.transform) : _$$s13.identity());
  l.transform = a.toFigMatrix();
}
function wW(e) {
  return `${e}State`;
}
function wY(e) {
  return `${e}Transition`;
}
let wJ = {
  format(e) {
    switch (e) {
      case 'FADE_IN':
        return getI18nString('sites.panel.interactions_panel.fade_in');
      case 'SCALE_IN':
        return getI18nString('sites.panel.interactions_panel.scale_in');
      case 'SCALE_IN_BOTTOM':
        return getI18nString('sites.panel.interactions_panel.scale_in_bottom');
      case 'SLIDE_IN_TOP':
        return getI18nString('sites.panel.interactions_panel.slide_in_top');
      case 'SLIDE_IN_BOTTOM':
        return getI18nString('sites.panel.interactions_panel.slide_in_bottom');
      case 'SLIDE_IN_LEFT':
        return getI18nString('sites.panel.interactions_panel.slide_in_left');
      case 'SLIDE_IN_RIGHT':
        return getI18nString('sites.panel.interactions_panel.slide_in_right');
      case 'NONE':
        return getI18nString('sites.panel.interactions_panel.none');
      case 'CUSTOM':
        return getI18nString('sites.panel.interactions_panel.custom');
    }
  }
};
let wZ = {
  format(e) {
    switch (e) {
      case 'FADE_IN':
        return getI18nString('sites.panel.interactions_panel.fade_out');
      case 'SCALE_IN':
        return getI18nString('sites.panel.interactions_panel.scale_out');
      case 'SCALE_IN_BOTTOM':
        return getI18nString('sites.panel.interactions_panel.scale_out_bottom');
      case 'SLIDE_IN_TOP':
        return getI18nString('sites.panel.interactions_panel.slide_out_top');
      case 'SLIDE_IN_BOTTOM':
        return getI18nString('sites.panel.interactions_panel.slide_out_bottom');
      case 'SLIDE_IN_LEFT':
        return getI18nString('sites.panel.interactions_panel.slide_out_left');
      case 'SLIDE_IN_RIGHT':
        return getI18nString('sites.panel.interactions_panel.slide_out_right');
      case 'NONE':
        return getI18nString('sites.panel.interactions_panel.none');
      case 'CUSTOM':
        return getI18nString('sites.panel.interactions_panel.custom');
    }
  }
};
let w1 = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M12.354 5.146a.5.5 0 0 0-.707 0l-2.5 2.5a.5.5 0 1 0 .707.708L11.5 6.707V10.5a.5.5 0 0 0 1 0V6.707l1.646 1.647a.5.5 0 1 0 .708-.708zm5.434 12.267a6.003 6.003 0 0 0-11.576 0c-.083.303.158.587.472.587a.55.55 0 0 0 .516-.404 5.002 5.002 0 0 1 9.6 0 .55.55 0 0 0 .516.404c.314 0 .555-.284.472-.587M17.35 14.5a.493.493 0 0 0 .691.073l.78-.654a.5.5 0 0 0-.643-.766l-.78.654a.49.49 0 0 0-.048.693m-2.402-1.845a.49.49 0 0 0 .656-.227l.43-.92a.5.5 0 1 0-.907-.423l-.43.92a.494.494 0 0 0 .25.65m-8.991 1.918a.493.493 0 0 0 .691-.073.49.49 0 0 0-.048-.693l-.78-.654a.5.5 0 0 0-.642.766zm2.437-2.145a.49.49 0 0 0 .656.227.494.494 0 0 0 .25-.65l-.429-.92a.5.5 0 1 0-.906.423z',
      clipRule: 'evenodd'
    })
  });
});
let w2 = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M7 6a1 1 0 0 0-1 1v2a.5.5 0 0 0 1 0V7h2a.5.5 0 0 0 0-1zM6 17a1 1 0 0 0 1 1h2a.5.5 0 0 0 0-1H7v-2a.5.5 0 0 0-1 0zM17 6a1 1 0 0 1 1 1v2a.5.5 0 0 1-1 0V7h-2a.5.5 0 0 1 0-1zm0 12a1 1 0 0 0 1-1v-2a.5.5 0 0 0-1 0v2h-2a.5.5 0 0 0 0 1zm-3-6a2 2 0 1 1-4 0 2 2 0 0 1 4 0m1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0',
      clipRule: 'evenodd'
    })
  });
});
let w3 = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M8.5 9.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M12 5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9M9 15a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zm3 1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5m4-1a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0z',
      clipRule: 'evenodd'
    })
  });
});
let w8 = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M15.146 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L16 9.293V6.5a.5.5 0 0 0-1 0v2.793l-1.146-1.147a.5.5 0 0 0-.708.708zm-4.292 4.292-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 .708.708L8 14.707V17.5a.5.5 0 0 0 1 0v-2.793l1.146 1.147a.5.5 0 0 0 .708-.708M16 13.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0m-6-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m1 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0',
      clipRule: 'evenodd'
    })
  });
});
let w6 = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M6.293 6.293a1 1 0 0 1 1.013-.245l10.699 3.436a1 1 0 0 1 .664 1.196 11.01 11.01 0 0 1-7.99 7.989 1 1 0 0 1-1.195-.664l-3.436-10.7a1 1 0 0 1 .245-1.012m9.494 3.53a8 8 0 0 1-5.965 5.965l.615 1.911a10.01 10.01 0 0 0 7.262-7.263zM9.682 15.35l-.165-.517a7 7 0 0 0 5.316-5.316l.596.19L7 7zM11 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2M8 9a1 1 0 0 1 .272 1.961l-.61-1.901A1 1 0 0 1 8 9m4.996-.074Q13 8.962 13 9a1 1 0 1 1-1.768-.64z'
    })
  });
});
let w7 = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M11.5 7a.5.5 0 0 1 0 1H7v2h5.5a.5.5 0 0 1 0 1H8v2h5.5a.5.5 0 0 1 0 1H9v2h5.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5V14h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5v-3l.01-.1A.5.5 0 0 1 6.5 7zm6 9a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm-1-3a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm-1-3a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm-1-3a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1z'
    })
  });
});
let Se = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M16.5 6A1.5 1.5 0 0 1 18 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 16.5v-9A1.5 1.5 0 0 1 7.5 6zM7 16.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V16H7zm0-4.207 1.146-1.146.079-.065a.5.5 0 0 1 .629.064L12.707 15H17V9H7zm0 1.414V15h4.293L8.5 12.207zM14.5 10a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-7-4a.5.5 0 0 0-.5.5V8h10v-.5a.5.5 0 0 0-.5-.5z'
    })
  });
});
let St = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M9.94 17.744c.093-.035.2-.04.294-.01q.118.037.239.069a5.97 5.97 0 0 0 3.292-.069.46.46 0 0 1 .294.011c.395.148.513.777.113.908a6.96 6.96 0 0 1-4.344.002c-.401-.13-.283-.762.112-.91m2.214-12.74A3 3 0 0 1 15 8l-.006.187c-.027.432-.146.84-.337 1.204l-.063.136c-.058.14-.094.287-.094.438l.009.136c.041.311.226.59.503.75.174.102.376.144.578.152a3 3 0 0 1 2.473 4.497l-.08.132a3 3 0 0 1-3.883 1.04l-.136-.074a3 3 0 0 1-.934-.846l-.098-.147a1.4 1.4 0 0 0-.295-.337l-.124-.085a1.02 1.02 0 0 0-1.026 0l-.123.085c-.117.093-.213.21-.294.337l-.098.147c-.24.335-.555.627-.936.847l-.136.074a3 3 0 0 1-3.88-1.041l-.082-.132a3 3 0 0 1 .966-4.017l.132-.08c.38-.22.79-.347 1.2-.387l.176-.013c.151-.006.302-.031.441-.086l.135-.065c.277-.16.462-.44.503-.751l.009-.135c0-.151-.036-.3-.093-.439l-.064-.136a3 3 0 0 1-.337-1.204L9 8a3 3 0 0 1 3-3zM12 6a2 2 0 0 0-1.773 2.926l.104.219c.097.234.169.512.169.82 0 .678-.339 1.307-.897 1.681l-.115.072c-.267.154-.544.23-.795.263l-.24.022a2 2 0 0 0-.807.206l-.11.06A2 2 0 0 0 6.805 15l.11.172a2 2 0 0 0 2.621.56l.106-.065c.241-.16.436-.364.583-.596l.137-.198c.154-.2.358-.401.624-.556l.12-.064a2.03 2.03 0 0 1 1.908.063l.128.082c.287.196.492.447.635.674l.137.19c.149.184.332.344.55.47l.182.093a2 2 0 0 0 2.55-.825l.094-.183a2 2 0 0 0-.654-2.438l-.172-.111a2 2 0 0 0-.914-.265 2.3 2.3 0 0 1-.905-.215l-.133-.07A2.03 2.03 0 0 1 13.5 9.965c0-.412.13-.767.272-1.04l.097-.214a2 2 0 0 0-1.664-2.7zm-3.964 7.134a1 1 0 1 1 1 1.733 1 1 0 0 1-1-1.733m6.563.366a1 1 0 1 1 1.731 1 1 1 0 0 1-1.731-1m-2.6-2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M7.324 6.792c.314-.28.8.135.73.55a.46.46 0 0 1-.137.26 5.97 5.97 0 0 0-1.765 3.061.46.46 0 0 1-.156.248c-.326.268-.932.055-.845-.357q.036-.168.08-.336a6.96 6.96 0 0 1 2.093-3.426m8.621.55c-.069-.416.418-.834.733-.551a7.03 7.03 0 0 1 2.172 3.762c.087.413-.518.626-.844.358a.46.46 0 0 1-.157-.25 6 6 0 0 0-1.766-3.057.47.47 0 0 1-.138-.261M12 7a1 1 0 1 1-.001 2 1 1 0 0 1 0-2'
    })
  });
});
let Si = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M9.58 7.006c.182.03.335.157.395.336l3 9 .021.098a.5.5 0 0 1-.928.31l-.042-.092L11.14 14H6.86l-.885 2.658a.5.5 0 0 1-.95-.316l3.002-9 .03-.073A.5.5 0 0 1 8.5 7h1zM18.5 16a.5.5 0 0 1 0 1h-4a.5.5 0 1 1 0-1zM7.195 13h3.612L9.14 8h-.28z'
    })
  });
});
let Sn = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M15.5 12.5a.5.5 0 0 1 .49.4l.01.1v1.634l1.415-.817a.5.5 0 0 1 .582.807l-.082.059-1.416.816 1.416.818a.5.5 0 0 1-.408.908l-.092-.041L16 16.366V18l-.01.1a.5.5 0 0 1-.979 0l-.01-.1v-1.635l-1.416.818-.092.042a.5.5 0 0 1-.49-.848l.082-.06L14.5 15.5l-1.414-.816-.082-.06a.5.5 0 0 1 .49-.848l.092.041 1.415.817V13a.5.5 0 0 1 .5-.5m-6 .5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 0 1H10v1h.5a.5.5 0 0 1 0 1H10v.5a.5.5 0 0 1-1 0V17H8v.5a.5.5 0 0 1-1 0V17h-.5a.5.5 0 0 1 0-1H7v-1h-.5a.5.5 0 0 1 0-1H7v-.5a.5.5 0 0 1 1 0v.5h1v-.5a.5.5 0 0 1 .5-.5M8 16h1v-1H8zm.5-10.5A.5.5 0 0 1 9 6h1.5a.5.5 0 0 1 0 1H9v1h.5a1.5 1.5 0 0 1 0 3H9l-.01.1a.5.5 0 0 1-.98 0L8 11H6.5a.5.5 0 0 1 0-1H8V9h-.5a1.5 1.5 0 0 1 0-3H8a.5.5 0 0 1 .5-.5m8.724.582a.501.501 0 0 1 .693.693l-.064.079-4 4a.5.5 0 0 1-.707-.707l4-4zM16.999 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-8 1h.5a.5.5 0 0 0 0-1H9zM7.5 7a.5.5 0 0 0 0 1H8V7zM14 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2'
    })
  });
});
let Sa = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M15 8a1 1 0 0 1 1 1v3.287l2.136.802.11.047c1.104.52.971 2.182-.255 2.489l-1.894.473-.472 1.894c-.307 1.226-1.97 1.359-2.49.255l-.046-.11L12.288 16H9l-.103-.005A1 1 0 0 1 8 15V9a1 1 0 0 1 .897-.995L9 8zm-8.5 6a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 1 0 1h-2A1.5 1.5 0 0 1 6 16.5v-2a.5.5 0 0 1 .5-.5m5.949-1.976a.33.33 0 0 0-.425.425L12.98 15H13v.05l1.025 2.735a.33.33 0 0 0 .61.02l.02-.056.618-2.476 2.255-.564.22-.055a.33.33 0 0 0 .09-.603l-.053-.026L15.05 13H15v-.02zM8.999 15h2.914l-.825-2.2c-.388-1.035.58-2.047 1.612-1.745l.1.033 2.2.824V9H9zm.5-9a.5.5 0 0 1 0 1h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 7.5 6zm7 0A1.5 1.5 0 0 1 18 7.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 1 1 0-1z'
    })
  });
});
function Ss({
  behaviorType: e,
  codeBehaviorIcon: t,
  disabled: i
}) {
  let n = null;
  switch (e) {
    case Xc.Appear:
      n = w1;
      break;
    case Xc.Hover:
      n = _$$R10;
      break;
    case Xc.Focus:
      n = w2;
      break;
    case Xc.Press:
      n = _$$i8;
      break;
    case Xc.ScrollParallax:
      n = w3;
      break;
    case Xc.ScrollTransform:
      n = w8;
      break;
    case Xc.Cursor:
      n = w6;
      break;
    case Xc.Marquee:
      n = w7;
      break;
    case Xc.Code:
      n = t ? function (e) {
        switch (e) {
          case 'lightbox':
            return Se;
          case 'spin':
            return St;
          case 'typewriter':
            return Si;
          case 'scramble':
            return Sn;
          case 'drag':
            return _$$P6;
          case 'mouseParallax':
            return Sa;
          default:
            return _$$t1;
        }
      }(t) : _$$t1;
      break;
    default:
      return null;
  }
  return jsx('div', {
    style: {
      opacity: i ? 0.5 : 1
    },
    children: jsx(n, {})
  });
}
function Sr({
  behaviorType: e,
  text: t
}) {
  switch (e) {
    case Xc.Appear:
      return renderI18nText('sites.panel.interactions_panel.appear_behavior');
    case Xc.Hover:
      return renderI18nText('sites.panel.interactions_panel.hover_behavior');
    case Xc.Focus:
      return renderI18nText('sites.panel.interactions_panel.focus_behavior');
    case Xc.Press:
      return renderI18nText('sites.panel.interactions_panel.press_behavior');
    case Xc.ScrollParallax:
      return renderI18nText('sites.panel.interactions_panel.scroll_parallax_behavior');
    case Xc.ScrollTransform:
      return renderI18nText('sites.panel.interactions_panel.scroll_transform_behavior');
    case Xc.Cursor:
      return renderI18nText('sites.panel.interactions_panel.cursor_behavior');
    case Xc.Marquee:
      return renderI18nText('sites.panel.interactions_panel.marquee_behavior');
    case Xc.Code:
      return t ? jsx(Fragment, {
        children: t
      }) : renderI18nText('sites.panel.interactions_panel.code_behavior');
    default:
      if (isInvalidValue(e)) return renderI18nText('fullscreen.properties_panel.presets');
      return throwTypeError(e);
  }
}
let Sm = !1;
function Sh(e, t) {
  void 0 === n && (n = {
    'sites.code_behaviors.mouse_parallax.name': getI18nString('sites.code_behaviors.mouse_parallax.name'),
    'sites.code_behaviors.mouse_parallax.offset': getI18nString('sites.code_behaviors.mouse_parallax.offset'),
    'sites.code_behaviors.mouse_parallax.smoothing': getI18nString('sites.code_behaviors.mouse_parallax.smoothing'),
    'sites.code_behaviors.mouse_parallax.inverse': getI18nString('sites.code_behaviors.mouse_parallax.inverse'),
    'sites.code_behaviors.typewriter.text_cursor': getI18nString('sites.code_behaviors.typewriter.text_cursor'),
    'sites.code_behaviors.typewriter.name': getI18nString('sites.code_behaviors.typewriter.name'),
    'sites.code_behaviors.typewriter.speed': getI18nString('sites.code_behaviors.typewriter.speed'),
    'sites.code_behaviors.typewriter.speed.quick': getI18nString('sites.code_behaviors.typewriter.speed.quick'),
    'sites.code_behaviors.typewriter.speed.moderate': getI18nString('sites.code_behaviors.typewriter.speed.moderate'),
    'sites.code_behaviors.typewriter.speed.slow': getI18nString('sites.code_behaviors.typewriter.speed.slow'),
    'sites.code_behaviors.typewriter.loop': getI18nString('sites.code_behaviors.typewriter.loop'),
    'sites.code_behaviors.draggable.name': getI18nString('sites.code_behaviors.draggable.name'),
    'sites.code_behaviors.draggable.bounds': getI18nString('sites.code_behaviors.draggable.bounds'),
    'sites.code_behaviors.draggable.bounds.anywhere': getI18nString('sites.code_behaviors.draggable.bounds.anywhere'),
    'sites.code_behaviors.draggable.bounds.parent': getI18nString('sites.code_behaviors.draggable.bounds.parent'),
    'sites.code_behaviors.draggable.cursor': getI18nString('sites.code_behaviors.draggable.cursor'),
    'sites.code_behaviors.draggable.cursor.auto': getI18nString('sites.code_behaviors.draggable.cursor.auto'),
    'sites.code_behaviors.draggable.cursor.move': getI18nString('sites.code_behaviors.draggable.cursor.move'),
    'sites.code_behaviors.draggable.cursor.grab': getI18nString('sites.code_behaviors.draggable.cursor.grab'),
    'sites.code_behaviors.draggable.momentum': getI18nString('sites.code_behaviors.draggable.momentum'),
    'sites.code_behaviors.lightbox.name': getI18nString('sites.code_behaviors.lightbox.name'),
    'sites.code_behaviors.lightbox.background': getI18nString('sites.code_behaviors.lightbox.background'),
    'sites.code_behaviors.lightbox.background.none': getI18nString('sites.code_behaviors.lightbox.background.none'),
    'sites.code_behaviors.lightbox.background.dark': getI18nString('sites.code_behaviors.lightbox.background.dark'),
    'sites.code_behaviors.lightbox.background.light': getI18nString('sites.code_behaviors.lightbox.background.light'),
    'sites.code_behaviors.lightbox.background.blur': getI18nString('sites.code_behaviors.lightbox.background.blur'),
    'sites.code_behaviors.lightbox.close': getI18nString('sites.code_behaviors.lightbox.close'),
    'sites.code_behaviors.lightbox.close.any_click': getI18nString('sites.code_behaviors.lightbox.close.any_click'),
    'sites.code_behaviors.lightbox.close.click_outside': getI18nString('sites.code_behaviors.lightbox.close.click_outside'),
    'sites.code_behaviors.lightbox.close_icon': getI18nString('sites.code_behaviors.lightbox.close_icon'),
    'sites.code_behaviors.lightbox.image': getI18nString('sites.code_behaviors.lightbox.image'),
    'sites.code_behaviors.lightbox.transition': getI18nString('sites.code_behaviors.lightbox.transition'),
    'sites.code_behaviors.lightbox.transition.instant': getI18nString('sites.code_behaviors.lightbox.transition.instant'),
    'sites.code_behaviors.lightbox.transition.dissolve': getI18nString('sites.code_behaviors.lightbox.transition.dissolve'),
    'sites.code_behaviors.lightbox.transition.move_in': getI18nString('sites.code_behaviors.lightbox.transition.move_in'),
    'sites.code_behaviors.text_cycle.name': getI18nString('sites.code_behaviors.text_cycle.name'),
    'sites.code_behaviors.text_cycle.trigger': getI18nString('sites.code_behaviors.text_cycle.trigger'),
    'sites.code_behaviors.text_cycle.trigger.on_view': getI18nString('sites.code_behaviors.text_cycle.trigger.on_view'),
    'sites.code_behaviors.text_cycle.trigger.on_click': getI18nString('sites.code_behaviors.text_cycle.trigger.on_click'),
    'sites.code_behaviors.text_cycle.randomize': getI18nString('sites.code_behaviors.text_cycle.randomize'),
    'sites.code_behaviors.text_cycle.text': getI18nString('sites.code_behaviors.text_cycle.text'),
    'sites.code_behaviors.text_scramble.name': getI18nString('sites.code_behaviors.text_scramble.name'),
    'sites.code_behaviors.text_scramble.reveal': getI18nString('sites.code_behaviors.text_scramble.reveal'),
    'sites.code_behaviors.text_scramble.reveal.by_char': getI18nString('sites.code_behaviors.text_scramble.reveal.by_char'),
    'sites.code_behaviors.text_scramble.reveal.by_word': getI18nString('sites.code_behaviors.text_scramble.reveal.by_word'),
    'sites.code_behaviors.text_scramble.speed': getI18nString('sites.code_behaviors.text_scramble.speed'),
    'sites.code_behaviors.text_scramble.speed.quick': getI18nString('sites.code_behaviors.text_scramble.speed.quick'),
    'sites.code_behaviors.text_scramble.speed.moderate': getI18nString('sites.code_behaviors.text_scramble.speed.moderate'),
    'sites.code_behaviors.text_scramble.speed.slow': getI18nString('sites.code_behaviors.text_scramble.speed.slow'),
    'sites.code_behaviors.text_scramble.symbols': getI18nString('sites.code_behaviors.text_scramble.symbols'),
    'sites.code_behaviors.text_scramble.loop': getI18nString('sites.code_behaviors.text_scramble.loop'),
    'sites.code_behaviors.spin.name': getI18nString('sites.code_behaviors.spin.name'),
    'sites.code_behaviors.spin.trigger': getI18nString('sites.code_behaviors.spin.trigger'),
    'sites.code_behaviors.spin.trigger.on_view': getI18nString('sites.code_behaviors.spin.trigger.on_view'),
    'sites.code_behaviors.spin.trigger.on_click': getI18nString('sites.code_behaviors.spin.trigger.on_click'),
    'sites.code_behaviors.spin.trigger.while_hovering': getI18nString('sites.code_behaviors.spin.trigger.while_hovering'),
    'sites.code_behaviors.spin.trigger.while_scrolling': getI18nString('sites.code_behaviors.spin.trigger.while_scrolling'),
    'sites.code_behaviors.spin.direction': getI18nString('sites.code_behaviors.spin.direction'),
    'sites.code_behaviors.spin.direction.clockwise': getI18nString('sites.code_behaviors.spin.direction.clockwise'),
    'sites.code_behaviors.spin.direction.counterclockwise': getI18nString('sites.code_behaviors.spin.direction.counterclockwise'),
    'sites.code_behaviors.spin.speed': getI18nString('sites.code_behaviors.spin.speed'),
    'sites.code_behaviors.spin.speed.very_quick': getI18nString('sites.code_behaviors.spin.speed.very_quick'),
    'sites.code_behaviors.spin.speed.quick': getI18nString('sites.code_behaviors.spin.speed.quick'),
    'sites.code_behaviors.spin.speed.moderate': getI18nString('sites.code_behaviors.spin.speed.moderate'),
    'sites.code_behaviors.spin.speed.slow': getI18nString('sites.code_behaviors.spin.speed.slow'),
    'sites.code_behaviors.spin.speed.very_slow': getI18nString('sites.code_behaviors.spin.speed.very_slow')
  });
  let i = n;
  if (!i[e]) {
    let i = e.includes('sites.code_behaviors');
    i && !Sm && (reportError(_$$e2.PROTOTYPING, new Error(`Localized code behavior string not found: ${e}`)), Sm = !0);
    return i ? t ?? e : e;
  }
  return i[e];
}
let Sg = createRemovableAtomFamily(e => _$$mg(atom(t => {
  let i = t(AssetAtomMap[PrimaryWorkflowEnum.CODE_COMPONENT].local);
  let n = t(AssetAtomMap[PrimaryWorkflowEnum.CODE_COMPONENT].subscribed);
  let l = CodeComponentIdHandler.fromString(e);
  return l ? i[l] || n[l] : void 0;
}), e => e));
function Sf(e) {
  let t = useAtomWithSubscription(Sg(e));
  return Sh(t?.codeBehaviorData?.name ?? t?.name ?? '', t?.name);
}
let S_ = new Set(['GROUP', 'FRAME', 'VECTOR', 'STAR', 'LINE', 'ELLIPSE', 'RECTANGLE', 'REGULAR_POLYGON', 'ROUNDED_RECTANGLE', 'TEXT', 'INSTANCE']);
var Sb = (e => (e.TOP_LEFT = 'top-left', e.CENTER = 'center', e.MANUAL = 'manual', e))(Sb || {});
let Sy = e => {
  let t;
  t = e.type;
  return S_.has(t) && e.size.x > 0 && e.size.y > 0;
};
function Sv(e) {
  let t = useDispatch();
  let i = EU();
  let n = RU();
  let [r, o] = Sj();
  let [d, c] = Sk();
  let [p, x] = Sw();
  let m = useCallback(() => {
    if (d === 0 && p === 0) return 'top-left';
    if (r && isValidValue(r)) {
      let e = getSingletonSceneGraph().get(r);
      if (e && d === e.size.x / 2 && p === e.size.y / 2) return 'center';
    }
    return 'manual';
  }, [d, p, r]);
  let [g, f] = useState(m());
  let _ = useCallback(e => {
    if (f(e), e === 'top-left') {
      c(0);
      x(0);
    } else if (e === 'center' && r && isValidValue(r)) {
      let e = getSingletonSceneGraph().get(r);
      e && (c(e.size.x / 2), x(e.size.y / 2));
    }
  }, [f, c, x, r]);
  let [y, v] = useState(null);
  useEffect(() => {
    v(null);
    (async () => {
      isValidValue(r) && v(await c_(r));
    })();
  }, [r]);
  let j = useCallback(e => {
    _$$l.user('set-cursor-guid', () => {
      o(e);
    });
  }, [o]);
  let k = Fk(e => {
    let t = e.getCurrentPage();
    if (t) {
      return ZQ(e, t.id).filter(Sy).map(e => ({
        guid: e.guid,
        name: e.name,
        size: e.size,
        type: e.type
      }));
    }
  });
  return jsxs(k8, {
    children: [jsx('div', {
      className: _$$s4.flex.flexColumn.px16.pb8.pt4.$,
      children: jsx(d8, {
        addImage: _$$lQ,
        base64String: y,
        disableUpload: !0,
        imageCandidates: k,
        label: getI18nString('sites.metadata.image_selector.placeholder'),
        labelHidden: !0,
        nodeId: isValidValue(r) && isValidSessionLocalID(parseSessionLocalID(r)) ? r.toString() : '',
        recordingKey: 'sites.panel.cursor',
        removeImage: () => j(defaultSessionLocalIDString),
        removeString: getI18nString('sites.panel.interactions_panel.remove_cursor'),
        selectImage: j
      })
    }), jsx(k5, {
      label: renderI18nText('sites.panel.interactions_panel.hotspot'),
      input: jsxs(_$$bL6, {
        value: g,
        onChange: _,
        children: [jsx(_$$l7, {
          width: 'fill',
          label: jsx(HiddenLabel, {
            children: renderI18nText('sites.panel.interactions_panel.hotspot')
          })
        }), jsxs(_$$mc2, {
          children: [jsx(_$$c$5, {
            value: 'top-left',
            children: renderI18nText('sites.panel.interactions_panel.hotspot_top_left')
          }), jsx(_$$c$5, {
            value: 'center',
            children: renderI18nText('sites.panel.interactions_panel.hotspot_center')
          }), jsx(_$$wv, {}), jsx(_$$c$5, {
            value: 'manual',
            children: renderI18nText('sites.panel.interactions_panel.hotspot_manual')
          })]
        })]
      })
    }), g === 'manual' && jsx(k3, {
      leftInput: jsx(_$$gq, {
        'value': d,
        'onValueChange': c,
        'smallNudgeAmount': i,
        'bigNudgeAmount': n,
        'dispatch': t,
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': getI18nString('sites.panel.interactions_panel.x_coordinate'),
        'children': jsx('span', {
          className: kJ,
          children: renderI18nText('sites.panel.interactions_panel.x')
        })
      }),
      rightInput: jsx(_$$gq, {
        'value': p,
        'onValueChange': x,
        'smallNudgeAmount': i,
        'bigNudgeAmount': n,
        'dispatch': t,
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': getI18nString('sites.panel.interactions_panel.y_coordinate'),
        'children': jsx('span', {
          className: kJ,
          children: renderI18nText('sites.panel.interactions_panel.y')
        })
      }),
      label: null
    })]
  });
}
let Sj = kR({
  behaviorType: Xc.Cursor,
  editName: 'cursorGuid',
  get: e => sessionLocalIDToString(e?.cursorGuid) ?? defaultSessionLocalIDString,
  update: (e, t) => {
    e && t && (e.cursorGuid = parseSessionLocalID(t) ?? defaultSessionLocalID);
  }
});
let Sk = kR({
  behaviorType: Xc.Cursor,
  editName: 'cursorHotspotX',
  get: e => e?.hotspotX ?? 0,
  update: (e, t) => {
    e && (e.hotspotX = t);
  }
});
let Sw = kR({
  behaviorType: Xc.Cursor,
  editName: 'cursorHotspotY',
  get: e => e?.hotspotY ?? 0,
  update: (e, t) => {
    e && (e.hotspotY = t);
  }
});
let ST = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M13 9.332a.7.7 0 0 1 1.107-.57l3.735 2.668a.7.7 0 0 1 0 1.14l-3.735 2.668a.7.7 0 0 1-1.107-.57zm1.688-1.384C13.563 7.145 12 7.948 12 9.332v1.342l-.076-.057-3.736-2.669C7.063 7.145 5.5 7.95 5.5 9.332v5.336c0 1.383 1.563 2.187 2.688 1.384l3.736-2.669.076-.057v1.342c0 1.383 1.563 2.187 2.688 1.383l3.736-2.668a1.7 1.7 0 0 0 0-2.766zM6.5 9.332a.7.7 0 0 1 1.107-.57l3.735 2.668a.7.7 0 0 1 0 1.14l-3.735 2.668a.7.7 0 0 1-1.107-.57z',
      clipRule: 'evenodd'
    })
  });
});
function SE({
  OriginalComponent: e,
  ...t
}) {
  return jsx(e, {
    ...t,
    className: 'styles-module--ui3ComboBoxInput--TjbLY'
  });
}
function SN(e) {
  let t = useDispatch();
  let i = Um();
  let [n, r] = SA();
  let [o, d] = SR();
  let [c, p] = SL();
  let [x, m] = useState(void 0);
  let h = EU();
  let g = RU();
  let f = [{
    label: getI18nString('sites.marquee.very_slow'),
    value: 25
  }, {
    label: getI18nString('sites.marquee.slow'),
    value: 50
  }, {
    label: getI18nString('sites.marquee.moderate'),
    value: 100
  }, {
    label: getI18nString('sites.marquee.fast'),
    value: 200
  }, {
    label: getI18nString('sites.marquee.very_fast'),
    value: 300
  }];
  let _ = jsx(_$$Q13, {
    getIcon: () => void 0,
    setMaxWidth: e => {
      void 0 === e ? m(void 0) : m(Math.max(e + 16, 100));
    },
    options: f,
    formatOption: e => `${e.label + e.value}px`
  });
  return jsxs(Fragment, {
    children: [_, jsxs(k8, {
      children: [jsx(k5, {
        label: renderI18nText('sites.panel.interactions_panel.marquee_direction'),
        input: jsxs(_$$bL, {
          legend: jsx(_$$q2, {
            children: getI18nString('sites.panel.interactions_panel.marquee_direction')
          }),
          value: o,
          onChange: e => {
            d(e);
          },
          readonly: !1,
          recordingKey: 'marqueeDirection',
          children: [jsx(_$$c$2, {
            'value': 'LEFT',
            'aria-label': getI18nString('sites.panel.interactions_panel.marquee_direction_left'),
            'icon': jsx(_$$v10, {})
          }), jsx(_$$c$2, {
            'value': 'RIGHT',
            'aria-label': getI18nString('sites.panel.interactions_panel.marquee_direction_right'),
            'icon': jsx(_$$o1, {})
          })]
        })
      }), jsx(k5, {
        label: renderI18nText('sites.panel.interactions_panel.marquee_speed'),
        input: jsx(_$$ow, {
          value: {
            inputComponent: SE
          },
          children: jsx(_$$vD2, {
            'bigNudgeAmount': g,
            'data-tooltip': getI18nString('sites.panel.interactions_panel.marquee_speed_tooltip'),
            'data-tooltip-type': KindEnum.TEXT,
            'dispatch': t,
            'dropdownShown': i,
            'dropdownWidth': x,
            'hasIconStyle': !1,
            'icon': jsx(ST, {
              style: {
                '--color-icon': 'var(--color-icon-secondary)'
              }
            }),
            'id': 'marquee-speed-input',
            'inputClassName': 'styles-module--marqueeSpeedComboBox--cGW7w',
            'max': 3e3,
            'min': 1,
            'onValueChange': r,
            'smallNudgeAmount': h,
            'value': n,
            'children': f.map(e => jsx(_$$c$6, {
              additionalTextStylesClassName: 'styles-module--optionText--KEDoN',
              selected: n === e.value,
              onMouseUp: () => r(e.value),
              value: e.value,
              children: jsxs('div', {
                className: 'styles-module--marqueeSpeedComboBoxOption--sBWa0',
                children: [jsx('div', {
                  className: 'styles-module--marqueeSpeedComboBoxOptionLabel--33Xvv',
                  children: e.label
                }), jsx('div', {
                  className: 'styles-module--marqueeSpeedComboBoxOptionValue--BxUZY',
                  children: `${e.value}px`
                })]
              })
            }, e.value))
          })
        })
      }), jsx(k5, {
        label: renderI18nText('sites.panel.interactions_panel.marquee_infinite'),
        input: jsxs(_$$bL, {
          legend: jsx(_$$q2, {
            children: getI18nString('sites.panel.interactions_panel.marquee_direction')
          }),
          value: !isInvalidValue(c) && c ? 'TRUE' : 'FALSE',
          onChange: e => {
            p(e === 'TRUE');
          },
          readonly: !1,
          recordingKey: 'loopInfinitely',
          children: [jsx(_$$c$2, {
            'value': 'FALSE',
            'aria-label': getI18nString('sites.panel.interactions_panel.marquee_infinite_disabled'),
            'icon': jsx(_$$O1, {})
          }), jsx(_$$c$2, {
            'value': 'TRUE',
            'aria-label': getI18nString('sites.panel.interactions_panel.marquee_infinite_enabled'),
            'icon': jsx(_$$r9, {})
          })]
        })
      })]
    })]
  });
}
let SR = kR({
  behaviorType: Xc.Marquee,
  editName: 'marqueeRelativeDirection',
  get: e => e?.direction ?? 'LEFT',
  update: (e, t) => {
    e && (e.direction = t);
  }
});
let SA = kR({
  behaviorType: Xc.Marquee,
  editName: 'marqueeSpeed',
  get: e => e?.speed ?? JQ,
  update: (e, t) => {
    e && (e.speed = t);
  }
});
let SL = kR({
  behaviorType: Xc.Marquee,
  editName: 'marqueeShouldLoopInfinitely',
  get: e => e?.shouldLoopInfinitely === void 0 || e.shouldLoopInfinitely,
  update: (e, t) => {
    e && (e.shouldLoopInfinitely = t);
  }
});
let SF = e => {
  let t = `${e?.id}-cursor`;
  let i = document.getElementById(t);
  !i && e && (i = SM(t, !0, void 0, e));
  return i || null;
};
let SM = (e, t, i, n) => {
  let l = document.createElement('div');
  n ? n.parentNode?.insertBefore(l, n.nextSibling) : document.body.appendChild(l);
  l.id = e;
  l.style.position = 'fixed';
  l.style.top = '0';
  l.style.left = '0';
  l.style.visibility = 'hidden';
  l.style.pointerEvents = 'none';
  l.style.willChange = 'transform';
  l.ariaHidden = 'true';
  t && (l.style.zIndex = '9998');
  i && (l.style.width = `${i.x}px`, l.style.height = `${i.y}px`);
  return l;
};
let SD = e => {
  let t = document.getElementById(e);
  t && t.parentNode?.removeChild(t);
};
let Sz = 'marquee--marquee--Ql3P3';
let SB = 'marquee--marqueeChild--sFYHF';
let S$ = 'left';
let SU = forwardRef(({
  behavior: e,
  style: t = {},
  className: i = '',
  children: n
}, s) => {
  let r = S$;
  let o = 6;
  let d = !1;
  e.behaviorType === Xc.Marquee && (r = e.direction ?? S$, o = e.speed ?? 6, d = e.shouldLoopInfinitely ?? !1);
  let [c, u] = useState(0);
  let [p, x] = useState(0);
  let [m, h] = useState(1);
  let [g, f] = useState(!1);
  let _ = useRef(null);
  let b = s || _;
  let y = useRef(null);
  let j = useCallback(() => {
    if (y.current && b.current) {
      let e = b.current.getBoundingClientRect();
      let t = y.current.getBoundingClientRect();
      let i = e.width;
      let n = t.width;
      (r === 'UP' || r === 'DOWN') && (i = e.height, n = t.height);
      d && i && n ? h(n < i ? Math.ceil(i / n) : 1) : h(1);
      u(i);
      x(n);
    }
  }, [d, b, r]);
  useEffect(() => {
    if (g && (j(), y.current && b.current)) {
      let e = new ResizeObserver(() => j());
      e.observe(b.current);
      e.observe(y.current);
      return () => {
        e && e.disconnect();
      };
    }
  }, [j, b, g]);
  useEffect(() => {
    j();
  }, [j, n]);
  useEffect(() => {
    f(!0);
  }, []);
  let k = useMemo(() => d ? p * m / o : p < c ? c / o : p / o, [d, c, p, m, o]);
  let w = useMemo(() => ({
    ...t,
    '--width': r === 'UP' || r === 'DOWN' ? '100vh' : '100%',
    '--transform': r === 'UP' ? 'rotate(-90deg)' : r === 'DOWN' ? 'rotate(90deg)' : 'none'
  }), [t, r]);
  let S = useMemo(() => ({
    '--play': 'running',
    '--direction': r === 'LEFT' ? 'normal' : 'reverse',
    '--duration': `${k}s`,
    '--delay': '0s',
    '--iteration-count': 'infinite',
    '--min-width': d ? 'auto' : '100%'
  }), [r, k, d]);
  let C = useMemo(() => ({
    '--transform': r === 'UP' ? 'rotate(90deg)' : r === 'DOWN' ? 'rotate(-90deg)' : 'none'
  }), [r]);
  let T = useCallback(e => [...new Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) => jsx(_$$Fragment, {
    children: Children.map(n, e => jsx('div', {
      style: C,
      className: SB,
      children: e
    }))
  }, t)), [C, n]);
  return g ? jsxs('div', {
    ref: b,
    style: w,
    className: v()('marquee--marqueeContainer--5fDPh', i),
    children: [jsxs('div', {
      className: Sz,
      style: S,
      children: [jsx('div', {
        className: 'marquee--marqueeInitialChildContainer--j4Ccq',
        ref: y,
        children: Children.map(n, e => jsx('div', {
          style: C,
          className: SB,
          children: e
        }))
      }), T(m - 1)]
    }), jsx('div', {
      className: Sz,
      style: S,
      children: T(m)
    })]
  }) : null;
});
function SK({
  behaviorType: e
}) {
  let t = function (e) {
    let t = _$$kl(e);
    return {
      behaviorType: e,
      ...t
    };
  }(e);
  return t ? t.behaviorType === Xc.Marquee ? jsx(Sq, {
    behavior: t
  }) : jsx(SH, {
    behavior: t
  }) : null;
}
function SH({
  behavior: e
}) {
  let [t, i] = useState(e.behaviorType === Xc.Cursor);
  let n = useRef(null);
  let s = useRef(null);
  let r = _$$eY();
  let o = _$$kl('opacity');
  let d = useMemo(() => ({
    opacity: isInvalidValue(o) ? void 0 : o
  }), [o]);
  let c = useMemo(() => ({
    x: 32,
    y: 32
  }), []);
  let p = useMemo(() => ({
    x: 0,
    y: 0
  }), []);
  if (e.behaviorType === Xc.Cursor) {
    let t = sessionLocalIDToString(e.cursorGuid);
    let i = t ? r.get(t) : null;
    if (e && i && s.current && i.size) {
      let t = s.current.getBoundingClientRect().width / 2 - 24;
      let {
        cursorSize,
        hotspot
      } = SG(i.size, {
        x: e.hotspotX ?? 0,
        y: e.hotspotY ?? 0
      }, {
        x: t,
        y: 51
      });
      c = cursorSize;
      p = hotspot;
    }
  }
  let x = p.x !== 0 || p.y !== 0;
  let {
    motionProps,
    key,
    restart
  } = function (e, t, i = 1e3, n, l) {
    let [s, r] = useState(0);
    let o = _$$s14();
    let d = useRef(null);
    let [c, u] = useState(null);
    let {
      key: _key,
      hasBehaviors,
      variants,
      initial,
      hasAppearLoadBehavior,
      hasAppearScrollIntoViewBehavior,
      hasAppearScrollDirectionBehavior,
      hasHoverBehavior,
      hasPressBehavior,
      hasScrollSpeedBehavior,
      hasCursorBehavior,
      hasEnterAnimation,
      hasExitAnimation,
      transitionToVisible,
      transitionToExit,
      transitionToAndFromHover,
      transitionToAndFromPress,
      transitionBasedOnScrollDirection,
      cursorBehaviorInfo,
      hasScrollTransformOnScrollBehavior,
      hasScrollTransformIntoViewBehavior,
      scrollTransformTransition
    } = useMemo(() => $X([e], t, void 0, c), [e, t, c]);
    let P = `${s}-${_key}`;
    let O = async t => {
      if (e.behaviorType !== Xc.Cursor) return;
      let i = l && l.getThumbnail ? await l?.getThumbnail(t ?? '') : '';
      i && u(i);
    };
    let F = hasScrollTransformOnScrollBehavior || hasScrollTransformIntoViewBehavior;
    useEffect(() => {
      if (!hasBehaviors) return;
      let e = [];
      function t(t) {
        let n;
        let l = !1;
        e.push(() => {
          l = !0;
          clearTimeout(n);
        });
        let a = () => l ? Promise.resolve() : new Promise(e => {
          n = setTimeout(e, i);
        });
        let s = async (e, t) => {
          l || (await o.start(e, t));
          l || (await a());
        };
        (async function () {
          for (; !l;) {
            l || o.set(initial);
            l || (await t(s, a));
            l || o.set(initial);
          }
        })();
      }
      if (e.push(() => o.stop()), hasAppearLoadBehavior && t(async e => {
        hasEnterAnimation && (await e('visible', transitionToVisible));
      }), hasAppearScrollIntoViewBehavior && t(async e => {
        hasEnterAnimation && (await e('visible', transitionToVisible));
        hasExitAnimation && (await e('exit', transitionToExit));
      }), hasAppearScrollDirectionBehavior && t(async e => {
        await e('scrollDirection', transitionBasedOnScrollDirection);
        await e('visible', transitionBasedOnScrollDirection);
      }), hasHoverBehavior && t(async e => {
        await e('hover', transitionToAndFromHover);
        await e('visible', transitionToAndFromHover);
      }), hasPressBehavior && t(async e => {
        await e('press', transitionToAndFromPress);
        await e('visible', transitionToAndFromPress);
      }), F && t(async e => {
        await e('exit', scrollTransformTransition);
      }), hasCursorBehavior) {
        let t = parseSessionLocalID(cursorBehaviorInfo?.cursorGuid);
        if (n.current && isValidSessionLocalID(t)) {
          let t = cursorBehaviorInfo?.cursorGuid;
          let i = l?.hotspot.x ?? 0;
          let a = l?.hotspot.y ?? 0;
          let s = cursorBehaviorInfo?.cursorImage;
          let r = SF(n.current);
          if (d.current = r, t && O(t), d.current && s) {
            d.current.style.backgroundImage = `url("${s}")`;
            d.current.style.backgroundRepeat = 'no-repeat';
            d.current.style.backgroundSize = 'contain';
            d.current.style.width = `${l?.cursorSize.x ?? 32}px`;
            d.current.style.height = `${l?.cursorSize.y ?? 32}px`;
            let t = () => {
              d.current && n.current && (d.current.style.visibility = 'visible', n.current.style.cursor = 'none');
            };
            let r = e => {
              d.current && (d.current.style.transform = `translate(${e.clientX - i}px, ${e.clientY - a}px)`);
            };
            let o = () => {
              d.current && n.current && (d.current.style.visibility = 'hidden', n.current.style.cursor = 'auto');
            };
            n.current.addEventListener('pointerenter', t);
            n.current.addEventListener('pointermove', r);
            n.current.addEventListener('pointerleave', o);
            e.push(() => {
              n.current?.removeEventListener('pointerenter', t);
              n.current?.removeEventListener('pointermove', r);
              n.current?.removeEventListener('pointerleave', o);
              d.current && (SD(d.current.id), d.current = null);
            });
          }
        }
      }
      return () => {
        e.forEach(e => e());
      };
    }, [P, o]);
    return {
      motionProps: hasBehaviors ? {
        initial,
        animate: o,
        variants
      } : {},
      key: P,
      restart: useCallback(() => {
        hasCursorBehavior || r(e => e + 1);
      }, [hasCursorBehavior])
    };
  }(e, d, 1e3, n, useMemo(() => ({
    getThumbnail: e => c_(e),
    cursorSize: c,
    hotspot: p
  }), [c, p]));
  return jsx('div', {
    'className': k$,
    'role': 'button',
    'tabIndex': 0,
    'aria-label': getI18nString('sites.panel.interactions_panel.restart_preview'),
    'onClick': restart,
    'onPointerEnter': () => {
      i(!1);
    },
    'onPointerLeave': () => {
      e.behaviorType === Xc.Cursor && i(!0);
    },
    'style': {
      '--preview-background-height': '150px',
      '--preview-element-size': '48px'
    },
    'children': jsxs('div', {
      style: {
        position: 'relative',
        height: '100%'
      },
      children: [jsx(SV, {
        behavior: e,
        isVisible: t
      }), jsxs('div', {
        ref: s,
        className: kU,
        style: {
          '--previewVisibility': `${t ? 'hidden' : 'visible'}`
        },
        children: [jsx(_$$P7.div, {
          id: 'behavior-preview',
          ref: n,
          className: kK,
          ...motionProps
        }, key), x ? jsx(SX, {
          previewRef: n
        }) : null]
      })]
    })
  });
}
function Sq({
  behavior: e
}) {
  let t = function () {
    let e = _$$kl('numSelectedByType');
    let t = _$$kl('numSelected');
    return !!(e && isValidValue(e)) && t !== 0 && _$$OU(e, ['TEXT']);
  }();
  let i = function () {
    let e = _$$kl('numSelectedByType');
    let t = _$$kl('numSelected');
    return !!(e && isValidValue(e)) && t !== 0 && _$$OU(e, ['FRAME']);
  }();
  let n = i || !t && !i;
  return t || n ? jsx('div', {
    className: k$,
    style: {
      '--preview-background-height': '150px',
      '--preview-element-size': '48px'
    },
    children: jsx('div', {
      style: {
        position: 'relative',
        height: '100%'
      },
      children: jsx('div', {
        className: kU,
        children: jsxs(SU, {
          behavior: e,
          className: 'styles-module--marqueeContainer--93jrn',
          children: [t && jsxs('div', {
            id: 'marquee-behavior-preview-text',
            className: 'styles-module--previewElementMarqueeText--iy-J8',
            children: [getI18nString('sites.panel.interactions_panel.marquee_behavior'), '\xA0']
          }), n && jsx('div', {
            id: 'marquee-behavior-preview-genericized-rectangle',
            className: 'styles-module--previewElementMarquee--Kl8tY'
          })]
        })
      })
    })
  }) : null;
}
function SX({
  previewRef: e
}) {
  let t = useRef(null);
  e.current?.addEventListener('pointerenter', () => {
    t.current && (t.current.style.visibility = 'visible');
  });
  e.current?.addEventListener('pointermove', e => {
    t.current && (t.current.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`);
  });
  e.current?.addEventListener('pointerleave', () => {
    t.current && (t.current.style.visibility = 'hidden');
  });
  return jsxs('svg', {
    'ref': t,
    'id': 'hotspot-crosshair',
    'style': {
      position: 'fixed',
      top: 0,
      left: 0,
      visibility: 'hidden',
      pointerEvents: 'none',
      willChange: 'transform',
      zIndex: 9999
    },
    'width': '16',
    'height': '16',
    'viewBox': '0 0 16 16',
    'aria-hidden': 'true',
    'children': [jsx('path', {
      d: 'M7 0H9V16H7V0Z',
      fillRule: 'evenodd',
      fillOpacity: '1',
      fill: '#0D99FF',
      stroke: 'none'
    }), jsx('path', {
      d: 'M16 7V9L0 9L8.74228e-08 7L16 7Z',
      fillRule: 'evenodd',
      fillOpacity: '1',
      fill: '#0D99FF',
      stroke: 'none'
    })]
  });
}
function SV({
  behavior: e,
  isVisible: t
}) {
  let i;
  let [n, s] = useState('');
  let [r, o] = useState({
    x: 32,
    y: 32
  });
  let [d, c] = useState({
    x: 0,
    y: 0
  });
  let p = useRef(null);
  let x = _$$eY();
  e.behaviorType === Xc.Cursor && (i = e);
  useEffect(() => {
    if (i && i.cursorGuid) {
      let e = sessionLocalIDToString(i.cursorGuid);
      (async () => {
        let t = await c_(e);
        t ? s(t) : s('');
      })();
      let t = e ? x.get(e) : null;
      if (t && t.size && p.current) {
        let e = p.current.getBoundingClientRect();
        let n = 0.45 * e.width;
        let l = 0.45 * e.height;
        let {
          cursorSize,
          hotspot
        } = SG(t.size, {
          x: i.hotspotX ?? 0,
          y: i.hotspotY ?? 0
        }, {
          x: n,
          y: l
        });
        o(cursorSize);
        c(hotspot);
      }
    }
  }, [e, i, x]);
  return jsx('div', {
    ref: p,
    className: kU,
    style: {
      '--previewVisibility': `${t ? 'visible' : 'hidden'}`
    },
    children: jsx('div', {
      style: {
        position: 'relative'
      },
      children: n ? jsxs(Fragment, {
        children: [jsx(_$$oW, {
          style: {
            width: `${r.x}px`,
            height: `${r.y}px`
          },
          src: n ?? '',
          alt: getI18nString('sites.panel.interactions_panel.cursor_image')
        }), jsxs('svg', {
          style: {
            position: 'absolute',
            top: `${d.y - 8}px`,
            left: `${d.x - 8}px`
          },
          width: '16',
          height: '16',
          viewBox: '0 0 16 16',
          children: [jsx('path', {
            d: 'M7 0H9V16H7V0Z',
            fillRule: 'evenodd',
            fillOpacity: '1',
            fill: '#0D99FF',
            stroke: 'none'
          }), jsx('path', {
            d: 'M16 7V9L0 9L8.74228e-08 7L16 7Z',
            fillRule: 'evenodd',
            fillOpacity: '1',
            fill: '#0D99FF',
            stroke: 'none'
          })]
        })]
      }) : jsx('div', {
        className: kK
      })
    })
  });
}
function SG(e, t, i) {
  let {
    totalWidth,
    totalHeight
  } = SW(e, t);
  let a = totalWidth / i.x;
  let s = totalHeight / i.y;
  if (a <= 1 && s <= 1) {
    return {
      cursorSize: e,
      hotspot: t
    };
  }
  let r = a >= s ? a : s;
  return {
    cursorSize: {
      x: e.x / r,
      y: e.y / r
    },
    hotspot: {
      x: t.x / r,
      y: t.y / r
    }
  };
}
let SW = (e, t) => {
  let i = e.x;
  let n = e.y;
  t.x < 0 ? i += Math.abs(t.x) : t.x >= e.x ? i += t.x - e.x : i -= t.x;
  t.y < 0 ? n += Math.abs(t.y) : t.y >= e.y ? n += t.y - e.y : n -= t.y;
  return {
    totalWidth: i,
    totalHeight: n
  };
};
function SY({
  behaviorType: e,
  recordingKey: t,
  pushDetailsComponent: i,
  showExtendedTransitionPropertiesView: n
}) {
  let s = n ? wu : wj;
  let r = useCallback(() => {
    n || n || i(renderI18nText('sites.panel.interactions_panel.transition'), jsx(SY, {
      behaviorType: e,
      recordingKey: t,
      pushDetailsComponent: _$$lQ,
      showExtendedTransitionPropertiesView: !0
    }));
  }, [n, i, e, t]);
  let o = !n;
  switch (e) {
    case Xc.Hover:
      return jsxs(Fragment, {
        children: [o && jsx(SJ, {
          recordingKey: t
        }), jsx(SZ, {
          behaviorType: e,
          recordingKey: t,
          drilldownCallback: r,
          TransitionComponent: s
        })]
      });
    case Xc.Focus:
      return jsxs(Fragment, {
        children: [o && jsx(S1, {
          recordingKey: t
        }), jsx(S5, {
          behaviorType: e,
          recordingKey: t,
          drilldownCallback: r,
          TransitionComponent: s
        })]
      });
    case Xc.Press:
      return jsxs(Fragment, {
        children: [o && jsx(SQ, {
          recordingKey: t
        }), jsx(S0, {
          behaviorType: e,
          recordingKey: t,
          drilldownCallback: r,
          TransitionComponent: s
        })]
      });
    default:
      return null;
  }
}
function SJ(e) {
  let [t, i] = S8();
  let [n, a] = S4();
  let [s, r] = S6();
  let [o, d] = S7();
  let [c, u] = S9();
  k6(n, S3());
  return jsx(wy, {
    offsetX: s,
    offsetY: o,
    opacity: n,
    recordingKey: e.recordingKey,
    rotation: c,
    scale: t,
    setOffsetX: r,
    setOffsetY: d,
    setOpacity: a,
    setRotation: u,
    setScale: i
  });
}
function SZ(e) {
  let [t, i] = Ce();
  let [n, a] = Ct();
  let [s, r] = Ci();
  return jsx(e.TransitionComponent, {
    drilldownCallback: e.drilldownCallback,
    easingType: t,
    setEasingType: i,
    transitionDuration: n,
    setTransitionDuration: a,
    easingFunction: s,
    setEasingFunction: r,
    recordingKey: e.recordingKey
  });
}
function SQ(e) {
  let [t, i] = Ca();
  let [n, a] = Cn();
  let [s, r] = Cs();
  let [o, d] = Cr();
  let [c, u] = Co();
  k6(n, Cl());
  return jsx(wy, {
    offsetX: s,
    offsetY: o,
    opacity: n,
    recordingKey: e.recordingKey,
    rotation: c,
    scale: t,
    setOffsetX: r,
    setOffsetY: d,
    setOpacity: a,
    setRotation: u,
    setScale: i
  });
}
function S0(e) {
  let [t, i] = Cd();
  let [n, a] = Cc();
  let [s, r] = Cu();
  return jsx(e.TransitionComponent, {
    drilldownCallback: e.drilldownCallback,
    easingType: t,
    setEasingType: i,
    transitionDuration: n,
    setTransitionDuration: a,
    easingFunction: s,
    setEasingFunction: r,
    recordingKey: e.recordingKey
  });
}
function S1(e) {
  let [t, i] = Cm();
  let [n, a] = Cp();
  let [s, r] = Ch();
  let [o, d] = Cg();
  let [c, u] = Cf();
  k6(n, Cx());
  return jsx(wy, {
    offsetX: s,
    offsetY: o,
    opacity: n,
    recordingKey: e.recordingKey,
    rotation: c,
    scale: t,
    setOffsetX: r,
    setOffsetY: d,
    setOpacity: a,
    setRotation: u,
    setScale: i
  });
}
function S5(e) {
  let [t, i] = C_();
  let [n, a] = Cb();
  let [s, r] = Cy();
  return jsx(e.TransitionComponent, {
    drilldownCallback: e.drilldownCallback,
    easingType: t,
    setEasingType: i,
    transitionDuration: n,
    setTransitionDuration: a,
    easingFunction: s,
    setEasingFunction: r,
    recordingKey: e.recordingKey
  });
}
let S2 = ({
  scale: e,
  opacity: t,
  offsetX: i,
  offsetY: n,
  rotation: l
}) => {
  let a = [];
  return isInvalidValue(e) || isInvalidValue(t) ? '' : (e > _$$$Y ? a.push(getI18nString('sites.panel.interactions_panel.grow')) : e < _$$$Y && a.push(getI18nString('sites.panel.interactions_panel.shrink')), t !== _$$q10 && a.push(getI18nString('sites.panel.interactions_panel.fade')), (i !== Q5 || n !== Q5) && a.push(getI18nString('sites.panel.interactions_panel.shift')), l !== _$$rb && a.push(getI18nString('sites.panel.interactions_panel.rotate')), a.length > 0 ? a.join(', ') : '');
};
let S4 = kR({
  behaviorType: Xc.Hover,
  editName: 'trigger',
  get: Ck,
  update: Cw
});
let S3 = kL({
  behaviorType: Xc.Hover,
  get: CS
});
let S8 = kR({
  behaviorType: Xc.Hover,
  editName: 'scale',
  get: CI,
  update: CE
});
let S6 = kR({
  behaviorType: Xc.Hover,
  editName: 'offsetX',
  get: CN,
  update: CR
});
let S7 = kR({
  behaviorType: Xc.Hover,
  editName: 'offsetY',
  get: CA,
  update: CL
});
let S9 = kR({
  behaviorType: Xc.Hover,
  editName: 'rotation',
  get: CP,
  update: CO
});
let Ce = kR({
  behaviorType: Xc.Hover,
  editName: 'easingType',
  get: CF,
  update: CM
});
let Ct = kR({
  behaviorType: Xc.Hover,
  editName: 'transitionDuration',
  get: CD,
  update: Cz
});
let Ci = kR({
  behaviorType: Xc.Hover,
  editName: 'easingFunction',
  get: CB,
  update: C$
});
let Cn = kR({
  behaviorType: Xc.Press,
  editName: 'trigger',
  get: Ck,
  update: Cw
});
let Cl = kL({
  behaviorType: Xc.Press,
  get: CS
});
let Ca = kR({
  behaviorType: Xc.Press,
  editName: 'scale',
  get: CI,
  update: CE
});
let Cs = kR({
  behaviorType: Xc.Press,
  editName: 'offsetX',
  get: CN,
  update: CR
});
let Cr = kR({
  behaviorType: Xc.Press,
  editName: 'offsetY',
  get: CA,
  update: CL
});
let Co = kR({
  behaviorType: Xc.Press,
  editName: 'rotation',
  get: CP,
  update: CO
});
let Cd = kR({
  behaviorType: Xc.Press,
  editName: 'easingType',
  get: CF,
  update: CM
});
let Cc = kR({
  behaviorType: Xc.Press,
  editName: 'transitionDuration',
  get: CD,
  update: Cz
});
let Cu = kR({
  behaviorType: Xc.Press,
  editName: 'easingFunction',
  get: CB,
  update: C$
});
let Cp = kR({
  behaviorType: Xc.Focus,
  editName: 'trigger',
  get: Ck,
  update: Cw
});
let Cx = kL({
  behaviorType: Xc.Focus,
  get: CS
});
let Cm = kR({
  behaviorType: Xc.Focus,
  editName: 'scale',
  get: CI,
  update: CE
});
let Ch = kR({
  behaviorType: Xc.Focus,
  editName: 'offsetX',
  get: CN,
  update: CR
});
let Cg = kR({
  behaviorType: Xc.Focus,
  editName: 'offsetY',
  get: CA,
  update: CL
});
let Cf = kR({
  behaviorType: Xc.Focus,
  editName: 'rotation',
  get: CP,
  update: CO
});
let C_ = kR({
  behaviorType: Xc.Focus,
  editName: 'easingType',
  get: CF,
  update: CM
});
let Cb = kR({
  behaviorType: Xc.Focus,
  editName: 'transitionDuration',
  get: CD,
  update: Cz
});
let Cy = kR({
  behaviorType: Xc.Focus,
  editName: 'easingFunction',
  get: CB,
  update: C$
});
function Cv(e) {
  return e?.state ?? {};
}
function Cj(e) {
  return e?.transition ?? {};
}
function Ck(e) {
  return Number((Cv(e).opacity ?? 1).toFixed(2));
}
function Cw(e, t) {
  Cv(e).opacity = t;
}
function CS(e) {
  return Cv(e).transform || _$$s13.identity().toFigMatrix();
}
function CC(e) {
  let t = Cv(e).transform;
  return t ? _$$s13.fromFigMatrix(t) : _$$s13.identity();
}
function CT(e, t) {
  let i = e.state ?? {};
  e.state = i;
  let n = t(i.transform ? _$$s13.fromFigMatrix(i.transform) : _$$s13.identity());
  i.transform = n.toFigMatrix();
}
function CI(e) {
  return Number(CC(e).toScale().x.toFixed(2));
}
function CE(e, t) {
  CT(e, e => {
    let i = _$$s13.identity();
    let n = e.offset();
    i.translate(n.x, n.y);
    i.scale(t, t);
    i.rotate(e.toRadians());
    return i;
  });
}
function CN(e) {
  return Number(CC(e).offset().x.toFixed(2));
}
function CR(e, t) {
  CT(e, e => {
    let i = _$$s13.identity();
    let n = e.offset();
    i.translate(t, n.y);
    let l = e.toScale();
    i.scale(l.x, l.y);
    i.rotate(e.toRadians());
    return i;
  });
}
function CA(e) {
  return Number(CC(e).offset().y.toFixed(2));
}
function CL(e, t) {
  CT(e, e => {
    let i = _$$s13.identity();
    let n = e.offset();
    i.translate(n.x, t);
    let l = e.toScale();
    i.scale(l.x, l.y);
    i.rotate(e.toRadians());
    return i;
  });
}
function CP(e) {
  return Number(CC(e).toDegrees().toFixed(2));
}
function CO(e, t) {
  CT(e, e => {
    let i = _$$s13.identity();
    let n = e.offset();
    i.translate(n.x, n.y);
    let l = e.toScale();
    i.scale(l.x, l.y);
    i.rotate(Math.PI / 180 * t);
    return i;
  });
}
function CF(e) {
  return e?.transition?.easingType ?? 'OUT_CUBIC';
}
function CM(e, t) {
  let i = Cj(e);
  let n = wd(i.easingType);
  i.easingType = t;
  t === 'CUSTOM_CUBIC' && n ? i.easingFunction = _$$oM.OUT_CUBIC : t !== 'CUSTOM_SPRING' || n ? t !== 'CUSTOM_CUBIC' && t !== 'CUSTOM_SPRING' && t !== 'SPRING' && (i.easingFunction = _$$oM[t]) : i.easingFunction = _$$oM.GENTLE_SPRING;
}
function CD(e) {
  return e?.transition?.transitionDuration ?? 0.3;
}
function Cz(e, t) {
  Cj(e).transitionDuration = t;
}
function CB(e) {
  let t = Cj(e);
  let i = t.easingFunction?.length === 4;
  return t.easingType === 'CUSTOM_SPRING' ? i ? t.easingFunction : _$$oM.GENTLE_SPRING : t.easingType === 'CUSTOM_CUBIC' ? i ? t.easingFunction : _$$oM.OUT_CUBIC : [];
}
function C$(e, t) {
  Cj(e).easingFunction = t;
}
function CU(e) {
  let t = useDispatch();
  let [i, n] = CG();
  return jsxs(k8, {
    children: [jsx(k5, {
      label: renderI18nText('sites.panel.interactions_panel.speed'),
      input: jsx(_$$w4, {
        'bigNudgeAmount': CV,
        'data-tooltip': getI18nString('sites.panel.interactions_panel.speed'),
        'data-tooltip-type': KindEnum.TEXT,
        'decimals': Cq,
        'dispatch': t,
        'max': CH,
        'min': CK,
        'onValueChange': n,
        'recordingKey': generateRecordingKey(e.recordingKey, 'speedInput'),
        'smallNudgeAmount': CX,
        'tooltipForScreenReadersOnly': !0,
        'value': i
      })
    }), isValidValue(i) && jsx(k1, {
      input: jsx(_$$A21, {
        'aria-label': getI18nString('sites.panel.interactions_panel.speed'),
        'value': i,
        'min': CK,
        'max': CH,
        'onChange': (e, {
          commit: t
        }) => n(e, t ? yesNoTrackingEnum.YES : yesNoTrackingEnum.NO),
        'step': CX,
        'bigStep': CV,
        'recordingKey': generateRecordingKey(e.recordingKey, 'speedSlider')
      })
    })]
  });
}
let CK = 0;
let CH = 2;
let Cq = 2;
let CX = 0.01;
let CV = 0.1;
let CG = kR({
  behaviorType: Xc.ScrollParallax,
  editName: 'scrollParallaxSpeed',
  get: e => e?.speed ?? 1,
  update: (e, t) => {
    e && (e.speed = t);
  }
});
function CW({
  pushDetailsComponent: e,
  recordingKey: t
}) {
  let i = useDispatch();
  let n = Um();
  let [r, o] = C5();
  let [d, c] = C2();
  let [p, x] = C4();
  let m = useId();
  let h = useId();
  return jsxs(Fragment, {
    children: [jsxs(k8, {
      children: [jsx(k5, {
        labelId: h,
        label: renderI18nText('sites.panel.interactions_panel.trigger'),
        input: jsxs(C0, {
          ariaLabelledBy: h,
          id: 'animation-trigger-select',
          property: r,
          formatter: _$$vX,
          onChange: o,
          dispatch: i,
          dropdownShown: n,
          dropdownWidth: 140,
          recordingKey: generateRecordingKey(t, 'trigger'),
          children: [jsx(C1, {
            value: 'PAGE_HEIGHT',
            recordingKey: generateRecordingKey(t, 'onScroll')
          }), jsx(C1, {
            value: 'THIS_LAYER_IN_VIEW',
            recordingKey: generateRecordingKey(t, 'thisLayerInView')
          }), jsx(C1, {
            value: 'OTHER_LAYER_IN_VIEW',
            recordingKey: generateRecordingKey(t, 'otherLayerInView')
          })]
        })
      }), r === 'OTHER_LAYER_IN_VIEW' && jsx(k5, {
        labelId: m,
        label: renderI18nText('sites.panel.interactions_panel.layer_label'),
        input: jsx(wm, {
          ariaLabelledBy: m,
          value: d,
          onChange: c
        })
      })]
    }), jsx(k8, {
      children: !isInvalidValue(r) && jsxs(Fragment, {
        children: [jsx(CY, {
          stateName: 'from',
          pushDetailsComponent: e,
          recordingKey: t
        }), jsx(CY, {
          stateName: 'to',
          pushDetailsComponent: e,
          recordingKey: t
        })]
      })
    }), isValidValue(r) && r !== 'PAGE_HEIGHT' ? jsx(k8, {
      children: jsx(k5, {
        label: renderI18nText('sites.panel.interactions_panel.replay_label'),
        input: jsx(w_, {
          value: p,
          onChange: x,
          recordingKey: generateRecordingKey(t, 'replay')
        })
      })
    }) : null, jsx(CZ, {
      pushDetailsComponent: e,
      recordingKey: t,
      showExtendedTransitionPropertiesView: !1
    })]
  });
}
function CY({
  stateName: e,
  pushDetailsComponent: t,
  recordingKey: i
}) {
  let n = CJ(e);
  let s = null;
  switch (e) {
    case 'from':
      s = renderI18nText('sites.panel.interactions_panel.from');
      break;
    case 'to':
      s = renderI18nText('sites.panel.interactions_panel.to');
  }
  let r = useCallback(() => {
    t(s, jsx(CQ, {
      stateName: e,
      recordingKey: i
    }));
  }, [s, t, e, i]);
  return jsx(k2, {
    label: s,
    input: n,
    onClick: r,
    recordingKey: generateRecordingKey(i, e, 'drilldownButton')
  });
}
let CJ = e => {
  let [t] = C6(e);
  let [i] = C3(e);
  let [n] = C7(e);
  let [l] = C9(e);
  let [a] = Te(e);
  let s = [];
  t !== _$$$Y && s.push(getI18nString('sites.panel.interactions_panel.scale'));
  i !== _$$q10 && s.push(getI18nString('sites.panel.interactions_panel.opacity'));
  (n !== Q5 || l !== Q5) && s.push(getI18nString('sites.panel.interactions_panel.offset'));
  a !== _$$rb && s.push(getI18nString('fullscreen.properties_panel.transform_panel.rotation'));
  return s.length > 0 ? s.join(', ') : getI18nString('sites.panel.interactions_panel.default');
};
function CZ({
  recordingKey: e,
  pushDetailsComponent: t,
  showExtendedTransitionPropertiesView: i
}) {
  let [n, s] = Tt();
  let [r, o] = Ti();
  let [d, c] = Tn();
  let p = i ? wu : wj;
  let x = useCallback(() => {
    i || i || t(renderI18nText('sites.panel.interactions_panel.transition'), jsx(CZ, {
      recordingKey: e,
      pushDetailsComponent: _$$lQ,
      showExtendedTransitionPropertiesView: !0
    }));
  }, [i, t, e]);
  return jsx(p, {
    easingType: n,
    setEasingType: s,
    transitionDuration: r,
    setTransitionDuration: o,
    easingFunction: d,
    setEasingFunction: c,
    drilldownCallback: x,
    recordingKey: e
  });
}
function CQ({
  stateName: e,
  recordingKey: t
}) {
  let [i, n] = C6(e);
  let [a, s] = C3(e);
  let [r, o] = C7(e);
  let [d, c] = C9(e);
  let [u, p] = Te(e);
  k6(a, C8(e));
  return jsxs(Fragment, {
    children: [jsx(wy, {
      offsetX: r,
      offsetY: d,
      opacity: a,
      recordingKey: generateRecordingKey(t, e),
      rotation: u,
      scale: i,
      setOffsetX: o,
      setOffsetY: c,
      setOpacity: s,
      setRotation: p,
      setScale: n
    }), jsx(SK, {
      behaviorType: Xc.ScrollTransform
    }, 'preview')]
  });
}
let C0 = _$$l1;
let C1 = _$$c$6;
let C5 = kR({
  behaviorType: Xc.ScrollTransform,
  editName: 'scrollTransformTrigger',
  get: e => e?.trigger === 'THIS_LAYER_IN_VIEW' ? 'THIS_LAYER_IN_VIEW' : e?.trigger === 'OTHER_LAYER_IN_VIEW' ? 'OTHER_LAYER_IN_VIEW' : (e?.trigger, 'PAGE_HEIGHT'),
  update: (e, t) => {
    e && (e.trigger = t);
  }
});
let C2 = kR({
  behaviorType: Xc.ScrollTransform,
  editName: 'scrollTransformOtherLayerGUID',
  get: e => e?.otherLayer,
  update: (e, t) => {
    e.otherLayer = t;
  }
});
let C4 = kR({
  behaviorType: Xc.ScrollTransform,
  editName: 'scrollTransformReplay',
  get: e => !e?.playsOnce,
  update: (e, t) => {
    e.playsOnce = !t;
  }
});
let C3 = kN({
  behaviorType: Xc.ScrollTransform,
  editName: 'trigger',
  get: (e, t) => Number(Tl(e, t).opacity?.toFixed(2)) ?? 1,
  update: (e, t, i) => {
    Tl(e, i).opacity = t;
  }
});
let C8 = kA({
  behaviorType: Xc.ScrollTransform,
  get: (e, t) => Tl(e, t).transform
});
let C6 = kN({
  behaviorType: Xc.ScrollTransform,
  editName: 'scale',
  get: (e, t) => Number(Ta(e, t).toScale().x.toFixed(2)),
  update: (e, t, i) => {
    Tr(e, i, e => {
      let i = _$$s13.identity();
      let n = e.offset();
      i.translate(n.x, n.y);
      i.scale(t, t);
      i.rotate(e.toRadians());
      return i;
    });
  }
});
let C7 = kN({
  behaviorType: Xc.ScrollTransform,
  editName: 'offsetX',
  get: (e, t) => Number(Ta(e, t).offset().x.toFixed(2)),
  update: (e, t, i) => {
    Tr(e, i, e => {
      let i = _$$s13.identity();
      let n = e.offset();
      i.translate(t, n.y);
      let l = e.toScale();
      i.scale(l.x, l.y);
      i.rotate(e.toRadians());
      return i;
    });
  }
});
let C9 = kN({
  behaviorType: Xc.ScrollTransform,
  editName: 'offsetY',
  get: (e, t) => Number(Ta(e, t).offset().y.toFixed(2)),
  update: (e, t, i) => {
    Tr(e, i, e => {
      let i = _$$s13.identity();
      let n = e.offset();
      i.translate(n.x, t);
      let l = e.toScale();
      i.scale(l.x, l.y);
      i.rotate(e.toRadians());
      return i;
    });
  }
});
let Te = kN({
  behaviorType: Xc.ScrollTransform,
  editName: 'rotation',
  get: (e, t) => Number(Ta(e, t).toDegrees().toFixed(2)),
  update: (e, t, i) => {
    Tr(e, i, e => {
      let i = _$$s13.identity();
      let n = e.offset();
      i.translate(n.x, n.y);
      let l = e.toScale();
      i.scale(l.x, l.y);
      i.rotate(Math.PI / 180 * t);
      return i;
    });
  }
});
let Tt = kR({
  behaviorType: Xc.ScrollTransform,
  editName: 'easingType',
  get: e => Ts(e).easingType ?? 'OUT_CUBIC',
  update: (e, t) => {
    let i = Ts(e);
    let n = wd(i.easingType);
    i.easingType = t;
    t === 'CUSTOM_CUBIC' && n ? i.easingFunction = _$$oM.OUT_CUBIC : t !== 'CUSTOM_SPRING' || n ? t !== 'CUSTOM_CUBIC' && t !== 'CUSTOM_SPRING' && t !== 'SPRING' && (i.easingFunction = _$$oM[t]) : i.easingFunction = _$$oM.GENTLE_SPRING;
  }
});
let Ti = kR({
  behaviorType: Xc.ScrollTransform,
  editName: 'transitionDuration',
  get: e => Ts(e).transitionDuration ?? 0.3,
  update: (e, t) => {
    Ts(e).transitionDuration = t;
  }
});
let Tn = kR({
  behaviorType: Xc.ScrollTransform,
  editName: 'easingFunction',
  get: e => {
    let t = Ts(e);
    let i = t.easingFunction?.length === 4;
    return t.easingType === 'CUSTOM_SPRING' ? i ? t.easingFunction : _$$oM.GENTLE_SPRING : t.easingType === 'CUSTOM_CUBIC' ? i ? t.easingFunction : _$$oM.OUT_CUBIC : [];
  },
  update: (e, t) => {
    Ts(e).easingFunction = t;
  }
});
function Tl(e, t) {
  return e?.[`${t}State`] ?? {};
}
function Ta(e, t) {
  let i = Tl(e, t).transform;
  return i ? _$$s13.fromFigMatrix(i) : _$$s13.identity();
}
function Ts(e) {
  return e?.transition ?? {};
}
function Tr(e, t, i) {
  let n = `${t}State`;
  let l = e[n] ?? {};
  e[n] = l;
  let a = i(l.transform ? _$$s13.fromFigMatrix(l.transform) : _$$s13.identity());
  l.transform = a.toFigMatrix();
}
function To({
  onClick: e,
  recordingKey: t
}) {
  return jsx(_$$K2, {
    'aria-label': getI18nString('sites.panel.interactions_panel.back_tooltip'),
    'onClick': e,
    'recordingKey': t,
    'htmlAttributes': {
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': getI18nString('sites.panel.interactions_panel.back_tooltip')
    },
    'children': jsx(_$$C6, {})
  });
}
function Td({
  picker: e,
  onClose: t,
  codeBehaviorInfo: i
}) {
  let {
    codeComponentId,
    nodeIds
  } = i;
  let s = Sf(codeComponentId);
  let o = parsePxNumber(prototypeInteractionModalWidth);
  let {
    initialX,
    initialY,
    shouldPin
  } = e;
  let p = _$$I6(initialX, initialY, shouldPin, o, (e, t) => new Point(e, t));
  if (!codeComponentId) return null;
  let x = CodeComponentIdHandler.fromString(codeComponentId);
  if (!x) return null;
  let m = x.toString();
  if (nodeIds.length === 0) return null;
  let g = nodeIds[0];
  if (!g || !getSingletonSceneGraph().get(g)) return null;
  let f = [];
  for (let e of nodeIds) {
    let t = getSingletonSceneGraph().get(e);
    let i = t?.getCombinedCodeBehaviorPropAssignments(m);
    i && f.push(i);
  }
  if (f.length === 0) return null;
  let _ = function (e) {
    let t = {};
    for (let i of e) {
      let e = getSingletonSceneGraph();
      let n = {
        ...i.assignments
      };
      for (let [t, l] of Object.entries(i.defs)) {
        if (l.type === ComponentPropType.INSTANCE_SWAP) {
          let l = i.assignments[t];
          if (l && typeof l == 'string') {
            let i = [l];
            let a = _$$wd(i, e);
            a && (n[t] = a);
          }
        }
        n[t] = _$$dl(l.type, n[t]);
      }
      for (let [e, i] of Object.entries(n)) {
        let n = t[e];
        n ? typeof i == 'object' && typeof n == 'object' && 'image' in t[e] && 'image' in i ? n.image !== i.image ? t[e] = MIXED_MARKER : t[e] = i : n !== i && (t[e] = MIXED_MARKER) : t[e] = i;
      }
    }
    return t;
  }(f);
  let y = f[0];
  if (!y) return null;
  let v = Object.values(y.defs).sort((e, t) => e.sortPosition < t.sortPosition ? -1 : 1);
  let j = {
    guids: i.nodeIds,
    codeComponentId
  };
  v.forEach(e => {
    e.parameterConfig?.label?.value && (e.parameterConfig.label.value = Sh(e.parameterConfig.label.value, e.name));
    e.parameterConfig?.control === _$$Jr.SELECT && (e.parameterConfig.selectConfig.options = e.parameterConfig.selectConfig.options.map(e => ({
      ...e,
      label: Sh(e.label, e.value.value.toString())
    })));
  });
  return jsx(_$$bL2, {
    defaultPosition: p,
    width: 240,
    draggable: 'header',
    onClose: t,
    recordingKey: 'code-preset-picker-window',
    children: jsxs(_$$vo, {
      children: [shouldPin ? null : jsx(_$$i2, {
        position: 'top',
        offset: o / 2
      }), jsx(Y9, {
        children: jsx(_$$hE, {
          children: s
        })
      }), jsx(_$$nB, {
        padding: {
          top: 8,
          bottom: 8,
          left: 0,
          right: 8
        },
        children: jsx(_$$c1, {
          assignmentValues: _,
          behaviorAssignmentInfo: j,
          clearBehaviorVariableBinding: (e, t) => {
            _$$l.user('set-text-prop-assignment-on-preset', () => {
              for (let i of nodeIds) Fullscreen?.unbindCodeBehaviorPropAssignment(i, codeComponentId, e, t);
            });
          },
          containerWidth: O2.RESIZABLE_SIDEBAR,
          entrypointForInstanceSwapPicker: null,
          forBubbledProps: !1,
          guids: [],
          hideBindingButton: !0,
          hideIcon: !0,
          minHack: 0,
          pickerWidth: 240,
          sceneGraph: getSingletonSceneGraph(),
          submitBehaviorAssignment: (e, t) => {
            _$$l.user('set-text-prop-assignment-on-preset', () => {
              for (let i of nodeIds) Fullscreen?.setCodeBehaviorPropAssignment(i, m, e, t);
            });
          },
          typedPropDefs: v
        })
      })]
    })
  });
}
function Tc({
  behaviorType: e,
  picker: t,
  onClose: i,
  recordingKey: n
}) {
  let [s, r] = useState(!1);
  let [o, d] = useState([]);
  let c = useCallback(() => {
    if (o.length === 0) return;
    r(!0);
    let e = [...o];
    e.pop();
    d(e);
  }, [o]);
  let p = useCallback((e, t) => {
    r(!0);
    d([...o, {
      title: e,
      body: t
    }]);
  }, [o]);
  let x = useRef(p);
  x.current = p;
  let m = o.length > 0;
  let {
    title,
    body
  } = o[o.length - 1] || {};
  let f = e === Xc.Appear || e === Xc.Hover || e === Xc.Press || e === Xc.Focus || e === Xc.Cursor || e === Xc.Marquee || e === Xc.ScrollTransform;
  let _ = `details-${o.length}`;
  let b = parsePxNumber(prototypeInteractionModalWidth);
  let {
    initialX,
    initialY,
    shouldPin
  } = t;
  let k = _$$I6(initialX, initialY, shouldPin, b, (e, t) => new Point(e, t));
  return jsx(Ao, {
    title: jsx('div', {
      className: m ? 'styles-module--behaviorSettingsPickerTitleWithDetails--EdoDD styles-module--behaviorSettingsPickerTitle--U37nj header_modal--headerModalTitle--32hFx' : 'styles-module--behaviorSettingsPickerTitle--U37nj header_modal--headerModalTitle--32hFx',
      children: jsxs(_$$N10, {
        mode: 'popLayout',
        children: [m && jsx(_$$P7.div, {
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          exit: {
            opacity: 0,
            transition: {
              duration: 0,
              ease: 'easeOut'
            }
          },
          transition: {
            duration: 0,
            ease: 'easeOut'
          },
          children: jsx(To, {
            onClick: c,
            recordingKey: generateRecordingKey(n, 'backButton')
          })
        }, 'backButton'), jsx(_$$P7.span, {
          'layout': !0,
          'transition': {
            duration: 0,
            ease: 'easeOut'
          },
          'aria-label': getI18nString('sites.panel.interactions_panel.back_tooltip'),
          'onClick': c,
          'className': m ? 'styles-module--behaviorSettingsPickerDetailsBase--hHwua styles-module--behaviorSettingsPickerBase--9zoYy' : 'styles-module--behaviorSettingsPickerBase--9zoYy',
          'children': o.length >= 2 ? jsx('span', {
            className: kH,
            children: o[o.length - 2]?.title
          }) : jsx(Sr, {
            behaviorType: e
          })
        }, 'base'), m && jsxs(_$$P7.span, {
          initial: {
            opacity: 0,
            x: -20
          },
          animate: {
            opacity: 1,
            x: 0
          },
          exit: {
            opacity: 0,
            x: -20
          },
          transition: {
            duration: 0,
            ease: 'easeOut'
          },
          children: [jsx('span', {
            className: 'styles-module--behaviorSettingsPickerDetailsSeparator--nrdlA',
            children: '/'
          }), jsx('span', {
            className: kH,
            children: title
          })]
        }, _)]
      })
    }),
    headerSize: 'small',
    initialPosition: k,
    initialWidth: 240,
    contentContainerClassName: s ? 'styles-module--behaviorSettingsPickerContentAnimating--lnmnE' : void 0,
    onClose: i,
    recordingKey: n,
    arrowPosition: shouldPin ? void 0 : _$$F_.TOP,
    arrowRelativeX: shouldPin ? void 0 : b / 2,
    children: jsx(_$$N10, {
      mode: 'popLayout',
      initial: !1,
      onExitComplete: () => {
        r(!1);
      },
      children: m ? jsx(_$$P7.div, {
        initial: {
          opacity: 0,
          x: 100
        },
        animate: {
          opacity: 1,
          x: 0
        },
        exit: {
          opacity: 0,
          x: 100 / 3,
          transition: {
            duration: 0,
            ease: 'easeOut'
          }
        },
        transition: {
          duration: 0,
          ease: 'easeOut'
        },
        children: body
      }, _) : jsxs(_$$P7.div, {
        initial: {
          opacity: 0,
          x: -100
        },
        animate: {
          opacity: 1,
          x: 0
        },
        exit: {
          opacity: 0,
          x: -33.333333333333336,
          transition: {
            duration: 0,
            ease: 'easeOut'
          }
        },
        transition: {
          duration: 0,
          ease: 'easeOut'
        },
        children: [e === Xc.Appear && jsx(wk, {
          pushDetailsComponent: (e, t) => x.current(e, t),
          recordingKey: n
        }), e === Xc.ScrollTransform && jsx(CW, {
          pushDetailsComponent: (e, t) => x.current(e, t),
          recordingKey: n
        }), (e === Xc.Hover || e === Xc.Press || e === Xc.Focus) && jsx(SY, {
          behaviorType: e,
          recordingKey: n,
          pushDetailsComponent: (e, t) => x.current(e, t),
          showExtendedTransitionPropertiesView: !1
        }), e === Xc.ScrollParallax && jsx(CU, {
          recordingKey: n
        }), e === Xc.Cursor && jsx(Sv, {
          recordingKey: n
        }), e === Xc.Marquee && jsx(SN, {
          recordingKey: n
        }), isInvalidValue(e) && jsx(k8, {
          children: jsx(k0, {
            label: renderI18nText('fullscreen.mixed')
          })
        }), !isInvalidValue(e) && f && jsx(SK, {
          behaviorType: e
        }, 'preview')]
      }, 'body')
    })
  });
}
function Tx({
  show: e,
  rowRef: t,
  behaviorType: i,
  summaryText: n,
  onRemove: d,
  codeBehaviorInfo: c,
  codeBehaviorName: p,
  codeBehaviorIcon: x,
  codeComponent: m,
  recordingKey: g,
  selected: f,
  onClick: _
}) {
  let b = KH();
  let y = useSelector(Th);
  let [v, j] = useState(!1);
  let [k, w] = useState(!1);
  let [S, C] = useAtomValueAndSetter(noop);
  let [T, I] = useState(!1);
  let E = useHandleKeyboardEvent(g, 'keydown', e => {
    if (e.key !== 'Shift') return SKIP_RECORDING;
    I(!0);
  });
  let N = useHandleKeyboardEvent(g, 'keyup', e => {
    if (e.key !== 'Shift') return SKIP_RECORDING;
    I(!1);
  });
  useEffect(() => (document.addEventListener('keydown', E), document.addEventListener('keyup', N), () => {
    document.removeEventListener('keydown', E);
    document.removeEventListener('keyup', N);
  }), [E, N]);
  let A = useCallback(({
    source: e
  } = {}) => {
    e && e === 'outside' || Fullscreen?.setSelectedInteractions([]);
    e === 'outside' && T || (fullscreenValue.deselectProperty(), C([]));
  }, [C, T]);
  let {
    tooltipText,
    showTooltip
  } = QY(n);
  let O = useMemo(() => new Set(S.map(e => JSON.stringify(e))).size, [S]);
  let F = useMemo(() => f && y && O === 1 ? i === Xc.Code && c ? jsx(Td, {
    behaviorType: i,
    picker: y,
    onClose: A,
    codeBehaviorInfo: c,
    recordingKey: g
  }) : jsx(Tc, {
    behaviorType: i,
    picker: y,
    onClose: A,
    recordingKey: g
  }) : null, [f, y, i, c, A, g, O]);
  return e ? jsxs(Fragment, {
    children: [jsx(_$$Y5, {
      'ref': t,
      'aria-selected': f,
      'data-testid': `behavior-row-${i}`,
      'hideGrabber': !0,
      'onClick': e => _(e, i),
      'onMouseDown': e => {
        e.stopPropagation();
      },
      'onMouseEnter': () => {
        let e = [];
        Object.keys(b).forEach(t => {
          let n = parseSessionLocalID(t);
          if (!n) return;
          let l = i === Xc.Code && m;
          let a = _$$d11({
            nodeID: n,
            interactionID: defaultSessionLocalID,
            behaviorId: l ? {
              behaviorType: Xc.Code,
              codeComponentId: c?.codeComponentId
            } : {
              behaviorType: i
            }
          });
          e.push(a);
        });
        Fullscreen?.hoverInteractions(e);
        j(!0);
      },
      'onMouseLeave': () => {
        Fullscreen?.hoverInteractions([]);
        j(!1);
      },
      'recordingKey': generateRecordingKey(g, 'draggable-behavior-row-wrapper'),
      'selected': f,
      'children': jsx(_$$s8, {
        label: null,
        leftIcon: jsx(_$$YW, {
          'selected': f,
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': getI18nString('sites.panel.interactions_panel.interaction_settings'),
          'recordingKey': generateRecordingKey(g, 'icon'),
          'className': v && !k ? `${zY} ${kQ}` : kQ,
          'children': jsx(Ss, {
            behaviorType: i,
            codeBehaviorIcon: x
          })
        }),
        input: jsx(D8, {
          recordingKey: generateRecordingKey(g, 'behaviorName'),
          className: kZ,
          children: function ({
            behaviorType: e,
            summaryText: t,
            tooltipText: i,
            onMouseEnter: n,
            codeBehaviorName: a
          }) {
            return e === Xc.Code ? jsx('div', {
              className: kZ,
              children: jsx(Sr, {
                behaviorType: e,
                text: a
              })
            }) : jsxs('div', {
              className: kZ,
              children: [jsx(Sr, {
                behaviorType: e
              }), jsx('span', {
                'className': 'styles-module--summaryText--NAPGZ',
                'data-tooltip-type': KindEnum.TEXT,
                'data-tooltip': i,
                'onMouseEnter': n,
                'children': t && isValidValue(t) && jsxs(Fragment, {
                  children: ['\xA0\xB7\xA0', t]
                })
              })]
            });
          }({
            behaviorType: i,
            summaryText: n,
            tooltipText: tooltipText ?? void 0,
            onMouseEnter: e => showTooltip(e),
            codeBehaviorName: p
          })
        }),
        rightIcon: v && jsx('div', {
          onMouseEnter: () => {
            w(!0);
          },
          onMouseLeave: () => {
            w(!1);
          },
          children: jsx(Tm, {
            onClick: e => {
              e?.stopPropagation();
              d();
              (function (e, t, i) {
                let n = getSingletonSceneGraph();
                let l = Object.keys(t);
                let a = Array.from(new Set(Object.values(HL(n, l)).filter(e => e !== null)));
                trackEventAnalytics('sites_remove_interaction', {
                  behaviorType: e,
                  nodeIds: l,
                  responsiveSetIds: a,
                  codePresetName: e === Xc.Code ? i : void 0
                });
              })(i, b, m?.name);
            },
            recordingKey: generateRecordingKey(g, 'minus_button')
          })
        })
      })
    }), F]
  }) : null;
}
function Tm({
  onClick: e,
  recordingKey: t
}) {
  return jsx(_$$K2, {
    'aria-label': getI18nString('sites.panel.interactions_panel.remove_tooltip'),
    'onClick': e,
    'recordingKey': t,
    'htmlAttributes': {
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': getI18nString('sites.panel.interactions_panel.remove_tooltip')
    },
    'children': jsx(_$$O1, {})
  });
}
function Th(e) {
  return e.pickerShown?.id === _$$uR ? e.pickerShown : null;
}
let Tg = function (e) {
  return () => {
    let [t, i] = _$$lJ2(Xc.Code);
    let n = Array.isArray(t) ? function (e) {
      let t = e.filter(e => !!e || (kP || (reportError(_$$e2.MAKE, new Error('Expected code behavior on selected node but none found')), kP = !0), !1));
      return t.length !== 0 ? t : void 0;
    }(t) : t;
    let l = useCallback((t, l) => {
      _$$l.user(`sites-behavior-${e.behaviorType}-${e.editName}-change`, () => {
        if (!t) {
          if (l && Array.isArray(n)) {
            let e = n.filter(e => e.codeComponentId !== l);
            i(e.length > 0 ? e : null);
          } else {
            i(null);
          }
          return;
        }
        let a = e.create(t, l);
        a && i(a);
      });
    }, [i, n]);
    return [e.get(n, void 0), l];
  };
}({
  behaviorType: Xc.Code,
  editName: 'code',
  get: e => e ? e.filter(e => e?.codeComponentId !== void 0).map(e => ({
    codeComponentId: e.codeComponentId,
    codeBehaviorData: e.codeBehaviorData,
    isEnabled: !0
  })) : [],
  create: e => e && e.length > 0 ? e.map(e => ({
    codeComponentId: e.codeComponentId
  })) : [],
  update: (e, t) => {
    if (!t || t.length === 0) return kE.DELETE;
  }
});
let Tf = memo(({
  codeBehaviorsMap: e,
  ...t
}) => e.size === 0 ? null : jsx(T_, {
  codeBehaviorsMap: e,
  ...t
}));
let T_ = memo(({
  codeBehaviorsMap: e,
  recordingKey: t,
  makePresetRowRefCallback: i,
  onPresetClick: n,
  isPresetSelected: a,
  removeCodeBehavior: s
}) => jsx(Fragment, {
  children: Array.from(e.entries()).map(([e, r], o) => jsx(Tb, {
    codeComponentId: e,
    nodeIds: r,
    index: o,
    recordingKey: t,
    makePresetRowRefCallback: i,
    onPresetClick: n,
    isPresetSelected: a,
    removeCodeBehavior: s
  }, `${e}-${o}`))
}));
let Tb = memo(({
  codeComponentId: e,
  nodeIds: t,
  recordingKey: i,
  makePresetRowRefCallback: n,
  onPresetClick: s,
  isPresetSelected: r,
  removeCodeBehavior: d
}) => {
  let {
    codeComponent,
    name,
    icon
  } = function (e) {
    return {
      codeComponent: useAtomWithSubscription(Sg(e)),
      name: Sf(e),
      icon: function (e) {
        let t = useAtomWithSubscription(Sg(e));
        return t?.codeBehaviorData?.icon;
      }(e)
    };
  }(e);
  let x = useCallback(t => s(t, Xc.Code, e), [s, e]);
  let m = useCallback(() => d(e), [d, e]);
  let h = useCallback(t => n(`${Xc.Code}-${e}`)(t), [n, e]);
  return codeComponent ? jsx(Tx, {
    behaviorType: Xc.Code,
    codeBehaviorIcon: icon,
    codeBehaviorInfo: {
      codeComponentId: e,
      nodeIds: t
    },
    codeBehaviorName: name,
    codeComponent,
    onClick: x,
    onRemove: m,
    recordingKey: generateRecordingKey(i, `codeRow-${name}`),
    rowRef: h,
    selected: r(Xc.Code, e),
    show: !0
  }) : null;
});
let Ty = (e, t) => {
  let i = getSingletonSceneGraph();
  Object.keys(e).forEach(e => {
    let n = i.get(e);
    if (!n) return;
    let l = n.behaviors?.[Xc.Code] || [];
    let a = t(l);
    a.length !== l.length && _$$l.user('sites-behavior-code-change', () => {
      let e = {
        ...n.behaviors,
        [Xc.Code]: a
      };
      NodeTsApi?.setBehaviors(e, i.nodeContext);
    });
  });
};
function Tv(e, t) {
  Ty(t, t => t.findIndex(t => t.codeComponentId === e.codeComponentId) >= 0 ? t : [...t, e]);
}
var Tj = (e => (e[e.FIRST_PARTY = 0] = 'FIRST_PARTY', e[e.LOCAL = 1] = 'LOCAL', e))(Tj || {});
function Tk(e) {
  let t = e.type;
  switch (t) {
    case 0:
      return e.preset.asset.assetId;
    case 1:
      return e.id;
    default:
      throwTypeError(t);
  }
}
function Tw(e) {
  let t = e.type;
  switch (t) {
    case 0:
      return e.preset.nodeTypes ?? [];
    case 1:
      return e.codeBehaviorData.nodeTypes;
    default:
      throwTypeError(t);
  }
}
let TE = [Xc.Cursor];
let TN = 'interactionsPanel.createActionTrigger';
let TR = e => e && isValidValue(e);
function TA(e) {
  let t = useRef(null);
  let [i, n] = TO();
  let [d, c] = TF();
  let [p, x] = TM();
  let [m, g] = TD();
  let [f, _] = Tz();
  let [y, v] = TB();
  let [j, k] = T$();
  let [w, S] = TU();
  let C = TR(i);
  let T = TR(d);
  let I = TR(p);
  let E = TR(m);
  let N = TR(j);
  let A = TR(w);
  let L = TR(f);
  let P = TR(y);
  let O = TK();
  let F = TH();
  let M = function () {
    let [e] = C6('from');
    let [t] = C3('from');
    let [i] = C7('from');
    let [n] = C9('from');
    let [l] = Te('from');
    let [a] = C6('to');
    let [s] = C3('to');
    let [r] = C7('to');
    let [o] = C9('to');
    let [d] = Te('to');
    let c = [];
    if (isInvalidValue(e) || isInvalidValue(t) || isInvalidValue(a) || isInvalidValue(s)) return '';
    let p = s - t;
    p > 0 ? c.push(getI18nString('sites.panel.interactions_panel.fade_in')) : p < 0 && c.push(getI18nString('sites.panel.interactions_panel.fade_out'));
    let x = a - e;
    x < 0 ? c.push(getI18nString('sites.panel.interactions_panel.shrink')) : x > 0 && c.push(getI18nString('sites.panel.interactions_panel.grow'));
    (i !== r || n !== o) && c.push(getI18nString('sites.panel.interactions_panel.shift'));
    l !== d && c.push(getI18nString('sites.panel.interactions_panel.spin'));
    return c.length > 0 ? c.join(', ') : '';
  }();
  let D = Tq();
  let z = TX();
  let B = function () {
    let [e] = S8();
    let [t] = S4();
    let [i] = S6();
    let [n] = S7();
    let [l] = S9();
    return S2({
      scale: e,
      opacity: t,
      offsetX: i,
      offsetY: n,
      rotation: l
    });
  }();
  let U = function () {
    let [e] = Ca();
    let [t] = Cn();
    let [i] = Cs();
    let [n] = Cr();
    let [l] = Co();
    return S2({
      scale: e,
      opacity: t,
      offsetX: i,
      offsetY: n,
      rotation: l
    });
  }();
  let [K, H] = wI();
  let q = TP();
  let X = useSelector(_$$Cy);
  let [V, G] = useAtomValueAndSetter(noop);
  let W = HS();
  let {
    selectedInteractions,
    selectedNoodleIds
  } = _$$Ay9(W, !0);
  let [Z, Q] = useAtomValueAndSetter(_$$u9);
  let ee = KH();
  let et = selectCurrentFile();
  let ei = _$$h16(TN);
  let {
    toggleDropdown
  } = _$$B6(ei);
  let el = _$$a16();
  let ea = useSelector(_$$n12);
  let es = useRef({});
  let [er, eo] = useState(null);
  let [ec] = Tg();
  let eu = useCallback(e => {
    Tv({
      codeComponentId: e,
      isEnabled: !0
    }, ee);
  }, [ee]);
  let ep = useCallback(e => {
    Ty(ee, t => t.filter(t => t.codeComponentId !== e));
  }, [ee]);
  useEffect(() => {
    G([]);
  }, [ee, G]);
  let ex = useCallback((e, t) => {
    let i = e === Xc.Code && t ? `${e}-${t}` : e;
    let n = es.current[i];
    if (!n) {
      eo(i);
      return;
    }
    let l = _$$cn(n, 240);
    fullscreenValue.updateAppModel({
      currentSelectedProperty: {
        type: NodePropertyCategory.BEHAVIOR,
        indices: []
      }
    });
    _$$dT(l, !0);
    G([e === Xc.Code && t ? {
      type: Xc.Code,
      componentId: t
    } : e]);
    let a = [];
    Object.keys(ee).forEach(i => {
      let n = parseSessionLocalID(i);
      n && a.push(_$$d11({
        nodeID: n,
        interactionID: defaultSessionLocalID,
        behaviorId: {
          behaviorType: e,
          codeComponentId: t
        }
      }));
    });
    Fullscreen?.setSelectedInteractions(a);
  }, [G, ee]);
  useEffect(() => {
    let e = [];
    for (let t of selectedNoodleIds) {
      let i = _$$s12(t);
      if (i && i.interactionID === defaultSessionLocalID && i.behaviorId) {
        let {
          behaviorType,
          codeComponentId
        } = i.behaviorId;
        behaviorType === Xc.Code && codeComponentId ? e.push({
          type: Xc.Code,
          componentId: codeComponentId
        }) : e.push(behaviorType);
      }
    }
    G(e);
  }, [selectedNoodleIds, G]);
  let em = useCallback(e => t => {
    if (t) {
      if (es.current[e] = t, er === e) {
        eo(null);
        let [t, i] = e.split('-');
        ex(t, i);
      }
    } else {
      delete es.current[e];
    }
  }, [er, ex]);
  let eh = (e, t) => function (e, t, i) {
    let n = getSingletonSceneGraph();
    let l = Object.keys(t);
    let a = Array.from(new Set(Object.values(HL(n, l)).filter(e => e !== null)));
    trackEventAnalytics('sites_add_interaction', {
      behaviorType: e,
      nodeIds: l,
      responsiveSetIds: a,
      codePresetName: e === Xc.Code ? i : void 0
    });
  }(e, ee, t);
  let eg = async (e, t) => {
    switch (e) {
      case Xc.Appear:
        n(!C);
        ex(Xc.Appear);
        eh(Xc.Appear);
        break;
      case Xc.Hover:
        c(!T);
        ex(Xc.Hover);
        eh(Xc.Hover);
        break;
      case Xc.Press:
        x(!I);
        ex(Xc.Press);
        eh(Xc.Press);
        break;
      case Xc.Focus:
        g(!E);
        ex(Xc.Focus);
        eh(Xc.Focus);
        break;
      case Xc.ScrollParallax:
        _(!L);
        ex(Xc.ScrollParallax);
        eh(Xc.ScrollParallax);
        break;
      case Xc.ScrollTransform:
        v(!P);
        ex(Xc.ScrollTransform);
        eh(Xc.ScrollTransform);
        break;
      case Xc.Cursor:
        k(!N);
        ex(Xc.Cursor);
        eh(Xc.Cursor);
        break;
      case Xc.Marquee:
        S(!A);
        ex(Xc.Marquee);
        eh(Xc.Marquee);
        break;
      case Xc.Code:
        {
          if (!t) break;
          let e = Tk(t);
          eu(e);
          ex(Xc.Code, e);
          t.type === Tj.FIRST_PARTY ? (await _$$e14(t.preset.asset), eh(Xc.Code, t.preset.asset.name)) : eh(Xc.Code);
        }
    }
  };
  let ef = useCallback((e, t) => V.some(i => e === Xc.Code && t ? typeof i == 'object' && i.type === Xc.Code && i.componentId === t : i === e), [V]);
  let e_ = useCallback((e, t) => {
    let i = e.event;
    i.stopPropagation();
    let n = i.clipboardData || window.clipboardData;
    let l = {};
    switch (V.forEach(e => {
      let t = typeof e == 'object' ? e.type : e;
      l[t] = q[t];
    }), t) {
      case zy.COPY:
        {
          let t = JSON.parse(JSON.stringify(l));
          let i = JSON.parse(JSON.stringify(selectedInteractions));
          let a = _$$lg2(i);
          let s = {};
          V.length > 0 && (s.behaviors = t);
          a.length > 0 && (s.prototypeInteractions = a);
          let r = _$$fG(et?.key || null, s);
          if (!r) break;
          _$$C1(n, r, '');
          e.accept();
        }
    }
  }, [q, et?.key, V, selectedInteractions]);
  let eb = useCallback((e, t, i) => {
    let n = e.metaKey || e.ctrlKey;
    let l = t === Xc.Code && i ? {
      type: Xc.Code,
      componentId: i
    } : t;
    let a = ef(t, i);
    let s = [];
    Z?.focus();
    n ? s = a ? V.filter(e => t === Xc.Code && i ? !(typeof e == 'object' && e.type === Xc.Code && e.componentId === i) : e !== t) : [...V, l] : (selectedInteractions.length > 0 && Fullscreen?.setSelectedInteractions([]), s = V.length > 1 ? [l] : a ? [] : [l]);
    G(s);
    let o = [];
    s.forEach(e => {
      Object.keys(ee).forEach(t => {
        let i = parseSessionLocalID(t);
        if (!i) return;
        let n = typeof e == 'object' && e.type === Xc.Code && 'componentId' in e;
        let l = _$$d11({
          nodeID: i,
          interactionID: defaultSessionLocalID,
          behaviorId: n ? {
            behaviorType: Xc.Code,
            codeComponentId: e.componentId
          } : {
            behaviorType: e
          }
        });
        o.push(l);
      });
    });
    Fullscreen?.setSelectedInteractions([..._$$wU(selectedInteractions), ...o]);
    s.length !== 1 || n ? fullscreenValue.hidePicker() : ex(t, i);
  }, [ef, Z, selectedInteractions, V, G, ex, ee]);
  let ey = function () {
    let e = _$$kl('containsResponsiveSets');
    let t = _$$kl('containsSitesLayouts');
    let i = !e && t;
    return !0 === i && !isInvalidValue(i);
  }();
  let ev = function ({
    doesAlreadyHaveBehaviorType: e,
    behaviorCallback: t,
    isLayoutNodeSelected: i,
    appliedCodeBehaviors: n
  }) {
    let s = _$$kl('nodesAreAllStacksOrText');
    let d = KH();
    let c = function () {
      let e = _$$mU();
      useEffect(() => {
        _$$cF2() && Az(e);
      }, [e]);
      return e.map(e => ({
        type: Tj.FIRST_PARTY,
        preset: e
      }));
    }();
    let p = function () {
      let e = useAtomWithSubscription(AssetAtomMap[PrimaryWorkflowEnum.CODE_COMPONENT].local);
      return getFeatureFlags().prototype_code_presets_creation ? Object.entries(e).filter(([e, t]) => t.isCodeBehavior).map(([e, t]) => ({
        type: Tj.LOCAL,
        id: e,
        name: t.name,
        codeBehaviorData: t.codeBehaviorData
      })) : [];
    }();
    let x = _$$kl('isInFixedScrollingTree');
    let m = _$$kl('isInStickyScrollingTree');
    let g = x || m;
    let f = !0 === g || isInvalidValue(g);
    let _ = [{
      separator: !0,
      displayText: '',
      hidden: !Fullscreen?.isSelectionContainedInStateOrStateInstance()
    }, {
      type: Xc.Hover,
      icon: jsx(Ss, {
        behaviorType: Xc.Hover,
        disabled: e(Xc.Hover)
      }),
      displayText: getI18nString('sites.panel.interactions_panel.hover_behavior'),
      disabled: e(Xc.Hover),
      isChecked: !1,
      callback: () => t(Xc.Hover),
      recordingKey: 'hover',
      className: BP
    }, {
      type: Xc.Press,
      icon: jsx(Ss, {
        behaviorType: Xc.Press,
        disabled: e(Xc.Press)
      }),
      displayText: getI18nString('sites.panel.interactions_panel.press_behavior'),
      hidden: !1,
      disabled: e(Xc.Press),
      isChecked: !1,
      callback: () => t(Xc.Press),
      recordingKey: 'press',
      className: BP
    }, {
      type: Xc.Focus,
      icon: jsx(Ss, {
        behaviorType: Xc.Focus,
        disabled: e(Xc.Focus)
      }),
      displayText: getI18nString('sites.panel.interactions_panel.focus_behavior'),
      hidden: !0,
      disabled: e(Xc.Focus),
      isChecked: !1,
      callback: () => t(Xc.Focus),
      recordingKey: 'focus',
      className: BP
    }, {
      type: Xc.Appear,
      icon: jsx(Ss, {
        behaviorType: Xc.Appear,
        disabled: e(Xc.Appear)
      }),
      displayText: getI18nString('sites.panel.interactions_panel.appear_behavior'),
      disabled: e(Xc.Appear),
      isChecked: !1,
      callback: () => t(Xc.Appear),
      recordingKey: 'appear',
      className: BP
    }, {
      type: Xc.ScrollParallax,
      icon: jsx(Ss, {
        behaviorType: Xc.ScrollParallax,
        disabled: f || e(Xc.ScrollParallax)
      }),
      displayText: getI18nString('sites.panel.interactions_panel.scroll_parallax_behavior'),
      disabled: f || e(Xc.ScrollParallax),
      isChecked: !1,
      callback: () => t(Xc.ScrollParallax),
      recordingKey: 'scrollParallax',
      className: BP
    }, {
      type: Xc.ScrollTransform,
      icon: jsx(Ss, {
        behaviorType: Xc.ScrollTransform,
        disabled: e(Xc.ScrollTransform)
      }),
      displayText: getI18nString('sites.panel.interactions_panel.scroll_transform_behavior'),
      disabled: e(Xc.ScrollTransform),
      isChecked: !1,
      callback: () => t(Xc.ScrollTransform),
      recordingKey: 'scrollTransform',
      className: BP
    }, {
      type: Xc.Cursor,
      icon: jsx(Ss, {
        behaviorType: Xc.Cursor,
        disabled: e(Xc.Cursor)
      }),
      displayText: getI18nString('sites.panel.interactions_panel.cursor_behavior'),
      disabled: e(Xc.Cursor),
      isChecked: !1,
      callback: () => t(Xc.Cursor),
      recordingKey: 'cursor',
      className: BP
    }, {
      type: Xc.Marquee,
      icon: jsx(Ss, {
        behaviorType: Xc.Marquee,
        disabled: e(Xc.Marquee)
      }),
      displayText: getI18nString('sites.panel.interactions_panel.marquee_behavior'),
      hidden: !s,
      disabled: e(Xc.Marquee),
      isChecked: !1,
      callback: () => t(Xc.Marquee),
      recordingKey: 'marquee',
      className: BP
    }];
    let y = !0;
    function v(i) {
      let a = e(Xc.Code, Tk(i)) || function (e, t) {
        let i = Tw(e);
        return !!i && i.length !== 0 && t.some(e => i.some(t => e.codeBehaviorData?.nodeTypes?.includes(t)));
      }(i, n);
      let s = function (e) {
        let t = e.type;
        switch (t) {
          case 0:
            return e.preset.icon ?? '';
          case 1:
            return e.codeBehaviorData.icon;
          default:
            throwTypeError(t);
        }
      }(i);
      let o = function (e) {
        let t = e.type;
        switch (t) {
          case 0:
            return Sh(e.preset.name);
          case 1:
            return Sh(e.codeBehaviorData.name, e.name);
          default:
            throwTypeError(t);
        }
      }(i);
      let d = Tw(i).map(e => GraphicObjectTypes[e]);
      let c = Fullscreen?.isCodeBehaviorValidForSelection(d);
      !a && c && (y = !1);
      return {
        type: Xc.Code,
        icon: jsx(Ss, {
          behaviorType: Xc.Code,
          codeBehaviorIcon: s,
          disabled: a
        }),
        displayText: o,
        disabled: a,
        hidden: !c,
        isChecked: !1,
        callback: () => t(Xc.Code, i),
        recordingKey: `code_${o}`,
        className: BP
      };
    }
    let j = c.map(v);
    let k = p.map(v);
    _.push({
      hidden: !1,
      disabled: y,
      children: j,
      icon: jsx('div', {
        style: {
          opacity: y ? 0.5 : 1
        },
        children: jsx(_$$A22, {})
      }),
      recordingKey: 'code_presets_submenu_item',
      displayText: getI18nString('sites.code_behaviors.submenu_item.name'),
      className: BP
    });
    getFeatureFlags().prototype_code_presets_creation && (_.push(_$$w7), _.push({
      icon: jsx(_$$t1, {}),
      recordingKey: 'code_presets_add_custom_interaction',
      displayText: getI18nString('sites.code_behaviors.add_custom_interaction'),
      callback: () => {
        _$$l.user('create-new-code-interaction', () => {
          let e = Fullscreen?.createNewCodeInteraction('interactions_panel');
          if (e) {
            fullscreenValue.triggerAction('commit');
            let t = getSingletonSceneGraph().get(e);
            if (t) {
              Tv({
                codeComponentId: CodeComponentIdHandler.fromLocalNodeIdStr(e),
                isEnabled: !0
              }, d);
              let i = Object.keys(d)[0];
              OY(t, {
                targetNodeId: i ?? null,
                exampleObject: null
              });
            }
          }
        });
      },
      className: BP
    }));
    _.push(...k);
    i && (_ = _.filter(e => TE.includes(e.type)));
    return _;
  }({
    doesAlreadyHaveBehaviorType: (e, t) => {
      switch (e) {
        case Xc.Appear:
          return C;
        case Xc.Hover:
          return T;
        case Xc.Press:
          return I;
        case Xc.Focus:
          return E;
        case Xc.ScrollParallax:
          return L;
        case Xc.ScrollTransform:
          return P;
        case Xc.Cursor:
          return N;
        case Xc.Marquee:
          return A;
        case Xc.Code:
          if (!getFeatureFlags().sts_code_preset_multiple_presets) return ec.length > 0;
          return ec.some(e => !!t && e.codeComponentId === t);
        default:
          return !1;
      }
    },
    behaviorCallback: eg,
    isLayoutNodeSelected: ey,
    appliedCodeBehaviors: ec
  });
  let ej = ea.length > 0;
  let ek = jsx(Tx, {
    selected: ef(Xc.Appear),
    onClick: eb,
    show: C,
    rowRef: em(Xc.Appear),
    behaviorType: Xc.Appear,
    summaryText: O,
    onRemove: () => {
      n(!1);
    },
    recordingKey: generateRecordingKey(e.recordingKey, 'appearRow')
  });
  let ew = jsx(Tx, {
    selected: ef(Xc.ScrollParallax),
    onClick: eb,
    show: L,
    rowRef: em(Xc.ScrollParallax),
    behaviorType: Xc.ScrollParallax,
    summaryText: F,
    onRemove: () => {
      _(!1);
    },
    recordingKey: generateRecordingKey(e.recordingKey, 'scrollParallaxRow')
  });
  let eS = jsx(Tx, {
    selected: ef(Xc.ScrollTransform),
    onClick: eb,
    show: P,
    rowRef: em(Xc.ScrollTransform),
    behaviorType: Xc.ScrollTransform,
    summaryText: M,
    onRemove: () => {
      v(!1);
    },
    recordingKey: generateRecordingKey(e.recordingKey, 'scrollTransformRow')
  });
  let eC = jsx(Tx, {
    selected: ef(Xc.Cursor),
    onClick: eb,
    show: N,
    rowRef: em(Xc.Cursor),
    behaviorType: Xc.Cursor,
    summaryText: z,
    onRemove: () => {
      k(!1);
    },
    recordingKey: generateRecordingKey(e.recordingKey, 'cursorRow')
  });
  let eT = jsx(Tx, {
    selected: ef(Xc.Marquee),
    onClick: eb,
    show: A,
    rowRef: em(Xc.Marquee),
    behaviorType: Xc.Marquee,
    summaryText: D,
    onRemove: () => {
      S(!1);
    },
    recordingKey: generateRecordingKey(e.recordingKey, 'marqueeRow')
  });
  let eI = jsx(Tx, {
    selected: ef(Xc.Hover),
    onClick: eb,
    show: T,
    rowRef: em(Xc.Hover),
    behaviorType: Xc.Hover,
    onRemove: () => {
      c(!1);
    },
    summaryText: B,
    recordingKey: generateRecordingKey(e.recordingKey, 'hoverRow')
  });
  let eE = jsx(Tx, {
    selected: ef(Xc.Focus),
    onClick: eb,
    show: E,
    rowRef: em(Xc.Focus),
    behaviorType: Xc.Focus,
    onRemove: () => {
      g(!1);
    },
    recordingKey: generateRecordingKey(e.recordingKey, 'focusRow')
  });
  let eN = jsx(Tx, {
    selected: ef(Xc.Press),
    onClick: eb,
    show: I,
    rowRef: em(Xc.Press),
    behaviorType: Xc.Press,
    onRemove: () => {
      x(!1);
    },
    summaryText: U,
    recordingKey: generateRecordingKey(e.recordingKey, 'pressRow')
  });
  let eA = K === 'PAGE_LOAD' ? 'loading' : 'scrolling';
  let eL = $5(el, 'loading', !0) || C && eA === 'loading';
  let eP = eL ? jsxs(qd.Provider, {
    value: 'loading',
    children: [TL(renderI18nText('sites.panel.interaction_category.loading')), jsx(_$$y10, {
      filterInteractionCategory: _$$J12.NORMAL
    }, 0), eA === 'loading' && ek]
  }) : null;
  let eO = $5(el, 'video', !0);
  let eF = eO ? jsxs(qd.Provider, {
    value: 'video',
    children: [TL(renderI18nText('sites.panel.interaction_category.video')), jsx(_$$y10, {
      filterInteractionCategory: _$$J12.NORMAL
    }, 1)]
  }) : null;
  let eM = function (e, t) {
    let i = {
      motion: new Map(),
      mouse: new Map(),
      scrolling: new Map(),
      uncategorized: new Map()
    };
    e.forEach(({
      nodeId: e,
      componentId: n
    }) => {
      let l;
      let a = CodeComponentIdHandler.fromString(n);
      let s = a ? t[a] : void 0;
      switch (s?.codeBehaviorData?.category ?? '') {
        case 'motion':
          l = i.motion;
          break;
        case 'mouse':
          l = i.mouse;
          break;
        case 'scrolling':
          l = i.scrolling;
          break;
        default:
          l = i.uncategorized;
      }
      l.has(n) ? l.get(n).push(e) : l.set(n, [e]);
    });
    return i;
  }(useMemo(() => {
    let e = [];
    if (!ec || ec.length === 0) return [];
    for (let t of Object.keys(ee)) {
      let i = getSingletonSceneGraph().get(t);
      i?.behaviors?.[Xc.Code] && i.behaviors[Xc.Code].forEach(i => {
        i.codeComponentId && e.push({
          nodeId: t,
          componentId: i.codeComponentId
        });
      });
    }
    return e;
  }, [ee, ec]), useAtomWithSubscription(useMemo(() => atom(e => {
    let t = e(AssetAtomMap[PrimaryWorkflowEnum.CODE_COMPONENT].local);
    let i = e(AssetAtomMap[PrimaryWorkflowEnum.CODE_COMPONENT].subscribed);
    return {
      ...t,
      ...i
    };
  }), [])));
  let eD = useMemo(() => ({
    recordingKey: e.recordingKey,
    makePresetRowRefCallback: em,
    onPresetClick: eb,
    isPresetSelected: ef,
    removeCodeBehavior: ep
  }), [e.recordingKey, em, eb, ef, ep]);
  let ez = C && eA === 'scrolling' || L || P || eM.scrolling.size > 0;
  let eB = ez ? jsxs(Fragment, {
    children: [TL(renderI18nText('sites.panel.interaction_category.scrolling')), eA === 'scrolling' && ek, ew, eS, jsx(Tf, {
      codeBehaviorsMap: eM.scrolling,
      ...eD
    })]
  }) : null;
  let e$ = $5(el, 'mouse', !0) || T || E || I || N || eM.mouse.size > 0;
  let eU = e$ ? jsxs(qd.Provider, {
    value: 'mouse',
    children: [TL(renderI18nText('sites.panel.interaction_category.mouse')), eI, eE, eN, eC, jsx(Tf, {
      codeBehaviorsMap: eM.mouse,
      ...eD
    }), jsx(_$$y10, {
      filterInteractionCategory: _$$J12.NORMAL
    }, 2)]
  }) : null;
  let eK = eM.motion.size > 0 || A;
  let eH = eK ? jsxs(Fragment, {
    children: [TL(renderI18nText('sites.panel.interaction_category.motion')), jsx(Tf, {
      codeBehaviorsMap: eM.motion,
      ...eD
    }), eT]
  }) : null;
  let eq = eM.uncategorized.size > 0;
  let eX = eq ? jsxs(Fragment, {
    children: [TL(renderI18nText('sites.panel.interaction_category.code')), jsx(Tf, {
      codeBehaviorsMap: eM.uncategorized,
      ...eD
    })]
  }) : null;
  let eV = $5(el, 'keyboard', !0);
  let eG = eV ? jsxs(qd.Provider, {
    value: 'keyboard',
    children: [TL(renderI18nText('sites.panel.interaction_category.key_gamepad')), jsx(_$$y10, {
      filterInteractionCategory: _$$J12.NORMAL
    }, 3)]
  }) : null;
  let eW = !(eL || eO || ez || e$ || eV || eK || eq) && !ej;
  return jsx(_$$k10, {
    name: 'interactions_panel',
    children: jsx(_$$Zk, {
      children: jsxs(_$$vL, {
        name: 'Sites Interaction Panel',
        handleClipboard: e_,
        ref: Q,
        children: [jsx(_$$I5, {
          isEmpty: eW,
          faded: eW,
          titleTx: renderI18nText('sites.panel.interactions_panel.interactions'),
          onClick: () => {
            toggleDropdown();
            _$$x6();
          },
          ref: t,
          children: jsx(_$$t0, {
            addButtonPressed(e) {
              let i = [];
              for (let t of (G([]), Object.keys(ee))) {
                let n = function (e, t, i) {
                  let n = parseSessionLocalID(Fullscreen?.generateUniqueID());
                  if (!n) throw new Error('No interaction ID');
                  let {
                    connectionType,
                    navigationType
                  } = e;
                  return {
                    id: n,
                    sourceNodeID: parseSessionLocalID(t) ?? defaultSessionLocalID,
                    event: {
                      interactionType: _$$a17(i, connectionType, !0)
                    },
                    stateManagementVersion: 1,
                    actions: [{
                      connectionType,
                      navigationType
                    }]
                  };
                }(e, t, el);
                i.push(n);
              }
              let n = i.map(e => _$$d11({
                nodeID: e.sourceNodeID,
                interactionID: e.id
              }));
              if (n.length > 0) {
                Fullscreen?.setSelectedInteractions(n);
                let e = _$$cn(t.current);
                let i = new Point(e.x, e.y);
                _$$dT(i, !1);
              }
              let l = [...X, ...i, ...ea];
              fullscreenValue.updateSelectionProperties({
                prototypeInteractions: l
              }, {
                shouldCommit: yesNoTrackingEnum.NO_BUT_TRACK_AS_EDIT
              });
              fullscreenValue.commit();
            },
            isNestedInConditional: !1,
            renderButton: !0,
            presetInteractions: ev,
            skipPaywall: !1,
            recordingKey: TN,
            isLayoutNodeSelected: ey,
            dataTestId: 'sites_interactions_dropdown'
          })
        }), eP, eF, eB, eU, eG, eH, eX, jsx(_$$y10, {
          filterInteractionCategory: _$$J12.INHERITED_INTERNAL
        }, 4)]
      })
    })
  });
}
function TL(e) {
  return jsx('div', {
    className: 'styles-module--categoryRow--UAzyy',
    children: jsxs(_$$JU, {
      children: [e, ' ']
    })
  });
}
let TP = () => {
  let e = _$$kl(Xc.Appear);
  let t = _$$kl(Xc.ScrollParallax);
  let i = _$$kl(Xc.ScrollTransform);
  let n = _$$kl(Xc.Marquee);
  let l = _$$kl(Xc.Cursor);
  let a = _$$kl(Xc.Hover);
  let s = _$$kl(Xc.Focus);
  let r = _$$kl(Xc.Press);
  let o = _$$kl(Xc.Code);
  return {
    [Xc.Appear]: e,
    [Xc.ScrollParallax]: t,
    [Xc.ScrollTransform]: i,
    [Xc.Marquee]: n,
    [Xc.Cursor]: l,
    [Xc.Hover]: a,
    [Xc.Focus]: s,
    [Xc.Press]: r,
    [Xc.Code]: o
  };
};
let TO = kR({
  behaviorType: Xc.Appear,
  editName: 'appear',
  get: e => !!e,
  create: e => {
    if (e) {
      return {
        trigger: 'THIS_LAYER_IN_VIEW',
        enterState: Eu.FADE_IN,
        enterTransition: _$$gq2,
        exitState: Eu.NONE,
        exitTransition: _$$gq2
      };
    }
  },
  update: (e, t) => {
    if (!t) return kE.DELETE;
  }
});
let TF = kR({
  behaviorType: Xc.Hover,
  editName: 'hover',
  get: e => !!e,
  create: e => {
    if (e) {
      return {
        state: Eu.NONE,
        transition: LU
      };
    }
  },
  update: (e, t) => {
    if (!t) return kE.DELETE;
  }
});
let TM = kR({
  behaviorType: Xc.Press,
  editName: 'press',
  get: e => !!e,
  create: e => {
    if (e) {
      return {
        state: Eu.NONE,
        transition: LU
      };
    }
  },
  update: (e, t) => {
    if (!t) return kE.DELETE;
  }
});
let TD = kR({
  behaviorType: Xc.Focus,
  editName: 'focus',
  get: e => !!e,
  create: e => {
    if (e) {
      return {
        state: Eu.NONE,
        transition: LU
      };
    }
  },
  update: (e, t) => {
    if (!t) return kE.DELETE;
  }
});
let Tz = kR({
  behaviorType: Xc.ScrollParallax,
  editName: 'scrollParallax',
  get: e => !!e,
  create: e => {
    if (e) {
      return {
        speed: _$$B0
      };
    }
  },
  update: (e, t) => {
    if (!t) return kE.DELETE;
  }
});
let TB = kR({
  behaviorType: Xc.ScrollTransform,
  editName: 'scrollTransform',
  get: e => !!e,
  create: e => {
    if (e) {
      return {
        trigger: 'PAGE_HEIGHT',
        fromState: Eu.NONE,
        transition: LU,
        toState: Eu.NONE
      };
    }
  },
  update: (e, t) => {
    if (!t) return kE.DELETE;
  }
});
let T$ = kR({
  behaviorType: Xc.Cursor,
  editName: 'cursor',
  get: e => !!e,
  create: e => {
    if (e) {
      return {
        hotspotX: 0,
        hotspotY: 0,
        cursorGuid: defaultSessionLocalID
      };
    }
  },
  update: (e, t) => {
    if (!t) return kE.DELETE;
  }
});
let TU = kR({
  behaviorType: Xc.Marquee,
  editName: 'marquee',
  get: e => !!e,
  create: e => {
    if (e) {
      return {
        speed: JQ,
        direction: 'LEFT',
        shouldLoopInfinitely: !0
      };
    }
  },
  update: (e, t) => {
    if (!t) return kE.DELETE;
  }
});
let TK = kL({
  behaviorType: Xc.Appear,
  get: e => {
    switch (e?.trigger) {
      case 'PAGE_LOAD':
        return renderI18nText('sites.panel.interactions_panel.page_load');
      case 'THIS_LAYER_IN_VIEW':
        return renderI18nText('sites.panel.interactions_panel.this_layer_in_view');
      case 'OTHER_LAYER_IN_VIEW':
        return renderI18nText('sites.panel.interactions_panel.other_layer_in_view');
      case 'SCROLL_DIRECTION':
        return renderI18nText('sites.panel.interactions_panel.scroll_direction');
      default:
        return null;
    }
  }
});
let TH = kL({
  behaviorType: Xc.ScrollParallax,
  get: e => new LN().format(e?.speed ?? 1)
});
let Tq = kL({
  behaviorType: Xc.Marquee,
  get: e => {
    let t = '';
    switch (e?.direction) {
      case 'LEFT':
        t = getI18nString('sites.panel.interactions_panel.marquee_direction_left');
        break;
      case 'RIGHT':
        t = getI18nString('sites.panel.interactions_panel.marquee_direction_right');
        break;
      case 'DOWN':
        t = getI18nString('sites.panel.interactions_panel.marquee_direction_down');
        break;
      case 'UP':
        t = getI18nString('sites.panel.interactions_panel.marquee_direction_up');
    }
    e?.shouldLoopInfinitely && (t += `, ${getI18nString('sites.panel.interactions_panel.marquee_infinite')}`);
    return t;
  }
});
let TX = kL({
  behaviorType: Xc.Cursor,
  get: e => {
    let t = getI18nString('sites.panel.interactions_panel.none');
    if (!e || !e.cursorGuid) return t;
    let i = getSingletonSceneGraph().get(sessionLocalIDToString(e.cursorGuid));
    return i ? i.name : t;
  }
});
let TV = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'm20.854 6.854-3 3a.5.5 0 0 1-.708-.708L19.293 7H15.5A2.5 2.5 0 0 0 13 9.5v5A3.5 3.5 0 0 1 9.5 18h-.55a2.5 2.5 0 1 1 0-1h.55a2.5 2.5 0 0 0 2.5-2.5v-5A3.5 3.5 0 0 1 15.5 6h3.793l-2.147-2.146a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708M8 17.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0',
      clipRule: 'evenodd'
    })
  });
});
function TG() {
  return jsxs('div', {
    'className': 'sites_prototype_panel_empty_state--emptyState--2Dey7',
    'data-testid': 'empty-state-assets-ui3',
    'children': [jsx('div', {
      className: 'sites_prototype_panel_empty_state--noodleIcon--wqt6G',
      children: jsx(TV, {})
    }), jsx('div', {
      className: 'sites_prototype_panel_empty_state--emptyStateTitle--ARylG',
      children: renderI18nText('sites.panel.empty_state_title')
    }), jsx('div', {
      className: 'sites_prototype_panel_empty_state--emptyStateSubtitle--QR9FD',
      children: renderI18nText('sites.panel.empty_state_subtitle_one')
    })]
  });
}
function TY({
  dropdownShown: e,
  pickerShown: t,
  sceneGraphSelection: i,
  shownPanels: n
}) {
  let a = selectCurrentFile();
  let o = useSelector(e => e.userFlags);
  let d = _$$tN('containsResponsiveSets');
  let c = !n[ItemType.FRAME_PRESETS] && !n[ItemType.PENCIL_TOOL] && !d;
  let p = z0();
  let x = Object.keys(i).length > 0 && _$$Yh(p, 'create-code-layer-from-design');
  let m = (getFeatureFlags().sts_code_authoring || getFeatureFlags().sts_code_authoring_by_plan) && x;
  let h = !x && !_$$jd(n) && !n[ItemType.SITES_LINK_ITEM] && !n[ItemType.SITES_INTERACTIONS_ITEM] && !n[ItemType.FRAME_PRESETS] && !n[ItemType.PENCIL_TOOL];
  return jsxs(_$$i7, {
    children: [jsx(VF, {
      isVisible: x,
      children: () => jsx(_$$k10, {
        name: 'create_code_layer_from_design_panel',
        children: jsx(_$$Zk, {
          className: _$$rq2,
          children: jsx(_$$z13, {
            'onClick': () => {
              fullscreenValue.triggerAction('create-code-layer-from-design', {
                source: 'properties_panel'
              });
            },
            'aria-label': getI18nString('sites.panel.add_interactivity_with_code'),
            'disabled': !m,
            'tooltipAttributes': m ? void 0 : {
              'data-tooltip-type': KindEnum.TEXT,
              'data-tooltip': getI18nString('sites.coming_soon_tooltip.make.title'),
              'data-tooltip-subtext': getI18nString('sites.coming_soon_tooltip.make.description')
            },
            'children': renderI18nText('sites.panel.add_interactivity_with_code')
          })
        })
      })
    }), jsx(VF, {
      isVisible: _$$jd(n),
      children: () => jsx(_$$_i, {
        recordingKey: 'toolbarView',
        shouldShowCodeInstancePanel: _$$jd(n),
        shouldShowSlotPanel: Br(n),
        shouldShowComponentPropertiesPanel: !1,
        shouldShowInstancePanel: !1,
        withBottomBorder: !1
      })
    }), jsx(VF, {
      isVisible: _$$jd(n),
      children: () => jsx(jj, {
        recordingKey: 'codeInstancePanel'
      }, 'codeInstance')
    }), jsx(VF, {
      isVisible: n[ItemType.SITES_LINK_ITEM],
      children: () => jsx(_$$rC2, {
        recordingKey: 'linkPanel'
      })
    }), jsx(VF, {
      isVisible: n[ItemType.SITES_INTERACTIONS_ITEM],
      children: () => jsx(TA, {
        recordingKey: 'interactionsPanel'
      })
    }), jsx(VF, {
      isVisible: n[ItemType.FRAME_PRESETS],
      children: () => jsx(_$$nl3, {
        recordingKey: 'framePresetPanel'
      }, 'frame-presets')
    }), jsx(VF, {
      isVisible: n[ItemType.PENCIL_TOOL],
      children: () => jsx(_$$q1, {
        id: 'pencilToolPanel',
        recordingKey: 'pencilToolPanel',
        openFile: a
      }, 'pencilToolPanel')
    }), jsx(VF, {
      isVisible: c,
      children: () => jsx(_$$Z8, {
        recordingKey: 'prototypePanel',
        shouldUseSelectedStyleProperties: !0,
        pickerShown: t,
        dropdownShown: e,
        sceneGraphSelection: i,
        userFlags: o
      }, 'prototype')
    }), jsx(VF, {
      isVisible: n[ItemType.SITES_ACCESSIBILITY_ITEM],
      children: () => jsx(jr, {
        recordingKey: 'accessibilityPanel'
      })
    }), jsx(VF, {
      isVisible: h,
      children: () => jsx(TG, {})
    })]
  });
}
function TJ({
  CommentsTab: e,
  colorFormat: t,
  dropdownShown: i,
  library: n,
  pickerShown: s,
  sceneGraphSelection: o,
  shownPanels: d,
  stylePickerListLayout: c,
  ...u
}) {
  _$$S0();
  let p = useCallback(e => {
    switch (e) {
      case DesignWorkspace.DESIGN:
      case DesignWorkspace.SITE:
        return DesignWorkspace.SITE;
      default:
        return e;
    }
  }, []);
  let x = P5({
    defaultTab: DesignWorkspace.SITE,
    getActiveTab: p
  });
  let h = null;
  let g = _$$p2('topLevelMode');
  let f = _$$p2('isReadOnly');
  let _ = g === ViewType.LAYOUT && !f && x === DesignWorkspace.SITE;
  let b = g !== ViewType.PREVIEW && g !== ViewType.BRANCHING && x === DesignWorkspace.PROTOTYPE;
  let y = _$$U() && g === ViewType.LAYOUT && !f && x === DesignWorkspace.DAKOTA;
  let v = x === DesignWorkspace.COMMENT;
  return jsxs(noop, {
    recordingKey: 'propertiesPanel',
    activeTab: x,
    refMainScrollContainer: e => {
      h = e;
    },
    children: [_ && jsx(ku, {
      ...u,
      scrollContainer: h,
      dropdownShown: i,
      library: n,
      pickerShown: s,
      sceneGraphSelection: o,
      shownPanels: d,
      stylePickerListLayout: c,
      colorFormat: t
    }), y && jsx(bH, {}), b && jsx(TY, {
      dropdownShown: i,
      pickerShown: s,
      sceneGraphSelection: o,
      shownPanels: d
    }), v && jsx(e, {})]
  });
}
let TZ = memo(() => {
  let e = Ku();
  let t = Um();
  let i = Xo();
  let n = GV();
  let a = useSelector(e => e.installedPluginVersions);
  let r = useSelector(e => e.library);
  let o = useSelector(e => e.localPlugins);
  let d = useSelector(e => e.modalShown);
  let c = useSelector(e => e.publishedPlugins);
  let u = useSelector(e => e.stylePickerListLayout);
  let p = useSelector(e => e.stylePickerShown);
  let x = useSelector(e => e.pickerInStyleCreationShown);
  let m = useSelector(e => e.mirror.sceneGraphSelection);
  let {
    showDakotaFieldPicker,
    filteredFieldTypes
  } = L6();
  return jsxs(_$$o9, {
    boundaryKey: 'SitesPropertiesPanel',
    children: [jsx(TJ, {
      CommentsTab: _$$L3,
      allSavedPlugins: a,
      colorFormat: e,
      dropdownShown: t,
      library: r,
      localPlugins: o,
      modalShown: d,
      pickerInStyleCreationShown: x,
      pickerShown: i,
      publishedPlugins: c,
      sceneGraphSelection: m,
      shownPanels: n,
      stylePickerListLayout: u,
      stylePickerShown: p
    }), getFeatureFlags().dakota && showDakotaFieldPicker ? jsx(G6, {
      cmsFieldTypes: filteredFieldTypes
    }) : jsx(_$$tZ, {})]
  });
});
let $$T02 = 'spotlight-ended-canvas-only-visual-bell';
let $$T11 = 'followed-user-not-on-canvas-visual-bell';
let $$T50 = 'ask-to-spotlight-ended-canvas-only-visual-bell';
let T2 = memo(({
  shouldShowDragAndDropBorder: e
}) => {
  let t = _$$e();
  let i = useSelector(e => e.progressBarState);
  let n = _$$p2('loadingEmbeds');
  let c = useIsSelectedFigmakeFullscreen();
  let h = _$$p2('isReadOnly');
  let g = useRef(null);
  let f = selectCurrentFile();
  let _ = f ? f.key : '';
  let y = _$$p2('showUi');
  let v = useAtomWithSubscription(_$$s3);
  let j = v === PanelType.DAKOTA;
  let k = _$$U();
  let S = useDispatch();
  let C = L3();
  let T = _$$G5();
  let I = selectCurrentUser();
  let E = _$$dR();
  let N = B4();
  let A = $0();
  let L = useSelector(e => e.multiplayer);
  let P = L.allUsers;
  let O = P.find(e => e.userID === A?.userID)?.sitesViewState ?? null;
  let F = Ww();
  let M = NB(L);
  Gb(_);
  (function () {
    let e = performance.now();
    let t = EI();
    let i = selectCurrentFile();
    let n = useAtomWithSubscription(_$$me);
    let l = Xr($K);
    let a = _$$eY();
    let d = useDispatch();
    let [c, x] = useAtomValueAndSetter(u3);
    !c && n && x(!0);
    _$$R6(() => {
      try {
        debugState.dispatch(VisualBellActions.enqueue({
          message: getI18nString('sites.metadata.copying_frames'),
          type: 'design-to-sites-load',
          icon: VisualBellIcon.SPINNER,
          timeoutOverride: 3e5
        }));
        debug(!!n, 'sourceFileData is undefined. This should never happen');
        _$$l.user('copy-to-sites-from-design', () => {
          let t = a.getCurrentPage();
          debug(!!t, 'currentPage is undefined. This should never happen');
          let i = t.defaultResponsiveSetId;
          debug(!!i, 'existingDefaultResponsiveSetId is undefined. This should never happen');
          t.setSelectionToSingleNode(i);
          fullscreenValue.triggerActionEnum(Command.TOGGLE_LOCKED_FOR_SELECTED_NODES);
          u5(n).then(() => {
            l(Ut);
            let t = a.getDirectlySelectedNodes()[0]?.guid;
            debug(!!t, 'newlyCopiedNodeId is undefined. This should never happen');
            renameNode(t, getI18nString('sites.modal.desktop'));
            fullscreenValue.triggerActionEnum(Command.CREATE_RESPONSIVE_SET);
            let i = a.getDirectlySelectedNodes()[0]?.guid;
            debug(!!i, 'newResponsiveSetId is undefined. This should never happen');
            u2(i);
            fullscreenValue.triggerActionEnum(Command.ZOOM_TO_SELECTION);
            d(VisualBellActions.clearAll());
            debugState.dispatch(VisualBellActions.dequeue({
              matchType: 'design-to-sites-load'
            }));
            debugState.dispatch(VisualBellActions.enqueue({
              message: getI18nString('sites.metadata.done'),
              type: 'design-to-sites-complete',
              icon: VisualBellIcon.CHECK,
              timeoutOverride: 3e3
            }));
            let s = performance.now() - e;
            analyticsEventManager.trackDefinedEvent('sites.finish_copy_to_sites', {
              sourceFileKey: n.fileKey,
              sourceFileVersion: n.fileVersion,
              sourcePageGuid: n.pageGuid,
              sourceSelectedNodeIds: n.selectedNodeId,
              timeToCopyMs: s
            });
          });
        });
      } catch (e) {
        logError('design_to_sites', `Error copying nodes into sites on load: ${e instanceof Error ? e.message : ''}`, {
          reportAsSentryError: !0
        });
        debugState.dispatch(VisualBellActions.dequeue({
          matchType: 'design-to-sites-load'
        }));
        debugState.dispatch(VisualBellActions.enqueue({
          message: getI18nString('sites.metadata.couldnt_copy_frames'),
          type: 'design-to-sites-complete',
          icon: VisualBellIcon.WARNING_EXCLAMATION_WITH_TRIANGLE,
          timeoutOverride: 3e3,
          error: !0
        }));
      }
    }, [i, t, l, n], () => !!(i && t && n));
  })();
  _$$W();
  (function (e) {
    let [t, i] = useState([]);
    let n = useSubscription(SiteBundles, {
      fileKey: e
    });
    let l = useSubscription(SiteMount, {
      fileKey: e
    });
    if (n.status !== 'loaded' || l.status !== 'loaded' || !getFeatureFlags().sts_ppp) return;
    let s = getResourceDataOrFallback(n.data?.siteBundles);
    let o = getResourceDataOrFallback(l.data?.siteMount);
    let d = s?.find(e => e.status === 'succeeded') || null;
    let c = d?.responsiveSetGuids || [];
    let u = !o || o?.status !== 'published';
    Fullscreen?.setSitePublished(!!(d && !u));
    s && c && (t.forEach(e => {
      c.includes(e) || Fullscreen?.setPagePublished(e, !1);
    }), c.forEach(e => {
      Fullscreen?.setPagePublished(e, !0);
    }), !function (e, t) {
      if (e.length !== t.length) return !1;
      for (let i of e) {
        if (!t.includes(i)) return !1;
      }
      return !0;
    }(c, t) && i([...c]));
  })(_);
  let D = y && !j && !_$$a8(v);
  useEffect(() => {
    fullscreenValue.isReady() && (Multiplayer && Multiplayer.sendSitesViewState(v), SitesBindingsCpp && SitesBindingsCpp.notifyUpdateToSitesViewState());
  }, [v]);
  useEffect(() => {
    A && O && _$$a8(O) ? S(VisualBellActions.enqueue({
      message: getI18nString('left_rail.user_away_from_canvas_notification', {
        userHandle: A.name
      }),
      type: $$T11,
      timeoutOverride: 1e4
    })) : S(VisualBellActions.dequeue({
      matchType: $$T11
    }));
  }, [S, A, O]);
  useEffect(() => {
    T && I && E && E.userID === I.id && (N(), S(VisualBellActions.enqueue({
      message: getI18nString('left_rail.spotlight_session_ended_only_available'),
      type: $$T02
    })));
  }, [I, S, T, E, N]);
  useEffect(() => {
    Multiplayer && F && M && T && (_$$j$(F.sessionID), S(VisualBellActions.enqueue({
      message: getI18nString('left_rail.ask_to_spotlight_ended_only_available'),
      type: $$T50
    })));
  }, [F, M, S, T]);
  let z = (() => {
    let e = c ? jsx(uq, {}) : jsxs(Fragment, {
      children: [jsx(bO, {}), jsx(TZ, {}), jsx(iL, {})]
    });
    if (C) return e;
    switch (v) {
      case PanelType.SETTINGS:
      case PanelType.CODE:
        return null;
      case PanelType.DAKOTA:
        return jsxs(Fragment, {
          children: [t && jsx(TZ, {}), _$$U() && jsx(Y, {})]
        });
      default:
        return e;
    }
  })();
  return jsxs(eS, {
    children: [jsxs(_$$sk, {
      children: [i.mode !== UIVisibilitySetting.OFF && jsx('div', {
        className: _$$_q
      }), jsxs(_$$pO, {
        initialFilterState: {
          currentPage: !1
        },
        children: [_$$U() && t && jsx(q, {}), n.map(e => jsx(_$$_, {
          nodeId: e
        }, `loading-embed-${e}`)), jsx(qn, {}), jsx(_$$u, {}), jsx(_$$G2, {}), jsx(_$$b3, {}), jsx(_$$J3, {}), jsx(XI, {
          commentsDetailContainerRef: g
        }), jsx(_$$X, {}), jsx(_$$J2, {}), jsx(Nz, {}), jsx('div', {
          ref: g
        }), !isVsCodeEnvironment() && !c && jsx(g9, {}), !isVsCodeEnvironment() && c && jsx(px, {}), !h && jsx(_$$E, {
          filterOutNoneActions: !0
        }), jsx(_$$G, {
          children: z
        }), e && jsx(X5, {})]
      }), jsx(_$$A2, {
        editorType: FEditorType.Sites,
        openFile: f
      }), jsx(_$$l2, {})]
    }), D && jsx(tO, {}), k && jsx(ea, {})]
  });
});
export function $$T43() {
  let [e, t] = useState(!1);
  let i = useIsSelectedFigmakeFullscreen();
  _$$tq();
  return jsx(_$$A.Provider, {
    value: !i,
    children: jsx(_$$c2, {
      children: jsx(_$$v, {
        setShouldShowDragAndDropBorder: t,
        isDragTarget: !1,
        children: jsx(T2, {
          shouldShowDragAndDropBorder: e
        })
      })
    })
  });
}
export const ASK_TO_SPOTLIGHT_ENDED_CANVAS_ONLY_VISUAL_BELL = $$T50;
export const FOLLOWED_USER_NOT_ON_CANVAS_VISUAL_BELL = $$T11;
export const SPOTLIGHT_ENDED_CANVAS_ONLY_VISUAL_BELL = $$T02;
export const SitesView = $$T43;