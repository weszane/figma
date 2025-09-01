import { EG } from "../figma_app/995580";
export function $$r0(e) {
  return "plugins-menu-item" === e.name ? e.extensionSearchString : "go-to-page" === e.name ? e.name : EG(e).slice(0, 20);
}
export const n = $$r0;