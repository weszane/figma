/**
 * Extracts copy and export restriction arguments from the open file object.
 *
 * @param e - The input object containing the openFile property
 * @returns An object with copyExportRestrictedArgs containing the restriction flags or null if no openFile
 *
 * Original function name: $$n0
 */
export function extractCopyExportRestrictions(e: {
  openFile?: {
    canEdit: boolean
    canExport: boolean
    viewerExportRestricted: boolean
  }
}): {
  copyExportRestrictedArgs: {
    canEdit: boolean
    canExport: boolean
    viewerExportRestricted: boolean
  } | null
} {
  return {
    copyExportRestrictedArgs: e.openFile
      ? {
        canEdit: e.openFile.canEdit,
        canExport: e.openFile.canExport,
        viewerExportRestricted: e.openFile.viewerExportRestricted,
      }
      : null,
  }
}

// Alias for backward compatibility
export const S = extractCopyExportRestrictions
