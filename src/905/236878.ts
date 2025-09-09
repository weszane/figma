import { useSelector } from "react-redux";
export function $$r0({
  teamId: e,
  flag: t
}) {
  return useSelector(i => i.userTeamFlags[e]?.[t]);
}
export const q = $$r0;
