import { stylex } from '@stylexjs/stylex';
import rh from 'classnames';
import { produce } from 'immer';
import { noop } from 'lodash-es';
import { createElement, PureComponent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { H as _$$H2, unmountComponentAtNode } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { useDebounce } from 'use-debounce';
import { reportError, reportNullOrUndefined, setTagGlobal } from '../905/11';
import { isWidgetRendering } from '../905/2122';
import { PluginAction } from '../905/15667';
import { ACTIVITY_LOG_STORE, createSessionGreaterEqualKeyRange, createSessionNodeKeyRange, EDITOR_SESSIONS_STORE, executeDatabaseTransaction, getAutosaveDatabaseWithErrorHandling, NEW_FILES_STORE, NODE_CHANGES_STORE, SESSION_INDEX } from '../905/25189';
import { handleKeyboardShortcutUsage, setKeyboardShortcutPanelTab } from '../905/26824';
import { isFullscreenSlidesView } from '../905/35881';
import { fullscreenAlias, initializeFullscreenAPI } from '../905/37051';
import { ModalFormContents, ModalRootComponent } from '../905/38914';
import { initializeNetworkRequestHandler } from '../905/41973';
import { p as _$$p } from '../905/42189';
import { e as _$$e3, N as _$$N } from '../905/55273';
import { e as _$$e2 } from '../905/58247';
import { K as _$$K2 } from '../905/63322';
import { KeyCodes } from '../905/63728';
import { setupReturnToInstanceHandler } from '../905/65216';
import { m as _$$m2 } from '../905/70820';
import { z as _$$z2 } from '../905/95280';
import { ModalSupportsBackground, registerModal } from '../905/102752';
import { e5 as _$$e5 } from '../905/104019';
import { Z as _$$Z2 } from '../905/104740';
import { q as _$$q2, w as _$$w3 } from '../905/112768';
import { setUniversalInsertModalOpen, handlePinningState, closeUniversalInsertModal } from '../905/116101';
import { u as _$$u } from '../905/117966';
import { fullscreenPerfManager } from '../905/125218';
import { ez as _$$ez, lC as _$$lC, _o, GI, HV, IZ, qL, SK, U9, Vi, W6, wp, yE } from '../905/125333';
import { J as _$$J5 } from '../905/125483';
import { setupAutofocusHandler } from '../905/128376';
import { KindEnum } from '../905/129884';
import { interactiveSlideElementInsertedEmitter } from '../905/142432';
import { migrateLegacySpellCheckLanguage } from '../905/145989';
import { n as _$$n4 } from '../905/155450';
import { hideModal, hideModalHandler, hideSpecificModal, showModal, showModalConditional, showModalHandler } from '../905/156213';
import { TrackedLink } from '../905/160095';
import { F as _$$F3 } from '../905/162860';
import { ServiceCategories } from '../905/165054';
import { NotificationCategory } from '../905/170564';
import { d as _$$d3 } from '../905/189168';
import { scopeAwareFunction as _$$nc, permissionScopeHandler } from '../905/189185';
import { PinningState } from '../905/192333';
import { AUTH_INIT } from '../905/194276';
import { isStackOverflowError } from '../905/194389';
import { Cg } from '../905/195479';
import { g as _$$g3 } from '../905/211118';
import { normalizeValue } from '../905/216495';
import { transformLibraryFileData } from '../905/217163';
import { widgetInteractionTracker } from '../905/223332';
import { shouldEnableFeedbackCategory } from '../905/226610';
import { Ag as _$$Ag } from '../905/235578';
import { delay } from '../905/236856';
import { T as _$$T4 } from '../905/239551';
import { copyHyperlinkToClipboard, parseLinkForContext } from '../905/250387';
import { R as _$$R2 } from '../905/256203';
import { HiddenLabel, Label } from '../905/270045';
import { getPlanUserTeamAtomFamily } from '../905/276025';
import { AIActionStatus, AIActionResult } from '../905/278499';
import { Z as _$$Z4 } from '../905/279476';
import { Ay as _$$Ay8, Tr } from '../905/281495';
import { handleMissingFontsEula, splitFontsByEula } from '../905/291654';
import { createSavepoint } from '../905/294113';
import { w as _$$w } from '../905/294864';
import { _N, Vg } from '../905/300621';
import { VisualBellActions } from '../905/302958';
import { getI18nString, getI18nStringAlias, renderI18nText } from '../905/303541';
import { R as _$$R3 } from '../905/307199';
import { RadioInputRoot, RadioInputOption } from '../905/308099';
import { logAutosaveError, logAutosaveErrorWithOriginalMessage } from '../905/327522';
import { B as _$$B } from '../905/352524';
import { LogLevelStr } from '../905/361972';
import { jp, WS } from '../905/370597';
import { deepEqual } from '../905/382883';
import { generateUniqueKey } from '../905/383708';
import { x as _$$x4 } from '../905/392802';
import { isEffectOrGrid } from '../905/405710';
import { Dn } from '../905/407352';
import { debugState } from '../905/407919';
import { runProtected } from '../905/414069';
import { JI, Yj } from '../905/416496';
import { G as _$$G3 } from '../905/431526';
import { useModalManager } from '../905/437088';
import { Y as _$$Y } from '../905/438063';
import { Link } from '../905/438674';
import { ConfirmationModal } from '../905/441305';
import { ch } from '../905/443517';
import { s as _$$s8 } from '../905/445054';
import { trackEventAnalytics } from '../905/449184';
import { CM, xL, Yv } from '../905/459248';
import { SpellCheckEngine } from '../905/461516';
import { notificationActions } from '../905/463586';
import { isSpecialRoutePath } from '../905/470286';
import { enqueueNetworkErrorBell } from '../905/470594';
import { createPluginInstance } from '../905/472793';
import { formatI18nMessage } from '../905/482208';
import { Vy, zT } from '../905/484695';
import { sendHistogram } from '../905/485103';
import { as as _$$as, Dl } from '../905/487011';
import { bL as _$$bL2, c$, l9, mc } from '../905/493196';
import { J as _$$J4 } from '../905/494216';
import { k as _$$k3 } from '../905/498777';
import { handleAtomEvent } from '../905/502364';
import { r6 as _$$r2 } from '../905/507950';
import { createFileBehaviorAtom, FileChangeBehaviorEnum } from '../905/508457';
import { checkEligibilityStatus } from '../905/509613';
import { Vector2D } from '../905/512402';
import { RR } from '../905/514666';
import { v as _$$v3 } from '../905/516963';
import { dD } from '../905/519113';
import { Button } from '../905/521428';
import { canOpenUrlInDesktop, DesktopModalType, openUrlInDesktop, redirectToFontSettings } from '../905/535224';
import { h as _$$h4 } from '../905/537858';
import { P as _$$P2 } from '../905/540614';
import { reactTimerGroup } from '../905/542194';
import { r6 as _$$r } from '../905/542608';
import { fJ, x5 } from '../905/543054';
import { xK } from '../905/543466';
import { updateAppCapabilities } from '../905/544669';
import { PluginApiMetrics } from '../905/545265';
import { y8 as _$$y6 } from '../905/551193';
import { subscribeAndAwaitData } from '../905/553831';
import { $e } from '../905/554703';
import { requestDeferredExecution } from '../905/561433';
import { isSitesFeatureEnabled } from '../905/561485';
import { decodeBase64, encodeBase64 } from '../905/561685';
import { j as _$$j } from '../905/564614';
import { dequeuePluginStatus } from '../905/571565';
import { FlashActions } from '../905/573154';
import { isFigmaNativeApp } from '../905/575846';
import { VisualBellIcon } from '../905/576487';
import { l as _$$l2, q as _$$q } from '../905/578831';
import { ImageOrientationUtils } from '../905/580661';
import { initializeSceneGraphManager } from '../905/581543';
import { k as _$$k2 } from '../905/582200';
import { pS } from '../905/588985';
import { initJsKiwiSerialization } from '../905/591700';
import { getFeatureFlags } from '../905/601108';
import { observabilityClient } from '../905/602906';
import { OutOfMemoryHandler } from '../905/608122';
import { Timer } from '../905/609396';
import { customHistory, isMainAppRoute } from '../905/612521';
import { buildFileUrl } from '../905/612685';
import { isActiveAtom } from '../905/617744';
import { checkCanRunExtensions, handleSelectedView } from '../905/622391';
import { x as _$$x2 } from '../905/628884';
import { ButtonPrimitive } from '../905/632989';
import { parseQuery } from '../905/634134';
import { getSessionStorage, localStorageRef, useLocalStorageSync } from '../905/657224';
import { isLocalFileKey } from '../905/657242';
import { a6 as _$$a2, il as _$$il, pM as _$$pM, sd as _$$sd, tS as _$$tS, dE, Fo, GZ, Oc, PC, pV, PZ, RU, Uj, un, W9, WE, XF, zN } from '../905/661614';
import { fileKeyAtom } from '../905/662353';
import { getResourceDataOrFallback } from '../905/663269';
import { gG } from '../905/684180';
import { windowManagerInstance } from '../905/687477';
import { EventEmitter } from '../905/690073';
import { isFigmaDomain, replaceColonWithDash } from '../905/691205';
import { getSingletonSceneGraph, ReduxSceneGraph } from '../905/700578';
import { createPluginContext as _$$e8 } from '../905/700654';
import { X as _$$X } from '../905/701807';
import { y as _$$y } from '../905/705736';
import { replaceThumbnailsOptimist } from '../905/711212';
import { setComponentPropBindings } from '../905/714160';
import { logDebug, logError, logInfo, logWarning } from '../905/714362';
import { SvgComponent } from '../905/714743';
import { jk as _$$jk } from '../905/715541';
import { l as _$$l } from '../905/716947';
import { A as _$$A6 } from '../905/721854';
import { xP as _$$xP, d_, Gh } from '../905/727576';
import { Point } from '../905/736624';
import { qG, Qx } from '../905/742325';
import { c as _$$c3, s as _$$s7 } from '../905/744710';
import { useWindowDimensions } from '../905/745972';
import { DraggableModalManager } from '../905/748636';
import { AuthModal } from '../905/749159';
import { y as _$$y5 } from '../905/749689';
import { generateRandomID, handlePluginError, pluginState } from '../905/753206';
import { setScenegraphStringManagementBindings } from '../905/755627';
import { Z as _$$Z } from '../905/757420';
import { getCanvasViewState, subscribeVisualBellSettings } from '../905/758967';
import { isBranchAlt } from '../905/760074';
import { getValueAtIndex, hasKey } from '../905/764747';
import { getSelectedFile } from '../905/766303';
import { M as _$$M2 } from '../905/771870';
import { $$W8, $$z2, checkForNewlyInstalledFonts, fetchFontList, hasLocalFontsAvailable, setFontsInitialized, setLocalFontsModifiedTimestamp, updateFontList } from '../905/777093';
import { O4 } from '../905/777187';
import { s as _$$s5 } from '../905/780421';
import { isFullscreenDevHandoffView } from '../905/782918';
import { cq } from '../905/794154';
import { setBranchingWebBindings } from '../905/797453';
import { mapEditorTypeTo } from '../905/808775';
import { defaultLanguage } from '../905/816253';
import { EventShield } from '../905/821217';
import { setupPluginCodeCache } from '../905/827944';
import { getSceneGraphInstance } from '../905/830071';
import { parseInteger } from '../905/833686';
import { getOrgByCurrentUserId } from '../905/845253';
import { useDropdownState } from '../905/848862';
import { f8 } from '../905/850476';
import { s2 as _$$s3, A9, bT, E9, mK } from '../905/851937';
import { savepointOptimistThunk } from '../905/852057';
import { y as _$$y2 } from '../905/855374';
import { n3 as _$$n, F7, Rf } from '../905/859698';
import { FDocumentType, isSupportedBlockType, ITemplateType } from '../905/862883';
import { defaultSessionLocalIDString, parseSessionLocalID } from '../905/871411';
import { generateUUIDv4 } from '../905/871474';
import { B as _$$B5 } from '../905/872019';
import { setLocalStyleSelection } from '../905/879323';
import { Db } from '../905/881862';
import { g5, Iz, uM, wv } from '../905/888175';
import { initializeWebGPUContext, runWebGPUCompatibilityTests, logWebGPUInitializationStatus, getWebGPUInitializationStatus, initializeWebGPUDevice } from '../905/889931';
import { WAFValidationHandlerInstance } from '../905/898440';
import { initializePdfImportManager } from '../905/901759';
import { autosaveErrorModal } from '../905/906499';
import { sendWithRetry } from '../905/910117';
import { bL } from '../905/911410';
import { fullscreenCrashHandler } from '../905/913008';
import { debounce } from '../905/915765';
import { a7 as _$$a4 } from '../905/917898';
import { sZ as _$$sZ, J5, jd, K8, O8, Vq } from '../905/920793';
import { hD } from '../905/921139';
import { hideDropdownAction, selectViewAction, showDropdownThunk, updateDropdownSelectionAction } from '../905/929976';
import { Legend } from '../905/932270';
import { c as _$$c5 } from '../905/932790';
import { parse, unparse } from '../905/945633';
import { AssetTabType, ExtensionFeatureKey } from '../905/946805';
import { $3 } from '../905/946937';
import { DEFAULT_PICKER_WIDTH } from '../905/959568';
import { L as _$$L } from '../905/970585';
import { n as _$$n5 } from '../905/971006';
import { setupMultiplayerSession } from '../905/977824';
import { postUserFlag } from '../905/985254';
import { K as _$$K } from '../905/987240';
import { Rz } from '../905/990497';
import { Ts as _$$Ts, qV } from '../905/994545';
import { A as _$$A3 } from '../4711/61765';
import { A as _$$A2 } from '../4711/145260';
import { A as _$$A4 } from '../4711/621307';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { trackDefinedFileEventWrapper } from '../figma_app/2590';
import { o$ as _$$o$, t4 as _$$t2, C9, K9, ku, uR, W_, wi } from '../figma_app/8833';
import { parseEditorStateToPlainText } from '../figma_app/9619';
import { canEditBasedOnPlan, checkZoomWidgetAccess, isExportRestricted } from '../figma_app/12796';
import { bJ as _$$bJ } from '../figma_app/16595';
import { useIsFullscreenSlidesView } from '../figma_app/21029';
import { atomStoreManager, useAtomWithSubscription } from '../figma_app/27355';
import { initializeAssetMirrorManager } from '../figma_app/31188';
import { LibraryKeyToFileLink } from '../figma_app/43951';
import { FEditorType, isDesignOrIllustration, mapYFToEditorType } from '../figma_app/53721';
import { sF as _$$sF, zJ } from '../figma_app/59657';
import { J as _$$J2 } from '../figma_app/61771';
import { computeFullscreenViewportForNode, globalViewportPromise, resetGlobalViewportPromise } from '../figma_app/62612';
import { xP } from '../figma_app/65182';
import { XR } from '../figma_app/67099';
import { gh } from '../figma_app/76123';
import { $m } from '../figma_app/78808';
import { createObjectUrlFromBuffer, fetchAndProcessComponentPublishingBuffers, fetchAndProcessVariablePublishingBuffers, teamLibraryCache } from '../figma_app/80990';
import { getObservableOrFallback } from '../figma_app/84367';
import { checkResourceEligibilityDebug } from '../figma_app/86989';
import { getDevModeFocusId, isFullscreenOverview } from '../figma_app/88239';
import { handleAutosaveAndNavigationThunk, hideDowntimeBanner, hidePickerThunk, setCanvasMentionPopup, setFileVersion, setHyperlinkPopup, setLeftPanelTab, showDowntimeBanner, showOpenDesktopAppModal, showPickerThunk, updateCanvasMentionPopupPosition, updateFontListAction, updateHyperlinkPopupPosition, updateLocalFontAgentVersion, updateSelectedStyleProperties, updateSelectedStyleThumbnailUrl } from '../figma_app/91703';
import { tO as _$$tO } from '../figma_app/98072';
import { zs } from '../figma_app/106634';
import { Nl, sitesViewSetterAtomFamily } from '../figma_app/115923';
import { startAutosaveWait } from '../figma_app/139113';
import { isQaSearchFrecencyEnabled } from '../figma_app/144974';
import { addWhiteboardToolToRecentsAction, addWidgetToRecentsThunk } from '../figma_app/147952';
import { H as _$$H } from '../figma_app/147959';
import { sendWebGLInitializationAnalytics } from '../figma_app/149304';
import { Dc as _$$Dc, hV } from '../figma_app/151766';
import { getTimeRemaining } from '../figma_app/152368';
import { hasLocalFileId, ManifestEditorType, PluginInstallStatus } from '../figma_app/155287';
import { useDeepEqualSceneValue } from '../figma_app/167249';
import { buildStaticUrl, buildUploadUrl, getInitialOptions, getSupportEmail, isDevEnvironment } from '../figma_app/169182';
import { jx } from '../figma_app/171569';
import { dispatchShowVisualBell } from '../figma_app/172303';
import { v as _$$v } from '../figma_app/176476';
import { XT as _$$XT, _I } from '../figma_app/176634';
import { NumericInput, ScrubbableInput } from '../figma_app/178475';
import { APIParameterUtils, createNoOpValidator } from '../figma_app/181241';
import { parseHex } from '../figma_app/191804';
import { LC } from '../figma_app/192142';
import { isWorkshopModeActive } from '../figma_app/193867';
import { yesNoTrackingEnum } from '../figma_app/198712';
import { Nh } from '../figma_app/201703';
import { initializeFullscreenConfig } from '../figma_app/204937';
import { no as _$$no } from '../figma_app/209965';
import { YL } from '../figma_app/213643';
import { Wj } from '../figma_app/224338';
import { N as _$$N3 } from '../figma_app/240060';
import { T6 } from '../figma_app/242565';
import { mr, U2 } from '../figma_app/247611';
import { hasJubileePermissionForWhiteboard } from '../figma_app/251115';
import { fT as _$$fT } from '../figma_app/260703';
import { n as _$$n3 } from '../figma_app/264395';
import { z4 } from '../figma_app/266084';
import { $W } from '../figma_app/268172';
import { DialogActionStrip, DialogBody, DialogContents, DialogFooter, DialogHeader, DialogTitle } from '../figma_app/272243';
import { Dl as _$$Dl, fetchImageData, MAX_CANVAS_SIZE } from '../figma_app/291892';
import { pN } from '../figma_app/292212';
import { initializeWasm } from '../figma_app/298277';
import { PR } from '../figma_app/299859';
import { getFullscreenViewEditorType, getWidgetVersionData, isWidgetPlugin, loadLocalPluginSource, loadPluginManifest, PluginPermissions, showVisualBell } from '../figma_app/300692';
import { Z as _$$Z3 } from '../figma_app/301719';
import { u1 as _$$u2, zi } from '../figma_app/305244';
import { Tv, Zl } from '../figma_app/311375';
import { logAndTrackCTA, mapEditorTypeToProductType, trackFileEvent, trackGenericEvent, trackUserEvent } from '../figma_app/314264';
import { _d, P5 } from '../figma_app/318590';
import { $I, iP as _$$iP, h$, jD, Jf, KY } from '../figma_app/322845';
import { c3 } from '../figma_app/327577';
import { cS, Zo } from '../figma_app/334459';
import { getCurrentUserOrg } from '../figma_app/336853';
import { n as _$$n2 } from '../figma_app/339971';
import { Kx } from '../figma_app/342355';
import { xQ } from '../figma_app/345195';
import { hasTeamPaidAccess } from '../figma_app/345997';
import { Qy, v$ } from '../figma_app/347120';
import { isMobileDevice, determineFrameType } from '../figma_app/349969';
import { KE as _$$KE } from '../figma_app/351862';
import { pi as _$$pi, TY, Yh } from '../figma_app/357047';
import { pH } from '../figma_app/357433';
import { IU } from '../figma_app/357655';
import { getI18nState } from '../figma_app/363242';
import { isValidWidgetType, widgetHandlerMap } from '../figma_app/364284';
import { Yg } from '../figma_app/365713';
import { vE } from '../figma_app/376315';
import { initializeDefaultImagePaint } from '../figma_app/385874';
import { findVisibleSectionChild, getResponsiveChildren, isSpecialType } from '../figma_app/387100';
import { setMusicStateThunk, setStartChimePlayed, setTimerModalThunk, setTimerNotification, setTimerThunk } from '../figma_app/389091';
import { initializeShadowReadReporter } from '../figma_app/391338';
import { g as _$$g6 } from '../figma_app/398051';
import { sn as _$$sn, hf } from '../figma_app/407856';
import { figmaReady } from '../figma_app/415217';
import { bi as _$$bi, hg } from '../figma_app/425489';
import { cortexAPI } from '../figma_app/432652';
import { eY as _$$eY2 } from '../figma_app/442259';
import { U as _$$U } from '../figma_app/449815';
import { A0, R4 } from '../figma_app/454974';
import { fullscreenPromise, fullscreenValue, setAdditionalValue, setFlagValue, setFullscreen, setInputValue, setModalValue, setSessionValue, setUserValue, userValue } from '../figma_app/455680';
import { isAIFeaturesDisabled, isEditDisabled, isLlamaEnabledForOrg } from '../figma_app/459490';
import { EA } from '../figma_app/462456';
import { debug, throwTypeError } from '../figma_app/465776';
import { T as _$$T2 } from '../figma_app/472024';
import { updateKeyboardLayoutPreference, getCurrentKeyboardLayout } from '../figma_app/475303';
import { _ as _$$_2 } from '../figma_app/485258';
import { pP } from '../figma_app/492354';
import { SavepointModalContainer } from '../figma_app/504415';
import { ZH } from '../figma_app/504823';
import { getFullscreenViewFile, selectCurrentFile, transformOpenFileObject } from '../figma_app/516028';
import { ZS } from '../figma_app/519839';
import { oY as _$$oY } from '../figma_app/524655';
import { mQ } from '../figma_app/527668';
import { documentMode, getMemoryUsage, setHeapMemoryMode } from '../figma_app/527873';
import { getProcessedValueByKey } from '../figma_app/528509';
import { A9 as _$$A7 } from '../figma_app/533986';
import { Zb } from '../figma_app/539925';
import { eY as _$$eY, cB, cu, D2, Er, fb, FJ, FM, gU, H3, wh, xY } from '../figma_app/540726';
import { ni as _$$ni, G4, LK } from '../figma_app/545293';
import { _o as _$$_o } from '../figma_app/552821';
import { c3 as _$$c7, ZI } from '../figma_app/553940';
import { initializeMissingFontTracker, trackShowMissingFontsPopover } from '../figma_app/557318';
import { $Z, Cf } from '../figma_app/559491';
import { B as _$$B4 } from '../figma_app/560453';
import { singletonAsync } from '../figma_app/562352';
import { be, k6 } from '../figma_app/565197';
import { O as _$$O } from '../figma_app/568977';
import { wy } from '../figma_app/578011';
import { getNextSessionId, rejectAllSessionPromises, resolveSessionPromise, subscribeToContainingPage } from '../figma_app/582924';
import { PluginCallbacks, setupEventHandlers } from '../figma_app/603466';
import { Lk as _$$Lk, dd } from '../figma_app/604494';
import { nd as _$$nd } from '../figma_app/612001';
import { PluginManager } from '../figma_app/612938';
import { OX } from '../figma_app/617606';
import { _b as _$$_b, uP } from '../figma_app/618665';
import { getColorSpaceSupportStatus } from '../figma_app/622881';
import { copyTextToClipboard, copyTextWithPlainFallback } from '../figma_app/623293';
import { hasNotLoaded } from '../figma_app/623300';
import { batchDownloadImages } from '../figma_app/624361';
import { Id, JU } from '../figma_app/626177';
import { JT, zw } from '../figma_app/632248';
import { LIBRARY_PREFERENCES_MODAL, PrimaryWorkflowEnum, SubscriptionStatusEnum } from '../figma_app/633080';
import { BG as _$$BG } from '../figma_app/634288';
import { BigTextInputForwardRef, ButtonBaseReversedContainer } from '../figma_app/637027';
import { canMemberOrg } from '../figma_app/642025';
import { initializeNodeChangeHandler } from '../figma_app/644255';
import { selectStateGroupAssetsMap } from '../figma_app/645694';
import { CN, Wz } from '../figma_app/651866';
import { mapFilter } from '../figma_app/656233';
import { PluginModalTypeEnum } from '../figma_app/671547';
import { _p } from '../figma_app/675605';
import { fS } from '../figma_app/681244';
import { b6 } from '../figma_app/681697';
import { onNodeDragEnd, onNodeDragStart, onTileRendererChanged, performanceTracker, recordConnectDiagramShapeActive, recordCreateStickyActive, recordCreateTableActive, recordDifferentSectionClicked, recordEditTableTextActive, recordTileRenderingActive, setupPerformanceTracker } from '../figma_app/682945';
import { g as _$$g4 } from '../figma_app/683763';
import { YL as _$$YL } from '../figma_app/688194';
import { ph } from '../figma_app/709893';
import { pM } from '../figma_app/728005';
import { Om } from '../figma_app/731583';
import { qZ } from '../figma_app/738358';
import { EditorPreferencesApi, registerVisualBellSettingsListener } from '../figma_app/740163';
import { registerFullscreenEventHandlers, renameNode, setPropertiesPanelTab, updateFullscreenAppModel, updateSelectionProperties } from '../figma_app/741237';
import { WJ as _$$WJ, P1, S9 } from '../figma_app/745458';
import { s as _$$s4 } from '../figma_app/751989';
import { w as _$$w2 } from '../figma_app/757236';
import { cortexAnalyticsPluginIds } from '../figma_app/757723';
import { AppStateTsApi, AutosaveEventType, AutosaveHelpers, BaseNodeTsApiGenerated, BindingsPerfBench, CanvasComponentType, CanvasFacetTsApiGenerated, ColorProfileEnum, Command, ComponentishFacetTsApiGenerated, ComponentPropsAiCPPBindings, ConnectionState, ConnectorFacetTsApiGenerated, ConstraintsFacetTsApiGenerated, CorePerfInfo, DebuggingHelpers, DesignGraphElements, DesignSystemsInternalHelpers, DesignWorkspace, DocumentColorProfileEnum, DocumentMode, documentStateTsApi, EditChangeMode, EmailAction, EmbedPanelType, FigmaSite, FontHelpers, Fonts, FontSourceType, FrameFacetTsApiGenerated, Fullscreen, FullscreenPerfInfo, FullscreenWebSocketTsApi, ImageCppBindings, ImageExportType, ImageFormat, ImageToolsBindings, interactionTestHelpers, LayerFacetTsApiGenerated, Multiplayer, NodePropertyCategory, NodeTsApi, NodeTsApiGenerated, PageSelectionType, PanelType, PolygonFacetTsApiGenerated, PrototypingFacetTsApiGenerated, PrototypingTsApi, RenderableBaseFacetTsApiGenerated, RenderableRectangleFacetTsApiGenerated, SaveConnectionIssues, SceneGraphTsApi, SceneNodeCpp, SettingsAction, SourceType, StackFacetTsApiGenerated, StateSourceType, StyleFacetTsApiGenerated, SymbolOverrideType, TabMode, TextEditAction, TextFacetTsApiGenerated, TextModificationAction, Thumbnail, UserActionState, UserInterfaceElements, VectorFacetTsApiGenerated, ViewType, VisibilityCondition, WhiteboardAgendaCppBindings, WidgetFacetTsApiGenerated } from '../figma_app/763686';
import { BrowserInfo, isNotMobile } from '../figma_app/778880';
import { parsePxInt, parsePxNumber } from '../figma_app/783094';
import { fileApiHandler } from '../figma_app/787550';
import { T as _$$T } from '../figma_app/792332';
import { Ts as _$$Ts3 } from '../figma_app/793953';
import { handleEnterMode } from '../figma_app/806075';
import { setupHyperlinkHandler } from '../figma_app/815170';
import { G_h } from '../figma_app/822011';
import { isProtoViewerUrl } from '../figma_app/831696';
import { TrackingProvider } from '../figma_app/831799';
import { bi } from '../figma_app/836943';
import { dumpAutosaveData, getAutosaveManagerInstance, setupAutosaveManager } from '../figma_app/840917';
import { enterVersionHistoryMode, exitVersionHistoryMode, findVersionById } from '../figma_app/841351';
import { z6 } from '../figma_app/846841';
import { qb } from '../figma_app/857454';
import { LoadingSpinner } from '../figma_app/858013';
import { n as _$$n6 } from '../figma_app/860474';
import { ZW } from '../figma_app/861982';
import { B3 as _$$B3, Ag } from '../figma_app/862289';
import { userIdAtom } from '../figma_app/864723';
import { desktopAPIInstance } from '../figma_app/876459';
import { isRecordingEnabled } from '../figma_app/878298';
import { bJ } from '../figma_app/881578';
import { getInstanceKeys, getSingleSelectedKey, selectSceneGraph } from '../figma_app/889655';
import { a as _$$a } from '../figma_app/894185';
import { forwardKeyboardEvent } from '../figma_app/896988';
import { isInteractionPathCheck } from '../figma_app/897289';
import { i as _$$i3 } from '../figma_app/904127';
import { h as _$$h2 } from '../figma_app/907304';
import { fG } from '../figma_app/912411';
import { PluginRunForContext } from '../figma_app/915202';
import { handleEmbedPaste } from '../figma_app/916560';
import { base64ToUint8Array, escapeHtml, toWellFormed, truncate, uint8ArrayToBase64 } from '../figma_app/930338';
import { l7 as _$$l3 } from '../figma_app/932601';
import { insertSharedComponent, insertSharedStateGroup } from '../figma_app/933328';
import { hR as _$$hR } from '../figma_app/945605';
import { Ay as _$$Ay6 } from '../figma_app/948389';
import { rq as _$$rq } from '../figma_app/952446';
import { C as _$$C } from '../figma_app/959385';
import { x0, Zk } from '../figma_app/963341';
import { c as _$$c } from '../figma_app/968727';
import { e4 as _$$e7 } from '../figma_app/968938';
import { KD, Lk } from '../figma_app/975811';
import { getEditorTypeFromView } from '../figma_app/976749';
import { DEFAULT_ALLOWED_ORIGINS } from '../figma_app/985200';
import _require from '../vendor/89702';
import { hp } from '../vendor/162266';
import ah from '../vendor/223926';
import { deflateRaw } from '../vendor/323834';
import oA from '../vendor/805353';
let n;
let r;
function d(e) {
  let t = parseInteger(e, 0);
  let i = parseInteger(e, e.indexOf(':') + 1);
  if (!documentStateTsApi || !NodeTsApi) throw new Error('Bindings are not initialized');
  let n = documentStateTsApi.getActiveDocument();
  if (NodeTsApi.setGlobalUnstableNodeByID(n, t, i, StateSourceType.REDUX), !NodeTsApi.exists(StateSourceType.REDUX)) throw new Error('Missing node!');
}
function c(e, t) {
  let i = window.performance.now();
  for (; window.performance.now() < i + 1e3;) t();
  setTimeout(() => {
    let i = window.performance.now();
    t();
    let n = window.performance.now();
    console.log(`${e} took ${n - i}ms`);
  }, 8e3);
}
getInitialOptions().cluster_name !== 'prod' && (window.runGettersBenchmark = function () {
  let e = documentStateTsApi && SceneGraphTsApi?.getCurrentPage(StateSourceType.PLUGIN, documentStateTsApi.getActiveDocument());
  if (!e) throw new Error('Missing active page; run this bench in the editor');
  let t = window.performance.now();
  !function e(t, i) {
    if (i(t), d(t), !SceneNodeCpp) throw new Error('SceneNodeCpp undefined');
    for (let t of SceneNodeCpp.getReversedChildren(StateSourceType.REDUX)) e(t, i);
  }(e, e => {
    (function (e) {
      if (d(e), !NodeTsApi || !BaseNodeTsApiGenerated || !NodeTsApiGenerated || !SceneNodeCpp || !TextFacetTsApiGenerated || !SceneGraphTsApi || !documentStateTsApi || !ConnectorFacetTsApiGenerated || !RenderableRectangleFacetTsApiGenerated || !WidgetFacetTsApiGenerated || !CanvasFacetTsApiGenerated || !ComponentishFacetTsApiGenerated || !StackFacetTsApiGenerated || !VectorFacetTsApiGenerated || !PolygonFacetTsApiGenerated || !PrototypingFacetTsApiGenerated || !RenderableBaseFacetTsApiGenerated || !StyleFacetTsApiGenerated || !ConstraintsFacetTsApiGenerated || !LayerFacetTsApiGenerated || !FrameFacetTsApiGenerated) throw new Error('Bindings undefined');
      NodeTsApi.exists(StateSourceType.REDUX);
      BaseNodeTsApiGenerated.getType(StateSourceType.REDUX);
      NodeTsApi.getBooleanOperation(StateSourceType.REDUX);
      SceneNodeCpp.getFixedChildrenCount(StateSourceType.REDUX);
      PrototypingFacetTsApiGenerated.getOverflowDirection(StateSourceType.REDUX);
      RenderableRectangleFacetTsApiGenerated.getCornerRadius(StateSourceType.REDUX);
      SceneNodeCpp.getObjectsPanelThumbnailId();
      StyleFacetTsApiGenerated.getStyleType(StateSourceType.REDUX);
      NodeTsApi.getStackMode(StateSourceType.REDUX);
      StackFacetTsApiGenerated.getStackPositioning(StateSourceType.REDUX);
      NodeTsApi.getStackPrimaryAlignItems(StateSourceType.REDUX);
      StackFacetTsApiGenerated.getStackCounterAlignItems(StateSourceType.REDUX);
      FrameFacetTsApiGenerated.getResizeToFit(StateSourceType.REDUX);
      SceneNodeCpp.getHasEnabledStaticImagePaint(StateSourceType.REDUX);
      SceneNodeCpp.getHasEnabledAnimatedPaint(StateSourceType.REDUX);
      NodeTsApi.getIsInstanceSublayer(StateSourceType.REDUX);
      ComponentishFacetTsApiGenerated.getIsStateGroup(StateSourceType.REDUX);
      NodeTsApi.getIsState(StateSourceType.REDUX);
      NodeTsApi.getStateAbbreviatedName(StateSourceType.REDUX);
      RenderableBaseFacetTsApiGenerated.getIsFrameClippingDisabled(StateSourceType.REDUX);
      NodeTsApi.getIsExpandable(StateSourceType.REDUX);
      NodeTsApi.getIsSymbolPublishable(StateSourceType.REDUX);
      NodeTsApi.getIsTemporarilyExpanded(StateSourceType.REDUX);
      NodeTsApi.getIsExpanded(StateSourceType.REDUX);
      NodeTsApi.getLocked(StateSourceType.REDUX);
      NodeTsApiGenerated.getIsMask(StateSourceType.REDUX);
      LayerFacetTsApiGenerated.getVisible(StateSourceType.REDUX);
      NodeTsApi.getSimplifyInstancePanels(StateSourceType.REDUX);
      NodeTsApi.getName(StateSourceType.REDUX);
      NodeTsApi.getParent(StateSourceType.REDUX);
      NodeTsApiGenerated.getShapeWithTextType(StateSourceType.REDUX);
      NodeTsApi.getContainingStateGroupId(StateSourceType.REDUX);
      NodeTsApi.getContainingSymbolId(StateSourceType.REDUX);
      NodeTsApi.getSymbolId(StateSourceType.REDUX);
      NodeTsApi.getDescription(StateSourceType.REDUX);
      NodeTsApi.getStateGroupPropertyValueOrder(StateSourceType.REDUX);
      NodeTsApi.getSymbolLinks(StateSourceType.REDUX);
      NodeTsApi.getComponentKey(StateSourceType.REDUX);
      NodeTsApi.getStateGroupKey(StateSourceType.REDUX);
      NodeTsApi.getStyleKey(StateSourceType.REDUX);
      NodeTsApi.getStyleVersionHash(StateSourceType.REDUX);
      NodeTsApi.getSourceLibraryKey(StateSourceType.REDUX);
      NodeTsApi.getSharedSymbolVersion(StateSourceType.REDUX);
      NodeTsApi.getSharedStateGroupVersion(StateSourceType.REDUX);
      NodeTsApi.getPublishID(StateSourceType.REDUX);
      NodeTsApi.getTextContent(StateSourceType.REDUX);
      NodeTsApi.getFontName(StateSourceType.REDUX);
      NodeTsApi.getExportSettings(StateSourceType.REDUX);
      NodeTsApi.getChildren(StateSourceType.REDUX);
      SceneNodeCpp.getReversedChildren(StateSourceType.REDUX);
      NodeTsApi.getRichMediaInfo(StateSourceType.REDUX);
      NodeTsApi.getStampData(StateSourceType.REDUX);
      NodeTsApi.isFaceStamp(StateSourceType.REDUX);
      NodeTsApi.childrenAreAllGhosts(StateSourceType.REDUX);
      NodeTsApi.tableNumRows(StateSourceType.REDUX);
      NodeTsApi.tableNumColumns(StateSourceType.REDUX);
      NodeTsApi.tableCellRowIndex(StateSourceType.REDUX);
      NodeTsApi.tableCellColumnIndex(StateSourceType.REDUX);
      NodeTsApi.isUnderHiddenSection(StateSourceType.REDUX);
      NodeTsApi.getChildCount(StateSourceType.PLUGIN);
      SceneNodeCpp.getInstanceScaleFactor(StateSourceType.PLUGIN);
      NodeTsApi.getIsInImmutableFrame(StateSourceType.PLUGIN);
      NodeTsApi.getIsInWidget(StateSourceType.PLUGIN);
      SceneNodeCpp.getDirectlySelectedNodes(StateSourceType.PLUGIN);
      SceneNodeCpp.getSelectedTextRange(StateSourceType.PLUGIN);
      RenderableBaseFacetTsApiGenerated.getOpacity(StateSourceType.PLUGIN);
      NodeTsApi.getCornerRadiusOrMixed(StateSourceType.PLUGIN);
      RenderableRectangleFacetTsApiGenerated.getCornerSmoothing(StateSourceType.PLUGIN);
      RenderableBaseFacetTsApiGenerated.getStrokeWeight(StateSourceType.PLUGIN);
      SceneNodeCpp.getCharacters(StateSourceType.PLUGIN);
      NodeTsApi.getVariableDataValues(StateSourceType.PLUGIN);
      NodeTsApi.getVariableSetModesSorted(StateSourceType.PLUGIN);
      SceneNodeCpp.getEffectivePrototypeStartNodeId(StateSourceType.PLUGIN);
      SceneNodeCpp.getFlowStartingPoints(StateSourceType.PLUGIN);
      NodeTsApi.getSymbolId(StateSourceType.PLUGIN);
      CanvasFacetTsApiGenerated.getIsInternalOnly(StateSourceType.PLUGIN);
      NodeTsApiGenerated.getSize(StateSourceType.PLUGIN);
      NodeTsApi.getAbsoluteRenderBounds(StateSourceType.PLUGIN);
      NodeTsApi.getAbsoluteBoundingBox(StateSourceType.PLUGIN);
      NodeTsApi.getProportionsConstrained(StateSourceType.PLUGIN);
      NodeTsApiGenerated.getAbsoluteTransform(StateSourceType.PLUGIN);
      NodeTsApi.getRelativeTransform(StateSourceType.PLUGIN);
      ConstraintsFacetTsApiGenerated.getHorizontalConstraint(StateSourceType.PLUGIN);
      ConstraintsFacetTsApiGenerated.getVerticalConstraint(StateSourceType.PLUGIN);
      StackFacetTsApiGenerated.getStackSpacing(StateSourceType.PLUGIN);
      StackFacetTsApiGenerated.getStackCounterSpacing(StateSourceType.PLUGIN);
      StackFacetTsApiGenerated.getStackCounterSizing(StateSourceType.PLUGIN);
      StackFacetTsApiGenerated.getStackChildAlignSelf(StateSourceType.PLUGIN);
      NodeTsApi.getStackLeftPadding(StateSourceType.PLUGIN);
      NodeTsApi.getStackRightPadding(StateSourceType.PLUGIN);
      NodeTsApi.getStackTopPadding(StateSourceType.PLUGIN);
      NodeTsApi.getStackBottomPadding(StateSourceType.PLUGIN);
      StackFacetTsApiGenerated.getStackPrimarySizing(StateSourceType.PLUGIN);
      StackFacetTsApiGenerated.getStackChildPrimaryGrow(StateSourceType.PLUGIN);
      NodeTsApi.getStackReverseZIndex(StateSourceType.PLUGIN);
      TextFacetTsApiGenerated.getTextTruncation(StateSourceType.PLUGIN);
      RenderableRectangleFacetTsApiGenerated.getRectangleTopLeftCornerRadius(StateSourceType.PLUGIN);
      RenderableRectangleFacetTsApiGenerated.getRectangleTopRightCornerRadius(StateSourceType.PLUGIN);
      RenderableRectangleFacetTsApiGenerated.getRectangleBottomLeftCornerRadius(StateSourceType.PLUGIN);
      RenderableRectangleFacetTsApiGenerated.getRectangleBottomRightCornerRadius(StateSourceType.PLUGIN);
      RenderableRectangleFacetTsApiGenerated.getRectangleCornerRadiiIndependent(StateSourceType.PLUGIN);
      NodeTsApi.getStarInnerScale(StateSourceType.PLUGIN);
      PolygonFacetTsApiGenerated.getCount(StateSourceType.PLUGIN);
      NodeTsApiGenerated.getShapeWithTextType(StateSourceType.PLUGIN);
      SceneNodeCpp.getAuthorName(StateSourceType.PLUGIN);
      SceneNodeCpp.getAuthorVisible(StateSourceType.PLUGIN);
      ConnectorFacetTsApiGenerated.getConnectorStart(StateSourceType.PLUGIN);
      ConnectorFacetTsApiGenerated.getConnectorEnd(StateSourceType.PLUGIN);
      NodeTsApi.getConnectorStartCap(StateSourceType.PLUGIN);
      NodeTsApi.getConnectorEndCap(StateSourceType.PLUGIN);
      NodeTsApi.getCodeBlockLanguage(StateSourceType.PLUGIN);
      NodeTsApi.getAutoRename(StateSourceType.PLUGIN);
      NodeTsApi.getJsFillPaints(StateSourceType.PLUGIN);
      NodeTsApi.getJsStrokePaints(StateSourceType.PLUGIN);
      NodeTsApi.getBackgroundPaints(StateSourceType.PLUGIN);
      NodeTsApi.getPrototypeBackgroundColor(StateSourceType.PLUGIN);
      NodeTsApi.getLayoutGrids(StateSourceType.PLUGIN);
      NodeTsApi.getGuides(StateSourceType.PLUGIN);
      NodeTsApi.getJsEffects(StateSourceType.PLUGIN);
      NodeTsApi.getFillGeometry(StateSourceType.PLUGIN);
      NodeTsApi.getStrokeGeometry(StateSourceType.PLUGIN);
      RenderableBaseFacetTsApiGenerated.getBlendMode(StateSourceType.PLUGIN);
      RenderableBaseFacetTsApiGenerated.getStrokeAlign(StateSourceType.PLUGIN);
      NodeTsApi.getStrokeCap(StateSourceType.PLUGIN);
      NodeTsApi.getStrokeCapOrMixed(StateSourceType.PLUGIN);
      NodeTsApi.getStrokeJoin(StateSourceType.PLUGIN);
      NodeTsApi.getStrokeJoinOrMixed(StateSourceType.PLUGIN);
      NodeTsApi.getHandleMirroring(StateSourceType.PLUGIN);
      NodeTsApi.getHandleMirroringOrMixed(StateSourceType.PLUGIN);
      NodeTsApi.getStrokeMiterLimit(StateSourceType.PLUGIN);
      NodeTsApi.getDashPattern(StateSourceType.PLUGIN);
      TextFacetTsApiGenerated.getFontSize(StateSourceType.PLUGIN);
      NodeTsApi.getParagraphIndent(StateSourceType.PLUGIN);
      NodeTsApi.getParagraphSpacing(StateSourceType.PLUGIN);
      NodeTsApi.getListSpacing(StateSourceType.PLUGIN);
      TextFacetTsApiGenerated.getTextAlignHorizontal(StateSourceType.PLUGIN);
      TextFacetTsApiGenerated.getTextAlignVertical(StateSourceType.PLUGIN);
      TextFacetTsApiGenerated.getTextDecoration(StateSourceType.PLUGIN);
      NodeTsApi.getTextCase(StateSourceType.PLUGIN);
      TextFacetTsApiGenerated.getTextAutoResize(StateSourceType.PLUGIN);
      NodeTsApi.getLetterSpacing(StateSourceType.PLUGIN);
      VectorFacetTsApiGenerated.getArcData(StateSourceType.PLUGIN);
      NodeTsApi.getVectorData(StateSourceType.PLUGIN);
      NodeTsApi.getPrototypeInteractions(StateSourceType.PLUGIN);
      PrototypingFacetTsApiGenerated.getOverlayPositionType(StateSourceType.PLUGIN);
      NodeTsApi.getOverlayBackgroundAppearance(StateSourceType.PLUGIN);
      PrototypingFacetTsApiGenerated.getOverlayBackgroundInteraction(StateSourceType.PLUGIN);
      NodeTsApi.getSharedSymbolVersion(StateSourceType.PLUGIN);
      NodeTsApi.getSharedStateGroupVersion(StateSourceType.PLUGIN);
      NodeTsApi.getStyleVersion(StateSourceType.PLUGIN);
      SceneNodeCpp.getTextSublayer(StateSourceType.PLUGIN);
      SceneNodeCpp.getImmutableFrameLabel(StateSourceType.PLUGIN);
      NodeTsApi.getConnectorLineType(StateSourceType.PLUGIN);
      NodeTsApi.getIsEmbed(StateSourceType.PLUGIN);
      NodeTsApi.getIsLinkPreview(StateSourceType.PLUGIN);
      NodeTsApi.getLinkPreviewData(StateSourceType.PLUGIN);
      NodeTsApi.getEmbedData(StateSourceType.PLUGIN);
      NodeTsApi.getMediaData(StateSourceType.PLUGIN);
      SceneGraphTsApi.getCurrentPage(StateSourceType.PLUGIN, documentStateTsApi.getActiveDocument());
      WidgetFacetTsApiGenerated.getWidgetEvents(StateSourceType.PLUGIN);
      NodeTsApi.getWidgetId();
      NodeTsApi.getWidgetVersionId();
      NodeTsApi.getOverriddenInheritedFillStyles(StateSourceType.PLUGIN);
      NodeTsApi.getWidgetName();
      NodeTsApi.getWidgetSyncedState();
      NodeTsApi.getWidgetCachedAncestor();
      NodeTsApi.getRenderedSyncedState();
      NodeTsApi.getWidgetInputBehavior();
      WidgetFacetTsApiGenerated.getWidgetTooltip(StateSourceType.PLUGIN);
      NodeTsApi.getWidgetInputTextNodeType();
    })(e);
  });
  let i = window.performance.now();
  console.log(`Getters bench: ${i - t}ms`);
}, window.runBindingsBenchmark = function () {
  let e = BindingsPerfBench;
  if (!e) throw new Error('BindingsPerfBench is not initialized');
  c('10000 x [empty(): void]', () => {
    for (let t = 0; t < 1e4; t++) e.empty();
  });
  c('10000 x [returnsInt(): int]', () => {
    for (let t = 0; t < 1e4; t++) e.returnsInt();
  });
  c('10000 x [returnsString(): string]', () => {
    for (let t = 0; t < 1e4; t++) e.returnsString();
  });
  c('10000 x [returnsBuffer(): buffer]', () => {
    for (let t = 0; t < 1e4; t++) e.returnsBuffer();
  });
  c('10000 x [returnsVector(): TestVector]', () => {
    for (let t = 0; t < 1e4; t++) e.returnsVector();
  });
  c('10000 x [returnsAffineTransform(): TestAffineTransform]', () => {
    for (let t = 0; t < 1e4; t++) e.returnsAffineTransform();
  });
  c('10000 x [returnsParentIndex(): TestParentIndex]', () => {
    for (let t = 0; t < 1e4; t++) e.returnsParentIndex();
  });
  c('10000 x [returnsArray(): TestParentIndex]', () => {
    for (let t = 0; t < 1e4; t++) e.returnsArray();
  });
  c('10000 x [takesInt(value: int): void]', () => {
    for (let t = 0; t < 1e4; t++) e.takesInt(t);
  });
  c('10000 x [takesString(string): void]', () => {
    for (let t = 0; t < 1e4; t++) e.takesString('ABC');
  });
  c('10000 x [takesBuffer(value: buffer): void]', () => {
    let t = new Uint8Array([0]);
    for (let i = 0; i < 1e4; i++) e.takesBuffer(t);
  });
  c('10000 x [takesVector(value: TestVector): void]', () => {
    let t = {
      x: 0,
      y: 0
    };
    for (let i = 0; i < 1e4; i++) e.takesVector(t);
  });
  c('10000 x [takesAffineTransform(value: TestAffineTransform): void]', () => {
    let t = {
      m00: 0,
      m01: 1,
      m02: 2,
      m10: 3,
      m11: 4,
      m12: 5
    };
    for (let i = 0; i < 1e4; i++) e.takesAffineTransform(t);
  });
  c('10000 x [takesParentIndex(value: TestParentIndex): void]', () => {
    let t = {
      parent: '100:3928',
      position: '01234567890123456789'
    };
    for (let i = 0; i < 1e4; i++) e.takesParentIndex(t);
  });
});
function tt(e, t, i) {
  let n = new Blob([t], {
    type: i
  });
  if (BrowserInfo.msie || BrowserInfo.msedge) {
    let t = document.createElement('a');
    if (void 0 !== t.download) {
      let i = URL.createObjectURL(n);
      t.href = i;
      t.download = e;
      t.click();
    } else {
      try {
        window.navigator.msSaveOrOpenBlob(n, e);
      } catch (t) {
        console.error(`IE can't save the file ${e} ${t}`);
      }
    }
  } else {
    let t = URL.createObjectURL(n);
    let i = document.createElement('a');
    i.href = t;
    let r = void 0 !== i.download;
    r && (i.download = e);
    BrowserInfo.safari ? (r || (i.target = '_blank'), i.click()) : BrowserInfo.firefox ? (document.body.appendChild(i), i.click(), document.body.removeChild(i)) : i.click();
  }
}
async function ti(e, t, i) {
  let n = (await executeDatabaseTransaction([ACTIVITY_LOG_STORE], async e => {
    let t = e.objectStore(ACTIVITY_LOG_STORE);
    return await t.getAll();
  })).filter(i => i.fileKey === t && i.userID === e);
  let r = mapFilter(n, e => e.autosaveChanges ? {
    fileKey: e.fileKey,
    userID: e.userID,
    startingSessionID: e.startingSessionID,
    newSessionID: e.newSessionID,
    startTime: e.startTime,
    endTime: e.endTime,
    autosaveChanges: function (e) {
      let {
        commit,
        commitPolicy,
        fileVersion,
        commitReason
      } = e;
      let a = {};
      for (let e of commit.changedNodes) {
        let t = AutosaveHelpers ? JSON.parse(AutosaveHelpers.encodeChangesAsJson(e.changes, fileVersion, !1)) : '';
        a[e.nodeID] = {
          changesB64: encodeBase64(e.changes),
          debug: t
        };
      }
      let o = Object.fromEntries(commit.referencedNodes.map(({
        nodeID: e,
        changes: t
      }) => [e, encodeBase64(t)]));
      return {
        commitPolicy: EditChangeMode[commitPolicy],
        commitReason: ConnectionState[commitReason],
        changedNodes: a,
        clearedNodes: commit.clearedNodes,
        imageHashes: commit.imageHashes,
        referencedNodes: o
      };
    }(e.autosaveChanges)
  } : null);
  tt(i, JSON.stringify({
    version: 1,
    logs: n.map(({
      logs: e
    }) => e).flat().map(e => ({
      ...e,
      log: JSON.parse(e.log)
    })).sort((e, t) => e.time - t.time),
    autosave: r
  }, null, 2), 'application/json');
}
async function ts(e, t) {
  if (!e) {
    let t = atomStoreManager.get(fileKeyAtom);
    if (!t) throw new Error('Must provide a local file key');
    e = t;
  }
  if (!t) {
    let e = atomStoreManager.get(userIdAtom);
    if (!e) throw new Error('Must provide a user ID');
    t = e;
  }
  let i = await getAutosaveDatabaseWithErrorHandling();
  if (!i) throw new Error('Could not open autosave DB');
  let n = i.transaction([EDITOR_SESSIONS_STORE, NODE_CHANGES_STORE, NEW_FILES_STORE]);
  let r = n.objectStore(EDITOR_SESSIONS_STORE);
  let a = await r.index(SESSION_INDEX).get(createSessionNodeKeyRange(t, e));
  if (!a || !a.id) throw new Error('No editor session row found');
  let s = n.objectStore(NEW_FILES_STORE);
  let o = await s.get(createSessionNodeKeyRange(a.userID, e));
  if (!o) throw new Error('No new file row found');
  let l = n.objectStore(NODE_CHANGES_STORE);
  let d = (await l.getAll(createSessionGreaterEqualKeyRange(a.id))).map(e => ({
    ...e,
    changes: encodeBase64(e.changes)
  }));
  return JSON.stringify({
    editorSession: a,
    newFile: o,
    nodeChanges: d
  });
}
async function to(e) {
  let t = JSON.parse(e);
  let i = await getAutosaveDatabaseWithErrorHandling();
  if (!i) throw new Error('Could not open autosave DB');
  let n = i.transaction([EDITOR_SESSIONS_STORE, NODE_CHANGES_STORE, NEW_FILES_STORE], 'readwrite');
  let r = n.objectStore(EDITOR_SESSIONS_STORE);
  await r.add(t.editorSession);
  let a = n.objectStore(NEW_FILES_STORE);
  await a.add(t.newFile);
  let s = t.nodeChanges.map(e => ({
    ...e,
    changes: decodeBase64(e.changes)
  }));
  let o = n.objectStore(NODE_CHANGES_STORE);
  for (let e of s) o.add(e);
  await n.done;
}
isDevEnvironment() && (window.exportLocalAutosaveFile = ts, window.importLocalAutosaveFile = to);
function tV() {
  performanceTracker?.onMetricsEventLoopFrame();
  requestAnimationFrame(tV);
}
class t4 {
  constructor(e) {
    this.store = e;
  }
  isZombieStyle(e) {
    let t = this.store.getState().library;
    let i = getSingletonSceneGraph();
    let n = i.get(e);
    if (!n) return !1;
    let r = n.styleId.ref;
    if (r) {
      let e = i.getStyleNodeByRef(r);
      let n = {
        guid: parseSessionLocalID(e?.styleId.guid)
      };
      return !bi({
        library: t,
        inheritStyleKey: r.key,
        inheritStyleID: n
      });
    }
    return !1;
  }
}
let id = new class {
  constructor() {
    this.ClipboardDataUploadSchemaValidator = createNoOpValidator();
  }
  getClipboardDataUpload(e) {
    return this.ClipboardDataUploadSchemaValidator.validate(async ({
      xr: t
    }) => await t.get('/api/clipboard_data_upload', APIParameterUtils.toAPIParameters({
      device_type: e.deviceType,
      timestamp_ms: e.timestampMs
    })));
  }
}();
let iT = {
  container: {
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
    flexDirection: 'xdt5ytf',
    $$css: !0
  },
  thumbnailButton: {
    'alignItems': 'x1qjc9v5',
    'borderRadius': 'xcptcoi',
    'borderStartStartRadius': null,
    'borderStartEndRadius': null,
    'borderEndStartRadius': null,
    'borderEndEndRadius': null,
    'borderTopLeftRadius': null,
    'borderTopRightRadius': null,
    'borderBottomLeftRadius': null,
    'borderBottomRightRadius': null,
    'display': 'x78zum5',
    'flexDirection': 'xdt5ytf',
    'gap': 'xg2d0mh',
    'rowGap': null,
    'columnGap': null,
    'height': 'x1wkxgih',
    'padding': 'x1mh6rdz',
    'paddingInline': null,
    'paddingStart': null,
    'paddingLeft': null,
    'paddingEnd': null,
    'paddingRight': null,
    'paddingBlock': null,
    'paddingTop': null,
    'paddingBottom': null,
    'width': 'xh8yej3',
    'backgroundColor': 'xv2f06h',
    '--xi6bjag': 'xc4x8mf xpivayv xiscmya',
    '$$css': !0
  },
  thumbnailImageBorder: {
    alignItems: 'x6s0dn4',
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
    display: 'x78zum5',
    flex: 'x12lumcd',
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    justifyContent: 'xl56j7k',
    minHeight: 'x2lwn1j',
    outline: 'xqrzjgf',
    outlineColor: null,
    outlineOffset: null,
    outlineStyle: null,
    outlineWidth: null,
    padding: 'xf7z5ut',
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
  thumbnailImage: {
    objectFit: 'x19kjcj4',
    maxWidth: 'x193iq5w',
    maxHeight: 'xmz0i5r',
    margin: 'x1bpp3o7',
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    userSelect: 'x87ps6o',
    $$css: !0
  },
  preferredContentName: {
    padding: 'x1mh6rdz',
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
function ik(e) {
  !function (e, t) {
    let i = useDeepEqualSceneValue(e => {
      let t = e.getDirectlySelectedNodes()[0];
      return t ? t.guid : null;
    });
    let n = useDispatch();
    useEffect(() => {
      i !== e && n(hideSpecificModal({
        type: t
      }));
    }, [n, e, i, t]);
  }(e.slotNodeId, iN.type);
  let t = useDispatch();
  let i = pN(e.slotNodeId);
  let {
    preferredValues
  } = xP(i ?? void 0);
  let r = useMemo(() => ({
    x: e.position.x + 6,
    y: e.position.y - 180
  }), [e.position]);
  let s = useDeepEqualSceneValue(t => {
    let i = t.get(e.slotNodeId);
    return i ? {
      x: i.size.x / 2,
      y: i.size.y / 2
    } : {
      x: 0,
      y: 0
    };
  });
  let o = useCallback(i => {
    let n = {
      insertAsChildOfGuid: e.slotNodeId,
      insertAsChildOfCanvas: !1,
      canvasPosition: s,
      percentageOffset: new Vector2D(0.5, 0.5),
      useSmartPositioning: !1,
      selectAfterInsert: !0
    };
    i.type === PrimaryWorkflowEnum.COMPONENT ? t(insertSharedComponent({
      item: i,
      ...n
    })) : i.type === PrimaryWorkflowEnum.STATE_GROUP && t(insertSharedStateGroup({
      item: i,
      ...n
    }));
  }, [t, e.slotNodeId, s]);
  return jsx(bL, {
    width: DEFAULT_PICKER_WIDTH,
    maxHeight: 360,
    onClose: e.onClose,
    recordingKey: 'slotPreferredContentPicker',
    defaultPosition: r,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText('design_systems.slots.content_picker.title_add')
        })
      }), jsx(DialogBody, {
        'padding': 0,
        'style': {
          height: 320
        },
        'data-testid': 'slot-preferred-content-picker',
        'children': jsx('div', {
          ...stylex.props(iT.container),
          children: preferredValues.map(e => jsx(iR, {
            component: e,
            onClick: o
          }, e.node_id))
        })
      })]
    })
  });
}
function iR({
  component: e,
  onClick: t
}) {
  let i = useCallback(() => {
    t(e);
  }, [e, t]);
  return jsxs(ButtonPrimitive, {
    onClick: i,
    ...stylex.props(iT.thumbnailButton),
    children: [jsx('div', {
      ...stylex.props(iT.thumbnailImageBorder),
      children: jsx(_$$M2, {
        item: e,
        shouldGenerateLocalThumbnail: !0,
        draggable: !1,
        ...stylex.props(iT.thumbnailImage)
      })
    }), jsx('div', {
      ...stylex.props(iT.preferredContentName),
      children: jsx(ph, {
        text: e.name
      })
    })]
  });
}
let iN = registerModal(e => {
  let t;
  return (t = e.slotNodeId, useDeepEqualSceneValue((e, t) => {
    let i = e.get(t);
    return !!i?.isSlotReactive;
  }, t) && getFeatureFlags().dse_slots) ? jsx(ik, {
    ...e
  }) : null;
}, 'SLOT_PREFERRED_CONTENT_PICKER_MODAL_TYPE', ModalSupportsBackground.YES);
let iG = {
  dumpFrecencyData: () => {
    let {
      actions,
      queries
    } = x0();
    logInfo('Frecency Debug Info:', 'Frecency Data', {
      actions: actions.serialize(),
      queries: queries.serialize()
    });
  },
  dumpFrecencyScoreForAction: (e, t) => {
    let i = x0();
    let n = _$$y(e, t, i);
    let {
      actions,
      queries
    } = x0();
    let s = actions.data(t)?.debugScore();
    let o = queries.data(e, t)?.debugScore();
    logInfo('Frecency Debug Info:', 'Frecency Score', {
      action: t,
      query: e,
      totalScore: n,
      actionDebuggingData: s,
      queryDebuggingData: o
    });
  },
  clearFrecencyData: Zk
};
let i0 = registerModal(e => {
  let t = useDispatch();
  let i = useModalManager(e);
  return jsx(ModalRootComponent, {
    manager: i,
    width: 'md',
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText('fullscreen.fullscreen_view.attempted_sketch_import.import_from_sketch')
        })
      }), jsx(DialogBody, {
        children: renderI18nText('fullscreen.fullscreen_view.attempted_sketch_import.to_import_your_sketch_files_please_drag_them_into_your_file_space')
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            onClick: () => {
              t(hideModal());
            },
            variant: 'secondary',
            children: renderI18nText('fullscreen.fullscreen_view.attempted_sketch_import.do_it_later')
          }), jsx(Link.Button, {
            newTab: !0,
            href: '/files',
            children: renderI18nText('fullscreen.fullscreen_view.attempted_sketch_import.go_to_file_space')
          })]
        })
      })]
    })
  });
}, 'fullscreen-attempted-sketch-file-drop-modal');
function nl(e) {
  FullscreenWebSocketTsApi?.receive(e);
}
let nm = ['#007BE5', '#0087A8', '#009951', '#00B5CE', '#0FA958', '#14AE5C', '#18A0FB', '#1BC47D', '#536383', '#5551FF', '#667799', '#848484', '#8638E5', '#907CFF', '#9747FF', '#D27C2C', '#DC3412', '#EA10AC', '#EBEBEB', '#EE46D3', '#EF5533', '#F24822', '#F24E1E', '#FF24BD', '#FFC21A', '#FFC700', '#FFCD29'];
let nh = ['Hello world!', 'Collaboration is the key', 'Critical!!!!', 'Can we please iterate on this process', 'This is the most important message of your life', 'I liked it more in the blue color', 'Corporate Accounts Payable, Nina Speaking. JUST A Moment!', 'I Was Told That I Could Listen To The Radio At A Reasonable Volume, From Nine To Eleven', 'Why Does It Say Paper Jam When There Is No Paper Jam!', 'Sounds Like Somebody\u2019s Got A Case Of The Mondays!', 'Oh, And Remember, Next Friday Is Hawaiian Shirt Day!', 'That Means Every Single Day That You See Me, That\u2019s On The Worst Day Of My Life.'];
let ng = {
  mouseMoveMaxDelta: 70,
  canvasBounds: 2e3,
  centerX: 0,
  centerY: 0
};
let nf = _$$nc.testSetup('sticky-typing-scenario', (e, t, i = {}) => {
  let n = i.sessionID ?? Math.floor(2e3 * e()) + 200;
  let [r, a] = nA(e, n, window.INITIAL_OPTIONS.user_data.id);
  let s = Math.floor((t - 1) / 2);
  let o = Math.floor(e() * s);
  let l = t - s;
  let d = nI(e, nh);
  let c = {
    sessionID: n,
    localID: Math.floor(1e3 * e())
  };
  let u = [];
  let p = getSingletonSceneGraph();
  let m = p.createNode('STICKY');
  let h = i.canvasGuid || nP();
  p.get(m.containingCanvas).setSelectionToSingleNode(m.guid);
  nE(m);
  let g = m.textSublayer;
  let [f, ..._] = ny(e, {
    frames: s,
    varyZoom: !1
  }, i);
  nx(m, f.x, f.y);
  nS(g, 'Sticky text');
  nE(m);
  let A = {
    type: 'NODE_CHANGES',
    sessionID: n,
    ackID: 0,
    blobs: nN(),
    nodeChanges: [{
      ...nR(),
      guid: c,
      phase: 'CREATED'
    }]
  };
  u.push([A]);
  u.push(...nk(c, n, m, _.slice(0, o), h));
  let y = '';
  for (let e = 0; e < l; e++) {
    nS(g, y += d[e % d.length]);
    nE(m);
    let t = nR();
    u.push([nw(n, {
      guid: c,
      nodeGenerationData: t.nodeGenerationData,
      derivedImmutableFrameData: t.derivedImmutableFrameData,
      size: t.size,
      name: t.name
    }, nN()), nC(n, [c], h)]);
  }
  u.push(...nk(c, n, m, _.slice(o), h));
  let b = {
    type: 'NODE_CHANGES',
    sessionID: n,
    ackID: 0,
    nodeChanges: [{
      guid: c,
      phase: 'REMOVED'
    }]
  };
  u.push([b]);
  m.removeSelfAndChildren();
  return {
    sessionID: n,
    initMessages: [r],
    repeatMessages: u,
    cleanUpMessages: [a, b]
  };
});
function n_(e, t, i = {}) {
  let n = i.sessionID ?? Math.floor(2e3 * e()) + 200;
  let r = window.INITIAL_OPTIONS.user_data.id;
  let a = i.canvasGuid || nP();
  let s = [];
  for (let {
    x,
    y
  } of ny(e, {
    frames: Math.floor(t / 2),
    varyZoom: !1
  }, i)) {
    s.push([{
      type: 'USER_CHANGES',
      sessionID: n,
      ackID: 0,
      userChanges: [nb(x, y, n, a)]
    }]);
  }
  let o = nv(s);
  t % 2 == 1 && s.push(s[s.length - 1]);
  let [l, d] = nA(e, n, r);
  return {
    sessionID: n,
    initMessages: [l],
    repeatMessages: s.concat(o),
    cleanUpMessages: [d]
  };
}
function nA(e, t, i) {
  let n = nm[Math.floor(e() * nm.length)];
  return [{
    type: 'USER_CHANGES',
    sessionID: t,
    ackID: 0,
    userChanges: [{
      sessionID: t,
      userID: i,
      connected: !0,
      name: 'test user',
      imageURL: 'https://via.placeholder.com/300/09f/fff.png',
      deviceName: 'editor',
      canWrite: !0,
      color: parseHex(n) || {
        r: 0,
        g: 0,
        b: 0,
        a: 0
      },
      connectedAtTimeS: +new Date()
    }]
  }, {
    type: 'USER_CHANGES',
    sessionID: t,
    ackID: 0,
    userChanges: [{
      sessionID: t,
      userID: i,
      connected: !1
    }]
  }];
}
function ny(e, {
  frames: t,
  varyZoom: i
}, n = {}) {
  let {
    mouseMoveMaxDelta,
    canvasBounds,
    centerX,
    centerY
  } = {
    ...ng,
    ...n
  };
  let l = Math.floor(e() * canvasBounds) + centerX;
  let d = Math.floor(e() * canvasBounds) + centerY;
  let c = 1;
  let u = () => Math.floor(e() * (2 * mouseMoveMaxDelta)) - mouseMoveMaxDelta;
  let p = () => Math.max(1.8 * e(), 0.2);
  let m = () => [u(), u()];
  let h = m();
  let g = (e, t) => [e + h[0] / c, t + h[1] / c];
  let f = [];
  for (let n = 0; n < t; n++) {
    f.push({
      x: l,
      y: d,
      h: 1200 / c,
      w: 1600 / c
    });
    [l, d] = g(l, d);
    e() > 0.6 && (h = m());
    i && e() > 0.8 && (c = p());
  }
  return f;
}
function nb(e, t, i, n) {
  return {
    sessionID: i,
    highFiveStatus: !1,
    mouse: {
      cursor: 'DEFAULT',
      canvasSpaceLocation: {
        x: e,
        y: t
      },
      canvasGuid: n
    }
  };
}
function nv(e) {
  return e.slice().reverse();
}
function nI(e, t) {
  return t[Math.floor(e() * t.length)];
}
function nE(e) {
  NodeTsApi.setGlobalUnstableNodeByID(e.sceneGraph.scene, e.sessionID, e.localID, StateSourceType.PLUGIN);
  NodeTsApi.getAbsoluteBoundingBox(StateSourceType.PLUGIN);
}
function nx(e, t, i) {
  e.relativeTransform = {
    m00: 1,
    m01: 0,
    m02: t,
    m10: 0,
    m11: 1,
    m12: i
  };
  isSpecialType(e.type) && nE(e);
}
_$$nc.testSetup('table-typing-scenario', (e, t, i = {}) => {
  let n = i.sessionID ?? Math.floor(2e3 * e()) + 200;
  let [r, a] = nA(e, n, window.INITIAL_OPTIONS.user_data.id);
  let s = i.canvasGuid || nP();
  let o = Math.floor(t / 2);
  let l = Math.floor(e() * o);
  let d = t - o;
  let c = nI(e, nh);
  let u = [];
  let p = getSingletonSceneGraph();
  let m = i.nodeId;
  let h = p.get(m);
  let g = h.tableNumRows;
  let f = h.tableNumColumns;
  p.get(h.containingCanvas).setSelectionToSingleNode(m);
  nE(h);
  let _ = t => {
    let i = h.cellAt(Math.floor(e() * g), Math.floor(e() * f));
    p.get(i).textSublayer.characters = t;
    nE(h);
  };
  let [A, ...y] = ny(e, {
    frames: o,
    varyZoom: !1
  }, i);
  nx(h, A.x, A.y);
  _('table cell text');
  u.push(...nT(n, h, y.slice(0, l), s));
  let b = '';
  for (let e = 0; e < d; e++) {
    _(b += c[e % c.length]);
    let t = nR();
    u.push([nw(n, {
      guid: parseSessionLocalID(m),
      nodeGenerationData: t.nodeGenerationData,
      derivedImmutableFrameData: t.derivedImmutableFrameData,
      size: t.size,
      name: t.name
    }, nN()), nC(n, [parseSessionLocalID(m)], s)]);
  }
  u.push(...nT(n, h, y.slice(l), s));
  return {
    sessionID: n,
    initMessages: [r],
    repeatMessages: u,
    cleanUpMessages: [a]
  };
});
let nS = (e, t) => {
  e.characters = t;
};
function nw(e, t, i = []) {
  return {
    type: 'NODE_CHANGES',
    sessionID: e,
    ackID: 0,
    blobs: i,
    nodeChanges: [t]
  };
}
function nC(e, t, i) {
  return {
    type: 'USER_CHANGES',
    sessionID: e,
    ackID: 0,
    userChanges: [{
      sessionID: e,
      viewport: {
        canvasSpaceBounds: {
          x: 0,
          y: 0,
          w: 1024,
          h: 768
        },
        pixelPreview: !1,
        pixelDensity: 1,
        canvasGuid: i
      },
      selection: t
    }]
  };
}
function nT(e, t, i, n) {
  return nk({
    localID: t.localID,
    sessionID: t.sessionID
  }, e, t, i, n);
}
function nk(e, t, i, n, r) {
  let a = [];
  for (let {
    x,
    y
  } of n) {
    nx(i, x, y);
    let n = nR();
    a.push([nw(t, {
      guid: e,
      transform: n.transform
    }), {
      type: 'USER_CHANGES',
      sessionID: t,
      ackID: 0,
      userChanges: [nb(x + 50, y + 50, t, r)]
    }]);
  }
  return a;
}
function nR() {
  return _$$w.decodeNodeChange(interactionTestHelpers.dumpSelectedNode());
}
function nN() {
  return _$$w.decodeMessage(interactionTestHelpers.dumpSelectedNode()).blobs;
}
function nP() {
  let e = getSingletonSceneGraph().getCurrentPage();
  return parseSessionLocalID(e?.guid) || {
    sessionID: 0,
    localID: 1
  };
}
let nO = 'perf_tools--inactiveLabel--ihg7R raw_components--iconInsideBorderFocusWithin--2g7fO';
let nD = 'perf_tools--buttonGroup--OGfJC';
let nL = 'perf_tools--intInput--p485-';
let nU = null;
class nB extends KD {
  constructor() {
    super(...arguments);
    this.allowedUnits = 'ms';
  }
  format(e) {
    if (e == null) return '';
    let t = Math.max(10, Math.floor(e));
    return `${t}ms`;
  }
}
let nV = new nB({});
let nG = new Lk({
  smallNudgeAmount: 0.1,
  bigNudgeAmount: 1
});
let nz = {
  'mouse movement': n_,
  'viewport movement': function (e, t, i = {}) {
    let n = i.sessionID ?? Math.floor(2e3 * e()) + 200;
    let r = window.INITIAL_OPTIONS.user_data.id;
    let a = i.canvasGuid || nP();
    let s = [];
    for (let {
      x,
      y,
      h,
      w
    } of ny(e, {
      frames: Math.floor(t / 2),
      varyZoom: !0
    }, {
      ...i,
      mouseMoveMaxDelta: 250
    })) {
      s.push([{
        type: 'USER_CHANGES',
        sessionID: n,
        ackID: 0,
        userChanges: [nb(x, y, n, a)]
      }, {
        type: 'USER_CHANGES',
        sessionID: n,
        ackID: 0,
        userChanges: [{
          sessionID: n,
          userID: r,
          viewport: {
            canvasSpaceBounds: {
              x: x - w / 2,
              y: y - h / 2,
              w,
              h
            },
            pixelPreview: !1,
            pixelDensity: 1,
            canvasGuid: a
          }
        }]
      }]);
    }
    let o = nv(s);
    t % 2 == 1 && s.push(s[s.length - 1]);
    let [l, d] = nA(e, n, r);
    return {
      sessionID: n,
      initMessages: [l],
      repeatMessages: s.concat(o),
      cleanUpMessages: [d]
    };
  },
  'reactions': function (e, t, i = {}) {
    let n = n_(e, t, i);
    let r = [];
    for (let t of n.repeatMessages) {
      let i = buildUploadUrl(`${nI(e, _$$n4).image}`);
      r.push([...t, {
        type: 'CLIENT_BROADCAST',
        broadcasts: [{
          sessionID: n.sessionID,
          cursorReaction: {
            imageUrl: i
          }
        }]
      }]);
    }
    return {
      ...n,
      repeatMessages: r
    };
  },
  'chatter': function (e, t, i = {}) {
    let {
      canvasBounds,
      centerX,
      centerY
    } = {
      ...ng,
      ...i
    };
    let s = i.sessionID ?? Math.floor(2e3 * e()) + 200;
    let o = window.INITIAL_OPTIONS.user_data.id;
    let l = nI(e, nh);
    let d = i.canvasGuid || nP();
    let c = 0;
    let u = 0;
    let [p, m] = nA(e, s, o);
    let h = [];
    for (let i = 0; i < t;) {
      c = Math.floor(e() * canvasBounds) + centerX;
      u = Math.floor(e() * canvasBounds) + centerY;
      for (let e = 0; e < l.length && i < t - 1; e++, i++) {
        h.push([{
          type: 'USER_CHANGES',
          sessionID: s,
          ackID: 0,
          userChanges: [{
            ...nb(c, u, s, d),
            chatMessage: {
              previousText: '',
              text: l.substring(0, e)
            }
          }]
        }]);
      }
      h.push([{
        type: 'USER_CHANGES',
        sessionID: s,
        ackID: 0,
        userChanges: [{
          ...nb(c, u, s, d),
          chatMessage: {
            previousText: l,
            text: ''
          }
        }]
      }]);
      i++;
    }
    return {
      sessionID: s,
      initMessages: [p],
      repeatMessages: h,
      cleanUpMessages: [m]
    };
  },
  'sticky typing': nf
};
let nH = (e, t, i = 20, n = 'mouse movement', r = 0, a = 0) => {
  useEffect(() => {
    let s = _$$g3(0xFA57FA57);
    let o = [];
    let l = nz[n];
    for (let t = 0; t < e; t++) {
      o.push(l(s, i, {
        centerX: r,
        centerY: a
      }));
    }
    return function (e, t) {
      if (e === null) return () => {};
      let i = 0;
      let n = !1;
      let r = setInterval(() => {
        if (!n) {
          nl(e.initFrame);
          n = !0;
          return;
        }
        let t = e.repeatFrames;
        nl(t[i]);
        i = (i + 1) % t.length;
      }, t);
      return () => {
        clearInterval(r);
        nl(e.cleanUpFrame);
      };
    }(function (e) {
      if (!e.length) return null;
      if (e.some(t => t.repeatMessages.length !== e[0].repeatMessages.length)) throw new Error(`All scenarios must have the same length of repeat messages to be compiled together ${e.map(e => e.repeatMessages.length).join(', ')}`);
      let t = e => {
        let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0));
        let i = 0;
        for (let n of e) {
          t.set(n, i);
          i += n.length;
        }
        return t;
      };
      let i = e => e.reduce((e, t) => e.concat(t), []);
      let n = e => deflateRaw(t(e.map(e => _$$w.encodeMessage(e))));
      let r = {
        initFrame: n(i(e.map(e => e.initMessages))),
        repeatFrames: [],
        cleanUpFrame: n(i(e.map(e => e.cleanUpMessages)))
      };
      let a = e[0].repeatMessages.length;
      for (let t = 0; t < a; t++) {
        let a = i(e.map(e => e.repeatMessages[t]));
        r.repeatFrames.push(n(a));
      }
      return r;
    }(o), t);
  }, [e, t, i, n, r, a]);
};
function nW() {
  let [e, t] = useState(0);
  let [i, n] = useState(33);
  let [r, s] = useState(20);
  let [o, l] = useState(Object.keys(nz)[0]);
  let [d, c] = useState(0);
  let [p, m] = useState(0);
  nH(e, i, r, o, d, p);
  return jsx(DraggableModalManager, {
    title: 'Fake Multiplayer activity',
    initialPosition: new Point(0.7 * window.innerWidth, 0.5 * window.innerHeight),
    onClose: nK,
    headerClassName: 'perf_tools--header--LMO8p',
    children: jsxs(Id, {
      className: 'perf_tools--modal--KARjM',
      children: [jsx('div', {
        children: jsx('select', {
          value: o,
          onChange: e => l(e.target.value),
          children: Object.keys(nz).map(e => jsx('option', {
            value: e,
            children: e
          }, e))
        })
      }), jsxs('div', {
        children: [jsx(JU, {
          className: 'perf_tools--label--LWmjv',
          children: renderI18nText('fake_mp.modal.cursors')
        }), jsx(NumericInput, {
          'className': nL,
          'value': e,
          'onValueChange': t,
          'min': 0,
          'dispatch': noop,
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': getI18nString('fake_mp.modal.clients'),
          'children': jsx(SvgComponent, {
            className: nO,
            svg: _$$A3
          })
        }), jsx(ScrubbableInput, {
          'className': nL,
          'value': i,
          'onValueChange': n,
          'formatter': nV,
          'dispatch': noop,
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': getI18nString('fake_mp.modal.frequency'),
          'children': jsx(SvgComponent, {
            className: nO,
            svg: _$$A2
          })
        }), jsx(NumericInput, {
          'className': nL,
          'value': r,
          'onValueChange': s,
          'min': 5,
          'max': 200,
          'dispatch': noop,
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': getI18nString('fake_mp.modal.steps'),
          'children': jsx(SvgComponent, {
            className: nO,
            svg: _$$A4
          })
        }), jsx(ScrubbableInput, {
          'className': nL,
          'value': d,
          'onValueChange': c,
          'dispatch': noop,
          'formatter': nG,
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': getI18nString('fake_mp.modal.center_x'),
          'children': jsx('span', {
            className: nO,
            children: `${getI18nString('fake_mp.modal.center_x')}:`
          })
        }), jsx(ScrubbableInput, {
          'className': nL,
          'value': p,
          'onValueChange': m,
          'dispatch': noop,
          'formatter': nG,
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': getI18nString('fake_mp.modal.center_y'),
          'children': jsx('span', {
            className: nO,
            children: `${getI18nString('fake_mp.modal.center_y')}:`
          })
        })]
      }), jsxs(ButtonBaseReversedContainer, {
        className: nD,
        children: [jsx(Button, {
          variant: 'secondary',
          type: 'submit',
          onClick: () => {
            let e = fullscreenValue.getViewportInfo();
            c(e.offsetX);
            m(e.offsetY);
          },
          children: renderI18nText('fake_mp.modal.center')
        }), jsx(Button, {
          variant: 'secondary',
          type: 'submit',
          onClick: () => {
            t(0);
            n(16);
            s(20);
            c(0);
            m(0);
          },
          children: renderI18nText('fake_mp.modal.reset')
        }), jsx(Button, {
          variant: 'primary',
          type: 'submit',
          onClick: noop,
          children: renderI18nText('fake_mp.modal.apply')
        })]
      })]
    })
  });
}
function nK() {
  nU ? (unmountComponentAtNode(nU), document.body.removeChild(nU), nU = null) : (nU = document.createElement('div'), document.body.appendChild(nU), _$$H2(nU).render(jsx(nW, {})));
}
let nZ = null;
let nX = null;
class nQ extends KD {
  constructor() {
    super(...arguments);
    this.allowedUnits = 'ms';
  }
  format(e) {
    return e == null ? '' : `${e}s`;
  }
}
function nJ() {
  let e = getObservableOrFallback(getCanvasViewState().editFrameExtraSeconds);
  let t = useCallback(e => {
    getCanvasViewState().editFrameExtraSeconds.set(e - 0.016);
  }, []);
  let i = getObservableOrFallback(getCanvasViewState().editFrameExtraFramebufferSwitches);
  let n = useCallback(e => {
    getCanvasViewState().editFrameExtraFramebufferSwitches.set(e - 250);
  }, []);
  let r = getObservableOrFallback(getCanvasViewState().maxEditTimeSeconds);
  let s = useCallback(e => {
    getCanvasViewState().maxEditTimeSeconds.set(e);
  }, []);
  let o = useCallback(() => {
    getCanvasViewState().editFrameExtraSeconds.set(0.026);
    getCanvasViewState().editFrameExtraFramebufferSwitches.set(0);
    getCanvasViewState().maxEditTimeSeconds.set(1);
  }, []);
  return jsx(bL, {
    defaultPosition: new Point(0.7 * window.innerWidth, 0.5 * window.innerHeight),
    onClose: n0,
    width: 300,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: 'TSMER Config'
        })
      }), jsxs(DialogBody, {
        children: [jsx(Label, {
          children: renderI18nText('tsmer_config.modal.levers_label')
        }), jsx(ScrubbableInput, {
          'className': nL,
          'value': 0.016 + e,
          'onValueChange': t,
          'formatter': new nQ({
            min: 0.016,
            max: 0.5
          }),
          'dispatch': noop,
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': getI18nString('tsmer_config.modal.edit_frame_budget_seconds'),
          'children': jsx(SvgComponent, {
            className: nO,
            svg: _$$A3
          })
        }), jsx(NumericInput, {
          'className': nL,
          'value': 250 + i,
          'onValueChange': n,
          'min': 250,
          'max': 2e3,
          'dispatch': noop,
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': getI18nString('tsmer_config.modal.edit_frame_budget_framebuffer_switches'),
          'children': jsx(SvgComponent, {
            className: nO,
            svg: _$$A4
          })
        }), jsx(ScrubbableInput, {
          'className': nL,
          'value': r,
          'onValueChange': s,
          'formatter': new nQ({
            min: 0,
            max: 5
          }),
          'dispatch': noop,
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': getI18nString('tsmer_config.modal.max_edit_frame_time_seconds'),
          'children': jsx(SvgComponent, {
            className: nO,
            svg: _$$A3
          })
        })]
      }), jsx(DialogFooter, {
        children: jsx(DialogActionStrip, {
          children: jsx(ButtonBaseReversedContainer, {
            className: nD,
            children: jsx(Button, {
              variant: 'secondary',
              type: 'submit',
              onClick: o,
              children: renderI18nText('tsmer_config.modal.reset')
            })
          })
        })
      })]
    })
  });
}
function n0() {
  nZ ? (nX?.unmount(), document.body.removeChild(nZ), nZ = null) : (nZ = document.createElement('div'), document.body.appendChild(nZ), (nX = _$$H2(nZ)).render(jsx(nJ, {})));
}
let rg = rh;
let rv = parsePxNumber('16px');
let rI = parsePxNumber('48px');
let rE = parsePxNumber('41px');
let rx = registerModal(() => {
  let e = _$$n5({
    type: rx
  });
  let t = function () {
    let [{
      windowInnerWidth: e,
      windowInnerHeight: t
    }] = useDebounce(useWindowDimensions(), 300);
    let i = getSessionStorage();
    let n = window.innerWidth - 2 * rv;
    let r = window.innerHeight - parsePxNumber('20px') - rI - parsePxNumber('60px') - 2 * rv;
    let [a] = useState(() => {
      let a = Number(i?.getItem('fragment-inspect-modal-width'));
      let s = Number(i?.getItem('fragment-inspect-modal-height'));
      let o = function () {
        let e = i?.getItem('fragment-inspect-modal-position');
        if (!e) return;
        let t = JSON.parse(e);
        return new Point(t.x, t.y);
      }();
      if (a && s && o && a <= n && s + rE <= r) {
        return {
          initialWidth: a,
          initialHeight: s,
          initialPosition: o
        };
      }
      let l = Math.min(640, n);
      let d = Math.min(Math.round(1 / (4 / 3) * l), r);
      return {
        initialWidth: l,
        initialHeight: d - rE,
        initialPosition: new Point((e - l) / 2, (t - d) / 2)
      };
    });
    return {
      initialConstraints: {
        x: 'left',
        y: 'top'
      },
      initialWidth: a.initialWidth,
      initialHeight: a.initialHeight,
      initialPosition: a.initialPosition
    };
  }();
  let i = useRef(null);
  let n = useAtomWithSubscription(LK.indexedFragmentDataAtom);
  Object.keys(n).forEach(e => {
    e.endsWith('embedding') && (n[e] = '[...]');
  });
  let r = (() => {
    if (Object.keys(n).length === 0) {
      return jsx('div', {
        children: 'Fragment is not indexed'
      });
    }
    let e = `JSON for fragment with id ${n.file_id}-${n.node_id}`;
    return jsxs('div', {
      children: [jsx('div', {
        className: cssBuilderInstance.ml8.fontSemiBold.font11.fontUi.$,
        children: e
      }), jsx('pre', {
        children: JSON.stringify(n, null, 2)
      })]
    });
  })();
  return jsx(DraggableModalManager, {
    initialConstraints: t?.initialConstraints,
    initialHeight: t?.initialHeight,
    initialPosition: t?.initialPosition,
    initialWidth: t?.initialWidth,
    ref: i,
    onClose: e,
    title: jsx('div', {
      className: rg()('fragment_inspect_modal--antialiased--Pqy2m', cssBuilderInstance.flex.flex1.itemsCenter.justifyBetween.pr6.$),
      role: 'button',
      tabIndex: 0,
      children: jsx('div', {
        className: cssBuilderInstance.ml8.fontSemiBold.font11.fontUi.$,
        children: renderI18nText('fragment_search.fragment_inspect_modal_title')
      })
    }),
    children: jsx('div', {
      className: cssBuilderInstance.flex.flexColumn.hFull.overflowYScroll.overflowWrapAnywhere.px16.$,
      children: r
    })
  });
}, 'FRAGMENT_INSPECT_MODAL', ModalSupportsBackground.YES);
let rP = [{
  key: 'choice',
  name: 'Pick an option',
  allowFreeform: !1
}];
let rO = [{
  key: 'new-component',
  label: 'Link to new component'
}, {
  key: 'existing-component',
  label: 'Link to existing component'
}];
var rD = (e => (e.INITIAL = 'initial', e.SELECT_EXISTING_COMPONENT = 'select-existing-component', e))(rD || {});
function rL() {
  let [e, t] = useState('initial');
  let [i, n] = useState([]);
  let r = Tv();
  let {
    close
  } = cq();
  let o = useMemo(() => {
    let e = [];
    for (let t of r) {
      let i = getSingletonSceneGraph().get(t);
      i && i.type === 'FRAME' && !i.isStateGroup && e.push(i);
    }
    return e;
  }, [r]);
  switch (e) {
    case 'initial':
      return jsx(ch, {
        parameters: rP,
        triggeredFrom: 'quick-actions',
        displayName: '',
        parameterOnly: !0,
        terminate: noop,
        hideOnRun: !1,
        handler: {
          triggerParameterInputEvent: ({
            currentSearchQuery: e,
            onSuggestions: t
          }) => {
            let i = e.toLowerCase();
            t({
              type: 'SUGGESTIONS',
              suggestions: rO.filter(e => e.label.toLowerCase().includes(i)).map(e => ({
                name: e.label,
                data: e.key
              }))
            });
          },
          triggerRunEvent: e => {
            if (e && 'parameters' in e && e.parameters) {
              if (e.parameters.choice.data === 'existing-component') {
                n(o.map(e => e.guid));
                let e = getSingletonSceneGraph().getCurrentPage();
                e && (e.directlySelectedNodes = []);
                t('select-existing-component');
              } else {
                e.parameters.choice.data === 'new-component' && (permissionScopeHandler.user('create-new-component', () => {
                  Qy(o, !0);
                }), close());
              }
            }
          }
        }
      });
    case 'select-existing-component':
      return jsx(_$$A6, {
        action: 'link-to-existing-component',
        actionIcon: jsx(_$$B5, {}),
        actionLabel: renderI18nText('first_draft.link_component.link_button'),
        onPerform: () => {
          if (i.length === 0) return;
          let e = getSingletonSceneGraph().getCurrentPage();
          if (!e) return;
          let t = e.directlySelectedNodes;
          if (t.length === 0) return;
          let n = t[0];
          let r = i.map(e => getSingletonSceneGraph().get(e));
          permissionScopeHandler.user('link-frames-to-component', () => {
            v$(r, n);
          });
          close();
        },
        getCustomDisabledTextFromSelectedNodes: e => function (e) {
          let t = renderI18nText('first_draft.link_component.component_selection_instruction');
          if (e.length !== 1 || e[0].type !== 'SYMBOL') return t;
        }(e),
        aiTrackingContext: void 0,
        instructionAction: {
          type: 'learn_more',
          url: zw
        },
        children: renderI18nText('first_draft.link_component.component_selection_instruction')
      });
    default:
      throwTypeError(e);
  }
}
let r0 = (e, t) => {
  if (e === ColorProfileEnum.DISPLAY_P3) {
    if (t === 'convert') return getI18nString('fullscreen.color_management.document_modal.confirm.title.convert_display_p3');
    if (t === 'assign') return getI18nString('fullscreen.color_management.document_modal.confirm.title.assign_display_p3');
  } else if (e === ColorProfileEnum.SRGB) {
    if (t === 'convert') return getI18nString('fullscreen.color_management.document_modal.confirm.title.convert_srgb');
    if (t === 'assign') return getI18nString('fullscreen.color_management.document_modal.confirm.title.assign_srgb');
  }
  logInfo('DocumentColorProfileModal', `invalid currentDocumentColorProfile (${e}) or changeOption (${t}) for i18NStringForConfirmationText`);
  return getI18nString('general.confirm');
};
let r1 = e => getI18nString('fullscreen.color_management.document_modal.cancel', {
  color_profile: r2(e)
});
let r2 = e => e === ColorProfileEnum.DISPLAY_P3 ? getI18nString('fullscreen.filename_view.color_management.color_profile_display_p3') : e === ColorProfileEnum.SRGB ? getI18nString('fullscreen.filename_view.color_management.color_profile_srgb') : (logInfo('DocumentColorProfileModal', `invalid documentColorProfile (${e}) for i18NStringForDocumentColorProfile`), '');
let r5 = e => e === ColorProfileEnum.DISPLAY_P3 ? getI18nString('fullscreen.color_management.file_history.assign-display-p3') : e === ColorProfileEnum.SRGB ? getI18nString('fullscreen.color_management.file_history.assign-srgb') : (logInfo('DocumentColorProfileModal', `invalid documentColorProfile (${e}) for i18NStringForDocumentColorProfileAssignment`), '');
let r4 = (e, t) => {
  switch (t.status) {
    case 'SupportedNatively':
    case 'SupportedWithPolyfill':
      return null;
    case 'ClientNotSupported':
      return e === 'convert' ? getI18nString('fullscreen.color_management.document_modal.warning.display_p3_not_supported.client.convert') : getI18nString('fullscreen.color_management.document_modal.warning.display_p3_not_supported.client.assign');
    case 'MonitorNotSupported':
      return getI18nString('fullscreen.color_management.document_modal.warning.display_p3_not_supported.monitor');
  }
};
let r3 = e => {
  switch (e) {
    case ColorProfileEnum.SRGB:
      return getI18nString('fullscreen.color_management.document_modal.options.convert.subtitle.srgb_to_display_p3');
    case ColorProfileEnum.DISPLAY_P3:
      return getI18nString('fullscreen.color_management.document_modal.options.convert.subtitle.display_p3_to_srgb');
  }
};
function r6(e, t, i, n, r) {
  switch (r && e(t === ColorProfileEnum.LEGACY ? savepointOptimistThunk({
    fileKey: r,
    label: getI18nString('fullscreen.color_management.file_history.label'),
    description: r5(i),
    hideVisualBell: !0
  }) : savepointOptimistThunk({
    fileKey: r,
    label: getI18nString('fullscreen.color_management.file_history.label'),
    description: `${r2(t)} \u2192 ${r2(i)}`,
    hideVisualBell: !0
  })), i) {
    case ColorProfileEnum.SRGB:
      n === 'assign' ? Fullscreen.triggerAction('assign-document-color-profile-srgb', {}) : n === 'convert' && Fullscreen.triggerAction('convert-document-color-profile-srgb', {});
      break;
    case ColorProfileEnum.DISPLAY_P3:
      n === 'assign' ? Fullscreen.triggerAction('assign-document-color-profile-display-p3', {}) : n === 'convert' && Fullscreen.triggerAction('convert-document-color-profile-display-p3', {});
  }
}
let r7 = registerModal(({
  newDocumentColorProfile: e,
  open: t,
  onClose: i
}) => {
  let n = useDispatch();
  let r = selectCurrentFile();
  let [o, l] = useLocalStorageSync('preferred-document-color-profile-change-option', 'convert');
  let d = getColorSpaceSupportStatus();
  let c = e === ColorProfileEnum.DISPLAY_P3 ? r4(o, d) : null;
  let u = e === ColorProfileEnum.SRGB ? ColorProfileEnum.DISPLAY_P3 : ColorProfileEnum.SRGB;
  return jsx(TrackingProvider, {
    name: 'color_management_document_color_profile_modal',
    children: jsxs(ConfirmationModal, {
      open: t,
      onClose: i,
      width: 'lg',
      title: jsx(Fragment, {
        children: renderI18nText('fullscreen.color_management.document_modal.title', {
          color_profile: r2(e)
        })
      }),
      cancelText: r1(u),
      confirmText: r0(e, o),
      onConfirm: () => r6(n, u, e, o, r?.key),
      children: [jsxs(RadioInputRoot, {
        legend: jsx(Legend, {
          children: renderI18nText('fullscreen.color_management.document_modal.legend')
        }),
        value: o,
        onChange: e => {
          l(e);
        },
        children: [jsx(RadioInputOption, {
          value: 'convert',
          label: jsx(Label, {
            children: getI18nString('fullscreen.color_management.document_modal.options.convert.title')
          }),
          children: jsxs(Fragment, {
            children: [r3(e), e === ColorProfileEnum.SRGB && o === 'convert' && jsxs('div', {
              className: 'document_color_profile_modal--migratedWarning--4bN32',
              children: [jsx(_$$Z4, {}), renderI18nText('fullscreen.color_management.document_modal.warning.clamp.convert'), jsx(TrackedLink, {
                newTab: !0,
                trusted: !0,
                href: _$$s8,
                children: renderI18nText('rcs.rcs_shared.learn_more')
              })]
            })]
          })
        }), jsx(RadioInputOption, {
          value: 'assign',
          label: jsx(Label, {
            children: getI18nString('fullscreen.color_management.document_modal.options.assign.title')
          }),
          children: getI18nString('fullscreen.color_management.document_modal.options.assign.subtitle')
        })]
      }), c && jsxs('div', {
        className: 'document_color_profile_modal--migratedBottomWarningText--LdbKb',
        children: [jsx(_$$Z4, {}), c]
      })]
    })
  });
}, 'document_color_profile_modal');
async function ad(e, t) {
  if (!_$$il(t)) return;
  let i = {
    x: (t.absoluteBoundingBox.x - e.absoluteBoundingBox.x) / WE,
    y: (t.absoluteBoundingBox.y - e.absoluteBoundingBox.y) / WE,
    w: t.absoluteRenderBounds.width / WE,
    h: t.absoluteRenderBounds.height / WE
  };
  if (!t.id) return i;
  let n = await new Promise(e => {
    e(Thumbnail?.generateThumbnailForNode(t.id, t.absoluteRenderBounds.width, t.absoluteRenderBounds.height, 1, {}));
  });
  if (!n) return;
  let [r, a] = n;
  let o = hp.from(a).toString('base64');
  return {
    ...i,
    data: `data:image/png;base64,${o}`
  };
}
async function au(e, t, i, n) {
  let r = {
    ...W9(e, t),
    type: 'video'
  };
  let a = PZ(t, {
    imageHashesToUrls: i,
    videoHashesToUrls: n
  });
  if (a) {
    r = {
      ...r,
      ...a,
      extn: 'mp4'
    };
    let e = t.fills?.[0];
    if (e?.imageRef) {
      let t = i?.[e?.imageRef];
      t && (r.cover = await pV(t));
    }
  } else {
    console.error('pptx-export', `Could not resolve video path for node ${t.id}, using dummy instead`);
    r.data = Fo();
  }
  return r;
}
async function ap(e, t, i) {
  if (!t) {
    console.error('pptx-export\', `Could not resolve youtube url for missing node.');
    return null;
  }
  let n = t.interactiveSlideConfigData?.url;
  if (t?.flappType !== 'YOUTUBE' || !n) {
    console.error('pptx-export', `Could not resolve youtube url for node ${t?.id}`);
    return null;
  }
  let r = {
    ...W9(e, t),
    type: 'online',
    link: n
  };
  let a = t.fills?.[0];
  if (a?.imageRef) {
    let e = i?.[a?.imageRef];
    e && (r.cover = await pV(e));
  }
  return r;
}
function am(e, t) {
  let i = {
    ...W9(e, t)
  };
  if (t.fills.length) {
    let e = dE(t);
    e && (i.fill = e);
  }
  (t.type === 'LINE' || t.strokes?.length) && (i.line = function (e) {
    let t = {
      width: e.strokeWeight
    };
    if (e.strokes?.length) {
      let i = e.strokes?.[0];
      let {
        fillColor
      } = _$$pM(e.strokes) ?? {};
      if (fillColor) {
        let {
          hex,
          opacity
        } = XF(fillColor);
        t = {
          ...t,
          color: hex,
          width: e.strokeWeight,
          transparency: 100 - (e.opacity ?? i?.opacity ?? opacity) * 100
        };
      }
      e.strokeDashes?.length && void 0 !== e.strokeDashes[0] && (t.dashType = e.strokeDashes[0] > 10 ? 'lgDash' : 'dash');
    }
    return t;
  }(t));
  t.rotation && (i.rotate = 180 * t.rotation / Math.PI % 360);
  (function (e) {
    let t = e.type === 'SHAPE_WITH_TEXT' && e.shapeType === 'SQUARE';
    let i = e.type === 'ROUNDED_RECTANGLE';
    return t || i || e.type === 'FRAME';
  })(t) && (i.rectRadius = typeof t.cornerRadius == 'number' ? t.cornerRadius / 100 : 0);
  return i;
}
let ag = ah;
function af(e, t) {
  let i = [];
  let n = t.characters.split('\n');
  let r = 0;
  for (let e = 0; e < n.length; e++) {
    let a = n[e];
    if (!a?.length) {
      r += 1;
      continue;
    }
    if (t.characterStyleOverrides && t.characterStyleOverrides.length) {
      let s = [];
      let o = '';
      let l = t.characterStyleOverrides?.[r] ?? 0;
      for (let e = 0; e < a?.length; e++) {
        let i = a[e];
        let n = t.characterStyleOverrides?.[r + e] ?? 0;
        n !== l ? (o && s.push({
          text: o,
          styleId: l
        }), o = i || '', l = n) : o += i;
      }
      o && s.push({
        text: o,
        styleId: l
      });
      s.forEach((r, a) => {
        i.push(a_(r.text, t, r.styleId.toString(), e < n.length - 1 && a === s.length - 1, a === 0 ? e : void 0));
      });
    } else {
      i.push(a_(a, t, '0', e < n.length - 1, e));
    }
    r += a.length + 1;
  }
  let a = W9(e, t);
  a.w = a.w + 0.5;
  return {
    positionProps: a,
    textProps: i
  };
}
function a_(e, t, i, n, r) {
  let a = {
    text: e,
    options: {
      fontFace: t.style.fontFamily,
      fontSize: GZ(t.style.fontSize / 2),
      bold: aA(t.style),
      italic: ay(t.style),
      align: t.style.textAlignHorizontal.toLowerCase(),
      valign: t.style.textAlignVertical.toLowerCase(),
      breakLine: n,
      lineSpacing: GZ(t.style.lineHeightPx / 2),
      charSpacing: GZ(t.style.letterSpacing / 2)
    }
  };
  let s = t.lineIndentations ?? [];
  if (s.length && void 0 !== r && r < s.length) {
    let e = s[r];
    a.options = {
      ...a.options,
      indentLevel: void 0 !== e ? e - 1 : 0,
      bullet: function (e, t) {
        let i = e.lineTypes?.[t];
        return !!i && (i === 'ORDERED' ? {
          type: 'number'
        } : i === 'UNORDERED' && {
          code: '2022'
        });
      }(t, r)
    };
  }
  let o = t.fills?.[0];
  if (o?.color) {
    let {
      hex,
      opacity
    } = XF(o.color);
    a.options.color = hex;
    a.options.transparency = opacity;
  }
  if (i && t.styleOverrideTable?.[i]) {
    let e = t.styleOverrideTable[i];
    e.fontFamily && (a.options.fontFace = e.fontFamily);
    e.fontSize && (a.options.fontSize = GZ(e.fontSize / 2));
    e.fontWeight && (a.options.bold = aA(e));
    e.fontStyle && (a.options.italic = ay(e));
    e.textDecoration === 'UNDERLINE' && (a.options.underline = {
      style: 'sng'
    });
    e.lineHeightPx && (a.options.lineSpacing = GZ(e.lineHeightPx / 2));
    e.letterSpacing && (a.options.charSpacing = GZ(e.letterSpacing / 2));
    e.hyperlink && e.hyperlink.type === 'URL' && (a.options.hyperlink = {
      url: e.hyperlink.url
    });
    let n = e.fills?.[0];
    if (n?.color) {
      let {
        hex,
        opacity
      } = XF(n.color);
      a.options.color = hex;
      a.options.transparency = opacity;
    }
  }
  t?.style?.textCase === 'UPPER' ? a.text = a.text.toLocaleUpperCase() : t?.style?.textCase === 'LOWER' && (a.text = a.text.toLocaleLowerCase());
  return a;
}
function aA(e) {
  return (e.fontStyle ?? '').includes('Bold') || (e.fontWeight ?? 0) >= 700;
}
function ay(e) {
  return (e.fontStyle ?? '').includes('Italic');
}
async function ab(e, t, i, n, r) {
  let a = {};
  let s = [];
  let o = e.addSlide();
  let l = await av(t.document, i);
  l && (o.background = l);
  o.hidden = t.document.isSkippedSlide;
  let d = [t.document];
  for (; d.length > 0;) {
    let l = d.pop();
    if (l) {
      if (l.type === 'SLIDE') {
        try {
          let e = function (e) {
            let t = e.slideSpeakerNotes;
            return t ? parseEditorStateToPlainText(t) : null;
          }(l);
          if (e && o.addNotes(e), Oc(l)) {
            let e = await au(t.document, l, i, n);
            o.addMedia(e);
          }
        } catch (e) {
          Vy.error(`pptx-export: Could not export slide ${t.document.id}`, r, e);
          continue;
        }
      }
      if (l.children?.length) {
        for (let c of l.children) {
          if (zN(c) && PC(c)) {
            try {
              c.type === 'GROUP' ? Vy.withMetaScope(`GROUP ${c.id}`, r, () => {
                d.push(c);
              }) : c.type === 'FRAME' ? await Vy.withNodeScopeAsync(`FRAME ${c.id}`, r, async () => {
                if (un(c) || _$$tS(c)) {
                  a[c.id] = c;
                } else if (Oc(c)) {
                  let e = await au(t.document, c, i, n);
                  o.addMedia(e);
                  d.push(c);
                } else if (RU(c)) {
                  a[c.id] = c;
                } else {
                  let i = am(t.document, c);
                  o.addShape(_$$sd(e, c.type, c), i);
                  d.push(c);
                }
              }) : c.type === 'TEXT' ? Vy.withNodeScope(`TEXT ${c.id}`, r, () => {
                let e = af(t.document, c);
                if (e) {
                  let {
                    textProps,
                    positionProps
                  } = e;
                  s.push(() => o.addText(textProps, positionProps));
                }
              }) : _$$a2.includes(c.type) ? await Vy.withNodeScopeAsync(`SHAPE ${c.id}`, r, async () => {
                if (un(c) || _$$tS(c)) {
                  a[c.id] = c;
                } else if (Oc(c)) {
                  let e = await au(t.document, c, i, n);
                  o.addMedia(e);
                } else {
                  let i = am(t.document, c);
                  o.addShape(_$$sd(e, c.type, c), i);
                }
              }) : c.type === 'SHAPE_WITH_TEXT' ? Vy.withNodeScope(`SHAPE_WITH_TEXT ${c.id}`, r, () => {
                if (!_$$a2.includes(c.shapeType) || un(c)) {
                  console.warn('pptx-export', `Unsupported shape type: ${c.shapeType}, defaulting to image`);
                  a[c.id] = c;
                } else {
                  let i = am(t.document, c);
                  o.addText(c.characters, {
                    shape: _$$sd(e, c.shapeType, c),
                    ...i
                  });
                }
              }) : c.type === 'TABLE' ? Vy.withNodeScope(`TABLE ${c.id}`, r, () => {
                let {
                  rows,
                  props
                } = function (e, t) {
                  let i = [];
                  let n = {
                    ...W9(e, t)
                  };
                  let r = t.strokes?.[0];
                  if (r?.color) {
                    let {
                      hex
                    } = XF(r.color);
                    n.border = {
                      type: 'solid',
                      color: hex,
                      pt: r.strokeWeight
                    };
                  }
                  let a = [];
                  let s = [];
                  let o = t.children?.filter(e => e.type === 'TABLE_CELL');
                  Object.entries(Object.values(ag()(o, e => {
                    let t = e.id.split(';');
                    return t[1]?.split(':')[1];
                  }))).forEach(([t, n]) => {
                    let r = parseInt(t);
                    n.forEach((t, n) => {
                      let o = function (e, t) {
                        let i = {
                          text: t.characters ?? '',
                          options: {}
                        };
                        let n = dE(t);
                        if (n && (i.options = {
                          ...i.options,
                          fill: {
                            ...n
                          }
                        }), t.children?.length === 1 && t.children[0]?.type === 'TEXT') {
                          let n = t.children[0];
                          if (n) {
                            let t = af(e, n);
                            let r = t?.textProps;
                            r && (i.text = r.length ? r.map(e => ({
                              text: e.text,
                              options: {
                                ...i.options,
                                ...e.options
                              }
                            })) : '');
                          }
                        }
                        return i;
                      }(e, t);
                      i[r] || (i[r] = []);
                      i[r].push(o);
                      r === 0 && a.push(t.size.x / WE);
                      n === 0 && s.push(t.size.y / WE);
                    });
                  });
                  n.colW = a;
                  n.rowH = s;
                  return {
                    rows: i,
                    props: n
                  };
                }(t.document, c);
                s.push(() => o.addTable(rows, props));
              }) : c.type === 'INTERACTIVE_SLIDE_ELEMENT' && c.flappType === 'YOUTUBE' ? await Vy.withNodeScopeAsync(`INTERACTIVE_SLIDE_ELEMENT ${c.id}`, r, async () => {
                let e = await ap(t.document, c, i);
                e && s.push(() => o.addMedia(e));
              }) : Vy.withNodeScope(`UNSUPPORTED ${c.id}`, r, () => {
                console.warn('pptx-export', `Unsupported node type: ${c.type}, defaulting to image`);
                a[c.id] = c;
              });
            } catch (e) {
              continue;
            }
          }
        }
      }
    }
  }
  return {
    slideId: t.document.id,
    slide: o,
    unsupportedNodes: a,
    topLevelActions: s
  };
}
async function av(e, t) {
  let i = dE(e);
  if (i) return i;
  let n = PZ(e, {
    imageHashesToUrls: t
  });
  if (n?.path) {
    return {
      data: await pV(n.path)
    };
  }
  let {
    hex,
    opacity
  } = XF(e.backgroundColor ?? {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  });
  return {
    type: 'solid',
    color: hex,
    transparency: opacity
  };
}
async function aI({
  file: e,
  slideIds: t
}) {
  try {
    let n = (await Promise.all([]).then(_require)).$$default;
    let r = await aE(n, e, t);
    let a = await Uj(r);
    Vy.toConsole(zT.EXPORT);
    Vy.toFigment(e.key, zT.EXPORT, 0, a);
  } catch (t) {
    Vy.toFigment(e.key, zT.EXPORT, 0, 0, t);
    return t;
  } finally {
    Vy.reset();
  }
}
async function aE(e, t, i) {
  let n = AppStateTsApi?.canvasGrid().canvasGridArray.getCopy() ?? [];
  let r = getSingletonSceneGraph();
  let a = documentStateTsApi?.getMutableActiveDocument();
  if (!a) {
    console.error('pptx-export', 'No active document');
    return;
  }
  let o = new e();
  let l = new Set(ImageCppBindings?.findImagesUnder(a, ['0:0'], ImageExportType.NON_ANIMATED_ONLY));
  let [d, c] = await Promise.all([l.size ? batchDownloadImages([...l], {
    type: 'figFile',
    fileKey: t.key
  }) : Promise.resolve({
    s3_urls: {}
  }), fileApiHandler.getVideos({
    fileKey: t.key
  })]);
  let u = d.s3_urls;
  let p = c.data.meta.videos;
  let m = {};
  let h = Array.isArray(i) && i.length ? new Set(i) : void 0;
  let g = await Promise.all(n.flatMap(e => e.filter(e => !h || h.has(e)).map(t => {
    let i = r.get(t);
    let n = i?.getSlidesJSON();
    return i && n ? (m[t] = n, Vy.withSlideScopeAsync(e.indexOf(t) + 1, e => ab(o, n, u, p, e))) : (console.error('pptx-export', `Could not export slide id ${t}`), Promise.resolve({
      slideId: t,
      slide: null,
      unsupportedNodes: {},
      topLevelActions: []
    }));
  })));
  let f = g.filter(e => e.slide !== null && !!Object.keys(e.unsupportedNodes).length && e.slideId in m);
  f.length && (await Promise.allSettled(f.flatMap(e => {
    let {
      slide,
      unsupportedNodes,
      slideId
    } = e;
    return Object.values(unsupportedNodes).map(e => Vy.withNodeScopeAsync(e.id, null, async i => {
      let r = m[slideId];
      if (!r) return Promise.reject(new Error(`Slide ${slideId} not found for unsupported node ${e.id}`));
      {
        let i = await ad(r.document, e);
        i && slide.addImage(i);
      }
    }));
  })));
  g.forEach(e => {
    let {
      topLevelActions
    } = e;
    topLevelActions.forEach(e => e());
  });
  await o.writeFile({
    fileName: t.name
  });
  return o;
}
let aN = 'pdf_export_settings_modal--exportSettingsModalRow--Z1ilM';
let aP = 'pdf_export_settings_modal--exportSettingsModalRowAutoHeight--zCiQR';
let aO = registerModal(e => {
  let [t, i] = useState(!1);
  let [n, r] = useState(!1);
  let o = useModalManager({
    ...e,
    preventUserClose: t
  });
  let l = useIsFullscreenSlidesView();
  let d = selectCurrentFile();
  let c = Wj();
  let [p, m] = useState(l ? 'pptx' : 'pdf');
  let h = c.length;
  let [g, f] = useState('all');
  let _ = useDropdownState();
  let A = useDispatch();
  let [y, b] = useState(JI);
  let [v, I] = useState('DOCUMENT');
  let E = async () => {
    r(!1);
    i(!0);
    let e = DocumentColorProfileEnum.DOCUMENT;
    v === 'SRGB' ? e = DocumentColorProfileEnum.SRGB : v === 'DISPLAY_P3_V4' && (e = DocumentColorProfileEnum.DISPLAY_P3_V4);
    let t = g === 'selection';
    if (p === 'pdf') {
      setTimeout(() => {
        try {
          Fullscreen.exportAllFramesToPdf(y, e, t);
          A(hideModalHandler());
        } catch (e) {
          r(!0);
        } finally {
          i(!1);
        }
      }, 0);
    } else if (p === 'pptx' && d) {
      try {
        await aI({
          file: d,
          slideIds: g === 'selection' ? c : void 0
        });
        A(hideModalHandler());
      } catch (e) {
        r(!0);
      } finally {
        i(!1);
      }
    }
  };
  let x = jsx(_$$sZ, {});
  let S = jsx(J5, {
    onExportQualityChange: (e, t) => {
      b(Yj(e, 'PDF'));
    },
    quality: y,
    imageType: 'PDF',
    dropdownShown: _,
    dispatch: A
  });
  let w = jsx(_$$k2, {
    name: 'export_all_frames_to_pdf_settings_modal',
    children: jsxs('form', {
      children: [jsx(ZH, {
        children: ({
          documentExportColorProfile: e
        }) => jsx(cS, {
          label: jsx(Vq, {}),
          input: jsx(K8, {
            documentExportColorProfile: e,
            onColorProfileChange: I,
            colorProfile: v,
            dispatch: A,
            dropdownShown: _
          }),
          appendedClassName: aN
        })
      }), jsx(cS, {
        label: x,
        input: S,
        appendedClassName: aN
      }), l && h > 0 && jsx(Zo, {
        label: jsx(O8, {}),
        input: jsx(jd, {
          numSlides: h,
          value: g,
          setValue: f
        }),
        appendedClassName: rg()(aN, aP)
      })]
    })
  });
  let C = jsx(_$$k2, {
    name: 'export_slides_to_pptx_settings_modal',
    children: jsx('form', {
      children: jsx(Zo, {
        label: jsx(O8, {}),
        input: jsx(jd, {
          numSlides: h,
          value: g,
          setValue: f
        }),
        appendedClassName: rg()(aN, aP)
      })
    })
  });
  let T = useMemo(() => p === 'pdf' ? l ? renderI18nText('fullscreen.export.export_slides_to_pdf') : renderI18nText('fullscreen.export.export_frames_to_pdf') : renderI18nText('fullscreen.export.export_slides_to_pptx'), [p, l]);
  let k = p === 'pdf' ? renderI18nText('fullscreen.export.exporting_to_pdf') : renderI18nText('fullscreen.export.exporting_to_pptx');
  return jsx(ModalRootComponent, {
    manager: o,
    width: 'md',
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: T
        })
      }), jsxs(DialogBody, {
        children: [l && jsx(cS, {
          label: jsx(JU, {
            className: hD,
            htmlFor: 'export-settings-file-type',
            children: getI18nString('fullscreen.export.export_file_type')
          }),
          input: jsxs(_$$bL2, {
            onChange: e => {
              m(e);
            },
            value: p,
            children: [jsx(l9, {
              label: jsx(HiddenLabel, {
                children: getI18nString('fullscreen.export.export_file_type')
              }),
              width: 'fill'
            }), jsxs(mc, {
              children: [jsx(c$, {
                value: 'pdf',
                children: aL().format('pdf')
              }), jsx(c$, {
                value: 'pptx',
                children: aL().format('pptx')
              })]
            })]
          }),
          appendedClassName: aN
        }), l ? p === 'pdf' ? w : C : w]
      }), jsxs(DialogFooter, {
        children: [jsxs('div', {
          className: rg()('pdf_export_settings_modal--exportModalFooterLoader--tW0h6', {
            'pdf_export_settings_modal--exportModalFooterLoaderError--lXi8-': n
          }),
          children: [t && !n && jsxs(Fragment, {
            children: [jsx(LoadingSpinner, {
              imageBacked: !0
            }), k]
          }), !t && n && jsxs(Fragment, {
            children: [jsx(_$$R2, {}), renderI18nText('fullscreen.export.unable_to_export')]
          })]
        }), jsx(DialogActionStrip, {
          children: jsx(Button, {
            'variant': 'primary',
            'onClick': E,
            'disabled': t,
            'aria-label': getI18nString('fullscreen.export.export'),
            'children': renderI18nText('fullscreen.export.export')
          })
        })]
      })]
    })
  });
});
var aD = (e => (e.PDF = 'pdf', e.PPTX = 'pptx', e))(aD || {});
let aL = () => ({
  format: e => {
    switch (e) {
      case 'pdf':
        return getI18nString('fullscreen.export.export_to_pdf');
      case 'pptx':
        return getI18nString('fullscreen.export.export_to_pptx');
    }
  }
});
let aV = 'rename_modal--previewName--lNqCJ';
let aG = 'rename_modal--patternInputContainer--Io3jc rename_modal--_inputContainer--Sh9ic raw_components--singleRowHeight--dKM4t';
let az = 'rename_modal--patternInput--eK79Z';
let aH = parsePxInt('120px');
var aW = (e => (e[e.Match = 0] = 'Match', e[e.NumberAscending = 1] = 'NumberAscending', e[e.NumberDescending = 2] = 'NumberDescending', e))(aW || {});
let aK = {
  0: '$&',
  1: '$nn',
  2: '$NN'
};
let aY = /\$n+/;
let aq = /\$N+/;
function a$(e, t) {
  let i = `${e}`;
  return i.length >= t ? i : Array.from({
    length: t - i.length + 1
  }).join('0') + i;
}
class aZ extends PureComponent {
  constructor(e) {
    super(e);
    this.guidSet = new Set();
    this.sortedGUIDs = [];
    this.shouldRefocusReplaceInput = !1;
    this.lastReplacePatternInputSelectionStart = 0;
    this.lastReplacePatternInputSelectionEnd = 0;
    this.onMatchPatternChange = e => {
      this.setState({
        matchPattern: e.currentTarget.value
      });
    };
    this.onMatchPatternFocus = () => {
      this.shouldRefocusReplaceInput = !1;
    };
    this.onReplacePatternChange = e => {
      this.shouldRefocusReplaceInput = !1;
      let t = e.currentTarget.value;
      this.setState({
        replacePattern: t,
        sequenceLabel: this.getSequenceLabel(t)
      });
    };
    this.setReplacePatternInputSelection = () => {
      let e = this.props.replacePatternInputRef.current;
      e && e.selectionStart != null && e.selectionEnd != null && (this.lastReplacePatternInputSelectionStart = e.selectionStart, this.lastReplacePatternInputSelectionEnd = e.selectionEnd);
    };
    this.updateShouldRefocusReplaceInput = () => {
      let e = this.props.replacePatternInputRef.current;
      this.shouldRefocusReplaceInput = document.activeElement === e;
    };
    this.onPatternButtonClick = e => {
      let {
        replacePattern
      } = this.state;
      let i = this.lastReplacePatternInputSelectionStart;
      let n = this.lastReplacePatternInputSelectionEnd;
      this.lastReplacePatternInputSelectionStart += aK[e].length;
      this.lastReplacePatternInputSelectionEnd = this.lastReplacePatternInputSelectionStart;
      let r = `${replacePattern.slice(0, i)}${aK[e]}${replacePattern.slice(Math.max(i, n), replacePattern.length)}`;
      this.setState({
        replacePattern: r,
        sequenceLabel: this.getSequenceLabel(r)
      });
    };
    this.isUsingNumberPattern = () => aY.test(this.state.replacePattern) || aq.test(this.state.replacePattern);
    this.getSequenceLabel = e => new RegExp(`^.*(?=.*${aY.source})(?=.*${aq.source}).*$`).test(e) ? getI18nString('fullscreen.rename_modal.start_sequence_from') : aq.test(e) ? getI18nString('fullscreen.rename_modal.stop_descending_at') : aY.test(e) ? getI18nString('fullscreen.rename_modal.start_ascending_from') : this.state.sequenceLabel;
    this.onSequenceStartChange = e => {
      this.updateShouldRefocusReplaceInput();
      this.setState({
        sequenceStart: normalizeValue(e)
      });
    };
    this.generateLayerNames = () => {
      let e = Number.isInteger(this.state.sequenceStart) ? this.state.sequenceStart : 1;
      let t = this.sortedGUIDs.map(e => {
        let t = this.props.getNode(e);
        return t && t.name;
      }).filter(e => e && e.length);
      let i = this.sortedGUIDs.map((i, n) => {
        let r;
        let a = n + e;
        let s = e + this.sortedGUIDs.length - (n + 1);
        try {
          r = new RegExp(this.state.matchPattern || '.*');
        } catch (e) {
          if (e instanceof SyntaxError) r = this.state.matchPattern;else throw e;
        }
        let o = this.state.replacePattern.replace(new RegExp(aY.source, 'g'), e => a$(a, e.length - 1)).replace(new RegExp(aq.source, 'g'), e => a$(s, e.length - 1));
        return t[n].replace(r, o);
      }).map((e, i) => e || t[i]);
      return this.sortedGUIDs.reduce((e, t, n) => ({
        ...e,
        [t]: i[n]
      }), {});
    };
    this.getPreviewNames = () => {
      let e = this.generateLayerNames();
      let t = this.props.nodeType === 'page' ? [...this.sortedGUIDs].reverse() : this.sortedGUIDs;
      let i = (t.length <= 5 ? t : [...t.slice(0, 4), t[t.length - 1]]).map(t => jsx(_$$R3, {
        className: aV,
        text: e[t],
        maxWidth: aH
      }, t));
      return t.length > 5 ? [...i.slice(0, 4), jsx('p', {
        className: aV,
        children: '...'
      }, '...'), i[i.length - 1]] : i;
    };
    this.onKeyDown = e => {
      e.stopPropagation();
      e.keyCode === KeyCodes.ESCAPE && this.props.onClose();
    };
    this.onSubmit = e => {
      e && e.preventDefault();
      let t = this.generateLayerNames();
      let i = !1;
      permissionScopeHandler.user('rename-modal-submit', () => {
        for (let e in t) {
          let n = this.props.getNode(e);
          n && t[e] !== n.name && (renameNode(e, t[e]), i = !0);
        }
      });
      i && fullscreenValue.commit();
      this.props.onClose();
    };
    this.renderPreview = () => jsxs(Fragment, {
      children: [jsx('div', {
        className: 'rename_modal--sectionHeader--DKvQY',
        children: renderI18nText('fullscreen.rename_modal.preview')
      }), jsx('div', {
        className: 'rename_modal--previewNameContainer--Rls-u',
        children: this.getPreviewNames()
      })]
    });
    this.renderLink = () => this.props.nodeType !== 'layer' ? null : jsx('div', {
      className: 'rename_modal--linkContainer--uRSae',
      children: jsx(Link, {
        href: 'https://help.figma.com/hc/articles/360039958934-Rename-Layers',
        newTab: !0,
        children: renderI18nText('fullscreen.rename_modal.learn_more')
      })
    });
    this.renderFormInputs = () => jsxs('div', {
      className: 'rename_modal--formInputs--uxH5m',
      children: [jsx('div', {
        className: aG,
        children: jsx(BigTextInputForwardRef, {
          className: az,
          value: this.state.matchPattern,
          onFocus: this.onMatchPatternFocus,
          onChange: this.onMatchPatternChange,
          placeholder: getI18nString('fullscreen.rename_modal.match_optional')
        })
      }), jsx('div', {
        className: aG,
        children: jsx(BigTextInputForwardRef, {
          className: az,
          value: this.state.replacePattern,
          onChange: this.onReplacePatternChange,
          onBlur: this.setReplacePatternInputSelection,
          placeholder: this.state.matchPattern ? getI18nString('fullscreen.rename_modal.replace_with') : getI18nString('fullscreen.rename_modal.rename_to'),
          ref: this.props.autofocusRef
        })
      }), jsxs('div', {
        className: 'rename_modal--patternButtonsContainer--yWDRZ rename_modal--_inputContainer--Sh9ic raw_components--singleRowHeight--dKM4t',
        children: [jsx(Button, {
          variant: 'secondary',
          onClick: () => {
            this.onPatternButtonClick(0);
          },
          htmlAttributes: {
            onMouseDown: this.updateShouldRefocusReplaceInput
          },
          children: this.state.matchPattern ? getI18nString('fullscreen.rename_modal.current_match') : getI18nString('fullscreen.rename_modal.current_name')
        }), jsx(Button, {
          variant: 'secondary',
          onClick: () => {
            this.onPatternButtonClick(1);
          },
          htmlAttributes: {
            onMouseDown: this.updateShouldRefocusReplaceInput
          },
          children: renderI18nText('fullscreen.rename_modal.number_ascending')
        }), jsx(Button, {
          variant: 'secondary',
          onClick: () => {
            this.onPatternButtonClick(2);
          },
          htmlAttributes: {
            onMouseDown: this.updateShouldRefocusReplaceInput
          },
          children: renderI18nText('fullscreen.rename_modal.number_descending')
        })]
      }), jsxs('div', {
        className: this.isUsingNumberPattern() ? 'rename_modal--sequenceInputContainer--wT55c rename_modal--_inputContainer--Sh9ic raw_components--singleRowHeight--dKM4t' : 'rename_modal--sequenceInputContainerDisabled--EwlG- rename_modal--_inputContainer--Sh9ic raw_components--singleRowHeight--dKM4t',
        children: [jsx('span', {
          className: 'rename_modal--sequenceLabel--UTwnc',
          children: this.state.sequenceLabel
        }), jsx(NumericInput, {
          'className': 'rename_modal--sequenceInput--KWIQX',
          'value': this.state.sequenceStart,
          'onValueChange': this.onSequenceStartChange,
          'disabled': !this.isUsingNumberPattern(),
          'min': 0,
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': getI18nString('fullscreen.rename_modal.start_ascending_from'),
          'tooltipForScreenReadersOnly': !0,
          'dispatch': this.props.dispatch
        })]
      })]
    });
    this.renderFormButtons = () => jsxs(Fragment, {
      children: [jsx(Button, {
        variant: 'secondary',
        onClick: this.props.onClose,
        children: renderI18nText('fullscreen.rename_modal.cancel')
      }), jsx(Button, {
        type: 'submit',
        children: renderI18nText('fullscreen.rename_modal.rename')
      })]
    });
    this.guidSet = new Set(e.guids);
    this.sortGUIDs();
    this.state = {
      matchPattern: '',
      replacePattern: '',
      sequenceStart: 1,
      sequenceLabel: getI18nString('fullscreen.rename_modal.start_ascending_from')
    };
  }
  componentDidMount() {
    this.maybeHideModal();
    let {
      replacePattern
    } = this.state;
    let t = this.props.replacePatternInputRef.current;
    t && (t.focus(), t.setSelectionRange(replacePattern.length, replacePattern.length));
  }
  componentDidUpdate(e) {
    this.maybeHideModal();
    let t = this.props.replacePatternInputRef.current;
    this.shouldRefocusReplaceInput && t && (document.activeElement !== t && (t.focus(), t.setSelectionRange(this.lastReplacePatternInputSelectionStart, this.lastReplacePatternInputSelectionEnd)), this.shouldRefocusReplaceInput = !1);
    this.props.guids !== e.guids && (this.guidSet = new Set(this.props.guids), this.sortGUIDs());
  }
  maybeHideModal() {
    if (this.props.guids.length === 0) {
      this.props.onClose();
    }
  }
  sortGUIDs() {
    let e = this.props.getNode(this.props.currentPage);
    if (e && this.props.nodeType !== 'page') {
      let t = e.uiOrderedChildren;
      for (this.sortedGUIDs = []; t.length;) {
        let e = this.props.getNode(t[0]);
        t.shift();
        e && (e.uiOrderedChildren && t.unshift(...e.uiOrderedChildren), this.guidSet.has(e.guid) && this.sortedGUIDs.push(e.guid));
      }
    } else {
      this.props.nodeType === 'page' ? this.sortedGUIDs = [...this.props.guids].reverse() : this.sortedGUIDs = this.props.guids;
    }
  }
  render() {
    if (this.props.guids.length === 0) return null;
    let e = this.props.nodeType === 'page' ? getI18nString('fullscreen.rename_modal.rename_num_pages_pages', {
      numPages: this.sortedGUIDs.length
    }) : getI18nString('fullscreen.rename_modal.rename_num_layers_layers', {
      numLayers: this.sortedGUIDs.length
    });
    return jsx(EventShield, {
      eventListeners: ['onClick', 'onKeyDown'],
      children: jsx(ModalRootComponent, {
        manager: this.props.manager,
        width: 'lg',
        children: jsxs(ModalFormContents, {
          onSubmit: this.onSubmit,
          children: [jsx(DialogHeader, {
            children: jsx(DialogTitle, {
              children: e
            })
          }), jsx(DialogBody, {
            children: jsxs('div', {
              className: 'rename_modal--body--bg5OQ',
              children: [jsx('div', {
                className: 'rename_modal--previewContainer--dvYY-',
                children: this.renderPreview()
              }), jsx('div', {
                className: 'rename_modal--form--Pj-fr',
                children: this.renderFormInputs()
              })]
            })
          }), jsxs(DialogFooter, {
            children: [this.renderLink(), jsx(DialogActionStrip, {
              children: this.renderFormButtons()
            })]
          })]
        })
      })
    });
  }
}
let aX = registerModal(e => {
  let t = useModalManager(e);
  let i = useRef(null);
  let n = setupAutofocusHandler(i);
  let r = useSelector(e => (reportNullOrUndefined(ServiceCategories.UNOWNED, e.mirror.appModel), e.mirror.appModel.currentPage));
  let s = useSelector(e => e.mirror.sceneGraph.get);
  return jsx(aZ, {
    ...e,
    manager: t,
    replacePatternInputRef: i,
    autofocusRef: n,
    currentPage: r,
    getNode: s
  });
});
let a4 = {
  templates: ['(?:www\\.)?youtube\\.com/(?:tv#/)?watch\\?(?:[^&]+&)*v=([a-zA-Z0-9_-]+)', 'youtu\\.be/([a-zA-Z0-9_-]+)', 'm\\.youtube\\.com/#/watch\\?(?:[^&]+&)*v=([a-zA-Z0-9_-]+)', 'www\\.youtube\\.com/shorts/([a-zA-Z0-9_-]+)', 'www\\.youtube\\.com/embed/([a-zA-Z0-9_-]+)', 'www\\.youtube\\.com/v/([a-zA-Z0-9_-]+)', 'www\\.youtube\\.com/user/[a-zA-Z0-9_-]+\\?v=([a-zA-Z0-9_-]+)', 'www\\.youtube-nocookie\\.com/v/([a-zA-Z0-9_-]+)']
};
let sn = createFileBehaviorAtom(() => WhiteboardAgendaCppBindings?.getAgenda() ?? [], {
  changeFileBehavior: FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE
});
let sr = createFileBehaviorAtom(null, {
  changeFileBehavior: FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE
});
let s_ = {
  restoreSoftDeletedNode(e) {
    permissionScopeHandler.user('internal-restore-soft-deleted-node', () => {
      DesignSystemsInternalHelpers?.restoreSoftDeletedNode(e);
    });
  },
  getNodesPersistingNode(e) {
    return DesignSystemsInternalHelpers?.getNodesPersistingNode(e);
  },
  getUpdatesState() {
    return {
      updatesForCurrentPage: atomStoreManager.get(P1),
      updatesForLoadedPages: atomStoreManager.get(S9),
      updateStatusForCurrentPage: atomStoreManager.get(_$$WJ)
    };
  }
};
function sC(e) {
  return `${(e *= 1 / 1048576) >= 9.5 ? e.toFixed(1) : e.toFixed(3)} MB`;
}
class sT {
  constructor(e = 0x4000000) {
    this.minReportBytes = e;
    this._meta = [];
    this._categoryBytes = new Map();
    this._totalBytes = 0;
    this._highBytes = 0;
    this._numReports = 0;
    this._growth = new _$$K2(e, 2, 1.2, 2e3, () => {
      this.logStats();
    });
  }
  static instance() {
    sT._instance || (sT._instance = new sT());
    return sT._instance;
  }
  numReports() {
    return this._numReports;
  }
  totalBytes() {
    return this._totalBytes;
  }
  highBytes() {
    return this._highBytes;
  }
  setMeta(e, t, i) {
    this._meta[e] && (console.warn('overwriting meta at index', e), this.clearMeta(e));
    this._meta[e] = {
      category: t,
      numBytes: i
    };
    this.addCategoryBytes(t, i);
  }
  clearMeta(e) {
    let t = this._meta[e];
    t && (this.addCategoryBytes(t.category, -t.numBytes), this._meta[e] = void 0);
  }
  addCategoryBytes(e, t) {
    let i = this._categoryBytes.get(e) || 0;
    i += t;
    this._categoryBytes.set(e, i);
    this._totalBytes += t;
    this._highBytes < this._totalBytes && (this._highBytes = this._totalBytes, this._growth.setCurrent(this._totalBytes));
  }
  logStats() {
    let e = [`high: ${sC(this._highBytes)}`, `current: ${sC(this._totalBytes)}`];
    for (let [t, i] of this._categoryBytes) i >= 1024 && e.push(`${t}: ${sC(i)}`);
    console.log('JsValue memory:', ...e);
    ++this._numReports;
  }
}
class sR {}
function sN(e) {
  return class extends e {
    constructor() {
      super(...arguments);
      this.EXIF = ImageOrientationUtils;
      this.HTMLWindowBindings = windowManagerInstance;
      this.jsValueHelp = sT.instance();
    }
  };
}
function sP(e) {
  return class extends e {
    constructor(...e) {
      super();
      this._fullscreenIsReady = !1;
      this._readyPromiseResolve = null;
      this._fontListLoaded = !1;
      this.fromFullscreen = new EventEmitter('fromFullscreen');
      this.viewport = new EventEmitter('viewport');
      this.containerElement = null;
      this._viewportInfo = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        offsetX: 0,
        offsetY: 0,
        zoomScale: 1,
        isZooming: !1,
        isPanning: !1
      };
      this._fileLoadTime = null;
      this.forwardKeyboardEvent = e => {
        forwardKeyboardEvent(e);
      };
      this.onReady = () => this._readyPromise;
      this.isReady = () => this._fullscreenIsReady && fullscreenCrashHandler.getFullscreenCrashState() === 'ok' && !!Fullscreen;
      this.isFontListLoaded = () => this._fontListLoaded;
      this.fromFullscreen.on('console:initialize', () => {
        fullscreenPromise.then(() => {
          this._osxMessageListener?.initialize();
        });
      });
      requestDeferredExecution();
      this._readyPromise = new Promise((e, t) => {
        this.isReady() ? e() : this._readyPromiseResolve = e;
      });
    }
    reparentRootElement(e) {
      this.containerElement = e;
      let t = document.getElementById('fullscreen-root');
      if (!t) return;
      if (!this.containerElement) {
        t.style.visibility = 'hidden';
        document.body.appendChild(t);
        return;
      }
      let i = null;
      document.activeElement instanceof HTMLElement && t.contains(document.activeElement) && (i = document.activeElement);
      t.style.visibility = 'visible';
      this.containerElement.appendChild(t);
      i && i.focus();
    }
    isRootElementVisible() {
      let e = document.getElementById('fullscreen-root');
      return this.containerElement != null && e?.parentElement === this.containerElement;
    }
    documentIsLoaded() {
      this._fileLoadTime = window.performance.now();
    }
    fileLoadTime() {
      return this._fileLoadTime;
    }
    triggerFromFullscreen(e, t) {
      this.fromFullscreen.trigger(e, t);
    }
    startLoadingDroppedImage() {
      _$$J5.startLoadingImage();
    }
    finishLoadingDroppedImage() {
      _$$J5.finishLoadingImage();
    }
    setSentryTag(e, t) {
      setTagGlobal(e, t);
    }
    onFrame() {
      this.isReady() && Fullscreen && Fullscreen.onFrame();
    }
    getViewportInfo() {
      return this._viewportInfo;
    }
    updateViewportInfo(e, t, i, n, r, a, s, o, l) {
      this._viewportInfo = {
        x: e,
        y: t,
        width: i,
        height: n,
        offsetX: r,
        offsetY: a,
        zoomScale: s,
        isZooming: o,
        isPanning: l
      };
      this.viewport.trigger('onSetViewport', this._viewportInfo);
    }
    onTilesRendered() {
      recordTileRenderingActive();
    }
    onCreateTable() {
      recordCreateTableActive();
    }
    onEditTableText() {
      recordEditTableTextActive();
    }
    onNodeDragStart() {
      onNodeDragStart();
    }
    onNodeDragEnd() {
      onNodeDragEnd();
    }
    onTileRendererChanged(e) {
      onTileRendererChanged(e);
    }
    onCreateSticky() {
      recordCreateStickyActive();
    }
    onDifferentSectionClicked() {
      recordDifferentSectionClicked();
    }
    getNextQueryRequestId() {
      return getNextSessionId();
    }
    afterQueryCompleted(e) {
      resolveSessionPromise(e);
    }
    rejectAllSceneGraphQueries() {
      rejectAllSessionPromises();
    }
    onNodePositionChanged(e, t) {
      Om(e, t);
    }
  };
}
class sB {
  constructor(e) {
    this._store = e;
  }
  get _state() {
    if (!this._store) throw new Error('Calling _state without a valid store');
    return this._store.getState();
  }
  getUserId() {
    if (this._state.user) return this._state.user.id;
    let e = this._state.multiplayer.allUsers.find(e => this._state.multiplayer.sessionID === e.sessionID);
    return e?.userID || null;
  }
  getUserLocale() {
    return this._state.user?.locale || defaultLanguage;
  }
  hasUserFlag(e) {
    return !!Object.keys(this._state.userFlags).includes(e);
  }
}
async function sq(e, t, i) {
  let n = new Timer();
  n.start();
  let r = debugState.getState();
  let a = r.openFile?.key;
  trackFileEvent('ai_smart_paste_started', a, r, {
    numRows: e.length,
    numCols: e[0].length,
    hasRepeatingContent: t
  });
  i(VisualBellActions.enqueue({
    message: 'Pasting data into designs...',
    type: 'SMART_PASTE',
    timeoutOverride: 1 / 0
  }));
  try {
    let o = getSingletonSceneGraph().getCurrentPage();
    let l = o?.directlySelectedNodes;
    if (!l) {
      i(VisualBellActions.enqueue({
        message: 'Smart Paste: No nodes selected to paste into',
        type: 'SMART_PASTE_ERROR'
      }));
      return;
    }
    let d = l[0];
    let c = d;
    t && (c = c.childrenNodes[0]);
    let u = function e(t) {
      let i = {
        type: t.type,
        id: t.guid,
        name: t.name
      };
      'characters' in t && (i.text = t.characters);
      'childrenNodes' in t && (i.children = t.childrenNodes.map(e));
      return i;
    }(c);
    let p = await cortexAPI.design.generateSmartPaste({
      nodeRepresentation: u,
      tabularData: e
    }, _$$Ay6());
    let m = n.getElapsedTime();
    let {
      guids
    } = p;
    let g = d.parentNode;
    if (!g) return;
    let f = g.stackMode !== 'NONE';
    let _ = getSingletonSceneGraph();
    permissionScopeHandler.user('smart-paste', () => {
      function o(e, t) {
        let i = function (e, t) {
          let i = new Map();
          !function e(t, i, n) {
            if (n.set(t.guid, i.guid), t.childCount !== i.childCount) throw new Error('Mismatched node trees');
            for (let r = 0; r < t.childCount; r++) {
              if (t.childrenNodes[r].type !== i.childrenNodes[r].type) throw new Error('Mismatched node trees');
              e(t.childrenNodes[r], i.childrenNodes[r], n);
            }
          }(e, t, i);
          return i;
        }(c, t);
        e.forEach((e, t) => {
          let n = guids[t];
          let r = i.get(n);
          if (r) {
            if (!_.get(r)) throw new Error('No node found');
            ComponentPropsAiCPPBindings.setTextContentOnTextNode(r, e);
          }
        });
      }
      e.forEach((e, i) => {
        if (t) {
          let t = d.childrenNodes[i];
          t && o(e, t);
        } else {
          let t = d.clone();
          g.appendChild({
            guid: t
          });
          let n = _.get(t);
          o(e, n);
          !f && n && (n.relativeTransform = {
            ...n.relativeTransform,
            m12: d.absoluteBoundingBox.y + i * (d.absoluteBoundingBox.h + 10)
          });
        }
      });
      t || d.removeSelfAndChildren();
      Fullscreen.triggerAction('commit', {});
      n.stop();
      let l = n.getElapsedTime();
      trackFileEvent('ai_smart_paste_completed', a, r, {
        timeToResponse: m,
        timeToCompletion: l,
        numRows: e.length,
        numCols: e[0].length,
        hasRepeatingContent: t
      });
      i(VisualBellActions.enqueue({
        message: 'Done!',
        type: 'SMART_PASTE_SUCCESS'
      }));
    });
  } catch (n) {
    reportError(ServiceCategories.AI_PRODUCTIVITY, n, {
      extra: {
        numRows: e.length,
        numCols: e[0].length,
        hasRepeatingContent: t
      }
    });
    trackFileEvent('ai_smart_paste_failed', a, r, {
      error: n,
      numRows: e.length,
      numCols: e[0].length,
      hasRepeatingContent: t
    });
    i(VisualBellActions.enqueue({
      message: 'Couldn\'t paste data',
      type: 'SMART_PASTE_ERROR'
    }));
  } finally {
    i(VisualBellActions.dequeue({
      matchType: 'SMART_PASTE'
    }));
  }
}
function or({
  source: e,
  mode: t,
  startingNodeId: i
}) {
  if (e !== 'breakpoint_bar' && atomStoreManager.get(_$$_b)) {
    uP();
    return;
  }
  let n = debugState;
  let r = n.getState();
  let a = selectSceneGraph(r);
  if (getResponsiveChildren(a, r.mirror.appModel.currentPage).length) {
    !function ({
      startingBreakpointFrameId: e,
      mode: t = 'modal',
      testFlags: i
    }) {
      let n = _$$d3(e);
      let r = n ? {
        mode: t,
        testFlags: i,
        ...n
      } : null;
      atomStoreManager.set(_$$_b, r);
    }({
      startingBreakpointFrameId: i,
      mode: t
    });
    return;
  }
  n.dispatch(VisualBellActions.enqueue({
    message: 'Page must include at least one responsive set to preview HTML',
    error: !0
  }));
}
class oo {
  constructor(e) {
    this._store = e;
  }
  get _state() {
    if (!this._store) throw new Error('Calling _state without a valid store');
    return this._store.getState();
  }
  setFigmascopeSelectedGuidCallback(e) {
    this._figmascopeFollowSelectionOnceCallback = e;
  }
  handleAction(e) {
    switch (e.name) {
      case 'magic-link':
        _$$g6({
          payload: e.payload
        });
        break;
      case 'make-edits':
        _$$YL();
        break;
      case 'debug-inspect-layer-figma-scope':
        if (EditorPreferencesApi().showFigmaScope.set(!0), this._figmascopeFollowSelectionOnceCallback) {
          let e = getSingleSelectedKey(this._store.getState());
          e && this._figmascopeFollowSelectionOnceCallback(e);
        }
        break;
      case 'reset-size':
        this.reset(SymbolOverrideType.SIZE);
        break;
      case 'reset-exports':
        this.reset(SymbolOverrideType.EXPORTS);
        break;
      case 'reset-effects':
        this.reset(SymbolOverrideType.EFFECTS);
        break;
      case 'reset-layer':
        this.reset(SymbolOverrideType.LAYER);
        break;
      case 'reset-visible':
        this.reset(SymbolOverrideType.VISIBLE);
        break;
      case 'reset-name':
        this.reset(SymbolOverrideType.NAME);
        break;
      case 'reset-fill':
        this.reset(SymbolOverrideType.FILL);
        break;
      case 'reset-stroke':
        this.reset(SymbolOverrideType.STROKE);
        break;
      case 'reset-text':
        this.reset(SymbolOverrideType.TEXT);
        break;
      case 'reset-text-style':
        this.reset(SymbolOverrideType.TEXT_STYLE);
        break;
      case 'reset-prototype-interactions':
        this.reset(SymbolOverrideType.PROTOTYPE_INTERACTIONS);
        break;
      case 'reset-overlay':
        this.reset(SymbolOverrideType.OVERLAY);
        break;
      case 'text-bold-increase':
        this._applyTextStylingAction(TextEditAction.INCREASE_BOLD);
        break;
      case 'text-bold-decrease':
        this._applyTextStylingAction(TextEditAction.DECREASE_BOLD);
        break;
      case 'text-toggle-italic':
        this._applyTextStylingAction(TextEditAction.TOGGLE_ITALIC);
        break;
      case 'text-toggle-underline':
        this._applyTextStylingAction(TextEditAction.TOGGLE_UNDERLINE);
        break;
      case 'text-toggle-strikethrough':
        this._applyTextStylingAction(TextEditAction.TOGGLE_STRIKETHROUGH);
        break;
      case 'text-remove-decoration':
        this._applyTextStylingAction(TextEditAction.REMOVE_DECORATION);
        break;
      case 'text-original-case':
        this._applyTextStylingAction(TextEditAction.SET_ORIGINAL_CASE);
        break;
      case 'text-upper-case':
        this._applyTextStylingAction(TextEditAction.SET_UPPER_CASE);
        break;
      case 'text-lower-case':
        this._applyTextStylingAction(TextEditAction.SET_LOWER_CASE);
        break;
      case 'text-title-case':
        this._applyTextStylingAction(TextEditAction.SET_TITLE_CASE);
        break;
      case 'text-line-height-decrease':
        this._applyTextStylingAction(TextEditAction.DECREASE_LINE_HEIGHT, TextModificationAction.TEXT_LINE_HEIGHT);
        break;
      case 'text-line-height-increase':
        this._applyTextStylingAction(TextEditAction.INCREASE_LINE_HEIGHT, TextModificationAction.TEXT_LINE_HEIGHT);
        break;
      case 'text-letter-spacing-decrease':
        this._applyTextStylingAction(TextEditAction.DECREASE_LETTER_SPACING, TextModificationAction.TEXT_LETTER_SPACING);
        break;
      case 'text-letter-spacing-increase':
        this._applyTextStylingAction(TextEditAction.INCREASE_LETTER_SPACING, TextModificationAction.TEXT_LETTER_SPACING);
        break;
      case 'present-as-prototype':
        {
          let t = e.payload.source === 'toolbar' ? 'button' : e.payload.source;
          this._openPrototype({
            source: t,
            shouldOpenInNewTab: !0
          });
          break;
        }
      case 'toggle-inline-preview':
        let t = e.payload.source === 'toolbar' ? 'button' : e.payload.source;
        atomStoreManager.get(hg).modalStatus === _$$bi.OPEN ? (this._store.dispatch(trackDefinedFileEventWrapper({
          name: 'prototype.close_inline_viewer',
          params: {
            source: t
          }
        })), atomStoreManager.set(hg, {
          type: 'CLOSE_INLINE_PREVIEW'
        })) : this._openPrototype({
          source: t,
          shouldOpenInNewTab: !1
        });
        break;
      case 'present-slides-audience-view':
        {
          let t = e.payload.source === 'toolbar' ? 'button' : e.payload.source;
          this._openPrototype({
            source: t,
            shouldOpenInNewTab: !0,
            isSlides: !0
          });
          this._store.dispatch(VisualBellActions.enqueue({
            icon: VisualBellIcon.NOTES_ON_RECTANGLE,
            message: getI18nString('slides.presenter_view.visual_bells.opened_presentation_in_new_tab')
          }));
          break;
        }
      case 'present-slides-presenter-view':
        {
          let t = e.payload.source === 'toolbar' ? 'button' : e.payload.source;
          this._openPrototype({
            source: t,
            shouldOpenInNewTab: !0,
            isSlides: !0,
            isPresenterViewWithPopoutAudienceView: !0
          });
          this._store.dispatch(VisualBellActions.enqueue({
            icon: VisualBellIcon.NOTES_ON_RECTANGLE,
            message: getI18nString('slides.presenter_view.visual_bells.opened_presenter_and_audience_views_in_new_tabs')
          }));
          break;
        }
      case 'present-sites-full-preview':
        if (!getFeatureFlags().sites && !getFeatureFlags().bake) break;
        or({
          source: e.payload.source,
          mode: 'fullscreen',
          startingNodeId: e.payload.startingNodeId
        });
        break;
      case 'toggle-inline-html-preview':
        if (!getFeatureFlags().sites && !getFeatureFlags().bake) break;
        or({
          source: e.payload.source,
          mode: 'modal',
          startingNodeId: e.payload.startingNodeId
        });
        break;
      case 'inline-preview-reset-size':
        let i = selectSceneGraph(this._store.getState());
        atomStoreManager.set(hg, {
          type: 'CHANGE_DEVICE_FRAME',
          payload: {
            sceneGraph: i,
            oldPresetIdentifier: e.payload.oldPresetIdentifier,
            oldRotation: e.payload.oldRotation,
            newPresetIdentifier: e.payload.newPresetIdentifier,
            newRotation: e.payload.newRotation
          }
        });
        break;
      case 'toggle-bold':
        let n = this._state.mirror.appModel.currentTool;
        getEditorTypeFromView(this._store.getState().selectedView) === FEditorType.Whiteboard && _$$BG(n) ? this._applyDrawingToolStylingAction(n) : this._applyTextStylingAction(TextEditAction.TOGGLE_BOLD);
        break;
      case 'show-prototype-interaction-edit-modal':
        let {
          x,
          y,
          source,
          isBehaviorsOnly
        } = e.payload.args;
        let d = {
          id: isBehaviorsOnly ? uR : _$$o$,
          initialX: x,
          initialY: y,
          shouldPin: source === CanvasComponentType.PROPERTIES_PANEL
        };
        this._store.dispatch(showPickerThunk(d));
        break;
      case 'report-no-video-upload-permissions':
        _$$k3(this._store);
    }
  }
  reset(e) {
    let t = this.getInstanceAndSublayerGUIDs();
    t && Fullscreen.resetSymbolOverridesForNodes(t, e);
  }
  getInstanceAndSublayerGUIDs() {
    let e = Object.keys(this._store.getState().mirror.sceneGraphSelection);
    let t = this._store.getState().mirror.sceneGraph;
    return getInstanceKeys(e, t);
  }
  _applyTextStylingAction(e, t) {
    let i = this._store.getState().mirror.sceneGraph.get(this._state.mirror.appModel.currentPage);
    i && (i.applyTextStylingAction(e), t && Fullscreen.requestNextCommitMergeWithPrevious(t), Fullscreen.triggerAction('commit', {}));
  }
  _openPrototype({
    source: e,
    shouldOpenInNewTab: t,
    isSlides: i,
    isPresenterViewWithPopoutAudienceView: n
  }) {
    let r = PrototypingTsApi.getActivePrototypeStartingPointNodeIdOnCurrentPage();
    let a = this._store.getState().openFile;
    a && this._store.dispatch(_$$K({
      fileKey: a.key,
      startingPointNodeId: r,
      source: e,
      shouldOpenInNewTab: t,
      isSlides: i,
      isPresenterViewWithPopoutAudienceView: n
    }));
  }
  _applyDrawingToolStylingAction(e) {
    switch (e) {
      case DesignGraphElements.VECTOR_PENCIL:
        let t = atomStoreManager.get(GI);
        atomStoreManager.set(GI, {
          ...t,
          strokeWeight: t.strokeWeight === wv ? uM : wv
        });
        return;
      case DesignGraphElements.BRUSH:
        let i = atomStoreManager.get(Vi);
        atomStoreManager.set(Vi, {
          ...i,
          strokeWeight: i.strokeWeight === wv ? uM : wv
        });
        return;
      case DesignGraphElements.HIGHLIGHTER:
        let n = atomStoreManager.get(IZ);
        atomStoreManager.set(IZ, {
          ...n,
          strokeWeight: n.strokeWeight === g5 ? Iz : g5
        });
    }
  }
}
let oy = oA;
let ob = (e, t) => oy()(ov, e, {
  leading: !0,
  maxWait: t,
  trailing: !0
});
let ov = (e, t, i, n, r) => {
  if (e != null) {
    try {
      let a = getInitialOptions().tracking_session_id;
      let s = generateUUIDv4();
      trackEventAnalytics('mirror_frame_tracking', {
        pageName: 'fullscreen',
        fileKey: e,
        pageId: t,
        frameId: i,
        publisher_id: a,
        selection_id: s,
        selection_ordinal: r,
        isOnLG: !0
      });
      sendWithRetry.post(`/api/mobile_app_push/${encodeURIComponent(e)}`, {
        frame_name: toWellFormed(n?.substring(0, 200)),
        frame_id: i,
        selection_id: s,
        tsid: a,
        ord: r
      });
    } catch (t) {
      logError('mobileAppPush', 'error performing mobile app push', {
        fileKey: e,
        frameID: i,
        frameName: n
      });
      reportError(ServiceCategories.MOBILE_PLATFORM, t);
    }
  }
};
let oI = {
  publishFrameSelectionForMirror(e, t, i, r, a) {
    let s = _$$v3.getExperimentNumber('mirror_debounce_exp', 'debounce_ms', -1);
    let o = _$$v3.getExperimentNumber('mirror_debounce_exp', 'max_debounce_wait_ms', -1);
    s > 0 && o > 0 ? (n || (n = ob(s, o)), n(e, t, i, r, a)) : ov(e, t, i, r, a);
  }
};
let oT = Fig.renderWorkerURL;
let ok = getFeatureFlags()?.fullscreen_use_threaded_rendering ? Fig.renderBundleURLs['compiled_wasm.js'] : 'compiled_wasm.js';
let oR = getFeatureFlags()?.fullscreen_use_threaded_rendering ? Fig.renderBundleURLs['compiled_wasm.wasm'] : 'compiled_wasm.wasm';
let oN = class e {
  constructor() {
    this._worker = null;
    this._currentState = 'uninitialized';
    this._previousState = null;
    this._onEnterStateCallbacks = {};
    this._RenderingWorkerStates = {
      uninitialized: {
        spawn: {
          _event: 'spawn',
          _target: 'spawned',
          _callback: this.defaultTransitionCallback
        },
        error: {
          _event: 'error',
          _target: 'error',
          _callback: this.defaultErrorCallback
        }
      },
      spawned: {
        init: {
          _event: 'init',
          _target: 'initializing',
          _callback: this.defaultTransitionCallback
        },
        error: {
          _event: 'error',
          _target: 'error',
          _callback: this.defaultErrorCallback
        }
      },
      initializing: {
        initialized: {
          _event: 'initialized',
          _target: 'initialized',
          _callback: this.defaultTransitionCallback
        },
        error: {
          _event: 'error',
          _target: 'error',
          _callback: this.defaultErrorCallback
        }
      },
      initialized: {
        start: {
          _event: 'start',
          _target: 'starting',
          _callback: this.defaultTransitionCallback
        },
        error: {
          _event: 'error',
          _target: 'error',
          _callback: this.defaultErrorCallback
        }
      },
      starting: {
        started: {
          _event: 'started',
          _target: 'started',
          _callback: this.defaultTransitionCallback
        },
        error: {
          _event: 'error',
          _target: 'error',
          _callback: this.defaultErrorCallback
        }
      },
      started: {
        stop: {
          _event: 'stop',
          _target: 'stopping',
          _callback: this.defaultTransitionCallback
        },
        error: {
          _event: 'error',
          _target: 'error',
          _callback: this.defaultErrorCallback
        }
      },
      stopping: {
        stopped: {
          _event: 'stopped',
          _target: 'stopped',
          _callback: this.defaultTransitionCallback
        },
        error: {
          _event: 'error',
          _target: 'error',
          _callback: this.defaultErrorCallback
        }
      },
      stopped: {
        start: {
          _event: 'start',
          _target: 'starting',
          _callback: this.defaultTransitionCallback
        },
        error: {
          _event: 'error',
          _target: 'error',
          _callback: this.defaultErrorCallback
        }
      }
    };
  }
  defaultTransitionCallback(t, i, n) {
    let r = e.getInstance()._onEnterStateCallbacks[i];
    r && r(t, i, n);
  }
  defaultErrorCallback(e, t, i) {
    logError('RenderingWorker', `Critical error: invalid event ${i} while in state ${e} to ${t}`);
  }
  processStateMachineEvent(e) {
    let t = this._RenderingWorkerStates[this._currentState];
    if (t) {
      let i = t[e];
      i ? (this._previousState = this._currentState, this._currentState = i._target, i._callback && i._callback(this._previousState, this._currentState, e)) : logWarning('RenderingWorker', `No transition found for event ${e} in state ${this._currentState}`);
    } else {
      logError('RenderingWorker', `No state information found for ${this._currentState}`);
    }
  }
  onMessage(t) {
    e.getInstance()._currentState;
    t.data.id;
    let {
      id
    } = t.data;
    id && (id ? e.getInstance().processStateMachineEvent(id) : logError('RenderingWorker', `Unknown event ${id} received`));
  }
  onError(e) {
    logError('RenderingWorker', 'Error from rendering worker', {
      error: e
    });
    e.preventDefault();
  }
  static getInstance() {
    e._instance || (e._instance = new e());
    return e._instance;
  }
  spawnWorker() {
    if (this._worker || this._currentState !== 'uninitialized') {
      logError('RenderingWorker', 'Attempting to spawn the rendering worker but it\'s already spawned');
      return;
    }
    if (this._worker = _$$x4(oT), !this._worker) {
      logError('RenderingWorker', 'Failed to spawn rendering worker');
      this.processStateMachineEvent('error');
      return;
    }
    this._worker.addEventListener('error', this.onError);
    this._worker.addEventListener('message', this.onMessage);
    this.processStateMachineEvent('spawn');
  }
  needsAlphaGPUBackingStore() {
    return !!new URLSearchParams(customHistory.location.search).get('needsAlpha');
  }
  init() {
    if (!this._worker) {
      logError('RenderingWorker', 'Trying to init Rendering Worker but it isn\'t spawned yet');
      return;
    }
    this._currentState === 'spawned' || logError('RenderingWorker', `Trying to init Rendering Worker that isn't valid in state ${this._currentState}`);
    let e = document.querySelector('#fullscreen-root canvas');
    if (!e) {
      logError('RenderingWorker', 'Could not find fullscreen canvas');
      return;
    }
    let t = e.parentElement;
    if (!t) {
      logError('RenderingWorker', 'Could not find fullscreen canvas parent');
      return;
    }
    e.id = 'fullscreen-main-thread-canvas';
    let i = document.createElement('canvas');
    i.id = 'fullscreen-render-worker-canvas';
    t.appendChild(i);
    t.removeChild(e);
    let n = i.transferControlToOffscreen();
    this.processStateMachineEvent('init');
    let r = null;
    try {
      r = self.localStorage;
    } catch (e) {}
    let a = !!(r && !0 === r['low-power']);
    this._worker.postMessage({
      id: 'init',
      jsUrl: ok,
      wasmUrl: oR,
      canvas: n,
      powerPref: a ? 'low-power' : 'high-performance'
    }, [n]);
  }
  start() {
    if (!this._worker || this._currentState in ['initialized', 'stopped']) {
      console.error('Trying to start Rendering Worker from an invalid state', this._currentState);
      return;
    }
    this.processStateMachineEvent('start');
    this._worker.postMessage({
      id: 'start'
    });
  }
  spawnAndStart() {
    this._onEnterStateCallbacks.spawned = () => {
      e.getInstance().init();
    };
    this._onEnterStateCallbacks.initialized = () => {
      e.getInstance().start();
    };
    this.spawnWorker();
  }
};
oN._instance = null;
function oz() {
  return getFeatureFlags().ee_unsanitized_png_custom || getFeatureFlags().ee_unsanitized_png;
}
function oH() {
  if (getFeatureFlags().ee_unsanitized_png_custom) return 'web application/x-figma-png';
  if (getFeatureFlags().ee_unsanitized_png) return 'web image/png';
  throw new Error('Unsanitized PNG is not enabled');
}
class oq {
  constructor() {
    this._hashToCmsItemFieldValue = new Map();
  }
  storeVariableData(e) {
    let t = function (e) {
      let t = 0;
      if (e.length === 0) return t;
      for (let i = 0; i < e.length; i++) {
        t = (t << 5) - t + e.charCodeAt(i);
        t &= t;
      }
      return t;
    }(e.value).toString();
    this._hashToCmsItemFieldValue.set(t, e);
    return t;
  }
  fetchVariableData(e) {
    let t = this._hashToCmsItemFieldValue.get(e);
    return void 0 === t ? null : t;
  }
}
var lc = (e => (e.COPY_PASTE = 'COPY_PASTE', e.COPY_PASTE_SAME_FILE = 'COPY_PASTE_SAME_FILE', e.COPY_PASTE_FROM_FIGMA = 'COPY_PASTE_FROM_FIGMA', e.COPY_PASTE_FROM_FIGJAM = 'COPY_PASTE_FROM_FIGJAM', e.DUPLICATE = 'DUPLICATE', e))(lc || {});
var lu = (e => (e.CLICK_DETAILS = 'CLICK_DETAILS', e))(lu || {});
let lp = new class {
  constructor() {
    this.widgetInsertsFromExisting = {};
    this.widgetImpressions = [];
    this.widgetSelectionStateInteractions = {};
    this.scheduleFlushImpressions = debounce(() => {
      let e = debugState?.getState().openFile?.key ?? null;
      let t = this.createWidgetEvent(null, e, this.widgetImpressions);
      trackEventAnalytics('Widget Impression', t, {
        forwardToDatadog: !0
      });
      this.widgetImpressions = [];
    }, 1e3);
    this.scheduleFlushInsertsFromExisting = debounce(() => {
      let e = debugState?.getState().openFile?.key ?? null;
      for (let [t, i] of Object.entries(this.widgetInsertsFromExisting)) {
        if (!i || i.length === 0) continue;
        let n = this.createWidgetEvent(t, e, i);
        trackEventAnalytics('Widget Insert From Existing', n);
      }
      this.widgetInsertsFromExisting = {};
    }, 1e3);
    this.scheduleFlushSelectionStateInteractions = debounce(() => {
      let e = debugState?.getState().openFile?.key ?? null;
      for (let [t, i] of Object.entries(this.widgetSelectionStateInteractions)) {
        if (!i || i.length === 0) continue;
        let n = this.createWidgetEvent(t, e, i);
        trackEventAnalytics('Widget Selection State Interaction', n);
      }
      this.widgetSelectionStateInteractions = {};
    }, 1e3);
    this.createWidgetEvent = (e, t, i) => {
      let n = {
        fileKey: t,
        pluginIDs: [],
        widgetNodeIDs: [],
        pluginVersionIDs: [],
        publishedPluginIDs: []
      };
      e && (n.context = e);
      n.editorType = debugState?.getState().openFile?.editorType?.toString() ?? void 0;
      i.forEach(({
        widgetVersionID: e,
        widgetID: t,
        widgetNodeID: i
      }) => {
        n.pluginIDs.push(t);
        n.widgetNodeIDs.push(i);
        e && (n.publishedPluginIDs.push(t), n.pluginVersionIDs.push(e));
      });
      return n;
    };
  }
  trackImpression(e) {
    this.widgetImpressions.push(...e);
    this.scheduleFlushImpressions();
  }
  trackInsertsFromExisting(e, t) {
    Object.values(lc).includes(t) && (this.widgetInsertsFromExisting[t] || (this.widgetInsertsFromExisting[t] = []), this.widgetInsertsFromExisting[t].push(e), this.scheduleFlushInsertsFromExisting());
  }
  trackSelectionStateInteraction(e, t) {
    Object.values(lu).includes(t) && (this.widgetSelectionStateInteractions[t] || (this.widgetSelectionStateInteractions[t] = []), this.widgetSelectionStateInteractions[t].push(e), this.scheduleFlushSelectionStateInteractions());
  }
}();
let lw = new class {
  runWidget({
    pluginID: e,
    lifecycleCommand: t,
    pluginVersionID: i
  }) {
    let n = widgetHandlerMap[e];
    let {
      addShutdownAction,
      closePlugin,
      noOpVm
    } = _$$e8();
    addShutdownAction(() => fullscreenValue.commit());
    createPluginInstance(noOpVm, {
      stats: new PluginApiMetrics(),
      name: 'First Party',
      command: JSON.stringify(t),
      queryMode: !1,
      userID: debugState.getState().user?.id || '',
      pluginID: e,
      pluginVersionID: i,
      titleIconURL: '',
      openFileKey: debugState.getState().openFile?.key || '',
      apiVersion: pS,
      closePlugin,
      addShutdownAction,
      apiMode: {
        type: 'WIDGET',
        noOpUI: !0
      },
      enableProposedApi: !0,
      enablePrivatePluginApi: !0,
      deferRunEvent: !1,
      validatedPermissions: PluginPermissions.forFirstPartyPlugin(),
      isLocal: !1,
      capabilities: [],
      allowedDomains: DEFAULT_ALLOWED_ORIGINS,
      editorType: [ManifestEditorType.FIGJAM, ManifestEditorType.FIGMA, ManifestEditorType.SITES],
      html: null,
      incrementalSafeApi: !1,
      enableNativeJsx: !1,
      isPluginExemptFromPluginDataLimits: !0,
      enableResponsiveSetHierarchyMutations: !1
    });
    n(noOpVm.scope);
  }
}();
var lT = (e => (e[e.NONE = 0] = 'NONE', e[e.FIGJAM_ONLY = 1] = 'FIGJAM_ONLY', e[e.FIGMA_ONLY = 2] = 'FIGMA_ONLY', e[e.ORG_MEMBER_ONLY = 3] = 'ORG_MEMBER_ONLY', e[e.DISALLOWED_BY_ORG = 4] = 'DISALLOWED_BY_ORG', e[e.REQUIRES_PAYMENT = 5] = 'REQUIRES_PAYMENT', e[e.AI_DISABLED = 6] = 'AI_DISABLED', e[e.OTHER = 7] = 'OTHER', e))(lT || {});
var lk = (e => (e.WIDGET_CODE_NOT_FOUND = 'Could not find widget code to run', e.WIDGET_CODE_NOT_FOUND_ON_NODE = 'Could not find widget code on the node', e.WIDGET_NOT_RUNNABLE = 'Widget is not runnable', e.WIDGET_NOT_ALLOWED_BY_ORG = 'This widget is not allowed by the user\'s organization', e.WIDGET_NODE_DOES_NOT_EXIST = 'Widget node does not exist', e.AI_DISABLED = 'Your admin has opted out of AI and you cannot use this widget', e))(lk || {});
class lR extends Error {
  constructor(e) {
    super(e);
  }
}
async function lN({
  pluginID: e,
  lifecycleCommand: t,
  widgetAction: i,
  pluginVersionID: n,
  triggeredFrom: r
}) {
  let {
    openFile,
    currentUserOrgId,
    orgById,
    teams
  } = debugState.getState();
  let {
    widgetNodeID
  } = t;
  let c = getSceneGraphInstance().get(widgetNodeID);
  if (!c) throw new lR('Widget node does not exist');
  let u = checkZoomWidgetAccess();
  if (!u.canRun) {
    await showVisualBell(u.message);
    return;
  }
  if (lj() && hasKey(e)) {
    await lO({
      pluginID: e,
      lifecycleCommand: t,
      pluginVersionID: c.widgetVersionId ?? '0'
    });
    return;
  }
  let p = await lP(c, currentUserOrgId);
  let m = !n;
  let h = currentUserOrgId && orgById[currentUserOrgId] || null;
  let g = openFile ? openFile.teamId : '';
  let f = teams && g ? teams[g] : null;
  let _ = !openFile?.canEdit;
  if (cortexAnalyticsPluginIds.has(e) && isAIFeaturesDisabled({
    currentOrg: h,
    currentTeam: f,
    isViewer: _
  })) {
    throw new lR('Your admin has opted out of AI and you cannot use this widget');
  }
  if (!m && h) {
    switch (await _$$y6(p ?? void 0, h)) {
      case PluginInstallStatus.PLUGIN_NOT_ORG_APPROVED:
        let A = getI18nString('widgets.this_widget_is_not_allowed_by_your_organization');
        let y = getI18nString('widgets.this_widget_is_not_allowed_by_your_organization_v2', {
          orgName: h.name,
          widgetName: c.widgetName
        });
        let b = getFeatureFlags().widgets_use_new_org_message ? y : A;
        r !== 'paste_from_url' && (await showVisualBell(b));
        return new lR('This widget is not allowed by the user\'s organization');
      case PluginInstallStatus.PLUGIN_INSTALLABLE:
    }
  }
  if (getFeatureFlags().widgets_multiplayer_local) {
    if (!p) {
      let i = function ({
        pluginID: e,
        lifecycleCommand: t
      }) {
        if (!getFeatureFlags().widgets_multiplayer_local) return null;
        let {
          widgetNodeID
        } = t;
        let n = getSceneGraphInstance().get(widgetNodeID);
        return n && n.getPluginData(e, lD) || null;
      }({
        pluginID: e,
        lifecycleCommand: t,
        pluginVersionID: ''
      });
      if (i) {
        await lF(i, {
          pluginID: e,
          lifecycleCommand: t,
          pluginVersionID: ''
        });
        return;
      }
      r !== 'paste_from_url' && (await showVisualBell(getI18nString('widgets.could_not_find_widget_code_to_run')));
      return new lR('Could not find widget code on the node');
    }
    m && lL(t.widgetNodeID, e, p);
  }
  if (i = i || (t.name === 'mount' ? t.context : t.name), !p) {
    c.widgetVersionId && reportError(ServiceCategories.EXTENSIBILITY, new Error('Could not find widget code to run'), {
      tags: {
        widgetAction: i,
        widgetId: c.widgetId || '',
        widgetVersionId: c.widgetVersionId
      }
    });
    r !== 'paste_from_url' && (await showVisualBell(getI18nString('widgets.could_not_find_widget_code_to_run')));
    return new lR('Could not find widget code to run');
  }
  if (isWidgetPlugin({
    plugin: p
  })) {
    await bT({
      plugin: p,
      command: JSON.stringify(t),
      queryMode: !1,
      isWidget: !0,
      widgetAction: i,
      forcePluginVersionId: c.widgetVersionId,
      runMode: 'default',
      triggeredFrom: r || 'contextmenu',
      openFileKey: openFile?.key || ''
    });
  } else {
    throw new lR('Widget is not runnable');
  }
}
async function lP(e, t) {
  return getWidgetVersionData(e) || (!e.widgetId || !e.widgetVersionId || hasKey(e.widgetId) ? null : (await $Z(e.widgetId, e.widgetVersionId, t)) ?? null);
}
async function lO({
  pluginID: e,
  lifecycleCommand: t,
  pluginVersionID: i
}) {
  if (!lj()) return;
  let n = getValueAtIndex(e, i);
  if (!n) return;
  let {
    openFile
  } = debugState.getState();
  let s = handleSelectedView();
  if (!s) throw new Error('Cannot run widget while logged out');
  let o = generateRandomID();
  pluginState.currentPluginRunID = o;
  try {
    await E9({
      allowedDomains: DEFAULT_ALLOWED_ORIGINS,
      apiVersion: pS,
      capabilities: [],
      stats: new PluginApiMetrics(),
      checkSyntax: !0,
      code: `(${n})();`,
      command: JSON.stringify(t),
      disableSilenceConsole: !0,
      enablePrivatePluginApi: !0,
      enableProposedApi: !0,
      errorHandler: e => console.error(e),
      isLocal: !0,
      isWidget: !0,
      name: 'Widget Plugin',
      openFileKey: openFile.key,
      permissions: PluginPermissions.forTest(),
      pluginID: e,
      pluginRunID: o,
      pluginVersionID: i,
      queryMode: !1,
      showLaunchErrors: !0,
      showRuntimeErrors: !0,
      testMessageHandler: isInteractionPathCheck() ? r : void 0,
      titleIconURL: '',
      userID: s,
      vmType: 'cppvm',
      editorType: [ManifestEditorType.FIGMA, ManifestEditorType.FIGJAM],
      incrementalSafeApi: !1,
      enableNativeJsx: !1,
      enableResponsiveSetHierarchyMutations: !1
    });
  } finally {
    pluginState.currentPluginRunID = null;
  }
}
let lD = 'localWidgetCode';
async function lL(e, t, i) {
  let n;
  let r;
  let a = getSceneGraphInstance().get(e);
  if (a) {
    if (hasLocalFileId(i)) {
      [n, r] = await Promise.all([loadPluginManifest(i.localFileId, {
        resourceType: 'widget',
        ignoreMissingEditorType: !0,
        isPublishing: !1
      }), loadLocalPluginSource(i.localFileId)]);
    } else {
      n = i.manifest;
      let e = await setupPluginCodeCache.getAndCache(i, debugState.getState().currentUserOrgId || void 0);
      if (!e) throw new Error(`No code found for ${i} version`);
      r = e;
    }
    permissionScopeHandler.plugin('save-widget-code-setPluginData', () => {
      a.setPluginData(t, lD, JSON.stringify({
        manifest: n,
        code: r
      }));
    });
  }
}
async function lF(e, {
  lifecycleCommand: t,
  pluginVersionID: i
}) {
  try {
    let n = generateRandomID();
    pluginState.currentPluginRunID = n;
    let {
      manifest,
      code
    } = JSON.parse(e);
    let {
      openFile
    } = debugState.getState();
    let o = handleSelectedView();
    if (!o) throw new Error('Cannot run widget while logged out');
    await E9({
      allowedDomains: manifest.networkAccess?.allowedDomains ?? DEFAULT_ALLOWED_ORIGINS,
      apiVersion: manifest.api,
      capabilities: manifest.capabilities ?? [],
      checkSyntax: !1,
      code,
      command: JSON.stringify(t),
      disableSilenceConsole: !1,
      enablePrivatePluginApi: !!manifest.enablePrivatePluginApi,
      enableProposedApi: !!manifest.enableProposedApi,
      isLocal: !0,
      isWidget: !0,
      name: manifest.name,
      openFileKey: openFile.key,
      permissions: PluginPermissions.forLocalPlugin({
        manifest
      }),
      pluginID: manifest.id || '',
      pluginRunID: n,
      pluginVersionID: i,
      queryMode: !1,
      showLaunchErrors: !0,
      showRuntimeErrors: !0,
      stats: new PluginApiMetrics(),
      titleIconURL: '',
      userID: o,
      vmType: 'cppvm',
      editorType: [ManifestEditorType.FIGMA, ManifestEditorType.FIGJAM],
      incrementalSafeApi: !1,
      enableNativeJsx: !1,
      enableResponsiveSetHierarchyMutations: !1
    });
  } catch (t) {
    console.error(t);
    let e = t && t.message || getI18nString('widgets.an_error_occurred_while_running_this_widget');
    showVisualBell(e);
  } finally {
    pluginState.currentPluginRunID = null;
  }
}
getFeatureFlags().widgets_multiplayer_local && (window.saveWidgetCodeOnSelectedNode = () => {
  let e = 0;
  let {
    mirror
  } = debugState.getState();
  for (let i of Object.keys(mirror.sceneGraphSelection)) {
    let t = getSceneGraphInstance().get(i);
    if (!t || t.type !== 'WIDGET') continue;
    let n = getWidgetVersionData(t);
    if (!n) {
      console.warn(`Couldn't fetch plugin for node with id ${t.guid}`);
      continue;
    }
    let r = t.widgetId;
    if (r == null) {
      console.warn(`Node with id ${t.guid} is missing widgetId`);
      continue;
    }
    lL(i, r, n);
    e++;
  }
  console.log(`Stored widget code on ${e} ${e === 1 ? 'node' : 'nodes'}`);
});
let lM = new class {
  constructor() {
    this.activeWidget = null;
    this.runQueue = [];
  }
  findQueueIndex(e) {
    for (let t = 0; t < this.runQueue.length; t++) {
      if (deepEqual(this.runQueue[t], e)) return t;
    }
    return -1;
  }
  pushFront(e) {
    if (e.lifecycleCommand.name !== 'rerender') {
      this.runQueue.unshift(e);
      return;
    }
    let t = this.findQueueIndex(e);
    t !== 0 && (t !== -1 && this.runQueue.splice(t, 1), this.runQueue.unshift(e));
  }
  pushBack(e) {
    if (e.lifecycleCommand.name !== 'rerender') {
      this.runQueue.push(e);
      return;
    }
    this.findQueueIndex(e) === -1 && this.runQueue.push(e);
  }
  runUserInitiatedWidget(e) {
    let t = e.pluginID;
    if (isValidWidgetType(t)) {
      lw.runWidget({
        ...e,
        pluginID: t
      });
      return;
    }
    let i = this.activeWidget && e.forceRunLowPriority;
    let n = this.activeWidget && e.allowToRunLowPriority && this.activeWidget.lifecycleCommand.widgetNodeID === e.lifecycleCommand.widgetNodeID;
    if (!i && !n) return this.setRunningWidget(e);
    this.pushBack(e);
  }
  runLowPriority(e) {
    this.activeWidget ? this.pushBack(e) : this.setRunningWidget(e);
  }
  setRunningWidget(e) {
    if (this.activeWidget?.lifecycleCommand.name === 'rerender') {
      this.pushFront(e);
      return;
    }
    let t = {
      ...e,
      promise: new Promise(() => {})
    };
    t.promise = (async () => {
      try {
        await lN(e);
      } catch (i) {
        let t = i instanceof Error ? i : new Error('Unable to run widget code');
        i instanceof lR || reportError(ServiceCategories.EXTENSIBILITY, t, {
          tags: {
            widgetAction: e.widgetAction,
            widgetId: e.pluginID,
            widgetVersionId: e.pluginVersionID
          }
        });
        return t;
      } finally {
        t === this.activeWidget && (this.activeWidget = null, this.runQueue.length && this.setRunningWidget(this.runQueue.shift()));
      }
    })();
    this.activeWidget = t;
    return t.promise;
  }
}();
function lj() {
  return isInteractionPathCheck() || !1;
}
function lU(e, t) {
  if (isInteractionPathCheck() || !t) return;
  let {
    publishedCanvasWidgetVersions,
    fetchedCanvasWidgetVersions,
    publishedWidgets,
    currentUserOrgId,
    orgById,
    openFile,
    teams
  } = debugState.getState();
  let d = t ? publishedCanvasWidgetVersions[e]?.[t] : void 0;
  let c = getCurrentUserOrg({
    orgById,
    currentUserOrgId
  });
  if (!d) return fetchedCanvasWidgetVersions[e]?.[t] ? c?.widgets_whitelist_enforced ? lT.DISALLOWED_BY_ORG : lT.OTHER : void 0;
  let u = openFile ? openFile.teamId : '';
  let p = teams && u ? teams[u] : null;
  let m = !openFile?.canEdit;
  if (cortexAnalyticsPluginIds.has(e) && isAIFeaturesDisabled({
    currentOrg: c,
    currentTeam: p,
    isViewer: m
  })) {
    return lT.AI_DISABLED;
  }
  if (d.org_id && d.org_id !== currentUserOrgId && c) return lT.OTHER;
  if (d.org_id && !canMemberOrg(currentUserOrgId, debugState.getState())) return lT.ORG_MEMBER_ONLY;
  if (checkResourceEligibilityDebug(publishedWidgets[e])) return lT.REQUIRES_PAYMENT;
  let h = getFullscreenViewEditorType();
  if (h && d.manifest.editorType && !d.manifest.editorType.includes(h)) return h === 'figjam' ? lT.FIGMA_ONLY : lT.FIGJAM_ONLY;
}
class lB {
  constructor(e) {
    this.runWidgets = e;
    this.hostInfoMap = new Map();
    this.stickableInfoMap = new Map();
    this.queueRun = function (e) {
      let t = debugState.getState().mirror.appModel.activeUserAction;
      debugState.subscribe(() => {
        t = debugState.getState().mirror.appModel.activeUserAction;
        [UserActionState.DEFAULT, UserActionState.SELECTING_TEXT].includes(t) && i && (e(), i = !1);
      });
      let i = !1;
      return () => {
        [UserActionState.DEFAULT, UserActionState.SELECTING_TEXT].includes(t) ? (e(), i = !1) : i = !0;
      };
    }(() => {
      this.runWidgets(this.hostInfoMap, this.stickableInfoMap);
      this.hostInfoMap = new Map();
      this.stickableInfoMap = new Map();
    });
  }
  stickableAdded(e, t) {
    let i = this.hostInfoMap.get(e) ?? {
      addedStickables: new Set(),
      removedStickables: new Set()
    };
    i.addedStickables.add(t);
    i.removedStickables.$$delete(t);
    this.hostInfoMap.set(e, i);
    let n = this.stickableInfoMap.get(t) ?? {
      oldHost: null,
      newHost: null
    };
    n.newHost = e;
    this.stickableInfoMap.set(t, n);
    this.queueRun();
  }
  stickableRemoved(e, t) {
    let i = this.hostInfoMap.get(e) ?? {
      addedStickables: new Set(),
      removedStickables: new Set()
    };
    i.removedStickables.add(t);
    i.addedStickables.$$delete(t);
    this.hostInfoMap.set(e, i);
    let n = this.stickableInfoMap.get(t) ?? {
      oldHost: null,
      newHost: null
    };
    n.oldHost = e;
    n.newHost = null;
    this.stickableInfoMap.set(t, n);
    this.queueRun();
  }
}
class lV {
  constructor() {
    this.stickableManager = new lB((e, t) => {
      for (let [t, {
        addedStickables: i,
        removedStickables: n
      }] of e.entries()) {
        let e = getSceneGraphInstance().get(t);
        e && e.type === 'WIDGET' && e.widgetEvents.find(e => e === 'ATTACHED_STICKABLES_CHANGED') && lM.runLowPriority({
          pluginID: e.widgetId,
          pluginVersionID: e?.widgetVersionId || '',
          lifecycleCommand: {
            widgetNodeID: t,
            name: 'attachedStickablesChanged',
            addedNodes: Array.from(i),
            removedNodes: Array.from(n)
          }
        });
      }
      for (let [e, {
        oldHost: i,
        newHost: n
      }] of t.entries()) {
        let t = getSceneGraphInstance().get(e);
        t && t.type === 'WIDGET' && t.widgetEvents.find(e => e === 'STUCK_STATUS_CHANGED') && lM.runLowPriority({
          pluginID: t.widgetId,
          pluginVersionID: t?.widgetVersionId || '',
          lifecycleCommand: {
            widgetNodeID: e,
            name: 'stuckStatusChanged',
            oldHost: i,
            newHost: n
          }
        });
      }
    });
    this.didCallTextEditEnd = !1;
    this.didStartPreloadingSandbox = !1;
    this.hasCheckedLocalWidgetsInPlaygroundFile = !1;
  }
  mountWidget(e, t, i, n, r, a, s) {
    let o = getSceneGraphInstance().get(t);
    if (!o) {
      dequeuePluginStatus({
        shouldShowVisualBell: !0
      });
      return new Error(`Widget node ${t} doesn't exist.`);
    }
    let l = o.reversedChildrenGuids.length === 0;
    let d = o.containingCanvas;
    let c = getSceneGraphInstance().getCurrentPage();
    l && c?.guid === d && this.onImpression([{
      widgetNodeID: t,
      widgetID: e,
      widgetVersionID: o.widgetVersionId
    }]);
    return lM.runUserInitiatedWidget({
      pluginID: e,
      pluginVersionID: o.widgetVersionId || '',
      lifecycleCommand: {
        name: 'mount',
        context: i,
        isInsert: l,
        widgetNodeID: t,
        position: n
      },
      widgetAction: r,
      triggeredFrom: a,
      forceRunLowPriority: s
    });
  }
  mountWidgetLowPriority(e, t, i, n, r, a) {
    return this.mountWidget(e, t, i, n, r, a, !0);
  }
  onInsertFromExisting(e, t) {
    isValidWidgetType(e.widgetID) || (this.addWidgetToRecentlyUsed(e.widgetVersionID, e.widgetID), lp.trackInsertsFromExisting(e, t));
  }
  trackSelectionStateInteraction(e, t) {
    isValidWidgetType(e.widgetID) || lp.trackSelectionStateInteraction(e, t);
  }
  async onImpression(e) {
    let t = e.filter(e => !!e.widgetVersionID);
    lp.trackImpression(e.filter(e => !isValidWidgetType(e.widgetID)));
    this.trackLocalWidgetsInPlaygroundFile(e);
    let i = await getFullscreenViewFile(debugState);
    i?.canEditCanvas && (debugState?.dispatch(Cf({
      widgetIDAndVersions: t
    })), this.didStartPreloadingSandbox || (_$$a4('cppvm').catch(() => {}), this.didStartPreloadingSandbox = !0));
    return !0;
  }
  trackLocalWidgetsInPlaygroundFile(e) {
    if (this.hasCheckedLocalWidgetsInPlaygroundFile) return;
    let {
      selectedView
    } = debugState?.getState();
    if (selectedView.view === 'fullscreen' && selectedView.tryPluginId && selectedView.isPlaygroundFile) {
      let i = e.filter(e => !e.widgetVersionID);
      i.length > 0 && trackGenericEvent('local_widget_impression_playground_file', {
        pluginId: selectedView.tryPluginId,
        isWidget: !0,
        localWidgetIds: i.map(e => e.widgetID)
      });
    }
    this.hasCheckedLocalWidgetsInPlaygroundFile = !0;
  }
  onTextEditEnd(e, t, i) {
    let n = i[0];
    let r = getSceneGraphInstance().get(n.id);
    if (r?.type !== 'TEXT') throw new Error('Can\'t have a text event on non text node');
    widgetInteractionTracker.startInteraction(e, 'textEditEnd');
    this.didCallTextEditEnd = !0;
    let a = {
      pluginID: e,
      pluginVersionID: getSceneGraphInstance().get(t)?.widgetVersionId || '',
      allowToRunLowPriority: !0,
      lifecycleCommand: {
        name: 'textEditEnd',
        widgetNodeID: t,
        bubbledNodes: i,
        event: {
          characters: r.characters
        }
      }
    };
    lM.runUserInitiatedWidget(a)?.finally(() => {
      this.didCallTextEditEnd = !1;
    });
  }
  logMultipleInputEditorsInWidget(e, t) {
    t > 1 && trackEventAnalytics('Widget Multiple Input Editors', {
      pluginID: e,
      numEditors: t
    });
  }
  queueRender(e, t) {
    let i = getSceneGraphInstance().get(t);
    if (i?.isEmbed || i?.isLinkPreview) {
      reportError(ServiceCategories.EXTENSIBILITY, new Error(`Calling queuRender from a first party widget for pluginID=${e}, widgetNodeID=${t}`));
      return;
    }
    lM.runLowPriority({
      lifecycleCommand: {
        name: 'rerender',
        widgetNodeID: t
      },
      pluginID: e,
      pluginVersionID: i?.widgetVersionId || ''
    });
  }
  renderFirstPartyWidget(e, t) {
    lM.runUserInitiatedWidget({
      pluginID: e,
      lifecycleCommand: {
        name: 'rerender',
        widgetNodeID: t
      },
      pluginVersionID: ''
    });
  }
  clickWidget(e, t, i) {
    if (!isValidWidgetType(e) && !checkCanRunExtensions()) return PluginManager.instance.handleUpgrade(PluginAction.RUN_WIDGET);
    widgetInteractionTracker.startInteraction(e, 'click');
    lM.runUserInitiatedWidget({
      pluginID: e,
      lifecycleCommand: {
        name: 'click',
        widgetNodeID: t,
        bubbledNodes: i
      },
      allowToRunLowPriority: this.didCallTextEditEnd,
      pluginVersionID: getSceneGraphInstance().get(t)?.widgetVersionId || ''
    });
    let n = getSceneGraphInstance().get(t);
    this.addWidgetToRecentlyUsed(n?.widgetVersionId, e);
    getFullscreenViewEditorType() === 'figma' && handleAtomEvent({
      id: 'widget_run_from_figma'
    });
  }
  runPropertyMenuCallback(e, t, i, n) {
    if (!isValidWidgetType(e) && !checkCanRunExtensions()) return PluginManager.instance.handleUpgrade(PluginAction.RUN_WIDGET);
    this.didCallTextEditEnd = !1;
    Fullscreen.setDefaultEditMode();
    let r = {
      pluginID: e,
      lifecycleCommand: {
        name: 'propertymenu',
        widgetNodeID: t,
        propertyName: i,
        propertyValue: n
      },
      pluginVersionID: getSceneGraphInstance().get(t)?.widgetVersionId || '',
      allowToRunLowPriority: this.didCallTextEditEnd
    };
    lM.runUserInitiatedWidget(r);
    let a = getSceneGraphInstance().get(t);
    this.addWidgetToRecentlyUsed(a?.widgetVersionId, e);
  }
  terminateRunningWidget(e, t) {
    mK({
      pluginID: e,
      widgetNodeID: t
    }) && handlePluginError();
  }
  clickHyperlink(e) {
    customHistory.postRedirect(`/exit?url=${encodeURIComponent(e)}`, '_blank');
  }
  addWidgetToRecentlyUsed(e, t) {
    if (e && !this.canInteractWithWidget(t, e)) return;
    let i = debugState.getState().selectedView.editorType;
    if (void 0 !== i) {
      let n = mapEditorTypeTo(i);
      debugState?.dispatch(addWidgetToRecentsThunk({
        storeInRecentsKey: n,
        id: t,
        version: e || '',
        currentUserId: handleSelectedView()
      }));
    }
  }
  async getWidgetIconBuffer(e, t) {
    let {
      publishedCanvasWidgetVersions,
      currentUserOrgId
    } = debugState.getState();
    let r = !!t;
    let a = t ? publishedCanvasWidgetVersions[e]?.[t] ?? (await $Z(e, t, currentUserOrgId)) : void 0;
    let s = r ? MAX_CANVAS_SIZE : ZI;
    let o = s / 4;
    let l = _$$Dl(s, s);
    let d = l.getContext('2d');
    if (d.beginPath(), d.moveTo(s / 2, 0), d.arcTo(s, 0, s, s, o), d.arcTo(s, s, 0, s, o), d.arcTo(0, s, 0, 0, o), d.arcTo(0, 0, s, 0, o), d.clip(), !r) {
      d.fillStyle = 'black';
      d.globalAlpha = 0.8;
      d.fill(_$$c7, 'evenodd');
      return fetchImageData(l.toDataURL('image/png'));
    }
    if (!a) {
      d.fillStyle = '#e5e5e5';
      d.fillRect(0, 0, s, s);
      return fetchImageData(l.toDataURL('image/png'));
    }
    try {
      let e = `${a.redirect_icon_url}&cors=1`;
      return await lG(e);
    } catch (i) {
      let t = i instanceof Error ? i : new Error('Failed to get widget icon');
      reportError(ServiceCategories.EXTENSIBILITY, t, {
        extra: {
          widgetID: e,
          msg: t.message,
          redirectIconUrl: a?.redirect_icon_url,
          originalError: JSON.stringify(i)
        }
      });
      return t;
    }
  }
  showTooltip(e, t) {
    let i = getSceneGraphInstance().get(e);
    if (!i) return;
    let n = {
      bounds: t,
      text: i.widgetTooltip
    };
    deepEqual(n, atomStoreManager.get(HV)) || HV.syncFromFullscreen(n);
  }
  hideTooltip() {
    HV.syncFromFullscreen(null);
  }
  stickableAdded(e, t) {
    this.stickableManager.stickableAdded(e, t);
  }
  stickableRemoved(e, t) {
    this.stickableManager.stickableRemoved(e, t);
  }
  showNonInteractableWidgetTooltip(e, t) {
    let i;
    let n = getSceneGraphInstance().get(e);
    if (!n || !n.widgetId) return;
    let r = lU(n.widgetId, n.widgetVersionId);
    if (!r) return;
    switch (r) {
      case lT.FIGMA_ONLY:
        i = getI18nString('widgets.widget_can_only_run_in_figma');
        break;
      case lT.FIGJAM_ONLY:
        i = getI18nString('widgets.widget_can_only_run_in_figjam');
        break;
      case lT.ORG_MEMBER_ONLY:
        {
          let {
            currentUserOrgId,
            orgById
          } = debugState.getState();
          let n = getCurrentUserOrg({
            orgById,
            currentUserOrgId
          });
          i = getI18nString('widgets.widget_only_for_members_of_org', {
            orgName: n.name
          });
          break;
        }
      case lT.REQUIRES_PAYMENT:
        i = getI18nString('widgets.paid_widgets_can_only_be_run_after_purchasing');
        break;
      case lT.AI_DISABLED:
        i = getI18nString('widgets.your_organization_has_opted_out_of_ai');
        break;
      case lT.DISALLOWED_BY_ORG:
        {
          let {
            currentUserOrgId,
            orgById
          } = debugState.getState();
          let r = getCurrentUserOrg({
            orgById,
            currentUserOrgId
          });
          let a = getI18nString('widgets.this_widget_is_not_allowed_by_your_organization');
          let s = getI18nString('widgets.this_widget_is_not_allowed_by_your_organization_v2', {
            orgName: r.name,
            widgetName: n.widgetName
          });
          i = getFeatureFlags().widgets_use_new_org_message ? s : a;
        }
      case lT.OTHER:
    }
    if (!i) return;
    let a = {
      bounds: t,
      text: i
    };
    HV.syncFromFullscreen(a);
  }
  canInteractWithWidget(e, t) {
    return !lU(e, t);
  }
  canViewWidgetDetails(e, t) {
    let i = lU(e, t);
    return i === lT.REQUIRES_PAYMENT || !i;
  }
  isRenderingWidget(e) {
    return isWidgetRendering(e);
  }
}
async function lG(e) {
  return (await lH(() => fetch(e))).arrayBuffer().then(e => new Uint8Array(e));
}
function lz() {
  return WAFValidationHandlerInstance.waitForWAFValidation('challenge');
}
async function lH(e) {
  let t = !1;
  isDevEnvironment() && (await lz(), t = !0);
  let i = await e();
  return t || i.status !== 202 || i.headers.get('x-amzn-waf-action') !== 'challenge' ? i : (await lz(), e());
}
let lW = !1;
let lK = /^\/file\/([^/]+)(\/[^/]+)?$/;
function lY(e, t) {
  if (typeof e != 'object' || !e) return;
  let {
    paints,
    encodedPaints,
    styleId,
    strokeWeight,
    strokeOpacity,
    strokeCap,
    dashPattern,
    strokeBrushGuid,
    scatterStrokeSettings,
    stretchStrokeSettings,
    dynamicStrokeSettings
  } = e;
  Number.isFinite(strokeWeight) && paints && t.syncFromFullscreen({
    paints,
    encodedPaints,
    styleId,
    strokeWeight,
    strokeOpacity,
    strokeCap,
    dashPattern,
    strokeBrushGuid,
    scatterStrokeSettings,
    stretchStrokeSettings,
    dynamicStrokeSettings
  });
}
export function $$lq1(e, t, i, n) {
  if (!lW) {
    lW = !0;
    let r = getInitialOptions().frame_context;
    let a = getInitialOptions().editing_file;
    r?.type === 'integration' && a?.editor_type !== 'whiteboard' && updateAppCapabilities(e => ({
      ...e,
      appIsReadOnly: !0
    }));
    documentMode === DocumentMode.RECOVERY && a?.editor_type !== 'whiteboard' && updateAppCapabilities(e => ({
      ...e,
      appIsRecovery: !0
    }));
    setFullscreen(new $$lQ0(e, t, n));
    setInputValue(new sB(t));
    setUserValue(new OutOfMemoryHandler(t));
    setSessionValue(new _$$Z3(t));
    setFlagValue(new _$$L(t));
    setAdditionalValue(new oq());
    Zb(t);
    gh();
    setComponentPropBindings();
    setupMultiplayerSession();
    zs(t);
    Db();
    _$$eY2();
    $W();
    mQ();
    setupEventHandlers();
    _$$T4(new lV());
    initJsKiwiSerialization();
    _$$a();
    setModalValue(new t4(t));
    initializePdfImportManager();
    z4();
    fG();
    LC();
    _$$n6(t);
    _$$_2();
    xQ();
    initializeAssetMirrorManager();
    _$$tO();
    initializeFullscreenAPI();
    XR();
    qZ();
    OX();
    PR();
    bJ();
    initializeNodeChangeHandler();
    qb();
    pP();
    YL();
    _$$bJ();
    jx(t);
    _$$y5(i);
    _$$no();
    initializeMissingFontTracker();
    initializeFullscreenConfig();
    _$$fT();
    h$();
    setBranchingWebBindings();
    pH(t);
    _$$A7();
    initializeNetworkRequestHandler();
    initializeShadowReadReporter();
    EA();
    setScenegraphStringManagementBindings();
    wy();
    _$$e7();
    T6();
    _p(t);
    initializeSceneGraphManager();
    initializeWebGPUContext();
    _$$hR();
    window.App = {
      triggerAction(e) {
        switch (e) {
          case 'prune-derived-data':
          case 'dump-pending-registers':
            fullscreenValue.triggerActionInUserEditScope(e);
            break;
          default:
            console.error(`The action ${e} is disabled in release builds.`);
        }
      }
    };
    window.addEventListener('focus', () => {
      fullscreenValue.isReady() && Fullscreen?.onWindowFocus();
    });
    window.addEventListener('storage', e => {
      if (fullscreenValue.isReady() && e.key) {
        let t = e.key;
        runProtected(() => {
          Fullscreen?.onStorage(t);
        });
      }
    });
    window.prompt = (e, t) => {
      let i = '';
      alert(i = 'An error occurred. Please contact support. Sorry for the inconvenience.');
      return i;
    };
  }
  return fullscreenValue;
}
getFeatureFlags().ce_aal_enable_debug && (window.AAL_SETTINGS = _$$N, window.resetAALConstants = _$$e3);
let l$ = null;
async function lZ(e) {
  if (l$ && e === l$.fileKey) return l$;
  let t = `https://s3-us-west-2.amazonaws.com/figma-fixed-scrolling/${getInitialOptions().cluster_name}/${e}`;
  let i = await fetch(t);
  if (i.status === 200) {
    let t = await i.json();
    if (!t.fileKey || !t.fixedScrolling) throw new Error(`Broken-fixed-scrolling metadata for file ${e} is missing 'fileKey' or 'fixedScrolling'.`);
    l$ = t;
    return t;
  }
  if (i.status === 404 || i.status === 403) {
    let t = {
      fileKey: e,
      fixedScrolling: []
    };
    l$ = t;
    return t;
  }
  throw new Error(`Broken-fixed-scrolling metadata request error: ${i.status}, ${i.statusText}`);
}
let lX = class e extends sP(sN(sR)) {
  constructor(t, i, n) {
    super();
    this._isDesktopAppRunning = !1;
    this._readyStartTime = 0;
    this.session = {
      user: null
    };
    this._memorySpikeOnFileLoadBytes = 0;
    this.fileArrayToString = null;
    this.loadAndStartFullscreenIfNecessary = singletonAsync(async () => {
      let t = isInteractionPathCheck();
      if (this._readyStartTime = window.performance.now(), fullscreenPerfManager.start('loadAndStartFullscreen'), e.startFetchingFontList(), e.startFetchingInterfaceFont(), canOpenUrlInDesktop(location.href).then(e => {
        this._isDesktopAppRunning = e;
        e && _$$N3.shouldShowOnce() && this._store.dispatch(showOpenDesktopAppModal(PluginRunForContext.FOR_OPEN));
      }), e.prepareSpellCheck(), t && console.log('isMacDebugApp', isFigmaNativeApp), isFigmaNativeApp) {
        await this.onReady();
        Fullscreen?.debugMacAppIsStartingFullscreen();
        document.body.parentElement.style.backgroundColor = 'transparent';
      } else {
        let e = this._getTsApisForWasm();
        t && console.log('About to initialize WebGPU');
        await initializeWebGPUDevice();
        t && console.log('About to initialize fullscreen');
        await initializeWasm(e);
        t && console.log('Finished initializing fullscreen');
        await this.onReady();
        t && console.log('Finished onReady');
      }
      subscribeVisualBellSettings();
      registerVisualBellSettingsListener();
      setHeapMemoryMode(documentMode);
    });
    this._hasSelection = () => !!AppStateTsApi && !AppStateTsApi.editorState().selectionEmpty?.getCopy();
    this._currentFileThumbnail = () => {
      let e = transformOpenFileObject(this._store?.getState());
      return e?.thumbnailGuid;
    };
    this._isSelectedNodeCurrentThumbnail = () => this._currentFileThumbnail() === this._selectedValidThumbnailNodeIds()[0];
    this.handleSketchImportEvent = e => {
      if (this.hasUnsavedChanges() || !e.dataTransfer || e.dataTransfer.files.length !== 1) return !1;
      let t = e.dataTransfer.files.item(0);
      return !!(t && t.name.toLowerCase().endsWith('.sketch')) && (this.backToFiles(), this._store.dispatch(b6(e.dataTransfer)), !0);
    };
    this.updateSelectionProperties = (e, t = {}) => {
      let i = t.shouldCommit ?? yesNoTrackingEnum.YES;
      let n = t.overwrite ?? VisibilityCondition.ALWAYS;
      let r = t.editScopeType ?? SourceType.USER;
      updateSelectionProperties(e, this._state.mirror.selectedStyleProperties, r, i, n);
    };
    this.nullCurrentSelectedProperty = {
      currentSelectedProperty: {
        type: NodePropertyCategory.NONE,
        indices: []
      }
    };
    this.updateAppModel = e => {
      updateFullscreenAppModel(e);
    };
    this.resetLoadedFigFile = () => {
      CorePerfInfo && CorePerfInfo?.resetLocalMax();
      userValue && userValue.resetOOMState();
      this._figFileLoadPromise = new Promise(e => {
        this._figFileLoadPromiseResolve = e;
      });
    };
    this.currentOrgId = () => this._state.currentUserOrgId || null;
    this.currentTeamId = () => {
      let {
        selectedView,
        folders
      } = this._state;
      if (selectedView.view === 'team') return selectedView.teamId;
      if (selectedView.view === 'folder') {
        let i = folders[selectedView.folderId];
        return i ? i.team_id : null;
      }
      return null;
    };
    this.triggerActionEnum = (e, t) => {
      if (e === Command.ENTER_LAYOUT_MODE) {
        let e = this._store.getState().selectedView;
        this._store.dispatch(selectViewAction({
          ...e,
          versionId: void 0
        }));
      }
      if (t != null && typeof t != 'object') throw new Error(`Invalid payload for action ${e}`);
      Fullscreen?.triggerActionEnum(e, t);
    };
    this.triggerActionEnumInUserEditScope = (e, t) => {
      permissionScopeHandler.user(Command[e], () => this.triggerActionEnum(e, t));
    };
    this.triggerAction = (e, t) => {
      if (e === 'enter-layout-mode') {
        let e = this._store.getState().selectedView;
        this._store.dispatch(selectViewAction({
          ...e,
          versionId: void 0
        }));
      }
      if (t != null && typeof t != 'object') throw new Error(`Invalid payload for action ${e}`);
      Fullscreen?.triggerAction(e, t);
    };
    this.triggerActionInUserEditScope = (e, t) => {
      permissionScopeHandler.user(e, () => this.triggerAction(e, t));
    };
    this.commit = () => {
      if (!Fullscreen) throw new Error('Fullscreen is not available');
      return Fullscreen.commit();
    };
    this.getCurrentFileName = () => this._state.openFile?.name || 'Untitled';
    this.isCopyExportRestricted = () => this._state.openFile != null && isExportRestricted(this._state.openFile);
    this.onShowImageScaledDownWarningInfoClick = () => {
      customHistory.unsafeRedirect('https://help.figma.com/hc/articles/360040028034', '_blank');
      this.dispatch(VisualBellActions.dequeue({}));
    };
    this.onShowGIFConvertedAndScaledDownWarningInfoClick = () => {
      customHistory.unsafeRedirect('https://help.figma.com/hc/articles/360040028034', '_blank');
      this.dispatch(VisualBellActions.dequeue({}));
    };
    this._viewportQueryParamValue = '';
    this.hasUnsavedChanges = () => !!(this._state.saveStatus && this._state.saveStatus.hasUnsavedChanges);
    this.shouldSuppressUnsavedChangesUI = () => !!(getFeatureFlags().suppress_unsaved_changes_ui && this._state.saveStatus && this._state.saveStatus.tabCloseText === SaveConnectionIssues.SUPPRESS_UNSAVED_CHANGES_UI);
    this.dispatch = (...e) => {
      if (!this._store) throw new Error('Trying to dispatch before we\'ve been initialized');
      this._store.dispatch(...e);
    };
    this.dispatchIfSaved = (...e) => {
      if (!this.hasUnsavedChanges() || this.shouldSuppressUnsavedChangesUI()) {
        this.dispatch(...e);
        return;
      }
      if (startAutosaveWait(() => {
        this.dispatch(handleAutosaveAndNavigationThunk());
      })) {
        return;
      }
      let t = getI18nString('autosave.unable_to_leave_document.unsaved_changes_save_in_background');
      !1 === navigator.onLine && (t = getI18nString('autosave.unable_to_leave_document.pending_changes'));
      this.dispatch(showModalHandler({
        type: autosaveErrorModal,
        data: {
          message: t
        }
      }));
    };
    this.restoreSoftDeletedNode = e => {
      Fullscreen?.restoreSoftDeletedNode(e);
    };
    this.handleUpgradeRefresh = () => {
      customHistory.reload('Multiplayer got handleUpgradeRefresh');
    };
    this._writeFilesQueue = [];
    this.toggleMenu = (e, t, i) => {
      if (e === SettingsAction.SEARCH) {
        Jf(this._state.dropdownShown) ? jD(this.dispatch, this._state.dropdownShown, {
          forceClose: t === 'toolbar'
        }) : $I({
          trackingData: {
            source: t,
            keyboardShortcut: i
          }
        });
        return;
      }
      if (e === SettingsAction.PREFERENCES) {
        if (TY(this._state.dropdownShown)) {
          this.dispatch(updateDropdownSelectionAction({
            type: _$$pi,
            data: {
              selectionToUpdate: SettingsAction.PREFERENCES
            }
          }));
        } else {
          let t = this._state.mirror.appModel.showUi ? 42 : 0;
          this.dispatch(showDropdownThunk({
            type: _$$pi,
            data: {
              targetRect: {
                top: 0,
                right: t,
                bottom: t,
                left: 0,
                width: t,
                height: t
              },
              togglePreferences: e === SettingsAction.PREFERENCES
            },
            hasOwnEscKeyHandler: !0
          }));
        }
      } else if (e === SettingsAction.HIDE_UI) {
        let {
          selectedView,
          mirror
        } = debugState.getState();
        mirror.appModel.showUi && (this.dispatch(hideDropdownAction()), Jf(this._state.dropdownShown) && jD(this.dispatch, this._state.dropdownShown, {
          forceClose: t === 'toolbar'
        }));
        selectedView.view === 'fullscreen' && selectedView.editorType === FEditorType.DevHandoff && handlePluginError();
      }
    };
    this.getLatestPublishedVersionHashForComponent = (e, t) => {
      let i = this._state.fileByKey[e];
      if (!i || !i.team_id) return 'INVALID';
      let n = this._state.library.publishedByLibraryKey.components;
      let r = 'INVALID';
      let a = _$$l(i.library_key ?? generateUniqueKey(e));
      let s = n[i.team_id];
      s?.[a]?.[t] && !s[a][t].unpublished_at && (r = s[a][t].content_hash || 'INVALID');
      return r;
    };
    this.getLatestPublishedVersionForStateGroup = (e, t) => {
      let i = this._state.fileByKey[e];
      if (!i?.team_id) return Rf.INVALID;
      let n = _$$l(i.library_key ?? generateUniqueKey(e));
      let r = this._state.library.publishedByLibraryKey.stateGroups;
      let a = r[i.team_id]?.[n]?.[t];
      return a && !a.unpublished_at ? a.version : Rf.INVALID;
    };
    this.missingFontPopoverReported = !1;
    this.allowWebGestures = null;
    this.cancelPendingGestures = null;
    this.takePencilSample = null;
    this.takeIndirectPinchGesture = null;
    this.openMakePrototypeModal = () => {
      let e = atomStoreManager.get(Gh);
      !atomStoreManager.get(_$$xP) && e ? $I({
        moduleToOpen: {
          type: 'custom',
          module: jsx(_$$x2, {
            aiTrackingContext: e
          }),
          beforeModuleOpen: () => {
            atomStoreManager.set(Gh, void 0);
          },
          name: ExtensionFeatureKey.MAGIC_LINK_DONE_TOAST
        },
        trackingData: {
          source: 'fullscreen_action_make_prototype'
        }
      }) : e || fullscreenValue.triggerAction('end-magic-link');
    };
    this.isMagicLinkDone = () => atomStoreManager.get(d_);
    this.isMagicLinkDoneToastShowing = () => atomStoreManager.get(_$$xP);
    this.linkToComponent = () => {
      $I({
        moduleToOpen: {
          type: 'custom',
          module: jsx(rL, {}),
          name: ExtensionFeatureKey.LINK_TO_COMPONENT
        },
        trackingData: {
          source: 'fullscreen_action_link_to_component'
        }
      });
    };
    this.logFullscreenActionToDatadogRum = (e, t) => {
      observabilityClient.addAction(e, ServiceCategories.SCENEGRAPH_AND_SYNC, LogLevelStr.INFO, t);
    };
    this.showNudgeDesignModeAfterTemplateSetPasted = () => {
      let e = atomStoreManager.get(getPlanUserTeamAtomFamily(!0));
      let t = e.data?.seatTypeLicenseTypes;
      t?.includes(G_h.DESIGN) && (debugState.dispatch(VisualBellActions.dequeue({})), debugState.dispatch(VisualBellActions.enqueue({
        icon: VisualBellIcon.DESIGN_MODE,
        message: getI18nString('cooper.toolbelt.toast.switch_design_mode_edit_template'),
        button: {
          text: getI18nString('cooper.toolbelt.toast.switch_design_mode'),
          action: _$$_o
        }
      })));
    };
    this._store = i;
    this._actionHandler = new oo(this._store);
    this.session.user = t;
    this._getTsApisForWasm = n;
    this.resetLoadedFigFile();
    this.bindListeners();
    this.addStackOverflowListener();
  }
  addStackOverflowListener() {
    window.addEventListener('oom_trigger', e => {
      let t = atomStoreManager.get(isActiveAtom);
      fullscreenCrashHandler.showMemoryCrashModal({
        isBranching: t
      }, this.openFileKey(), this._store);
    });
    window.addEventListener('error', e => {
      isStackOverflowError({
        message: e.message
      }) ? fullscreenCrashHandler.fullscreenCrashed({
        type: 'stack-overflow'
      }, !0) : e.message.includes('Out of memory') && fullscreenCrashHandler.showMemoryCrashModal({}, this.openFileKey(), this._store);
    });
  }
  static startFetchingFontList() {
    this.fontListPromise == null && (this.fontListPromise = fullscreenPerfManager.timeAsync('fetchFontList', fetchFontList));
  }
  static prepareSpellCheck() {
    BrowserInfo.isIpad || (migrateLegacySpellCheckLanguage(), (async () => {
      let e = await x5();
      fJ(e);
      e === SpellCheckEngine.HUNSPELL && _$$jk();
    })());
  }
  showFragmentSearchSuggestion() {
    let e = this._store.getState().selectedView;
    e && e.view === 'fullscreen' && e.editorType === FEditorType.Design && AppStateTsApi?.uiState().isUI3 && getFeatureFlags().fragment_search_selection_suggest && _$$iP(JT.FIND_INSPIRATION, {
      fragmentSearchSource: G4.ACTIONS_SUGGESTION
    });
  }
  static startFetchingInterfaceFont() {
    let t = document.fonts;
    if (e.interfaceFontPromise == null && t && window.FontFace) {
      let i = new window.FontFace('Inter', `url(${buildUploadUrl('2cca21a49f7dad1daa612d73d50357644671964a')}) format('woff2')`);
      t.add(i);
      i.load();
      let n = i.loaded;
      let r = new window.FontFace('Source Code Pro', `url(${buildStaticUrl('webfont/1/SourceCodePro-Medium.woff2')}) format('woff2'), url(${buildStaticUrl('webfont/1/SourceCodePro-Medium.woff')}) format('woff')`);
      t.add(r);
      r.load();
      let a = r.loaded;
      e.interfaceFontPromise = Promise.all([n, a]);
    }
  }
  _shouldShowFileThumbnailReset() {
    return this._isSelectedNodeCurrentThumbnail() || !this._hasSelection();
  }
  getThumbnailMenuItemName() {
    return this._shouldShowFileThumbnailReset() ? 'reset-thumbnail' : 'set-thumbnail';
  }
  getFileThumbnailMenuItemName() {
    return this._shouldShowFileThumbnailReset() ? 'reset-file-thumbnail' : 'set-file-thumbnail';
  }
  disableFileThumbnailMenu() {
    return this._hasSelection() && this._selectedValidThumbnailNodeIds().length !== 1 || !this._hasSelection() && !this._currentFileThumbnail();
  }
  disableShowRotationOriginMenuItem() {
    return !('getDirectlySelectedNodes' in this._state.mirror.sceneGraph) || this._state.mirror.sceneGraph.getDirectlySelectedNodes().length !== 1;
  }
  setFileVersion(e) {
    this._store.dispatch(setFileVersion({
      fileVersion: e
    }));
  }
  handleFileThumbnailMenuItem() {
    let e = this.openFileKey();
    debug(e != null, 'should have editing file key');
    this._store.dispatch($m({
      file_key: e,
      thumbnail_guid: this._shouldShowFileThumbnailReset() ? null : this._selectedValidThumbnailNodeIds()[0]
    }));
  }
  getPageThumbnailMenuItemName() {
    let e = getSingletonSceneGraph().getCurrentPage();
    let t = e?.thumbnailInfo;
    let i = this._state.mirror.sceneGraph.getDirectlySelectedNodes()[0];
    return t?.nodeID === i?.guid || i == null ? 'reset-page-thumbnail' : 'set-page-thumbnail';
  }
  disablePageThumbnailMenu() {
    return !this._hasSelection() || this._selectedValidThumbnailNodeIds().length !== 1;
  }
  handlePageThumbnailMenuItem() {
    let e = this._state.mirror.sceneGraph.getDirectlySelectedNodes()[0];
    if (!e) return;
    let t = getSingletonSceneGraph().getCurrentPage();
    let i = t?.thumbnailInfo;
    i?.nodeID === e?.guid ? t?.clearThumbnailInfo() : t?.setThumbnailInfo({
      nodeID: e?.guid,
      thumbnailVersion: defaultSessionLocalIDString
    });
  }
  setFigmascopeSelectedGuidCallback(e) {
    this._actionHandler.setFigmascopeSelectedGuidCallback(e);
  }
  toggleDowntimeBanner() {
    this._store?.getState().showingDowntimeBanner ? this._store.dispatch(hideDowntimeBanner()) : this._store.dispatch(showDowntimeBanner());
  }
  closeManageMemoryModal() {
    let e = this._store.getState().modalShown;
    e && e.type === gG.type && this._store.dispatch(hideModalHandler());
  }
  hasDesktopApp() {
    return this._isDesktopAppRunning;
  }
  getDesktopAppMenuItemName() {
    return this._isDesktopAppRunning ? 'open-in-desktop-app' : 'get-desktop-app';
  }
  memorySpikeOnFileLoadBytes() {
    return this._memorySpikeOnFileLoadBytes;
  }
  handleDesktopAppMenuItem(e) {
    if (e === 'open-in-desktop-app') {
      let e = new Promise(e => {
        window.addEventListener('blur', function t() {
          window.removeEventListener('blur', t);
          e();
        });
      });
      openUrlInDesktop(location.href, DesktopModalType.FULLSCREEN_MENU).then(t => {
        t && _$$s5.shouldShowOnce() && Promise.race([e, delay(3e3)]).then(() => {
          _$$N3.disableAutoOpenIfUnset();
          this._store.dispatch(showOpenDesktopAppModal(PluginRunForContext.FOR_MENU));
        });
      });
    } else {
      e === 'get-desktop-app' && (BrowserInfo.mac ? this.navigateToURL('/download/desktop/mac', TabMode.NEW_TAB) : BrowserInfo.windows && this.navigateToURL('/download/desktop/win', TabMode.NEW_TAB));
    }
  }
  deselectProperty() {
    this.updateAppModel(this.nullCurrentSelectedProperty);
  }
  openFileKey() {
    return this._state.openFile?.key || null;
  }
  openFileKeyPromise() {
    return Promise.resolve(this.openFileKey() || this._figFileLoadPromise);
  }
  sourceFileKey() {
    return this._state.openFile?.sourceFileKey || null;
  }
  sourceFileKeyPromise() {
    return Promise.resolve(this.sourceFileKey() || this._figFileLoadPromise);
  }
  openFilePromise() {
    let e = this.openFileKey();
    return e ? Promise.resolve({
      type: 'figFile',
      fileKey: e
    }) : this._figFileLoadPromise.then(e => ({
      type: 'figFile',
      fileKey: e
    }));
  }
  figFileLoaded(e) {
    this._figFileLoadPromiseResolve(e);
  }
  get _state() {
    if (!this._store) throw new Error('Calling _state without a valid store');
    return this._store.getState();
  }
  isInDrafts() {
    let e = getSelectedFile(this._state);
    return !!(e?.folder_id && getProcessedValueByKey(this._state.folders, e.folder_id));
  }
  showUI() {
    return this._state.mirror.appModel.showUi;
  }
  openExportPicker() {
    trackEventAnalytics('Export Picker Opened', {
      from: 'toolbar-or-keyboard'
    });
    this.dispatch(showPickerThunk({
      id: C9
    }));
  }
  openExportSettingsPicker(e, t, i) {
    trackEventAnalytics('Export Settings Picker Opened', {
      from: 'toolbar-or-keyboard'
    });
    this.dispatch(showModalHandler({
      type: _$$B,
      data: {
        pickerInfo: {
          selectionArea: e,
          canvasArea: t,
          nodeCounts: i
        }
      }
    }));
  }
  getLabValue(e) {
    return shouldEnableFeedbackCategory(e);
  }
  openPdfExportSettingsModal() {
    this.dispatch(showModalHandler({
      type: aO
    }));
  }
  openCooperExportModal() {
    this.dispatch(showModalHandler({
      type: _$$Y
    }));
  }
  openShortcuts() {
    if (fullscreenValue.isReady()) {
      let e = this._store.getState().selectedView;
      e && e.view === 'fullscreen' && e.editorType === FEditorType.Whiteboard && this._store.getState().screenreader.enabled && this.dispatch(setKeyboardShortcutPanelTab({
        tab: _$$J2.ACCESSIBILITY
      }));
      fullscreenValue.triggerAction('toggle-keyboard-shortcuts');
    }
  }
  toggleBrowseAllResourcesModal() {
    fullscreenValue.triggerAction('clear-tool', {
      source: 'menu'
    });
    let e = this._store.getState().selectedView;
    if (!(e && e.view === 'fullscreen' && (e.editorType === FEditorType.Whiteboard || e.editorType === FEditorType.Slides || e.editorType === FEditorType.Cooper))) return;
    let t = this._store.getState().universalInsertModal;
    t.showing && t.pinned === PinningState.NOT_PINNED ? t.pinned === PinningState.NOT_PINNED ? (fullscreenValue.triggerAction('set-tool-default', {
      source: 'menu'
    }), this.dispatch(closeUniversalInsertModal())) : this.dispatch(handlePinningState({
      pinned: PinningState.NOT_PINNED
    })) : this.dispatch(setUniversalInsertModalOpen({
      initialX: 0,
      initialY: 0
    }));
  }
  openPreferencesModal() {
    this.dispatch(showModalHandler({
      type: _$$T2,
      data: {
        entrypoint: _$$r.QUICK_ACTION
      }
    }));
  }
  showNudgeAmountPicker() {
    this.dispatch(showPickerThunk({
      id: _$$O
    }));
  }
  openFplDebug() {}
  hidePicker() {
    this.dispatch(hidePickerThunk());
  }
  toggleInteractionRecorderVisibility() {
    if (isInteractionPathCheck()) {
      this.dispatch(FlashActions.error('The interaction recorder is not supported on /test/interactions'));
      return;
    }
    isRecordingEnabled() && (this._store.getState().interactionTestDialogShown ? this.dispatch(_$$l2()) : this.dispatch(_$$q()));
  }
  togglePerfHUDVisibility() {
    if (!getFeatureFlags().perf_hud) return;
    let e = this._store.getState().selectedView;
    let t = e && e.view === 'fullscreen' && e.editorType === FEditorType.Whiteboard;
    _$$v(t);
  }
  toggleFakeMPActivity() {
    getFeatureFlags().perf_hud && nK();
  }
  toggleTSMERConfig() {
    getFeatureFlags().internal_only_debug_tools && n0();
  }
  toggleFeatureFlagBisectorModal() {
    if (!getFeatureFlags().internal_only_debug_tools) return;
    let e = this._store.getState();
    if (e.modalShown?.type === zJ) {
      this.dispatch(hideModalHandler());
      return;
    }
    this.dispatch(showModalHandler({
      type: _$$sF
    }));
  }
  showImageScaledDownWarning() {
    this.dispatch(VisualBellActions.enqueue({
      type: 'image_resized',
      message: getI18nString('bindings.image_resized_message'),
      button: {
        text: getI18nString('bindings.image_resized_message_learn_more'),
        action: this.onShowImageScaledDownWarningInfoClick
      }
    }));
  }
  showGIFConvertedAndScaledDownWarning() {
    this.dispatch(VisualBellActions.enqueue({
      type: 'gif_converted_resized',
      message: getI18nString('bindings.gif_resized_and_converted_to_static_image'),
      button: {
        text: getI18nString('bindings.gif_resized_and_converted_to_static_image_learn_more'),
        action: this.onShowGIFConvertedAndScaledDownWarningInfoClick
      }
    }));
  }
  usedKeyboardShortcut(e) {
    this.dispatch(handleKeyboardShortcutUsage({
      key: e
    }));
  }
  getClipboardData(e) {
    debug(desktopAPIInstance != null, 'clipboard only available on desktop app');
    return desktopAPIInstance.getClipboardData([e]).then(({
      data: t,
      format: i
    }) => {
      if (i !== e) throw new Error(`Asked for clipboard data with MIME type ${e}, got data with MIME type ${i} instead.`);
      return new Uint8Array(t);
    });
  }
  canUseClipboardAPI() {
    let e = !!(navigator.clipboard && navigator.clipboard.read && navigator.clipboard.write);
    let t = window.FigmaMobile;
    return (e || !!t?.readClipboardData) && !isInteractionPathCheck();
  }
  async readClipboardData() {
    let e = {
      text: '',
      html: '',
      containsPng: !1,
      permissionDenied: !1
    };
    let t = window.FigmaMobile;
    if (!(navigator.clipboard && navigator.clipboard.read) && !t?.readClipboardData) throw new Error('No Clipboard API');
    try {
      if (t?.readClipboardData) {
        let i = await t.readClipboardData();
        i.text && (e.text = i.text);
        i.html && (e.html = i.html);
        return e;
      }
      for (let t of await navigator.clipboard.read()) {
        if (t.types.includes('text/html')) {
          let i = await t.getType('text/html');
          e.html = await i.text();
        }
        if (t.types.includes('text/plain')) {
          let i = await t.getType('text/plain');
          e.text = await i.text();
        }
        t.types.includes('image/png') && (e.containsPng = !0);
      }
    } catch (t) {
      t.message.toLowerCase().includes('permission') && trackUserEvent('clipboard_permission_denied', this._state);
      e.permissionDenied = !0;
    }
    return e;
  }
  async readFilesFromClipboard() {
    if (!navigator.clipboard?.read) throw new Error('No Clipboard API');
    if (!this.fileArrayToString) throw new Error('fileArrayToString undefined');
    let e = await navigator.clipboard.read();
    let t = [];
    for (let i of e) {
      if (i.types.includes('image/png')) {
        if (oz() && function (e) {
          if (!oz()) return !1;
          let t = oH();
          return e.types.includes(t);
        }(i)) {
          let e = new File([await i.getType(oH())], 'image.png');
          t.push(e);
        } else {
          let e = new File([await i.getType('image/png')], 'image.png');
          t.push(e);
        }
      }
    }
    return this.fileArrayToString(t);
  }
  async clipboardHasUnsanitizedPng() {
    if (!oz()) return !1;
    let e = oH();
    try {
      if (!navigator.clipboard?.read) return !1;
      for (let t of await navigator.clipboard.read()) {
        if (t.types.includes(e)) return !0;
      }
    } catch {}
    return !1;
  }
  decodePackedHTML(e) {
    let t = e.indexOf(FJ);
    let i = e.indexOf(gU);
    if (t < 0 || i < 0 || t > i) {
      let t = e.indexOf(xY);
      let i = e.indexOf(_$$eY);
      if (t < 0 || i < 0 || t > i) return new Uint8Array();
      let n = e.slice(t + xY.length, i);
      return base64ToUint8Array(n);
    }
    let n = e.slice(t + FJ.length, i);
    return base64ToUint8Array(n);
  }
  decodeMetadataFromHTML(e) {
    let t = e.indexOf(D2);
    let i = e.indexOf(cu);
    if (t < 0 || i < 0 || t > i) {
      let t = e.indexOf(FM);
      let i = e.indexOf(wh);
      if (t < 0 || i < 0 || t > i) return null;
      let n = e.slice(t + FM.length, i);
      let r = base64ToUint8Array(n);
      return JSON.parse(new TextDecoder().decode(r));
    }
    let n = e.slice(t + D2.length, i);
    let r = base64ToUint8Array(n);
    return JSON.parse(new TextDecoder().decode(r));
  }
  detectSpreadsheetDataInHTML(e) {
    let t = '<table';
    let i = '</table>';
    let n = e.indexOf('<meta');
    let r = e.indexOf('>');
    let a = e.indexOf(t);
    let s = e.indexOf(i);
    if (a < 0 || s < 0 || a >= s) return !1;
    let o = e.includes('google-sheets-html-origin');
    let l = e.includes('content=Excel.Sheet');
    if (o || l) return !0;
    let d = e.includes(t, a + 1);
    let c = (n === 0 && r + 1 === a || a === 0) && s + i.length === e.length - 1;
    return d && c;
  }
  getHtmlString(e, t, i, n) {
    let r = '';
    getFeatureFlags().ce_copy_rightclick_richtext && (r = getFeatureFlags().ce_rich_text_copy && n ? n : `<span style="white-space:pre-wrap;">${escapeHtml(e).replace(/\n/g, '<br>')}</span>`);
    return `<meta charset="utf-8"><div>${fb}${btoa(unescape(encodeURIComponent(t)))}${cB}${H3}${uint8ArrayToBase64(i)}${Er}</div>${r}`;
  }
  writeToClipboard(e, t, i, n) {
    if (!navigator.clipboard?.write) throw new Error('No clipboard api');
    let r = this.getHtmlString(e, t, i, n);
    let a = [new ClipboardItem({
      'text/plain': new Blob([e], {
        type: 'text/plain'
      }),
      'text/html': new Blob([r], {
        type: 'text/html'
      })
    })];
    return navigator.clipboard.write(a).then(() => !0).catch(e => (console.error('Error copying to clipboard', e), !1));
  }
  async writeDataToClipboard(e, t) {
    if (!navigator.clipboard || !navigator.clipboard.write) {
      console.error('clipboard.write not available on this browser');
      this.showVisualBellLocalized('copy-as', 'visual_bell.copy_as_png_failed', {}, !1);
      return new Error('clipboard.write not available');
    }
    let i = new Blob([t], {
      type: e
    });
    let n = {
      [e]: i
    };
    if (oz() && e === 'image/png') {
      try {
        let e = oH();
        let i = {
          ...n,
          [e]: new Blob([t], {
            type: e
          })
        };
        await navigator.clipboard.write([new ClipboardItem(i)]);
        this.showVisualBellLocalized('copy-as', 'visual_bell.copied_as_png', {}, !1);
        return !0;
      } catch (e) {}
    }
    let r = [new ClipboardItem(n)];
    try {
      await navigator.clipboard.write(r);
      this.showVisualBellLocalized('copy-as', 'visual_bell.copied_as_png', {}, !1);
      return !0;
    } catch (e) {
      console.error('Error writing clipboard data', e);
      this.showVisualBellWithButtonLocalized('copy-as', 'visual_bell.copy_as_png_failed', {}, 'visual_bell.copy_as_png.retry', () => {
        fullscreenValue.triggerAction('copy-as-png');
      }, !1);
      return !1;
    }
  }
  async sendSerializedClipboardDataToS3(e, t) {
    let i;
    let n = this._state;
    if (!_$$n3(n.userAnalyticsData, n.user?.email)) return;
    let r = D2 + btoa(unescape(encodeURIComponent(e))) + cu + FJ + uint8ArrayToBase64(t) + gU;
    let a = 'other';
    if (BrowserInfo.isIpadNative) {
      a = 'ipad';
    } else {
      if (!isNotMobile()) return;
      a = 'desktop';
    }
    let s = Date.now().toString();
    let o = (e, t) => {
      let i = {
        copy_device_type: a,
        copy_timestamp: s
      };
      trackFileEvent(`crossDeviceCopyPaste_${e}`, n.openFile?.key, n, t ? {
        ...i,
        error: t
      } : i);
    };
    o('upload_url_fetch_start');
    try {
      if (i = await id.getClipboardDataUpload({
        deviceType: a,
        timestampMs: s
      }), i.status === 200) {
        o('upload_url_fetch_success');
      } else {
        throw new Error('Failure from clipboard_data_upload endpoint');
      }
    } catch (e) {
      o('upload_url_fetch_error', e);
      return e;
    }
    let l = i.data.meta;
    if (!l) return;
    let {
      upload_url,
      fields
    } = l;
    let u = new FormData();
    for (let e in fields) u.append(e, fields[e]);
    u.set('Content-Type', 'text/plain');
    u.append('file', r);
    o('clipboard_data_upload_start');
    try {
      let e = await sendWithRetry.crossOriginPost(upload_url, u, {
        raw: !0,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (e.status === 204) o('clipboard_data_upload_success');else throw new Error(`Failed to upload serialized clipboard data to S3 with status code: ${e.status}`);
    } catch (e) {
      o('clipboard_data_upload_error', e);
      return e;
    }
  }
  async getSerializedClipboardDataFromS3(e, t, i) {
    try {
      let n = await fetch(e, {
        method: 'get'
      });
      if (n.ok) {
        trackFileEvent('crossDeviceCopyPaste_clipboard_data_download_success', this._state.openFile?.key, this._state, {
          copy_device_type: t,
          copy_timestamp: i
        });
        return await n.text();
      }
      throw new Error('Failed to download serialized clipboard data from S3');
    } catch (e) {
      trackFileEvent('crossDeviceCopyPaste_clipboard_data_download_failure', this._state.openFile?.key, this._state, {
        copy_device_type: t,
        copy_timestamp: i,
        error: e.toString()
      });
      return '';
    }
  }
  getKeyboardLayout() {
    return getCurrentKeyboardLayout();
  }
  setKeyboardLayoutPreference(e) {
    return updateKeyboardLayoutPreference({
      layout: e
    });
  }
  saveUseNumbersForOpacityPreference(e) {
    this._store.dispatch(postUserFlag({
      use_numbers_for_opacity: e
    }));
  }
  updateViewportInfo(e, t, i, n, r, a, s, o, l) {
    if (super.updateViewportInfo(e, t, i, n, r, a, s, o, l), desktopAPIInstance && !l && !o) {
      let e = `${Math.round(i / 2 - s * r)},${Math.round(n / 2 - s * a)},${Math.round(100 * s) / 100}`;
      this._viewportQueryParamValue !== e && (this._viewportQueryParamValue = e, c3(this._store, e));
    }
  }
  dismissMobileMediaLoadingToast() {
    let e = window.FigmaMobile;
    e?.dismissMediaLoadingToast && e.dismissMediaLoadingToast();
  }
  NOT_LOCALIZED_showMobileNativeToast(e, t) {
    let i = window.FigmaMobile;
    i?.showToast && i.showToast(e, t);
  }
  showMobileNativeToastLocalized(e, t, i) {
    let n = getI18nStringAlias(e, t);
    this.NOT_LOCALIZED_showMobileNativeToast(n, i);
  }
  NOT_LOCALIZED_showVisualBell(e, t, i, n) {
    this.dispatch(VisualBellActions.enqueue({
      type: e,
      message: t,
      error: i,
      icon: n
    }));
  }
  NOT_LOCALIZED_showVisualBellInf(e, t, i) {
    this.dispatch(VisualBellActions.enqueue({
      type: e,
      message: t,
      error: i,
      timeoutOverride: 1 / 0
    }));
  }
  showVisualBellLocalized(e, t, i, n) {
    let r = i?.icon;
    let a = r ? VisualBellIcon[r] : void 0;
    let s = getI18nStringAlias(t, i);
    let o = window.FigmaMobile;
    o?.showToast ? this.NOT_LOCALIZED_showMobileNativeToast(s, null) : (e === 'copy-as' && handleAtomEvent({
      id: 'copy_as_completed',
      properties: {
        type: t === 'visual_bell.copied_as_png' ? 'png' : 'svg'
      }
    }), this.NOT_LOCALIZED_showVisualBell(e, s, n, a));
  }
  showVisualBellLocalizedInf(e, t, i, n) {
    let r = getI18nStringAlias(t, i);
    let a = window.FigmaMobile;
    a?.showToast ? this.NOT_LOCALIZED_showMobileNativeToast(r, 1 / 0) : this.NOT_LOCALIZED_showVisualBellInf(e, r, n);
  }
  showVisualBellForMultiEdit(e) {
    let t = getI18nString('visual_bell.multi_editing');
    this.dispatch(VisualBellActions.enqueue({
      type: e,
      message: t,
      onDismiss: () => fullscreenValue.triggerAction('focus-mode-exit'),
      timeoutOverride: 1 / 0
    }));
  }
  showVisualBellForMultiEditGlueError(e) {
    let t = getI18nString('visual_bell.multi_edit_glue_error');
    let i = getI18nString('visual_bell.multi_edit_glue_error.repair_button');
    this.dispatch(VisualBellActions.enqueue({
      type: e,
      message: t,
      button: {
        text: i,
        action: () => fullscreenValue.triggerActionInUserEditScope('repair-breakpoint-multiedit')
      }
    }));
  }
  showVisualBellWithUndo(e, t, i) {
    let n = getI18nString('bindings.undo');
    this.dispatch(VisualBellActions.enqueue({
      type: e,
      message: t,
      button: {
        text: n,
        action: () => fullscreenValue.triggerActionInUserEditScope('undo')
      },
      error: i
    }));
  }
  showVisualBellWithNodesLocalized(e, t, i) {
    this.dispatch(VisualBellActions.enqueue({
      type: e,
      message: t,
      interpolate: {
        nodes: i
      }
    }));
  }
  showVisualBellWithButtonLocalized(e, t, i, n, r, a) {
    let s = getI18nStringAlias(t, i);
    let o = getI18nStringAlias(n);
    this.dispatch(VisualBellActions.enqueue({
      type: e,
      message: s,
      button: {
        text: o,
        action: r
      },
      error: a
    }));
  }
  showVisualBellWithCloseButtonLocalized(e, t, i, n, r, a, s) {
    let o = getI18nStringAlias(t, i);
    dispatchShowVisualBell(e, n, {
      message: o
    }, r, a, s);
  }
  showVisualBellWithUrlButtonLocalized(e, t, i, n, r) {
    this.showVisualBellWithButtonLocalized(e, t, null, i, () => {
      this._store.dispatch(setupHyperlinkHandler({
        rawInput: n
      }));
    }, r);
  }
  showVisualBellWithReloadButtonLocalized(e, t, i, n, r) {
    this.showVisualBellWithButtonLocalized(e, t, null, i, () => {
      customHistory.reload(n);
    }, r);
  }
  showAutosaveVisualBell() {
    if (this._state.user != null && this._state.openFile != null && this._state.openFile.canEdit) {
      let e;
      let t = ['\u2713', '\u2714', '\u{1F4BE}', '\u{1F44D}', '\u270C\uFE0F', '\u{1F44B}', '\u{1F60E}', '\u26A1\uFE0F'];
      let i = 'autosaveVisualBellLastTime';
      if (navigator.onLine) {
        if (this.hasUnsavedChanges()) {
          e = getI18nString('autosave.visual_bell.unsaved_changes');
        } else {
          if (localStorageRef) {
            let e = Date.now();
            let t = localStorageRef.getItem(i);
            if (localStorageRef.setItem(i, e.toString()), t && parseInt(t) >= e - 12096e5) return;
          }
          let n = Math.round(Math.random() * (t.length - 1));
          e = `${t[n]} \xA0 ${getI18nString('autosave.you_dont_need_to_save_reminder')}`;
        }
      } else {
        e = getI18nString('autosave.visual_bell.offline');
      }
      this.dispatch(VisualBellActions.enqueue({
        type: 'save',
        message: e
      }));
    }
  }
  showAiContentFillSuggestedVisualBell(e, t) {
    if (this._state.user == null || this._state.openFile == null || (this.dismissEphemeralVisualBells(), !this._state.openFile.canEdit)) return;
    let i = getSingletonSceneGraph();
    let n = i.getCurrentPage();
    let r = (n?.directlySelectedNodes || []).map(e => e.guid);
    e.length > 0 && (r = e);
    let a = {
      isMultiSelect: r.length > 1,
      quickActionsSessionId: null
    };
    if (r.length > 0 && r[0]) {
      let e = i.get(r[0]);
      if (e) {
        let t = ComponentPropsAiCPPBindings?.isColumnwiseTable() ?? !1;
        let {
          autoContentNodes
        } = xK([e], t);
        let {
          numTextLayers
        } = CN([e]);
        a.numTextLayers = numTextLayers;
        a.numRows = a.isMultiSelect ? r.length : Wz(autoContentNodes, t);
        a.width = e.size.x;
        a.height = e.size.y;
      }
    }
    _$$iP(JT.CONTENT_FILL, {
      guids: r,
      numExampleRows: 1,
      source: t
    });
    let o = atomStoreManager.get(dd);
    a.quickActionsSessionId = o;
    trackFileEvent('ai_text_gen_toast_available', this._state.openFile?.key, this._state, {
      nodeId: r,
      pageId: r[0] && Fullscreen ? Fullscreen.getPageIdFromNode(r[0]) : '',
      source: t,
      ...a
    });
  }
  clearAiContentFillSuggestedVisualBell() {
    KY({
      actionToClear: JT.CONTENT_FILL
    });
  }
  showMagicLinkSuggestedVisualBell(e) {
    if (this._state.user == null || this._state.openFile == null) return;
    let t = getSingletonSceneGraph().getCurrentPage();
    if (!t) return;
    this.dismissEphemeralVisualBells();
    let i = getSingletonSceneGraph();
    if ((AppStateTsApi?.propertiesPanelState()?.propertiesPanelTab?.getCopy() ?? DesignWorkspace.DESIGN) !== DesignWorkspace.PROTOTYPE || atomStoreManager.get(_$$xP) && atomStoreManager.get(d_)) return;
    let n = t?.directlySelectedNodes || [];
    let r = n.map(e => e.guid);
    if (n.length === 1) {
      let e = n[0];
      e && e.type === 'SECTION' && (r = e.childrenNodes.filter(e => e.isTopLevelFrame()).map(e => e.guid));
    }
    let a = (r = r.filter(e => e && PrototypingTsApi?.isValidNodeForMagicLink(e))).flatMap(e => findVisibleSectionChild(i, e) ?? []);
    if (a.map(e => e.guid).length === 0) return;
    let o = PrototypingTsApi?.getContextFramesForMagicLink(r) ?? [];
    let l = 0;
    if (e === 'create_node_transition') {
      for (let e of o) {
        let t = Zl(i, e);
        t && (l += Yg(t));
      }
      if (l > 1) return;
    } else if (e === 'box_selection') {
      for (let e of a) l += Yg(e);
      if (l > 0 || !Yh(this._state.mirror.appModel, 'magic-link')) return;
    }
    (r.length !== 1 || !(o.length < 2)) && this._state.openFile.canEdit && _$$iP(JT.MAGIC_LINK, {
      source: e
    });
  }
  showUpscaleImageSuggestedVisualBell(e, t) {
    this._state.user != null && this._state.openFile != null && this._state.openFile.canEdit && (this.dismissEphemeralVisualBells(), _$$iP(JT.UPSCALE_IMAGE, {
      nodeImagePairs: e,
      source: t
    }));
  }
  showPasteWidgetsAsSublayersVisualBell(e, t) {
    let i = t ? {
      text: getI18nString('bindings.paste_as_layers'),
      action: e => {
        this.triggerActionInUserEditScope('paste-widgets-as-sublayers');
        this.dispatch(VisualBellActions.dequeue({
          matchType: 'paste-widgets-as-sublayers'
        }));
      }
    } : void 0;
    let n = function (e) {
      switch (e) {
        case EmbedPanelType.EMBED:
          return getI18nString('bindings.embed_paste_notice');
        case EmbedPanelType.LINK_PREVIEW:
          return getI18nString('bindings.link_preview_paste_notice');
        case EmbedPanelType.WIDGET:
          {
            let e = debugState.getState()?.selectedView;
            switch (e?.editorType) {
              case FEditorType.Slides:
                return getI18nString('bindings.widget_paste_notice_slides');
              case FEditorType.Cooper:
                return getI18nString('bindings.widget_paste_notice_buzz');
              default:
                return getI18nString('bindings.widget_paste_notice');
            }
          }
      }
    }(e);
    this.dispatch(VisualBellActions.enqueue({
      type: 'paste-widgets-as-sublayers',
      message: n,
      timeoutOverride: 5e3,
      timeoutType: 'exact',
      button: i
    }));
  }
  dismissEphemeralVisualBells() {
    this.dispatch(VisualBellActions.dequeue({
      matchTimeout: 'ephemeral'
    }));
  }
  showVisualBellWithDelayLocalized(e, t, i, n, r) {
    let a = getI18nStringAlias(t, i);
    this.dispatch(VisualBellActions.enqueue({
      type: e,
      message: a,
      error: n,
      delay: r
    }));
  }
  clearVisualBellType(e) {
    this.dispatch(VisualBellActions.dequeue({
      matchType: e
    }));
  }
  regenerateText(e, t, i, n) {
    $I({
      moduleToOpen: {
        type: 'custom',
        module: jsx(_$$w2, {}),
        beforeModuleOpen: () => {
          _$$B3(JT.CONTENT_FILL);
          Ag(JT.CONTENT_FILL, _$$c5, {
            guids: e,
            numExampleRows: t,
            source: i,
            nodesFromMagicHandle: n
          });
        },
        name: ExtensionFeatureKey.REGENERATE_TEXT_TOAST
      },
      trackingData: {
        source: 'fullscreen_action_regenerate_text'
      }
    });
  }
  getUserLocale() {
    return getI18nState()?.getPrimaryLocale(!0) || '';
  }
  getNaturalStyleKey(e) {
    return this._state.library.used__LIVEGRAPH.unnaturalKeyToNaturalKey[_$$n(e)] ?? '';
  }
  getLocalizedString(e, t) {
    return getI18nStringAlias(e, t);
  }
  setTimer(e, t, i, n, r, a, s, o) {
    let {
      timer,
      multiplayer
    } = this._store.getState();
    for (let a of multiplayer.allUsers) {
      if (a.sessionID !== e || a.sessionID === multiplayer.sessionID) continue;
      let o = timer.notification;
      let c = 0;
      if (timer.time || t > 0 && t === i) {
        let e = null;
        timer.time && (t === 0 ? (PluginCallbacks.timerChange('timerstop'), this.dispatch(setTimerModalThunk({
          state: 'closed',
          userInitiated: !1
        }))) : t !== timer.time.totalTimeMs && getTimeRemaining(timer.time) > 0 ? (c = Math.round((t - timer.time.totalTimeMs) / 6e4), o && o.userName === a.name && performance.now() - o.timeOrigin < 1e4 && (c += o.minutesAdded), e = c > 0 ? 'INCREMENTED' : 'DECREMENTED', PluginCallbacks.timerChange('timeradjust')) : n ? (e = 'PAUSED', PluginCallbacks.timerChange('timerpause')) : t !== i ? (e = 'RESUMED', PluginCallbacks.timerChange('timerresume')) : s !== timer.selectedSongID ? PluginCallbacks.timerChange('timerupdatesongid') : (this.dispatch(setStartChimePlayed(!1)), PluginCallbacks.timerChange('timerstart')));
        e != null && this.dispatch(setTimerNotification({
          action: e,
          timerID: r,
          userName: a.name,
          timeOrigin: performance.now(),
          minutesAdded: c
        }));
      }
    }
    this.dispatch(setTimerThunk({
      totalTimeMs: t,
      timeRemainingMs: i,
      isPaused: n,
      timerID: r,
      setBy: a,
      songID: s,
      lastReceivedSongTimestampMs: o
    }));
  }
  openTimerModal(e) {
    this.dispatch(setTimerModalThunk({
      state: 'open',
      userInitiated: !0,
      source: e
    }));
  }
  resendTimer() {
    let e = this._store.getState();
    if (e.timer?.time?.totalTimeMs) {
      let t = e.timer.time.timeRemainingMs;
      let i = e.timer.time.lastReceivedSongTimestampMs;
      e.timer.time.isPaused || (t -= performance.now() - e.timer.time.timeOrigin, i += performance.now() - e.timer.time.timeOrigin);
      Multiplayer?.sendTimer(e.timer.time.totalTimeMs, t, e.timer.time.isPaused, e.timer.time.timerID, e.timer.setBy, e.timer.selectedSongID, i);
    }
  }
  setMusic(e, t, i, n, r, a) {
    this.dispatch(setMusicStateThunk({
      isPaused: t,
      musicMessageID: i,
      selectedSongID: n,
      lastReceivedSongTimestampMs: r,
      isStopped: a
    }));
  }
  setActiveAgendaItemId(e) {
    sr.syncFromFullscreen(e);
  }
  resendMusic() {
    let e = this._store.getState();
    if (e.music?.music) {
      let t = e.music.music.lastReceivedSongTimestampMs;
      e.music.music.isPaused || (t += performance.now() - e.music.music.timeOrigin);
      Multiplayer?.sendMusic(e.music.music.isPaused, e.music.music.musicMessageID, e.music.music.selectedSongID, t, e.music.music.isStopped);
    }
  }
  activateVotingStampTool() {
    !function () {
      let e = hf(null).find(e => e.name === _$$sn);
      let t = e && k6(e, '');
      t && e.label && be(t, e.label);
    }();
  }
  showReturnToInstanceVisualBell(e) {
    this.dispatch(setupReturnToInstanceHandler(e));
  }
  showReturnToVariantVisualBell(e, t, i) {
    _$$P2(e, t, i);
  }
  showPushOverridesVisualBell() {
    this.dispatch(VisualBellActions.enqueue({
      type: 'push_overrides',
      message: getI18nString('design_systems.component_panel.changes_pushed_to_main_component')
    }));
  }
  showPasteLoadingIndicatorAndPaste() {
    this.dispatch(_$$n2.set({
      message: 'Pasting',
      callback: () => {
        Fullscreen?.handlePaste();
      }
    }));
  }
  showPromptToMoveLibraryItems(e) {
    let t = this._state.openFile;
    let i = e.movableSymbols;
    let n = e.movableStateGroups;
    let r = e.symbolToStateGroup;
    let a = e.movableStyles;
    let s = Object.keys(a).length;
    !(!(s || Object.keys(i).length || Object.keys(n).length) || !t || isBranchAlt(t)) && (s || hasTeamPaidAccess(t.teamId ? this._state.teams[t.teamId] : void 0)) && (this.dispatch(notificationActions.dequeue({
      type: NotificationCategory.MOVE_COMPONENTS_PROMPT
    })), sendWithRetry.post('/api/design_systems/move_validity', {
      style_moves: a,
      component_moves: i,
      state_group_moves: n,
      dst_file_key: t.key
    }).then(e => {
      let {
        valid_move_id_to_file_key
      } = e.data.meta;
      let i = Object.keys(valid_move_id_to_file_key);
      if (i.length === 0) return;
      let n = new Set();
      for (let e of i) {
        let t = r[e];
        t ? n.add(t) : n.add(e);
      }
      this.dispatch(notificationActions.enqueueFront({
        notification: {
          type: NotificationCategory.MOVE_COMPONENTS_PROMPT,
          message: s ? getI18nString('design_systems.updates.to_move_pasted_styles_to_this_file_publish_a_library_update') : getI18nString('design_systems.updates.to_move_pasted_components_to_this_file_publish_a_library_update'),
          acceptCallback: () => {
            this.dispatch(showModalHandler({
              type: dD,
              data: {
                initiallyCheckedItemIDs: n,
                entrypoint: RR.FULLSCREEN_MOVE_COMPONENTS_PROMPT
              }
            }));
          },
          movableItemIds: n
        }
      }));
    }).catch(() => {}));
  }
  _selectedValidThumbnailNodeIds() {
    let e = this._store.getState();
    if (e.mirror == null || e.mirror.sceneGraphSelection == null || e.openFile == null) return [];
    let t = [];
    for (let i in e.mirror.sceneGraphSelection) {
      let n = e.mirror.sceneGraph.get(i);
      n && (n.type === 'FRAME' || n.type === 'SYMBOL' || n.type === 'SECTION' || n.type === 'SLIDE') && !n.resizeToFit && t.push(i);
    }
    return t;
  }
  startRenamingNodes(e) {
    this.dispatch(setLeftPanelTab({
      tab: UserInterfaceElements.LAYERS
    }));
    this.dispatch(showModal({
      type: aX.type,
      data: {
        guids: e,
        nodeType: 'layer'
      }
    }));
  }
  startRenamingPage(e) {
    this.dispatch(setLeftPanelTab({
      tab: UserInterfaceElements.LAYERS
    }));
    atomStoreManager.set(_$$l3, e);
  }
  startRenamingPages(e) {
    this.dispatch(setLeftPanelTab({
      tab: UserInterfaceElements.LAYERS
    }));
    this.dispatch(showModal({
      type: aX.type,
      data: {
        guids: e,
        nodeType: 'page'
      }
    }));
  }
  insertComponentOrShowError__DEPRECATED(e, t, i, n) {
    this.dispatch(_$$c({
      fileKey: e,
      nodeId: t,
      canvasX: i,
      canvasY: n
    }));
  }
  fetchComponentBufferForSevRepair(e, t, i, n) {
    if (i === 'STATE_GROUP') {
      try {
        let e = `/state_group/${t.key}/version/${t.version}/canvas?fv=${n}&adventurous_newt=true`;
        return teamLibraryCache.getCanvas({
          canvas_url: e
        });
      } catch (e) {
        return Promise.resolve(new Uint8Array());
      }
    } else if (i === 'LOOSE_COMPONENT') {
      try {
        let t = `/component/${e.key}/canvas?ver=${e.version}&fv=${n}`;
        return teamLibraryCache.getCanvas({
          canvas_url: t
        });
      } catch (e) {
        return Promise.resolve(new Uint8Array());
      }
    } else {
      throw new Error('Invalid assetType');
    }
  }
  fetchComponentBuffers(e, t, i, n) {
    return fetchAndProcessComponentPublishingBuffers(e, t, i, n);
  }
  fetchVariableSetBuffers(e, t, i, n) {
    return fetchAndProcessVariablePublishingBuffers(e, t, i, n);
  }
  bindListeners() {
    this.fromFullscreen.on('handleUpgradeRefresh', this.handleUpgradeRefresh);
  }
  validateAndParseURL(e) {
    try {
      let {
        hash,
        host,
        hostname,
        href,
        origin,
        pathname,
        port,
        protocol,
        search
      } = new URL(e);
      return {
        hash,
        host,
        hostname,
        href,
        origin,
        pathname,
        port,
        protocol,
        search
      };
    } catch {
      return null;
    }
  }
  backToFiles() {
    this.dispatch(handleAutosaveAndNavigationThunk());
  }
  copyLinkToPage(e, t) {
    let i;
    let n = this._state.openFile;
    let r = this._store.getState().mirror;
    let a = r.sceneGraph.get(e);
    let o = a?.name;
    let l = null;
    let d = formatI18nMessage('link-copied');
    if (n) {
      switch (t) {
        case FigmaSite.SITE:
          let c = getResourceDataOrFallback(n.siteMount);
          let u = c?.siteDomain?.domain;
          if (!u || getResourceDataOrFallback(c?.status) !== 'published') return;
          l = IU({
            domain: u,
            path: o
          });
          d = getI18nString('sites.fullscreen_actions.external_url_copied');
          break;
        case FigmaSite.FIGMA:
          let p = isFullscreenDevHandoffView(this._state.selectedView);
          let m = isFullscreenOverview(this._state.selectedView);
          let h = getDevModeFocusId(this._state.selectedView);
          l = buildFileUrl({
            file: n,
            nodeId: e,
            isDevHandoff: p,
            isDevModeOverview: m,
            devModeFocusId: h
          });
          d = m ? getI18nString('desktop_bindings.visual_bell.summary_link_copied') : a?.type === 'FRAME' ? getI18nString('desktop_bindings.interstitial.frame_link_copied') : a?.type === 'SECTION' ? getI18nString('desktop_bindings.interstitial.section_link_copied') : r.appModel.pagesList.length > 1 ? getI18nString('desktop_bindings.interstitial.page_link_copied') : isFullscreenSlidesView(this._state.selectedView) ? getI18nString('desktop_bindings.visual_bell.slide_deck_link_copied') : getI18nString('desktop_bindings.visual_bell.file_link_copied');
          break;
        default:
          throwTypeError(t);
      }
    } else {
      console.error(`file key is empty in copying link, pathname is ${customHistory.location.pathname}`);
      l = `${location.protocol}//${location.host}${customHistory.location.pathname}?node-id=${encodeURIComponent(replaceColonWithDash(e))}`;
    }
    let g = r.selectionProperties.responsiveSetTitle || a?.name || n?.name;
    if (getFeatureFlags().ce_copy_labelled_links && g) {
      let e = document.createElement('a');
      e.href = l;
      e.innerText = g;
      i = copyTextWithPlainFallback(e.outerHTML, l);
    } else {
      i = copyTextToClipboard(l);
    }
    i.then(() => this.dispatch(VisualBellActions.enqueue({
      message: d
    })));
  }
  generateLinkToNode(e) {
    return this._generateLinkToNode(e);
  }
  generateLinkToCmsItemPage(e, t) {
    return this._generateLinkToNode(e, t);
  }
  _generateLinkToNode(e, t = null) {
    let i = this._state.openFile;
    let n = null;
    i ? n = buildFileUrl({
      file: i,
      nodeId: e,
      cmsItemId: t
    }) : (console.error(`file key is empty in generating link to node, pathname is ${customHistory.location.pathname}`), n = `${location.protocol}//${location.host}${customHistory.location.pathname}?node-id=${encodeURIComponent(replaceColonWithDash(e))}`);
    return n;
  }
  generateLinkToRemoteNode(e, t) {
    return buildFileUrl({
      file: {
        key: e
      },
      nodeId: t
    });
  }
  generateRedirectLinkForSignedOutEdit(e, t) {
    if (!e) return customHistory.location.pathname;
    let i = this.generateLinkToNode(e);
    return t ? `${i}${customHistory.location.hash}` : i;
  }
  getLocalGUIDFromUrl(e) {
    let {
      nodeIdInThisFile
    } = parseLinkForContext(e, this._store.getState());
    return nodeIdInThisFile;
  }
  getLocalVersionIdFromUrl(e) {
    let {
      versionId
    } = parseLinkForContext(e, this._store.getState());
    return versionId;
  }
  isUserPresent() {
    return !!this.session.user;
  }
  documentIsLoaded() {
    super.documentIsLoaded();
    this._documentIsLoaded();
  }
  async _documentIsLoaded() {
    if (fullscreenPerfManager.documentIsLoaded(), desktopAPIInstance?.addTabAnalyticsMetadata({
      fileLoadTime: this._fileLoadTime
    }), window.figmaPerfTesting && window.postMessage({
      name: 'DOCUMENT_IS_LOADED',
      value: performance.now() / 1e3
    }, '*'), window.DebuggingHelpers && (window.DebuggingHelpers.documentIsLoaded = !0), mpGlobal.shouldConnectToMultiplayer) {
      let e = getAutosaveManagerInstance();
      let t = Multiplayer?.currentSessionID() ?? -1;
      e && !isLocalFileKey(e.fileKey) ? (t < 0 && logError('Autosave', 'Trying to initialize autosave without a session ID', {
        reportErrorToSentry: !0
      }), await e.onConnect(t), await fullscreenPerfManager.timeAsync('restoreAutosave', async () => {
        try {
          await e.session()?.restoreAutosaveIfNeeded();
        } catch (e) {
          logAutosaveErrorWithOriginalMessage('Failed to check for or restore autosave changes', e);
        }
      })) : e || t !== 0 ? !e && t > 0 && this._store.getState().user && logAutosaveError('Autosave should have been initialized for logged in user.') : this._figFileLoadPromise.then(async e => {
        let t = this._store.getState().user;
        if (!t) return;
        setupAutosaveManager(e, t.id);
        let i = getAutosaveManagerInstance();
        if (i && !i.session()) {
          let e = Multiplayer?.currentSessionID() ?? -1;
          e < 0 && logError('Autosave', 'Trying to initialize autosave without a session ID', {}, {
            reportAsSentryError: !0
          });
          await i.onConnect(e);
        }
      }).catch(e => {
        logAutosaveErrorWithOriginalMessage('Unable to enable autosave for new file', e);
      });
    }
    this.dispatch(_$$X());
    fullscreenAlias.getIsExtension() && figmaReady();
    e.maybeEnterRecoveryMode(this._store);
    this._figFileLoadPromise.then(e => {
      let t = this._store.getState().user;
      t && (_$$e5(), _$$s3({
        userID: t.id,
        openFileKey: e
      }));
    });
    this._memorySpikeOnFileLoadBytes = 0;
    FullscreenPerfInfo && (this._memorySpikeOnFileLoadBytes = CorePerfInfo ? CorePerfInfo.getLocalMaxUsedHeapMemory() - CorePerfInfo.getTotalUsedHeapMemory() : 0);
  }
  static async maybeEnterRecoveryMode(e) {
    let t = await getFullscreenViewFile(e);
    let i = e.getState().selectedView;
    t?.canEdit ? t && i.isRecoveryMode && (AppStateTsApi?.uiState().isRecovery.set(!0), trackEventAnalytics('enter_recovery_mode', {
      currentAllocatedBytes: CorePerfInfo?.getTotalUsedHeapMemory(),
      maxAllocatedBytes: CorePerfInfo?.getMaxUsedHeapMemory(),
      fileKey: i.fileKey
    })) : e.dispatch(selectViewAction({
      ...i,
      isRecoveryMode: !1
    }));
  }
  openFontSettings() {
    return redirectToFontSettings();
  }
  setMissingFont(e, t) {
    Fullscreen?.setMissingFontOnSelectedText(e, t);
  }
  selectMissingFontNodes(e, t, i) {
    Fullscreen?.selectMissingFontNodes(e, t, i);
  }
  fullscreenIsReady() {
    if (!this._fullscreenIsReady) {
      let t = window.performance.now() - this._readyStartTime;
      console.log(`[Fullscreen] Ready in ${t.toFixed(1)}ms`);
      window.postMessage({
        name: 'FULLSCREEN_IS_READY',
        value: performance.now() / 1e3
      }, '*');
      sendHistogram('performance.fullscreen.load_time', t / 1e3);
      fullscreenPerfManager.start('fullscreenIsReady');
      (function () {
        if (!getFeatureFlags().internal_only_debug_tools) {
          window.DebuggingHelpers = {};
          return;
        }
        window.DebuggingHelpers = DebuggingHelpers;
        window.DebuggingHelpers.websocket = {
          break: _$$u2,
          unbreak: zi,
          unbreakWithSlowReconnect: () => zi(!0)
        };
        window.DebuggingHelpers.setMemoryUsagePercent = _$$rq;
        window.DebuggingHelpers.setOOM = () => {
          window.dispatchEvent(new Event('oom_trigger'));
        };
        window.DebuggingHelpers.getMemoryBreakdown = () => FullscreenPerfInfo && CorePerfInfo ? {
          imageMemory: FullscreenPerfInfo.getImageMemory(),
          wasmHeapReserved: getMemoryUsage(),
          jsBuffers: CorePerfInfo.getJsBufferMemory(),
          rendererGpuMemory: FullscreenPerfInfo.getRendererGpuMemory(),
          memStats: CorePerfInfo.getMemStatsSummary()
        } : {};
        let e = DebuggingHelpers.reportError;
        let t = DebuggingHelpers.simulateNullNodeAccess;
        getFeatureFlags().internal_only_debug_tools && (window.DebuggingHelpers.webReport = e => {
          _$$u(() => logError('bindings', `DebuggingHelpers report: ${e}`));
        }, window.DebuggingHelpers.cppReport = t => {
          _$$u(() => e(t));
        }, window.DebuggingHelpers.fakeNodeError = () => {
          _$$u(() => t());
        }, window.TSSceneGraph = ReduxSceneGraph, window.getActiveTSSceneGraph = getSingletonSceneGraph, window.DesignSystemsHelpers = s_);
        delete window.DebuggingHelpers.reportError;
        delete window.DebuggingHelpers.simulateNullNodeAccess;
      })();
      getFeatureFlags().internal_only_debug_tools && isQaSearchFrecencyEnabled() && (window.FrecencyHelpers = iG);
      getFeatureFlags().internal_only_debug_tools && (window.QuickActionsHelpers = {
        showQuickActionsSuggestion: _$$iP,
        clearQuickActionsSuggestion: KY
      });
      window.DebuggingHelpers.dumpAutosave = async () => console.log(JSON.stringify(await dumpAutosaveData()));
      window.DebuggingHelpers.disableAutosave = () => getAutosaveManagerInstance()?.terminateDueToError('Disabled for testing', !1);
      window.DebuggingHelpers.importLocalAutosaveFile = e => to(e);
      window.DebuggingHelpers.exportLocalAutosaveFile = async (e, t) => await ts(e, t);
      window.DebuggingHelpers.exportOfflineLog = () => {
        let e = this.openFileKey() ?? atomStoreManager.get(fileKeyAtom);
        let t = this.getUserId();
        if (!t) throw new Error('Please login and try again');
        if (!e) throw new Error('You must have the file open');
        ti(t, e, `offline-log-${e}.json`);
      };
      window.figmaPerfTesting && (window.FigmaAppTimer = reactTimerGroup, window.FigmaPerfInfo = FullscreenPerfInfo, window.triggerActionForPerfTests = e => {
        switch (e) {
          case 'insert-lots-of-text':
          case 'zoom-in':
          case 'zoom-out':
          case 'zoom-reset':
          case 'zoom-to-fit':
          case 'zoom-to-selection':
            fullscreenValue.triggerActionInUserEditScope(e);
        }
      });
      EditorPreferencesApi().enableCodegenMcpServer.getCopy() && this.enableCodegenMcpServer(!0);
      setupPerformanceTracker();
      _$$Ts3('Fullscreen Periodic Metrics', () => this.openFileKey(), () => {
        let e = debugState.getState().selectedView;
        return mapEditorTypeToProductType(e.editorType);
      });
      _$$T();
      setTimeout(() => {
        let e = {};
        'figmaExVm' in window && (e.figmaEx = !0);
        (function (e) {
          for (let t of (getComputedStyle(document.body).fontFamily.includes('apple-system') && (e.figgyFontFamilyAppleSystem = !0), document.querySelectorAll('style'))) {
            if (t.textContent && t.textContent.includes('canvas editing page')) {
              e.figgyCanvasEditingPage = !0;
              break;
            }
          }
        })(e);
        (function (e) {
          let t = window.webkit;
          t && (e.figmacWebkit = !0);
          let i = t && t.messageHandlers;
          i && (e.figmacMessageHandlers = !0);
          i && i.readBlob && (e.figmacReadBlob = !0);
        })(e);
        trackEventAnalytics('Third Party Apps', e);
      });
      try {
        _I(_$$XT(), this.dispatch);
      } catch (e) {
        reportError(ServiceCategories.RENDERING_AND_ANIMATION, new Error(`Error checking hardware acceleration: ${e}`));
      }
      sendWebGLInitializationAnalytics(getWebGPUInitializationStatus());
      logWebGPUInitializationStatus();
      runWebGPUCompatibilityTests();
    }
    registerFullscreenEventHandlers();
    initializeDefaultImagePaint();
    getFeatureFlags()?.fullscreen_use_metrics_event_loop && requestAnimationFrame(tV);
    getFeatureFlags()?.fullscreen_use_threaded_rendering && oN.getInstance().spawnAndStart();
    this.reparentRootElement(this.containerElement);
    isFigmaNativeApp && e.startFetchingFontList();
    debug(e.fontListPromise != null, 'should have loaded font list by the time fullscreen is ready');
    let i = (e, t) => {
      hasLocalFontsAvailable(t) && setFontsInitialized();
      let i = updateFontList(t);
      let n = performance.now();
      e(updateFontListAction(t));
      i.redux = performance.now() - n;
      t.localFontAgentVersion && this._store.dispatch(updateLocalFontAgentVersion(t.localFontAgentVersion));
      return i;
    };
    e.fontListPromise.then(e => {
      fullscreenPerfManager.time('updateFontListHost', () => {
        let t = i(this._store.dispatch, e);
        trackEventAnalytics('fetched font list', {
          index_font_count: e.indexFontsList?.length,
          index_fonts_timing_xhr: t?.indexFonts?.xhr,
          index_fonts_timing_kiwi_decode: t?.indexFonts?.kiwiDecode,
          index_fonts_timing_preprocess: e.timing?.indexFonts?.preprocess,
          shared_font_count: e.sharedFontsList?.length,
          local_font_count: e.localFontsList?.length,
          fullscreen_kiwi: t?.fullscreen?.kiwiBinding,
          fullscreen_json: t?.fullscreen?.jsonBinding,
          redux: t.redux
        });
      });
      this._fontListLoaded = !0;
      getFeatureFlags().desktop_font_reload_on_focus && ($$W8() || setLocalFontsModifiedTimestamp(Date.now() / 1e3), window.addEventListener('focus', () => {
        let e = this._store.getState().selectedView;
        e.view === 'fullscreen' && isDesignOrIllustration(e.editorType) && checkForNewlyInstalledFonts(() => fetchFontList([FontSourceType.LOCAL]), e => {
          getFeatureFlags().desktop_font_reload_on_focus_ux && FontHelpers?.resetNeedsMissingFontsCheck();
          i(this._store.dispatch, e);
        }, e => this.dispatch(VisualBellActions.enqueue(e)));
      }));
    }).catch(e => {
      e.message === 'fetchFontList(): no results' && getFeatureFlags().ce_font_network_status_ui && enqueueNetworkErrorBell(this._store.dispatch, getI18nString('check_network_compatibility.error_bell.fetch_font_list.message'));
    });
    e.interfaceFontPromise != null && e.interfaceFontPromise.then(() => {
      Fullscreen?.interfaceFontLoaded();
    }, e => {
      console.error('Error loading interface font', e);
    });
    window.addEventListener('online', () => AppStateTsApi?.uiState().isOffline.set(!1));
    window.addEventListener('offline', () => AppStateTsApi?.uiState().isOffline.set(!0));
    Fonts?.updateFontList($$z2);
    this.resolveReadyPromise();
    Fullscreen?.showingProgressBar(this._state.progressBarState.mode);
  }
  setIsReady__TEST_ONLY(e) {
    e ? this.resolveReadyPromise() : this._fullscreenIsReady = !1;
  }
  resolveReadyPromise() {
    this._fullscreenIsReady = !0;
    this._readyPromiseResolve && this._readyPromiseResolve();
  }
  isInWorkshopMode() {
    return isWorkshopModeActive(this._store.getState().selectedView);
  }
  handleSignedOutEditAttempt(e, t) {
    if (!e && this.isInWorkshopMode()) return;
    let i = this._store.getState().selectedView;
    if (i.view !== 'fullscreen' || i.editorType === FEditorType.Design && !this.session.user) return;
    let n = parseQuery(customHistory.location.search);
    this.dispatch(AUTH_INIT({
      origin: 'signed_out_edit',
      redirectUrl: this.generateRedirectLinkForSignedOutEdit(n['node-id'], customHistory.location.hash),
      signedUpFromOpenSession: this.isInWorkshopMode()
    }));
    this.dispatch(showModalHandler({
      type: AuthModal,
      data: {
        headerText: this.isInWorkshopMode() ? getI18nString('bindings.create_a_figjam_account') : void 0,
        actionOrTool: t
      }
    }));
  }
  openSettings() {
    this._store.getState().user && this.dispatch(showModalHandler({
      type: _$$s7,
      data: {
        tab: _$$c3.ACCOUNT
      }
    }));
  }
  _jsEditorType(e) {
    return mapYFToEditorType(e);
  }
  requestEditorType(e) {
    let t = this._store.getState().selectedView;
    if (t.view !== 'fullscreen') return;
    let i = produce(t, t => {
      t.editorType === FEditorType.DevHandoff && delete t.devModeFocusId;
      t.editorType = this._jsEditorType(e);
    });
    i !== t && this.dispatch(selectViewAction(i));
  }
  logEnterMode(e, t) {
    let i = this._jsEditorType(e);
    (i === FEditorType.Design || i === FEditorType.Illustration || i === FEditorType.DevHandoff) && handleEnterMode(this._store.getState(), i, t);
  }
  getDeviceInfoForSize(e, t) {
    return determineFrameType(e, t);
  }
  presetDeviceSupportsTouch(e) {
    return isMobileDevice(e);
  }
  sizeMatchesFramePreset(e) {
    return fS({
      width: e.x,
      height: e.y
    }) != null;
  }
  getFramePresetForSize(e) {
    return fS({
      width: e.x,
      height: e.y
    });
  }
  runLastPlugin() {
    return A9();
  }
  desktopAppQueueFileForWriting(e, t) {
    desktopAPIInstance && this._writeFilesQueue.push({
      name: e,
      buffer: t
    });
  }
  desktopAppWriteFiles() {
    desktopAPIInstance && this._writeFilesQueue.length !== 0 && (desktopAPIInstance.writeFiles(this._writeFilesQueue), this._writeFilesQueue = []);
  }
  enableCodegenMcpServer(e) {
    getFeatureFlags().dt_my_cool_plugin && (atomStoreManager.get(Kx) !== 'xml' || getFeatureFlags().dt_my_cool_plugin_xml || atomStoreManager.set(Kx, 'design_to_react'), atomStoreManager.get(Kx) !== 'jsx' || getFeatureFlags().dt_my_cool_plugin_internal || atomStoreManager.set(Kx, 'design_to_react'), desktopAPIInstance?.setEnableMCP(e, pM, () => this.dispatch(postUserFlag({
      dev_mode_has_enabled_mcp_server: !0
    }))).then(t => {
      if (!t) return;
      let {
        didStart,
        wasAlreadyRunning,
        port
      } = t;
      if (e) {
        if (wasAlreadyRunning) {
          getFeatureFlags().dt_mcp_get_metadata && this.sendMCPUpdate('tool_list', {});
          return;
        }
        if (didStart) {
          this.dispatch(VisualBellActions.enqueue({
            type: 'codegen-my-cool-plugin-server',
            message: getI18nString('mcp.dev_mode_server_enabled', {
              url: `http://127.0.0.1:${port}/${desktopAPIInstance?.hasFeature('addMcpStreamableHttpSupport') ? 'mcp' : 'sse'}`
            })
          }));
        } else {
          throw new Error(getI18nString('my_cool_plugin.codegen_server_failed_to_start'));
        }
      } else {
        this.dispatch(VisualBellActions.enqueue({
          type: 'codegen-my-cool-plugin-server',
          message: getI18nString('my_cool_plugin.codegen_server_stopped')
        }));
      }
    }).catch(e => {
      let t = e.message.includes('EADDRINUSE');
      t || reportError(ServiceCategories.DEVELOPER_TOOLS, e);
      console.error(getI18nString('my_cool_plugin.codegen_server_failed_to_start'), e);
      this.dispatch(VisualBellActions.enqueue({
        type: 'codegen-my-cool-plugin-server',
        message: t ? getI18nString('my_cool_plugin.codegen_server_failed_to_start_port_in_use', {
          port: pM
        }) : getI18nString('my_cool_plugin.codegen_server_failed_to_start'),
        error: !0
      }));
      EditorPreferencesApi().enableCodegenMcpServer.set(!1);
    }));
  }
  sendMCPUpdate(e, t) {
    desktopAPIInstance?.sendMCPUpdate(e, t);
  }
  mobileAppExportFile(e, t, i) {
    let n = this.mimeTypeToExportedFileType(t);
    let r = uint8ArrayToBase64(i);
    let a = window.FigmaMobile;
    a?.exportFile && a.exportFile(r, n);
  }
  setMobileCutEnabled(e) {
    let t = window.FigmaMobile;
    t?.updateCutEnabled && t.updateCutEnabled(e);
  }
  setMobileCopyEnabled(e) {
    let t = window.FigmaMobile;
    t?.updateCopyEnabled && t.updateCopyEnabled(e);
  }
  setMobilePasteEnabled(e) {
    let t = window.FigmaMobile;
    t?.updatePasteEnabled && t.updatePasteEnabled(e);
  }
  mobileAppShowContextMenu(e) {
    let t = window.FigmaMobile;
    t?._native_contextual_toolbar_request_menu_items && t._native_contextual_toolbar_request_menu_items(e);
  }
  mimeTypeToExportedFileType(e) {
    return e === 'application/pdf' ? _$$g4.PDF : e === 'image/jpeg' ? _$$g4.JPEG : e === 'image/png' ? _$$g4.PNG : void debug(!1, 'Unexpected MIME type when exporting FigJam selection');
  }
  startMovePagesJob(e, t, i, n) {
    logDebug('startMovePagesJob', 'Send request to start move pages job.');
    sendWithRetry.post(`/api/files/${e}/move_pages`, {
      folder_id: t,
      page_ids: i,
      file_name: n
    }).catch(e => {
      logError('startMovePagesJob', 'Error with starting move pages job.', {
        err: e
      });
    }).then(() => {
      logDebug('startMovePagesJob', 'Move pages job successfully started.');
    });
  }
  retrieveMetadataAndSelectBrokenFixedScrollingNodes() {
    let e = this._state.openFile?.key;
    e && lZ(e).then(t => {
      if (!t || !t.fixedScrolling || t.fixedScrolling.length === 0) {
        this.dispatch(VisualBellActions.enqueue({
          type: 'no_broken_fixed_scrolling_metadata',
          message: 'We finished scanning your document, and everything looks fine.'
        }));
        trackFileEvent('Selected Broken Fixed Scrolling Nodes', e, this._state, {
          numNodes: 0,
          missingMetadata: !0,
          error: !1
        });
        return;
      }
      let i = documentStateTsApi && Fullscreen ? Fullscreen.selectBrokenFixedScrollingNodesOnPage(documentStateTsApi.getActiveCanvas(), t) : 0;
      if (i === 0) {
        this.dispatch(VisualBellActions.enqueue({
          type: 'no_broken_fixed_scrolling_nodes_found',
          message: 'We finished scanning this page, and everything looks fine.'
        }));
        trackFileEvent('Selected Broken Fixed Scrolling Nodes', e, this._state, {
          numNodes: i,
          missingMetadata: !1,
          error: !1
        });
        return;
      }
      this.dispatch(VisualBellActions.enqueue({
        type: 'selected_broken_fixed_scrolling_nodes',
        message: `We found ${i} layers on this page that look like their scroll setting is incorrect. Select the "fix position when scrolling" checkbox to repair them.`
      }));
      trackFileEvent('Selected Broken Fixed Scrolling Nodes', e, this._state, {
        numNodes: i,
        missingMetadata: !1,
        error: !1
      });
    }).catch(t => {
      this.dispatch(VisualBellActions.enqueue({
        type: 'error_finding_broken_fixed_scrolling_nodes',
        message: `We ran into an error. Please contact ${getSupportEmail()}`
      }));
      trackFileEvent('Selected Broken Fixed Scrolling Nodes', e, this._state, {
        numNodes: 0,
        errorMessage: t,
        error: !0
      });
      console.error(t);
    });
  }
  mobileAppPush(e, t, i, n, r) {
    oI.publishFrameSelectionForMirror(e, t, i, n, r);
  }
  trackInteractiveSlideElementInsertedForSprig() {
    interactiveSlideElementInsertedEmitter.emit();
  }
  attemptedSketchFileDrop() {
    this.dispatch(showModalHandler({
      type: i0
    }));
  }
  showCanvasContextMenu(e, t) {
    this.dispatch(showDropdownThunk({
      type: W_,
      data: {
        clientX: e,
        clientY: t
      }
    }));
  }
  showSelectionContextMenu(e, t) {
    this.dispatch(showDropdownThunk({
      type: K9,
      data: {
        clientX: e,
        clientY: t
      }
    }));
  }
  showSelectLayerContextMenu(e, t) {
    this.dispatch(showDropdownThunk({
      type: wi,
      data: {
        clientX: e,
        clientY: t
      }
    }));
  }
  showTextEditModeContextMenu(e, t) {
    this.dispatch(showDropdownThunk({
      type: ku,
      data: {
        clientX: e,
        clientY: t
      }
    }));
  }
  showRulerGuideContextMenu(e, t, i, n) {
    this.dispatch(showDropdownThunk({
      type: _$$t2,
      data: {
        clientX: e,
        clientY: t,
        axis: i,
        rulerGuideContextMenuType: n
      }
    }));
  }
  showLeftPanelTab(e) {
    let t = this._store.getState().selectedView;
    if (t.view === 'fullscreen') {
      if (t.editorType === FEditorType.Design || t.editorType === FEditorType.Illustration) {
        let t = e === UserInterfaceElements.ASSETS;
        this.dispatch(setLeftPanelTab({
          tab: e,
          persist: !0,
          shouldFocusSearchBar: t
        }));
      } else {
        let i;
        i = this.dispatch;
        fullscreenValue.triggerAction('clear-tool', {
          source: 'menu'
        });
        i(setUniversalInsertModalOpen({
          initialX: 0,
          initialY: 0,
          initialTab: _$$p.STICKERS_AND_COMPONENTS
        }));
      }
    }
  }
  toggleTeamLibraryModal() {
    let e = this._store.getState().selectedView;
    if (e.view === 'fullscreen' && e.editorType === FEditorType.Whiteboard) {
      this._store.getState().modalShown?.type === _N ? this.dispatch(hideModal()) : this.dispatch(showModalHandler({
        type: Vg
      }));
      return;
    }
    this._store.getState().modalShown?.type === LIBRARY_PREFERENCES_MODAL ? this.dispatch(hideModal()) : this.dispatch(showModalHandler({
      type: _$$T2,
      data: {
        entrypoint: _$$r.QUICK_ACTION
      }
    }));
  }
  toggleVariablesModal() {
    this.dispatch(showModalConditional({
      type: _$$y2
    }));
  }
  viewWidgetDetails(e) {
    _$$e2({
      id: e,
      isWidget: !0,
      source: 'fullscreen'
    }, createElement(_$$C, {
      extensionId: e,
      extensionType: _$$Ag.COMMUNITY
    }));
  }
  toggleComponentInsertModal() {
    let e = this._store.getState();
    if (e.selectedView.view === 'fullscreen' && e.selectedView.editorType === FEditorType.Design) {
      let {
        x,
        y
      } = Nh(this._state.mirror.appModel.showUi);
      e.universalInsertModal?.showing ? this._state.mirror.appModel.showUi && e.universalInsertModal.pinned !== PinningState.NOT_PINNED ? (fullscreenValue.triggerAction('clear-tool', {
        source: 'menu'
      }), this.dispatch(handlePinningState({
        initialX: x,
        initialY: y,
        pinned: PinningState.NOT_PINNED
      }))) : (this.dispatch(closeUniversalInsertModal()), Fullscreen?.triggerAction('set-tool-default', null)) : (trackEventAnalytics('Inserts menu opened'), fullscreenValue.triggerAction('clear-tool', {
        source: 'menu'
      }), this.dispatch(setUniversalInsertModalOpen({
        initialX: x,
        initialY: y,
        pinned: PinningState.NOT_PINNED
      })));
    }
  }
  forcePublishStateGroup(e) {
    let t = this._state.openFile;
    this._state.user != null && t != null && t.canEdit && hasTeamPaidAccess(t.teamId ? this._state.teams[t.teamId] : void 0) && this.dispatch(ZS({
      itemsToPublish: new Set(e),
      forcePublish: !0
    }));
  }
  showPublishDialog(e) {
    let t = () => {
      this.dispatch(showModalHandler({
        type: dD,
        data: {
          initiallyCheckedItemIDs: new Set(e),
          entrypoint: RR.FULLSCREEN_OTHER
        }
      }));
    };
    let i = this._state.openFile?.teamId;
    let n = i ? this._state.teams[i] : void 0;
    this.isInDrafts() || !hasTeamPaidAccess(n) ? this.dispatch(showModalHandler({
      type: $3,
      data: {
        team: n || null,
        afterFileMove: t
      }
    })) : t();
  }
  async showMissingFontDialog(e, t, i, n) {
    let r = this.isFontListLoaded();
    if (getFeatureFlags().ce_new_missing_fonts_logging) {
      trackShowMissingFontsPopover(r, t);
    } else {
      let e = this.openFileKey();
      e && !this.missingFontPopoverReported && (trackFileEvent('Show Missing Fonts Popover', e, this._state, {
        fontListLoaded: r,
        counts: t,
        timeNow: performance.now()
      }), this.missingFontPopoverReported = !0);
    }
    Array.isArray(e) || reportError(ServiceCategories.TEXT_AND_VECTOR, new Error('Attempting to show missing fonts dialog when missingFonts is not an array'));
    let a = n === PageSelectionType.CURRENT_SELECTION;
    if (!i || this._state.modalShown?.type === CM.type) {
      let i = this._store.getState();
      if (getFeatureFlags().dse_sf_pro_font && i.selectedView.view === 'fullscreen') {
        let t = a ? e.filter(e => e.inSelection) : e;
        let {
          eulaFonts,
          nonEulaFonts
        } = splitFontsByEula(t, i.fonts, i.selectedView.editorType);
        if (eulaFonts.length > 0 && nonEulaFonts.length === 0) {
          let {
            stillMissingFonts
          } = await handleMissingFontsEula(eulaFonts, i.fonts, i.userFlags, this.dispatch, 'edit');
          if (stillMissingFonts.length === 0) return;
          e = e.filter(e => !eulaFonts.some(t => t.family === e.family && t.style === e.style) || stillMissingFonts.some(t => t.family === e.family && t.style === e.style));
        }
      }
      this.hidePicker();
      this.hideMissingFontDialog();
      this.dispatch(showModalHandler({
        type: CM,
        data: {
          isSelectionBased: a,
          missingFonts: e,
          counts: t
        }
      }));
    }
  }
  async showTemplatePublishModal() {
    let e = this._state.openFile;
    if (e) {
      logAndTrackCTA({
        name: 'publish-template-fullscreen-actions',
        fileKey: e.key
      });
      try {
        await ZW({
          dispatch: this.dispatch,
          file: {
            key: e.key,
            name: e.name,
            folder_id: e.folderId,
            team_id: e.teamId,
            editor_type: e.editorType,
            parent_org_id: e.parentOrgId
          },
          source: 'fullscreen-actions',
          fileNeedsMovingBeforePublish: this.isInDrafts()
        });
      } catch {
        this.dispatch(VisualBellActions.enqueue({
          message: getI18nString('templates.publishing.bell.no_publish_access'),
          type: 'template-publish-error',
          error: !0
        }));
      }
    }
  }
  hideMissingFontDialog() {
    this._state.modalShown?.type === CM.type && this.dispatch(hideModalHandler());
  }
  afterFontsLoaded() {
    xL && xL();
    Yv();
  }
  updateSelectedStyleProperties(e, t, i, n, r, a) {
    let s = {
      ..._$$w.decodeMessage(e).nodeChanges[0]
    };
    s.fontName && (s.fontFamily = s.fontName.family, s.fontStyle = s.fontName.style);
    s.intrinsicLineHeight = t;
    i != null && (s.availableOTFeaturesForFonts = i);
    r != null && (s.variableConsumptionMap = r);
    a != null && (s.responsiveTextStyleVariants = a);
    s.leadingTrimEnabled = n;
    this.dispatch(updateSelectedStyleProperties({
      selectedStyleProperties: s
    }));
  }
  updateSelectedStyleThumbnail(e) {
    let t = URL.createObjectURL(new Blob([e]));
    this.dispatch(updateSelectedStyleThumbnailUrl({
      selectedStyleThumbnailURL: t
    }));
  }
  updateStyleThumbnail(e, t) {
    let i = this._state.library.local.styles[e];
    if (i && !isEffectOrGrid(i.style_type)) {
      let n = createObjectUrlFromBuffer(t);
      let r = i.meta && i.meta.style_thumbnail;
      this.dispatch(replaceThumbnailsOptimist({
        styleKind: SubscriptionStatusEnum.LOCAL,
        thumbnails: [{
          nodeId: e,
          url: n,
          styleThumbnail: r,
          type: PrimaryWorkflowEnum.STYLE
        }]
      }));
    }
  }
  async createSavepoint(e, t) {
    let i = this.openFileKey();
    i && (await createSavepoint(i, e, t, this.dispatch));
    return !0;
  }
  showSavepointModal() {
    this.dispatch(showModalHandler({
      type: SavepointModalContainer,
      data: {}
    }));
  }
  showBrowserAlert(e) {
    alert(e);
  }
  toggleHistoryMode() {
    this._state.mirror.appModel.topLevelMode === ViewType.HISTORY ? this.dispatch(exitVersionHistoryMode()) : this.dispatch(enterVersionHistoryMode());
  }
  showViewChangesNotification(e) {
    let t = this._store.getState();
    let i = findVersionById(t.versionHistory.compareId, t.versionHistory);
    let n = t.modalShown;
    _$$z2(e, this.dispatch, i, n);
  }
  async navigateToURL(e, t) {
    let i = new URL(e, location.href);
    if (location.origin === i.origin) {
      let n = lK.exec(i.pathname);
      if (n && this._store.getState().fileByKey && !this._store.getState().fileByKey[n[1]]) {
        try {
          await fileApiHandler.getFiles({
            fileKey: n[1]
          });
        } catch (e) {
          this.dispatch(VisualBellActions.enqueue({
            message: getI18nString('bindings.no_file_access'),
            type: 'NAVIGATE_FILE_FAILED',
            error: !0
          }));
          return;
        }
      }
      t === TabMode.CURRENT_TAB ? location.href = e : customHistory.redirect(e, '_blank');
    }
  }
  trimName(e, t) {
    (e = e.trim()).length === 0 && (e = t);
    return e;
  }
  setHyperlinkPopup(e, t, i, n, r, a) {
    let o = null;
    if (e.length > 0) {
      let {
        url,
        nodeIdInThisFile,
        versionId
      } = parseLinkForContext(e, this._store.getState());
      if (nodeIdInThisFile && !versionId) {
        let e = this._store.getState().mirror;
        let t = e.sceneGraph.get(nodeIdInThisFile);
        if (t) {
          let i = t;
          for (; i && i.type !== 'CANVAS';) i = i.parentNode;
          reportNullOrUndefined(ServiceCategories.FIGJAM, e.appModel);
          o = i && i.guid !== e.appModel.currentPage && t.type !== 'CANVAS' ? {
            type: _$$F3.FRAME,
            text: this.trimName(i.name, getI18nString('hyperlink.page')),
            secondaryText: this.trimName(t.name, getI18nString('hyperlink.frame'))
          } : {
            type: t.type === 'CANVAS' ? _$$F3.PAGE : _$$F3.FRAME,
            text: this.trimName(t.name, t.type === 'CANVAS' ? getI18nString('hyperlink.page') : getI18nString('hyperlink.frame'))
          };
        } else {
          hasNotLoaded(e.appModel.pagesList) ? (o = {
            type: _$$F3.NOT_LOADED,
            text: getI18nString('bindings.hyperlink_popup_link_to_unloaded_from_in_this_file')
          }, subscribeToContainingPage(nodeIdInThisFile, AutosaveEventType.HYPERLINK_PRELOAD)) : o = {
            type: _$$F3.MISSING,
            text: getI18nString('bindings.hyperlink_popup_link_to_deleted_object')
          };
        }
      } else if (url) {
        let e;
        try {
          e = new URL(url);
          o = e.protocol === 'mailto:' ? {
            type: _$$F3.MAILTO,
            url: e
          } : e.protocol === 'tel:' ? {
            type: _$$F3.TEL,
            url: e
          } : isFigmaDomain(e.hostname) || isFigmaDomain(e.host) ? isSpecialRoutePath(e.pathname) ? {
            type: _$$F3.FIGMA_PROTOTYPE,
            url: e
          } : e.searchParams.has('version-id') ? {
            type: _$$F3.FIGMA_VERSION,
            url: e
          } : {
            type: _$$F3.FIGMA_FILE,
            url: e
          } : {
            type: _$$F3.GENERIC,
            url: e
          };
        } catch {
          o = {
            type: _$$F3.INVALID,
            urlString: url
          };
        }
      }
    }
    o ? this.dispatch(setHyperlinkPopup({
      urlString: e,
      data: o,
      position: t,
      size: i,
      mouse: n,
      guid: r,
      locked: a
    })) : this.dispatch(setHyperlinkPopup(null));
  }
  updateHyperlinkPopupPosition(e, t) {
    this.dispatch(updateHyperlinkPopupPosition({
      position: e,
      size: t
    }));
  }
  handleUserClickOnHyperlink(e, t) {
    t === EmailAction.COPY_TO_CLIPBOARD && e.startsWith('mailto:') || e.startsWith('tel:') ? copyHyperlinkToClipboard(this.dispatch, e, 'HyperlinkCanvas') : this._store?.dispatch(setupHyperlinkHandler({
      rawInput: e
    }));
  }
  setCanvasMentionPopup(e, t, i, n, r, a, s) {
    let o = {
      mentionedUserId: e,
      mentionedByUserId: t
    };
    o ? this.dispatch(setCanvasMentionPopup({
      data: o,
      position: i,
      size: n,
      mouse: r,
      guid: a,
      locked: s
    })) : this.dispatch(setCanvasMentionPopup(null));
  }
  updateCanvasMentionPopupPosition(e, t) {
    this.dispatch(updateCanvasMentionPopupPosition({
      position: e,
      size: t
    }));
  }
  openHelp() {
    customHistory.unsafeRedirect('https://help.figma.com', '_blank');
  }
  openSupportForum() {
    customHistory.unsafeRedirect('https://forum.figma.com', '_blank');
  }
  openTutorials() {
    customHistory.unsafeRedirect('https://www.youtube.com/figmadesign', '_blank');
  }
  keyboardWillShow() {
    Fullscreen?.keyboardWillShow();
  }
  keyboardWillShowWithHeight(e) {
    Fullscreen?.keyboardWillShowWithHeight(e);
  }
  getDefaultOnOTFeatures() {
    return _$$G3.OpenTypeFeatureDefaultOn;
  }
  syncPencilStyle(e) {
    lY(e, GI);
  }
  syncBrushStyle(e) {
    lY(e, Vi);
  }
  syncPenStyle(e) {
    lY(e, _o);
  }
  syncHighlighterStyle(e) {
    if (typeof e != 'object' || !e) return;
    let {
      paints,
      strokeWeight
    } = e;
    Number.isFinite(strokeWeight) && paints && IZ.syncFromFullscreen({
      paints,
      strokeWeight
    });
  }
  syncToolStyles(e) {
    if (typeof e != 'object' || !e) return;
    let {
      shapeColor,
      stickyColor,
      shapeWithTextType,
      strokeColor,
      shapeWithTextStrokeStyleType,
      connectorToolLineStyle,
      connectorToolEndCap,
      connectorToolColor,
      washiTapePaint,
      platformShapeSelected
    } = e;
    SK.syncFromFullscreen({
      shapeWithTextType,
      connectorToolLineStyle,
      connectorToolEndCap,
      washiTapePaint
    });
    _$$ez.syncFromFullscreen(shapeColor);
    U9.syncFromFullscreen(shapeWithTextStrokeStyleType);
    getFeatureFlags().figjam_track_stroke_color && _$$lC.syncFromFullscreen(strokeColor);
    qL.syncFromFullscreen(stickyColor);
    wp.syncFromFullscreen(connectorToolColor);
    yE.syncFromFullscreen(platformShapeSelected);
  }
  syncCurrentToolSetSource(e) {
    W6.syncFromFullscreen(e);
  }
  setVideoShouldAutoplay(e) {
    vE.syncFromFullscreen(e);
  }
  getUserName() {
    if (!this._state.user) {
      let e = this._state.multiplayer.allUsers.find(e => this._state.multiplayer.sessionID === e.sessionID);
      return BrowserInfo.isMeetDevice ? getI18nString('figjam_try.google_meet_user_name') : e?.name || 'FigJam Human';
    }
    return this._state.user?.name || 'FigJam Human';
  }
  getUserId() {
    if (this._state.user) return this._state.user.id;
    let e = this._state.multiplayer.allUsers.find(e => this._state.multiplayer.sessionID === e.sessionID);
    return e?.userID || null;
  }
  getIsEmojiWheelOpen() {
    return this._state.multiplayerEmoji.type === 'WHEEL';
  }
  openStartingPointFlowInPrototypeViewer(e) {
    let t = this.openFileKey();
    t && this._store.dispatch(_$$K({
      fileKey: t,
      startingPointNodeId: e,
      shouldOpenAtStartingPoint: !0,
      source: 'starting_point'
    }));
  }
  focusPrototypeStartingPointPanelToEditName() {
    setPropertiesPanelTab(DesignWorkspace.PROTOTYPE);
    this.fromFullscreen.trigger('focusPrototypeStartingPointPanelToEditName', {});
  }
  handleZoomActionTriggeredToSetOnboardingFlag() {
    this.fromFullscreen.trigger('zoomActionMessageForOnboarding', {});
  }
  handlePanActionTriggeredToSetOnboardingFlag() {
    this.fromFullscreen.trigger('panActionMessageForOnboarding', {});
  }
  handleNodeCountReachedForMoveDraft() {
    this.isInDrafts() && handleAtomEvent({
      id: _$$s4
    });
  }
  escapeAndSaveCSVData(e, t, i) {
    typeof e == 'object' && e && tt(t, unparse(e, {
      escapeFormulae: !0,
      header: i
    }), 'text/csv');
  }
  isNavigatorClipboardWriteSupported() {
    return !!(navigator && navigator.clipboard && navigator.clipboard.write);
  }
  _maybeShowCSVError(e, t) {
    e && this.showVisualBellLocalized('csv import error', t, {}, !1);
  }
  parseCsvStringAndCreateNodes(e, t, i) {
    let n = parse(e, {
      delimiter: t,
      skipEmptyLines: !0
    });
    return this._validateParsedCsvDataAndCreateTable(n, i);
  }
  parseHTMLStringIntoLineDirectionalities(e, t, i) {
    let n = this._parseHTMLLines(e);
    Fullscreen?.applyJSONDataAsLineDataToSelection(n, t, i);
    return !0;
  }
  _parseHTMLLines(e) {
    let t = new DOMParser().parseFromString(e, 'text/html');
    if (!t) {
      return {
        data: []
      };
    }
    let i = t.querySelectorAll('p');
    if (!i) {
      return {
        data: []
      };
    }
    let n = [];
    for (let e of i) {
      let t = e.getAttribute('dir') || '';
      n.push(t);
    }
    return {
      data: n
    };
  }
  parseHtmlStringAndCreateNodes(e, t) {
    let i = this._parseHTMLTable(e);
    return this._validateParsedCsvDataAndCreateTable(i, t);
  }
  parseHtmlStringAndTriggerSmartPaste(e, t) {
    sq(this._parseHTMLTable(e).data, t, this._store.dispatch);
    return !0;
  }
  _parseHTMLTable(e) {
    let t = new DOMParser().parseFromString(e, 'text/html');
    if (!t) {
      return {
        data: []
      };
    }
    let i = t.querySelector('table');
    if (!i) {
      return {
        data: []
      };
    }
    let n = 0;
    let r = [];
    for (let e of Array.from(i?.querySelectorAll('tr') ?? [])) {
      let t = [];
      let i = Array.from(e.querySelectorAll('th'));
      let a = Array.from(e.querySelectorAll('td'));
      for (let e of i.length > 0 ? i : a.length > 0 ? a : []) t.push(e.textContent ?? '');
      t.length > n && (n = t.length);
      r.push(t);
    }
    for (let e of r) {
      for (; e.length < n;) e.push('');
    }
    return {
      data: r
    };
  }
  _validateParsedCsvDataAndCreateTable(e, t) {
    return e.meta && e.meta.aborted ? (this._maybeShowCSVError(t, 'whiteboard.csv.parse_failed'), !1) : e.data.length === 0 ? (this._maybeShowCSVError(t, 'whiteboard.csv.file_empty'), !1) : (this.dispatch(_$$n2.set({
      message: getI18nString('whiteboard.csv.importing_csv'),
      showLoadingSpinner: !1,
      callback: () => {
        permissionScopeHandler.user('whiteboard.import-csv', () => {
          Fullscreen?.createTableNodesFromCsvData(e, t);
        });
      }
    })), !0);
  }
  onAgendaChanged(e) {
    sn.syncFromFullscreen(e);
  }
  onSectionPresetPickerCreated(e) {
    _$$h2(e);
  }
  onFigjamStarterKitAction(e) {
    mr(e);
  }
  canUploadAndEditVideo() {
    return canEditBasedOnPlan(this._state.openFile);
  }
  getVariableSetNumberOfModesAllowed() {
    return f8();
  }
  getDefaultStateKeyForStateGroup(e) {
    let t = getSingletonSceneGraph().get(e);
    if (!t) return '';
    let i = t.assetKeyForPublish;
    if (!i) return '';
    let n = selectStateGroupAssetsMap(debugState.getState())[i];
    return n ? n.default_state_key : '';
  }
  formatDateTime(e) {
    return new Intl.DateTimeFormat().format(new Date(e));
  }
  setFigjamStarterKitBoundingBox(e, t) {
    return U2(e, t);
  }
  generateEmbed(e) {
    return handleEmbedPaste(this._store.dispatch, e, PluginModalTypeEnum.PASTE).valid;
  }
  generateFlappFromPastedText(e) {
    return !function (e) {
      let t = function (e) {
        let t = e.match(/^(https?:\/\/)/);
        return t ? e.replace(/#.+$/, '').substr(t[1].length) : '';
      }(e);
      for (let e of a4.templates) {
        if (t.match((e.startsWith('^') ? '' : '^(?:www.)?') + e)) return !0;
      }
      return !1;
    }(e) ? !!isProtoViewerUrl(e) && (fullscreenValue.triggerActionInUserEditScope('insert-interactive-element-into-active-slide', {
      type: 'EMBED',
      url: e,
      canvasFallbackEnabled: !0
    }), !0) : (fullscreenValue.triggerActionInUserEditScope('insert-interactive-element-into-active-slide', {
      type: 'YOUTUBE',
      url: e,
      canvasFallbackEnabled: !0
    }), !0);
  }
  generateWidgetFromURL(e, t) {
    return Cg(this._store.dispatch, e, t).some(e => e.valid);
  }
  handleAction(e, t) {
    return this._actionHandler.handleAction({
      name: e,
      payload: t
    });
  }
  pinchZoomFixDisabled() {
    return EditorPreferencesApi().disablePinchZoomFix.getCopy();
  }
  findInspiration(e = '') {
    $I({
      moduleToOpen: {
        type: 'custom',
        module: P5() ? jsx(z6, {
          isVisualSearch: !0
        }) : jsx(WS, {}),
        beforeModuleOpen: () => jp(e || G4.EDITOR_CONTEXT_MENU),
        name: ExtensionFeatureKey.VISUAL_SEARCH
      },
      trackingData: {
        source: 'fragment_search_context_menu'
      }
    });
  }
  findCodebaseSuggestions() {}
  openQuickActionsAssetsTab(e, t) {
    $I({
      moduleToOpen: {
        type: 'custom',
        module: P5() ? jsx(z6, {
          initialTab: Qx.PLAN_FILE_ASSETS,
          initialSearchTagType: _d() ? qG.COMPONENTS : void 0,
          closeOnEscape: !0
        }) : jsx(_$$B4, {
          initAssetSearch: !0,
          closeOnEscape: !0
        }),
        beforeModuleOpen: () => {
          atomStoreManager.set(_$$Lk, AssetTabType.ASSETS);
        },
        name: ExtensionFeatureKey.ASSETS_TAB_DETAIL_VIEW
      },
      trackingData: {
        source: e,
        keyboardShortcut: t
      }
    });
  }
  inspectFragment() {
    let e = getSingletonSceneGraph().getCurrentPage()?.directlySelectedNodes;
    let t = debugState.getState().openFile?.key;
    if (!e || e.length !== 1 || !t) return;
    let i = e[0];
    _$$ni(i, t);
    let n = debugState.dispatch;
    debugState.getState().modalShown?.type !== rx.type && n(showModalHandler({
      type: rx
    }));
  }
  startExportAction(e) {
    let t;
    let i = Object.keys(this._store.getState().mirror.sceneGraphSelection);
    switch (e) {
      case ImageFormat.PNG:
        t = hV.CopyAsPNG;
        break;
      case ImageFormat.SVG:
        t = hV.CopyAsSVG;
        break;
      case ImageFormat.RASTERIZE:
        t = hV.RasterizeSelection;
    }
    _$$Dc(t, debugState.getState().saveAsState, this.dispatch, () => e === ImageFormat.RASTERIZE ? permissionScopeHandler.user('rasterize', () => Fullscreen?.completeExportAction(e)) : Fullscreen?.completeExportAction(e), i, 'copy for export');
  }
  sendEventToWebEventListener(e) {
    handleAtomEvent({
      id: e
    });
  }
  selectPublishedAssetGuids(e) {
    let t = this._store.getState().library.openFilePublished__LIVEGRAPH.styles;
    return e.filter(e => !!t[e]);
  }
  selectLocalStyles(e) {
    let t = new Set(e.map(e => this._store.getState().mirror.sceneGraph.get(e)?.styleType).filter(e => !!e));
    t.size === 1 && this.dispatch(setLocalStyleSelection({
      type: Array.from(t.values())[0],
      styleIds: new Set(e),
      folderNames: new Set()
    }));
  }
  async requestOpenExternalSourceFileLibraryKey(e, t, i, n) {
    let r = await subscribeAndAwaitData(LibraryKeyToFileLink, {
      libraryKey: _$$l(e)
    });
    let a = transformLibraryFileData({
      data: r,
      nodeId: t,
      stateGroupId: i,
      isDevHandoff: n,
      mainComponent: !0
    });
    if (a == null) {
      this.dispatch(VisualBellActions.enqueue({
        message: getI18nString('bindings.no_file_access'),
        type: 'NAVIGATE_FILE_FAILED',
        error: !0
      }));
      return;
    }
    customHistory.redirect(a.link, '_blank');
  }
  loadedCompareChanges() {
    _$$j.trigger('loadedCompareChanges');
  }
  changeDocumentColorProfile(e, t) {
    let i = this._store.getState().selectedView;
    (i && i.view === 'fullscreen' && isDesignOrIllustration(i.editorType) || this._state.openFile?.canEdit) && e !== t && (e === ColorProfileEnum.LEGACY ? r6(this.dispatch, e, t, 'assign', this._state.openFile?.key) : this.dispatch(showModalHandler({
      type: r7,
      data: {
        newDocumentColorProfile: t
      }
    })));
  }
  addWhiteboardToolToRecents(e) {
    if (!isSupportedBlockType(e)) return;
    let {
      user
    } = this._store.getState();
    user && this.dispatch(addWhiteboardToolToRecentsAction({
      currentUserId: user.id,
      storeInRecentsKey: FDocumentType.FigJam,
      item: {
        id: e,
        type: ITemplateType.WhiteboardTool
      }
    }));
  }
  addWhiteboardDiagrammingShapeToRecents(e, t) {
    let {
      user
    } = this._store.getState();
    _$$KE(e, t, user?.id);
  }
  setUserFlag(e, t) {
    t !== e in this._state.userFlags && this.dispatch(postUserFlag({
      [e]: t
    }));
  }
  onViewOnlyJiggle(e, t) {
    _$$i3(e, t);
  }
  shouldViewOnlyJiggle() {
    let e = this._store.getState();
    return _$$h4(e);
  }
  upsellLibrariesHandleConsecutivePaste(e, t) {
    _$$nd(e, t);
  }
  onPlaygroundNodeChange(e) {
    _$$U(e);
  }
  triggerHaptics(e) {
    _$$H.trigger(e);
  }
  evaluateMathExpression(e, t) {
    let i = O4(e, t);
    return i.error ? null : i.value;
  }
  onConnectDiagramShapeWithConnector() {
    recordConnectDiagramShapeActive();
  }
  sendActiveStackRegionAnalytics(e) {
    trackUserEvent('Autolayout focused stack region', this._state, {
      region: e
    });
  }
  afterPageChange(e) {
    _$$Z(e);
  }
  afterComputeViewportSettings(e) {
    globalViewportPromise && globalViewportPromise(e);
    resetGlobalViewportPromise();
  }
  movedSingleNodeVisualBell(e, t, i) {
    this.dispatch(VisualBellActions.enqueue({
      type: 'moved-single-node',
      message: getI18nString('visual_bell.moved_single_node', {
        nodeName: truncate(t, 30),
        newPage: i
      }),
      ...(getFeatureFlags().ce_move_to_navigate ? {
        button: {
          text: getI18nString('visual_bell.go_there'),
          Initialize() {
            let e = _$$Z2();
            return t => {
              e(computeFullscreenViewportForNode({
                nodeId: t,
                alwaysPan: !0
              }));
            };
          },
          action(t, i, n) {
            n(e);
          }
        }
      } : {})
    }));
  }
  createSlideAfterFocusedSlide(e) {
    let t = getSingletonSceneGraph();
    return _$$oY(t, e);
  }
  isAiDisabled() {
    return !hasJubileePermissionForWhiteboard();
  }
  isAiDisabledFigJam() {
    return isEditDisabled({
      isDisabledForViewers: !0
    });
  }
  isOrgUserGatedForLlama() {
    let {
      currentUserOrgId,
      orgById
    } = debugState.getState();
    return isLlamaEnabledForOrg(getOrgByCurrentUserId(currentUserOrgId, orgById));
  }
  isInAiExperimentOrGrantlist() {
    return checkEligibilityStatus('bindings');
  }
  removeImageBackground() {
    $I({
      moduleToOpen: {
        type: 'custom',
        module: jsx(_$$w3, {
          source: 'fullscreen-action'
        }),
        beforeModuleOpen: () => {
          let e = ImageToolsBindings?.getNodeImagePairsForEdit() ?? [];
          _$$B3(JT.REMOVE_BACKGROUND);
          Ag(JT.REMOVE_BACKGROUND, _$$J4, {
            source: 'fullscreen-action',
            targets: e
          }, {
            isBatch: e.length > 1
          });
        },
        name: ExtensionFeatureKey.BACKGROUND_REMOVE_TOAST
      },
      trackingData: {
        source: 'fullscreen_action_remove_image'
      }
    });
  }
  upscaleImage(e, t) {
    $I({
      moduleToOpen: {
        type: 'custom',
        module: jsx(_$$q2, {
          source: t
        }),
        beforeModuleOpen: () => {
          let i = e ?? ImageToolsBindings?.getNodeImagePairsForEdit() ?? [];
          _$$B3(JT.UPSCALE_IMAGE);
          Ag(JT.UPSCALE_IMAGE, _$$r2, {
            targets: i,
            source: t
          }, {
            isBatch: i.length > 1
          });
        },
        name: ExtensionFeatureKey.BACKGROUND_REMOVE_TOAST
      },
      trackingData: {
        source: 'fullscreen_action_upscale_image'
      }
    });
  }
  autoRenameLayers(e, t) {
    let i = {
      action: JT.AUTO_RENAME_LAYERS,
      source: Tr(e),
      clientLifecycleId: generateUUIDv4(),
      file_key: this.openFileKey(),
      quick_actions_session_id: null,
      product_type: 'design'
    };
    let n = new AbortController();
    Dl(i);
    try {
      _$$Ay8({
        params: {
          source: e,
          overwriteNames: !1,
          ignoreDescendants: t
        },
        abortController: n,
        clientLifecycleId: i.clientLifecycleId
      });
    } catch (e) {
      console.error(e);
      _$$as({
        ...i,
        status: AIActionStatus.FAILED,
        reason: AIActionResult.ERROR
      });
      return;
    }
    n.signal.aborted ? _$$as({
      ...i,
      status: AIActionStatus.FAILED,
      reason: AIActionResult.STOPPED
    }) : _$$as({
      ...i,
      status: AIActionStatus.COMPLETED,
      reason: AIActionResult.SUCCESS
    });
  }
  hasAiRenameLayersPermission(e) {
    return A0(e);
  }
  autoRenameLayersDevHandoff(e) {
    R4(e);
  }
  async designToCodeFiles(e, t, i, n, r) {
    if (!Dn()) {
      console.error('Cannot convert design to code while offline');
      return Promise.reject({
        files: []
      });
    }
    let a = getSingletonSceneGraph();
    let s = a.get(e);
    let o = [];
    let l = null;
    if (t) {
      for (let e of n) {
        let t = a.get(e);
        t && o.push(t);
      }
      i && (l = a.get(i));
    }
    if (!s) {
      return Promise.resolve({
        files: []
      });
    }
    let d = {
      useFigmaComponents: getFeatureFlags().componetize_dtr && !r
    };
    return o.length ? await _$$Ts(s, o, l, d) : await _$$Ts(s, void 0, void 0, d);
  }
  bulkExportDesignsToReact() {
    qV(this._store.dispatch);
    return null;
  }
  onDirectExportCompleted() {
    handleAtomEvent({
      id: 'export_completed',
      properties: {
        from: 'export_panel'
      }
    });
  }
  setSitesViewFile() {
    isSitesFeatureEnabled() && (atomStoreManager.set(sitesViewSetterAtomFamily, PanelType.FILE), this.closeLeftRailOverlay());
  }
  setSitesViewCode() {
    isSitesFeatureEnabled() && (atomStoreManager.set(sitesViewSetterAtomFamily, PanelType.CODE), this.closeLeftRailOverlay());
  }
  setSitesViewCms() {
    isSitesFeatureEnabled() && (atomStoreManager.set(sitesViewSetterAtomFamily, PanelType.DAKOTA), this.closeLeftRailOverlay());
  }
  closeLeftRailOverlay() {
    atomStoreManager.set(Nl, void 0);
  }
  setSitesInsertsOverlay() {
    isSitesFeatureEnabled() && atomStoreManager.set(Nl, $e.INSERT);
  }
  setSitesFindOverlay() {
    isSitesFeatureEnabled() && atomStoreManager.set(Nl, $e.FIND);
  }
  setAnnotationEditingIndex(e) {
    atomStoreManager.set(_$$m2, e);
  }
  showSlotPreferredContentPicker(e, t, i) {
    let n;
    n = {
      dispatch: this.dispatch,
      slotNodeId: e,
      position: {
        x: t,
        y: i
      },
      existingOpenModalType: this._state.modalShown?.type
    };
    getFeatureFlags().dse_slots && (n.existingOpenModalType === iN.type && n.dispatch(hideSpecificModal(iN)), n.dispatch(showModalHandler({
      type: iN,
      showModalsBeneath: !0,
      data: {
        position: n.position,
        slotNodeId: n.slotNodeId
      }
    })));
  }
  async pasteMermaidAsDiagram(e) {
    let t = _$$Ay6();
    try {
      let i = await cortexAPI.figjam.createVisual({
        prompt: '',
        visualType: 'diagram',
        directMermaidText: e
      }, t);
      Rz('diagram', i);
      return !0;
    } catch (e) {
      console.error('Error pasting mermaid as diagram:', e);
      return !1;
    }
  }
};
lX.interfaceFontPromise = null;
lX.fontListPromise = null;
export let $$lQ0 = lX;
isMainAppRoute() && $$lQ0.startFetchingFontList();
export const W = $$lQ0;
export const a = $$lq1;