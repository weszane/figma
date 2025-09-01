import { COMMIT, REVERT } from "redux-optimist";
export function $$r0(e) {
  return {
    type: null,
    optimist: {
      type: COMMIT,
      id: e
    }
  };
}
export function $$a1(e) {
  return {
    type: null,
    optimist: {
      type: REVERT,
      id: e
    }
  };
}
export const c = $$r0;
export const r = $$a1;
