import { z } from "../905/239603";
var r = (e => (e.USER = "user", e.TEAM = "team", e.ORG = "org", e))(r || {});
let a = z.object({
  experiment_id: z.string(),
  treatment_id: z.string()
});
let $$s0 = z.object({
  experiment_assignments: z.array(a)
});
export const bV = $$s0;