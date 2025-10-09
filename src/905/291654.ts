import { partition } from 'lodash-es';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { jsx, jsxs } from 'react/jsx-runtime';
import { ModalRootComponent } from '../905/38914';
import { c as _$$c } from '../905/73189';
import { ModalSupportsBackground, registerModal } from '../905/102752';
import { showModalHandler } from '../905/156213';
import { renderI18nText } from '../905/303541';
import { selectCurrentUser } from '../905/372672';
import { useModalManager } from '../905/437088';
import { analyticsEventManager } from '../905/449184';
import { getFeatureFlags } from '../905/601108';
import { getHighestPriorityFont } from '../905/714538';
import { useSingleEffect } from '../905/791079';
import { FONT_SF_COMPACT, FONT_SF_COMPACT_ROUNDED, FONT_SF_PRO_DISPLAY, FONT_SF_PRO_ROUNDED } from '../905/946258';
import { postUserFlag } from '../905/985254';
import { FEditorType } from '../figma_app/53721';
import { DialogActionStrip, DialogBody, DialogContents, DialogFooter, DialogHeader, DialogTitle } from '../figma_app/272243';
import { mapFileToProductType } from '../figma_app/314264';
import { selectCurrentFile } from '../figma_app/516028';
import { WithTrackedButton } from '../figma_app/617427';
import { FontSourceType } from '../figma_app/763686';
enum SFFontEnum {
  SF_PRO = 'SFPro',
  SF_COMPACT = 'SFCompact',
}
let T = {
  [SFFontEnum.SF_PRO]: {
    content() {
      return jsxs('div', {
        style: {
          whiteSpace: 'pre-line',
          fontWeight: 500
        },
        children: [`APPLE INC.
        LICENSE AGREEMENT FOR THE APPLE SF PRO FONT
        For iOS, iPadOS, macOS and tvOS application uses only

        PLEASE READ THIS SOFTWARE LICENSE AGREEMENT (\u201CLICENSE\u201D) CAREFULLY BEFORE USING THE APPLE SF PRO FONT (DEFINED BELOW). BY USING THE APPLE FONT, YOU ARE AGREEING TO BE BOUND BY THE TERMS OF THIS LICENSE. IF YOU ARE ACCESSING THE APPLE FONT ELECTRONICALLY, SIGNIFY YOUR AGREEMENT TO BE BOUND BY THE TERMS OF THIS LICENSE BY CLICKING THE \u201CAGREE\u201D BUTTON. IF YOU DO NOT AGREE TO THE TERMS OF THIS LICENSE, DO NOT USE THE APPLE FONT AND CLICK \u201CDISAGREE\u201D.

        IMPORTANT NOTE: THE APPLE SF PRO FONT IS TO BE USED SOLELY FOR CREATING MOCK-UPS OF USER INTERFACES TO BE USED IN SOFTWARE PRODUCTS RUNNING ON APPLE\u2019S iOS, iPadOS, macOS OR tvOS OPERATING SYSTEMS, AS APPLICABLE.
        
        `, `1. General.
        A. The Apple font, interfaces, content, data, and other materials accompanying this License, whether on disk, print or electronic documentation, in read only memory, or any other media or in any other form, (collectively, the \u201CApple Font\u201D) are licensed, not sold, to you by Apple Inc. (\u201CApple\u201D) for use only under the terms of this License. Apple and/or Apple\u2019s licensors retain ownership of the Apple Font itself and reserve all rights not expressly granted to you. The terms of this License will govern any software upgrades provided by Apple that replace and/or supplement the original Apple Font, unless such upgrade is accompanied by a separate license in which case the terms of that license will govern.

        B. Title and intellectual property rights in and to any content displayed by or accessed through the Apple Font belongs to the respective content owner. Such content may be protected by copyright or other intellectual property laws and treaties, and may be subject to terms of use of the third party providing such content. This License does not grant you any rights to use such content nor does it guarantee that such content will continue to be available to you.
        
        2. Permitted License Uses and Restrictions.
        `, _$$c(`A. Limited License. Subject to the terms of this License, you may use the Apple Font solely for creating mock-ups of user interfaces to be used in software products running on Apple\u2019s iOS, iPadOS, macOS or tvOS operating systems, as applicable. The foregoing right includes the right to show the Apple Font in screen shots, images, mock-ups or other depictions, digital and/or print, of such software products running solely on iOS, iPadOS, macOS or tvOS. Your use of the Apple Font shall also be subject to any specific use restrictions with respect thereto as set forth in the Apple Font or Apple\u2019s Human Interface Guidelines.

        You may use this Apple Font only for the purposes described in this License and only if you are a registered Apple Developer, or as otherwise expressly permitted by Apple in writing.
        
        `), _$$c(`B. Other Use Restrictions. The grants set forth in this License do not permit you to, and you agree not to, install, use or run the Apple Font for the purpose of creating mock-ups of user interfaces to be used in software products running on any non-Apple operating system or to enable others to do so. You may not embed the Apple Font in any software programs or other products. Except as expressly provided for herein, you may not use the Apple Font to, create, develop, display or otherwise distribute any documentation, artwork, website content or any other work product.

        Except as otherwise expressly permitted by the terms of this License or as otherwise licensed by Apple: (i) only one user may use the Apple Font at a time, and (ii) you may not make the Apple Font available over a network where it could be run or used by multiple computers at the same time. You may not rent, lease, lend, trade, transfer, sell, sublicense or otherwise redistribute the Apple Font in any unauthorized way.

        `), _$$c(`C. No Reverse Engineering; Limitations. You may not, and you agree not to or to enable others to, copy (except as expressly permitted by this License), decompile, reverse engineer, disassemble, attempt to derive the source code of, decrypt, modify, create derivative works of the Apple Font or any part thereof (except as and only to the extent any foregoing restriction is prohibited by applicable law).

        `), _$$c(`D. Compliance with Laws. You agree to use the Apple Font in compliance with all applicable laws, including local laws of the country or region in which you reside or in which you download or use the Apple Font.
       
        `), `3. No Transfer. Except as otherwise set forth herein, you may not transfer this Apple Font without Apple\u2019s express prior written approval. All components of the Apple Font are provided as part of a bundle and may not be separated from the bundle and distributed as standalone applications.

        4. Termination. This License shall commence upon your installation or use of the Apple Font. Your rights under this License will terminate automatically or cease to be e\uFB00ective without notice from Apple (a) if you fail to comply with any term(s) of this License, (b) if you are no longer a registered Apple Developer, or (c) if Apple releases a version of the Apple Font which is incompatible with this version of the Apple Font. Upon the termination of this License, you shall cease all use of the Apple Font and destroy all copies, full or partial, of the Apple Font. Section 2B, 2C, and 5 through 10 of this License shall survive any termination.

        5. Disclaimer of Warranties.
        A. YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT, TO THE EXTENT PERMITTED BY APPLICABLE LAW, USE OF THE APPLEFONT IS AT YOUR SOLE RISK AND THAT THE ENTIRE RISK AS TO SATISFACTORY QUALITY, PERFORMANCE, ACCURACY AND EFFORT IS WITH YOU.

        B. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE APPLE FONT IS PROVIDED \u201CAS IS\u201D AND \u201CAS AVAILABLE\u201D, WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND, AND APPLE AND APPLE\u2019S LICENSORS (COLLECTIVELY REFERRED TO AS \u201CAPPLE\u201D FOR THE PURPOSES OF SECTIONS 5 AND 6) HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH RESPECT TO THE APPLE FONT, EITHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES AND/OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, QUIET ENJOYMENT, AND NON-INFRINGEMENT OF THIRD PARTY RIGHTS.

        C. APPLE DOES NOT WARRANT AGAINST INTERFERENCE WITH YOUR ENJOYMENT OF THE APPLE FONT, THAT THE FUNCTIONS CONTAINED IN THE APPLE FONT WILL MEET YOUR REQUIREMENTS, THAT THE OPERATION OF THE APPLE FONT WILL BE UNINTERRUPTED OR ERROR-FREE, THAT THE APPLE FONT WILL BE COMPATIBLE OR WORK WITH ANY THIRD PARTY SOFTWARE, APPLICATIONS OR THIRD PARTY SERVICES, OR THAT DEFECTS IN THE APPLE FONT WILL BE CORRECTED. INSTALLATION OF THIS APPLE FONT MAY AFFECT THE AVAILABILITY AND USABILITY OF THIRD PARTY SOFTWARE, APPLICATIONS OR THIRD PARTY SERVICES, AS WELL AS APPLE PRODUCTS AND SERVICES.

        D. YOU FURTHER ACKNOWLEDGE THAT THE APPLE FONT IS NOT INTENDED OR SUITABLE FOR USE IN SITUATIONS OR ENVIRONMENTS WHERE THE FAILURE OR TIME DELAYS OF, OR ERRORS OR INACCURACIES IN THE CONTENT, DATA OR INFORMATION PROVIDED BY, THE APPLE FONT COULD LEAD TO DEATH, PERSONAL INJURY, OR SEVERE PHYSICAL OR ENVIRONMENTAL DAMAGE, INCLUDING WITHOUT LIMITATION THE OPERATION OF NUCLEAR FACILITIES, AIRCRAFT NAVIGATION OR COMMUNICATION SYSTEMS, AIR TRAFFIC CONTROL, LIFE SUPPORT OR WEAPONS SYSTEMS.

        E. NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY APPLE OR AN APPLE AUTHORIZED REPRESENTATIVE SHALL CREATE A WARRANTY. SHOULD THE APPLE FONT PROVE DEFECTIVE, YOU ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

        6. Limitation of Liability. TO THE EXTENT NOT PROHIBITED BY APPLICABLE LAW, IN NO EVENT SHALL APPLE BE LIABLE FOR PERSONAL INJURY, OR ANY INCIDENTAL, SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, CORRUPTION OR LOSS OF DATA, FAILURE TO TRANSMIT OR RECEIVE ANY DATA OR INFORMATION, BUSINESS INTERRUPTION OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OR INABILITY TO USE THE APPLE FONT OR ANY THIRD PARTY SOFTWARE, APPLICATIONS, OR SERVICES IN CONJUNCTION WITH THE APPLE FONT, HOWEVER CAUSED, REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT OR OTHERWISE) AND EVEN IF APPLE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO YOU. In no event shall Apple\u2019s total liability to you for all damages (other than as may be required by applicable law in cases involving personal injury) exceed the amount of fifty dollars ($50.00). The foregoing limitations will apply even if the above stated remedy fails of its essential purpose.

        7. Export Control. You may not use or otherwise export or re-export the Apple Font except as authorized by United States law and the laws of the jurisdiction(s) in which the Apple Font was obtained. In particular, but without limitation, the Apple Font may not be exported or re-exported (a) into any U.S. embargoed countries or (b) to anyone on the U.S. Treasury Department\u2019s list of Specially Designated Nationals or the U.S. Department of Commerce Denied Person\u2019s List or Entity List or any other restricted party lists. By using the Apple Font, you represent and warrant that you are not located in any such country or on any such list. You also agree that you will not use the Apple Font for any purposes prohibited by United States law, including, without limitation, the development, design, manufacture or production of missiles, nuclear, chemical or biological weapons.

        8. Government End Users. The Apple Font and related documentation are \u201CCommercial Items\u201D, as that term is defined at 48 C.F.R. \xA72.101, consisting of \u201CCommercial Computer Software\u201D and \u201CCommercial Computer Software Documentation\u201D, as such terms are used in 48 C.F.R. \xA712.212 or 48 C.F.R. \xA7227.7202, as applicable. Consistent with 48 C.F.R. \xA712.212 or 48 C.F.R. \xA7227.7202-1 through 227.7202-4, as applicable, the Commercial Computer Software and Commercial Computer Software Documentation are being licensed to U.S. Government end users (a) only as Commercial Items and (b) with only those rights as are granted to all other end users pursuant to the terms and conditions herein. Unpublished-rights reserved under the copyright laws of the United States.

        9. Controlling Law and Severability. This License will be governed by and construed in accordance with the laws of the State of California, excluding its conflict of law principles. This License shall not be governed by the United Nations Convention on Contracts for the International Sale of Goods, the application of which is expressly excluded. If for any reason a court of competent jurisdiction finds any provision, or portion thereof, to be unenforceable, the remainder of this License shall continue in full force and e\uFB00ect.

        10. Complete Agreement; Governing Language. This License constitutes the entire agreement between you and Apple relating to the use of the Apple Font licensed hereunder and supersedes all prior or contemporaneous understandings regarding such subject matter. No amendment to or modification of this License will be binding unless in writing and signed by Apple. To the extent that there are any inconsistent terms in any applicable Apple software license agreements, these terms shall govern your use of the Apple Font.

        EA1761
        5/20/2021`]
      });
    },
    header: renderI18nText('community.eula.sf_pro_license_agreement'),
    subtext: renderI18nText('community.eula.subext.sf_pro_license_agreement')
  },
  [SFFontEnum.SF_COMPACT]: {
    content() {
      return jsxs('div', {
        style: {
          whiteSpace: 'pre-line',
          fontWeight: 500
        },
        children: [`APPLE INC.
        LICENSE AGREEMENT FOR THE APPLE SF COMPACT FONT
        For iOS, iPadOS, macOS, tvOS and watchOS application uses only

        PLEASE READ THIS SOFTWARE LICENSE AGREEMENT (\u201CLICENSE\u201D) CAREFULLY BEFORE USING THE APPLE SF COMPACT FONT (DEFINED BELOW). BY USING THE APPLE FONT, YOU ARE AGREEING TO BE BOUND BY THE TERMS OF THIS LICENSE. IF YOU ARE ACCESSING THE APPLE FONT ELECTRONICALLY, SIGNIFY YOUR AGREEMENT TO BE BOUND BY THE TERMS OF THIS LICENSE BY CLICKING THE \u201CAGREE\u201D BUTTON. IF YOU DO NOT AGREE TO THE TERMS OF THIS LICENSE, DO NOT USE THE APPLE FONT AND CLICK \u201CDISAGREE\u201D.

        IMPORTANT NOTE: THE APPLE SF COMPACT FONT IS TO BE USED SOLELY FOR CREATING MOCK-UPS OF USER INTERFACES TO BE USED IN SOFTWARE PRODUCTS RUNNING ON APPLE\u2019S iOS, iPadOS, macOS, tvOS OR watchOS OPERATING SYSTEMS, AS APPLICABLE.

        `, `1. General.
        A. The Apple font, interfaces, content, data, and other materials accompanying this License, whether on disk, print or electronic documentation, in read only memory, or any other media or in any other form, (collectively, the \u201CApple Font\u201D) are licensed, not sold, to you by Apple Inc. (\u201CApple\u201D) for use only under the terms of this License. Apple and/or Apple\u2019s licensors retain ownership of the Apple Font itself and reserve all rights not expressly granted to you. The terms of this License will govern any software upgrades provided by Apple that replace and/or supplement the original Apple Font, unless such upgrade is accompanied by a separate license in which case the terms of that license will govern.

        B. Title and intellectual property rights in and to any content displayed by or accessed through the Apple Font belongs to the respective content owner. Such content may be protected by copyright or other intellectual property laws and treaties, and may be subject to terms of use of the third party providing such content. This License does not grant you any rights to use such content nor does it guarantee that such content will continue to be available to you.
        
        2. Permitted License Uses and Restrictions.
        `, _$$c(`
        A. Limited License. Subject to the terms of this License, you may use the Apple Font solely for creating mock-ups of user interfaces to be used in software products running on Apple\u2019s iOS, iPadOS, macOS, tvOS or watchOS operating systems, as applicable. The foregoing right includes the right to show the Apple Font in screen shots, images, mock-ups or other depictions, digital and/or print, of such software products running solely on iOS, iPadOS, macOS, tvOS or watchOS. Your use of the Apple Font shall also be subject to any specific use restrictions with respect thereto as set forth in the Apple Font or Apple\u2019s Human Interface Guidelines.
        
        You may use this Apple Font only for the purposes described in this License and only if you are a registered Apple Developer, or as otherwise expressly permitted by Apple in writing.
        
        `), _$$c(`B. Other Use Restrictions. The grants set forth in this License do not permit you to, and you agree not to, install, use or run the Apple Font for the purpose of creating mock-ups of user interfaces to be used in software products running on any non-Apple operating system or to enable others to do so. You may not embed the Apple Font in any software programs or other products. Except as expressly provided for herein, you may not use the Apple Font to, create, develop, display or otherwise distribute any documentation, artwork, website content or any other work product.

        Except as otherwise expressly permitted by the terms of this License or as otherwise licensed by Apple: (i) only one user may use the Apple Font at a time, and (ii) you may not make the Apple Font available over a network where it could be run or used by multiple computers at the same time. You may not rent, lease, lend, trade, transfer, sell, sublicense or otherwise redistribute the Apple Font in any unauthorized way.

        `), _$$c(`C. No Reverse Engineering; Limitations. You may not, and you agree not to or to enable others to, copy (except as expressly permitted by this License), decompile, reverse engineer, disassemble, attempt to derive the source code of, decrypt, modify, create derivative works of the Apple Font or any part thereof (except as and only to the extent any foregoing restriction is prohibited by applicable law).

        `), _$$c(`D. Compliance with Laws. You agree to use the Apple Font in compliance with all applicable laws, including local laws of the country or region in which you reside or in which you download or use the Apple Font.
       
        `), `3. No Transfer. Except as otherwise set forth herein, you may not transfer this Apple Font without Apple\u2019s express prior written approval. All components of the Apple Font are provided as part of a bundle and may not be separated from the bundle and distributed as standalone applications.

        4. Termination. This License shall commence upon your installation or use of the Apple Font. Your rights under this License will terminate automatically or cease to be e\uFB00ective without notice from Apple (a) if you fail to comply with any term(s) of this License, (b) if you are no longer a registered Apple Developer, or (c) if Apple releases a version of the Apple Font which is incompatible with this version of the Apple Font. Upon the termination of this License, you shall cease all use of the Apple Font and destroy all copies, full or partial, of the Apple Font. Section 2B, 2C, and 5 through 10 of this License shall survive any termination.

        5. Disclaimer of Warranties.
        A. YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT, TO THE EXTENT PERMITTED BY APPLICABLE LAW, USE OF THE APPLEFONT IS AT YOUR SOLE RISK AND THAT THE ENTIRE RISK AS TO SATISFACTORY QUALITY, PERFORMANCE, ACCURACY AND EFFORT IS WITH YOU.

        B. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE APPLE FONT IS PROVIDED \u201CAS IS\u201D AND \u201CAS AVAILABLE\u201D, WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND, AND APPLE AND APPLE\u2019S LICENSORS (COLLECTIVELY REFERRED TO AS \u201CAPPLE\u201D FOR THE PURPOSES OF SECTIONS 5 AND 6) HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH RESPECT TO THE APPLE FONT, EITHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES AND/OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, QUIET ENJOYMENT, AND NON-INFRINGEMENT OF THIRD PARTY RIGHTS.

        C. APPLE DOES NOT WARRANT AGAINST INTERFERENCE WITH YOUR ENJOYMENT OF THE APPLE FONT, THAT THE FUNCTIONS CONTAINED IN THE APPLE FONT WILL MEET YOUR REQUIREMENTS, THAT THE OPERATION OF THE APPLE FONT WILL BE UNINTERRUPTED OR ERROR-FREE, THAT THE APPLE FONT WILL BE COMPATIBLE OR WORK WITH ANY THIRD PARTY SOFTWARE, APPLICATIONS OR THIRD PARTY SERVICES, OR THAT DEFECTS IN THE APPLE FONT WILL BE CORRECTED. INSTALLATION OF THIS APPLE FONT MAY AFFECT THE AVAILABILITY AND USABILITY OF THIRD PARTY SOFTWARE, APPLICATIONS OR THIRD PARTY SERVICES, AS WELL AS APPLE PRODUCTS AND SERVICES.

        D. YOU FURTHER ACKNOWLEDGE THAT THE APPLE FONT IS NOT INTENDED OR SUITABLE FOR USE IN SITUATIONS OR ENVIRONMENTS WHERE THE FAILURE OR TIME DELAYS OF, OR ERRORS OR INACCURACIES IN THE CONTENT, DATA OR INFORMATION PROVIDED BY, THE APPLE FONT COULD LEAD TO DEATH, PERSONAL INJURY, OR SEVERE PHYSICAL OR ENVIRONMENTAL DAMAGE, INCLUDING WITHOUT LIMITATION THE OPERATION OF NUCLEAR FACILITIES, AIRCRAFT NAVIGATION OR COMMUNICATION SYSTEMS, AIR TRAFFIC CONTROL, LIFE SUPPORT OR WEAPONS SYSTEMS.

        E. NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY APPLE OR AN APPLE AUTHORIZED REPRESENTATIVE SHALL CREATE A WARRANTY. SHOULD THE APPLE FONT PROVE DEFECTIVE, YOU ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

        6. Limitation of Liability. TO THE EXTENT NOT PROHIBITED BY APPLICABLE LAW, IN NO EVENT SHALL APPLE BE LIABLE FOR PERSONAL INJURY, OR ANY INCIDENTAL, SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, CORRUPTION OR LOSS OF DATA, FAILURE TO TRANSMIT OR RECEIVE ANY DATA OR INFORMATION, BUSINESS INTERRUPTION OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OR INABILITY TO USE THE APPLE FONT OR ANY THIRD PARTY SOFTWARE, APPLICATIONS, OR SERVICES IN CONJUNCTION WITH THE APPLE FONT, HOWEVER CAUSED, REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT OR OTHERWISE) AND EVEN IF APPLE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO YOU. In no event shall Apple\u2019s total liability to you for all damages (other than as may be required by applicable law in cases involving personal injury) exceed the amount of fifty dollars ($50.00). The foregoing limitations will apply even if the above stated remedy fails of its essential purpose.

        7. Export Control. You may not use or otherwise export or re-export the Apple Font except as authorized by United States law and the laws of the jurisdiction(s) in which the Apple Font was obtained. In particular, but without limitation, the Apple Font may not be exported or re-exported (a) into any U.S. embargoed countries or (b) to anyone on the U.S. Treasury Department\u2019s list of Specially Designated Nationals or the U.S. Department of Commerce Denied Person\u2019s List or Entity List or any other restricted party lists. By using the Apple Font, you represent and warrant that you are not located in any such country or on any such list. You also agree that you will not use the Apple Font for any purposes prohibited by United States law, including, without limitation, the development, design, manufacture or production of missiles, nuclear, chemical or biological weapons.

        8. Government End Users. The Apple Font and related documentation are \u201CCommercial Items\u201D, as that term is defined at 48 C.F.R. \xA72.101, consisting of \u201CCommercial Computer Software\u201D and \u201CCommercial Computer Software Documentation\u201D, as such terms are used in 48 C.F.R. \xA712.212 or 48 C.F.R. \xA7227.7202, as applicable. Consistent with 48 C.F.R. \xA712.212 or 48 C.F.R. \xA7227.7202-1 through 227.7202-4, as applicable, the Commercial Computer Software and Commercial Computer Software Documentation are being licensed to U.S. Government end users (a) only as Commercial Items and (b) with only those rights as are granted to all other end users pursuant to the terms and conditions herein. Unpublished-rights reserved under the copyright laws of the United States.

        9. Controlling Law and Severability. This License will be governed by and construed in accordance with the laws of the State of California, excluding its conflict of law principles. This License shall not be governed by the United Nations Convention on Contracts for the International Sale of Goods, the application of which is expressly excluded. If for any reason a court of competent jurisdiction finds any provision, or portion thereof, to be unenforceable, the remainder of this License shall continue in full force and e\uFB00ect.

        10. Complete Agreement; Governing Language. This License constitutes the entire agreement between you and Apple relating to the use of the Apple Font licensed hereunder and supersedes all prior or contemporaneous understandings regarding such subject matter. No amendment to or modification of this License will be binding unless in writing and signed by Apple. To the extent that there are any inconsistent terms in any applicable Apple software license agreements, these terms shall govern your use of the Apple Font.

        EA1759
        05/20/2021`]
      });
    },
    header: renderI18nText('community.eula.sf_compact_license_agreement'),
    subtext: renderI18nText('community.eula.subtext.sf_compact_license_agreement')
  }
};
/**
 * AppleFontEulaModalProps - Props for AppleFontEulaModal (original: e)
 */
