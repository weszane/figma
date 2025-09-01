import { z } from "../905/239603";
var $$l0 = (e => (e.BAR_GROUPED = "bar-grouped", e.BAR_STACKED = "bar-stacked", e))($$l0 || {});
let o = z.string().startsWith("row-");
let i = z.string().startsWith("column-");
let a = z.string().includes(":");
let s = z.literal("chartType");
let $$c = z.string();
let u = z.nativeEnum($$l0);
let d = z.union([z.literal("color1"), z.literal("color2"), z.literal("color3"), z.literal("color4"), z.literal("color5")]);
let p = z.string();
let f = z.union([o, i, a, s, d]);
let h = z.union([$$c, u, p]);
let $$m1 = z.record(f, h).refine(e => Object.entries(e).every(([e, t]) => e.startsWith("row-") || e.startsWith("column-") || e.includes(":") ? $$c.safeParse(t).success : "chartType" === e ? u.safeParse(t).success : ("color1" === e || "color2" === e || "color3" === e || "color4" === e || "color5" === e) && p.safeParse(t).success)).transform(e => ({
  ...e,
  chartType: e.chartType ?? "bar-grouped",
  color1: e.color1 ?? "#6c5efb",
  color2: e.color2 ?? "#c998ff",
  color3: e.color3 ?? "#a44afe",
  color4: e.color4 ?? "#7a28fb",
  color5: e.color5 ?? "#9f87ff"
}));
export const N = $$l0;
export const c = $$m1;