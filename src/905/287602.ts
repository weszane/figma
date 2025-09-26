
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { highlightMatches } from '../905/792802'
/**
 * Props for HighlightedText component (originally $$s0).
 */
export interface HighlightedTextProps {
  text: string
  query: string
  highlightFontWeight?: number
}

/**
 * Renders text with highlighted matches for the query.
 * Original function: $$s0
 */
export const HighlightedText: React.FC<HighlightedTextProps> = ({
  text,
  query,
  highlightFontWeight,
}) => {
  // Early return if query is empty or whitespace
  if (query.trim() === '') {
    return jsx(Fragment, { children: text })
  }

  // Find matches in the text
  const matches = highlightMatches(text, query)

  /**
   * Render each match, highlighting the matching part.
   */
  return jsx(Fragment, {
    children: matches.map(([segment, matchLength], idx) =>
      matchLength > 0
        ? (
            jsxs(Fragment, {
              children: [
                jsx('span', {
                  className: 'highlight--matchingText--HIp6r',
                  style: { fontWeight: highlightFontWeight ?? 600 },
                  children: segment.substring(0, matchLength),
                }),
                matchLength < segment.length
                && jsx(Fragment, {
                  children: segment.substring(matchLength),
                }),
              ],
            }, idx)
          )
        : (
            jsx(Fragment, { children: segment }, idx)
          ),
    ),
  })
}

/**
 * Export for legacy compatibility (originally f).
 */
export const f = HighlightedText
