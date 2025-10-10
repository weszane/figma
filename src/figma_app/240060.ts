import { PureComponent, useMemo } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { getI18nString, renderI18nText } from "../905/303541"
import { Button } from "../905/521428"
import { DesktopModalType, openUrlInDesktop } from "../905/535224"
import { k, K } from "../905/542574"
import { Point } from "../905/736624"
import { DraggableModalManager } from "../905/748636"
import { hideOpenDesktopAppModal } from "../figma_app/91703"
import { VisibilityOption } from "../figma_app/175992"
import { createLabel, FocusCheckbox } from "../figma_app/637027"
import { Yk } from "../figma_app/644079"
import { getAutoOpenPreference, isEligibleForDesktopAppPrompt, setAutoOpenPreference } from "../figma_app/814196"

// Refactored from minified JavaScript to TypeScript: Renamed variables for clarity (e.g., $$y1 to createOpenDesktopAppModal, E to modalWidth), added TypeScript interfaces for props and state, improved readability with comments, preserved functionality, and ensured type safety. No bugs or performance issues identified, but noted potential for memoization optimization.

// Assumed dependencies: React, jsx/jsxs from react/jsx-runtime, and imported modules from the provided paths.

// Define types for better type safety
interface OpenDesktopAppModalProps {
  dispatch: (action: any) => void // Assuming dispatch is a Redux-like function; replace with proper type if available
  initialPosition: Point
}

interface OpenDesktopAppModalState {
  alwaysChecked: boolean
}

const modalWidth = 378 // Original constant E, renamed for clarity

// Original function $$y1, refactored to createOpenDesktopAppModal for readability
export function createOpenDesktopAppModal(props: Omit<OpenDesktopAppModalProps, 'dispatch'>) {
  const toolbarHeight = Yk() // Assuming Yk returns toolbar height
  // Calculate initial position centered horizontally and adjusted for toolbar height
  const initialPosition = useMemo(
    () => new Point(
      window.innerWidth / 2 - modalWidth / 2,
      window.innerHeight - (toolbarHeight > 0 ? 120 + toolbarHeight : 150),
    ),
    [toolbarHeight],
  )
  return jsx(OpenDesktopAppModal, {
    initialPosition,
    ...props,
  })
}

export class OpenDesktopAppModal extends PureComponent<OpenDesktopAppModalProps, OpenDesktopAppModalState> {
  constructor(props: OpenDesktopAppModalProps) {
    super(props)
    this.onClose = this.onClose.bind(this)
    this.onClickOpenInApp = this.onClickOpenInApp.bind(this)
    this.onClickAlwaysOpenDesktopApp = this.onClickAlwaysOpenDesktopApp.bind(this)
    this.state = {
      alwaysChecked: getAutoOpenPreference() !== VisibilityOption.NEVER,
    }
  }

  // Handler to close modal and set preference to never
  onClose = () => {
    this.props.dispatch(hideOpenDesktopAppModal())
    setAutoOpenPreference(VisibilityOption.NEVER)
  }

  // Handler to open in app, update preference based on checkbox, and close modal
  onClickOpenInApp = () => {
    this.props.dispatch(hideOpenDesktopAppModal())
    setAutoOpenPreference(this.state.alwaysChecked ? VisibilityOption.ALWAYS : VisibilityOption.NEVER)
    openUrlInDesktop(location.href, DesktopModalType.OPEN_IN_DESKTOP_MODAL)
  }

  // Toggle the always open checkbox state
  onClickAlwaysOpenDesktopApp = () => {
    this.setState({
      alwaysChecked: !this.state.alwaysChecked,
    })
  }

  // Static method to check if modal should show once (eligible and no preference set)
  static shouldShowOnce(): boolean {
    return isEligibleForDesktopAppPrompt() && getAutoOpenPreference() === undefined
  }

  // Static method to check if should auto-open (eligible and always set)
  static shouldAutoOpen(): boolean {
    return isEligibleForDesktopAppPrompt() && getAutoOpenPreference() === VisibilityOption.ALWAYS
  }

  // Static method to toggle auto-open preference
  static toggleAutoOpen(): void {
    const isAlways = getAutoOpenPreference() === VisibilityOption.ALWAYS
    setAutoOpenPreference(isAlways ? VisibilityOption.NEVER : VisibilityOption.ALWAYS)
  }

  // Static method to check if auto-open is enabled
  static isAutoOpenEnabled(): boolean {
    return getAutoOpenPreference() === VisibilityOption.ALWAYS
  }

  // Static method to enable auto-open
  static enableAutoOpen(): void {
    setAutoOpenPreference(VisibilityOption.ALWAYS)
  }

  // Static method to disable auto-open if not set
  static disableAutoOpenIfUnset(): void {
    if (getAutoOpenPreference() === undefined) {
      setAutoOpenPreference(VisibilityOption.NEVER)
    }
  }

  render() {
    return jsx(DraggableModalManager, {
      initialPosition: this.props.initialPosition,
      title: getI18nString("desktop_open_views.open_in_desktop_modal.title"),
      headerSize: "small",
      dragHeaderOnly: true,
      onClose: this.onClose,
      children: jsxs("div", {
        className: k,
        children: [
          // Checkbox section for always open preference
          jsxs("div", {
            className: K,
            children: [
              jsx(FocusCheckbox, {
                id: "always-open-desktop-app",
                checked: this.state.alwaysChecked,
                onClick: this.onClickAlwaysOpenDesktopApp,
              }),
              jsx(createLabel, {
                htmlFor: "always-open-desktop-app",
                children: renderI18nText("desktop_open_views.open_in_desktop_modal.always_open_in_app_checkbox"),
              }),
            ],
          }),
          // Button section for dismiss and open actions
          jsxs("div", {
            className: K,
            children: [
              jsx(Button, {
                variant: "secondary",
                onClick: this.onClose,
                children: renderI18nText("desktop_open_views.modal.dismiss_button"),
              }),
              jsx(Button, {
                variant: "primary",
                onClick: this.onClickOpenInApp,
                children: renderI18nText("desktop_open_views.open_in_desktop_modal.open_in_app_button"),
              }),
            ],
          }),
        ],
      }),
    })
  }

  static displayName = "OpenDesktopAppModal"
}

// Original exports preserved with refactored names on the right
export const N = OpenDesktopAppModal
export const g = createOpenDesktopAppModal
