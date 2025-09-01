export function $$n0(e, t) {
  return e.reduce((e, i) => (t(i) ? e.pass.push(i) : e.fail.push(i), e), {
    pass: [],
    fail: []
  });
}
export const j = $$n0;