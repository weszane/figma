
import classNames from "classnames"
import { useLayoutEffect, useRef, useState } from "react"
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { captureMessage } from "../905/11"
import { setOrRemoveAttribute } from "../figma_app/243213"


let d = "dropdown--dropdown--IX0tU text--fontPos14--OL9Hp text--_fontBase--QdLsd"
let c = "dropdown--dropdownContents--BqcL5"
let u = "dropdown--dropdownValue--9lJPW"
let p = "dropdown--dropdownPreview--3Ox9k"
let _ = "dropdown--label--cIJtO"
interface DropdownOption {
  key: string
  label: string
  checked?: boolean
}

interface DropdownOptionGroup {
  [key: string]: {
    label: string
    checked?: boolean
  }
}

/**
 * Initialize dropdown values based on options and initial values
 * @param options - Array of dropdown options or option groups
 * @param initialValues - Initial values for each option group
 * @returns Array of initialized values
 */
function initializeDropdownValues(
  options: (DropdownOption[] | DropdownOptionGroup)[],
  initialValues?: (string | { [key: string]: boolean })[],
): (string | { [key: string]: boolean })[] {
  const values: (string | { [key: string]: boolean })[] = Array.from({
    length: options.length,
  })

  options.forEach((optionGroup, index) => {
    if (initialValues?.[index]) {
      values[index] = initialValues[index]
    }
    else if (Array.isArray(optionGroup)) {
      const checkedOption = optionGroup.find(option => option.checked)
      values[index] = checkedOption ? checkedOption.key : optionGroup[0].key
    }
    else {
      values[index] = {}
      Object.entries(optionGroup).find(([key, option]) => {
        if (option.checked) {
          (values[index] as { [key: string]: boolean })[key] = true
          return true
        }
        return false
      })
    }
  })

  return values
}

/**
 * Manages dropdown positioning events
 */
const DropdownPositionManager = (() => {
  let managedElements: {
    el: HTMLDivElement
    initialHPosition: string
    initialVPosition: string
  }[] = [];

  ["scroll", "resize"].forEach((eventType) => {
    window.addEventListener(eventType, () => {
      managedElements = managedElements.filter(item =>
        repositionDropdown(item.el, false, item.initialHPosition, item.initialVPosition),
      )
    })
  })

  return {
    /**
     * Add an element to be managed for positioning
     */
    set: (
      element: HTMLDivElement,
      initialHPosition: string,
      initialVPosition?: string,
    ): void => {
      managedElements.push({
        el: element,
        initialHPosition,
        initialVPosition,
      })
    },
  }
})()

/**
 * Reposition a dropdown element based on viewport constraints
 * @param element - The dropdown element to position
 * @param force - Whether to force positioning regardless of visibility
 * @param initialHPosition - Initial horizontal position
 * @param initialVPosition - Initial vertical position
 * @returns Whether the element was successfully positioned
 */
function repositionDropdown(
  element: HTMLElement | null,
  force: boolean = false,
  initialHPosition?: string,
  initialVPosition?: string,
): boolean {
  if (!element
    || !((element.parentNode as HTMLElement)?.getAttribute("show-dropdown") === "true"
      || element.parentNode === document.activeElement
      || element.parentNode?.firstChild === document.activeElement
      || element === document.activeElement)
    && !force) {
    return false
  }

  if (element.parentNode instanceof HTMLElement
    && element.parentNode.getAttribute("data-disable-repositioning") === "true") {
    return true
  }

  element.setAttribute("data-v-position", initialVPosition || "below")
  element.setAttribute("data-h-position", "")

  const rect = element.getBoundingClientRect()

  // Vertical positioning
  if (rect.bottom > window.innerHeight - 20) {
    element.setAttribute("data-v-position", "above")
  }
  else if (rect.top < 20) {
    element.setAttribute("data-v-position", "below")
  }

  // Horizontal positioning
  if (rect.right > window.innerWidth - 100) {
    element.setAttribute("data-h-position", "right")
  }
  else if (rect.left < 20) {
    element.setAttribute("data-h-position", "left")
  }
  else if (element.getAttribute("data-h-position") !== initialHPosition) {
    setOrRemoveAttribute(element, "data-h-position", initialHPosition)
  }

  return true
}

export interface DropdownBaseProps {
  children: React.ReactNode
  preview: React.ReactNode
  className?: string
  horizontalPosition?: string
  disableRepositioning?: boolean
}

/**
 * Base dropdown component with focus handling
 */