export interface AppleFontEulaModalProps {
  eulaConfig: AppleEulaConfig;
  eulasToShow?: number;
  eulaShown?: number;
  onAccept?: () => void;
  onDecline?: () => void;
  onClose: () => void;
  trigger?: string;
  asyncModal?: boolean;
  [key: string]: any;
}

/**
 * Tracks Apple font EULA modal display analytics (original: analyticsEventManager.trackDefinedEvent)
 */
function trackAppleFontEulaDisplayed(trigger: string | undefined, eulaConfig: AppleEulaConfig, asyncModal: boolean | undefined) {
  const user = selectCurrentUser();
  const file = selectCurrentFile();
  useSingleEffect(() => {
    analyticsEventManager.trackDefinedEvent('preset_libraries.apple_font_eula_displayed', {
      trigger,
      eulaConfig: eulaConfig.eula,
      userId: user?.id,
      fileTeamId: file?.teamId,
      fileParentOrgId: file?.parentOrgId,
      fileKey: file?.key,
      asyncModal: asyncModal ?? false,
      productType: mapFileToProductType(file)
    });
  });
}

/**
 * Tracks Apple font EULA modal button click analytics (original: k)
 */
function useTrackAppleFontEulaClicked(eulaConfig: AppleEulaConfig, trigger: string | undefined, asyncModal: boolean | undefined) {
  const user = selectCurrentUser();
  const file = selectCurrentFile();
  return useCallback((actionType: string) => {
    analyticsEventManager.trackDefinedEvent('preset_libraries.apple_font_eula_clicked', {
      actionType,
      trigger,
      eulaConfig: eulaConfig.eula,
      userId: user?.id,
      fileTeamId: file?.teamId,
      fileParentOrgId: file?.parentOrgId,
      fileKey: file?.key,
      asyncModal: asyncModal ?? false,
      productType: mapFileToProductType(file)
    });
  }, [user, file, eulaConfig, trigger, asyncModal]);
}

