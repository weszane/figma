import { z } from "../905/239603";
var $$i5 = (e => (e.Title = "Title", e.Slug = "Slug", e))($$i5 || {});
export let $$a3 = {
  PLAIN_TEXT: "plain_text",
  RICH_TEXT: "rich_text",
  LINK: "link",
  SLUG: "slug",
  IMAGE: "image",
  DATE: "date",
  TITLE: "title"
};
export function $$s2(e) {
  return Object.values($$a3).includes(e);
}
export var $$o4 = (e => (e.PLAIN_DATE = "plain_date", e.PLAIN_DATE_TIME = "plain_date_time", e.ZONED_DATE_TIME = "zoned_date_time", e))($$o4 || {});
let l = z.object({
  sessionID: z.number(),
  localID: z.number()
});
let d = z.object({
  nodeId: l.optional(),
  cmsItemId: z.string().optional(),
  fieldSchemaId: z.string().optional()
});
let $$c6 = z.object({
  url: z.string().optional(),
  guid: l.optional(),
  cmsTarget: d.optional(),
  openInNewTab: z.boolean().optional()
});
let u = z.object({
  year: z.number(),
  month: z.number(),
  day: z.number(),
  hour: z.number(),
  minute: z.number(),
  offset: z.number()
});
z.object({
  dateValue: u
});
let $$p1 = z.object({
  image: z.string(),
  imageThumbnail: z.string().optional(),
  animatedImage: z.string().optional(),
  originalImageHeight: z.number(),
  originalImageWidth: z.number(),
  altText: z.string(),
  animationFrame: z.number().optional()
});
let $$_0 = z.object({
  ...$$p1.shape,
  fileName: z.string()
});
export const Cg = $$_0;
export const Dh = $$p1;
export const K5 = $$s2;
export const _j = $$a3;
export const ap = $$o4;
export const rU = $$i5;
export const se = $$c6; 
