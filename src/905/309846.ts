import { PureComponent } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { clearReportedErrors, reportError, setBranchingTags, SeverityLevel } from '../905/11'
import { fullscreenAlias } from '../905/37051'
import { fileMetadataService } from '../905/84999'
import { showFileBrowserOrError } from '../905/87821'
import { registerLegacyModal } from '../905/102752'
import { fullscreenPerfManager } from '../905/125218'
import { hideModal, hideModalHandler, showModalHandler } from '../905/156213'
import { ServiceCategories } from '../905/165054'
import { getFontMetadataList } from '../905/165290'
import { getBackgroundColorForTheme, getMPVisibleTheme } from '../905/187165'
import { W as _$$W } from '../905/242083'
import { getLastUsedEditorType, isEditorTypeEnabled, setLastUsedEditorType } from '../905/298923'
import { R as _$$R2 } from '../905/300969'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { mapEditorTypeToLoggingTag, trackFileOpenedAndHandleMode, trackFullscreenFileOpened } from '../905/327855'
import { RecordingScrollContainer } from '../905/347284'
import { createOptimistThunk } from '../905/350402'
import { UpgradeAction } from '../905/370443'
import { z as _$$z } from '../905/404751'
import { postRepo } from '../905/466026'
import { waitForVisibility } from '../905/508367'
import { jubileeBAtom, jubileeEligibilitySAtom, jubileeTentativePlanEligibilityAtom, jubileeTentativeUserEligibilityAtom, setListAtom } from '../905/509613'
import { v as _$$v } from '../905/516963'
import { r6 } from '../905/542608'
import { subscribeAndAwaitData } from '../905/553831'
import { c as _$$c2 } from '../905/580030'
import { putTeamUser } from '../905/584989'
import { getFeatureFlags } from '../905/601108'
import { customHistory } from '../905/612521'
import { buildFileUrl } from '../905/612685'
import { saveLastUsedEditorType } from '../905/620668'
import { setupFileObject } from '../905/628874'
import { parseQuery } from '../905/634134'
import { g_ } from '../905/646788'
import { updateFontListFileMetadata } from '../905/646812'
import { fetchTeamRoles } from '../905/672897'
import { logInfo } from '../905/714362'
import { isBranchAlt } from '../905/760074'
import { getSelectedFile } from '../905/766303'
import { teamAPIClient } from '../905/834575'
import { isValidSessionLocalID, parseSessionLocalID } from '../905/871411'
import { sendWithRetry } from '../905/910117'
import { selectViewAction } from '../905/929976'
import { nk } from '../figma_app/2023'
import { Dm } from '../figma_app/8833'
import { atomStoreManager } from '../figma_app/27355'
import { OpenEditorFileData } from '../figma_app/43951'
import { FEditorType, mapEditorTypeToFileType, mapEditorTypeToWorkspaceType, mapFileTypeToEditorType } from '../figma_app/53721'
import { filePutAction, markFileViewedOptimistic } from '../figma_app/78808'
import { fullscreenOpen, setFileVersion, setNeedsUpgrade, setProgressBarState } from '../figma_app/91703'
import { EightSeven } from '../figma_app/111825'
import { setAutosaveStatus } from '../figma_app/139113'
import { getGracePeriodStatus } from '../figma_app/141320'
import { isASTCCompressionSupported, testWebGLSupport, WebGLTestResult } from '../figma_app/149304'
import { getInitialOptions, isLocalDevOnCluster } from '../figma_app/169182'
import { Xg } from '../figma_app/199513'
import { ColorTokenManager } from '../figma_app/214121'
import { setTeamOptimistThunk } from '../figma_app/240735'
import { shouldUseFullscreen } from '../figma_app/298277'
import { mapToEditorType } from '../figma_app/300692'
import { logAndTrackCTA, trackDefinedFileEvent } from '../figma_app/314264'
import { hasProjectRestrictions } from '../figma_app/345997'
import { fullscreenValue } from '../figma_app/455680'
import { T as _$$T } from '../figma_app/472024'
import { canAccessFullDevMode } from '../figma_app/473493'
import { resetMissingFontTracking } from '../figma_app/557318'
import { getImageManager } from '../figma_app/624361'
import { ButtonBasePrimary, ButtonSecondary, createLabel, FocusCheckbox } from '../figma_app/637027'
import { jW } from '../figma_app/640683'
import { FileCreationPermissionsGenerator } from '../figma_app/687776'
import { canUseCustomTemplates } from '../figma_app/741211'
import { setPropertiesPanelTab } from '../figma_app/741237'
import { AppStateTsApi, ColorStateTsApi, DesignWorkspace, FontSourceType, Fullscreen, UIVisibilitySetting } from '../figma_app/763686'
import { BrowserInfo } from '../figma_app/778880'
import { fileApiHandler } from '../figma_app/787550'
import { destroyAutosaveManager, setupAutosaveManager } from '../figma_app/840917'
import { maybeShowVersionDiffNotification } from '../figma_app/841351'
import { A as _$$A } from '../figma_app/849666'
import { desktopAPIInstance } from '../figma_app/876459'
import { ModalContainer } from '../figma_app/918700'
import { EditorUIState } from '../figma_app/941983'

let er = 'Handling fullscreen metadata response not in a valid fullscreen state'
// todo: ss
/**
 * Handles the processing of file metadata response in fullscreen mode.
 * This function processes various aspects of file metadata including:
 * - Redirect handling for password authentication
 * - Jubilee eligibility settings
 * - Feature flag management
 * - Team information updates
 * - Font metadata processing
 * - UI state configuration
 * - File opening operations
 *
 * Original function name: ea
 *
 * @param response - The API response containing file metadata
 * @param store - Redux store instance
 * @param editorType - Type of editor to initialize
 */