/**
 * AppleFontEulaModal - Modal for Apple font EULA agreement (original: appleFontEualModal)
 */
export const AppleFontEulaModal = registerModal((props: AppleFontEulaModalProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    eulaConfig,
    eulasToShow,
    eulaShown,
    onAccept,
    onDecline,
    onClose,
    trigger,
    asyncModal,
    ...rest
  } = props;
  const modalContent = T[eulaConfig.eula];
  if (!modalContent) {
    throw new Error(`Unsupported font eula: ${eulaConfig.eula}`);
  }
  trackAppleFontEulaDisplayed(trigger, eulaConfig, asyncModal);
  const trackClick = useTrackAppleFontEulaClicked(eulaConfig, trigger, asyncModal);
  const modalManager = useModalManager({
    ...rest,
    onClose,
    preventUserClose: true
  });
  return jsx(ModalRootComponent, {
    manager: modalManager,
    width: 600,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: modalContent.header
        })
      }), jsxs(DialogBody, {
        children: [jsx('div', {
          style: {
            color: 'var(--color-text-secondary)',
            padding: '8px 0px'
          },
          children: modalContent.subtext
        }), jsx('div', {
          style: {
            maxHeight: '360px'
          },
          children: modalContent.content()
        })]
      }), jsxs(DialogFooter, {
        children: [eulasToShow !== undefined && eulaShown !== undefined && eulasToShow > 1 && jsx('div', {
          'data-testid': 'eula-counts',
          'children': renderI18nText('community.eula.i_of_count', {
            i: eulaShown,
            count: eulasToShow
          })
        }), jsxs(DialogActionStrip, {
          children: [jsx(WithTrackedButton, {
            onClick: () => {
              dispatch(postUserFlag({
                [eulaConfig.declinedUserFlag]: true
              }));
              trackClick('decline');
              onDecline?.();
              onClose();
            },
            variant: 'secondary',
            children: renderI18nText('community.eula.disagree')
          }), jsx(WithTrackedButton, {
            onClick: () => {
              dispatch(postUserFlag({
                [eulaConfig.acceptedUserFlag]: true
              }));
              trackClick('accept');
              onAccept?.();
              onClose();
            },
            variant: 'primary',
            children: renderI18nText('community.eula.agree')
          })]
        })]
      })]
    })
  });
}, 'APPLE_FONT_EULA_MODAL_TYPE', ModalSupportsBackground.YES);

