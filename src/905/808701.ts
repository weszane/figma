import { z } from "zod";
import { logError } from "src/905/714362";
import { FAnimationEffectType, FNodeType, FAnimationTriggerType } from "src/figma_app/191312";
import { mapFacetTypeToString } from "src/905/497152";
import { FacetType } from "src/figma_app/175377";

/**
 * AssetBaseParams type for asset base properties.
 */
export type AssetBaseParams = {
  assetId: string;
  version: string;
  type: FacetType;
  name: string;
  userFacingVersion: string;
};

/**
 * Creates a base asset object and validates type.
 * @param expectedType - Expected asset type string.
 * @param params - AssetBaseParams object.
 * @returns Asset base object.
 */
// o
export function createAssetBase(
  expectedType: string,
  params: AssetBaseParams
) {
  if (mapFacetTypeToString(params.type) !== expectedType) {
    logError("design-systems", "Expected asset types to match", {
      actual: mapFacetTypeToString(params.type),
      expected: expectedType
    });
  }
  return {
    type: expectedType,
    assetId: params.assetId,
    name: params.name,
    version: params.version,
    userFacingVersion: params.userFacingVersion
  };
}

/**
 * LocalAssetFields type for local asset fields.
 */
export type LocalAssetFields = {
  keyForPublish: string;
  isPublishable?: boolean;
  isSoftDeleted?: boolean;
  localGuid?: string;
  containingFrame?: unknown;
  mainThumbnailInfo?: unknown;
};

/**
 * AssetParams type for asset parameters.
 */
export type AssetParams = AssetBaseParams & {
  localFields?: LocalAssetFields;
  subscribedFields?: { key: string };
};

/**
 * Returns local asset object if localFields exist, else logs error.
 * @param expectedType - Expected asset type string.
 * @param params - AssetParams object.
 * @returns Local asset object or null.
 */
// $$l5
export function getLocalAsset(expectedType: string, params: AssetParams) {
  if (!params.localFields) {
    logError("design-systems", "Expected localFields on local asset");
    return null;
  }
  return {
    ...createAssetBase(expectedType, params),
    subscriptionStatus: "LOCAL",
    keyForPublish: params.localFields.keyForPublish,
    isPublishable: !!params.localFields.isPublishable,
    isSoftDeleted: !!params.localFields.isSoftDeleted,
    localGuid: params.localFields.localGuid,
    containingFrame: params.localFields.containingFrame,
    mainThumbnailInfo: params.localFields.mainThumbnailInfo
  };
}

/**
 * Returns subscribed asset object if subscribedFields exist, else logs error.
 * @param expectedType - Expected asset type string.
 * @param params - AssetParams object.
 * @returns Subscribed asset object or null.
 */
// $$d4
export function getSubscribedAsset(expectedType: string, params: AssetParams) {
  if (!params.subscribedFields) {
    logError("design-systems", "Expected subscribedFields on subscribed asset");
    return null;
  }
  return {
    ...createAssetBase(expectedType, params),
    subscriptionStatus: "SUBSCRIBED",
    key: params.subscribedFields.key
  };
}

/**
 * Generates canvas URL for library asset.
 * @param assetType - Asset type string.
 * @param assetId - Asset ID string.
 * @param version - Version string.
 * @returns Canvas URL string.
 */
// $$c2
export function getLibraryAssetCanvasUrl(assetType: string, assetId: string, version: string) {
  return `/api/file_proxy/library_asset/${assetType}/${assetId}/canvas?ver=${version}`;
}

/**
 * Generates thumbnail URL for library asset.
 * @param assetType - Asset type string.
 * @param assetId - Asset ID string.
 * @param version - Version string.
 * @returns Thumbnail URL string.
 */
// $$u1
export function getLibraryAssetThumbnailUrl(assetType: string, assetId: string, version: string) {
  return `/library/asset/${assetType}/${assetId}/thumbnail?ver=${version}`;
}

// p
const emptyObjectSchema = z.object({});

// m
const containingFrameSchema = z.object({
  backgroundColor: z.string().nullable().default(null),
  pageName: z.string().nullable().default(null),
  pageId: z.string().nullable().default(null),
  name: z.string().nullable().default(null),
  nodeId: z.string().nullable().default(null),
  sortPosition: z.string().nullable().default(null),
  containingStateGroup: emptyObjectSchema.nullable().default(null)
});

/**
 * Returns a Zod schema for a library asset.
 * @param assetType - Asset type string.
 * @param extraSchema - Additional Zod schema to merge.
 * @returns Zod schema.
 */
// $$h0
export function getLibraryAssetSchema(assetType: string, extraSchema = z.object({})) {
  return z.object({
    asset_type: z.literal(assetType),
    name: z.string(),
    version: z.string(),
    user_facing_version: z.string(),
    library_key: z.string(),
    key: z.string(),
    node_id: z.string(),
    canvas_url: z.string(),
    thumbnail_url: z.string().nullable(),
    checkpoint_id: z.string(),
    containing_frame: containingFrameSchema,
    main_node_width: z.number(),
    main_node_height: z.number(),
    updated_at: z.coerce.date(),
    code_preset_metadata: z.object({
      preset_name: z.string(),
      preset_icon: z.nativeEnum(FAnimationEffectType).nullable(),
      applicable_node_types: z.array(z.nativeEnum(FNodeType)).nullable(),
      category: z.nativeEnum(FAnimationTriggerType).nullable()
    }).nullable()
  }).merge(extraSchema);
}

/**
 * Returns a Zod schema for a subscribed asset.
 * @param assetType - Asset type string.
 * @param extraSchema - Additional Zod schema to merge.
 * @returns Zod schema.
 */
// $$g3
export function getSubscribedAssetSchema(assetType: string, extraSchema = z.object({})) {
  return z.object({
    asset_type: z.literal(assetType),
    key: z.string(),
    version: z.string(),
    user_facing_version: z.string(),
    node_id: z.string(),
    library_key: z.string(),
    file_key: z.string(),
    file_checkpoint_id: z.string(),
    checkpoint_id: z.string(),
    canvas_url: z.string(),
    containing_frame: containingFrameSchema,
    main_node_width: z.number(),
    main_node_height: z.number(),
    updated_at: z.coerce.date(),
    created_at: z.coerce.date()
  }).merge(extraSchema);
}

// Exported names refactored to match new function names
export const $B = getLibraryAssetSchema;
export const EU = getLibraryAssetThumbnailUrl;
export const IV = getLibraryAssetCanvasUrl;
export const Jw = getSubscribedAssetSchema;
export const nV = getSubscribedAsset;
export const oz = getLocalAsset;
