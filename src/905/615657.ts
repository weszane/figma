import { h62 } from "../figma_app/763686";
import { t } from "../905/303541";
import { P } from "../905/813637";
var $$n1;
var $$r4;
export function $$l3(e) {
  return e ? t("fullscreen.file_import.you_don_t_have_permissions_to_import_in_folder_name", {
    folderName: e
  }) : t("fullscreen.file_import.you_don_t_have_permissions_to_import");
}
export class $$d2 extends Error {
  constructor(e, t, i = !1) {
    super(e);
    this.logString = t;
    this.imageUploadError = i;
  }
}
export class $$c6 extends $$d2 {}
class u extends $$d2 {}
(e => {
  e.Canceled = class extends $$c6 {
    constructor() {
      super(t("file_browser.file_import_view.file_row_import_cancel"), "canceled");
    }
  };
  e.IncompatibleFontSizes = class extends $$c6 {
    constructor() {
      super(t("fullscreen.file_import.file_contains_text_either_too_big_or_too_small"), "incompatible_font_sizes");
    }
  };
  e.Timeout = class extends $$c6 {
    constructor() {
      super(t("fullscreen.file_import.file_timed_out"), "timeout");
    }
  };
  e.GenericPdfError = class extends $$c6 {
    constructor(e) {
      super(P(e), "generic_pdf_error");
    }
  };
  e.PdfImportBlocked = class extends $$c6 {
    constructor() {
      super(P(h62.UNKNOWN), "pdf_import_blocked");
    }
  };
  e.InvalidPermissions = class extends $$c6 {
    constructor(e) {
      super($$l3(e), "invalid_permissions");
    }
  };
  e.PdfTooLarge = class extends $$c6 {
    constructor() {
      super(t("fullscreen.file_import.your_pdf_is_larger_than_50mb"), "pdf_too_large");
    }
  };
  e.SvgFromFileBrowser = class extends $$c6 {
    constructor() {
      super(t("fullscreen.file_import.to_import_an_svg_drag_it_directly_into_an_open_figma_file"), "svg_from_file_browser");
    }
  };
  e.GenericPptxError = class extends $$c6 {
    constructor() {
      super(t("fullscreen.file_import.could_not_convert_file"), "generic_pptx_error");
    }
  };
})($$n1 || ($$n1 = {}));
(e => {
  e.ServiceUnavailable = class extends u {
    constructor() {
      super(t("fullscreen.file_import.oops_this_service_is_temporarily_unavailable"), "service_unavailable");
    }
  };
  e.ImageUploadFailed = class extends u {
    constructor() {
      super(t("fullscreen.file_import.unable_to_import"), "image_upload_failed", !0);
    }
  };
  e.NoBlob = class extends u {
    constructor() {
      super(t("fullscreen.file_import.could_not_convert_file"), "no_blob");
    }
  };
  e.UnknownConversionError = class extends u {
    constructor() {
      super(t("fullscreen.file_import.could_not_convert_file"), "unknown_conversion_error");
    }
  };
})($$r4 || ($$r4 = {}));
export let $$p5 = [];
export function $$m0() {
  $$p5 = [];
}
export const MS = $$m0;
export const OL = $$n1;
export const Yw = $$d2;
export const cu = $$l3;
export const lZ = $$r4;
export const pl = $$p5;
export const zX = $$c6;