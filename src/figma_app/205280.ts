import { gu } from "../figma_app/618665";
import { po } from "../figma_app/396372";
export async function $$a1(e) {
  return (await $$o2(e)).files;
}
export function* $$s0(e, t) {
  for (let r of Array.from(e).sort((e, t) => !e.nodePosition && t.nodePosition ? -1 : e.nodePosition && !t.nodePosition ? 1 : e.nodePosition || t.nodePosition ? (e.nodePosition?.y ?? 0) - (t.nodePosition?.y ?? 0) : 0)) {
    if (!gu() && !t) break;
    yield (async () => {
      let e = await $$o2([r]);
      if (gu() || t) {
        await new Promise(e => setTimeout(e, 0));
        return e;
      }
    })();
  }
}
export async function $$o2(e) {
  let t = {};
  let r = {
    cacheHits: 0,
    fillAssets: 0,
    generatedSvgs: 0,
    generatedImages: 0,
    flattenedFills: 0
  };
  await Promise.all(e.map(async e => {
    let n = await po.instance.getAssetData(e);
    if (n.data) switch (t[e.filename] = n.data, n.fromCache && r.cacheHits++, e.type) {
      case "GENERATED_ASSET":
        "SVG" === e.exportSetting.format ? r.generatedSvgs++ : r.generatedImages++;
        break;
      case "PAINT_ASSET":
        r.fillAssets++;
        break;
      case "PAINT_FILL_ASSET":
        r.flattenedFills++;
    }
  }));
  return {
    files: t,
    totals: r
  };
}
export const BG = $$s0;
export const Ct = $$a1;
export const TS = $$o2;