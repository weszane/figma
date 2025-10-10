import type { ReactNode } from "react"
import classNames from "classnames"
import { forwardRef, Ref } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { Description } from "../905/21985"
import { getThemeContextOrDefault } from "../905/158740"
import { useTheme } from "../905/289770"
import { a as ArrowUpIcon } from "../905/339331"
import { SelectPrimitiveContainer, SelectPrimitiveGroup, SelectPrimitiveGroupLabel, SelectPrimitiveOption, SelectPrimitiveRoot, SelectPrimitiveScrollArrow, SelectPrimitiveTrigger, useSelectPrimitiveState } from "../905/408073"
import { l as CheckIcon } from "../905/479687"
import { r as ArrowDownIcon } from "../905/571562"
import { setupThemeContext } from "../905/614223"
import { useSelectionProvider } from "../905/751750"
import { generateInputId } from "../905/786321"
import { useDarkContext } from "../figma_app/215667"
import { useFplStrings } from "../figma_app/415899"
// Refactored for readability, type safety, and clarity.
// Renamed variables, added TypeScript types, simplified logic, and added comments.

// CSS class name mappings
const cssClasses = {
  container: "select__container__bEPx-",
  dark: "select__dark__z2S-S",
  fill: "select__fill__5eps8",
  group: "select__group__6-RCX",
  groupLabel: "select__groupLabel__mTJxS",
  hug: "select__hug__xpOwt",
  inputGroup: "select__inputGroup__SFgrR",
  lead: "select__lead__9Wz1o",
  lg: "select__lg__O-bfN",
  light: "select__light__ZPzTt",
  md: "select__md__bE-kQ",
  option: "select__option__p8RMn",
  optionIcon: "select__optionIcon__Gg4OF",
  optionInner: "select__optionInner__dN2u1",
  optionText: "select__optionText__iI1Gx",
  scrollArrow: "select__scrollArrow__nfZxe",
  separator: "select__separator__Esj5N",
  trigger: "select__trigger__r1rqC",
  triggerContainer: "select__triggerContainer__69alI",
  triggerContent: "select__triggerContent__ZmjT4",
}

// Select Container Component
export const SelectContainer = forwardRef<
  HTMLDivElement,
  { children?: ReactNode } & React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  const darkMode = useDarkContext()
  const { color } = useTheme()

  const themeClass = darkMode === "dark" || color === "dark" ? cssClasses.dark : cssClasses.light

  return jsx(SelectPrimitiveContainer, {
    className: classNames(cssClasses.container, themeClass),
    ...props,
    ref,
    children: jsxs(setupThemeContext, {
      mode: darkMode === "dark" ? "dark" : undefined,
      children: [
        children,
        jsx(SelectPrimitiveScrollArrow, {
          className: cssClasses.scrollArrow,
          direction: "up",
          children: jsx(ArrowUpIcon, {}),
        }),
        jsx(SelectPrimitiveScrollArrow, {
          className: cssClasses.scrollArrow,
          direction: "down",
          children: jsx(ArrowDownIcon, {}),
        }),
      ],
    }),
  })
})
SelectContainer.displayName = "Select.Container"

// Select Trigger Component
export const SelectManuallyLabeledTrigger = forwardRef<
  HTMLButtonElement,
  {
    placeholder?: string
    children?: ReactNode
    iconLead?: ReactNode
    width?: "hug" | "fill"
    size?: "md" | "lg"
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ placeholder, children, iconLead, width = "hug", size = "md", ...props }, ref) => {
  const { selectedItem } = useSelectPrimitiveState()
  const placeholderText = useFplStrings("select")
  const { version } = getThemeContextOrDefault()

  const displayText = selectedItem ? selectedItem.label : placeholder ?? placeholderText

  return jsxs(SelectPrimitiveTrigger, {
    ...props,
    className: classNames(cssClasses.trigger, cssClasses[width], cssClasses[size]),
    ref,
    children: [
      iconLead
      && jsx("span", {
        className: cssClasses.lead,
        children: iconLead,
      }),
      jsxs("div", {
        className: cssClasses.triggerContainer,
        children: [
          jsx("span", {
            className: cssClasses.triggerContent,
            children: children ?? displayText,
          }),
          version === "ui3" ? jsx(ArrowDownIcon, {}) : jsx(DownArrowLegacyIcon, {}),
        ],
      }),
    ],
  })
})
SelectManuallyLabeledTrigger.displayName = "Select.ManuallyLabeledTrigger"

