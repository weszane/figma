import n from "../vendor/241899";
import { trackFileEvent } from "../figma_app/314264";
var r = n;
export function $$s0({
  name: e,
  message: t,
  origin: i,
  boundary: n,
  reduxState: s
}) {
  s || console.warn("logPreviewError called without reduxState");
  let o = s ? r()(s, ["selectedView", "fileByKey"]) : {};
  trackFileEvent("sites_previewing_failed", s?.openFile?.key, o, {
    error_name: e,
    error_message: t,
    error_boundary: n,
    origin: i
  });
}
export const X = $$s0;