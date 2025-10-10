// Refactored code: Improved readability, added types, renamed variables for clarity
// Original function name: $$r0

interface TextSegment {
  text: string
  index: number
  skipSpellCheck: boolean
}

/**
 * Checks if a character is a letter or mark according to Unicode properties
 * @param char - Single character to check
 * @returns true if the character matches letter or mark categories
 */
function isLetterOrMark(char: string): boolean {
  return char.match(/[\p{Letter}\p{Mark}]/gu)?.length === 1
}

/**
 * Processes text and segments it into parts that should be spell-checked or skipped
 * @param inputText - The text to process
 * @returns Array of text segments with their indices and spell-check flags
 */
export function processTextForSpellCheck(inputText: string): TextSegment[] {
  const segments: TextSegment[] = []
  const tokens = inputText.split(/(\s+)/).filter(token => token)
  let currentIndex = 0
  let currentWord = ""

  for (const token of tokens) {
    // Skip long tokens, emails, URLs, or tokens with numbers
    if (
      token.length > 50
      || token.includes("@")
      || token.includes("://")
      || token.match(/\p{Number}/gu)
    ) {
      segments.push({
        text: token,
        index: currentIndex,
        skipSpellCheck: true,
      })
      currentIndex += token.length
    }
    else {
      let containsNonLatinChars = false

      for (let i = 0; i < token.length; i++) {
        const char = token[i]
        let shouldBreakWord = false

        if (isLetterOrMark(char)) {
          currentWord += char

          // Check if character is non-Latin/Cyrillic
          const isLatinOrCyrillic = (function (charToCheck: string): boolean {
            try {
              if (charToCheck.match(/[\p{Script_Extensions=Latin}\p{Script_Extensions=Cyrillic}\p{Mark}]/gu)?.length === 1) {
                return true
              }
              return false
            }
            catch {
              return true
            }
          })(char)

          if (!isLatinOrCyrillic) {
            containsNonLatinChars = true
          }
        }
        else if (
          (char.match(/[\u2019\u0027]/gu) || char === "-")
          && i > 0
          && i < token.length - 1
          && isLetterOrMark(token[i - 1])
          && isLetterOrMark(token[i + 1])
        ) {
          // Handle apostrophes and hyphens within words
          currentWord += char
        }
        else {
          shouldBreakWord = true
        }

        // Process word boundary or end of token
        if (shouldBreakWord || i === token.length - 1) {
          if (currentWord) {
            segments.push({
              text: currentWord,
              index: currentIndex,
              skipSpellCheck: containsNonLatinChars,
            })
            currentIndex += currentWord.length
            currentWord = ""
          }

          if (shouldBreakWord) {
            currentIndex += 1 // Account for the breaking character
          }
        }
      }
    }
  }

  return segments
}

export const B = processTextForSpellCheck
