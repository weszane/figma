import { useMemo } from 'react'
import { useMemoShallow } from '../905/19536'
import { getFeatureFlags } from '../905/601108'
import { logInfo } from '../905/714362'
import { areSetsEqual } from '../905/760682'
import { libraryModuleDataAtomFamily } from '../905/888985'
import { ResourceStatus } from '../905/957591'
import { resourceUtils } from '../905/989992'
import { atom, createRemovableAtomFamily, useAtomWithSubscription } from '../figma_app/27355'
import { LibraryModuleData, LibraryModuleDataByLibraryKey } from '../figma_app/43951'
import { mapTemplateProperties } from '../figma_app/349248'
import { useCurrentFileKey } from '../figma_app/516028'
import { arraysEqual } from '../figma_app/656233'
import { TemplateType } from '../figma_app/763686'

// Atom families for library module data
const libraryModuleDataAtomFamilyForFile = createRemovableAtomFamily((fileKey: string) => libraryModuleDataAtomFamily({
  fileKey,
}))

createRemovableAtomFamily((fileKeys: string[]) => atom((get) => {
  const result: Record<string, any> = {}
  for (const fileKey of fileKeys) {
    result[fileKey] = get(LibraryModuleData.Query({
      fileKey,
    }))
  }
  return result
}), arraysEqual)

const libraryModuleDataByLibraryKeyAtomFamily = createRemovableAtomFamily((libraryKeys) => atom((get) => {
  const result: Record<string, any> = {}
  for (const libraryKey of libraryKeys) {
    result[libraryKey] = get(LibraryModuleDataByLibraryKey.Query({
      libraryKey,
    }))
  }
  return result
}), areSetsEqual)

const ALL_SOURCES = 'all_sources'

/**
 * Processes a single library module data entry to extract modules based on source filter.
 * @param libraryData - The library data resource.
 * @param sourceFilter - The source filter, defaults to ALL_SOURCES.
 * @returns Array of processed modules.
 */
function processLibraryModules(libraryData: any, sourceFilter: string = ALL_SOURCES): any[] {
  if (libraryData?.status !== 'loaded') {
    logInfo('Modules', `Library atom value status not loaded: ${libraryData?.status}`)
    return []
  }
  const libraryKeyToFile = libraryData.data.libraryKeyToFile
  if (libraryKeyToFile?.status !== ResourceStatus.Loaded || !libraryKeyToFile.data) {
    logInfo('Modules', 'libraryKeyToFile not loaded')
    return []
  }
  const { file, hubFile } = libraryKeyToFile.data
  if (!file?.modules?.length && !hubFile?.modules_v2?.length) {
    logInfo('Modules', `${file ? 'File' : 'Hub File'} modules not loaded`)
    return []
  }
  let modules: any[] = []
  if (file?.modules?.length) {
    const fileModules = file.modules
      .map((module: any) => mapTemplateProperties(module, {
        type: 'teamTemplate',
        file,
      }))
      .filter(isModuleEnabled)
      .filter((module: any) => sourceFilter === ALL_SOURCES || module.moduleSource === sourceFilter)
    modules = modules.concat(fileModules)
  }
  if (hubFile?.modules_v2?.length) {
    const hubModules = hubFile.modules_v2.map((module: any) => mapTemplateProperties(module, {
      type: 'hubFile',
      file: hubFile,
    }))
    modules = modules.concat(hubModules)
  }
  return filterModules(modules, sourceFilter)
}

/**
 * Hook to get library modules by library keys with optional source filtering.
 * @param libraryKeys - Array of library keys.
 * @param sourceFilter - The source filter, defaults to ALL_SOURCES.
 * @returns Memoized resource containing filtered modules.
 */
export function useLibraryModules(libraryKeys: string[], sourceFilter: string = ALL_SOURCES) {
  const libraryDataAtom = libraryModuleDataByLibraryKeyAtomFamily(libraryKeys)
  const libraryData = useAtomWithSubscription(libraryDataAtom)
  return useMemoShallow(() => {
    const allResources = resourceUtils.all(Object.values(libraryData))
    if (allResources.status !== 'loaded') {
      return allResources.transform(() => ({}))
    }
    return resourceUtils.loaded(Object.fromEntries(
      Object.entries(libraryData).map(([key, data]) => [
        key,
        processLibraryModules(data, sourceFilter),
      ]),
    ))
  }, [libraryData, sourceFilter])
}

/**
 * Processes current file modules.
 * @param fileData - The file data resource.
 * @param sourceFilter - The source filter, defaults to ALL_SOURCES.
 * @returns Array of processed modules.
 */
function processCurrentFileModules(fileData: any, sourceFilter: string = ALL_SOURCES): any[] {
  if (fileData?.status !== 'loaded') {
    return []
  }
  const file = fileData.data.file
  if (!file) {
    return []
  }
  return filterModules(
    file.modules.map((module: any) => mapTemplateProperties(module, {
      type: 'team',
      file,
    })),
    sourceFilter,
  )
}

/**
 * Hook to get modules from the current file with optional source filtering.
 * @param sourceFilter - The source filter, defaults to ALL_SOURCES.
 * @returns Memoized array of filtered modules.
 */
export function useCurrentFileModules(sourceFilter: string = ALL_SOURCES) {
  const currentFileKey = useCurrentFileKey()
  const fileDataAtom = useMemo(() => currentFileKey ? libraryModuleDataAtomFamilyForFile(currentFileKey) : atom(null), [currentFileKey])
  const fileData = useAtomWithSubscription(fileDataAtom)
  return useMemo(() => {
    const resource = fileData != null ? resourceUtils.from(fileData) : undefined
    return processCurrentFileModules(resource, sourceFilter)
  }, [fileData])
}

/**
 * Checks if a module is enabled based on feature flags and template type.
 * @param module - The module to check.
 * @returns True if enabled, false otherwise.
 */
export function isModuleEnabled(module: any): boolean {
  if (!getFeatureFlags().dse_module_publish) {
    return false
  }
  switch (module.moduleSource) {
    case TemplateType.EDITOR_TEMPLATE:
      return false
    case TemplateType.SLIDES_TEMPLATE:
      return true
    case TemplateType.SITES_TEMPLATE:
      return !!getFeatureFlags().sites
    case TemplateType.LITE_TEMPLATE:
      return !!getFeatureFlags().cooper
    default:
      return false
  }
}

/**
 * Filters modules based on source and enabled status.
 * @param modules - Array of modules to filter.
 * @param sourceFilter - The source filter.
 * @returns Filtered array of modules.
 */
function filterModules(modules: any[], sourceFilter: string): any[] {
  return modules.filter(module =>
    (sourceFilter === ALL_SOURCES || module.moduleSource === sourceFilter) && isModuleEnabled(module),
  )
}

// Updated exports to match refactored names
export const RX = isModuleEnabled
export const uW = useLibraryModules
export const Ns = useCurrentFileModules
