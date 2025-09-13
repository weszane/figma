import { getStorage } from '../905/657224'

// Local storage keys for OSS sales experiment (i, a)
const CHECK_OSS_SALES_EXPERIMENT_LOCAL_KEY = 'CHECK_OSS_SALES_EXPERIMENT_LOCAL_KEY'
const CHECKED_OSS_SALES_EXPERIMENT_LOCAL_KEY = 'CHECKED_OSS_SALES_EXPERIMENT_LOCAL_KEY'

/**
 * Sets the experiment value if not already checked.
 * @param value - The value to set for the experiment.
 */
export function setOssSalesExperimentValue(value: unknown): void {
  const storage = getStorage()
  if (!storage.get(CHECKED_OSS_SALES_EXPERIMENT_LOCAL_KEY)) {
    storage.set(CHECK_OSS_SALES_EXPERIMENT_LOCAL_KEY, value)
  }
}

/**
 * Marks the OSS sales experiment as checked.
 */
export function markOssSalesExperimentChecked(): void {
  getStorage().set(CHECKED_OSS_SALES_EXPERIMENT_LOCAL_KEY, true)
}

/**
 * Checks if the experiment value matches and is not checked.
 * @param value - The value to compare.
 * @returns True if not checked and value matches, false otherwise.
 */
export function isOssSalesExperimentValueMatch(value: unknown): boolean {
  const storage = getStorage()
  return !storage.get(CHECKED_OSS_SALES_EXPERIMENT_LOCAL_KEY)
    && value === storage.get(CHECK_OSS_SALES_EXPERIMENT_LOCAL_KEY)
}

// Exported aliases for backward compatibility (Lb, nN, wj)
export const Lb = setOssSalesExperimentValue // $$s0
export const nN = isOssSalesExperimentValueMatch // $$l1
export const wj = markOssSalesExperimentChecked // $$o2
