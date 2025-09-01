import { Ik, g1, bz, Yj, YO, KC } from "../vendor/835909";
import { lF, gB, z7, Ph, zF, cn, Dj, NA, ue } from "../905/31168";
let $$a1 = lF.merge(Ik({
  tools: g1(bz()).optional(),
  toolChoice: bz()
}));
let $$s0 = Ik({
  text: Yj(),
  toolCalls: YO(gB),
  toolResults: YO(z7),
  reasoning: Yj().optional(),
  reasoningDetails: YO(Ph),
  finishReason: zF,
  usage: cn,
  response: Ik({
    messages: YO(KC([Dj, NA]))
  }),
  providerMetadata: bz().optional(),
  logprobs: ue.optional()
});
export const $ = $$s0;
export const p = $$a1;