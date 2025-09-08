import { LibraryPubSub, Confirmation, SceneIdentifier } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { Eo } from "../figma_app/80990";
import { Hk } from "../905/497152";
export async function $$o0(e) {
  if ("LIBRARY" !== e.subscriptionStatus) return e.assetId;
  let t = await Eo.getCanvas({
    canvas_url: e.canvasUrl
  });
  if (!permissionScopeHandler.system("upsert-shared-library-asset", () => LibraryPubSub.upsertSharedLibraryAsset(Hk(e.type), e.key, e.version, e.sourceLibraryKey, Confirmation.NO, t, SceneIdentifier.ACTIVE_SCENE)).success) throw Error("An error occurred while inserting this asset.");
  return e.assetId;
}
export const e = $$o0;