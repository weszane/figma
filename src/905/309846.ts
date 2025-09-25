import { PureComponent } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { clearReportedErrors, reportError, setFileBranchingTags, SeverityLevel } from '../905/11'
import { z4 } from '../905/37051'
import { m as _$$m } from '../905/84999'
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
import { BL, DH, zR } from '../905/327855'
import { P as _$$P } from '../905/347284'
import { createOptimistThunk } from '../905/350402'
import { UpgradeAction } from '../905/370443'
import { z as _$$z } from '../905/404751'
import { bE } from '../905/466026'
import { waitForVisibility } from '../905/508367'
import { ag, Jt, p9, u6, yf } from '../905/509613'
import { v as _$$v } from '../905/516963'
import { r6 } from '../905/542608'
import { subscribeAndAwaitData } from '../905/553831'
import { c as _$$c2 } from '../905/580030'
import { putTeamUser } from '../905/584989'
import { getFeatureFlags } from '../905/601108'
import { customHistory } from '../905/612521'
import { buildFileUrl } from '../905/612685'
import { b as _$$b } from '../905/620668'
import { setupFileObject } from '../905/628874'
import { parseQuery } from '../905/634134'
import { g_ } from '../905/646788'
import { n as _$$n } from '../905/646812'
import { fetchTeamRoles } from '../905/672897'
import { logInfo } from '../905/714362'
import { isBranchAlt } from '../905/760074'
import { getSelectedFile } from '../905/766303'
import { teamAPIClient } from '../905/834575'
import { isValidSessionLocalID, parseSessionLocalID } from '../905/871411'
import { XHR } from '../905/910117'
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
import { dK, x2, xt } from '../figma_app/149304'
import { getInitialOptions, isLocalDevOnCluster } from '../figma_app/169182'
import { Xg } from '../figma_app/199513'
import { ky } from '../figma_app/214121'
import { setTeamOptimistThunk } from '../figma_app/240735'
import { Bz } from '../figma_app/298277'
import { mapToEditorType } from '../figma_app/300692'
import { logAndTrackCTA, trackDefinedFileEvent } from '../figma_app/314264'
import { hasProjectRestrictions } from '../figma_app/345997'
import { fullscreenValue } from '../figma_app/455680'
import { T as _$$T } from '../figma_app/472024'
import { canAccessFullDevMode } from '../figma_app/473493'
import { e8 } from '../figma_app/557318'
import { getImageManager } from '../figma_app/624361'
import { ButtonBasePrimary, ButtonSecondary, createLabel, FocusCheckbox } from '../figma_app/637027'
import { jW } from '../figma_app/640683'
import { FileCreationPermissionsGenerator } from '../figma_app/687776'
import { LQ } from '../figma_app/741211'
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
async function ea(e, t, i) {
  let n = t.getState()
  let s = e.data.meta
  if (s || reportError(ServiceCategories.FRONTEND_PLATFORM, new Error('We are expecting FileMetadata but got undefined'), t => (t.setExtra('response', e), t)), s.redirect_to_password_auth) {
    await customHistory.redirectAndWaitForever(buildFileUrl({
      file: {
        key: s.file_key,
        name: s.name,
      },
    }))
    return
  }
  atomStoreManager.set(ag, s.jubilee_tentative_plan_eligibility)
  atomStoreManager.set(u6, s.jubilee_tentative_user_eligibility)
  atomStoreManager.set(p9, s.jubilee_b)
  atomStoreManager.set(Jt, s.jubilee_eligibility_s)
  atomStoreManager.set(yf, new Set())
  let l = getFeatureFlags()
  let c = s.feature_flags
  if (t.dispatch(setNeedsUpgrade({
    needsUpgrade: s.needs_upgrade,
  })), s.file_repo && t.dispatch(bE({
    repo: s.file_repo,
  })), s.script !== Fig.fullscreenScriptHash && (await customHistory.reloadAndWaitForever('Fullscreen version mismatch', {
    isInProgressVisibleLoad: fullscreenPerfManager.isInProgressVisibleLoad(),
    latestFullscreenVersion: s.script,
    currentFullscreenVersion: Fig.fullscreenScriptHash,
  })), c && (l.reload_when_feature_flags_change || c.reload_when_feature_flags_change)) {
    let e = (function (e, t) {
      for (let i of [t, e]) {
        for (let n in i) {
          if (!!e[n] != !!t[n])
            return `${n} changed to ${!!t[n]}`
        }
      }
      return null
    }(l, c))
    e !== null && (await customHistory.reloadAndWaitForever(`Feature flag change: ${e}`))
  }
  await fullscreenValue.loadAndStartFullscreenIfNecessary()
  Fullscreen.setEditorType(mapEditorTypeToWorkspaceType(i))
  let m = s.team
  m && t.dispatch(setTeamOptimistThunk({
    team: m,
    userInitiated: !1,
  }))
  let h = getSelectedFile(n)
  let g = !1
  let _ = null
  let A = null
  let y = null
  let b = null
  let {
    selectedView,
  } = n
  if (selectedView.view !== 'fullscreen')
    throw new Error(er)
  if (selectedView.commentThreadId != null || selectedView.showCommentPreferencesPicker) {
    let e = window.FigmaMobile
    g = !e || !!e.updateCommentsMode
  }
  h?.thumbnail_guid && AppStateTsApi.canvasViewState().thumbnailNodeId.set(h.thumbnail_guid)
  selectedView.showInspectPanel ? setPropertiesPanelTab(DesignWorkspace.INSPECT) : g || (s.can_edit ? setPropertiesPanelTab(DesignWorkspace.DESIGN) : setPropertiesPanelTab(DesignWorkspace.COMMENT))
  selectedView.nodeId && (_ = selectedView.nodeId)
  selectedView.fallbackStateGroupId && (A = selectedView.fallbackStateGroupId)
  selectedView.viewport && (y = selectedView.viewport)
  selectedView.devModeFocusId && (b = selectedView.devModeFocusId)
  let I = {
    sharedFontsList: getFontMetadataList(s.shared_fonts),
    localizedToUnlocalized: [],
    renames: {
      family: {},
      style: {},
    },
    sources: [FontSourceType.SHARED],
  }
  getFeatureFlags().ce_new_missing_fonts_logging && e8()
  _$$n(t, I);
  (selectedView.versionId || selectedView.compareVersionId || selectedView.compareLatest) && t.dispatch(setProgressBarState({
    mode: UIVisibilitySetting.ON_AND_LOCKED,
  }))
  selectedView.compareLatest && t.dispatch(maybeShowVersionDiffNotification({
    openFileKey: s.file_key,
  }))
  selectedView.showPermissionsModalFromGoogleClassroomIntegration && selectedView.fileKey && t.dispatch(showModalHandler({
    type: g_,
    data: {
      fileKey: selectedView.fileKey,
      source: nk.googleClassroomIntegration,
    },
  }))
  let E = s.current_team_user
  E && h?.team_id && t.dispatch(putTeamUser({
    teamUsers: [E],
    teamId: h.team_id,
  }))
  let x = !!(s.is_team_template && LQ(n))
  desktopAPIInstance?.setIsLibrary(!!s.last_published_at)
  desktopAPIInstance?.setIsTeamTemplate(!!x)
  Fullscreen.setEditorTheme(n.theme.visibleTheme || '')
  ColorStateTsApi && ky.updateColorsInFullscreen(ColorStateTsApi.colorTokensState())
  fullscreenPerfManager.time('openFileWithMetadata', () => Fullscreen.openFileWithServerMetadata({
    metadata: {
      file_key: s.file_key,
      source_file_key: s.source_file_key,
    },
    newFile: !1,
    startInCommentsMode: g,
    selectedNodeId: _,
    fallbackStateGroupId: A,
    devModeFocusNodeId: b,
    urlViewport: y,
    additionalTopPadding: n.user ? null : _$$A,
    mainComponentLink: !!selectedView.mainComponentLink,
    shouldConnectToMultiplayer: mpGlobal.shouldConnectToMultiplayer,
    preserveUrlNodeId: !1,
  }))
  let S = window.FigmaMobile
  let w = getInitialOptions().tracking_session_id
  S?.updateTrackingSessionId && w && S.updateTrackingSessionId(w)
}
let eT = 'LICENSE_AGREEMENT_MODAL'
registerLegacyModal(eT, e => jsx(ek, {
  ...e,
  selectedView: e.selectedView,
}))
class ek extends PureComponent {
  constructor() {
    super(...arguments)
    this.state = {
      checked: !1,
    }
    this.onChange = (e) => {
      this.setState({
        checked: e.target.checked,
      })
    }
    this.accept = () => {
      this.props.dispatch(hideModal())
      let e = getSelectedFile(this.props)
      let {
        selectedView,
      } = this.props
      selectedView.landingState === 'DUPLICATE' && this.props.user && e != null && customHistory.redirect(`${e.url}/duplicate`)
    }
    this.decline = () => {
      customHistory.redirect('/')
    }
  }

