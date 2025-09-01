import { Ju } from "../905/955878";
export function $$r0(e) {
  return function (t, i, r) {
    "n" === r.key && r.ctrlKey ? (null === i ? e(0) : t - 1 !== i && e(i + 1), Ju(r)) : "p" === r.key && r.ctrlKey && (null === i ? e(0) : 0 !== i && e(i - 1), Ju(r));
  };
}
export const R = $$r0;