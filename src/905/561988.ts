/**
 * Calculates the Levenshtein distance between two strings.
 * Original function name: $$n0
 * @param source - The first string to compare.
 * @param target - The second string to compare.
 * @returns The Levenshtein distance between the two strings.
 */
export function levenshteinDistance(source: string, target: string): number {
  if (!(source && target))
    return (target || source).length

  const min = Math.min
  const matrix: number[][] = []

  // Initialize the first row and column of the matrix
  for (let i = 0; i <= target.length; i++) {
    matrix[i] = [i]
  }
  for (let j = 0; j <= source.length; j++) {
    matrix[0][j] = j
  }

  // Compute the Levenshtein distance
  for (let i = 1; i <= target.length; i++) {
    for (let j = 1; j <= source.length; j++) {
      const cost = target.charAt(i - 1) === source.charAt(j - 1) ? 0 : 1
      matrix[i][j] = min(
        matrix[i - 1][j - 1] + cost, // substitution
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j] + 1, // deletion
        // Transposition (Damerau-Levenshtein)
        source[j] === target[i - 1] && source[j - 1] === target[i]
          ? matrix[i - 1][j - 1]
          : Infinity,
      )
    }
  }

  return matrix[target.length][source.length]
}

/** Alias for levenshteinDistance (original export: f) */
export const f = levenshteinDistance
