import { getAssetUniqueId, getAssetKey } from "../figma_app/646357";
import { hasAssetId, PrimaryWorkflowEnum } from "../figma_app/633080";
export function $$a0(e) {
  return hasAssetId(e) ? "LOCAL" === e.subscriptionStatus ? e.keyForPublish : e.key : e.isLocal ? getAssetUniqueId(e) : getAssetKey(e) ?? getAssetUniqueId(e);
}
export function $$s1(e) {
  switch (e) {
    case PrimaryWorkflowEnum.COMPONENT:
    case PrimaryWorkflowEnum.STATE_GROUP:
    case PrimaryWorkflowEnum.MODULE:
      return e;
    default:
      return;
  }
}
export const V = $$a0;
export const q = $$s1;