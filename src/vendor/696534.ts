import { V } from "../vendor/359881";
export function $$s0(e, r) {
  let n;
  let s = V();
  s.Zone && "function" == typeof s.Zone.__symbol__ && (n = e[s.Zone.__symbol__(r)]);
  n || (n = e[r]);
  return n;
}
export const W = $$s0;