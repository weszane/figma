import { z } from 'zod'
import { AffineTransformSchema, ColorRGBASchema, PointSchema, RectangleSchema, SessionInfoSchema, VariableAliasSchema, VectorPairSchema } from '../905/333600'
import { BlendModeSchema } from '../905/722575'
import { transformZodSchema } from '../905/797463'
import { AnimationTriggerType, BlendMode, EasingType, HorizontalAlign, ListStyleType, TextDecoration, TextScriptType, VerticalAlign } from '../905/927405'

let o = z.object({
  size: z.object({
    x: VariableAliasSchema,
    y: VariableAliasSchema,
  }).partial(),
  individualStrokeWeights: z.object({
    BORDER_TOP_WEIGHT: VariableAliasSchema,
    BORDER_RIGHT_WEIGHT: VariableAliasSchema,
    BORDER_LEFT_WEIGHT: VariableAliasSchema,
    BORDER_BOTTOM_WEIGHT: VariableAliasSchema,
  }).partial(),
  characters: VariableAliasSchema,
  itemSpacing: VariableAliasSchema,
  paddingLeft: VariableAliasSchema,
  paddingRight: VariableAliasSchema,
  paddingTop: VariableAliasSchema,
  paddingBottom: VariableAliasSchema,
  visible: VariableAliasSchema,
  rectangleCornerRadii: z.object({
    RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS: VariableAliasSchema,
    RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS: VariableAliasSchema,
    RECTANGLE_TOP_LEFT_CORNER_RADIUS: VariableAliasSchema,
    RECTANGLE_TOP_RIGHT_CORNER_RADIUS: VariableAliasSchema,
  }).partial(),
  topLeftRadius: VariableAliasSchema,
  topRightRadius: VariableAliasSchema,
  bottomLeftRadius: VariableAliasSchema,
  bottomRightRadius: VariableAliasSchema,
  minWidth: VariableAliasSchema,
  maxWidth: VariableAliasSchema,
  minHeight: VariableAliasSchema,
  maxHeight: VariableAliasSchema,
  counterAxisSpacing: VariableAliasSchema,
  opacity: VariableAliasSchema,
  fontFamily: z.array(VariableAliasSchema),
  fontSize: z.array(VariableAliasSchema),
  fontStyle: z.array(VariableAliasSchema),
  fontWeight: z.array(VariableAliasSchema),
  letterSpacing: z.array(VariableAliasSchema),
  lineHeight: z.array(VariableAliasSchema),
  paragraphSpacing: z.array(VariableAliasSchema),
  paragraphIndent: z.array(VariableAliasSchema),
  fills: z.array(VariableAliasSchema),
  strokes: z.array(VariableAliasSchema),
  componentProperties: z.record(VariableAliasSchema),
  textRangeFills: z.array(VariableAliasSchema),
  effects: z.array(VariableAliasSchema),
  layoutGrids: z.array(VariableAliasSchema),
}).partial().optional()
let accessibilityPropertiesSchema = z.object({
  accessibleHTMLTag: z.string().optional(),
  accessibleLabel: z.string().optional(),
  ariaAttributes: z.object({
    ariaHidden: z.boolean().optional(),
    ariaRole: z.string().optional(),
    ariaCurrent: z.string().optional(),
  }).optional(),
  isDecorativeImage: z.boolean().optional(),
})
let animationTriggerTypeSchema = z.nativeEnum(AnimationTriggerType)
let animationTransitionSchema = z.object({
  easingType: z.nativeEnum(EasingType),
  easingFunction: z.array(z.number()).length(4),
  transitionDuration: z.number(),
  delay: z.number(),
})
let animationStateSchema = z.object({
  opacity: z.number(),
  transform: AffineTransformSchema,
})
let animationAppearTriggerTypes = z.enum(['PAGE_LOAD', 'THIS_LAYER_IN_VIEW', 'OTHER_LAYER_IN_VIEW', 'SCROLL_DIRECTION'])
let animationScrollTriggerTypes = z.enum(['PAGE_HEIGHT', 'THIS_LAYER_IN_VIEW', 'OTHER_LAYER_IN_VIEW'])
let baseAppearAnimationSchema = z.object({
  behaviorType: z.literal(animationTriggerTypeSchema.enum.Appear),
  trigger: animationAppearTriggerTypes,
  enterTransition: animationTransitionSchema,
  enterState: animationStateSchema,
})
let baseAppearExitAnimationSchema = z.object({
  ...baseAppearAnimationSchema.shape,
  exitTransition: animationTransitionSchema,
  exitState: animationStateSchema,
})
let pageLoadAnimationSchema = z.object({
  ...baseAppearAnimationSchema.shape,
  trigger: z.literal(animationAppearTriggerTypes.enum.PAGE_LOAD),
})
let thisLayerInViewAnimationSchema = z.object({
  ...baseAppearExitAnimationSchema.shape,
  trigger: z.literal(animationAppearTriggerTypes.enum.THIS_LAYER_IN_VIEW),
  playsOnce: z.boolean(),
})
let otherLayerInViewAnimationSchema = z.object({
  ...baseAppearExitAnimationSchema.shape,
  trigger: z.literal(animationAppearTriggerTypes.enum.OTHER_LAYER_IN_VIEW),
  otherLayer: SessionInfoSchema,
  playsOnce: z.boolean(),
})
let scrollDirectionAnimationSchema = z.object({
  ...baseAppearAnimationSchema.shape,
  trigger: z.literal(animationAppearTriggerTypes.enum.SCROLL_DIRECTION),
  playsOnce: z.boolean(),
})
let hoverAnimationSchema = z.object({
  behaviorType: z.literal(animationTriggerTypeSchema.enum.Hover),
  transition: animationTransitionSchema,
  state: animationStateSchema,
})
let pressAnimationSchema = z.object({
  behaviorType: z.literal(animationTriggerTypeSchema.enum.Press),
  transition: animationTransitionSchema,
  state: animationStateSchema,
})
let focusAnimationSchema = z.object({
  behaviorType: z.literal(animationTriggerTypeSchema.enum.Focus),
  transition: animationTransitionSchema,
  state: animationStateSchema,
})
let scrollParallaxAnimationSchema = z.object({
  behaviorType: z.literal(animationTriggerTypeSchema.enum.ScrollParallax),
  speed: z.number(),
})
let baseScrollTransformAnimationSchema = z.object({
  behaviorType: z.literal(animationTriggerTypeSchema.enum.ScrollTransform),
  fromState: animationStateSchema,
  toState: animationStateSchema,
  transition: animationTransitionSchema,
})
let pageHeightScrollTransformAnimationSchema = z.object({
  ...baseScrollTransformAnimationSchema.shape,
  trigger: z.literal(animationScrollTriggerTypes.enum.PAGE_HEIGHT),
})
let thisLayerInViewScrollTransformAnimationSchema = z.object({
  ...baseScrollTransformAnimationSchema.shape,
  trigger: z.literal(animationScrollTriggerTypes.enum.THIS_LAYER_IN_VIEW),
  playsOnce: z.boolean(),
})
let otherLayerInViewScrollTransformAnimationSchema = z.object({
  ...baseScrollTransformAnimationSchema.shape,
  trigger: z.literal(animationScrollTriggerTypes.enum.OTHER_LAYER_IN_VIEW),
  otherLayer: SessionInfoSchema,
  playsOnce: z.boolean(),
})
let cursorAnimationSchema = z.object({
  behaviorType: z.literal(animationTriggerTypeSchema.enum.Cursor),
  hotspotX: z.number(),
  hotspotY: z.number(),
  cursorGuid: SessionInfoSchema,
  cursorFileName: z.string().optional(),
})
let marqueeAnimationSchema = z.object({
  behaviorType: z.literal(animationTriggerTypeSchema.enum.Marquee),
  direction: z.enum(['LEFT', 'RIGHT', 'UP', 'DOWN']),
  speed: z.number(),
  shouldLoopInfinitely: z.boolean(),
})
let imageDataSchema = z.object({
  image: z.string().nullable(),
  imageThumbnail: z.string().nullable(),
  animatedImage: z.string().nullable(),
  altText: z.string(),
  originalImageHeight: z.number(),
  originalImageWidth: z.number(),
  animationFrame: z.number(),
})

