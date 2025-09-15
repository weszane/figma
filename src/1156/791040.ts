import { atomStoreManager } from "../figma_app/27355";
import { openFileKeyAtom } from "../figma_app/516028";
import { liveStoreInstance } from "../905/713695";
import { rK } from "../figma_app/72338";
import { y7, TT, YF } from "../figma_app/952035";
export async function $$o0() {
  let e = atomStoreManager.get(openFileKeyAtom);
  let {
    authenticated
  } = await liveStoreInstance.fetch(y7({
    fileKey: e
  }), {
    policy: "networkOnly"
  });
  await liveStoreInstance.fetch(TT({
    fileKey: e
  }), {
    policy: "networkOnly"
  });
  authenticated && (await liveStoreInstance.fetch(YF({
    fileKey: e
  }), {
    policy: "networkOnly"
  }));
  atomStoreManager.set(rK, !0);
}
export const r = $$o0;