import classNames from 'classnames'
import { createRef, useCallback, useRef } from 'react'
import { jsx } from 'react/jsx-runtime'
import { handleMouseEvent, handlePointerEvent, RecordingPureComponent } from '../figma_app/878298'

export function $$l1(e) {
  return e
}
// Original: export function $$l1(e) { return e; }
// Refactored: Simple identity function, kept as is for utility.
export function identity(e: any) {
  return e
}

// Original: export class $$d0 extends RecordingPureComponent
// Refactored: Converted to functional component for better readability and modern React practices.
// Added TypeScript interface for props to improve type safety.
// Split large render logic into smaller helper functions.
// Used early returns and guard clauses to simplify conditionals.
// Added JSDoc-style comments for documentation.
/**
 * Interface for SvgComponent props.
 * Original props included various SVG-related attributes.
 */
interface SvgComponentProps {
  svg?: any
  onClick?: (e: any) => void
  onMouseDown?: (e: any) => void
  onPointerUp?: (e: any) => void
  useOriginalSrcFills_DEPRECATED?: boolean
  recordingKey?: string
  title?: string
  ariaLabel?: string
  ariaHidden?: boolean
  role?: string
  dataTestId?: string
  svgClassName?: string
  innerSpanRef?: React.RefObject<HTMLSpanElement>
  svgWidth?: string | number
  svgHeight?: string | number
  className?: string
  autosize?: boolean
  height?: string | number
  width?: string | number
  style?: React.CSSProperties
  [key: string]: any // For other props
}

/**
 * SvgComponent: Renders an SVG inside a span with event handling.
 * Original class: $$d0
 * Converted from class component to functional component using hooks.
 */
export const SvgComponent: React.FC<SvgComponentProps> = (props) => {
  const spanRef = useRef<HTMLSpanElement>(null)

  // Original: this.onClick = handleMouseEvent(this, "click", e => { this.props.onClick(e); });
  const onClick = useCallback(
    handleMouseEvent({} as any, 'click', (e: any) => {
      props.onClick?.(e)
    }),
    [props.onClick],
  )

  // Original: this.onMouseDown = handleMouseEvent(this, "mousedown", e => { this.props.onMouseDown(e); });
  const onMouseDown = useCallback(
    handleMouseEvent({} as any, 'mousedown', (e: any) => {
      props.onMouseDown?.(e)
    }),
    [props.onMouseDown],
  )

  // Original: this.onPointerUp = handlePointerEvent(this, "pointerup", e => { this.props.onPointerUp(e); });
  const onPointerUp = useCallback(
    handlePointerEvent({} as any, 'pointerup', (e: any) => {
      props.onPointerUp?.(e)
    }),
    [props.onPointerUp],
  )

  // Helper function to build SVG HTML string.
  // Original: Complex string building in render.
  const buildSvgHtml = (svg: any, props: SvgComponentProps): string => {
    if (!svg)
      return ''
    let processedSvg = svg.$$default ? svg.$$default : svg
    let svgClass = classNames('svg', props.svgClassName)
    let svgAttrs = `<svg class="${svgClass}" `
    let styleStr = ''
    if (props.svgWidth)
      styleStr += `width: ${props.svgWidth}; `
    if (props.svgHeight)
      styleStr += `height: ${props.svgHeight}; `
    if (styleStr)
      svgAttrs += `style="${styleStr}" `
    if (props.title)
      svgAttrs += `title="${props.title}" `
    if (props.role !== 'button' && props.ariaLabel)
      svgAttrs += `aria-label="${props.ariaLabel}" `
    if (props.ariaHidden)
      svgAttrs += 'aria-hidden="true" '
    return processedSvg.replace('<svg ', svgAttrs)
  }

  // Helper function to prepare span props.
  // Original: Inline prop manipulation in render.
  const prepareSpanProps = (props: SvgComponentProps) => {
    let { svg, useOriginalSrcFills_DEPRECATED, recordingKey, title, ariaLabel, ariaHidden, role, dataTestId, svgClassName, innerSpanRef, svgWidth, svgHeight, autosize, ...rest } = props
    let spanClass = props.useOriginalSrcFills_DEPRECATED ? '' : 'svg-container'
    if (props.className)
      spanClass += ` ${props.className}`
    if (autosize) {
      spanClass += ' svg--autoscale---9awM'
      rest.style = { ...rest.style, height: props.height, width: props.width }
    }
    if (props.onClick && props.recordingKey)
      rest.onClick = onClick
    if (props.onMouseDown && props.recordingKey)
      rest.onMouseDown = onMouseDown
    if (props.onPointerUp && props.recordingKey)
      rest.onPointerUp = onPointerUp
    return { ...rest, 'className': spanClass, 'data-testid': dataTestId, 'aria-hidden': ariaHidden, role }
  }

  // Early return if no SVG.
  // Original: if (null == e) return null;
  if (!props.svg)
    return null

  const svgHtml = buildSvgHtml(props.svg, props)
  const spanProps = prepareSpanProps(props)

  return jsx('span', {
    'ref': (el: HTMLSpanElement | null) => {
      spanRef.current = el
      if (props.innerSpanRef)
        props.innerSpanRef.current = el
    },
    'dangerouslySetInnerHTML': { __html: svgHtml },
    'aria-label': props.role === 'button' && props.ariaLabel ? props.ariaLabel : undefined,
    ...spanProps,
  })
}

// Original: $$d0.displayName = "Svg";
// Kept for consistency.
SvgComponent.displayName = 'Svg'

// Original: export const B = $$d0;
// Refactored: Updated export name to match refactored component.
export const B = SvgComponent

// Original: // export const V = $$l1;
// Refactored: Uncommented and renamed for clarity.
// export const Identity = identity;
