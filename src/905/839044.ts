import { z } from 'zod'
import { NodeSchema } from '../905/985467'

/**
 * Enum for request modes (Wc).
 * Original: $$r0
 */
enum Wc {
  DESCRIPTION = 'description',
  PASSTHROUGH_XML_DEBUG_ONLY = 'passthroughXmlDebugOnly',
}

/**
 * Number between 0 and 1 (s).
 */
const number01 = z.number().min(0).max(1)

/**
 * Non-negative number (o).
 */
const nonNegativeNumber = z.number().min(0)

/**
 * Non-negative integer (l).
 */
const nonNegativeInt = z.number().int().min(0)

/**
 * RGB color object (d).
 */
const rgbColor = z.object({
  r: number01,
  g: number01,
  b: number01,
})

/**
 * RGBA color object (c).
 */
const rgbaColor = z.object({
  r: number01,
  g: number01,
  b: number01,
  a: number01,
})

/**
 * 3D point tuple (u).
 */
const point3D = z.tuple([z.number(), z.number(), z.number()])

/**
 * Gradient transform tuple (p).
 */
const gradientTransform = z.tuple([point3D, point3D])

/**
 * Rectangle corner radii (m).
 */
const rectangleCornerRadii = z.object({
  topLeft: nonNegativeNumber,
  topRight: nonNegativeNumber,
  bottomLeft: nonNegativeNumber,
  bottomRight: nonNegativeNumber,
})

/**
 * 2D point object (h).
 */
const point2D = z.object({
  x: z.number(),
  y: z.number(),
})

/**
 * Size object (g).
 */
const size = z.object({
  width: z.number(),
  height: z.number(),
})

/**
 * Blend mode enum (f).
 */
const blendMode = z.enum([
  'PASS_THROUGH',
  'NORMAL',
  'DARKEN',
  'MULTIPLY',
  'LINEAR_BURN',
  'COLOR_BURN',
  'LIGHTEN',
  'SCREEN',
  'LINEAR_DODGE',
  'COLOR_DODGE',
  'OVERLAY',
  'SOFT_LIGHT',
  'HARD_LIGHT',
  'DIFFERENCE',
  'EXCLUSION',
  'HUE',
  'SATURATION',
  'COLOR',
  'LUMINOSITY',
])

/**
 * Scroll behavior enum (_).
 */
const scrollBehavior = z.enum(['FIXED', 'SCROLLS', 'STICKY_SCROLLS'])

/**
 * Boolean operation enum (A).
 */
const booleanOperation = z.enum(['UNION', 'INTERSECT', 'SUBTRACT', 'EXCLUDE'])

/**
 * Vertical alignment enum (y).
 */
const verticalAlign = z.enum(['TOP', 'BOTTOM', 'TOP_BOTTOM', 'STRETCH', 'SCALE'])

/**
 * Horizontal alignment enum (b).
 */
const horizontalAlign = z.enum(['LEFT', 'RIGHT', 'LEFT_RIGHT', 'STRETCH', 'SCALE'])

/**
 * Stroke alignment enum (v).
 */
const strokeAlign = z.enum(['CENTER', 'INSIDE', 'OUTSIDE'])

/**
 * Stroke cap enum (I).
 */
const strokeCap = z.enum([
  'NONE',
  'ROUND',
  'SQUARE',
  'LINE_ARROW',
  'TRIANGLE_ARROW',
  'DIAMOND_FILLED',
  'CIRCLE_FILLED',
  'TRIANGLE_FILLED',
])

/**
 * Stroke join enum (E).
 */
const strokeJoin = z.enum(['MITER', 'BEVEL', 'ROUND'])

/**
 * Constraints object (x).
 */
const constraints = z.object({
  horizontal: horizontalAlign.optional(),
  vertical: verticalAlign.optional(),
})

/**
 * Overflow direction enum (S).
 */
const overflowDirection = z.enum([
  'NONE',
  'HORIZONTAL_SCROLLING',
  'VERTICAL_SCROLLING',
  'HORIZONTAL_AND_VERTICAL_SCROLLING',
])

