import { throwTypeError } from "../figma_app/465776";
import { glU } from "../figma_app/763686";
import { De } from "../figma_app/545293";
import { n as _$$n } from "../905/347702";
let $$o0 = _$$n(async (e, t) => {
  let i;
  switch (e.type) {
    case "fig-file-fragment":
      i = Object.values((await De.getCopyPasteBufferUrls({
        fragments: [{
          fileKey: e.file_key,
          nodeId: e.node_id
        }],
        fileKey: t
      })).data.meta.urls)[0];
      break;
    case "hub-file-fragment":
      i = (await De.getHubFileFragmentCopyPasteBufferUrl(e, t)).data.meta.url;
      break;
    default:
      throwTypeError(e);
  }
  let r = await fetch(i);
  if (!r.ok) throw Error(`HTTP error, status = ${r.status}`);
  return await r.arrayBuffer();
});
let $$l1 = _$$n((e, t, i, n) => void 0 !== n && i ? glU.directlyPasteSuggestionWithMetadata(new Uint8Array(t), e, null, i, 0, n) : glU.directlyPasteSuggestion(new Uint8Array(t), e, null, i));
export const g = $$o0;
export const o = $$l1;