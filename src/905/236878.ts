import { useSelector } from "../vendor/514228";
export function $$r0({
  teamId: e,
  flag: t
}) {
  return useSelector(i => i.userTeamFlags[e]?.[t]);
}
export const q = $$r0;