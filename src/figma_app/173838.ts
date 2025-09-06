import { useSelector } from "../vendor/514228";
import { Rs } from "../figma_app/288654";
import { isInteractionPathCheck } from "../figma_app/897289";
import { FPublicationStatusType } from "../figma_app/191312";
import { a9b, ehp } from "../figma_app/43951";
import { B4 } from "../905/71785";
export function $$d0(e) {
  let t = Rs(a9b, {
    hubFileId: e
  });
  return "loaded" !== t.status ? null : t.data.hubFile;
}
export function $$c1() {
  let e = useSelector(e => e.openFile?.key);
  if (isInteractionPathCheck()) return useSelector(t => {
    let {
      hubFiles,
      figFilePublishedAsHubFile
    } = t;
    let i = e && figFilePublishedAsHubFile[e];
    return i ? B4(hubFiles[i]) : null;
  });
  let t = Rs(ehp, {
    fileKey: e || ""
  }, {
    enabled: !!e
  });
  if ("loaded" !== t.status) return null;
  let r = t.data.file?.publishedHubFile;
  return r?.publishingStatus !== FPublicationStatusType.APPROVED_PUBLIC ? null : r;
}
export const HI = $$d0;
export const JT = $$c1;