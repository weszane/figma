import { z } from 'zod'

/**
 * Schema for individual star ratings and statistics.
 * Original variable name: r
 */
export const CommunityRatingStatsSchema = z.object({
  one_stars: z.number().min(1).max(5),
  two_stars: z.number().min(1).max(5),
  three_stars: z.number().min(1).max(5),
  four_stars: z.number().min(1).max(5),
  five_stars: z.number().min(1).max(5),
  total_ratings: z.number().min(0),
  avg_rating: z.number().min(1).nullable(),
})

/**
 * Schema for community rating stats container.
 * Original variable name: $$a0
 */
export const CommunityRatingStatsContainerSchema = z.object({
  community_rating_stats: CommunityRatingStatsSchema.optional(),
})

/**
 * Exported schema for use in other modules.
 * Original export name: q
 */
export const q = CommunityRatingStatsContainerSchema