  render() {
    let e = getSelectedFile(this.props)
    return e?.license?.toLowerCase() === 'apple'
      ? jsxs(ModalContainer, {
          size: 560,
          className: `${Dm} license_agreement--modal--EN2ao`,
          disableClickOutsideToHide: !0,
          ...this.props,
          children: [jsx(_$$P, {
            width: 560,
            className: 'license_agreement--scrollContainer--JFn-R',
            children: jsx('div', {
              className: 'license_agreement--content--ASLpS',
              children: jsx(eR, {}),
            }),
          }), jsxs('div', {
            className: 'license_agreement--footer--dZJPI',
            children: [jsx(FocusCheckbox, {
              id: 'check-license-agreement',
              checked: this.state.checked,
              onChange: this.onChange,
            }), jsx(createLabel, {
              htmlFor: 'check-license-agreement',
              children: 'I have read, understood, and agree to the License Agreement.',
            }), jsx(ButtonSecondary, {
              onClick: this.decline,
              children: 'Disagree and Cancel',
            }), jsx(ButtonBasePrimary, {
              disabled: !this.state.checked,
              onClick: this.accept,
              children: 'Agree and Open',
            })],
          })],
        })
      : jsx('div', {})
  }
}
ek.displayName = 'LicenseAgreementModal'
class eR extends PureComponent {
  render() {
    return jsxs('div', {
      children: [jsx('p', {
        children: 'APPLE INC.',
      }), jsx('p', {
        children: 'LICENSE AGREEMENT FOR APPLE UI DESIGN RESOURCES',
      }), jsx('p', {
        children: 'For iOS Application Uses Only',
      }), jsx('p', {
        children: 'PLEASE READ THIS LICENSE AGREEMENT (\u201CLICENSE\u201D) CAREFULLY BEFORE USING THE APPLE UI DESIGN RESOURCES (DEFINED BELOW). BY USING THE APPLE UI DESIGN RESOURCES, YOU ARE AGREEING TO BE BOUND BY THE TERMS OF THIS LICENSE. IF YOU ARE ACCESSING THE APPLE UI DESIGN RESOURCES ELECTRONICALLY, SIGNIFY YOUR AGREEMENT TO BE BOUND BY THE TERMS OF THIS LICENSE BY CLICKING THE \u201CAGREE\u201D BUTTON. IF YOU DO NOT AGREE TO THE TERMS OF THIS LICENSE, DO NOT USE THE APPLE UI DESIGN RESOURCES AND CLICK \u201CDISAGREE\u201D. IMPORTANT NOTES:',
      }), jsx('p', {
        children: 'THE APPLE UI DESIGN RESOURCES LICENSED HEREUNDER ARE TO BE USED SOLELY FOR CREATING MOCK-UPS OF USER INTERFACES DESIGNED FOR USE IN SOFTWARE PRODUCTS THAT RUN SOLELY ON APPLE\u2019S iOS OPERATING SYSTEM.',
      }), jsx('p', {
        children: 'If you are entering into this License on behalf of your company or organization, \u201Cyou\u201D or \u201Cyour\u201D refers to such entity as well, and you represent that you have legal authority to bind your company or organization to the terms of this License.',
      }), jsx('p', {
        children: '1. General.',
      }), jsx('p', {
        children: 'A. The Apple software, interfaces, content, templates, data, and other materials accompanying this License, whether on disk, print or electronic documentation, in read only memory, or any other media or in any other form (collectively the \u201CApple UI Design Resources\u201D) are licensed, not sold, to you by Apple Inc. (\u201CApple\u201D) for use only under the terms of this License. Apple and/or Apple\u2019s licensors retain ownership of the Apple UI Design Resources and reserve all rights not expressly granted to you. The terms of this License will govern any software upgrades provided to you by Apple that replace and/or supplement the original Apple UI Design Resources, unless such upgrade is accompanied by a separate license in which case the terms of that license will govern.',
      }), jsx('p', {
        children: 'B. To the extent that the Apple San Francisco font is included with the Apple UI Design Resources, it is subject to a separate license agreement. If you want to install and use the Apple San Francisco font, you must first accept the separate license agreement that accompanies the font.',
      }), jsx('p', {
        children: 'C. Title and intellectual property rights in and to any content displayed by or accessed through the Apple UI Design Resources belongs to the respective content owner. Such content may be protected by copyright or other intellectual property laws and treaties, and may be subject to terms of use of the third party providing such content. This License does not grant you any rights to use such content nor does it guarantee that such content will continue to be available to you.',
      }), jsx('p', {
        children: '2. Permitted License Uses and Restrictions.',
      }), jsx('p', {
        children: 'A. Limited License. Subject to the terms of this License, you are granted a limited, non-transferable, non-exclusive license to use the Apple UI Design Resources solely for creating mock-ups of user interfaces designed for use in software products that run solely on Apple\u2019s iOS operating system (\u201CMock-Ups\u201D). The foregoing right includes the right to show the Apple UI Design Resources in screen shots, images or other depictions of such Mock-Ups. You may use the Apple UI Design Resources only for the purposes described in this License and only if you are a registered Apple Developer, or as otherwise expressly permitted by Apple in writing.',
      }), jsx('p', {
        children: 'B. Other Use Restrictions. The grants set forth in this License do not permit you to, and you agree not to, install, use or run the Apple UI Design Resources for the purpose of creating mock-ups of user interfaces to be used in software products running on any non-Apple iOS operating system. You may not embed the Apple UI Design Resources in any software programs or other products. Except as expressly provided for herein, you may not use the Apple UI Design Resources to, create, develop, display or otherwise distribute any documentation, artwork, website content or any other work product. Except as otherwise expressly permitted by the terms of this License or as otherwise licensed by Apple, you may not make the Apple UI Design Resources available over a network where they could be run or used by multiple computers at the same time. You may not rent, lease, lend, trade, transfer, sell, sublicense or otherwise redistribute the Apple UI Design Resources in any unauthorized way, or enable others to do so.',
      }), jsx('p', {
        children: 'C. Template Content. The Apple UI Design Resources licensed hereunder contain content such as interfaces, graphics, artwork, images, and similar content (individually and collectively, the \u201CTemplate Content\u201D), for use in creating your Mock-Ups in accordance with this License. To the extent that you provide Mock-Ups you create using the Template Content to any other party, you agree to ensure that each such recipient is aware of the restrictions set forth in this License including, without limitation, the restriction on extraction of Template Content and the requirement that the Template Content be used only for Mock-Ups of user interfaces for software products that would run solely on Apple\u2019s iOS operating system. The Template Content may not otherwise be used, extracted, copied, modified, distributed, or repackaged as content, clip art, stock animation, or similar assets, or in any other manner.',
      }), jsx('p', {
        children: 'D. No Reverse Engineering; Limitations. You may not, and you agree not to or to enable others to, copy (except as expressly permitted by this License), decompile, reverse engineer, disassemble, attempt to derive the source code of, decrypt, modify, create derivative works of the Apple UI Design Resources or any part thereof (except as and only to the extent any foregoing restriction is prohibited by applicable law).',
      }), jsx('p', {
        children: 'E. Compliance with Laws. You agree to use the Apple UI Design Resources in compliance with all applicable laws, including local laws of the country or region in which you reside or in which you download or use the Apple UI Design Resources.',
      }), jsx('p', {
        children: '3. No Transfer or Assignment.',
      }), jsx('p', {
        children: 'Except as otherwise set forth herein, you may not transfer the Apple UI Design Resources without Apple\u2019s express prior written approval. All components of the Apple UI Design Resources are provided as part of a bundle and may not be separated from the bundle and distributed on a standalone basis. This License may not be assigned by you, nor may the rights granted hereunder be transferred by you, in whole or in part, through acquisition, merger or otherwise, without the prior written consent of a duly authorized representative of Apple. Any attempted assignment in contravention of this section shall be void.',
      }), jsx('p', {
        children: '4. Termination.',
      }), jsx('p', {
        children: 'This License shall commence upon your installation or use of the Apple UI Design Resources. Your rights under this License will terminate automatically or cease to be effective without notice from Apple (a) if you fail to comply with any term(s) of this License, (b) if you are no longer a registered Apple Developer, or (c) if Apple releases a version of the Apple UI Design Resources which is incompatible with this version of the Apple UI Design Resources. Upon the termination of this License, you shall cease all use of the Apple UI Design Resources and destroy all copies, full or partial, of the Apple UI Design Resources. Section 2B, 2D, and 5 through 10 of this License shall survive any termination.',
      }), jsx('p', {
        children: '5. Disclaimer of Warranties.',
      }), jsx('p', {
        children: 'A. YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT, TO THE EXTENT PERMITTED BY APPLICABLE LAW, USE OF THE APPLE UI DESIGN RESOURCES IS AT YOUR SOLE RISK AND THAT THE ENTIRE RISK AS TO SATISFACTORY QUALITY, PERFORMANCE, ACCURACY AND EFFORT IS WITH YOU.',
      }), jsx('p', {
        children: 'B. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE APPLE UI DESIGN RESOURCES IS PROVIDED \u201CAS IS\u201D AND \u201CAS AVAILABLE\u201D, WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND, AND APPLE AND APPLE\u2019S LICENSORS (COLLECTIVELY REFERRED TO AS \u201CAPPLE\u201D FOR THE PURPOSES OF SECTIONS 5 AND 6) HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH RESPECT TO THE APPLE UI DESIGN RESOURCES, EITHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES AND/OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, QUIET ENJOYMENT, AND NON-INFRINGEMENT OF THIRD PARTY RIGHTS.',
      }), jsx('p', {
        children: 'C. APPLE DOES NOT WARRANT AGAINST INTERFERENCE WITH YOUR ENJOYMENT OF THE APPLE UI DESIGN RESOURCES, THAT THE FUNCTIONS CONTAINED IN THE APPLE UI DESIGN RESOURCES WILL MEET YOUR REQUIREMENTS, THAT THE OPERATION OF THE APPLE UI DESIGN RESOURCES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT THE APPLE UI DESIGN RESOURCES WILL BE COMPATIBLE OR WORK WITH ANY THIRD PARTY SOFTWARE, APPLICATIONS OR THIRD PARTY SERVICES, OR THAT DEFECTS IN THE APPLE UI DESIGN RESOURCES WILL BE CORRECTED. INSTALLATION OF THIS APPLE UI DESIGN RESOURCES MAY AFFECT THE AVAILABILITY AND USABILITY OF THIRD PARTY SOFTWARE, APPLICATIONS OR THIRD PARTY SERVICES, AS WELL AS APPLE PRODUCTS AND SERVICES.',
      }), jsx('p', {
        children: 'D. YOU FURTHER ACKNOWLEDGE THAT THE APPLE UI DESIGN RESOURCES IS NOT INTENDED OR SUITABLE FOR USE IN SITUATIONS OR ENVIRONMENTS WHERE THE FAILURE OR TIME DELAYS OF, OR ERRORS OR INACCURACIES IN THE CONTENT, DATA OR INFORMATION PROVIDED BY, THE APPLE UI DESIGN RESOURCES COULD LEAD TO DEATH, PERSONAL INJURY, OR SEVERE PHYSICAL OR ENVIRONMENTAL DAMAGE, INCLUDING WITHOUT LIMITATION THE OPERATION OF NUCLEAR FACILITIES, AIRCRAFT NAVIGATION OR COMMUNICATION SYSTEMS, AIR TRAFFIC CONTROL, LIFE SUPPORT OR WEAPONS SYSTEMS.',
      }), jsx('p', {
        children: 'E. NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY APPLE OR AN APPLE AUTHORIZED REPRESENTATIVE SHALL CREATE A WARRANTY. SHOULD THE APPLE UI DESIGN RESOURCES PROVE DEFECTIVE, YOU ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.',
      }), jsx('p', {
        children: '6. Limitation of Liability.',
      }), jsx('p', {
        children: 'TO THE EXTENT NOT PROHIBITED BY APPLICABLE LAW, IN NO EVENT SHALL APPLE BE LIABLE FOR PERSONAL INJURY, OR ANY INCIDENTAL, SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, CORRUPTION OR LOSS OF DATA, FAILURE TO TRANSMIT OR RECEIVE ANY DATA OR INFORMATION, BUSINESS INTERRUPTION OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OR INABILITY TO USE THE APPLE UI DESIGN RESOURCES OR ANY THIRD PARTY SOFTWARE, APPLICATIONS, OR SERVICES IN CONJUNCTION WITH THE APPLE UI DESIGN RESOURCES, HOWEVER CAUSED, REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT OR OTHERWISE) AND EVEN IF APPLE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO YOU. In no event shall Apple\u2019s total liability to you for all damages (other than as may be required by applicable law in cases involving personal injury) exceed the amount of fifty dollars ($50.00). The foregoing limitations will apply even if the above stated remedy fails of its essential purpose.',
      }), jsx('p', {
        children: '7. Export Control.',
      }), jsx('p', {
        children: 'You may not use or otherwise export or re-export the Apple UI Design Resources except as authorized by United States law and the laws of the jurisdiction(s) in which the Apple UI Design Resources was obtained. In particular, but without limitation, the Apple UI Design Resources may not be exported or re-exported (a) into any U.S. embargoed countries or (b) to anyone on the U.S. Treasury Department\u2019s list of Specially Designated Nationals or the U.S. Department of Commerce Denied Person\u2019s List or Entity List or any other restricted party lists. By using the Apple UI Design Resources, you represent and warrant that you are not located in any such country or on any such list. You also agree that you will not use the Apple UI Design Resources for any purposes prohibited by United States law, including, without limitation, the development, design, manufacture or production of missiles, nuclear, chemical or biological weapons.',
      }), jsx('p', {
        children: '8. Government End Users.',
      }), jsx('p', {
        children: 'The Apple UI Design Resources and related documentation are \u201CCommercial Items\u201D, as that term is defined at 48 C.F.R. \xA72.101, consisting of \u201CCommercial Computer Software\u201D and \u201CCommercial Computer Software Documentation\u201D, as such terms are used in 48 C.F.R. \xA712.212 or 48 C.F.R. \xA7227.7202, as applicable. Consistent with 48 C.F.R. \xA712.212 or 48 C.F.R. \xA7227.7202-1 through 227.7202-4, as applicable, the Commercial Computer Software and Commercial Computer Software Documentation are being licensed to U.S. Government end users (a) only as Commercial Items and (b) with only those rights as are granted to all other end users pursuant to the terms and conditions herein. Unpublished-rights reserved under the copyright laws of the United States.',
      }), jsx('p', {
        children: '9. Controlling Law and Severability.',
      }), jsx('p', {
        children: 'This License will be governed by and construed in accordance with the laws of the State of California, excluding its conflict of law principles. This License shall not be governed by the United Nations Convention on Contracts for the International Sale of Goods, the application of which is expressly excluded. If for any reason a court of competent jurisdiction finds any provision, or portion thereof, to be unenforceable, the remainder of this License shall continue in full force and effect.',
      }), jsx('p', {
        children: '10. Complete Agreement; Governing Language.',
      }), jsx('p', {
        children: 'This License constitutes the entire agreement between you and Apple relating to the use of the Apple UI Design Resources licensed hereunder and supersedes all prior or contemporaneous understandings regarding such subject matter. No amendment to or modification of this License will be binding unless in writing and signed by Apple. The parties hereto confirm that they have requested that this Agreement and all related documents be drafted in English. Les parties ont exig\xE9 que le pr\xE9sent contrat et tous les documents connexes soient r\xE9dig\xE9s en anglais.',
      }), jsx('p', {
        children: 'EA1441',
      }), jsx('p', {
        children: '12/02/2016',
      })],
    })
  }
}
eR.displayName = 'AppleLicenseAgreement'
let $$ej0 = createOptimistThunk(async (e, {
  newSelectedView: t,
}, {
  liveStore: i,
}) => {
  let n = t.fileKey
  if (!n)
    return
  let a = (function (e, t) {
    if (!isEditorTypeEnabled(e.editorType) || e.mode && e.mode !== 'auto')
      return e
    let i = getLastUsedEditorType()
    let n = t.getState()
    let r = n.openFile
    let a = r && !r.parentOrgId && !r.teamId
    if (!canAccessFullDevMode(n) && a && i === FEditorType.DevHandoff) {
      t.dispatch(selectViewAction({
        ...e,
        editorType: FEditorType.Design,
      }))
      let i = t.getState().selectedView
      if (i.view !== 'fullscreen')
        throw new Error('Redirect new editor type failed.')
      return i
    }
    if (e.tryPluginEditorType) {
      t.dispatch(selectViewAction({
        ...e,
        editorType: mapToEditorType(e.tryPluginEditorType),
      }))
      let i = t.getState().selectedView
      if (i.view !== 'fullscreen')
        throw new Error('Redirect new editor type failed.')
      return i
    }
    if (i !== e.editorType) {
      t.dispatch(selectViewAction({
        ...e,
        editorType: i,
      }))
      let n = t.getState().selectedView
      if (n.view !== 'fullscreen')
        throw new Error('Redirect new editor type failed.')
      return n
    }
    return e
  }(t, e))
  t.mode && t.mode === 'dev' && !t.tryPluginId ? atomStoreManager.set(_$$R2, !0) : t.mode && t.mode === 'draw' && !t.tryPluginId && atomStoreManager.set(_$$c2, !0)
  let s = a.editorType !== t.editorType
  let l = e.getState()
  if (!l.fileByKey[n]) {
    let t = await fileApiHandler.getFiles({
      fileKey: n,
    })
    e.dispatch(filePutAction({
      file: t.data.meta,
    }))
  }
  let d = l.openFile?.key
  subscribeAndAwaitData(OpenEditorFileData, {
    fileKey: n,
  })
  let c = e.getState()
  let u = i.readCachedFile(n)
  if (!u)
    throw new Error('Could not get file from liveStore')
  let p = c.folders[u.folder_id || '']
  let h = c.teams[u.team_id || '']
  let g = c.repos[u.file_repo_id || '']
  let _ = getGracePeriodStatus(c.userEduGracePeriods, u.team_id || '')
  let y = u.source_file_key ? await i.fetchFile(u.source_file_key) : null
  let b = {
    can_delete: !1,
    can_edit: !1,
    can_edit_canvas: !1,
    can_manage: !1,
    can_view: !1,
    can_export: !1,
    can_access_dev_mode_entry_point: d !== n || !!l.openFile?.canAccessDevModeEntryPoint,
    can_access_full_dev_mode: d !== n || !!l.openFile?.canAccessFullDevMode,
    hasEduGracePeriod: _.isInValidGracePeriod,
    isFavorited: !!l.openFile?.isFavorited,
  }
  let I = p
    ? {
        ...FileCreationPermissionsGenerator.disabled(),
        ...p,
      }
    : null
  e.dispatch(eU({
    file: setupFileObject(u, {
      folder: I,
      team: h,
      repo: g,
      sourceFile: y
        ? {
            ...y,
            can_manage: !0,
            can_view: !0,
          }
        : null,
      ...b,
    }),
    selectedNodeId: a.nodeId,
    fullscreenEditorType: a.editorType,
    didRedirectEditorTypeToStored: s,
  }))
  mpGlobal.shouldConnectToMultiplayer || e.dispatch(setFileVersion({
    fileVersion: EightSeven,
  }))
  fullscreenValue.figFileLoaded(n)
  let {
    teamToMoveFileToOnNavigate,
  } = a
  let {
    teams,
    user,
  } = l
  let C = null
  try {
    if (teamToMoveFileToOnNavigate) {
      if (Object.keys(teams).length === 0) {
        let {
          data,
        } = await teamAPIClient.getTeam({
          teamId: teamToMoveFileToOnNavigate,
        })
        C = data.meta
        e.dispatch(setTeamOptimistThunk({
          team: data.meta,
          userInitiated: !1,
        }))
        await fetchTeamRoles(teamToMoveFileToOnNavigate, e)
      }
      else {
        C = teamToMoveFileToOnNavigate ? teams[teamToMoveFileToOnNavigate] : null
      }
      if (!C)
        return
      let t = (await i.fetch(Xg({
        teamId: teamToMoveFileToOnNavigate,
      }), {
        policy: 'networkOnly',
      }))[0] || null
      await $$eW1(C, t, user, e, u)
    }
  }
  catch (e) {
    reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, e)
  }
})
let eU = createOptimistThunk((e, t) => {
  if (fullscreenValue.resetLoadedFigFile(), clearReportedErrors(), dK() !== xt.SUCCESS)
    throw new Error('webGLSupport() call failed but we\'re opening fullscreen. Don\'t dispatch fullscreen.open() directly - use selectView instead.')
  let i = e.getState().user
  let {
    file,
    selectedNodeId,
    didRedirectEditorTypeToStored,
  } = t
  if (!Bz()) {
    if (!file)
      return
    customHistory.redirect(buildFileUrl({
      file: t.file,
    }))
  }
  isBranchAlt(file) && desktopAPIInstance?.setIsBranch(!0)
  let s = t.fullscreenEditorType
  s && mapEditorTypeToFileType(s) === t.file.editorType || (s = mapFileTypeToEditorType(t.file.editorType))
  EditorUIState.setEditorType(s)
  EditorUIState.setLoggedIn(!!i)
  e.dispatch(eH({
    file,
    user: i,
    selectedNodeId,
    editorType: s,
    didRedirectEditorTypeToStored,
  }))
  setAutosaveStatus(!1)
  e.dispatch(fullscreenOpen(t))
  file && (file.license || '').toLowerCase() === 'apple' && e.dispatch(showModalHandler({
    type: eT,
  }))
  return null
})
function eB(e) {
  let t = _$$m.getFileMetadata({
    fileKey: e,
  })
  return fullscreenPerfManager.timeAsync('fileMetadataRequest', () => t)
}
let eV = jW.exec(customHistory.location.pathname)
let eG = null
let ez = null
eV && (ez = eB(eG = eV[1]))
let eH = createOptimistThunk(async (e, {
  file: t,
  user: i,
  selectedNodeId: o,
  editorType: c,
  didRedirectEditorTypeToStored: m,
}) => {
  let A = e.getState()
  try {
    let r
    setFileBranchingTags(t)
    zR({
      fileKey: t.key,
      folderId: t.folderId,
      teamId: t.teamId,
      orgId: t.parentOrgId,
      isNewFile: !1,
      state: A,
    })
    i ? setupAutosaveManager(t.key, i.id) : logInfo('Autosave', 'Not creating manager for logged out user')
    let d = isValidSessionLocalID(parseSessionLocalID(o)) ? o : ''
    let v = getBackgroundColorForTheme(getMPVisibleTheme(A.theme.themePreference))
    BrowserInfo.isIpadNative && x2() && _$$v.getFeatureGate('figjam_ipad_compressed_textures') && (getImageManager().setShouldUseCompressedTextures(!0), XHR.post(`/file/${t.key}/generate_compressed_textures`).catch((e) => {
      logInfo('image', 'Failed to generate compressed textures', {
        fileKey: t.key,
        error: e,
      })
    }))
    mpGlobal.preconnect(mpGlobal.url({
      fileKey: t.key,
      role: 'editor',
      nodeIds: d,
      initialBgColor: v,
      suppressDecodeErrors: isLocalDevOnCluster(),
      tagForLogging: DH(c),
      forceViewOnly: z4.getIsExtension(),
    }))
    _$$W.startFetchingFontList()
    try {
      r = ez && eG === t.key ? await ez : await eB(t.key)
      ez = null
      eG = null
    }
    catch (t) {
      let e = new Error(`Calling "/api/file_metadata/:file_key" failed with status ${t && t.status}`)
      e.cause = t
      return e
    }
    await ea(r, e, c)
    let I = A.theme.visibleTheme
    Fullscreen?.setEditorTheme(I || '')
    BL(t, A, m)
    _$$b(mapEditorTypeToFileType(c))
    setLastUsedEditorType(c)
    t && i && void 0 === parseQuery(customHistory.location.search).embed_host && waitForVisibility().then(() => {
      setTimeout(() => {
        t.key === e.getState().openFile?.key && e.dispatch(markFileViewedOptimistic({
          fileKey: t.key,
        }))
      }, 4e3)
    })
  }
  catch (n) {
    if (await destroyAutosaveManager(), n.message === er)
      return
    let i = Number(n.cause?.status || 0)
    desktopAPIInstance
      ? desktopAPIInstance.reportFatalError(t.key, i === 0
          ? {
              type: 'load',
              code: -106,
              description: getI18nString('user_facing_error.loading_a_file'),
            }
          : {
              type: 'http',
              statusCode: i,
            })
      : i === 404 ? showFileBrowserOrError(getI18nString('user_facing_error.404_loading_a_file'), e.dispatch) : showFileBrowserOrError(getI18nString('user_facing_error.opening_editor'), e.dispatch)
    trackDefinedFileEvent('scenegraph_and_sync.fullscreen_open_error', t.key, A, {
      error: n instanceof Error ? void 0 !== n.cause ? `${n.message}: ${n.cause.message}` : n.message : JSON.stringify(n),
      statusCode: Number.isNaN(i) ? void 0 : i,
    })
    reportError(ServiceCategories.UNOWNED, n, {
      tags: {
        severity: SeverityLevel.Critical,
      },
    })
  }
})
export async function $$eW1(e, t, i, n, r) {
  if (e && t && i) {
    let a = {
      id: e.id,
      name: e.name,
      subscription: e.subscription,
      gracePeriodEnd: e.grace_period_end ? new Date(e.grace_period_end) : null,
      studentTeamAt: e.student_team_at ? new Date(e.student_team_at) : null,
      restrictionsList: e.restrictions_list || [],
      eduGracePeriod: null,
    }
    let s = {
      ...t,
      teamId: e.id,
      inviteOnlyAt: null,
      viewOnlyAt: null,
      isEditingLockedForUser: !1,
    }
    s.isEditingLockedForUser = hasProjectRestrictions(s, a, i) || !1
    await n.dispatch(_$$z({
      files: [r],
      folder: s,
      team: a,
      onError: () => n.dispatch(hideModalHandler()),
    }))
    let o = getI18nString('visual_bell.main_text', {
      teamName: e.name,
    })
    let l = getI18nString('visual_bell.button_text')
    n.dispatch(VisualBellActions.enqueue({
      type: 'upgrade-success-with-publish',
      message: o,
      button: {
        text: l,
        action: () => {
          logAndTrackCTA({
            text: 'Publish components',
            name: 'Publish draft after team upgrade',
            trackingDescriptor: UpgradeAction.PUBLISH_COMPONENTS_AFTER_TEAM_UPGRADE,
            inPublishDraftExp: !0,
          }, 'cta_clicked')
          n.dispatch(showModalHandler({
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
export const sR = $$ej0
export const Lp = $$eW1