async function handleFileMetadataResponse(
  response: any,
  store: any,
  editorType: FEditorType,
): Promise<void> {
  const state = store.getState()
  const metadata = response.data.meta

  // Validate metadata presence
  if (!metadata) {
    reportError(
      ServiceCategories.FRONTEND_PLATFORM,
      new Error('We are expecting FileMetadata but got undefined'),
      errorContext => errorContext.setExtra('response', response),
    )
    return
  }

  // Handle password authentication redirect
  if (metadata.redirect_to_password_auth) {
    await customHistory.redirectAndWaitForever(
      buildFileUrl({
        file: {
          key: metadata.file_key,
          name: metadata.name,
        },
      }),
    )
    return
  }

  // Set jubilee eligibility atoms
  atomStoreManager.set(jubileeTentativePlanEligibilityAtom, metadata.jubilee_tentative_plan_eligibility)
  atomStoreManager.set(jubileeTentativeUserEligibilityAtom, metadata.jubilee_tentative_user_eligibility)
  atomStoreManager.set(jubileeBAtom, metadata.jubilee_b)
  atomStoreManager.set(jubileeEligibilitySAtom, metadata.jubilee_eligibility_s)
  atomStoreManager.set(setListAtom, new Set())

  // Handle feature flags and version mismatches
  const currentFeatureFlags = getFeatureFlags()
  const serverFeatureFlags = metadata.feature_flags

  store.dispatch(
    setNeedsUpgrade({
      needsUpgrade: metadata.needs_upgrade,
    }),
  )

  if (metadata.file_repo) {
    store.dispatch(
      postRepo({
        repo: metadata.file_repo,
      }),
    )
  }

  // Check for script version mismatch
  if (metadata.script !== Fig.fullscreenScriptHash) {
    await customHistory.reloadAndWaitForever('Fullscreen version mismatch', {
      isInProgressVisibleLoad: fullscreenPerfManager.isInProgressVisibleLoad(),
      latestFullscreenVersion: metadata.script,
      currentFullscreenVersion: Fig.fullscreenScriptHash,
    })
  }

  // Check for feature flag changes that require reload
  if (
    serverFeatureFlags
    && (currentFeatureFlags.reload_when_feature_flags_change || serverFeatureFlags.reload_when_feature_flags_change)
  ) {
    const changedFlag = compareFeatureFlags(currentFeatureFlags, serverFeatureFlags)
    if (changedFlag) {
      await customHistory.reloadAndWaitForever(`Feature flag change: ${changedFlag}`)
    }
  }

  // Initialize fullscreen environment
  await fullscreenValue.loadAndStartFullscreenIfNecessary()
  Fullscreen.setEditorType(mapEditorTypeToWorkspaceType(editorType))

  // Update team information
  const team = metadata.team
  if (team) {
    store.dispatch(
      setTeamOptimistThunk({
        team,
        userInitiated: false,
      }),
    )
  }

  // Extract view state information
  const selectedFile = getSelectedFile(state)
  const { selectedView } = state

  if (selectedView.view !== 'fullscreen') {
    throw new Error(INVALID_FULLSCREEN_STATE_ERROR)
  }

  // Determine comment mode
  let startInCommentsMode = false
  if (selectedView.commentThreadId != null || selectedView.showCommentPreferencesPicker) {
    const figmaMobile = window.FigmaMobile
    startInCommentsMode = !figmaMobile || !!figmaMobile.updateCommentsMode
  }

  // Set thumbnail node ID if available
  if (selectedFile?.thumbnail_guid) {
    AppStateTsApi.canvasViewState().thumbnailNodeId.set(selectedFile.thumbnail_guid)
  }

  // Configure properties panel tab
  if (selectedView.showInspectPanel) {
    setPropertiesPanelTab(DesignWorkspace.INSPECT)
  }
  else if (!startInCommentsMode) {
    setPropertiesPanelTab(
      metadata.can_edit ? DesignWorkspace.DESIGN : DesignWorkspace.COMMENT,
    )
  }

  // Extract URL parameters
  const selectedNodeId = selectedView.nodeId || null
  const fallbackStateGroupId = selectedView.fallbackStateGroupId || null
  const urlViewport = selectedView.viewport || null
  const devModeFocusId = selectedView.devModeFocusId || null

  // Process font metadata
  const fontMetadata = {
    sharedFontsList: getFontMetadataList(metadata.shared_fonts),
    localizedToUnlocalized: [],
    renames: {
      family: {},
      style: {},
    },
    sources: [FontSourceType.SHARED],
  }

  if (getFeatureFlags().ce_new_missing_fonts_logging) {
    resetMissingFontTracking()
  }

  updateFontListFileMetadata(store, fontMetadata)

  // Handle version comparison UI
  if (selectedView.versionId || selectedView.compareVersionId || selectedView.compareLatest) {
    store.dispatch(
      setProgressBarState({
        mode: UIVisibilitySetting.ON_AND_LOCKED,
      }),
    )
  }

  if (selectedView.compareLatest) {
    store.dispatch(
      maybeShowVersionDiffNotification({
        openFileKey: metadata.file_key,
      }),
    )
  }

  // Handle Google Classroom permissions modal
  if (
    selectedView.showPermissionsModalFromGoogleClassroomIntegration
    && selectedView.fileKey
  ) {
    store.dispatch(
      showModalHandler({
        type: g_,
        data: {
          fileKey: selectedView.fileKey,
          source: nk.googleClassroomIntegration,
        },
      }),
    )
  }

  // Update team user information
  const currentTeamUser = metadata.current_team_user
  if (currentTeamUser && selectedFile?.team_id) {
    store.dispatch(
      putTeamUser({
        teamUsers: [currentTeamUser],
        teamId: selectedFile.team_id,
      }),
    )
  }

  // Configure desktop API flags
  const isTeamTemplate = !!(metadata.is_team_template && canUseCustomTemplates(state))
  desktopAPIInstance?.setIsLibrary(!!metadata.last_published_at)
  desktopAPIInstance?.setIsTeamTemplate(!!isTeamTemplate)

  // Set theme and color tokens
  Fullscreen.setEditorTheme(state.theme.visibleTheme || '')
  if (ColorStateTsApi) {
    ColorTokenManager.updateColorsInFullscreen(ColorStateTsApi.colorTokensState())
  }

  // Open file with server metadata
  fullscreenPerfManager.time('openFileWithMetadata', () =>
    Fullscreen.openFileWithServerMetadata({
      metadata: {
        file_key: metadata.file_key,
        source_file_key: metadata.source_file_key,
      },
      newFile: false,
      startInCommentsMode,
      selectedNodeId,
      fallbackStateGroupId,
      devModeFocusNodeId: devModeFocusId,
      urlViewport,
      additionalTopPadding: state.user ? null : _$$A,
      mainComponentLink: !!selectedView.mainComponentLink,
      shouldConnectToMultiplayer: mpGlobal.shouldConnectToMultiplayer,
      preserveUrlNodeId: false,
    }))

  // Update mobile tracking session ID
  const figmaMobile = window.FigmaMobile
  const trackingSessionId = getInitialOptions().tracking_session_id
  if (figmaMobile?.updateTrackingSessionId && trackingSessionId) {
    figmaMobile.updateTrackingSessionId(trackingSessionId)
  }
}

