
import { useId } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { Label } from "../905/270045"
import { SelectContainer, SelectGroup, SelectGroupLabel, SelectOption, SelectOptionReset } from "../905/493196"

interface SelectOptionType {
  value: string | number
  label: string
}

interface DSASelectProps {
  labelContent: string
  onChange: (value: string | number) => void
  value: string | number | undefined
  options: SelectOptionType[]
  placeholder?: string
  resetOption?: React.ReactNode
}

export function DSASelect({
  labelContent,
  onChange,
  value,
  options,
  placeholder,
  resetOption,
}: DSASelectProps) {
  const selectId = useId()

  return jsxs("div", {
    className: "dsa_select--dsaSelectWrapper--ttncF",
    children: [
      jsx(Label, {
        htmlFor: selectId,
        className: "dsa_select--dsaSelectLabel--aAGpR text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: labelContent,
      }),
      jsx("div", {
        className: "dsa_select--dsaSelect--zOQFX",
        children: jsxs(SelectGroupLabel, {
          value,
          onChange,
          children: [
            jsx(SelectOption, {
              id: selectId,
              width: "fill",
              placeholder,
            }),
            jsxs(SelectContainer, {
              children: [
                resetOption
                  ? jsx(SelectGroup, {
                    children: resetOption,
                  })
                  : null,
                options.map(option =>
                  jsx(
                    SelectOptionReset,
                    {
                      value: option.value,
                      children: option.label,
                    },
                    option.value,
                  ),
                ),
              ],
            }),
          ],
        }),
      }),
    ],
  })
}

// Original code name preserved in export
export const h = DSASelect
