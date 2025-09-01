import { COMMIT, REVERT, BEGIN } from "redux-optimist";
let r = 0;
export function $$a0() {
  return r++;
}
export function $$s1(e, t, i) {
  let r = $$a0();
  e.then(e => (t({
    type: null,
    optimist: {
      type: COMMIT,
      id: r
    }
  }), e)).catch(() => {
    t({
      type: null,
      optimist: {
        type: REVERT,
        id: r
      }
    });
  });
  t({
    ...i,
    optimist: {
      type: BEGIN,
      id: r
    }
  });
  return e;
}
export const F = $$a0;
export const f = $$s1;
