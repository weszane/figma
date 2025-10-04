import { useEffect, useMemo, useRef, useState } from "react"
import { jsx } from "react/jsx-runtime"
import { getI18nString } from "../905/303541"
import { dayjs } from "../905/920142"
import { getI18nState } from "../figma_app/363242"
import { throwError } from "../figma_app/465776"
import { capitalize } from "../figma_app/930338"



/**
 * Adjusts the style for Japanese locale to use narrow format
 * @param locale - The locale string
 * @param style - The original style
 * @returns Adjusted style (narrow for Japanese, original for others)
 */
function adjustStyleForLocale(locale: string, style: Intl.RelativeTimeFormatStyle): Intl.RelativeTimeFormatStyle {
  return locale === "ja" ? "narrow" : style
}

/**
 * Custom hook for relative time formatting with automatic updates
 * @param date - The date to format
 * @param style - The formatting style (default: "long")
 * @param locale - The locale to use (default: primary locale from i18n state)
 * @returns Formatted relative time string
 */
export function useRelativeTime(
  date: Date | string | number | null,
  style: Intl.RelativeTimeFormatStyle = "long",
  locale: string = getI18nState().getPrimaryLocale(false)
): string {
  const adjustedStyle = adjustStyleForLocale(locale, style)

  const relativeTimeFormatter = useMemo(() => new Intl.RelativeTimeFormat(locale, {
    style: adjustedStyle,
  }), [locale, adjustedStyle])

  const updateInterval = useState(() => calculateUpdateInterval(date))[0]
  const [formattedTime, setFormattedTime] = useState(() => formatRelativeTime(relativeTimeFormatter, date))

  // Update formatted time when date or formatter changes
  useEffect(() => {
    setFormattedTime(formatRelativeTime(relativeTimeFormatter, date))
  }, [date, relativeTimeFormatter])

  // Update interval when date changes
  useEffect(() => {
    calculateUpdateInterval(date)
  }, [date])

  // Auto-update the formatted time based on the interval
  useInterval(() => {
    if (updateInterval > 0 && date !== null) {
      setFormattedTime(formatRelativeTime(relativeTimeFormatter, date))
      calculateUpdateInterval(date)
    }
  }, updateInterval)

  return formattedTime || ""
}

/**
 * Formats relative time without automatic updates
 * @param date - The date to format
 * @param style - The formatting style (default: "long")
 * @param locale - The locale to use (default: primary locale from i18n state)
 * @returns Formatted relative time string
 */
export function formatRelativeTimeStatic(
  date: Date | string | number | null,
  style: Intl.RelativeTimeFormatStyle = "long",
  locale: string = getI18nState().getPrimaryLocale(false)
): string {
  const adjustedStyle = adjustStyleForLocale(locale, style)
  return formatRelativeTime(new Intl.RelativeTimeFormat(locale, {
    style: adjustedStyle,
  }), date) || ""
}

/**
 * Component for displaying relative time with optional onChange callback
 */
export function RelativeTimeDisplay(props: {
  date: Date | string | number | null
  style?: Intl.RelativeTimeFormatStyle
  locale?: string
  className?: string
  title?: string
  capitalize?: boolean
  onChange?: (formattedTime: string) => void
}): JSX.Element {
  const formattedTime = useRelativeTime(props.date, props.style, props.locale)

  useEffect(() => {
    props.onChange?.(formattedTime)
  }, [props.onChange, formattedTime])

  return jsx("span", {
    className: props.className || "",
    title: props.title,
    children: props.capitalize ? capitalize(formattedTime) : formattedTime,
  })
}

/**
 * Converts time unit to milliseconds
 * @param value - The numeric value
 * @param unit - The time unit
 * @returns Time in milliseconds
 */
function convertToMilliseconds(value: number, unit: string): number {
  switch (unit) {
    case "second":
      return 1e3 * value
    case "minute":
      return 6e4 * value
    case "hour":
      return 36e5 * value
    case "day":
      return 864e5 * value
    case "month":
      return 2592e6 * value
    case "year":
      return 31536e6 * value
    default:
      throwError(`Unsupported relative time unit (${unit})`)
  }
}