/**
 * Compares two feature flag objects and returns the name of the first changed flag.
 *
 * Original function name: anonymous function inside ea
 *
 * @param oldFlags - Current feature flags
 * @param newFlags - New feature flags from server
 * @returns Name of changed flag or null if no changes
 */
function compareFeatureFlags(oldFlags: any, newFlags: any): string | null {
  for (const flags of [newFlags, oldFlags]) {
    for (const key in flags) {
      if (!!oldFlags[key] !== !!newFlags[key]) {
        return `${key} changed to ${!!newFlags[key]}`
      }
    }
  }
  return null
}

// Original variable name: eT
const LICENSE_AGREEMENT_MODAL_TYPE = 'LICENSE_AGREEMENT_MODAL'

// Original function call: registerLegacyModal(eT, e => jsx(ek, {...}))
registerLegacyModal(LICENSE_AGREEMENT_MODAL_TYPE, props =>
  jsx(LicenseAgreementModal, {
    ...props,
    selectedView: props.selectedView,
  }))

interface LicenseAgreementModalState {
  checked: boolean
}

/**
 * Modal component for displaying and accepting license agreements.
 * Specifically handles Apple's license agreement for Apple UI Design Resources.
 *
 * Original class name: ek
 */
class LicenseAgreementModal extends PureComponent<{
  dispatch: any
  selectedView: any
  fileByKey: any
  user: any
}, LicenseAgreementModalState> {
  static displayName = 'LicenseAgreementModal'

  constructor(props: any) {
    super(props)
    this.state = {
      checked: false,
    }
  }

  /**
   * Handles checkbox state changes.
   *
   * Original method name: onChange
   */
  private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      checked: event.target.checked,
    })
  }

  /**
   * Accepts the license agreement and opens the file.
   *
   * Original method name: accept
   */
  private accept = () => {
    this.props.dispatch(hideModal())
    const selectedFile = getSelectedFile(this.props)
    const { selectedView } = this.props

    if (
      selectedView.landingState === 'DUPLICATE'
      && this.props.user
      && selectedFile != null
    ) {
      customHistory.redirect(`${selectedFile.url}/duplicate`)
    }
  }

  /**
   * Declines the license agreement and redirects to home.
   *
   * Original method name: decline
   */
  private decline = () => {
    customHistory.redirect('/')
  }

  render() {
    const selectedFile = getSelectedFile(this.props)

    if (selectedFile?.license?.toLowerCase() === 'apple') {
      return jsxs(ModalContainer, {
        size: 560,
        className: `${Dm} license_agreement--modal--EN2ao`,
        disableClickOutsideToHide: true,
        ...this.props,
        children: [
          jsx(RecordingScrollContainer, {
            width: 560,
            className: 'license_agreement--scrollContainer--JFn-R',
            children: jsx('div', {
              className: 'license_agreement--content--ASLpS',
              children: jsx(AppleLicenseAgreement, {}),
            }),
          }),
          jsxs('div', {
            className: 'license_agreement--footer--dZJPI',
            children: [
              jsx(FocusCheckbox, {
                id: 'check-license-agreement',
                checked: this.state.checked,
                onChange: this.onChange,
              }),
              jsx(createLabel, {
                htmlFor: 'check-license-agreement',
                children: 'I have read, understood, and agree to the License Agreement.',
              }),
              jsx(ButtonSecondary, {
                onClick: this.decline,
                children: 'Disagree and Cancel',
              }),
              jsx(ButtonBasePrimary, {
                disabled: !this.state.checked,
                onClick: this.accept,
                children: 'Agree and Open',
              }),
            ],
          }),
        ],
      })
    }

    return jsx('div', {})
  }
}

/**
 * Component displaying the Apple UI Design Resources license agreement.
 * Contains the complete license text for Apple's design resources.
 *
 * Original class name: eR
 */
class AppleLicenseAgreement extends PureComponent {
  static displayName = 'AppleLicenseAgreement'

