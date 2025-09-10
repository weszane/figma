import { z } from "src/905/239603";
import { B } from "src/905/458036";
var $$a3 = (e => (e[e.CURATED_IMAGE = 0] = "CURATED_IMAGE", e[e.EMBED = 1] = "EMBED", e))($$a3 || {});
let $$s1 = z.record(z.string().refine(e => Object.keys(B.COMMUNITY_HUB_FILE_THUMBNAIL).includes(e)), z.string().url());
let o = z.object({
  url: z.string().url()
});
let l = o.extend({
  id: z.string(),
  sha1: z.string(),
  resized_thumbnail_urls: z.optional($$s1),
  created_at: z.coerce.date()
});
let $$d5 = z.record(z.string(), l);
o.extend({
  sha1: z.string(),
  buffer: z.$$instanceof(Uint8Array)
});
let c = z.object({
  url: z.string().url(),
  thumbnail_url: z.string().url()
});
let u = c.extend({
  id: z.string(),
  sha1: z.string(),
  thumbnail_sha1: z.string(),
  video_file_uuid: z.string().uuid()
});
let $$p0 = z.record(z.string(), u);
export function $$_4(e) {
  return "buffer" in e;
}
export function $$h2(e) {
  return "id" in e;
}
c.extend({
  sha1: z.string(),
  buffer: z.$$instanceof(Uint8Array),
  thumbnail_sha1: z.string(),
  thumbnail_buffer: z.$$instanceof(Uint8Array)
});
export const Fy = $$p0;
export const P1 = $$s1;
export const Sq = $$h2;
export const Z4 = $$a3;
export const dE = $$_4;
export const fE = $$d5;
