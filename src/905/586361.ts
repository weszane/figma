import { A } from "../905/268204";
let n;
export function $$a0() {
  n || (n = A && window.INITIAL_OPTIONS?.feature_flags && "object" == typeof window.INITIAL_OPTIONS.feature_flags ? Object.freeze({
    ...window.INITIAL_OPTIONS.feature_flags
  }) : Object.freeze({}));
  return n;
}
export const Q = $$a0;