  render() {
    return jsxs('div', {
      children: [
        jsx('p', {
          children: 'APPLE INC.',
        }),
        jsx('p', {
          children: 'LICENSE AGREEMENT FOR APPLE UI DESIGN RESOURCES',
        }),
        jsx('p', {
          children: 'For iOS Application Uses Only',
        }),
        jsx('p', {
          children:
            'PLEASE READ THIS LICENSE AGREEMENT ("LICENSE") CAREFULLY BEFORE USING THE APPLE UI DESIGN RESOURCES (DEFINED BELOW). BY USING THE APPLE UI DESIGN RESOURCES, YOU ARE AGREEING TO BE BOUND BY THE TERMS OF THIS LICENSE. IF YOU ARE ACCESSING THE APPLE UI DESIGN RESOURCES ELECTRONICALLY, SIGNIFY YOUR AGREEMENT TO BE BOUND BY THE TERMS OF THIS LICENSE BY CLICKING THE "AGREE" BUTTON. IF YOU DO NOT AGREE TO THE TERMS OF THIS LICENSE, DO NOT USE THE APPLE UI DESIGN RESOURCES AND CLICK "DISAGREE". IMPORTANT NOTES:',
        }),
        jsx('p', {
          children:
            'THE APPLE UI DESIGN RESOURCES LICENSED HEREUNDER ARE TO BE USED SOLELY FOR CREATING MOCK-UPS OF USER INTERFACES DESIGNED FOR USE IN SOFTWARE PRODUCTS THAT RUN SOLELY ON APPLE\'S iOS OPERATING SYSTEM.',
        }),
        jsx('p', {
          children:
            'If you are entering into this License on behalf of your company or organization, "you" or "your" refers to such entity as well, and you represent that you have legal authority to bind your company or organization to the terms of this License.',
        }),
        jsx('p', {
          children: '1. General.',
        }),
        jsx('p', {
          children:
            'A. The Apple software, interfaces, content, templates, data, and other materials accompanying this License, whether on disk, print or electronic documentation, in read only memory, or any other media or in any other form (collectively the "Apple UI Design Resources") are licensed, not sold, to you by Apple Inc. ("Apple") for use only under the terms of this License. Apple and/or Apple\'s licensors retain ownership of the Apple UI Design Resources and reserve all rights not expressly granted to you. The terms of this License will govern any software upgrades provided to you by Apple that replace and/or supplement the original Apple UI Design Resources, unless such upgrade is accompanied by a separate license in which case the terms of that license will govern.',
        }),
        jsx('p', {
          children:
            'B. To the extent that the Apple San Francisco font is included with the Apple UI Design Resources, it is subject to a separate license agreement. If you want to install and use the Apple San Francisco font, you must first accept the separate license agreement that accompanies the font.',
        }),
        jsx('p', {
          children:
            'C. Title and intellectual property rights in and to any content displayed by or accessed through the Apple UI Design Resources belongs to the respective content owner. Such content may be protected by copyright or other intellectual property laws and treaties, and may be subject to terms of use of the third party providing such content. This License does not grant you any rights to use such content nor does it guarantee that such content will continue to be available to you.',
        }),
        jsx('p', {
          children: '2. Permitted License Uses and Restrictions.',
        }),
        jsx('p', {
          children:
            'A. Limited License. Subject to the terms of this License, you are granted a limited, non-transferable, non-exclusive license to use the Apple UI Design Resources solely for creating mock-ups of user interfaces designed for use in software products that run solely on Apple\'s iOS operating system ("Mock-Ups"). The foregoing right includes the right to show the Apple UI Design Resources in screen shots, images or other depictions of such Mock-Ups. You may use the Apple UI Design Resources only for the purposes described in this License and only if you are a registered Apple Developer, or as otherwise expressly permitted by Apple in writing.',
        }),
        jsx('p', {
          children:
            'B. Other Use Restrictions. The grants set forth in this License do not permit you to, and you agree not to, install, use or run the Apple UI Design Resources for the purpose of creating mock-ups of user interfaces to be used in software products running on any non-Apple iOS operating system. You may not embed the Apple UI Design Resources in any software programs or other products. Except as expressly provided for herein, you may not use the Apple UI Design Resources to, create, develop, display or otherwise distribute any documentation, artwork, website content or any other work product. Except as otherwise expressly permitted by the terms of this License or as otherwise licensed by Apple, you may not make the Apple UI Design Resources available over a network where they could be run or used by multiple computers at the same time. You may not rent, lease, lend, trade, transfer, sell, sublicense or otherwise redistribute the Apple UI Design Resources in any unauthorized way, or enable others to do so.',
        }),
        jsx('p', {
          children:
            'C. Template Content. The Apple UI Design Resources licensed hereunder contain content such as interfaces, graphics, artwork, images, and similar content (individually and collectively, the "Template Content"), for use in creating your Mock-Ups in accordance with this License. To the extent that you provide Mock-Ups you create using the Template Content to any other party, you agree to ensure that each such recipient is aware of the restrictions set forth in this License including, without limitation, the restriction on extraction of Template Content and the requirement that the Template Content be used only for Mock-Ups of user interfaces for software products that would run solely on Apple\'s iOS operating system. The Template Content may not otherwise be used, extracted, copied, modified, distributed, or repackaged as content, clip art, stock animation, or similar assets, or in any other manner.',
        }),
        jsx('p', {
          children:
            'D. No Reverse Engineering; Limitations. You may not, and you agree not to or to enable others to, copy (except as expressly permitted by this License), decompile, reverse engineer, disassemble, attempt to derive the source code of, decrypt, modify, create derivative works of the Apple UI Design Resources or any part thereof (except as and only to the extent any foregoing restriction is prohibited by applicable law).',
        }),
        jsx('p', {
          children:
            'E. Compliance with Laws. You agree to use the Apple UI Design Resources in compliance with all applicable laws, including local laws of the country or region in which you reside or in which you download or use the Apple UI Design Resources.',
        }),
        jsx('p', {
          children: '3. No Transfer or Assignment.',
        }),
        jsx('p', {
          children:
            'Except as otherwise set forth herein, you may not transfer the Apple UI Design Resources without Apple\'s express prior written approval. All components of the Apple UI Design Resources are provided as part of a bundle and may not be separated from the bundle and distributed on a standalone basis. This License may not be assigned by you, nor may the rights granted hereunder be transferred by you, in whole or in part, through acquisition, merger or otherwise, without the prior written consent of a duly authorized representative of Apple. Any attempted assignment in contravention of this section shall be void.',
        }),
        jsx('p', {
          children: '4. Termination.',
        }),
        jsx('p', {
          children:
            'This License shall commence upon your installation or use of the Apple UI Design Resources. Your rights under this License will terminate automatically or cease to be effective without notice from Apple (a) if you fail to comply with any term(s) of this License, (b) if you are no longer a registered Apple Developer, or (c) if Apple releases a version of the Apple UI Design Resources which is incompatible with this version of the Apple UI Design Resources. Upon the termination of this License, you shall cease all use of the Apple UI Design Resources and destroy all copies, full or partial, of the Apple UI Design Resources. Section 2B, 2D, and 5 through 10 of this License shall survive any termination.',
        }),
        jsx('p', {
          children: '5. Disclaimer of Warranties.',
        }),
        jsx('p', {
          children:
            'A. YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT, TO THE EXTENT PERMITTED BY APPLICABLE LAW, USE OF THE APPLE UI DESIGN RESOURCES IS AT YOUR SOLE RISK AND THAT THE ENTIRE RISK AS TO SATISFACTORY QUALITY, PERFORMANCE, ACCURACY AND EFFORT IS WITH YOU.',
        }),
        jsx('p', {
          children:
            'B. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE APPLE UI DESIGN RESOURCES IS PROVIDED "AS IS" AND "AS AVAILABLE", WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND, AND APPLE AND APPLE\'S LICENSORS (COLLECTIVELY REFERRED TO AS "APPLE" FOR THE PURPOSES OF SECTIONS 5 AND 6) HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH RESPECT TO THE APPLE UI DESIGN RESOURCES, EITHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES AND/OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, QUIET ENJOYMENT, AND NON-INFRINGEMENT OF THIRD PARTY RIGHTS.',
        }),
        jsx('p', {
          children:
            'C. APPLE DOES NOT WARRANT AGAINST INTERFERENCE WITH YOUR ENJOYMENT OF THE APPLE UI DESIGN RESOURCES, THAT THE FUNCTIONS CONTAINED IN THE APPLE UI DESIGN RESOURCES WILL MEET YOUR REQUIREMENTS, THAT THE OPERATION OF THE APPLE UI DESIGN RESOURCES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT THE APPLE UI DESIGN RESOURCES WILL BE COMPATIBLE OR WORK WITH ANY THIRD PARTY SOFTWARE, APPLICATIONS OR THIRD PARTY SERVICES, OR THAT DEFECTS IN THE APPLE UI DESIGN RESOURCES WILL BE CORRECTED. INSTALLATION OF THIS APPLE UI DESIGN RESOURCES MAY AFFECT THE AVAILABILITY AND USABILITY OF THIRD PARTY SOFTWARE, APPLICATIONS OR THIRD PARTY SERVICES, AS WELL AS APPLE PRODUCTS AND SERVICES.',
        }),
        jsx('p', {
          children:
            'D. YOU FURTHER ACKNOWLEDGE THAT THE APPLE UI DESIGN RESOURCES IS NOT INTENDED OR SUITABLE FOR USE IN SITUATIONS OR ENVIRONMENTS WHERE THE FAILURE OR TIME DELAYS OF, OR ERRORS OR INACCURACIES IN THE CONTENT, DATA OR INFORMATION PROVIDED BY, THE APPLE UI DESIGN RESOURCES COULD LEAD TO DEATH, PERSONAL INJURY, OR SEVERE PHYSICAL OR ENVIRONMENTAL DAMAGE, INCLUDING WITHOUT LIMITATION THE OPERATION OF NUCLEAR FACILITIES, AIRCRAFT NAVIGATION OR COMMUNICATION SYSTEMS, AIR TRAFFIC CONTROL, LIFE SUPPORT OR WEAPONS SYSTEMS.',
        }),
        jsx('p', {
          children:
            'E. NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY APPLE OR AN APPLE AUTHORIZED REPRESENTATIVE SHALL CREATE A WARRANTY. SHOULD THE APPLE UI DESIGN RESOURCES PROVE DEFECTIVE, YOU ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.',
        }),
        jsx('p', {
          children: '6. Limitation of Liability.',
        }),
        jsx('p', {
          children:
            'TO THE EXTENT NOT PROHIBITED BY APPLICABLE LAW, IN NO EVENT SHALL APPLE BE LIABLE FOR PERSONAL INJURY, OR ANY INCIDENTAL, SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, CORRUPTION OR LOSS OF DATA, FAILURE TO TRANSMIT OR RECEIVE ANY DATA OR INFORMATION, BUSINESS INTERRUPTION OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OR INABILITY TO USE THE APPLE UI DESIGN RESOURCES OR ANY THIRD PARTY SOFTWARE, APPLICATIONS, OR SERVICES IN CONJUNCTION WITH THE APPLE UI DESIGN RESOURCES, HOWEVER CAUSED, REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT OR OTHERWISE) AND EVEN IF APPLE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO YOU. In no event shall Apple\'s total liability to you for all damages (other than as may be required by applicable law in cases involving personal injury) exceed the amount of fifty dollars ($50.00). The foregoing limitations will apply even if the above stated remedy fails of its essential purpose.',
        }),
        jsx('p', {
          children: '7. Export Control.',
        }),
        jsx('p', {
          children:
            'You may not use or otherwise export or re-export the Apple UI Design Resources except as authorized by United States law and the laws of the jurisdiction(s) in which the Apple UI Design Resources was obtained. In particular, but without limitation, the Apple UI Design Resources may not be exported or re-exported (a) into any U.S. embargoed countries or (b) to anyone on the U.S. Treasury Department\'s list of Specially Designated Nationals or the U.S. Department of Commerce Denied Person\'s List or Entity List or any other restricted party lists. By using the Apple UI Design Resources, you represent and warrant that you are not located in any such country or on any such list. You also agree that you will not use the Apple UI Design Resources for any purposes prohibited by United States law, including, without limitation, the development, design, manufacture or production of missiles, nuclear, chemical or biological weapons.',
        }),
        jsx('p', {
          children: '8. Government End Users.',
        }),
        jsx('p', {
          children:
            'The Apple UI Design Resources and related documentation are "Commercial Items", as that term is defined at 48 C.F.R. §2.101, consisting of "Commercial Computer Software" and "Commercial Computer Software Documentation", as such terms are used in 48 C.F.R. §12.212 or 48 C.F.R. §227.7202, as applicable. Consistent with 48 C.F.R. §12.212 or 48 C.F.R. §227.7202-1 through 227.7202-4, as applicable, the Commercial Computer Software and Commercial Computer Software Documentation are being licensed to U.S. Government end users (a) only as Commercial Items and (b) with only those rights as are granted to all other end users pursuant to the terms and conditions herein. Unpublished-rights reserved under the copyright laws of the United States.',
        }),
        jsx('p', {
          children: '9. Controlling Law and Severability.',
        }),
        jsx('p', {
          children:
            'This License will be governed by and construed in accordance with the laws of the State of California, excluding its conflict of law principles. This License shall not be governed by the United Nations Convention on Contracts for the International Sale of Goods, the application of which is expressly excluded. If for any reason a court of competent jurisdiction finds any provision, or portion thereof, to be unenforceable, the remainder of this License shall continue in full force and effect.',
        }),
        jsx('p', {
          children: '10. Complete Agreement; Governing Language.',
        }),
        jsx('p', {
          children:
            'This License constitutes the entire agreement between you and Apple relating to the use of the Apple UI Design Resources licensed hereunder and supersedes all prior or contemporaneous understandings regarding such subject matter. No amendment to or modification of this License will be binding unless in writing and signed by Apple. The parties hereto confirm that they have requested that this Agreement and all related documents be drafted in English. Les parties ont exigé que le présent contrat et tous les documents connexes soient rédigés en anglais.',
        }),
        jsx('p', {
          children: 'EA1441',
        }),
        jsx('p', {
          children: '12/02/2016',
        }),
      ],
    })
  }
}

