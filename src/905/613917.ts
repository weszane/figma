export function $$n0(e, t) {
  let i = t.orgTeams?.teams.find(t => t.id === e);
  return t.teams[e] ?? i;
}
export const _ = $$n0;