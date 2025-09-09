import { CollaboratorTypeSchema } from "../905/513035";
import { TeamUserSchema } from "../905/814802";
import { TeamSchema } from "../figma_app/630077";
import { UserOrgSchema } from "../figma_app/175992";
let $$o1 = TeamSchema.pick({
  id: !0,
  name: !0,
  img_url: !0
});
let $$l0 = TeamUserSchema.pick({
  id: !0,
  team_id: !0
}).extend({
  user: UserOrgSchema.pick({
    id: !0,
    img_url: !0,
    handle: !0,
    email: !0
  }),
  recommended_seat_type: CollaboratorTypeSchema.nullable()
});
export const P = $$l0;
export const _ = $$o1;