// Original variable name: er
const INVALID_FULLSCREEN_STATE_ERROR = 'Handling fullscreen metadata response not in a valid fullscreen state'

interface ProcessFileViewParams {
  newSelectedView: any
}

interface EditorTypeRedirectResult {
  editorType: FEditorType
  nodeId?: string
  teamToMoveFileToOnNavigate?: string
  tryPluginEditorType?: string
  mode?: string
  tryPluginId?: string
}

interface FilePermissionsResult {
  can_delete: boolean
  can_edit: boolean
  can_edit_canvas: boolean
  can_manage: boolean
  can_view: boolean
  can_export: boolean
  can_access_dev_mode_entry_point: boolean
  can_access_full_dev_mode: boolean
  hasEduGracePeriod: boolean
  isFavorited: boolean
}

interface TeamUpgradeData {
  id: string
  name: string
  subscription: any
  gracePeriodEnd: Date | null
  studentTeamAt: Date | null
  restrictionsList: string[]
  eduGracePeriod: null
}

interface FolderUpgradeData {
  teamId: string
  inviteOnlyAt: null
  viewOnlyAt: null
  isEditingLockedForUser: boolean
  [key: string]: any
}

/**
 * Processes the selected view for a file in fullscreen mode.
 * Handles editor type redirection, file loading, and team navigation.
 *
 * Original function name: $$ej0
 */