/**
 * Layout align enum (w).
 */
const layoutAlign = z.enum(['MIN', 'CENTER', 'MAX', 'STRETCH', 'BASELINE', 'INHERIT'])

/**
 * Layout mode enum (C).
 */
const layoutMode = z.enum(['NONE', 'VERTICAL', 'HORIZONTAL'])

/**
 * Primary axis align enum (T).
 */
const primaryAxisAlignItems = z.enum(['MIN', 'MAX', 'CENTER', 'BASELINE'])

/**
 * Counter axis align enum (k).
 */
const counterAxisAlignItems = z.enum(['MIN', 'MAX', 'CENTER', 'SPACE_EVENLY', 'SPACE_BETWEEN'])

/**
 * Counter axis sizing mode enum (R).
 */
const counterAxisSizingMode = z.enum(['FIXED', 'AUTO'])

/**
 * Primary axis sizing mode enum (N).
 */
const primaryAxisSizingMode = z.enum(['FIXED', 'AUTO'])

/**
 * Layout properties object (P).
 */
const layoutProperties = {
  layoutMode: layoutMode.optional(),
  layoutAlign: layoutAlign.optional(),
  itemSpacing: z.number().optional(),
  counterAxisSizingMode: counterAxisSizingMode.optional(),
  primaryAxisSizingMode: primaryAxisSizingMode.optional(),
  counterAxisAlignItems: counterAxisAlignItems.optional(),
  primaryAxisAlignItems: primaryAxisAlignItems.optional(),
  paddingLeft: z.number().optional(),
  paddingRight: z.number().optional(),
  paddingTop: z.number().optional(),
  paddingBottom: z.number().optional(),
}

/**
 * Positioning enum (O).
 */
const layoutPositioning = z.enum(['AUTO', 'ABSOLUTE'])

/**
 * Layout grid union (D).
 */
const layoutGrids = z.union([
  z.object({
    pattern: z.enum(['COLUMNS', 'ROWS']),
    alignment: z.enum(['MIN', 'MAX']),
    gutterSize: z.number(),
    count: nonNegativeInt,
    sectionSize: z.number().min(0),
    offset: z.number().min(0),
    visible: z.boolean().optional(),
    color: rgbaColor.optional(),
  }),
  z.object({
    pattern: z.enum(['COLUMNS', 'ROWS']),
    alignment: z.literal('STRETCH'),
    gutterSize: z.number(),
    count: nonNegativeInt,
    offset: z.number().min(0),
    visible: z.boolean().optional(),
    color: rgbaColor.optional(),
  }),
  z.object({
    pattern: z.enum(['COLUMNS', 'ROWS']),
    alignment: z.literal('CENTER'),
    gutterSize: z.number(),
    count: nonNegativeInt,
    sectionSize: z.number().min(0),
    visible: z.boolean().optional(),
    color: rgbaColor.optional(),
  }),
  z.object({
    pattern: z.literal('GRID'),
    sectionSize: z.number().min(0),
    visible: z.boolean().optional(),
    color: rgbaColor.optional(),
  }),
])

/**
 * Shadow properties (L).
 */
const shadowProperties = {
  offset: point2D,
  color: rgbaColor,
  blendMode,
  radius: z.number().min(0),
  spread: z.number().optional(),
  visible: z.boolean(),
}

/**
 * Inner shadow schema (F).
 */
const innerShadow = z.object({
  ...shadowProperties,
  type: z.literal('INNER_SHADOW'),
})

/**
 * Drop shadow schema (M).
 */
const dropShadow = z.object({
  ...shadowProperties,
  type: z.literal('DROP_SHADOW'),
  showShadowBehindNode: z.boolean().optional(),
})

/**
 * Blur schema (j).
 */
const blur = z.object({
  type: z.enum(['LAYER_BLUR', 'BACKGROUND_BLUR']),
  radius: z.number().min(0),
  visible: z.boolean(),
})

/**
 * Effects union (U).
 */
const effectUnion = z.discriminatedUnion('type', [innerShadow, dropShadow, blur])

