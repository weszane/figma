import { n3 } from "../905/859698";
import { memoizeWeak } from "../figma_app/815945";
import { e1, getResourceDataOrFallback, gB } from "../905/723791";
import { Zt, KC, rZ } from "../figma_app/349248";
export let $$o0 = memoizeWeak(e => {
  if ("loaded" !== e.status) return {
    result: e
  };
  let t = e.data.styleWithDestinationAssetV2;
  if (!t) return {
    result: e1([])
  };
  let {
    file,
    hubFile,
    ...o
  } = t.destinationAsset || t;
  let l = getResourceDataOrFallback(hubFile);
  let d = Zt(file, l);
  return d ? {
    result: gB({
      ...KC(o, d),
      fileName: ("team" === d.type ? d.file?.name : d.file?.currentHubFileVersion?.name) ?? ""
    }),
    movedAssetData: t.destinationAsset ? {
      sourceFileName: t.file?.name,
      sourceKey: n3(t.key),
      destinationKey: n3(t.destinationAsset.key),
      destinationFileName: t.destinationAsset.file?.name
    } : void 0,
    legacySourceStyle: rZ(t)
  } : {
    result: e1([])
  };
});
export const L = $$o0;