import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { calculateTypography } from '../905/71149'
import { KindEnum } from '../905/129884'
import { getTextColor } from '../905/499018'
import { noop } from '../figma_app/465776'

/**
 * Interface for the props of the TextWithTruncation component.
 * Original component props inferred from usage.
 */
interface TextWithTruncationProps {
  fontFamily?: string
  fontSize?: number
  fontWeight?: string
  color?: string
  truncate?: boolean | string
  showTooltipWhenTruncated?: boolean
  lineClamp?: number
  children?: React.ReactNode
}

/**
 * Interface for the imperative handle exposed by TextWithTruncation.
 * Original: useImperativeHandle with isTruncated getter.
 */
interface TextWithTruncationHandle {
  isTruncated: boolean
}

/**
 * Helper function to check if an element is overflowing.
 * Original: function d(e, t)
 * @param element - The DOM element to check.
 * @param isVertical - Whether to check vertical overflow (for line-clamp).
 * @returns True if the element is overflowing.
 */
function isOverflowing(element: HTMLElement, isVertical: boolean): boolean {
  return isVertical ? element.scrollHeight > element.offsetHeight : element.scrollWidth > element.offsetWidth
}

/**
 * Helper function to get the numeric font weight from a string.
 * Original: inline switch in fontWeight assignment.
 * @param weight - The font weight string.
 * @returns The numeric font weight.
 */
function getFontWeight(weight: string): number {
  switch (weight) {
    case 'regular':
      return 400
    case 'medium':
      return 500
    case 'semi-bold':
      return 600
    case 'bold':
      return 700
    case 'extra-bold':
      return 800
    case 'black':
      return 900
    default:
      noop(weight)
      return 400
  }
}

/**
 * Helper function to get the font family string.
 * Original: inline switch in fontFamily assignment.
 * @param family - The font family string.
 * @returns The CSS font family value.
 */
function getFontFamily(family: string): string {
  const defaultFamily = 'Inter, sans-serif'
  switch (family) {
    case 'primary':
      return defaultFamily
    case 'monospace':
      return 'Roboto Mono, monospace'
    case 'whyte':
      return 'Whyte, sans-serif'
    case 'whyte-inktrap':
      return 'WhyteInktrap, sans-serif'
    default:
      noop(family)
      return defaultFamily
  }
}

/**
 * Helper function to get truncation styles.
 * Original: inline function for truncate styles.
 * @param truncateType - The type of truncation.
 * @returns The CSS styles object for truncation.
 */
function getTruncationStyles(truncateType: string): React.CSSProperties {
  const baseStyles: React.CSSProperties = {
    maxWidth: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
  switch (truncateType) {
    case 'end':
      return baseStyles
    case 'start':
      return {
        ...baseStyles,
        direction: 'rtl',
        textAlign: 'left',
      }
    default:
      noop(truncateType)
      return baseStyles
  }
}

/**
 * TextWithTruncation component: A React component that renders text with optional truncation and tooltip.
 * Original: $$c0 forwardRef function.
 * Supports font styling, truncation (ellipsis or line-clamp), and tooltips on hover when truncated.
 * @param props - The component props.
 * @param ref - The ref to expose imperative handle.
 * @returns The JSX element.
 */
export const TextWithTruncation = forwardRef<TextWithTruncationHandle, TextWithTruncationProps>((props, ref) => {
  const {
    fontFamily,
    fontSize,
    fontWeight,
    color,
    truncate,
    showTooltipWhenTruncated,
    lineClamp,
    children,
  } = props

  const spanRef = useRef<HTMLSpanElement>(null)

  useImperativeHandle(ref, () => ({
    get isTruncated() {
      const element = spanRef.current
      if (!element || !truncate)
        return false
      return isOverflowing(element, truncate === 'line-clamp')
    },
  }))

  const shouldShowTooltip = showTooltipWhenTruncated ?? !!truncate
  const [tooltipText, setTooltipText] = useState<string | null>(null)

  const handleMouseEnter = useCallback((event: React.MouseEvent<HTMLSpanElement>) => {
    const target = event.target as HTMLElement
    if (isOverflowing(target, truncate === 'line-clamp')) {
      setTooltipText(target.innerText)
    }
    else {
      setTooltipText(null)
    }
  }, [truncate])

  const styles: React.CSSProperties = {}

  if (fontSize) {
    Object.assign(styles, calculateTypography(fontSize))
  }
  if (fontWeight) {
    styles.fontWeight = getFontWeight(fontWeight)
  }
  if (color) {
    styles.color = getTextColor(color)
  }
  if (fontFamily) {
    styles.fontFamily = getFontFamily(fontFamily)
  }
  if (truncate && truncate !== 'line-clamp') {
    const truncateType = truncate === true ? 'end' : truncate
    Object.assign(styles, getTruncationStyles(truncateType))
  }
  if (truncate === 'line-clamp' && lineClamp) {
    Object.assign(styles, {
      maxWidth: '100%',
      overflow: 'hidden',
      display: '-webkit-inline-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: lineClamp,
    })
  }

  return jsxs('span', {
    'ref': spanRef,
    'style': styles,
    'onMouseEnter': shouldShowTooltip ? handleMouseEnter : undefined,
    'data-tooltip-type': shouldShowTooltip ? KindEnum.TEXT : undefined,
    'data-tooltip': shouldShowTooltip ? tooltipText : undefined,
    'children': [
      children,
      styles.direction === 'rtl' ? jsx(Fragment, { children: '\u200E' }) : null,
    ],
  })
})

TextWithTruncation.displayName = 'TextWithTruncation'

// Original export: export const EY = $$c0;
// Refactored to match new component name.
export const EY = TextWithTruncation
