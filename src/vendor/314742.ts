import { Vy } from "../vendor/780783";
export function $$s0(e, r) {
  return (...n) => {
    try {
      return e(...n);
    } catch (e) {
      Vy.error(r, e);
    }
  };
}
export const y = $$s0;