/**
 * Effects array (B).
 */
const effectsArray = z.array(effectUnion)

/**
 * Gradient stop schema (V).
 */
const gradientStop = z.object({
  position: number01,
  color: rgbaColor,
})

/**
 * Transition easing enum (G).
 */
const transitionEasing = z.enum([
  'EASE_IN',
  'EASE_OUT',
  'EASE_IN_AND_OUT',
  'LINEAR',
  'EASE_IN_BACK',
  'EASE_OUT_BACK',
  'EASE_IN_AND_OUT_BACK',
  'CUSTOM_CUBIC_BEZIER',
  'GENTLE',
  'QUICK',
  'BOUNCY',
  'SLOW',
  'CUSTOM_SPRING',
])

/**
 * Shape descriptor union (shapeDescriptor).
 */
const shapeDescriptor = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('SOLID'),
    color: rgbColor,
    visible: z.boolean().optional(),
    opacity: number01.optional(),
    blendMode: blendMode.optional(),
  }),
  z.object({
    type: z.enum(['GRADIENT_LINEAR', 'GRADIENT_RADIAL', 'GRADIENT_ANGULAR', 'GRADIENT_DIAMOND']),
    gradientTransform,
    gradientStops: z.array(gradientStop),
    visible: z.boolean().optional(),
    opacity: number01.optional(),
    blendMode: blendMode.optional(),
  }),
  z.object({
    type: z.literal('IMAGE'),
    scaleMode: z.enum(['FILL', 'FIT', 'CROP', 'TILE']).optional(),
    imageRef: z.string(),
    scalingFactor: nonNegativeNumber.optional(),
    rotation: nonNegativeInt.optional(),
    imageTransform: gradientTransform.optional(),
    visible: z.boolean().optional(),
    opacity: number01.optional(),
    blendMode: blendMode.optional(),
  }),
])

/**
 * Fills array (H).
 */
const fillsArray = z.array(shapeDescriptor)

/**
 * Arc data schema (W).
 */
const arcData = z.object({
  startingAngle: z.number(),
  endingAngle: z.number(),
  innerRadius: number01,
})

/**
 * Winding rule enum (K).
 */
const windingRule = z.enum(['NONZERO', 'EVENODD'])

/**
 * Vertex schema (Y).
 */
const vertex = z.object({
  x: z.number(),
  y: z.number(),
  strokeCap: strokeCap.optional(),
  strokeJoin: strokeJoin.optional(),
  cornerRadius: nonNegativeNumber.optional(),
})

/**
 * Segment schema (q).
 */
const segment = z.object({
  start: nonNegativeInt,
  end: nonNegativeInt,
  tangentStart: point2D.optional(),
  tangentEnd: point2D.optional(),
})

/**
 * Region schema ($).
 */
const region = z.object({
  windingRule,
  loops: z.array(z.array(nonNegativeInt)),
  fillStyleId: z.string().optional(),
})

/**
 * Vector network schema (Z).
 */
const vectorNetwork = z.object({
  vertices: z.array(vertex),
  segments: z.array(segment),
  regions: z.array(region).optional(),
})

/**
 * Export settings union (X).
 */
const exportSettingsUnion = z.discriminatedUnion('format', [
  z.object({
    format: z.enum(['PNG', 'JPG']),
    contentsOnly: z.boolean().optional(),
    suffix: z.string().optional(),
    useAbsoluteBounds: z.boolean().optional(),
    constraint: z.union([
      z.object({
        type: z.enum(['SCALE']),
        value: z.number(),
      }),
      z.object({
        type: z.enum(['WIDTH', 'HEIGHT']),
        value: z.number().int(),
      }),
    ]).optional(),
  }),
  z.object({
    format: z.literal('PDF'),
    contentsOnly: z.boolean().optional(),
    suffix: z.string().optional(),
    useAbsoluteBounds: z.boolean().optional(),
  }),
  z.object({
    format: z.literal('SVG'),
    contentsOnly: z.boolean().optional(),
    suffix: z.string().optional(),
    svgOutlineText: z.boolean().optional(),
    svgIdAttribute: z.boolean().optional(),
    svgSimplifyStroke: z.boolean().optional(),
    useAbsoluteBounds: z.boolean().optional(),
  }),
])

