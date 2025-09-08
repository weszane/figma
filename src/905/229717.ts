// Types for alignment enums (original: $$n1, $$r5)
export enum HorizontalAlignment {
  LEFT = 0,
  CENTER = 1,
  RIGHT = 2,
  JUSTIFIED = 3,
}

export enum VerticalAlignment {
  TOP = 0,
  CENTER = 1,
  BOTTOM = 2,
}

/**
 * Axis enum (original: Axis)
 */
export enum Axis {
  X = 0,
  Y = 1,
}

// Internal state for observable value (original: s)
let writableObservableValueInternal: any;

/**
 * Base class for observable value (original: l)
 */
export class WritableObservableValue_VectorF_Internal {
  handle: any;

  /**
   * @param handle - The handle for the observable value
   */
  constructor(handle: any) {
    this.handle = handle;
  }
}

/**
 * Mutable observable value class (original: $$d0)
 */
export class MutableWritableObservableValue_VectorF extends WritableObservableValue_VectorF_Internal {
  /**
   * Returns a copy of the observable value
   * @returns {any}
   */
  getCopy(): any {
    return writableObservableValueInternal.getCopy(this.handle);
  }

  /**
   * Sets the value of the observable
   * @param value
   */
  set(value: any): void {
    writableObservableValueInternal.set(this.handle, value);
  }

  /**
   * Subscribes from JS
   * @param callback
   * @returns {any}
   */
  subscribeFromJs(callback: any): any {
    return writableObservableValueInternal.subscribeFromJs(this.handle, callback);
  }

  /**
   * Unsubscribes from JS
   * @param callback
   */
  unsubscribeFromJs(callback: any): void {
    writableObservableValueInternal.unsubscribeFromJs(this.handle, callback);
  }

  /**
   * @param handle - The handle for the observable value
   */
  constructor(handle: any) {
    super(handle);
    this.handle = handle;
  }
}

/**
 * Initializes the observable value system (original: $$c3)
 * @param e - The object containing WritableObservableValue_VectorF__Internal
 */
export function setupWritableObservableValue_VectorF(e: { WritableObservableValue_VectorF__Internal: any }): void {
  writableObservableValueInternal = e.WritableObservableValue_VectorF__Internal;
  globalThis.WritableObservableValue_VectorF_ = WritableObservableValue_VectorF_Internal;
  globalThis.MutableWritableObservableValue_VectorF_ = MutableWritableObservableValue_VectorF;
}

/**
 * Returns the internal writable observable value (original: $$u2)
 */
export function getWritableObservableValue_VectorF_Internal(): { writableObservableValue_VectorF__Internal: any } {
  return {
    writableObservableValue_VectorF__Internal: writableObservableValueInternal,
  };
}

// Exported variables with refactored names
export const Ae = MutableWritableObservableValue_VectorF; // original: $$d0
export const GP = HorizontalAlignment; // original: $$n1
export const KO = getWritableObservableValue_VectorF_Internal; // original: $$u2
export const LQ = setupWritableObservableValue_VectorF; // original: $$c3
export const _0 = Axis; // original: Axis
export const zb = VerticalAlignment; // original: $$r5
