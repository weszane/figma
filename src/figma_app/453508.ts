import { useDispatch, useSelector } from 'react-redux'
import { jsx, jsxs } from 'react/jsx-runtime'
import { ModalRootComponent } from '../905/38914'
import { registerLegacyModal } from '../905/102752'
import { setupBranchMemoryWarningModal } from '../905/191910'
import { getI18nString, renderI18nText } from '../905/303541'
import { j } from '../905/349918'
import { useModalManager } from '../905/437088'
import { Link } from '../905/438674'
import { trackEventAnalytics } from '../905/449184'
import { Button } from '../905/521428'
import { customHistory } from '../905/612521'
import { selectViewAction } from '../905/929976'
import { FEditorType } from '../figma_app/53721'
import { getInitialOptions } from '../figma_app/169182'
import { DialogBody, DialogContents, DialogHeader, DialogTitle } from '../figma_app/272243'
import { useCurrentFileKey } from '../figma_app/516028'
import { pL, v0 } from '../figma_app/639088'
import { CorePerfInfo, DocumentMode } from '../figma_app/763686'
import { BrowserInfo } from '../figma_app/778880'
import { generateRecordingKey } from '../figma_app/878298'
import { getEditorTypeFromView } from '../figma_app/976749'

/**
 * Tracks memory warning analytics event.
 * Original name: $$A0
 * @param eventData - Additional event data
 * @param extraData - Extra event data
 */
export function setupMemoryWarningAnalytics(eventData: Record<string, any>, extraData: Record<string, any> = {}) {
  trackEventAnalytics('memory_warning_event', {
    currentAllocatedBytes: CorePerfInfo?.getTotalUsedHeapMemory(),
    maxAllocatedBytes: CorePerfInfo?.getMaxUsedHeapMemory(),
    ...eventData,
    ...extraData,
  })
}
export const $w = setupMemoryWarningAnalytics
/**
 * Enum for modal display options.
 * Original name: x
 */
export enum modalDisplayOptions {
  SHOW_RELOAD = 'showReload',
  SHOW_RECOVERY_MODE = 'showRecoveryMode',
  SHOW_BROWSER_UPGRADE_AND_DESKTOP_DOWNLOAD = 'showBrowserUpgradeAndDesktop',
}
/**
 * Modal key for memory warning modal.
 * Original name: $$N1
 */
export const MEMORY_WARNING_MODAL = 'memory-warning-modal'

export const PG = MemoryWarningModal
/**
 * Memory warning modal component.
 * Original name: $$C2
 * @param props - Modal props
 */