/**
 * Export settings array (Q).
 */
const exportSettingsArray = z.array(exportSettingsUnion)

/**
 * Fill override table (J).
 */
const fillOverrideTable = z.record(z.object({
  fills: fillsArray,
}))

/**
 * Corner radius properties (ee).
 */
const cornerRadiusProperties = {
  cornerRadius: nonNegativeNumber.optional(),
  rectangleCornerRadii: rectangleCornerRadii.optional(),
}

/**
 * Corner radius schema (et).
 */
const cornerRadiusSchema = z.object(cornerRadiusProperties)

/**
 * Stroke weights properties (ei).
 */
const strokeWeightsProperties = {
  strokeWeight: z.number().optional(),
  individualStrokeWeights: z.object({
    left: z.number().optional(),
    right: z.number().optional(),
    top: z.number().optional(),
    bottom: z.number().optional(),
  }).optional(),
}

/**
 * Stroke weights schema (en).
 */
const strokeWeightsSchema = z.object(strokeWeightsProperties)

/**
 * Text case enum (er).
 */
const textCase = z.enum(['ORIGINAL', 'UPPER', 'LOWER', 'TITLE'])

/**
 * Layout wrap enum (ea).
 */
const layoutWrap = z.enum(['NO_WRAP', 'WRAP'])

/**
 * Font name schema (es).
 */
const fontName = z.object({
  family: z.string(),
  style: z.string(),
})

/**
 * Text style schema (eo).
 */
const textStyle = z.object({
  fontSize: nonNegativeNumber.optional(),
  fontName: fontName.optional(),
  letterSpacing: z.number().optional(),
  textCase: textCase.optional(),
  fillPaints: fillsArray.optional(),
})

/**
 * Widget synced state array (el).
 */
const widgetSyncedState = z.array(z.record(z.string()))

/**
 * Shape type enum (ed).
 */
const shapeType = z.enum([
  'SQUARE',
  'ELLIPSE',
  'DIAMOND',
  'TRIANGLE_UP',
  'TRIANGLE_DOWN',
  'ROUNDED_RECTANGLE',
  'PARALLELOGRAM_RIGHT',
  'PARALLELOGRAM_LEFT',
  'ENG_DATABASE',
  'ENG_QUEUE',
  'ENG_FILE',
  'ENG_FOLDER',
  'TRAPEZOID',
  'PREDEFINED_PROCESS',
  'SHIELD',
  'DOCUMENT_SINGLE',
  'DOCUMENT_MULTIPLE',
  'MANUAL_INPUT',
  'HEXAGON',
  'CHEVRON',
  'PENTAGON',
  'OCTAGON',
  'STAR',
  'PLUS',
  'ARROW_LEFT',
  'ARROW_RIGHT',
  'SUMMING_JUNCTION',
  'OR',
  'SPEECH_BUBBLE',
  'INTERNAL_STORAGE',
])

/**
 * Connector stroke cap enum (ec).
 */
const connectorStrokeCap = z.enum([
  'NONE',
  'ARROW_EQUILATERAL',
  'ARROW_LINES',
  'TRIANGLE_FILLED',
  'DIAMOND_FILLED',
  'CIRCLE_FILLED',
])

/**
 * Connector endpoint union (eu).
 */
const connectorEndpoint = z.union([
  z.object({
    endpointNodeId: z.string(),
    magnet: z.enum(['NONE', 'AUTO', 'TOP', 'LEFT', 'BOTTOM', 'RIGHT']),
  }),
  z.object({
    endpointNodeId: z.string().optional(),
    position: z.object({
      x: z.number(),
      y: z.number(),
    }),
  }),
])

/**
 * Node base properties (ep).
 */
