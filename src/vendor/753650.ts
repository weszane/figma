import { O } from "../vendor/313656";
import { O as _$$O } from "../vendor/122594";
import { S } from "../vendor/777323";
export function $$a0(e, r, n = {}) {
  let h = S(e) ? e : _$$O(e);
  h.start(O("", h, r, n));
  return {
    stop: () => h.stop(),
    isAnimating: () => h.isAnimating()
  };
}
export const i = $$a0;