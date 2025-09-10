import { InternalError } from '../905/845428'

// Check if element is a frame type
export function isFrameType(element: any): boolean {
  return ['frame', 'inputframe', 'autolayout'].includes(element.type)
}

// Handle element sizing and layout properties
export function handleElementSizing(element: any, target: any, layoutMode: any) {
  if (!element)
    return

  const { width, height } = element.renderMetaData

  // Handle numeric dimensions
  if (typeof width === 'number' || typeof height === 'number') {
    if (isFrameType(element)) {
      handleAxisSizing(element, target, width, height)
    }

    const minHeight = element.type === 'line' ? 0 : 0.01
    const finalWidth = typeof width === 'number' ? width : target.getSize().width || 0.01
    const finalHeight = typeof height === 'number' ? height : target.getSize().height || minHeight

    target.resize(finalWidth, finalHeight)
  }

  // Handle horizontal layout
  handleLayoutDimension(element, target, width, 'horizontal', layoutMode)

  // Handle vertical layout
  handleLayoutDimension(element, target, height, 'vertical', layoutMode)
}

function handleAxisSizing(element: any, target: any, width: any, height: any) {
  const { direction } = element.renderMetaData

  if (typeof width === 'number') {
    if (direction === 'horizontal')
      target.writeProperty('primaryAxisSizingMode', 'FIXED')
    if (direction === 'vertical')
      target.writeProperty('counterAxisSizingMode', 'FIXED')
  }

  if (typeof height === 'number') {
    if (direction === 'horizontal')
      target.writeProperty('counterAxisSizingMode', 'FIXED')
    if (direction === 'vertical')
      target.writeProperty('primaryAxisSizingMode', 'FIXED')
  }
}

function handleLayoutDimension(element: any, target: any, size: any, axis: 'horizontal' | 'vertical', layoutMode: any) {
  const isHorizontal = axis === 'horizontal'
  const sizingProperty = `layoutSizing${axis.charAt(0).toUpperCase() + axis.slice(1)}`

  try {
    if (size === 'fill-parent') {
      target.writeProperty(sizingProperty, 'FILL')
    }
    else if (size === 'hug-contents' && isFrameType(element)) {
      target.writeProperty(sizingProperty, 'HUG')
    }
  }
  catch {
    handleFallbackLayout(element, target, size, isHorizontal, layoutMode)
  }
}

function handleFallbackLayout(element: any, target: any, size: any, isHorizontal: boolean, layoutMode: any) {
  if (size === 'fill-parent') {
    if (layoutMode === (isHorizontal ? 'HORIZONTAL' : 'VERTICAL')) {
      target.writeProperty('layoutGrow', 1)
    }
    else {
      target.writeProperty('layoutAlign', 'STRETCH')
      isFrameType(element) && target.writeProperty('primaryAxisSizingMode', 'FIXED')
    }
  }
  else if (size === 'hug-contents' && isFrameType(element)) {
    const mode = element.props.layoutMode
    if (isHorizontal) {
      mode === 'HORIZONTAL'
        ? target.writeProperty('primaryAxisSizingMode', 'AUTO')
        : mode === 'VERTICAL' && target.writeProperty('counterAxisSizingMode', 'AUTO')
    }
    else {
      mode === 'HORIZONTAL'
        ? target.writeProperty('counterAxisSizingMode', 'AUTO')
        : mode === 'VERTICAL' && target.writeProperty('primaryAxisSizingMode', 'AUTO')
    }
  }
}

// Handle constraints
export function handleConstraints(element: any, target: any, parent: any, forceConstraints = false) {
  if (!element)
    return

  const sizes = {
    target: null as any,
    parent: null as any,
  }

  const getTargetSize = () => {
    if (!sizes.target)
      sizes.target = target.getSize()
    return sizes.target
  }

  const getParentSize = () => {
    if (!sizes.parent)
      sizes.parent = parent.getSize()
    return sizes.parent
  }

  const { xConstraint, yConstraint } = element.renderMetaData.constraints ?? {}
  const constraints = { horizontal: 'MIN', vertical: 'MIN' }
  let width, height, x, y

  if (xConstraint) {
    ({ width, x } = handleAxisConstraint(xConstraint, constraints, getTargetSize, getParentSize, 'horizontal'))
  }

  if (yConstraint) {
    ({ height, y } = handleAxisConstraint(yConstraint, constraints, getTargetSize, getParentSize, 'vertical'))
  }

  if (x !== undefined)
    target.writeProperty('x', x)
  if (y !== undefined)
    target.writeProperty('y', y)
  if (width || height)
    target.resize(width ?? getTargetSize().width, height ?? getTargetSize().height)
  if (forceConstraints || constraints.horizontal !== 'MIN' || constraints.vertical !== 'MIN') {
    target.writeProperty('constraints', constraints)
  }
}

