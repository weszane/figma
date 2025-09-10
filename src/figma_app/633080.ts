import { z } from 'zod'
import { StyleDefinitionSchema } from '../905/96987'
import { getI18nString } from '../905/303541'
import { FileKeySourceEnum } from '../905/412913'
import { PrimaryWorkflowEnum } from '../905/497152'
import { ContainingFrameSchema } from '../905/713325'
import { createInvalidString } from '../905/859698'
import { VariableSetIdCompatHandler } from '../figma_app/243058'
import { coerce } from '../figma_app/709165'

// Constants
/** @original $$p28 */
export const NO_TEAM = 'NO_TEAM'
/** @original $$h14 */
export const NO_CONTAINING_STATE_GROUP_ID = 'NO_CONTAINING_STATE_GROUP_ID'
/** @original $$m40 */
export const DEFAULT_LIBRARY_LIMIT = 200
/** @original $$Y33 */
export const LIBRARY_PREFERENCES_MODAL = 'LibraryPreferencesModal'
/** @original $$$6 */
export const SHARED_FONTS_MODAL = 'SharedFontsModal'
/** @original $$X27 */
export const PRIMARY_WORKFLOW_TYPES = [PrimaryWorkflowEnum.COMPONENT, PrimaryWorkflowEnum.STATE_GROUP, PrimaryWorkflowEnum.MODULE]
/** @original $$q16 */
export const COMMUNITY_LIBRARY_FILE = 'COMMUNITY_LIBRARY_FILE'

// Helper Functions
/** @original $$_20 */
export const getDraftsSidebarString = () => getI18nString('sidebar.drafts')

// Schemas
/** @original f */
const StyleMetaSchema = z.object({
  style_thumbnail: StyleDefinitionSchema.nullable().optional(),
})

/**
 * Creates a file key schema with source.
 * @param defaultSource
 * @returns Zod schema
 * @original $$E26
 */
export function createFileKeySchema(defaultSource: FileKeySourceEnum) {
  return z.object({
    file_key: z.string(),
    file_key_source: z.nativeEnum(FileKeySourceEnum).default(defaultSource),
  })
}

/** @original y */
const LibrarySchema = z.object({
  type: z.nativeEnum(PrimaryWorkflowEnum),
  node_id: z.string(),
  name: z.string(),
  library_key: z.string().transform(e => e),
  isLocal: z.boolean().optional(),
  thumbnail_url: z.string().optional(),
  id: z.string().optional(),
  unpublished_at: z.string().optional().nullable(),
  checkpoint_id: z.string().optional(),
  canvas_url: z.string().optional(),
  updated_at: z.string().optional(),
  description: z.string().optional(),
  description_rt: z.string().optional(),
  meta: StyleMetaSchema.optional(),
  team_id: z.string().optional().nullable(),
  hub_file_id: z.string().optional().nullable(),
  ai_score: z.number().optional().nullable(),
  lexical_score: z.number().optional().nullable(),
  fuse_score: z.number().optional().nullable(),
  server_score: z.number().optional().nullable(),
})

/** @original $$w0 */
export const ComponentSchema = LibrarySchema.extend({
  type: z.literal(PrimaryWorkflowEnum.COMPONENT),
  containing_frame: ContainingFrameSchema.optional(),
  publishing_client_version: z.number().optional(),
  component_key: z.string().transform(e => createInvalidString(e)).optional(),
  min_node_width: z.number().optional(),
  min_node_height: z.number().optional(),
  content_hash: z.string().transform(e => createInvalidString(e)).optional(),
  userFacingVersion: z.string().transform(e => createInvalidString(e)),
  destination_key: z.string().transform(e => createInvalidString(e)).optional(),
  sort_position: z.string().nullable().optional(),
  has_video: z.boolean().nullable().optional(),
})

/** @original L */
const StateGroupSchema = LibrarySchema.extend({
  type: z.literal(PrimaryWorkflowEnum.STATE_GROUP),
  containing_frame: ContainingFrameSchema,
  fill_color: coerce.undefined(z.string().optional()),
  default_state_key: z.string(),
  destination_key: z.string().transform(e => createInvalidString(e)).optional(),
  version: z.string().transform(e => createInvalidString(e)),
  userFacingVersion: z.string().transform(e => createInvalidString(e)),
})

/** @original $$P23 */
export const StyleSchema = LibrarySchema.extend({
  type: z.literal(PrimaryWorkflowEnum.STYLE),
  key: z.string().transform(e => createInvalidString(e)),
  style_type: z.string().transform(e => e),
  sort_position: z.string().optional(),
  is_soft_deleted: z.boolean().optional(),
  content_hash: z.string().transform(e => createInvalidString(e)).optional(),
  userFacingVersion: z.string().transform(e => createInvalidString(e)),
  destination_key: z.string().nullish().transform(e => createInvalidString(e ?? void 0)),
})

