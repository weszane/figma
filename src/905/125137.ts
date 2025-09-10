import { Buffer } from 'node:buffer'
import zod from 'zod'
import { supportedNodeTypes } from '../905/266460'
import { supportedDirections, supportedStyleProperties } from '../905/321380'
import { DESIGN_TYPES } from '../905/413743'
import { getFunctionHandle } from '../905/572400'
import { getFeatureFlags } from '../905/601108'
import { VariableDataType, VariableResolvedDataType } from '../905/880730'

// ====================
// 🔹 基础数值和颜色类型
// ====================

export namespace Base {
  export const FiniteNumber = zod.number().finite()
  export const Float = FiniteNumber
  export const ZeroToOne = FiniteNumber.min(0).max(1)
  export const PositiveFloat = FiniteNumber.min(0) // Note: min(0) allows 0, should it be min(0).max(1e-9)?
  export const NonZeroPositiveFloat = FiniteNumber.min(0.01)
  export const PositiveInteger = FiniteNumber.min(0).int()
  export const FloatNegativeOneToOne = FiniteNumber.min(-1).max(1)
  export const ZeroOrOne = zod.union([zod.literal(0), zod.literal(1)])
  export const Integer = FiniteNumber.int()

  export const Color = zod.strictObject({
    r: ZeroToOne,
    g: ZeroToOne,
    b: ZeroToOne,
  })

  export const ColorA = zod.strictObject({
    r: ZeroToOne,
    g: ZeroToOne,
    b: ZeroToOne,
    a: ZeroToOne,
  })

  export const ColorInput = zod.union([zod.string(), ColorA, Color])
}

// ====================
// 🔹 变量 (Variable) 相关类型
// ====================

export namespace Variable {
  export const DataType = zod.enum(['BOOLEAN', 'FLOAT', 'STRING', 'VARIABLE_ALIAS', 'COLOR', 'EXPRESSION', 'MAP', 'SYMBOL_ID'])
  export type DataType = zod.infer<typeof DataType>

  export const ResolvedDataType = zod.enum(['BOOLEAN', 'COLOR', 'FLOAT', 'STRING'])
  export type ResolvedDataType = zod.infer<typeof ResolvedDataType>

  export const ExpressionFunction = zod.enum([
    'ADDITION',
    'SUBTRACTION',
    'RESOLVE_VARIANT',
    'MULTIPLICATION',
    'DIVISION',
    'EQUALS',
    'NOT_EQUAL',
    'LESS_THAN',
    'LESS_THAN_OR_EQUAL',
    'GREATER_THAN',
    'GREATER_THAN_OR_EQUAL',
    'AND',
    'OR',
    'NOT',
    'STRINGIFY',
    'TERNARY',
    'VAR_MODE_LOOKUP',
    'NEGATE',
    'IS_TRUTHY',
  ])

  export const Alias = zod.strictObject({
    type: zod.literal('VARIABLE_ALIAS'),
    id: zod.string(),
  })
  export type Alias = zod.infer<typeof Alias>

  // 递归 schema 需要 lazy
  export const Expression = zod.strictObject({
    expressionFunction: ExpressionFunction,
    expressionArguments: zod.array(zod.lazy(() => Variable.Data)),
  })

  export const Data = zod.strictObject({
    type: DataType.optional(),
    resolvedType: ResolvedDataType.optional(),
    value: zod.union([
      Base.FiniteNumber,
      zod.boolean(),
      zod.string(),
      Base.ColorA,
      Alias,
      Expression,
    ]).optional(),
  })
  export type Data = zod.infer<typeof Data>

  // 为不同 resolvedType 创建具体 schema
  export const DataSchema = zod.discriminatedUnion('type', [
    zod.strictObject({
      type: zod.literal(DataType.enum.COLOR),
      value: Base.ColorA,
    }),
    zod.strictObject({
      type: zod.literal(DataType.enum.STRING),
      value: zod.string(),
    }),
    zod.strictObject({
      type: zod.literal(DataType.enum.BOOLEAN),
      value: zod.boolean(),
    }),
    zod.strictObject({
      type: zod.literal(DataType.enum.FLOAT),
      value: zod.number().finite(),
    }),
    zod.strictObject({
      type: zod.literal(VariableDataType.ALIAS),
      value: zod.string(),
      resolvedType: zod.nativeEnum(VariableResolvedDataType),
    }),
  ])
  export type DataSchema = zod.infer<typeof DataSchema>
}

// ====================
// 🔹 反应 (Reaction) 和过渡 (Transition) 相关
// ====================

export namespace Reaction {
  export const Navigation = zod.enum(['NAVIGATE', 'SWAP', 'OVERLAY', 'SCROLL_TO', 'CHANGE_TO'])

  export const Easing = zod.strictObject({
    type: zod.enum(['EASE_IN', 'EASE_OUT', 'EASE_IN_AND_OUT', 'LINEAR', 'EASE_IN_BACK', 'EASE_OUT_BACK', 'EASE_IN_AND_OUT_BACK', 'CUSTOM_CUBIC_BEZIER', 'GENTLE', 'QUICK', 'BOUNCY', 'SLOW', 'CUSTOM_SPRING']),
    easingFunctionCubicBezier: zod.strictObject({
      x1: Base.FiniteNumber,
      y1: Base.FiniteNumber,
      x2: Base.FiniteNumber,
      y2: Base.FiniteNumber,
    }).optional(),
    easingFunctionSpring: zod.strictObject({
      mass: Base.FiniteNumber,
      stiffness: Base.FiniteNumber,
      damping: Base.FiniteNumber,
    }).optional(),
  })

  export const SimpleTransition = zod.strictObject({
    type: zod.enum(['DISSOLVE', 'SMART_ANIMATE', 'SCROLL_ANIMATE']),
    easing: Easing,
    duration: Base.FiniteNumber,
  })

  export const DirectionalTransition = zod.strictObject({
    type: zod.enum(['MOVE_IN', 'MOVE_OUT', 'PUSH', 'SLIDE_IN', 'SLIDE_OUT']),
    direction: zod.enum(['LEFT', 'RIGHT', 'TOP', 'BOTTOM']),
    matchLayers: zod.boolean(),
    easing: Easing,
    duration: Base.FiniteNumber,
  })

  export const Transition = zod.union([SimpleTransition, DirectionalTransition])

  export const Vector = zod.strictObject({
    x: Base.FiniteNumber,
    y: Base.FiniteNumber,
  })

  export const ActionNoConditional = zod.union([
    zod.strictObject({ type: zod.enum(['BACK', 'CLOSE']) }),
    zod.strictObject({ type: zod.literal('URL'), url: zod.string(), openInNewTab: zod.boolean().optional() }),
    zod.strictObject({
      type: zod.literal('UPDATE_MEDIA_RUNTIME'),
      destinationId: zod.union([zod.string(), zod.null()]),
      mediaAction: zod.enum(['PLAY', 'PAUSE', 'TOGGLE_PLAY_PAUSE', 'MUTE', 'UNMUTE', 'TOGGLE_MUTE_UNMUTE']),
    }),
    // ... 其他 UPDATE_MEDIA_RUNTIME 变体，为简洁省略
    zod.strictObject({
      type: zod.literal('NODE'),
      destinationId: zod.union([zod.string(), zod.null()]),
      navigation: Navigation,
      transition: zod.union([Transition, zod.null()]),
      preserveScrollPosition: zod.boolean().optional(),
      resetVideoPosition: zod.boolean().optional(),
      overlayRelativePosition: Vector.optional(),
      resetScrollPosition: zod.boolean().optional(),
      resetInteractiveComponents: zod.boolean().optional(),
    }),
    zod.strictObject({
      type: zod.literal('SET_VARIABLE'),
      variableId: zod.union([zod.string(), zod.null()]),
      variableValue: Variable.Data.optional(),
    }),
    zod.strictObject({
      type: zod.literal('SET_VARIABLE_MODE'),
      variableCollectionId: zod.union([zod.string(), zod.null()]),
      variableModeId: zod.union([zod.string(), zod.null()]),
    }),
  ])

