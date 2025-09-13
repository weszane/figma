import { TrackTagsMapper } from '../905/190310'
import { parseMeta } from '../905/405710'
import { FileKeySourceEnum } from '../905/412913'
import { getResourceDataOrFallback } from '../905/419236'
import { convertGuidToString, convertRefToString } from '../905/537777'
import { getFeatureFlags } from '../905/601108'

import { createVariableIdStringFromRef, getVariableIdStringFromGuid } from '../905/805904'
import { createInvalidString } from '../905/859698'
import { defaultSessionLocalID, parseSessionLocalID } from '../905/871411'
import { FPermissionLevelType, FPlanFeatureType, FResourceCategoryType, FViewPermissionType } from '../figma_app/191312'
import { getPropertyScopes } from '../figma_app/198712'
import { throwError } from '../figma_app/465776'
import { FileExportSetting } from '../figma_app/482728'
import { PrimaryWorkflowEnum } from '../figma_app/633080'
import { TemplateType, VariableResolvedDataType } from '../figma_app/763686'
import { camelToSnakeWithLeading, encodeUri } from '../figma_app/930338'

/**
 * Converts an object's keys from camelCase to snake_case with leading underscores, and merges with an optional object.
 * Original: $$b12
 */
export function convertCamelToSnakeWithLeading(e: any, t?: Record<string, any>): Record<string, any> | null {
  if (e === null)
    return null
  const r: Record<string, any> = {}
  for (const key in e) r[camelToSnakeWithLeading(key)] = e[key]
  return Object.assign(r, t || {})
}

/**
 * Maps file properties to a structured object for Sinatra API.
 * Original: $$T5
 */
export function mapFileProperties(e: any, t: string): Record<string, any> | null {
  const r: Record<string, any> = {}
  if (e.link_access)
    r.linkAccess = e.link_access
  if ('proto_link_access' in e)
    r.protoLinkAccess = e.proto_link_access
  if ('has_file_link_password' in e)
    r.hasFileLinkPassword = e.has_file_link_password
  if ('has_proto_link_password' in e)
    r.hasProtoLinkPassword = e.has_proto_link_password
  if ('org_audience' in e)
    r.orgAudience = e.org_audience
  if ('org_browsable' in e)
    r.orgBrowsable = e.org_browsable
  if ('viewer_export_restricted' in e)
    r.viewerExportRestrictedAt = e.viewer_export_restricted ? new Date() : null
  if (e.name) {
    r._name = e.name
    r.name = e.name
  }
  return r && t
    ? {
        File: {
          [t]: r,
        },
      }
    : null
}

/**
 * Maps repo properties to a structured object for Sinatra API.
 * Original: I
 */
function mapRepoProperties(e: any): Record<string, any> | null {
  const t: Record<string, any> = {}
  if (e.link_access)
    t.linkAccess = e.link_access
  if ('proto_link_access' in e)
    t.protoLinkAccess = e.proto_link_access
  if ('org_audience' in e)
    t.orgAudience = e.org_audience
  if ('org_browsable' in e)
    t.orgBrowsable = e.org_browsable
  if (e.name)
    t.name = e.name
  return t && e.id
    ? {
        Repo: {
          [e.id]: t,
        },
      }
    : null
}

/**
 * Maps file and repo properties for Sinatra API.
 * Original: $$S15
 */
export function mapFileAndRepoProperties(e: any): Record<string, any> | null {
  if (!e.id)
    return null
  const t = mapRepoProperties(e)
  return t ? (e.default_file_key && Object.assign(t, mapFileProperties(e, e.default_file_key)), t) : null
}

/**
 * Maps file link expiration config for optimistic updates.
 * Original: $$v8
 */
export function mapFileLinkExpirationConfigOptimistic(e: any, t: string, r: any): Record<string, any> | null {
  const n = e.default_file_key !== undefined ? e.default_file_key : e.key
  return n && t === 'optimistic' && e.expires_at
    ? {
        FigFileLinkExpirationConfig: {
          [`optimistic-id-${n}`]: {
            figFileKey: n,
            expiresAt: new Date(e.expires_at),
            accessReverted: false,
            updatedAt: new Date(),
            prevPrivateLinkAccess: FPermissionLevelType.ORG_VIEW,
            prevPrivateProtoLinkAccess: null,
            prevOrgBrowsable: null,
            setByUserId: r?.id || null,
            setByUser: r,
          },
        },
      }
    : null
}

