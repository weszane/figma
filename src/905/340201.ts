import { z } from "../vendor/835909";
let r = z.object({
  sourceCodeJSXCallId: z.string(),
  fullFilePath: z.string(),
  unstrippedFullFilePath: z.string(),
  line: z.number(),
  column: z.number(),
  displayName: z.string().nullable()
});
let a = z.tuple([r]).rest(r);
let s = z.object({
  nodeGuid: z.string(),
  type: z.string(),
  label: z.string(),
  inspectedElementSources: a.optional()
});
let $$o0 = z.object({
  rawUserMessage: z.string(),
  attachments: z.array(s)
});
export const B = $$o0;