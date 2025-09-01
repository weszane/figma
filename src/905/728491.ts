import { Rs } from "../figma_app/288654";
export function $$r0(e, t) {
  return Rs(e, {
    key: t
  }, {
    enabled: !!t
  }).transform(e => !!e.file?.hasPermission);
}
export const l = $$r0;