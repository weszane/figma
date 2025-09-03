import { z as _$$z } from "../vendor/835909";
import { U3 } from "../905/722575";
import { Yj, bG, rw, TL, QV, $l, Ux } from "../905/333600";
import { Xc, mg, Nx, Gx, M9, eT as _$$eT, i8, wj } from "../905/927405";
import { f as _$$f } from "../905/797463";
let o = _$$z.object({
  size: _$$z.object({
    x: Yj,
    y: Yj
  }).partial(),
  individualStrokeWeights: _$$z.object({
    BORDER_TOP_WEIGHT: Yj,
    BORDER_RIGHT_WEIGHT: Yj,
    BORDER_LEFT_WEIGHT: Yj,
    BORDER_BOTTOM_WEIGHT: Yj
  }).partial(),
  characters: Yj,
  itemSpacing: Yj,
  paddingLeft: Yj,
  paddingRight: Yj,
  paddingTop: Yj,
  paddingBottom: Yj,
  visible: Yj,
  rectangleCornerRadii: _$$z.object({
    RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS: Yj,
    RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS: Yj,
    RECTANGLE_TOP_LEFT_CORNER_RADIUS: Yj,
    RECTANGLE_TOP_RIGHT_CORNER_RADIUS: Yj
  }).partial(),
  topLeftRadius: Yj,
  topRightRadius: Yj,
  bottomLeftRadius: Yj,
  bottomRightRadius: Yj,
  minWidth: Yj,
  maxWidth: Yj,
  minHeight: Yj,
  maxHeight: Yj,
  counterAxisSpacing: Yj,
  opacity: Yj,
  fontFamily: _$$z.array(Yj),
  fontSize: _$$z.array(Yj),
  fontStyle: _$$z.array(Yj),
  fontWeight: _$$z.array(Yj),
  letterSpacing: _$$z.array(Yj),
  lineHeight: _$$z.array(Yj),
  paragraphSpacing: _$$z.array(Yj),
  paragraphIndent: _$$z.array(Yj),
  fills: _$$z.array(Yj),
  strokes: _$$z.array(Yj),
  componentProperties: _$$z.record(Yj),
  textRangeFills: _$$z.array(Yj),
  effects: _$$z.array(Yj),
  layoutGrids: _$$z.array(Yj)
}).partial().optional();
let l = _$$z.object({
  accessibleHTMLTag: _$$z.string().optional(),
  accessibleLabel: _$$z.string().optional(),
  ariaAttributes: _$$z.object({
    ariaHidden: _$$z.boolean().optional(),
    ariaRole: _$$z.string().optional(),
    ariaCurrent: _$$z.string().optional()
  }).optional(),
  isDecorativeImage: _$$z.boolean().optional()
});
let d = _$$z.nativeEnum(Xc);
let c = _$$z.object({
  easingType: _$$z.nativeEnum(mg),
  easingFunction: _$$z.array(_$$z.number()).length(4),
  transitionDuration: _$$z.number(),
  delay: _$$z.number()
});
let u = _$$z.object({
  opacity: _$$z.number(),
  transform: bG
});
let p = _$$z.enum(["PAGE_LOAD", "THIS_LAYER_IN_VIEW", "OTHER_LAYER_IN_VIEW", "SCROLL_DIRECTION"]);
let m = _$$z.enum(["PAGE_HEIGHT", "THIS_LAYER_IN_VIEW", "OTHER_LAYER_IN_VIEW"]);
let h = _$$z.object({
  behaviorType: _$$z.literal(d.enum.Appear),
  trigger: p,
  enterTransition: c,
  enterState: u
});
let g = _$$z.object({
  ...h.shape,
  exitTransition: c,
  exitState: u
});
let f = _$$z.object({
  ...h.shape,
  trigger: _$$z.literal(p.enum.PAGE_LOAD)
});
let _ = _$$z.object({
  ...g.shape,
  trigger: _$$z.literal(p.enum.THIS_LAYER_IN_VIEW),
  playsOnce: _$$z.boolean()
});
let A = _$$z.object({
  ...g.shape,
  trigger: _$$z.literal(p.enum.OTHER_LAYER_IN_VIEW),
  otherLayer: rw,
  playsOnce: _$$z.boolean()
});
let y = _$$z.object({
  ...h.shape,
  trigger: _$$z.literal(p.enum.SCROLL_DIRECTION),
  playsOnce: _$$z.boolean()
});
let b = _$$z.object({
  behaviorType: _$$z.literal(d.enum.Hover),
  transition: c,
  state: u
});
let v = _$$z.object({
  behaviorType: _$$z.literal(d.enum.Press),
  transition: c,
  state: u
});
let I = _$$z.object({
  behaviorType: _$$z.literal(d.enum.Focus),
  transition: c,
  state: u
});
let E = _$$z.object({
  behaviorType: _$$z.literal(d.enum.ScrollParallax),
  speed: _$$z.number()
});
let x = _$$z.object({
  behaviorType: _$$z.literal(d.enum.ScrollTransform),
  fromState: u,
  toState: u,
  transition: c
});
let S = _$$z.object({
  ...x.shape,
  trigger: _$$z.literal(m.enum.PAGE_HEIGHT)
});
let w = _$$z.object({
  ...x.shape,
  trigger: _$$z.literal(m.enum.THIS_LAYER_IN_VIEW),
  playsOnce: _$$z.boolean()
});
let C = _$$z.object({
  ...x.shape,
  trigger: _$$z.literal(m.enum.OTHER_LAYER_IN_VIEW),
  otherLayer: rw,
  playsOnce: _$$z.boolean()
});
let T = _$$z.object({
  behaviorType: _$$z.literal(d.enum.Cursor),
  hotspotX: _$$z.number(),
  hotspotY: _$$z.number(),
  cursorGuid: rw,
  cursorFileName: _$$z.string().optional()
});
let k = _$$z.object({
  behaviorType: _$$z.literal(d.enum.Marquee),
  direction: _$$z.enum(["LEFT", "RIGHT", "UP", "DOWN"]),
  speed: _$$z.number(),
  shouldLoopInfinitely: _$$z.boolean()
});
let R = _$$z.object({
  image: _$$z.string().nullable(),
  imageThumbnail: _$$z.string().nullable(),
  animatedImage: _$$z.string().nullable(),
  altText: _$$z.string(),
  originalImageHeight: _$$z.number(),
  originalImageWidth: _$$z.number(),
  animationFrame: _$$z.number()
});
_$$z.object({
  src: _$$z.string(),
  alt: _$$z.string().optional(),
  height: _$$z.number().optional(),
  width: _$$z.number().optional()
});
let N = _$$z.object({
  behaviorType: _$$z.literal(d.enum.Code),
  codeComponentId: _$$z.string(),
  assignments: _$$z.record(_$$z.string(), _$$z.union([_$$z.string(), _$$z.boolean(), _$$z.number(), R])),
  codeBehaviorData: _$$z.object({
    category: _$$z.string().optional(),
    nodeTypes: _$$z.array(_$$z.string()).optional()
  })
});
let P = f.merge(_).merge(A).merge(y);
let O = S.merge(w).merge(C);
let D = _$$z.discriminatedUnion("trigger", [f, _, A, y]);
let L = _$$z.discriminatedUnion("trigger", [S, w, C]);
_$$z.discriminatedUnion("behaviorType", [P, b, v, I, E, O, T, k, N]);
let F = _$$z.object({
  appear: D,
  hover: b,
  press: v,
  focus: I,
  scrollParallax: E,
  scrollTransform: L,
  cursor: T,
  marquee: k,
  code: _$$z.array(N)
}).partial().nullable();
let M = _$$z.object({
  behaviors: F
}).partial();
let j = _$$z.object({
  id: _$$z.string(),
  name: _$$z.string(),
  type: _$$z.string(),
  overrideKey: _$$z.string().optional(),
  visible: _$$z.boolean().optional(),
  locked: _$$z.boolean().optional(),
  isFixed: _$$z.boolean().optional(),
  scrollBehavior: _$$z.enum(["SCROLLS", "FIXED", "STICKY_SCROLLS"]).optional(),
  componentPropertyReferences: _$$z.record(_$$z.string()).optional(),
  boundVariables: o,
  explicitVariableModes: _$$z.record(_$$z.string()).optional(),
  ...l.shape
});
let U = _$$z.nativeEnum(Nx);
let B = _$$z.object({
  blendMode: U.optional(),
  opacity: _$$z.number().gte(0).lte(1).optional()
});
let V = _$$z.object({
  children: _$$z.array(_$$z.string())
});
let G = _$$z.object({
  vertical: _$$z.nativeEnum(Gx),
  horizontal: _$$z.nativeEnum(M9)
});
let z = _$$z.object({
  pixelOffset: _$$z.number(),
  sizeFraction: _$$z.number()
}).optional();
let H = _$$z.object({
  absoluteBoundingBox: TL,
  isolatedAbsoluteRenderBounds: _$$z.union([TL, _$$z.$$null()]).optional(),
  constraints: G.optional(),
  relativeTransform: QV,
  size: $l,
  layoutAlign: _$$z.enum(["INHERIT", "STRETCH", "MIN", "CENTER", "MAX"]).optional(),
  layoutGrow: _$$z.number().optional(),
  layoutPositioning: _$$z.enum(["AUTO", "ABSOLUTE"]).optional(),
  gridColumnAnchorIndex: _$$z.number().optional(),
  gridRowAnchorIndex: _$$z.number().optional(),
  gridColumnSpan: _$$z.number().optional(),
  gridRowSpan: _$$z.number().optional(),
  gridChildHorizontalAlign: _$$z.enum(["MIN", "CENTER", "MAX"]).optional(),
  gridChildVerticalAlign: _$$z.enum(["MIN", "CENTER", "MAX"]).optional(),
  minWidth: _$$z.number().optional().nullable(),
  maxWidth: _$$z.number().optional().nullable(),
  minHeight: _$$z.number().optional().nullable(),
  maxHeight: _$$z.number().optional().nullable(),
  layoutSizingHorizontal: _$$z.enum(["FIXED", "HUG", "FILL"]).optional(),
  layoutSizingVertical: _$$z.enum(["FIXED", "HUG", "FILL"]).optional(),
  targetAspectRatio: $l.optional(),
  constraintValues: _$$z.object({
    top: z,
    right: z,
    left: z,
    bottom: z
  }).optional()
});
let W = _$$z.object({
  visible: _$$z.boolean(),
  opacity: _$$z.number().gte(0).lte(1),
  blendMode: U
});
let K = _$$z.object({
  ...W.shape,
  type: _$$z.literal("SOLID"),
  color: Ux,
  boundVariables: _$$z.object({
    color: Yj,
    variableName: _$$z.string(),
    codeSyntax: _$$z.record(_$$z.string(), _$$z.string())
  }).partial().optional()
});
let Y = _$$z.object({
  position: _$$z.number(),
  color: Ux,
  boundVariables: _$$z.object({
    color: Yj
  }).partial().optional()
});
let q = _$$z.object({
  ...W.shape,
  type: _$$z.enum(["GRADIENT_LINEAR", "GRADIENT_RADIAL", "GRADIENT_ANGULAR", "GRADIENT_DIAMOND"]),
  transform: QV,
  gradientStops: _$$z.array(Y)
});
let $ = _$$z.object({
  exposure: _$$z.number().optional(),
  contrast: _$$z.number().optional(),
  saturation: _$$z.number().optional(),
  temperature: _$$z.number().optional(),
  tint: _$$z.number().optional(),
  highlights: _$$z.number().optional(),
  shadows: _$$z.number().optional()
}).partial();
let Z = _$$z.object({
  ...W.shape,
  type: _$$z.literal("IMAGE"),
  scaleMode: _$$z.enum(["FILL", "FIT", "TILE", "STRETCH"]),
  imageRef: _$$z.string(),
  imageTransform: QV.optional(),
  scalingFactor: _$$z.number().optional(),
  filters: $.optional(),
  rotation: _$$z.number(),
  gifRef: _$$z.string().optional()
});
let X = _$$z.object({
  ...W.shape,
  type: _$$z.literal("VIDEO"),
  autoplay: _$$z.boolean().optional(),
  mediaLoop: _$$z.boolean().optional(),
  muted: _$$z.boolean().optional(),
  showControls: _$$z.boolean().optional(),
  videoRef: _$$z.string(),
  imageTransform: QV.optional(),
  scalingFactor: _$$z.number().optional(),
  scaleMode: _$$z.enum(["FILL", "FIT", "TILE", "STRETCH"])
});
let Q = _$$z.object({
  ...W.shape,
  type: _$$z.literal("PATTERN")
});
let J = _$$z.discriminatedUnion("type", [K, q, Z, X, Q]);
let ee = _$$z.object({
  fills: _$$z.array(J)
}).partial();
let et = _$$z.object({
  strokes: _$$z.array(J),
  strokeWeight: _$$z.number(),
  strokeAlign: _$$z.enum(["INSIDE", "OUTSIDE", "CENTER"]),
  strokeDashes: _$$z.array(_$$z.number())
}).partial();
let ei = _$$z.object({
  ...ee.shape,
  ...et.shape
});
let en = _$$z.object({
  color: Ux,
  blendMode: U,
  offset: $l,
  radius: _$$z.number().gte(0),
  spread: _$$z.number(),
  visible: _$$z.boolean(),
  boundVariables: _$$z.object({
    radius: Yj,
    spread: Yj,
    color: Yj,
    offsetX: Yj,
    offsetY: Yj
  }).partial().optional()
});
let er = _$$z.object({
  ...en.shape,
  type: _$$z.literal("DROP_SHADOW")
});
let ea = _$$z.object({
  ...en.shape,
  type: _$$z.literal("INNER_SHADOW")
});
_$$z.union([er, ea]);
let es = _$$z.object({
  type: _$$z.enum(["LAYER_BLUR", "BACKGROUND_BLUR"]),
  radius: _$$z.number().gte(0),
  boundVariables: _$$z.object({
    radius: Yj
  }).partial().optional(),
  visible: _$$z.boolean()
});
let eo = _$$z.object({
  type: _$$z.literal("NOISE")
});
let el = _$$z.object({
  type: _$$z.literal("TEXTURE")
});
let ed = _$$z.object({
  type: _$$z.enum(["REPEAT", "SYMMETRY", "GLASS"])
});
let ec = _$$z.discriminatedUnion("type", [er, ea, es, eo, el, ed]);
let eu = _$$z.object({
  effects: _$$z.array(ec).optional()
});
let ep = _$$z.object({
  isMask: _$$z.boolean(),
  maskType: _$$z.enum(["ALPHA", "VECTOR", "LUMINANCE"])
}).partial();
let em = _$$z.object({
  isBreakpointFrame: _$$z.boolean()
}).partial();
_$$z.object({
  guid: rw.optional(),
  url: _$$z.string().optional(),
  openInNewTab: _$$z.boolean().optional()
});
_$$z.object({
  altText: _$$z.string(),
  image: _$$z.string()
});
let eh = _$$z.object({
  fieldSchemaId: _$$z.string()
});
let eg = _$$z.object({
  characters: eh,
  hyperlink: eh,
  image: eh,
  richText: eh,
  date: eh
}).partial();
let ef = _$$z.object({
  fillIndex: _$$z.number(),
  boundVariables: eg
});
let e_ = _$$z.object({
  collectionId: _$$z.string(),
  itemId: _$$z.string(),
  boundCmsVariables: eg.optional(),
  styleOverrideTableBoundCmsVariables: _$$z.record(_$$z.string(), eg).optional(),
  interactionsBoundCmsVariables: _$$z.array(eg).optional(),
  fillPaintsBoundCmsVariables: _$$z.array(ef).optional()
});
let eA = _$$z.object({
  cmsItemFieldBindingProperties: e_.optional()
});
let ey = _$$z.object({
  collectionId: _$$z.string().optional(),
  itemId: _$$z.string().optional(),
  fieldSchemaId: _$$z.string().optional()
});
let eb = _$$z.enum(["ON_CLICK", "AFTER_TIMEOUT", "MOUSE_IN", "MOUSE_OUT", "ON_HOVER", "MOUSE_DOWN", "MOUSE_UP", "ON_PRESS", "NONE", "DRAG", "ON_KEY_DOWN", "ON_VOICE", "ON_MEDIA_HIT", "ON_MEDIA_END", "MOUSE_ENTER", "MOUSE_LEAVE"]);
let ev = _$$z.enum(["INSTANT_TRANSITION", "DISSOLVE", "FADE", "SLIDE_FROM_LEFT", "SLIDE_FROM_RIGHT", "SLIDE_FROM_TOP", "SLIDE_FROM_BOTTOM", "PUSH_FROM_LEFT", "PUSH_FROM_RIGHT", "PUSH_FROM_TOP", "PUSH_FROM_BOTTOM", "MOVE_FROM_LEFT", "MOVE_FROM_RIGHT", "MOVE_FROM_TOP", "MOVE_FROM_BOTTOM", "SLIDE_OUT_TO_LEFT", "SLIDE_OUT_TO_RIGHT", "SLIDE_OUT_TO_TOP", "SLIDE_OUT_TO_BOTTOM", "MOVE_OUT_TO_LEFT", "MOVE_OUT_TO_RIGHT", "MOVE_OUT_TO_TOP", "MOVE_OUT_TO_BOTTOM", "SMART_ANIMATE", "SCROLL_ANIMATE"]);
let eI = _$$z.enum(["NONE", "INTERNAL_NODE", "URL", "BACK", "CLOSE", "SET_VARIABLE", "UPDATE_MEDIA_RUNTIME", "CONDITIONAL", "SET_VARIABLE_MODE", "OBJECT_ANIMATION"]);
let eE = _$$z.enum(["NAVIGATE", "SWAP", "OVERLAY", "SCROLL_TO", "CHANGE_TO", "OPEN_OVERLAY", "CLOSE_OVERLAY", "SWAP_STATE"]);
let ex = _$$z.enum(["PLAY", "PAUSE", "TOGGLE_PLAY_PAUSE", "MUTE", "UNMUTE", "TOGGLE_MUTE_UNMUTE", "SKIP_FORWARD", "SKIP_BACKWARD", "SKIP_TO"]);
let eS = _$$z.enum(["NONE", "FADE", "SLIDE_FROM_LEFT", "SLIDE_FROM_RIGHT", "SLIDE_FROM_TOP", "SLIDE_FROM_BOTTOM"]);
let ew = _$$z.enum(["IN", "OUT"]);
let eC = _$$z.enum(["KEYBOARD", "UNKNOWN_CONTROLLER", "XBOX_ONE", "PS4", "SWITCH_PRO"]);
let eT = _$$z.object({
  triggerDevice: eC,
  keyCodes: _$$z.array(_$$z.number())
});
let ek = _$$z.object({
  interactionType: eb,
  interactionMaintained: _$$z.boolean().optional(),
  interactionDuration: _$$z.number().optional(),
  keyTrigger: eT.optional(),
  voiceEventPhrase: _$$z.string().optional(),
  transitionTimeout: _$$z.number().optional(),
  mediaHitTime: _$$z.number().optional()
});
let eR = _$$z.object({
  opacity: _$$z.number().optional(),
  transform: bG.optional()
});
let eN = _$$z.object({
  id: _$$z.string().optional(),
  nodeFieldAlias: _$$z.any().optional()
});
let eP = _$$z.object({
  actions: _$$z.unknown().array().optional(),
  condition: _$$z.any().optional()
});
let eO = _$$z.object({
  transitionNodeID: rw.optional(),
  transitionType: ev.optional(),
  transitionDuration: _$$z.number().optional(),
  easingType: _$$z.nativeEnum(mg).optional(),
  transitionShouldSmartAnimate: _$$z.boolean().optional(),
  connectionType: eI.optional(),
  overlayRelativePosition: $l.optional(),
  navigationType: eE.optional(),
  transitionPreserveScroll: _$$z.boolean().optional(),
  easingFunction: _$$z.array(_$$z.number()).length(4).optional(),
  extraScrollOffset: $l.optional(),
  transitionResetScrollPosition: _$$z.boolean().optional(),
  transitionResetInteractiveComponents: _$$z.boolean().optional(),
  connectionURL: _$$z.string().optional(),
  openUrlInNewTab: _$$z.boolean().optional(),
  linkParam: _$$z.any().optional(),
  cmsTarget: ey.optional(),
  targetVariable: eN.optional(),
  targetVariableData: _$$z.any().optional(),
  mediaAction: ex.optional(),
  transitionResetVideoPosition: _$$z.boolean().optional(),
  mediaSkipToTime: _$$z.number().optional(),
  mediaSkipByAmount: _$$z.number().optional(),
  mediaPlaybackRate: _$$z.number().optional(),
  conditionalActions: eP.array().optional(),
  targetVariableSetID: _$$z.string().optional(),
  targetVariableModeID: _$$z.string().optional(),
  targetVariableSetKey: _$$z.string().optional(),
  animationType: eS.optional(),
  animationPhase: ew.optional(),
  animationState: eR.optional(),
  stateGroupContext: _$$z.string().optional(),
  noop: _$$z.boolean().optional()
});
let eD = _$$z.array(eO);
let eL = _$$z.object({
  id: rw.optional(),
  event: ek.optional(),
  actions: eD.optional(),
  isDeleted: _$$z.boolean().optional(),
  stateManagementVersion: _$$z.number().optional()
});
let eF = _$$z.object({
  interactions: _$$z.array(eL).optional(),
  ...eA.shape
});
let eM = _$$z.object({
  clipsContent: _$$z.boolean(),
  overflowDirection: _$$z.enum(["HORIZONTAL_SCROLLING", "VERTICAL_SCROLLING", "HORIZONTAL_AND_VERTICAL_SCROLLING", "NONE"]),
  layoutMode: _$$z.enum(["NONE", "HORIZONTAL", "VERTICAL", "GRID"]),
  primaryAxisSizingMode: _$$z.enum(["FIXED", "AUTO"]),
  counterAxisSizingMode: _$$z.enum(["FIXED", "AUTO"]),
  primaryAxisAlignItems: _$$z.enum(["MIN", "CENTER", "MAX", "SPACE_BETWEEN"]),
  counterAxisAlignItems: _$$z.enum(["MIN", "CENTER", "MAX", "BASELINE"]),
  paddingLeft: _$$z.number(),
  paddingRight: _$$z.number(),
  paddingTop: _$$z.number(),
  paddingBottom: _$$z.number(),
  itemSpacing: _$$z.number(),
  itemReverseZIndex: _$$z.boolean(),
  strokesIncludedInLayout: _$$z.boolean(),
  layoutWrap: _$$z.enum(["NO_WRAP", "WRAP"]),
  counterAxisSpacing: _$$z.number(),
  counterAxisAlignContent: _$$z.enum(["AUTO", "SPACE_BETWEEN"]),
  gridColumnCount: _$$z.number().optional(),
  gridRowCount: _$$z.number().optional(),
  gridRowGap: _$$z.number().optional(),
  gridColumnGap: _$$z.number().optional(),
  gridColumnsSizing: _$$z.string().optional(),
  gridRowsSizing: _$$z.string().optional()
}).partial();
let ej = _$$z.object({
  cornerRadius: _$$z.number(),
  rectangleCornerRadii: _$$z.array(_$$z.number()).min(4).max(4),
  rectangleCornerRadiiIndependent: _$$z.boolean()
}).partial();
let eU = _$$z.object({
  top: _$$z.number(),
  right: _$$z.number(),
  bottom: _$$z.number(),
  left: _$$z.number()
});
let eB = _$$z.object({
  individualStrokeWeights: eU
}).partial();
let eV = _$$z.object({
  isInAnimateTree: _$$z.boolean()
}).partial();
let eG = _$$z.object({
  maybeAnimateRotation: _$$z.boolean().optional()
}).partial();
_$$z.object({
  ...V.shape,
  ...j.shape,
  ...B.shape,
  ...H.shape,
  ...eM.shape,
  ...ej.shape,
  ...ei.shape,
  ...eu.shape,
  ...ep.shape,
  ...eB.shape,
  ...em.shape,
  ...eF.shape,
  ...M.shape,
  ...eV.shape,
  ...eG.shape
});
let ez = _$$z.object({
  ...j.shape,
  ...B.shape,
  ...H.shape,
  ...ei.shape,
  ...eu.shape,
  ...ep.shape,
  ...M.shape,
  ...eG.shape
});
let eH = _$$z.object({
  ...ez.shape,
  ...ej.shape
});
_$$z.object({
  ...ez.shape,
  ...ej.shape,
  ...eB.shape,
  ...eG.shape
});
let eW = _$$z.object({
  type: _$$z.enum(["URL", "NODE"]),
  url: _$$z.string().optional(),
  nodeID: _$$z.string().optional(),
  openInNewTab: _$$z.boolean()
}).partial();
let eK = _$$z.number();
let eY = _$$z.number();
let eq = _$$z.number();
let e$ = _$$z.enum(["NONE", "WIDTH_AND_HEIGHT", "HEIGHT", "TRUNCATE"]);
let eZ = _$$z.enum(["LEFT", "RIGHT", "CENTER", "JUSTIFIED"]);
let eX = _$$z.enum(["TOP", "CENTER", "BOTTOM"]);
let eQ = _$$z.object({
  fontFamily: Yj,
  fontSize: Yj,
  fontStyle: Yj,
  fontWeight: Yj,
  letterSpacing: Yj,
  lineHeight: Yj,
  paragraphSpacing: Yj,
  paragraphIndent: Yj
});
let eJ = _$$z.enum(["ORIGINAL", "UPPER", "LOWER", "TITLE", "SMALL_CAPS", "SMALL_CAPS_FORCED"]);
let e0 = _$$z.object({
  lineHeightPx: _$$z.number(),
  lineHeightPercent: _$$z.number(),
  lineHeightPercentFontSize: _$$z.number().optional(),
  lineHeightUnit: _$$z.enum(["PIXELS", "FONT_SIZE_%", "INTRINSIC_%"])
});
let e1 = _$$z.object({
  fontFamily: _$$z.string(),
  fontStyle: _$$z.string(),
  fontVariations: _$$z.record(_$$z.string(), _$$z.number()).optional(),
  fontVariantPosition: _$$z.nativeEnum(_$$eT),
  fontPostScriptName: _$$z.union([_$$z.string(), _$$z.$$null()]),
  paragraphSpacing: eq,
  paragraphIndent: eY,
  listSpacing: eK,
  italic: _$$z.boolean(),
  fontSize: _$$z.number(),
  textCase: eJ,
  textDecoration: _$$z.nativeEnum(i8),
  textDecorationSkipInk: _$$z.boolean(),
  textUnderlineOffsetUnit: _$$z.enum(["PIXELS", "PERCENT"]).optional(),
  textUnderlineOffsetValue: _$$z.number().optional(),
  textDecorationThicknessUnit: _$$z.enum(["PIXELS", "PERCENT"]).optional(),
  textDecorationThicknessValue: _$$z.number().optional(),
  textDecorationStyle: _$$z.enum(["solid", "dotted", "wavy"]),
  textDecorationFills: _$$z.array(J).optional(),
  textAutoResize: e$,
  textTruncation: _$$z.enum(["DISABLED", "ENDING"]),
  maxLines: _$$z.number().optional(),
  textAlignHorizontal: eZ,
  textAlignVertical: eX,
  letterSpacing: _$$z.number(),
  letterSpacingValue: _$$z.number(),
  letterSpacingUnit: _$$z.enum(["PIXELS", "PERCENT"]),
  fills: _$$z.array(J).optional(),
  hyperlink: eW.optional(),
  opentypeFlags: _$$z.record(_$$z.number()).optional(),
  ...e0.shape,
  hangingList: _$$z.boolean().optional(),
  leadingTrim: _$$z.enum(["NONE", "CAP_HEIGHT"]).optional(),
  hangingPunctuation: _$$z.boolean().optional(),
  boundVariables: eQ.partial().optional(),
  styleIdForText: _$$z.string().optional(),
  fallbackFonts: _$$z.optional(_$$z.array(_$$z.object({
    fontFamily: _$$z.string(),
    fontStyle: _$$z.string()
  })))
});
let e2 = _$$z.object({
  fontSize: _$$z.number().optional(),
  letterSpacing: _$$z.number().optional(),
  letterSpacingValue: _$$z.number().optional(),
  letterSpacingUnit: _$$z.enum(["PIXELS", "PERCENT"]).optional(),
  lineHeightPx: _$$z.number().optional(),
  lineHeightPercent: _$$z.number().optional(),
  lineHeightPercentFontSize: _$$z.number().optional(),
  lineHeightUnit: _$$z.enum(["PIXELS", "FONT_SIZE_%", "INTRINSIC_%"]).optional(),
  paragraphSpacing: eq.optional()
});
let e5 = _$$z.object({
  minWidth: _$$z.number(),
  name: _$$z.string(),
  boundVariables: eQ.pick({
    fontSize: !0,
    letterSpacing: !0,
    lineHeight: !0,
    paragraphSpacing: !0
  }).partial().optional(),
  style: e2
});
let e4 = e1.extend({
  responsiveTextStyleVariants: _$$z.array(e5).optional()
});
let e3 = _$$z.object({
  characters: _$$z.string(),
  style: e4,
  characterStyleOverrides: _$$z.array(_$$z.number()),
  styleOverrideTable: _$$z.record(_$$z.string(), e4.partial()),
  lineTypes: _$$z.array(_$$z.nativeEnum(wj)),
  lineIndentations: _$$z.array(_$$z.number()),
  listStartOffsets: _$$z.array(_$$z.number().nullable()),
  lineStyleOverrides: _$$z.array(_$$z.number()),
  lineTextDirections: _$$z.array(_$$z.enum(["ltr", "rtl", "auto"])).nullable().optional(),
  lineStartsWithPunctuation: _$$z.record(_$$z.string(), _$$z.boolean()).optional(),
  listSpacing: eK.optional(),
  paragraphIndent: eY.optional(),
  paragraphSpacing: eq.optional(),
  textAutoResize: e$.optional(),
  textAlignHorizontal: eZ.optional(),
  textAlignVertical: eX.optional(),
  responsiveTextStyleVariants: _$$z.array(e5).optional(),
  ...eA.shape
});
_$$z.enum(["BOOLEAN", "INSTANCE_SWAP", "TEXT", "VARIANT", "NUMBER", "IMAGE"]);
let e6 = _$$z.object({
  type: _$$z.enum(["COMPONENT", "COMPONENT_SET"]),
  key: _$$z.string()
});
let e7 = e3.omit({
  style: !0
});
_$$z.union([_$$z.boolean(), _$$z.string(), e7, _$$z.number(), R]);
let e8 = _$$z.discriminatedUnion("type", [_$$z.object({
  type: _$$z.literal("BOOLEAN"),
  defaultValue: _$$z.boolean(),
  preferredValues: _$$z.array(e6).optional()
}), _$$z.object({
  type: _$$z.literal("NUMBER"),
  defaultValue: _$$z.number(),
  preferredValues: _$$z.array(e6).optional()
}), _$$z.object({
  type: _$$z.literal("INSTANCE_SWAP"),
  defaultValue: _$$z.string(),
  preferredValues: _$$z.array(e6).optional()
}), _$$z.object({
  type: _$$z.literal("TEXT"),
  defaultValue: e7,
  preferredValues: _$$z.array(e6).optional()
}), _$$z.object({
  type: _$$z.literal("VARIANT"),
  defaultValue: _$$z.string(),
  variantOptions: _$$z.array(_$$z.string()).optional(),
  preferredValues: _$$z.array(e6).optional()
}), _$$z.object({
  type: _$$z.literal("IMAGE"),
  defaultValue: R,
  preferredValues: _$$z.array(e6).optional()
})]);
let e9 = _$$z.object({
  componentPropertyDefinitions: _$$z.record(e8)
}).partial();
let te = _$$z.discriminatedUnion("type", [_$$z.object({
  type: _$$z.literal("BOOLEAN"),
  value: _$$z.boolean(),
  variantOptions: _$$z.array(_$$z.string()).optional()
}), _$$z.object({
  type: _$$z.literal("NUMBER"),
  value: _$$z.number(),
  variantOptions: _$$z.array(_$$z.string()).optional()
}), _$$z.object({
  type: _$$z.literal("INSTANCE_SWAP"),
  value: _$$z.string(),
  variantOptions: _$$z.array(_$$z.string()).optional()
}), _$$z.object({
  type: _$$z.literal("TEXT"),
  value: e7,
  variantOptions: _$$z.array(_$$z.string()).optional()
}), _$$z.object({
  type: _$$z.literal("VARIANT"),
  value: _$$z.string(),
  variantOptions: _$$z.array(_$$z.string()).optional()
}), _$$z.object({
  type: _$$z.literal("IMAGE"),
  value: R,
  variantOptions: _$$z.array(_$$z.string()).optional()
})]);
_$$z.object({
  componentPropertyAssignments: _$$z.record(te)
});
let tt = _$$z.discriminatedUnion("type", [_$$z.object({
  type: _$$z.literal("BOOLEAN"),
  value: _$$z.boolean(),
  preferredValues: _$$z.array(e6).optional(),
  boundVariables: _$$z.object({
    value: Yj
  }).partial().optional()
}), _$$z.object({
  type: _$$z.literal("NUMBER"),
  value: _$$z.number(),
  preferredValues: _$$z.array(e6).optional(),
  boundVariables: _$$z.object({
    value: Yj
  }).partial().optional()
}), _$$z.object({
  type: _$$z.literal("INSTANCE_SWAP"),
  value: _$$z.string(),
  preferredValues: _$$z.array(e6).optional(),
  boundVariables: _$$z.object({
    value: Yj
  }).partial().optional()
}), _$$z.object({
  type: _$$z.literal("TEXT"),
  value: e7,
  preferredValues: _$$z.array(e6).optional(),
  boundVariables: _$$z.object({
    value: Yj
  }).partial().optional()
}), _$$z.object({
  type: _$$z.literal("VARIANT"),
  value: _$$z.string(),
  preferredValues: _$$z.array(e6).optional(),
  boundVariables: _$$z.object({
    value: Yj
  }).partial().optional()
}), _$$z.object({
  type: _$$z.literal("IMAGE"),
  value: R,
  variantOptions: _$$z.array(_$$z.string()).optional(),
  boundVariables: _$$z.object({
    value: Yj
  }).partial().optional()
})]);
let ti = _$$z.object({
  mainComponentId: _$$z.string(),
  componentSetId: _$$z.string().optional(),
  componentProperties: _$$z.record(tt),
  overrides: _$$z.array(_$$z.object({
    key: _$$z.array(_$$z.string()),
    value: _$$z.any()
  })),
  uniformScaleFactor: _$$z.number().optional()
});
_$$z.object({
  code: _$$z.string().optional(),
  sourceCodeHash: _$$z.string().optional(),
  codeExportName: _$$z.string().optional()
});
let tn = _$$z.object({
  textStyleId: _$$z.string()
});
let tr = _$$z.object({
  richText: _$$z.string().optional(),
  cmsRichTextStyleMap: _$$z.record(_$$z.string(), tn),
  ...eA.shape
});
_$$z.object({
  ...l.shape,
  ...V.shape,
  ...j.shape,
  ...B.shape,
  ...H.shape,
  ...eM.shape,
  ...ej.shape,
  ...ei.shape,
  ...eu.shape,
  ...ep.shape,
  ...eB.shape,
  ...em.shape,
  ...eF.shape,
  ...M.shape,
  ...eH.shape,
  ...e3.shape,
  ...e9.shape,
  ...ti.shape,
  ...tr.shape
}).partial();
let ta = (e => {
  let t = Object.entries(e.shape).reduce((e, [t, i]) => (e[t] = i.nullable(), e), {});
  return _$$z.object(t);
})(_$$z.object({
  ...l.shape,
  ...j.shape,
  ...B.shape,
  ...H.shape,
  ...eM.shape,
  ...ej.shape,
  ...ei.shape,
  ...eu.shape,
  ...ep.shape,
  ...eB.shape,
  ...em.shape,
  ...eF.shape,
  ...M.shape,
  ...eH.shape,
  ...e3.shape,
  ...ti.shape,
  ...tr.shape,
  ...eA.shape
}).partial());
let ts = _$$z.object({
  key: _$$z.array(_$$z.string()),
  value: _$$z.lazy(() => ta)
}).describe("Override");
_$$z.array(ts).describe("Overrides");
let tl = _$$z.object({
  line: _$$z.number(),
  column: _$$z.number()
});
let $$td5 = _$$z.object({
  start: tl,
  end: tl
});
let $$tc3 = _$$z.object({
  type: _$$z.literal("JSXExpressionContainer"),
  expression: _$$z.string(),
  location: $$td5.optional()
});
let tu = _$$z.object({
  r: _$$z.number(),
  g: _$$z.number(),
  b: _$$z.number(),
  a: _$$z.number()
});
let $$tp0 = _$$z.union([_$$z.string(), tu, $$tc3]);
let tm = _$$z.object({
  x: _$$z.number(),
  y: _$$z.number()
});
let $$th7 = _$$z.array(_$$z.array(_$$z.number()).length(3)).length(2);
let tg = _$$z.object({
  color: $$tp0,
  position: _$$z.number()
});
let tf = _$$z.object({
  blendMode: U3.optional(),
  opacity: _$$z.number().optional()
});
let t_ = tf.extend({
  type: _$$z.literal("solid"),
  color: $$tp0
});
let tA = tf.extend({
  type: _$$z.enum(["gradient-linear", "gradient-radial", "gradient-angular", "gradient-diamond"]),
  gradientHandlePositions: _$$z.array(tm).length(3),
  gradientStops: _$$z.array(tg)
});
let ty = _$$z.object({
  exposure: _$$z.number().optional(),
  contrast: _$$z.number().optional(),
  vibrance: _$$z.number().optional(),
  temperature: _$$z.number().optional(),
  tint: _$$z.number().optional(),
  highlights: _$$z.number().optional(),
  shadows: _$$z.number().optional()
});
let tb = tf.extend({
  type: _$$z.literal("image"),
  imageRef: _$$z.string().describe("The hash of the image to be used for this fill"),
  scaleMode: _$$z.enum(["fill", "fit", "tile", "crop"]).optional(),
  imageTransform: $$th7.optional().describe('Applicable only for scaleMode == "crop". Determines how the image is positioned (thus, cropped) within the layer.'),
  scalingFactor: _$$z.number().optional().describe('Applicable only for scaleMode == "tile" (automatic for other modes). Determines the scaling (thus, repetition) of the image within the layer.'),
  rotation: _$$z.number().optional().describe('Applicable only for scaleMode == "tile" | "fill" | "fit" (automatic for scaleMode == "CROP"). Determines the rotation of the image within the layer. Must be in increments of +90.'),
  filters: ty.optional().describe("Filters applied to the image, such as blur or brightness.")
});
let tv = _$$z.object({
  type: _$$z.literal("image-generation"),
  caption: _$$z.string().describe("A description of the image.  Will be used to generate a new image if no imageRef is provided.")
}).merge(tb.omit({
  type: !0,
  imageRef: !0
}));
let tI = _$$z.union([t_, tA, tb]);
let tE = _$$z.union([t_, tA, tb, tv]);
let tx = "@name(ColorOrPaintArray) Colors can be represented as 3 or 6 character hex values (#F000) or objects with rgba values from 0-1";
let $$tS2 = _$$z.union([_$$z.string(), _$$z.array(tI), $$tc3]).describe(tx);
let $$tw1 = _$$z.union([_$$z.string(), _$$z.array(tE), $$tc3]).describe(tx);
let $$tC6 = _$$z.object({
  className: _$$z.string().optional().describe("A string of tailwind classes")
});
let $$tT4 = _$$f(F, e => e instanceof _$$z.ZodObject && e._def.shape().behaviorType ? e.omit({
  behaviorType: !0
}) : e);
export const _6 = $$tp0;
export const y4 = $$tw1;
export const uw = $$tS2;
export const M1 = $$tc3;
export const fg = $$tT4;
export const gx = $$td5;
export const zA = $$tC6;
export const dL = $$th7; 
