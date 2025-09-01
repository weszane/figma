import { z } from "../905/239603";
import { FAccessLevelType } from "../figma_app/191312";
import { kE } from "../figma_app/630077";
import { O } from "../905/247093";
export let $$o1 = kE.extend({
  orphaned: z.boolean().optional(),
  member_count: z.number().optional()
});
var $$l0 = (e => (e.NAME = "name", e.OWNER = "owner_name", e.PROJECTS = "projects", e.MEMBERS = "member_count", e.WORKSPACE = "workspace_name", e.ORG_ACCESS = "org_access", e))($$l0 || {});
var $$d2 = (e => (e.JOINED = "JOINED", e.NOT_JOINED = "NOT_JOINED", e))($$d2 || {});
export function $$c3() {
  return {
    workspaces: {
      [O]: 0
    },
    org_access: {
      [FAccessLevelType.PUBLIC]: 0,
      [FAccessLevelType.PRIVATE]: 0,
      [FAccessLevelType.SECRET]: 0
    },
    team_membership: {
      JOINED: 0,
      NOT_JOINED: 0
    }
  };
}
export const Kq = $$l0;
export const hJ = $$o1;
export const ig = $$d2;
export const xZ = $$c3; 
