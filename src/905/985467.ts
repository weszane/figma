import { z } from "../vendor/835909";
import { p, $ } from "../905/453712";
import { t8, LR } from "../905/460208";
import { qA, Ru, cg, tQ } from "../905/693198";
import { $l, tm } from "../905/707076";
import { vD } from "../905/541395";
import { k0 } from "../905/219321";
import { Dj, NA } from "../905/31168";
let u = z.object({
  item: z.any(),
  score: z.number()
});
let $$p0 = z.object({
  name: z.string(),
  type: z.enum(["group", "chat", "chatV2", "objectV2", "embeddings", "embedV2", "error", "image", "imageV2"]),
  start: z.number(),
  end: z.number().optional(),
  chat: z.object({
    request: $l,
    response: tm.optional()
  }).optional(),
  chatV2: z.object({
    request: p,
    response: $.omit({
      response: !0
    }).merge(z.object({
      responseMessages: z.array(z.union([Dj, NA]))
    })).optional()
  }).optional(),
  objectV2: z.object({
    request: t8,
    response: LR.optional()
  }).optional(),
  imageV2: z.object({
    request: k0
  }).optional(),
  embeddings: z.object({
    request: vD,
    choices: u.array().optional(),
    filteredChoices: u.array().optional()
  }).optional(),
  embedV2: z.object({
    request: z.union([qA, Ru]),
    response: z.union([cg.omit({
      embedding: !0
    }), tQ.omit({
      embeddings: !0
    })]).optional()
  }).optional(),
  error: z.object({
    type: z.string(),
    message: z.string(),
    stack: z.string().optional()
  }).optional()
}).extend({
  children: z.lazy(() => $$p0.array())
});
export const B = $$p0;
