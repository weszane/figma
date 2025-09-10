import { z } from "../905/239603";
import { KS } from "../figma_app/45218";
import { UL } from "../figma_app/306946";
let $$s3 = -200;
let $$o0 = 10;
let $$l4 = 125;
var $$d2 = (e => (e.file = "hub_files", e.plugin = "plugins", e.widget = "widgets", e))($$d2 || {});
var $$c5 = (e => (e.hub_file = "file", e.plugin = "plugin", e.widget = "widget", e))($$c5 || {});
let $$u6 = {
  file: "hub_file",
  plugin: "base_plugin",
  widget: "base_plugin"
};
let p = z.object({
  model: UL,
  score: z.number()
});
let $$_7 = z.object({
  results: z.array(p),
  total_hits: z.number().optional()
});
z.object({
  comments: z.array(KS).nullable(),
  total_count: z.number().optional()
});
export var $$h1 = (e => (e.DescriptionView = "descriptionViewSection", e.CommentsView = "commentsViewSection", e))($$h1 || {});
export const $2 = $$o0;
export const $O = $$h1;
export const S = $$d2;
export const bK = $$s3;
export const co = $$l4;
export const qG = $$c5;
export const sh = $$u6;
export const to = $$_7;