/** @original $$D11 */
export const StateGroupDetailSchema = StateGroupSchema.extend({
  key: z.string().transform(e => createInvalidString(e)),
  min_node_width: z.number(),
  min_node_height: z.number(),
})

// Enums
/** @original $$g12 */
export enum PublishStatusEnum {
  UNPUBLISH = 'unpublish',
  PUBLISH = 'publish',
}
/** @original $$S34 */
export enum LibraryAgeEnum {
  THIRTY_DAYS = '30',
  SIXTY_DAYS = '60',
  NINETY_DAYS = '90',
  YEAR = '365',
}
/** @original $$G39 */
export enum LibraryItemTypeEnum {
  STYLE = 'style',
  VARIABLE = 'variable',
}
/** @original $$V5 */
export enum StagingStatusEnum {
  NEW = 'NEW',
  CURRENT = 'CURRENT',
  CHANGED = 'CHANGED',
  DELETED = 'DELETED',
  NOT_STAGED = 'NOT_STAGED',
}
/** @original $$H1 */
export enum SubscriptionStatusEnum {
  LOCAL = 'LOCAL',
  SUBSCRIBED_WITH_LIBRARY = 'SUBSCRIBED_WITH_LIBRARY',
  SUBSCRIBED_WITHOUT_LIBRARY = 'SUBSCRIBED_WITHOUT_LIBRARY',
}
/** @original $$z18 */
export enum LibraryPublishStatusEnum {
  NONE = 0,
  ASSEMBLING_COMPONENTS = 1,
  UPLOADING = 2,
}
/** @original $$W24 */
export enum LibraryTabEnum {
  LIBRARIES = 0,
  FONTS = 1,
  UPDATES = 2,
  TEAM_LIBRARIES = 3,
  RECOMMENDED = 4,
}
/** @original $$K36 */
export enum LibrarySourceEnum {
  LIBRARY = 0,
  HUBFILE = 1,
}

// Initial State
/** @original $$v41 */
export const initialLibraryStats = {
  totalLibraries: 0,
  totalComponents: 0,
  totalStateGroups: 0,
  totalStyles: 0,
  totalVariableCollections: 0,
  totalVariables: 0,
  totalModuleAssets: 0,
  teamsWithLibraries: 0,
  files: [],
  libraryThumbnailByLibraryKey: {},
}

// Utility Functions
/**
 * Checks if the library type is 'team'.
 * @param e
 * @returns boolean
 * @original $$b13
 */
export function isTeamLibrary(e: { library_type: string }) {
  return e.library_type === 'team'
}

/**
 * Checks if the library type is 'community'.
 * @param e
 * @returns boolean
 * @original $$T42
 */
export function isCommunityLibrary(e: { library_type: string }) {
  return e.library_type === 'community'
}

/**
 * Checks if the object is a community library file.
 * @param e
 * @returns boolean
 * @original $$I31
 */
export function isCommunityLibraryFile(e: any) {
  return e != null && 'type' in e && e.type === COMMUNITY_LIBRARY_FILE
}

/**
 * Checks if the object has a component key.
 * @param e
 * @returns boolean
 * @original $$A10
 */
export function hasComponentKey(e: any) {
  return void 0 !== e.component_key
}

/**
 * Checks if the subscription status is 'LOCAL'.
 * @param e
 * @returns boolean
 * @original $$k37
 */
export function isLocalSubscription(e: { subscriptionStatus: string }) {
  return e.subscriptionStatus === SubscriptionStatusEnum.LOCAL
}

/**
 * Checks if the subscription status is 'LOCAL'.
 * @param e
 * @returns boolean
 * @original $$M21
 */
export function isLocalSubscriptionStatus(e: { subscriptionStatus: string }) {
  return e.subscriptionStatus === SubscriptionStatusEnum.LOCAL
}

/**
 * Checks if every item in array has local subscription.
 * @param e
 * @returns boolean
 * @original $$F7
 */
export function everyLocalSubscription(e: Array<{ subscriptionStatus: string }>) {
  return e.every(isLocalSubscription)
}

/**
 * Checks if subscription status is 'LOCAL' or 'SUBSCRIBED'.
 * @param e
 * @returns boolean
 * @original $$j25
 */
export function isLocalOrSubscribed(e: { subscriptionStatus: string }) {
  return (
    e.subscriptionStatus === SubscriptionStatusEnum.LOCAL
    || e.subscriptionStatus === 'SUBSCRIBED'
  )
}

/**
 * Checks if object is an extension.
 * @param e
 * @returns boolean
 * @original $$U8
 */
export function isExtension(e: { isExtension?: boolean }) {
  return !!e.isExtension
}