let codeBehaviorSchema = z.object({
  behaviorType: z.literal(animationTriggerTypeSchema.enum.Code),
  codeComponentId: z.string(),
  assignments: z.record(z.string(), z.union([z.string(), z.boolean(), z.number(), imageDataSchema])),
  codeBehaviorData: z.object({
    category: z.string().optional(),
    nodeTypes: z.array(z.string()).optional(),
  }),
})
let appearAnimationUnion = z.discriminatedUnion('trigger', [pageLoadAnimationSchema, thisLayerInViewAnimationSchema, otherLayerInViewAnimationSchema, scrollDirectionAnimationSchema])
let scrollTransformAnimationUnion = z.discriminatedUnion('trigger', [pageHeightScrollTransformAnimationSchema, thisLayerInViewScrollTransformAnimationSchema, otherLayerInViewScrollTransformAnimationSchema])
let animationsSchema = z.object({
  appear: appearAnimationUnion,
  hover: hoverAnimationSchema,
  press: pressAnimationSchema,
  focus: focusAnimationSchema,
  scrollParallax: scrollParallaxAnimationSchema,
  scrollTransform: scrollTransformAnimationUnion,
  cursor: cursorAnimationSchema,
  marquee: marqueeAnimationSchema,
  code: z.array(codeBehaviorSchema),
}).partial().nullable()
let behaviorsSchema = z.object({
  behaviors: animationsSchema,
}).partial()
let nodePropertiesSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  overrideKey: z.string().optional(),
  visible: z.boolean().optional(),
  locked: z.boolean().optional(),
  isFixed: z.boolean().optional(),
  scrollBehavior: z.enum(['SCROLLS', 'FIXED', 'STICKY_SCROLLS']).optional(),
  componentPropertyReferences: z.record(z.string()).optional(),
  boundVariables: o,
  explicitVariableModes: z.record(z.string()).optional(),
  ...accessibilityPropertiesSchema.shape,
})
let blendModeSchema = z.nativeEnum(BlendMode)
let blendPropertiesSchema = z.object({
  blendMode: blendModeSchema.optional(),
  opacity: z.number().gte(0).lte(1).optional(),
})

