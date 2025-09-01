export function $$n0(e, t, i) {
  let {
    actions,
    queries
  } = i;
  return Math.round(1 / 3 * (actions.data(t)?.score() ?? 0) + 2 / 3 * (queries.data(e, t)?.score() ?? 0));
}
export const y = $$n0;