export const processFileView = createOptimistThunk(async (store, { newSelectedView }: ProcessFileViewParams, { liveStore }) => {
  const fileKey = newSelectedView.fileKey
  if (!fileKey) {
    return
  }

  /**
   * Determines the appropriate editor type based on various conditions.
   *
   * Original function: anonymous function inside $$ej0
   */
  const determineEditorType = (view: any, storeInstance: any): EditorTypeRedirectResult => {
    if (!isEditorTypeEnabled(view.editorType) || (view.mode && view.mode !== 'auto')) {
      return view
    }

    const lastUsedEditorType = getLastUsedEditorType()
    const state = storeInstance.getState()
    const openFile = state.openFile
    const isPersonalFile = openFile && !openFile.parentOrgId && !openFile.teamId

    // Handle DevHandoff access restrictions
    if (!canAccessFullDevMode(state) && isPersonalFile && lastUsedEditorType === FEditorType.DevHandoff) {
      storeInstance.dispatch(selectViewAction({
        ...view,
        editorType: FEditorType.Design,
      }))

      const updatedView = storeInstance.getState().selectedView
      if (updatedView.view !== 'fullscreen') {
        throw new Error('Redirect new editor type failed.')
      }
      return updatedView
    }

    // Handle plugin editor type requests
    if (view.tryPluginEditorType) {
      storeInstance.dispatch(selectViewAction({
        ...view,
        editorType: mapToEditorType(view.tryPluginEditorType),
      }))

      const updatedView = storeInstance.getState().selectedView
      if (updatedView.view !== 'fullscreen') {
        throw new Error('Redirect new editor type failed.')
      }
      return updatedView
    }

    // Handle stored editor type preference
    if (lastUsedEditorType !== view.editorType) {
      storeInstance.dispatch(selectViewAction({
        ...view,
        editorType: lastUsedEditorType,
      }))

      const updatedView = storeInstance.getState().selectedView
      if (updatedView.view !== 'fullscreen') {
        throw new Error('Redirect new editor type failed.')
      }
      return updatedView
    }

    return view
  }

  const resolvedView = determineEditorType(newSelectedView, store)

  // Set mode flags
  if (newSelectedView.mode && newSelectedView.mode === 'dev' && !newSelectedView.tryPluginId) {
    atomStoreManager.set(_$$R2, true)
  }
  else if (newSelectedView.mode && newSelectedView.mode === 'draw' && !newSelectedView.tryPluginId) {
    atomStoreManager.set(_$$c2, true)
  }

  const didRedirectEditorType = resolvedView.editorType !== newSelectedView.editorType
  const initialState = store.getState()

  // Load file if not already in store
  if (!initialState.fileByKey[fileKey]) {
    const fileResponse = await fileApiHandler.getFiles({
      fileKey,
    })
    store.dispatch(filePutAction({
      file: fileResponse.data.meta,
    }))
  }

  const currentlyOpenFileKey = initialState.openFile?.key

  // Subscribe to file data
  subscribeAndAwaitData(OpenEditorFileData, {
    fileKey,
  })

  const updatedState = store.getState()
  const file = liveStore.readCachedFile(fileKey)
  if (!file) {
    throw new Error('Could not get file from liveStore')
  }

  // Gather file-related data
  const folder = updatedState.folders[file.folder_id || '']
  const team = updatedState.teams[file.team_id || '']
  const repo = updatedState.repos[file.file_repo_id || '']
  const gracePeriodStatus = getGracePeriodStatus(updatedState.userEduGracePeriods, file.team_id || '')
  const sourceFile = file.source_file_key ? await liveStore.fetchFile(file.source_file_key) : null

  // Set file permissions
  const filePermissions: FilePermissionsResult = {
    can_delete: false,
    can_edit: false,
    can_edit_canvas: false,
    can_manage: false,
    can_view: false,
    can_export: false,
    can_access_dev_mode_entry_point: currentlyOpenFileKey !== fileKey || !!initialState.openFile?.canAccessDevModeEntryPoint,
    can_access_full_dev_mode: currentlyOpenFileKey !== fileKey || !!initialState.openFile?.canAccessFullDevMode,
    hasEduGracePeriod: gracePeriodStatus.isInValidGracePeriod,
    isFavorited: !!initialState.openFile?.isFavorited,
  }

  // Prepare folder creation permissions
  const folderCreationPermissions = folder
    ? {
        ...FileCreationPermissionsGenerator.disabled(),
        ...folder,
      }
    : null

  // Dispatch file setup
  store.dispatch(setupFullscreenFile({
    file: setupFileObject(file, {
      folder: folderCreationPermissions,
      team,
      repo,
      sourceFile: sourceFile
        ? {
            ...sourceFile,
            can_manage: true,
            can_view: true,
          }
        : null,
      ...filePermissions,
    }),
    selectedNodeId: resolvedView.nodeId,
    fullscreenEditorType: resolvedView.editorType,
    didRedirectEditorTypeToStored: didRedirectEditorType,
  }))

  // Set file version if not connecting to multiplayer
  if (!mpGlobal.shouldConnectToMultiplayer) {
    store.dispatch(setFileVersion({
      fileVersion: EightSeven,
    }))
  }

  fullscreenValue.figFileLoaded(fileKey)

  // Handle team navigation
  const { teamToMoveFileToOnNavigate } = resolvedView
  const { teams, user } = initialState
  let targetTeam = null

  try {
    if (teamToMoveFileToOnNavigate) {
      // Load team if not already available
      if (Object.keys(teams).length === 0) {
        const { data } = await teamAPIClient.getTeam({
          teamId: teamToMoveFileToOnNavigate,
        })
        targetTeam = data.meta
        store.dispatch(setTeamOptimistThunk({
          team: data.meta,
          userInitiated: false,
        }))
        await fetchTeamRoles(teamToMoveFileToOnNavigate, store)
      }
      else {
        targetTeam = teamToMoveFileToOnNavigate ? teams[teamToMoveFileToOnNavigate] : null
      }

      if (!targetTeam) {
        return
      }

      // Fetch folder data and perform team upgrade
      const folderData = (await liveStore.fetch(Xg({
        teamId: teamToMoveFileToOnNavigate,
      }), {
        policy: 'networkOnly',
      }))[0] || null

      await executeTeamUpgrade(targetTeam, folderData, user, store, file)
    }
  }
  catch (error) {
    reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, error)
  }
})

