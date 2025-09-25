import { createElement, forwardRef, useContext } from 'react'
import { normalizeProps } from '../905/202646'
import { getBlendMode, getConstraintPositioning, getEffectsStyle, getFill, getOpacity, getResetStyles, getVisibility } from '../905/436288'
import { mergeProps } from '../905/545833'
import { getDefaultLineProps } from '../905/712000'
import { css, getInvalidFillParentCheckerRef, isAutoLayout, mergeRefs, ParentContext, warnInvalidConstraints } from '../figma_app/706870'

interface LineProps {
  direction: 'horizontal' | 'vertical'
  length: number | 'fill-parent'
  strokeWidth: number
  stroke: any[]
  effect?: any
  name?: string
  [key: string]: any
}

interface StyleResult {
  style: Record<string, any>
  wrapperStyle?: Record<string, any>
}

/**
 * Calculates styles for a line component based on its properties and parent context
 * Original function name: c
 * @param props - Line properties
 * @param parent - Parent context
 * @returns Style configuration object
 */
function calculateLineStyle(props: LineProps, parent: any): StyleResult {
  const isHorizontal = props.direction === 'horizontal'
  const isFillParent = props.length === 'fill-parent'
  const strokeWidthPx = `${props.strokeWidth.toFixed(2)}px`

  // Base styles combining multiple style utilities
  const baseStyles = {
    ...getResetStyles(),
    ...getFill(props.stroke),
    ...getBlendMode(props),
    ...getOpacity(props),
    ...getEffectsStyle(props.effect),
    ...getVisibility(props),
  }

  // Case 1: No parent and fill-parent length
  if (!parent && isFillParent) {
    const width = isHorizontal ? '100%' : strokeWidthPx
    const height = isHorizontal ? strokeWidthPx : '100%'

    return {
      style: {
        ...baseStyles,
        width,
        height,
        ...getConstraintPositioning(props),
      },
    }
  }

  // Case 2: No parent or non-auto layout parent
  if (!parent || !isAutoLayout(parent)) {
    const width = isHorizontal ? props.length : props.strokeWidth
    const height = isHorizontal ? props.strokeWidth : props.length

    return {
      style: {
        ...baseStyles,
        width: `${width}px`,
        height: `${height}px`,
        ...getConstraintPositioning(props),
      },
    }
  }

  // Case 3: Auto-layout parent
  const parentDirection = isAutoLayout(parent) ? parent.props.direction : undefined

  const wrapperStyles: Record<string, any> = {
    overflow: 'visible',
  }

  const lineStyles: Record<string, any> = {
    ...baseStyles,
    position: 'relative',
  }

  // Configure styles based on orientation
  if (isHorizontal) {
    lineStyles.top = `${-props.strokeWidth}px`
    lineStyles.height = strokeWidthPx
    wrapperStyles.height = '0px'
  }
  else {
    lineStyles.width = strokeWidthPx
    wrapperStyles.width = '0px'
  }

  // Configure based on direction alignment with parent
  if (props.direction === parentDirection) {
    if (isFillParent) {
      wrapperStyles.flexGrow = 1
    }

    if (isHorizontal) {
      lineStyles.width = '100%'
      wrapperStyles.width = isFillParent ? undefined : `${props.length}px`
    }
    else {
      lineStyles.height = '100%'
      wrapperStyles.height = isFillParent ? undefined : `${props.length}px`
    }

    return {
      wrapperStyle: wrapperStyles,
      style: lineStyles,
    }
  }
  else {
    if (isHorizontal) {
      lineStyles.width = '100%'
      wrapperStyles.alignSelf = isFillParent ? 'stretch' : undefined
      wrapperStyles.width = isFillParent ? undefined : `${props.length}px`
    }
    else {
      lineStyles.height = '100%'
      wrapperStyles.alignSelf = isFillParent ? 'stretch' : undefined
      wrapperStyles.height = isFillParent ? undefined : `${props.length}px`
    }

    return {
      style: lineStyles,
      wrapperStyle: wrapperStyles,
    }
  }
}

export const styleForLine = calculateLineStyle

/**
 * Line component that renders a horizontal or vertical line
 * Original component: forwardRef anonymous function
 */
export const Line = forwardRef((props, ref) => {
  const {
    attributes = {},
    children,
    ...restProps
  } = props

  const parentContext = useContext(ParentContext)

  // Validate constraints
  warnInvalidConstraints({
    ...restProps,
    parent: parentContext,
  })

  // Normalize props with defaults
  const normalizedProps = normalizeProps({
    ...getDefaultLineProps(),
    stroke: [],
    ...restProps,
  })

  // Validate fill parent context
  const fillParentCheckerRef = getInvalidFillParentCheckerRef({
    ...normalizedProps,
    parent: parentContext,
  })

  // Calculate styles
  const { style, wrapperStyle } = calculateLineStyle(normalizedProps, parentContext)

  // Create the line element
  const lineElement = createElement('div', {
    'data-layer': normalizedProps.name,
    'ref': mergeRefs([fillParentCheckerRef, ref]),
    ...mergeProps({
      className: css(style),
    }, attributes),
  })

  // Wrap in container if needed
  return wrapperStyle
    ? createElement('div', {
        className: css(wrapperStyle),
      }, lineElement)
    : lineElement
})
