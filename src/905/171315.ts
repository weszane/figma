import { getI18nString } from '../905/303541'
import { deepEqual, includesEqual } from '../905/382883'
import { isSitesFeatureEnabled } from '../905/561485'
import { convertSearchModelTypeToFileKind, convertSearchModelTypeToModelType, CreatorResourceType, FolderType, PublicModelType, SearchModelType } from '../figma_app/162807'
import { isFigmakeSitesEnabled } from '../figma_app/552876'
import { isCooperFeatureEnabled } from '../figma_app/828186'
import { truncate } from '../figma_app/930338'

// Original: $$c15
const MAX_TRUNCATE_LENGTH = 5

// Original: $$u19
const EMPTY_SPACE_MAP: Record<FolderType, any[]> = {
  [FolderType.FOLDER]: [],
  [FolderType.TEAM]: [],
  [FolderType.ORG]: [],
}

/**
 * Gets the label for a facet type.
 * Original: $$p21
 */
export function getFacetTypeLabel(type: CreatorResourceType): string {
  return {
    [CreatorResourceType.RESOURCE]: getI18nString('search.facets.resource'),
    [CreatorResourceType.CREATOR]: getI18nString('search.facets.creator'),
    [CreatorResourceType.SPACE]: getI18nString('search.facets.in'),
  }[type]
}

/**
 * Gets the prefix for a facet type.
 * Original: $$m14
 */
export function getFacetPrefix(type: CreatorResourceType): string {
  return `${getFacetTypeLabel(type)}: `
}

/**
 * Gets the display value for a facet.
 * Original: $$h25
 */
export function getFacetDisplayValue(facet: any): string {
  if (facet.type === CreatorResourceType.RESOURCE) {
    return getResourceTypeLabel(facet.value)
  }
  if (facet.type === CreatorResourceType.CREATOR) {
    const creators = facet.value
    const count = creators.length
    if (count === 0)
      return ''
    if (count === 1) {
      const creator = creators[0]
      return truncate(creator.name || creator.handle, 15)
    }
    return getI18nString('search.facets.multiple_creators', { numCreators: count })
  }
  if (facet.type === CreatorResourceType.SPACE) {
    const totalSpaces = Object.values(facet.value).reduce((sum: number, arr: any[]) => sum + arr.length, 0)
    return getI18nString('search.facets.multiple_spaces', { numSpaces: totalSpaces })
  }
  return ''
}

/**
 * Gets the label for a resource type.
 * Original: $$g11
 */
export function getResourceTypeLabel(type: SearchModelType): string {
  return {
    [SearchModelType.DESIGN_FILES]: getI18nString('search.facets.design_files'),
    [SearchModelType.FIGJAM_FILES]: getI18nString('search.facets.figjam_boards'),
    [SearchModelType.SLIDES]: getI18nString('search.facets.slides'),
    [SearchModelType.SITES]: getI18nString('search.facets.sites'),
    [SearchModelType.BUZZ]: getI18nString('search.facets.buzz_files'),
    [SearchModelType.MAKE]: getI18nString('search.facets.make_files'),
    [SearchModelType.USERS]: getI18nString('search.facets.people'),
    [SearchModelType.PROJECTS]: getI18nString('search.facets.projects'),
    [SearchModelType.TEAMS]: getI18nString('search.facets.teams'),
    [SearchModelType.ALL_FILES]: getI18nString('search.preview_section.all_files'),
    [SearchModelType.PLUGINS]: '',
    [SearchModelType.WIDGETS]: '',
  }[type]
}

/**
 * Gets the default search model types based on enabled features.
 * Original: $$f3
 */
export function getDefaultSearchTypes(): SearchModelType[] {
  const types = [SearchModelType.DESIGN_FILES, SearchModelType.FIGJAM_FILES, SearchModelType.SLIDES]
  if (isCooperFeatureEnabled())
    types.push(SearchModelType.BUZZ)
  if (isSitesFeatureEnabled())
    types.push(SearchModelType.SITES)
  if (isFigmakeSitesEnabled())
    types.push(SearchModelType.MAKE)
  return types
}

/**
 * Checks if the given types match the default search types.
 * Original: $$_0
 */
export function isDefaultSearchTypes(types: SearchModelType[]): boolean {
  return deepEqual(types, getDefaultSearchTypes())
}

/**
 * Checks if a facet list contains a specific type.
 * Original: $$A23
 */
export function hasFacetType(type: CreatorResourceType, facets: any[]): boolean {
  return facets.some(facet => facet.type === type)
}

/**
 * Finds the index of a facet with a specific type.
 * Original: $$y9
 */
export function findFacetIndex(type: CreatorResourceType, facets: any[]): number {
  return facets.findIndex(facet => facet.type === type)
}

/**
 * Gets the label for a facet's value.
 * Original: $$b4
 */
