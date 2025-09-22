import { z } from 'zod'
import { NodeSchema } from '../905/985467'

// ================== Types & Schemas ==================

// MessageRoleSchema (a)
const MessageRoleSchema = z.union([
  z.object({
    role: z.union([z.literal('assistant'), z.literal('system')]),
    content: z.string(),
  }),
  z.object({
    role: z.literal('user'),
    content: z.union([
      z.string(),
      z.array(
        z.union([
          z.object({
            type: z.literal('text'),
            text: z.string(),
          }),
          z.object({
            type: z.literal('image'),
            image: z.string(),
          }),
        ])
      ),
    ]),
  }),
])

/**
 * FigmatePromptSchema ($$s9)
 * Represents a prompt for Figmate with optional kit and message details.
 */
export const FigmatePromptSchema = z.object({
  userPrompt: z.string(),
  kitKey: z.string().nullable().optional(),
  isLocal: z.boolean().nullable().optional(),
  isDirectGenerationCompatible: z.boolean().nullable().optional(),
  extraMessagesFigmateOnly: z.array(MessageRoleSchema).optional(),
  componentQueries: z.array(z.string()).optional(),
})

/**
 * ThemePresetSchema ($$o8)
 * Contains theme, presets, and design system kit info.
 */
export const ThemePresetSchema = z.object({
  presets: z.array(z.string()).optional(),
  theme: z.record(z.any()).optional(),
  jsx: z.string().optional(),
  dsKit: z.object({
    kitKey: z.string(),
    isLocal: z.boolean(),
    isDirectGenLibrary: z.boolean(),
  }).optional(),
  trace: NodeSchema.optional(),
})

// Theme schemas (l, d, c)
const ThemeV2Schema = z.object({
  version: z.literal(2),
  darkMode: z.boolean(),
  fontFamilies: z.object({
    title: z.array(z.string()),
    body: z.array(z.string()),
    label: z.array(z.string()),
  }),
  brandColor: z.string(),
  colors: z.object({
    text: z.string().array(),
    background: z.string().array(),
    border: z.string().array(),
  }),
  borderRadii: z.array(z.number()),
  spacing: z.array(z.number()),
})

const ThemeSimpleSchema = z.object({
  fontFamilies: z.array(z.string()),
  colors: z.array(z.string()),
  borderRadii: z.array(z.number()),
  spacing: z.array(z.number()),
})

const ThemeSchema = z.union([ThemeV2Schema, ThemeSimpleSchema])

/**
 * PromptSchema ($$u1)
 * Represents a single prompt.
 */
export const PromptSchema = z.object({
  prompt: z.string(),
})

/**
 * PromptHistorySchema ($$p2)
 * Stores user prompt history and theme info.
 */
export const PromptHistorySchema = z.object({
  userPrompt: z.string(),
  promptHistory: z.array(PromptSchema).optional(),
  storedInitialPrompt: z.string(),
  jsx: z.string(),
  jsxInsertReplace: z.string().optional(),
  currentTheme: ThemeSchema,
  kitKey: z.string(),
  isLocal: z.boolean(),
})

// Action schemas
const TextOrImageActionSchema = z.object({
  type: z.literal('text_or_image'),
  affectedId: z.string(),
  content: z.string(),
})

const RationaleCategoryEnum = z.enum(['font', 'layout', 'component', 'other'])

const ThemeActionSchema = z.object({
  type: z.literal('theme'),
  content: ThemeV2Schema.partial(),
})

const ICantDoThisActionSchema = z.object({
  type: z.literal('iCantDoThis'),
  rationaleCategory: RationaleCategoryEnum.optional(),
})

const RemoveActionSchema = z.object({
  type: z.literal('remove'),
  affectedId: z.string(),
})

const MoveActionSchema = z.object({
  type: z.literal('move'),
  affectedId: z.string(),
  insertBehavior: z.enum(['above', 'below']),
  destinationId: z.string(),
})

const ReplaceClassesActionSchema = z.object({
  type: z.literal('replaceClasses'),
  affectedId: z.string(),
  classes: z.string().array(),
})

const InsertActionSchema = z.object({
  type: z.literal('insert'),
  affectedId: z.string(),
  insertBehavior: z.enum(['above', 'below']),
  jsxToInsert: z.string(),
})

const ReplaceActionSchema = z.object({
  type: z.literal('replace'),
  affectedId: z.string(),
  jsxToInsert: z.string(),
})