/**
 * Maps file link expiration config for non-optimistic updates.
 * Original: $$A30
 */
export function mapFileLinkExpirationConfig(e: any, t: string, r: any): Record<string, any> | null {
  const n
    = e.link_access === FPermissionLevelType.VIEW
      || e.link_access === FPermissionLevelType.EDIT
      || e.proto_link_access === FViewPermissionType.VIEW
  return t && t !== 'optimistic' && (!n || 'expires_at' in e)
    ? {
        FigFileLinkExpirationConfig: {
          [t]: {
            expiresAt: e.expires_at ? new Date(e.expires_at) : null,
            accessReverted: !e.expires_at,
            setByUserId: r?.id || null,
            setByUser: r,
          },
        },
      }
    : null
}

/**
 * Maps file summary properties.
 * Original: $$x24
 */
export function mapFileSummary(e: any): Record<string, any> {
  return {
    key: e.key,
    name: e.name,
    file_repo_id: e.file_repo_id,
    source_file_key: e.source_file_key,
    editor_type: e.editor_type,
    folder_id: e.folder_id,
    team_id: e.team_id,
    parent_org_id: e.parent_org_id,
    has_proto_link_password: e.has_proto_link_password,
    proto_link_access: e.proto_link_access,
    created_at: e.created_at,
    trashed_at: e.trashed_at,
    prototype_url: e.prototype_url,
  }
}

/**
 * Generates a proto link URL.
 * Original: $$N20
 */
export function generateProtoLinkUrl(e: string, t?: string, r?: string): string {
  const n = `${window.location.origin}/proto/${e}/${encodeUri(t || '')}`
  return r != null ? `${n}?node-id=${encodeUri(r)}` : n
}

/**
 * Maps user properties.
 * Original: $$C11
 */
export function mapUserProperties(e: any): Record<string, any> {
  return {
    id: e.id,
    handle: e.handle,
    img_url: e.imgUrl,
    email: e.email || undefined,
    name: e.name || undefined,
  }
}

/**
 * Maps resource access properties.
 * Original: $$w21
 */
export function mapResourceAccess(e: any, t: any, r: any, n: any): Record<string, any> {
  const i: Record<string, any> = {
    id: e.id,
    resource_type: e.resourceType,
    resource_id_or_key: e.resourceId,
    level: e.level,
    created_at: e.createdAt.toString(),
    updated_at: e.updatedAt.toString(),
    pending: e.pending,
    org_user: r
      ? {
          id: r.id,
          design_paid_status: r.accountType,
          whiteboard_paid_status: r.whiteboardPaidStatus || FPlanFeatureType.STARTER,
          user_id: r.userId,
          permission: r.permission,
          updated_at: r.updatedAt.toString(),
        }
      : undefined,
    team_user: n
      ? {
          id: n.id,
          design_paid_status: n.designPaidStatus,
          whiteboard_paid_status: n.whiteboardPaidStatus,
          user_id: n.userId,
          team_id: n.teamId,
        }
      : undefined,
  }
  return e.pending
    ? {
        ...i,
        pending: true,
        user_id: null,
        user: {
          email: e.pendingEmail || '',
        },
      }
    : {
        ...i,
        pending: false,
        user_id: t.id,
        user: t,
      }
}

/**
 * Maps repo summary properties.
 * Original: $$O16
 */
