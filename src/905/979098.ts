import { Uz } from "../905/63728";
export function $$r0(e, t = 1, i = 10) {
  if (e.keyCode !== Uz.LEFT_ARROW && e.keyCode !== Uz.DOWN_ARROW && e.keyCode !== Uz.RIGHT_ARROW && e.keyCode !== Uz.UP_ARROW) return 0;
  let a = e.shiftKey ? i : t;
  (e.keyCode === Uz.LEFT_ARROW || e.keyCode === Uz.DOWN_ARROW) && (a *= -1);
  return a;
}
export const W = $$r0;