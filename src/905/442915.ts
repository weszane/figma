import { z } from 'zod'

import { APIParameterUtils, createMetaValidator } from '../figma_app/181241'

// Define enums for data types, usage types, property types, and node types
const DataType = z.enum(['color', 'float'])
const UsageType = z.enum(['LOCAL', 'LIBRARY', 'SUBSCRIBED'])
const PropertyType = z.enum(['FILL', 'STROKE', 'STACK_PADDING', 'STACK_SPACING', 'CORNER_RADIUS', 'FONT_SIZE', 'LINE_HEIGHT', 'LETTER_SPACING', 'MULTI', 'UNKNOWN'])
const NodeType = z.enum(['FRAME', 'TEXT', 'VECTOR', 'INSTANCE', 'SYMBOL', 'ICON-LIKE', 'OTHER'])

// Define schema for color object
const Color = z.object({
  r: z.number(),
  g: z.number(),
  b: z.number(),
  a: z.number(),
})

// Define schema for value object (either color or number, but not both)
const Value = z.object({
  color_value: Color.optional(),
  number_value: z.number().optional(),
}).refine((value) => {
  const hasColor = value.color_value !== undefined
  const hasNumber = value.number_value !== undefined
  return !(hasColor && hasNumber)
}, {
  message: 'At most one of \'color_value\' or \'number_value\' can be set.',
  path: ['color_value', 'number_value'],
})

// Define schema for variable object
const Variable = z.object({
  variable_id: z.string(),
  variable_set_id: z.string(),
  variable_resolved_data_type: DataType,
  value: Value,
  usage_type: UsageType,
  name: z.string(),
  variable_num_usages_in_file: z.number(),
  variable_num_usages_in_containing_subtree: z.number(),
  elapsed_seconds_since_last_insertions: z.array(z.number()),
})

// Define schema for component object
const Component = z.object({
  key: z.string(),
  type: z.string(),
  library_key: z.string().optional(),
  state_group_id: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
})

// Define schema for selection context object
const SelectionContext = z.object({
  is_top_level_node: z.boolean(),
  num_descendant_nodes: z.number(),
  is_component: z.boolean(),
  depth_from_top_level_frame: z.number(),
  seconds_since_last_edited: z.number().optional(),
  last_edited_by: z.string().optional(),
  edit_info_valid: z.boolean(),
  layer_name: z.string(),
  property: PropertyType,
  node_type: NodeType,
  selected_components: z.array(Component),
  file_total_variable_usages: z.number(),
  containing_subtree_total_variable_usages: z.number(),
})

// Define schema for recommend variables request object
const RecommendVariablesRequest = z.object({
  org_id: z.number().optional(),
  open_file_key: z.string(),
  entry_point: z.string(),
  query_id: z.string(),
  session_id: z.string(),
  candidates: z.array(Variable),
  current_value: Value,
  subscribed_library_keys: z.array(z.string()),
  current_value_data_type: DataType,
  used_product_components_on_page: z.array(Component),
  selection_context: SelectionContext,
})

// Define schema for recommend variables response object
const RecommendVariablesResponse = z.object({
  reranked_candidates: z.array(z.string()),
})

/**
 * Service class for handling variable recommendations.
 * Original class: $$_0
 */
class RecommendVariablesService {
  public readonly RecommendVariablesValidator: any

  /**
   * Constructor for RecommendVariablesService.
   * Initializes the validator for recommend variables.
   */
  constructor() {
    this.RecommendVariablesValidator = createMetaValidator('RecommendVariablesValidator', RecommendVariablesResponse, null, true)
  }

  /**
   * Recommends variables based on the provided request.
   * @param request - The request object conforming to RecommendVariablesRequest schema.
   * @returns A promise resolving to the validation result.
   */
  public recommendVariables = (request: any) => {
    const parsedRequest = RecommendVariablesRequest.parse(request)
    return this.RecommendVariablesValidator.validate(async ({ xr }: any) =>
      await xr.post('/api/recommend/variables', APIParameterUtils.toAPIParameters(parsedRequest)),
    )
  }
}

// Create and export an instance of the service
export const recommendVariablesService = new RecommendVariablesService()

// For backward compatibility, export as D (original export const D = $$_0)
export const D = recommendVariablesService
