import { hasClientMeta, isWidget } from "../figma_app/45218";
export function $$r0(e) {
  return hasClientMeta(e) ? `/community/file/${e.id}` : isWidget(e) ? `/community/widget/${e.id}` : `/community/plugin/${e.id}`;
}
export const k = $$r0;