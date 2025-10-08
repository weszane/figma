import { stylex } from '@stylexjs/stylex';
import eo from 'classnames';
import { noop } from 'lodash-es';
import { Children, Component, createElement, createRef, memo, PureComponent, useCallback, useContext, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createPortal, flushSync } from 'react-dom';
import { connect, useDispatch, useSelector, useStore } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { W as _$$W3 } from '../0c62c2fd/624465';
import { t as _$$t5 } from '../469e6e40/489933';
import { reportError } from '../905/11';
import { isLoading } from '../905/18797';
import { setKeyboardShortcutPanelTab } from '../905/26824';
import { isFullscreenSlidesView } from '../905/35881';
import { getMaskState } from '../905/36308';
import { fullscreenAlias } from '../905/37051';
import { A as _$$A3 } from '../905/51490';
import { A as _$$A9 } from '../905/51743';
import { useTabState } from '../905/56919';
import { R as _$$R3 } from '../905/57445';
import { isExactModifier, KeyCodes, ModifierKeyCodes } from '../905/63728';
import { addRecentlyUsedAction } from '../905/73603';
import { n as _$$n3 } from '../905/79930';
import { setSideHandler } from '../905/80656';
import { combineWithHyphen, ShareContext } from '../905/91820';
import { useSprigWithSampling } from '../905/99656';
import { registerModal } from '../905/102752';
import { selectWithShallowEqual } from '../905/103090';
import { V as _$$V } from '../905/106549';
import { mW, qN } from '../905/123443';
import { J as _$$J2 } from '../905/129695';
import { KindEnum } from '../905/129884';
import { N as _$$N } from '../905/130112';
import { getFileTypeLargePx, getFileTypePx } from '../905/149328';
import { Tabs } from '../905/150656';
import { showModalHandler } from '../905/156213';
import { ServiceCategories } from '../905/165054';
import { b as _$$b } from '../905/168657';
import { bL as _$$bL2, QB } from '../905/174266';
import { zK, zM } from '../905/182453';
import { permissionScopeHandler as _$$l, zk } from '../905/189185';
import { PinningState } from '../905/192333';
import { c as _$$c } from '../905/196462';
import { WP } from '../905/198599';
import { getSelectedItemTypes } from '../905/202425';
import { isInvalidValue, isValidValue, normalizeValue } from '../905/216495';
import { r as _$$r5 } from '../905/216849';
import { J as _$$J3 } from '../905/225412';
import { labConfigurations, useLabConfiguration } from '../905/226610';
import { I_, wq } from '../905/234821';
import { t as _$$t4 } from '../905/241707';
import { copyHyperlinkToClipboard, parseLinkForContext } from '../905/250387';
import { v as _$$v } from '../905/266815';
import { HiddenLabel, Label } from '../905/270045';
import { Checkbox } from '../905/274480';
import { AIActionProgressType } from '../905/278499';
import { renameLayers, getActionSourceString } from '../905/281495';
import { useIsCodeViewPanel } from '../905/298663';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { l as _$$l2 } from '../905/331642';
import { RecordingScrollContainer } from '../905/347284';
import { n as _$$n } from '../905/347702';
import { getUserId, selectCurrentUser } from '../905/372672';
import { isCommentStateActive } from '../905/380385';
import { deepEqual } from '../905/382883';
import { useIsFullscreenWithDevVariables } from '../905/383776';
import { P as _$$P4 } from '../905/392438';
import { pB } from '../905/395919';
import { WidgetTypes } from '../905/403797';
import { yZ } from '../905/407352';
import { debugState } from '../905/407919';
import { browserCapabilities } from '../905/409121';
import { Link } from '../905/438674';
import { IconButton } from '../905/443068';
import { LoadingSpinner } from '../905/443820';
import { trackEventAnalytics } from '../905/449184';
import { useDraftsFolderProject } from '../905/461685';
import { AutoLayout, Spacer } from '../905/470281';
import { PluginImage } from '../905/480825';
import { formatI18nMessage } from '../905/482208';
import { isVotingSessionJoined } from '../905/486443';
import { nP as _$$nP, LU } from '../905/487011';
import { O as _$$O3 } from '../905/487602';
import { stripHtmlTags } from '../905/491152';
import { bL as _$$bL, c$, l9, mc, WL, YJ } from '../905/493196';
import { exportPickerCheckAction } from '../905/496937';
import { NO } from '../905/498139';
import { handleAtomEvent } from '../905/502364';
import { openWindow } from '../905/508367';
import { a as _$$a } from '../905/518538';
import { Button, ButtonLargeWide } from '../905/521428';
import { globalPerfTimer } from '../905/542194';
import { A as _$$A8, x as _$$x2 } from '../905/553642';
import { isFullscreenSitesView } from '../905/561485';
import { VisualBellIcon, VisualBellType } from '../905/576487';
import { x as _$$x4 } from '../905/587214';
import { getFeatureFlags } from '../905/601108';
import { buildFileUrl } from '../905/612685';
import { setupThemeContext } from '../905/614223';
import { generateExportThumbnail, convertImageDataToURL } from '../905/619652';
import { VU } from '../905/625959';
import { createFigmaPluginScope } from '../905/629114';
import { ButtonPrimitive } from '../905/632989';
import { M as _$$M2 } from '../905/637515';
import { getVisibleTheme } from '../905/640017';
import { i as _$$i2 } from '../905/649519';
import { logger } from '../905/651849';
import { O as _$$O } from '../905/655700';
import { useLocalStorageSync } from '../905/657224';
import { getResourceDataOrFallback } from '../905/663269';
import { F as _$$F3 } from '../905/680873';
import { textDisplayConfig } from '../905/687265';
import { getSingletonSceneGraph } from '../905/700578';
import { U as _$$U } from '../905/707331';
import { u as _$$u } from '../905/712485';
import { logDebug, logError, logWarning } from '../905/714362';
import { SvgComponent } from '../905/714743';
import { l as _$$l3 } from '../905/716947';
import { x as _$$x3 } from '../905/719609';
import { Point } from '../905/736624';
import { createNewFileWithRestrictions } from '../905/738636';
import { DraggableModalManager } from '../905/748636';
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from '../905/751457';
import { getPermissionsAndView } from '../905/766303';
import { isFullscreenDevHandoffView } from '../905/782918';
import { EventShield } from '../905/821217';
import { zi } from '../905/824449';
import { KeyboardReceiver } from '../905/826900';
import { j as _$$j2 } from '../905/834956';
import { TabsPrimitiveTabStrip } from '../905/840133';
import { useDropdownState } from '../905/848862';
import { isVsCodeEnvironment } from '../905/858738';
import { useFileByKey } from '../905/862913';
import { defaultSessionLocalIDString } from '../905/871411';
import { generateUUIDv4 } from '../905/871474';
import { useHasParentOrgId } from '../905/882262';
import { ManuallyLabeledCheckbox } from '../905/909715';
import { sendWithRetry } from '../905/910117';
import { bL } from '../905/911410';
import { Y as _$$Y2 } from '../905/912236';
import { debounce } from '../905/915765';
import { dayjs } from '../905/920142';
import { useFullscreenReady } from '../905/924253';
import { hideDropdownAction, selectViewAction } from '../905/929976';
import { styleBuilderInstance } from '../905/941192';
import { dL, qz } from '../905/944871';
import { AssetTabType, ExtensionFeatureKey } from '../905/946805';
import { Vd } from '../905/964786';
import { TextWithTruncation } from '../905/984674';
import { NONE_SYMBOL } from '../905/992467';
import { Y as _$$Y } from '../1250/745256';
import { X as _$$X } from '../1250/995935';
import { A as _$$A20 } from '../1617/377036';
import { A as _$$A19 } from '../1617/568132';
import { A as _$$A12 } from '../2854/666676';
import { h as _$$h5, M as _$$M3 } from '../3276/630478';
import { A as _$$A2 } from '../3276/701353';
import { U as _$$U5 } from '../3276/848795';
import { A as _$$A17 } from '../6828/718668';
import { JI } from '../9410/43374';
import { X as _$$X2 } from '../9410/57440';
import { h as _$$h2 } from '../9410/146161';
import { MO } from '../9410/228031';
import { V6 as _$$V2 } from '../9410/255781';
import { f as _$$f } from '../9410/341198';
import { u as _$$u3 } from '../9410/354452';
import { E as _$$E2 } from '../9410/367372';
import { cm } from '../9410/486658';
import { ry as _$$ry } from '../9410/534867';
import { LO as _$$LO } from '../9410/571209';
import { b as _$$b3 } from '../9410/595260';
import { rN as _$$rN, VY } from '../9410/607888';
import { Yz } from '../9410/626378';
import { H as _$$H2, h as _$$h4 } from '../9410/649740';
import { g as _$$g2 } from '../9410/672727';
import { a as _$$a2 } from '../9410/698287';
import { FloatingWindowHorizontalZone, FloatingWindowVerticalZone, isErrorCausedByWindowClose, suppressingErrorsCausedByWindowClose, withFloatingWindowAPI } from '../9410/728077';
import { ZX } from '../9410/747144';
import { _ as _$$_, h as _$$h3 } from '../9410/755019';
import { jx, Nd } from '../9410/793186';
import { j as _$$j } from '../9410/853982';
import { $_, e_ as _$$e_ } from '../9410/960980';
import { cssBuilderInstance } from '../cssbuilder/589278';
import _require2 from '../f2246930/661721';
import _require from '../f2246930/661721';
import { i as _$$i, s9 as _$$s2, si as _$$si, t4 as _$$t2, AM, bx, C9, d2, Dm, DT, J7, jQ, K9, ku, kX, LO, OI, Rb, SA, Sl, U3, V6, Vl, Vx, W_, wi, WJ, XX, Z7, Zn } from '../figma_app/8833';
import { lW } from '../figma_app/11182';
import { canPerformAction, canRunExtensions, isExportRestricted } from '../figma_app/12796';
import { y as _$$y4 } from '../figma_app/13082';
import { atom, atomStoreManager, useAtomValueAndSetter, useAtomWithSubscription, Xr } from '../figma_app/27355';
import { IuL, k22, LdP, PXB, rY4, tui, tXK, ZAq, ZB$, zK5 } from '../figma_app/27776';
import { Ye } from '../figma_app/32128';
import { s9 as _$$s4 } from '../figma_app/34798';
import { StarterFileEditConfirmation } from '../figma_app/43951';
import { HubTypeEnum } from '../figma_app/45218';
import { FEditorType, mapEditorTypeToFileType, mapFileTypeToEditorType } from '../figma_app/53721';
import { $ as _$$$, J as _$$J5 } from '../figma_app/61771';
import { applyOffsetToViewport, centeredValue, getBasicViewportRect, getViewportInfo, viewportToScreen } from '../figma_app/62612';
import { U as _$$U3 } from '../figma_app/65327';
import { iT as _$$iT } from '../figma_app/74165';
import { setFileThumbnailOptimistic, copyShareLinkOptimistic } from '../figma_app/78808';
import { getObservableOrFallback, getObservableValue } from '../figma_app/84367';
import { getDevModeFocusId, isFullscreenOverview, useDevModeFocusId, useIsFullscreenDevModeComponentBrowser, useIsFullscreenOverview } from '../figma_app/88239';
import { hidePickerThunk, isSelectionPaintItem, isSelectionStyleItem, recentlyUsedQuickCommands } from '../figma_app/91703';
import { isNotNullish } from '../figma_app/95419';
import { kp, Sk } from '../figma_app/98578';
import { wg } from '../figma_app/101956';
import { Zg } from '../figma_app/106207';
import { g as _$$g3 } from '../figma_app/106955';
import { wo } from '../figma_app/109130';
import { $c, au as _$$au, D6, H1 } from '../figma_app/124493';
import { autosaveAtom, FileProcessingStatus } from '../figma_app/139113';
import { isAssetSuggestionsEnabled, isRenameLayersEnabled } from '../figma_app/144974';
import { shouldUseWebGL2 } from '../figma_app/149304';
import { Dc, hV } from '../figma_app/151766';
import { Vr } from '../figma_app/151869';
import { hasLocalFileId, ManifestEditorType } from '../figma_app/155287';
import { Ig } from '../figma_app/155647';
import { useSubscribedLibraries } from '../figma_app/155728';
import { z2 } from '../figma_app/165422';
import { useDeepEqualSceneValue } from '../figma_app/167249';
import { O as _$$O2 } from '../figma_app/185954';
import { dh } from '../figma_app/186343';
import { FFileType, FPermissionLevelType } from '../figma_app/191312';
import { areColorsEqual, getThemeBackgroundColor, parseColor, whiteColor } from '../figma_app/191804';
import { getFileKeyFromSelectedView } from '../figma_app/193867';
import { yesNoTrackingEnum } from '../figma_app/198712';
import { AN } from '../figma_app/201703';
import { localVariablesAtom } from '../figma_app/216057';
import { copyToSitesFromDesignAtom } from '../figma_app/223206';
import { Jb } from '../figma_app/224338';
import { useEffectiveThemeId } from '../figma_app/226737';
import { CR } from '../figma_app/234505';
import { r as _$$r3 } from '../figma_app/235299';
import { StyleIdHandler } from '../figma_app/243058';
import { dR, Gt } from '../figma_app/248118';
import { hasJubileePermissionForDesign } from '../figma_app/251115';
import { initializeNavigationPreferences } from '../figma_app/253220';
import { DialogBody, DialogContents, DialogHeader, DialogHiddenTitle, DialogTitle } from '../figma_app/272243';
import { rgbToNormalized } from '../figma_app/273493';
import { handlePreviewTracking } from '../figma_app/274217';
import { mapStyleKeyToType } from '../figma_app/276332';
import { F as _$$F2 } from '../figma_app/284426';
import { useSubscription } from '../figma_app/288654';
import { FOCUS_NEXT_AREA, FOCUS_PREVIOUS_AREA } from '../figma_app/290668';
import { FX } from '../figma_app/291792';
import { imageProcessor } from '../figma_app/291892';
import { R as _$$R2, y as _$$y3 } from '../figma_app/294349';
import { Ev, zF } from '../figma_app/297822';
import { useSendToMakeExperiment } from '../figma_app/297957';
import { viewportNavigatorContext } from '../figma_app/298911';
import { getPluginByFileId, getRelaunchablePlugins } from '../figma_app/300692';
import { startChattingThunk } from '../figma_app/308685';
import { mJ } from '../figma_app/311375';
import { logAndTrackCTA, mapFileToProductType, trackFileEvent } from '../figma_app/314264';
import { LC, P5 } from '../figma_app/318590';
import { e as _$$e2, Q as _$$Q } from '../figma_app/320600';
import { $I, gn } from '../figma_app/322845';
import { n as _$$n2 } from '../figma_app/339971';
import { Zj as _$$Zj, S5 } from '../figma_app/355754';
import { c1, jv, TY, Yh } from '../figma_app/357047';
import { T as _$$T2 } from '../figma_app/373780';
import { CreateVariableForm, useVariableCreateModalActions } from '../figma_app/380814';
import { SY } from '../figma_app/383828';
import { isDescendant } from '../figma_app/387100';
import { O8 } from '../figma_app/393980';
import { HR } from '../figma_app/397881';
import { rg as _$$rg } from '../figma_app/401069';
import { setupCursorChatDisabledCheck } from '../figma_app/403368';
import { NF } from '../figma_app/406976';
import { KeyboardShortcut } from '../figma_app/420927';
import { V8 } from '../figma_app/443991';
import { A0, Mc, R4 } from '../figma_app/454974';
import { fullscreenValue } from '../figma_app/455680';
import { throwTypeError } from '../figma_app/465776';
import { a8 as _$$a3, mH } from '../figma_app/467440';
import { canAccessFullDevMode, useCanAccessDevModeEntryPoint, useCanAccessFullDevMode, useCanUseDevModeDemoFile } from '../figma_app/473493';
import { getAllKeyboardLayoutNames, getCurrentKeyboardLayout, getKeyboardLayoutName, updateKeyboardLayoutPreference } from '../figma_app/475303';
import { bO, j3 } from '../figma_app/500946';
import { Ep, ZH } from '../figma_app/504823';
import { Xw } from '../figma_app/506364';
import { ih as _$$ih2 } from '../figma_app/509285';
import { selectCurrentFile, selectOpenFile, useCurrentFileKey, useIsCurrentUserCreator, useOpenFileLibraryKey } from '../figma_app/516028';
import { rY as _$$rY } from '../figma_app/524655';
import { hO } from '../figma_app/545293';
import { KV } from '../figma_app/548615';
import { useIsSelectedFigmakeFullscreen } from '../figma_app/552876';
import { sendReconnectingBanner } from '../figma_app/553184';
import { bs, SD } from '../figma_app/553940';
import { af as _$$af } from '../figma_app/559491';
import { O as _$$O4, S as _$$S5 } from '../figma_app/568977';
import { $P, D6 as _$$D4, ix as _$$ix2, pB as _$$pB, Rt as _$$Rt, EA, Hq, Ke, LE, qc, Tk, V4, Vu, w8, wn, ZR } from '../figma_app/575164';
import { xE } from '../figma_app/581520';
import { jz as _$$jz } from '../figma_app/587765';
import { getCurrentTeam } from '../figma_app/598018';
import { Bu, dd, Lk, Rt } from '../figma_app/604494';
import { PluginManager } from '../figma_app/612938';
import { WithTrackedButtonWide } from '../figma_app/617427';
import { hasCmsCollection } from '../figma_app/618433';
import { J3, JU, kD, kN } from '../figma_app/622574';
import { copyTextToClipboard } from '../figma_app/623293';
import { getViewState } from '../figma_app/623300';
import { ImageManager } from '../figma_app/624361';
import { XC } from '../figma_app/631279';
import { JT } from '../figma_app/632248';
import { getSubscribedVariableInfo, PrimaryWorkflowEnum } from '../figma_app/633080';
import { BigTextInputForwardRef } from '../figma_app/637027';
import { findStyleDataByKey, isSubscribedLibrary } from '../figma_app/646357';
import { v4, xv } from '../figma_app/655139';
import { filterNotNullish } from '../figma_app/656233';
import { LinkMetadataEvent } from '../figma_app/671547';
import { t4 as _$$t6, Gm } from '../figma_app/675605';
import { k1 } from '../figma_app/687767';
import { _o } from '../figma_app/701001';
import { U3 as _$$U4 } from '../figma_app/737746';
import { getCurrentOrgAdminInfo } from '../figma_app/740025';
import { EditorPreferencesApi, getColorFormat, getDevHandoffInspectSplitPosition, getPropertiesPanelSplitPosition, getSidebarSplitPosition } from '../figma_app/740163';
import { getPropertiesPanelTab, updateHoveredNode } from '../figma_app/741237';
import { qZ, ui } from '../figma_app/761118';
import { Rs as _$$Rs } from '../figma_app/761870';
import { ActionType, AppStateTsApi, AutoLayoutInsertMode, Axis, ColorFormatEnum, colorManagementStateJs, ColorProfileEnum, ColorSpaceEnum, CustomFocusHelpers, DesignGraphElements, DesignWorkspace, EyedropperBindings, Fullscreen, FullscreenMode, HandoffBindingsCpp, IVariableStyles, KeyboardLayout, LogToConsoleMode, MeasurementType, MenuType, Multiplayer, NodePropertyCategory, NodeType, PluginHelpers, SchemaJoinStatus, SelfDesignType, SessionOrigin, SessionStatus, StateHierarchy, StylesBindings, UIVisibilitySetting, VariableDataType, VariableResolvedDataType, VariablesBindings } from '../figma_app/763686';
import { markCommentAsUnread, markThreadAsRead, activateNewComment, resolveCommentThread, setNewAnchorPosition } from '../figma_app/770088';
import { BrowserInfo, isFigmaMobileApp, isMobileUA } from '../figma_app/778880';
import { parsePxInt, parsePxNumber } from '../figma_app/783094';
import { SH } from '../figma_app/790714';
import { c4 } from '../figma_app/805925';
import { xm } from '../figma_app/826288';
import { xp } from '../figma_app/827216';
import { I as _$$I } from '../figma_app/827540';
import { useIsSelectedViewFullscreenCooper } from '../figma_app/828186';
import { TrackingProvider } from '../figma_app/831799';
import { dX } from '../figma_app/837840';
import { xT } from '../figma_app/841415';
import { getLocalPlugins, isEditorTypeSupported, isEditorTypeSupportedFor, useCanPerformAction, useCanRunExtensions, useDedupedRecentlyUsedPlugins, useDedupedRecentlyUsedWidgets, useFilteredDedupedRecentlyUsedPlugins, useFilteredWidgets, useInstalledPluginsAndWidgets, usePluginedWidgets, usePublishedPlugins } from '../figma_app/844435';
import { ty as _$$ty } from '../figma_app/844818';
import { hasActionOrCallback, isMenuItemChecked, getActionOrName, hasChildrenOrDropdown, isCheckedOrHasPropertyValue } from '../figma_app/847915';
import { y as _$$y } from '../figma_app/849666';
import { CssBackedLoading, ImageBackedLoading } from '../figma_app/858013';
import { we } from '../figma_app/861982';
import { Ag, B3, cT, pP, qy } from '../figma_app/862289';
import { S as _$$S6 } from '../figma_app/864577';
import { desktopAPIInstance } from '../figma_app/876459';
import { generateRecordingKey, handleChangeEvent, handleMouseEvent, hookForKeyboard, RecordingPureComponent, SKIP_RECORDING, useHandleChangeEvent, useHandleFocusEvent, useHandleInputEvent, useHandleKeyboardEvent, useHandleMouseEvent } from '../figma_app/878298';
import { atomM4 } from '../figma_app/879363';
import { oh as _$$oh, bj, pF, pg, pn, Yq } from '../figma_app/880974';
import { w6 } from '../figma_app/887579';
import { handleKeyboardEventByState, KeyboardEventResponse } from '../figma_app/896988';
import { isInteractionOrEvalMode } from '../figma_app/897289';
import { trackFileEventWithStore, trackFileEventWithUser } from '../figma_app/901889';
import { FileBrowserLocation, TabOpenBehavior } from '../figma_app/915202';
import { ConfirmationModal2 } from '../figma_app/918700';
import { Badge, BadgeColor } from '../figma_app/919079';
import { useLatestRef } from '../figma_app/922077';
import { FW as _$$FW } from '../figma_app/952764';
import { mD, Ne, Tm } from '../figma_app/955528';
import { Vi } from '../figma_app/955650';
import { MY } from '../figma_app/957070';
import { fJ } from '../figma_app/963341';
import { Uc as _$$Uc, C4, L3 } from '../figma_app/968444';
import { r as _$$r } from '../figma_app/968727';
import { fG, gY } from '../figma_app/973927';
import { mz } from '../figma_app/975811';
import { getCurrentFileType, getSelectedEditorType, isDesignFileType, isDevHandoffEditorType, isWhiteboardFileType } from '../figma_app/976749';
import { CursorContainer, CursorIcon, useCursorVisibility } from '../figma_app/991227';
import { EG } from '../figma_app/995580';
import { A as _$$A0 } from '../svg/56834';
import { A as _$$A14 } from '../svg/211156';
import { A as _$$A15 } from '../svg/353264';
import { A as _$$A13 } from '../svg/411264';
import { A as _$$A21 } from '../svg/435789';
import { A as _$$A4 } from '../svg/443105';
import { A as _$$A5 } from '../svg/478146';
import { A as _$$A11 } from '../svg/577900';
import { A as _$$A18 } from '../svg/617101';
import { A as _$$A10 } from '../svg/751870';
import { A as _$$A1 } from '../svg/802589';
import { A as _$$A16 } from '../svg/821527';
class O {
  static getCanvasColorSpace(e = {}) {
    let t = dX('fullscreen');
    let i = t?.getContext(shouldUseWebGL2() ? 'webgl2' : 'webgl')?.drawingBufferColorSpace;
    if (i === 'srgb') ;else if (i === 'display-p3') return e.returnString ? ColorSpaceEnum[ColorSpaceEnum.DISPLAY_P3] : ColorSpaceEnum.DISPLAY_P3;
    return e.returnString ? ColorSpaceEnum[ColorSpaceEnum.SRGB] : ColorSpaceEnum.SRGB;
  }
  static setCanvasColorSpace(e) {
    let t = dX('fullscreen');
    let i = t?.getContext(shouldUseWebGL2() ? 'webgl2' : 'webgl');
    'drawingBufferColorSpace' in i && (i.drawingBufferColorSpace = e);
  }
  static getDocumentColorProfile(e = {}) {
    if (void 0 === colorManagementStateJs) throw new Error('ColorManagementStateJs is not defined');
    return e.returnString ? ColorProfileEnum[colorManagementStateJs.documentColorProfile().getCopy()] : colorManagementStateJs.documentColorProfile().getCopy();
  }
  static async debugImagesFromSelection() {
    async function e(e) {
      for (let t of ['image/png', 'image/jpeg', 'image/heic']) {
        try {
          return await imageProcessor.decodeAsync(e, t, 0, 0, !0);
        } catch (e) {}
      }
      return null;
    }
    let t = createFigmaPluginScope();
    for (let i of t.currentPage.selection) {
      for (let r = 0; r < i.fills.length; r++) {
        let n = i.fills[r];
        if (n.type === 'IMAGE') {
          let a = t.getImageByHash(n.imageHash);
          if (!a) continue;
          let s = await a.getBytesAsync();
          let l = await e(s);
          if (l) {
            let e = {
              id: i.id,
              type: 'fill',
              index: r,
              imageHash: n.imageHash,
              colorProfile: ColorSpaceEnum[l.colorProfile],
              bytes: s
            };
            logDebug('ColorManagementDebug', 'images', e, {
              logToConsole: LogToConsoleMode.ALWAYS
            });
          }
        }
      }
      for (let r = 0; r < i.strokes.length; r++) {
        let n = i.strokes[r];
        if (n.type === 'IMAGE') {
          let a = t.getImageByHash(n.imageHash);
          if (!a) continue;
          let s = await a.getBytesAsync();
          let l = await e(s);
          if (l) {
            let e = {
              id: i.id,
              type: 'stroke',
              index: r,
              imageHash: n.imageHash,
              colorProfile: ColorSpaceEnum[l.colorProfile],
              bytes: s
            };
            logDebug('ColorManagementDebug', 'images', e, {
              logToConsole: LogToConsoleMode.ALWAYS
            });
          }
        }
      }
    }
  }
}
function L() {
  useEffect(() => (getFeatureFlags().ee_color_management_debug && (window.colorManagementDebug = O), () => {
    'colorManagementDebug' in window && delete window.colorManagementDebug;
  }), []);
  return null;
}
function J() {
  let {
    Sprig
  } = useSprigWithSampling();
  let t = useAtomWithSubscription(Lk);
  let i = _$$I();
  let {
    loaded,
    query,
    sessionId
  } = function () {
    let [e, t] = useState(!1);
    let {
      currentSearch
    } = useAtomWithSubscription(WP);
    let r = useAtomWithSubscription(hO.currentSearchAtom);
    let a = useAtomWithSubscription(dd);
    useEffect(() => {
      let e = currentSearch?.result.status === 'loaded';
      let n = r?.result.status === 'loaded';
      e && n && t(!0);
    }, [currentSearch?.result.status, r?.result.status]);
    let s = '';
    currentSearch?.input.type === 'input-text' && (s = currentSearch.input.query);
    return {
      loaded: e,
      query: s,
      sessionId: a
    };
  }();
  let o = useRef(null);
  let c = useRef(!1);
  let u = useCallback(() => {
    o.current && (clearTimeout(o.current), o.current = null);
  }, []);
  let p = useCallback(() => {
    Sprig('track', 'quick_actions_assets_tab_search', {
      query,
      sessionId
    });
    c.current = !0;
  }, [Sprig, query, sessionId]);
  useEffect(() => {
    if (getFeatureFlags().assets_tab_sprig_tracking && !c.current) {
      t === AssetTabType.ASSETS && loaded && (i ? o.current = setTimeout(() => {
        p();
      }, 3e4) : (p(), u()));
      return u;
    }
  }, [t, u, loaded, i, p]);
  return null;
}
function $() {
  let e = _$$X();
  return jsx(_$$Y, {
    prioritizedBanners: e,
    location: 'editor'
  });
}
let et = memo(() => {
  return getFeatureFlags().internal_only_debug_tools ? jsx(er, {}) : null;
});
memo(() => {
  return getFeatureFlags().internal_only_debug_tools ? jsx(en, {}) : null;
});
let ei = {
  loading: () => null,
  error() {
    useEffect(() => {
      console.error('Failed to load FigmaScope');
    }, []);
    return null;
  }
};
let er = _$$A2.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.EmbeddedFigmaScopeViewForEditorEnabled), {
  ...ei,
  componentName: 'EmbeddedFigmaScopeViewForEditorEnabled'
});
let en = _$$A2.createLazyComponent(() => Promise.all([]).then(_require2).then(e => e.EmbeddedFigmaScopeViewForViewerEnabled), {
  ...ei,
  componentName: 'EmbeddedFigmaScopeViewForViewerEnabled'
});
let el = eo;
function eu() {
  let e = Array.from(getObservableValue(AppStateTsApi?.uiState().autoLayoutShortcutHints, new Map()).values());
  let t = useAtomWithSubscription(Bu);
  let i = browserCapabilities.isApple();
  let n = e => {
    switch (e) {
      case AutoLayoutInsertMode.IGNORE_AUTOLAYOUT:
        return {
          displayName: getI18nString('fullscreen.auto_layout_hints.ignore_auto_layout'),
          shortcutText: i ? '\u2303 Ctrl' : 'S'
        };
      case AutoLayoutInsertMode.PREVENT_NESTING:
        return {
          displayName: getI18nString('fullscreen.auto_layout_hints.prevent_nesting'),
          shortcutText: getI18nString('fullscreen.auto_layout_hints.space_key')
        };
      case AutoLayoutInsertMode.FORCE_INSERTION:
        return {
          displayName: getI18nString('fullscreen.auto_layout_hints.force_insertion'),
          shortcutText: i ? '\u2318' : 'Ctrl'
        };
    }
  };
  let a = e => e.isValid ? e.isActive ? 'auto_layout_hints--activeShortcutWithTextContainer--dkT1S auto_layout_hints--shortcutWithTextContainer--uEquz' : 'auto_layout_hints--shortcutWithTextContainer--uEquz' : 'auto_layout_hints--invalidShortcutWithTextContainer--gvHLT auto_layout_hints--shortcutWithTextContainer--uEquz';
  return e ? jsx('div', {
    className: el()('auto_layout_hints--root--MJKU2', {
      'auto_layout_hints--rootAdjustedForQA--YZlbt': t
    }),
    children: jsx('div', {
      className: 'auto_layout_hints--hintsBarContainer--3DyGD',
      children: e.sort((e, t) => e.shortcut - t.shortcut).map((e, t) => {
        let i = n(e.shortcut);
        return jsxs('div', {
          className: a(e),
          children: [jsx('div', {
            className: e.isActive && e.isValid ? 'auto_layout_hints--activeShortcutContainer--bj0CD auto_layout_hints--shortcutContainer--mIecl' : 'auto_layout_hints--shortcutContainer--mIecl',
            children: i.shortcutText.length > 0 ? jsx('div', {
              className: 'auto_layout_hints--smallShortcutText--lHZ8Q',
              children: i.shortcutText
            }) : jsx(KeyboardShortcut, {
              shortcut: i.shortcutText
            })
          }), jsx('p', {
            children: i.displayName
          })]
        }, t);
      })
    })
  }) : null;
}
let ep = {
  showNotificationSettings: !1,
  disableCommentsWhenHandToolEnabled: !1,
  repositionViewportOnCommentSelection: !1,
  orphanedBy: 'deleted_pages',
  filterBy: 'hidden_sections'
};
let eh = {
  showNotificationSettings: !1,
  disableCommentsWhenHandToolEnabled: !1,
  repositionViewportOnCommentSelection: !1,
  orphanedBy: 'deleted_pages'
};
let ew = atom(new Map());
let eS = parsePxNumber(LdP);
function ej({
  children: e
}) {
  let t = getObservableValue(AppStateTsApi?.cooperFocusView().isInFocusedNodeView, !1);
  let i = getObservableValue(AppStateTsApi?.canvasGrid().canvasGridArray, []);
  let a = _$$rY(i);
  let s = useMemo(() => a.reduce((e, t, i) => (e.set(t, i), e), new Map()), [a]);
  let l = function () {
    let e = wq();
    let t = Xr(ew);
    let [i, r] = useState(new Map());
    let [a, s] = useState(new Map());
    useEffect(() => {
      let n = new Set();
      let o = new Map();
      e.status === 'loaded' && e.data.forEach(e => {
        let t = e.canvasPosition;
        let i = a.get(e.id);
        let r = {
          commentCount: e.comments.filter(e => !e.resolved_at).length,
          threadIds: [],
          hasUnread: e.comments.some(e => !e.resolved_at && e.isUnread)
        };
        o.set(e.id, r);
        t && (!i || t.x !== i.x && t.y !== i.y) && n.add(e);
      });
      n.forEach(e => {
        let t = e.comments[0]?.client_meta?.node_id;
        if (!t || !e.canvasPosition) return;
        let i = getSingletonSceneGraph().get(t);
        let n = i?.containingCooperFrameId() ?? defaultSessionLocalIDString;
        n !== defaultSessionLocalIDString && e.canvasPosition && (s(t => new Map(t.set(e.id, e.canvasPosition))), r(t => new Map(t.set(e.id, n))));
      });
      let l = new Map();
      i.forEach((e, t) => {
        let i = o.get(t);
        if (!i) return;
        let {
          commentCount,
          hasUnread
        } = i;
        let a = l.get(e);
        let s = {
          commentCount: (a?.commentCount ?? 0) + commentCount,
          threadIds: [...(a?.threadIds ?? []), t],
          hasUnread: a?.hasUnread || hasUnread
        };
        l.set(e, s);
      });
      t(l);
    }, [t, a, i, e.data, e.status]);
    return i;
  }();
  let c = getPropertiesPanelSplitPosition();
  let u = useCallback(e => {
    let t = l.get(e.id);
    if (t) return t;
    let i = e.comments[0]?.client_meta?.node_id;
    if (!i) return defaultSessionLocalIDString;
    let r = getSingletonSceneGraph().get(i);
    return r?.containingCooperFrameId() ?? defaultSessionLocalIDString;
  }, [l]);
  let p = _$$R2();
  let h = useMemo(() => {
    let e = [mW.RESOLVED, mW.YOURS];
    t && e.push(mW.CURRENT_ASSET);
    return e;
  }, [t]);
  let m = useMemo(() => [qN.CREATION_DATE, qN.UNREAD, qN.ASSET], []);
  let f = cm();
  let g = useCallback(e => {
    let t = u(e);
    let i = s.get(t);
    return void 0 !== i && t !== defaultSessionLocalIDString ? getI18nString('comments.asset_number', {
      orderNum: i + 1
    }) : e.pageName;
  }, [u, s]);
  let x = useMemo(() => !!t, [t]);
  let y = useCallback(e => {
    if (!t) return () => {};
    let i = u(e);
    return i !== defaultSessionLocalIDString ? () => {
      f(i);
    } : () => {
      AppStateTsApi?.cooperFocusView().exitFocusedNodeView();
    };
  }, [u, f, t]);
  let b = useMemo(() => ({
    [qN.ASSET]: (e, t) => {
      let i = 1 / 0;
      let r = u(e);
      let n = u(t);
      let a = s.get(r) ?? i;
      let o = s.get(n) ?? i;
      return a !== o ? a - o : Date.parse(t.comments[0].created_at) - Date.parse(e.comments[0].created_at);
    }
  }), [u, s]);
  let C = useMemo(() => {
    let e;
    let t = 0;
    return {
      maxHeightDelta: -(e = 0 + eS),
      minBottomMarginDelta: e,
      minLeftMarginDelta: 0,
      minRightMarginDelta: t += c
    };
  }, [c, !0]);
  let v = useMemo(() => ({
    paddingRight: c
  }), [c, !0]);
  let E = useMemo(() => ({
    showNotificationSettings: !0,
    disableCommentsWhenHandToolEnabled: !0,
    repositionViewportOnCommentSelection: !0,
    disableZoomViewportOnCommentSelection: x,
    orphanedBy: 'deleted_anchors',
    filterBy: 'deleted_anchors',
    sidebarFilters: h,
    sidebarSorts: m,
    sidebarModesDisabled: !0,
    dockPositionAdjustment: p,
    getParentName: g,
    getOnCommentSelect: y,
    sortComparatorOverrides: b,
    commentPositionPaddingAdjustment: v,
    draggableModalBoundsAdjustment: C
  }), [x, h, m, p, g, y, b, v, C]);
  return jsx(_$$a.Provider, {
    value: E,
    children: e
  });
}
function eO({
  children: e
}) {
  let t = useSelector(e => e.universalInsertModal?.pinned === PinningState.PINNED_AND_DOCKED_LEFT);
  let i = _$$a2();
  let {
    isPropertiesPanelCollapsed
  } = _$$iT();
  let o = getPropertiesPanelSplitPosition();
  o = isPropertiesPanelCollapsed ? 0 : o;
  let l = useMemo(() => [mW.RESOLVED, mW.YOURS, mW.CURRENT_PAGE], []);
  let d = useMemo(() => [qN.CREATION_DATE, qN.UNREAD], []);
  let {
    xDelta,
    yDelta
  } = _$$R2();
  let p = useMemo(() => {
    let e = parsePxInt(PXB);
    let i = xDelta;
    t && (i += AN + e);
    return {
      xDelta: i,
      yDelta
    };
  }, [t, yDelta, xDelta]);
  let h = useMemo(() => {
    let e = parsePxNumber(LdP);
    let t = 0;
    let r = 0;
    i && (t += e, r += o);
    return {
      maxHeightDelta: 0,
      minBottomMarginDelta: t,
      minLeftMarginDelta: 0,
      minRightMarginDelta: r
    };
  }, [o, i]);
  let m = useMemo(() => {
    if (i) {
      return {
        paddingRight: o
      };
    }
  }, [o, i]);
  let f = useMemo(() => ({
    ..._$$y3,
    sidebarFilters: l,
    sidebarSorts: d,
    dockPositionAdjustment: p,
    draggableModalBoundsAdjustment: h,
    commentPositionPaddingAdjustment: m
  }), [l, d, m, p, h]);
  return jsx(_$$a.Provider, {
    value: f,
    children: e
  });
}
let eD = {
  isDevHandoff: !0
};
function eM({
  children: e
}) {
  let t = _$$a2();
  let i = useDevModeFocusId();
  let s = useSelector(e => e.mirror.appModel.currentPage);
  let o = useContext(viewportNavigatorContext);
  let {
    isPropertiesPanelCollapsed
  } = _$$iT();
  let d = getDevHandoffInspectSplitPosition();
  d = isPropertiesPanelCollapsed ? 0 : d;
  let c = parsePxNumber(ZB$);
  let u = useMemo(() => [mW.RESOLVED, mW.YOURS, mW.CURRENT_PAGE], []);
  let p = useMemo(() => [qN.CREATION_DATE, qN.UNREAD], []);
  let h = _$$R2();
  let m = useMemo(() => {
    let e = 0;
    let i = 0;
    t && (e += c, i += d);
    return {
      maxHeightDelta: 0,
      minBottomMarginDelta: e,
      minLeftMarginDelta: 0,
      minRightMarginDelta: i
    };
  }, [c, d, t]);
  let f = useMemo(() => {
    if (t) {
      return {
        paddingRight: d
      };
    }
  }, [d, t]);
  let g = useCallback(e => {
    if (!i) return !1;
    let t = e && s ? o.getCommentDestinationForCanvasPosition(e, s)?.nodeId : void 0;
    return !t || !isDescendant(getSingletonSceneGraph(), i, t);
  }, [s, o, i]);
  let x = useMemo(() => {
    let e = {
      ..._$$y3,
      sidebarFilters: u,
      sidebarSorts: p,
      dockPositionAdjustment: h,
      draggableModalBoundsAdjustment: m,
      commentPositionPaddingAdjustment: f,
      linkGenerationParams: eD,
      isCommentingDisabledAtPosition: g,
      commentDisabledPositionBellMessage: getI18nString('dev_handoff.workflows.focus_view.comments')
    };
    i && (e.filterBy = 'non_dev_mode_focus');
    return e;
  }, [u, p, h, m, f, g, i]);
  return jsx(_$$a.Provider, {
    value: x,
    children: e
  });
}
let eG = {
  isFigJam: !0
};
function eK({
  children: e
}) {
  let t = Vi();
  let i = useMemo(() => [mW.RESOLVED, mW.YOURS], []);
  let a = useMemo(() => [qN.CREATION_DATE, qN.UNREAD], []);
  let s = getSidebarSplitPosition();
  let o = _$$R2({
    leftSidePanelWidth: s
  });
  let l = useMemo(() => 208, []);
  let d = useMemo(() => {
    let e = new Map();
    e.set(_$$b.DOCK_STYLE, 'dock--dock--A6jIs');
    e.set(_$$b.ATTACHMENT_MODAL_BACKGROUND_COLOR, getThemeBackgroundColor('light'));
    return e;
  }, []);
  let c = useMemo(() => {
    let e;
    let i = parsePxNumber(IuL);
    let r = parsePxNumber(rY4);
    let n = 0;
    let a = 0;
    e = 0 - i;
    n += i;
    t && (a += r);
    return {
      maxHeightDelta: e,
      minBottomMarginDelta: n,
      minLeftMarginDelta: 0,
      minRightMarginDelta: a
    };
  }, [t]);
  let u = useCallback(() => {
    setSideHandler('left', () => {});
  }, []);
  let p = useMemo(() => ({
    showNotificationSettings: !0,
    disableCommentsWhenHandToolEnabled: !0,
    repositionViewportOnCommentSelection: !0,
    orphanedBy: 'deleted_pages',
    filterBy: 'hidden_sections',
    sidebarFilters: i,
    sidebarSorts: a,
    dockPositionAdjustment: o,
    draggableModalBoundsAdjustment: c,
    onDockSideEffect: u,
    sidebarBottomPaddingAdjustment: l,
    styleOverrideMap: d,
    linkGenerationParams: eG
  }), [o, c, u, l, i, a, d]);
  return jsx(_$$a.Provider, {
    value: p,
    children: e
  });
}
function ez({
  children: e
}) {
  let t = useSelector(e => e.selectedView.editorType);
  let i = useMemo(() => {
    if (window.FigmaMobile) {
      return t === FEditorType.Whiteboard ? function ({
        children: e
      }) {
        return jsx(_$$a.Provider, {
          value: ep,
          children: e
        });
      } : function ({
        children: e
      }) {
        return jsx(_$$a.Provider, {
          value: eh,
          children: e
        });
      };
    }
    switch (t) {
      case FEditorType.Design:
        return eO;
      case FEditorType.Whiteboard:
        return eK;
      case FEditorType.Slides:
        return Yz;
      case FEditorType.DevHandoff:
        return eM;
      case FEditorType.Cooper:
        return ej;
      default:
        return function ({
          children: e
        }) {
          return jsx(_$$a.Provider, {
            value: _$$y3,
            children: e
          });
        };
    }
  }, [t]);
  return jsx(i, {
    children: e
  });
}
let e9 = 0;
class te {
  constructor() {
    this.work = () => {
      let e = this.jobs.shift();
      if (e) {
        try {
          let t = e.callback();
          e.resolve(t);
        } catch (t) {
          e.reject(t);
        }
      }
    };
    this.jobs = [];
  }
  isDone() {
    return this.numJobs() === 0;
  }
  numJobs() {
    return this.jobs.length;
  }
  cancelJobs(e) {
    this.jobs = this.jobs.filter(t => !e.includes(t.jobId));
  }
  queueJob(e) {
    let t;
    let i;
    let r = new Promise((e, r) => {
      t = e;
      i = r;
    });
    let n = ++e9;
    this.jobs.push({
      jobId: n,
      resolve: t,
      reject: i,
      callback: e
    });
    return {
      promise: r,
      jobId: n
    };
  }
}
let tt = {
  requestAnimationFrame: e => requestAnimationFrame(e),
  computeElapsedTime: e => {
    let t = Date.now();
    e();
    return Date.now() - t;
  }
};
let ti = new class {
  constructor(e = {}) {
    this.tick = () => {
      if (!this.isTickScheduled) throw new Error('wat, how did tick() get called if we\'re not ticking?');
      let e = 0;
      let t = 0;
      for (; t < this.msPerTick && !this.queuedWorker.isDone();) {
        t += this.utils.computeElapsedTime(this.queuedWorker.work);
        e++;
      }
      this.debug && console.log(`did ${e} jobs in ${t} ms`);
      this.isTickScheduled = !1;
      this.queuedWorker.isDone() || this.requestTick();
    };
    this.requestTick = () => {
      this.isTickScheduled || (this.isTickScheduled = !0, this.utils.requestAnimationFrame(this.tick));
    };
    this.numJobs = () => this.queuedWorker.numJobs();
    this.queueJob = e => {
      let {
        promise,
        jobId
      } = this.queuedWorker.queueJob(e);
      this.requestTick();
      return {
        promise,
        jobId
      };
    };
    this.queuedWorker = new te();
    this.isTickScheduled = !1;
    this.msPerTick = e.msPerTick || 6;
    this.utils = e.utils || tt;
    this.debug = !0 === e.debug;
  }
  cancelJobs(e) {
    this.queuedWorker.cancelJobs(e);
  }
}({
  debug: !1
});
let tv = 'export_picker--header--Wz6np';
let tE = 'export_picker--labelWithoutCheckbox--3zcNc export_picker--label--43URE';
let tw = parsePxInt(zK5);
function tS() {
  let e = selectCurrentFile();
  let t = useSelector(e => e.exportableItems);
  let i = useSelector(e => e.dropdownShown);
  let s = !!e && isExportRestricted(e);
  let o = getFileTypePx();
  let d = useSelector(e => e.saveAsState);
  let c = useSelector(e => e.mirror.appModel.currentPage);
  let u = useDispatch();
  let p = () => {
    u(hidePickerThunk());
  };
  let h = new Point(window.innerWidth - tw, o + 12);
  useEffect(() => {
    u(HR());
  }, [u]);
  let m = jsx('div', {
    className: 'export_picker--exportModalContainer---vmI7',
    children: jsx(tk, {
      exports: t,
      isCopyExportRestricted: s,
      width: tw,
      dispatch: u,
      dropdownShown: i,
      saveAsState: d,
      currentPage: c
    })
  });
  return getFeatureFlags().ce_tv_fpl_export_picker ? jsx(bL, {
    onClose: p,
    draggable: 'header',
    defaultPosition: h,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: getI18nString('fullscreen.properties_panel.export')
        })
      }), jsx(DialogBody, {
        padding: 0,
        children: m
      })]
    })
  }) : jsx(DraggableModalManager, {
    title: getI18nString('fullscreen.properties_panel.export'),
    headerSize: 'small',
    initialPosition: h,
    onClose: p,
    dragHeaderOnly: !0,
    headerClassName: 'export_picker--modalHeader--f3fKx',
    children: m
  });
}
let tj = new mz();
function tI({
  nodeID: e,
  title: t,
  filename: i,
  exportSetting: a,
  colorProfile: s = ColorSpaceEnum.SRGB,
  isBeingRenamed: l,
  ...d
}) {
  let [c, u] = useState({
    size: '',
    warning: '',
    warningTooltip: ''
  });
  let [p, h] = useState('');
  let m = A0(ActionType.EXPORT_PICKER);
  useEffect(() => {
    let r = {
      guid: e,
      title: t,
      filename: i,
      exportSetting: a
    };
    let n = Fullscreen.getExportWarningAndSize(r);
    if (n) {
      let {
        size,
        warning,
        warningTooltip
      } = n;
      u({
        size,
        warning,
        warningTooltip
      });
    } else {
      console.error('Failed to export', r);
    }
    let l = !!a.contentsOnly;
    let d = isInvalidValue(a) ? s : _$$A3([a], s);
    let {
      jobId
    } = ti.queueJob(() => {
      let t = generateExportThumbnail(new Point(32, 32), e, l);
      let i = '';
      t && t.pixels && t.pixelSize && t.displaySize && (i = convertImageDataToURL(t.pixels, t.pixelSize, d));
      h(i);
    });
    return () => ti.cancelJobs([jobId]);
  }, [s, a, i, e, t]);
  let {
    onToggleChecked,
    isChecked,
    isDisabled
  } = d;
  let {
    imageType
  } = a;
  let b = d.warning ?? c.warning;
  let C = d.warningTooltip ?? c.warningTooltip;
  let v = useId();
  let E = `${v}-input`;
  let T = `${v}-export-name`;
  let w = `${v}-desc`;
  let S = `${v}-title`;
  return jsxs('div', {
    className: 'export_picker--row--lVRtp',
    children: [jsx(HiddenLabel, {
      htmlFor: E,
      children: getI18nString('fullscreen.export.select_for_export')
    }), jsx(ManuallyLabeledCheckbox, {
      'id': E,
      'checked': isChecked,
      'onChange': onToggleChecked,
      'disabled': isDisabled,
      'aria-describedby': `${T} ${w}`
    }), jsx(ButtonPrimitive, {
      'className': 'export_picker--thumbContainer--xwXyl',
      'onClick': t => {
        t.preventDefault();
        Fullscreen?.panToNode(e, !1);
      },
      'htmlAttributes': {
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': i
      },
      'aria-label': getI18nString('fullscreen.export.view_selection_on_canvas'),
      'aria-describedby': S,
      'children': !!p && jsx('img', {
        src: p,
        className: 'export_picker--thumb--pKbcx',
        alt: ''
      })
    }), jsx('div', {
      id: T,
      className: 'export_picker--label--43URE',
      children: jsxs('div', {
        className: 'export_picker--nameInfo--03piR export_picker--twoRows--PAHTA',
        children: [jsx('div', {
          className: el()('export_picker--name--HuhHU ellipsis--ellipsis--Tjyfa', {
            'export_picker--nameRenaming--jTYjh': m && l
          }),
          id: S,
          children: t
        }), b && jsxs('div', {
          className: 'export_picker--warningRow--PMwtO',
          children: [jsx(SvgComponent, {
            'className': 'export_picker--warningIcon--fgSRz',
            'svg': _$$A4,
            'data-tooltip-type': KindEnum.TEXT,
            'data-tooltip': C
          }), jsx('span', {
            className: 'export_picker--warning--qpraF ellipsis--ellipsis--Tjyfa',
            children: b
          })]
        })]
      })
    }), jsxs('div', {
      className: 'export_picker--settingsInfo--H9DJ1 export_picker--twoRows--PAHTA',
      id: w,
      children: [jsxs('div', {
        children: [tj.format(a.constraint), ' ', imageType]
      }), jsx('div', {
        children: c.size
      })]
    })]
  });
}
class tk extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      renamingLayersRunning: !1,
      downloadStarted: !1,
      exportingStarted: !1,
      exportingProgress: 0,
      exportingTotal: 0,
      exportingJobIds: []
    };
    this.onCancel = () => {
      this.props.dispatch(hidePickerThunk());
    };
    this.autoRenameFrameAndFile = async e => {
      if (e.length === 0) return;
      this.setState({
        renamingLayersRunning: !0
      });
      this.props.exports.items.forEach(t => {
        e.includes(t.nodeID) && (t.isBeingRenamed = !0);
      });
      atomStoreManager.set(zF, getActionSourceString(ActionType.EXPORT_PICKER));
      B3(JT.AUTO_RENAME_LAYERS);
      await Ag(JT.AUTO_RENAME_LAYERS, renameLayers, {
        source: ActionType.EXPORT_PICKER,
        overwriteNames: !1,
        customNodeSelection: e,
        ignoreDescendants: !0
      });
      let t = pP(JT.AUTO_RENAME_LAYERS).state;
      t === qy.DONE ? this.props.exports.items.forEach(t => {
        if (!e.includes(t.nodeID)) return;
        let i = getSingletonSceneGraph().get(t.nodeID)?.name;
        t.filename = t.filename.replace(t.title, i || t.title);
        t.title = i || t.title;
        t.isBeingRenamed = !1;
      }) : (t === qy.ERROR || t === qy.CANCELLED) && this.props.exports.items.forEach(e => {
        e.isBeingRenamed = !1;
      });
      this.setState({
        renamingLayersRunning: !1
      });
    };
    this.cancelAutoRename = () => {
      let {
        aiTrackingContext
      } = pP(JT.AUTO_RENAME_LAYERS);
      let t = {
        ...aiTrackingContext,
        ...LU({
          shortcut: null,
          target: null
        }),
        interaction: AIActionProgressType.STOP
      };
      cT(JT.AUTO_RENAME_LAYERS);
      _$$nP(t);
    };
    this.onExport = e => {
      if (this.props.isCopyExportRestricted || (trackEventAnalytics('Export Picker Exported'), this.state.downloadStarted || this.state.exportingStarted || this.isExporting() || e.length === 0)) return;
      let t = [this.props.currentPage];
      ImageManager.includeOutsideContents(e.map(e => e.exportSetting)) || (t = e.map(e => e.nodeID));
      this.setState({
        downloadStarted: !0
      });
      Dc(hV.Export, this.props.saveAsState, this.props.dispatch, () => {
        this.setState({
          exportingStarted: !0,
          downloadStarted: !1
        });
        this.exportItemsWithFullscreen(e);
      }, t, 'export-picker');
    };
    this.exportItemsWithFullscreen = e => {
      let t = e.map(e => ({
        guid: e.nodeID,
        title: e.title,
        filename: e.filename,
        exportSetting: e.exportSetting
      }));
      let i = 0;
      Fullscreen.clearExportedItems();
      let r = t.map(e => ti.queueJob(() => Fullscreen.exportItem(e)));
      let n = r.map(e => e.promise);
      n.forEach(e => e.then(() => this.setState({
        exportingProgress: ++i
      })));
      this.setState({
        exportingProgress: 0,
        exportingTotal: t.length,
        exportingJobIds: r.map(e => e.jobId)
      });
      Promise.all(n).then(() => {
        this.setState({
          exportingJobIds: []
        });
        Fullscreen.saveExportedItems();
        this.props.dispatch(hidePickerThunk());
        this.props.dispatch(_$$rg());
        handleAtomEvent({
          id: 'export_completed',
          properties: {
            from: 'export_picker'
          }
        });
      });
    };
    this.setAllChecked = e => {
      this.props.exports.items.forEach((t, i) => {
        this.props.dispatch(exportPickerCheckAction({
          itemID: t.itemID,
          checked: e
        }));
      });
    };
    this.setChecked = (e, t) => {
      this.props.dispatch(exportPickerCheckAction({
        itemID: e.itemID,
        checked: t
      }));
    };
    this.isChecked = e => this.props.exports.checked[e.itemID];
    this.renderRenameLayersButton = e => {
      let {
        detectedUnnamedLayers,
        exceedingLayerLimit,
        renamableNodeGuids
      } = Mc(e.map(e => e.nodeID), !0);
      let a = this.state.renamingLayersRunning ? this.cancelAutoRename : () => this.autoRenameFrameAndFile(renamableNodeGuids);
      let s = !(detectedUnnamedLayers && !exceedingLayerLimit) || this.state.downloadStarted || this.state.exportingStarted;
      return jsx(ButtonLargeWide, {
        variant: 'secondary',
        onClick: a,
        disabled: s,
        children: this.state.renamingLayersRunning ? renderI18nText('fullscreen.export.cancel') : jsxs('div', {
          className: cssBuilderInstance.flex.flexRow.justifyCenter.gap8.$,
          children: [renderI18nText('fullscreen.context_menu.auto_rename_layers'), jsx(_$$y4, {
            helpUrlVariant: JT.AUTO_RENAME_LAYERS
          })]
        })
      });
    };
  }
  isExporting() {
    return this.state.exportingJobIds && this.state.exportingJobIds.length > 0;
  }
  componentWillUnmount() {
    this.isExporting() && ti.cancelJobs(this.state.exportingJobIds);
  }
  getItemsToExport() {
    return this.props.exports.items ? this.props.exports.items.filter(e => this.isChecked(e)) : [];
  }
  renderHeader() {
    if (this.isExporting()) {
      return jsxs('div', {
        className: tv,
        children: [jsx('label', {
          className: tE,
          children: renderI18nText('fullscreen.export.preparing_exporting_progress_of_exporting_total', {
            exportingProgress: this.state.exportingProgress,
            exportingTotal: this.state.exportingTotal
          })
        }), jsx(Button, {
          variant: 'secondary',
          onClick: this.onCancel,
          children: renderI18nText('fullscreen.export.cancel')
        })]
      });
    }
    if (this.state.exportingStarted || !this.props.saveAsState.startTime && this.state.downloadStarted) {
      return jsx('div', {
        className: tv,
        children: jsx('label', {
          className: tE,
          children: renderI18nText('fullscreen.export.exporting')
        })
      });
    }
    if (this.state.downloadStarted) {
      if (!(this.props.saveAsState.totalImagesToDownload > 0)) {
        return jsx('div', {
          className: tv,
          children: jsx('label', {
            className: tE,
            children: renderI18nText('fullscreen.export.downloading')
          })
        });
      }
      {
        let e = Math.min(this.props.saveAsState.totalImagesToDownload, this.props.saveAsState.totalImagesToDownload - this.props.saveAsState.remainingImagesToDownload);
        return jsxs('div', {
          className: tv,
          children: [jsx('label', {
            className: tE,
            children: renderI18nText('fullscreen.export.downloading_progress', {
              downloadingProgress: e,
              downloadingTotal: this.props.saveAsState.totalImagesToDownload
            })
          }), jsx(Button, {
            variant: 'secondary',
            onClick: this.onCancel,
            children: renderI18nText('fullscreen.export.cancel')
          })]
        });
      }
    }
    {
      let e = this.props.exports.items || [];
      let t = e.filter(this.isChecked).length;
      let i = e.length;
      let n = i === t;
      return jsxs('div', {
        className: tv,
        children: [jsx(Checkbox, {
          checked: n,
          mixed: !n && t > 0,
          onChange: () => this.setAllChecked(!n),
          label: jsx(Label, {
            children: renderI18nText('fullscreen.export.num_selected_of_total_selected', {
              numSelected: t,
              total: i
            })
          })
        }), jsx('span', {
          className: 'export_picker--flexRight--PFS7g',
          children: jsx(Button, {
            variant: 'secondary',
            disabled: !t,
            onClick: () => this.onExport(this.getItemsToExport()),
            autoFocus: !0,
            children: renderI18nText('fullscreen.export.export')
          })
        })]
      });
    }
  }
  render() {
    let e = this.props.exports.items && this.props.exports.items.length > 0;
    let t = A0(ActionType.EXPORT_PICKER);
    return jsx('div', {
      children: jsxs('div', {
        className: 'export_picker--modal--FoIpV',
        children: [this.renderHeader(), jsxs(RecordingScrollContainer, {
          width: this.props.width,
          className: 'export_picker--scrollContainer--F9sI6',
          children: [!e && jsx('div', {
            className: 'export_picker--emptyModal--x2aqt',
            children: renderI18nText('fullscreen.export.no_selected_layers_with_export')
          }), jsx(ZH, {
            children: ({
              documentExportColorProfile: i
            }) => e && this.props.exports.items.map((e, n) => jsx(tI, {
              colorProfile: i,
              isDisabled: this.isExporting(),
              isChecked: this.isChecked(e),
              onToggleChecked: () => this.setChecked(e, !this.isChecked(e)),
              isBeingRenamed: t && e.isBeingRenamed,
              ...e
            }, n))
          })]
        }), t && jsx('div', {
          className: 'export_picker--footer--a3gs1',
          children: this.renderRenameLayersButton(this.getItemsToExport())
        })]
      })
    });
  }
}
tk.displayName = 'ExportPicker';
let tU = parsePxNumber(ZAq);
function tG({
  subscribeToUpdates__EXPENSIVE: e
}) {
  let t = getViewportInfo({
    subscribeToUpdates_expensive: e
  });
  let i = isWhiteboardFileType();
  let r = Ye();
  let a = getFileTypeLargePx();
  let s = _o();
  let {
    left,
    right
  } = _$$LO();
  return useCallback((e, n, d) => {
    let c = {
      top: s,
      left: r || i ? 0 : left,
      right: t.x + t.width - (Math.max(i ? 0 : right, d + 12) + 8),
      bottom: t.height - (a + tU + 16)
    };
    let u = 12;
    e < c.left ? u = c.left + 12 : e > c.right && (u = -(d + 4));
    let p = 12;
    n > c.bottom && (p = Math.min(c.bottom + 12 - (n + 8), -(a + 24)));
    return {
      x: u,
      y: p
    };
  }, [i, t, r, a, s, left, right]);
}
let tV = {
  type: 'SOLID',
  opacity: 1,
  visible: !0,
  blendMode: 'NORMAL'
};
function tW({
  initialPosition: e,
  initialCreationColor: t,
  initialView: i,
  disableStyleModal: s,
  onClose: l
}) {
  let {
    VariableAndStyleCreateModalRoot
  } = useContext(_$$l2) ?? {};
  let c = useSelector(e => e.pickerShown);
  let u = useDispatch();
  function p() {
    (isSelectionPaintItem(c?.id ?? null) || isSelectionStyleItem(c?.id ?? null)) && u(hidePickerThunk());
  }
  let h = useMemo(() => ({
    type: VariableDataType.COLOR,
    resolvedType: VariableResolvedDataType.COLOR,
    value: t
  }), [t]);
  return e && VariableAndStyleCreateModalRoot ? jsx(VariableAndStyleCreateModalRoot, {
    disableStyleModal: s,
    inheritStyleKeyField: 'inheritFillStyleKey',
    initialPosition: e,
    initialStyleCreationPaint: tV,
    initialVariableValue: h,
    initialView: i,
    onClose: l,
    onCreateStyle(e) {
      _$$l.system('create-new-style-from-eyedropper', () => {
        EyedropperBindings.applyPaint(rgbToNormalized(t), null, e.node_id);
        p();
      });
    },
    onCreateVariable(e) {
      let i = Object.values(e.modeValues) ? Object.values(e.modeValues)[0] : null;
      let r = rgbToNormalized(i?.type === VariableDataType.COLOR ? i.value : t);
      EyedropperBindings?.applyPaint(r, e.node_id, null);
      p();
    },
    resolvedType: VariableResolvedDataType.COLOR,
    shouldUseEyedropperStyleCreationFlow: !0
  }) : null;
}
let t5 = atom(!1);
class ir extends Component {
  static getDerivedStateFromError(e) {
    return {};
  }
  componentDidCatch(e, t) {
    if (isErrorCausedByWindowClose(e)) {
      logWarning('FloatingWindowErrorBoundary', 'Ignoring IPC error', {
        error: e,
        errorInfo: t
      }, {
        reportAsSentryError: !1
      });
    } else {
      throw e;
    }
  }
  render() {
    return this.props.children;
  }
}
function ia({
  children: e,
  initialWidth: t,
  initialHeight: i,
  initialMinHeight: r,
  initialExtraFeatures: a,
  onChangePosition: s,
  hidden: o
}) {
  if (!desktopAPIInstance || !desktopAPIInstance.isFloatingWindowAvailable()) throw new Error('DesktopFloatingWindow: rendered with unsupported desktop app version');
  let [l, d] = useState(null);
  let c = useRef(l);
  let u = useRef(t);
  let p = useRef(i);
  let h = useRef(r);
  let m = useRef(a);
  let f = useRef(s);
  let g = useRef(null);
  let _ = useCallback(e => {
    g.current != null && g.current.displayId !== e.displayId && requestAnimationFrame(() => {
      c.current != null && withFloatingWindowAPI(c.current, e => {
        e.readyToDisplay();
      });
    });
    g.current = e;
    f.current?.(e);
  }, []);
  let x = useCallback(() => {
    let e = `width=${u.current},height=${p.current},floatingWindow=true`;
    h.current != null && (e += `,minHeight=${h.current}`);
    m.current != null && (e += `,${m.current}`);
    let t = window.open('about:blank', '_blank', e);
    if (t == null) {
      logError('DesktopFloatingWindow', 'Unable to open floating window');
      return null;
    }
    t.document.body.style.overflow = 'hidden';
    (function (e) {
      let t = 0;
      let i = () => {
        (t -= 1) <= 0 && e.requestAnimationFrame(() => {
          withFloatingWindowAPI(e, e => {
            e.readyToDisplay();
          });
        });
      };
      for (let t of (e.document.body.classList.add(xE), document.body.attributes)) t.name.startsWith('data-') && e.document.body.setAttribute(t.name, t.value);
      for (let r of (e.document.body.style.colorScheme = document.body.style.colorScheme, document.querySelectorAll('link[rel=stylesheet], style'))) {
        let n = r.cloneNode(!0);
        n.tagName === 'LINK' && (t += 1, n.addEventListener('load', i), n.addEventListener('error', i));
        e.document.head.appendChild(n);
      }
      t === 0 && i();
    })(t);
    withFloatingWindowAPI(t, e => {
      e.onChangePosition(_);
    });
    d(t);
    c.current = t;
    t.addEventListener('close', () => {
      d(null);
      c.current = null;
    });
  }, [_]);
  let y = !!e;
  return (useEffect(() => {
    y ? x() : d(null);
  }, [y, x]), useEffect(() => {
    if (l != null) {
      return () => {
        suppressingErrorsCausedByWindowClose(() => {
          l.close();
        });
      };
    }
  }, [l]), useEffect(() => {
    l != null && withFloatingWindowAPI(l, e => {
      o ? e.hideWindow() : e.showWindow();
    });
  }, [l, o]), l != null) ? createPortal(e, l.document.body) : null;
}
function is(e) {
  return jsx(ir, {
    children: jsx(ia, {
      ...e
    })
  });
}
function io({
  children: e,
  loupeWidth: t,
  loupeHeight: i,
  panelWidth: a,
  panelHeight: s,
  hidden: d,
  onClick: c
}) {
  let u = !!getFeatureFlags().desktop_floating_eyedropper_fake_cursor;
  let p = (s + 12 + 16) * 2;
  let h = (a + 12 + 16) * 2;
  let [m, f] = useState(!1);
  let [g, _] = useState(!1);
  let [x, y] = useState(!0);
  let [b, C] = useState(!1);
  let v = m ? 16 : 16 + a + 24;
  let E = g === x ? 16 : 16 + s + 24;
  x || (E = -E);
  let T = useRef(null);
  let w = useRef(null);
  let S = useCallback(e => {
    flushSync(() => {
      C(!0);
      e();
    });
    T.current?.getBoundingClientRect();
    flushSync(() => {
      C(!1);
    });
  }, []);
  let j = useCallback(e => {
    let t = w.current;
    w.current = e;
    let i = t?.yZone === FloatingWindowVerticalZone.NN || t?.yZone === FloatingWindowVerticalZone.N;
    let r = e.yZone === FloatingWindowVerticalZone.NN || e.yZone === FloatingWindowVerticalZone.N;
    let n = () => {
      y(!r);
      f(e.xZone === FloatingWindowHorizontalZone.EE);
      _(e.yZone === FloatingWindowVerticalZone.SS);
    };
    t != null && (i !== r || t.displayId !== e.displayId) ? S(n) : n();
  }, [S]);
  useCursorVisibility(u && !d);
  return jsxs(is, {
    initialWidth: h,
    initialHeight: p,
    initialMinHeight: s + 16,
    initialExtraFeatures: getFeatureFlags().desktop_global_eyedropper ? `eyedropper=1,eyedropperWidth=${t},eyedropperHeight=${i}` : void 0,
    onChangePosition: j,
    hidden: d,
    children: [jsx('div', {
      onClick: c,
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }
    }), u && jsx('div', {
      style: {
        position: 'absolute',
        left: h / 2,
        bottom: p / 2,
        transform: 'translate(-50%, 50%)',
        pointerEvents: 'none'
      },
      children: jsx(CursorIcon, {
        currentToolForCursor: DesignGraphElements.DROPPER_COLOR
      })
    }), jsx('div', {
      ref: T,
      style: {
        position: 'absolute',
        height: s,
        width: a,
        left: 0,
        [x ? 'top' : 'bottom']: 0,
        transform: `translate(${v}px, ${E}px)`,
        transition: b ? void 0 : 'transform 0.2s ease-in-out'
      },
      children: e
    })]
  });
}
let ic = document.createElement('canvas');
let iu = ic.getContext('2d');
let ip = (e, t, i, r, n, a) => {
  e.save();
  {
    let s = t / 2;
    a ? e.roundRect ? e.roundRect(0, 0, 48, 48, 5) : e.rect(0, 0, 48, 48) : e.arc(s, s, s - 2, 0, 2 * Math.PI, !1);
    e.clip();
    let {
      width,
      height,
      rgba,
      grid
    } = n;
    if (iu && width && height) {
      let i = iu.createImageData(width, height, {
        colorSpace: n.colorProfile === ColorSpaceEnum.DISPLAY_P3 ? 'display-p3' : 'srgb'
      });
      i.data.set(rgba);
      ic.width = width;
      ic.height = height;
      iu.putImageData(i, 0, 0);
      e.imageSmoothingEnabled = !1;
      e.drawImage(ic, 0, 0, t, t);
    }
    if (grid) {
      e.beginPath();
      let n = a ? 1 : 0;
      let s = a ? -0.5 : 0.5;
      for (let a = 1; a < r; a++) {
        s += i;
        e.moveTo(s, n);
        e.lineTo(s, t - n);
        e.moveTo(n, s);
        e.lineTo(t - n, s);
      }
      e.strokeStyle = a ? 'rgba(0, 0, 0, 0.1)' : 'rgba(51, 51, 51, 0.2)';
      e.stroke();
    }
  }
  e.restore();
};
let ih = (e, t, i, r) => {
  r || (e.strokeStyle = 'white', e.strokeRect(t - i / 2 - 0.5, t - i / 2 - 0.5, i + 2, i + 2), e.strokeStyle = 'black', e.strokeRect(t - i / 2 + 0.5, t - i / 2 + 0.5, i, i));
};
let im = (e, t, i) => {
  if (i) {
    e.beginPath();
    e.roundRect ? e.roundRect(0, 0, 348, 548, 5) : e.rect(0, 0, 348, 548);
    e.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    e.stroke();
    return;
  }
  e.beginPath();
  e.arc(t, t, t - 1, 0, 2 * Math.PI, !1);
  e.strokeStyle = 'white';
  e.stroke();
  e.beginPath();
  e.arc(t, t, t - 2, 0, 2 * Math.PI, !1);
  e.strokeStyle = 'black';
  e.stroke();
};
function ig(e, t, i) {
  let r = i ? 7 : 17;
  let n = i ? 7 : 10;
  let a = i ? 48 : r * n;
  let s = e.getContext('2d');
  if (!s) return;
  let o = devicePixelRatio;
  e.width = a * o;
  e.height = a * o;
  s.scale(o, o);
  ip(s, a, n, r, t, i);
  ih(s, a / 2, n, i);
  im(s, a / 2, i);
}
let i_ = 'eyedropper_v2--text--dOiTx';
let ix = 'eyedropper_v2--rowContents--dv3nr';
let iy = 'eyedropper_v2--chit--1D1ND';
function ib({
  eyedropper: e,
  onOpenCreationModal: t
}) {
  let i;
  let s;
  let c = function () {
    let e = useSelector(e => e.eyedropper);
    let t = useSelector(e => e.library.local.styles);
    let i = useAtomWithSubscription(localVariablesAtom);
    let r = useSelector(e => e.library.used__LIVEGRAPH.styles);
    if (!e) return null;
    let n = e.assetId;
    let s = {};
    let l = e.variableSetModeId;
    if (n === '') return null;
    let c = null;
    let u = null;
    if (StyleIdHandler.isValid(n)) {
      if (c = StyleIdHandler.toGuidStrIfLocal(n)) {
        if (c in t) {
          let e = {
            style: t[c]
          };
          s[c] = e;
          return e;
        }
      } else if (u = StyleIdHandler.toRefIfSubscribed(n)) {
        c = StyleIdHandler.fromRef(u);
        let e = findStyleDataByKey(u.key, r, {});
        let t = null;
        e && (t = {
          style: e
        }, s[c] = t);
        return t;
      }
    } else if (VariableIdHandler.isValid(n)) {
      if ((c = VariableIdHandler.toString(n)) in i) {
        let e = {
          variable: i[c],
          variableModeId: l
        };
        s[c] = e;
        return e;
      }
      let e = VariablesBindings.getSubscribedVariableInfo(c);
      if (e) {
        let t = {
          variable: getSubscribedVariableInfo(e),
          variableModeId: l
        };
        s[c] = t;
        return t;
      }
    }
    return c && c in s ? s[c] : null;
  }();
  let u = useDispatch();
  let p = function () {
    let e = AppStateTsApi?.uiState().backgroundPickerOpen.getCopy();
    let t = useSelector(e => e.mirror.appModel.prototypeBackgroundPickerOpen);
    let i = useSelector(e => e.variablePickerShown.isShown);
    let r = useSelector(e => e.mirror.appModel.currentSelectedProperty);
    let n = useSelector(e => e.mirror.selectionProperties.numSelected);
    return e || t || i || r.type !== NodePropertyCategory.NONE || n !== 0;
  }();
  let h = getSelectedEditorType();
  let m = Ep();
  let g = useAtomWithSubscription(wg);
  let y = useAtomWithSubscription(t5);
  let b = function () {
    let e = useAtomWithSubscription(_$$U);
    let [t, i] = useState(!0);
    useEffect(() => {
      let e = () => {
        i(!0);
      };
      let t = () => {
        i(!1);
      };
      document.addEventListener('mouseenter', e);
      document.addEventListener('mouseleave', t);
      return () => {
        document.removeEventListener('mouseenter', e);
        document.removeEventListener('mouseleave', t);
      };
    }, []);
    return t ? null : e;
  }();
  let [C, v] = useLocalStorageSync('has_toggled_eyedropper_creation_mode', !1);
  let [E, T] = useState(!1);
  let [w, S] = useState(!1);
  let j = useRef(null);
  let I = useRef(null);
  useLayoutEffect(() => {
    if (I.current) {
      if (b != null) {
        let {
          width,
          height,
          rgba
        } = b;
        let {
          grid
        } = e;
        ig(I.current, {
          width,
          height,
          rgba,
          grid,
          colorProfile: m
        }, !0);
      } else {
        let {
          width,
          height,
          rgba,
          grid
        } = e;
        ig(I.current, {
          width,
          height,
          rgba,
          grid,
          colorProfile: m
        }, !0);
      }
    }
  });
  let k = v4();
  let N = Ig();
  let A = getColorFormat();
  let O = function () {
    let e = getColorFormat();
    return useCallback(() => {
      let t = Object.keys(ColorFormatEnum).length / 2;
      let i = (e + 1) % (t - 1);
      let r = [ColorFormatEnum.CSS, ColorFormatEnum.UIColor];
      for (; r.includes(i);) i = (i + 1) % (t - 1);
      EditorPreferencesApi().colorFormat.set(i);
    }, [e]);
  }();
  let L = tG({
    subscribeToUpdates__EXPENSIVE: y
  });
  let R = parseColor(b?.color ?? e.color) ?? whiteColor;
  let D = parseColor(e.resolvedVariableColor) ?? whiteColor;
  let M = h === FEditorType.Whiteboard;
  let P = h === FEditorType.DevHandoff;
  let F = c?.style ? c.style : void 0;
  let B = c?.variable ? c.variable : void 0;
  let U = !M && !P;
  let G = U && e.dropperData.creationFlow !== IVariableStyles.NONE && !F && !B;
  let K = !g || P || !p && !G;
  let H = N(R, {
    eyedropperFormat: !0
  }) || '';
  let z = '';
  let V = [];
  F ? (z = F.name, i = jsxs('div', {
    children: [jsx('div', {
      className: 'eyedropper_v2--styleCircle--rLPqT'
    }), jsx(zi, {
      dsStyle: F,
      disableOutline: !0,
      disableTooltip: !0
    })]
  }), s = 'eyedropper-v2-style', V = [{
    key: 'modifier-1',
    label: 'shift'
  }]) : B ? (z = P ? xv(B, k.id) ?? B.name : B.name, i = jsx(_$$J3, {
    className: iy,
    color: D,
    hideBorderShadow: !0
  }), s = 'eyedropper-v2-variable', V = [{
    key: 'modifier-1',
    label: 'shift'
  }]) : U && C ? (e.dropperData.creationFlow === IVariableStyles.STYLES ? (z = getI18nString('eyedropper.create_style'), i = jsx(_$$J2, {}), s = 'eyedropper-v2-style-creation') : e.dropperData.creationFlow === IVariableStyles.VARIABLES && (z = getI18nString('eyedropper.create_variable'), i = jsx(_$$J2, {}), s = 'eyedropper-v2-variable-creation'), V = [{
    key: 'modifier-1',
    label: 'shift'
  }, {
    key: 'modifier-2',
    label: BrowserInfo.mac ? '\u2318' : 'ctrl',
    isMetaKey: BrowserInfo.mac
  }]) : (z = K ? getI18nString('eyedropper.click_to_copy') : getI18nString('eyedropper.click_to_sample'), i = jsx(_$$V, {}));
  let W = useCallback(() => {
    if (!j.current) return null;
    t(R, e);
  }, [t, R, e]);
  let Y = useCallback(() => {
    if (!j.current || !K && p) return !1;
    let t = '';
    let i = '';
    E && (F ? t = 'style name' : B && (t = 'variable name'), i = z);
    t === '' && (t = A === ColorFormatEnum.HEX ? 'hex' : _$$F2.format(A), i = H);
    copyTextToClipboard(i);
    u(VisualBellActions.enqueue({
      message: getI18nString('visual_bell.copied_color_to_clipboard_figma_design', {
        colorType: t
      }),
      count: i,
      icon: VisualBellIcon.EYEDROPPER
    }));
    !function (e, t, i, r, n) {
      let a;
      let s;
      let o = debugState.getState();
      a = 'raw';
      s = i;
      r && t === 'style name' ? (a = 'style', s = r.node_id) : n && t === 'variable name' && (a = 'variable', s = n.node_id);
      let [l, d] = [a, s];
      trackFileEvent('eyedropper_copy', o.openFile?.key, o, {
        tracking_session_dropper_id: e,
        selection_type: l,
        copied_value: d,
        contains_style: !!r,
        contains_variable: !!n
      });
    }(e.dropperData.dropperId, t, i, F, B);
    return !0;
  }, [A, u, e.dropperData, H, p, z, E, F, B, K]);
  let J = useCallback((e, t) => {
    if (EyedropperBindings?.toggleOffEyedropper(), G && E) {
      W();
      return;
    }
    Y() || _$$l.system(e, () => {
      EyedropperBindings?.applyPaint(rgbToNormalized(R), t ? B?.node_id ?? null : null, t ? F?.node_id ?? null : null);
    });
  }, [Y, G, R, W, E, F?.node_id, B?.node_id]);
  let X = useCallback(() => {
    J('apply-global-eyedropper-with-click', !1);
  }, [J]);
  let Z = useHandleInputEvent('stylesAndVariablesEyedropper', 'keydown', useCallback(e => {
    let {
      event
    } = e;
    let i = BrowserInfo.mac ? event.metaKey : event.ctrlKey;
    event.key === 'Tab' && (O(), e.accept());
    event.shiftKey && (F || B || !i || v(!0), (G && i || F || B) && (T(!0), e.accept()));
    event.key === 'Enter' && j.current && (J('apply-eyedropper-with-keyboard', E), e.accept());
  }, [J, G, O, E, v, F, B]));
  let Q = useCallback(e => {
    let t = BrowserInfo.mac ? e.metaKey : e.ctrlKey;
    (e.shiftKey || e.key !== 'Shift') && (!G || t || e.key !== 'Meta') || T(!1);
  }, [G]);
  let $ = useCallback(() => {
    Y();
  }, [Y]);
  let ee = useCallback(e => {
    G && E && W();
  }, [G, E, W]);
  let et = useCallback(() => {
    S(!0);
  }, []);
  useEffect(() => (window.addEventListener('keyup', Q), window.addEventListener('pointerup', $), window.addEventListener('mousedown', ee), window.addEventListener('mousemove', et, {
    once: !0
  }), () => {
    window.removeEventListener('keyup', Q);
    window.removeEventListener('pointerup', $);
    window.removeEventListener('mousedown', ee);
    window.removeEventListener('mousemove', et);
  }));
  let ei = getFeatureFlags().desktop_floating_eyedropper && desktopAPIInstance?.isFloatingWindowAvailable();
  let er = parsePxNumber(M ? tXK : k22);
  let en = (() => {
    let t;
    if (!y && !b) return null;
    if (!ei) {
      let i = L(e.cursorPosition.x, e.cursorPosition.y, er);
      t = {
        transform: `translate(${i.x}px, ${i.y}px)`
      };
    }
    return jsxs('div', {
      'className': el()('eyedropper_v2--eyedropperv2----W5m', w && 'eyedropper_v2--eyedropperv2Animation--AQ3Od'),
      'style': t,
      'ref': j,
      'data-testid': 'eyedropper',
      'children': [jsx('div', {
        className: 'eyedropper_v2--loupeSamplingSquare--mt9xT'
      }), jsx('canvas', {
        ref: I
      }), !M && jsxs('div', {
        children: [jsx(iC, {
          icon: jsx(_$$J3, {
            className: iy,
            color: R,
            hideBorderShadow: !0
          }),
          text: H,
          keyBadges: [],
          isSelected: !E
        }), jsx(iC, {
          icon: i,
          text: z,
          keyBadges: V,
          isSelected: E,
          dataTestId: s
        })]
      })]
    });
  })();
  return jsxs(Fragment, {
    children: [en != null && jsx(KeyboardReceiver, {
      focusOnMount: !0,
      name: 'stylesAndVariablesEyedropper',
      handleKeyDown: Z
    }), ei ? jsx(io, {
      loupeHeight: e.height,
      loupeWidth: e.width,
      panelHeight: parsePxNumber(ZAq),
      panelWidth: er,
      hidden: en == null,
      onClick: X,
      children: en
    }) : en != null && jsx(CursorContainer, {
      position: e.cursorPosition,
      currentToolForCursor: DesignGraphElements.DROPPER_COLOR,
      children: en
    })]
  });
}
function iC({
  icon: e,
  text: t,
  keyBadges: i,
  isSelected: n,
  dataTestId: a
}) {
  return jsxs('div', {
    'className': el()('eyedropper_v2--menuRow--IGEss', n && 'eyedropper_v2--selectedRow--GlyoK', Dm),
    'data-testid': a,
    'children': [jsxs('div', {
      className: ix,
      children: [jsx('div', {
        className: 'eyedropper_v2--iconContainer--TVZ5N',
        children: e
      }), jsx('div', {
        className: el()('eyedropper_v2--menuOption--WK4oh', i_),
        children: t
      })]
    }), jsx('div', {
      className: ix,
      children: i && i.map(e => jsx('div', {
        children: jsx('div', {
          className: el()(i_, e.isMetaKey ? 'eyedropper_v2--keyMetaBadge--S1g3y eyedropper_v2--keyBadge--9GITk' : 'eyedropper_v2--keyTextBadge--ERRPy eyedropper_v2--keyBadge--9GITk'),
          children: jsx(KeyboardShortcut, {
            shortcut: e.label
          })
        })
      }, e.key))
    })]
  });
}
function iv() {
  let e = useSelector(e => e.eyedropper);
  let t = useRef();
  let i = tG({
    subscribeToUpdates__EXPENSIVE: !!e
  });
  let [s, l] = useState(!1);
  let [d, c] = useState(null);
  let [u, p] = useState('createVariable');
  let [h, m] = useState(!1);
  let f = useCallback((e, r) => {
    l(!0);
    c(e);
    p(r.dropperData.creationFlow === IVariableStyles.STYLES ? 'createStyle' : 'createVariable');
    m(r.dropperData.canAcceptStyles);
    let n = i(r.cursorPosition.x, r.cursorPosition.y, _$$i2);
    let a = new Point(n.x + r.cursorPosition.x, n.y + r.cursorPosition.y);
    t.current = a;
    EyedropperBindings?.toggleOffEyedropper();
  }, [i]);
  let g = useCallback(() => {
    l(!1);
  }, []);
  let _ = s && d;
  return jsxs(Fragment, {
    children: [e && jsx(ib, {
      eyedropper: e,
      onOpenCreationModal: f
    }), _ && jsx(tW, {
      initialPosition: t.current,
      initialCreationColor: d,
      initialView: u,
      disableStyleModal: !h,
      onClose: g
    })]
  });
}
function iw({
  clientX: e,
  clientY: t,
  selectedView: i,
  deleteCollection: n,
  collectionId: s
}) {
  let o = useDispatch();
  let d = ZX();
  let {
    appModel,
    sceneGraph,
    sceneGraphSelection
  } = selectWithShallowEqual(e => ({
    appModel: e.mirror.appModel,
    sceneGraph: e.mirror.sceneGraph,
    sceneGraphSelection: e.mirror.sceneGraphSelection
  }));
  let m = [];
  m.push({
    name: 'dakota-delete-collection',
    callback: () => {
      n();
    }
  });
  getFeatureFlags().dakota_import_export && m.push({
    name: 'dakota-export-collection-internal',
    callback: async () => {
      let e = await d(s);
      e || o(VisualBellActions.enqueue({
        message: 'Could not export collection to clipboard'
      }));
      navigator.clipboard.writeText(e ?? '');
      o(VisualBellActions.enqueue({
        message: 'Collection exported to clipboard'
      }));
    }
  });
  return jsx('div', {
    className: Dm,
    children: jsx(_$$Q, {
      appModel,
      dispatch: o,
      menuItems: m,
      recordingKey: 'dakotaCollectionContextMenu',
      removeDisabledItems: !0,
      sceneGraph,
      sceneGraphSelection,
      selectedView: i,
      showPoint: !1,
      targetRect: {
        width: 10,
        height: 10,
        left: e + 100,
        top: t,
        right: e + 110,
        bottom: t - 10
      }
    })
  });
}
function iS({
  clientX: e,
  clientY: t,
  selectedView: i,
  deleteField: n,
  duplicateField: s
}) {
  let o = useDispatch();
  let {
    appModel,
    sceneGraph,
    sceneGraphSelection
  } = selectWithShallowEqual(e => ({
    appModel: e.mirror.appModel,
    sceneGraph: e.mirror.sceneGraph,
    sceneGraphSelection: e.mirror.sceneGraphSelection
  }));
  let p = [];
  p.push({
    name: 'dakota-duplicate-field',
    callback: s
  }, {
    separator: !0
  }, {
    name: 'dakota-delete-field',
    callback: n
  });
  return jsx('div', {
    className: Dm,
    children: jsx(_$$Q, {
      appModel,
      dispatch: o,
      menuItems: p,
      recordingKey: 'dakotaFieldContextMenu',
      removeDisabledItems: !0,
      sceneGraph,
      sceneGraphSelection,
      selectedView: i,
      showPoint: !1,
      targetRect: {
        width: 10,
        height: 10,
        left: e + 100,
        top: t,
        right: e + 110,
        bottom: t - 10
      }
    })
  });
}
function ij({
  clientX: e,
  clientY: t,
  selectedView: i,
  deleteItemOrItems: n
}) {
  let s = useDispatch();
  let {
    appModel,
    sceneGraph,
    sceneGraphSelection
  } = selectWithShallowEqual(e => ({
    appModel: e.mirror.appModel,
    sceneGraph: e.mirror.sceneGraph,
    sceneGraphSelection: e.mirror.sceneGraphSelection
  }));
  let u = [];
  u.push({
    name: 'dakota-delete-item',
    callback: () => {
      n();
    }
  });
  return jsx('div', {
    className: Dm,
    children: jsx(_$$Q, {
      appModel,
      dispatch: s,
      menuItems: u,
      recordingKey: 'dakotaItemContextMenu',
      removeDisabledItems: !0,
      sceneGraph,
      sceneGraphSelection,
      selectedView: i,
      showPoint: !1,
      targetRect: {
        width: 10,
        height: 10,
        left: e + 100,
        top: t,
        right: e + 110,
        bottom: t - 10
      }
    })
  });
}
function iA(e) {
  return {
    attachmentId: e.id,
    attachmentUploadedAt: e.uploadedAt.toString(),
    imageUrlPrefix: function (e) {
      if (e.search('blob') !== -1) return 'blob';
      let t = e.search('/images/');
      if (t !== -1) return e.substring(0, t);
    }(e.imageUrl)
  };
}
function iO(e) {
  let t = useDispatch();
  let i = useSelector(e => e.mirror.appModel);
  let n = e.clientX;
  let s = e.clientY;
  let o = async t => {
    let i = await fetch(e.attachment.imageUrl, {
      mode: 'cors'
    });
    let r = await i.blob();
    if (!t) return r;
    if (r.type === 'image/jpeg' || r.type === 'image/gif') {
      let e = await createImageBitmap(r);
      let t = document.createElement('canvas');
      t.width = e.width;
      t.height = e.height;
      let i = t.getContext('2d');
      i?.drawImage(e, 0, 0);
      return new Promise(e => {
        t.toBlob(t => {
          e(t);
        }, 'image/png');
      });
    }
    return r;
  };
  let l = [{
    name: 'download-attachment',
    callback: async () => {
      try {
        await o(!1).then(i => {
          let r = URL.createObjectURL(i);
          let n = document.createElement('a');
          n.href = r;
          n.download = getI18nString('comments.attachment_default_name', {
            fileExtension: i.type.split('/')[1]
          });
          n.click();
          URL.revokeObjectURL(r);
          trackEventAnalytics('Comment Attachment Download Success', iA(e.attachment));
          t(VisualBellActions.enqueue({
            message: getI18nString('comments.download_attachment_success'),
            type: 'attachment-download'
          }));
        });
      } catch (i) {
        trackEventAnalytics('Comment Attachment Download Failure', iA(e.attachment));
        reportError(ServiceCategories.FEEDBACK, i);
        t(VisualBellActions.enqueue({
          message: getI18nString('comments.download_attachment_error'),
          type: 'attachment-download',
          error: !0
        }));
      }
    }
  }, {
    name: 'copy-attachment',
    callback: async () => {
      t(VisualBellActions.enqueue({
        message: getI18nString('comments.copying_attachment'),
        type: 'copy-attachment',
        icon: VisualBellIcon.SPINNER
      }));
      try {
        await o(!0).then(async i => {
          let r = new ClipboardItem({
            [i.type]: i
          });
          await navigator.clipboard.write([r]).then(() => {
            trackEventAnalytics('Comment Attachment Copy Success', iA(e.attachment));
            t(VisualBellActions.enqueue({
              message: getI18nString('comments.copy_attachment_success'),
              type: 'copy-attachment'
            }));
          });
        });
      } catch (i) {
        trackEventAnalytics('Comment Attachment Copy Failure', iA(e.attachment));
        reportError(ServiceCategories.FEEDBACK, i);
        t(VisualBellActions.enqueue({
          message: getI18nString('comments.copy_attachment_error'),
          type: 'copy-attachment',
          error: !0
        }));
      }
    }
  }];
  return jsx(_$$Q, {
    appModel: i,
    menuItems: l,
    targetRect: {
      width: 10,
      height: 10,
      left: n + 100,
      top: s,
      right: n + 110,
      bottom: s - 10
    },
    showPoint: !1,
    selectedView: e.selectedView,
    recordingKey: 'comment-context-menu',
    dispatch: t
  });
}
function iG({
  children: e,
  entryPoint: t
}) {
  let i = useCurrentFileKey();
  let a = selectCurrentUser();
  let s = getCurrentTeam();
  let o = _$$O();
  let l = trackFileEventWithStore();
  let d = _$$U3('upsell');
  let c = useCallback(() => {
    l('Dev Mode Paywall clicked', {
      type: 'Design Mode Upsell',
      entryPoint: t
    }, {
      forwardToDatadog: !0
    });
    d('handoff');
  }, [t, d, l]);
  return jsx(TrackingProvider, {
    name: 'Dev Mode Upsell In Design Mode',
    properties: {
      currentPlan: o,
      teamId: s?.id,
      userId: a?.id,
      fileKey: i,
      upsellSource: t
    },
    children: jsxs(ButtonPrimitive, {
      className: 'context_menus_upsells--upsellItem--lBYll',
      onClick: c,
      children: [jsx(SvgComponent, {
        svg: _$$A5
      }), jsx('span', {
        children: e
      })]
    })
  });
}
function iK() {
  return jsx(iG, {
    entryPoint: 'design_section_status',
    children: renderI18nText('dev_handoff.paywall.ready_for_dev.upsell')
  });
}
function iH() {
  return jsx(iG, {
    entryPoint: 'design_copy_as_code',
    children: renderI18nText('dev_handoff.paywall.codegen.upsell')
  });
}
function iz() {
  return jsx(iG, {
    entryPoint: 'design_annotations',
    children: renderI18nText('dev_handoff.paywall.annotations.upsell')
  });
}
function iV({
  targetInViewport: e,
  annotationsCount: t,
  selectedView: i
}) {
  let n;
  let s = useDispatch();
  let o = useSelector(e => e.mirror.appModel);
  let l = useSelector(e => e.mirror.sceneGraph);
  let d = _$$U3('annotations_button');
  let c = getBasicViewportRect();
  let u = useCanAccessFullDevMode();
  let p = useCanAccessDevModeEntryPoint();
  n = () => d('handoff');
  let h = u ? [{
    name: 'view-annotations',
    callback: n,
    flags: ['design']
  }, {
    separator: !0
  }, {
    render: () => jsxs('div', {
      className: cssBuilderInstance.flex.itemsCenter.colorTextMenuSecondary.columnGap4.pl4.pb4.pr10.pt0.$,
      children: [jsx(_$$V, {
        style: {
          '--color-icon': 'var(--color-text-menu-secondary)'
        }
      }), renderI18nText('dev_handoff.paywall.annotations.double_click_hint')]
    }),
    optionHeight: 32
  }] : p ? [{
    header: !0,
    name: getI18nString('dev_handoff.annotation.number_annotations', {
      count: t
    })
  }, {
    separator: !0
  }, {
    render: () => jsx(iz, {}),
    optionHeight: 32,
    flags: ['design']
  }] : [{
    header: !0,
    name: getI18nString('dev_handoff.annotation.number_annotations', {
      count: t
    })
  }];
  let m = e.origin.x + c.x;
  let f = e.origin.y + c.y;
  let g = {
    left: m,
    top: f,
    right: m + e.size.x,
    bottom: f + e.size.y,
    width: e.size.x,
    height: e.size.y
  };
  return jsx('div', {
    className: Dm,
    children: jsx(_$$Q, {
      allowDisabledOnly: !p,
      appModel: o,
      dispatch: s,
      menuItems: h,
      minWidth: 50,
      recordingKey: 'annotationsButtonMenu',
      removeDisabledItems: p,
      sceneGraph: l,
      selectedView: i,
      showPoint: !0,
      targetRect: g
    })
  });
}
function iq(e) {
  let t = useDispatch();
  let i = I_();
  let n = useSelector(e => e.mirror.appModel);
  if (!useSelector(e => getFileKeyFromSelectedView(e.selectedView))) return null;
  let {
    thread
  } = e;
  let o = !!thread.comments.find(e => e.isUnread);
  let l = !!thread.isPendingFromSinatra;
  let d = null;
  let c = i.commentReceipts;
  c && (d = o ? {
    name: 'mark-as-read',
    callback: () => {
      t(markThreadAsRead({
        receiptsAPI: c,
        thread
      }));
    }
  } : {
    name: 'mark-as-unread',
    callback: () => {
      t(markCommentAsUnread({
        receiptsAPI: c,
        comment: thread.comments[0]
      }));
    }
  });
  let u = [];
  l || (isCommentStateActive(thread.sidebarItemType) ? u.push({
    name: 'resolve',
    callback: () => {
      t(resolveCommentThread({
        thread,
        resolved: !0
      }));
    },
    disabled: thread.commentPin != null
  }, d, {
    name: 'copy-link',
    callback: () => {
      e.copyLink(thread.comments[0]);
    }
  }, {
    separator: !0
  }) : u.push({
    name: 'copy-link',
    callback: () => {
      e.copyLink(thread.comments[0]);
    }
  }, {
    separator: !0
  }));
  u.push({
    action: 'toggle-show-comments',
    displayText: getI18nString('fullscreen.context_menu.hide_comments')
  });
  let p = u.filter(e => e).map(e => e);
  let h = {
    width: 224,
    height: 129,
    left: e.pinClientRect.x,
    top: e.pinClientRect.y,
    right: e.pinClientRect.x + e.pinClientRect.width,
    bottom: e.pinClientRect.y + e.pinClientRect.height
  };
  return jsx(_$$Q, {
    appModel: n,
    menuItems: p,
    targetRect: h,
    showPoint: !1,
    selectedView: e.selectedView,
    recordingKey: 'comment-context-menu',
    dispatch: t
  });
}
async function rt({
  paint: e,
  fileKey: t,
  dispatch: i
}) {
  if (!t || e.type !== 'VIDEO' || !e.video || !e.video?.hash) {
    rr('Incorrect asset type');
    return null;
  }
  i(_$$n2.set({
    message: getI18nString('whiteboard.figjam_export.exporting'),
    showLoadingSpinner: !0,
    callback: () => {}
  }));
  let r = await w6({
    paint: e,
    fileKey: t
  });
  if (r === null) {
    rr('Error getting download url for asset');
    return null;
  }
  ri(r);
}
let ri = e => {
  let t = document.createElement('a');
  t.setAttribute('href', e);
  t.setAttribute('target', '_blank');
  document.body.appendChild(t);
  t.click();
  document.body.removeChild(t);
};
let rr = e => {
  reportError(ServiceCategories.FIGJAM, new Error(`Error exporting video: ${e}`));
};
function ry(e) {
  return new URL(e).hostname.split('.').slice(-2).join('.');
}
function r$(e, t) {
  return {
    action: 'slides-rewrite-text',
    flags: ['slides'],
    callback: () => mD(e, {
      source: 'context_menu'
    }),
    disabled: !t
  };
}
function r0(e) {
  return !atomStoreManager.get(Tm) && e;
}
function r8() {
  let e = isDesignFileType();
  let t = useDraftsFolderProject().transform(e => e?.canCreateSitesFileWithReasons.result).unwrapOr(!1);
  let i = useIsCurrentUserCreator();
  let r = Vr();
  if (!r || !r.isTopLevelFrame()) return !1;
  let n = r.size.x;
  return !(n < 1200) && !(n > 1600) && !!e && !!t && !!i;
}
let r9 = _$$n((e, t) => {
  logAndTrackCTA({
    trackingContext: 'SelectionContextMenu > DesignToSites',
    text: 'Copy to Figma Sites',
    pageId: e,
    nodeId: t
  });
});
let ne = {
  name: 'copy-to-figma-sites',
  flags: ['edit', 'design'],
  callback: (e, t, i) => {
    let r = debugState.getState();
    let n = getSingletonSceneGraph();
    let a = _$$j(n.getDirectlySelectedNodes().map(e => e.guid));
    let s = r.openFile?.key;
    let o = r.fileVersion;
    let l = n.getCurrentPage()?.guid;
    if (!s || !o || !l || !a) {
      logError('designToSites', 'Unable to fetch required data to create a new Sites file', {
        fileKey: s,
        fileVersion: o,
        pageGuid: l,
        selectedNodeId: a
      }, {
        reportAsSentryError: !0
      });
      VisualBellActions.enqueue({
        message: getI18nString('selection_context_menu.error_creating_sites_file'),
        type: 'design-to-sites-error',
        error: !0
      });
      return;
    }
    let c = atomStoreManager.set(copyToSitesFromDesignAtom, {
      fileKey: s,
      fileVersion: o,
      pageGuid: l,
      selectedNodeId: a
    });
    let u = getPermissionsAndView(r);
    r9(l, a);
    i(createNewFileWithRestrictions({
      state: u,
      from: FileBrowserLocation.DESIGN_COPY_TO_SITES_ENTRYPOINT,
      editorType: FFileType.SITES,
      team: void 0,
      openNewFileIn: TabOpenBehavior.NEW_TAB,
      newFileDataLocalStorageKey: c
    }));
  }
};
let nt = parsePxInt(tui);
class ni extends PureComponent {
  items() {
    let e;
    let t;
    let i;
    let r;
    let n = this.props.isPrototypeCanvasEditUiVisible && !this.props.hasSelection ? [{
      separator: !0
    }, {
      action: 'remove-interactions-on-page',
      flags: ['edit']
    }] : [];
    let a = window.FigmaMobile;
    let s = nh(this.props.appModel.showComments, this.props.selectedView, this.props.viewportInfo, this.props.clientX, this.props.clientY, this.props.dispatch, a?.requestToAddDraftCommentPin);
    let d = this.props.selectedView.editorType === FEditorType.Whiteboard;
    let c = this.props.selectedView.editorType === FEditorType.Slides;
    let u = this.props.selectedView.editorType === FEditorType.Sites;
    let p = this.props.selectedView.editorType === FEditorType.Figmake;
    let h = this.props.selectedView.editorType === FEditorType.Cooper;
    let m = isFullscreenDevHandoffView(this.props.selectedView);
    let g = BrowserInfo.windows ? 'Ctrl+' : '\u2318';
    let x = {
      action: 'paste-here',
      flags: ['edit'],
      displayText: d ? getI18nString('fullscreen_actions.paste') : void 0,
      shortcutText: d ? `${g}V` : void 0
    };
    let y = !BrowserInfo.safari || a?.readClipboardData ? [x, d ? {
      separator: !0
    } : null] : [];
    let b = {
      name: 'start-chat',
      disabled: this.props.isJoinedToActiveVotingSession || this.props.isCursorChatDisabled,
      callback: (e, t, i, r) => {
        Fullscreen?.triggerAction('set-tool-default', null);
        this.props.dispatch(startChattingThunk({
          position: {
            x: r.clientX || this.props.clientX,
            y: (r.clientY || this.props.clientY) - nt
          },
          source: 'canvas_context_menu'
        }));
      }
    };
    e = this.props.hasSlidesAiTextEnabled;
    t = {
      x: this.props.clientX,
      y: this.props.clientY
    };
    i = this.props.slideId;
    r = this.props.viewportInfo;
    let C = !!(i && r && _$$ih2(i, t, r)) && r0(e);
    let v = r$(this.props.dispatch, C);
    let E = this.props.openFile;
    let T = this.props.canPublishOrgTemplate && E ? we({
      dispatch: this.props.dispatch,
      file: {
        key: E.key,
        name: E.name,
        folder_id: E.folderId,
        team_id: E.teamId,
        editor_type: E.editorType,
        parent_org_id: E.parentOrgId
      },
      fileNeedsMovingBeforePublish: this.props.fileNeedsMovingBeforePublish,
      isPublished: this.props.isFilePublishedTemplate,
      source: 'fullscreen-context-menu'
    }) : null;
    let w = d && !getFeatureFlags().figjam_quick_actions_v2;
    let S = [{
      action: 'toggle-ui'
    }, {
      action: 'toggle-show-comments',
      displayText: getI18nString('fullscreen.context_menu.show_hide_comments')
    }, ...(d || p ? [] : [{
      separator: !0
    }, b]), w || p ? null : {
      action: 'toggle-menu',
      displayText: gn() ? getI18nString('fullscreen_actions.toggle-actions-menu') : getI18nString('fullscreen_actions.toggle-menu')
    }, !this.props.userCanViewPlugins || u && !getFeatureFlags().sites_plugin_api || h && !getFeatureFlags().buzz_plugins || p ? null : qz({
      ...this.props,
      isReadOnly: this.props.appModel.isReadOnly
    }, 'contextmenu'), this.props.appModel.isReadOnly || !this.props.userCanViewWidgets || m ? null : Vd(this.props, 'contextmenu'), T, ...n];
    let j = [...s, ...y, {
      action: 'unlock-all',
      flags: ['edit', 'whiteboard']
    }, {
      separator: !0
    }, ...(d ? [b, {
      separator: !0
    }] : []), ...(c ? [{
      separator: !0
    }, v] : []), ...S];
    n_(j, 'canvas_context_menu');
    return j;
  }
  render() {
    let e = this.props.clientX;
    let t = this.props.clientY;
    return jsx('div', {
      className: `${Dm}`,
      children: jsx(_$$Q, {
        'allowCodegenOptions': this.props.selectedView.editorType === FEditorType.Design,
        'appModel': this.props.appModel,
        'aria-labelledby': this.props.ariaLabelledBy,
        'dispatch': this.props.dispatch,
        'isLimitedDevMode': this.props.isLimitedDevMode,
        'menuItems': filterNotNullish(this.items()),
        'recordingKey': 'canvasMenu',
        'removeDisabledItems': !0,
        'selectedView': this.props.selectedView,
        'showPoint': !1,
        'targetRect': {
          width: 10,
          height: 10,
          left: e + 100,
          top: t,
          right: e + 110,
          bottom: t - 10
        }
      })
    });
  }
}
ni.displayName = 'CanvasContextMenu';
let nr = connect((e, t) => ({
  ...t,
  appModel: e.mirror.appModel,
  openFile: e.openFile,
  editorType: e.selectedView.editorType,
  orgEntity: getCurrentOrgAdminInfo(e),
  org: e.currentUserOrgId ? e.orgById[e.currentUserOrgId] : null,
  isJoinedToActiveVotingSession: isVotingSessionJoined(e),
  hasSelection: Object.keys(e.mirror.sceneGraphSelection).length > 0,
  isDevHandoff: isFullscreenDevHandoffView(e.selectedView)
}))(ni);
function nn(e) {
  let t = useFilteredDedupedRecentlyUsedPlugins();
  let i = getLocalPlugins();
  let s = usePublishedPlugins();
  let o = useInstalledPluginsAndWidgets();
  let l = o.orgPlugins;
  let d = o.orgWidgets;
  let c = _$$h2('plugin');
  let u = _$$h2('widget');
  let p = useFilteredWidgets();
  let h = useDedupedRecentlyUsedWidgets();
  let m = usePluginedWidgets();
  let f = setupCursorChatDisabledCheck();
  let g = trackFileEventWithUser();
  useEffect(() => {
    g('Canvas Right Click');
  }, [g]);
  let _ = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  let x = J3();
  let y = JU(x);
  let b = x === kN.FILE_IN_DRAFTS;
  let C = !!kD();
  let v = useSelector(e => e.mirror.appModel.activeTextReviewPlugin);
  let E = ng();
  let T = Ne();
  let w = Jb();
  return jsx(nr, {
    ...e,
    activeTextReviewPlugin: v,
    allSavedPlugins: o.plugins,
    canPublishOrgTemplate: y,
    fileNeedsMovingBeforePublish: b,
    hasSlidesAiTextEnabled: T,
    isCursorChatDisabled: f,
    isFilePublishedTemplate: C,
    isPrototypeCanvasEditUiVisible: E,
    localExtensions: i,
    orgPrivatePlugins: c,
    orgPrivateWidgets: u,
    orgSavedPlugins: l,
    orgSavedWidgets: d,
    publishedPlugins: s,
    publishedWidgets: m,
    recentlyUsedPlugins: t,
    recentlyUsedWidgets: h,
    savedWidgetVersions: p,
    slideId: w,
    viewportInfo: _
  });
}
let na = (e, t) => Fullscreen ? Fullscreen.getObjectsListUnderCursor(e, t) : [];
let ns = class e extends PureComponent {
  constructor(e) {
    super(e);
    this.objectsListMouseEnter = e => {
      updateHoveredNode(e);
    };
    this.objectsListMouseExit = () => {
      updateHoveredNode('');
    };
    this.getSelectionGuid = () => Object.keys(this.props.sceneGraphSelection)[0];
    this.getObjectsListMenu = (e, t) => {
      let i = na(e, t);
      if (i == null) return [];
      let r = [];
      for (let e of i) {
        let t = e.nodeId;
        r.push({
          nodeId: t,
          args: {
            nodeId: t,
            name: e.name
          },
          action: 'select-node',
          source: 'canvas_context_menu',
          displayText: getI18nString('fullscreen_actions.select-node', {
            name: e.name ?? ''
          }),
          onMouseEnter: () => this.objectsListMouseEnter(t),
          onMouseExit: this.objectsListMouseExit
        });
      }
      return r;
    };
    this.getNodeTypeForCopyLinkText = () => {
      let e = this.getSelectionGuid();
      return e && Fullscreen ? Fullscreen.isPlatformShape(e) ? NodeType.SHAPE_WITH_TEXT : Fullscreen.getNodeType(e) : null;
    };
    this.getPageListForMoveToMenu = () => {
      let e = this.props.appModel.pagesList;
      if (!this.props.userCanEditFile || e == null || e.length < 2) return [];
      let t = [];
      for (let i of e) {
        i.nodeId !== this.props.appModel.currentPage && (i.isDivider ? t.push({
          separator: !0
        }) : t.push({
          name: i.name,
          args: {
            nodeId: i.nodeId,
            name: i.name
          },
          action: 'page-move-to',
          displayText: getI18nString('fullscreen_actions.page-move-to', {
            name: i.name ?? ''
          })
        }));
      }
      return t;
    };
    this.state = {
      pageItems: this.getPageListForMoveToMenu(),
      relatedComponentMenu: this.getRelatedComponentMenu(StateHierarchy.NONE),
      relatedStateMenu: this.getRelatedComponentMenu(StateHierarchy.STATE_INSTANCE),
      objectItems: this.getObjectsListMenu(this.props.clientX, this.props.clientY),
      nodeTypeForCopyLinkText: this.isFigjam() ? this.getNodeTypeForCopyLinkText() : null,
      hyperlink: this.isFigjam() ? this.getHyperlinkUnderCursor() : null
    };
  }
  getRelatedComponentMenu(e) {
    let t;
    if (e !== StateHierarchy.NONE && e !== StateHierarchy.STATE_INSTANCE) return null;
    let i = {
      userId: this.props.user?.id,
      fileKey: this.props.openFile?.key,
      orgId: this.props.openFile?.parentOrgId ?? void 0,
      teamId: this.props.openFile?.teamId ?? void 0
    };
    let r = SY(this.props.masterSymbolGUID, this.props.dispatch, this.props.openFile?.key || '', _$$l3(this.props.openFile?.libraryKey ?? ''), this.props.library, this.props.sceneGraph, this.props.sceneGraphSelection, this.props.isCooper, e, i, this.props.stateGroupSelectionInfo);
    if (r.length === 0) return null;
    t = e === StateHierarchy.STATE_INSTANCE ? 'relatedComponentMenuSwapVariants' : 'relatedComponentMenu';
    let n = this.props.clientX;
    let a = this.props.clientY;
    return {
      items: r,
      showPoint: !1,
      parentRect: {
        width: 10,
        height: 10,
        left: n + 100,
        top: a,
        right: n + 110,
        bottom: a - 10
      },
      recordingKey: t,
      dispatch: this.props.dispatch,
      depth: 0,
      onSelectItem: () => {}
    };
  }
  getHyperlinkUnderCursor() {
    return Fullscreen ? Fullscreen.getHyperlinkUnderCursor(this.props.clientX, this.props.clientY) : null;
  }
  selectLayerMenu() {
    return !this.props.isObjectsPanelMenu && this.state.objectItems.length > 1 ? this.state.objectItems : [];
  }
  textEditModeMenu() {
    let e = this.getCopyPasteMenu();
    let t = this.getCopyExportMenu();
    let i = this.props.spellCheckPreference;
    let r = this.props.appModel.spellCheckSuggestions;
    let n = r || !i ? [{
      name: 'spell-check-menu',
      flags: ['design', 'whiteboard', 'slides', 'cooper'],
      children: [_$$x2(), {
        separator: !0
      }, ..._$$A8()]
    }, ...(this.props.userCanViewPlugins ? dL(this.props, 'contextmenu') : [])] : [];
    return [...(i || this.props.appModel.activeTextReviewPlugin ? nm(r, this.props.editorType) : []), ...n, {
      separator: !0
    }, ...this.getTableCellMenu(), {
      separator: !0
    }, ...e, {
      separator: !0
    }, ...(this.isFigjam() ? t : [])];
  }
  getFaviconMenu(e) {
    return {
      name: e ? 'clear-favicon' : 'set-favicon',
      args: {
        label: e ? getI18nString('fullscreen_actions.clear_favicon') : getI18nString('fullscreen_actions.set_as_favicon')
      },
      flags: ['edit', '!slides', 'sites'],
      featureFlags: ['sites'],
      callback: () => {
        let t = getSingletonSceneGraph().getCurrentPage()?.guid;
        void 0 !== t && _$$l.user('set-responsive-set-settings', () => {
          Fullscreen?.setResponsiveSetSettings({
            faviconID: e ? '' : this.getSelectionGuid()
          }, [t]);
          fullscreenValue.commit();
        });
      }
    };
  }
  getFileThumbnailMenu(e) {
    return {
      name: getFeatureFlags().dse_library_pg_thumbnails ? fullscreenValue.getFileThumbnailMenuItemName() : fullscreenValue.getThumbnailMenuItemName(),
      args: getFeatureFlags().dse_library_pg_thumbnails ? {
        label: e ? getI18nString('fullscreen_actions.restore_default_file_thumbnail') : getI18nString('fullscreen_actions.set_as_file_thumbnail')
      } : {
        label: e ? getI18nString('fullscreen_actions.restore_default_thumbnail') : getI18nString('fullscreen_actions.set_as_thumbnail')
      },
      flags: ['edit', '!slides'],
      callback: () => {
        this.props.openFile && this.props.dispatch(setFileThumbnailOptimistic({
          file_key: this.props.openFile.key,
          thumbnail_guid: e ? null : this.getSelectionGuid()
        }));
      }
    };
  }
  getPageThumbnailMenu() {
    return {
      get name() {
        return fullscreenValue.getPageThumbnailMenuItemName();
      },
      callback: () => fullscreenValue.handlePageThumbnailMenuItem(),
      get disabled() {
        return fullscreenValue.disablePageThumbnailMenu();
      },
      flags: ['edit', 'design'],
      featureFlags: ['dse_library_pg_thumbnails']
    };
  }
  selectedEmbedOrLinkPreviewHasValidUrl() {
    return this.props.widgetSelectionInfo?.pluginID === WidgetTypes.EMBED_WIDGET && this.props.embedData && (this.props.embedData.url || this.props.embedData.srcUrl) || this.props.widgetSelectionInfo?.pluginID === WidgetTypes.LINK_PREVIEW_WIDGET && this.props.linkPreviewData && this.props.linkPreviewData.url;
  }
  isFigjam() {
    return this.props.selectedView.view === 'fullscreen' && this.props.selectedView.editorType === FEditorType.Whiteboard;
  }
  getCopyLinkMenu() {
    let e = this.selectedEmbedOrLinkPreviewHasValidUrl() ? 'FigJam' : '';
    return {
      name: 'copy-link',
      args: {
        label: getI18nString('fullscreen.context_menu.copy_link', {
          editorSpecifierString: e
        })
      },
      displayText: this.isFigjam() && this.state.nodeTypeForCopyLinkText ? function (e) {
        switch (e) {
          case NodeType.STICKY:
            return getI18nString('fullscreen_actions.copy-link-to-sticky');
          case NodeType.CONNECTOR:
            return getI18nString('fullscreen_actions.copy-link-to-connector');
          case NodeType.WIDGET:
            return getI18nString('fullscreen_actions.copy-link-to-widget');
          case NodeType.STAMP:
            return getI18nString('fullscreen_actions.copy-link-to-stamp');
          case NodeType.SECTION:
            return getI18nString('fullscreen_actions.copy-link-to-section');
          case NodeType.TEXT:
            return getI18nString('fullscreen_actions.copy-link-to-text');
          case NodeType.TABLE:
            return getI18nString('fullscreen_actions.copy-link-to-table');
          case NodeType.WASHI_TAPE:
            return getI18nString('fullscreen_actions.copy-link-to-washi-tape');
          case NodeType.SHAPE_WITH_TEXT:
            return getI18nString('fullscreen_actions.copy-link-to-shape');
          case NodeType.INSTANCE:
            return getI18nString('fullscreen_actions.copy-link-to-instance');
          default:
            return getI18nString('fullscreen_actions.copy-link-to-this');
        }
      }(this.state.nodeTypeForCopyLinkText) : void 0,
      callback: () => {
        let e;
        if (!this.props.openFile) return;
        let t = !isFullscreenDevHandoffView(this.props.selectedView) && this.props.attributionContextKey;
        let i = isFullscreenOverview(this.props.selectedView);
        let r = getDevModeFocusId(this.props.selectedView);
        let n = isFullscreenSlidesView(this.props.selectedView);
        let a = debugState?.getState()?.openFile?.canEdit;
        let s = qZ() && getFeatureFlags().aip_flower_garden_on_copy && a;
        let c = this.getSelectionGuid();
        let u = buildFileUrl({
          file: this.props.openFile,
          nodeId: this.getSelectionGuid(),
          isDevHandoff: isFullscreenDevHandoffView(this.props.selectedView),
          isReadOnly: this.props.appModel.isReadOnly,
          isFigJam: this.isFigjam(),
          isDevModeOverview: i,
          devModeFocusId: r,
          attributionContext: t ? combineWithHyphen(this.props.attributionContextKey, ShareContext.FULLSCREEN_CONTEXT_MENU) : null
        });
        if (getFeatureFlags().ce_copy_labelled_links) {
          let t = getSingletonSceneGraph().get(this.getSelectionGuid());
          e = t ? t.name : this.props.openFile.name;
        }
        s && atomStoreManager.set(ui, c ?? null);
        let p = (() => {
          if (s) {
            return {
              visualBellTypeOverride: xp,
              visualBellMessageComponentKeyOverride: VisualBellType.DESIGN_LINTER_COPY_SELECTION,
              visualBellButton: {
                text: getI18nString('fullscreen_actions.quick_actions.detect-violations'),
                action: () => {
                  _$$u({
                    source: MenuType.COPY_SELECTION_TOAST
                  });
                }
              },
              visualBellExtras: {
                onDismiss: () => {}
              }
            };
          }
          if (this.isFigjam() && this.state.nodeTypeForCopyLinkText) {
            return {
              visualBellMessageOverride: function (e) {
                switch (e) {
                  case NodeType.STICKY:
                    return getI18nString('visual_bell.copy_link_to_sticky');
                  case NodeType.CONNECTOR:
                    return getI18nString('visual_bell.copy_link_to_connector');
                  case NodeType.WIDGET:
                    return getI18nString('visual_bell.copy_link_to_widget');
                  case NodeType.STAMP:
                    return getI18nString('visual_bell.copy_link_to_stamp');
                  case NodeType.SECTION:
                    return getI18nString('visual_bell.copy_link_to_section');
                  case NodeType.TEXT:
                    return getI18nString('visual_bell.copy_link_to_text');
                  case NodeType.TABLE:
                    return getI18nString('visual_bell.copy_link_to_table');
                  case NodeType.WASHI_TAPE:
                    return getI18nString('visual_bell.copy_link_to_washi_tape');
                  case NodeType.SHAPE_WITH_TEXT:
                    return getI18nString('visual_bell.copy_link_to_shape');
                  case NodeType.INSTANCE:
                    return getI18nString('visual_bell.copy_link_to_instance');
                  default:
                    return getI18nString('visual_bell.copy_link');
                }
              }(this.state.nodeTypeForCopyLinkText)
            };
          }
          if (n && c) {
            let e = getSingletonSceneGraph().get(c);
            if (e) {
              return {
                visualBellMessageOverride: getI18nString('copy_to_clipboard.slides.link_to_slide_copied_to_clipboard', {
                  name: e.name
                })
              };
            }
          }
          return {};
        })();
        let h = {
          fileKey: this.props.openFile.key,
          url: u,
          label: e,
          source: ShareContext.FULLSCREEN_CONTEXT_MENU,
          visualBellTypeOverride: p.visualBellTypeOverride,
          visualBellButton: p.visualBellButton,
          visualBellExtras: p.visualBellExtras,
          showVisualBellOnErrorForInteractionTests: s
        };
        let m = p.visualBellMessageComponentKeyOverride ? {
          ...h,
          visualBellMessageComponentKeyOverride: p.visualBellMessageComponentKeyOverride
        } : {
          ...h,
          visualBellMessageOverride: p.visualBellMessageOverride
        };
        this.props.dispatch(copyShareLinkOptimistic(m));
      }
    };
  }
  getCopyHyperlinkMenu() {
    let e = (() => {
      let e = this.state.hyperlink;
      if (!e || e === '') return null;
      if (e.startsWith('mailto:')) {
        let t = e.substring(7);
        if (t) {
          return {
            displayText: getI18nString('fullscreen_actions.copy-email', {
              email: t
            }),
            linkToCopy: t,
            visualBellText: getI18nString('visual_bell.copy_email', {
              email: t
            })
          };
        }
      } else if (e.startsWith('tel:')) {
        let t = e.substring(4);
        if (t) {
          return {
            displayText: getI18nString('fullscreen_actions.copy-phone', {
              number: t
            }),
            linkToCopy: t,
            visualBellText: getI18nString('visual_bell.copy_phone', {
              number: t
            })
          };
        }
      } else {
        let t = ry(e);
        if (t) {
          return {
            displayText: getI18nString('fullscreen_actions.copy-hyperlink', {
              hyperlink: t
            }),
            linkToCopy: e,
            visualBellText: getI18nString('visual_bell.copy_hyperlink', {
              hyperlink: t
            })
          };
        }
      }
    })();
    return e ? {
      name: 'copy-hyperlink',
      displayText: e.displayText,
      callback: () => copyHyperlinkToClipboard(this.props.dispatch, e.linkToCopy, 'ContextMenu', e.visualBellText)
    } : null;
  }
  getImageToProfilePicture() {
    if (!this.props.user || !this.props.fillPaints || isInvalidValue(this.props.fillPaints)) return null;
    let e = this.props.fillPaints.findIndex(e => e.type === 'IMAGE');
    if (e < 0) return null;
    let t = this.props.fillPaints[e];
    return {
      name: 'set-image-as-profile-picture',
      args: {
        label: 'Set image as profile picture'
      },
      flags: ['view_restricted', 'whiteboard'],
      featureFlags: ['figjam_canvas_image_to_avatar'],
      callback: () => {
        V8(t, this.props.user, this.props.dispatch);
      }
    };
  }
  getMaybeEmbedOrLinkPreviewWidgetMenu() {
    if (!this.selectedEmbedOrLinkPreviewHasValidUrl()) return null;
    let e = this.props.embedData?.url || this.props.embedData?.srcUrl || this.props.linkPreviewData?.url;
    let t = ry(decodeURIComponent(e));
    return {
      name: 'labeled-menu-item',
      args: {
        label: getI18nString('fullscreen_actions.copy-hyperlink', {
          hyperlink: t
        })
      },
      callback: () => {
        !function (e, t) {
          let i = decodeURIComponent(t);
          copyTextToClipboard(i);
          handlePreviewTracking(LinkMetadataEvent.COPY_LINK, i);
          e(VisualBellActions.enqueue({
            type: 'copy-preview',
            message: getI18nString('visual_bell.copy_hyperlink', {
              hyperlink: ry(i)
            }),
            error: !1
          }));
        }(this.props.dispatch, e);
      }
    };
  }
  getMaybeEmbedDeactivateMenu() {
    return this.props.widgetSelectionInfo?.pluginID === WidgetTypes.EMBED_WIDGET && AppStateTsApi && this.props.widgetSelectionInfo.widgetID === AppStateTsApi.embedUiState().activeEmbedData.getCopy().embedNodeId ? {
      name: 'labeled-menu-item',
      args: {
        label: 'Deactivate preview'
      },
      callback: () => {
        Fullscreen?.deactivateEmbed();
      }
    } : null;
  }
  getExportVideo() {
    if (!this.props.fillPaints || isInvalidValue(this.props.fillPaints)) return null;
    let e = this.props.fillPaints.find(e => e.type === 'VIDEO');
    if (!e) return null;
    let t = this.props.openFile?.key;
    return {
      action: 'export-selected-video',
      flags: ['view_restricted', 'whiteboard'],
      platforms: ['!ipad'],
      displayText: getI18nString('fullscreen.context_menu.export_selected_video'),
      callback: (i, r, n) => {
        rt({
          paint: e,
          fileKey: t,
          dispatch: n
        });
      }
    };
  }
  selectedDefaultLibraryComponents() {
    let e = Object.keys(this.props.sceneGraphSelection);
    if (e.length === 0) return !1;
    let t = this.props.sceneGraph.get(e[0])?.symbolId;
    if (!t) return !1;
    let i = this.props.sceneGraph.get(t)?.sourceLibraryKey;
    return !!i && isSubscribedLibrary(this.props.library.defaultPublished, i);
  }
  getMoveToMenu() {
    return this.state.pageItems.length >= 1 ? {
      action: 'page-move-to-menu',
      flags: ['edit'],
      children: this.state.pageItems,
      name: 'page-move-to-menu'
    } : null;
  }
  getFigJamRemovePluginActionsMenu() {
    if (this.props.selectedView.editorType === FEditorType.Design) return null;
    let t = e => this.props.dispatch(_$$af({
      id: e,
      resourceType: HubTypeEnum.PLUGIN
    }));
    let i = getRelaunchablePlugins(this.props.pluginRelaunchData, this.props.publishedPlugins, this.props.localExtensions, this.props.orgEntity, this.props.numSelected || 0, (i, r) => e.refreshCache.debounceRefresh(i, () => t(i), r), ManifestEditorType.FIGJAM);
    let r = [];
    let n = new Set();
    for (let e of i) {
      n.has(e.pluginTypeAndID) || (r.push({
        name: e.plugin.name,
        plugin_id: e.plugin.plugin_id
      }), n.add(e.pluginTypeAndID));
    }
    return r.length === 0 ? null : {
      name: 'remove-plugin-actions',
      children: [...r.map(({
        name: e,
        plugin_id: t
      }) => ({
        name: 'plugins-menu-item',
        callback: () => PluginHelpers?.removeRelaunchDataFromSelection(t),
        args: {
          extensionName: e
        }
      })), {
        separator: !0
      }, {
        name: 'remove-all-plugin-actions',
        callback: () => r.map(({
          plugin_id: e
        }) => PluginHelpers?.removeRelaunchDataFromSelection(e))
      }]
    };
  }
  getMainComponentActionsMenu() {
    if (this.props.isLimitedDevMode) return null;
    let e = Yh(this.props.appModel, 'find-symbol') && !this.selectedDefaultLibraryComponents();
    let t = Yh(this.props.appModel, 'push-changes-to-main');
    let i = Yh(this.props.appModel, 'restore-symbol-or-state-group');
    let r = Yh(this.props.appModel, 'add-variant');
    let n = Yh(this.props.appModel, 'publish-selection');
    let a = [e, t, i, r, n].filter(Boolean).length;
    if (a === 0) return null;
    if (a === 1) {
      if (e) {
        return {
          action: 'find-symbol'
        };
      }
      if (r) {
        return {
          action: 'add-variant',
          flags: ['edit']
        };
      }
      if (n) {
        return {
          action: 'publish-selection',
          flags: ['edit']
        };
      }
    }
    return {
      action: 'main-component',
      children: [{
        action: 'find-symbol'
      }, {
        action: 'push-changes-to-main',
        flags: ['edit']
      }, {
        action: 'restore-symbol-or-state-group',
        flags: ['edit']
      }, {
        action: 'publish-selection',
        flags: ['edit']
      }, {
        action: 'add-variant',
        flags: ['edit']
      }]
    };
  }
  getTableCellMenu() {
    let e = Yh(this.props.appModel, 'delete-table-contents');
    let t = Yh(this.props.appModel, 'delete-current-table-row') || Yh(this.props.appModel, 'delete-current-table-column');
    return [{
      action: 'move-table-row-up',
      flags: ['edit']
    }, {
      action: 'move-table-row-down',
      flags: ['edit']
    }, {
      action: 'move-table-column-left',
      flags: ['edit']
    }, {
      action: 'move-table-column-right',
      flags: ['edit']
    }, {
      separator: !0
    }, {
      action: 'add-table-column-before',
      flags: ['edit']
    }, {
      action: 'add-table-column-after',
      flags: ['edit']
    }, {
      separator: !0
    }, {
      action: 'add-table-row-above',
      flags: ['edit']
    }, {
      action: 'add-table-row-below',
      flags: ['edit']
    }, {
      separator: !0
    }, {
      action: 'delete-table-contents',
      flags: ['edit'],
      shortcutText: e && !t ? '\u232B' : void 0
    }, {
      action: 'delete-current-table-column',
      flags: ['edit'],
      shortcutText: !e && t ? '\u232B' : void 0
    }, {
      action: 'delete-current-table-row',
      flags: ['edit'],
      shortcutText: !e && t ? '\u232B' : void 0
    }];
  }
  getCopyPasteMenu() {
    let e;
    let t = window.FigmaMobile;
    let i = !BrowserInfo.safari || !!t?.readClipboardData;
    let n = !this.props.isObjectsPanelMenu && !this.props.isSingleSlideViewCarousel && !this.props.isBuzzCarousel && i;
    let a = this.props.isTextEditModeMenu;
    let s = P5();
    let o = isAssetSuggestionsEnabled() && this.props.hasFragmentSearchPermission;
    let d = this.props.isEligibleForDesignToSites;
    let c = Yh(this.props.appModel, 'send-to-make-from-design') && (this.props.shouldShowSendToMake?.() ?? !1);
    let u = Yh(this.props.appModel, 'send-selection-to-buzz-from-design');
    let p = [{
      action: 'copy-text'
    }, {
      action: 'copy-as-code',
      children: [{
        action: 'copy-as-css'
      }, {
        action: 'copy-as-css-recursive'
      }, {
        action: 'copy-as-ios'
      }, {
        action: 'copy-as-android'
      }, ...(!this.props.canAccessDevMode && this.props.canAccessDevModeEntryPoint ? [{
        separator: !0
      }, {
        render: () => jsx(iH, {}),
        optionHeight: 40
      }] : [])]
    }, {
      action: 'copy-as-svg'
    }, {
      action: 'copy-as-png'
    }, ...(this.props.canCopyLink ? [this.getCopyLinkMenu()] : []), {
      separator: !0
    }, {
      action: 'copy-properties',
      flags: ['view_restricted']
    }, {
      action: 'paste-properties',
      flags: ['edit']
    }];
    let h = BrowserInfo.windows ? 'Ctrl+' : '\u2318';
    switch (this.props.selectedView.editorType) {
      case FEditorType.Design:
      case FEditorType.Illustration:
      case FEditorType.Figmake:
      case FEditorType.Sites:
      case FEditorType.Slides:
      case FEditorType.Cooper:
        e = [navigator.clipboard && navigator.clipboard.write ? {
          action: 'copy',
          shortcutText: `${h}C`
        } : null, n ? {
          action: 'paste-here',
          flags: ['edit'],
          displayText: getI18nString('fullscreen_actions.paste-here'),
          shortcutText: a ? `${h}V` : void 0
        } : this.props.isSingleSlideViewCarousel ? {
          action: 'paste',
          flags: ['edit'],
          displayText: getI18nString('fullscreen_actions.paste'),
          shortcutText: `${h}V`
        } : null, i ? {
          action: 'paste-to-replace',
          flags: ['edit'],
          displayText: a ? getI18nString('fullscreen_actions.paste-and-match-style') : void 0,
          shortcutText: a ? `${h}\u21E7V` : void 0
        } : null, {
          action: 'copy-paste-menu',
          flags: ['edit'],
          children: p
        }, {
          action: 'copy-as-menu',
          flags: ['!edit'],
          children: p
        }, {
          action: 'duplicate-in-place',
          flags: ['edit', 'slides', 'cooper'],
          displayText: getI18nString('fullscreen_actions.duplicate-in-place'),
          shortcutText: `${h}D`
        }, c ? _$$V2 : null, u ? {
          action: 'send-selection-to-buzz-from-design',
          flags: ['edit', 'design'],
          callback: (e, t, i) => {
            _$$rN(i, VY({
              openFile: this.props.openFile,
              fileVersion: this.props.fileVersion
            }), FileBrowserLocation.SEND_SELECTION_TO_BUZZ_FROM_DESIGN_CONTEXT_MENU);
          }
        } : null, d ? ne : null, s || o ? {
          action: 'find-inspiration',
          flags: ['edit', '!slides', '!cooper']
        } : null, getFeatureFlags().asset_suggestions_inspect_fragment ? {
          action: 'inspect-fragment',
          flags: ['!slides', '!cooper']
        } : null];
        break;
      case FEditorType.DevHandoff:
        e = [navigator.clipboard && navigator.clipboard.write ? {
          action: 'copy',
          shortcutText: `${h}C`
        } : null, this.props.isLimitedDevMode ? null : {
          action: 'copy-text'
        }, this.props.isLimitedDevMode ? null : {
          action: 'copy-as-svg'
        }, this.props.isLimitedDevMode ? null : {
          action: 'copy-as-png'
        }, this.props.isLimitedDevMode ? null : {
          action: 'copy-layer-name'
        }, this.props.canCopyLink ? this.getCopyLinkMenu() : null];
        break;
      default:
        e = [navigator.clipboard && navigator.clipboard.write ? {
          action: 'copy',
          shortcutText: `${h}C`
        } : null, n ? {
          action: 'paste',
          flags: ['edit'],
          displayText: getI18nString('fullscreen_actions.paste'),
          shortcutText: `${h}V`
        } : null, i ? {
          action: 'paste-to-replace',
          flags: ['edit'],
          displayText: getI18nString('fullscreen_actions.paste-to-replace')
        } : null];
    }
    return e;
  }
  getCopyExportMenu() {
    return [...(this.props.canCopyLink ? [this.getCopyLinkMenu(), this.getCopyHyperlinkMenu()] : []), this.getMaybeEmbedOrLinkPreviewWidgetMenu(), this.getMaybeEmbedDeactivateMenu(), {
      action: 'copy-as-png'
    }, {
      action: 'export-selection-or-current-page',
      flags: ['view_restricted', 'whiteboard'],
      displayText: getI18nString('fullscreen.context_menu.export_selection')
    }, this.getExportVideo()];
  }
  rulerGuideMenu(e, t) {
    let i = 'toggle-rulers';
    let r = [e === Axis.Y ? {
      action: 'remove-vertical-guides'
    } : {
      action: 'remove-horizontal-guides'
    }, {
      separator: !0
    }, {
      action: i,
      displayText: getI18nString('fullscreen.ruler_guide_context_menu.hide_rulers'),
      shortcutText: c1(this.props.appModel.keyboardShortcuts, i)
    }, ...this.getRulerUnitSubmenu()];
    let n = [{
      action: 'remove-guide'
    }];
    switch (t) {
      case MeasurementType.RULER:
        return r;
      case MeasurementType.GUIDE:
        return n;
      case MeasurementType.BOTH:
        return n.concat(...r);
      default:
        return [];
    }
  }
  getRulerUnitSubmenu() {
    let e = [{
      action: 'toggle-ruler-unit-pixels',
      checked: EditorPreferencesApi().renderRulerUnitAsPixels.getCopy()
    }, {
      action: 'toggle-ruler-unit-inches',
      checked: EditorPreferencesApi().renderRulerUnitAsInches.getCopy()
    }, {
      action: 'toggle-ruler-unit-centimeters',
      checked: EditorPreferencesApi().renderRulerUnitAsCentimeters.getCopy()
    }];
    return [{
      action: 'ruler-unit-menu',
      flags: ['cooper'],
      children: filterNotNullish(e),
      featureFlags: ['buzz_print_export']
    }];
  }
  singleSlideViewCarouselMenu() {
    return [...this.getCopyPasteMenu(), {
      separator: !0
    }, {
      action: 'delete-selection',
      flags: ['slides']
    }, {
      separator: !0
    }, {
      action: 'create-slide',
      flags: ['slides']
    }, {
      action: 'select-all-slides',
      flags: ['slides']
    }, ...this.skipSlidesMenu()];
  }
  skipSlidesMenu() {
    let e = (() => {
      for (let e of Object.keys(this.props.sceneGraphSelection)) {
        let t = getSingletonSceneGraph().get(e);
        if (!_$$Y2(t)) return !1;
      }
      return !0;
    })();
    let t = Object.keys(this.props.sceneGraphSelection).length > 1;
    return e ? [{
      separator: !0
    }, (() => {
      for (let e of Object.keys(this.props.sceneGraphSelection)) {
        let t = getSingletonSceneGraph().get(e);
        if (!_$$Y2(t) || !t.isSkippedSlide) return !1;
      }
      return !0;
    })() ? {
      action: t ? 'unskip-slides' : 'unskip-slide',
      flags: ['slides']
    } : {
      action: t ? 'skip-slides' : 'skip-slide',
      flags: ['slides']
    }] : [];
  }
  slidesObjectAnimationMenu() {
    return (() => {
      for (let e of Object.keys(this.props.sceneGraphSelection)) {
        let t = getSingletonSceneGraph().get(e);
        if (!t || !t.isInSlide) return !1;
      }
      return !0;
    })() ? [{
      action: 'add-slide-object-animation',
      flags: ['edit', 'slides']
    }] : [];
  }
  buzzCarouselMenu() {
    return [...this.getCopyPasteMenu(), {
      separator: !0
    }, {
      action: 'delete-selection',
      flags: ['cooper']
    }];
  }
  sitesSemanticTagMenu() {
    let e = _$$b3(this.props.accessibilityLabelType, this.props.accessibilityCategory);
    return e.tagEditable ? {
      name: 'change-tag',
      children: e.tagOptions.map(e => {
        if ('divider' in e) {
          return {
            separator: !0
          };
        }
        let t = e.value.toLowerCase();
        let i = e.value.toLowerCase();
        return {
          name: t.toString(),
          displayText: i,
          callback: () => {
            fullscreenValue.updateSelectionProperties({
              accessibleHTMLTag: e.value
            }, {
              shouldCommit: yesNoTrackingEnum.YES
            });
          }
        };
      }),
      flags: ['edit', 'sites'],
      featureFlags: ['sts_a11y_layers_semantic_tags']
    } : null;
  }
  contextMenu() {
    let {
      objectItems,
      relatedComponentMenu,
      relatedStateMenu
    } = this.state;
    let n = this.props.appModel;
    let a = this.props.selectedView.editorType === FEditorType.Design;
    let s = this.props.selectedView.editorType === FEditorType.Slides;
    let d = isFullscreenSitesView(this.props.selectedView);
    let c = this.props.selectedView.editorType === FEditorType.Figmake;
    let u = this.props.selectedView.editorType === FEditorType.Cooper;
    let p = this.props.selectedView.editorType === FEditorType.Illustration;
    let h = (a || d || c || p) && Yh(this.props.appModel, 'select-node-menu') && !this.props.isObjectsPanelMenu && objectItems.length > 1;
    let m = this.props.isObjectsPanelMenu;
    let f = m && this.props.hasAIPermission && isRenameLayersEnabled();
    let g = window.FigmaMobile;
    let x = nh(n.showComments, this.props.selectedView, this.props.viewportInfo, this.props.clientX, this.props.clientY, this.props.dispatch, g?.requestToAddDraftCommentPin);
    let y = Yh(this.props.appModel, 'swap-to-related-symbol');
    let b = Yh(this.props.appModel, 'swap-to-related-state');
    let C = this.props.isPrototypeCanvasEditUiVisible ? [{
      separator: !0
    }, {
      action: 'remove-interactions-on-selection',
      flags: ['edit']
    }, {
      action: 'add-prototype-starting-point',
      flags: ['edit']
    }, {
      action: 'delete-prototype-starting-point',
      flags: ['edit']
    }] : [];
    let v = this.getCopyPasteMenu();
    let E = this.getCopyExportMenu();
    let T = [h ? {
      action: 'select-node-menu',
      children: objectItems,
      name: 'select-node-menu'
    } : null, this.getMoveToMenu(), {
      action: 'move-to-file',
      flags: ['edit']
    }];
    let w = !a && !p;
    let S = s || d && !getFeatureFlags().sites_plugin_api || c || u ? [] : [w ? {
      separator: !0
    } : null, this.props.userCanViewPlugins ? qz(this.props, 'contextmenu') : null, this.props.appModel.isReadOnly || !this.props.userCanViewWidgets ? null : Vd(this.props, 'contextmenu')];
    let j = getFeatureFlags().internal_only_debug_tools;
    let I = j && this.props.numSelected === 1;
    let k = this.props.spellCheckPreference;
    let N = this.props.appModel.spellCheckSuggestions;
    let A = r0(this.props.hasSlidesAiTextEnabled);
    let O = r$(this.props.dispatch, A);
    return [...(k || this.props.appModel.activeTextReviewPlugin ? nm(N, this.props.editorType) : []), {
      separator: !0
    }, ...this.getTableCellMenu(), {
      separator: !0
    }, ...x, ...v, {
      separator: !0
    }, {
      action: 'delete-selection',
      flags: ['whiteboard', 'slides']
    }, {
      separator: !0
    }, O, {
      separator: !0
    }, ...(this.isFigjam() ? E : []), {
      separator: !0
    }, ...T, {
      action: 'bring-to-front',
      flags: ['edit']
    }, {
      action: 'bring-forward',
      flags: ['edit', 'slides']
    }, {
      action: 'send-backward',
      flags: ['edit', 'slides']
    }, {
      action: 'send-to-back',
      flags: ['edit']
    }, {
      separator: !0
    }, {
      action: 'create-responsive-set',
      flags: ['edit', 'sites']
    }, {
      action: 'set-as-default-responsive-set',
      flags: ['edit', 'sites']
    }, {
      action: 'replace-selected-frame-with-section',
      flags: ['edit', '!slides']
    }, {
      action: 'replace-selected-section-with-frame',
      flags: ['edit', '!slides']
    }, {
      action: 'group-selection',
      flags: ['edit']
    }, {
      action: 'frame-selection',
      flags: ['edit']
    }, {
      action: 'create-section-from-selection',
      flags: ['edit', '!slides']
    }, {
      action: 'ungroup-selection',
      flags: ['edit'],
      displayText: getI18nString('fullscreen.context_menu.ungroup')
    }, m ? {
      action: 'rename-selection',
      flags: ['edit'],
      displayText: getI18nString('fullscreen.context_menu.rename')
    } : null, f ? {
      name: 'auto-rename-layers',
      flags: ['edit'],
      displayText: getI18nString('fullscreen.context_menu.auto_rename_layers'),
      rightIcon: jsx(_$$y4, {
        variant: _$$x3.ON_MENU,
        helpUrlVariant: JT.AUTO_RENAME_LAYERS
      }),
      callback: () => {
        $I({
          moduleToOpen: {
            type: 'custom',
            module: jsx(_$$A9, {
              source: ActionType.CONTEXT_MENU
            }),
            beforeModuleOpen: () => {
              B3(JT.AUTO_RENAME_LAYERS);
              Ag(JT.AUTO_RENAME_LAYERS, renameLayers, {
                source: ActionType.CONTEXT_MENU,
                overwriteNames: !1
              });
            },
            name: ExtensionFeatureKey.RENAME_LAYERS_TOAST
          },
          trackingData: {
            source: 'selection_context_menu_rename_layers'
          }
        });
      }
    } : null, {
      action: 'flatten-selection',
      flags: ['edit'],
      displayText: getI18nString('fullscreen.context_menu.flatten')
    }, {
      action: 'break-vector-network-into-paths',
      flags: ['edit'],
      displayText: getFeatureFlags().ce_il_var_width_strings ? getI18nString('fullscreen_actions.split_vector') : getI18nString('fullscreen_actions.break-vector-network-into-paths')
    }, p ? {
      action: 'add-transform-modifier-to-selection',
      flags: ['edit'],
      displayText: getI18nString('fullscreen.context_menu.wrap_with_transform')
    } : null, {
      action: 'outline-stroke',
      flags: ['edit'],
      shortcutText: c1(this.props.appModel.keyboardShortcuts, 'outline-stroke')
    }, {
      action: 'mask-selection',
      flags: ['edit'],
      get displayText() {
        let e = getMaskState();
        return formatI18nMessage(e);
      }
    }, p ? {
      action: 'create-brush-menu',
      flags: ['edit'],
      displayText: getI18nString('fullscreen_actions.create-brush-menu'),
      children: [{
        action: 'create-stretch-brush'
      }, {
        action: 'create-scatter-brush',
        featureFlags: ['ce_il_scatter']
      }]
    } : null, {
      action: 'set-as-primary-breakpoint',
      flags: ['edit'],
      displayText: getI18nString('fullscreen_actions.set-as-primary-breakpoint')
    }, this.props.canSetAsFavicon && !this.props.appModel.isReadOnly ? this.getFaviconMenu(this.getSelectionGuid() === this.props.sceneGraph.getCurrentPage()?.responsiveSetSettings?.faviconID) : null, this.props.canSetAsFileThumbnail && !this.props.appModel.isReadOnly ? this.getFileThumbnailMenu(this.getSelectionGuid() === this.props.openFile?.thumbnailGuid) : null, getFeatureFlags().dse_library_pg_thumbnails && this.props.canSetAsPageThumbnail && !this.props.appModel.isReadOnly ? this.getPageThumbnailMenu() : null, {
      separator: !0
    }, {
      action: this.props.propertiesPanelShouldShowRemoveAutoLayout ? 'unstack-selection' : 'stack-selection',
      flags: ['design', 'edit', 'slides']
    }, _$$r3({
      msalEnabled: Yh(this.props.appModel, 'run-multi-stack-auto-layout') && !this.props.propertiesPanelShouldShowRemoveAutoLayout,
      destroyAllALEnabled: Yh(this.props.appModel, 'destroy-all-auto-layout'),
      resizeToFitEnabled: Yh(this.props.appModel, 'resize-to-fit')
    }), {
      action: 'create-symbol',
      flags: ['edit']
    }, this.sitesSemanticTagMenu(), {
      action: 'create-code-layer-from-design',
      flags: ['edit', 'sites'],
      featureFlags: ['sts_code_authoring'],
      notFeatureFlags: ['sts_code_authoring_by_plan']
    }, {
      action: 'create-code-layer-from-design',
      flags: ['edit', 'sites'],
      featureFlags: ['sts_code_authoring_by_plan']
    }, {
      action: 'create-make-from-design',
      flags: ['edit', 'design'],
      featureFlags: ['bake_canvas'],
      displayText: getI18nString('fullscreen_actions.create-make-prototype')
    }, {
      action: 'edit-code',
      flags: ['edit', 'sites'],
      featureFlags: ['sts_code_authoring'],
      notFeatureFlags: ['sts_code_authoring_by_plan']
    }, {
      action: 'edit-code',
      flags: ['edit', 'sites'],
      featureFlags: ['sts_code_authoring_by_plan']
    }, {
      action: 'restore-design-in-place-from-code',
      flags: ['edit', 'sites'],
      featureFlags: ['sts_code_authoring'],
      notFeatureFlags: ['sts_code_authoring_by_plan']
    }, {
      action: 'restore-design-in-place-from-code',
      flags: ['edit', 'sites'],
      featureFlags: ['sts_code_authoring_by_plan']
    }, {
      action: 'create-template',
      flags: ['edit'],
      featureFlags: ['dse_templates_proto']
    }, {
      action: 'convert-to-slot',
      flags: ['edit'],
      featureFlags: ['dse_slots']
    }, y && relatedComponentMenu ? {
      name: 'swap-to-related-symbol',
      flags: ['edit'],
      childDropdown: relatedComponentMenu
    } : null, b && relatedStateMenu ? {
      name: 'swap-to-related-state',
      flags: ['edit'],
      childDropdown: relatedStateMenu
    } : null, {
      action: 'reset-symbol',
      flags: ['edit']
    }, {
      action: 'reset-fauxverride',
      flags: ['edit', 'sites']
    }, {
      action: 'detach-instance',
      flags: ['edit', 'design', 'sites']
    }, this.getMainComponentActionsMenu(), {
      action: 'link-to-component',
      flags: ['edit']
    }, ...(w ? [] : S), this.getFigJamRemovePluginActionsMenu(), {
      separator: !0
    }, {
      action: 'toggle-shown-for-selected-nodes',
      flags: ['edit'],
      displayText: getI18nString('fullscreen.context_menu.show_hide')
    }, {
      action: 'toggle-locked-for-selected-nodes',
      flags: ['edit'],
      displayText: getI18nString('fullscreen.context_menu.lock_unlock')
    }, {
      action: 'unlock-all',
      flags: ['edit', 'whiteboard']
    }, {
      separator: !0
    }, {
      action: 'flip-horizontal',
      flags: ['edit']
    }, {
      action: 'flip-vertical',
      flags: ['edit']
    }, {
      separator: !0
    }, {
      action: 'remove-annotations',
      flags: ['dev_handoff', 'design']
    }, {
      displayText: getI18nString('dev_handoff.layers.add_annotation'),
      flags: ['design'],
      action: 'add-annotation'
    }, {
      separator: !0
    }, ...(w ? S : []), {
      separator: !0
    }, this.getImageToProfilePicture(), ...C, ...(s ? this.skipSlidesMenu() : []), {
      separator: !0
    }, ...(s ? this.slidesObjectAnimationMenu() : []), getFeatureFlags().dt_ccv2_on_canvas ? {
      action: 'find-codebase-suggestions',
      flags: []
    } : null, I ? {
      separator: !0
    } : null, I ? {
      action: 'debug-inspect-layer-figma-scope'
    } : null, j ? {
      action: 'debug-print-as-test-code'
    } : null];
  }
  getActionSource() {
    return this.props.isTextEditModeMenu ? 'canvas_context_menu' : this.props.isObjectsPanelMenu ? 'panel' : this.props.isRulerGuideMenu || this.props.isSelectLayerMenu ? void 0 : 'canvas_context_menu';
  }
  render() {
    let e = this.props.clientX;
    let t = this.props.clientY;
    let i = filterNotNullish(this.props.isTextEditModeMenu ? this.textEditModeMenu() : this.props.isSelectLayerMenu ? this.selectLayerMenu() : this.props.isRulerGuideMenu ? this.rulerGuideMenu(this.props.axis, this.props.rulerGuideContextMenuType) : this.props.isSingleSlideViewCarousel ? this.singleSlideViewCarouselMenu() : this.props.isBuzzCarousel ? this.buzzCarouselMenu() : this.contextMenu());
    n_(i, this.getActionSource());
    return jsx('div', {
      className: `${Dm}`,
      children: jsx(_$$Q, {
        appModel: this.props.appModel,
        dispatch: this.props.dispatch,
        isLimitedDevMode: this.props.isLimitedDevMode,
        menuItems: i,
        recordingKey: 'layerMenu',
        removeDisabledItems: !0,
        sceneGraph: this.props.sceneGraph,
        sceneGraphSelection: this.props.sceneGraphSelection,
        selectedView: this.props.selectedView,
        showPoint: !1,
        targetRect: {
          width: 10,
          height: 10,
          left: e + 100,
          top: t,
          right: e + 110,
          bottom: t - 10
        }
      })
    });
  }
};
function no(e) {
  let t = e.mirror.sceneGraph.getCurrentPage()?.guid;
  return e.library.publishableSymbols.some(e => e.containingFrame.pageId === t) || e.library.publishableStateGroups.some(e => e.containingFrame.pageId === t);
}
function nl(e) {
  let t = useSelector(selectOpenFile);
  let i = useDedupedRecentlyUsedPlugins();
  let n = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  let s = useFileByKey();
  let o = useCanAccessFullDevMode();
  let l = useCanAccessDevModeEntryPoint();
  let d = useSelector(e => e.mirror.appModel.activeTextReviewPlugin);
  let u = ng();
  let p = useDispatch();
  let h = useInstalledPluginsAndWidgets();
  let m = h.orgPlugins;
  let f = _$$h2('plugin');
  let g = getObservableOrFallback(EditorPreferencesApi().spellCheckPreference);
  let _ = selectWithShallowEqual(e => {
    let t = Object.keys(e.mirror.sceneGraphSelection);
    let i = t.length === 1 ? getSingletonSceneGraph().get(t[0]) : null;
    let r = i != null && (i.type === 'FRAME' && !i.resizeToFit || i.type === 'SYMBOL' || i.type === 'SECTION' || i.type === 'RESPONSIVE_SET' || i.type === 'WEBPAGE');
    let n = i != null && i.type === 'FRAME' && i.isTopLevelFrame();
    let a = e.selectedView.editorType;
    let s = r && !i?.isInstanceSublayer;
    return {
      appModel: e.mirror.appModel,
      publishedPlugins: e.publishedPlugins,
      publishedWidgets: e.publishedWidgets,
      localExtensions: e.localPlugins,
      userCanViewPlugins: canPerformAction(e),
      userCanViewWidgets: isEditorTypeSupportedFor(e),
      userCanRunExtensions: canRunExtensions(e),
      sceneGraph: e.mirror.sceneGraph,
      sceneGraphSelection: e.mirror.sceneGraphSelection,
      library: e.library,
      masterSymbolGUID: e.mirror.selectionProperties.masterSymbolGUID,
      propertiesPanelShouldShowRemoveAutoLayout: e.mirror.selectionProperties.propertiesPanelShouldShowRemoveAutoLayout,
      orgEntity: getCurrentOrgAdminInfo(e),
      org: e.currentUserOrgId ? e.orgById[e.currentUserOrgId] : null,
      user: e.user,
      fillPaints: e.mirror.selectionProperties.fillPaints,
      canSetAsFavicon: n,
      canSetAsFileThumbnail: s,
      canSetAsPageThumbnail: s && no(e),
      canCopyLink: e.mirror.selectionProperties.canCopyLinkToSelection,
      fileVersion: e.fileVersion,
      stateGroupSelectionInfo: e.mirror.selectionProperties.stateGroupSelectionInfo,
      widgetSelectionInfo: e.mirror.selectionProperties.selectedWidgetInfo,
      publishedCanvasWidgetVersions: e.publishedCanvasWidgetVersions,
      embedData: e.mirror.selectionProperties.embedData,
      linkPreviewData: e.mirror.selectionProperties.linkPreviewData,
      pluginRelaunchData: e.mirror.selectionProperties.pluginRelaunchData,
      numSelected: e.mirror.selectionProperties.numSelected,
      accessibilityCategory: e.mirror.selectionProperties.accessibilityCategory,
      accessibilityLabelType: e.mirror.selectionProperties.accessibilityLabelType,
      attributionContextKey: e.sharingAttributionContextKey,
      editorType: a,
      isDevHandoff: a === FEditorType.DevHandoff,
      isLimitedDevMode: isFullscreenDevHandoffView(e.selectedView) && !canAccessFullDevMode(e)
    };
  });
  let x = hasJubileePermissionForDesign();
  let y = Ne();
  let b = LC();
  let C = r8();
  let v = useSendToMakeExperiment();
  let E = useIsSelectedViewFullscreenCooper();
  return jsx(ns, {
    ...e,
    ..._,
    activeTextReviewPlugin: d,
    allSavedPlugins: h.plugins,
    canAccessDevMode: o,
    canAccessDevModeEntryPoint: l,
    dispatch: p,
    editorType: _.editorType,
    fileByKey: s,
    hasAIPermission: x,
    hasFragmentSearchPermission: b,
    hasSlidesAiTextEnabled: y,
    isCooper: E,
    isEligibleForDesignToSites: C,
    isPrototypeCanvasEditUiVisible: u,
    openFile: t,
    orgPrivatePlugins: f,
    orgSavedPlugins: m,
    recentlyUsedPlugins: i,
    shouldShowSendToMake: v,
    spellCheckPreference: g,
    viewportInfo: n
  });
}
ns.displayName = 'SelectionContextMenu';
ns.refreshCache = new _$$O2(dayjs.duration(1, 'day'));
var nd = (e => (e.SINGLE_SLIDE_VIEW = 'single_slide_view', e.COOPER_CAROUSEL = 'cooper_carousel', e))(nd || {});
function nc(e) {
  let t = useSelector(selectOpenFile);
  let i = useDedupedRecentlyUsedPlugins();
  let n = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  let s = useFileByKey();
  let o = useCanAccessFullDevMode();
  let l = useCanAccessDevModeEntryPoint();
  let d = useSelector(e => e.mirror.appModel.activeTextReviewPlugin);
  let u = ng();
  let p = useDispatch();
  let h = useInstalledPluginsAndWidgets();
  let m = h.orgPlugins;
  let f = _$$h2('plugin');
  let g = getObservableOrFallback(EditorPreferencesApi().spellCheckPreference);
  let _ = selectWithShallowEqual(e => {
    let t = Object.keys(e.mirror.sceneGraphSelection);
    let i = t.length === 1 ? getSingletonSceneGraph().get(t[0]) : null;
    let r = i != null && (i.type === 'FRAME' && !i.resizeToFit || i.type === 'SYMBOL' || i.type === 'SECTION');
    let n = e.selectedView.editorType;
    let a = r && !i?.isInstanceSublayer;
    return {
      appModel: e.mirror.appModel,
      publishedPlugins: e.publishedPlugins,
      publishedWidgets: e.publishedWidgets,
      localExtensions: e.localPlugins,
      userCanViewPlugins: canPerformAction(e),
      userCanViewWidgets: isEditorTypeSupportedFor(e),
      userCanRunExtensions: canRunExtensions(e),
      sceneGraph: e.mirror.sceneGraph,
      sceneGraphSelection: e.mirror.sceneGraphSelection,
      library: e.library,
      masterSymbolGUID: e.mirror.selectionProperties.masterSymbolGUID,
      propertiesPanelShouldShowRemoveAutoLayout: e.mirror.selectionProperties.propertiesPanelShouldShowRemoveAutoLayout,
      orgEntity: getCurrentOrgAdminInfo(e),
      org: e.currentUserOrgId ? e.orgById[e.currentUserOrgId] : null,
      user: e.user,
      fillPaints: e.mirror.selectionProperties.fillPaints,
      canSetAsFavicon: !1,
      canSetAsFileThumbnail: a,
      canSetAsPageThumbnail: a && no(e),
      canCopyLink: e.mirror.selectionProperties.canCopyLinkToSelection,
      fileVersion: e.fileVersion,
      stateGroupSelectionInfo: e.mirror.selectionProperties.stateGroupSelectionInfo,
      widgetSelectionInfo: e.mirror.selectionProperties.selectedWidgetInfo,
      publishedCanvasWidgetVersions: e.publishedCanvasWidgetVersions,
      embedData: e.mirror.selectionProperties.embedData,
      linkPreviewData: e.mirror.selectionProperties.linkPreviewData,
      pluginRelaunchData: e.mirror.selectionProperties.pluginRelaunchData,
      numSelected: e.mirror.selectionProperties.numSelected,
      accessibilityCategory: e.mirror.selectionProperties.accessibilityCategory,
      accessibilityLabelType: e.mirror.selectionProperties.accessibilityLabelType,
      attributionContextKey: e.sharingAttributionContextKey,
      editorType: n,
      isDevHandoff: n === FEditorType.DevHandoff,
      isLimitedDevMode: isFullscreenDevHandoffView(e.selectedView) && !canAccessFullDevMode(e)
    };
  });
  let x = hasJubileePermissionForDesign();
  let y = Ne() && e.carouselType === 'single_slide_view';
  let b = LC();
  let C = r8();
  let v = useIsSelectedViewFullscreenCooper();
  return jsx(ns, {
    ...e,
    ..._,
    activeTextReviewPlugin: d,
    allSavedPlugins: h.plugins,
    canAccessDevMode: o,
    canAccessDevModeEntryPoint: l,
    dispatch: p,
    editorType: _.editorType,
    fileByKey: s,
    hasAIPermission: x,
    hasFragmentSearchPermission: b,
    hasSlidesAiTextEnabled: y,
    isBuzzCarousel: e.carouselType === 'cooper_carousel',
    isCooper: v,
    isEligibleForDesignToSites: C,
    isPrototypeCanvasEditUiVisible: u,
    isSingleSlideViewCarousel: e.carouselType === 'single_slide_view',
    openFile: t,
    orgPrivatePlugins: f,
    orgSavedPlugins: m,
    recentlyUsedPlugins: i,
    spellCheckPreference: g,
    viewportInfo: n
  });
}
function nu({
  expandElement: e,
  guid: t,
  ...i
}) {
  let n = useSelector(e => e.mirror.sceneGraphSelection);
  let s = useSelector(e => e.mirror.appModel);
  let o = useSelector(e => e.mirror.sceneGraph);
  let l = useDevModeFocusId() ?? void 0;
  let d = selectCurrentFile();
  let c = useSelector(e => e.mirror.selectionProperties.canCopyLinkToSelection);
  let u = useDeepEqualSceneValue((e, t) => {
    let i = e.get(t);
    return i ? i.canHaveAnnotation : null;
  }, t);
  let p = _$$s4();
  let h = useDispatch();
  let m = BrowserInfo.windows ? 'Ctrl+' : '\u2318';
  let g = [e ? {
    name: 'expand-element',
    callback: e
  } : null, {
    separator: !0
  }, u && p ? {
    name: 'add-annotation',
    action: 'add-annotation'
  } : null, {
    separator: !0
  }, navigator.clipboard && navigator.clipboard.write ? {
    action: 'copy',
    shortcutText: `${m}C`
  } : null, {
    action: 'copy-text'
  }, {
    action: 'copy-as-svg'
  }, {
    action: 'copy-as-png'
  }, {
    action: 'copy-layer-name'
  }, c ? {
    name: 'copy-link',
    args: {
      label: getI18nString('fullscreen.context_menu.copy_link', {
        editorSpecifierString: ''
      })
    },
    callback: () => {
      if (!d) return;
      let e = buildFileUrl({
        file: d,
        nodeId: t,
        isDevHandoff: !0,
        devModeFocusId: l,
        isReadOnly: !0,
        isFigJam: !1,
        attributionContext: null
      });
      h(copyShareLinkOptimistic({
        fileKey: d.key,
        url: e,
        source: ShareContext.FULLSCREEN_CONTEXT_MENU,
        visualBellMessageOverride: void 0
      }));
    }
  } : null];
  let x = i.clientX;
  let y = i.clientY;
  return jsx('div', {
    className: `${Dm}`,
    children: jsx(_$$Q, {
      appModel: s,
      dispatch: h,
      menuItems: g.filter(_$$t4),
      recordingKey: 'codeMenu',
      removeDisabledItems: !0,
      sceneGraph: o,
      sceneGraphSelection: n,
      selectedView: i.selectedView,
      showPoint: !1,
      targetRect: {
        width: 10,
        height: 10,
        left: x + 100,
        top: y,
        right: x + 110,
        bottom: y - 10
      }
    })
  });
}
function np({
  ...e
}) {
  let t = useSelector(e => e.mirror.sceneGraphSelection);
  let i = useSelector(e => e.mirror.appModel);
  let n = useSelector(e => e.mirror.sceneGraph);
  let s = useDispatch();
  let o = BrowserInfo.windows ? 'Ctrl+' : '\u2318';
  let l = [];
  navigator.clipboard && navigator.clipboard.write && l.push({
    name: 'copy',
    shortcutText: `${o}C`,
    callback: () => {
      e.onCopyText();
    }
  });
  let d = e.clientX;
  let c = e.clientY;
  return jsx('div', {
    className: `${Dm}`,
    children: jsx(_$$Q, {
      appModel: i,
      dispatch: s,
      menuItems: l,
      recordingKey: 'codeMenu',
      removeDisabledItems: !0,
      sceneGraph: n,
      sceneGraphSelection: t,
      selectedView: e.selectedView,
      showPoint: !1,
      targetRect: {
        width: 10,
        height: 10,
        left: d + 100,
        top: c,
        right: d + 110,
        bottom: c - 10
      }
    })
  });
}
function nh(e, t, i, r, n, a, s) {
  return e && i && t.commentsEnabled && BrowserInfo.isIpadNative ? [{
    name: 'add-comment',
    callback: () => {
      !function (e, t, i, r, n) {
        if (!e) return;
        let a = {
          x: t,
          y: i - nt
        };
        if (n) {
          n({
            x: a.x,
            y: a.y,
            width: 36.8,
            height: 36.8
          });
        } else {
          let t = applyOffsetToViewport(e, a);
          r(setNewAnchorPosition({
            anchorPosition: t
          }));
          r(activateNewComment());
        }
      }(i, r, n, a, s);
    }
  }, {
    separator: !0
  }] : [];
}
function nm(e, t) {
  let i;
  if (!e) return [];
  let r = !!e?.figma;
  return [...function (e, t) {
    let {
      figma,
      textReviewPlugin
    } = e;
    let n = e => {
      if (!e) return [];
      let i = [];
      let r = e?.suggestions || [];
      let n = e?.rangeStart || 0;
      let a = e?.rangeEnd || 0;
      for (let e of r.slice(0, 3)) {
        i.push({
          action: 'replace-selected-text',
          flags: nf,
          displayText: e,
          recordingKey: `replace-selected-text-${i.length}`,
          args: {
            replacementText: e,
            rangeStart: n,
            rangeEnd: a
          },
          callback() {
            let e = mapFileToProductType({
              editorType: mapEditorTypeToFileType(t)
            });
            trackEventAnalytics('Spell Check Suggestion Clicked', {
              productType: e
            });
          }
        });
      }
      return i;
    };
    let a = n(figma);
    let s = n(textReviewPlugin);
    return a.length || s.length ? !a.length && s.length ? [{
      header: !0,
      name: SH()?.plugin.name || 'Plugin'
    }, ...s] : a.length && !s.length ? a : [...a, {
      name: 'replace-selected-text',
      displayText: SH()?.plugin.name || 'Plugin',
      children: s
    }] : [{
      header: !0,
      flags: nf,
      name: getI18nString('spell_check.no_suggestions_found')
    }];
  }(e, t), {
    separator: !0
  }, ...(r && e?.figma?.rangeText ? [(i = e?.figma?.rangeText, {
    name: 'spell-check-menu-add-word',
    flags: nf,
    callback: async (e, t, r) => {
      try {
        let e = await sendWithRetry.post('/api/spell-check-words', {
          word: i
        });
        if (e.status === 200) {
          let e = await Xw();
          await e.addWords([i]);
          fullscreenValue.triggerAction('redo-spell-checking');
        } else {
          logError('spell_check_add_word_error', 'spell check add word failed http request', {
            responseStatus: e.status,
            responseData: e.data
          }, {
            reportAsSentryError: !0
          });
        }
      } catch (e) {
        e.message.includes('The word provided already exists in your dictionary') || (logger.error(e), logError('spell_check_add_word_error', 'spell check add word error', {
          err: e
        }, {
          reportAsSentryError: !0
        }));
      }
    }
  })] : [])];
}
let nf = ['design', 'whiteboard', 'slides', 'sites', 'cooper'];
function ng() {
  return getObservableValue(getPropertiesPanelTab(), DesignWorkspace.DESIGN) === DesignWorkspace.PROTOTYPE;
}
function n_(e, t) {
  t && e.forEach(e => {
    e && (hasActionOrCallback(e) && (e.source = t, 'submenu' in e && e.submenu && n_(e.submenu, t)), hasChildrenOrDropdown(e) && e.children && n_(e.children, t));
  });
}
function ny({
  clientX: e,
  clientY: t,
  selectedView: i
}) {
  let s = useDispatch();
  let o = useSelector(e => e.mirror.appModel);
  let l = selectCurrentFile();
  let d = useCallback(() => {
    s(lW({
      stringToCopy: buildFileUrl({
        file: l,
        isDevHandoff: !0,
        isDevModeOverview: !0,
        isReadOnly: !0,
        isFigJam: !1,
        attributionContext: null
      }),
      successText: getI18nString('permissions.copy_link_button.visual_bell.copy_summary_link')
    }));
  }, [s, l]);
  let c = [{
    name: 'page-copy-link',
    displayText: getI18nString('dev_handoff.status.copy_summary_link'),
    callback: d
  }];
  return jsx('div', {
    className: `${Dm}`,
    children: jsx(_$$Q, {
      appModel: o,
      menuItems: c,
      dispatch: s,
      selectedView: i,
      showPoint: !1,
      targetRect: {
        width: 10,
        height: 10,
        left: e + 100,
        top: t,
        right: e + 110,
        bottom: t - 10
      },
      removeDisabledItems: !1,
      recordingKey: 'overviewMenu'
    })
  });
}
function nb({
  pageId: e,
  clientX: t,
  clientY: i,
  selectedView: n
}) {
  let s = useDispatch();
  let o = useSelector(e => e.mirror.appModel);
  let l = useDeepEqualSceneValue((e, t) => e.get(t)?.isPageDivider, e);
  let d = [{
    action: 'page-copy-link',
    args: {
      nodeId: e
    },
    disabled: l
  }];
  return jsx('div', {
    className: `${Dm}`,
    children: jsx(_$$Q, {
      appModel: o,
      menuItems: d,
      dispatch: s,
      selectedView: n,
      showPoint: !1,
      targetRect: {
        width: 10,
        height: 10,
        left: t + 100,
        top: i,
        right: t + 110,
        bottom: i - 10
      },
      removeDisabledItems: !1,
      recordingKey: 'pageMenu'
    })
  });
}
function nC(e) {
  let t = useDispatch();
  let i = useSelector(e => e.mirror.appModel);
  let n = e.clientX;
  let s = e.clientY;
  let o = [{
    name: 'redistribute-gradient-stops',
    callback: e.redistributeStops
  }, {
    separator: !0
  }, {
    name: 'delete-gradient-stop',
    callback: e.deleteStop
  }];
  return jsx('div', {
    className: `${Dm}`,
    children: jsx(_$$Q, {
      appModel: i,
      menuItems: o,
      dispatch: t,
      selectedView: e.selectedView,
      showPoint: !1,
      targetRect: {
        width: 10,
        height: 10,
        left: n + 100,
        top: s,
        right: n + 110,
        bottom: s - 10
      },
      removeDisabledItems: !1,
      recordingKey: 'pageMenu'
    })
  });
}
function nj({
  name: e,
  variant: t,
  recordingKey: i,
  onClick: n
}) {
  return jsx(setupThemeContext, {
    brand: 'design',
    mode: 'dark',
    children: jsx('div', {
      className: 'xdqdrvq',
      children: jsx(WithTrackedButtonWide, {
        variant: t,
        recordingKey: i,
        onClick: n,
        children: e
      })
    })
  });
}
function nk({
  targetInViewport: e,
  selectedView: t
}) {
  let i = useDispatch();
  let s = useSelector(e => e.mirror.appModel);
  let l = getSingletonSceneGraph();
  let d = getBasicViewportRect();
  let c = useCanUseDevModeDemoFile();
  let u = useCallback(() => {
    _$$u({
      source: MenuType.RFD_INITIAL_NUDGE
    });
    i(hideDropdownAction());
  }, [i]);
  KV(MenuType.RFD_INITIAL_NUDGE, !0);
  let p = useMemo(() => [{
    name: getI18nString('dev_handoff.linter.menu_title_header'),
    header: !0,
    displayTextClassName: stylex.props(nN.title, nN.header).className
  }, {
    name: getI18nString('dev_handoff.linter.menu_title_subheader'),
    header: !0,
    displayTextClassName: stylex.props(nN.title, nN.subheader).className
  }, {
    render: () => jsx(nj, {
      name: getI18nString('fullscreen_actions.quick_actions.detect-violations'),
      variant: 'primary',
      recordingKey: 'linterDetectViolations',
      onClick: u
    }),
    preventDismissOnSelected: !0,
    preventSelectOnMouseEnter: !0,
    flags: ['design', 'dev_handoff'],
    disabled: !!c
  }, {
    render: () => jsx(nj, {
      name: getI18nString('dev_handoff.linter.menu_skip_button'),
      variant: 'secondary',
      recordingKey: 'skipLinting',
      onClick: () => i(hideDropdownAction())
    }),
    preventDismissOnSelected: !0,
    preventSelectOnMouseEnter: !0,
    flags: ['design', 'dev_handoff'],
    disabled: !!c
  }], [c, i, u]);
  let h = e.origin.x + d.x;
  let m = e.origin.y + d.y;
  let f = {
    left: h,
    top: m,
    right: h + e.size.x,
    bottom: m + e.size.y,
    width: e.size.x,
    height: e.size.y
  };
  return jsx('div', {
    className: Dm,
    children: jsx(_$$Q, {
      appModel: s,
      dispatch: i,
      menuItems: p,
      minWidth: 200,
      recordingKey: 'linterMenu',
      removeDisabledItems: !c,
      sceneGraph: l,
      selectedView: t,
      showPoint: !0,
      targetRect: f
    })
  });
}
let nN = {
  title: {
    maxWidth: 'xb3xe92',
    whiteSpace: 'xeaf4i8',
    color: 'xz16r55',
    $$css: !0
  },
  header: {
    paddingTop: 'x1iorvi4',
    ...textDisplayConfig.textBodyMediumStrong,
    $$css: !0
  },
  subheader: {
    paddingBottom: 'xjkvuk6',
    ...textDisplayConfig.textBodyMedium,
    $$css: !0
  }
};
function nM() {
  let e = useDropdownState();
  let t = useDispatch();
  let i = Gt(e?.data.pluginId, e?.data.triggeredFrom);
  let n = dR(e?.data.pluginId, e?.data.triggeredFrom);
  let s = _$$t5(e?.data.pluginId, i, n);
  if (!e) return null;
  let o = e.data.target.height + e.data.target.width > 0;
  return jsx(_$$j2, {
    showPoint: o,
    items: s,
    onSelectItem: e => {
      e.callback && e.callback('', null, t);
    },
    parentRect: e.data.target,
    dispatch: t,
    lean: o ? 'left' : 'right'
  });
}
let nz = atom('');
function nV({
  onResult: e
}) {
  let [t, i] = useAtomValueAndSetter(nz);
  let [s, o] = useState(!1);
  let l = useRef(null);
  let c = useCallback(e => {
    i(e.target.value);
  }, [i]);
  let u = useSelector(e => isFullscreenDevHandoffView(e.selectedView));
  let p = useCallback(() => {
    e(t);
    i('');
  }, [t, e, i]);
  let h = useCallback(e => {
    switch (e.keyCode) {
      case KeyCodes.SPACE:
      case KeyCodes.ENTER:
        p();
        e.stopPropagation();
    }
  }, [p]);
  useEffect(() => {
    let e = l.current;
    if (e) {
      e.addEventListener('keydown', h);
      return () => {
        e.removeEventListener('keydown', h);
      };
    }
  }, [h]);
  return jsx(setupThemeContext, {
    brand: u ? 'dev-handoff' : 'design',
    mode: 'dark',
    children: jsxs('div', {
      className: 'ready_status_menu_item--menuItemContainer--Uy01z',
      children: [jsx(BigTextInputForwardRef, {
        autoFocus: !0,
        className: 'ready_status_menu_item--textInput--iqTJf',
        maxLength: 1e3,
        onChange: c,
        onCompositionEnd: () => o(!1),
        onCompositionStart: () => o(!0),
        onKeyDown: e => {
          e.stopPropagation();
          e.key !== 'Enter' || e.shiftKey || s || p();
        },
        placeholder: getI18nString('dev_handoff.status.menu_note_placeholder'),
        type: 'textarea',
        value: t
      }), jsx(WithTrackedButtonWide, {
        ref: l,
        variant: 'primary',
        onClick: p,
        recordingKey: 'markReady',
        children: renderI18nText('dev_handoff.status.menu_note_button')
      })]
    })
  });
}
let nW = 'status_context_menu--headerStrong--9G-Jb';
function nY({
  targetInViewport: e,
  nodeId: t,
  selectedView: i
}) {
  let s = useDispatch();
  let u = useSelector(e => e.mirror.appModel);
  let p = getSingletonSceneGraph();
  let h = mJ(t);
  let m = !!h?.hasReadyStatus;
  let f = !!h?.hasCompletedStatus;
  let g = m || f;
  let x = useHasParentOrgId() && !!h?.hasBeenEditedSinceLastStatusChange;
  let y = h?.type === 'SECTION';
  let b = selectCurrentFile();
  let C = _$$U3('status_label_menu');
  let v = getBasicViewportRect();
  let E = useCanAccessFullDevMode();
  let T = useCanAccessDevModeEntryPoint();
  let S = useHasParentOrgId();
  let j = E && S;
  let I = Yh(u, 'set-selection-completed-status');
  let k = Yh(u, 'mark-incomplete');
  let N = qZ();
  let A = trackFileEventWithStore();
  let O = getSelectedEditorType();
  let [, L] = useAtomValueAndSetter(atomM4);
  let R = dh();
  let D = A0(ActionType.READY_FOR_DEV);
  let M = useCanUseDevModeDemoFile();
  let P = useMemo(() => HandoffBindingsCpp.isReadOnly(SessionOrigin.NODE_STATUS), []);
  let F = HandoffBindingsCpp.canEditNodeStatus();
  let B = isDevHandoffEditorType();
  let U = T && P && !E;
  let G = selectWithShallowEqual(e => e.selectedView.view === 'fullscreen' ? {
    ...e.selectedView,
    editorType: FEditorType.DevHandoff,
    focusViewBackNavigation: {
      toEditorType: e.selectedView.editorType,
      toOverview: !1
    },
    devModeFocusId: t,
    overviewBackButtonTargetNodeId: R
  } : e.selectedView);
  let K = useMemo(() => {
    if (!b) return [];
    let e = k ? {
      name: 'status-mark-as-ready',
      callback: () => {
        fullscreenAlias.setNodesReady(!0, [t], 'canvas', null);
        D && R4([t]);
      },
      flags: ['dev_handoff', 'design'],
      disabled: !!M
    } : null;
    let n = I ? {
      name: 'status-mark-as-completed',
      callback: () => {
        fullscreenAlias.setNodesCompleted([t], 'canvas');
      },
      flags: ['dev_handoff', 'design'],
      disabled: !!M
    } : null;
    let a = m ? n : e;
    let d = N ? {
      name: 'detect-violations',
      callback: () => {
        _$$u({
          source: MenuType.RFD_STATUS_MENU
        });
      },
      flags: ['dev_handoff', 'design'],
      featureFlags: ['aip_flower_garden', 'aip_flower_garden_ready_for_dev'],
      disabled: !!M
    } : null;
    let c = [...(d ? [d] : []), ...(a ? [a] : [])];
    let u = {
      name: 'ready-status-copy-dev-link',
      callback: () => {
        let e = buildFileUrl({
          file: b,
          nodeId: t,
          isDevHandoff: !0
        });
        s(copyShareLinkOptimistic({
          fileKey: b.key,
          url: e,
          source: ShareContext.STATUS_DROPDOWN_MENU
        }));
      },
      flags: ['dev_handoff', 'design']
    };
    let p = T ? [{
      name: 'ready-status-open-in-dev-mode',
      callback: () => {
        C('handoff');
      },
      flags: ['design']
    }, u] : [u];
    let h = {
      separator: !0,
      flags: ['design', 'dev_handoff']
    };
    let v = [h, {
      render: () => jsx(iK, {}),
      optionHeight: 32,
      flags: ['design']
    }];
    let E = {
      name: 'status-copy-focus-link',
      callback: () => {
        let e = buildFileUrl({
          file: b,
          nodeId: R,
          isDevHandoff: !0,
          devModeFocusId: i?.devModeFocusId ?? t
        });
        s(copyShareLinkOptimistic({
          fileKey: b.key,
          url: e,
          source: ShareContext.STATUS_DROPDOWN_MENU
        }));
      },
      flags: ['dev_handoff', 'design'],
      alwaysShowCheckMarkOffset: !1
    };
    let w = getFeatureFlags().dt_interactive_inspection_m2 && !y && B;
    let S = j && !fullscreenAlias.getIsExtension() ? w ? [E] : [{
      name: 'enter-dev-mode-focus-view',
      callback: () => {
        A('Dev Mode Canvas Focus Entry Clicked', {
          nodeId: 'devModeFocusId' in G ? G.devModeFocusId : ''
        });
        C('handoff');
        L(O === FEditorType.DevHandoff ? 'dev_mode_canvas' : 'design_canvas');
        s(selectViewAction(G));
      },
      flags: ['design', 'dev_handoff']
    }, E] : p;
    if (!F) return [...S, ...(U ? v : [])];
    let P = [...S, ...(c.length > 0 ? [h, ...c] : []), h, {
      name: 'status-remove',
      callback: () => {
        fullscreenAlias.setNodesReady(!1, [t], 'canvas', null);
      },
      flags: ['dev_handoff', 'design'],
      alwaysShowCheckMarkOffset: !1,
      disabled: !!M
    }, ...(U ? v : [])];
    return g ? x ? [{
      name: 'completed-status-remark-as-ready',
      displayText: f ? getI18nString('dev_handoff.status.menu_title_design_changed_since_completed') : getI18nString('dev_handoff.status.menu_title_design_changed_since_ready'),
      displayTextClassName: nW,
      children: P,
      showDotDotDotButton: !0
    }, {
      render: () => jsx(nV, {
        onResult: e => {
          fullscreenAlias.setNodesReady(!0, [t], 'canvas', e ?? null);
          D && R4([t]);
          s(hideDropdownAction());
        }
      }),
      preventDismissOnSelected: !0,
      preventSelectOnMouseEnter: !0,
      allowClickThrough: !0,
      flags: ['design', 'dev_handoff'],
      disabled: !!M
    }] : P : [{
      header: !0,
      name: getI18nString('dev_handoff.status.menu_title_start_handoff_title'),
      displayTextClassName: nW
    }, {
      render: () => jsx(nV, {
        onResult: e => {
          fullscreenAlias.setNodesReady(!0, [t], 'canvas', e ?? null);
          D && R4([t]);
          s(hideDropdownAction());
        }
      }),
      flags: ['design', 'dev_handoff'],
      disabled: !!M
    }];
  }, [b, I, k, R, m, T, F, U, t, C, s, j, g, x, y, G, i?.devModeFocusId, f, O, B, L, A, D, M, N]);
  let H = e.origin.x + v.x;
  let z = e.origin.y + v.y;
  let V = {
    left: H,
    top: z,
    right: H + e.size.x,
    bottom: z + e.size.y,
    width: e.size.x,
    height: e.size.y
  };
  KV(MenuType.RFD_STATUS_MENU, N && !!getFeatureFlags().aip_flower_garden_ready_for_dev);
  return jsx('div', {
    className: `${Dm}`,
    children: jsx(_$$Q, {
      appModel: u,
      dispatch: s,
      menuItems: K,
      minWidth: 176,
      recordingKey: 'readyStatusMenu',
      removeDisabledItems: !M,
      sceneGraph: p,
      selectedView: i,
      showPoint: !0,
      targetRect: V
    })
  });
}
function nq(e) {
  let t = useDispatch();
  let i = selectWithShallowEqual(e => ({
    appModel: e.mirror.appModel,
    sceneGraph: e.mirror.sceneGraph,
    sceneGraphSelection: e.mirror.sceneGraphSelection
  }));
  let n = selectCurrentFile();
  let s = getResourceDataOrFallback(n?.siteMount);
  return jsx(nX, {
    ...e,
    ...i,
    openFileHasPublishedSiteMount: !!s && s.status === 'published',
    dispatch: t
  });
}
class nX extends PureComponent {
  constructor(e) {
    super(e);
  }
  componentDidMount() {
    CustomFocusHelpers.setExpectingCopyCutEvent(!0);
  }
  componentWillUnmount() {
    CustomFocusHelpers.setExpectingCopyCutEvent(!1);
  }
  contextMenu() {
    let e = this.props.sceneGraphSelection;
    let t = this.props.sceneGraph.getCurrentPage()?.defaultResponsiveSetId;
    let i = !!t && void 0 !== e[t];
    return [{
      action: 'sites-copy-link',
      flags: ['edit'],
      displayText: getI18nString('sites.fullscreen_actions.copy-external-url'),
      disabled: !this.props.openFileHasPublishedSiteMount
    }, {
      action: 'copy-link',
      flags: ['edit'],
      displayText: getI18nString('sites.fullscreen_actions.copy-link')
    }, {
      separator: !0
    }, {
      action: 'rename-selection',
      flags: ['edit'],
      displayText: getI18nString('fullscreen.context_menu.rename')
    }, {
      action: 'duplicate',
      flags: ['edit'],
      displayText: getI18nString('sites.fullscreen_actions.duplicate-webpage')
    }, {
      action: 'copy',
      flags: ['edit']
    }, {
      action: 'delete-selection',
      flags: ['edit'],
      disabled: i,
      displayText: getI18nString('sites.fullscreen_actions.delete-selection')
    }, {
      separator: !0
    }, {
      action: 'set-as-default-responsive-set',
      flags: ['edit']
    }];
  }
  render() {
    let e = this.props.clientX;
    let t = this.props.clientY;
    let i = filterNotNullish(this.contextMenu());
    return jsx('div', {
      className: `${Dm}`,
      children: jsx(_$$Q, {
        appModel: this.props.appModel,
        dispatch: this.props.dispatch,
        isLimitedDevMode: this.props.isLimitedDevMode,
        menuItems: i,
        recordingKey: 'webpageMenu',
        removeDisabledItems: !0,
        sceneGraph: this.props.sceneGraph,
        sceneGraphSelection: this.props.sceneGraphSelection,
        selectedView: this.props.selectedView,
        showPoint: !1,
        targetRect: {
          width: 10,
          height: 10,
          left: e + 100,
          top: t,
          right: e + 110,
          bottom: t - 10
        }
      })
    });
  }
}
function nZ({
  clientX: e,
  clientY: t,
  selectedView: i,
  isLayerLike: n,
  isInteraction: s,
  renameItem: o,
  deleteItem: l,
  selectOnCanvas: d
}) {
  let u = useDispatch();
  let {
    sceneGraph,
    sceneGraphSelection
  } = selectWithShallowEqual(e => ({
    sceneGraph: e.mirror.sceneGraph,
    sceneGraphSelection: e.mirror.sceneGraphSelection
  }));
  let m = useSelector(e => e.mirror.appModel);
  let f = [];
  f.push({
    name: 'rename-selection',
    displayText: getI18nString('fullscreen.context_menu.rename'),
    callback: o,
    shortcutText: ' '
  });
  n && f.push({
    name: 'select-on-canvas',
    displayText: getI18nString('sites.code_layer.context_menu.select_on_canvas'),
    callback: d
  });
  f.push({
    name: n ? 'delete-code-layer' : s ? 'delete-code-interaction' : 'delete-code-file',
    callback: l
  });
  return jsx('div', {
    className: Dm,
    children: jsx(_$$Q, {
      appModel: m,
      dispatch: u,
      menuItems: f,
      recordingKey: 'codeComponentContextMenu',
      removeDisabledItems: !0,
      sceneGraph,
      sceneGraphSelection,
      selectedView: i,
      showPoint: !1,
      targetRect: {
        width: 10,
        height: 10,
        left: e + 100,
        top: t,
        right: e + 110,
        bottom: t - 10
      }
    })
  });
}
nX.displayName = 'WebpageContextMenu';
function n1({
  clientX: e,
  clientY: t,
  selectedView: i,
  targetItem: n,
  paint: s,
  onPaintChange: l
}) {
  let d = useDispatch();
  let {
    appModel,
    sceneGraph,
    sceneGraphSelection
  } = selectWithShallowEqual(e => ({
    appModel: e.mirror.appModel,
    sceneGraph: e.mirror.sceneGraph,
    sceneGraphSelection: e.mirror.sceneGraphSelection
  }));
  let m = useEffectiveThemeId();
  let f = k1(m);
  let g = [];
  n.type === 'DOCUMENT_COLOR' ? g.push({
    name: 'slides-move-to-theme-colors',
    recordingKey: 'moveToThemeColors',
    callback: () => {
      let e = f(n.documentColor);
      e && s && isValidValue(s) && s.color && areColorsEqual(s.color, n.documentColor) && l(_$$FW(e), yesNoTrackingEnum.YES);
    }
  }) : (g.push({
    name: 'slides-edit-theme-color',
    recordingKey: 'edit',
    callback: n.onEdit
  }), g.push({
    name: 'slides-delete-theme-color',
    recordingKey: 'delete',
    callback: () => {
      VariablesBindings?.deleteVariable(n.variableId);
    }
  }));
  return jsx('div', {
    className: Dm,
    children: jsx(_$$Q, {
      appModel,
      dispatch: d,
      menuItems: g,
      recordingKey: 'slidesColorPickerContextMenu',
      removeDisabledItems: !0,
      sceneGraph,
      sceneGraphSelection,
      selectedView: i,
      showPoint: !1,
      targetRect: {
        width: 10,
        height: 10,
        left: e + 100,
        top: t,
        right: e + 110,
        bottom: t - 10
      }
    })
  });
}
let aa = registerModal(({
  sectionId: e,
  initialTemplateId: t,
  initialShelfId: i,
  onConfirm: n,
  onCancel: a
}) => {
  let s = useCurrentFileKey();
  return jsx(TrackingProvider, {
    name: 'section_preset_picker_confirmation_modal_shown',
    properties: {
      fileKey: s,
      sectionId: e,
      initialTemplateCategory: i,
      initialTemplateId: t,
      templateType: _$$n3.HubFile
    },
    children: jsx(ConfirmationModal2, {
      confirmationTitle: jsxs('div', {
        children: [jsx('p', {
          className: el()(cssBuilderInstance.fontSemiBold.font15.$, 'section_preset_picker--alertHeader--oa08R'),
          children: renderI18nText('whiteboard.section_preset_picker.confirmation_modal.header')
        }), renderI18nText('whiteboard.section_preset_picker.confirmation_modal.description')]
      }),
      confirmText: getI18nString('whiteboard.section_preset_picker.confirmation_modal.confirm_text'),
      cancelText: getI18nString('whiteboard.section_preset_picker.confirmation_modal.cancel_text'),
      onConfirm: n,
      onCancel: a
    })
  });
}, 'SectionPresetPickerConfirmationModal');
function as({
  name: e,
  leadingIcon: t,
  onIconClick: i
}) {
  return jsxs('div', {
    className: 'section_preset_picker--headerItemContainer--0R5QO dropdown--_optionBase--z-REc text--fontNeg12--2PWcg text--_fontBase--QdLsd text--_negText--j9g-L',
    children: [jsx('button', {
      className: el()('section_preset_picker--headerIconButton--tDLql section_preset_picker--iconBase--HKG97', {
        'section_preset_picker--hover--GYcQi': i
      }),
      onClick: i,
      children: jsx(SvgComponent, {
        svg: t
      })
    }), jsx('div', {
      className: 'section_preset_picker--headerText--XZRQV section_preset_picker--textContainer--dyEMF text--fontNeg11--StdFq text--_fontBase--QdLsd text--_negText--j9g-L text--fontNeg12--2PWcg text--_fontBase--QdLsd text--_negText--j9g-L',
      children: e
    })]
  });
}
function ac() {
  return jsx('div', {
    className: 'section_preset_picker--loadingSpinnerContainer--OM30n',
    children: jsx(LoadingSpinner, {
      size: 'lg'
    })
  });
}
function au({
  name: e,
  description: t,
  iconUrl: i
}) {
  return jsx(ah, {
    name: e,
    description: t,
    iconUrl: i,
    trailingIcon: jsx(SvgComponent, {
      className: 'section_preset_picker--chevronRight--hORsb',
      svg: _$$A1
    }),
    itemType: 'shelf'
  });
}
function ap({
  name: e,
  description: t,
  iconUrl: i,
  isSelected: n,
  iconBackgroundColor: a
}) {
  return jsx(ah, {
    name: e,
    description: t,
    iconUrl: i,
    trailingIcon: n ? jsx(SvgComponent, {
      svg: _$$A0
    }) : void 0,
    iconBackgroundColor: a,
    itemType: 'template'
  });
}
function ah({
  name: e,
  description: t,
  itemType: i,
  iconUrl: n,
  trailingIcon: a,
  iconBackgroundColor: s
}) {
  return jsxs('div', {
    className: el()({
      'section_preset_picker--shelfItemContainer--KochN section_preset_picker--bodyItemContainer--Ani9M dropdown--option--JMVCh dropdown--_optionBase--z-REc text--fontNeg12--2PWcg text--_fontBase--QdLsd text--_negText--j9g-L': i === 'shelf',
      'section_preset_picker--templateItemContainer--tCRxk section_preset_picker--bodyItemContainer--Ani9M dropdown--option--JMVCh dropdown--_optionBase--z-REc text--fontNeg12--2PWcg text--_fontBase--QdLsd text--_negText--j9g-L': i === 'template'
    }),
    children: [jsx('div', {
      className: el()({
        'section_preset_picker--shelfItemIcon--MASDu section_preset_picker--iconBase--HKG97': i === 'shelf',
        'section_preset_picker--templateItemIcon--eWzYK section_preset_picker--iconBase--HKG97': i === 'template'
      }),
      style: {
        backgroundColor: s
      },
      children: n && jsx('img', {
        src: n,
        alt: getI18nString('whiteboard.section_preset_picker.shelf.thumbnail')
      })
    }), jsxs('div', {
      className: 'section_preset_picker--textContainer--dyEMF text--fontNeg11--StdFq text--_fontBase--QdLsd text--_negText--j9g-L',
      children: [jsx('div', {
        className: 'section_preset_picker--nameText--LS4BG',
        children: e
      }), jsx('div', {
        className: 'section_preset_picker--descriptionText--OCJkN',
        children: t
      })]
    }), a && jsx('div', {
      className: 'section_preset_picker--trailingIcon--X-run section_preset_picker--iconBase--HKG97',
      children: a
    })]
  });
}
let a_ = 'section_preset_item';
let ax = /^Section(\s\d+)?$/;
let ay = parsePxNumber(IuL);
function ab({
  sectionId: e,
  sectionName: t,
  initialShelfId: i,
  initialTemplateId: s,
  showAlertOnSelect: l
}) {
  let c;
  let u;
  let p = useDispatch();
  let h = useCurrentFileKey();
  let m = useAtomWithSubscription(_$$g3);
  let f = m.state === 'hasData' ? m.data : [];
  let g = f.length !== 0;
  let [x, y] = useState(i);
  let [b, C] = useState(!1);
  let [v, E] = useState(!1);
  let T = fG();
  let w = _$$g2();
  let S = Xr(Yq);
  let j = Xr(pn);
  let I = Xr(bj);
  let k = useAtomWithSubscription(_$$oh);
  let N = useAtomWithSubscription(pF);
  let A = useFullscreenReady();
  let O = useAtomWithSubscription(pg);
  let L = function (e, t) {
    let i = getViewportInfo({
      subscribeToUpdates_expensive: !0
    });
    let r = i.zoomScale;
    let a = useMemo(() => {
      let t = getSingletonSceneGraph().get(e);
      if (!t) return null;
      let i = t.absoluteBoundingBox;
      return {
        canvasSpaceSectionTopLeft: t.canvasSpaceSectionTopLeft,
        canvasSpaceSectionOrigin: {
          x: i.x,
          y: i.y
        }
      };
    }, [r, e]);
    if (!a) return null;
    let {
      canvasSpaceSectionTopLeft,
      canvasSpaceSectionOrigin
    } = a;
    let l = viewportToScreen(i, {
      x: canvasSpaceSectionTopLeft.x,
      y: canvasSpaceSectionTopLeft.y
    }, !0);
    let d = {
      x: l.x - 8,
      y: l.y
    };
    let c = viewportToScreen(i, canvasSpaceSectionOrigin, !0);
    let u = Math.max(d.y + i.y, i.y + 8);
    let p = {
      top: u,
      bottom: u + 200,
      height: 200,
      left: 0,
      right: d.x,
      width: 301
    };
    let h = {
      x: centeredValue(t.x, 0, r, 0),
      y: centeredValue(t.y, 0, r, 0)
    };
    return {
      contextMenuRect: p,
      mouseBoundaryRect: {
        x: d.x,
        y: c.y + i.y,
        width: h.x + 8,
        height: h.y
      }
    };
  }(e, N);
  let R = useRef(!1);
  let D = useCallback(() => {
    S();
    j();
    C(!1);
  }, [S, j]);
  useEffect(() => {
    let e = setTimeout(() => {
      E(!0);
    }, 500);
    return () => clearTimeout(e);
  }, []);
  useEffect(() => () => {
    R.current || (S(), j());
  }, [S, j]);
  let M = L?.mouseBoundaryRect;
  if (useEffect(() => {
    if (!b || !M) return;
    let e = debounce(e => {
      let t = document.activeElement?.id ?? '';
      (!M || e.clientX > M.x + M.width || e.clientX < M.x || e.clientY > M.y + M.height || e.clientY < M.y) && !t.includes(a_) && D();
    }, 16);
    window.addEventListener('mousemove', e);
    return () => {
      window.removeEventListener('mousemove', e);
    };
  }, [D, b, M]), !L) {
    return null;
  }
  let {
    contextMenuRect
  } = L;
  let F = (i, r, n) => {
    if (A && h && !O && (C(!1), k?.template.id !== i.template.id)) {
      if (S(), i.template.id === s) {
        j();
        return;
      }
      i.type === _$$n3.HubFile && Zg({
        insert: () => w(i, {
          moveViewportAfterPreview: !1,
          priority: 'user-visible',
          previewManager: {
            nodeType: NodeType.SECTION,
            options: {
              nodeId: e,
              newName: ax.test(t) || r && t === r ? n : null,
              shelfId: i.category ?? '',
              templateId: i.template.id,
              templateName: gY(i)
            }
          }
        }),
        template: i,
        fileKey: h,
        dispatch: p,
        triggeredFrom: 'section-preset',
        userTriggered: !1,
        isPreview: !0
      });
    }
  };
  let B = e => {
    Zg({
      insert: () => I({
        selectTemplateAfterCommit: !1,
        moveViewportAfterCommit: !1,
        priority: 'user-visible',
        editScopeType: zk.USER
      }),
      template: e,
      fileKey: h,
      dispatch: p,
      triggeredFrom: 'section-preset',
      userTriggered: !0
    });
  };
  let U = t => {
    A && h && !O && t.template.id !== s && (R.current = !0, l ? p(showModalHandler({
      type: aa,
      data: {
        sectionId: e,
        initialTemplateId: s,
        initialShelfId: i,
        onConfirm: () => B(t),
        onCancel: () => D()
      }
    })) : B(t));
  };
  let G = x ? f.find(e => e.id === x) : void 0;
  if (G) {
    c = {
      displayText: G.title,
      render: () => jsx(as, {
        name: G.title,
        leadingIcon: _$$A10,
        onIconClick: () => {
          y(null);
          S();
        }
      }),
      preventDismissOnSelected: !0
    };
    let e = i && s ? bO(f, i, s) : null;
    u = G.shelf_content.map((t, i) => {
      let n = {
        type: _$$n3.HubFile,
        template: t,
        category: x
      };
      let {
        name,
        description
      } = T(n);
      let l = stripHtmlTags(description).trim();
      let d = 'client_meta' in t ? JSON.parse(t.client_meta) : {};
      let c = d.preset_picker?.thumbnail_url_dark_bg ?? '';
      return {
        displayText: name,
        render: () => jsx(ap, {
          name,
          description: l,
          iconUrl: c,
          isSelected: s === n.template.id,
          iconBackgroundColor: j3(i)
        }),
        onMouseEnter: () => {
          F(n, e, name);
        },
        callback: () => U(n)
      };
    });
  } else {
    c = {
      displayText: 'Edit section name',
      render: () => jsx(as, {
        name: getI18nString('whiteboard.section_preset_picker.shelf.title'),
        leadingIcon: _$$A11
      }),
      preventDismissOnSelected: !0
    };
    u = f.map(t => ({
      displayText: t.title,
      render: () => jsx(au, {
        name: t.title,
        description: t.description,
        iconUrl: t.shelf_meta.preset_picker?.thumbnail_url
      }),
      preventDismissOnSelected: !0,
      callback: () => {
        trackEventAnalytics('section_preset_picker_category_clicked', {
          fileKey: h,
          sectionId: e,
          selectedCategory: t.id,
          initialTemplateCategory: i,
          initialTemplateId: s
        });
        y(t.id);
        S();
      }
    }));
  }
  if (!g) {
    if (!v) return null;
    u.push({
      displayText: 'Loading',
      render: () => jsx(ac, {}),
      disabled: !0
    });
  }
  return jsx(TrackingProvider, {
    name: 'section_preset_picker_shown',
    enabled: g,
    properties: {
      fileKey: h,
      sectionId: e,
      initialTemplateCategory: i,
      initialTemplateId: s,
      templateType: _$$n3.HubFile
    },
    children: jsx(_$$j2, {
      depth: 0,
      disableDropdownScrollContainer: !0,
      dispatch: p,
      displayOverTarget: !0,
      items: [c, ...u],
      lean: 'left',
      leanPadding: 0,
      minBottomMargin: ay,
      minWidth: 301,
      onMouseLeaveMenu: e => {
        if (e.clientX >= contextMenuRect.right) {
          C(!0);
          return;
        }
        D();
      },
      onSelectItem: e => {
        e.callback && e.callback('', null, p);
      },
      parentRect: contextMenuRect,
      preventZoom: !0,
      recordingKey: a_,
      showPoint: !1
    })
  });
}
function aC(e) {
  let t = useSelector(e => !e.mirror.appModel.isReadOnly);
  let i = selectCurrentFile();
  useSelector(e => i?.team || null);
  let n = useCanPerformAction();
  let s = isEditorTypeSupported();
  let o = useCanRunExtensions();
  let l = e.dropdownShown.type;
  let d = _$$v();
  if (l === K9) {
    let {
      clientX,
      clientY
    } = e.dropdownShown.data;
    return jsx(nl, {
      clientX,
      clientY,
      selectedView: e.selectedView,
      userCanEditFile: t,
      userCanViewPlugins: n,
      userCanViewWidgets: s,
      userCanRunExtensions: o,
      isObjectsPanelMenu: !1
    });
  }
  if (l === wi) {
    let {
      clientX,
      clientY
    } = e.dropdownShown.data;
    return jsx(nl, {
      clientX,
      clientY,
      selectedView: e.selectedView,
      userCanEditFile: t,
      userCanViewPlugins: n,
      userCanViewWidgets: s,
      userCanRunExtensions: o,
      isSelectLayerMenu: !0,
      isObjectsPanelMenu: !1
    });
  }
  if (l === ku) {
    let {
      clientX,
      clientY
    } = e.dropdownShown.data;
    return jsx(nl, {
      clientX,
      clientY,
      selectedView: e.selectedView,
      userCanEditFile: t,
      userCanViewPlugins: n,
      userCanViewWidgets: s,
      userCanRunExtensions: o,
      isObjectsPanelMenu: !1,
      isTextEditModeMenu: !0
    });
  }
  if (l === _$$t2) {
    let {
      clientX,
      clientY,
      axis,
      rulerGuideContextMenuType
    } = e.dropdownShown.data;
    return jsx(nl, {
      axis,
      clientX,
      clientY,
      isObjectsPanelMenu: !1,
      isRulerGuideMenu: !0,
      isTextEditModeMenu: !1,
      rulerGuideContextMenuType,
      selectedView: e.selectedView,
      userCanEditFile: t,
      userCanRunExtensions: o,
      userCanViewPlugins: n,
      userCanViewWidgets: s
    });
  }
  if (l === Rb) {
    let {
      clientX,
      clientY
    } = e.dropdownShown.data;
    return jsx(nl, {
      clientX,
      clientY,
      selectedView: e.selectedView,
      userCanEditFile: t,
      userCanViewPlugins: n,
      userCanViewWidgets: s,
      userCanRunExtensions: o,
      isObjectsPanelMenu: !0
    });
  }
  if (l === W_) {
    let {
      clientX,
      clientY
    } = e.dropdownShown.data;
    return jsx(nn, {
      clientX,
      clientY,
      selectedView: e.selectedView,
      userCanEditFile: t,
      userCanViewPlugins: n,
      userCanViewWidgets: s,
      userCanRunExtensions: o,
      isObjectsPanelMenu: !0,
      ariaLabelledBy: e.ariaLabelledBy
    });
  }
  if (l === LO) {
    return jsx(nM, {});
  } else if (l === SA) {
    let {
      clientX,
      clientY,
      pageId
    } = e.dropdownShown.data;
    return jsx(nb, {
      pageId,
      clientX,
      clientY,
      selectedView: e.selectedView
    });
  } else if (l === bx) {
    let {
      clientX,
      clientY
    } = e.dropdownShown.data;
    return jsx(ny, {
      clientX,
      clientY,
      selectedView: e.selectedView
    });
  } else if (l === d2) {
    let {
      clientX,
      clientY,
      pageIds,
      shouldShowDuplicateOption
    } = e.dropdownShown.data;
    return jsx(_$$W3, {
      pageIds,
      clientX,
      clientY,
      selectedView: e.selectedView,
      shouldShowDuplicateOption
    });
  } else if (l === Z7) {
    let {
      thread,
      pinClientRect
    } = e.dropdownShown.data;
    return jsx(iq, {
      selectedView: e.selectedView,
      thread,
      pinClientRect,
      copyLink: d
    });
  } else if (l === DT) {
    let {
      attachment,
      clientX,
      clientY
    } = e.dropdownShown.data;
    return jsx(iO, {
      attachment,
      selectedView: e.selectedView,
      clientX,
      clientY
    });
  } else if (l === _$$i) {
    let {
      clientX,
      clientY,
      stringToCopy,
      expandElement,
      guid
    } = e.dropdownShown.data;
    return jsx(nu, {
      clientX,
      clientY,
      expandElement,
      guid,
      isObjectsPanelMenu: !0,
      selectedView: e.selectedView,
      stringToCopy,
      userCanEditFile: t,
      userCanRunExtensions: o,
      userCanViewPlugins: n,
      userCanViewWidgets: s
    });
  } else if (l === Sl) {
    let {
      clientX,
      clientY,
      onCopyText
    } = e.dropdownShown.data;
    return jsx(np, {
      clientX,
      clientY,
      selectedView: e.selectedView,
      userCanEditFile: t,
      userCanViewPlugins: n,
      userCanViewWidgets: s,
      userCanRunExtensions: o,
      isObjectsPanelMenu: !0,
      onCopyText
    });
  } else if (l === WJ) {
    let {
      targetInViewport,
      nodeId
    } = e.dropdownShown.data;
    return jsx(nY, {
      targetInViewport,
      selectedView: e.selectedView,
      userCanEditFile: t,
      userCanViewPlugins: n,
      userCanViewWidgets: s,
      userCanRunExtensions: o,
      isObjectsPanelMenu: !0,
      nodeId
    });
  } else if (l === AM) {
    let {
      targetInViewport
    } = e.dropdownShown.data;
    return jsx(nk, {
      targetInViewport,
      selectedView: e.selectedView
    });
  } else if (l === XX) {
    let {
      targetInViewport,
      annotationsCount
    } = e.dropdownShown.data;
    return jsx(iV, {
      targetInViewport,
      annotationsCount,
      selectedView: e.selectedView,
      userCanEditFile: t,
      userCanViewPlugins: n,
      userCanViewWidgets: s,
      userCanRunExtensions: o,
      isObjectsPanelMenu: !0
    });
  } else if (l === _$$si) {
    let {
      sectionId,
      initialShelfId,
      initialTemplateId,
      sectionName,
      showAlertOnSelect
    } = e.dropdownShown.data;
    return jsx(ab, {
      initialShelfId,
      initialTemplateId,
      isObjectsPanelMenu: !0,
      sectionId,
      sectionName,
      selectedView: e.selectedView,
      showAlertOnSelect,
      userCanEditFile: t,
      userCanRunExtensions: o,
      userCanViewPlugins: n,
      userCanViewWidgets: s
    });
  } else if (l === U3) {
    let {
      clientX,
      clientY
    } = e.dropdownShown.data;
    return jsx(nc, {
      clientX,
      clientY,
      selectedView: e.selectedView,
      userCanEditFile: t,
      userCanViewPlugins: n,
      userCanViewWidgets: s,
      userCanRunExtensions: o,
      isObjectsPanelMenu: !1,
      carouselType: nd.SINGLE_SLIDE_VIEW
    });
  } else if (l === kX) {
    let {
      clientX,
      clientY,
      targetItem,
      paint,
      onPaintChange
    } = e.dropdownShown.data;
    return jsx(n1, {
      clientX,
      clientY,
      selectedView: e.selectedView,
      targetItem,
      paint,
      onPaintChange
    });
  } else if (l === OI) {
    let {
      boundingRect,
      targetObjectAnimation
    } = e.dropdownShown.data;
    return jsx(_$$E2, {
      boundingRect,
      selectedView: e.selectedView,
      targetObjectAnimation
    });
  } else if (l === J7) {
    let {
      clientX,
      clientY
    } = e.dropdownShown.data;
    return jsx(nq, {
      clientX,
      clientY,
      selectedView: e.selectedView,
      userCanEditFile: t,
      userCanViewPlugins: n,
      userCanViewWidgets: s,
      userCanRunExtensions: o,
      isObjectsPanelMenu: !1,
      isTextEditModeMenu: !0
    });
  } else if (l === V6) {
    let {
      clientX,
      clientY,
      deleteCollection,
      collectionId
    } = e.dropdownShown.data;
    return jsx(iw, {
      clientX,
      clientY,
      deleteCollection,
      selectedView: e.selectedView,
      collectionId
    });
  } else if (l === Zn) {
    let {
      clientX,
      clientY,
      deleteField,
      duplicateField
    } = e.dropdownShown.data;
    return jsx(iS, {
      clientX,
      clientY,
      deleteField,
      duplicateField,
      selectedView: e.selectedView
    });
  } else if (l === _$$s2) {
    let {
      clientX,
      clientY,
      deleteItemOrItems
    } = e.dropdownShown.data;
    return jsx(ij, {
      clientX,
      clientY,
      deleteItemOrItems,
      selectedView: e.selectedView
    });
  } else if (l === jQ) {
    let {
      clientX,
      clientY,
      deleteItem,
      renameItem,
      isLayerLike,
      isInteraction,
      selectOnCanvas
    } = e.dropdownShown.data;
    return jsx(nZ, {
      clientX,
      clientY,
      isLayerLike,
      isInteraction,
      deleteItem,
      renameItem,
      selectOnCanvas,
      selectedView: e.selectedView
    });
  } else if (l === Vx) {
    let {
      clientX,
      clientY
    } = e.dropdownShown.data;
    return jsx(nc, {
      clientX,
      clientY,
      selectedView: e.selectedView,
      userCanEditFile: t,
      userCanViewPlugins: n,
      userCanViewWidgets: s,
      userCanRunExtensions: o,
      isObjectsPanelMenu: !1,
      carouselType: nd.COOPER_CAROUSEL
    });
  } else if (l === Vl) {
    let {
      clientX,
      clientY,
      deleteStop,
      redistributeStops
    } = e.dropdownShown.data;
    return jsx(nC, {
      clientX,
      clientY,
      deleteStop,
      redistributeStops,
      selectedView: e.selectedView
    });
  }
  return null;
}
function aX(e) {
  return jsx('div', {
    children: getActionOrName(e.token.content)
  });
}
function aZ(e) {
  let t = useSelector(e => e.mirror.appModel.keyboardShortcuts);
  return jsx('div', {
    style: styleBuilderInstance.colorText.px14.$,
    className: e.isSelected ? 'action_autocomplete_input--rowSelected--62Uvp autocomplete_permissions--contactRowSelected--xYJKX autocomplete_permissions--contactRow--DRMiv' : 'action_autocomplete_input--row--HRsbZ autocomplete_permissions--contactRow--DRMiv',
    children: jsxs(AutoLayout, {
      children: [jsx(TextWithTruncation, {
        children: EG(e.searchResult)
      }), jsx(Spacer, {}), jsx(TextWithTruncation, {
        children: e.searchResult.shortcutText ?? c1(t, getActionOrName(e.searchResult))
      })]
    })
  });
}
function aQ({
  onAutocompleteChange: e
}) {
  let t = FX();
  let i = c4();
  let o = useSelector(e => e.mirror.appModel);
  let l = useSelector(e => e.selectedView);
  let d = useSelector(e => e.user?.locale);
  let c = _$$M2({
    isReadOnly: o.isReadOnly,
    extensionMenuProps: i,
    includeDisabled: !0
  });
  let u = new xm(o, l, [...t, ...c], {
    includeDisabled: !0,
    acceptsUnicode: d === 'ja'
  });
  let [p, h] = useState(_$$Rs());
  return jsx(_$$P4, {
    autoFocus: !0,
    autocompleteResultsClassName: cssBuilderInstance.maxW300.$,
    autocomplete: p,
    placeholder: getI18nString('fullscreen_actions.search_menus_commands_and_plugins'),
    onChange: t => {
      h(t);
      e(t);
    },
    validateToken: noop,
    getSearchResults: e => u.searchIncludeKey(o, e.inputValue).filter(([e, t]) => !t.parametersRequired).map(([e, t]) => ({
      id: `${getActionOrName(t)}-${t.pluginId}-${EG(t)}`,
      searchKey: e,
      ...t,
      disabled: !1
    })),
    SearchResultComponent: aZ,
    TokenComponent: aX
  });
}
let a0 = 'keyboard_shortcut_panel--tab--9t5Mb ellipsis--ellipsis--Tjyfa';
let a1 = 'keyboard_shortcut_panel--thinnerTab--lUwLL';
let a2 = 'keyboard_shortcut_panel--tabContents--UBIdJ';
let a3 = 'keyboard_shortcut_panel--contents--8ae0D';
let a5 = 'keyboard_shortcut_panel--column--lHvov';
let a4 = 'keyboard_shortcut_panel--shortcutRowUsed--COYQU keyboard_shortcut_panel--shortcutRow--6AogW';
let a6 = 'keyboard_shortcut_panel--keyBinding--wvHKI';
let a7 = '\u{1F310}';
var a8 = (e => (e[e.NOT_PRESSED = 0] = 'NOT_PRESSED', e[e.PRESSED = 1] = 'PRESSED', e[e.PRESSED_FIRST_TIME = 2] = 'PRESSED_FIRST_TIME', e[e.HELD = 3] = 'HELD', e[e.COMPLETED_TAB_ANIMATION = 4] = 'COMPLETED_TAB_ANIMATION', e))(a8 || {});
var a9 = (e => (e[e.FIGJAM = 0] = 'FIGJAM', e[e.DESIGN = 1] = 'DESIGN', e[e.DEV_MODE = 2] = 'DEV_MODE', e[e.SLIDES = 3] = 'SLIDES', e[e.SITES = 4] = 'SITES', e[e.FIGMAKE = 5] = 'FIGMAKE', e[e.COOPER = 6] = 'COOPER', e[e.ILLUSTRATION = 7] = 'ILLUSTRATION', e))(a9 || {});
function se(e, t) {
  return t[e] ? t[e].map(e => e.text).filter(e => !e.toLowerCase().includes('num')).map(sr.splitStringIntoKeys) : null;
}
function st(e, t) {
  let i = e.map(e => {
    let i = se(e, t);
    return i == null || i.length === 0 ? null : i[0];
  }).filter(isNotNullish);
  if (i.length === 0) return null;
  if (i.length === 1) {
    logger.warn('combineShortcuts: Could not find bindings to combine. \nactions: %o', e);
    return null;
  }
  let r = i[0].slice(0, -1);
  let n = i.map(e => e.length - 1 === r.length && e.slice(0, -1).filter((e, t) => e === r[t]).length === r.length ? e.slice(-1)[0] : null).filter(isNotNullish);
  return n.length !== e.length ? (logger.warn('combineShortcuts: Bindings length mismatch. \nactions: %o, shortcuts %s and %s', e, i[0].join(''), i[1].join('')), null) : [[...r, n]];
}
let si = class e extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      pressed: 0,
      animationDelays: this.calculateAnimationDelays(this.props)
    };
    this.prettifyKeyLabel = e => e.replace(/\u23B5/, getI18nString('whiteboard.keyboard_shortcuts.key_label.space')).replace(/\u21E5/, `\u21E5 ${getI18nString('whiteboard.keyboard_shortcuts.key_label.tab')}`).replace(/\u21DE/, `\u21DE ${getI18nString('whiteboard.keyboard_shortcuts.key_label.pg_up')}`).replace(/\u21DF/, `\u21DF ${getI18nString('whiteboard.keyboard_shortcuts.key_label.pg_dn')}`).replace(/\u2196/, `\u2196 ${getI18nString('whiteboard.keyboard_shortcuts.key_label.home')}`).replace(/\u2198/, `\u2198 ${getI18nString('whiteboard.keyboard_shortcuts.key_label.end')}`).replace(/\u238B/, `\u238B ${getI18nString('whiteboard.keyboard_shortcuts.key_label.esc')}`).replace(/\u21A9/, `\u21A9 ${getI18nString('whiteboard.keyboard_shortcuts.key_label.enter')}`);
    this.getTooltipText = e => {
      switch (e) {
        case '\u2318':
          return getI18nString('whiteboard.keyboard_shortcuts.tooltip.command');
        case '\u21E7':
          return getI18nString('whiteboard.keyboard_shortcuts.tooltip.shift');
        case '\u2325':
          return getI18nString('whiteboard.keyboard_shortcuts.tooltip.option_alt');
        case '\u2303':
          return getI18nString('whiteboard.keyboard_shortcuts.tooltip.control');
        case '\u232B':
          return getI18nString('whiteboard.keyboard_shortcuts.tooltip.backspace');
        case '\u2190':
          return getI18nString('whiteboard.keyboard_shortcuts.key_label.left');
        case '\u2192':
          return getI18nString('whiteboard.keyboard_shortcuts.key_label.right');
        default:
          return null;
      }
    };
    this.renderCharKeyBox = (e, t) => {
      let i = this.prettifyKeyLabel(e);
      let n = i.startsWith(a7);
      let a = i.length > 1 && !n ? 'keyboard_shortcut_panel--multiCharKeyBox--LZwGA keyboard_shortcut_panel--shortcutBox--9Ltqp' : 'keyboard_shortcut_panel--singleCharKeyBox--DD6s1 keyboard_shortcut_panel--shortcutBox--9Ltqp';
      let s = this.state.animationDelays[t] ? {
        animationDelay: `${this.state.animationDelays[t]}ms`
      } : {};
      return jsx('span', {
        'className': a,
        'style': s,
        'data-tooltip-show-immediately': 'true',
        'data-tooltip-show-above': 'true',
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': this.getTooltipText(e),
        'children': i
      }, i + t);
    };
    this.renderKeyBindings = e => {
      let t = [];
      let i = 0;
      e.forEach(e => {
        if (typeof e == 'string') {
          t.push(this.renderCharKeyBox(e, i));
          i++;
        } else {
          let n = this.renderCharKeyBox(e[0], i);
          let a = this.renderCharKeyBox(e[1], i + 1);
          t.push(n);
          t.push(jsx('div', {
            className: 'keyboard_shortcut_panel--and---b-w4',
            children: renderI18nText('whiteboard.keyboard_shortcuts.and')
          }, `${e[0]}-${e[1]}`));
          t.push(a);
          i += 2;
        }
      });
      return jsx('span', {
        className: a6,
        children: t
      });
    };
    this.triggerUnpressed = () => {
      this.setState({
        pressed: 0
      });
    };
    this.triggerPressed = () => {
      this.state.pressed !== 4 && this.state.pressed !== 2 && (clearTimeout(this.pressedTimeout), this.pressedTimeout = setTimeout(() => this.triggerUnpressed(), 500), this.state.pressed !== 3 && (this.state.pressed === 1 ? this.setState({
        pressed: 3
      }) : this.setState({
        pressed: 1
      })));
    };
    this.triggerPressedFirstTime = () => {
      this.setState({
        pressed: 2
      });
      clearTimeout(this.pressedTimeout);
      setTimeout(() => this.triggerUnpressed(), 1200);
    };
    this.triggerCompletedTab = () => {
      this.setState({
        pressed: 4
      });
      clearTimeout(this.pressedTimeout);
      setTimeout(() => this.triggerUnpressed(), 4e3);
    };
  }
  static shortcutUsedCount(e, t) {
    if (t == null) return 0;
    switch (e) {
      case 'align-centers':
        return Math.min(t['align-horizontal-center'] || 0, t['align-vertical-center'] || 0);
      case 'align-left-right':
        return Math.min(t['align-left'] || 0, t['align-right'] || 0);
      case 'align-top-bottom':
        return Math.min(t['align-top'] || 0, t['align-bottom'] || 0);
      case 'distribute-spacing':
        return Math.min(t['distribute-horizontal-spacing'] || 0, t['distribute-vertical-spacing'] || 0);
      case 'text-font-size-adjust':
        return Math.min(t['text-font-size-increase'] || 0, t['text-font-size-decrease'] || 0);
      case 'text-letter-spacing-adjust':
        return Math.min(t['text-letter-spacing-increase'] || 0, t['text-letter-spacing-decrease'] || 0);
      case 'text-indent-and-dedent-list':
        return Math.min(t['text-indent-list'] || 0, t['text-dedent-list'] || 0);
      case 'text-line-height-adjust':
        return Math.min(t['text-line-height-increase'] || 0, t['text-line-height-decrease'] || 0);
      case 'bold-and-italic':
        return Math.min(t['toggle-bold'] || 0, t['text-toggle-italic'] || 0);
      case 'text-bold-adjust':
        return Math.min(t['text-bold-increase'] || 0, t['text-bold-decrease'] || 0);
      case 'bulleted-and-numbered-list':
        return Math.min(t['text-toggle-unordered-list'] || 0, t['text-toggle-ordered-list'] || 0);
      default:
        return t[e] || 0;
    }
  }
  calculateAnimationDelays(e) {
    let t = [];
    for (let i = 0; i < 5; i++) {
      let i = 0;
      e.allTabsCompletedAnimation ? i = -Math.floor(2e3 * Math.random()) : e.tabCompletedFirstTimeAnimation && e.tabCompletedAnimationKeyPosition != null && (i = 110 * Math.abs(e.keyPosition - e.tabCompletedAnimationKeyPosition) + 100);
      t.push(i);
    }
    return t;
  }
  UNSAFE_componentWillReceiveProps(t) {
    let i = e.shortcutUsedCount(this.props.shortcutKey, this.props.usedKeyboardShortcuts);
    let r = e.shortcutUsedCount(t.shortcutKey, t.usedKeyboardShortcuts);
    if (this.props.allTabsCompletedAnimation !== t.allTabsCompletedAnimation || this.props.tabCompletedFirstTimeAnimation !== t.tabCompletedFirstTimeAnimation) {
      let e = this.calculateAnimationDelays(t);
      this.setState({
        animationDelays: e
      });
    }
    t.tabCompletedFirstTimeAnimation && !this.props.tabCompletedAnimation && t.tabCompletedAnimation ? this.triggerCompletedTab() : i !== r && this.props.shortcutKey === t.shortcutKey && (r === 1 ? this.triggerPressedFirstTime() : this.triggerPressed());
  }
  render() {
    let t;
    let i;
    try {
      t = this.props.customName ? this.props.customName : this.props.displayName ? formatI18nMessage(this.props.displayName) : formatI18nMessage(this.props.shortcutKey);
    } catch (e) {
      console.error(e);
      t = this.props.shortcutKey;
    }
    let n = e.shortcutUsedCount(this.props.shortcutKey, this.props.usedKeyboardShortcuts) > 0;
    let a = e.keybindingsForShortcut(this.props.shortcutKey, this.props.useNumbersForOpacity, this.props.appModelKeyboardShortcuts);
    let s = null;
    a && (s = this.renderKeyBindings(a[0]));
    i = this.props.allTabsCompletedAnimation ? 'keyboard_shortcut_panel--shortcutRowCompletedAllTabs--J5zY3 keyboard_shortcut_panel--shortcutRowUsed--COYQU keyboard_shortcut_panel--shortcutRow--6AogW' : this.state.pressed === 4 ? 'keyboard_shortcut_panel--shortcutRowCompletedTab--F1jL4 keyboard_shortcut_panel--shortcutRowUsed--COYQU keyboard_shortcut_panel--shortcutRow--6AogW' : this.state.pressed === 2 ? 'keyboard_shortcut_panel--shortcutRowPressedFirstTime--DZrX7 keyboard_shortcut_panel--shortcutRow--6AogW' : this.state.pressed === 3 ? 'keyboard_shortcut_panel--shortcutRowHeld--XwsHX keyboard_shortcut_panel--shortcutRowUsed--COYQU keyboard_shortcut_panel--shortcutRow--6AogW' : this.state.pressed === 1 ? 'keyboard_shortcut_panel--shortcutRowPressed--eQ-Vp keyboard_shortcut_panel--shortcutRow--6AogW' : n ? a4 : 'keyboard_shortcut_panel--shortcutRow--6AogW';
    return a && jsxs('tr', {
      className: i,
      children: [this.props.icon && (this.props.editorType === FEditorType.Design || this.props.editorType === FEditorType.Illustration || this.props.editorType === FEditorType.DevHandoff) && jsx('td', {
        className: 'keyboard_shortcut_panel--shortcutIconCanvas---wufa',
        children: jsx(SvgComponent, {
          svg: this.props.icon,
          className: 'keyboard_shortcut_panel--shortcutIcon--zS4rz'
        })
      }), jsxs('td', {
        className: 'keyboard_shortcut_panel--shortcutName--Q5dhd',
        children: [t, this.props.usage && jsx('div', {
          className: 'keyboard_shortcut_panel--usage--qzeP9',
          children: this.props.usage
        })]
      }), jsx('td', {
        className: 'keyboard_shortcut_panel--keyBindings--8LxQV',
        children: s
      })]
    }, this.props.shortcutKey);
  }
};
si.displayName = 'Shortcut';
si.specialKeys = ['Backspace', 'Delete', 'Down', 'End', 'Enter', 'Home', 'Left', 'Page Down', 'Page Up', 'Right', 'Tab', 'Up', 'F6'];
si.getLocalizedSpecialKey = e => {
  switch (e) {
    case 'Backspace':
      return getI18nString('whiteboard.keyboard_shortcuts.key_label.backspace');
    case 'Delete':
      return getI18nString('whiteboard.keyboard_shortcuts.key_label.delete');
    case 'Down':
      return getI18nString('whiteboard.keyboard_shortcuts.key_label.down');
    case 'End':
      return getI18nString('whiteboard.keyboard_shortcuts.key_label.end');
    case 'Enter':
      return getI18nString('whiteboard.keyboard_shortcuts.key_label.enter');
    case 'Home':
      return getI18nString('whiteboard.keyboard_shortcuts.key_label.home');
    case 'Left':
      return getI18nString('whiteboard.keyboard_shortcuts.key_label.left');
    case 'Page Down':
      return getI18nString('whiteboard.keyboard_shortcuts.key_label.page_down');
    case 'Page Up':
      return getI18nString('whiteboard.keyboard_shortcuts.key_label.page_up');
    case 'Right':
      return getI18nString('whiteboard.keyboard_shortcuts.key_label.right');
    case 'Tab':
      return getI18nString('whiteboard.keyboard_shortcuts.key_label.tab');
    case 'Up':
      return getI18nString('whiteboard.keyboard_shortcuts.key_label.up');
    case 'F6':
      return getI18nString('whiteboard.keyboard_shortcuts.key_label.f6');
  }
};
si.splitStringIntoKeys = e => {
  let t = [];
  let i = browserCapabilities.isApple();
  for (; e.length > 0;) {
    if (e.startsWith('Ctrl+')) {
      t.push(getI18nString('whiteboard.keyboard_shortcuts.key_label.ctrl'));
      e = e.slice(5);
    } else if (e.startsWith('Shift+')) {
      t.push(getI18nString('whiteboard.keyboard_shortcuts.key_label.shift'));
      e = e.slice(6);
    } else if (e.startsWith('Alt+')) {
      t.push(getI18nString('whiteboard.keyboard_shortcuts.key_label.alt'));
      e = e.slice(4);
    } else if (e.startsWith('Win+')) {
      t.push(getI18nString('whiteboard.keyboard_shortcuts.key_label.win'));
      e = e.slice(4);
    } else if (i && e.startsWith('Page Up')) {
      t.push(a7);
      t.push('\u2191');
      e = e.slice(7);
    } else if (i && e.startsWith('Page Down')) {
      t.push(a7);
      t.push('\u2193');
      e = e.slice(9);
    } else {
      let i = !1;
      for (let r = 0; r < si.specialKeys.length; r++) {
        let n = si.specialKeys[r];
        if (e.startsWith(n)) {
          t.push(si.getLocalizedSpecialKey(n));
          e = e.slice(n.length);
          i = !0;
          break;
        }
      }
      i || (t.push(e[0]), e = e.slice(1));
    }
  }
  return t;
};
si.keybindingsForShortcut = (e, t, i) => {
  if (!i) return null;
  let r = function (e, t) {
    let i = browserCapabilities.isApple();
    let r = i ? '\u2325' : BrowserInfo.chromeos ? getI18nString('whiteboard.keyboard_shortcuts.key_label.search') : getI18nString('whiteboard.keyboard_shortcuts.key_label.alt');
    let n = i ? '\u2318' : getI18nString('whiteboard.keyboard_shortcuts.key_label.ctrl');
    let a = i ? '\u21A9' : getI18nString('whiteboard.keyboard_shortcuts.key_label.enter');
    let s = i ? '\u238B' : getI18nString('whiteboard.keyboard_shortcuts.key_label.esc');
    let o = i ? '\u21E7' : getI18nString('whiteboard.keyboard_shortcuts.key_label.shift');
    let l = getI18nString('whiteboard.keyboard_shortcuts.key_label.drag');
    let d = getI18nString('whiteboard.keyboard_shortcuts.key_label.click');
    let c = getI18nString('whiteboard.keyboard_shortcuts.key_label.dbl_click');
    let u = Object.entries({
      'align-left-right': st(['align-left', 'align-right'], e),
      'align-top-bottom': st(['align-top', 'align-bottom'], e),
      'align-centers': st(['align-horizontal-center', 'align-vertical-center'], e),
      'copy': [[n, 'C']],
      'center-resize-drag': [[r]],
      'crop-image': [[r, c]],
      'cut': [[n, 'X']],
      'deep-select': [[n, d]],
      'deep-select-rectangle': [[n, l]],
      'deselect-all': [[s]],
      'duplicate': [[r]],
      'ignore-constraints': [[n]],
      'measure-to-selection': [[r]],
      'move-while-resizing': [['\u23B5']],
      'pan': [['\u23B5', l]],
      'paste': [[n, 'V']],
      'request-edit-mode': [[a]],
      'resize-proportionally': [[o]],
      'swap-instance': [[r]],
      'text-letter-spacing-adjust': st(['text-letter-spacing-decrease', 'text-letter-spacing-increase'], e),
      'text-line-height-adjust': st(['text-line-height-decrease', 'text-line-height-increase'], e),
      'text-font-size-adjust': st(['text-font-size-decrease', 'text-font-size-increase'], e),
      'text-bold-adjust': st(['text-bold-decrease', 'text-bold-increase'], e),
      'bold-and-italic': st(['toggle-bold', 'text-toggle-italic'], e),
      'stamp-or-reaction-wheel': [['E']],
      'set-tool-section': [['F']],
      'bulleted-and-numbered-list': st(['text-toggle-ordered-list', 'text-toggle-unordered-list'], e),
      'distribute-spacing': st(['distribute-horizontal-spacing', 'distribute-vertical-spacing'], e),
      'text-indent-and-dedent-list': st(['text-indent-list', 'text-dedent-list'], e),
      'straight-connector': [[o, l]],
      'edit-text': [[a]],
      'set-opacity-00': t ? [['0', '0']] : [[o, '0', '0']],
      'quick-create-immutable-frame': se('quick-create', e),
      'stamp-on-node': se('quick-create', e)
    }).reduce((e, [t, i]) => (isNotNullish(i) && (e[t] = i), e), {});
    return i ? {
      ...u,
      'bend-tool': [['\u2318']]
    } : u;
  }(i, t);
  return e in i ? se(e, i) : e in r ? r[e] : null;
};
let sr = si;
function sn() {
  let [e, t] = useState({
    step: 'NOT_CURRENTLY_ADDING'
  });
  let i = getCurrentFileType();
  let s = _$$Zj();
  let l = useSelector(e => e.usedKeyboardShortcuts);
  let d = useSelector(e => e.mirror.appModel.keyboardShortcuts);
  let c = e.step === 'ADDING_WAITING_FOR_KEY_REGISTRATION' && e.menuItem;
  let u = createRef();
  let p = useCallback(i => {
    i.stopPropagation();
    i.preventDefault();
    let r = function (e) {
      let t = getCurrentKeyboardLayout();
      let i = [];
      if (e.metaKey && i.push('Meta'), e.altKey && i.push('Alt'), e.shiftKey && i.push('Shift'), e.ctrlKey && i.push('Control'), e.code === 'MetaRight' || e.code === 'MetaLeft' || e.code === 'ShiftRight' || e.code === 'ShiftLeft' || e.code === 'ControlRight' || e.code === 'ControlLeft' || e.code === 'AltRight' || e.code === 'AltLeft') {
        ;
      } else if (t === KeyboardLayout.UNKNOWN) {
        let t = Fullscreen.stringKeyFromWebEventKeycode(e.keyCode);
        i.push(t);
      } else {
        let r = Fullscreen.stringKeyFromWebEventCode(e.code, t);
        i.push(r);
      }
      return Gm.getKeyboardShortcutFromText(i.join('+'), null);
    }(i);
    let n = r && r.key === 'Escape';
    if (r && e.step === 'ADDING_WAITING_FOR_KEY_REGISTRATION' && c && !n) {
      let e;
      let t;
      if (r.key === 'None') return;
      c.action ? (e = FullscreenMode.FULLSCREEN, t = c.action) : (e = FullscreenMode.NON_FULLSCREEN, t = c.searchKey);
      L3(e, t, _$$t6(r));
    }
    t({
      step: 'NOT_CURRENTLY_ADDING'
    });
  }, [c, e.step]);
  useEffect(() => {
    e.step === 'ADDING_WAITING_FOR_KEY_REGISTRATION' && u.current?.focus();
  }, [u, e.step]);
  return jsxs('div', {
    className: a3,
    children: [jsx('div', {
      className: a5,
      children: jsxs(AutoLayout, {
        direction: 'vertical',
        height: 'fill-parent',
        padding: {
          vertical: 10
        },
        children: [jsx(TextWithTruncation, {
          color: 'menu',
          fontSize: 14,
          children: renderI18nText('keyboard_settings.custom_keyboard_shortcuts')
        }), jsx(Button, {
          variant: 'primary',
          iconPrefix: jsx(_$$x4, {}),
          onClick: () => t({
            step: 'ADDING_WAITING_FOR_ACTION_INPUT'
          }),
          children: jsx(TextWithTruncation, {
            children: renderI18nText('keyboard_settings.custom_keyboard_shortcuts.add')
          })
        }), jsx(Spacer, {}), jsx(Badge, {
          className: cssBuilderInstance.mt4.$,
          text: 'Internal only - #feat-custom-keyboard-shortcuts',
          color: BadgeColor.WARNING,
          onClick: () => openWindow('https://figma.slack.com/archives/C055MQJ2E5P', '_blank')
        })]
      })
    }), jsxs('div', {
      className: a5,
      style: styleBuilderInstance.pt32.overflowYScroll.add({
        maxHeight: '162px'
      }).$,
      children: [Object.values(_$$Uc()).map(({
        action: e,
        type: t
      }) => jsxs(AutoLayout, {
        width: 'fill-parent',
        height: 'hug-contents',
        children: [jsx(sr, {
          customName: t === 'FULLSCREEN' ? void 0 : e,
          shortcutKey: e,
          editorType: mapFileTypeToEditorType(i),
          keyPosition: 0,
          useNumbersForOpacity: s,
          usedKeyboardShortcuts: l,
          appModelKeyboardShortcuts: d
        }), jsx('span', {
          className: 'keyboard_shortcut_panel_custom_tab--deleteButton--xf9nN',
          children: jsx(IconButton, {
            'onClick': () => C4(t === 'FULLSCREEN' ? FullscreenMode.FULLSCREEN : FullscreenMode.NON_FULLSCREEN, e),
            'aria-label': getI18nString('whiteboard.keyboard_shortcuts.delete.shortcut'),
            'htmlAttributes': {
              'data-tooltip-type': KindEnum.TEXT,
              'data-tooltip': getI18nString('whiteboard.keyboard_shortcuts.delete.shortcut')
            },
            'children': jsx(_$$O3, {})
          })
        })]
      }, `custom-shortcuts-${e}`)), e.step === 'ADDING_WAITING_FOR_ACTION_INPUT' && jsx('div', {
        className: cssBuilderInstance.relative.mt4.$,
        children: jsx(aQ, {
          onAutocompleteChange: e => {
            let i = e.tokens[0];
            i && t({
              step: 'ADDING_WAITING_FOR_KEY_REGISTRATION',
              menuItem: i.content
            });
          }
        })
      }), e.step === 'ADDING_WAITING_FOR_KEY_REGISTRATION' && jsxs(AutoLayout, {
        height: 'hug-contents',
        verticalAlignItems: 'center',
        children: [jsx(TextWithTruncation, {
          color: 'menu',
          children: EG(e.menuItem)
        }), jsx(Spacer, {}), jsx('div', {
          className: cssBuilderInstance.py4.$,
          children: jsx('div', {
            className: el()(a4, a6),
            children: jsx(Button, {
              ref: u,
              variant: 'primary',
              htmlAttributes: {
                onKeyDown: p
              },
              children: jsx(TextWithTruncation, {
                children: renderI18nText('keyboard_settings.custom_keyboard_shortcuts.press_key')
              })
            })
          })
        })]
      }), jsx('div', {
        style: styleBuilderInstance.h150.$
      })]
    })]
  });
}
function sd(e) {
  return {
    [_$$J5.ESSENTIAL]: {
      displayNameText: getI18nString('whiteboard.keyboard_shortcuts.tab.essential'),
      includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SLIDES],
      columns: [[{
        shortcuts: [{
          shortcutKey: 'toggle-ui',
          usage: renderI18nText('fullscreen.keyboard_shortcuts_panel.toggle_ui_description'),
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }, {
          shortcutKey: 'create-slide',
          usage: renderI18nText('slides.keyboard_shortcuts.create-slide-description'),
          includeInEditorType: a9.SLIDES
        }]
      }], [{
        shortcuts: [e ? {
          shortcutKey: 'component-insert',
          displayName: 'component-insert-display-name-ui3',
          usage: renderI18nText('fullscreen.keyboard_shortcuts_panel.component_insert_description'),
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        } : {
          shortcutKey: 'toggle-dropper',
          usage: renderI18nText('fullscreen.keyboard_shortcuts_panel.toggle_dropper_description'),
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }, {
          shortcutKey: 'toggle-grid-focus-view',
          usage: renderI18nText('slides.keyboard_shortcuts.toggle-slide-view-description'),
          includeInEditorType: a9.SLIDES
        }]
      }], [{
        shortcuts: [{
          shortcutKey: 'toggle-menu',
          displayName: gn() ? 'toggle-actions-menu' : 'toggle-menu',
          usage: renderI18nText('fullscreen.keyboard_shortcuts_panel.toggle_menu_description'),
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SLIDES]
        }]
      }]]
    },
    [_$$J5.TOOLS]: {
      displayNameText: getI18nString('whiteboard.keyboard_shortcuts.tab.tools'),
      columns: [[{
        shortcuts: [{
          shortcutKey: 'set-tool-default',
          displayName: 'set-tool-default-desc-figma',
          icon: SD(DesignGraphElements.SELECT),
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SITES, a9.SLIDES, a9.COOPER]
        }, {
          shortcutKey: 'set-tool-sites-responsive-set',
          displayName: 'set-tool-sites-responsive-set',
          icon: SD(DesignGraphElements.SITES_RESPONSIVE_SET),
          includeInEditorType: a9.SITES
        }, {
          shortcutKey: 'set-tool-default-figjam',
          displayName: 'set-tool-default-desc-figjam',
          icon: SD(DesignGraphElements.SELECT),
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'set-tool-frame',
          displayName: 'set-tool-frame-desc',
          icon: SD(DesignGraphElements.FRAME),
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SITES]
        }, {
          shortcutKey: 'set-tool-pen',
          displayName: 'set-tool-pen-desc',
          icon: SD(DesignGraphElements.VECTOR_PEN),
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }, {
          shortcutKey: 'set-tool-sticky',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'set-tool-connector-straight',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'set-tool-connector-elbowed',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'set-tool-pencil',
          displayName: 'set-tool-pencil-desc',
          icon: SD(DesignGraphElements.VECTOR_PENCIL),
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }, {
          shortcutKey: 'set-tool-pencil',
          displayName: 'set-tool-marker',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'set-tool-hand',
          displayName: 'set-tool-hand',
          icon: SD(DesignGraphElements.HAND),
          includeInEditorType: [a9.SLIDES, a9.COOPER]
        }, {
          shortcutKey: 'set-tool-scale',
          displayName: 'set-tool-scale',
          icon: SD(DesignGraphElements.SCALE),
          includeInEditorType: [a9.SLIDES, a9.COOPER]
        }, {
          shortcutKey: 'toggle-dropper',
          displayName: 'toggle-dropper',
          icon: SD(DesignGraphElements.DROPPER_COLOR),
          includeInEditorType: [a9.SLIDES, a9.COOPER]
        }, {
          shortcutKey: 'toggle-menu',
          displayName: gn() ? 'toggle-actions-menu' : 'toggle-menu',
          icon: bs(gn() ? 'toggle-actions-menu' : 'toggle-menu')?.svg ?? null,
          includeInEditorType: [a9.SLIDES, a9.SITES, a9.COOPER]
        }]
      }], [{
        shortcuts: [{
          shortcutKey: 'set-tool-type',
          displayName: 'set-tool-type-desc',
          icon: SD(DesignGraphElements.TYPE),
          hideInEditorType: a9.DEV_MODE
        }, {
          shortcutKey: 'set-tool-table',
          icon: SD(DesignGraphElements.TABLE),
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'set-tool-section',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'set-tool-rectangle',
          displayName: 'set-tool-rectangle-desc',
          icon: SD(DesignGraphElements.SHAPE_RECTANGLE),
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.COOPER]
        }, {
          shortcutKey: 'set-tool-shape-whiteboard-square',
          displayName: 'set-tool-rectangle-desc',
          icon: SD(DesignGraphElements.SHAPE_RECTANGLE),
          includeInEditorType: a9.SLIDES
        }, {
          shortcutKey: 'set-tool-ellipse',
          displayName: 'set-tool-ellipse-desc',
          icon: SD(DesignGraphElements.SHAPE_ELLIPSE),
          hideInEditorType: a9.DEV_MODE
        }, {
          shortcutKey: 'set-tool-shape-whiteboard-ellipse',
          displayName: 'set-tool-ellipse-desc',
          icon: SD(DesignGraphElements.SHAPE_ELLIPSE),
          includeInEditorType: a9.SLIDES
        }, {
          shortcutKey: 'set-tool-line',
          displayName: 'set-tool-line-desc',
          icon: SD(DesignGraphElements.SHAPE_LINE),
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SLIDES, a9.COOPER]
        }, {
          shortcutKey: 'toggle-publish',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'place',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'set-tool-arrow',
          displayName: 'set-tool-arrow-desc',
          icon: SD(DesignGraphElements.SHAPE_ARROW),
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SLIDES, a9.COOPER]
        }, {
          shortcutKey: 'set-tool-comments',
          icon: SD(DesignGraphElements.COMMENTS),
          includeInEditorType: a9.DEV_MODE
        }, {
          shortcutKey: 'set-tool-annotate',
          displayName: 'set-tool-annotate-desc',
          icon: SD(DesignGraphElements.ANNOTATE),
          includeInEditorType: a9.DEV_MODE
        }, {
          shortcutKey: 'set-tool-measure',
          icon: SD(DesignGraphElements.MEASURE),
          includeInEditorType: a9.DEV_MODE
        }]
      }], [{
        shortcuts: [{
          shortcutKey: 'start-chat',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'stamp-or-reaction-wheel',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'set-tool-code-block',
          includeInEditorType: [a9.FIGJAM, a9.SLIDES]
        }, {
          shortcutKey: 'set-tool-table',
          icon: SD(DesignGraphElements.TABLE),
          includeInEditorType: a9.SLIDES
        }, {
          shortcutKey: 'set-tool-pen',
          icon: SD(DesignGraphElements.VECTOR_PEN),
          includeInEditorType: a9.SLIDES
        }, {
          shortcutKey: 'set-tool-pencil',
          icon: SD(DesignGraphElements.VECTOR_PENCIL),
          includeInEditorType: a9.SLIDES
        }, {
          shortcutKey: 'browse-all-resources-modal',
          icon: bs('browse-all-resources-modal')?.svg ?? null,
          includeInEditorType: a9.SLIDES
        }, {
          shortcutKey: 'set-tool-comments',
          icon: SD(DesignGraphElements.COMMENTS),
          hideInEditorType: a9.DEV_MODE
        }, {
          shortcutKey: 'set-tool-annotate',
          displayName: 'set-tool-annotate-desc',
          icon: SD(DesignGraphElements.ANNOTATE),
          includeInEditorType: a9.DESIGN
        }, {
          shortcutKey: 'toggle-dropper',
          icon: _$$A12,
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.DEV_MODE]
        }, {
          shortcutKey: 'set-tool-slice',
          displayName: 'set-tool-slice-desc',
          icon: SD(DesignGraphElements.SLICE),
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }]
      }]]
    },
    [_$$J5.VIEW]: {
      displayNameText: getI18nString('whiteboard.keyboard_shortcuts.tab.view'),
      columns: [[{
        shortcuts: [{
          shortcutKey: 'toggle-grid-focus-view',
          displayName: 'toggle-slide-view-short-description',
          includeInEditorType: [a9.SLIDES]
        }, {
          shortcutKey: 'toggle-grid-focus-view',
          displayName: 'toggle-view-short-description',
          includeInEditorType: [a9.COOPER]
        }, {
          shortcutKey: 'enter-slides-design-mode',
          displayName: 'enter-slides-design-mode-description',
          includeInEditorType: a9.SLIDES
        }, {
          shortcutKey: 'enter-slides-mode',
          displayName: 'enter-slides-design-mode-description',
          includeInEditorType: a9.SLIDES
        }, {
          shortcutKey: 'toggle-buzz-tool-mode',
          displayName: 'toggle-buzz-tool-mode-description',
          includeInEditorType: a9.COOPER
        }, {
          shortcutKey: 'toggle-animate-info',
          displayName: 'toggle-animate-info-description',
          includeInEditorType: a9.SLIDES
        }, {
          shortcutKey: 'toggle-ui',
          hideInEditorType: a9.SLIDES
        }, {
          shortcutKey: 'toggle-multiplayer-cursors',
          hideInEditorType: a9.SLIDES
        }, {
          shortcutKey: 'enter-design-mode',
          hideInEditorType: a9.SLIDES
        }, {
          shortcutKey: 'enter-inspect-mode',
          hideInEditorType: a9.SLIDES
        }]
      }], [{
        shortcuts: [{
          shortcutKey: 'pan',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'zoom-in',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'zoom-out',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'zoom-reset',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'toggle-rulers',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }, {
          shortcutKey: 'toggle-outlines',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }, {
          shortcutKey: 'toggle-pixel-preview',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }, {
          shortcutKey: 'toggle-shown-layout-grids',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SLIDES]
        }, {
          shortcutKey: 'toggle-grid',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }, {
          shortcutKey: 'zoom-in',
          includeInEditorType: [a9.SLIDES, a9.COOPER]
        }, {
          shortcutKey: 'zoom-out',
          includeInEditorType: [a9.SLIDES, a9.COOPER]
        }]
      }], [{
        shortcuts: [{
          shortcutKey: 'zoom-to-fit',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'zoom-to-selection',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'toggle-layers',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }, {
          shortcutKey: 'toggle-publish',
          displayName: 'toggle-publish-desc',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }, {
          shortcutKey: 'toggle-library',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }, {
          shortcutKey: 'show-design-panel',
          includeInEditorType: a9.DESIGN
        }, {
          shortcutKey: 'show-prototype-panel',
          includeInEditorType: a9.DESIGN
        }, {
          shortcutKey: 'zoom-reset',
          includeInEditorType: [a9.SLIDES, a9.COOPER]
        }, {
          shortcutKey: 'zoom-to-selection',
          includeInEditorType: [a9.SLIDES, a9.COOPER]
        }, {
          shortcutKey: 'zoom-to-fit',
          includeInEditorType: [a9.SLIDES, a9.COOPER]
        }]
      }]]
    },
    [_$$J5.ZOOM]: {
      displayNameText: getI18nString('whiteboard.keyboard_shortcuts.tab.zoom'),
      includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SITES, a9.DEV_MODE],
      columns: [[{
        shortcuts: [{
          shortcutKey: 'pan'
        }, {
          shortcutKey: 'zoom-in'
        }, {
          shortcutKey: 'zoom-out'
        }, {
          shortcutKey: 'zoom-reset'
        }]
      }], [{
        shortcuts: [{
          shortcutKey: 'zoom-to-fit'
        }, {
          shortcutKey: 'zoom-to-selection'
        }, {
          shortcutKey: 'next-artboard'
        }, {
          shortcutKey: 'previous-artboard'
        }]
      }], [{
        shortcuts: [{
          shortcutKey: 'page-previous'
        }, {
          shortcutKey: 'page-next'
        }, {
          shortcutKey: 'previous-artboard-same-zoom'
        }, {
          shortcutKey: 'next-artboard-same-zoom'
        }]
      }]]
    },
    [_$$J5.TEXT]: {
      displayNameText: getI18nString('whiteboard.keyboard_shortcuts.tab.text'),
      hideInEditorType: a9.DEV_MODE,
      columns: [[{
        shortcuts: [{
          shortcutKey: 'bold-and-italic'
        }, {
          shortcutKey: 'text-toggle-underline'
        }, {
          shortcutKey: 'text-edit-hyperlink',
          hideInEditorType: a9.SLIDES
        }, {
          shortcutKey: 'text-toggle-strikethrough'
        }, {
          shortcutKey: 'bulleted-and-numbered-list',
          hideInEditorType: a9.SLIDES
        }]
      }], [{
        shortcuts: [{
          shortcutKey: 'text-align-left',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SITES]
        }, {
          shortcutKey: 'text-align-center',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SITES]
        }, {
          shortcutKey: 'text-align-right',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SITES]
        }, {
          shortcutKey: 'text-align-justified',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SITES]
        }, {
          shortcutKey: 'text-style-normal',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'text-style-h3',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'text-style-h2',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'text-style-h1',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'text-style-title',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'text-edit-hyperlink',
          includeInEditorType: a9.SLIDES
        }, {
          shortcutKey: 'bulleted-and-numbered-list',
          includeInEditorType: a9.SLIDES
        }]
      }], [{
        shortcuts: [{
          shortcutKey: 'text-font-size-adjust',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SITES, a9.SLIDES, a9.COOPER]
        }, {
          shortcutKey: 'text-bold-adjust',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SITES, a9.SLIDES, a9.COOPER]
        }, {
          shortcutKey: 'text-letter-spacing-adjust',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SITES]
        }, {
          shortcutKey: 'text-line-height-adjust',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SITES]
        }, {
          shortcutKey: 'text-align-left',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'text-align-center',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'text-align-right',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'text-indent-and-dedent-list',
          includeInEditorType: a9.FIGJAM
        }]
      }]]
    },
    [_$$J5.SHAPE]: {
      displayNameText: getI18nString('whiteboard.keyboard_shortcuts.tab.shape'),
      includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SITES],
      columns: [[{
        shortcuts: [{
          shortcutKey: 'set-tool-pen',
          icon: SD(DesignGraphElements.VECTOR_PEN)
        }, {
          shortcutKey: 'set-tool-pencil',
          icon: SD(DesignGraphElements.VECTOR_PENCIL)
        }]
      }, {
        caption: 'while-editing-shape',
        shortcuts: [{
          shortcutKey: 'set-tool-paint-bucket',
          icon: SD(DesignGraphElements.VECTOR_PAINT_BUCKET)
        }, {
          shortcutKey: 'bend-tool',
          icon: SD(DesignGraphElements.VECTOR_BEND)
        }, {
          shortcutKey: 'set-tool-cut',
          icon: SD(DesignGraphElements.VECTOR_CUT),
          featureFlags: ['ce_il_vem_cut_tool']
        }]
      }], [{
        shortcuts: [{
          shortcutKey: 'remove-fill'
        }, {
          shortcutKey: 'remove-stroke'
        }, {
          shortcutKey: 'swap-fill-and-stroke'
        }, {
          shortcutKey: 'outline-stroke'
        }, {
          shortcutKey: 'flatten-selection'
        }]
      }], [{
        caption: 'after-selecting-points',
        shortcuts: [{
          shortcutKey: 'join-selection'
        }, {
          shortcutKey: 'smooth-join-selection'
        }, {
          shortcutKey: 'delete-and-heal-selection'
        }]
      }]]
    },
    [_$$J5.SELECT]: {
      displayNameText: getI18nString('whiteboard.keyboard_shortcuts.tab.selection'),
      includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SITES, a9.SLIDES],
      columns: [[{
        shortcuts: [{
          shortcutKey: 'select-all'
        }, {
          shortcutKey: 'select-inverse',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }, {
          shortcutKey: 'deselect-all'
        }, {
          shortcutKey: 'deep-select'
        }]
      }], [{
        shortcuts: [{
          shortcutKey: 'select-child'
        }, {
          shortcutKey: 'select-parent'
        }, {
          shortcutKey: 'select-next-sibling'
        }, {
          shortcutKey: 'select-previous-sibling',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }, {
          shortcutKey: 'select-matching',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }]
      }], [{
        shortcuts: [{
          shortcutKey: 'group-selection'
        }, {
          shortcutKey: 'ungroup-selection'
        }, {
          shortcutKey: 'frame-selection'
        }, {
          shortcutKey: 'toggle-shown-for-selected-nodes',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }, {
          shortcutKey: 'toggle-locked-for-selected-nodes',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }]
      }]]
    },
    [_$$J5.CURSOR]: {
      displayNameText: getI18nString('whiteboard.keyboard_shortcuts.tab.cursor'),
      includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION],
      columns: [[{
        caption: 'while-pointing',
        shortcuts: [{
          shortcutKey: 'measure-to-selection'
        }]
      }, {
        caption: 'while-moving',
        shortcuts: [{
          shortcutKey: 'duplicate'
        }]
      }], [{
        caption: 'while-clicking',
        shortcuts: [{
          shortcutKey: 'deep-select'
        }]
      }, {
        caption: 'while-dragging-to-select',
        shortcuts: [{
          shortcutKey: 'deep-select-rectangle'
        }]
      }], [{
        caption: 'while-resizing',
        shortcuts: [{
          shortcutKey: 'center-resize-drag'
        }, {
          shortcutKey: 'resize-proportionally'
        }, {
          shortcutKey: 'ignore-constraints',
          displayName: 'ignore-constraints-desc'
        }]
      }]]
    },
    [_$$J5.COPY]: {
      displayNameText: getI18nString('whiteboard.keyboard_shortcuts.tab.copy'),
      includeInEditorType: a9.DEV_MODE,
      columns: [[], [{
        shortcuts: [{
          shortcutKey: 'copy',
          includeInEditorType: a9.DEV_MODE
        }, {
          shortcutKey: 'copy-as-png',
          includeInEditorType: a9.DEV_MODE
        }]
      }], []]
    },
    [_$$J5.EDIT]: {
      displayNameText: getI18nString('whiteboard.keyboard_shortcuts.tab.edit'),
      hideInEditorType: a9.DEV_MODE,
      columns: [[{
        shortcuts: [{
          shortcutKey: 'copy'
        }, {
          shortcutKey: 'cut'
        }, {
          shortcutKey: 'paste'
        }, {
          shortcutKey: 'paste-to-replace',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SITES, a9.SLIDES, a9.COOPER]
        }, {
          shortcutKey: 'paste-over-selection'
        }, {
          shortcutKey: 'export-selection-or-current-page',
          displayName: 'export-selection-or-current-page-desc',
          includeInEditorType: a9.FIGJAM
        }]
      }], [{
        shortcuts: [{
          shortcutKey: 'bring-forward',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'send-backward',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'bring-to-front',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'send-to-back',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'group-selection',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'undo',
          includeInEditorType: [a9.SLIDES, a9.COOPER]
        }, {
          shortcutKey: 'redo',
          includeInEditorType: [a9.SLIDES, a9.COOPER]
        }, {
          shortcutKey: 'duplicate',
          includeInEditorType: [a9.SLIDES, a9.COOPER]
        }, {
          shortcutKey: 'duplicate-in-place',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SITES, a9.SLIDES, a9.COOPER]
        }, {
          shortcutKey: 'rename-selection',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }, {
          shortcutKey: 'export-selected-exportables',
          displayName: 'export-selected-exportables-desc',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }, {
          shortcutKey: 'canvas-search',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SITES]
        }]
      }], [{
        shortcuts: [{
          shortcutKey: 'toggle-locked-for-selected-nodes',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'canvas-search',
          includeInEditorType: [a9.FIGJAM, a9.SLIDES, a9.COOPER]
        }, {
          shortcutKey: 'undo',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'redo',
          includeInEditorType: a9.FIGJAM
        }, {
          shortcutKey: 'copy-as-png',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }, {
          shortcutKey: 'copy-properties',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SLIDES, a9.COOPER]
        }, {
          shortcutKey: 'paste-properties',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SLIDES, a9.COOPER]
        }]
      }]]
    },
    [_$$J5.TRANSFORM]: {
      displayNameText: getI18nString('whiteboard.keyboard_shortcuts.tab.transform'),
      includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION],
      columns: [[{
        shortcuts: [{
          shortcutKey: 'flip-horizontal'
        }, {
          shortcutKey: 'flip-vertical'
        }, {
          shortcutKey: 'mask-selection'
        }]
      }], [{
        shortcuts: [{
          shortcutKey: 'request-edit-mode',
          displayName: 'edit-shape-or-image'
        }, {
          shortcutKey: 'place'
        }]
      }], [{
        shortcuts: [{
          shortcutKey: 'set-opacity-00'
        }, {
          shortcutKey: 'set-opacity-1'
        }, {
          shortcutKey: 'set-opacity-5'
        }, {
          shortcutKey: 'set-opacity-0'
        }]
      }]]
    },
    [_$$J5.ARRANGE]: {
      displayNameText: getI18nString('whiteboard.keyboard_shortcuts.tab.arrange'),
      includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SITES, a9.SLIDES, a9.COOPER],
      columns: [[{
        shortcuts: [{
          shortcutKey: 'bring-forward'
        }, {
          shortcutKey: 'send-backward'
        }, {
          shortcutKey: 'bring-to-front'
        }, {
          shortcutKey: 'send-to-back'
        }]
      }], [{
        shortcuts: [{
          shortcutKey: 'align-left-right'
        }, {
          shortcutKey: 'align-top-bottom'
        }, {
          shortcutKey: 'align-centers'
        }, {
          shortcutKey: 'distribute-spacing',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SITES]
        }, {
          shortcutKey: 'tidy-up',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }]
      }], [{
        shortcuts: [{
          shortcutKey: 'stack-selection',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION, a9.SITES]
        }, {
          shortcutKey: 'unstack-selection',
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }, {
          shortcutKey: 'run-multi-stack-auto-layout',
          featureFlags: ['auto_auto_layout'],
          includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION]
        }, {
          shortcutKey: 'distribute-spacing',
          includeInEditorType: a9.SLIDES
        }, {
          shortcutKey: 'tidy-up',
          includeInEditorType: [a9.SLIDES, a9.COOPER]
        }]
      }]]
    },
    [_$$J5.COMPONENTS]: {
      displayNameText: getI18nString('whiteboard.keyboard_shortcuts.tab.components'),
      includeInEditorType: [a9.DESIGN, a9.ILLUSTRATION],
      columns: [[{
        shortcuts: [{
          shortcutKey: 'toggle-publish',
          displayName: 'toggle-publish-desc'
        }, {
          shortcutKey: 'toggle-library'
        }, {
          shortcutKey: 'create-symbol'
        }, {
          shortcutKey: 'detach-instance'
        }]
      }], [{
        shortcuts: [{
          shortcutKey: 'component-insert',
          displayName: 'component-insert-display-name-ui3'
        }]
      }, {
        caption: 'while-inserting-a-component',
        shortcuts: [{
          shortcutKey: 'swap-instance'
        }]
      }]]
    },
    [_$$J5.ACCESSIBILITY]: {
      displayNameText: getI18nString('whiteboard.keyboard_shortcuts.tab.accessibility'),
      includeInEditorType: a9.FIGJAM,
      columns: [[{
        shortcuts: [{
          shortcutKey: 'select-next-node'
        }, {
          shortcutKey: 'select-previous-node'
        }, {
          shortcutKey: 'select-parent'
        }, {
          shortcutKey: 'select-child'
        }]
      }], [{
        shortcuts: [{
          shortcutKey: FOCUS_NEXT_AREA
        }, {
          shortcutKey: FOCUS_PREVIOUS_AREA
        }]
      }]]
    },
    [_$$J5.ADVANCED]: {
      displayNameText: getI18nString('whiteboard.keyboard_shortcuts.tab.advanced'),
      includeInEditorType: a9.FIGJAM,
      columns: [[{
        caption: 'while-editing-shape-or-sticky',
        shortcuts: [{
          shortcutKey: 'quick-create-immutable-frame'
        }]
      }, {
        caption: 'while-text-shape-or-sticky-selected',
        shortcuts: [{
          shortcutKey: 'edit-text'
        }]
      }], [{
        caption: 'while-stamping',
        shortcuts: [{
          shortcutKey: 'stamp-on-node'
        }]
      }], [{
        shortcuts: [{
          shortcutKey: 'align-left-right'
        }, {
          shortcutKey: 'align-top-bottom'
        }, {
          shortcutKey: 'align-centers'
        }, {
          shortcutKey: 'tidy-up'
        }, {
          shortcutKey: 'straight-connector'
        }]
      }]]
    }
  };
}
function sc(e, t, i) {
  if (void 0 === t && void 0 === i) return !0;
  let r = e => {
    let r = !0;
    void 0 !== i && (r &&= i !== e);
    void 0 !== t && (Array.isArray(t) ? r &&= t.includes(e) : r &&= t === e);
    return r;
  };
  return e === FEditorType.Design ? r(a9.DESIGN) : e === FEditorType.DevHandoff ? r(a9.DEV_MODE) : e === FEditorType.Whiteboard ? r(a9.FIGJAM) : e === FEditorType.Slides ? r(a9.SLIDES) : e === FEditorType.Sites ? r(a9.SITES) : e === FEditorType.Figmake ? r(a9.FIGMAKE) : e === FEditorType.Cooper ? r(a9.COOPER) : e === FEditorType.Illustration && r(a9.ILLUSTRATION);
}
function su(e) {
  return !e || e.every(e => getFeatureFlags()[e]);
}
function sp(e, t, i, r, n) {
  let a = {};
  for (let s in e) {
    let o = !0;
    for (let a of e[s].columns) {
      for (let e of a) {
        if (sc(n, e.includeInEditorType, e.hideInEditorType)) {
          for (let a of e.shortcuts) {
            if (sc(n, a.includeInEditorType, a.hideInEditorType) && sr.keybindingsForShortcut(a.shortcutKey, i, r) && !(sr.shortcutUsedCount(a.shortcutKey, t) > 0)) {
              o = !1;
              break;
            }
          }
        }
      }
    }
    a[s] = o;
  }
  return a;
}
function sh(e, t, i) {
  let r = !0;
  for (let n in e) {
    if (!e[n] && sc(t, i[n]?.includeInEditorType)) {
      r = !1;
      break;
    }
  }
  return r;
}
let s_ = 'keyboard_rows--row--8eEsv';
let sx = 'ISO_ENTER';
let sy = 'SPACER';
function sb({
  createKey: e
}) {
  return jsxs('div', {
    className: s_,
    children: [e('Backquote'), e('Digit1'), e('Digit2'), e('Digit3'), e('Digit4'), e('Digit5'), e('Digit6'), e('Digit7'), e('Digit8'), e('Digit9'), e('Digit0'), e('Minus'), e('Equal'), e('IntlYen'), e('Backspace', 113)]
  });
}
function sC({
  createKey: e,
  isBackslashRow2: t
}) {
  let i = t == null ? e('Backslash') : t ? e('Backslash') : e(sx, 90);
  return jsxs('div', {
    className: s_,
    children: [e('Tab', 90), e('KeyQ'), e('KeyW'), e('KeyE'), e('KeyR'), e('KeyT'), e('KeyY'), e('KeyU'), e('KeyI'), e('KeyO'), e('KeyP'), e('BracketLeft'), e('BracketRight'), i]
  });
}
function sv({
  createKey: e,
  isBackslashRow2: t
}) {
  let i = t == null ? e('Backslash') : t ? null : e('Backslash');
  let n = t == null ? e('Enter', 60) : t ? e('Enter', 60) : e(sy, 20);
  return jsxs('div', {
    className: s_,
    children: [e('CapsLock', 120), e('KeyA'), e('KeyS'), e('KeyD'), e('KeyF'), e('KeyG'), e('KeyH'), e('KeyJ'), e('KeyK'), e('KeyL'), e('Semicolon'), e('Quote'), i, n]
  });
}
function sE({
  createKey: e
}) {
  return jsxs('div', {
    className: s_,
    children: [e('ShiftLeft', 134), e('IntlBackslash'), e('KeyZ'), e('KeyX'), e('KeyC'), e('KeyV'), e('KeyB'), e('KeyN'), e('KeyM'), e('Comma'), e('Period'), e('Slash'), e('IntlRo'), e('ShiftRight', 94)]
  });
}
function sT({
  createKey: e
}) {
  return BrowserInfo.mac ? jsxs('div', {
    className: s_,
    children: [e('Fn'), e('ControlLeft'), e('AltLeft'), e('MetaLeft'), e('Space', 500), e('MetaRight'), e('AltRight')]
  }) : jsxs('div', {
    className: s_,
    children: [e('Fn'), e('ControlLeft'), e('MetaLeft'), e('AltLeft'), e('Space', 500), e('AltRight'), e('ControlRight')]
  });
}
let sS = 'keyboard_shortcut_panel_layout_tab--row--MilbG';
let sj = 'keyboard_shortcut_panel_layout_tab--column--SzOhn keyboard_shortcut_panel--column--lHvov';
let sI = 'keyboard_shortcut_panel_layout_tab--wideColumn--tR6V-';
function sN(e) {
  switch (e) {
    case KeyboardLayout.CHINESE:
    case KeyboardLayout.KOREAN:
    case KeyboardLayout.US_QWERTY:
    case KeyboardLayout.UNKNOWN:
    case KeyboardLayout.DVORAK:
      return !0;
    default:
      return !1;
  }
}
function sA({
  label: e,
  width: t
}) {
  return jsx('div', {
    style: {
      flexGrow: t ?? 1
    },
    className: 'keyboard_shortcut_panel_layout_tab--key--zFiya keyboard_shortcut_panel--singleCharKeyBox--DD6s1 keyboard_shortcut_panel--shortcutBox--9Ltqp',
    children: e
  });
}
function sO({
  layout: e
}) {
  let t = useCallback(t => t === 'Space' ? ' ' : Fullscreen.getKeyboardLayoutAsJSON(e)[t], [e]);
  let i = (e, i) => {
    if (e !== sx && e !== sy) {
      let n = t(e);
      return n ? jsx(sA, {
        width: i,
        label: n
      }, e) : null;
    }
    return e === sx ? jsx('div', {
      style: {
        flexGrow: i ?? 1
      },
      className: 'keyboard_shortcut_panel_layout_tab--enterISOKeyContainer--PK7LJ keyboard_shortcut_panel_layout_tab--key--zFiya keyboard_shortcut_panel--singleCharKeyBox--DD6s1 keyboard_shortcut_panel--shortcutBox--9Ltqp',
      children: jsx(SvgComponent, {
        className: 'keyboard_shortcut_panel_layout_tab--enterISOKey--AbX2h',
        svg: _$$A13
      })
    }) : e === sy ? jsx('div', {
      style: {
        flexGrow: i ?? 1
      },
      className: 'keyboard_shortcut_panel_layout_tab--spacerKey--g8rv4 keyboard_shortcut_panel_layout_tab--key--zFiya keyboard_shortcut_panel--singleCharKeyBox--DD6s1 keyboard_shortcut_panel--shortcutBox--9Ltqp',
      children: t('Enter')
    }) : null;
  };
  return jsxs('div', {
    className: 'keyboard_shortcut_panel_layout_tab--keyboardContainer--JLzz1',
    children: [jsx('div', {
      className: sS,
      children: jsx(sb, {
        createKey: i
      })
    }), jsx('div', {
      className: sS,
      children: jsx(sC, {
        createKey: i,
        isBackslashRow2: sN(e)
      })
    }), jsx('div', {
      className: sS,
      children: jsx(sv, {
        createKey: i,
        isBackslashRow2: sN(e)
      })
    }), jsx('div', {
      className: sS,
      children: jsx(sE, {
        createKey: i
      })
    }), jsx('div', {
      className: el()(sS, 'keyboard_shortcut_panel_layout_tab--row5--TBfPa'),
      children: jsx(sT, {
        createKey: i
      })
    })]
  });
}
let sL = async () => {
  if (!desktopAPIInstance) return null;
  let e = await desktopAPIInstance.getKeyboardLayout();
  return e ? pB(e) : null;
};
function sR({
  layout: e,
  setPreviewedLayout: t
}) {
  let [i, a] = useState(e);
  let [s, l] = useState();
  sL().then(e => {
    s !== e && l(e);
  });
  let d = useMemo(() => getAllKeyboardLayoutNames().map(e => {
    if (isNaN(parseInt(e))) return null;
    let t = parseInt(e);
    return {
      name: getKeyboardLayoutName(t),
      layoutOption: t
    };
  }).filter(isNotNullish).sort((e, t) => e.layoutOption === KeyboardLayout.UNKNOWN ? 1 : t.layoutOption === KeyboardLayout.UNKNOWN ? -1 : e.name.localeCompare(t.name)).map(({
    layoutOption: e
  }) => jsx(c$, {
    value: KeyboardLayout[e],
    children: getKeyboardLayoutName(e)
  }, e)), []);
  let c = useMemo(() => s ? jsxs(Fragment, {
    children: [jsx(YJ, {
      groupLabel: jsx(WL, {
        children: getI18nString('keyboard_settings.detected')
      }),
      children: jsx(c$, {
        value: KeyboardLayout[s],
        children: getKeyboardLayoutName(s)
      }, s)
    }, getI18nString('keyboard_settings.detected')), jsx(YJ, {
      groupLabel: jsx(WL, {
        children: getI18nString('keyboard_settings.other_layouts')
      }),
      children: d.filter(e => e.key !== s.toString())
    }, getI18nString('keyboard_settings.other_layouts'))]
  }) : d, [d, s]);
  let u = useId();
  let p = e => e ? KeyboardLayout[e] : KeyboardLayout.UNKNOWN;
  return jsx('div', {
    className: 'keyboard_shortcut_panel_layout_tab--selectorRow--QPlYR',
    children: jsxs(setupThemeContext, {
      mode: 'dark',
      children: [jsx(Label, {
        className: 'keyboard_shortcut_panel_layout_tab--selectorLabelText--3jkuk',
        htmlFor: u,
        children: getI18nString('keyboard_settings.keyboard_layout_panel_selector')
      }), jsx('div', {
        className: 'keyboard_shortcut_panel_layout_tab--selectorDropdownContainer--0rd1S',
        children: jsx(EventShield, {
          eventListeners: ['onMouseDown', 'onClick', 'onScroll', 'onWheel'],
          children: jsxs(_$$bL, {
            value: KeyboardLayout[i || 0],
            onChange: e => {
              let i = p(e);
              a(i);
              t(i);
              updateKeyboardLayoutPreference({
                layout: i
              });
            },
            onSelectionChange: e => {
              e && t(p(e));
            },
            recordingKey: 'keyboardLayoutSelector',
            children: [jsx(l9, {
              label: jsx(HiddenLabel, {
                children: getI18nString('keyboard_settings.keyboard_layout_panel_selector')
              }),
              width: 'fill'
            }), jsx(mc, {
              children: c
            })]
          })
        })
      })]
    })
  });
}
function sD({
  layout: e,
  setPreviewedLayout: t
}) {
  let i = getI18nString('keyboard_settings.figma_keyboard_shortcuts_won_t_automatically_change_if_you_change_your_system_keyboard_layout');
  return jsxs('div', {
    className: 'keyboard_shortcut_panel_layout_tab--leftColumnWrapper--8Jn1P',
    children: [jsx('div', {
      className: 'keyboard_shortcut_panel_layout_tab--keyboardSelectorContainerSection--gTvK9',
      children: jsx(sR, {
        layout: e,
        setPreviewedLayout: t
      })
    }), jsx('div', {
      className: 'keyboard_shortcut_panel_layout_tab--keyboardDescriptionSection--yD9L-',
      children: e === KeyboardLayout.UNKNOWN ? null : i
    }), jsx('div', {
      className: 'keyboard_shortcut_panel_layout_tab--keyboardLearnMoreSection--PV6Hj',
      style: {
        '--color-text-brand': 'var(--color-text-menu-selected)',
        '--color-text-brand-secondary': 'var(--color-text-menu-selected-secondary)',
        '--color-bg-brand-tertiary': 'var(--color-bg-menu-selected-tertiary)'
      },
      children: jsx(Link, {
        newTab: !0,
        trusted: !0,
        href: 'https://help.figma.com/hc/articles/5665442977431',
        children: renderI18nText('keyboard_settings.request_a_new_layout_or_learn_more')
      })
    })]
  });
}
function sM() {
  let e = S5();
  let [t, i] = useState();
  return jsxs('div', {
    className: 'keyboard_shortcut_panel_layout_tab--contents--8vVa7 keyboard_shortcut_panel--contents--8ae0D',
    children: [jsx('div', {
      className: el()(sj, sI),
      children: jsx(sD, {
        layout: e,
        setPreviewedLayout: i
      })
    }), jsx('div', {
      className: el()(sj, sI, 'keyboard_shortcut_panel_layout_tab--keyboardVisualColumn--5Hw4F'),
      children: jsx(sO, {
        layout: t ?? e
      })
    })]
  });
}
class sU extends PureComponent {
  render() {
    return jsx('div', {
      className: a5,
      children: jsx('table', {
        children: this.props.children
      })
    });
  }
}
sU.displayName = 'Column';
class sG extends PureComponent {
  render() {
    let e = Children.toArray(this.props.children).filter(e => !!e);
    if (e.length === 0) return null;
    let t = this.props.caption ? formatI18nMessage(this.props.caption) : null;
    return jsxs('tbody', {
      children: [t && jsx('tr', {
        children: jsx('th', {
          className: 'keyboard_shortcut_panel--categoryCaption--7m7qR',
          colSpan: 3,
          children: t
        })
      }), e]
    });
  }
}
function sK(e) {
  return e === FEditorType.Design || e === FEditorType.Illustration || e === FEditorType.Slides ? 'essential' : e === FEditorType.DevHandoff ? 'view' : 'tools';
}
function sH({
  usedKeyboardShortcuts: e,
  useNumbersForOpacity: t,
  appModelKeyboardShortcuts: i,
  ...s
}) {
  let o = useRef(null);
  let l = useRef(null);
  let d = useRef({});
  let c = sJ();
  let u = useLatestRef(c);
  let p = useLatestRef(e);
  let h = useDispatch();
  let m = function (e, t, i) {
    let r = sd(t);
    let n = [];
    let a = i === FEditorType.Design || i === FEditorType.Illustration ? a1 : '';
    for (let e in r) {
      sc(i, r[e].includeInEditorType, r[e].hideInEditorType) && su(r[e].featureFlags) && n.push({
        displayNameText: r[e].displayNameText,
        id: e,
        className: el()(a0, a)
      });
    }
    if (i === FEditorType.Design || i === FEditorType.Illustration) {
      let e = {
        id: 'spacer',
        className: el()(a0, a)
      };
      n.push(e);
    }
    n.push({
      displayNameText: getI18nString('whiteboard.keyboard_shortcuts.tab.layout'),
      id: 'layout',
      className: el()(a0, a)
    });
    e && n.push({
      displayNameText: getI18nString('keyboard_settings.custom_tab'),
      id: 'custom',
      className: el()(a0, a)
    });
    return n;
  }(useLabConfiguration(labConfigurations.customKeyboardShortcuts), s.hasSubscribedLibraries, c);
  let f = Object.fromEntries(m.map(({
    id: e
  }) => [e, e !== 'spacer']));
  let [g, x, y] = useTabState(f, {
    defaultActive: s.initActiveTab ?? sK(c),
    recordingKey: s.recordingKey
  });
  useEffect(() => {
    o.current?.focus();
  }, []);
  let b = sd(s.hasSubscribedLibraries);
  let C = sp(b, e, t, i, c);
  let [v, E] = useState(C);
  let [T, w] = useState(sh(C, c, b));
  let [j, I] = useState(!1);
  let [k, N] = useState(!1);
  let [A, O] = useState(void 0);
  let [L, R] = useState(!1);
  function D(e) {
    E(e);
    w(!0);
    N(!1);
    I(!1);
    R(!0);
  }
  useEffect(() => {
    let e = y.activeTab;
    e && u !== c && !sc(c, b?.[e]?.includeInEditorType, b?.[e]?.hideInEditorType) && y.setActiveTab(sK(c));
  }, [c, u, b, y]);
  useEffect(() => {
    let r = y.activeTab;
    if (p !== e) {
      let n = sp(b, e, t, i, c);
      let a = sh(n, c, b);
      if (p) {
        let s = sp(b, p, t, i, c);
        if (a && !sh(s, c, b)) {
          D(n);
        } else {
          let a = Object.values(_$$J5).includes(r) ? function (e, t, i, r, n, a) {
            for (let s of t[e].columns) {
              for (let e of s) {
                for (let t of e.shortcuts) {
                  if (sr.keybindingsForShortcut(t.shortcutKey, i, r)) {
                    let e = sr.shortcutUsedCount(t.shortcutKey, n);
                    if (sr.shortcutUsedCount(t.shortcutKey, a) > e) return t.shortcutKey;
                  }
                }
              }
            }
            return null;
          }(r, b, t, i, p, e) : null;
          a && n[r] && !s[r] && (setTimeout(() => {
            E(n);
            N(!0);
            O(d.current?.[a]);
            I(!0);
          }, 1500), setTimeout(() => {
            N(!1);
            I(!1);
          }, 6e3));
        }
      }
      E(n);
      w(a);
    }
  }, [c, u, e, p, b, t, i, y.activeTab]);
  let M = c === FEditorType.Design || c === FEditorType.Illustration ? a1 : '';
  let P = 'keyboard_shortcut_panel--nav--rmt2R';
  for (let e = 0; e < m.length; e++) {
    let t = m[e];
    if (t == null || t.id === 'spacer') continue;
    let i = y.activeTab === t.id;
    if (_$$$(t) && i) {
      t.className = k ? el()('keyboard_shortcut_panel--tabActiveCompletedFirstTime--qYX3O keyboard_shortcut_panel--tabActive--xPG7y keyboard_shortcut_panel--tab--9t5Mb ellipsis--ellipsis--Tjyfa', M) : el()('keyboard_shortcut_panel--tabActive--xPG7y keyboard_shortcut_panel--tab--9t5Mb ellipsis--ellipsis--Tjyfa', M);
      let i = e > 0 ? m[e - 1] : null;
      i ? i.className = el()('keyboard_shortcut_panel--tabLeftOfActive--aapeI keyboard_shortcut_panel--tab--9t5Mb ellipsis--ellipsis--Tjyfa', M) : P = 'keyboard_shortcut_panel--navWithFirstTabActive--KBbpA keyboard_shortcut_panel--nav--rmt2R';
      let r = e < m.length - 1 ? m[e + 1] : null;
      r ? r.className = el()('keyboard_shortcut_panel--tabRightOfActive--pA4GA keyboard_shortcut_panel--tab--9t5Mb ellipsis--ellipsis--Tjyfa', M) : P = 'keyboard_shortcut_panel--navWithLastTabActive--ptUFB keyboard_shortcut_panel--nav--rmt2R';
      break;
    }
  }
  let F = {
    tabCompletedFirstTimeAnimation: k,
    tabCompletedAnimation: j,
    tabCompletedAnimationKeyPosition: A,
    allTabsCompletedAnimation: L,
    setKeyShortcutPositionsInTab(e, t) {
      d.current[e] = t;
    }
  };
  return jsxs('div', {
    className: 'keyboard_shortcut_panel--keyboardShortcutPanel--M0Z-f',
    children: [jsxs('div', {
      className: el()('keyboard_shortcut_panel--tabsContainer--PbGsu', {
        'keyboard_shortcut_panel--tabsContainerWithReplay--US6bY': T
      }),
      children: [jsx(TabsPrimitiveTabStrip, {
        className: P,
        ref: o,
        manager: y,
        children: m.map(e => jsx(sz, {
          tab: e,
          isTabComplete: v[e.id],
          tabProvidedProps: g[e.id]
        }, e.id))
      }), jsx(ButtonPrimitive, {
        'className': 'keyboard_shortcut_panel--closeX--QSyPA',
        'onClick': function () {
          h(setKeyboardShortcutPanelTab({
            tab: null
          }));
          fullscreenValue.triggerAction('toggle-keyboard-shortcuts');
        },
        'aria-label': getI18nString('general.close'),
        'data-fullscreen-intercept': !0,
        'children': jsx(SvgComponent, {
          svg: _$$A16
        })
      }), T && jsx(ButtonPrimitive, {
        className: el()('keyboard_shortcut_panel--replayAnimation--ZpPzH', {
          'keyboard_shortcut_panel--replayAnimationActive--entZF': L
        }),
        onClick() {
          L ? R(!1) : D(v);
        },
        children: jsx(SvgComponent, {
          svg: L ? _$$A14 : _$$A15
        })
      })]
    }), m.map(({
      id: e
    }) => e === 'spacer' ? null : jsx(sV, {
      activeTab: y.activeTab,
      tabPanelRef: l,
      completedTabs: v,
      tabPanelProps: x[e],
      ...F
    }, e))]
  });
}
function sz({
  tab: e,
  isTabComplete: t,
  tabProvidedProps: i
}) {
  let a = useRef(null);
  let s = _$$R3(a);
  return e.id === 'spacer' ? jsx('div', {
    className: el()(e.className, 'keyboard_shortcut_panel--spacerTab--yNO02')
  }, e.id) : jsx(_$$r5, {
    'ref': a,
    'className': e.className,
    'data-completed': t,
    'htmlAttributes': {
      'data-tooltip': s ? e.displayNameText : void 0,
      'data-tooltip-type': s ? KindEnum.TEXT : void 0
    },
    ...i,
    'children': e.displayNameText
  }, e.id);
}
function sV({
  completedTabs: e,
  tabPanelRef: t,
  ...i
}) {
  let n;
  let {
    tabCompletedFirstTimeAnimation,
    activeTab
  } = i;
  let o = useLabConfiguration(labConfigurations.customKeyboardShortcuts);
  n = tabCompletedFirstTimeAnimation ? 'keyboard_shortcut_panel--tabContentsCompletedFirstTime--5s31O keyboard_shortcut_panel--tabContents--UBIdJ' : e[activeTab] ? 'keyboard_shortcut_panel--tabContentsCompleted--YcQRt keyboard_shortcut_panel--tabContents--UBIdJ' : a2;
  activeTab === 'layout' && (n = a2);
  let l = activeTab === 'essential' ? jsxs(Fragment, {
    children: [jsx('div', {
      className: 'keyboard_shortcut_panel--caption--a6WBZ',
      children: renderI18nText('whiteboard.keyboard_shortcuts.essential_keyboard_shortcuts')
    }), jsx(sW, {
      wrapperClassName: 'keyboard_shortcut_panel--contentsSpacedOut--Jp-4I keyboard_shortcut_panel--contents--8ae0D',
      ...i
    })]
  }) : activeTab === 'layout' ? jsx('div', {
    className: a3,
    children: jsx(sM, {})
  }) : activeTab === 'custom' && o ? jsx(sn, {}) : jsx(sW, {
    wrapperClassName: a3,
    ...i
  });
  return jsx(_$$N, {
    ref: t,
    className: n,
    ...i.tabPanelProps,
    children: l
  });
}
function sW({
  wrapperClassName: e,
  ...t
}) {
  let i = useSubscribedLibraries();
  let a = i.status === 'loaded' && i.data.length > 0;
  let s = sJ();
  let o = sd(a);
  return jsx('div', {
    className: e,
    children: o[t.activeTab] ? o[t.activeTab].columns.map((e, i) => createElement(sU, {
      ...t,
      key: `column-${i}`
    }, e.map((e, n) => sc(s, e.includeInEditorType, e.hideInEditorType) ? jsx(sG, {
      caption: e.caption,
      ...t,
      children: e.shortcuts.map((e, i) => jsx(sY, {
        keyPosition: i,
        ...e,
        ...t
      }, i))
    }, `category-${i}-${n}`) : null))) : []
  });
}
function sY({
  keyPosition: e,
  activeTab: t,
  setKeyShortcutPositionsInTab: i,
  shortcutKey: n,
  ...s
}) {
  let o = useSelector(e => e.usedKeyboardShortcuts);
  let l = useSelector(e => e.mirror.appModel.keyboardShortcuts);
  let d = _$$Zj();
  let c = sJ();
  return (i(n, e), sc(c, s.includeInEditorType, s.hideInEditorType) && su(s.featureFlags)) ? jsx(sr, {
    shortcutKey: n,
    editorType: c,
    keyPosition: e,
    usedKeyboardShortcuts: o,
    appModelKeyboardShortcuts: l,
    useNumbersForOpacity: d,
    ...s
  }, `shortcut-${t}-${e}`) : null;
}
function sJ() {
  let e = useSelector(e => e.selectedView.view === 'fullscreen' ? e.selectedView.editorType : FEditorType.Design);
  let t = getObservableValue(AppStateTsApi?.interopToolMode(), SelfDesignType.SELF);
  return e === FEditorType.Slides && t === SelfDesignType.DESIGN || e === FEditorType.Cooper && t === SelfDesignType.DESIGN ? FEditorType.Design : e;
}
function sq(e) {
  let t = useSubscribedLibraries();
  let i = t.status === 'loaded' && t.data.length > 0;
  let n = useSelector(e => e.usedKeyboardShortcuts);
  let s = useSelector(e => e.keyboardShortcutPanel.tab);
  let o = useSelector(e => e.mirror.appModel.keyboardShortcuts);
  let l = useSelector(e => e.selectedView.view === 'fullscreen' ? e.selectedView.editorType : FEditorType.Design);
  let d = _$$Zj();
  return jsx(sH, {
    recordingKey: e.recordingKey,
    usedKeyboardShortcuts: n,
    initActiveTab: s,
    appModelKeyboardShortcuts: o,
    hasSubscribedLibraries: i && l !== FEditorType.Slides && l !== FEditorType.Cooper,
    useNumbersForOpacity: d
  });
}
sG.displayName = 'Category';
sH.displayName = 'KeyboardShortcutPanel';
function s$() {
  let e = Xr(mH);
  let t = XC(useAtomWithSubscription(_$$a3));
  return getFeatureFlags().cursor_bot && t ? jsx('div', {
    'className': CR,
    'data-testid': 'cursor-bot-fullscreen-event-blocker',
    'onClick': () => {
      e(!0);
    }
  }) : null;
}
function s6({
  background: e,
  showSpinner: t
}) {
  let i = useContext(viewportNavigatorContext);
  let {
    x,
    y,
    width
  } = i.getViewportInfo();
  let d = {
    background: e
  };
  let c = window.innerWidth - width;
  i && (d = {
    ...d,
    width: `calc(100vw - ${c}px)`,
    height: `calc(100vh - ${y}px)`,
    top: `${y}px`,
    left: `${x}px`
  });
  let u = !1;
  getFeatureFlags().css_backed_loading_spinner ? u = !0 : !getFeatureFlags().disable_page_switch_spinner || isFigmaMobileApp() || isMobileUA || (t = !1);
  return jsxs('div', {
    className: 'loading_overlay--pageSyncing--9AqbU',
    children: [jsx('div', {
      className: el()('loading_overlay--blurredOverlay--79bya', Dm),
      style: d
    }), t && u ? jsx('div', {
      className: 'loading_overlay--pageSyncingFadeIn--QVvQE',
      children: jsx(CssBackedLoading, {
        size: 'large'
      })
    }) : t && jsx(ImageBackedLoading, {
      className: 'loading_overlay--pageSyncingSpinner--rjAvP'
    })]
  });
}
function s7() {
  let e = trackFileEventWithStore();
  let t = useSelector(e => e.selectedView);
  let i = useSelector(e => e.versionHistory)?.isLoadingPage;
  let s = getVisibleTheme();
  let {
    isLoading
  } = getViewState({
    selectedView: t,
    isLoadingVersionHistory: i,
    theme: s
  });
  let c = useSelector(e => e.mirror.appModel.multiplayerSessionState);
  let u = yZ();
  let p = useSelector(e => e.mirror.appModel.currentPage);
  let h = useDispatch();
  let [m, f] = useState(null);
  let g = useLatestRef(isLoading);
  let _ = useCallback(t => {
    e('page_loading_overlay', {
      timeElapsedMs: t,
      pageNodeId: p
    }, {
      forwardToDatadog: !0
    });
  }, [e, p]);
  useEffect(() => {
    if (getFeatureFlags().long_page_change_notif) {
      if (Multiplayer.isIncrementalSession() && isLoading) {
        isLoading !== g && u && c !== SchemaJoinStatus.JOINED && (f(Date.now()), h(VisualBellActions.enqueue({
          message: 'Page change may take longer during staging deploy',
          error: !1,
          delay: 3e3,
          type: 'long-page-change',
          timeoutOverride: 1 / 0
        })));
      } else {
        let e = m ? Date.now() - m : 0;
        e < 3e3 || e > 9e3 ? (h(VisualBellActions.dequeue({
          matchType: 'long-page-change'
        })), f(null)) : setTimeout(() => {
          h(VisualBellActions.dequeue({
            matchType: 'long-page-change'
          }));
          f(null);
        }, Math.max(0, 9e3 - e));
      }
    }
  }, [isLoading, c, u, h, m, g]);
  return jsx(s8, {
    onPageLoadingFinish: _,
    selectedView: t,
    isLoadingVersionHistory: i,
    theme: s
  });
}
function s8({
  onPageLoadingFinish: e,
  selectedView: t,
  isLoadingVersionHistory: i,
  theme: a
}) {
  let {
    isLoading,
    isLoadingMissingFonts,
    background
  } = getViewState({
    selectedView: t,
    isLoadingVersionHistory: i,
    theme: a
  });
  return (useEffect(() => {
    !isLoading && globalPerfTimer.get('page_loading_overlay') && requestAnimationFrame(() => {
      let t = globalPerfTimer.tryStop('page_loading_overlay');
      t && e && e(t);
    });
  }, [isLoading, e]), isLoading) ? (globalPerfTimer.get('page_loading_overlay') || globalPerfTimer.start('page_loading_overlay'), jsx(s6, {
    background,
    showSpinner: !isLoadingMissingFonts
  })) : null;
}
let oT = e => isCheckedOrHasPropertyValue(e) && !e.hideCheckForQuickCommand;
class ow extends RecordingPureComponent {
  constructor(e) {
    super(e);
    this.searchInputRef = createRef();
    this.scrollContainerRef = createRef();
    this.listboxId = generateUUIDv4();
    this.resultPrefix = generateUUIDv4();
    this.delayedCloseTimerID = 0;
    this.updateQueryAndResults = e => {
      let t;
      if (e) {
        let i = this.searchIndex.search(this.props.appModel, e.trim());
        t = this.sortedByEnabledSearchResults(i);
      } else {
        t = this.recentlyUsedItemsMenu();
      }
      this.logSearchResults(e, t);
      this.setState({
        searchQuery: e,
        searchResults: t,
        activeItemIndex: 0,
        mouseMoved: !1
      });
    };
    this.logSearchResults = (e, t) => {
      this.props.quickActionsSessionId && this.props.fireQueryResultTrackingEvent({
        quickActionsSessionId: this.props.quickActionsSessionId,
        quickActionsQueryId: this.props.latestQuerySessionIdRef.current,
        searchQuery: e,
        numSearchResults: this.state.searchResults.length,
        currentSelection: this.props.currentSelection,
        module: AssetTabType.ALL,
        moduleFilters: null,
        qaVersion: _$$U4,
        searchQueryResults: _$$X2(t)
      });
    };
    this.cancelDelayedClose = () => {
      this.delayedCloseTimerID !== 0 && (clearTimeout(this.delayedCloseTimerID), this.delayedCloseTimerID = 0);
    };
    this.onClick = handleMouseEvent(this, 'click', e => {
      e?.button !== 0 || this.state.searchResults.length > 0 || this.setState({
        searchResults: this.searchIndex.list(this.props.appModel)
      });
    });
    this.onKeyDown = hookForKeyboard(this, 'keydown', e => {
      let t = e => {
        if (this.state.searchResults.length > 0) {
          let t = this.state.activeItemIndex + e;
          let i = t < 0 ? this.state.searchResults.length - 1 : t % this.state.searchResults.length;
          let r = this.state.searchResults.length !== 1 || !this.state.displayAriaActiveDescendant;
          this.setState({
            activeItemIndex: i,
            displayAriaActiveDescendant: r
          });
          this.scrollContainerRef.current.scrollElementAtIndexIntoView(i);
        }
      };
      let i = isExactModifier(e, ModifierKeyCodes.CONTROL);
      let r = BrowserInfo.mac ? isExactModifier(e, ModifierKeyCodes.META) : i;
      let n = BrowserInfo.mac && i;
      switch (e.keyCode) {
        case KeyCodes.ENTER:
          {
            e.preventDefault();
            let t = this.state.searchResults[this.state.activeItemIndex];
            t && _$$l.user(`quick-actions-select-${t.name ?? t.action ?? 'unknown'}`, () => {
              this.onSelectItem(t);
            });
            break;
          }
        case KeyCodes.ESCAPE:
          e.preventDefault();
          this.cancelDelayedClose();
          this.props.dispatch(hideDropdownAction());
          break;
        case KeyCodes.N:
        case KeyCodes.DOWN_ARROW:
          if (e.keyCode === KeyCodes.N && !n) {
            handleKeyboardEventByState(e, KeyboardEventResponse.NO);
            break;
          }
          e.preventDefault();
          this.cancelDelayedClose();
          t(1);
          break;
        case KeyCodes.P:
        case KeyCodes.UP_ARROW:
          if (e.keyCode === KeyCodes.P && !n) {
            handleKeyboardEventByState(e, KeyboardEventResponse.NO);
            break;
          }
          e.preventDefault();
          this.cancelDelayedClose();
          t(-1);
          break;
        case KeyCodes.TAB:
          {
            e.preventDefault();
            let t = this.state.searchResults[this.state.activeItemIndex];
            t && t.itemParameterArgs && (this.onStartParameterMode(t.itemParameterArgs, t, 'tab'), this.logActionSelectedEvent(t));
            break;
          }
        case KeyCodes.R:
        case KeyCodes.S:
        case KeyCodes.D:
        case KeyCodes.E:
        case KeyCodes.F:
        case KeyCodes.O:
          if (r) {
            e.preventDefault();
            let t = this.state.searchQuery + e.key;
            this.updateQueryAndResults(t);
          }
          break;
        default:
          e.key !== 'Meta' && e.key !== 'Ctrl' && this.cancelDelayedClose();
          handleKeyboardEventByState(e, KeyboardEventResponse.NO);
      }
    });
    this.onSearchChange = handleChangeEvent(this, 'change', e => {
      let t = e.currentTarget.value;
      this.updateQueryAndResults(t);
    });
    this.onSelectItem = (e, t) => {
      if (e.disabled) {
        this.cancelDelayedClose();
      } else {
        let i = !1;
        if (e.itemParameterArgs) {
          if (e.runPluginArgs && !this.state.searchQuery) {
            PluginManager.instance.enqueue({
              mode: 'run-forever',
              runPluginArgs: e.runPluginArgs
            });
            i = !0;
          } else if (e.parametersRequired) {
            this.onStartParameterMode(e.itemParameterArgs, e, t?.type === 'click' ? 'click' : 'enter');
            this.logActionSelectedEvent(e);
            return;
          }
        }
        if (e.callback && !i && (e.callback(getActionOrName(e), e.args, this.props.dispatch), i = !0), e.action && (VU.get(e.action, 'quick-actions', e.args)(t), i = !0), i && this.addToRecentlyUsedCommands(e, e.runPluginArgs), this.logActionSelectedEvent(e), e.action === 'toggle-publish' && handleAtomEvent({
          id: 'insert-component-onboarding-event'
        }), oT(e) && !isInteractionOrEvalMode()) {
          this.cancelDelayedClose();
          this.delayedCloseTimerID = setTimeout(() => {
            this.props.dispatch(hideDropdownAction());
          }, 300);
          return;
        }
        this.props.dispatch(hideDropdownAction());
      }
    };
    this.renderResult = (e, t) => {
      let i = t === this.state.activeItemIndex;
      return jsx(oI, {
        actionIcon: this.getActionIcon(e),
        active: i,
        allSavedPlugins: this.props.pluginAndWidgetMenuArgs.allSavedPlugins,
        appModel: this.props.appModel,
        disabled: !!e.disabled,
        id: this.getResultId(t),
        isLastItem: t === this.state.searchResults.length - 1,
        item: e,
        onClick: t => this.onSelectItem(e, t),
        onMouseEnter: () => {
          this.state.mouseMoved && this.setState({
            activeItemIndex: t
          });
        },
        onMouseMove: () => {
          this.state.mouseMoved || this.setState({
            mouseMoved: !0,
            activeItemIndex: t
          });
        },
        publishedPlugins: this.props.pluginAndWidgetMenuArgs.publishedPlugins,
        recordingKey: generateRecordingKey(this.props, e.action || 'searchResult'),
        role: 'option',
        searchQuery: this.state.searchQuery
      }, e.action || t);
    };
    this.searchIndex = this.createSearchIndex();
    this.state = {
      searchQuery: '',
      searchResults: this.recentlyUsedItemsMenu(),
      activeItemIndex: 0,
      displayAriaActiveDescendant: !0,
      mouseMoved: !1
    };
  }
  componentDidUpdate(e, t) {
    super.componentDidUpdate(e, t);
    deepEqual(this.props.pluginAndWidgetMenuArgs, e.pluginAndWidgetMenuArgs) || (this.searchIndex = this.createSearchIndex());
  }
  createSearchIndex() {
    let e = _$$M2({
      extensionMenuProps: this.props.pluginAndWidgetMenuArgs,
      isReadOnly: this.props.appModel.isReadOnly,
      includeDisabled: !0
    });
    return new xm(this.props.appModel, this.props.selectedView, [...this.props.fullscreenMenuItems, ...e], {
      includeDisabled: !0,
      acceptsUnicode: !0
    });
  }
  componentDidMount() {
    super.componentDidMount();
    this.searchInputRef.current.focus();
  }
  logActionSelectedEvent(e) {
    let {
      createMetrics
    } = this.props.interactionMetrics;
    kp({
      item: e,
      searchQuery: this.state.searchQuery,
      qaVersion: _$$U4,
      numSearchResults: this.state.searchResults.length,
      searchPosition: this.state.activeItemIndex,
      moduleFilters: null,
      ...createMetrics()
    });
  }
  recentlyUsedItemsMenu() {
    return filterNotNullish(this.props.recentlyUsedQuickCommands.map(e => {
      let t = this.searchIndex.getItem(this.props.appModel, e.displayName);
      t && e.runPluginArgs && (t.runPluginArgs = e.runPluginArgs);
      return t;
    }));
  }
  sortedByEnabledSearchResults(e) {
    let t = e.filter(e => !e.disabled);
    let i = e.filter(e => e.disabled);
    return t.concat(i);
  }
  addToRecentlyUsedCommands(e, t) {
    let i = EG(e);
    let r = this.props.recentlyUsedQuickCommands.filter(e => e.displayName !== i && !!this.searchIndex.getItem(this.props.appModel, e.displayName));
    r.length >= 3 && r.pop();
    r.unshift({
      displayName: i,
      runPluginArgs: t
    });
    this.props.dispatch(recentlyUsedQuickCommands(r));
    this.props.updateFrecencyHistory(e, this.state.searchQuery);
    addRecentlyUsedAction({
      displayText: i,
      runPluginArgs: t,
      localFileIdOrPluginId: e.pluginLocalFileId ?? e.pluginId
    });
  }
  getActionIcon(e) {
    if (e.name === 'plugins-menu-item') {
      let t;
      return (e.pluginId && (t = getPluginByFileId({
        idToSearch: e.pluginId,
        localExtensionsByFileId: void 0,
        publishedExtensions: {
          ...this.props.pluginAndWidgetMenuArgs.publishedPlugins,
          ...this.props.pluginAndWidgetMenuArgs.publishedWidgets
        }
      })), t && !hasLocalFileId(t)) ? jsx(PluginImage, {
        className: ZR,
        plugin: t,
        role: 'presentation'
      }) : jsx(SvgComponent, {
        className: _$$pB,
        svg: _$$A19,
        ariaLabel: `${e.name} icon`
      });
    }
    if (e.iconType && e.iconType === 'external_link') {
      return jsx(SvgComponent, {
        svg: _$$A18
      });
    }
  }
  onStartParameterMode(e, t, i) {
    this.addToRecentlyUsedCommands(t);
    this.props.onStartParameterEntry(e, t, i);
  }
  getResultId(e) {
    return `${this.resultPrefix}-${e}`;
  }
  renderResults() {
    let e = this.state.searchResults;
    if (this.state.searchQuery) {
      if (this.state.searchResults.length === 0) {
        return jsx('div', {
          className: Tk,
          children: renderI18nText('fullscreen_actions.no_matches')
        });
      }
    } else if (this.state.searchResults.length === 0) {
      return null;
    }
    return jsx(_$$h4, {
      id: this.listboxId,
      ref: this.scrollContainerRef,
      resultCount: e.length,
      role: 'listbox',
      children: e.map(this.renderResult)
    });
  }
  render() {
    let e = this.state.searchQuery || this.state.searchResults.length;
    return jsxs(_$$H2, {
      'recordingKey': this.props.recordingKey || '',
      'onKeyDown': this.onKeyDown,
      'data-testid': 'quick-actions',
      'children': [jsxs('div', {
        className: $P,
        children: [jsx(SvgComponent, {
          svg: _$$A20,
          className: qc
        }), jsx('input', {
          'ref': this.searchInputRef,
          'aria-activedescendant': e && (this.state.displayAriaActiveDescendant || this.state.searchResults.length > 1) ? this.getResultId(this.state.activeItemIndex) : void 0,
          'aria-autocomplete': 'list',
          'aria-controls': this.listboxId,
          'aria-expanded': e ? 'true' : 'false',
          'aria-owns': this.listboxId,
          'className': _$$Rt,
          'dir': 'auto',
          'maxLength': 150,
          'onChange': this.onSearchChange,
          'onClick': this.onClick,
          'placeholder': formatI18nMessage('quick-actions-modal-placeholder'),
          'role': 'combobox',
          'spellCheck': !1,
          'value': this.state.searchQuery
        })]
      }), this.renderResults()]
    });
  }
}
ow.displayName = 'QuickActions';
let oS = connect((e, t) => {
  return {
    pluginAndWidgetMenuArgs: t.pluginAndWidgetMenuArgs,
    fullscreenMenuItems: t.fullscreenMenuItems,
    interactionMetrics: t.interactionMetrics,
    fireQueryResultTrackingEvent: t.fireQueryResultTrackingEvent,
    currentSelection: t.currentSelection,
    updateFrecencyHistory: t.updateFrecencyHistory,
    appModel: e.mirror.appModel,
    selectedView: e.selectedView,
    recentlyUsedQuickCommands: t.recentlyUsedQuickCommands,
    onStartParameterEntry: t.onStartParameterEntry,
    locale: e.user?.locale,
    quickActionsSessionId: t.quickActionsSessionId,
    latestQuerySessionIdRef: t.latestQuerySessionIdRef
  };
}, e => {
  return {
    dispatch: e
  };
})(ow);
function oj(e) {
  let t = c4();
  let i = FX();
  let n = Sk();
  let {
    addFrecencyUsage
  } = fJ();
  let o = useSelector(getSelectedItemTypes);
  let l = Ev();
  let c = useAtomWithSubscription(dd);
  let u = useAtomWithSubscription(Rt);
  let p = _$$F3(u);
  let h = wo();
  return jsx(oS, {
    ...e,
    pluginAndWidgetMenuArgs: t,
    fullscreenMenuItems: i,
    interactionMetrics: n,
    updateFrecencyHistory: addFrecencyUsage,
    fireQueryResultTrackingEvent: l,
    currentSelection: o,
    quickActionsSessionId: c,
    latestQuerySessionIdRef: p,
    recentlyUsedQuickCommands: h
  });
}
function oI(e) {
  let t = getObservableOrFallback(EditorPreferencesApi().showQuickCommandRankDebug);
  return jsx(ok, {
    ...e,
    showQuickCommandRankDebug: t
  });
}
class ok extends RecordingPureComponent {
  constructor(e) {
    super(e);
    this.onClick = handleMouseEvent(this, 'click', e => {
      if (!this.props.onClick) return SKIP_RECORDING;
      this.props.onClick(e);
    });
    this.getDisplayText = () => {
      let e = this.props.item;
      if (e.itemParameterArgs && e.runPluginArgs && !this.props.searchQuery) {
        return jsx(_$$_, {
          runPluginArgs: e.runPluginArgs,
          itemParameterArgs: e.itemParameterArgs
        });
      }
      if (e.itemPath) {
        let t = e.itemPath;
        return jsx(_$$h3, {
          itemPath: t
        });
      }
      let t = EG(e);
      this.props.showQuickCommandRankDebug && void 0 !== e.stringMatchScore && void 0 !== e.popularityScore && (t = `M${e.stringMatchScore} P${e.popularityScore}: ${t}`);
      return jsx('div', {
        className: _$$D4,
        children: t
      });
    };
    oT(this.props.item) ? this.state = {
      itemIsChecked: isMenuItemChecked(this.props.appModel, this.props.item)
    } : this.state = {};
  }
  componentDidUpdate(e, t) {
    super.componentDidUpdate(e, t);
    this.state.itemIsChecked != null && this.setState({
      itemIsChecked: isMenuItemChecked(this.props.appModel, this.props.item)
    });
  }
  render() {
    let e = this.props.item;
    let t = this.getDisplayText();
    let i = getActionOrName(e);
    let n = e.shortcutText || c1(this.props.appModel.keyboardShortcuts, i);
    let a = void 0 !== this.props.item.runPluginArgs;
    let s = e.menuActionType && e.menuActionType === 'run-local-plugin' && (!e.runPluginArgs || this.props.searchQuery);
    let o = e.name === 'plugins-menu-item' && !!e.itemParameterArgs && e.itemParameterArgs.parameters.length > 0;
    let d = null;
    void 0 !== this.state.itemIsChecked ? d = jsx(_$$S6, {
      checked: this.state.itemIsChecked,
      disabled: this.props.disabled
    }) : this.props.actionIcon && (d = this.props.actionIcon);
    let c = `${this.props.active ? _$$ix2 : Ke} ${this.props.disabled ? wn : ''}`;
    return jsxs('div', {
      'className': c,
      'onMouseMove': this.props.onMouseMove,
      'onMouseEnter': this.props.onMouseEnter,
      'onClick': this.onClick,
      'id': this.props.id,
      'role': this.props.role,
      'aria-disabled': this.props.disabled || void 0,
      'aria-checked': this.props.item.checked,
      'children': [jsx('div', {
        className: EA,
        children: d
      }), jsxs('div', {
        className: V4,
        children: [t, s && jsx('div', {
          className: Vu,
          children: renderI18nText('fullscreen_actions.development')
        })]
      }), n && !o && jsx('div', {
        className: LE,
        children: jsx(KeyboardShortcut, {
          shortcut: n
        })
      }), !n && o && jsxs('div', {
        className: LE,
        children: [jsx('div', {
          className: Hq,
          children: renderI18nText('fullscreen_actions.tab')
        }), a && jsx('div', {
          className: w8,
          children: renderI18nText('fullscreen_actions.to_edit')
        }), jsx(SvgComponent, {
          svg: _$$A17
        })]
      }), !n && e.isRepairCommand && getFeatureFlags().internal_only_debug_tools && jsx('div', {
        style: styleBuilderInstance.colorBgTertiary.p8.bRadius8.borderBox.flex.itemsCenter.justifyCenter.mr8.h16.add({
          fontSize: '8px'
        }).$,
        children: 'REPAIR'
      })]
    });
  }
}
function oN({
  parameterEntryArgs: e,
  fireTrackingEvent: t
}) {
  let [i, a] = useState();
  let [s, o] = useState(!0);
  let l = Xr(dd);
  if (useEffect(() => {
    if (s) {
      o(!1);
      let i = generateUUIDv4();
      l(i);
      t(i);
      e && a({
        args: e
      });
    }
  }, [e, s, t, l]), !i) {
    return jsx(oj, {
      recordingKey: 'quickActions',
      onStartParameterEntry: (e, t, i) => {
        let r;
        switch (i) {
          case 'tab':
            r = 'quick-actions-tab';
            break;
          case 'enter':
            r = 'quick-actions-enter';
            break;
          case 'click':
            r = 'quick-actions-click';
            break;
          default:
            throwTypeError(i);
        }
        a({
          args: {
            ...e,
            triggeredFrom: r
          },
          item: t
        });
      }
    });
  }
  {
    let {
      args,
      item
    } = i;
    let n = item ? EG(item) : void 0;
    return jsx(_$$ry, {
      command: args.command,
      displayName: args.displayName,
      initialParameterValues: item?.runPluginArgs?.parameterValues,
      onExitParameterEntry: () => {
        a(void 0);
      },
      parameterOnly: args.parameterOnly,
      parameters: args.parameters,
      pluginId: args.pluginId,
      pluginLocalFileId: args.pluginLocalFileId,
      recentlyUsedCommandName: n,
      recordingKey: 'parameterEntry',
      triggeredFrom: args.triggeredFrom
    });
  }
}
ok.displayName = 'QuickActionsResult';
function oU({
  inheritStyleKeyField: e,
  initialStyleCreationPaint: t,
  recordingKey: i,
  onSubmit: s,
  shouldUseEyedropperStyleCreationFlow: o
}) {
  let l = useSelector(e => e.mirror.selectedStyleProperties);
  let d = useSelector(e => e.mirror.sceneGraphSelection);
  let c = useRef(Object.keys(d).length > 0);
  let u = mapStyleKeyToType(e);
  let {
    styleRef,
    createStyle
  } = _$$u3({
    inheritStyleKeyField: e,
    initialStyleCreationPaint: t,
    isCreatingFromSelection: c.current,
    trackingOptions: {
      styleType: u
    },
    shouldUseEyedropperStyleCreationFlow: o
  });
  let m = useHandleFocusEvent(i, 'submit', () => {
    createStyle();
    s(styleRef);
  });
  return l.styleType ? jsxs(zK.Provider, {
    value: zM.CREATE_VARIABLE_STYLE,
    children: [jsx(O8, {
      type: l.styleType,
      recordingKey: i,
      isInspectPanel: !1,
      selectedStyleProperties: l,
      showProperties: !0,
      onEnterPressed: m
    }), jsx(AutoLayout, {
      horizontalAlignItems: 'end',
      verticalAlignItems: 'center',
      padding: 16,
      children: jsx(Button, {
        onClick: m,
        disabled: !styleRef,
        variant: 'primary',
        children: renderI18nText('design_systems.create_style.create_style')
      })
    })]
  }) : null;
}
function oV({
  clientType: e
}) {
  let t = trackFileEventWithStore();
  useEffect(() => {
    let i = Date.now();
    return () => {
      let r = Date.now() - i;
      t('reconnecting_modal_shown', {
        msElapsed: r,
        clientType: e
      });
      r > 1e3 && sendReconnectingBanner(e);
    };
  }, [e, t]);
  return jsx('div', {
    className: `${_$$h5} ${_$$M3}`,
    children: jsx(setupThemeContext, {
      mode: 'dark',
      children: jsxs(_$$bL2, {
        children: [jsx(LoadingSpinner, {}), jsx(QB, {
          children: renderI18nText('reconnecting_modal.loading')
        })]
      })
    })
  });
}
function oW() {
  trackFileEventWithStore()('waiting_for_sync_modal_shown');
  return jsx('div', {
    className: `${_$$h5}`,
    children: jsx(setupThemeContext, {
      mode: 'dark',
      children: jsxs(_$$bL2, {
        children: [jsx(LoadingSpinner, {}), jsx(QB, {
          children: renderI18nText('waiting_for_sync_modal.saving')
        })]
      })
    })
  });
}
function o$(e) {
  let t = useIsCodeViewPanel();
  let i = JI();
  if (t || !i) return null;
  let n = normalizeValue(i?.url) ?? '';
  let a = null;
  if (n !== '') {
    let {
      url,
      nodeIdInThisFile,
      versionId
    } = parseLinkForContext(n, e.store);
    a = nodeIdInThisFile && !versionId ? {
      type: 'internal',
      id: nodeIdInThisFile
    } : {
      type: 'url',
      url
    };
  }
  let {
    x,
    y
  } = i;
  let d = fullscreenValue.getViewportInfo();
  let c = Math.min(Math.max(x, 100), d.width - 100);
  return jsx('div', {
    className: 'sites_hyperlink_editor--container--67YMj',
    style: {
      left: Math.round(c + d.x),
      top: Math.round(y + d.y)
    },
    children: jsxs('div', {
      className: `sites_hyperlink_editor--popup--3kD7E _overlayBase--_overlayBase--Rkj8l ${Dm}`,
      children: [a && jsx(SvgComponent, {
        svg: _$$A21,
        className: 'sites_hyperlink_editor--breakIcon--LW2w0',
        onMouseDown: t => {
          e.onClickTrash(t);
        },
        recordingKey: generateRecordingKey(e.recordingKey, 'breakHyperlink')
      }), jsx(MO, {
        id: 'inline_editor',
        recordingKey: e.recordingKey,
        link: a,
        onLinkChange: t => {
          let i;
          t?.type === 'url' ? i = t.url : t?.type === 'internal' && (i = fullscreenValue.generateLinkToNode(t.id));
          e.setUrl(i ?? '');
          Fullscreen.hideHyperlinkEditor();
        },
        isHyperlinkEditor: !0
      })]
    })
  });
}
function o0(e) {
  return e.startsWith('mailto:') ? e.includes('?') ? e : e.substring(7) : e;
}
function o1(e) {
  let t = useDispatch();
  let i = useStore().getState();
  let [l, d] = useState(o0(e.hyperlinkLocation.url));
  let c = useRef(!0);
  let u = useRef(l);
  useEffect(() => {
    u.current = l;
  }, [l]);
  let p = useCallback(t => _$$l.user('set-hyperlink', () => !!Fullscreen && Fullscreen.setHyperlink(o0(t), e.hyperlinkLocation.nodeID, e.hyperlinkLocation.rangeStart, e.hyperlinkLocation.rangeEnd, null)), [e.hyperlinkLocation.nodeID, e.hyperlinkLocation.rangeEnd, e.hyperlinkLocation.rangeStart]);
  useEffect(() => () => {
    c.current && (p(u.current), trackEventAnalytics('Hyperlink Editor Updated Link On Dismiss'));
  }, [p]);
  let h = useHandleChangeEvent(e.recordingKey, 'change', e => {
    d(e.target.value.trim());
  });
  let m = useHandleKeyboardEvent(e.recordingKey, 'keydown', i => {
    if (handleKeyboardEventByState(i, KeyboardEventResponse.NO)) return SKIP_RECORDING;
    if (i.key === 'Escape') {
      i.preventDefault();
      c.current = !1;
      trackEventAnalytics('Hyperlink Editor Cancelled On Escape');
      Fullscreen.hideHyperlinkEditor();
    } else if (i.key === 'Enter') {
      if (i.preventDefault(), c.current = !1, p(l)) {
        if (l === '') {
          trackEventAnalytics('Hyperlink Editor Deleted Link');
          t(VisualBellActions.enqueue({
            message: getI18nString('hyperlink.link_deleted')
          }));
        } else {
          let t = {};
          if (l && !l.startsWith('mailto:')) {
            try {
              let i = new URL(xT(l)).hostname;
              let r = e.editorType;
              t = {
                domain: i,
                editorType: r
              };
            } catch (e) {}
          }
          trackEventAnalytics('Hyperlink Editor Updated Link On Enter', t);
        }
      } else {
        trackEventAnalytics('Hyperlink Editor Invalid Link');
        t(VisualBellActions.enqueue({
          message: getI18nString('hyperlink.invalid_link_plain')
        }));
      }
      Fullscreen.hideHyperlinkEditor();
    }
  });
  let f = useHandleMouseEvent(e.recordingKey, 'click', i => {
    c.current = !1;
    e.hyperlinkLocation && _$$l.user('clear-hyperlink', () => Fullscreen.setHyperlink('', e.hyperlinkLocation.nodeID, e.hyperlinkLocation.rangeStart, e.hyperlinkLocation.rangeEnd, null));
    t(VisualBellActions.enqueue({
      message: getI18nString('hyperlink.link_deleted')
    }));
    Fullscreen.hideHyperlinkEditor();
    i.stopPropagation();
  });
  let g = e.hyperlinkLocation.x;
  let y = e.hyperlinkLocation.y;
  let b = fullscreenValue.getViewportInfo();
  let C = Math.round(Math.min(Math.max(g, 100), b.width - 100) + b.x);
  let v = Math.round(y + b.y);
  return e.editorType === FEditorType.Sites || e.editorType === FEditorType.Figmake ? jsx(o$, {
    recordingKey: 'hyperlinkEditor',
    setUrl: d,
    onClickTrash: f,
    store: i
  }) : jsx(_$$c, {
    url: l,
    location: new Point(C, v),
    onInputChange: h,
    onInputKeyDown: m,
    onBlur: noop,
    onClickTrash: f
  });
}
function o9(e) {
  return {
    selectedView: e.selectedView,
    user: e.user,
    currentUserOrgId: e.currentUserOrgId,
    comments: e.comments,
    dropdownShown: e.dropdownShown,
    modalShown: e.modalShown,
    pickerShown: e.pickerShown,
    multiplayerEmoji: e.multiplayerEmoji,
    eyedropper: e.eyedropper,
    needsUpgrade: e.needsUpgrade,
    progressBarState: e.progressBarState,
    showingReconnectingModal: e.showingReconnectingModal,
    showingOpenDesktopAppModal: e.showingOpenDesktopAppModal,
    openFile: e.openFile,
    pagesList: e.mirror.appModel.pagesList,
    timerModalState: e.timer.modalState,
    timerTime: e.timer.time,
    universalInsertModal: e.universalInsertModal,
    isCommentsToolSelected: e.mirror.appModel.currentTool === DesignGraphElements.COMMENTS,
    loadingBackgroundColor: e.desktopNewTab.loadingBackgroundColor,
    isReadOnly: e.mirror.appModel.isReadOnly,
    currentPage: e.mirror.appModel.currentPage,
    hyperlinkLocation: e.mirror.appModel.hyperlinkLocation,
    onCanvasNameEditorInfo: e.mirror.appModel.onCanvasNameEditorInfo,
    topLevelMode: e.mirror.appModel.topLevelMode,
    showUi: e.mirror.appModel.showUi,
    showToolbar: !0,
    showKeyboardShortcuts: e.mirror.appModel.showKeyboardShortcuts,
    loadingEmbeds: e.mirror.appModel.loadingEmbeds,
    fileIsLoading: e.progressBarState.mode === UIVisibilitySetting.HIDE_UI || e.progressBarState.mode === UIVisibilitySetting.ON_AND_LOCKED,
    hasCursorBot: !!getFeatureFlags().internal_only_debug_tools || !!e.userFlags.has_cursor_bot_onboarding_v2
  };
}
function le({
  fileKey: e
}) {
  let t = useDispatch();
  let i = useStore();
  let r = useSelector(e => e.isFullscreenDocumentLoaded);
  let s = _$$jz();
  let l = _$$e_() === $_.ELIGIBLE;
  let d = useDeepEqualSceneValue(e => e.getCurrentPage()?.guid);
  useLayoutEffect(() => {
    if (!r || !l) return;
    let n = i.getState();
    let a = s?.find(e => e.inProgress);
    let c = n.mirror.appModel.votingSessionInfo;
    let u = c.sessionId && s ? s.find(e => e.id === c.sessionId) : null;
    if (a) {
      if (a.id !== c.sessionId) {
        t(_$$au({}));
        let i = isLoading(n.loadingState, $c(e)) || n.voting.lastInitiatedVotingSessionId === a.id;
        t(H1({
          votingStage: i ? SessionStatus.JOINED : SessionStatus.NOT_JOINED
        }));
      }
    } else {
      c.sessionId && !u ? t(H1({
        votingStage: SessionStatus.NO_SESSION
      })) : !a && c.sessionId && c.votingStage !== SessionStatus.ENDED && (t((u?.pageNodeId && getResourceDataOrFallback(u.pageNodeId)) === d ? H1({
        sessionId: c.sessionId,
        votingStage: SessionStatus.ENDED
      }) : H1({
        votingStage: SessionStatus.NO_SESSION
      })), t(D6('')));
    }
  }, [e, t, s, r, l, i, d]);
  return null;
}
function lt() {
  let e = useSelector(e => e.isFullscreenDocumentLoaded);
  let t = useRef(!1);
  useEffect(() => {
    e && !t.current && (initializeNavigationPreferences(), t.current = !0);
  }, [e, t]);
  return null;
}
let li = {
  VariableAndStyleCreateModalRoot({
    initialPosition: e,
    initialVariableValue: t,
    inheritStyleKeyField: i,
    initialStyleCreationPaint: n,
    initialView: s,
    resolvedType: l,
    onCreateVariable: d,
    onCreateStyle: c,
    onClose: u,
    disableStyleModal: p,
    shouldUseEyedropperStyleCreationFlow: h
  }) {
    let m = 'createVariableAndStyleModal';
    NF({
      resolvedType: l
    });
    let {
      onCreateVariableSubmit,
      onCreateStyleSubmit
    } = function ({
      onCreateVariable: e,
      onCreateStyle: t,
      onClose: i
    }) {
      let {
        onCreateVariableSubmit: _onCreateVariableSubmit
      } = useVariableCreateModalActions({
        onCreateVariable: e,
        onClose: i
      });
      let n = useOpenFileLibraryKey();
      let s = useSelector(e => e.mirror.sceneGraph);
      return {
        onCreateVariableSubmit: _onCreateVariableSubmit,
        onCreateStyleSubmit(e) {
          let r = function (e) {
            let t = StylesBindings.getStyleNodeId(e.key, e.version);
            let i = s.get(t);
            return i ? {
              type: PrimaryWorkflowEnum.STYLE,
              name: i.name,
              library_key: n ?? _$$l3(''),
              key: i.styleKeyForPublish,
              thumbnail_url: '',
              canvas_url: '',
              content_hash: i.styleVersionHash ?? void 0,
              userFacingVersion: i.userFacingVersion,
              node_id: i.guid,
              isLocal: !0,
              style_type: i.styleType
            } : null;
          }(e);
          r && (t(r), i());
        }
      };
    }({
      onCreateVariable: d,
      onCreateStyle: c,
      onClose: u
    });
    let [x, y, b] = Tabs.useTabs({
      createStyle: !p,
      createVariable: !0
    }, {
      recordingKey: generateRecordingKey(m, 'viewTabs'),
      defaultActive: () => function (e) {
        let t = ['createVariable', 'createStyle'];
        return e && t.includes(e) ? e : t[0];
      }(s)
    });
    return jsx(bL, {
      onClose: u,
      defaultPosition: e,
      width: _$$i2,
      recordingKey: 'createStyleWindow',
      children: jsxs(DialogContents, {
        children: [jsxs(DialogHeader, {
          children: [jsx(DialogHiddenTitle, {
            children: renderI18nText('design_systems.create_style.title')
          }), jsxs(Tabs.TabStrip, {
            manager: b,
            children: [jsx(Tabs.Tab, {
              ...x.createStyle,
              children: renderI18nText('design_systems.create_style.style')
            }), jsx(Tabs.Tab, {
              ...x.createVariable,
              children: renderI18nText('variables.create_modal.title')
            })]
          })]
        }), jsxs(DialogBody, {
          padding: 0,
          children: [jsx(Tabs.TabPanel, {
            ...y.createStyle,
            children: jsx(oU, {
              inheritStyleKeyField: i,
              initialStyleCreationPaint: n,
              recordingKey: 'createStyleModal',
              onSubmit: onCreateStyleSubmit,
              shouldUseEyedropperStyleCreationFlow: h ?? !1
            })
          }), jsx(Tabs.TabPanel, {
            ...y.createVariable,
            children: jsx(CreateVariableForm, {
              resolvedType: l,
              initialValue: t,
              recordingKey: generateRecordingKey(m, 'createVariableForm'),
              onSubmit: onCreateVariableSubmit
            })
          })]
        })]
      })
    });
  },
  VariableAndComponentPropCreateModalRoot: NO
};
// root fullscreen component
// todo: break up into smaller components
export function $$lr0({
  children: e
}) {
  let t = selectWithShallowEqual(o9);
  let i = useDispatch();
  let m = getUserId();
  let T = t.openFile ? t.openFile.key : null;
  let j = getObservableValue(AppStateTsApi?.uiState().shouldShowAutoLayoutHintsIfExist, !1);
  let I = getObservableValue(AppStateTsApi?.uiState().autoLayoutShortcutHints, new Map());
  let k = useSubscription(StarterFileEditConfirmation({
    key: T ?? ''
  }), {
    enabled: !!T
  });
  let N = !1;
  if (k && k.status === 'loaded' && t.openFile) {
    let e = k.data.file;
    if (e && m) {
      let i = e.linkAccess;
      let r = getResourceDataOrFallback(e.team?.isStarterTeam, !1);
      let n = getResourceDataOrFallback(e.team?.isStudentTeam, !1);
      let a = !!e.roles.find(e => e.userId === m);
      t.openFile.canEdit && i === FPermissionLevelType.EDIT && r && !n && !a && (N = !0);
    }
  }
  hasCmsCollection(T);
  let A = t.openFile?.editorType === 'design';
  let O = useIsFullscreenOverview();
  let B = useIsFullscreenWithDevVariables();
  let G = useIsFullscreenDevModeComponentBrowser();
  let K = useIsSelectedFigmakeFullscreen();
  let [H] = useAtomValueAndSetter(autosaveAtom);
  let z = Xr(t5);
  let V = !t.showUi && TY(t.dropdownShown);
  let W = t.dropdownShown?.type === jv;
  let Y = W ? t.dropdownShown?.data?.parameterEntryArgs : void 0;
  let Z = t.dropdownShown?.data?.fireQuickActionsTrackingEvent || noop;
  let Q = !_$$ty();
  let ee = useCallback(e => {
    i(_$$r({
      dataTransfer: e.dataTransfer,
      clientX: e.clientX,
      clientY: e.clientY
    }));
  }, [i]);
  let ei = useCallback(e => {
    fullscreenValue.reparentRootElement(e);
    e && e.addEventListener('drop', ee);
  }, [ee]);
  let er = H && H.status === FileProcessingStatus.WAITING;
  let en = !er && t.showingReconnectingModal;
  return jsxs(Fragment, {
    children: [getFeatureFlags().ee_color_management_debug ? jsx(L, {}) : null, T && jsx(le, {
      fileKey: T
    }), !(BrowserInfo.isIpad || BrowserInfo.isIpadNative || BrowserInfo.isMobileBrowser || BrowserInfo.isMeetDevice) && jsx(lt, {}), jsx('div', {
      'className': MY,
      'data-forward-events-to-fullscreen': !0,
      'children': jsx(_$$l2.Provider, {
        value: li,
        children: jsxs(ez, {
          children: [getFeatureFlags().cursor_bot && A && t.hasCursorBot && jsx(s$, {}), !O && !B && !G && !K && jsx('div', {
            ref: ei,
            onMouseEnter: () => z(!0),
            onMouseLeave: () => z(!1)
          }, 'fullscreen-container'), jsx(s7, {}), jsx(_$$T2, {}), isVsCodeEnvironment() && getFeatureFlags().dt_vscode_ready_for_dev && jsx(_$$f, {
            isOnReadyForDevPage: !1
          }), !t.fileIsLoading && jsx($, {}), V && jsx(_$$e2, {
            dropdown: t.dropdownShown
          }, 'fullscreen-menu'), W && jsx(ErrorBoundaryCrash, {
            boundaryKey: 'QuickActionsOuter',
            onError: () => {
              i(VisualBellActions.enqueue({
                message: 'Unable to open quick actions',
                type: 'react-error'
              }));
            },
            fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
            children: jsx(oN, {
              parameterEntryArgs: Y,
              fireTrackingEvent: Z
            }, 'quick-actions')
          }), jsx(J, {}), getFeatureFlags().ce_al_experiments_on && j && I.size > 0 && jsx(eu, {}), e, t.hyperlinkLocation && jsx(o1, {
            hyperlinkLocation: t.hyperlinkLocation,
            editorType: t.selectedView.editorType,
            recordingKey: 'hyperlinkEditor'
          }), jsx(_$$y, {}), t.progressBarState.mode !== UIVisibilitySetting.OFF && jsx(z2, {
            editorType: mapEditorTypeToFileType(t.selectedView.editorType),
            progressBarMode: t.progressBarState.mode,
            progressBarType: t.progressBarState.type,
            left: 0
          }), er ? jsx(oW, {}) : en && jsx(oV, {
            clientType: 'fullscreen'
          }), jsx(Nd, {}), jsx(jx, {
            showStartModal: N
          }), t.dropdownShown && !Q && !BrowserInfo.isMeetDevice && jsx(ErrorBoundaryCrash, {
            boundaryKey: 'FullscreenContextMenu',
            onError: () => {
              i(VisualBellActions.enqueue({
                message: 'Unable to open context menu',
                type: 'react-error'
              }));
            },
            fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
            children: jsx(aC, {
              dropdownShown: t.dropdownShown,
              selectedView: t.selectedView,
              ariaLabelledBy: getI18nString('fullscreen.fullscreen_view.context_menu.aria_label')
            })
          }), t.pickerShown?.id === C9 && jsx(tS, {}), t.pickerShown?.id === _$$O4 && jsx(_$$S5, {
            recordingKey: 'nudgeAmountPicker'
          }), jsx(iv, {})]
        })
      })
    }), jsx(et, {}), t.showKeyboardShortcuts && jsx(sq, {
      recordingKey: 'keyboardShortcutPanel'
    }), getFeatureFlags().react_scenegraph && jsx(_$$U5, {
      fallback: NONE_SYMBOL.NONE
    })]
  });
}
export const sk = $$lr0;