const ActionSchema = z.discriminatedUnion('type', [
  TextOrImageActionSchema,
  RemoveActionSchema,
  MoveActionSchema,
  ReplaceClassesActionSchema,
  InsertActionSchema,
  ReplaceActionSchema,
  ThemeActionSchema,
  ICantDoThisActionSchema,
])

/**
 * ActionResponseSchema ($$b13)
 * Represents a response containing an action and optional error/trace.
 */
export const ActionResponseSchema = z.object({
  action: ActionSchema.optional(),
  cortex_error: z.object({
    type: z.string(),
    data: z.any(),
  }).optional(),
  trace: NodeSchema.optional(),
})


const BackgroundEnum = z.enum(['normal', 'transparent', 'segment'])

/**
 * ImageSchema ($$S12)
 * Contains a base64 image string.
 */
export const ImageSchema = z.object({
  imageB64: z.string(),
})

/**
 * ConflictSchema ($$v11)
 * Contains conflict score and reasoning.
 */
export const ConflictSchema = z.object({
  conflictScore: z.number(),
  reasoning: z.string(),
})

/**
 * ImageRequestSchema (A)
 * Contains image and jsx.
 */
const ImageRequestSchema = z.object({
  imageB64: z.string(),
  jsx: z.string(),
})

/**
 * ImageRequestsSchema ($$x6)
 * Contains an array of image requests.
 */
export const ImageRequestsSchema = z.object({
  requests: z.array(ImageRequestSchema),
})

/**
 * MobileDesignComponentSchema ($$N0)
 * Contains mobile design info and components.
 */
export const MobileDesignComponentSchema = z.object({
  isMobileDesign: z.boolean(),
  components: z.array(
    z.object({
      guid: z.string(),
      name: z.string(),
    })
  ),
})

/**
 * MobileDesignResponsesSchema ($$C7)
 * Contains responses for mobile design components.
 */
export const MobileDesignResponsesSchema = z.object({
  responses: z.array(MobileDesignComponentSchema.nullable()),
})

/**
 * StateGroupRequestSchema (w)
 * Contains image, jsx, and state group info.
 */
const StateGroupRequestSchema = z.object({
  imageB64: z.string(),
  jsx: z.string(),
  isStateGroup: z.boolean(),
})

/**
 * StateGroupRequestsSchema ($$O4)
 * Contains an array of state group requests.
 */
export const StateGroupRequestsSchema = z.object({
  requests: z.array(StateGroupRequestSchema),
})

/**
 * ComponentPropertySchema (R)
 * Maps node IDs to property names for a component.
 */
const ComponentPropertySchema = z.object({
  componentName: z.string(),
  componentDescription: z.string(),
  nodeIdsToPropertyNames: z.array(
    z.object({
      id: z.string(),
      propertyName: z.string(),
    })
  ),
})

/**
 * ComponentPropertiesResponsesSchema ($$L3)
 * Contains responses for component properties.
 */
export const ComponentPropertiesResponsesSchema = z.object({
  responses: z.array(ComponentPropertySchema.nullable()),
})

/**
 * PromptPanelSchema ($$P10)
 * Contains prompt panel info.
 */
export const PromptPanelSchema = z.object({
  id: z.string().optional(),
  initialUserPrompt: z.string().optional(),
  jsxJSON: z.string().optional(),
  prompt: z.string().optional(),
  desc: z.string().optional(),
  transparent: z.boolean().optional(),
  background: BackgroundEnum.optional(),
  height: z.number(),
  width: z.number(),
  description: z.string().optional(),
})

/**
 * DesignImageSchema ($$D5)
 * Contains design image and description.
 */
export const DesignImageSchema = z.object({
  image: z.string(),
  foregroundImage: z.string().optional(),
  description: z.string(),
  trace: NodeSchema.optional(),
})

// ================== Exports (refactored names) ==================
export const AR = MobileDesignComponentSchema
export const Db = PromptSchema
export const H = PromptHistorySchema
export const KU = ComponentPropertiesResponsesSchema
export const L6 = StateGroupRequestsSchema
export const Qp = DesignImageSchema
export const TM = ImageRequestsSchema
export const XM = MobileDesignResponsesSchema
export const bv = ThemePresetSchema
export const jR = FigmatePromptSchema
export const k8 = PromptPanelSchema
export const pp = ConflictSchema
export const r6 = ImageSchema
export const tl = ActionResponseSchema
