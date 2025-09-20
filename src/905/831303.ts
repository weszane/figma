import { throwTypeError } from "../figma_app/465776";
import { sessionLocalIDToString } from "../905/871411";
import { convertVariableIdToKiwi } from "../905/805904";
import { convertStringToKiwi } from "../905/537777";
import { isValidThumbnail, getBufferFromThumbnailUrl, generateSerializableStyleThumbnail } from "../figma_app/80990";
import { getAssetThumbnailUrl } from "../figma_app/646357";
import { isEffectOrGrid, isStyleType, isValidStyleType } from "../905/405710";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
export function $$u2(e) {
  var t;
  var i;
  switch (e.type) {
    case PrimaryWorkflowEnum.COMPONENT:
    case PrimaryWorkflowEnum.STATE_GROUP:
    case PrimaryWorkflowEnum.STYLE:
    case PrimaryWorkflowEnum.MODULE:
    case PrimaryWorkflowEnum.RESPONSIVE_SET:
    case PrimaryWorkflowEnum.CODE_COMPONENT:
    case PrimaryWorkflowEnum.MANAGED_STRING:
      return e.node_id;
    case PrimaryWorkflowEnum.VARIABLE:
      t = e.node_id;
      return sessionLocalIDToString(convertVariableIdToKiwi(t)?.guid);
    case PrimaryWorkflowEnum.VARIABLE_SET:
      i = e.node_id;
      return sessionLocalIDToString(convertStringToKiwi(i)?.guid);
    default:
      throwTypeError(e);
  }
}
export function $$p0(e, t) {
  let i = e.type === PrimaryWorkflowEnum.STYLE && isEffectOrGrid(e.style_type);
  let n = getAssetThumbnailUrl(e, t, i);
  if (!n || !isValidThumbnail(n)) {
    reportError("ThumbnailGenerationError");
    return;
  }
  return getBufferFromThumbnailUrl(n);
}
export function $$m1(e, t) {
  let i = e.meta || {};
  let n = t[e.node_id];
  if (isStyleType(e.style_type) && (n.content_hash !== e.content_hash || isValidStyleType(e))) {
    let t = generateSerializableStyleThumbnail(e.style_type, e.node_id);
    "INVALID" !== t.type && (i.style_thumbnail = t);
  }
  return i;
}
export const I6 = $$p0;
export const fn = $$m1;
export const p$ = $$u2;