import { Children, memo, useMemo } from "react"
import { jsx } from "react/jsx-runtime"
import { getI18nState } from "../figma_app/363242"

export interface ListFormatterProps {
  children: React.ReactNode
  locale?: string
  formatStyle?: "long" | "short" | "narrow"
  formatType?: "conjunction" | "disjunction" | "unit"
  className?: string
}

/**
 * ListFormatter - A component that formats a list of React nodes using Intl.ListFormat
 * Original name: $$s0
 */
export const ListFormatter = memo(({
  children,
  locale: providedLocale,
  formatStyle = "long",
  formatType = "conjunction",
  className = "",
}: ListFormatterProps) => {
  // Determine the locale to use, falling back to the primary locale if none provided
  const locale = useMemo(() =>
    providedLocale || getI18nState().getPrimaryLocale(false), [providedLocale])

  // Create the Intl.ListFormat instance with the specified options
  const listFormatter = useMemo(() => new Intl.ListFormat(locale, {
    style: formatStyle,
    type: formatType,
  }), [locale, formatStyle, formatType])

  // Convert children to an array for processing
  const childArray = useMemo(() => Children.toArray(children), [children])

  // Format the children using the list formatter
  const formattedElements = useMemo(() => {
    // Create placeholder strings for each child
    const placeholders = childArray.map((_, index) => `${index}`)

    // Format the placeholders and map back to the actual elements
    return listFormatter.formatToParts(placeholders).map((part, index) => {
      if (part.type === "element") {
        // Replace element placeholders with actual child elements
        const childIndex = Number(part.value)
        return childArray[childIndex]
      }
      else if (part.type === "literal") {
        // Wrap literal text in span elements
        return jsx("span", {
          children: part.value,
        }, `${index}_literal`)
      }
      // Filter out other part types
      return null
    })
  }, [listFormatter, childArray])

  // Render the formatted elements within a span
  return jsx("span", {
    className,
    children: formattedElements,
  })
})

// Export alias for backward compatibility
export const T = ListFormatter
