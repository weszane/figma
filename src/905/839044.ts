import { z as _$$z } from "../vendor/835909";
import { B as _$$B } from "../905/985467";
var n;
var $$r0;
let s = _$$z.number().min(0).max(1);
let o = _$$z.number().min(0);
let l = _$$z.number().$$int().min(0);
let d = _$$z.object({
  r: _$$z.number().min(0).max(1),
  g: _$$z.number().min(0).max(1),
  b: _$$z.number().min(0).max(1)
});
let c = _$$z.object({
  r: _$$z.number().min(0).max(1),
  g: _$$z.number().min(0).max(1),
  b: _$$z.number().min(0).max(1),
  a: _$$z.number().min(0).max(1)
});
let u = _$$z.tuple([_$$z.number(), _$$z.number(), _$$z.number()]);
let p = _$$z.tuple([u, u]);
let m = _$$z.object({
  topLeft: o,
  topRight: o,
  bottomLeft: o,
  bottomRight: o
});
let h = _$$z.object({
  x: _$$z.number(),
  y: _$$z.number()
});
let g = _$$z.object({
  width: _$$z.number(),
  height: _$$z.number()
});
let f = _$$z.enum(["PASS_THROUGH", "NORMAL", "DARKEN", "MULTIPLY", "LINEAR_BURN", "COLOR_BURN", "LIGHTEN", "SCREEN", "LINEAR_DODGE", "COLOR_DODGE", "OVERLAY", "SOFT_LIGHT", "HARD_LIGHT", "DIFFERENCE", "EXCLUSION", "HUE", "SATURATION", "COLOR", "LUMINOSITY"]);
let _ = _$$z.enum(["FIXED", "SCROLLS", "STICKY_SCROLLS"]);
let A = _$$z.enum(["UNION", "INTERSECT", "SUBTRACT", "EXCLUDE"]);
let y = _$$z.enum(["TOP", "BOTTOM", "TOP_BOTTOM", "STRETCH", "SCALE"]);
let b = _$$z.enum(["LEFT", "RIGHT", "LEFT_RIGHT", "STRETCH", "SCALE"]);
let v = _$$z.enum(["CENTER", "INSIDE", "OUTSIDE"]);
let I = _$$z.enum(["NONE", "ROUND", "SQUARE", "LINE_ARROW", "TRIANGLE_ARROW", "DIAMOND_FILLED", "CIRCLE_FILLED", "TRIANGLE_FILLED"]);
let E = _$$z.enum(["MITER", "BEVEL", "ROUND"]);
let x = _$$z.object({
  horizontal: b.optional(),
  vertical: y.optional()
});
let S = _$$z.enum(["NONE", "HORIZONTAL_SCROLLING", "VERTICAL_SCROLLING", "HORIZONTAL_AND_VERTICAL_SCROLLING"]);
let w = _$$z.enum(["MIN", "CENTER", "MAX", "STRETCH", "BASELINE", "INHERIT"]);
let C = _$$z.enum(["NONE", "VERTICAL", "HORIZONTAL"]);
let T = _$$z.enum(["MIN", "MAX", "CENTER", "BASELINE"]);
let k = _$$z.enum(["MIN", "MAX", "CENTER", "SPACE_EVENLY", "SPACE_BETWEEN"]);
let R = _$$z.enum(["FIXED", "AUTO"]);
let N = _$$z.enum(["FIXED", "AUTO"]);
let P = {
  layoutMode: C.optional(),
  layoutAlign: w.optional(),
  itemSpacing: _$$z.number().optional(),
  counterAxisSizingMode: R.optional(),
  primaryAxisSizingMode: N.optional(),
  counterAxisAlignItems: k.optional(),
  primaryAxisAlignItems: T.optional(),
  paddingLeft: _$$z.number().optional(),
  paddingRight: _$$z.number().optional(),
  paddingTop: _$$z.number().optional(),
  paddingBottom: _$$z.number().optional()
};
let O = _$$z.enum(["AUTO", "ABSOLUTE"]);
let D = _$$z.union([_$$z.object({
  pattern: _$$z.enum(["COLUMNS", "ROWS"]),
  alignment: _$$z.enum(["MIN", "MAX"]),
  gutterSize: _$$z.number(),
  count: l,
  sectionSize: _$$z.number().min(0),
  offset: _$$z.number().min(0),
  visible: _$$z.boolean().optional(),
  color: c.optional()
}), _$$z.object({
  pattern: _$$z.enum(["COLUMNS", "ROWS"]),
  alignment: _$$z.literal("STRETCH"),
  gutterSize: _$$z.number(),
  count: l,
  offset: _$$z.number().min(0),
  visible: _$$z.boolean().optional(),
  color: c.optional()
}), _$$z.object({
  pattern: _$$z.enum(["COLUMNS", "ROWS"]),
  alignment: _$$z.literal("CENTER"),
  gutterSize: _$$z.number(),
  count: l,
  sectionSize: _$$z.number().min(0),
  visible: _$$z.boolean().optional(),
  color: c.optional()
}), _$$z.object({
  pattern: _$$z.literal("GRID"),
  sectionSize: _$$z.number().min(0),
  visible: _$$z.boolean().optional(),
  color: c.optional()
})]);
let L = {
  offset: h,
  color: c,
  blendMode: f,
  radius: _$$z.number().min(0),
  spread: _$$z.number().optional(),
  visible: _$$z.boolean()
};
let F = _$$z.object({
  ...L,
  type: _$$z.literal("INNER_SHADOW")
});
let M = _$$z.object({
  ...L,
  type: _$$z.literal("DROP_SHADOW"),
  showShadowBehindNode: _$$z.boolean().optional()
});
let j = _$$z.object({
  type: _$$z.enum(["LAYER_BLUR", "BACKGROUND_BLUR"]),
  radius: _$$z.number().min(0),
  visible: _$$z.boolean()
});
let U = _$$z.discriminatedUnion("type", [F, M, j]);
let B = _$$z.array(U);
let V = _$$z.object({
  position: s,
  color: c
});
let G = _$$z.enum(["EASE_IN", "EASE_OUT", "EASE_IN_AND_OUT", "LINEAR", "EASE_IN_BACK", "EASE_OUT_BACK", "EASE_IN_AND_OUT_BACK", "CUSTOM_CUBIC_BEZIER", "GENTLE", "QUICK", "BOUNCY", "SLOW", "CUSTOM_SPRING"]);
let z = _$$z.discriminatedUnion("type", [_$$z.object({
  type: _$$z.literal("SOLID"),
  color: d,
  visible: _$$z.boolean().optional(),
  opacity: s.optional(),
  blendMode: f.optional()
}), _$$z.object({
  type: _$$z.enum(["GRADIENT_LINEAR", "GRADIENT_RADIAL", "GRADIENT_ANGULAR", "GRADIENT_DIAMOND"]),
  gradientTransform: p,
  gradientStops: _$$z.array(V),
  visible: _$$z.boolean().optional(),
  opacity: s.optional(),
  blendMode: f.optional()
}), _$$z.object({
  type: _$$z.literal("IMAGE"),
  scaleMode: _$$z.enum(["FILL", "FIT", "CROP", "TILE"]).optional(),
  imageRef: _$$z.string(),
  scalingFactor: o.optional(),
  rotation: l.optional(),
  imageTransform: p.optional(),
  visible: _$$z.boolean().optional(),
  opacity: s.optional(),
  blendMode: f.optional()
})]);
let H = _$$z.array(z);
let W = _$$z.object({
  startingAngle: _$$z.number(),
  endingAngle: _$$z.number(),
  innerRadius: s
});
let K = _$$z.enum(["NONZERO", "EVENODD"]);
let Y = _$$z.object({
  x: _$$z.number(),
  y: _$$z.number(),
  strokeCap: I.optional(),
  strokeJoin: E.optional(),
  cornerRadius: o.optional()
});
let q = _$$z.object({
  start: l,
  end: l,
  tangentStart: h.optional(),
  tangentEnd: h.optional()
});
let $ = _$$z.object({
  windingRule: K,
  loops: _$$z.array(_$$z.array(l)),
  fillStyleId: _$$z.string().optional()
});
let Z = _$$z.object({
  vertices: _$$z.array(Y),
  segments: _$$z.array(q),
  regions: _$$z.array($).optional()
});
let X = _$$z.discriminatedUnion("format", [_$$z.object({
  format: _$$z.enum(["PNG", "JPG"]),
  contentsOnly: _$$z.boolean().optional(),
  suffix: _$$z.string().optional(),
  useAbsoluteBounds: _$$z.boolean().optional(),
  constraint: _$$z.union([_$$z.object({
    type: _$$z.enum(["SCALE"]),
    value: _$$z.number()
  }), _$$z.object({
    type: _$$z.enum(["WIDTH", "HEIGHT"]),
    value: _$$z.number().$$int()
  })]).optional()
}), _$$z.object({
  format: _$$z.literal("PDF"),
  contentsOnly: _$$z.boolean().optional(),
  suffix: _$$z.string().optional(),
  useAbsoluteBounds: _$$z.boolean().optional()
}), _$$z.object({
  format: _$$z.literal("SVG"),
  contentsOnly: _$$z.boolean().optional(),
  suffix: _$$z.string().optional(),
  svgOutlineText: _$$z.boolean().optional(),
  svgIdAttribute: _$$z.boolean().optional(),
  svgSimplifyStroke: _$$z.boolean().optional(),
  useAbsoluteBounds: _$$z.boolean().optional()
})]);
let Q = _$$z.array(X);
let J = _$$z.record(_$$z.object({
  fills: H
}));
let ee = {
  cornerRadius: o.optional(),
  rectangleCornerRadii: m.optional()
};
let et = _$$z.object(ee);
let ei = {
  strokeWeight: _$$z.number().optional(),
  individualStrokeWeights: _$$z.object({
    left: _$$z.number().optional(),
    right: _$$z.number().optional(),
    top: _$$z.number().optional(),
    bottom: _$$z.number().optional()
  }).optional()
};
let en = _$$z.object(ei);
let er = _$$z.enum(["ORIGINAL", "UPPER", "LOWER", "TITLE"]);
let ea = _$$z.enum(["NO_WRAP", "WRAP"]);
let es = _$$z.object({
  family: _$$z.string(),
  style: _$$z.string()
});
let eo = _$$z.object({
  fontSize: o.optional(),
  fontName: es.optional(),
  letterSpacing: _$$z.number().optional(),
  textCase: er.optional(),
  fillPaints: H.optional()
});
let el = _$$z.array(_$$z.record(_$$z.string()));
let ed = _$$z.enum(["SQUARE", "ELLIPSE", "DIAMOND", "TRIANGLE_UP", "TRIANGLE_DOWN", "ROUNDED_RECTANGLE", "PARALLELOGRAM_RIGHT", "PARALLELOGRAM_LEFT", "ENG_DATABASE", "ENG_QUEUE", "ENG_FILE", "ENG_FOLDER", "TRAPEZOID", "PREDEFINED_PROCESS", "SHIELD", "DOCUMENT_SINGLE", "DOCUMENT_MULTIPLE", "MANUAL_INPUT", "HEXAGON", "CHEVRON", "PENTAGON", "OCTAGON", "STAR", "PLUS", "ARROW_LEFT", "ARROW_RIGHT", "SUMMING_JUNCTION", "OR", "SPEECH_BUBBLE", "INTERNAL_STORAGE"]);
let ec = _$$z.enum(["NONE", "ARROW_EQUILATERAL", "ARROW_LINES", "TRIANGLE_FILLED", "DIAMOND_FILLED", "CIRCLE_FILLED"]);
let eu = _$$z.union([_$$z.object({
  endpointNodeId: _$$z.string(),
  magnet: _$$z.enum(["NONE", "AUTO", "TOP", "LEFT", "BOTTOM", "RIGHT"])
}), _$$z.object({
  endpointNodeId: _$$z.string().optional(),
  position: _$$z.object({
    x: _$$z.number(),
    y: _$$z.number()
  })
})]);
let ep = {
  id: _$$z.string(),
  parentId: _$$z.string().optional(),
  name: _$$z.string().optional(),
  visible: _$$z.boolean().optional(),
  locked: _$$z.boolean().optional(),
  scrollBehavior: _.optional(),
  pluginData: _$$z.object({
    desiredSize: _$$z.enum(["small", "medium", "large", "notice"]).optional(),
    pluginSvgPreviewUrl: _$$z.string().optional(),
    pluginSvgPreviewData: _$$z.string().optional()
  }).optional()
};
let em = {
  blendMode: f.optional(),
  opacity: s.optional()
};
let eh = {
  fills: H.optional(),
  strokes: H.optional(),
  fillOverrideTable: J.optional(),
  strokeAlign: v.optional(),
  strokeCap: I.optional(),
  strokeJoin: E.optional(),
  strokeMiterLimit: _$$z.number().min(0).optional(),
  strokeDashes: _$$z.array(_$$z.number()).optional()
};
let eg = {
  relativeTransform: p.optional(),
  preserveRatio: _$$z.boolean().optional(),
  constraints: x.optional(),
  size: g.optional(),
  layoutAlign: w.optional(),
  layoutGrow: _$$z.number().optional(),
  layoutPositioning: O.optional()
};
let ef = {
  transitionNodeID: _$$z.string().optional(),
  transitionDuration: _$$z.number().min(0).optional(),
  transitionEasing: G.optional()
};
let e_ = {
  clipsContent: _$$z.boolean().optional(),
  fills: H.optional(),
  strokes: H.optional(),
  strokeAlign: v.optional(),
  overflowDirection: S.optional(),
  layoutGrids: D.optional(),
  ...ee,
  ...ei,
  ...P
};
let eA = {
  exportSettings: Q.optional()
};
let ey = {
  effects: B.optional()
};
let eb = {
  isMask: _$$z.boolean().optional()
};
let ev = {
  ...ep,
  ...em,
  ...eg,
  ...eh,
  ...eA,
  ...ey,
  ...eb,
  ...ef
};
let eI = _$$z.object({
  uri: _$$z.string()
});
let eE = {
  description: _$$z.string().optional(),
  documentationLinks: _$$z.tuple([eI]).optional()
};
let ex = {
  sectionContentsHidden: _$$z.boolean().optional()
};
let eS = {
  fills: H.optional()
};
let ew = {
  strokes: H.optional(),
  strokeWeight: _$$z.number().optional(),
  strokeAlign: v.optional(),
  strokeJoin: E.optional(),
  strokeDashes: _$$z.array(_$$z.number()).optional()
};
let eC = _$$z.object({
  type: _$$z.literal("ELLIPSE"),
  arcData: W,
  ...ev
});
let eT = _$$z.object({
  type: _$$z.enum(["STAR", "LINE", "REGULAR_POLYGON", "RECTANGLE"]),
  ...ev
});
let ek = _$$z.object({
  type: _$$z.literal("VECTOR"),
  vectorNetwork: Z,
  ...ev
});
let eR = _$$z.object({
  type: _$$z.literal("BOOLEAN_OPERATION"),
  booleanOperation: A,
  ...ev
});
let eN = _$$z.object({
  type: _$$z.literal("SLICE"),
  ...ev,
  ...eA
});
let eP = _$$z.enum(["ORDERED", "UNORDERED", "NONE"]);
let eO = {
  characters: _$$z.string(),
  style: eo.optional(),
  characterStyleOverrides: _$$z.array(_$$z.number()).optional(),
  styleOverrideTable: _$$z.record(eo).optional(),
  lineTypes: _$$z.array(eP).optional(),
  lineIndentations: _$$z.array(_$$z.number().min(0)).optional()
};
let eD = {
  layoutWrap: ea.optional()
};
let eL = _$$z.object({
  type: _$$z.literal("TEXT"),
  ...ev,
  ...eO,
  ...eD
});
let eF = _$$z.object({
  type: _$$z.literal("FRAME"),
  ...ev,
  ...e_
});
let eM = _$$z.object({
  type: _$$z.literal("GROUP"),
  ...ep
});
let ej = _$$z.object({
  type: _$$z.literal("COMPONENT"),
  ...ep,
  ...e_,
  ...eE
});
let eU = _$$z.object({
  type: _$$z.literal("COMPONENT_SET"),
  ...ep,
  ...e_,
  ...eE
});
!function (e) {
  e.COMPONENT = "COMPONENT";
  e.COMPONENT_SET = "COMPONENT_SET";
}(n || (n = {}));
let eB = _$$z.object({
  type: _$$z.literal("INSTANCE"),
  componentKey: _$$z.string(),
  componentType: _$$z.enum(["COMPONENT", "COMPONENT_SET"]),
  componentId: _$$z.string().optional(),
  uniformScaleFactor: _$$z.number().optional(),
  ...ep,
  ...e_,
  ...ep
});
let eV = _$$z.object({
  type: _$$z.literal("SECTION"),
  ...ep,
  ...ex,
  ...eh,
  ...eg
});
let eG = _$$z.object({
  type: _$$z.literal("STICKY"),
  authorVisible: _$$z.boolean(),
  authorName: _$$z.string(),
  ...ep,
  ...eg,
  ...em,
  ...eS,
  ...eb,
  ...ey,
  ...eA,
  ...eO
});
let ez = _$$z.object({
  type: _$$z.literal("SHAPE_WITH_TEXT"),
  shapeType: ed,
  ...ep,
  ...eg,
  ...em,
  ...eS,
  ...eb,
  ...ey,
  ...eA,
  ...eO,
  ...ee,
  ...ew
});
let eH = _$$z.object({
  type: _$$z.literal("CONNECTOR"),
  connectorStart: eu,
  connectorEnd: eu,
  connectorStartStrokeCap: ec,
  connectorEndStrokeCap: ec,
  textBackground: et.merge(en).optional(),
  connectorLineType: _$$z.enum(["ELBOWED", "STRAIGHT"]),
  ...ep,
  ...eg,
  ...em,
  ...ey,
  ...eA,
  ...eO,
  ...ew
});
let eW = _$$z.object({
  type: _$$z.literal("WIDGET"),
  pluginId: _$$z.string(),
  pluginVersionId: _$$z.optional(_$$z.string()),
  size: g.optional(),
  widgetSyncedState: el.optional(),
  ...ep,
  ...eA
});
let eK = _$$z.object({
  type: _$$z.literal("TABLE"),
  numRows: _$$z.number().$$int(),
  numColumns: _$$z.number().$$int(),
  ...ep,
  ...eg,
  ...em,
  ...ey,
  ...eA,
  ...ew
});
let eY = _$$z.object({
  type: _$$z.literal("TABLE_CELL"),
  rowIndex: _$$z.number().$$int(),
  columnIndex: _$$z.number().$$int(),
  ...eg,
  ...ep,
  ...eS,
  ...eO
});
let eq = _$$z.lazy(() => _$$z.discriminatedUnion("type", [eC, eT, ek, eN, eL, eB, eG, ez, eH, eW, eK, eY, eR.extend({
  children: _$$z.array(eq).optional()
}), eV.extend({
  children: _$$z.array(eq).optional()
}), eF.extend({
  children: _$$z.array(eq).optional()
}), eM.extend({
  children: _$$z.array(eq).optional()
}), ej.extend({
  children: _$$z.array(eq).optional()
}), eU.extend({
  children: _$$z.array(eq).min(1)
})]));
let e$ = new WeakMap();
let eZ = new WeakMap();
let eX = new WeakMap();
!function (e) {
  e.DESCRIPTION = "description";
  e.PASSTHROUGH_XML_DEBUG_ONLY = "passthroughXmlDebugOnly";
}($$r0 || ($$r0 = {}));
export let $$eJ1 = _$$z.object({
  prompt: _$$z.string(),
  mode: _$$z.enum(Object.values($$r0)).optional()
});
_$$z.discriminatedUnion("type", [_$$z.object({
  type: _$$z.literal("TAG_OPEN"),
  tag: _$$z.string(),
  attrs: _$$z.record(_$$z.string(), _$$z.string().optional())
}), _$$z.object({
  type: _$$z.literal("TEXT_DELTA"),
  delta: _$$z.string()
}), _$$z.object({
  type: _$$z.literal("TAG_CLOSE"),
  tag: _$$z.string()
}), _$$z.object({
  type: _$$z.literal("COMMENT"),
  comment: _$$z.string()
})]);
let e0 = _$$z.string();
let $$e12 = _$$z.object({
  requestId: _$$z.string().optional(),
  createNodes: _$$z.object({
    node: function (e, t) {
      e$.set(e, e._def.getType);
      eZ.set(e, t);
      e._def.getType = (...t) => {
        let i = e$.get(e);
        let n = eZ.get(e);
        return n && !eX.get(e) ? n.call(e._def, ...t) : i ? i.call(e._def, ...t) : void 0;
      };
      return e;
    }(eq, e => e.factory.createKeywordTypeNode(e.SyntaxKind.AnyKeyword)),
    parentId: e0.optional(),
    index: _$$z.number().optional()
  }).array().optional(),
  cortex_error: _$$z.object({
    type: _$$z.string(),
    data: _$$z.any()
  }).optional(),
  trace: _$$B.optional()
});
export const Wc = $$r0;
export const Fs = $$eJ1;
export const pp = $$e12; 