  export const Trigger = zod.union([
    zod.strictObject({ type: zod.enum(['ON_CLICK', 'ON_HOVER', 'ON_PRESS', 'ON_DRAG', 'ON_MEDIA_END']) }),
    zod.strictObject({ type: zod.literal('AFTER_TIMEOUT'), timeout: Base.FiniteNumber }),
    zod.strictObject({ type: zod.enum(['MOUSE_ENTER', 'MOUSE_LEAVE', 'MOUSE_UP', 'MOUSE_DOWN']), delay: Base.FiniteNumber }),
    zod.strictObject({
      type: zod.literal('ON_KEY_DOWN'),
      device: zod.enum(['KEYBOARD', 'XBOX_ONE', 'PS4', 'SWITCH_PRO', 'UNKNOWN_CONTROLLER']),
      keyCodes: zod.array(Base.FiniteNumber),
    }),
    zod.strictObject({ type: zod.literal('ON_MEDIA_HIT'), mediaHitTime: Base.FiniteNumber }),
  ])

  export const ConditionalBlock = zod.strictObject({
    condition: Variable.Data.optional(),
    actions: zod.array(ActionNoConditional),
  })

  export const Action = zod.union([
    zod.strictObject({ type: zod.literal('CONDITIONAL'), conditionalBlocks: zod.array(ConditionalBlock) }),
    ActionNoConditional,
  ])

  export const Reaction = zod.strictObject({
    action: Action.optional().nullable(),
    actions: zod.array(Action).optional(),
    trigger: zod.union([Trigger, zod.null()]),
  })

  export const Reactions = zod.array(Reaction)
}

// ====================
// 🔹 插件 (Plugin) 相关
// ====================

export namespace Plugin {
  // 由于 getFunctionHandle 是一个函数，refine 无法在静态类型中体现，我们只能用 any
  export const PluginFunction = zod.any().refine(e => !!getFunctionHandle(e))
  export type PluginFunction = unknown // 精确类型无法静态推断

  export const getPluginDataNormalLimit = () => 102400
  export const PluginDataEntryNormalLimitSchema = zod.array(zod.string()).refine(
    entries => entries.reduce((sum, str) => sum + Buffer.byteLength(str), 0) <= getPluginDataNormalLimit(),
  )

  export const getPluginDataEscapeHatchLimit = () => 0x4000000
  export const PluginDataEntryEscapeHatchLimitSchema = zod.array(zod.string()).refine(
    entries => entries.reduce((sum, str) => sum + Buffer.byteLength(str), 0) <= getPluginDataEscapeHatchLimit(),
  )
}

// ====================
// 🔹 绘画 (Paint) 和效果 (Effect) 相关
// ====================

export namespace Paint {

  export const Vector = zod.strictObject({
    x: Base.FiniteNumber,
    y: Base.FiniteNumber,
  })
  export type Vector = zod.infer<typeof Vector>
  export const BuzzAssetType = zod.enum(DESIGN_TYPES)
  export type BuzzAssetType = zod.infer<typeof BuzzAssetType>