/**
 * Checks if object has a valid assetId.
 * @param e
 * @returns boolean
 * @original $$B3
 */
export function hasAssetId(e: any) {
  return 'assetId' in e && !!e.assetId
}

/**
 * Returns variable override info for local subscription.
 * @param e
 * @returns object
 * @original $$Z22
 */
export function getLocalVariableOverride(e: { commonInfo: any }) {
  return {
    ...extractCommonInfo(e.commonInfo),
    type: PrimaryWorkflowEnum.VARIABLE_OVERRIDE,
    subscriptionStatus: SubscriptionStatusEnum.LOCAL,
    isPublishable: false,
  }
}

/**
 * Returns variable override info for subscribed.
 * @param e
 * @returns object
 * @original $$Q9
 */
export function getSubscribedVariableOverride(e: { commonInfo: any, libraryKey: string, key: string }) {
  return {
    ...extractCommonInfo(e.commonInfo),
    type: PrimaryWorkflowEnum.VARIABLE_OVERRIDE,
    subscriptionStatus: 'SUBSCRIBED',
    library_key: e.libraryKey,
    key: createInvalidString(e.key),
    isPublishable: false,
  }
}

/**
 * Checks if library is published and has assets.
 * @param e
 * @returns boolean
 * @original $$ee29
 */
export function isPublishedLibraryWithAssets(e: any) {
  return (
    !!e
    && e.library_publish_status === 'published'
    && (e.num_components > 0
      || e.num_state_groups > 0
      || e.num_styles > 0
      || e.num_variable_collections > 0
      || e.num_variables > 0
      || e.num_module_assets > 0
      || e.num_library_assets > 0)
  )
}

/**
 * Checks if library is published team library.
 * @param e
 * @returns boolean
 * @original $$et15
 */
export function isPublishedTeamLibrary(e: any) {
  return isPublishedLibraryWithAssets(e) && e.library_type === 'team'
}

/**
 * Extracts common info from variable override.
 * @param e
 * @returns object
 * @original J
 */
function extractCommonInfo(e: any) {
  return {
    name: e.name,
    codeSyntax: e.codeSyntax,
    node_id: e.id,
    version: e.version,
    userFacingVersion: e.userFacingVersion,
    variableSetId: e.variableSetId,
    overriddenVariableID: e.overriddenVariableId,
    rootVariableKey: e.rootVariableKey,
    overrideValues: e.overrideValues,
  }
}

/**
 * Returns variable info for local subscription.
 * @param e
 * @returns object
 * @original $$er35
 */
export function getLocalVariableInfo(e: any) {
  return {
    type: PrimaryWorkflowEnum.VARIABLE,
    subscriptionStatus: SubscriptionStatusEnum.LOCAL,
    variableSetId: e.setID,
    node_id: e.id,
    sortPosition: e.sortPosition,
    resolvedType: e.resolvedType,
    version: createInvalidString(e.version),
    userFacingVersion: createInvalidString(e.userFacingVersion),
    modeValues: e.modeValues,
    description: e.descriptionPlain,
    name: e.name,
    isPublishable: e.isPublishable,
    isSoftDeleted: e.isSoftDeleted,
    scopes: e.scopes,
    codeSyntax: e.codeSyntax,
    keyForPublish: createInvalidString(e.keyForPublish),
  }
}

/**
 * Returns variable info for subscribed.
 * @param e
 * @returns object
 * @original $$en30
 */
export function getSubscribedVariableInfo(e: any) {
  return {
    type: PrimaryWorkflowEnum.VARIABLE,
    subscriptionStatus: 'SUBSCRIBED',
    variableSetId: e.setID,
    node_id: e.id,
    sortPosition: e.sortPosition,
    resolvedType: e.resolvedType,
    version: createInvalidString(e.version),
    userFacingVersion: createInvalidString(e.userFacingVersion),
    modeValues: e.modeValues,
    description: e.descriptionPlain,
    name: e.name,
    key: createInvalidString(e.key),
    library_key: e.libraryKey,
    scopes: e.scopes,
    codeSyntax: e.codeSyntax,
    isSoftDeleted: e.isSoftDeleted,
    pageIds: e.pageIds,
  }
}

/**
 * Returns variable set info for local subscription.
 * @param e
 * @returns object
 * @original $$ei4
 */
