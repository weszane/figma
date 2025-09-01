import { z } from "../905/239603";
var $$n0 = (e => (e.BAR_GROUPED = "bar-grouped", e.BAR_STACKED = "bar-stacked", e))($$n0 || {});
let i = z.string().startsWith("row-");
let l = z.string().startsWith("column-");
let a = z.string().includes(":");
let o = z.literal("chartType");
let d = z.string();
let $$c = z.nativeEnum($$n0);
let u = z.union([z.literal("color1"), z.literal("color2"), z.literal("color3"), z.literal("color4"), z.literal("color5")]);
let p = z.string();
let h = z.union([i, l, a, o, u]);
let m = z.union([d, $$c, p]);
let $$g1 = z.record(h, m).refine(e => Object.entries(e).every(([e, t]) => e.startsWith("row-") || e.startsWith("column-") || e.includes(":") ? d.safeParse(t).success : "chartType" === e ? $$c.safeParse(t).success : ("color1" === e || "color2" === e || "color3" === e || "color4" === e || "color5" === e) && p.safeParse(t).success)).transform(e => ({
  ...e,
  chartType: e.chartType ?? "bar-grouped",
  color1: e.color1 ?? "#6c5efb",
  color2: e.color2 ?? "#c998ff",
  color3: e.color3 ?? "#a44afe",
  color4: e.color4 ?? "#7a28fb",
  color5: e.color5 ?? "#9f87ff"
}));
export const N = $$n0;
export const c = $$g1;