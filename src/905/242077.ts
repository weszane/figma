import { cD } from "../905/513035";
import { wF } from "../905/814802";
import { kE } from "../figma_app/630077";
import { aw } from "../figma_app/175992";
let $$o1 = kE.pick({
  id: !0,
  name: !0,
  img_url: !0
});
let $$l0 = wF.pick({
  id: !0,
  team_id: !0
}).extend({
  user: aw.pick({
    id: !0,
    img_url: !0,
    handle: !0,
    email: !0
  }),
  recommended_seat_type: cD.nullable()
});
export const P = $$l0;
export const _ = $$o1;