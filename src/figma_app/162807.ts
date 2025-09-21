// Refactored from /Users/allen/github/fig/src/figma_app/162807.ts

import { getI18nString } from '../905/303541'

/**
 * ModelType enum (original: $$i31)
 */
export enum PublicModelType {
  FILES = 'files',
  PROJECTS = 'projects',
  TEAMS = 'teams',
  USERS = 'users',
  HUB_FILES = 'hub_files',
  PUBLIC_PLUGINS = 'public_plugins',
  PRIVATE_PLUGINS = 'private_plugins',
  PUBLIC_PROFILES = 'public_profiles',
  PUBLIC_WIDGETS = 'public_widgets',
  PRIVATE_WIDGETS = 'private_widgets',
}

/**
 * ResourceType enum (original: $$a9)
 */
export enum CreatorResourceType {
  RESOURCE = 'resource',
  CREATOR = 'creator',
  SPACE = 'space',
}

/**
 * SpaceType enum (original: $$s18)
 */
export enum TeamSpaceType {
  USERS = 'users',
  PROJECTS = 'projects',
  TEAMS = 'teams',
  ORGS = 'orgs',
}

/**
 * FolderType enum (original: $$o29)
 */
export enum FolderType {
  FOLDER = 'folders',
  TEAM = 'teams',
  ORG = 'orgs',
}

/**
 * InputType enum (original: $$l32)
 */
export enum InputType {
  DROPDOWN = 'dropdown',
  AUTOCOMPLETE = 'autocomplete',
}

/**
 * PillType enum (original: $$d25)
 */
export enum PillType {
  PILL = 'pill',
  CLEAR_ALL = 'clear_all',
  ALL_TYPES = 'all_types',
  SELECTION = 'selection',
}

/**
 * SearchModelType enum (original: $$c0)
 */
export enum SearchModelType {
  ALL_FILES = 'FILES',
  DESIGN_FILES = 'DESIGN_FILES',
  FIGJAM_FILES = 'FIGJAM_FILES',
  SLIDES = 'SLIDES',
  USERS = 'USERS',
  PROJECTS = 'PROJECTS',
  TEAMS = 'TEAMS',
  PLUGINS = 'PLUGINS',
  WIDGETS = 'WIDGETS',
  SITES = 'SITES',
  BUZZ = 'BUZZ',
  MAKE = 'MAKE',
}

/**
 * SearchFieldType enum (original: $$u20)
 */
export enum SearchFieldType {
  NAME = 'name',
  FUZZY_NAME = 'fuzzy-name',
  NAME_WORD_DELIMITER_V2 = 'name-word-delimiter-v2',
  DEEP_SEARCH_TEXT = 'deep-search-text',
  PAGE_NAME = 'page-name',
  FRAME_NAME = 'frame-name',
  FRAGMENT_RETRIEVAL = 'fragment-retrieval',
}

/**
 * SearchTypeMode enum (original: $$p6)
 */
export enum SearchTypeMode {
  ONE_TYPE = 'one_type',
  ALL_TYPES_BLOCKING = 'all_types_blocking',
  ALL_TYPES_STREAMING = 'all_types_streaming',
}

/**
 * Converts SearchModelType to ModelType (original: $$_13)
 * @param e - object with value property
 */
export function convertSearchModelTypeToModelType(e: { value: string } | null): string | null {
  if (!e)
    return null
  switch (e.value) {
    case SearchModelType.ALL_FILES:
    case SearchModelType.DESIGN_FILES:
    case SearchModelType.FIGJAM_FILES:
    case SearchModelType.SLIDES:
    case SearchModelType.SITES:
    case SearchModelType.BUZZ:
    case SearchModelType.MAKE:
      return PublicModelType.FILES
    case SearchModelType.USERS:
      return PublicModelType.USERS
    case SearchModelType.PROJECTS:
      return PublicModelType.PROJECTS
    case SearchModelType.TEAMS:
      return PublicModelType.TEAMS
    case SearchModelType.PLUGINS:
      return PublicModelType.PRIVATE_PLUGINS
    case SearchModelType.WIDGETS:
      return PublicModelType.PRIVATE_WIDGETS
    default:
      return null
  }
}

/**
 * Converts ModelType to SearchModelType (original: $$h11)
 * @param e - ModelType string
 */
