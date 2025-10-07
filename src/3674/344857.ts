import _require from "../3592/633592";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useEffect, useCallback, useRef, memo, createContext, useContext, useMemo, forwardRef, useState, useLayoutEffect, lazy, Suspense, Fragment as _$$Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandoffBindingsCpp, DesignGraphElements, ColorFormatEnum, LayoutTabType, IAssertResource, SceneGraphHelpers, Fullscreen, FileSourceType, Thumbnail, ComponentPropType, VariableDataType, OperationType, AppStateTsApi, LayoutSizingMode, BuildStatus, UIVisibilitySetting, NodePropertyCategory, Fonts, FitMode, DesignWorkspace, ViewType } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { useAtomValueAndSetter, useAtomWithSubscription, atom, atomStoreManager, Xr, useResetAtom, createLocalStorageAtom } from "../figma_app/27355";
import { useHasParentOrgId } from "../905/882262";
import { si as _$$si, wS, g$, iX as _$$iX, Bv, x9 } from "../figma_app/221240";
import { ServiceCategories } from "../905/165054";
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from "../905/751457";
import { trackEventAnalytics } from "../905/449184";
import { globalPerfTimer } from "../905/542194";
import { useSingleEffect } from "../905/791079";
import { selectWithShallowEqual } from "../905/103090";
import { getSelectedDevModePropertiesPanelTab, setSelectedDevModePropertiesPanelTab, updateHoveredNode, clearSelection, replaceSelection, getEnabledDevModePropertiesPanelTabs, getPropertiesPanelTab, setPropertiesPanelTab } from "../figma_app/741237";
import { useDeepEqualSceneValue, $y, useStrictDeepEqualSceneValue, useImmediateSceneValue } from "../figma_app/167249";
import { ec as _$$ec, Te } from "../figma_app/29089";
import { uQ as _$$uQ, NM, Zl, Tv } from "../figma_app/311375";
import { OM, uL as _$$uL } from "../figma_app/422471";
import { useCanAccessDevModeEntryPoint, useCanUseDevModeDemoFile, useCanAccessFullDevMode } from "../figma_app/473493";
import { W as _$$W } from "../905/200727";
import { TrackingProvider } from "../figma_app/831799";
import { EditorPreferencesApi, getDevHandoffInspectSplitPosition, getColorFormat } from "../figma_app/740163";
import { fullscreenAlias } from "../905/37051";
import { useCurrentFileKey, selectCurrentFile, useOpenFileLibraryKey, useSourceFileKey, selectOpenFileKey } from "../figma_app/516028";
import { OnboardingSequence } from "../905/152487";
import { xT, Yh, g_, Ye } from "../figma_app/32128";
import { t as _$$t, c as _$$c } from "../905/722657";
import { LoadingSpinner } from "../905/443820";
import { setupThemeContext } from "../905/614223";
import { getSingletonSceneGraph, ReduxSceneGraph } from "../905/700578";
import { isColorDark, colorToRgbaString } from "../figma_app/191804";
import { useSubscription } from "../figma_app/288654";
import { getResourceDataOrFallback } from "../905/723791";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { styleBuilderInstance } from "../905/941192";
import { DialogLabel } from "../905/799737";
import { buildUploadUrl, isGovCluster } from "../figma_app/169182";
import { renderI18nText, getI18nString } from "../905/303541";
import { UpgradeAction } from "../905/370443";
import { FileDevModeTrialRequestPending, FileIsInDevModeTrial, FileDevModeRequestDenied, FileAccountTypeRequest, DeveloperRelatedLinksForNode, DeveloperRelatedLinks, FileCanExport } from "../figma_app/43951";
import { U as _$$U } from "../figma_app/65327";
import { I as _$$I } from "../3674/466343";
import { DD, P_, u1 as _$$u } from "../3674/371829";
import { J as _$$J3 } from "../figma_app/261874";
import { BC, w_, Gu } from "../3674/61752";
import { FProductAccessType, FOrganizationLevelType, FBuildStatusType, FFileType } from "../figma_app/191312";
import { isTeamLocked } from "../figma_app/345997";
import { getTeamById } from "../figma_app/598018";
import { wH } from "../figma_app/680166";
import { J as _$$J4 } from "../905/202542";
import { qm } from "../figma_app/431689";
import { R as _$$R2 } from "../3674/430035";
import { customHistory } from "../905/612521";
import { VisualBellActions } from "../905/302958";
import { accountTypeRequestHandler } from "../905/281010";
import { n as _$$n } from "../3674/214307";
import { DevModeUI } from "../905/15667";
import { getThemeContextOrDefault } from "../905/158740";
import eN from "classnames";
import { Wi, JR, Qp } from "../figma_app/162641";
import { SvgComponent } from "../905/714743";
import { Dm, i as _$$i, ak as _$$ak } from "../figma_app/8833";
import { $ as _$$$ } from "../figma_app/644304";
import { s as _$$s2 } from "../b2835def/812839";
import { d as _$$d2 } from "../3682/659785";
import { n as _$$n2 } from "../1528/289390";
import { Q as _$$Q } from "../9410/629866";
import { A as _$$A } from "../6828/523860";
import { noop } from 'lodash-es';
import { O as _$$O } from "../905/587457";
import { MediaQuerySvgComponent } from "../905/331623";
import { ue as _$$ue, n2 as _$$n3, vl, yT } from "../figma_app/332598";
import { WEB as _$$uz, FIGMA_PROPERTIES, IOS as _$$p, IOS_UIKIT, ANDROID, ANDROID_XML } from "../905/359509";
import { ButtonPrimitive } from "../905/632989";
import { useAtomValue } from "../vendor/525001";
import eU from "../vendor/77708";
import { v4, QN, AC, Pt } from "../figma_app/655139";
import { fk, B7, Qm, g6, vI, $R, yP, p2 as _$$p2, cZ as _$$cZ, Vx } from "../figma_app/883490";
import { gP, Ck, $L, W7, F9, yV, jt, lK as _$$lK, u9 as _$$u2, Fr, EN, Tk, Qz, tr as _$$tr, B5 } from "../figma_app/655717";
import { useDevModeValueAndSetter, isCodeMode } from "../905/191741";
import { applyScaleToValue, isCodegenSupportedForLanguage, getMeasurementUnit, getLanguageUnitLabel, useUpdateCodeExtensionPreferences, getCodeExtensionPreferences, getUnitForLanguage, getScaleFactor, getScaledValueWithUnit, useScaleFactorCallback } from "../figma_app/120227";
import { KindEnum } from "../905/129884";
import { Cj, jY, Tv as _$$Tv } from "../figma_app/151869";
import { VZ } from "../figma_app/727192";
import { x$, W3, iV as _$$iV, Rh, Me, PE } from "../figma_app/887579";
import { lC as _$$lC, u3 as _$$u3, kN, m5, Jo } from "../figma_app/152690";
import { wG, B3 } from "../905/331989";
import { n2 as _$$n4, pm as _$$pm } from "../figma_app/137317";
import { getVisibleTheme, getThemePreference } from "../905/640017";
import { y as _$$y } from "../9410/598921";
import { _p, Cm, lN as _$$lN, sD as _$$sD } from "../figma_app/826998";
import { v2 } from "../1528/88743";
import { H as _$$H } from "../figma_app/378458";
import { Z as _$$Z } from "../905/420117";
import { vQ } from "../figma_app/651425";
import { Lp, Ph, ux as _$$ux, KE, A7, tq as _$$tq, wR, dn as _$$dn, ew as _$$ew, Jq, tM as _$$tM } from "../figma_app/386160";
import { Io, yQ } from "../figma_app/875495";
import { devHandoffComponentPreviewMaxHeight, devHandoffAssetPreviewMaxWidth, devHandoffAssetPreviewMaxHeight } from "../figma_app/786175";
import { A as _$$A2 } from "../3850/839808";
import { Button, ButtonWide } from "../905/521428";
import { Spacing } from "../figma_app/637027";
import { buildFileUrl } from "../905/612685";
import { openInBrowser, openRelatedLink, openAutocompleteLineSettings, openAutocompleteBlockSettings, createFileLink } from "../figma_app/415217";
import { A as _$$A3 } from "../svg/756305";
import { useIsFullscreenWithDevVariables } from "../905/383776";
import { setupToggleButton } from "../905/167712";
import { A as _$$A4 } from "../vendor/648136";
import { _m } from "../vendor/891888";
import { useExposedRef } from "../905/581092";
import { ensureContext } from "../905/61417";
import { ScrollContainer } from "../905/143421";
import { defaultComponentAttribute } from "../905/577641";
import { preventAndStopEvent } from "../905/955878";
import { ScreenReaderOnly } from "../905/172252";
import { O as _$$O2 } from "../905/969533";
import { k as _$$k3 } from "../905/44647";
import { generateRecordingKey, useHandleMouseEvent } from "../figma_app/878298";
import { useSessionStorageSync, useLocalStorageSync } from "../905/657224";
import { RecordableDiv, RecordableAnchor } from "../905/511649";
import { P as _$$P2 } from "../905/347284";
import { R6, zL, bE, i_ as _$$i_, eb as _$$eb, vo } from "../figma_app/617506";
import { $ as _$$$3 } from "../905/532878";
import { gs, ON } from "../figma_app/31103";
import { yp, u as _$$u4, Rb } from "../figma_app/852050";
import { wV } from "../figma_app/779965";
import { GC } from "../905/782020";
import { postUserFlag } from "../905/985254";
import { jK } from "../figma_app/934707";
import { overlayStateAtom } from "../905/12032";
import { CodegenPlatform, getCodegenHandler } from "../905/201014";
import { T as _$$T, q as _$$q } from "../figma_app/590592";
import { L3 } from "../figma_app/701001";
import { useIsProgressBarHiddenOrLocked, useSceneGraphSelector, SceneGraphContext, useSceneGraphSelection, useAppModelProperty } from "../figma_app/722362";
import { I as _$$I2 } from "../figma_app/51637";
import { S as _$$S, z as _$$z } from "../figma_app/106763";
import { selectCurrentUser } from "../905/372672";
import { selectUserFlag } from "../905/940356";
import { s2 as _$$s3 } from "../905/851937";
import { getCurrentGRAtom, handlePluginError } from "../905/753206";
import { X_ } from "../figma_app/78725";
import { notificationAPI } from "../905/894881";
import { p as _$$p4 } from "../figma_app/353099";
import { uh as _$$uh } from "../figma_app/370763";
import { isDevHandoffEditorType } from "../figma_app/976749";
import { E as _$$E3 } from "../905/453826";
import { e as _$$e3 } from "../905/621515";
import { mp } from "../figma_app/579169";
import { N as _$$N } from "../figma_app/268271";
import { ImageOverlayComponent } from "../905/129046";
import { OnboardingModal } from "../905/425180";
import { wX } from "../figma_app/710136";
import { ArrowPosition } from "../905/748636";
import { War, tb3, Iu5, FtN, ma5 } from "../figma_app/6204";
import { K as _$$K } from "../figma_app/398376";
import { EA } from "../9410/499229";
import { f as _$$f3 } from "../1528/716387";
import { O as _$$O3 } from "../9410/414444";
import { b as _$$b2, W as _$$W2 } from "../b2835def/91751";
import { oA as _$$oA2, uj as _$$uj, vy } from "../figma_app/856806";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { IconButton } from "../905/443068";
import { bL as _$$bL, c$ as _$$c$ } from "../905/575478";
import { Legend } from "../905/932270";
import { A as _$$A5 } from "../905/251970";
import { trackFileEventWithUser, trackFileEventWithStore, trackDefinedFileEventWithStore } from "../figma_app/901889";
import { userFlagAtomFamily, userFlagExistsAtomFamily } from "../figma_app/545877";
import { DEV_HAND } from "../figma_app/910914";
import { setupUserPluginPreferences } from "../figma_app/545541";
import { RadioPrimitiveRoot } from "../905/22449";
import { RadioPrimitiveOption } from "../905/34525";
import { Link } from "../905/438674";
import { S as _$$S2 } from "../5132/724052";
import { KeyboardNavigationProvider } from "../figma_app/119475";
import { usePluginData } from "../905/477505";
import { gB } from "../905/294543";
import { Be, $b } from "../469e6e40/370592";
import { CODEGEN_MEASUREMENT_UNITS } from "../905/515076";
import { Rg, LO } from "../figma_app/243025";
import { MeasureUnitType } from "../905/432392";
import { KD } from "../figma_app/975811";
import { getCodegenLanguages } from "../905/661977";
import { X as _$$X } from "../905/839893";
import { FormattedInputVariant1 } from "../905/203369";
import { Cg } from "../7492/487492";
import { A as _$$A6 } from "../6828/191424";
import { A as _$$A7 } from "../svg/386094";
import { A as _$$A8 } from "../svg/145768";
import { A as _$$A9 } from "../svg/117783";
import { A as _$$A0 } from "../svg/8369";
import { useDebouncedCallback } from "use-debounce";
import { hideDropdownAction, showDropdownThunk, selectViewAction } from "../905/929976";
import { setupHyperlinkHandler } from "../figma_app/815170";
import { useDropdownState } from "../905/848862";
import { j as _$$j } from "../905/834956";
import { A as _$$A10 } from "../svg/957897";
import { Qh } from "../905/469533";
import { GV } from "../figma_app/532170";
import { A as _$$A11 } from "../905/389851";
import { isValidSessionLocalID, parseSessionLocalID, defaultSessionLocalIDString } from "../905/871411";
import { Te as _$$Te } from "../vendor/813803";
import { vp } from "../vendor/279343";
import { Uy, ei as _$$ei, E1, L as _$$L } from "../figma_app/9054";
import { parsePxNumber } from "../figma_app/783094";
import { dayjs } from "../905/920142";
import { V as _$$V } from "../905/506207";
import { colorCSSManipulatorInstance } from "../905/989956";
import { fullscreenValue } from "../figma_app/455680";
import { yh } from "../9410/974031";
import { getObservableOrFallback, getObservableValue } from "../figma_app/84367";
import { Bf } from "../figma_app/249941";
import { g as _$$g } from "../9410/28544";
import { hasSingleSceneGraphSelection, INSPECT_PANEL } from "../figma_app/80938";
import { o as _$$o } from "../9410/925362";
import { i as _$$i2, s as _$$s4 } from "../figma_app/553327";
import { isNotNullish } from "../figma_app/95419";
import { setupMenu, MenuRootComp, MenuContainerComp, MenuItemComp, MenuSeparator, MenuSubText, MenuLinkComp, MenuTitleComp } from "../figma_app/860955";
import { DialogTriggerButton } from "../905/976845";
import { r as _$$r3 } from "../905/571562";
import { J as _$$J5 } from "../905/125993";
import { B as _$$B2 } from "../905/950875";
import { O as _$$O4 } from "../905/501876";
import { l as _$$l } from "../905/479687";
import { r as _$$r4 } from "../905/857502";
import { isStamp } from "../figma_app/387100";
import { dU as _$$dU, xY, Xn } from "../9410/461336";
import { x as _$$x } from "../905/587214";
import { y as _$$y3 } from "../figma_app/404310";
import { AutoLayout } from "../905/470281";
import { TextWithTruncation } from "../905/984674";
import { Gw, FB } from "../vendor/149334";
import { capitalize } from "../figma_app/930338";
import { Nf, lA as _$$lA, ro as _$$ro, M4, lU as _$$lU, RI } from "../figma_app/624323";
import { detectEditorStateFormat } from "../figma_app/9619";
import { C as _$$C } from "../figma_app/686450";
import { d as _$$d4 } from "../905/86829";
import { D6, kF } from "../1528/377549";
import { K as _$$K3 } from "../905/799615";
import { handleUrlAction } from "../905/280005";
import { v as _$$v } from "../figma_app/258006";
import { dI as _$$dI } from "../figma_app/204145";
import { copyTextThunk } from "../figma_app/11182";
import { getOpenExternalPluginIds, isAllowedUploadPluginId, isAllowedUpload } from "../figma_app/455620";
import { B as _$$B3 } from "../figma_app/539422";
import { waitForAnimationFrame } from "../905/236856";
import { getLocalPlugins, usePublishedPlugins, usePluginManifestsByIds, useCanRunExtension, useLocalPluginsExcludingWidgets, useInstalledPluginsAndWidgets } from "../figma_app/844435";
import { se as _$$se, Ut, hasDevResourceOpenCallback, runDevResourceOpenCallback, runTimeoutDevResourceOpenCallback } from "../figma_app/603466";
import { validateURLPattern, getPluginVersion, hasInspectOrPanelCapability } from "../figma_app/300692";
import { createDeferredPromise } from "../905/263346";
import { PluginManager } from "../figma_app/612938";
import { hasLocalFileId, ManifestEditorType } from "../figma_app/155287";
import { d as _$$d5 } from "../905/485888";
import { debugState } from "../905/407919";
import { n7 as _$$n6, DY, Rb as _$$Rb, Tz, yf, Cq } from "../figma_app/317076";
import { G as _$$G, H as _$$H2 } from "../figma_app/404079";
import { AK } from "../figma_app/967154";
import { X as _$$X2 } from "../905/737763";
import { y as _$$y4 } from "../905/229546";
import { I as _$$I3 } from "../905/783004";
import { M as _$$M4 } from "../1528/793871";
import { E as _$$E5 } from "../905/730894";
import { c as _$$c4 } from "../905/144429";
import { m as _$$m2 } from "../905/886380";
import { useDelayedTrue } from "../905/815905";
import { z as _$$z2 } from "../905/284530";
import { WithTrackedIconButton } from "../figma_app/617427";
import { Qd } from "../figma_app/570310";
import { IO, CU, c6 as _$$c5 } from "../figma_app/659187";
import { hideInstanceSwapPicker } from "../905/8732";
import { selectSingleSelectedNode, selectSceneGraphSelectionKeys } from "../figma_app/889655";
import { registerModal } from "../905/102752";
import { findCommonStateGroupId, findCommonSymbolId, PanelWidth, getComponentPropDisplayName } from "../figma_app/164212";
import { BK } from "../figma_app/545190";
import { oD as _$$oD, d8 as _$$d6 } from "../1528/85853";
import { E as _$$E6 } from "../905/235326";
import { openUrlInContext } from "../figma_app/976345";
import { hideModalHandler, showModalHandler, hideModal } from "../905/156213";
import { useLibraryFileLink } from "../905/217163";
import { useLibraries } from "../905/420347";
import { b as _$$b6 } from "../1528/176770";
import { x as _$$x2 } from "../1528/887790";
import { figmaItemsAtom, findComponentGuidOrPublishId } from "../figma_app/854115";
import { A as _$$A13 } from "../1617/230645";
import { isInvalidValue } from "../905/216495";
import { z4 as _$$z3 } from "../figma_app/95266";
import { rL as _$$rL, lz as _$$lz, XI, qn, gY, xT as _$$xT } from "../figma_app/212767";
import { J as _$$J7 } from "../905/273120";
import { isPublishedLibraryWithAssets, isCommunityLibrary } from "../figma_app/633080";
import { isSingleSceneGraphSelectionInDevHandoff, isFullscreenDevHandoffView } from "../905/782918";
import { $ as _$$$4 } from "../905/330495";
import { fI, nV as _$$nV } from "../figma_app/626177";
import { X as _$$X3 } from "../905/606795";
import { LazyInputForwardRef } from "../905/408237";
import { A as _$$A14 } from "../svg/86097";
import { useMemoStable } from "../905/19536";
import { z as _$$z4 } from "../905/239603";
import { reportError } from "../905/11";
import { isDefaultFileAlt } from "../905/760074";
import { ConfirmationModal2 } from "../figma_app/918700";
import { setupAutofocusHandler } from "../905/128376";
import { KeyCodes } from "../905/63728";
import { dh as _$$dh } from "../figma_app/186343";
import { useSelectionPropertyValue, useNonMixedSelectionPropertyValue } from "../905/275640";
import { go } from "../figma_app/57551";
import { DS, Os, jh } from "../figma_app/571341";
import { ku, L$ } from "../figma_app/241341";
import { Yj, kt, xA as _$$xA } from "../figma_app/92985";
import { n as _$$n8 } from "../figma_app/427950";
import { QE } from "../figma_app/914216";
import { useIsCanvasEditDisabled } from "../905/595131";
import { Ov } from "../figma_app/598952";
import { c as _$$c6 } from "../905/486270";
import { stripHtmlTags } from "../905/491152";
import { G as _$$G2 } from "../905/178509";
import { isValidLibraryKey } from "../figma_app/630951";
import { t as _$$t4 } from "../905/241707";
import { VU } from "../905/625959";
import { A as _$$A15 } from "../svg/237839";
import { A as _$$A16 } from "../svg/623841";
import { useLatestRef } from "../figma_app/922077";
import { U as _$$U3 } from "../1528/28142";
import { vY, O5, q1, rI as _$$rI } from "../figma_app/955484";
import { KAq, tUy, LDP, Rv9, WPY, YI7, Qhc } from "../figma_app/27776";
import { d as _$$d7 } from "../9410/441456";
import { useDevModeFocusId, useIsFullscreenOverview, useIsFullscreenDevModeComponentBrowser, useHasReadyNodesWithParentOrg } from "../figma_app/88239";
import { RE, Pz } from "../0c62c2fd/214758";
import { A as _$$A17 } from "../6828/85206";
import { Tabs } from "../905/150656";
import { y$ } from "../figma_app/835219";
import { aq as _$$aq } from "../figma_app/399472";
import { selectIsExportRestricted, selectIsCopyExportAllowed } from "../figma_app/212807";
import { d4 as _$$d8, be, pluginTriggeredFromAtom, pluginIdAtom } from "../figma_app/474636";
import { PluginSandbox, PluginIframeMode } from "../figma_app/985200";
import { PluginUIManager } from "../905/261467";
import { setUniversalInsertViewResourceDetails } from "../905/116101";
import { z as _$$z5 } from "../3271/42512";
import { B0 } from "../figma_app/201703";
import { SimpleComponentType } from "../figma_app/504088";
import { initialViewAtom, defaultViewAtom } from "../figma_app/69680";
import { iT as _$$iT } from "../figma_app/74165";
import { qs } from "../469e6e40/556776";
import { PluginIconDisplay } from "../905/480825";
import { iA as _$$iA } from "../3674/705006";
import { TabLoop } from "../905/718764";
import { StyleType } from "../figma_app/276332";
import { BannerInline } from "../figma_app/59509";
import { BannerMessage } from "../905/363675";
import { N as _$$N3 } from "../905/572042";
import ds from "../vendor/805353";
import dd from "../vendor/961736";
import { c as _$$c7 } from "../905/241436";
import { incrementCounter } from "../905/949750";
import { ab as _$$ab } from "../figma_app/870683";
import { registerNodeChangeCallback, unregisterNodeChangeCallback } from "../figma_app/644255";
import { K as _$$K4 } from "../905/918348";
import { E as _$$E7 } from "../905/53857";
import { useRelativeTime } from "../905/986103";
import { isInteractiveInspectionAndRollbackEnabled, isDevModeFocusViewActive } from "../figma_app/544649";
import { WZ } from "../905/893645";
import { setProgressBarState } from "../figma_app/91703";
import { wg } from "../figma_app/101956";
import { getSelectedView } from "../figma_app/386952";
import { exitVersionHistoryMode, CURRENT_VERSION_ID, setActiveVersion } from "../figma_app/841351";
import { LoadingBarStatus } from "../figma_app/915202";
import { jP, YL, s3 as _$$s8, yU } from "../figma_app/221114";
import { handleCopyViewUrl } from "../905/262176";
import { DevModeSavepointModalContainer, SavepointModalContainer } from "../figma_app/504415";
import { g as _$$g2 } from "../905/125190";
import { pc as _$$pc } from "../figma_app/715641";
import { Fe, r_ as _$$r_ } from "../469e6e40/936617";
import { useCurrentOrgAdminInfo } from "../figma_app/543529";
import { FEditorType } from "../figma_app/53721";
import { Q as _$$Q3 } from "../1528/190444";
import { L as _$$L3 } from "../469e6e40/302359";
import { InspectState, VariableDetailModalWidth, ModalMaxHeight, StyleDetailModal, ModalWindowType } from "../905/560959";
import { g as _$$g3 } from "../905/246147";
import { useFullscreenReady } from "../905/924253";
import { TrackingKeyEnum } from "../905/696396";
import { Mw, ON as _$$ON } from "../3276/43946";
import { t as _$$t6 } from "../figma_app/143965";
import { L as _$$L4 } from "../figma_app/467950";
import { A as _$$A18 } from "../6020/852410";
import { VX } from "../figma_app/635062";
import { mr } from "../figma_app/97042";
import { bL as _$$bL3, l9 as _$$l3, mc as _$$mc, c$ as _$$c$2, DZ } from "../905/493196";
import { HiddenLabel, Label } from "../905/270045";
import { bL as _$$bL4 } from "../905/911410";
import { Checkbox } from "../905/274480";
import { b as _$$b7 } from "../905/484176";
import { l as _$$l4 } from "../905/509505";
import { A as _$$A19 } from "../905/891805";
import { permissionScopeHandler as _$$l5 } from "../905/189185";
import { l as _$$l6 } from "../905/716947";
import cP from "../vendor/7508";
import cR from "../vendor/656470";
import cO from "../vendor/260986";
import { isInteractionPathCheck } from "../figma_app/897289";
import { VisualBellIcon } from "../905/576487";
import { O as _$$O5, K as _$$K5 } from "../figma_app/140784";
import { rg as _$$rg, aK as _$$aK } from "../figma_app/401069";
import { filterValidImagePaints } from "../figma_app/385874";
import { Xo } from "../figma_app/482495";
import { useLibraryMetadata } from "../905/726668";
import { Dc, hV as _$$hV } from "../figma_app/151766";
import { O as _$$O6 } from "../figma_app/301719";
import { assetTypeEnum } from "../figma_app/198712";
import { calculatePickerPositionLeft } from "../905/959568";
import { jj, MU, df as _$$df } from "../figma_app/970285";
import { n3 as _$$n9 } from "../905/668609";
import { E as _$$E8 } from "../469e6e40/927162";
import { W as _$$W3 } from "../905/569454";
import { M as _$$M5 } from "../1250/358700";
import { w as _$$w2 } from "../905/433065";
import { AR } from "../1200/67174";
import { k as _$$k4 } from "../6658/341273";
import { ox as _$$ox } from "../905/163832";
import { f as _$$f4 } from "../9410/228507";
import { mO } from "../figma_app/410317";
import { G as _$$G3 } from "../figma_app/953068";
import { e as _$$e7 } from "../905/194891";
import { f$ } from "../figma_app/836943";
import { InputComponent } from "../905/185998";
import { LinkPrimitive } from "../figma_app/496441";
import { H_ } from "../905/963340";
import { G as _$$G4 } from "../905/800369";
import { f as _$$f5, pe as _$$pe, Pq, Kx, tz as _$$tz, SV, lk as _$$lk2 } from "../figma_app/342355";
import { Fc } from "../figma_app/484865";
import { $k, As } from "../figma_app/802241";
import { hasDesktopAPI, desktopAPIInstance } from "../figma_app/876459";
import { getInitialDynamicConfig } from "../figma_app/594947";
import { userCreatedAtAtom } from "../figma_app/864723";
import { useDtMcpCalloutExperiment } from "../figma_app/297957";
import { V as _$$V2 } from "../469e6e40/782251";
import { VERSION_HISTORY_SET_ACTIVE } from "../905/784363";
import { m as _$$m3 } from "../905/99004";
import { x as _$$x3 } from "../905/106997";
import { KeyboardReceiver } from "../905/826900";
import { V_ as _$$V_ } from "../9410/904355";
import { B as _$$B4 } from "../3276/756841";
import { _ as _$$_2 } from "../905/569825";
import { A as _$$A20 } from "../6828/70690";
import { O as _$$O7 } from "../905/487602";
import { e as _$$e8 } from "../905/149844";
import { getCanvasViewState } from "../905/758967";
import { Zr as _$$Zr } from "../figma_app/678782";
import { isVsCodeEnvironment } from "../905/858738";
import { NB, pq as _$$pq } from "../figma_app/973219";
import { A as _$$A21 } from "../6828/364616";
import { g as _$$g4 } from "../figma_app/777171";
import { L as _$$L5 } from "../1250/681431";
import { Cf, it as _$$it } from "../905/504727";
import { A as _$$A22 } from "../svg/639108";
import { createPortal } from "react-dom";
import { L as _$$L6 } from "../905/704296";
import { X as _$$X5 } from "../905/99316";
import { Fj } from "../figma_app/793429";
import { J as _$$J9 } from "../905/45438";
import { Q as _$$Q4 } from "../905/217916";
import { getLibraryName } from "../905/506188";
import { DP as _$$DP2 } from "../figma_app/803932";
import { d7 as _$$d1, rK as _$$rK } from "../figma_app/261761";
import { R as _$$R4 } from "../figma_app/914726";
import { e0 as _$$e9, Ig, dc as _$$dc } from "../figma_app/155647";
import { we } from "../figma_app/393980";
import { a as _$$a, u as _$$u5 } from "../figma_app/289605";
import { SubscribedLibrariesProvider } from "../figma_app/155728";
import { J as _$$J0 } from "../figma_app/785050";
import { A as _$$A23 } from "../svg/757731";
import { A as _$$A24 } from "../svg/454921";
import { A as _$$A25 } from "../svg/220638";
import { W as _$$W4 } from "../figma_app/433958";
import { K as _$$K6 } from "../figma_app/291291";
import { C as _$$C2 } from "../905/520159";
import { c as _$$c9 } from "../905/90943";
import { q as _$$q4 } from "../905/838985";
import { useSprigWithSampling } from "../905/99656";
import { hn as _$$hn, xX as _$$xX } from "../figma_app/401061";
import { p as _$$p6 } from "../9410/692889";
import { QV } from "../9410/608002";
import { selectedViewToPath } from "../figma_app/193867";
import { M as _$$M6 } from "../figma_app/339170";
import { P as _$$P3 } from "../3271/828600";
import { AutoInteractableWrapper } from "../905/277716";
import { n as _$$n0 } from "../940032c6/563173";
import { LengthInput } from "../figma_app/178475";
import { useTransformInputHandler } from "../figma_app/98483";
import { N as _$$N4 } from "../figma_app/673778";
import { hF as _$$hF, QK } from "../figma_app/100987";
import { TP, TQ } from "../1250/224366";
import { atomH1, atomM4 } from "../figma_app/879363";
function b({
  doReport: e
}) {
  let t = getSelectedDevModePropertiesPanelTab()?.getCopy();
  let {
    commentsActive,
    isNodeSelected
  } = selectWithShallowEqual(e => ({
    commentsActive: e.mirror.appModel.currentTool === _$$ec.tool,
    isNodeSelected: Object.keys(e.mirror.sceneGraphSelection).length > 0
  }));
  let o = _$$uQ();
  let l = useDeepEqualSceneValue((e, t) => e?.get(t ?? "")?.isTopLevelFrame(), o);
  useSingleEffect(() => {
    let t = globalPerfTimer.tryStop("switch_to_inspect_mode.right_panel_tti");
    e && t && trackEventAnalytics("switch_to_inspect_mode.right_panel_tti", {
      elapsedMs: t,
      isNodeSelected
    }, {
      forwardToDatadog: !0
    });
    globalPerfTimer.tryStop("dev_handoff.select_node_tti");
  });
  useEffect(() => {
    o && !commentsActive && requestAnimationFrame(() => {
      let n = globalPerfTimer.tryStop("dev_handoff.select_node_tti");
      e && n && trackEventAnalytics("dev_handoff.select_node_tti", {
        elapsedMs: n,
        isTopLevelFrame: l,
        activeTab: t
      }, {
        forwardToDatadog: !0
      });
    });
  }, [o, t, commentsActive, e, l]);
}
let J = buildUploadUrl("bd68de9e9483d946011f6721dc4d37bcf7cc3021");
function Q() {
  let e = _$$U("blocking_modal");
  let t = useCurrentFileKey() ?? "";
  let n = useSubscription(FileDevModeTrialRequestPending, {
    key: t
  });
  let o = useSubscription(FileIsInDevModeTrial, {
    key: t
  });
  let l = n.data?.file.status !== "error" && n.data?.file.data?.hasPermission && o.data?.file?.hasPermission === !1;
  let s = jsxs(Fragment, {
    children: [jsx(DialogLabel, {
      className: DD,
      children: l ? renderI18nText("dev_handoff.paywall.pending_modal.grace_period_end.title") : renderI18nText("dev_handoff.paywall.pending_modal.no_grace_period.title")
    }), jsx("div", {
      className: P_,
      children: l ? renderI18nText("dev_handoff.paywall.pending_modal.grace_period.description") : renderI18nText("dev_handoff.paywall.pending_modal.no_grace_period.billing_remodel_description")
    })]
  });
  let r = useCallback(() => {
    e("design");
  }, [e]);
  return jsx(_$$I, {
    imgSrc: J,
    content: s,
    modalType: "request pending modal",
    primaryButtonProps: {
      label: renderI18nText("dev_handoff.paywall.blocking_modal.button.back_to_design"),
      onClick: r,
      trackingDescriptor: UpgradeAction.BACK_TO_DESIGN,
      type: "back to design"
    }
  });
}
let q = buildUploadUrl("3d1d2d876c1adeb5d3e1256825cff2d5984d76fb");
function Y() {
  let e = _$$U("blocking_modal");
  let t = useCallback(() => {
    e("design");
  }, [e]);
  return jsx(_$$I, {
    imgSrc: q,
    content: jsxs(Fragment, {
      children: [jsx(DialogLabel, {
        className: DD,
        children: renderI18nText("dev_handoff.paywall.success_modal.youre_all_set")
      }), jsx("div", {
        className: P_,
        children: renderI18nText("dev_handoff.paywall.success_modal.well_let_you_know_when")
      })]
    }),
    modalType: "request sent modal",
    primaryButtonProps: {
      label: renderI18nText("dev_handoff.paywall.blocking_modal.button.back_to_design"),
      onClick: t,
      trackingDescriptor: UpgradeAction.BACK_TO_DESIGN,
      type: "back to design"
    }
  });
}
let ec = buildUploadUrl("4d633d6262a8b5f838196a652d687dd1c9123fda");
function eu({
  upgradeRequestId: e
}) {
  let t = _$$U("blocking_modal");
  let n = useDispatch();
  let l = jsxs(Fragment, {
    children: [jsx("div", {
      className: DD,
      children: renderI18nText("dev_handoff.paywall.request_reminder_modal.title")
    }), jsx("div", {
      className: P_,
      children: renderI18nText("dev_handoff.paywall.request_reminder_modal.description")
    })]
  });
  let s = () => {
    n(VisualBellActions.enqueue({
      message: getI18nString("admin_dashboard.requests.error_generic"),
      error: !0,
      button: {
        text: getI18nString("admin_dashboard.requests.error_reload"),
        action: () => {
          customHistory.reload("Seat request reminder error");
        }
      }
    }));
  };
  let r = useCallback(() => {
    t("design");
  }, [t]);
  return jsx(_$$I, {
    imgSrc: ec,
    modalType: "request reminder modal",
    content: l,
    primaryButtonProps: {
      label: renderI18nText("dev_handoff.paywall.request_reminder_modal.button.send_a_reminder"),
      onClick: () => {
        accountTypeRequestHandler.nudgeRequest({
          request_id: e
        }).catch(() => {
          s();
        });
      },
      trackingDescriptor: UpgradeAction.SEND_REMINDER,
      type: "send reminder"
    },
    secondaryButtonProps: {
      label: renderI18nText("dev_handoff.paywall.blocking_modal.button.back_to_design"),
      onClick: r,
      trackingDescriptor: UpgradeAction.BACK_TO_DESIGN,
      type: "back to design"
    }
  });
}
let ep = buildUploadUrl("9a55aebf20fd5e927f609cc0e256f6e782b20d78");
function eh() {
  let e = _$$U("blocking_modal");
  let t = jsxs(Fragment, {
    children: [jsx("div", {
      className: DD,
      children: renderI18nText("dev_handoff.paywall.reminder_sent_modal.title")
    }), jsx("div", {
      className: P_,
      children: renderI18nText("dev_handoff.paywall.reminder_sent_modal.description")
    })]
  });
  let n = useCallback(() => {
    e("design");
  }, [e]);
  return jsx(_$$I, {
    imgSrc: ep,
    content: t,
    modalType: "reminder sent modal",
    primaryButtonProps: {
      label: renderI18nText("dev_handoff.paywall.blocking_modal.button.back_to_design"),
      onClick: n,
      trackingDescriptor: UpgradeAction.BACK_TO_DESIGN,
      type: "back to design"
    }
  });
}
let ex = buildUploadUrl("0cc1682e265ffe998009571ee821470ca30ed096");
function em() {
  let {
    primaryButtonProps,
    secondaryButtonProps
  } = BC({
    entryPoint: DevModeUI.BlockingModal
  });
  let n = !_$$n();
  let i = jsxs("div", {
    className: cssBuilderInstance.gap6.$,
    children: [jsx("div", {
      className: DD,
      children: renderI18nText("dev_handoff.paywall.blocking_modal.title.locked")
    }), jsx("div", {
      className: P_,
      children: n ? renderI18nText("dev_handoff.paywall.blocking_modal.content.locked_upgrade") : renderI18nText("dev_handoff.paywall.blocking_modal.content.locked")
    })]
  });
  return jsx(_$$I, {
    content: i,
    hideImgBorder: !0,
    imgHeight: 32,
    imgSrc: ex,
    imgWidth: 32,
    modalType: "team locked modal",
    primaryButtonProps: {
      ...primaryButtonProps,
      type: n ? "upgrade" : "back to design"
    },
    secondaryButtonProps: n && secondaryButtonProps ? {
      ...secondaryButtonProps,
      type: "back to design"
    } : void 0
  });
}
function e_() {
  !function () {
    let [e, t] = useAtomValueAndSetter(_$$t);
    let n = _$$J3();
    let a = useCurrentFileKey() ?? "";
    let o = w_();
    let l = useSubscription(FileDevModeRequestDenied, {
      key: a
    });
    let s = o.loading;
    let d = o.hasPendingRequest;
    let c = l.data?.file.status !== "error" && !!l.data?.file.data?.hasPermission;
    let u = useRef(!1);
    useEffect(() => {
      if (!n) return;
      d && !u.current && (u.current = !0);
      let a = u.current;
      !s && a && !d && c && e === _$$c.REQUESTED && (t(_$$c.DEFAULT), u.current = !1);
    }, [e, c, d, s, n, t]);
  }();
  let e = useAtomWithSubscription(_$$t);
  let t = useCurrentFileKey() ?? "";
  let n = _$$J3();
  let l = useSelector(e => isTeamLocked(getTeamById(e)?.id ?? "", e));
  let s = useSubscription(FileAccountTypeRequest, {
    key: t
  });
  let {
    hasPendingRequest,
    getUpgradePathway,
    getIsUpgradeHandlerLoading
  } = wH();
  let p = hasPendingRequest(FProductAccessType.DEV_MODE) && getUpgradePathway(FProductAccessType.DEV_MODE) !== _$$J4.AUTO_PATHWAY;
  let h = function (e) {
    let t = getResourceDataOrFallback(e.data?.file);
    let n = t?.currentPlanUser?.type === FOrganizationLevelType.ORG;
    let a = t?.currentPlanUser;
    return n ? a?.devModeAccountTypeRequest ?? null : a?.designAccountTypeRequest ?? null;
  }(s);
  let {
    requestCanBeNudged,
    requestHasBeenNudged,
    upgradeRequestId
  } = h ? qm(h) : {
    requestCanBeNudged: !1,
    requestHasBeenNudged: !1,
    upgradeRequestId: null
  };
  if (n && getIsUpgradeHandlerLoading()) return jsxs(Fragment, {
    children: [jsx(ey, {}), jsx(ev, {})]
  });
  if (l) return jsx(em, {});
  if (upgradeRequestId && n && p) {
    if (requestHasBeenNudged) return jsx(eh, {});
    if (requestCanBeNudged) return jsx(eu, {
      upgradeRequestId
    });
  }
  return n && e === _$$c.REQUESTED && p ? jsx(Y, {}) : n && e === _$$c.DEFAULT && p ? jsx(Q, {}) : e === _$$c.DEFAULT ? jsx(_$$R2, {}) : jsx(ey, {});
}
function ev() {
  let e = getSingletonSceneGraph().getCurrentPage();
  let t = isColorDark(e?.backgroundColor ?? "");
  return jsx(setupThemeContext, {
    mode: t ? "dark" : "light",
    children: jsx("div", {
      "data-testid": "loading-spinner",
      className: _$$u,
      children: jsx(LoadingSpinner, {
        size: "lg"
      })
    })
  });
}
function ey() {
  return jsx("div", {
    className: cssBuilderInstance.fixed.top0.left0.right0.bottom0.wFull.hFull.zIndexModal.$,
    style: styleBuilderInstance.add({
      backgroundColor: "var(--color-modalbackdrop)"
    }).$
  });
}
function eb() {
  let e = getSingletonSceneGraph().getCurrentPage();
  let t = e?.backgroundColor ? colorToRgbaString({
    ...e.backgroundColor,
    a: 0.9
  }) : "var(--color-modalbackdrop)";
  return jsx("div", {
    className: cssBuilderInstance.fixed.top0.right0.bottom0.left0.$,
    style: styleBuilderInstance.add({
      backgroundColor: t
    }).$
  });
}
function ej() {
  return jsxs(Fragment, {
    children: [jsx(eb, {}), jsx(e_, {})]
  });
}
var ek = eN;
let eD = [0, 1, 2, 3, 4];
function eO() {
  let e = "ui3" === getThemeContextOrDefault().version;
  return jsx(_$$Q, {
    children: jsx(_$$$, {
      width: 240,
      disableResizing: !0,
      children: jsxs("div", {
        className: ek()(Dm, "left_panel--nodesPanel---qMcy dev_handoff_nodes_panel--nodesPanel--4Pea0"),
        "data-testid": "dev-mode-paywall-left-panel",
        children: [jsx(_$$s2, {}), e && jsxs(Fragment, {
          children: [jsx(_$$n2, {}), jsx(_$$d2, {})]
        }), jsx("div", {
          className: "left_panel--panelTitle--Q4BOG dev_handoff_nodes_panel--panelTitle--wcEcM",
          children: renderI18nText("dev_handoff.tag.ready_for_development")
        }), jsxs("div", {
          className: "left_panel--loadingParentRow--9WZnv",
          children: [jsx(SvgComponent, {
            className: "left_panel--chevron--ApMP6",
            svg: _$$A
          }), jsx(Wi, {
            animationType: JR.NO_SHIMMER,
            primary: !0
          })]
        }), eD.map(e => jsxs("div", {
          className: "left_panel--loadingThumbnailRow--PEBJC",
          children: [jsx(Qp, {
            animationType: JR.NO_SHIMMER,
            className: "left_panel--loadingThumbnail--gEHnl"
          }), jsxs("div", {
            className: "left_panel--loadingThumbnailTexts--VS9R6",
            children: [jsx(Wi, {
              animationType: JR.NO_SHIMMER,
              primary: !0
            }), jsx(Wi, {
              animationType: JR.NO_SHIMMER,
              primary: !0
            })]
          })]
        }, e)), jsx("div", {
          className: "left_panel--transparentPanelScrim--axhW3"
        })]
      })
    })
  });
}
let eF = memo(function (e) {
  return _$$O() ? jsxs("svg", {
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M13 8A5 5 0 1 1 3 8a5 5 0 0 1 10 0m1 0A6 6 0 1 1 2 8a6 6 0 0 1 12 0",
      clipRule: "evenodd"
    }), jsx("path", {
      stroke: "var(--color-icon)",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M8 5.5V8l1.5 1.5"
    })]
  }) : jsxs("svg", {
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M12 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m1 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0",
      clipRule: "evenodd"
    }), jsx("path", {
      stroke: "var(--color-icon)",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M7.5 5.5v2l1 1"
    })]
  });
});
var eK = eU;
let e3 = "box_model--imageBox--XoIJh box_model--_border--PCElt box_model--_layoutFlex--pL0jp";
let e4 = "box_model--variableValueContainer--oxu-X box_model--_valueContainerBase--pMK2K";
let e7 = "box_model--valueNonValid--H7q6F";
let e8 = "box_model--value--1jh75 ellipsis--ellipsis--Tjyfa";
let e6 = "box_model--innerSizeBoxValue--l-qDX ellipsis--ellipsis--Tjyfa";
let e9 = "box_model--variable--GK5G3";
let te = "box_model--innerSizeBoxVariable--Lw6dO";
let tt = "box_model--gapLine--BM-H0";
let tn = "box_model--gapVertical--t9aDg box_model--gap--YPdKC box_model--_layoutFlex--pL0jp";
let ta = "box_model--gapHorizontal--gLY-T box_model--gap--YPdKC box_model--_layoutFlex--pL0jp";
let ti = "box_model--gapValueContainer--GsVpn box_model--_layoutFlex--pL0jp";
let to = "box_model--gapValue--sE-2O";
let tl = createContext(!1);
let ts = () => useContext(tl);
function tr({
  fillContainer: e = !1,
  loadingState: t = !1
}) {
  let n = _$$uQ();
  if (!n) return null;
  let i = HandoffBindingsCpp?.getAssetInfo(n)?.type;
  let o = !t && fk(i);
  return jsx(VZ, {
    hideHeader: !0,
    noPadding: !0,
    noBorder: !0,
    recordingKey: "boxModel",
    children: jsx(tl.Provider, {
      value: t,
      children: jsxs(td, {
        fillContainer: e,
        children: [jsx(tN, {}), jsx(tm, {
          side: gP.TOP
        }), jsx(tN, {}), jsx(tm, {
          side: gP.LEFT
        }), jsxs(tc, {
          children: [jsx(ty, {
            corner: Ck.TOP_LEFT
          }), jsxs(tg, {
            children: [jsx(tx, {
              children: renderI18nText("dev_handoff.box_model.border")
            }), jsx(tb, {
              side: gP.TOP
            })]
          }), jsx(ty, {
            corner: Ck.TOP_RIGHT
          }), jsx(tb, {
            side: gP.LEFT
          }), o ? jsx(tu, {
            assetType: i
          }) : jsxs(th, {
            children: [jsx(tN, {}), jsxs("div", {
              className: "box_model--paddingTopMiddle--GiNbR",
              children: [jsx("div", {
                className: "box_model--paddingLabel--MsGiF",
                children: jsx(tx, {
                  children: renderI18nText("dev_handoff.box_model.padding")
                })
              }), t ? jsx(tN, {}) : jsx(tj, {
                side: gP.TOP
              })]
            }), jsx(tN, {}), t ? jsx(tN, {}) : jsx(tj, {
              side: gP.LEFT
            }), jsx(tf, {}), t ? jsx(tN, {}) : jsx(tj, {
              side: gP.RIGHT
            }), jsx(tN, {}), t ? jsx(tN, {}) : jsx(tj, {
              side: gP.BOTTOM
            }), jsx(tN, {})]
          }), jsx(tb, {
            side: gP.RIGHT
          }), jsx(ty, {
            corner: Ck.BOTTOM_LEFT
          }), jsx(tb, {
            side: gP.BOTTOM
          }), jsx(ty, {
            corner: Ck.BOTTOM_RIGHT
          })]
        }), jsx(tm, {
          side: gP.RIGHT
        }), jsx(tN, {}), jsx(tm, {
          side: gP.BOTTOM
        }), jsx(tN, {}), jsx(tk, {})]
      })
    })
  });
}
function td({
  children: e,
  fillContainer: t
}) {
  let n = $L(gP.TOP);
  let i = $L(gP.BOTTOM);
  let o = !ts() && (!n || !n.distance) && (!i || !i.distance);
  return jsx("div", {
    className: ek()("box_model--gapBox--6aFgq common--well--J0WtH", o && "box_model--gapBoxNoVertical--WqZQf", t && "box_model--fillContainer--TZUSv"),
    children: e
  });
}
function tc({
  children: e
}) {
  let t = W7();
  let n = ts();
  return jsx("div", {
    className: "box_model--borderBox--Ta011 box_model--_border--PCElt",
    style: n ? {
      borderRadius: 16
    } : F9(t),
    children: e
  });
}
function tu({
  assetType: e
}) {
  let t = yV();
  let n = jt();
  let i = _$$lK();
  return i ? jsx(tp, {
    image: i
  }) : jsx("div", {
    className: e3,
    children: jsx(B7, {
      assetType: e,
      pxWidth: t,
      pxHeight: n,
      shouldShowTypeLabel: !0,
      dataTestId: "boxModelAssetDetails"
    })
  });
}
function tp({
  image: e
}) {
  let t = useAtomValue(Qm);
  let n = x$(e);
  let i = W3(e);
  "VIDEO" !== e.type && i && t?.[i] && (n = t[i]);
  return jsx("div", {
    className: e3,
    children: jsx(_$$iV, {
      image: e,
      children: jsxs("div", {
        className: "box_model--imageLabel--x4eRc box_model--_layoutFlex--pL0jp",
        children: [jsxs("span", {
          className: "box_model--imageFileName--uK9h5 ellipsis--ellipsis--Tjyfa",
          children: [Rh(e), "."]
        }), jsx("span", {
          className: "box_model--imageFileType--SYUTK",
          children: n
        })]
      })
    })
  });
}
function th({
  children: e
}) {
  let t = ts();
  return jsx("div", {
    className: ek()("box_model--paddingBox--x3ddV box_model--_borderStrong--VLX4w", {
      "box_model--paddingBoxGrayscale--SAsVz": t
    }),
    children: e
  });
}
function tf() {
  let e = yV();
  let t = jt();
  let n = tI(tA(e));
  let i = tI(tA(t));
  let o = _$$lC("WIDTH");
  let l = _$$lC("HEIGHT");
  let s = Cj(n);
  let r = Cj(i);
  if (ts()) return jsx("div", {
    className: "box_model--innerSizeBoxGrayscale--geDzo box_model--innerSizeBox--fFq-v box_model--_layoutFlex--pL0jp"
  });
  let d = t_(n, "WIDTH");
  let c = t_(i, "HEIGHT");
  return jsxs("div", {
    className: "box_model--innerSizeBox--fFq-v box_model--_layoutFlex--pL0jp",
    children: [jsx(ButtonPrimitive, {
      className: ek()(e6, {
        [te]: !!o,
        [e9]: !!o || !!l
      }),
      onClick: s,
      htmlAttributes: {
        "data-testid": "layoutWidth",
        "data-tooltip": o?.name,
        "data-tooltip-type": KindEnum.TEXT
      },
      "aria-label": d,
      children: o ? jsx(wG, {
        isNarrow: !0,
        text: n.toString(),
        isNonInteractive: !0
      }) : n
    }), jsx("span", {
      className: "box_model--innerSizeBoxX--pxeFw",
      children: "\xd7"
    }), jsx(ButtonPrimitive, {
      className: ek()(e6, {
        [te]: !!l,
        [e9]: !!o || !!l
      }),
      onClick: r,
      htmlAttributes: {
        "data-testid": "layoutHeight",
        "data-tooltip": l?.name,
        "data-tooltip-type": KindEnum.TEXT
      },
      "aria-label": c,
      children: l ? jsx(wG, {
        isNarrow: !0,
        text: i.toString(),
        isNonInteractive: !0
      }) : i
    })]
  });
}
function tg({
  children: e
}) {
  return jsx("div", {
    className: "box_model--labelAndValue--tkNzd",
    children: e
  });
}
function tx({
  children: e
}) {
  return jsx("div", {
    className: "box_model--label--A5RBK text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa",
    children: e
  });
}
function tm({
  side: e
}) {
  let {
    distance,
    type
  } = $L(e);
  let i = tA(distance);
  let o = type ?? "distance";
  let l = Cj(i);
  if (ts()) return jsxs("div", {
    className: ek()({
      [tn]: e === gP.TOP || e === gP.BOTTOM,
      [ta]: e === gP.LEFT || e === gP.RIGHT,
      "box_model--unrealGap--XhkPS": !0
    }),
    children: [jsx("div", {
      className: tt
    }), jsx("div", {
      className: ti,
      children: jsx("span", {
        className: to,
        children: "\xa0"
      })
    })]
  });
  if (!_$$u2(i)) return jsx(tN, {});
  let s = function (e, t, n) {
    if (n && t) switch (t) {
      case "distance":
        switch (e) {
          case gP.TOP:
            return getI18nString("dev_handoff.box_model.copy_distance_top", {
              value: n
            });
          case gP.RIGHT:
            return getI18nString("dev_handoff.box_model.copy_distance_right", {
              value: n
            });
          case gP.BOTTOM:
            return getI18nString("dev_handoff.box_model.copy_distance_bottom", {
              value: n
            });
          case gP.LEFT:
            return getI18nString("dev_handoff.box_model.copy_distance_left", {
              value: n
            });
        }
      case "padding":
        switch (e) {
          case gP.TOP:
            return getI18nString("dev_handoff.box_model.copy_padding_top_to_parent", {
              value: n
            });
          case gP.RIGHT:
            return getI18nString("dev_handoff.box_model.copy_padding_right_to_parent", {
              value: n
            });
          case gP.BOTTOM:
            return getI18nString("dev_handoff.box_model.copy_padding_bottom_to_parent", {
              value: n
            });
          case gP.LEFT:
            return getI18nString("dev_handoff.box_model.copy_padding_left_to_parent", {
              value: n
            });
        }
      case "spacing":
        switch (e) {
          case gP.LEFT:
            return getI18nString("dev_handoff.box_model.copy_gap_left", {
              value: n
            });
          case gP.TOP:
            return getI18nString("dev_handoff.box_model.copy_gap_top", {
              value: n
            });
          case gP.RIGHT:
            return getI18nString("dev_handoff.box_model.copy_gap_right", {
              value: n
            });
          case gP.BOTTOM:
            return getI18nString("dev_handoff.box_model.copy_gap_bottom", {
              value: n
            });
        }
    }
  }(e, type, i);
  return jsxs("div", {
    className: ek()({
      [tn]: e === gP.TOP || e === gP.BOTTOM,
      [ta]: e === gP.LEFT || e === gP.RIGHT,
      "box_model--paddingGap--Ca1Vq": "padding" === o,
      "box_model--spacingGap--PWtB6": "spacing" === o,
      "box_model--distanceGap--ophi6": "distance" === o
    }),
    children: [jsx("div", {
      className: tt
    }), jsx(ButtonPrimitive, {
      className: ti,
      onClick: l,
      htmlAttributes: {
        "data-testid": `layoutGap${eK()(e)}`
      },
      "aria-label": s,
      children: jsx("span", {
        className: to,
        children: i
      })
    })]
  });
}
function t_(e, t) {
  if (e) switch (t) {
    case "STACK_PADDING_TOP":
      return getI18nString("dev_handoff.box_model.copy_padding_top", {
        value: e
      });
    case "STACK_PADDING_RIGHT":
      return getI18nString("dev_handoff.box_model.copy_padding_right", {
        value: e
      });
    case "STACK_PADDING_BOTTOM":
      return getI18nString("dev_handoff.box_model.copy_padding_bottom", {
        value: e
      });
    case "STACK_PADDING_LEFT":
      return getI18nString("dev_handoff.box_model.copy_padding_left", {
        value: e
      });
    case "BORDER_TOP_WEIGHT":
      return getI18nString("dev_handoff.box_model.copy_border_top", {
        value: e
      });
    case "BORDER_RIGHT_WEIGHT":
      return getI18nString("dev_handoff.box_model.copy_border_right", {
        value: e
      });
    case "BORDER_BOTTOM_WEIGHT":
      return getI18nString("dev_handoff.box_model.copy_border_bottom", {
        value: e
      });
    case "BORDER_LEFT_WEIGHT":
      return getI18nString("dev_handoff.box_model.copy_border_left", {
        value: e
      });
    case "RECTANGLE_TOP_LEFT_CORNER_RADIUS":
      return getI18nString("dev_handoff.box_model.copy_border_radius_top_left", {
        value: e
      });
    case "RECTANGLE_TOP_RIGHT_CORNER_RADIUS":
      return getI18nString("dev_handoff.box_model.copy_border_radius_top_right", {
        value: e
      });
    case "RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS":
      return getI18nString("dev_handoff.box_model.copy_border_radius_bottom_right", {
        value: e
      });
    case "RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS":
      return getI18nString("dev_handoff.box_model.copy_border_radius_bottom_left", {
        value: e
      });
    case "WIDTH":
      return getI18nString("dev_handoff.box_model.copy_width", {
        value: e
      });
    case "HEIGHT":
      return getI18nString("dev_handoff.box_model.copy_height", {
        value: e
      });
    default:
      return;
  }
}
function tv({
  value: e,
  variableConsumptionField: t
}) {
  let n = tA(e);
  let i = _$$u2(n);
  let o = _$$lC(t);
  let l = Cj(n);
  let s = t_(i ? n : void 0, t);
  let r = n;
  o && n && (r = jsx(wG, {
    isNarrow: !0,
    text: i ? n : "0",
    tooltip: o?.name,
    isNonInteractive: !0
  }));
  return {
    isValid: i,
    valueElement: r,
    displayValue: n,
    copyValue: l,
    ariaLabel: s
  };
}
function ty({
  corner: e
}) {
  let t = Fr(e);
  let n = v4();
  let o = applyScaleToValue(n, t);
  let l = useMemo(() => {
    switch (e) {
      case Ck.TOP_LEFT:
        return "box_model--borderTopLeft--Yitgl";
      case Ck.TOP_RIGHT:
        return "box_model--borderTopRight--Jtfzn";
      case Ck.BOTTOM_LEFT:
        return "box_model--borderBottomLeft--aRpWV";
      case Ck.BOTTOM_RIGHT:
        return "box_model--borderBottomRight--Rkq3s";
    }
  }, [e]);
  let s = useMemo(() => {
    switch (e) {
      case Ck.TOP_LEFT:
        return "layoutBorderRadiusTopLeft";
      case Ck.TOP_RIGHT:
        return "layoutBorderRadiusTopRight";
      case Ck.BOTTOM_LEFT:
        return "layoutBorderRadiusBottomLeft";
      case Ck.BOTTOM_RIGHT:
        return "layoutBorderRadiusBottomRight";
    }
  }, [e]);
  let {
    isValid,
    valueElement,
    displayValue,
    ariaLabel
  } = tv({
    value: t,
    variableConsumptionField: useMemo(() => {
      switch (e) {
        case Ck.TOP_LEFT:
          return "RECTANGLE_TOP_LEFT_CORNER_RADIUS";
        case Ck.TOP_RIGHT:
          return "RECTANGLE_TOP_RIGHT_CORNER_RADIUS";
        case Ck.BOTTOM_LEFT:
          return "RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS";
        case Ck.BOTTOM_RIGHT:
          return "RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS";
      }
    }, [e])
  });
  let p = ts();
  let h = n.id === _$$uz || n.id === FIGMA_PROPERTIES ? t : o;
  let f = displayValue ? EN(e, h) : {};
  let g = Cj(h);
  let x = e9 ? e4 : "box_model--rawValueContainer---osq- box_model--_valueContainerBase--pMK2K";
  let m = Math.min(t ?? 0, Tk - 4);
  return jsxs(ButtonPrimitive, {
    style: {
      "--temp-border-radius": `${m}px`
    },
    className: ek()(x, l),
    onClick: isValid ? g : void 0,
    htmlAttributes: {
      "data-testid": s
    },
    "aria-label": ariaLabel,
    children: [jsx("span", {
      className: ek()(isValid ? e8 : e7, isValid && "box_model--borderRadiusValue--tDyKD ellipsis--ellipsis--Tjyfa"),
      children: p ? " " : valueElement
    }), jsx("div", {
      className: isValid ? "box_model--borderRadiusHighlight--bd9Sc" : "box_model--borderRadiusNonValid--qTtSU",
      style: f,
      "data-testid": `${s}Highlight`
    })]
  });
}
function tb({
  side: e
}) {
  let t = Qz(e);
  let n = useMemo(() => {
    switch (e) {
      case gP.TOP:
        return "BORDER_TOP_WEIGHT";
      case gP.RIGHT:
        return "BORDER_RIGHT_WEIGHT";
      case gP.BOTTOM:
        return "BORDER_BOTTOM_WEIGHT";
      case gP.LEFT:
        return "BORDER_LEFT_WEIGHT";
    }
  }, [e]);
  return jsx(tw, {
    value: t,
    variableConsumptionField: n,
    dataTestId: `layoutBorder${eK()(e)}`,
    isVertical: e === gP.LEFT || e === gP.RIGHT
  });
}
function tj({
  side: e
}) {
  let t = _$$tr(e);
  let n = useMemo(() => {
    switch (e) {
      case gP.TOP:
        return "STACK_PADDING_TOP";
      case gP.RIGHT:
        return "STACK_PADDING_RIGHT";
      case gP.BOTTOM:
        return "STACK_PADDING_BOTTOM";
      case gP.LEFT:
        return "STACK_PADDING_LEFT";
    }
  }, [e]);
  return jsx(tw, {
    value: t,
    variableConsumptionField: n,
    dataTestId: `layoutPadding${eK()(e)}`,
    isVertical: e === gP.LEFT || e === gP.RIGHT
  });
}
function tw({
  value: e,
  dataTestId: t,
  variableConsumptionField: n,
  isVertical: i
}) {
  let {
    isValid,
    valueElement,
    copyValue,
    ariaLabel
  } = tv({
    value: e,
    variableConsumptionField: n ?? "MISSING"
  });
  let d = e9 ? e4 : i ? "box_model--valueContainerVertical--AtQ8B box_model--rawValueContainer---osq- box_model--_valueContainerBase--pMK2K" : "box_model--valueContainerHorizontal--BqOkd box_model--rawValueContainer---osq- box_model--_valueContainerBase--pMK2K";
  return isValid ? jsx(ButtonPrimitive, {
    className: d,
    onClick: copyValue,
    "aria-label": ariaLabel,
    children: jsx("span", {
      className: e8,
      "data-testid": t,
      children: valueElement
    })
  }) : jsx("div", {
    className: d,
    children: jsx("span", {
      className: e7,
      "data-testid": t,
      children: valueElement
    })
  });
}
function tN() {
  return jsx("div", {});
}
function tk() {
  let e = Cj("box-sizing: border-box");
  let t = v4();
  let [n] = useDevModeValueAndSetter();
  return ts() || t.id !== _$$uz || "code" !== n ? null : jsx(ButtonPrimitive, {
    className: "box_model--borderBoxMessage--2jJc- text--fontPos11--2LvXf text--_fontBase--QdLsd",
    onClick: e,
    htmlAttributes: {
      "data-tooltip": getI18nString("dev_handoff.box_model.border-box-tooltip"),
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip-show-above": !0
    },
    children: renderI18nText("dev_handoff.box_model.border-box")
  });
}
function tA(e) {
  let t = v4();
  let n = applyScaleToValue(t, e, B5);
  return void 0 === e ? "-" : n;
}
function tI(e) {
  return !e || e.startsWith("-") ? "0" : e;
}
let tD = "header--mainContainer--S8PcV";
let tO = "header--headerContents--0Pvld";
let tM = "header--layerRowContainer--qqv5Y";
let tB = "header--headerButtons--Lt3iE";
let tF = "header--headerButtonsRevamp--ZO6T5";
let tz = "header--layerNameRow--tsuuh header--layerRowContainer--qqv5Y";
let tV = "header--layerName--s4pA8 ellipsis--ellipsis--Tjyfa";
let tH = "header--layerNameWrapper---RxUM";
let tW = "header--copyableLayerName--oMhyj";
let tG = "header--layerIcon--uDEQt header--icon--IGzM0";
let tU = "header--layerIconSymbol--irpWG header--icon--IGzM0";
let tK = "header--statusIcon--9Pk8T header--icon--IGzM0";
let tX = "header--layerType--vaDds ellipsis--ellipsis--Tjyfa";
let tJ = "header--layerCompareLinkText--frP7M";
let tQ = "header--layerCompareLinkTextNoDropdown--LWQWY ellipsis--ellipsis--Tjyfa";
let tq = "header--iconType--VW9Gs";
let tY = "header--dropdownContainer--4czE1";
let t5 = [{
  prefix: "display:",
  width: 35
}, {
  prefix: "height:",
  width: 35
}, {
  prefix: "padding:",
  width: 145
}, {
  prefix: "justify-content:",
  width: 100
}, {
  prefix: "align-items:",
  width: 47
}, {
  prefix: "gap:",
  width: 47
}, {
  prefix: "flex:",
  width: 47
}];
function t3() {
  return jsx("code", {
    className: "right_panel--generatedCode--4M5KP code_panel--generatedCode--XGoAV code_panels_shared--code--VPQ05",
    style: {
      minWidth: "100%",
      whiteSpace: "normal"
    },
    children: t5.map(({
      prefix: e,
      width: t
    }, n) => jsxs("div", {
      className: "right_panel--codeLine--YFK5t",
      children: [jsx("div", {
        children: e
      }), jsx(Wi, {
        animationType: JR.NO_SHIMMER,
        style: {
          width: t,
          height: 10
        }
      })]
    }, n))
  });
}
let t4 = [{
  width: 97,
  color: 500
}, {
  width: 80,
  color: 400
}, {
  width: 120,
  color: 200
}];
let t7 = [{
  width: 97
}, {
  width: 80
}, {
  width: 120
}];
let t8 = {
  inspectionMode: "code",
  inspectionModes: ["properties", "code"],
  setInspectionMode: noop,
  supportsAlternativeUnits: !0,
  preferenceOptions: [],
  preferences: {},
  codeLanguageApi: {
    codeLanguage: {
      type: "first-party",
      id: _$$uz
    },
    onCodeLanguageChange: noop,
    activeCodegenPlugin: null,
    codeLanguageOptions: [],
    formatter: {
      format: e => getI18nString("dev_handoff.code.lang_css")
    }
  }
};
function t6() {
  let e = "dark" === getVisibleTheme() ? "dark" : "light";
  let t = "ui3" === getThemeContextOrDefault().version;
  return jsxs("div", {
    className: ek()("right_panel--drillDownContainer--FTkvu", Lp, Ph),
    "data-testid": "dev-mode-paywall-right-panel",
    children: [jsx("div", {
      className: ek()(_$$ux, Ph),
      children: jsxs("div", {
        className: ek()("right_panel--panelContainer--BwtVM dev_handoff_right_panel_container--panelContainer--XcbIk dev_handoff_right_panel_container--panelContainerBase--npHfL", KE, Dm, Ph),
        children: [t && jsx(v2, {}), jsxs("div", {
          className: cssBuilderInstance.wFull.flex.flexRow.flexShrink0.itemsCenter.borderBox.bSolid.bb1.pr8.colorBorder.justifyBetween.colorBg.$,
          children: [jsxs(_$$y, {
            withBorder: !1,
            children: [jsx("div", {
              className: "right_panel--tabActive--X7gwU legacy_pages_panel--tabActive--hmo0j legacy_pages_panel--tab--inhND",
              "data-label": getI18nString("dev_handoff.tab.inspect"),
              children: renderI18nText("dev_handoff.tab.inspect")
            }), jsx("div", {
              className: "right_panel--tab--qt6mo legacy_pages_panel--tab--inhND",
              "data-label": getI18nString("dev_handoff.tab.plugins"),
              children: renderI18nText("dev_handoff.tab.plugins")
            })]
          }), t && jsx(_$$H, {
            recordingKey: "propertiesPanel.zoomMenu"
          })]
        }), jsxs("div", {
          className: "right_panel--inspectPanelContainer--ZujXg inspect_panel--inspectPanelContainer--SZhfY",
          children: [jsx(VZ, {
            recordingKey: "paywall-header",
            formattedHeader: jsxs("div", {
              className: tz,
              children: [jsx("div", {
                dir: "auto",
                className: tV,
                children: renderI18nText("dev_handoff.paywall.panel.button")
              }), jsx("div", {
                className: tB
              })]
            }),
            children: jsx("div", {
              className: tO,
              children: jsxs("div", {
                className: cssBuilderInstance.flex.flexColumn.gap16.pb8.wFull.$,
                children: [jsxs("span", {
                  className: cssBuilderInstance.flex.flexRow.gap8.itemsCenter.wFull.$,
                  children: [jsx("span", {
                    className: "right_panel--layerIcon--9-ijp",
                    children: jsx(MediaQuerySvgComponent, {
                      svg: _$$A2
                    })
                  }), jsx(Wi, {
                    animationType: JR.NO_SHIMMER,
                    style: {
                      width: 97,
                      height: 8
                    }
                  })]
                }), jsxs("div", {
                  className: cssBuilderInstance.flex.flexRow.gap8.itemsCenter.wFull.$,
                  children: [jsx(eF, {
                    className: tq
                  }), jsx(Wi, {
                    animationType: JR.NO_SHIMMER,
                    style: {
                      width: 117,
                      height: 8
                    }
                  })]
                })]
              })
            })
          }), jsxs(VZ, {
            title: getI18nString("dev_handoff.layer_properties"),
            recordingKey: "code_panel",
            collapsiblePanelKey: "code",
            children: [jsx(tr, {
              loadingState: !0
            }), jsx(_$$n4, {
              preferencesApi: t8,
              inspectionModeLayout: "tabs"
            }), jsx(_$$ue, {
              header: jsx(_$$n3, {
                type: "default",
                title: getI18nString("inspect_panel.properties.layout"),
                actions: jsx("div", {})
              }),
              content: jsx(t3, {}),
              shouldShowMore: !1,
              showMoreLinesCount: 0,
              onShowMore: noop,
              leftGutter: vl(t5)
            }), jsx("div", {
              className: cssBuilderInstance.wFull.h12.$
            }), jsx(VZ, {
              title: getI18nString("inspect_panel.colors.title"),
              isSubsection: !0,
              recordingKey: "colors",
              children: t4.map(({
                width: t,
                color: n
              }, i) => jsx(_p, {
                className: vQ,
                disableDetailModalEntry: !0,
                children: jsxs(_$$Z, {
                  isNonInteractive: !0,
                  hasIcon: !0,
                  className: ek()(Io, yQ, cssBuilderInstance.wFull.$),
                  children: [jsx("div", {
                    className: "right_panel--colorThumbnailUI3--r9Rcx",
                    style: {
                      backgroundColor: t1[`grey_${n}_${e}`]
                    }
                  }), jsx(Wi, {
                    animationType: JR.NO_SHIMMER,
                    style: {
                      width: t
                    }
                  })]
                })
              }, i))
            })]
          }), jsx(VZ, {
            title: getI18nString("dev_handoff.assets"),
            recordingKey: "paywall-assets",
            collapsiblePanelKey: "assets",
            children: t7.map(({
              width: e
            }, t) => jsxs("div", {
              className: "right_panel--assetRow--mAxTq asset_panel--assetRow--0VUJr text--fontPos11--2LvXf text--_fontBase--QdLsd",
              children: [jsx(Qp, {
                animationType: JR.NO_SHIMMER,
                className: "right_panel--assetLoadingPreview--hjUOI"
              }), jsxs("div", {
                className: "right_panel--assetDetails--Q51H5 asset_panel--assetDetails--xfCbP",
                children: [jsx(Wi, {
                  animationType: JR.NO_SHIMMER,
                  style: {
                    width: e,
                    height: 8
                  }
                }), jsx(Wi, {
                  animationType: JR.NO_SHIMMER,
                  style: {
                    width: 60,
                    height: 8
                  }
                })]
              })]
            }, t))
          })]
        })]
      })
    }), jsx("div", {
      className: "right_panel--transparentPanelScrim--o6uwc"
    })]
  });
}
let na = "vscode_paywall--vscodePaywallBody--pUvWv text--fontPos13--xW8hS text--_fontBase--QdLsd";
let no = buildUploadUrl("vscode_intro_1200.mp4");
function nl({
  fileKey: e,
  teamId: t,
  folderId: n,
  parentOrgId: o,
  canAccessDevModeEntryPoint: l
}) {
  let r = Gu();
  let d = [getI18nString("dev_handoff.paywall.vscode.list1"), getI18nString("dev_handoff.paywall.vscode.list2"), getI18nString("dev_handoff.paywall.vscode.list3"), getI18nString("dev_handoff.paywall.vscode.list4")];
  let c = useCallback(() => {
    trackEventAnalytics("Dev Mode Paywall clicked", {
      entryPoint: "vscode_paywall",
      type: "VS Code Upgrade CTAAAA",
      fileKey: e,
      fileTeamId: t,
      fileParentOrgId: o,
      containingFolderId: n
    }, {
      forwardToDatadog: !0
    });
    openInBrowser(buildFileUrl({
      file: {
        key: e
      },
      isDevHandoff: !0
    }));
  }, [e, n, o, t]);
  let u = useCallback(() => {
    trackEventAnalytics("Dev Mode Paywall clicked", {
      entryPoint: "vscode_paywall",
      type: "VS Code Open docs",
      fileKey: e,
      fileTeamId: t,
      fileParentOrgId: o,
      containingFolderId: n
    }, {
      forwardToDatadog: !0
    });
    openInBrowser("https://help.figma.com/hc/articles/15023121296151-Figma-for-VS-Code");
  }, [e, n, o, t]);
  let p = useCallback(() => {
    trackEventAnalytics("Dev Mode Paywall clicked", {
      entryPoint: "vscode_paywall",
      type: "VS Code Play Video",
      fileKey: e,
      fileTeamId: t,
      fileParentOrgId: o,
      containingFolderId: n
    }, {
      forwardToDatadog: !0
    });
  }, [e, n, o, t]);
  let f = useCallback(() => {
    trackEventAnalytics("Dev Mode Paywall clicked", {
      entryPoint: "vscode_paywall",
      type: "VS Code Finish Video",
      fileKey: e,
      fileTeamId: t,
      fileParentOrgId: o,
      containingFolderId: n
    }, {
      forwardToDatadog: !0
    });
  }, [e, n, o, t]);
  return jsx("div", {
    className: "vscode_paywall--wrapper--65Gba",
    children: jsxs("div", {
      className: cssBuilderInstance.flex.maxWFull.wFull.hFull.$,
      children: [jsx("div", {
        className: cssBuilderInstance.flex.flexGrow0.flexColumn.pl32.pt32.$,
        children: jsx(SvgComponent, {
          dataTestId: "logo",
          title: "logo",
          ariaLabel: "logo",
          svg: _$$A3,
          useOriginalSrcFills_DEPRECATED: !0
        })
      }), jsxs("div", {
        className: cssBuilderInstance.flex.flexGrow1.flexColumn.justifyCenter.alignTop.pt32.pl20.pr32.pb32.$,
        children: [jsx("div", {
          className: "vscode_paywall--vscodePaywallTitle---OrBg text--fontPos24--YppUD text--_fontBase--QdLsd",
          children: renderI18nText("dev_handoff.paywall.vscode.title")
        }), jsx(Spacing, {
          direction: "y",
          multiple: 1
        }), jsx("div", {
          className: na,
          children: renderI18nText("dev_handoff.paywall.vscode.description")
        }), jsx(Spacing, {
          direction: "y",
          multiple: 3
        }), jsx("ul", {
          className: "vscode_paywall--vscodePaywallList--egn63",
          children: d.map((e, t) => jsx("li", {
            className: "vscode_paywall--vscodePaywallListItem--Es3mO text--fontPos11--2LvXf text--_fontBase--QdLsd",
            children: e
          }, t))
        }), jsx(Spacing, {
          direction: "y",
          multiple: 3
        }), jsx("div", {
          className: na,
          children: l ? renderI18nText("dev_handoff.paywall.vscode.need_access", {
            devMode: jsx("strong", {
              children: renderI18nText("dev_handoff.paywall.vscode.need_access_dev_mode")
            })
          }) : renderI18nText("dev_handoff.paywall.vscode.no_access")
        }), jsx(Spacing, {
          direction: "y",
          multiple: 3
        }), jsxs("div", {
          className: "vscode_paywall--vscodePaywallButtons--JWqPr",
          children: [l && r ? jsx(Button, {
            variant: "signup",
            disabled: !0,
            children: renderI18nText("dev_handoff.paywall.request_pending")
          }) : jsx(Button, {
            variant: "signup",
            onClick: c,
            disabled: !l,
            children: renderI18nText("dev_handoff.paywall.get_dev_mode")
          }), jsx(Button, {
            variant: "secondary",
            onClick: u,
            children: renderI18nText("dev_handoff.paywall.vscode.view_button")
          })]
        }), !getFeatureFlags().dt_vscode_ready_for_dev && jsxs(Fragment, {
          children: [jsx(Spacing, {
            direction: "y",
            multiple: 5
          }), jsx("div", {
            className: "vscode_paywall--vscodeVideoDescription--b-s1K text--fontPos11--2LvXf text--_fontBase--QdLsd",
            children: renderI18nText("dev_handoff.paywall.vscode.video")
          }), jsx(Spacing, {
            direction: "y",
            multiple: 1
          }), jsx("div", {
            className: "vscode_paywall--vscodeVideoContainer--VcPIA",
            children: jsx("video", {
              controls: !0,
              className: "vscode_paywall--vscodeVideo--sEOiZ",
              src: no,
              onPlay: p,
              onEnded: f
            })
          })]
        })]
      })]
    })
  });
}
function ns() {
  let e = selectCurrentFile();
  let t = useCanAccessDevModeEntryPoint();
  return jsx(OnboardingSequence, {
    isShowing: !0,
    children: jsx(nl, {
      fileKey: e?.key || "",
      teamId: e?.teamId || "",
      parentOrgId: e?.parentOrgId || "",
      folderId: e?.folderId || "",
      canAccessDevModeEntryPoint: t
    })
  });
}
function nr() {
  let e = useMemo(() => fullscreenAlias.getIsExtension(), []);
  let t = _$$W();
  useEffect(() => {
    xT(240, Yh, g_);
    EditorPreferencesApi().devHandoffInspectSplitPosition.set(320);
  }, []);
  b({
    doReport: !1
  });
  let [n, o] = useAtomValueAndSetter(_$$t);
  return (useEffect(() => () => o(_$$c.DEFAULT), [o]), e) ? jsx(ns, {}) : jsx(ErrorBoundaryCrash, {
    boundaryKey: "DevModePaywall",
    fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
    sentryTags: {
      area: ServiceCategories.MONETIZATION_EXPANSION
    },
    children: jsxs(TrackingProvider, {
      name: "Dev Mode Paywall",
      properties: t,
      enabled: t?.gracePeriod !== void 0,
      children: [jsx(OM, {}), jsx(ej, {}), jsx(eO, {}), jsx(t6, {})]
    })
  });
}
let nv = createContext(null);
let ny = forwardRef(({
  manager: e,
  htmlAttributes: t,
  ...n
}, i) => jsx(nv.Provider, {
  value: e,
  children: jsx("table", {
    role: "treegrid",
    ref: i,
    ...t,
    ...n
  })
}));
ny.displayName = "TreeGridPrimitive.Root";
forwardRef(({
  htmlAttributes: e,
  ...t
}, n) => jsx("thead", {
  ...defaultComponentAttribute,
  ref: n,
  ...e,
  ...t
})).displayName = "TreeGridPrimitive.Header";
let nb = forwardRef(({
  htmlAttributes: e,
  ...t
}, n) => jsx(ScreenReaderOnly, {
  as: "thead",
  ...defaultComponentAttribute,
  ref: n,
  ...e,
  ...t
}));
nb.displayName = "TreeGridPrimitive.HiddenHeader";
forwardRef(({
  htmlAttributes: e,
  ...t
}, n) => jsx("tr", {
  ...defaultComponentAttribute,
  ref: n,
  ...e,
  ...t
})).displayName = "TreeGridPrimitive.HeaderRow";
let nj = forwardRef(({
  htmlAttributes: e,
  ...t
}, n) => jsx("th", {
  ...defaultComponentAttribute,
  ref: n,
  ...e,
  ...t
}));
function nw({
  htmlAttributes: e,
  children: t
}, n) {
  let {
    rowHeightEstimate,
    listRef,
    visibleEntries,
    collapseIndex,
    collapseManager,
    selectedRows
  } = ensureContext(nv, "TreeGrid.Body", "TreeGrid.Root");
  return jsx(_$$A4, {
    children: ({
      height: c,
      width: u
    }) => jsx(_m, {
      ref: listRef,
      innerRef: n,
      outerElementType: ({
        style: e,
        ...t
      }) => jsx(ScrollContainer, {
        fill: !0,
        theme: {
          rootStyle: {
            width: u,
            height: c
          },
          scrollStyle: e
        },
        ...t
      }),
      innerElementType: t => jsx("tbody", {
        ...t,
        ...e
      }),
      height: c,
      width: u,
      estimatedItemSize: rowHeightEstimate,
      itemSize: () => rowHeightEstimate,
      itemCount: visibleEntries.length,
      children: ({
        index: e,
        style: n
      }) => {
        let a = visibleEntries[e];
        return t({
          data: {
            entry: a,
            index: e,
            selected: selectedRows.includes(e),
            collapse: () => collapseIndex(e),
            collapsed: a.children?.length ? collapseManager[a.id].children : void 0
          },
          props: {
            style: n,
            index: e
          }
        });
      }
    })
  });
}
nj.displayName = "TreeGridPrimitive.HeaderCell";
nw.displayName = "TreeGridPrimitive.Body";
let nN = forwardRef(nw);
nN.displayName = "TreeGridPrimitive.Body";
let nk = createContext(0);
let nA = forwardRef(({
  children: e,
  index: t,
  htmlAttributes: n,
  ...o
}, l) => {
  let s = useExposedRef(l);
  let {
    collapseManager,
    visibleEntries,
    activeIndex,
    selectedRows,
    setIndex,
    handleKeyDown,
    selectIndex
  } = ensureContext(nv, "TreeGrid.Row", "TreeGrid.Root");
  let g = visibleEntries[t];
  let x = collapseManager[g.id];
  useEffect(() => {
    activeIndex.row === t && s.current?.focus();
  }, [activeIndex.row, t]);
  let m = -1 === activeIndex.row && 0 === t || activeIndex.row === t;
  return jsx(nk.Provider, {
    value: t,
    children: jsx("tr", {
      ref: s,
      ...defaultComponentAttribute,
      ...n,
      ...o,
      tabIndex: m ? 0 : -1,
      onFocus: () => {
        -1 === activeIndex.row && setIndex({
          row: t
        });
      },
      onClick: e => {
        if (e.target.closest('button, [role="button"], a[href], input, select, textarea, label')) return;
        let n = e.shiftKey;
        selectIndex(t, e.ctrlKey || e.metaKey, n);
      },
      "data-fpl-selected": selectedRows.includes(t) ? "true" : void 0,
      "data-fpl-focused": activeIndex.row === t && void 0 === activeIndex.cell,
      "aria-expanded": x.children,
      "aria-level": g.depth,
      onKeyDown: handleKeyDown,
      "aria-setsize": g.setSize,
      "aria-posinset": g.positionInSet,
      children: e
    })
  });
});
nA.displayName = "TreeGridPrimitive.Row";
let nI = forwardRef(({
  htmlAttributes: e,
  column: t,
  ...n
}, o) => {
  let l = useExposedRef(o);
  let {
    activeIndex
  } = ensureContext(nv, "TreeGrid.Cell", "TreeGrid.Root");
  let r = ensureContext(nk, "TreeGrid.Cell", "TreeGrid.Row") === activeIndex.row && t === activeIndex.cell;
  useEffect(() => {
    r && l.current?.focus();
  }, [r]);
  return jsx("td", {
    ref: l,
    ...defaultComponentAttribute,
    "data-fpl-focused": r,
    role: "gridcell",
    ...e,
    ...n
  });
});
nI.displayName = "TreeGridPrimitive.Cell";
let nz = "variables_side_panel--caretButton---gYek";
let nV = "variables_side_panel--hovered---OfAh";
let nH = "variables_side_panel--selected--v6nN1";
let nW = "variables_side_panel--numVars--EMeTC";
let nG = [];
let nU = atom(0);
function nK() {
  let e = useAtomWithSubscription(_$$$3);
  let t = useMemo(() => ({
    entrypoint: e
  }), [e]);
  return jsx(gs, {
    name: "full_table",
    trackingProps: t,
    skipOpenAndClose: !0,
    children: jsx(nX, {})
  });
}
function nX() {
  let e = yp();
  let [t, n] = R6(e);
  let i = zL();
  let o = i && !!t;
  return i && o ? jsxs(Fragment, {
    children: [jsx(nJ, {
      currentVariableSet: t,
      setCurrentVariableSet: n
    }), jsx(nY, {
      variableSet: t
    })]
  }) : jsx("div", {
    className: "variables_side_panel--emptyPanelBorder--M7UIx"
  });
}
function nJ({
  currentVariableSet: e,
  setCurrentVariableSet: t
}) {
  let n = yp();
  let o = "variable-sets-list";
  let l = useRef(null);
  let s = ON();
  let [d, c] = useState(!0);
  let [u, p] = useAtomValueAndSetter(nU);
  let h = useMemo(() => Math.min(32 * n.length, 144), [n.length]);
  useEffect(() => {
    0 === u && p(h);
  }, [h, u, p]);
  let f = useCallback(() => {
    s("toggle_collections", {
      type: d ? "collapse" : "expand"
    });
    c(e => !e);
  }, [d, s]);
  return jsxs("div", {
    className: "variables_side_panel--variableSetsList--by7HP",
    children: [jsxs(ButtonPrimitive, {
      className: "variables_side_panel--header--fc-N2",
      onClick: f,
      "aria-label": d ? getI18nString("dev_handoff.variables.table_collections_local_collapse_aria_label") : getI18nString("dev_handoff.variables.table_collections_local_expand_aria_label"),
      "aria-expanded": d,
      "aria-controls": o,
      children: [jsx("div", {
        className: ek()(nz, "variables_side_panel--headerCaret--cJljI"),
        children: d ? jsx(_$$O2, {}) : jsx(_$$k3, {})
      }), jsx("div", {
        className: "variables_side_panel--variableSetsHeader--xvYxN ellipsis--ellipsis--Tjyfa",
        children: renderI18nText("dev_handoff.variables.table_collections_local")
      })]
    }), d && jsx("div", {
      id: o,
      ref: l,
      children: jsx(wV, {
        side: "bottom",
        size: u,
        defaultSize: h,
        onResize: p,
        className: cssBuilderInstance.relative.$,
        children: jsx(_$$P2, {
          className: "variables_side_panel--variableSetsScrollContainer--qTzl5",
          children: n.map(n => jsx(nq, {
            variableSet: n,
            isSelected: e.node_id === n.node_id,
            setCurrentVariableSet: t,
            panelRef: l
          }, n.node_id))
        })
      })
    })]
  });
}
function nQ({
  label: e,
  number: t,
  isSelected: n,
  onClick: o,
  rowRef: l,
  indent: s,
  recordingKey: r,
  containerClassName: d
}) {
  let [c, u] = useState(!1);
  return jsx("div", {
    className: ek()("variables_side_panel--sidebarRow--ZJg5r", d),
    ref: l,
    onMouseEnter: () => u(!0),
    onMouseLeave: () => u(!1),
    children: jsxs(ButtonPrimitive, {
      className: ek()("variables_side_panel--button--nNls6", {
        [nH]: n,
        [nV]: c
      }),
      style: s ? {
        paddingLeft: `${24 * s}px`
      } : void 0,
      onClick: o,
      recordingKey: r ? generateRecordingKey("dev_handoff.variables_table.sidebar_row", r) : void 0,
      children: [jsx("div", {
        className: cssBuilderInstance.truncate.if(n, cssBuilderInstance.textBodyMediumStrong).$,
        children: e
      }), void 0 !== t && jsx("div", {
        className: ek()(cssBuilderInstance.truncate.textBodyMedium.colorTextSecondary.$, nW),
        "data-testid": r && `dev_handoff.variables_table.count.${r}`,
        children: t
      })]
    })
  });
}
function nq({
  variableSet: e,
  setCurrentVariableSet: t,
  isSelected: n,
  panelRef: o
}) {
  let l = useRef(null);
  let {
    numVariables
  } = n$(e);
  let [d, c] = useAtomValueAndSetter(bE);
  let u = _$$i_();
  let p = ON();
  useEffect(() => {
    if (n) {
      let e = l.current?.getBoundingClientRect()?.top ?? 9999;
      let t = l.current?.getBoundingClientRect()?.bottom ?? 0;
      let n = o.current?.getBoundingClientRect()?.top ?? 0;
      let a = o.current?.getBoundingClientRect()?.bottom ?? 9999;
      (e < n || t > a) && l.current?.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [n, o]);
  let h = useCallback(() => {
    p("click_collection");
    t(e.node_id);
    c(_$$eb);
    u(null);
  }, [p, t, e.node_id, c, u]);
  return jsx(nQ, {
    label: e.name,
    number: numVariables,
    isSelected: n,
    onClick: h,
    rowRef: l,
    recordingKey: `collection.${e.name}`
  });
}
function nY({
  variableSet: e
}) {
  let {
    numVariables,
    groups,
    variableGroupCounts
  } = n$(e);
  let {
    manager
  } = function ({
    items: e,
    rowHeightEstimate: t,
    columns: n,
    multiselect: a = !1,
    initialDepth: o = 0,
    rowSelection: l
  }) {
    let {
      entries,
      collapseManager
    } = useMemo(() => function e(t, n = {
      initialDepth: 0
    }, a = 0) {
      let i = [];
      let o = [];
      let l = {};
      let s = t.length;
      for (let r = 0; r < t.length; r++) {
        let d = t[r];
        let c = r + 1;
        if (d.children?.length) {
          let {
            entries: _entries,
            collapseManager: _collapseManager,
            idList
          } = e(d.children, n, a + 1);
          let p = d.children.map(({
            id: e
          }) => e);
          o.push({
            ...d,
            children: idList,
            immediateChildren: p,
            depth: a,
            setSize: s,
            positionInSet: c
          });
          o.push(..._entries);
          l = {
            ...l,
            ..._collapseManager,
            [d.id]: {
              self: a <= n.initialDepth,
              children: a + 1 <= n.initialDepth
            }
          };
          i.push(d.id, ...idList);
        } else {
          o.push({
            ...d,
            depth: a,
            children: void 0,
            setSize: s,
            positionInSet: c
          });
          i.push(d.id);
          l[d.id] = {
            self: a <= n.initialDepth
          };
        }
      }
      return {
        entries: o,
        collapseManager: l,
        idList: i
      };
    }(e, {
      initialDepth: o
    }, 0), [o, e]);
    let d = useRef();
    let [c, u] = useState([]);
    let p = useRef(null);
    let [h, f] = useState(collapseManager);
    let [g, x] = useState({
      row: -1
    });
    let m = useMemo(() => entries.filter(({
      id: e
    }) => h[e].self), [h, entries]);
    useEffect(() => {
      l && l(c.map(e => entries[e]));
    }, [c, entries, l]);
    return useMemo(() => {
      function e(e) {
        let t = m[e];
        let n = h[t.id];
        if (!t || void 0 === n.children) return;
        let a = n.children ? t.children : t.immediateChildren;
        if (!a) return;
        let i = a.reduce((e, t) => (e[t] = {
          self: !n.children,
          children: !0 !== n.children && h[t].children
        }, e), {});
        f(e => ({
          ...e,
          ...i,
          [t.id]: {
            self: n.self,
            children: !n.children
          }
        }));
      }
      return {
        manager: {
          collapseManager: h,
          activeIndex: g,
          selectedRows: c,
          selectIndex: function (e, t = !1, n = !1) {
            let i = p.current;
            if (!t && !n || !a) {
              1 === c.length && c[0] === e ? u([]) : u([e]);
              p.current = e;
              return;
            }
            if (n && null !== i) {
              let n = Math.min(i, e);
              let a = Array.from({
                length: Math.max(i, e) - n + 1
              }, (e, t) => n + t);
              t ? u([...new Set([...c, ...a])]) : u(a);
              return;
            }
            if (t) {
              c.includes(e) ? u(c.filter(t => t !== e)) : u([...c, e]);
              p.current = e;
              return;
            }
            u([e]);
            p.current = e;
          },
          entries,
          deselectIndex: function (e) {
            p.current = null;
            u(t => t.filter(t => t !== e));
          },
          setIndex: x,
          visibleEntries: m,
          collapseRows: function (e) {
            let t = entries.reduce((t, {
              id: n,
              children: a
            }) => {
              if (!e.includes(n) || !a) return t;
              for (let e = 0; e < a.length; e++) t[a[e]] = {
                self: !1,
                children: !0
              };
              return t;
            }, {});
            f(e => ({
              ...e,
              ...t
            }));
          },
          listRef: d,
          handleKeyDown: function (t) {
            let a = h[m[g.row].id];
            switch (t.code) {
              case "Home":
                x(e => (d.current?.scrollToItem(0), {
                  ...e,
                  row: 0
                }));
                preventAndStopEvent(t);
                break;
              case "End":
                x(e => (d.current?.scrollToItem(m.length - 1), {
                  ...e,
                  row: m.length - 1
                }));
                preventAndStopEvent(t);
                break;
              case "ArrowDown":
                x(e => {
                  if (e.row === m.length - 1) return e;
                  let t = {
                    ...e,
                    row: e.row + 1
                  };
                  d.current?.scrollToItem(t.row);
                  return t;
                });
                preventAndStopEvent(t);
                break;
              case "ArrowUp":
                x(e => {
                  if (0 === e.row) return e;
                  let t = {
                    ...e,
                    row: e.row - 1
                  };
                  d.current?.scrollToItem(t.row);
                  return t;
                });
                preventAndStopEvent(t);
                break;
              case "ArrowLeft":
                0 === g.cell && !0 === a.children ? (e(g.row), x({
                  row: g.row,
                  cell: void 0
                })) : x(e => 0 === e.cell ? {
                  ...e,
                  cell: void 0
                } : void 0 !== e.cell ? {
                  ...e,
                  cell: e.cell - 1
                } : e);
                preventAndStopEvent(t);
                break;
              case "ArrowRight":
                void 0 === g.cell && !1 === a.children ? (e(g.row), x({
                  row: g.row,
                  cell: 0
                })) : x(e => e.cell !== n - 1 && void 0 !== e.cell ? {
                  ...e,
                  cell: e.cell + 1
                } : void 0 === e.cell ? {
                  ...e,
                  cell: 0
                } : e);
                preventAndStopEvent(t);
            }
          },
          collapseAll: function () {
            f(entries.reduce((e, {
              id: t,
              depth: n
            }) => (e[t] = {
              self: 0 === n,
              children: !1
            }, e), {}));
          },
          collapseIndex: e,
          expandAll: function () {
            f(entries.reduce((e, {
              id: t
            }) => (e[t] = {
              self: !0,
              children: !0
            }, e), {}));
          },
          rowHeightEstimate: t
        }
      };
    }, [h, g, c, entries, m, t, a, n]);
  }({
    items: [useMemo(() => groups[0] && getFeatureFlags().fpl_variables_tree_grid ? function e(t) {
      let n = t.name.endsWith("/") ? t.name.slice(0, -1).split("/").pop() || "" : t.name;
      let a = t.variables.map(({
        node_id: e
      }) => e);
      let i = [];
      for (let n of t.subgroups) {
        let t = e(n);
        i.push(t);
        t.children && (a = [...a, ...t.variables]);
      }
      let o = {
        id: "" === t.name ? "ALL_VARIABLES" : t.name.slice(0, -1),
        name: "" === t.name ? getI18nString("dev_handoff.variables.table_all_vars") : n,
        variableCount: a.length,
        variables: a,
        children: i
      };
      i.length > 0 && (o.children = i);
      return o;
    }(groups[0]) : {
      id: "",
      name: getI18nString("dev_handoff.variables.table_all_vars"),
      variableCount: 0,
      variables: []
    }, [groups])],
    rowHeightEstimate: 24,
    initialDepth: 1 / 0,
    columns: 1,
    multiselect: !1,
    rowSelection: ([e]) => {
      e && (p("click_group"), u(e.id));
    }
  });
  let d = useMemo(() => groups.map(e => e.name), [groups]);
  let [c, u] = useAtomValueAndSetter(bE);
  let p = ON();
  let h = useCurrentFileKey();
  let [f, g] = useSessionStorageSync(`dev_mode_variables_sidebar_collapsed_groups__${h}`, {});
  let x = f[e.node_id] ?? nG;
  let m = useCallback((t, n) => {
    n.stopPropagation();
    let a = "" === t ? _$$eb : t;
    g(t => {
      let n = t[e.node_id] ?? nG;
      let i = n.includes(a) ? n.filter(e => e !== a) : [...n, a];
      return {
        ...t,
        [e.node_id]: i
      };
    });
  }, [g, e.node_id]);
  let _ = useCallback(e => {
    p("click_group");
    u(e);
  }, [p, u]);
  return (useEffect(() => {
    d.includes(c) || u(_$$eb);
  }, [d, c, u]), 0 === numVariables) ? null : getFeatureFlags().fpl_variables_tree_grid ? jsxs(ny, {
    manager,
    style: {
      width: "100%",
      height: "100%"
    },
    children: [jsxs(nb, {
      children: [jsx(nj, {
        children: getI18nString("dev_handoff.variables.table_column_visibility")
      }), jsx(nj, {
        children: getI18nString("dev_handoff.variables.table_column_name")
      }), jsx(nj, {
        children: getI18nString("dev_handoff.variables.table_column_variable_count")
      })]
    }), jsx(nN, {
      children: ({
        data: e,
        props: {
          style: t,
          index: n
        }
      }) => jsxs(nA, {
        className: "variables_side_panel--fplTreeRow--mKgCw",
        index: n,
        style: {
          paddingLeft: `${1.5 * e.entry.depth}rem`,
          ...t
        },
        children: [jsx(nI, {
          column: 0,
          children: e.entry.children ? jsx(setupToggleButton, {
            onIcon: jsx(_$$O2, {}),
            offIcon: jsx(_$$k3, {}),
            checked: e.collapsed,
            onChange: e.collapse,
            "aria-label": getI18nString("dev_handoff.variables.table_groups_expand_aria_label")
          }) : null
        }), jsx(nI, {
          column: 1,
          style: {
            minWidth: "3rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
          },
          children: e.entry.name
        }), jsx(nI, {
          column: 2,
          style: {
            textAlign: "right"
          },
          children: e.entry.variableCount
        })]
      })
    })]
  }) : jsx(_$$P2, {
    className: "variables_side_panel--variableGroupsScrollContainer--B2ilG",
    children: groups.map((e, t) => jsx(nZ, {
      canShowCaret: e.subgroups.length > 0,
      collapsedGroupNames: x,
      containerClassName: t === groups.length - 1 ? "variables_side_panel--isLastRow--LyNKQ" : void 0,
      label: e.name,
      onClickCaret: m,
      recordingKey: "" === e.name ? "group.all_variables" : `group.${e.name}`,
      selectedGroup: c,
      setSelectedGroup: _,
      variableGroupCounts
    }, e.name))
  });
}
function nZ({
  label: e,
  variableGroupCounts: t,
  selectedGroup: n,
  setSelectedGroup: o,
  containerClassName: l,
  recordingKey: s,
  canShowCaret: r,
  onClickCaret: d,
  collapsedGroupNames: c
}) {
  let [u, p] = useState(!1);
  let h = "" === e;
  let f = h ? n === _$$eb : n === e;
  let {
    labelToDisplay,
    number,
    indent,
    isCollapsed,
    isInCollapsedGroup
  } = useMemo(() => {
    let n = e.split("/");
    let a = n.pop() ?? "";
    let i = h ? getI18nString("dev_handoff.variables.table_all_vars") : a;
    let o = n.length;
    let l = h ? _$$eb : e;
    let s = c.includes(l);
    let r = c.some(e => !h && e === _$$eb || e !== l && l.startsWith(`${e}/`));
    return {
      number: t[e],
      indent: o,
      labelToDisplay: i,
      isCollapsed: s,
      isInCollapsedGroup: r
    };
  }, [h, c, e, t]);
  let y = useCallback(() => {
    o(h ? _$$eb : e);
  }, [o, h, e]);
  return isInCollapsedGroup ? null : jsx("div", {
    className: ek()("variables_side_panel--groupRow--bvXHW", l),
    onMouseEnter: () => p(!0),
    onMouseLeave: () => p(!1),
    children: jsxs(RecordableDiv, {
      className: ek()("variables_side_panel--groupButton--M6HtP", {
        [nH]: f,
        [nV]: u
      }),
      style: indent ? {
        paddingLeft: `${24 * indent}px`
      } : void 0,
      onClick: y,
      recordingKey: generateRecordingKey("dev_handoff.variables_table.sidebar_row", s),
      children: [r && jsx(ButtonPrimitive, {
        onClick: t => d(e, t),
        "aria-label": isCollapsed ? getI18nString("dev_handoff.variables.table_groups_expand_aria_label") : getI18nString("dev_handoff.variables.table_groups_collapse_aria_label"),
        className: ek()(nz, "variables_side_panel--rowCaret--MC8Fl"),
        children: isCollapsed ? jsx(_$$k3, {}) : jsx(_$$O2, {})
      }), jsxs("div", {
        className: ek()("variables_side_panel--buttonContent--oy54B", {
          "variables_side_panel--noCaret--E9UAF": !r
        }),
        children: [jsx("div", {
          className: cssBuilderInstance.truncate.$,
          children: labelToDisplay
        }), number && jsx("div", {
          className: ek()(cssBuilderInstance.truncate.textBodyMedium.colorTextSecondary.$, nW),
          "data-testid": s && `dev_handoff.variables_table.count.${s}`,
          children: number
        })]
      })]
    })
  });
}
function n$(e) {
  let t = vo(e);
  let n = t.find(e => "" === e.name);
  let a = GC(n).length;
  let i = {};
  t.forEach(e => {
    i[e.name] = GC(e).length;
  });
  return {
    numVariables: a,
    groups: t,
    variableGroupCounts: i
  };
}
function a_() {
  let e = useAtomWithSubscription(mp);
  let t = isDevHandoffEditorType();
  let n = useIsProgressBarHiddenOrLocked();
  let {
    uniqueId,
    show,
    isShowing,
    complete
  } = _$$e3({
    overlay: War,
    priority: _$$N.SECONDARY_MODAL
  }, [e]);
  let u = useCallback(() => {
    !n && t && show({
      canShow: e => function (e) {
        let t = Date.now();
        return e.getTime() <= t - 12096e5;
      }(e)
    });
  }, [n, show, t]);
  _$$E3(uniqueId, wX("dev"), () => {
    u();
  });
  let p = _$$uh();
  let h = jsx("span", {
    style: {
      fontWeight: "bold",
      display: "contents"
    },
    children: p(DesignGraphElements.DROPPER_COLOR)
  });
  return jsx(OnboardingModal, {
    arrowPosition: ArrowPosition.BOTTOM,
    clickOutsideToHide: !0,
    description: renderI18nText("dev_handoff.eyedropper.onboarding_body", {
      shortcutText: h
    }),
    isShowing,
    media: jsx(ImageOverlayComponent, {
      src: buildUploadUrl("0b9e6e49a3c90f0d872b021c82a55b9d0bf71927"),
      alt: getI18nString("dev_handoff.eyedropper.onboarding_image_alt"),
      aspectRatio: 1843 / 1037
    }),
    onClose: complete,
    targetKey: _$$K,
    title: renderI18nText("dev_handoff.eyedropper.onboarding_title"),
    trackingContextName: "Eyedropper Tool In Dev Mode Onboarding",
    width: 240
  });
}
let aL = "dev_handoff_seen_config_wizard";
let aR = userFlagAtomFamily(aL);
let a$ = "configuration_wizard--step--9zx-B";
let a0 = "configuration_wizard--buttonRow--2GlLI";
let a1 = "configuration_wizard--spacer--LCRlq";
let a2 = "configuration_wizard--preferenceOptionsGroup--T5b2t";
let a5 = "configuration_wizard--unitOption--R7eMs configuration_wizard--preferenceOption--OkUN2";
let a3 = "configuration_wizard--integrationsCard--aup-J configuration_wizard--preferenceOptionCard--C3ZkW configuration_wizard--preferenceOption--OkUN2";
let a4 = "configuration_wizard--unitText--PiILT";
let a7 = "configuration_wizard--preferenceSubheader--orNpN text--fontPos11--2LvXf text--_fontBase--QdLsd";
let a8 = "configuration_wizard--preferenceTitle--lA1Na text--fontPos13Whyte--VhWqH text--_fontBaseWhyte--efAjI";
let a6 = "configuration_wizard--unitRadioOption--YokOy";
let a9 = "configuration_wizard--stepHeading--b5Yv4 text--fontPos18Whyte--M40th text--_fontBaseWhyte--efAjI";
let ie = "configuration_wizard--stepDescription--uSn6A text--fontPos12Whyte---tkNx text--_fontBaseWhyte--efAjI";
let it = "configuration_wizard--option--I5GPA";
let ia = "configuration_wizard--optionHeading--9e-1V text--fontPos12Whyte---tkNx text--_fontBaseWhyte--efAjI";
let ii = "configuration_wizard--pluginListDivider--LeuxA";
let io = "configuration_wizard--pluginList---hNhu";
let il = "configuration_wizard--dividerListContainer--r4GxV";
let is = "configuration_wizard--pluginCta--WgsY- resource_tiles--cta--JU9XJ text--fontPos12--YsUAh text--_fontBase--QdLsd";
let ir = "configuration_wizard--pluginTick--YbuJa";
let id = "configuration_wizard--spinnerContainer--2xXeT";
let ix = "OTHER";
function im() {
  let e = v4();
  let {
    codegenPlugins = [],
    loading
  } = usePluginData();
  let o = gB();
  let [s, r] = useState("first-party" === e.type ? e.id : ix);
  let [d, c] = useState(!1);
  let u = !loading && codegenPlugins?.length > 0;
  let [p, h] = useState(u ? iA(codegenPlugins[0]) : void 0);
  useEffect(() => {
    if (!p && !loading && codegenPlugins?.length > 0) {
      let e = iA(codegenPlugins[0]);
      h(e);
      o(e);
    }
  }, [codegenPlugins, loading, p, o]);
  return jsxs("div", {
    className: a$,
    children: [jsx("h1", {
      className: a9,
      children: renderI18nText("dev_handoff.configuration_wizard.code_language_step.title")
    }), jsx("h2", {
      className: ie,
      children: renderI18nText("dev_handoff.configuration_wizard.code_language_step.description")
    }), jsx(i_, {
      selectedOption: s,
      onSelect: e => {
        r(e);
        e === _$$p ? EditorPreferencesApi().colorFormat.set(ColorFormatEnum.UIColor) : EditorPreferencesApi().colorFormat.set(ColorFormatEnum.HEX);
        e === _$$p ? o({
          type: "first-party",
          id: d ? IOS_UIKIT : _$$p
        }) : e === ANDROID ? o({
          type: "first-party",
          id: d ? ANDROID_XML : ANDROID
        }) : e !== ix ? o({
          type: "first-party",
          id: e
        }) : p && o(p);
      }
    }), s === _$$p || s === ANDROID ? jsx(iy, {
      selectedLanguage: s,
      shouldUseLegacyMobileCodegen: d,
      onFrameworkSelect: e => {
        c(e);
        s === _$$p && o({
          type: "first-party",
          id: e ? IOS_UIKIT : _$$p
        });
        s === ANDROID && o({
          type: "first-party",
          id: e ? ANDROID_XML : ANDROID
        });
      }
    }) : null, s !== ix ? jsx(ij, {}) : jsx(ik, {
      onSelect: h,
      loading,
      codegenPlugins
    })]
  });
}
function i_({
  onSelect: e,
  selectedOption: t
}) {
  let n = isGovCluster() ? [{
    key: _$$uz,
    title: getI18nString("dev_handoff.code.lang_css"),
    subheader: null,
    svgSrc: _$$A0
  }, {
    key: _$$p,
    title: getI18nString("dev_handoff.configuration_wizard.code_language_step.option_ios"),
    subheader: null,
    svgSrc: _$$A8
  }, {
    key: ANDROID,
    title: getI18nString("dev_handoff.configuration_wizard.code_language_step.option_android"),
    subheader: null,
    svgSrc: _$$A7
  }] : [{
    key: _$$uz,
    title: getI18nString("dev_handoff.code.lang_css"),
    subheader: null,
    svgSrc: _$$A0
  }, {
    key: _$$p,
    title: getI18nString("dev_handoff.configuration_wizard.code_language_step.option_ios"),
    subheader: null,
    svgSrc: _$$A8
  }, {
    key: ANDROID,
    title: getI18nString("dev_handoff.configuration_wizard.code_language_step.option_android"),
    subheader: null,
    svgSrc: _$$A7
  }, {
    key: ix,
    title: getI18nString("dev_handoff.configuration_wizard.code_language_step.option_other"),
    subheader: null,
    svgSrc: _$$A9
  }];
  return jsxs("div", {
    className: it,
    children: [jsx("div", {
      className: ia,
      children: renderI18nText("dev_handoff.configuration_wizard.code_language_step.what_platform")
    }), jsx(RadioPrimitiveRoot, {
      value: String(t),
      onChange: e,
      className: a2,
      children: n.map(({
        key: e,
        title: t,
        svgSrc: n
      }) => jsxs("div", {
        className: "configuration_wizard--preferenceOptionCard--C3ZkW configuration_wizard--preferenceOption--OkUN2",
        children: [jsx(SvgComponent, {
          svg: n,
          className: "configuration_wizard--platformIcon--F7N2s"
        }), jsx(RadioPrimitiveOption, {
          value: e,
          id: e,
          className: "configuration_wizard--radioOption--Yfm0j"
        }), jsx("div", {
          className: "configuration_wizard--preferenceText--ZqN2L",
          children: jsx(iv, {
            htmlFor: e,
            title: t
          })
        })]
      }, e))
    })]
  });
}
function iv({
  title: e,
  htmlFor: t
}) {
  let n = _$$X(e);
  return jsx("label", {
    className: ek()(a8, "configuration_wizard--ellipsis--Y-LP0 ellipsis--ellipsis--Tjyfa"),
    htmlFor: t,
    ...n,
    children: e
  });
}
function iy({
  selectedLanguage: e,
  shouldUseLegacyMobileCodegen: t,
  onFrameworkSelect: n
}) {
  let o = useMemo(() => e === _$$p ? [{
    key: !1,
    title: getI18nString("dev_handoff.code.lang_swiftui")
  }, {
    key: !0,
    title: getI18nString("dev_handoff.code.lang_uikit")
  }] : [{
    key: !1,
    title: getI18nString("dev_handoff.code.lang_compose")
  }, {
    key: !0,
    title: getI18nString("dev_handoff.code.lang_android_xml")
  }], [e]);
  return jsxs("div", {
    className: it,
    children: [jsx("div", {
      className: ia,
      children: renderI18nText("dev_handoff.configuration_wizard.code_language_step.what_framework")
    }), jsx(RadioPrimitiveRoot, {
      value: String(t),
      onChange: e => {
        n("true" === e);
      },
      className: a2,
      children: o.map(({
        key: e,
        title: t
      }) => jsx("label", {
        className: a5,
        children: jsxs("div", {
          className: a4,
          children: [jsx("div", {
            className: a8,
            children: t
          }), jsx(RadioPrimitiveOption, {
            value: String(e),
            id: String(e),
            className: a6
          })]
        })
      }, String(e)))
    })]
  });
}
let ib = new KD({
  min: 0.1
});
function ij() {
  let e = v4();
  let t = isCodegenSupportedForLanguage();
  let n = getMeasurementUnit();
  let o = getLanguageUnitLabel();
  let l = useUpdateCodeExtensionPreferences();
  let s = useCallback(t => l(e, null, {
    unit: t
  }), [e, l]);
  let r = getCodeExtensionPreferences(e.id);
  let d = useCallback(t => {
    t && l(e, null, {
      scaleFactor: t
    });
  }, [e, l]);
  let c = r?.scaleFactor ?? 1;
  let u = "first-party" === e.type && (e.id === ANDROID || e.id === ANDROID_XML || e.id === _$$p || e.id === IOS_UIKIT);
  let p = useMemo(() => new Be(o), [o]);
  let h = useMemo(() => CODEGEN_MEASUREMENT_UNITS.map(e => ({
    key: e,
    title: p.format(e)
  })), [p]);
  return t ? jsxs("div", {
    className: it,
    children: [jsx("div", {
      className: ia,
      children: renderI18nText("dev_handoff.configuration_wizard.code_language_step.what_units")
    }), jsx(RadioPrimitiveRoot, {
      value: String(n),
      onChange: e => s(parseInt(e)),
      className: a2,
      children: h.map(({
        key: e,
        title: t
      }) => jsx("label", {
        className: a5,
        children: jsxs("div", {
          className: a4,
          children: [jsx("div", {
            className: a8,
            children: t
          }), jsx(RadioPrimitiveOption, {
            value: String(e),
            id: String(e),
            className: a6
          })]
        })
      }, e))
    }), n === MeasureUnitType.SCALED && jsxs(Fragment, {
      children: [jsx("div", {
        className: "configuration_wizard--optionHeadingWithPadding--MnGm9 configuration_wizard--optionHeading--9e-1V text--fontPos12Whyte---tkNx text--_fontBaseWhyte--efAjI",
        children: renderI18nText("dev_handoff.alternative_units.inspection_scale_factor")
      }), u ? jsx(Rg, {
        scaleFactor: c,
        onChange: d,
        onDropdownHidden: noop,
        className: "configuration_wizard--scaleFactorDropdown--IVy1Q",
        inputClassName: "configuration_wizard--scaleFactorDropdownInput--h8Jr2 text--fontPos13Whyte--VhWqH text--_fontBaseWhyte--efAjI"
      }) : jsx(FormattedInputVariant1, {
        className: "configuration_wizard--scaleFactorInput--ezaTA text--fontPos13Whyte--VhWqH text--_fontBaseWhyte--efAjI",
        property: c,
        formatter: ib,
        onChange: d,
        allowEmpty: !1,
        noBorderOnFocus: !0
      }), jsx("div", {
        className: a7,
        children: jsx(LO, {
          codeLanguage: e
        })
      })]
    })]
  }) : null;
}
function iw() {
  return jsx("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: jsxs("g", {
      id: "Frame 1321317093",
      children: [jsx("rect", {
        width: "24",
        height: "24",
        rx: "4.5",
        fill: "#2C2C2C"
      }), jsx("rect", {
        x: "4",
        y: "4",
        width: "10.5",
        height: "1.5",
        fill: "#D9D9D9"
      }), jsx("rect", {
        x: "7",
        y: "8",
        width: "12",
        height: "1.5",
        fill: "#E4A3D9"
      }), jsx("rect", {
        x: "9",
        y: "13",
        width: "12",
        height: "1.5",
        fill: "#97C1EF"
      }), jsx("rect", {
        x: "4",
        y: "17.5",
        width: "10.5",
        height: "1.5",
        fill: "#D9D9D9"
      })]
    })
  });
}
function iN() {
  return jsxs("div", {
    className: "configuration_wizard--customCodegenPromo--Sg78f",
    children: [jsx("div", {
      className: "configuration_wizard--customCodegenPromoIcon--ND7NT",
      children: jsx(iw, {})
    }), jsxs("div", {
      className: "configuration_wizard--customCodegenPromoWrapper--steEn",
      children: [jsx("div", {
        className: "configuration_wizard--customCodegenPromoTitle--31anH text--fontPos12--YsUAh text--_fontBase--QdLsd",
        children: renderI18nText("dev_handoff.configuration_wizard.code_language_step.custom_codegen_promo_title")
      }), jsx("div", {
        className: "configuration_wizard--customCodegenPromoBody--EsEFB text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: renderI18nText("dev_handoff.configuration_wizard.code_language_step.custom_codegen_promo_body")
      })]
    }), jsx("div", {
      className: "configuration_wizard--customCodegenPromoLink--0l-Sa",
      children: jsxs(Link, {
        newTab: !0,
        href: "https://www.figma.com/plugin-docs/api/figma-codegen/",
        children: [renderI18nText("dev_handoff.configuration_wizard.code_language_step.custom_codegen_promo_link"), jsx(_$$S2, {
          style: {
            "--color-icon": "var(--color-icon-brand)"
          }
        })]
      })
    })]
  });
}
function ik({
  onSelect: e,
  loading: t,
  codegenPlugins: n
}) {
  let i = t ? jsx("div", {
    className: id,
    children: jsx(LoadingSpinner, {})
  }) : jsxs(KeyboardNavigationProvider, {
    children: [n.map((t, n) => jsx(iI, {
      plugin: t,
      onSelect: e
    }, `${t.id}_${n}`)), jsx(iN, {})]
  });
  return jsxs("div", {
    className: "configuration_wizard--otherLanguagesContainer--2J1b5",
    children: [jsx("h1", {
      className: "configuration_wizard--otherLanguagesListHeading--M2BwY text--fontPos12Whyte---tkNx text--_fontBaseWhyte--efAjI",
      children: renderI18nText("dev_handoff.configuration_wizard.code_language_step.other_title")
    }), jsx("h2", {
      className: "configuration_wizard--otherLanguagesListDescription--jeS2m text--fontPos12Whyte---tkNx text--_fontBaseWhyte--efAjI",
      children: renderI18nText("dev_handoff.configuration_wizard.code_language_step.other_description")
    }), jsxs("div", {
      className: il,
      children: [jsx("div", {
        className: ii
      }), jsx("div", {
        className: io,
        children: i
      })]
    })]
  });
}
function iA(e) {
  return {
    type: "published-plugin",
    id: e.id,
    pluginLanguage: function (e) {
      let t = e?.versions?.[e?.current_plugin_version_id ?? ""];
      return getCodegenLanguages(t)?.[0]?.value ?? "";
    }(e)
  };
}
function iI({
  plugin: e,
  onSelect: t
}) {
  let n = v4();
  let o = gB();
  let l = "first-party" !== n.type && n.id === e.id;
  let s = useMemo(() => iA(e), [e]);
  let r = useCallback(() => {
    o(s);
    t(s);
  }, [s, o, t]);
  let d = l ? jsxs("div", {
    className: is,
    children: [jsx(SvgComponent, {
      svg: _$$A6,
      className: ir
    }), renderI18nText("community.plugins.selected")]
  }) : jsx("div", {
    className: is,
    children: renderI18nText("community.plugins.select")
  });
  return jsx(Cg, {
    plugin: e,
    ctaButton: d,
    onClick: l ? void 0 : r
  });
}
function iC() {
  let {
    inspectPlugins = [],
    loading
  } = usePluginData();
  let n = loading ? jsx("div", {
    className: id,
    children: jsx(LoadingSpinner, {})
  }) : jsx(KeyboardNavigationProvider, {
    children: inspectPlugins.map((e, t) => jsx(iT, {
      plugin: e
    }, `${e.id}_${t}`))
  });
  return jsxs("div", {
    className: a$,
    children: [jsx("h1", {
      className: a9,
      children: renderI18nText("dev_handoff.configuration_wizard.inspect_plugins_step.title")
    }), jsx("h2", {
      className: ie,
      children: renderI18nText("dev_handoff.configuration_wizard.inspect_plugins_step.description")
    }), jsxs("div", {
      className: il,
      children: [jsx("div", {
        className: ii
      }), jsx("div", {
        className: io,
        children: n
      })]
    })]
  });
}
function iT({
  plugin: e
}) {
  let {
    pinnedPlugins,
    pinPlugin,
    unpinPlugin
  } = setupUserPluginPreferences();
  let l = e.id;
  let s = useMemo(() => !!pinnedPlugins.find(e => e.plugin_id === l), [pinnedPlugins, l]);
  let [r, d] = useState(s);
  useEffect(() => {
    d(s);
  }, [s]);
  let c = useDebouncedCallback(() => {
    d(!0);
    pinPlugin(l);
  }, 200);
  let u = useDebouncedCallback(() => {
    d(!1);
    unpinPlugin(l);
  }, 200);
  let p = r ? jsxs("div", {
    className: is,
    children: [jsx(SvgComponent, {
      svg: _$$A6,
      className: ir
    }), renderI18nText("community.plugins.pinned")]
  }) : jsx("div", {
    className: is,
    children: renderI18nText("community.plugins.pin")
  });
  return jsx(Cg, {
    plugin: e,
    ctaButton: p,
    onClick: r ? u : c
  });
}
function iO() {
  let e = useDispatch();
  let t = trackFileEventWithUser();
  return jsxs("div", {
    className: a$,
    children: [jsx("h1", {
      className: a9,
      children: renderI18nText("dev_handoff.configuration_wizard.install_extensions_step.title")
    }), jsx("h2", {
      className: ie,
      children: renderI18nText("dev_handoff.configuration_wizard.install_extensions_step.description")
    }), jsxs("div", {
      className: a2,
      children: [jsxs("div", {
        className: a3,
        children: [jsx("img", {
          srcSet: "data:image/png;base64,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 2x",
          alt: ""
        }), jsx("div", {
          className: a8,
          children: renderI18nText("dev_handoff.configuration_wizard.install_extensions_step.figma_for_vscode")
        }), jsx("div", {
          className: a7,
          children: renderI18nText("dev_handoff.configuration_wizard.install_extensions_step.figma_for_vscode_description")
        }), jsx(Button, {
          variant: "primary",
          onClick: () => {
            t("vscode.install_extension_clicked");
            e(setupHyperlinkHandler({
              rawInput: "https://marketplace.visualstudio.com/items?itemName=figma.figma-vscode-extension"
            }));
          },
          children: renderI18nText("dev_handoff.configuration_wizard.install_extensions_step.figma_for_vscode_install")
        })]
      }), jsxs("div", {
        className: a3,
        children: [jsx("img", {
          srcSet: "data:image/png;base64,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 2x",
          alt: ""
        }), jsx("div", {
          className: a8,
          children: renderI18nText("dev_handoff.configuration_wizard.install_extensions_step.figma_for_messaging")
        }), jsx("div", {
          className: a7,
          children: renderI18nText("dev_handoff.configuration_wizard.install_extensions_step.figma_for_messaging_description")
        }), jsx(iM, {})]
      })]
    })]
  });
}
function iM({}) {
  let e = useDispatch();
  let t = "install-messaging-dropdown";
  let n = useDropdownState();
  let l = useRef(null);
  let s = n?.type === t;
  let r = [{
    displayText: getI18nString("dev_handoff.configuration_wizard.install_extensions_step.figma_for_messaging_install.figma_for_slack"),
    callback: () => {
      e(setupHyperlinkHandler({
        rawInput: "https://figma.slack.com/apps/A01N2QYSA81-figma-and-figjam?tab=more_info"
      }));
    }
  }, {
    displayText: getI18nString("dev_handoff.configuration_wizard.install_extensions_step.figma_for_messaging_install.figma_for_teams"),
    callback: () => {
      e(setupHyperlinkHandler({
        rawInput: "https://appsource.microsoft.com/en-us/product/office/WA200004521?exp=ubp8"
      }));
    }
  }];
  return jsxs(Fragment, {
    children: [jsx("div", {
      ref: l,
      children: jsx(Button, {
        variant: "primary",
        onClick: () => {
          s ? e(hideDropdownAction()) : e(showDropdownThunk({
            type: t
          }));
        },
        children: jsxs("span", {
          className: "configuration_wizard--installButton--PPj7O",
          children: [renderI18nText("dev_handoff.configuration_wizard.install_extensions_step.figma_for_messaging_install"), jsx(SvgComponent, {
            svg: _$$A10,
            className: "configuration_wizard--chevronDown--P7ECL"
          })]
        })
      })
    }), s && l.current && jsx(_$$j, {
      items: r,
      onSelectItem: t => {
        t.callback && t.callback("", null, e);
      },
      dispatch: e,
      parentRect: l.current.getBoundingClientRect(),
      showPoint: !1,
      lean: "right"
    })]
  });
}
function iF() {
  let e = useDispatch();
  let t = getThemePreference();
  let n = [{
    theme: "system",
    title: getI18nString("fullscreen_actions.theme.system_theme"),
    ModeSvg: iH
  }, {
    theme: "light",
    title: getI18nString("fullscreen_actions.theme.light"),
    ModeSvg: iz
  }, {
    theme: "dark",
    title: getI18nString("fullscreen_actions.theme.dark"),
    ModeSvg: iV
  }];
  return jsxs("div", {
    className: a$,
    children: [jsx("h1", {
      className: a9,
      children: renderI18nText("dev_handoff.configuration_wizard.theme_step.title")
    }), jsx("h2", {
      className: ie,
      children: renderI18nText("dev_handoff.configuration_wizard.theme_step.description")
    }), jsx(_$$bL, {
      value: t,
      onChange: t => e(Qh({
        theme: t,
        userInitiated: !0
      })),
      className: a2,
      legend: jsx(Legend, {
        children: renderI18nText("dev_handoff.configuration_wizard.theme_step.title")
      }),
      children: n.map(({
        theme: e,
        title: t,
        ModeSvg: n
      }) => jsxs(_$$c$, {
        className: "configuration_wizard--modeOptionCard--0rFq6 configuration_wizard--preferenceOption--OkUN2",
        "aria-label": "",
        value: e,
        children: [jsx("div", {
          className: "configuration_wizard--modeImage--TZBtz",
          children: jsx(n, {})
        }), jsx("div", {
          className: a8,
          children: t
        })]
      }, e))
    })]
  });
}
function iz() {
  return jsx("svg", {
    width: "120",
    height: "80",
    viewBox: "0 0 120 80",
    fill: "none",
    children: jsxs("g", {
      id: "Design",
      children: [jsx("rect", {
        width: "120",
        height: "80",
        fill: "#F5F5F5"
      }), jsx("rect", {
        id: "Rectangle 47",
        width: "120",
        height: "80",
        fill: "#E5E5E5"
      }), jsxs("g", {
        id: "Group 14125",
        children: [jsxs("g", {
          id: "Group 14124",
          children: [jsx("rect", {
            id: "Rectangle 52",
            x: "48.3502",
            y: "24.3512",
            width: "24.9782",
            height: "39.8305",
            fill: "white",
            stroke: "#0D99FF",
            strokeWidth: "0.67509"
          }), jsx("ellipse", {
            id: "Ellipse 278",
            cx: "53.7509",
            cy: "30.7661",
            rx: "3.37544",
            ry: "3.37547",
            fill: "black",
            fillOpacity: "0.3"
          }), jsx("rect", {
            id: "Rectangle 53",
            x: "59.489",
            y: "29.414",
            width: "11.4765",
            height: "2.70037",
            rx: "0.506318",
            fill: "#D9D9D9"
          }), jsx("rect", {
            id: "Rectangle 59",
            x: "50.7129",
            y: "56.7539",
            width: "20.2526",
            height: "4.72565",
            rx: "0.506318",
            fill: "#0D99FF"
          }), jsx("rect", {
            id: "Rectangle 55",
            x: "50.7129",
            y: "37.8555",
            width: "18.2274",
            height: "2.70037",
            rx: "0.506318",
            fill: "#D9D9D9"
          }), jsx("rect", {
            id: "Rectangle 57",
            x: "50.7131",
            y: "42.5762",
            width: "14.8519",
            height: "2.70037",
            rx: "0.506318",
            fill: "#D9D9D9"
          }), jsx("rect", {
            id: "Rectangle 60",
            x: "50.7129",
            y: "47.3047",
            width: "17.2147",
            height: "2.70037",
            rx: "0.506318",
            fill: "#D9D9D9"
          })]
        }), jsx("rect", {
          id: "Rectangle 2154",
          x: "47.3375",
          y: "23.3375",
          width: "2.02526",
          height: "2.02528",
          fill: "white",
          stroke: "#0D99FF",
          strokeWidth: "0.67509"
        }), jsx("rect", {
          id: "Rectangle 2155",
          x: "72.3158",
          y: "23.3378",
          width: "2.02526",
          height: "2.02528",
          fill: "white",
          stroke: "#0D99FF",
          strokeWidth: "0.67509"
        }), jsx("rect", {
          id: "Rectangle 2156",
          x: "47.3375",
          y: "63.1696",
          width: "2.02526",
          height: "2.02528",
          fill: "white",
          stroke: "#0D99FF",
          strokeWidth: "0.67509"
        }), jsx("rect", {
          id: "Rectangle 2157",
          x: "72.3158",
          y: "63.1696",
          width: "2.02526",
          height: "2.02528",
          fill: "white",
          stroke: "#0D99FF",
          strokeWidth: "0.67509"
        })]
      }), jsx("rect", {
        id: "Rectangle 50",
        width: "26.0423",
        height: "80",
        fill: "white"
      }), jsx("rect", {
        id: "Rectangle 11539",
        x: "3",
        y: "11",
        width: "18",
        height: "2",
        rx: "1",
        fill: "#EEEEEE"
      }), jsx("rect", {
        id: "Rectangle 11548",
        x: "3",
        y: "26",
        width: "18",
        height: "2",
        rx: "1",
        fill: "#EEEEEE"
      }), jsx("rect", {
        id: "Rectangle 11547",
        x: "3",
        y: "21",
        width: "14",
        height: "2",
        rx: "1",
        fill: "#EEEEEE"
      }), jsx("rect", {
        id: "Rectangle 11549",
        x: "3",
        y: "31",
        width: "15",
        height: "2",
        rx: "1",
        fill: "#EEEEEE"
      }), jsx("rect", {
        id: "Rectangle 11550",
        x: "3",
        y: "36",
        width: "14",
        height: "2",
        rx: "1",
        fill: "#EEEEEE"
      }), jsx("rect", {
        id: "Rectangle 11546",
        x: "3",
        y: "16",
        width: "19",
        height: "2",
        rx: "1",
        fill: "#EEEEEE"
      }), jsx("rect", {
        id: "Rectangle 51",
        x: "92",
        width: "28",
        height: "80",
        fill: "white"
      }), jsx("rect", {
        id: "Rectangle 11534",
        x: "96",
        y: "12",
        width: "6",
        height: "2",
        rx: "1",
        fill: "#CE7012"
      }), jsx("rect", {
        id: "Rectangle 11553",
        x: "96",
        y: "17",
        width: "14",
        height: "2",
        rx: "1",
        fill: "#8638E5"
      }), jsx("rect", {
        id: "Rectangle 11554",
        x: "104",
        y: "22",
        width: "10",
        height: "2",
        rx: "1",
        fill: "#EA10AC"
      }), jsx("rect", {
        id: "Rectangle 11536",
        x: "96",
        y: "22",
        width: "6",
        height: "2",
        rx: "1",
        fill: "#8638E5"
      }), jsx("rect", {
        id: "Rectangle 11537",
        x: "96",
        y: "27",
        width: "21",
        height: "2",
        rx: "1",
        fill: "#007BE5"
      }), jsx("rect", {
        id: "Rectangle 11552",
        x: "103",
        y: "32",
        width: "13",
        height: "2",
        rx: "1",
        fill: "#009951"
      }), jsx("rect", {
        id: "Rectangle 11538",
        x: "96",
        y: "32",
        width: "5",
        height: "2",
        rx: "1",
        fill: "#CE7012"
      }), jsx("rect", {
        id: "Rectangle 49",
        width: "120",
        height: "8",
        fill: "#1E1E1E"
      }), jsx("rect", {
        id: "Rectangle 48",
        x: "8",
        width: "8",
        height: "8",
        fill: "#14AE5C"
      })]
    })
  });
}
function iV() {
  return jsx("svg", {
    width: "120",
    height: "80",
    viewBox: "0 0 120 80",
    fill: "none",
    children: jsxs("g", {
      id: "Design",
      children: [jsx("rect", {
        width: "120",
        height: "80",
        fill: "#383838"
      }), jsx("rect", {
        id: "Rectangle 47",
        width: "120",
        height: "80",
        fill: "black"
      }), jsxs("g", {
        id: "Group 14125",
        children: [jsxs("g", {
          id: "Group 14124",
          children: [jsx("rect", {
            id: "Rectangle 52",
            x: "48.35",
            y: "24.3512",
            width: "24.9782",
            height: "39.8305",
            fill: "#3E3E3E",
            stroke: "#0C8CE9",
            strokeWidth: "0.67509"
          }), jsx("ellipse", {
            id: "Ellipse 278",
            cx: "53.7507",
            cy: "30.7661",
            rx: "3.37544",
            ry: "3.37547",
            fill: "#B2B2B2"
          }), jsx("rect", {
            id: "Rectangle 53",
            x: "59.4888",
            y: "29.414",
            width: "11.4765",
            height: "2.70037",
            rx: "0.506318",
            fill: "#8B8B8B"
          }), jsx("rect", {
            id: "Rectangle 59",
            x: "50.7126",
            y: "56.7539",
            width: "20.2526",
            height: "4.72565",
            rx: "0.506318",
            fill: "#0C8CE9"
          }), jsx("rect", {
            id: "Rectangle 55",
            x: "50.7126",
            y: "37.8555",
            width: "18.2274",
            height: "2.70037",
            rx: "0.506318",
            fill: "#8B8B8B"
          }), jsx("rect", {
            id: "Rectangle 57",
            x: "50.7129",
            y: "42.5762",
            width: "14.8519",
            height: "2.70037",
            rx: "0.506318",
            fill: "#8B8B8B"
          }), jsx("rect", {
            id: "Rectangle 60",
            x: "50.7126",
            y: "47.3047",
            width: "17.2147",
            height: "2.70037",
            rx: "0.506318",
            fill: "#8B8B8B"
          })]
        }), jsx("rect", {
          id: "Rectangle 2154",
          x: "47.3375",
          y: "23.3375",
          width: "2.02526",
          height: "2.02528",
          fill: "white",
          stroke: "#0C8CE9",
          strokeWidth: "0.67509"
        }), jsx("rect", {
          id: "Rectangle 2155",
          x: "72.3158",
          y: "23.3378",
          width: "2.02526",
          height: "2.02528",
          fill: "white",
          stroke: "#0C8CE9",
          strokeWidth: "0.67509"
        }), jsx("rect", {
          id: "Rectangle 2156",
          x: "47.3375",
          y: "63.1696",
          width: "2.02526",
          height: "2.02528",
          fill: "white",
          stroke: "#0C8CE9",
          strokeWidth: "0.67509"
        }), jsx("rect", {
          id: "Rectangle 2157",
          x: "72.3158",
          y: "63.1696",
          width: "2.02526",
          height: "2.02528",
          fill: "white",
          stroke: "#0C8CE9",
          strokeWidth: "0.67509"
        })]
      }), jsx("rect", {
        id: "Rectangle 50",
        width: "26.0423",
        height: "80",
        fill: "#1E1E1E"
      }), jsx("rect", {
        id: "Rectangle 11539",
        x: "3",
        y: "11",
        width: "18",
        height: "2",
        rx: "1",
        fill: "#565656"
      }), jsx("rect", {
        id: "Rectangle 11548",
        x: "3",
        y: "26",
        width: "18",
        height: "2",
        rx: "1",
        fill: "#565656"
      }), jsx("rect", {
        id: "Rectangle 11547",
        x: "3",
        y: "21",
        width: "14",
        height: "2",
        rx: "1",
        fill: "#565656"
      }), jsx("rect", {
        id: "Rectangle 11549",
        x: "3",
        y: "31",
        width: "15",
        height: "2",
        rx: "1",
        fill: "#565656"
      }), jsx("rect", {
        id: "Rectangle 11550",
        x: "3",
        y: "36",
        width: "14",
        height: "2",
        rx: "1",
        fill: "#565656"
      }), jsx("rect", {
        id: "Rectangle 11546",
        x: "3",
        y: "16",
        width: "19",
        height: "2",
        rx: "1",
        fill: "#565656"
      }), jsx("rect", {
        id: "Rectangle 51",
        x: "92",
        width: "28",
        height: "80",
        fill: "#1E1E1E"
      }), jsx("rect", {
        id: "Rectangle 49",
        width: "120",
        height: "8",
        fill: "#1E1E1E"
      }), jsx("rect", {
        id: "Rectangle 48",
        x: "8",
        width: "8",
        height: "8",
        fill: "#198F51"
      }), jsx("rect", {
        id: "Rectangle 11534",
        x: "96",
        y: "12",
        width: "6",
        height: "2",
        rx: "1",
        fill: "#FCB34A"
      }), jsx("rect", {
        id: "Rectangle 11553",
        x: "96",
        y: "17",
        width: "14",
        height: "2",
        rx: "1",
        fill: "#D1A8FF"
      }), jsx("rect", {
        id: "Rectangle 11554",
        x: "104",
        y: "22",
        width: "10",
        height: "2",
        rx: "1",
        fill: "#FC9CE0"
      }), jsx("rect", {
        id: "Rectangle 11536",
        x: "96",
        y: "22",
        width: "6",
        height: "2",
        rx: "1",
        fill: "#D1A8FF"
      }), jsx("rect", {
        id: "Rectangle 11537",
        x: "96",
        y: "27",
        width: "21",
        height: "2",
        rx: "1",
        fill: "#7CC4F8"
      }), jsx("rect", {
        id: "Rectangle 11552",
        x: "103",
        y: "32",
        width: "13",
        height: "2",
        rx: "1",
        fill: "#79D297"
      }), jsx("rect", {
        id: "Rectangle 11538",
        x: "96",
        y: "32",
        width: "5",
        height: "2",
        rx: "1",
        fill: "#FCB34A"
      })]
    })
  });
}
function iH() {
  return jsxs("svg", {
    width: "120",
    height: "80",
    viewBox: "0 0 120 80",
    fill: "none",
    children: [jsx("rect", {
      width: "120",
      height: "80",
      fill: "black"
    }), jsx("rect", {
      width: "120",
      height: "80",
      fill: "black"
    }), jsx("rect", {
      x: "48.35",
      y: "24.3512",
      width: "24.9782",
      height: "39.8305",
      fill: "#3E3E3E",
      stroke: "#0C8CE9",
      strokeWidth: "0.67509"
    }), jsx("ellipse", {
      cx: "53.7507",
      cy: "30.7661",
      rx: "3.37544",
      ry: "3.37547",
      fill: "#B2B2B2"
    }), jsx("rect", {
      x: "59.4888",
      y: "29.414",
      width: "11.4765",
      height: "2.70037",
      rx: "0.506318",
      fill: "#8B8B8B"
    }), jsx("rect", {
      x: "50.7126",
      y: "56.7539",
      width: "20.2526",
      height: "4.72565",
      rx: "0.506318",
      fill: "#0C8CE9"
    }), jsx("rect", {
      x: "50.7126",
      y: "37.8555",
      width: "18.2274",
      height: "2.70037",
      rx: "0.506318",
      fill: "#8B8B8B"
    }), jsx("rect", {
      x: "50.7129",
      y: "42.5762",
      width: "14.8519",
      height: "2.70037",
      rx: "0.506318",
      fill: "#8B8B8B"
    }), jsx("rect", {
      x: "50.7126",
      y: "47.3047",
      width: "17.2147",
      height: "2.70037",
      rx: "0.506318",
      fill: "#8B8B8B"
    }), jsx("rect", {
      x: "47.3375",
      y: "23.3375",
      width: "2.02526",
      height: "2.02528",
      fill: "white",
      stroke: "#0C8CE9",
      strokeWidth: "0.67509"
    }), jsx("rect", {
      x: "72.3158",
      y: "23.3378",
      width: "2.02526",
      height: "2.02528",
      fill: "white",
      stroke: "#0C8CE9",
      strokeWidth: "0.67509"
    }), jsx("rect", {
      x: "47.3375",
      y: "63.1696",
      width: "2.02526",
      height: "2.02528",
      fill: "white",
      stroke: "#0C8CE9",
      strokeWidth: "0.67509"
    }), jsx("rect", {
      x: "72.3158",
      y: "63.1696",
      width: "2.02526",
      height: "2.02528",
      fill: "white",
      stroke: "#0C8CE9",
      strokeWidth: "0.67509"
    }), jsx("rect", {
      width: "26.0423",
      height: "80",
      fill: "#1E1E1E"
    }), jsx("rect", {
      x: "3",
      y: "11",
      width: "18",
      height: "2",
      rx: "1",
      fill: "#565656"
    }), jsx("rect", {
      x: "3",
      y: "26",
      width: "18",
      height: "2",
      rx: "1",
      fill: "#565656"
    }), jsx("rect", {
      x: "3",
      y: "21",
      width: "14",
      height: "2",
      rx: "1",
      fill: "#565656"
    }), jsx("rect", {
      x: "3",
      y: "31",
      width: "15",
      height: "2",
      rx: "1",
      fill: "#565656"
    }), jsx("rect", {
      x: "3",
      y: "36",
      width: "14",
      height: "2",
      rx: "1",
      fill: "#565656"
    }), jsx("rect", {
      x: "3",
      y: "16",
      width: "19",
      height: "2",
      rx: "1",
      fill: "#565656"
    }), jsx("rect", {
      x: "92",
      width: "28",
      height: "80",
      fill: "#1E1E1E"
    }), jsx("rect", {
      width: "120",
      height: "8",
      fill: "#1E1E1E"
    }), jsx("rect", {
      x: "8",
      width: "8",
      height: "8",
      fill: "#198F51"
    }), jsx("rect", {
      x: "96",
      y: "12",
      width: "6",
      height: "2",
      rx: "1",
      fill: "#FCB34A"
    }), jsx("rect", {
      x: "96",
      y: "42",
      width: "6",
      height: "2",
      rx: "1",
      fill: "#FCB34A"
    }), jsx("rect", {
      x: "96",
      y: "17",
      width: "14",
      height: "2",
      rx: "1",
      fill: "#D1A8FF"
    }), jsx("rect", {
      x: "104",
      y: "42",
      width: "13",
      height: "2",
      rx: "1",
      fill: "#009951"
    }), jsx("rect", {
      x: "104",
      y: "22",
      width: "10",
      height: "2",
      rx: "1",
      fill: "#FC9CE0"
    }), jsx("rect", {
      x: "96",
      y: "37",
      width: "16",
      height: "2",
      rx: "1",
      fill: "#FC9CE0"
    }), jsx("rect", {
      x: "96",
      y: "22",
      width: "6",
      height: "2",
      rx: "1",
      fill: "#D1A8FF"
    }), jsx("rect", {
      x: "96",
      y: "27",
      width: "21",
      height: "2",
      rx: "1",
      fill: "#7CC4F8"
    }), jsx("rect", {
      x: "103",
      y: "32",
      width: "13",
      height: "2",
      rx: "1",
      fill: "#79D297"
    }), jsx("rect", {
      x: "96",
      y: "32",
      width: "5",
      height: "2",
      rx: "1",
      fill: "#FCB34A"
    }), jsx("mask", {
      id: "mask0_3979_274036",
      style: {
        maskType: "alpha"
      },
      maskUnits: "userSpaceOnUse",
      x: "0",
      y: "8",
      width: "120",
      height: "72",
      children: jsx("path", {
        d: "M120 8V80H0L120 8Z",
        fill: "#C4C4C4"
      })
    }), jsxs("g", {
      mask: "url(#mask0_3979_274036)",
      children: [jsx("rect", {
        width: "120",
        height: "80",
        fill: "#F5F5F5"
      }), jsx("rect", {
        width: "120",
        height: "80",
        fill: "#E5E5E5"
      }), jsx("rect", {
        x: "48.3502",
        y: "24.3512",
        width: "24.9782",
        height: "39.8305",
        fill: "white",
        stroke: "#0D99FF",
        strokeWidth: "0.67509"
      }), jsx("ellipse", {
        cx: "53.7509",
        cy: "30.7661",
        rx: "3.37544",
        ry: "3.37547",
        fill: "black",
        fillOpacity: "0.3"
      }), jsx("rect", {
        x: "59.489",
        y: "29.414",
        width: "11.4765",
        height: "2.70037",
        rx: "0.506318",
        fill: "#D9D9D9"
      }), jsx("rect", {
        x: "50.7129",
        y: "56.7539",
        width: "20.2526",
        height: "4.72565",
        rx: "0.506318",
        fill: "#0D99FF"
      }), jsx("rect", {
        x: "50.7129",
        y: "37.8555",
        width: "18.2274",
        height: "2.70037",
        rx: "0.506318",
        fill: "#D9D9D9"
      }), jsx("rect", {
        x: "50.7131",
        y: "42.5762",
        width: "14.8519",
        height: "2.70037",
        rx: "0.506318",
        fill: "#D9D9D9"
      }), jsx("rect", {
        x: "50.7129",
        y: "47.3047",
        width: "17.2147",
        height: "2.70037",
        rx: "0.506318",
        fill: "#D9D9D9"
      }), jsx("rect", {
        x: "47.3375",
        y: "23.3375",
        width: "2.02526",
        height: "2.02528",
        fill: "white",
        stroke: "#0D99FF",
        strokeWidth: "0.67509"
      }), jsx("rect", {
        x: "72.3158",
        y: "23.3378",
        width: "2.02526",
        height: "2.02528",
        fill: "white",
        stroke: "#0D99FF",
        strokeWidth: "0.67509"
      }), jsx("rect", {
        x: "47.3375",
        y: "63.1696",
        width: "2.02526",
        height: "2.02528",
        fill: "white",
        stroke: "#0D99FF",
        strokeWidth: "0.67509"
      }), jsx("rect", {
        x: "72.3158",
        y: "63.1696",
        width: "2.02526",
        height: "2.02528",
        fill: "white",
        stroke: "#0D99FF",
        strokeWidth: "0.67509"
      }), jsx("rect", {
        width: "26.0423",
        height: "80",
        fill: "white"
      }), jsx("rect", {
        x: "3",
        y: "11",
        width: "18",
        height: "2",
        rx: "1",
        fill: "#EEEEEE"
      }), jsx("rect", {
        x: "3",
        y: "26",
        width: "18",
        height: "2",
        rx: "1",
        fill: "#EEEEEE"
      }), jsx("rect", {
        x: "3",
        y: "21",
        width: "14",
        height: "2",
        rx: "1",
        fill: "#EEEEEE"
      }), jsx("rect", {
        x: "3",
        y: "31",
        width: "15",
        height: "2",
        rx: "1",
        fill: "#EEEEEE"
      }), jsx("rect", {
        x: "3",
        y: "36",
        width: "14",
        height: "2",
        rx: "1",
        fill: "#EEEEEE"
      }), jsx("rect", {
        x: "3",
        y: "16",
        width: "19",
        height: "2",
        rx: "1",
        fill: "#EEEEEE"
      }), jsx("rect", {
        x: "92",
        width: "28",
        height: "80",
        fill: "white"
      }), jsx("rect", {
        x: "96",
        y: "12",
        width: "6",
        height: "2",
        rx: "1",
        fill: "#CE7012"
      }), jsx("rect", {
        x: "96",
        y: "17",
        width: "14",
        height: "2",
        rx: "1",
        fill: "#8638E5"
      }), jsx("rect", {
        x: "104",
        y: "22",
        width: "10",
        height: "2",
        rx: "1",
        fill: "#EA10AC"
      }), jsx("rect", {
        x: "96",
        y: "22",
        width: "6",
        height: "2",
        rx: "1",
        fill: "#8638E5"
      }), jsx("rect", {
        x: "96",
        y: "27",
        width: "21",
        height: "2",
        rx: "1",
        fill: "#007BE5"
      }), jsx("rect", {
        x: "103",
        y: "32",
        width: "13",
        height: "2",
        rx: "1",
        fill: "#009951"
      }), jsx("rect", {
        x: "96",
        y: "32",
        width: "5",
        height: "2",
        rx: "1",
        fill: "#CE7012"
      })]
    })]
  });
}
let iG = buildUploadUrl("9e00290dc31e72e920d6e541d625759566d6c91f");
function iU() {
  let e = _$$J3();
  let {
    getHasProvisionalAccess
  } = wH();
  let n = getHasProvisionalAccess(FProductAccessType.DEV_MODE);
  return e && n ? jsx("h2", {
    className: "configuration_wizard--gracePeriodWelcome--16eIy text--fontPos13--xW8hS text--_fontBase--QdLsd",
    children: renderI18nText("dev_handoff.configuration_wizard.welcome_step.description_one_click")
  }) : jsxs(Fragment, {
    children: [jsx("h1", {
      className: a9,
      children: renderI18nText("dev_handoff.configuration_wizard.welcome_step.title")
    }), jsx("h2", {
      className: ie,
      children: renderI18nText("dev_handoff.configuration_wizard.welcome_step.description")
    })]
  });
}
function iK() {
  return jsxs("div", {
    className: a$,
    children: [jsx(iU, {}), jsx("div", {
      className: "configuration_wizard--welcomeVideo--PNKpG",
      children: jsx(GV, {
        src: iG,
        width: 444,
        height: 278
      })
    }), jsx("div", {
      className: a1
    })]
  });
}
var iX = (e => (e[e.WELCOME = 0] = "WELCOME", e[e.CODE_LANGUAGE_N_UNIT = 1] = "CODE_LANGUAGE_N_UNIT", e[e.THEME = 2] = "THEME", e[e.INSPECT_PLUGINS = 3] = "INSPECT_PLUGINS", e[e.INSTALL_INTEGRATIONS = 4] = "INSTALL_INTEGRATIONS", e))(iX || {});
let iJ = {
  0: "welcome_step",
  1: "code_language_step",
  2: "theme_step",
  3: "inspect_plugins_step",
  4: "install_extensions_step"
};
let iQ = isGovCluster() ? [1, 2] : [1, 2, 3, 4];
function iq() {
  let e = useAtomWithSubscription(aR);
  let t = useDispatch();
  let {
    isShowing,
    uniqueId,
    show,
    complete
  } = _$$e3({
    overlay: tb3,
    priority: _$$N.HIGH_PRIORITY_MODAL
  }, [e]);
  let d = useModalManager({
    open: isShowing,
    preventUserClose: !0,
    onClose: noop
  });
  useSingleEffect(() => {
    show({
      canShow: e => !e
    });
  });
  _$$E3(uniqueId, "Reset Onboarding", () => {
    t(postUserFlag({
      [aL]: !1
    }));
    show();
  });
  return jsx(OnboardingSequence, {
    isShowing,
    testId: "dev_handoff_config_wizard",
    dataFullscreenIntercept: !1,
    children: jsx(TrackingProvider, {
      name: "Dev Mode Configuration Wizard",
      children: jsx(ModalRootComponent, {
        manager: d,
        width: 800,
        children: jsx(DialogContents, {
          children: jsx(iZ, {
            dismissModal: complete
          })
        })
      })
    })
  });
}
let iY = () => {
  let {
    pinnedPlugins
  } = setupUserPluginPreferences();
  return pinnedPlugins.length > 0;
};
function iZ({
  dismissModal: e
}) {
  let t = trackFileEventWithStore();
  let [n, l] = useState(0);
  let s = useDispatch();
  let r = iY();
  let d = useRef(null);
  let c = useCallback(() => {
    e();
    s(postUserFlag({
      [aL]: !0
    }));
    r && s(postUserFlag({
      [DEV_HAND]: !0
    }));
  }, [s, r, e]);
  let u = useCallback(() => {
    l(n + 1);
  }, [n]);
  let p = useCallback(() => {
    l(n - 1);
  }, [l, n]);
  let h = 0 === n;
  let f = n === iQ[iQ.length - 1];
  return jsxs("div", {
    className: ek()("configuration_wizard--wizardContainer--gss4b", Dm),
    tabIndex: -1,
    ref: d,
    children: [jsx("div", {
      className: "configuration_wizard--closeButton--pv-0K",
      children: jsx(IconButton, {
        onClick: function () {
          c();
          t("dev_handoff.config_wizard.closed", {
            step: n,
            stepName: iJ[n]
          });
        },
        "aria-label": getI18nString("general.close"),
        children: jsx(_$$A5, {})
      })
    }), jsxs("div", {
      className: "configuration_wizard--sidebar--g-2b8",
      children: [jsx("h1", {
        className: "configuration_wizard--sidebarHeading--xnYnE text--fontPos32WhyteInktrap--BG9sC text--_fontBaseWhyteInktrap--YiiGP",
        children: renderI18nText("dev_handoff.configuration_wizard.title")
      }), jsx("h2", {
        className: "configuration_wizard--sidebarSubheading--ta8gQ text--fontPos12Whyte---tkNx text--_fontBaseWhyte--efAjI",
        children: renderI18nText("dev_handoff.configuration_wizard.subtitle")
      }), jsx("div", {
        className: a1
      }), jsx(i$, {
        step: n,
        setStep: l,
        disabled: 0 === n
      })]
    }), jsxs("div", {
      className: "configuration_wizard--content--hktpZ",
      children: [0 === n && jsx(iK, {}), 1 === n && jsx(im, {}), 2 === n && jsx(iF, {}), 3 === n && jsx(iC, {}), 4 === n && jsx(iO, {}), jsx("div", {
        className: "configuration_wizard--footer--YjGGh",
        children: h ? jsx(Fragment, {
          children: jsxs("div", {
            className: a0,
            children: [jsx("div", {
              className: a1
            }), jsx(Button, {
              onClick: u,
              variant: "primary",
              children: renderI18nText(`dev_handoff.configuration_wizard.${iJ[n]}.next_text`)
            })]
          })
        }) : f ? jsxs("div", {
          className: a0,
          children: [jsx("div", {
            className: a1
          }), jsx(Button, {
            variant: "secondary",
            onClick: p,
            children: renderI18nText("general.back")
          }), jsx(Button, {
            variant: "primary",
            onClick: function () {
              c();
              t("dev_handoff.config_wizard.done", {
                step: n,
                stepName: iJ[n]
              });
            },
            children: renderI18nText("general.done")
          })]
        }) : jsxs("div", {
          className: a0,
          children: [jsx("div", {
            className: a1
          }), jsx(Button, {
            variant: "secondary",
            onClick: p,
            children: renderI18nText("general.back")
          }), jsx(Button, {
            variant: "primary",
            onClick: u,
            children: renderI18nText(`dev_handoff.configuration_wizard.${iJ[n]}.next_text`)
          })]
        })
      })]
    })]
  });
}
function i$({
  step: e,
  setStep: t,
  disabled: n
}) {
  return jsx(_$$bL, {
    value: String(e),
    onChange: e => {
      n || t(Number.parseInt(e, 10));
    },
    className: ek()("configuration_wizard--stepPicker--Ffab-", n && "configuration_wizard--disabledStepPicker--Ib2IX"),
    legend: jsx(Legend, {
      children: renderI18nText("dev_handoff.configuration_wizard.step_picker_legend")
    }),
    htmlAttributes: {
      disabled: n
    },
    children: iQ.map(e => jsxs(_$$c$, {
      className: ek()("configuration_wizard--stepPickerOption--5Iqtt", n && "configuration_wizard--disabledStepPickerOption--9tTeN"),
      "aria-label": "",
      value: String(e),
      children: [jsx("div", {
        className: "configuration_wizard--stepPickerOptionNumber--3GVYZ text--fontPos18Whyte--M40th text--_fontBaseWhyte--efAjI",
        children: `0${e}`
      }), jsx("div", {
        className: "configuration_wizard--stepPickerOptionText--KmSjp text--fontPos12Whyte---tkNx text--_fontBaseWhyte--efAjI",
        children: renderI18nText(`dev_handoff.configuration_wizard.${iJ[e]}.picker_title`)
      })]
    }, e))
  });
}
let i1 = memo(function (e) {
  return jsx("svg", {
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M8.557 4.268a.5.5 0 0 1 .924.37l-2 7a.5.5 0 0 1-.96-.276l1.998-7zM4.724 5.582a.5.5 0 0 1 .694.693l-.065.078L3.707 8l1.646 1.646a.5.5 0 0 1-.707.707l-2-2a.5.5 0 0 1-.064-.629l.064-.078 2-2zm5.922.064a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 .063.631l-.063.076-2 2-.078.064a.501.501 0 0 1-.693-.694l.064-.078L12.292 8l-1.646-1.647a.5.5 0 0 1 0-.707"
    })
  });
});
let i9 = {
  top: "ns-resize",
  bottom: "ns-resize",
  left: "ew-resize",
  right: "ew-resize"
};
function oe(e) {
  let {
    onSizeChanged,
    onStateChanged,
    edge
  } = e;
  let l = useRef({
    isResizing: !1,
    lastX: 0,
    lastY: 0
  });
  let s = useCallback(e => {
    e.preventDefault();
    onStateChanged?.(!0);
    l.current.isResizing = !0;
    l.current.lastX = e.clientX;
    l.current.lastY = e.clientY;
    document.body.style.pointerEvents = "none";
    document.documentElement.style.cursor = i9[edge];
  }, [onStateChanged, edge]);
  let r = useCallback(e => {
    l.current.isResizing && (onSizeChanged({
      x: e.clientX - l.current.lastX,
      y: e.clientY - l.current.lastY
    }), l.current.lastX = e.clientX, l.current.lastY = e.clientY);
  }, [onSizeChanged]);
  let d = useCallback(e => {
    l.current.isResizing && (onStateChanged?.(!1), l.current.isResizing = !1, document.body.style.pointerEvents = "auto", document.documentElement.style.cursor = "auto");
  }, [onStateChanged]);
  useEffect(() => (document.addEventListener("mousemove", r), document.addEventListener("mouseup", d), () => {
    document.removeEventListener("mousemove", r);
    document.removeEventListener("mouseup", d);
  }), [r, d]);
  return jsxs("div", {
    className: ek()("resizable--panelContainer--35Ay7", Dm),
    style: {
      width: e.size.width,
      minWidth: e.size.width,
      height: e.size.height,
      minHeight: e.size.height
    },
    ref: e.forwardedRef,
    children: [jsx(_$$V, {
      className: "resizable--content--gsGWd",
      children: e.children
    }), jsx("div", {
      className: ek()({
        "resizable--edgeDisabled--K1j0X": e.disabled,
        "resizable--edgeTop--vG5Ad resizable--edge--H5-yq": "top" === e.edge,
        "resizable--edgeBottom--bN-R0 resizable--edge--H5-yq": "bottom" === e.edge,
        "resizable--edgeLeft--nRRyA resizable--edge--H5-yq": "left" === e.edge,
        "resizable--edgeRight--ZGbad resizable--edge--H5-yq": "right" === e.edge
      }),
      onMouseDown: s,
      onDoubleClick: e.onReset
    })]
  });
}
let ok = atom({});
function oA() {
  return !!useSelector(e => e.mirror.appModel.activeCanvasEditModeType === LayoutTabType.DEV_HANDOFF_HISTORY && e.versionHistory.activeId && "current_version" !== e.versionHistory.activeId);
}
function oR({
  description: e,
  emptyStateText: t,
  shouldUseUiFont: n = !1,
  shouldUseBottomPadding: o = !1
}) {
  let l = useRef(null);
  let s = useRef(void 0);
  let [r, d] = useState(!0);
  if (useLayoutEffect(() => {
    let t = s.current;
    s.current = e;
    l.current && t !== e && d(l.current.scrollHeight > 96);
  }, [e]), !e && !t) return null;
  let c = !!e && r;
  return jsxs("div", {
    className: ek()("asset_documentation_panel--documentationSection--Uiw1f", {
      "asset_documentation_panel--uiFont--8lX52": n,
      "asset_documentation_panel--bottomPadding--CisYZ": o
    }),
    children: [e ? jsxs("div", {
      className: "asset_documentation_panel--documentationRt--dqAKD",
      children: [jsx(_$$C, {
        value: e,
        valueFormat: detectEditorStateFormat(e),
        namespace: "asset-documentation-panel-lexical-editor-readonly",
        lexicalContentClassName: r ? D6 : kF,
        innerRef: l
      }), r && jsx("div", {
        className: "asset_documentation_panel--lexicalCollapsedOverlay--V-AKj"
      })]
    }) : t ? jsx("div", {
      className: "asset_documentation_panel--documentationDescriptionDefault--vxlbl asset_documentation_panel--documentationDescription--la2iI text--fontPos11--2LvXf text--_fontBase--QdLsd",
      dir: "auto",
      ref: l,
      children: t
    }) : null, c && jsx("div", {
      className: "asset_documentation_panel--showMoreButtonContainer--ZkHWJ",
      children: jsx(_$$d4, {
        label: getI18nString("dev_handoff.docs.show_full"),
        onClick: () => d(!1)
      })
    })]
  });
}
let oZ = class {
  async generateLinkPreview({
    plugin: e,
    link: t
  }) {
    try {
      let n = await PluginManager.instance.enqueue(this.createEnqueueArgs({
        command: "linkpreview",
        plugin: e,
        onStart: () => _$$se({
          name: t.linkName,
          url: t.linkUrl,
          isInherited: t.isInherited,
          nodeId: t.nodeId
        })
      }));
      if (n?.type === "PLAIN_TEXT") _$$n6({
        link: t,
        linkPreviewJson: n
      });else if (n?.type === "AUTH_REQUIRED") {
        let n = atomStoreManager.get(ok);
        let a = n[e.plugin_id]?.links ?? [];
        atomStoreManager.set(ok, n => ({
          ...n,
          [e.plugin_id]: {
            plugin: e,
            links: [...a, t]
          }
        }));
      }
      return n ?? null;
    } catch (e) {
      console.error(e);
    }
    return null;
  }
  async runAuth({
    plugin: e,
    links: t
  }) {
    setSelectedDevModePropertiesPanelTab(IAssertResource.PLUGIN);
    try {
      return (await PluginManager.instance.enqueue(this.createEnqueueArgs({
        command: "auth",
        plugin: e,
        onStart: () => Ut(t)
      }))) ?? null;
    } catch (e) {
      console.error(e);
    }
    return null;
  }
  createEnqueueArgs({
    command: e,
    plugin: t,
    onStart: n
  }) {
    return {
      runPluginArgs: {
        plugin: t,
        command: "linkpreview",
        queryMode: !1,
        runMode: "linkpreview" === e ? "linkpreview" : "auth",
        triggeredFrom: "linkpreview" === e ? "related-link-preview" : "related-link-auth",
        openFileKey: debugState.getState().openFile?.key || "",
        isWidget: !1
      },
      onStart: n,
      mode: "run-and-terminate"
    };
  }
};
oZ.instance = new oZ();
let o$ = getOpenExternalPluginIds();
function o0(e, t) {
  if (hasLocalFileId(t) && !getFeatureFlags().plugins_related_links_local || !o$.has(t.plugin_id)) return !1;
  let n = t.manifest.relatedLinkDomains || t.manifest.devResourceDomains;
  if (!n) return !1;
  for (let t of n) {
    let n = validateURLPattern(t);
    if (!n) continue;
    let a = e.split("?")[0];
    if (n.exec(a)) return !0;
  }
  if (isAllowedUploadPluginId(t.plugin_id)) {
    if (o1(e) && e.match(/selectedIssue=[A-Z]+-[0-9]+/)) return !0;
    o1(e) && e.match(/[A-Z]+-[0-9]+/) && trackEventAnalytics("Jira Issue Url Not Matched", {
      url: e
    });
  }
  return !1;
}
function o1(e) {
  return !!e.match(/https?:\/\/[a-zA-Z0-9-]+\.(atlassian\.net|jira\.com)/);
}
var o2 = (e => (e.OPEN = "open", e.PREVIEW = "preview", e))(o2 || {});
function o5(e) {
  let t = function (e) {
    let t = getLocalPlugins();
    let n = usePublishedPlugins();
    let a = useSelector(e => e.mirror.appModel.useLocalRelatedLinkPlugin);
    let l = useMemo(() => 0 === o$.size ? null : Object.values(t).find(t => !!o0(e, t)), [e, t]);
    let s = useMemo(() => 0 === o$.size ? null : Object.values(n).map(e => getPluginVersion(e)).find(t => !!o0(e, t)), [e, n]);
    let r = useMemo(() => Array.from(o$), []);
    let d = usePluginManifestsByIds(r, {
      enabled: !s
    });
    let c = useMemo(() => d.find(t => !!o0(e, t)) ?? null, [e, d]);
    return a && l ? l : s || c || null;
  }(e);
  let n = useCanRunExtension();
  return t && n(t) ? t : null;
}
function o3(e) {
  let t = o5(e);
  let n = useAtomWithSubscription(ok);
  if (!t || !t.manifest.capabilities?.includes("linkpreview")) return null;
  if (n[t.plugin_id]?.links.some(t => t.linkUrl === e)) return;
  let a = async ({
    link: e
  }) => {
    await oZ.instance.generateLinkPreview({
      plugin: t,
      link: e
    });
  };
  return {
    plugin: t,
    genPreview: a
  };
}
function o7(e, t, n) {
  return !n || e ? t : `${t} (${n})`;
}
function o8({
  isEditable: e,
  link: t,
  onOpenDeleteModal: n,
  onOpenEditModal: s,
  appendLabel: r,
  hintInMenu: d
}) {
  let c = useDispatch();
  let u = !_$$G(t.linkUrl);
  let p = useSceneGraphSelector();
  let h = Nf() ?? "";
  let f = p.get(h);
  let g = t.isInherited || t.isVariant;
  let x = trackFileEventWithStore();
  let _ = _$$dI({
    navigateToStateGroupIfVariant: !t.isVariant
  });
  let v = useCallback(() => {
    c(copyTextThunk({
      stringToCopy: t.linkUrl
    }));
    x("Dev Handoff Related Links Copy Hyperlink", {
      nodeId: h,
      nodeType: f?.type,
      source: "web"
    });
  }, [c, h, t.linkUrl, f?.type, x]);
  let y = u ? t.linkUrl : new URL(t.linkUrl).host;
  y.startsWith("www.") && (y = y.slice(4));
  let {
    Dropdown,
    toggleDropdown,
    dropdownTargetRef,
    isDropdownShown
  } = _$$B3(t.id);
  let k = function (e) {
    let t = o5(e);
    let n = useCurrentFileKey();
    let a = v4();
    if (!t || !n || !hasInspectOrPanelCapability(t.manifest.capabilities)) return null;
    let i = async ({
      link: e
    }) => {
      let i = getCurrentGRAtom();
      i?.plugin_id !== t.plugin_id && (await _$$d5.instance.maybeTerminatePlugin(a), await waitForAnimationFrame());
      let o = createDeferredPromise();
      let s = t.manifest.editorType?.includes(ManifestEditorType.DEV) ? "open-dev-resource" : "open-related-link";
      let r = {
        mode: "run-forever",
        runPluginArgs: {
          plugin: t,
          command: s,
          queryMode: !1,
          openFileKey: n,
          isWidget: !1,
          runMode: "default",
          triggeredFrom: "related-link-click"
        }
      };
      let d = {
        url: e.linkUrl,
        name: e.linkName,
        isInherited: e.isInherited,
        nodeId: e.nodeId
      };
      let c = PluginManager.instance.isCurrentlyRunning(r);
      return (setSelectedDevModePropertiesPanelTab(IAssertResource.PLUGIN), c && hasDevResourceOpenCallback()) ? PluginManager.instance.enqueue({
        ...r,
        onStart: async () => await runDevResourceOpenCallback({
          devResource: d
        })
      }) : PluginManager.instance.enqueue({
        ...r,
        reuseExistingRunState: !1,
        onStart: async () => (runTimeoutDevResourceOpenCallback(5e3, {
          devResource: d
        }), (await o).triggerRunEvent({
          command: s,
          link: d
        }))
      });
    };
    return {
      plugin: t,
      callback: i
    };
  }(t.linkUrl);
  let A = g ? getI18nString("dev_handoff.developer_related_links.main_component_tooltip") : getI18nString("dev_handoff.developer_related_links.additional_options");
  let C = jsx("div", {
    ref: dropdownTargetRef,
    children: jsx(IconButton, {
      actionOnPointerDown: !0,
      onClick: e => {
        toggleDropdown();
        e.stopPropagation();
      },
      "aria-label": A,
      htmlAttributes: {
        "data-tooltip": A,
        "data-tooltip-type": KindEnum.TEXT
      },
      children: g ? jsx(_$$K3, {}) : jsx(_$$J5, {})
    })
  });
  let T = [{
    displayText: getI18nString("dev_handoff.developer_related_links.copy_link"),
    callback: () => v()
  }];
  k && T.unshift({
    displayText: getI18nString("dev_handoff.developer_related_links.open_in_new_tab"),
    callback: () => {
      G();
    }
  });
  g && _ && T.unshift({
    displayText: getI18nString("dev_handoff.developer_related_links.go_to_main_component"),
    callback: () => {
      _();
    }
  });
  t.isNested && T.push({
    displayText: getI18nString("dev_handoff.developer_related_links.select_layer"),
    callback: () => {
      HandoffBindingsCpp.selectAndFocusOnNode(t.nodeId, !0);
    }
  });
  T.push({
    displayText: getI18nString("dev_handoff.developer_related_links.edit_link"),
    callback: () => s(t),
    disabled: !e
  }, {
    displayText: getI18nString("dev_handoff.developer_related_links.delete_link"),
    callback: () => n(t.id, t.linkUrl),
    disabled: !e
  });
  d && (T.push({
    separator: !0,
    displayText: ""
  }), T.push({
    render: () => jsxs("div", {
      className: "developer_related_link_row--hintInMenu--a8pp2 text--fontNeg12--2PWcg text--_fontBase--QdLsd text--_negText--j9g-L",
      children: [jsx(_$$B2, {}), d]
    }),
    optionHeight: 40,
    displayText: d
  }));
  let [S, P] = useState(!1);
  let [L, R] = useState(!1);
  let D = t.linkPreview;
  let O = D && "PLAIN_TEXT" === D.type && D.text;
  let M = O && !t.isUserOverride && k;
  let F = k && isAllowedUpload(k.plugin.plugin_id, fullscreenAlias.getIsExtension());
  let z = fullscreenAlias.getIsExtension() || F;
  let V = useCallback(() => {
    x("Dev Handoff Related Links Open Hyperlink", {
      nodeId: h,
      nodeType: f?.type,
      source: "web"
    });
  }, [h, f?.type, x]);
  let W = useCallback(() => {
    let e = {
      action: o2.OPEN,
      link: t
    };
    if (F) {
      t.isNested && HandoffBindingsCpp?.selectAndFocusOnNode(t.nodeId, !0);
      k.callback(e);
      x("Dev Handoff Related Links Run Plugin From Hyperlink", {
        nodeId: h,
        nodeType: f?.type,
        source: "web",
        pluginId: k.plugin.plugin_id
      });
      c(postUserFlag({
        [DEV_HAND]: !0
      }));
      return;
    }
    fullscreenAlias.getIsExtension() && openRelatedLink(t.linkUrl);
  }, [h, f?.type, x, t, F, k, c]);
  let G = () => {
    handleUrlAction(t.linkUrl) || c(setupHyperlinkHandler({
      rawInput: t.linkUrl
    }));
    x("Dev Handoff Related Links Open Hyperlink", {
      nodeId: h,
      nodeType: f?.type,
      source: "web"
    });
  };
  let U = jsx(o6, {
    name: o7(S, t.linkName, r),
    url: k ? k.plugin.name : y,
    isHovering: S,
    showExternalIcon: !k
  });
  let K = M && k ? jsx(o6, {
    name: o7(S, O, r),
    url: k.plugin.name,
    isHovering: S
  }) : null;
  let X = jsxs(Fragment, {
    children: [jsx("div", {
      className: "developer_related_link_row--favicon--ZrNbB",
      children: jsx(_$$v, {
        url: t.linkUrl
      })
    }), K ?? U]
  });
  let J = generateRecordingKey("developerRelatedLinkRow", t.id);
  return jsxs("div", {
    className: "developer_related_link_row--link--fvcCC ellipsis--ellipsis--Tjyfa",
    "data-testid": "developer-related-link-row",
    onMouseEnter: () => P(!0),
    onMouseLeave: () => P(!1),
    children: [z ? jsx(ButtonPrimitive, {
      className: "developer_related_link_row--linkInfo--214Y7 developer_related_link_row--linkContentsLayout--mVoUm",
      onClick: W,
      recordingKey: generateRecordingKey(J, "button"),
      "aria-label": t.linkName,
      children: X
    }) : jsx("div", {
      className: "developer_related_link_row--linkWrapper--uGIaN",
      children: jsx(Link.Button, {
        href: t.linkUrl,
        variant: "ghost",
        width: "fill",
        "aria-label": t.linkName,
        onClick: V,
        recordingKey: generateRecordingKey(J, "button"),
        newTab: !0,
        children: jsx("div", {
          className: "developer_related_link_row--linkContentsLayout--mVoUm",
          children: X
        })
      })
    }), jsxs("div", {
      className: ek()("developer_related_link_row--additionalButtons--tKT0M", S || L || g || isDropdownShown ? cssBuilderInstance.opacity1.$ : cssBuilderInstance.opacity0.$),
      children: [C, isDropdownShown && jsx("div", {
        onMouseEnter: () => R(!1),
        children: jsx(Dropdown, {
          items: T,
          showPoint: !1
        })
      })]
    })]
  });
}
function o6({
  name: e,
  url: t,
  isHovering: n,
  showExternalIcon: i
}) {
  return jsxs(AutoLayout, {
    direction: "horizontal",
    spacing: 4,
    padding: {
      right: 32
    },
    children: [jsx("p", {
      className: "developer_related_link_row--linkName--p0e0K ellipsis--ellipsis--Tjyfa",
      style: n ? styleBuilderInstance.add({
        maxWidth: "50%"
      }).$ : void 0,
      children: e
    }), n && jsxs(Fragment, {
      children: [jsx("p", {
        className: "developer_related_link_row--linkDivider--20WA5",
        children: "\xb7"
      }), jsx("p", {
        className: "developer_related_link_row--linkURL--eaX2b ellipsis--ellipsis--Tjyfa blue_link--blueLink--9rlnd",
        children: t
      }), i && jsx("div", {
        className: "developer_related_link_row--externalIcon--0hwtg",
        children: jsx(_$$S2, {})
      })]
    })]
  });
}
let ll = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M10.908 15.5h-.158a.25.25 0 0 0-.25.25v1c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-1a.25.25 0 0 0-.25-.25zm3.325-.522c.17-.194.29-.426.35-.668.115-.468.329-.94.593-1.517l.015-.032c.23-.502.5-1.089.668-1.707A4.004 4.004 0 0 0 12 6a4 4 0 0 0-3.86 5.054c.17.618.439 1.205.669 1.707l.015.033c.264.576.477 1.048.593 1.516.06.242.18.474.35.668-.167.213-.267.48-.267.772v1a1.75 1.75 0 0 0 1.5 1.732v.018a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.518 1.75 1.75 0 0 0 1.5-1.732v-1c0-.291-.1-.56-.267-.772m-1.14-.478c.25 0 .46-.186.52-.43.141-.575.398-1.134.654-1.694.24-.523.48-1.047.628-1.585q.104-.379.105-.791a3 3 0 1 0-5.895.791c.147.538.387 1.062.628 1.585.256.56.513 1.119.655 1.694.06.244.269.43.52.43zM11 10a1 1 0 0 1 1-1 .5.5 0 0 0 0-1 2 2 0 0 0-2 2 .5.5 0 0 0 1 0",
      clipRule: "evenodd"
    })
  });
});
function lN() {
  let e = _$$lA();
  return jsx(lk, {
    backingSymbol: e
  });
}
function lk({
  backingSymbol: e
}) {
  let t = useDispatch();
  let n = useOpenFileLibraryKey();
  let s = useLibraryFileLink({
    libraryKey: e?.sourceLibraryKey,
    nodeId: e?.publishID ?? void 0,
    mainComponent: !0
  });
  let r = useLibraries(e?.sourceLibraryKey ? [e?.sourceLibraryKey] : []).data[0];
  let d = r?.library_key ?? null;
  let c = !!d && d !== n;
  let u = useMemo(() => !!e && SceneGraphHelpers.nodeIsSoftDeleted(e.guid), [e]);
  let p = useCallback(() => {
    e && (c ? !!s.data?.link && s.data?.type !== "community" && t(openUrlInContext({
      url: s.data.link
    })) : (t(hideModalHandler()), Fullscreen.goToSymbolOrStateGroupById(e.guid, !1)));
  }, [e, t, c, s.data]);
  return !e || u || c && (!s.data?.link || s.data?.type === "community") ? null : jsx(IconButton, {
    onClick: p,
    "aria-label": e.isState ? getI18nString("design_systems.playground.open_variant_in_library") : getI18nString("design_systems.playground.open_component_in_library"),
    htmlAttributes: {
      "data-tooltip": e.isState ? getI18nString("design_systems.playground.open_variant_in_library") : getI18nString("design_systems.playground.open_component_in_library"),
      "data-tooltip-type": KindEnum.TEXT
    },
    children: jsx(_$$E6, {})
  });
}
let lC = "playground_modal--container--oiCFH";
let lT = "playground_modal--thumbnailContainer--ZaF9V";
let lS = "playground_modal--thumbnail--JPv2M";
let lP = "playground_modal--propsContainer--CAA9y";
let lR = memo(({
  guid: e,
  ...t
}) => jsx(_$$si, {
  children: jsx(lD, {
    guid: e,
    ...t
  })
}));
let lD = memo(({
  guid: e,
  ...t
}) => {
  let n;
  useEffect(() => {
    e && atomStoreManager.set(figmaItemsAtom, [e]);
  }, [e]);
  let s = useDispatch();
  let d = useSelector(selectSingleSelectedNode);
  let u = wS();
  let f = "loaded" === u.status && "temp-scene" === u.result.dataLocation ? u.result : void 0;
  let g = _$$oD();
  let x = useCallback(() => {
    s(hideInstanceSwapPicker());
  }, [s]);
  let m = useModalManager({
    ...t,
    onClose: () => {
      x();
      trackEventAnalytics("Playground closed");
      t.onClose();
    }
  });
  let _ = useMemo(() => new ReduxSceneGraph(f ? FileSourceType.DETACHED_COMPONENTS : FileSourceType.PLAYGROUND), [f]);
  let v = useSceneGraphSelector();
  let y = useMemo(() => {
    if (!g) return "";
    if ("loaded" === u.status) return u.result.isVariant ? u.result.dataStateGroupId ?? u.result.dataComponentId : u.result.dataComponentId;
    let e = g.nodeData?.playgroundGUID;
    return e ? (findCommonStateGroupId([e], _) || findCommonSymbolId([e], _)) ?? "" : "";
  }, [g, _, u]);
  let b = useMemo(() => _.get(y)?.name ?? "", [y, _]);
  let {
    theme,
    invertTheme,
    callbackCount
  } = function (e) {
    let t = IO(e, !0);
    let n = useRef(t());
    let [a, o] = useState(n.current);
    let [l, s] = useState(0);
    let [d, c] = useAtomValueAndSetter(_$$d6);
    let [u, p] = useState(!0);
    let h = useCallback(() => {
      let e = t();
      n.current = e;
      return e;
    }, [t]);
    useLayoutEffect(() => {
      d && u && (o(e => {
        let t = n.current;
        let a = h();
        return "light" === t && "dark" === a || "dark" === t && "light" === a ? "light" === e ? "dark" : "light" : e;
      }), c(!1));
    }, [u, h, c, o, d]);
    return {
      theme: a ?? n.current,
      invertTheme: () => {
        p(!1);
        o(e => "light" === e ? "dark" : "light");
        s(e => e + 1);
      },
      callbackCount: l
    };
  }(e ?? y);
  let A = useSelector(e => e.userFlags.dismissed_playground_banner);
  let I = useCallback(() => {
    s(postUserFlag({
      dismissed_playground_banner: !0
    }));
  }, [s]);
  let E = useCallback(() => {
    g?.refetchAndResetScene();
  }, [g]);
  let C = useCallback(e => {
    let t = findComponentGuidOrPublishId(e, _, v);
    let n = atomStoreManager.get(figmaItemsAtom);
    atomStoreManager.set(figmaItemsAtom, [...n, t]);
    Fullscreen.setPlaygroundSceneFromGuid(t ?? "");
  }, [v, _]);
  if (!g || !d) return jsx(lO, {
    manager: m,
    theme
  });
  let {
    thumbnailData,
    nodeData
  } = g;
  if (!nodeData) return jsx(lO, {
    manager: m,
    theme
  });
  let {
    playgroundGUID,
    componentProps,
    modeData
  } = nodeData;
  let M = _.get(playgroundGUID);
  if (!thumbnailData) return jsx(lO, {
    manager: m,
    theme
  });
  let B = atomStoreManager.get(figmaItemsAtom);
  B.length > 1 && (n = jsx(IconButton, {
    onClick: () => {
      let e = B[B.length - 2];
      Fullscreen.setPlaygroundSceneFromGuid(e);
      let t = B.slice(0, -1);
      atomStoreManager.set(figmaItemsAtom, t);
    },
    "aria-label": getI18nString("dev_handoff.playground.select_parent_instance"),
    htmlAttributes: {
      "data-tooltip": getI18nString("dev_handoff.playground.select_parent_instance"),
      "data-tooltip-type": KindEnum.TEXT
    },
    children: jsx(_$$E5, {})
  }));
  return jsx(TrackingProvider, {
    name: "Dev Mode Component Playground",
    children: jsx(ModalRootComponent, {
      manager: m,
      width: "fit-content",
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: renderI18nText("design_systems.playground.component_playground")
          })
        }), jsx(DialogBody, {
          children: jsxs("div", {
            className: lC,
            children: [jsxs("div", {
              className: lT,
              style: CU(theme),
              children: [jsx("img", {
                src: thumbnailData.src,
                className: lS,
                width: thumbnailData.width,
                height: thumbnailData.height,
                alt: getI18nString("design_systems.playground.thumbnail_alt"),
                "data-testid": "playground-thumbnail"
              }), jsx(setupThemeContext, {
                mode: theme,
                children: jsx("div", {
                  className: "playground_modal--themeButton---BLzd",
                  children: jsx(WithTrackedIconButton, {
                    "aria-label": getI18nString("design_systems.playground.change_background"),
                    onClick: invertTheme,
                    htmlAttributes: {
                      "data-tooltip": getI18nString("design_systems.playground.change_background"),
                      "data-tooltip-type": KindEnum.TEXT
                    },
                    trackingProperties: {
                      type: "Background toggle",
                      color: theme,
                      index: callbackCount
                    },
                    children: "light" === theme ? jsx(_$$c4, {}) : jsx(ll, {})
                  })
                })
              })]
            }), jsxs("div", {
              className: lP,
              children: [jsxs("div", {
                className: "playground_modal--propsContainerHeader--oGDtk",
                children: [jsxs("div", {
                  className: "playground_modal--propsContainerName--ZCWzH",
                  children: [n, jsx("div", {
                    className: "playground_modal--productComponentName--NaHb9 ellipsis--ellipsis--Tjyfa",
                    children: b
                  })]
                }), jsxs("div", {
                  className: "playground_modal--propsContainerHeaderButtons--MPFZ-",
                  children: ["INSTANCE" === d.type && jsx(lN, {}), jsx(IconButton, {
                    onClick: E,
                    "aria-label": getI18nString("design_systems.playground.reset_properties"),
                    disabled: !g.hasChangesToReset,
                    recordingKey: "resetPlaygroundProps",
                    htmlAttributes: {
                      "data-tooltip": getI18nString("design_systems.playground.reset_properties"),
                      "data-tooltip-type": KindEnum.TEXT
                    },
                    children: jsx(_$$m2, {})
                  })]
                })]
              }), !A && jsx("div", {
                className: "playground_modal--bannerContainer--rQy3f",
                children: jsx(_$$z2, {
                  orientation: "vertical",
                  iconSrc: _$$A13,
                  variant: "dev",
                  title: getI18nString("design_systems.playground.banner_header"),
                  onClose: I,
                  children: renderI18nText("design_systems.playground.banner_content")
                })
              }), jsxs(_$$P2, {
                children: [jsxs(SceneGraphContext.Provider, {
                  value: _,
                  children: [jsx("div", {
                    className: "playground_modal--propsSectionContainer--3xF-J",
                    children: jsx(_$$x2, {
                      containerWidth: PanelWidth.UNBOUNDED,
                      componentProps,
                      playgroundGUID,
                      productComponentGUID: y,
                      sceneGraph: _,
                      viewOnlyMode: M?.isState ? BK.VARIANT_PROPS : void 0,
                      recordingKey: "playgroundPicker"
                    })
                  }), jsx("div", {
                    className: "playground_modal--modesSectionContainer--NaZ-S",
                    children: jsx(_$$b6, {
                      fill: !0,
                      modes: modeData || {}
                    })
                  })]
                }), jsx(ErrorBoundaryCrash, {
                  boundaryKey: "Figmadoc",
                  fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
                  children: jsx(Qd, {
                    isPlayground: !0,
                    onInstancePillClick: C
                  })
                })]
              })]
            })]
          })
        })]
      })
    })
  });
});
function lO({
  manager: e,
  theme: t
}) {
  return useDelayedTrue(200) ? jsx(TrackingProvider, {
    name: "Dev Mode Component Playground",
    children: jsx(ModalRootComponent, {
      manager: e,
      width: "fit-content",
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: renderI18nText("design_systems.playground.component_playground")
          })
        }), jsx(DialogBody, {
          children: jsxs("div", {
            className: lC,
            children: [jsx("div", {
              className: lT,
              style: CU(t),
              children: jsx("div", {
                className: lS
              })
            }), jsx("div", {
              className: lP,
              children: jsx("div", {
                className: "playground_modal--propsContainerLoading--XO18-",
                children: jsx(LoadingSpinner, {})
              })
            })]
          })
        })]
      })
    })
  }) : null;
}
let lM = registerModal(lR, "PlaygroundModal");
let lH = parsePxNumber(devHandoffComponentPreviewMaxHeight);
function lW({
  overPropTable: e,
  overPlaygroundButton: t
}) {
  let n = _$$rL();
  let o = _$$ro();
  let s = n - 64;
  let r = function (e, t = lH) {
    let n = wS();
    let a = _$$lA();
    let o = "loaded" === n.status && n.result.dataComponentId ? n.result.dataComponentId : a?.guid;
    let s = _$$c5(o);
    let r = "loaded" === n.status && "temp-scene" === n.result.dataLocation;
    let d = 4 * e;
    let u = 4 * t;
    return useMemo(() => {
      if (!o) return;
      let e = Fullscreen.getDefaultStateForLocalStateGroup(o) || o;
      if (!isValidSessionLocalID(parseSessionLocalID(e))) return;
      let [t, n] = Thumbnail.generateThumbnailForNode(e, d, u, 4, {
        forceContentsOnly: !0,
        inDetachedComponentsScene: r
      });
      if (!n || 0 === n.length || !t) return;
      let {
        width,
        height
      } = t;
      return {
        url: URL.createObjectURL(new Blob([n])),
        backgroundStyle: s,
        renderWidth: width / 4,
        renderHeight: height / 4
      };
    }, [s, r, o, u, d]);
  }(s);
  if (!o) return null;
  let d = r?.renderWidth ?? s;
  let u = r?.renderHeight ?? lH;
  return jsx("div", {
    className: ek()("component_preview_panel--componentPreviewContainer--aKLR0 common--well--J0WtH", {
      "component_preview_panel--overPropTable--c8HQR": e,
      "component_preview_panel--overPlaygroundButton--cn0Sd": t && !e
    }),
    style: r?.backgroundStyle,
    children: r?.url && jsx(_$$J7, {
      className: "component_preview_panel--componentPreviewImage--AZj5d",
      src: r.url,
      style: {
        maxWidth: d,
        maxHeight: u
      }
    })
  });
}
let lG = "component_props_list--propertyValueTypeBool--9q87D";
function lU() {
  return jsx("span", {
    className: "component_props_list--propertyNameSpacer--FdkL0"
  });
}
function lK(e) {
  let t = Cm(`${e.name}: ${e.value}`, e.name);
  let [n, o] = useState(!1);
  let s = _$$X(e.name);
  let r = _$$X(e.value);
  let d = {
    [ComponentPropType.BOOL]: lG,
    [ComponentPropType.VARIANT]: void 0,
    [ComponentPropType.TEXT]: void 0,
    [ComponentPropType.INSTANCE_SWAP]: void 0,
    [ComponentPropType.NUMBER]: lG,
    [ComponentPropType.IMAGE]: lG,
    [ComponentPropType.SLOT]: void 0,
    [ComponentPropType.NONE]: void 0
  };
  let c = {
    [ComponentPropType.BOOL]: _$$X2,
    [ComponentPropType.VARIANT]: _$$y4,
    [ComponentPropType.TEXT]: _$$I3,
    [ComponentPropType.INSTANCE_SWAP]: _$$M4,
    [ComponentPropType.NUMBER]: _$$X2,
    [ComponentPropType.IMAGE]: _$$X2,
    [ComponentPropType.SLOT]: _$$X2,
    [ComponentPropType.NONE]: _$$y4
  }[e.type];
  let u = jsx(c, {
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("design_systems.component_properties.property_icon_tooltip", {
      propertyType: getComponentPropDisplayName(e.type === ComponentPropType.NONE ? ComponentPropType.VARIANT : e.type)
    })
  });
  let p = ek()("component_props_list--propertyValue--eu4vE ellipsis--ellipsis--Tjyfa", d[e.type]);
  return jsx("div", {
    className: "component_props_list--copyableRow--N-YSu ellipsis--ellipsis--Tjyfa",
    onMouseEnter: () => {
      o(!0);
    },
    onMouseLeave: () => {
      o(!1);
    },
    children: jsx(ButtonPrimitive, {
      className: "component_props_list--propertyRowButton--biwBU",
      onClick: t,
      htmlAttributes: {
        "data-testid": "inspectionPropertyRow"
      },
      children: jsxs("div", {
        className: "component_props_list--propertyRow--lpbBb",
        children: [e.name ? jsx("span", {
          className: "component_props_list--propertyName--o49U9 ellipsis--ellipsis--Tjyfa",
          "data-testid": "inspectionPropertyName",
          ...s,
          "data-tooltip-tip-align-left": !0,
          children: e.name
        }) : jsx(lU, {}), jsxs("span", {
          className: p,
          "data-testid": "inspectionPropertyValue",
          ...r,
          "data-tooltip-tip-align-left": !0,
          children: [u, jsx(_$$lN, {
            valueProps: {
              ...e,
              copyValue: e.value
            },
            isHovered: n
          })]
        })]
      })
    })
  });
}
function lX() {
  let e = useDispatch();
  let t = M4();
  let n = useCallback(() => {
    e(showModalHandler({
      type: lM,
      data: {
        guid: t?.guid
      }
    }));
    trackEventAnalytics("Playground opened");
  }, [e, t?.guid]);
  return jsx("div", {
    className: "component_props_list--playgroundButtonContainer--q6-lJ",
    "data-test-id": "openInPlaygroundButton",
    children: jsx(ButtonWide, {
      variant: "secondary",
      onClick: n,
      recordingKey: "openInPlayground",
      children: renderI18nText("dev_handoff.playground.explore_component_behavior")
    })
  });
}
function lJ(e) {
  let t = e.variables && e.variables.value[e.name];
  let n = t && t.type === VariableDataType.ALIAS ? t.value : void 0;
  let i = _$$u4(n);
  return jsx(lK, {
    type: e.type,
    name: e.name,
    value: e.value,
    variable: i?.name
  });
}
function lQ() {
  let e = useSelector(selectSceneGraphSelectionKeys);
  let t = useMemo(_$$z3, []);
  let {
    consumedVariable
  } = _$$u3(["VARIANT_PROPERTIES"]);
  let s = function (e) {
    if (!e || isInvalidValue(e) || e.type !== VariableDataType.EXPRESSION || e.value.expressionFunction !== OperationType.RESOLVE_VARIANT) return null;
    let t = e.value.expressionArguments[0];
    return t?.type !== VariableDataType.MAP ? null : t;
  }(consumedVariable);
  let r = useSelector(n => t(n, e));
  let d = Object.entries(kN()).filter(([e, t]) => t.modeOptions.length > 1);
  let {
    visibleItems,
    showMoreButton
  } = _$$y3({
    items: r,
    pageSize: 3,
    shouldResetOnSelectionChange: !0
  });
  let p = r.length > 0;
  let h = p || d.length > 0;
  return jsxs(Fragment, {
    children: [jsx(lW, {
      overPropTable: p,
      overPlaygroundButton: h
    }), p && jsxs(Fragment, {
      children: [jsx("div", {
        className: "component_props_list--propsList--VRadV",
        children: visibleItems.map(({
          name: e,
          value: t,
          type: n
        }) => jsx(lJ, {
          type: n,
          name: e,
          value: t,
          variables: s ?? null
        }, e))
      }), showMoreButton]
    }), !fullscreenAlias.getIsExtension() && h && jsx(lX, {})]
  });
}
function lq() {
  jY();
  let e = _$$lA();
  let [t, n] = g$();
  let a = AK(t, n);
  let o = e?.isState ? e?.parentNode : null;
  let {
    backingSymbolDescription,
    parentDescription
  } = _$$iX(e?.description, o?.description);
  let r = backingSymbolDescription && parentDescription ? parentDescription + "\n\n" + backingSymbolDescription : backingSymbolDescription || parentDescription;
  return useMemo(() => ({
    links: a,
    description: r
  }), [a, r]);
}
function lY({
  link: e,
  appendLabel: t
}) {
  let n = Gw(e.uri);
  let i = n ? capitalize(n) : getI18nString("dev_handoff.docs.links_default");
  let o = {
    id: e.uri,
    nodeId: "",
    fileKey: "",
    linkName: i,
    linkUrl: e.uri,
    linkPreviewJson: "",
    isUserOverride: !1,
    isInherited: !1,
    linkPreview: null
  };
  return jsx(o8, {
    link: o,
    isEditable: !1,
    hintInMenu: getI18nString("dev_handoff.developer_related_links.cant_edit_component_doc_link"),
    onOpenDeleteModal: noop,
    onOpenEditModal: noop,
    appendLabel: t
  });
}
function lZ() {
  let {
    description
  } = lq();
  return jsxs(Fragment, {
    children: [jsx(oR, {
      description,
      shouldUseUiFont: !0,
      shouldUseBottomPadding: !0
    }), jsx(lQ, {})]
  });
}
let l4 = "add_developer_related_link_row--inputRow--0rB-c text--fontPos11--2LvXf text--_fontBase--QdLsd";
function l8({
  onCancel: e,
  onSuccess: t,
  existingUrls: n,
  onFocus: l,
  onUnfocus: s
}) {
  let r = useDispatch();
  let [d, c] = useState("");
  let [u, p] = useState(!1);
  let h = useCallback(e => c(e.target.value), []);
  let f = useSceneGraphSelector();
  let g = Nf() ?? "";
  let x = f.get(g);
  let m = useCurrentFileKey();
  let _ = o3(d);
  let {
    inputRef,
    inputProps: {
      onFocus,
      onMouseUp,
      onMouseLeave,
      onKeyUp,
      onChange
    }
  } = _$$X3({
    onChange: h
  });
  let k = useCallback(async () => {
    let e = d;
    if (!_$$G(e) || !_$$H2(e)) {
      if (e = "http://" + e, !FB(e) || !_$$G(e)) {
        r(VisualBellActions.enqueue({
          message: getI18nString("dev_handoff.developer_related_links.invalid_link"),
          error: !0,
          timeoutOverride: 2e3
        }));
        return;
      }
      c(e);
    }
    if (n.includes(e)) {
      r(VisualBellActions.enqueue({
        message: getI18nString("dev_handoff.developer_related_links.duplicate_link_error"),
        error: !0,
        timeoutOverride: 2e3
      }));
      return;
    }
    p(!0);
    s();
    let a = DY({
      fileKey: m,
      nodeId: g,
      url: e,
      onPost: t,
      nodeType: x?.type,
      source: "web",
      pluginId: _?.plugin.plugin_id
    });
    try {
      let e = await a;
      p(!1);
      let t = _$$Rb.safeParse(e.data);
      if (!t.success || !_) return;
      let n = t.data.meta;
      _.genPreview({
        link: {
          id: n.id,
          linkUrl: n.link_url,
          linkName: n.link_name,
          linkPreview: null,
          linkPreviewJson: "",
          nodeId: n.node_id,
          fileKey: n.file_key,
          isUserOverride: n.is_user_override,
          isInherited: !1
        }
      });
    } catch (e) {
      console.error(e);
      r(VisualBellActions.enqueue({
        message: getI18nString("dev_handoff.developer_related_links.link_error", {
          errorMessage: e.message
        }),
        error: !0,
        timeoutOverride: 2e3
      }));
    } finally {
      p(!1);
    }
  }, [d, n, s, m, g, t, r, x?.type, _]);
  let A = async t => {
    "Enter" === t.key && !t.shiftKey && d ? await k() : "Escape" === t.key && e();
  };
  if (useEffect(() => {
    let t = t => {
      inputRef.current && !inputRef.current.contains(t.target) && (d && "" !== d ? k() : e());
    };
    document.addEventListener("mousedown", t);
    return () => document.removeEventListener("mousedown", t);
  }, [e, inputRef, k, d]), u) {
    let e = new URL(d).host;
    e.startsWith("www.") && (e = e.slice(4));
    return jsxs(fI, {
      className: l4,
      children: [jsx(LoadingSpinner, {
        size: "sm"
      }), jsx(_$$nV, {
        children: e
      })]
    });
  }
  return jsxs(fI, {
    className: l4,
    children: [jsx(SvgComponent, {
      svg: _$$A14,
      className: cssBuilderInstance.colorIconSecondary.$
    }), jsx(LazyInputForwardRef, {
      ref: inputRef,
      autoCorrect: "off",
      autoFocus: !0,
      className: "add_developer_related_link_row--input--4Y-uG",
      onChange,
      onFocus: e => {
        onFocus(e);
        l();
      },
      onKeyDown: A,
      onKeyUp,
      onMouseLeave,
      onMouseUp,
      placeholder: getI18nString("dev_handoff.developer_related_links.link_placeholder"),
      recordingKey: "devRelatedLinkUrlInput",
      value: d
    })]
  });
}
let st = _$$z4.object({
  type: _$$z4.literal("PLAIN_TEXT"),
  text: _$$z4.string()
});
let sn = _$$z4.union([st, _$$z4.$$null()]);
let sa = _$$z4.object({
  type: _$$z4.literal("AUTH_REQUIRED")
});
_$$z4.union([sa, st, _$$z4.$$null()]);
let si = _$$z4.object({
  type: _$$z4.literal("AUTH_SUCCESS")
});
function so(e) {
  if (!e) return null;
  try {
    let t = JSON.parse(e);
    let n = sn.safeParse(t);
    if (!n.success) return null;
    return n.data;
  } catch (t) {
    reportError(ServiceCategories.DEVELOPER_TOOLS, t, {
      extra: {
        previewJson: e
      }
    });
    return null;
  }
}
_$$z4.union([si, _$$z4.$$null()]);
function ss(e, t) {
  let n = useSubscription(DeveloperRelatedLinksForNode, {
    fileKey: e,
    nodeId: t
  });
  return useMemoStable(() => "loaded" === n.status && n.data.file?.developerRelatedLinksForNode ? [n.data.file.developerRelatedLinksForNode.map(e => ({
    ...e,
    linkPreview: so(e.linkPreviewJson)
  })), "loaded"] : [[], n.status], [n]);
}
let sd = registerModal(function (e) {
  let t = e.linkId;
  let n = Nf() ?? "";
  let i = useCurrentFileKey();
  let l = useSceneGraphSelector().get(n);
  let s = useDispatch();
  let r = async () => {
    if (!i || !n) return;
    let e = Tz({
      fileKey: i,
      linkId: t,
      nodeId: n,
      nodeType: l?.type,
      source: "web"
    });
    s(hideModal());
    try {
      await e;
    } catch (e) {
      console.error(e);
      s(VisualBellActions.enqueue({
        message: `Could not delete link: ${e.message}`,
        error: !0,
        timeoutOverride: 2e3
      }));
    }
  };
  return jsx(ConfirmationModal2, {
    destructive: !0,
    confirmationTitle: renderI18nText("dev_handoff.developer_related_links.delete_link"),
    confirmText: renderI18nText("dev_handoff.developer_related_links.delete_link"),
    onConfirm: r,
    children: jsx("p", {
      children: renderI18nText("dev_handoff.developer_related_links.delete_link_text_body")
    })
  });
}, "DeveloperRelatedLinksDeleteModal");
let sp = "developer_related_links_edit_modal--fieldContainer--Twtv-";
let sh = "developer_related_links_edit_modal--label--cxfFD";
let sf = registerModal(function ({
  initialLink: e,
  ...t
}) {
  let n = useModalManager(t);
  let {
    id,
    linkName,
    linkUrl
  } = e;
  let [d, c] = useState(linkUrl);
  let u = e.linkPreview?.text;
  let [p, h] = useState(!e.isUserOverride && u ? "" : linkName);
  let [f, g] = useState(!1);
  let x = Nf() ?? "";
  let m = useCurrentFileKey();
  let _ = useSceneGraphSelector().get(x);
  let v = useDispatch();
  let y = useCallback(e => h(e.target.value), []);
  let b = useCallback(e => c(e.target.value), []);
  let {
    inputRef,
    inputProps: {
      onFocus,
      onMouseUp,
      onMouseLeave,
      onKeyUp,
      onChange
    }
  } = _$$X3({
    onChange: y
  });
  let C = o3(d);
  let {
    inputRef: _inputRef,
    inputProps: {
      onFocus: _onFocus,
      onMouseUp: _onMouseUp,
      onMouseLeave: _onMouseLeave,
      onKeyUp: _onKeyUp,
      onChange: _onChange
    }
  } = _$$X3({
    onChange: b
  });
  let O = async () => {
    let t;
    if (!x || !m) return;
    let n = d;
    if ((!_$$G(n) || !_$$H2(n)) && (n = "http://" + n, !_$$G(n))) {
      v(VisualBellActions.enqueue({
        message: getI18nString("dev_handoff.developer_related_links.invalid_link"),
        error: !0,
        timeoutOverride: 2e3
      }));
      return;
    }
    g(!0);
    let a = p;
    p && "" !== p || (a = await yf(n));
    d !== linkUrl && p !== linkName ? t = !0 : d !== linkUrl ? C && (t = !1) : p !== linkName && (t = !!p || !e.linkPreview);
    let i = Cq({
      fileKey: m,
      nodeId: x,
      linkId: id,
      name: a,
      url: n,
      isUserOverride: t,
      clearLinkPreview: d !== linkUrl,
      nodeType: _?.type,
      source: "web",
      pluginId: C?.plugin.plugin_id
    });
    C && !t && C.genPreview({
      link: {
        ...e,
        linkUrl: d,
        linkName: p,
        isUserOverride: !1
      }
    });
    v(hideModal());
    try {
      await i;
    } catch (e) {
      console.error(e);
      v(VisualBellActions.enqueue({
        message: `Could not edit link: ${e.message}`,
        error: !0,
        timeoutOverride: 2e3
      }));
    }
  };
  let M = f || !d || linkName === p && linkUrl === d;
  let B = e => {
    e.keyCode === KeyCodes.ENTER && !e.shiftKey && p && d ? O() : e.keyCode === KeyCodes.ESCAPE && v(hideModal());
  };
  let F = setupAutofocusHandler();
  return jsx(ModalRootComponent, {
    manager: n,
    width: "md",
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText("dev_handoff.developer_related_links.edit_link")
        })
      }), jsxs(DialogBody, {
        children: [jsxs("div", {
          className: sp,
          children: [jsx("p", {
            className: sh,
            children: renderI18nText("dev_handoff.developer_related_links.link")
          }), jsx(LazyInputForwardRef, {
            ref: _inputRef,
            autoCorrect: "off",
            className: "developer_related_links_edit_modal--input--mw5Qe",
            disabled: f,
            onChange: _onChange,
            onFocus: _onFocus,
            onKeyDown: B,
            onKeyUp: _onKeyUp,
            onMouseLeave: _onMouseLeave,
            onMouseUp: _onMouseUp,
            recordingKey: "devRelatedLinkUrlInput",
            value: d
          })]
        }), jsxs("div", {
          className: sp,
          children: [jsx("p", {
            className: sh,
            children: renderI18nText("dev_handoff.developer_related_links.name")
          }), jsxs("div", {
            className: "developer_related_links_edit_modal--inputContainer--jplkF",
            children: [jsx("div", {
              className: "developer_related_links_edit_modal--favicon--aNxtZ",
              children: jsx(_$$v, {
                url: linkUrl
              })
            }), jsx(LazyInputForwardRef, {
              ref: e => {
                F(e);
                inputRef.current = e;
              },
              autoCorrect: "off",
              autoFocus: !0,
              className: "developer_related_links_edit_modal--inputName--oSwwG",
              disabled: f,
              onChange,
              onFocus,
              onKeyDown: B,
              onKeyUp,
              onMouseLeave,
              onMouseUp,
              placeholder: u,
              recordingKey: "devRelatedLinkNameInput",
              value: p
            })]
          })]
        })]
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            variant: "secondary",
            onClick: () => v(hideModal()),
            children: renderI18nText("dev_handoff.developer_related_links.cancel")
          }), jsx(Button, {
            onClick: O,
            disabled: M,
            type: "submit",
            children: renderI18nText("dev_handoff.developer_related_links.edit_link")
          })]
        })
      })]
    })
  });
}, "DeveloperRelatedLinksEditModal");
let sg = atom(!1);
function sx({
  link: e,
  isVariant: t
}) {
  return jsx(o8, {
    isEditable: !1,
    link: {
      ...e,
      isInherited: !0,
      isVariant: t
    },
    onOpenDeleteModal: noop,
    onOpenEditModal: noop
  });
}
let sm = atom(!1);
function s_() {
  let e = Nf() ?? "";
  let t = useSceneGraphSelector();
  let n = _$$lU();
  let a = useSelector(e => e.mirror.appModel.currentPage);
  let l = t.get(n ?? a);
  let [s, d] = useAtomValueAndSetter(sm);
  let c = trackFileEventWithStore();
  return useCallback(() => {
    l?.isAlive && (d(!0), c("Dev Handoff Related Links Click Plus Icon", {
      nodeId: e,
      nodeType: l?.type,
      source: "web"
    }));
  }, [c, d, e, l]);
}
function sv({
  documentationDataLinks: e,
  links: t,
  linksLoaded: n,
  inheritedLinksForStateGroup: o,
  inheritedLinksStatusForStateGroup: l,
  inheritedLinks: s,
  inheritedLinksStatus: r,
  isVariant: d,
  userCanEditLink: c,
  onOpenDeleteModal: u,
  onOpenEditModal: p,
  newLinkRowVisible: h
}) {
  let f = useMemo(() => n && "loaded" === r && "loaded" === l ? [...e.map(e => ({
    ...e,
    type: "documentation"
  })), ...s.map(e => ({
    ...e,
    type: "inherited"
  })), ...o.map(e => ({
    ...e,
    type: "inherited-state-group"
  })), ...t.map(e => ({
    ...e,
    type: "not-inherited"
  }))] : [], [e, s, o, t, n, r, l]);
  let {
    visibleItems,
    showMoreButton
  } = _$$y3({
    items: f,
    pageSize: 2,
    shouldResetOnSelectionChange: !0,
    showAll: h
  });
  return jsxs(Fragment, {
    children: [visibleItems.map(e => "documentation" === e.type ? jsx(lY, {
      link: e,
      appendLabel: getI18nString("dev_handoff.docs.documentation_link_label")
    }, e.uri) : "inherited" === e.type ? jsx(sx, {
      link: e,
      isVariant: !1
    }, e.linkUrl) : "inherited-state-group" === e.type ? jsx(sx, {
      link: e,
      isVariant: d
    }, e.linkUrl) : "not-inherited" === e.type ? jsx(o8, {
      isEditable: c,
      link: {
        ...e,
        isInherited: !1
      },
      onOpenDeleteModal: u,
      onOpenEditModal: p
    }, e.linkUrl) : void 0), jsx(sb, {
      links: visibleItems.filter(e => "documentation" !== e.type)
    }), showMoreButton]
  });
}
function sy({
  noBorder: e = !1,
  gapBetweenRows: t = !1
}) {
  let n = useDispatch();
  let s = Nf() ?? "";
  let d = useSourceFileKey() ?? "";
  let u = useSceneGraphSelector();
  let p = _$$lU();
  let h = useSelector(e => e.mirror.appModel.currentPage);
  let f = u.get(p ?? h);
  let g = wS();
  let x = isSingleSceneGraphSelectionInDevHandoff();
  let m = function () {
    let e = oA();
    let t = selectCurrentFile();
    let n = t?.repo;
    let a = !!(t && n && isDefaultFileAlt(t, n)) || !n;
    let i = useCanUseDevModeDemoFile();
    return !e && a && !i;
  }();
  let _ = oA();
  let [v, y] = function (e) {
    let t = useSubscription(DeveloperRelatedLinks, {
      fileKey: e
    });
    return useMemoStable(() => "loaded" === t.status && t.data.file?.developerRelatedLinks ? [t.data.file.developerRelatedLinks.map(e => ({
      ...e,
      linkPreview: so(e.linkPreviewJson)
    })), "loaded"] : [[], t.status], [t]);
  }(d);
  let {
    links = []
  } = lq();
  let j = useMemo(() => v.filter(e => e.nodeId === s) ?? [], [v, s]);
  let [N, k] = useState(!1);
  let {
    singleBackingSymbol,
    singleBackingStateGroup
  } = _$$$4([f?.guid ?? ""]);
  let {
    backingSymbol,
    backingStateGroup
  } = Bv(singleBackingSymbol, singleBackingStateGroup);
  let S = "loaded" === g.status;
  let L = f?.type === "INSTANCE" || S;
  let R = useLibraries(backingSymbol?.sourceLibraryKey ? [backingSymbol?.sourceLibraryKey] : []);
  let D = R.data[0];
  let M = null;
  D && (isPublishedLibraryWithAssets(D) && isCommunityLibrary(D) ? M = D.hub_file_id : "library_file_key" in D && (M = D.library_file_key));
  let [B, F] = ss(M ?? "", backingSymbol?.publishID ?? "");
  let [z, V] = ss(M ?? "", backingStateGroup?.publishID ?? "");
  let W = !!M && M !== d;
  let U = backingSymbol?.guid;
  L && U && !W && (B = v.filter(e => e.nodeId === U) ?? [], F = y);
  L && backingStateGroup && !W && (z = v.filter(e => e.nodeId === backingStateGroup.guid) ?? [], V = y);
  let [K, X] = useAtomValueAndSetter(sm);
  let J = s_();
  let [Q, q] = useAtomValueAndSetter(sg);
  useEffect(() => {
    Q && (J(), q(!1));
  }, [Q, J, q]);
  let Y = m && j.length < 10;
  let Z = useMemo(() => v && function (e, t, n) {
    let a = new Map();
    let i = new Map();
    e.forEach(e => {
      if (Fullscreen.getPageIdFromNode(e.nodeId) !== n) return;
      let o = t.get(e.nodeId);
      for (; o;) {
        let t = i.get(o.guid);
        if (t) {
          a.get(t)?.push(e);
          return;
        }
        let n = o.parentNode;
        if (!n || "SECTION" === o.type || "CANVAS" === o.type) return;
        if ("FRAME" === o.type && !o.isStateGroup && !o.resizeToFit && (n?.type === "SECTION" || n?.type === "CANVAS")) {
          a.get(o.guid) ? a.get(o.guid)?.push(e) : a.set(o.guid, [e]);
          i.set(e.nodeId, o.guid);
          return;
        }
        o = n;
      }
    });
    return a;
  }(v, u, h), [v, s, h]);
  if (0 === j.length && _) return null;
  let $ = f?.type === "SECTION" && Z && function (e, t) {
    let n = new Map();
    for (let a of t.childrenNodes) {
      let t = "FRAME" === a.type && e.get(a.guid);
      t && n.set(a.guid, t);
    }
    return n;
  }(Z, f);
  let ee = j.length > 0 || links.length > 0 || K || B.length > 0 || z.length > 0 || !x && Z && Z.size > 0 || $ && $.size > 0;
  let et = "loaded" === R.status && "loaded" === y && "loaded" === F && "loaded" === V;
  let en = getI18nString("dev_handoff.developer_related_links.links");
  return jsx(VZ, {
    title: en,
    recordingKey: "developerLinks",
    bodyIsEmpty: !ee,
    headerChildren: jsxs(Fragment, {
      children: [!et && jsx(fI, {
        className: "developer_related_links_panel--spinner--2ofDP draggable_list--addButton--D0q--",
        children: jsx(LoadingSpinner, {})
      }), et && Y && !N && jsx("span", {
        className: "developer_related_links_panel--addButton--0Fv7K draggable_list--addButton--D0q--",
        children: jsx(IconButton, {
          "aria-label": getI18nString("dev_handoff.developer_related_links.add_link_button"),
          onClick: J,
          recordingKey: "addDevRelatedLink",
          htmlAttributes: {
            "data-tooltip": getI18nString("dev_handoff.developer_related_links.add_link_button"),
            "data-tooltip-type": KindEnum.TEXT
          },
          children: jsx(_$$x, {})
        })
      })]
    }),
    hideHeader: !0,
    noBorder: e,
    noPadding: !0,
    children: jsxs("div", {
      className: ek()("developer_related_links_panel--rowsContainer--qh1Un", t && "developer_related_links_panel--gap--nJGut"),
      children: [jsx(sv, {
        documentationDataLinks: links,
        inheritedLinks: B && L ? B : [],
        inheritedLinksForStateGroup: backingStateGroup && L ? z : [],
        inheritedLinksStatus: F,
        inheritedLinksStatusForStateGroup: V,
        isVariant: null !== backingStateGroup,
        links: j,
        linksLoaded: et,
        newLinkRowVisible: K,
        onOpenDeleteModal: (e, t) => {
          n(showModalHandler({
            type: sd,
            data: {
              linkId: e,
              initialLinkUrl: t
            }
          }));
        },
        onOpenEditModal: e => {
          n(showModalHandler({
            type: sf,
            data: {
              initialLink: e
            }
          }));
        },
        userCanEditLink: m
      }), K && jsx(l8, {
        onCancel: () => {
          X(!1);
          k(!1);
        },
        onSuccess: () => {
          X(!1);
          k(!1);
        },
        onFocus: () => k(!0),
        onUnfocus: () => k(!1),
        existingUrls: j.map(e => e.linkUrl)
      })]
    })
  });
}
function sb({
  links: e
}) {
  let [t, n] = useAtomValueAndSetter(ok);
  let o = useMemo(() => {
    let n = new Set(e.map(e => e.linkUrl));
    return Object.values(t).filter(e => !!e && e.links.some(e => n.has(e.linkUrl)));
  }, [e, t]);
  async function l({
    links: e,
    plugin: t
  }) {
    if (await oZ.instance.runAuth({
      plugin: t,
      links: e.map(e => ({
        url: e.linkUrl,
        name: e.linkName,
        isInherited: e.isInherited,
        nodeId: e.nodeId
      }))
    })) {
      n(e => {
        let n = {
          ...e
        };
        delete n[t.plugin_id];
        return n;
      });
      try {
        await Promise.all(e.map(e => oZ.instance.generateLinkPreview({
          plugin: t,
          link: e
        })));
      } catch (e) {
        console.error(e);
      }
    }
  }
  return o && 0 !== o.length ? jsx(AutoLayout, {
    spacing: 4,
    direction: "vertical",
    width: "fill-parent",
    horizontalAlignItems: "start",
    padding: {
      top: 4,
      left: 16
    },
    children: Array.from(o).map((e, t) => jsx(TextWithTruncation, {
      children: renderI18nText("dev_handoff.related_links.plugin.auth_required", {
        button: jsx("button", {
          className: cssBuilderInstance.colorTextBrand.bgTransparent.$,
          onClick: () => l({
            links: e.links,
            plugin: e.plugin
          }),
          children: jsx(TextWithTruncation, {
            children: renderI18nText("dev_handoff.related_links.plugin.connect_to", {
              pluginName: e.plugin.name
            })
          })
        })
      })
    }, t))
  }) : null;
}
function sO() {
  let e;
  let t = _$$lA();
  let n = wS();
  let s = useSelector(selectOpenFileKey);
  let r = _$$uQ();
  let d = function () {
    let e = RI();
    let t = useDeepEqualSceneValue((e, t, n) => {
      if (!t || n) return null;
      let a = e?.get(t);
      return a?.sourceLibraryKey;
    }, e?.nodeId, e?.isDetachedScene);
    let n = useMemo(() => {
      if (!e?.isDetachedScene || !e?.nodeId) return null;
      let t = x9(e.nodeId);
      return t?.sourceLibraryKey;
    }, [e?.nodeId, e?.isDetachedScene]);
    return useMemo(() => e?.isDetachedScene ? n : t, [n, e?.isDetachedScene, t]);
  }();
  let u = useLibraries(d ? [d] : []);
  let p = u.data[0];
  p && ("hub_file_id" in p ? e = p.hub_file_id : "library_file_key" in p && (e = p.library_file_key));
  let h = useRef(!1);
  !1 === h.current && u && "loading" === u.status && (h.current = !0);
  let f = trackFileEventWithStore();
  let g = "loaded" === n.status ? n.result : void 0;
  let x = g && g.isExternal ? g.fileKey : e && e !== s ? e : s;
  let m = x !== s;
  let v = g ? g.nodeId : m ? t?.publishID : t?.guid;
  let b = _$$dI({
    trackingFunction: () => {
      f("Dev Mode Navigated To Main Component", {
        selectedNodeId: r,
        external: m,
        detached: !!g
      });
    }
  });
  if (!v || !b || !x || u?.status === "loading") return null;
  let j = isValidLibraryKey(x);
  let w = !1;
  m ? n && (w = "loading" === n.status || "errors" === n.status) : w = SceneGraphHelpers.nodeIsSoftDeleted(v);
  return jsx("div", {
    className: ek()({
      "component_panel--instanceNavigationButton--4ANaC": h.current
    }),
    children: jsx(IconButton, {
      "aria-label": j ? getI18nString("design_systems.instance_panel.view_library_in_community") : getI18nString("dev_handoff.instance_navigation.go_to_main_component"),
      onClick: b,
      disabled: w,
      recordingKey: "devHandoffNavigateInstanceButton",
      htmlAttributes: {
        "data-tooltip": j ? getI18nString("design_systems.instance_panel.view_library_in_community") : getI18nString("dev_handoff.instance_navigation.go_to_main_component"),
        "data-tooltip-type": KindEnum.TEXT
      },
      children: j ? jsx(_$$c6, {}) : m ? jsx(_$$E6, {}) : jsx(_$$K3, {})
    })
  });
}
function sM() {
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: "Figmadoc",
    fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
    children: jsx(Qd, {})
  });
}
function sB() {
  let {
    description
  } = lq();
  let t = useMemo(() => description ? stripHtmlTags(description) : void 0, [description]);
  return jsx(VZ, {
    title: getI18nString("inspect_panel.component_information"),
    recordingKey: "componentPanel",
    collapsiblePanelKey: "info",
    collapsedHeaders: t ? jsx(_$$G2, {
      text: t
    }) : void 0,
    children: jsx(lZ, {})
  });
}
function sF() {
  return _$$ro() ? jsx(sB, {}) : null;
}
let sV = e => e.includes("prototype") || e.includes("user") || e.includes("prop") ? null : e.includes("stroke") || e.includes("border") || e.includes("corner") ? "border" : e.includes("fill") || e.includes("background") ? "color" : e.includes("text") || e.includes("font") || e.includes("paragraph") || e.includes("ot-features") || "letter-spacing" === e || "line-height" === e ? "text" : e.includes("effect") ? "effect" : e.includes("size") || e.includes("stack") ? "layout" : "count" === e || e.includes("vector") ? "shape" : "opacity" === e || "visible" === e || "blend-mode" === e ? "style" : null;
function sH(e, t) {
  return sW.indexOf(e) - sW.indexOf(t);
}
let sW = ["color", "border", "text", "effect", "layout", "shape", "style"];
let sU = registerModal(function () {
  return jsx(ConfirmationModal2, {
    destructive: !0,
    confirmationTitle: renderI18nText("inspect_panel.detached_component.remove_attachment"),
    confirmText: renderI18nText("dev_handoff.detached_component.remove_attachment_confirm"),
    onConfirm: () => {
      VU.get("remove-detached-symbol-id", "menu")();
    },
    children: jsx("p", {
      children: renderI18nText("dev_handoff.detached_component.remove_attachment_text_body")
    })
  });
}, "RemoveDetachmentStatusModal");
let sK = "dev_handoff_nodes_panel--item--FYINO";
let sX = "dev_handoff_nodes_panel--itemSelectedReadySections--Wladq dev_handoff_nodes_panel--item--FYINO";
let sJ = "dev_handoff_nodes_panel--timestamp--5sWkT text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa";
let sQ = "dev_handoff_nodes_panel--readySectionsEmptyStateRow--3qQXK";
let sq = "dev_handoff_nodes_panel--readySectionsIcon--gNtWg";
let sY = "dev_handoff_nodes_panel--readySectionsContent--3ilof text--fontPos11--2LvXf text--_fontBase--QdLsd";
function s0({
  state: e,
  backgroundState: t
}) {
  return jsxs("div", {
    className: "dev_handoff_nodes_panel--historyIconContainer--QkDx6",
    children: [jsx(MediaQuerySvgComponent, {
      className: "dev_handoff_nodes_panel--historyIcon--dprKz",
      svg: _$$A15
    }), e === Uy.RECENTLY_EDITED && jsx("div", {
      className: ek()("dev_handoff_nodes_panel--editedDot--8NIiF", {
        "dev_handoff_nodes_panel--editedDotSelected--95Nsq": "selected" === t,
        "dev_handoff_nodes_panel--editedDotHover--P8nA3": "hovered" === t
      })
    })]
  });
}
function s1({
  frameId: e,
  label: t,
  disabled: n,
  compareVersions: o,
  compareDetachedComponent: l,
  compareOverrides: s,
  overridesText: d
}) {
  let c = useCanAccessFullDevMode();
  let u = !n && c;
  let p = _$$dU(e, "cc_versions");
  let h = xY("cc_dropdown_detached_component");
  let f = _$$uQ();
  let g = useDeepEqualSceneValue((e, t) => e?.get(t ?? "")?.type === "INSTANCE", f);
  let x = useSelectionPropertyValue("overrides");
  let m = x && !isInvalidValue(x) ? x.instanceGuid : null;
  let v = Xn(m);
  let b = Xr(go);
  let {
    Dropdown,
    dropdownTargetRef,
    toggleDropdown
  } = _$$B3("DEV_HANDOFF_COMPARE_CHANGES_DROPDOWN");
  let A = useMemo(() => ({
    displayText: getI18nString("dev_handoff.compare_changes.entrypoint.compare_versions"),
    disabled: n || !c || !o,
    callback: c ? p : noop,
    recordingKey: "compareChanges.entrypoint.dropdown.compareVersions"
  }), [o, n, c, p]);
  let I = useMemo(() => l ? {
    displayText: getI18nString("dev_handoff.compare_changes.entrypoint.compare_main_component"),
    disabled: n || !c,
    callback: c ? h : noop,
    recordingKey: "compareChanges.entrypoint.dropdown.compareDetachedComponent"
  } : null, [l, n, c, h]);
  let E = useMemo(() => s || g ? {
    displayText: getI18nString("dev_handoff.compare_changes.entrypoint.compare_main_component"),
    disabled: !s || n || !c,
    callback: c ? v : noop,
    recordingKey: "compareChanges.entrypoint.dropdown.compareOverrides"
  } : null, [s, g, n, c, v]);
  let C = useMemo(() => [A, I, E].filter(isNotNullish), [A, I, E]);
  let T = C.filter(e => !e.disabled);
  let S = 1 === T.length ? T[0] : null;
  let P = useCallback(() => {
    b(!0);
    S?.callback?.();
  }, [S, b]);
  let L = useCallback(() => {
    b(!0);
    toggleDropdown();
  }, [toggleDropdown, b]);
  let R = S ? S?.displayText : t;
  return S ? jsx(ButtonPrimitive, {
    className: ek()(tY, "header--noChevron--ikDCm"),
    onClick: P,
    recordingKey: "compareChanges.entrypoint",
    children: jsx("div", {
      className: tQ,
      "data-testid": "compare-changes-entry-with-dropdown",
      "data-onboarding-key": Ov,
      children: R
    })
  }) : u ? jsxs(Fragment, {
    children: [jsxs(RecordableDiv, {
      className: tY,
      forwardedRef: dropdownTargetRef,
      onClick: S ? P : L,
      recordingKey: "compareChanges.entrypoint",
      children: [!!d && jsx("div", {
        className: "header--overridesDot--31BuQ",
        children: jsx(SvgComponent, {
          svg: _$$A16
        })
      }), jsx("div", {
        className: tJ,
        "data-testid": "compare-changes-entry-with-dropdown",
        "data-onboarding-key": Ov,
        children: R
      }), jsx(_$$r3, {})]
    }), jsx(Dropdown, {
      rootAndSubmenuMaxWidth: 240,
      items: C,
      showPoint: !1,
      recordingKey: "compareChanges.entrypoint.dropdown"
    })]
  }) : jsx("div", {
    className: ek()(tJ, {
      "header--layerCompareLinkTextDisabled----eEQ": n
    }),
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("dev_handoff.compare_changes.entrypoint.multiselect_comparison_hint"),
    "data-testid": "compare-changes-entry-without-dropdown",
    "data-onboarding-key": Ov,
    children: t
  });
}
function s2() {
  let e = useCanAccessFullDevMode();
  let t = selectCurrentUser()?.id;
  let n = _$$Tv();
  let i = useCurrentFileKey();
  let l = useDispatch();
  if (n?.length !== 2) return null;
  let s = n[1];
  let r = n[0];
  return jsx(Button, {
    variant: "secondary",
    onClick: () => {
      e && (trackEventAnalytics("Diff Modal Compare Changes Clicked", {
        userId: t,
        fileKey: i,
        nodeId: s,
        otherNodeId: r,
        entrypoint: "lego_layer",
        origin: "cc_nodes"
      }), globalPerfTimer.reset("dev_handoff.view_history", s), globalPerfTimer.start("dev_handoff.view_history", {
        key: s
      }), l(showModalHandler({
        type: ku,
        data: {
          changeNodeId: s,
          basisNodeId: r
        }
      })));
    },
    disabled: !e,
    recordingKey: "compareChanges.entrypoint.nodes",
    children: jsx("span", {
      className: tQ,
      children: renderI18nText("inspect_panel.history.compare_changes_selected_items")
    })
  });
}
function s5() {
  let e = wS();
  let t = _$$uQ();
  let n = useDeepEqualSceneValue((e, t) => {
    let n = e?.get(t ?? "");
    return n?.type === "SYMBOL" || n?.type === "INSTANCE";
  }, t);
  return "loaded" === e.status && !n;
}
function s3() {
  let e = selectCurrentFile();
  let t = _$$uQ();
  let n = useDeepEqualSceneValue((e, t) => {
    let n = e?.get(t ?? "");
    return n?.type === "SYMBOL" || n?.isStateGroup;
  }, t);
  let l = s5();
  let s = s_();
  let r = useCanUseDevModeDemoFile();
  let d = useIsCanvasEditDisabled();
  let c = useDispatch();
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  let h = useCallback(() => c(showModalHandler({
    type: sU
  })), [c]);
  return jsxs(MenuRootComp, {
    manager,
    children: [jsx(DialogTriggerButton, {
      "aria-label": getI18nString("dev_handoff.layer_options"),
      htmlAttributes: {
        "data-tooltip": getI18nString("dev_handoff.layer_options"),
        "data-tooltip-type": KindEnum.TEXT
      },
      recordingKey: "headerDropdownTrigger",
      ...getTriggerProps(),
      children: jsx(_$$J5, {})
    }), jsxs(MenuContainerComp, {
      children: [jsx(MenuItemComp, {
        onClick: function () {
          e && t && (window.location.href = `vscode://figma.figma-vscode-extension/open/${e.key}/${e.name}/${t}`);
        },
        disabled: r,
        children: renderI18nText("dev_handoff.inspect_panel.open_in_vs_code.link")
      }), jsx(MenuSeparator, {}), jsx(MenuItemComp, {
        onClick: s,
        recordingKey: "addDevRelatedLink",
        children: n ? jsxs("div", {
          className: "header--relatedLinkComponentMenuHint--Baq-o",
          children: [renderI18nText("dev_handoff.developer_related_links.add_link_button"), jsx(MenuSubText, {
            children: renderI18nText("dev_handoff.developer_related_links.component_inherited_links_desc")
          })]
        }) : renderI18nText("dev_handoff.developer_related_links.add_link_button")
      }), l && jsxs(Fragment, {
        children: [jsx(MenuSeparator, {}), jsx(MenuItemComp, {
          onClick: h,
          disabled: d,
          children: renderI18nText("dev_handoff.detached_component.unlink_from_main_component")
        })]
      })]
    })]
  });
}
function s4({
  id: e
}) {
  let t = useSceneGraphSelector().get(e);
  return jsxs("div", {
    className: ek()(tM, "header--list--gkgwc"),
    children: [jsx(Bf, {
      className: "header--layerIconList--VxxN6 header--icon--IGzM0",
      guid: e,
      useUI3Icon: !0
    }), jsxs("span", {
      className: "header--layerNameList--cboFM",
      children: [" ", t?.name, " "]
    })]
  });
}
function s7({
  id1: e,
  id2: t
}) {
  return jsxs("div", {
    className: "header--layerList--pJQNo",
    children: [jsx(s4, {
      id: e
    }, e), jsx(s4, {
      id: t
    }, t), jsx(s2, {})]
  });
}
function s8() {
  let e = NM();
  return e ? jsx(VZ, {
    title: getI18nString("inspect_panel.property.selected", {
      numberOfItems: e.length
    }),
    recordingKey: "layerName",
    children: 2 === e.length && !!e[0] && !!e[1] && jsx(s7, {
      id1: e[0],
      id2: e[1]
    })
  }) : null;
}
function s6() {
  let e = _$$uQ();
  let t = s5();
  let n = _$$ei(e ?? void 0);
  let {
    versions,
    versionsQueryLoaded
  } = DS(e ?? void 0);
  let l = !versionsQueryLoaded || 0 === versions.length || !n;
  let s = _$$i2();
  let r = function () {
    let e;
    let t = useSelectionPropertyValue("overrides");
    if (!t || isInvalidValue(t)) return null;
    let n = t.isPrimary;
    let a = t.overriddenProperties;
    let i = new Set();
    if (a.forEach(e => {
      let t = sV(e);
      t && i.add(t);
    }), 0 === i.size) return null;
    let o = Array.from(i).sort(sH).map(e => {
      switch (e) {
        case "color":
          return getI18nString("dev_handoff.overrides.color");
        case "border":
          return getI18nString("dev_handoff.overrides.border");
        case "text":
          return getI18nString("dev_handoff.overrides.text");
        case "effect":
          return getI18nString("dev_handoff.overrides.effect");
        case "layout":
          return getI18nString("dev_handoff.overrides.layout");
        case "shape":
          return getI18nString("dev_handoff.overrides.shape");
        case "style":
          return getI18nString("dev_handoff.overrides.style");
      }
    }).filter(_$$t4);
    let l = n ? getI18nString("dev_handoff.overrides.instance") : getI18nString("dev_handoff.overrides.layer");
    switch (o.length) {
      case 1:
        return getI18nString("dev_handoff.overrides.hint_one", {
          property: o[0],
          layerType: l
        });
      case 2:
        e = getI18nString("dev_handoff.overrides.properties2", {
          prop1: o[0],
          prop2: o[1]
        });
        break;
      case 3:
        e = getI18nString("dev_handoff.overrides.properties3", {
          prop1: o[0],
          prop2: o[1],
          prop3: o[2]
        });
        break;
      default:
        e = getI18nString("dev_handoff.overrides.properties_more", {
          prop1: o[0],
          prop2: o[1],
          prop3: o[2],
          count: o.length - 3
        });
    }
    return getI18nString("dev_handoff.overrides.hint", {
      layerType: l,
      properties: e
    });
  }();
  let d = !!n?.lastEditedAt && (!l || l && !!n?.createdAt);
  let c = d ? l ? getI18nString("dev_handoff.nodes_panel.created", {
    at: dayjs(n?.createdAt).fromNow()
  }) : getI18nString("dev_handoff.nodes_panel.edited", {
    at: dayjs(n?.lastEditedAt).fromNow()
  }) : "-";
  let u = _$$sD(c);
  if (!e || !s) return null;
  let p = d && !l;
  let h = t && getI18nString("dev_handoff.inspect_panel.detached_layer_info") || null;
  let f = !!r;
  let g = r || h;
  let x = t || !l || f;
  return p || g || x ? jsx("div", {
    className: "header--historyLinkContainer--8xI0i",
    children: jsxs("div", {
      className: "header--timestampContainerVertical--zb760 ellipsis--ellipsis--Tjyfa",
      children: [p && jsxs("div", {
        className: "header--timeAndIconContainer--31sn0",
        children: [jsx(eF, {
          className: tq
        }), jsx("span", {
          ref: u,
          children: c
        })]
      }), g && jsxs("div", {
        className: "header--overridesContainer--7aNiY",
        children: [!p && jsx(_$$B2, {
          className: tq
        }), jsx("span", {
          children: g
        })]
      }), x && jsx(s1, {
        frameId: e,
        label: getI18nString("inspect_panel.history.compare_changes"),
        compareVersions: !l,
        compareDetachedComponent: t,
        compareOverrides: f
      })]
    })
  }) : null;
}
function s9({
  hasCodeConnect: e
}) {
  let t = _$$uQ();
  let n = s5();
  let o = wS();
  let l = function () {
    let e = _$$uQ();
    let t = s5();
    let {
      type,
      isAutoLayout,
      isComponentSet,
      isVariant,
      booleanOperation,
      resizeToFit
    } = useDeepEqualSceneValue((e, t) => {
      let n = e?.get(t ?? "");
      return n ? {
        type: isStamp(n) ? "STAMP" : n.type,
        booleanOperation: n.booleanOperation,
        isAutoLayout: "HORIZONTAL" === n.stackMode || "VERTICAL" === n.stackMode,
        isVariant: n.isState || n.parentNode?.isStateGroup,
        isComponentSet: n.isStateGroup,
        resizeToFit: n.resizeToFit
      } : {};
    }, e);
    let d = function () {
      let e = Yj();
      let t = e?.data?.libraryKeyToFile;
      let n = kt();
      let a = useMemo(() => n || !t ? void 0 : _$$xA(t) ? t.hubFile?.currentHubFileVersion?.name : t.file?.name, [t, n]);
      if (n || !e || "loaded" === e.status) return a;
    }();
    if (!type) return null;
    if (t && "SYMBOL" !== type && "INSTANCE" !== type) return getI18nString("inspect_panel.node_type.detached_component");
    if ("BOOLEAN_OPERATION" === type) switch (booleanOperation) {
      case "UNION":
        return getI18nString("inspect_panel.node_type.union");
      case "INTERSECT":
        return getI18nString("inspect_panel.node_type.intersect");
      case "SUBTRACT":
        return getI18nString("inspect_panel.node_type.subtract");
      case "XOR":
        return getI18nString("inspect_panel.node_type.exclude");
    }
    switch (type) {
      case "VECTOR":
        return getI18nString("inspect_panel.node_type.vector");
      case "STAR":
        return getI18nString("inspect_panel.node_type.star");
      case "LINE":
        return getI18nString("inspect_panel.node_type.line");
      case "ELLIPSE":
        return getI18nString("inspect_panel.node_type.ellipse");
      case "RECTANGLE":
      case "ROUNDED_RECTANGLE":
        return getI18nString("inspect_panel.node_type.rectangle");
      case "REGULAR_POLYGON":
        return getI18nString("inspect_panel.node_type.polygon");
      case "TEXT":
        return getI18nString("inspect_panel.node_type.text");
      case "SLICE":
        return getI18nString("inspect_panel.node_type.slice");
      case "GROUP":
      case "FRAME":
        if (isComponentSet) return getI18nString("inspect_panel.node_type.main_component_set");
        if (isAutoLayout) return getI18nString("inspect_panel.node_type.frame_auto_layout");
        if (resizeToFit) return getI18nString("inspect_panel.node_type.group");
        return getI18nString("inspect_panel.node_type.frame");
      case "SYMBOL":
        return isVariant ? getI18nString("inspect_panel.node_type.main_variant") : getI18nString("inspect_panel.node_type.main_component");
      case "INSTANCE":
        if (d) return getI18nString("inspect_panel.node_type.instance_with_attribution", {
          libraryName: d
        });
        return getI18nString("inspect_panel.node_type.instance");
      case "STICKY":
      case "SHAPE_WITH_TEXT":
      case "CONNECTOR":
      case "STAMP":
        return getI18nString("inspect_panel.node_type.figjam");
      case "SECTION":
        return getI18nString("inspect_panel.node_type.section");
      case "WIDGET":
        return getI18nString("inspect_panel.node_type.widget");
      case "CANVAS":
        return getI18nString("inspect_panel.node_type.page");
      case "TABLE":
        return getI18nString("inspect_panel.node_type.table");
    }
    return null;
  }();
  let {
    isReadyForDev,
    isCompleted,
    isSymbol
  } = useDeepEqualSceneValue((e, t) => {
    let n = e?.get(t ?? "");
    return {
      isReadyForDev: n?.hasReadyStatus,
      isCompleted: n?.hasCompletedStatus,
      isSymbol: n?.type === "SYMBOL" || n?.type === "INSTANCE" || n?.isStateGroup
    };
  }, t);
  let u = selectWithShallowEqual(e => e.mirror.appModel.activeCanvasEditModeType);
  if (!t) return null;
  if (isReadyForDev) return jsxs(Fragment, {
    children: [jsx(_$$O4, {
      className: tK
    }), jsx("span", {
      className: tX,
      children: renderI18nText("dev_handoff.status.ready_for_dev")
    })]
  });
  if (isCompleted) return jsxs(Fragment, {
    children: [jsx(_$$l, {
      className: tK
    }), jsx("span", {
      className: tX,
      children: renderI18nText("dev_handoff.status.completed")
    })]
  });
  let p = isSymbol || n;
  let h = n && !isSymbol ? getI18nString("inspect_panel.node_type_tooltip.detached_component") : void 0;
  return jsxs(Fragment, {
    children: [jsx(Bf, {
      className: p ? tU : tG,
      guid: t,
      editModeType: u,
      detachedInfo: o,
      useUI3Icon: !0,
      isCodeConnected: e
    }), jsx("span", {
      className: p ? "header--layerTypeSymbol--cMeH3 header--layerType--vaDds ellipsis--ellipsis--Tjyfa" : tX,
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": h,
      children: l
    })]
  });
}
function re() {
  let e = _$$uQ();
  let {
    name,
    showNameAsQuotedText
  } = useDeepEqualSceneValue((e, t) => {
    let n = e?.get(t ?? "");
    let a = n?.isState ? n?.parentNode : null;
    return {
      name: (a?.name || n?.name)?.trim(),
      showNameAsQuotedText: n?.type === "TEXT" && n?.name === n?.characters
    };
  }, e);
  let i = Cj(name);
  if (!e) return null;
  let o = name || getI18nString("fullscreen.layer_panel.layer");
  return jsx(ButtonPrimitive, {
    className: ek()(tV, {
      [tW]: !!name
    }),
    actionOnPointerDown: !0,
    onClick: i,
    "aria-label": getI18nString("dev_handoff.inspect_panel.copy_layer_name_aria", {
      layerName: o
    }),
    htmlAttributes: {
      "data-tooltip": getI18nString("dev_handoff.inspect_panel.copy_layer_name_aria", {
        layerName: o
      }),
      "data-tooltip-type": KindEnum.TEXT
    },
    children: jsx("span", {
      className: showNameAsQuotedText ? "header--quotedLayerNameWrapper--J18fR" : tH,
      children: o
    })
  });
}
function rt() {
  let e = _$$uQ();
  let t = _$$dh();
  let n = useDeepEqualSceneValue((e, t) => e.get(t)?.name?.trim(), t);
  let i = Cj(n);
  if (e) return null;
  let o = n || getI18nString("inspect_panel.node_type.page");
  return jsx(ButtonPrimitive, {
    className: ek()(tV, {
      [tW]: !!n
    }),
    actionOnPointerDown: !0,
    onClick: i,
    "aria-label": getI18nString("dev_handoff.inspect_panel.copy_page_name_aria", {
      pageName: o
    }),
    htmlAttributes: {
      "data-tooltip": getI18nString("dev_handoff.inspect_panel.copy_page_name_aria", {
        pageName: o
      }),
      "data-tooltip-type": KindEnum.TEXT
    },
    children: jsx("span", {
      className: tH,
      children: o
    })
  });
}
function rn() {
  let e = _$$dh();
  let t = selectWithShallowEqual(e => e.mirror.appModel.activeCanvasEditModeType);
  return jsx(Bf, {
    className: tG,
    guid: e,
    editModeType: t,
    useUI3Icon: !0
  });
}
function ra() {
  let e = _$$uQ();
  let t = useDeepEqualSceneValue((e, t) => {
    let n = e?.get(t ?? "");
    return n?.hyperlink && "mixed" !== n.hyperlink && n?.hyperlink?.type === "URL" ? n.hyperlink.value : void 0;
  }, e);
  let n = Cj(t);
  return t ? jsx("div", {
    className: "header--linkButtonContainer--ul-r- ellipsis--ellipsis--Tjyfa",
    children: jsx(Button, {
      variant: "ghost",
      onClick: n,
      iconPrefix: jsx("div", {
        className: "header--linkIconContainer--nZZXq",
        children: jsx(_$$r4, {})
      }),
      "aria-label": getI18nString("dev_handoff.link.copy_aria_label", {
        link: t
      }),
      htmlAttributes: {
        "data-tooltip": getI18nString("dev_handoff.link.copy_tooltip"),
        "data-tooltip-type": KindEnum.TEXT
      },
      children: t
    })
  }) : null;
}
function ri(e) {
  let t = _$$uQ();
  let {
    getMaybeEnabledItem
  } = _$$n8();
  return t ? jsx(VZ, {
    recordingKey: "layerName",
    formattedHeader: jsxs("div", {
      className: tz,
      children: [jsx(re, {}), jsxs("div", {
        className: ek()(tB, tF),
        children: [jsx(sO, {}), Te().filter(getMaybeEnabledItem).map(e => jsx(QE, {
          item: e,
          numUnreadComments: 0,
          recordingKey: "toolbarView"
        }, e.reactKey ?? e.action)), jsx(s3, {})]
      })]
    }),
    children: jsxs("div", {
      className: tD,
      children: [jsxs("div", {
        className: tO,
        children: [jsx("div", {
          className: tM,
          children: jsx(s9, {
            hasCodeConnect: !!e.hasCodeConnect
          })
        }), jsx(ra, {})]
      }), jsx(s6, {}), jsx(sy, {
        noBorder: !0,
        gapBetweenRows: !0
      })]
    })
  }) : jsx(VZ, {
    recordingKey: "layerName",
    formattedHeader: jsxs("div", {
      className: tz,
      children: [jsx(rt, {}), jsx("div", {
        className: ek()(tB, tF),
        children: jsx(s3, {})
      })]
    }),
    children: jsxs("div", {
      className: tD,
      children: [jsx("div", {
        className: tO,
        children: jsxs("div", {
          className: tM,
          children: [jsx(rn, {}), jsx("span", {
            className: tX,
            children: renderI18nText("inspect_panel.node_type.page")
          })]
        })
      }), jsx(sy, {
        noBorder: !0,
        gapBetweenRows: !0
      })]
    })
  });
}
let rd = parsePxNumber(KAq);
let rc = parsePxNumber(tUy);
function ru(e, t, n) {
  let a = [];
  let i = [t];
  for (; i.length > 0;) {
    let o = i.pop();
    let l = e.get(o);
    if (l && (o === t || n(l))) for (let e of (a.push(o), l?.childrenGuids ?? [])) i.push(e);
  }
  return a;
}
function rp(e) {
  return !!e && e.isAlive && "INSTANCE" !== e.type && !vY(HandoffBindingsCpp?.getAssetInfo(e.guid), !0);
}
let rh = atom([]);
function rf({
  inspectableRootNodeId: e,
  page: t,
  didSelectRow: n,
  hideHeader: s = !1
}) {
  let d = useDispatch();
  let c = useSceneGraphSelector();
  let u = _$$uQ();
  let p = NM();
  let h = e || t;
  let [f, g] = useState(() => 0 === Fullscreen.nodeStatusesOnPage(t).length || s);
  let [x, m] = useAtomValueAndSetter(rh);
  useEffect(() => {
    g(0 === Fullscreen.nodeStatusesOnPage(t).length);
  }, [t]);
  let _ = useCallback(() => {
    m(() => [h]);
  }, [m, h]);
  let v = useCallback(e => {
    m(t => [...t, ...ru(c, e, rp)]);
  }, [c, m]);
  let b = useCallback((e, t) => m(n => n.includes(t) ? n.filter(e => e !== t) : e.altKey ? [...n, t, ...ru(c, t, rp)] : [...n, t]), [c, m]);
  let j = useCallback(e => x.includes(e), [x]);
  let w = function (e, t) {
    let n = useSceneGraphSelector();
    return useMemo(() => {
      let a = [];
      if (t) {
        let i = n.get(t)?.parentGuid;
        for (; i && i !== e;) {
          a.push(i);
          i = n.get(i)?.parentGuid;
        }
      }
      a.push(e);
      return a;
    }, [n, e, t]);
  }(h, u ?? "");
  useEffect(() => {
    m(e => [...e, ...w]);
  }, [w, m]);
  let N = useCallback((e, t) => {
    e.stopPropagation();
    e.preventDefault();
    let {
      clientX,
      clientY
    } = e;
    d(showDropdownThunk({
      type: _$$i,
      data: {
        clientX,
        clientY,
        guid: t,
        expandElement: () => v(t)
      }
    }));
  }, [d, v]);
  let k = useSceneGraphSelection();
  let A = useMemo(() => {
    let t = s ? [] : ["header"];
    return f || e || p ? [...t, ...function e(t, n, a, i, o, s, r, d) {
      let c = n.get(t);
      if (!c) return [];
      let u = t in a;
      let p = d ? void 0 : HandoffBindingsCpp?.getAssetInfo(t);
      let h = vY(p, !0);
      let f = {
        nodeId: t,
        indentation: o,
        isSelected: u,
        isAncestorSelected: s,
        isAncestorAsset: d,
        isRoot: r,
        assetInfo: h ? p : void 0
      };
      if (!i(t)) return [f];
      let g = "CANVAS" === c.type;
      let x = c.childrenGuids.flatMap(t => e(t, n, a, i, o + (g ? 0 : 1), s || u, !1, d || h));
      return g ? x : [f, ...x];
    }(h, c, k, j, 0, !1, !0)] : t;
  }, [e, j, f, h, c, k, p, s]);
  let I = useRef(null);
  let E = _$$Te({
    count: A.length,
    getScrollElement: () => I.current,
    estimateSize: e => 0 !== e || s ? rd : rc,
    overscan: 10
  });
  let C = useLatestRef(u);
  useEffect(() => {
    if (C === u) return;
    let e = A.findIndex(e => e.nodeId === u);
    e && (E.range.startIndex > e || E.range.endIndex < e) && E.scrollToIndex(e);
  }, [A, u, E, C]);
  return jsx("div", {
    ref: I,
    style: {
      height: "100%",
      overflowY: "auto",
      overflowX: "hidden"
    },
    "data-testid": "devHandoffLayersPanel",
    children: jsx("div", {
      style: {
        height: `${E.getTotalSize()}px`,
        width: "100%",
        position: "relative"
      },
      children: E.getVirtualItems().map(t => {
        let i = A[t.index];
        return jsx("div", {
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: `${t.size}px`,
            transform: `translateY(${t.start}px)`
          },
          children: "header" === i ? jsx(rg, {
            forceExpanded: !!e || !!p,
            isExpanded: f,
            setIsExpanded: g,
            collapseAllLayers: _
          }) : jsx(O5, {
            assetInfo: i?.assetInfo,
            didSelectRow: n,
            guid: i.nodeId,
            indentation: i.indentation,
            isAncestorAsset: i?.isAncestorAsset,
            isAncestorSelected: i.isAncestorSelected,
            isExpanded: j,
            isRoot: i.isRoot,
            isSelected: i.isSelected,
            openContextMenu: N,
            toggleExpanded: b
          }, i.nodeId)
        }, t.key);
      })
    })
  });
}
function rg({
  isExpanded: e,
  forceExpanded: t,
  setIsExpanded: n,
  collapseAllLayers: i
}) {
  let o = [{
    displayText: getI18nString("dev_handoff.layers.collapse_all_layers"),
    callback: () => i()
  }];
  let l = `devHandoffNodesPanel.caret.${t ? "forcedExpanded" : e ? "expanded" : "collapsed"}`;
  return jsxs("div", {
    className: "dev_handoff_layers_panel--layersListHeader--gQFn- text--fontPos11--2LvXf text--_fontBase--QdLsd",
    children: [jsx(ButtonPrimitive, {
      className: "dev_handoff_layers_panel--layersListHeaderButton--MlUHF",
      onClick: () => !t && n(!e),
      actionOnPointerDown: !0,
      children: jsxs("div", {
        className: "dev_handoff_layers_panel--layersListHeaderButtonContent--qRCB5",
        children: [jsx("span", {
          className: t ? "dev_handoff_layers_panel--hideCaret--JgPdQ" : void 0,
          "data-testid": l,
          children: jsx(_$$g, {
            isExpanded: e
          })
        }), jsx("div", {
          className: "dev_handoff_layers_panel--layersTitle--sU99L ellipsis--ellipsis--Tjyfa",
          children: renderI18nText("dev_handoff.tag.layers")
        })]
      })
    }), (e || t) && jsx(_$$U3, {
      dropdownItems: o
    })]
  });
}
let ry = parsePxNumber(LDP);
let rb = parsePxNumber(Rv9);
let rj = parsePxNumber(tUy);
let rw = atom([]);
function rN(e) {
  let {
    guid,
    hasChildren,
    isExpanded,
    toggleExpand,
    isSelected,
    nameOverride,
    hideSectionIcon
  } = e;
  let p = getObservableOrFallback(EditorPreferencesApi().showGuids);
  let h = useDeepEqualSceneValue((e, t) => {
    let n = e.get(t);
    return n ? {
      guid: n.guid,
      name: n.name,
      isStateGroup: n.isStateGroup
    } : null;
  }, guid);
  let f = h?.name;
  let g = nameOverride ?? f;
  let x = h?.guid;
  let m = h?.isStateGroup;
  let v = useHandleMouseEvent(`devHandoffNodesPanel-targetIcon-${f}`, "click", e => {
    _$$S("sections_frames_list");
    HandoffBindingsCpp.selectAndFocusOnNode(guid, !0);
  });
  let y = useHandleMouseEvent(`devHandoffNodesPanel-${f}`, "click", e => {
    e.stopPropagation();
    toggleExpand?.();
  });
  let b = useDispatch();
  let j = useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
    let {
      clientX,
      clientY
    } = e;
    x && b(showDropdownThunk({
      type: _$$i,
      data: {
        clientX,
        clientY,
        guid: x
      }
    }));
  }, [b, x]);
  if (!x) return null;
  let w = ek()("dev_handoff_nodes_panel--expandCaret--EdbSv", {
    "dev_handoff_nodes_panel--expandCaretNoIcon--VTPwj": hideSectionIcon
  });
  return jsxs("div", {
    className: ek()("dev_handoff_nodes_panel--sectionHeader--qDUGd", isSelected ? sX : sK),
    onMouseDown: v,
    onContextMenu: j,
    role: "button",
    tabIndex: 0,
    "data-fullscreen-intercept": !0,
    children: [hasChildren ? jsx(SvgComponent, {
      className: w,
      svg: isExpanded ? _$$A : _$$A17,
      onMouseDown: y
    }) : jsx("div", {
      className: w
    }), !hideSectionIcon && jsx(Bf, {
      className: ek()("dev_handoff_nodes_panel--layerIcon--aZvoO", {
        "dev_handoff_nodes_panel--symbolLayerIcon--D0Mch dev_handoff_nodes_panel--layerIcon--aZvoO": m
      }),
      guid: x
    }), jsx("div", {
      className: ek()("dev_handoff_nodes_panel--sectionName--qx-3z text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa", {
        "dev_handoff_nodes_panel--symbolName--IoUUt dev_handoff_nodes_panel--sectionName--qx-3z text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa": m
      }),
      children: p ? `${g} (${guid})` : g
    })]
  });
}
let rk = memo(function (e) {
  let {
    guid,
    isSelected,
    onClick
  } = e;
  let d = getObservableOrFallback(EditorPreferencesApi().showGuids);
  let [c, u] = useState(!1);
  let p = function (e) {
    _$$uQ();
    let t = selectWithShallowEqual(e => !hasSingleSceneGraphSelection(e));
    return n => updateHoveredNode(n && t ? e : "");
  }(guid);
  let h = useAtomWithSubscription(_$$d7);
  let f = rA(guid);
  let g = E1();
  let _ = _$$ei(guid);
  let v = _$$L(guid, g, h);
  let b = useMemo(() => _ ? dayjs(_.lastEditedAt).fromNow() : "", [_]);
  let j = getObservableOrFallback(AppStateTsApi.devHandoffState().focusAnimationIsRunning);
  let {
    width = 0,
    height = 0
  } = f ?? {};
  let k = width > 2.5 * height;
  let I = height > 2.5 * width;
  let E = width < 1 || height < 1 ? {
    width: 0,
    height: 0
  } : k ? {
    height: 80,
    width: width / height * 80
  } : I ? {
    width: 48,
    height: height / width * 48
  } : {
    width: 48,
    height: 80
  };
  let C = yh({
    nodeId: guid,
    width: 2 * E.width,
    height: 2 * E.height,
    version: _?.lastEditedAt ?? "-",
    reason: "dev_handoff_nodes_panel.thumbnail",
    shouldSkip: j,
    regenerateAfterImagesLoaded: !0
  });
  let T = useHandleMouseEvent(`devHandoffNodesPanel-${f?.name ?? ""}`, "click", e => {
    _$$S("sections_frames_list");
    HandoffBindingsCpp.selectAndFocusOnNode(guid, !0);
    e?.currentTarget?.blur();
    onClick?.(e);
  });
  let S = useDispatch();
  let P = useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
    let {
      clientX,
      clientY
    } = e;
    S(showDropdownThunk({
      type: _$$i,
      data: {
        clientX,
        clientY,
        guid
      }
    }));
  }, [S, guid]);
  if (!f) return null;
  let L = e => {
    u(e);
    p(e);
  };
  let R = _?.lastEditedAt;
  let D = C ? {
    backgroundColor: e.thumbnailBackgroundColor
  } : void 0;
  return jsxs(ButtonPrimitive, {
    className: ek()(isSelected ? sX : sK, "dev_handoff_nodes_panel--itemWithThumbnail--t0s4E"),
    onClick: T,
    htmlAttributes: {
      onContextMenu: P,
      onMouseEnter: () => L(!0),
      onMouseLeave: () => L(!1),
      "data-fullscreen-intercept": !0
    },
    children: [jsx("div", {
      className: "dev_handoff_nodes_panel--thumbnailContainer--y8uEp",
      style: D,
      children: C && jsx("img", {
        src: C.src,
        className: ek()("dev_handoff_nodes_panel--thumbnailImg--yRcCn", k && "dev_handoff_nodes_panel--thumbnailImgLong--5eP8l", I && "dev_handoff_nodes_panel--thumbnailImgTall--iJO4k"),
        alt: getI18nString("dev_handoff.nodes_panel.thumbnail_alt_text")
      })
    }), jsx(ScreenReaderOnly, {
      children: "\xa0"
    }), jsx("div", {
      className: "dev_handoff_nodes_panel--nodeNameAndTimestampContainer--egq48 text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: jsxs("div", {
        className: "dev_handoff_nodes_panel--nodeNameAndTimestamp--HcL87",
        children: [jsx("div", {
          className: "dev_handoff_nodes_panel--nodeName--5SQVr ellipsis--ellipsis--Tjyfa",
          children: d ? `${f.name} (${guid})` : f.name
        }), R ? jsxs("div", {
          className: "dev_handoff_nodes_panel--tlfPanelTimestampContainer---u-Ju",
          children: [jsx(s0, {
            state: v,
            backgroundState: isSelected ? "selected" : c ? "hovered" : null
          }), jsx("div", {
            className: "dev_handoff_nodes_panel--editedTimestamp--nShNo",
            children: _?.createdAt && (v === Uy.RECENTLY_CREATED || _.createdAt === _.lastEditedAt) ? jsx("span", {
              className: sJ,
              children: renderI18nText("dev_handoff.nodes_panel.created", {
                at: b
              })
            }) : jsx("span", {
              className: sJ,
              children: renderI18nText("dev_handoff.nodes_panel.edited", {
                at: b
              })
            })
          })]
        }) : f.isSymbol && jsxs("div", {
          className: "dev_handoff_nodes_panel--timestampContainer--dGH49",
          children: [jsx(Bf, {
            className: tU,
            guid
          }), jsx("span", {
            className: "dev_handoff_nodes_panel--layerTypeSymbol--BuyoH text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa",
            children: f.type
          })]
        })]
      })
    })]
  });
});
let rA = e => $y((e, t) => {
  let n = Zl(e, t);
  if (!n) return null;
  let a = n.isState ? n.parentNode : null;
  let i = a?.name || n.name;
  return {
    id: n.guid,
    name: i,
    width: n.size.x,
    height: n.size.y,
    type: n.isStateGroup ? getI18nString("inspect_panel.node_type.main_component_set") : n.isState ? getI18nString("inspect_panel.node_type.main_variant") : "SYMBOL" === n.type ? getI18nString("inspect_panel.node_type.main_component") : "INSTANCE" === n.type ? getI18nString("inspect_panel.node_type.instance") : void 0,
    isSymbol: n.isStateGroup || "SYMBOL" === n.type || "INSTANCE" === n.type
  };
}, e);
function rI({
  items: e,
  selectedNodeId: t,
  inReadySectionTopLevelNodeId: n,
  onRowClick: o
}) {
  let l = useRef(null);
  let s = e.length > 0;
  let [d, c] = useAtomValueAndSetter(rw);
  let u = function () {
    let {
      currentPage
    } = selectWithShallowEqual(e => ({
      currentPage: e.mirror.appModel.currentPage
    }));
    let t = useDeepEqualSceneValue((e, t) => e.get(t)?.backgroundColor, currentPage);
    return t ? colorCSSManipulatorInstance.format(t) : "var(--color-bg)";
  }();
  let [p, h] = useState(!0);
  let f = useMemo(() => Math.min(e.length * ry, 400) + 7, [e.length]);
  let [g, m] = useLocalStorageSync("ready-panel-height-storage-key", f);
  let v = s ? `calc(max(${ry}px, min(60%, ${g}px)))` : "fit-content";
  useEffect(() => {
    if (!t) return;
    let n = e.find(e => e.childNodeIds.includes(t))?.guid;
    n && c(e => e.includes(n) ? e.filter(e => e !== n) : e);
  }, [e, t, c]);
  let y = useMemo(() => {
    let t = !1;
    return [...e.flatMap(e => {
      if (e.isSection) {
        let n = d.includes(e.guid);
        n || (t = !0);
        return [{
          type: "section",
          sectionId: e.guid,
          displayName: e.sectionNames.fill("...", 1, -1).join(" / "),
          hasChildren: e.childNodeIds.length > 0
        }, ...(n ? [] : e.childNodeIds.map(e => ({
          type: "node",
          nodeId: e
        })))];
      }
      return t ? (t = !1, [{
        type: "divider"
      }, {
        type: "node",
        nodeId: e.guid
      }]) : {
        type: "node",
        nodeId: e.guid
      };
    })];
  }, [d, e]);
  let b = useMemo(() => {
    let e = [];
    y.forEach((t, n) => {
      "section" === t.type && e.push(n);
    });
    return e;
  }, [y]);
  let j = useRef();
  let w = e => j.current === e;
  let N = useRef(null);
  let k = _$$Te({
    count: y.length,
    estimateSize: e => {
      let t = y[e].type;
      return "node" === t ? ry : "header" === t ? rj : "divider" === t ? 16 : rb;
    },
    getScrollElement: () => N.current,
    overscan: 10,
    rangeExtractor: useCallback(e => (j.current = [...b].reverse().find(t => e.startIndex >= t), j.current) ? [...new Set([j.current, ...vp(e)])].sort((e, t) => e - t) : vp(e), [b])
  });
  let A = jsx("div", {
    className: "dev_handoff_nodes_panel--panelTitle--wcEcM",
    style: {
      padding: 0
    },
    children: renderI18nText("dev_handoff.tag.ready_for_development")
  });
  useEffect(() => {
    let e = y.findIndex(e => "node" === e.type && n === e.nodeId);
    -1 !== e && k.scrollToIndex(e);
  }, [y, n, k]);
  let I = useCallback(e => m(t => t + e.y), [m]);
  let E = useCallback(() => m(l.current.clientHeight), [m]);
  let C = useCallback(() => m(f), [m, f]);
  return jsxs(Fragment, {
    children: [jsx(ButtonPrimitive, {
      className: ek()(RE, "dev_handoff_nodes_panel--focusVisible--KtjCp"),
      "aria-label": getI18nString("dev_handoff.tag.ready_for_development"),
      onClick: () => h(e => !e),
      children: jsxs("div", {
        className: Pz,
        children: [jsx(_$$g, {
          isExpanded: p
        }), A]
      })
    }), jsx(oe, {
      edge: "bottom",
      size: {
        height: p ? v : 0
      },
      onSizeChanged: I,
      onStateChanged: E,
      onReset: C,
      forwardedRef: l,
      disabled: !s,
      children: p && jsx("div", {
        "data-testid": "devHandoffNodesPanel.readyList",
        style: {
          height: "100%",
          overflow: "auto"
        },
        ref: N,
        children: s ? jsx("div", {
          style: {
            height: `${k.getTotalSize()}px`,
            width: "100%",
            position: "relative"
          },
          children: k.getVirtualItems().map(e => {
            let i;
            let l = y[e.index];
            i = "header" === l.type ? A : "divider" === l.type ? jsx("div", {
              className: "dev_handoff_nodes_panel--readyNodesDivider--QAmcF"
            }) : "section" === l.type ? jsx(rN, {
              guid: l.sectionId,
              hideSectionIcon: !0,
              hasChildren: l.hasChildren,
              isExpanded: !d.includes(l.sectionId),
              toggleExpand: () => {
                c(e => e.includes(l.sectionId) ? e.filter(e => e !== l.sectionId) : [...e, l.sectionId]);
              },
              isSelected: t === l.sectionId,
              nameOverride: l.displayName
            }) : jsx(rk, {
              guid: l.nodeId,
              thumbnailBackgroundColor: u,
              isSelected: n === l.nodeId,
              onClick: o
            });
            return jsx("div", {
              style: {
                ...("section" === l.type ? {
                  zIndex: 1
                } : {}),
                ...(w(e.index) ? {
                  position: "sticky"
                } : {
                  position: "absolute",
                  transform: `translateY(${e.start}px)`
                }),
                top: 0,
                left: 0,
                width: "100%",
                height: `${e.size}px`
              },
              children: i
            }, e.key);
          })
        }) : jsx(rC, {})
      })
    })]
  });
}
function rE() {
  return _$$s4() ? jsx(Button, {
    variant: "secondary",
    iconPrefix: jsx(_$$A11, {}),
    onClick: () => fullscreenValue.triggerAction("add-selection-ready-status"),
    children: renderI18nText("fullscreen_actions.ready-status-add")
  }) : null;
}
function rC() {
  let e = useAppModelProperty("isSceneReadOnly");
  let t = _$$s4();
  return e ? jsxs("div", {
    className: sQ,
    children: [jsx(i1, {
      className: sq
    }), jsx("div", {
      className: sY,
      children: renderI18nText("dev_handoff.tag.ready_for_development.content_view_only")
    })]
  }) : jsx("div", {
    className: sQ,
    children: t ? jsx(rE, {}) : jsxs(Fragment, {
      children: [jsx(i1, {
        className: sq
      }), jsx("div", {
        className: sY,
        children: renderI18nText("dev_handoff.status.ready_for_development.content")
      })]
    })
  });
}
function rT(e, t) {
  let n = useRef(!1);
  let a = useCallback(e => {
    e !== t && (n.current = !0);
  }, [t]);
  let {
    inspectableRootNodeId
  } = rS(e, t);
  let l = useRef(null);
  let s = useMemo(() => t && n.current ? (n.current = !1, l.current) : inspectableRootNodeId, [t]);
  l.current = s;
  return {
    inspectableRootNodeId: s,
    didSelectRow: a
  };
}
function rS(e, t) {
  let n = useMemo(() => {
    let e = t ? HandoffBindingsCpp.getInReadySectionTopLevelNodeId(t) : null;
    return e && e !== defaultSessionLocalIDString ? e : null;
  }, [t]);
  let a = useDeepEqualSceneValue((e, t, n) => {
    let a = null;
    if (n ? a = n : t === defaultSessionLocalIDString || HandoffBindingsCpp.isNodePanelSection(t) || (a = t), a) {
      let t = e.get(a);
      (!t || q1.includes(t.type)) && (a = null);
    }
    return a;
  }, e, n);
  let o = useDevModeFocusId();
  return o ? {
    inspectableRootNodeId: o,
    inReadySectionTopLevelNodeId: null
  } : {
    inspectableRootNodeId: a,
    inReadySectionTopLevelNodeId: n
  };
}
function rP({
  onRowClick: e,
  inspectableRootNodeId: t,
  didSelectRow: n
}) {
  let i = getObservableOrFallback(AppStateTsApi.devHandoffState().currentNodeId);
  let o = _$$uQ();
  let s = getObservableOrFallback(AppStateTsApi.devHandoffState().readySectionItems);
  let {
    currentPage
  } = selectWithShallowEqual(e => ({
    currentPage: e.mirror.appModel.currentPage
  }));
  let {
    inReadySectionTopLevelNodeId
  } = rS(i, o);
  return jsxs("div", {
    className: "dev_handoff_nodes_panel--nodesListPanels--ceR3Z",
    "data-testid": "devHandoffNodesList",
    children: [jsx(rI, {
      items: s || [],
      selectedNodeId: o,
      inReadySectionTopLevelNodeId,
      onRowClick: e
    }), jsx(rf, {
      inspectableRootNodeId: t,
      didSelectRow: n,
      page: currentPage
    })]
  });
}
let rL = memo(() => {
  let e = getObservableOrFallback(AppStateTsApi.devHandoffState().currentNodeId);
  let t = useIsFullscreenOverview();
  let n = !!useDevModeFocusId() && !t;
  let {
    inspectableRootNodeId,
    didSelectRow
  } = rT(e, _$$uQ());
  let r = useSelector(e => Object.keys(e.mirror.sceneGraphSelection).length > 0);
  useSingleEffect(() => {
    let e = globalPerfTimer.tryStop("switch_to_inspect_mode.left_panel_tti");
    e && trackEventAnalytics("switch_to_inspect_mode.left_panel_tti", {
      elapsedMs: e,
      isNodeSelected: r
    }, {
      forwardToDatadog: !0
    });
  });
  return jsxs("div", {
    className: ek()(Dm, "dev_handoff_nodes_panel--nodesPanel--4Pea0"),
    children: [!n && jsx(_$$o, {}), !t && jsx(rP, {
      inspectableRootNodeId,
      didSelectRow
    })]
  });
});
function rO() {
  return jsx("div", {
    className: cssBuilderInstance.flex.flexRow.m16.$,
    children: jsx("div", {
      className: cssBuilderInstance.font11.$,
      children: renderI18nText("fullscreen.properties_panel.this_file_s_editor_has_disabled_exporting_copying_and_sharing.seat_rename")
    })
  });
}
function rX() {
  let {
    setCurrentView,
    currentPluginView
  } = function () {
    let e = Xr(initialViewAtom);
    let [t, n] = useAtomValueAndSetter(defaultViewAtom);
    let a = useResetAtom(defaultViewAtom);
    let o = useCallback(() => {
      e(t);
    }, [t, e]);
    let l = useCallback(({
      newView: e
    }) => {
      e && t !== e && (o(), n(e));
    }, [t, n, o]);
    useEffect(() => {
      o();
    }, [o]);
    useEffect(() => () => {
      a();
    }, [a]);
    return useMemo(() => ({
      currentPluginView: t,
      setCurrentView: l
    }), [t, l]);
  }();
  let n = useDispatch();
  let l = useMemo(() => ({
    activeTab: SimpleComponentType.PLUGIN,
    viewResource: e => {
      n(setUniversalInsertViewResourceDetails({
        fdPreviewResource: e
      }));
    },
    closeResource: () => {
      n(setUniversalInsertViewResourceDetails({
        fdPreviewResource: void 0
      }));
    },
    setCurrentViewOrTab: setCurrentView,
    currentView: currentPluginView,
    closeModal: () => {},
    pinModal: () => {}
  }), [n, setCurrentView, currentPluginView]);
  return jsx(AutoLayout, {
    direction: "vertical",
    spacing: 0,
    height: "fill-parent",
    children: jsx(B0.Provider, {
      value: l,
      children: jsx(_$$z5, {})
    })
  });
}
function rJ() {
  let e = useSelector(e => e.mirror.appModel.currentTool === _$$ec.tool);
  let t = selectIsExportRestricted();
  let n = getDevHandoffInspectSplitPosition();
  let s = useAtomWithSubscription(_$$d8);
  let d = "LOADING" === s;
  let c = "RUNNING" === s;
  let u = getObservableValue(getSelectedDevModePropertiesPanelTab(), IAssertResource.PRIMARY) === IAssertResource.PLUGIN && !e;
  let p = useDispatch();
  useEffect(() => p(_$$aq()), [p]);
  useEffect(() => {
    let e = PluginUIManager.getInstance();
    c && e && (u ? e.hideProgress() : e.showProgress({
      isBackground: !0
    }));
  }, [c, u]);
  let h = c && u ? {
    height: "calc(100% - 80px)",
    paddingBottom: 80
  } : {
    display: "none"
  };
  return jsx("div", {
    className: cssBuilderInstance.hFull.wFull.if(u, cssBuilderInstance.block, cssBuilderInstance.hidden).$,
    "data-testid": "devHandoffPluginPanel",
    children: t ? jsx(rO, {}) : jsxs(Fragment, {
      children: [d && jsx(rq, {}), jsx("div", {
        style: h,
        "data-testid": "pluginPanelContainer",
        children: jsx(PluginSandbox, {
          iframeId: PluginIframeMode.INSPECT,
          width: n,
          fillParent: !0
        })
      }), !d && !c && jsx(rX, {})]
    })
  });
}
let rQ = memo(function (e) {
  return jsx(Tabs.TabPanel, {
    ...e.tabProps,
    forceMount: !0,
    height: "fill",
    children: jsx(rJ, {})
  });
});
function rq() {
  let e = useAtomWithSubscription(be);
  return e ? jsx(AutoLayout, {
    direction: "vertical",
    verticalAlignItems: "center",
    horizontalAlignItems: "center",
    children: jsxs(Fragment, {
      children: [jsx("span", {
        style: styleBuilderInstance.add({
          boxSizing: "content-box",
          margin: "-20px auto",
          opacity: "0.3"
        }).$,
        children: jsx(y$, {})
      }), jsx("div", {
        className: cssBuilderInstance.pt16.px32.alignCenter.$,
        children: jsx(TextWithTruncation, {
          fontSize: 12,
          color: "secondary",
          children: renderI18nText("dev_handoff.loading_plugin", {
            pluginName: e?.name
          })
        })
      })]
    })
  }) : null;
}
function rY({
  side: e
}) {
  let t = getObservableOrFallback(EditorPreferencesApi().renderRulers);
  let n = useCanAccessFullDevMode();
  let i = useIsFullscreenOverview();
  let o = !!useDevModeFocusId() && n;
  return t || i || o ? null : jsx("div", {
    className: ek()("panel_background_gradient--gradient--xXM2u", {
      "panel_background_gradient--left--MwVhL": "left" === e,
      "panel_background_gradient--right--h-8ut": "right" === e
    })
  });
}
let r5 = {
  [IAssertResource.PRIMARY]: "primary",
  [IAssertResource.PLUGIN]: "plugin",
  [IAssertResource.STRING_MANAGEMENT]: "string_management",
  [IAssertResource.PROPERTIES]: "properties",
  [IAssertResource.COMPONENT]: "component",
  [IAssertResource.DEV_RESOURCES]: "dev_resources",
  [IAssertResource.ASSETS]: "assets"
};
let r3 = {
  primary: IAssertResource.PRIMARY,
  plugin: IAssertResource.PLUGIN,
  string_management: IAssertResource.STRING_MANAGEMENT,
  properties: IAssertResource.PROPERTIES,
  component: IAssertResource.COMPONENT,
  dev_resources: IAssertResource.DEV_RESOURCES,
  assets: IAssertResource.ASSETS
};
function r4({
  plugin: e
}) {
  let t = useAtomWithSubscription(pluginTriggeredFromAtom);
  return jsx("div", {
    children: jsxs(AutoLayout, {
      width: "fill-parent",
      horizontalAlignItems: "space-between",
      verticalAlignItems: "center",
      padding: {
        left: 16,
        right: 8,
        top: 4,
        bottom: 4
      },
      children: [jsx("div", {
        className: cssBuilderInstance.minW0.$,
        children: jsxs(AutoLayout, {
          direction: "horizontal",
          verticalAlignItems: "center",
          spacing: 8,
          children: [jsx(PluginIconDisplay, {
            plugin: e
          }), jsx(TextWithTruncation, {
            fontWeight: "bold",
            truncate: !0,
            showTooltipWhenTruncated: !0,
            children: e.name
          })]
        })
      }), jsx(IconButton, {
        "aria-label": getI18nString("dev_handoff.plugin_panel.close_plugin"),
        onClick: () => {
          (function (e) {
            switch (e) {
              case "related-link-click":
              case "related-link-auth":
              case "codegen":
              case "related-link-preview":
              case "auto-run":
                return !0;
              default:
                return !1;
            }
          })(t) && setSelectedDevModePropertiesPanelTab(IAssertResource.PRIMARY);
          handlePluginError();
        },
        children: jsx(_$$A5, {})
      })]
    })
  });
}
function r7({
  text: e,
  isActive: t,
  onClick: n,
  recordingKey: i,
  isSingle: o
}) {
  return jsx(ButtonPrimitive, {
    recordingKey: generateRecordingKey(i, "tab"),
    onClick: n,
    actionOnPointerDown: !0,
    className: o ? "dev_handoff_panel_tab_group--tabsHeaderSingle--G5OnU dev_handoff_panel_tab_group--tabFocus--f8Y7h" : t ? "dev_handoff_panel_tab_group--tabActive--Ex7NX legacy_pages_panel--tabActive--hmo0j legacy_pages_panel--tab--inhND dev_handoff_panel_tab_group--tabFocus--f8Y7h" : "dev_handoff_panel_tab_group--tab--Y0iYX legacy_pages_panel--tab--inhND dev_handoff_panel_tab_group--tabFocus--f8Y7h",
    htmlAttributes: {
      "data-label": e
    },
    children: e
  });
}
function r8(e) {
  return jsx("div", {
    className: cssBuilderInstance.wFull.bb1.bSolid.colorBorder.pl8.pb8.$,
    children: jsx(Tabs.TabStrip, {
      manager: e.tabProps.manager,
      children: jsx(Tabs.Tab, {
        ...e.tabProps,
        children: getI18nString("dev_handoff.tab.comment")
      })
    })
  });
}
function r6(e) {
  let {
    tabManager,
    tabPropsMap
  } = e;
  return jsxs("div", {
    className: A7,
    children: [jsx("div", {
      className: _$$tq,
      children: jsxs(Tabs.TabStrip, {
        manager: tabManager,
        children: [jsx(Tabs.Tab, {
          ...tabPropsMap[r5[IAssertResource.PRIMARY]],
          children: getI18nString("dev_handoff.tab.inspect")
        }), jsx(Tabs.Tab, {
          ...tabPropsMap[r5[IAssertResource.STRING_MANAGEMENT]],
          onboardingKey: _$$iA.STRINGS_TAB,
          children: getI18nString("dev_handoff.tab.string_management")
        }), jsx(Tabs.Tab, {
          ...tabPropsMap[r5[IAssertResource.PLUGIN]],
          children: getI18nString("dev_handoff.tab.plugins")
        })]
      })
    }), jsxs("div", {
      className: cssBuilderInstance.flex.$,
      children: [jsx("div", {
        className: "dev_handoff_panel_tab_group--pluginsContainer--V7X6w",
        children: jsx(qs, {})
      }), jsx("div", {
        className: wR,
        children: jsx(_$$H, {
          recordingKey: "propertiesPanel.zoomMenu"
        })
      })]
    })]
  });
}
function r9(e) {
  let t = useAtomWithSubscription(be);
  let n = getObservableValue(getSelectedDevModePropertiesPanelTab(), IAssertResource.PRIMARY);
  let {
    commentsActive,
    versionHistoryActive
  } = selectWithShallowEqual(e => ({
    commentsActive: e.mirror.appModel.currentTool === _$$ec.tool,
    versionHistoryActive: e.mirror.appModel.activeCanvasEditModeType === LayoutTabType.DEV_HANDOFF_HISTORY
  }));
  if (versionHistoryActive) return null;
  if (commentsActive) return jsx(r8, {
    tabProps: e.commentTabProps
  });
  let s = t && r5[n] === r5[IAssertResource.PLUGIN] ? jsx(r4, {
    plugin: t
  }) : null;
  return jsxs("div", {
    children: [jsx(r6, {
      tabPropsMap: e.generalTabPropsMap,
      tabManager: e.generalTabManager
    }), s]
  });
}
function de(e) {
  let t = useSelector(e => e.mirror.appModel.showUi);
  let n = _$$lz();
  let [l, d] = useAtomValueAndSetter(XI);
  let c = getObservableOrFallback(EditorPreferencesApi().renderRulers);
  let u = !!useDevModeFocusId();
  let p = _$$T();
  let h = _$$q() && !u;
  let {
    isPropertiesPanelCollapsed
  } = _$$iT();
  f = isPropertiesPanelCollapsed && !u;
  qn();
  let g = useCallback(() => {
    d(!0);
  }, [d]);
  let x = useCallback(e => {
    if (l) {
      let t = gY(window.innerWidth - e.clientX);
      t !== n && _$$xT(t);
    }
  }, [l, n]);
  let m = useCallback(() => {
    l && d(!1);
  }, [l, d]);
  useEffect(() => (document.addEventListener("mousemove", x), document.addEventListener("mouseup", m), () => {
    document.removeEventListener("mousemove", x);
    document.removeEventListener("mouseup", m);
  }));
  let _ = getFeatureFlags().properties_panel_resize_lag_fix;
  let v = !isPropertiesPanelCollapsed;
  let y = _ ? "dev_handoff_right_panel_container--drillDownContainer--vat3B properties_panel--drillDownContainer--VaNDa" : Lp;
  return jsxs(_$$V, {
    className: ek()(y, {
      [_$$dn]: isPropertiesPanelCollapsed,
      [Ph]: !h
    }),
    style: _ ? void 0 : {
      width: n
    },
    children: [v && jsx(rY, {
      side: "right"
    }), jsxs(wV, {
      "data-testid": "dev-handoff-right-panel",
      className: ek()(_$$ux, Dm, {
        [_$$ew]: c && !u,
        [Ph]: !h,
        [Jq]: !p
      }),
      size: _ ? void 0 : n,
      onResize: g,
      side: "left",
      children: [isPropertiesPanelCollapsed && jsx("div", {
        className: ek()(KE, _$$tM),
        children: jsx(v2, {})
      }), jsxs("div", {
        className: ek()(KE, {
          "dev_handoff_right_panel_container--panelContainerResizing--sfFQd dev_handoff_right_panel_container--panelContainerResizingBase--OZRr- dev_handoff_right_panel_container--panelContainer--XcbIk dev_handoff_right_panel_container--panelContainerBase--npHfL": l,
          "dev_handoff_right_panel_container--panelContainer--XcbIk dev_handoff_right_panel_container--panelContainerBase--npHfL": t,
          "dev_handoff_right_panel_container--panelContainerHidden--7-A2P dev_handoff_right_panel_container--panelContainer--XcbIk dev_handoff_right_panel_container--panelContainerBase--npHfL": !t || isPropertiesPanelCollapsed,
          [Ph]: !h
        }),
        children: [!isPropertiesPanelCollapsed && jsx(v2, {}), jsx(r9, {
          ...e.tabInfo
        }), jsx("div", {
          className: "dev_handoff_right_panel_container--content--HcUHi",
          children: e.children
        })]
      })]
    })]
  });
}
var dr = ds;
var dc = dd;
function dp({
  plugin: e
}) {
  return "first-party" !== v4().type ? null : jsx(df, {
    plugin: e,
    buttonText: getI18nString("dev_handoff.inspect_panel.close_plugin")
  });
}
function dh({
  plugin: e
}) {
  return "first-party" === v4().type ? null : jsx(df, {
    plugin: e,
    buttonText: getI18nString("dev_handoff.inspect_panel.generate_code")
  });
}
function df({
  plugin: e,
  buttonText: t
}) {
  return e ? jsx(VZ, {
    noPadding: !0,
    recordingKey: "pluginProgressPanel",
    children: jsxs(AutoLayout, {
      direction: "vertical",
      horizontalAlignItems: "center",
      padding: {
        top: 12,
        bottom: 12,
        left: 16,
        right: 16
      },
      spacing: 8,
      width: "fill-parent",
      children: [jsxs(AutoLayout, {
        direction: "horizontal",
        verticalAlignItems: "start",
        horizontalAlignItems: "center",
        spacing: 4,
        children: [jsx("div", {
          style: styleBuilderInstance.add({
            marginTop: "-3px"
          }).$,
          children: jsx(PluginIconDisplay, {
            plugin: e
          })
        }), jsx(TextWithTruncation, {
          fontFamily: "primary",
          children: renderI18nText("fullscreen.plugins.background", {
            plugin: jsx(TextWithTruncation, {
              fontWeight: "bold",
              children: e.name
            })
          })
        })]
      }), jsx(ButtonWide, {
        variant: "secondary",
        onClick: () => {
          handlePluginError();
        },
        recordingKey: "generateCodeButton",
        children: t
      })]
    })
  }) : null;
}
let dv = "code_extension_section--errorMessage--k0nfC";
let dy = "code_extension_section--sections--NwtSI";
let db = "code_extension_section--hideBorder--wBeyb";
let dj = "code_extension_section--paddedSections--qdAYL";
function dw({
  localCodeLanguage: e,
  overrideNodeId: t,
  hideLayoutCode: n,
  hideColorCode: o,
  hideHints: l,
  sectionClassName: s,
  emptyStateMessage: d,
  hideBorder: c,
  padded: u,
  dataTestId: p
}) {
  let h = selectIsCopyExportAllowed();
  let f = v4();
  let g = e ?? f;
  let x = useMemo(() => g.id === _$$uz && "first-party" === g.type ? {
    id: CodegenPlatform.CSS,
    type: "first-party"
  } : g, [g]);
  let m = useAtomWithSubscription(pluginIdAtom);
  let _ = useAtomWithSubscription(pluginTriggeredFromAtom);
  return h ? m && "codegen" !== _ && "first-party" !== x.type ? jsx(dh, {
    plugin: m
  }) : jsx(dN, {
    overrideNodeId: t,
    hideLayoutCode: n,
    hideColorCode: o,
    codegenPluginLanguage: x,
    sectionClassName: s,
    emptyStateMessage: d,
    hideBorder: c,
    padded: u,
    dataTestId: p,
    children: (e, t, n) => jsx(yT, {
      code: e,
      section: t,
      index: n,
      hideHints: l
    })
  }) : jsx("div", {
    className: dv,
    children: jsx(BannerInline, {
      children: jsx(BannerMessage, {
        children: renderI18nText("fullscreen.properties_panel.this_file_s_editor_has_disabled_exporting_copying_and_sharing.seat_rename")
      })
    })
  });
}
function dN({
  codegenPluginLanguage: e,
  children: t,
  overrideNodeId: n,
  hideLayoutCode: l,
  hideColorCode: s,
  sectionClassName: r,
  emptyStateMessage: d,
  hideBorder: c,
  padded: u,
  dataTestId: p
}) {
  let h = getUnitForLanguage();
  let f = getScaleFactor();
  let g = useSelector(e => Object.keys(e.mirror.sceneGraphSelection)[0]);
  let x = trackFileEventWithStore();
  let [m, _] = useState(!1);
  let v = n ?? g;
  let y = useCallback(t => {
    x("Dev Mode Code Section Clicked", {
      codeSection: t,
      languageType: e.type,
      languageId: e.id,
      unit: h,
      scaleFactor: f
    });
  }, [e.id, e.type, f, x, h]);
  let b = getCodeExtensionPreferences() || {};
  let j = QN();
  let w = "first-party" === e.type;
  let {
    code,
    error,
    isLoading,
    hasRun
  } = _$$K4({
    selectedNodeID: v,
    extensionLanguage: e,
    preferences: dc()(b, w ? {
      customSettings: {
        hideLayout: l ? "true" : "false",
        hideColor: s ? "true" : "false"
      }
    } : {}),
    plugin: j
  });
  let E = !!n;
  let C = useMemo(() => dr()(incrementCounter, 500), []);
  let T = useCallback(({
    id: e,
    regenerateCode: t
  }) => {
    e === v && (getCodegenHandler().nodeCache?.invalidate(e), t ? (C(), _(!1)) : _(!0));
  }, [v, C]);
  useEffect(() => (registerNodeChangeCallback(T), () => {
    unregisterNodeChangeCallback(T);
  }), [T]);
  useEffect(() => {
    E || _(!1);
  }, [E, v]);
  let S = useCallback(() => {
    _(!1);
    getCodegenHandler().rebuildNodeCache();
    incrementCounter();
  }, []);
  let L = function (e, t) {
    let [n, a] = useState(e);
    useEffect(() => {
      let t = null;
      e ? t = setTimeout(() => {
        a(!0);
      }, 200) : a(!1);
      return () => {
        null != t && clearTimeout(t);
      };
    }, [e, 200]);
    return n;
  }(isLoading, 200);
  let R = useRef(null);
  if (useEffect(() => {
    let e = e => {
      let t = window.getSelection();
      let n = t?.toString();
      let a = t?.anchorNode;
      n && a && R.current?.contains(a) && e.clipboardData && (e.preventDefault(), e.clipboardData.setData("text/plain", n));
    };
    document.addEventListener("copy", e);
    return () => {
      document.removeEventListener("copy", e);
    };
  }, []), useEffect(() => {
    error && console.error(error);
  }, [error]), !v) return null;
  let D = jsx("div", {
    className: dv,
    "data-testid": "dev-handoff-code-update-prompt",
    children: jsxs(BannerInline, {
      children: [jsx(BannerMessage, {
        title: renderI18nText("dev_handoff.code.update_prompt_title"),
        children: renderI18nText("dev_handoff.code.update_prompt")
      }), jsx(Button, {
        variant: "secondary",
        onClick: S,
        children: renderI18nText("dev_handoff.code.update_prompt_action")
      })]
    })
  });
  return !L && hasRun && error ? j ? jsx("div", {
    className: dv,
    "data-testid": "codegen-error-message",
    children: jsxs(BannerInline, {
      children: [jsx(BannerMessage, {
        title: renderI18nText("inspect_panel.code.error", {
          plugin: j.name ?? getI18nString("inspect_panel.code.error_this_plugin")
        }),
        children: renderI18nText("inspect_panel.code.error_details")
      }), jsx(_$$N3, {
        newTab: !0,
        trusted: !0,
        href: _$$ab(j.plugin_id),
        children: renderI18nText("inspect_panel.code.error_link")
      })]
    })
  }) : null : L ? jsx("div", {
    className: ek()(dy, c && db, u && dj),
    children: jsx(AutoLayout, {
      verticalAlignItems: "center",
      horizontalAlignItems: "center",
      padding: {
        top: 16,
        left: 16,
        right: 16,
        bottom: 4
      },
      dataTestId: "codegen-spinner",
      children: jsx(LoadingSpinner, {})
    })
  }) : 0 !== code.length && code.some(e => e.lines.length > 0) ? jsxs("div", {
    className: ek()(dy, c && db, u && dj),
    ref: R,
    "data-testid": p,
    children: [m && D, code.map((n, i) => n.lines.length > 0 && (!l || "Layout" !== n.name) ? jsx(_$$c7, {
      className: ek()("code_extension_section--sectionsContainer--vZzFZ", r),
      "data-testid": `code-panel-${n.name}`,
      "data-fullscreen-intercept": !0,
      onClick: () => y(n.name),
      children: t(code, n, i)
    }, `${e}-${n.name}-${i}`) : null)]
  }) : d && hasRun ? jsx("div", {
    className: ek()(dy, c && db, u && dj),
    children: jsx("div", {
      className: "code_extension_section--emptyMessage--wSX0u",
      children: d
    })
  }) : null;
}
let dC = "interactive-inspection-onboarding-key";
let dT = userFlagAtomFamily("dev_mode_has_seen_interactive_inspection_onboarding");
let dS = userFlagAtomFamily("dev_mode_has_seen_focus_view_onboarding");
let dP = {
  title: renderI18nText("dev_handoff.focus_view.interactive_onboarding_title"),
  description: renderI18nText("dev_handoff.focus_view.interactive_onboarding_description"),
  trackingContextName: "Dev Mode Interactive Inspection Onboarding",
  targetKey: dC,
  disableHighlight: !0
};
function dL(e) {
  let t = useDispatch();
  return useCallback(() => {
    t(postUserFlag({
      dev_mode_has_seen_interactive_inspection_onboarding: !0
    }));
    e();
  }, [e, t]);
}
function dR() {
  let e = useDevModeFocusId();
  let t = m5(!1, Jo.FOCUS_NODE);
  let n = useStrictDeepEqualSceneValue((e, t) => {
    let n = e?.get(t);
    if (!n || n.isSection || n.isStateGroup) return !1;
    let a = n.stackHorizontalLayoutSize !== LayoutSizingMode.HUG_CONTENT;
    let i = n.stackVerticalLayoutSize !== LayoutSizingMode.HUG_CONTENT;
    return a || i;
  }, e);
  return !!isInteractiveInspectionAndRollbackEnabled() && (n || t);
}
function dD() {
  let e = useAtomWithSubscription(dT);
  let t = useAtomWithSubscription(dS);
  let n = dR();
  let {
    show,
    isShowing,
    complete
  } = _$$e3({
    overlay: Iu5,
    priority: _$$N.HIGH_PRIORITY_MODAL
  }, [e, t]);
  useEffect(() => {
    n && show({
      canShow: (e, t) => !e && !!t
    });
  }, [n, show]);
  let d = dL(complete);
  return jsx(OnboardingModal, {
    ...dP,
    arrowPosition: ArrowPosition.TOP,
    isShowing,
    emphasized: !1,
    onClose: d,
    primaryCta: {
      label: renderI18nText("general.got_it"),
      type: "button",
      onClick: d,
      ctaTrackingDescriptor: UpgradeAction.GOT_IT
    }
  });
}
let dM = "Dev Mode Focus View Onboarding";
let dB = "focus_view_title_onboarding_key";
let dF = "focus_view_completed_onboarding_key";
let dz = "focus_view_versions_onboarding_key";
let dV = "focus_view_back_onboarding_key";
function dH() {
  let {
    show,
    isShowing,
    complete
  } = _$$e3({
    overlay: FtN,
    priority: _$$N.DEFAULT_MODAL
  });
  let o = dR();
  let l = dL(complete);
  useSingleEffect(() => {
    show();
  });
  let s = useCallback(() => {
    o ? l() : complete();
  }, [o, complete, l]);
  let r = useMemo(() => ({
    label: renderI18nText("dev_handoff.workflows.focus_view.onboarding.secondary_cta_label"),
    type: "button",
    onClick: s,
    ctaTrackingDescriptor: UpgradeAction.CANCEL
  }), [s]);
  let d = useMemo(() => ({
    label: renderI18nText("dev_handoff.workflows.focus_view.onboarding.last_primary_cta_label"),
    type: "button",
    onClick: l,
    ctaTrackingDescriptor: UpgradeAction.GOT_IT
  }), [l]);
  let c = [{
    title: renderI18nText("dev_handoff.workflows.focus_view.onboarding.viewing.title"),
    description: renderI18nText("dev_handoff.workflows.focus_view.onboarding.viewing.description"),
    trackingContextName: `${dM} Viewing`,
    targetKey: dB,
    emphasized: !0,
    secondaryCta: r,
    disableHighlight: !0
  }, {
    title: renderI18nText("dev_handoff.workflows.focus_view.onboarding.completed.title"),
    description: renderI18nText("dev_handoff.workflows.focus_view.onboarding.completed.description"),
    trackingContextName: `${dM} Completed`,
    targetKey: dF,
    emphasized: !0,
    secondaryCta: r,
    disableHighlight: !0
  }, {
    title: renderI18nText("dev_handoff.workflows.focus_view.onboarding.versions.title"),
    description: renderI18nText("dev_handoff.workflows.focus_view.onboarding.versions.description"),
    trackingContextName: `${dM} Versions`,
    targetKey: dz,
    emphasized: !0,
    arrowPosition: ArrowPosition.RIGHT_BODY,
    secondaryCta: r,
    onStepShow: () => clearSelection(),
    disableHighlight: !0
  }, {
    title: renderI18nText("dev_handoff.workflows.focus_view.onboarding.back.title"),
    description: renderI18nText("dev_handoff.workflows.focus_view.onboarding.back.description"),
    trackingContextName: `${dM} Back`,
    targetKey: dV,
    emphasized: !0,
    primaryCtaLabel: o ? void 0 : renderI18nText("dev_handoff.workflows.focus_view.onboarding.last_primary_cta_label"),
    secondaryCta: o ? r : void 0,
    disableHighlight: !0
  }, o ? {
    ...dP,
    trackingContextName: `${dM} Interactive`,
    primaryCta: d,
    emphasized: !0
  } : null].filter(_$$t4);
  return jsx(WZ, {
    steps: c,
    isShowing,
    onComplete: s
  });
}
let dZ = "dev_handoff_activity_panel--versionIconContainer--i7OVd";
let d$ = "dev_handoff_activity_panel--editedIcon--V-4-N dev_handoff_activity_panel--_versionIcon--9Io2B";
let d0 = "dev_handoff_activity_panel--activityDisplayText--4O-Dk";
let d1 = "dev_handoff_activity_panel--activityTime--pCZ9l";
function d2({
  activity: e,
  isLatest: t
}) {
  let n = d5(e);
  let i = useRelativeTime(e.timestamp);
  return jsx("h3", {
    className: d0,
    children: t ? renderI18nText("dev_handoff.workflows.focus_view.activity.activity_row_with_latest", {
      versionText: n,
      activityTime: jsx("span", {
        className: d1,
        children: i
      }),
      latest: jsx("span", {
        className: d1,
        children: renderI18nText("dev_handoff.workflows.focus_view.activity.activity_row_latest_part")
      })
    }) : renderI18nText("dev_handoff.workflows.focus_view.activity.activity_row", {
      versionText: n,
      activityTime: jsx("span", {
        className: d1,
        children: i
      })
    })
  });
}
function d5(e) {
  switch (e.metadata?.status) {
    case FBuildStatusType.BUILD:
      return getI18nString("dev_handoff.workflows.focus_view.activity_status_ready");
    case FBuildStatusType.COMPLETED:
      return getI18nString("dev_handoff.workflows.focus_view.activity_status_completed");
    case FBuildStatusType.NONE:
      return getI18nString("dev_handoff.workflows.focus_view.activity_status_removed");
    default:
      return null;
  }
}
function d3({
  activity: e,
  line: t,
  isGreen: n
}) {
  switch (e.metadata?.status) {
    case FBuildStatusType.BUILD:
      return jsxs("div", {
        className: dZ,
        "data-testid": "devModeActivity.readyIcon",
        children: [t, jsx(_$$A11, {
          className: n ? "dev_handoff_activity_panel--readyIconGreen--qdkvg dev_handoff_activity_panel--_versionIcon--9Io2B" : "dev_handoff_activity_panel--readyIcon--zbH-1 dev_handoff_activity_panel--_versionIcon--9Io2B"
        })]
      });
    case FBuildStatusType.COMPLETED:
      return jsxs("div", {
        className: dZ,
        "data-testid": "devModeActivity.completedIcon",
        children: [t, jsx(_$$g2, {
          className: "dev_handoff_activity_panel--completedIcon--3i2u3 dev_handoff_activity_panel--_versionIcon--9Io2B"
        })]
      });
    default:
      return null;
  }
}
function d4() {
  let e = useDispatch();
  return () => {
    e(exitVersionHistoryMode());
  };
}
function d7() {
  return useSelector(e => e.versionHistory.activeId === CURRENT_VERSION_ID);
}
function d8(e, t) {
  return e.metadata?.status !== FBuildStatusType.NONE ? n => jsx(d3, {
    line: n,
    activity: e,
    isGreen: t
  }) : void 0;
}
function d6() {
  let e = useDispatch();
  return t => {
    e(exitVersionHistoryMode());
    HandoffBindingsCpp.focusOnNode(t, !1);
  };
}
function d9({
  latestReadyForDevVersionId: e,
  lastEditedAt: t,
  hasEdits: n,
  status: i,
  isActive: s,
  onSelect: r,
  showCompareChanges: d,
  focusNodeId: c
}) {
  let u = useDispatch();
  let p = trackFileEventWithStore();
  let h = useRelativeTime((t ?? 0) * 1e3);
  let f = useDevModeFocusId();
  return jsx(jP, {
    dispatch: u,
    displayText: jsxs("div", {
      className: "dev_handoff_activity_panel--activityDisplayTextContainer--80BG-",
      children: [jsxs("div", {
        className: d0,
        children: [jsx("span", {
          className: "dev_handoff_activity_panel--latestVersion--ukUVR",
          children: f ? renderI18nText("dev_handoff.workflows.focus_view.activity.latest") : renderI18nText("collaboration.feedback.current_version")
        }), !!t && jsx("span", {
          className: d1,
          children: h
        })]
      }), s && d && jsx("div", {
        className: "dev_handoff_activity_panel--viewDiffButtonEdited--j3Wzx",
        children: renderI18nText("dev_handoff.workflows.focus_view.activity.compare_previous")
      })]
    }),
    editorType: FFileType.DESIGN,
    first: !0,
    iconOverride: n ? e => jsxs("div", {
      className: dZ,
      children: [e, i?.status === BuildStatus.COMPLETED ? jsx(_$$g2, {
        className: d$
      }) : jsx(_$$A11, {
        className: d$
      })]
    }) : void 0,
    isActive: s,
    isAllowedToChangeVersion: () => !s,
    label: "latest-change-row",
    last: !1,
    onClick: s && d ? function () {
      p("Dev Mode Activity Compare Changes", {
        source: "compare_previous"
      });
      L$(e, u, !0, c);
    } : void 0,
    onSelect: s ? void 0 : r,
    userUrl: null,
    versionId: CURRENT_VERSION_ID,
    view: null
  });
}
function ct() {
  let e = useDevModeFocusId();
  let t = Os(e ?? "");
  let n = jh(e ?? void 0);
  let i = d7();
  let o = d6();
  let s = useAtomWithSubscription(_$$pc);
  if ("loading" === t || t && 0 === t.length && s) return jsx("div", {
    "data-onboarding-key": dz,
    className: "dev_handoff_activity_panel--loading--kM0Yf",
    children: jsx(LoadingSpinner, {})
  });
  if (!t || 0 === t.length || !e) return jsx("div", {
    "data-onboarding-key": dz
  });
  let d = new ReduxSceneGraph(FileSourceType.LIVE_FILE).get(e ?? "");
  let c = t[0];
  let u = !!d?.editInfo?.lastEditedAt && c.timestamp.getTime() < 1e3 * d.editInfo.lastEditedAt;
  return jsx(VZ, {
    title: getI18nString("dev_handoff.workflows.focus_view.activity.versions"),
    recordingKey: "activityLog",
    headerOnboardingKey: dz,
    collapsiblePanelKey: "activity_log",
    collapsedHeaders: c ? jsx(cn, {
      latest: u ? (d?.editInfo?.lastEditedAt ?? 0) * 1e3 : c.timestamp
    }) : void 0,
    children: jsxs("ol", {
      className: "dev_handoff_activity_panel--activityEvents--9uFul",
      children: [u && jsx(d9, {
        lastEditedAt: d?.editInfo?.lastEditedAt,
        latestReadyForDevVersionId: c.id,
        hasEdits: !0,
        status: d?.getStatusInfo(),
        isActive: i,
        onSelect: () => o(e),
        showCompareChanges: !0,
        focusNodeId: e
      }), s && jsx("li", {
        className: "dev_handoff_activity_panel--loadingInline--WHTg6",
        children: jsx(LoadingSpinner, {})
      }), t.map((i, o) => {
        let l = o === t.length - 1;
        return jsx(ca, {
          activity: i,
          prevActivity: l ? null : t[o + 1],
          isOldest: l,
          isLatest: 0 === o && !u,
          versions: n.versions,
          focusNodeId: e
        }, o);
      })]
    })
  });
}
function cn({
  latest: e
}) {
  let t = useRelativeTime(e);
  return jsx(_$$E7, {
    variant: "inactiveOutline",
    children: getI18nString("dev_handoff.workflows.focus_view.activity.collapsed", {
      activityTime: t
    })
  });
}
function ca({
  activity: e,
  prevActivity: t,
  isOldest: n,
  isLatest: s,
  versions: d,
  focusNodeId: c
}) {
  let u = useDispatch();
  let p = getSelectedView();
  let h = useSelector(e => e.versionHistory);
  let f = e.version?.id ?? void 0;
  let g = d7();
  let x = useAtomWithSubscription(wg);
  let m = trackFileEventWithStore();
  let _ = g && s || f === h.activeId;
  let v = function (e, t, n) {
    let a = useDevModeFocusId();
    let s = useDispatch();
    let r = getSelectedView();
    let d = d4();
    let c = trackFileEventWithStore();
    return useCallback((i, o) => {
      if (t && !i) {
        if (n) {
          d();
          return;
        }
        c("Dev Mode Activity Load Version", {
          entrypoint: o
        });
        s(selectViewAction({
          ...r,
          versionId: t
        }));
        s(setProgressBarState({
          mode: UIVisibilitySetting.KEEP_UI,
          type: LoadingBarStatus.SPINNER
        }));
        requestAnimationFrame(() => {
          s(setActiveVersion({
            id: t,
            nodeId: a ?? void 0,
            eventType: "LOAD_NEW_VERSION",
            versions: e
          }));
        });
      }
    }, [t, n, e, a, s, r, d, c]);
  }(d, f, s);
  let y = () => {
    m("Dev Mode Activity Compare Changes", {
      source: s ? "compare_previous" : "compare_to_latest"
    });
    let e = s && t?.version?.id || f;
    L$(e, u, !0, c);
  };
  let b = d4();
  let j = e.metadata?.status === FBuildStatusType.BUILD && null !== t;
  let w = !!f && f !== h.activeId;
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  let A = f ? jsxs(MenuRootComp, {
    manager,
    children: [jsx(IconButton, {
      ...getTriggerProps(),
      "aria-label": getI18nString("collaboration.feedback.more_options"),
      children: jsx(_$$J5, {})
    }), jsxs(MenuContainerComp, {
      children: [!s && (_ ? jsx(MenuItemComp, {
        onClick: b,
        children: renderI18nText("dev_handoff.workflows.focus_view.back_to_current")
      }) : jsx(MenuItemComp, {
        onClick: () => v(_, "dropdown_option"),
        children: renderI18nText("dev_handoff.workflows.focus_view.inspect_version")
      })), (!s || j) && jsx(MenuItemComp, {
        onClick: y,
        children: s ? renderI18nText("dev_handoff.workflows.focus_view.compare_previous_menu_item") : renderI18nText("dev_handoff.workflows.focus_view.compare_latest")
      }), jsx(MenuItemComp, {
        onClick: () => {
          m("Dev Mode Activity Copy Link To Version");
          handleCopyViewUrl(u, p, f);
        },
        children: renderI18nText("dev_handoff.workflows.focus_view.copy_link_to_version")
      }), x && jsx(MenuItemComp, {
        onClick: () => {
          if (!x) return;
          let t = e.version;
          t && u(showModalHandler({
            type: DevModeSavepointModalContainer,
            data: {
              label: d5(e),
              description: t.description,
              savepointID: t.id
            }
          }));
        },
        children: renderI18nText("collaboration.feedback.context_menu.edit_version_info")
      })]
    })]
  }) : null;
  return jsx(jP, {
    description: e.version?.description ?? void 0,
    dispatch: u,
    displayText: jsx(d2, {
      activity: e,
      isLatest: s
    }),
    editorType: FFileType.DESIGN,
    first: s,
    hoverMenu: A,
    iconOverride: d8(e, n || _),
    isActive: _ && !s,
    isAllowedToChangeVersion: () => w,
    label: "activity-row",
    last: n,
    onClick: s && j ? y : void 0,
    onSelect: w ? () => v(_, "row") : void 0,
    rowBodyFooter: s && j ? jsx("div", {
      className: "dev_handoff_activity_panel--viewDiffButtonReady--mGQg4",
      children: renderI18nText("dev_handoff.workflows.focus_view.activity.compare_previous")
    }) : void 0,
    user: e.user.name || "",
    userUrl: e.user.imgUrl,
    versionId: f || "NO_VERSION",
    view: null
  });
}
function cr() {
  let {
    selectionProperties
  } = selectWithShallowEqual(e => ({
    selectionProperties: e.mirror.selectionProperties
  }));
  let t = useLocalPluginsExcludingWidgets();
  let n = usePublishedPlugins();
  let i = useInstalledPluginsAndWidgets();
  let l = useCurrentOrgAdminInfo();
  let s = useDispatch();
  let r = useCurrentFileKey();
  return jsx(_$$Q3, {
    allSavedPlugins: i.plugins,
    collapsible: !0,
    dispatch: s,
    editorType: FEditorType.DevHandoff,
    isDevHandoff: !0,
    localPlugins: t,
    numSelected: selectionProperties.numSelected ?? 0,
    openFileKey: r,
    orgEntity: l,
    pluginRelaunchData: selectionProperties.pluginRelaunchData,
    publishedPlugins: n,
    recordingKey: "devHandoffPluginPanel",
    title: getI18nString("dev_handoff.plugin_panel.title")
  }, "plugin");
}
let cc = registerModal(function (e) {
  let t = lazy(() => _require);
  return jsx(Suspense, {
    fallback: jsx(LoadingSpinner, {}),
    children: jsx(t, {
      ...e
    })
  });
});
let cu = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M11.117 6.741A2 2 0 0 1 13 6.805l3 1.731.113.071A2 2 0 0 1 17 10.268v3.464a2 2 0 0 1-.887 1.662l-.113.07-3 1.733a2 2 0 0 1-1.883.063L11 17.197l-3-1.732a2 2 0 0 1-1-1.733v-3.464a2 2 0 0 1 1-1.732l3-1.731zm1.383.93a1 1 0 0 0-1 0l-3 1.731-.11.074a1 1 0 0 0-.39.792v3.464l.009.133a1 1 0 0 0 .491.733l3 1.733a1 1 0 0 0 .88.059l.12-.06 3-1.732a1 1 0 0 0 .491-.733l.009-.133v-3.464a1 1 0 0 0-.39-.792l-.11-.074zM12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    })
  });
});
function cf() {
  let e = _$$g3({
    entryPoint: InspectState.InspectNoSelection
  });
  let t = Rb().length;
  let n = generateRecordingKey("fullVarsTable", "panelEntry");
  return t ? jsx(ErrorBoundaryCrash, {
    boundaryKey: "varsTable_inspectEntry",
    fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
    team: ServiceCategories.DEVELOPER_TOOLS,
    sentryTags: {
      area: ServiceCategories.DEVELOPER_TOOLS
    },
    children: jsx(VZ, {
      title: getI18nString("variables.authoring_modal.title"),
      recordingKey: "fullVarsTable",
      collapsiblePanelKey: "variables",
      children: jsxs("div", {
        className: "variables_table_entry_point--innerPanelContainer--fMHQK text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: [renderI18nText("variables.inspection_panel_entry_point.description"), jsx(ButtonWide, {
          variant: "secondary",
          onClick: e,
          recordingKey: n,
          "aria-label": getI18nString("variables.local_variables_panel.open_variables_button_tooltip"),
          children: jsxs("div", {
            className: "variables_table_entry_point--buttonInnerWrapper--Jgybm",
            children: [jsx(cu, {}), renderI18nText("variables.inspection_panel_entry_point.button")]
          })
        })]
      })
    })
  }) : null;
}
var cL = cP;
var cD = cR;
var cM = cO;
let cQ = new class {
  async getZip(e, t, n) {
    let a = JSON.stringify({
      sha1s: t,
      names: n
    });
    let i = await fetch(`/file/${e}/image/batch_download`, {
      method: "POST",
      body: a,
      headers: {
        "Content-Type": "application/json",
        "Content-Length": `${a.length}`,
        Accept: "application/zip"
      }
    });
    if (!i.ok || 200 !== i.status) throw Error("failed to download");
    let o = await i.blob();
    return await o.arrayBuffer();
  }
}();
let cq = new class {
  async getExtensions(e, t, n) {
    let a = JSON.stringify({
      sha1s: t
    });
    await fetch(`/file/${e}/image/file_extensions`, {
      method: "POST",
      body: a,
      headers: {
        "Content-Type": "application/json",
        "Content-Length": `${a.length}`,
        Accept: "application/json"
      }
    }).then(e => {
      e.json().then(e => {
        let t = e?.meta?.extensions;
        t && Object.keys(t).length > 0 && n(t);
      });
    });
  }
}();
let c$ = "asset_panel--exportDropdown--Vh-cX";
let c0 = "asset_panel--exportMeta--C-dRt";
let c1 = "asset_panel--dot--dR7Yw";
let c2 = "asset_panel--sourceName--uwyAu ellipsis--ellipsis--Tjyfa";
let c5 = 4 * parsePxNumber(devHandoffAssetPreviewMaxWidth);
let c3 = 4 * parsePxNumber(devHandoffAssetPreviewMaxHeight);
let c4 = createLocalStorageAtom("asset_panel_export_list", {
  [assetTypeEnum.ASSET_ICON]: [c8("SVG")],
  [assetTypeEnum.ASSET_ILLUSTRATION]: [c8("SVG")],
  [assetTypeEnum.ASSET_IMAGE]: [c8("PNG")],
  [assetTypeEnum.ASSET_GIF]: void 0
});
let c7 = createLocalStorageAtom("asset_panel_img_include_source", !0);
function c8(e) {
  let t = jj([]);
  return "JPEG" === e || "PDF" === e ? {
    ...t,
    imageType: e,
    quality: 1
  } : "SVG" === e ? {
    ...t,
    imageType: e,
    svgOutlineText: !1,
    svgIDMode: "IF_NEEDED",
    svgForceStrokeMasks: !1
  } : {
    ...t,
    imageType: e
  };
}
let c6 = {
  format: e => {
    switch (e) {
      case "PNG":
        return "PNG";
      case "JPEG":
        return "JPG";
      case "SVG":
        return "SVG";
      case "PDF":
        return "PDF";
    }
    return e;
  }
};
let c9 = memo(({
  assetInfo: e,
  media: t = [],
  showComponentControls: n
}) => {
  let d = isInteractionPathCheck();
  let c = useCurrentFileKey();
  let [u, p] = useAtomValueAndSetter(g6);
  let f = !ua() || u;
  let g = useSelector(e => e.saveAsState);
  let x = getObservableOrFallback(EditorPreferencesApi().showGuids);
  let _ = useSelector(e => e.mirror.sceneGraphSelection);
  let v = useMemo(() => {
    let t = Object.keys(_);
    let n = e.instancesGUIDs || [];
    return t.some(e => n.includes(e));
  }, [_, e]);
  let {
    assetId,
    assetName,
    thumbnailVersion
  } = e;
  let w = e.instancesGUIDs?.[0] ?? e.duplicateGUIDs?.[0] ?? assetId;
  let N = _$$O5({
    assetId: w,
    thumbnailVersion,
    width: c5,
    height: c3,
    scale: 4
  });
  let k = useLibraryMetadata(e.sourceLibraryKey ?? _$$l6(""), {
    enabled: !!e.sourceLibraryKey
  });
  let I = function (e, t) {
    let n = useAtomWithSubscription(c4);
    let a = t & ~assetTypeEnum.ASSET_COMPONENT;
    let i = [c8(a & (assetTypeEnum.ASSET_ICON | assetTypeEnum.ASSET_ILLUSTRATION) ? "SVG" : "PNG")];
    return getFeatureFlags().dt_insp_impr_assets ? void 0 === a || a === assetTypeEnum.NOT_ASSET || a === assetTypeEnum.ASSET_VIDEO || a === assetTypeEnum.ASSET_GIF ? [] : n?.[a] || i : i;
  }(0, e.type);
  let C = e.type & (assetTypeEnum.ASSET_ICON | assetTypeEnum.ASSET_ILLUSTRATION) ? "SVG" : "PNG";
  let T = I?.[0]?.imageType;
  let S = useMemo(() => getFeatureFlags().dt_insp_impr_assets && I?.length && T ? I.every(e => e.imageType === T) ? getI18nString("dev_handoff.assets.files_same_format", {
    count: I.length,
    format: T
  }) : getI18nString("dev_handoff.assets.files", {
    count: I.length
  }) : C, [I, T, C]);
  let P = useDispatch();
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  let {
    getTriggerProps: _getTriggerProps,
    manager: _manager
  } = setupMenu();
  let M = useCallback(async e => {
    f || (e.stopPropagation(), trackEventAnalytics("Asset Panel Export Clicked"), p(!0), await Dc(_$$hV.Export, g, P, "export-assets-handoff", [w], "export-assets-handoff", {
      guids: [w],
      exportSettings: I?.length ? I : [c8(C)]
    }), P(_$$rg()), manager.isOpen && manager.setOpen(!1), p(!1));
  }, [w, C, f, P, I, manager, g, p]);
  let B = _$$dI({
    assetGuid: w
  });
  let F = useCallback(e => {
    B?.();
    e.stopPropagation();
  }, [B]);
  let z = e?.instancesGUIDs?.[0] ?? assetId;
  let V = useCallback(() => {
    replaceSelection([z]);
    getFeatureFlags().dt_insp_impr_assets && P(vI(z));
  }, [P, z]);
  let W = useMemo(() => [...(e?.instancesGUIDs ?? []), ...(e?.duplicateGUIDs ?? []), assetId], [assetId, e?.duplicateGUIDs, e?.instancesGUIDs]);
  let G = useCallback(e => {
    _$$l5.user("image-type-change", () => {
      Fullscreen?.setDevHandoffAssetExport(assetId, e);
    });
  }, [assetId]);
  let U = !!(e.type & assetTypeEnum.ASSET_COMPONENT);
  let K = !!(e.type & assetTypeEnum.ASSET_ICON);
  let X = !!(e.type & assetTypeEnum.ASSET_IMAGE);
  let J = !!(e.type & assetTypeEnum.ASSET_GIF);
  let Q = !!(e.type & assetTypeEnum.ASSET_VIDEO);
  let q = J || Q;
  let Y = !!(e.type & assetTypeEnum.ASSET_ILLUSTRATION);
  let Z = (K || X) && !q;
  let $ = t?.length > 0 && !!c;
  let ee = !!e.sourceLibraryKey;
  let et = !!k.data?.isHubFile;
  return jsx("div", {
    className: "asset_panel--assetContainer----LF9",
    onMouseEnter: () => AppStateTsApi?.canvasViewState().temporarilyHoveredNodes.set(W),
    onMouseLeave: () => AppStateTsApi?.canvasViewState().temporarilyHoveredNodes.set([]),
    children: jsxs("div", {
      className: ek()("asset_panel--assetRow--0VUJr text--fontPos11--2LvXf text--_fontBase--QdLsd", {
        "asset_panel--forceHovered--GZMWo": manager.isOpen || d
      }),
      children: [jsx(ButtonPrimitive, {
        className: "asset_panel--assetPreview--nTOgs",
        style: N.backgroundStyle,
        onClick: V,
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("inspect_panel.interactions.select_layer"),
        children: N && jsx(_$$J7, {
          src: N.url,
          style: N.imgStyle
        })
      }), jsxs("div", {
        className: "asset_panel--assetDetails--xfCbP",
        children: [jsx("div", {
          className: "asset_panel--assetName--exM4m ellipsis--ellipsis--Tjyfa",
          children: x ? `${assetName} (${assetId})` : assetName
        }), !U || v || getFeatureFlags().dt_insp_impr_assets ? getFeatureFlags().dt_insp_impr_assets && n ? null : jsx("div", {
          className: "asset_panel--assetType--hIg9Q ellipsis--ellipsis--Tjyfa text--fontPos11--2LvXf text--_fontBase--QdLsd",
          children: jsx($R, {
            assetInfo: e,
            media: Z ? t : [],
            dataTestId: "assetPanel",
            shouldShowTypeLabel: !getFeatureFlags().dt_insp_impr_assets,
            hideDot: getFeatureFlags().dt_insp_impr_assets
          })
        }) : jsxs("div", {
          className: "asset_panel--componentAssetType--oeu0C asset_panel--assetType--hIg9Q ellipsis--ellipsis--Tjyfa text--fontPos11--2LvXf text--_fontBase--QdLsd",
          children: [jsx(SvgComponent, {
            svg: _$$A2
          }), jsx("div", {
            className: "asset_panel--componentAssetTypeEllipsis--0gm6v ellipsis--ellipsis--Tjyfa",
            children: renderI18nText("dev_handoff.assets.instance")
          })]
        })]
      }), jsxs("div", {
        className: "asset_panel--buttons--QytN9",
        children: [(Z || Y) && jsxs(Fragment, {
          children: [!getFeatureFlags().dt_insp_impr_assets && jsxs(_$$bL3, {
            onChange: G,
            value: S,
            children: [jsx(_$$l3, {
              disabled: f || getFeatureFlags().dt_insp_impr_assets,
              label: jsx(HiddenLabel, {
                children: renderI18nText("fullscreen.export.export_file_type")
              }),
              "aria-label": getFeatureFlags().dt_insp_impr_assets ? getI18nString("dev_handoff.assets.modify_hint") : void 0
            }), jsxs(_$$mc, {
              children: [jsx(_$$c$2, {
                value: "PNG",
                children: "PNG"
              }), jsx(_$$c$2, {
                value: "JPEG",
                children: "JPG"
              }), (K || Y) && jsx(_$$c$2, {
                value: "SVG",
                children: "SVG"
              }), jsx(_$$c$2, {
                value: "PDF",
                children: "PDF"
              })]
            })]
          }), (!getFeatureFlags().dt_insp_impr_assets || !n) && jsx("div", {
            className: "asset_panel--exportIcon--aQQXS",
            children: $ ? jsxs(MenuRootComp, {
              manager,
              children: [jsxs(ButtonPrimitive, {
                "aria-label": f ? getI18nString("fullscreen.properties_panel.export_disabled") : getI18nString("fullscreen.export.export"),
                htmlAttributes: {
                  "data-tooltip": f ? getI18nString("fullscreen.properties_panel.export_disabled") : getI18nString("fullscreen.export.export"),
                  "data-tooltip-type": KindEnum.TEXT
                },
                disabled: f,
                className: c$,
                recordingKey: `export-${assetId}`,
                ...getTriggerProps(),
                children: [jsx(_$$b7, {}), jsx(_$$r3, {})]
              }), jsxs(MenuContainerComp, {
                children: [t.map(e => jsx(ue, {
                  asset: e,
                  onClose: () => manager.setOpen(!1)
                }, e.hash)), jsx(MenuItemComp, {
                  onClick: M,
                  recordingKey: "asset-export-layer",
                  children: jsxs("div", {
                    children: [getI18nString("fullscreen.export.layer_export"), jsx(MenuSubText, {
                      children: jsxs("div", {
                        className: c0,
                        children: [jsx($R, {
                          assetInfo: e,
                          dataTestId: "assetPanel",
                          hideDot: !0
                        }), jsx("div", {
                          className: c1,
                          children: "\xb7"
                        }), jsx("div", {
                          className: c2,
                          children: c6.format(S)
                        })]
                      })
                    })]
                  })
                })]
              })]
            }) : jsx(IconButton, {
              onClick: M,
              "aria-label": f ? getI18nString("fullscreen.properties_panel.export_disabled") : getI18nString("fullscreen.export.export"),
              disabled: f,
              htmlAttributes: {
                "data-tooltip": f ? getI18nString("fullscreen.properties_panel.export_disabled") : getI18nString("fullscreen.export.export"),
                "data-tooltip-type": KindEnum.TEXT
              },
              recordingKey: `export-${assetId}`,
              children: jsx(_$$b7, {})
            })
          })]
        }), q && (!getFeatureFlags().dt_insp_impr_assets || !n) && jsxs(Fragment, {
          children: [!getFeatureFlags().dt_insp_impr_assets && jsxs(_$$bL3, {
            onChange: noop,
            value: J ? "GIF" : "MP4",
            children: [jsx(_$$l3, {
              disabled: !0,
              label: jsx(HiddenLabel, {
                children: renderI18nText("fullscreen.export.export_file_type")
              })
            }), jsx(_$$mc, {
              children: jsx(_$$c$2, {
                value: J ? "GIF" : "MP4",
                children: J ? "GIF" : "MP4"
              })
            })]
          }), f ? jsx(IconButton, {
            "aria-label": getI18nString("fullscreen.properties_panel.export_disabled"),
            disabled: !0,
            htmlAttributes: {
              "data-tooltip": getI18nString("fullscreen.properties_panel.export_disabled"),
              "data-tooltip-type": KindEnum.TEXT
            },
            children: jsx(_$$b7, {})
          }) : t.length > 1 ? jsxs(MenuRootComp, {
            manager: _manager,
            children: [jsxs(ButtonPrimitive, {
              "aria-label": getI18nString("fullscreen.export.export"),
              htmlAttributes: {
                "data-tooltip": getI18nString("fullscreen.export.export"),
                "data-tooltip-type": KindEnum.TEXT
              },
              className: c$,
              recordingKey: `export-${assetId}`,
              ..._getTriggerProps(),
              children: [jsx(_$$b7, {}), jsx(_$$r3, {})]
            }), jsx(MenuContainerComp, {
              children: t.map(e => jsx(ue, {
                asset: e,
                onClose: () => _manager.setOpen(!1)
              }, e.hash))
            })]
          }) : jsx(ut, {
            assetInfo: e
          })]
        }), U && (!getFeatureFlags().dt_insp_impr_assets || n) && jsx(IconButton, {
          onClick: F,
          "aria-label": et ? getI18nString("design_systems.instance_panel.view_library_in_community") : ee ? getI18nString("dev_handoff.library.view") : getI18nString("design_systems.instance_panel.go_to_main_component"),
          htmlAttributes: {
            "data-tooltip": et ? getI18nString("design_systems.instance_panel.view_library_in_community") : ee ? getI18nString("dev_handoff.library.view") : getI18nString("design_systems.instance_panel.go_to_main_component"),
            "data-tooltip-type": KindEnum.TEXT
          },
          children: et ? jsx(_$$c6, {}) : ee ? jsx(_$$l4, {}) : jsx(_$$K3, {})
        })]
      })]
    })
  });
});
function ue({
  asset: e,
  onClose: t
}) {
  let n = useCurrentFileKey() ?? "";
  let l = useDispatch();
  let {
    ref,
    ...d
  } = _$$X(e.name);
  let {
    name,
    extension
  } = useMemo(() => {
    if (getFeatureFlags().dt_insp_impr_assets) return {
      name: e.name,
      extension: e.extension
    };
    let t = e.name.split(".");
    if (!t || !(t.length > 1)) return {
      name: e.name,
      extension: ""
    };
    {
      let e = t[t.length - 1];
      return {
        name: t.slice(0, t.length - 2).join("."),
        extension: e
      };
    }
  }, [e.name, e.extension]);
  let p = useCallback(e => {
    e.stopPropagation();
    t();
    l(_$$aK());
  }, [l, t]);
  return jsx(MenuLinkComp, {
    href: Me(n, e.hash),
    download: e.name,
    onClick: p,
    htmlAttributes: d,
    recordingKey: "asset-export-source",
    children: jsxs("div", {
      children: [getI18nString("fullscreen.export.source"), jsx(MenuSubText, {
        children: jsxs("div", {
          className: c0,
          children: [jsx(yP, {
            pxWidth: e.width,
            pxHeight: e.height,
            dataTestId: "assetPanel"
          }), jsx("div", {
            className: c1,
            children: "\xb7"
          }), jsx("div", {
            className: c2,
            "data-content-start": name,
            "data-content-end": extension ? `.${extension}` : void 0,
            ref
          })]
        })
      })]
    })
  });
}
function ut({
  assetInfo: e
}) {
  let t = useDeepEqualSceneValue((e, t) => {
    if (!t) return null;
    let n = e.get(t);
    return n ? filterValidImagePaints(n?.fills)?.filter(e => e.opacity > 0 && e.visible) : null;
  }, e?.assetId);
  return (_$$p2(e) || _$$cZ(e)) && t && t.length && t[0] ? jsx(_$$iV, {
    image: t[0],
    loadingChildren: jsx(LoadingSpinner, {}),
    variant: "icon",
    children: jsx(_$$b7, {})
  }) : null;
}
function un({
  asset: e,
  assetId: t
}) {
  let {
    thumbnailVersion
  } = e ?? {};
  let i = _$$O5({
    assetId: t,
    thumbnailVersion,
    width: 64,
    height: 64,
    scale: 4
  });
  return jsx("div", {
    className: "asset_panel--assetIcon--UkKSP",
    style: i.backgroundStyle,
    children: jsx(_$$J7, {
      className: "asset_panel--assetIconImg--gWZof",
      src: i.url
    })
  });
}
function ua() {
  let e = useCurrentFileKey() ?? "";
  let t = useSubscription(FileCanExport, {
    key: e
  });
  return !!isInteractionPathCheck() || t.data?.file && "error" !== t.data.file.status && t.data?.file?.data?.hasPermission;
}
function ui({
  chits: e,
  totalItems: t
}) {
  return jsxs("span", {
    className: "asset_panel--assetIconRow--O43sG",
    children: [e.map(e => jsx(un, {
      asset: e,
      assetId: e?.instancesGUIDs?.[0] ?? e?.duplicateGUIDs?.[0] ?? e.assetId
    }, e.assetId)), t > 3 && jsxs("span", {
      children: ["+", t - 3]
    })]
  });
}
function uo() {
  let e = useSelector(e => e.mirror.selectionProperties.assetsDeprecated);
  let t = Object.values(useAtomWithSubscription(_$$O6));
  let n = useMemo(() => {
    let e = {};
    for (let n of t) if ("video" !== n.type && "gif" !== n.type && n.guids) for (let t of n.guids) {
      t in e || (e[t] = []);
      e[t].push(n);
    }
    return e;
  }, [t]);
  let l = ({
    type: e
  }) => e & assetTypeEnum.ASSET_ICON ? 1 : e & assetTypeEnum.ASSET_COMPONENT ? 2 : 3;
  let s = useMemo(() => cM()(Object.values(e || {}), "hash").map(t => ({
    ...t,
    duplicateGUIDs: Object.values(e || {}).filter(e => e.hash === t.hash).map(({
      assetId: e
    }) => e)
  })).sort((e, t) => {
    let n = l(e);
    let a = l(t);
    return n === a ? e.assetName.localeCompare(t.assetName) : n - a;
  }), [e]);
  let {
    visibleItems,
    showMoreButton,
    totalItems
  } = _$$y3({
    items: s,
    pageSize: 4,
    shouldResetOnSelectionChange: !0
  });
  return 0 === visibleItems.length ? null : jsxs(VZ, {
    hideHeader: fullscreenAlias.getIsExtension(),
    title: getI18nString("dev_handoff.assets"),
    recordingKey: "assets",
    collapsiblePanelKey: "assets",
    collapsedHeaders: jsx(ui, {
      chits: s.slice(0, 3),
      totalItems
    }),
    children: [visibleItems.map(e => {
      let t = e.duplicateGUIDs[0] ?? "";
      let i = n?.[t] ?? [];
      return jsx(c9, {
        assetInfo: e,
        media: i,
        showComponentControls: !0
      }, e.assetId);
    }), showMoreButton]
  });
}
function ul(e) {
  switch (e) {
    case assetTypeEnum.ASSET_ICON:
      return getI18nString("dev_handoff.assets.icons_download");
    case assetTypeEnum.ASSET_ILLUSTRATION:
      return getI18nString("dev_handoff.assets.illustrations_download");
    case assetTypeEnum.ASSET_IMAGE:
      return getI18nString("dev_handoff.assets.images_download");
    case assetTypeEnum.ASSET_GIF:
      return getI18nString("dev_handoff.assets.gifs_download");
    default:
      return getI18nString("fullscreen.export.export");
  }
}
function us({
  assetType: e,
  assets: t,
  mediaByGuid: n
}) {
  let [a, s] = useAtomValueAndSetter(g6);
  let [d, c] = useState(!1);
  let p = !ua() || a || d;
  let f = selectCurrentFile();
  let g = useSelector(e => e.saveAsState);
  let x = useDispatch();
  let m = useAtomWithSubscription(c4)[e];
  let _ = useAtomWithSubscription(c7);
  let v = _$$uQ();
  let b = _$$dh();
  let j = v ?? b;
  let w = !m || 0 === m.length;
  let N = useMemo(() => e !== assetTypeEnum.ASSET_GIF && (e === assetTypeEnum.ASSET_IMAGE ? w && !_ : w), [w, _, e]);
  let k = cD()(Object.values(n ?? {})).filter(t => t.type === (e === assetTypeEnum.ASSET_GIF ? "gif" : "image"));
  let A = useMemo(() => (e === assetTypeEnum.ASSET_GIF || e === assetTypeEnum.ASSET_IMAGE) && k.length > 20, [e, k]);
  return {
    onExportAll: useCallback(async n => {
      let a = e === assetTypeEnum.ASSET_GIF;
      let i = e === assetTypeEnum.ASSET_IMAGE;
      let o = Object.keys(t).map(e => t[e]?.instancesGUIDs?.[0] ?? t[e]?.duplicateGUIDs?.[0] ?? e);
      let r = (i && _ || a) && !!k.length;
      let d = !!o.length;
      let v = !!m?.length;
      if (p || !(d && v || r) || !HandoffBindingsCpp || !f) return;
      n.stopPropagation();
      c(!0);
      s(!0);
      trackEventAnalytics("Asset Panel Export Clicked");
      let y = o.length * (m?.length ?? 0);
      x(VisualBellActions.enqueue({
        message: r ? getI18nString("dev_handoff.assets.preparing_time", {
          count: (v ? y : 0) + k.length
        }) : getI18nString("dev_handoff.assets.preparing", {
          count: y
        }),
        icon: VisualBellIcon.SPINNER,
        preventDismissal: !0,
        type: "dev-mode-all-asset-download"
      }));
      let b = !1;
      try {
        let t = r && v && !a;
        let n = [];
        if (r) {
          let e = await cQ.getZip(f.key, k.map(e => e.hash), k.map(e => e.name || e.hash));
          if (t) {
            let t = new (cL())().load(new Uint8Array(e));
            for (let e of Object.keys(t.files)) {
              if (!t.files[e]) continue;
              let i = t.files[e].asUint8Array();
              let o = a ? "gif" : e.includes("jp") ? "jpg" : "png";
              n.push({
                filename: `source/${e}`,
                jsBuffer: i,
                mimeType: `image/${o}`,
                error: ""
              });
            }
          } else PE(new Blob([e]), `${f.name}_${a ? "gif" : "img"}.zip`);
          x(_$$aK());
          b = !0;
        }
        t && n.length && HandoffBindingsCpp.prepareSourceImagesForZip(n);
        !a && m?.length && (await Dc(_$$hV.Export, g, x, "export-assets-handoff", [j], "export-assets-handoff", {
          guids: o,
          exportSettings: m,
          assetType: Vx(e),
          withSourceImages: t && !!n
        }), x(_$$rg()));
      } catch (e) {
        reportError(ServiceCategories.DEVELOPER_TOOLS, e);
        r && k.length > 1 && !b && x(VisualBellActions.enqueue({
          message: getI18nString("dev_handoff.assets.too_many_image_sources"),
          icon: VisualBellIcon.EXCLAMATION,
          timeoutOverride: 1 / 0,
          error: !0
        }));
      } finally {
        x(VisualBellActions.dequeue({
          matchType: "dev-mode-all-asset-download"
        }));
        c(!1);
        s(!1);
      }
    }, [k, t, e, p, x, m, _, f, j, g, s]),
    isLocalExporting: d,
    nothingToExport: N,
    tooManyMediaToExport: A
  };
}
function ur({
  assetType: e,
  assets: t,
  mediaByGuid: n
}) {
  let {
    onExportAll,
    isLocalExporting,
    nothingToExport,
    tooManyMediaToExport
  } = us({
    assetType: e,
    assets: t,
    mediaByGuid: n
  });
  let c = useAtomWithSubscription(g6);
  let u = !ua() || c || isLocalExporting;
  let p = ul(e);
  let h = useMemo(() => u ? getI18nString("fullscreen.properties_panel.export_disabled") : tooManyMediaToExport ? getI18nString("dev_handoff.assets.too_many_image_sources_disabled") : nothingToExport ? getI18nString("dev_handoff.assets.nothing_to_export") : void 0, [tooManyMediaToExport, nothingToExport, u]);
  return jsx(IconButton, {
    onClick: onExportAll,
    "aria-label": h ?? p,
    disabled: tooManyMediaToExport || nothingToExport || u,
    htmlAttributes: {
      "data-tooltip": h ?? p,
      "data-tooltip-type": KindEnum.TEXT
    },
    recordingKey: `assets_download_all_${uh(e)}`,
    children: isLocalExporting ? jsx(LoadingSpinner, {
      size: "sm"
    }) : jsx(_$$b7, {})
  });
}
function ud(e) {
  switch (e) {
    case assetTypeEnum.ASSET_ICON:
      return getI18nString("dev_handoff.assets.icons_open_settings");
    case assetTypeEnum.ASSET_ILLUSTRATION:
      return getI18nString("dev_handoff.assets.illustrations_open_settings");
    case assetTypeEnum.ASSET_IMAGE:
      return getI18nString("dev_handoff.assets.images_open_settings");
    default:
      return getI18nString("general.open");
  }
}
function uc({
  assetType: e,
  rowRef: t,
  onClose: n
}) {
  let [s, d] = useAtomValueAndSetter(c4);
  let [c, u] = useAtomValueAndSetter(c7);
  let p = useDispatch();
  let h = useDropdownState();
  let f = Xo();
  let g = selectCurrentFile();
  let x = useAppModelProperty("currentSelectedProperty");
  let m = s?.[e];
  let _ = useCallback(t => {
    d({
      ...s,
      [e]: t
    });
  }, [e, s, d]);
  let v = useCallback(() => {
    let e = m || [];
    let t = jj(e);
    _(e.concat([t]));
  }, [m, _]);
  let y = useCallback(e => {
    let t = m || [];
    let n = jj(t);
    if ("PNG" === e) {
      _(t.concat([n]));
      return;
    }
    MU(n, e, () => _(t.concat([n])));
  }, [m, _]);
  let b = function (e) {
    switch (e) {
      case assetTypeEnum.ASSET_ICON:
        return getI18nString("dev_handoff.assets.icons_settings");
      case assetTypeEnum.ASSET_ILLUSTRATION:
        return getI18nString("dev_handoff.assets.illustrations_settings");
      case assetTypeEnum.ASSET_IMAGE:
        return getI18nString("dev_handoff.assets.images_settings");
      default:
        return getI18nString("general.settings");
    }
  }(e);
  return jsx(_$$bL4, {
    onClose: n,
    defaultPosition: t.current ? calculatePickerPositionLeft(t.current, 248) : void 0,
    width: "sm",
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: b
        })
      }), jsxs(DialogBody, {
        padding: 0,
        children: [jsx(_$$df, {
          addProperty: v,
          currentSelectedProperty: x,
          dispatch: p,
          dropdownShown: h,
          entrypointMenu: jsx(_$$n9, {
            addExportOfType: y
          }),
          onChange: _,
          openFile: g,
          pickerShown: f,
          propertyList: m,
          recordingKey: generateRecordingKey("assets", e, "exportList"),
          selectedPropertyType: NodePropertyCategory.EXPORT
        }), jsx("div", {
          className: "asset_panel--settingsModalRow--MxPJl",
          children: e === assetTypeEnum.ASSET_IMAGE && jsx(Checkbox, {
            checked: c,
            onChange: u,
            label: jsx(Label, {
              children: renderI18nText("dev_handoff.assets.images_include_source")
            })
          })
        })]
      })]
    })
  });
}
function uu({
  assetType: e,
  rowRef: t
}) {
  let n = !ua();
  let [o, l] = useState(!1);
  let s = ud(e);
  return e === assetTypeEnum.ASSET_GIF ? null : jsxs(Fragment, {
    children: [jsx(DialogTriggerButton, {
      "aria-label": n ? getI18nString("fullscreen.properties_panel.export_disabled") : s,
      "aria-expanded": o,
      onClick: () => l(e => !e),
      disabled: n,
      htmlAttributes: {
        "data-tooltip": n ? getI18nString("fullscreen.properties_panel.export_disabled") : s,
        "data-tooltip-type": KindEnum.TEXT
      },
      recordingKey: `assets_download_open_settings_${uh(e)}`,
      children: jsx(_$$A19, {})
    }), o && jsx(uc, {
      assetType: e,
      rowRef: t,
      onClose: () => l(!1)
    })]
  });
}
function up({
  assetType: e,
  assets: t,
  mediaByGuid: n,
  rowRef: o
}) {
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  let d = useAtomWithSubscription(g6);
  let [c, u] = useState(!1);
  let {
    onExportAll,
    isLocalExporting,
    nothingToExport,
    tooManyMediaToExport
  } = us({
    assetType: e,
    assets: t,
    mediaByGuid: n
  });
  let x = !ua() || d || isLocalExporting;
  let m = function (e) {
    switch (e) {
      case assetTypeEnum.ASSET_ICON:
        return getI18nString("dev_handoff.assets.icons_download_menu");
      case assetTypeEnum.ASSET_ILLUSTRATION:
        return getI18nString("dev_handoff.assets.illustrations_download_menu");
      case assetTypeEnum.ASSET_IMAGE:
        return getI18nString("dev_handoff.assets.images_download_menu");
      case assetTypeEnum.ASSET_GIF:
        return getI18nString("dev_handoff.assets.gifs_download_menu");
      default:
        return getI18nString("dev_handoff.assets");
    }
  }(e);
  let _ = ud(e);
  let v = ul(e);
  return jsxs(Fragment, {
    children: [jsxs(MenuRootComp, {
      manager,
      children: [jsx(IconButton, {
        "aria-label": x ? getI18nString("fullscreen.properties_panel.export_disabled") : m,
        htmlAttributes: {
          "data-tooltip": x ? getI18nString("fullscreen.properties_panel.export_disabled") : m,
          "data-tooltip-type": KindEnum.TEXT
        },
        disabled: x,
        ...getTriggerProps(),
        children: jsx(_$$J5, {})
      }), jsxs(MenuContainerComp, {
        children: [jsx(MenuItemComp, {
          onClick: onExportAll,
          disabled: tooManyMediaToExport || nothingToExport,
          children: jsxs("div", {
            className: "asset_panel--downloadAllMenuItem--8NlXq",
            children: [v, tooManyMediaToExport ? jsx(MenuSubText, {
              children: renderI18nText("dev_handoff.assets.too_many_image_sources_disabled")
            }) : nothingToExport ? jsx(MenuSubText, {
              children: renderI18nText("dev_handoff.assets.nothing_to_export")
            }) : null]
          })
        }), e !== assetTypeEnum.ASSET_GIF && jsx(MenuItemComp, {
          onClick: () => u(!0),
          children: _
        })]
      })]
    }), c && jsx(uc, {
      assetType: e,
      rowRef: o,
      onClose: () => u(!1)
    })]
  });
}
function uh(e) {
  switch (e) {
    case assetTypeEnum.ASSET_ICON:
      return "icons";
    case assetTypeEnum.ASSET_ILLUSTRATION:
      return "illustrations";
    case assetTypeEnum.ASSET_IMAGE:
      return "images";
    case assetTypeEnum.ASSET_GIF:
      return "gifs";
    case assetTypeEnum.ASSET_VIDEO:
      return "videos";
    default:
      return "assets";
  }
}
function uf({
  items: e,
  mediaByGuid: t,
  assetType: n
}) {
  let o = useMemo(() => Object.keys(e ?? {}), [e]);
  let {
    visibleItems,
    showMoreButton,
    totalItems
  } = _$$y3({
    items: o,
    pageSize: 3,
    shouldResetOnSelectionChange: !0
  });
  let c = useRef(null);
  if (0 === totalItems || !e) return null;
  let u = n !== assetTypeEnum.ASSET_VIDEO;
  return jsxs(VZ, {
    title: function (e) {
      switch (e) {
        case assetTypeEnum.ASSET_ICON:
          return getI18nString("dev_handoff.assets.icons");
        case assetTypeEnum.ASSET_ILLUSTRATION:
          return getI18nString("dev_handoff.assets.illustrations");
        case assetTypeEnum.ASSET_IMAGE:
          return getI18nString("dev_handoff.assets.images");
        case assetTypeEnum.ASSET_GIF:
          return getI18nString("dev_handoff.assets.gifs");
        case assetTypeEnum.ASSET_VIDEO:
          return getI18nString("dev_handoff.assets.videos");
        default:
          return getI18nString("dev_handoff.assets");
      }
    }(n),
    recordingKey: uh(n),
    isSubsection: !0,
    noBorder: !0,
    additionalHeaders: u ? jsx(Fragment, {
      children: getFeatureFlags().dt_insp_impr_assets_sep_dl_btns ? jsxs(Fragment, {
        children: [jsx(ur, {
          assetType: n,
          assets: e,
          mediaByGuid: t
        }), jsx(uu, {
          assetType: n,
          rowRef: c
        })]
      }) : jsx(up, {
        assetType: n,
        assets: e,
        mediaByGuid: t,
        rowRef: c
      })
    }) : void 0,
    headerRef: c,
    children: [visibleItems.map(n => e[n] ? jsx(c9, {
      assetInfo: e[n],
      media: t?.[n]
    }, n) : null), showMoreButton]
  });
}
function ug({
  items: e
}) {
  let t = useMemo(() => Object.keys(e ?? {}), [e]);
  let {
    visibleItems,
    showMoreButton,
    totalItems
  } = _$$y3({
    items: t,
    pageSize: 3,
    shouldResetOnSelectionChange: !0
  });
  return 0 === totalItems ? null : jsxs(Fragment, {
    children: [visibleItems.map(t => e?.[t] ? jsx(c9, {
      assetInfo: e[t],
      showComponentControls: !0
    }, t) : null), showMoreButton]
  });
}
function ux() {
  let e = useNonMixedSelectionPropertyValue("assets");
  let t = function () {
    let e = useCurrentFileKey() ?? "";
    let t = useAtomWithSubscription(_$$O6);
    let [n, a] = useAtomValueAndSetter(Qm);
    useEffect(() => {
      if (!t) return;
      let i = new Set(Object.keys(n));
      let o = Object.values(t).filter(e => "video" !== e.type && !i.has(e.hash)).map(e => e.hash);
      o.length > 0 && e && cq.getExtensions(e, o, e => a(t => ({
        ...t,
        ...e
      })));
    }, [t, e, n, a]);
    return useMemo(() => {
      let e = {};
      if (!t) return e;
      let a = new Set(Object.keys(n));
      for (let i of Object.values(t)) if ("video" !== i.type && i.guids) {
        let t = a.has(i.hash) ? n?.[i.hash] : void 0;
        for (let n of i.guids) {
          let a = {
            ...i,
            extension: t
          };
          e[n] = [...(e[n] ?? []), a];
        }
      }
      return e;
    }, [n, t]);
  }();
  if (!e) return null;
  let {
    totalAssets = 0,
    chits,
    icons,
    illustrations,
    images,
    gifs,
    videos,
    totalComponents = 0,
    components
  } = e;
  return 0 === totalAssets && 0 === totalComponents ? null : jsxs(Fragment, {
    children: [totalAssets > 0 && jsxs(VZ, {
      hideHeader: fullscreenAlias.getIsExtension(),
      title: getI18nString("dev_handoff.assets"),
      recordingKey: "assets",
      collapsiblePanelKey: "assets",
      collapsedHeaders: jsx(ui, {
        chits: Object.values(chits ?? {}),
        totalItems: totalAssets
      }),
      children: [jsx(uf, {
        items: icons,
        assetType: assetTypeEnum.ASSET_ICON
      }), jsx(uf, {
        items: illustrations,
        assetType: assetTypeEnum.ASSET_ILLUSTRATION
      }), jsx(uf, {
        items: images,
        assetType: assetTypeEnum.ASSET_IMAGE,
        mediaByGuid: t
      }), jsx(uf, {
        items: gifs,
        assetType: assetTypeEnum.ASSET_GIF,
        mediaByGuid: t
      }), jsx(uf, {
        items: videos,
        assetType: assetTypeEnum.ASSET_VIDEO
      })]
    }), getFeatureFlags().dt_nested_components && totalComponents > 0 && jsx(VZ, {
      hideHeader: fullscreenAlias.getIsExtension(),
      title: getI18nString("dev_handoff.assets.nested_components"),
      recordingKey: "nested_components",
      collapsiblePanelKey: "nested_components",
      collapsedHeaders: jsx(ui, {
        chits: Object.values(components ?? {}).slice(0, 3),
        totalItems: totalComponents
      }),
      children: jsx(ug, {
        items: components
      })
    })]
  });
}
function um() {
  return getFeatureFlags().dt_insp_impr_assets ? jsx(ux, {}) : jsx(uo, {});
}
function uA({
  children: e,
  panelRef: t,
  componentCounts: n,
  entrypoint: o
}) {
  let [l, s] = useState(!1);
  let r = useRef({
    x: 0,
    y: 0
  });
  let d = trackDefinedFileEventWithStore();
  let c = _$$ox();
  let u = useRef(null);
  return jsxs(Fragment, {
    children: [jsx(ButtonWide, {
      ref: u,
      variant: "secondary",
      onClick: () => {
        if (t?.current) {
          let e = t.current.getBoundingClientRect();
          r.current = {
            x: e.left - 896 - 4,
            y: e.top - 40
          };
        }
        d("component_browser.in_context.window_opened", {
          all: n.all,
          connected: n.connected,
          ignored: n.ignored,
          notConnected: n.notConnected,
          entrypoint: o
        });
        s(!0);
      },
      children: e
    }), jsx(_$$f4, {
      isOpen: l,
      onClose: () => s(!1),
      defaultPosition: r.current,
      windowDefaultWidth: 896,
      windowDefaultHeight: 600,
      manager: c,
      entrypoint: o
    })]
  });
}
let uE = "component_browser_in_context_mapping_section--container--t7qk1";
let uC = "component_browser_in_context_mapping_section--mappingRow--J6Tn-";
let uT = "component_browser_in_context_mapping_section--iconContainer--zoIHh";
function uS({
  numComponents: e
}) {
  return jsxs("div", {
    className: "component_browser_in_context_mapping_section--panelAccessoryContainer--M4xEy",
    children: [jsx("div", {
      className: "component_browser_in_context_mapping_section--alphaTag--qyOlA",
      children: jsx(_$$E7, {
        variant: "defaultOutline",
        size: "md",
        children: renderI18nText("dev_handoff.component_browser.alpha")
      })
    }), 0 === e && jsx("div", {
      className: "component_browser_in_context_mapping_section--noComponentsTag--ancRM",
      children: jsx(_$$E7, {
        variant: "defaultOutline",
        size: "md",
        children: renderI18nText("dev_handoff.component_browser.in_context_no_components")
      })
    })]
  });
}
function uP() {
  let e = trackDefinedFileEventWithStore();
  let t = useAtomWithSubscription(mO);
  let n = _$$oA2();
  let {
    assetKeys,
    noSelection
  } = AR();
  let s = new Set(assetKeys);
  let d = function (e, t) {
    if (!t || 0 === Object.keys(t.status).length) return {
      connected: 0,
      ignored: 0,
      notConnected: e.length,
      all: e.length
    };
    let n = e.map(e => ({
      assetKey: e
    }));
    let a = 0;
    let i = 0;
    let o = 0;
    (n || []).forEach(e => {
      if (t.status[e.assetKey]) {
        let n = t.status[e.assetKey];
        n && ("connected" === n ? a++ : "ignored" === n ? i++ : "not_connected" === n && o++);
      }
    });
    return {
      connected: a,
      ignored: i,
      notConnected: o,
      all: a + i + o
    };
  }(_$$k4(s, n), t);
  let {
    numComponents,
    connectedPercentage,
    ignoredPercentage,
    notConnectedPercentage,
    totalConnected
  } = function (e) {
    let t = Math.round(e.connected / e.all * 100);
    let n = Math.round(e.ignored / e.all * 100);
    return {
      numComponents: e.all,
      totalConnected: e.connected,
      connectedPercentage: t,
      ignoredPercentage: n,
      notConnectedPercentage: 100 - t - n
    };
  }(d);
  let g = useRef(null);
  let x = function () {
    let e = _$$uQ();
    return useDeepEqualSceneValue((e, t) => {
      let n = e?.get(t ?? "");
      return n?.type === "TEXT";
    }, e);
  }();
  if (useEffect(() => {
    x || e("component_browser.in_context.inspect_panel_item_seen", d);
  }, [d, e, x]), x) return null;
  let m = t?.loadingStatus === "loading";
  return !t || m ? jsx(Fragment, {
    children: jsx(VZ, {
      title: getI18nString("dev_handoff.component_browser.in_context_section_title"),
      recordingKey: "in_context_code_connect",
      collapsiblePanelKey: "in_context_code_connect",
      children: jsx("div", {
        className: uE,
        children: jsx("div", {
          className: "component_browser_in_context_mapping_section--codeConnectLoadingContainer--dkmkr",
          children: jsx(LoadingSpinner, {
            size: "sm"
          })
        })
      })
    })
  }) : jsx(Fragment, {
    children: jsx(VZ, {
      title: getI18nString("dev_handoff.component_browser.in_context_section_title"),
      recordingKey: "in_context_code_connect",
      collapsiblePanelKey: 0 === numComponents ? void 0 : "in_context_code_connect",
      titleAccessory: jsx(uS, {
        numComponents
      }),
      children: numComponents > 0 && jsxs("div", {
        ref: g,
        className: uE,
        children: [jsx("div", {
          className: "component_browser_in_context_mapping_section--description--Mbn4i",
          children: renderI18nText("dev_handoff.component_browser.in_context_section_description", {
            value: jsx(Link, {
              newTab: !0,
              href: "https://docs.google.com/document/d/1IsJTLpqR1rRQfphfbotvWoYbtoaZExKpggeANRFmRI8/edit?tab=t.0#heading=h.t2s4u45z7gm6",
              children: renderI18nText("dev_handoff.component_browser.in_context_section_learn_more")
            })
          })
        }), jsx("div", {
          className: "component_browser_in_context_mapping_section--selectionTypeText---cgl8",
          children: noSelection ? 0 === numComponents ? renderI18nText("dev_handoff.component_browser.in_context_section_page_no_components") : renderI18nText("dev_handoff.component_browser.in_context_section_page_num_components", {
            num_components: numComponents
          }) : 0 === numComponents ? renderI18nText("dev_handoff.component_browser.in_context_section_selection_no_components") : renderI18nText("dev_handoff.component_browser.in_context_section_selection_num_components", {
            num_components: numComponents
          })
        }), jsxs("div", {
          className: "component_browser_in_context_mapping_section--mappingContainer--h35ou",
          children: [jsxs("div", {
            className: uC,
            children: [jsx("span", {
              className: `${uT} component_browser_in_context_mapping_section--mappedIconContainer--Q5Cgz`,
              children: jsx(_$$W3, {})
            }), renderI18nText("dev_handoff.component_browser.in_context_section_percent_components_mapped", {
              num_components: connectedPercentage
            })]
          }), jsxs("div", {
            className: uC,
            children: [jsx("span", {
              className: `${uT} component_browser_in_context_mapping_section--canNotBeMappedIconContainer--VInHT`,
              children: jsx(_$$M5, {})
            }), renderI18nText("dev_handoff.component_browser.in_context_section_percent_components_can_t_be_mapped", {
              num_components: ignoredPercentage
            })]
          }), jsxs("div", {
            className: uC,
            children: [jsx("span", {
              className: `${uT} component_browser_in_context_mapping_section--notMappedIconContainer--K7iv2`,
              children: jsx(_$$w2, {})
            }), renderI18nText("dev_handoff.component_browser.in_context_section_percent_components_need_to_be_mapped", {
              num_components: notConnectedPercentage
            })]
          }), jsx(uA, {
            componentCounts: d,
            panelRef: g,
            entrypoint: "inspect_panel",
            children: totalConnected === numComponents ? getI18nString("dev_handoff.component_browser.in_context_section_view_connections_button") : getI18nString("dev_handoff.component_browser.in_context_section_connect_button")
          })]
        })]
      })
    })
  });
}
let uO = "typography_preview--measureContainer--D1G5R";
let uM = "typography_preview--measure---sPO7";
let uB = "typography_preview--dash--2HzKr";
let uF = "typography_preview--value--v5BEy text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa";
let uz = parsePxNumber(WPY);
function uV({
  fillContainer: e = !1
}) {
  let t = _$$uQ();
  let n = useSelector(e => e.mirror.selectionProperties.selectedFonts);
  return !t || !n || n?.fonts.length < 1 ? null : jsx(VZ, {
    hideHeader: !0,
    noPadding: !0,
    noBorder: !0,
    recordingKey: "typographyPreview",
    children: jsx(uH, {
      nodeId: t,
      containerClassName: e ? "typography_preview--previewContainerFill--QUwgr" : "typography_preview--previewContainerBoxed--yWT-0 typography_preview--previewContainer--zDKlk text--fontPos11--2LvXf text--_fontBase--QdLsd common--well--J0WtH",
      numberOfFonts: n.fonts.length
    })
  });
}
function uH({
  nodeId: e,
  containerClassName: t = "typography_preview--previewContainerFullWidth--61D4v typography_preview--previewContainer--zDKlk text--fontPos11--2LvXf text--_fontBase--QdLsd common--sectionWithBottomSeparator--N54QE",
  numberOfFonts: n = 1,
  localCodeLanguage: o
}) {
  let s = function (e) {
    let t = getVisibleTheme();
    let n = _$$rL() - 32;
    let [a, o] = useState({
      ...uJ,
      loading: !0
    });
    let {
      family,
      style
    } = useDeepEqualSceneValue(t => {
      let n = t.get(e);
      let {
        family: _family,
        style: _style
      } = n?.fontName || {};
      return {
        family: _family,
        style: _style
      };
    });
    let d = useCallback(() => {
      o(e => ({
        ...e,
        imageLoading: !1
      }));
    }, []);
    useEffect(() => {
      let t = e => {
        o(t => {
          uX(t?.url);
          let n = !!e.url && (t.fontFamily !== e.fontFamily || t.fontStyle !== e.fontStyle);
          return {
            ...t,
            ...e,
            imageLoading: n,
            loading: !1,
            error: !e.url && e.error
          };
        });
      };
      let n = () => {
        t({
          ...uJ,
          url: void 0,
          error: !0
        });
      };
      (async () => {
        if (!family || !style) return;
        if (Fonts.fontsAreLoading()) {
          let e = 0;
          await new Promise((t, n) => {
            let a = setInterval(() => {
              Fonts.fontsAreLoading() || (t(), clearInterval(a));
              e > 10 && n();
              e++;
            }, 100);
          });
        }
        if (!Fonts.fontIsLoaded(family, style)) {
          n();
          return;
        }
        let a = HandoffBindingsCpp.getTypographyPreview(e);
        if (a && a.thumbnail?.byteLength > 0) {
          let {
            thumbnail,
            ...n
          } = a;
          let i = URL.createObjectURL(new Blob([thumbnail]));
          t({
            ...n,
            url: i
          });
        } else n();
      })().catch(() => {
        n();
      });
    }, [e, n, family, style, t]);
    useEffect(() => () => uX(a?.url), [a?.url]);
    return {
      ...a,
      onImageLoaded: d
    };
  }(e);
  let {
    fontName,
    inheritedTextStyle
  } = useDeepEqualSceneValue((e, t) => {
    let n = e.get(t);
    return {
      fontName: n?.fontName,
      inheritedTextStyle: n?.inheritedTextStyle
    };
  }, e);
  return jsx("div", {
    className: t,
    children: s.loading ? jsx(_$$e7, {}) : jsx(uW, {
      data: s,
      font: fontName,
      styleId: inheritedTextStyle,
      numberOfFonts: n,
      localCodeLanguage: o
    })
  });
}
function uW({
  data: e,
  font: t,
  styleId: n,
  numberOfFonts: i,
  localCodeLanguage: o
}) {
  let l = getScaledValueWithUnit(o, e.lineHeightInPx, uK, {
    isTextProperty: !0
  });
  let s = getScaledValueWithUnit(o, e.fontSizeInPx, uK, {
    isTextProperty: !0
  });
  let r = e.textStyleNodeId || f$(n);
  let {
    styleName,
    styleDescription
  } = useStrictDeepEqualSceneValue((e, t) => {
    if (!t || 0 === t.length) return {};
    let n = t[0];
    if (!n) return {};
    let a = e.get(n);
    return {
      styleName: a?.name,
      styleDescription: a?.description
    };
  }, [r]);
  let u = Cj(l);
  let p = Cj(s);
  let h = Cj(styleName);
  let f = uz - 16 - (isValidSessionLocalID(parseSessionLocalID(e.textStyleNodeId)) || i > 1 ? 40 : 0);
  let g = e.fullSize.y > f ? e.fullSize.y / f : 1;
  let x = e.fullSize.y / g;
  let m = e.fullSize.x / g;
  let v = x + 1;
  let y = e.capPosition / g;
  let b = e.baselinePosition / g;
  let j = e.bottomPosition / g;
  let w = `calc((100% - ${m}px) / 2)`;
  let N = i > 1 ? jsx("div", {
    className: "typography_preview--label--pJ-5L typography_preview--labelBase--mlEgn ellipsis--ellipsis--Tjyfa text--fontPos11--2LvXf text--_fontBase--QdLsd",
    children: renderI18nText("dev_handoff.typography_preview_multiple_styles")
  }) : styleName ? jsx(ButtonPrimitive, {
    className: "typography_preview--styleName--tA801 typography_preview--labelBase--mlEgn ellipsis--ellipsis--Tjyfa text--fontPos11--2LvXf text--_fontBase--QdLsd",
    onClick: h,
    "aria-label": getI18nString("inspect_panel.code.style"),
    htmlAttributes: {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": styleDescription,
      "data-tooltip-show-above": !0
    },
    children: styleName
  }) : null;
  return jsxs("div", {
    className: ek()("typography_preview--previewHighlights--zrIw3", e.imageLoading ? "typography_preview--hidden--pKo8l" : "typography_preview--shown--6sBFE"),
    children: [e.error ? jsx(uU, {
      font: t
    }) : jsxs("div", {
      className: "typography_preview--centredRow--3-Ofp",
      style: {
        marginTop: (f + 16 - v) / 2,
        height: v
      },
      children: [jsx("div", {
        className: uO,
        style: {
          marginTop: y,
          marginBottom: x - j
        },
        children: jsxs("div", {
          className: ek()(uM, "typography_preview--left--wzNxs"),
          children: [jsx(ButtonPrimitive, {
            className: uF,
            onClick: p,
            "aria-label": s ? getI18nString("inspect_panel.code.font_size_value", {
              value: s
            }) : getI18nString("inspect_panel.code.font_size"),
            htmlAttributes: {
              "data-tooltip-type": KindEnum.TEXT,
              "data-tooltip": getI18nString("inspect_panel.code.font_size"),
              "data-tooltip-show-above": !0
            },
            children: s
          }), jsx("div", {
            className: uB,
            "aria-hidden": !0
          })]
        })
      }), jsxs("div", {
        className: "typography_preview--measurementLines--U03DM",
        style: {
          width: m,
          height: x,
          left: w,
          right: w
        },
        "aria-hidden": !0,
        children: [jsx(uG, {
          position: y
        }), jsx(uG, {
          position: b
        }), jsx(uG, {
          position: j
        })]
      }), jsx(_$$J7, {
        className: "typography_preview--borderedPreview--wYbvY",
        style: {
          width: m,
          height: x
        },
        src: e.url,
        onLoad: e.onImageLoaded,
        "aria-label": t ? getI18nString("dev_handoff.typography_preview_aria_label", {
          fontFamily: t.family,
          fontStyle: t.style
        }) : getI18nString("dev_handoff.typography_preview_empty_aria_label"),
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": t ? `${t.family} ${t.style}` : void 0,
        "data-tooltip-show-above": !0
      }), jsx("div", {
        className: uO,
        children: jsxs("div", {
          className: ek()(uM, "typography_preview--right--QhAIw"),
          children: [jsx(ButtonPrimitive, {
            className: uF,
            onClick: u,
            "aria-label": l ? getI18nString("inspect_panel.typography.line_height_value", {
              value: l
            }) : getI18nString("inspect_panel.typography.line_height"),
            htmlAttributes: {
              "data-tooltip-type": KindEnum.TEXT,
              "data-tooltip": getI18nString("inspect_panel.typography.line_height"),
              "data-tooltip-show-above": !0
            },
            children: l
          }), jsx("div", {
            className: uB,
            "aria-hidden": !0
          })]
        })
      })]
    }), N]
  });
}
function uG({
  position: e
}) {
  return jsx("div", {
    className: "typography_preview--measurementLine---lBL5",
    style: {
      top: e
    }
  });
}
function uU({
  font: e
}) {
  let t = e?.family;
  let n = e?.style ?? "";
  let i = t && !Fonts.fontIsLoaded(t, n) && t ? getI18nString("dev_handoff.typography_preview_missing_font", {
    fontFamily: t,
    fontStyle: n
  }) : void 0;
  return jsx("div", {
    className: "typography_preview--previewError--Kwn7m",
    children: jsx("span", {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": i,
      children: renderI18nText("dev_handoff.typography_preview_not_available")
    })
  });
}
let uK = e => e.toLocaleString("en", {
  maximumFractionDigits: 3,
  useGrouping: !1
});
let uX = e => {
  e && URL.revokeObjectURL(e);
};
let uJ = {
  url: void 0,
  fullSize: {
    x: 0,
    y: 0
  },
  capPosition: 0,
  baselinePosition: 0,
  bottomPosition: 0,
  fontSizeInPx: 0,
  lineHeightInPx: 0,
  fontFamily: "",
  fontStyle: "",
  textStyleNodeId: ""
};
function uQ({
  fillContainer: e = !1
}) {
  return !function () {
    let e = _$$uQ();
    return useDeepEqualSceneValue((e, t) => e?.get(t ?? "")?.type === "TEXT", e);
  }() ? jsx(tr, {
    fillContainer: e
  }) : jsx(uV, {
    fillContainer: e
  });
}
let u8 = userFlagExistsAtomFamily("dev_mode_mcp_has_seen_mcp_enable_button_callout");
function u6() {
  let e = useDtMcpCalloutExperiment();
  let t = useAtomWithSubscription(u8);
  let {
    show,
    isShowing,
    complete
  } = _$$e3({
    overlay: ma5,
    priority: _$$N.SECONDARY_MODAL,
    experiment: {
      check: e,
      predicate: e => !!e,
      postCheck: () => !0
    }
  }, [t]);
  useSingleEffect(() => {
    show();
  });
  return jsx(OnboardingModal, {
    arrowPadding: 16,
    arrowPosition: ArrowPosition.RIGHT_BODY,
    description: renderI18nText("dev_handoff.mcp.upsell_description"),
    isShowing,
    onClose: complete,
    primaryCta: {
      label: renderI18nText("dev_handoff.mcp.upsell_confirmation"),
      type: "button",
      ctaTrackingDescriptor: UpgradeAction.GOT_IT,
      onClick: complete
    },
    shouldDisableAnimation: !0,
    targetKey: "enable-mcp-button",
    title: renderI18nText("dev_handoff.mcp.upsell_title"),
    trackingContextName: "McpEnableUpsell"
  });
}
function u9() {
  return jsxs("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 180 180",
    fill: "none",
    children: [jsxs("g", {
      clipPath: "url(#clip0_19_13)",
      children: [jsx("path", {
        d: "M18 84.8528L85.8822 16.9706C95.2548 7.59798 110.451 7.59798 119.823 16.9706V16.9706C129.196 26.3431 129.196 41.5391 119.823 50.9117L68.5581 102.177",
        style: {
          stroke: "var(--color-icon)"
        },
        strokeWidth: "12",
        strokeLinecap: "round"
      }), jsx("path", {
        d: "M69.2652 101.47L119.823 50.9117C129.196 41.5391 144.392 41.5391 153.765 50.9117L154.118 51.2652C163.491 60.6378 163.491 75.8338 154.118 85.2063L92.7248 146.6C89.6006 149.724 89.6006 154.789 92.7248 157.913L105.331 170.52",
        style: {
          stroke: "var(--color-icon)"
        },
        strokeWidth: "12",
        strokeLinecap: "round"
      }), jsx("path", {
        d: "M102.853 33.9411L52.6482 84.1457C43.2756 93.5183 43.2756 108.714 52.6482 118.087V118.087C62.0208 127.459 77.2167 127.459 86.5893 118.087L136.794 67.8822",
        style: {
          stroke: "var(--color-icon)"
        },
        strokeWidth: "12",
        strokeLinecap: "round"
      })]
    }), jsx("defs", {
      children: jsx("clipPath", {
        id: "clip0_19_13",
        children: jsx("rect", {
          width: "180",
          height: "180",
          fill: "white"
        })
      })
    })]
  });
}
let pe = "mcp_panel--container--l5vzW text--fontPos11--2LvXf text--_fontBase--QdLsd";
let pt = "mcp_panel--settingRow--cDyRD";
let pn = "mcp_panel--settingLabel--evanf";
let pa = "mcp_panel--bannerDescription--80ohH";
let pi = "https://help.figma.com/hc/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server";
function po() {
  let e = $k();
  let t = getObservableOrFallback(EditorPreferencesApi().enableCodegenMcpServer);
  let n = getInitialDynamicConfig("dt_mcp_eligible_for_new_ui_date").get("date", null);
  let i = useAtomWithSubscription(userCreatedAtAtom);
  let o = !!n && !!i && new Date(n) <= new Date(i);
  return !getFeatureFlags().dt_my_cool_plugin || e ? null : hasDesktopAPI() ? desktopAPIInstance?.hasFeature("addCodegenMCPStartupBinding") ? t ? jsx(VZ, {
    title: getI18nString("dev_handoff.mcp.panel_title"),
    recordingKey: "mcp",
    collapsiblePanelKey: "mcp",
    collapsedHeaders: jsx(ps, {}),
    additionalHeaders: jsx(pg, {}),
    titleAccessory: jsx(px, {}),
    children: jsx("div", {
      className: pe,
      children: jsxs("div", {
        className: "mcp_panel--settingsContainer--8E7WY",
        children: [o && jsx(pu, {}), jsx(pp, {}), jsx(pc, {}), jsx(pd, {}), jsx(ph, {})]
      })
    })
  }) : jsx(pl, {}) : null : jsx(pr, {});
}
function pl() {
  let e = useCallback(() => {
    fullscreenValue.triggerAction("toggle-enable-codegen-mcp-server");
  }, []);
  return jsxs(VZ, {
    title: getI18nString("dev_handoff.mcp.panel_title"),
    recordingKey: "disabledMcp",
    collapsiblePanelKey: "mcp",
    collapsedHeaders: jsx(ps, {}),
    titleAccessory: jsx(px, {}),
    children: [jsx(u6, {}), jsxs("div", {
      className: "mcp_panel--newUserContainer--w34Q3",
      children: [jsx("div", {
        className: pa,
        children: getI18nString("dev_handoff.mcp.new_user_banner_description")
      }), jsx(ButtonWide, {
        variant: "secondary",
        onClick: e,
        recordingKey: "newUserEnableMcp",
        "aria-label": getI18nString("dev_handoff.mcp.enable_button"),
        htmlAttributes: {
          "data-onboarding-key": "enable-mcp-button"
        },
        children: jsxs("div", {
          className: "mcp_panel--newUserButtonContainer--F96sM",
          children: [jsx(u9, {}), renderI18nText("dev_handoff.mcp.enable_button")]
        })
      })]
    })]
  });
}
function ps() {
  let e = getObservableOrFallback(EditorPreferencesApi().enableCodegenMcpServer);
  return jsx(_$$E7, {
    variant: e ? "successOutline" : "inactiveOutline",
    size: "md",
    children: e ? getI18nString("dev_handoff.mcp.enabled") : getI18nString("dev_handoff.mcp.disabled")
  });
}
function pr() {
  return jsx(VZ, {
    title: getI18nString("dev_handoff.mcp.panel_title"),
    recordingKey: "mcp",
    collapsiblePanelKey: "mcp",
    defaultCollapsed: !0,
    children: jsx("div", {
      className: pe,
      children: jsx("p", {
        children: renderI18nText("dev_handoff.mcp.requires_desktop_app_2", {
          learnMoreLink: jsx(Link, {
            trusted: !0,
            newTab: !0,
            href: pi,
            children: renderI18nText("dev_handoff.mcp.learn_more")
          })
        })
      })
    })
  });
}
function pd() {
  let e = "internal-path-for-image-writes-to-disk";
  let [t, n] = useAtomValueAndSetter(_$$f5);
  let i = useAtomWithSubscription(_$$pe);
  return As() && getFeatureFlags().dt_my_cool_plugin_internal && "write-to-disk" === i ? jsxs("div", {
    className: pt,
    children: [jsx(Label, {
      className: pn,
      htmlFor: e,
      children: renderI18nText("dev_handoff.mcp.image_source.write_to_disk_path")
    }), jsx(InputComponent, {
      id: e,
      value: t,
      onChange: n
    })]
  }) : null;
}
function pc() {
  let e = "image-source";
  let [t, n] = useAtomValueAndSetter(_$$pe);
  let [i, o] = useAtomValueAndSetter(Pq);
  let l = useAtomWithSubscription(Kx);
  return desktopAPIInstance?.hasFeature("addMcpImageSupport") && "xml" !== l ? jsxs(Fragment, {
    children: [jsxs("div", {
      className: pt,
      children: [jsx(Label, {
        className: pn,
        htmlFor: e,
        children: renderI18nText("dev_handoff.mcp.image_source")
      }), jsxs(_$$bL3, {
        value: t,
        onChange: e => n(e),
        children: [jsx(DZ, {
          id: e
        }), jsxs(_$$mc, {
          children: [jsx(_$$c$2, {
            value: "local",
            children: renderI18nText("dev_handoff.mcp.image_source.local")
          }), jsx(_$$c$2, {
            value: "placeholder-svg",
            children: renderI18nText("dev_handoff.mcp.image_source.placeholder")
          }), As() && jsx(_$$c$2, {
            value: "write-to-disk",
            children: renderI18nText("dev_handoff.mcp.image_source.write_to_disk")
          })]
        })]
      })]
    }), "write-to-disk" === atomStoreManager.get(_$$pe) && jsx("div", {
      className: pt,
      children: jsx(Checkbox, {
        checked: !i,
        onChange: () => o(e => !e),
        label: jsx(Label, {
          children: getI18nString("fullscreen_actions.mcp-allow-overwriting-files")
        })
      })
    })]
  }) : null;
}
function pu() {
  let e = selectUserFlag("dev_mode_mcp_has_dismissed_client_setup_banner");
  let t = selectUserFlag("dev_mode_mcp_has_used_a_tool");
  let n = useDispatch();
  return e || t ? null : jsx("div", {
    className: pt,
    children: jsx(BannerInline, {
      variant: "default",
      onDismiss: () => n(postUserFlag({
        dev_mode_mcp_has_dismissed_client_setup_banner: !0
      })),
      children: jsx(BannerMessage, {
        title: getI18nString("dev_handoff.mcp.find_instructions_title"),
        children: jsx("span", {
          className: pa,
          children: renderI18nText("dev_handoff.mcp.find_instructions_sub_title", {
            hereWithHyperlink: jsx(LinkPrimitive, {
              trusted: !0,
              newTab: !0,
              href: pi,
              className: "mcp_panel--bannerLink--hSoWc",
              children: renderI18nText("dev_handoff.mcp.find_instructions_sub_title_here")
            })
          })
        })
      })
    })
  });
}
function pp() {
  let e = getObservableOrFallback(EditorPreferencesApi().enableCodegenMcpServer);
  return jsxs("div", {
    className: pt,
    children: [jsx(Label, {
      className: pn,
      children: renderI18nText("dev_handoff.mcp.status")
    }), jsxs("div", {
      "data-tooltip": getI18nString("dev_handoff.mcp.to_disable_tooltip"),
      "data-tooltip-type": KindEnum.TEXT,
      className: "mcp_panel--statusDisplay--SL0ss",
      children: [jsx("div", {
        className: "mcp_panel--statusIcon--9wmDn",
        style: {
          backgroundColor: e ? "var(--color-icon-handoff)" : "var(--color-icon-tertiary)"
        }
      }), jsx("span", {
        children: e ? getI18nString("dev_handoff.mcp.enabled") : getI18nString("dev_handoff.mcp.disabled")
      })]
    })]
  });
}
function ph() {
  return jsx(Link, {
    trusted: !0,
    newTab: !0,
    href: "https://form.asana.com/?k=jMdFq_1SBUOyh8_k3q76QA&d=10497086658021",
    "data-tooltip-show-above": !0,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("dev_handoff.mcp.beta_feedback_tooltip"),
    onClick: e => e.stopPropagation(),
    children: jsxs("div", {
      className: "mcp_panel--betaFeedbackButton--RzKNW",
      children: [jsx("div", {
        className: "mcp_panel--betaFeedbackIcon--KyMbo",
        children: jsx(_$$S2, {})
      }), jsx("span", {
        children: renderI18nText("dev_handoff.mcp.beta_feedback")
      })]
    })
  });
}
function pf() {
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  let [n, o] = useAtomValueAndSetter(_$$tz);
  let [l, d] = useAtomValueAndSetter(SV);
  let [c, u] = useAtomValueAndSetter(_$$lk2);
  let [p, h] = useAtomValueAndSetter(Kx);
  let [f, g] = useAtomValueAndSetter(_$$pe);
  let [x, m] = useAtomValueAndSetter(Pq);
  let _ = Fc();
  let v = getFeatureFlags();
  let y = getObservableOrFallback(EditorPreferencesApi().enableCodegenMcpServer);
  let b = [{
    visible: !0,
    element: jsx(MenuTitleComp, {
      children: renderI18nText("dev_handoff.mcp.settings")
    })
  }, {
    visible: !!v.dt_my_cool_plugin_d2r_tailwind_option,
    element: jsx(H_, {
      disabled: "design_to_react" !== p,
      checked: "design_to_react" === p && c,
      onChange: u,
      children: renderI18nText("fullscreen_actions.mcp-use-tailwind")
    })
  }, {
    visible: _,
    element: jsx(H_, {
      checked: n,
      onChange: o,
      children: renderI18nText("fullscreen_actions.mcp-enable-code-connect")
    })
  }, {
    visible: !!(v.dt_my_cool_plugin_codebase_suggestions && _),
    element: jsx(H_, {
      checked: l,
      onChange: d,
      children: renderI18nText("fullscreen_actions.mcp-enable-codebase-suggestions")
    })
  }, {
    visible: !!v.dt_my_cool_plugin_xml,
    element: jsx(H_, {
      checked: "xml" === p,
      onChange: () => h("xml" === p ? "design_to_react" : "xml"),
      children: renderI18nText("fullscreen_actions.mcp-xml-code")
    })
  }, {
    visible: !!v.dt_my_cool_plugin_internal,
    element: jsx(H_, {
      checked: "jsx" === p,
      onChange: () => h("jsx" === p ? "design_to_react" : "jsx"),
      children: renderI18nText("fullscreen_actions.mcp-jsx-code")
    })
  }, {
    visible: !!(desktopAPIInstance?.hasFeature("addMcpImageSupport") && "xml" !== p && "write-to-disk" === f),
    element: jsx(H_, {
      checked: !x,
      onChange: () => m(e => !e),
      children: getI18nString("fullscreen_actions.mcp-allow-overwriting-files")
    })
  }, {
    visible: !0,
    element: jsx(MenuSeparator, {})
  }, {
    visible: y,
    element: jsx(MenuItemComp, {
      onClick: () => {
        fullscreenValue.triggerAction("toggle-enable-codegen-mcp-server");
      },
      children: y ? getI18nString("dev_handoff.mcp.disable_option") : getI18nString("dev_handoff.mcp.enable_button")
    })
  }].filter(e => e.visible);
  return 0 === b.length ? null : jsxs(MenuRootComp, {
    manager,
    children: [jsx(IconButton, {
      ...getTriggerProps(),
      "aria-label": getI18nString("dev_handoff.mcp.configure"),
      children: jsx(_$$J5, {})
    }), jsx(MenuContainerComp, {
      children: b.map((e, t) => jsx(_$$Fragment, {
        children: e.element
      }, t))
    })]
  });
}
function pg() {
  return jsxs("div", {
    className: "mcp_panel--headerContent--DnihT",
    children: [jsx(LinkPrimitive, {
      href: pi,
      children: jsx(_$$G4, {})
    }), jsx(pf, {})]
  });
}
function px() {
  return jsx("div", {
    className: "mcp_panel--badgeContainer--iqiyq",
    children: jsx(_$$E7, {
      variant: "inactiveOutline",
      size: "md",
      children: getI18nString("dev_handoff.mcp.beta")
    })
  });
}
function p_() {
  VX(StyleType.FILL);
  VX(StyleType.STROKE);
  VX(StyleType.TEXT);
  VX(StyleType.EFFECT);
  return null;
}
function pv({
  children: e
}) {
  return jsx(VZ, {
    title: getI18nString("dev_handoff.layer_properties"),
    collapsiblePanelKey: "code",
    recordingKey: "code_panel",
    collapsedHeaders: jsx(_$$E8, {}),
    children: e
  });
}
function py() {
  let e = useDispatch();
  let t = selectIsCopyExportAllowed();
  return getFeatureFlags().dt_multi_node && t ? jsx(ButtonWide, {
    onClick: () => e(showModalHandler({
      type: cc,
      data: {}
    })),
    variant: "secondary",
    children: renderI18nText("dev_handoff.mc.open_cta")
  }) : null;
}
function pb() {
  let e = _$$ro({
    includeStateGroups: !1
  });
  return getFeatureFlags().dt_component_browser_in_context && !e ? jsx(uP, {}) : jsx(sM, {});
}
function pj(e) {
  let t = useFullscreenReady();
  let n = isSingleSceneGraphSelectionInDevHandoff();
  let o = _$$ro();
  let l = _$$uQ();
  let d = useDeepEqualSceneValue((e, t) => e?.get(t ?? "")?.type === "SECTION", l);
  let c = NM();
  let u = isCodeMode();
  let p = useDropdownState();
  let h = useRef(null);
  let f = useSceneGraphSelector();
  let g = fullscreenAlias.getIsExtension();
  let x = useAtomWithSubscription(be);
  let m = mr(l ?? "", f);
  return jsx(Tabs.TabPanel, {
    ...e.tabProps,
    height: "fill",
    children: jsxs("div", {
      className: "inspect_panel--inspectPanelContainer--SZhfY",
      children: [jsx(dp, {
        plugin: x ?? null
      }), jsx(p_, {}), jsx("div", {
        style: {
          position: "relative",
          width: "100%",
          height: "100%"
        },
        children: jsx(_$$P2, {
          ref: h,
          className: "inspect_panel--scrollContainer--wwC0l properties_panel--scrollContainer--o2LxW",
          onContextMenu: noop,
          scrollingDisabled: !!p,
          enableOverscroll: !0,
          containerId: INSPECT_PANEL,
          children: jsx(TrackingProvider, {
            name: TrackingKeyEnum.CODE_PANEL,
            children: jsx(TabLoop, {
              children: jsx("div", {
                className: g ? "inspect_panel--inspectPanelContentsBottomAligned--MOK20" : "inspect_panel--inspectPanelContents--iYf8P",
                children: jsxs(_$$L3, {
                  children: [n ? jsxs(Fragment, {
                    children: [jsx(ri, {
                      lastViewTimestamp: e.lastViewTimestamp,
                      hasCodeConnect: m
                    }), t && jsx(Mw, {
                      panelName: _$$ON.HANDOFF
                    }), o && jsx(sF, {}), d ? jsxs(Fragment, {
                      children: [getFeatureFlags().dt_component_browser_in_context && jsx(uP, {}), jsx(pv, {
                        children: jsx(Fe, {})
                      })]
                    }) : jsxs(Fragment, {
                      children: [jsx(pb, {}), jsxs(pv, {
                        children: [jsx("div", {
                          className: ek()("inspect_panel--layerPreview--hxLhR", fullscreenAlias.getIsExtension() && "inspect_panel--isInExtension--kzn7u"),
                          children: jsx(uQ, {})
                        }), jsx(_$$pm, {
                          inspectionModeLayout: "segmented"
                        }), u ? jsxs(Fragment, {
                          children: [jsx(py, {}), jsx(dw, {
                            hideBorder: !0,
                            padded: !0
                          }), jsx(_$$r_, {}), jsx(_$$t6, {
                            isSubsection: !0
                          })]
                        }) : jsx(Fe, {})]
                      })]
                    }), jsx(um, {}), jsx(_$$G3, {}), jsx(cr, {}), jsx(_$$L4, {})]
                  }) : c ? jsxs(Fragment, {
                    children: [!g && jsxs(Fragment, {
                      children: [jsx(s8, {}), t && jsx(Mw, {
                        panelName: _$$ON.HANDOFF
                      })]
                    }), getFeatureFlags().dt_component_browser_in_context && jsx(uP, {}), jsx(_$$V2, {}), jsx(um, {}), jsx(_$$L4, {})]
                  }) : jsxs(Fragment, {
                    children: [jsx(ri, {}), t && jsx(Mw, {
                      panelName: _$$ON.HANDOFF
                    }), jsx($b, {}), jsx(po, {}), getFeatureFlags().dt_component_browser_in_context && jsx(uP, {}), jsx(cf, {}), jsx(_$$A18, {}), jsx(ct, {})]
                  }), jsx("div", {})]
                })
              })
            })
          })
        })
      })]
    })
  });
}
let pN = () => {
  fullscreenValue.triggerAction("deselect-all");
};
function pk({
  version: e
}) {
  let t = useDispatch();
  let n = useDevModeFocusId();
  let i = function (e, t) {
    if (!t.dev_mode_activity || 0 === t.dev_mode_activity.length) return;
    let n = e ? t.dev_mode_activity.find(t => t.node_id === e) : t.dev_mode_activity[0];
    if (n) return {
      id: n.id,
      activityType: n.activity_type,
      timestamp: new Date(n.timestamp),
      version: {
        id: t.id,
        description: t.description ?? null
      },
      user: {
        id: t.user.id,
        name: t.user.handle,
        imgUrl: t.user.img_url
      },
      metadata: n.metadata
    };
  }(n, e);
  let l = n && i ? jsx(d2, {
    activity: i
  }) : jsx(YL, {
    item: e
  });
  return jsx(jP, {
    description: e.description,
    dispatch: t,
    displayText: l,
    editorType: FFileType.DESIGN,
    first: !1,
    iconOverride: i ? d8(i, !0) : void 0,
    isActive: !0,
    isAllowedToChangeVersion: () => !1,
    label: "activity-row",
    last: !0,
    onSelect: noop,
    time: n ? void 0 : e.edited_at,
    user: e.user.handle,
    userUrl: e.user.img_url,
    versionId: e.id,
    view: null
  });
}
function pA({
  versions: e
}) {
  let t = d7();
  let {
    activeId
  } = useSelector(e => e.versionHistory);
  let i = selectCurrentFile();
  let s = i?.canEdit;
  let r = useDispatch();
  let d = useDevModeFocusId();
  let c = d6();
  let u = d4();
  let p = t ? e[0] : e.find(e => e.id === activeId);
  let h = new ReduxSceneGraph(FileSourceType.LIVE_FILE).get(d ?? "");
  let f = h?.editInfo?.lastEditedAt;
  return p ? jsxs("div", {
    className: cssBuilderInstance.flex.flexColumn.borderBox.bSolid.bb1.colorBorder.$,
    children: [d ? null : jsx(_$$s8, {
      onClose: u,
      addSavepoint: () => {
        r(showModalHandler({
          type: SavepointModalContainer,
          data: {}
        }));
        pN();
      },
      isViewOnly: !s
    }), jsxs("ol", {
      children: [jsx(d9, {
        lastEditedAt: f,
        hasEdits: !1,
        isActive: t,
        onSelect: () => {
          d ? c(d) : (r(VERSION_HISTORY_SET_ACTIVE({
            id: CURRENT_VERSION_ID
          })), pN());
        },
        focusNodeId: d
      }), !t && jsx(pk, {
        version: p
      })]
    }), jsx("div", {
      className: cssBuilderInstance.flex.pt12.pb12.pl16.pr16.itemsCenter.$,
      children: jsx(Button, {
        variant: "link",
        onClick: pN,
        children: renderI18nText("dev_handoff.version_history.view_all_versions")
      })
    })]
  }) : null;
}
function pP(e) {
  return jsx(Tabs.TabPanel, {
    ...e.tabProps,
    children: jsx("div", {
      className: "dev_handoff_comments_panel--devHandoffCommentsPanel--1Lqo9",
      children: jsx(_$$B4, {
        stackHeader: !1,
        hideResolve: !1
      })
    })
  });
}
let pL = memo(function () {
  let {
    commentsActive,
    isNodeSelected,
    versionHistoryActive
  } = selectWithShallowEqual(e => ({
    commentsActive: e.mirror.appModel.currentTool === _$$ec.tool,
    isNodeSelected: Object.keys(e.mirror.sceneGraphSelection).length > 0,
    versionHistoryActive: e.mirror.appModel.activeCanvasEditModeType === LayoutTabType.DEV_HANDOFF_HISTORY
  }));
  let [i, s] = Tabs.useTabs({
    comment: !0
  });
  let r = useDevModeFocusId();
  let d = useDispatch();
  let c = getObservableValue(getSelectedDevModePropertiesPanelTab(), IAssertResource.PRIMARY);
  let p = new Set(getEnabledDevModePropertiesPanelTabs().map(e => r5[e]).filter(e => null != e));
  let h = {};
  Object.values(r5).forEach(e => {
    h[e] = p.has(e);
  });
  let [f, g, _] = Tabs.useManagedTabs(h, r5[c] ?? r5[IAssertResource.PRIMARY], e => {
    let t = r3[e];
    if (null == t) {
      reportError(ServiceCategories.DEVELOPER_TOOLS, Error(`DevHandoffRightPanel: Unknown tabId '${e}' passed to onSetTab`));
      return;
    }
    setSelectedDevModePropertiesPanelTab(t);
    e === r5[IAssertResource.PLUGIN] && d(postUserFlag({
      [DEV_HAND]: !0
    }));
  }, {
    recordingKey: "devHandoffPanelTabs"
  });
  let y = E1();
  let j = jh(r ?? void 0);
  b({
    doReport: !0
  });
  let w = versionHistoryActive && !isNodeSelected && !r;
  let N = c === IAssertResource.PRIMARY && !commentsActive && !w;
  let k = c === IAssertResource.STRING_MANAGEMENT;
  let A = jsx(KeyboardReceiver, {
    name: "rightPanels",
    focusOnMount: !0,
    handleKeyDown: noop,
    children: jsx("div", {
      id: "dev-handoff-inspect-panel",
      children: jsxs(de, {
        tabInfo: {
          commentTabProps: i.comment,
          generalTabPropsMap: f,
          generalTabManager: _
        },
        children: [w && jsx(yU, {
          fileHasCMSData: !1
        }), versionHistoryActive && isNodeSelected && jsx(pA, {
          versions: j.versions
        }), commentsActive && jsx(pP, {
          tabProps: s.comment
        }), N && jsx(pj, {
          lastViewTimestamp: y,
          tabProps: g[r5[IAssertResource.PRIMARY]]
        }), k && jsx(_$$V_, {}), jsx(rQ, {
          tabProps: g[r5[IAssertResource.PLUGIN]]
        })]
      })
    })
  });
  return jsx(_$$x3, {
    children: jsx(_$$m3, {
      role: "region",
      "aria-label": getI18nString("dev_handoff.right_panel.accessible_label"),
      children: A
    })
  });
});
let pO = "dev-handoff-breadcrumbs-dropdown";
let pM = "dev-handoff-collapsed-breadcrumb-dropdown";
function pB(e) {
  return !!e;
}
function pF() {
  let e = useRef(null);
  let [t, n] = useState(null);
  let a = useCallback(() => {
    n(e?.current?.getBoundingClientRect() || null);
  }, [e]);
  useEffect(() => (a(), _$$_2.addListener(a), window.addEventListener("resize", a), () => {
    _$$_2.removeListener(a);
    window.removeEventListener("resize", a);
  }), [a]);
  return [e, t, a];
}
function pz({
  selectedNode: e,
  targetRect: t
}) {
  let n = useDispatch();
  let i = (e => {
    let t = e.parentNode;
    return t?.childrenNodes ?? [e];
  })(e).map(t => {
    let n = t ? function ({
      children: e
    }) {
      return e.map(e => ({
        displayText: e.name,
        onMouseEnter: () => updateHoveredNode(e.guid),
        onMouseExit: () => updateHoveredNode(""),
        icon: jsx(Bf, {
          guid: e.guid,
          isMenuIcon: !0
        }),
        callback: () => replaceSelection([e.guid])
      })).filter(pB);
    }({
      children: t.childrenNodes
    }) : void 0;
    return t ? {
      displayText: t?.name ?? "",
      isChecked: t.guid === e.guid,
      onMouseEnter: () => updateHoveredNode(t.guid),
      onMouseExit: () => updateHoveredNode(""),
      icon: jsx(Bf, {
        guid: t?.guid ?? "",
        isMenuIcon: !0
      }),
      callback: () => replaceSelection([t.guid]),
      children: n && n.length > 0 ? n : void 0,
      callbackOnClickWithChildren: !0
    } : null;
  }).filter(pB);
  return jsx(_$$j, {
    showPoint: !1,
    items: i,
    onSelectItem: e => {
      e.callback && e.callback("", null, n);
    },
    parentRect: t,
    dispatch: n,
    displayAboveTarget: !0
  });
}
function pV({
  nodeID: e
}) {
  let t = useDispatch();
  let [n, i, l] = pF();
  let s = useDropdownState();
  let r = useSceneGraphSelector().get(e);
  if (!r) return null;
  let d = s?.type === pO;
  let c = "INSTANCE" === r.type || "SYMBOL" === r.type;
  return jsxs(Fragment, {
    children: [d && i && jsx(pz, {
      selectedNode: r,
      targetRect: i
    }), jsxs("button", {
      className: "dev_handoff_breadcrumbs--pathElementSelected--w9aeS dev_handoff_breadcrumbs--pathElement--AKgt0",
      onClick: function () {
        l();
        d || t(showDropdownThunk({
          type: pO,
          data: {
            hasOwnEscKeyHandler: !1
          }
        }));
      },
      ref: n,
      title: r.name,
      children: [jsx(Bf, {
        guid: r.guid,
        className: c ? "dev_handoff_breadcrumbs--layerIconPurple--Qit6B" : "dev_handoff_breadcrumbs--layerIcon--jR8ti"
      }), r.name]
    })]
  });
}
function pH({
  nodeID: e
}) {
  let t = useSceneGraphSelector().get(e);
  return t ? jsx("button", {
    title: t.name,
    className: "dev_handoff_breadcrumbs--pathElement--AKgt0",
    onClick: () => replaceSelection([t.guid]),
    onMouseEnter: () => updateHoveredNode(t.guid),
    onMouseLeave: () => updateHoveredNode(""),
    children: t.name
  }) : null;
}
function pW({
  nodeIDs: e
}) {
  let t = useDispatch();
  let [n, i, l] = pF();
  let s = useDropdownState();
  let r = s?.type === pM;
  let d = useSceneGraphSelector();
  let c = e.map(d.get).filter(isNotNullish);
  let u = c.map(e => ({
    displayText: e.name,
    onMouseEnter: () => updateHoveredNode(e.guid),
    onMouseExit: () => updateHoveredNode(""),
    icon: jsx(Bf, {
      guid: e.guid,
      isMenuIcon: !0
    }),
    callback: () => replaceSelection([e.guid])
  }));
  return jsxs(Fragment, {
    children: [r && i && jsx(_$$j, {
      showPoint: !1,
      items: u,
      onSelectItem: e => {
        e.callback && e.callback("", null, t);
      },
      parentRect: i,
      dispatch: t,
      displayAboveTarget: !0
    }), jsx("button", {
      ref: n,
      className: "dev_handoff_breadcrumbs--pathElementCollapsed--uY2eU dev_handoff_breadcrumbs--pathElement--AKgt0",
      onClick: function () {
        l();
        r || t(showDropdownThunk({
          type: pM,
          data: {
            hasOwnEscKeyHandler: !1
          }
        }));
      },
      title: getI18nString("dev_handoff.breadcrumbs.hidden_nodes", {
        count: c.length
      }),
      children: getI18nString("dev_handoff.breadcrumbs.ellipsis")
    })]
  });
}
let pG = memo(() => {
  let {
    selectedNodeID
  } = selectWithShallowEqual(e => ({
    selectedNodeID: Object.keys(e.mirror.sceneGraphSelection)[0]
  }));
  let t = getObservableOrFallback(AppStateTsApi.devHandoffState().currentNodeId);
  let n = useImmediateSceneValue((e, t, n) => {
    let a = e.get(t);
    return a ? function (e) {
      return e.length <= 4 ? e : [e[0], e.slice(1, -2), e[e.length - 2], e[e.length - 1]];
    }([...function e(t, n) {
      if (n.guid === t) return [];
      let a = n.parentNode;
      return a ? [...e(t, a), a] : [];
    }(n, a), a]) : [];
  }, selectedNodeID, t);
  let o = getSingletonSceneGraph().get(selectedNodeID);
  return 0 !== n.length && o ? jsx("div", {
    className: "dev_handoff_breadcrumbs--container--BoCAA",
    children: n.map((e, t) => {
      let o = t === n.length - 1;
      let l = jsx(SvgComponent, {
        svg: _$$A20,
        className: o ? "dev_handoff_breadcrumbs--chevronIconSelected--NrpAP dev_handoff_breadcrumbs--chevronIcon--MAw4y" : "dev_handoff_breadcrumbs--chevronIcon--MAw4y",
        height: "3px",
        width: "6px"
      });
      return Array.isArray(e) ? jsxs(_$$Fragment, {
        children: [l, " ", jsx(pW, {
          nodeIDs: e.map(e => e.guid)
        })]
      }, e.map(e => e.guid).join("-")) : o ? jsxs(_$$Fragment, {
        children: [l, " ", jsx(pV, {
          nodeID: e.guid
        })]
      }, e.guid) : jsxs(_$$Fragment, {
        children: [l, " ", jsx(pH, {
          nodeID: e.guid
        })]
      }, e.guid);
    })
  }) : null;
});
let pY = "dev_handoff_index_view_zoom_control--zoomButton--l1ZDl";
let pZ = "dev_handoff_index_view_zoom_control--buttonDisabled--krwH2";
function p0() {
  let {
    Dropdown,
    toggleDropdown,
    dropdownTargetRef
  } = _$$B3("DEV_HANDOFF_INDEX_VIEW_ZOOM_DROPDOWN");
  let i = useDevModeFocusId();
  let o = _$$Zr("zoom-out");
  let r = _$$Zr("zoom-in");
  let d = Math.round(100 * getObservableOrFallback(getCanvasViewState().activeCanvasCurrentZoom)).toString();
  let c = [{
    displayText: getI18nString("dev_handoff.vscode.zoom_control.zoom_options_actual_size"),
    callback: () => Fullscreen.setCanvasZoomScale(1)
  }, {
    displayText: getI18nString("dev_handoff.vscode.zoom_control.zoom_options_fit_to_screen"),
    callback: () => HandoffBindingsCpp.setFocusZoomLevel(FitMode.FIT_TO_SCREEN)
  }, {
    displayText: getI18nString("dev_handoff.vscode.zoom_control.zoom_options_fit_to_width"),
    callback: () => HandoffBindingsCpp.setFocusZoomLevel(FitMode.FIT_TO_WIDTH)
  }, {
    displayText: getI18nString("dev_handoff.vscode.zoom_control.zoom_options_fill_screen"),
    callback: () => HandoffBindingsCpp.setFocusZoomLevel(FitMode.FILL_SCREEN)
  }];
  let u = [{
    displayText: getI18nString("fullscreen_actions.zoom-reset"),
    callback: () => Fullscreen.setCanvasZoomScale(1)
  }, {
    displayText: getI18nString("fullscreen_actions.zoom-to-fit"),
    callback: () => fullscreenValue.triggerAction("zoom-to-fit", {
      source: "zoom-menu"
    })
  }];
  return jsxs("div", {
    className: "dev_handoff_index_view_zoom_control--container--oBEBg",
    ref: dropdownTargetRef,
    style: isVsCodeEnvironment() && getFeatureFlags().dt_vscode_ready_for_dev ? {
      height: "32px",
      paddingLeft: "10px",
      paddingRight: "10px"
    } : void 0,
    children: [jsx(ButtonPrimitive, {
      className: ek()(pY, NB, {
        [_$$pq]: o
      }),
      onClick: () => fullscreenValue.triggerAction("zoom-out", {
        source: "vscode-zoom-menu"
      }),
      disabled: !o,
      "aria-label": getI18nString("dev_handoff.vscode.zoom_control.zoom_out_button"),
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("dev_handoff.vscode.zoom_control.zoom_out_button")
      },
      children: jsx(_$$O7, {
        className: ek()({
          [pZ]: !o
        })
      })
    }), jsxs("button", {
      className: "dev_handoff_index_view_zoom_control--zoomLevel--uI6yg text--fontPos11--2LvXf text--_fontBase--QdLsd",
      style: {
        width: `${Math.max(d.length, 4)}em`
      },
      onClick: toggleDropdown,
      children: [d, "% ", jsx(SvgComponent, {
        svg: _$$A21
      })]
    }), jsx(ButtonPrimitive, {
      className: ek()(pY, NB, {
        [_$$pq]: r
      }),
      onClick: () => fullscreenValue.triggerAction("zoom-in", {
        source: "vscode-zoom-menu"
      }),
      disabled: !r,
      "aria-label": getI18nString("dev_handoff.vscode.zoom_control.zoom_in_button"),
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("dev_handoff.vscode.zoom_control.zoom_in_button")
      },
      children: jsx(_$$e8, {
        className: ek()({
          [pZ]: !r
        })
      })
    }), jsx(Dropdown, {
      items: i || !getFeatureFlags().dt_vscode_ready_for_dev ? c : u,
      showPoint: !0,
      displayAboveTarget: !0
    })]
  });
}
function p4({
  isToolbarOpen: e
}) {
  let [t, n] = useState(!1);
  let o = useRef(null);
  let s = useRef(null);
  let r = useRef(null);
  let [d, c] = useState(null);
  let u = getObservableOrFallback(AppStateTsApi.devHandoffState().currentNodeId);
  let p = _$$uQ();
  let {
    inspectableRootNodeId,
    didSelectRow
  } = rT(u, p);
  useEffect(() => n(!1), [p]);
  _$$L5(s, () => {
    t && n(!1);
  }, !0);
  let g = useCallback(() => {
    n(!1);
  }, [n]);
  return jsxs("div", {
    ref: s,
    className: "frame_picker--container--tkwaQ",
    children: [jsx("button", {
      className: "frame_picker--trigger--ZPMqZ",
      ref: o,
      onClick: function () {
        if (t) n(!1);else {
          let e = o.current?.getBoundingClientRect();
          e && (c(e), n(!0));
        }
      },
      "data-tooltip": getI18nString("dev_handoff.tag.layers"),
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip-show-above": !0,
      children: jsx(SvgComponent, {
        svg: _$$A22
      })
    }), d && jsx(Cf, {
      className: t ? void 0 : "frame_picker--closedDropdown--ynVzU",
      targetRect: d,
      displayAboveTarget: !0,
      type: _$$it.MATCH_BACKGROUND,
      disableDropdownScrollContainer: !0,
      propagateCloseClick: !0,
      children: jsx("div", {
        ref: r,
        className: ek()("frame_picker--frames--vobWI", e && "frame_picker--isToolbarOpen--i2EBR"),
        children: jsx(rP, {
          onRowClick: g,
          didSelectRow,
          inspectableRootNodeId
        })
      })
    })]
  });
}
let hr = "style_details_modal--library--38bPp variable_details_view--library--Z5UXI";
let hd = "style_details_modal--styleProperties--2XDQz";
function hc({
  data: e
}) {
  let {
    position,
    styleId,
    styleNodeId,
    styleType
  } = e;
  let r = useDispatch();
  let d = useCallback(() => {
    r(hideModal());
  }, [r]);
  !function (e = noop) {
    let t = _$$uQ();
    let n = useLatestRef(t);
    useEffect(() => {
      n && t !== n && e();
    }, [e, n, t]);
  }(d);
  let c = useMemo(() => {
    switch (styleType) {
      case "FILL":
      case "STROKE":
        return getI18nString("dev_handoff.selection_colors.style_details");
      case "EFFECT":
        return getI18nString("dev_handoff.selection_effect_style_details");
      case "TEXT":
        return getI18nString("dev_handoff.selection_text_style_details");
    }
  }, [styleType]);
  useEffect(() => {
    styleNodeId || d();
  }, [styleNodeId, d]);
  return jsx(TrackingProvider, {
    name: "Selection styles details modal",
    properties: {
      resourceType: styleType
    },
    children: jsx(_$$bL4, {
      width: VariableDetailModalWidth,
      maxHeight: ModalMaxHeight + 120,
      onClose: d,
      defaultPosition: position,
      recordingKey: "style_details_modal",
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: c
          })
        }), jsx(DialogBody, {
          padding: 0,
          style: {
            width: VariableDetailModalWidth
          },
          children: jsx(hu, {
            styleId,
            styleNodeId,
            styleType
          })
        })]
      })
    })
  });
}
function hu({
  styleId: e,
  styleNodeId: t,
  styleType: n,
  inlineCloseButton: s,
  onClose: r,
  canOpenLibrary: d = !0
}) {
  let c = Fj(e);
  let {
    name,
    description,
    isDeleted
  } = useDeepEqualSceneValue((e, t) => {
    if (!t) return {};
    let n = e.get(t);
    return n ? {
      name: n.name,
      description: n.description,
      isDeleted: n.isSoftDeleted
    } : {};
  }, t);
  let f = useSelector(e => e.mirror.selectedStyleProperties);
  let g = useMemo(() => "FILL" === n || "STROKE" === n ? hx : "TEXT" === n ? h_ : hm, [n]);
  useEffect(() => () => Fullscreen?.selectStyleByGuid(defaultSessionLocalIDString), []);
  let x = "TEXT" === n ? jsx(uH, {
    nodeId: t
  }) : jsx(we, {
    selectedStyleProperties: f,
    snug: !0
  });
  return jsxs(VZ, {
    hideHeader: !0,
    noPadding: !0,
    noBorder: !0,
    recordingKey: "styleDetails",
    children: [jsxs("div", {
      className: "style_details_modal--sticky--Ib6F7",
      children: [x, jsxs("div", {
        className: "style_details_modal--header--eJQK2 variable_details_view--titlelessPanel--RzeQe",
        children: [s ? jsxs("div", {
          className: "style_details_modal--nameAndCloseButton--E2ffO variable_details_view--nameAndCloseButton--Gc1CO",
          children: [jsx(hp, {
            name,
            isDeleted
          }), jsx(IconButton, {
            onClick: r,
            "aria-label": getI18nString("dev_handoff.styles.details_button_close_aria_label"),
            children: jsx(_$$L6, {})
          })]
        }) : jsx(hp, {
          name,
          isDeleted
        }), jsx(hh, {
          libraryKey: c?.library_key,
          isLocal: c?.isLocal,
          canOpenLibrary: d
        }), jsx(_$$X5, {
          description,
          containerClassName: "style_details_modal--description--qHmv4 variable_details_view--description--T0GsG",
          dataTestId: "style_details_description"
        })]
      })]
    }), jsx(hf, {
      guid: t,
      styleType: n
    }), jsx(g, {
      guid: t
    })]
  });
}
function hp({
  name: e,
  isDeleted: t
}) {
  let n = Cj(e);
  let {
    ref,
    ...o
  } = _$$X(e);
  let l = t ? {
    "data-tooltip": getI18nString("variables.variable_was_deleted"),
    "data-tooltip-type": KindEnum.TEXT
  } : void 0;
  return e ? jsxs(ButtonPrimitive, {
    className: "style_details_modal--nameContainer--lptg- variable_details_view--variableNameContainer--9iRtJ",
    onClick: n,
    htmlAttributes: o ?? l,
    children: [t && jsx(B3, {}), jsx("span", {
      className: "style_details_modal--name--UzPbB variable_details_view--variableName--wKD6I ellipsis--ellipsis--Tjyfa",
      ref,
      "data-testid": "style_details_name",
      children: e
    })]
  }) : null;
}
function hh({
  libraryKey: e,
  isLocal: t,
  canOpenLibrary: n
}) {
  let i = useLibraryFileLink({
    libraryKey: e,
    isDevHandoff: !0,
    isDevModeOverview: !1,
    isDevModeVarsTable: !1,
    devModeFocusId: void 0
  });
  let o = getLibraryName(e || "", {
    enabled: !!e
  });
  return t || e ? t || "loaded" === i.status && "loaded" === o.status ? n ? jsx(_$$J9, {
    libraryName: o?.data,
    containerClassName: hr,
    link: i.data,
    isLocal: t,
    localFallback: getI18nString("dev_handoff.variables.details_local"),
    dataTestId: "style_details_library",
    recordingKey: "style_name"
  }) : jsx(_$$J9, {
    libraryName: o?.data,
    containerClassName: hr,
    isLocal: t,
    dataTestId: "style_details_library"
  }) : jsx(_$$J9, {
    containerClassName: hr,
    loading: !0
  }) : null;
}
function hf({
  guid: e,
  styleType: t
}) {
  let {
    codeLanguageApi
  } = _$$Q4();
  let i = selectIsCopyExportAllowed();
  let o = AC(codeLanguageApi?.codeLanguage);
  let l = Pt(o);
  let s = !!hg(e)?.length;
  return codeLanguageApi && i ? jsx(TrackingProvider, {
    name: "Style code",
    properties: {
      type: codeLanguageApi.codeLanguage.type,
      pluginId: codeLanguageApi.codeLanguage.id,
      resourceType: t
    },
    children: jsx(dw, {
      overrideNodeId: e,
      hideLayoutCode: !0,
      hideColorCode: "TEXT" === t || "EFFECT" === t,
      hideHints: !0,
      sectionClassName: "style_details_modal--styleCodeSection--e75tR",
      localCodeLanguage: codeLanguageApi.codeLanguage,
      emptyStateMessage: getI18nString("dev_handoff.code.unsupported", {
        language: l.format(codeLanguageApi.codeLanguage)
      }),
      dataTestId: "style_details_code",
      hideBorder: "FILL" === t && !s
    })
  }) : null;
}
function hg(e) {
  let t = useDeepEqualSceneValue((e, t) => {
    let n = e.get(t);
    if (n && n.isAlive) return n.fills;
  }, e);
  return t?.filter(_$$e9);
}
function hx({
  guid: e
}) {
  let t = hg(e);
  let n = getColorFormat();
  let o = Ig();
  let l = useCallback(e => _$$dc(e, o), [o]);
  let s = useMemo(() => t?.map(l), [t, l]);
  return s && 0 !== s.length ? jsx(TrackingProvider, {
    name: "Style properties",
    properties: {
      resourceType: "COLOR",
      count: t?.length
    },
    children: jsx("div", {
      className: hd,
      "data-testid": "style_details_color_fills",
      children: s.map((e, t) => jsx(_$$DP2, {
        formattableColor: e,
        format: n,
        disableDetailModalEntry: !0
      }, t))
    })
  }) : null;
}
function hm({
  guid: e
}) {
  let t = useDeepEqualSceneValue((e, t) => {
    let n = e.get(t);
    if (n && n.isAlive) return n.effects.reverse();
  }, e);
  let n = _$$d1(t ?? []);
  return n && 0 !== n.length ? jsx(TrackingProvider, {
    name: "Style properties",
    properties: {
      resourceType: "EFFECT",
      count: t?.length
    },
    children: jsx("div", {
      className: hd,
      children: n.map((t, n) => jsx(_$$rK, {
        ...t,
        disableDetailModalEntry: !0
      }, `${e}-${n}`))
    })
  }) : null;
}
function h_({
  guid: e
}) {
  let {
    isNodeInvalid,
    variableConsumptionMap
  } = useDeepEqualSceneValue((e, t) => {
    let n = e.get(t);
    return n && n.isAlive ? {
      isNodeInvalid: !1,
      variableConsumptionMap: n?.getVariableConsumptionMap()
    } : {
      isNodeInvalid: !0
    };
  }, e);
  return isNodeInvalid ? null : jsx(TrackingProvider, {
    name: "Style properties",
    properties: {
      resourceType: "TEXT"
    },
    children: jsx("div", {
      className: hd,
      children: jsx(_$$R4, {
        nodeId: e,
        variableConsumptionMap,
        disableSuggestions: !0,
        disableDetailModalEntry: !0
      })
    })
  });
}
registerModal(function () {
  let e = useSelector(e => e.modalShown);
  return e && e.type === StyleDetailModal && e.data.styleNodeId ? jsx(hc, {
    ...e
  }) : null;
}, StyleDetailModal);
let hj = "inspect_tabs--column--6BLEt";
let hw = "inspect_tabs--settingImage--VEeXo";
let hN = "inspect_tabs--codeContainer--G3I2n";
let hk = "inspect_tabs--codeContent--HOypb";
let hA = "inspect_tabs--codeBoxModelInline--o-8PU";
let hI = "inspect_tabs--codeBoxModelSide--4N2rL";
let hC = "DEV_HANDOFF_DEV_RESOURCE_DROPDOWN";
function hT(e) {
  return jsxs("div", {
    className: "inspect_tabs--setting--OTZN3",
    children: [jsxs("div", {
      className: "inspect_tabs--settingRow--qP9rB",
      children: [jsx("div", {
        className: "inspect_tabs--settingLabel--Fr85N",
        children: e.label
      }), jsx("button", {
        className: "inspect_tabs--settingLink--YT0SJ",
        onClick: e.onClick,
        children: renderI18nText("dev_handoff.inspect_panel.open_setting")
      })]
    }), jsx("div", {
      className: "inspect_tabs--settingDescription--Fxbgh",
      children: e.description
    })]
  });
}
function hS() {
  let e = getSelectedView();
  let t = useDispatch();
  return useCallback(() => {
    "fullscreen" === e.view && t(selectViewAction({
      ...e,
      styleForDetailsPanel: void 0,
      variableIdForDetailsPanel: void 0
    }));
  }, [t, e]);
}
function hP({
  variableId: e
}) {
  let t = hS();
  return jsx(_$$a, {
    variableId: e,
    isDetailsModal: !0,
    inlineCloseButton: !0,
    onClose: t,
    surface: "modal",
    entryPoint: ModalWindowType.CodeWell,
    canOpenLibrary: !1
  });
}
function hL({
  styleId: e,
  styleNodeId: t,
  styleType: n
}) {
  let i = hS();
  return jsx(hu, {
    styleId: e,
    styleNodeId: t,
    styleType: n,
    inlineCloseButton: !0,
    onClose: i,
    canOpenLibrary: !1
  });
}
let hR = "(max-width: 550px)";
function hD({
  forSmallScreen: e,
  children: t,
  containerClassName: n
}) {
  let l = function () {
    let [e, t] = useState(() => window.matchMedia(hR).matches);
    useEffect(() => {
      let e = window.matchMedia(hR);
      let n = e => {
        t(e.matches);
      };
      e.addEventListener("change", n);
      return () => {
        e.removeEventListener("change", n);
      };
    }, []);
    return e;
  }();
  let {
    renderVariableDetails,
    variableIdForDetailsPanel
  } = function () {
    let e = useSelector(e => e.selectedView.variableIdForDetailsPanel);
    return {
      renderVariableDetails: _$$u5({
        variableId: e,
        isDetailsModal: !0
      }),
      variableIdForDetailsPanel: e
    };
  }();
  let {
    styleId,
    styleNodeId,
    styleType
  } = useSelector(e => e.selectedView?.styleForDetailsPanel) ?? {};
  if (e !== l) return jsx("div", {
    className: n,
    children: t
  });
  let p = renderVariableDetails && variableIdForDetailsPanel;
  let h = !!styleId && !!styleNodeId && !!styleType;
  return jsxs(Fragment, {
    children: [p ? jsx("div", {
      className: n,
      children: jsx(hP, {
        variableId: variableIdForDetailsPanel
      })
    }) : h ? jsx("div", {
      className: n,
      children: jsx(_$$P2, {
        children: jsx(hL, {
          styleId,
          styleNodeId,
          styleType
        })
      })
    }) : null, jsx("div", {
      className: n,
      style: {
        display: p || h ? "none" : "initial"
      },
      children: t
    })]
  });
}
function hO() {
  let e = _$$uQ();
  return selectIsExportRestricted() ? jsx(rO, {}) : e ? jsxs("div", {
    className: hN,
    children: [jsxs(hD, {
      forSmallScreen: !0,
      containerClassName: hk,
      children: [jsx(ErrorBoundaryCrash, {
        boundaryKey: "Figmadoc",
        fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
        children: jsx(Qd, {})
      }), jsx(_$$J0, {}), jsx(dw, {}), jsx(_$$G3, {}), jsx(_$$t6, {}), jsx(_$$r_, {}), jsx("div", {
        className: hA,
        children: jsx(uQ, {})
      })]
    }), jsx(hD, {
      forSmallScreen: !1,
      containerClassName: hI,
      children: jsx(uQ, {
        fillContainer: !0
      })
    })]
  }) : jsx(hM, {});
}
function hM() {
  return jsxs("div", {
    className: "inspect_tabs--codeEmpty--B2DYX",
    children: [jsxs("div", {
      className: hj,
      children: [jsx("img", {
        alt: "",
        className: hw,
        src: buildUploadUrl("90580516d4d39519d44b86a2e591f4e576475013"),
        onDragStart: e => e.preventDefault()
      }), jsx(hT, {
        label: getI18nString("dev_handoff.inspect_panel.property_suggestions.title"),
        description: getI18nString("dev_handoff.inspect_panel.property_suggestions.body"),
        onClick: openAutocompleteLineSettings
      })]
    }), jsxs("div", {
      className: hj,
      children: [jsx("img", {
        alt: "",
        className: hw,
        src: buildUploadUrl("4b9430b030179277555a6fe2114ceffc0f49ed61"),
        onDragStart: e => e.preventDefault()
      }), jsx(hT, {
        label: getI18nString("dev_handoff.inspect_panel.block_suggestions.title"),
        description: getI18nString("dev_handoff.inspect_panel.block_suggestions.body"),
        onClick: openAutocompleteBlockSettings
      })]
    })]
  });
}
function hB() {
  return jsxs("div", {
    className: hN,
    children: [jsxs(hD, {
      forSmallScreen: !0,
      containerClassName: hk,
      children: [jsx(_$$J0, {}), jsx(Fe, {}), jsx(_$$G3, {}), jsx(_$$t6, {}), jsx("div", {
        className: hA,
        children: jsx(uQ, {})
      })]
    }), jsx(hD, {
      forSmallScreen: !1,
      containerClassName: hI,
      children: jsx(uQ, {
        fillContainer: !0
      })
    })]
  });
}
function hF() {
  return jsxs("div", {
    className: "inspect_tabs--assetsContainer--ETjja",
    children: [jsx(um, {}), jsx(_$$L4, {})]
  });
}
function hz() {
  return jsxs("div", {
    className: "inspect_tabs--componentsContainer--ERYGT",
    children: [jsx("div", {
      className: "inspect_tabs--componentsContent--qXnwd",
      children: jsx(lZ, {})
    }), jsx("div", {
      className: "inspect_tabs--componentsPreview--79zEW",
      children: jsx(lW, {})
    })]
  });
}
function hV({
  setActiveTabId: e
}) {
  let t = useDispatch();
  let n = useDropdownState();
  let s = useRef(null);
  let [d, c] = useAtomValueAndSetter(sg);
  let u = trackFileEventWithStore();
  let p = Nf() ?? "";
  let h = useSceneGraphSelector().get(p);
  let f = document.getElementById("dev-handoff-inspect-panel");
  let g = n?.type === hC;
  return jsxs(Fragment, {
    children: [jsx("div", {
      ref: s,
      children: jsx(DialogTriggerButton, {
        onClick: function () {
          g ? t(hideDropdownAction()) : t(showDropdownThunk({
            type: hC
          }));
        },
        "aria-expanded": g,
        htmlAttributes: {
          "data-tooltip": getI18nString("dev_handoff.add_dev_resource"),
          "data-tooltip-type": KindEnum.TEXT
        },
        "aria-label": getI18nString("dev_handoff.add_dev_resource"),
        children: jsx(SvgComponent, {
          svg: _$$A23
        })
      })
    }), g && s.current && f && createPortal(jsx(_$$j, {
      items: [{
        displayText: "Add link to code file...",
        action: "add_file_link"
      }, {
        displayText: "Add link to dev resource... ",
        action: "add_link"
      }],
      onSelectItem: t => {
        switch (t.action) {
          case "add_file_link":
            e(IAssertResource.DEV_RESOURCES);
            u("Dev Handoff Related Links Click Code File Link", {
              nodeId: p,
              nodeType: h?.type,
              source: "web"
            });
            createFileLink();
            break;
          case "add_link":
            e(IAssertResource.DEV_RESOURCES);
            c(!0);
        }
      },
      dispatch: t,
      parentRect: s.current.getBoundingClientRect(),
      showPoint: !1
    }), f)]
  });
}
function hH() {
  let e = getObservableValue(getSelectedDevModePropertiesPanelTab(), IAssertResource.PRIMARY);
  let t = isSingleSceneGraphSelectionInDevHandoff();
  let n = NM();
  let s = _$$ro();
  let d = useAtomWithSubscription(be);
  !function (e) {
    let t = useDispatch();
    useEffect(() => {
      let e = debugState.getState().selectedView;
      e.variableIdForDetailsPanel && t(selectViewAction({
        ...e,
        variableIdForDetailsPanel: void 0
      }));
    }, [t, e]);
  }([e, _$$uQ()]);
  let c = n ? [{
    id: IAssertResource.ASSETS,
    title: getI18nString("dev_handoff.assets"),
    Component: hF,
    recordingKey: "extensionAssetsTab"
  }] : [{
    id: IAssertResource.PRIMARY,
    title: getI18nString("inspect_panel.code.code"),
    Component: hO,
    recordingKey: "extensionCodeTab"
  }];
  t && (c.push({
    id: IAssertResource.PROPERTIES,
    title: getI18nString("fullscreen.properties_panel.properties"),
    Component: hB,
    recordingKey: "extensionPropertiesTab"
  }), s && c.push({
    id: IAssertResource.COMPONENT,
    title: getI18nString("dev_handoff.inspect_panel.component"),
    Component: hz,
    recordingKey: "extensionComponentTab"
  }), c.push({
    id: IAssertResource.DEV_RESOURCES,
    title: getI18nString("dev_handoff.developer_related_links"),
    Component: sy,
    recordingKey: "extensionRelatedLinksTab"
  }), c.push({
    id: IAssertResource.ASSETS,
    title: getI18nString("dev_handoff.assets"),
    Component: hF,
    recordingKey: "extensionAssetsTab"
  }));
  c.push({
    id: IAssertResource.PLUGIN,
    title: getI18nString("dev_handoff.tab.plugins"),
    Component: rJ,
    recordingKey: "extensionPluginsTab"
  });
  useEffect(() => {
    c.find(t => t.id === e) || setSelectedDevModePropertiesPanelTab(IAssertResource.PRIMARY);
  }, [e, t]);
  return jsxs(SubscribedLibrariesProvider, {
    children: [jsxs("div", {
      className: "inspect_tabs--tabsBar--nbu1a",
      children: [jsx(_$$P2, {
        innerClassName: "inspect_tabs--tabs--w8XOI",
        minContentWidth: 100,
        children: c.map(t => jsx(r7, {
          text: t.title,
          isActive: e === t.id,
          recordingKey: t.recordingKey,
          onClick: () => {
            var e;
            e = t.id;
            return void setSelectedDevModePropertiesPanelTab(e);
          },
          isSingle: 1 === c.length
        }, t.title))
      }), jsxs("div", {
        className: "inspect_tabs--rightButtons--HeXhW",
        children: [d && jsx(IconButton, {
          htmlAttributes: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("dev_handoff.inspect_panel.close_plugin")
          },
          "aria-label": getI18nString("dev_handoff.inspect_panel.close_plugin"),
          onClick: () => {
            handlePluginError();
          },
          children: jsx(_$$A5, {})
        }), jsx(sO, {}), jsx(hV, {
          setActiveTabId: setSelectedDevModePropertiesPanelTab
        })]
      })]
    }), c.map(t => jsx("div", {
      className: "inspect_tabs--activeTabContainer--LBYjQ",
      style: {
        display: e === t.id ? void 0 : "none"
      },
      children: jsx(t.Component, {})
    }, t.title))]
  });
}
let hU = parsePxNumber(YI7);
let hK = () => 0.75 * window.innerHeight;
let hX = parsePxNumber(Qhc);
function hJ() {
  let [e, t] = useLocalStorageSync("extension_bottom_panel_expanded", !0);
  let [n, o] = useAtomValueAndSetter(_$$g4);
  let [d, c] = useState(!1);
  let u = _$$uQ();
  let p = getObservableOrFallback(AppStateTsApi.devHandoffState().focusMode);
  let h = getObservableOrFallback(EditorPreferencesApi().devHandoffInspectSplitPosition);
  useEffect(() => {
    let t;
    t = e ? n : hU;
    EditorPreferencesApi().devHandoffInspectSplitPosition.set(t);
  }, [e]);
  let f = useCallback(() => {
    c(!0);
  }, []);
  let g = useCallback(e => {
    if (d) {
      var t;
      t = window.innerHeight - e.clientY;
      let n = Math.max(hU, Math.min(hK(), t || 0));
      n !== h && (EditorPreferencesApi().devHandoffInspectSplitPosition.set(n), o(n));
    }
  }, [d, h, o]);
  let x = useCallback(() => {
    c(!1);
  }, []);
  useEffect(() => (document.addEventListener("mousemove", g), document.addEventListener("mouseup", x), () => {
    document.removeEventListener("mousemove", g);
    document.removeEventListener("mouseup", x);
  }));
  return jsxs("div", {
    id: "dev-handoff-inspect-panel",
    className: ek()("vscode", "extension_bottom_panel--container--zaRdX", Dm, e && "extension_bottom_panel--isOpen--m5UfA"),
    style: {
      height: `${h}px`
    },
    children: [(p || getFeatureFlags().dt_vscode_ready_for_dev) && jsx("div", {
      className: ek()("extension_bottom_panel--buttons--itG9x", "extension_bottom_panel--buttonsNewUx--qjtmo"),
      children: jsx(p0, {})
    }), jsxs("div", {
      className: "extension_bottom_panel--header--ZmzTG",
      children: [e && jsx("div", {
        className: "extension_bottom_panel--edge--cuoAZ",
        onMouseDown: f,
        onDoubleClick: () => {
          EditorPreferencesApi().devHandoffInspectSplitPosition.set(hX + hU);
          o(hX + hU);
        }
      }), jsx(p4, {
        isToolbarOpen: e
      }), u && jsx(Fragment, {
        children: jsx(pG, {})
      }), jsxs("div", {
        className: ek()("extension_bottom_panel--headerRightButtons--qVDj-", cssBuilderInstance.pt4.$),
        children: [jsx(_$$pm, {}), jsx("button", {
          onClick: function () {
            t(!e);
          },
          style: {
            width: "32px"
          },
          children: jsx(SvgComponent, {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip-show-above": !0,
            "data-tooltip": e ? getI18nString("dev_handoff.vscode.inspect_panel.hide_inspect_tooltip") : getI18nString("dev_handoff.vscode.inspect_panel.show_inspect_tooltip"),
            svg: e ? _$$A25 : _$$A24,
            autosize: !0
          })
        })]
      })]
    }), jsx("div", {
      className: "extension_bottom_panel--transitionContainer--5UlLL",
      style: {
        maxHeight: `${h - hU}px`
      },
      children: jsx(hH, {})
    })]
  });
}
let h8 = "floating_layers_panel--isSymbol--3KTvH";
let h6 = "floating_layers_panel--layerName--LBYru";
function h9() {
  let e = getObservableOrFallback(EditorPreferencesApi().showGuids);
  let t = Tv();
  let n = useImmediateSceneValue((e, t) => t && e.get(t), t[0] || null);
  let d = !!n && ["SYMBOL", "INSTANCE"].includes(n.type);
  let {
    inspectableRootNodeId,
    didSelectRow
  } = rT(getObservableOrFallback(AppStateTsApi.devHandoffState().currentNodeId), t[0] || null);
  let p = useSelector(e => e.mirror.appModel.currentPage);
  let h = inspectableRootNodeId || p;
  let f = Xr(rh);
  let g = [{
    displayText: getI18nString("dev_handoff.layers.collapse_all_layers"),
    callback: () => f([h])
  }];
  let x = getObservableOrFallback(AppStateTsApi.devHandoffState().automaticIconDetection);
  let m = !!getFeatureFlags().dt_insp_impr_assets || x;
  let v = useMemo(() => t.length > 0 && t[0] ? HandoffBindingsCpp?.getAssetInfo(t[0]) : null, [t]);
  return 0 !== t.length && n ? jsx(_$$P3, {
    title: t.length > 1 ? jsx("div", {
      className: h6,
      children: renderI18nText("dev_handoff.workflows.focus_view.multiple_layers_selected", {
        count: t.length
      })
    }) : jsxs("div", {
      className: ek()(h6, {
        [h8]: d
      }),
      children: [n.name, e ? ` (${n.guid})` : ""]
    }),
    nodeIcon: jsx("div", {
      className: ek()("floating_layers_panel--layersIcon--q0eoA", {
        [h8]: d
      }),
      children: jsx(_$$rI, {
        node: n,
        showIcons: m,
        assetInfo: v
      })
    }),
    panelActions: jsx(_$$U3, {
      dropdownItems: g
    }),
    children: jsx(rf, {
      inspectableRootNodeId,
      didSelectRow,
      page: p,
      hideHeader: !0
    })
  }) : null;
}
function fl(e, t, n) {
  let a = e.size;
  e.resizeWithConstraints(t, n);
  let i = e.size;
  let o = (a.x - i.x) / 2;
  let l = (a.y - i.y) / 2;
  let s = e.relativeTransform;
  s.m02 += o;
  s.m12 += l;
  e.relativeTransform = s;
}
let fs = memo(function (e) {
  let {
    value,
    setValue,
    hasHug,
    isSection,
    isComponentSet
  } = function (e, t) {
    let {
      Sprig
    } = useSprigWithSampling();
    let a = useSceneGraphSelector();
    let {
      pxValue,
      hasHug: _hasHug,
      isSection: _isSection,
      isComponentSet: _isComponentSet
    } = useStrictDeepEqualSceneValue((e, t, n) => {
      let a = e.get(t);
      return a ? {
        pxValue: "width" === n ? a.size.x : a?.size.y,
        hasHug: "width" === n ? a.stackHorizontalLayoutSize === LayoutSizingMode.HUG_CONTENT : a.stackVerticalLayoutSize === LayoutSizingMode.HUG_CONTENT,
        isSection: a.isSection,
        isComponentSet: a.isStateGroup
      } : {
        value: 0,
        hasHug: !1
      };
    }, e, t);
    let u = applyScaleToValue(void 0, pxValue);
    let p = useScaleFactorCallback();
    let h = trackDefinedFileEventWithStore();
    return {
      value: u,
      setValue: useCallback((i, o) => {
        _$$N4(() => {
          _$$l5.user("focus-view-size-input", () => {
            let r = a.get(e);
            let d = p(i) ?? i;
            if (r) {
              let e = !getFeatureFlags().dt_multi_node && !isInteractiveInspectionAndRollbackEnabled();
              let a = () => {
                "width" === t ? fl(r, d, r.size.y) : fl(r, r.size.x, d);
                o && (h("dev_mode.focus_view.resizing", {
                  node_id: r.id,
                  node_type: r.type,
                  dimension: t,
                  source: "top bar"
                }), Sprig("track", "interactive_inspection_action"), Fullscreen?.commit());
              };
              e ? a() : _$$n0(a);
            }
          });
        });
      }, [a, e, p, t, h, Sprig]),
      hasHug: _hasHug,
      isSection: _isSection,
      isComponentSet: _isComponentSet
    };
  }(useDevModeFocusId(), e.dimension);
  let c = useTransformInputHandler({
    key: e.dimension,
    setValue
  });
  let u = isSection ? getI18nString("dev_handoff.workflows.focus_view.resizing_disabled_section") : isComponentSet ? getI18nString("dev_handoff.workflows.focus_view.resizing_disabled_component_set") : hasHug ? getI18nString("dev_handoff.focus_view.resize_disabled_hugged_element") : "";
  return jsx(AutoInteractableWrapper, {
    name: `focus_view_${e.dimension}_input`,
    children: jsx(LengthInput, {
      disabled: isSection || isComponentSet || hasHug,
      inputClassName: _$$hF,
      isTokenizable: !0,
      value: value ?? 0,
      ...c,
      "data-tooltip": u,
      "data-tooltip-show-above": !1,
      "data-tooltip-type": KindEnum.TEXT,
      min: getFeatureFlags().editor_zero_width_input ? _$$ak : void 0,
      noBorderOnHover: !0,
      onBlur: e.onBlur,
      onFocus: e.onFocus,
      recordingKey: `focus_view_${e.dimension}_input`,
      tooltipForScreenReadersOnly: !1,
      children: jsx("span", {
        className: `focus_view_size_input--sizeContrainedLabel--uOo68 ${QK} svg`,
        children: "width" === e.dimension ? getI18nString("fullscreen.properties_panel.transform_panel.w") : getI18nString("fullscreen.properties_panel.transform_panel.h")
      })
    })
  });
});
let fc = "focus_canvas_ui--withInsetEditorEnabled--Acy9S";
let fu = "focus_canvas_ui--sideSection--s-sMs";
function fp() {
  !function () {
    let {
      Sprig
    } = useSprigWithSampling();
    let t = getObservableValue(HandoffBindingsCpp?.focusViewInteractiveInspectionState().isResizing, !1);
    useEffect(() => {
      t && Sprig("track", "interactive_inspection_action");
    }, [t, Sprig]);
  }();
  let e = trackDefinedFileEventWithStore();
  let t = useDevModeFocusId();
  let n = useDeepEqualSceneValue((e, t) => {
    let n = e.get(t);
    return n?.isSection;
  }, t);
  let {
    selectFocusNodeForInteractiveInspection,
    doneChangingFocusNodeForInteractiveInspection
  } = function () {
    let e = Tv();
    let t = useSelector(e => e.mirror.appModel.hoveredNode);
    let [n, a] = useAtomValueAndSetter(_$$hn);
    let l = useCallback(() => {
      a(_$$xX.STARTED);
    }, [a]);
    let s = useCallback(() => {
      a(_$$xX.STOPPED);
    }, [a]);
    useEffect(() => {
      a(function (e, t) {
        let n = "-1:-1" !== t;
        return e !== _$$xX.STOPPED || n ? e === _$$xX.HOVERED_NOTHING_AFTER_STOPPED && n ? _$$xX.IDLE : e : _$$xX.HOVERED_NOTHING_AFTER_STOPPED;
      }(n, t));
    }, [t, n, a]);
    useEffect(() => () => a(_$$xX.IDLE), [a]);
    let d = useLatestRef(e);
    let c = d !== e;
    useEffect(() => {
      c && n !== _$$xX.STARTED && a(_$$xX.IDLE);
    }, [c, d, a, n]);
    return {
      selectFocusNodeForInteractiveInspection: l,
      doneChangingFocusNodeForInteractiveInspection: s
    };
  }();
  let c = isDevModeFocusViewActive();
  return isInteractiveInspectionAndRollbackEnabled() ? jsxs(Fragment, {
    children: [jsxs("div", {
      className: "focus_canvas_ui--interactiveInspectionTools--k17Pz",
      "data-onboarding-key": dC,
      children: [jsxs("div", {
        className: "focus_canvas_ui--inputContainer--mjxzu",
        children: [jsx(fs, {
          dimension: "width",
          onFocus: selectFocusNodeForInteractiveInspection,
          onBlur: doneChangingFocusNodeForInteractiveInspection
        }), jsx(fs, {
          dimension: "height",
          onFocus: selectFocusNodeForInteractiveInspection,
          onBlur: doneChangingFocusNodeForInteractiveInspection
        })]
      }), jsx(_$$M6, {
        consumptionTarget: Jo.FOCUS_NODE,
        showLibrarySets: !1,
        onModalWillOpen: selectFocusNodeForInteractiveInspection,
        onModalDidClose: doneChangingFocusNodeForInteractiveInspection,
        displayModeDropdown: !0
      }), jsx(setupToggleButton, {
        "aria-label": getI18nString("dev_handoff.workflows.focus_view.reset_button_tooltip"),
        onChange: () => {
          HandoffBindingsCpp?.resetFocusViewInteractiveInspection();
          e("dev_mode.focus_view.reset_changes", {
            node_id: t,
            node_type: n ? "SECTION" : "FRAME"
          });
        },
        disabled: !c,
        checked: c,
        variant: "highlighted",
        onIcon: jsx(_$$K6, {}),
        offIcon: jsx(_$$K6, {}),
        recordingKey: "focus_view_reset_button"
      })]
    }), jsx(dD, {})]
  }) : null;
}
function fh() {
  let e = useDispatch();
  let t = useSelector(e => e.versionHistory);
  let {
    Dropdown,
    toggleDropdown,
    dropdownTargetRef,
    isDropdownShown
  } = _$$B3("FOCUS_MODE_NAME_DROPDOWN");
  let r = selectCurrentFile();
  let d = _$$uQ();
  let c = useDevModeFocusId();
  let u = getSelectedView();
  let p = isFullscreenDevHandoffView(u) ? u.focusViewBackNavigation : void 0;
  let h = TP(p?.toEditorType);
  let f = _$$U("focus_view_show_on_page");
  let g = TQ(p?.toEditorType);
  let x = [{
    displayText: getI18nString("dev_handoff.workflows.focus_view.show_canvas"),
    recordingKey: "dev_handoff.focus.show_on_page",
    callback: function () {
      "editorType" in h && h.editorType === FEditorType.Design && f("design");
      t.activeId && t.activeId !== CURRENT_VERSION_ID && e(exitVersionHistoryMode());
      g("Dev Mode Focus View Go To Canvas Clicked", c);
    }
  }, {
    displayText: getI18nString("dev_handoff.workflows.focus_view.copy_link"),
    recordingKey: "dev_handoff.focus.copy_link",
    callback: () => {
      e(copyTextThunk({
        stringToCopy: buildFileUrl({
          file: r,
          nodeId: d,
          isDevHandoff: !0,
          devModeFocusId: c,
          isReadOnly: !0,
          isFigJam: !1,
          attributionContext: null
        })
      }));
    }
  }];
  return jsxs(Fragment, {
    children: [jsx("div", {
      ref: dropdownTargetRef,
      children: jsx(DialogTriggerButton, {
        "aria-expanded": isDropdownShown,
        recordingKey: "dev_handoff.focus.options",
        onClick: toggleDropdown,
        "aria-label": getI18nString("dev_handoff.workflows.more_actions_tooltip"),
        htmlAttributes: {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("dev_handoff.workflows.more_actions_tooltip")
        },
        children: jsx(_$$J5, {})
      })
    }), jsx(Dropdown, {
      items: x,
      showPoint: !0
    })]
  });
}
function ff() {
  let e = useDispatch();
  let t = getDevHandoffInspectSplitPosition();
  let n = useDevModeFocusId();
  let {
    isSection,
    focusNodeName
  } = useDeepEqualSceneValue((e, t) => {
    let n = e.get(t);
    return {
      isSection: n?.isSection,
      focusNodeName: n?.name
    };
  }, n);
  let c = useDeepEqualSceneValue(e => e.getCurrentPage()?.name);
  let u = useCurrentFileKey();
  let p = useSelector(e => e.versionHistory);
  let h = QV();
  let f = trackFileEventWithStore();
  let x = _$$U("focus_view_back");
  let v = getObservableValue(getPropertiesPanelTab(), DesignWorkspace.DESIGN);
  let [, y] = useAtomValueAndSetter(atomH1);
  let [b] = useAtomValueAndSetter(atomM4);
  let j = useCanUseDevModeDemoFile();
  let N = useSelector(e => isFullscreenDevHandoffView(e.selectedView) ? {
    ...e.selectedView,
    editorType: e.selectedView.focusViewBackNavigation?.toEditorType ?? e.selectedView.editorType,
    showOverview: e.selectedView.focusViewBackNavigation?.toOverview ?? !0,
    focusViewBackNavigation: void 0,
    devModeFocusId: void 0
  } : e.selectedView);
  let k = useSelector(e => selectedViewToPath(e, N));
  let I = N.showOverview ? getI18nString("dev_handoff.workflows.focus_view.back_to_rfd_tooltip") : getI18nString("dev_handoff.workflows.focus_view.back_to_page_tooltip");
  if (useSingleEffect(() => {
    n && HandoffBindingsCpp.focusOnNode(n, !1);
    v === DesignWorkspace.PROTOTYPE && setPropertiesPanelTab(DesignWorkspace.DESIGN);
    getFeatureFlags().dt_workflows_recently_viewed && u && n && h(u, n);
    f("Dev Mode Focus View Shown", {
      source: b || "init",
      node_id: n,
      node_type: isSection ? "SECTION" : "FRAME"
    }, {
      forwardToDatadog: !0
    });
  }), !n) return null;
  let C = p.activeId && p.activeId !== CURRENT_VERSION_ID;
  return jsxs("div", {
    className: ek()("focus_canvas_ui--container--YwKdJ", fc),
    style: isVsCodeEnvironment() && getFeatureFlags().dt_vscode_ready_for_dev ? {
      paddingTop: "0px",
      paddingBottom: "0px"
    } : {
      paddingRight: t
    },
    children: [jsx("div", {
      className: "focus_canvas_ui--background--jKiDi"
    }), jsxs("div", {
      className: ek()("focus_canvas_ui--header--gxex-", fc),
      style: isVsCodeEnvironment() && getFeatureFlags().dt_vscode_ready_for_dev ? {
        margin: "0px",
        border: "none"
      } : void 0,
      children: [jsxs("div", {
        className: fu,
        children: [jsx(RecordableAnchor, {
          className: "focus_canvas_ui--backLink--oBW-6",
          "data-onboarding-key": dV,
          onClick: function (t) {
            t.preventDefault();
            let n = "editorType" in N && N.editorType === FEditorType.Design;
            !("showOverview" in N && N.showOverview) && n && x("design");
            e(selectViewAction(N));
            p.activeId && p.activeId !== CURRENT_VERSION_ID && e(exitVersionHistoryMode());
            let a = "unknown";
            "fullscreen" === N.view && (a = N.showOverview ? "overview" : N.editorType === FEditorType.Design ? "design_canvas" : "dev_mode_canvas");
            y("focus_close_clicked");
            f("Dev Mode Focus View Close Clicked", {
              target: a
            });
          },
          href: k,
          recordingKey: "dev_handoff.workflows.focus.back_link",
          "aria-label": I,
          "data-tooltip": I,
          "data-tooltip-type": KindEnum.TEXT,
          children: jsx(_$$C2, {})
        }), jsx("div", {
          className: "focus_canvas_ui--pageBreadcrumb--ZLVL8",
          children: jsx("span", {
            className: "focus_canvas_ui--pageBreadcrumbLabel--BPMXr",
            children: c
          })
        }), jsx("span", {
          className: "focus_canvas_ui--breadCrumbSeparator--tkhRI",
          children: "/"
        }), jsxs("div", {
          className: "focus_canvas_ui--nodeName--kuQ54",
          "data-onboarding-key": dB,
          children: [isSection ? jsx(_$$c9, {}) : jsx(_$$q4, {}), " ", jsx("span", {
            className: "focus_canvas_ui--nodeNameLabel--f7DnW",
            children: focusNodeName
          })]
        })]
      }), jsx("div", {
        className: "focus_canvas_ui--middleSection--zKEBR",
        children: jsx(fp, {})
      }), jsxs("div", {
        className: ek()(fu, "focus_canvas_ui--right--HaugW"),
        children: [jsx(fh, {}), !C && jsx(_$$p6, {
          nodeId: n,
          sourceForLogging: "focus-ui",
          onboardingKey: dF
        })]
      })]
    }), jsx("div", {
      className: ek()("focus_canvas_ui--viewportContainer--E-aVJ", fc),
      style: isVsCodeEnvironment() && getFeatureFlags().dt_vscode_ready_for_dev ? {
        margin: "0px"
      } : void 0
    }), !isVsCodeEnvironment() && jsx(h9, {}), !isVsCodeEnvironment() && !j && jsx(dH, {})]
  });
}
export function $$fg0() {
  let e = useCanAccessFullDevMode();
  let t = useIsProgressBarHiddenOrLocked();
  let n = useSelector(e => e.mirror.appModel.showUi);
  let s = selectCurrentUser();
  let d = useDispatch();
  let c = _$$I2();
  X_();
  _$$z({
    topLevelMode: ViewType.DEV_HANDOFF,
    eventName: "Dev Handoff Selection Changed"
  });
  let u = useCurrentFileKey() ?? "";
  return (useEffect(() => {
    let e = () => {
      handlePluginError().then(() => {
        _$$s3({
          userID: s?.id ?? "",
          openFileKey: u
        });
      });
    };
    e();
    return e;
  }, [e, u, s?.id]), useEffect(() => {
    let e;
    c || (e = setTimeout(() => {
      notificationAPI.enrollUserInStatusChange({
        fileKey: u
      })?.then(e => {
        let t = atomStoreManager.get(overlayStateAtom);
        e.data?.meta?.newEnrollment && !t && d(jK({
          userId: s?.id ?? "",
          fileKey: u
        }));
      });
    }, 5e3));
    return () => {
      e && clearTimeout(e);
    };
  }, [u, s?.id, d, c]), t || !n) ? null : c ? jsx(nr, {}) : jsx(f_, {});
}
function fx() {
  _$$O3();
  return null;
}
export function $$fm1() {
  let e = useIsFullscreenOverview();
  let t = useIsFullscreenDevModeComponentBrowser();
  let n = useIsFullscreenWithDevVariables();
  let i = useDevModeFocusId();
  let o = useCanAccessFullDevMode();
  let l = _$$T();
  let s = useHasReadyNodesWithParentOrg();
  let r = Ye();
  let [d, c] = _$$b2();
  return i || !o && !e || t ? null : jsxs("div", {
    className: "devHandoffLeftPanel",
    children: [d && jsx(_$$W2, {}), jsx(_$$Q, {
      ignoreRulers: e,
      shouldAnimate: !l,
      ...c,
      children: r ? jsx(_$$s2, {}) : jsxs(_$$$, {
        children: [jsx(_$$s2, {}), jsx(_$$n2, {}), jsx(_$$d2, {
          shouldUseBottomBorder: !s && !n
        }), e ? jsx(fy, {}) : n ? jsx(nK, {}) : jsx(fv, {})]
      })
    })]
  });
}
let f_ = memo(function () {
  useEffect(() => _$$K5, []);
  let e = useMemo(() => fullscreenAlias.getIsExtension(), []);
  let t = useIsFullscreenOverview();
  let n = useIsFullscreenWithDevVariables();
  let l = !!useDevModeFocusId() && !t && !n;
  let r = useCanUseDevModeDemoFile();
  _$$uj();
  vy();
  useEffect(() => {
    getCodegenHandler().prepareVmIfNeeded();
  }, []);
  _$$W4(1700);
  !function () {
    let e = useHasParentOrgId();
    let t = selectUserFlag("dev_mode_notified_of_approved_org_request");
    let n = useDispatch();
    useEffect(() => {
      e && !t && n(postUserFlag({
        dev_mode_notified_of_approved_org_request: !0
      }));
    }, [n, e, t]);
  }();
  return jsxs(_$$si, {
    children: [e ? jsxs(Fragment, {
      children: [jsx(hJ, {}), getFeatureFlags().dt_vscode_ready_for_dev && jsx(ff, {})]
    }) : jsxs(Fragment, {
      children: [l && jsx(ff, {}), !t && !n && jsxs(Fragment, {
        children: [jsx(pL, {}), !r && jsx(_$$p4, {
          children: jsx(iq, {})
        }), !r && jsx(_$$p4, {
          children: jsx(a_, {})
        }), jsx(fx, {}), " "]
      })]
    }), jsx(_$$uL, {})]
  });
});
function fv() {
  let e = L3();
  return jsx(Fragment, {
    children: e ? jsx(EA.Provider, {
      value: !1,
      children: jsx(_$$f3, {
        showFilter: !0
      })
    }) : jsx(rL, {})
  });
}
function fy() {
  return jsx(rL, {});
}
export const w = $$fg0;
export const O = $$fm1;