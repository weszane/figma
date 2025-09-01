import { T5, Az, EV } from "../figma_app/465071";
export function $$r0() {
  let e = T5("useAllowInternalTemplatesCooper");
  let t = Az(e).unwrapOr(!1);
  let i = EV(e).unwrapOr(!1);
  let r = e.data?.customTemplatesAllowed;
  return t && r || i;
}
export const j = $$r0;