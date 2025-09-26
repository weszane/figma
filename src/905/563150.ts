import { createElement, Fragment, memo } from 'react'
import { colorToString, cssVarToString, decimalToPercent } from '../905/436288'
import { cssTransformFromNodeTransform, htmlColorFromFigColor } from '../905/545833'

// Define or import the proper node types
interface Vector {
  x: number
  y: number
}

interface Color {
  r: number
  g: number
  b: number
  a: number
}

interface BaseNode {
  id: string
  type: string
  name: string
  visible: boolean
  locked: boolean
  parent?: BaseNode
  children?: BaseNode[]
  pluginData?: Record<string, string>
  sharedPluginData?: Record<string, Record<string, string>>
  removed?: boolean
}

interface SceneNode extends BaseNode {
  x: number
  y: number
  width: number
  height: number
  rotation: number
  layoutAlign?: string
  layoutGrow?: number
  constraints?: {
    horizontal: string
    vertical: string
  }
  layoutSizingHorizontal?: string
  layoutSizingVertical?: string
  fills?: any[]
  strokes?: any[]
  strokeWeight?: number
  strokeAlign?: string
  strokeCap?: string
  strokeJoin?: string
  strokeDashes?: number[]
  cornerRadius?: number | number[]
  effects?: Effect[]
  opacity?: number
  blendMode?: string
  absoluteTransform?: number[][]
  relativeTransform?: number[][]
  size?: Vector
  absoluteBoundingBox?: {
    x: number
    y: number
    width: number
    height: number
  }
  boundingBox?: {
    x: number
    y: number
    width: number
    height: number
  }
  exportSettings?: any[]
  reactions?: any[]
  transform?: number[][]
}

interface Effect {
  type: string
  offset?: Vector
  color?: Color
  blur?: number
}

interface GroupNode extends SceneNode {
  type: 'group'
  children: SceneNode[]
  backgrounds?: any[]
  backgroundStyleId?: string
  expanded?: boolean
  clip?: boolean
}

interface MaskNode extends SceneNode {
  type: 'mask'
  children: SceneNode[]
  maskNode: SceneNode
}

interface PathNode extends SceneNode {
  type: 'path'
  path?: {
    path: string
    windingRule: string
  }
  paint?: OverridePaint | CSSVarPaint | SolidPaint | GradientPaint | ImagePaint
}

interface OverridePaint {
  type: 'override'
  color: string
}

interface CSSVarPaint {
  type: 'css-var'
  variable: string
  fallback: string
  // Add other properties as needed
  [key: string]: any
}

interface SolidPaint {
  type: 'solid'
  color: Color
  opacity?: number
}

interface GradientPaint {
  type: 'gradient-linear' | 'gradient-radial'
  gradientStops: Array<{
    position: number
    color: Color
  }>
  gradientHandlePositions: Vector[]
  opacity?: number
}

interface ImagePaint {
  type: 'image'
  src?: string
  imageSize?: {
    width: number
    height: number
  }
  scalingFactor?: number
  scaleMode?: string
}

interface RenderGroupNodeProps {
  node: GroupNode
  defMaker: (id: string, factory: (id: string) => React.ReactElement) => React.ReactElement
}

interface RenderMaskNodeProps {
  node: MaskNode
  defMaker: (id: string, factory: (id: string) => React.ReactElement) => React.ReactElement
}

interface RenderPathNodeProps {
  node: PathNode
  defMaker: (id: string, factory: (id: string) => React.ReactElement) => React.ReactElement
}

interface RenderNodeProps {
  node: GroupNode | MaskNode | PathNode
  defMaker: (id: string, factory: (id: string) => React.ReactElement) => React.ReactElement
}

/**
 * Renders a group node with optional clipping and effects
 * Original function: exports.RenderGroupNode
 */