export function mapRepoSummary(e: any): Record<string, any> {
  return {
    id: e.id,
    name: e.name,
    folder_id: e.folderId,
    default_file_key: e.defaultFileKey,
    deleted_at: e.deletedAt && e.deletedAt.toString(),
    trashed_at: e.trashedAt && e.trashedAt.toString(),
    created_at: e.createdAt.toString(),
    updated_at: e.updatedAt.toString(),
    team_id: e.teamId,
    link_access: e.linkAccess,
    proto_link_access: e.protoLinkAccess,
    has_file_link_password: e.hasFileLinkPassword,
    has_proto_link_password: e.hasProtoLinkPassword,
    org_audience: e.orgAudience,
    org_browsable: e.orgBrowsable,
    parent_org_id: e.parentOrgId,
    has_active_branches: e.hasActiveBranches,
  }
}

/**
 * Maps file view properties.
 * Original: $$R14
 */
export function mapFileView(e: any, t: any): Record<string, any> {
  return {
    id: e.id,
    viewed_on: e.viewedOn.toString(),
    user_id: e.user.id,
    file_key: e.fileKey,
    user: t,
  }
}

/**
 * Converts an array of objects to a map keyed by id.
 * Original: $$L9
 */
export function arrayToIdMap(e: any[]): Record<string, any> {
  const t: Record<string, any> = {}
  e.forEach(item => (t[item.id] = item))
  return t
}

/**
 * Maps resource category type to role string.
 * Original: $$P18
 */
export function mapResourceCategoryToRole(e: FResourceCategoryType): string | undefined {
  switch (e) {
    case FResourceCategoryType.FILE:
      return 'FileRole'
    case FResourceCategoryType.FILE_REPO:
      return 'RepoRole'
    case FResourceCategoryType.FOLDER:
      return 'ProjectRole'
    case FResourceCategoryType.TEAM:
      return 'TeamRole'
  }
}

/**
 * Maps frame properties.
 * Original: $$D10
 */
export function mapFrameProperties(e: any): Record<string, any> | undefined {
  if (e != null) {
    return {
      backgroundColor: e.backgroundColor ?? undefined,
      containingStateGroup: 'containingStateGroup' in e
        ? (function (group: any) {
            if (group != null) {
              return {
                name: group.name ?? undefined,
                nodeId: group.nodeId ?? undefined,
              }
            }
          })(e.containingStateGroup)
        : undefined,
      name: e.name ?? undefined,
      nodeId: e.nodeId ?? undefined,
      pageId: e.pageId ?? undefined,
      pageName: e.pageName ?? undefined,
      sortPosition: getResourceDataOrFallback(e.sortPosition, null),
    }
  }
}

/**
 * Maps module properties.
 * Original: k
 */
function mapModuleProperties(e: any): Record<string, any> {
  return {
    subscriptionStatus: 'LIBRARY',
    type: PrimaryWorkflowEnum.MODULE,
    node_id: e.nodeId,
    key: e.key,
    version: e.version,
    userFacingVersion: e.userFacingVersion === 'INVALID' ? e.version : e.userFacingVersion,
    canvas_url: `/api/file_proxy/module_asset/${e.key}/canvas?ver=${e.checkpoint.key}`,
    containing_frame: mapFrameProperties(e.containingFrame),
    thumbnail_url: `/module_asset/${e.key}/thumbnail?ver=${e.checkpoint.key}`,
    moduleSource: mapTemplateType(e.moduleSource),
    width: parseInt(e.width),
    height: parseInt(e.height),
  }
}

/**
 * Maps common resource properties.
 * Original: M
 */
function mapCommonResourceProperties(e: any, t: any): Record<string, any> {
  return {
    description: e.description ?? undefined,
    description_rt: e.description_rt ?? undefined,
    library_key: t.file.libraryKey,
    id: e.id,
    name: e.name,
    unpublished_at: e.unpublishedAt?.toISOString() ?? null,
    updated_at: e.updatedAt?.toISOString() ?? null,
    ...(t.type === 'hubFile'
      ? {
          file_key: t.file.id,
          file_key_source: FileKeySourceEnum.LIVEGRAPH_DATA_HUB_FILE,
          team_id: null,
        }
      : {
          file_key: t.file.key,
          file_key_source: FileKeySourceEnum.LIVEGRAPH_DATA,
          team_id: t.file.teamId,
        }),
  }
}

/**
 * Maps component properties.
 * Original: $$F6
 */
