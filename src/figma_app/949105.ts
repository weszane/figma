import { z } from "../905/239603";
let i = "first_draft_make_kit";
let a = "is_kit_instance";
export function $$s0(e) {
  return "INSTANCE" === e.type && "true" === e.getSharedPluginData(i, a);
}
export function $$o1(e) {
  if ("INSTANCE" !== e.type) throw Error("Can only set if an instance is a building block instance");
  e.setSharedPluginData(i, a, "true");
}
export function $$l3(e, t) {
  if (!$$s0(e)) throw Error("Can only set shadow building block metadata on an instance");
  e.setSharedPluginData(i, "shadow_building_block_metadata", JSON.stringify(t));
}
export function $$d2(e, t) {
  if (!$$s0(e)) throw Error("Can only set shadow building block description on an instance");
  e.setSharedPluginData(i, "shadow_building_block_description", t);
}
z.object({
  componentPropertyDefinitions: z.array(z.object({
    name: z.string(),
    type: z.string()
  })),
  componentPropertyReferences: z.record(z.string(), z.record(z.string(), z.string()))
});
export const Gs = $$s0;
export const T = $$o1;
export const aj = $$d2;
export const p0 = $$l3;