let constraintsSchema = z.object({
  vertical: z.nativeEnum(VerticalAlign),
  horizontal: z.nativeEnum(HorizontalAlign),
})
let pixelOffsetSchema = z.object({
  pixelOffset: z.number(),
  sizeFraction: z.number(),
}).optional()
let H = z.object({
  absoluteBoundingBox: RectangleSchema,
  isolatedAbsoluteRenderBounds: z.union([RectangleSchema, z.null()]).optional(),
  constraints: constraintsSchema.optional(),
  relativeTransform: VectorPairSchema,
  size: PointSchema,
  layoutAlign: z.enum(['INHERIT', 'STRETCH', 'MIN', 'CENTER', 'MAX']).optional(),
  layoutGrow: z.number().optional(),
  layoutPositioning: z.enum(['AUTO', 'ABSOLUTE']).optional(),
  gridColumnAnchorIndex: z.number().optional(),
  gridRowAnchorIndex: z.number().optional(),
  gridColumnSpan: z.number().optional(),
  gridRowSpan: z.number().optional(),
  gridChildHorizontalAlign: z.enum(['MIN', 'CENTER', 'MAX']).optional(),
  gridChildVerticalAlign: z.enum(['MIN', 'CENTER', 'MAX']).optional(),
  minWidth: z.number().optional().nullable(),
  maxWidth: z.number().optional().nullable(),
  minHeight: z.number().optional().nullable(),
  maxHeight: z.number().optional().nullable(),
  layoutSizingHorizontal: z.enum(['FIXED', 'HUG', 'FILL']).optional(),
  layoutSizingVertical: z.enum(['FIXED', 'HUG', 'FILL']).optional(),
  targetAspectRatio: PointSchema.optional(),
  constraintValues: z.object({
    top: pixelOffsetSchema,
    right: pixelOffsetSchema,
    left: pixelOffsetSchema,
    bottom: pixelOffsetSchema,
  }).optional(),
})
let W = z.object({
  visible: z.boolean(),
  opacity: z.number().gte(0).lte(1),
  blendMode: blendModeSchema,
})
let K = z.object({
  ...W.shape,
  type: z.literal('SOLID'),
  color: ColorRGBASchema,
  boundVariables: z.object({
    color: VariableAliasSchema,
    variableName: z.string(),
    codeSyntax: z.record(z.string(), z.string()),
  }).partial().optional(),
})
let Y = z.object({
  position: z.number(),
  color: ColorRGBASchema,
  boundVariables: z.object({
    color: VariableAliasSchema,
  }).partial().optional(),
})
let q = z.object({
  ...W.shape,
  type: z.enum(['GRADIENT_LINEAR', 'GRADIENT_RADIAL', 'GRADIENT_ANGULAR', 'GRADIENT_DIAMOND']),
  transform: VectorPairSchema,
  gradientStops: z.array(Y),
})
let $ = z.object({
  exposure: z.number().optional(),
  contrast: z.number().optional(),
  saturation: z.number().optional(),
  temperature: z.number().optional(),
  tint: z.number().optional(),
  highlights: z.number().optional(),
  shadows: z.number().optional(),
}).partial()
let Z = z.object({
  ...W.shape,
  type: z.literal('IMAGE'),
  scaleMode: z.enum(['FILL', 'FIT', 'TILE', 'STRETCH']),
  imageRef: z.string(),
  imageTransform: VectorPairSchema.optional(),
  scalingFactor: z.number().optional(),
  filters: $.optional(),
  rotation: z.number(),
  gifRef: z.string().optional(),
})
let X = z.object({
  ...W.shape,
  type: z.literal('VIDEO'),
  autoplay: z.boolean().optional(),
  mediaLoop: z.boolean().optional(),
  muted: z.boolean().optional(),
  showControls: z.boolean().optional(),
  videoRef: z.string(),
  imageTransform: VectorPairSchema.optional(),
  scalingFactor: z.number().optional(),
  scaleMode: z.enum(['FILL', 'FIT', 'TILE', 'STRETCH']),
})
let Q = z.object({
  ...W.shape,
  type: z.literal('PATTERN'),
})
let J = z.discriminatedUnion('type', [K, q, Z, X, Q])
let ee = z.object({
  fills: z.array(J),
}).partial()
let et = z.object({
  strokes: z.array(J),
  strokeWeight: z.number(),
  strokeAlign: z.enum(['INSIDE', 'OUTSIDE', 'CENTER']),
  strokeDashes: z.array(z.number()),
}).partial()
let ei = z.object({
  ...ee.shape,
  ...et.shape,
})
let en = z.object({
  color: ColorRGBASchema,
  blendMode: blendModeSchema,
  offset: PointSchema,
  radius: z.number().gte(0),
  spread: z.number(),
  visible: z.boolean(),
  boundVariables: z.object({
    radius: VariableAliasSchema,
    spread: VariableAliasSchema,
    color: VariableAliasSchema,
    offsetX: VariableAliasSchema,
    offsetY: VariableAliasSchema,
  }).partial().optional(),
})
let er = z.object({
  ...en.shape,
  type: z.literal('DROP_SHADOW'),
})
let ea = z.object({
  ...en.shape,
  type: z.literal('INNER_SHADOW'),
})

