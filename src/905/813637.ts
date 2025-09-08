import { throwTypeError } from "../figma_app/465776";
import { WhiteboardIntegrationType } from "../figma_app/763686";
import { getI18nString } from "../905/303541";
export function $$s0(e) {
  switch (e) {
    case WhiteboardIntegrationType.MIRO:
      return getI18nString("fullscreen.file_import.import_miro_pdf_failed");
    case WhiteboardIntegrationType.MURAL:
      return getI18nString("fullscreen.file_import.import_mural_pdf_failed");
    case WhiteboardIntegrationType.LUCID:
      return getI18nString("fullscreen.file_import.import_lucid_pdf_failed");
    case WhiteboardIntegrationType.JAMBOARD:
      return getI18nString("fullscreen.file_import.import_jamboard_pdf_failed");
    case WhiteboardIntegrationType.UNKNOWN:
      return getI18nString("fullscreen.file_import.import_unknown_pdf_failed");
    default:
      throwTypeError(e);
  }
}
export const P = $$s0;