import classNames from "classnames"
import { forwardRef, useEffect, useId, useImperativeHandle, useRef } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { w } from "../905/442596"
import { l as _$$l } from "../905/479687"
import { RecordableInput } from "../905/511649"
import { TextWithTruncation } from "../905/838445"
import { A as _$$A } from "../6828/482039"
import { A } from "../6828/954206"

// Props interface for the checkbox component
interface CheckboxProps {
  label?: string
  description?: string
  checked?: boolean
  mixed?: boolean
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  recordingKey?: string
  truncateLabel?: Partial<React.ComponentProps<typeof TextWithTruncation>>
}

export let RenderRefCheckbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    label,
    description,
    checked = false,
    mixed = false,
    disabled,
    onChange,
    onKeyDown,
    recordingKey,
  } = props

  // Ref for the input element
  const inputRef = useRef<HTMLInputElement>(null)

  // Expose the input element to parent components
  useImperativeHandle(ref, () => inputRef.current!)

  // Update the indeterminate state when mixed changes
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = mixed
    }
  }, [mixed])

  // Generate unique IDs for accessibility
  const uniqueId = useId()
  const checkboxId = `${uniqueId}-check`
  const descriptionId = `${uniqueId}-desc`

  // Determine which icon to show based on state
  const IconComponent = mixed ? _$$A : checked ? A : null

  return jsxs("div", {
    className: "checkbox--checkLabelDescriptionContainer--NjaZ4",
    children: [
      jsxs("div", {
        className: "checkbox--checkAndLabelContainer--v09nP",
        children: [
          jsxs("div", {
            className: "checkbox--checkWrapper--nHmJ0",
            children: [
              jsx(RecordableInput, {
                "aria-describedby": description ? descriptionId : undefined,
                checked,
                "className": classNames("checkbox--input--dQMU-", {
                  "checkbox--filled--WJH3o": checked || mixed,
                }),
                disabled,
                "forwardedRef": inputRef,
                "id": checkboxId,
                onChange,
                onKeyDown,
                recordingKey,
                "type": "checkbox",
              }),
              IconComponent && jsx("div", {
                "className": "checkbox--svg---GjIJ",
                "aria-hidden": true,
                "children": mixed ? jsx(w, {}) : jsx(_$$l, {}),
              }),
            ],
          }),
          label && jsx("label", {
            className: "checkbox--label--ev6kh",
            htmlFor: checkboxId,
            children: jsx(TextWithTruncation, {
              ...(props.truncateLabel ?? {}),
              fontSize: 11,
              color: disabled ? "disabled" : "default",
              children: label,
            }),
          }),
        ],
      }),
      description && jsx("div", {
        className: "checkbox--description--AZF1u",
        id: descriptionId,
        children: jsx(TextWithTruncation, {
          fontSize: 11,
          color: disabled ? "disabled" : "secondary",
          children: description,
        }),
      }),
    ],
  })
})

// Maintain the original export name
export const S = RenderRefCheckbox
