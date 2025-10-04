// Original: $$n1
export const FIG_KIWI = "fig-kiwi";

// Original: $$r3
export const FIG_JAM = "fig-jam.";

// Original: $$a0
export const FIG_DIFF = "fig-diff";

// Original: $$s5
export const FIG_SITE = "fig-site";

// Original: $$o2
export const FIG_DECA = "fig-deca";

/**
 * Checks if the provided buffer represents a ZIP file by verifying the presence of the PK header.
 * @param buffer - The buffer to inspect, expected to be a Uint8Array or similar with byteLength and index access.
 * @returns True if the buffer has at least 2 bytes and starts with 80 (P) and 75 (K), indicating a ZIP file; otherwise, false.
 */
export function isZipFile(buffer: { byteLength: number; [index: number]: number }): boolean {
  return buffer.byteLength >= 2 && buffer[0] === 80 && buffer[1] === 75;
}

// Original exports refactored to use new constant and function names
export const Eo = FIG_DIFF;
export const Q_ = FIG_KIWI;
export const SR = FIG_DECA;
export const cq = FIG_JAM;
export const f6 = isZipFile;
export const ut = FIG_SITE;