// Exported alias for backward compatibility (original: appleFontEualModal)
export const appleFontEualModal = AppleFontEulaModal;
/**
 * Editor types that support Apple EULA fonts (original: R)
 */
const SupportedEditorTypes = new Set([FEditorType.Design, FEditorType.Whiteboard, FEditorType.Slides, FEditorType.Cooper]);

/**
 * Font families that require Apple EULA (original: N)
 */
const AppleEulaFontFamilies = new Set([FONT_SF_PRO_DISPLAY, FONT_SF_PRO_ROUNDED, FONT_SF_COMPACT, FONT_SF_COMPACT_ROUNDED]);

/**
 * Apple EULA configuration per font type (original: $$P0)
 */
export interface AppleEulaConfig {
  eula: SFFontEnum;
  fontFamilies: string[];
  acceptedUserFlag: string;
  declinedUserFlag: string;
}
export const AppleEulaConfigs: Record<SFFontEnum, AppleEulaConfig> = {
  [SFFontEnum.SF_PRO]: {
    eula: SFFontEnum.SF_PRO,
    fontFamilies: ['SF Pro', 'SF Pro Rounded'],
    acceptedUserFlag: 'apple_sf_pro_eula_accepted',
    declinedUserFlag: 'apple_sf_pro_eula_declined'
  },
  [SFFontEnum.SF_COMPACT]: {
    eula: SFFontEnum.SF_COMPACT,
    fontFamilies: ['SF Compact', 'SF Compact Rounded'],
    acceptedUserFlag: 'apple_sf_compact_eula_accepted',
    declinedUserFlag: 'apple_sf_compact_eula_declined'
  }
};

