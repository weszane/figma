// Original: $$r0
/** Array of tab categories or recommended items. */
export const tabCategories: string[] = ["thisFile", "updates", "recommended", "teams", "org", "uiKits"];

// Original: $$n2
/** Utility object for tab-related functions. */
export const tabUtils: { useTabContentsWidth: () => number } = {
  /**
   * Calculates the width for tab contents based on window inner width.
   * Original: useTabContentsWidth function in $$n2
   * @returns The calculated width, capped at 560.
   */
  useTabContentsWidth: (): number => Math.min(560, 0.76 * window.innerWidth),
};

// Original: $$a1
/** Draft status string. */
export const draftStatus: string = "draft";

// Exports with original names as aliases to maintain compatibility
export const Ir = tabCategories; // Original: $$r0
export const _w = draftStatus; // Original: $$a1
export const mq = tabUtils; // Original: $$n2