function handleAxisConstraint(
  constraint: any,
  constraints: any,
  getTargetSize: () => any,
  getParentSize: () => any,
  axis: 'horizontal' | 'vertical',
) {
  const isHorizontal = axis === 'horizontal'
  const dimension = isHorizontal ? 'width' : 'height'
  const result = { [dimension]: undefined, [isHorizontal ? 'x' : 'y']: undefined }

  switch (constraint.type) {
    case isHorizontal ? 'left' : 'top':
      if (typeof constraint.offset === 'number') {
        result[isHorizontal ? 'x' : 'y'] = constraint.offset
      }
      break

    case isHorizontal ? 'right' : 'bottom':
      if (typeof constraint.offset === 'number') {
        constraints[axis] = 'MAX'
        result[isHorizontal ? 'x' : 'y'] = getParentSize()[dimension] - constraint.offset - getTargetSize()[dimension]
      }
      break

    case 'center':
      if (typeof constraint.offset === 'number') {
        constraints[axis] = 'CENTER'
        result[isHorizontal ? 'x' : 'y'] = getParentSize()[dimension] / 2 - getTargetSize()[dimension] / 2 + constraint.offset
      }
      break

    case isHorizontal ? 'left-right' : 'top-bottom':
      const start = isHorizontal ? 'leftOffset' : 'topOffset'
      const end = isHorizontal ? 'rightOffset' : 'bottomOffset'
      if (typeof constraint[start] === 'number' && typeof constraint[end] === 'number') {
        constraints[axis] = 'STRETCH'
        result[dimension] = getParentSize()[dimension] - constraint[start] - constraint[end]
        result[isHorizontal ? 'x' : 'y'] = constraint[start]
      }
      break

    case `${axis}-scale`:
      const startPercent = isHorizontal ? 'leftOffsetPercent' : 'topOffsetPercent'
      const endPercent = isHorizontal ? 'rightOffsetPercent' : 'bottomOffsetPercent'
      if (typeof constraint[startPercent] === 'number' && typeof constraint[endPercent] === 'number') {
        validatePercentages(constraint[startPercent], constraint[endPercent])
        constraints[axis] = 'SCALE'
        const totalOffset = constraint[startPercent] + constraint[endPercent]
        result[dimension] = getParentSize()[dimension] * ((100 - totalOffset) / 100)
        result[isHorizontal ? 'x' : 'y'] = getParentSize()[dimension] * constraint[startPercent] / 100
      }
      break
  }

  return result
}

function validatePercentages(start: number, end: number) {
  if (!(start >= 0 && start <= 100 && end >= 0 && end <= 100 && start + end <= 100)) {
    throw new InternalError(`Invalid percentages ${start}, ${end}`)
  }
}

// Process children elements
export function processChildren(elements: any[], logger: any = null) {
  const processed: any[] = []

  elements.forEach((element) => {
    if (!element)
      return

    if (Array.isArray(element)) {
      if (element.some(e => e && !Array.isArray(e) && e.renderMetaData.key == null)) {
        logger?.logWarning('Widget Warning: Each child in a list should have a unique "key" prop. Please check your widget code.')
      }
      processed.push(...processChildren(element, logger))
    }
    else if (element.type === 'fragment') {
      processed.push(...processChildren(element.renderMetaData.children ?? [], logger))
    }
    else {
      processed.push(element)
    }
  })

  return processed
}

export const $T = handleConstraints
export const BM = handleElementSizing
export const MI = processChildren
export const _L = isFrameType