export function mapComponentProperties(e: any, t: any): Record<string, any> {
  return {
    ...mapCommonResourceProperties(e, t),
    type: PrimaryWorkflowEnum.COMPONENT,
    node_id: e.nodeId,
    canvas_url: `/component/${e.componentKey}/canvas?ver=${e.contentHash}`,
    component_key: e.componentKey,
    containing_frame: mapFrameProperties(e.containingFrame),
    content_hash: e.contentHash,
    userFacingVersion: e.userFacingVersion === 'INVALID' ? e.contentHash : e.userFacingVersion,
    min_node_height: e.minNodeHeight ?? 0,
    min_node_width: e.minNodeWidth ?? 0,
    thumbnail_url: `/component/${e.componentKey}/thumbnail?ver=${e.contentHash}`,
    sort_position: getResourceDataOrFallback(e.sortPosition, null),
    has_video: getResourceDataOrFallback(e.hasVideo, null),
  }
}

/**
 * Maps state group properties.
 * Original: $$j7
 */
export function mapStateGroupProperties(e: any, t: any): Record<string, any> {
  return {
    ...mapCommonResourceProperties(e, t),
    type: PrimaryWorkflowEnum.STATE_GROUP,
    node_id: e.nodeId,
    canvas_url: `/state_group/${e.key}/canvas?ver=${e.version}`,
    containing_frame: mapFrameProperties(e.containingFrame),
    default_state_key: e.defaultStateKey,
    key: e.key,
    min_node_height: e.minNodeHeight ?? 0,
    min_node_width: e.minNodeWidth ?? 0,
    version: e.version,
    userFacingVersion: e.userFacingVersion === 'INVALID' ? e.version : e.userFacingVersion,
    thumbnail_url: `/state_group/${e.key}/thumbnail?ver=${e.version}`,
    fill_color: e.fillColor ?? undefined,
  }
}

/**
 * Maps style properties.
 * Original: $$U3
 */
export function mapStyleProperties(e: any, t: any): Record<string, any> {
  return {
    ...mapCommonResourceProperties(e, t),
    type: PrimaryWorkflowEnum.STYLE,
    node_id: e.nodeId,
    canvas_url: `/style/${e.key}/canvas?ver=${e.checkpoint.key}`,
    checkpoint_id: e.checkpoint?.key,
    content_hash: createInvalidString(e.contentHash),
    userFacingVersion: createInvalidString(e.userFacingVersion) === createInvalidString.INVALID ? createInvalidString(e.contentHash) : createInvalidString(e.userFacingVersion),
    key: e.key,
    meta: e.meta ? parseMeta(e.meta) : undefined,
    sort_position: e.sortPosition ?? '',
    style_type: e.styleType,
    thumbnail_url: `/style/${e.key}/thumbnail?ver=${e.checkpoint.key}`,
  }
}

/**
 * Maps moved file properties.
 * Original: $$B26
 */
export function mapMovedFileProperties(e: any): Record<string, any> | undefined {
  return e.movedByFigma
    ? {
        key: e.key,
        version: createInvalidString(e.contentHash),
        userFacingVersion: e.userFacingVersion === createInvalidString.INVALID ? createInvalidString(e.contentHash) : createInvalidString(e.userFacingVersion),
      }
    : undefined
}

/**
 * Maps variable resolved data type.
 * Original: $$G22
 */
export function mapVariableResolvedDataType(e: string): VariableResolvedDataType {
  switch (e) {
    case 'BOOLEAN':
      return VariableResolvedDataType.BOOLEAN
    case 'COLOR':
      return VariableResolvedDataType.COLOR
    case 'FLOAT':
      return VariableResolvedDataType.FLOAT
    case 'MAP':
      return VariableResolvedDataType.MAP
    case 'STRING':
      return VariableResolvedDataType.STRING
    case 'SYMBOL_ID':
      return VariableResolvedDataType.SYMBOL_ID
    case 'TEXT_DATA':
      return VariableResolvedDataType.TEXT_DATA
    default:
      throwError(`Unhandled livegraph type: ${e}`)
  }
}