const RenderGroupNode = memo(({ node, defMaker }: RenderGroupNodeProps) => {
  // Create clip path definition if clipping is enabled
  const clipPathDef = node.clip
    ? defMaker(`clip-${node.name}`, (id) => {
      return createElement('clipPath', {
        id,
      }, createElement('rect', {
        width: node.size?.x,
        height: node.size?.y,
      }))
    })
    : null

  // Clip path style
  const clipPathStyle = node.clip
    ? {
      clipPath: `url(#clip-${node.name})`,
    }
    : {}

  // Filter ID
  const filterId = `filter-${node.name}`

  /**
   * Creates filter effects for the node
   * Original function: c (anonymous function)
   */
  const createFilterEffects = (): React.ReactElement | undefined => {
    const shadowIds: string[] = []
    let maxXOffset = 0
    let maxYOffset = 0
    let minXOffset = 0
    let minYOffset = 0

    const effects = (node.effects || []).map((effect, index) => {
      if (effect.type === 'drop-shadow' && effect.offset && effect.color) {
        const shadowId = `shadow${index}`
        shadowIds.push(shadowId)

        // Fix the nullish coalescing operator issue
        const offsetBlurX = effect.offset.x + (effect.blur || 0)
        const offsetBlurY = effect.offset.y + (effect.blur || 0)
        maxXOffset = Math.max(offsetBlurX, maxXOffset)
        maxYOffset = Math.max(offsetBlurY, maxYOffset)
        minXOffset = Math.min(effect.offset.x - (effect.blur || 0), minXOffset)
        minYOffset = Math.min(effect.offset.y - (effect.blur || 0), minYOffset)

        return createElement('feDropShadow', {
          in: 'SourceGraphic',
          result: shadowId,
          key: index,
          dx: effect.offset.x,
          dy: effect.offset.y,
          stdDeviation: Math.sqrt(effect.blur || 0),
          floodColor: htmlColorFromFigColor(effect.color),
        })
      }

      if (effect.type === 'layer-blur') {
        maxXOffset = Math.max((effect.blur || 0), maxXOffset)
        maxYOffset = Math.max((effect.blur || 0), maxYOffset)
        minXOffset = Math.min(-(effect.blur || 0), minXOffset)
        minYOffset = Math.min(-(effect.blur || 0), minYOffset)

        const blurId = `layerBlur${index}`
        shadowIds.push(blurId)

        return createElement('feGaussianBlur', {
          in: 'SourceGraphic',
          result: blurId,
          key: index,
          stdDeviation: Math.sqrt(effect.blur || 0),
        })
      }

      return null
    }).filter(effect => !!effect)

    if (effects.length > 0) {
      const filterWidth = maxXOffset + Math.abs(minXOffset) + (node.boundingBox?.width || 0)
      const filterHeight = maxYOffset + Math.abs(minYOffset) + (node.boundingBox?.height || 0)

      return createElement('filter', {
        x: Math.min(0, minXOffset),
        y: Math.min(0, minYOffset),
        width: `${filterWidth}px`,
        height: `${filterHeight}px`,
        id: filterId,
      }, effects, createElement('feMerge', null, shadowIds.map((id, index) =>
        createElement('feMergeNode', {
          in: id,
          key: `filter-${index}`,
        }),
      )))
    }

    return undefined
  }

  const filterEffects = createFilterEffects()
  const filterStyle = filterEffects
    ? {
      filter: `url(#${filterId})`,
    }
    : {}

  return createElement(Fragment, null, clipPathDef, filterEffects, createElement('g', { ...filterStyle }, createElement('g', {
    className: node.name,
    ...clipPathStyle,
    transform: cssTransformFromNodeTransform(node.transform),
    opacity: node.opacity,
  }, [...node.children].reverse().map((childNode, index) =>
    createElement(RenderNode, {
      key: index,
      node: childNode,
      defMaker,
    }),
  ))))
})

/**
 * Renders a mask node
 * Original function: exports.RenderMaskNode
 */
const RenderMaskNode = memo(({ node, defMaker }: RenderMaskNodeProps) => {
  return createElement(Fragment, null, createElement('defs', null, createElement('mask', {
    id: node.name,
  }, createElement(RenderNode, {
    defMaker,
    node: node.maskNode,
  }))), createElement('g', {
    mask: `url(#${node.name})`,
  }, [...node.children].reverse().map((childNode, index) =>
    createElement(RenderNode, {
      key: index,
      defMaker,
      node: childNode,
    }),
  )))
})

/**
 * Renders a path node with various fill types
 * Original function: exports.RenderPathNode
 */