let es = z.object({
  type: z.enum(['LAYER_BLUR', 'BACKGROUND_BLUR']),
  radius: z.number().gte(0),
  boundVariables: z.object({
    radius: VariableAliasSchema,
  }).partial().optional(),
  visible: z.boolean(),
})
let eo = z.object({
  type: z.literal('NOISE'),
})
let el = z.object({
  type: z.literal('TEXTURE'),
})
let ed = z.object({
  type: z.enum(['REPEAT', 'SYMMETRY', 'GLASS']),
})
let ec = z.discriminatedUnion('type', [er, ea, es, eo, el, ed])
let eu = z.object({
  effects: z.array(ec).optional(),
})
let ep = z.object({
  isMask: z.boolean(),
  maskType: z.enum(['ALPHA', 'VECTOR', 'LUMINANCE']),
}).partial()
let em = z.object({
  isBreakpointFrame: z.boolean(),
}).partial()
z.object({
  guid: SessionInfoSchema.optional(),
  url: z.string().optional(),
  openInNewTab: z.boolean().optional(),
})
z.object({
  altText: z.string(),
  image: z.string(),
})
let eh = z.object({
  fieldSchemaId: z.string(),
})
let eg = z.object({
  characters: eh,
  hyperlink: eh,
  image: eh,
  richText: eh,
  date: eh,
}).partial()
let ef = z.object({
  fillIndex: z.number(),
  boundVariables: eg,
})
let e_ = z.object({
  collectionId: z.string(),
  itemId: z.string(),
  boundCmsVariables: eg.optional(),
  styleOverrideTableBoundCmsVariables: z.record(z.string(), eg).optional(),
  interactionsBoundCmsVariables: z.array(eg).optional(),
  fillPaintsBoundCmsVariables: z.array(ef).optional(),
})
let eA = z.object({
  cmsItemFieldBindingProperties: e_.optional(),
})
let ey = z.object({
  collectionId: z.string().optional(),
  itemId: z.string().optional(),
  fieldSchemaId: z.string().optional(),
})
let eb = z.enum(['ON_CLICK', 'AFTER_TIMEOUT', 'MOUSE_IN', 'MOUSE_OUT', 'ON_HOVER', 'MOUSE_DOWN', 'MOUSE_UP', 'ON_PRESS', 'NONE', 'DRAG', 'ON_KEY_DOWN', 'ON_VOICE', 'ON_MEDIA_HIT', 'ON_MEDIA_END', 'MOUSE_ENTER', 'MOUSE_LEAVE'])
let ev = z.enum(['INSTANT_TRANSITION', 'DISSOLVE', 'FADE', 'SLIDE_FROM_LEFT', 'SLIDE_FROM_RIGHT', 'SLIDE_FROM_TOP', 'SLIDE_FROM_BOTTOM', 'PUSH_FROM_LEFT', 'PUSH_FROM_RIGHT', 'PUSH_FROM_TOP', 'PUSH_FROM_BOTTOM', 'MOVE_FROM_LEFT', 'MOVE_FROM_RIGHT', 'MOVE_FROM_TOP', 'MOVE_FROM_BOTTOM', 'SLIDE_OUT_TO_LEFT', 'SLIDE_OUT_TO_RIGHT', 'SLIDE_OUT_TO_TOP', 'SLIDE_OUT_TO_BOTTOM', 'MOVE_OUT_TO_LEFT', 'MOVE_OUT_TO_RIGHT', 'MOVE_OUT_TO_TOP', 'MOVE_OUT_TO_BOTTOM', 'SMART_ANIMATE', 'SCROLL_ANIMATE'])
let eI = z.enum(['NONE', 'INTERNAL_NODE', 'URL', 'BACK', 'CLOSE', 'SET_VARIABLE', 'UPDATE_MEDIA_RUNTIME', 'CONDITIONAL', 'SET_VARIABLE_MODE', 'OBJECT_ANIMATION'])
let eE = z.enum(['NAVIGATE', 'SWAP', 'OVERLAY', 'SCROLL_TO', 'CHANGE_TO', 'OPEN_OVERLAY', 'CLOSE_OVERLAY', 'SWAP_STATE'])
let ex = z.enum(['PLAY', 'PAUSE', 'TOGGLE_PLAY_PAUSE', 'MUTE', 'UNMUTE', 'TOGGLE_MUTE_UNMUTE', 'SKIP_FORWARD', 'SKIP_BACKWARD', 'SKIP_TO'])
let eS = z.enum(['NONE', 'FADE', 'SLIDE_FROM_LEFT', 'SLIDE_FROM_RIGHT', 'SLIDE_FROM_TOP', 'SLIDE_FROM_BOTTOM'])
let ew = z.enum(['IN', 'OUT'])
let eC = z.enum(['KEYBOARD', 'UNKNOWN_CONTROLLER', 'XBOX_ONE', 'PS4', 'SWITCH_PRO'])
let eT = z.object({
  triggerDevice: eC,
  keyCodes: z.array(z.number()),
})
let ek = z.object({
  interactionType: eb,
  interactionMaintained: z.boolean().optional(),
  interactionDuration: z.number().optional(),
  keyTrigger: eT.optional(),
  voiceEventPhrase: z.string().optional(),
  transitionTimeout: z.number().optional(),
  mediaHitTime: z.number().optional(),
})
let eR = z.object({
  opacity: z.number().optional(),
  transform: AffineTransformSchema.optional(),
})
let eN = z.object({
  id: z.string().optional(),
  nodeFieldAlias: z.any().optional(),
})
let eP = z.object({
  actions: z.unknown().array().optional(),
  condition: z.any().optional(),
})
let eO = z.object({
  transitionNodeID: SessionInfoSchema.optional(),
  transitionType: ev.optional(),
  transitionDuration: z.number().optional(),
  easingType: z.nativeEnum(EasingType).optional(),
  transitionShouldSmartAnimate: z.boolean().optional(),
  connectionType: eI.optional(),
  overlayRelativePosition: PointSchema.optional(),
  navigationType: eE.optional(),
  transitionPreserveScroll: z.boolean().optional(),
  easingFunction: z.array(z.number()).length(4).optional(),
  extraScrollOffset: PointSchema.optional(),
  transitionResetScrollPosition: z.boolean().optional(),
  transitionResetInteractiveComponents: z.boolean().optional(),
  connectionURL: z.string().optional(),
  openUrlInNewTab: z.boolean().optional(),
  linkParam: z.any().optional(),
  cmsTarget: ey.optional(),
  targetVariable: eN.optional(),
  targetVariableData: z.any().optional(),
  mediaAction: ex.optional(),
  transitionResetVideoPosition: z.boolean().optional(),
  mediaSkipToTime: z.number().optional(),
  mediaSkipByAmount: z.number().optional(),
  mediaPlaybackRate: z.number().optional(),
  conditionalActions: eP.array().optional(),
  targetVariableSetID: z.string().optional(),
  targetVariableModeID: z.string().optional(),
  targetVariableSetKey: z.string().optional(),
  animationType: eS.optional(),
  animationPhase: ew.optional(),
  animationState: eR.optional(),
  stateGroupContext: z.string().optional(),
  noop: z.boolean().optional(),
})
let eD = z.array(eO)
let eL = z.object({
  id: SessionInfoSchema.optional(),
  event: ek.optional(),
  actions: eD.optional(),
  isDeleted: z.boolean().optional(),
  stateManagementVersion: z.number().optional(),
})
let eF = z.object({
  interactions: z.array(eL).optional(),
  ...eA.shape,
})
let eM = z.object({
  clipsContent: z.boolean(),
  overflowDirection: z.enum(['HORIZONTAL_SCROLLING', 'VERTICAL_SCROLLING', 'HORIZONTAL_AND_VERTICAL_SCROLLING', 'NONE']),
  layoutMode: z.enum(['NONE', 'HORIZONTAL', 'VERTICAL', 'GRID']),
  primaryAxisSizingMode: z.enum(['FIXED', 'AUTO']),
  counterAxisSizingMode: z.enum(['FIXED', 'AUTO']),
  primaryAxisAlignItems: z.enum(['MIN', 'CENTER', 'MAX', 'SPACE_BETWEEN']),
  counterAxisAlignItems: z.enum(['MIN', 'CENTER', 'MAX', 'BASELINE']),
  paddingLeft: z.number(),
  paddingRight: z.number(),
  paddingTop: z.number(),
  paddingBottom: z.number(),
  itemSpacing: z.number(),
  itemReverseZIndex: z.boolean(),
  strokesIncludedInLayout: z.boolean(),
  layoutWrap: z.enum(['NO_WRAP', 'WRAP']),
  counterAxisSpacing: z.number(),
  counterAxisAlignContent: z.enum(['AUTO', 'SPACE_BETWEEN']),
  gridColumnCount: z.number().optional(),
  gridRowCount: z.number().optional(),
  gridRowGap: z.number().optional(),
  gridColumnGap: z.number().optional(),
  gridColumnsSizing: z.string().optional(),
  gridRowsSizing: z.string().optional(),
}).partial()
let ej = z.object({
  cornerRadius: z.number(),
  rectangleCornerRadii: z.array(z.number()).min(4).max(4),
  rectangleCornerRadiiIndependent: z.boolean(),
}).partial()
let eU = z.object({
  top: z.number(),
  right: z.number(),
  bottom: z.number(),
  left: z.number(),
})
let eB = z.object({
  individualStrokeWeights: eU,
}).partial()