export function MemoryWarningModal(props: { isBranching: boolean }) {
  // Modal manager setup
  const manager = useModalManager({
    open: true,
    preventUserClose: true,
    onClose: () => {},
  })

  // Redux selectors
  const isReadOnly = useSelector((state: any) => state.mirror.appModel.isReadOnly)
  const selectedView = useSelector((state: any) => state.selectedView)
  const isDesignEditor = getEditorTypeFromView(selectedView) === FEditorType.Design

  // File key resolution
  const fileKey
    = useCurrentFileKey()
      || getInitialOptions().editing_file?.source_file?.key
      || ''

  const dispatch = useDispatch<AppDispatch>()

  // Modal context for recovery mode
  const modalContext = {
    view: 'fullscreen',
    editorType: isDesignEditor ? FEditorType.Design : FEditorType.Whiteboard,
    fileKey,
    isRecoveryMode: true,
  }

  // Determine modal display option
  const isRecoveryMode = CorePerfInfo?.getHeapMemoryMode() === DocumentMode.RECOVERY
  const displayOption
    = isReadOnly || isRecoveryMode
      ? modalDisplayOptions.SHOW_RELOAD
      : BrowserInfo.isWasm4gbSupported
        ? modalDisplayOptions.SHOW_RECOVERY_MODE
        : modalDisplayOptions.SHOW_BROWSER_UPGRADE_AND_DESKTOP_DOWNLOAD

  // Desktop app download link
  const desktopAppLink = jsx(Link, {
    href: BrowserInfo.mac ? '/download/desktop/mac' : '/download/desktop/win',
    newTab: true,
    children: renderI18nText('memory_warning_modal.desktop_app_download_link'),
  })

  // Modal content configuration
  const modalContent
    = displayOption === modalDisplayOptions.SHOW_RELOAD
      ? {
          title: getI18nString('memory_warning_modal.reload_modal_title'),
          content: getI18nString('memory_warning_modal.reload_modal_content'),
          contentCTA: getI18nString('memory_warning_modal.reload_modal_content_cta'),
          buttonCTA: getI18nString('memory_warning_modal.reload_page_button'),
          secondaryButtonCTA: getI18nString('memory_warning_modal.learn_more'),
          buttonExternalLink: null,
          secondaryButtonExternalLink:
            'https://help.figma.com/hc/articles/360040528173-Reduce-memory-usage-in-files/',
        }
      : displayOption === modalDisplayOptions.SHOW_RECOVERY_MODE
        ? {
            title: getI18nString('memory_warning_modal.recovery_mode_modal_title'),
            content: getI18nString('memory_warning_modal.recovery_mode_modal_out_of_memory'),
            contentCTA: getI18nString('memory_warning_modal.recovery_mode_modal_content'),
            buttonCTA: getI18nString('memory_warning_modal.recovery_mode_button'),
            secondaryButtonCTA: getI18nString('memory_warning_modal.learn_more'),
            buttonExternalLink: null,
            secondaryButtonExternalLink:
            'https://help.figma.com/hc/articles/360040528173-Reduce-memory-usage-in-files/',
          }
        : {
            title: getI18nString('memory_warning_modal.old_browser_out_of_memory_modal_title'),
            content: getI18nString('memory_warning_modal.old_browser_out_of_memory_modal_content'),
            contentCTA: null,
            buttonCTA: getI18nString('memory_warning_modal.old_browser_primary_button_cta'),
            secondaryButtonCTA: null,
            buttonExternalLink:
            BrowserInfo.browserType
            && {
              chrome: 'https://support.google.com/chrome/answer/95414',
              safari: 'https://support.apple.com/en-us/HT204416',
              firefox: 'https://support.mozilla.org/en-US/kb/update-firefox-latest-release',
              msedge: 'https://support.microsoft.com/en-us/topic/update-to-the-new-microsoft-edge-182d0668-e3f0-49da-b8bb-db5675245dc2',
            }[BrowserInfo.browserType] || null,
            secondaryButtonExternalLink: null,
          }

  // Branching modal
  if (props.isBranching) {
    return jsx(setupBranchMemoryWarningModal, {})
  }

  // Main modal rendering
  return jsx(ModalRootComponent, {
    manager,
    width: 'lg',
    children: jsxs(DialogContents, {
      children: [
        jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: modalContent.title,
          }),
        }),
        jsxs(DialogBody, {
          children: [
            jsxs('div', {
              className: j,
              children: [
                jsxs('div', {
                  children: [
                    modalContent.content,
                    jsx('br', {}),
                    '\xA0',
                    jsx('br', {}),
                  ],
                }),
                displayOption === modalDisplayOptions.SHOW_BROWSER_UPGRADE_AND_DESKTOP_DOWNLOAD
                  ? renderI18nText(
                      'memory_warning_modal.old_browser_out_of_memory_modal_content_cta_and_download_desktop',
                      {
                        desktopAppLink,
                      },
                    )
                  : modalContent.contentCTA,
                jsx('br', {}),
              ],
            }),
            jsxs('div', {
              className: v0,
              children: [
                modalContent.secondaryButtonCTA
                && modalContent.secondaryButtonExternalLink
                && jsx(Link.Button, {
                  onClick: () => {
                    if (
                      modalContent.secondaryButtonCTA
                      === getI18nString('memory_warning_modal.learn_more')
                    ) {
                      $w(
                        {
                          warningEvent: 'LEARN_MORE',
                          fileKey,
                        },
                        {
                          isReadOnly,
                        },
                      )
                    }
                  },
                  recordingKey: generateRecordingKey(props, 'crash'),
                  href: modalContent.secondaryButtonExternalLink,
                  newTab: true,
                  variant: 'secondary',
                  children: modalContent.secondaryButtonCTA,
                }),
                jsx('div', {
                  className: pL,
                  children: modalContent.buttonExternalLink
                    ? jsx(Link.Button, {
                        variant: 'primary',
                        href: modalContent.buttonExternalLink,
                        newTab: true,
                        recordingKey: generateRecordingKey(props, 'crash'),
                        children: modalContent.buttonCTA,
                      })
                    : jsx(Button, {
                        variant: 'primary',
                        recordingKey: generateRecordingKey(props, 'crash'),
                        onClick: () => {
                          if (
                            modalContent.buttonCTA
                            === getI18nString('memory_warning_modal.recovery_mode_button')
                          ) {
                            $w(
                              {
                                warningEvent: 'OPEN_RECOVERY_MODE',
                                fileKey,
                              },
                              {
                                isReadOnly,
                              },
                            )
                          }
                          if (displayOption === modalDisplayOptions.SHOW_RECOVERY_MODE || isReadOnly) {
                            dispatch(selectViewAction(modalContext))
                          }
                          if (
                            displayOption === modalDisplayOptions.SHOW_RELOAD
                            || displayOption === modalDisplayOptions.SHOW_RECOVERY_MODE
                          ) {
                            customHistory.reload('Memory warning panel')
                          }
                        },
                        children: modalContent.buttonCTA,
                      }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  })
}

// Register legacy modal
registerLegacyModal(MEMORY_WARNING_MODAL, (modalShown: any) => {
  const { isBranching } = modalShown.data
  return jsx(PG, {
    isBranching,
  })
})
