import { throwTypeError } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { PerfResult, Fullscreen } from "../figma_app/763686";
import { atomStoreManager } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { reportError } from "../905/11";
import { getI18nString } from "../905/303541";
import { fullscreenValue } from "../figma_app/455680";
import { getImageManager } from "../figma_app/624361";
import { U_ } from "../905/327855";
import { FEditorType } from "../figma_app/53721";
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
  analyticsEventManager.trackDefinedMetric("file_import.pdf_import_completed", {
    state,
    entryPoint: t,
    fileSize: i,
    pdfSource: bT(r),
    error
  });
}
export async function $$y1(e, t, i, o) {
  if (atomStoreManager.get(D)) throw new OL.PdfImportBlocked();
  let h = new Uint8Array(await i.arrayBuffer());
  fullscreenValue.resetLoadedFigFile();
  await U_(e, FEditorType.Whiteboard);
  let A = await IY.convertPdf({
    pdfBytes: h,
    pdfType: o
  });
  let y = A.status;
  switch (y) {
    case PerfResult.SUCCESS:
      break;
    case PerfResult.ERROR_TEXT_SIZE:
      throw new OL.IncompatibleFontSizes();
    case PerfResult.TIMEOUT:
      throw new OL.Timeout();
    case PerfResult.ERROR_OTHER:
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
      Fullscreen.populatePdfImagesWithImageHashes(t);
    }(images);
  } catch (e) {
    I = !0;
    reportError(_$$e.FIGJAM, e);
  }
  let E = Fullscreen.getScene();
  images.forEach(e => {
    getImageManager().forgetImage(e.sha1Hash);
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
    warnings: hadImageExtractError || I ? [getI18nString("fullscreen.file_import.import_pdf_images_not_imported")] : []
  };
}
export const Ij = $$A0;
export const Lg = $$y1;