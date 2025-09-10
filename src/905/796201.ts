import { z } from "src/905/239603";
let r = z.object({
  one_stars: z.number().min(1).max(5),
  two_stars: z.number().min(1).max(5),
  three_stars: z.number().min(1).max(5),
  four_stars: z.number().min(1).max(5),
  five_stars: z.number().min(1).max(5),
  total_ratings: z.number().min(0),
  avg_rating: z.number().min(1).nullable()
});
let $$a0 = z.object({
  community_rating_stats: r.optional()
});
z.object({
  id: z.string(),
  pluginId: z.string().nullish(),
  hubFileId: z.string().nullish(),
  profileId: z.string(),
  ratingValue: z.number().min(1).max(5),
  message: z.string().nullable(),
  resourceVersionId: z.string(),
  messageMeta: z.array(z.record(z.any())).nullish(),
  createdAt: z.date(),
  editedAt: z.date().nullable()
});
export const q = $$a0;
