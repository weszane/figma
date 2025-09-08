/**
 * Enum representing hash modes.
 * @originalName n
 */
export enum HashMode {
  HASHES_ONLY = 0,
  HASHES_AND_DATA = 1,
}

/**
 * Stores the current HeadlessAppBindings reference.
 * @originalName r
 */
let headlessAppBindingsRef: any

/**
 * Sets the HeadlessAppBindings reference.
 * @param bindings - The bindings object containing HeadlessAppBindings.
 * @originalName $$a1
 */
export function setHeadlessAppBindings(bindings: { HeadlessAppBindings: any }) {
  headlessAppBindingsRef = bindings.HeadlessAppBindings
}

/**
 * Retrieves the current HeadlessAppBindings reference.
 * @returns An object containing the headlessAppBindings reference.
 * @originalName $$s0
 */
export function getHeadlessAppBindings(): { headlessAppBindings: any } {
  return {
    headlessAppBindings: headlessAppBindingsRef,
  }
}

// Export aliases for backward compatibility
export const KO = getHeadlessAppBindings
export const LQ = setHeadlessAppBindings