export function convertModelTypeToSearchModelType(e: string): string | null {
  switch (e) {
    case PublicModelType.FILES:
      return SearchModelType.ALL_FILES
    case PublicModelType.USERS:
      return SearchModelType.USERS
    case PublicModelType.PROJECTS:
      return SearchModelType.PROJECTS
    case PublicModelType.TEAMS:
      return SearchModelType.TEAMS
    case PublicModelType.PRIVATE_PLUGINS:
      return SearchModelType.PLUGINS
    case PublicModelType.PRIVATE_WIDGETS:
      return SearchModelType.WIDGETS
    default:
      return null
  }
}

/**
 * FileKind enum (original: $$m16)
 */
export enum FileKindEnum {
  DESIGN = 'design',
  FIGJAM = 'whiteboard',
  SLIDES = 'slides',
  SITES = 'sites',
  COOPER = 'cooper',
  FIGMAKE = 'figmake',
}

/**
 * Converts SearchModelType to FileKind (original: $$g14)
 * @param e - object with value property
 */
export function convertSearchModelTypeToFileKind(e: { value: string } | null): string | undefined {
  if (e) {
    switch (e.value) {
      case SearchModelType.DESIGN_FILES:
        return FileKindEnum.DESIGN
      case SearchModelType.FIGJAM_FILES:
        return FileKindEnum.FIGJAM
      case SearchModelType.SLIDES:
        return FileKindEnum.SLIDES
      case SearchModelType.SITES:
        return FileKindEnum.SITES
      case SearchModelType.BUZZ:
        return FileKindEnum.COOPER
      case SearchModelType.MAKE:
        return FileKindEnum.FIGMAKE
    }
  }
}

/**
 * Converts filter object keys to API query params (original: $$f3)
 * @param e - filter object
 */
export function convertFilterKeysToApiParams(e: Record<string, any> | null): Record<string, any> | null {
  if (!e)
    return null
  const t: Record<string, any> = {}
  for (const [r, n] of Object.entries(e)) {
    if (n) {
      if (r === 'creatorIds') {
        t['creator_ids[]'] = n
      }
      else if (r === 'folderIds' && n.length > 0) {
        t['folder_ids[]'] = n
      }
      else if (r === 'teamIds' && n.length > 0) {
        t['team_ids[]'] = n
      }
      else if (r === 'orgIds' && n.length > 0) {
        t['org_ids[]'] = n
      }
      else {
        t[r] = n
      }
    }
  }
  return t
}

/**
 * SpaceAccessType enum (original: $$E7)
 */
export enum SpaceAccessType {
  ORG = 'internal',
  ORG_GUEST = 'internal_guest',
  PERSONAL = 'personal',
  COMMUNITY = 'community',
}

/**
 * ModelTypeConfig type (for $$y21)
 */
export interface ModelTypeConfig {
  modelTypes: string[]
  correspondingModelTypes: Record<string, string>
  defaultModelType: string
}

/**
 * ModelTypeConfigs (original: $$y21)
 */
export const ModelTypeConfigs: Record<string, ModelTypeConfig> = {
  internal: {
    modelTypes: [
      PublicModelType.FILES,
      PublicModelType.PROJECTS,
      PublicModelType.USERS,
      PublicModelType.TEAMS,
      PublicModelType.PRIVATE_PLUGINS,
      PublicModelType.PRIVATE_WIDGETS,
    ],
    correspondingModelTypes: {
      [PublicModelType.HUB_FILES]: PublicModelType.FILES,
      [PublicModelType.PUBLIC_PROFILES]: PublicModelType.USERS,
      [PublicModelType.PUBLIC_PLUGINS]: PublicModelType.PRIVATE_PLUGINS,
      [PublicModelType.PUBLIC_WIDGETS]: PublicModelType.PRIVATE_WIDGETS,
    },
    defaultModelType: PublicModelType.FILES,
  },
  internal_guest: {
    modelTypes: [
      PublicModelType.FILES,
      PublicModelType.PROJECTS,
      PublicModelType.USERS,
      PublicModelType.TEAMS,
    ],
    correspondingModelTypes: {
      [PublicModelType.HUB_FILES]: PublicModelType.FILES,
      [PublicModelType.PUBLIC_PROFILES]: PublicModelType.USERS,
    },
    defaultModelType: PublicModelType.FILES,
  },
  personal: {
    modelTypes: [
      PublicModelType.FILES,
      PublicModelType.PROJECTS,
      PublicModelType.USERS,
    ],
    correspondingModelTypes: {
      [PublicModelType.HUB_FILES]: PublicModelType.FILES,
      [PublicModelType.PUBLIC_PROFILES]: PublicModelType.USERS,
    },
    defaultModelType: PublicModelType.FILES,
  },
  community: {
    modelTypes: [
      PublicModelType.HUB_FILES,
      PublicModelType.PUBLIC_PLUGINS,
      PublicModelType.PUBLIC_PROFILES,
      PublicModelType.PUBLIC_WIDGETS,
    ],
    correspondingModelTypes: {
      [PublicModelType.FILES]: PublicModelType.HUB_FILES,
      [PublicModelType.USERS]: PublicModelType.PUBLIC_PROFILES,
      [PublicModelType.PRIVATE_PLUGINS]: PublicModelType.PUBLIC_PLUGINS,
      [PublicModelType.PRIVATE_WIDGETS]: PublicModelType.PUBLIC_WIDGETS,
    },
    defaultModelType: PublicModelType.HUB_FILES,
  },
}