/**
 * Map font family name to its EULA config (original: $$O)
 */
export const FontFamilyToEulaConfig: Record<string, AppleEulaConfig> = Object.fromEntries(Object.values(AppleEulaConfigs).flatMap(config => config.fontFamilies.map(family => [family, config])));

/**
 * Checks if the font source is Google (original: $$D7)
 * @param family Font family name
 * @param fonts Font map
 */
export function isGoogleFontSource(family: string, fonts: Record<string, any>): boolean {
  const font = getHighestPriorityFont(fonts[family]);
  return font?.source === FontSourceType.GOOGLE;
}

/**
 * Returns EULA config if feature flag is enabled and font is Google source (original: $$L2)
 * @param family Font family name
 * @param fonts Font map
 */
export function getEulaConfigIfGoogleFont(family: string, fonts: Record<string, any>): AppleEulaConfig | undefined {
  if (getFeatureFlags().dse_sf_pro_font && family && isGoogleFontSource(family, fonts)) {
    return FontFamilyToEulaConfig[family];
  }
}

/**
 * Checks if EULA config exists for font (original: F)
 * @param family Font family name
 * @param fonts Font map
 */
function hasEulaConfig(family: string, fonts: Record<string, any>): boolean {
  return getEulaConfigIfGoogleFont(family, fonts) !== undefined;
}

