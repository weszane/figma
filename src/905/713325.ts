import { z } from "../905/239603";
let r = z.object({
  nodeId: z.string().optional(),
  name: z.string().optional()
});
let $$a0 = z.object({
  nodeId: z.string().nullish().transform(e => e ?? void 0),
  name: z.string().nullish().transform(e => e ?? void 0),
  backgroundColor: z.string().nullish().transform(e => e ?? void 0),
  pageName: z.string().optional(),
  pageId: z.string().optional(),
  sortPosition: z.string().nullable().optional(),
  containingStateGroup: r.nullish().transform(e => e ?? void 0)
});
export const T = $$a0;