const RenderPathNode = memo(({ node, defMaker }: RenderPathNodeProps) => {
  if (!node.path) {
    console.error('No path for', node)
    return null
  }

  const { path, windingRule } = node.path

  /**
   * Processes paint definitions for the path
   * Original function: (anonymous function)
   */
  const processPaint = (): { fill?: string, def?: React.ReactElement } => {
    const paint = node.paint
    if (!paint) {
      return {}
    }

    switch (paint.type) {
      case 'override':
        return {
          fill: paint.color,
        }

      case 'css-var':
        return {
          fill: cssVarToString(paint),
        }

      case 'solid': {
        const solidPaint = paint as SolidPaint
        const { color, opacity } = solidPaint
        if (color) {
          const colorWithOpacity = opacity !== undefined
            ? { ...color, a: color.a * opacity }
            : color
          return {
            fill: htmlColorFromFigColor(colorWithOpacity),
          }
        }
        return {}
      }

      case 'gradient-linear':
      case 'gradient-radial': {
        const gradientPaint = paint as GradientPaint
        const {
          gradientStops,
          gradientHandlePositions: [{ x: startX, y: startY }, { x: endX, y: endY }],
          opacity = 1,
        } = gradientPaint

        const stops = gradientStops.map(({ position, color }) =>
          createElement('stop', {
            key: `${color}-${position}`,
            offset: decimalToPercent(position),
            style: {
              stopColor: colorToString(color),
              stopOpacity: color.a * opacity,
            },
          }),
        )

        const gradientId = `grad-${node.name}`

        return {
          fill: `url(#${gradientId})`,
          def: defMaker(gradientId, id =>
            paint.type === 'gradient-linear'
              ? createElement('linearGradient', {
                id,
                x1: decimalToPercent(startX),
                y1: decimalToPercent(startY),
                x2: decimalToPercent(endX),
                y2: decimalToPercent(endY),
              }, stops)
              : createElement('radialGradient', {
                id,
              }, stops)),
        }
      }

      case 'image': {
        const imagePaint = paint as ImagePaint
        const src = imagePaint?.src
        const imageSize = imagePaint?.imageSize

        let patternFactory: ((id: string) => React.ReactElement) | undefined

        switch (imagePaint.scaleMode) {
          case 'tile': {
            const width = (imageSize?.width ?? 1) * (imagePaint.scalingFactor ?? 1)
            const height = (imageSize?.height ?? 1) * (imagePaint.scalingFactor ?? 1)
            patternFactory = id => createElement('pattern', {
              id,
              width,
              height,
              patternContentUnits: 'userSpaceOnUse',
              patternUnits: 'userSpaceOnUse',
            }, createElement('image', {
              href: src,
              width,
              height,
            }))
            break
          }

          case 'fill':
            patternFactory = id => createElement('pattern', {
              id,
              width: '100%',
              height: '100%',
            }, createElement('image', {
              href: src,
              width: '100%',
              height: '100%',
              preserveAspectRatio: 'xMidYMid slice',
            }))
            break

          case 'fit':
          case 'crop':
            console.error(`Unable to render image fill for ${node.name}. Scale mode ${imagePaint.scaleMode} is not supported.`)
            return {}
        }

        const imageId = `image-${node.name}`
        return {
          fill: `url(#${imageId})`,
          def: patternFactory ? defMaker(imageId, patternFactory) : undefined,
        }
      }

      default:
        console.error(`Unable to render paint for ${node.name}. Paint type ${(paint as any).type} is not supported.`)
        return {}
    }
  }

  const { fill, def } = processPaint()

  return createElement(Fragment, null, def, createElement('path', {
    className: node.name,
    d: path,
    fillRule: windingRule,
    fill,
    transform: node.transform ? cssTransformFromNodeTransform(node.transform) : undefined,
  }))
})

/**
 * Main render node component that delegates to specific node renderers
 * Original function: exports.RenderNode
 */
const RenderNode = memo(({ node, ...rest }: RenderNodeProps) => {
  switch (node.type) {
    case 'group':
      return createElement(RenderGroupNode, { node, ...rest })
    case 'mask':
      return createElement(RenderMaskNode, { node, ...rest })
    case 'path':
      return createElement(RenderPathNode, { node, ...rest })
    default:
      console.error(`Unsupported node type: ${node.type}`)
      return null
  }
})

// Export components
exports.RenderGroupNode = RenderGroupNode
exports.RenderMaskNode = RenderMaskNode
exports.RenderPathNode = RenderPathNode
exports.RenderNode = RenderNode