// Select Trigger with Label
export const SelectTrigger = forwardRef<
  HTMLButtonElement,
  {
    label?: ReactNode
    description?: ReactNode
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ label, description, ...props }, ref) => {
  const [id, Provider] = useSelectionProvider()
  const inputId = generateInputId(id)

  return jsx(Provider, {
    value: id,
    children: jsxs("div", {
      className: cssClasses.inputGroup,
      children: [
        label,
        jsx(SelectManuallyLabeledTrigger, {
          id: inputId,
          ...props,
          ref,
        }),
        description
        && jsx(Description, {
          children: description,
        }),
      ],
    }),
  })
})
SelectTrigger.displayName = "Select.Trigger"

// Base Option Component
const SelectOptionBase = forwardRef<
  HTMLDivElement,
  { children?: ReactNode } & React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  const { version } = getThemeContextOrDefault()

  return jsx(SelectPrimitiveOption, {
    className: cssClasses.option,
    ...props,
    ref,
    children: jsxs("span", {
      className: cssClasses.optionInner,
      children: [
        version === "ui3" ? jsx(CheckIcon, { "aria-hidden": true, "className": cssClasses.optionIcon }) : jsx(CheckLegacyIcon, { "aria-hidden": true, "className": cssClasses.optionIcon }),
        jsx("span", {
          className: cssClasses.optionText,
          children,
        }),
      ],
    }),
  })
})
SelectOptionBase.displayName = "Select.OptionBase"

// Select Option
export const SelectOption = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => jsx(SelectOptionBase, { ...props, ref }))
SelectOption.displayName = "Select.Option"

// Select Option Reset
export const SelectOptionReset = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => jsx(SelectOptionBase, { ...props, ref }))
SelectOptionReset.displayName = "Select.OptionReset"

// Select Group
export const SelectGroup = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => jsx(SelectPrimitiveGroup, { className: cssClasses.group, ref, ...props }))
SelectGroup.displayName = "Select.Group"

// Select Group Label
export const SelectGroupLabel = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => jsx(SelectPrimitiveGroupLabel, { className: cssClasses.groupLabel, ref, ...props }))
SelectGroupLabel.displayName = "Select.GroupLabel"

// Select Lead Icon Wrapper
const SelectLead = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>((props, ref) =>
  jsx("span", { className: cssClasses.lead, ref, ...props }),
)
SelectLead.displayName = "Select.Lead"

// Select Root
export function SelectRoot(props: React.ComponentProps<typeof SelectPrimitiveRoot>) {
  return jsx(SelectPrimitiveRoot, {
    ...props,
    offsetAmount: 8,
    padding: {
      top: 12,
      bottom: 12,
      left: 8,
      right: 8,
    },
  })
}
SelectRoot.displayName = "Select.Root"

// Select Separator
export function SelectSeparator() {
  return jsx("li", {
    className: cssClasses.separator,
    role: "separator",
  })
}
SelectSeparator.displayName = "Select.Separator"

// Legacy Icons
function CheckLegacyIcon(props: React.SVGProps<SVGSVGElement>) {
  return jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    ...props,
    children: jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.2069 5.20724L7.70694 10.7072L6.99983 11.4144L6.29272 10.7072L3.29272 7.70724L4.70694 6.29303L6.99983 8.58592L11.7927 3.79303L13.2069 5.20724Z",
      fill: "var(--color-icon)",
    }),
  })
}

function DownArrowLegacyIcon() {
  return jsx("svg", {
    width: "8",
    height: "8",
    viewBox: "0 0 8 8",
    children: jsx("path", {
      d: "M.646 3.354l.708-.708L4 5.293l2.646-2.647.708.708L4 6.707.646 3.354z",
      fillRule: "nonzero",
      fillOpacity: "1",
      fill: "var(--select-icon)",
      stroke: "none",
    }),
  })
}

// Additional legacy aliases
export const mc = SelectContainer
export const YJ = SelectManuallyLabeledTrigger
export const WL = SelectTrigger
export const DZ = SelectOption
export const c$ = SelectOptionReset
export const zW = SelectGroup
export const bL = SelectGroupLabel
export const wv = SelectRoot
export const l9 = SelectSeparator
