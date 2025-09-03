import { throwTypeError } from "../figma_app/465776";
import { h62 } from "../figma_app/763686";
import { t } from "../905/303541";
export function $$s0(e) {
  switch (e) {
    case h62.MIRO:
      return t("fullscreen.file_import.import_miro_pdf_failed");
    case h62.MURAL:
      return t("fullscreen.file_import.import_mural_pdf_failed");
    case h62.LUCID:
      return t("fullscreen.file_import.import_lucid_pdf_failed");
    case h62.JAMBOARD:
      return t("fullscreen.file_import.import_jamboard_pdf_failed");
    case h62.UNKNOWN:
      return t("fullscreen.file_import.import_unknown_pdf_failed");
    default:
      throwTypeError(e);
  }
}
export const P = $$s0;