export function DropdownBase({
  children,
  preview,
  className,
  horizontalPosition,
  disableRepositioning,
}: DropdownBaseProps): JSX.Element {
  const dropdownRef = useRef<HTMLDivElement>(null)

  return jsxs("div", {
    "className": className || d,
    "tabIndex": 0,
    "data-disable-repositioning": disableRepositioning,
    "onFocus": () => {
      if (dropdownRef.current) {
        DropdownPositionManager.set(dropdownRef.current, horizontalPosition || "")
        if (!disableRepositioning) {
          repositionDropdown(dropdownRef.current, true, horizontalPosition)
        }
      }
    },
    "children": [
      children,
      jsx("button", {
        className: "dropdown--mobileBackground--WSE2Z",
        onClick: () => (document.activeElement as HTMLDivElement)?.blur(),
      }),
      jsx("div", {
        "className": c,
        "data-v-position": "below",
        "data-h-position": horizontalPosition || "",
        "ref": dropdownRef,
        "children": preview,
      }),
    ],
  })
}

export interface HoverDropdownProps {
  children: React.ReactNode
  preview: React.ReactNode
  className?: string
  dropdownClassName?: string
  horizontalPosition?: string
  verticalPosition?: string
  disableRepositioning?: boolean
  borderRadius?: number
  allowHoverOnDropdownContents?: boolean
}

/**
 * Dropdown component with hover interaction
 */
export function HoverDropdown({
  children,
  preview,
  className,
  dropdownClassName,
  horizontalPosition,
  verticalPosition,
  disableRepositioning,
  borderRadius,
  allowHoverOnDropdownContents = true,
}: HoverDropdownProps): JSX.Element {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState<number>(0)

  const handleHover = (show: boolean): void => {
    if (window.innerWidth < 500)
      return

    clearTimeout(hoverTimeout)
    const timeoutId = setTimeout(() => {
      const element = dropdownRef.current
      if (element && element.parentNode) {
        (element.parentNode as HTMLElement).setAttribute("show-dropdown", String(show))
        if (!show) {
          setTimeout(() => setIsVisible(show), 150)
        }
        else {
          if (element) {
            DropdownPositionManager.set(element, horizontalPosition || "", verticalPosition || "")
          }
          setIsVisible(show)
        }
      }
    }, 150)

    setHoverTimeout(timeoutId as unknown as number)
  }

  useLayoutEffect(() => {
    if (isVisible && !disableRepositioning && dropdownRef.current) {
      repositionDropdown(dropdownRef.current, true, horizontalPosition, verticalPosition)
    }
  }, [isVisible, disableRepositioning, horizontalPosition, verticalPosition])

  return jsxs("div", {
    "className": className || d,
    "show-dropdown": "false",
    "onMouseEnter": () => handleHover(true),
    "onMouseLeave": () => handleHover(false),
    "tabIndex": 0,
    "data-disable-repositioning": disableRepositioning,
    "data-hover-dropdown": true,
    "children": [
      jsx("div", {
        onMouseLeave: allowHoverOnDropdownContents ? undefined : () => handleHover(false),
        children,
      }),
      jsx("div", {
        "className": classNames(c, dropdownClassName),
        "style": borderRadius
          ? {
              borderRadius: `${borderRadius}px`,
            }
          : {},
        "data-v-position": verticalPosition || "below",
        "data-h-position": horizontalPosition || "",
        "ref": dropdownRef,
        "data-dropdown-contents": true,
        "children": isVisible && preview,
      }),
    ],
  })
}

interface CheckmarkIconProps {
  show: boolean
}

/**
 * Checkmark icon component for dropdown options
 */
function CheckmarkIcon({ show }: CheckmarkIconProps): JSX.Element {
  return jsx("svg", {
    className: show ? "dropdown--showCheckmark--td6Ke" : "",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "var(--color-icon-menu)",
    children: jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.2069 5.2073L7.70694 10.7073L6.99983 11.4144L6.29272 10.7073L3.29272 7.7073L4.70694 6.29309L6.99983 8.58598L11.7927 3.79309L13.2069 5.2073Z",
    }),
  })
}

interface OptionGroupProps {
  optionGroup: DropdownOption[] | DropdownOptionGroup
  value: string | { [key: string]: boolean }
  onSelect: (key: string) => void
}

/**
 * Renders a group of dropdown options
 */
function OptionGroup({ optionGroup, value, onSelect }: OptionGroupProps): JSX.Element {
  let optionElements: JSX.Element[]

  if (Array.isArray(optionGroup)) {
    optionElements = optionGroup.map(({ key, label }) =>
      jsxs("div", {
        "role": "button",
        "onKeyDown": (event) => {
          if (event.keyCode === 13) {
            event.target.click()
          }
        },
        "onClick": () => {
          (document.activeElement as HTMLDivElement)?.blur()
          onSelect(key)
        },
        "className": u,
        "data-key": key,
        "tabIndex": 0,
        "children": [
          jsx(CheckmarkIcon, {
            show: value === key,
          }),
          jsx("div", {
            className: _,
            children: label,
          }),
        ],
      }, key),
    )
  }
  else {
    optionElements = Object.entries(optionGroup).map(([key, option]) =>
      jsxs("div", {
        "role": "button",
        "onKeyDown": (event) => {
          if (event.keyCode === 13) {
            event.target.click()
          }
        },
        "onClick": () => {
          (document.activeElement as HTMLDivElement)?.blur()
          onSelect(key)
        },
        "className": u,
        "data-key": key,
        "tabIndex": 0,
        "children": [
          jsx(CheckmarkIcon, {
            show: !!(value as { [key: string]: boolean })[key],
          }),
          jsx("div", {
            className: _,
            children: option.label,
          }),
        ],
      }, key),
    )
  }

  return jsx(Fragment, {
    children: optionElements,
  })
}