let eG = z.object({
  maybeAnimateRotation: z.boolean().optional(),
}).partial()

let ez = z.object({
  ...nodePropertiesSchema.shape,
  ...blendPropertiesSchema.shape,
  ...H.shape,
  ...ei.shape,
  ...eu.shape,
  ...ep.shape,
  ...behaviorsSchema.shape,
  ...eG.shape,
})
let eH = z.object({
  ...ez.shape,
  ...ej.shape,
})
z.object({
  ...ez.shape,
  ...ej.shape,
  ...eB.shape,
  ...eG.shape,
})
let eW = z.object({
  type: z.enum(['URL', 'NODE']),
  url: z.string().optional(),
  nodeID: z.string().optional(),
  openInNewTab: z.boolean(),
}).partial()
let eK = z.number()
let eY = z.number()
let eq = z.number()
let e$ = z.enum(['NONE', 'WIDTH_AND_HEIGHT', 'HEIGHT', 'TRUNCATE'])
let eZ = z.enum(['LEFT', 'RIGHT', 'CENTER', 'JUSTIFIED'])
let eX = z.enum(['TOP', 'CENTER', 'BOTTOM'])
let eQ = z.object({
  fontFamily: VariableAliasSchema,
  fontSize: VariableAliasSchema,
  fontStyle: VariableAliasSchema,
  fontWeight: VariableAliasSchema,
  letterSpacing: VariableAliasSchema,
  lineHeight: VariableAliasSchema,
  paragraphSpacing: VariableAliasSchema,
  paragraphIndent: VariableAliasSchema,
})
let eJ = z.enum(['ORIGINAL', 'UPPER', 'LOWER', 'TITLE', 'SMALL_CAPS', 'SMALL_CAPS_FORCED'])
let e0 = z.object({
  lineHeightPx: z.number(),
  lineHeightPercent: z.number(),
  lineHeightPercentFontSize: z.number().optional(),
  lineHeightUnit: z.enum(['PIXELS', 'FONT_SIZE_%', 'INTRINSIC_%']),
})
let e1 = z.object({
  fontFamily: z.string(),
  fontStyle: z.string(),
  fontVariations: z.record(z.string(), z.number()).optional(),
  fontVariantPosition: z.nativeEnum(TextScriptType),
  fontPostScriptName: z.union([z.string(), z.null()]),
  paragraphSpacing: eq,
  paragraphIndent: eY,
  listSpacing: eK,
  italic: z.boolean(),
  fontSize: z.number(),
  textCase: eJ,
  textDecoration: z.nativeEnum(TextDecoration),
  textDecorationSkipInk: z.boolean(),
  textUnderlineOffsetUnit: z.enum(['PIXELS', 'PERCENT']).optional(),
  textUnderlineOffsetValue: z.number().optional(),
  textDecorationThicknessUnit: z.enum(['PIXELS', 'PERCENT']).optional(),
  textDecorationThicknessValue: z.number().optional(),
  textDecorationStyle: z.enum(['solid', 'dotted', 'wavy']),
  textDecorationFills: z.array(J).optional(),
  textAutoResize: e$,
  textTruncation: z.enum(['DISABLED', 'ENDING']),
  maxLines: z.number().optional(),
  textAlignHorizontal: eZ,
  textAlignVertical: eX,
  letterSpacing: z.number(),
  letterSpacingValue: z.number(),
  letterSpacingUnit: z.enum(['PIXELS', 'PERCENT']),
  fills: z.array(J).optional(),
  hyperlink: eW.optional(),
  opentypeFlags: z.record(z.number()).optional(),
  ...e0.shape,
  hangingList: z.boolean().optional(),
  leadingTrim: z.enum(['NONE', 'CAP_HEIGHT']).optional(),
  hangingPunctuation: z.boolean().optional(),
  boundVariables: eQ.partial().optional(),
  styleIdForText: z.string().optional(),
  fallbackFonts: z.optional(z.array(z.object({
    fontFamily: z.string(),
    fontStyle: z.string(),
  }))),
})
let e2 = z.object({
  fontSize: z.number().optional(),
  letterSpacing: z.number().optional(),
  letterSpacingValue: z.number().optional(),
  letterSpacingUnit: z.enum(['PIXELS', 'PERCENT']).optional(),
  lineHeightPx: z.number().optional(),
  lineHeightPercent: z.number().optional(),
  lineHeightPercentFontSize: z.number().optional(),
  lineHeightUnit: z.enum(['PIXELS', 'FONT_SIZE_%', 'INTRINSIC_%']).optional(),
  paragraphSpacing: eq.optional(),
})
let e5 = z.object({
  minWidth: z.number(),
  name: z.string(),
  boundVariables: eQ.pick({
    fontSize: !0,
    letterSpacing: !0,
    lineHeight: !0,
    paragraphSpacing: !0,
  }).partial().optional(),
  style: e2,
})
let e4 = e1.extend({
  responsiveTextStyleVariants: z.array(e5).optional(),
})
let e3 = z.object({
  characters: z.string(),
  style: e4,
  characterStyleOverrides: z.array(z.number()),
  styleOverrideTable: z.record(z.string(), e4.partial()),
  lineTypes: z.array(z.nativeEnum(ListStyleType)),
  lineIndentations: z.array(z.number()),
  listStartOffsets: z.array(z.number().nullable()),
  lineStyleOverrides: z.array(z.number()),
  lineTextDirections: z.array(z.enum(['ltr', 'rtl', 'auto'])).nullable().optional(),
  lineStartsWithPunctuation: z.record(z.string(), z.boolean()).optional(),
  listSpacing: eK.optional(),
  paragraphIndent: eY.optional(),
  paragraphSpacing: eq.optional(),
  textAutoResize: e$.optional(),
  textAlignHorizontal: eZ.optional(),
  textAlignVertical: eX.optional(),
  responsiveTextStyleVariants: z.array(e5).optional(),
  ...eA.shape,
})
z.enum(['BOOLEAN', 'INSTANCE_SWAP', 'TEXT', 'VARIANT', 'NUMBER', 'IMAGE'])
let e6 = z.object({
  type: z.enum(['COMPONENT', 'COMPONENT_SET']),
  key: z.string(),
})
let e7 = e3.omit({
  style: !0,
})