// Time unit configuration for relative time formatting
const TIME_UNITS_CONFIG = Object.values({
  s: {
    min: 0,
    max: convertToMilliseconds(45, "second"),
    factor: convertToMilliseconds(1, "second"),
    unit: "second",
  },
  m: {
    min: convertToMilliseconds(45, "second"),
    max: convertToMilliseconds(90, "second"),
    unit: "minute",
  },
  mm: {
    min: convertToMilliseconds(90, "second"),
    max: convertToMilliseconds(45, "minute"),
    factor: convertToMilliseconds(1, "minute"),
    unit: "minute",
  },
  h: {
    min: convertToMilliseconds(45, "minute"),
    max: convertToMilliseconds(90, "minute"),
    unit: "hour",
  },
  hh: {
    min: convertToMilliseconds(90, "minute"),
    max: convertToMilliseconds(22, "hour"),
    factor: convertToMilliseconds(1, "hour"),
    unit: "hour",
  },
  d: {
    min: convertToMilliseconds(22, "hour"),
    max: convertToMilliseconds(36, "hour"),
    factor: convertToMilliseconds(1, "day"),
    unit: "day",
  },
  dd: {
    min: convertToMilliseconds(36, "hour"),
    max: convertToMilliseconds(26, "day"),
    factor: convertToMilliseconds(1, "day"),
    unit: "day",
  },
  M: {
    min: convertToMilliseconds(26, "day"),
    max: convertToMilliseconds(45, "day"),
    unit: "month",
  },
  MM: {
    min: convertToMilliseconds(45, "day"),
    max: convertToMilliseconds(320, "day"),
    factor: convertToMilliseconds(1, "month"),
    unit: "month",
  },
  yy: {
    min: convertToMilliseconds(320, "day"),
    max: void 0,
    factor: convertToMilliseconds(1, "year"),
    unit: "year",
  },
})

/**
 * Formats a date relative to now using Intl.RelativeTimeFormat
 * @param formatter - The RelativeTimeFormat instance
 * @param date - The date to format
 * @returns Formatted relative time string
 */
function formatRelativeTime(formatter: Intl.RelativeTimeFormat, date: Date | string | number | null = new Date()): string {
  if (date === null) {
    return "Invalid Date"
  }

  let targetDate: Date
  if (typeof date === "string" || typeof date === "number") {
    targetDate = dayjs.utc(date).toDate()
  } else {
    targetDate = date
  }

  const now = new Date()

  if (isNaN(targetDate.getTime())) {
    return targetDate.toString()
  }

  const timeDifference = targetDate.getTime() - now.getTime()
  const absoluteDifference = Math.abs(timeDifference)
  const isPast = timeDifference < 0

  for (const unitConfig of TIME_UNITS_CONFIG) {
    if (absoluteDifference >= unitConfig.min) {
      if (unitConfig.max && absoluteDifference >= unitConfig.max) {
        continue
      }

      if (absoluteDifference < convertToMilliseconds(45, "second")) {
        return getI18nString("general.time.just_now_past")
      }

      let formattedTime = formatter.format(
        (isPast ? -1 : 1) * (unitConfig.factor ? Math.round(absoluteDifference / unitConfig.factor) : 1),
        unitConfig.unit as Intl.RelativeTimeFormatUnit
      )

      if (getI18nState()?.pseudoLocale) {
        formattedTime = getI18nState().getPseudoLocalizedDynamicString(formattedTime)
      }

      return formattedTime
    }
  }

  return "Invalid Date"
}

/**
 * Custom hook for setting up intervals with dynamic callbacks
 * @param callback - Function to call on each interval
 * @param delay - Interval delay in milliseconds (0 or negative to disable)
 * @returns Interval reference
 */
export function useInterval(callback: () => void, delay: number): React.MutableRefObject<NodeJS.Timeout | number | undefined> {
  const intervalRef = useRef<NodeJS.Timeout | number>()
  const callbackRef = useRef(callback)

  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  // Set up or clear interval when delay changes
  useEffect(() => {
    if (delay > 0) {
      intervalRef.current = setInterval(() => callbackRef.current(), delay)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [delay])

  return intervalRef
}

/**
 * Calculates the appropriate update interval based on how far the date is from now
 * @param date - The date to calculate interval for
 * @returns Update interval in milliseconds
 */
function calculateUpdateInterval(date: Date | string | number | null): number {
  if (!date) {
    return 0
  }

  const targetDate = dayjs.utc(date).toDate()
  const timeDifference = Math.abs(dayjs.utc(targetDate).diff(new Date()))

  if (timeDifference < convertToMilliseconds(1, "hour")) {
    return convertToMilliseconds(30, "second")
  } else if (timeDifference < convertToMilliseconds(1, "day")) {
    return convertToMilliseconds(30, "minute")
  } else {
    return convertToMilliseconds(6, "hour")
  }
}

// Export aliases for backward compatibility
export const Ak = useRelativeTime
export const JD = formatRelativeTimeStatic
export const h1 = RelativeTimeDisplay