interface DropdownPreviewProps {
  label: string
  additionalClassName?: string
  onClick?: () => void
  dataOnboardingKey?: string
}

/**
 * Preview component for dropdowns
 */
function DropdownPreview({
  label,
  additionalClassName,
  onClick,
  dataOnboardingKey,
}: DropdownPreviewProps): JSX.Element {
  return jsxs("div", {
    "role": "button",
    "tabIndex": 0,
    "className": classNames(p, additionalClassName),
    "onMouseDown": (event) => {
      if ((document.activeElement as HTMLDivElement)?.matches(`.${p.replace(/\s/g, ".")}`)) {
        (document.activeElement as HTMLDivElement)?.blur()
        event.preventDefault()
      }
    },
    onClick,
    "data-onboarding-key": dataOnboardingKey,
    "children": [
      jsx("div", {
        className: _,
        children: label,
      }),
      jsx("svg", {
        width: "10",
        height: "7",
        viewBox: "0 0 10 7",
        fill: "none",
        children: jsx("path", {
          d: "M1 1L5 5L9 1",
          stroke: "var(--color-text)",
          strokeWidth: "1.5",
        }),
      }),
    ],
  })
}

export interface SelectDropdownProps {
  name: string
  options: DropdownOption[][]
  onUpdate: (values: (string | { [key: string]: boolean })[]) => void
  onClick?: () => void
  initialValues?: (string | { [key: string]: boolean })[]
  adtlClassName?: string
  dataOnboardingKey?: string
}

/**
 * Select dropdown component with multiple option groups
 */
export function SelectDropdown({
  name,
  options,
  onUpdate,
  onClick,
  initialValues,
  adtlClassName,
  dataOnboardingKey,
}: SelectDropdownProps): JSX.Element {
  const values = initializeDropdownValues(options, initialValues)
  let currentLabel = options[0].find(option => option.key === values[0])?.label

  if (!currentLabel) {
    captureMessage("SelectDropdown: current value removed")
    onUpdate([options[0][0].key])
    currentLabel = options[0][0].label
  }

  return jsx(DropdownBase, {
    className: classNames(adtlClassName || "dropdown--selectDropdown--Lqj6J dropdown--dropdown--IX0tU text--fontPos14--OL9Hp text--_fontBase--QdLsd"),
    preview: jsxs(Fragment, {
      children: [
        jsx("div", {
          className: "dropdown--mobileDropdownHeader--mEjUR",
          children: jsx("b", {
            children: name,
          }),
        }),
        options.map((optionGroup, index) =>
          jsxs("div", {
            children: [
              jsx(OptionGroup, {
                optionGroup,
                value: values[index],
                onSelect: (selectedKey) => {
                  const newValues = [...values]
                  if (Array.isArray(optionGroup)) {
                    newValues[index] = selectedKey
                  }
                  else {
                    const groupValues = newValues[index] as { [key: string]: boolean }
                    newValues[index] = {
                      ...groupValues,
                      [selectedKey]: !groupValues[selectedKey],
                    }
                  }
                  onUpdate(newValues)
                },
              }),
              index < options.length - 1 && jsx("hr", {
                className: "dropdown--optionGroupDivider--tmhsB",
              }),
            ],
          }, `${index}-group`),
        ),
      ],
    }),
    children: jsx(DropdownPreview, {
      onClick,
      dataOnboardingKey,
      label: currentLabel,
    }),
  })
}

export interface TooltipDropdownProps {
  preview: React.ReactNode
  children: React.ReactNode
}

/**
 * Tooltip dropdown component
 */
export function TooltipDropdown({ preview, children }: TooltipDropdownProps): JSX.Element {
  return jsx(HoverDropdown, {
    className: "dropdown--tooltip--Sh4Vu dropdown--dropdown--IX0tU text--fontPos14--OL9Hp text--_fontBase--QdLsd",
    preview,
    horizontalPosition: "center",
    children,
  })
}

// Export components with original names for backward compatibility
export const ms = DropdownBase
export const So = HoverDropdown
export const A5 = SelectDropdown
export const m_ = TooltipDropdown
