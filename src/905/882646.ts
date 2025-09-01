import { U, xQ } from "../figma_app/45218";
export function $$r0(e) {
  return U(e) ? `/community/file/${e.id}` : xQ(e) ? `/community/widget/${e.id}` : `/community/plugin/${e.id}`;
}
export const k = $$r0;