const nodeBaseProperties = {
  id: z.string(),
  parentId: z.string().optional(),
  name: z.string().optional(),
  visible: z.boolean().optional(),
  locked: z.boolean().optional(),
  scrollBehavior: scrollBehavior.optional(),
  pluginData: z.object({
    desiredSize: z.enum(['small', 'medium', 'large', 'notice']).optional(),
    pluginSvgPreviewUrl: z.string().optional(),
    pluginSvgPreviewData: z.string().optional(),
  }).optional(),
}

/**
 * Blend/opacity properties (em).
 */
const blendOpacityProperties = {
  blendMode: blendMode.optional(),
  opacity: number01.optional(),
}

/**
 * Fill/stroke properties (eh).
 */
const fillStrokeProperties = {
  fills: fillsArray.optional(),
  strokes: fillsArray.optional(),
  fillOverrideTable: fillOverrideTable.optional(),
  strokeAlign: strokeAlign.optional(),
  strokeCap: strokeCap.optional(),
  strokeJoin: strokeJoin.optional(),
  strokeMiterLimit: z.number().min(0).optional(),
  strokeDashes: z.array(z.number()).optional(),
}

/**
 * Transform/layout properties (eg).
 */
const transformLayoutProperties = {
  relativeTransform: gradientTransform.optional(),
  preserveRatio: z.boolean().optional(),
  constraints: constraints.optional(),
  size: size.optional(),
  layoutAlign: layoutAlign.optional(),
  layoutGrow: z.number().optional(),
  layoutPositioning: layoutPositioning.optional(),
}

/**
 * Transition properties (ef).
 */
const transitionProperties = {
  transitionNodeID: z.string().optional(),
  transitionDuration: z.number().min(0).optional(),
  transitionEasing: transitionEasing.optional(),
}

/**
 * Frame properties (e_).
 */
const frameProperties = {
  clipsContent: z.boolean().optional(),
  fills: fillsArray.optional(),
  strokes: fillsArray.optional(),
  strokeAlign: strokeAlign.optional(),
  overflowDirection: overflowDirection.optional(),
  layoutGrids: layoutGrids.optional(),
  ...cornerRadiusProperties,
  ...strokeWeightsProperties,
  ...layoutProperties,
}

/**
 * Export settings properties (eA).
 */
const exportSettingsProperties = {
  exportSettings: exportSettingsArray.optional(),
}

/**
 * Effects properties (ey).
 */
const effectsProperties = {
  effects: effectsArray.optional(),
}

/**
 * Mask properties (eb).
 */
const maskProperties = {
  isMask: z.boolean().optional(),
}

/**
 * Node extended properties (ev).
 */
const nodeExtendedProperties = {
  ...nodeBaseProperties,
  ...blendOpacityProperties,
  ...transformLayoutProperties,
  ...fillStrokeProperties,
  ...exportSettingsProperties,
  ...effectsProperties,
  ...maskProperties,
  ...transitionProperties,
}

/**
 * Documentation link schema (eI).
 */
const documentationLink = z.object({
  uri: z.string(),
})

/**
 * Documentation properties (eE).
 */
const documentationProperties = {
  description: z.string().optional(),
  documentationLinks: z.tuple([documentationLink]).optional(),
}

/**
 * Section properties (ex).
 */
const sectionProperties = {
  sectionContentsHidden: z.boolean().optional(),
}

/**
 * Fills only (eS).
 */
const fillsOnly = {
  fills: fillsArray.optional(),
}

/**
 * Stroke only (ew).
 */
const strokeOnly = {
  strokes: fillsArray.optional(),
  strokeWeight: z.number().optional(),
  strokeAlign: strokeAlign.optional(),
  strokeJoin: strokeJoin.optional(),
  strokeDashes: z.array(z.number()).optional(),
}

/**
 * Ellipse node schema (eC).
 */
const ellipseNode = z.object({
  type: z.literal('ELLIPSE'),
  arcData,
  ...nodeExtendedProperties,
})

/**
 * Star/line/polygon/rectangle node schema (eT).
 */
const starLinePolygonRectangleNode = z.object({
  type: z.enum(['STAR', 'LINE', 'REGULAR_POLYGON', 'RECTANGLE']),
  ...nodeExtendedProperties,
})