/**
 * Checks if user has accepted EULA for font (original: $$M3)
 * @param family Font family name
 * @param fonts Font map
 * @param userFlags User flags
 */
export function hasAcceptedEula(family: string, fonts: Record<string, any>, userFlags: Record<string, boolean>): boolean {
  const config = getEulaConfigIfGoogleFont(family, fonts);
  return !!config && !!userFlags[config.acceptedUserFlag];
}

/**
 * Checks if font requires EULA and user hasn't accepted (original: $$j4)
 * @param family Font family name
 * @param fonts Font map
 * @param userFlags User flags
 */
export function requiresEula(family: string, fonts: Record<string, any>, userFlags: Record<string, boolean>): boolean {
  return hasEulaConfig(family, fonts) && !hasAcceptedEula(family, fonts, userFlags);
}

/**
 * Splits fonts into those requiring EULA and those not (original: $$U1)
 * @param fonts Array of font objects
 * @param fontMap Font map
 * @param userFlags User flags
 */
export function splitFontsByEula(fonts: Array<{
  family: string;
}>, fontMap: Record<string, any>, userFlags: FEditorType): {
  eulaFonts: Array<{
    family: string;
  }>;
  nonEulaFonts: Array<{
    family: string;
  }>;
} {
  const [eulaFonts, nonEulaFonts] = partition(fonts, font => hasEulaConfig(font.family, fontMap) && !isEditorTypeExcluded(font.family, userFlags));
  return {
    eulaFonts,
    nonEulaFonts
  };
}

