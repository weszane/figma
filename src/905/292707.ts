import { Component } from 'react'
import { connect } from 'react-redux'
import { jsx } from 'react/jsx-runtime'
import { getModal } from '../905/102752'
import { n as _$$n } from '../905/121869'
import { popModalStack } from '../905/156213'
import { logError } from '../905/714362'
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from '../905/751457'
import { removeOptimist } from '../905/766303'
import { isOrgSuspendedOrDeactivated } from '../figma_app/345997'
import { MEMORY_WARNING_MODAL } from '../figma_app/453508'
import { CachedSubtreeRenderer, NOT_VISIBLE_RUN_ANYWAY } from '../figma_app/679183'

/**
 * CSS class for modal subtree.
 * (original: h)
 */
const appModalCachedSubtreeClass = 'app_modal--appModalCachedSubtree--FDJSe'

/**
 * Modal fallback component.
 * (original: g)
 */
const AppModalFallback = _$$n

/**
 * Tracks modal types that have rendered non-modal elements.
 * (original: A)
 */
const nonModalTypes = new Set<string>()

/**
 * Props for AppModal component.
 */
interface AppModalProps {
  dispatch: Fn
  currentUserOrgId?: string
  modalShown?: any

  [key: string]: any
}

/**
 * AppModal component handles modal stack rendering and error boundaries.
 * (original: f)
 */
class AppModal extends Component<AppModalProps> {
  modalStack: Array<any>
  logtimeout: ReturnType<typeof setTimeout> | null
  onClose?: () => void
  constructor(props: AppModalProps) {
    super(props)
    this.modalStack = []
    this.logtimeout = null
    this.onClose = this.handleClose.bind(this)
  }

  /**
   * Dispatches action to pop modal stack.
   * (original: onClose)
   */
  handleClose() {
    this.props.dispatch(popModalStack())
  }

  /**
   * Logs error if modal subtree is not rendered as a modal.
   * (original: componentDidUpdate)
   */
  componentDidUpdate() {
    if (this.logtimeout)
      clearTimeout(this.logtimeout)
    this.logtimeout = setTimeout(() => {
      this.checkModalSubtree(this.modalStack)
    }, 1000)
  }

  /**
   * Checks if all modals are rendered as modal dialogs.
   * (original: anonymous function in componentDidUpdate)
   */
  private checkModalSubtree(modalStack: Array<any>) {
    if (modalStack.every(e => nonModalTypes.has(e.modal.type)))
      return
    const modalElements = document.querySelectorAll(`.${appModalCachedSubtreeClass}`)
    if (modalElements.length === modalStack.length) {
      for (let i = 0; i < modalElements.length; ++i) {
        const child = modalElements[i].children[0]
        if (!(child instanceof HTMLElement))
          continue
        const modal = modalStack[i].modal
        const role = child.role
        const ariaModal = child.getAttribute('aria-modal')
        if (role !== 'dialog' || ariaModal !== 'true') {
          if (nonModalTypes.has(modal.type))
            continue
          nonModalTypes.add(modal.type)
          logError('app_modal', 'AppModal rendered a non-modal element', {
            type: modal.type,
            showModalsBeneath: !!modal.showModalsBeneath,
            optOutOfPrevModal: !!modal.optOutOfPrevModal,
            isSubModal: !!modal.prevModal,
          }, {
            reportAsSentryError: true,
          })
        }
      }
    }
  }

  /**
   * Renders a modal using its registered renderer.
   * (original: renderModal)
   */
  renderModal(modal: any, registeredModal: any, open: boolean) {
    if (!modal || !registeredModal)
      return null
    if (!registeredModal.isLegacy) {
      return registeredModal.render({
        open,
        onClose: this.onClose,
        ...modal.data,
      })
    }
    // Legacy modal renderer
    const LegacyModal = registeredModal.render
    return jsx(LegacyModal, {
      open,
      ...this.props,
    })
  }

  /**
   * Renders the modal stack with error boundaries.
   * (original: render)
   */
  render() {
    const { currentUserOrgId, modalShown } = this.props

    // Organization suspended or deactivated
    if (currentUserOrgId && isOrgSuspendedOrDeactivated(currentUserOrgId, this.props as any)) {
      return jsx(AppModalFallback, {
        currentOrgId: currentUserOrgId,
      })
    }

    // No modal shown
    if (!modalShown) {
      this.modalStack = []
      return null
    }

    // Memory warning modal
    if (modalShown.type === MEMORY_WARNING_MODAL) {
      const registeredModal = getModal(modalShown.type)
      const modalEntry = {
        modal: modalShown,
        cachedSubtree: new CachedSubtreeRenderer(this.renderModal.bind(this, modalShown, registeredModal)),
        registeredModal,
      }
      this.modalStack = [modalEntry]
      return modalEntry.cachedSubtree.render({
        isVisible: true,
        valueArgs: [true],
        displayAs: 'block',
      })
    }

    // Prune modal stack
    while (this.modalStack.length) {
      const lastModal = this.modalStack[this.modalStack.length - 1].modal
      if (modalShown === lastModal || modalShown.prevModal === lastModal)
        break
      this.modalStack.pop()
    }

    // Push new modal if needed
    if (modalShown !== this.modalStack[this.modalStack.length - 1]?.modal) {
      const registeredModal = getModal(modalShown.type)
      if (!registeredModal) {
        logError('app_modal', `No modal registered for type ${modalShown.type}`, {}, {
          reportAsSentryError: true,
        })
      }
      this.modalStack.push({
        modal: modalShown,
        cachedSubtree: new CachedSubtreeRenderer(this.renderModal.bind(this, modalShown, registeredModal)),
        registeredModal,
      })
    }

    // Determine which modals are visible
    const visibleIndexes = new Set<number>()
    let idx = this.modalStack.length - 1
    while (idx >= 0) {
      const entry = this.modalStack[idx]
      if (idx === this.modalStack.length - 1) {
        visibleIndexes.add(idx)
      }
      else if (entry.registeredModal?.supportsBackgroundVisible) {
        visibleIndexes.add(idx)
      }
      else {
        break
      }
      if (!entry.modal.showModalsBeneath)
        break
      idx--
    }

    // Render modal stack with error boundaries
    return this.modalStack.map((entry, i) => {
      const isVisible = visibleIndexes.has(i)
      const shouldRender = isVisible || NOT_VISIBLE_RUN_ANYWAY
      return jsx(ErrorBoundaryCrash, {
        boundaryKey: `AppModal${entry.modal.type}`,
        fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
        children: entry.cachedSubtree.render({
          isVisible: shouldRender,
          displayAs: 'block',
          valueArgs: [isVisible],
          className: appModalCachedSubtreeClass,
        }),
      }, entry.modal.type)
    })
  }

  staticdisplayName = 'AppModal'
}

/**
 * Connected AppModal component.
 * (original: $$_0)
 */
const ConnectedAppModal = connect(removeOptimist)(AppModal)

/**
 * Exported modal component (original: V)
 */
export const V = ConnectedAppModal
