import { selectCurrentFile } from "../figma_app/516028";
export function $$r0() {
  let e = selectCurrentFile();
  let t = e?.project?.activeProjectResourceConnections;
  return t ? t[0] : void 0;
}
export const c = $$r0;