/**
 * Shows EULA modal if needed for font (original: $$B9)
 * @param family Font family name
 * @param userFlags User flags
 * @param fontMap Font map
 * @param showModal Show modal function
 * @param trigger Trigger type
 */
export async function maybeShowEulaModal(family: string, userFlags: Record<string, boolean>, fontMap: Record<string, any>, showModal: Fn, trigger: string): Promise<boolean> {
  const config = getEulaConfigIfGoogleFont(family, fontMap);
  if (!config || !family || hasAcceptedEula(family, fontMap, userFlags)) return true;
  return await showEulaModal(showModal, {
    eula: config.eula,
    trigger
  });
}

/**
 * Shows EULA modal for missing fonts (original: $$V10)
 * @param missingFonts Array of missing font objects
 * @param fontMap Font map
 * @param userFlags User flags
 * @param showModal Show modal function
 * @param trigger Trigger type
 */
export async function handleMissingFontsEula(missingFonts: Array<{
  family: string;
}>, fontMap: Record<string, any>, userFlags: Record<string, boolean>, showModal: Fn, trigger: string): Promise<{
  stillMissingFonts: Array<{
    family: string;
  }>;
}> {
  let stillMissingFonts = [...missingFonts];
  if (missingFonts.length === 0) {
    return {
      stillMissingFonts
    };
  }
  const shownEulas = new Set<SFFontEnum>();
  for (const font of missingFonts) {
    const config = getEulaConfigIfGoogleFont(font.family, fontMap);
    if (!config || shownEulas.has(config.eula) || (shownEulas.add(config.eula), userFlags[config.acceptedUserFlag]) || !(await showEulaModal(showModal, {
      eula: config.eula,
      trigger
    }))) {
      continue;
    }
    const familySet = new Set(config.fontFamilies);
    stillMissingFonts = stillMissingFonts.filter(f => !familySet.has(f.family));
  }
  return {
    stillMissingFonts
  };
}

