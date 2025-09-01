import { d4 } from "../vendor/514228";
export function $$r0({
  teamId: e,
  flag: t
}) {
  return d4(i => i.userTeamFlags[e]?.[t]);
}
export const q = $$r0;