/**
 * Generates variable set canvas URL.
 * Original: V
 */
function generateVariableSetCanvasUrl(e: string, t: string): string {
  return `/variable_set/${e}/canvas?ver=${t}`
}

/**
 * Maps variable properties.
 * Original: $$H1
 */
export function mapVariableProperties(e: any, t: any, r: boolean): Record<string, any> {
  let n = ''
  let a = ''
  if (r) {
    n = getVariableIdStringFromGuid(parseSessionLocalID(e.nodeId) ?? defaultSessionLocalID)
    a = convertGuidToString(parseSessionLocalID(e.variableCollection.nodeId) ?? defaultSessionLocalID)
  }
  else {
    n = createVariableIdStringFromRef(e.key, e.version)
    a = convertRefToString(e.variableCollection.key, e.variableCollection.version)
  }
  return {
    ...mapCommonResourceProperties({ ...e, description_rt: null, thumbnailUrl: null }, t),
    subscriptionStatus: 'LIBRARY',
    type: PrimaryWorkflowEnum.VARIABLE,
    node_id: n,
    variableSetId: a,
    variableCollectionKey: e.variableCollection.key,
    resolvedType: mapVariableResolvedDataType(e.variableType),
    version: e.version,
    userFacingVersion: e.userFacingVersion === 'INVALID' ? e.version : e.userFacingVersion,
    sortPosition: e.sortPosition,
    key: e.key,
    scopes: getPropertyScopes(e.scopes),
    canvas_url: generateVariableSetCanvasUrl(e.variableCollection.key, e.variableCollection.checkpoint.key),
  }
}

/**
 * Maps variable set properties.
 * Original: $$z23
 */
export function mapVariableSetProperties(e: any, t: any, r: boolean): Record<string, any> {
  let n = ''
  n = r ? convertGuidToString(parseSessionLocalID(e.nodeId) ?? defaultSessionLocalID) : convertRefToString(e.key, e.version)
  const a: Record<string, any> = {
    ...mapCommonResourceProperties({ ...e, description_rt: null, thumbnailUrl: null }, t),
    subscriptionStatus: 'LIBRARY',
    type: PrimaryWorkflowEnum.VARIABLE_SET,
    node_id: n,
    version: e.version,
    userFacingVersion: e.userFacingVersion === 'INVALID' ? e.version : e.userFacingVersion,
    canvas_url: generateVariableSetCanvasUrl(e.key, e.checkpoint.key),
    key: e.key,
    checkpoint_id: e.checkpoint?.key,
    variableThumbnailsUrl: e.variableThumbnailsUrl ?? undefined,
    modes: (function (modes: any[]) {
      if (modes == null)
        return
      const t: any[] = []
      for (const r of modes) {
        t.push({
          id: r.id,
          name: r.name,
          sortPosition: r.sortPosition,
          parentModeId: getResourceDataOrFallback(r.parentModeId, null),
          parentVariableSetId: getResourceDataOrFallback(r.parentVariableSetId, null),
        })
      }
      return t
    })(e.modes),
    isExtendable: e.isExtendable ?? false,
    sortPosition: getResourceDataOrFallback(e.sortPosition, null),
  }
  const o = getResourceDataOrFallback(e.rootVariableSetKey, null)
  return o
    ? {
        ...a,
        isExtension: true,
        rootVariableSetKey: o,
        variableSetExtensionChain: (getResourceDataOrFallback(e.variableSetExtensionChain, []) ?? []).map(e => e),
      }
    : {
        ...a,
        isExtension: false,
      }
}

/**
 * Maps template properties for Sinatra API.
 * Original: $$W2
 */