export function getFacetValueLabel(facet: any, currentUserId?: string): string {
  if (!facet)
    return ''
  switch (facet.type) {
    case CreatorResourceType.RESOURCE:
      return {
        [SearchModelType.DESIGN_FILES]: getI18nString('search.facets.design'),
        [SearchModelType.FIGJAM_FILES]: getI18nString('search.facets.figjam'),
        [SearchModelType.SLIDES]: getI18nString('search.facets.slides'),
        [SearchModelType.SITES]: getI18nString('search.facets.sites'),
        [SearchModelType.BUZZ]: getI18nString('search.facets.buzz'),
        [SearchModelType.MAKE]: getI18nString('search.facets.make'),
        [SearchModelType.USERS]: getI18nString('search.facets.people'),
        [SearchModelType.PROJECTS]: getI18nString('search.facets.projects'),
        [SearchModelType.TEAMS]: getI18nString('search.facets.teams'),
        [SearchModelType.ALL_FILES]: '',
        [SearchModelType.PLUGINS]: '',
        [SearchModelType.WIDGETS]: '',
      }[facet.value]
    case CreatorResourceType.CREATOR:
      const name = facet.value.name || facet.value.handle
      return currentUserId && facet.value.id === currentUserId
        ? getI18nString('search.facets.name_and_you', { name })
        : name
    case CreatorResourceType.SPACE:
      return facet.value.name
    default:
      return ''
  }
}

/**
 * Gets query parameters for a space type.
 * Original: $$v12
 */
export function getSpaceQueryParams(type: FolderType, value: any): Record<string, any> {
  switch (type) {
    case FolderType.FOLDER:
      return { folderId: value.id }
    case FolderType.TEAM:
      return { teamId: value.id }
    case FolderType.ORG:
      return { orgId: value.id }
  }
}

/**
 * Gets query parameters for a facet.
 * Original: $$I18
 */
export function getFacetQueryParams(facet: any): Record<string, any> {
  switch (facet.type) {
    case CreatorResourceType.RESOURCE:
      return { resourceType: facet.value }
    case CreatorResourceType.CREATOR:
      return { creatorId: facet.value.id }
    case CreatorResourceType.SPACE:
      return getSpaceQueryParams(facet.spaceType, facet.value)
  }
}

/**
 * Builds a search query object.
 * Original: $$E13
 */
export function buildSearchQuery(searchType: SearchModelType, creatorFacet: any, resourceFacet: any, spaceFacet: any, modelType?: PublicModelType): any {
  const isEmpty = !spaceFacet?.value || isFacetEmpty(spaceFacet)
  if (spaceFacet?.type === CreatorResourceType.RESOURCE) {
    return buildQueryObject(isEmpty ? null : spaceFacet, resourceFacet, creatorFacet, modelType)
  }
  if (spaceFacet?.type === CreatorResourceType.CREATOR) {
    return buildQueryObject(searchType, isEmpty ? null : spaceFacet, creatorFacet, modelType)
  }
  if (spaceFacet?.type === CreatorResourceType.SPACE) {
    return buildQueryObject(searchType, resourceFacet, isEmpty ? null : spaceFacet, modelType)
  }
  return null
}

/**
 * Checks if a facet is empty.
 * Original: $$x6
 */
export function isFacetEmpty(facet: any): boolean {
  if (facet.type === CreatorResourceType.CREATOR) {
    return facet.value.length === 0
  }
  if (facet.type === CreatorResourceType.SPACE) {
    return isSpaceEmpty(facet.value)
  }
  return false
}

/**
 * Creates a space facet.
 * Original: $$S7
 */
export function createSpaceFacet(type: FolderType, value: any): any | null {
  if (type === FolderType.FOLDER || type === FolderType.TEAM || type === FolderType.ORG) {
    return {
      type: CreatorResourceType.SPACE,
      spaceType: type,
      value,
    }
  }
  return null
}

/**
 * Checks if a space map is empty.
 * Original: $$w24
 */
export function isSpaceEmpty(spaceMap: Record<FolderType, any[]>): boolean {
  return Object.values(spaceMap).every(arr => arr.length === 0)
}

/**
 * Creates a resource facet.
 * Original: $$C16
 */
export function createResourceFacet(value: SearchModelType): any | null {
  return value ? { type: CreatorResourceType.RESOURCE, value } : null
}

/**
 * Creates a creator facet.
 * Original: $$T10
 */
export function createCreatorFacet(value: any[]): any | null {
  return value ? { type: CreatorResourceType.CREATOR, value } : null
}

/**
 * Creates a space facet from a map.
 * Original: $$k1
 */
export function createSpaceFacetFromMap(value: Record<FolderType, any[]>): any | null {
  return value ? { type: CreatorResourceType.SPACE, value } : null
}

/**
 * Builds the query object for search.
 * Original: $$R17
 */
