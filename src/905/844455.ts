import { cZ, OS } from "../905/113138";
import { TeamSchema } from "../figma_app/630077";
import { $ } from "../905/834575";
import { E } from "../905/118283";
let $$o0 = new cZ("TEAM").binding;
let $$l1 = (e, t) => new OS(e, "teams", $$o0, TeamSchema, async e => (await $.getTeam({
  teamId: e
})).data.meta, E(t(), "team"));
export const N = $$o0;
export const p = $$l1;
