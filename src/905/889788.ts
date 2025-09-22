import { z } from 'zod'

let r = z.object({
  source_id: z.string(),
}).catchall(z.union([z.string().nullable(), z.number().nullable()]))
export let iconClassifierEndpointSchema = z.object({
  endpointName: z.string(),
  data: z.array(r),
})
let s = z.object({
  source_id: z.string(),
  prediction: z.boolean(),
  score: z.number(),
})
export let iconClassifierEndpointsResults = z.object({
  results: z.array(s),
})
export const N4 = iconClassifierEndpointSchema
export const pA = iconClassifierEndpointsResults
