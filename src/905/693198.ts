import { Ik, Yj, g1, bz, YO, ai } from "../vendor/835909";
let r = Ik({
  provider: Yj(),
  model: Yj(),
  headers: g1(Yj(), Yj().optional()).optional()
});
let $$a2 = r.extend({
  value: bz()
});
let $$s0 = r.extend({
  values: YO(bz())
});
let $$o1 = Ik({
  value: bz(),
  embedding: YO(ai()),
  usage: Ik({
    tokens: ai()
  })
});
let $$l3 = Ik({
  values: YO(bz()),
  embeddings: YO(YO(ai())),
  usage: Ik({
    tokens: ai()
  })
});
export const Ru = $$s0;
export const cg = $$o1;
export const qA = $$a2;
export const tQ = $$l3;