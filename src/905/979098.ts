import { KeyCodes } from "../905/63728";
export function $$r0(e, t = 1, i = 10) {
  if (e.keyCode !== KeyCodes.LEFT_ARROW && e.keyCode !== KeyCodes.DOWN_ARROW && e.keyCode !== KeyCodes.RIGHT_ARROW && e.keyCode !== KeyCodes.UP_ARROW) return 0;
  let a = e.shiftKey ? i : t;
  (e.keyCode === KeyCodes.LEFT_ARROW || e.keyCode === KeyCodes.DOWN_ARROW) && (a *= -1);
  return a;
}
export const W = $$r0;