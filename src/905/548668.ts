import { FFileType } from "../figma_app/191312"
/**
 * Generates a new file URL based on the file type and template library key
 * @param fileType - The type of file to create (SLIDES or COOPER)
 * @param templateLibraryKey - The template library key to use for the new file
 * @returns The URL for creating a new file with the specified template
 */
export function slideOrCooperNewFileUrl(fileType: FFileType, templateLibraryKey: string): string {
  switch (fileType) {
    case FFileType.SLIDES:
      return `/slides/new?slide-template-library-key=${templateLibraryKey}`
    case FFileType.COOPER:
      return `/buzz/new?buzz-template-library-key=${templateLibraryKey}`
    default:
      return ""
  }
}

export const H = slideOrCooperNewFileUrl
