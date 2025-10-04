import { getI18nString } from "../905/303541"
import { getWhiteboardImportErrorMessage } from "../905/813637"
import { WhiteboardIntegrationType } from "../figma_app/763686"

// Error handling utilities and custom error classes for file import operations

interface ErrorConstructorParams {
  message: string
  logString: string
  imageUploadError?: boolean
}

/**
 * Get localized error message for permission-related import errors
 * Original function: $$l3
 * @param folderName - Name of the folder where import permission is denied
 * @returns Localized error message string
 */
export function getImportPermissionErrorMessage(folderName?: string): string {
  return folderName
    ? getI18nString("fullscreen.file_import.you_don_t_have_permissions_to_import_in_folder_name", {
      folderName,
    })
    : getI18nString("fullscreen.file_import.you_don_t_have_permissions_to_import")
}

/**
 * Base error class for import-related errors
 * Original class: $$d2
 */
export class ImportBaseError extends Error {
  logString: string
  imageUploadError: boolean

  constructor(params: ErrorConstructorParams) {
    super(params.message)
    this.logString = params.logString
    this.imageUploadError = params.imageUploadError ?? false
  }
}

/**
 * Extended error class for specific import errors
 * Original class: $$c6
 */
export class ImportSpecificError extends ImportBaseError { }

/**
 * Error class for service-related issues
 * Original class: u
 */
class ServiceError extends ImportBaseError { }

/**
 * Namespace for import-specific error types
 * Original namespace: $$n1
 */
export namespace ImportErrors {
  /**
   * Error for canceled import operations
   */
  export class Canceled extends ImportSpecificError {
    constructor() {
      super({
        message: getI18nString("file_browser.file_import_view.file_row_import_cancel"),
        logString: "canceled",
      })
    }
  }

  /**
   * Error for incompatible font sizes in imported files
   */
  export class IncompatibleFontSizes extends ImportSpecificError {
    constructor() {
      super({
        message: getI18nString("fullscreen.file_import.file_contains_text_either_too_big_or_too_small"),
        logString: "incompatible_font_sizes",
      })
    }
  }

  /**
   * Error for timed out import operations
   */
  export class Timeout extends ImportSpecificError {
    constructor() {
      super({
        message: getI18nString("fullscreen.file_import.file_timed_out"),
        logString: "timeout",
      })
    }
  }

  /**
   * Generic PDF import error
   */
  export class GenericPdfError extends ImportSpecificError {
    constructor(errorType: WhiteboardIntegrationType) {
      super({
        message: getWhiteboardImportErrorMessage(errorType),
        logString: "generic_pdf_error",
      })
    }
  }

  /**
   * Error for blocked PDF imports
   */
  export class PdfImportBlocked extends ImportSpecificError {
    constructor() {
      super({
        message: getWhiteboardImportErrorMessage(WhiteboardIntegrationType.UNKNOWN),
        logString: "pdf_import_blocked",
      })
    }
  }

  /**
   * Error for invalid permissions during import
   */
  export class InvalidPermissions extends ImportSpecificError {
    constructor(folderName?: string) {
      super({
        message: getImportPermissionErrorMessage(folderName),
        logString: "invalid_permissions",
      })
    }
  }

  /**
   * Error for PDF files that are too large
   */
  export class PdfTooLarge extends ImportSpecificError {
    constructor() {
      super({
        message: getI18nString("fullscreen.file_import.your_pdf_is_larger_than_50mb"),
        logString: "pdf_too_large",
      })
    }
  }

  /**
   * Error for SVG files imported from file browser
   */
  export class SvgFromFileBrowser extends ImportSpecificError {
    constructor() {
      super({
        message: getI18nString("fullscreen.file_import.to_import_an_svg_drag_it_directly_into_an_open_figma_file"),
        logString: "svg_from_file_browser",
      })
    }
  }

  /**
   * Generic PPTX import error
   */
  export class GenericPptxError extends ImportSpecificError {
    constructor() {
      super({
        message: getI18nString("fullscreen.file_import.could_not_convert_file"),
        logString: "generic_pptx_error",
      })
    }
  }
}

/**
 * Namespace for service-related errors
 * Original namespace: $$r4
 */
export namespace ServiceErrors {
  /**
   * Error for temporarily unavailable services
   */
  export class ServiceUnavailable extends ServiceError {
    constructor() {
      super({
        message: getI18nString("fullscreen.file_import.oops_this_service_is_temporarily_unavailable"),
        logString: "service_unavailable",
      })
    }
  }

  /**
   * Error for failed image uploads
   */
  export class ImageUploadFailed extends ServiceError {
    constructor() {
      super({
        message: getI18nString("fullscreen.file_import.unable_to_import"),
        logString: "image_upload_failed",
        imageUploadError: true,
      })
    }
  }

  /**
   * Error when no blob is available
   */
  export class NoBlob extends ServiceError {
    constructor() {
      super({
        message: getI18nString("fullscreen.file_import.could_not_convert_file"),
        logString: "no_blob",
      })
    }
  }

  /**
   * Error for unknown conversion issues
   */
  export class UnknownConversionError extends ServiceError {
    constructor() {
      super({
        message: getI18nString("fullscreen.file_import.could_not_convert_file"),
        logString: "unknown_conversion_error",
      })
    }
  }
}

// Error tracking array and utilities
/**
 * Array to track import errors
 * Original variable: $$p5
 */
export let importErrorTracker: ImportBaseError[] = []

/**
 * Reset the import error tracker
 * Original function: $$m0
 */
export function resetImportErrorTracker(): void {
  importErrorTracker = []
}

// Export aliases for backward compatibility
export const MS = resetImportErrorTracker

export const OL = ImportErrors
export const Yw = ImportBaseError
export const cu = getImportPermissionErrorMessage
export const lZ = ServiceErrors
export const pl = importErrorTracker
export const zX = ImportSpecificError