export function mapTemplateProperties(e: any, t: any): Record<string, any> {
  return {
    ...{
      description: e.description ?? undefined,
      description_rt: e.description_rt ?? undefined,
      id: e.id,
      name: e.name,
      unpublished_at: e.unpublishedAt?.toISOString() ?? null,
      ...(t.type === 'hubFile'
        ? {
            file_key: t.file.id,
            file_key_source: FileKeySourceEnum.LIVEGRAPH_DATA_HUB_FILE,
            library_key: t.file.libraryKey,
            file_name: t.file.currentHubFileVersion?.name || '',
            publisher_name: t.file.communityPublishers?.[0]?.profile?.name || '',
            isHubFile: true,
          }
        : t.type === 'teamTemplate'
          ? {
              file_key: t.file.key,
              file_key_source: FileKeySourceEnum.LIVEGRAPH_DATA,
              library_key: t.file.libraryKey,
              file_name: t.file.template?.name || '',
              publisher_name: t.file.template?.publishedByUserNullable?.name || '',
              isHubFile: false,
            }
          : {
              file_key: t.file.key,
              file_key_source: FileKeySourceEnum.LIVEGRAPH_DATA,
              library_key: t.file.libraryKey,
              file_name: t.file.name,
              isHubFile: false,
              publisher_name: '',
            }),
    },
    ...mapModuleProperties(e),
  }
}

/**
 * Maps template and module properties for Sinatra API.
 * Original: $$K27
 */
export function mapTemplateAndModuleProperties(e: any, t: any): Record<string, any> {
  return {
    ...mapCommonResourceProperties({ ...e, description_rt: null, thumbnailUrl: null }, t),
    ...mapModuleProperties(e),
  }
}

/**
 * Maps template type string to enum.
 * Original: Y
 */
function mapTemplateType(e: string): TemplateType {
  switch (e) {
    case 'EDITOR_TEMPLATE':
      return TemplateType.EDITOR_TEMPLATE
    case 'SLIDES_TEMPLATE':
      return TemplateType.SLIDES_TEMPLATE
    case 'SITES_TEMPLATE':
      return TemplateType.SITES_TEMPLATE
    case 'LITE_TEMPLATE':
      return TemplateType.LITE_TEMPLATE
    default:
      throwError(`Unhandled livegraph module source: ${e}`)
  }
}

/**
 * Maps project properties.
 * Original: $$$0
 */
export function mapProjectProperties(e: any): Record<string, any> {
  return {
    id: e.id,
    path: e.path,
    orgId: e.org_id ?? null,
    teamId: e.team_id,
    updatedAt: new Date(e.updated_at),
    createdAt: new Date(e.created_at),
    deletedAt: e.deleted_at ? new Date(e.deleted_at) : null,
    trashedAt: e.trashed_at ? new Date(e.trashed_at) : null,
    viewOnlyAt: e.is_view_only ? new Date() : null,
    inviteOnlyAt: e.is_invite_only ? new Date() : null,
    description: e.description,
  }
}

/**
 * Maps project summary properties.
 * Original: $$X13
 */
export function mapProjectSummary(e: any): Record<string, any> {
  const t = getResourceDataOrFallback<any[]>(e.activeProjectResourceConnections) ?? null
  const r = getResourceDataOrFallback<{name: string}>(e.teamV2) ?? null
  return {
    id: e.id,
    path: e.path,
    name: e.name,
    org_id: e.orgId ?? null,
    team_id: e.teamId ?? null,
    updated_at: e.updatedAt ? e.updatedAt.toString() : '',
    created_at: e.createdAt ? e.createdAt.toString() : '',
    deleted_at: e.deletedAt ? e.deletedAt.toString() : null,
    trashed_at: e.trashedAt ? e.trashedAt.toString() : null,
    is_view_only: e.viewOnlyAt != null,
    is_invite_only: e.inviteOnlyAt != null,
    description: e.description,
    is_connected_project: !!t && t.length > 0,
    resource_connection: t && t[0]
      ? {
          hostPlanName: t[0]?.hostPlanName || '',
          connectedPlanName: t[0]?.connectedPlanName || '',
        }
      : null,
    touched_at: e.lastModifiedAt ? e.lastModifiedAt.toString() : undefined,
    is_abandoned_drafts: e.isAbandonedDrafts || false,
    is_subscribed: false,
    settings: null,
    trashed_user_id: null,
    parent_team: r !== null
      ? {
          id: e.teamId ?? '',
          name: r.name,
        }
      : null,
  }
}

/**
 * Maps file export and link controls settings.
 * Original: $$q28
 */
