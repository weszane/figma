import { getResourceDataOrFallback } from "../905/723791"
import { mapVariableProperties, mapVariableSetProperties } from "../figma_app/349248"

export interface VariableCollection {
  variables?: any[]
  sortPosition?: number
  name: string
  node_id: string
}

interface FileData {
  variableCollections?: VariableCollection[]
  id?: string
  libraryKey?: string
  hubFileId?: string
  libraryKeyToFile?: {
    file?: FileData
    hubFile?: FileData
  }
}

interface ResourceData {
  type: string;
  status: string
  value?: any
  data: {
    file?: FileData
    communityLibraryByHubFileId?: any
    libraryKeyToFile?: {
      file?: FileData
      hubFile?: FileData
    }
  }
}

interface MappingContext {
  type: "team" | "hubFile"
  file: {
    id?: string
    libraryKey?: string
  }
}

/**
 * Maps variable properties from different resource types
 * Original: $$a2
 */
export function mapVariablePropertiesFromResource(resource: any, _context: any): any[] {
  const extractVariables = (context: any, collections: VariableCollection[] | undefined): any[] => {
    const results: any[] = []

    collections?.forEach((collection) => {
      collection.variables?.forEach((variable) => {
        results.push(mapVariableProperties(variable, context, context))
      })
    })

    return results
  }

  if (resource.type === "team" && resource.value?.status === "loaded") {
    const fileData = resource.value.data.file
    if (fileData) {
      return extractVariables({
        type: "team",
        file: fileData,
      }, fileData.variableCollections)
    }
  }

  if (resource.type === "community" && resource.value?.status === "loaded") {
    const communityData = getResourceDataOrFallback(resource.value.data.communityLibraryByHubFileId)
    if (communityData) {
      return extractVariables({
        type: "hubFile",
        file: {
          id: communityData.hubFileId,
          libraryKey: communityData.libraryKey,
        },
      }, communityData.variableCollections)
    }
  }

  return []
}

/**
 * Sorts variable collections by position, name, and node ID
 * Original: $$s3
 */
export function sortVariableCollections(collections: VariableCollection[]): VariableCollection[] {
  return collections.sort((a, b) => {
    if (a.sortPosition && b.sortPosition) {
      return a.sortPosition > b.sortPosition ? 1 : -1
    }

    if (a.sortPosition)
      return -1
    if (b.sortPosition)
      return 1

    if (a.name !== b.name) {
      return a.name.localeCompare(b.name)
    }

    return a.node_id > b.node_id ? 1 : -1
  })
}

/**
 * Sorts items by name using collator and then by node ID
 * Original: $$o1
 */
export function sortItemsByName(items: VariableCollection[]): VariableCollection[] {
  const collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: "base",
  })

  return [...items].sort((a, b) => {
    const nameComparison = collator.compare(a.name, b.name)
    if (nameComparison !== 0) {
      return nameComparison
    }
    return a.node_id > b.node_id ? 1 : -1
  })
}

/**
 * Maps variable set properties from different resource types and sorts them
 * Original: $$l4
 */
export function mapAndSortVariableSets(resource: any, context: any): any[] {
  if (resource.type === "team" && resource.value?.status === "loaded") {
    const fileData = resource.value.data.file
    if (fileData && fileData.variableCollections) {
      const mappedCollections = fileData.variableCollections.map(collection =>
        mapVariableSetProperties(collection, {
          type: "team",
          file: fileData,
        }, context),
      )
      return sortVariableCollections(mappedCollections)
    }
  }

  if (resource.type === "community" && resource.value?.status === "loaded") {
    const communityData = getResourceDataOrFallback(resource.value.data.communityLibraryByHubFileId)
    if (communityData && communityData.variableCollections) {
      const mappedCollections = communityData.variableCollections.map(collection =>
        mapVariableSetProperties(collection, {
          type: "hubFile",
          file: {
            id: communityData.hubFileId,
            libraryKey: communityData.libraryKey,
          },
        }, context),
      )
      return sortVariableCollections(mappedCollections)
    }
  }

  return []
}

/**
 * Maps variable set properties from loaded library data
 * Original: $$d0
 */
export function mapVariableSetsFromLibrary(resource: ResourceData, context: any): any[] {
  if (resource.status !== "loaded" || !resource.data.libraryKeyToFile) {
    return []
  }

  const libraryData = resource.data.libraryKeyToFile

  if (libraryData.file) {
    const fileData = libraryData.file
    return (fileData.variableCollections ?? []).map(collection =>
      mapVariableSetProperties(collection, {
        type: "team",
        file: fileData,
      }, context),
    )
  }

  if (!libraryData.hubFile) {
    return []
  }

  const hubFileData = libraryData.hubFile
  return (getResourceDataOrFallback(hubFileData.variableCollections) ?? []).map(collection =>
    mapVariableSetProperties(collection, {
      type: "hubFile",
      file: hubFileData,
    }, context),
  )
}

/**
 * Extracts variables from collections and maps their properties
 * Original: u (helper function)
 */
function extractAndMapVariables(context: MappingContext, collections: VariableCollection[], mapContext: any): any[] {
  return (collections ?? [])
    .flatMap(collection => collection?.variables ?? [])
    .map(variable => mapVariableProperties(variable, context, mapContext))
}

/**
 * Maps variable properties from library collections
 * Original: $$c5
 */
export function mapVariablesFromLibraryCollections(resource: ResourceData, context: any): any[] {
  if (resource.status !== "loaded" || !resource.data.libraryKeyToFile) {
    return []
  }

  const libraryData = resource.data.libraryKeyToFile

  if (libraryData.hubFile) {
    const hubFileData = libraryData.hubFile
    const collections = getResourceDataOrFallback(hubFileData.variableCollections) ?? []
    return extractAndMapVariables({
      type: "hubFile",
      file: hubFileData,
    }, collections, context)
  }

  if (!libraryData.file) {
    return []
  }

  const fileData = libraryData.file
  return extractAndMapVariables({
    type: "team",
    file: fileData,
  }, fileData.variableCollections ?? [], context)
}

// Export aliases for backward compatibility
export const C$ = mapVariableSetsFromLibrary
export const UO = sortItemsByName
export const cM = mapVariablePropertiesFromResource
export const iw = sortVariableCollections
export const kX = mapAndSortVariableSets
export const q0 = mapVariablesFromLibraryCollections