export function buildQueryObject(searchType: any, creatorFacet: any, spaceFacet: any, modelType?: PublicModelType): any {
  const spaceValue = spaceFacet && !isFacetEmpty(spaceFacet) ? spaceFacet.value : null
  const folderIds = spaceValue ? spaceValue[FolderType.FOLDER].map((item: any) => item.id) : []
  const teamIds = spaceValue ? spaceValue[FolderType.TEAM].map((item: any) => item.id) : []
  const orgIds = spaceValue ? spaceValue[FolderType.ORG].map((item: any) => item.id) : []

  if (creatorFacet && !isFacetEmpty(creatorFacet)) {
    return {
      searchModelType: PublicModelType.FILES,
      editorType: convertSearchModelTypeToFileKind(searchType),
      creatorIds: creatorFacet.value.map((creator: any) => creator.id),
      folderIds,
      teamIds,
      orgIds,
    }
  }

  if (modelType ?? searchType) {
    const effectiveModelType = modelType ?? convertSearchModelTypeToModelType(searchType)
    switch (effectiveModelType) {
      case PublicModelType.FILES:
        return {
          searchModelType: PublicModelType.FILES,
          editorType: convertSearchModelTypeToFileKind(searchType),
          folderIds,
          teamIds,
          orgIds,
        }
      case PublicModelType.USERS:
        return { searchModelType: PublicModelType.USERS, orgIds }
      case PublicModelType.PROJECTS:
        return { searchModelType: PublicModelType.PROJECTS, teamIds, orgIds }
      case PublicModelType.TEAMS:
        return { searchModelType: PublicModelType.TEAMS, orgIds }
      case PublicModelType.PRIVATE_PLUGINS:
        return { searchModelType: PublicModelType.PRIVATE_PLUGINS, orgIds }
      case PublicModelType.PRIVATE_WIDGETS:
        return { searchModelType: PublicModelType.PRIVATE_WIDGETS, orgIds }
      default:
        return null
    }
  }

  return spaceValue ? { searchModelType: null, folderIds, teamIds, orgIds } : null
}

/**
 * Enum for facet operations.
 * Original: $$N8
 */
export enum FacetOperation {
  REMOVE_FROM_GROUP = 0,
  ADD_TO_GROUP = 1,
}

/**
 * Updates a creator facet based on operation.
 * Original: $$P2
 */
export function updateCreatorFacet(facet: any, operation: FacetOperation, currentFacet?: any): any {
  const currentValues = currentFacet?.value || []
  let newValues: any[]
  if (operation === FacetOperation.ADD_TO_GROUP && !includesEqual(currentValues, facet.value)) {
    newValues = [...currentValues, facet.value]
  }
  else if (operation === FacetOperation.REMOVE_FROM_GROUP) {
    newValues = currentValues.filter((val: any) => !deepEqual(val, facet.value))
  }
  else {
    newValues = currentValues
  }
  return createCreatorFacet(newValues)
}

/**
 * Updates a space facet based on operation.
 * Original: $$O20
 */
export function updateSpaceFacet(facet: any, operation: FacetOperation, currentFacet?: any): any {
  const currentMap = currentFacet?.value || EMPTY_SPACE_MAP
  const currentSpaces = currentMap[facet.spaceType]
  let newSpaces: any[]
  if (operation === FacetOperation.ADD_TO_GROUP && !includesEqual(currentSpaces, facet.value)) {
    newSpaces = [...currentSpaces, facet.value]
  }
  else if (operation === FacetOperation.REMOVE_FROM_GROUP) {
    newSpaces = currentSpaces.filter((val: any) => !deepEqual(val, facet.value))
  }
  else {
    newSpaces = currentSpaces
  }
  return createSpaceFacetFromMap({ ...currentMap, [facet.spaceType]: newSpaces })
}

/**
 * Checks if text is longer than 50 characters.
 * Original: $$D5
 */
export function isLongText(text: string): boolean {
  return !!text && text.length > 50
}

/**
 * Gets supported facet types for a model type.
 * Original: $$L22
 */
export function getSupportedFacetTypes(modelType: PublicModelType): CreatorResourceType[] {
  switch (modelType) {
    case PublicModelType.FILES:
      return [CreatorResourceType.RESOURCE, CreatorResourceType.CREATOR, CreatorResourceType.SPACE]
    case PublicModelType.PROJECTS:
    case PublicModelType.TEAMS:
    case PublicModelType.USERS:
      return [CreatorResourceType.SPACE]
    default:
      return []
  }
}

// Updated exports with refactored names
export const Aj = isDefaultSearchTypes
export const Bu = createSpaceFacetFromMap
export const C8 = updateCreatorFacet
export const ES = getDefaultSearchTypes
export const FR = getFacetValueLabel
export const GX = isLongText
export const II = isFacetEmpty
export const KI = createSpaceFacet
export const M2 = FacetOperation
export const Nz = findFacetIndex
export const Rj = createCreatorFacet
export const S2 = getResourceTypeLabel
export const dd = getSpaceQueryParams
export const gh = buildSearchQuery
export const gl = getFacetPrefix
export const hp = MAX_TRUNCATE_LENGTH
export const jN = createResourceFacet
export const nX = buildQueryObject
export const oM = getFacetQueryParams
export const og = EMPTY_SPACE_MAP
export const q1 = updateSpaceFacet
export const qM = getFacetTypeLabel
export const r4 = getSupportedFacetTypes
export const sd = hasFacetType
export const wG = isSpaceEmpty
export const yA = getFacetDisplayValue
export const yj = truncate
