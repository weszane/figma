import { eO, OH } from "../vendor/537916";
export function $$s0(e, r) {
  let n = performance.now();
  let s = ({
    timestamp: o
  }) => {
    let a = o - n;
    a >= r && (eO.read(s), e(a - r));
  };
  OH.read(s, !0);
  return () => eO.read(s);
}
export const c = $$s0;