/**
 * SortField enum (original: $$b24)
 */
export enum SortingCriteria {
  POPULARITY = 'popularity',
  RECENCY = 'recency',
  RELEVANCY = 'relevancy',
  NAME = 'name',
  AUTHOR_NAME = 'author_name',
  INSTALL_COUNT = 'install_count',
  MEMBER_COUNT = 'member_count',
  UPDATED_AT = 'updated_at',
  TOUCHED_AT = 'touched_at',
  CREATED_AT = 'created_at',
  EMAIL = 'email',
}

/**
 * PluginSortField enum (original: $$T12)
 */
export enum PluginSortField {
  NAME = 'name',
  AUTHOR_NAME = 'author_name',
  UPDATED_AT = 'updated_at',
  INSTALL_COUNT = 'install_count',
  RELEVANCY = 'relevancy',
  RUN_COUNT = 'run_count',
}

/**
 * WidgetSortField enum (original: $$I19)
 */
export enum WidgetSortField {
  NAME = 'name',
  AUTHOR_NAME = 'author_name',
  UPDATED_AT = 'updated_at',
  INSTALL_COUNT = 'install_count',
  RELEVANCY = 'relevancy',
}

/**
 * SimpleSortField enum (original: $$S22)
 */
export enum SimpleSortField {
  POPULARITY = 'popularity',
  RECENCY = 'recency',
}

/**
 * TeamSortField enum (original: $$v2)
 */
export enum TeamSortField {
  RELEVANCY = 'relevancy',
  NAME = 'name',
  TOUCHED_AT = 'touched_at',
  CREATED_AT = 'created_at',
  OWNER = 'owner',
}

/**
 * ProjectSortField enum (original: $$A26)
 */
export enum ProjectSortField {
  RELEVANCY = 'relevancy',
  NAME = 'name',
  CREATED_AT = 'created_at',
}

/**
 * OrgSortField enum (original: $$x28)
 */
export enum OrgSortField {
  RELEVANCY = 'relevancy',
  NAME = 'name',
  FILES_LAST_TOUCHED_AT = 'files_last_touched_at',
  CREATED_AT = 'created_at',
  MEMBER_COUNT = 'member_count',
}

/**
 * UserSortField enum (original: $$N17)
 */
export enum UserSortField {
  RELEVANCY = 'relevancy',
  NAME = 'name',
  EMAIL = 'email',
}

/**
 * RelevancySortField enum (original: $$C15)
 */
export enum RelevancySortField {
  RELEVANCY = 'relevancy',
}

/**
 * WidgetRelevancySortField enum (original: $$w10)
 */
export enum WidgetRelevancySortField {
  RELEVANCY = 'relevancy',
}

/**
 * PreviewMode enum (original: $$O1)
 */
export enum ContentPreviewMode {
  PREVIEW = 'preview',
  FULL_PAGE = 'full_page',
  OUTSIDE_FILE_BROWSER = 'outside_file_browser',
}

/**
 * FileBrowserAction enum (original: $$R30)
 */
export enum FileBrowserAction {
  OPEN = 'open',
  CLOSE = 'close',
}

/**
 * Returns i18n string for model type header (original: $$L27)
 * @param e - ModelType string
 */
