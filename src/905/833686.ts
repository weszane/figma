export function parseInteger(str: string, startIndex: number): number {
  let result = 0
  let isNegative = false
  let index = startIndex

  // Check for negative sign
  if (str.charCodeAt(index) === 45) { // ASCII code for '-'
    isNegative = true
    index++
  }

  // Parse digits
  while (index < str.length) {
    const charCode = str.charCodeAt(index++)

    // Break if not a digit (0-9)
    if (charCode < 48 || charCode > 57) {
      break
    }

    // Convert char code to digit and accumulate result
    result = 10 * result + (charCode - 48)
  }

  return isNegative ? -result : result
}

export const G = parseInteger
