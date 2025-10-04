import { mapStyleProperties } from "../figma_app/349248"

export function extractHubFileStyles(data: any) {
  const styles: any[] = []

  if (data?.status === "loaded") {
    const library = data.data.communityLibraryByHubFileId

    if (library?.libraryHierarchyPaths) {
      for (const hierarchyPath of library.libraryHierarchyPaths) {
        for (const style of hierarchyPath.styles) {
          styles.push(mapStyleProperties(style, {
            type: "hubFile",
            file: {
              id: library.hubFileId,
              libraryKey: library.libraryKey,
            },
          }))
        }
      }
    }
  }

  return styles
}

export const F = extractHubFileStyles
