import { n3 } from "../905/859698";
import { memoizeWeak } from "../figma_app/815945";
import { createErrorState, getResourceDataOrFallback, createLoadedState } from "../905/723791";
import { mapHubOrTeamFile, mapStyleProperties, mapMovedFileProperties } from "../figma_app/349248";
export let $$o0 = memoizeWeak(e => {
  if ("loaded" !== e.status) return {
    result: e
  };
  let t = e.data.styleWithDestinationAssetV2;
  if (!t) return {
    result: createErrorState([])
  };
  let {
    file,
    hubFile,
    ...o
  } = t.destinationAsset || t;
  let l = getResourceDataOrFallback(hubFile);
  let d = mapHubOrTeamFile(file, l);
  return d ? {
    result: createLoadedState({
      ...mapStyleProperties(o, d),
      fileName: ("team" === d.type ? d.file?.name : d.file?.currentHubFileVersion?.name) ?? ""
    }),
    movedAssetData: t.destinationAsset ? {
      sourceFileName: t.file?.name,
      sourceKey: n3(t.key),
      destinationKey: n3(t.destinationAsset.key),
      destinationFileName: t.destinationAsset.file?.name
    } : void 0,
    legacySourceStyle: mapMovedFileProperties(t)
  } : {
    result: createErrorState([])
  };
});
export const L = $$o0;