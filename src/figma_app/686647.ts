import { z } from "../vendor/835909";
import { Vg } from "../905/374090";
import { d_, Uv } from "../905/712373";
import { k } from "../figma_app/970433";
let $$o2 = Vg;
let $$l1 = k({
  name: "design_editor",
  trackingName: "make-edits",
  parameters: z.object({
    instructions: z.string().describe("The instructions for the design assistant to follow.")
  })
});
let d = d_($$l1);
let $$c0 = z.union([d, Uv]);
export const Kv = $$c0;
export const Ns = $$l1;
export const n0 = $$o2;