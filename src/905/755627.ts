import { IntlMessageFormat } from "intl-messageformat"
import { isString } from "../905/71"
import { logError } from "../905/714362"
import { defaultLanguage } from "../905/816253"
import { throwTypeError } from "../figma_app/465776"
import { FieldType } from "../figma_app/763686"

export let scenegraphStringManagementBindingsInstance: PlaceholderRenderer | undefined

/**
 * Checks if a date is valid
 * @param date - Date object to validate
 * @returns boolean indicating if date is valid
 */
function isValidDate(date: Date): boolean {
  return !isNaN(date.getTime())
}

/**
 * Type for format types supported by the placeholder renderer
 */
type FormatType = 'date' | 'time' | 'number' | 'text'

/**
 * Class responsible for rendering placeholders with specific formatting
 */
class PlaceholderRenderer {
  /**
   * Renders a placeholder with the specified format type, pattern, and value
   * @param formatType - The type of format to apply
   * @param formatPattern - The pattern to use for formatting
   * @param value - The value to format
   * @returns Formatted string or empty string if formatting fails
   */
  renderPlaceholder(formatType: FieldType, formatPattern: string, value: string): string {
    // Determine the format type string based on FieldType
    const formatTypeString: FormatType
      = formatType === FieldType.DATE
        ? "date"
        : formatType === FieldType.TIME
          ? "time"
          : formatType === FieldType.NUMBER
            ? "number"
            : formatType === FieldType.TEXT
              ? "text"
              : throwTypeError(formatType)

    // If text format, return value as-is
    if (formatTypeString === "text") {
      return value
    }

    const language = defaultLanguage
    const messagePattern = `{parsedPlaceholder, ${formatTypeString}, ${formatPattern}}`

    // Parse the value based on format type
    let parsedValue: Date | number | string

    if (formatType === FieldType.DATE) {
      const date = new Date(`${value}T00:00:00`)
      parsedValue = isValidDate(date) ? date : new Date(0)
    }
    else if (formatType === FieldType.TIME) {
      const date = new Date(`${new Date().toDateString()} ${value}`)
      parsedValue = isValidDate(date) ? date : new Date(0)
    }
    else if (formatType === FieldType.NUMBER) {
      parsedValue = Number(value)
    }
    else if (formatType === FieldType.TEXT) {
      parsedValue = value
    }
    else {
      throwTypeError(formatType)
      parsedValue = value // This line will never be reached due to throwTypeError, but needed for type safety
    }

    try {
      const formattedResult = new IntlMessageFormat(messagePattern, language).format({
        parsedPlaceholder: parsedValue,
      })

      if (!isString(formattedResult)) {
        logError("renderPlaceholderImpl", "Result is not a string", {
          formatType,
          formatPattern,
          value,
          result: formattedResult,
        }, {
          reportAsSentryError: true,
        })
        return ""
      }

      return formattedResult
    }
    catch  {
      return ""
    }
  }
}

/**
 * Initializes the placeholder renderer instance
 */
export function setScenegraphStringManagementBindings(): void {
  scenegraphStringManagementBindingsInstance = new PlaceholderRenderer()
}

export const L6 = setScenegraphStringManagementBindings
export const Bm = scenegraphStringManagementBindingsInstance
