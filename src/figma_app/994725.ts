import { dayjs } from "../905/920142";
import { isValidEmail } from "../figma_app/416935";
// Origin: /Users/allen/sigma-main/src/figma_app/994725.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, improved readability, added comments, simplified logic, noted dependencies.

// Assumed dependencies:
// - dayjs: date manipulation library (imported above)
// - isValidEmail: function to validate email addresses (imported above)

/**
 * Returns today's date and a minimum date offset by a given number of days.
 * @param daysAgo Number of days to subtract from today for minDate (default: 366)
 */
export function getDateRange(daysAgo?: number): { today: string; minDate: string } {
  const todayDate = new Date();
  return {
    today: dayjs(todayDate).format("YYYY-MM-DD"),
    minDate: dayjs(todayDate).subtract(daysAgo ?? 366, "days").format("YYYY-MM-DD"),
  };
}

/**
 * Returns the end of the given day in ISO format.
 * @param dateString Date string to process
 */
export function getEndOfDay(dateString?: string): string | null {
  if (!dateString) return null;
  // Adds 1 day, subtracts 1 second to get the last moment of the day
  return dayjs(dateString).add(1, "day").subtract(1, "second").format();
}

// Type for validation error
interface ValidationError {
  message: string;
  field: "email" | "startDate" | "endDate";
}

// Type for date range input
interface DateRangeInput {
  start: string;
  end: string;
}

/**
 * Validates a list of emails and a date range.
 * @param dateRange Date range object with start and end dates
 * @param emails Array of email strings to validate
 * @param daysAgo Number of days for minDate calculation
 * @returns ValidationError object or null if valid
 */
export function validateEmailsAndDateRange(
  dateRange: DateRangeInput,
  emails?: string[],
  daysAgo?: number
): ValidationError | null {
  // Validate emails first
  if (emails) {
    for (const email of emails) {
      const trimmedEmail = (email ?? "").trim();
      if (trimmedEmail && !isValidEmail(trimmedEmail)) {
        return {
          message: "An email is invalid",
          field: "email",
        };
      }
    }
  }

  // Validate date range
  const startDate = dayjs(dateRange.start);
  const endDate = dayjs(dateRange.end);

  if (!startDate.isValid()) {
    return {
      message: "The start date is invalid",
      field: "startDate",
    };
  }
  if (!endDate.isValid()) {
    return {
      message: "The end date is invalid",
      field: "endDate",
    };
  }
  if (startDate.diff(endDate, "days") > 0) {
    return {
      message: "The start date cannot be greater than the end date",
      field: "startDate",
    };
  }

  // Get date boundaries
  const { today, minDate } = getDateRange(daysAgo);

  // Check start date range
  if (startDate.diff(today, "days") > 0 || startDate.diff(minDate, "days") < 0) {
    return {
      message: "The start date is out of range",
      field: "startDate",
    };
  }

  // Check end date range
  if (endDate.diff(today, "days") > 0) {
    return {
      message: "The end date is out of range",
      field: "endDate",
    };
  }

  // All validations passed
  return null;
}

// Export aliases to preserve original code names
export const Bd = getDateRange;
export const H3 = getEndOfDay;
export const KJ = validateEmailsAndDateRange;
