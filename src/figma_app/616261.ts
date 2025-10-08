import { reportError } from "../905/11"
import { ServiceCategories } from "../905/165054"

/**
 * Represents a match result with scoring and text information
 * Original name: $$a1
 */
export class MatchResult {
  public readonly result: any
  public readonly score: number
  public readonly text: any

  constructor(result: any, score: number, text: any) {
    this.result = result
    this.score = score
    this.text = text
  }

  /**
   * Compares this match result with another for equality
   * @param other - The other match result to compare with
   * @returns True if both results are equal, false otherwise
   */
  equals(other: MatchResult): boolean {
    return JSON.stringify(this) === JSON.stringify(other)
  }
}

/**
 * Handles fuzzy text matching and sorting based on regex patterns
 * Original name: $$s0
 */
export class FuzzyMatcher {
  private readonly forwardRegex: RegExp | null
  private readonly backwardRegex: RegExp | null

  constructor(query: string, acceptsUnicode: boolean) {
    this.forwardRegex = this.compileRegularExpression(query, acceptsUnicode)
    this.backwardRegex = this.compileRegularExpression(this.reverseText(query), acceptsUnicode)
  }

  /**
   * Checks if the query is valid for matching
   * @returns True if either forward or backward regex exists, false otherwise
   */
  isValidQuery(): boolean {
    return !!this.forwardRegex || !!this.backwardRegex
  }

  /**
   * Matches items against a query and sorts them by score
   * @param items - Array of items to match against
   * @param textExtractor - Function to extract text from each item
   * @returns Sorted array of match results
   */
  matchAndSort<T>(items: T[], textExtractor: (item: T) => string): MatchResult[] {
    const results: MatchResult[] = []

    items.forEach((item) => {
      const match = this.matchAgainstItem(item, textExtractor)
      if (match) {
        results.push(match)
      }
    })

    return this.sortResults(results)
  }

  /**
   * Matches text items directly and sorts them by score
   * @param texts - Array of text strings to match against
   * @returns Sorted array of match results
   */
  matchAgainst(texts: string[]): MatchResult[] {
    const results: MatchResult[] = []

    texts.forEach((text) => {
      const match = this.matchAgainstText(text)
      if (match) {
        results.push(match)
      }
    })

    return this.sortResults(results)
  }

  /**
   * Matches a single item against the query
   * @param item - The item to match
   * @param textExtractor - Function to extract text from the item
   * @returns Match result or null if no match
   */
  private matchAgainstItem<T>(item: T, textExtractor: (item: T) => string): MatchResult | null {
    if (!this.isValidQuery()) {
      return null
    }

    const text = textExtractor(item)
    const forwardMatch = this.forwardRegex?.exec(text)
    const backwardMatch = this.backwardRegex?.exec(this.reverseText(text))

    if (!forwardMatch || !backwardMatch) {
      return null
    }

    const forwardCaptures = forwardMatch.slice(1)
    const backwardCaptures = backwardMatch.slice(1)
      .map(capture => this.reverseText(capture))
      .reverse()

    const forwardScore = this.scoreMatch(forwardCaptures)
    const backwardScore = this.scoreMatch(backwardCaptures)
    const bestScore = Math.max(forwardScore, backwardScore)

    return new MatchResult(
      forwardScore >= backwardScore ? forwardCaptures : backwardCaptures,
      bestScore,
      item,
    )
  }

  /**
   * Matches a text string directly against the query
   * @param text - The text to match
   * @returns Match result or null if no match
   */
  private matchAgainstText(text: string): MatchResult | null {
    return this.matchAgainstItem(text, item => item as string)
  }

  /**
   * Compiles a regular expression for fuzzy matching
   * @param query - The query string
   * @param acceptsUnicode - Whether to accept unicode characters
   * @returns Compiled RegExp or null if compilation fails
   */
  private compileRegularExpression(query: string, acceptsUnicode: boolean): RegExp | null {
    let pattern = "^(.*)"
    let hasValidChars = false

    for (const char of query) {
      const isAlphanumeric = (char >= "A" && char <= "Z")
        || (char >= "a" && char <= "z")
        || (char >= "0" && char <= "9")

      if (acceptsUnicode || isAlphanumeric) {
        const escapedChar = escapeRegExp(char)
        pattern += `(${escapedChar})(.*?)`
        hasValidChars = true
      }
    }

    if (!hasValidChars) {
      return null
    }

    pattern += "$"

    try {
      return new RegExp(pattern, acceptsUnicode ? "iu" : "i")
    }
    catch (error) {
      reportError(ServiceCategories.EXTENSIBILITY, error, {
        extra: {
          query,
          acceptsUnicode,
          regex: pattern,
        },
      })
      return null
    }
  }

  /**
   * Reverses a text string
   * @param text - The text to reverse
   * @returns Reversed text string
   */
  private reverseText(text: string): string {
    return text.split("").reverse().join("")
  }

  /**
   * Scores a match based on captured groups
   * @param captures - Array of captured text groups
   * @returns Calculated score
   */
  private scoreMatch(captures: string[]): number {
    let previousCapture = ""
    let score = 0

    for (let i = 0; i < captures.length; i++) {
      const currentCapture = captures[i]

      // Only consider odd indices (the matched characters, not the gaps)
      if (i % 2 !== 0) {
        if (previousCapture === "") {
          // First match gets a bonus
          score += 10
          // Extra bonus for first character match
          if (i === 1) {
            score++
          }
        }
        else if (previousCapture.slice(-1) === " ") {
          // Bonus for matching after a space
          score += 10
        }
      }

      previousCapture = currentCapture
    }

    return score
  }

  /**
   * Sorts match results by score (descending) and text (ascending)
   * @param results - Array of match results to sort
   * @returns Sorted array of match results
   */
  private sortResults(results: MatchResult[]): MatchResult[] {
    return results.sort((a, b) => {
      if (a.score > b.score)
        return -1
      if (a.score < b.score)
        return 1
      if (a.text < b.text)
        return -1
      if (a.text > b.text)
        return 1
      return 0
    })
  }
}

/**
 * Escapes special regex characters in a string
 * Original name: $$o2
 * @param text - The text to escape
 * @returns Escaped text string
 */
export function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

// Export aliases for backward compatibility
export const Ax = FuzzyMatcher
export const Jt = MatchResult
export const eY = escapeRegExp
