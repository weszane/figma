import { Ik, KC, eu, bz, Yj, YO, lq } from "../vendor/835909";
import { lF, zF, cn, ue, Ex } from "../905/31168";
let $$a1 = lF.merge(Ik({
  output: KC([eu("object"), eu("array"), eu("enum"), eu("no-schema"), eu("amazon-bedrock-fake-no-schema")]).optional(),
  mode: KC([eu("auto"), eu("json"), eu("tool")]).optional(),
  schema: bz(),
  schemaName: Yj().optional(),
  schemaDescription: Yj().optional(),
  enum: YO(Yj()).optional()
}));
let $$s0 = Ik({
  object: bz(),
  finishReason: zF,
  usage: cn,
  logprobs: lq(ue)
});
Ik({
  object: bz(),
  finishReason: KC([zF, eu("error"), eu("content-filter")]),
  usage: cn,
  response: Ex,
  logprobs: lq(ue)
}).omit({
  finishReason: !0,
  logprobs: !0
}).merge(Ik({
  fullStream: YO(bz())
}));
export const LR = $$s0;
export const t8 = $$a1;