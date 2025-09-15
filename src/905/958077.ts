import { perfTimerFrameManagerBindings } from '../figma_app/763686'

/**
 * Enum representing performance profile levels.
 * Original name: $$r0
 */
export const PerfProfileLevel = {
  LEGACY: 0,
  LOW: 100,
  MEDIUM: 200,
  HIGH: 300,
  MAX: 400,
  DEFAULT: 100,
}

/**
 * Runs a profiling session for a given label and level, executing the provided callback.
 * Starts and stops the profile using perfTimerFrameManagerBindings.
 * Original name: $$a1
 * @param label - The profile label.
 * @param level - The profile level (default: 0).
 * @param callback - The function to execute while profiling.
 */
export function runProfileSession(
  label: string,
  level = PerfProfileLevel.LEGACY,
  callback: () => void,
): void {
  let started = false
  if (perfTimerFrameManagerBindings) {
    started = perfTimerFrameManagerBindings?.startProfile(label, level)
  }
  try {
    callback()
  }
  finally {
    if (started && perfTimerFrameManagerBindings) {
      perfTimerFrameManagerBindings?.stopProfile(label, level)
    }
  }
}

// Exported constants with refactored names
export const K = PerfProfileLevel // Original: K
export const L = runProfileSession // Original: L