export function mapFileExportAndLinkControls(e: any, t: any, r: any): Record<string, any> | null {
  return (t || r) && e
    ? {
        autogen_password_controls: t?.autogenPasswordControls || false,
        external_collaboration_controls: t?.externalCollaborationControls || false,
        public_link_controls_setting: r?.publicLinkControlsSetting ?? t?.publicLinkControlsSetting,
        public_link_controls_max_expiration: r?.publicLinkControlsMaxExpiration ?? t?.publicLinkControlsMaxExpiration,
        file_export_setting: r?.fileExportSetting ?? t?.fileExportSetting ?? FileExportSetting.ALLOWED,
      }
    : null
}

/**
 * Maps file link expiration config with previous access.
 * Original: $$J4
 */
export function mapFileLinkExpirationConfigWithPrevious(e: any): Record<string, any> | null {
  return e
    ? {
        ...e,
        prevPrivateLinkAccess: e.prevPrivateLinkAccess,
        prevPrivateProtoLinkAccess: e.prevPrivateProtoLinkAccess,
        prevOrgBrowsable: !!e.prevOrgBrowsable,
        setByUser: e.setByUser ? mapUserProperties(e.setByUser) : null,
      }
    : null
}

/**
 * Maps org domain properties.
 * Original: $$Z29
 */
export function mapOrgDomainProperties(e: any[]): Record<string, any> {
  const t = {
    domains: [],
    isFetching: false,
    fetchedAt: null,
  }
  e
  && e.forEach((domain) => {
    t.domains.push({
      id: domain.id,
      created_at: domain.createdAt ? domain.createdAt.toString() : '',
      org_id: domain.orgId,
      domain: domain.domain,
      google_sso_only_at: domain.googleSsoOnlyAt ? domain.googleSsoOnlyAt.toString() : null,
      saml_sso_only_at: domain.samlSsoOnlyAt ? domain.samlSsoOnlyAt.toString() : null,
      verification_method: null,
      verified_at: null,
    })
  })
  return t
}

/**
 * Maps hub file or team file properties.
 * Original: $$Q19
 */
export function mapHubOrTeamFile(e: any, t: any): Record<string, any> | undefined {
  return t
    ? {
        type: 'hubFile',
        file: t,
      }
    : e
      ? {
          type: 'team',
          file: e,
        }
      : undefined
}

/**
 * Filters valid recent files.
 * Original: $$ee25
 */
export function filterValidRecentFiles(e: any[]): any[] {
  return e
    ? e.filter(
        item =>
          item.file !== null
          && !item.file.trashedAt
          && !item.file.deletedAt
          && (!!getFeatureFlags().sites || item.file.editorType !== 'sites'),
      )
    : []
}

/**
 * Maps recent files and repos.
 * Original: $$et17
 */