let te = z.discriminatedUnion('type', [z.object({
  type: z.literal('BOOLEAN'),
  value: z.boolean(),
  variantOptions: z.array(z.string()).optional(),
}), z.object({
  type: z.literal('NUMBER'),
  value: z.number(),
  variantOptions: z.array(z.string()).optional(),
}), z.object({
  type: z.literal('INSTANCE_SWAP'),
  value: z.string(),
  variantOptions: z.array(z.string()).optional(),
}), z.object({
  type: z.literal('TEXT'),
  value: e7,
  variantOptions: z.array(z.string()).optional(),
}), z.object({
  type: z.literal('VARIANT'),
  value: z.string(),
  variantOptions: z.array(z.string()).optional(),
}), z.object({
  type: z.literal('IMAGE'),
  value: imageDataSchema,
  variantOptions: z.array(z.string()).optional(),
})])
z.object({
  componentPropertyAssignments: z.record(te),
})
let tt = z.discriminatedUnion('type', [z.object({
  type: z.literal('BOOLEAN'),
  value: z.boolean(),
  preferredValues: z.array(e6).optional(),
  boundVariables: z.object({
    value: VariableAliasSchema,
  }).partial().optional(),
}), z.object({
  type: z.literal('NUMBER'),
  value: z.number(),
  preferredValues: z.array(e6).optional(),
  boundVariables: z.object({
    value: VariableAliasSchema,
  }).partial().optional(),
}), z.object({
  type: z.literal('INSTANCE_SWAP'),
  value: z.string(),
  preferredValues: z.array(e6).optional(),
  boundVariables: z.object({
    value: VariableAliasSchema,
  }).partial().optional(),
}), z.object({
  type: z.literal('TEXT'),
  value: e7,
  preferredValues: z.array(e6).optional(),
  boundVariables: z.object({
    value: VariableAliasSchema,
  }).partial().optional(),
}), z.object({
  type: z.literal('VARIANT'),
  value: z.string(),
  preferredValues: z.array(e6).optional(),
  boundVariables: z.object({
    value: VariableAliasSchema,
  }).partial().optional(),
}), z.object({
  type: z.literal('IMAGE'),
  value: imageDataSchema,
  variantOptions: z.array(z.string()).optional(),
  boundVariables: z.object({
    value: VariableAliasSchema,
  }).partial().optional(),
})])
let ti = z.object({
  mainComponentId: z.string(),
  componentSetId: z.string().optional(),
  componentProperties: z.record(tt),
  overrides: z.array(z.object({
    key: z.array(z.string()),
    value: z.any(),
  })),
  uniformScaleFactor: z.number().optional(),
})
z.object({
  code: z.string().optional(),
  sourceCodeHash: z.string().optional(),
  codeExportName: z.string().optional(),
})
let tn = z.object({
  textStyleId: z.string(),
})
let tr = z.object({
  richText: z.string().optional(),
  cmsRichTextStyleMap: z.record(z.string(), tn),
  ...eA.shape,
})

