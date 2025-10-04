import { reportError } from "../905/11";
import { getWhiteboardIntegrationName } from "../905/163189";
import { ServiceCategories } from "../905/165054";
import { getI18nString } from "../905/303541";
import { initializeFullscreenForNewFile } from "../905/327855";
import { analyticsEventManager } from "../905/449184";
import { ImportErrors } from "../905/615657";
import { isAllowedOrgAtom } from "../905/758526";
import { pdfImportManagerInstance } from "../905/901759";
import { atomStoreManager } from "../figma_app/27355";
import { FEditorType } from "../figma_app/53721";
import { fullscreenValue } from "../figma_app/455680";
import { throwTypeError } from "../figma_app/465776";
import { getImageManager } from "../figma_app/624361";
import { Fullscreen, PerfResult } from "../figma_app/763686";

interface ImportResult {
  state: string;
  error?: string;
}
interface PdfConversionResult {
  status: PerfResult;
  images: Array<{
    sha1Hash: string;
    nodeIds: string[];
  }>;
  hadImageExtractError: boolean;
}
interface ProcessedFile {
  file: {
    name: string;
    type: string;
    bytes: Uint8Array;
    thumbnail: {
      bytes: Uint8Array;
      clientMeta: Record<string, unknown>;
    };
    version: number;
  };
  images: Array<{
    sha1Hash: string;
    nodeIds: string[];
  }>;
  videos: never[];
  warnings: string[];
}

/**
 * Tracks PDF import completion metrics
 * Original function: $$A0
 * @param result - The import result object
 * @param entryPoint - The entry point for the import
 * @param fileSize - Size of the PDF file
 * @param source - Source of the PDF import
 */
export function trackPdfImportCompletion(result: ImportResult, entryPoint: string, fileSize: number, source: any): void {
  const {
    state,
    error
  } = function (result: ImportResult): {
    state: string;
    error?: string;
  } {
    switch (result.state) {
      case "failed":
        return {
          state: result.state,
          error: result.error
        };
      case "canceled":
      case "success":
      case "warning":
        return {
          state: result.state,
          error: undefined
        };
      default:
        throwTypeError(result);
    }
  }(result);
  analyticsEventManager.trackDefinedMetric("file_import.pdf_import_completed", {
    state,
    entryPoint,
    fileSize,
    pdfSource: getWhiteboardIntegrationName(source),
    error
  });
}

/**
 * Processes PDF import and conversion
 * Original function: $$y1
 * @param documentId - The document ID
 * @param fileName - Name of the file being imported
 * @param fileBlob - The PDF file blob
 * @param pdfType - Type of the PDF
 * @returns Processed file with images and warnings
 */
export async function processPdfImport(documentId: string, fileName: string, fileBlob: Blob, pdfType: any): Promise<ProcessedFile> {
  if (atomStoreManager.get(isAllowedOrgAtom)) {
    throw new ImportErrors.PdfImportBlocked();
  }
  const pdfBytes = new Uint8Array(await fileBlob.arrayBuffer());
  fullscreenValue.resetLoadedFigFile();
  await initializeFullscreenForNewFile(documentId, FEditorType.Whiteboard);
  const conversionResult: PdfConversionResult = await pdfImportManagerInstance.convertPdf({
    pdfBytes,
    pdfType
  });
  const {
    status
  } = conversionResult;
  switch (status) {
    case PerfResult.SUCCESS:
      break;
    case PerfResult.ERROR_TEXT_SIZE:
      throw new ImportErrors.IncompatibleFontSizes();
    case PerfResult.TIMEOUT:
      throw new ImportErrors.Timeout();
    case PerfResult.ERROR_OTHER:
      throw new ImportErrors.GenericPdfError(pdfType);
    default:
      throwTypeError(status);
  }
  const {
    images,
    hadImageExtractError
  } = conversionResult;
  let hadImagePopulationError = false;
  try {
    const imageHashes = images.map(image => image.nodeIds.map(nodeId => ({
      nodeId,
      imageHash: image.sha1Hash
    }))).reduce((acc, curr) => acc.concat(curr), []);
    Fullscreen.populatePdfImagesWithImageHashes(imageHashes);
  } catch (error) {
    hadImagePopulationError = true;
    reportError(ServiceCategories.FIGJAM, error);
  }
  const sceneBytes = Fullscreen.getScene();
  images.forEach(image => {
    getImageManager().forgetImage(image.sha1Hash);
  });
  return {
    file: {
      name: fileName,
      type: "jam",
      bytes: sceneBytes,
      thumbnail: {
        bytes: new Uint8Array(),
        clientMeta: {}
      },
      version: 15
    },
    images,
    videos: [],
    warnings: hadImageExtractError || hadImagePopulationError ? [getI18nString("fullscreen.file_import.import_pdf_images_not_imported")] : []
  };
}
export const Ij = trackPdfImportCompletion;
export const Lg = processPdfImport;