/**
 * Vector node schema (ek).
 */
const vectorNode = z.object({
  type: z.literal('VECTOR'),
  vectorNetwork,
  ...nodeExtendedProperties,
})

/**
 * Boolean operation node schema (eR).
 */
const booleanOperationNode = z.object({
  type: z.literal('BOOLEAN_OPERATION'),
  booleanOperation,
  ...nodeExtendedProperties,
})

/**
 * Slice node schema (eN).
 */
const sliceNode = z.object({
  type: z.literal('SLICE'),
  ...nodeExtendedProperties,
  ...exportSettingsProperties,
})

/**
 * List type enum (eP).
 */
const listType = z.enum(['ORDERED', 'UNORDERED', 'NONE'])

/**
 * Text node properties (eO).
 */
const textNodeProperties = {
  characters: z.string(),
  style: textStyle.optional(),
  characterStyleOverrides: z.array(z.number()).optional(),
  styleOverrideTable: z.record(textStyle).optional(),
  lineTypes: z.array(listType).optional(),
  lineIndentations: z.array(z.number().min(0)).optional(),
}

/**
 * Layout wrap properties (eD).
 */
const layoutWrapProperties = {
  layoutWrap: layoutWrap.optional(),
}

/**
 * Text node schema (eL).
 */
const textNode = z.object({
  type: z.literal('TEXT'),
  ...nodeExtendedProperties,
  ...textNodeProperties,
  ...layoutWrapProperties,
})

/**
 * Frame node schema (eF).
 */
const frameNode = z.object({
  type: z.literal('FRAME'),
  ...nodeExtendedProperties,
  ...frameProperties,
})

/**
 * Group node schema (eM).
 */
const groupNode = z.object({
  type: z.literal('GROUP'),
  ...nodeBaseProperties,
})

/**
 * Component node schema (ej).
 */
const componentNode = z.object({
  type: z.literal('COMPONENT'),
  ...nodeBaseProperties,
  ...frameProperties,
  ...documentationProperties,
})

/**
 * Component set node schema (eU).
 */
const componentSetNode = z.object({
  type: z.literal('COMPONENT_SET'),
  ...nodeBaseProperties,
  ...frameProperties,
  ...documentationProperties,
})

/**
 * Instance node schema (eB).
 */
const instanceNode = z.object({
  type: z.literal('INSTANCE'),
  componentKey: z.string(),
  componentType: z.enum(['COMPONENT', 'COMPONENT_SET']),
  componentId: z.string().optional(),
  uniformScaleFactor: z.number().optional(),
  ...nodeBaseProperties,
  ...frameProperties,
  ...nodeBaseProperties,
})

/**
 * Section node schema (eV).
 */
const sectionNode = z.object({
  type: z.literal('SECTION'),
  ...nodeBaseProperties,
  ...sectionProperties,
  ...fillStrokeProperties,
  ...transformLayoutProperties,
})

/**
 * Sticky node schema (eG).
 */
const stickyNode = z.object({
  type: z.literal('STICKY'),
  authorVisible: z.boolean(),
  authorName: z.string(),
  ...nodeBaseProperties,
  ...transformLayoutProperties,
  ...blendOpacityProperties,
  ...fillsOnly,
  ...maskProperties,
  ...effectsProperties,
  ...exportSettingsProperties,
  ...textNodeProperties,
})

/**
 * Shape with text node schema (ez).
 */
const shapeWithTextNode = z.object({
  type: z.literal('SHAPE_WITH_TEXT'),
  shapeType,
  ...nodeBaseProperties,
  ...transformLayoutProperties,
  ...blendOpacityProperties,
  ...fillsOnly,
  ...maskProperties,
  ...effectsProperties,
  ...exportSettingsProperties,
  ...textNodeProperties,
  ...cornerRadiusProperties,
  ...strokeOnly,
})

/**
 * Connector node schema (eH).
 */
