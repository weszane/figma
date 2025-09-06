/**
 * Compares two version strings (e.g., "1.2.3" vs "1.2.4").
 * Returns -1 if versionA > versionB, 1 if versionA < versionB, 0 if equal.
 * Original function name: composeVersion
 * @param versionA - First version string to compare.
 * @param versionB - Second version string to compare.
 */
export function compareVersions(versionA: string, versionB: string): number {
  const partsA = versionA.split('.')
  const partsB = versionB.split('.')
  const maxLength = Math.max(partsA.length, partsB.length)

  for (let idx = 0; idx < maxLength; ++idx) {
    const numA = idx < partsA.length ? +partsA[idx] : 0
    const numB = idx < partsB.length ? +partsB[idx] : 0
    if (numA > numB)
      return -1
    if (numA < numB)
      return 1
  }
  return 0
}

// Refactored import/export variable name
// export const Z = composeVersion
// Now:
export const Z = compareVersions