export function getLocalVariableSetInfo(e: any) {
  const base = {
    type: PrimaryWorkflowEnum.VARIABLE_SET,
    subscriptionStatus: SubscriptionStatusEnum.LOCAL,
    node_id: e.id,
    version: createInvalidString(e.version),
    userFacingVersion: createInvalidString(e.userFacingVersion),
    modes: e.modes,
    name: e.name,
    isPublishable: e.isPublishable,
    defaultModeID: e.defaultModeID,
    isSoftDeleted: e.isSoftDeleted,
    variableSetError: e.variableSetError,
    isExtendable: e.isExtendable,
    keyForPublish: e.keyForPublish,
    sortPosition: e.sortPosition,
  }
  return e.backingVariableSetId
    ? {
      ...base,
      backingVariableSetId: e.backingVariableSetId,
      rootVariableSetKey: e.rootVariableSetKey ?? createInvalidString.INVALID,
      rootVariableSetId: e.rootVariableSetId ?? VariableSetIdCompatHandler.INVALID,
      variableSetExtensionChain: e.variableSetExtensionChain,
      isExtension: true,
    }
    : {
      ...base,
      isExtension: false,
    }
}

/**
 * Returns variable set info for subscribed.
 * @param e
 * @returns object
 * @original $$ea19
 */
export function getSubscribedVariableSetInfo(e: any) {
  const base = {
    type: PrimaryWorkflowEnum.VARIABLE_SET,
    subscriptionStatus: 'SUBSCRIBED',
    node_id: e.id,
    version: createInvalidString(e.version),
    userFacingVersion: createInvalidString(e.userFacingVersion),
    modes: e.modes,
    name: e.name,
    defaultModeID: e.defaultModeID,
    key: createInvalidString(e.key),
    library_key: e.libraryKey,
    pageIds: e.pageIds,
    isExtendable: e.isExtendable,
    sortPosition: e.sortPosition,
  }
  return e.backingVariableSetId
    ? {
      ...base,
      backingVariableSetId: e.backingVariableSetId,
      rootVariableSetId: e.rootVariableSetId ?? VariableSetIdCompatHandler.INVALID,
      rootVariableSetKey: e.rootVariableSetKey ?? createInvalidString.INVALID,
      isExtension: true,
      variableSetExtensionChain: e.variableSetExtensionChain,
    }
    : {
      ...base,
      isExtension: false,
    }
}

/**
 * Returns style info if styleKey exists.
 * @param e
 * @returns object|null
 * @original $$es38
 */
export function getStyleInfo(e: any) {
  return e && e.styleKey
    ? {
      key: e.styleKey,
      style_type: e.styleType,
      type: PrimaryWorkflowEnum.STYLE,
      node_id: e.guid,
      name: e.name,
      isLocal: e.isLocalStyle,
      content_hash: e.styleVersionHash ?? undefined,
      userFacingVersion: createInvalidString(e.userFacingVersion),
      library_key: e.sourceLibraryKey,
    }
    : null
}

/**
 * Returns publish key depending on subscription status.
 * @param e
 * @returns string
 * @original $$eo2
 */
export function getPublishKey(e: { subscriptionStatus: string, keyForPublish?: string, key?: string }) {
  return e.subscriptionStatus === SubscriptionStatusEnum.LOCAL ? e.keyForPublish : e.key
}

// Exported aliases for backward compatibility
export const $L = ComponentSchema
export const AT = SubscriptionStatusEnum
export const Av = getPublishKey
export const Do = hasAssetId
export const Dt = getLocalVariableSetInfo
export const E8 = StagingStatusEnum
export const EJ = SHARED_FONTS_MODAL
export const Fq = everyLocalSubscription
export const GI = isExtension
export const Hr = getSubscribedVariableOverride
export const IV = hasComponentKey
export const Ko = StateGroupDetailSchema
export const M$ = PublishStatusEnum
export const Nf = isTeamLibrary
export const Nv = NO_CONTAINING_STATE_GROUP_ID
export const P2 = isPublishedTeamLibrary
export const PP = COMMUNITY_LIBRARY_FILE
export const Qx = LibraryPublishStatusEnum
export const Rn = getSubscribedVariableSetInfo
export const Tb = getDraftsSidebarString
export const U$ = isLocalSubscriptionStatus
export const Vk = getLocalVariableOverride
export const Vp = StyleSchema
export const Wv = LibraryTabEnum
export const XN = isLocalOrSubscribed
export const XS = createFileKeySchema
export const YJ = PRIMARY_WORKFLOW_TYPES
export const Yu = NO_TEAM
export const ZA = isPublishedLibraryWithAssets
export const ZI = getSubscribedVariableInfo
export const bK = isCommunityLibraryFile
export const cI = z.string().transform(e => createInvalidString(e)) // $$x32
export const cX = LIBRARY_PREFERENCES_MODAL
export const jg = LibraryAgeEnum
export const kz = getLocalVariableInfo
export const o = LibrarySourceEnum
export const s5 = isLocalSubscription
export const sb = getStyleInfo
export const ub = LibraryItemTypeEnum
export const v$ = DEFAULT_LIBRARY_LIMIT
export const wg = initialLibraryStats
export const xA = isCommunityLibrary

export { PrimaryWorkflowEnum }
