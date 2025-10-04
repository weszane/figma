import type { ForwardRefRenderFunction } from "react"
import { forwardRef } from "react"
import { jsx } from "react/jsx-runtime"
import { legend } from "../905/620622"
import { HiddenLegendPrimitive, LegendPrimitive } from "../905/865071"

interface LegendProps extends React.HTMLAttributes<HTMLLegendElement> {
  children?: React.ReactNode
}

interface HiddenLegendProps extends React.HTMLAttributes<HTMLLegendElement> {
  children?: React.ReactNode
}

const LegendComponent: ForwardRefRenderFunction<HTMLLegendElement, LegendProps> = (
  props,
  ref,
) => {
  return jsx(LegendPrimitive, {
    className: legend,
    ref,
    ...props,
  })
}

LegendComponent.displayName = "Legend"

const HiddenLegendComponent: ForwardRefRenderFunction<HTMLLegendElement, HiddenLegendProps> = (
  props,
  ref,
) => {
  return jsx(HiddenLegendPrimitive, {
    ref,
    ...props,
  })
}

HiddenLegendComponent.displayName = "HiddenLegend"

export const HiddenLegend = forwardRef(HiddenLegendComponent)
export const Legend = forwardRef(LegendComponent)
export const q = Legend
export const s = HiddenLegend