const connectorNode = z.object({
  type: z.literal('CONNECTOR'),
  connectorStart: connectorEndpoint,
  connectorEnd: connectorEndpoint,
  connectorStartStrokeCap: connectorStrokeCap,
  connectorEndStrokeCap: connectorStrokeCap,
  textBackground: cornerRadiusSchema.merge(strokeWeightsSchema).optional(),
  connectorLineType: z.enum(['ELBOWED', 'STRAIGHT']),
  ...nodeBaseProperties,
  ...transformLayoutProperties,
  ...blendOpacityProperties,
  ...effectsProperties,
  ...exportSettingsProperties,
  ...textNodeProperties,
  ...strokeOnly,
})

/**
 * Widget node schema (eW).
 */
const widgetNode = z.object({
  type: z.literal('WIDGET'),
  pluginId: z.string(),
  pluginVersionId: z.optional(z.string()),
  size: size.optional(),
  widgetSyncedState: widgetSyncedState.optional(),
  ...nodeBaseProperties,
  ...exportSettingsProperties,
})

/**
 * Table node schema (eK).
 */
const tableNode = z.object({
  type: z.literal('TABLE'),
  numRows: z.number().int(),
  numColumns: z.number().int(),
  ...nodeBaseProperties,
  ...transformLayoutProperties,
  ...blendOpacityProperties,
  ...effectsProperties,
  ...exportSettingsProperties,
  ...strokeOnly,
})

/**
 * Table cell node schema (eY).
 */
const tableCellNode = z.object({
  type: z.literal('TABLE_CELL'),
  rowIndex: z.number().int(),
  columnIndex: z.number().int(),
  ...transformLayoutProperties,
  ...nodeBaseProperties,
  ...fillsOnly,
  ...textNodeProperties,
})

/**
 * Node discriminated union (eq).
 */
const nodeSchema = z.lazy(() =>
  z.discriminatedUnion('type', [
    ellipseNode,
    starLinePolygonRectangleNode,
    vectorNode,
    sliceNode,
    textNode,
    instanceNode,
    stickyNode,
    shapeWithTextNode,
    connectorNode,
    widgetNode,
    tableNode,
    tableCellNode,
    booleanOperationNode.extend({
      children: z.array(nodeSchema).optional(),
    }),
    sectionNode.extend({
      children: z.array(nodeSchema).optional(),
    }),
    frameNode.extend({
      children: z.array(nodeSchema).optional(),
    }),
    groupNode.extend({
      children: z.array(nodeSchema).optional(),
    }),
    componentNode.extend({
      children: z.array(nodeSchema).optional(),
    }),
    componentSetNode.extend({
      children: z.array(nodeSchema).min(1),
    }),
  ]),
)

/**
 * WeakMaps for type overrides (e$, eZ, eX).
 */
const typeOverrideMap = new WeakMap()
const typeFactoryMap = new WeakMap()
const typeFlagMap = new WeakMap()

/**
 * Prompt schema (Fs).
 * Original: $$eJ1
 */
export const PromptModeSchema = z.object({
  prompt: z.string(),
  mode: z.enum(Object.values(Wc) as [string, ...string[]]).optional(),
})

/**
 *
 Request schema (pp).
 * Original: $$e12
 */
export const createNodesRequestSchema = z.object({
  requestId: z.string().optional(),
  createNodes: z.object({
    node: (function (schema, factory) {
      typeOverrideMap.set(schema, schema._def.getType)
      typeFactoryMap.set(schema, factory)
      schema._def.getType = (...args) => {
        const original = typeOverrideMap.get(schema)
        const factoryFn = typeFactoryMap.get(schema)
        return factoryFn && !typeFlagMap.get(schema)
          ? factoryFn.call(schema._def, ...args)
          : original
            ? original.call(schema._def, ...args)
            : undefined
      }
      return schema
    })(nodeSchema, e => e.factory.createKeywordTypeNode(e.SyntaxKind.AnyKeyword)),
    parentId: z.string().optional(),
    index: z.number().optional(),
  }).array().optional(),
  cortex_error: z.object({
    type: z.string(),
    data: z.any(),
  }).optional(),
  trace: NodeSchema.optional(),
})