/**
 * Shows the EULA modal and resolves with user choice (original: $$G8)
 * @param showModal Show modal function
 * @param options Modal options
 */
export function showEulaModal(showModal: Fn, options: {
  eula: SFFontEnum;
  eulasToShow?: number;
  eulaShown?: number;
  trigger?: string;
}): Promise<boolean> {
  const modalConfig = {
    eulaConfig: AppleEulaConfigs[options.eula],
    eulasToShow: options.eulasToShow,
    eulaShown: options.eulaShown,
    trigger: options.trigger
  };
  return new Promise(resolve => {
    showModal(showModalHandler({
      type: appleFontEualModal,
      showModalsBeneath: true,
      data: {
        ...modalConfig,
        onAccept: () => resolve(true),
        onDecline: () => resolve(false),
        asyncModal: true
      }
    }));
  });
}

/**
 * Checks if font family is Apple EULA and editor type is not supported (original: $$z6)
 * @param family Font family name
 * @param editorType Editor type
 */
export function isEditorTypeExcluded(family: string, editorType: FEditorType): boolean {
  return AppleEulaFontFamilies.has(family) && !SupportedEditorTypes.has(editorType);
}

/**
 * Checks if font is Google source and either excluded by editor type or requires EULA (original: $$H5)
 * @param family Font family name
 * @param fontMap Font map
 * @param userFlags User flags
 * @param editorType Editor type
 */
export function shouldShowEula(family: string, fontMap: Record<string, any>, userFlags: Record<string, boolean>, editorType: FEditorType): boolean {
  return !!isGoogleFontSource(family, fontMap) && (isEditorTypeExcluded(family, editorType) || requiresEula(family, fontMap, userFlags));
}

// Exported aliases for backward compatibility
export const kd = AppleEulaConfigs;
export const Ie = splitFontsByEula;
export const h_ = getEulaConfigIfGoogleFont;
export const qG = hasAcceptedEula;
export const jb = requiresEula;
export const O = shouldShowEula;
export const _D = isEditorTypeExcluded;
export const Rh = isGoogleFontSource;
export const oT = showEulaModal;
export const Cj = maybeShowEulaModal;
export const i6 = handleMissingFontsEula;