export function mapRecentFilesAndRepos(e: any[]): Record<string, any> {
  const t = filterValidRecentFiles(e)
  const r: any[] = []
  const n = new Map()
  const i: any[] = []
  for (const item of t) {
    const file = item.file
    const isTemplate = file.trackTags?.isTemplate
    const s = {
      accessed_at: item.actionAt.toISOString(),
      branch_checkpoint_id: file.branchCheckpointId,
      client_meta: file.clientMeta,
      created_at: file.createdAt.toISOString(),
      creator_id: file.creatorId,
      deleted_at: null,
      description: file.description,
      edit_url: file.editUrl,
      editor_type: file.editorType,
      file_repo_id: file.fileRepoId,
      folder_access_enabled: file.folderAccessEnabled,
      folder_id: file.folderId,
      handoff_url: file.handoffUrl,
      has_file_link_password: file.hasFileLinkPassword,
      has_proto_link_password: file.hasProtoLinkPassword,
      is_favorited: file.isFavorited,
      is_new_user_playground_library: file.newUserPlaygroundLibrary || undefined,
      is_published_site: file.isPublishedSite,
      is_team_template: file.isTeamTemplate,
      is_template: isTemplate || undefined,
      is_try_file: file.isTryFile,
      key: file.key,
      library_key: file.libraryKey,
      last_published_at: file.lastPublishedAt || null,
      license: file.license,
      link_access: file.linkAccess,
      name: file._name || 'Untitled',
      org_audience: file.orgAudience ?? undefined,
      org_browsable: file.orgBrowsable,
      parent_org_id: file.parentOrgId,
      proto_link_access: file.protoLinkAccess,
      prototype_url: file.prototypeUrl,
      scheme: file.scheme,
      source_checkpoint_id: file.sourceCheckpointId,
      source_file_key: file.sourceFileKey,
      starter_library_src_file_key: file.trackTags?.starterLibrarySrcFileKey || undefined,
      team_id: file.teamId,
      thumbnail_guid: file.thumbnailGuid,
      thumbnail_url: file.thumbnailUrl,
      thumbnail_url_override: file.thumbnailUrlOverride,
      preview_thumbnail_urls: null,
      touched_at: file.touchedAt,
      track_tags: file.trackTags ? TrackTagsMapper.toSinatra(file.trackTags) : null,
      trashed_at: null,
      trashed_user_id: file.trashedUserId,
      updated_at: file.updatedAt?.toISOString(),
      url: file.url,
      viewer_export_restricted: file.viewerExportRestricted,
    }
    if (file.fileRepoId && file.repo) {
      let repoEntry = n.get(file.fileRepoId)
      if (repoEntry) {
        repoEntry.files.push(s)
      }
      else {
        repoEntry = {
          repo: {
            created_at: file.repo.createdAt.toISOString(),
            default_file_key: file.repo.defaultFileKey,
            deleted_at: file.repo.deletedAt?.toISOString() || null,
            folder_id: file.repo.folderId,
            has_active_branches: file.repo.hasActiveBranches,
            has_file_link_password: file.repo.hasFileLinkPassword,
            has_proto_link_password: file.repo.hasProtoLinkPassword,
            id: file.repo.id,
            is_favorited: file.repo.isFavorited,
            link_access: file.repo.linkAccess,
            name: file.repo.name,
            org_audience: file.repo.orgAudience,
            org_browsable: file.repo.orgBrowsable,
            parent_org_id: file.repo.parentOrgId,
            proto_link_access: file.repo.protoLinkAccess,
            team_id: file.repo.teamId,
            trashed_at: file.repo.trashedAt?.toISOString() || null,
            updated_at: file.repo.updatedAt.toISOString(),
          },
          files: [s],
          timestamp: item.actionAt.toISOString(),
        }
        n.set(file.fileRepoId, repoEntry)
        i.push(repoEntry)
      }
    }
    else {
      r.push(s)
    }
  }
  return {
    recent_files: r,
    recent_repos: i,
  }
}

// Export constants with new refactored names
export const Bp = mapProjectProperties
export const GA = mapVariableProperties
export const J4 = mapTemplateProperties
export const KC = mapStyleProperties
export const Nl = mapFileLinkExpirationConfigWithPrevious
export const Ns = mapFileProperties
export const Qp = mapComponentProperties
export const SS = mapStateGroupProperties
export const TP = mapFileLinkExpirationConfigOptimistic
export const U5 = arrayToIdMap
export const U7 = mapFrameProperties
export const Um = mapUserProperties
export const V1 = convertCamelToSnakeWithLeading
export const W2 = mapProjectSummary
export const WP = mapFileView
export const WW = mapFileAndRepoProperties
export const Xs = mapRepoSummary
export const YN = mapRecentFilesAndRepos
export const ZW = mapResourceCategoryToRole
export const Zt = mapHubOrTeamFile
export const _3 = generateProtoLinkUrl
export const aU = mapResourceAccess
export const aX = mapVariableResolvedDataType
export const cE = mapVariableSetProperties
export const ge = mapFileSummary
export const iP = filterValidRecentFiles
export const rZ = mapMovedFileProperties
export const uW = mapTemplateAndModuleProperties
export const uk = mapFileExportAndLinkControls
export const vy = mapOrgDomainProperties
export const yT = mapFileLinkExpirationConfig
