import { getStorage } from "../905/657224"
import { throwTypeError } from "../figma_app/465776"

const CURATOR_LOGGING_KEY = "curatorLoggingEnabled"

/**
 * Sets the curator logging level
 * @param level - The logging level to set ($$s0)
 * @returns A confirmation message
 */
export function setCuratorLoggingLevel(level: "debug" | "trace" | "disabled"): string {
  const storage = getStorage()

  switch (level) {
    case "debug":
      storage.set(CURATOR_LOGGING_KEY, "debug")
      break
    case "trace":
      storage.set(CURATOR_LOGGING_KEY, "trace")
      break
    case "disabled":
      storage.delete(CURATOR_LOGGING_KEY)
      break
    default:
      throwTypeError(level)
  }

  return `Curator logging set to ${level}`
}

/**
 * Gets the current curator logging level
 * @returns The current logging level ($$o1)
 */
export function getCuratorLoggingLevel(): "debug" | "trace" | "disabled" {
  const storedValue = getStorage().get(CURATOR_LOGGING_KEY)

  switch (storedValue) {
    case "debug":
      return "debug"
    case "trace":
      return "trace"
    default:
      return "disabled"
  }
}

export const L = setCuratorLoggingLevel
export const r = getCuratorLoggingLevel
