import { throwTypeError } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { MEW, glU } from "../figma_app/763686";
import { zl } from "../figma_app/27355";
import { az } from "../905/449184";
import { $D } from "../905/11";
import { t as _$$t } from "../905/303541";
import { Y5 } from "../figma_app/455680";
import { Jr } from "../figma_app/624361";
import { U_ } from "../905/327855";
import { nT } from "../figma_app/53721";
import { bT } from "../905/163189";
import { D } from "../905/758526";
import { OL } from "../905/615657";
import { IY } from "../905/901759";
export function $$A0(e, t, i, r) {
  let {
    state,
    error
  } = function (e) {
    switch (e.type) {
      case "failed":
        return {
          state: e.type,
          error: e.error.logString
        };
      case "canceled":
      case "success":
      case "warning":
        return {
          state: e.type,
          error: void 0
        };
      default:
        throwTypeError(e);
    }
  }(e);
  az.trackDefinedMetric("file_import.pdf_import_completed", {
    state,
    entryPoint: t,
    fileSize: i,
    pdfSource: bT(r),
    error
  });
}
export async function $$y1(e, t, i, o) {
  if (zl.get(D)) throw new OL.PdfImportBlocked();
  let h = new Uint8Array(await i.arrayBuffer());
  Y5.resetLoadedFigFile();
  await U_(e, nT.Whiteboard);
  let A = await IY.convertPdf({
    pdfBytes: h,
    pdfType: o
  });
  let y = A.status;
  switch (y) {
    case MEW.SUCCESS:
      break;
    case MEW.ERROR_TEXT_SIZE:
      throw new OL.IncompatibleFontSizes();
    case MEW.TIMEOUT:
      throw new OL.Timeout();
    case MEW.ERROR_OTHER:
      throw new OL.GenericPdfError(o);
    default:
      throwTypeError(y);
  }
  let {
    images,
    hadImageExtractError
  } = A;
  let I = !1;
  try {
    !function (e) {
      let t = e.map(e => e.nodeIds.map(t => ({
        nodeId: t,
        imageHash: e.sha1Hash
      }))).reduce((e, t) => e.concat(t), []);
      glU.populatePdfImagesWithImageHashes(t);
    }(images);
  } catch (e) {
    I = !0;
    $D(_$$e.FIGJAM, e);
  }
  let E = glU.getScene();
  images.forEach(e => {
    Jr().forgetImage(e.sha1Hash);
  });
  return {
    file: {
      name: t,
      type: "jam",
      bytes: E,
      thumbnail: {
        bytes: new Uint8Array(),
        clientMeta: {}
      },
      version: 15
    },
    images,
    videos: [],
    warnings: hadImageExtractError || I ? [_$$t("fullscreen.file_import.import_pdf_images_not_imported")] : []
  };
}
export const Ij = $$A0;
export const Lg = $$y1;