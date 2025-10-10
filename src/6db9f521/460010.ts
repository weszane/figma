import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { forwardRef, useRef, useState, useCallback, useEffect, useMemo, useImperativeHandle, createElement, memo, useLayoutEffect, createRef, useContext, useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateTsApi, Command, AnimationTriggerType, SlideAnimation, UserActionState, documentStateTsApi, SlidesObjectAnimationBindings, IgnoreSelectionUIHidingBindings, SlideConstantsCppBindings, EasingType, SlideTransitionType, AnimationEventType, ItemType, ThemeColorStatus, ThemeMode, Fullscreen, SourceType, SelfDesignType, StateHierarchy, ImageToolsBindings, GeometricValues, NodePropertyCategory, DesignWorkspace, ViewType, UIVisibilitySetting } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from "../905/751457";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { upsertSharedModule, insertSharedModule, applySharedStyle, useFileLibrarySubscriptions } from "../figma_app/933328";
import { ED } from "../figma_app/504823";
import { isVsCodeEnvironment } from "../905/858738";
import { useSceneGraphSelector, useAppModelProperty, useIsProgressBarHiddenOrLocked, useAppModelPropsShallow, useOnSelectionChange } from "../figma_app/722362";
import { selectCurrentFile, openFileKeyAtom, useCurrentFileKey } from "../figma_app/516028";
import { W as _$$W } from "../441/503702";
import { getObservableValue } from "../figma_app/84367";
import { Lk } from "../figma_app/122682";
import { mapFileTypeToEditorType, FEditorType } from "../figma_app/53721";
import { m as _$$m } from "../905/99004";
import { A as _$$A } from "../9410/188255";
import { pO } from "../figma_app/42945";
import { J as _$$J } from "../642/485582";
import { G as _$$G } from "../9410/729166";
import { G as _$$G2, b as _$$b } from "../9410/59055";
import { _ as _$$_ } from "../441/351942";
import { c as _$$c } from "../9410/794676";
import { sk as _$$sk } from "../9410/973081";
import { qn, XI } from "../9410/793186";
import { v as _$$v } from "../9410/916286";
import { s as _$$s2 } from "../figma_app/874592";
import { G as _$$G3 } from "../figma_app/373780";
import { Nz, X5 } from "../9410/728210";
import { K as _$$K } from "../b2835def/230877";
import { n as _$$n } from "../573/512493";
import { l as _$$l } from "../9410/331071";
import { J as _$$J2 } from "../9410/165619";
import { H as _$$H } from "../2b17fec9/415304";
import { s as _$$s3 } from "../3682/764731";
import { JT } from "../figma_app/632248";
import { cT as _$$cT, wj, qy, RL, B3, Ag } from "../figma_app/862289";
import { EG, JY, sH as _$$sH, mG, wd } from "../9410/236102";
import { props, stylex } from "@stylexjs/stylex";
// import { LoadingSpinner } from "../905/443820";
import { l as _$$l2 } from "../905/479687";
import { textDisplayConfig } from "../905/687265";
import { WAFImage } from "../905/675859";
import { fq, Jn, NG, m4, S7 } from "../7222/396421";
import { useMemoStable } from "../905/19536";
import { stopPresenting } from "../figma_app/385215";
import { WN } from "../figma_app/638601";
import { isUserNotLoggedInAndEditorSupported } from "../figma_app/564183";
import { useDropdownState, useDropdown } from "../905/848862";
import { usePresenterUser } from "../figma_app/440875";
import { m as _$$m2 } from "../9410/532216";
import { n as _$$n2 } from "../9410/783801";
import { _ as _$$_2 } from "../1528/446737";
import { s as _$$s4 } from "../9410/760762";
import { Lx, v7 } from "../9410/896213";
import { w as _$$w } from "../9410/519056";
import { xG } from "../figma_app/121043";
import { Button, ButtonLarge, ButtonWide } from "../905/521428";
import { ScrollContainer } from "../905/143421";
import { x as _$$x } from "../905/764527";
import { useSetAtom, useAtomValueAndSetter, useAtomWithSubscription, atomWithReducer, atomStoreManager } from "../figma_app/27355";
import { CortexError } from "../figma_app/691470";
import { CortexErrorV2, UnsafeOrHarmfulPromptError, ProviderUnsafeOrHarmfulContentError } from "../figma_app/316567";
import { withAbortSignal } from "../905/829242";
import { cortexAPI, StreamAsyncIterator } from "../figma_app/432652";
import { Ay as _$$Ay2 } from "../figma_app/948389";
import { debugState } from "../905/407919";
import { VisualBellIcon, VisualBellType } from "../905/576487";
import { permissionScopeHandler as _$$l3, scopeAwareFunction as _$$nc } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { LOADING_STATUS } from "../905/989992";
import { serializeJSX } from "../figma_app/964367";
import { k9 as _$$k4 } from "../905/182598";
import { Q as _$$Q } from "../figma_app/550678";
import { Point } from "../905/736624";
import { trackSlideTemplateUsageThunk } from "../figma_app/49598";
import { renameFileOptimistic } from "../figma_app/78808";
import { fullscreenValue } from "../figma_app/455680";
import { convertMarkdownToEditorState } from "../905/877554";
import { Q as _$$Q2, ic as _$$ic } from "../figma_app/688398";
import { generateShimmerOverlay } from "../905/929620";
import { Vm, ks } from "../figma_app/838407";
import { useCurrentUserOrg } from "../905/845253";
import { selectCurrentUser } from "../905/372672";
import { getCurrentTeam } from "../figma_app/598018";
import { D as _$$D2 } from "../7222/938408";
import { nv, Ci, qm, Ji } from "../figma_app/553488";
import { bL } from "../905/911410";
import { DialogContents, DialogHeader, DialogTitle, DialogBody } from "../figma_app/272243";
import { q as _$$q } from "../9410/847736";
import { lockAtomFamily, fileTypeAtom, FileType } from "../figma_app/60023";
import { SelectGroupLabel, SelectSeparator, SelectContainer, SelectOptionReset, SelectRoot } from "../905/493196";
import { p as _$$p } from "../905/536283";
import { u as _$$u } from "../905/591949";
import { h as _$$h } from "../905/513745";
import { KD, ag as _$$ag, i5, X9, LN } from "../figma_app/975811";
import { _r, el as _$$el, VG, J as _$$J3, D as _$$D3 } from "../figma_app/451499";
import { Ro, jK, QD } from "../9410/60886";
import { isNotNullish } from "../figma_app/95419";
import { J as _$$J4 } from "../905/129695";
import { ButtonPrimitive } from "../905/632989";
import { _ as _$$_3 } from "../905/263184";
import { x as _$$x2 } from "../905/587214";
import { N as _$$N } from "../905/7587";
import { noop } from 'lodash-es';
import { KindEnum } from "../905/129884";
import { useClickOutside } from "../905/1768";
import { g2 } from "../9410/341455";
import { u as _$$u2 } from "../441/357009";
import { K as _$$K2, SG } from "../6388/64652";
import { Gu } from "../figma_app/262240";
import { IconButton } from "../905/443068";
import { z as _$$z } from "../940032c6/265110";
import { defaultSessionLocalIDString, isValidSessionLocalID, parseSessionLocalID, sessionLocalIDToString } from "../905/871411";
import { generateRecordingKey, SKIP_RECORDING, useHandleFocusEvent, useHandleGenericEvent } from "../figma_app/878298";
import { RecordableDiv } from "../905/511649";
import { logError } from "../905/714362";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { updateHoveredNode, replaceSelection } from "../figma_app/741237";
import { isInvalidValue, isValidValue, MIXED_MARKER, valueOrFallback, normalizeValue } from "../905/216495";
import { useUpdateSelectionProperty, useSelectionProperty, useSelectionPropertyValue, useSelectedStyleOrSelectionPropertyValues, useNonMixedSelectedStyleOrSelectionPropertyValues, useNonMixedSelectionPropertyValue, useNonMixedSelectionPropertyValues } from "../905/275640";
import { useDeepEqualSceneValue, useStrictDeepEqualSceneValue } from "../figma_app/167249";
import { isActionEnabled } from "../figma_app/357047";
import { calculatePickerPositionLeft } from "../905/959568";
import { q as _$$q2 } from "../figma_app/905311";
import { Wv, r as _$$r } from "../figma_app/711157";
import { Jb, l5 as _$$l5, ax as _$$ax } from "../figma_app/224338";
import { tR as _$$tR, Uz, bz } from "../6388/410011";
import { xl, sQ as _$$sQ, tx as _$$tx2, D0, AC, Z4, Mp } from "../9410/315461";
import { HiddenLabel } from "../905/270045";
import iz from "classnames";
import { be, Kk } from "../figma_app/960598";
import { uc, kP, eB as _$$eB } from "../9410/228612";
import { zQ, Eo } from "../9410/564578";
import { useMenu } from "../905/465888";
import { Y9 as _$$Y2, JU, X0, UC, bL as _$$bL2 } from "../figma_app/322555";
import { EventShield } from "../905/821217";
import { B as _$$B } from "../1250/314515";
import { Z as _$$Z2 } from "../905/279476";
import { useDebounce } from 'use-debounce';
import { OI, Dm, Yr } from "../figma_app/8833";
import { useCachedSubtree } from "../figma_app/679183";
import { Bf } from "../figma_app/249941";
import { TimeInput, NumericDropdownWithIcon, ScaleInput } from "../figma_app/178475";
import { ow as _$$ow, a3 as _$$a } from "../905/188421";
import { c$ as _$$c$, tV as _$$tV, l6 as _$$l6, sK as _$$sK } from "../905/794875";
import { gm, pW } from "../figma_app/335781";
import { ChevronContainer } from "../905/1946";
import { bL as _$$bL3, RT, c$ as _$$c$2 } from "../905/867927";
import { Legend } from "../905/932270";
import { Tj } from "../figma_app/342207";
import { selectSingleSelectedNode, selectSceneGraphSelectionKeys, selectInstanceKeys } from "../figma_app/889655";
import { N as _$$N2 } from "../905/720559";
import { o as _$$o2 } from "../905/89370";
import { v as _$$v2 } from "../905/439487";
import { W as _$$W2 } from "../905/592530";
import { l as _$$l7 } from "../9410/367372";
import { executeInIgnoreUndoRedoScope } from "../905/955316";
import { Y as _$$Y3 } from "../905/912236";
import { useLocalStorageSync } from "../905/657224";
import { dh as _$$dh } from "../figma_app/186343";
import { p as _$$p2 } from "../figma_app/353099";
import { BaseNuxOnboardingOverlay } from "../4452/529989";
import { C5 } from "../7021/95197";
import { isSelfDesignMode, syncDesignModePermission } from "../figma_app/357367";
import { v as _$$v3 } from "../6388/254246";
import { uY } from "../figma_app/164260";
import { ie as _$$ie, Z as _$$Z3, Lk as _$$Lk, Cd, Rn } from "../figma_app/524655";
import { k as _$$k5 } from "../642/978258";
import { PopoverProvider } from "../905/291714";
import { W1 } from "../figma_app/439493";
import { Z as _$$Z4 } from "../6401/653234";
import { H as _$$H3 } from "../905/821118";
import { _ as _$$_4 } from "../9410/16707";
import { showDropdownThunk } from "../905/929976";
import { postUserFlag } from "../905/985254";
import { UpgradeAction } from "../905/370443";
import { hX, xn } from "../figma_app/644079";
import { getPublishTemplateStatus, canPublishTemplate } from "../figma_app/622574";
import { useEventForwarder } from "../905/453826";
import { useOverlay } from "../905/621515";
import { A as _$$A4 } from "../905/956262";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
import { ModalPriority } from "../figma_app/268271";
import { U as _$$U } from "../905/455766";
import { OnboardingModal } from "../905/425180";
import { NotModalType } from "../905/11928";
import { O0, eg as _$$eg } from "../figma_app/452252";
import { ArrowPosition } from "../905/858282";
import { SlidesTemplateOnboarding } from "../figma_app/6204";
import { useHasValidSceneSlideTheme, useIsFullscreenSlidesView } from "../figma_app/21029";
import { uM, Bn, R4, w1 } from "../figma_app/835688";
import { g as _$$g2, h as _$$h3 } from "../9410/28058";
import { Dh, TN, i1 as _$$i, q0 } from "../figma_app/177697";
import { useEffectiveThemeId, useSelectedThemeId } from "../figma_app/226737";
import { TG } from "../figma_app/657972";
import { ServiceCategories } from "../905/165054";
import { ScreenReaderOnly } from "../905/172252";
import { B as _$$B2 } from "../9410/958580";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "../vendor/425002";
import { TextNode, FOCUS_COMMAND, COMMAND_PRIORITY_EDITOR, BLUR_COMMAND } from "lexical";
import rJ from "../vendor/128080";
import { analyticsEventManager } from "../905/449184";
import { reportError } from "../905/11";
import { u4 } from "../figma_app/991591";
import { LoadingSpinner } from "../figma_app/858013";
import { RecordingScrollContainer } from "../905/347284";
import { styleBuilderInstance } from "../905/941192";
import { d as _$$d2 } from "../9410/847929";
import { zF } from "../figma_app/297822";
import { x as _$$x3 } from "../905/719609";
import { y as _$$y } from "../figma_app/13082";
import { ap as _$$ap, B_, k8 as _$$k6, ud, Hk, lq as _$$lq } from "../9410/548825";
import { setupDragHandler } from "../905/97346";
import { mergeProps } from "../905/475481";
import { gv } from "../9410/172674";
import { O as _$$O } from "../9410/301359";
import { f as _$$f } from "../9410/391621";
import { ListNode, ListItemNode } from "@lexical/list";
import { UNORDERED_LIST, ORDERED_LIST, BOLD_ITALIC_STAR, BOLD_ITALIC_UNDERSCORE, BOLD_STAR, BOLD_UNDERSCORE, STRIKETHROUGH, ITALIC_STAR, ITALIC_UNDERSCORE } from "../vendor/693164";
import { Q as _$$Q3 } from "../vendor/452968";
import { n as _$$n3 } from "../vendor/110313";
import { a as _$$a2 } from "../vendor/683966";
import { A as _$$A5 } from "../vendor/211731";
import { G as _$$G4 } from "../vendor/947080";
import { Q as _$$Q4 } from "../vendor/898216";
import { E as _$$E4 } from "../vendor/464923";
import { D as _$$D4 } from "../vendor/212109";
import { $ as _$$$ } from "../vendor/909072";
import { m as _$$m3 } from "../2b17fec9/628878";
// import { useHandleValueEvent, useHandleGenericEvent } from "../figma_app/878298";
import { A as _$$A6 } from "../2b17fec9/467175";
import { K as _$$K4 } from "../6388/341838";
import { Ah } from "../6388/574648";
import { getAtomMutate } from "../figma_app/566371";
import { yZ } from "../905/407352";
import { autosaveFileInfoAtom, renameAutosaveFileMutation, OfflineFileType } from "../figma_app/840917";
import { DF as _$$DF } from "../figma_app/146384";
import { useSprigWithSampling } from "../905/99656";
import { iT as _$$iT } from "../figma_app/74165";
import { getNudgeAmounts, getColorFormat } from "../figma_app/740163";
import { Xo } from "../figma_app/482495";
import { L as _$$L } from "../642/269105";
import { o as _$$o3 } from "../642/854123";
import { GV, S2, P5, G$ } from "../figma_app/159296";
import { tZ as _$$tZ } from "../figma_app/960196";
import { j as _$$j } from "../642/671529";
import { S as _$$S } from "../figma_app/316019";
import { B as _$$B3 } from "../905/946243";
import { TabLoop } from "../905/718764";
import { l as _$$l8 } from "../905/241412";
import { AutoInteractableWrapper } from "../905/277716";
import { k as _$$k7 } from "../905/582200";
import { handleAccessibilityKeyboardEvents } from "../figma_app/290668";
import { Mk, sP as _$$sP } from "../897/50897";
import { Ad } from "../figma_app/811257";
import { P as _$$P3 } from "../905/201667";
import { SA, ub, H_ } from "../897/961984";
import { xX } from "../897/564585";
import { J5, w_ } from "../897/602108";
import { A as _$$A8 } from "../figma_app/121266";
import { e7 as _$$e3 } from "../figma_app/316316";
import { isEmptyObject } from "../figma_app/493477";
import { useCurrentOrgAdminInfo } from "../figma_app/740025";
import { b as _$$b4 } from "../figma_app/203891";
import { GR, F$, gc, B8, w5, tC as _$$tC } from "../figma_app/229710";
import { u as _$$u3, j as _$$j2 } from "../figma_app/9104";
import { defaultGrayColor, blackColor, getImageOrVideoPaint, paintManager } from "../figma_app/385874";
import { BS } from "../642/202922";
import { Mw, ON } from "../3276/43946";
import { v as _$$v5 } from "../642/281455";
import { c as _$$c3 } from "../642/688711";
import { hD, LI } from "../figma_app/970285";
import { nl as _$$nl } from "../figma_app/359943";
import { _ as _$$_5 } from "../figma_app/645682";
import { Ay as _$$Ay3 } from "../642/964720";
import { X2 } from "../642/755347";
import { B as _$$B4 } from "../642/707257";
import { $p, UA } from "../figma_app/580959";
import { C as _$$C } from "../642/776991";
import { q as _$$q4 } from "../8826/33573";
import { Q as _$$Q5 } from "../1528/190444";
import { So, SJ, tV as _$$tV2, M0, Br, d6 as _$$d4, GG, P1, iP as _$$iP, NR, Y$ } from "../figma_app/803054";
import { qh } from "../642/435480";
import { Vy } from "../8826/611318";
import { zq, U_, VR } from "../figma_app/938628";
import { _i, If } from "../figma_app/319440";
import { _ as _$$_6, f as _$$f2 } from "../642/896644";
import { d as _$$d5 } from "../905/49800";
import { No, iz as _$$iz } from "../1528/842139";
import { lR as _$$lR, ie as _$$ie2, A$, pd } from "../figma_app/837500";
import { Zk } from "../figma_app/626177";
import { n as _$$n4 } from "../905/316557";
import { Y as _$$Y4 } from "../a88a4c5a/416715";
import { GY } from "../figma_app/78309";
import { g as _$$g3 } from "../figma_app/103028";
import { P as _$$P4 } from "../a88a4c5a/931446";
import { W as _$$W3 } from "../a88a4c5a/370121";
import { Y as _$$Y5 } from "../a88a4c5a/211633";
import { RK } from "../figma_app/193101";
import { aG as _$$aG, lD as _$$lD } from "../figma_app/998062";
import { $ as _$$$2 } from "../905/411599";
import { J as _$$J5 } from "../905/494216";
import { PE } from "../figma_app/251115";
import { ExtensionFeatureKey } from "../905/946805";
import { $I } from "../figma_app/322845";
import { RemoveBackgroundAction, UpscaleImageAction } from "../905/112768";
import { DMenuItemType, DButtonType } from "../figma_app/986347";
import { rB as _$$rB, bh } from "../figma_app/730706";
import { X as _$$X } from "../905/647103";
import { r6 as _$$r4 } from "../905/507950";
import { V as _$$V } from "../1577/311426";
import { openWindow } from "../905/508367";
import { Tv } from "../figma_app/151869";
import { Ef, GQ, s$ as _$$s$ } from "../figma_app/29089";
import { v as _$$v6 } from "../figma_app/339170";
import { U as _$$U2 } from "../figma_app/636641";
import { h as _$$h4 } from "../figma_app/201095";
import { u as _$$u4 } from "../figma_app/398802";
import { i$ as _$$i$ } from "../figma_app/150804";
import { W as _$$W4 } from "../figma_app/691750";
import { O2, OE } from "../figma_app/164212";
import { e6 as _$$e4, ME } from "../figma_app/545190";
import { Z3 } from "../figma_app/461594";
import { p as _$$p3 } from "../figma_app/295764";
import { NA } from "../figma_app/760428";
import { fileLaunchHelper as _$$S2 } from "../905/459477";
import { Mx, TQ, Og, aE as _$$aE, Wf } from "../figma_app/882817";
import { j as _$$j3 } from "../905/253683";
import { s as _$$s7 } from "../905/702260";
import { W as _$$W5 } from "../905/378870";
import { Z as _$$Z5 } from "../905/498136";
import { selectWithShallowEqual } from "../905/103090";
import { getVariableById } from "../figma_app/852050";
import { getFontStyleMapping } from "../905/714538";
import { useStylePickerShown, getStylePickerId, useStyleInfo } from "../figma_app/836943";
import { ay as _$$ay } from "../figma_app/628987";
import { Z as _$$Z6 } from "../905/278240";
import { zz, zD } from "../905/32188";
import { I as _$$I } from "../905/439783";
import { a as _$$a3 } from "../905/575557";
import { jw, Ln } from "../figma_app/519250";
import { B as _$$B5 } from "../905/957400";
import { LM, PK } from "../905/566585";
import { g as _$$g4 } from "../figma_app/594353";
import { u3 } from "../figma_app/152690";
import { extractVariableAliasOrFontStyle } from "../figma_app/394327";
import { N as _$$N4 } from "../2b17fec9/152433";
import { r as _$$r5 } from "../905/571562";
import { n3 as _$$n5, VariableStyleId as _$$IA } from "../905/859698";
import { waitForAnimationFrame } from "../905/236856";
import { useLatestRef } from "../figma_app/922077";
import { hidePickerThunk, hideStylePicker, showStylePicker } from "../figma_app/91703";
import { TK } from "../905/129660";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { Xo as _$$Xo, kO } from "../figma_app/687767";
import { KL, Z3 as _$$Z7, oS as _$$oS } from "../figma_app/450967";
import { it as _$$it } from "../figma_app/587612";
import { AutoLayout } from "../figma_app/947482";
import { hideStylePreview, showStylePreviewThunk } from "../figma_app/914957";
import { zK, zM, lk as _$$lk } from "../905/182453";
import { u as _$$u6 } from "../9410/354452";
import { Gf, _f } from "../figma_app/293304";
import { roundTo2Decimals } from "../figma_app/492908";
import { DialogTriggerButton } from "../905/976845";
import { e as _$$e5 } from "../905/149844";
import { z as _$$z2 } from "../9410/836234";
import { A as _$$A9 } from "../905/891805";
import { StyleType } from "../figma_app/276332";
import { In } from "../905/672640";
import { AH } from "../905/571648";
import { bf } from "../figma_app/635062";
import { MM, UP } from "../figma_app/246831";
import { t as _$$t3 } from "../905/100946";
import { G as _$$G5, D as _$$D5 } from "../a88a4c5a/237102";
import { Zp } from "../figma_app/386160";
import { Xw } from "../figma_app/201694";
import { wF } from "../figma_app/257798";
import { deepEqual } from "../905/382883";
import { t as _$$t4 } from "../905/398894";
import { y as _$$y2 } from "../905/225297";
import { SvgComponent } from "../905/714743";
import { Kl, vx, OU } from "../figma_app/175258";
import { u as _$$u7 } from "../642/560546";
import { M as _$$M } from "../6388/719644";
import { A as _$$A0 } from "../svg/106736";
import { A as _$$A1 } from "../svg/392615";
import { a as _$$a4 } from "../905/558168";
import { getShownTransformControl } from "../figma_app/98483";
import { E as _$$E6 } from "../905/235326";
import { customHistory } from "../905/612521";
import { F as _$$F3 } from "../897/590880";
import { Wd } from "../441/430710";
import { e as _$$e6 } from "../6401/216695";
import { f as _$$f3 } from "../905/335032";
import { H as _$$H4 } from "../905/762413";
import { z as _$$z3 } from "../905/626016";
import { Z as _$$Z8 } from "../905/801075";
import { CK } from "../figma_app/952764";
import { li as _$$li } from "../figma_app/998161";
import { setupMenu, MenuRootComp, MenuContainerComp, MenuTitleComp } from "../figma_app/860955";
import { $Q, a2 as _$$a5 } from "../905/963340";
import { loadVideoJs } from "../905/284552";
import { Y as _$$Y6 } from "../905/506207";
import { k as _$$k8 } from "../6020/640789";
import { updateGIFImageProperties } from "../905/619652";
import { J as _$$J6 } from "../905/95677";
import { X7 } from "../905/713167";
import { Y as _$$Y7 } from "../905/513028";
import { K as _$$K5 } from "../figma_app/622160";
import { A as _$$A10 } from "../905/502895";
import { F as _$$F4 } from "../905/153202";
import { Bc, GA } from "../figma_app/200284";
import { v as _$$v7 } from "../905/501497";
import { V as _$$V2 } from "../905/261687";
import { DraggableModalManager } from "../905/748636";
import { C as _$$C2 } from "../642/180963";
import { Y as _$$Y8 } from "../6388/262412";
import { K as _$$K6 } from "../6388/893524";
import { P as _$$P5 } from "../6388/491290";
import { xm, CL, iS as _$$iS } from "../figma_app/887835";
import { m as _$$m4 } from "../905/886380";
import { OptionComponent } from "../figma_app/236327";
import { ConnectedPointingDropdown } from "../905/504727";
import { aF as _$$aF, Pm } from "../441/443466";
import { EW } from "../9410/486658";
import { lb as _$$lb } from "../figma_app/18327";
import { J as _$$J7 } from "../6388/618426";
import { h as _$$h5 } from "../figma_app/940341";
import { _q, PA } from "../figma_app/957070";
var n;
function P({
  children: e
}) {
  return jsx(_$$G3.Provider, {
    value: {
      loggerEventName: "slides_navigate"
    },
    children: jsx(_$$s2.Provider, {
      value: {
        allowLibraryPublish: !1
      },
      children: e
    })
  });
}
let X = forwardRef(function (e, t) {
  let {
    items,
    itemKey,
    renderItem,
    scrollDelayMs,
    onFinished,
    smoothScroll
  } = e;
  let c = useMemoStable(() => items, [items]);
  let u = useRef(null);
  let p = useRef([]);
  let x = function (e) {
    let [t, i] = useState(0);
    let [n, r] = useState(!1);
    return {
      currentIndex: t,
      isActive: n,
      setIsActive: r,
      resetToFirstItem: useCallback(() => {
        i(0);
      }, []),
      goToNext: useCallback(() => {
        i(e => e + 1);
      }, []),
      isAtEnd: t >= e - 1
    };
  }(c.length);
  let {
    topPadding,
    bottomPadding
  } = function (e, t) {
    let [i, n] = useState(0);
    let [r, s] = useState(0);
    useEffect(() => {
      let t = e.current;
      if (!t) return;
      let i = () => {
        n(t.clientHeight);
      };
      i();
      let r = new ResizeObserver(i);
      r.observe(t);
      return () => {
        r.disconnect();
      };
    }, [e]);
    useEffect(() => {
      if (!t) {
        s(0);
        return;
      }
      let e = () => {
        s(t.clientHeight);
      };
      e();
      let i = new ResizeObserver(e);
      i.observe(t);
      return () => {
        i.disconnect();
      };
    }, [t]);
    return useMemo(() => {
      if (0 === i) return {
        topPadding: 0,
        bottomPadding: 0
      };
      let e = Math.max(0, i / 2 - r / 2);
      return {
        topPadding: e,
        bottomPadding: e
      };
    }, [i, r]);
  }(u, p.current[x.currentIndex] || null);
  let {
    start,
    stop
  } = function ({
    items: e,
    autoscrollState: t,
    itemRefs: i,
    scrollDelayMs: n,
    onFinished: r,
    smoothScroll: s = !0
  }) {
    let {
      isActive,
      setIsActive,
      resetToFirstItem,
      goToNext,
      isAtEnd
    } = t;
    let p = useRef(null);
    let x = useCallback(() => {
      p.current && (clearInterval(p.current), p.current = null);
    }, []);
    let h = useCallback(e => {
      let t = i.current[e];
      t && t.scrollIntoView({
        behavior: s ? "smooth" : "auto",
        block: "center",
        inline: "nearest"
      });
    }, [i, s]);
    let m = useCallback(() => {
      if (0 === e.length) {
        console.error("AutoScrollSpotlightList: Cannot start autoscroll with empty items array");
        return;
      }
      setIsActive(!0);
      resetToFirstItem();
    }, [e.length, setIsActive, resetToFirstItem]);
    let _ = useCallback(() => {
      setIsActive(!1);
      x();
    }, [setIsActive, x]);
    let g = useCallback(() => {
      if (isAtEnd) {
        setIsActive(!1);
        r();
        return;
      }
      goToNext();
    }, [isAtEnd, setIsActive, r, goToNext]);
    useEffect(() => {
      if (x(), 0 === e.length) {
        setIsActive(!1);
        resetToFirstItem();
        return;
      }
      resetToFirstItem();
    }, [e, x, setIsActive, resetToFirstItem]);
    useEffect(() => {
      isActive && h(t.currentIndex);
    }, [isActive, t.currentIndex, h]);
    useEffect(() => {
      if (!isActive) {
        x();
        return;
      }
      p.current = window.setInterval(g, n);
      return x;
    }, [isActive, n, g, x]);
    useEffect(() => x, [x]);
    return {
      start: m,
      stop: _
    };
  }({
    items: c,
    autoscrollState: x,
    itemRefs: p,
    scrollDelayMs,
    onFinished,
    smoothScroll
  });
  useImperativeHandle(t, () => ({
    start,
    stop
  }), [start, stop]);
  return jsx("div", {
    className: "x5yr21d xb3r6kr x1n2onr6 x1rohswg x6ehuon xfk6m8",
    ref: u,
    children: jsx("div", {
      className: "x78zum5 xdt5ytf",
      style: {
        paddingTop: `${topPadding}px`,
        paddingBottom: `${bottomPadding}px`
      },
      children: c.map((e, t) => jsx("div", {
        ref: e => p.current[t] = e,
        className: "x2lah0s xf7z5ut",
        children: renderItem(e, x.currentIndex === t)
      }, itemKey(e)))
    })
  });
});
let Z = {
  text: {
    color: "x3vvef7",
    $$css: !0
  },
  textSpotlighted: {
    color: "x1akne3o",
    $$css: !0
  },
  title: {
    ...textDisplayConfig.textHeadingMedium,
    $$css: !0
  },
  subtitle: {
    ...textDisplayConfig.textHeadingSmall,
    $$css: !0
  },
  chapter: {
    ...textDisplayConfig.textBodyLargeStrong,
    $$css: !0
  },
  slide: {
    ...textDisplayConfig.textBodyLarge,
    $$css: !0
  }
};
let ee = {
  thumbnail: {
    width: "x1o8i5o8",
    height: "xrlp1an",
    borderRadius: "x1mxnbhz",
    objectFit: "xl1xv1r",
    transition: "x10gahu4",
    $$css: !0
  },
  thumbnailSpotlighted: {
    transform: "xzikk98",
    $$css: !0
  }
};
let et = {
  stepText: {
    ...textDisplayConfig.textBodyLarge,
    transition: "x1op4zxa",
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    $$css: !0
  },
  stepActive: {
    color: "x1akne3o",
    $$css: !0
  },
  stepCompleted: {
    color: "x1n0bwc9",
    $$css: !0
  },
  stepInactive: {
    color: "x3vvef7",
    $$css: !0
  }
};
function ei() {
  let [e, t] = useState("ANALYZING_OUTLINE");
  let i = EG();
  (function () {
    let {
      showDeckGenerationOnCanvas
    } = JY();
    let t = getObservableValue(AppStateTsApi?.canvasGrid().canvasGridArray, []).flat().length;
    useEffect(() => {
      t >= 3 && showDeckGenerationOnCanvas();
    }, [t, showDeckGenerationOnCanvas]);
  })();
  return jsxs("div", {
    className: "x12f24lm x1l5p03z xktia5q x78zum5 x1nfngrj x6s0dn4 xl56j7k xb3r6kr x2lah0s",
    children: [jsxs("div", {
      className: "xmz0i5r x5yr21d x1ijr6pc x2lah0s xb3r6kr x13clk2n x1cfaxlm",
      children: ["ANALYZING_OUTLINE" === e && i.outline && jsx(en, {
        outline: i.outline,
        onFinished: () => t("ANALYZING_TEMPLATE")
      }), "ANALYZING_TEMPLATE" === e && i.templateLibraryKey && jsx(er, {
        libraryKey: i.templateLibraryKey,
        onFinished: () => t("GENERATING_DECK")
      }), "GENERATING_DECK" === e && jsx(LoadingSpinner, {})]
    }), jsx(el, {
      step: e
    })]
  });
}
function en({
  outline: e,
  onFinished: t
}) {
  let i = useMemo(() => function (e) {
    let t = [];
    let i = 0;
    for (let n of (t.push({
      id: `chunk-${++i}`,
      type: "title",
      content: e.title
    }), e.subtitle && t.push({
      id: `chunk-${++i}`,
      type: "subtitle",
      content: e.subtitle
    }), e.outlineItems)) "chapter" === n.type ? t.push({
      id: `chunk-${++i}`,
      type: "chapter",
      content: n.content
    }) : t.push({
      id: `chunk-${++i}`,
      type: "slide",
      content: n.content
    });
    return t;
  }(e), [e]);
  let n = useRef(null);
  useEffect(() => {
    let e = setTimeout(() => {
      n.current?.start();
    }, 500);
    return () => clearTimeout(e);
  }, []);
  let s = useCallback((e, t) => {
    let i = Z[e.type];
    return jsx("div", {
      ...props(i, t ? Z.textSpotlighted : Z.text),
      children: e.content
    });
  }, []);
  return jsx(X, {
    ref: n,
    items: i,
    itemKey: e => e.id,
    renderItem: s,
    scrollDelayMs: 350,
    onFinished: t,
    smoothScroll: !1
  });
}
function er({
  libraryKey: e,
  onFinished: t
}) {
  let i = fq(e);
  let n = useRef(null);
  let s = useMemo(() => i ? i.map((e, t) => ({
    id: `slide-${t}`,
    thumbnailUrl: e,
    slideIndex: t + 1
  })) : [], [i]);
  useEffect(() => {
    let e = setTimeout(() => {
      n.current?.start();
    }, 500);
    return () => clearTimeout(e);
  }, []);
  let a = useCallback((e, t) => jsxs("div", {
    className: "x78zum5 xl56j7k x6s0dn4 xi4r6k5 x10gahu4 x1n2onr6",
    children: [jsx(WAFImage, {
      ...props(ee.thumbnail, t && ee.thumbnailSpotlighted),
      src: e.thumbnailUrl,
      alt: `Slide ${e.slideIndex}`,
      loading: "lazy"
    }), t && jsx("div", {
      className: "x10l6tqk x13vifvy xu96u03 x3m8u43 x1ey2m1c x52iwe6 xz4fkyq x17t6hpn x1ewlznk x1c74tu6 xa4qsjk x1esw782 x1mxnbhz x47corl x1vjfegm"
    })]
  }), []);
  return i && 0 !== i.length ? jsx(X, {
    ref: n,
    items: s,
    itemKey: e => e.id,
    renderItem: a,
    scrollDelayMs: 1500,
    onFinished: t
  }) : jsx(LoadingSpinner, {});
}
function el({
  step: e
}) {
  let t = useMemo(() => [{
    key: "ANALYZING_OUTLINE",
    text: "Understanding your content"
  }, {
    key: "ANALYZING_TEMPLATE",
    text: "Choosing the best layouts"
  }, {
    key: "GENERATING_DECK",
    text: "Building your slides"
  }], []);
  let i = useCallback(i => {
    let n = t.findIndex(t => t.key === e);
    let r = t.findIndex(e => e.key === i);
    return r < n ? "completed" : r === n ? "active" : "inactive";
  }, [e, t]);
  let n = useCallback(e => {
    let t = i(e);
    return "completed" === t ? jsx("div", {
      className: "x1kky2od xlup9mm x2lah0s x78zum5 x6s0dn4 xl56j7k",
      children: jsx(_$$l2, {
        className: "x98xwy"
      })
    }) : "active" === t ? jsx("div", {
      className: "x1kky2od xlup9mm x2lah0s x78zum5 x6s0dn4 xl56j7k",
      children: jsx(LoadingSpinner, {
        size: "sm"
      })
    }) : jsx("div", {
      className: "x1kky2od xlup9mm x2lah0s x78zum5 x6s0dn4 xl56j7k"
    });
  }, [i]);
  return jsx("div", {
    className: "x78zum5 xdt5ytf x1excjyp x1ou3mml x1u2d2a2",
    children: t.map(e => {
      let t = i(e.key);
      return jsxs("div", {
        className: "x78zum5 x6s0dn4 x1i71x30 x10gahu4",
        children: [n(e.key), jsx("span", {
          ...props(et.stepText, "active" === t && et.stepActive, "completed" === t && et.stepCompleted, "inactive" === t && et.stepInactive),
          children: e.text
        })]
      }, e.key);
    })
  });
}
let ey = {
  headerPositioner: {
    position: "xixxii4",
    top: "x13vifvy",
    zIndex: "x1vjfegm",
    paddingTop: "xz9dl7a",
    $$css: !0
  }
};
let ef = {
  leftHeaderPositioner: {
    ...ey.headerPositioner,
    left: "xu96u03",
    paddingLeft: "xf18ygs",
    $$css: !0
  },
  rightHeaderPositioner: {
    ...ey.headerPositioner,
    right: "x3m8u43",
    paddingRight: "xnuq7ks",
    $$css: !0
  }
};
function ej() {
  return jsxs(Fragment, {
    children: [jsx(eb, {}), jsx(eE, {})]
  });
}
function eb() {
  let e = selectCurrentFile();
  return jsx("div", {
    ...props(ef.leftHeaderPositioner),
    children: jsxs(_$$_2, {
      isCollapsed: !0,
      minWidth: 200,
      children: [jsx(xG, {}), jsx(_$$n2, {}), e && jsx(_$$s4, {
        openFile: e
      }), jsx(_$$m2, {})]
    })
  });
}
function eE() {
  let e = useDispatch<AppDispatch>();
  let t = selectCurrentFile();
  let i = useSelector(e => e.multiplayer);
  let n = useSelector(e => e.user);
  let o = useMemo(() => i.allUsers.find(e => e.sessionID === i.sessionID) || null, [i.allUsers, i.sessionID]);
  let d = useDropdownState();
  let c = usePresenterUser();
  let u = stopPresenting();
  let p = useCallback(t => {
    Lx(t, o?.sessionID, e, !1, i, c, u);
  }, [o?.sessionID, e, i, c, u]);
  let x = isUserNotLoggedInAndEditorSupported();
  let h = WN();
  return jsx("div", {
    ...props(ef.rightHeaderPositioner),
    children: jsxs("div", {
      className: "x78zum5 xsdox4t x1rjybxy x6s0dn4 x16v0e3u x1akne3o x1mxnbhz xf18ygs x1vqtdw0",
      children: [t && o && jsx(v7, {
        thresholdUsesContainerWidth: !0,
        dropdownShown: d,
        multiplayer: i,
        currentUser: o,
        onUserClick: x ? () => h(Command.FOLLOW_PRESENTER) : p
      }), t && !x && jsx(_$$w, {
        user: n,
        editingFile: t,
        isFileInWorkshop: !1
      })]
    })
  });
}
let eP = "slides-outline-to-deck-loading";
let eD = "slides-outline-to-deck-completed";
function eR(e, t, i) {
  debugState.dispatch(VisualBellActions.dequeue({
    matchType: eP
  }));
  debugState.dispatch(VisualBellActions.enqueue({
    message: e,
    type: i,
    icon: t,
    timeoutOverride: 3e3
  }));
}
function eM(e) {
  eR(e, VisualBellIcon.EXCLAMATION, "slides-outline-to-deck-canceled");
}
function eF(e) {
  eR(e, VisualBellIcon.EXCLAMATION, "slides-outline-to-deck-error");
}
let eU = async ({
  params: e,
  abortController: t,
  clientLifecycleId: i
}) => {
  let {
    description,
    deckOptions,
    outlineDeltaCallbacks,
    resetOutline
  } = e;
  let a = {
    ..._$$Ay2(),
    clientLifecycleId: i
  };
  try {
    let e = await withAbortSignal(cortexAPI.slides.generateOutline({
      description,
      deckOptions
    }, a), t.signal);
    for await (let i of new StreamAsyncIterator(e)) {
      if (t.signal.aborted) throw Error("Aborted");
      switch (i.type) {
        case "DECK_TITLE":
          outlineDeltaCallbacks.onDeckTitleDelta(i.delta);
          break;
        case "DECK_SUBTITLE":
          outlineDeltaCallbacks.onDeckSubtitleDelta(i.delta);
          break;
        case "OUTLINE_ITEM_TYPE":
          outlineDeltaCallbacks.onOutlineItemTypeDelta(i.index, i.itemType);
          break;
        case "OUTLINE_ITEM_ROLE":
          outlineDeltaCallbacks.onOutlineItemRoleDelta(i.index, i.itemType, i.delta);
          break;
        case "OUTLINE_ITEM_CONTENT":
          outlineDeltaCallbacks.onOutlineItemContentDelta(i.index, i.itemType, i.delta);
      }
    }
  } catch (e) {
    t.signal.aborted ? eM("Outline generation stopped") : e instanceof CortexErrorV2 ? (UnsafeOrHarmfulPromptError.isInstance(e) || ProviderUnsafeOrHarmfulContentError.isInstance(e)) && eF(eV) : e instanceof CortexError && ("unsafe_or_harmful_content" === e.type ? eF(eV) : eF(eK));
    resetOutline();
  }
};
let eV = "Could not generate outline for this prompt";
let eK = "Encountered an error while generating outline";
let e$ = {
  title: "",
  subtitle: "",
  outlineItems: []
};
async function e7(e, t) {
  if (!e.id || !t) return null;
  try {
    let i;
    let n = (await upsertSharedModule(e)).localGUID;
    let r = getSingletonSceneGraph();
    if (!r) return null;
    let l = r.get(n);
    if (!l || 1 !== l.childrenNodes.length) return null;
    let s = l.childrenNodes[0];
    if (!s || "SLIDE" !== s.type) return null;
    let a = await ti(s);
    if (!a) return null;
    e.thumbnail_url && (i = await e9(e.thumbnail_url));
    i || (i = await tr(n, t));
    return {
      moduleId: e.id,
      module: e,
      jsx: a,
      thumbnailPublicURL: i || ""
    };
  } catch (t) {
    console.error(`Error creating SlideLayoutData for module ${e.id}:`, t);
    return null;
  }
}
async function e9(e) {
  if (e) try {
    let t = e.startsWith("http") ? e : `${window.location.origin}${e}`;
    let i = await fetch(t);
    if (i.ok) return i.url;
    return;
  } catch (e) {
    console.error("Failed to resolve module thumbnail URL:", e);
    return;
  }
}
async function te(e, t) {
  if (!e.length || !t) return {};
  let i = await Promise.all(e.map(e => e7(e, t)));
  let n = {};
  i.forEach(e => {
    e && (n[e.moduleId] = e);
  });
  return n;
}
let tt = async ({
  abortController: e,
  params: t,
  clientLifecycleId: i
}) => {
  let {
    dispatch,
    openFileKey,
    outline,
    layouts,
    slideDeckMetadata,
    libraryKey,
    subscribeToLibrary,
    flowManager
  } = t;
  if (!outline) {
    console.warn("Cannot generate deck: outline is null or undefined");
    return;
  }
  flowManager.createDeck();
  let h = {
    ..._$$Ay2(),
    clientLifecycleId: i
  };
  nv(libraryKey);
  let m = [];
  try {
    var _;
    var g;
    dispatch(renameFileOptimistic({
      file: {
        key: openFileKey
      },
      name: outline.title
    }));
    _ = "Generating slides from your outline";
    g = () => _$$cT(JT.SLIDES_OUTLINE_TO_DECK);
    debugState.dispatch(VisualBellActions.enqueue({
      message: _,
      type: eP,
      icon: VisualBellIcon.SPINNER,
      button: {
        text: "Stop",
        action: () => {
          debugState.dispatch(VisualBellActions.dequeue({
            matchType: eP
          }));
          g();
        }
      }
    }));
    let t = await withAbortSignal(cortexAPI.slides.createDeckFromOutline({
      outline,
      layouts: Object.fromEntries(Object.entries(layouts).map(([e, t]) => [e, {
        jsx: t.jsx,
        thumbnailPublicURL: t.thumbnailPublicURL
      }]))
    }, h), e.signal);
    let i = new StreamAsyncIterator(t);
    let d = (AppStateTsApi?.canvasGrid().canvasGridArray.getCopy() ?? []).length;
    let x = d;
    let y = 0;
    let f = [];
    let j = !0;
    for await (let t of i) {
      let i;
      let r;
      if (e.signal.aborted) {
        eM("Deck creation stopped");
        return;
      }
      j && ("presentation_title" !== t.role && console.error(`Expected first slide to be 'presentation_title', but got '${t.role}'`), j = !1);
      let u = layouts[t.layoutId];
      if (!u) continue;
      "presentation_title" === t.role ? (i = d, r = 0, x = d, y = 0) : ("chapter_title" === t.role ? (x++, y = 0) : y++, i = x, r = y);
      let _ = {
        rowIndex: i,
        colIndex: r,
        module: u.module,
        content: t.content
      };
      let g = await function ({
        dispatch: e,
        moduleWithSlideContent: t,
        subscribeToLibrary: i
      }) {
        return new Promise((n, r) => {
          !function ({
            dispatch: e,
            moduleWithSlideContent: t,
            onSuccess: i,
            onFailure: n,
            subscribeToLibrary: r
          }) {
            e(insertSharedModule({
              item: t.module,
              canvasPosition: new Point(),
              percentageOffset: new Point(),
              insertAsChildOfCanvas: !1,
              selectAfterInsert: !1,
              insertionCallback: (n, l) => {
                let s = n[0];
                AppStateTsApi?.canvasGrid().insertChildAtCoord(s, t.rowIndex, t.colIndex, "outline-to-deck");
                Ci({
                  libraryKey: t.module.library_key,
                  subscribeToLibrary: r,
                  slideId: s
                });
                let o = t.module;
                o.isHubFile && o.hub_file_id && e(trackSlideTemplateUsageThunk({
                  hubFileId: o.hub_file_id
                }));
                qm(e, o);
                i({
                  guid: s,
                  content: t.content
                });
              },
              errorCallback: () => {
                n(Error("Failed to insert slide"));
              }
            }));
          }({
            dispatch: e,
            moduleWithSlideContent: t,
            onSuccess: n,
            onFailure: r,
            subscribeToLibrary: i
          });
        });
      }({
        dispatch,
        moduleWithSlideContent: _,
        subscribeToLibrary
      });
      let b = getSingletonSceneGraph().get(g.guid);
      b && (_$$l3.system("outline-to-deck-lock-node", () => {
        b.locked = !0;
      }), m.push(b.guid));
      let E = {
        ...slideDeckMetadata,
        presentationTitle: outline.title,
        slideNumber: (r + 1).toString(),
        chapterNumber: i.toString()
      };
      f.push(tl({
        slideId: g.guid,
        content: t.content,
        slideMetadata: E,
        authInfo: h,
        abortSignal: e.signal,
        outline
      }));
    }
    await withAbortSignal(Promise.all(f), e.signal);
    fullscreenValue.commit();
    e.signal.aborted || (debugState.dispatch(VisualBellActions.dequeue({
      matchType: eP
    })), debugState.dispatch(VisualBellActions.enqueue({
      type: eD,
      messageComponentKey: VisualBellType.SLIDES_OUTLINE_TO_DECK_FEEDBACK,
      icon: VisualBellIcon.GREEN_CHECK,
      onDismiss: () => {
        debugState.dispatch(VisualBellActions.dequeue({
          matchType: eD
        }));
      },
      timeoutOverride: 6e4
    })));
  } catch (t) {
    if (e.signal.aborted) {
      eM("Deck creation stopped");
      return;
    }
    console.error("Encountered error while generating deck from outline", t);
    eF(t.message);
  } finally {
    for (let e of m) {
      let t = getSingletonSceneGraph().get(e);
      t && _$$l3.system("outline-to-deck-unlock-node", () => {
        t.locked = !1;
      });
    }
    flowManager.finish();
  }
};
async function ti(e) {
  if (!e) return null;
  try {
    let t = await serializeJSX(e, {
      excludeVectorData: !0,
      onlyIncludeTopPaint: !0,
      excludeImageData: !0,
      includeNames: !0,
      includeIDs: !1,
      useDivTagsForFrames: !0,
      tailwind: !0,
      strict: !1
    });
    return t.jsxStr?.replace(/\n|\r/g, "") || null;
  } catch (e) {
    console.error("Failed to serialize JSX for slide node:", e);
    return null;
  }
}
let tn = 480 / (16 / 9);
async function tr(e, t) {
  if (e && t) try {
    let i = await _$$Q2(e, !0, t, 480, tn, 2);
    if (!i?.thumbnailData) return;
    let n = await _$$Q("profile", i.thumbnailData, "image/png");
    return n?.data?.meta?.url;
  } catch (t) {
    console.error(`Failed to generate thumbnail for node ${e}:`, t);
    return;
  }
}
async function tl({
  slideId: e,
  content: t,
  slideMetadata: i,
  authInfo: n,
  abortSignal: r,
  outline: s
}) {
  let a = getSingletonSceneGraph().get(e);
  if (!a) return;
  _$$l3.system("outline-to-deck-write-outline-to-speaker-notes", () => {
    let e = convertMarkdownToEditorState(t);
    e && (a.slideSpeakerNotes = e);
  });
  let o = function (e, t) {
    let i = [];
    let n = [e];
    for (; n.length;) {
      let e = n.shift();
      if (!e) break;
      t(e) && i.push(e);
      e.childrenNodes && n.push(...e.childrenNodes);
    }
    return i;
  }(a, e => "TEXT" === e.type).map(e => ({
    id: e.guid,
    text: e.textContent
  }));
  let d = await serializeJSX(a, {
    strict: !1
  });
  Vm(e, createElement(generateShimmerOverlay));
  let c = () => {
    ks(e);
  };
  try {
    let e = await withAbortSignal(cortexAPI.shared.adjustText({
      action: {
        type: "REPLACE_SLIDE_CONTENT",
        slideContent: t,
        slideMetadata: i,
        outline: s
      },
      texts: o,
      jsonMode: o.length > 1,
      surroundingContext: d.jsxStr
    }, n), r);
    let l = new StreamAsyncIterator(e);
    let a = new Map();
    for await (let {
      delta,
      id
    } of l) {
      if (r.aborted) return;
      if (id) {
        let i = (a.get(id) || "") + delta;
        a.set(id, i);
        let n = getSingletonSceneGraph().get(id);
        n && _$$l3.system("outline-to-deck-replace-slide-content", () => {
          n.textContent = i;
        });
      }
    }
  } catch (t) {
    console.error(`Error replacing slide ${e} content`, t);
  } finally {
    c();
  }
}
function tc() {
  let e = useSetAtom(lockAtomFamily);
  let t = useCallback(() => {
    e(!1);
  }, [e]);
  return jsx(Jn.Provider, {
    value: Ji.OUTLINE_TO_DECK,
    children: jsx(bL, {
      defaultPosition: {
        x: 12,
        y: 72
      },
      width: 456,
      onClose: t,
      draggable: "header",
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: "Templates"
          })
        }), jsx(DialogBody, {
          children: jsx("div", {
            className: "x4zv5z4 xh8yej3 x5yr21d",
            children: jsx(_$$q, {
              showCloseButton: !1
            })
          })
        })]
      })
    })
  });
}
function tu(e) {
  return !e || "" === e.title && "" === e.subtitle && (0 === e.outlineItems.length || e.outlineItems.every(e => "" === e.content));
}
let tf = {
  createDeckOptionContainer: {
    height: "x5yr21d",
    ...textDisplayConfig.textBodyMedium,
    $$css: !0
  }
};
function tj() {
  return jsx("div", {
    className: "x78zum5 x1ijr6pc x1y64a76 x9f619",
    children: jsxs("div", {
      className: "xrvj5dj x1wlfl8j x1nfngrj x5yr21d xh8yej3",
      children: [jsx(tT, {}), jsx(tI, {}), jsx(tC, {})]
    })
  });
}
function tb({
  icon: e,
  title: t,
  options: i,
  value: n,
  onChange: l
}) {
  return jsx("div", {
    ...stylex.props(tf.createDeckOptionContainer),
    children: jsxs(SelectGroupLabel, {
      value: n,
      onChange: l,
      children: [jsx(SelectSeparator, {
        width: "fill",
        label: jsxs("div", {
          className: "x78zum5 x6s0dn4 xv1l7n4 x180r7m8",
          children: [e, t]
        })
      }), jsx(SelectContainer, {
        children: i.map(e => jsx(SelectOptionReset, {
          value: e,
          children: e
        }, e))
      })]
    })
  });
}
class tE extends _r {
  constructor() {
    super(...arguments);
    this.parse = e => {
      switch (e.toLowerCase()) {
        case "pitch":
          return "pitch";
        case "product showcase":
          return "product_showcase";
        case "product management":
          return "product_management";
        case "sales":
          return "sales";
        case "proposal":
          return "proposal";
        case "research report":
          return "research_report";
        case "knowledge":
          return "knowledge";
        case "meeting":
          return "meeting";
        case "portfolio":
          return "portfolio";
        default:
          return "auto";
      }
    };
  }
}
let tv = new tE();
function tT() {
  let {
    data,
    setUsecase
  } = JY();
  let i = data.deckOptions.usecase;
  let n = Ro.map(e => tv.format(e));
  let l = tv.format(i);
  return jsx(tb, {
    icon: jsx(_$$p, {}),
    title: "Use case",
    options: n,
    value: l,
    onChange: e => {
      setUsecase(tv.parse(e));
    }
  });
}
let tS = new KD({
  min: 1,
  max: 25
});
function tI() {
  let {
    data,
    setSlideCount
  } = JY();
  let i = data.deckOptions.slideCount;
  let n = jK.map(e => tS.format(e));
  let l = tS.format(i);
  return jsx(tb, {
    icon: jsx(_$$u, {}),
    title: "Slide count",
    options: n,
    value: l,
    onChange: e => {
      let i = tS.parse(e);
      null !== i && setSlideCount(i);
    }
  });
}
class tN extends _r {
  constructor() {
    super(...arguments);
    this.parse = e => {
      switch (e.toLowerCase()) {
        case "minimal":
          return "minimal";
        case "concise":
        default:
          return "concise";
        case "detailed":
          return "detailed";
        case "extensive":
          return "extensive";
      }
    };
  }
}
let tk = new tN();
function tC() {
  let {
    data,
    setTextDensity
  } = JY();
  let i = data.deckOptions.textDensity;
  let n = QD.map(e => tk.format(e));
  let l = tk.format(i);
  return jsx(tb, {
    icon: jsx(_$$h, {}),
    title: "Text density",
    options: n,
    value: l,
    onChange: e => {
      setTextDensity(tk.parse(e));
    }
  });
}
function tw() {
  return jsxs("div", {
    className: "x1ijr6pc x78zum5 xdt5ytf x1nfngrj xg01cxk xqcmdr3 x1q3qbx4 x10e4vud",
    children: [jsx("div", {
      className: "xwzfr38 xh8yej3 x176lpz5 x1mxnbhz x1n2onr6 xb3r6kr xg01cxk x7t6ubo x15tgt8z xa4qsjk x4hg4is x1uzojwf",
      children: jsx("div", {
        className: "xh8yej3 x5yr21d xqnc8i9 xz4fkyq x17t6hpn x16ab5o6 x7t6ubo xa4qsjk x1esw782 x1uzojwf"
      })
    }), jsx("div", {
      className: "xwzfr38 xh8yej3 x176lpz5 x1mxnbhz x1n2onr6 xb3r6kr xg01cxk x7t6ubo x15tgt8z xa4qsjk x4hg4is x1x1c4bx",
      children: jsx("div", {
        className: "xh8yej3 x5yr21d xqnc8i9 xz4fkyq x17t6hpn x16ab5o6 x7t6ubo xa4qsjk x1esw782 x1x1c4bx"
      })
    }), jsx("div", {
      className: "xwzfr38 xh8yej3 x176lpz5 x1mxnbhz x1n2onr6 xb3r6kr xg01cxk x7t6ubo x15tgt8z xa4qsjk x4hg4is x1nrwgbl",
      children: jsx("div", {
        className: "xh8yej3 x5yr21d xqnc8i9 xz4fkyq x17t6hpn x16ab5o6 x7t6ubo xa4qsjk x1esw782 x1nrwgbl"
      })
    })]
  });
}
let tL = {
  divider: {
    width: "xh8yej3",
    height: "xjm9jq1",
    backgroundColor: "xbpqucl",
    position: "x1n2onr6",
    $$css: !0
  },
  hiddenDivider: {
    height: "xqtp20y",
    $$css: !0
  },
  shortDivider: {
    marginLeft: "x1gh5o4n",
    marginRight: "x1rmmofs",
    width: "xloyg6u",
    $$css: !0
  },
  hoverLine: {
    position: "x10l6tqk",
    top: "xwa60dl",
    left: "xu96u03",
    transform: "x1cb1t30",
    width: "xh8yej3",
    height: "xqtp20y",
    backgroundColor: "xu5wzci",
    transition: "x1fhcob3",
    $$css: !0
  },
  shortHoverLine: {
    borderRadius: "x19y5rnk",
    $$css: !0
  }
};
function tP({
  hoverElements: e,
  disabled: t,
  alwaysShow: i = !1,
  variant: n = "full"
}) {
  let [s, a] = useState(!1);
  let o = useCallback(() => {
    t || a(!0);
  }, [t]);
  let d = useCallback(() => {
    a(!1);
  }, []);
  let c = "short" === n;
  return jsx("div", {
    ...props(tL.divider, i ? null : tL.hiddenDivider, c ? tL.shortDivider : null),
    children: jsxs("div", {
      className: "x10l6tqk xwa60dl xu96u03 x1cb1t30 xh8yej3 x78zum5 x6s0dn4 xl56j7k xg01cxk xzdg38j",
      style: {
        opacity: s ? 1 : 0
      },
      onMouseEnter: o,
      onMouseLeave: d,
      children: [jsx("div", {
        ...props(tL.hoverLine, c ? tL.shortHoverLine : null),
        style: {
          height: s ? "2px" : "0"
        }
      }), jsx("div", {
        className: "x78zum5 x6s0dn4 xl56j7k x1rjybxy x1n2onr6",
        children: e
      })]
    })
  });
}
function tD({
  onClick: e,
  disabled: t = !1
}) {
  return jsx(tP, {
    alwaysShow: !0,
    disabled: t,
    hoverElements: jsx(tU, {
      onClick: e,
      disabled: t
    })
  });
}
function tR({
  onClick: e,
  disabled: t = !1
}) {
  return jsx(tP, {
    variant: "short",
    alwaysShow: !1,
    disabled: t,
    hoverElements: jsx(tF, {
      onClick: e,
      disabled: t
    })
  });
}
function tM({
  onAddSlide: e,
  onAddChapter: t,
  disabled: i = !1,
  alwaysShow: n = !0
}) {
  return jsx(tP, {
    alwaysShow: n,
    disabled: i,
    hoverElements: jsxs(Fragment, {
      children: [jsx(tF, {
        onClick: e,
        disabled: i
      }), jsx(tU, {
        onClick: t,
        disabled: i
      })]
    })
  });
}
function tF({
  onClick: e,
  disabled: t
}) {
  return jsx(tV, {
    text: "New slide",
    onClick: e,
    disabled: t
  });
}
function tU({
  onClick: e,
  disabled: t
}) {
  return jsx(tV, {
    text: "New section",
    onClick: e,
    disabled: t
  });
}
function tV({
  text: e,
  onClick: t,
  disabled: i
}) {
  return jsx(Button, {
    variant: "primary",
    onClick: t,
    disabled: i,
    iconPrefix: jsx(_$$J4, {}),
    children: e
  });
}
class tK {
  constructor(e, t, i = []) {
    this.title = e;
    this.subtitle = t;
    this.entries = i;
  }
  static fromDeckOutline(e) {
    return new tK(e.title, e.subtitle, e.outlineItems);
  }
  static toDeckOutline(e) {
    return this.validate(e) ? {
      title: e.title,
      subtitle: e.subtitle,
      outlineItems: e.entries
    } : null;
  }
  static validate(e) {
    if (0 === e.entries.length) return !0;
    let t = e.entries[0];
    if (!t || !t$(t)) return !1;
    let i = -1;
    for (let [t, n] of e.entries.entries()) {
      let r = t > 0 ? e.entries[t - 1] : null;
      if (t$(n)) {
        if (r && t$(r)) return !1;
        i++;
      } else if (tB(n) && -1 === i) return !1;
    }
    return !0;
  }
  updateTitle(e) {
    return new tK(e, this.subtitle, this.entries);
  }
  updateSubtitle(e) {
    return new tK(this.title, e, this.entries);
  }
  updateChapterAt(e, t) {
    if (e < 0 || e >= this.entries.length) return this;
    let i = this.entries[e];
    if (!i || !t$(i) || i.content === t) return this;
    let n = [...this.entries];
    n[e] = {
      ...i,
      content: t
    };
    return new tK(this.title, this.subtitle, n);
  }
  updateSlideAt(e, t) {
    if (e < 0 || e >= this.entries.length) return this;
    let i = this.entries[e];
    if (!i || !tB(i) || i.content === t) return this;
    let n = [...this.entries];
    n[e] = {
      ...i,
      content: t
    };
    return new tK(this.title, this.subtitle, n);
  }
  addSlideAfter(e, t) {
    return this.addSlide(e, t, "after");
  }
  addSlideBefore(e, t) {
    return this.addSlide(e, t, "before");
  }
  addSlide(e, t, i) {
    if (!this.validateAddSlideOperation(e, i)) return this;
    let n = "after" === i ? e + 1 : e;
    let r = [...this.entries.slice(0, n), {
      type: "slide",
      content: t
    }, ...this.entries.slice(n)];
    return new tK(this.title, this.subtitle, r);
  }
  validateAddSlideOperation(e, t) {
    if (e < 0 || e >= this.entries.length) return !1;
    let i = this.entries[e];
    return !!i && !!(tB(i) || t$(i) && "after" === t);
  }
  addChapterBefore(e, t) {
    return this.addChapter(e, t, "before");
  }
  addChapterAfter(e, t) {
    return this.addChapter(e, t, "after");
  }
  addChapter(e, t, i) {
    if (!this.validateAddChapterOperation(e, i)) return this;
    let n = "after" === i ? e + 1 : e;
    let r = [...this.entries.slice(0, n), {
      type: "chapter",
      content: t
    }, {
      type: "slide",
      content: ""
    }, ...this.entries.slice(n)];
    return new tK(this.title, this.subtitle, r);
  }
  validateAddChapterOperation(e, t) {
    if (e < 0 || e >= this.entries.length) return 0 === this.entries.length && 0 === e;
    let i = this.entries[e];
    if (!i) return !1;
    if ("after" === t) {
      if (tB(i)) {
        let t = e + 1 < this.entries.length ? this.entries[e + 1] : null;
        return !t || t$(t);
      }
      return !1;
    }
    if (t$(i)) {
      let t = e > 0 ? this.entries[e - 1] : null;
      return !t || tB(t);
    }
    return !1;
  }
}
function t$(e) {
  return "chapter" === e.type;
}
function tB(e) {
  return "slide" === e.type;
}
let tz = {
  textarea: {
    width: "xh8yej3",
    resize: "xtt52l0",
    border: "x1gs6z28",
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
    outline: "x1a2a7pz",
    outlineColor: null,
    outlineOffset: null,
    outlineStyle: null,
    outlineWidth: null,
    backgroundColor: "xjbqb8w",
    ...textDisplayConfig.textBodyLarge,
    color: "x1akne3o",
    "::placeholder_color": "x1x7eeca",
    $$css: !0
  }
};
let tG = forwardRef(function ({
  value: e,
  placeholder: t,
  textStyle: i = "textBodyLarge",
  onChange: n,
  maxLength: s,
  disabled: a
}, o) {
  let d = useRef(null);
  let c = useCallback(() => {
    let e = d.current;
    e && (e.style.height = "auto", e.style.height = `${e.scrollHeight}px`);
  }, []);
  useEffect(() => {
    c();
  }, [e, c]);
  let u = useCallback(() => {
    let e = d.current;
    if (e) {
      e.focus();
      let t = e.value.length;
      e.setSelectionRange(t, t);
    }
  }, []);
  useImperativeHandle(o, () => ({
    focus: u
  }), [u]);
  let p = useCallback(e => {
    a || n(e.target.value);
  }, [n, a]);
  return jsx("textarea", {
    ref: d,
    ...props(tz.textarea, textDisplayConfig[i]),
    value: e,
    onChange: p,
    placeholder: t,
    rows: 1,
    maxLength: s,
    disabled: a,
    "aria-disabled": a
  });
});
let tH = {
  slideNumberDisplay: {
    ...textDisplayConfig.textBodyMediumStrong,
    color: "x1n0bwc9",
    $$css: !0
  }
};
function tY({
  outline: e,
  editsDisabled: t,
  onChange: i
}) {
  var n;
  let {
    outlineItems,
    onTitleChange,
    onSubtitleChange,
    onChapterContentChange,
    onSlideContentChange,
    onAddSlideAfter,
    onAddChapterBefore,
    onAddChapterAfter
  } = function (e, t) {
    let i = _$$k4(() => tK.fromDeckOutline(e), [e]);
    let n = useCallback(e => {
      let i = tK.toDeckOutline(e);
      i ? t(i) : console.error("Outline has become invalid due to user edits. This should never happen", e);
    }, [t]);
    let r = useCallback(e => {
      n(i.updateTitle(e));
    }, [i, n]);
    let s = useCallback(e => {
      n(i.updateSubtitle(e));
    }, [i, n]);
    let a = useCallback((e, t) => {
      n(i.updateChapterAt(e, t));
    }, [i, n]);
    let o = useCallback((e, t) => {
      n(i.updateSlideAt(e, t));
    }, [i, n]);
    let d = useCallback(e => {
      n(i.addSlideAfter(e, ""));
    }, [i, n]);
    let c = useCallback(e => {
      n(i.addChapterBefore(e, ""));
    }, [i, n]);
    let u = useCallback(e => {
      n(i.addChapterAfter(e, ""));
    }, [i, n]);
    return {
      outlineItems: i,
      onTitleChange: r,
      onSubtitleChange: s,
      onChapterContentChange: a,
      onSlideContentChange: o,
      onAddSlideAfter: d,
      onAddChapterBefore: c,
      onAddChapterAfter: u
    };
  }(e, i);
  n = outlineItems.entries;
  let {
    entryIndexToSlideIndex
  } = useMemo(() => {
    let e = {};
    let t = {};
    let i = 0;
    let r = 0;
    n.forEach((n, l) => {
      tB(n) ? (e[l] = i, i++) : t$(n) && (t[l] = r, r++);
    });
    return {
      entryIndexToSlideIndex: e,
      entryIndexToChapterIndex: t
    };
  }, [n]);
  return jsxs("div", {
    className: "x1ijr6pc x1yjdb4r x1mxnbhz x1vqtdw0 x1ib1h6n xn3rn47",
    children: [jsxs("div", {
      className: "xqb5aye",
      children: [jsx(tq, {
        title: outlineItems.title,
        editsDisabled: t,
        onChange: onTitleChange
      }), jsx(tW, {
        subtitle: outlineItems.subtitle,
        editsDisabled: t,
        onChange: onSubtitleChange
      })]
    }), outlineItems.entries.length > 0 && jsx(tD, {
      onClick: () => onAddChapterBefore(0),
      disabled: t
    }), outlineItems.entries.map((e, i) => {
      let n = outlineItems.entries[i + 1];
      return [function (e, i) {
        if (t$(e)) return jsx(tJ, {
          entry: e,
          entryIndex: i,
          onChapterContentChange,
          editsDisabled: t
        }, `chapter-${i}`);
        if (tB(e)) {
          let n = entryIndexToSlideIndex[i];
          if (void 0 !== n) return jsx(tQ, {
            entry: e,
            slideNumber: n + 1,
            onSlideContentChange: e => onSlideContentChange(i, e),
            editsDisabled: t
          }, `slide-${i}`);
        }
        return null;
      }(e, i), function (e, i, n) {
        let l = `divider-after-${n}`;
        return t$(e) && i && tB(i) || tB(e) && i && tB(i) ? jsx(tR, {
          onClick: () => onAddSlideAfter(n),
          disabled: t
        }, l) : tB(e) && (i && t$(i) || !i) ? jsx(tM, {
          alwaysShow: void 0 !== i,
          onAddSlide: () => onAddSlideAfter(n),
          onAddChapter: () => onAddChapterAfter(n),
          disabled: t
        }, l) : null;
      }(e, n, i)].filter(isNotNullish);
    })]
  });
}
function tq({
  title: e,
  editsDisabled: t,
  onChange: i
}) {
  return jsx(tG, {
    textStyle: "textHeadingMedium",
    value: e,
    placeholder: "Presentation title",
    onChange: i,
    disabled: t
  });
}
function tW({
  subtitle: e,
  editsDisabled: t,
  onChange: i
}) {
  return jsx(tG, {
    textStyle: "textBodyMediumStrong",
    value: e,
    placeholder: "A subtitle, if you need it",
    onChange: i,
    disabled: t
  });
}
function tJ({
  entry: e,
  entryIndex: t,
  onChapterContentChange: i,
  editsDisabled: n
}) {
  let s = useCallback(e => {
    i(t, e);
  }, [t, i]);
  return jsx("div", {
    className: "xpe9lol",
    children: jsx(tG, {
      textStyle: "textHeadingSmall",
      value: e.content,
      placeholder: "Add section title",
      onChange: s,
      disabled: n
    })
  });
}
function tQ({
  entry: e,
  slideNumber: t,
  onSlideContentChange: i,
  editsDisabled: n
}) {
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x1rjybxy xqb5aye",
    children: [jsx("h3", {
      ...props(tH.slideNumberDisplay),
      children: `Slide ${t}`
    }), jsx(tG, {
      textStyle: "textBodyMedium",
      value: e.content,
      onChange: i,
      maxLength: 1e3,
      placeholder: "Add slide content",
      disabled: n
    })]
  });
}
let t6 = {
  minimizedPromptDisplay: {
    ...textDisplayConfig.textBodyLarge,
    color: "x1akne3o",
    textOverflow: "xlyipyv",
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    whiteSpace: "xuxw1ft",
    flexGrow: "x1iyjqo2",
    cursor: "x1ed109x",
    $$css: !0
  }
};
let t8 = {
  buttonBase: {
    width: "xvy4d1p",
    height: "xxk0z11",
    borderRadius: "x16rqkct",
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
let t3 = {
  disabledButton: {
    ...t8.buttonBase,
    backgroundColor: "xgbcquw",
    $$css: !0
  },
  attachmentPlusButton: {
    ...t8.buttonBase,
    backgroundColor: "x1v8gsql",
    ":hover_backgroundColor": "x8nzjqq",
    $$css: !0
  },
  submitButton: {
    ...t8.buttonBase,
    backgroundColor: "xu5wzci",
    ":hover_backgroundColor": "xazsp2l",
    $$css: !0
  }
};
function t7({
  prompt: e,
  setPrompt: t,
  defaultExpanded: i,
  generationInProgress: n,
  canSubmit: s,
  onSubmit: a,
  onStop: o,
  onRetry: d
}) {
  let c = useRef(null);
  let [u, p] = useState(!1);
  let x = useCallback(() => {
    p(!1);
    a();
  }, [a]);
  let h = !i && !u;
  useClickOutside(() => {
    h || p(!1);
  }, {
    ignore: [c.current]
  });
  return jsx("div", {
    className: "x1ijr6pc x1yjdb4r x1mxnbhz x1vqtdw0",
    ref: c,
    children: h ? jsx(ie, {
      prompt: e,
      onRequestEditPrompt: () => p(!0),
      showLoading: n,
      showRetry: !n,
      onStop: o,
      onRetry: d
    }) : jsxs(Fragment, {
      children: [jsx(t9, {
        prompt: e,
        setPrompt: t
      }), jsx(it, {}), jsx(ii, {
        canSubmit: s,
        onSubmit: x
      })]
    })
  });
}
function t9({
  prompt: e,
  setPrompt: t
}) {
  let i = useRef(null);
  useEffect(() => {
    i.current?.focus();
  }, []);
  return jsx("div", {
    className: "x78zum5 x1rjybxy x1ger3g x1phlbz0 x1odjw0f",
    children: jsx(tG, {
      ref: i,
      value: e,
      placeholder: "Type your presentation idea here",
      onChange: t,
      maxLength: 1e5
    })
  });
}
function ie({
  prompt: e,
  onRequestEditPrompt: t,
  showLoading: i,
  showRetry: n,
  onStop: l,
  onRetry: s
}) {
  return jsxs("div", {
    className: "x78zum5 x1rjybxy x1ger3g x1phlbz0 x1odjw0f xnuq7ks",
    children: [jsx(ButtonPrimitive, {
      ...props(t6.minimizedPromptDisplay),
      onClick: t,
      children: e
    }), i && jsx(ButtonPrimitive, {
      onClick: l,
      children: jsx(LoadingSpinner, {})
    }), n && jsx(ButtonPrimitive, {
      onClick: s,
      children: jsx(_$$_3, {})
    })]
  });
}
function it() {
  return jsx("div", {
    className: "xh8yej3 xjm9jq1 xbpqucl"
  });
}
function ii({
  canSubmit: e,
  onSubmit: t
}) {
  return jsxs("div", {
    className: "x78zum5 x6s0dn4 xc7ga6q x1rjybxy",
    children: [jsx(ir, {
      onClick: noop
    }), jsx("div", {
      className: "x1iyjqo2"
    }), jsx(il, {
      disabled: !e,
      onClick: t
    })]
  });
}
function ir({
  onClick: e
}) {
  return jsx(ButtonPrimitive, {
    ...props(t3.attachmentPlusButton),
    onClick: e,
    htmlAttributes: {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": "Attachments coming soon"
    },
    children: jsx(_$$x2, {})
  });
}
function il({
  disabled: e,
  onClick: t
}) {
  return jsx(ButtonPrimitive, {
    ...props(e ? t3.disabledButton : t3.submitButton),
    onClick: t,
    disabled: e,
    children: jsx(_$$N, {})
  });
}
let is = {
  templateSelect: {
    height: "xy75621",
    width: "x1fznrkb",
    borderRadius: "x19y5rnk",
    border: "xehbxol",
    overflow: "xb3r6kr",
    cursor: "x1ypdohk",
    display: "x78zum5",
    alignItems: "x6s0dn4",
    justifyContent: "xl56j7k",
    $$css: !0
  },
  templateSelectActive: {
    border: "x10ob8s7",
    $$css: !0
  }
};
function ia() {
  let [e, t] = useAtomValueAndSetter(lockAtomFamily);
  let i = _$$sH();
  let n = NG(i).data;
  let s = n?.[0];
  let a = useCallback(() => {
    t(e => !e);
  }, [t]);
  return jsx(ButtonPrimitive, {
    ...stylex.props(is.templateSelect, e ? is.templateSelectActive : null),
    onClick: a,
    htmlAttributes: {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": "Select a template",
      "data-tooltip-offset-y": "-2px",
      "data-tooltip-show-above": !0
    },
    children: s?.thumbnail_url && jsx(WAFImage, {
      src: s.thumbnail_url,
      alt: s.name,
      loading: "lazy",
      className: "xh8yej3 x5yr21d xl1xv1r x115dhu7"
    })
  });
}
let io = {
  mainContainer: {
    paddingTop: "x1w4f5ud",
    transitionProperty: "x5ln57a",
    transitionDuration: "x13dflua",
    transitionTimingFunction: "xz4gly6",
    boxSizing: "x9f619",
    $$css: !0
  },
  mainContainerExpanded: {
    flex: "x1cqoux5",
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    minHeight: "x2lwn1j",
    opacity: "x1hc1fzr",
    $$css: !0
  },
  mainContainerCollapsed: {
    flexGrow: "x1c4vz4f",
    opacity: "xg01cxk",
    $$css: !0
  },
  footer: {
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    alignItems: "x6s0dn4",
    justifyContent: "xl56j7k",
    width: "x1ijr6pc",
    $$css: !0
  },
  footerHidden: {
    visibility: "xlshs6z",
    $$css: !0
  }
};
function id() {
  let e = function () {
    let e = EG();
    let {
      state
    } = wj(JT.SLIDES_GENERATE_OUTLINE);
    let i = e?.outline && !tu(e.outline);
    return state === qy.RUNNING || i ? "outline_view" : "prompt_view";
  }();
  let {
    state
  } = wj(JT.SLIDES_GENERATE_OUTLINE);
  let i = useAtomWithSubscription(lockAtomFamily);
  let {
    data,
    setOutline
  } = JY();
  let s = data?.outline;
  let a = null;
  s && !tu(s) ? a = jsx(tY, {
    outline: s,
    onChange: setOutline,
    editsDisabled: state === qy.RUNNING
  }) : state === qy.RUNNING && (a = jsx(tw, {}));
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x6s0dn4 xl56j7k x1iyjqo2",
    children: [i && jsx(tc, {}), jsx(ix, {
      defaultExpanded: "prompt_view" === e
    }), jsx(tj, {}), jsx(ih, {
      expanded: "outline_view" === e,
      children: a
    }), jsx(ic, {
      hidden: "prompt_view" === e
    })]
  });
}
function ic({
  hidden: e
}) {
  return jsxs("div", {
    ...props(io.footer, e ? io.footerHidden : null),
    children: [jsx("div", {
      className: "x1eochie xr6hmy7 xjm9jq1 x2lah0s"
    }), jsx(iu, {})]
  });
}
function iu() {
  return jsxs("div", {
    className: "x78zum5 x6s0dn4 x1qughib xh8yej3 x1aaf699 x9f619",
    children: [jsx(ia, {}), jsx(ip, {})]
  });
}
function ip() {
  let {
    isTemplateLoaded,
    modules
  } = function () {
    let e = _$$sH();
    let t = NG(e);
    let i = useMemo(() => t.status === LOADING_STATUS.LOADED ? t.data : [], [t]);
    return {
      isTemplateLoaded: t.status === LOADING_STATUS.LOADED,
      modules: i
    };
  }();
  let i = EG().outline;
  let n = function ({
    modules: e
  }) {
    let t = useDispatch<AppDispatch>();
    let i = useAtomWithSubscription(openFileKeyAtom);
    let n = m4();
    let {
      data,
      createDeck,
      finish
    } = JY();
    let d = function () {
      let e = selectCurrentUser();
      let t = useCurrentUserOrg();
      let i = getCurrentTeam();
      return {
        date: new Date().toISOString().split("T")[0] ?? "",
        author: e?.name ?? "",
        org: t?.name ?? "",
        team: i?.name ?? ""
      };
    }();
    let c = _$$D2(e[0]?.library_key);
    let [u, p] = useState({});
    useEffect(() => {
      let t = !1;
      (async function () {
        if (!e.length || !i) {
          p({});
          return;
        }
        try {
          let n = await te(e, i);
          t || p(n);
        } catch (e) {
          console.error("Failed to load layouts:", e);
          t || p({});
        }
      })();
      return () => {
        t = !0;
      };
    }, [e, i]);
    let {
      start,
      stop
    } = RL(JT.SLIDES_OUTLINE_TO_DECK, tt);
    let m = _$$k4(() => i && data.outline && data.templateLibraryKey && 0 !== Object.keys(u).length ? {
      dispatch: t,
      openFileKey: i,
      outline: data.outline,
      libraryKey: data.templateLibraryKey,
      modules: e,
      subscribeToLibrary: c,
      slideDeckMetadata: d,
      layouts: u,
      flowManager: {
        createDeck,
        finish
      }
    } : null, [t, i, data.outline, data.templateLibraryKey, e, u, c, d, createDeck, finish]);
    return useCallback(() => {
      if (n(), stop(), !m) {
        console.warn("Cannot start outline to deck: missing required parameters");
        return;
      }
      B3(JT.SLIDES_OUTLINE_TO_DECK);
      start(m);
    }, [n, m, start, stop]);
  }({
    modules
  });
  let {
    state
  } = wj(JT.SLIDES_GENERATE_OUTLINE);
  return jsx(ButtonLarge, {
    onClick: n,
    iconPrefix: jsx(_$$x, {}),
    disabled: !isTemplateLoaded || !i || tu(i) || state === qy.RUNNING,
    children: "Make a deck"
  });
}
function ix({
  defaultExpanded: e
}) {
  let t = function () {
    let e = EG();
    return !!(e?.prompt && e.prompt.trim().length > 0);
  }();
  let {
    generateOutline,
    stopGeneratingOutline
  } = function () {
    let e = EG();
    let t = e?.prompt;
    let {
      callbacks,
      reset
    } = function () {
      let {
        setOutline
      } = JY();
      let [t, i] = useState(e$);
      useEffect(() => {
        setOutline(t);
      }, [t, setOutline]);
      let n = useCallback(e => {
        i(t => ({
          ...t,
          title: t.title + e
        }));
      }, []);
      let r = useCallback(e => {
        i(t => ({
          ...t,
          subtitle: t.subtitle + e
        }));
      }, []);
      let s = useCallback((e, t) => {
        i(i => {
          let n = [...i.outlineItems];
          if (e > n.length) for (console.warn(`Received outline item type delta with index ${e} but only ${n.length} items exist. Filling in with empty items.`); n.length < e;) n.push({
            type: "slide",
            content: ""
          });
          n[e] = {
            type: t,
            content: ""
          };
          return {
            ...i,
            outlineItems: n
          };
        });
      }, []);
      let a = useCallback((e, t, n) => {
        i(i => {
          let r = [...i.outlineItems];
          let l = r[e];
          return l && l.type === t && "slide" === l.type ? (r[e] = {
            ...l,
            role: (l.role || "") + n
          }, {
            ...i,
            outlineItems: r
          }) : (console.warn(`Received outline item role delta with index ${e} but item type ${t} does not match ${l?.type}`), i);
        });
      }, []);
      let o = useCallback((e, t, n) => {
        i(i => {
          let r = [...i.outlineItems];
          let l = r[e];
          return l && l.type === t ? (r[e] = {
            ...l,
            content: (l.content || "") + n
          }, {
            ...i,
            outlineItems: r
          }) : (console.warn(`Received outline item content delta with index ${e} but item type ${t} does not match ${l?.type}`), i);
        });
      }, []);
      let d = useCallback(() => {
        i(e$);
      }, []);
      return {
        outline: t,
        setOutline: i,
        callbacks: {
          onDeckTitleDelta: n,
          onDeckSubtitleDelta: r,
          onOutlineItemTypeDelta: s,
          onOutlineItemRoleDelta: a,
          onOutlineItemContentDelta: o
        },
        reset: d
      };
    }();
    let {
      start,
      stop,
      state
    } = RL(JT.SLIDES_GENERATE_OUTLINE, eU);
    return {
      generateOutline: useCallback(() => {
        if (!t) {
          console.warn("Attempting to generate outline, but prompt is empty.");
          return;
        }
        B3(JT.SLIDES_GENERATE_OUTLINE);
        reset();
        start({
          description: t,
          outlineDeltaCallbacks: callbacks,
          deckOptions: e.deckOptions,
          resetOutline: reset
        });
      }, [t, callbacks, start, reset, e.deckOptions]),
      stopGeneratingOutline: useCallback(() => {
        state !== qy.RUNNING && console.warn("Attempting to stop outline generation, but it is not running.");
        stop();
        reset();
      }, [state, stop, reset])
    };
  }();
  let {
    data,
    setPrompt
  } = JY();
  let {
    state
  } = wj(JT.SLIDES_GENERATE_OUTLINE);
  return jsx(t7, {
    prompt: data?.prompt,
    setPrompt,
    canSubmit: t,
    onSubmit: generateOutline,
    defaultExpanded: e,
    generationInProgress: state === qy.RUNNING,
    onStop: stopGeneratingOutline,
    onRetry: generateOutline
  });
}
function ih({
  expanded: e,
  children: t
}) {
  return jsx("div", {
    ...props(io.mainContainer, e ? io.mainContainerExpanded : io.mainContainerCollapsed),
    children: jsx(ScrollContainer, {
      fill: !0,
      children: t
    })
  });
}
function im() {
  return jsxs("div", {
    className: "xn9wirt x1dr59a3 x17qcxcr x1n2onr6",
    children: [jsx(ej, {}), jsx("div", {
      className: "x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 x5yr21d xz9dl7a x9f619",
      children: jsx(i_, {})
    })]
  });
}
function i_() {
  switch (mG()) {
    case "OUTLINE":
      return jsx(id, {});
    case "GENERATION_LOADING":
      return jsx(ei, {});
    default:
      return null;
  }
}
let iT = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M16.5 7h-9a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 6 16.5v-9A1.5 1.5 0 0 1 7.5 6h9A1.5 1.5 0 0 1 18 7.5V12a.5.5 0 0 1-1 0V7.5a.5.5 0 0 0-.5-.5m-3.488 6.005a1 1 0 0 1 1.53-.849l3.993 2.496a1 1 0 0 1 0 1.696l-3.993 2.496a1 1 0 0 1-1.53-.849zm4.993 2.495-3.993-2.495v4.99z",
      clipRule: "evenodd"
    })
  });
});
let iV = atomWithReducer({
  type: "NONE"
}, (e, t) => {
  switch (t.type) {
    case "SELECT_SLIDE_TRANSITION":
      if ("SLIDE_TRANSITION" === e.type) return {
        type: "NONE"
      };
      return {
        type: "SLIDE_TRANSITION"
      };
    case "SET_OBJECT_ANIMATION_SELECTION":
      if (t.selectedNodeIds.length > 1) return {
        type: "MULTIPLE_OBJECT_ANIMATIONS",
        selectedNodeIds: t.selectedNodeIds
      };
      {
        let e = t.selectedNodeIds[0];
        if (!e) return {
          type: "NONE"
        };
        return {
          type: "SINGLE_OBJECT_ANIMATION",
          selectedNodeId: e
        };
      }
    case "CLEAR_SELECTION":
      return {
        type: "NONE"
      };
  }
});
function iK() {
  return "SLIDE_TRANSITION" === useAtomWithSubscription(iV).type;
}
var iG = iz;
let iY = "slides_expandable_section--section--5Gnqz";
let iq = "slides_expandable_section--sectionHeader--FwCzh";
let iW = "slides_expandable_section--outlineHighlight--cldTO";
let iJ = "slides_expandable_section--fullHighlight--LcLIJ";
let iQ = "slides_expandable_section--expanded--dDJkR";
let iX = "slides_expandable_section--sectionHeaderTitle--jrsGf";
let iZ = "slides_expandable_section--sectionHeaderContents--4Q5ay";
var i0 = (e => (e[e.FULL = 0] = "FULL", e[e.OUTLINE_ONLY = 1] = "OUTLINE_ONLY", e))(i0 || {});
(e => {
  e.ExpandableSection = function ({
    title: e,
    tooltip: t,
    leftIcon: i,
    rightItems: n,
    expanded: l,
    highlight: s,
    onClick: a,
    onMouseDown: o,
    onMouseMove: d,
    onMouseUp: c,
    onMouseEnter: u,
    onMouseLeave: p,
    onContextMenu: x,
    onKeyDown: h,
    forwardedRef: m,
    children: _,
    recordingKey: g
  }) {
    let y = e => t => {
      if (t.target === t.currentTarget) return e?.(t);
    };
    let f = `${e.replace(/\s+/g, "-")}-label`;
    return jsxs("div", {
      className: iY,
      "data-tooltip": t,
      "data-tooltip-type": KindEnum.TEXT,
      children: [jsxs(RecordableDiv, {
        "aria-controls": "expandable-section-content",
        "aria-expanded": l,
        "aria-labelledby": f,
        className: iG()(iq, {
          [iW]: 1 === s,
          [iJ]: 0 === s,
          [iQ]: l
        }),
        forwardedRef: m,
        onClick: y(a),
        onContextMenu: x,
        onKeyDown: h,
        onMouseDown: y(o),
        onMouseEnter: u,
        onMouseLeave: p,
        onMouseMove: y(d),
        onMouseUp: y(c),
        recordingKey: g,
        role: "button",
        tabIndex: 0,
        children: [jsx("div", {
          className: cssBuilderInstance.ml4.$,
          children: i
        }), jsx("div", {
          id: f,
          className: iX,
          children: e
        }), n]
      }), l && jsx("div", {
        id: "expandable-section-content",
        className: iG()(iZ, {
          [iQ]: l
        }),
        children: _
      })]
    });
  };
  e.LabelInputRow = function ({
    labelTx: e,
    input: t
  }) {
    return jsxs("div", {
      className: "slides_expandable_section--labelInputRow--60v5b",
      children: [jsx("div", {
        className: "slides_expandable_section--label--aOsKU",
        children: e
      }), jsx("div", {
        className: "slides_expandable_section--input--ZOwBm",
        children: t
      })]
    });
  };
  e.DROPDOWN_WIDTH = 150;
  e.SelectOverride = function ({
    OriginalComponent: t,
    ...i
  }) {
    return jsx(t, {
      ...i,
      inputClassName: be,
      iconClassName: Kk,
      dropdownWidth: e.DROPDOWN_WIDTH,
      dropdownAlignment: "right"
    });
  };
})(n || (n = {}));
let {
  LabelInputRow: _LabelInputRow
} = n;
let i4 = "MIXED";
function i2(e, t, i, n) {
  let r = new Set(n.map(e => e.action.transitionNodeID));
  let l = t.filter(uc).map(e => r.has(e.action.transitionNodeID) ? {
    ...e,
    startCondition: i
  } : e);
  let s = kP.toPrototypeInteractions(l);
  e.objectAnimations = s;
}
let i6 = new class {
  constructor() {
    this.format = e => {
      switch (e) {
        case AnimationTriggerType.TRIGGER:
          return getI18nString("slides.properties_panel.object_animations.start_condition.trigger");
        case AnimationTriggerType.AFTER_PREVIOUS:
          return getI18nString("slides.properties_panel.object_animations.start_condition.after_previous_short");
      }
    };
    this.formatExtended = e => {
      switch (e) {
        case AnimationTriggerType.TRIGGER:
          return {
            text: getI18nString("slides.properties_panel.object_animations.start_condition.trigger")
          };
        case AnimationTriggerType.AFTER_PREVIOUS:
          return {
            text: getI18nString("slides.properties_panel.object_animations.start_condition.after_previous")
          };
      }
    };
  }
}();
function i8({
  startCondition: e,
  onChange: t,
  hideAfterPreviousOption: i,
  recordingKey: n,
  nodeId: s
}) {
  let o = useMemo(() => i ? [AnimationTriggerType.TRIGGER] : [AnimationTriggerType.TRIGGER, AnimationTriggerType.AFTER_PREVIOUS], [i]);
  let d = useCallback(e => {
    if (e) {
      for (let i of o) if (i6.format(i) === e) {
        t(i);
        return;
      }
    }
  }, [o, t]);
  if (void 0 === e) return null;
  let u = isInvalidValue(e) ? i4 : i6.format(e);
  return jsx(_LabelInputRow, {
    labelTx: renderI18nText("slides.properties_panel.object_animations.animation_trigger"),
    input: jsxs(SelectGroupLabel, {
      onChange: _$$nc.user("change-slides-animation-start-condition", d),
      value: u,
      recordingKey: n,
      children: [jsx(SelectSeparator, {
        width: "fill",
        label: jsx(HiddenLabel, {
          children: getI18nString("slides.properties_panel.object_animations.animation_trigger")
        }),
        children: isInvalidValue(e) ? getI18nString("common.mixed") : void 0
      }), jsxs(SelectContainer, {
        "data-testid": `slides-animation-trigger-control-select-${s}`,
        children: [isInvalidValue(e) && jsxs(Fragment, {
          children: [jsx(SelectOptionReset, {
            value: i4,
            disabled: !0,
            children: getI18nString("common.mixed")
          }), jsx(SelectRoot, {})]
        }), o.map(e => jsx(SelectOptionReset, {
          value: i6.format(e),
          children: i6.format(e)
        }, e))]
      })]
    })
  });
}
function na({
  highlight: e,
  isOpen: t,
  ...i
}) {
  return jsx(_$$Y2, {
    className: iG()(iq, {
      [iW]: e === i0.OUTLINE_ONLY,
      [iJ]: e === i0.FULL,
      [iQ]: t
    }),
    ...i
  });
}
function no({
  icon: e,
  labelName: t,
  ...i
}) {
  return jsxs(JU, {
    className: "slides_expandable_section--sectionLabel--Bnivo",
    ...i,
    children: [jsx("div", {
      className: "x1iog12x xl010v5",
      children: e
    }), jsx("div", {
      className: iX,
      children: t
    })]
  });
}
function nd({
  ...e
}) {
  return jsx(X0, {
    className: "slides_expandable_section--sectionHeaderTrail--way22",
    ...e
  });
}
function nc({
  isOpen: e,
  ...t
}) {
  return jsx(UC, {
    className: iG()(iZ, {
      [iQ]: e
    }),
    ...t
  });
}
let {
  LabelInputRow: _LabelInputRow2,
  SelectOverride
} = n;
let ny = new _$$ag(i5.MILLISECONDS, 10);
class nf extends _$$c$ {}
function nj({
  recordingKey: e
}) {
  let t = [{
    value: 0.2,
    label: getI18nString("slides.properties_panel.object_animations.duration.200ms")
  }, {
    value: 0.4,
    label: getI18nString("slides.properties_panel.object_animations.duration.400ms")
  }, {
    value: 0.6,
    label: getI18nString("slides.properties_panel.object_animations.duration.600ms")
  }];
  let i = useDispatch<AppDispatch>();
  let n = useDropdownState();
  let l = useSelector(e => {
    let t = e.mirror.selectionProperties.objectAnimationDuration;
    return isValidValue(t) && void 0 !== t ? Math.round(1e3 * t) / 1e3 : t;
  });
  let a = useUpdateSelectionProperty("objectAnimationDuration");
  let o = xl();
  return void 0 === l ? null : jsx(_LabelInputRow2, {
    labelTx: renderI18nText("slides.properties_panel.object_animations.duration"),
    input: jsx(_$$ow, {
      value: {
        select: SelectOverride,
        inputComponent: gm
      },
      children: jsx(_$$tV, {
        value: {
          chevron: ChevronContainer
        },
        children: jsx(TimeInput, {
          ariaLabel: getI18nString("slides.properties_panel.slide_transition.duration"),
          "data-tooltip": getI18nString("slides.properties_panel.object_animations.duration"),
          "data-tooltip-type": KindEnum.TEXT,
          dispatch: i,
          dropdownShown: n,
          formatter: ny,
          id: "animation-duration-select",
          max: 10,
          min: 0.001,
          onValueChange: e => {
            o(l, e);
            a(e);
          },
          recordingKey: e,
          value: l,
          willShowDropdown: () => (fullscreenValue.commit(), Promise.resolve()),
          children: t.map(({
            value: e,
            label: t
          }) => jsx(nf, {
            value: e,
            children: t
          }, e))
        })
      })
    })
  });
}
let {
  LabelInputRow: _LabelInputRow3
} = n;
let nT = new class {
  constructor() {
    this.format = e => {
      switch (e) {
        case "IN":
          return getI18nString("slides.properties_panel.object_animations.animation_phase.in");
        case "OUT":
          return getI18nString("slides.properties_panel.object_animations.animation_phase.out");
      }
    };
  }
}();
function nS({
  recordingKey: e
}) {
  let [t, i] = useSelectionProperty("objectAnimationPhase");
  let n = _$$sQ();
  return t ? jsx(_LabelInputRow3, {
    labelTx: renderI18nText("slides.properties_panel.object_animations.animation_phase"),
    input: jsx(_$$bL3, {
      value: isValidValue(t) ? t : void 0,
      onChange: e => {
        n(isValidValue(t) ? t : void 0, e);
        i(e);
      },
      recordingKey: e,
      legend: jsx(Legend, {
        children: renderI18nText("slides.properties_panel.object_animations.animation_phase")
      }),
      children: ["IN", "OUT"].map(e => jsx(RT, {
        value: e,
        label: nT.format(e)
      }, e))
    })
  }) : null;
}
function nA(e, t) {
  switch (e) {
    case "NONE":
      break;
    case "FADE":
      return jsx(_$$N2, {
        style: t
      });
    case "SLIDE_FROM_LEFT":
      return jsx(_$$o2, {
        style: t
      });
    case "SLIDE_FROM_RIGHT":
      return jsx(_$$v2, {
        style: t
      });
    case "SLIDE_FROM_TOP":
      return jsx(_$$W2, {
        style: t
      });
    case "SLIDE_FROM_BOTTOM":
      return jsx(_$$N, {
        style: t
      });
  }
  return null;
}
let {
  LabelInputRow: _LabelInputRow4
} = n;
let nP = "MIXED";
let nD = new class {
  constructor() {
    this.format = e => {
      switch (e) {
        case "NONE":
          return getI18nString("slides.properties_panel.object_animations.animation_type.none");
        case "SLIDE_FROM_BOTTOM":
          return getI18nString("slides.properties_panel.object_animations.animation_type.slide_up");
        case "SLIDE_FROM_TOP":
          return getI18nString("slides.properties_panel.object_animations.animation_type.slide_down");
        case "SLIDE_FROM_RIGHT":
          return getI18nString("slides.properties_panel.object_animations.animation_type.slide_left");
        case "SLIDE_FROM_LEFT":
          return getI18nString("slides.properties_panel.object_animations.animation_type.slide_right");
        case "FADE":
          return getI18nString("slides.properties_panel.object_animations.animation_type.fade");
      }
    };
  }
}();
function nR({
  recordingKey: e
}) {
  let t = useSelector(selectSingleSelectedNode);
  let [i, n] = useSelectionProperty("objectAnimationType");
  let l = _$$tx2();
  if (!i) return null;
  let o = e => {
    if (!t) return;
    let i = AppStateTsApi?.slidesObjectAnimationPreviewManager();
    void 0 === e ? i?.abortSingleObjectAnimationPreview(t.guid) : i?.initiateSingleObjectAnimationPreview(t.guid, SlideAnimation[e]);
  };
  let d = isValidValue(i) && "NONE" !== i ? nA(i, {
    "--color-icon": Tj.iconSecondary
  }) : void 0;
  function u({
    type: e
  }) {
    return jsxs("div", {
      className: "x78zum5 x6s0dn4",
      children: [jsx("div", {
        className: "x1rdy4ex x4vbgl9",
        children: nA(e, {
          "--color-icon": "white"
        })
      }), nD.format(e)]
    });
  }
  let p = ["SLIDE_FROM_BOTTOM", "SLIDE_FROM_TOP", "SLIDE_FROM_RIGHT", "SLIDE_FROM_LEFT", "FADE"].map(e => ({
    type: e,
    children: jsx(u, {
      type: e
    })
  })) ?? [];
  return jsx(_LabelInputRow4, {
    labelTx: renderI18nText("slides.properties_panel.object_animations.animation_type"),
    input: jsxs(SelectGroupLabel, {
      onChange: e => {
        l(isValidValue(i) ? i : void 0, e);
        n(e);
      },
      value: isValidValue(i) ? i : isInvalidValue(i) ? nP : void 0,
      recordingKey: e,
      children: [jsx(SelectSeparator, {
        iconLead: d,
        width: "fill",
        size: "md",
        label: jsx(HiddenLabel, {
          children: getI18nString("slides.properties_panel.object_animations.animation_type")
        }),
        children: isInvalidValue(i) ? getI18nString("common.mixed") : void 0
      }), jsxs(SelectContainer, {
        children: [isInvalidValue(i) && jsxs(Fragment, {
          children: [jsx(SelectOptionReset, {
            value: nP,
            disabled: !0,
            children: getI18nString("common.mixed")
          }, nP), jsx(SelectRoot, {})]
        }), p.map(e => jsx(SelectOptionReset, {
          value: e.type,
          onFocus: () => o(e.type),
          children: e.children
        }, e.type))]
      })]
    })
  });
}
let nF = new _$$ag(i5.SECONDS, 10);
function nU() {
  return jsx("div", {
    className: "xilkfi8 x1cmmqis xuxw1ft",
    children: renderI18nText("slides.properties_panel.object_animations.badge.invalid")
  });
}
function nV({
  isInvalid: e,
  animationDuration: t,
  animationPhase: i
}) {
  return jsx("div", {
    className: cssBuilderInstance.flex.itemsCenter.colorBgSecondary.radiusMedium.textBodySmall.colorText.$,
    children: e ? jsx(nU, {}) : jsxs(Fragment, {
      children: [jsx("div", {
        className: cssBuilderInstance.px4.$,
        children: nF.format(t)
      }), i && jsx("div", {
        className: cssBuilderInstance.px4.bl1.bSolid.colorBorder.$,
        children: nT.format(i)
      })]
    })
  });
}
let {
  ExpandableSection
} = n;
function n$({
  item: e,
  slideId: t,
  isDragging: i,
  isReorderingItems: n,
  isExpanded: o,
  isInvalid: d,
  onClick: u,
  onMouseDown: p,
  onMouseMove: x,
  onMouseUp: h,
  onChangeStartCondition: m,
  recordingKey: _
}) {
  let g;
  let [f, j] = useState(!1);
  let b = !n && f || i;
  let E = Gu(e.action.transitionNodeID) || "";
  let v = useDeepEqualSceneValue((e, t) => e.get(t)?.name, E);
  let T = useSelector(e => e.mirror.appModel.hoveredNode === E);
  let S = useSelector(e => e.mirror.sceneGraphSelection);
  let I = void 0 !== S[E];
  let N = getObservableValue(AppStateTsApi?.slidesObjectAnimationPreviewManager()?.animationPreviewTargetNodeId, defaultSessionLocalIDString);
  let k = isValidSessionLocalID(parseSessionLocalID(N)) && N === E;
  let C = e.action.transitionDuration;
  let w = useRef(null);
  let O = useDropdown(OI);
  let A = jsx(nG, {
    isInvalid: d,
    nodeId: E
  });
  i || o || I && Object.keys(S).length > 1 ? g = i0.FULL : (T || k) && !f && (g = i0.OUTLINE_ONLY);
  let [L] = useDebounce(i || n, 150);
  let P = !L && (f || o);
  useEffect(() => {
    E && updateHoveredNode(f ? E : defaultSessionLocalIDString);
  }, [f, E]);
  return jsxs("div", {
    className: cssBuilderInstance.flex.wFull.py4.$,
    children: [jsx(RecordableDiv, {
      className: cssBuilderInstance.h32.w16.flex.itemsCenter.if(b, cssBuilderInstance.opacity1, cssBuilderInstance.opacity0).$,
      style: {
        "--color-icon": "var(--color-icon-secondary)"
      },
      onMouseEnter: () => j(!0),
      onMouseLeave: () => j(!1),
      onMouseMove: x,
      onMouseDown: p,
      onMouseUp: h,
      recordingKey: generateRecordingKey(_, "dragHandle"),
      children: jsx(_$$B, {})
    }), jsx(ExpandableSection, {
      expanded: o,
      forwardedRef: w,
      highlight: g,
      leftIcon: A,
      onClick: u,
      onContextMenu: e => {
        w.current && (e.stopPropagation(), e.preventDefault(), O.show({
          data: {
            boundingRect: w.current.getBoundingClientRect(),
            targetObjectAnimation: {
              slideId: t,
              targetNodeId: E
            }
          }
        }));
      },
      onMouseDown: p,
      onMouseEnter: () => (j(!0), SKIP_RECORDING),
      onMouseLeave: () => (j(!1), SKIP_RECORDING),
      onMouseMove: x,
      onMouseUp: h,
      recordingKey: _,
      rightItems: I && Object.keys(S).length > 1 && !o ? null : jsx(nz, {
        item: e,
        slideId: t,
        animationDuration: C,
        showDeleteButton: P,
        recordingKey: _,
        isInvalid: d
      }),
      title: v ?? "",
      tooltip: d ? getI18nString("slides.properties_panel.object_animations.icon.tooltip_invalid_animation") : void 0,
      children: jsxs("div", {
        className: cssBuilderInstance.flex.flexColumn.px16.py8.$,
        children: [jsx(nR, {
          recordingKey: generateRecordingKey(_, "animationType")
        }), jsx(nj, {
          recordingKey: generateRecordingKey(_, "animationDuration")
        }), jsx(i8, {
          hideAfterPreviousOption: 0 === e.interactionIndex && e.startCondition === AnimationTriggerType.TRIGGER,
          startCondition: e.startCondition,
          onChange: m,
          recordingKey: generateRecordingKey(_, "animationTrigger"),
          nodeId: E
        }), jsx(nS, {
          recordingKey: generateRecordingKey(_, "animationPhase")
        })]
      })
    })]
  });
}
function nB({
  item: e,
  slideId: t,
  isDragging: i,
  isReorderingItems: n,
  isSelectedInScenegraph: o,
  isInvalid: d,
  onMouseDown: u,
  onMouseMove: p,
  onMouseUp: x,
  onChangeStartCondition: h,
  recordingKey: m
}) {
  let _;
  let [g, f] = useState(!1);
  let [j, b] = useState(o);
  let E = useSetAtom(iV);
  let v = !n && g || i;
  let T = Gu(e.action.transitionNodeID) || "";
  let S = useDeepEqualSceneValue((e, t) => e.get(t)?.name, T);
  let I = useSelector(e => e.mirror.appModel.hoveredNode === T);
  let N = useSelector(e => e.mirror.sceneGraphSelection);
  let k = void 0 !== N[T];
  let C = useCallback(() => {
    j ? E({
      type: "CLEAR_SELECTION"
    }) : T && (E({
      type: "SET_OBJECT_ANIMATION_SELECTION",
      selectedNodeIds: [T]
    }), replaceSelection([T]), fullscreenValue.commit());
  }, [j, E, T]);
  useEffect(() => {
    b(o);
  }, [o]);
  let w = getObservableValue(AppStateTsApi?.slidesObjectAnimationPreviewManager()?.animationPreviewTargetNodeId, defaultSessionLocalIDString);
  let O = isValidSessionLocalID(parseSessionLocalID(w)) && w === T;
  let A = e.action.transitionDuration;
  let L = jsx(nG, {
    isInvalid: d,
    nodeId: T
  });
  i || j || k && Object.keys(N).length > 1 ? _ = i0.FULL : (I || O) && !g && (_ = i0.OUTLINE_ONLY);
  let [P] = useDebounce(i || n, 150);
  let D = !P && (g || j);
  useEffect(() => {
    T && updateHoveredNode(g ? T : defaultSessionLocalIDString);
  }, [g, T]);
  let {
    manager,
    getContextMenuTriggerProps
  } = useMenu();
  return jsxs("div", {
    className: cssBuilderInstance.flex.wFull.py4.$,
    onMouseEnter: () => f(!0),
    onMouseLeave: () => f(!1),
    children: [jsx(RecordableDiv, {
      className: cssBuilderInstance.h32.w16.flex.itemsCenter.if(v, cssBuilderInstance.opacity1, cssBuilderInstance.opacity0).$,
      style: {
        "--color-icon": "var(--color-icon-secondary)"
      },
      onMouseMove: p,
      onMouseDown: u,
      onMouseUp: x,
      recordingKey: generateRecordingKey(m, "dragHandle"),
      children: jsx(_$$B, {})
    }), jsxs("div", {
      className: iY,
      onMouseMove: p,
      onMouseDown: u,
      onMouseUp: x,
      children: [jsx(_$$l7, {
        manager,
        targetObjectAnimation: {
          slideId: t,
          targetNodeId: T
        }
      }), jsxs(_$$bL2, {
        isOpen: j,
        setOpen: C,
        children: [jsxs(na, {
          highlight: _,
          isOpen: j,
          children: [jsx(no, {
            recordingKey: m,
            icon: L,
            labelName: S ?? "",
            "aria-label": getI18nString("slides.properties_panel.object_animations.label.aria_label", {
              nodeName: S ?? "",
              animationType: nD.format(e.action.animationType),
              animationDuration: nF.format(A)
            }),
            ...getContextMenuTriggerProps()
          }), jsx(nd, {
            children: !(k && Object.keys(N).length > 1 && !j) && jsx(nz, {
              item: e,
              slideId: t,
              animationDuration: A,
              showDeleteButton: D,
              recordingKey: m,
              isInvalid: d
            })
          })]
        }), jsx(nc, {
          isOpen: j,
          children: jsxs("div", {
            className: cssBuilderInstance.flex.flexColumn.px16.py8.$,
            children: [jsx(nR, {
              recordingKey: generateRecordingKey(m, "animationType")
            }), jsx(nj, {
              recordingKey: generateRecordingKey(m, "animationDuration")
            }), jsx(i8, {
              hideAfterPreviousOption: 0 === e.interactionIndex && e.startCondition === AnimationTriggerType.TRIGGER,
              startCondition: e.startCondition,
              onChange: h,
              recordingKey: generateRecordingKey(m, "animationTrigger"),
              nodeId: T
            }), jsx(nS, {
              recordingKey: generateRecordingKey(m, "animationPhase")
            })]
          })
        })]
      })]
    })]
  });
}
function nz({
  item: e,
  slideId: t,
  animationDuration: i,
  showDeleteButton: n,
  recordingKey: l,
  isInvalid: s
}) {
  return jsxs(Fragment, {
    children: [jsx(useCachedSubtree, {
      isVisible: n,
      children: () => jsx(nH, {
        item: e,
        slideId: t,
        recordingKey: generateRecordingKey(l, "deleteButton")
      })
    }), jsx(useCachedSubtree, {
      isVisible: !n,
      children: () => jsxs("div", {
        className: cssBuilderInstance.flex.itemsCenter.mr8.$,
        children: [jsx("div", {
          children: nA(e.action.animationType)
        }), jsx(nV, {
          animationDuration: i,
          animationPhase: e.action.animationPhase,
          isInvalid: s
        })]
      })
    })]
  });
}
function nG({
  isInvalid: e,
  nodeId: t
}) {
  return e ? jsx(_$$Z2, {
    className: "slides_object_animations_panel--invalidAnimationIcon--MGEK9 slides_object_animations_panel--animationIconBase--iJi7Y object_row--layerIcon--dTOdu"
  }) : jsx(Bf, {
    guid: t,
    className: "slides_object_animations_panel--animationLayerIcon--p03pT slides_object_animations_panel--animationIconBase--iJi7Y object_row--layerIcon--dTOdu",
    useUI3Icon: !0
  });
}
function nH({
  item: e,
  slideId: t,
  recordingKey: i
}) {
  let n = useSceneGraphSelector();
  let l = D0();
  return jsx("div", {
    className: "x1cmmqis",
    children: jsx(EventShield, {
      eventListeners: ["onPointerDown", "onMouseDown"],
      children: jsx(IconButton, {
        onClick: _$$nc.user("delete-slide-object-animation", () => {
          let i = n.get(t);
          let r = Gu(e.action.transitionNodeID);
          i && r && (l(), i.removeObjectAnimation(r), fullscreenValue.commit());
        }),
        "aria-label": getI18nString("slides.properties_panel.object_animations.delete_button.aria_label"),
        htmlAttributes: {
          "data-tooltip": getI18nString("slides.properties_panel.object_animations.delete_button.tooltip"),
          "data-tooltip-type": KindEnum.TEXT
        },
        recordingKey: i,
        children: jsx(_$$z, {})
      })
    })
  });
}
function nY({
  item: e,
  slideId: t,
  isDragging: i,
  isReorderingItems: n,
  isExpanded: l,
  isInvalid: s,
  onClick: a,
  onMouseDown: d,
  onMouseMove: c,
  onMouseUp: u,
  onChangeStartCondition: p,
  recordingKey: x
}) {
  return getFeatureFlags().slides_a11y_animation_panel ? jsx(nB, {
    isDragging: i,
    isInvalid: s,
    isReorderingItems: n,
    isSelectedInScenegraph: l,
    item: e,
    onChangeStartCondition: p,
    onClick: a,
    onMouseDown: d,
    onMouseMove: c,
    onMouseUp: u,
    recordingKey: x,
    slideId: t
  }) : jsx(n$, {
    isDragging: i,
    isExpanded: l,
    isInvalid: s,
    isReorderingItems: n,
    item: e,
    onChangeStartCondition: p,
    onClick: a,
    onMouseDown: d,
    onMouseMove: c,
    onMouseUp: u,
    recordingKey: x,
    slideId: t
  });
}
function nq({
  startCondition: e,
  onChangeStartCondition: t,
  recordingKey: i,
  defaultPosition: n
}) {
  return jsx(bL, {
    onClose: e => {
      "outside" !== e.source && replaceSelection([]);
    },
    width: 208,
    defaultPosition: n,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: getI18nString("slides.properties_panel.object_animations.multiedit_modal.title")
        })
      }), jsx(DialogBody, {
        children: jsxs("div", {
          className: cssBuilderInstance.flex.flexColumn.$,
          children: [jsx(nR, {
            recordingKey: generateRecordingKey(i, "animationType")
          }), jsx(nj, {
            recordingKey: generateRecordingKey(i, "animationDuration")
          }), jsx(i8, {
            hideAfterPreviousOption: !1,
            startCondition: e,
            onChange: t,
            recordingKey: generateRecordingKey(i, "animationTrigger")
          }), jsx(nS, {
            recordingKey: generateRecordingKey(i, "animationPhase")
          })]
        })
      })]
    })
  });
}
function nW({
  recordingKey: e
}) {
  let t = useSceneGraphSelector();
  let i = useSelector(e => e.mirror.sceneGraphSelection);
  let n = useRef(null);
  let o = useSetAtom(iV);
  let d = Jb() ?? null;
  let c = useDeepEqualSceneValue((e, t) => {
    let i = t ? e.get(t) : null;
    return i?.objectAnimations;
  }, d);
  let u = useMemoStable(() => c ? kP.fromPrototypeInteractions(c) : [], [c]);
  let p = useMemoStable(() => {
    let e = {};
    u.forEach(t => {
      if (uc(t)) {
        let i = Gu(t.action.transitionNodeID);
        i && (e[i] = t);
      }
    });
    return e;
  }, [u]);
  let x = useMemo(() => n5(u, i), [u, i]);
  let h = 1 === x.length ? x[0] : null;
  let _ = x.map(e => p[e]).filter(isNotNullish);
  let g = function (e) {
    let t = e.filter(uc);
    if (0 === t.length) return;
    let i = t[0]?.startCondition;
    if (void 0 !== i) {
      for (let e of t) if (e.startCondition !== i) return MIXED_MARKER;
      return i;
    }
  }(_);
  let y = useSelector(e => e.mirror.appModel.activeUserAction === UserActionState.DEFAULT || e.mirror.appModel.activeUserAction === UserActionState.CLICKING_TO_CHANGE_SELECTION);
  useEffect(() => {
    if (y) {
      if (0 === x.length) {
        o({
          type: "CLEAR_SELECTION"
        });
        return;
      }
      o({
        type: "SET_OBJECT_ANIMATION_SELECTION",
        selectedNodeIds: x
      });
    }
  }, [x, o, y]);
  let [f, j] = useState(!1);
  let [b, E] = useState([]);
  let [v, T] = useState(-1);
  let [S, I] = useState(-1);
  let N = AC();
  let k = Z4();
  let C = useCallback((e, t, i) => {
    f && (i ? (T(e), I(-1)) : (I(e), T(-1)));
  }, [f]);
  let w = useCallback(() => {
    E([]);
    j(!1);
    T(-1);
    I(-1);
  }, []);
  let O = t.get(d ?? "");
  let A = useCallback((e, t) => {
    if (!O) return;
    let i = e?.[0];
    if (1 !== e.length || !i || !uc(i)) {
      logError("Slides reorder object animations", "onInsertItemsIn expected to be inserting a single action", {
        selectedValues: e
      }, {
        reportAsSentryError: !0
      });
      return;
    }
    if (!_$$eB(t)) {
      logError("Slides reorder object animations", "onInsertItemsIn expected to be inserting into a section header item", {
        itemToInsertIn: t
      }, {
        reportAsSentryError: !0
      });
      return;
    }
    let n = zQ(i, t, u);
    n && (k(), O.objectAnimations = n, fullscreenValue.commit());
  }, [O, u, k]);
  let L = useCallback((e, t, i) => {
    if (!O) return;
    let n = e?.[0];
    if (1 !== e.length || !n || !uc(n)) {
      logError("Slides reorder object animations", "onInsertItemsBetween expected to be inserting a single action", {
        selectedValues: e
      }, {
        reportAsSentryError: !0
      });
      return;
    }
    let r = Eo(n, t, i, u);
    r && (k(), O.objectAnimations = r, fullscreenValue.commit());
  }, [O, u, k]);
  let P = useCallback(() => {
    let e = documentStateTsApi?.getMutableActiveDocument();
    return e && d && SlidesObjectAnimationBindings ? SlidesObjectAnimationBindings.getInvalidAnimationTargets(e, d) : new Set();
  }, [d]);
  let D = useMemo(() => P(), [c, P]);
  if (!d || !O) return null;
  let R = n.current ? calculatePickerPositionLeft(n.current, 208) : void 0;
  return jsxs(_$$tR, {
    panelClassName: "slides_object_animations_panel--panel--0bhrR",
    hideBorderBottom: !0,
    children: [jsx(nJ, {
      slideId: d,
      playButtonDisabled: 0 === u.length,
      hasExpandedListItem: !!h,
      objectAnimationItems: u,
      sceneGraphSelection: i,
      recordingKey: e
    }), jsx("div", {
      className: cssBuilderInstance.pr16.$,
      ref: n,
      children: 0 === u.length ? jsx(n0, {}) : jsx(_$$q2, {
        canInsertItemsIn: _$$eB,
        canInsertSelectionBeforeIndex: e => e > 0,
        insertDividerStyle: {
          display: "none"
        },
        isDragDisabled: !1,
        listItems: u,
        onCrossedDragThreshold: () => {
          j(!0);
          o({
            type: "CLEAR_SELECTION"
          });
        },
        onDrag: C,
        onDragEnd: w,
        onInsertItemsBetweenValues: _$$nc.user("reorder-object-animations", L),
        onInsertItemsIn: _$$nc.user("reorder-object-animations", A),
        prioritizeInsertionIn: !0,
        renderListItem: (t, i, n, l, s, a, c) => {
          let p = u?.[i + 1];
          let x = uc(t) ? Gu(t.action.transitionNodeID) : null;
          let m = !!h && h === x;
          return jsxs("div", {
            className: cssBuilderInstance.relative.wFull.$,
            children: [_$$eB(t) && jsx(n1, {
              item: t,
              isDraggingInGeneral: f,
              onMouseMove: a,
              onMouseUp: c,
              alwaysHideNumber: i === u.length - 1
            }, i), uc(t) && jsx(nY, {
              isDragging: n,
              isExpanded: m,
              isInvalid: D.has(x),
              isReorderingItems: l,
              item: t,
              onChangeStartCondition: e => {
                N(t.startCondition, e);
                i2(O, u, e, [t]);
              },
              onClick: () => {
                m ? o({
                  type: "CLEAR_SELECTION"
                }) : x && (o({
                  type: "SET_OBJECT_ANIMATION_SELECTION",
                  selectedNodeIds: [x]
                }), replaceSelection([x]), fullscreenValue.commit());
              },
              onMouseDown: e => {
                2 !== e.button && s(e);
              },
              onMouseMove: a,
              onMouseUp: c,
              recordingKey: generateRecordingKey(e, "actionsList", i),
              slideId: d
            }, i), v === i && jsx("div", {
              className: "slides_object_animations_panel--dragIndicatorInto--65j3O"
            }), S === i + 1 && jsx("div", {
              className: "slides_object_animations_panel--dragIndicatorBelow--WzKf8",
              style: {
                top: _$$eB(t) ? 25.5 : !p || _$$eB(p) ? 36.5 : 41
              }
            })]
          });
        },
        selectedIndices: b,
        updateSelection: E
      })
    }), x.length > 1 && R && y && jsx(nq, {
      slideId: d,
      onChangeStartCondition: e => {
        N(g, e);
        i2(O, u, e, _);
      },
      recordingKey: generateRecordingKey(e, "multiEditModal"),
      startCondition: g,
      defaultPosition: R
    })]
  });
}
function nJ({
  slideId: e,
  playButtonDisabled: t,
  hasExpandedListItem: i,
  objectAnimationItems: n,
  sceneGraphSelection: s,
  recordingKey: a
}) {
  let o = useMemo(() => n5(n, s), [n, s]);
  let d = o.length;
  let u = d > 1 || 1 === d && Object.keys(s).length > 1 && !i;
  return jsxs(Wv, {
    titleTx: renderI18nText("slides.properties_panel.object_animations.panel_title"),
    children: [u && jsx(nQ, {
      slideId: e,
      selectedGuids: o,
      objectAnimationItems: n,
      recordingKey: a
    }), !t && jsx(nX, {
      slideId: e,
      recordingKey: a,
      numAnimations: d
    }), jsx(nZ, {
      recordingKey: a
    })]
  });
}
function nQ({
  slideId: e,
  selectedGuids: t,
  objectAnimationItems: i,
  recordingKey: n
}) {
  let s = D0();
  let a = useSceneGraphSelector();
  let o = useCallback(() => {
    let n = a.get(e);
    if (!n) return;
    let r = i.filter(e => {
      if (!uc(e)) return !0;
      let i = Gu(e.action.transitionNodeID);
      return !(i && t.includes(i));
    });
    let l = kP.toPrototypeInteractions(r);
    s();
    n.objectAnimations = l;
    fullscreenValue.commit();
  }, [a, e, t, i, s]);
  return jsx(IconButton, {
    "aria-label": getI18nString("slides.properties_panel.object_animations.bulk_delete_button.aria_label"),
    htmlAttributes: {
      "data-tooltip": getI18nString("slides.properties_panel.object_animations.bulk_delete_button.tooltip"),
      "data-tooltip-type": KindEnum.TEXT
    },
    onClick: _$$nc.user("delete-selected-slide-object-animations", o),
    recordingKey: generateRecordingKey(n, "bulkDeleteButton"),
    children: jsx(_$$z, {})
  });
}
function nX({
  slideId: e,
  recordingKey: t,
  numAnimations: i
}) {
  let n = Mp();
  let s = useCallback(() => {
    _$$l3.user("initiate-object-animation-preview", () => {
      AppStateTsApi?.slidesObjectAnimationPreviewManager().initiateObjectAnimationPreview(e);
    });
    n(i);
  }, [e, i, n]);
  return jsx(IconButton, {
    "aria-label": getI18nString("slides.properties_panel.object_animations.play_button.aria_label"),
    htmlAttributes: {
      "data-tooltip": getI18nString("slides.properties_panel.object_animations.play_button.tooltip"),
      "data-tooltip-type": KindEnum.TEXT
    },
    onClick: s,
    recordingKey: generateRecordingKey(t, "playButton"),
    children: jsx(iT, {})
  });
}
function nZ({
  recordingKey: e
}) {
  let t;
  let i = useSelectionPropertyValue("objectAnimationType");
  let n = isValidValue(i) && void 0 !== i && "NONE" !== i;
  let l = useSelector(e => e.mirror.sceneGraphSelection);
  let a = _$$l5();
  let o = Object.keys(l).filter(e => !a.includes(e)).length;
  let d = useSelector(e => isActionEnabled(e.mirror.appModel, "add-slide-object-animation"));
  t = d ? getI18nString("slides.properties_panel.object_animations.plus_button.tooltip_valid_selection") : n ? getI18nString("slides.properties_panel.object_animations.plus_button.tooltip_already_animated") : o > 0 ? 1 === o ? getI18nString("slides.properties_panel.object_animations.plus_button.tooltip_animation_unsupported_singular") : getI18nString("slides.properties_panel.object_animations.plus_button.tooltip_animation_unsupported_multiple") : getI18nString("slides.properties_panel.object_animations.plus_button.tooltip_invalid_selection");
  return jsx(IconButton, {
    "aria-label": getI18nString("slides.properties_panel.object_animations.plus_button.aria_label"),
    htmlAttributes: {
      "data-tooltip": t,
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip-show-immediately": !d,
      "data-tooltip-max-width": "200"
    },
    disabled: !d,
    onClick: _$$nc.user("add-slide-object-animation", () => {
      fullscreenValue.triggerAction("add-slide-object-animation");
    }),
    recordingKey: generateRecordingKey(e, "plusButton"),
    children: jsx(_$$x2, {})
  });
}
function n0() {
  return jsx("div", {
    className: cssBuilderInstance.pl16.relative.$,
    children: jsx("p", {
      className: cssBuilderInstance.textBodyMedium.colorTextSecondary.alignLeft.py8.$,
      children: getI18nString("slides.properties_panel.object_animations.empty_state_text")
    })
  });
}
function n1({
  item: e,
  isDraggingInGeneral: t,
  onMouseMove: i,
  onMouseUp: n,
  alwaysHideNumber: l
}) {
  return jsx(RecordableDiv, {
    className: "slides_object_animations_panel--sectionHeader--HitXp",
    onMouseMove: i,
    onMouseUp: n,
    children: !t && !l && jsx("div", {
      className: cssBuilderInstance.textBodySmall.colorTextSecondary.$,
      children: e.interactionIndex + 1
    })
  });
}
function n5(e, t) {
  return e.length && Object.keys(t).length ? e.map(e => {
    let i = uc(e) ? Gu(e.action.transitionNodeID) : null;
    return null === i ? null : t[i] ? i : null;
  }).filter(isNotNullish) : [];
}
function n6() {
  let e = getObservableValue(AppStateTsApi?.canvasGrid().canvasGridArray, []);
  return useStrictDeepEqualSceneValue((e, t) => t.reduce((t, i) => {
    let n = i.filter(t => {
      let i = e.get(t);
      return _$$Y3(i) && !i.isSkippedSlide;
    });
    n.length > 0 && t.push(n);
    return t;
  }, []), e);
}
function n8(e, t, i, n, r, l, s) {
  let a = "-";
  let o = `${r[e] || a}`;
  let d = `${l[e] || a}`;
  let c = `${s[e] || a}`;
  switch (t) {
    case "SLIDE":
      a = o;
      break;
    case "SECTION":
      a = d;
      break;
    case "SUBSECTION":
      a = c;
      break;
    case "TOTAL_WITHIN_DECK":
      a = `${o} ${i} ${n.flat().length}`;
      break;
    case "TOTAL_WITHIN_SECTION":
      let u = (l[e] || 1) - 1;
      let p = n[u]?.length || 1;
      a = `${c} ${i} ${p}`;
  }
  return a;
}
function n3(e) {
  let t = {};
  let i = {};
  let n = {};
  let r = 1;
  e.forEach((e, l) => {
    e.forEach((e, s) => {
      t[e] = r++;
      i[e] = l + 1;
      n[e] = s + 1;
    });
  });
  return [t, i, n];
}
function ra() {
  let e = getObservableValue(AppStateTsApi?.canvasGrid().canvasGridArray, []);
  let t = getObservableValue(AppStateTsApi?.slideThumbnailEdits(), new Map());
  let i = useAtomWithSubscription(uY);
  let n = _$$ie();
  let {
    width,
    height
  } = _$$Z3();
  return jsx(_$$v3, {
    ids: e.flat(),
    thumbnailEdits: t,
    idsInViewport: i,
    focusedNodeId: n,
    width,
    height
  });
}
function rp({
  nodeIDs: e
}) {
  let t = useDeepEqualSceneValue((e, t) => {
    let i = t.map(t => e.get(t)).filter(isNotNullish);
    if (void 0 !== i[0]) {
      let e = i[0].interactiveSlideElementType;
      return i.every(t => t.interactiveSlideElementType === e) ? e : null;
    }
    return null;
  }, e);
  if (!t) return null;
  let {
    InlineControl
  } = _$$Z4(t);
  return InlineControl && "string" == typeof e[0] ? jsx(InlineControl, {
    nodeId: e[0]
  }) : null;
}
function rh({
  nodeId: e
}) {
  return isSelfDesignMode() ? jsx("div", {
    className: "xy3p2pi",
    children: jsx(Button, {
      onClick: _$$nc.user("slides-ungroup", () => {
        let t = getSingletonSceneGraph().get(e);
        t && function (e) {
          let t = IgnoreSelectionUIHidingBindings?.openIgnoreSelectionUIHidingScope();
          try {
            return e();
          } finally {
            null != t && IgnoreSelectionUIHidingBindings?.closeIgnoreSelectionUIHidingScope(t);
          }
        }(() => {
          t.ungroupNodeRecursive();
          fullscreenValue.commit();
        });
      }),
      iconPrefix: jsx(_$$H3, {}),
      variant: "ghost",
      children: getI18nString("fullscreen.context_menu.ungroup")
    })
  }) : null;
}
function rm({
  nodeIDs: e
}) {
  let t = useDeepEqualSceneValue((e, t) => {
    let i = t.map(t => e.get(t)).filter(isNotNullish);
    if (void 0 !== i[0]) {
      let e = i[0].type;
      return i.every(t => t.type === e) ? e : null;
    }
    return null;
  }, e);
  let i = useDeepEqualSceneValue((e, t) => {
    if (1 !== t.length || void 0 === t[0]) return !1;
    let i = e.get(t[0]);
    return !!i && !i.isInstance && !i.isInstanceSublayer && !i.isInImmutableFrame && !i.isSymbolSublayer && !i.isInWidget && 0 !== i.childCount && (i.isStack || i.isGroup) && ("FRAME" === i.type || "GROUP" === i.type);
  }, e);
  return t ? "INTERACTIVE_SLIDE_ELEMENT" === t ? jsx(rp, {
    nodeIDs: e
  }) : i && void 0 !== e[0] ? jsx(rh, {
    nodeId: e[0]
  }) : null : null;
}
let r_ = memo(function () {
  let e = useSelector(e => e.mirror.sceneGraphSelection);
  let t = useMemo(() => Object.keys(e), [e]);
  let i = getObservableValue(AppStateTsApi?.canvasGrid().isDraggingChildren, !1) || !t.length;
  return jsx(_$$k5, {
    isShown: !i,
    children: jsx(PopoverProvider, {
      children: jsx(W1, {
        darkModePreferred: !0,
        children: jsx(rm, {
          nodeIDs: t
        })
      })
    })
  });
});
function rR() {
  let e = useDispatch<AppDispatch>();
  let t = getPublishTemplateStatus();
  let i = canPublishTemplate(t);
  let n = userFlagExistsAtomFamily(uM);
  let a = useAtomWithSubscription(n);
  let o = useHasValidSceneSlideTheme();
  let {
    show,
    isShowing,
    complete,
    uniqueId
  } = useOverlay({
    overlay: SlidesTemplateOnboarding,
    priority: ModalPriority.DEFAULT_MODAL
  }, [a]);
  let x = useMemo(() => i ? [rM, rF] : [rM], [i]);
  let {
    currentStep,
    next
  } = _$$A4({
    numSteps: x.length,
    onComplete: complete
  });
  let _ = useMemo(() => x.map(t => createElement(t, {
    onClickPrimaryCta: next,
    complete,
    onClose: () => {
      complete();
      e(postUserFlag({
        [uM]: !0
      }));
    },
    isShowing,
    totalSteps: x.length
  })), [x, next, isShowing, complete, e]);
  return (useEventForwarder(uniqueId, [Bn], () => {
    show({
      canShow: e => !e
    });
  }), isShowing && _.length && o) ? jsx(_$$U, {
    currentStep,
    isShowing,
    children: _
  }) : null;
}
function rM({
  onClickPrimaryCta: e,
  complete: t,
  onClose: i,
  isShowing: n,
  totalSteps: l
}) {
  let a = useDispatch<AppDispatch>();
  let o = hX(`[data-onboarding-key="${O0}"]`);
  return jsx(OnboardingModal, {
    arrowPosition: ArrowPosition.RIGHT_BODY,
    description: jsx("span", {
      style: {
        whiteSpace: "pre-line"
      },
      children: renderI18nText("slides.onboarding.template_preview.description")
    }),
    disableHighlight: !0,
    hideCloseButton: !1,
    isShowing: n,
    onClose: i,
    onTargetLost: t,
    primaryCta: {
      type: "button",
      label: l > 1 ? renderI18nText("general.next") : renderI18nText("general.done"),
      onClick: () => {
        l > 1 ? (a(showDropdownThunk({
          type: _$$eg,
          data: {
            targetRect: o,
            activatePathOnMount: [getI18nString("tile.dropdown.publish_as_template")]
          }
        })), e()) : t();
      },
      ctaTrackingDescriptor: UpgradeAction.NEXT
    },
    stepCounter: {
      stepNum: 1,
      totalNumSteps: l
    },
    targetKey: R4,
    title: renderI18nText("slides.onboarding.template_preview.title"),
    trackingContextName: "SlidesTemplateOnboarding > TemplateImportedStep"
  });
}
function rF({
  onClickPrimaryCta: e,
  complete: t,
  isShowing: i,
  onClose: n,
  totalSteps: l
}) {
  return jsx(OnboardingModal, {
    arrowPadding: 4,
    arrowPosition: ArrowPosition.LEFT_TITLE,
    clickOutsideToHide: !0,
    description: jsx("span", {
      style: {
        whiteSpace: "pre-line"
      },
      children: renderI18nText("slides.onboarding.template_publish.description")
    }),
    disableHighlight: !0,
    hideCloseButton: !1,
    isShowing: i,
    onClose: n,
    onTargetLost: t,
    primaryCta: {
      type: "button",
      label: renderI18nText("general.done"),
      onClick: e,
      ctaTrackingDescriptor: UpgradeAction.NEXT
    },
    stepCounter: {
      stepNum: 2,
      totalNumSteps: l
    },
    targetKey: w1,
    title: renderI18nText("slides.onboarding.template_publish.title"),
    trackingContextName: "SlidesTemplateOnboarding > TemplatePublishStep",
    zIndex: NotModalType.MODAL
  });
}
function rB() {
  syncDesignModePermission();
  let e = _$$dh();
  let t = useSetAtom(fileTypeAtom);
  let i = !!S7();
  let n = useEffectiveThemeId();
  TG();
  let [s, o] = useLocalStorageSync("last-used-variable-set-bottoms-up", null);
  useEffect(() => {
    let t = debugState.getState().selectedView;
    let i = (AppStateTsApi?.canvasGrid()?.canvasGridArray.getCopy() ?? [])[0]?.[0];
    if (t.nodeId && t.nodeId !== e) {
      let n = t.nodeId;
      let r = getSingletonSceneGraph().get(n);
      r?.type === "SLIDE" && r?.containingCanvas === e && (i = n);
    }
    i && _$$Lk(i);
  }, [e]);
  useEffect(() => {
    let e = Dh(n);
    e && o(e.variableSetID);
  }, [n, o]);
  useEffect(() => () => {
    i && t({
      type: FileType.ALL
    });
  }, [i, t]);
  return jsxs(Fragment, {
    children: [jsx(_$$p2, {
      children: jsx(BaseNuxOnboardingOverlay, {
        entryPoint: C5.Slides
      })
    }), jsx(r_, {}), jsx(_$$g2, {}), jsx(_$$h3, {}), jsx(ra, {}), jsx(_$$_4, {}), jsx(_$$p2, {
      children: jsx(rR, {})
    })]
  });
}
var rQ = rJ;
let ly = "speaker_notes_lexical_editor--input--Dp--S";
let lf = {
  list: {
    nested: {
      listitem: "speaker_notes_lexical_editor--nestedListItem--gXf0X"
    },
    olDepth: ["speaker_notes_lexical_editor--ol1--HyZBK speaker_notes_lexical_editor--baseOl--oi5Yu", "speaker_notes_lexical_editor--ol2--RHI5f speaker_notes_lexical_editor--baseOl--oi5Yu", "speaker_notes_lexical_editor--ol3--sicVh speaker_notes_lexical_editor--baseOl--oi5Yu", "speaker_notes_lexical_editor--ol4--D9207 speaker_notes_lexical_editor--baseOl--oi5Yu", "speaker_notes_lexical_editor--ol5--Yjgl7 speaker_notes_lexical_editor--baseOl--oi5Yu"],
    ol: "speaker_notes_lexical_editor--listOl--F-XTs",
    ul: "speaker_notes_lexical_editor--listUl--02TdP",
    listitem: "speaker_notes_lexical_editor--listItem--zdUll"
  },
  text: {
    bold: "speaker_notes_lexical_editor--textBold--QdGoR",
    italic: "speaker_notes_lexical_editor--textItalic--J3KZF",
    strikethrough: "speaker_notes_lexical_editor--textStrikethrough--r-r5p",
    underline: "speaker_notes_lexical_editor--textUnderline--qHKah",
    underlineStrikethrough: "speaker_notes_lexical_editor--textUnderlineStrikethrough--zMkdq"
  }
};
let lj = '{"root":{"children":[{"children":[],"direction":null,"format":"","textFormat":null,"indent":0,"type":"paragraph","version":1,"textStyle":""}],"direction":null,"format":"","indent":0,"type":"root","version":1}}';
function lb(e) {
  if (!e) return !0;
  let t = JSON.parse(e);
  let i = t?.root?.children;
  return i && 1 === i.length && i[0].children && 0 === i[0].children.length;
}
function lE({
  initialSpeakerNotesData: e,
  namespace: t,
  onEdit: i,
  onBlur: n,
  isEditable: l,
  placeholder: s,
  setIsSpeakerNotesFocused: a,
  children: o,
  buttonRef: d
}) {
  return jsx(lv, {
    children: o,
    buttonRef: d,
    contentEditableClassName: "",
    initialSpeakerNotesData: e,
    isEditable: l,
    namespace: t,
    onBlur: n,
    onEdit: i,
    placeholder: s,
    setIsSpeakerNotesFocused: a
  });
}
function lv({
  buttonRef: e,
  initialSpeakerNotesData: t,
  namespace: i,
  contentEditableClassName: n,
  onEdit: l,
  onBlur: s,
  isEditable: a,
  placeholder: o,
  setIsSpeakerNotesFocused: d,
  children: c
}) {
  let u = {
    editable: a,
    editorState: t || lj,
    nodes: [ListNode, ListItemNode, TextNode],
    namespace: i,
    onError: e => {
      console.error(e);
    },
    theme: lf
  };
  let p = useHandleValueEvent("speakerNotesEditor", "lexicalEditorChange", e => {
    if (lb(u.editorState) && lb(JSON.stringify(e))) {
      l?.(JSON.parse(lj));
      return;
    }
    l?.(e);
  });
  let x = useHandleGenericEvent("speakerNotesEditor", "blur", () => {
    s?.();
  });
  let h = useHandleGenericEvent("speakerNotesEditor", "focus", () => {
    d?.(!0);
  });
  return jsxs(_$$n3, {
    initialConfig: u,
    children: [jsx(_$$ap, {}), jsx(_$$$, {
      contentEditable: jsx(lT, {
        isEditable: a,
        contentEditableClassName: iG()(ly, n),
        onFocus: h,
        onBlur: () => {
          d?.(!1);
          x();
        },
        placeholder: o,
        buttonRef: e
      }),
      ErrorBoundary: _$$A5
    }), c, a && jsxs(Fragment, {
      children: [jsx(_$$D4, {
        onChange: e => p(e.toJSON()),
        ignoreSelectionChange: !0,
        ignoreHistoryMergeTagChange: !1
      }), jsx(_$$Q3, {}), jsx(_$$G4, {}), jsx(_$$E4, {
        transformers: [UNORDERED_LIST, ORDERED_LIST, BOLD_ITALIC_STAR, BOLD_ITALIC_UNDERSCORE, BOLD_STAR, BOLD_UNDERSCORE, STRIKETHROUGH, ITALIC_STAR, ITALIC_UNDERSCORE]
      }), jsx(_$$Q4, {}), jsx(_$$m3, {}), jsx(_$$A6, {
        maxDepth: 5
      }), jsx(B_, {})]
    })]
  });
}
function lT({
  contentEditableClassName: e,
  onFocus: t,
  onBlur: i,
  isEditable: n,
  placeholder: s,
  buttonRef: a
}) {
  let [o] = useLexicalComposerContext();
  let [d, u] = useState(!1);
  return jsxs("section", {
    "aria-label": getI18nString("slides.speaker_notes.title"),
    className: "speaker_notes_lexical_editor--editableWrapper--N5dWt",
    children: [n && jsx(ButtonPrimitive, {
      ref: a,
      className: "speaker_notes_lexical_editor--visuallyHiddenButton--Yxm6k",
      onClick: e => {
        d || (e.preventDefault(), u(!0), o.focus());
      },
      children: getI18nString("slides.speaker_notes.button")
    }), jsx(_$$a2, {
      tabIndex: n ? d ? 0 : -1 : 0,
      className: iG()(ly, e),
      onFocus: t,
      onBlur: i,
      onKeyDown: e => {
        "Escape" === e.key && d && (u(!1), a.current?.focus());
      },
      "aria-placeholder": getI18nString("slides.speaker_notes.placeholder"),
      placeholder: s
    })]
  });
}
function lS({
  slideId: e,
  initializeSpeakerNotesForSlide: t,
  isEditable: i
}) {
  let [n] = useLexicalComposerContext();
  let r = _$$k6();
  useEffect(() => {
    let e = n.registerEditableListener(e => {
      e === i || r || logError(ServiceCategories.SLIDES, "lexical_editor_editable_mismatch", {
        expectedIsEditable: i,
        actualIsEditable: e
      });
    });
    return () => {
      e();
    };
  }, [n, i, r]);
  useEffect(() => {
    let i = t(e);
    n.setEditorState(n.parseEditorState(i || lj));
  }, [e, t, n]);
  return null;
}
function lI({
  onClick: e
}) {
  return jsx(ScreenReaderOnly, {
    children: jsx(ButtonPrimitive, {
      onClick: e,
      children: getI18nString("slides.toolbar.show_presenter_notes")
    })
  });
}
function lN({
  slideId: e
}) {
  let [t] = useLexicalComposerContext();
  let [i, n] = useState(() => t.getRootElement() === document.activeElement);
  useLayoutEffect(() => (n(t.getRootElement() === document.activeElement), mergeRegister(t.registerCommand(FOCUS_COMMAND, () => (n(!0), !0), COMMAND_PRIORITY_EDITOR), t.registerCommand(BLUR_COMMAND, () => (n(!1), fullscreenValue.commit(), !0), COMMAND_PRIORITY_EDITOR))), [t]);
  let r = useDeepEqualSceneValue((e, t) => {
    let i = e.get(t);
    return i ? i.slideSpeakerNotes : "";
  }, e) || lj;
  useEffect(() => {
    if (function (e, t) {
      if (!e) return !1;
      let i = !e || lb(e);
      let n = lb(t);
      return (!i || !n) && (!!i || !!n || e !== t);
    }(r, JSON.stringify(t.getEditorState().toJSON()))) {
      try {
        t.setEditorState(t.parseEditorState(r));
      } catch (e) {
        reportError(ServiceCategories.SLIDES, Error("Speaker notes crash"), {
          extra: {
            error: e
          }
        });
      }
      i && t.blur();
    }
  }, [r, t, i]);
  return null;
}
function lk({
  slideId: e,
  isEditable: t
}) {
  let i = useRef(null);
  let n = xn();
  let s = getObservableValue(AppStateTsApi?.editorPreferences().speakerNotesHeight, 0);
  let d = AppStateTsApi?.singleSlideView().defaultPaddingInViewport() ?? 0;
  let u = SlideConstantsCppBindings?.speakerNotesDragHandlePadding() ?? 0;
  let p = SlideConstantsCppBindings?.speakerNotesDragHandleHeight() ?? 0;
  let x = AppStateTsApi?.singleSlideView().bottomToolbeltHeightInViewport() ?? 0;
  let h = 0 === s;
  let _ = e => Math.max(0, Math.min(e, 400));
  let g = e => _(window.innerHeight - n - e - x - u - p / 2);
  let f = useRef(null);
  let [j, b] = function ({
    onKeyUpOrDown: e,
    onKeyLeftOrRight: t,
    ...i
  }) {
    let [n, r] = setupDragHandler({
      ...i
    });
    let [s, a] = useState(!1);
    let {
      ref
    } = i;
    function d(i) {
      document.activeElement === ref.current && (e && ("ArrowDown" === i.key || "ArrowUp" === i.key) ? (i.stopPropagation(), e(i.key), a(!0)) : t && ("ArrowLeft" === i.key || "ArrowRight" === i.key) ? (i.stopPropagation(), t(i.key), a(!0)) : a(!1));
    }
    return [n || s, e => mergeProps(r(e), {
      onKeyDown: d
    })];
  }({
    ref: i,
    onDragEnd(e) {
      let t = 10 > Math.abs(e.delta.y);
      let i = g(e.clientY);
      i > 30 ? ud(Math.max(i, 60)) : t ? ud(SlideConstantsCppBindings?.initialSpeakerNotesHeightInViewport() ?? 0) : Hk();
    },
    onDrag(e) {
      let t = g(e.clientY);
      AppStateTsApi?.editorPreferences().speakerNotesHeight.set(t);
    },
    onKeyUpOrDown(e) {
      let t = _(s + ("ArrowUp" === e ? 10 : -10));
      AppStateTsApi?.editorPreferences().speakerNotesHeight.set(t);
    }
  });
  let E = useAppModelProperty("showUi");
  let v = useIsProgressBarHiddenOrLocked();
  let [T, S] = _$$d2();
  let I = Math.round(s / 400 * 100);
  return jsxs("div", {
    className: iG()(cssBuilderInstance.flex.flexColumn.itemsCenter.absolute.bottom0.borderBox.$, "speaker_notes_overlay--speakerNotesOverlayContainer--KDKx7"),
    style: {
      marginLeft: T,
      marginRight: S,
      marginBottom: `${x}px`,
      width: `calc(100vw - ${T}px - ${S}px)`,
      visibility: E && !v ? "visible" : "hidden"
    },
    children: [jsx("div", {
      ...b({
        className: iG()({
          "speaker_notes_overlay--dragHandleContainer--7VUGa": !0,
          [cssBuilderInstance.wFull.flex.justifyCenter.$]: !0,
          "speaker_notes_overlay--hiddenDragHandleHoverTarget--gUtvC": h
        }),
        style: {
          ...styleBuilderInstance.add({
            padding: `${u}px`,
            cursor: j || !h ? "row-resize" : "pointer"
          }).$
        }
      }),
      children: jsxs("div", {
        className: "speaker_notes_overlay--dragHandle--ILwHe",
        style: {
          height: `${p}px`
        },
        children: [h && jsx(lI, {
          onClick: () => {
            h ? ud(SlideConstantsCppBindings?.initialSpeakerNotesHeightInViewport() ?? 0) : Hk();
            f.current?.focus();
          }
        }), jsx("div", {
          ref: i,
          tabIndex: 0,
          role: "separator",
          "aria-orientation": "horizontal",
          "aria-valuenow": I,
          "aria-valuetext": getI18nString("slides.speaker_notes.size", {
            percentValue: I
          }),
          "aria-label": getI18nString("slides.speaker_notes.drag_handle_label"),
          className: "speaker_notes_overlay--dragHandleSeparator---EdOi",
          "data-fullscreen-intercept": getFeatureFlags().slides_a11y,
          children: jsx("div", {
            className: "speaker_notes_overlay--dragHandleHoverOverlay--jNQh3",
            children: jsx("p", {
              className: "speaker_notes_overlay--dragHandleText--kGSNu",
              children: getI18nString("slides.toolbar.show_presenter_notes")
            })
          })
        })]
      })
    }), jsx("div", {
      className: iG()(cssBuilderInstance.relative.wFull.borderBox.$, Dm),
      style: {
        ...styleBuilderInstance.add({
          padding: `0px ${d}px`,
          height: `${s}px`
        }).$
      },
      children: jsx(ScrollContainer, {
        className: "speaker_notes_overlay--inputWrapper--ufx4l text--fontPos13--xW8hS text--_fontBase--QdLsd",
        innerClassName: "speaker_notes_overlay--inputWrapperFullHeight--T0Ngw",
        children: jsx("div", {
          className: "speaker_notes_overlay--inputWrapperInner--nbKDe",
          children: jsx(lC, {
            buttonRef: f,
            slideId: e,
            isEditable: t
          })
        })
      })
    })]
  });
}
function lC({
  slideId: e,
  isEditable: t,
  buttonRef: i
}) {
  let n = useCurrentFileKey() || "";
  function l(e) {
    let t = getSingletonSceneGraph().get(e);
    return t?.slideSpeakerNotes || "";
  }
  return jsxs(lE, {
    buttonRef: i,
    namespace: "SpeakerNotesEditor",
    initialSpeakerNotesData: l(e),
    onEdit: function (t) {
      let i = JSON.parse(getSingletonSceneGraph().get(e)?.slideSpeakerNotes || lj);
      rQ()(i, t) || (_$$l3.user("set-slide-speaker-notes", () => {
        _$$lq(e, JSON.stringify(t));
      }), analyticsEventManager.trackDefinedEvent("slides.presentation_mode.speaker_notes_inserted", {
        slideId: e,
        fileKey: n,
        productType: "slides"
      }));
    },
    isEditable: !!t,
    placeholder: jsx(lw, {
      isEditable: !!t
    }),
    children: [jsx(lS, {
      slideId: e,
      initializeSpeakerNotesForSlide: l,
      isEditable: !!t
    }), jsx(lN, {
      slideId: e
    })]
  }, `${e}-${t}`);
}
function lw({
  isEditable: e
}) {
  let {
    isSlidesAiEnabled
  } = u4();
  let i = Cd();
  let n = _$$k6();
  let s = () => {
    let e = _$$f.EDITOR_PLACEHOLDER;
    atomStoreManager.set(zF, e);
    B3(JT.SLIDES_GENERATE_SPEAKER_NOTES);
    Ag(JT.SLIDES_GENERATE_SPEAKER_NOTES, _$$O, {
      source: e
    });
  };
  let a = useMemo(() => e && isSlidesAiEnabled && i && !n ? jsxs("div", {
    className: cssBuilderInstance.flex.justifyBetween.$,
    children: [getI18nString("slides.speaker_notes.placeholder"), jsxs(ButtonPrimitive, {
      className: "speaker_notes_overlay--generateButton--OoZBZ",
      onClick: () => s(),
      children: [jsx(_$$B2, {}), getI18nString("slides.speaker_notes.draft"), jsx("div", {
        className: cssBuilderInstance.ml4.$,
        children: jsx(_$$y, {
          variant: _$$x3.SLIDES_SPEAKER_NOTES,
          helpUrlVariant: JT.SLIDES_GENERATE_SPEAKER_NOTES
        })
      })]
    })]
  }) : e && isSlidesAiEnabled && n ? jsxs("div", {
    className: cssBuilderInstance.flex.gap8.$,
    children: [jsx(LoadingSpinner, {
      size: "small"
    }), getI18nString("slides.speaker_notes.loading")]
  }) : e ? getI18nString("slides.speaker_notes.placeholder") : getI18nString("slides.speaker_notes.no-notes-placeholder"), [e, isSlidesAiEnabled, i, n]);
  return jsx("div", {
    className: "speaker_notes_overlay--placeholder--8XzW-",
    children: a
  });
}
function lO() {
  let e = _$$ie();
  let t = getObservableValue(AppStateTsApi?.singleSlideView().isInFocusedNodeView, !0);
  let i = useSelector(e => e.mirror?.appModel.isReadOnly);
  gv(e, t);
  return useMemo(() => t ? jsx(lk, {
    slideId: e,
    isEditable: !i
  }) : null, [t, e, i]);
}
let lF = new Map();
function lU(e) {
  let t = getSingletonSceneGraph().get(AppStateTsApi?.canvasGrid().gridGUID() || "-1:-1");
  t && executeInIgnoreUndoRedoScope(() => {
    _$$l3.system("slides-autorename", () => {
      t.autoRename = e;
    });
  });
}
function lQ({
  children: e
}) {
  return jsx(_$$B3.Provider, {
    value: {
      preferredLayout: "grid",
      preferredLayoutLocalStorageKey: "slides-preferred-variable-picker-layout",
      variablePickerSelectionAtom: _$$S
    },
    children: e
  });
}
let l9 = ["GENTLE", "QUICK", "BOUNCY", "SLOW"];
let se = {
  EASE_IN: EasingType.IN_CUBIC,
  EASE_OUT: EasingType.OUT_CUBIC,
  EASE_IN_AND_OUT: EasingType.INOUT_CUBIC,
  LINEAR: EasingType.LINEAR,
  GENTLE: EasingType.GENTLE_SPRING,
  QUICK: EasingType.SPRING_PRESET_ONE,
  BOUNCY: EasingType.SPRING_PRESET_TWO,
  SLOW: EasingType.SPRING_PRESET_THREE
};
function st(e) {
  return l9.includes(e);
}
let si = ["ON_CLICK", "AFTER_TIMEOUT"];
let sn = {
  [SlideTransitionType.NONE]: {
    behavior: "INSTANT"
  },
  [SlideTransitionType.DISSOLVE]: {
    behavior: "DISSOLVE"
  },
  [SlideTransitionType.SLIDE_FROM_LEFT]: {
    direction: "LEFT",
    behavior: "SLIDE"
  },
  [SlideTransitionType.SLIDE_FROM_RIGHT]: {
    direction: "RIGHT",
    behavior: "SLIDE"
  },
  [SlideTransitionType.SLIDE_FROM_TOP]: {
    direction: "TOP",
    behavior: "SLIDE"
  },
  [SlideTransitionType.SLIDE_FROM_BOTTOM]: {
    direction: "BOTTOM",
    behavior: "SLIDE"
  },
  [SlideTransitionType.SLIDE_OUT_TO_LEFT]: {
    direction: "LEFT",
    behavior: "SLIDE_OUT"
  },
  [SlideTransitionType.SLIDE_OUT_TO_RIGHT]: {
    direction: "RIGHT",
    behavior: "SLIDE_OUT"
  },
  [SlideTransitionType.SLIDE_OUT_TO_TOP]: {
    direction: "TOP",
    behavior: "SLIDE_OUT"
  },
  [SlideTransitionType.SLIDE_OUT_TO_BOTTOM]: {
    direction: "BOTTOM",
    behavior: "SLIDE_OUT"
  },
  [SlideTransitionType.PUSH_FROM_LEFT]: {
    direction: "LEFT",
    behavior: "PUSH"
  },
  [SlideTransitionType.PUSH_FROM_RIGHT]: {
    direction: "RIGHT",
    behavior: "PUSH"
  },
  [SlideTransitionType.PUSH_FROM_TOP]: {
    direction: "TOP",
    behavior: "PUSH"
  },
  [SlideTransitionType.PUSH_FROM_BOTTOM]: {
    direction: "BOTTOM",
    behavior: "PUSH"
  },
  [SlideTransitionType.MOVE_FROM_LEFT]: {
    direction: "LEFT",
    behavior: "MOVE"
  },
  [SlideTransitionType.MOVE_FROM_RIGHT]: {
    direction: "RIGHT",
    behavior: "MOVE"
  },
  [SlideTransitionType.MOVE_FROM_TOP]: {
    direction: "TOP",
    behavior: "MOVE"
  },
  [SlideTransitionType.MOVE_FROM_BOTTOM]: {
    direction: "BOTTOM",
    behavior: "MOVE"
  },
  [SlideTransitionType.MOVE_OUT_TO_LEFT]: {
    direction: "LEFT",
    behavior: "MOVE_OUT"
  },
  [SlideTransitionType.MOVE_OUT_TO_RIGHT]: {
    direction: "RIGHT",
    behavior: "MOVE_OUT"
  },
  [SlideTransitionType.MOVE_OUT_TO_TOP]: {
    direction: "TOP",
    behavior: "MOVE_OUT"
  },
  [SlideTransitionType.MOVE_OUT_TO_BOTTOM]: {
    direction: "BOTTOM",
    behavior: "MOVE_OUT"
  },
  [SlideTransitionType.SMART_ANIMATE]: {
    behavior: "SMART_ANIMATE"
  }
};
function sr({
  behavior: e,
  duration: t,
  direction: i,
  triggerType: n,
  triggerDelay: r,
  easingType: l
}) {
  return {
    type: function (e, t) {
      for (let [i, {
        behavior: n,
        direction: r
      }] of Object.entries(sn)) if (n === e && r === t) return i;
      return SlideTransitionType.NONE;
    }(e, i),
    duration: st(l) ? (e => {
      let t = sl(e);
      return J5(w_(t));
    })(l) : t,
    easingType: function (e) {
      let t = se[e || "EASE_OUT"];
      return void 0 !== t ? t : EasingType.OUT_CUBIC;
    }(l),
    trigger: {
      type: "AFTER_TIMEOUT" === n ? AnimationEventType.AFTER_DELAY : AnimationEventType.ON_CLICK,
      delay: "AFTER_TIMEOUT" === n && r ? r : 0
    }
  };
}
function sl(e) {
  switch (e) {
    case "GENTLE":
      return [1, 100, 15, 0];
    case "QUICK":
      return [1, 300, 20, 0];
    case "BOUNCY":
      return [1, 600, 15, 0];
    default:
      return [1, 80, 20, 0];
  }
}
function ss(e) {
  let {
    behavior,
    direction
  } = sn[e.type];
  let n = function (e) {
    for (let [t, i] of Object.entries(se)) if (i === e) return t;
    return "EASE_OUT";
  }(e.easingType);
  let r = Math.round(1e3 * e.duration) / 1e3;
  if (st(n)) {
    let e = sl(n);
    r = xX(w_(e));
  }
  let l = Math.round(1e3 * e.trigger.delay) / 1e3;
  return {
    behavior,
    direction,
    duration: r,
    easingType: n,
    triggerType: e.trigger.type === AnimationEventType.AFTER_DELAY ? "AFTER_TIMEOUT" : "ON_CLICK",
    triggerDelay: l
  };
}
function sa(e) {
  let t = {
    type: SlideTransitionType.NONE,
    duration: 0,
    easingType: EasingType.OUT_CUBIC,
    trigger: {
      type: AnimationEventType.ON_CLICK,
      delay: 0
    }
  };
  let i = defaultSessionLocalIDString;
  e.forEach(e => {
    let n = AppStateTsApi?.slideAnimationBindings().getSlideTransition(e);
    n && t.type === SlideTransitionType.NONE && (t = n, i = e);
  });
  return {
    appliedTransition: t,
    slideGuid: i
  };
}
function so(e, t, i) {
  return n => {
    let r = {
      ...t
    };
    if ("behavior" === e) {
      "INSTANT" === t.behavior && "INSTANT" !== n && (r.duration = 0.3);
      let e = t.direction;
      "INSTANT" === n || "DISSOLVE" === n || "SMART_ANIMATE" === n ? e = void 0 : void 0 === e && (e = "LEFT");
      r.direction = e;
      "INSTANT" === n && (r.triggerType = "ON_CLICK");
    }
    "triggerType" === e && "ON_CLICK" === t.triggerType && "AFTER_TIMEOUT" === n && (r.triggerDelay = 0.8);
    "easingType" === e && n && !st(n) && st(t.easingType) && (r.duration = 0.3);
    let l = sr({
      ...r,
      [e]: n
    });
    AppStateTsApi && _$$l3.user("slide-transition", () => {
      i.forEach(e => {
        AppStateTsApi?.slideAnimationBindings().setSlideTransition(e, l);
      });
      fullscreenValue.commit();
    });
  };
}
function sd(e) {
  return "INSTANT" !== e;
}
let sc = "slides_animation_panel--previewFrame--cO6cR transition_preview--previewFrame--WAa8e transition_preview--_previewItem--o2gce";
function su({
  appliedProperties: e,
  xPadding: t
}) {
  let i = _$$ie();
  let n = getObservableValue(AppStateTsApi?.canvasGrid()?.canvasGridArray, []);
  let l = Rn(n, i);
  let s = _$$P3();
  let o = "MOVE_OUT" === e.behavior || "SLIDE_OUT" === e.behavior;
  let d = o ? i : l ?? defaultSessionLocalIDString;
  let c = o ? l ?? defaultSessionLocalIDString : i;
  let u = _$$ic(d);
  let p = _$$ic(c);
  let x = st(e.easingType);
  let h = {
    behavior: e.behavior,
    direction: e.direction ?? null,
    shouldSmartAnimate: "SMART_ANIMATE" === e.behavior,
    duration: e.duration,
    easing: e.easingType,
    isSpringTransition: x,
    easingFunction: x ? sl(e.easingType) : [],
    preserveScroll: !1,
    resetVideoPosition: !0,
    openUrlInNewTab: !1,
    resetInteractiveComponents: !1,
    resetScrollPosition: !1
  };
  return x ? jsx(SA, {
    transition: h,
    isUI3: !0
  }) : jsx(sp, {
    panelWidth: s,
    xPadding: t,
    transition: h,
    belowThumbnailUrl: p,
    aboveThumbnailUrl: u
  });
}
class sp extends ub {
  rectangleStateToCSSStyle(e, t, i, n) {
    let r = this.cssEasingFunction(e);
    let l = this.cssDuration(e);
    let s = this.getSlideLeft();
    return {
      transition: i === H_.RETURN_TO_START ? "all ease-out 200ms" : i === H_.STATIC ? "unset" : `all ${l}s ${r}`,
      top: 25.5 + 45 * t.top,
      left: s + 80 * t.left,
      opacity: t.opacity,
      border: 0
    };
  }
  renderSimpleScreenToScreenAnimationPreview(e, t, i, n, l, s, a) {
    let o = this.getSlideLeft();
    return jsxs("div", {
      className: "slides_animation_panel--previewPanel--0XANz transition_preview--previewPanel--Gp-aI",
      onMouseEnter: this.onMouseEnterNew,
      onMouseLeave: this.onMouseLeaveNew,
      children: [jsx("div", {
        className: iG()(e, sc),
        style: t,
        children: jsx("img", {
          src: this.props.belowThumbnailUrl,
          alt: "",
          className: cssBuilderInstance.relative.wFull.hFull.$
        })
      }), jsx("div", {
        className: iG()(i, sc),
        style: n,
        children: jsx("img", {
          src: this.props.aboveThumbnailUrl,
          alt: "",
          className: cssBuilderInstance.relative.wFull.hFull.$
        })
      }), jsx("div", {
        className: "slides_animation_panel--screenContainer--6eR6r transition_preview--screenContainer--iuLzq transition_preview--previewFrame--WAa8e transition_preview--_previewItem--o2gce slides_animation_panel--previewFrame--cO6cR transition_preview--previewFrame--WAa8e transition_preview--_previewItem--o2gce",
        style: {
          left: o
        }
      }), jsx("div", {
        className: "slides_animation_panel--screenBorder--G7ZdP transition_preview--screenBorder--Fz-dz transition_preview--screenContainer--iuLzq transition_preview--previewFrame--WAa8e transition_preview--_previewItem--o2gce slides_animation_panel--screenContainer--6eR6r transition_preview--screenContainer--iuLzq transition_preview--previewFrame--WAa8e transition_preview--_previewItem--o2gce slides_animation_panel--previewFrame--cO6cR transition_preview--previewFrame--WAa8e transition_preview--_previewItem--o2gce",
        style: {
          left: o
        }
      })]
    });
  }
  getSlideLeft() {
    return (this.props.panelWidth - this.props.xPadding) / 2 - 40;
  }
}
let sh = [0, 0.1, 0.2, 0.3];
class sm extends _$$c$ {}
let s_ = new _$$ag(i5.MILLISECONDS, 0.001, 30);
function sg({
  delay: e,
  onChange: t
}) {
  let i = useDispatch<AppDispatch>();
  let n = useDropdownState();
  return jsx(AutoInteractableWrapper, {
    name: "slides_delay_dropdown",
    children: jsx(_$$ow, {
      value: {
        select: pW,
        inputComponent: gm
      },
      children: jsx(_$$tV, {
        value: {
          chevron: ChevronContainer
        },
        children: jsx(TimeInput, {
          "data-tooltip": getI18nString("slides.properties_panel.slide_transition.delay"),
          "data-tooltip-type": KindEnum.TEXT,
          dispatch: i,
          dropdownShown: n,
          enablePreview: !0,
          icon: jsx(_$$A8, {}),
          id: "slide-animation-delay",
          max: 30,
          min: 0.001,
          onValueChange: t,
          tooltipForScreenReadersOnly: !0,
          value: e,
          children: sh.map(e => jsx(sm, {
            value: e,
            children: s_.format(e)
          }, `delay-${e}`))
        })
      })
    })
  });
}
let sy = [0.3, 0.6, 0.9];
let sf = new _$$ag(i5.MILLISECONDS, 0.01, 10);
class sj extends _$$c$ {}
function sb({
  duration: e,
  easingType: t,
  onChange: i
}) {
  let n = useDispatch<AppDispatch>();
  let l = useDropdownState();
  return jsx(AutoInteractableWrapper, {
    name: "slides_duration_dropdown",
    children: jsx(_$$ow, {
      value: {
        select: pW,
        inputComponent: gm
      },
      children: jsx(_$$tV, {
        value: {
          chevron: ChevronContainer
        },
        children: jsx(TimeInput, {
          ariaLabel: getI18nString("slides.properties_panel.slide_transition.duration"),
          "data-tooltip": getI18nString("slides.properties_panel.slide_transition.duration"),
          "data-tooltip-type": KindEnum.TEXT,
          disabled: st(t),
          dispatch: n,
          dropdownShown: l,
          enablePreview: !0,
          icon: jsx(_$$A8, {}),
          id: "slide-animation-duration",
          max: 10,
          min: 0.01,
          onValueChange: i,
          tooltipForScreenReadersOnly: !0,
          value: e,
          children: sy.map(e => jsx(sj, {
            value: e,
            children: sf.format(e)
          }, `duration-${e}`))
        })
      })
    })
  });
}
let sE = ["EASE_IN", "EASE_OUT", "EASE_IN_AND_OUT"];
let sv = new Mk();
function sT({
  easingType: e,
  onChange: t,
  recordingKey: i
}) {
  return jsx(AutoInteractableWrapper, {
    name: "slide_transition_easing",
    children: jsxs(SelectGroupLabel, {
      value: e,
      onChange: t,
      recordingKey: i,
      children: [jsx(SelectSeparator, {
        label: jsx(HiddenLabel, {
          children: renderI18nText("slides.properties_panel.slide_transition.curve")
        }),
        width: "fill",
        size: "md"
      }), jsxs(SelectContainer, {
        children: [jsx(SelectOptionReset, {
          value: "LINEAR",
          children: sv.format("LINEAR")
        }), jsx(SelectRoot, {}), sE.map(e => jsx(SelectOptionReset, {
          value: e,
          children: sv.format(e)
        }, e)), jsx(SelectRoot, {}), l9.map(e => jsx(SelectOptionReset, {
          value: e,
          children: sv.format(e)
        }, e))]
      })]
    })
  });
}
let sS = new _$$el(!0);
let sI = ["SMART_ANIMATE", "DISSOLVE", "PUSH", "SLIDE", "SLIDE_OUT", "MOVE", "MOVE_OUT"];
function sN({
  behavior: e,
  onChange: t,
  recordingKey: i
}) {
  return jsx(AutoInteractableWrapper, {
    name: "slide_transition_style",
    children: jsxs(SelectGroupLabel, {
      value: e,
      onChange: t,
      recordingKey: i,
      children: [jsx(SelectSeparator, {
        label: jsx(HiddenLabel, {
          children: renderI18nText("slides.properties_panel.slide_transition.style")
        }),
        width: "fill",
        size: "md"
      }), jsxs(SelectContainer, {
        children: [jsx(SelectOptionReset, {
          value: "INSTANT",
          children: sS.format("INSTANT")
        }, "INSTANT"), jsx(SelectRoot, {}), sI.map(e => jsx(SelectOptionReset, {
          value: e,
          children: sS.format(e)
        }, e))]
      })]
    })
  });
}
let sC = new VG();
function sw({
  trigger: e
}) {
  return jsxs("div", {
    className: "x78zum5 x6s0dn4 x195vfkc x10n38tu",
    children: [jsx("span", {
      className: "x1x3354t",
      children: _$$e3(e)
    }), sC.format(e)]
  });
}
function sO({
  triggerType: e,
  onChange: t,
  recordingKey: i
}) {
  return jsxs(SelectGroupLabel, {
    value: e,
    onChange: t,
    recordingKey: i,
    children: [jsx(SelectSeparator, {
      label: jsx(HiddenLabel, {
        children: getI18nString("slides.properties_panel.slide_transition.timing")
      }),
      width: "fill",
      size: "md",
      iconLead: _$$e3(e)
    }), jsx(SelectContainer, {
      children: si.map(e => jsx(SelectOptionReset, {
        value: e,
        children: jsx(sw, {
          trigger: e
        })
      }, e))
    })]
  });
}
let {
  ExpandableSection: _ExpandableSection,
  LabelInputRow
} = n;
function sP({
  onClick: e,
  recordingKey: t
}) {
  return jsx("div", {
    className: "x1cmmqis",
    children: jsx(EventShield, {
      eventListeners: ["onPointerDown", "onMouseDown"],
      children: jsx(IconButton, {
        onClick: e,
        "aria-label": getI18nString("slides.properties_panel.slide_transitions.delete_button.aria_label"),
        htmlAttributes: {
          "data-tooltip": getI18nString("slides.properties_panel.slide_transitions.delete_button.tooltip"),
          "data-tooltip-type": KindEnum.TEXT
        },
        recordingKey: generateRecordingKey(t, "deleteButton"),
        children: jsx(_$$z, {})
      })
    })
  });
}
function sD({
  appliedTransition: e,
  showDeleteButton: t,
  selectedSlideGuids: i,
  recordingKey: n
}) {
  let s = ss(e);
  let a = so("behavior", s, i);
  let o = useCallback(() => {
    a("INSTANT");
  }, [a]);
  return t ? jsx(sP, {
    onClick: o,
    recordingKey: n
  }) : jsx("div", {
    className: cssBuilderInstance.pr8.$,
    children: jsx(nV, {
      animationDuration: s.duration
    })
  });
}
function sR({
  recordingKey: e
}) {
  let t = _$$ax();
  let {
    appliedTransition
  } = sa(t);
  let n = ss(appliedTransition);
  return jsx(_$$k7, {
    name: "slides_transition_panel",
    children: jsxs(_$$tR, {
      children: [jsx(Uz, {
        titleTx: renderI18nText("slides.properties_panel.transition_panel.slide")
      }), getFeatureFlags().slides_a11y_animation_panel ? jsx(sM, {
        appliedProperties: n,
        selectedSlideGuids: t,
        recordingKey: e
      }) : jsx(sF, {
        appliedProperties: n,
        selectedSlideGuids: t,
        recordingKey: e
      })]
    })
  });
}
function sM({
  appliedProperties: e,
  selectedSlideGuids: t,
  recordingKey: i
}) {
  let [n, s] = useState(!1);
  let {
    appliedTransition
  } = sa(t);
  let o = iK();
  let d = useSetAtom(iV);
  let u = sd(e.behavior);
  let p = u && (o || n);
  let x = o ? i0.FULL : void 0;
  return jsx(Ad, {
    appendedClassName: cssBuilderInstance.py4.$,
    label: null,
    input: jsxs(_$$bL2, {
      isOpen: o,
      setOpen: () => {
        d({
          type: "SELECT_SLIDE_TRANSITION"
        });
      },
      children: [jsxs(na, {
        highlight: x,
        isOpen: o,
        htmlAttributes: {
          onMouseEnter: () => s(!0),
          onMouseLeave: () => s(!1)
        },
        children: [jsx(no, {
          icon: jsx(_$$l8, {}),
          labelName: sS.format(e.behavior),
          recordingKey: i,
          "aria-label": getI18nString("slides.properties_panel.slide_transitions.label.aria_label", {
            transitionBehavior: sS.format(e.behavior),
            animationDuration: nF.format(e.duration)
          })
        }), jsx(nd, {
          children: u && jsx(sD, {
            appliedTransition,
            showDeleteButton: p,
            selectedSlideGuids: t,
            recordingKey: i
          })
        })]
      }), jsx(nc, {
        isOpen: o,
        children: jsx(sU, {
          appliedProperties: e,
          selectedSlideGuids: t,
          recordingKey: i
        })
      })]
    })
  });
}
function sF({
  appliedProperties: e,
  selectedSlideGuids: t,
  recordingKey: i
}) {
  let [n, s] = useState(!1);
  let {
    appliedTransition
  } = sa(t);
  let o = iK();
  let d = useSetAtom(iV);
  let c = sd(e.behavior);
  let u = c && (o || n);
  return jsx(Ad, {
    appendedClassName: cssBuilderInstance.py4.$,
    label: null,
    input: jsx(_ExpandableSection, {
      expanded: o,
      highlight: o ? i0.FULL : void 0,
      leftIcon: jsx(_$$l8, {}),
      onClick: () => d({
        type: "SELECT_SLIDE_TRANSITION"
      }),
      onKeyDown: e => handleAccessibilityKeyboardEvents({
        e,
        onClickHandler: () => d({
          type: "SELECT_SLIDE_TRANSITION"
        })
      }),
      onMouseEnter: () => s(!0),
      onMouseLeave: () => s(!1),
      recordingKey: i,
      rightItems: c && jsx(sD, {
        appliedTransition,
        showDeleteButton: u,
        selectedSlideGuids: t,
        recordingKey: i
      }),
      title: sS.format(e.behavior),
      children: jsx(sU, {
        appliedProperties: e,
        selectedSlideGuids: t,
        recordingKey: i
      })
    })
  });
}
function sU({
  appliedProperties: e,
  selectedSlideGuids: t,
  recordingKey: i
}) {
  var n;
  let l = useDispatch<AppDispatch>();
  let o = so("behavior", e, t);
  let d = so("direction", e, t);
  let p = so("duration", e, t);
  let x = so("easingType", e, t);
  let h = so("triggerType", e, t);
  let m = so("triggerDelay", e, t);
  let _ = !("INSTANT" === (n = e.behavior) || "DISSOLVE" === n || "SMART_ANIMATE" === n);
  let g = sd(e.behavior);
  let y = "AFTER_TIMEOUT" === e.triggerType;
  return jsxs("div", {
    className: "slides_transition_panel--controlContainer--0Qihw",
    children: [jsxs(sV, {
      children: [jsx(LabelInputRow, {
        labelTx: renderI18nText("slides.properties_panel.slide_transition.style"),
        input: jsx(sN, {
          behavior: e.behavior,
          onChange: o,
          recordingKey: generateRecordingKey(i, "styleControl")
        })
      }), _ && jsx(AutoInteractableWrapper, {
        name: "slide_transition_direction",
        children: jsx(LabelInputRow, {
          labelTx: renderI18nText("slides.properties_panel.slide_transition.direction"),
          input: jsx(_$$sP, {
            onChange: d,
            property: e.direction ?? null,
            recordingKey: generateRecordingKey(i, "directionControl")
          })
        })
      }), g && jsxs(Fragment, {
        children: [jsx(LabelInputRow, {
          labelTx: renderI18nText("slides.properties_panel.slide_transition.curve"),
          input: jsx(sT, {
            easingType: e.easingType,
            onChange: x,
            recordingKey: generateRecordingKey(i, "easingControl")
          })
        }), jsx(LabelInputRow, {
          labelTx: renderI18nText("slides.properties_panel.slide_transition.duration"),
          input: jsx(sb, {
            duration: e.duration,
            easingType: e.easingType,
            onChange: p,
            recordingKey: generateRecordingKey(i, "durationControl")
          })
        })]
      })]
    }), g && jsxs(sV, {
      children: [jsx(LabelInputRow, {
        labelTx: renderI18nText("slides.properties_panel.slide_transition.timing"),
        input: jsx(sO, {
          triggerType: e.triggerType,
          onChange: h
        })
      }), y && jsx(LabelInputRow, {
        labelTx: renderI18nText("slides.properties_panel.slide_transition.delay"),
        input: jsx(sg, {
          delay: e.triggerDelay,
          onChange: m
        })
      })]
    }), g && jsxs(Fragment, {
      children: [jsx(sV, {
        children: jsx("div", {
          style: {
            width: "100%"
          },
          children: jsx(su, {
            appliedProperties: e,
            xPadding: 64
          })
        })
      }), jsx(sV, {
        children: jsx(ButtonWide, {
          variant: "secondary",
          onClick: () => {
            var t;
            t = sr(e);
            _$$l3.user("slide-transition-all-slides", () => {
              AppStateTsApi?.slideAnimationBindings().setSlideTransitionForAll(t);
              fullscreenValue.commit();
            });
            l(VisualBellActions.enqueue({
              message: getI18nString("slides.properties_panel.slide_transition.apply_all_slides_confirmation")
            }));
          },
          recordingKey: generateRecordingKey(i, "applyToAllButton"),
          children: renderI18nText("slides.properties_panel.slide_transition.apply_to_all")
        })
      })]
    })]
  });
}
function sV({
  children: e
}) {
  return jsx("div", {
    className: "slides_transition_panel--controlSection--t0iEB",
    children: e
  });
}
function sK({
  shownPanels: e
}) {
  let t = e[ItemType.SLIDES_ANIMATION] || e[ItemType.SLIDES_OBJECT_ANIMATION];
  useSelector(e => e.mirror.selectionProperties);
  return jsxs(TabLoop, {
    children: [jsx(useCachedSubtree, {
      isVisible: t,
      children: () => jsx(sR, {
        recordingKey: "slidesTransitionPanel"
      })
    }), jsx(useCachedSubtree, {
      isVisible: t,
      children: () => jsx(nW, {
        recordingKey: "slidesObjectAnimationsPanel"
      })
    })]
  });
}
function as({
  recordingKey: e
}) {
  let t = useDispatch<AppDispatch>();
  let [i] = useSelectionProperty("slideNumber");
  let n = "SLIDE" === i || "SECTION" === i || "SUBSECTION" === i || "TOTAL_WITHIN_DECK" === i || "TOTAL_WITHIN_SECTION" === i;
  let l = isInvalidValue(i);
  let a = "TOTAL_WITHIN_DECK" === i || "TOTAL_WITHIN_SECTION" === i;
  return n || l ? jsx(_$$k7, {
    name: "slide_number_panel",
    children: jsxs(_$$tR, {
      children: [jsx(aa, {
        recordingKey: e
      }), jsx(ad, {
        includeTotal: a
      }), a && jsx(ac, {
        recordingKey: e
      }), jsx("div", {
        className: "xq1n1xh x1db2dqx x1xmf6yo x12nagc",
        children: jsx(ButtonWide, {
          onClick: () => {
            fullscreenValue.triggerActionInUserEditScope("insert-slide-numbers-all-slides");
            t(VisualBellActions.enqueue({
              message: getI18nString("slides.properties_panel.slide_number.insert_all_slides_confirmation")
            }));
          },
          variant: "secondary",
          children: getI18nString("slides.properties_panel.slide_number.insert_all_slides")
        })
      })]
    })
  }) : null;
}
function aa({
  recordingKey: e
}) {
  let t = useDispatch<AppDispatch>();
  let i = useDropdownState();
  let [n, l] = useSelectionProperty("slideNumber");
  return jsx(No, {
    label: renderI18nText("slides.properties_panel.slide_number.slide_number_type"),
    input: jsx(AutoInteractableWrapper, {
      name: "slide_number_count_selector",
      children: jsxs(_$$l6, {
        id: "slide-number-select",
        dispatch: t,
        dropdownShown: i,
        formatter: ao,
        property: "SLIDE" === n || "TOTAL_WITHIN_DECK" === n ? "SLIDE" : "SUBSECTION",
        onChange: e => {
          "SLIDE" === n && "SUBSECTION" === e ? l("SUBSECTION") : "SUBSECTION" === n && "SLIDE" === e ? l("SLIDE") : "TOTAL_WITHIN_DECK" === n && "SUBSECTION" === e ? l("TOTAL_WITHIN_SECTION") : "TOTAL_WITHIN_SECTION" === n && "SLIDE" === e ? l("TOTAL_WITHIN_DECK") : l("SLIDE");
        },
        recordingKey: generateRecordingKey(e, "slideNumberDropdown"),
        children: [jsx(_$$c$, {
          value: "SLIDE",
          recordingKey: generateRecordingKey(e, "slideNumberSlide")
        }), jsx(_$$c$, {
          value: "SUBSECTION",
          recordingKey: generateRecordingKey(e, "slideNumberSubsection")
        })]
      })
    })
  });
}
let ao = {
  format: e => {
    if (isInvalidValue(e)) return getI18nString("fullscreen.mixed");
    switch (e) {
      case "SLIDE":
      case "TOTAL_WITHIN_DECK":
        return getI18nString("slides.properties_panel.slide_number.deck");
      case "TOTAL_WITHIN_SECTION":
      case "SUBSECTION":
        return getI18nString("slides.properties_panel.slide_number.subsection");
      default:
        return getI18nString("slides.properties_panel.slide_number.none");
    }
  }
};
function ad({
  includeTotal: e
}) {
  let [t, i] = useSelectionProperty("slideNumber");
  return jsx(No, {
    label: renderI18nText("slides.properties_panel.slide_number.include_total"),
    input: jsx(AutoInteractableWrapper, {
      name: "slide_number_include_total_switch",
      children: jsx(_$$d5, {
        label: jsx(HiddenLabel, {
          children: getI18nString("slides.properties_panel.slide_number.include_total")
        }),
        checked: e,
        onChange: () => {
          "SLIDE" === t ? i("TOTAL_WITHIN_DECK") : "SUBSECTION" === t ? i("TOTAL_WITHIN_SECTION") : "TOTAL_WITHIN_DECK" === t ? i("SLIDE") : "TOTAL_WITHIN_SECTION" === t ? i("SUBSECTION") : i("SLIDE");
        }
      })
    })
  });
}
function ac({
  recordingKey: e
}) {
  let t = useDispatch<AppDispatch>();
  let i = useDropdownState();
  let [n] = useSelectionProperty("slideNumber");
  let [o, d] = useSelectionProperty("slideNumberSeparator");
  let u = function (e) {
    let t = n6();
    let {
      ofPreview,
      dashPreview,
      dotPreview,
      slashPreview
    } = useMemo(() => {
      let i = AppStateTsApi?.getTopLeftSelectedGridChildId() || "-1:-1";
      let n = "SLIDE" === e || "TOTAL_WITHIN_DECK" === e ? "TOTAL_WITHIN_DECK" : "TOTAL_WITHIN_SECTION";
      let [r, l, s] = n3(t);
      let o = e => n8(i, n, e, t, r, l, s);
      return {
        ofPreview: o("of"),
        dashPreview: o("-"),
        dotPreview: o("\u2022"),
        slashPreview: o("/")
      };
    }, [t, e]);
    return {
      format: e => {
        if (isInvalidValue(e)) return getI18nString("fullscreen.mixed");
        switch (e) {
          case "of":
          default:
            return ofPreview;
          case "-":
            return dashPreview;
          case "\u2022":
            return dotPreview;
          case "/":
            return slashPreview;
        }
      }
    };
  }(n);
  return jsx(No, {
    label: renderI18nText("slides.properties_panel.slide_number.format"),
    input: jsx(AutoInteractableWrapper, {
      name: "slide_number_format_selector",
      children: jsxs(_$$l6, {
        id: "slide-number-format",
        dispatch: t,
        dropdownShown: i,
        formatter: u,
        property: o || "/",
        onChange: e => d(e),
        recordingKey: generateRecordingKey(e, "slideNumberSeparatorDropdown"),
        children: [jsx(_$$c$, {
          value: "of",
          recordingKey: generateRecordingKey(e, "slideNumberSeparatorOf")
        }), jsx(_$$c$, {
          value: "-",
          recordingKey: generateRecordingKey(e, "slideNumberSeparatorDash")
        }), jsx(_$$c$, {
          value: "\u2022",
          recordingKey: generateRecordingKey(e, "slideNumberSeparatorDot")
        }), jsx(_$$c$, {
          value: "/",
          recordingKey: generateRecordingKey(e, "slideNumberSeparatorSlash")
        })]
      })
    })
  });
}
function ap({
  recordingKey: e
}) {
  let t = useDispatch<AppDispatch>();
  let i = useDropdownState();
  let [n, l] = useSelectionProperty("codeBlockLanguage");
  let [a, o] = useSelectionProperty("codeBlockTheme");
  n || console.warn("<SlidesCodeBlockPanel /> expected selection property codeBlockLanguage");
  return jsx(_$$k7, {
    name: "slides_code_block_panel",
    children: jsxs(_$$tR, {
      withTopPadding: !0,
      hideBorderBottom: !0,
      children: [n && jsx(_$$iz, {
        label: renderI18nText("slides.properties_panel.code_block_panel.language"),
        input: jsx(_$$l6, {
          "aria-label": renderI18nText("slides.properties_panel.code_block_panel.language"),
          id: "slide-code-block-language-select",
          property: n,
          onChange: l,
          formatter: _$$lR,
          dispatch: t,
          dropdownShown: i,
          recordingKey: generateRecordingKey(e, "codeBlockLanguage"),
          children: _$$ie2.map(t => jsx(_$$c$, {
            value: t,
            ariaLabel: _$$lR.format(t),
            recordingKey: generateRecordingKey(e, "codeBlockLanguage", t)
          }, t))
        })
      }), a && jsx(_$$iz, {
        label: renderI18nText("slides.properties_panel.code_block_panel.color"),
        input: jsx(_$$l6, {
          "aria-label": renderI18nText("slides.properties_panel.code_block_panel.color"),
          id: "slide-code-block-theme-select",
          property: a,
          onChange: o,
          formatter: A$,
          dispatch: t,
          dropdownShown: i,
          recordingKey: generateRecordingKey(e, "codeBlockTheme"),
          children: pd.map(t => jsx(_$$c$, {
            value: t,
            ariaLabel: A$.format(t),
            recordingKey: generateRecordingKey(e, "codeBlockTheme", t)
          }, t))
        })
      })]
    })
  });
}
function am({
  recordingKey: e
}) {
  let t = useDispatch<AppDispatch>();
  let i = useSelectedThemeId();
  let n = useEffectiveThemeId();
  let {
    Sprig
  } = useSprigWithSampling();
  let d = useCurrentFileKey();
  let p = _$$l5();
  let x = useCallback((e, n) => _$$l3.user("swap-slide-theme", () => {
    let r = Dh(e);
    if (!r) return;
    let l = new Set(r.variableIDs);
    n && (n = n.filter(e => l.has(e)));
    let s = AppStateTsApi?.slideThemeLibBindings().swapSelectedSlidesToNewTheme(e, n || []);
    void 0 !== s && (s === ThemeColorStatus.NO_THEME_COLORS ? t(VisualBellActions.enqueue({
      message: getI18nString("slides.properties_panel.theme.shuffle_no_change_visual_bell")
    })) : s === ThemeColorStatus.NONE_AVAILABLE && t(VisualBellActions.enqueue({
      message: getI18nString("slides.properties_panel.theme.no_swap_available")
    })), d && analyticsEventManager.trackDefinedEvent("slides.editor.theme_swap", {
      fromThemeId: isInvalidValue(i) ? "Mixed" : i,
      toThemeId: e,
      fileKey: d,
      slideIds: p.join(",")
    }), fullscreenValue.triggerAction("commit"), Sprig("track", "swap_slide_theme"));
  }), [t, Sprig, i, d, p]);
  let h = useCallback(() => {
    _$$l3.user("create-new-theme", () => {
      if (!AppStateTsApi) return;
      let e = AppStateTsApi.slideThemeLibBindings().insertDefaultLocalTheme(ThemeMode.LIGHT, "Template style");
      AppStateTsApi.slideThemeLibBindings().setThemeIdOnSelection(e);
    });
  }, []);
  return jsx(_$$k7, {
    name: "slides_theme_panel",
    children: jsxs(Zk, {
      children: [jsx(_$$r, {
        titleTx: renderI18nText("slides.properties_panel.theme.panel_title")
      }), jsx("div", {
        className: cssBuilderInstance.grid.px16.$,
        children: jsx(_$$n4, {
          selectedThemeId: i ?? n,
          onChange: x,
          onCreateNewTheme: h,
          recordingKey: generateRecordingKey(e, "themeDropdown"),
          allowShuffle: !0,
          allowEditTheme: !0
        })
      })]
    })
  });
}
function a_({
  allSavedPlugins: e,
  colorFormat: t,
  dropdownShown: i,
  library: n,
  localPlugins: l,
  modalShown: d,
  openFile: c,
  orgEntity: u,
  pickerInStyleCreationShown: p,
  pickerShown: x,
  publishedPlugins: h,
  saveAsState: _,
  sceneGraphSelection: g,
  shownPanels: y,
  stylePickerListLayout: f,
  stylePickerShown: b
}) {
  let E = useDispatch<AppDispatch>();
  let v = useAtomWithSubscription(_$$b4);
  let T = qh();
  let S = hD();
  let I = So(y, !0);
  let {
    maskType
  } = useSelectedStyleOrSelectionPropertyValues("maskType", "numSelected");
  let {
    areOnlyResponsiveSetsSelected,
    pluginRelaunchData,
    numSelected
  } = useNonMixedSelectedStyleOrSelectionPropertyValues("pluginRelaunchData", "areOnlyResponsiveSetsSelected", "numSelected");
  let O = useSelectionPropertyValue("exportSettings");
  let A = useNonMixedSelectionPropertyValue("stateGroupSelectionInfo");
  let L = SJ();
  let P = useAppModelPropsShallow("currentPage", "currentSelectedProperty");
  return y[ItemType.FRAME_PRESETS] ? jsx(TabLoop, {
    children: jsx(useCachedSubtree, {
      isVisible: !0,
      children: () => jsx(_$$nl, {
        recordingKey: "framePresetPanel"
      }, "frame-presets")
    })
  }) : y[ItemType.PENCIL_TOOL] ? jsx(TabLoop, {
    children: jsx(useCachedSubtree, {
      isVisible: !0,
      children: () => jsx(_$$q4, {
        recordingKey: "pencilToolPanel",
        id: "pencilToolPanel",
        openFile: c
      }, "pencilToolPanel")
    })
  }) : jsxs(TabLoop, {
    children: [0 === Object.keys(g).length && jsx(Mw, {
      panelName: ON.DESIGN
    }), jsx(_i, {
      recordingKey: "toolbarView",
      shouldShowComponentPropertiesPanel: _$$tV2(y, A),
      shouldShowInstancePanel: M0(y),
      shouldShowSlotPanel: Br(y),
      shouldShowSlidesTypePanel: y[ItemType.SLIDE_NUMBER],
      withBottomBorder: !y[ItemType.CODE_BLOCK_ITEM]
    }), getFeatureFlags().react_scenegraph && jsx(useCachedSubtree, {
      isVisible: y[ItemType.JSX_ITEM],
      children: () => jsx(_$$_6, {})
    }), jsx(useCachedSubtree, {
      isVisible: _$$tV2(y, A),
      children: () => jsx(BS, {
        recordingKey: "propsPanel"
      }, "componentProperties")
    }), jsx(useCachedSubtree, {
      isVisible: y[ItemType.COMPONENT_ITEM],
      children: () => jsx(_$$c3, {
        recordingKey: "componentPanel"
      }, "component")
    }), jsx(useCachedSubtree, {
      isVisible: M0(y),
      children: () => jsx(_$$_5, {
        recordingKey: "instancePanel"
      }, "instance")
    }), jsx(useCachedSubtree, {
      isVisible: y[ItemType.SLIDES_THEME],
      children: () => jsx(am, {
        recordingKey: "slidesThemePanel"
      })
    }), jsx(useCachedSubtree, {
      isVisible: y[ItemType.CODE_BLOCK_ITEM],
      children: () => jsx(ap, {
        recordingKey: "slidesCodeBlockPanel"
      })
    }), jsx(useCachedSubtree, {
      isVisible: y[ItemType.SLIDE_NUMBER],
      children: () => jsx(as, {
        recordingKey: "slideNumberPanel"
      })
    }), jsx(useCachedSubtree, {
      isVisible: _$$d4(y) || y[ItemType.TRANSFORM_ITEM],
      children: () => jsx(zq, {
        recordingKey: "transformPanel",
        propertiesPanelState: v,
        openFileKey: c?.key || null,
        canEditConstraints: GG(y),
        onlyShowXYInputsRow: v === GR.DEFAULT_SIMPLIFIED || (areOnlyResponsiveSetsSelected ?? !1)
      }, "transform")
    }), jsx(useCachedSubtree, {
      isVisible: y[ItemType.VECTOR_TRANSFORM_UNIFIED_ITEM],
      children: () => jsx(U_, {
        recordingKey: "transformPanel",
        openFileKey: c?.key || null,
        dispatch: E,
        dropdownShown: i
      }, "vector-transform")
    }), jsx(useCachedSubtree, {
      isVisible: I,
      children: () => jsx(Vy, {
        recordingKey: "stackPanel",
        onlyShowResizingRow: v === GR.DEFAULT_SIMPLIFIED,
        onlyStacksAndGridsSelected: !!y[ItemType.STACK_ITEM]
      }, "stack")
    }), jsx(F$, {
      isVisible: y[ItemType.SCALE_ITEM]
    }), jsx(useCachedSubtree, {
      isVisible: y[ItemType.VECTOR_ITEM],
      children: () => jsx(VR, {
        isUI3: !0,
        recordingKey: "vectorTransformPanel",
        dispatch: E,
        dropdownShown: i
      }, "vector-transform")
    }), jsx(useCachedSubtree, {
      isVisible: y[ItemType.MASK_ITEM],
      children: () => jsx(_$$B4, {
        recordingKey: "maskPanel",
        maskType
      }, "mask")
    }), jsx(useCachedSubtree, {
      isVisible: y[ItemType.LAYER_ITEM],
      children: () => jsx(X2, {
        recordingKey: "appearancePanel"
      })
    }), jsx(useCachedSubtree, {
      isVisible: y[ItemType.TYPE_ITEM],
      children: () => jsx(gc, {}, "type")
    }), jsx(useCachedSubtree, {
      isVisible: y[ItemType.CANVAS_ITEM],
      children: () => jsx(_$$v5, {
        colorFormat: t,
        defaultColor: defaultGrayColor,
        dispatch: E,
        dropdownShown: i,
        hasExports: !!O && valueOrFallback(O, []).length > 0,
        library: n,
        modalShown: d,
        openFile: c,
        pickerShown: x,
        recordingKey: "canvasBackgroundPanel",
        sceneGraphSelection: g
      }, "canvas-background")
    }), jsx(useCachedSubtree, {
      isVisible: y[ItemType.REMOVE_GROUP_BACKGROUND_ITEM],
      children: () => jsx(_$$C, {}, "remove-group-fill-stroke")
    }), jsx(useCachedSubtree, {
      isVisible: y[ItemType.FILL_ITEM],
      children: () => jsx(B8, {
        variableScopes: T
      }, "fill")
    }), jsx(useCachedSubtree, {
      isVisible: y[ItemType.STROKE_ITEM],
      children: () => jsx($p, {
        colorFormat: t,
        defaultColor: blackColor,
        dispatch: E,
        dropdownShown: i,
        isPanelBodyCollapsedAtom: null,
        library: n,
        modalShown: d,
        openFile: c,
        pickerInStyleCreationShown: p,
        pickerShown: x,
        recordingKey: "strokePanel",
        sceneGraphSelection: g,
        stylePickerListLayout: f,
        stylePickerShown: b
      }, "stroke")
    }), jsx(useCachedSubtree, {
      isVisible: y[ItemType.EFFECTS_ITEM],
      children: () => jsx(w5, {}, "effects")
    }), jsx(useCachedSubtree, {
      isVisible: L,
      children: () => jsx(UA, {
        colorFormat: t,
        defaultColor: defaultGrayColor,
        dispatch: E,
        dropdownShown: i,
        library: n,
        openFile: c,
        pickerShown: x,
        recordingKey: "selectionPaintsPanel",
        sceneGraphSelection: g,
        stylePickerListLayout: f
      }, "selection-paints")
    }), jsx(useCachedSubtree, {
      isVisible: y[ItemType.GRIDS_ITEM],
      children: () => jsx(_$$tC, {}, "grids")
    }), jsx(useCachedSubtree, {
      isVisible: P1(y, c),
      children: () => jsx(LI, {
        currentPage: P.currentPage,
        currentSelectedProperty: P.currentSelectedProperty,
        dispatch: E,
        dropdownShown: i,
        exportSettings: O,
        isSelectionRenamable: LI.isSelectionRenamable(Object.keys(g)),
        openFile: c,
        panelWidth: _$$iP,
        pickerShown: x,
        recordingKey: "exportsPanel",
        saveAsState: _,
        sceneGraphSelection: g,
        singleNodeName: S
      }, "export")
    }), jsx(useCachedSubtree, {
      isVisible: !NR(y),
      children: () => jsx(_$$Q5, {
        allSavedPlugins: e.plugins,
        dispatch: E,
        editorType: c?.editorType ? mapFileTypeToEditorType(c.editorType) : null,
        localPlugins: l,
        numSelected: numSelected ?? 0,
        openFileKey: c?.key || null,
        orgEntity: u,
        pluginRelaunchData,
        publishedPlugins: h,
        recordingKey: "pluginPanel"
      }, "plugin")
    }), getFeatureFlags().jsx_debugging && jsx(_$$Ay3, {
      recordingKey: "jsxDebugPanel"
    })]
  });
}
function ay({
  allSavedPlugins: e,
  colorFormat: t,
  dropdownShown: i,
  library: n,
  localPlugins: l,
  modalShown: d,
  openFile: c,
  orgEntity: u,
  pickerInStyleCreationShown: p,
  pickerShown: x,
  publishedPlugins: h,
  saveAsState: _,
  sceneGraphSelection: g,
  shownPanels: y,
  stylePickerListLayout: f,
  stylePickerShown: b
}) {
  let E = useDispatch<AppDispatch>();
  let [v, T] = useAtomValueAndSetter(_$$b4);
  let S = useAppModelPropsShallow("currentPage", "currentSelectedProperty");
  let I = qh();
  let N = So(y, !0);
  let k = hD();
  let {
    numSelected,
    pluginRelaunchData,
    areOnlyResponsiveSetsSelected
  } = useNonMixedSelectedStyleOrSelectionPropertyValues("numSelected", "pluginRelaunchData", "areOnlyResponsiveSetsSelected");
  let {
    maskType
  } = useSelectedStyleOrSelectionPropertyValues("maskType");
  let L = useSelectionPropertyValue("exportSettings");
  let {
    stateGroupSelectionInfo
  } = useNonMixedSelectionPropertyValues("stateGroupSelectionInfo");
  let D = SJ();
  return jsxs(TabLoop, {
    children: [0 === Object.keys(g).length && jsx(Mw, {
      panelName: ON.DESIGN
    }), jsx(_i, {
      recordingKey: "toolbarView",
      shouldShowComponentPropertiesPanel: _$$tV2(y, stateGroupSelectionInfo),
      shouldShowInstancePanel: M0(y),
      shouldShowSlotPanel: Br(y),
      shouldShowSlidesTypePanel: y[ItemType.SLIDE_NUMBER]
    }), getFeatureFlags().react_scenegraph && jsx(useCachedSubtree, {
      isVisible: y[ItemType.JSX_ITEM],
      children: () => jsx(_$$_6, {})
    }), jsx(useCachedSubtree, {
      isVisible: !NR(y),
      children: () => jsx(_$$_5, {
        recordingKey: "instancePanel"
      }, "instance")
    }), jsx(useCachedSubtree, {
      isVisible: y[ItemType.SLIDES_THEME],
      children: () => jsx(am, {
        recordingKey: "slidesThemePanel"
      })
    }), jsx(useCachedSubtree, {
      isVisible: y[ItemType.CODE_BLOCK_ITEM],
      children: () => jsx(ap, {
        recordingKey: "slidesCodeBlockPanel"
      })
    }), jsx(useCachedSubtree, {
      isVisible: y[ItemType.SLIDE_NUMBER],
      children: () => jsx(as, {
        recordingKey: "slideNumberPanel"
      })
    }), jsx(useCachedSubtree, {
      isVisible: !0,
      children: () => jsx(zq, {
        recordingKey: "transformPanel",
        propertiesPanelState: v,
        openFileKey: c?.key || null,
        canEditConstraints: GG(y),
        onlyShowXYInputsRow: v === GR.DEFAULT_SIMPLIFIED || (areOnlyResponsiveSetsSelected ?? !1)
      }, "transform")
    }), jsx(useCachedSubtree, {
      isVisible: y[ItemType.VECTOR_TRANSFORM_UNIFIED_ITEM],
      children: () => jsx(U_, {
        recordingKey: "transformPanel",
        openFileKey: c?.key || null,
        dispatch: E,
        dropdownShown: i
      }, "vector-transform")
    }), jsx(useCachedSubtree, {
      isVisible: N,
      children: () => jsx(Vy, {
        recordingKey: "stackPanel",
        onlyShowResizingRow: v === GR.DEFAULT_SIMPLIFIED,
        onlyStacksAndGridsSelected: !!y[ItemType.STACK_ITEM]
      }, "stack")
    }), jsx(F$, {
      isVisible: y[ItemType.SCALE_ITEM]
    }), v === GR.DEFAULT_SIMPLIFIED && jsx(_$$Y4, {
      onExpand: () => T(GR.OVERRIDDEN_EXPANDED)
    }), v === GR.OVERRIDDEN_EXPANDED && jsxs(Fragment, {
      children: [jsx(useCachedSubtree, {
        isVisible: y[ItemType.LAYER_ITEM],
        children: () => jsx(X2, {
          recordingKey: "appearancePanel"
        })
      }), jsx(useCachedSubtree, {
        isVisible: y[ItemType.COMPONENT_ITEM],
        children: () => jsx(_$$c3, {
          recordingKey: "componentPanel"
        }, "component")
      }), jsx(useCachedSubtree, {
        isVisible: y[ItemType.VECTOR_ITEM],
        children: () => jsx(VR, {
          isUI3: !0,
          recordingKey: "vectorTransformPanel",
          dispatch: E,
          dropdownShown: i
        }, "vector-transform")
      }), jsx(useCachedSubtree, {
        isVisible: y[ItemType.MASK_ITEM],
        children: () => jsx(_$$B4, {
          recordingKey: "maskPanel",
          maskType
        }, "mask")
      }), jsx(useCachedSubtree, {
        isVisible: y[ItemType.TYPE_ITEM],
        children: () => jsx(gc, {}, "type")
      }), jsx(useCachedSubtree, {
        isVisible: y[ItemType.CANVAS_ITEM],
        children: () => jsx(_$$v5, {
          colorFormat: t,
          defaultColor: defaultGrayColor,
          dispatch: E,
          dropdownShown: i,
          hasExports: !!L && valueOrFallback(L, []).length > 0,
          library: n,
          modalShown: d,
          openFile: c,
          pickerShown: x,
          recordingKey: "canvasBackgroundPanel",
          sceneGraphSelection: g
        }, "canvas-background")
      }), jsx(useCachedSubtree, {
        isVisible: y[ItemType.REMOVE_GROUP_BACKGROUND_ITEM],
        children: () => jsx(_$$C, {}, "remove-group-fill-stroke")
      }), jsx(useCachedSubtree, {
        isVisible: y[ItemType.FILL_ITEM],
        children: () => jsx(B8, {
          variableScopes: I
        }, "fill")
      }), jsx(useCachedSubtree, {
        isVisible: y[ItemType.STROKE_ITEM],
        children: () => jsx($p, {
          colorFormat: t,
          defaultColor: blackColor,
          dispatch: E,
          dropdownShown: i,
          isPanelBodyCollapsedAtom: null,
          library: n,
          modalShown: d,
          openFile: c,
          pickerInStyleCreationShown: p,
          pickerShown: x,
          recordingKey: "strokePanel",
          sceneGraphSelection: g,
          stylePickerListLayout: f,
          stylePickerShown: b
        }, "stroke")
      }), jsx(useCachedSubtree, {
        isVisible: y[ItemType.EFFECTS_ITEM],
        children: () => jsx(w5, {}, "effects")
      }), jsx(useCachedSubtree, {
        isVisible: D,
        children: () => jsx(UA, {
          colorFormat: t,
          defaultColor: defaultGrayColor,
          dispatch: E,
          dropdownShown: i,
          library: n,
          openFile: c,
          pickerShown: x,
          recordingKey: "selectionPaintsPanel",
          sceneGraphSelection: g,
          stylePickerListLayout: f
        }, "selection-paints")
      }), jsx(useCachedSubtree, {
        isVisible: y[ItemType.GRIDS_ITEM],
        children: () => jsx(_$$tC, {}, "grids")
      }), jsx(useCachedSubtree, {
        isVisible: P1(y, c),
        children: () => jsx(LI, {
          currentPage: S.currentPage,
          currentSelectedProperty: S.currentSelectedProperty,
          dispatch: E,
          dropdownShown: i,
          exportSettings: L,
          isSelectionRenamable: LI.isSelectionRenamable(Object.keys(g)),
          numSelected,
          openFile: c,
          panelWidth: _$$iP,
          pickerShown: x,
          recordingKey: "exportsPanel",
          saveAsState: _,
          sceneGraphSelection: g,
          singleNodeName: k
        }, "export")
      }), jsx(useCachedSubtree, {
        isVisible: !NR(y),
        children: () => jsx(_$$Q5, {
          allSavedPlugins: e.plugins,
          dispatch: E,
          editorType: c?.editorType ? mapFileTypeToEditorType(c.editorType) : null,
          localPlugins: l,
          numSelected: numSelected ?? 0,
          openFileKey: c?.key || null,
          orgEntity: u,
          pluginRelaunchData,
          publishedPlugins: h,
          recordingKey: "pluginPanel"
        }, "plugin")
      })]
    }), jsx(useCachedSubtree, {
      isVisible: !NR(y),
      children: () => jsx(_$$Q5, {
        allSavedPlugins: e.plugins,
        dispatch: E,
        editorType: c?.editorType ? mapFileTypeToEditorType(c.editorType) : null,
        localPlugins: l,
        numSelected: numSelected ?? 0,
        openFileKey: c?.key || null,
        orgEntity: u,
        pluginRelaunchData,
        publishedPlugins: h,
        recordingKey: "pluginPanel"
      }, "plugin")
    })]
  });
}
function af(e) {
  let t = useAtomWithSubscription(_$$b4);
  let i = useCurrentOrgAdminInfo();
  let n = _$$u3();
  useEffect(() => {
    if (isEmptyObject(e.shownPanels) || Object.keys(e.shownPanels).every(t => !e.shownPanels[parseInt(t)])) {
      let e = Error("Rendering SlidesPropertiesPanel design tab with no shownPanels");
      reportError(ServiceCategories.SLIDES, e, {
        extra: {
          selectionCount: n.count,
          selectionNodeType: n.nodeType
        }
      });
    }
  }, [e.shownPanels, n.count, n.nodeType]);
  return t === GR.DEFAULT_EXPANDED ? jsx(a_, {
    ...e,
    orgEntity: i
  }) : jsx(ay, {
    ...e,
    orgEntity: i
  });
}
let a0 = memo(function ({
  recordingKey: e
}) {
  let t = useSelector(selectSceneGraphSelectionKeys);
  let i = useSelector(selectInstanceKeys);
  let n = useSelector(Z3);
  let l = normalizeValue(useSelectionPropertyValue("resettableInstanceOverrides"));
  let {
    onlyInstances,
    onlyInstanceSublayers
  } = _$$p3(i);
  let d = iG()(Mx, TQ);
  return onlyInstances || onlyInstanceSublayers ? jsxs(Zk, {
    className: d,
    children: [onlyInstances && jsx("div", {
      className: iG()(Og, _$$aE),
      children: jsx(_$$e4, {
        containerWidth: O2.RESIZABLE_SIDEBAR,
        propDimension: OE.ASSIGNMENT,
        guids: t,
        recordingKey: e,
        enableHidingOverflowRowsInUI3: !0,
        hideIcon: !0,
        entrypointForInstanceSwapPicker: _$$S2.InstancePickerEntrypoint.INSTANCE_SWAP_PROP_INSTANCE_PANEL
      })
    }), n.map(t => jsx("div", {
      className: iG()(Wf, _$$aE),
      children: jsx(ME, {
        containerWidth: O2.RESIZABLE_SIDEBAR,
        entrypointForInstanceSwapPicker: _$$S2.InstancePickerEntrypoint.INSTANCE_SWAP_PROP_INSTANCE_PANEL_BUBBLED,
        forBubbledProps: !0,
        guids: t,
        hideErrors: !0,
        hideIcon: !0,
        highlightNodesOnHover: !0,
        instanceAndSublayerGUIDs: t,
        instanceNameDisplayOverride: NA.NAME_ONLY,
        propDimension: OE.ASSIGNMENT,
        recordingKey: e,
        resettableInstanceOverrides: l && l.bubbledInstanceOverrides ? l.bubbledInstanceOverrides[t[0]] : void 0,
        shouldHideInstanceTitleButtons: !0
      })
    }, `bubbledInstance.${t[0]}`))]
  }) : jsx(Zk, {
    className: d
  });
});
let oI = Gf;
function oN({
  closePicker: e,
  recordingKey: t
}) {
  let i = useEffectiveThemeId();
  let n = useSelector(e => e.stylePreviewShown);
  let o = useDispatch<AppDispatch>();
  let d = useSelector(e => e.mirror.selectedStyleProperties);
  let u = useSelector(e => e.mirror.sceneGraphSelection);
  let p = useRef(Object.keys(u).length > 0);
  let [x, h] = useState(!p.current && void 0);
  let {
    styleType,
    inheritStyleKeyField,
    styleNameInputPrefix
  } = n;
  let {
    styleRef,
    createStyle
  } = _$$u6({
    inheritStyleKeyField,
    isCreatingFromSelection: p.current,
    trackingOptions: {
      styleType
    },
    shouldUseEyedropperStyleCreationFlow: !1
  });
  let j = useHandleFocusEvent(generateRecordingKey("createStyleModal"), "submit", () => {
    let t = createStyle();
    o(hidePickerThunk());
    o(hideStylePicker());
    o(hideStylePreview());
    AppStateTsApi?.slideThemeLibBindings().addStyleToLocalTheme(t ?? "", i);
    e();
  });
  if (!n.isShown || !n.isCreating) return null;
  let b = new Point(n.rowLeft - oI, n.rowTop);
  return jsx(zK.Provider, {
    value: zM.CREATE_STYLE,
    children: jsx(bL, {
      width: oI,
      defaultPosition: b,
      onClose: () => {
        o(hideStylePreview());
      },
      recordingKey: t,
      draggable: "header",
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: getI18nString("design_systems.create_style.text")
          })
        }), jsxs(DialogBody, {
          padding: 0,
          children: [jsx(_f, {
            type: d.styleType,
            recordingKey: t,
            styleNameInputPrefix,
            isInspectPanel: !1,
            selectedStyleProperties: d,
            showProperties: x,
            onEnterPressed: j
          }), !styleRef && jsx("div", {
            className: cssBuilderInstance.pl16.pr16.pt16.$,
            children: renderI18nText("design_systems.create_style.an_error_occurred_while_creating_the_style")
          }), jsx(AutoLayout, {
            horizontalAlignItems: p.current ? void 0 : "end",
            verticalAlignItems: "center",
            spacing: p.current ? "auto" : void 0,
            padding: 16,
            children: p.current && jsxs(Fragment, {
              children: [jsx(Button, {
                variant: "secondary",
                onClick: () => h(!x),
                recordingKey: generateRecordingKey(t, "showHideOptionsButton"),
                children: x ? renderI18nText("design_systems.create_style.hide_options") : renderI18nText("design_systems.create_style.show_more_options")
              }), jsx(Button, {
                onClick: j,
                disabled: !styleRef,
                recordingKey: generateRecordingKey(t, "createStyleButton"),
                children: renderI18nText("design_systems.create_style.create_style")
              })]
            })
          })]
        })]
      })
    })
  });
}
let oM = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M4 15.727V7.924l.059-.065c.11-.117.285-.28.53-.443C5.078 7.091 5.858 6.75 7 6.75s1.923.341 2.41.666a3 3 0 0 1 .59.508v7.803l-.07-.04C9.296 15.336 8.338 15 7 15s-2.296.335-2.93.688zm7 0 .07-.04a5.5 5.5 0 0 1 1.93-.62v1.011a4.4 4.4 0 0 0-1.445.484c-.246.137-.42.272-.529.368a2 2 0 0 0-.136.133l-.002.003a.5.5 0 0 1-.776 0l-.002-.003-.022-.024a2 2 0 0 0-.114-.11 3 3 0 0 0-.53-.367C8.955 16.29 8.163 16 7 16s-1.954.29-2.445.562c-.246.137-.42.272-.529.368a2 2 0 0 0-.136.133l-.002.003A.5.5 0 0 1 3 16.75v-9a.5.5 0 0 1 .084-.277l.416.277-.416-.278.001-.002.002-.002.005-.007.014-.02.049-.064c.04-.052.1-.123.177-.205.155-.164.386-.377.703-.588C4.673 6.159 5.643 5.75 7 5.75s2.327.409 2.965.834a4 4 0 0 1 .535.422c.14-.13.318-.277.535-.422.638-.425 1.608-.834 2.965-.834s2.327.409 2.965.834c.317.211.548.424.703.588a3 3 0 0 1 .226.268l.014.02.005.008.002.003v.001l-.415.278.416-.277A.5.5 0 0 1 18 7.75V10h-1V7.924l-.059-.065a3 3 0 0 0-.53-.443c-.488-.325-1.268-.666-2.411-.666s-1.923.341-2.41.666a3 3 0 0 0-.59.508zM14.5 12a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V13h2v5h-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H18v-5h2v.5a.5.5 0 1 0 1 0v-1a.5.5 0 0 0-.5-.5z",
      clipRule: "evenodd"
    })
  });
});
function oU({
  parentRef: e,
  inheritTextStyleKey: t,
  styleIdForText: i,
  closePicker: n,
  recordingKey: l
}) {
  let a = "inheritTextStyleKey";
  let d = useStylePickerShown(a);
  let u = useDispatch<AppDispatch>();
  return jsxs(Fragment, {
    children: [jsx(MM, {
      inheritStyleKey: t,
      inheritStyleID: i,
      styleType: StyleType.TEXT
    }), d && jsx(UP, {
      customPickerTitle: getI18nString("slides.properties_panel.library_text_styles"),
      hideBrowseLibraries: !getFeatureFlags().piper_style_libraries,
      hideCreateStyleButton: !0,
      hideLocalStyles: !0,
      inheritStyleID: i,
      inheritStyleKey: t,
      minBottomMargin: 4,
      onApplyStyle: (e, t) => {
        u(applySharedStyle({
          style: e,
          inheritStyleKeyField: a,
          fromSearch: t
        }));
        n();
      },
      onToggleListLayout: noop,
      picker: d,
      recordingKey: "subscribedStylePicker",
      stylePickerListLayout: !0,
      styleType: StyleType.TEXT
    }), jsx(AutoInteractableWrapper, {
      name: "slides_toggle_library_text_style_picker",
      children: jsx(DialogTriggerButton, {
        "aria-expanded": !!d,
        onClick: () => {
          if (d) u(hideStylePicker());else if (e.current) {
            let t = e.current.getBoundingClientRect();
            u(hideStylePreview());
            u(showStylePicker({
              id: getStylePickerId("inheritTextStyleKey"),
              initialX: t.left - t.width - 4,
              initialY: t.top,
              modal: !0
            }));
          }
        },
        "aria-label": getI18nString("fullscreen.properties_panel.tooltip_applyStyles"),
        recordingKey: generateRecordingKey(l, "showStylesButton"),
        children: jsx(oM, {})
      })
    })]
  });
}
let oV = "slides_text_style_dropdown_contents--styleOption--29CYO text--fontNeg12--2PWcg text--_fontBase--QdLsd text--_negText--j9g-L";
let oK = "slides_text_style_dropdown_contents--optionHeader---tOKJ";
function o$({
  mainStyle: e,
  inheritStyleID: t,
  inheritStyleKey: i,
  closePicker: n,
  recordingKey: o
}) {
  let d = useDispatch<AppDispatch>();
  let u = useEffectiveThemeId();
  let p = _$$Xo(u);
  let x = useMemo(() => e?.node_id && p.some(t => t.node_id === e.node_id), [e?.node_id, p]);
  let h = useSelectionPropertyValue("fontFamily");
  let m = useSelectionPropertyValue("fontSize");
  let _ = kO(u);
  let g = isInvalidValue(h) || isInvalidValue(m);
  let y = !_ && !g;
  let f = createRef();
  let j = useSelector(e => e.stylePreviewShown);
  let b = j.isShown && j.isCreating;
  let E = j.isShown && !j.isCreating;
  let v = useContext(_$$lk);
  let [T, S] = useState([]);
  let I = useCallback((e, t, i) => {
    for (let n of e) _$$l3.user("reorder-slide-theme-style", () => {
      Fullscreen?.insertStyleBetween(n.node_id, t?.node_id || "", i?.node_id || "");
    });
  }, []);
  return jsx("div", {
    className: "slides_text_style_dropdown_contents--dropdownContainer--pwY1T",
    ref: f,
    children: jsxs(_$$k7, {
      name: "slides_text_style_picker",
      children: [jsxs("div", {
        className: "slides_text_style_dropdown_contents--dropdownHeader--m278H",
        children: [jsx("span", {
          className: cssBuilderInstance.flexGrow1.$,
          children: renderI18nText("slides.properties_panel.text_styles")
        }), jsx(oU, {
          parentRef: f,
          styleIdForText: t,
          inheritTextStyleKey: i,
          closePicker: n,
          recordingKey: o
        }), jsx(DialogTriggerButton, {
          "aria-expanded": b,
          "aria-label": getI18nString("slides.properties_panel.text_style.create_new_style"),
          onClick: () => {
            if (b) d(hideStylePreview());else if (f.current) {
              _$$l3.user("slides-create-style", () => {
                Fullscreen?.applyStyleToSelection("inheritTextStyleKey", defaultSessionLocalIDString, !0);
                Fullscreen?.selectStyle(_$$n5.INVALID, _$$IA.INVALID);
              });
              d(hideStylePicker());
              let e = f.current.getBoundingClientRect();
              v({
                styleType: StyleType.TEXT,
                inheritStyleKeyField: "inheritTextStyleKey",
                rowLeft: e.left,
                rowTop: e.top
              });
            }
          },
          disabled: !y,
          recordingKey: generateRecordingKey(o, "addStyleButton"),
          htmlAttributes: {
            "data-tooltip": getI18nString("slides.properties_panel.text_style.create_new_style"),
            "data-tooltip-type": KindEnum.TEXT
          },
          children: jsx(_$$e5, {})
        })]
      }), jsxs("div", {
        className: cssBuilderInstance.flex.flexColumn.$,
        style: {
          padding: "8px"
        },
        children: [p.length > 0 ? jsx(_$$q2, {
          listItems: p,
          renderListItem: (i, l, s, a, d, c, u) => jsx(oz, {
            closePicker: n,
            isDragging: s,
            isReorderingItems: a,
            isSelected: isValidValue(t) && e?.node_id === i.node_id,
            onMouseDown: d,
            onMouseMove: c,
            onMouseUp: u,
            recordingKey: o,
            textStyle: i
          }, i.node_id),
          selectedIndices: T,
          updateSelection: S,
          onDragEnd: () => S([]),
          onInsertItemsBetweenValues: I,
          isDragDisabled: E
        }) : jsx(oB, {
          isDeletedTheme: _
        }), !x && jsx(oG, {
          mainStyle: e,
          inheritStyleID: t,
          closePicker: n
        })]
      }), !e && jsx("div", {
        className: cssBuilderInstance.p8.bt1.bSolid.colorBorder.$,
        children: jsx(oH, {
          closePicker: n,
          recordingKey: generateRecordingKey(o, "custom")
        })
      })]
    })
  });
}
function oB({
  isDeletedTheme: e
}) {
  return jsx("span", {
    className: cssBuilderInstance.px8.colorTextSecondary.$,
    children: e ? renderI18nText("slides.properties_panel.text_style.deleted_theme") : renderI18nText("slides.properties_panel.text_style.empty_styles", {
      title: jsx("strong", {
        children: renderI18nText("slides.properties_panel.text_style.title_style")
      }),
      body: jsx("strong", {
        children: renderI18nText("slides.properties_panel.text_style.body_style")
      })
    })
  });
}
function oz({
  textStyle: e,
  isSelected: t,
  isDragging: i,
  isReorderingItems: n,
  closePicker: o,
  onMouseDown: d,
  onMouseMove: u,
  onMouseUp: x,
  recordingKey: h
}) {
  let m = useDispatch<AppDispatch>();
  let [_, g] = useState(!1);
  let y = useDeepEqualSceneValue((e, t) => e.get(t || "")?.fontSize, e.node_id);
  let f = useDeepEqualSceneValue((e, t) => e.get(t || "")?.hasMissingFont || !1, e.node_id);
  let j = createRef();
  let b = bf(e);
  let E = !n && (_ || b);
  return jsxs(RecordableDiv, {
    forwardedRef: j,
    className: iG()(oV, {
      [cssBuilderInstance.colorBgHover.$]: i || _ && !n
    }),
    onMouseDown: e => {
      e.target === e.currentTarget && d(e);
    },
    onMouseUp: e => {
      e.target === e.currentTarget && x(e);
    },
    onClick: () => {
      f ? Fullscreen?.findMissingFontsAndShowPopover() : m(applySharedStyle({
        style: e,
        inheritStyleKeyField: "inheritTextStyleKey"
      }));
      o();
    },
    onMouseMove: u,
    onMouseEnter: () => g(!0),
    onMouseLeave: () => g(!1),
    recordingKey: generateRecordingKey(h, e.name),
    children: [jsx("span", {
      className: iG()(cssBuilderInstance.eventsNone.$, t ? cssBuilderInstance.visible.$ : cssBuilderInstance.invisible.$),
      children: jsx(_$$l2, {})
    }), jsxs("div", {
      className: cssBuilderInstance.flexGrow1.ellipsis.eventsNone.inlineFlex.truncate.$,
      children: [jsx("span", {
        className: iG()(cssBuilderInstance.colorText.$),
        children: e.name
      }), y && jsx("span", {
        className: cssBuilderInstance.colorTextSecondary.pl2.$,
        children: renderI18nText("slides.properties_panel.text.style_description_font_size", {
          fontSize: roundTo2Decimals(y)
        })
      })]
    }), f && jsx("span", {
      className: cssBuilderInstance.w24.$,
      children: jsx(_$$z2, {})
    }), jsx("span", {
      className: E ? cssBuilderInstance.visible.$ : cssBuilderInstance.invisible.$,
      children: jsx(DialogTriggerButton, {
        "aria-label": getI18nString("slides.properties_panel.text_style.edit_text_style"),
        onClick: t => {
          if (b) m(hideStylePreview());else if (j.current) {
            Fullscreen?.selectStyleByGuid(e.node_id);
            let t = j.current.getBoundingClientRect();
            m(showStylePreviewThunk({
              style: e,
              rowTop: t.y,
              rowLeft: t.x - 8
            }));
          }
          t?.stopPropagation();
        },
        recordingKey: generateRecordingKey(h, e.name, "editButton"),
        "aria-expanded": b,
        children: jsx(_$$A9, {})
      })
    })]
  });
}
function oG({
  mainStyle: e,
  inheritStyleID: t,
  closePicker: i
}) {
  let n = AH(normalizeValue(e?.key), normalizeValue(t));
  let s = useAtomWithSubscription(TN);
  let o = useMemo(() => {
    if (e?.node_id) for (let t of s) {
      let i = atomStoreManager.get(_$$i(t)).data;
      if (i && i.styleGUIDs.includes(e.node_id) && AppStateTsApi) return AppStateTsApi.slideThemeLibBindings().getThemeName(t);
    }
    return null;
  }, [e?.node_id, s]);
  let d = "";
  let c = "";
  return (n && "loaded" === n.status ? (d = n.data.fileName, c = n.data.name) : o && (d = o, c = e?.name || ""), d && c) ? jsxs(Fragment, {
    children: [jsx("div", {
      className: oK,
      children: d
    }), jsxs(ButtonPrimitive, {
      className: oV,
      onClick: i,
      children: [jsx(_$$l2, {}), c]
    })]
  }) : null;
}
function oH({
  closePicker: e,
  recordingKey: t
}) {
  let i = useSelectionPropertyValue("fontFamily");
  let n = useSelectionPropertyValue("fontSize");
  return jsxs("div", {
    className: cssBuilderInstance.pb4.$,
    children: [jsx("div", {
      className: oK,
      children: renderI18nText("slides.properties_panel.text_style.custom")
    }), jsxs(RecordableDiv, {
      className: oV,
      onClick: e,
      recordingKey: generateRecordingKey(t, "custom"),
      children: [jsx("div", {
        className: cssBuilderInstance.pr8.$,
        children: jsx(In, {
          icon: "checkmark-on-16"
        })
      }), isValidValue(i) && isValidValue(n) ? jsxs(Fragment, {
        children: [jsx("div", {
          className: cssBuilderInstance.colorText.$,
          children: i
        }), jsx("div", {
          className: cssBuilderInstance.colorTextSecondary.$,
          style: {
            paddingLeft: "3px"
          },
          children: n && renderI18nText("slides.properties_panel.text.style_description_font_size", {
            fontSize: roundTo2Decimals(n)
          })
        })]
      }) : renderI18nText("slides.properties_panel.text_style.mixed")]
    })]
  });
}
function oq({
  mainStyle: e,
  inheritTextStyleKey: t,
  styleIdForText: i,
  previouslyAppliedStyle: n,
  recordingKey: a
}) {
  let o = useDispatch<AppDispatch>();
  let d = createRef();
  let [c, u] = useState(!1);
  let p = _$$it();
  let x = useCallback(() => {
    o(hideStylePicker());
    u(!1);
  }, [o]);
  let h = useCallback(() => {
    c ? x() : u(!0);
  }, [c, x]);
  let m = useCallback(e => {
    d.current && e.target instanceof Node && d.current.contains(e.target) || x();
  }, [d, x]);
  useEffect(() => (window.addEventListener("mousedown", m), () => window.removeEventListener("mousedown", m)), [m]);
  return jsxs(Fragment, {
    children: [jsx(Ad, {
      ref: d,
      input: jsx(oW, {
        mainStyle: e,
        inheritStyleID: i,
        inheritStyleKey: t,
        previouslyAppliedStyle: n,
        textPreviewColor: p,
        isOpen: c,
        onClick: h,
        closePicker: x,
        recordingKey: a
      }),
      label: null,
      appendedClassName: "slides_text_style_row--textStyleRow--FE95p"
    }), jsx(oN, {
      closePicker: x,
      recordingKey: generateRecordingKey(a, "createTextStyleModal")
    })]
  });
}
function oW({
  mainStyle: e,
  inheritStyleID: t,
  inheritStyleKey: i,
  previouslyAppliedStyle: n,
  textPreviewColor: l,
  isOpen: s,
  onClick: a,
  closePicker: o,
  recordingKey: d
}) {
  let u;
  let p = oJ(e);
  let x = oJ(n);
  u = isInvalidValue(t) ? renderI18nText("slides.properties_panel.text_style.mixed") : e && !e.is_soft_deleted ? p ? jsx(oQ, {
    mainStyle: e,
    textPreviewColor: l
  }) : e.name : x ? jsxs(Fragment, {
    children: [jsx(oX, {
      previouslyAppliedStyle: n,
      textPreviewColor: l
    }), jsx("span", {
      className: cssBuilderInstance.pl4.colorTextSecondary.$,
      children: renderI18nText("slides.properties_panel.text_style.edited")
    })]
  }) : renderI18nText("design_systems.styles.custom");
  return jsxs("div", {
    children: [jsxs(ButtonPrimitive, {
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("slides.properties_panel.text_style.tooltip")
      },
      recordingKey: d,
      className: iG()(_$$t3, cssBuilderInstance.relative.wFull.h40.py4.pl8.pr4.$, cssBuilderInstance.bRadius5.b1.bSolid.colorBorder.$, cssBuilderInstance.flex.itemsCenter.$),
      onClick: a,
      children: [jsx("div", {
        className: iG()(cssBuilderInstance.flexGrow1.$, cssBuilderInstance.fontMedium.colorText.alignLeft.ellipsis.$, cssBuilderInstance.flex.itemsCenter.overflowHidden.$),
        children: u
      }), jsx(_$$r5, {}), !e && x && jsx(o0, {
        themeStyleToUpdate: n,
        recordingKey: d
      })]
    }), s && jsx(o$, {
      mainStyle: e,
      inheritStyleID: t,
      inheritStyleKey: i,
      closePicker: o,
      recordingKey: "slidesTextStylePicker"
    })]
  });
}
function oJ(e) {
  let t = useEffectiveThemeId();
  let i = _$$Xo(t);
  return !!e && i.some(t => t.node_id === e.node_id);
}
function oQ({
  mainStyle: e,
  textPreviewColor: t
}) {
  let i = useEffectiveThemeId();
  let n = e.node_id;
  let s = useDeepEqualSceneValue((e, t) => e.get(t)?.name ?? "", n);
  let [a, o] = useAtomValueAndSetter(q0);
  let d = a[n];
  let c = useMemoStable(() => ({
    color: t,
    minHeight: KL.MIN_THEME_TEXT_STYLE_PREVIEW_HEIGHT,
    maxHeight: KL.MAX_THEME_TEXT_STYLE_PREVIEW_HEIGHT
  }), [t]);
  let u = useCallback(e => {
    o(t => {
      let i;
      let r = t[n];
      r && URL.revokeObjectURL(r.previewUrl);
      e && (i = {
        previewUrl: URL.createObjectURL(new Blob([e.preview])),
        previewHeight: e.previewHeight
      });
      return {
        ...t,
        [n]: i
      };
    });
  }, [n, o]);
  _$$Z7({
    themeId: i,
    styleId: n,
    options: c,
    onPreviewGenerated: u
  });
  return jsx(oZ, {
    thumbnailUrl: d?.previewUrl ?? "",
    styleName: s,
    previewHeight: d?.previewHeight ?? 0
  });
}
function oX({
  previouslyAppliedStyle: e,
  textPreviewColor: t
}) {
  let i = useEffectiveThemeId();
  let n = e.node_id;
  let s = e.name;
  let {
    fontFamily,
    fontStyle,
    fontSize,
    lineHeight
  } = selectWithShallowEqual(e => {
    let t = e.mirror.selectionProperties;
    return {
      fontFamily: isValidValue(t.fontFamily) && t.fontFamily ? t.fontFamily : "",
      fontStyle: isValidValue(t.fontStyle) && t.fontStyle ? t.fontStyle : "",
      fontSize: isValidValue(t.fontSize) && t.fontSize ? t.fontSize : 0,
      lineHeight: t.lineHeightPx ?? 0
    };
  });
  let u = useMemoStable(() => ({
    name: s,
    fontFamily,
    fontStyle,
    fontSize,
    lineHeight
  }), [s, fontFamily, fontStyle, fontSize, lineHeight]);
  let p = useMemoStable(() => ({
    color: t,
    minHeight: KL.MIN_THEME_TEXT_STYLE_PREVIEW_HEIGHT,
    maxHeight: KL.MAX_THEME_TEXT_STYLE_PREVIEW_HEIGHT
  }), [t]);
  let [x, h] = useState("");
  let m = useLatestRef(x);
  let [_, g] = useState(0);
  let y = useCallback(e => {
    let t = e ? URL.createObjectURL(new Blob([e.preview])) : "";
    let i = e?.previewHeight ?? 0;
    h(t);
    g(i);
  }, []);
  useEffect(() => {
    m && URL.revokeObjectURL(m);
  }, [m]);
  _$$oS({
    themeId: i,
    styleId: n,
    styleMetadata: u,
    options: p,
    onPreviewGenerated: y
  });
  return jsx(oZ, {
    thumbnailUrl: x,
    styleName: s,
    previewHeight: _
  });
}
function oZ({
  thumbnailUrl: e,
  styleName: t,
  previewHeight: i
}) {
  return e ? jsx("img", {
    className: "slides_text_style_row--previewImg--vXJc9",
    style: {
      height: `${i}px`
    },
    src: e,
    alt: "Text style preview"
  }) : jsx("div", {
    className: cssBuilderInstance.fontMedium.colorText.$,
    children: t
  });
}
function o0({
  themeStyleToUpdate: e,
  recordingKey: t
}) {
  let i = useDispatch<AppDispatch>();
  let {
    fontFamily,
    fontStyle,
    fontSize,
    lineHeight,
    letterSpacing
  } = selectWithShallowEqual(e => {
    let t = e.mirror.selectionProperties;
    return {
      fontFamily: t.fontFamily,
      fontStyle: t.fontStyle,
      fontSize: t.fontSize,
      lineHeight: t.lineHeight,
      letterSpacing: t.letterSpacing
    };
  });
  let x = _$$B5();
  let h = async t => {
    t.stopPropagation();
    e.isLocal && fontFamily && fontStyle && fontSize && lineHeight && letterSpacing && (i(applySharedStyle({
      style: e,
      inheritStyleKeyField: "inheritTextStyleKey"
    })), Fullscreen?.selectStyleByGuid(e.node_id), await waitForAnimationFrame(), fullscreenValue.updateSelectionProperties({
      fontFamily
    }, {
      shouldCommit: yesNoTrackingEnum.NO,
      editScopeType: SourceType.USER
    }), await waitForAnimationFrame(), fullscreenValue.updateSelectionProperties({
      fontStyle,
      fontSize,
      lineHeight: TK(x, lineHeight),
      letterSpacing
    }, {
      shouldCommit: yesNoTrackingEnum.NO,
      editScopeType: SourceType.USER
    }), Fullscreen?.selectStyle(_$$n5.INVALID, _$$IA.INVALID), fullscreenValue.triggerAction("commit"));
  };
  return jsx(Button, {
    variant: "primary",
    onClick: h,
    recordingKey: generateRecordingKey(t, "saveButton"),
    children: renderI18nText("slides.properties_panel.text_style.save_button")
  });
}
function o1({
  recordingKey: e
}) {
  let {
    inheritTextStyleKey,
    styleIdForText
  } = selectWithShallowEqual(e => ({
    inheritTextStyleKey: e.mirror.selectionProperties.inheritTextStyleKey || null,
    styleIdForText: e.mirror.selectionProperties.styleIdForText || null
  }));
  let n = useStyleInfo(inheritTextStyleKey, styleIdForText, "TEXT");
  let a = useSelector(e => e.fonts);
  let o = useMemo(() => getFontStyleMapping(a), [a]);
  let d = useDropdownState();
  let [u, p] = useState(null === n);
  useEffect(() => {
    d || p(!n?.node_id);
  }, [n?.node_id]);
  let [x, h] = useState(null);
  let m = useCallback(() => {
    n && h(n);
  }, [n]);
  let _ = useSelector(e => e.mirror.sceneGraphSelection);
  useEffect(() => {
    h(null);
  }, [_]);
  let g = useMemo(() => Object.keys(_).every(e => getSingletonSceneGraph().get(e)?.isSlideNumber), [_]);
  return jsx(_$$k7, {
    name: "slides_type_panel",
    children: jsxs(_$$tR, {
      withTopPadding: g,
      hideBorderBottom: !0,
      children: [jsx(oq, {
        mainStyle: n,
        inheritTextStyleKey,
        styleIdForText,
        previouslyAppliedStyle: x,
        recordingKey: generateRecordingKey(e, "textStyle")
      }), u && jsx(o5, {
        fonts: a,
        versionsForStyles: o,
        recordingKey: e,
        savePreviouslyAppliedStyleOnFontChange: m
      }), jsx(o2, {
        versionsForStyles: o,
        recordingKey: e
      }), jsx(o8, {
        recordingKey: e
      }), !u && jsx(Ad, {
        input: jsx(ButtonWide, {
          variant: "secondary",
          onClick: () => p(!0),
          recordingKey: generateRecordingKey(e, "showDetails"),
          children: renderI18nText("slides.properties_panel.text.show_details")
        }),
        label: null
      })]
    })
  });
}
function o5({
  fonts: e,
  versionsForStyles: t,
  savePreviouslyAppliedStyleOnFontChange: i,
  recordingKey: n
}) {
  let a = useDispatch<AppDispatch>();
  let o = valueOrFallback(useSelectionPropertyValue("missingFont"), !1);
  let d = !!fullscreenValue?.isFontListLoaded();
  let u = o || !d;
  let p = useSelectionPropertyValue("fontFamily");
  let x = useSelectionPropertyValue("fontStyle");
  let h = useSelectionPropertyValue("fontSize");
  let m = useSelectionPropertyValue("lineHeight");
  let _ = useSelectionPropertyValue("letterSpacing");
  let {
    bigNudgeAmount,
    smallNudgeAmount
  } = getNudgeAmounts();
  let f = useSelector(e => e.mirror.selectionProperties.fontVariations);
  let j = p ? LM({
    fontFamily: p,
    fontStyle: x,
    fonts: e,
    versionsForStyles: t
  }) : void 0;
  let b = _$$B5();
  let {
    consumedVariable,
    clearVariableConsumption
  } = u3(["FONT_FAMILY"]);
  let T = consumedVariable ? extractVariableAliasOrFontStyle(consumedVariable) : null;
  let S = getVariableById(T ?? void 0);
  let I = p ? jsx(_$$ay, {
    boundVariable: S ?? void 0,
    disabled: u,
    editingStyleGuid: void 0,
    fontFamily: p,
    fonts: e,
    hideTypographyVariableOptions: !0,
    id: "slides-type-panel-font-family",
    onChange: (n, r, l) => {
      i();
      PK({
        fontFamily: n,
        previewFontFamily: r,
        lineHeightInContext: b,
        fonts: e,
        fontVariations: f,
        versionsForStyles: t,
        shouldCommit: l
      });
    },
    onDetachVariableClick: clearVariableConsumption,
    recordingKey: generateRecordingKey(n, "fontFamily"),
    showPlaceholder: !1,
    versionsForStyles: t
  }) : null;
  let N = p && x ? jsx(AutoInteractableWrapper, {
    name: "slides_font_style",
    children: jsx(zz, {
      dropdownAlignment: "right",
      editingStyleGuid: void 0,
      fontFamily: p,
      fontStyle: x,
      fontVariationAxes: j?.variationAxes,
      fontVariations: f,
      fonts: e,
      hideTypographyVariableOptions: !0,
      hideVariableFontOptions: !0,
      id: "slides-type-panel-font-style",
      onChange: (e, t, n) => {
        i();
        zD({
          fontStyle: e,
          shouldCommit: t,
          fontVariations: n,
          lineHeightInContext: b,
          showVariableFontSettings: noop,
          showTypeVariablePicker: noop
        });
      },
      recordingKey: generateRecordingKey(n, "fontStyle"),
      showMissingIcon: !1,
      versionsForStyles: t
    })
  }) : null;
  let k = h ? jsx(AutoInteractableWrapper, {
    name: "slides_font_size",
    children: jsx(_$$Z6, {
      id: "slides-type-panel-font-size",
      fontSize: h,
      onChange: i,
      disabled: u,
      editingStyleGuid: void 0,
      hideVariableOptions: !0,
      recordingKey: generateRecordingKey(n, "fontSize")
    })
  }) : null;
  let C = createRef();
  let w = m ? jsx(_$$a3, {
    lineHeight: m,
    lineHeightInContext: b,
    onChange: i,
    disabled: u,
    rowElementRef: C,
    editingStyleGuid: void 0,
    disableVariables: !0,
    recordingKey: generateRecordingKey(n, "lineHeight")
  }) : null;
  let O = _ ? jsx(_$$I, {
    bigNudgeAmount,
    disableVariables: !0,
    disabled: u,
    dispatch: a,
    editingStyleGuid: void 0,
    letterSpacing: _,
    onChange: i,
    recordingKey: generateRecordingKey(n, "letterSpacing"),
    rowElementRef: C,
    smallNudgeAmount
  }) : null;
  return jsxs(Fragment, {
    children: [I, jsx(_$$g4, {
      leftLabel: renderI18nText("slides.properties_panel.text.weight_label"),
      leftInput: N,
      rightLabel: renderI18nText("slides.properties_panel.text.font_size_label"),
      rightInput: k
    }), jsx(_$$g4, {
      ref: C,
      leftLabel: null,
      leftInput: w,
      rightLabel: null,
      rightInput: O
    })]
  });
}
function o4(e) {
  return e.toLowerCase().includes("italic");
}
function o2({
  versionsForStyles: e,
  recordingKey: t
}) {
  let {
    isBold,
    isItalic,
    isUnderline,
    isUnorderedList,
    fontFamily
  } = selectWithShallowEqual(e => ({
    isBold: _$$N4(e.mirror.selectionProperties.fontStyle?.toString() || ""),
    isItalic: o4(e.mirror.selectionProperties.fontStyle?.toString() || ""),
    isUnderline: "UNDERLINE" === e.mirror.selectionProperties.textDecoration,
    isUnorderedList: "UNORDERED_LIST" === e.mirror.selectionProperties.textLineType,
    fontFamily: e.mirror.selectionProperties.fontFamily
  }));
  let o = fontFamily && isValidValue(fontFamily) && e[fontFamily] ? Object.keys(e[fontFamily]) : [];
  let d = o.every(e => !_$$N4(e));
  let u = o.every(e => !o4(e));
  return jsx(Ad, {
    label: null,
    appendedClassName: cssBuilderInstance.pt2.$,
    input: jsxs("div", {
      className: cssBuilderInstance.flex.wFull.gap4.$,
      children: [jsx(o6, {
        selected: isBold,
        disabled: d,
        onClick: () => {
          fullscreenValue.triggerActionInUserEditScope("toggle-bold");
        },
        icon: jsx(_$$j3, {
          color: isBold ? "var(--color-border-selected)" : void 0
        }),
        tooltip: getI18nString("slides.properties_panel.text.bold"),
        trackingName: "slides_bold_button",
        recordingKey: generateRecordingKey(t, "bold")
      }), jsx(o6, {
        selected: isItalic,
        disabled: u,
        onClick: () => {
          fullscreenValue.triggerActionInUserEditScope("text-toggle-italic");
        },
        icon: jsx(_$$s7, {
          color: isItalic ? "var(--color-border-selected)" : void 0
        }),
        tooltip: getI18nString("slides.properties_panel.text.italic"),
        trackingName: "slides_italic_button",
        recordingKey: generateRecordingKey(t, "italic")
      }), jsx(o6, {
        selected: isUnderline,
        disabled: !1,
        onClick: () => {
          fullscreenValue.triggerActionInUserEditScope("text-toggle-underline");
        },
        icon: jsx(_$$W5, {
          color: isUnderline ? "var(--color-border-selected)" : void 0
        }),
        tooltip: getI18nString("slides.properties_panel.text.underline"),
        trackingName: "slides_underline_button",
        recordingKey: generateRecordingKey(t, "underline")
      }), jsx(o6, {
        selected: isUnorderedList,
        disabled: !1,
        onClick: () => {
          fullscreenValue.triggerActionInUserEditScope("text-toggle-unordered-list");
        },
        icon: jsx(_$$Z5, {
          color: isUnorderedList ? "var(--color-border-selected)" : void 0
        }),
        tooltip: getI18nString("slides.properties_panel.text.unordered_list"),
        trackingName: "slides_unordered_list_button",
        recordingKey: generateRecordingKey(t, "unorderedList")
      })]
    })
  });
}
function o6({
  selected: e,
  disabled: t,
  onClick: i,
  icon: n,
  tooltip: l,
  trackingName: s,
  recordingKey: a
}) {
  return jsx(AutoInteractableWrapper, {
    name: s,
    children: jsx(ButtonPrimitive, {
      className: iG()("slides_type_panel--formatButton--71QdB", _$$t3, {
        "slides_type_panel--selected--dHazD": e,
        "slides_type_panel--disabled--Vd8xM": t
      }),
      onClick: i,
      "aria-label": l,
      recordingKey: a,
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": l
      },
      disabled: t,
      "aria-pressed": e,
      children: n
    })
  });
}
function o8({
  recordingKey: e
}) {
  let t = useSelectionPropertyValue("textAlignVertical") || MIXED_MARKER;
  return jsx(_$$g4, {
    leftLabel: null,
    leftInput: jsx(AutoInteractableWrapper, {
      name: "slides_text_align_horizontal",
      children: jsx(jw, {
        recordingKey: generateRecordingKey(e, "textAlignHorizontal")
      })
    }),
    rightLabel: null,
    rightInput: jsx(AutoInteractableWrapper, {
      name: "slides_text_align_vertical",
      children: jsx(Ln, {
        textAlignVertical: t,
        recordingKey: generateRecordingKey(e, "textAlignVertical")
      })
    })
  });
}
function o3({
  nodeType: e
}) {
  let t = GV();
  let i = "INSTANCE" === e;
  let n = getObservableValue(AppStateTsApi?.interopToolMode(), SelfDesignType.SELF);
  let l = useSelector(_$$i$);
  let o = "FRAME" === e && l === StateHierarchy.STATE_GROUP;
  let d = ("SYMBOL" === e || o) && n === SelfDesignType.SELF;
  let c = i || d;
  return jsxs(Fragment, {
    children: [c && jsxs(_$$u4, {
      children: [i && jsx(_$$W4, {
        recordingKey: If
      }), d && jsx(_$$aG, {
        isComponentSet: o
      })]
    }), jsx(useCachedSubtree, {
      isVisible: t[ItemType.CODE_BLOCK_ITEM],
      children: () => jsx(ap, {
        recordingKey: "slidesCodeBlockPanel"
      })
    }), jsx(useCachedSubtree, {
      isVisible: t[ItemType.SLIDE_NUMBER],
      children: () => jsx(as, {
        recordingKey: "slideNumberPanel"
      })
    }), jsx(useCachedSubtree, {
      isVisible: Y$(t),
      children: () => jsx(a0, {
        recordingKey: "slidesInstancePanel"
      })
    }), jsx(useCachedSubtree, {
      isVisible: t[ItemType.TYPE_ITEM],
      children: () => jsx(o1, {
        recordingKey: "slidesTypePanel"
      })
    })]
  });
}
function o9(e) {
  let t = new _$$J3();
  if (function (e) {
    switch (e) {
      case "RECTANGLE":
      case "ROUNDED_RECTANGLE":
      case "ELLIPSE":
      case "REGULAR_POLYGON":
      case "STAR":
      case "VECTOR":
      case "SHAPE_WITH_TEXT":
      case "FRAME":
      case "REPEATER":
        return !0;
      default:
        return !1;
    }
  }(e.type)) {
    let t = _$$j2(e);
    if (t) return t;
  }
  if (e.isSlideNumber) return getI18nString("slides.properties_panel.slide_number.title");
  switch (e.type) {
    case "SLIDE":
      return _$$Y3(e) && e.isSkippedSlide ? getI18nString("fullscreen.properties_panel.layer_header.node_type_slide_skipped") : getI18nString("fullscreen.properties_panel.layer_header.node_type_slide", {
        slideNumber: e.name
      });
    case "INTERACTIVE_SLIDE_ELEMENT":
      if ("YOUTUBE" === e.interactiveSlideElementType) return getI18nString("slides.flapp.embed.widget_youtube");
      return getI18nString("fullscreen.properties_panel.layer_header.node_type_interactive_slide_element");
    case "SHAPE_WITH_TEXT":
      return t.format(e.shapeWithTextType);
    case "FRAME":
      if ("NONE" !== e.stackMode) return getI18nString("fullscreen.properties_panel.layer_header.node_type_frame_auto_layout");
      if (e.isGroup) return getI18nString("fullscreen.properties_panel.layer_header.node_type_group");
      return getI18nString("fullscreen.properties_panel.layer_header.node_type_frame");
    default:
      return null;
  }
}
let dt = memo(() => {
  let {
    nodeType,
    count,
    nodeTypeAsUserDisplayableString
  } = _$$u3({
    getNodeTypeStringOverrides: o9
  });
  let n = function (e, t) {
    let i = _$$G5();
    let n = _$$D5(t);
    return i ? "INSTANCE" : n ? "SYMBOL" : e;
  }(nodeType, count);
  let o = RK();
  let d = _$$rB();
  let u = _$$lD();
  let p = function () {
    let e = useIsFullscreenSlidesView();
    let t = useSelector(e => isActionEnabled(e.mirror.appModel, JT.REMOVE_BACKGROUND));
    let i = PE();
    if (e && t && i) return {
      type: DMenuItemType.CUSTOM_ACTION,
      customActionType: DButtonType.DIALOG_TRIGGER_BUTTON,
      onClick: () => $I({
        moduleToOpen: {
          type: "custom",
          module: jsx(RemoveBackgroundAction, {
            source: "quick-actions"
          }),
          beforeModuleOpen: () => {
            let e = ImageToolsBindings?.getNodeImagePairsForEdit() ?? [];
            B3(JT.REMOVE_BACKGROUND);
            Ag(JT.REMOVE_BACKGROUND, _$$J5, {
              source: "quick-actions",
              targets: e
            }, {
              isBatch: e.length > 1
            });
          },
          name: ExtensionFeatureKey.BACKGROUND_REMOVE_TOAST
        },
        trackingData: {
          source: "image_settings_remove_background"
        }
      }),
      icon: jsx(_$$$2, {}),
      rightIcon: jsx(_$$y, {
        variant: _$$x3.ON_MENU,
        helpUrlVariant: JT.REMOVE_BACKGROUND
      }),
      isSelected: !1,
      getTitle: () => getI18nString("fullscreen_actions.remove_background"),
      recordingKey: "removeBackground"
    };
  }();
  let x = function () {
    let e = useIsFullscreenSlidesView();
    let t = useSelector(e => isActionEnabled(e.mirror.appModel, JT.UPSCALE_IMAGE));
    let i = PE();
    if (e && t && i) return {
      type: DMenuItemType.CUSTOM_ACTION,
      customActionType: DButtonType.DIALOG_TRIGGER_BUTTON,
      onClick: () => $I({
        moduleToOpen: {
          type: "custom",
          module: jsx(UpscaleImageAction, {
            source: "slides-image-menu"
          }),
          beforeModuleOpen: () => {
            let e = ImageToolsBindings?.getNodeImagePairsForEdit() ?? [];
            B3(JT.UPSCALE_IMAGE);
            Ag(JT.UPSCALE_IMAGE, _$$r4, {
              source: "slides-image-menu",
              targets: e
            }, {
              isBatch: e.length > 1
            });
          },
          name: ExtensionFeatureKey.UPSCALE_IMAGE_TOAST
        },
        trackingData: {
          source: "slides-image-menu"
        }
      }),
      icon: jsx(_$$X, {}),
      rightIcon: jsx(_$$y, {
        variant: _$$x3.ON_MENU,
        helpUrlVariant: JT.UPSCALE_IMAGE
      }),
      isSelected: !1,
      getTitle: () => getI18nString("fullscreen_actions.upscale_image"),
      recordingKey: "upscaleImage"
    };
  }();
  let h = function () {
    let e = Tv();
    let t = useStrictDeepEqualSceneValue((e, t) => {
      if (!t) return null;
      let i = t[0];
      if (1 !== t.length || !i) return null;
      let n = e.get(i);
      return n && "INTERACTIVE_SLIDE_ELEMENT" === n.type && "YOUTUBE" === n.interactiveSlideElementType ? {
        url: n.interactiveSlideConfigData.url,
        title: n.interactiveSlideConfigData.title
      } : null;
    }, e);
    return useMemo(() => {
      if (t) return {
        type: DMenuItemType.CUSTOM_ACTION,
        customActionType: DButtonType.DIALOG_TRIGGER_BUTTON,
        onClick: () => {
          t.url && openWindow(t.url, "_blank", "noopener");
        },
        icon: jsx(_$$V, {}),
        isSelected: !1,
        getTitle: () => t.title ?? getI18nString("slides.flapp.embed.widget_youtube"),
        recordingKey: "youtube"
      };
    }, [t]);
  }();
  let m = _$$v6();
  let _ = _$$h4();
  let g = _$$U2();
  let y = Ef();
  let f = useMemo(() => [[m], [o], [GQ], [d], y, [u], [_$$s$], [p, x], [h], [_, g]], [m, o, d, u, p, x, h, _, g, y]);
  let j = _$$g3();
  return jsxs(Fragment, {
    children: [jsx(_$$W3, {
      selectionName: ("MIXED_FRAME_SECTION_GROUP" === n ? jsx("div", {
        ref: j,
        className: Zp,
        children: jsx("span", {
          children: getI18nString("fullscreen.properties_panel.layer_header.node_type_multiple_selected", {
            count
          })
        })
      }) : null) || jsx(_$$Y5, {
        nodeCount: count,
        nodeType: n,
        nodeTypeString: nodeTypeAsUserDisplayableString
      }),
      selectionActionsButtons: jsx(_$$P4, {
        actions: f
      }),
      children: jsx(o3, {
        nodeType: n
      })
    }), jsx(bh, {})]
  });
});
dt.displayName = "SlidesSelectionActionsPanel";
function dr({
  recordingKey: e
}) {
  let [t, i] = Xw();
  return jsx(Zk, {
    className: "slides_align_panel--panel--4jgTN",
    ...i,
    children: jsx(wF, {
      isHoveringOverPanel: t,
      inSlidesPanel: !0,
      recordingKey: e
    })
  });
}
class dm extends _$$c$ {}
let d_ = [0, 2, 4, 8, 16, 24];
let dg = ["NONE", "SOLID", "DASHED_BIG", "DASHED_SMALL"];
let dy = dg.filter(e => "NONE" !== e);
function df({
  recordingKey: e
}) {
  let {
    selectedPreset,
    presets,
    presetOptions,
    onChange
  } = function () {
    let [e, t] = useSelectionProperty("dashPattern");
    let [i, n] = useSelectionProperty("strokePaints");
    let s = i ? isValidValue(i) ? i[0] : MIXED_MARKER : void 0;
    let a = useSelectionPropertyValue("numSelectedByType");
    let o = a && isValidValue(a) && Kl(a, ["LINE", "TABLE", "CONNECTOR"]);
    let d = useMemo(() => ({
      NONE: {
        value: void 0,
        displayText: getI18nString("slides.properties_panel.border_panel.style_none"),
        icon: jsx(_$$t4, {})
      },
      SOLID: {
        value: [],
        displayText: getI18nString("slides.properties_panel.border_panel.style_solid"),
        icon: jsx(_$$y2, {})
      },
      DASHED_BIG: {
        value: [20, 24],
        displayText: getI18nString("slides.properties_panel.border_panel.style_dashed_big"),
        icon: jsx(SvgComponent, {
          svg: _$$A0,
          className: cssBuilderInstance.colorIconSecondary.$
        })
      },
      DASHED_SMALL: {
        value: [8, 10],
        displayText: getI18nString("slides.properties_panel.border_panel.style_dashed_small"),
        icon: jsx(SvgComponent, {
          svg: _$$A1,
          className: cssBuilderInstance.colorIconSecondary.$
        })
      }
    }), []);
    let [u, p] = useState(() => dj(e, s, d));
    let x = useMemoStable(() => o ? dy : dg, [o]);
    useOnSelectionChange(() => {
      p(dj(e, s, d));
    });
    return {
      presets: x,
      selectedPreset: u,
      presetOptions: d,
      onChange: i => {
        let r = d[i].value;
        ("NONE" === u || isInvalidValue(e)) && r && fullscreenValue.triggerActionInUserEditScope("add-stroke-to-selection");
        r ? t(r) : n([]);
        p(i);
      }
    };
  }();
  let {
    strokeWeight,
    borderWidthPresetOptions,
    disabled,
    onChange: _onChange
  } = function () {
    let [e, t] = useSelectionProperty("strokeWeight");
    let i = useSelectionPropertyValue("numSelectedByType");
    return {
      strokeWeight: e,
      borderWidthPresetOptions: d_,
      disabled: i && isValidValue(i) && vx(i, "TABLE"),
      onChange: useCallback(e => {
        t(e);
      }, [t])
    };
  }();
  let {
    paint,
    inheritStyleId,
    inheritStyleKey,
    inheritStyleName,
    onChange: _onChange2
  } = function () {
    let [e, t] = useSelectionProperty("strokePaints");
    let [i] = useSelectionProperty("inheritFillStyleKeyForStroke");
    let [n] = useSelectionProperty("inheritFillStyleNameForStroke");
    let [r] = useSelectionProperty("styleIdForStrokeFill");
    return {
      paint: e ? isValidValue(e) ? e[0] : MIXED_MARKER : void 0,
      inheritStyleId: r,
      inheritStyleKey: i,
      inheritStyleName: n,
      onChange: useCallback(e => {
        t([e]);
      }, [t])
    };
  }();
  return jsx(_$$k7, {
    name: "slides_border_panel",
    children: jsxs(_$$tR, {
      children: [jsx(_$$r, {
        titleTx: renderI18nText("slides.properties_panel.border_panel.title")
      }), jsx(db, {
        selectedPreset,
        presets,
        presetOptions,
        onChange,
        recordingKey: e
      }), "NONE" !== selectedPreset && paint && jsx(_$$g4, {
        leftLabel: renderI18nText("slides.properties_panel.border_panel.color"),
        leftInput: jsx(dE, {
          paint,
          onChange: _onChange2,
          inheritStyleKey,
          inheritStyleName,
          inheritStyleId,
          recordingKey: e
        }),
        rightLabel: renderI18nText("slides.properties_panel.border_panel.width_slider_tooltip"),
        rightInput: jsx(AutoInteractableWrapper, {
          name: "slides_corner_radius_dropdown",
          children: jsx(dv, {
            dropdownId: "border-width-select",
            strokeWeight,
            borderWidthPresetOptions,
            disabled,
            onChange: _onChange,
            recordingKey: e
          })
        })
      })]
    })
  });
}
function dj(e, t, i) {
  if (!isInvalidValue(e)) return e && t ? deepEqual(e, i.SOLID.value) ? "SOLID" : deepEqual(e, i.DASHED_BIG.value) ? "DASHED_BIG" : deepEqual(e, i.DASHED_SMALL.value) ? "DASHED_SMALL" : "NONE" : "NONE";
}
function db({
  selectedPreset: e,
  presets: t,
  presetOptions: i,
  onChange: n,
  recordingKey: l
}) {
  return jsx(_$$M, {
    legend: renderI18nText("slides.properties_panel.border_panel.legend"),
    value: e,
    onChange: n,
    recordingKey: generateRecordingKey(l, "borderStyle"),
    children: t.map(e => jsx(_$$c$2, {
      value: e,
      icon: i[e].icon,
      "aria-label": i[e].displayText,
      htmlAttributes: {
        "data-onboarding-key": i[e].displayText
      }
    }, e))
  });
}
function dE({
  paint: e,
  inheritStyleId: t,
  inheritStyleKey: i,
  inheritStyleName: n,
  onChange: l,
  recordingKey: s
}) {
  return jsx(_$$u7, {
    paint: e,
    onChange: l,
    inheritStyleKeyField: "inheritFillStyleKeyForStroke",
    inheritStyleKey: i,
    inheritStyleName: n,
    inheritStyleId: t,
    pickerId: `${Yr}-border`,
    recordingKey: generateRecordingKey(s, "color"),
    hideCustomColorPickerFillTypeToggle: !1
  });
}
function dv({
  dropdownId: e,
  strokeWeight: t,
  borderWidthPresetOptions: i,
  disabled: n,
  targetDomNode: l,
  onChange: a,
  recordingKey: o
}) {
  let d = useDispatch<AppDispatch>();
  let u = useDropdownState();
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = getNudgeAmounts();
  return jsx(dT, {
    children: jsx(NumericDropdownWithIcon, {
      bigNudgeAmount,
      "data-tooltip": getI18nString("slides.properties_panel.border_panel.width_slider_tooltip"),
      "data-tooltip-type": KindEnum.TEXT,
      dispatch: d,
      dropdownShown: u,
      enablePreview: !0,
      id: e,
      max: 50,
      min: 1,
      onValueChange: a,
      recordingKey: generateRecordingKey(o, "borderWidth"),
      smallNudgeAmount,
      targetDomNode: l,
      tooltipForScreenReadersOnly: !0,
      value: void 0 === t || isInvalidValue(t) ? MIXED_MARKER : t,
      willShowDropdown: () => (fullscreenValue.commit(), Promise.resolve()),
      children: i.map(e => jsx(dm, {
        value: e,
        disabled: !!n,
        recordingKey: generateRecordingKey(o, "borderWidth", "select", e),
        children: e
      }, `border-width-${e}`))
    })
  });
}
function dT({
  children: e
}) {
  return jsx(_$$ow, {
    value: {
      select: pW,
      inputComponent: gm
    },
    children: jsx(_$$tV, {
      value: {
        chevron: ChevronContainer
      },
      children: e
    })
  });
}
class dN extends _$$c$ {}
let dk = [0, 8, 16, 24, 32, 64, 96];
class dC extends X9 {
  format(e) {
    return 1e6 === e ? "Circular" : `${e}`;
  }
}
function dw({
  recordingKey: e
}) {
  return getShownTransformControl(GeometricValues.CORNER_RADIUS) ? jsx(_$$k7, {
    name: "slides_corner_panel",
    children: jsx(bz, {
      titleTx: renderI18nText("slides.properties_panel.corner"),
      input: jsx(AutoInteractableWrapper, {
        name: "slides_corner_radius_dropdown",
        children: jsx(dO, {
          dropdownId: "corner-radius-select",
          recordingKey: e
        })
      })
    })
  }) : null;
}
function dO({
  dropdownId: e,
  recordingKey: t,
  targetDomNode: i
}) {
  let n = useDispatch<AppDispatch>();
  let a = useDropdownState();
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = getNudgeAmounts();
  let u = useMemo(() => new dC({
    min: 0,
    smallNudgeAmount,
    bigNudgeAmount
  }), [smallNudgeAmount, bigNudgeAmount]);
  let [p, x] = useSelectionProperty("cornerRadius");
  let h = useCallback(e => {
    x(e);
  }, [x]);
  let m = jsx(_$$a4, {});
  let _ = void 0 === p || isInvalidValue(p) ? MIXED_MARKER : p;
  return jsx(_$$ow, {
    value: {
      select: pW,
      inputComponent: gm
    },
    children: jsx(_$$tV, {
      value: {
        chevron: ChevronContainer
      },
      children: jsxs(NumericDropdownWithIcon, {
        "data-tooltip": getI18nString("slides.properties_panel.corner_radius"),
        "data-tooltip-type": KindEnum.TEXT,
        dispatch: n,
        dropdownShown: a,
        enablePreview: !0,
        formatter: u,
        icon: m,
        id: e,
        onValueChange: h,
        recordingKey: generateRecordingKey(t, "cornerRadius"),
        scrubbingDisabled: 1e6 === p,
        targetDomNode: i,
        tooltipForScreenReadersOnly: !1,
        value: _,
        willShowDropdown: () => (fullscreenValue.commit(), Promise.resolve()),
        children: [dk.map(e => jsx(dN, {
          value: e,
          recordingKey: generateRecordingKey(t, "cornerRadius", "select", e),
          children: e
        }, `corner-radius-${e}`)), jsx(_$$sK, {}, "divider"), jsx(dN, {
          value: 1e6,
          recordingKey: generateRecordingKey(t, "cornerRadius", "select", "circular"),
          children: renderI18nText("slides.properties_panel.corners_panel.circular")
        }, "corner-radius-circular")]
      })
    })
  });
}
let dM = "slides_flapp_prop_panel--panelSelectorRow--8JJYh";
function dF() {
  let e = useSelector(selectSingleSelectedNode);
  let t = e?.guid;
  let i = useDeepEqualSceneValue((e, t) => {
    let i = e.get(t);
    return i?.interactiveSlideConfigData ? i.interactiveSlideConfigData : void 0;
  }, t);
  let n = useMemo(() => function (e) {
    if (!e || !e.startingPointsData) return [];
    try {
      return JSON.parse(e.startingPointsData);
    } catch (e) {
      return [];
    }
  }(i), [i]);
  let a = useCallback(e => {
    _$$l3.user("set_slides_embeddable_prototype_show_device_frame", () => {
      let i = getSingletonSceneGraph();
      if (!t) return;
      let n = i.get(t);
      n && n.setInteractiveSlideConfigData("deviceFrameShownOverride", e.toString());
    });
  }, [t]);
  if (!i) return null;
  let o = i.activeStartingPointNodeId ?? "";
  return t ? jsx(_$$k7, {
    name: "slides_embeddable_prototype_panel",
    children: jsxs(Zk, {
      children: [jsx(dV, {
        fileName: function (e) {
          if (e.fileName) return e.pageName ? `${e.fileName} - ${e.pageName}` : e.fileName;
        }(i),
        baseUrl: i.url,
        activeStartingPointNodeId: i.activeStartingPointNodeId
      }), n.length > 0 && jsx(dU, {
        embedId: t,
        startingPointsData: n,
        activeStartingPointId: o
      }), void 0 !== i.deviceFramePreset && "" !== i.deviceFramePreset ? jsx(dK, {
        showDeviceFrame: Wd(i),
        onChange: a
      }) : null]
    })
  }) : null;
}
function dU({
  embedId: e,
  startingPointsData: t,
  activeStartingPointId: i
}) {
  let n = useDispatch<AppDispatch>();
  let a = useDropdownState();
  let o = useMemo(() => new d$(t), [t]);
  let d = useCallback(t => {
    _$$l3.user("set_slides_embeddable_prototype_starting_point", () => {
      let i = getSingletonSceneGraph().get(e);
      i && i.setInteractiveSlideConfigData("activeStartingPointNodeId", t);
    });
  }, [e]);
  let u = useId();
  return jsxs("div", {
    className: dM,
    children: [jsx("label", {
      id: u,
      children: renderI18nText("slides.properties_panel.embeddable_prototype.flow_label")
    }), jsx(AutoInteractableWrapper, {
      name: "slide_embeddable_prototype_flow_selector",
      children: jsx(_$$l6, {
        ariaLabelledBy: u,
        disabled: 0 === t.length,
        formatter: o,
        id: "slide-embeddable-prototype-flow-selector",
        property: i,
        onChange: e => {
          d(e);
        },
        dispatch: n,
        dropdownShown: a,
        children: t.map(e => jsx(_$$c$, {
          value: e.id
        }, e.id))
      })
    })]
  });
}
function dV({
  fileName: e,
  baseUrl: t,
  activeStartingPointNodeId: i
}) {
  let n = useCallback(() => {
    let e;
    if (t) {
      try {
        e = new URL(t);
      } catch (e) {
        return;
      }
      i && _$$e6(e.searchParams, "starting-point-node-id", i);
      customHistory.redirect(e.toString(), "_blank");
    }
  }, [t, i]);
  return jsx(_$$r, {
    titleTx: e ? jsx("div", {
      className: cssBuilderInstance.textBodyMediumStrong.$,
      children: jsx(_$$F3, {
        tooltip: e,
        children: e
      })
    }) : renderI18nText("slides.properties_panel.embeddable_prototype.default_title"),
    icon: jsx(IconButton, {
      "aria-label": getI18nString("slides.properties_panel.embeddable_prototype.open_prototype_label"),
      onClick: n,
      htmlAttributes: {
        "data-tooltip": getI18nString("slides.properties_panel.embeddable_prototype.open_prototype_label"),
        "data-tooltip-type": "text"
      },
      children: jsx(_$$E6, {})
    })
  });
}
function dK({
  showDeviceFrame: e,
  onChange: t
}) {
  return jsxs("div", {
    className: dM,
    children: [jsx("label", {
      children: renderI18nText("slides.properties_panel.embeddable_prototype.device_frame_label")
    }), jsx(AutoInteractableWrapper, {
      name: "slides_embeddable_prototype_device_frame_switch",
      children: jsx(_$$d5, {
        label: jsx(HiddenLabel, {
          children: getI18nString("slides.properties_panel.embeddable_prototype.device_frame_label")
        }),
        checked: e,
        onChange: t
      })
    })]
  });
}
class d$ {
  constructor(e) {
    this.startingPointsData = e;
  }
  format(e) {
    return this.startingPointsData?.find(t => t.id === e)?.name ?? "";
  }
}
function cr({
  rowRef: e,
  recordingKey: t
}) {
  let [i, n] = useState(!1);
  let [s, a] = useState(null);
  let o = useCallback(() => {
    i ? n(!1) : e.current && (a(calculatePickerPositionLeft(e.current, 240)), n(!0));
  }, [i, e]);
  let d = useRef(null);
  let u = useRef(null);
  useClickOutside(() => n(!1), {
    closeOnEsc: !0,
    ignore: [d, u]
  });
  return jsxs(Fragment, {
    children: [jsx(AutoInteractableWrapper, {
      name: "slides_blur_input",
      children: jsx(_$$C2, {
        isOpen: i,
        onClick: o,
        ref: d,
        recordingKey: t,
        "aria-label": getI18nString("slides.properties_panel.blur.label"),
        children: jsxs("div", {
          className: cssBuilderInstance.inlineFlex.itemsCenter.$,
          children: [jsx(_$$V2, {}), jsx("div", {
            id: "flyout-label",
            children: renderI18nText("slides.properties_panel.blur.label")
          })]
        })
      })
    }), i && s && jsx("div", {
      ref: u,
      children: jsx(DraggableModalManager, {
        title: getI18nString("slides.properties_panel.blur.title"),
        headerSize: "small",
        initialPosition: s,
        initialWidth: 240,
        onClose: () => n(!1),
        autoflowHeight: !0,
        recordingKey: t,
        children: jsx("div", {
          className: cssBuilderInstance.py12.pr8.$,
          children: jsx(cl, {
            recordingKey: t
          })
        })
      })
    })]
  });
}
function cl({
  recordingKey: e
}) {
  let t = useDispatch<AppDispatch>();
  let [i, n] = useSelectionProperty("blur");
  let a = useCallback(e => n(100 * e), [n]);
  return jsx(_$$k7, {
    name: "slides_blur_controls",
    children: jsx(_$$K6, {
      ariaLabel: getI18nString("slides.properties_panel.blur.strength"),
      bigStep: 0.1,
      max: 1,
      min: 0,
      numberInput: jsx(AutoInteractableWrapper, {
        name: "slides_blur_strength_input",
        children: jsx(_$$Y8, {
          "data-tooltip": getI18nString("slides.properties_panel.blur.strength"),
          value: isInvalidValue(i) ? MIXED_MARKER : (i || 0) / 100,
          onValueChange: a,
          dispatch: t,
          recordingKey: generateRecordingKey(e, "blurStrength", "input")
        })
      }),
      onChange: a,
      recordingKey: generateRecordingKey(e, "blurStrength"),
      sliderTrackableName: "slides_blur_strength_slider",
      step: 0.01,
      value: isInvalidValue(i) ? MIXED_MARKER : (i || 0) / 100
    })
  });
}
function co({
  paint: e,
  paintIndex: t,
  onChange: i,
  recordingKey: n,
  selectedPropertyType: s
}) {
  let o = useMemo(() => new _$$D3(), []);
  let [d, u] = useState(!1);
  let [p, x] = useState(0);
  let [h, m] = useState(0);
  let [g, y] = useState(!1);
  let [f, j] = useState(null);
  let [b, E] = useState(!1);
  let [v, T] = useState(!1);
  let [S, I] = useState(0);
  let [N, k] = useState(null);
  let [C, w] = useState(null);
  let O = X7();
  let A = getImageOrVideoPaint(e);
  let L = useRef(A);
  L.current = A;
  let P = useCurrentFileKey();
  let D = !!e?.animatedImage;
  let R = !!e?.video || e?.type === "VIDEO";
  useEffect(() => {
    D && L.current?.animationFrame != null ? (I(L.current.animationFrame), Bc(L.current).then(e => {
      k(_$$J6(e));
    })) : R && loadVideoJs().then(e => j(e));
  }, [R, D, A?.animatedImage?.hash]);
  let M = useMemo(() => paintManager.initPaint("IMAGE", {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  }, void 0, "slides-default-image-paint"), []);
  let F = A && deepEqual(A.image, M.image);
  return e ? jsxs("div", {
    children: [jsx(_$$Y6, {
      isDragTarget: () => !0,
      onTargetDragEnter: () => (u(!0), SKIP_RECORDING),
      onTargetDragLeave: () => (u(!1), SKIP_RECORDING),
      onTargetDrop: i => {
        if (u(!1), fullscreenValue.fileArrayToString) {
          let n = fullscreenValue.fileArrayToString(Array.from(i.files));
          Fullscreen?.dropImageOnPaintThumbnail(e?.blendMode ?? "NORMAL", e?.opacity ?? 1, n, t, s);
        }
      },
      recordingKey: generateRecordingKey(n, "imageDragTarget"),
      children: jsxs("div", {
        className: iG()(cssBuilderInstance.relative.wAuto.h100.flex.itemsCenter.justifyCenter.radiusMedium.$, xm, {
          [cssBuilderInstance.colorBorderSelected.bSolid.b1.$]: d
        }),
        children: [F ? jsx(Fragment, {}) : A && R ? jsx(_$$A10, {
          className: cssBuilderInstance.opacity1.block.$,
          currentTime: p,
          height: 100,
          imagePaint: A,
          isVideoLoaded: b,
          onUpdateCurrentTime: e => x(e),
          openFileKey: P || void 0,
          playing: g,
          setDuration: e => m(e),
          setIsVideoLoaded: e => E(e),
          setPlaying: e => y(e),
          setUserClickedControls: e => T(e),
          userClickedControls: v,
          videoJsLib: f,
          width: 200
        }) : A && D ? jsx(_$$Y7, {
          imagePaint: A,
          width: 200,
          height: 100,
          animatedImage: N,
          animationFrame: S,
          onUpdateFrameData: e => w(e),
          playing: g
        }) : A ? jsx(_$$K5, {
          imagePaint: A,
          width: 200,
          height: 100,
          forceUpdate: !1
        }) : null, jsx(_$$k8, {
          isVisible: !1,
          wrapperClassName: iG()(cssBuilderInstance.absolute.top0.bottom0.left0.right0.flex.itemsCenter.justifyCenter.$, CL),
          children: jsx(AutoInteractableWrapper, {
            name: "slides_media_upload",
            children: jsx(_$$v7, {
              uploadImagePaint: () => {
                fullscreenValue.updateAppModel({
                  currentSelectedProperty: {
                    type: NodePropertyCategory.FILL,
                    indices: [t]
                  }
                });
                let i = e.blendMode || "NORMAL";
                let n = e.opacity || 1;
                Fullscreen?.uploadPaintMedia(i, n);
              },
              recordingKey: generateRecordingKey(n, "uploadMedia")
            })
          })
        })]
      })
    }), R ? null : jsxs(Fragment, {
      children: [jsx("div", {
        className: cssBuilderInstance.py4.pr8.pl16.$,
        children: jsx(AutoInteractableWrapper, {
          name: "slides_image_scale_mode",
          children: jsxs(SelectGroupLabel, {
            value: e.imageScaleMode ?? "FILL",
            onChange: t => {
              "STRETCH" === t ? fullscreenValue.triggerActionInUserEditScope("crop-image") : i({
                ...e,
                imageScaleMode: t
              });
            },
            recordingKey: generateRecordingKey(n, "imageScaleMode"),
            children: [jsx(SelectSeparator, {
              label: jsx(HiddenLabel, {
                children: renderI18nText("slides.properties_panel.fill.fill_type_media.scale_options.legend")
              }),
              width: "fill",
              size: "md"
            }), jsx(SelectContainer, {
              children: GA.map((e, t) => jsx(SelectOptionReset, {
                value: e,
                children: o.format(e)
              }, t))
            })]
          })
        })
      }), jsx(cc, {
        recordingKey: n
      })]
    }), R && jsx(Fragment, {
      children: jsx("div", {
        className: iG()({
          [_$$iS]: !O
        }),
        children: jsx(cd, {})
      })
    }), D && jsx("div", {
      className: iG()({
        [_$$iS]: !O
      }),
      children: jsx(_$$F4, {
        paint: e,
        animationFrame: S,
        numFrames: N ? N.numFrames() : null,
        onGIFFrameChange: e => {
          I(Math.round(e));
          y(!1);
        },
        disabled: !N,
        setPlaying: e => y(e),
        playing: !!N && g,
        setGIFCoverFrame: t => {
          if (!C) return;
          let i = t ?? S;
          (null != t || i !== e.animationFrame) && (fullscreenValue.triggerAction("toggle-raster-edit-mode"), _$$l3.user("update-gif-image-slides", () => updateGIFImageProperties({
            ...e,
            animationFrame: i
          }, C.data, NodePropertyCategory.FILL)), Fullscreen?.setDefaultEditMode());
        }
      })
    })]
  }) : null;
}
function cd() {
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  let i = useSelectionPropertyValue("videoMediaLoop");
  let n = useSelectionPropertyValue("videoAutoplay");
  let s = useSelectionPropertyValue("videoMuted");
  let a = useSelectionPropertyValue("videoShowControls");
  let o = useMemo(() => {
    let e = [];
    !0 === i && e.push("mediaLoop");
    !0 !== s && e.push("sound");
    !0 === n && e.push("autoplay");
    !0 === a && e.push("showControls");
    return e;
  }, [i, n, s, a]);
  return jsxs(MenuRootComp, {
    manager,
    children: [jsx("div", {
      className: "x78zum5 x1ikimyq",
      children: jsx(ButtonWide, {
        ...getTriggerProps(),
        variant: "secondary",
        children: jsxs("span", {
          className: "x78zum5 x6s0dn4 xl56j7k",
          children: [jsx(_$$A9, {}), getI18nString("proto.prototype_panel.video_playback_settings")]
        })
      })
    }), jsx(MenuContainerComp, {
      children: jsxs($Q, {
        title: jsx(MenuTitleComp, {
          children: getI18nString("proto.prototype_panel.video_playback_settings")
        }),
        onChange: e => {
          e.includes("mediaLoop") && !0 !== i ? fullscreenValue.updateSelectionProperties({
            videoMediaLoop: !0
          }) : e.includes("mediaLoop") || !0 !== i || fullscreenValue.updateSelectionProperties({
            videoMediaLoop: !1
          });
          e.includes("sound") || !0 === s ? e.includes("sound") && !0 === s && fullscreenValue.updateSelectionProperties({
            videoMuted: !1
          }) : fullscreenValue.updateSelectionProperties({
            videoMuted: !0
          });
          e.includes("autoplay") && !0 !== n ? fullscreenValue.updateSelectionProperties({
            videoAutoplay: !0
          }) : e.includes("autoplay") || !0 !== n || fullscreenValue.updateSelectionProperties({
            videoAutoplay: !1
          });
          e.includes("showControls") && !0 !== a ? fullscreenValue.updateSelectionProperties({
            videoShowControls: !0
          }) : e.includes("showControls") || !0 !== a || fullscreenValue.updateSelectionProperties({
            videoShowControls: !1
          });
        },
        selectedItems: o,
        children: [jsx(_$$a5, {
          value: "mediaLoop",
          children: getI18nString("proto.prototype_panel.loop")
        }), jsx(_$$a5, {
          value: "sound",
          children: getI18nString("proto.prototype_panel.play_sound")
        }), jsx(_$$a5, {
          value: "autoplay",
          children: getI18nString("proto.prototype_panel.autoplay")
        }), jsx(_$$a5, {
          value: "showControls",
          children: getI18nString("proto.prototype_panel.show_video_controls")
        })]
      })
    })]
  });
}
function cc({
  recordingKey: e
}) {
  let t = useRef(null);
  return jsx(_$$g4, {
    ref: t,
    leftLabel: null,
    leftInput: jsx(_$$P5, {
      rowRef: t,
      recordingKey: generateRecordingKey(e, "overlay")
    }),
    rightLabel: null,
    rightInput: jsx(cr, {
      rowRef: t,
      recordingKey: generateRecordingKey(e, "blur")
    })
  });
}
let cu = `${Yr}-fill`;
let cp = ["NONE", "SOLID", "GRADIENT", "MEDIA"];
let cx = {
  SOLID: "SOLID",
  GRADIENT: "GRADIENT_LINEAR",
  MEDIA: "IMAGE"
};
function ch({
  recordingKey: e
}) {
  let t = useSelector(e => e.mirror.selectionProperties.numSelectedByType);
  let i = !!t && OU(t, ["SLIDE"]);
  let n = t && Kl(t, ["SLIDE", "TEXT"]);
  let [o] = useSelectionProperty("fillsType");
  let d = useSelector(e => {
    let t = e.mirror.selectionProperties.fillPaints;
    return isInvalidValue(t) ? MIXED_MARKER : t?.[0];
  });
  let [u] = useSelectionProperty("imageOverlayPaint");
  let [p] = useSelectionProperty("inheritFillStyleKey");
  let [x] = useSelectionProperty("inheritFillStyleName");
  let [h] = useSelectionProperty("styleIdForFill");
  let _ = useMemo(() => ({
    NONE: {
      displayText: getI18nString("slides.properties_panel.fill.fill_type_none"),
      icon: jsx(_$$f3, {})
    },
    SOLID: {
      displayText: getI18nString("slides.properties_panel.fill.fill_type_solid"),
      icon: jsx(_$$H4, {})
    },
    GRADIENT: {
      displayText: getI18nString("slides.properties_panel.fill.fill_type_gradient"),
      icon: jsx(_$$z3, {})
    },
    MEDIA: {
      displayText: getI18nString("slides.properties_panel.fill.fill_type_media"),
      icon: jsx(_$$Z8, {})
    }
  }), []);
  let g = CK();
  let y = useCallback(e => isInvalidValue(e) ? void 0 : e ? "RASTER" === e || u && isValidValue(u) ? "MEDIA" : e : n ? "SOLID" : "NONE", [n, u]);
  let [f, j] = useState(y(o));
  useEffect(() => {
    j(y(o));
  }, [o, d, y]);
  let b = useCallback(e => {
    f !== e && ("NONE" === e ? fullscreenValue.updateSelectionProperties({
      fillPaints: []
    }) : cx[e] && g(paintManager.initPaint(cx[e], _$$li.color, valueOrFallback(d, {}), "slides-fill-panel"), yesNoTrackingEnum.YES), j(e));
  }, [d, g, f]);
  useOnSelectionChange(() => {
    j(y(o));
  });
  let E = f && isValidValue(o) && ("SOLID" === f || "GRADIENT" === f);
  let v = f && isValidValue(o) && d && isValidValue(d) && "MEDIA" === f;
  return jsx(_$$k7, {
    name: "slides_fill_panel",
    children: jsxs(_$$tR, {
      children: [jsx(_$$r, {
        titleTx: (() => {
          if (t) {
            if (i) return renderI18nText("slides.properties_panel.fill.slide_fill_title");
            if (OU(t, ["TEXT"])) return renderI18nText("slides.properties_panel.fill.text_fill_title");
          }
          return renderI18nText("slides.properties_panel.fill.fill_title");
        })()
      }), jsx(_$$M, {
        legend: renderI18nText("slides.properties_panel.fill.legend"),
        value: f,
        onChange: b,
        recordingKey: generateRecordingKey(e, "fillType"),
        children: cp.filter(e => !(n && "NONE" === e)).map(e => jsx(_$$c$2, {
          value: e,
          icon: _[e].icon,
          "aria-label": _[e].displayText,
          htmlAttributes: {
            "data-onboarding-key": _[e].displayText
          }
        }, e))
      }), E && jsx("div", {
        className: cssBuilderInstance.py4.pr8.pl16.$,
        children: jsx(_$$u7, {
          paint: d,
          onChange: g,
          inheritStyleKeyField: "inheritFillStyleKey",
          inheritStyleName: x,
          inheritStyleKey: p,
          inheritStyleId: h,
          pickerId: cu,
          recordingKey: generateRecordingKey(e, "color"),
          hideCustomColorPickerFillTypeToggle: !0
        })
      }), v && jsx(co, {
        paint: d,
        paintIndex: 0,
        onChange: g,
        recordingKey: e,
        selectedPropertyType: NodePropertyCategory.FILL
      })]
    })
  });
}
function cf({
  selection: e
}) {
  let t = useMemo(() => Object.keys(e), [e]);
  let i = t[0];
  let n = useDeepEqualSceneValue((e, t) => function (e) {
    let t;
    if (!e) return;
    let i = e.interactiveSlideElementType;
    if (null === i || "EMBED" === i) return;
    switch (i) {
      case "POLL":
        t = getI18nString("slides.flapp.embed.widget_poll");
        break;
      case "FACEPILE":
        t = getI18nString("slides.flapp.embed.widget_stamps");
        break;
      case "ALIGNMENT":
        t = getI18nString("slides.flapp.embed.widget_alignment");
        break;
      case "YOUTUBE":
        t = getI18nString("slides.flapp.embed.widget_youtube");
    }
    let n = Object.keys(e.interactiveSlideParticipantData).length > 0;
    let r = e.interactiveSlideConfigData;
    let l = _$$aF(r);
    return {
      displayName: t,
      currentTheme: l.theme,
      hasParticipantData: n,
      shouldShowBackground: !l.transparentMode
    };
  }(e.get(t)), i);
  let s = useCallback(() => {
    _$$l3.user("reset_slides_interactive_widget_participant_data", () => {
      let e = getSingletonSceneGraph();
      e.get(i)?.resetInteractiveSlideParticipantData();
    });
  }, [i]);
  let a = useCallback(e => {
    _$$l3.user("set_interactive_widget_theme", () => {
      let t = getSingletonSceneGraph();
      t.get(i)?.setInteractiveSlideConfigData("theme", e);
    });
  }, [i]);
  let o = useCallback(e => {
    _$$l3.user("set_interactive_widget_hide_background", () => {
      let t = getSingletonSceneGraph();
      t.get(i)?.setInteractiveSlideConfigData("hideBackground", (!e).toString());
    });
  }, [i]);
  return !n || t.length > 1 ? null : jsx(_$$k7, {
    name: "slides_interactive_widget_panel",
    children: jsxs(Zk, {
      children: [jsx(_$$r, {
        titleTx: jsx("p", {
          className: cssBuilderInstance.textBodyMediumStrong.$,
          children: n.displayName
        }),
        icon: jsx(cb, {
          canReset: n.hasParticipantData,
          onReset: s
        })
      }), jsx(cv, {
        currentTheme: n.currentTheme,
        onThemeSelected: a
      }), jsx(cS, {
        showBackground: n.shouldShowBackground,
        onChange: o
      }), jsx(cj, {})]
    })
  });
}
function cj() {
  return jsx("div", {
    className: cssBuilderInstance.p8.$,
    children: jsxs("div", {
      className: cssBuilderInstance.colorBgSecondary.radiusMedium.p8.$,
      children: [jsx("div", {
        className: cssBuilderInstance.textBodyMediumStrong.colorText.pb4.$,
        children: renderI18nText("slides.properties_panel.interactive_widget.usage_guidance_header")
      }), jsx("div", {
        className: cssBuilderInstance.textBodyMedium.colorTextTertiary.$,
        children: renderI18nText("slides.properties_panel.interactive_widget.usage_guidance_text")
      })]
    })
  });
}
function cb({
  canReset: e,
  onReset: t
}) {
  let {
    showing,
    toggle
  } = useDropdown("RESET_INTERACTIVE_WIDGET_ICON_DROPDOWN_ID");
  let s = useRef(null);
  return jsxs(Fragment, {
    children: [jsx(IconButton, {
      "aria-label": getI18nString("slides.properties_panel.interactive_widget.reset_label"),
      disabled: !e,
      onClick: () => toggle(),
      ref: s,
      children: jsx(_$$m4, {})
    }), showing && s.current && jsxs(ConnectedPointingDropdown, {
      targetRect: s.current.getBoundingClientRect(),
      displayOverTarget: !0,
      children: [jsx(OptionComponent, {
        disabled: !0,
        children: renderI18nText("slides.properties_panel.interactive_widget.reset_confirmation_title")
      }), jsx(OptionComponent, {
        onClick: t,
        children: renderI18nText("slides.properties_panel.interactive_widget.confirm_reset_label")
      })]
    })]
  });
}
let cE = "flappThemeSelector";
function cv({
  currentTheme: e,
  onThemeSelected: t
}) {
  let i = useDispatch<AppDispatch>();
  let n = useDropdownState();
  let a = useId();
  return jsxs("div", {
    className: dM,
    children: [jsx("label", {
      id: a,
      children: renderI18nText("slides.properties_panel.interactive_widget.theme_selector_label")
    }), jsx(AutoInteractableWrapper, {
      name: "slides_interactive_widget_theme_selector",
      children: jsxs(_$$l6, {
        ariaLabelledBy: a,
        id: "slides-interactive-widget-theme-selector",
        formatter: cT,
        property: e,
        onChange: t,
        dispatch: i,
        dropdownShown: n,
        recordingKey: cE,
        children: [jsx(_$$c$, {
          value: Pm.Light,
          recordingKey: generateRecordingKey(cE, "lightOption")
        }, Pm.Light), jsx(_$$c$, {
          value: Pm.Dark,
          recordingKey: generateRecordingKey(cE, "darkOption")
        }, Pm.Dark)]
      })
    })]
  });
}
let cT = new class {
  format(e) {
    switch (e) {
      case Pm.Light:
        return getI18nString("slides.properties_panel.interactive_widget.light_theme_label");
      case Pm.Dark:
        return getI18nString("slides.properties_panel.interactive_widget.dark_theme_label");
      case Pm.Translucent:
        return getI18nString("slides.properties_panel.interactive_widget.transparent_theme_label");
    }
  }
}();
function cS({
  showBackground: e,
  onChange: t
}) {
  return jsxs("div", {
    className: dM,
    children: [jsx("label", {
      children: renderI18nText("slides.properties_panel.interactive_widget.background_label")
    }), jsx(AutoInteractableWrapper, {
      name: "slides_interactive_widget_background_switch",
      children: jsx(_$$d5, {
        label: jsx(HiddenLabel, {
          children: getI18nString("slides.properties_panel.interactive_widget.background_label")
        }),
        checked: e,
        onChange: t,
        recordingKey: "flappBackgroundToggle"
      })
    })]
  });
}
let ck = /^\w+:/;
function cC({
  recordingKey: e
}) {
  let t = useDispatch<AppDispatch>();
  let i = useDropdownState();
  let n = useSelectionPropertyValue("hyperlink");
  let o = normalizeValue(n);
  let d = null;
  o && void 0 !== o.guid ? d = {
    type: "guid",
    guid: o.guid
  } : o && void 0 !== o.url ? d = {
    type: "url",
    url: o.url
  } : isInvalidValue(n) && (d = MIXED_MARKER);
  let u = getObservableValue(AppStateTsApi?.canvasGrid()?.canvasGridArray, []);
  let {
    carouselItemsById
  } = EW(u, !0, !1);
  let x = Object.values(carouselItemsById).filter(e => null !== e.number).sort((e, t) => (e.number ?? 0) - (t.number ?? 0)).map(e => e.guid);
  let h = useMemo(() => ({
    format: e => {
      if (null === e) return "";
      if (isInvalidValue(e)) return getI18nString("fullscreen.mixed");
      if ("guid" === e.type) {
        let t = sessionLocalIDToString(e.guid);
        let i = carouselItemsById[t]?.number;
        return null == i ? getI18nString("slides.properties_panel.link_panel.skipped_slide") : getI18nString("slides.properties_panel.link_panel.slide_number", {
          orderNum: i
        });
      }
      return "url" === e.type ? e.url : "";
    },
    parse: e => {
      if (!e) return null;
      let t = getI18nString("slides.properties_panel.link_panel.slide_number", {
        orderNum: ""
      });
      let i = e.replace(t, "").trim();
      if (i.length > 0) {
        let e = parseInt(i) - 1;
        let t = parseSessionLocalID(x[e]);
        if (t) return {
          type: "guid",
          guid: t
        };
      }
      return {
        type: "url",
        url: e
      };
    },
    isEqual: (e, t) => deepEqual(e, t)
  }), [carouselItemsById, x]);
  let m = _$$nc.user("slides-link-change", useCallback(e => {
    if (null === e) Fullscreen?.setHyperlinkOnCurrentSelection("", null);else if ("guid" === e.type) Fullscreen?.setHyperlinkOnCurrentSelection(fullscreenValue.generateLinkToNode(sessionLocalIDToString(e.guid)), null);else if ("url" === e.type) {
      let t = e.url.match(ck) ? e.url : `https://${e.url}`;
      Fullscreen?.setHyperlinkOnCurrentSelection(t, null);
    }
  }, []));
  return jsx(_$$k7, {
    name: "slides_link_panel",
    children: jsxs(_$$tR, {
      children: [jsx(_$$r, {
        titleTx: renderI18nText("slides.properties_panel.link_panel.title")
      }), jsx(Ad, {
        input: jsx(_$$ow, {
          value: {
            select: pW,
            inputComponent: gm
          },
          children: jsx(_$$tV, {
            value: {
              chevron: ChevronContainer
            },
            children: jsx(_$$a, {
              dispatch: t,
              dropdownShown: i,
              forceInputPlaceholder: null === d,
              formatter: h,
              id: "slides-link-combo-box",
              inputClassName: _$$lb,
              onChange: e => {
                m(e);
              },
              placeholder: getI18nString("slides.properties_panel.link_panel.placeholder"),
              property: d,
              recordingKey: generateRecordingKey(e, "link"),
              children: x.map(t => jsx(_$$c$, {
                value: {
                  type: "guid",
                  guid: parseSessionLocalID(t)
                },
                recordingKey: generateRecordingKey(e, t)
              }, t))
            })
          })
        }),
        label: null
      })]
    })
  });
}
class cw extends _$$c$ {}
class cO extends LN {
  isEqual(e, t) {
    return 1e-5 > Math.abs(e - t);
  }
}
let cA = [0.1, 0.3, 0.5, 0.8, 1];
function cL({
  recordingKey: e
}) {
  let t = useDispatch<AppDispatch>();
  let i = useDropdownState();
  let [n, l] = useSelectionProperty("opacity");
  let a = new cO();
  let o = void 0 === n || isInvalidValue(n) ? MIXED_MARKER : n;
  let d = jsx(_$$N2, {});
  return jsx(_$$k7, {
    name: "slides_opacity_panel",
    children: jsx(bz, {
      titleTx: renderI18nText("slides.properties_panel.opacity"),
      input: jsx(AutoInteractableWrapper, {
        name: "slides_opacity_dropdown",
        children: jsx(_$$ow, {
          value: {
            select: pW,
            inputComponent: gm
          },
          children: jsx(_$$tV, {
            value: {
              chevron: ChevronContainer
            },
            children: jsx(ScaleInput, {
              "data-tooltip": getI18nString("slides.properties_panel.opacity"),
              "data-tooltip-type": KindEnum.TEXT,
              dispatch: t,
              dropdownShown: i,
              enablePreview: !0,
              formatter: a,
              icon: d,
              id: "opacity-select",
              max: 1,
              min: 0,
              onValueChange: e => {
                l(e);
              },
              recordingKey: generateRecordingKey(e, "opacity"),
              tooltipForScreenReadersOnly: !1,
              value: o,
              willShowDropdown: () => (fullscreenValue.commit(), Promise.resolve()),
              children: cA.map(t => jsx(cw, {
                value: t,
                recordingKey: generateRecordingKey(e, "opacity", "select", t),
                children: a.format(t)
              }, `opacity-${t}`))
            })
          })
        })
      })
    })
  });
}
function cR(e) {
  return !!(e?.TEXT && e.TEXT > 0);
}
function cM({
  colorFormat: e,
  dropdownShown: t,
  library: i,
  pickerShown: n,
  sceneGraphSelection: l,
  shownPanels: d,
  stylePickerListLayout: c
}) {
  let u = useDispatch<AppDispatch>();
  let p = selectCurrentFile();
  let {
    numSelectedByType
  } = useNonMixedSelectionPropertyValues("numSelectedByType");
  let h = SJ();
  let {
    jsxNodeId
  } = _$$f2();
  return d[ItemType.PENCIL_TOOL] ? jsx(useCachedSubtree, {
    isVisible: !0,
    children: () => jsx(_$$q4, {
      id: "pencilToolPanel",
      recordingKey: "pencilToolPanel",
      openFile: p
    }, "pencilToolPanel")
  }) : jsxs(TabLoop, {
    children: [jsx(useCachedSubtree, {
      isVisible: _$$d4(d) && !(numSelectedByType && vx(numSelectedByType, "SLIDE")) && !jsxNodeId,
      children: () => jsx(dr, {
        recordingKey: "slidesAlignPanel"
      })
    }), jsx(dt, {}), jsx(_$$h5, {}), getFeatureFlags().react_scenegraph && jsx(useCachedSubtree, {
      isVisible: d[ItemType.JSX_ITEM],
      children: () => jsx(_$$_6, {})
    }), jsx(useCachedSubtree, {
      isVisible: d[ItemType.SLIDES_THEME],
      children: () => jsx(am, {
        recordingKey: "slidesThemePanel"
      })
    }), jsx(useCachedSubtree, {
      isVisible: d[ItemType.FILL_ITEM],
      children: () => jsx(ch, {
        recordingKey: "slidesFillPanel"
      })
    }), jsx(useCachedSubtree, {
      isVisible: d[ItemType.SLIDES_OPACITY_ITEM],
      children: () => jsx(cL, {
        recordingKey: "slidesOpacityPanel"
      })
    }), jsx(useCachedSubtree, {
      isVisible: d[ItemType.STROKE_ITEM],
      children: () => jsx(dw, {
        recordingKey: "slidesCornerPanel"
      })
    }), jsx(useCachedSubtree, {
      isVisible: d[ItemType.STROKE_ITEM] && !cR(numSelectedByType),
      children: () => jsx(df, {
        recordingKey: "slidesBorderPanel"
      })
    }), jsx(useCachedSubtree, {
      isVisible: d[ItemType.EFFECTS_ITEM],
      children: () => jsx(_$$J7, {
        recordingKey: "slidesShadowPanel"
      })
    }), jsx(useCachedSubtree, {
      isVisible: d[ItemType.TYPE_ITEM] && !!numSelectedByType && cR(numSelectedByType) && OU(numSelectedByType, ["TEXT"]),
      children: () => jsx(cC, {
        recordingKey: "slidesLinkPanel"
      })
    }), jsx(useCachedSubtree, {
      isVisible: h,
      children: () => jsx(UA, {
        colorFormat: e,
        customColorPicker: GY,
        defaultColor: defaultGrayColor,
        dispatch: u,
        dropdownShown: t,
        hideCustomColorPickerFillTypeToggle: !1,
        library: i,
        openFile: p,
        pickerShown: n,
        recordingKey: "selectionPaintsPanel",
        sceneGraphSelection: l,
        stylePickerListLayout: c
      }, "selection-paints")
    }), jsx(useCachedSubtree, {
      isVisible: d[ItemType.SLIDES_EMBED],
      children: () => jsx(dF, {})
    }), jsx(useCachedSubtree, {
      isVisible: d[ItemType.SLIDES_INTERACTIVE_WIDGET],
      children: () => jsx(cf, {
        selection: l
      })
    }), getFeatureFlags().jsx_debugging && jsx(_$$Ay3, {
      recordingKey: "jsxDebugPanel"
    }), jsx(useCachedSubtree, {
      isVisible: !0,
      children: () => jsx(Fragment, {})
    })]
  });
}
function cF({
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
  S2();
  let p = getObservableValue(AppStateTsApi?.interopToolMode(), SelfDesignType.SELF);
  let x = useCallback(e => {
    switch (e) {
      case DesignWorkspace.DESIGN:
      case DesignWorkspace.SLIDE:
        return p === SelfDesignType.SELF ? DesignWorkspace.SLIDE : DesignWorkspace.DESIGN;
      default:
        return e;
    }
  }, [p]);
  let h = P5({
    defaultTab: DesignWorkspace.SLIDE,
    getActiveTab: x
  });
  let _ = useCallback(() => h === DesignWorkspace.DESIGN ? "design_view" : "slide_view", [h]);
  let g = useAppModelProperty("topLevelMode");
  let f = G$();
  let j = g !== ViewType.PREVIEW && (g !== ViewType.BRANCHING || !f) && g !== ViewType.DEV_HANDOFF;
  let b = j && h === DesignWorkspace.DESIGN;
  let E = j && h === DesignWorkspace.SLIDE;
  let v = j && h === DesignWorkspace.SLIDE_ANIMATION;
  let T = h === DesignWorkspace.COMMENT;
  return jsx(_$$j, {
    trackingAlwaysEnabled: !0,
    recordingKey: "propertiesPanel",
    activeTab: h,
    getPanelMode: _,
    children: jsxs(lQ, {
      children: [b && jsx(af, {
        ...u,
        colorFormat: t,
        dropdownShown: i,
        library: n,
        pickerShown: s,
        sceneGraphSelection: o,
        shownPanels: d,
        stylePickerListLayout: c
      }), E && jsx(cM, {
        colorFormat: t,
        dropdownShown: i,
        library: n,
        pickerShown: s,
        sceneGraphSelection: o,
        shownPanels: d,
        stylePickerListLayout: c
      }), v && jsx(sK, {
        shownPanels: d
      }), T && jsx(e, {})]
    })
  });
}
let cU = memo(function () {
  let e = getColorFormat();
  let t = selectCurrentFile();
  let i = useDropdownState();
  let n = Xo();
  let a = GV();
  let o = !!selectCurrentUser();
  let {
    setPropertiesPanelCollapsed
  } = _$$iT();
  useEffect(() => {
    o || setPropertiesPanelCollapsed(!0);
  }, [setPropertiesPanelCollapsed, o]);
  let c = useSelector(e => e.installedPluginVersions);
  let u = useSelector(e => e.library);
  let p = useSelector(e => e.localPlugins);
  let x = useSelector(e => e.modalShown);
  let h = useSelector(e => e.publishedPlugins);
  let m = useSelector(e => e.saveAsState);
  let g = useSelector(e => e.stylePickerListLayout);
  let y = useSelector(e => e.stylePickerShown);
  let f = useSelector(e => e.pickerInStyleCreationShown);
  let j = useSelector(e => e.mirror.sceneGraphSelection);
  return jsxs(_$$o3, {
    boundaryKey: "SlidesPropertiesPanel",
    children: [jsx(cF, {
      CommentsTab: _$$L,
      allSavedPlugins: c,
      colorFormat: e,
      dropdownShown: i,
      library: u,
      localPlugins: p,
      modalShown: x,
      openFile: t,
      pickerInStyleCreationShown: f,
      pickerShown: n,
      publishedPlugins: h,
      saveAsState: m,
      sceneGraphSelection: j,
      shownPanels: a,
      stylePickerListLayout: g,
      stylePickerShown: y
    }), jsx(_$$tZ, {})]
  });
});
let cK = memo(({
  shouldShowDragAndDropBorder: e
}) => {
  let t = useSelector(e => e.progressBarState);
  let i = useAppModelProperty("loadingEmbeds");
  let n = getObservableValue(AppStateTsApi?.uiState().showCanvasSearch, !1);
  let k = Lk();
  let O = useRef(null);
  let A = selectCurrentFile();
  let L = A ? A.key : "";
  let G = useAppModelProperty("showUi");
  let H = useSelector(e => e.universalInsertModal);
  let Y = useDispatch<AppDispatch>();
  let q = wd();
  useFileLibrarySubscriptions(L);
  _$$W();
  g2();
  useEffect(() => () => {
    B3(JT.SLIDES_GENERATE_OUTLINE);
    B3(JT.SLIDES_OUTLINE_TO_DECK);
  }, []);
  (function () {
    let {
      Sprig
    } = useSprigWithSampling();
    let t = getObservableValue(AppStateTsApi?.interopToolMode(), SelfDesignType.SELF);
    useEffect(() => {
      t === SelfDesignType.DESIGN && Sprig("track", "enter_slides_design_mode");
    }, [Sprig, t]);
  })();
  (function () {
    let e = AppStateTsApi?.slidesObjectAnimationPreviewManager();
    let t = getObservableValue(e?.animationPreviewSlideId, defaultSessionLocalIDString);
    let i = isValidSessionLocalID(parseSessionLocalID(t));
    let n = useCallback(() => {
      _$$l3.user("abort-object-animation-preview", () => {
        AppStateTsApi?.slidesObjectAnimationPreviewManager().abortObjectAnimationPreview(t);
      });
    }, [t]);
    useEffect(() => (i && (window.addEventListener("keydown", n), window.addEventListener("mousedown", n)), () => {
      window.removeEventListener("keydown", n);
      window.removeEventListener("mousedown", n);
    }), [i, n]);
  })();
  let W = getObservableValue(AppStateTsApi?.singleSlideView()?.isInFocusedNodeView, !0);
  let J = getFeatureFlags().piper_design_mode_v2;
  return q ? jsx(P, {
    children: jsx(_$$G, {
      children: jsx(im, {})
    })
  }) : jsxs(P, {
    children: [jsx(ED, {}), jsxs(_$$sk, {
      children: [G && jsx(Ah, {}), t.mode !== UIVisibilitySetting.OFF && jsx("div", {
        className: _q
      }), jsxs(pO, {
        initialFilterState: {
          currentPage: !1
        },
        children: [i.map(e => jsx(_$$_, {
          nodeId: e
        }, `loading-embed-${e}`)), jsx(qn, {}), jsx(_$$u2, {}), jsx(_$$H, {}), n && jsx(_$$n, {}), jsx(_$$G2, {}), jsx(_$$b, {}), jsx(_$$J2, {}), jsx(XI, {
          commentsDetailContainerRef: O
        }), jsx(Nz, {}), jsx(_$$J, {}), jsx("div", {
          ref: O
        }), !isVsCodeEnvironment() && jsx(_$$m, {
          role: "region",
          "aria-label": getI18nString("fullscreen_actions.left_sidebar_label"),
          children: J ? jsx(_$$K2, {}) : jsx(SG, {})
        }), jsxs(_$$G, {
          children: [jsx(rB, {}), jsx(cU, {})]
        }), jsx(_$$m, {
          role: "region",
          "aria-label": getI18nString("fullscreen_actions.speaker_notes_overlay.aria_label"),
          children: jsx(lO, {})
        }), e && jsx(X5, {})]
      }), jsx(_$$A, {
        editorType: FEditorType.Slides,
        openFile: A
      }), jsx(_$$l, {
        defaultViewTabsAvailable: !0,
        defaultViewAssetsTabVisible: !0,
        centeredInPanels: W
      }), H.showing && jsx(ErrorBoundaryCrash, {
        boundaryKey: "FigJamBrowseAllResourcesModal",
        onError: () => {
          Y(VisualBellActions.enqueue({
            message: "Unable to open inserts menu",
            type: "react-error"
          }));
        },
        fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
        children: jsx(_$$K4, {})
      }), jsx(cB, {})]
    }), k && jsx(_$$K, {
      className: PA,
      children: jsx(_$$s3, {})
    }), getFeatureFlags().piper_auto_rename && jsx(cz, {})]
  });
});
export function $$c$0() {
  let [e, t] = useState(!1);
  return jsx(_$$c, {
    children: jsx(_$$v, {
      setShouldShowDragAndDropBorder: t,
      isDragTarget: !1,
      children: jsx(cK, {
        shouldShowDragAndDropBorder: e
      })
    })
  });
}
function cB() {
  !function () {
    let e = getObservableValue(AppStateTsApi?.canvasGrid().slideNumbers, new Set());
    let t = n6();
    useEffect(() => {
      let [i, n, r] = n3(t);
      Array.from(e).forEach(e => {
        let l = getSingletonSceneGraph().get(e);
        if (!l || !l.isSlideNumber) return;
        let s = n8(l.containingSlideId, l.slideNumber, l.slideNumberSeparator || "/", t, i, n, r);
        _$$l3.system("update-slide-numbers", () => {
          executeInIgnoreUndoRedoScope(() => {
            l.textContent !== s && (l.textContent = s);
          });
        });
      });
    }, [t, e]);
  }();
  return jsx(Fragment, {});
}
function cz() {
  !function () {
    let e = selectCurrentFile();
    let t = useAtomWithSubscription(autosaveFileInfoAtom);
    (function (e, t) {
      let i = e?.name || t?.name;
      let n = !!i && i !== getI18nString("fullscreen.filename_view.title_placeholder");
      let r = useSelector(e => e.isRenaming);
      let o = useRef(n);
      let d = useDeepEqualSceneValue(e => !!e.get(AppStateTsApi?.canvasGrid().gridGUID() || "-1:-1"));
      let u = !useAppModelProperty("isReadOnly");
      let p = useRef(u);
      p.current = u;
      useEffect(() => {
        p.current && d && !o.current && lU(!0);
      }, [d]);
      useEffect(() => {
        r && lU(!1);
      }, [r]);
    })(e, t);
    let i = function (e, t) {
      let i = useRef(e);
      i.current = e;
      let n = useRef(t);
      n.current = t;
      let r = useDispatch<AppDispatch>();
      let a = getAtomMutate(renameAutosaveFileMutation);
      let o = selectCurrentUser();
      let d = yZ();
      let c = useMemo(() => !o || !d || !_$$DF(e, o), [o, d, e]);
      return useCallback(e => {
        !c && (!i.current && n.current ? a({
          fileKey: n.current.fileKey,
          source: OfflineFileType.EDITOR,
          name: e
        }) : i.current && r(renameFileOptimistic({
          file: i.current,
          name: e
        })));
      }, [r, a, c]);
    }(e, t);
    let n = useDeepEqualSceneValue(e => {
      let t = AppStateTsApi?.canvasGrid().gridGUID();
      if (!t) return !1;
      let i = e.get(t);
      return !!i && i.autoRename;
    });
    let r = getObservableValue(AppStateTsApi?.canvasGrid().canvasGridArray, []);
    let o = getObservableValue(AppStateTsApi?.slideThumbnailEdits(), lF);
    let d = r[0]?.[0] || "-1:-1";
    let [u] = useDebounce(o.get(d) || 0, 1e3);
    useEffect(() => {
      if (!n || u <= 1 || !Fullscreen) return;
      let e = documentStateTsApi?.getMutableActiveDocument();
      if (!e) return;
      let t = Fullscreen.getTitleTextForSlide(d, e);
      t && t.trim().length && i(t.substring(0, 30));
    }, [u, d, n, i]);
  }();
  return jsx(Fragment, {});
}
export const SlidesView = $$c$0;