export function getModelTypeHeaderI18n(e: string): string | undefined {
  switch (e) {
    case PublicModelType.FILES:
      return getI18nString('search.search_model_type_header.files')
    case PublicModelType.PROJECTS:
      return getI18nString('search.search_model_type_header.projects')
    case PublicModelType.TEAMS:
      return getI18nString('search.search_model_type_header.teams')
    case PublicModelType.USERS:
      return getI18nString('search.search_model_type_header.people')
    case PublicModelType.HUB_FILES:
      return getI18nString('search.search_model_type_header.hub_files')
    case PublicModelType.PUBLIC_PLUGINS:
      return getI18nString('search.search_model_type_header.public_plugins')
    case PublicModelType.PRIVATE_PLUGINS:
      return getI18nString('search.search_model_type_header.private_plugins')
    case PublicModelType.PUBLIC_PROFILES:
      return getI18nString('search.search_model_type_header.creators')
    case PublicModelType.PUBLIC_WIDGETS:
      return getI18nString('search.search_model_type_header.public_widgets')
    case PublicModelType.PRIVATE_WIDGETS:
      return getI18nString('search.search_model_type_header.private_widgets')
  }
}

/**
 * Returns i18n string for model type empty state (original: $$P23)
 * @param e - ModelType string
 */
export function getModelTypeEmptyStateI18n(e: string): string {
  switch (e) {
    case PublicModelType.FILES:
      return getI18nString('search.search_model_type.empty_state_files')
    case PublicModelType.PROJECTS:
      return getI18nString('search.search_model_type.empty_state_projects')
    case PublicModelType.TEAMS:
      return getI18nString('search.search_model_type.empty_state_teams')
    case PublicModelType.USERS:
      return getI18nString('search.search_model_type.empty_state_people')
    case PublicModelType.HUB_FILES:
      return getI18nString('search.search_model_type.empty_state_hub_files')
    case PublicModelType.PUBLIC_PLUGINS:
      return getI18nString('search.search_model_type.empty_state_public_plugins')
    case PublicModelType.PRIVATE_PLUGINS:
      return getI18nString('search.search_model_type.empty_state_private_plugins')
    case PublicModelType.PUBLIC_PROFILES:
      return getI18nString('search.search_model_type.empty_state_creators')
    case PublicModelType.PUBLIC_WIDGETS:
      return getI18nString('search.search_model_type.empty_state_public_widgets')
    case PublicModelType.PRIVATE_WIDGETS:
      return getI18nString('search.search_model_type.empty_state_private_widgets')
    default:
      return ''
  }
}

// Constants (original: $$D5, $$k4, $$M8)
export const DEFAULT_PAGE_SIZE = 4
export const MAX_RESULTS = 10
export const MAX_ITEMS = 30

// Exported variables (original export const ...)
export const $L = SearchModelType // $L
export const L0 = ContentPreviewMode // L0
export const Lk = TeamSortField // Lk
export const Lr = convertFilterKeysToApiParams // Lr
export const MU = MAX_RESULTS // MU
export const Or = DEFAULT_PAGE_SIZE // Or
export const Rr = SearchTypeMode // Rr
export const Rx = SpaceAccessType // Rx
export const Rz = MAX_ITEMS // Rz
export const WY = CreatorResourceType // WY
export const W_ = WidgetRelevancySortField // W_
export const Wr = convertModelTypeToSearchModelType // Wr
export const XW = PluginSortField // XW
export const Xr = convertSearchModelTypeToModelType // Xr
export const Zr = convertSearchModelTypeToFileKind // Zr
export const _M = RelevancySortField // _M
export const _Y = FileKindEnum // _Y
export const a7 = UserSortField // a7
export const dC = TeamSpaceType // dC
export const dt = WidgetSortField // dt
export const f9 = SearchFieldType // f9
export const fS = ModelTypeConfigs // fS
export const gw = SimpleSortField // gw
export const hf = getModelTypeEmptyStateI18n // hf
export const j9 = SortingCriteria // j9
export const jD = PillType // jD
export const mp = ProjectSortField // mp
export const q6 = getModelTypeHeaderI18n // q6
export const qm = OrgSortField // qm
export const qy = FolderType // qy
export const tC = FileBrowserAction // tC
export const uH = PublicModelType // uH
export const uR = InputType // uR