let ta = ((e) => {
  let t = Object.entries(e.shape).reduce((acc, [key, schema]) => {
    acc[key] = schema.nullable()
    return acc
  }, {})
  return z.object(t)
})(z.object({
  ...accessibilityPropertiesSchema.shape,
  ...nodePropertiesSchema.shape,
  ...blendPropertiesSchema.shape,
  ...H.shape,
  ...eM.shape,
  ...ej.shape,
  ...ei.shape,
  ...eu.shape,
  ...ep.shape,
  ...eB.shape,
  ...em.shape,
  ...eF.shape,
  ...behaviorsSchema.shape,
  ...eH.shape,
  ...e3.shape,
  ...ti.shape,
  ...tr.shape,
  ...eA.shape,
}).partial())
let ts = z.object({
  key: z.array(z.string()),
  value: z.lazy(() => ta),
}).describe('Override')
z.array(ts).describe('Overrides')
// Schema for position
export let positionSchema = z.object({
  line: z.number(),
  column: z.number(),
})
// Schema for position range
export let positionRangeSchema = z.object({
  start: positionSchema,
  end: positionSchema,
})
// Schema for JSX expression container
let jsxExpressionContainerSchema = z.object({
  type: z.literal('JSXExpressionContainer'),
  expression: z.string(),
  location: positionRangeSchema.optional(),
})
// Schema for RGBA color
let rgbaColorSchema = z.object({
  r: z.number(),
  g: z.number(),
  b: z.number(),
  a: z.number(),
})
// Schema for color or paint array
let colorOrPaintArraySchema = z.union([z.string(), rgbaColorSchema, jsxExpressionContainerSchema])
// Schema for 2D point
let point2DSchema = z.object({
  x: z.number(),
  y: z.number(),
})
// Schema for 2x3 matrix
let matrix2x3Schema = z.array(z.array(z.number()).length(3)).length(2)
// Schema for gradient stop
let gradientStopSchema = z.object({
  color: colorOrPaintArraySchema,
  position: z.number(),
})
// Schema for base paint properties
let basePaintPropertiesSchema = z.object({
  blendMode: BlendModeSchema.optional(),
  opacity: z.number().optional(),
})
// Schema for solid paint
let solidPaintSchema = basePaintPropertiesSchema.extend({
  type: z.literal('solid'),
  color: colorOrPaintArraySchema,
})
// Schema for gradient paint
let gradientPaintSchema = basePaintPropertiesSchema.extend({
  type: z.enum(['gradient-linear', 'gradient-radial', 'gradient-angular', 'gradient-diamond']),
  gradientHandlePositions: z.array(point2DSchema).length(3),
  gradientStops: z.array(gradientStopSchema),
})
// Schema for image filters
let imageFiltersSchema = z.object({
  exposure: z.number().optional(),
  contrast: z.number().optional(),
  vibrance: z.number().optional(),
  temperature: z.number().optional(),
  tint: z.number().optional(),
  highlights: z.number().optional(),
  shadows: z.number().optional(),
})
// Schema for image paint
let imagePaintSchema = basePaintPropertiesSchema.extend({
  type: z.literal('image'),
  imageRef: z.string().describe('The hash of the image to be used for this fill'),
  scaleMode: z.enum(['fill', 'fit', 'tile', 'crop']).optional(),
  imageTransform: matrix2x3Schema.optional().describe('Applicable only for scaleMode == "crop". Determines how the image is positioned (thus, cropped) within the layer.'),
  scalingFactor: z.number().optional().describe('Applicable only for scaleMode == "tile" (automatic for other modes). Determines the scaling (thus, repetition) of the image within the layer.'),
  rotation: z.number().optional().describe('Applicable only for scaleMode == "tile" | "fill" | "fit" (automatic for scaleMode == "CROP"). Determines the rotation of the image within the layer. Must be in increments of +90.'),
  filters: imageFiltersSchema.optional().describe('Filters applied to the image, such as blur or brightness.'),
})
// Schema for image generation
let imageGenerationSchema = z.object({
  type: z.literal('image-generation'),
  caption: z.string().describe('A description of the image.  Will be used to generate a new image if no imageRef is provided.'),
}).merge(imagePaintSchema.omit({
  type: !0,
  imageRef: !0,
}))
// Schema for paint union
export let paintUnionSchema = z.union([solidPaintSchema, gradientPaintSchema, imagePaintSchema])
// Schema for paint with image generation union
export let paintWithImageGenerationUnionSchema = z.union([solidPaintSchema, gradientPaintSchema, imagePaintSchema, imageGenerationSchema])
// Description for color or paint array
export let colorOrPaintArrayDescription = '@name(ColorOrPaintArray) Colors can be represented as 3 or 6 character hex values (#F000) or objects with rgba values from 0-1'
// Schema for solid paint array
export let solidPaintArraySchema = z.union([z.string(), z.array(paintUnionSchema), jsxExpressionContainerSchema]).describe(colorOrPaintArrayDescription)
// Schema for paint with image generation array
export let paintWithImageGenerationArraySchema = z.union([z.string(), z.array(paintWithImageGenerationUnionSchema), jsxExpressionContainerSchema]).describe(colorOrPaintArrayDescription)
// Schema for Tailwind CSS classes
export let tailwindClassesSchema = z.object({
  className: z.string().optional().describe('A string of tailwind classes'),
})
// Schema for transformed behaviors
export let transformedBehaviorsSchema = transformZodSchema(animationsSchema, e => e instanceof z.ZodObject && e._def.shape().behaviorType
  ? e.omit({
    behaviorType: !0,
  })
  : e)
export const _6 = colorOrPaintArraySchema
export const y4 = paintWithImageGenerationArraySchema
export const uw = solidPaintArraySchema
export const M1 = jsxExpressionContainerSchema
export const fg = transformedBehaviorsSchema
export const gx = positionRangeSchema
export const zA = tailwindClassesSchema
export const dL = matrix2x3Schema
