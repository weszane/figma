import { Z_n, rXF } from "../figma_app/763686";
import { $ as _$$$ } from "../905/266460";
import { getFeatureFlags } from "../905/601108";
import { z as _$$z } from "../905/239603";
import { hp } from "../vendor/162266";
import { XH } from "../905/413743";
import { n as _$$n } from "../905/347702";
import { getFunctionHandle } from "../905/572400";
import { eM } from "../905/933084";
import { N2, SI } from "../905/321380";
var $$n0;
(e => {
  e.PluginFunction = _$$z.any().refine(e => !!getFunctionHandle(e));
  e.FiniteNumber = _$$z.number().finite();
  e.Float = e.FiniteNumber;
  e.ZeroToOne = e.FiniteNumber.min(0).max(1);
  e.PositiveFloat = e.FiniteNumber.min(0);
  e.NonZeroPositiveFloat = e.FiniteNumber.min(.01);
  e.PositiveInteger = e.FiniteNumber.min(0).$$int();
  e.FloatNegativeOneToOne = e.FiniteNumber.min(-1).max(1);
  e.ZeroOrOne = _$$z.union([_$$z.literal(0), _$$z.literal(1)]);
  e.Integer = e.FiniteNumber.$$int();
  e.Color = _$$z.strictObject({
    r: e.ZeroToOne,
    g: e.ZeroToOne,
    b: e.ZeroToOne
  });
  e.ColorA = _$$z.strictObject({
    r: e.ZeroToOne,
    g: e.ZeroToOne,
    b: e.ZeroToOne,
    a: e.ZeroToOne
  });
  e.BuzzAssetType = _$$z.$$enum(XH);
  e.VariableDataType = _$$z.$$enum(["BOOLEAN", "FLOAT", "STRING", "VARIABLE_ALIAS", "COLOR", "EXPRESSION", "MAP", "SYMBOL_ID"]);
  e.VariableResolvedDataType = _$$z.$$enum(["BOOLEAN", "COLOR", "FLOAT", "STRING"]);
  e.ExpressionFunction = _$$z.$$enum(["ADDITION", "SUBTRACTION", "RESOLVE_VARIANT", "MULTIPLICATION", "DIVISION", "EQUALS", "NOT_EQUAL", "LESS_THAN", "LESS_THAN_OR_EQUAL", "GREATER_THAN", "GREATER_THAN_OR_EQUAL", "AND", "OR", "NOT", "STRINGIFY", "TERNARY", "VAR_MODE_LOOKUP", "NEGATE", "IS_TRUTHY"]);
  e.VariableAlias = _$$z.strictObject({
    type: _$$z.literal("VARIABLE_ALIAS"),
    id: _$$z.string()
  });
  e.VariableData = _$$z.strictObject({
    type: e.VariableDataType.optional(),
    resolvedType: e.VariableResolvedDataType.optional(),
    value: _$$z.union([e.FiniteNumber, _$$z.boolean(), _$$z.string(), e.ColorA, e.VariableAlias, _$$z.lazy(() => e.Expression)]).optional()
  });
  e.Expression = _$$z.strictObject({
    expressionFunction: e.ExpressionFunction,
    expressionArguments: _$$z.array(_$$z.lazy(() => e.VariableData))
  });
  e.Navigation = _$$z.$$enum(["NAVIGATE", "SWAP", "OVERLAY", "SCROLL_TO", "CHANGE_TO"]);
  e.Easing = _$$z.strictObject({
    type: _$$z.$$enum(["EASE_IN", "EASE_OUT", "EASE_IN_AND_OUT", "LINEAR", "EASE_IN_BACK", "EASE_OUT_BACK", "EASE_IN_AND_OUT_BACK", "CUSTOM_CUBIC_BEZIER", "GENTLE", "QUICK", "BOUNCY", "SLOW", "CUSTOM_SPRING"]),
    easingFunctionCubicBezier: _$$z.strictObject({
      x1: e.FiniteNumber,
      y1: e.FiniteNumber,
      x2: e.FiniteNumber,
      y2: e.FiniteNumber
    }).optional(),
    easingFunctionSpring: _$$z.strictObject({
      mass: e.FiniteNumber,
      stiffness: e.FiniteNumber,
      damping: e.FiniteNumber
    }).optional()
  });
  e.SimpleTransition = _$$z.strictObject({
    type: _$$z.$$enum(["DISSOLVE", "SMART_ANIMATE", "SCROLL_ANIMATE"]),
    easing: e.Easing,
    duration: e.FiniteNumber
  });
  e.DirectionalTransition = _$$z.strictObject({
    type: _$$z.$$enum(["MOVE_IN", "MOVE_OUT", "PUSH", "SLIDE_IN", "SLIDE_OUT"]),
    direction: _$$z.$$enum(["LEFT", "RIGHT", "TOP", "BOTTOM"]),
    matchLayers: _$$z.boolean(),
    easing: e.Easing,
    duration: e.FiniteNumber
  });
  e.Transition = _$$z.union([e.SimpleTransition, e.DirectionalTransition]);
  e.Vector = _$$z.strictObject({
    x: e.FiniteNumber,
    y: e.FiniteNumber
  });
  e.ReactionActionNoConditional = _$$z.union([_$$z.strictObject({
    type: _$$z.$$enum(["BACK", "CLOSE"])
  }), _$$z.strictObject({
    type: _$$z.literal("URL"),
    url: _$$z.string(),
    openInNewTab: _$$z.boolean().optional()
  }), _$$z.strictObject({
    type: _$$z.literal("UPDATE_MEDIA_RUNTIME"),
    destinationId: _$$z.union([_$$z.string(), _$$z.$$null()]),
    mediaAction: _$$z.$$enum(["PLAY", "PAUSE", "TOGGLE_PLAY_PAUSE", "MUTE", "UNMUTE", "TOGGLE_MUTE_UNMUTE"])
  }), _$$z.strictObject({
    type: _$$z.literal("UPDATE_MEDIA_RUNTIME"),
    destinationId: _$$z.union([_$$z.string(), _$$z.$$null()]),
    mediaAction: _$$z.$$enum(["SKIP_FORWARD", "SKIP_BACKWARD"]),
    amountToSkip: e.FiniteNumber
  }), _$$z.strictObject({
    type: _$$z.literal("UPDATE_MEDIA_RUNTIME"),
    destinationId: _$$z.union([_$$z.string(), _$$z.$$null()]),
    mediaAction: _$$z.$$enum(["SKIP_TO"]),
    newTimestamp: e.FiniteNumber
  }), _$$z.strictObject({
    type: _$$z.literal("NODE"),
    destinationId: _$$z.union([_$$z.string(), _$$z.$$null()]),
    navigation: e.Navigation,
    transition: _$$z.union([e.Transition, _$$z.$$null()]),
    preserveScrollPosition: _$$z.boolean().optional(),
    resetVideoPosition: _$$z.boolean().optional(),
    overlayRelativePosition: e.Vector.optional(),
    resetScrollPosition: _$$z.boolean().optional(),
    resetInteractiveComponents: _$$z.boolean().optional()
  }), _$$z.strictObject({
    type: _$$z.literal("SET_VARIABLE"),
    variableId: _$$z.union([_$$z.string(), _$$z.$$null()]),
    variableValue: e.VariableData.optional()
  }), _$$z.strictObject({
    type: _$$z.literal("SET_VARIABLE_MODE"),
    variableCollectionId: _$$z.union([_$$z.string(), _$$z.$$null()]),
    variableModeId: _$$z.union([_$$z.string(), _$$z.$$null()])
  })]);
  e.Trigger = _$$z.union([_$$z.strictObject({
    type: _$$z.$$enum(["ON_CLICK", "ON_HOVER", "ON_PRESS", "ON_DRAG", "ON_MEDIA_END"])
  }), _$$z.strictObject({
    type: _$$z.literal("AFTER_TIMEOUT"),
    timeout: e.FiniteNumber
  }), _$$z.strictObject({
    type: _$$z.$$enum(["MOUSE_ENTER", "MOUSE_LEAVE", "MOUSE_UP", "MOUSE_DOWN"]),
    delay: e.FiniteNumber
  }), _$$z.strictObject({
    type: _$$z.literal("ON_KEY_DOWN"),
    device: _$$z.$$enum(["KEYBOARD", "XBOX_ONE", "PS4", "SWITCH_PRO", "UNKNOWN_CONTROLLER"]),
    keyCodes: _$$z.array(e.FiniteNumber)
  }), _$$z.strictObject({
    type: _$$z.literal("ON_MEDIA_HIT"),
    mediaHitTime: e.FiniteNumber
  })]);
  e.ConditionalBlock = _$$z.strictObject({
    condition: e.VariableData.optional(),
    actions: _$$z.array(e.ReactionActionNoConditional)
  });
  e.ReactionAction = _$$z.union([_$$z.strictObject({
    type: _$$z.literal("CONDITIONAL"),
    conditionalBlocks: _$$z.array(e.ConditionalBlock)
  }), e.ReactionActionNoConditional]);
  e.Reaction = _$$z.strictObject({
    action: e.ReactionAction.optional().nullable(),
    actions: _$$z.array(e.ReactionAction).optional(),
    trigger: _$$z.union([e.Trigger, _$$z.$$null()])
  });
  e.Reactions = _$$z.array(e.Reaction);
  e.MaskType = _$$z.$$enum(["ALPHA", "VECTOR", "LUMINANCE"]);
  e.UInt8Array = _$$z.$$instanceof(Uint8Array);
  e.ColorInput = _$$z.union([_$$z.string(), e.ColorA, e.Color]);
  e.BlendMode = _$$z.$$enum(["PASS_THROUGH", "NORMAL", "DARKEN", "MULTIPLY", "LINEAR_BURN", "COLOR_BURN", "LIGHTEN", "SCREEN", "LINEAR_DODGE", "COLOR_DODGE", "OVERLAY", "SOFT_LIGHT", "HARD_LIGHT", "DIFFERENCE", "EXCLUSION", "HUE", "SATURATION", "COLOR", "LUMINOSITY"]);
  e.PaintBoundVariables = _$$z.strictObject({
    color: _$$z.strictObject({
      type: _$$z.literal("VARIABLE_ALIAS"),
      id: _$$z.string()
    }).optional()
  });
  e.PartialSolidPaint = _$$z.strictObject({
    type: _$$z.literal("SOLID"),
    color: e.Color,
    opacity: e.FiniteNumber,
    visible: _$$z.boolean(),
    blendMode: e.BlendMode,
    boundVariables: e.PaintBoundVariables
  }).partial().optional();
  e.FontName = _$$z.strictObject({
    family: _$$z.string(),
    style: _$$z.string()
  });
  e.ShowVisualBellOptions = _$$z.strictObject({
    timeout: _$$z.number().min(0).max(1 / 0),
    error: _$$z.boolean(),
    onDequeue: e.PluginFunction,
    button: _$$z.strictObject({
      text: _$$z.string(),
      action: e.PluginFunction
    })
  }).partial();
  e.Size = _$$z.strictObject({
    width: e.FiniteNumber,
    height: e.FiniteNumber
  });
  let t = _$$z.union([_$$z.array(e.FiniteNumber).length(3).transform(e => ({
    0: e[0],
    1: e[1],
    2: e[2]
  })), _$$z.strictObject({
    0: e.FiniteNumber,
    1: e.FiniteNumber,
    2: e.FiniteNumber
  }).strict()]);
  e.Matrix = _$$z.union([_$$z.array(t).length(2).transform(e => ({
    0: e[0],
    1: e[1]
  })), _$$z.strictObject({
    0: t,
    1: t
  }).strict()]);
  let i = _$$z.strictObject({
    exposure: e.FloatNegativeOneToOne,
    contrast: e.FloatNegativeOneToOne,
    saturation: e.FloatNegativeOneToOne,
    temperature: e.FloatNegativeOneToOne,
    tint: e.FloatNegativeOneToOne,
    highlights: e.FloatNegativeOneToOne,
    shadows: e.FloatNegativeOneToOne
  }).partial();
  let n = _$$z.strictObject({
    position: e.ZeroToOne,
    color: e.ColorA,
    boundVariables: e.PaintBoundVariables.optional()
  });
  let h = _$$z.strictObject({
    type: _$$z.literal("SOLID"),
    color: e.Color,
    visible: _$$z.boolean().optional(),
    opacity: e.ZeroToOne.optional(),
    blendMode: e.BlendMode.optional(),
    boundVariables: e.PaintBoundVariables.optional()
  }).strict();
  let g = _$$z.strictObject({
    type: _$$z.literal("PATTERN"),
    tileType: _$$z.$$enum(["RECTANGULAR", "HORIZONTAL_HEXAGONAL", "VERTICAL_HEXAGONAL"]),
    scalingFactor: e.PositiveFloat.optional(),
    spacing: e.Vector.optional(),
    horizontalAlignment: _$$z.$$enum(["START", "CENTER", "END"]).optional(),
    verticalAlignment: _$$z.$$enum(["START", "CENTER", "END"]).optional(),
    sourceNodeId: _$$z.string(),
    visible: _$$z.boolean().optional(),
    opacity: e.ZeroToOne.optional(),
    blendMode: e.BlendMode.optional()
  }).strict();
  e.Paint = _$$z.discriminatedUnion("type", [h, _$$z.strictObject({
    type: _$$z.$$enum(["GRADIENT_LINEAR", "GRADIENT_RADIAL", "GRADIENT_ANGULAR", "GRADIENT_DIAMOND"]),
    gradientTransform: e.Matrix,
    gradientStops: _$$z.array(n),
    visible: _$$z.boolean().optional(),
    opacity: e.ZeroToOne.optional(),
    blendMode: e.BlendMode.optional()
  }).strict(), _$$z.strictObject({
    type: _$$z.literal("IMAGE"),
    scaleMode: _$$z.$$enum(["FILL", "FIT", "CROP", "TILE"]),
    imageHash: _$$z.string(),
    scalingFactor: e.PositiveFloat.optional(),
    rotation: e.PositiveInteger.optional(),
    imageTransform: e.Matrix.optional(),
    filters: i.optional(),
    visible: _$$z.boolean().optional(),
    opacity: e.ZeroToOne.optional(),
    blendMode: e.BlendMode.optional()
  }).strict(), _$$z.strictObject({
    type: _$$z.literal("VIDEO"),
    scaleMode: _$$z.$$enum(["FILL", "FIT", "CROP", "TILE"]),
    videoHash: _$$z.string(),
    scalingFactor: e.PositiveFloat.optional(),
    rotation: e.PositiveInteger.optional(),
    videoTransform: e.Matrix.optional(),
    filters: i.optional(),
    visible: _$$z.boolean().optional(),
    opacity: e.ZeroToOne.optional(),
    blendMode: e.BlendMode.optional()
  }).strict()]);
  e.Paints = _$$z.array(e.Paint);
  e.PaintsWithPattern = _$$z.array(_$$z.union([e.Paint, g]));
  e.ShadowEffectBoundVariables = _$$z.strictObject({
    color: e.VariableAlias.optional(),
    radius: e.VariableAlias.optional(),
    spread: e.VariableAlias.optional(),
    offsetX: e.VariableAlias.optional(),
    offsetY: e.VariableAlias.optional()
  });
  e.BlurEffectBoundVariables = _$$z.strictObject({
    radius: e.VariableAlias.optional()
  });
  e.NoiseEffectBoundVariables = _$$z.strictObject({});
  e.TextureEffectBoundVariables = _$$z.strictObject({});
  let f = {
    offset: e.Vector,
    color: e.ColorA,
    blendMode: e.BlendMode,
    radius: e.Float.min(0),
    spread: e.Float.optional(),
    visible: _$$z.boolean(),
    boundVariables: e.ShadowEffectBoundVariables.optional()
  };
  let _ = _$$z.strictObject({
    ...f,
    type: _$$z.literal("INNER_SHADOW")
  });
  let A = _$$z.strictObject({
    ...f,
    type: _$$z.literal("DROP_SHADOW"),
    showShadowBehindNode: _$$z.boolean().optional()
  });
  let y = {
    type: _$$z.$$enum(["LAYER_BLUR", "BACKGROUND_BLUR"]),
    blurType: _$$z.$$enum(["NORMAL", "PROGRESSIVE"]).optional(),
    radius: e.Float.min(0),
    visible: _$$z.boolean(),
    boundVariables: e.BlurEffectBoundVariables.optional()
  };
  let b = _$$z.strictObject(y).strict();
  let v = _$$z.strictObject({
    ...y,
    blurType: _$$z.literal("NORMAL").optional()
  });
  let I = _$$z.strictObject({
    ...y,
    blurType: _$$z.literal("PROGRESSIVE"),
    startOffset: e.Vector,
    endOffset: e.Vector,
    startRadius: e.PositiveFloat
  });
  let E = _$$z.union([v, I]);
  let x = {
    type: _$$z.literal("NOISE"),
    density: e.ZeroToOne,
    noiseSize: e.PositiveFloat,
    color: e.ColorA,
    visible: _$$z.boolean(),
    boundVariables: e.NoiseEffectBoundVariables.optional()
  };
  let S = _$$z.strictObject({
    ...x,
    noiseType: _$$z.literal("MONOTONE")
  });
  let w = _$$z.strictObject({
    ...x,
    noiseType: _$$z.literal("DUOTONE"),
    secondaryColor: e.ColorA
  });
  let C = _$$z.strictObject({
    ...x,
    noiseType: _$$z.literal("MULTITONE"),
    opacity: e.ZeroToOne
  });
  let T = _$$z.union([w, C, S]);
  let k = _$$z.strictObject({
    type: _$$z.literal("TEXTURE"),
    noiseSize: e.PositiveFloat,
    radius: e.PositiveFloat,
    clipToShape: _$$z.boolean(),
    visible: _$$z.boolean(),
    boundVariables: e.TextureEffectBoundVariables.optional()
  });
  let R = _$$z.strictObject({
    type: _$$z.literal("GLASS"),
    visible: _$$z.boolean(),
    refraction: e.ZeroToOne,
    depth: e.PositiveFloat,
    lightIntensity: e.ZeroToOne,
    lightAngle: e.Float,
    dispersion: e.ZeroToOne,
    radius: e.PositiveFloat,
    boundVariables: _$$z.strictObject({}).optional()
  });
  e.Effect = _$$z.union([_, A, b]);
  e.Effects = _$$z.array(e.Effect);
  e.EffectIncludingDrawMode = _$$z.union([_, A, E, T, k, R]).refine(e => !("GLASS" === e.type && !getFeatureFlags().mix_gl));
  e.EffectsIncludingDrawMode = _$$z.array(e.EffectIncludingDrawMode).refine(e => !getFeatureFlags().mix_gl || e.filter(e => "GLASS" === e.type).length <= 1, eM);
  let N = _$$z.strictObject({
    pattern: _$$z.$$enum(["COLUMNS", "ROWS"]),
    alignment: _$$z.$$enum(["MIN", "MAX"]),
    gutterSize: e.Float,
    count: _$$z.union([e.PositiveInteger, _$$z.literal(1 / 0)]),
    sectionSize: e.PositiveFloat,
    offset: e.PositiveFloat,
    visible: _$$z.boolean().optional(),
    color: e.ColorA.optional(),
    boundVariables: _$$z.strictObject({
      gutterSize: e.VariableAlias,
      count: e.VariableAlias,
      sectionSize: e.VariableAlias,
      offset: e.VariableAlias
    }).partial().optional()
  }).strict();
  let P = _$$z.strictObject({
    pattern: _$$z.$$enum(["COLUMNS", "ROWS"]),
    alignment: _$$z.literal("STRETCH"),
    gutterSize: e.Float,
    count: _$$z.number().finite().min(0),
    offset: e.PositiveFloat,
    visible: _$$z.boolean().optional(),
    color: e.ColorA.optional(),
    boundVariables: _$$z.strictObject({
      gutterSize: e.VariableAlias,
      count: e.VariableAlias,
      offset: e.VariableAlias
    }).partial().optional()
  }).strict();
  let O = _$$z.strictObject({
    pattern: _$$z.$$enum(["COLUMNS", "ROWS"]),
    alignment: _$$z.literal("CENTER"),
    gutterSize: e.Float,
    count: _$$z.union([e.PositiveInteger, _$$z.literal(1 / 0)]),
    sectionSize: e.PositiveFloat,
    visible: _$$z.boolean().optional(),
    color: e.ColorA.optional(),
    boundVariables: _$$z.strictObject({
      gutterSize: e.VariableAlias,
      count: e.VariableAlias,
      sectionSize: e.VariableAlias
    }).partial().optional()
  }).strict();
  let D = _$$z.strictObject({
    pattern: _$$z.literal("GRID"),
    sectionSize: e.PositiveFloat,
    visible: _$$z.boolean().optional(),
    color: e.ColorA.optional(),
    boundVariables: _$$z.strictObject({
      sectionSize: e.VariableAlias
    }).partial().optional()
  }).strict();
  e.LayoutGrid = _$$z.union([N, P, O, D]);
  e.LayoutGrids = _$$z.array(e.LayoutGrid);
  e.ParameterValues = _$$z.array(_$$z.union([_$$z.strictObject({
    name: _$$z.string(),
    data: _$$z.any().optional(),
    icon: _$$z.union([_$$z.string(), e.UInt8Array]).optional(),
    iconUrl: _$$z.string().optional()
  }), _$$z.string()]));
  e.TextReviewResultSchema = _$$z.array(_$$z.strictObject({
    start: e.FiniteNumber.$$int(),
    end: e.FiniteNumber.$$int(),
    suggestions: _$$z.array(_$$z.string()),
    color: _$$z.$$enum(["RED", "BLUE", "GREEN"]).optional()
  }));
  e.CodegenResultSchema = _$$z.array(_$$z.strictObject({
    title: _$$z.string(),
    code: _$$z.string(),
    language: _$$z.$$enum(["TYPESCRIPT", "CPP", "RUBY", "CSS", "JAVASCRIPT", "HTML", "JSON", "GRAPHQL", "PYTHON", "GO", "SQL", "SWIFT", "KOTLIN", "RUST", "BASH", "PLAINTEXT", "DART"])
  }));
  let L = _$$z.strictObject({
    type: _$$z.literal("AUTH_REQUIRED")
  });
  e.PlainTextContent = _$$z.strictObject({
    type: _$$z.literal("PLAIN_TEXT"),
    text: _$$z.string()
  });
  e.LinkPreviewResultSchema = _$$z.union([L, e.PlainTextContent, _$$z.$$null()]);
  let F = _$$z.strictObject({
    type: _$$z.literal("AUTH_SUCCESS")
  });
  e.AuthResultSchema = _$$z.union([F, _$$z.$$null()]);
  e.NodeStatus = _$$z.strictObject({
    type: _$$z.union([_$$z.literal("READY_FOR_DEV"), _$$z.literal("COMPLETED")]),
    description: _$$z.string().optional()
  });
  let M = _$$z.$$enum(N2);
  let j = _$$z.array(_$$z.strictObject({
    label: _$$z.string().optional(),
    labelMarkdown: _$$z.string().optional(),
    properties: _$$z.array(_$$z.strictObject({
      type: M,
      value: _$$z.any()
    })).optional(),
    categoryId: _$$z.string().optional()
  }).refine(e => !(e.label && e.labelMarkdown), "Only one of label or labelMarkdown should be given."));
  e.AnnotationsMarkdownMultipleAnnotationsPerNode = j;
  e.AnnotationMeasurementStartEnd = _$$z.strictObject({
    node: _$$z.any(),
    side: _$$z.$$enum(SI)
  });
  let U = _$$z.discriminatedUnion("type", [_$$z.strictObject({
    type: _$$z.literal("INNER"),
    relative: _$$z.number().max(1).min(-1)
  }), _$$z.strictObject({
    type: _$$z.literal("OUTER"),
    fixed: _$$z.number().finite().positive("Can't be 0").or(_$$z.number().finite().negative())
  })]);
  e.AnnotationMeasurementAddOptions = _$$z.strictObject({
    offset: U.optional(),
    freeText: _$$z.string().optional()
  }).strict();
  e.AnnotationMeasurementEditValue = _$$z.strictObject({
    offset: U.optional(),
    freeText: _$$z.string().optional()
  });
  e.StrokeAlign = _$$z.$$enum(["CENTER", "INSIDE", "OUTSIDE"]);
  e.NumberUnit = _$$z.$$enum(["PIXELS", "PERCENT"]);
  e.LetterSpacing = _$$z.strictObject({
    value: _$$z.number().finite(),
    unit: e.NumberUnit
  }).strict();
  e.LineHeight = _$$z.discriminatedUnion("unit", [_$$z.strictObject({
    value: _$$z.number().finite(),
    unit: e.NumberUnit
  }).strict(), _$$z.strictObject({
    unit: _$$z.literal("AUTO")
  }).strict()]);
  e.LeadingTrim = _$$z.$$enum(["CAP_HEIGHT", "NONE"]);
  e.TextAlignHorizontal = _$$z.$$enum(["LEFT", "CENTER", "RIGHT", "JUSTIFIED"]);
  e.TextAlignVertical = _$$z.$$enum(["TOP", "CENTER", "BOTTOM"]);
  e.TextCase = _$$z.$$enum(["ORIGINAL", "UPPER", "LOWER", "TITLE", "SMALL_CAPS", "SMALL_CAPS_FORCED"]);
  e.TextDecoration = _$$z.$$enum(["NONE", "UNDERLINE", "STRIKETHROUGH"]);
  e.TextDecorationStyle = _$$z.$$enum(["SOLID", "DOTTED", "WAVY"]);
  e.TextDecorationOffset = _$$z.discriminatedUnion("unit", [_$$z.strictObject({
    value: _$$z.number().finite(),
    unit: e.NumberUnit
  }).strict(), _$$z.strictObject({
    unit: _$$z.literal("AUTO")
  }).strict()]);
  e.TextDecorationThickness = _$$z.discriminatedUnion("unit", [_$$z.strictObject({
    value: _$$z.number().finite(),
    unit: e.NumberUnit
  }).strict(), _$$z.strictObject({
    unit: _$$z.literal("AUTO")
  }).strict()]);
  e.TextDecorationColor = _$$z.union([_$$z.strictObject({
    value: h
  }).strict(), _$$z.strictObject({
    value: _$$z.literal("AUTO")
  }).strict()]);
  e.TextAutoResize = _$$z.$$enum(["NONE", "WIDTH_AND_HEIGHT", "HEIGHT", "TRUNCATE"]);
  e.TextListType = _$$z.$$enum(["NONE", "ORDERED", "UNORDERED"]);
  e.TextListOptions = _$$z.strictObject({
    type: e.TextListType
  });
  e.TextIndentation = _$$z.number().finite().$$int().min(0).max(5);
  e.TextHyperlinkType = _$$z.$$enum(["URL", "NODE"]);
  e.TextHyperlinkOptions = _$$z.union([_$$z.strictObject({
    type: e.TextHyperlinkType,
    value: _$$z.string()
  }), _$$z.$$null()]);
  e.FindCriteriaWithPluginDataSchema = _$$z.strictObject({
    types: _$$z.array(_$$z.$$enum(_$$$)).optional(),
    sharedPluginData: _$$z.strictObject({
      namespace: _$$z.string(),
      keys: _$$z.array(_$$z.string()).optional()
    }).optional(),
    pluginData: _$$z.strictObject({
      keys: _$$z.array(_$$z.string()).optional()
    }).optional()
  });
  e.getPluginDataNormalLimit = _$$n(() => 102400);
  e.PluginDataEntryNormalLimitSchema = _$$z.array(_$$z.string()).refine(t => t.reduce((e, t) => e + hp.byteLength(t), 0) <= e.getPluginDataNormalLimit());
  e.getPluginDataEscapeHatchLimit = _$$n(() => 0x4000000);
  e.PluginDataEntryEscapeHatchLimitSchema = _$$z.array(_$$z.string()).refine(t => t.reduce((e, t) => e + hp.byteLength(t), 0) <= e.getPluginDataEscapeHatchLimit());
  e.TextTruncation = _$$z.$$enum(["DISABLED", "ENDING"]);
  e.exportColorProfile = _$$z.$$enum(["DOCUMENT", "SRGB", "DISPLAY_P3_V4"]).optional();
  let B = _$$z.strictObject({
    format: _$$z.$$enum(["PNG", "JPG"]),
    contentsOnly: _$$z.boolean().optional(),
    suffix: _$$z.string().optional(),
    useAbsoluteBounds: _$$z.boolean().optional(),
    constraint: _$$z.union([_$$z.strictObject({
      type: _$$z.$$enum(["SCALE"]),
      value: e.FiniteNumber
    }), _$$z.strictObject({
      type: _$$z.$$enum(["WIDTH", "HEIGHT"]),
      value: e.FiniteNumber
    })]).optional(),
    colorProfile: e.exportColorProfile
  });
  let V = _$$z.strictObject({
    format: _$$z.literal("PDF"),
    contentsOnly: _$$z.boolean().optional(),
    suffix: _$$z.string().optional(),
    useAbsoluteBounds: _$$z.boolean().optional(),
    colorProfile: e.exportColorProfile
  });
  let G = _$$z.strictObject({
    format: _$$z.$$enum(["SVG", "SVG_STRING"]),
    contentsOnly: _$$z.boolean().optional(),
    suffix: _$$z.string().optional(),
    svgOutlineText: _$$z.boolean().optional(),
    svgIdAttribute: _$$z.boolean().optional(),
    svgSimplifyStroke: _$$z.boolean().optional(),
    useAbsoluteBounds: _$$z.boolean().optional(),
    colorProfile: e.exportColorProfile
  });
  let z = [B, V, G];
  e.getExportAsyncSetting = function(e = !1) {
    return _$$z.discriminatedUnion("format", [...z, _$$z.strictObject({
      format: e ? _$$z.$$enum(["JSON_REST_V1", "FIRST_DRAFT_JSON"]) : _$$z.$$enum(["JSON_REST_V1"])
    })]);
  };
  e.ConstraintType = _$$z.$$enum(["MIN", "CENTER", "MAX", "STRETCH", "SCALE"]);
  e.Constraints = _$$z.strictObject({
    horizontal: e.ConstraintType,
    vertical: e.ConstraintType
  });
  e.OverflowDirection = _$$z.$$enum(["NONE", "HORIZONTAL", "VERTICAL", "BOTH"]);
  e.LayoutAlign = _$$z.$$enum(["MIN", "CENTER", "MAX", "STRETCH", "INHERIT"]);
  e.LayoutMode = _$$z.$$enum(["NONE", "HORIZONTAL", "VERTICAL", "GRID"]);
  e.StackWrap = _$$z.$$enum(["NO_WRAP", "WRAP"]);
  e.StackCounterAlignContent = _$$z.$$enum(["AUTO", "SPACE_BETWEEN"]);
  e.StackJustify = _$$z.$$enum(["MIN", "MAX", "CENTER", "SPACE_BETWEEN"]);
  e.StackJustifyLegacy = _$$z.$$enum(["MIN", "MAX", "CENTER", "SPACE_BETWEEN", "SPACE_BETWEEN_LEGACY"]);
  e.StackAlign = _$$z.$$enum(["MIN", "MAX", "CENTER", "BASELINE"]);
  e.SizingMode = _$$z.$$enum(["FIXED", "AUTO"]);
  e.SizingModeLegacy = _$$z.$$enum(["FIXED", "AUTO", "LEGACY_AUTO"]);
  e.LayoutSizing = _$$z.$$enum(["FIXED", "HUG", "FILL"]);
  e.LayoutPositioning = _$$z.$$enum(["AUTO", "ABSOLUTE"]);
  e.GridTrackSizingType = _$$z.$$enum(["FLEX", "FIXED", "HUG"]);
  e.GridChildAlign = _$$z.$$enum(["MIN", "CENTER", "MAX", "AUTO"]);
  e.GridTrackSize = _$$z.strictObject({
    type: e.GridTrackSizingType,
    value: e.PositiveFloat.optional()
  });
  e.HandleMirroring = _$$z.$$enum(["NONE", "ANGLE", "ANGLE_AND_LENGTH"]);
  e.StrokeJoin = _$$z.$$enum(["MITER", "BEVEL", "ROUND"]);
  e.StrokeCap = _$$z.$$enum(["NONE", "ROUND", "SQUARE", "ARROW_LINES", "ARROW_EQUILATERAL", "DIAMOND_FILLED", "TRIANGLE_FILLED", "CIRCLE_FILLED"]);
  let H = _$$z.object({
    id: _$$z.string()
  });
  let W = _$$z.array(H);
  e.CanvasGrid = _$$z.array(W);
  let K = _$$z.$$enum(["NONZERO", "EVENODD"]);
  let Y = _$$z.strictObject({
    windingRule: _$$z.union([K, _$$z.literal("NONE")]),
    data: _$$z.string()
  });
  e.VectorPaths = _$$z.array(Y);
  let q = _$$z.strictObject({
    x: e.FiniteNumber,
    y: e.FiniteNumber,
    strokeCap: e.StrokeCap.optional(),
    strokeJoin: e.StrokeJoin.optional(),
    cornerRadius: e.PositiveFloat.optional(),
    handleMirroring: e.HandleMirroring.optional()
  });
  let $ = _$$z.strictObject({
    start: e.PositiveInteger,
    end: e.PositiveInteger,
    tangentStart: e.Vector.optional(),
    tangentEnd: e.Vector.optional()
  }).strict();
  let Z = _$$z.strictObject({
    windingRule: K,
    loops: _$$z.array(_$$z.array(e.PositiveInteger)),
    fills: e.Paints.optional(),
    fillStyleId: _$$z.string().optional()
  });
  e.VectorNetwork = _$$z.strictObject({
    vertices: _$$z.array(q),
    segments: _$$z.array($),
    regions: _$$z.array(Z).optional()
  }).strict();
  e.MaxLines = _$$z.number().$$int().min(1).finite().nullable();
  e.FetchInitOptions = _$$z.strictObject({
    method: _$$z.string().optional(),
    headersObject: _$$z.record(_$$z.string()).optional(),
    headers: _$$z.record(_$$z.string()).optional(),
    body: _$$z.union([_$$z.$$instanceof(Uint8Array), _$$z.string()]).optional(),
    credentials: _$$z.string().optional(),
    cache: _$$z.string().optional(),
    redirect: _$$z.string().optional(),
    referrer: _$$z.string().optional(),
    integrity: _$$z.string().optional()
  }).optional();
  e.Guide = _$$z.strictObject({
    axis: _$$z.$$enum(["X", "Y"]),
    offset: _$$z.number().finite()
  }).strict();
  e.Guides = _$$z.array(e.Guide);
  e.FlowStartingPoints = _$$z.array(_$$z.strictObject({
    nodeId: _$$z.string(),
    name: _$$z.string()
  }));
  e.PlaybackSettings = _$$z.strictObject({
    autoplay: _$$z.boolean(),
    loop: _$$z.boolean(),
    muted: _$$z.boolean()
  });
  let X = _$$z.strictObject({
    id: _$$z.string()
  });
  e.SelectedText = _$$z.union([_$$z.strictObject({
    node: X,
    start: e.PositiveInteger,
    end: e.PositiveInteger
  }).strict(), _$$z.$$null()]);
  e.BooleanOperation = _$$z.$$enum(["UNION", "INTERSECT", "SUBTRACT", "EXCLUDE"]);
  e.ArcData = _$$z.strictObject({
    startingAngle: _$$z.number().finite(),
    endingAngle: _$$z.number().finite(),
    innerRadius: e.ZeroToOne
  });
  e.ExportSetting = _$$z.discriminatedUnion("format", [B, V, G]);
  e.ExportSettings = _$$z.array(e.ExportSetting);
  let Q = _$$z.strictObject({
    type: _$$z.literal(e.VariableDataType.$$enum.COLOR),
    value: e.ColorA
  });
  e.VariableDataSchema = _$$z.discriminatedUnion("type", [_$$z.strictObject({
    type: _$$z.literal(e.VariableDataType.$$enum.STRING),
    value: _$$z.string()
  }), _$$z.strictObject({
    type: _$$z.literal(e.VariableDataType.$$enum.BOOLEAN),
    value: _$$z.boolean()
  }), _$$z.strictObject({
    type: _$$z.literal(e.VariableDataType.$$enum.FLOAT),
    value: _$$z.number().finite()
  }), Q, _$$z.strictObject({
    type: _$$z.literal(Z_n.ALIAS),
    value: _$$z.string(),
    resolvedType: _$$z.nativeEnum(rXF)
  })]);
  e.RelaunchData = _$$z.record(_$$z.string());
  e.StyledTextSegmentFields = _$$z.array(_$$z.$$enum(["fontSize", "fontName", "fontWeight", "textDecoration", "textDecorationStyle", "textDecorationSkipInk", "textDecorationOffset", "textDecorationThickness", "textDecorationColor", "textCase", "lineHeight", "letterSpacing", "fills", "textStyleId", "fillStyleId", "listOptions", "indentation", "hyperlink", "openTypeFeatures", "boundVariables", "textStyleOverrides", "paragraphSpacing", "listSpacing", "paragraphIndent"]));
  e.ShapeWithTextType = _$$z.$$enum(["SQUARE", "ELLIPSE", "ROUNDED_RECTANGLE", "DIAMOND", "TRIANGLE_UP", "TRIANGLE_DOWN", "PARALLELOGRAM_RIGHT", "PARALLELOGRAM_LEFT", "ENG_DATABASE", "ENG_QUEUE", "ENG_FILE", "ENG_FOLDER", "TRAPEZOID", "PREDEFINED_PROCESS", "SHIELD", "DOCUMENT_SINGLE", "DOCUMENT_MULTIPLE", "MANUAL_INPUT", "HEXAGON", "CHEVRON", "PENTAGON", "OCTAGON", "STAR", "PLUS", "ARROW_LEFT", "ARROW_RIGHT", "SUMMING_JUNCTION", "OR", "SPEECH_BUBBLE", "INTERNAL_STORAGE"]);
  e.CodeBlockLanguage = _$$z.$$enum(["TYPESCRIPT", "CPP", "RUBY", "CSS", "JAVASCRIPT", "HTML", "JSON", "GRAPHQL", "PYTHON", "GO", "SQL", "SWIFT", "KOTLIN", "RUST", "BASH", "PLAINTEXT", "DART"]);
  let J = ["BOOLEAN", "TEXT", "INSTANCE_SWAP", "IMAGE"];
  let ee = [...J, "NUMBER"];
  let et = [...J, "VARIANT"];
  let ei = [...ee, "VARIANT"];
  e.ComponentPropertyType = _$$z.$$enum(et);
  e.ComponentPropertyTypeWithNumber = _$$z.$$enum(ei);
  e.ComponentPropertyValue = _$$z.union([_$$z.boolean(), _$$z.string()]);
  e.ComponentPropertyValueWithNumber = _$$z.union([_$$z.boolean(), _$$z.string(), _$$z.number().finite()]);
  e.ComponentPropertyValueWithVariable = _$$z.union([_$$z.boolean(), _$$z.string(), e.VariableAlias]);
  e.ComponentPropertyValueWithNumberAndVariable = _$$z.union([_$$z.boolean(), _$$z.string(), _$$z.number().finite(), e.VariableAlias]);
  e.InstanceSwapPreferredValueType = _$$z.$$enum(["COMPONENT", "COMPONENT_SET"]);
  e.InstanceSwapPreferredValue = _$$z.strictObject({
    type: e.InstanceSwapPreferredValueType,
    key: _$$z.string()
  });
  e.ComponentPropertyPreferredValues = _$$z.array(e.InstanceSwapPreferredValue);
  e.ComponentPropertyOptions = _$$z.strictObject({
    preferredValues: e.ComponentPropertyPreferredValues.optional()
  }).optional();
  e.ComponentPropertyDefinitionSchema = _$$z.strictObject({
    name: _$$z.string().optional(),
    defaultValue: e.ComponentPropertyValue.optional(),
    preferredValues: e.ComponentPropertyPreferredValues.optional()
  });
  e.ComponentPropertyDefinitionSchemaWithNumber = _$$z.strictObject({
    name: _$$z.string().optional(),
    defaultValue: e.ComponentPropertyValueWithNumber.optional(),
    preferredValues: e.ComponentPropertyPreferredValues.optional()
  });
  e.ComponentPropertyDefinitionSchemaWithVariable = _$$z.strictObject({
    name: _$$z.string().optional(),
    defaultValue: e.ComponentPropertyValueWithVariable.optional(),
    preferredValues: e.ComponentPropertyPreferredValues.optional()
  });
  e.ComponentPropertyDefinitionSchemaWithNumberAndVariable = _$$z.strictObject({
    name: _$$z.string().optional(),
    defaultValue: e.ComponentPropertyValueWithNumberAndVariable.optional(),
    preferredValues: e.ComponentPropertyPreferredValues.optional()
  });
  e.ComponentPropertyReferences = _$$z.strictObject({
    visible: _$$z.string().optional(),
    characters: _$$z.string().optional(),
    mainComponent: _$$z.string().optional()
  }).strict();
  e.ConnectorMagnet = _$$z.$$enum(["NONE", "AUTO", "TOP", "LEFT", "BOTTOM", "RIGHT", "CENTER"]);
  e.ConnectorEndpoint = _$$z.union([_$$z.strictObject({
    endpointNodeId: _$$z.string(),
    position: e.Vector
  }), _$$z.strictObject({
    position: e.Vector
  }), _$$z.strictObject({
    endpointNodeId: _$$z.string(),
    magnet: e.ConnectorMagnet
  })]);
  e.ConnectorLineType = _$$z.$$enum(["ELBOWED", "STRAIGHT", "CURVED"]);
  e.ConnectorStrokeCap = _$$z.$$enum(["NONE", "ARROW_EQUILATERAL", "ARROW_LINES", "TRIANGLE_FILLED", "DIAMOND_FILLED", "CIRCLE_FILLED"]);
})($$n0 || ($$n0 = {}));
export const N = $$n0; 
