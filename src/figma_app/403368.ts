import { debugState } from "../905/407919";
import { subscribeAndAwaitData } from "../905/553831";
import { useSubscription } from "../figma_app/288654";
import { useCurrentFileKey } from "../figma_app/516028";
import { FileFeaturesEnabled } from "../figma_app/43951";
export function $$l0() {
  let e = useCurrentFileKey();
  let t = useSubscription(FileFeaturesEnabled, {
    fileKey: e || ""
  }, {
    enabled: !!e
  });
  let r = t.data?.file?.orgPublicInfo;
  return !!r?.cursorChatDisabledAt;
}
export function $$d1() {
  return new Promise((e, t) => {
    let r = debugState.getState().openFile?.key;
    if (!r) return e(!1);
    subscribeAndAwaitData(FileFeaturesEnabled, {
      fileKey: r
    }).then(t => {
      let r = t.file?.orgPublicInfo;
      return e(!!r?.cursorChatDisabledAt);
    });
  });
}
export const S = $$l0;
export const q = $$d1;