import { getFeatureFlags } from "../905/601108";
import { PU } from "../figma_app/640683";
export function $$a1(e) {
  return !!(e.deeplink && e.preferred_attachments.map(e => e._block_type).includes("ClientActionableAttachment")) && o(e.deeplink.href);
}
export function $$s0(e) {
  return e.deeplink ? $$l2(e.deeplink.href) : null;
}
let o = e => {
  let t = new URL(e);
  return (getFeatureFlags().notif_file_url_cleanup ? PU(t.pathname.split("/")[1]) : "file" === t.pathname.split("/")[1]) && t.hash.length > 1 && "#-1" !== t.hash;
};
export function $$l2(e) {
  if (!1 === o(e)) return null;
  let t = new URL(e);
  let r = t.pathname.split("/");
  return r.length < 3 ? null : {
    fileKey: r[2],
    threadId: t.hash.slice(1),
    deeplink: e
  };
}
export function $$d3(e, t) {
  return !!e && !!t && e.key === t.fileKey;
}
export const AS = $$s0;
export const UC = $$a1;
export const sL = $$l2;
export const zr = $$d3;