/**
 * Sets up a file for fullscreen viewing.
 *
 * Original function name: eU
 */
const setupFullscreenFile = createOptimistThunk((store, params) => {
  // Reset fullscreen state
  fullscreenValue.resetLoadedFigFile()
  clearReportedErrors()

  if (testWebGLSupport() !== WebGLTestResult.SUCCESS) {
    throw new Error('webGLSupport() call failed but we\'re opening fullscreen. Don\'t dispatch fullscreen.open() directly - use selectView instead.')
  }

  const state = store.getState()
  const { file, selectedNodeId, didRedirectEditorTypeToStored } = params

  // Redirect if fullscreen shouldn't be used
  if (!shouldUseFullscreen()) {
    if (!file) {
      return
    }
    customHistory.redirect(buildFileUrl({
      file,
    }))
  }

  // Set branch status for desktop
  isBranchAlt(file) && desktopAPIInstance?.setIsBranch(true)

  // Determine editor type
  let editorType = params.fullscreenEditorType
  if (!(editorType && mapEditorTypeToFileType(editorType) === file.editorType)) {
    editorType = mapFileTypeToEditorType(file.editorType)
  }

  // Configure editor UI state
  EditorUIState.setEditorType(editorType)
  EditorUIState.setLoggedIn(!!state.user)

  // Dispatch file initialization
  store.dispatch(initializeFileForFullscreen({
    file,
    user: state.user,
    selectedNodeId,
    editorType,
    didRedirectEditorTypeToStored,
  }))

  // Disable autosave and open fullscreen
  setAutosaveStatus(false)
  store.dispatch(fullscreenOpen(params))

  // Show license agreement modal for Apple licensed files
  if (file && (file.license || '').toLowerCase() === 'apple') {
    store.dispatch(showModalHandler({
      type: LICENSE_AGREEMENT_MODAL_TYPE,
    }))
  }

  return null
})

/**
 * Fetches file metadata with performance timing.
 *
 * Original function name: eB
 *
 * @param fileKey - The key of the file to fetch metadata for
 */
function fetchFileMetadata(fileKey: string) {
  const metadataRequest = fileMetadataService.getFileMetadata({
    fileKey,
  })
  return fullscreenPerfManager.timeAsync('fileMetadataRequest', () => metadataRequest)
}

// Initialize file metadata fetching from URL path
const urlMatch = jW.exec(customHistory.location.pathname)
let pendingFileKey: string | null = null
let pendingMetadataPromise: Promise<any> | null = null

if (urlMatch) {
  pendingFileKey = urlMatch[1]
  pendingMetadataPromise = fetchFileMetadata(pendingFileKey)
}

/**
 * Initializes a file for fullscreen viewing with all necessary setup.
 *
 * Original function name: eH
 */
