import { getI18nString } from "../905/303541"
import { throwTypeError } from "../figma_app/465776"
import { WhiteboardIntegrationType } from "../figma_app/763686"
/**
 * Gets the appropriate error message for a whiteboard import failure based on the integration type.
 *
 * @param integrationType - The type of whiteboard integration that failed
 * @returns Localized error message string for the specific integration type
 * @throws TypeError if an unknown integration type is provided
 */
export function getWhiteboardImportErrorMessage(integrationType: WhiteboardIntegrationType): string {
  switch (integrationType) {
    case WhiteboardIntegrationType.MIRO:
      return getI18nString("fullscreen.file_import.import_miro_pdf_failed")
    case WhiteboardIntegrationType.MURAL:
      return getI18nString("fullscreen.file_import.import_mural_pdf_failed")
    case WhiteboardIntegrationType.LUCID:
      return getI18nString("fullscreen.file_import.import_lucid_pdf_failed")
    case WhiteboardIntegrationType.JAMBOARD:
      return getI18nString("fullscreen.file_import.import_jamboard_pdf_failed")
    case WhiteboardIntegrationType.UNKNOWN:
      return getI18nString("fullscreen.file_import.import_unknown_pdf_failed")
    default:
      throwTypeError(integrationType)
  }
}

export const P = getWhiteboardImportErrorMessage
