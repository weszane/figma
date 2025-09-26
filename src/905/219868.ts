import { jsx, jsxs } from 'react/jsx-runtime'
import { ModalRootComponent } from '../905/38914'
import { registerModal } from '../905/102752'
import { useModalManager } from '../905/437088'
import { DialogBody, DialogContents, DialogHeader, DialogHiddenTitle } from '../figma_app/272243'
// Refactored constants for legal URLs
const privacyUrl = '/legal/privacy'
const tosUrl = '/legal/tos'
const readerModePrivacyUrl = '/legal/reader-mode/privacy'
const readerModeTosUrl = '/legal/reader-mode/tos'

// Interface for modal props
interface GoogleDeviceIframeModalProps {
  title: string
  url: string
  open?: boolean
  onClose: (options?: { source?: string }) => void
  preventUserClose?: boolean
  recordingKey?: string
}

/**
 * Component for the Google Device Iframe Modal.
 * Displays a modal with an iframe for legal content.
 * @param props - The modal properties including title and URL.
 * @returns The JSX element for the modal.
 */
function GoogleDeviceIframeModalComponent(props: GoogleDeviceIframeModalProps) {
  const manager = useModalManager(props)
  return jsx(ModalRootComponent, {
    manager,
    width: 420,
    children: jsxs(DialogContents, {
      children: [
        jsx(DialogHeader, {
          children: jsx(DialogHiddenTitle, {
            children: props.title,
          }),
        }),
        jsx(DialogBody, {
          padding: 0,
          children: jsx('iframe', {
            className: 'google_device_disclaimer_modals--iframeContainer--0XCRs',
            title: props.title,
            src: props.url,
          }),
        }),
      ],
    }),
  })
}

// Register the modal with a key
const googleDeviceIframeModal = registerModal(GoogleDeviceIframeModalComponent, 'GOOGLE_DEVICE_IFRAME_MODAL')

// Exports with refactored names
export const kn = googleDeviceIframeModal
export const JD = privacyUrl
export const bO = readerModePrivacyUrl
export const Uw = tosUrl
export const A = readerModeTosUrl