  export const BlendMode = zod.enum([
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
  export type BlendMode = zod.infer<typeof BlendMode>

  export const MaskType = zod.enum(['ALPHA', 'VECTOR', 'LUMINANCE'])
  export type MaskType = zod.infer<typeof MaskType>

  export const BoundVariables = zod.strictObject({
    color: zod.strictObject({
      type: zod.literal('VARIABLE_ALIAS'),
      id: zod.string(),
    }).optional(),
  })
  export type BoundVariables = zod.infer<typeof BoundVariables>

  export const PartialSolidPaint = zod.strictObject({
    type: zod.literal('SOLID'),
    color: Base.Color,
    opacity: Base.FiniteNumber,
    visible: zod.boolean(),
    blendMode: BlendMode,
    boundVariables: BoundVariables,
  }).partial().optional()

  export const FontName = zod.strictObject({
    family: zod.string(),
    style: zod.string(),
  })
  export type FontName = zod.infer<typeof FontName>

  export const ShowVisualBellOptions = zod.strictObject({
    timeout: zod.number().min(0).max(Infinity),
    error: zod.boolean(),
    onDequeue: Plugin.PluginFunction,
    button: zod.strictObject({
      text: zod.string(),
      action: Plugin.PluginFunction,
    }),
  }).partial()
  export type ShowVisualBellOptions = zod.infer<typeof ShowVisualBellOptions>

  export const Size = zod.strictObject({
    width: Base.FiniteNumber,
    height: Base.FiniteNumber,
  })
  export type Size = zod.infer<typeof Size>

  // Matrix 和 VectorPath 相关
  const MatrixRow = zod.union([
    zod.array(Base.FiniteNumber).length(3),
    zod.strictObject({ 0: Base.FiniteNumber, 1: Base.FiniteNumber, 2: Base.FiniteNumber }),
  ])
  export const Matrix = zod.union([
    zod.array(MatrixRow).length(2),
    zod.strictObject({ 0: MatrixRow, 1: MatrixRow }),
  ])
  export type Matrix = zod.infer<typeof Matrix>

  const ImageFilters = zod.strictObject({
    exposure: Base.FloatNegativeOneToOne,
    contrast: Base.FloatNegativeOneToOne,
    saturation: Base.FloatNegativeOneToOne,
    temperature: Base.FloatNegativeOneToOne,
    tint: Base.FloatNegativeOneToOne,
    highlights: Base.FloatNegativeOneToOne,
    shadows: Base.FloatNegativeOneToOne,
  }).partial()

  const GradientStop = zod.strictObject({
    position: Base.ZeroToOne,
    color: Base.ColorA,
    boundVariables: BoundVariables.optional(),
  })

  export const SolidPaint = zod.strictObject({
    type: zod.literal('SOLID'),
    color: Base.Color,
    visible: zod.boolean().optional(),
    opacity: Base.ZeroToOne.optional(),
    blendMode: BlendMode.optional(),
    boundVariables: BoundVariables.optional(),
  }).strict()

  export type SolidPaint = zod.infer<typeof SolidPaint>

  const PatternPaint = zod.strictObject({
    type: zod.literal('PATTERN'),
    tileType: zod.enum(['RECTANGULAR', 'HORIZONTAL_HEXAGONAL', 'VERTICAL_HEXAGONAL']),
    scalingFactor: Base.PositiveFloat.optional(),
    spacing: Matrix.optional(),
    horizontalAlignment: zod.enum(['START', 'CENTER', 'END']).optional(),
    verticalAlignment: zod.enum(['START', 'CENTER', 'END']).optional(),
    sourceNodeId: zod.string(),
    visible: zod.boolean().optional(),
    opacity: Base.ZeroToOne.optional(),
    blendMode: BlendMode.optional(),
  }).strict()

  const GradientPaint = zod.strictObject({
    type: zod.enum(['GRADIENT_LINEAR', 'GRADIENT_RADIAL', 'GRADIENT_ANGULAR', 'GRADIENT_DIAMOND']),
    gradientTransform: Matrix,
    gradientStops: zod.array(GradientStop),
    visible: zod.boolean().optional(),
    opacity: Base.ZeroToOne.optional(),
    blendMode: BlendMode.optional(),
  }).strict()

  const ImagePaint = zod.strictObject({
    type: zod.literal('IMAGE'),
    scaleMode: zod.enum(['FILL', 'FIT', 'CROP', 'TILE']),
    imageHash: zod.string(),
    scalingFactor: Base.PositiveFloat.optional(),
    rotation: Base.PositiveInteger.optional(),
    imageTransform: Matrix.optional(),
    filters: ImageFilters.optional(),
    visible: zod.boolean().optional(),
    opacity: Base.ZeroToOne.optional(),
    blendMode: BlendMode.optional(),
  }).strict()

  const VideoPaint = zod.strictObject({
    type: zod.literal('VIDEO'),
    scaleMode: zod.enum(['FILL', 'FIT', 'CROP', 'TILE']),
    videoHash: zod.string(),
    scalingFactor: Base.PositiveFloat.optional(),
    rotation: Base.PositiveInteger.optional(),
    videoTransform: Matrix.optional(),
    filters: ImageFilters.optional(),
    visible: zod.boolean().optional(),
    opacity: Base.ZeroToOne.optional(),
    blendMode: BlendMode.optional(),
  }).strict()

  export const Paint = zod.discriminatedUnion('type', [
    SolidPaint,
    GradientPaint,
    ImagePaint,
    VideoPaint,
    PatternPaint,
  ])
  export type Paint = zod.infer<typeof Paint>

  export const Paints = zod.array(Paint)
  export type Paints = zod.infer<typeof Paints>

  export const PaintsWithPattern = zod.array(zod.union([Paint, PatternPaint]))
  export type PaintsWithPattern = zod.infer<typeof PaintsWithPattern>
}

// ====================
// 🔹 效果 (Effect) 相关
// ====================

export namespace Effect {
  export const BoundVariables = zod.strictObject({
    color: Variable.Alias.optional(),
    radius: Variable.Alias.optional(),
    spread: Variable.Alias.optional(),
    offsetX: Variable.Alias.optional(),
    offsetY: Variable.Alias.optional(),
  })
  export type BoundVariables = zod.infer<typeof BoundVariables>

  export const BlurBoundVariables = zod.strictObject({
    radius: Variable.Alias.optional(),
  })
  export type BlurBoundVariables = zod.infer<typeof BlurBoundVariables>

  export const NoiseBoundVariables = zod.strictObject({})
  export type NoiseBoundVariables = zod.infer<typeof NoiseBoundVariables>

  export const TextureBoundVariables = zod.strictObject({})
  export type TextureBoundVariables = zod.infer<typeof TextureBoundVariables>

  const ShadowBase = {
    offset: Paint.Vector,
    color: Base.ColorA,
    blendMode: Paint.BlendMode,
    radius: Base.Float.min(0),
    spread: Base.Float.optional(),
    visible: zod.boolean(),
    boundVariables: BoundVariables.optional(),
  }

  export const InnerShadow = zod.strictObject({
    ...ShadowBase,
    type: zod.literal('INNER_SHADOW'),
  }).strict()
  export type InnerShadow = zod.infer<typeof InnerShadow>

  export const DropShadow = zod.strictObject({
    ...ShadowBase,
    type: zod.literal('DROP_SHADOW'),
    showShadowBehindNode: zod.boolean().optional(),
  }).strict()
  export type DropShadow = zod.infer<typeof DropShadow>

  const BlurBase = {
    type: zod.enum(['LAYER_BLUR', 'BACKGROUND_BLUR']),
    blurType: zod.enum(['NORMAL', 'PROGRESSIVE']).optional(),
    radius: Base.Float.min(0),
    visible: zod.boolean(),
    boundVariables: BlurBoundVariables.optional(),
  }

  export const Blur = zod.strictObject(BlurBase).strict()
  export type Blur = zod.infer<typeof Blur>

  export const ProgressiveBlur = zod.strictObject({
    ...BlurBase,
    blurType: zod.literal('PROGRESSIVE'),
    startOffset: Paint.Vector,
    endOffset: Paint.Vector,
    startRadius: Base.PositiveFloat,
  }).strict()
  export type ProgressiveBlur = zod.infer<typeof ProgressiveBlur>

  export const NormalBlur = zod.strictObject({
    ...BlurBase,
    blurType: zod.literal('NORMAL').optional(),
  }).strict()
  export type NormalBlur = zod.infer<typeof NormalBlur>

  export const Effect = zod.union([InnerShadow, DropShadow, Blur])
  export type Effect = zod.infer<typeof Effect>

  export const Effects = zod.array(Effect)
  export type Effects = zod.infer<typeof Effects>

  // 包含其他效果类型的联合
  const NoiseBase = {
    type: zod.literal('NOISE'),
    density: Base.ZeroToOne,
    noiseSize: Base.PositiveFloat,
    color: Base.ColorA,
    visible: zod.boolean(),
    boundVariables: NoiseBoundVariables.optional(),
  }

  export const MonotoneNoise = zod.strictObject({
    ...NoiseBase,
    noiseType: zod.literal('MONOTONE'),
  }).strict()

  export const DuotoneNoise = zod.strictObject({
    ...NoiseBase,
    noiseType: zod.literal('DUOTONE'),
    secondaryColor: Base.ColorA,
  }).strict()

  export const MultitoneNoise = zod.strictObject({
    ...NoiseBase,
    noiseType: zod.literal('MULTITONE'),
    opacity: Base.ZeroToOne,
  }).strict()

  export const Noise = zod.union([MonotoneNoise, DuotoneNoise, MultitoneNoise])
  export type Noise = zod.infer<typeof Noise>

  export const Texture = zod.strictObject({
    type: zod.literal('TEXTURE'),
    noiseSize: Base.PositiveFloat,
    radius: Base.PositiveFloat,
    clipToShape: zod.boolean(),
    visible: zod.boolean(),
    boundVariables: TextureBoundVariables.optional(),
  }).strict()
  export type Texture = zod.infer<typeof Texture>

  export const Glass = zod.strictObject({
    type: zod.literal('GLASS'),
    visible: zod.boolean(),
    refraction: Base.ZeroToOne,
    depth: Base.PositiveFloat,
    lightIntensity: Base.ZeroToOne,
    lightAngle: Base.Float,
    dispersion: Base.ZeroToOne,
    radius: Base.PositiveFloat,
    boundVariables: zod.strictObject({}).optional(),
  }).refine(() => getFeatureFlags().mix_gl, 'Glass effect requires mix_gl feature flag')
  export type Glass = zod.infer<typeof Glass>

  export const EffectIncludingDrawMode = zod.union([InnerShadow, DropShadow, NormalBlur, ProgressiveBlur, Noise, Texture, Glass])
  export type EffectIncludingDrawMode = zod.infer<typeof EffectIncludingDrawMode>

  export const EffectsIncludingDrawMode = zod.array(EffectIncludingDrawMode).refine(
    effects => !getFeatureFlags().mix_gl || effects.filter(e => e.type === 'GLASS').length <= 1,
    'Only one glass effect is allowed per node.',
  )
  export type EffectsIncludingDrawMode = zod.infer<typeof EffectsIncludingDrawMode>
}

// ====================
// 🔹 布局网格 (LayoutGrid) 相关
// ====================

export namespace LayoutGrid {
  export const FixedGrid = zod.strictObject({
    pattern: zod.enum(['COLUMNS', 'ROWS']),
    gutterSize: Base.Float,
    offset: Base.PositiveFloat,
    visible: zod.boolean().optional(),
    color: Base.ColorA.optional(),
    boundVariables: zod.strictObject({
      gutterSize: Variable.Alias,
      count: Variable.Alias,
      sectionSize: Variable.Alias,
      offset: Variable.Alias,
    }).partial().optional(),
    alignment: zod.enum(['MIN', 'MAX']),
    count: zod.union([Base.PositiveInteger, zod.literal(Infinity)]),
    sectionSize: Base.PositiveFloat,
  })

  export const StretchGrid = zod.strictObject({
    pattern: zod.enum(['COLUMNS', 'ROWS']),
    gutterSize: Base.Float,
    offset: Base.PositiveFloat,
    visible: zod.boolean().optional(),
    color: Base.ColorA.optional(),
    boundVariables: zod.strictObject({
      gutterSize: Variable.Alias,
      count: Variable.Alias,
      sectionSize: Variable.Alias,
      offset: Variable.Alias,
    }).partial().optional(),
    alignment: zod.literal('STRETCH'),
    count: Base.FiniteNumber.min(0),
  })

  export const CenterGrid = zod.strictObject({
    pattern: zod.enum(['COLUMNS', 'ROWS']),
    gutterSize: Base.Float,
    offset: Base.PositiveFloat,
    visible: zod.boolean().optional(),
    color: Base.ColorA.optional(),
    boundVariables: zod.strictObject({
      gutterSize: Variable.Alias,
      count: Variable.Alias,
      sectionSize: Variable.Alias,
      offset: Variable.Alias,
    }).partial().optional(),
    alignment: zod.literal('CENTER'),
    count: zod.union([Base.PositiveInteger, zod.literal(Infinity)]),
    sectionSize: Base.PositiveFloat,
  })

  export const GridGrid = zod.strictObject({
    pattern: zod.literal('GRID'),
    sectionSize: Base.PositiveFloat,
    visible: zod.boolean().optional(),
    color: Base.ColorA.optional(),
    boundVariables: zod.strictObject({
      sectionSize: Variable.Alias,
    }).partial().optional(),
  }).strict()

  export const LayoutGrid = zod.union([FixedGrid, StretchGrid, CenterGrid, GridGrid])
  export type LayoutGrid = zod.infer<typeof LayoutGrid>

  export const LayoutGrids = zod.array(LayoutGrid)
  export type LayoutGrids = zod.infer<typeof LayoutGrids>
}

// ====================
// 🔹 文本 (Text) 相关
// ====================

export namespace Text {
  export const ParameterValues = zod.array(zod.union([
    zod.strictObject({
      name: zod.string(),
      data: zod.any().optional(),
      icon: zod.union([zod.string(), zod.instanceof(Uint8Array)]).optional(),
      iconUrl: zod.string().optional(),
    }),
    zod.string(),
  ]))
  export type ParameterValues = zod.infer<typeof ParameterValues>

  export const TextReviewResultSchema = zod.array(zod.strictObject({
    start: Base.FiniteNumber.int(),
    end: Base.FiniteNumber.int(),
    suggestions: zod.array(zod.string()),
    color: zod.enum(['RED', 'BLUE', 'GREEN']).optional(),
  }))
  export type TextReviewResultSchema = zod.infer<typeof TextReviewResultSchema>

  export const CodegenResultSchema = zod.array(zod.strictObject({
    title: zod.string(),
    code: zod.string(),
    language: zod.enum([
      'TYPESCRIPT',
      'CPP',
      'RUBY',
      'CSS',
      'JAVASCRIPT',
      'HTML',
      'JSON',
      'GRAPHQL',
      'PYTHON',
      'GO',
      'SQL',
      'SWIFT',
      'KOTLIN',
      'RUST',
      'BASH',
      'PLAINTEXT',
      'DART',
    ]),
  }))
  export type CodegenResultSchema = zod.infer<typeof CodegenResultSchema>

  export const PlainTextContent = zod.strictObject({
    type: zod.literal('PLAIN_TEXT'),
    text: zod.string(),
  })
  export type PlainTextContent = zod.infer<typeof PlainTextContent>

  export const AuthRequired = zod.strictObject({ type: zod.literal('AUTH_REQUIRED') })
  export const LinkPreviewResultSchema = zod.union([AuthRequired, PlainTextContent, zod.null()])
  export type LinkPreviewResultSchema = zod.infer<typeof LinkPreviewResultSchema>

  export const AuthSuccess = zod.strictObject({ type: zod.literal('AUTH_SUCCESS') })
  export const AuthResultSchema = zod.union([AuthSuccess, zod.null()])
  export type AuthResultSchema = zod.infer<typeof AuthResultSchema>

  export const NodeStatus = zod.strictObject({
    type: zod.union([zod.literal('READY_FOR_DEV'), zod.literal('COMPLETED')]),
    description: zod.string().optional(),
  })
  export type NodeStatus = zod.infer<typeof NodeStatus>

  export const PropertyType = zod.enum(supportedStyleProperties)
  export type PropertyType = zod.infer<typeof PropertyType>

  export const Annotation = zod.strictObject({
    label: zod.string().optional(),
    labelMarkdown: zod.string().optional(),
    properties: zod.array(zod.strictObject({
      type: PropertyType,
      value: zod.any(),
    })).optional(),
    categoryId: zod.string().optional(),
  }).refine(data => !(data.label && data.labelMarkdown), 'Only one of label or labelMarkdown should be given.')
  export const AnnotationsMultipleAnnotationsPerNode = zod.array(Annotation)
  export type AnnotationsMultipleAnnotationsPerNode = zod.infer<typeof AnnotationsMultipleAnnotationsPerNode>

  export const MeasurementStartEnd = zod.strictObject({
    node: zod.any(), // 这里应该是 NodeHandle 或类似类型
    side: zod.enum(supportedDirections),
  })
  export type MeasurementStartEnd = zod.infer<typeof MeasurementStartEnd>

  export const MeasurementOffset = zod.discriminatedUnion('type', [
    zod.strictObject({ type: zod.literal('INNER'), relative: zod.number().max(1).min(-1) }),
    zod.strictObject({ type: zod.literal('OUTER'), fixed: Base.FiniteNumber.positive() }),
  ])

  export const MeasurementAddOptions = zod.strictObject({
    offset: MeasurementOffset.optional(),
    freeText: zod.string().optional(),
  }).strict()
  export type MeasurementAddOptions = zod.infer<typeof MeasurementAddOptions>

  export const MeasurementEditValue = zod.strictObject({
    offset: MeasurementOffset.optional(),
    freeText: zod.string().optional(),
  })
  export type MeasurementEditValue = zod.infer<typeof MeasurementEditValue>

  export const StrokeAlign = zod.enum(['CENTER', 'INSIDE', 'OUTSIDE'])
  export type StrokeAlign = zod.infer<typeof StrokeAlign>

  export const NumberUnit = zod.enum(['PIXELS', 'PERCENT'])
  export type NumberUnit = zod.infer<typeof NumberUnit>

  export const LetterSpacing = zod.strictObject({
    value: Base.FiniteNumber,
    unit: NumberUnit,
  }).strict()
  export type LetterSpacing = zod.infer<typeof LetterSpacing>

  export const LineHeight = zod.discriminatedUnion('unit', [
    zod.strictObject({ value: Base.FiniteNumber, unit: NumberUnit }).strict(),
    zod.strictObject({ unit: zod.literal('AUTO') }).strict(),
  ])
  export type LineHeight = zod.infer<typeof LineHeight>

  export const LeadingTrim = zod.enum(['CAP_HEIGHT', 'NONE'])
  export type LeadingTrim = zod.infer<typeof LeadingTrim>

  export const TextAlignHorizontal = zod.enum(['LEFT', 'CENTER', 'RIGHT', 'JUSTIFIED'])
  export type TextAlignHorizontal = zod.infer<typeof TextAlignHorizontal>

  export const TextAlignVertical = zod.enum(['TOP', 'CENTER', 'BOTTOM'])
  export type TextAlignVertical = zod.infer<typeof TextAlignVertical>

  export const TextCase = zod.enum(['ORIGINAL', 'UPPER', 'LOWER', 'TITLE', 'SMALL_CAPS', 'SMALL_CAPS_FORCED'])
  export type TextCase = zod.infer<typeof TextCase>

  export const TextDecoration = zod.enum(['NONE', 'UNDERLINE', 'STRIKETHROUGH'])
  export type TextDecoration = zod.infer<typeof TextDecoration>

  export const TextDecorationStyle = zod.enum(['SOLID', 'DOTTED', 'WAVY'])
  export type TextDecorationStyle = zod.infer<typeof TextDecorationStyle>

  export const TextDecorationOffset = zod.discriminatedUnion('unit', [
    zod.strictObject({ value: Base.FiniteNumber, unit: NumberUnit }).strict(),
    zod.strictObject({ unit: zod.literal('AUTO') }).strict(),
  ])
  export type TextDecorationOffset = zod.infer<typeof TextDecorationOffset>

  export const TextDecorationThickness = zod.discriminatedUnion('unit', [
    zod.strictObject({ value: Base.FiniteNumber, unit: NumberUnit }).strict(),
    zod.strictObject({ unit: zod.literal('AUTO') }).strict(),
  ])
  export type TextDecorationThickness = zod.infer<typeof TextDecorationThickness>

  export const TextDecorationColor = zod.union([
    zod.strictObject({ value: Paint.SolidPaint }).strict(),
    zod.strictObject({ value: zod.literal('AUTO') }).strict(),
  ])
  export type TextDecorationColor = zod.infer<typeof TextDecorationColor>

  export const TextAutoResize = zod.enum(['NONE', 'WIDTH_AND_HEIGHT', 'HEIGHT', 'TRUNCATE'])
  export type TextAutoResize = zod.infer<typeof TextAutoResize>

  export const TextListType = zod.enum(['NONE', 'ORDERED', 'UNORDERED'])
  export type TextListType = zod.infer<typeof TextListType>

  export const TextListOptions = zod.strictObject({ type: TextListType })
  export type TextListOptions = zod.infer<typeof TextListOptions>

  export const TextIndentation = Base.FiniteNumber.int().min(0).max(5)
  export type TextIndentation = zod.infer<typeof TextIndentation>

  export const TextHyperlinkType = zod.enum(['URL', 'NODE'])
  export type TextHyperlinkType = zod.infer<typeof TextHyperlinkType>

  export const TextHyperlinkOptions = zod.union([
    zod.strictObject({ type: TextHyperlinkType, value: zod.string() }),
    zod.null(),
  ])
  export type TextHyperlinkOptions = zod.infer<typeof TextHyperlinkOptions>

  export const TextTruncation = zod.enum(['DISABLED', 'ENDING'])
  export type TextTruncation = zod.infer<typeof TextTruncation>

  export const StyledTextSegmentFields = zod.array(zod.enum([
    'fontSize',
    'fontName',
    'fontWeight',
    'textDecoration',
    'textDecorationStyle',
    'textDecorationSkipInk',
    'textDecorationOffset',
    'textDecorationThickness',
    'textDecorationColor',
    'textCase',
    'lineHeight',
    'letterSpacing',
    'fills',
    'textStyleId',
    'fillStyleId',
    'listOptions',
    'indentation',
    'hyperlink',
    'openTypeFeatures',
    'boundVariables',
    'textStyleOverrides',
    'paragraphSpacing',
    'listSpacing',
    'paragraphIndent',
  ]))
  export type StyledTextSegmentFields = zod.infer<typeof StyledTextSegmentFields>
}

// ====================
// 🔹 导出 (Export) 相关
// ====================

export namespace Export {
  export const exportColorProfile = zod.enum(['DOCUMENT', 'SRGB', 'DISPLAY_P3_V4']).optional()

  const ImageExport = zod.strictObject({
    format: zod.enum(['PNG', 'JPG']),
    contentsOnly: zod.boolean().optional(),
    suffix: zod.string().optional(),
    useAbsoluteBounds: zod.boolean().optional(),
    constraint: zod.union([
      zod.strictObject({ type: zod.enum(['SCALE']), value: Base.FiniteNumber }),
      zod.strictObject({ type: zod.enum(['WIDTH', 'HEIGHT']), value: Base.FiniteNumber }),
    ]).optional(),
    colorProfile: exportColorProfile,
  })

  const PdfExport = zod.strictObject({
    format: zod.literal('PDF'),
    contentsOnly: zod.boolean().optional(),
    suffix: zod.string().optional(),
    useAbsoluteBounds: zod.boolean().optional(),
    colorProfile: exportColorProfile,
  })

  const SvgExport = zod.strictObject({
    format: zod.enum(['SVG', 'SVG_STRING']),
    contentsOnly: zod.boolean().optional(),
    suffix: zod.string().optional(),
    svgOutlineText: zod.boolean().optional(),
    svgIdAttribute: zod.boolean().optional(),
    svgSimplifyStroke: zod.boolean().optional(),
    useAbsoluteBounds: zod.boolean().optional(),
    colorProfile: exportColorProfile,
  })

  const JsonExport = zod.strictObject({
    format: zod.enum(['JSON_REST_V1']),
  })

  export function getExportAsyncSetting(includeFirstDraft = false) {
    const formats = [ImageExport, PdfExport, SvgExport, JsonExport] as const
    return zod.discriminatedUnion('format', [
      ...formats,
      zod.strictObject({ format: includeFirstDraft ? zod.enum(['JSON_REST_V1', 'FIRST_DRAFT_JSON']) : zod.enum(['JSON_REST_V1']) }),
    ])
  }

  export const ExportSetting = zod.discriminatedUnion('format', [ImageExport, PdfExport, SvgExport])
  export type ExportSetting = zod.infer<typeof ExportSetting>

  export const ExportSettings = zod.array(ExportSetting)
  export type ExportSettings = zod.infer<typeof ExportSettings>
}

// ====================
// 🔹 布局 (Layout) 相关
// ====================

export namespace Layout {

  export const StrokeAlign = zod.enum(['CENTER', 'INSIDE', 'OUTSIDE'])
  export type StrokeAlign = zod.infer<typeof StrokeAlign>
  export const ConstraintType = zod.enum(['MIN', 'CENTER', 'MAX', 'STRETCH', 'SCALE'])
  export type ConstraintType = zod.infer<typeof ConstraintType>

  export const Constraints = zod.strictObject({
    horizontal: ConstraintType,
    vertical: ConstraintType,
  })
  export type Constraints = zod.infer<typeof Constraints>

  export const OverflowDirection = zod.enum(['NONE', 'HORIZONTAL', 'VERTICAL', 'BOTH'])
  export type OverflowDirection = zod.infer<typeof OverflowDirection>

  export const LayoutAlign = zod.enum(['MIN', 'CENTER', 'MAX', 'STRETCH', 'INHERIT'])
  export type LayoutAlign = zod.infer<typeof LayoutAlign>

  export const LayoutMode = zod.enum(['NONE', 'HORIZONTAL', 'VERTICAL', 'GRID'])
  export type LayoutMode = zod.infer<typeof LayoutMode>

  export const StackWrap = zod.enum(['NO_WRAP', 'WRAP'])
  export type StackWrap = zod.infer<typeof StackWrap>

  export const StackCounterAlignContent = zod.enum(['AUTO', 'SPACE_BETWEEN'])
  export type StackCounterAlignContent = zod.infer<typeof StackCounterAlignContent>

  export const StackJustify = zod.enum(['MIN', 'MAX', 'CENTER', 'SPACE_BETWEEN'])
  export type StackJustify = zod.infer<typeof StackJustify>

  export const StackJustifyLegacy = zod.enum(['MIN', 'MAX', 'CENTER', 'SPACE_BETWEEN', 'SPACE_BETWEEN_LEGACY'])
  export type StackJustifyLegacy = zod.infer<typeof StackJustifyLegacy>

  export const StackAlign = zod.enum(['MIN', 'MAX', 'CENTER', 'BASELINE'])
  export type StackAlign = zod.infer<typeof StackAlign>

  export const SizingMode = zod.enum(['FIXED', 'AUTO'])
  export type SizingMode = zod.infer<typeof SizingMode>

  export const SizingModeLegacy = zod.enum(['FIXED', 'AUTO', 'LEGACY_AUTO'])
  export type SizingModeLegacy = zod.infer<typeof SizingModeLegacy>

  export const LayoutSizing = zod.enum(['FIXED', 'HUG', 'FILL'])
  export type LayoutSizing = zod.infer<typeof LayoutSizing>

  export const LayoutPositioning = zod.enum(['AUTO', 'ABSOLUTE'])
  export type LayoutPositioning = zod.infer<typeof LayoutPositioning>

  export const GridTrackSizingType = zod.enum(['FLEX', 'FIXED', 'HUG'])
  export type GridTrackSizingType = zod.infer<typeof GridTrackSizingType>

  export const GridChildAlign = zod.enum(['MIN', 'CENTER', 'MAX', 'AUTO'])
  export type GridChildAlign = zod.infer<typeof GridChildAlign>

  export const GridTrackSize = zod.strictObject({
    type: GridTrackSizingType,
    value: Base.PositiveFloat.optional(),
  })
  export type GridTrackSize = zod.infer<typeof GridTrackSize>

  export const HandlePointrroring = zod.enum(['NONE', 'ANGLE', 'ANGLE_AND_LENGTH'])
  export type HandlePointrroring = zod.infer<typeof HandlePointrroring>

  export const StrokeJoin = zod.enum(['MITER', 'BEVEL', 'ROUND'])
  export type StrokeJoin = zod.infer<typeof StrokeJoin>

  export const StrokeCap = zod.enum(['NONE', 'ROUND', 'SQUARE', 'ARROW_LINES', 'ARROW_EQUILATERAL', 'DIAMOND_FILLED', 'TRIANGLE_FILLED', 'CIRCLE_FILLED'])
  export type StrokeCap = zod.infer<typeof StrokeCap>
}

// ====================
// 🔹 向量 (Vector) 相关
// ====================

export namespace Vector {
  export const WindingRule = zod.enum(['NONZERO', 'EVENODD'])
  export type WindingRule = zod.infer<typeof WindingRule>

  export const VectorPath = zod.strictObject({
    windingRule: zod.union([WindingRule, zod.literal('NONE')]),
    data: zod.string(),
  })
  export type VectorPath = zod.infer<typeof VectorPath>

  export const VectorPaths = zod.array(VectorPath)
  export type VectorPaths = zod.infer<typeof VectorPaths>

  export const Vertex = zod.strictObject({
    x: Base.FiniteNumber,
    y: Base.FiniteNumber,
    strokeCap: Layout.StrokeCap.optional(),
    strokeJoin: Layout.StrokeJoin.optional(),
    cornerRadius: Base.PositiveFloat.optional(),
    handlePointrroring: Layout.HandlePointrroring.optional(),
  })
  export type Vertex = zod.infer<typeof Vertex>

  export const Segment = zod.strictObject({
    start: Base.PositiveInteger,
    end: Base.PositiveInteger,
    tangentStart: Paint.Vector.optional(),
    tangentEnd: Paint.Vector.optional(),
  }).strict()
  export type Segment = zod.infer<typeof Segment>

  export const Region = zod.strictObject({
    windingRule: WindingRule,
    loops: zod.array(zod.array(Base.PositiveInteger)),
    fills: Paint.Paints.optional(),
    fillStyleId: zod.string().optional(),
  })
  export type Region = zod.infer<typeof Region>

  export const VectorNetwork = zod.strictObject({
    vertices: zod.array(Vertex),
    segments: zod.array(Segment),
    regions: zod.array(Region).optional(),
  }).strict()
  export type VectorNetwork = zod.infer<typeof VectorNetwork>

  export const CanvasGrid = zod.array(zod.array(zod.strictObject({ id: zod.string() })))
  export type CanvasGrid = zod.infer<typeof CanvasGrid>
}

// ====================
// 🔹 其他
// ====================

export namespace Pointsc {
  export const MaxLines = zod.number().int().min(1).finite().nullable()
  export type MaxLines = zod.infer<typeof MaxLines>

  export const FetchInitOptions = zod.strictObject({
    method: zod.string().optional(),
    headersObject: zod.record(zod.string()).optional(),
    headers: zod.record(zod.string()).optional(),
    body: zod.union([zod.instanceof(Uint8Array), zod.string()]).optional(),
    credentials: zod.string().optional(),
    cache: zod.string().optional(),
    redirect: zod.string().optional(),
    referrer: zod.string().optional(),
    integrity: zod.string().optional(),
  }).optional()
  export type FetchInitOptions = zod.infer<typeof FetchInitOptions>

  export const Guide = zod.strictObject({
    axis: zod.enum(['X', 'Y']),
    offset: Base.FiniteNumber,
  }).strict()
  export type Guide = zod.infer<typeof Guide>

  export const Guides = zod.array(Guide)
  export type Guides = zod.infer<typeof Guides>

  export const FlowStartingPoints = zod.array(zod.strictObject({
    nodeId: zod.string(),
    name: zod.string(),
  }))
  export type FlowStartingPoints = zod.infer<typeof FlowStartingPoints>

  export const PlaybackSettings = zod.strictObject({
    autoplay: zod.boolean(),
    loop: zod.boolean(),
    muted: zod.boolean(),
  })
  export type PlaybackSettings = zod.infer<typeof PlaybackSettings>

  export const SelectedText = zod.union([
    zod.strictObject({
      node: zod.strictObject({ id: zod.string() }),
      start: Base.PositiveInteger,
      end: Base.PositiveInteger,
    }).strict(),
    zod.null(),
  ])
  export type SelectedText = zod.infer<typeof SelectedText>

  export const BooleanOperation = zod.enum(['UNION', 'INTERSECT', 'SUBTRACT', 'EXCLUDE'])
  export type BooleanOperation = zod.infer<typeof BooleanOperation>

  export const ArcData = zod.strictObject({
    startingAngle: Base.FiniteNumber,
    endingAngle: Base.FiniteNumber,
    innerRadius: Base.ZeroToOne,
  })
  export type ArcData = zod.infer<typeof ArcData>

  export const RelaunchData = zod.record(zod.string())
  export type RelaunchData = zod.infer<typeof RelaunchData>

  export const ShapeWithTextType = zod.enum([
    'SQUARE',
    'ELLIPSE',
    'ROUNDED_RECTANGLE',
    'DIAMOND',
    'TRIANGLE_UP',
    'TRIANGLE_DOWN',
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
  export type ShapeWithTextType = zod.infer<typeof ShapeWithTextType>

  export const CodeBlockLanguage = zod.enum([
    'TYPESCRIPT',
    'CPP',
    'RUBY',
    'CSS',
    'JAVASCRIPT',
    'HTML',
    'JSON',
    'GRAPHQL',
    'PYTHON',
    'GO',
    'SQL',
    'SWIFT',
    'KOTLIN',
    'RUST',
    'BASH',
    'PLAINTEXT',
    'DART',
  ])
  export type CodeBlockLanguage = zod.infer<typeof CodeBlockLanguage>
}

// ====================
// 🔹 组件 (Component) 相关
// ====================

export namespace Component {
  const BaseTypes = ['BOOLEAN', 'TEXT', 'INSTANCE_SWAP', 'IMAGE'] as const
  const WithNumber = [...BaseTypes, 'NUMBER'] as const
  const WithVariant = [...BaseTypes, 'VARIANT'] as const
  const WithNumberAndVariant = [...WithNumber, 'VARIANT'] as const

  export const PropertyType = zod.enum(WithVariant)
  export type PropertyType = zod.infer<typeof PropertyType>

  export const PropertyTypeWithNumber = zod.enum(WithNumberAndVariant)
  export type PropertyTypeWithNumber = zod.infer<typeof PropertyTypeWithNumber>

  export const PropertyValue = zod.union([zod.boolean(), zod.string()])
  export type PropertyValue = zod.infer<typeof PropertyValue>

  export const PropertyValueWithNumber = zod.union([zod.boolean(), zod.string(), Base.FiniteNumber])
  export type PropertyValueWithNumber = zod.infer<typeof PropertyValueWithNumber>

  export const PropertyValueWithVariable = zod.union([zod.boolean(), zod.string(), Variable.Alias])
  export type PropertyValueWithVariable = zod.infer<typeof PropertyValueWithVariable>

  export const PropertyValueWithNumberAndVariable = zod.union([zod.boolean(), zod.string(), Base.FiniteNumber, Variable.Alias])
  export type PropertyValueWithNumberAndVariable = zod.infer<typeof PropertyValueWithNumberAndVariable>

  export const InstanceSwapPreferredValueType = zod.enum(['COMPONENT', 'COMPONENT_SET'])
  export type InstanceSwapPreferredValueType = zod.infer<typeof InstanceSwapPreferredValueType>

  export const InstanceSwapPreferredValue = zod.strictObject({
    type: InstanceSwapPreferredValueType,
    key: zod.string(),
  })
  export type InstanceSwapPreferredValue = zod.infer<typeof InstanceSwapPreferredValue>

  export const PreferredValues = zod.array(InstanceSwapPreferredValue)
  export type PreferredValues = zod.infer<typeof PreferredValues>

  export const Options = zod.strictObject({
    preferredValues: PreferredValues.optional(),
  }).optional()
  export type Options = zod.infer<typeof Options>

  export const DefinitionSchema = zod.strictObject({
    name: zod.string().optional(),
    defaultValue: PropertyValue.optional(),
    preferredValues: PreferredValues.optional(),
  })
  export type DefinitionSchema = zod.infer<typeof DefinitionSchema>

  export const DefinitionSchemaWithNumber = zod.strictObject({
    name: zod.string().optional(),
    defaultValue: PropertyValueWithNumber.optional(),
    preferredValues: PreferredValues.optional(),
  })
  export type DefinitionSchemaWithNumber = zod.infer<typeof DefinitionSchemaWithNumber>

  export const DefinitionSchemaWithVariable = zod.strictObject({
    name: zod.string().optional(),
    defaultValue: PropertyValueWithVariable.optional(),
    preferredValues: PreferredValues.optional(),
  })
  export type DefinitionSchemaWithVariable = zod.infer<typeof DefinitionSchemaWithVariable>

  export const DefinitionSchemaWithNumberAndVariable = zod.strictObject({
    name: zod.string().optional(),
    defaultValue: PropertyValueWithNumberAndVariable.optional(),
    preferredValues: PreferredValues.optional(),
  })
  export type DefinitionSchemaWithNumberAndVariable = zod.infer<typeof DefinitionSchemaWithNumberAndVariable>

  export const References = zod.strictObject({
    visible: zod.string().optional(),
    characters: zod.string().optional(),
    mainComponent: zod.string().optional(),
  }).strict()
  export type References = zod.infer<typeof References>
}

// ====================
// 🔹 连接器 (Connector) 相关
// ====================

export namespace Connector {
  export const Magnet = zod.enum(['NONE', 'AUTO', 'TOP', 'LEFT', 'BOTTOM', 'RIGHT', 'CENTER'])
  export type Magnet = zod.infer<typeof Magnet>

  export const Endpoint = zod.union([
    zod.strictObject({ endpointNodeId: zod.string(), position: Paint.Vector }),
    zod.strictObject({ position: Paint.Vector }),
    zod.strictObject({ endpointNodeId: zod.string(), magnet: Magnet }),
  ])
  export type Endpoint = zod.infer<typeof Endpoint>

  export const LineType = zod.enum(['ELBOWED', 'STRAIGHT', 'CURVED'])
  export type LineType = zod.infer<typeof LineType>

  export const StrokeCap = zod.enum(['NONE', 'ARROW_EQUILATERAL', 'ARROW_LINES', 'TRIANGLE_FILLED', 'DIAMOND_FILLED', 'CIRCLE_FILLED'])
  export type StrokeCap = zod.infer<typeof StrokeCap>
}

// ====================
// 🔹 查找 (Find) 相关
// ====================

export namespace Find {
  export const FindCriteriaWithPluginDataSchema = zod.strictObject({
    types: zod.array(zod.enum(supportedNodeTypes)).optional(),
    sharedPluginData: zod.strictObject({
      namespace: zod.string(),
      keys: zod.array(zod.string()).optional(),
    }).optional(),
    pluginData: zod.strictObject({
      keys: zod.array(zod.string()).optional(),
    }).optional(),
  })
  export type FindCriteriaWithPluginDataSchema = zod.infer<typeof FindCriteriaWithPluginDataSchema>
}

// ====================
// 🔹 导出默认对象
// ====================

// 为了兼容旧代码中的 `n` 或 `N`
export const FigmaSchema = {
  ...Base,
  ...Variable,
  ...Reaction,
  ...Paint,
  ...Effect,
  ...LayoutGrid,
  ...Text,
  ...Export,
  ...Layout,
  ...Vector,
  ...Pointsc,
  ...Component,
  ...Connector,
  ...Plugin,
  ...Find,
  // 保留一些顶层的常量
  BuzzAssetType: Paint.BuzzAssetType,
  VariableDataType: Variable.DataType,
  VariableResolvedDataType: Variable.ResolvedDataType,
  ExpressionFunction: Variable.ExpressionFunction,
  VariableAlias: Variable.Alias,
  VariableData: Variable.Data,
  Expression: Variable.Expression,
  Navigation: Reaction.Navigation,
  Easing: Reaction.Easing,
  SimpleTransition: Reaction.SimpleTransition,
  DirectionalTransition: Reaction.DirectionalTransition,
  Transition: Reaction.Transition,
  Vector: Reaction.Vector,
  ReactionActionNoConditional: Reaction.ActionNoConditional,
  Trigger: Reaction.Trigger,
  ConditionalBlock: Reaction.ConditionalBlock,
  ReactionAction: Reaction.Action,
  Reaction: Reaction.Reaction,
  Reactions: Reaction.Reactions,
  MaskType: Paint.MaskType,
  UInt8Array: zod.instanceof(Uint8Array),
  ColorInput: Base.ColorInput,
  BlendMode: Paint.BlendMode,
  PaintBoundVariables: Paint.BoundVariables,
  PartialSolidPaint: Paint.PartialSolidPaint,
  FontName: Paint.FontName,
  ShowVisualBellOptions: Paint.ShowVisualBellOptions,
  Size: Paint.Size,
  Matrix: Paint.Matrix,
  LayoutGrid: LayoutGrid.LayoutGrid,
  LayoutGrids: LayoutGrid.LayoutGrids,
  ParameterValues: Text.ParameterValues,
  TextReviewResultSchema: Text.TextReviewResultSchema,
  CodegenResultSchema: Text.CodegenResultSchema,
  PlainTextContent: Text.PlainTextContent,
  LinkPreviewResultSchema: Text.LinkPreviewResultSchema,
  AuthResultSchema: Text.AuthResultSchema,
  NodeStatus: Text.NodeStatus,
  AnnotationsMarkdownMultipleAnnotationsPerNode: Text.AnnotationsMultipleAnnotationsPerNode,
  AnnotationMeasurementStartEnd: Text.MeasurementStartEnd,
  AnnotationMeasurementAddOptions: Text.MeasurementAddOptions,
  AnnotationMeasurementEditValue: Text.MeasurementEditValue,
  StrokeAlign: Layout.StrokeAlign,
  NumberUnit: Text.NumberUnit,
  LetterSpacing: Text.LetterSpacing,
  LineHeight: Text.LineHeight,
  LeadingTrim: Text.LeadingTrim,
  TextAlignHorizontal: Text.TextAlignHorizontal,
  TextAlignVertical: Text.TextAlignVertical,
  TextCase: Text.TextCase,
  TextDecoration: Text.TextDecoration,
  TextDecorationStyle: Text.TextDecorationStyle,
  TextDecorationOffset: Text.TextDecorationOffset,
  TextDecorationThickness: Text.TextDecorationThickness,
  TextDecorationColor: Text.TextDecorationColor,
  TextAutoResize: Text.TextAutoResize,
  TextListType: Text.TextListType,
  TextListOptions: Text.TextListOptions,
  TextIndentation: Text.TextIndentation,
  TextHyperlinkType: Text.TextHyperlinkType,
  TextHyperlinkOptions: Text.TextHyperlinkOptions,
  FindCriteriaWithPluginDataSchema: Find.FindCriteriaWithPluginDataSchema,
  getPluginDataNormalLimit: Plugin.getPluginDataNormalLimit,
  PluginDataEntryNormalLimitSchema: Plugin.PluginDataEntryNormalLimitSchema,
  getPluginDataEscapeHatchLimit: Plugin.getPluginDataEscapeHatchLimit,
  PluginDataEntryEscapeHatchLimitSchema: Plugin.PluginDataEntryEscapeHatchLimitSchema,
  TextTruncation: Text.TextTruncation,
  exportColorProfile: Export.exportColorProfile,
  getExportAsyncSetting: Export.getExportAsyncSetting,
  ConstraintType: Layout.ConstraintType,
  Constraints: Layout.Constraints,
  OverflowDirection: Layout.OverflowDirection,
  LayoutAlign: Layout.LayoutAlign,
  LayoutMode: Layout.LayoutMode,
  StackWrap: Layout.StackWrap,
  StackCounterAlignContent: Layout.StackCounterAlignContent,
  StackJustify: Layout.StackJustify,
  StackJustifyLegacy: Layout.StackJustifyLegacy,
  StackAlign: Layout.StackAlign,
  SizingMode: Layout.SizingMode,
  SizingModeLegacy: Layout.SizingModeLegacy,
  LayoutSizing: Layout.LayoutSizing,
  LayoutPositioning: Layout.LayoutPositioning,
  GridTrackSizingType: Layout.GridTrackSizingType,
  GridChildAlign: Layout.GridChildAlign,
  GridTrackSize: Layout.GridTrackSize,
  HandlePointrroring: Layout.HandlePointrroring,
  StrokeJoin: Layout.StrokeJoin,
  StrokeCap: Layout.StrokeCap,
  CanvasGrid: Vector.CanvasGrid,
  VectorPaths: Vector.VectorPaths,
  MaxLines: Pointsc.MaxLines,
  FetchInitOptions: Pointsc.FetchInitOptions,
  Guide: Pointsc.Guide,
  Guides: Pointsc.Guides,
  FlowStartingPoints: Pointsc.FlowStartingPoints,
  PlaybackSettings: Pointsc.PlaybackSettings,
  SelectedText: Pointsc.SelectedText,
  BooleanOperation: Pointsc.BooleanOperation,
  ArcData: Pointsc.ArcData,
  ExportSetting: Export.ExportSetting,
  ExportSettings: Export.ExportSettings,
  VariableDataSchema: Variable.DataSchema,
  RelaunchData: Pointsc.RelaunchData,
  StyledTextSegmentFields: Text.StyledTextSegmentFields,
  ShapeWithTextType: Pointsc.ShapeWithTextType,
  CodeBlockLanguage: Pointsc.CodeBlockLanguage,
  ComponentPropertyType: Component.PropertyType,
  ComponentPropertyTypeWithNumber: Component.PropertyTypeWithNumber,
  ComponentPropertyValue: Component.PropertyValue,
  ComponentPropertyValueWithNumber: Component.PropertyValueWithNumber,
  ComponentPropertyValueWithVariable: Component.PropertyValueWithVariable,
  ComponentPropertyValueWithNumberAndVariable: Component.PropertyValueWithNumberAndVariable,
  InstanceSwapPreferredValueType: Component.InstanceSwapPreferredValueType,
  InstanceSwapPreferredValue: Component.InstanceSwapPreferredValue,
  ComponentPropertyPreferredValues: Component.PreferredValues,
  ComponentPropertyOptions: Component.Options,
  ComponentPropertyDefinitionSchema: Component.DefinitionSchema,
  ComponentPropertyDefinitionSchemaWithNumber: Component.DefinitionSchemaWithNumber,
  ComponentPropertyDefinitionSchemaWithVariable: Component.DefinitionSchemaWithVariable,
  ComponentPropertyDefinitionSchemaWithNumberAndVariable: Component.DefinitionSchemaWithNumberAndVariable,
  ComponentPropertyReferences: Component.References,
  ConnectorMagnet: Connector.Magnet,
  ConnectorEndpoint: Connector.Endpoint,
  ConnectorLineType: Connector.LineType,
  ConnectorStrokeCap: Connector.StrokeCap,
}
export const N = FigmaSchema
