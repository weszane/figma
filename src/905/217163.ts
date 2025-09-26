import { buildFileUrl, getCommunityFileUrl } from '../905/612685'
import { resourceUtils } from '../905/989992'
import { LibraryKeyToFileLink } from '../figma_app/43951'
import { useSubscription } from '../figma_app/288654'

interface LibraryFileHookProps {
  libraryKey?: string
  disabled?: boolean
  nodeId?: string
  mainComponent?: any
  stateGroupId?: string
  isDevHandoff?: boolean
  isDevModeVarsTable?: boolean
  devModeVarsTableSelection?: any
  isDevModeOverview?: boolean
  devModeFocusId?: string
  isDevModeComponentBrowser?: boolean
  componentKey?: string
}

interface LibraryFileData {
  libraryKeyToFile?: {
    fileCanAccess?: {
      key: string
    }
    hubFile?: {
      id: string
    }
  }
}

interface FileLinkResult {
  type: 'team' | 'community'
  link: string
}

/**
 * Hook to get file link information from a library key
 * Original name: $$o0
 */
export function useLibraryFileLink({
  libraryKey,
  disabled,
  nodeId,
  mainComponent,
  stateGroupId,
  isDevHandoff,
  isDevModeVarsTable,
  devModeVarsTableSelection,
  isDevModeOverview,
  devModeFocusId,
  isDevModeComponentBrowser,
  componentKey,
}: LibraryFileHookProps) {
  const subscription = useSubscription(
    LibraryKeyToFileLink({
      libraryKey: libraryKey ?? '',
    }),
    {
      enabled: !disabled && !!libraryKey,
    },
  )

  return resourceUtils.useTransform(
    subscription,
    data =>
      transformLibraryFileData({
        data,
        nodeId,
        stateGroupId,
        isDevHandoff,
        isDevModeOverview,
        isDevModeVarsTable,
        devModeVarsTableSelection,
        devModeFocusId,
        mainComponent,
        isDevModeComponentBrowser,
        componentKey,
      }),
  )
}

/**
 * Transform library file data into a link result
 * Original name: $$l1
 */
export function transformLibraryFileData({
  data,
  nodeId,
  stateGroupId,
  isDevHandoff,
  isDevModeVarsTable,
  devModeVarsTableSelection,
  isDevModeOverview,
  devModeFocusId,
  mainComponent,
  isDevModeComponentBrowser,
  componentKey,
}: {
  data: LibraryFileData
  nodeId?: string
  stateGroupId?: string
  isDevHandoff?: boolean
  isDevModeVarsTable?: boolean
  devModeVarsTableSelection?: any
  isDevModeOverview?: boolean
  devModeFocusId?: string
  mainComponent?: any
  isDevModeComponentBrowser?: boolean
  componentKey?: string
}): FileLinkResult | undefined {
  const libraryKeyToFile = data.libraryKeyToFile

  if (!libraryKeyToFile) {
    return undefined
  }

  if (libraryKeyToFile.fileCanAccess) {
    return {
      type: 'team',
      link: buildFileUrl({
        file: {
          key: libraryKeyToFile.fileCanAccess.key,
        },
        nodeId,
        mainComponent,
        stateGroupId,
        isDevHandoff,
        isDevModeOverview,
        isDevModeVarsTable,
        devModeVarsTableSelection,
        devModeFocusId,
        isDevModeComponentBrowser,
        componentKey,
      }),
    }
  }

  if (libraryKeyToFile.hubFile) {
    return {
      type: 'community',
      link: getCommunityFileUrl(libraryKeyToFile.hubFile.id),
    }
  }

  return undefined
}

export const b = useLibraryFileLink
export const c = transformLibraryFileData
