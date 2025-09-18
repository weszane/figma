import { z } from 'zod'
import { ExtendedCommentSchema } from '../figma_app/45218'
import { ResourceWithOptionalContentSchema } from '../figma_app/306946'
/**
 * Constants for scoring and limits (original: $$s3, $$o0, $$l4)
 */
export const SCORE_OFFSET = -200
export const SCORE_STEP = 10
export const MAX_SCORE = 125

/**
 * Resource type mapping (original: $$d2)
 */
export enum ResourceTypeMap {
  file = 'hub_files',
  plugin = 'plugins',
  widget = 'widgets',
}

/**
 * Hub resource type mapping (original: $$c5)
 */
export enum HubResourceTypeMap {
  hub_file = 'file',
  plugin = 'plugin',
  widget = 'widget',
}

/**
 * Resource base type mapping (original: $$u6)
 */
export const ResourceBaseTypeMap = {
  file: 'hub_file',
  plugin: 'base_plugin',
  widget: 'base_plugin',
} as const

/**
 * Zod schema for a scored resource result (original: p)
 * @see ResourceWithOptionalContentSchema
 */
export const ScoredResourceSchema = z.object({
  model: ResourceWithOptionalContentSchema,
  score: z.number(),
})

/**
 * Zod schema for search results (original: $$_7)
 */
export const SearchResultsSchema = z.object({
  results: z.array(ScoredResourceSchema),
  total_hits: z.number().optional(),
})

/**
 * Zod schema for comments response (anonymous, original unnamed)
 */
export const CommentsResponseSchema = z.object({
  comments: z.array(ExtendedCommentSchema).nullable(),
  total_count: z.number().optional(),
})

/**
 * View section mapping (original: $$h1)
 */
export enum ViewSectionMap {
  DescriptionView = 'descriptionViewSection',
  CommentsView = 'commentsViewSection',
}

// Exported variables with refactored names
export const qG = HubResourceTypeMap
export const sh = ResourceBaseTypeMap
export const to = SearchResultsSchema
export const $2 = SCORE_STEP
export const $O = ViewSectionMap
export const S = ResourceTypeMap
export const bK = SCORE_OFFSET
export const co = MAX_SCORE
