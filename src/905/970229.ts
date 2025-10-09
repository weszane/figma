/**
 * MIME type to hex signature mapping for file type detection
 * @see $$r0 (original function name)
 */
const MIME_SIGNATURES: Record<string, string> = {
  "image/png": "89504e47",
  "image/jpeg": "ffd8ff",
  "image/gif": "47494638",
  "image/svg+xml": "3c737667",
  "video/mp4": "66747970",
  "video/webm": "1a45dfa3",
}

/**
 * Detects the MIME type of a file based on its binary signature
 * @param bytes - Array of bytes representing the file content
 * @returns The detected MIME type or null if no match found
 * @see $$r0 (original function name)
 */
export function detectMimeType(bytes: number[] | Uint8Array ): string | null {
  for (const [mimeType, hexSignature] of Object.entries(MIME_SIGNATURES)) {
    const signatureLength = hexSignature.length / 2
    const signatureBytes = bytes.slice(0, signatureLength)

    const isMatch = signatureBytes.every((byte, index) => {
      const hexPair = hexSignature.slice(index * 2, index * 2 + 2)
      return byte === parseInt(hexPair, 16)
    })

    if (isMatch) {
      return mimeType
    }
  }

  return null
}

export const i = detectMimeType
