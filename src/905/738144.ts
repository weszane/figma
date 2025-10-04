import { mapStateGroupProperties } from "../figma_app/349248"

interface FileData {
  hubFileId: string
  libraryKey: string
  stateGroups: any[]
}

interface LoadedData {
  status: "loaded"
  data: {
    file: FileData
  }
}

interface NotLoadedData {
  status: "not_loaded" | "loading" | "error"
}

type FileState = LoadedData | NotLoadedData

/**
 * Maps state group properties for a loaded file
 * Original function: $$r0
 * @param fileState - The file state object
 * @returns Array of mapped state groups
 */
export function mapFileStateGroups(fileState: FileState | null): ReturnType<typeof mapStateGroupProperties>[] {
  // Early return for empty or not loaded state
  if (!fileState || fileState.status !== "loaded") {
    return []
  }

  const { file } = fileState.data

  // Return empty array if no file data
  if (!file) {
    return []
  }

  // Map each state group with hub file context
  return file.stateGroups.map(stateGroup =>
    mapStateGroupProperties(stateGroup, {
      type: "hubFile",
      file: {
        id: file.hubFileId,
        libraryKey: file.libraryKey,
      },
    }),
  )
}

// Export alias for backward compatibility
export const o = mapFileStateGroups
