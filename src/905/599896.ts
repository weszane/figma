import classNames from 'classnames'
import { noop } from 'lodash-es'
import { forwardRef, useCallback } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'

import { KeyCodes } from '../905/63728'
import { In } from '../905/672640'
import { TextWithTruncation } from '../905/984674'
import { withTrackedClick } from '../figma_app/831799'
import { useHandleMouseEvent } from '../figma_app/878298'

interface ButtonProps {
  'variant'?: 'primary' | 'secondary' | 'destructive' | 'destructive-secondary' | 'success' | 'inverse' | 'text' | 'toolbar-secondary' | 'brand-secondary' | 'link-onbrand' | 'primary-onbrand'
  'disabled'?: boolean
  'onClick'?: (event: React.MouseEvent<HTMLButtonElement>) => void
  'onMouseDown'?: (event: React.MouseEvent<HTMLButtonElement>) => void
  'onKeyDown'?: (event: React.KeyboardEvent<HTMLButtonElement>) => void
  'icon'?: React.ReactNode
  'recordingKey'?: string
  'children'?: React.ReactNode
  'onFocus'?: (event: React.FocusEvent<HTMLButtonElement>) => void
  'onBlur'?: (event: React.FocusEvent<HTMLButtonElement>) => void
  'width'?: 'hug-contents' | 'fill-parent'
  'data-tooltip'?: string
  'data-tooltip-type'?: string
  'data-onboarding-key'?: string
  'data-tooltip-show-above'?: boolean
  'data-tooltip-max-width'?: number
  'dataTestId'?: string
  'ariaLabel'?: string
}

/**
 * Button component - A customizable button with various styles and behaviors
 * Original component name: $$h0
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'secondary',
  disabled,
  onClick,
  onMouseDown,
  onKeyDown,
  icon,
  recordingKey,
  children,
  onFocus,
  onBlur,
  width = 'hug-contents',
  'data-tooltip': dataTooltip,
  'data-tooltip-type': dataTooltipType,
  'data-onboarding-key': dataOnboardingKey,
  'data-tooltip-show-above': dataTooltipShowAbove,
  'data-tooltip-max-width': dataTooltipMaxWidth,
  dataTestId,
  ariaLabel,
}, ref) => {
  // Handle mouse events with recording key support
  const handleClick = useHandleMouseEvent(recordingKey, 'click', onClick || noop)
  const effectiveClickHandler = recordingKey ? handleClick : onClick

  const handleMouseDown = useHandleMouseEvent(recordingKey, 'mousedown', onMouseDown || noop)
  const effectiveMouseDownHandler = recordingKey ? handleMouseDown : onMouseDown

  // Handle escape key to blur the button
  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event)
    if (event.keyCode === KeyCodes.ESCAPE) {
      event.currentTarget.blur()
    }
  }, [onKeyDown])

  /**
   * Generate CSS class names based on button variant and width
   * Original function: anonymous className generator
   */
  const generateClassNames = ({
    variant,
    width,
    children,
  }: {
    variant: ButtonProps['variant']
    width: ButtonProps['width']
    children: ButtonProps['children']
  }): string => {
    const baseClasses = ['button--buttonBase---72nl']

    // Add variant-specific classes
    switch (variant) {
      case 'primary':
        baseClasses.push('button--buttonPrimary--aSV3W')
        break
      case 'destructive':
        baseClasses.push('button--buttonDestructive--Ag192')
        break
      case 'destructive-secondary':
        baseClasses.push('button--buttonDestructiveSecondary--nCZkp')
        break
      case 'success':
        baseClasses.push('button--buttonSuccess--1znF7')
        break
      case 'inverse':
        baseClasses.push('button--buttonInverse--b8YTG')
        break
      case 'text':
        baseClasses.push('button--buttonText--Mia-x')
        break
      case 'toolbar-secondary':
        baseClasses.push('button--buttonToolbarSecondary--mgdBQ')
        break
      case 'brand-secondary':
        baseClasses.push('button--buttonBrandSecondary--UU8iZ')
        break
      case 'link-onbrand':
        baseClasses.push('button--buttonLinkOnbrand--YX8iS')
        break
      case 'primary-onbrand':
        baseClasses.push('button--buttonPrimaryOnbrand--6QUwl')
        break
      default:
        baseClasses.push('button--buttonSecondary--mWMny')
    }

    // Add width-specific classes
    if (!children) {
      baseClasses.push('button--withNoChildren--F44Yb')
    }

    switch (width) {
      case 'hug-contents':
        baseClasses.push('button--buttonHugContents--utQBt')
        break
      case 'fill-parent':
        baseClasses.push('button--buttonFillParent--p-W8Y')
    }

    return classNames(baseClasses)
  }

  /**
   * Determine font weight based on variant
   * Original function: anonymous fontWeight calculator
   */
  const getFontWeight = (variant: ButtonProps['variant'], hasChildren: boolean): 'regular' | 'medium' | undefined => {
    const boldVariants = [
      'primary',
      'destructive',
      'inverse',
      'success',
      'link-onbrand',
      'primary-onbrand',
    ]

    if (boldVariants.includes(variant as any)) {
      return hasChildren ? undefined : 'medium'
    }
    return 'regular'
  }

  return jsxs('button', {
    ref,
    'aria-label': ariaLabel,
    'className': generateClassNames({
      variant,
      width,
      children,
    }),
    'data-onboarding-key': dataOnboardingKey,
    'data-testid': dataTestId,
    'data-tooltip': dataTooltip,
    'data-tooltip-max-width': dataTooltipMaxWidth,
    'data-tooltip-show-above': dataTooltipShowAbove,
    'data-tooltip-type': dataTooltipType,
    disabled,
    onBlur,
    'onClick': effectiveClickHandler,
    onFocus,
    'onKeyDown': handleKeyDown,
    'onMouseDown': effectiveMouseDownHandler,
    'children': [
      icon && jsx('div', {
        className: 'button--iconContainer--2AGfA',
        children: jsx(In, {
          icon,
        }),
      }),
      children && jsx(TextWithTruncation, {
        fontSize: 11,
        fontWeight: getFontWeight(variant, !!children),
        truncate: true,
        children,
      }),
    ],
  })
})

Button.displayName = 'Button'

/**
 * Button with tracked click functionality
 * Original component name: $$g1
 */
export const TrackedButton = withTrackedClick(props => jsx(Button, {
  ...props,
}))

// Export aliases for backward compatibility
export const $$h0 = Button
export const $$g1 = TrackedButton
export const $n = Button
export const $z = TrackedButton