const initializeFileForFullscreen = createOptimistThunk(async (store, params) => {
  const { file, user, selectedNodeId, editorType, didRedirectEditorTypeToStored } = params
  const state = store.getState()

  try {
    // Set branching tags and track file opening
    setBranchingTags(file)
    trackFullscreenFileOpened({
      fileKey: file.key,
      folderId: file.folderId,
      teamId: file.teamId,
      orgId: file.parentOrgId,
      isNewFile: false,
      state,
    })

    // Setup autosave manager
    if (user) {
      setupAutosaveManager(file.key, user.id)
    }
    else {
      logInfo('Autosave', 'Not creating manager for logged out user')
    }

    // Validate node ID
    const validatedNodeId = isValidSessionLocalID(parseSessionLocalID(selectedNodeId)) ? selectedNodeId : ''

    // Set background color
    const backgroundColor = getBackgroundColorForTheme(getMPVisibleTheme(state.theme.themePreference))

    // Enable compressed textures for iPad
    if (BrowserInfo.isIpadNative && isASTCCompressionSupported() && _$$v.getFeatureGate('figjam_ipad_compressed_textures')) {
      getImageManager().setShouldUseCompressedTextures(true)
      sendWithRetry.post(`/file/${file.key}/generate_compressed_textures`).catch((error) => {
        logInfo('image', 'Failed to generate compressed textures', {
          fileKey: file.key,
          error,
        })
      })
    }

    // Preconnect to multiplayer
    mpGlobal.preconnect(mpGlobal.url({
      fileKey: file.key,
      role: 'editor',
      nodeIds: validatedNodeId,
      initialBgColor: backgroundColor,
      suppressDecodeErrors: isLocalDevOnCluster(),
      tagForLogging: mapEditorTypeToLoggingTag(editorType),
      forceViewOnly: fullscreenAlias.getIsExtension(),
    }))

    // Start fetching font list
    _$$W.startFetchingFontList()

    // Fetch file metadata
    let metadataResponse
    try {
      metadataResponse = pendingMetadataPromise && pendingFileKey === file.key
        ? await pendingMetadataPromise
        : await fetchFileMetadata(file.key)

      pendingMetadataPromise = null
      pendingFileKey = null
    }
    catch (error) {
      const metadataError = new Error(`Calling "/api/file_metadata/:file_key" failed with status ${error?.status}`)
      metadataError.cause = error
      return metadataError
    }

    // Process the metadata response
    await handleFileMetadataResponse(metadataResponse, store, editorType)

    // Set editor theme
    const visibleTheme = state.theme.visibleTheme
    Fullscreen?.setEditorTheme(visibleTheme || '')

    // Track file opening and save editor type preferences
    trackFileOpenedAndHandleMode(file, state, didRedirectEditorTypeToStored)
    saveLastUsedEditorType(mapEditorTypeToFileType(editorType))
    setLastUsedEditorType(editorType)

    // Mark file as viewed after delay
    if (file && user && parseQuery(customHistory.location.search).embed_host === undefined) {
      waitForVisibility().then(() => {
        setTimeout(() => {
          if (file.key === store.getState().openFile?.key) {
            store.dispatch(markFileViewedOptimistic({
              fileKey: file.key,
            }))
          }
        }, 4000)
      })
    }
  }
  catch (error) {
    // Clean up autosave manager
    await destroyAutosaveManager()

    // Handle specific fullscreen state errors
    if (error.message === INVALID_FULLSCREEN_STATE_ERROR) {
      return
    }

    // Get HTTP status code
    const statusCode = Number(error.cause?.status || 0)

    // Report error through appropriate channel
    if (desktopAPIInstance) {
      desktopAPIInstance.reportFatalError(file.key, statusCode === 0
        ? {
            type: 'load',
            code: -106,
            description: getI18nString('user_facing_error.loading_a_file'),
          }
        : {
            type: 'http',
            statusCode,
          })
    }
    else {
      if (statusCode === 404) {
        showFileBrowserOrError(getI18nString('user_facing_error.404_loading_a_file'), store.dispatch)
      }
      else {
        showFileBrowserOrError(getI18nString('user_facing_error.opening_editor'), store.dispatch)
      }
    }

    // Track and report the error
    trackDefinedFileEvent('scenegraph_and_sync.fullscreen_open_error', file.key, state, {
      error: error instanceof Error
        ? error.cause
          ? `${error.message}: ${error.cause.message}`
          : error.message
        : JSON.stringify(error),
      statusCode: Number.isNaN(statusCode) ? undefined : statusCode,
    })

    reportError(ServiceCategories.UNOWNED, error, {
      tags: {
        severity: SeverityLevel.Critical,
      },
    })
  }
})

/**
 * Executes team upgrade operations when moving a file to a new team.
 *
 * Original function name: $$eW1
 */
export async function executeTeamUpgrade(
  teamData: any,
  folderData: any,
  userData: any,
  store: any,
  file: any,
) {
  if (teamData && folderData && userData) {
    // Prepare team upgrade data
    const teamUpgradeData: TeamUpgradeData = {
      id: teamData.id,
      name: teamData.name,
      subscription: teamData.subscription,
      gracePeriodEnd: teamData.grace_period_end ? new Date(teamData.grace_period_end) : null,
      studentTeamAt: teamData.student_team_at ? new Date(teamData.student_team_at) : null,
      restrictionsList: teamData.restrictions_list || [],
      eduGracePeriod: null,
    }

    // Prepare folder upgrade data
    const folderUpgradeData: FolderUpgradeData = {
      ...folderData,
      teamId: teamData.id,
      inviteOnlyAt: null,
      viewOnlyAt: null,
      isEditingLockedForUser: false,
    }

    // Check if editing should be locked due to restrictions
    folderUpgradeData.isEditingLockedForUser = hasProjectRestrictions(folderUpgradeData, teamUpgradeData, userData) || false

    // Dispatch team and folder update
    await store.dispatch(_$$z({
      files: [file],
      folder: folderUpgradeData,
      team: teamUpgradeData,
      onError: () => store.dispatch(hideModalHandler()),
    }))

    // Show success notification with publish option
    const successMessage = getI18nString('visual_bell.main_text', {
      teamName: teamData.name,
    })
    const buttonText = getI18nString('visual_bell.button_text')

    store.dispatch(VisualBellActions.enqueue({
      type: 'upgrade-success-with-publish',
      message: successMessage,
      button: {
        text: buttonText,
        action: () => {
          logAndTrackCTA({
            text: 'Publish components',
            name: 'Publish draft after team upgrade',
            trackingDescriptor: UpgradeAction.PUBLISH_COMPONENTS_AFTER_TEAM_UPGRADE,
            inPublishDraftExp: true,
          }, 'cta_clicked')

          store.dispatch(showModalHandler({
            type: _$$T,
            data: {
              entrypoint: r6.PUBLISH_MODAL_AFTER_TEAM_UPGRADE,
            },
          }))
        },
      },
    }))
  }
}

// Export renamed functions
export const sR = processFileView
export const Lp = executeTeamUpgrade
