import { jsx, jsxs } from 'react/jsx-runtime'
import { ModalRootComponent } from '../905/38914'
import { registerLegacyModal } from '../905/102752'
import { a as _$$a } from '../905/105502'
import { popModalStack } from '../905/156213'
import { Ob } from '../905/191560'
import { getI18nString } from '../905/303541'
import { useModalManager } from '../905/437088'
import { TabLoop } from '../905/718764'
import { AuthFlowStep } from '../905/862321'
import { DialogBody, DialogContents } from '../figma_app/272243'
import { isUserNotLoggedInAndEditorSupported } from '../figma_app/564183'
import { Command, DesignGraphElements } from '../figma_app/763686'
import { truncate } from '../figma_app/930338'

/**
 * Registers the legacy authentication modal.
 * @see registerLegacyModal
 */
export const AuthModal = registerLegacyModal('auth-modal', (props) => {
  const { modalShown, openFile, auth, dispatch } = props
  const { data } = modalShown || {}
  const {
    headerText,
    subtitle,
    disableHiding,
    id,
    actionOrTool,
  } = data || {}

  return jsx(AuthModalContent, {
    fileName: openFile?.name ?? null,
    headerText,
    subtitle,
    disableHiding,
    auth,
    dispatch,
    id,
    actionOrTool,
  })
})

/**
 * Renders the authentication modal content.
 * @param props - AuthModalContentProps
 * @see _
 */
export interface AuthModalContentProps {
  subtitle?: string
  fileName?: string | null
  headerText?: string
  auth: any
  dispatch: Fn
  disableHiding?: boolean
  id?: string
  actionOrTool?: any
}

/**
 * AuthModalContent - refactored from _
 */
export function AuthModalContent({
  subtitle,
  fileName,
  headerText,
  auth,
  dispatch,
  disableHiding,
  id,
  actionOrTool,
}: AuthModalContentProps) {
  const fromLoggedOutDesignFile = isUserNotLoggedInAndEditorSupported()
  const manager = useModalManager({
    open: true,
    onClose: () => dispatch(popModalStack()),
    preventUserClose: disableHiding,
  })

  /**
   * Determines the header text for the modal.
   * @see header (original inline function)
   */
  const getHeaderText = (): string => {
    if (actionOrTool && fromLoggedOutDesignFile) {
      switch (actionOrTool) {
        case Command.SET_TOOL_DEFAULT:
        case DesignGraphElements.FRAME:
        case DesignGraphElements.SHAPE_RECTANGLE:
        case DesignGraphElements.VECTOR_PEN:
        case DesignGraphElements.TYPE:
          return getI18nString('auth.sign_up_to_edit')
        case 'SELECT_COMMENT_SIDEBAR':
        case 'COMMENT_PIN_CLICK':
        case Command.SET_TOOL_COMMENTS:
        case DesignGraphElements.COMMENTS:
          return getI18nString('auth.sign_up_to_comment')
        case Command.FOLLOW_PRESENTER:
          return getI18nString('auth.sign_up_to_use_multiplayer_tools')
        case Command.ENTER_INSPECT_MODE:
        case Command.SET_TOOL_DEFAULT_DEV_HANDOFF:
          return getI18nString('auth.sign_up_to_use_inspection_tools')
        default:
          return getI18nString('auth.sign_up_for_figma')
      }
    }
    if (headerText)
      return headerText
    if (
      auth.formState === AuthFlowStep.SIGN_IN
      || (auth.formState === AuthFlowStep.VERIFY_HUMAN && auth.prevForm === AuthFlowStep.SIGN_IN)
      || auth.formState === AuthFlowStep.TWO_FACTOR
    ) {
      return fileName
        ? getI18nString('auth.log_in_to_collaborate_on_display_name', {
            displayName: `"${truncate(fileName, 30)}"`,
          })
        : getI18nString('auth.log_in_to_collaborate_on_this_file')
    }
    return fileName
      ? getI18nString('auth.create_an_account_to_collaborate_on_display_name', {
          displayName: `"${truncate(fileName, 30)}"`,
        })
      : getI18nString('auth.create_an_account_to_collaborate_on_this_file')
  }

  return jsx(ModalRootComponent, {
    manager,
    width: 420,
    height: 'dynamic',
    children: jsx(DialogContents, {
      children: jsxs(DialogBody, {
        children: [
          jsx('div', { className: 'auth_modal--modal--bVDTe' }),
          jsx(TabLoop, {
            children: jsx(Ob, {
              id: id ?? 'auth-view-modal',
              auth,
              modal: true,
              header: getHeaderText(),
              subtitle,
              fromLoggedOutDesignFile,
            }),
          }),
        ],
      }),
    }),
  })
}

// Export with refactored name for imports
export const x = AuthModal
