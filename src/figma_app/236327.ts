import classNames from "classnames"
import { noop } from 'lodash-es'
import { Children, cloneElement, forwardRef, PureComponent, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { isCommandOrShift } from "../905/63728"
import { o6 as _$$o, _S, bv, cY, DE, DY, E7, ep, fG, FR, gD, IZ, jv, me, pH, Rp, rU, se, Ts, tZ, uK, Vi, Wh, Wm, wY, z6, zT } from "../905/255309"
import { handleUrlAction } from "../905/280005"
import { RenderRefCheckbox } from "../905/339549"
import { setupThemeContext } from "../905/614223"
import { SvgComponent } from "../905/714743"

// Refactored dropdown components with improved readability, type safety, and maintainability
// Renamed variables, added types, simplified logic, and preserved original functionality

import { hideDropdownAction } from "../905/929976"
import { A as _$$A } from "../6828/364616"
import { A } from "../6828/954206"
import { Dm, s4 } from "../figma_app/8833"
import { createMultiRefCallback } from "../figma_app/272902"
import { preventDefault, shouldHandleMultiTouchOrPressure, stopPropagation } from "../figma_app/753501"
import { TrackingProvider, withTrackedClick } from "../figma_app/831799"
import { handleMouseEvent, RecordingPureComponent, SKIP_RECORDING } from "../figma_app/878298"
import { isInteractionOrEvalMode } from "../figma_app/897289"

// Type definitions for better type safety
interface DropdownProps {
  className?: string
  notDraggable?: boolean
  shouldRenderAutocompleteStyles?: boolean
  label?: string
  iconLabel?: React.ReactNode
  noBorder?: boolean
  noRightPadding?: boolean
  dropdownButton?: React.ComponentType<{ onClick: () => void }>
  stayOpenOnSelect?: boolean
  options?: React.ReactNode
  dropdownOptionsClassName?: string
  rightAlignOptions?: boolean
  optionsBelowSelector?: boolean
  menuTrackingContextName?: string
  menuTrackingProperties?: Record<string, any>
}

interface DropdownHookProps {
  focusContainerOnMount?: boolean
  children?: React.ReactNode
  options?: React.ReactNode
  autofocusPrevElementOnEsc?: boolean
  autofocusPrevElementOnTab?: boolean
  hideDropdown: () => void
  orientation?: "horizontal" | "vertical"
  autofocusPrevElementOnSelect?: boolean
}

interface PositionStyle {
  left: number
  top: number
  [key: string]: any
}

interface RefPosition {
  left: number
  top: number
}

// Main dropdown component
export function DropdownComponent(props: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const hasLabel = "label" in props
  const hasDropdownButton = "dropdownButton" in props

  return jsxs("div", {
    className: classNames(gD, props.className, isOpen && FR, props.shouldRenderAutocompleteStyles && Rp),
    ...(props.notDraggable
      ? {
          "data-not-draggable": true,
        }
      : {}),
    children: [
      hasLabel && jsxs("div", {
        className: classNames(Ts, props.noBorder && E7, props.noRightPadding && zT),
        onClick: () => setIsOpen(!isOpen),
        role: "menu",
        tabIndex: 0,
        children: [
          jsxs("div", {
            className: ep,
            children: [
              !!props.iconLabel && jsx("div", {
                className: Vi,
                children: props.iconLabel,
              }),
              jsx("p", {
                children: props.label,
              }),
            ],
          }),
          jsx(SvgComponent, {
            className: tZ,
            svg: _$$A,
          }),
        ],
      }),
      hasDropdownButton && jsx(props.dropdownButton!, {
        onClick: () => setIsOpen(!isOpen),
      }),
      isOpen && jsxs(Fragment, {
        children: [
          jsx("div", {
            className: classNames(DE, props.dropdownOptionsClassName, props.rightAlignOptions && Wh, props.optionsBelowSelector && fG),
            onClick: props.stayOpenOnSelect ? undefined : () => setIsOpen(false),
            role: "menu",
            tabIndex: 0,
            children: jsx(TrackingProvider, {
              name: props.menuTrackingContextName || "",
              enabled: !!props.menuTrackingContextName,
              properties: props.menuTrackingProperties,
              children: jsx(DropdownOptions, {
                options: props.options,
                hideDropdown: () => setIsOpen(false),
                shouldRenderAutocompleteStyles: props.shouldRenderAutocompleteStyles,
              }),
            }),
          }),
          jsx(DropdownScrim, {
            closeDropdown: () => setIsOpen(false),
          }),
        ],
      }),
    ],
  })
}

// Hook for managing dropdown focus and keyboard navigation
export function useDropdownFocus(props: DropdownHookProps) {
  const [focusedIndex, setFocusedIndex] = useState(props.focusContainerOnMount ? -1 : 0)
  const childrenComponents = useMemo(
    () => Children.toArray(props.children || props.options).filter(child => typeof child !== "boolean"),
    [props.children, props.options],
  )
  const childRefs = useRef<Array<HTMLElement | null>>(Array.from({ length: childrenComponents.length }))
  const previousActiveElement = useRef(document.activeElement)

  // Focus the currently selected element
  useEffect(() => {
    const element = childRefs.current[focusedIndex]
    if (element) {
      element.tabIndex = 0
      element.focus()
    }
  }, [focusedIndex, childRefs])

  // Set focus to a specific element
  const setFocusToElement = useCallback((currentIndex: number, newIndex: number) => {
    const element = childRefs.current[currentIndex]
    if (element) {
      element.tabIndex = -1
      element.focus()
    }
    setFocusedIndex(newIndex)
  }, [])

  // Focus the previous element (with wrapping)
  const focusPreviousElement = useCallback(() => {
    let newIndex = focusedIndex - 1
    for (let i = 0; i < childRefs.current.length; i++) {
      if (childRefs.current[newIndex] == null) {
        newIndex = newIndex - 1 < 0 ? childRefs.current.length - 1 : newIndex - 1
      }
      else {
        break
      }
    }
    setFocusToElement(focusedIndex, newIndex)
  }, [focusedIndex, setFocusToElement])

  // Focus the next element (with wrapping)
  const focusNextElement = useCallback(() => {
    let newIndex = focusedIndex + 1
    for (let i = 0; i < childRefs.current.length; i++) {
      if (childRefs.current[newIndex] == null) {
        newIndex = newIndex + 1 >= childRefs.current.length ? 0 : newIndex + 1
      }
      else {
        break
      }
    }
    setFocusToElement(focusedIndex, newIndex)
  }, [focusedIndex, setFocusToElement])

  // Get a ref callback for a child element
  const getSetChildRef = (index: number) => {
    const child = childrenComponents[index] as React.ReactElement
    if (
      typeof child !== "boolean"
      && ("type" in child)
      && (child.type === OptionComponent || child.type === CheckableOptionComponent)
    ) {
      const childProps = (child as React.ReactElement).props
      if (childProps.disabled || childProps.header) {
        return noop
      }
    }
    return (element: HTMLElement | null) => childRefs.current[index] = element
  }

  // Handle keyboard navigation
  const onKeyDown = (event: React.KeyboardEvent) => {
    event.stopPropagation()
    if (event.nativeEvent) {
      event.nativeEvent.stopImmediatePropagation()
    }

    switch (event.key) {
      case "Escape":
        if (props.autofocusPrevElementOnEsc) {
          (previousActiveElement.current as HTMLElement)?.focus()
        }
        props.hideDropdown()
        break
      case "Tab":
        if (props.autofocusPrevElementOnTab) {
          (previousActiveElement.current as HTMLElement)?.focus()
        }
        props.hideDropdown()
        break
      case " ":
      case "Enter":
        {
          const element = childRefs.current[focusedIndex]
          if (element) {
            element.click()
          }
          if (props.autofocusPrevElementOnSelect) {
            (previousActiveElement.current as HTMLElement)?.focus()
          }
        }
        break
      case "Left":
      case "ArrowLeft":
        if (props.orientation === "horizontal") {
          focusPreviousElement()
        }
        break
      case "Up":
      case "ArrowUp":
        if (props.orientation !== "horizontal") {
          focusPreviousElement()
        }
        break
      case "Right":
      case "ArrowRight":
        if (props.orientation === "horizontal") {
          focusNextElement()
        }
        break
      case "ArrowDown":
      case "Down":
        if (props.orientation !== "horizontal") {
          focusNextElement()
        }
        break
      case "Home":
      case "PageUp":
        setFocusToElement(focusedIndex, 0)
        break
      case "End":
      case "PageDown":
        setFocusToElement(focusedIndex, childRefs.current.length - 1)
        break
    }
  }

  // Handle focus events
  const onFocus = (event: React.FocusEvent) => {
    if (event && event.target) {
      const index = childRefs.current.indexOf(event.target as HTMLElement)
      if (index >= 0) {
        setFocusToElement(focusedIndex, index)
      }
    }
  }

  return {
    childrenComponents,
    getSetChildRef,
    onKeyDown,
    onFocus,
  }
}

// Dropdown options container
export function DropdownOptions(props: any) {
  const {
    childrenComponents,
    getSetChildRef,
    onKeyDown,
    onFocus,
  } = useDropdownFocus(props)

  const {
    children,
    options,
    ...restProps
  } = props

  return jsx(DropdownContainer, {
    ...restProps,
    onKeyDown,
    tabIndex: -1,
    children: Children.map(childrenComponents, (child, index) =>
      cloneElement(child as React.ReactElement, {
        buttonRef: getSetChildRef(index),
        onFocus,
      })),
  })
}

// Positioning hook for dropdowns
export function useDropdownPosition(ref: React.RefObject<HTMLElement>, style: RefPosition): PositionStyle {
  const [position, setPosition] = useState<[number, number] | null>(null)

  useEffect(() => {
    const element = ref.current
    if (element) {
      const rect = element.getBoundingClientRect()
      let left = style.left
      let top = style.top

      // Ensure dropdown stays within viewport with 8px padding
      if (left < 8) {
        left = 8
      }
      else if (left + rect.width > window.innerWidth - 8) {
        left = window.innerWidth - 8 - rect.width
      }

      if (top < 8) {
        top = 8
      }
      else if (top + rect.height > window.innerHeight - 8) {
        top = window.innerHeight - 8 - rect.height
      }

      setPosition([left, top])
    }
  }, [ref, style.left, style.top])

  return useMemo(() =>
    position
      ? {
          ...style,
          left: position[0],
          top: position[1],
        }
      : {
          ...style,
          visibility: "hidden",
        }, [position, style])
}

// Positioned dropdown component
export const PositionedDropdown = forwardRef(({
  style,
  ...props
}: any, ref) => {
  const dropdownRef = useRef<HTMLElement>(null)
  const positionedStyle = useDropdownPosition(dropdownRef, style)

  return jsx(DropdownWithScrim, {
    dropdownRef: createMultiRefCallback(dropdownRef, ref),
    style: positionedStyle,
    ...props,
  })
})

// Dropdown container component
export class DropdownContainer extends RecordingPureComponent<any> {
  private stopPropagationForPointerDown = (event: React.PointerEvent) => {
    if (shouldHandleMultiTouchOrPressure()) {
      stopPropagation(event)
    }
  }

  private onClick = handleMouseEvent(this, "click", (event: React.MouseEvent) => {
    if (!this.props.onClick) {
      return SKIP_RECORDING
    }
    this.props.onClick(event)
  })

  render() {
    return jsx("div", {
      "ref": this.props.dropdownRef,
      "aria-labelledby": this.props["aria-labelledby"],
      "className": classNames(
        Wm,
        this.props.className,
        {
          [DY]: this.props.positionAbsolute,
          [_S]: this.props.positionFixed,
          [rU]: this.props.shouldRenderAutocompleteStyles,
          [s4]: this.props.preventZoom,
          [Dm]: this.props.preventEventCapture,
        },
      ),
      "data-cancel-insertable-resource-drag-and-drop": true,
      "data-onboarding-key": this.props.dataOnboardingKey,
      "data-testid": this.props["data-testid"],
      "id": this.props.id,
      "onClick": this.onClick,
      "onContextMenu": preventDefault,
      "onFocus": this.props.onFocus,
      "onKeyDown": this.props.onKeyDown,
      "onMouseDown": stopPropagation,
      "onPointerDown": this.stopPropagationForPointerDown,
      "onScroll": this.props.stopScrollPropagation ? stopPropagation : this.props.onScroll,
      "onTouchStart": stopPropagation,
      "onWheel": this.props.preventZoom ? undefined : stopPropagation,
      "role": "menu",
      "style": this.props.style,
      "tabIndex": this.props.tabIndex ?? 0,
      "children": this.props.children,
    })
  }
  static displayName = "Dropdown"
}

// Option component for dropdown items
export class OptionComponent extends RecordingPureComponent<any> {
  private mouseOverTimestamp = 0
  private mouseUpTimer?: number
  public state = {
    hover: false,
  }

  private onDragStart = (event: React.DragEvent) => {
    event.preventDefault()
  }

  private onPointerOver = (event: React.PointerEvent) => {
    this.props.onPointerOver?.()
    this.setState({ hover: true })
    this.props.onHover?.(true)
    if (!this.props.href) {
      this.mouseOverTimestamp = Number(event.timeStamp)
    }
  }

  private onPointerOut = (_event: React.PointerEvent) => {
    this.props.onPointerOut?.()
    this.setState({ hover: false })
    this.props.onHover?.(false)
  }

  private onPointerUp = handleMouseEvent(this, "mouseup", (event: React.MouseEvent) => {
    if (!this.props.href) {
      if (this.props.onPointerUp) {
        this.props.onPointerUp(event)
        return
      }
      if (Number(event.timeStamp) - this.mouseOverTimestamp > 20) {
        const target = event.target as HTMLElement
        if (target.click != null) {
          this.mouseUpTimer = window.setTimeout(target.click.bind(target), 1)
        }
      }
    }
  })

  private onTouchEnd = (event: React.TouchEvent) => {
    const target = event.target as HTMLElement
    if (target.click && event.preventDefault && target && event.changedTouches) {
      const touch = event.changedTouches[0]
      if (document.elementFromPoint(touch.clientX, touch.clientY) === target) {
        target.click()
      }
    }
  }

  private onClick = handleMouseEvent(this, "click", (event: React.MouseEvent) => {
    if (!(this.props.href && isCommandOrShift(event))) {
      if (this.props.href) {
        handleUrlAction(this.props.href, event)
      }
      else {
        clearTimeout(this.mouseUpTimer)
      }
      this.props.onClick?.(event)
    }
  })

  private ariaRole = () => {
    if (this.props.header) {
      return "presentation"
    }
    return "role" in this.props ? this.props.role ?? "menuitem" : "menuitem"
  }

  render() {
    const isDisabledOrHeader = this.props.disabled || this.props.header
    const className = classNames(
      isDisabledOrHeader
        ? IZ
        : {
            [wY]: this.state.hover || this.props.simulateHover,
            [uK]: true,
          },
      this.props.className,
    )

    return jsx("a", {
      "ref": this.props.buttonRef,
      "aria-checked": "aria-checked" in this.props ? this.props["aria-checked"] : undefined,
      "aria-disabled": this.props.disabled,
      "className": className,
      "data-dropdown-tooltip": this.props.tooltip,
      "data-fullscreen-intercept": this.props["data-fullscreen-intercept"],
      "data-onboarding-key": this.props.onboardingKey,
      "data-search-click-action": this.props["data-search-click-action"],
      "data-testid": this.props.recordingKey,
      "href": this.props.href,
      "id": this.props.id,
      "onClick": isDisabledOrHeader ? undefined : this.onClick,
      "onDragStart": this.onDragStart,
      "onFocus": this.props.onFocus,
      "onKeyDown": this.props.onKeyDown,
      "onMouseDown": this.props.onMouseDown,
      "onPointerOut": isDisabledOrHeader ? undefined : this.onPointerOut,
      "onPointerOver": isDisabledOrHeader ? undefined : this.onPointerOver,
      "onPointerUp": isDisabledOrHeader ? undefined : this.onPointerUp,
      "onTouchEnd": this.onTouchEnd,
      "rel": "noopener",
      "role": this.ariaRole(),
      "tabIndex": -1,
      "target": this.props.target,
      "children": this.props.children,
    })
  }
  static displayName = "Option"
}

// Tracked option component
export const TrackedOption = withTrackedClick(OptionComponent)

// Separator component
export class SeparatorComponent extends PureComponent<any> {
  private onClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  render() {
    let className = me
    if (this.props.className) {
      className += ` ${this.props.className}`
    }

    return jsx("div", {
      "className": className,
      "onClick": this.onClick,
      "style": this.props.style,
      "data-testid": this.props.dataTestId ?? "dropdown-separator",
      "children": jsx("div", {
        className: se,
      }),
    })
  }
  static displayName = "Separator"
}

// Indented separator component
export class IndentedSeparatorComponent extends PureComponent<any> {
  private onClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  render() {
    let className = jv
    if (this.props.className) {
      className += ` ${this.props.className}`
    }

    return jsx("div", {
      "className": className,
      "onClick": this.onClick,
      "style": this.props.style,
      "data-testid": this.props.dataTestId ?? "dropdown-indented-separator",
      "children": jsx("div", {
        className: se,
      }),
    })
  }
  static displayName = "IndentedSeparator"
}

// Display type enum for checkable options
export enum CheckDisplayType {
  Checkmark = "Checkmark",
  Checkbox = "Checkbox",
}

// Checkable option component
export class CheckableOptionComponent extends RecordingPureComponent<any> {
  static defaultProps = {
    displayType: CheckDisplayType.Checkmark,
  }

  render() {
    return jsxs(OptionComponent, {
      ...this.props,
      "className": classNames(
        _$$o,
        this.props.displayType === CheckDisplayType.Checkbox && this.props.nested && cY,
        this.props.className,
      ),
      "aria-checked": this.props.checked,
      "role": "role" in this.props ? this.props.role : undefined,
      "children": [
        this.props.displayType === CheckDisplayType.Checkbox
          ? jsx(setupThemeContext, {
              mode: "dark",
              children: jsx("span", {
                className: z6,
                children: jsx(RenderRefCheckbox, {
                  disabled: this.props.disabled,
                  checked: this.props.checked,
                  mixed: this.props.mixed,
                }),
              }),
            })
          : this.props.checked
            ? jsx(SvgComponent, {
                className: z6,
                svg: A,
                dataTestId: "dropdown-check-icon",
              })
            : jsx("span", {
                className: z6,
              }),
        this.props.children,
      ],
    })
  }
  static displayName = "CheckableOption"
}

// Tracked checkable option component
const TrackedCheckableOption = withTrackedClick(CheckableOptionComponent)

// Option with primary and secondary text
export class TextOptionComponent extends RecordingPureComponent<any> {
  render() {
    return jsxs(CheckableOptionComponent, {
      ...this.props,
      children: [
        jsx("div", {
          children: this.props.primaryText,
        }),
        !!this.props.secondaryText && jsx("div", {
          className: pH,
          children: this.props.secondaryText,
        }),
      ],
    })
  }
}

// Tracked text option component
const TrackedTextOption = withTrackedClick(TextOptionComponent)

// Dropdown with scrim component
export class DropdownWithScrim extends RecordingPureComponent<any> {
  private hasCloseDropdown = (props: any) => !!props.closeDropdown

  render() {
    return jsxs(Fragment, {
      children: [
        jsx(DropdownContainer, {
          ...this.props,
        }),
        this.hasCloseDropdown(this.props)
          ? jsx(DropdownScrim, {
              closeDropdown: this.props.closeDropdown,
              recordingKey: "dropdownModalScrim",
              preventEventCapture: this.props.preventEventCapture,
            })
          : jsx(DropdownScrim, {
              dispatch: this.props.dispatch,
              recordingKey: "dropdownModalScrim",
              preventEventCapture: this.props.preventEventCapture,
            }),
      ],
    })
  }
  static displayName = "DropdownWithScrim"
}

// Dropdown scrim component (clicking outside closes dropdown)
export class DropdownScrim extends RecordingPureComponent<any> {
  private mouseMotionSinceMouseDown = 0
  private readonly MENU_CLOSE_MOUSE_MOVE_SENSITIVITY = 5

  private closeDropdown = () => {
    if (this.props.closeDropdown) {
      this.props.closeDropdown()
    }
    else {
      this.props.dispatch(hideDropdownAction())
    }
  }

  private onMouseDown = handleMouseEvent(this, "mousedown", (event: React.MouseEvent) => {
    this.mouseMotionSinceMouseDown = 0
    this.closeDropdown()
    event.stopPropagation()
  })

  private onMouseMove = handleMouseEvent(this, "mousemove", (event: React.MouseEvent) => {
    if (isInteractionOrEvalMode()) {
      if (!(this.mouseMotionSinceMouseDown < this.MENU_CLOSE_MOUSE_MOVE_SENSITIVITY)) {
        return SKIP_RECORDING
      }
      this.mouseMotionSinceMouseDown += this.MENU_CLOSE_MOUSE_MOVE_SENSITIVITY
    }
    else {
      this.mouseMotionSinceMouseDown += Math.abs(event.nativeEvent.movementX)
      this.mouseMotionSinceMouseDown += Math.abs(event.nativeEvent.movementY)
    }
  })

  private onMouseUp = handleMouseEvent(this, "mouseup", (event: React.MouseEvent) => {
    if (this.mouseMotionSinceMouseDown >= this.MENU_CLOSE_MOUSE_MOVE_SENSITIVITY) {
      this.closeDropdown()
      event.stopPropagation()
    }
  })

  render() {
    return jsx("div", {
      "className": classNames(bv, this.props.preventEventCapture && Dm),
      "onMouseDown": this.onMouseDown,
      "onMouseMove": this.onMouseMove,
      "onMouseUp": this.onMouseUp,
      "onContextMenu": preventDefault,
      "data-does-not-dismiss-modal": true,
    })
  }
}

// Export aliases to maintain compatibility with original code
export const Jn = CheckDisplayType
export const MM = CheckableOptionComponent
export const OR = useDropdownFocus
export const Ve = DropdownComponent
export const Vq = PositionedDropdown
export const X3 = DropdownOptions
export const X9 = DropdownScrim
export const c$ = OptionComponent
export const gS = TrackedOption
export const gw = DropdownWithScrim
export const l4 = useDropdownPosition
export const ms = DropdownContainer
export const rr = TrackedCheckableOption
export const ru = TrackedTextOption
export const wv = SeparatorComponent
export const y0 = TextOptionComponent
