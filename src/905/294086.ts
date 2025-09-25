import classNames from 'classnames'
import { forwardRef } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { a as SVG } from '../905/339331'
import { r as SVG1 } from '../905/571562'
import { ButtonPrimitive } from '../905/632989'
import { areValuesEqual, handleParseWithError, performNudge } from '../905/687992'
import { identity, toPixels } from '../905/893109'
import { preventEvent } from '../905/955878'

const StackRow = forwardRef<HTMLDivElement, StackProps>(({
  fill,
  gap = 0,
  wrap,
  align,
  justify,
  className,
  style,
  ...restProps
}, ref) => jsx('div', {
  ref,
  className: classNames('stack__row__-rJHV', className, {
    stack__fill__6NGzz: fill,
  }),
  style: {
    ...style,
    gap: typeof gap === 'number' ? toPixels(gap) : gap,
    [identity('--wrap')]: wrap ? 'wrap' : 'nowrap',
    justifyContent: justify,
    alignItems: align,
  },
  ...restProps,
}))
StackRow.displayName = 'Stack.Row'

const StackCol = forwardRef<HTMLDivElement, StackProps>(({
  fill,
  gap = 0,
  wrap,
  align,
  justify,
  className,
  style,
  ...restProps
}, ref) => jsx('div', {
  ref,
  className: classNames('stack__col__4xLd-', className, {
    stack__fill__6NGzz: fill,
  }),
  style: {
    ...style,
    gap: typeof gap === 'number' ? toPixels(gap) : gap,
    [identity('--wrap')]: wrap ? 'wrap' : 'nowrap',
    justifyContent: justify,
    alignItems: align,
  },
  ...restProps,
}))
StackCol.displayName = 'Stack.Col'

interface StackProps {
  fill?: boolean
  gap?: number | string
  wrap?: boolean
  align?: string
  justify?: string
  className?: string
  style?: React.CSSProperties
  [key: string]: any
}

interface StepperProps {
  value: any
  getStringValue: () => string
  formatter: {
    min?: any
    max?: any
    parse?: (value: string) => any
    nudge?: (value: any, delta: number, options: { big: boolean }) => any
  }
  onChange?: (value: any) => void
  onChangeRestricted?: (preClamped: any, options: { value: any }) => void
}

const Stepper = forwardRef<HTMLDivElement, StepperProps>(({
  value,
  getStringValue,
  formatter,
  onChange,
  onChangeRestricted,
}, ref) => {
  const { min, max } = formatter

  const handleNudge = (event: React.MouseEvent, direction: number) => {
    event.preventDefault()
    const isBigStep = event.shiftKey
    const stringValue = getStringValue()
    const parseResult = handleParseWithError(formatter, stringValue, value, 'nudge', event)

    if (parseResult == null) {
      return
    }

    const performNudgeOperation = (currentValue: any) => performNudge(formatter, currentValue, direction, {
      big: isBigStep,
    })

    if (parseResult.callback) {
      parseResult.callback((currentValue: any) => performNudgeOperation(currentValue).value, {
        commit: true,
      })
      return
    }

    const nudgeResult = performNudgeOperation(value)
    if (!areValuesEqual(formatter, value, nudgeResult.value)) {
      onChange?.(nudgeResult.value)
    }

    if (nudgeResult.value !== nudgeResult.preClamped) {
      onChangeRestricted?.(nudgeResult.preClamped, {
        value: nudgeResult.value,
      })
    }
  }

  const buttonAttributes = {
    tabIndex: -1,
    onPointerDown: preventEvent,
  }

  return jsxs(StackCol, {
    ref,
    children: [
      jsx(ButtonPrimitive, {
        className: 'stepper__up__z53LA',
        onClick: e => handleNudge(e, 1),
        disabled: max != null && areValuesEqual(formatter, value, max),
        htmlAttributes: buttonAttributes,
        children: jsx(SVG, {}),
      }),
      jsx(ButtonPrimitive, {
        className: 'stepper__down__zob3i',
        onClick: e => handleNudge(e, -1),
        disabled: min != null && areValuesEqual(formatter, value, min),
        htmlAttributes: buttonAttributes,
        children: jsx(SVG1, {}),
      }),
    ],
  })
})

Stepper.displayName = 'Stepper'
export { StackCol, StackRow, Stepper }
export const C = Stepper
