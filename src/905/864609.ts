// Enums for color management and formats
/**
 * Enum for SRGB and DISPLAY_P3 color spaces (RY).
 */
export enum ColorSpaceEnum {
  SRGB = 0,
  DISPLAY_P3 = 1,
}

/**
 * Enum for legacy, SRGB, and DISPLAY_P3 color profiles (yw).
 */
export enum ColorProfileEnum {
  LEGACY = 0,
  SRGB = 1,
  DISPLAY_P3 = 2,
}

/**
 * Enum for document color profiles (hz).
 */
export enum DocumentColorProfileEnum {
  DOCUMENT = 0,
  SRGB = 1,
  DISPLAY_P3_V4 = 2,
  CMYK = 3,
}

/**
 * Enum for color conversion types (KX).
 */
export enum ColorConversionEnum {
  NO_CONVERSION = 0,
  SRGB_TO_DISPLAY_P3 = 1,
  DISPLAY_P3_TO_SRGB = 2,
}

/**
 * Enum for color formats (NV).
 */
export enum ColorFormatEnum {
  HEX = 0,
  RGB = 1,
  CSS = 2,
  HSL = 3,
  HSB = 4,
  UIColor = 5,
}

/**
 * Enum for yes/no values (UF).
 */
export enum YesNoEnum {
  NO = 0,
  YES = 1,
}

// Internal state holders
export let colorManagementStateJs: any;
export let observableValueDocumentColorProfileInternal: any;
export let writableObservableValueColorFormatInternal: any;

/**
 * Base class for observable document color profile values (ObservableValue_DocumentColorProfile_).
 */
export class ObservableValueDocumentColorProfile {
  /** @param handle - The internal handle for the observable value */
  constructor(public handle: any) {}
}

/**
 * Mutable observable value for document color profile (MutableObservableValue_DocumentColorProfile_).
 */
export class MutableObservableValueDocumentColorProfile extends ObservableValueDocumentColorProfile {
  /** Returns a copy of the observable value */
  getCopy() {
    return observableValueDocumentColorProfileInternal.getCopy(this.handle);
  }
  /** Subscribes from JS */
  subscribeFromJs(callback: any) {
    return observableValueDocumentColorProfileInternal.subscribeFromJs(this.handle, callback);
  }
  /** Unsubscribes from JS */
  unsubscribeFromJs(callback: any) {
    observableValueDocumentColorProfileInternal.unsubscribeFromJs(this.handle, callback);
  }
  constructor(handle: any) {
    super(handle);
    this.handle = handle;
  }
}

/**
 * Base class for writable observable color format values (WritableObservableValue_ColorFormat_).
 */
export class WritableObservableValueColorFormat {
  /** @param handle - The internal handle for the writable observable value */
  constructor(public handle: any) {}
}

/**
 * Mutable writable observable value for color format (MutableWritableObservableValue_ColorFormat_).
 */
export class MutableWritableObservableValueColorFormat extends WritableObservableValueColorFormat {
  /** Returns a copy of the writable value */
  getCopy() {
    return writableObservableValueColorFormatInternal.getCopy(this.handle);
  }
  /** Sets the value */
  set(value: any) {
    writableObservableValueColorFormatInternal.set(this.handle, value);
  }
  /** Subscribes from JS */
  subscribeFromJs(callback: any) {
    return writableObservableValueColorFormatInternal.subscribeFromJs(this.handle, callback);
  }
  /** Unsubscribes from JS */
  unsubscribeFromJs(callback: any) {
    writableObservableValueColorFormatInternal.unsubscribeFromJs(this.handle, callback);
  }
  constructor(handle: any) {
    super(handle);
    this.handle = handle;
  }
}

/**
 * Initializes internal state and global references (LQ).
 * @param e - The initialization object containing internal implementations
 */
export function initializeColorManagement(e: any) {
  colorManagementStateJs = e.ColorManagementStateJs;
  observableValueDocumentColorProfileInternal = e.ObservableValue_DocumentColorProfile__Internal;
  globalThis.ObservableValue_DocumentColorProfile_ = ObservableValueDocumentColorProfile;
  globalThis.MutableObservableValue_DocumentColorProfile_ = MutableObservableValueDocumentColorProfile;
  writableObservableValueColorFormatInternal = e.WritableObservableValue_ColorFormat__Internal;
  globalThis.WritableObservableValue_ColorFormat_ = WritableObservableValueColorFormat;
  globalThis.MutableWritableObservableValue_ColorFormat_ = MutableWritableObservableValueColorFormat;
}

/**
 * Returns the current color management state (KO).
 */
export function getColorManagementState() {
  return {
    colorManagementStateJs,
    observableValue_DocumentColorProfile__Internal: observableValueDocumentColorProfileInternal,
    writableObservableValue_ColorFormat__Internal: writableObservableValueColorFormatInternal,
  };
}

// Exported variables for external usage
export const H4 = colorManagementStateJs;
export const KO = getColorManagementState;
export const KX = ColorConversionEnum;
export const LQ = initializeColorManagement;
export const NV = ColorFormatEnum;
export const RY = ColorSpaceEnum;
export const UF = YesNoEnum;
export const hz = DocumentColorProfileEnum;
export const yw = ColorProfileEnum;
export const zc = MutableWritableObservableValueColorFormat;
