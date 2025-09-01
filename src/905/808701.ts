import { z } from "../905/239603";
import { x1 } from "../905/714362";
import { FAnimationEffectType, FNodeType, FAnimationTriggerType } from "../figma_app/191312";
import { Zx } from "../905/497152";
function o(e, {
  assetId: t,
  version: i,
  type: n,
  name: a,
  userFacingVersion: o
}) {
  Zx(n) !== e && x1("design-systems", "Expected asset types to match", {
    actual: Zx(n),
    expected: e
  });
  return {
    type: e,
    assetId: t,
    name: a,
    version: i,
    userFacingVersion: o
  };
}
export function $$l5(e, t) {
  return t.localFields ? {
    ...o(e, t),
    subscriptionStatus: "LOCAL",
    keyForPublish: t.localFields.keyForPublish,
    isPublishable: !!t.localFields.isPublishable,
    isSoftDeleted: !!t.localFields.isSoftDeleted,
    localGuid: t.localFields.localGuid,
    containingFrame: t.localFields.containingFrame,
    mainThumbnailInfo: t.localFields.mainThumbnailInfo
  } : (x1("design-systems", "Expected localFields on local asset"), null);
}
export function $$d4(e, t) {
  return t.subscribedFields ? {
    ...o(e, t),
    subscriptionStatus: "SUBSCRIBED",
    key: t.subscribedFields.key
  } : (x1("design-systems", "Expected subscribedFields on subscribed asset"), null);
}
export function $$c2(e, t, i) {
  return `/api/file_proxy/library_asset/${e}/${t}/canvas?ver=${i}`;
}
export function $$u1(e, t, i) {
  return `/library/asset/${e}/${t}/thumbnail?ver=${i}`;
}
let p = z.object({});
let m = z.object({
  backgroundColor: z.string().nullable().$$default(null),
  pageName: z.string().nullable().$$default(null),
  pageId: z.string().nullable().$$default(null),
  name: z.string().nullable().$$default(null),
  nodeId: z.string().nullable().$$default(null),
  sortPosition: z.string().nullable().$$default(null),
  containingStateGroup: p.nullable().$$default(null)
});
export function $$h0(e, t = z.object({})) {
  return z.object({
    asset_type: z.literal(e),
    name: z.string(),
    version: z.string(),
    user_facing_version: z.string(),
    library_key: z.string(),
    key: z.string(),
    node_id: z.string(),
    canvas_url: z.string(),
    thumbnail_url: z.string().nullable(),
    checkpoint_id: z.string(),
    containing_frame: m,
    main_node_width: z.number(),
    main_node_height: z.number(),
    updated_at: z.coerce.date(),
    code_preset_metadata: z.object({
      preset_name: z.string(),
      preset_icon: z.nativeEnum(FAnimationEffectType).nullable(),
      applicable_node_types: z.array(z.nativeEnum(FNodeType)).nullable(),
      category: z.nativeEnum(FAnimationTriggerType).nullable()
    }).nullable()
  }).merge(t);
}
export function $$g3(e, t = z.object({})) {
  return z.object({
    asset_type: z.literal(e),
    key: z.string(),
    version: z.string(),
    user_facing_version: z.string(),
    node_id: z.string(),
    library_key: z.string(),
    file_key: z.string(),
    file_checkpoint_id: z.string(),
    checkpoint_id: z.string(),
    canvas_url: z.string(),
    containing_frame: m,
    main_node_width: z.number(),
    main_node_height: z.number(),
    updated_at: z.coerce.date(),
    created_at: z.coerce.date()
  }).merge(t);
}
export const $B = $$h0;
export const EU = $$u1;
export const IV = $$c2;
export const Jw = $$g3;
export const nV = $$d4;
export const oz = $$l5;