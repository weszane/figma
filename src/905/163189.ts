import { FFileType } from "../figma_app/191312"
import { returnSecond, throwTypeError } from "../figma_app/465776"
import { WhiteboardIntegrationType } from "../figma_app/763686"

// Supported file types for import/export operations
export const SUPPORTED_FILE_TYPES: readonly FFileType[] = [
  FFileType.DESIGN,
  FFileType.WHITEBOARD,
  FFileType.SLIDES,
  FFileType.SITES,
  FFileType.COOPER,
  FFileType.FIGMAKE,
] as const

// Status codes for import/export operations
export enum ImportExportStatus {
  SUCCESS = 0,
  WARNING = 1,
  FAILURE = 2,
  BUSY = 3,
  WAITING = 4,
  CANCELED = 5,
}

// Event types for tracking import flow
export enum ImportEventType {
  START = "start",
  CONFIRM_PDF_IMPORT = "confirm_pdf_import",
  FILE_IMPORT_WITH_CANCELED_PDF = "file_import_with_canceled_pdf",
  FILE_IMPORT_WITH_CONFIRMED_PDF = "file_import_with_confirmed_pdf",
  IMPORT_REPO = "import_repo",
}

/**
 * Extracts the file extension from a filename
 * @param filename - The full filename
 * @returns The file extension including the dot (e.g., ".fig", ".pdf")
 */
export function getFileExtension(filename: string): string {
  const nameWithoutExtension = filename.replace(/\.[^.]+$/, "")
  return filename.slice(nameWithoutExtension.length)
}

/**
 * Determines the file type based on file extension
 * @param file - File object containing name property
 * @returns The corresponding FFileType
 */
export function determineFileType(file: { name: string }): FFileType {
  const fileName = file.name
  return isPdfFile(fileName) || hasExtension(fileName, ".jam")
    ? FFileType.WHITEBOARD
    : hasExtension(fileName, ".deck") || hasExtension(fileName, ".pptx")
      ? FFileType.SLIDES
      : hasExtension(fileName, ".site")
        ? FFileType.SITES
        : hasExtension(fileName, ".buzz")
          ? FFileType.COOPER
          : hasExtension(fileName, ".make")
            ? FFileType.FIGMAKE
            : FFileType.DESIGN
}

/**
 * Checks if a filename has a specific extension
 * @param filename - The filename to check
 * @param extension - The extension to match (with or without leading dot)
 * @returns True if the filename has the specified extension
 */
function hasExtension(filename: string, extension: string): boolean {
  const normalizedExt = extension.startsWith(".") ? extension : `.${extension}`
  return getFileExtension(filename).toLowerCase() === normalizedExt
}

/**
 * Checks if a file is a PDF
 * @param filename - The filename to check
 * @returns True if the file is a PDF
 */
export function isPdfFile(filename: string): boolean {
  return hasExtension(filename, ".pdf")
}

/**
 * Maps string identifiers to FFileType values
 * @param typeIdentifier - String identifier for the file type
 * @returns Corresponding FFileType or null for unknown types
 */
export function mapFileTypeFromString(typeIdentifier: string): FFileType | null {
  switch (typeIdentifier) {
    case "fig":
      return FFileType.DESIGN
    case "jam":
      return FFileType.WHITEBOARD
    case "deck":
      return FFileType.SLIDES
    case "sites":
      return FFileType.SITES
    case "buzz":
      return FFileType.COOPER
    case "figmake":
      return FFileType.FIGMAKE
    default:
      return returnSecond(typeIdentifier, null)
  }
}

/**
 * Gets human-readable name for whiteboard integration types
 * @param integrationType - The whiteboard integration type
 * @returns Human-readable name of the integration
 */
export function getWhiteboardIntegrationName(integrationType: WhiteboardIntegrationType): string {
  switch (integrationType) {
    case WhiteboardIntegrationType.MIRO:
      return "Miro"
    case WhiteboardIntegrationType.MURAL:
      return "Mural"
    case WhiteboardIntegrationType.LUCID:
      return "Lucid"
    case WhiteboardIntegrationType.JAMBOARD:
      return "Jamboard"
    case WhiteboardIntegrationType.UNKNOWN:
      return "Unknown"
    default:
      throwTypeError(integrationType)
  }
}

// Export aliases for backward compatibility
export const Ec = mapFileTypeFromString
export const Mk = SUPPORTED_FILE_TYPES
export const NU = determineFileType
export const Y5 = ImportEventType
export const bT = getWhiteboardIntegrationName
export const dv = getFileExtension
export const kI = isPdfFile
export const mO = ImportExportStatus
