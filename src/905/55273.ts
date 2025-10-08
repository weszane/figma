// Original: function n()
interface Config {
  LOG_LEVEL: number
  LOG_FILTERS: any[]
  LOG_RESPONSIVE: boolean
  TIDY_UP_OVERLAP_THRESHOLD: number
  HORIZONTAL_TIDY_UP_SPACING_EQUALITY_THRESHOLD: number
  VERTICAL_TIDY_UP_SPACING_EQUALITY_THRESHOLD: number
  AUTO_CHILDREN_WIDTH_SIMILARITY_LIMIT: number
  PRE_SEGMENTATION_STRATEGY: string
  HORIZONTAL_AXIS_OVERLAP_PX: number
  VERTICAL_AXIS_OVERLAP_PX: number
  WRAP_CANDIDATE_VERTICAL_THRESHOLD: number
}

/**
 * Creates and returns the default configuration object.
 * @returns {Config} The default config object.
 */
function getAALSettings(): Config {
  return {
    LOG_LEVEL: 1,
    LOG_FILTERS: [],
    LOG_RESPONSIVE: false,
    TIDY_UP_OVERLAP_THRESHOLD: 0.1,
    HORIZONTAL_TIDY_UP_SPACING_EQUALITY_THRESHOLD: 0.3,
    VERTICAL_TIDY_UP_SPACING_EQUALITY_THRESHOLD: 0.3,
    AUTO_CHILDREN_WIDTH_SIMILARITY_LIMIT: 4,
    PRE_SEGMENTATION_STRATEGY: "none",
    HORIZONTAL_AXIS_OVERLAP_PX: 3,
    VERTICAL_AXIS_OVERLAP_PX: 8,
    WRAP_CANDIDATE_VERTICAL_THRESHOLD: 200,
  }
}

// Original: export let $$r0 = n();
export let aalSettingsConfig: Config = getAALSettings()

/**
 * Resets the config object to its default values.
 */
export function resetAAL(): void {
  Object.assign(aalSettingsConfig, getAALSettings())
}

// Original: export const N = $$r0;
export const N = aalSettingsConfig

// Original: export const e = $$a1;
export const e = resetAAL
